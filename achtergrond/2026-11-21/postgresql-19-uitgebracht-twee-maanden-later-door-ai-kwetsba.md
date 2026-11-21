---
titel: "PostgreSQL 19 uitgebracht, twee maanden later door 'AI-kwetsbaarheidsapocalyps'"
url: https://simonwillison.net/2026/Nov/19/postgresql-19/
bron: aitech
kind: aitech
gegenereerd: 2026-11-21T05:34:26
---

PostgreSQL 19 verscheen twee maanden later dan de gebruikelijke septemberrelease.

Oorzaak: een stroom door AI-tools gemelde kwetsbaarheden, die Simon Willison een apocalyps noemt.

Nieuw: WAIT FOR LSN voor read-your-writes op standbys, REPACK en plan advice.

AI vindt steeds meer bugs in opensourcecode; onderhouders betalen de rekening in tijd.

Een release die moest wachten

Normaal verschijnt een nieuwe hoofdversie van PostgreSQL in september. Dit jaar duurde het twee maanden langer. Volgens Simon Willison lag dat vooral aan de vloed van meldingen die het team moest afhandelen, onderdeel van wat hij de aanhoudende AI-gemelde kwetsbaarheidsapocalyps noemt. Dat is een opvallende verschuiving. Jarenlang was het schaarse onderhoudersuur de bottleneck van opensource, en dat uur gaat nu op aan het beoordelen van bevindingen die AI-tools in grote aantallen aanleveren. Het is goed nieuws voor de veiligheid van de code, maar het kost releaseritme. Een databaseproject dat zich beroemt op voorspelbare jaarlijkse releases moest zijn planning aanpassen aan een nieuwe realiteit: meer ogen, namelijk machineogen, betekent meer werk, niet minder.

sep

Gepland

+2 mnd

Werkelijk

Vertraging t.o.v. gebruikelijke septemberrelease (schematisch).

Wat de wachttijd opleverde

Willison vindt dat de release de wachttijd waard was en wijst als favoriet naar WAIT FOR LSN. Applicaties die leesverkeer naar standbys sturen, krijgen daarmee read-your-writes-consistentie: een sessie wacht tot de standby het write-ahead log heeft afgespeeld tot een bekende positie, en voert dan pas de query uit. De positie, een waarde als 0/0306EE20, bewaar je tussen verzoeken, bijvoorbeeld in een ondertekende cookie. Een timeout is optioneel. Willison kende het patroon van Wikipedia, dat een handgebouwde versie voor MySQL-replicatie draait en daarmee een paar seconden lag tolereert zolang de gebruiker een consistent beeld houdt. Wat grote platforms zelf bouwden, zit nu in de kern van PostgreSQL.

Daarnaast noemt het project een nieuw REPACK-commando dat schijfruimte terugwint en tabelinhoud herordent, met de CONCURRENTLY-variant zonder blokkade van lees- en schrijfacties. De extensies pg_plan_advice en pg_stash_advice geven beheerders grip op planner-beslissingen. Verder komen er snellere foreign-key-checks, automatisch schalende I/O-workers, logische replicatie zonder herstart bij wal_level=replica en parallelle autovacuum van indexen met prioritering. Migreren vraagt, zoals gebruikelijk bij een hoofdversie, om dump/restore, pg_upgrade of logische replicatie.

Meer ogen op de code betekent meer werk voor wie de gaten moet dichten.

Gevolgen en perspectieven

Voor Nederlandse organisaties, van overheden tot webshops, waarvan veel op PostgreSQL draait, is het signaal tweeledig. Positief: kwetsbaarheden worden eerder gevonden en gedicht. Zorgelijk: wie zijn upgradeplanning op het septemberritme baseert, moet rekening houden met vertraging, en aanvallers hebben dezelfde AI-tools tot hun beschikking. Verwante berichten uit dezelfde krant laten zien dat AI zowel verdedigt als bedreigt: OpenAI verscherpt zijn bescherming tegen het stelen van redeneerstappen en Signal sluit screenshots af voor AI-agents. De beveiligingsstrijd verschuift naar tempo, en tempo vraagt mensen om te triageren.

Conclusie

PostgreSQL 19 is de eerste grote release waarvan het project zelf zegt dat AI-bevindingen het schema verschoven. Dat is geen incident maar een voorbode. Opensourceprojecten hebben financiering en triagecapaciteit nodig die meegroeit met de bevindingenstroom. Wie gratis software op bedrijfskritieke plekken draait, doet er verstandig aan onderhouders daadwerkelijk te ondersteunen, want de kosten van gevonden bugs worden anders afgewenteld op een handvol vrijwilligers.

▶ YouTube

PostgreSQL 19 uitgebracht, twee maanden later door 'AI-kwetsbaarheidsapocalyps' 2026

Bronnen:

 

simonwillison.net ↗

 • 

postgresql.org ↗
