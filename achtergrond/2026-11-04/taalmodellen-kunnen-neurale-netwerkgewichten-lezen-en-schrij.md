---
titel: "Taalmodellen kunnen neurale netwerkgewichten lezen en schrijven"
url: https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/
bron: aitech
kind: aitech
gegenereerd: 2026-11-04T05:41:10
---

Paper toont dat GPT-6 Astra ruwe netwerkgewichten kan lezen, verklaren en herschrijven.

Door 0,016 procent van de gewichten te wijzigen steeg Qwens MATH-500-score van 7,9 naar 48,1 procent.

Simon Willison reproduceerde het lezen van gewichten met Qwen 3.8 27B op zijn laptop.

Critici vinden het paper misleidend: tooloos lezen en code-gestuurd bijsturen lopen door elkaar.

Van broncode naar machinecode

Het paper 'Sparks of Weight-Space Programming' van Rikiya Takehi, Jayden Teoh, Alex Zhang en Omar Khattab, door de auteurs zelf een blogpost genoemd, beschrijft een vaardigheid die tot voor kort als onmogelijk gold. Frontiermodellen, met name GPT-6 Astra, kunnen de ruwe gewichten van een neuraal netwerk lezen: een tekstbestand vol kommagetallen. Uit alleen die getallen kan Astra afleiden waarvoor een netwerk is getraind. Het schrijft ook zonder enige feedback uit een omgeving kleine spelnetwerken vanaf nul die beter spelen dan netwerken die met PPO honderd miljoen stappen zijn getraind. Latent Space plaatst het naast Andrej Karpathy's autoresearch van acht maanden geleden, waarin een slim model via experimenten op een rekencluster zelfstandig een ander model trainde. Het verschil: daar was een hele keten van PyTorch-code, rekenkracht en evaluaties nodig. Hier kijkt een model direct naar de 'machinecode' van een ander model.

Wat het wel en niet bewijst

De resultaten zijn opvallend, maar de lezing ervan is omstreden. Simon Willison wijst erop dat het paper twee vragen combineert die apart verdienen: wat kan een model met ruwe gewichten zonder tools of code, en hoe goed kan een model dat wél code mag draaien andere modellen verbeteren. spaCy-auteur Matthew Honnibal noemde het paper misleidend omdat het die twee door elkaar haalt. Sean Goedecke ontleedde het Qwen-voorbeeld en concludeerde dat Astra dezelfde stappen zette als een menselijke ML-onderzoeker zou doen. Ook Latent Space tempert: wat hier gebeurt is een vorm van mechanistische interpreteerbaarheid die in principe met de hand kan, en het zal voorlopig niet verder schalen dan eenvoudige spellen en beleidsnetwerken. Willisons reproductie met Qwen 3.8 27B op een laptop maakt het tegelijk tastbaar: dit is geen exclusief kunstje van één frontiermodel.

De wereld is volgens Latent Space van 0 naar 1 gegaan op een nieuwe vaardigheid voor recursieve zelfverbetering, die vanwege haar efficiëntie direct zal worden benut.

Gevolgen: veiligheid, controle en een nerveuze markt

De vondst valt in een bijzondere week. Latent Space spreekt van een verdiepende baisse in AI- en techaandelen, met een junk-rating voor obligaties van Anthropic, terwijl elders in deze krant te lezen is dat de computekosten van Anthropic sneller stijgen dan de omzet. Een techniek die modellen verbetert door een paar honderdsten van een procent van de gewichten te wijzigen, in plaats van met dure trainingsrondes, raakt precies aan die kostendruk. Tegelijk roept ze veiligheidsvragen op. Als een model gewichten kan lezen en herschrijven, kan het in principe ook verborgen gedrag inbouwen of opsporen. Dat maakt initiatieven als Anthropics FlashProve, dat cryptografisch moet bewijzen welk model een antwoord gaf, relevanter. Voor Europese toezichthouders, die onder de AI Act werken met modelkaarten en evaluaties, ontstaat een nieuwe vraag: wat is een model nog waard als zijn gewichten met een prompt te herschrijven zijn?

Conclusie

Dit is geen doorbraak naar zelfverbeterende superintelligentie, maar het is wel een kwalitatieve sprong. Dat taalmodellen gewichten als leesbare taal behandelen, verandert interpreteerbaarheid van handwerk in een prompt, en maakt modelaanpassing goedkoper en ondoorzichtiger tegelijk. De kritiek van Honnibal en Goedecke is terecht en nodig: de claims moeten scherper gescheiden worden. Maar wie het afdoet als hype, mist dat een laptopmodel het al kan. De vraag is niet meer óf, maar hoe ver het schaalt.

▶ YouTube

Taalmodellen kunnen neurale netwerkgewichten lezen en schrijven 2026

Bronnen:

 

simonwillison.net ↗

 • 

latent.space ↗
