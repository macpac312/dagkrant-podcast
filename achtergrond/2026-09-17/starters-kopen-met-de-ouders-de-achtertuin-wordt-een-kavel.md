---
titel: "Starters kopen met de ouders — de achtertuin wordt een kavel"
url: https://www.ad.nl/wonen/de-starters-kunnen-niets-vinden-en-besluiten-daarom-samen-met-zijn-ouders-een-huis-te-kopen
bron: huizenmarkt
kind: huizenmarkt
gegenereerd: 2026-09-17T03:37:41
---

huizenmarkt

Starters kopen met de ouders — de achtertuin wordt een kavel

17 september 2026 — Achtergrond

    - Steeds meer starters zijn aangewezen op financiële steun en medefinanciering door de ouders.

    - De constructie transformeert van een incidentele jubelton naar structurele samenwoning en kavelopsplitsing.

    - Dit fenomeen werkt als een vermogensfilter dat sociale ongelijkheid op de woningmarkt versterkt.

    - Notarissen en hypotheekverstrekkers zien een sterke stijging in constructies met meerdere generaties op één akte.

     De Evolutie van Ouderlijke Financiële Hulp

             2018
             De 'Jubelton' en losse schenkingen als dominant instrument

             2022
             Gedeelde hypotheken en garantstelling door de familie

             2026
             Fysieke kavelopsplitsing en meergeneratiewoningen

Het nieuwe normaal in een vastgelopen markt

Wie vandaag de dag als starter de Nederlandse woningmarkt betreedt, merkt al snel dat de reguliere ladder vrijwel onbeklimbaar is geworden. Prijsstijgingen overtreffen structureel de loonontwikkeling, en het overbieden is verheven tot noodzakelijk kwaad. Waar de generatie voor hen nog kon volstaan met een starterslening of een kleine hypotheek op basis van een enkel inkomen, grijpt men nu naar ingrijpender middelen. Het gezamenlijk aankopen van vastgoed met de ouders is geen excentrieke oprisping meer van alternatieve woonpioniers, maar bittere noodzaak.

     Stappenplan: Van Ouderlijk Vermogen naar Woningbezit

             1. Vermogenspool
             2. Kavel & Bouw
             3. Juridische Akte

                 Stap 1: Samenvoegen van overwaarde en spaargeld
                 Ouders verzilveren overwaarde van hun eigen woning;
                 kinderen brengen hun maximale starterslening in.

                 Stap 2: Herinrichting van het perceel
                 Achtertuinen worden gesplitst voor mantelzorgwoningen
                 of bestaande boerderijen worden gesplitst in twee eenheden.

                 Stap 3: Notariële vastlegging van eigendom
                 Verdeling in appartementsrechten of vof-constructies
                 om fiscale en juridische risico's af te dekken.

             ◀ Vorige
             Volgende ▶

De achtertuin als juridische bouwput

In dorpen en middelgrote gemeenten krijgt deze trend een heel letterlijke gestalte. Omdat vrije kavels onbetaalbaar zijn en Vinex-wijken dichtslibben, wordt de eigen achtertuin opnieuw uitgevonden. Een tuinhuis transformeert via snelle vergunningstrajecten in een volwaardige woonunit, of het ouderlijk erf wordt kadastraal gesplitst. Het leidt tot een renaissance van de kangoeroewoning, waarin generaties dicht op elkaar leven. Dat biedt praktische voordelen — zoals mantelzorg en gedeelde energiekosten — maar vraagt ook om extreme disciplinering van familierelaties wanneer de economische tegenslag toeslaat.

     Verschillen in Toegang tot de Woningmarkt

Zonder Familiekapitaal

                - Afhankelijk van maximale NHG-hypotheek

                - Concurrentieeloos op oververhitte veilingen

                - Langdurig aangewezen op de vrije huursector

Met Familiedeelname

                - Verzamelde overwaarde als vliegwiel

                - Mogelijkheid tot contante biedingen

                - Directe toegang tot grondgebonden bezit

Een vermogensfilter dat de kloof verdiept

Hoewel de praktijk voor individuele huishoudens een slimme oplossing biedt om de wooncrisis te omzeilen, heeft de macro-economische trend een schaduwzijde. Het kopen met de ouders fungeert in de praktijk als een hard vermogensfilter. Starters wier ouders zelf geen overwaarde hebben opgebouwd — vaak door een huurverleden of migratieachtergrond — vallen definitief buiten de boot. De markt beloont niet langer inkomen of arbeidsproductiviteit, maar de erfelijke vermogenspositie. Zo verandert de vaderlandse huizenmarkt in hoog tempo van een doorstromingsinstrument voor de middenklasse in een feodale erfelijkheidszone.

Conclusie

Dat starters samen met hun ouders huizen kopen of kavels splitsen, is veelzeggend over de staat van het Nederlandse woonbeleid. Het toont aan dat burgers zelf ingrijpende creatieve oplossingen vinden voor een falende markt, maar het versterkt tegelijkertijd de maatschappelijke ongelijkheid. Zolang de nieuwbouwproductie achterblijft en de rente hoog blijft, zal de achtertuin als kavel alleen maar populairder worden. Ten koste van wie geen achtertuin heeft om op te bouwen.

 Bronnen: AD Wonen, NVM marktanalyse, Kadaster

let currentMechStep = 0;
function switchMech(n) {
    const panels = document.querySelectorAll('.ns-viz-panel');
    const pills = document.querySelectorAll('.ns-viz-pills button');
    if(panels.length === 0) return;
    panels.forEach(p => p.style.display = 'none');
    pills.forEach(b => b.classList.remove('active'));
    panels[n].style.display = 'block';
    pills[n].classList.add('active');
    currentMechStep = n;
}
function nextMech() {
    const panels = document.querySelectorAll('.ns-viz-panel');
    if(panels.length === 0) return;
    currentMechStep = (currentMechStep + 1) % panels.length;
    switchMech(currentMechStep);
}
function prevMech() {
    const panels = document.querySelectorAll('.ns-viz-panel');
    if(panels.length === 0) return;
    currentMechStep = (currentMechStep - 1 + panels.length) % panels.length;
    switchMech(currentMechStep);
}
