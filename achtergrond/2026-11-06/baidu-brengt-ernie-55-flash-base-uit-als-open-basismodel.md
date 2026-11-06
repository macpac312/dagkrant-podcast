---
titel: "Baidu brengt ERNIE 5.5 Flash Base uit als open basismodel"
url: https://the-decoder.com/baidu-releases-ernie-5-5-flash-base-with-280-billion-parameters-as-an-open-source-foundation-model/
bron: aitech
kind: aitech
gegenereerd: 2026-11-06T05:34:55
---

© the-decoder.com

Baidu brengt ERNIE 5.5 Flash Base uit: 280 miljard parameters, waarvan 14 miljard actief.

Het model komt bewust zonder finetuning; ontwikkelaars bepalen zelf de richting.

Getraind op 33,5 biljoen tokens, ontworpen voor context tot een miljoen tokens.

China's open-gewichtenstrategie zet druk op Amerikaanse, gesloten modellen.

Een model dat nog niet af is, met opzet

Baidu heeft ERNIE 5.5 Flash Base uitgebracht, een open basismodel met 280 miljard parameters. Opvallend is wat er ontbreekt: het model is bewust vrijgegeven zonder finetuning of post-training. Het kan dus nog geen nette chatbotantwoorden geven; het is ruw materiaal. Ontwikkelaars worden geacht zelf te bepalen welke kant ze ermee op gaan, al belooft Baidu dat een getrainde versie volgt. Dat is een strategische keuze voor een bedrijf dat in 2023 als een van de eersten in China een ChatGPT-concurrent lanceerde, maar daarna in eigen land terrein verloor aan rivalen als DeepSeek en Alibaba's Qwen. Vorig jaar gooide Baidu het roer om en maakte het de ERNIE 4.5-familie open. Met 5.5 Flash Base gaat het een stap verder: niet een kant-en-klaar product, maar een fundament voor anderen. De gewichten staan op Hugging Face in FP8 en BF16.

14 mld actief (5%)

280 mld totaal

Per input rekent slechts een twintigste van het model mee.

Waarom een kaal basismodel nuttig is

Voor ontwikkelaars en onderzoekers is een basismodel waardevoller dan het lijkt. Elke post-trainingsstap legt keuzes vast: welke toon, welke weigeringen, welke taken voorrang krijgen. Wie een gespecialiseerd model wil bouwen voor juridische teksten, medische dossiers of programmeerwerk, begint liever met een schone lei dan met een chatbot die al gewoontes heeft. De architectuur helpt daarbij. Als mixture-of-experts-model activeert ERNIE 5.5 per input slechts 14 van de 280 miljard parameters, ongeveer vijf procent, wat de rekenkosten drukt. Het is voorgetraind op 33,5 biljoen tokens met een trainingscontext tot 128.000 tokens, en ontworpen om bij finetuning en gebruik op te schalen naar een miljoen. Volgens Baidu presteert het op redeneren, code en lange teksten vergelijkbaar met open basismodellen van gelijke omvang, zoals DeepSeek V4 Flash en Xiaomi's MiMo V2.5. Dat zijn claims van Baidu zelf; onafhankelijke metingen moeten nog volgen.

Baidu levert geen product maar een fundament: wie wil weten wat ERNIE 5.5 kan, moet het eerst zelf afmaken.

Gevolgen: open gewichten als geopolitiek instrument

De release past in een duidelijk patroon. Sinds DeepSeek begin 2025 de markt opschrikte, kiezen Chinese bedrijven vaker voor open gewichten, terwijl de Amerikaanse koplopers hun beste modellen gesloten houden. Dat is ook een antwoord op exportbeperkingen: wie geen toegang heeft tot de snelste Amerikaanse chips, bouwt invloed door verspreiding in plaats van door exclusiviteit. Voor Europese bedrijven die niet afhankelijk willen zijn van een Amerikaanse API is zo'n model aantrekkelijk, al brengt Chinese herkomst eigen vragen mee over training en ingebouwde beperkingen. Het contrast met het nieuws van dezelfde dag is groot. OpenAI laat met GPT-6 Cyber zien hoe krachtig gesloten modellen worden bij het vinden van kwetsbaarheden, een vermogen dat juist bij open gewichten lastig in te perken is. En Meta moet zijn nieuwe trainingsvoorwaarden na wereldwijde kritiek pauzeren, een herinnering dat ook de herkomst van trainingsdata onder druk staat.

Conclusie

ERNIE 5.5 Flash Base is geen spectaculaire lancering, maar wel een veelzeggende. Baidu erkent impliciet dat het de chatbotrace in eigen land niet alleen kan winnen en zet daarom in op een rol als leverancier van fundamenten. Dat is verstandig: in een markt waar DeepSeek en Qwen de toon zetten, telt bereik onder ontwikkelaars meer dan een eigen app. Of het lukt, hangt af van onafhankelijke benchmarks en van wat de gemeenschap ermee bouwt.

▶ YouTube

ERNIE 5.5 Flash uitgelegd: 93.3 op MMLU — en je kunt het vandaag nog downloaden.

Bronnen:

 

the-decoder.com ↗
