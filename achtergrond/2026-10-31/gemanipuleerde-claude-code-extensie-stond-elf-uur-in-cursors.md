---
titel: "Gemanipuleerde Claude Code-extensie stond elf uur in Cursors marketplace"
url: https://the-decoder.com/malicious-claude-code-extension-in-cursors-marketplace-attempted-remote-access-and-data-theft/
bron: aitech
kind: aitech
gegenereerd: 2026-10-31T05:40:10
---

© the-decoder.com

Gemanipuleerde Claude Code-extensie stond ongeveer elf uur in Cursors marketplace.

Tot 5000 gebruikers geraakt; malware verzamelde systeemgegevens en zocht toegang op afstand.

Cursor haalde de hele marketplace offline; Anthropic was niet betrokken bij de extensie.

AI-codeertools worden een aantrekkelijk doelwit: ze draaien met ruime rechten op ontwikkelaarsmachines.

Een vertrouwde naam als vermomming

Op donderdag stond in de extensie-marketplace van code-editor Cursor ongeveer elf uur lang een gemanipuleerde versie van de Claude Code-extensie. Volgens Cursor kunnen tot 5000 gebruikers zijn getroffen. De extensie probeerde gegevens als hostnaam, gebruikersnaam, besturingssysteem en publiek IP-adres te verzamelen en een verbinding op te zetten waarmee de aanvaller op afstand toegang kon krijgen. Dat laatste zou op de meeste machines volgens Cursor niet gelukt zijn, omdat daarvoor beheerdersrechten nodig zijn. Anthropic had geen enkele rol bij de ontwikkeling van deze versie. Na de ontdekking haalde Cursor de extensie weg en zette het de volledige marketplace offline; pas nadat samen met providers de malware was geneutraliseerd en er geen verder risico meer was, kwam de winkel terug. Beveiligingsonderzoekers, onder wie die van Phorion, publiceerden analyses van de backdoor.

Waarom AI-editors kwetsbaar zijn

Het incident legt een structureel zwak punt bloot. Cursor is gebouwd op de open broncode van Visual Studio Code, maar heeft geen toegang tot Microsofts eigen extensiewinkel en leunt daarom op een alternatieve marketplace. Zulke open registers zijn de afgelopen jaren herhaaldelijk misbruikt met nagemaakte of besmette extensies. Het verdienmodel van de aanvaller is eenvoudig: ontwikkelaars zitten op waardevolle toegang, van broncode en cloudsleutels tot cryptowallets, en installeren extensies vaak zonder controle. AI-codeerassistenten maken dat risico groter. Ze krijgen bewust ruime rechten om bestanden te lezen en commando's uit te voeren, en een populaire naam als Claude Code wekt direct vertrouwen. Dat Cursor de hele marketplace offline haalde, is dan ook een veelzeggend signaal: kennelijk kon het niet snel genoeg uitsluiten dat er meer mis was.

Een extensie installeren is code van een onbekende uitvoeren met de rechten van de ontwikkelaar. De naam op het etiket is geen garantie.

Gevolgen voor ontwikkelaars en bedrijven

Voor wie de extensie recent installeerde, is het advies helder: verwijderen, de machine controleren en wachtwoorden en sleutels die op dat systeem stonden roteren. Voor organisaties is de les breder. Ook in Nederland en Europa groeit het gebruik van AI-codeertools snel, vaak buiten het zicht van IT-beveiliging. Onder de Europese NIS2- en Cyber Resilience-regels wordt de keten van software die bedrijven gebruiken nadrukkelijker hun verantwoordelijkheid; een editorextensie is daar onderdeel van. Het incident valt bovendien in een week waarin de AI-sector onder vergrootglas ligt, van Googles koersval tot de vraag hoe autonoom AI-agents mogen handelen. Hoe meer bevoegdheden agents krijgen, hoe groter de schade van een besmette schakel.

Conclusie

Elf uur en maximaal 5000 gebruikers klinkt beperkt, en de snelle, drastische reactie van Cursor verdient lof. Maar het incident toont dat de beveiliging van AI-ontwikkeltools achterloopt bij hun macht. Een marketplace die een vervalste versie van een van de bekendste AI-extensies doorlaat, controleert onvoldoende op herkomst. Zolang uitgeversverificatie en ondertekening niet standaard zijn, blijft elke populaire AI-tool een ideale vermomming voor de volgende aanval.

▶ YouTube

Malicious Claude Code extension in the Cursor marketplace: Coralogix Security Advisory

Bronnen:

 

the-decoder.com ↗
