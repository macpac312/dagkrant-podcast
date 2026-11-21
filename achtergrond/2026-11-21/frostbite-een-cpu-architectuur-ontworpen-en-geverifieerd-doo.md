---
titel: "Frostbite: een CPU-architectuur ontworpen en geverifieerd door AI"
url: https://architectlabs.com/blog/frostbite
bron: aitech
kind: aitech
gegenereerd: 2026-11-21T05:34:26
---

© architectlabs.com

Architect Labs presenteert Frostbite, een CPU met nieuwe instructieset, volgens het bedrijf door AI ontdekt en geverifieerd.

Op 25 werklasten haalt het 4,59 keer betere prestaties per watt dan een superscalaire kern.

Op Hacker News scoort het 633 punten en meer dan 330 reacties.

De discussie draait om hoeveel menselijke sturing achter het label zit.

Een chip die niet uit een menselijk handboek komt

Architect Labs stelde zichzelf de vraag of zijn AI-systemen een nieuw hardwareontwerp konden ontdekken dat menselijke ontwerpen ver overtreft. Het antwoord is Frostbite: een algemene CPU met een gloednieuwe instructieset, volgens het bedrijf door AI ontdekt, ontworpen en geverifieerd. Eerder liet het bedrijf met Redwood zien dat zijn AI gegeven een architectuur een inferentieversneller snel kon bouwen en implementeren; nu gaat het om het ontwerp zelf. De prestatiewinst is groot: 4,59 keer betere prestaties per watt dan een moderne superscalaire kern. Dat is voor een sector waar de snelheid van een enkele kern sinds de jaren nul nauwelijks groeit, een opvallende claim. Het stuk kreeg op Hacker News 633 punten en ruim 330 reacties.

Waar de winst vandaan komt

De kern van het idee is dat moderne CPU’s veel energie steken in het ontdekken van wat zonder gevolgen parallel kan lopen. Omdat gangbare programmeertalen afhankelijkheden verbergen, gaat de hardware uit van het slechtste geval en achterhaalt tijdens het draaien welke instructies van elkaar afhangen. Bovendien moeten multicore-chips de illusie van gedeeld geheugen in stand houden, wat veel kost. Frostbite stapt over op interaction nets, waarin alles lokaal en expliciet is. Dat past bij een ontwerp waarin compiler, instructieset en hardware samen worden geoptimaliseerd, iets wat menselijke teams zelden doen omdat de ontwerpruimte te groot is. Architect Labs zegt verrast te zijn door de gevonden primitieven. De claim blijft een claim: de cijfers komen van het bedrijf zelf en de 15 achtergehouden werklasten zijn geen onafhankelijke test.

Systemen met de juiste vrijheid en vangrails kunnen software en hardware samen ontwerpen en over de hele stapel optimaliseren. — Architect Labs

Wat het betekent: verificatie als bottleneck

De Hacker News-discussie draait vooral om hoeveel menselijke sturing achter het label ontworpen door AI zit. Dat is terecht, want het blijft onduidelijk waar de mens de vangrails plaatste. Interessanter is de tweede laag: als AI ontwerpen kan produceren, wordt verificatie de schaarste. Een aanpalend artikel van Latent Space beschrijft hoe AI-bedrijven als Harmonic, Theorem, Axiom Math en &Truth formele verificatie als antwoord op slop zien. Mede-oprichter Clark Barrett zegt dat testen nooit zeker maakt dat alle fouten gevonden zijn, terwijl formele bewijzen dat wel doen. Voor chips, waar een fout na fabricage onherstelbaar is, is dat extra relevant. Het sluit aan bij de Riemann-discussie van dezelfde dag, waar Lean een vergelijkbare rol speelt.

Conclusie

Frostbite is nog vooral een belofte, maar wel een die de goede vraag stelt: wat als de grootste beperking van CPU’s niet het silicium is, maar de ontwerpkeuzes van mensen? Zolang de cijfers niet onafhankelijk zijn gerepliceerd en onduidelijk blijft hoe groot de menselijke bijdrage was, is voorzichtigheid geboden. Maar de richting, AI die over de hele ontwerpstapel optimaliseert en formeel verifieert, lijkt blijvend.

▶ YouTube

Frostbite: een CPU-architectuur ontworpen en geverifieerd door AI 2026

Bronnen:

 

architectlabs.com ↗

 • 

latent.space ↗
