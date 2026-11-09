---
titel: "Willison test: een SQLite-extensie voor getallen parsen, in C en in Rust"
url: https://simonwillison.net/2026/Nov/8/sqlite-parse-number-c-vs-rust/
bron: aitech
kind: aitech
gegenereerd: 2026-11-09T05:38:22
---

Simon Willison liet Claude een SQLite-functie parse_number() bouwen in C én in Rust.

De C-extensie was 14 KB, de Rust-varianten ruim 300 KB, maar Rust was sneller.

De verklaring: Rusts standaard getal-parser is volgens het onderzoek twee keer zo snel als C's strtod.

Kleine, afgebakende onderzoeksvragen zijn het terrein waar AI-agenten nu al echt renderen.

Een klein probleem met een lange geschiedenis

Wie ooit een spreadsheet met bedragen als '-$1,234.56' of '12.5%' in een database heeft geladen, kent het probleem: SQLite ziet tekst, geen getal, en optellen of sorteren levert onzin op. Simon Willison, ontwikkelaar van onder meer Datasette en een van de meest gelezen chroniqueurs van praktisch AI-gebruik, vroeg zich tijdens het uitlaten van zijn hond af hoe moeilijk het is om dat met een eigen SQLite-functie op te lossen. Hij gaf de vraag aan Claude (Opus 5.5) in de gewone chatomgeving: bouw parse_number() als extensie in C en in Rust, en vergelijk prestaties, codecomplexiteit en de grootte van het resulterende bestand. SQLite is daarvoor een interessante proeftuin. De database draait op miljarden apparaten en laat zich uitbreiden met zogeheten loadable extensions, gedeelde bibliotheken die nieuwe SQL-functies toevoegen. Traditioneel is C daarvoor de vanzelfsprekende taal; Rust is de laatste jaren een serieuze uitdager.

Klein is niet altijd snel

De uitkomst was leerzaam. De C-extensie woog 14 KB, de Rust-varianten 321 KB met Rusqlite en 298 KB met sqlite-loadable-rs: ruim twintig keer zo groot. Toch was Rust sneller. Dat bleek niet aan de taal te liggen, maar aan de routine die tekst omzet naar een kommagetal: de Rust-tegenhanger van C's klassieke strtod is volgens het onderzoek twee keer zo snel. Dat past bij wat bekend is over Rusts standaardbibliotheek, die enkele jaren geleden een modern, sterk geoptimaliseerd algoritme voor het parsen van kommagetallen overnam, terwijl strtod in C onder meer rekening moet houden met landinstellingen. Willison duwde door: schrijf een eigen C-functie die Rust bijhaalt of verslaat, en meet de netto kosten per rij over 2 miljoen rijen. De precieze uitkomsten van die laatste ronde staan in zijn rapport; ons bronmateriaal geeft ze niet weer.

De Rust-extensie was ruim twintig keer zo groot als de C-versie, en toch sneller: de winst zat in de standaardbibliotheek, niet in de taal.

Wat dit zegt over AI-agenten

Het experiment is klein, maar illustratief voor hoe ervaren ontwikkelaars AI nu inzetten: niet als vervanger, maar als onderzoeksassistent die in de achtergrond een vraag uitwerkt die anders nooit was onderzocht. Dat contrasteert met ander nieuws van deze dag. In Alibaba's nieuwe benchmark lost zelfs het beste codeermodel slechts 26,4 procent van echte ontwikkeltaken volledig zelfstandig op, en Goldman Sachs haalt Claude Code weg bij handelaren en bankiers. Het verschil zit in de aard van de taak. Willisons vraag was afgebakend, meetbaar en reversibel: een fout prototype kost niets. Open, vage taken in grote codebases en gereguleerde omgevingen zijn een ander verhaal. Wie AI-agenten inzet, doet er goed aan precies dat onderscheid te maken.

Conclusie

Het interessantste aan dit experiment is niet dat Rust won, maar hoe het antwoord gevonden werd. Een vraag die vroeger een middag uitzoekwerk vergde, werd nu tussendoor beantwoord, inclusief een verrassend inzicht over strtod dat ook ervaren C-programmeurs zou kunnen ontgaan. Dat is de echte productiviteitswinst van AI-agenten: niet het vervangen van de ontwikkelaar, maar het verlagen van de drempel om nieuwsgierig te zijn. De voorwaarde blijft wel dat iemand de uitkomsten kritisch leest.

▶ YouTube

Reliability Lessons From SQLite - Richard Hipp | SSW 2026

Bronnen:

 

simonwillison.net ↗
