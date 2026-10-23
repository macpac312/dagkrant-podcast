---
titel: "DeepSeek maakt inferentiesoftware open source die 22 miljoen dollar per dag zou opleveren"
url: https://www.latent.space/p/ainews-deepseek-deepinfer-open-source
bron: aitech
kind: aitech
gegenereerd: 2026-10-23T04:44:19
---

© latent.space

DeepSeek maakt DeepInfer open source, de software waarmee het zijn modellen in productie draait.

Latent Space rekent voor: 155 biljoen tokens per dag, ruim 80 procent marge, 22 miljoen dollar per dag.

De echte kroonjuwelen, zoals de geoptimaliseerde KV-cache, blijven binnenshuis.

Open inferentie zet druk op de marges van gesloten aanbieders en westerse AI-labs.

Het productiesysteem op straat

DeepSeek koos zijn moment met zorg. Op de eerste dag van PyTorch Conference maakte het Chinese AI-lab DeepInfer open source, de software waarmee het zijn eigen modellen in productie aan gebruikers serveert. Het nieuwsplatform Latent Space vergeleek de timing met een intercontinentale raket die midden in de discussie werd afgevuurd. Inferentie, het daadwerkelijk draaien van een getraind model om antwoorden te genereren, is de afgelopen jaren uitgegroeid tot de grootste doorlopende kostenpost van AI. De beste technieken daarvoor zaten vooral bij gesloten, zeer hoog gewaardeerde bedrijven als Fireworks, Baseten en Modal. DeepInfer is volgens Latent Space een aangepaste versie van het opensourcepakket vLLM, met dank aan SGLang en TensorRT-LLM, maar met veel eigen toevoegingen. Eén daarvan springt eruit: prompts kunnen tot 72 uur in een cache worden bewaard, tegenover de 12 uur die OpenAI kort daarvoor aankondigde. Wie een lange context steeds opnieuw gebruikt, betaalt daardoor veel minder rekenwerk.

OpenAI

DeepInfer

12 uur

72 uur

Maximale bewaartijd van prompt-cache, volgens Latent Space.

Rekenen aan een geldmachine

De koppen over 22 miljoen dollar per dag komen niet van DeepSeek zelf, maar van de rekensom die Latent Space maakte op basis van de productiecijfers die het lab vrijgaf. Die cijfers zijn wel indrukwekkend. Per prefill-GPU, de chips die de invoer verwerken, verwerkt het systeem 1,5 miljoen tokens per seconde, met een cachetreffer bij 96 procent van de invoer. Per decode-GPU, de chips die het antwoord genereren, komen er 14.000 tokens per seconde uit, verdeeld over zo'n 2.400 GPU's. Bij de huidige daltarieven van 0,15 dollar per miljoen invoertokens en 0,60 dollar per miljoen uitvoertokens levert dat volgens Latent Space zo'n 38 dollar per kaart per uur op, tegen totale kosten van 5 tot 8 dollar. Dat is een marge van ruim 80 procent en een terugverdientijd van 81 dagen. Ter vergelijking: DeepSeek zelf zou rekenen met een terugverdientijd van tien maanden. Belangrijk voorbehoud is dat dit een externe schatting is, gebaseerd op aannames over bezetting en prijs.

DeepSeek geeft de motor weg, maar houdt de turbo zelf: de ultrageoptimaliseerde KV-cache, de scheiding van prefill en decode en de load balancing blijven binnenshuis.

Open source als concurrentiewapen

Waarom zou een bedrijf zijn geldmachine weggeven? Omdat DeepSeek de gevoeligste onderdelen niet vrijgeeft. De sterk geoptimaliseerde KV-cache, die compact is en langer dan acht uur meegaat, de scheiding van prefill en decode, en de load balancing blijven buiten de publicatie. Wat wel op straat ligt, verlaagt de drempel voor iedereen die modellen wil draaien, en dat raakt vooral de gesloten inferentiebedrijven die hun waarde ontlenen aan precies deze kennis. Het past in een vertrouwd patroon. Begin 2025 schudde DeepSeek de markt op met een model dat met veel minder rekenkracht dan gedacht kon concurreren, en eerder gaf het al zijn bestandssysteem 3FS vrij. De boodschap aan Silicon Valley is steeds dezelfde: efficiëntie is een alternatief voor schaal. Voor Europese bedrijven en overheden die minder afhankelijk willen worden van Amerikaanse clouddiensten, is goedkope, open inferentiesoftware aantrekkelijk, al blijft het gebruik van Chinese modellen gevoelig. Terwijl OpenAI geld ophaalt tegen een waardering van 1.250 miljard dollar, laat DeepSeek zien hoe dun de marges van anderen kunnen worden.

Conclusie

De 22 miljoen dollar per dag is een schatting, geen jaarverslag, maar de richting is helder: inferentie kan extreem winstgevend zijn voor wie de techniek beheerst. Door het grootste deel van zijn stack weg te geven, maakt DeepSeek die techniek gemeengoed en drukt het de prijs voor de hele markt. Dat is slecht nieuws voor gesloten tussenpartijen en goed nieuws voor gebruikers. De vraag is vooral wat DeepSeek kan bereiken met meer rekenkracht dan exportbeperkingen het nu toestaan.

▶ YouTube

DeepSeek maakt inferentiesoftware open source die 22 miljoen dollar per dag zou opleveren 2026

Bronnen:

 

latent.space ↗
