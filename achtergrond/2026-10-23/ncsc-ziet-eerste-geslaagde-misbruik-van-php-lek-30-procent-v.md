---
titel: "NCSC ziet eerste geslaagde misbruik van PHP-lek, 30 procent van de sites kan niet simpel patchen"
url: https://nos.nl/l/2636225
bron: aitech
kind: aitech
gegenereerd: 2026-10-23T04:28:17
---

© nos.nl

NCSC ziet eerste signalen van geslaagd misbruik van het PHP-lek PHP2Shell.

Het lek zit in geheugenbeheer en foutafhandeling: onderdelen die vrijwel elk verzoek raakt.

Volgens Hadrian draait 30 procent van de sites op versies waarvoor de patch niet werkt.

AI vond het lek; dezelfde versnelling maakt misbruik na publicatie razendsnel.

Van voorzorg naar daadwerkelijk misbruik

Het Nationaal Cyber Security Centrum heeft zijn toon in één dag bijgesteld. Waar de dienst eerder nog geen geslaagde aanvallen zag, meldde een woordvoerder donderdag dat er 'de eerste signalen binnenkomen' dat het grote lek in PHP met succes is misbruikt, en dat de situatie snel kan verergeren nu werkende aanvalsmethodes rondgaan. Wat die signalen inhouden, zegt het NCSC niet; onderzoek kan maanden duren. De onthulling had al tot een ongewone golf van voorzorgsmaatregelen geleid: RTL Nieuws en overheidssites gingen offline, gemeenten met Notubiz en boekhouders met Exact konden niet inloggen, en ook in Frankrijk, Canada, Japan en Duitsland gingen overheidssites tijdelijk op zwart. Kort voor 16.00 uur kwam de patch beschikbaar. In Azië vielen donderdag de sites van de Japanse belastingdienst, Japan Airlines en bank Nomura weg. PHP is ruim dertig jaar oud en draagt systemen als WordPress; naar schatting 70 procent van het web draait erop.

Waarom de patch het probleem niet oplost

Het venijn zit in de dynamiek na publicatie. Een patch is ook een routekaart: wie de oude en nieuwe code vergelijkt, ziet precies waar het mis zat. Cloudflare zag het aantal aanvalspogingen na het verschijnen van de reparatie oplopen van duizenden naar miljoenen. Tegelijk schat Hadrian dat bijna een op de drie websites op een verouderde PHP-versie draait waarvoor de fix niet werkt. Dat is het klassieke probleem van open-sourcefundamenten: oude installaties blijven jaren draaien op goedkope hosting, in vergeten intranetten en in maatwerk dat niemand durft aan te raken. De NOS telde zeker 113.000 Nederlandse sites die aantoonbaar een nieuwere, veilige versie draaien, maar ook circa 145.000 die mogelijk nog kwetsbaar zijn; op afstand valt niet te zien of die via een andere weg zijn afgeschermd. De vergelijking met Log4Shell en Heartbleed ligt voor de hand, al is de vakwereld verdeeld over de vraag of PHP2Shell die orde van grootte haalt.

Beschermd

Mogelijk kwetsbaar

113k

145k

Nederlandse websites naar PHP-versie, onderzoek NOS.

De PHP Foundation: de fouten zitten 'in delen van PHP die vrijwel elk verzoek raakt: geheugenbeheer en foutafhandeling'.

AI als vinder én als versneller

PHP2Shell is ook een kantelpunt in hoe kwetsbaarheden worden gevonden. Het lek werd half augustus onafhankelijk ontdekt door een onderzoeker van Calif binnen OpenAI's Patch the Planet-programma en door Wiz, dat zowel modellen van OpenAI als Google inzette; de PHP Foundation liet zijn code daarnaast scannen met een model van Anthropic. Het gecoördineerde embargo tot 22 oktober geldt als schoolvoorbeeld van verantwoorde openbaarmaking. Maar in dezelfde dagen doken ook lekken op in Node.js, GitLab, Plex en andere diensten. Cryptograaf Matthew Green vergelijkt het internet met 'droog tondel'. Latent Space plaatst daar tegenover dat kritieke software nu de grootste beveiligingsaudit uit de geschiedenis ondergaat. Beide kunnen waar zijn. Voor Nederlandse organisaties betekent het vooral dat de tijd tussen publicatie en misbruik is gekrompen tot uren, en dat het uitstellen van een PHP-upgrade geen gemakzucht meer is maar een risico.

Conclusie

PHP2Shell laat zien dat de zwakste schakel niet de ontdekking is, maar het onderhoud. De coördinatie werkte: patches lagen klaar, sites gingen tijdig uit de lucht. Toch is dat weinig waard als een derde van het web op software draait die niet meer te repareren valt. Nu AI lekken in tempo vindt, wordt achterstallig onderhoud een structureel veiligheidsprobleem dat bestuurders, niet alleen systeembeheerders, moeten oplossen. Wie nog op oude PHP draait, heeft geen patch-probleem maar een migratieprobleem.

▶ YouTube

php2shell uitgelegd: Ben jij getroffen en hoe kun je snel patchen? CVE-2026-109618, 109619

Bronnen:

 

nos.nl ↗

 • 

theguardian.com ↗

 • 

404media.co ↗

 • 

latent.space ↗

 • 

simonwillison.net ↗
