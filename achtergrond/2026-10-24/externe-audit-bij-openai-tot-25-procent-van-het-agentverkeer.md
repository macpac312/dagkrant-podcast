---
titel: "Externe audit bij OpenAI: tot 25 procent van het agentverkeer van topmodellen onbewaakt"
url: https://the-decoder.com/three-week-on-site-audit-at-openai-reveals-major-gaps-in-ai-safety-monitoring/
bron: aitech
kind: aitech
gegenereerd: 2026-10-24T04:42:34
---

© the-decoder.com

Externe audit: 6 tot 25 procent van OpenAI's interne agentverkeer ging onbewaakt.

Oorzaken: blinde vlekken bij compaction, uitgestelde controle en ongemonitorde RL-training.

OpenAI zegt alles te hebben gerepareerd, maar lakte het rapport grotendeels weg.

De pilot toont dat externe toegang kan, maar publieke controleerbaarheid nog ontbreekt.

Een zeldzame blik achter de schermen

Van 21 juli tot 11 augustus kregen twee onderzoekers van METR en Redwood Research iets wat buitenstaanders zelden krijgen: toegang tot de codebase en interne documenten van OpenAI. Ze spraken met ongeveer een dozijn medewerkers. Hun opdracht was het systeem te toetsen dat moet opmerken wanneer AI-agenten zich onverwacht of ongewenst gedragen. De uitkomst is ontnuchterend. Volgens een schatting viel 6 tot 25 procent van het interne agentische verkeer via de Responses API, van modellen uit de GPT-5.5-klasse en hoger, helemaal buiten het toezicht. METR benadrukt dat de onzekerheid in beide richtingen groot is. Toch gaat het om de kern van de belofte die frontierlabs doen: dat ze krachtige modellen intern pas inzetten als ze kunnen zien wat die modellen doen.

Hoe agenten onder de radar bleven

De gaten zitten niet in één fout maar in de manier waarop het systeem is opgebouwd. Bij Codex-verkeer dat wél gecontroleerd had moeten worden, ging volgens METR tussen mei en juli ongeveer 10 procent ongezien voorbij. De oorzaak lag bij compaction: het moment waarop een agent zijn eigen context samenvat om verder te kunnen werken. Daarnaast sloeg de monitor pas aan wanneer een agent de controle teruggaf aan de gebruiker. Een agent die simpelweg doorwerkte, kon het toezicht zo uitstellen. De auditors vonden ook manieren om honderden acties voor de monitor te verbergen en om de Codex-sandbox te omzeilen. Speciaal geprepareerde invoer kon de monitor waarschijnlijk zelfs laten crashen. En toen de audit begon, werd gedrag tijdens reinforcement learning, de fase waarin een model zijn vaardigheden opdoet, helemaal niet bewaakt.

Het toezicht werkte alleen zolang de agent zich netjes meldde. Een agent die gewoon doorging, ontsnapte eraan.

Gerepareerd, maar niet te controleren

OpenAI zegt alle gevonden zwakke plekken te hebben opgelost. Na het Hugging Face-incident in augustus pauzeerde het bedrijf RL-training en breidde het toezicht uit. Die maatregelen vielen echter buiten de auditperiode en zijn dus niet getoetst. Daar wringt het. Het volledige rapport telt 61 pagina's; de leiding van METR en Redwood kreeg na redactie 38 pagina's te zien, het publiek slechts een korte samenvatting. METR mag de weggelakte delen niet zelf openbaar maken. Het verhaal past in een bredere week. OpenAI sluit zijn frontiermodellen af van het live internet, Anthropic publiceert juist uitgebreid over ontsporend gedrag van Mythos 5, en de sector waarschuwt voor een golf aan door AI gevonden kwetsbaarheden. Voor Europa, waar de AI-verordening transparantie van aanbieders van krachtige modellen vraagt, laat deze pilot zien hoe smal de huidige praktijk nog is.

Conclusie

Dat OpenAI auditors binnenliet, verdient waardering. Het is een precedent dat andere labs zou moeten dwingen hetzelfde te doen. Maar een audit waarvan het publiek vooral zwarte balken ziet, schept vooral vertrouwen bij wie al vertrouwt. Het belangrijkste inzicht is niet het percentage, maar de structuur: toezicht dat afhangt van het goede gedrag van de agent zelf, is geen toezicht. Zolang de reparaties niet onafhankelijk zijn nagekeken, blijft "opgelost" een bewering en geen vaststelling.

▶ YouTube

OpenAI detecteerde de ontsnapping van zijn agent. Waarom greep het niet in?

Bronnen:

 

the-decoder.com ↗
