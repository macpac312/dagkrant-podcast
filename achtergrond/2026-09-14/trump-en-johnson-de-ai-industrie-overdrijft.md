---
titel: "Trump en Johnson: de AI-industrie overdrijft"
url: https://www.theverge.com/ai-artificial-intelligence/994441/trump-mike-johnson-ai-industry-overreacting
bron: aitech
kind: aitech
gegenereerd: 2026-09-14T03:54:35
---

aitech

Trump en Johnson: de AI-industrie overdrijft

   14 september 2026

    - Kritiek groeit in Washington op de doemscenario's en megalomane investeringsbeloften van big tech.

    - Kamervoorzitter Mike Johnson en het Witte Huis trekken de handrem aan tegenoverdreven AI-regulering.

    - OpenAI-topman Sam Altman en Anthropic-CEO Dario Amodei worden gewezen op overdreven veiligheidsretoriek.

    - De kloof tussen marketinghype en economische realiteit van kunstmatige intelligentie wordt pijnlijk zichtbaar.

     Belangrijkste momenten in het AI-beleid (2024–2026)

         2024

Amodei publiceert invloedrijke veiligheidsbrief; tech-leiders waarschuwen voor existentiële risico's om subsidies te vrijwaren.

         2025

Energie- en datacentercapaciteit lopen vast; de miljardenbeloften van Altman botsen op fysieke en politieke grenzen.

         2026

Trump en Mike Johnson bekritiseren openlijk de retoriek van de AI-industrie en roepen op tot nuchter economisch beleid.

De retoriek van het onvermijdelijke

Jarenlang kon de kunstmatige-intelligentie-industrie rekenen op een ongekende politieke en maatschappelijke vrijbrief. Met brieven van kopstukken als Dario Amodei, de instemming van Sam Altman, Elon Musk en Demis Hassabis, en de enthousiaste steun van opeenvolgende regeringen werd een beeld geschapen van een naderende technologische singulariteit. Het Witte Huis zwaaide gretig de racevlag, in de angst om de geopolitieke strijd om AGI (Artificial General Intelligence) te verliezen van rivalen als China. Deze 'hype-cycle' diende een duidelijk doel: investeerders aantrekken, toezichthouders op afstand houden en miljarden subsidies veiligstellen voor gigantische datacenters.

Maar in de loop van 2026 begint het tij te keren. Republikeinse kopstukken, onder wie Kamervoorzitter Mike Johnson, en figuren rond de regering-Trump trekken openlijk de noodrem aan. Zij stellen dat de AI-industrie bewust overdrijft over zowel de catastrofale risico's als de onmiddellijke economische transformatie. Volgens critici in Washington wordt de angst voor existentiële bedreigingen misbruikt om regulering te kapen en concurrenten uit de markt te drukken, terwijl de daadwerkelijke productiviteitswinst op de werkvloer achterblijft bij de torenhoge verwachtingen.

     Hype versus Werkelijkheid in de AI-sector

         $100B+
         Geplande investeringen in datacenters

         15%
         Gemeten reële productiviteitsgroei MKB

         3x
         Stijging in politieke weerstand in Washington

De economische kater en politieke heroriëntatie

De kern van het conflict is tweeledig: energie en economisch rendement. De enorme energiehonger van de nieuwste generatie taalmodellen botst met de realiteit van overbelaste elektriciteitsnetten. Gemeenten en staten door heel de Verenigde Staten komen in verzet tegen de komst van lawaaierige, stroomvretende megadatacenters die nauwelijks lokale banen opleveren. Daarbij komt dat aandeelhouders kritischer beginnen te kijken naar de miljardenverliezen die techreuzen lijden om hun modellen te trainen en te onderhouden.

De politieke wind in Washington waait inmiddels uit een andere hoek. Waar het Witte Huis vorig jaar nog meeging in de Apocalyptische retoriek van de tech-elite, klinkt er nu scepsis. Mike Johnson en zijn bondgenoten betogen dat overdreven angstaanjagende verhalen over AI leiden tot verstikkende wetgeving die juist gevestigde techmonopolies beschermt ten koste van Amerikaanse startups. De boodschap vanuit de Amerikaanse politiek is helder: minder sciencefiction, meer economische realisme.

     Mechanisme van de AI-Hypecyclus

         1. Belofte
         2. Subsidie
         3. Botsing
         4. Correctie

             Fase 1: Existentiële dreiging  Tech-leiders waarschuwen voor ongecontroleerde AGI.

             Fase 2: Politieke steun  Witte Huis en overheid openen de portemonnee.

             Fase 3: Fysieke grenzen  Netcongestie en tegenvallend rendement op de werkvloer.

             Fase 4: Politieke correctie  Trump en Johnson eisen nuchterheid en remmen regulering.

         ◀ Vorige
         Volgende ▶

Conclusie

De omslag in Washington markeert het einde van de onbezorgde huwelijksreis tussen de Amerikaanse politiek en de AI-industrie. Door de retoriek rond doemscenarios en almachtige modellen te ontleden, dwingen leiders als Trump en Mike Johnson de sector om kleur te bekennen. Wie miljarden blijft vragen zal moeten bewijzen dat de technologie meer is dan een dure marketingbubbel.

   Bronnen: The Verge, openbare beleidsdocumenten en parlementaire debatten in Washington.

let currentPhase = 1;
function showPhase(n) {
  currentPhase = n;
  document.querySelectorAll('.mech-step').forEach((el, idx) => {
    el.style.display = (idx + 1 === n) ? 'block' : 'none';
  });
  document.querySelectorAll('.mech-pills .pill').forEach((el, idx) => {
    if (idx + 1 === n) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
function nextPhase() {
  currentPhase = currentPhase   1 ? currentPhase - 1 : 4;
  showPhase(currentPhase);
}
