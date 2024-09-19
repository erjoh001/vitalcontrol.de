---
title: "Värskete lehmade nimekiri"
linkTitle: "Värskete lehmade nimekiri"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Lihtsusta oma värskete lehmade kontrolli.
kategooriad: [Nimekirjad]
Sildid: [Nimekirjad, värske lehm]
translationKey: lists/fresh-cows
---
### Värskete lehmade nimekiri {#fresh-cows-list}

{{% alert title="Selgitus" %}}
Värskete lehmade haldamisel peetakse parimaks praktikaks loomade igapäevast kontrollimist mitme päeva jooksul pärast sünnitust. Värskete lehmade nimekiri toetab seda värskete lehmade kontrolli, eriti temperatuuri registreerimise osas. Iga looma kohta kuvatakse kontrollperioodi kõikide päevade kohta veergdiagramm, iga kontrollperioodi päev on esindatud vertikaalse ribaga. Sõltuvalt riba värvist (roheline, kollane või punane) näete, kas vastaval päeval mõõdeti looma jaoks normaalne, tõusnud või kriitiliselt tõusnud temperatuur.
{{% /alert %}}

Lehmad lisatakse värskete lehmade nimekirja kohe pärast nende poegimise registreerimist. Nad jäävad sellesse nimekirja teatud ajaks, selle perioodi pikkust (päevades) saab reguleerida [seadetes](../../settings/data-acquisition/#control-period-of-fresh-cows)).
Selle nimekirja jaoks on saadaval järgmised toimingud:

- [Täielik toimingute menüü](../alarm/#full-action-menu)
- [Looma andmed](../alarm/#animal-data)
- [Temperatuuri võtmine](../alarm/#take-temperature)
- [Häire oleku muutmine](#toggle-alarm-status)
- [Jälgimisoleku muutmine](#toggle-watch-status)
- [Mõõdetud lehmade peitmine](#hide-measured-cows)
- [Looma otsimine](../alarm/#search-animal)
- [Filtri seadmine](../alarm/#set-filter)

{{% alert title="Vihje" %}}
Mõned toimingud viiakse läbi samamoodi nagu [häirete nimekirjas](../alarm). Neid siin ei selgitata. Viige läbi eelnevad sammud ja kasutage vastava toimingu linki juhiste saamiseks.
{{% /alert %}}

### Eelsammud {#preliminary-steps}

1. Valige peamenüüs oma VitalControl seadmel <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Nimekirjad" /> `{{<T "Lists" >}}` menüüpunkt ja vajutage `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid nimekirju. Valige nimekiri `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Kinnitage valikuga `{{<T "Ok" >}}`.

3. Värskete lehmade nimekiri on nüüd avatud.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Värske lehma nimekiri")

### Lülita häire olekut {#toggle-alarm-status}

1. Täitke eelnevad sammud.

2. Kasutage klahvi `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused klahvi `{{<T "Ok" >}}` vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "ToggleAlarmStatus" >}}` esiletõstmiseks ja valige see võimalus vajutades keskset `{{<T "Ok" >}}` nuppu või klahvi `F3` `{{<T "Ok" >}}`.

3. Värskete lehmade nimekirjas kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage valikuga `{{<T "Ok" >}}`. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja kasutage nooleklahve ◁ ▷ △ ▽ soovitud numbrite valimiseks. Lõpuks kinnitage valikuga `{{<T "Ok" >}}`.

4. Loom lisatakse või eemaldatakse häirete nimekirjast sõltuvalt tema algsest olekust.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Lülita häire olekut")

### Lülita jälgimisolekut {#toggle-watch-status}

1. Täitke eelnevad sammud.

2. Kasutage klahvi `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused klahvi `{{<T "Ok" >}}` vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "ToggleWatchStatus" >}}` esiletõstmiseks ja valige see võimalus vajutades keskset `{{<T "Ok" >}}` nuppu või klahvi `F3` `{{<T "Ok" >}}`.

3. Värskete lehmade nimekirjas kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage valikuga `{{<T "Ok" >}}`. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja kasutage nooleklahve ◁ ▷ △ ▽ soovitud numbrite valimiseks. Lõpuks kinnitage valikuga `{{<T "Ok" >}}`.

4. Loom lisatakse või eemaldatakse jälgimisnimekirjast sõltuvalt tema algsest olekust.

![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Toggle watch status")

### Peida mõõdetud lehmad {#hide-measured-cows}

Kui see funktsioon on aktiveeritud, peidetakse kuivade lehmade nimekirjast loomad, kellele on tehtud temperatuuri mõõtmine. Kui see funktsioon ei ole aktiveeritud, jäävad loomad nimekirjas nähtavale.

1. Täida eelnevad sammud.

2. Kasuta `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; hüpikmenüü kutsumiseks, mis loetleb erinevaid valikuid. Kasuta nooleklahve △ ▽ valiku `{{<T "HideMeasuredCows" >}}` esiletõstmiseks ja lülita see valik sisse keskse `{{<T "Ok" >}}` nupu või `F3` klahvi `{{<T "Ok" >}}` abil.

3. Värskete lehmade nimekirjas kasuta nooleklahve △ ▽ soovitud looma valimiseks ja kinnita `{{<T "Ok" >}}`-ga. Alternatiivina võid looma otsida. Kasuta `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja vali nooleklahvidega ◁ ▷ △ ▽ soovitud numbrid. Lõpuks kinnita `{{<T "Ok" >}}`-ga.

4. Funktsioon `{{<T "HideMeasuredCows" >}}` on nüüd aktiveeritud. Aktiveerimist näitab kastikese märkimine.

![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Hide measured cows")
