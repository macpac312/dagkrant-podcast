---
titel: "xAI bouwde stil een enorme batterij bij de Memphis-hub"
url: https://news.google.com/rss/articles/CBMijwFBVV95cUxNZ3k1RHBYcEFFdmhIX3JSRXJ2R2pRWnNrVGxaanMyWmVyOVh2UnJtYzdYTHRpODY2eWdLdkVBWDVQSmZsektCN0p0d3hFQ1RGRlhXQ3JORl91a0djNkxlbE9KVmQwOWNzdWFtWmF0eW1IMElSRUdHd0VoX0RTSGZRMjRQd1Z4QWxLa3gtaGo0Yw?oc=5
bron: grok
kind: grok
gegenereerd: 2026-09-12T03:36:25
---

grok

xAI bouwde stil een enorme batterij bij de Memphis-hub

   12 september 2026 | Door De Dagkrant Redactie

    - xAI plaatste in stilte een grootschalig batterijsysteem bij de supercomputer-hub in Memphis (Tennessee).

    - De installatie werd niet via een persbericht aangekondigd, maar kwam aan het licht via energie- en milieuanalyse van Canary Media.

    - Het datacenter, dat draait op duizenden Nvidia-GPU's voor Grok, legt een immense druk op het lokale elektriciteitsnet.

    - Stroomvoorziening en netstabilisatie dreigen de voornaamste flessenhals te worden voor de expansie van AI-infrastructuur.

     Memphis Datacenter Energieprofiel

         100+
         Megawatt piekbehoefte

         100k
         Nvidia H100/H200 cluster

         24/7
         Ononderbroken stroomvraag

Stilte rondom megawatt-infrastructuur

De techwereld is gewend aan ronkende persberichten over nieuwe doorbraken in kunstmatige intelligentie, maar Elon Musk’s AI-onderneming xAI koos voor een opvallend stille strategie in Memphis. Uit onafhankelijk onderzoek van vakblad Canary Media blijkt dat er pal naast de gigantische datacenter-hub een omvangrijk batterij-energieopslagsysteem (BESS) is verrezen. Geen officiële onthulling, geen optimistische tweets over duurzaamheid, enkel de feitelijke installatie van zware industriële accu's.

Dit gebrek aan openbaarheid is kenmerkend voor de manier waarop xAI te werk gaat bij het opschalen van zijn hardware. Om de maisvelden en loodsen in Tennessee te voorzien van de benodigde rekenkracht voor het trainen van de Grok-modellen, is een hoeveelheid stroom nodig die vergelijkbaar is met die van een middelgrote stad. Lokale nutsbedrijven en netbeheerders worden daarbij vaak voor voldongen feiten geplaatst.

     Hoe de BESS-batterij het net stabiliseert

       1. Netbelasting
       2. Bufferwerking
       3. Piekafvlakking

         Fase 1: Continue trainingsbelasting

         Stroomnet

         xAI Datacenter

         Fase 2: Batterijabsorptie tijdens daluren

         Net

         BESS Accu

         Cluster

         Fase 3: Directe levering bij piekvraag

         BESS Accu

         Cluster

       ◀ Vorige
       Volgende ▶

De harde grenzen van het elektriciteitsnet

De keuze van xAI om eigen opslagcapaciteit toe te voegen onderstreept een breder probleem binnen de technologiesector. Het Amerikaanse strostromennetwerk piept en kraakt onder de explosieve groei van generatieve AI. Traditionele energiecentrales kunnen de vraag niet snel genoeg bijbenen, en het verzwaren van hoogspanningsverbindingen neemt jaren in beslag. Datacenter-operators worden hierdoor gedwongen zelf creatieve en rigoureuze oplossingen te implementeren om stroomuitval of netoverbelasting te voorkomen.

In het geval van Memphis fungeert de batterij niet alleen als reserveopslag bij stroomstoringen, maar vermoedelijk ook als piekblusser. Wanneer duizenden processors tegelijkertijd intensieve berekeningen uitvoeren, ontstaan er scherpe transiënte belastingen op het net. De batterij kan die scherpe randjes eraf halen, waardoor xAI operationeel blijft zonder dat het lokale nutsbedrijf direct hoeft in te grijpen of de stekker eruit trekt.

     Veelgestelde Vragen over de xAI Batterij-integratie

       Waarom kiest xAI voor batterijen in plaats van extra generatoren?
       Dieselaangedreven noodstroomgeneratoren zijn niet geschikt voor continue netstabilisatie en stoten te veel emissies uit. Batterijen reageren binnen milliseconden op schommelingen in de stroomvraag.

       Is dit uniek voor xAI?
       Nee, ook concurrenten zoals Microsoft, Google en Amazon experimenteren volop met eigen energieopslag en rechtstreekse deals met kerncentrales en zonneparken om hun AI-ambities te voeden.

Stroom als ultieme valuta in de AI-race

Waar de vroege jaren van de AI-revolutie werden gedefinieerd door de beschikbaarheid van halfgeleiders en geavanceerde GPU's, verschuift het strijdtoneel in 2026 definitief naar energie. Wie de megawatts bezit, bepaalt hoe snel modellen als Grok kunnen groeien en concurreren met OpenAI en Google. De ongevraagde komst van het batterijsysteem in Memphis laat zien dat xAI bereid is om fysieke infrastructuur in eigen hand te nemen om de operationele continuïteit te waarborgen.

Conclusie

De stille bouw van een enorm batterijsysteem bij de Memphis-hub door xAI toont aan dat de fysieke beperkingen van het elektriciteitsnet de grootste remmend factor vormen voor de AI-industrie. Terwijl de publieke focus uitgaat naar software en modelprestaties, dicteert de beschikbaarheid van megawatts in de praktijk de ware snelheid van de technologische vooruitgang.

   Bronnen: Canary Media, interne netwerkanalyse, openbare registers elektriciteitsvoorziening Tennessee.

  let currentMechSlide = 0;
  const totalMechSlides = 3;

  function showMechSlide(n) {
    currentMechSlide = (n + totalMechSlides) % totalMechSlides;
    document.querySelectorAll('#mech-bess .mech-slide').forEach((el, idx) => {
      el.style.display = idx === currentMechSlide ? 'block' : 'none';
    });
    document.querySelectorAll('#mech-bess .pill').forEach((el, idx) => {
      el.classList.toggle('active', idx === currentMechSlide);
    });
  }

  function nextMechSlide() {
    showMechSlide(currentMechSlide + 1);
  }

  function prevMechSlide() {
    showMechSlide(currentMechSlide - 1);
  }
