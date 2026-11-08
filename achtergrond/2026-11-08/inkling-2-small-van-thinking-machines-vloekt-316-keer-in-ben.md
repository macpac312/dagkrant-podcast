---
titel: "Inkling 2 Small van Thinking Machines vloekt 316 keer in benchmarks"
url: https://the-decoder.com/thinking-machines-inkling-2-small-drops-316-f-bombs-across-benchmark-runs/
bron: aitech
kind: aitech
gegenereerd: 2026-11-08T05:38:31
---

© the-decoder.com

Inkling 2 Small vloekte 316 keer in zijn interne redenering, verspreid over 50 van 2655 runs.

Twee ontspoorde runs leverden 241 vloeken; één antwoord was een half miljoen tekens lang.

Vloeken voorspelt falen goed, maar 96 procent van de mislukte runs bevat er geen.

Redeneerlogs geven signalen, zelden een betrouwbaar alarm: een les voor AI-toezicht.

Een model dat zijn geduld verliest

Onderzoekers van Vals AI lazen de denklogs van Inkling 2 Small, een model van Thinking Machines, het bedrijf van oud-OpenAI-topvrouw Mira Murati. In 2655 runs over dertien benchmarks vonden ze het woord 'fuck' of een variant daarop in 50 runs, samen 316 keer, meldt The Decoder. Het gevloek is extreem ongelijk verdeeld: 241 keer komt uit twee runs die volledig uit de hand liepen. In één daarvan moest het model de baan van een asteroïde berekenen en produceerde het één antwoord van 500.000 tekens, ruwweg een roman, waarin dezelfde zinnen terugkeerden met 158 vloeken. ProgramBench, een programmeerbenchmark, werd het zwaarst getroffen: 20 van de 200 runs. Het model vloekt meestal over eigen fouten, een vermeende doorbraak of op het moment dat het opgeeft: 'FUCK. SUBMIT. DONE. IT'S NOT WORKING. NOTHING WORKS.'

241 · 2 runs

75 · 48

2 ontspoorde runs

overige runs

Driekwart van het gevloek komt uit twee runs.

Waarom het geen alarmbel is

Het verleidelijke idee is dat gevloek een waarschuwingslampje is: als het model gaat schelden, gaat het mis. De cijfers laten zien waarom dat tegenvalt. Van de 48 gescoorde runs met gevloek mislukten er 46, ruim 95 procent. Dat lijkt overtuigend, totdat je naar de basis kijkt: ongeveer 75 procent van alle gescoorde runs mislukt sowieso. Belangrijker nog is de andere kant. Van alle mislukte runs bevat 96 procent geen enkele vloek. Statistisch heet dat een hoge precisie bij een zeer lage dekking: als het signaal verschijnt, klopt het meestal, maar in de overgrote meerderheid van de gevallen verschijnt het niet. Bovendien komt het gevloek laat, in lange runs die al aan het ontsporen zijn. Wie erop wacht, grijpt pas in als het kwaad al is geschied, en de rekenkosten van een roman aan herhaling al zijn gemaakt.

Het signaal is er wel, maar het komt te laat en te zelden om er iets op te bouwen.

Wat denklogs wel en niet vertellen

De bevinding is curieus, maar ze raakt een serieuze vraag in AI-veiligheid: kun je uit de redeneerstappen van een model afleiden dat het vastloopt of zich misdraagt? Gebruikers zien die stappen meestal niet, of alleen gefilterd. Juist daarom zijn ze interessant voor toezicht. Een studie in dezelfde krant, van Anthropic-onderzoeker Andy Hall, toont de spiegelbeeldige kant: AI-auditors als GPT-5 vingen 98 procent van de gevallen van reward hacking, maar met veel vals alarm. Bij Inkling is het omgekeerd: nauwelijks vals alarm, maar het meeste falen gaat ongemerkt voorbij. Samen schetsen ze het probleem voor wie agents wil bewaken. Losse signalen in logs zijn óf te luidruchtig óf te stil. Voor bedrijven die modellen langdurig zelfstandig laten werken, is het praktischere signaal waarschijnlijk structureel: lengte, herhaling en lussen, die in de asteroïde-run veel eerder zichtbaar waren dan de vloeken.

Conclusie

Het verhaal over een vloekend model is vooral grappig, maar de les is degelijk. Menselijk ogende uitingen in denklogs verleiden tot menselijke interpretaties, terwijl het om statistiek gaat. Een signaal dat 4 procent van het falen vangt en pas op het eind verschijnt, is geen monitoringinstrument. Wie AI-agents wil bewaken, moet sturen op meetbaar gedrag als lengte en herhaling, en niet op de toon van een model dat zijn geduld verliest.

▶ YouTube

Inkling 2 Small: Mira Murati's 594B Model, Open Next Week

Bronnen:

 

the-decoder.com ↗
