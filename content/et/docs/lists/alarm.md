---
title: "Häirete nimekiri"
linkTitle: "Häirete nimekiri"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Vaata oma häirete nimekirja.
kategooriad: [Nimekirjad]
Sildid: [Nimekirjad, häire]
translationKey: lists/alarm
---
## Häirete nimekiri {#alarm-list}

Häirete nimekirjast leiad kõik loomad, kes on kas käsitsi nimekirja lisatud või kõik loomad, kes olid temperatuuri mõõtmisel kollases või punases vahemikus. Nimekiri aitab sul hoida ülevaadet kõigist märkimisväärsetest loomadest. Lisaks saad iga nimekirjas oleva looma kohta teha järgmist:

- [Täielik tegevusmenüü](#full-action-menu)
- [Looma andmed](#animal-data)
- [Võta temperatuur](#take-temperature)
- [Hinda looma](#rate-animal)
- [Tühista häire](#clear-alarm)
- [Muuda jälgimisseisundit](#toggle-watch-status)
- [Otsi looma](#search-animal)
- [Sea filter](#set-filter)

Häirete nimekiri on struktureeritud järgmiselt:

   ![VitalControl Nimekirjad Häirete nimekiri](../images/alarmstructure.png "Häirete nimekirja struktuur")

|Sümbol   | Kirjeldus
|-------  |----
| ![VitalControl Ikoon Looma pea](../images/kopf.png "Looma pea") | Näitab, mitu looma on nimekirjas
| ![VitalControl Ikoon ID](../images/ID.png "ID") | Näitab, kas valitud loom on vasikas või lehm. Kliiniline termomeeter näitab, kas loom oli viimasel mõõtmisel kollases või punases tsoonis. Looma ID kuvatakse sümboli all.
| ![VitalControl Ikoon Hinnang](../images/auge.png "Ikoon Hinnang") | Viimane salvestatud hinnang kuvatakse sümboli all foori värvidega
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kehatemperatuur" title="Kehatemperatuur" /> | Viimane palavikumõõtmine kuvatakse sümboli all foori värvidega
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Looma hinnang" title="Hinnang" /> |Ringmärk sümboli all näitab, et loom on jälgimisnimekirjas

### Eelsammud {#preliminary-steps}

1. Vali <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Nimekirjad" /> `{{<T "Lists" >}}` menüüpunkt oma VitalControl seadme põhiekraanil ja vajuta `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid loendi ikoone. Tõsta esile ikoon <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` ja kinnita valikuga `{{<T "Ok" >}}`.

3. Äratusnimekiri on nüüd avatud.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Esialgsed sammud")

### Täielik tegevusmenüü {#full-action-menu}

1. Viige lõpule esialgsed sammud.

2. Kasutage klahvi `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; hüpikmenüü kutsumiseks, mis loetleb võimalikud tegevused klahvi `{{<T "Ok" >}}` vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "ActionMenu" >}}` esiletõstmiseks ja valige tegevus keskse `{{<T "Ok" >}}` klahvi või klahvi `F3` `{{<T "Ok" >}}` abil.

3. Äratusnimekirjas kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage valikuga `{{<T "Ok" >}}`. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja nooleklahve ◁ ▷ △ ▽ soovitud numbrite valimiseks. Lõpuks kinnitage valikuga `{{<T "Ok" >}}`.

4. `{{<T "Actions" >}}` menüü avaneb automaatselt. Tegevuste käsitlemist leiate [siit](/et/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Tegevusmenüü")

### Looma andmed {#animal-data}

1. Viige lõpule esialgsed sammud.

2. Kasutage klahvi `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; hüpikmenüü kutsumiseks, mis loetleb võimalikud tegevused klahvi `{{<T "Ok" >}}` vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "AnimalData" >}}` esiletõstmiseks ja valige tegevus keskse `{{<T "Ok" >}}` klahvi või klahvi `F3` `{{<T "Ok" >}}` abil.

3. Äratusnimekirjas kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage valikuga `{{<T "Ok" >}}`. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja nooleklahve ◁ ▷ △ ▽ soovitud numbrite valimiseks. Lõpuks kinnitage valikuga `{{<T "Ok" >}}`.

4. Looma andmed kuvatakse nüüd.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Looma andmed")

### Võta temperatuur {#take-temperature}

1. Täida eelnevad sammud.

2. Kasuta `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` klahvi vajutamisel. Kasuta nooleklahve △ ▽, et esile tõsta tegevus `{{<T "TempTaking" >}}` ja vali tegevus vajutades keskmist `{{<T "Ok" >}}` klahvi või `F3` klahvi `{{<T "Ok" >}}`.

3. Alarmide nimekirjas kasuta nooleklahve △ ▽, et valida soovitud loom ja kinnita valikuga `{{<T "Ok" >}}`. Alternatiivselt võid otsida looma. Kasuta `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja kasuta nooleklahve ◁ ▷ △ ▽, et valida soovitud numbrid. Lõpuks kinnita valikuga `{{<T "Ok" >}}`.

4. Funktsioon [Mõõda temperatuuri](/et/docs/actions/measure-temperature/#measure-fever) käivitub nüüd automaatselt.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Võta temperatuur")

### Hinda looma {#rate-animal}

1. Täida eelnevad sammud.

2. Kasuta `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` klahvi vajutamisel. Kasuta nooleklahve △ ▽, et esile tõsta tegevus `{{<T "RateAnimal" >}}` ja vali tegevus vajutades keskmist `{{<T "Ok" >}}` klahvi või `F3` klahvi `{{<T "Ok" >}}`.

3. Alarmide nimekirjas kasuta nooleklahve △ ▽, et valida soovitud loom ja kinnita valikuga `{{<T "Ok" >}}`. Alternatiivselt võid otsida looma. Kasuta `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja kasuta nooleklahve ◁ ▷ △ ▽, et valida soovitud numbrid. Lõpuks kinnita valikuga `{{<T "Ok" >}}`.

4. Funktsioon [Hinda looma](/et/docs/actions/rating/#rate-your-animals) käivitub nüüd automaatselt.

   ![VitalControl Lists Alarmlist](../images/rateanimal.png "Hinda looma")

### Kustuta alarm {#clear-alarm}

1. Täida eelnevad sammud.

2. Kasuta `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` klahvi vajutamisel. Kasuta nooleklahve △ ▽, et esile tõsta tegevus `{{<T "ClearAlarm" >}}` ja vali tegevus vajutades keskmist `{{<T "Ok" >}}` klahvi või `F3` klahvi `{{<T "Ok" >}}`.

3. Äratusnimekirjas kasutage soovitud looma valimiseks nooleklahve △ ▽ ja kinnitage valik nupuga `{{<T "Ok" >}}`. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja valige soovitud numbrid nooleklahvidega ◁ ▷ △ ▽. Lõpuks kinnitage valik nupuga `{{<T "Ok" >}}`.

4. Loom on nüüd äratusnimekirjast eemaldatud.

   ![VitalControl Lists Alarmlist](../images/clearalarm.png "Eemalda häire")

### Lülita jälgimisstaatus {#toggle-watch-status}

1. Täitke eelnevad sammud.

2. Kasutage nuppu `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; hüpikmenüü esilekutsumiseks, mis loetleb võimalikud tegevused nupu `{{<T "Ok" >}}` vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "ToggleWatchStatus" >}}` esiletõstmiseks ja valige tegevus keskmise nupuga `{{<T "Ok" >}}` või nupuga `F3` `{{<T "Ok" >}}`.

3. Äratusnimekirjas kasutage soovitud looma valimiseks nooleklahve △ ▽ ja kinnitage valik nupuga `{{<T "Ok" >}}`. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja valige soovitud numbrid nooleklahvidega ◁ ▷ △ ▽. Lõpuks kinnitage valik nupuga `{{<T "Ok" >}}`.

4. Loom lisatakse või eemaldatakse jälgimisnimekirjast olenevalt tema algsest staatusest.

   ![VitalControl Lists Alarmlist](../images/watchlist.png "Lülita jälgimisstaatus")

### Otsi looma {#search-animal}

1. Täitke eelnevad sammud.

2. Kasutage nuppu `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; hüpikmenüü esilekutsumiseks, mis loetleb erinevaid valikuid. Kasutage nooleklahve △ ▽ funktsiooni `{{<T "SearchAnimal" >}}` esiletõstmiseks ja otsingufunktsiooni käivitamiseks vajutage keskmist nuppu `{{<T "Ok" >}}` või nuppu `F3` `{{<T "Ok" >}}`.

3. Kasutage soovitud looma ID valimiseks nooleklahve △ ▽ ◁ ▷. Alternatiivselt võite looma otsida. Kasutage nuppu `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja valige soovitud numbrid nooleklahvidega ◁ ▷ △ ▽. Lõpuks kinnitage valik nupuga `{{<T "Ok" >}}`.

![VitalControl Lists Alarmlist](../images/searchanimal.png "Otsi looma")

### Seadista filter {#set-filter}

1. Täida eelnevad sammud.

2. Kasuta `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Ava hüpikaken" />&nbsp; hüpikmenüü esilekutsumiseks, mis loetleb erinevaid valikuid. Kasuta nooleklahve △ ▽ funktsiooni `{{<T "SetFilter" >}}` esiletõstmiseks ja filtri funktsiooni käivitamiseks vajuta keskset `{{<T "Ok" >}}` klahvi või `F3` klahvi `{{<T "Ok" >}}`.

3. Seadista soovitud filter. Kuidas filtrit kasutada, leiad [siit](../../filter/#applying-filters).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Seadista filter")
