---
titel: "Preprint uit OpenAI-repo: exponent van matrixvermenigvuldiging is 9/4"
url: https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
bron: tech
kind: tech
gegenereerd: 2026-11-25T05:36:40
---

Een preprint in OpenAI's math-repo claimt dat de exponent precies 9/4 is: Θ(n^2,25).

De beste bekende bovengrens lag rond 2,37; de naïeve methode is n³.

Op Hacker News volgden 331 punten en 150 reacties, maar geen bevestiging.

Een scherpe ondergrens van 2,25 zou ook een nieuwe theoretische muur betekenen.

Een claim in een repository

In de math-repository van OpenAI op GitHub verscheen een preprint met de stelling dat de exponent van matrixvermenigvuldiging precies 9/4 is: dat het product van twee n×n-matrices in Θ(n^2,25) tijd kan. Op Hacker News kreeg het stuk 331 punten en 150 reacties. Het bronmateriaal bij dit bericht is dun: er zijn geen gevestigde publicaties bij gevonden, dus alles hieronder is context, geen beoordeling van het bewijs. Die context is wel zwaarwegend. De schoolmethode kost n³ vermenigvuldigingen. Sinds Strassens algoritme uit 1969 is de exponent in kleine stappen gedaald, tot een bovengrens rond 2,37 die de laatste jaren met steeds kleinere winst werd aangescherpt. Een exponent van 2,25 zou een sprong zijn van een andere orde dan de decimale vooruitgang van de afgelopen decennia.

Waarom 'precies' zo opvallend is

Het woord Θ maakt de claim ambitieus. Tot nu toe gaat het veld om bovengrenzen: er zijn algoritmen die het sneller kunnen dan n³, en er is een triviale ondergrens van n², omdat je alle invoer moet lezen. De exacte waarde van de exponent, meestal ω genoemd, is een open vraag. Een bewijs dat ω precies 9/4 is, vereist dus twee dingen: een algoritme dat 2,25 haalt, en een ondergrensbewijs dat niet verder kan. Dat laatste is in de complexiteitstheorie notoir moeilijk. Ondergrenzen voor concrete problemen zijn zeldzaam, en scherpe ondergrenzen bijna ongehoord. Dat scepsis hier de logische eerste reactie is, ligt niet aan de bron maar aan de moeilijkheid van de stelling. Dat de repository van OpenAI komt, vertelt iets over de herkomst, niet over de juistheid.

Verband met de AI-bewijzenstroom

Het bericht past in een patroon dat dezelfde dag zichtbaar is. Anthropic-onderzoeker Levent Alpöge trok delen van zijn aankondiging rond de Riemann-hypothese in, maar houdt vast aan de wiskunde. Latent Space meldt dat beide labs recent bewijzen voor VP ≠ VNP posten, zonder model of aankondiging. En Gemini 4 Neon, MCP-uitbreidingen en OpenAI's eiwitontwerp laten zien hoe snel de modellen zich ontwikkelen. De vraag is niet of AI wiskundig kan meedenken, maar hoe de gemeenschap resultaten controleert die sneller verschijnen dan ze gelezen worden. Formele verificatie, zoals in Lean, helpt, mits de stelling correct is vastgelegd. Voor een algoritmeclaim als deze zou een implementatie die daadwerkelijk sneller rekent het overtuigendste bewijs zijn.

Conclusie

Behandel 9/4 voorlopig als hypothese. De belangstelling op Hacker News toont nieuwsgierigheid, geen verificatie. Als het klopt, herschrijft het een hoofdstuk uit de complexiteitstheorie en raakt het alles wat op matrixrekenen draait, van machine learning tot grafische berekeningen. Als het niet klopt, is het opnieuw een les over de afstand tussen een repository en een bewijs.

▶ YouTube

Exactly Two and a Quarter? OpenAI Claims the Matrix Multiplication Exponent Is 9/4
