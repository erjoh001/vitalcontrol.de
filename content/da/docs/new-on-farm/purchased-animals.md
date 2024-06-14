---
title: Købte dyr
linkTitle: Købte dyr
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Her kan du se dine nuværende køb og eksportere dataene.
categories: [Ny på gården]
tags: [Ny på gården]
translationKey: new-on-farm/new-on-farm
---
## Købte dyr {#purchased-animals}

I denne liste finder du alle de dyr, du har oprettet via masseoptagelse. Du kan eksportere denne liste og dermed registrere dine tilføjelser direkte i besætningsstyringsprogrammet DSP-Herde og i HI-Tier. Alternativt kan du slette alle købsmeddelelser.

{{% alert title="Hint" %}}
For at eksportere data skal du bruge den medfølgende UBS-stick. Tilslut USB-sticken med USB-C adapteren til din VitalControl-enhed, før du følger instruktionerne.
{{% /alert %}}

1. På hovedskærmen på din VitalControl-enhed skal du vælge menuen <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2.  En undermenu åbnes, hvor du kan vælge mellem <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` og <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Brug piletasterne ◁ ▷ △ ▽ til at vælge menuen <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}` og bekræft med `{{<T "Ok" >}}`.

3. En liste åbnes med dine køb, som du har registreret via masseoptagelsesmenuen.


4. Brug `F2`-tasten `{{<T "CSVExport" >}}`.

5. CSV-beskedlisten er nu gemt på din USB-stick.

    ![VitalControl: Liste over købte dyr, csv-eksport](../images/purchasedanimals.png "Købte dyr, csv-eksport")

## Indstillinger: Slet alle meddelelser efter eksport {#options-delete-all-notices-after-export}

Med denne mulighed kan du indstille, om alle beskeder i `{{<T "PurchasedAnimals" >}}`-listen skal slettes efter CSV-filen er eksporteret. Brug kun denne mulighed, hvis du er sikker på, at du ikke længere har brug for beskederne!

1. Brug `F3`-tasten. En undermenu åbnes.

2. Brug piletasterne △ ▽ til at vælge menupunktet `{{<T "DeleteAllNoticesAfterExport" >}}` og bekræft med `{{<T "Ok" >}}`.

3. Boksen er nu markeret med et flueben. Muligheden er aktiveret. Bekræft igen med `{{<T "Ok" >}}` for at deaktivere muligheden.

    ![VitalControl: Liste over købte dyr, csv-eksport](../images/delete-all.png "Slet alle meddelelser efter eksport")

## Direkte funktionskald {#direct-function-calls}

Udover at oprette eksportfilen har du følgende muligheder:

- [Fjern transponder](#unlink-transponder)
- [Ryd alle købsmeddelelser](#clear-all-purchase-notices)
- [Slet dyr + meddelelse](#delete-animal--purchase-notice)
- [Ryd købsmeddelelse](#clear-notice-of-purchase)
- [Rediger et mærke](#edit-data-of-purchased-animal)

{{% alert title="Hint" %}}
Åbn altid `{{<T "PurchasedAnimals" >}}`-listen først som beskrevet i instruktionerne ovenfor.
{{% /alert %}}

### Fjern transponder {#unlink-transponder}

Du kan bruge denne funktion til at fjerne transponderen fra et dyr.

1. Brug `F3`-tasten. En undermenu åbnes.

2. Brug piletasterne △ ▽ til at vælge menupunktet `{{<T "UnlinkTransponder" >}}` og bekræft med `{{<T "Ok" >}}`.

3. Transponderen er blevet fjernet med succes.

    ![VitalControl: Liste over købte dyr, csv-eksport](../images/unlink-transponder.png "Købte dyr, fjern transponder")

### Ryd alle købsmeddelelser {#clear-all-purchase-notices}

Med denne funktion kan du slette alle dyr fra `{{<T "PurchasedAnimals" >}}` listen uden først at skulle oprette en eksportfil.

1. Brug `F3` tasten. En undermenu åbnes.

2. Brug piletasterne △ ▽ til at vælge menupunktet `{{<T "ClearAllPurchaseNotices" >}}` og bekræft med `{{<T "Ok" >}}`.

3. Købsmeddelelserne er blevet slettet med succes.

    ![VitalControl: Liste over købte dyr, ryd købsmeddelelser](../images/clear.png "Ryd alle købsmeddelelser")

### Slet dyr + købsmeddelelse {#delete-animal--purchase-notice}

For at slette et dyr og dets tilsvarende købsmeddelelse, skal du gøre følgende:

1. Brug piletasterne △ ▽ til at vælge det dyr, du vil slette.

2. Brug `F3` tasten. En undermenu åbnes.

3. Brug piletasterne △ ▽ til at vælge menupunktet `{{<T "UnregisterAnimalAndBirthNotice >}}` og bekræft med `{{<T "Ok" >}}`.

4. Dyret og adgangsmeddelelsen er blevet slettet med succes.

    ![VitalControl: Liste over købte dyr, slet dyr + meddelelse](../images/delete.png "Slet dyr + meddelelse")

### Ryd købsmeddelelse {#clear-notice-of-purchase}

For at slette et dyrs købsmeddelelse fra listen, skal du gøre følgende:

1. Brug piletasterne △ ▽ til at vælge det dyr, hvis købsmeddelelse du vil slette.

2. Brug `F3` tasten. En undermenu åbnes.

3. Brug piletasterne △ ▽ til at vælge menupunktet `{{<T "ClearPurchaseNotice" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Købsmeddelelsen for det valgte dyr er blevet slettet med succes.

    ![VitalControl: Liste over købte dyr, ryd købsmeddelelse](../images/clearnotice.png "Ryd købsmeddelelse")

### Rediger data for købt dyr {#edit-data-of-purchased-animal}

For at redigere dataene for et dyr på købslisten, skal du gøre følgende:

1. Brug piletasterne △ ▽ til at vælge det dyr, du vil redigere.

2. Brug `{{<T "Ok" >}}` knappen. En undermenu med dyrets data åbnes. Du kan finde ud af, hvordan du redigerer disse [her](/en/docs/actions/edit/#edit-animal-data).

![VitalControl: Liste over købte dyr, Rediger dyredata](../images/edit.png "Rediger data for købt dyr")
