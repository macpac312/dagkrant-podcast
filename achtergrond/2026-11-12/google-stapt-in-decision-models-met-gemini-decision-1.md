---
titel: "Google stapt in 'decision models' met Gemini Decision 1"
url: https://the-decoder.com/google-joins-the-decision-model-wave-with-gemini-decision-1-scoring-1000-questions-in-a-single-pass/
bron: aitech
kind: aitech
gegenereerd: 2026-11-12T05:38:17
---

© the-decoder.com

Google lanceert Gemini Decisions API: tot 1000 gesloten vragen per doorgang in 150-250 ms.

Prijs $0,10 per miljoen invoertokens, geen uitvoerkosten; ongeveer vijf keer goedkoper dan Gemini 3.5 Flash-Lite.

Google volgt Jev, OpenAI, Cloudflare en Microsoft; zelfde API en terminologie als Jev.

Onderscheid: volledig multimodaal en lagere kalibratiefout; Jev blijft het goedkoopst.

Een nieuwe categorie wordt standaard

Google DeepMind lanceert de Gemini Decisions API, gebouwd voor snelle, gesloten beslissingen: ja/nee, meerkeuze en beoordelingen op een schaal. Het onderliggende model, Gemini Decision 1, verwerkt tot 1000 onafhankelijke vragen in één doorgang, over tekst, beeld, audio, video en pdf, en levert kansen met betrouwbaarheidswaarden in 150 tot 250 milliseconden. Dat is volgens Google ongeveer vijf keer goedkoper dan Gemini 3.5 Flash-Lite. Het is al in gebruik voor modelrouting in Gemini Notebook, prototyping in Stitch en veiligheidscontroles in Google Search, en beschikbaar via Google AI Studio, met integraties voor OpenRouter, LangChain en Vercel onderweg. Het is geen chatmodel: het genereert geen tekst, het kiest. Dat onderscheid is belangrijker dan het lijkt. Grote taalmodellen worden vaak ingezet voor klussen die eigenlijk simpele beslissingen zijn: moet deze vraag naar het dure of het goedkope model, mag deze afbeelding gepubliceerd worden, past dit antwoord bij de richtlijnen? Voor zulke vragen is een volledig gegenereerd antwoord overkill, en juist daar mikt Google op.

Volger, geen pionier

De categorie is niet van Google. De startup Jev bedacht haar, waarna OpenAI, Cloudflare en Microsoft snel volgden. Simon Willison merkt op dat de API van Google vrijwel identiek is aan die van Jev: dezelfde drie vraagtypes en zelfs dezelfde terminologie. Qua prijs zit Google gelijk met OpenAI's GPT-6 Luna, 10 cent per miljoen invoertokens met gratis uitvoer, terwijl Jev met 4,2 cent de goedkoopste blijft. De verschillen zitten vooral in de breedte: Jev werkt alleen met tekst en json, OpenAI met tekst en beeld, Google is volledig multimodaal en dekt ook audio, video en pdf. Willison testte dit met een video van een stampende robot. Waar Jev en OpenAI bij ja/nee-vragen 1.0 of 0.0 geven, wil Gemini uitdrukkelijk iets minder zeker zijn, en Google claimt de laagste kalibratiefout in de benchmarkreeks.

Google zegt dat de uitvoer bijna vijf keer goedkoper is dan Gemini 3.5 Flash-Lite, omdat er geen uitvoertokens in rekening worden gebracht.

Wat dit betekent voor het AI-ecosysteem

Waar de aandacht uitgaat naar frontiermodellen en rekenkracht, zoals de roadshowvideo van Anthropic laat zien, verschuift in de infrastructuur het werk naar kleine, goedkope tussenstappen. Dat past bij de gegevens van de Ramp AI Index: de Amerikaanse AI-uitgaven van bedrijven staan op een record maar de groei vlakt af tot 1,65 procent, en een procent van de bedrijven drijft 80 procent van de omzet van OpenAI en Anthropic. Wie grote modellen dure beslissingen laat nemen, merkt dat het niet schaalt; routering en controle moeten goedkoop. Tegelijk wijzen incidenten, zoals de 35.578 van 37.571 Grok Build-apps die zonder inlog open lagen, erop dat AI-systemen vooral falen op standaardinstellingen. Een snelle beleidscheck met een decision model kan zulke fouten vangen voordat iets live gaat, mits iemand de regels goed formuleert. Daar zit de nieuwe afhankelijkheid: de kwaliteit van de vragen bepaalt de kwaliteit van de beslissingen. Een slecht geformuleerde vraag levert even snel en even goedkoop een verkeerd antwoord op, nu met een overtuigend ogende kans erbij. Bij een bijna vlakke latentie van 1 tot 100 vragen per verzoek is de verleiding groot om alles te laten scoren, maar controle op de uitkomsten blijft menselijk werk. Datzelfde geldt voor de vergelijking met Jev: een lagere prijs betekent weinig als het model minder goed past bij het soort materiaal dat je wilt beoordelen.

Conclusie

Gemini Decision 1 is een logische stap die Google niet uniek maakt, maar die de categorie legitimeert. Zodra drie grote aanbieders dezelfde API bieden, concurreren ze op prijs, breedte en kalibratie. De winnaar is de ontwikkelaar, die dure modellen kan vervangen door goedkope beslissers. De zorg is een nieuwe standaardisering zonder duidelijke maatstaf: wie beslist hoe zeker is zeker genoeg?

▶ YouTube

Gemini Decision 1 is het NIEUWE besluitvormingsmodel van Google, en het is ANDERS

Bronnen:

 

the-decoder.com ↗

 • 

simonwillison.net ↗

 • 

blog.google ↗
