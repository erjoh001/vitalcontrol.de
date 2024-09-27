---
title: "Masseregistrering av en gruppe kjøpte dyr"
linkTitle: "Bulk-registrering"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Bruk strekkodeskanneren for å registrere en rekke dyr.
categories: [Bulk-recording]
tags: [Bulk-recording]
translationKey: new/bulk-recording
---
## Bulk-registrering {#bulk-recording}

Ved hjelp av masseregistrering kan du fange opp et stort antall dyr på kort tid og lagre dem på enheten din. Bruk strekkodeskanneren for å skanne strekkodene for øremerket nummer og fødselsdato på dyrepassene. Dyret lagres automatisk, og du kan skanne neste pass med en gang. For å utføre masseregistrering av dyr, gjør følgende:

1. Koble strekkodeskanneren til VitalControl ved hjelp av kabelen.

2. På hovedskjermen til din VitalControl-enhet, velg menyvalget <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` og trykk på `{{<T "Ok" >}}` knappen.

3. En undermeny åpnes. Bruk piltastene ◁ ▷ △ ▽ for å velge menyvalget <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" /> `{{<T "BulkRecording" >}}` og bekreft med `{{<T "Ok" >}}`.

4. En annen undermeny åpnes, som inneholder ett felt for dyrets øremerket nummer og et annet felt for dyrets fødselsdato. Først skann strekkoden for øremerket nummer. Grensen til feltet endres fra rød til grønn. Deretter skann fødselsdatoen. Grensen blir kortvarig grønn før begge grensene vises røde igjen. Telleren under pass-symbolet <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> øverst på skjermen økes fra 0 til 1. Det første dyret er lagret. Fortsett og skann de andre dyrepassene. Etter hvert pass som skannes, øker telleren under pass-symbolet <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> med én. Telleren under flokk-symbolet <img src="/icons/header/group.svg" width="35" align="bottom" alt="Animal group"  title="Animal group" /> øker også med én.

{{% alert title="Hint" %}}
Tallet under pass-symbolet <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> viser hvor mange pass du har skannet på en gang uten å forlate `{{<T "BulkRecording" >}}`-skjermen. Tallet under flokk-symbolet <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> viser hvor mange pass du har skannet totalt. Denne telleren nullstilles ikke hvis du forlater `{{<T "BulkRecording" >}}`-skjermen. Tallet tilsvarer dine oppføringer i menyvalget ['Purchases'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'New - Bulk recording'](../images/bulk-recording.png "Bulk recording")

{{% alert title="Hint" %}}
Du har flere innstillingsmuligheter innenfor menyvalget `{{<T "BulkRecording" >}}`. Disse er forklart nedenfor. Som forberedende trinn, gå alltid først til menyvalget `{{<T "BulkRecording" >}}` og fortsett deretter som i instruksjonene.
{{% /alert %}}

{{% alert title="Hint" %}}
Feilmeldinger kan dukke opp under skanneprosessen. I dette tilfellet avgir strekkodeskanneren en lyd og videre skanning er ikke mulig. Bekreft den tilsvarende feilmeldingen på VitalControl-skjermen og fortsett skanningen.
{{% /alert %}}

### Fødselsdato obligatorisk {#birth-date-mandatory}

Med denne innstillingsmuligheten kan du bestemme om fødselsdatoen må spesifiseres når dyrene opprettes. Hvis du deaktiverer dette alternativet, trenger du bare å skanne strekkoden for å lagre et dyr. For disse dyrene lagres imidlertid dagens dato som fødselsdato! Denne funksjonen er aktivert som standard. For å deaktivere den, gjør følgende:

1. Bruk <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `På/Av`-knappen for å åpne innstillingsmenyen.

2. Bruk piltastene △ ▽ for å velge innstillingsalternativet `{{<T "BirthDateMandatory" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Den gule sirkelen symboliserer at funksjonen er aktivert. En grå sirkel symboliserer at funksjonen er deaktivert.


4. Lagre innstillingene og bruk `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Lagre og gå tilbake" /> for å gå tilbake til menyvalget <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masseopptak" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Meny Ny Fødselsdato obligatorisk](../images/birthdate.png "Fødselsdato obligatorisk")

### Standardverdier {#default-values}

Innenfor `{{<T "DefaultValues" >}}`-innstillingsmenyen setter du standarder som gjelder for hvert dyr du oppretter. Prosessen med å opprette med strekkodeskanneren forblir uendret som beskrevet ovenfor. Du har muligheten til å sette typen husdyr, kjønn, rase og oppholdssted. For å sette `{{<T "DefaultValues" >}}`, gjør følgende:

1. Bruk <img src="/icons/gear.svg" width="25" align="bottom" alt="Innstillingsmeny" /> `På/Av`-knappen for å åpne innstillingsmenyen.

2. Bruk piltastene △ ▽ for å velge menyvalget `{{<T "DefaultValues" >}}` og bekreft med `{{<T "Ok" >}}`.

3. En undermeny åpnes med de forskjellige innstillingsalternativene. Bruk piltastene △ ▽ for å velge ønsket innstillingsalternativ. Bruk piltastene ◁ ▷ for å velge ønsket innstilling.

4. Lagre innstillingene og bruk `F1`-tasten&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Lagre og gå tilbake" /> for å gå tilbake til menyvalget <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masseopptak" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Meny Ny Standardverdier](../images/defaultvalues.png "Standardverdier")

### Registrerte verdier {#recorded-values}

Innenfor `{{<T "RecordedValues" >}}`-innstillingsmenyen kan du spesifisere hvilke verdier som skal registreres i tillegg til øremerket nummer og fødselsdato. Du kan velge mellom `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` og `{{<T "TypeAnimal" >}}`. Så snart du setter minst én verdi, endres prosessen under skanning. Først skanner du øremerket nummer og fødselsdato. Deretter bruker du retningsknappene △ ▽ for å velge verdiene som skal settes og setter verdiene. Deretter lagrer du dine oppføringer med `F3`-tasten. Først da er dyret opprettet! For å sette verdiene som skal registreres, gjør følgende:


1. Bruk <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `På/Av`-knappen for å åpne innstillingsmenyen.

2. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "RecordedValues" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Velg ønsket verdi som skal registreres med piltastene △ ▽ og bekreft med `{{<T "Ok" >}}`. En gul sirkel vises. Hvis du vil deaktivere verdien som skal registreres, bekreft igjen med `{{<T "Ok" >}}`. Den gule sirkelen forsvinner.

4. Lagre innstillingene og bruk `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> for å gå tilbake til menyelementet <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Hvis du vil deaktivere alle verdiene som skal registreres igjen, velg innstillingsalternativet `{{<T "EnableAllResetOrder" >}}` i menyelementet `{{<T "RecordedValues" >}}` og bekreft med `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
