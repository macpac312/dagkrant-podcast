---
titel: "Anthropic lanceert Claude Ship: agents die GitHub-pull-requests reviewen, repareren en goedkeuren"
url: https://www.techrepublic.com/article/news-anthropic-claude-ship-github-pull-requests/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-27T05:37:07
---

Claude Ship (23 november) bundelt drie agents die GitHub-pull-requests reviewen, repareren en goedkeuren.

Code Review is algemeen beschikbaar; PR Steward en Claude Approvals zijn in bèta.

Teams leggen vast wanneer Claude mag goedkeuren en wanneer een mens moet meekijken.

De knelpuntverschuiving: schrijven is goedkoop, beoordelen wordt de schaarse stap.

Wat er na het schrijven van code gebeurt

Code schrijven is vaak maar de helft van het werk, schrijft TechRepublic. Een pull request kan uren wachten op een review, op een gerepareerde test, een opgelost merge-conflict of een laatste goedkeuring. Op 23 november introduceerde Anthropic Claude Ship, een set van drie AI-agents die GitHub-pull-requests kunnen beoordelen, problemen aanpakken en wijzigingen goedkeuren onder regels die het ontwikkelteam vastlegt. De dienst is beschikbaar voor organisaties op de abonnementen Claude Team en Enterprise. De logica is dat de wachttijd rond een pull request het knelpunt is geworden nu het schrijven zelf door AI is versneld. Wie veel code genereert, krijgt een stroom wijzigingen die iemand moet controleren. Anthropic probeert het volgende deel van de keten te automatiseren: eerst de review, dan de follow-up en ten slotte het groene licht. Dat is minder spectaculair dan een agent die een app bouwt, maar waarschijnlijk waardevoller voor teams, omdat het precies de saaie, vertragende taken raakt.

Drie agents, drie verschillende bevoegdheden

Het opvallende ontwerp is de gestaffelde macht. Code Review zoekt problemen, maar keurt of blokkeert een merge niet zelf; de agents controleren hun eigen bevindingen en onderscheiden wat gerepareerd moet worden, wat een kleine suggestie is en welke bugs al bestonden voor de pull request. PR Steward repareert na een mislukte CI-check, een conflict of een reviewverzoek, en legt na elke push uit wat er is gewijzigd en hoe het terug te draaien is; het is bewust ontworpen om niet te approven of te mergen. Pas Claude Approvals kan goedkeuren, en alleen volgens regels die het team zelf schrijft. Elke stap scheidt dus vinden, repareren en beslissen, wat een vorm van functiescheiding is die ook bij menselijke teams gebruikelijk is. Dat maakt de agents beter controleerbaar dan een enkele alleskunner, en het geeft teams een handvat om autonomie stap voor stap uit te breiden.

Teams bepalen welke wijzigingen de agent mag goedkeuren en wanneer een mens moet meekijken.

Wat dit betekent voor teams en markt

Voor ontwikkelteams verschuift het werk van doorlopen naar beleid maken: welke repositories, welke risicoklassen, welke wijzigingen mogen zonder mens. Dat is een bestuurlijke vraag, geen technische. In dezelfde krant portretteert 36Kr het denken achter Claude Code: software wordt goedkoop te maken, smaak wordt schaars. Claude Ship past daarin, omdat beoordelen en kiezen de schaarse stappen worden. Het commerciële plaatje is tegelijk gevoelig: het aandeel van Anthropic zakte dinsdag onder de $83, een week na de grootste beursgang ooit, en beleggers zullen willen zien dat zakelijke producten als dit omzet opleveren. Daar staat tegenover dat medewerkers van OpenAI en Anthropic zeggen dat sommige modellen te krachtig zijn om vrij te geven. Een agent die code mag goedkeuren is een nuttige maar kwetsbare vertrouwensketen.

Conclusie

Claude Ship is een verstandige, bewust beperkte stap: eerst vinden, dan repareren, dan alleen goedkeuren binnen regels die mensen opstellen. Het risico zit niet in de techniek maar in gewenning. Zodra teams de drempel voor autonome goedkeuring verlagen omdat het zo goed werkt, schuift de menselijke controle op. Het beleid moet daarom regelmatig worden herzien en aan meetbare criteria worden gebonden.

▶ YouTube

Anthropic lanceert Claude Ship: agents die GitHub-pull-requests reviewen, repareren en goedkeuren 2026

Bronnen:

 

techrepublic.com ↗
