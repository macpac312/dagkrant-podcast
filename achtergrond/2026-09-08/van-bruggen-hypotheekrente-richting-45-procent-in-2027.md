---
titel: "Van Bruggen: hypotheekrente richting 4,5 procent in 2027"
url: https://infinance.nl/artikel/van-bruggen-verwacht-hypotheekrente-richting-45-procent-in-2027/
bron: huizenmarkt
kind: huizenmarkt
gegenereerd: 2026-09-08T03:28:50
---

-  Renteverschuiving:  Van Bruggen Adviesgroep verwacht dat de tienjaars vaste hypotheekrente met NHG oploopt richting circa 4,5 procent in 2027.

  -  Structurele kapitaalkosten:  Aanhoudende overheidstekorten in westerse economieën en defensie-investeringen houden de kapitaalmarktrentes langdurig hoger.

  -  Woningmarkteffect:  Een hogere hypotheekrente drukt direct op de maximale leencapaciteit van huishoudens, terwijl woningtekorten de prijsval dempen.

  -  Keuzestress bij oversluiters:  Wachten op verdere renteverlagingen van centrale banken blijkt riskant voor langere rentevastperiodes.

       3,7%
       Gemiddelde 10 jr NHG nu (2024–2025)
       Laagste peil na de inflatiepiek

       4,5%
       Geprojecteerd niveau 2027
       +80 basispunten structurele opslag

       -7,8%
       Daling leencapaciteit modaal
       Bij stijging van 3,7% naar 4,5%

       2,6%
       Kapitaalmarktrente (10 jr staatslening)
       Anker voor bancaire fundingkosten

Het afscheid van het gratis-geld-paradigma

De aanname dat de hypotheekrentes na de inflationaire schok van 2022–2023 geleidelijk zouden terugkeren naar de historische minima van rond de 1,5 procent, wordt door financieel intermediairs definitief terzijde geschoven. In een recente marktprojectie schetst Van Bruggen Adviesgroep een scenario waarin de rente voor tien jaar vast met Nationale Hypotheek Garantie (NHG) doorgroeit naar 4,5 procent tegen 2027. Waar woningkopers de afgelopen maanden hoopten op verdere versoepelingen door de Europese Centrale Bank, laat de werkelijkheid op de kapitaalmarkten een hardnekkiger evenwicht zien.

De rente op de kapitaalmarkt — met name het rendement op tienjarige Nederlandse en Duitse staatsobligaties — vormt het fundament onder de bancaire hypotheekopslagen. Centrale banken verlagen weliswaar de beleidsrente om de economische activiteit te ondersteunen, maar die korte rente stuurt vooral variabele kredieten. Voor de tien- en twintigjaarsrentes kijken institutionele beleggers naar heel andere variabelen: structurele inflatiedruk door deglobalisering, demografische vergrijzing en torenhoge overheidsuitgaven voor verduurzaming en defensie.

    (function(){
      const ctx = document.getElementById('hypotheekRenteTrend').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2021', '2022', '2023', '2024', '2025', '2026 (raming)', '2027 (prognose)'],
          datasets: [
            {
              label: '10 jr vast NHG (gemiddeld %)',
              data: [1.3, 3.9, 4.2, 3.8, 3.7, 4.1, 4.5],
              borderColor: '#0f2942',
              backgroundColor: 'rgba(15, 41, 66, 0.08)',
              fill: true,
              tension: 0.3,
              pointRadius: 4,
              pointBackgroundColor: '#0f2942'
            },
            {
              label: '10 jr Nederlandse staatsrente (%)',
              data: [-0.3, 1.8, 2.9, 2.6, 2.5, 2.8, 3.1],
              borderColor: '#b23b3b',
              borderDash: [5, 5],
              tension: 0.3,
              fill: false,
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { mode: 'index', intersect: false }
          },
          scales: {
            y: {
              min: -1,
              max: 5.5,
              ticks: { callback: v => v + '%' }
            }
          }
        }
      });
    })();

De transmissieketen van kapitaalmarkt naar hypotheekakte

