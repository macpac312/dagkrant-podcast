---
titel: "Tekstwatermerk van Claude op oudere modellen eenvoudig te omzeilen"
url: https://the-decoder.com/anthropics-text-watermark-is-easy-to-bypass-on-several-older-claude-models/
bron: aitech
kind: aitech
gegenereerd: 2026-11-05T05:42:09
---

© the-decoder.com

Anthropic voorziet vanaf 16 november vier extra Claude-modellen van een tekstwatermerk.

Op oudere modellen werkt het merk alleen bij standaardwaarden voor temperature, top_p en top_k.

Eén aangepaste samplingparameter is genoeg om het watermerk te omzeilen.

Voor de AI Act-deadline in december verschuift de nalevingslast deels naar de klant.

Een watermerk met een uitknop

Anthropic heeft API-klanten opnieuw gemaild over het achteraf toevoegen van tekstwatermerken aan oudere Claude-modellen. Vanaf 16 november krijgen Claude Opus 4.6, Opus 4.5, Sonnet 4.5 en Haiku 4.5 het merk; op Amazon Bedrock kan dat enkele dagen langer duren. Opus 4.6 zat eigenlijk in de eerste golf en had het watermerk op 3 november moeten krijgen; Anthropic bevestigt de vertraging, maar geeft geen reden. Mythos 5, Opus 4.7 en Sonnet 4.6, de rest van de eerste golf, ontbreken in de nieuwe mail en zijn vermoedelijk wel op 3 november omgezet. Nieuwere modellen zoals Opus 5.5 dragen het merk al. Het punt dat The Decoder blootlegt: bij alle vier modellen uit de tweede golf, en bij Opus 4.6 en Sonnet 4.6 uit de eerste, werkt het watermerk alleen als temperature, top_p en top_k op hun standaardwaarde staan.

Waarom sampling ertoe doet

Anthropic omschrijft het watermerk als een 'onwaarneembaar patroon in woordkeuze' dat betekenis, kwaliteit en leesbaarheid niet aantast, geen extra tekens of tokens toevoegt en 'geen informatie bevat over de gebruiker, diens organisatie of de gesprekken'. Technische details geeft het bedrijf niet, maar de gangbare methoden voor tekstwatermerken werken via het selectieproces van woorden: het model verschuift de kansverdeling subtiel in een patroon dat een detector later statistisch kan herkennen. Juist die stap hangt samen met de samplingparameters, die bepalen hoeveel willekeur het model gebruikt bij het kiezen van het volgende woord. Dat het watermerk bij oudere modellen alleen onder standaardinstellingen werkt, wijst erop dat de inbouw achteraf daar minder robuust is dan bij modellen die er vanaf het begin op zijn ontworpen.

Naleving als gedeelde verantwoordelijkheid

De timing is geen toeval: de uitrol loopt vooruit op de deadline in december waarop de transparantieverplichtingen van de Europese AI Act ingaan, die van aanbieders vragen dat door AI gegenereerde inhoud machineleesbaar herkenbaar is. Anthropic lost dat op met een waarschuwing in plaats van een technische afdichting: wie voor de eigen naleving op het watermerk vertrouwt, moet de instellingen op standaard laten. Daarmee verschuift een deel van de verantwoordelijkheid naar de klant. Voor bedrijven die Claude in eigen producten inbouwen en vaak bewust aan de samplingknoppen draaien, betekent dat een afweging tussen gewenst modelgedrag en aantoonbare naleving. Tegelijk laat de zaak de grens van watermerken in het algemeen zien: ook een robuust merk kan sneuvelen door herschrijven of vertalen. Watermerken zijn een signaal, geen sluitend bewijs.

Conclusie

Een watermerk dat uitgaat zodra je aan een knop draait, is vooral een nalevingsinstrument voor wie zich wil laten controleren, niet voor wie dat wil vermijden. Dat is geen schandaal, maar wel een eerlijke maatstaf voor wat de AI Act op dit punt kan bereiken. Anthropic doet er goed aan de beperking ook publiek en per model te documenteren in plaats van haar in een klantmail te verstoppen. Toezichthouders zullen hoe dan ook moeten accepteren dat herkenbaarheid van AI-tekst een kwestie van waarschijnlijkheid blijft.

▶ YouTube

Tekstwatermerk van Claude op oudere modellen eenvoudig te omzeilen 2026

Bronnen:

 

the-decoder.com ↗
