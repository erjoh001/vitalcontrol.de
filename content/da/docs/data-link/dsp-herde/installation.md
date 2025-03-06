---
title: "Opsætning af Teknologi VitalControl:"
linkTitle: Opsætning
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definer synkroniseringsparametrene for dataudveksling mellem softwaren *Herde* og VitalControl-enheden.
weight: 10
kategorier: [DSP Herde]
translationKey: DSPherde/installation
---
Før den første [dataudveksling](../data-exchange/), skal teknologikoblingen til VitalControl-enheden oprettes og opsættes én gang.

{{% alert title="Opmærksomhed" %}}
Før opsætning af teknologikoblingen, skal du kontrollere, om 'VCSynchronizer'-softwaren er installeret på din PC; denne software er obligatorisk for dataudveksling. For at gøre dette, åbne Windows Start-menuen og søg i listen over dine applikationer efter en post kaldet 'Urban VitalControl'. Hvis du ikke kan finde en sådan post, [installer](../../vcsynchronizer/installation/) `VCSynchronizer`-softwaren på din PC.
{{% /alert %}}

For at opsætte teknologien, følg disse trin:

## Opret nyt parametersæt til dataudveksling med VitalControl-enhed {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Inden for softwaren `Herde`, åbne `Indstillinger`-vinduet. Afhængigt af konfigurationen af din brugergrænseflade, kan du åbne dette vindue via menupunktet `Organisation` i hovedmenuen (øverste niveau _Indstillinger_), i sidemenuen eller i din tilpassede værktøjskasse (vandret eller lodret).

   ![Software Herde: åbning af indstillingsmenu](../screenshots/settings.png "Herde: åbne Indstillinger")

1. Et pop-up vindue `Indstillinger` åbnes, i hvis venstre sidebjælke mange indstillingskategorier er listet. Åbn kategorien `Service` <span style="font-size: 140%">➊</span> og vælg underkategorien `Teknologi` <span style="font-size: 140%">➋</span>.

1. I overskriften af det højre hovedområde, vises nu en dropdown, hvor alle definerede teknologiparametersæt er listet. Antallet af opsatte teknologier vises til højre. Klik på knappen ![Software Herde: Opret nyt teknologiparametersæt](/icons/new.png "Herde: Opret Teknologikobling") `Opret nyt teknologiparametersæt` <span style="font-size: 140%">➌</span>.

![Software Herde: indstillingsskærm for teknologi](../screenshots/settings-technology.png "Herde: Indstillinger for Teknologi")

1. Et andet pop-up vindue åbnes. Indtast `VitalControl` som **Navn på forbindelsen** og `Urban VitalControl (Gen 2)` som **Type af Teknologi** og klik derefter på knappen `Accepter`.

   ![Software Herde: Opret nyt parametersæt for VitalControl-enhed](../screenshots/new-technology.png "Opret ny teknologi: VitalControl").

   Parametersættet for teknologi `VitalControl` er nu oprettet og skal konfigureres i de næste trin.

## Konfiguration: Grundlæggende indstillinger {#configuration-basic-settings}

Oprindeligt er fanen `Grundlæggende indstillinger` valgt på den viste skærm, som vist på figuren nedenfor. Foretag justeringer der i kategorierne `Eksternt program` <span style="font-size: 140%">➊</span>, `Dyredata` <span style="font-size: 140%">➋</span>, `Lokationer` <span style="font-size: 140%">➌</span> og `Forlader` <span style="font-size: 140%">➍</span> i henhold til dine gårdsspecifikke forhold.

   ![Software Herde: Konfiguration af grundlæggende indstillinger](../screenshots/basic-settings.png "Teknologi VitalControl: Grundlæggende indstillinger").
   
### Kategori `Eksternt program` <span style="font-size: 140%">➊</span> {#category-external-program-}

For at udføre dataudveksling mellem VitalControl og Herde Plus, er grundlæggende software [VitalControl Synchronizer](../../vcsynchronizer) nødvendig som eksternt hjælpeprogram. For den korrekte funktion af dette program skal nogle justeringer foretages i kategorien `Eksternt program` <span style="font-size: 140%">➊</span>.

- **Enhedsnavn til dataudveksling**:  
  Som standard er dette felt tomt. Det anbefales dog at indtaste navnet på din computer her. For at gøre dette, tryk på ikonet ![Herde Software: Opret ny teknologikobling](/icons/arrow-down.png "Herde: Opret teknologikobling") `Pil ned` i højre ende af drop-down feltet. Dit computernavn vil nu blive bestemt og vist til valg i drop-down listen. Når feltet er udfyldt med dit computernavn og denne indstilling er gemt, kan dataudveksling kun udløses fra din computer fremover.

- **Udfør i sti**:
  Indtast venligst `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` i dette inputfelt. Dette er den absolutte sti til programmet `VitalControl Synchronizer` (eller mere specifikt til filen `vcsynchronizer.exe`). Hvis målkataloget for dette program er blevet ændret under [installationen af VCSynchronizer](../../vcsynchronizer/installation), indtast venligst det valgte målkatalog her.


