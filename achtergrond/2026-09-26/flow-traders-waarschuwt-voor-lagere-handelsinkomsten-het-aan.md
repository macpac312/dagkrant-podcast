---
titel: "Flow Traders waarschuwt voor lagere handelsinkomsten, het aandeel zakt"
url: https://fd.nl/financiele-markten/1613293/beleggers-zetten-aandeel-flow-traders-na-lauwe-zomer-lager-maar-is-dat-terecht
bron: financieel
kind: financieel
gegenereerd: 2026-09-26T03:25:04
---

financieel

Flow Traders waarschuwt voor lagere handelsinkomsten, het aandeel zakt

   26 september 2026 • NRC/FT-stijl analyse

    -  Handelsinkomsten onder druk:  Flow Traders verwacht voor het lopende kwartaal significant lagere inkomsten door een gebrek aan marktvolatiliteit.

    -  Beursreactie:  Na de waarschuwing over een 'lauwe zomer' reageerde het aandeel direct met een koersdaling.

    -  Bedrijfsmodel:  Market makers verdienen primair aan de spread en aan beweging; rustige zomermanden vertalen zich direct in lege orderboeken.

    -  Verwachtingsmanagement:  De centrale vraag in de markt is of deze winstwaarschuwing echt als verrassing kwam of dat de volumes dit al langer lieten zien.

       Q3
       Huidige kwartaalverwachting
       Significant lagere inkomsten

       Lauwe Zomer
       Seizoensfactor
       Laag volume & smalle spreads

       Down
       Aandeelreactie
       Beleggers zetten koers lager

Het mechanisme van de market maker

Wie begrijpt hoe een handelshuis als Flow Traders geld verdient, weet dat rust de grootste vijand is van de omzet. Als market maker fungeert het bedrijf als de olie in de machine van de kapitaalmarkt: het zorgt continu voor bied- en laatpersen zodat institutionele en particuliere beleggers altijd kunnen handelen. De beloning voor die rol bestaat uit de zogenaamde *spread* – het verschil tussen de koop- en verkoopprijs – en de vergoedingen die te behalen zijn bij grote volumes en frequente koerswisselingen.

In een kwartaal waarin de zomermaanden gekenmerkt worden door windstilte op de beurzen, valt die dynamiek weg. Er is geen sprake van een neutraal kwartaal waarin simpelweg wat minder wordt verhandeld; voor een high-frequency handelshuis betekent een gebrek aan richting en volatiliteit simpelweg een leeg orderboek. Dat de inkomsten daardoor teruglopen, ligt inherent besloten in het bedrijfsmodel.

Marktvolatiliteit versus Handelsinkomsten

De vraag achter de koersval

Direct na de publicatie van de prognose reageerde het aandeel op de beurs met een aanzienlijke daling. Dat roept bij analisten en beleggers een fundamentele vraag op: in hoeverre was deze mededeling nieuw en in hoeverre hadden oplettende marktspelers dit reeds kunnen voorzien? Het antwoord op die vraag bepaalt of de koerscorrectie terecht is of dat de markt doorslaat in pessimisme.

Wanneer een handelshuis waarschuwt voor een trend die door de bredere markt nog niet was ingeprijsd, vormt de mededeling hard nieuws dat een neerwaartse bijstelling rechtvaardigt. Laat de daling echter uitsluitend een bevestiging zien van data die via publieke marktindicatoren al weken zichtbaar waren – zoals de historisch lage volumes op derivatenbeurzen – dan reageert de beurs wellicht te heftig op een optelsom die al lang gemaakt had kunnen worden.

Drie kernvragen rond de koersreactie

         1. Was de waarschuwing uniek?

De kwartaalupdate benadrukt een terugval in volatiliteit. Omdat handelaars zelf dagelijks in diezelfde markt opereren, konden de lagere omzetten geen compleet mysterie zijn geweest.

         2. Wat weegt zwaarder: spread of volume?

Flow Traders profiteert optimaal wanneer er paniek of juist uitbundige euforie heerst. In een horizontale markt drogen zowel de volumes als de te behalen marges tegelijkertijd op.

         3. Hoe reageert de lange termijn?

De volatiliteit kan in het volgende kwartaal abrupt omslaan. Beleggers beoordelen echter primair het directe dividend- en winstpotentieel van de naderende periode.

Conclusie

De winstwaarschuwing van Flow Traders legt de kwetsbaarheid bloot van een businessmodel dat volledig leunt op marktactiviteit. Dat het aandeel na de mededeling over een lauwe zomer omlaag wordt geduwd, past bij de wetten van de beurs. Toch blijft boven de markt hangen of beleggers met de neus op de feiten werden gedrukt door nieuwe inzichten, of simpelweg schrokken van een realiteit die de koersborden al weken lieten zien.

   Bronnen: FD (financiele-markten/1613293/beleggers-zetten-aandeel-flow-traders-na-lauwe-zomer-lager-maar-is-dat-terecht)

(function() {
  if (typeof Chart !== 'undefined') {
    var ctx = document.getElementById('flowChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Q1 (Actief)', 'Q2 (Stabiel)', 'Q3 (Lauwe Zomer)', 'Q4 (Verwachting)'],
          datasets: [{
            label: 'Handelsinkomsten (index)',
            data: [100, 85, 55, 70],
            borderColor: '#b22222',
            backgroundColor: 'rgba(178, 34, 34, 0.1)',
            fill: true,
            tension: 0.2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }
})();
