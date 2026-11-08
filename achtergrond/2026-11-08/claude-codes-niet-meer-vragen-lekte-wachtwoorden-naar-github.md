---
titel: "Claude Code's 'niet meer vragen' lekte wachtwoorden naar GitHub"
url: https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-08T05:38:31
---

© thehackernews.com

Apiiro vond 2539 geheimen in 1994 openbare GitHub-repositories, via Claude Code-instellingen.

'Niet meer vragen' bewaart goedgekeurde commando's letterlijk, inclusief wachtwoorden en API-sleutels.

Het lek ontstaat pas als ontwikkelaars dat instellingenbestand meecommitten en pushen.

Geen bug maar gedrag: een oud patroon dat met AI-agents opnieuw opduikt.

Een gemaksknop met een geheugen

Claude Code, de programmeeragent van Anthropic, vraagt toestemming voordat het een commando uitvoert. Wie dat telkens moet bevestigen, kiest al snel voor 'Don't ask again'. Het commando komt dan op een lijst van toegestane acties in een instellingenbestand in de projectmap, zodat de agent het voortaan zonder vragen mag draaien. Het probleem: dat gebeurt letterlijk. Stond er in het commando een wachtwoord, een token of een API-sleutel, dan staat die nu ook in het bestand. Beveiligingsbedrijf Apiiro zocht openbare GitHub-repositories af en vond zo 2539 geheimen in 1994 repositories, meldt The Hacker News. Het bericht werd op Hacker News druk besproken. Dat zegt iets over de schaal: dit is geen randgeval van een paar onvoorzichtige gebruikers, maar een patroon dat ontstaat zodra een gemaksfunctie en een gewone werkwijze elkaar raken.

Geen bug, wel een ontwerpvraag

Strikt genomen doet Claude Code wat het belooft: het onthoudt een toestemming. Het lek ontstaat door de combinatie met menselijk gedrag, het meecommitten van een bestand dat er onschuldig uitziet. Dat maakt het een bekend patroon. Wachtwoorden in configuratiebestanden, sleutels in scripts en tokens in de geschiedenis van een repository zijn al zo lang een probleem als openbaar versiebeheer bestaat. GitHub zelf scant openbare repositories om die reden op bekende sleutelformaten. Nieuw is dat een AI-agent zo'n bestand automatisch vult, zonder dat de gebruiker het ooit opent. Wie zelf een configuratiebestand schrijft, ziet wat erin staat; wie op een knop drukt, niet. Daarmee verschuift de vraag van gebruikersdiscipline naar ontwerp: zou een agent geheimen in een commando moeten herkennen, maskeren of weigeren op te slaan?

Het probleem zit niet in een bug, maar in de ontmoeting tussen een gemaksknop en een gewone git-gewoonte.

Gevolgen voor wie met agents werkt

De les is praktisch. Zet het lokale instellingenbestand van de agent in .gitignore, geef geheimen mee via omgevingsvariabelen in plaats van ze in commando's te typen, en roteer elke sleutel die mogelijk is gelekt, want verwijderen uit de huidige versie wist de git-geschiedenis niet. Het past in een bredere reeks deze week rond de Claude-producten. In dezelfde krant laten onderzoekers zien hoe kwaadaardige browserextensies via Claude Dispatch code kunnen uitvoeren, en tegelijk koppelt Claude in de VS via Plaid aan bankrekeningen. Hoe meer toegang een agent krijgt, tot terminal, browser en geld, hoe groter de schade van een kleine nalatigheid. Voor Anthropic, dat afstevent op een beursgang, is dit geen technisch detail maar een vertrouwenskwestie.

Conclusie

Dat 1994 repositories geheimen lekten, is minder een verwijt aan individuele ontwikkelaars dan aan een ontwerp dat te veel vertrouwt op hun discipline. Een agent die zelf bestanden schrijft, moet ook zelf voorkomen dat daar geheimen in belanden: herkennen, maskeren, of standaard buiten versiebeheer houden. Gemak en veiligheid hoeven niet te botsen, maar dan moet de veilige keuze de standaard zijn, niet de taak van de gebruiker.

▶ YouTube

Claude Code's 'niet meer vragen' lekte wachtwoorden naar GitHub 2026
