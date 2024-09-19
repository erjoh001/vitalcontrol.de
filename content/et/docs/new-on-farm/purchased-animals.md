---
title: Ostetud loomad
linkTitle: Ostetud loomad
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Siin saate vaadata oma praeguseid oste ja eksportida andmeid.
kategooriad: [Uus farmis]
Sildid: [Uus farmis]
translationKey: new-on-farm/new-on-farm
---
## Ostetud loomad {#purchased-animals}

Selles nimekirjas leiate kõik loomad, mille olete loonud hulgisisestuse kaudu. Saate selle nimekirja eksportida ja seeläbi registreerida oma täiendused otse karjahaldusprogrammis DSP-Herde ja HI-Tieris. Alternatiivina võite kustutada kõik ostuteated.

{{% alert title="Vihje" %}}
Andmete eksportimiseks on vajalik kaasasolev UBS mälupulk. Ühendage USB mälupulk USB-C adapteri abil oma VitalControl seadmega enne juhiste järgimist.
{{% /alert %}}

1. Oma VitalControl seadme põhiekraanil valige menüüpunkt <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Uus farmis" /> `{{<T "NewOnFarm" >}}` ja vajutage `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü, kus saate valida vahel <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Uus farmis, ilma transponderita" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostetud loomad" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Riiklikku loomanumbrit pole määratud" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Sünnid" /> `{{<T "Births" >}}` ja <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Transponderit pole määratud" /> `{{<T "NoTransponderAssigned" >}}`. Kasutage nooleklahve ◁ ▷ △ ▽ menüüpunkti <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Ostetud loomad" /> `{{<T "PurchasedAnimals" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

3. Avaneb nimekiri teie ostudest, mille olete registreerinud hulgisisestuse menüüpunkti kaudu.

4. Kasutage `F2` klahvi `{{<T "CSVExport" >}}`.

5. CSV sõnumite nimekiri salvestatakse nüüd teie USB mälupulgale.

![VitalControl: Ostetud loomade nimekiri, csv eksport](../images/purchasedanimals.png "Ostetud loomad, csv eksport")

## Valikud: Kustuta kõik teated pärast eksportimist {#options-delete-all-notices-after-export}

Selle valikuga saate määrata, kas kõik sõnumid `{{<T "PurchasedAnimals" >}}` nimekirjas tuleks pärast CSV-faili eksportimist kustutada. Kasutage seda valikut ainult juhul, kui olete kindel, et te ei vaja enam sõnumeid!

1. Kasutage klahvi `F3`. Avaneb alammenüü.

2. Kasutage nooleklahve △ ▽ menüüpunkti `{{<T "DeleteAllNoticesAfterExport" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

3. Kast on nüüd märgitud linnukesega. Valik on aktiveeritud. Kinnitage uuesti `{{<T "Ok" >}}` abil valiku deaktiveerimiseks.

    ![VitalControl: Ostetud loomade nimekiri, csv eksport](../images/delete-all.png "Kustuta kõik teated pärast eksportimist")

## Otsesed funktsioonikutsed {#direct-function-calls}

Lisaks ekspordifaili loomisele on teil järgmised valikud:

- [Eemalda transponder](#unlink-transponder)
- [Kustuta kõik ostuteated](#clear-all-purchase-notices)
- [Kustuta loom + teade](#delete-animal--purchase-notice)
- [Tühjenda ostuteade](#clear-notice-of-purchase)
- [Muuda märget](#edit-data-of-purchased-animal)

{{% alert title="Vihje" %}}
Avage alati esmalt `{{<T "PurchasedAnimals" >}}` nimekiri, nagu eespool kirjeldatud.
{{% /alert %}}

### Eemalda transponder {#unlink-transponder}

Selle funktsiooni abil saate loomalt transponderi eemaldada.

1. Kasutage klahvi `F3`. Avaneb alammenüü.

2. Kasutage nooleklahve △ ▽ menüüpunkti `{{<T "UnlinkTransponder" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

3. Transponder on edukalt eemaldatud.

    ![VitalControl: Ostetud loomade nimekiri, csv eksport](../images/unlink-transponder.png "Ostetud loomad, transponderi eemaldamine")

### Kustuta kõik ostuteated {#clear-all-purchase-notices}

Selle funktsiooni abil saate kõik loomad `{{<T "PurchasedAnimals" >}}` nimekirjast kustutada, ilma et peaksite esmalt looma eksportfaili.

1. Kasutage klahvi `F3`. Avaneb alammenüü.

2. Kasutage nooleklahve △ ▽ menüüpunkti `{{<T "ClearAllPurchaseNotices" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

3. Ostuteated on edukalt kustutatud.

![VitalControl: Ostetud loomade nimekiri, tühjenda ostuteated](../images/clear.png "Tühjenda kõik ostuteated")

### Kustuta loom + ostuteade {#delete-animal--purchase-notice}

Looma ja vastava ostuteate kustutamiseks toimi järgmiselt:

1. Kasuta nooleklahve △ ▽ valitud looma kustutamiseks.

2. Kasuta `F3` klahvi. Avaneb alammenüü.

3. Kasuta nooleklahve △ ▽ menüüpunkti `{{<T "UnregisterAnimalAndBirthNotice" >}}` valimiseks ja kinnita `{{<T "Ok" >}}`-ga.

4. Loom ja juurdepääsuteade on edukalt kustutatud.

    ![VitalControl: Ostetud loomade nimekiri, kustuta loom + teade](../images/delete.png "Kustuta loom + teade")

### Tühjenda ostuteade {#clear-notice-of-purchase}

Looma ostuteate nimekirjast kustutamiseks toimi järgmiselt:

1. Kasuta nooleklahve △ ▽ looma valimiseks, kelle ostuteadet soovid kustutada.

2. Kasuta `F3` klahvi. Avaneb alammenüü.

3. Kasuta nooleklahve △ ▽ menüüpunkti `{{<T "ClearPurchaseNotice" >}}` valimiseks ja kinnita `{{<T "Ok" >}}`-ga.

4. Valitud looma ostuteade on edukalt kustutatud.

    ![VitalControl: Ostetud loomade nimekiri, tühjenda ostuteade](../images/clearnotice.png "Tühjenda ostuteade")

### Muuda ostetud looma andmeid {#edit-data-of-purchased-animal}

Ostunimekirjas oleva looma andmete muutmiseks toimi järgmiselt:

1. Kasuta nooleklahve △ ▽ looma valimiseks, kelle andmeid soovid muuta.

2. Kasuta `{{<T "Ok" >}}` nuppu. Avaneb alammenüü looma andmetega. Kuidas neid muuta, saad teada [siit](/et/docs/actions/edit/#edit-animal-data).

    ![VitalControl: Ostetud loomade nimekiri, Muuda looma andmeid](../images/edit.png "Muuda ostetud looma andmeid")
