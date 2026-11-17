---
titel: "Grok Build en Grok Bot: wat de agents van SpaceXSI kunnen"
url: https://note.com/daikidomon/n/nbfe7ceffc872
bron: grok
kind: grok
gegenereerd: 2026-11-17T05:35:36
---

© note.com

SpaceXSI heeft twee agents: Grok Build voor code en Grok Bot als "AI-collega" in teams.

Grok Build kopieert het werkmodel van Claude Code en leest zelfs diens configuratiebestanden.

Plan-modus, subagents en worktrees moeten parallel werk veilig maken; de plan-modus heeft een gat.

Bij Grok Bot draait het om bestuur: wie leert, wie logt in, wie keurt goed, wie betaalt.

Een bedrijf met drie namen

Wie de berichtgeving over Grok volgt, moet eerst de naamgeving ontwarren. xAI werd in februari 2026 door SpaceX overgenomen, heette sinds juli SpaceXAI, en in oktober kondigde Musk een nieuwe naam aan: SpaceXSI. De officiële site gebruikt op 17 november die laatste schrijfwijze, terwijl de Japanse auteur van het overzicht op note de gangbare "SpaceXAI" aanhoudt. Het bedrijf heeft twee agents met Grok in de naam. Grok Build is de codeeragent voor ontwikkelaars, Grok Bot is een algemene agent die als teamcollega werkt. Een derde, het GitHub-project superagent-ai/grok-cli, is een community-product onder MIT-licentie dat zichzelf uitdrukkelijk als niet verbonden met xAI aanduidt. Verwarring is daarmee een reëel risico, vooral voor wie een agent toegang geeft tot zijn code.

Claude Code als maatstaf

Het opvallendste aan Grok Build is hoe weinig het zich wil onderscheiden van Claude Code. De functielijst is volgens het overzicht vrijwel gelijk, en het gereedschap leest naast AGENTS.md ook CLAUDE.md, .claude/rules en .cursor/rules, de hooks uit .claude/settings.json en .cursor/hooks.json, en kent skills in het SKILL.md-formaat en MCP-servers. Een team dat al in Claude Code investeerde, kan dus zonder herschrijven een tweede agent proberen. Dat is slim als instap, maar het erkent ook wie de standaard zet. Het gereedschap draait interactief in de terminal, headless met grok -p en in uitvoerformaten plain, json of streaming-json, en via ACP, een standaard waarmee editors een codeeragent aansturen. De bronnen verschillen overigens over de start van de bèta: The Decoder meldt 15 mei en alleen SuperGrok Heavy, de officiële blog noemt 25 mei en alle abonnees van SuperGrok en X Premium Plus. De auteur leest dat als een gefaseerde start, maar het bedrijf legt dat zelf niet uit.

Grok Bot: wie beslist namens het team?

Grok Bot is anders van aard. De agent draait per gebruiker op een eigen cloudcomputer, vraagt bevestiging voor handelingen die goedkeuring nodig hebben en kan sinds eind september door een heel team worden gedeeld, binnen Slack, Microsoft Teams en videovergaderingen. Versie 1.0 van 2 november zet dat centraal. De vier bestuursvragen uit het overzicht zijn leerzaam. Een les die één collega de Bot leert, geldt pas voor iedereen na goedkeuring van eigenaar of beheerder. De Bot kan werken met een eigen account, een door een beheerder gedeeld account of een apart botaccount, waarbij delen standaard uit staat. Alleen de aanvrager kan een bevestiging geven, en meestal gaat het gebruik ten laste van de persoon die antwoord krijgt. Als eigen voorbeeld noemt SpaceXSI de klantenservice, waar volgens het bedrijf het aantal zaken met 175 procent steeg zonder extra personeel, en waar anders misschien 200 mensen waren aangenomen. Het zijn cijfers van het bedrijf zelf, zonder onafhankelijke controle.

Conclusie

Grok Build is een volger die slim aansluit bij bestaande gewoontes, Grok Bot een poging om agents als collega te organiseren. Het onderscheid zal niet in functies liggen maar in vertrouwen: een plan-modus die schrijven via de shell niet blokkeert en een gedeeld account dat standaard uit staat, laten zien dat het bedrijf de risico's kent. De komende maanden bepalen of die kennis ook tot strakkere standaardinstellingen leidt.

▶ YouTube

How To Build AI Agents With Grok  [2026 Guide]

Bronnen:

 

note.com ↗

 • 

news.yahoo.co.jp ↗
