---
titel: "Acht desktop-apps laten meerdere AI-codeeragents tegelijk werken; isolatie verschilt sterk"
url: Pasquale Pillitteri
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-10-18T20:58:59
---

Acht desktop-apps laten meerdere AI-codeeragents tegelijk aan dezelfde codebase werken.

Ze verschillen in waar agents draaien: lokaal, in een container of in de cloud.

Bestandsisolatie varieert van aparte git-worktrees tot één gedeelde werkmap.

Wie de modelrekening betaalt, bepaalt of parallel werken een luxe of routine wordt.

Van één assistent naar een team van agents

Een jaar geleden was een AI-codeerassistent vooral een gesprekspartner naast de editor: jij vroeg, het model antwoordde, jij paste toe. Die verhouding is verschoven. Tools als Claude Code, Codex en Cursor, en editors als Zed, laten tegenwoordig meerdere agents tegelijk werken: één herschrijft een testsuite, een tweede migreert een bibliotheek, een derde onderzoekt een bug. Een vergelijking van acht desktop-apps laat zien dat dit er van buiten hetzelfde uitziet, maar van binnen sterk verschilt. De bronnenlijst bij dit stuk bleef leeg, dus de analyse hieronder steunt op het patroon uit de vergelijking en op algemene kennis over hoe deze producten zijn opgebouwd. Waar details per app ontbreken, noem ik die niet.

Isolatie is een spectrum, geen vinkje

Het meest opvallende resultaat is dat "meerdere agents" niets zegt over veiligheid. Aan de ene kant staan apps die elke agent in een eigen git-worktree zetten: lichtgewicht, snel, en conflicten blijven beperkt tot de merge. Aan de andere kant staan omgevingen waar agents in een container of cloud-sandbox draaien, met eigen processen, netwerkregels en rechten. Daartussen zit de pragmatische middenweg: agents delen de lokale map en vertrouwen op de gebruiker of op slimme vergrendeling. Dat laatste werkt prima bij twee agents op gescheiden taken en wordt kwetsbaar bij vijf agents die allemaal het configuratiebestand willen aanpassen.

Isolatie verhindert geen fouten van een agent; ze bepaalt alleen hoe ver die fout zich kan verspreiden.

Wie betaalt, bepaalt het gedrag

De derde as, de modelrekening, is minder technisch maar wellicht de belangrijkste. Wie met een vast abonnement werkt, gedraagt zich anders dan iemand die per token afrekent: de eerste start gemakkelijk drie agents, de tweede kijkt naar de teller. Dat sluit aan bij eerdere discussies in deze krant over gebruikslimieten bij AI-codeertools, waar een ruimere limiet in de praktijk kon uitpakken als een strakkere. Voor organisaties, ook banken en andere gereguleerde partijen, komt daar governance bij. Een agent met schrijfrechten in een gedeelde map is lastiger te auditen dan een agent in een sandbox met een afgebakende branch en een logboek. Wie modelrisico of change management beheert, zal dus eerst vragen waar de agent draait en wat hij mag aanraken, en pas daarna welk model eronder zit.

Conclusie

De markt concurreert nog op het aantal agents dat tegelijk kan draaien, maar de vraag die ertoe doet is wat er misgaat als ze dat doen. Worktrees zijn voor de meeste ontwikkelaars de verstandige standaard, sandboxes voor autonome runs met grotere rechten, en een gedeelde map is alleen verdedigbaar bij kleine, gescheiden taken. Kies dus eerst op isolatie en kostenmodel, en pas daarna op het model. Wie dat andersom doet, ontdekt de verschillen bij de eerste merge-conflicten of de eerste verrassende rekening.

▶ YouTube

Acht desktop-apps laten meerdere AI-codeeragents tegelijk werken; isolatie verschilt sterk 2026
