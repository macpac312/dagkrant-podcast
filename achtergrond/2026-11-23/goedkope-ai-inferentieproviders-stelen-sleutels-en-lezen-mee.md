---
titel: "Goedkope AI-inferentieproviders stelen sleutels en lezen mee"
url: https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/
bron: aitech
kind: aitech
gegenereerd: 2026-11-23T05:33:26
---

© the-decoder.com

Dragos vond minstens drie gecompromitteerde AI-providers na twee miljoen nepverzoeken.

Aanvallers oogstten honderden AWS-sleutels; resellers lazen verzoeken simpelweg mee.

Privacybeloftes als Zero Data Retention werden vaak genegeerd, ook door grote Amerikaanse aanbieders.

OpenRouter verwijdert drie providers; vertrouwen in goedkope tussenschakels staat onder druk.

Een keten waar niemand kijkt

Wie vandaag een AI-model gebruikt, belandt vaak niet rechtstreeks bij OpenAI of Anthropic. Routers als OpenRouter bieden één API voor modellen van vele makers en sturen het verkeer naar een pool van providers, soms over meerdere schakels. Beveiligingsbedrijf Dragos wilde weten wat er onderweg met die verzoeken gebeurt. Van juli tot november 2026 stuurde het ongeveer twee miljoen verzoeken met nepgegevens: nepsleutels, geheime test-URL's en andere lokkertjes. De uitkomst is ontnuchterend. Minstens drie providers bleken gecompromitteerd en wisten dat zelf niet tot Dragos ze waarschuwde. In het grootste incident werden honderden AWS-sleutels geoogst, deels uit verzoeken die de provider al had afgewezen.

Goedkoop is een beveiligingsrisico

Het onderzoek laat twee verschillende lekken zien. Het eerste is klassiek: ingebroken systemen, waarna aanvallers sleutels testten, S3-opslag doorzochten en pogingen deden tot blijvende toegang. Het tweede is structureler. Op open marktplaatsen volstaat het om een model tegen de laagste prijs aan te bieden en logging aan te zetten; een kwetsbaarheid is niet nodig. Het verzoek komt vanzelf binnen. Privacybeloftes als Zero Data Retention bleken vaak dode letter. Dragos meldt dat een Chinees AI-lab de geheime test-URL's in meer dan de helft van de verzoeken opende, ook toen die via Amerikaanse providers liepen. Zelfs grote Amerikaanse aanbieders overtraden hun eigen beleid: één bleef een test-URL nog ruim twee maanden na één verzoek bezoeken.

Een model tegen de laagste prijs aanbieden en logging aanzetten volstond: een kwetsbaarheid was niet nodig om mee te lezen.

Wat dit betekent voor gebruikers

OpenRouter greep in: drie providers verwijderd, ZDR-goedkeuring voor 125 endpoints ingetrokken, deels uit voorzorg, en gebruikers van MiniMax-modellen kregen een waarschuwing dat derden mogelijk meelazen. Novita, Phala en Together publiceerden voorlopige beveiligingsrapporten, al hebben niet alle betrokkenen dat gedaan. Voor Europese bedrijven raakt dit direct aan de AVG: wie klantgegevens in een prompt stopt, kan niet uitsluiten dat die via een schakel buiten de EU worden gelezen. Tegelijk groeit het risico mee met het gebruik van AI-agents, die per taak meer sleutels en meer context doorsturen. Dat past bij de breder gevoelde zorg, zoals METR die verwoordt, dat de inzet van AI sneller gaat dan de controle erop.

Conclusie

De prijs per token is de zichtbare kostenpost; de verborgen post is vertrouwen. Wie sleutels of gevoelige data door een goedkope tussenschakel stuurt, betaalt in feite met die data. Praktisch betekent dit: sleutels met minimale rechten en korte levensduur, geen geheimen in prompts, en alleen providers met controleerbare afspraken. Routers moeten hun ketens transparant maken, anders blijft goedkoop synoniem met onveilig.

▶ YouTube

Goedkope AI-inferentieproviders stelen sleutels en lezen mee 2026

Bronnen:

 

the-decoder.com ↗
