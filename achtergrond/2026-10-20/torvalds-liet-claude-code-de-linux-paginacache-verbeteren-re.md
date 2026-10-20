---
titel: "Torvalds liet Claude Code de Linux-paginacache verbeteren; reviewers vonden een race"
url: https://news.google.com/rss/articles/CBMiYEFVX3lxTFBWNVVYdFVjSlNnZUd1SkhrMk5XQzJ2ajhWLTFGbm5Wbk9HalI2R3BMYjRFQlRITnc0LWxKMWJTeXZod0t6OFBsd1kySWxmaEUzdkRwWFNGd2ZJOHJ3aF9UXw?oc=5
bron: claude-desktop
kind: claude-desktop
gegenereerd: 2026-10-20T04:41:06
---

Linus Torvalds bevestigt dat Claude Code is gebruikt voor een patchserie voor de Linux-paginacache.

De patches moesten de prestaties van de paginacache verbeteren.

Reviewers vonden daarna een race condition, meldt The New Stack.

Les: AI versnelt kernelwerk, maar menselijke review blijft het vangnet.

AI in het hart van Linux

Linus Torvalds heeft bevestigd dat Claude Code, de programmeerassistent van Anthropic, is gebruikt voor een patchserie die de prestaties van de Linux-paginacache verbetert. Dat is symbolisch zwaar. De kernel is misschien wel het meest kritische open-sourceproject ter wereld: hij draait op servers, telefoons, routers en supercomputers. Torvalds stond jarenlang bekend om zijn scherpe afwijzing van slordige code, en de kernelgemeenschap heeft lang met argwaan gekeken naar AI-gegenereerde bijdragen. Dat de oprichter nu openlijk zegt dat een AI-assistent heeft meegeschreven aan zo'n centraal onderdeel, markeert een verschuiving: AI-hulp is in de kern van de open-sourcewereld aangekomen. The New Stack meldt echter dat reviewers daarna een race condition in de wijzigingen vonden.

Wat de race leert

Dat er een race condition werd gevonden, is minder verrassend dan het klinkt. Gelijktijdigheid is een van de moeilijkste domeinen in systeemprogrammering, en ook menselijke kernelontwikkelaars introduceren zulke fouten. Het verschil zit in de verwachting. Een AI-assistent produceert snel code die er plausibel en idiomatisch uitziet, wat de verleiding vergroot om haar minder kritisch te lezen. Dat het reviewproces de fout ving, bewijst juist dat het systeem werkt. Het past bij een bredere les die ook elders in deze krant opduikt: Microsoft adviseert bedrijven AI-agents te behandelen als potentiële interne dreiging, en een kernellek als PwnEscape laat zien hoe duur een fout in deze laag kan zijn. Snelheid aan de voorkant vraagt om zorgvuldigheid aan de achterkant.

De race condition is geen bewijs dat AI-code onbruikbaar is, maar dat review de beslissende stap blijft.

Conclusie

Dit voorval is precies het juiste precedent voor AI in kritische software: openlijk gebruik, gevolgd door strenge review die een echte fout vindt. Voor Anthropic is het reclame met een kanttekening. Voor de open-sourcewereld is de conclusie dat reviewcapaciteit de nieuwe bottleneck wordt. Als AI meer code levert, moeten mensen meer en beter lezen, niet minder.

▶ YouTube

I Read The Review For The AI Kernel Patch (And It’s Bad)
