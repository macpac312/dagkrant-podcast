---
titel: "Together AI brengt Hurdle uit: open-source test voor Claude Code- en Codex-agents"
url: https://www.eweek.com/news/together-ai-hurdle-claude-code-codex-agent-evaluation/
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-11-28T05:39:47
---

Together AI bracht op 25 november Hurdle uit, een open-source testkader voor Claude Code en Codex.

Het meet hoe goed agents API's, documentatie en developertools gebruiken, met slagingspercentages, kosten en sessie-opnames.

Alleen in de sandbox controleert de proxy Guardian verzoeken; lokaal ontbreken de guards.

eWeek wijst erop dat een sandbox niet automatisch dure of ongewenste acties voorkomt.

Een benchmark voor echte taken

Een coding-agent kan de goedkoopste GPU-cluster vinden, het juiste commando schrijven en de taak toch laten mislukken door per ongeluk een cluster te kopen. Zulke fouten wil Together AI vangen voordat agents met echte diensten werken. Daarom bracht het bedrijf op 25 november Hurdle uit, een als npm-bibliotheek verspreid open-sourcekader dat na zes maanden interne tests naar buiten kwam. Het meet hoe goed Claude Code en Codex omgaan met API's, documentatie en developertools.

Het verschil met algemene codingbenchmarks is dat bedrijven eigen taken kunnen schrijven die hun klanten waarschijnlijk proberen. Hurdle kan dezelfde taak herhalen met verschillende modellen, instructies, vaardigheden en koppelingen en de slagingspercentages vergelijken. Zo is bijvoorbeeld te toetsen of een Model Context Protocol-server (MCP) een agent helpt een API te doorgronden.

Waar de veiligheid ophoudt

eWeek benadrukt dat het veiligheidsverhaal afhangt van de modus. Lokale runs zijn handig voor simpele evaluaties, maar missen de monitoring en guards van Hurdle. Together waarschuwt zelf dat een lokaal draaiende agent bij bestanden en echte inloggegevens kan. In de sandbox draait elke agent in een verse omgeving, en de lokale proxy Guardian leidt netwerkverzoeken om, toetst ze aan ingestelde regels en vervangt echte sleutels door tijdelijke.

Maar ook dat is geen garantie. Een sandbox voorkomt op zichzelf geen dure of ongewenste operaties: dat vraagt dat een beheerder de regels goed instelt. Het is dezelfde les als bij andere agent-tools: isolatie beperkt de schade, het beleid bepaalt wat is toegestaan.

Betekenis voor ontwikkelaars en bedrijven

Voor bedrijven die een API of cloudplatform aanbieden, is Hurdle een manier om te zien hoe agents hun product ervaren, nog voordat klanten dat doen. Het verschuift de vraag van "kan een model code schrijven" naar "kan een model veilig met mijn dienst werken". Dat past in een week waarin agents ook elders meer rechten krijgen, zoals bij Claude-artifacts die als desktop-app draaien.

Het kader meet bovendien kosten en tijd, geen slagingspercentages alleen. Voor Nederlandse en Europese teams die agents inzetten, is dat nuttig: wie weet wat een taak kost en hoe vaak hij mislukt, kan afwegen of automatisering rendeert en of toezicht nodig blijft.

Conclusie

Hurdle vult een gat tussen benchmarks en productie, maar het is een testbank, geen vangnet. De waarde zit in herhaalbare, vergelijkbare uitkomsten; de bescherming alleen in een zorgvuldig ingestelde sandbox. Wie agents op echte diensten loslaat, moet dus zowel meten als begrenzen, en niet denken dat het ene het andere vervangt.

▶ YouTube

Claude Code vs Codex vs Antigravity: een echte benchmarktest

Bronnen:

 

eweek.com ↗
