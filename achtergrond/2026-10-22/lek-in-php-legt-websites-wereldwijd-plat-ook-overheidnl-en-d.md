---
titel: "Lek in PHP legt websites wereldwijd plat, ook overheid.nl en de Tweede Kamer"
url: https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world
bron: aitech
kind: aitech
gegenereerd: 2026-10-22T04:22:34
kaarten:
  - "📍 Kaart: \"Waar overheidssites uit voorzorg offline gingen\"\n   Regio: world\n   Tweede partij (blauw): Verenigde Staten\n   Strategische punten: Den Haag (capital), Brussel (capital), Parijs (capital), Helsinki (capital), Canberra (capital)"
---

© theguardian.com

Kritiek PHP-lek dwingt overheden in zeven landen websites uit voorzorg offline te halen.

De fout zat al sinds PHP 5 in de taal; AI-modellen vonden hem.

Dezelfde AI maakt exploits nu goedkoop aanpasbaar aan elke PHP-versie.

De lange staart van slecht onderhouden servers wordt het eigenlijke risico.

Een fundament met een scheur

PHP is geen glamoureuze technologie. De servertaal draait achter bijna 70 procent van het web, van WordPress tot Wikipedia en Slack, en juist die alomtegenwoordigheid maakt het lek dat dinsdag openbaar werd zo ingrijpend. Volgens TechCrunch gaat het om twee kritieke gaten die in alle versies sinds PHP 5 zitten, uitgebracht in 2004; andere berichtgeving spreekt van een gat van zo'n tien jaar oud. Hoe dan ook: de fout overleefde twee decennia aan code-reviews. De Amerikaanse NSA draagt organisaties op hun systemen offline te halen als ze niet direct kunnen patchen, omdat het lek "een directe route naar het bestandssysteem of de database" biedt. In Nederland gingen overheid.nl, de site van de Tweede Kamer, de digitale-identiteitsdienst en zelfs het Nationaal Cyber Security Centrum op zwart; ook België, Frankrijk, Duitsland, Finland, het VK en Australië grepen in.

AI aan beide kanten van de loopgraaf

Het opvallendste aan deze zaak is niet de fout zelf, maar wie hem vond. OpenAI zegt een coalitie te hebben geleid die het lek met GPT-5.6 Sol opspoorde binnen het programma Patch the Planet; Wiz, onderdeel van Alphabet, vond hetzelfde onafhankelijk met zijn eigen agent Wiz Atlas en Gemini 4 Argon. Daarmee bevestigt dit incident een omslag waarover al maanden wordt gedebatteerd: taalmodellen zijn inmiddels betere bug-jagers dan de meeste mensen. Maar Wiz is eerlijk over de keerzijde. Een werkende exploit voor één installatie aanpassen aan andere versies, configuraties en geheugenindelingen was ooit monnikenwerk; voor een taalmodel is het een kleinigheid. "Kwetsbaarheden die onpraktisch leken om te misbruiken, worden haalbare doelwitten," schrijft het bedrijf. De bronnen verschillen bovendien over het voordeel van de verdedigers. OpenAI benadrukt dat er geen misbruik in het wild bekend was, terwijl Amazon al op 17 oktober, enkele dagen vóór de openbaarmaking, een aanvalspoging op een lokserver zag. En volgens de NOS gebruikten hackers de aangekondigde update om het lek alvast te lokaliseren.

Zodra een patch openbaar is, kan AI de fout met weinig moeite terugrekenen. Het venster tussen fix en massale aanval krimpt van weken naar uren.

Wat dit betekent voor Nederland en Europa

De Nederlandse schade gaat verder dan een paar zwarte homepages. Volgens de NOS waren officiële documenten van onder meer Den Haag, Almere, Breda en Haarlem en van de provincies Overijssel, Gelderland en Friesland niet in te zien, omdat ruim honderd overheden het raadssysteem Notubiz gebruiken. Dat laat zien hoe sterk de digitale overheid leunt op een paar gedeelde leveranciers. Dat ook 113 en het Centrum Seksueel Geweld tot laat offline waren, laat zien dat preventief uitschakelen zelf een kostenpost is. Alan Woodward van de Universiteit van Surrey wijst op de "lange staart" van slecht onderhouden sites, en die staart is in Europa groot: kleine webwinkels, verenigingen en gemeentelijke subsites op verouderde PHP-versies. Er is ook een verband met de Meta-zaak die vandaag speelt. Daar strafte een rechter een bedrijf dat wist dat derden bij gebruikersdata konden en dat ontkende. Organisaties die nu niet patchen en later datalekken melden, krijgen een vergelijkbaar verwijt: ze wisten het, en deden niets.

Conclusie

Het PHP-lek is het eerste grote bewijs dat AI-gedreven kwetsbaarheidsonderzoek op internetschaal werkt, en tegelijk een waarschuwing. OpenAI verwacht dat zulke vondsten de komende maanden sterk toenemen. Dan houdt het huidige model op met werken: geheim coördineren, dan patchen en hopen dat beheerders snel genoeg zijn. Als een exploit binnen uren na een patch klaar is, moeten overheden automatisch kunnen updaten en hun afhankelijkheid van gedeelde leveranciers in kaart brengen. Preventief uitschakelen was deze week verstandig, maar dat kun je niet elke maand doen.

▶ YouTube

Lek in PHP legt websites wereldwijd plat, ook overheid.nl en de Tweede Kamer 2026

Bronnen:

 

theguardian.com ↗

 • 

nos.nl ↗

 • 

techcrunch.com ↗

 • 

the-decoder.com ↗
