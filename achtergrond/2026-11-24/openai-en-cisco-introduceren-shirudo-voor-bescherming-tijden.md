---
titel: "OpenAI en Cisco introduceren Shirudo voor bescherming tijdens patchen"
url: https://openai.com/index/introducing-shirudo
bron: aitech
kind: aitech
gegenereerd: 2026-11-24T05:33:32
---

© openai.com

OpenAI en Cisco lanceren Shirudo, een open-source runtime die draaiende Linux-systemen beschermt.

Tijdelijke "shields" op basis van eBPF blokkeren exploits zonder herstart.

Shields zijn cryptografisch ondertekend en worden eerst getest op legitiem verkeer.

De lancering volgt op AI-hacktools als ARTEX die aanvallen versnellen.

Het gat tussen lek en patch

OpenAI en Cisco introduceren Shirudo, Japans voor "schild": een open-source runtime voor Linux die teams helpt systemen te beschermen terwijl ze een patch uitrollen. Het probleem is bekend. Een kwetsbaarheid wordt gepubliceerd, maar het testen en uitrollen van de oplossing kan dagen of weken duren, en in die tussentijd is het systeem kwetsbaar. Tijdelijk een bepaalde Linux-operatie blokkeren is riskant, omdat een exploit en een legitiem verzoek op dezelfde operatie kunnen leunen: blokkeren kan de dienst dus uitschakelen. Shirudo moet die afweging dragelijk maken. In een gecontroleerde test blokkeerde een door Codex gegenereerd shield een Java4Shell-poging tegen een draaiende Elasticsearch-dienst, zonder herstart. De bedrijven nodigen ontwikkelaars, beveiligingsonderzoekers en infrastructuurbeheerders uit het project verder te ontwikkelen.

Waarom eBPF en waarom nu

Technisch leunt Shirudo op eBPF, een Linux-technologie waarmee kleine programma's op specifieke punten binnen het besturingssysteem draaien. Daarmee kan verdacht gedrag worden waargenomen en gericht worden ingegrepen, zonder de applicatie te herstarten. De vier kernpunten van het ontwerp zijn live bescherming, verdediging op machinesnelheid, vertrouwde uitrol en hardwarematige verificatie met een Trusted Platform Module. Het tijdstip is geen toeval. In dezelfde krant staat het hackframework ARTEX, dat aanvallen automatiseert en waarvan de maker de repository niet wil weghalen. Als aanvallers met AI sneller lekken vinden en misbruiken, schuift de verdediging op naar hetzelfde tempo: waar patchen weken kost, moet een agent in uren een schild kunnen bouwen. OpenAI levert daarvoor de frontier-AI en onderzoek, Cisco de infrastructuur- en securityervaring.

Een exploit en een legitiem verzoek kunnen op dezelfde Linux-operatie leunen: volledig blokkeren kan de dienst uitschakelen.

Gevolgen en kanttekeningen

Voor beheerders van productiesystemen, zoals databases en zoekdiensten, verkleint Shirudo het blootstellingsvenster. Een kanttekening is dat de tool de patch niet vervangt: het is een tijdelijke brug, en een slecht ontworpen shield kan legitiem gedrag raken. De gecontroleerde test met één exploit zegt bovendien weinig over de brede werkbaarheid; de open-sourcekeuze en de uitnodiging aan de community zijn daarom ook een manier om dat te toetsen. Er zit ook een strategische laag in: dezelfde AI-bedrijven wier modellen aanvalstools versnellen, positioneren zich als leverancier van de verdediging. Dat kan geloofwaardig zijn, maar het laat de afhankelijkheid van grote labs in de securitysector groeien.

Conclusie

Shirudo is een logisch antwoord op een asymmetrie: aanvallers automatiseren, verdedigers patchen nog in kalenderdagen. Als de test zich in de praktijk herhaalt, wordt "wachten op de patch" minder riskant. De echte maatstaf is of beheerders de shields durven te vertrouwen in productie, en dat valt of staat met de transparantie van het open-sourceproject.

▶ YouTube

OpenAI en Cisco introduceren Shirudo voor bescherming tijdens patchen 2026

Bronnen:

 

openai.com ↗
