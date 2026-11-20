---
titel: "Claude Code krijgt experimentele 'Code Mode': tools aan elkaar knopen met JavaScript"
url: https://gihyo.jp/article/2026/11/claude-code-mode
bron: aitech
kind: aitech
gegenereerd: 2026-11-20T05:36:10
---

© gihyo.jp

Claude Code 2.1.323 (12 november) brengt een experimentele Code Mode.

Claude schrijft een JavaScript-script dat meerdere tools ketent, filtert en parallel uitvoert.

Alleen het nuttige resultaat gaat terug naar het model, wat tokens en wachttijd kan besparen.

Uber meldt 52 procent lagere kosten per sessie met vier standaardinstellingen.

Van losse aanroepen naar een script

Wie Claude Code gebruikt, kent het ritme: het model roept een tool aan, leest de volledige uitvoer, beslist wat het volgende is en roept de volgende tool aan. Elke tussenstap kost tokens en tijd. Met Code Mode, volgens gihyo.jp op 12 november geïntroduceerd in versie 2.1.323 en op 17 november uitgelicht door het ClaudeDevs-account, schrijft Claude daarentegen vooraf een JavaScript-script dat de stappen koppelt. De uitkomst van de ene tool gaat direct naar de volgende. Bij veel zoekresultaten filtert het script wat Claude moet lezen. Anthropic noemt ook de toepassingen: dezelfde wijziging in veel bestanden en meerdere onafhankelijke commando's parallel. Het script is zichtbaar in de gespreksdetails, en de aangeroepen tools en diffs verschijnen gewoon in het gesprek, zodat de gebruiker kan controleren wat er gebeurt.

C

Wat je nodig hebt, en waar het knelt

De functie staat standaard uit. Gebruikers hebben de native versie vanaf 2.1.323 nodig, Windows vraagt Git for Windows, en het werkt alleen in interactieve terminalsessies, niet in het VS Code-paneel of de desktopapp. Verbinding moet rechtstreeks via een Claude-abonnement of Console-account lopen; gateways en Amazon Bedrock worden niet ondersteund, evenmin omgevingen met HIPAA-instellingen of zero data retention. Als Claude op een script wacht, geldt een tijdslimiet van tien minuten. Het onderliggende idee, de agent code laten schrijven die tools aanroept in plaats van tools één voor één, past bij een bredere beweging: wie veel context overbodig in het model laadt, betaalt ervoor. Dat blijkt uit het Uber-verhaal in dezelfde bronnen.

o

Wie minder context door het model laat lopen, betaalt minder en werkt sneller.

Gevolgen en perspectieven

Uber putte volgens VentureBeat begin 2026 zijn AI-budget uit en voerde vier standaardinstellingen in: een autocompactielimiet bij 400.000 tokens, gemiddeld redeneerniveau, korte cache voor subagents (vijf minuten) en lange voor de orchestrator (één uur), en geen vooraf geladen MCP-tooldefinities, die elke start 50.000 tot 70.000 tokens zouden kosten. Hoewel dat een andere maatregel is dan Code Mode, is de strekking gelijk: minder onnodige context. Tegelijk past dit in een markt waar tokenprijzen volgens de Ramp AI Index 21 procent daalden in zes weken en bijna 59 procent van de zakelijke tokenuitgaven naar Anthropic gaat. Efficiëntie wordt daarmee een concurrentiefactor. Een kanttekening: scripts kunnen fouten maken en bij gevoelige acties moet de gebruiker blijven letten op wat er wordt uitgevoerd.

Conclusie

▶ YouTube

Claude Code Full Course 2026 | How Senior Engineers Actually Build with AI

Bronnen:

 

gihyo.jp ↗

 • 

note.com ↗

 • 

quantrimang.com ↗

 • 

sunmedia.tw ↗

 • 

note.com ↗