Een hypotheekakte is geen geïsoleerd consumentenproduct, maar de sluis waardoor internationaal spaargeld via pensioenfondsen en banken de woningmarkt instroomt. Het pad naar 4,5 procent ontstaat doordat de risicopremie op langlopende leningen wereldwijd omhoog is bijgesteld. Wanneer banken hun langlopende leningen herfinancieren via covered bonds of het aantrekken van spaartegoeden, betalen zij een premie bovenop de risicovrije rente.

         1. Staatsleningen
         2. Bancaire Funding
         3. Risico & Marge
         4. Klanttarief

         ◀
         ▶
         ▶▶

           Staatsuitgiftes
           Oplopende overheidsschulden
           en obligatieveilingen

           Benchmark
           ~3,0%

           Covered Bonds
           Plafond voor hypotheekobligaties
           Opslag +40-60 bps

           Totale Fundingbasis
           3,50% à 3,60%

             Operationele kosten
             +30 bps

             Kapitaalbuffer & Risico
             +40 bps

             Winstmarge verstrekker
             +20 à 30 bps

           Consumententarief 10 Jaar Vast (2027)
           4,50%
           Bij hogere schuld-marktwaardeverhouding (zonder NHG): tot 4,95%

    (function(){
      const container = document.getElementById('mechFundingKeten');
      if(!container) return;
      const pills = container.querySelectorAll('.ns-viz-mech-pill');
      const slides = container.querySelectorAll('.ns-viz-mech-slide');
      const prev = document.getElementById('mechPrev');
      const next = document.getElementById('mechNext');
      const play = document.getElementById('mechPlay');
      let cur = 0;
      let timer = null;
      function setPhase(i){
        cur = (i + slides.length) % slides.length;
        pills.forEach((p, idx) => p.classList.toggle('is-active', idx === cur));
        slides.forEach((s, idx) => s.classList.toggle('is-active', idx === cur));
      }
      pills.forEach(p => p.addEventListener('click', () => { setPhase(parseInt(p.dataset.phase,10)); clearInterval(timer); }));
      if(prev) prev.addEventListener('click', () => { setPhase(cur - 1); clearInterval(timer); });
      if(next) next.addEventListener('click', () => { setPhase(cur + 1); clearInterval(timer); });
      if(play) play.addEventListener('click', () => {
        if(timer){ clearInterval(timer); timer = null; play.textContent = '▶'; }
        else {
          play.textContent = '❚❚';
          timer = setInterval(() => setPhase(cur + 1), 2400);
        }
      });
    })();

Macro-economische gevolgen voor huizenkoper en doorstromer

De verschuiving naar 4,5 procent heeft ingrijpende implicaties voor de financierbaarheid van woningen. Volgens de leennormen van het Nibud verlaagt elke procentpunt renteverhoging de leencapaciteit van een modaal tweeverdienershuishouden met zo'n 25.000 tot 30.000 euro. In een evenwichtige markt zou een dergelijke daling leiden tot afkoeling van de huizenprijzen.

De Nederlandse situatie wordt echter bemoeilijkt door een hardnekkig aanbodtekort. Omdat de bouwproductie door stikstofbeperkingen, stijgende bouwkosten en trage vergunningverlening achterblijft, leidt een hogere rente niet automatisch tot dalende huizenprijzen, maar veeleer tot grotere onevenwichtigheden. Kopers besteden noodgedwongen een groter deel van hun besteedbaar inkomen aan woonlasten, of worden gedwongen concessies te doen in omvang of verduurzamingspotentieel van hun toekomstige woning.

         Gevolgen voor de maximale leencapaciteit
         ▾

        Bij een hypotheekrente van 4,5% stijgt het aandeel van rentelasten binnen de annuïteit aanzienlijk. Hierdoor daalt de aflossingscomponent in de eerste jaren, terwijl toetsnormen van geldverstrekkers restrictiever uitpakken voor hetzelfde bruto jaarinkomen.

         Het einde van de lage rentevaste contracten
         ▾

        Tussen 2026 en 2030 loopt voor honderdduizenden huishoudens hun tienjaars contract af dat in 2016–2018 werd afgesloten rond de 1,7% tot 2,2%. Zij worden geconfronteerd met een maandelijks bruto rente-effect dat oploopt met honderden euro's.

         Bufferwerking van de NHG-grens
         ▾

        Door de jaarlijkse verhoging van de NHG-kostengrens kunnen meer kopers een beschermingsopslag benutten, maar het verschil tussen toptarief (zonder NHG) en NHG blijft schommelen tussen de 35 en 55 basispunten.

    (function(){
      const container = document.getElementById('conceptsHypotheek');
      if(!container) return;
      const items = container.querySelectorAll('.ns-viz-concept-item');
      items.forEach(item => {
        const header = item.querySelector('.ns-viz-concept-header');
        header.addEventListener('click', () => {
          const isOpen = item.classList.contains('is-open');
          items.forEach(i => i.classList.remove('is-open'));
          if(!isOpen) item.classList.add('is-open');
        });
      });
    })();

Conclusie

De verwachting van Van Bruggen dat de hypotheekrente in 2027 doorstoot richting 4,5 procent markeert een nuchtere afrekening met de hoop op snelle rentedalingen. Wie nu een hypotheek afsluit of oversluit, tekent niet tegen een tijdelijke oprisping, maar conformeert zich aan een nieuw monetair regime waarin soevereine overheden zwaar concurreren om schaars mondiaal kapitaal. De huizenkoper moet rekening houden met een structureel hogere financieringslast die de komende jaren de norm zal blijven.

  Bronnen: Infinance (Van Bruggen Adviesgroep projectie hypotheekrente 2027), DNB rente-statistieken, Nibud financieringsnormen 2024–2026.
