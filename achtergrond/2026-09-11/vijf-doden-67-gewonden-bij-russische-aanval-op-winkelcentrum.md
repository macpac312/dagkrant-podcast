---
titel: "Vijf doden, 67 gewonden bij Russische aanval op winkelcentrum in Pavlohrad"
url: https://nos.nl/l/2630511
bron: wereld
kind: wereld
gegenereerd: 2026-09-11T03:42:55
---

- Bij een Russische raketaanval op een drukbezocht winkelcentrum in Pavlohrad zijn donderdag overdag vijf doden en 67 gewonden gevallen.

  - Onder de tientallen gewonden bevinden zich ten minste drie tieners, wat de kwetsbaarheid van de getroffen burgerbevolking onderstreept.

  - Pavlohrad ligt op ruim honderd kilometer van de actieve frontlijn, waardoor de aanval de strategische diepte van Russische precisiebombardementen illustreert.

  - De aanval vond plaats tijdens piekuren overdag, wat volgens militaire analisten wijst op een bewuste tactiek om maximale maatschappelijke ontwrichting te veroorzaken.

De anatomie van een middagbombardement

De aanval op het winkelcentrum in Pavlohrad voltrok zich op een moment dat de faciliteit vol stroomde met winkelend publiek. Een winkelcentrum op klaarlichte dag is geen militair doelwit; het is een plek waar grote groepen burgers samenkomen. Het doelbewust of roekeloos inzetten van zware precisiewapens op dergelijke locaties getuigt van een doctrine waarin de grens tussen militaire noodzaak en terreur bewust is vervaagd. De inslag veroorzaakte een enorme ravage, waarbij de constructie van het gebouw deels instortte en omliggende winkelpanden zwaar beschadigd raakten. Hulpdiensten moesten urenlang zoeken naar overlevenden onder het puin, terwijl de teller van het aantal gewonden snel opliep naar 67.

   Slachtofferbalans Pavlohrad

    (function() {
      const initChart = () => {
        const ctx = document.getElementById('chart-slachtoffers');
        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Doden', 'Gewonden (volwassenen)', 'Gewonden (tieners)'],
              datasets: [{
                label: 'Aantal personen',
                data: [5, 64, 3],
                backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6'],
                borderRadius: 4,
                borderWidth: 0
              }]
            },
            options: {
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                x: { beginAtZero: true, grid: { display: false } },
                y: { grid: { display: false } }
              }
            }
          });
        }
      };
      if (typeof Chart !== 'undefined') {
        initChart();
      } else {
        document.addEventListener('DOMContentLoaded', initChart);
      }
    })();

Pavlohrad als logistiek en civiel knooppunt

Pavlohrad, gelegen in de oblast Dnipro, fungeert als een belangrijk logistiek knooppunt voor Centraal- en Oost-Oekraïne. Hoewel de stad buiten het directe bereik van de Russische artillerie ligt, bevindt zij zich ruim binnen het bereik van ballistische en kruisraketten. De nabijheid tot de frontlinies in de Donbas maakt de stad strategisch relevant, maar de aard van dit doelwit—een civiel winkelcentrum—toont aan dat de aanval niet gericht was op het verstoren van militaire logistiek, maar op het demoraliseren van de bevolking. De aanwezigheid van drie tieners onder de gewonden maakt de menselijke tol van deze tactiek pijnlijk zichtbaar. Het herinnert eraan dat in deze fase van het conflict geen enkele stad in Oekraïne zich werkelijk buiten de gevarenzone bevindt.

     Afstand Pavlohrad tot actieve frontlijn
     110 km

       Direct gevaar (0km)
       Artilleriebereik (40km)
       Raketbereik (300km+)

De tactiek van terreur in de diepte

De inzet van langeafstandsraketten tegen civiele infrastructuur diep achter de frontlinies is een beproefde Russische methode om de Oekraïense luchtverdediging te overbelasten en de maatschappelijke veerkracht te breken. Door doelen te kiezen die geen enkele militaire functie hebben, zoals winkelcentra, markten en woonwijken, wordt een constante staat van angst gecreëerd. Analisten wijzen erop dat dergelijke aanvallen vaak samenvallen met strategische verschuivingen aan het front, waarbij Rusland probeert de aandacht af te leiden of de Oekraïense logistieke achterhoede onder druk te zetten. De precisie van de gebruikte wapens sluit een navigatiefout vrijwel uit, wat de conclusie rechtvaardigt dat de aanwezigheid van honderden burgers op het moment van de inslag een ingecalculeerd onderdeel van de operatie was.

   Chronologie van de aanval

     1. Lancering
     2. Detectie
     3. Inslag
     4. Redding

         Lanceerplatform (RU)
         Ballistische raket gelanceerd
         Afgevuurd vanuit de grensregio richting Dnipro-oblast.

         Luchtalarm geactiveerd
         Korte reactietijd voor burgers in Pavlohrad.

         Winkelcentrum
         Directe inslag overdag
         Hoge concentratie burgers aanwezig.

         Hulpdiensten rukken uit
         67 gewonden geëvacueerd, waaronder 3 tieners.

     ◀ Vorige
     Play ▶
     Volgende ▶

    let currentStep = 0;
    let playInterval = null;

    function showMechStep(step) {
      currentStep = step;
      const steps = document.querySelectorAll('#viz-aanval-mechanisme .mech-slide');
      const buttons = document.querySelectorAll('#viz-aanval-mechanisme .mech-btn');

      steps.forEach((s, idx) => {
        s.style.display = idx === step ? 'block' : 'none';
      });
      buttons.forEach((b, idx) => {
        if (idx === step) {
          b.style.backgroundColor = '#3b82f6';
          b.style.color = 'white';
        } else {
          b.style.backgroundColor = '#e5e7eb';
          b.style.color = '#374151';
        }
      });
    }

    function nextMechStep() {
      const steps = document.querySelectorAll('#viz-aanval-mechanisme .mech-slide');
      currentStep = (currentStep + 1) % steps.length;
      showMechStep(currentStep);
    }

    function prevMechStep() {
      const steps = document.querySelectorAll('#viz-aanval-mechanisme .mech-slide');
      currentStep = (currentStep - 1 + steps.length) % steps.length;
      showMechStep(currentStep);
    }

    function playMech() {
      const btn = document.getElementById('play-btn');
      if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
        btn.textContent = 'Play ▶';
        btn.style.backgroundColor = '#10b981';
      } else {
        btn.textContent = 'Pause ❚❚';
        btn.style.backgroundColor = '#ef4444';
        playInterval = setInterval(nextMechStep, 2500);
      }
    }

Conclusie

De aanval op het winkelcentrum in Pavlohrad, met vijf doden en 67 gewonden tot gevolg, bevestigt opnieuw de meedogenloze realiteit van de Russische luchtoorlog. Door een civiele menigte overdag tot doelwit te maken, wordt de grens van het internationaal humanitair recht doelbewust overschreden. Pavlohrad mag dan ver van de directe loopgravenoorlog liggen, de inslag bewijst dat de reikwijdte van de Russische terreur onverminderd groot blijft en dat de burgerbevolking de zwaarste prijs betaalt.

 Bronnen: https://nos.nl/l/2630511
