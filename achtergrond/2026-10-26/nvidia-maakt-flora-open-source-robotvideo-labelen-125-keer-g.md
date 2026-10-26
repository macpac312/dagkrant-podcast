---
titel: "Nvidia maakt Flora open source: robotvideo labelen 125 keer goedkoper dan met GPT-6 Astra"
url: https://the-decoder.com/nvidia-open-sources-flora-to-make-robot-video-labeling-125x-cheaper-than-gpt-6-astra/
bron: aitech
kind: aitech
gegenereerd: 2026-10-26T05:53:51
---

© the-decoder.com

Nvidia maakt Flora open source: een uur robotvideo labelen voor 72 cent in plaats van 88,50 dollar.

Drie gefinetunede Qwen3.5-modellen leveren alle drie soorten labels die robotmodellen nodig hebben.

Flora vindt actiegrenzen het best, maar Astra beschrijft vaak preciezer.

De kostenclaim is een projectie, geen productiemeting; de trend naar specialistische modellen is echt.

Het datatekort van de robotica

Grote AI-modellen voor robots leren van video, maar ruwe beelden zijn niet genoeg. Elke video moet worden voorzien van tekstuele annotaties, en volgens Nvidia's onderzoekslab GEAR zijn daar drie soorten van nodig. Beschrijvingen van welke actie wanneer plaatsvindt, om trainingsdata te selecteren. Beoordelingen van hoe goed een robot stap voor stap vordert, zodat hij kan leren met vallen en opstaan. En oordelen over of een taak is geslaagd, om robots tijdens gebruik te bewaken. De meeste bestaande tools leveren maar één van die soorten. Grote taalmodellen zoals GPT-6 Astra kunnen er meerdere maken, maar zijn te duur voor de enorme hoeveelheden video die robotica vraagt. Daar komt Flora binnen, een open data-engine die volgens Nvidia alle drie de soorten levert. Het systeem draait al bij de training van Nvidia's GR00T-modellen, met tot 200.000 uur video per dag op 512 GB300-gpu's.

Hoe eerlijk is de vergelijking?

De kop van 125 keer goedkoper verdient een kanttekening, en The Decoder plaatst die ook. In een test met 50 video's scoorde Flora volgens Nvidia iets beter dan GPT-6 Astra, ook al mocht het OpenAI-model zijn volledige redeneercapaciteit gebruiken. Claude Opus 5 scoorde in dezelfde test veel slechter en kostte nog altijd ongeveer 42 dollar per uur. Maar de kosten van Flora zijn een projectie, geen meting in productie: Nvidia rekende met een veronderstelde huurprijs van 10 dollar per gpu per uur. Ook inhoudelijk is het beeld genuanceerder. Op de publieke WGO-Bench is Flora het best in het vinden van actiegrenzen, maar blijft het in de totaalscore achter bij Astra en op pure beschrijvingsnauwkeurigheid bij Gemini 3.8 Flash. De winst zit dus vooral in structuur en schaal, niet in betere taal.

Onderdeel

Model

Rol

Segmentatie

Qwen3.5 9B

actiegrenzen

Beschrijving

Qwen3.5 27B

wat, wanneer

Flora-Rewarder

Qwen3.5 27B

succes, stappen, rubrieken

Flora bestaat uit drie gefinetunede Qwen3.5-modellen.

De kostencijfers van Flora zijn een projectie op basis van 10 dollar per gpu-uur, geen productiemeting.

De schaal waarop Nvidia Flora inzet, laat zien waarom de prijs per uur zo zwaar weegt. Bij 200.000 uur video per dag zou een tarief van tientallen dollars per uur neerkomen op miljoenen dollars per dag, alleen voor het labelen. Met minder dan een dollar per uur wordt hetzelfde volume een beheersbare kostenpost. Daarmee verandert ook wat haalbaar is: wie goedkoop kan labelen, kan meer en gevarieerdere video gebruiken, en dat is in robotica, waar echte data schaars en duur is, misschien wel de belangrijkste winst.

Specialisten tegen generalisten

Flora past in een patroon dat deze krant vandaag vaker laat zien. Terwijl OpenAI en Anthropic hun prijzen in enkele maanden tot 80 procent verlaagden en elkaars klanten bestoken met kortingen, laat Nvidia zien dat een gespecialiseerd, open model voor een afgebakende taak een frontier-model op prijs verplettert en op kwaliteit bijbenen kan. Opvallend is de keuze voor Qwen, de modelfamilie van het Chinese Alibaba, als basis: open Chinese modellen zetten de prijsdruk ook hier. Voor Nvidia is de logica helder. Wie robotbouwers goedkope tools geeft om data te labelen, vergroot de vraag naar de gpu's waarop zowel het labelen als het trainen draait.

Conclusie

De factor 125 is een marketingcijfer met een aanname eronder, maar de richting is overtuigend. Voor massale, repetitieve taken als het labelen van robotvideo zijn algemene frontier-modellen simpelweg te duur, en een gericht open systeem is goed genoeg of beter. Het knelpunt van robotica verschuift daarmee van data annoteren naar data verzamelen. Nvidia maakt het eerste goedkoop en verkoopt intussen de hardware voor beide.

▶ YouTube

Nvidia maakt Flora open source: robotvideo labelen 125 keer goedkoper dan met GPT-6 Astra 2026

Bronnen:

 

the-decoder.com ↗
