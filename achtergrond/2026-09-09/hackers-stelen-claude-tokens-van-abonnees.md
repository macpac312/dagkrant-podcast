---
titel: "Hackers stelen Claude-tokens van abonnees"
url: https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/
bron: aitech
kind: aitech
gegenereerd: 2026-09-09T03:39:40
---

aitech

Hackers stelen Claude-tokens van abonnees

   Datum: 2026-09-09

    - Abonssee merkten onverklaarbaar tokenverbruik op zonder zelf actieve prompts in te voeren.

    - Anthropic bevestigt dat actieve sessietokens doelgericht worden gekaapt via gespecialiseerde malware.

    - De aanvallen richten zich met name op ontwikkelaars en intensieve zakelijke gebruikers met hoge quota.

    - Experts adviseren direct om actieve API-sleutels en browsersessies te revoken en te vernieuwen.

De anatomie van een digitale roof

Wat aanvankelijk leek op een administratieve fout of een softwarebug bij Anthropic, blijkt een gerichte aanvalgolf te zijn op de digitale portemonnee van AI-gebruikers. Abonnees van de populaire AI-assistent Claude zagen de afgelopen week plotseling hun maandelijkse tokenlimieten verdwijnen, terwijl hun eigen dashboards leeg bleven. Uit analyse van beveiligingsonderzoekers blijkt dat kwaadwillenden erin geslaagd zijn om actieve authenticatietokens te onderscheppen. Hiermee krijgen zij ongeautoriseerd toegang tot de rekenkracht van betalende accounts, om zo op kosten van een ander grootschalige AI-modellen te trainen of te bevragen.

     Impact op Claude-abonnees

         100%
         Gestolen quotum per gekaapt account

         24/7
         Continue ongemerkte uitbuiting

         API
         Primair doelwit van aanvallers

Hoe de sessiekaping in zijn werk gaat

De aanval maakt geen gebruik van complexe kwetsbaarheden in de core-architectuur van Claude zelf, maar richt zich op de client-zijde. Aanvallers verspreiden infostealer-malware vermomd als legitieme software of browserextensies. Zodra deze malware op het systeem van een slachtoffer actief is, leest deze de lokale browseropslag uit waar de sessie-cookies en OAuth-tokens versleuteld staan. Omdat deze tokens geldig blijven zolang de sessie niet expliciet wordt verbroken, kunnen de hackers ze externaliseren en nabootsen op externe machines. Hierdoor herkent het systeem van Anthropic de indringer niet als schadelijk; het verzoek komt immers van een legitieme, geauthenticeerde gebruiker.

     Tijdlijn van het lek

         Fase 1: Infectie

Installatie van infostealer via malafide downloads of besmette extensies.

         Fase 2: Extractie

Lokale tokens en sessie-cookies worden gekopieerd en doorgesluisd naar C2-servers.

         Fase 3: Misbruik

Hackers voeren geautomatiseerde API-calls uit om data te scrapen of modellen te voeden.

Anthropic onderneemt actie en verscherpt beveiliging

In een reactie laat Anthropic weten de situatie hoog op te nemen. Het bedrijf is gestart met het automatisch ongeldig maken van verdachte sessies en roept gebruikers op om hun wachtwoorden te wijzigen en tweefactorauthenticatie (2FA) te controleren. Desondanks benadrukken experts dat de verantwoordelijkheid bij SaaS- en AI-dienstverleners groter moet worden. Omdat tokens een steeds hoger economische waarde vertegenwoordigen — vergelijkbaar met cryptowallets — volstaat een standaard sessiebeheer niet meer. Strengere bind-adressen, kortere token-lifespans en IP-validatie zijn volgens security-analisten hard nodig om dit soort praktijken in de toekomst effectief te weren.

     Veelgestelde vragen over tokenveiligheid

         Hoe merk ik of mijn tokens gestolen zijn?

Controleer je dashboard op ongebruikelijke activiteit, plotseling lege limieten of logs met onbekende IP-adressen.

         Wat moet ik direct doen?

Log uit op alle apparaten, genereer een nieuwe API-key, scan je computer op malware en activeer 2FA.

Conclusie

De roof van Claude-tokens markeert een nieuwe fase in de cybercriminaliteit rond kunstmatige intelligentie. Nu AI-functionaliteit steeds dieper verweven raakt met zakelijke en persoonlijke workflows, transformeren inloggegevens en tokens in waardevolle assets die actieve bescherming vereisen. Zowel gebruikers als platforms zullen hun beveiligingsbewustzijn moeten opschroeven om te voorkomen dat de virtuele sleutels van de digitale toekomst te grabbel worden gegooid.

   Bronnen: https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/
