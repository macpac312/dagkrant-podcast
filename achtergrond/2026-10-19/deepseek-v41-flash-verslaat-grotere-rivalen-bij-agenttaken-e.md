---
titel: "Deepseek V4.1 Flash verslaat grotere rivalen bij agenttaken en snijdt opnieuw in de kosten"
url: https://the-decoder.com/deepseek-v4-1-flash-1017-beats-larger-rivals-in-agentic-tasks-while-once-again-massively-cutting-per-task-costs/
bron: aitech
kind: aitech
gegenereerd: 2026-10-19T04:44:42
---

© the-decoder.com

Deepseek's V4.1-Flash-1017 scoort 77,0 procent op DeepSWE voor minder dan $0,20 per taak.

Kortere antwoorden en training met zelf-feedback (RLSF) drukken de kosten.

Grotere rivalen kosten in dezelfde grafiek $2 tot ruim $10 per taak.

Onafhankelijke benchmarks ontbreken nog; de cijfers komen van Deepseek zelf.

Het Chinese antwoord op de kostenvraag

Sinds Deepseek begin 2025 de AI-wereld opschudde met een model dat voor een fractie van de Amerikaanse kosten zou zijn getraind, is goedkoop presteren het handelsmerk van het Chinese bedrijf. Met Deepseek-V4.1-Flash-1017 zet het die lijn voort. Het model is beschikbaar via website, app en API, en de gewichten staan als open source op Hugging Face en ModelScope. Volgens The Decoder scoort het beter dan de directe voorganger, rondt het taken sneller af en geeft het kortere antwoorden; Deepseek spreekt van een Pareto-verbetering, waarbij prestaties stijgen zonder dat de kosten toenemen. In de eigen benchmarks verslaat het kleinere Flash-model ook grotere concurrenten zoals Claude Opus 5, GPT 5.6-Sol, Kimi K3 en GLM 5.3 in verschillende categorieën voor programmeren en AI-agenten. Daarnaast stelt Deepseek zijn interne zoekmachine open via nieuwe Search- en Fetch-API's, voor $0,75 per 1000 calls.

Waarom korter goedkoper is

De kostengrafiek voor DeepSWE laat zien waar de winst zit. V4.1-Flash-1017 haalt een topscore van 77,0 procent voor gemiddeld net geen $0,20 per taak; in de lage instelling haalt het nog altijd 72 procent voor ongeveer $0,10. De voorganger kwam op 74,2 procent voor zo'n $0,50 per run. Rivaliserende modellen als GPT-6 Astra, Gemini 3.8 Flash en Claude Opus 5 belanden in dezelfde grafiek tussen $2 en ruim $10 per taak, zonder de nauwkeurigheid van het kleine Deepseek-model te evenaren. Bij agenttaken telt elke uitgevoerde stap mee; een model dat beknopter redeneert en minder tokens produceert, wordt per taak dus fors goedkoper. Daarachter zit een trainingskeuze: reinforcement learning met zelf-feedback, waarmee het model complete softwareprojecten leert bouwen zonder menselijke beoordelaars.

Model (DeepSWE)

Score

$/taak

V4.1-Flash-1017 top

77,0%

<0,20

V4.1-Flash-1017 laag

72%

~0,10

V4.1-Flash (voorganger)

74,2%

~0,50

Grote rivalen

lager

2 tot >10

Cijfers uit Deepseek's eigen kostengrafiek (The Decoder).

Onafhankelijke benchmarks zijn er nog niet, en benchmarks vertellen hoe dan ook maar de helft van het verhaal.

Benchmarks, prijzen en geopolitiek

De kanttekening is wezenlijk: alle cijfers komen van Deepseek zelf, en ontwikkelaars oordelen over codekwaliteit vaak heel anders dan benchmarks doen. Toch is de richting moeilijk te negeren. Als een open-weight model taken uitvoert voor een tiende of minder van de prijs van Amerikaanse topmodellen, verschuift de concurrentie van 'wie is het slimst' naar 'wie is het goedkoopst per opgelost probleem'. Dat raakt het verdienmodel van gesloten aanbieders, die hun hoge prijzen rechtvaardigen met voorsprong in kwaliteit. De nieuwe zoek-API vergroot de reikwijdte: agenten hebben actuele informatie nodig, en Deepseek biedt die nu als bouwsteen aan. Het model is bovendien afgestemd op omgevingen als Deepseek Harness, Tencent CodeBuddy en WorkBuddy, wat wijst op een eigen Chinees ecosysteem. Voor Europese bedrijven zijn open gewichten aantrekkelijk omdat ze lokaal kunnen draaien, maar de Chinese herkomst roept bij overheden en toezichthouders vragen op over afhankelijkheid en dataveiligheid.

Conclusie

Deepseek bewijst opnieuw dat efficiëntie een strategie is, geen bijzaak. Ook als onafhankelijke tests de eigen cijfers wat temperen, zet een prijsverschil van een factor tien de Amerikaanse aanbieders onder druk. Voor gebruikers is dat goed nieuws, voor de gesloten verdienmodellen niet. De echte vraag voor Europa is niet of dit model goed genoeg is, maar of het bereid is om zijn AI-infrastructuur op Chinese open gewichten te bouwen.

▶ YouTube

DeepSeek V4.1 Flash: De architectuur die cachekosten verplettert

Bronnen:

 

the-decoder.com ↗
