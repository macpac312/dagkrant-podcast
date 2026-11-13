---
titel: "IBM introduceert LLMON, een opmaaktaal voor taalmodellen"
url: https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite
bron: aitech
kind: aitech
gegenereerd: 2026-11-13T05:32:12
---

© huggingface.co

IBM introduceert LLMON, een opmaaktaal die structuur expliciet aan taalmodellen communiceert.

Structuur zit in gereserveerde special tokens in plaats van tekens als accolades en aanhalingstekens.

Unieke ID's koppelen instructies aan de data waarop ze werken, zoals functies en argumenten.

Twee previewmodellen (3B en 8B) zijn experimenteel; bewezen betrouwbaarheid ontbreekt nog.

Het probleem: JSON is voor parsers, niet voor modellen

Een taalmodel genereert het volgende token op basis van zijn context, en die context raakt in een lange taak gevuld met uiteenlopende componenten: een systeemprompt, eerdere gespreksbeurten, instructies over opgehaalde documenten, toolresultaten, gebruikersdata, outputvereisten en redeneerketens. Die rijke structuur is volgens IBM grotendeels impliciet voor het model, of verpakt in formaten als JSON die niet zijn ontworpen om door een LLM verwerkt te worden. Dat is een belangrijke reden dat vooral kleinere modellen broos zijn en onverwacht falen. Het gebrek aan expliciete structuur is ook een aanvalsvlak: prompt injection werkt doordat een model niet betrouwbaar kan onderscheiden wat instructie is en wat data. IBM heeft daarom LLMON ontwikkeld (LLM Object Notation, uitgesproken als ‘lemon’), nu beschikbaar in Granite 4.1 3B en 8B.

Hoe LLMON werkt

Het ontwerp rust op drie ideeën. Semantisch samenhangende componenten krijgen betekenisvolle tags, omsloten door gereserveerde special tokens. Dataschema's, inclusief nesting, worden zo vastgelegd dat ze voor een causaal model ondubbelzinnig zijn. En unieke ID's maken het mogelijk te wijzen naar een specifieke instructie ergens in de context en die te koppelen aan de data waarop ze moet werken, vergelijkbaar met hoe functies worden aangeroepen en argumenten doorgegeven in programmeertalen. Het verschil met JSON is principieel: de tokenizer wordt niet gedwongen de grammatica te respecteren, en een aanhalingsteken in een document is voor het model hetzelfde token als een aanhalingsteken dat een veld sluit. Escape-regels die voor een parser helder zijn, zijn voor een model slechts statistische patronen.

JSON was designed for parsers, not for causal language models.

Gevolgen en kanttekeningen

Als LLMON werkt zoals beloofd, raakt het twee zere plekken van de huidige AI-praktijk. De eerste is betrouwbaarheid van gestructureerde output: precies wat ontwikkelaars nodig hebben als modellen taken moeten automatiseren, een thema dat deze week ook terugkwam bij de opmars van snelle beslismodellen. De tweede is veiligheid. Wanneer instructies en data in aparte, door special tokens gemarkeerde vakken zitten, wordt het moeilijker om via een document of toolresultaat commando's binnen te smokkelen. Dat sluit aan bij de voorzichtigheid die bedrijven als United Airlines tonen tegenover AI-agents. Tegelijk zijn er forse kanttekeningen. Het zijn experimentele previews, het bronmateriaal levert geen benchmarkcijfers, en een nieuw formaat werkt alleen als modellen het moeten leren: de bestaande wereld van JSON-API's en tooling verdwijnt er niet door. Een standaard van één leverancier moet ook concurreren met formaten die al overal in zitten. Het is ook niet vanzelfsprekend dat special tokens aanvallen volledig uitsluiten; een model blijft statistisch.

Conclusie

LLMON is een logische stap: de AI-sector heeft jarenlang formaten voor machines gebruikt om met een statistisch model te praten, en betaalt daar in broosheid voor. IBM kiest voor structuur in het model zelf. Of het een standaard wordt hangt af van onafhankelijke metingen en adoptie buiten IBM. Voorlopig is het vooral een serieus ontwerpvoorstel voor het hardnekkigste probleem van agentische software: weten wat instructie is en wat data.

▶ YouTube

Hoe grote taalmodellen werken

Bronnen:

 

huggingface.co ↗
