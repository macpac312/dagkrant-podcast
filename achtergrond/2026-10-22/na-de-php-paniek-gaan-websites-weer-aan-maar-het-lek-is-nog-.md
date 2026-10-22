---
titel: "Na de PHP-paniek gaan websites weer aan, maar het lek is nog niet dicht"
url: https://fd.nl/tech-en-innovatie/1616229/veel-websites-offline-om-lek-in-software-en-angst-voor-cyberaanvallen
bron: aitech
kind: aitech
gegenereerd: 2026-10-22T09:32:39
kaarten:
  - "📍 Kaart: \"Overheden die sites uit voorzorg offline haalden\"\n   Regio: europe\n   Tweede partij (blauw): Nederland, België, Finland, Frankrijk, Duitsland\n   Strategische punten: Den Haag (NCSC) (capital), Parijs (capital), Helsinki (capital)"
---

© fd.nl

Twee kritieke PHP-lekken (score 9,2) dwongen DigiD, MijnOverheid en honderden sites offline.

Uitgelekte details op Hacker News haalden de patch een dag naar voren.

AWS zag misbruik al op 17 oktober; een lek zou met de spoedpatch niet volledig dicht zijn.

De echte schade zit in de lange staart van slecht onderhouden servers.

Een stille ruggengraat die ineens hoorbaar kraakte

PHP is het soort technologie waar niemand aan denkt zolang het werkt. De taal draait onder bijna 70 procent van alle websites, van WordPress en Wikipedia tot, historisch, grote delen van Facebook. Juist die alomtegenwoordigheid maakte de twee lekken die samen als PHP2Shell bekend werden zo gevaarlijk: aanvallers konden op afstand en zonder in te loggen een server overnemen, met volgens de Amerikaanse NSA 'een directe route naar het bestandssysteem of de database'. Het PHP-securityteam gaf ze een score van 9,2 op 10. Woensdag gingen in Nederland DigiD, MijnOverheid, de Tweede Kamer, het NCSC zelf, RTL, Tweakers, Stedin, de RET en ziekenhuizen uit voorzorg offline. Ook België, Finland, Frankrijk en Duitsland trokken overheidssites terug. Het is een schaal die herinneringen oproept aan Log4Shell eind 2021, toen een lek in een Java-bibliotheek wereldwijd vergelijkbare paniek veroorzaakte.

Waarom een patch ook een handleiding is

Het verloop laat de zwakke plek van gecoördineerde openbaarmaking zien. Normaal krijgen beheerders een patch en een korte voorsprong voordat aanvallers begrijpen wat er gerepareerd is. Die voorsprong verdween twee keer. Eerst lekten de details dinsdagavond uit op Hacker News, waardoor de update van donderdag naar woensdagmiddag werd gehaald. Daarna bleek uit onderzoek van Amazon Web Services dat een actor al op 17 oktober, vier dagen voor de openbaarmaking, een honeypot probeerde aan te vallen. 'Het blijft onduidelijk hoe de actor vóór de openbaarmaking aan exploitinformatie kwam', schreef AWS-beveiligingschef CJ Moses. Nieuw is de rol van AI: zodra een fix openbaar is, kunnen modellen de onderliggende bug met weinig moeite reverse engineeren. Costin Raiu van TLP:Black spreekt van een 'race to exploit' en verwacht de 'massale compromittering van elke kwetsbare webserver op internet'.

De bronnen lopen uiteen: het NCSC ziet geen 'actief misbruik', AWS stelt dat PHP2Shell 'nu breed in het wild wordt misbruikt'.

Wat het betekent voor Nederland en Europa

Dat de meeste sites donderdag weer draaiden, is geen eindpunt. Professor Alan Woodward van de Universiteit van Surrey wijst op 'een lange staart van websites die minder goed worden onderhouden': gemeentelijke subsites, verenigingspagina's en vergeten WordPress-installaties die geen beheerder meer hebben. Daar zal de schade zich de komende weken voordoen, vaak onzichtbaar, via backdoors die nu worden geplaatst en pas later worden gebruikt. De Guardian citeert een infrastructuurexpert die Russische staatsactoren of georganiseerde criminelen als waarschijnlijke uitbuiters noemt. Voor Nederland legt de episode ook een ongemakkelijke afhankelijkheid bloot: kritieke overheidsdiensten draaien op open-sourcesoftware die door een kleine stichting wordt onderhouden. Het verhaal raakt aan het debat elders in deze krant over AI-risico's, dat meestal over toekomstige modellen gaat. Hier is de AI-dreiging concreet en nu: de tijd tussen patch en massaal misbruik krimpt van weken naar uren.

Conclusie

De preventieve blackout was verstandig en laat zien dat Europese overheden geleerd hebben van Log4Shell. Maar het centrale probleem is niet opgelost: een patch die onvolledig blijkt, een derde bug en bewijs van misbruik vóór de openbaarmaking. Het oude model van embargo plus patch werkt slecht wanneer AI een fix binnen uren in een aanval vertaalt. Wie software zo breed inzet als PHP, zal moeten investeren in onderhoud en snelle uitrol, niet alleen in noodstops.

▶ YouTube

PHP Just Had Its Worst Day Ever (PHP2Shell)

Bronnen:

 

nrc.nl ↗

 • 

theguardian.com ↗

 • 

wired.com ↗
