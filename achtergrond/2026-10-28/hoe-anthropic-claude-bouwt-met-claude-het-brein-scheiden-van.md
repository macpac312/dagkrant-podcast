---
titel: "Hoe Anthropic Claude bouwt met Claude: het ‘brein’ scheiden van de ‘handen’"
url: https://latent.space/p/opus55/
bron: aitech
kind: aitech
gegenereerd: 2026-10-28T05:40:01
---

© latent.space

Anthropic scheidt in Managed Agents het redenerende 'brein' van de uitvoerende 'handen'.

Sessielog en harness blijven bestaan; de sandbox die code draait is vervangbaar.

Opus 5.5 moet slimmer per dollar zijn en minder breedsprakig dan zijn voorgangers.

Groei maakt saaie keuzes, zoals CPU-gebruik van de API, ineens strategisch.

Het lab achter het prospectus

Een dag na de S-1-indiening, het beursprospectus dat Anthropic deze week openbaar maakte, zat de podcast Latent Space met twee mensen die het product dagelijks bouwen: Katelyn Lesse, hoofd engineering, en Angela Jiang, hoofd product van het Claude Platform. Latent Space opent met een opvallende cijferreeks uit het prospectus: binnen een jaar ging de GAAP-marge van een verlies van 126 procent naar een winst van 19 procent. Het bedrijf schrijft dat toe aan twee lussen, verbetering en investering. Opus 5.5 geldt volgens de podcast al een maand als het algemeen erkende beste taalmodel. Het gesprek gaat echter minder over benchmarks dan over de minder zichtbare beslissingen: wie krijgt wanneer toegang tot sterkere modellen, hoe voorkom je misbruik, en hoe houd je een API overeind die harder groeit dan de hardware bijbenen kan.

Waarom brein en handen uit elkaar moeten

Het sterkste idee uit het gesprek is architectonisch. In Managed Agents scheidt Anthropic het sessielog en de harness van de sandbox die code uitvoert. Het model is het brein, de sandbox zijn de handen, en de harness is het zenuwstelsel dat ze verbindt. Dat klinkt als een technisch detail, maar het lost twee problemen tegelijk op. Ten eerste betrouwbaarheid: een agent die uren doorwerkt, crasht vroeg of laat ergens, en dan wil je niet alles kwijt. Ten tweede veiligheid: credentials en netwerktoegang horen in een gecontroleerde laag, niet in de handen van een model dat door een kwaadwillende prompt kan worden omgepraat. Hetzelfde principe kent de klassieke informatica als scheiding van besturing en uitvoering. Nieuw is dat het nu geldt voor een uitvoerder die zelf beslissingen neemt.

Een mislukte sandbox hoeft niet de hele agentsessie mee te nemen: dat is de kern van brein en handen.

Kosten, distillatie en de prijs van groei

Ook de lancering van Opus 5.5 draaide om meer dan kwaliteit. Klanten vonden eerdere Opus-generaties te breedsprakig en vroegen om meer intelligentie per dollar; Anthropic zegt dat het nieuwe model goedkoper draait, al hangt de besparing af van de werklast en het gebruik van gecachete context. Een minder zichtbare wijziging is het bewaren van denkblokken over beurten heen, onder meer om te voorkomen dat concurrenten het redeneren van Claude aftappen om eigen modellen te distilleren. Dat beschermt Anthropic, maar kan bestaande integraties van klanten breken. Opvallend is ook dat CPU-gebruik van de API strategisch wordt: de Messages API werd herbouwd in Rust. Tegen de achtergrond van Amazons terugtocht uit eigen modellen en de auteursrechtzaken rond trainingsdata toont dit gesprek de andere kant van Anthropic: een bedrijf dat zijn voorsprong vooral in infrastructuur en discipline zoekt.

Conclusie

De race tussen AI-labs wordt vaak voorgesteld als een benchmarkwedstrijd. Dit gesprek laat zien dat de beslissende winst in 2026 eerder zit in saaie lagen: harnesses, sandboxen, CPU-budgetten en evals die echte klantomgevingen weerspiegelen. Wie agents betrouwbaar wil laten doorwerken, moet ze leren falen zonder alles te verliezen. Die ontkoppeling is waarschijnlijk duurzamer dan welk benchmarkrecord ook, en concurrenten zullen haar overnemen.

▶ YouTube

Hoe een antropomorfe ingenieur Claude Docs gebruikt

Bronnen:

 

latent.space ↗

 • 

latent.space ↗
