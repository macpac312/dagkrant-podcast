---
titel: "Z.ai lanceert GLM-5.4 met 'loop transformer'-architectuur"
url: https://simonwillison.net/2026/Nov/23/glm-54/
bron: aitech
kind: aitech
gegenereerd: 2026-11-24T05:33:16
---

© simonwillison.net

Z.ai brengt GLM-5.4 uit, zijn eerste model met een looped transformer.

Gedeelde lagen draaien meerdere keren: dieper rekenen zonder meer parameters.

Thinking Machines Lab noemde dezelfde aanpak al op 20 november bij Inkling 2 Mini.

GLM-5.4 is voorlopig niet beschikbaar als open weights.

Eén blok lagen, meerdere rondes

Het Chinese AI-lab Z.ai heeft GLM-5.4 uitgebracht, het eerste model van het lab met een looped transformer-architectuur. In een standaard transformer draait elke laag één keer per forward pass. In een loop transformer draait een groep lagen met gedeelde gewichten meerdere iteraties, waarbij de verborgen toestanden van de vorige ronde worden verfijnd. Z.ai beschrijft dat als een dieper netwerk zonder dat het aantal parameters toeneemt. Het lab positioneert het model als stap naar “gegeneraliseerd coderen”. Op Hacker News kreeg de aankondiging ruim 1000 punten. Volgens Simon Willison, die het model uitprobeerde, is het nog niet als open weights beschikbaar en liep toegang via het Coding Plan-abonnement van Z.ai in plaats van de gewone API.

Waarom lussen? De ruil tussen geheugen en rekentijd

De gedachte is niet nieuw: het idee van het herhaald toepassen van dezelfde lagen kent academische voorlopers zoals de Universal Transformer uit 2018. Wat verandert, is de aanleiding. Het trainen van steeds grotere modellen botst op kosten en geheugen. Een loop transformer ruilt geheugen voor rekentijd: de gewichten blijven klein, maar de rekenkracht per token neemt toe. Voor taken als coderen, waar redeneerkwaliteit zwaarder weegt dan snelheid, kan dat lonen. Dat zowel Z.ai als Thinking Machines Lab binnen een week een looped model noemt, wijst op een trend, niet op toeval. Het raakt aan de discussie die OpenAI-hoofdwetenschapper Jakub Pachocki aanzwengelde met zijn pretraining-curve: vaardigheden verschijnen bij verrassend precieze drempels, en het is nog onduidelijk of extra denkrondes zo’n drempel kunnen verleggen.

Een loop transformer geeft een dieper netwerk zonder het aantal parameters te vergroten, aldus Z.ai.

Wat dit betekent voor de markt

Voorlopig is de claim vooral een belofte. Willison zag in zijn pelikaantest, een informele vergelijking van gegenereerde tekeningen, dat de GLM-versies 5.3 en 5.4 qua stijl dichter bij OpenAI en Anthropic liggen dan de eerdere generaties, die een eigen look hadden. Dat zegt niets over codeerkwaliteit, maar wel iets over convergentie: modellen worden steeds meer elkaars spiegelbeeld. Dat ook GPT-6.2 Sol de nieuwe standaard in ChatGPT wordt, met beeldbegrip dat in interne tests van 47,4% naar 71,7% stijgt, laat zien hoe snel de lat verschuift. Voor ontwikkelaars betekent de loop-architectuur vooral keuze: meer kwaliteit per token tegen hogere rekenkosten per token. De afwezigheid van open weights beperkt de controle door externe onderzoekers.

Conclusie

Looped transformers zijn een interessante ruil, maar nog geen bewezen doorbraak. Er zijn nog geen onafhankelijke benchmarks, het model is gesloten en de claim van “gegeneraliseerd coderen” komt van het lab zelf. Interessanter is de richting: de sector zoekt manieren om meer denkruimte te creëren zonder steeds grotere modellen. Wie die ruil als eerste goed beheerst, kan kosten drukken zonder kwaliteit te verliezen.

▶ YouTube

Maak kennis met GLM-5.4, Z.ai's eerste lustransformator voor gegeneraliseerde codering.

Bronnen:

 

simonwillison.net ↗
