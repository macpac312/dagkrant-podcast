---
titel: "OpenAI claimt Navier–Stokes — wiskundigen roepen onraad"
url: https://www.theverge.com/ai-artificial-intelligence/991710/openai-navier-stokes-solution
bron: aitech
kind: aitech
gegenereerd: 2026-09-09T03:26:41
---

- OpenAI claimt met een intern geredeneerd AI-model een doorbraak te hebben geforceerd rond het Navier–Stokes-existentieprobleem, een van de zeven befaamde Millennium Prize Problems.

  - Gerenommeerde wiskundigen uiten felle twijfel: het gepresenteerde bewijs vertoont gaten rond singulariteiten en is niet formeel geverifieerd in systemen als Lean of Isabelle.

  - Achter de schermen ontstond ophef toen bleek dat een voormalig medeauteur van OpenAI de naam van een naar Anthropic overgestapte onderzoeker uit het concept-paper probeerde te weren.

  - De controverse legt een fundamentele kloof bloot tussen de 'move fast'-publicatiedruk van commerciële AI-labs en de rigoureuze bewijsstandaarden van de academische wiskunde.

       $1M
       Prijzengeld Clay Mathematics Institute per Millennium Problem

       1845
       Jaar waarin de Navier–Stokes-vergelijkingen werden voltooid

       0
       Formeel geverifieerde regels code in Lean bij de OpenAI-claim

       1 v 7
       Millenniumproblemen tot nu toe opgelost (Poincaré-vermoeden, 2003)

De lokroep van het onoplosbare

Het Navier–Stokes-existentie- en gladheidsprobleem tart wiskundigen en fysici al bijna twee eeuwen. De vergelijkingen modelleren hoe vloeistoffen en gassen bewegen — van de werveling in een theekop tot turbulentie rond vliegtuigvleugels. Hoewel ingenieurs de formules dagelijks numeriek benaderen, ontbreekt het fundamentele wiskundige bewijs: garanderen de vergelijkingen in drie dimensies altijd een gladde, oneindig differentieerbare oplossing zonder dat energie explodeert naar een oneindige dichtheid (een zogeheten ‘blow-up’)?

Toen OpenAI begin deze week een voorlopig paper en een ronkende blogpost de wereld in stuurde waarin werd geclaimd dat een gespecialiseerd redeneermodel de existentie van gladde oplossingen over willekeurige tijdspannes had bewezen, sloeg de academische wereld direct aan het rekenen. Het Clay Mathematics Institute looft een miljoen dollar uit voor een sluitend bewijs. Maar waar eerdere mijlpalen in AI-wiskunde, zoals AlphaGeometry van DeepMind, mikten op toetsbare wiskundeolympiade-opgaven, grijpt OpenAI nu direct naar de absolute kroonjuwelen van de theoretische fysica.

         1. Heuristisch Bewijs
         2. De Singulariteitsval
         3. Formele Validatie

         ◀
         ▶

             LLM-Redeneerketen
             Generatie van lemmata
             & Sobolev-schattingen

             Concept-Paper
             Synthese in LaTeX
             Schijnbare convergentie

             Publicatie

           Fase 1: Het taalmodel combineert geavanceerde differentiaalvergelijkingen tot een wiskundig betoog dat oppervlakkig consistent oogt.

             Kritieke Overgang
             Energie-ongelijkheid
             in 3D-turbulentie

             ✕

             Verborgen Aanname
             Cirkelredenering:
             veronderstelt gladheid
             om gladheid te bewijzen

           Fase 2: Analytici ontdekken dat het model bij stap 4.2 een aanname smokkelt die gelijkstaat aan het te bewijzen vermoeden.

             Lean / Isabelle
             Formele bewijsassistent
             Codeerbare logica

             De Academische Eis
             Geen marketing-preprint, maar
             machine-geverifieerde zekerheid

           Fase 3: Pas wanneer een interactieve stellingbewijzer de stappen accepteert, kan er sprake zijn van een legitieme oplossing.

De fatale stap in Sobolev-ruimte H¹

