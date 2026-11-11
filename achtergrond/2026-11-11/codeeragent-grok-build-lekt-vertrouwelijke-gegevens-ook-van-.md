---
titel: "Codeeragent Grok Build lekt vertrouwelijke gegevens, ook van SpaceXSI zelf"
url: https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/
bron: grok
kind: grok
gegenereerd: 2026-11-11T05:44:24
---

© arstechnica.com

Grok Build, de vibe-coding-agent van SpaceXSI, lekt data van duizenden gebruikers.

Gedeelde app-links zijn willekeurig, maar door een ontwerpkeuze toch op te sommen.

Ook 24 interne apps van SpaceXSI zelf lagen open, met vertrouwelijke verkoopplannen.

Vibe coding zet interne tools online zonder de toegangscontrole van gewone bedrijfssoftware.

Een lek bij de maker zelf

Grok Build is het antwoord van SpaceXSI, de naam van het samengevoegde SpaceX en xAI, op de golf van vibe coding: gebruikers beschrijven in een chat welke app ze willen, de AI bouwt hem en publiceert hem met een deelbare link. Volgens onderzoek van beveiligingsbedrijf Claroc, waarover Ars Technica bericht, lekt dat platform gegevens van duizenden gebruikers. Het gaat om interne bedrijfsplannen, advertentievoorstellen, medische onderzoeksuitslagen, kombuischecklists van een bekende cruisemaatschappij en namen en personeelsnummers van werknemers. De pijnlijkste vondst zit dicht bij huis: 24 apps waren gebouwd door SpaceXSI zelf. Daarin stonden onder meer een als vertrouwelijk gemarkeerd inwerkplan voor een nieuwe medewerker van het zakelijke verkoopteam, een verkoopkaart met 594 accounts, interne systeemadressen van verkooptools en advertentievoorstellen. Ook gebruikers bij Fortune 500-bedrijven en een defensieleverancier bleken blootgesteld.

Willekeur die niets beschermt

Het mechanisme is leerzaam. Grok Build probeert de deellinks te beveiligen door de URL's willekeurig te maken, zodat alleen wie het exacte adres kent de app kan openen. Een ontwerpkeuze van de ontwikkelaars maakt die bescherming volgens Claroc echter volledig zinloos: iedereen kan duizenden live projecten opsommen, en behalve in zeldzame gevallen opent een klik op de link de app met alle bijbehorende data. Het verwante onderzoek dat deze week verscheen, specificeert de omvang: van de 37.571 Grok-apps die tijdens de test online waren, waren er 35.578 zonder inloggen bereikbaar. Claroc legt de vinger precies op de zere plek. Had het verkoopteam een tool gekocht, dan had die achter de bedrijfslogin gezeten, alleen toegankelijk voor het team. Gebouwd met AI, ging hij live voor iedereen met de link. Dat is het kernprobleem van vibe coding in organisaties: de drempel om software te maken verdwijnt, maar de beveiligingsreflexen van IT-afdelingen gaan niet mee.

'Gebouwd met AI, ging het live voor iedereen met de link', concludeert Claroc over de interne verkooptool van SpaceXSI.

Gevolgen voor bedrijven en toezicht

Opvallend is de volgorde van herstel. SpaceXSI reageerde niet op de melding van zondag, en pas binnen enkele uren nadat Ars Technica vragen stuurde, verdwenen de links naar de eigen 24 apps. Op het moment van publicatie stond de data van andere gebruikers vrijwel volledig nog online. Dat de eigen bedrijfsgeheimen voorrang krijgen boven die van klanten, zegt iets over prioriteiten. Voor Europese organisaties waarvan medewerkers zulke tools gebruiken, is dit een AVG-kwestie: medische uitslagen en personeelsnummers zijn persoonsgegevens, en wie ze via een onbeveiligde app online zet, is verantwoordelijk, ongeacht welke AI de code schreef. Het incident komt ongelukkig uit voor Musk, die dezelfde week erkende dat Grok 4.8 niet kan tippen aan Claude Opus 5.5. Waar de concurrentie zich op modelkwaliteit richt, blijkt bij xAI de basis van productbeveiliging nog niet op orde.

Conclusie

Dit lek is geen exotische hack maar een voorspelbare ontwerpfout, en daarom des te ernstiger. Vibe-codingplatforms verkopen het gemak van direct publiceren; zonder standaard afgeschermde toegang wordt dat gemak een datalek op schaal. Dat zelfs SpaceXSI's eigen verkoopteam erin trapte, laat zien dat dit geen kwestie van onoplettende gebruikers is. De verantwoordelijkheid ligt bij de aanbieder: privé als standaard, en openbaar alleen als bewuste keuze.

▶ YouTube

Onderzoekers: 35.000 Grok Build-apps lekten data, ook van SpaceXSI

Bronnen:

 

arstechnica.com ↗
