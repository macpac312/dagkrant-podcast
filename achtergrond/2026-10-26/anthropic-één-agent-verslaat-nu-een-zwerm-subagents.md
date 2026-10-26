---
titel: "Anthropic: één agent verslaat nu een zwerm subagents"
url: https://the-decoder.com/anthropic-says-one-ai-agent-beats-many-subagents-now-that-models-can-handle-complexity-alone/
bron: aitech
kind: aitech
gegenereerd: 2026-10-26T05:53:49
---

© the-decoder.com

Anthropic adviseert subagents samen te voegen tot één agent die context op aanvraag laadt.

Nieuwere modellen plannen complexe taken zelf in één lus; orkestratielagen worden overbodig.

In één vergelijking draaide de enkele agent ongeveer twee keer zo snel.

Een migratiekit op GitHub moet teams helpen de overstap te evalueren.

Een architectuur die het organogram kopieerde

Toen taalmodellen nog moeite hadden met lange, samengestelde opdrachten, was het logisch om taken op te knippen. Een orkestrator verdeelde het werk, gespecialiseerde subagents voerden deelopdrachten uit, en vaste pijplijnen hielden het geheel in het gareel. Anthropic stelt nu dat die aanpak achterhaald raakt. Op basis van ervaring bij meerdere zakelijke implementaties concludeerde het Applied AI-team dat één agent met zogeheten skills vaak beter presteert dan zowel monolithische prompts als subagent-opstellingen, op kwaliteit, kosten en wachttijd. Nieuwere modellen, vanaf Opus 4.5 en inmiddels Opus 5.5 en Fable 5.1, kunnen complexe plannen direct in één lus afhandelen. In één vergelijking was de enkele agent ongeveer twee keer zo snel als de multi-agentopzet. Anthropic publiceerde een migratiekit op GitHub.

Conway's Law en de Frankenprompt

Anthropic gebruikt een treffende vergelijking: Conway's Law voor agents. De wet stelt dat systemen de communicatiestructuur weerspiegelen van de organisatie die ze bouwt. Bij agents betekent dat: elk team levert zijn eigen subagent, tot er honderden overlappende agents zonder gedeelde standaarden zijn. Het gevolg noemt het bedrijf een Frankenprompt, een systeem-prompt waarin elk team regels toevoegt die elkaar uiteindelijk tegenspreken. Eén bedrijf had een dozijn gespecialiseerde subagents in zijn klantgerichte agent, met een inconsistente merkervaring en hoge wachttijden als resultaat. Volgens Anthropic dekken een schone prompt, vier à vijf datatools en vaste guardrails een groot deel van de toepassing. Het bedrijf paste dat zelf toe: de systeem-prompt van Claude Code werd voor nieuwere modellen met meer dan 80 procent ingekort, mede doordat skills en tools pas laden als ze nodig zijn.

De architectuur wordt een kopie van het organogram: elk team levert zijn eigen subagent, tot honderden overlappende agents zich opstapelen zonder gedeelde standaarden.

Gevolgen voor bedrijven en voor de markt

Voor bedrijven die het afgelopen jaar fors investeerden in multi-agentplatforms is dit ongemakkelijk advies. Een deel van die architectuur blijkt een tijdelijke oplossing voor de beperkingen van oudere modellen. Tegelijk is het advies niet belangeloos: wie consolideert op één krachtig model, wordt afhankelijker van de leverancier van dat model. Dat speelt nu de prijzenoorlog woedt, waarin OpenAI Anthropic-klanten met kortingen tot 90 procent probeert over te halen. Eenvoudiger architecturen maken overstappen technisch makkelijker, maar commercieel ook spannender. Het advies past bovendien in een bredere verschuiving in het vak: minder sturing van buitenaf, meer vertrouwen in het model zelf.

Er is ook een technische kant die vaak onderbelicht blijft. Elke overdracht tussen agents kost tijd en tokens: de orkestrator moet een taak formuleren, de subagent moet context opbouwen en het resultaat moet weer worden samengevat. Bij één agent die skills op aanvraag laadt, verdwijnt een groot deel van die overdrachten. Dat verklaart de gemeten snelheidswinst en raakt aan de kostenanalyse in deze krant over de prijzenoorlog, waaruit blijkt dat bij codeeragents het opnieuw meesturen van context het overgrote deel van de rekening vormt. Minder agents betekent minder herhaalde context.

Conclusie

Het advies van Anthropic is in de kern een les over software in een tijd van snel verbeterende modellen: elke laag die je bouwt om een zwakte van het model te compenseren, wordt technische schuld zodra het model beter wordt. Bedrijven doen er goed aan hun agentarchitectuur periodiek te toetsen tegen de nieuwste modellen, en complexiteit te behandelen als een kostenpost die zich moet bewijzen. Eenvoud is hier geen esthetische keuze, maar een concurrentievoordeel.

▶ YouTube

Single Loop vs. Subagents: Which Agent Architecture Wins?

Bronnen:

 

the-decoder.com ↗
