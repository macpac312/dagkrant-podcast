---
titel: "xAI zet onzichtbare watermerken in Grok-API voor zeven modellen"
url: https://borncity.com/news/grok-api-xai-aktiviert-unsichtbare-wasserzeichen-fuer-sieben-modelle/
bron: grok
kind: grok
gegenereerd: 2026-11-09T05:38:22
---

© borncity.com

xAI zet sinds 7 november onzichtbare tekstwatermerken aan voor zeven Grok-modellen.

Het merkteken ontstaat door statistische voorkeur voor tokens tijdens het genereren.

Korte teksten onder ongeveer 250 tokens zijn vaak niet eenduidig te herkennen.

De stap moet voldoen aan artikel 50 van de Europese AI-verordening.

Een stille wijziging met Europese wortels

Op 7 november heeft xAI onzichtbare tekstwatermerken standaard ingeschakeld voor zeven modellen in zijn Grok-API, meldt het Duitse BornCity. Het gaat om grok-4.7, grok-4.6, grok-4.5 en grok-4.3 en de varianten grok-4.20-reasoning, grok-4.20-non-reasoning en grok-4.20-multi-agent. Het watermerk geldt voor alle API-endpoints, zowel via het mondiale adres api.x.ai als via regionale knooppunten, en voor gewone tekst, gestructureerde JSON-uitvoer en argumenten bij functieaanroepen. Volgens de berichtgeving is xAI daarmee de eerste grote API-aanbieder die zo'n markering standaard aanzet. De aanleiding is Europees: artikel 50 van de AI-verordening verplicht aanbieders van generatieve systemen om hun output machineleesbaar als kunstmatig herkenbaar te maken. Opvallend is wat er buiten valt: de consumentendienst grok.com, de bijbehorende apps en de integratie in X worden niet gemarkeerd, net als het ontwikkelmodel grok-build-0.1 en uitgefaseerde modellen zoals grok-3. De markering raakt dus vooral ontwikkelaars en bedrijven die Grok in eigen toepassingen inbouwen, niet de gewone gebruiker die in de app een vraag stelt.

De techniek en haar grenzen

Technisch berust het watermerk op een statistische bevoorrechting van tokens uit een roterende keuzelijst tijdens het samplingproces. Het model kiest dus net iets vaker voor bepaalde woorden of tekens, zonder dat de lezer dat merkt. Dat principe is niet nieuw: academici beschreven zulke 'groene-lijst'-methoden enkele jaren geleden al, en Google past met SynthID een verwante techniek toe. De zwakte is eveneens bekend. Een statistisch signaal heeft massa nodig; volgens BornCity zijn er rond de 250 tokens nodig voor betrouwbare identificatie, en leveren eenregelige antwoorden of kleine JSON-structuren bij controle vaak 'onbepaald' op. Een HTTP-header, x-watermark met de waarde true, meldt de markering bij levering, maar verdwijnt zodra tekst wordt gekopieerd. Voor ontwikkelaars verandert er niets: het antwoordformaat blijft gelijk en code hoeft niet te worden aangepast. Of grondig herschrijven of vertalen het signaal wegpoetst, vermeldt de bron niet, maar bij vergelijkbare systemen is dat een bekende zwakke plek. Daarmee is het watermerk eerder een hulpmiddel voor platforms en toezichthouders die grote hoeveelheden tekst scannen dan een sluitend bewijs in een individueel geval.

Een watermerk dat pas na 250 tokens spreekt, beschermt tegen massaal geproduceerde teksten, niet tegen het korte bericht of de snelle reactie.

Gevolgen en perspectieven

Dat juist xAI als eerste grote aanbieder deze stap zet, is opmerkelijk. Het bedrijf profileert zich doorgaans als tegenhanger van strikte regulering, en de Grok-chatbot stond eerder onder Europees toezicht. Een tegemoetkoming aan Brussel kan helpen bij de positie van Grok op de Europese markt, nu het product via steeds meer abonnementen beschikbaar komt. Tegelijk laat de reikwijdte zien hoe smal de naleving is: juist de consumentenkanalen, waar de meeste tekst richting publiek gaat, vallen erbuiten. Concurrenten zoals OpenAI, Google en Anthropic zullen moeten kiezen of ze volgen; artikel 50 geldt voor alle aanbieders, maar de technische normen voor wat een voldoende watermerk is, zijn nog in ontwikkeling. Voor bedrijven die Grok via de API in eigen producten verwerken, ontstaat een nieuwe vraag: hun output draagt voortaan een merkteken dat zij zelf niet kunnen zien, maar anderen wel kunnen meten.

Conclusie

xAI zet een symbolisch belangrijke stap, maar de praktische waarde is beperkt. Een watermerk dat korte teksten niet herkent en consumentenkanalen overslaat, vangt slechts een deel van de AI-tekst die in omloop komt. De echte toets is of de rest van de sector volgt en of Europese toezichthouders deze invulling van artikel 50 voldoende vinden. Zonder gedeelde standaard en onafhankelijke detectie blijft het watermerk vooral een bewijs van goede wil.

▶ YouTube

xAI watermerkt alle tekst uit Grok API vanaf 7 november 2026

Bronnen:

 

borncity.com ↗
