---
titel: "OpenAI maakt het veel moeilijker om de redeneerstappen van zijn modellen te stelen"
url: https://the-decoder.com/openai-makes-it-much-harder-for-attackers-to-extract-how-its-latest-ai-models-think/
bron: aitech
kind: aitech
gegenereerd: 2026-11-21T05:34:26
---

© the-decoder.com

OpenAI scherpt de bescherming van interne redeneringen van GPT-6.2 Astra en Sol aan.

In red-teamtests daalt het succes van extractie van 54,0 naar 0,2 procent.

De aanpak is gelaagd: training, beveiligingen, detectie en handhaving.

Ook Anthropic bant tienduizenden accounts wegens distillation-aanvallen.

Waarom redeneerstappen waardevol zijn

Wie een taalmodel wil kopiëren, kijkt niet alleen naar het antwoord maar naar de weg ernaartoe. De interne redeneerstappen, de chain-of-thought, bevatten volgens OpenAI informatie die het uiteindelijke antwoord weglaat en zijn daardoor bijzonder waardevolle trainingsdata voor een ander model. Dat proces heet distillation: een model leert van de uitvoer van een ander. Op zichzelf is dat een gangbare techniek, maar bij adversarial distillation gebeurt het zonder toestemming, en kan de kopie worden ingezet zonder de veiligheidsmaatregelen van het origineel. OpenAI noemt als voorbeeld een aanvaller die cybervaardigheden distilleert en het resulterende model gebruikt voor aanvallen die het origineel zou hebben geweigerd. Dat verschuift het probleem van auteursrecht en concurrentie naar veiligheid.

Een gelaagde verdediging

De verdediging werkt op twee niveaus. Bij individuele verzoeken combineert OpenAI gerichte training, filters voor berichten en toolcalls en API-blokkades die oudere modellen beletten beschermde redeneringen te lezen. Tegen georganiseerde campagnes schorst het bedrijf wekelijks duizenden tot tienduizenden accounts. De cijfers komen uit eigen, automatische red-teaming met zes aanvallersmodellen, wat betekent dat ze het beste geval uit het eigen lab tonen en geen onafhankelijke verificatie zijn. Opvallend is dat OpenAI zegt de maatregelen te laten aansluiten op wat het al doet voor biologie en cyberveiligheid; distillation wordt dus als risicodomein behandeld. De verbeteringen komen ook deels naar GPT-6 Astra. Een succespercentage van 0,2 procent is indrukwekkend, maar in een wapenwedloop met adaptieve aanvallers zegt een momentopname weinig over volgende maanden.

Aanval

Voor

Na

Eerdere verzoeken

54,0%

0,2%

Actieve verzoeken

22,9%

0,9%

Gemiddeld succes, zes aanvallers (OpenAI).

Adversarial distillation maakt het voor kwaadwillenden mogelijk capaciteiten te reproduceren zonder passende veiligheidsmaatregelen. — OpenAI

Gevolgen voor de sector

OpenAI staat hierin niet alleen. Anthropic bant eveneens tienduizenden accounts om systematische distillation te stoppen en slaagt daar naar verluidt in 90 tot 99 procent van de gevallen in; het bedrijf pleit voor een gecoördineerde reactie van industrie en beleidsmakers. Dat past in een bredere strijd om controle over wat AI-modellen prijsgeven. Op dezelfde dag ontstaat een tegenbeweging bij apps: Signal blokkeert screenshots tegen AI-agents en Google laat Gemini Mac-apps bedienen. Overal geldt dezelfde vraag: wie bepaalt wat een AI mag lezen? Voor Europese bedrijven met eigen modellen komt daar een extra dimensie bij: zonder toegang tot dergelijke redeneerdata blijft de afstand tot de Amerikaanse laboratoria groter, terwijl de handhaving van API-regels buiten hun invloed ligt.

Conclusie

De daling van 54 naar 0,2 procent laat zien dat redeneerdiefstal technisch te bemoeilijken valt, maar niet dat het is opgelost. De echte test ligt in handhaving tegen georganiseerde campagnes, waar accountschorsing een gaatjes-dichten-spel blijft. Zolang modellen hun redenering verbergen om te beschermen, groeit ook de afhankelijkheid van wat laboratoria zelf melden, en dat verdient scepsis.

▶ YouTube

OpenAI maakt het veel moeilijker om de redeneerstappen van zijn modellen te stelen 2026

Bronnen:

 

the-decoder.com ↗

 • 

openai.com ↗
