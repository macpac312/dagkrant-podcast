---
titel: "Claude Fable 5.2 genereert geen afbeeldingen, het schildert ze met code"
url: https://the-decoder.com/anthropics-claude-fable-5-2-doesnt-generate-images-it-paints-them/
bron: aitech
kind: aitech
gegenereerd: 2026-11-16T05:35:52
---

© the-decoder.com

Claude Fable 5.2 maakt beelden door code te schrijven, niet door pixels te berekenen.

Eén schilderij kan ongeveer 700.000 gesimuleerde penseelstreken bevatten.

Zonder undo-knop moet het model elke streek vastleggen en eventueel overschilderen.

Ontwikkelaars als Simon Willison zetten het model ook in als programmeerhulp.

Schilderen als programmeren

Anthropics Claude Fable 5.2 maakt afbeeldingen op een andere manier dan beeldgeneratoren. Waar diffusiemodellen als Midjourney een beeld uit ruis laten opkomen, schrijft Fable 5.2 Python-code die honderdduizenden penseelstreken op een virtueel doek zet, compleet met structuur van de borstelharen, meldt The Decoder. Anthropic-medewerker Jake Eaton liet zien wat dat oplevert: toen hij vroeg om een schilderij dat zo moeilijk mogelijk van een foto te onderscheiden was, ontstond een winkelwagen in een parkeergarage met ongeveer 700.000 streken. Elk werk is een programma van 1.000 tot 2.000 regels dat een gesimuleerde verfengine aanstuurt, zonder extern beeldmodel en zonder overgetrokken bronafbeeldingen. De aanpak lijkt op agentisch beeldbewerken, waarbij taalmodellen gereedschappen kiezen en hun resultaat beoordelen. Eerdere pogingen met zustermodel Opus 5.5 kregen kritiek omdat ze bestaande kunst imiteerden; Eaton liet Fable daarom eigen kunstenaarspersona's met fictieve achtergrond en vaste stijl ontwikkelen.

Geen undo-knop

Het meest verhelderende experiment kwam van Anthropic-ingenieur Michael Graczyk. Hij vroeg het model een vogel bij zonsopgang te schilderen, uitsluitend met code die de fysica van borstels, natte verf en canvas simuleert. Het model moest elke streek als een eigen coördinatenregel uitschrijven en kon niets ongedaan maken. De eerste streek kreeg kleurcode #30346a, een breedte van 90 pixels en vijf licht wiebelende waypoints; het wiebelen van circa zeven pixels voegde het model bewust toe omdat een menselijke arm ook niet perfect rechte lijnen trekt. De resulterende video van 21 seconden telt de streken vanaf precies 111 op een leeg doek. Dat is wezenlijk anders dan AI-video, waarbij modellen als Flux 3 beeldreeksen en hun consistentie in de tijd direct genereren. Hier is het proces zelf de uitkomst: fouten moeten worden overschilderd, zoals een schilder dat zou doen.

Het model heeft geen undo-knop: elke penseelstreek moet het vastleggen.

Van doek naar codebase

Het schilderen is een opvallend pronkstuk, maar de bredere inzet van Fable 5.2 ligt in software. Simon Willison schrijft bij de nieuwe versie van Datasette (1.0a43) dat hij hard leunt op het model om de 1.0-mijlpaal af te werken, die nu voor 53 procent klaar is. De grootste vernieuwing is streaming voor export naar CSV en TSV, met een Response.stream()-methode voor plugins, en er zijn beveiligingsfixes waaronder een voor private opgeslagen queries. Beide voorbeelden delen hetzelfde principe: het model werkt via code, met gereedschap en controle, niet via een directe uitvoer. Dat sluit aan bij een bredere trend: Alibaba presenteert Qwen4-Max, Chinese modellen sluiten aan bij de Amerikaanse top, en OpenAI laat GPT-6 Astra een natuurkundig bewijs uitwerken. De differentiatie verschuift van wat een model uitspuugt naar hoe het zijn werk organiseert.

Conclusie

Of Fable 5.2 echt schildert is een semantische vraag; het model programmeert een schilder. Maar dat is precies het punt: door beeldvorming te vertalen naar code krijgt een taalmodel controle, herhaalbaarheid en een verantwoordingsspoor, wat pixelgeneratoren missen. De beperking is de bron: zonder undo moet elke keuze kloppen. Dat dwingt tot planning, de eigenschap waar ook ontwikkelaars het model voor waarderen.

▶ YouTube

Claude Fable 5.2 genereert geen afbeeldingen, het schildert ze met code 2026

Bronnen:

 

the-decoder.com ↗

 • 

simonwillison.net ↗

 • 

simonwillison.net ↗

 • 

simonwillison.net ↗
