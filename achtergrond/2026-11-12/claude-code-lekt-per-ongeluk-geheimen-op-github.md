---
titel: "Claude Code lekt per ongeluk geheimen op GitHub"
url: https://arstechnica.com/ai/2026/11/claude-code-settings-files-expose-thousands-of-secrets-on-github/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-12T05:38:17
---

© arstechnica.com

Apiiro: meer dan 100.000 publieke repo's bevatten Claude Codes settings.local.json; ~1100 met geheimen.

Oorzaak: goedgekeurde commando's worden letterlijk opgeslagen; .gitignore dekt alleen globaal.

Claude Code commit het bestand soms zelf; geheimen blijven ook in forks staan.

Bugmeldingen sinds augustus 2025 werden gesloten zonder actie; Anthropic kijkt nu naar het probleem.

Een bestand dat niet gedeeld hoort te worden

Claude Code lekt gevoelige informatie op publieke GitHub-repositories door een omissie in de manier waarop instellingenbestanden worden behandeld, melden beveiligingsonderzoekers van Apiiro aan Ars Technica. Ze vonden duizenden geheimen, waaronder databasewachtwoorden, API-tokens en root-logins, in Claude Code-instellingenbestanden die in GitHub-repo's terechtkwamen. Het gaat om meer dan 100.000 gevallen waarin het lokale instellingenbestand openbaar werd; in ongeveer 1100 daarvan, bij 63 organisaties, stonden echte geheimen. Dat is ruim één procent. Dat klinkt beperkt, maar bij een wijdverbreide tool is één procent van de bestanden een omvangrijk probleem, en een enkel lek token volstaat voor een inbraak.

Een ontwerpfout in standaardgedrag

Het mechanisme is alledaags. De gebruiker geeft toestemming, de tool onthoudt dat en bewaart het commando letterlijk. Dat is op zichzelf een redelijke keuze zolang het bestand lokaal blijft, behalve als de machine zelf wordt gecompromitteerd. Anthropic wijst in de documentatie erop dat het bestand aan de globale .gitignore wordt toegevoegd, maar die bescherming geldt per machine, niet per repo. Een gekloonde repo op een andere computer of een map die later een repo wordt, mist de bescherming. Een bijkomende factor: Claude Code commit het bestand soms zelf zonder dat de gebruiker erom vraagt. Daarmee wordt het geen puur menselijke fout, maar een samenspel van gedrag van mens en agent. Dat verklaart ook waarom ervaren ontwikkelaars erin trapten: wie een commando eenmaal heeft goedgekeurd, denkt er niet meer aan, en een agent die in de achtergrond bestanden toevoegt, vermindert de kans dat iemand de commit nog kritisch bekijkt. Het is opvallend dat bugmeldingen van augustus 2025 over het ontbrekende .gitignore-gedrag na 60 dagen inactiviteit automatisch werden gesloten, zonder oplossing.

Zolang het bestand lokaal blijft, is dit geen groot beveiligingsprobleem; zodra het in een repo belandt, is het een open deur.

Gevolgen en perspectieven

Voor getroffen bedrijven is de praktische les eenvoudig en pijnlijk: roteer ieder lekgebleven geheim, ook als het bestand is verwijderd, want forks en caches zijn buiten bereik. Voor Anthropic is het een reputatiekwestie, juist nu het bedrijf Claude naar een teamwerkplek uitbreidt met Sheets en Whiteboards en nieuwe modellen uitbrengt. Boris Cherny van het Claude Code-team liet volgens Ars Technica weten dat het team hiernaar kijkt. Voor bedrijven met strenge compliance-eisen is het extra pijnlijk: een lek token in een openbare repo is al een melding bij toezichthouders waard, ongeacht of er misbruik is geweest. Dat Apiiro de bevindingen via Ars Technica naar buiten bracht, maakt de druk op Anthropic groter om niet alleen een patch uit te brengen maar ook de eerdere meldingen te verklaren. Het onderstreept een breder patroon in AI-tools: standaardinstellingen bepalen de veiligheid, zoals ook de 35.578 van 37.571 Grok Build-apps lieten zien die zonder inlog open stonden. Onderzoekers en ontwikkelaars verschillen van mening over de schuld. Sommigen zien een gebruikersfout, anderen een voorspelbaar gevolg van een ontwerp dat geheimen bewaart zonder ze te maskeren.

Conclusie

Een agent die gebruiker, commando's en repo koppelt, moet ervan uitgaan dat alles wat hij opslaat uiteindelijk gepubliceerd wordt. Veilige defaults betekenen: geheimen maskeren, het bestand per repo uitsluiten en niet zelf committen. Zolang dat ontbreekt, schuift verantwoordelijkheid naar de ontwikkelaar die meestal zijn aandacht bij het project heeft, niet bij een instellingenbestand. Een bugmelding van meer dan een jaar oud had dit moeten voorkomen. Voor ontwikkelaars geldt intussen een simpele vuistregel: zet .claude/settings.local.json in elke repo expliciet in de .gitignore en scan eigen repo's op sleutels voordat ze openbaar worden.

▶ YouTube

Claude Code lekt geheimen naar GitHub.

Bronnen:

 

arstechnica.com ↗
