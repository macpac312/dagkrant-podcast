---
titel: "Fable 5.2 reageert sterk op wie volgens de prompt de code bezit"
url: https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-11T05:44:24
---

Fable 5.2 past zijn codeergedrag aan op wat de prompt zegt over eigendom.

Zonder eigendomsinformatie voegt het model vooral toe, ook als dat code dupliceert.

Met de zin 'deze codebase is van jou' voegt het in ongeveer de helft dubbele code samen.

Eén zin in de prompt bepaalt zo mee hoeveel technische schuld een AI-agent achterlaat.

Een model dat zich als gast gedraagt

In de nieuwe handleiding voor het prompten van Claude Fable 5.2 staat een observatie die ontwikkelaars direct raakt. Simon Willison, een van de meest gevolgde bloggers over taalmodellen, citeerde op 10 november de passage: het model reageert nauwkeurig op wat de prompt zegt over wie de code bezit waaraan het werkt. In Anthropics tests op kleine programmeertaken bleek dat Fable 5.2, als de prompt niets over eigendom zei of de codebase als die van iemand anders presenteerde, vooral voortbouwde op wat er al stond, zelfs als dat betekende dat bestaande code werd herhaald. Dat is in zekere zin keurig gedrag. Een externe ontwikkelaar die in andermans project werkt, gooit ook niet ongevraagd de architectuur om. Maar voor wie een AI-agent inzet om een eigen project te onderhouden, levert die bescheidenheid precies het verkeerde op: steeds meer dubbele code en een structuur die nooit wordt opgeruimd.

Waarom framing zoveel uitmaakt

De oplossing die Anthropic voorstelt is verrassend simpel. Wie wil dat het model de structuur verbetert, moet zeggen dat de code van het model zelf is, met een zin als: deze codebase is van jou, het doel en de opbouw zijn jouw beslissing, en je blijft erop voortbouwen. Met die zin voegde het model in ongeveer de helft van de pogingen herhaalde code samen, zonder die zin in minder dan een tiende. Dat is een effect van meer dan een factor vijf, veroorzaakt door één regel tekst. Het past in een breder patroon. Grote taalmodellen zijn getraind om te raden welke rol ze spelen en wat er van die rol verwacht wordt. Een gast is terughoudend, een eigenaar neemt verantwoordelijkheid voor de lange termijn. Hoe sterker en zelfstandiger de modellen worden, hoe preciezer ze die sociale signalen oppikken. Dat maakt ze bruikbaarder, maar ook gevoeliger voor de vaak onbewuste aannames in een prompt.

Eén zin over eigendom verschuift het gedrag van het model van ruim onder de tien procent naar ongeveer de helft: prompting is bij deze modellen geen trucje maar opdrachtformulering.

Gevolgen voor teams die met agents werken

Voor ontwikkelteams, ook in Nederland, die AI-agents steeds vaker zelfstandig laten programmeren, heeft dit praktische gevolgen. Standaardinstructies in projectbestanden en agentconfiguraties bepalen mee of een agent opruimt of stapelt. Wie dat niet expliciet regelt, krijgt een model dat zich als voorzichtige inhuurkracht gedraagt, met een groeiende berg technische schuld als gevolg. Tegelijk is er een keerzijde. Een model dat zich eigenaar voelt, zal sneller bestaande code herschrijven, en dat is niet altijd gewenst in gedeelde of gevoelige systemen waar anderen op bouwen. De bevinding vraagt daarom niet om één standaardzin voor alles, maar om bewuste keuzes per project: waar mag de agent herstructureren, en waar moet hij juist van de bestaande opbouw afblijven. Ook valt op dat de cijfers uit kleine programmeertaken komen. Hoe het effect uitpakt in grote, rommelige codebases, meldt de handleiding niet.

Conclusie

Dit is een klein detail met grote betekenis. Het laat zien dat de nieuwste modellen niet alleen opdrachten uitvoeren, maar de verhoudingen interpreteren waarin die opdracht wordt gegeven. Dat Anthropic dit zelf documenteert, is verstandig: het maakt van een onzichtbare valkuil een stuurknop. Maar het legt ook verantwoordelijkheid bij de gebruiker. Wie een agent zijn code toevertrouwt, moet voortaan net zo zorgvuldig nadenken over het mandaat als bij een menselijke collega.

▶ YouTube

Finally, Use Claude Fable 5.2 \u0026 Opus 5.5 Without Paying!

Bronnen:

 

simonwillison.net ↗
