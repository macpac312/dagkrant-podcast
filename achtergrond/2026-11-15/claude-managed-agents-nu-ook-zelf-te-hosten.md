---
titel: "Claude Managed Agents nu ook zelf te hosten"
url: https://casrai.org/news/claude-managed-agents-self-hosted-release-2026
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-15T05:35:33
---

© casrai.org

Anthropic bracht op 12 november zelf-gehoste Claude Managed Agents uit, in besloten bèta.

API, agent-loop en opslag van sessies draaien op de infrastructuur van de klant.

Modelinferentie blijft bij Anthropic of de gekozen provider; lokale opslag betekent dus niet alles on-premises.

De klant neemt beveiliging, updates en toezicht over.

Meer controle, meer verantwoordelijkheid

Anthropic heeft op 12 november een zelf-gehoste versie van Claude Managed Agents gelanceerd, volgens CASRAI eerst via een besloten bèta. Eerder konden klanten al sandboxes op eigen infrastructuur laten draaien om agenttools uit te voeren, terwijl Anthropic de dienst zelf bleef beheren. De nieuwe optie verhuist ook de API, de agent-loop en de opslag van agents, sessies en geschiedenis. Toegang loopt via het accountteam van Anthropic. Voor universiteiten en andere instellingen met gevoelige gegevens is dat aantrekkelijk: de sessiegeschiedenis staat in een eigen database. CASRAI plaatst daar meteen de kanttekening bij dat dit een beschrijving is van de documentatie, aangevuld met een institutionele duiding.

Inferentie blijft elders

Het belangrijkste voorbehoud is het datapad. Elke modelaanroep stuurt het gesprek tot dan toe, inclusief invoer en uitkomst van tools, naar de inferentieprovider. Standaard is dat de Claude API. De documentatie noemt ook Amazon Bedrock, Claude-modellen op Google Cloud, Microsoft Foundry en de eigen modelgateway van de klant. Wat die provider met invoer en uitvoer mag doen, staat in de overeenkomst met die partij. Het gaat dus om twee vragen: waar staan de opgeslagen records, en waar worden ze verwerkt? Er zijn geen lokaal gehoste modelgewichten en geen air-gapped Claude-dienst.

Wat dit betekent

Het past in een patroon dat ook uit de andere Claude-verhalen van deze week blijkt: de ketenverantwoordelijkheid schuift naar de gebruiker. Waar Cursor via een leverancier werd geraakt, laat zelf hosten de klant bewust meer schakels beheren. De winst is custody over data; de prijs is operationeel werk en een groter aanvalsoppervlak als de eigen beveiliging tekortschiet.

Conclusie

Zelf hosten is geen privacybutton. Het geeft zeggenschap over opslag, niet over verwerking, en vraagt om volwassen beheer. Voor instellingen met strenge eisen is het een stap vooruit; voor wie vooral gemak zoekt, blijft de beheerde dienst logischer.

▶ YouTube

Claude Managed Agents nu ook zelf te hosten 2026

Bronnen:

 

casrai.org ↗
