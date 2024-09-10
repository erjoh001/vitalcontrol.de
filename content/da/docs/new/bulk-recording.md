---
title: "Masse registrering af en gruppe af købte dyr"
linkTitle: "Masse-registrering"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Brug stregkodescanneren til at registrere en række dyr.
kategorier: [Bulk-recording]
tags: [Bulk-recording]
translationKey: new/bulk-recording
---
## Masse-registrering {#bulk-recording}

Ved hjælp af masse registrering kan du fange et stort antal dyr på kort tid og gemme dem på din enhed. Brug stregkodescanneren til at scanne stregkoderne for øremærkenummer og fødselsdato på kvægpassene. Dyret gemmes automatisk, og du kan straks scanne det næste pas. For at udføre masse registrering af dyr, skal du gøre følgende:

1. Tilslut stregkodescanneren til VitalControl ved hjælp af kablet.

2. På hovedskærmen på din VitalControl-enhed skal du vælge menuen <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` og trykke på `{{<T "Ok" >}}` knappen.

3. En undermenu åbnes. Brug piletasterne ◁ ▷ △ ▽ til at vælge menuen <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" /> `{{<T "BulkRecording" >}}` og bekræft med `{{<T "Ok" >}}`.

4. En anden undermenu åbnes, som indeholder et felt for dyrets øremærkenummer og et andet felt for dyrets fødselsdato. Først skal du scanne stregkoden for øremærkenummeret. Feltets kant ændres fra rød til grøn. Derefter skal du scanne fødselsdatoen. Kanten bliver kortvarigt grøn, før begge kanter igen bliver røde. Tælleren under pas-symbolet <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> øverst på skærmen øges fra 0 til 1. Det første dyr er blevet gemt. Fortsæt og scan de andre kvægpas. Efter hvert scannet pas øges tælleren under pas-symbolet <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> med én. Tælleren under besætningssymbolet <img src="/icons/header/group.svg" width="35" align="bottom" alt="Animal group"  title="Animal group" /> øges også med én.

{{% alert title="Hint" %}}
Tælleren under pas-symbolet <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> viser, hvor mange pas du har scannet i én omgang uden at forlade `{{<T "BulkRecording" >}}` skærmen. Tælleren under besætningssymbolet <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> viser, hvor mange pas du har scannet i alt. Denne tæller nulstilles ikke til nul, hvis du forlader `{{<T "BulkRecording" >}}` skærmen. Antallet svarer til dine indtastninger i menuen ['Purchases'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'New - Bulk recording'](../images/bulk-recording.png "Bulk recording")

{{% alert title="Hint" %}}
Du har yderligere indstillingsmuligheder inden for menuen `{{<T "BulkRecording" >}}`. Disse er forklaret nedenfor. Som forberedende trin skal du altid først få adgang til menuen `{{<T "BulkRecording" >}}` og derefter fortsætte som i instruktionerne.
{{% /alert %}}

{{% alert title="Hint" %}}
Fejlmeddelelser kan forekomme under scanningsprocessen. I dette tilfælde udsender stregkodescanneren en lyd, og yderligere scanning er ikke mulig. Bekræft den tilsvarende fejlmeddelelse på VitalControl-displayet og fortsæt med at scanne.
{{% /alert %}}

### Fødselsdato obligatorisk {#birth-date-mandatory}

Med denne indstillingsmulighed kan du bestemme, om fødselsdatoen skal angives, når dyrene oprettes. Hvis du deaktiverer denne mulighed, skal du kun scanne stregkoden for at gemme et dyr. For disse dyr gemmes dog den aktuelle dato som fødselsdato! Denne funktion er som standard aktiveret. For at deaktivere den skal du gøre følgende:

1. Brug <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` knappen for at åbne indstillingsmenuen.

2. Brug piletasterne △ ▽ til at vælge indstillingsmuligheden `{{<T "BirthDateMandatory" >}}` og bekræft med `{{<T "Ok" >}}`.

3. Den gule cirkel symboliserer, at funktionen er aktiveret. En grå cirkel symboliserer, at funktionen er deaktiveret.


4. Gem indstillingerne og brug `F1`-tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Gem og vend tilbage" /> for at vende tilbage til menuen <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk optagelse" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu Ny Fødselsdato obligatorisk](../images/birthdate.png "Fødselsdato obligatorisk")

### Standardværdier {#default-values}

Inden for `{{<T "DefaultValues" >}}` indstillingsmenuen kan du indstille standarder, der gælder for hvert dyr, du opretter. Processen med at oprette med stregkodescanneren forbliver uændret som beskrevet ovenfor. Du har mulighed for at indstille typen af husdyr, køn, race og opholdssted. For at indstille `{{<T "DefaultValues" >}}`, skal du gøre følgende:

1. Brug <img src="/icons/gear.svg" width="25" align="bottom" alt="Indstillingsmenu" /> `On/Off` knappen for at åbne indstillingsmenuen.

2. Brug piletasterne △ ▽ til at vælge menuen `{{<T "DefaultValues" >}}` og bekræft med `{{<T "Ok" >}}`.

3. En undermenu åbnes med de forskellige indstillingsmuligheder. Brug piletasterne △ ▽ til at vælge den ønskede indstillingsmulighed. Brug piletasterne ◁ ▷ til at vælge den ønskede indstilling.

4. Gem indstillingerne og brug `F1`-tasten&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Gem og vend tilbage" /> for at vende tilbage til menuen <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk optagelse" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu Ny Standardværdier](../images/defaultvalues.png "Standardværdier")

### Registrerede værdier {#recorded-values}

Inden for `{{<T "RecordedValues" >}}` indstillingsmenuen kan du specificere, hvilke værdier der skal registreres ud over øremærkenummeret og fødselsdatoen. Du kan vælge mellem `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` og `{{<T "TypeAnimal" >}}`. Så snart du indstiller mindst én værdi, ændres processen under scanning. Først scanner du øremærkenummeret og fødselsdatoen. Brug derefter retningsknapperne △ ▽ til at vælge de værdier, der skal indstilles, og indstil værdierne. Gem derefter dine indtastninger med `F3`-tasten. Først da oprettes dyret! For at indstille de værdier, der skal registreres, skal du gøre følgende:

1. Brug <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` knappen for at åbne indstillingsmenuen.

2. Brug piletasterne △ ▽ for at vælge menupunktet `{{<T "RecordedValues" >}}` og bekræft med `{{<T "Ok" >}}`.

3. Vælg den ønskede værdi, der skal optages, med piletasterne △ ▽ og bekræft med `{{<T "Ok" >}}`. En gul cirkel vises. Hvis du vil deaktivere værdien, der skal optages, skal du bekræfte igen med `{{<T "Ok" >}}`. Den gule cirkel forsvinder.

4. Gem indstillingerne og brug `F1` tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> for at vende tilbage til menupunktet <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Hvis du vil deaktivere alle værdier, der skal optages igen, skal du vælge indstillingsmuligheden `{{<T "EnableAllResetOrder" >}}` i menupunktet `{{<T "RecordedValues" >}}` og bekræfte med `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
