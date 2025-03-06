---
title: "Oppsett av Teknologi VitalControl:"
linkTitle: Oppsett
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definer synkroniseringsparametrene for datautveksling mellom programvaren *Herde* og VitalControl-enheten.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Før den første [datautvekslingen](../data-exchange/), må teknologikoblingen til VitalControl-enheten opprettes og settes opp én gang.

{{% alert title="Oppmerksomhet" %}}
Før du setter opp teknologikoblingen, sjekk om programvaren 'VCSynchronizer' er installert på din PC; denne programvaren er obligatorisk for datautveksling. For å gjøre dette, åpne Windows Start-menyen og søk i listen over dine applikasjoner etter en oppføring kalt 'Urban VitalControl' der. Hvis du ikke finner en slik oppføring, [installer](../../vcsynchronizer/installation/) `VCSynchronizer`-programvaren på din PC.
{{% /alert %}}

For å sette opp teknologien, gjør følgende:

## Opprett nytt parametersett for datautveksling med VitalControl-enhet {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. I programvaren `Herde`, åpne `Innstillinger`-vinduet. Avhengig av konfigurasjonen av brukergrensesnittet ditt, kan du åpne dette vinduet via menyvalget `Organisasjon` i hovedmenyen (øverste nivå _Innstillinger_), i sidebarmenyen eller i din tilpassede verktøykasse (horisontal eller vertikal).

   ![Programvare Herde: åpning av innstillingsmeny](../screenshots/settings.png "Herde: åpne Innstillinger")

1. Et popup-vindu `Innstillinger` åpnes, i hvis venstre sidefelt mange innstillingskategorier er listet opp. Åpne kategorien `Service` <span style="font-size: 140%">➊</span> og velg underkategorien `Teknologi` <span style="font-size: 140%">➋</span>.

1. I overskriften til hovedområdet til høyre vises nå en rullegardinmeny der alle definerte teknologiparametersett er listet opp. Antallet oppsatte teknologier vises til høyre. Klikk på knappen ![Programvare Herde: Opprett nytt teknologiparametersett](/icons/new.png "Herde: Opprett Teknologikobling") `Opprett nytt teknologiparametersett` <span style="font-size: 140%">➌</span>.

![Software Herde: innstillingsskjerm for teknologi](../screenshots/settings-technology.png "Herde: Innstillinger for Teknologi")

1. Et annet popup-vindu åpnes. Skriv inn `VitalControl` som **Navn på tilkoblingen** og `Urban VitalControl (Gen 2)` som **Type teknologi** og klikk deretter på `Godta`-knappen.

   ![Software Herde: Opprett nytt parameter sett for VitalControl-enhet](../screenshots/new-technology.png "Opprett ny teknologi: VitalControl").

   Parameter settet for teknologi `VitalControl` er nå opprettet og må konfigureres i de neste trinnene.

## Konfigurasjon: Grunnleggende innstillinger {#configuration-basic-settings}

Opprinnelig er fanen `Grunnleggende innstillinger` valgt i skjermen som vises, som vist i figuren nedenfor. Gjør justeringer der i kategoriene `Eksternt program` <span style="font-size: 140%">➊</span>, `Dyredata` <span style="font-size: 140%">➋</span>, `Lokasjoner` <span style="font-size: 140%">➌</span> og `Forlater` <span style="font-size: 140%">➍</span> i henhold til dine gårdsspesifikke forhold.

   ![Software Herde: Konfigurasjon av grunnleggende innstillinger](../screenshots/basic-settings.png "Teknologi VitalControl: Grunnleggende innstillinger").
   
### Kategori `Eksternt program` <span style="font-size: 140%">➊</span> {#category-external-program-}

For å utføre datautveksling mellom VitalControl og Herde Plus, trengs grunnleggende programvare [VitalControl Synchronizer](../../vcsynchronizer) som eksternt hjelpeprogram. For korrekt funksjon av dette programmet, må noen justeringer gjøres i kategorien `Eksternt program` <span style="font-size: 140%">➊</span>.

- **Enhetsnavn for datautveksling**:  
  Som standard er dette feltet tomt. Det anbefales imidlertid å skrive inn navnet på datamaskinen din her. For å gjøre dette, trykk på ikonet ![Herde Software: Opprett ny teknologikobling](/icons/arrow-down.png "Herde: Opprett teknologikobling") `Pil ned` på høyre ende av nedtrekksfeltet. Datamaskinnavnet ditt vil nå bli bestemt og vist for valg i nedtrekkslisten. Når feltet er fylt med datamaskinnavnet ditt og denne innstillingen er lagret, kan datautveksling kun utløses fra datamaskinen din fra nå av.

- **Utfør i sti**:
  Vennligst skriv inn `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` i dette inntastingsfeltet. Dette er den absolutte stien til programmet `VitalControl Synchronizer` (eller mer spesifikt til filen `vcsynchronizer.exe`). Hvis målkatalogen for dette programmet har blitt endret under [installasjonen av VCSynchronizer](../../vcsynchronizer/installation), vennligst skriv inn den valgte målkatalogen her.


