---
titel: "Simon Willison bouwt datasette-charts met Claude"
url: https://simonwillison.net/2026/Nov/23/datasette-charts/
bron: aitech
kind: aitech
gegenereerd: 2026-11-24T05:33:39
---

© simonwillison.net

Simon Willison heeft datasette-charts uitgebracht, een plugin voor grafieken in Datasette.

Claude Fable 5.2 bouwde het eerste prototype, op zondag.

De grafieken aggregeren via SQL over alle rijen, niet alleen de huidige pagina.

Elke query geeft maximaal 5.000 rijen terug; het is nog een alpha.

Van prototype naar plugin

Simon Willison, bedenker van Datasette, heeft datasette-charts uitgebracht, een plugin om grafieken te maken in het open-source programma voor het verkennen van data. Het idee speelde al meer dan een jaar in zijn hoofd. Op zondag liet hij Claude Fable 5.2 een eerste prototype bouwen. Dat ging zo goed dat er een volwaardige plugin uit voortkwam, die je kunt proberen in Datasette Lite, de variant die in de browser draait. Het is opvallend hoe klein de stap tussen een gedachte en een werkend product is geworden: wat een jaar bleef liggen, kwam in een weekend in beweging zodra een AI-model de eerste versie kon schrijven.

De belangrijkste vernieuwing: alle rijen

De belangrijkste eigenschap is dat de grafieken alle rijen meenemen. Eerdere plugins, zoals datasette-vega, toonden alleen de huidige pagina met resultaten, doorgaans maximaal honderd rijen. De nieuwe plugin zet elke grafiek om in een SQL-query die over de hele resultatenset aggregeert, met GROUP BY, tijdsbuckets en window-functies. Elke query geeft maximaal 5.000 rijen terug, geschikt voor weergave. Voor het voorstellen van grafieken bij grotere tabellen gebruikt de plugin sampling, zodat niet de volledige set hoeft te worden geëvalueerd. Zo wordt de database zelf de rekenmotor, en niet de browser. Dat past bij Datasette, dat draait op SQLite en juist bekend is om de eenvoud van het publiceren van data.

Volgens Willison is dit het dichtst bij zijn droom dat Datasette data visualiseert met zo min mogelijk sturing van de gebruiker.

AI als bouwer, de mens als ontwerper

Willison noemt zijn release zelf een alpha, maar hij is er tevreden over. Dat de plugin uit een AI-prototype voortkwam, past in een bredere trend: modellen schrijven de eerste versie, ervaren ontwikkelaars sturen bij en bepalen de ontwerpkeuzes. Dat gebeurt op dezelfde dag dat OpenAI een nieuw standaardmodel in ChatGPT uitrolt en Z.ai een nieuw codeermodel lanceert. De rol van de mens verschuift naar het kiezen van heuristieken, het toetsen van aannames en het bepalen wat een goede grafiek is. Dat laatste is lastiger dan het klinkt: een suggestie moet bij de data passen en tegelijk begrijpelijk zijn.

Conclusie

Datasette-charts is minder interessant omdat een AI het prototype schreef, en meer omdat het een echt probleem oplost: grafieken die de volledige data weergeven in plaats van een steekproef van de eerste pagina. Het is een alpha, maar de richting klopt. Het laat zien dat de waarde van AI-ondersteunde ontwikkeling vooral zit in de tijd die tussen idee en bruikbaar prototype verdwijnt.

▶ YouTube

2026 in LLMs — Simon Willison

Bronnen:

 

simonwillison.net ↗
