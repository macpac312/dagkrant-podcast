---
titel: "Lekken in ingebouwde browsers van VS Code, Cursor, Copilot, Codex en Claude Desktop"
url: https://www.helpnetsecurity.com/2026/10/29/research-ai-assistant-browser-vulnerabilities/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-02T05:42:46
---

© helpnetsecurity.com

Forever Security brak de ingebouwde browsers van vijf AI-codeassistenten.

Leveranciers versoepelden browserregels zodat AI lokale projecten kan tonen en lezen.

In VS Code en Codex kan één bestand nog altijd de hele schijf uitlezen.

Het afschuiven op 'Workspace Trust' botst met hoe ontwikkelaars agents gebruiken.

Drie regels die sneuvelden

Een gewone browser behandelt elke webpagina als vijandig. Daaruit volgen drie regels: een pagina kan geen commando's op je computer uitvoeren, een lokaal bestand kan je andere bestanden niet lezen, en alleen de browser zelf schrijft de adresbalk. Onderzoekers van Forever Security testten of die regels standhouden in de ingebouwde browsers van vijf AI-codeassistenten: Cursor, GitHub Copilot, OpenAI's Codex, Microsofts VS Code en Anthropics Claude Desktop. Elke leverancier had zijn browser versoepeld zodat de AI een lokaal project kon voorvertonen of kon lezen wat een tabblad toont. In alle vijf gaf een van de regels het op, schrijft onderzoeker Gal Weizman. Cursor voerde aanvallerscode uit, Copilot toonde een vals adres, en Codex, VS Code en Claude Desktop lieten één lokaal bestand de rest van de schijf lezen. Forever noemt het patroon EMBRACE: een ingebouwde browser die wordt vertrouwd alsof het een echte is.

Gemak dat de beveiliging opeet

De kern van het probleem is een ontwerpkeuze. Om een AI-assistent nuttig te maken, moet hij een lokaal project kunnen tonen en lezen wat er in een tabblad staat. Daarvoor zijn de beschermingslagen opengezet die een standalone browser wel heeft. Het gevolg is ernstig: een ontwikkelaar die in VS Code of Codex een gemanipuleerd project opent, kan met één klik SSH-sleutels, cloudcredentials en ontwikkelaarstokens kwijtraken. Die twee gaten waren op 29 oktober nog niet gedicht. Opvallend is de reactie van de leveranciers. Anthropic en Microsoft wezen Forevers meldingen af met een verwijzing naar Workspace Trust, de prompt die vraagt of een ontwikkelaar een projectmap vertrouwt. Anthropic wees een melding van Forever van 23 juli af, maar erkende een dag later een melding van Noma Security als geldig. Van OpenAI hoorde Forever sinds zijn melding van 27 juli niets.

Een vertrouwensprompt beschermt niet als de hele werkwijze erop gericht is dat de assistent projecten opent die de ontwikkelaar niet zelf heeft doorgelezen.

Wat ontwikkelaars en bedrijven moeten doen

De bevindingen passen in een bredere zorg over AI-agents als nieuwe aanvalsoppervlakte. Waar prompt-injectie het model misleidt, misbruikt EMBRACE de omgeving eromheen. Voor bedrijven betekent dit dat een ontwikkelaarslaptop met AI-tooling een directe route naar productiesystemen kan zijn. Praktisch ligt de les voor de hand: open onbekende repositories niet in een assistent met ingebouwde browser, bewaar geheimen niet als platte bestanden en gebruik kortlevende tokens. Structureel ligt de verantwoordelijkheid bij de leveranciers. Onder de Europese Cyber Resilience Act moeten makers van software kwetsbaarheden actief afhandelen; een melding afdoen met 'de gebruiker had niet moeten vertrouwen' zal die toets op termijn lastig doorstaan.

Conclusie

Dit onderzoek laat zien dat AI-codeassistenten oude, beproefde beveiligingsprincipes inruilen voor gemak, en dat leveranciers de rekening bij de gebruiker leggen. Dat is onhoudbaar. Een assistent die zelf links aanbiedt en projecten opzet, kan zich niet verschuilen achter een vertrouwensvraag aan de mens. Zolang VS Code en Codex ongepatcht zijn, is voorzichtigheid geboden; daarna moet de sector de ingebouwde browser weer als vijandig terrein behandelen.

▶ YouTube

De browser in Cursor, VS Code en Claude Desktop kan uw bestanden lezen.

Bronnen:

 

helpnetsecurity.com ↗
