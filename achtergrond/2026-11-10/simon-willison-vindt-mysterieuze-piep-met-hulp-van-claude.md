---
titel: "Simon Willison vindt mysterieuze piep met hulp van Claude"
url: https://simonwillison.net/2026/Nov/9/mysterious-beeps/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-10T05:39:21
---

© simonwillison.net

Simon Willison liet Claude Code een systeem bouwen om een mysterieuze piep te lokaliseren.

Vijf apparaten luisterden mee en trianguleerden het geluid in een kamer vol verhuisdozen.

De bron, tot op ongeveer 40 centimeter: een oude koolmonoxidemelder met lege batterijen.

Het voorbeeld toont hoe AI wegwerpsoftware voor één klus rendabel maakt.

Een huishoudelijk mysterie

Het begon met een herkenbaar ergernisje. Het huis van ontwikkelaar en blogger Simon Willison heeft een kamer vol verhuisdozen die na de laatste verhuizing nooit zijn uitgepakt. Een paar weken geleden begon daar af en toe iets te piepen. De piepjes lagen zo ver uit elkaar dat het vrijwel onmogelijk was om op het gehoor te bepalen waar het geluid vandaan kwam, en elke doos doorzoeken was geen aantrekkelijk vooruitzicht. Willison koos een ongebruikelijke route: hij liet Claude Code een programma bouwen dat hij Beep Locator noemde. Het idee is eenvoudig, de uitvoering niet: zet meerdere apparaten met microfoons door de kamer, laat ze tegelijk luisteren en bereken uit de verschillen tussen hun waarnemingen waar het geluid ontstaat. Het is in feite een huiskamerversie van de technieken waarmee ook schoten of onderzeeërs worden gelokaliseerd.

Van wetenschappelijk paper naar wegwerpsoftware

Opvallend is hoe snel Claude de wetenschappelijke basis vond. Het model wees Willison op BeepBeep, een paper uit 2007 van Chunyi Peng en collega's over een nauwkeurig, akoestisch systeem om afstanden te meten en apparaten te lokaliseren met gewone consumentenelektronica. Niet alles werkte meteen: het laten piepen van apparaten naar elkaar om hun posities te bepalen bleek onbetrouwbaar. Willison loste dat pragmatisch op met een 'Rough mode', waarin je de apparaten handmatig ongeveer op een kaart sleept. Een klapmodus diende als test. Het eindresultaat werkte zoals bedoeld: binnen ongeveer 40 centimeter wees het systeem de plek aan. Onder de stapel dozen lag een oude koolmonoxidemelder die dringend om nieuwe batterijen vroeg. Wat vroeger een weekendproject van een specialist was, werd zo een klus die een thuisgebruiker met een codeeragent zelf kan klaren.

De piep bleek een oude koolmonoxidemelder die dringend nieuwe batterijen nodig had: een triviale oorzaak, gevonden met software die er speciaal voor werd gebouwd.

Wat het zegt over de codeeragent

Het verhaal is anekdotisch, maar het raakt aan een bredere verschuiving. Codeeragents maken software rendabel die nooit gebouwd zou worden omdat ze maar één keer nodig is. Willison is daarin een graadmeter: hij documenteert al jaren hoe hij taalmodellen in de praktijk gebruikt en voegde in dezelfde week de nieuwe modellen Fable 5.2 en Mythos 5.2 toe aan zijn commandoregeltool llm-anthropic. Die modellen kosten 8 en 40 dollar per miljoen tokens, 20 procent minder dan voorheen, en Fable scoort 65 bij Artificial Analysis. De concurrentie zit niet stil: Cursor en Google geven hun codeeragents een stem, terwijl Claude Code nog stil blijft. Het Beep Locator-voorbeeld laat echter zien dat de waarde niet in de interface zit, maar in het vermogen om kennis, zoals een vergeten paper, om te zetten in werkende code.

Conclusie

Het mooiste aan dit verhaal is de disproportie: een geavanceerd lokalisatiesysteem om een vergeten koolmonoxidemelder te vinden. Juist daarin zit de les. Als software bijna gratis wordt om te maken, verschuift de vraag van 'is het de moeite waard?' naar 'wat wil ik weten?'. Dat de eerste aanpak faalde en een menselijke pragmatische ingreep nodig was, is net zo leerzaam. De agent levert de bouwstenen; de gebruiker blijft degene die bepaalt wanneer goed genoeg goed genoeg is.

▶ YouTube

Simon Willison vindt mysterieuze piep met hulp van Claude 2026

Bronnen:

 

simonwillison.net ↗
