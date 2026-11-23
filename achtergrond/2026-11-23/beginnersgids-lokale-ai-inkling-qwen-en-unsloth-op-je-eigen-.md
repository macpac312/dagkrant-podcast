---
titel: "Beginnersgids lokale AI: Inkling, Qwen en Unsloth op je eigen hardware"
url: https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth
bron: aitech
kind: aitech
gegenereerd: 2026-11-23T05:33:26
---

© gpupartner.com

Een GPU Partner-gids helpt beginners open modellen als Qwen en Inkling lokaal te draaien.

Kwantisatie laat grote modellen in de VRAM van een consumentenkaart passen.

Met Unsloth Desktop duurt de installatie volgens de gids 10 tot 15 minuten.

Lokaal levert privacy en geen limieten, maar kleinere modellen dan de cloud.

Weg uit de cloud

Open-weight modellen als Qwen en Inkling maken lokale AI voor consumenten realistisch, en een beginnersgids van GPU Partner haalde daarmee 340 punten op Hacker News. De redenering van de auteur: cloudaanbieders worden voor routinetaken steeds meer een infrastructuur- of nutsbedrijf. Hij noemt de kwaliteit van de nieuwste versies bij OpenAI en Anthropic soms teruglopend, de controle over wat je mag draaien groot, de kosten oplopend en de privacyzorgen reëel. Zijn eigen motief was praktisch: zware onderzoeks-, dataverzamel- en codetaken uitbesteden zonder constant op gebruikslimieten te letten. Let op: dit is een persoonlijke ervaring, geen vergelijkend onderzoek, en de kwaliteitsclaim over cloudmodellen is zijn standpunt.

Quantisatie als sleutel

Het technische hart van de gids is kwantisatie. Een model slaat zijn kennis op in gewichten; die in lagere precisie opslaan maakt het kleiner en sneller, ten koste van enige nauwkeurigheid. De auteur vergelijkt het met dezelfde foto opgeslagen met 8, 4 en 2 bits per pixel: details verdwijnen stapsgewijs. Dat bepaalt direct wat je kunt draaien. Het volledige Qwen-model van ongeveer 56 GB past niet op een gewone grafische kaart, tenzij je een Mac met uniform geheugen hebt. Een gekwantiseerde variant wel. Volgens de gids is de afweging niet voor iedere taak hetzelfde: voor routinewerk is het verlies meestal acceptabel, voor veeleisend redeneren minder.

VRAM

Modelgrootte

8–12 GB

9B–12B

32 GB

27B–35B

Mac met uniform geheugen

volledig ±56 GB

Vuistregel uit de gids; hangt af van kwantisatie.

Installeer Unsloth Desktop, download een gekwantiseerd model dat in je VRAM past, stel de contextgrootte in en zet LAN-toegang aan.

Wat betekent dit voor gebruikers

De beperking is dat lokale modellen kleiner zijn dan de grote cloudmodellen. Voor een gezin of klein team zijn ze echter genoeg voor samenvatten, schrijven en eenvoudige code, en privacy is vanzelfsprekend beter geregeld. Het sluit aan bij berichten over lekkende AI-routers: wie niets naar derden stuurt, loopt dat risico niet. Bij zakelijk gebruik kunnen bedrijven zo AVG-gevoelige data binnenshuis houden, maar de kosten van een krachtige GPU en stroom komen dan voor eigen rekening. Hardware, geheugen en bijtrainen met Unsloth blijven drempels voor wie verder wil dan de basis.

Conclusie

Lokale AI is geen vervanger van de grootste cloudmodellen, maar wel een volwassen alternatief voor alledaagse taken. De echte drempel is niet de software, die nu in een kwartier draait, maar het geheugen van je videokaart. Wie privacy en voorspelbare kosten belangrijker vindt dan topprestatie, heeft nu een serieuze keuze.

▶ YouTube

Inkling 2 Mini: het 20GB lokale model dat Qwen 3.8 27B verslaat?

Bronnen:

 

gpupartner.com ↗
