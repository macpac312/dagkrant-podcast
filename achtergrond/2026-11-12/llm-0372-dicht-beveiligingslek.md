---
titel: "llm 0.37.2 dicht beveiligingslek"
url: https://simonwillison.net/2026/Nov/11/llm/
bron: aitech
kind: aitech
gegenereerd: 2026-11-12T05:38:17
---

Simon Willison bracht llm 0.37.2 uit, die een beveiligingsprobleem in de OpenAI-compatibele modelconfiguratie dicht.

Daniel de Araujo meldde twee manieren waarop een OpenAI-sleutel naar een andere aanbieder kon lekken.

De problemen zitten in extra-openai-models.yaml en in de responses-modus.

Les: sleutels en configuratie vragen standaard veilig gedrag.

Een kleine release met grote les

Simon Willison, de maker van de populaire commandoregeltool LLM, bracht op 11 november 2026 versie 0.37.2 uit. De release dicht een beveiligingsprobleem dat Daniel de Araujo meldde en dat in twee meldingen is vastgelegd, GHSA-v9h7-jj4g-f862 en GHSA-r639-rr7r-x72w. Het gaat om het mechanisme waarmee LLM werkt met OpenAI-compatibele modellen van andere aanbieders: extra-openai-models.yaml, sinds 0.37 beheerd met het nieuwe commando llm openai endpoint add. Dat is op zich handig, want veel aanbieders bieden hun model aan via dezelfde API-vorm als OpenAI. Maar dat gemak heeft een prijs: de tool moet bij elk verzoek bepalen welke sleutel naar welke aanbieder gaat, en juist daar kan een gebruiker onbedoeld een sleutel naar een derde sturen.

Twee manieren waarop het misging

De Araujo meldde twee scenario's. In het eerste was de sleutel waarnaar api_key_name verwijst nooit opgeslagen; in dat geval kon LLM de geconfigureerde OpenAI-sleutel meesturen naar de andere aanbieder. In het tweede draaide een gebruiker een model met responses: true samen met de optie -o chat_completions 1. In beide gevallen belandt een gevoelige sleutel bij een partij waarvoor ze niet bedoeld was. Het zijn geen aanvallen van buiten maar configuratiefouten waar de tool niet tegen beschermde, en dat maakt ze verraderlijker: de gebruiker ziet niets gebeuren en merkt het pas aan misbruik van de sleutel. De schade hangt af van de aanbieder en het sleuteltype; een gelekte OpenAI-sleutel kan leiden tot kosten voor de eigenaar of toegang tot data via de account. Gebruikers die LLM met meerdere aanbieders gebruiken, doen er goed aan hun sleutels te controleren.

Breder patroon

Dit past in een reeks AI-beveiligingsverhalen deze week. Beveiligingsbedrijf Claroc vond dat 35.578 van de 37.571 live Grok Build-apps zonder inlog toegankelijk waren, omdat 'iedereen met de link' standaard aanstond. Ook daar is de oorzaak een onveilige standaardinstelling, geen geavanceerde aanval. Het gemeenschappelijke thema is dat AI-tooling razendsnel groeit en dat veilig gedrag als default vaak pas achteraf komt. Voor open-sourcemaker Willison is het een voorbeeld van verantwoord omgaan: snel melden, snel repareren, vermelden wie het meldde. Voor gebruikers is het een herinnering dat een commandoregeltool met API-sleutels dezelfde zorg verdient als een wachtwoordmanager. Bedrijven die LLM gebruiken in scripts of CI-omgevingen moeten sleutels beperken tot het minimum en laten verlopen.

Conclusie

Het lek is gedicht, maar de les blijft: wie sleutels beheert voor meerdere aanbieders, moet standaard weigeren in plaats van stilzwijgend terugvallen. Tools als LLM zijn bouwstenen in veel scripts; hun fouten reizen mee. Het is goed dat meldingen via een publiek proces lopen. Gebruikers moeten bijwerken en, bij twijfel, de sleutel vervangen.

▶ YouTube

llm 0.37.2 dicht beveiligingslek 2026

Bronnen:

 

simonwillison.net ↗
