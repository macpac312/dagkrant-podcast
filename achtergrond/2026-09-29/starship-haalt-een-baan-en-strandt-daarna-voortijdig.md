---
titel: "Starship haalt een baan, en strandt daarna voortijdig"
url: https://nos.nl/l/2632902
bron: wereld
kind: wereld
gegenereerd: 2026-09-29T05:27:26
---

wereld

Starship haalt een baan, en strandt daarna voortijdig

 29 september 2026

De jongste testvlucht van SpaceX’ megaraket Starship heeft een langverwachte mijlpaal bereikt: voor het eerst is een baan om de aarde bereikt. Waar eerdere pogingen na een suborbitale paraboolvlucht voortijdig in de oceaan eindigden, wist de combinatie van Super Heavy en Starship nu de orbitale drempel te slechten. Toch liep de missie wederom uit op een voortijdig einde tijdens de afdaling.

  - Starship heeft voor het eerst in de geschiedenis van het programma een volledige baan om de aarde voltooid.

  - Eerdere testvluchten waren strikt suborbitaal en braken na ongeveer een uur af zonder orbitale snelheid te benaderen.

  - Een defecte motor gooide roet in het eten tijdens de gecontroleerde terugkeer en vurige splashdown.

  - Zowel NOS, NRC als CNBC bevestigen dat de technische drempel van orbitale vlucht hiermee officieel is gepasseerd.

   Vluchtverloop: van suborbitaal naar orbitale test

       Vlucht 1-3
        Suborbitale parabolen
Geen orbitale snelheid; raket viel na ca. 60 minuten ongecontroleerd terug.

       Vlucht 4-5
        Verbeterde sturing
Eerste succesvolle 'splashdown' van de Super Heavy booster op zee.

       Huidige test
        Eerste baan om de aarde
Orbitale snelheid bereikt, maar motorfalen verstoort de finale landing.

De betekenis van een echte baan

Het verschil tussen een suborbitale sprong en een werkelijke baan om de aarde is fundamenteel voor de ambities van SpaceX. Om vracht en later mensen naar de maan of Mars te transporteren, moet een vaartuig niet alleen de atmosfeer doorbreken, maar ook de horizontale snelheid behouden die nodig is om in vrije val rond de planeet te blijven cirkelen. Dat lukte tijdens deze test overtuigend, waarmee de ingenieurs waardevolle telemetrie binnenharkten over het gedrag van de raket in de ruimte.

   Kernparameters van de testvlucht

       1e
       Keer in orbit

       2
       Fasen (Booster + Ship)

       Vurig
       Einde door motorfalen

Het mechanisme van de terugkeer

Het testen van een herbruikbare raket van deze schaal brengt extreme fysieke krachten met zich mee. Bij de herinvoer in de dampkring krijgt het hitteschild van Starship te maken met temperaturen van duizenden graden Celsius. De warmteafvoer en de aerodynamische remming moeten naadloos samenwerken met de herstart van de Raptor-motoren voor de uiteindelijke remraket. Toen een van die motoren weigerde dienst te weigeren, sloeg de stabiliteit om, wat leidde tot de voortijdige beëindiging.

   Keten van de orbitale missie

     1. Lancering
     2. Baan bereikt
     3. Terugkeer
     4. Motorfalen

         Super Heavy ontsteekt; verticale lift-off

         Starship bereikt horizontale snelheid en orbitale baan

         Dampkringinvoer en thermische piek op hitteschild

         Vurige splashdown na onvoorziene motorstoring

     ◀ Vorige
     Volgende ▶

Naar een volwaardig testsysteem

Ondanks het voortijdige einde overheerst optimisme in de ruimtevaartwereld. Waar traditionele raketten na één mislukte vlucht maanden stil liggen, hanteert SpaceX een iteratieve methode waarbij falen data oplevert. De verworven inzichten over het handhaven van een baan om de aarde zijn cruciaal voor de volgende generatie vluchten, waarin ook vangpogingen met de lanceertoren verder geperfectioneerd moeten worden.

   Veelgestelde vragen over de test

       Was deze vlucht nu wel of niet succesvol?

Vanuit het perspectief van SpaceX wel: het hoofddoel (een baan bereiken) is gehaald. Het verlies van de raket tijdens de afdaling past binnen hun risicoprofiel voor tests.

       Waarom is een orbitale vlucht zo belangrijk?

Omdat alleen zo de daadwerkelijke reistijd en systemen in de ruimte kunnen worden getest die nodig zijn voor interplanetaire missies.

Conclusie

Starship heeft aangetoond dat het de fysieke barrière naar een baan om aarde kan slechten. Dat de landing nog niet vlekkeloos verliep, onderstreept dat het ontwikkelingsprogramma in volle gang is, maar verandert niets aan de fundamentele stap voorwaarts die deze test markeert.

 Bronnen: NOS, NRC, BBC, CNBC

let currentMech = 0;
function showMechSlide(index) {
  const slides = document.querySelectorAll('#mech-starship .ns-mech-slide');
  const pills = document.querySelectorAll('#mech-starship .ns-pill');
  if(index  = slides.length) return;
  slides[currentMech].classList.remove('ns-active');
  pills[currentMech].classList.remove('ns-active');
  currentMech = index;
  slides[currentMech].classList.add('ns-active');
  pills[currentMech].classList.add('ns-active');
}
function nextMechSlide() {
  const slides = document.querySelectorAll('#mech-starship .ns-mech-slide');
  showMechSlide((currentMech + 1) % slides.length);
}
function prevMechSlide() {
  const slides = document.querySelectorAll('#mech-starship .ns-mech-slide');
  showMechSlide((currentMech - 1 + slides.length) % slides.length);
}
