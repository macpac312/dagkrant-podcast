---
titel: "'Code Mode': Claude Code schrijft zelf de handleiding voor zijn gereedschap"
url: https://note.com/manabi_ai_note/n/nb2878a2e2b9c?hl=en
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-16T05:35:53
---

© note.com

Code Mode is een experimentele functie sinds versie v2.1.323 van 12 november 2026.

Claude schrijft een JavaScript-procedure die Claude Code in één keer uitvoert.

Dat bespaart heen-en-weer bij taken met tientallen gelijksoortige toolaanroepen.

De procedure is alleen zichtbaar in de transcriptweergave (Ctrl+O), niet in het gesprek.

Een handleiding die het model zelf schrijft

Op het Japanse platform note beschrijft een ontwikkelaar in speelse dialoogvorm een experiment dat hij Code Mode noemt. Claude Code stelt daarbij zijn eigen werkprocedure op voor het gebruik van gereedschap. Normaal gaat Claude stap voor stap: het toont een toolaanroep, leest het resultaat, denkt na over de volgende stap en roept opnieuw aan. Bij taken die dezelfde wijziging in tientallen bestanden doorvoeren, loopt dat op tot veel rondjes. In Code Mode schrijft Claude een procedure in JavaScript, en Claude Code voert die in één keer uit. De procedure kan taken parallel draaien, het resultaat van een stap in de volgende gebruiken en alleen de nodige delen teruggeven. In het voorbeeld uit de officiële documentatie, waarbij Claude de retry-limiet moet verhogen, zoekt het model het configuratiebestand, past het aan en draait de tests, en meldt het alleen de bestandslocatie en het testresultaat.

Voorwaarden en beperkingen

De functie is nog experimenteel. Ze vraagt Claude Code v2.1.323 of nieuwer; oudere versies starten zonder Code Mode, met de melding dat de functie nog niet voor het account is geopend. Verschijnt de melding ook met een nieuwe versie, dan adviseert de documentatie het netwerk te controleren en opnieuw te starten. Gebruik is beperkt tot interactieve terminalsessies; in -p (eenmalige uitvoering), de Agent SDK, VS Code-panelen, desktop-apps en cloudsessies werkt het niet. Op Windows is Git for Windows nodig. Ondersteund zijn Opus 5.5, Sonnet 5.5, Haiku 5.5 en Fable 5.2, en het account moet een betaald Claude-abonnement of een Console-account zijn. Het blogstuk bevat meer voorwaarden die in de aangeleverde tekst zijn afgekapt; die zijn hier niet verder uitgewerkt.

Omgeving

Code Mode

Interactieve terminal

ja

-p / Agent SDK

nee

VS Code / desktop

nee

Cloudsessies

nee

Waar Code Mode volgens de documentatie werkt.

"Claude schrijft procedures in JavaScript, en Claude Code voert ze in batches uit." Het kernidee van het experiment, zoals het blog het samenvat.

Wat het betekent voor controle en transparantie

Het idee verhoogt het tempo, maar verandert ook wat de gebruiker ziet. In de gewone modus is elke toolaanroep zichtbaar en kan de gebruiker bijsturen; in Code Mode ziet hij alleen de uitkomst, bijvoorbeeld de diff bij een bestandswijziging. De procedure is wel inzichtelijk, maar achter een extra handeling in de transcriptweergave. Dat is een afweging tussen efficiëntie en toezicht, die past bij een bredere beweging waarin modellen steeds meer zelf plannen. Intussen laat het nieuws zien dat Anthropic ook de omgeving rondom Claude Code uitbreidt, met thema's en bewegende achtergronden via mods in de desktopversie. Opvallend is dat Code Mode juist niet in die desktopversie werkt: de experimentele kernfunctie en de gebruiksvriendelijke omgeving lopen nog uiteen.

Conclusie

Code Mode is een slimme efficiëntiewinst voor repetitieve taken: het model verandert van uitvoerder in plan-schrijver. Of het breed wordt overgenomen hangt af van hoeveel vertrouwen gebruikers hebben in procedures die ze niet in het gesprek zien. Zolang de functie beperkt blijft tot de terminal, blijft het een proef voor ontwikkelaars die weten wat ze doen.

▶ YouTube

'Code Mode': Claude Code schrijft zelf de handleiding voor zijn gereedschap 2026

Bronnen:

 

note.com ↗
