---
titel: "Anthropic maakt Claude Code-sandbox open source onder Apache 2.0"
url: https://aiweekly.co/alerts/anthropic-open-sources-claude-code-sandbox-under-apache-20
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-10-25T05:46:01
---

Anthropic geeft de sandbox achter Claude Code vrij als open-sourcepakket onder Apache 2.0.

De tool gebruikt ingebouwde beveiliging van macOS, Linux en Windows, zonder containers.

Andere agentomgevingen kunnen nu dezelfde afscherming van bestanden en netwerk gebruiken.

Het blijft een research preview; de Windows-versie kent gedocumenteerde lekken.

De kooi rond de codeeragent

Anthropic heeft de sandbox die achter Claude Code draait vrijgegeven als open-source npm-pakket, 

@anthropic-ai/sandbox-runtime

, onder de Apache 2.0-licentie, meldt AI Weekly. De sandbox is de afschermingslaag die bepaalt welke bestanden en netwerkverbindingen een codeeragent mag gebruiken. Volgens de documentatie is srt 'een lichtgewicht sandboxtool die bestands- en netwerkbeperkingen afdwingt op willekeurige processen op besturingssysteemniveau, zonder container'. Dat is precies het probleem waar elke maker van AI-agents mee worstelt. Een codeeragent die zelf commando's uitvoert, kan per ongeluk of door een kwaadaardige instructie in een bestand of webpagina, de zogeheten prompt injection, gevoelige gegevens lezen of naar buiten sturen. Tot nu toe kozen ontwikkelaars vaak tussen zware oplossingen als containers en virtuele machines, of ze vroegen de gebruiker bij elke stap om toestemming, wat in de praktijk leidt tot gedachteloos doorklikken. Een sandbox biedt een derde weg: de agent mag binnen vooraf afgesproken grenzen zelfstandig werken, en alles daarbuiten wordt door het besturingssysteem zelf geweigerd, ongeacht wat het model besluit.

Drie platforms, drie kooien

De kracht van srt zit in de keuze om niets nieuws uit te vinden. De tool verpakt de beveiligingsmechanismen die elk besturingssysteem al heeft. Op macOS genereert hij dynamisch Seatbelt-profielen voor sandbox-exec, dezelfde techniek waarmee Apple zijn eigen apps afschermt. Op Linux gebruikt hij bubblewrap, bekend van Flatpak, met een afgezonderde netwerknamespace. Windows is het lastigst: daar combineert srt een uitgaand netwerkfilter in het Windows Filtering Platform met een token met beperkte schrijfrechten en expliciete NTFS-toegangsregels, plus een eenmalige installatie met beheerdersrechten die een apart lokaal gebruikersaccount aanmaakt. Daarbovenop komen functies die specifiek voor agents zijn bedacht, zoals het maskeren van wachtwoorden en sleutels en het afschermen van MCP-servers door in de configuratie simpelweg 

npx

 te vervangen door 

srt

. Dat laatste is belangrijk, omdat MCP-servers van derden een groeiend aanvalsoppervlak vormen. Elke server die een agent laadt, draait immers met de rechten van de gebruiker, tenzij iets hem tegenhoudt.

'Een research preview, ontwikkeld voor Claude Code om veiligere AI-agents mogelijk te maken', waarschuwt de repository zelf.

Gevolgen en kanttekeningen

Door de open licentie kunnen andere harnesses en desktopomgevingen, ook op Linux, dezelfde beveiligingslaag gebruiken. Dat past in een bredere beweging waarin AI-bedrijven hun veiligheidsinfrastructuur delen in de hoop er een standaard van te maken, zoals Anthropic eerder deed met het Model Context Protocol. Tegelijk is de documentatie opvallend eerlijk over de grenzen. Het project heet een research preview en waarschuwt dat API's en configuratieformaten kunnen veranderen. De Windows-versie heeft gedocumenteerde gaten: hulpmiddelen die op de systeem-TLS-stack Schannel draaien, zoals curl uit System32, PowerShell's Invoke-WebRequest, .NET HttpClient en winget, werken niet, en verkeer via systeemdiensten als Windows Update ontsnapt aan het netwerkfilter. Voor bedrijven is dat relevant. Wie agents op werkstations toelaat, krijgt een bruikbaar hulpmiddel, maar geen garantie. In dezelfde week claimde Anthropic bovendien dat Claude de beveiligingseigenschappen van 123 softwarebibliotheken formeel heeft bewezen, wat het beeld bevestigt van een bedrijf dat veiligheid als verkoopargument inzet.

Conclusie

Het vrijgeven van srt is meer dan een gebaar naar de open-sourcegemeenschap. Het is ook een strategische zet in een markt waar codeeragents van verschillende aanbieders om dezelfde ontwikkelaars strijden en vertrouwen de schaarse grondstof is. Wie de standaard voor agentbeveiliging zet, bepaalt ook hoe de hele sector over veilige agents denkt. Anthropic maakt een slimme keuze door te bouwen op bestaande systeemtechniek in plaats van op eigen containers. Maar de eerlijke lijst met lekken laat zien dat een sandbox een vangnet is, geen vesting. Agents blijven risicovol; srt maakt dat risico kleiner en, vooral, zichtbaar en controleerbaar. Dat concurrenten dezelfde laag nu gratis kunnen overnemen, is uiteindelijk goed nieuws voor iedere gebruiker van een codeeragent.

▶ YouTube

DeepSeek Fires Again! (New #1 Open Source Coder Beats Claude)

Bronnen:

 

aiweekly.co ↗
