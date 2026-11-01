---
titel: "Onderzoekers namen ChatGPT-accounts over via HTML-previews"
url: https://www.parameter.ai/labs/we-found-a-gap-at-openai
bron: aitech
kind: aitech
gegenereerd: 2026-11-01T05:40:45
---

© parameter.ai

Parameter Labs toonde aan dat een gedeelde ChatGPT-link accountgegevens kon prijsgeven.

De oorzaak lag in de afscherming rond interactieve HTML-previews, niet in het taalmodel zelf.

OpenAI dichtte het gat op 26 oktober, gaf het de hoogste prioriteit en betaalde 5.000 dollar.

Elke nieuwe functie rond AI-gegenereerde code vergroot het aanvalsoppervlak van chatdiensten.

Een deelfunctie als zwakke plek

Chatbots zijn de afgelopen twee jaar veranderd van tekstvensters in kleine ontwikkelomgevingen. ChatGPT kan een blok HTML omzetten in een werkende webpagina – eerst heette dat Canvas, inmiddels HTML-previews – en Anthropic, Google en anderen bieden vergelijkbare functies. Omdat zo'n pagina willekeurige code kan bevatten, hoort die streng afgeschermd te draaien, los van de ingelogde chatomgeving eromheen. Onderzoekers van Parameter Labs lieten in oktober zien dat die afscherming in de praktijk niet waterdicht was. Zij konden via de gewone deelfunctie een situatie creëren waarin het openen van een gedeelde link ongewenste gevolgen had voor de ontvanger: toegang tot diens eigen, nooit gedeelde gesprekken. Er hoefde niets te worden geïnstalleerd of geplakt. Simon Willison besprak de bevindingen op zijn veelgelezen blog, en op Hacker News haalde het stuk ruim driehonderd punten.

Waarom afscherming zo lastig is

De kern van het probleem is dat moderne AI-interfaces twee dingen tegelijk willen: onvertrouwde, door een model of gebruiker gemaakte code laten draaien, én dat doen binnen een pagina die toegang heeft tot gevoelige accountfuncties. Parameter Labs en Willison beschrijven hoe de losse onderdelen elk voor zich redelijk ontworpen waren – een afgeschermd frame, een strenge beperking op scripts – maar dat de combinatie ervan een onbedoelde route opende. Een hulpbibliotheek voor grafieken bleek in de hoofdpagina te luisteren naar berichten uit andere frames, en één van de weinige externe bronnen die de beveiligingsregels toestonden, kon worden misbruikt. Geen van die keuzes was op zichzelf een blunder; het was de optelsom. Dat patroon is kenmerkend voor beveiligingsfouten in complexe webdiensten: niet één open deur, maar een reeks op elkaar aansluitende kieren.

Willison noemde de uitbetaling van 5.000 dollar aan de lage kant voor een kwetsbaarheid van deze ernst.

Een patroon in dezelfde krant

De melding staat niet op zichzelf. In dezelfde dagkrant bereikte een gemanipuleerde Claude Code-extensie tot vijfduizend Cursor-gebruikers, en tornt Anthropic aan de grenzen van zijn eigen watermerk. Het gemeenschappelijke thema is dat de beveiliging van AI-diensten niet achterblijft op het niveau van het taalmodel, maar op dat van de gewone software eromheen: deelfuncties, extensies, sandboxes en toeleveringsketens. Juist omdat de grote aanbieders hun chatbots in hoog tempo uitbreiden met code-uitvoer, apps en integraties, groeit het aanvalsoppervlak sneller dan de beveiligingsmodellen eromheen. Dat OpenAI snel reageerde en netjes uitbetaalde, is positief; dat zulke ketens überhaupt ontstaan, laat zien hoe jong dit productcategorie nog is.

Conclusie

Dat één klik op een gedeelde link gevolgen kon hebben voor andermans privégesprekken, is precies het scenario dat sandboxing hoort te voorkomen. De les is niet dat ChatGPT onveilig is – het lek is gedicht – maar dat de beveiliging van AI-diensten evenveel aandacht verdient als hun capaciteiten. Zolang bedrijven functies sneller toevoegen dan ze de randen ervan kunnen dichttimmeren, blijft onafhankelijk onderzoek met verantwoorde melding de belangrijkste verdedigingslinie. Een hogere beloning dan 5.000 dollar zou recht doen aan dat belang.

▶ YouTube

Zo maak je meerdere ChatGPT-accounts aan (Eenvoudige gids voor 2026)

Bronnen:

 

parameter.ai ↗

 • 

simonwillison.net ↗
