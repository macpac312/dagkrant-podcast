---
titel: "Adobe laat AI-agent werken als een Photoshop-professional"
url: https://the-decoder.com/adobe-is-testing-how-well-ai-agents-can-use-editing-tools-like-a-photoshop-professional-would/
bron: aitech
kind: aitech
gegenereerd: 2026-11-02T05:42:46
---

© the-decoder.com

Adobe Research en UC San Diego bouwden EditAgent, een beeldbewerkende AI-agent.

Een algemene editor faalde in 42,7 procent van 600 testbewerkingen.

Specialistisch gereedschap en meetbare controles maken een gewoon taalmodel tot betere beoordelaar.

De les reikt verder dan Photoshop: agents worden beter door gereedschap, niet door herhalen.

Waarom één editor niet genoeg is

AI-agents voor beeldbewerking werken doorgaans op dezelfde manier: ze knippen een complexe opdracht op in stappen, proberen een mislukte stap opnieuw met hetzelfde gereedschap, en laten een apart model het resultaat 'op het oog' beoordelen. Onderzoekers van Adobe Research en UC San Diego vinden dat een omweg. Hun systeem EditAgent werkt meer zoals een Photoshop-professional: het kiest per taak het juiste gereedschap en vergelijkt het resultaat met het origineel aan de hand van harde cijfers. De aanleiding is een test van 600 bewerkingen, blind beoordeeld door vijf professionals. De algemene editor Flux-2-Klein-9B leverde in 42,7 procent van de gevallen geen bruikbaar resultaat. Gespecialiseerde tools losten ongeveer twee derde van die mislukkingen op, vooral bij verscherpen, roteren en inzoomen. Vaker opnieuw proberen met dezelfde editor hielp nauwelijks.

Faalt

Opgelost

Parallel

42,7%

~2/3

78,5%

Mislukt, door specialisten opgelost, voorkeur parallelle varianten.

Meten in plaats van kijken

Een tweede vraag was of een agent beter stap voor stap verfijnt of meerdere varianten tegelijk maakt. Iteratief verfijnen blijkt fouten op te stapelen, omdat elke ronde voortbouwt op een al veranderd beeld. Waar de professionals een kant kozen, gaven ze in 78,5 procent de voorkeur aan parallelle varianten vanaf het origineel, en de agent had maar half zoveel beoordelingsrondes nodig. EditAgent combineert die inzichten. Per stap laat het de algemene editor concurreren met passende specialistische tools, waarna een standaard taalmodel alle varianten in één keer vergelijkt. Het krijgt daarvoor per variant een verificatiedossier mee: een close-up van het bewerkte gebied, een kaart van veranderde regio's en gemeten statistieken over helderheid en kleur. In een voorbeeld moest een foto licht worden opgehelderd; de cijfers lieten zien dat de algemene editor overbelichtte en de kleuren warmer maakte, terwijl het specialistische gereedschap binnen de specificatie bleef.

Het taalmodel hoeft geen beter oog te hebben, het moet de juiste meetgegevens krijgen.

Wat dit betekent voor de creatieve sector

Voor Adobe is dit meer dan een academische oefening. Het bedrijf staat onder druk van generatieve beeldmodellen die buiten zijn software om werken, en zoekt een rol als regisseur van gereedschap in plaats van leverancier van één model. EditAgent past in een bredere verschuiving bij AI-agents: niet één alleskunner die blijft proberen, maar een planner die specialistische tools aanstuurt en resultaten controleert met objectieve metingen. Dat principe is herkenbaar uit softwareontwikkeling, waar agents tests draaien in plaats van code te 'beoordelen'. Voor professionals is het een gemengd signaal. Enerzijds wordt hun werkwijze het model voor de machine; anderzijds bleef hun oordeel de maatstaf in de benchmark. Hoe goed EditAgent buiten de testset presteert en wanneer het in producten verschijnt, vermeldt het onderzoek niet.

Conclusie

De belangrijkste bevinding is bescheiden maar wezenlijk: een agent wordt niet slimmer door vaker te proberen, wel door beter gereedschap en betere metingen. Dat ondergraaft het idee dat steeds grotere algemene modellen alles oplossen. Voor beeldbewerking, en waarschijnlijk voor veel ander kenniswerk, ligt de winst in orkestratie en verificatie. Adobe wedt daarmee op zijn sterkste troef: de gereedschapskist zelf.

▶ YouTube

Hoe bouw je een Photoshop AI-agent in N8N [Handleiding 2026]?

Bronnen:

 

the-decoder.com ↗