- **Program HerdePlus 🡒 Teknologi**:  
  Dette inputfelt skal udfyldes med værdien `vc_imp.bat`. Den tilsvarende navngivne batchfil specificerer rækkefølgen af operationer under dataimport.

- **Teknologi 🡒 Program HerdePlus**:  
  Dette inputfelt skal udfyldes med værdien `vc_exp.bat`. Den tilsvarende navngivne batchfil specificerer rækkefølgen af operationer under dataeksport.

### Kategori `Dyredata` <span style="font-size: 140%">➋</span> {#category-animal-data-}

Yderligere justeringer skal foretages i kategorien 'Dyredata' <span style="font-size: 140%">➋</span> for at få dataudvekslingen fuldt funktionel.

- **Dyrenummer**:  
  Denne indstilling bestemmer, hvilken ID dyr modtager til visning på VitalControl-enheden:
  - Hvis du har tildelt korte ID'er (`Staldenr.`, 2 til 6 cifre) til dine dyr, bør du vælge værdien 'Staldenummer' her: det viste ID for et dyr på VitalControl vil da svare til det staldenummer, der er tildelt dyret.
  - Hvis du **ikke** har tildelt korte ID-numre til dine dyr - dette er almindeligt i opfedningssektoren, for eksempel - bør du vælge værdien `Øremærkenr. (5 cifre)` her. Det viste ID for et dyr på VitalControl-enheden vil da svare til de sidste 5 cifre af ID'et, der er trykt på dyrets gule øremærke.
  
<br>

- **Transmitter nr.**:  
  Denne indstilling bestemmer det nummer, der forventes for et dyr under RFID-scanning:  
  - Hvis du sætter et halsbånd med en transponder på dine dyr eller sætter en øretransponder på dine dyr - for eksempel til identifikation ved den automatiske fodermaskine - bør du vælge værdien 'Transponder' her.
  - Hvis dine dyr eller kalve bærer elektroniske øremærker kodet med det officielle nationale 15-cifrede identifikationsnummer for dit dyr, som vil tjene til identifikation af dyret gennem hele dets liv, bør du vælge værdien 'Øremærkenr. (15 cifre)` her.

<br>

- **Minimumsalder for overførsel**:  
  Hvis `0` indtastes som værdi for dette inputfelt, vil **alle dyr** blive overført til VitalControl-enheden, uanset deres alder. En værdi større end `0` definerer minimumsalderen (i dage) for de dyr, der skal overføres. For eksempel, hvis **kun køer** skal overføres til enheden, skal en værdi på 600 dage (= 20 måneder) indtastes her som minimumsalder.

### Kategori `Lokationer` <span style="font-size: 140%">➌</span> {#category-locations-}

Brug denne kategori til at udelukke dyr på bestemte lokationer fra dataoverførsel til enheden. For at gøre dette, fjern markeringen fra de lokationer, hvor du **ikke** ønsker at overføre dyrene, der er opstaldet der, til enheden.

### Kategori `Afgang` <span style="font-size: 140%">➍</span> {#category-leaving-}

Sæt kryds ved 'Afgang i HERDEplus' her. På denne måde specificerer du, at dyr, der har forladt flokken, også slettes fra VitalControl-enheden under synkronisering.
Sæt også kryds ved 'Findes ikke i bestanden'. På denne måde specificerer du, at dyr på VitalControl, som ikke er kendt af `Herde`-softwaren, slettes fra VitalControl under synkronisering.

## Konfiguration: Teknologispecifikke indstillinger {#configuration-technology-specific-settings}

Klik derefter på fanen `Teknologispecifikke indstillinger` for at bestemme omfanget af dataudvekslingen. Det anbefales at markere alle afkrydsningsfelter, der er anført der, undtagen afkrydsningsfeltet `Gem importfil efter behandling`. Sidstnævnte afkrydsningsfelt er beregnet til diagnostiske formål og bør kun vælges, hvis det kræves af servicepersonale.

- **Maksimal alder for overførsel**:  
  Hvis `0` indtastes her som værdi, vil **alle dyr** blive overført til VitalControl-enheden, uanset deres alder. En værdi større end `0` definerer den maksimale alder (i dage) for de dyr, der skal overføres. Hvis for eksempel **kun kalve** skal overføres til enheden, skal en værdi på 90 dage (= 3 måneder) indtastes her som den maksimale alder.

   ![Herde Software: Konfiguration Dataudveksling](../screenshots/technology-specific-settings.png "Dataudveksling: specifikke indstillinger").

## Gem dataudvekslingsindstillinger {#save-data-exchange-settings}

Tryk på tasten `Gem (F2)` efter du har konfigureret alle konfigurationsparametre passende. Parametersættet for dataudveksling til VitalControl-enheden er nu gemt og klar til brug.  
Udfør en [dataudveksling](../data-exchange/) nu for at kontrollere, om de fastsatte indstillinger er gyldige, så du med succes kan udveksle data til og fra VitalControl-enheden.


