---
titel: "Datasette Apps: HTML-toepassingen laten bouwen door een agent"
url: https://simonwillison.net/2026/Nov/4/datasette-apps/
bron: aitech
kind: aitech
gegenereerd: 2026-11-05T05:42:09
---

Datasette Apps 0.3a0 laat gebruikers eigen HTML-toepassingen binnen Datasette hosten en bewerken.

Bouwen gaat het makkelijkst via Datasette Agent; de nieuwe versie verbetert die koppeling.

Bugfixes in datasette-llm en de command line-tool llm 0.37.1 maken het pakket af.

Kleine open-sourcetools laten zien hoe agents software dicht bij de data brengen.

Een databasetool die apps leert hosten

Simon Willison, ontwikkelaar en een van de meest gelezen stemmen over praktisch gebruik van taalmodellen, bracht deze week drie kleine releases uit die samen een grotere richting tonen. Datasette, zijn open-sourcetool om datasets in SQLite te verkennen en te publiceren, kan met de plug-in datasette-apps nu eigen HTML-toepassingen hosten en bewerken. Zo'n toepassing kan met de hand worden geschreven, maar volgens Willison is het makkelijker om die door een taalmodel te laten maken via Datasette Agent. Versie 0.3a0 verbetert precies die koppeling. De toevoeging 'a0' maakt duidelijk dat het om een vroege alfaversie gaat: experimenteel, bedoeld om uit te proberen, niet om er morgen bedrijfskritische processen op te draaien. Het idee is helder: de data, de toepassing en de bouwer zitten op dezelfde plek.

Waarom de kleine bugfixes ertoe doen

De twee andere releases lijken bijzaak, maar zeggen iets over hoe zulke systemen in de praktijk werken. De fix in datasette-llm loste een fout op die Willisons eigen demosite agent.datasette.io raakte: de lijst met beschikbare taalmodellen werd niet goed beperkt tot de modellen in de configuratie. Dat is precies het soort controle dat telt zodra een agent op een publieke site draait, omdat de beheerder wil bepalen welke modellen, en dus welke kosten en risico's, beschikbaar zijn. De command line-tool llm, waarmee gebruikers vanuit de terminal met allerlei taalmodellen werken, kreeg in versie 0.37.1 eveneens een bugfixrelease, met bijdragen van Steven Huang, Tao An, Arjan Mossel en XQ. Het laat zien dat het ecosysteem rond Willison niet langer een eenmanszaak is.

De interessante beweging is niet dat een agent HTML kan schrijven, maar dat de toepassing ontstaat waar de data al staat.

Wat het zegt over de bredere AI-markt

Terwijl grote spelers het nieuws domineren, met OpenAI dat gifs laat genereren en Apple dat juist snoeit in intern AI-gebruik, schetst Willisons werk een andere route: kleine, inspecteerbare bouwstenen waarmee een agent nuttig werk doet binnen grenzen die de gebruiker zelf bepaalt. Die aanpak past bij de groeiende scepsis over AI, van verzet tegen datacenters tot zorgen over beveiliging. Een app die een agent schrijft, blijft immers code die iemand moet kunnen controleren.

Conclusie

Datasette Apps is geen doorbraak maar een vingerwijzing. De waarde van agents zit minder in spectaculaire demo's dan in het wegnemen van wrijving: een tabel wordt een toepassing zonder dat iemand eerst een webontwikkelaar hoeft in te huren. De bugfix in datasette-llm onderstreept tegelijk de voorwaarde daarvoor. Zonder strakke controle over welke modellen wat mogen, wordt gemak al snel een risico.

▶ YouTube

Ik bouw een app met Claude Code: het hele proces in 6 minuten

Bronnen:

 

simonwillison.net ↗

 • 

simonwillison.net ↗

 • 

simonwillison.net ↗
