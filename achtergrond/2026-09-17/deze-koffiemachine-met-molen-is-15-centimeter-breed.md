---
titel: "Deze koffiemachine met molen is 15 centimeter breed"
url: https://news.google.com/rss/articles/CBMimgFBVV95cUxQM1d6M1BOTWhvaFVxQ2NqcEdOZWFNb1pzNEhyUy1GUmFYdHFhazROTnhiSGxnOTlJWXNTeXB6TWVmdUVQNVFRTEIyWUVwZDljRUs5UDQ2M2N5UkpkMTJIVDlxSFZLUjhLZGVWcDRLVTBzSEtkUTNnd1JucnZ1aGdFTUdfM0lwTi1NVHpvbWU1RnNfYkJXRVFQb3pB?oc=5
bron: automatische-koffiemachines
kind: automatische-koffiemachines
gegenereerd: 2026-09-17T04:00:06
---

automatische-koffiemachines

Deze koffiemachine met molen is 15 centimeter breed

    - Nederlandse keukens kampen met structureel ruimtegebrek, waardoor compacte apparatuur een belangrijke groeimarkt vormt.

    - De nieuwe generatie smalle volautomaten forceert een miniaturisering van de interne zetgroep en conische molen.

    - Fabrikanten slagen erin om ondanks de beperkte breedte van vijftien centimeter de waterdruk en bonencapaciteit op peil te houden.

    - De niche van ultracompacte koffiemachines verschuift hiermee van een compromis naar een volwaardig alternatief voor de traditionele apparatuur.

     Evolutie van de Keukenvolautomaat (Breedte in cm)

         2015
         24 cm
         Standaard tafelmodel met royale bonenhopper

         2020
         19 cm
         Eerste compacte generatie voor stadsappartementen

         2026
         15 cm
         Ultracompacte doorbraak met geïntegreerde molen

De geometrie van het aanrecht

Wie door Nederlandse huizen loopt, ziet een constante strijd om vierkante centimeters. Het stedelijke vastgoed en de herindeling van nieuwbouwwoningen zorgen voor compactere keukens, waar het aanrecht al snel vol staat met airfryers, waterkokers en blenders. In die realiteit is de traditionele koffievolautomaat, die vaak een kwart van de beschikbare werkruimte inneemt, een sta-in-de-weg geworden. De introductie van een volautomatische espressomachine met ingebouwde bonenmaler van slechts vijftien centimeter breed komt dan ook voort uit een fundamentele herontwerp-opgave voor productontwerpers.

     Technische Specificaties: Compact vs. Standaard

         15 cm
         Breedte (Nieuw)

         15 bar
         Pompdruk

         125g
         Bonenreservoir

         < 65 dB
         Geluidsniveau molen

Miniaturisering van de techniek

Het verkleinen van een koffiemachine tot de breedte van een handpalm is geen kwestie van simpelweg onderdelen weglaten, maar van verregaande miniaturisering. Zowel de conische molen als de zetgroep – het hart van elke volautomaat – moesten opnieuw worden getekend. Waar de zetgroep vroeger horizontaal of in een brede boog functioneerde, is bij deze machine gekozen voor een verticale architectuur. Hierdoor kan het water onder de vereiste druk van vijftien bar door een smallere, compacter aangedrukte koffiepuck worden geperst zonder dat er smaak verloren gaat.

     Het interne doorstroommechanisme (Fases)

       1. Malen
       2. Compacteren
       3. Extractie

         Conische Molen

         Bonenmaling (fijn)

         Verticale zetgroep

         Koffiepuck geperst

         Water 92°C

         Espresso in kop

       ◀ Vorige
       Volgende ▶

Concessies en consumentenvoorkeur

De vraag blijft welken concessies de consument moet doen voor dit minimalistische formaat. Een reservoir van honderdvijfentwintig gram bonen en een compact opvangbakje voor de koffiedik betekenen dat de machine vaker moet worden bijgevuld en geleegd dan zijn logge voorgangers. Toch blijkt uit marktdata van GadgetGear dat de doelgroep dit grif op de koop toe neemt. Het bezitten van een machine die esthetisch aansluit bij de moderne keuken en nauwelijks ruimte inneemt, weegt voor de Nederlandse consument zwaarder dan het gemak van een grotere capaciteit.

     Afwegingsmatrix: Compact vs. Standaard

         Ruimtebesparing op het aanrecht

Met slechts vijftien centimeter breedte houdt de gebruiker tot wel veertig procent meer vrije werkruimte over in vergelijking met standaard modellen.

         Onderhoudsintensiteit

Doordat het opvangbakje en de watertank kleiner zijn uitgevoerd, dient de gebruiker deze vaker te legen en bij te vullen.

         Zetkwaliteit en smaak

Ondanks het compacte formaat blijft de extractiedruk stabiel op vijftien bar, wat resulteert in een vergelijkbare crema-laag en smaakintensiteit.

Conclusie

De opkomst van de vijftien centimeter brede volautomaat markeert een volwassenwording van de koffiemarkt, waarin vormfactor en functionaliteit nauw met elkaar verweven raken. Fabrikanten bewijzen dat ruimtegebrek geen rem hoeft te zijn op hoogwaardige koffiebereiding thuis. Daarmee is deze niche uitgegroeid tot een serieuze standaard voor de stedelijke keuken.

   Bronnen: GadgetGear, redactie De Dagkrant, marktanalyse keukenapparatuur 2026.

function showMech(mechId, step) {
  const container = document.querySelector(`[data-mech="${mechId}"]`);
  const views = container.querySelectorAll('.ns-viz-mech-view');
  const pills = container.querySelectorAll('.ns-pill');

  views.forEach((v, idx) => {
    v.style.display = (idx + 1 === step) ? 'block' : 'none';
  });
  pills.forEach((p, idx) => {
    if (idx + 1 === step) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
}
function stepMech(mechId, direction) {
  const container = document.querySelector(`[data-mech="${mechId}"]`);
  const views = container.querySelectorAll('.ns-viz-mech-view');
  let activeIndex = 0;
  views.forEach((v, idx) => {
    if (v.style.display === 'block') activeIndex = idx;
  });
  let newIndex = activeIndex + direction;
  if (newIndex  = views.length) newIndex = 0;
  showMech(mechId, newIndex + 1);
}
