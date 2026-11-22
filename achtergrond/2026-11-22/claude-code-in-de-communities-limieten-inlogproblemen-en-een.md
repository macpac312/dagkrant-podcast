---
titel: "Claude Code in de communities: limieten, inlogproblemen en een telemetrie-checker"
url: https://vc.ru/ai/3270653-limity-claude-code-i-codex-kak-rabotayut-i-kak-ih-sbrosit
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-22T05:36:23
---

© vc.ru

Russische sites leggen uit hoe de 5-uurs- en weeklimieten van Claude Code en Codex werken.

Een Chinese opensourcetool claimt dat Claude Code elke 20 seconden telemetrie verstuurt.

Inlogproblemen kunnen komen door regionale beperkingen: Rusland ontbreekt in de lijst van ondersteunde regio's.

Orca Bots laat je via Slack een Claude Code-werker een pull request laten maken.

Limieten als dagelijks gesprek

Op het Russische vc.ru verschenen deze week twee handleidingen die laten zien waar ontwikkelaars buiten het Westen tegenaan lopen. De eerste gaat over de gebruikslimieten van Claude Code en Codex: hoe de vensters werken, waar je je tegoed ziet en hoe je ze oprekt. De auteur schrijft dat de limieten bij beide ongeveer hetzelfde zijn ingericht en dat ze iedereen raken die dagelijks met agents werkt; in een oktobercohort vroegen acht deelnemers er vier weken lang naar. Het korte venster duurt vijf uur en start bij het eerste bericht, het lange een week. De meters tonen percentages, en niemand publiceert een exact aantal berichten omdat een bericht tientallen keren duurder kan zijn dan een ander. De gegevens zijn volgens de auteur op 21 november 2026 vergeleken met de documentatie van Anthropic en OpenAI, maar bedrijven wijzigen hun regels meerdere keren per jaar, dus controleer prijzen voor een aankoop. Opvallend is dat de auteur de limieten behandelt als een voorspelbaar budget: wie weet dat het weekvenster en het korte venster elkaar kunnen blokkeren, plant zijn zware taken en gebruikt kleinere modellen voor kleine klussen.

Inloggen, regio's en een lekdetector

De tweede handleiding behandelt inlogproblemen in de terminal. Het advies is om bij een sessie die niet opent te beginnen met de statuscommando en het webaccount, zodat je een clientprobleem kunt onderscheiden van een beperking aan Anthropics kant. Terminal en web kunnen verschillende bronnen van authenticatie hebben, en een IDE kan een andere binary draaien dan de gewone terminal. Belangrijker is de regionale kwestie: Anthropics beleid geldt voor Claude Code, Claude.ai en de API, en in de versie van 12 november 2026 ontbreekt Rusland in de lijst van ondersteunde regio's. Op een Chinese site, 80aj.com, beschrijft een ontwikkelaar die zijn Claude-account zag blokkeren hoe hij lekken in zijn lokale netwerk vond: Clash zonder TUN-modus en een kern die haperde. In zijn logs zag hij dat Claude Code elke 20 seconden telemetrie zou versturen, naar niet-vaste domeinen. Daarom bouwde hij claude-leak-check, een lokale, alleen-lezen tool die je met één npx-commando draait.

AI-codeertools hebben een vaste, regionaal gevoelige vingerafdruk: wie in de verkeerde regio of achter een lekkende proxy zit, merkt het eerst aan een geblokkeerd account.

Van limiet tot Slack-bot

Dat het dagelijkse gebruik zo veel gevoeligheid oproept, past bij de week van Anthropic. Een medewerker beweerde met Claude de Riemann-hypothese te hebben bewezen, wat de wiskundewereld eerst wil controleren, en volgens het beursnieuws verloor Anthropic op dag twee bijna 10 procent. Op de Japanse site note.com bespreekt een ontwikkelaar daarnaast Orca Bots, een functie van het opensourceprogramma Orca van Stably AI die sinds de bèta van 19 november een Slack-verzoek omzet in een pull request. De Bot woont in één map op de pc; het eigenlijke werk doet een aparte Claude Code-werker in een nieuwe git worktree, en het gebruik wordt van je eigen Claude- of ChatGPT-abonnement afgeschreven. Daarmee raken limieten, accounts en privacy elkaar, ook omdat de verbinding vanaf de pc naar Orca Cloud loopt zonder dat er poorten op de pc open hoeven: elke extra laag automatisering maakt de vraag belangrijker wie je tegoed en je gegevens beheert.

Conclusie

De vier bronnen vertellen hetzelfde verhaal vanuit verschillende landen: een betaald abonnement is een tijdsbudget met verborgen regels. Dat maakt ontwikkelaars creatief, maar ook afhankelijk van onbevestigde claims, zoals de 20-secondentelemetrie. Anthropic zou goed doen de regels, regio's en telemetrie zichtbaarder te maken. Tot die tijd blijft een gezonde scepsis nodig: één blogpost en een tool waarmee de maker naar eigen zeggen zes maanden Claude Code kreeg, zijn geen bewijs.

▶ YouTube

Limiet voor het gebruik van Claude-code: 6 correcties, gemeten (2026)

Bronnen:

 

vc.ru ↗

 • 

80aj.com ↗

 • 

vc.ru ↗

 • 

note.com ↗
