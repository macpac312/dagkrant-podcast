---
titel: "Europese telco’s willen samen bieden op spectrum voor een Starlink-concurrent"
url: https://tweakers.net/nieuws/251912/europese-telcos-willen-samen-bieden-op-spectrum-voor-starlink-concurrent.html
bron: aitech
kind: aitech
gegenereerd: 2026-09-08T19:00:32
---

aitech

Europese telco’s willen samen bieden op spectrum voor een Starlink-concurrent

   8 september 2026

    - Grote Europese telecomproviders smeden een gezamenlijk consortium voor satellietverbindingen rechtstreeks naar smartphones (Direct-to-Cell).

    - Het initiatief is een direct antwoord op de dominantie van Elon Musks Starlink en Amerikaanse big-tech-initiatieven.

    - Het consortium richt zich op het gezamenlijk verwerven van schaars radiospectrum om grensoverschrijdende dekking te garanderen.

    - De Europese Commissie kijkt constructief naar de plannen vanwege strategische autonomie en het dichten van dode zones.

De strategische kwetsbaarheid in de ruimte

De Europese telecommarkt bevindt zich in een geopolitieke spagaat. Waar traditionele mobiele netwerken decennialang via terrestrische masten werden uitgerold, verschuift de kritieke infrastructuur in rap tempo naar de lage aardbaan (LEO). Met het agressieve tempo van Starlink, dat in samenwerking met Amerikaanse providers al grootschalige satellietverbindingen naar gewone smartphones brengt, dreigt Europa de slag om de ruimte te verliezen. Grote Europese telco's erkennen dat individueel optreden kansloos is tegen de diepe zakken van Amerikaanse miljardairs. Een consortium moet het lokaal versnipperde Europese landschap bundelen tot één krachtige speler die kan concurreren op wereldschaal.

         6+
         Grote telco's in gesprek

         100%
         Dekking EU-territorium

         2028
         Beoogde lancering diensten

Hoe Direct-to-Cell de waardeketen hertekent

De technische uitdaging van satellietcommunicatie naar ongewijzigde consumententoestellen is enorm. Signalen moeten duizenden kilometers afleggen met minimale interferentie, terwijl ze concurreren met bestaande terrestrische frequenties. Om dit proces te begrijpen, moeten we kijken naar de keten van frequentiecoördinatie tot consumenteneindpunt. Waar telco's tot voor kort elkaars concurrenten waren op nationale frequentieveilingen, dwingt de satellietrevolutie hen tot verregaande harmonisatie. Het consortium fungeert als centrale inkooporganisatie en technisch coördinator om spectrumconflicten te vermijden.

         1. Spectrum-pooling
         2. Constellatie-link
         3. Handover
         4. Consument

             1. Gezamenlijke Spectrum-acquire  Harmonisatie van L- en S-band frequenties over EU-lidstaten   EU

             2. Satellietconstellatie  Koppeling met Europese LEO-satellieten via open standaarden

             3. Naadloze Handover  Omschakeling van 5G-mast naar satelliet zonder onderbreking

             4. Eindgebruiker  Standaard smartphone ontvangt nood- en dataverkeer

         ◀ Vorige
         Volgende ▶

Regelgeving en de strijd om de frequentieveilingen

De grootste hindernis voor het Europese initiatief is niet per se technologisch, maar juridisch van aard. Nationale regulatoren binnen de Europese Unie zijn al decennialang gewend om radiospectrum per land te veilen aan de hoogste bieder. Dit leidt tot gefragmenteerde markten en ongelijke dekking in dunbevolkte grensregio's. Het consortium pleit daarom voor een pan-Europese benadering van spectrumtoewijzing. De Europese Commissie kijkt hier welwillend naar, omdat het past binnen de bredere doelstellingen om de digitale achterstanden in rurale gebieden weg te werken en de Europese defensie- en communicatieonafhankelijkheid te versterken.

         Q1 2026

Eerste verkennende gesprekken tussen leidende Europese telecomconcerns.

         Q3 2026

Formele indiening consortiumvoorstel bij de Europese Commissie en spectrumautoriteiten.

         2027

Geplande harmonisatie van secundaire L/S-band frequenties en eerste veldtests.

Conclusie

Het voorgenomen consortium van Europese telco's markeert een zeldzaam moment van daadkrachtige samenwerking in een industrie die traditioneel gedomineerd wordt door nationale hokjesgeest. Door krachten te bundelen tegen de opmars van Starlink en andere Amerikaanse giganten, probeert Europa te voorkomen dat het op het gebied van mobiele satellietcommunicatie volledig afhankelijk wordt van buitenlandse spelers. Of de nationale mededingingsautoriteiten en de grillige Europese bureaucratie dit ambitieuze plan ongeschonden doorlaten, zal de komende twaalf maanden moeten blijken.

    Bronnen: Tweakers (08-09-2026), marktanalyse Europese telecomsector.

let currentMech = 0;
function showMech(idx) {
  const container = document.getElementById('mech-satelliet');
  if (!container) return;
  const pills = container.querySelectorAll('.ns-pill');
  const stages = container.querySelectorAll('.ns-mech-stage');
  pills.forEach((p, i) => p.classList.toggle('active', i === idx));
  stages.forEach((s, i) => s.classList.toggle('active', i === idx));
  currentMech = idx;
}
function nextMech() {
  const container = document.getElementById('mech-satelliet');
  if (!container) return;
  const stages = container.querySelectorAll('.ns-mech-stage');
  currentMech = (currentMech + 1) % stages.length;
  showMech(currentMech);
}
function prevMech() {
  const container = document.getElementById('mech-satelliet');
  if (!container) return;
  const stages = container.querySelectorAll('.ns-mech-stage');
  currentMech = (currentMech - 1 + stages.length) % stages.length;
  showMech(currentMech);
}
