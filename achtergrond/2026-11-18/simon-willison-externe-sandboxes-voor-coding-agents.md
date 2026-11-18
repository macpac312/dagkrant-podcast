---
titel: "Simon Willison: externe sandboxes voor coding agents"
url: https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/
bron: aitech
kind: aitech
gegenereerd: 2026-11-18T05:32:38
---

© simonwillison.net

Willison beschrijft een patroon waarin de agent buiten de sandbox draait en alleen zijn code erin.

Drie sandboxserver-implementaties bieden dezelfde localhost-API, bruikbaar met Pi, Claude Code of Codex.

Een allow-list proxy en vervanging van credentials beperken wat gelekte of gemanipuleerde code kan.

Doel: veilig experimenteren met lokale modellen zonder schade door fouten of prompt-injectie.

Het probleem: code die niemand heeft gelezen

Coding agents schrijven en draaien code die geen mens vooraf controleert. Dat is hun kracht en hun risico. Een fout van het model of een prompt-injectie, verborgen instructies in een webpagina of document die de agent leest, kan schadelijke acties op de eigen machine veroorzaken. Simon Willison onderzoekt samen met het AI-lab Prime Radiant, achter het project Superpowers, nieuwe manieren om die code veilig uit te voeren, met nadruk op het veilig uitproberen van lokale modellen. Zijn post van 17 november 2026 is een linkpost naar de bijdrage op het blog van Prime Radiant.

Waarom de agent buiten de sandbox hoort

Het kernidee van het externe sandbox-patroon is een scheiding van rollen. Veel bestaande oplossingen draaien de hele agent in een container of virtuele machine. Hier blijft de agent zelf buiten en stuurt hij alleen opdrachten naar een speciale sandbox, via een API op localhost. Daardoor kan dezelfde sandbox met verschillende agents worden gebruikt, en hoeft een agent niet te worden aangepast aan elke omgeving. De sandbox bevat optioneel een HTTP/HTTPS-proxy met allow-list: alleen vooraf goedgekeurde hosts zijn bereikbaar, zodat gemanipuleerde code geen data naar een willekeurige server kan sturen.

I continue to be fascinated by the challenge of safely running untrusted code. — Simon Willison

Geheimen zonder gelekt te worden

De meest praktische eigenschap is de credential-vervanging. Wanneer de code in de sandbox een geauthenticeerde API wil aanroepen, plaatst de agent een placeholder en vervangt de proxy die door het echte geheim. De agent, en dus ook elke prompt-injectie in de agent, ziet de sleutel nooit. Dat is bruikbaarder dan een totaalverbod op netwerktoegang, want veel nuttig werk vereist API-aanroepen. Het patroon past bij een bredere beweging in AI-beveiliging: geef modellen niet méér rechten dan nodig, en dwing grenzen af buiten het model, niet binnen zijn prompt.

Context en gevolgen

In dezelfde krant staat een kritiek Java-lek met een score van 9,2 op 10, waarmee aanvallers op afstand systemen kunnen overnemen, en een bericht over AI-agents die medische formulieren invullen voor Amerikaanse verzekeraars. Beide lijnen laten zien waarom agent-sandboxing belangrijk wordt: hoe meer taken agents overnemen en hoe bruikbaarder ze worden voor aanvallers en bedrijven, hoe belangrijker de afbakening van wat ze mogen doen. De bron gaat niet in op prestatieverlies of uitvoerige beveiligingstests; dat blijft nog te beoordelen.

Conclusie

Het externe sandbox-patroon is geen wondermiddel, maar een verstandige architectuurkeuze: houd de agent los van het gevaarlijke deel en laat de omgeving de regels afdwingen. Wie lokale modellen draait, krijgt zo een manier om te experimenteren zonder de eigen machine in te zetten. De echte test is of de aanpak onder druk standhoudt wanneer agents steeds zelfstandiger worden.

▶ YouTube

2026 in LLMs — Simon Willison, Datasette

Bronnen:

 

simonwillison.net ↗
