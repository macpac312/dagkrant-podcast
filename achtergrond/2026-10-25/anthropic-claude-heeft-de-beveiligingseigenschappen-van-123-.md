---
titel: "Anthropic: Claude heeft de beveiligingseigenschappen van 123 bibliotheken formeel bewezen"
url: https://news.google.com/rss/articles/CBMimgFBVV95cUxPYXJXTWpvbGZ1bXVjbjFpS1YzZ1QtUE5Zc1VmTFlPOW1GdzFDSGR0Tkt3WVA4YW1PZTN2NTI0OW9oSENSLW1aUmJQQkZtZXhhMXBvTTdGTGxSMG93VTVtOFpoa0pZcEVtRFh3TW5sR3N5Zllkbk5XV2lWWVppWktvbjdFQWN5QVdxZWExYXY2Y2RYYVk5aHZWTkF3?oc=5
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-10-25T05:46:01
---

Anthropic zegt dat Claude de beveiligingseigenschappen van 123 bibliotheken formeel heeft bewezen.

Formele verificatie levert een wiskundig bewijs, maar kostte traditioneel maanden mensenwerk.

Als AI dat werk overneemt, wordt bewezen veilige software betaalbaar.

Een bewijs is zo sterk als de specificatie; onafhankelijke toetsing ontbreekt nog.

Van maanden handwerk naar machinewerk

Anthropic zegt dat Claude de beveiligingseigenschappen van 123 softwarebibliotheken formeel heeft bewezen, meldt Unite.AI. Dat klinkt technisch, maar het is een opmerkelijke claim. Formele verificatie levert geen test die laat zien dat code in de geprobeerde gevallen werkt, maar een wiskundig bewijs dat de code in alle gevallen aan een bepaalde eigenschap voldoet, bijvoorbeeld dat er nooit buiten een geheugenbuffer wordt gelezen. De techniek bestaat al decennia, maar was vanwege de kosten voorbehouden aan uitzonderlijke projecten. Het bekendste voorbeeld is seL4, een besturingssysteemkernel waarvan onderzoekers in 2009 de correctheid bewezen, na jarenlang werk door een team van specialisten. Ook de C-compiler CompCert en delen van de cryptografie bij grote cloudbedrijven zijn zo geverifieerd. Voor gewone open-sourcebibliotheken, waarop vrijwel alle software rust, was dat nooit haalbaar: het kost maanden mensenwerk per project, en er zijn simpelweg te weinig specialisten. Daardoor rust de digitale infrastructuur grotendeels op code die wel getest, maar nooit bewezen is, vaak onderhouden door een handvol vrijwilligers.

Waarom een taalmodel hier goed past

Formele verificatie is een bijna ideaal terrein voor AI, om een reden die vaak over het hoofd wordt gezien: het resultaat is controleerbaar. Een taalmodel kan zich vergissen en verzint soms dingen, maar een bewijs wordt gecontroleerd door een klein, wiskundig betrouwbaar programma dat alleen sluitende redeneringen accepteert. Een fout bewijs komt er dus niet door. Het model doet het zoekwerk dat mensen maanden kost, de machine bewaakt de waarheid. Dat verklaart waarom meerdere AI-labs zich nadrukkelijk op wiskunde en bewijsvoering richten: het is een domein waarin vooruitgang objectief meetbaar is. Het zwakke punt zit ergens anders: in de specificatie. Een bewijs garandeert alleen wat vooraf is opgeschreven. Is de eigenschap te smal of verkeerd geformuleerd, dan is de bibliotheek wiskundig correct en toch onveilig. Zolang Anthropic niet publiceert welke eigenschappen precies zijn bewezen en wie de specificaties heeft opgesteld, valt de claim van 123 bibliotheken moeilijk op waarde te schatten. Ook onduidelijk is hoe groot de bibliotheken waren: een bewijs voor een kleine hulpfunctie is iets anders dan voor een complete cryptografische bibliotheek.

Een AI-bewijs hoeft niet vertrouwd te worden: de controleur weigert elke stap die niet klopt. Het risico verschuift naar de specificatie.

Gevolgen voor de softwareketen

De relevantie wordt duidelijk als je terugkijkt. Heartbleed in 2014, Log4Shell in 2021 en de achterdeur in xz in 2024 lieten zien hoe één zwakke plek in een veelgebruikte bibliotheek wereldwijd systemen kan raken. Europa reageert daarop met de Cyber Resilience Act, die fabrikanten verantwoordelijk maakt voor de veiligheid van hun producten, inclusief de open-sourceonderdelen die ze gebruiken. Als AI bewezen veilige bibliotheken betaalbaar maakt, verandert de economie van softwarebeveiliging fundamenteel. Wel blijft voorzichtigheid geboden. De claim komt van Anthropic zelf, via Unite.AI, en onafhankelijke toetsing ontbreekt nog. Ook het moment is veelzeggend: in dezelfde week maakte Anthropic de sandbox van Claude Code open source en publiceerde OrcaRouter een overzicht van zes agentproducten van het bedrijf. Veiligheid wordt zo nadrukkelijk het verkoopargument in de strijd om zakelijke klanten. Voor Nederlandse bedrijven en overheden die onder de nieuwe Europese regels vallen, kan zo'n aanpak op termijn een praktische manier worden om aan te tonen dat gebruikte componenten aan veiligheidseisen voldoen.

Conclusie

Als de claim standhoudt, is dit een van de nuttigste toepassingen van AI tot nu toe: niet meer code schrijven, maar bestaande code aantoonbaar veiliger maken. De ironie is dat AI-gegenereerde code juist zorgen baart over kwaliteit, terwijl AI-gegenereerde bewijzen die zorg deels kunnen wegnemen. Maar een bewijs is zo goed als de vraag die het beantwoordt, en die vraag blijft voorlopig mensenwerk. Anthropic moet de specificaties openbaar maken, zodat anderen kunnen beoordelen of de 123 bibliotheken werkelijk veiliger zijn of alleen op papier.

▶ YouTube

Anthropic: Claude heeft de beveiligingseigenschappen van 123 bibliotheken formeel bewezen 2026
