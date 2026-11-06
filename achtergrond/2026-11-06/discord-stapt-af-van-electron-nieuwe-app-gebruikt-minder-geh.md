---
titel: "Discord stapt af van Electron, nieuwe app gebruikt minder geheugen"
url: https://www.theverge.com/news/1027379/discord-ditching-electron-web-app
bron: aitech
kind: aitech
gegenereerd: 2026-11-06T05:34:55
---

© theverge.com

Discord bouwt zijn desktopapp volledig in Rust en laat Electron los.

Electron-apps draaien elk een eigen browser, wat veel geheugen kost.

Testversie gebruikt 290 MB RAM, tegen vaak 1 GB of meer nu.

Mogelijk keerpunt voor het web-als-desktopmodel van chat- en werkapps.

Het einde van een gemakzuchtig compromis

Discord neemt afscheid van Electron, het framework waarmee ontwikkelaars desktopapps bouwen met webtechniek. De chatdienst verhuist zijn hele client naar Rust, een moderne programmeertaal die draait om snelheid en geheugenveiligheid. Het nieuws, gebracht door The Verge, werd op Hacker News een van de best gelezen stukken van de dag, met ruim 400 punten en honderden reacties. Dat zegt iets: weinig onderwerpen zijn onder ontwikkelaars zo beladen als de vraag of Electron een zegen of een plaag is. Het framework, ooit door GitHub ontwikkeld voor de Atom-editor, maakte het mogelijk om met één codebasis in HTML, CSS en JavaScript een app voor Windows, macOS en Linux te leveren. Dat verklaart waarom Slack, Visual Studio Code, Microsoft Teams in zijn eerste versie en Discord er allemaal op bouwden. De prijs is bekend: elke Electron-app sleept een complete Chromium-browser mee.

Waarom Rust, en waarom nu

Discord is geen nieuwkomer met Rust. "We zijn sinds 2018 vroege gebruikers van Rust, en veel van onze infra, spraaktechniek en zelfs een deel van de huidige client is al Rust", schrijft technisch directeur Stanislav Vishnevskiy op X. Het bedrijf maakte eerder naam in ontwikkelaarskringen met de uitleg waarom het een drukbelaste interne dienst van Go naar Rust overzette: geen pauzes door garbage collection, voorspelbaarder prestaties. Die logica trekt het nu door naar de app die gebruikers zien. Volgens Vishnevskiy verdwijnen Electron én React Native; mobiele apps houden een native gebruikersinterface maar delen hun code met de desktop. De winst is meteen zichtbaar. Vishnevskiy toonde een Windows-client die 290 MB werkgeheugen gebruikte, terwijl de huidige app met een handvol servers al snel boven de 1 GB uitkomt. Dat is ruwweg een factor drie tot vier minder.

"De heilige graal was de hele client daarheen krijgen. Dat betekent dat Electron verdwijnt, en React Native ook." — Stanislav Vishnevskiy, CTO Discord

Gevolgen voor de rest van de softwarewereld

De vraag is of Discord een uitzondering is of een voorbode. Een volledige herbouw is duur, en weinig bedrijven hebben de Rust-expertise die Discord al jaren opbouwt. Voor kleinere teams blijft Electron, of lichtere alternatieven als Tauri, aantrekkelijk omdat het tijd bespaart. Toch verschuift de afweging. Nu AI-assistenten op de desktop zelf veel geheugen vragen en lokale modellen op laptops opkomen, wordt elke onnodige browserinstantie duurder. Tegelijk maakt AI het schrijven en omzetten van code goedkoper, wat een migratie als deze minder afschrikwekkend maakt. De keuze voor Rust heeft ook een veiligheidskant: geheugenveilige talen sluiten hele klassen kwetsbaarheden uit, een thema dat urgenter wordt nu modellen als OpenAI's GPT-6 Cyber in hoog tempo lekken vinden in grote codebases zoals Firefox. Voor gebruikers is het effect concreter: minder geheugengebruik betekent een snellere pc tijdens het gamen, een langere accuduur op laptops en minder reden om oudere hardware te vervangen. Dat laatste is geen bijzaak in een tijd waarin softwarebloat stilzwijgend de levensduur van apparaten bekort.

Conclusie

Discords overstap is een zeldzame erkenning dat gemak voor ontwikkelaars jarenlang is betaald door gebruikers, in de vorm van traag werkende laptops en volle werkgeheugens. Dat een grote speler nu de omgekeerde rekensom maakt, is belangrijker dan de 290 megabyte zelf. Het bewijs moet nog komen: een herbouwde client moet even stabiel en compleet zijn als de oude. Lukt dat, dan wordt het voor andere zware desktopapps lastiger om Electron te blijven verdedigen.

▶ YouTube

Discord stapt af van Electron, nieuwe app gebruikt minder geheugen 2026

Bronnen:

 

theverge.com ↗
