/* De Dagkrant — service worker voor de telefoonversie op GitHub Pages.
 * Geschreven door src/publish_podcast.py naar de root van dagkrant-podcast
 * (scope /dagkrant-podcast/). Los van public/sw.js (laptop-Next).
 *
 * - laatste.html (en de scope-root): stale-while-revalidate.
 * - <datum>.html, achtergrond/<datum>/…, artikelen/<datum>/…: bewaard zodra ze
 *   geopend worden, in cache "dagkrant-pages-<datum>" (stale-while-revalidate,
 *   ?t=… cache-busters genegeerd).
 * - audio/*.mp3: alleen uit de cache als "Bewaar voor offline" hem bewaarde
 *   (met Range-ondersteuning); anders gewoon netwerk.
 * - JSON/XML (deepdive-status.json, offline/<datum>.json, feed.xml): netwerk eerst.
 * - Opruimen: datum-caches ouder dan 3 dagen; per datum max 400 runtime-items.
 */
const PREFIX = "dagkrant-pages-";
const CORE = PREFIX + "core";
const KEEP_DAYS = 3;
const MAX_ENTRIES = 400;
const SCOPE = new URL(self.registration ? self.registration.scope : "./", self.location.href).pathname;
const DATE_RE = /(\d{4}-\d{2}-\d{2})/;

function bare(url) {
  const u = new URL(url);
  u.search = "";
  u.hash = "";
  return u.href;
}

function cacheFor(rel) {
  const m = DATE_RE.exec(rel);
  return m ? PREFIX + m[1] : CORE;
}

async function cleanup() {
  const today = new Date().toISOString().slice(0, 10);
  const cut = new Date(Date.parse(today + "T00:00:00Z") - KEEP_DAYS * 86400000).toISOString().slice(0, 10);
  const keys = await caches.keys();
  await Promise.all(keys.map((k) => {
    const m = /^dagkrant-pages-(\d{4}-\d{2}-\d{2})$/.exec(k);
    return m && m[1] < cut ? caches.delete(k) : null;
  }));
}

async function trim(name) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ENTRIES; i++) await cache.delete(keys[i]);
}

async function put(name, key, res) {
  try {
    const cache = await caches.open(name);
    await cache.put(key, res);
    if (name !== CORE) await trim(name);
  } catch (e) {
    // Opslag vol of geweigerd: gewoon niet bewaren.
  }
}

function offline(rel) {
  return new Response("Offline — dit bestand is niet bewaard.", {
    status: 504,
    headers: { "Content-Type": "text/plain; charset=utf-8", "X-Dagkrant-Offline": "1" },
  });
}

async function staleWhileRevalidate(event, rel, name) {
  const key = bare(event.request.url);
  const cached = await caches.match(key);
  const network = fetch(event.request)
    .then((res) => {
      if (res && res.ok && res.type === "basic") {
        const copy = res.clone();
        event.waitUntil(put(name, key, copy));
      }
      return res;
    })
    .catch(() => null);
  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  const res = await network;
  if (res) return res;
  if (event.request.mode === "navigate") {
    const home = await caches.match(new URL("laatste.html", self.registration.scope).href);
    if (home) return home;
  }
  return offline(rel);
}

async function networkFirst(event, rel, name) {
  const key = bare(event.request.url);
  try {
    const res = await fetch(event.request);
    if (res && res.ok && res.type === "basic") event.waitUntil(put(name, key, res.clone()));
    return res;
  } catch (e) {
    return (await caches.match(key)) || offline(rel);
  }
}

async function audio(event) {
  const key = bare(event.request.url);
  const cached = await caches.match(key);
  if (!cached) return fetch(event.request);
  const range = event.request.headers.get("range");
  if (!range) return cached;
  const blob = await cached.blob();
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  let start = m && m[1] ? Number(m[1]) : 0;
  let end = m && m[2] ? Number(m[2]) : blob.size - 1;
  if (m && !m[1] && m[2]) {
    start = Math.max(0, blob.size - Number(m[2]));
    end = blob.size - 1;
  }
  end = Math.min(end, blob.size - 1);
  if (start > end) return new Response("", { status: 416, headers: { "Content-Range": `bytes */${blob.size}` } });
  return new Response(blob.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": cached.headers.get("Content-Type") || "audio/mpeg",
      "Content-Range": `bytes ${start}-${end}/${blob.size}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes",
    },
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE)
      .then((c) => Promise.all(["laatste.html", "manifest.json", "icon.svg"].map((u) => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(cleanup().then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(SCOPE)) return;
  const rel = url.pathname.slice(SCOPE.length);
  if (rel === "sw.js") return;
  if (rel === "" || rel === "laatste.html" || rel === "index.html") {
    event.respondWith(staleWhileRevalidate(event, rel, CORE));
  } else if (/^audio\/[^/]+\.mp3$/.test(rel)) {
    event.respondWith(audio(event));
  } else if (/\.(json|xml)$/.test(rel) && !/_url_index\.json$/.test(rel)) {
    event.respondWith(networkFirst(event, rel, cacheFor(rel)));
  } else if (DATE_RE.test(rel)) {
    event.respondWith(staleWhileRevalidate(event, rel, cacheFor(rel)));
  } else {
    event.respondWith(networkFirst(event, rel, CORE));
  }
});
