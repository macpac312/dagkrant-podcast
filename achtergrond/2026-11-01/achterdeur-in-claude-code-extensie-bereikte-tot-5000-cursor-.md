---
titel: "Achterdeur in Claude Code-extensie bereikte tot 5000 Cursor-gebruikers"
url: https://www.notebookcheck.nl/Gemanipuleerde-Claude-Code-extensie-in-Cursor-plaatste-een-SSH-achterdeur.1438729.0.html
bron: aitech
kind: aitech
gegenereerd: 2026-11-01T05:23:47
---

© notebookcheck.nl

Besmette Claude Code-extensie stond op 29 oktober elf uur in Cursors marktplaats.

Versies 2.1.312 en 2.1.313 plaatsten een SSH-sleutel van de aanvaller en bleven actief.

Tot 5000 ontwikkelaars installeerden de extensie mogelijk; hun machines kunnen open staan.

AI-codetools met brede systeemrechten maken de softwareketen een aantrekkelijker doelwit.

Elf uur lang een vertrouwde naam

Op donderdag 29 oktober stond in de extensiemarktplaats van Cursor, de AI-code-editor die inmiddels eigendom is van SpaceX, een versie van Anthropics Claude Code-extensie die niet van Anthropic kwam. Volgens Cursor was de gemanipuleerde build beschikbaar van 5.27 uur tot 16.35 uur Amerikaanse oostkusttijd, ongeveer elf uur. De versies 2.1.312 en 2.1.313 voegden een SSH-sleutel van de aanvaller toe aan de machine van de ontwikkelaar, installeerden een mechanisme om na een herstart actief te blijven en stuurden systeemgegevens naar buiten: hostnaam, gebruikersnaam, besturingssysteem, pad naar de thuismap en publiek IP-adres. Versie 2.1.314 verving de malafide build. Cursor schat dat tot 5000 gebruikers de extensie mogelijk hebben geïnstalleerd en zegt te hebben vastgesteld dat geen andere extensies zijn gemanipuleerd. Onderzoekers van Phorion brachten de zaak naar buiten.

Waarom ontwikkelaars het doelwit zijn

Aanvallen op de softwareketen zijn niet nieuw. In 2018 kaapte een kwaadwillende de populaire npm-bibliotheek event-stream om cryptowallets leeg te halen, in 2020 liep de SolarWinds-aanval via een besmette update tot diep in Amerikaanse overheidsnetwerken, en in 2024 werd de achterdeur in xz-utils op het nippertje ontdekt. Het gemeenschappelijke patroon: niet het eindsysteem aanvallen, maar het vertrouwde kanaal waarlangs software binnenkomt. Editor-extensies zijn daarin een zwakke plek. Ze draaien met de rechten van de gebruiker, kunnen bestanden lezen en schrijven en processen starten. AI-codeassistenten als Claude Code versterken dat probleem, omdat hun functie juist vraagt om brede toegang tot code, terminal en configuratie. Een ontwikkelaarsmachine is bovendien zelden een eindpunt: ze bevat sleutels tot repositories, cloudomgevingen en productieservers.

Wie de ontwikkelaar binnendringt, staat één stap verwijderd van alles wat die ontwikkelaar mag aanraken; het gevaar van deze achterdeur zit niet in de vijfduizend laptops, maar in waar die laptops toegang toe hebben.

Wie draagt de verantwoordelijkheid?

Het incident legt een gat bloot tussen maker en distributeur. Anthropic bouwt de extensie, maar Cursor beheert de marktplaats waarin de besmette versie stond. Hoe de aanvaller de build daar kreeg, is uit de beschikbare informatie niet op te maken, en dat is precies de vraag die gebruikers beantwoord willen zien. Cursor benadrukt dat geen andere extensies zijn aangetast, maar elf uur is lang voor een pakket dat automatisch kan worden bijgewerkt. Voor Europese bedrijven valt dit samen met de Cyber Resilience Act, die softwareleveranciers verantwoordelijker maakt voor de veiligheid van hun producten en updates. Praktisch is het advies helder: controleer authorized_keys, roteer SSH-sleutels en andere geheimen die op de machine stonden, en loop systemen na op persistentie.

Conclusie

Dit was geen kwetsbaarheid in Claude Code, maar een les over het vertrouwen eromheen. Nu AI-assistenten steeds meer rechten krijgen op de machines van ontwikkelaars, wordt de marktplaats waarlangs ze binnenkomen kritieke infrastructuur. Dat Cursor de schade binnen een dag kon afbakenen is goed, maar onvoldoende: ondertekende builds die de maker zelf verifieert en die de editor afdwingt, horen standaard te zijn. Tot die tijd blijft elke extensie-update een sprong in vertrouwen die een aanvaller kan uitbuiten.

▶ YouTube

Fake Claude Code update in Cursor hid a backdoor. Check your computer (Oct 2026)

Bronnen:

 

theverge.com ↗
