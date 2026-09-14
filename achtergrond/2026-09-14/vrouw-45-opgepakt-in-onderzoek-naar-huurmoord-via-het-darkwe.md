---
titel: "Vrouw (45) opgepakt in onderzoek naar huurmoord via het darkweb"
url: https://nos.nl/l/2630875
bron: nederland
kind: nederland
gegenereerd: 2026-09-14T03:38:42
---

NEDERLAND
     14 september 2026

Vrouw (45) opgepakt in onderzoek naar huurmoord via het darkweb

De aanhouding van een 45-jarige vrouw in Rotterdam werpt nieuw licht op de schaduwzijde van het darkweb. Wat begon als een journalistieke reconstructie, mondt uit in een strafrechtelijk onderzoek naar de handel in geweld.

    -  Arrestatie:  Een 45-jarige vrouw uit Rotterdam is opgepakt op verdenking van betrokkenheid bij het bestellen van een huurmoord.

    -  Aanleiding:  Het onderzoek startte naar aanleiding van onthullingen in een publicatie van RTL Nieuws over darkweb-diensten.

    -  Rol van politie:  De Eenheid Rotterdam behandelt de zaak, maar houdt verdere details over het mogelijke doelwit en motief angstvallig stil.

    -  Digitaal spoor:  De zaak onderstreept de toenemende samenwerking tussen opsporingsdiensten en journalisten bij het blootleggen van verborgen internetcriminaliteit.

Van journalistieke onthulling naar opsporingsonderzoek

De zaak kwam aan het rollen door grondig open-source- en darkweb-onderzoek van RTL Nieuws. Daaruit bleek dat Nederlandse gebruikers regelmatig pogingen wagen om via verborgen platforms criminele diensten in te huren, variërend van mishandeling tot liquidatie. Toen de bevindingen werden gedeeld met de autoriteiten, zagen opsporingsdiensten voldoende aanleiding om een strafrechtelijk onderzoek te starten. Dit resulteerde in de recente arrestatie van de verdachte in Rotterdam.

     Tijdlijn van de darkweb-zaak

         Juli 2026
         RTL Nieuws publiceert onderzoek naar huurmoordplatforms op het darkweb.

         Augustus 2026
         Politie analyseert aangeleverde data en identificeert mogelijke Nederlandse betrokkenen.

         14 sept 2026
         Aanhouding van de 45-jarige verdachte in Rotterdam door de Eenheid Rotterdam.

De illusie van anonimiteit op het darkweb

Platforms die huurmoorden aanbieden op het darkweb blijken in de praktijk vaak oplichterspraktijken te zijn, opgezet door cybercriminelen om Bitcoins af te troggelen van goedgelovige of wanhopige kopers. Toch verandert dit niets aan de strafbaarheid van de intentie. Het enkel benaderen van dergelijke sites en het betalen voor een misdrijf levert in het Nederlandse strafrecht al snel een verdenking van voorbereidingshandelingen of uitlokking op. Rechercheurs benadrukken dat de veronderstelde anonimiteit van Tor-browsers en cryptovaluta allang niet meer waterdicht is.

     Kenmerken van Darkweb-huurmoordplatformen

         95%+
         Blijkt scam/afpersing

         BTC
         Standaard betaalmiddel

         Art. 46
         Strafbaarstelling voorbereiding

Hoe opsporingsdiensten opereren in de digitale onderwereld

Het opsporen van verdachten die opereren op het verborgen internet vraagt om gespecialiseerde eenheden. Cyberteams van de nationale politie en regionale eenheden zoals Rotterdam bundelen hun krachten om betalingsstromen te ontrafelen. Hoewel transacties via cryptovaluta pseudoniem zijn, laten ze op de blockchain wel degelijk sporen na. Als een gebruiker op enig moment geld wisselt via reguliere exchanges met een geverifieerd ID, kan de anonimiteit als een kaartenhuis ineenzakken.

     Mechanisme van darkweb-transacties en opsporing

         1. Contact
         2. Betaling
         3. Ontmaskering

             Darkweb Forum

             Verdachte

             Cryptowallet

             Blockchain

             Blockchain Spoor

             Arrestatie

         ◀ Vorige
         Volgende ▶

Conclusie

De aanhouding in Rotterdam markeert een belangrijk moment in de kruisbestuiving tussen journalistieke onderzoeksjournalistiek en digitale wetshandhaving. Hoewel veel darkweb-diensten schijnvertoningen zijn om geld af te troggelen, laat deze zaak zien dat de politie streng optreedt tegen burgers die menen geweld te kunnen inkopen in de digitale onderwereld.

    Bronnen:  NOS.nl , RTL Nieuws, Politie Eenheid Rotterdam.

let currentMech = 1;
function showMech(n) {
  currentMech = n;
  document.querySelectorAll('.mech-slide').forEach((s, idx) => {
    s.style.display = (idx + 1 === n) ? 'block' : 'none';
  });
  document.querySelectorAll('.mech-pills .pill').forEach((p, idx) => {
    p.classList.toggle('active', idx + 1 === n);
  });
}
function nextMech() {
  currentMech = currentMech >= 3 ? 1 : currentMech + 1;
  showMech(currentMech);
}
function prevMech() {
  currentMech = currentMech
