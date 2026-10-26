---
titel: "Tien jaar oud CNN verslaat frontier-LLM's bij diagnose van huidkanker"
url: https://lynchlab.net/llm-skin-cancer
bron: aitech
kind: aitech
gegenereerd: 2026-10-26T05:53:51
---

Fijngetunede CNN uit 2015 stelt 62% van 200 huidlaesies goed; frontier-LLM's 42%.

Gespecialiseerde training op 68.011 huidbeelden verslaat algemene kennis bij afgebakende beeldtaak.

LLM's stuurden een kwaadaardige laesie als onschuldig naar huis: veiligheidsrisico.

Voor medische inzet telt de smalle specialist, niet de breedste generalist.

Een oud netwerk tegen de nieuwste modellen

Het Lynch Lab legde twee van de krachtigste AI-modellen van oktober 2026, GPT-6 Astra en Claude Fable 5.1, tweehonderd huidafwijkingen voor. Elke laesie kwam uit MILK10k, een openbare dataset die in 2025 via de International Skin Imaging Collaboration verscheen, en was tweemaal gefotografeerd: een klinische close-up en een dermoscopisch beeld door de verlichte loep van de dermatoloog. Alle laesies waren met een biopt bevestigd, ook de goedaardige, wat de set lastig maakt: een moedervlek die iemand liet wegsnijden, had een arts al ongerust gemaakt. Tegenover de taalmodellen stond Inception v3, een convolutioneel neuraal netwerk dat Google in 2015 publiceerde. Dat noemde in 125 gevallen (62 procent) de juiste diagnose uit zes mogelijkheden; de twee frontier-modellen kwamen op 84 en 85 (42 procent). Het stuk was zondag een van de best gelezen op Hacker News.

Model

Goed

Score

CNN

125

62%

Frontier-LLM (beste)

85

42%

Frontier-LLM (andere)

84

42%

Aantal juiste diagnoses van 200 laesies (Lynch Lab).

Waarom de specialist wint

Het verschil is geen raadsel. Een taalmodel heeft beeldbegrip als bijproduct van een training die vooral om tekst draait; het heeft ongetwijfeld dermatologieboeken gelezen, maar weinig gelabelde dermoscopiebeelden gezien. De CNN deed niets anders dan die beelden leren onderscheiden. Opvallend is hoe weinig daarvoor nodig was: een architectuur van tien jaar oud, ongeveer twintig minuten rekenen op één GPU. De auteur koos bewust níét voor de nieuwste stand van de techniek, wat de uitkomst scherper maakt: een specialistisch model dat zo eenvoudig te bouwen is, zet de vloer al twintig procentpunt hoger. Tegelijk laten de voorbeeldcasussen zien dat geen van de drie onfeilbaar is. Bij een dun, weinig gepigmenteerd melanoom zat GPT-6 Astra er met 95 procent zekerheid naast, terwijl Claude Fable 5.1 en de CNN goed zaten; bij een seborroïsche keratose op het been hadden alle drie het mis. De studie is bovendien klein en door één lab uitgevoerd.

Een tien jaar oud netwerk, ongeveer twintig minuten bijgetraind, versloeg beide frontier-modellen in het herkennen van huidkanker.

Wat dit betekent voor zorg en markt

De uitkomst raakt aan een bredere spanning in de AI-sector. Terwijl OpenAI en Anthropic elkaar in een prijzenoorlog bestoken met kortingen tot 90 procent en Anthropic zelf adviseert om zwermen subagents te vervangen door één capabele agent, suggereert dit onderzoek dat 'één model voor alles' in sommige domeinen een vergissing is. Voor ziekenhuizen en toezichthouders is dat relevant: medische hulpmiddelen worden in Europa beoordeeld op een gedefinieerd doel, en een smal, gevalideerd model past daar beter in dan een algemeen taalmodel waarvan het gedrag per versie verandert. Het grootste risico zit niet in de gemiddelde score maar in de valse geruststelling: een LLM die zelfverzekerd zegt dat een kwaadaardige plek onschuldig is, terwijl patiënten zulke chatbots steeds vaker zelf raadplegen.

Conclusie

Dit is geen bewijs dat taalmodellen nutteloos zijn in de geneeskunde, wel dat hun brede kunnen geen vervanging is voor gerichte validatie. De les voor wie AI in de zorg wil inzetten is nuchter: bepaal de taak, kies of bouw het model dat daarop getraind en getoetst is, en wantrouw zelfverzekerde antwoorden van een generalist. Dat een goedkope specialist van tien jaar oud de duurste modellen van dit moment verslaat, zou de discussie over 'algemene intelligentie' in de kliniek moeten temperen.

▶ YouTube

CNN vs frontier LLMs: old model wins skin cancer test

Bronnen:

 

lynchlab.net ↗
