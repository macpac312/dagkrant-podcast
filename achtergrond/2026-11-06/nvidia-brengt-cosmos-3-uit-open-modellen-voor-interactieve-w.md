---
titel: "NVIDIA brengt Cosmos 3 uit: open modellen voor interactieve wereldsimulatie"
url: https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation
bron: aitech
kind: aitech
gegenereerd: 2026-11-06T05:34:55
---

© huggingface.co

NVIDIA voegt vier open checkpoints toe aan Cosmos 3 voor interactieve wereldsimulatie.

De modellen voorspellen wat acties visueel teweegbrengen en genereren camera- en LiDAR-data.

Robots en zelfrijdende auto's kunnen zo trainen in gesimuleerde, variabele werelden.

Open gewichten maken NVIDIA's hardware de standaard voor fysieke AI.

Waarom robots een wereld in hun hoofd nodig hebben

Taalmodellen leerden uit het internet, maar voor robots en zelfrijdende auto's bestaat geen vergelijkbare berg data. Echte proefritten en robotexperimenten zijn duur, traag en soms gevaarlijk, en zeldzame situaties, zoals een kind dat tussen geparkeerde auto's oversteekt, komen te weinig voor om van te leren. Wereldmodellen moeten dat gat vullen: neurale netwerken die voorspellen hoe de fysieke wereld eruitziet nadat een robot of auto iets doet. NVIDIA presenteerde zijn Cosmos-platform begin 2025 en breidt het nu uit met vier open checkpoints in de Cosmos 3-familie. Volgens de Hugging Face-blog zijn het allemaal nagetrainde varianten van Cosmos 3 Nano, elk met 16 miljard trainbare parameters, uitgebracht onder de OpenMDW 1.1-licentie, die zowel commercieel als niet-commercieel gebruik toestaat. Daarmee volgt NVIDIA de lijn van Meta en Chinese labs als Baidu, dat deze week ERNIE 5.5 Flash Base als open basismodel vrijgaf.

Twee toepassingen, één fundament

De checkpoints bedienen twee werelden. Voor robotica voorspelt Sim-Bimanual de visuele gevolgen van handelingen van een tweearmige robot, terwijl Sim-Transfer de besturing van een traditionele physics-simulator omzet in realistisch ogende waarnemingen. Dat laatste is slim: klassieke simulatoren zijn fysisch nauwkeurig maar zien er kunstmatig uit, waardoor een robot die erin traint in de echte wereld struikelt over het verschil, de zogeheten sim-to-real-kloof. Voor autonoom rijden genereert Transfer-Auto synthetische rijdata over maximaal elf camera's en LiDAR tegelijk, waarbij onderzoekers wegindeling en verkeerslichten kunnen variëren om te zien hoe een rijbeleid reageert. NVIDIA is opvallend bescheiden over de grenzen: het werk dat nog moet gebeuren is meten waar de modellen beleidstraining en evaluatie betrouwbaar ondersteunen, en verbeteren waar ze tekortschieten. Dat is terecht, want een gegenereerde wereld die er overtuigend uitziet maar fysisch net niet klopt, kan een robot precies de verkeerde lessen leren.

Deze problemen blijven moeilijk: het werk is meten waar de modellen beleidsleren getrouw ondersteunen, hun grenzen begrijpen en verbeteren waar ze tekortschieten. — NVIDIA, Hugging Face-blog

Strategie achter de open gewichten

Dat NVIDIA zijn modellen weggeeft, is geen altruïsme. Wie wereldmodellen draait, heeft enorme rekenkracht nodig, en die rekenkracht komt overwegend van NVIDIA-chips. Door het open fundament te leveren, wordt het bedrijf de standaard voor wat CEO Jensen Huang fysieke AI noemt, de volgende groeimarkt na chatbots. Voor Europese autofabrikanten en robotbedrijven, die achterlopen op Amerikaanse en Chinese concurrenten in rijdata, verlaagt het de drempel om synthetische trainingsdata te maken. Tegelijk staat de timing in een gespannen context: in een week waarin beleggers chipaandelen en AI-datacenterbedrijven massaal dumpten, toont NVIDIA dat de vraag naar rekenkracht zich verbreedt naar nieuwe toepassingen. En terwijl Meta onder vuur ligt voor trainen op gebruikersdata, biedt synthetische data een route die privacyvragen grotendeels omzeilt.

Conclusie

Cosmos 3 laat zien waar de AI-race na de taalmodellen naartoe beweegt: van tekst naar de fysieke wereld. De echte waarde zit niet in mooie demovideo's, maar in de vraag of beleid dat in deze werelden is getraind ook buiten de simulatie veilig werkt. NVIDIA erkent zelf dat dat nog onbewezen is. Toch is de open aanpak verstandig: wie de meetlat voor fysieke AI levert, bepaalt ook op welke hardware die wordt gebouwd.

▶ YouTube

NVIDIA Cosmos 3 Just Beat Wan 2.2

Bronnen:

 

huggingface.co ↗
