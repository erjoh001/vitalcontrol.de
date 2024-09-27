---
title: Kjøpte dyr
linkTitle: Kjøpte dyr
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Her kan du se dine nåværende kjøp og eksportere dataene.
categories: [Ny på gården]
tags: [Ny på gården]
translationKey: new-on-farm/new-on-farm
---
## Kjøpte dyr {#purchased-animals}

I denne listen finner du alle dyrene du har opprettet via masseopptak. Du kan eksportere denne listen og dermed registrere tilleggene dine direkte i besetningsstyringsprogrammet DSP-Herde og i HI-Tier. Alternativt kan du slette alle kjøpsmeldinger.

{{% alert title="Hint" %}}
For å eksportere data trenger du den medfølgende UBS-pinnen. Koble USB-pinnen med USB-C-adapteren til din VitalControl-enhet før du følger instruksjonene.
{{% /alert %}}

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2.  En undermeny åpnes der du kan velge mellom <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` og <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Bruk piltastene ◁ ▷ △ ▽ for å velge menyelementet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}` og bekreft med `{{<T "Ok" >}}`.

3. En liste åpnes med dine kjøp som du har registrert via masseopptaksmenyelementet.


4. Bruk `F2`-tasten `{{<T "CSVExport" >}}`.

5. CSV-meldingslisten er nå lagret på USB-pinnen din.

    ![VitalControl: Liste over kjøpte dyr, csv-eksport](../images/purchasedanimals.png "Kjøpte dyr, csv-eksport")

## Alternativer: Slett alle meldinger etter eksport {#options-delete-all-notices-after-export}

Med dette alternativet kan du angi om alle meldinger i `{{<T "PurchasedAnimals" >}}`-listen skal slettes etter at CSV-filen er eksportert. Bruk bare dette alternativet hvis du er sikker på at du ikke lenger trenger meldingene!

1. Bruk `F3`-tasten. En undermeny åpnes.

2. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "DeleteAllNoticesAfterExport" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Boksen er nå merket med en hake. Alternativet er aktivert. Bekreft igjen med `{{<T "Ok" >}}` for å deaktivere alternativet.

    ![VitalControl: Liste over kjøpte dyr, csv-eksport](../images/delete-all.png "Slett alle meldinger etter eksport")

## Direkte funksjonskall {#direct-function-calls}

I tillegg til å opprette eksportfilen, har du følgende alternativer:

- [Fjern kobling til transponder](#unlink-transponder)
- [Slett alle kjøpsmeldinger](#clear-all-purchase-notices)
- [Slett dyr + melding](#delete-animal--purchase-notice)
- [Slett kjøpsmelding](#clear-notice-of-purchase)
- [Rediger et merke](#edit-data-of-purchased-animal)

{{% alert title="Hint" %}}
Åpne alltid `{{<T "PurchasedAnimals" >}}`-listen først som beskrevet i instruksjonene ovenfor.
{{% /alert %}}

### Fjern kobling til transponder {#unlink-transponder}

Du kan bruke denne funksjonen til å fjerne transponderen fra et dyr.

1. Bruk `F3`-tasten. En undermeny åpnes.

2. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "UnlinkTransponder" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Transponderen er nå fjernet.

    ![VitalControl: Liste over kjøpte dyr, csv-eksport](../images/unlink-transponder.png "Kjøpte dyr, fjern kobling til transponder")

### Slett alle kjøpsmeldinger {#clear-all-purchase-notices}

Med denne funksjonen kan du slette alle dyr fra `{{<T "PurchasedAnimals" >}}` listen uten å måtte opprette en eksportfil først.

1. Bruk `F3` tasten. En undermeny åpnes.

2. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "ClearAllPurchaseNotices" >}}` og bekreft med `{{<T "Ok" >}}`.

3. Kjøpsvarslene har blitt slettet.

    ![VitalControl: Liste over kjøpte dyr, slett kjøpsvarsler](../images/clear.png "Slett alle kjøpsvarsler")

### Slett dyr + kjøpsvarsel {#delete-animal--purchase-notice}

For å slette et dyr og dets tilsvarende kjøpsvarsel, gjør følgende:

1. Bruk piltastene △ ▽ for å velge dyret du vil slette.

2. Bruk `F3` tasten. En undermeny åpnes.

3. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "UnregisterAnimalAndBirthNotice" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Dyret og tilgangsmeldingen har blitt slettet.

    ![VitalControl: Liste over kjøpte dyr, slett dyr + varsel](../images/delete.png "Slett dyr + varsel")

### Slett kjøpsvarsel {#clear-notice-of-purchase}

For å slette et dyrs kjøpsvarsel fra listen, gjør følgende:

1. Bruk piltastene △ ▽ for å velge dyret hvis kjøpsvarsel du vil slette.

2. Bruk `F3` tasten. En undermeny åpnes.

3. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "ClearPurchaseNotice" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Kjøpsvarselet til det valgte dyret har blitt slettet.

    ![VitalControl: Liste over kjøpte dyr, slett kjøpsvarsel](../images/clearnotice.png "Slett kjøpsvarsel")

### Rediger data for kjøpt dyr {#edit-data-of-purchased-animal}

For å redigere dataene til et dyr i kjøpslisten, gjør følgende:

1. Bruk piltastene △ ▽ for å velge dyret du vil redigere.

2. Bruk `{{<T "Ok" >}}` knappen. En undermeny med dyrets data åpnes. Du kan finne ut hvordan du redigerer disse [her](/no/docs/actions/edit/#edit-animal-data).

    ![VitalControl: Liste over kjøpte dyr, Rediger dyredata](../images/edit.png "Rediger data for kjøpt dyr")
