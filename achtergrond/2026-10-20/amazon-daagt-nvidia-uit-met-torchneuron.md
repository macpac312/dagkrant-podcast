---
titel: "Amazon daagt Nvidia uit met TorchNeuron"
url: https://techcrunch.com/2026/10/19/amazon-is-taking-its-biggest-shot-at-nvidia-yet-with-new-torchneuron-dev-tool/
bron: aitech
kind: aitech
gegenereerd: 2026-10-20T04:41:05
---

© techcrunch.com

AWS lanceert TorchNeuron: PyTorch-apps draaien met één configuratieregel op Trainium-chips.

Doel is Nvidia's softwarevoorsprong via CUDA te neutraliseren.

Hugging Face: 89 procent van de top-100 tekstmodellen werkt direct, was 46.

Amazon verkoopt geen goedkoopste chip, maar een complete cloud als alternatief.

De echte slotgracht van Nvidia

Nvidia's dominantie in AI-hardware wordt vaak uitgelegd met de snelheid van zijn GPU's, maar de diepere verklaring ligt in software. Jarenlang heeft Nvidia ervoor gezorgd dat CUDA, de softwarelaag waarmee apps op zijn chips draaien, naadloos samenwerkt met PyTorch. Dat gratis, open-source gereedschap werd oorspronkelijk door Facebook ontwikkeld en valt sinds 2022 onder de Linux Foundation. Volgens Amazon is ongeveer 85 procent van de AI-apps ermee geschreven. Het gevolg: wie PyTorch gebruikt, kiest vrijwel automatisch voor Nvidia. Met TorchNeuron, dat AWS maandag lanceerde, valt Amazon precies die standaardkeuze aan. Een PyTorch-app moet met het wijzigen van één configuratieregel op Amazons Trainium-chip kunnen draaien, zonder herschrijven van code. Vanaf 20 oktober is TorchNeuron als publieke bèta te installeren.

Van compilerpuzzel naar gewoon apparaat

Het verschil met Amazons eerdere aanpak is technisch maar wezenlijk. Tot nu toe liep het werken met Trainium en de inferentiechip Inferentia via optimum-neuron, een bibliotheek gebouwd op PyTorch XLA. Volgens Hugging Face betekende dat "denken als een compiler": lazy tensors in plaats van directe uitvoering, alleen vaste vormen en hercompilatie bij elke onderbreking van de rekengraaf. TorchNeuron integreert direct in PyTorch en presenteert Trainium als native apparaat. Het effect is meetbaar: van de honderd meest gebruikte architecturen voor tekstgeneratie wordt nu 89 procent direct ondersteund, tegen 46 procent met Optimum Neuron v0.4.5. Hugging Face raadt Neuron-gebruikers zelfs aan voortaan Transformers, Diffusers en de andere bibliotheken direct te gebruiken. Amazon is overigens niet de eerste: ook AMD-GPU's en Apple-chips zijn met een eenvoudige configuratiewijziging vanuit PyTorch bereikbaar.

"You're building on AWS. You're not betting on a single-purpose compute provider and scrambling to build everything else around it." — Colin Brace, AWS Annapurna Labs

Strategie: de chip als toegangskaartje tot de cloud

Amazons pitch draait minder om de chip dan om het ecosysteem. AWS zet zich expliciet af tegen neoclouds als CoreWeave, Nebius en Firmus, die vaak aan Nvidia-hardware vastzitten en vooral rekenkracht leveren. Colin Brace van Annapurna Labs, de chipdivisie van AWS, zegt dat de infrastructuur van prototype tot productie bij AWS al klaarstaat. Het argument is prijs-prestatie over de hele keten, niet de laagste prijs per token. Dat past in een bredere beweging: alle grote clouds ontwikkelen eigen chips om hun afhankelijkheid van Nvidia en diens marges te verkleinen. Of dat lukt, hangt af van de vraag of ontwikkelaars de prestatie en betrouwbaarheid van CUDA durven inruilen. Software-compatibiliteit is een noodzakelijke voorwaarde, maar Nvidia's voorsprong in tooling, kennis bij ontwikkelaars en beschikbaarheid in elke cloud verdwijnt niet met een bèta. Voor Europese bedrijven die al op AWS draaien, wordt de drempel om te experimenteren wel aanzienlijk lager.

Conclusie

TorchNeuron is de slimste zet die Amazon tegen Nvidia kon doen: niet harder concurreren op hardware, maar de software-gewoonte aanvallen die Nvidia tot standaard maakte. De sprong van 46 naar 89 procent ondersteuning laat zien dat de technische drempel snel daalt. De echte test is commercieel: als grote AI-bedrijven Trainium op schaal gaan gebruiken, verschuift de onderhandelingsmacht in de chipmarkt. Tot die tijd blijft het een belofte in bèta, maar wel een die Nvidia serieus moet nemen.

▶ YouTube

Amazon daagt Nvidia uit met TorchNeuron 2026

Bronnen:

 

techcrunch.com ↗

 • 

huggingface.co ↗
