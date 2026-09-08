---
titel: "Odido-hacker te horen in Opsporing Verzocht: ‘heel gewiekst’"
url: https://nos.nl/l/2630120
bron: nederland
kind: nederland
gegenereerd: 2026-09-08T03:15:51
---

- In het televisieprogramma  Opsporing Verzocht  heeft de politie voor het eerst een audiofragment vrijgegeven van de vermoedelijke Odido-hacker, die zich telefonisch voordeed als interne IT-collega.

  - De beller paste gerichte  voice phishing  (vishing) toe en loodste een nietsvermoedende medewerker naar een nagemaakte inlogomgeving om tweestapsverificatie te omzeilen.

  - Door de inbreuk verkreeg de aanvaller toegang tot systemen met persoonsgegevens van miljoenen Nederlandse telecomklanten, waaronder NAW-gegevens, IBAN-nummers en contractinformatie.

  - De publicatie van het geluidsfragment markeert een zeldzame tactische stap van het Openbaar Ministerie, gericht op herkenning van stem, intonatie en jargon door de directe omgeving.

     6,2 mln
     Getroffen dossiers bij het telecomlek

     1
     Telefoongesprek vereist voor de initiële penetratie

     MFA
     Omzeild via realtime  adversary-in-the-middle

     2026
     Uitzending Opsporing Verzocht met audio-analyse

Social engineering als kwetsbaarste schakel

De stemopname die de politie deze week openbaar maakte, toont een ontluisterende realiteit van moderne cybercriminaliteit: de meest geavanceerde verdedigingswallen bezwijken vaak niet op softwarefouten, maar op menselijke interactie. De verdachte belt de medewerker van Odido met een natuurlijk klinkende Nederlandse tongval, hanteert overtuigend bedrijfsintern jargon en wekt direct de indruk van een collegiale systeembeheerder die een dringend technisch probleem wil oplossen. Juist door die kalme, zakelijke houding wist de dader achterdocht te smoren.

Volgens rechercheurs was de aanvaller buitengewoon goed voorbereid. De beller wist precies welke namen en afdelingen binnen het telecombedrijf genoemd moesten worden om autoriteit uit te stralen. Deze methodiek — in het cyberdomein aangeduid als gerichte  vishing  (voice phishing) — is de afgelopen jaren geëvolueerd van gebrekkige helpdesk-scams naar minutieus geregisseerde infiltratiepogingen, veelal voorafgegaan door wekenlange verkenning via professionele netwerken en eerdere datadumps.

     1. Pre-texting
     2. Vishing Call
     3. AitM-Portaal
     4. Exfiltratie

         OSINT & Dossier
         Organogram & namen

         Doelwitanalyse
         Selectie werknemer

       Fase 1: De aanvaller verzamelt via LinkedIn en eerdere lekken context over interne structuren en IT-procedures.

         Vishing Call

         Medewerker

       Fase 2: De dader belt onder valse voorwendselen van IT-support en spoort aan direct in te loggen op een remote URL.

         Nep-Portaal
         (Lookalike URL)

         Session Hijack
         MFA-token relais

       Fase 3: Een zogeheten reverse-proxy spiegelt de inlogpoging en vangt gelijktijdig de MFA-code live af.

         Interne Database
         Klantgegevens

         Exfiltratie
         Miljoenen records

       Fase 4: Met geautoriseerde sessierechten onttrekt de aanvaller massaal klantdata naar externe servers.

     ◀ Vorige
     ▶ Play
     Volgende ▶

De techniek achter de AitM-invalshoek

Cruciaal in het dossier is de vaststelling dat multifactorauthenticatie (MFA) op zichzelf niet volstond om het netwerk af te grendelen. De aanvaller leidde het slachtoffer naar een zorgvuldig gekloonde inlogpagina via een domeinnaam die nauwelijks te onderscheiden was van de legitieme IT-omgeving. Dit type aanval staat bekend als  Adversary-in-the-Middle  (AitM).

Terwijl de medewerker zijn gebruikersnaam, wachtwoord en vervolgens zijn authenticatiecode intikte, stuurde het tussenliggende aanvallersplatform deze gegevens in realtime door naar de officiële inlogserver van Odido. Zodra de telecomprovider de sessie goedkeurde, onderschepte de crimineel het zogeheten sessiecookie. Daarmee kreeg de aanvaller toegang zonder dat daar verdere wachtwoorden voor nodig waren, en kon hij zich ongehinderd door interne systemen bewegen.

     Inbreuk
     Aanvaller ontfutselt inloggegevens via telefonisch contact en dringt binnen in Odido-systemen.

     Detectie & Melding
     Ongebruikelijke data-activiteit ontdekt; telecomprovider meldt het lek bij de Autoriteit Persoonsgegevens en start forensisch onderzoek.

     Strafrechtelijk traject
     Het Team High Tech Crime analyseert logbestanden, netwerkverbindingen en veiliggestelde opnames van interne telefoonlijnen.

     Uitzending
     Justitie toont audiofragment in  Opsporing Verzocht  in de hoop op een tip over de identiteit van de beller.

Waarom stemherkenning nu het zwaarste middel is

Het openbaar maken van audio-opnamen geldt in cybercrime-onderzoeken als een paardenmiddel. Digitale sporen — van IP-adressen via geanonimiseerde VPN’s tot betalingen via mixerdiensten — lopen in internationale netwerken immers regelmatig dood op serverfarms buiten de jurisdictie van Europese opsporingsdiensten. Wanneer technische attributie stagneert, verschuift het vizier noodgedwongen naar traditionele recherchemethoden.

Volgens rechercheurs beschikt het Openbaar Ministerie over meerdere opnamen waarin de crimineel interacteert met Odido-personeel. De hoop is gevestigd op kennissen, familie of voormalige handlangers die de specifieke dictie, spraakfoutjes of ademhaling herkennen. Tegelijkertijd onderstreept de zaak een structurele les voor het bedrijfsleven: verdediging tegen cyberaanvallen vereist naast sterke cryptografie ook  phishing-resistente  hardware-sleutels (zoals FIDO2/WebAuthn), waarmee zelfs een gemanipuleerde medewerker zijn credentials niet aan een tussenpartij kan overhandigen.

Conclusie

De vrijgegeven geluidsopname toont aan dat de grens tussen traditionele oplichting en grootschalige spionage- of afpersingsoperaties definitief is vervaagd. De inbraak bij Odido was geen gevolg van geavanceerde zero-day-exploits, maar van een overtuigend telefoongesprek gecombineerd met gestroomlijnde proxy-architectuur. Zolang organisaties vertrouwen op MFA-methoden die vatbaar zijn voor AitM-onderschepping, blijft de menselijke stem een van de dodelijkste wapens in het cyberarsenaal.

 Bronnen: NOS Nieuws, Tweakers, AVROTROS Opsporing Verzocht, Openbaar Ministerie (Team High Tech Crime).
