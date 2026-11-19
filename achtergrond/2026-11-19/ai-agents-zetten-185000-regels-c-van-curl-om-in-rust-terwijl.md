---
titel: "AI-agents zetten 185.000 regels C van curl om in Rust, terwijl het project gewoon doordraait"
url: https://simonwillison.net/2026/Nov/18/daniel-stenberg/
bron: aitech
kind: aitech
gegenereerd: 2026-11-19T05:36:54
---

AI-agents zetten 185.000 regels C van curl om in 340.000 regels Rust.

In dezelfde ruim drie weken voegde het echte project 300+ commits en 200+ bugfixes toe.

Stenberg vraagt of de klonen het tempo bij kunnen houden.

Regels code zeggen weinig over onderhoud, bugfixes en vertrouwen.

Een herschrijving in drie weken

Curl-maker Daniel Stenberg schrijft, geciteerd door Simon Willison, dat AI-agents 185.000 regels C-code van curl hebben omgezet in 340.000 regels Rust; die telling deed hij zelf. In dezelfde ruim drie weken voegde het echte curl-project meer dan 300 commits samen, waaronder ruim 200 bugfixes. Ook werden enkele kwetsbaarheden verholpen. Zijn punt is niet dat de herschrijving mislukt is, maar dat ze stilstaat: zodra de omzetting klaar is, begint een nieuw project dat het verloop van het origineel moet bijhouden. Zijn retorische vraag, of de klonen dat kunnen volhouden, geeft de kern weer.

Waarom het tempo ertoe doet

Een software-project als curl, dat overal draait, is geen momentopname maar een stroom van correcties. Elke bugfix is kennis over randgevallen die de nieuwe code niet automatisch heeft. Dat de Rust-versie bijna twee keer zoveel regels telt (340.000 tegen 185.000, afgeleid), zegt hierbij weinig: meer regels is niet beter, en een geautomatiseerde vertaling kan veel standaardcode toevoegen. Waar het om gaat is of de kopie dezelfde bugfixes, beveiligingspatches en gedragsdetails blijft overnemen. Stenberg suggereert van niet vanzelf: zijn team repareerde in drie weken honderden dingen die de herschrijvingen missen.

We actually improved curl during these a little more than three weeks. A little over 200 bugfixes actually.

AI-codeertempo en onderhoud

Het verhaal past in de lopende discussie over AI-codeeragents. Microsoft pakt tegelijk uit met goedkopere codemodellen, Google brengt een nieuw Gemini-model voor softwareontwikkeling en OpenAI verlaagt de prijzen van GPT-6.2 Astra. Als code genereren zo goedkoop wordt, verschuift de schaarste naar wat niet te kopiëren is: jaren aan bugrapporten, testgevallen en de vertrouwensrelatie van een onderhouder met zijn gebruikers. Meningen verschillen: voorstanders van herschrijven in Rust wijzen op geheugenveiligheid, terwijl Stenberg de nadruk legt op doorlopend onderhoud (de bron geeft alleen zijn standpunt).

Conclusie

De curl-vergelijking is een nuttige tegenwicht voor AI-hype. Een code-omzetting van drie weken is indrukwekkend, maar een project is meer dan zijn code op een dag. De vraag is niet of agents kunnen vertalen, maar of iemand bereid is jarenlang dezelfde honderden correcties bij te houden. Tot dat bewezen is, wint het project dat gewoon doordraait.

▶ YouTube

Hoe word je in 2026 een AI-agentontwikkelaar: een stappenplan

Bronnen:

 

simonwillison.net ↗