- **Program HerdePlus 🡒 Teknologi**:  
  Dette inndatafeltet må fylles ut med verdien `vc_imp.bat`. Den tilsvarende navngitte batch-filen spesifiserer rekkefølgen av operasjoner under dataimport.

- **Teknologi 🡒 Program HerdePlus**:  
  Dette inndatafeltet må fylles ut med verdien `vc_exp.bat`. Den tilsvarende navngitte batch-filen spesifiserer rekkefølgen av operasjoner under dataeksport.

### Kategori `Dyredata` <span style="font-size: 140%">➋</span> {#category-animal-data-}

Ytterligere justeringer må gjøres i kategorien 'Dyredata' <span style="font-size: 140%">➋</span> for å få datautvekslingen fullt funksjonell.

- **Dyrenummer**:  
  Denne innstillingen bestemmer hvilken ID dyrene får for visning på VitalControl-enheten:
  - Hvis du har tildelt korte ID-er (`Fjøs nr.`, 2 til 6 sifre) til dyrene dine, bør du velge verdien 'Fjøsnummer' her: den viste ID-en til et dyr på VitalControl vil da tilsvare fjøsnummeret som er tildelt dyret.
  - Hvis du **ikke** har tildelt korte ID-numre til dyrene dine - dette er vanlig i oppdrettssektoren, for eksempel - bør du velge verdien `Øremerke nr. (5 sifre)` her. Den viste ID-en til et dyr på VitalControl-enheten vil da tilsvare de siste 5 sifrene i ID-en som er trykt på det gule øremerket til dyret.
  
<br>

- **Sender nr.**:  
  Denne innstillingen bestemmer nummeret som forventes for et dyr under RFID-skanning:  
  - Hvis du setter et halsbånd med en transponder på dyrene dine eller setter en øretransponder på dyrene dine - for eksempel for identifikasjon ved den automatiske materen -, bør du velge verdien 'Transponder' her.
  - Hvis dyrene dine eller kalvene dine bærer elektroniske øremerker kodet med det offisielle nasjonale 15-sifrede identifikasjonsnummeret til dyret ditt som vil tjene til identifikasjon av dyret gjennom hele dets liv, bør du velge verdien 'Øremerke nr. (15 sifre)` her.

<br>

- **Minimumsalder for overføring**:  
  Hvis `0` er angitt som verdi for dette inndatafeltet, vil **alle dyr** bli overført til VitalControl-enheten, uavhengig av alder. En verdi større enn `0` definerer minimumsalderen (i dager) for dyrene som skal overføres. For eksempel, hvis **kun kyr** skal overføres til enheten, må en verdi på 600 dager (= 20 måneder) angis her som minimumsalder.

### Kategori `Steder` <span style="font-size: 140%">➌</span> {#category-locations-}

Bruk denne kategorien for å ekskludere dyr på visse steder fra dataoverføring til enheten. For å gjøre dette, fjern avmerkingen fra stedet/stedene for hvilke du **ikke** ønsker å overføre dyrene som er plassert der til enheten.

### Kategori `Forlater` <span style="font-size: 140%">➍</span> {#category-leaving-}

Merk av for 'Forlater i HERDEplus' her. På denne måten spesifiserer du at dyr som har forlatt flokken også slettes fra VitalControl-enheten under synkronisering.
Merk også av for 'Eksisterer ikke i lager'. På denne måten spesifiserer du at dyr på VitalControl som ikke er kjent for `Herde`-programvaren slettes fra VitalControl under synkronisering.

## Konfigurasjon: Teknologispesifikke innstillinger {#configuration-technology-specific-settings}

Klikk deretter på fanen `Teknologispesifikke innstillinger` for å bestemme omfanget av datautvekslingen. Det anbefales å merke av alle avmerkingsboksene som er oppført der, bortsett fra avmerkingsboksen `Lagre importfil etter behandling`. Sistnevnte avmerkingsboks er ment for diagnostiske formål og bør kun velges hvis det kreves av servicepersonell.

- **Maksimal alder for overføring**:  
  Hvis `0` er angitt her som verdi, vil **alle dyr** bli overført til VitalControl-enheten, uavhengig av deres alder. En verdi større enn `0` definerer maksimal alder (i dager) for dyrene som skal overføres. Hvis for eksempel **kun kalver** skal overføres til enheten, må en verdi på 90 dager (= 3 måneder) angis her som maksimal alder.

   ![Herde Software: Konfigurasjon Datautveksling](../screenshots/technology-specific-settings.png "Datautveksling: spesifikke innstillinger").

## Lagre datautvekslingsinnstillinger {#save-data-exchange-settings}

Trykk på `Lagre (F2)`-tasten etter at du har konfigurert alle konfigurasjonsparametrene riktig. Parametersettet for datautveksling til VitalControl-enheten er nå lagret og klart til bruk.  
Utfør en [datautveksling](../data-exchange/) nå for å sjekke om de fastsatte innstillingene er gyldige slik at du kan lykkes med å utveksle data til og fra VitalControl-enheten.


