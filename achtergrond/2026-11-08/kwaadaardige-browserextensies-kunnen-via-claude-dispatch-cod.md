---
titel: "Kwaadaardige browserextensies kunnen via Claude Dispatch code uitvoeren"
url: https://thehackernews.com/2026/11/malicious-browser-extensions-could-use.html
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-08T05:38:31
---

© thehackernews.com

Forever Security laat zien hoe een browserextensie via Claude Dispatch code laat uitvoeren.

De kern: een ingelogde websessie geldt als bewijs dat de gebruiker een lokaal commando goedkeurde.

'Prompt forcing' plus automatisch 'Allow' klikken omzeilt de menselijke controle volledig.

Geen aanvallen in het wild bekend; Dispatch uitzetten en extensies controleren sluit het pad af.

Een verborgen deur in een gewone sessie

Dispatch is een Claude-functie waarmee gebruikers taken van hun telefoon of browser naar Claude Desktop sturen, een AI-agent die met lokale bestanden werkt en commando's kan uitvoeren. Onderzoeker Gal Weizman van Forever Security publiceerde op 4 november een analyse onder de naam ThisBash. Hij ontdekte dat de interface en API van Dispatch ook bereikbaar waren vanuit een gewone ingelogde sessie op claude.ai, hoewel de site er geen link naar toonde. Volgens Cybersecurity News komt dat doordat Claude Desktop een Electron-app is, gebouwd op dezelfde webinterface en API als claude.ai. De webversie verborg de link alleen, maar blokkeerde de toegang niet. De koppeling tussen telefoon en desktop zelf bleek veilig. Het probleem ontstond toen dezelfde workflow werd aangeroepen vanuit een browser, waar extensies naast de pagina kunnen draaien en scripts kunnen uitvoeren met de cookies van de gebruiker.

Waarom dit meer is dan één lek

De aanval vraagt dat veel dingen tegelijk kloppen. Er moet een extensie zijn die op claude.ai scripts mag uitvoeren, de gebruiker moet op claude.ai en in Claude Desktop zijn ingelogd met Dispatch aan, en de computer moet wakker zijn met de app open. Dispatch is bovendien al gesloten voor nieuwe gebruikers en volgens Anthropics helppagina een beperkte bèta, al hebben sommige Pro-, Max- en Ultra-abonnees het nog. Anthropic wil Dispatch uitfaseren. Toch noemen de onderzoekers het probleem fundamenteel. De echte zwakte is dat een ingelogde websessie geldt als bewijs dat de gebruiker een lokaal commando goedkeurde, en dat ontwerp zit volgens hen ook in andere Claude-functies. Omdat Dispatch apparaten koppelt, zou een extensie ook Claude Desktop op een andere computer met hetzelfde account kunnen bereiken, zoals een werklaptop. Dat scenario is beschreven, maar niet gedemonstreerd.

Een goedkeuringsknop beschermt alleen als er een mens achter zit. Zodra een script die knop kan indrukken, is de veiligheidscontrole alleen nog schijn.

Een patroon bij agents

Dit is niet het enige Claude-beveiligingsverhaal in deze krant. Apiiro vond 2539 geheimen in 1994 openbare repositories, uitgelekt via de 'niet meer vragen'-optie van Claude Code. Goedgekeurde commando's in een instellingenbestand leidden ertoe dat wachtwoorden op GitHub belandden. Tegelijk breidt Anthropic Claude uit naar gevoelige gebieden, zoals de koppeling met bankgegevens via Plaid voor Personal Finance in de VS. Het gemeenschappelijke probleem is toestemming. Agents vragen goedkeuring per handeling, maar die goedkeuring wordt opgeslagen, geautomatiseerd of, zoals hier, door een script nagebootst. Het is de agentversie van een oud browserprobleem: een site vertrouwt een verzoek omdat er een geldige cookie bij zit, ook als de gebruiker het niet zelf verstuurde. Voor bedrijven betekent dit dat een AI-agent op een werklaptop een beheerd systeem is, met eigen regels voor extensies en accounts.

Geheimen

Repositories

2539

1994

Apiiro: uitgelekte geheimen via Claude Code-instellingen.

Conclusie

ThisBash is in de praktijk een beperkt risico: weinig gebruikers, veel voorwaarden en geen bekende aanvallen. Als ontwerples is het wel belangrijk. Agents die lokaal code uitvoeren, kunnen hun veiligheid niet laten afhangen van een webpagina en een knop die iedereen kan indrukken. Dispatch uitfaseren lost dit ene pad op, maar niet het onderliggende probleem. Dat vraagt om toestemming die per apparaat wordt bevestigd en die een script niet kan nabootsen.

▶ YouTube

Kwaadaardige browserextensies kunnen via Claude Dispatch code uitvoeren 2026

Bronnen:

 

shiftdelete.net ↗

 • 

cybersecuritynews.com ↗
