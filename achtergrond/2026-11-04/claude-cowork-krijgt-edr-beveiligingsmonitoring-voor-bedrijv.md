---
titel: "Claude Cowork krijgt EDR-beveiligingsmonitoring voor bedrijven"
url: https://cyberpress.org/anthropic-adds-edr-security-monitoring/
bron: aitech
kind: aitech
gegenereerd: 2026-11-04T05:41:10
---

Anthropic laat bedrijven in bèta EDR-sensoren draaien in de lokale virtuele machine van Claude Cowork.

Beveiligingssensoren op de computer zelf konden niet zien wat de agent in die VM deed.

Alleen ondertekende pakketten van zeven goedgekeurde leveranciers worden geïnstalleerd, eenmaal per VM-start.

Cloudsessies van Cowork blijven buiten bereik: het toezicht stopt bij het eigen apparaat.

Het blinde vlak van de AI-agent

Claude Cowork voert namens gebruikers shellcommando’s en code uit, in een geïsoleerde virtuele machine op de eigen computer. Die isolatie is bedoeld als veiligheidsgrens: wat de agent doet, blijft binnen de VM. Maar ze had een bijwerking die beveiligingsteams niet beviel. De sensor voor endpoint detection and response (EDR), die op vrijwel elke zakelijke laptop draait om verdacht gedrag te signaleren, kon niet in die VM kijken. Precies de plek waar een autonome agent het meest actief is, was dus onzichtbaar voor de beveiligingsconsole. Anthropic heeft nu bètaondersteuning toegevoegd om een EDR-sensor van de leverancier binnen die gastomgeving te installeren, meldt Cyberpress. De functie is beschikbaar voor Team- en Enterprise-abonnementen op Claude Desktop voor macOS en Windows, en werkt ook als Claude Desktop is gekoppeld aan Amazon Bedrock, Google Cloud Vertex AI of Microsoft Foundry.

Vertrouwen via handtekeningen en grenzen

Het ontwerp is zichtbaar gebouwd rond controle. Bij elke start van de VM kopieert Claude Desktop het geconfigureerde sensorpakket naar binnen en controleert de handtekening tegen de goedgekeurde sleutel van de opgegeven leverancier. Alleen bij een geldige handtekening draait het installatiescript, hooguit één keer per start. Goedgekeurd zijn nu CrowdStrike, Evoke Security, Neo, Palo Alto Networks, Pluto Security, SentinelOne en Tanium. Dat voorkomt dat de nieuwe opening zelf een aanvalsvector wordt: wie een vals pakket in het pad zet, krijgt het niet uitgevoerd. Een opvallende keuze is dat het verkeer van de sensor naar de cloud van de leverancier de netwerk-allowlist van Cowork mag passeren. Dat is functioneel logisch, want een sensor die niet kan rapporteren is waardeloos, maar het betekent wel dat beheerders twee soorten netwerkverkeer uit dezelfde VM moeten begrijpen. Belangrijkste beperking: in cloudsessies van Cowork op de infrastructuur van Anthropic kunnen bedrijven geen eigen sensoren installeren.

Een agent die je niet kunt observeren, kun je niet vertrouwen. EDR in de VM maakt van een zwarte doos een gelogd werkstation.

Waarom dit nu speelt

De timing is geen toeval. Dezelfde krant meldt een explosieve toename van cyberaanvallen, waarbij ontwerpfouten in software worden misbruikt en AI dat makkelijker maakt, met gehackte supermarktkoelingen als nieuwste voorbeeld. Bedrijven die AI-agents toegang geven tot hun systemen, vragen terecht welk gedrag die agents vertonen en of een gekaapte agent opvalt. Voor Anthropic, dat volgens berichtgeving worstelt met stijgende computekosten vlak voor een beursgang, is de zakelijke markt cruciaal, en daar is aansluiting op bestaande beveiligingstools vaak een harde inkoopeis. Het past ook bij FlashProve, Anthropics werk aan cryptografisch bewijs van welk model een antwoord gaf: beide gaan over controleerbaarheid. Voor Europese organisaties, die onder NIS2 en de AI-verordening moeten aantonen dat ze risico’s beheersen, maakt zichtbaarheid in de agent het verschil tussen experimenteren en verantwoord uitrollen.

Conclusie

Anthropic dicht een reëel blind vlak, en doet dat met verstandige waarborgen: ondertekende pakketten, een beperkte lijst leveranciers, uitvoering één keer per start. Maar de beperking tot lokale sessies laat zien waar de echte vertrouwensvraag ligt. Hoe meer agents in de cloud van de aanbieder draaien, hoe meer bedrijven moeten vertrouwen op toezicht dat ze niet zelf uitvoeren. Deze bèta is daarom een goed begin, geen eindpunt. Wie AI-agents serieus inzet, zal dezelfde zichtbaarheid ook in de cloud eisen.

▶ YouTube

Claude Cowork neemt écht werk van je over (Tutorial 2026).

Bronnen:

 

cyberpress.org ↗
