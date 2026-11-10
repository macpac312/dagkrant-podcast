---
titel: "llm-anthropic 0.31 ondersteunt Fable en Mythos 5.2"
url: https://simonwillison.net/2026/Nov/9/llm-anthropic/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-10T05:39:21
---

© simonwillison.net

Simon Willison bracht llm-anthropic 0.31 uit: Fable 5.2 en Mythos 5.2 werken nu vanaf de commandoregel.

Zijn pelikaantest op vijf redeneerniveaus leverde de beste tekening op bij xhigh.

Op max liep het model vast na 128.000 denktokens, een nieuwe bug voor de Fable-reeks.

Snelle ondersteuning door onafhankelijke tools maakt de modellen direct bruikbaar voor ontwikkelaars.

Dezelfde dag op de commandoregel

Op de dag dat Anthropic Claude Fable 5.2 en Mythos 5.2 uitbracht, stond de ondersteuning al klaar in llm-anthropic 0.31, de plugin van ontwikkelaar Simon Willison voor zijn opensourcetool LLM. Wie die tool gebruikt, installeert de plugin, stelt een API-sleutel in en kan direct prompts naar het nieuwe model sturen vanuit de terminal. Dat lijkt een detail, maar het illustreert hoe het ecosysteem rond grote taalmodellen werkt. De modellen zelf komen van een handvol bedrijven, maar de manier waarop ontwikkelaars ermee werken, wordt voor een groot deel bepaald door onafhankelijke makers. Willison is daarin een sleutelfiguur: zijn blog geldt als een van de snelste en nuchterste bronnen over nieuwe modellen, en zijn testen worden breed gedeeld. Dat hij binnen een dag ondersteuning levert, betekent dat de drempel om Fable 5.2 te proberen voor programmeurs praktisch nul is.

Wat de pelikaan verraadt

Willisons vaste test, een SVG-tekening van een pelikaan op een fiets, is een informele maar veelzeggende maatstaf. Hij liet Fable 5.2 de opdracht uitvoeren op alle vijf redeneerniveaus: low, medium, high, xhigh en max. Het beste resultaat kwam van xhigh. Op max mislukte het: het model gaf helemaal geen afbeelding terug, omdat het na 128.000 tokens nadenken door zijn budget heen was. Willison zag dezelfde bug eerder bij Opus 5.5, maar voor de Fable-reeks is hij nieuw; Fable 5 en 5.1 leverden op max nog gewoon een pelikaan af. Dat is een les die verder reikt dan een grappige test. Meer rekenkracht is niet automatisch beter. Een model dat oneindig blijft nadenken zonder af te ronden, is in de praktijk minder bruikbaar dan een model dat op een lager niveau een goed antwoord geeft. Voor wie per token betaalt, is dat ook een kostenkwestie.

Op het hoogste niveau gaf Fable 5.2 geen tekening terug: het liep vast na 128.000 tokens nadenken, een bug die eerder alleen bij Opus 5.5 opdook.

Een model voor zwaar werk

De nieuwe modellen zijn volgens Absolute Geeks minder bedoeld voor alledaags chatten en meer voor zwaar technisch werk, met strengere vangrails en een zwaardere versie voor geverifieerde organisaties. Fable 5.2 staat met een score van 65 bovenaan de onafhankelijke Artificial Analysis-index. Juist voor zulke technische gebruikers zijn commandoregeltools als LLM aantrekkelijk: ze maken het eenvoudig om modellen in scripts en werkstromen te verwerken en resultaten te vergelijken. Tegelijk blijft Anthropic op andere fronten achter. Cursor en Google geven hun codeeragents een stem, terwijl Claude Code stil blijft. En Willison zelf liet onlangs zien hoe praktisch de modellen zijn, toen hij met hulp van Claude de bron van een mysterieuze piep vond in een kamer vol dozen. Het beeld is dat van een krachtig maar nog niet foutloos gereedschap.

Conclusie

Dat llm-anthropic 0.31 dezelfde dag uitkwam als de modellen, laat zien hoe snel de ontwikkelaarswereld nieuwe modellen opneemt. Belangrijker is wat de eerste test blootlegt: het hoogste redeneerniveau van Fable 5.2 kan vastlopen. Voor een model dat Anthropic positioneert voor zwaar technisch werk, is dat geen bijzaak. Wie het inzet, doet er voorlopig goed aan xhigh als praktisch plafond te behandelen, tot Anthropic de bug in max heeft opgelost.

▶ YouTube

Anthropic's Fable 5.2 is het beste AI-model ter wereld

Bronnen:

 

simonwillison.net ↗
