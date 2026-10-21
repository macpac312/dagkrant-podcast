---
titel: "Google volgt Amazon met tool om PyTorch-apps los te maken van Nvidia"
url: https://techcrunch.com/2026/10/20/google-has-joined-amazon-in-attacking-nvidias-stronghold-with-ai-app-developers/
bron: aitech
kind: aitech
gegenereerd: 2026-10-21T04:42:50
---

© techcrunch.com

Google maakt TorchTPU open source, een dag nadat Amazon TorchNeuron uitbracht.

Beide tools laten PyTorch-apps zonder herschrijven draaien op eigen AI-chips.

Het doelwit is Nvidia's softwarevoorsprong rond CUDA, niet zijn hardware.

Overstappen wordt makkelijker, maar massaal vertrek bij Nvidia volgt niet vanzelf.

De gracht rond Nvidia

Nvidia dankt zijn dominantie in AI niet alleen aan snelle chips, maar vooral aan software. Het populairste raamwerk voor het bouwen, trainen en draaien van AI-modellen is PyTorch, dat volgens sommige schattingen door 85 procent van de AI-apps wordt gebruikt. Meta, toen nog Facebook, ontwikkelde PyTorch in 2016, ruim voordat grote taalmodellen de wereld veroverden. Nvidia's GPU's waren toen al de standaard in AI-onderzoek, en veel functies van PyTorch werden specifiek voor die chips en het bijbehorende CUDA-platform gebouwd. Ook nadat Meta het project in 2022 overdroeg aan de Linux Foundation, bleef die verwevenheid bestaan. Het gevolg: wie een PyTorch-app schrijft, schrijft hem in de praktijk standaard voor Nvidia. Die standaardinstelling is de gracht waarachter Nvidia zijn marges verdedigt, en precies die gracht proberen Google en Amazon deze week te dempen.

Twee cloudreuzen, twee strategieën

Amazon zette maandag de eerste stap met TorchNeuron, een PyTorch-variant waarmee AI-apps zonder herschrijven naar Amazons eigen chip Trainium en dus naar AWS kunnen verhuizen. Het bedrijf gaat verder: het stuurt code in bij het hoofdproject van PyTorch om allerlei functies los te koppelen van Nvidia-chips, zodat het raamwerk standaard hardware-neutraler wordt. Google volgde dinsdag met TorchTPU, dat apps naar zijn Tensor Processing Units brengt, eveneens met een eenvoudige configuratiewijziging. Google lijkt Amazon op enkele punten te overtroeven. Het werkte direct samen met Meta, Hugging Face, Inferact, de maker van vLLM, en RadixArk, de maker van SGLang, om ervoor te zorgen dat populaire bibliotheken op TPU's net zo werken als in de originele PyTorch. Daarnaast lanceerde het een TPU agent suite voor migratie en foutherstel, en paste het LiteRT, dat AI op telefoons en laptops draait, aan voor PyTorch-apps.

Geen van beide tools betekent dat ontwikkelaars massaal Nvidia verlaten; wel verdwijnt het argument dat overstappen te veel werk is.

Wat dit betekent voor Nvidia en de markt

Voor Nvidia is dit geen acute bedreiging, maar wel een structurele. Ontwikkelaars kiezen hardware op basis van prestaties, beschikbaarheid, prijs en gewoonte, en die gewoonte ligt voorlopig stevig bij Nvidia. Toch verandert de onderhandelingspositie. Als een app met een configuratiewijziging naar een andere chip kan, wordt Nvidia-hardware vervangbaarder en stijgt de prijsdruk. Dat past in een bredere beweging die vandaag ook elders in de krant zichtbaar is: Deepseek maakt een inferentie-engine op basis van vLLM open source om kosten te drukken, en Anthropics cloudpartners worden tegelijk zijn concurrenten. Rekenkracht is het nieuwe strijdtoneel, en wie de software controleert, bepaalt waar die rekenkracht wordt ingekocht. Voor Europese AI-bedrijven en startups is meer keuze gunstig: het verkleint de afhankelijkheid van één leverancier, al verschuift die afhankelijkheid deels naar Amerikaanse cloudplatforms.

Conclusie

Google en Amazon vallen Nvidia aan waar het pijn doet: niet bij de chip, maar bij de standaardinstelling. Dat is de juiste strategie, omdat lock-in in software sterker is dan in silicium. Toch winnen ze deze slag niet met tools alleen. Zolang Nvidia-chips de snelste en best ondersteunde blijven, betaalt de markt de premie. Het effect zal zich eerder in prijzen en marges laten zien dan in een plotselinge exodus.

▶ YouTube

Google volgt Amazon met tool om PyTorch-apps los te maken van Nvidia 2026

Bronnen:

 

techcrunch.com ↗
