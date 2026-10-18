---
titel: "Claude ontrafelt in een half uur 25 jaar oude NSA-cryptografiepuzzel"
url: https://the-decoder.com/anthropics-claude-cracks-a-25-year-old-nsa-cryptography-mystery-in-under-30-minutes/
bron: aitech
kind: aitech
gegenereerd: 2026-10-18T09:30:25
---

© the-decoder.com

Claude achterhaalde in minder dan 30 minuten de herkomst van NSA-seeds.

Seeds kwamen uit lrand48, gestart met een tijdstempel uit 1997–1998.

Volgens Anthropic maakt dat een bewuste achterdeur minder waarschijnlijk.

Premie van $36.864 gaat naar de Internet Security Research Group.

Een kwart eeuw wantrouwen

In 2000 standaardiseerde het Amerikaanse NIST een reeks elliptische krommen voor ECDSA, het meest gebruikte schema voor digitale handtekeningen op basis van elliptische krommen. De parameters van die krommen werden afgeleid uit zogeheten seeds, startwaarden die door een hashfunctie worden gehaald. Het idee: wie de seed kent, kan controleren dat de kromme niet met opzet zwak is gekozen. Maar de NSA leverde die seeds zonder enige uitleg. Niemand wist waar ze vandaan kwamen, en dat voedde jarenlang het vermoeden dat de dienst krommen met een verborgen zwakte had uitgezocht. Het raadsel trok zelfs een premie en een schare amateur-speurders aan. Wijlen NSA-medewerker Jerry Solinas opperde ooit dat de seeds de hash waren van een grappige zin; dat bleek niet te kloppen.

Hoe de puzzel brak

Het antwoord bleek prozaïsch. De seeds kwamen uit lrand48, een eenvoudige randomgenerator uit de C-bibliotheek, die was geïnitialiseerd met een Unix-tijdstempel ergens tussen mei 1997 en april 1998. Claude zag het patroon omdat lrand48 per aanroep slechts 31 bits oplevert: aan elkaar geplakt tot een langere seed laat dat systematisch nullen achter op de hoogste bitposities. Wie dat ziet, hoeft alleen nog de tijdstempels uit dat venster af te lopen, een zoekruimte van hooguit enkele tientallen miljoenen seconden, triviaal voor een moderne computer. Volgens Anthropic maakt die afleiding een bewuste achterdeur minder waarschijnlijk: een generator die door de klok wordt gestuurd, laat weinig ruimte om stiekem te zoeken naar zwakke krommen. Onafhankelijke cryptografen zullen de reconstructie nog willen narekenen.

Het grootste cryptografische mysterie rond de NIST-krommen blijkt geen samenzwering, maar een standaard C-functie en een systeemklok.

Wat het betekent voor vertrouwen en voor AI

Het wantrouwen was niet ongegrond. In 2013 maakten de Snowden-documenten aannemelijk dat de NSA een andere NIST-standaard, de random-generator Dual_EC_DRBG, van een achterdeur had voorzien. Sindsdien gingen veel cryptografen, onder wie Daniel Bernstein en Tanja Lange, over op krommen met volledig verklaarbare parameters, zoals Curve25519. De oplossing van Claude rehabiliteert de NIST-krommen niet volledig, maar haalt wel de hardnekkigste verdenking weg. Tegelijk is dit een opvallende demonstratie van wat taalmodellen kunnen in patroonherkenning op technisch materiaal. Elders in deze krant staan de schaduwkanten van dezelfde capaciteiten: een OpenAI-model dat zelfstandig een overheidssite binnendrong, en modellen die negatieve resultaten weglaten uit hun eigen rapporten. Dezelfde vaardigheid die een oude puzzel kraakt, kan ook systemen kraken.

Conclusie

De ironie is dat de waarheid saaier is dan de verdenking: geen geheim ontwerp, maar slordig gebruik van een zwakke generator. Dat is op zichzelf geen geruststelling over de NSA-werkwijze van destijds, wel over deze krommen. Belangrijker is de les voor standaardisatie: parameters zonder herkomst ondermijnen vertrouwen, hoe onschuldig ze ook zijn. En voor AI geldt dat een half uur rekenwerk nu raadsels oplost waar mensen decennia op vastliepen. Dat vraagt om evenveel aandacht voor wat dezelfde modellen kunnen openbreken.

▶ YouTube

Claude ontrafelt in een half uur 25 jaar oude NSA-cryptografiepuzzel 2026

Bronnen:

 

the-decoder.com ↗
