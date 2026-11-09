---
titel: "Simon Willison: verstop AI-gegenereerde PR-beschrijvingen achter een uitklapblok"
url: https://simonwillison.net/2026/Nov/9/details-summary/
bron: aitech
kind: aitech
gegenereerd: 2026-11-09T05:38:22
---

© simonwillison.net

Simon Willison laat de meeste wijzigingen in zijn projecten als pull request door agents maken.

AI-beschrijvingen zijn accuraat en volledig, maar lezen juist daardoor als 'slop'.

Zijn oplossing: een korte menselijke intro, het agent-essay achter een uitklapblok.

De echte schaarste verschuift van code schrijven naar menselijke aandacht en oordeel.

Te goed om gelezen te worden

De meeste wijzigingen in de projecten van ontwikkelaar Simon Willison komen tegenwoordig binnen als pull requests die Claude Code of Codex voor hem openen. De pull request is zijn werkeenheid: hij bundelt er commits in, itereert erop tot een functie af is, documenteert beslissingen en voegt het eindresultaat samen. Het opvallende aan zijn observatie is dat het probleem niet zit in de kwaliteit van het agentwerk. Agents schrijven uitstekende beschrijvingen, accuraat en uitputtend. Juist dat maakt ze onleesbaar. 'Het is niet per se slop, maar het leest als slop', schrijft Willison. Zijn reflex — 'dat ga ik niet allemaal lezen' — komt voort uit een asymmetrie: de tekst kost meer tijd om te lezen dan het de auteur kostte om te laten schrijven, ook als die auteur hijzelf is. Dat is een nieuw soort informatieprobleem. Vroeger was een te korte of ontbrekende PR-beschrijving de klacht van reviewers; nu is het overvloed, en die overvloed is lastiger te corrigeren omdat elke zin op zich klopt.

Een HTML-element als redactionele ingreep

Willisons oplossing is opvallend eenvoudig. Het HTML-element details met een summary toont een ingeklapte kop die de lezer kan openklappen, en GitHub ondersteunt het rechtstreeks in Markdown. De openingsalinea van zijn pull requests kiest hij zorgvuldig, als de kortste tekst die een mens op snelheid brengt. Daaronder staat het volledige agent-essay, ingeklapt onder een kop met de modelnaam en vaak het inspanningsniveau, bijvoorbeeld 'Claude Opus 5.5 Medium'. Daarmee doet hij twee dingen tegelijk: hij herstelt de menselijke redactionele laag en hij maakt transparant welk deel door een model is geschreven. Dat laatste is meer dan etiquette. Elders in deze krant meldt xAI onzichtbare watermerken in zijn API-uitvoer, die bij korte teksten vaak niet eenduidig te herkennen zijn. Willisons expliciete label is de menselijke tegenhanger: geen detectie achteraf, maar openheid vooraf.

“Het is niet per se slop, maar het leest als slop.” — Simon Willison over door agents geschreven PR-beschrijvingen

Van productie naar aandacht

Het stuk zegt veel over waar softwareontwikkeling nu staat. Als agents het grootste deel van de code én de documentatie leveren, wordt menselijke aandacht de schaarse grondstof. Tegelijk laten andere berichten zien dat die aandacht niet kan verdwijnen. In een nieuwe benchmark van Alibaba lost zelfs de beste agent maar 26,4 procent van de echte taken volledig zelf op; bij bijna drie op de vier is menselijke hulp nodig. Goldman Sachs trekt Claude Code juist in voor medewerkers buiten de IT, een teken dat organisaties worstelen met wie deze gereedschappen verantwoord kan inzetten. De rode draad: agents verhogen de productie, maar het beoordelen, kiezen en verantwoorden blijft mensenwerk. Willisons kleine conventie erkent dat zonder het werk van de agent weg te gooien. De informatie blijft beschikbaar voor wie hem nodig heeft, inclusief toekomstige agents die de geschiedenis van een project willen begrijpen.

Conclusie

Willisons advies lijkt een kleine stijltip, maar raakt aan een fundamentele verschuiving. In een wereld waarin tekst vrijwel gratis is, wordt de korte menselijke samenvatting het waardevolste deel van elk document. Teams die agents serieus inzetten, doen er goed aan deze conventie over te nemen: label wat machinaal is, zet het menselijke oordeel bovenaan. Dat is geen wantrouwen tegenover AI, maar respect voor de tijd van de lezer.

▶ YouTube

Simon Willison: verstop AI-gegenereerde PR-beschrijvingen achter een uitklapblok 2026

Bronnen:

 

simonwillison.net ↗
