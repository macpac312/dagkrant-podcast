---
titel: "Thinking Machines brengt Inkling 2 Mini uit, draait al in 5,4 GB geheugen"
url: https://thinkingmachines.ai/news/inkling-2-mini/
bron: aitech
kind: aitech
gegenereerd: 2026-11-22T05:36:23
---

© thinkingmachines.ai

Thinking Machines bracht Inkling 2 Mini uit: 26,4 miljard parameters, 3,4 miljard actief per token.

De middenlagen draaien drie keer per token, waardoor het model langer redeneert met minder tokens.

Het lab noemt ~20 GB geheugen; de 5,4 GB-versie is een gekwantiseerde variant van een ontwikkelaar.

Meer loops gaven langere tijdhorizon zonder minder leesbare redenering, gemeten door het lab zelf.

Klein, snel en bijna overal te draaien

Thinking Machines, het AI-lab van Mira Murati, heeft Inkling 2 Mini uitgebracht, een model dat klein genoeg is voor een laptop. De aankondiging was een van de populairste berichten op Hacker News, en een ontwikkelaar publiceerde direct een gekwantiseerde versie die in 5,4 GB geheugen draait. Daar zit een nuance in. Het lab zelf noemt een totale geheugenvoetafdruk van circa 20 GB, wat past op consumentenlaptops en kleine desktop-AI-computers, en spreekt van 5,4 miljard gewichtsactivaties per token. Het getal 5,4 uit de kop lijkt dus bij een community-variant te horen, terwijl het lab met 5,4 miljard iets anders bedoelt. Het model is open weights en direct beschikbaar via Tinker. Onderzoekers namen het mee op een vlucht en lieten het offline op een MacBook Pro in enkele minuten een speelbare vluchtsimulator bouwen.

Waarom herhalen slimmer kan zijn dan langer schrijven

Het onderscheidende ontwerp is dat Inkling 2 Mini een looped transformer is: de middelste lagen draaien drie keer per token. Het model kan daardoor meer redeneren en met minder tokens tot het goede antwoord komen, vooral bij taken als agentic coding, waar de kwaliteit van de redenering telt. Daarmee verschuift rekenkracht van zichtbare tekst naar verborgen berekening. Dat staat haaks op de gangbare aanpak van lange ketens van gedachten. Het lab beweert dat het model alle open-weights-modellen met minder dan 100 miljard parameters verslaat op benchmarks als DeepSWE v1.1 en Vals Index v2.2, en dat het sneller draait dan vergelijkbaar presterende modellen. Het zijn claims van de maker zelf; onafhankelijke tests moeten blijken. Het model is verder in NVFP4 getraind en gedraaid, met de laatste vier lagen in MXFP8, wat de geheugenvoetafdruk klein houdt.

Maat

Waarde

Totaal parameters

26,4 mld

Actief per token

3,4 mld

Gewichtsactivaties per token

5,4 mld

Geheugenvoetafdruk (lab)

~20 GB

Opgegeven door Thinking Machines.

Looping laat het model langer redeneren zonder zijn redenering uit te schrijven, wat ertoe doet voor toezicht op wat het model doet.

Gevolgen en perspectieven

Het belangrijkste argument van Thinking Machines is monitorbaarheid. Als een model langer kan redeneren zonder zijn tussenstappen uit te schrijven, wordt de gedachtegang als controlemiddel minder zichtbaar. De onderzoekers hebben dat gemeten met een variabele-loop-variant, die ze naast het model vrijgeven: de no-CoT-tijdhorizon steeg van 16 seconden bij één doorloop naar 37 seconden bij drie, en de prestaties bleven toenemen tot tien loops, twee keer zoveel als in de training. De gedachtegang werd korter maar bleef leesbaar, en er was geen stijging in tests op agentisch sabotagegedrag. Dat is rustgevend, maar het is een eigen meting van het lab. Voor de markt past het in een bredere zoektocht naar efficiëntie: Nvidia-onderzoekers noemen gigantische contextvensters een doodlopende weg en OpenAI schaaft aan prompts tegen te korte antwoorden. En terwijl delen van Silicon Valley wegdoemen in AI-doemdenken, levert dit werk een nuchtere, meetbare bijdrage aan de vraag hoe je modellen controleerbaar houdt.

Conclusie

Inkling 2 Mini is interessant omdat het laat zien dat slimmer rekenen een alternatief is voor groter worden. Een model dat op een laptop draait en toch aan de top van zijn klasse staat, verlaagt de drempel voor lokaal gebruik, privacy en onderzoek. Of de belofte standhoudt, hangt af van onafhankelijke benchmarks en van de vraag of de leesbaarheid van de redenering ook bij tien loops overeind blijft. Tot die tijd is het vooral een sterke, open uitgave met een eerlijke onderzoeksagenda.

▶ YouTube

Hoe installeer je het Thinking Machines Inkling 2 Mini AI-model op een laptop?

Bronnen:

 

thinkingmachines.ai ↗
