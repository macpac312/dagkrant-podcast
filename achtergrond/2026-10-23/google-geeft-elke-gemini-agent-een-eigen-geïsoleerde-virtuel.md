---
titel: "Google geeft elke Gemini-agent een eigen geïsoleerde virtuele machine"
url: https://the-decoder.com/googles-agent-compute-engine-gives-every-gemini-agent-its-own-hardware-isolated-micro-virtual-machine/
bron: aitech
kind: aitech
gegenereerd: 2026-10-23T04:44:04
---

© the-decoder.com

Google lanceert Agent Compute Engine: elke Gemini-agent draait in een eigen geïsoleerde micro-VM.

Pauzeren bij inactiviteit en gedeeld geheugen moeten de rekenkosten per agent drukken.

Google claimt tien keer meer agents per server en hervatten binnen 500 milliseconden.

Nieuwe beheertools richten zich op bedrijven die agents willen controleren en afrekenen.

Een eigen kamer voor elke agent

Google heeft Agent Compute Engine aangekondigd, een rekenomgeving die speciaal is gebouwd voor AI-agents. Het principe is eenvoudig: elke agent krijgt een eigen micro-virtuele machine, een uitgeklede virtuele computer die hardwarematig is afgeschermd van alle andere. Die isolatie wordt geborgd door Titanium, Googles eigen beveiligingschip in zijn datacenters. De dienst draait volgens Google al achter Gemini en gaat de komende maanden in preview open voor klanten. Dat is een logische volgende stap. Een chatbot beantwoordt een vraag en is klaar; een agent voert code uit, opent websites, bewerkt bestanden en blijft soms urenlang bezig. Daarvoor heeft hij een eigen werkplek nodig, en die werkplek moet zo zijn afgeschermd dat een agent die op hol slaat of wordt misleid geen andere klanten of systemen kan raken. Het idee van micro-VM's is niet nieuw. Amazon ontwikkelde met Firecracker een vergelijkbare techniek voor zijn serverloze diensten, en isolatie per taak is in de cloud al langer gangbaar.

De economie van slapende agents

De werkelijke vernieuwing zit minder in de beveiliging dan in de kosten. Virtuele machines zijn een grote kostenpost bij het aanbieden van agents, omdat een agent veel tijd wachtend doorbrengt: op een antwoord van het taalmodel, op een website die laadt, of op de gebruiker. Een VM die al die tijd draait, kost geld zonder iets te doen. Google pauzeert daarom een agent zodra die stilvalt en geeft de machine vrij voor anderen. Gedeeld geheugen tussen VM's drukt de kosten per agent verder. Op die manier passen volgens Google tien keer zoveel agents op één server. In een test met 200.000 agents kostte pauzeren en weer opstarten minder dan 500 milliseconden. Achter die efficiëntie zit ook Agent Substrate, een Kubernetes-runtime die Google open source heeft gemaakt. Dat is een strategische keuze: door de onderliggende laag open te stellen, hoopt Google dat ontwikkelaars zijn manier van agents draaien als standaard overnemen, ook buiten zijn eigen cloud. Kubernetes zelf begon ooit op dezelfde manier: als intern Google-systeem dat open source werd en uitgroeide tot de standaard voor het draaien van software in de cloud.

Een agent brengt het grootste deel van zijn tijd wachtend door. Wie die wachttijd goedkoop maakt, bepaalt de prijs van de agent-economie.

Beheersbaarheid als verkoopargument

Naast de rekenomgeving voegt Google beheerfuncties toe: het bijhouden van tokengebruik, het automatisch kiezen van een taalmodel per taak en ondersteuning voor identiteitsbeheer van derden als Ping Identity en SailPoint. Die controles gaan ook gelden voor Cloud Run, GKE en beheerde endpoints, in cloud-, hybride en on-premise omgevingen. Dat sluit naadloos aan bij de andere berichten van vandaag. Grote Amerikaanse banken weren agents omdat ze niet kunnen zien wie er achter een inlog zit; koppeling aan identiteitsbeheer is precies een antwoord op die vraag. Uber zet 30.000 medewerkers op ChatGPT Work en moet straks kunnen nagaan wat dat kost. De cloudstrijd tussen Google, Amazon en Microsoft verschuift zo van ruwe rekenkracht naar de vraag wie agents het veiligst en het goedkoopst laat draaien. Voor Europese bedrijven, die onder de AI-verordening moeten aantonen wat hun systemen doen, kan vooral die controlelaag doorslaggevend zijn.

Conclusie

Agent Compute Engine laat zien waar de echte strijd om agents wordt gevoerd: niet in de modellen, maar in de infrastructuur eronder. Google verkoopt veiligheid, maar verdient aan efficiëntie. Als de claim van tien keer meer agents per server standhoudt, daalt de prijs van een agent fors, en daarmee de drempel voor bedrijven. Tegelijk bindt elke stap in beheer en identiteit klanten steviger aan één cloud. De open source Substrate-laag is het lokkertje, de beheertools zijn het abonnement.

▶ YouTube

De 90-dagen Google AI Pro Bypass: Gratis Gemini Advanced (Masterclass 2026)

Bronnen:

 

the-decoder.com ↗
