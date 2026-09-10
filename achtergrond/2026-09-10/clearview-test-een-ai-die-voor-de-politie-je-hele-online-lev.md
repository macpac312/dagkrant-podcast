---
titel: "Clearview test een AI die voor de politie je hele online leven opgraaft"
url: https://www.wired.com/story/clearview-ai-is-testing-an-ai-tool-that-lets-cops-instantly-unearth-your-online-activity/
bron: aitech
kind: aitech
gegenereerd: 2026-09-10T20:08:14
---

aitech

Clearview test een AI die voor de politie je hele online leven opgraaft

   10 september 2026

    - Clearview AI test een experimentele tool waarmee opsporingsdiensten iemands volledige digitale voetafdruk direct kunnen doorlichten.

    - De technologie combineert gezichtsherkenning met geavanceerde Large Language Models (LLM's) en xAI's Grok-technologie voor diepgaande profilering.

    - Privacyexperts slaan alarm over het ontbreken van wettelijke waarborgen en de risico's van massasurveillance in real-time.

    - De testsfase markeert een nieuwe escalatie in het gebruik van generatieve AI binnen de wetshandhaving.

     Evolutie van politiële opsporingstechnologie

         2020
         Statische gezichtsherkenning op basis van foto-matching

         2023
         Integratie van sociale media databases en open source intelligence

         2026
         Volledige digitale levensloop-analyse via generatieve AI

Van gezichtsherkenning naar totale digitale profilering

Clearview AI, het controversiële gezichtsherkenningsbedrijf dat miljarden openbare foto's indexeerde zonder toestemming, legt de lat opnieuw hoger. Uit onthullingen van Wired blijkt dat het bedrijf achter de schermen experimenteert met een AI-tool die verder gaat dan simpele biometrische matching. De software is ontworpen om niet alleen een naam te plakken op een gezicht, maar om onmiddellijk iemands gehele online geschiedenis, sociale media-interacties, publieke connecties en gearchiveerde webpagina's samen te vatten in een begrijpelijk dossier. Dit markeert een fundamentele verschuiving in hoe opsporingsdiensten openbare data benaderen.

     Technologische componenten van het nieuwe opsporingssysteem

         Traditionele OSINT

          - Handmatig zoeken door rechercheurs

          - Losse databases en zoekmachines

          - Tijdrovend en arbeidsintensief

          - Versnipperd bewijsmateriaal

         Clearview AI Profiler

          - Geautomatiseerde LLM-synthese

          - Real-time correlatie van online sporen

          - Directe samenvatting van iemands leven

          - Grok-integratie voor diepgaande analyse

De rol van Grok en generatieve taalmodellen

Wat deze nieuwe proef onderscheidt van eerdere versies, is de integratie van krachtige taalmodellen, waaronder technologie die gelieerd is aan xAI's Grok. Waar Clearview voorheen vooral fungeerde als een visuele zoekmachine – upload een foto, krijg links naar overeenkomende gezichten – fungeert de nieuwe tool als een synthetisch brein. Het model leest door duizenden datapunten heen, legt verbanden tussen schijnbaar ongerelateerde gebeurtenissen uit het verleden en genereert een verhalend overzicht van iemands gedrag, opvattingen en bewegingen. Hierdoor verandert een simpele foto in een diepgaand psychologisch en sociologisch profiel binnen enkele seconden.

     Werkingsketen van de AI-profielgenerator

       1. Input
       2. Matching
       3. Aggregatie
       4. Synthese

         Fase 1: Biometrische Input
Een agent uploadt een foto van een verdachte, getuige of willekeurige persoon in het systeem.

         Fase 2: Gezichtsherkenning
Clearview's database van tientallen miljarden beelden zoekt direct naar visuele matches op het open internet.

         Fase 3: Data-aggregatie
Gevonden URLs, socialemediaprofielen, blogposts en oude nieuwsberichten worden gebundeld.

         Fase 4: LLM Dossier-generatie
Het taalmodel (o.a. Grok-technologie) schrijft een coherent, samenvattend gedragsprofiel voor de agent.

       ◀ Vorige
       Volgende ▶

Juridische en maatschappelijke implicaties

De introductie van deze technologie roept acute juridische en ethische vragen op. Hoewel Clearview benadrukt dat de tool enkel gebruikmaakt van openbaar beschikbare informatie, betogen critici dat het aggregeren van al deze data via generatieve AI neerkomt op een vorm van ongereguleerde massasurveillance. Het risico op profilering op basis van foutieve correlaties, hallicinerende taalmodellen en het ontbreken van transparantie of rechterlijke toetsing vormt een directe bedreiging voor grondrechten. In Europa zou een dergelijke toepassing vrijwel zeker direct botsen met de strenge kaders van de Algemene Verordening Gegevensbescherming (AVG) en de naderende Artificial Intelligence Act.

     Veelgestelde vragen over Clearview's AI-profiler

         Is de gebruikte data echt volledig openbaar?

De data komt van openbare webpagina's en socialemedia-profielen, maar vaak van platforms waar gebruikers hun instellingen niet op privé hadden staan of van gearchiveerde pagina's die allang verwijderd hadden moeten zijn.

         Welke politiediensten testen de tool momenteel?

De proef wordt in besloten kring getest door geselecteerde wetshandhavingsinstanties, voornamelijk in de Verenigde Staten, als onderdeel van een vroege bètafase.

         Hoe betrouwbaar zijn de gegenereerde profielen?

Zoals bij alle Large Language Models bestaat het risico op 'hallucinaties' – het verzinnen of onterecht aan elkaar knopen van feiten – wat in een juridische context tot ernstige misvattingen kan leiden.

Conclusie

Met de test van deze AI-profilingtool bewandelt Clearview AI een grensverleggend en omstreden pad. Waar opsporingsdiensten voortdurend zoeken naar efficiëntere methoden om digitale sporen te analyseren, dreigt de balans tussen effectieve rechtshandhaving en de bescherming van de burgerlijke levenssfeer definitief door te slaan. De technologie laat zien dat de kloof tussen sci-fi-surveillance en dagelijkse politiesprakijk kleiner is dan ooit.

   Bronnen: Wired, Clearview AI documentatie, privacy-experts

  let currentMechStep = 0;
  const totalMechSteps = 4;

  function showMechStep(step) {
    currentMechStep = step;
    const container = document.getElementById('mech-clearview');
    const contents = container.querySelectorAll('.mech-step-content');
    const pills = container.querySelectorAll('.pill');

    contents.forEach((el, idx) => {
      el.style.display = idx === step ? 'block' : 'none';
    });

    pills.forEach((p, idx) => {
      if (idx === step) {
        p.style.background = 'var(--accent, #0044cc)';
        p.style.color = 'white';
        p.classList.add('active');
      } else {
        p.style.background = 'transparent';
        p.style.color = 'inherit';
        p.classList.remove('active');
      }
    });
  }

  function nextMechStep() {
    currentMechStep = (currentMechStep + 1) % totalMechSteps;
    showMechStep(currentMechStep);
  }

  function prevMechStep() {
    currentMechStep = (currentMechStep - 1 + totalMechSteps) % totalMechSteps;
    showMechStep(currentMechStep);
  }
