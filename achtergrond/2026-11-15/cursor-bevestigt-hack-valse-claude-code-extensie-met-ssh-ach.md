---
titel: "Cursor bevestigt hack: valse Claude Code-extensie met SSH-achterdeur in marketplace"
url: https://www.online-tech-tips.com/cursor-breach-malicious-claude-code-extension/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-15T05:35:33
---

© online-tech-tips.com

Aanvallers plaatsten op 29 oktober valse Claude Code-builds in de Cursor-marketplace.

Ingang: een gelekte toegangssleutel bij leverancier Fireworks AI, daarna gestolen inloggegevens.

Tot 5.000 ontwikkelaars liepen risico; de extensie voegde een SSH-sleutel van de aanvaller toe.

Cursor beëindigt de samenwerking met Fireworks; gebruikers moeten controleren en sleutels vernieuwen.

Een aanval via de keten, niet via Anthropic

De zaak laat zien dat de zwakste schakel vaak niet het product zelf is. Anthropic publiceerde de besmette versie niet en Cursor stelt dat er geen kwetsbaarheid in Claude Code zat. De aanval liep via een partner van Cursor, daarna via data in een gedeelde bucket en ten slotte via een publicatierecht in de marketplace. Cursor maakte de toedracht op 13 november bekend na een onderzoek van twee weken; Microsoft publiceerde op 30 oktober al een analyse van wat de nepextensie probeerde te doen. Het volgens Cursor bekende risico is smal: macOS- en Windows-gebruikers die op 29 oktober tussen ongeveer 02.27 en 13.35 uur Pacific Time installeerden of updatete.

Waarom dit zwaarder weegt dan de cijfers

De percentages zijn klein, maar de inhoud van de traces niet: onversleutelde credentials in agent-logboeken zijn precies wat aanvallers zoeken. BleepingComputer meldt dat die later zijn gebruikt om extra diensten te compromitteren. Cursor en de pers verschillen van toon: het bedrijf benadrukt een smalle, tijdelijke blootstelling, terwijl BleepingComputer het maximaal bereikbare publiek van 5.000 ontwikkelaars noemt. Beide kunnen kloppen, want blootstelling is niet hetzelfde als besmetting.

Conclusie

Voor ontwikkelaars is de les praktisch: wie in het venster installeerde, moet de stappen van Cursor volgen en sleutels vernieuwen, ook als het versienummer er goed uitziet. Voor het vak is de les groter. Agenttraces, extensies en marketplaces zijn nu onderdeel van de aanvalsketen. Dat Cursor Fireworks laat vallen, is een noodzakelijk signaal; de blijvende vraag is wie in die keten nog zichtbaar toezicht houdt.

▶ YouTube

Cursor bevestigt hack: valse Claude Code-extensie met SSH-achterdeur in marketplace 2026

Bronnen:

 

online-tech-tips.com ↗

 • 

bleepingcomputer.com ↗
