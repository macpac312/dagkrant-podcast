---
titel: "Claude krijgt Message Threads: eerste antwoord tot 35% sneller"
url: https://www.indiatoday.in/technology/news/story/anthropic-rolls-out-message-threads-in-public-beta-to-make-claude-ai-much-faster-3031855-2026-11-04
bron: aitech
kind: aitech
gegenereerd: 2026-11-04T05:41:10
---

© indiatoday.in

Anthropic brengt Message Threads in publieke bèta: alleen het nieuwste bericht plus een ID versturen.

Bij verzoeken van 500.000 tot 1 miljoen tokens daalt de tijd tot eerste token met circa 35%.

Prijzen, rate limits en tokenverbruik blijven gelijk; threads verlopen na vijf minuten inactiviteit.

Sneller, niet goedkoper: de winst zit in netwerktijd, de rekenrekening blijft staan.

Het probleem van het steeds langere gesprek

Wie een AI-agent bouwt, bijvoorbeeld een programmeerassistent, stuurt bij elke nieuwe vraag de volledige gespreksgeschiedenis opnieuw naar het model. Taalmodellen zijn op API-niveau stateless: ze onthouden niets tussen twee verzoeken. Zolang een gesprek kort is, merkt niemand dat. Maar agents die urenlang code schrijven, computers bedienen of zware documenten en afbeeldingen verwerken, bouwen contexten op van honderdduizenden tokens. Dat blok moet bij elke beurt over het netwerk, en dat kost tijd. Anthropic kondigde maandag Message Threads aan, in publieke bèta. Ontwikkelaars sturen voortaan alleen hun nieuwste bericht mee met de ID van het vorige antwoord; de server houdt de rest kort vast. Volgens Anthropic daalt de tijd tot het eerste token daardoor met ongeveer 35 procent bij verzoeken van 500.000 tot 1 miljoen tokens.

Sneller is niet goedkoper

The New Stack vat de kern droog samen: Claude Code wordt sneller, maar de tokenrekening blijft hetzelfde. Dat is geen detail. Message Threads lost een netwerkprobleem op, geen rekenprobleem. Het model moet nog steeds de hele context lezen, dus de kostbare GPU-tijd blijft gelijk; alleen het transport verdwijnt. Daarin verschilt de functie van prompt caching, waarbij al verwerkte context tegen een lagere prijs kan worden hergebruikt. Het tijdsvenster van vijf minuten maakt de keuze bovendien duidelijk: dit is gebouwd voor agents die in hoog tempo beurten wisselen, niet voor een gebruiker die een middag nadenkt tussen twee vragen. Elders in deze krant staat dat de computekosten van Anthropic sneller stijgen dan de omzet. Tegen die achtergrond is een verbetering die gebruikers tijd bespaart zonder de prijs te verlagen, en zonder Anthropic extra rekenkracht te kosten, commercieel logisch.

zonder

met threads

100

~65

Tijd tot eerste token, index; 500k–1 mln tokens.

De tijdwinst zit in wat er níét meer over het netwerk hoeft. Het model leest het hele gesprek nog steeds, en daar betaal je nog steeds voor.

Wie het krijgt, en wie niet

De bèta is beschikbaar op het eigen Claude Platform, via Amazon Web Services, Microsoft Foundry en door Anthropic beheerde modellen op Google Cloud. Opvallend is wie buiten de boot valt: accounts met strikte Zero Data Retention-afspraken en accounts die HIPAA-conformiteit vereisen. Dat is precies de doelgroep van zorg, financiële dienstverlening en overheid, ook in Europa, waar organisaties eisen dat gegevens nergens blijven hangen. Anthropic benadrukt dat threads alleen in werkgeheugen staan en binnen een uur verdwijnen, maar zelfs die korte bewaring past niet in een nul-retentie-belofte. Daarmee ontstaat een tweedeling: bedrijven met de strengste privacy-eisen betalen dezelfde prijs voor een tragere ervaring. Voor Europese afnemers die onder de AVG werken, wordt de afweging tussen snelheid en dataminimalisatie zo een concrete inkoopvraag. Dat de functie op alle grote clouds tegelijk verschijnt, is evengoed betekenisvol. Anthropic verkoopt Claude steeds nadrukkelijker als infrastructuur die overal beschikbaar is, in plaats van als eigen platform waar klanten naartoe moeten komen. Wie agents bouwt op AWS of Microsoft Foundry, hoeft voor deze versnelling niet over te stappen.

Conclusie

Message Threads is een slimme, bescheiden verbetering die precies laat zien waar de AI-race nu wordt gevoerd: niet alleen in modelkwaliteit, maar in de leidingen eromheen. Voor agentontwikkelaars is 35 procent snellere start bij enorme contexten merkbaar. Wie hoopte op lagere kosten, komt bedrogen uit. En de uitsluiting van ZDR- en HIPAA-klanten toont het eeuwige dilemma van cloud-AI: elke versnelling vraagt een beetje geheugen, en geheugen is precies wat de strengste klanten niet willen geven.

▶ YouTube

Claude krijgt Message Threads: eerste antwoord tot 35% sneller 2026

Bronnen:

 

indiatoday.in ↗