Binnen 48 uur na verschijning van het conceptdocument begonnen wiskundigen op platforms als MathOverflow en X de logica te ontleden. Onder leiding van vooraanstaande veldanalyse-experts werd de vinger op de zere plek gelegd: lemma 4.2 in het manuscript. Daar gebruikt het AI-systeem een klassieke schatting van niet-lineaire convectietermen, maar past een grenswaarde toe die uitsluitend geldt wanneer a priori al vaststaat dat er geen singulariteit optreedt.

Het is een klassieke valkuil in de niet-lineaire partiële differentiaalvergelijkingen: cirkelredeneringen die zo subtiel verpakt zijn dat ze bij een eerste lezing overtuigen. Terwijl een menselijke wiskundige jarenlang stilstaat bij zo'n knelpunt, produceert een generatief netwerk een vloeiend klinkend betoog dat het hiaat camoufleert met overtuigende wiskundige terminologie. Zolang OpenAI het model niet live laat draaien in een formele bewijsomgeving zoals Lean 4 — waarin elke afleiding stap voor stap logisch wordt afgedwongen — blijft het document steken in de categorie plausibele sciencefiction.

Academische intriges en de Anthropic-vete

Naast de wetenschappelijke tekortkomingen werd het incident overschaduwd door een gênante bestuurlijke rel. Volgens ingewijden was het bewijskader deels ontwikkeld door een onderzoeker die begin dit jaar OpenAI verruilde voor aartsrivaal Anthropic. Uit uitgelekte correspondentie bleek dat leidinggevenden binnen OpenAI hadden geprobeerd de naam van deze wetenschapper te schrappen van het conceptpaper, zogenaamd wegens 'verbroken vertrouwelijkheid'.

Pas na dreiging met juridische stappen en protest van mede-auteurs werd de naam in allerijl teruggeplaatst. De kwestie illustreert hoezeer de jacht op wetenschappelijk prestige verstrengeld is geraakt met zakelijke rivaliteit. Labs concurreren niet langer alleen op benchmarks voor codeer-assistenten of consumenten-chatbots, maar proberen elkaar te overvleugelen met doorbraken in de fundamentele wetenschap om investeerders te overtuigen van de naderende AGI (algemene kunstmatige intelligentie).

         Wat maakt Navier–Stokes zo uniek complex?
         +

De vergelijkingen beschrijven stromingen via niet-lineaire termen. In twee dimensies is al bewezen dat oplossingen glad blijven, maar in drie dimensies kan werveling (‘vorticity’) theoretisch oneindig snel toenemen. Dit kan leiden tot een punt waar de vloeistofsnelheid oneindig wordt: een fysisch onmogelijke singulariteit die aantoont dat het wiskundige model faalt.

         Het verschil tussen neurale intuïtie en formeel bewijs
         +

Grote taalmodellen voorspellen waarschijnlijke reeksen van wiskundige symbolen op basis van trainingsdata. Formele stellingbewijzers zoals Lean werken daarentegen deterministisch via typetheorie. Zonder formele verificatie kan een neuraal netwerk honderden correcte pagina's produceren die rusten op één niet-bestaande logische sprong.

         De precedenten: van Poincaré tot Kepler
         +

Grigori Perelman loste het Poincaré-vermoeden op in 2003 na jarenlange eenzame arbeid en weigerde het prijzengeld. Het Kepler-vermoeden vereiste computerberekeningen, maar werd pas algemeen aanvaard na een twintigjarig project (Flyspeck) dat het bewijs volledig formaliseerde in code. De wiskundige lat voor computationele bewijzen ligt historisch torenhoog.

Conclusie

De claim van OpenAI markeert een gevaarlijk scharniermoment in de relatie tussen commerciële AI-reuzen en de academische wereld. Door een rammelend manuscript via persberichten naar buiten te brengen voordat vakgenoten en formele verificatiesystemen hun oordeel hebben kunnen vellen, degradeert het instituut baanbrekend wiskundig onderzoek tot marketingmateriaal. Voor echte vooruitgang in de zuivere wiskunde telt niet de retorische overtuigingskracht van een redeneermodel, maar de onverbiddelijke strengheid van het formele bewijs.

 Bronnen: The Verge, Wired, Simon Willison's Weblog, Clay Mathematics Institute
