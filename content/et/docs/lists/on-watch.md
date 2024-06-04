---
title: "Jälgimisnimekirjas"
linkTitle: "Jälgimisnimekirjas"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Vaata oma jälgimisnimekirja.
categories: [Nimekirjad]
tags: [Nimekirjad, jälgimisel]
translationKey: lists/on-watch
---
## Jälgimisnimekirjas {#on-watch-list}

Jälgimisnimekirjas leiad kõik loomad, mille oled käsitsi nimekirja lisanud. Nimekiri aitab sul hoida ülevaadet loomadest, mida oled hinnanud märkimisväärseks. Samuti saad iga nimekirjas oleva looma kohta teha järgmist:

- [Täielik tegevusmenüü](../alarm/#full-action-menu)
- [Looma andmed](../alarm/#animal-data)
- [Võta temperatuur](../alarm/#take-temperature)
- [Hinda looma](../alarm/#rate-animal)
- [Eemalda jälgimisnimekirjast](#remove-from-watch-list)
- [Muuda häire olekut](#toggle-alarm-status)
- [Otsi looma](../alarm/#search-animal)
- [Sea filter](../alarm/#set-filter)

{{% alert title="Vihje" %}}
Mõned tegevused tuleb teha samamoodi nagu [Häirenimekirjas](../alarm). Neid siin ei selgitata. Tee eelnevad sammud ja kasuta vastava tegevuse linki juhiste juurde jõudmiseks.
{{% /alert %}}

Häirenimekiri on struktureeritud järgmiselt:

   ![VitalControl Nimekirjad Jälgimisnimekiri](../images/onwatchstructure.png "Jälgimisnimekirja struktuur")

|Sümbol   | Kirjeldus
|---------|-----
| ![VitalControl Nimekirjad Jälgimisnimekiri](../images/kopf.png "Karja suuruse loendur") | Näitab, mitu looma on nimekirjas
| ![Ikoon lehma kohta](../images/kopf2.png "Lehma pea") | Näitab, kas valitud loom on vasikas või lehm
| ![VitalControl Nimekirjad Jälgimisnimekiri](../images/auge.png "Hinnang") | Sümboli all kuvatakse viimane salvestatud hinnang foori värvidega
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kehatemperatuur" title="Kehatemperatuur" /> | Sümboli all kuvatakse viimane palavikumõõtmine foori värvidega
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Kuva loom häirenimekirjas" title="Loom häires" /> | Sümboli all olev ring märgib, et loom on häirenimekirjas

### Eelsammud {#preliminary-steps}

1. Valige põhiekraanil <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` menüüpunkt ja vajutage `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevaid listisid. Valige list &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`. Kinnitage valikuga `{{<T "Ok" >}}`.

3. List `{{<T "OnWatch" >}}` on nüüd avatud.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Eelsammud")

### Eemalda valvelistist {#remove-from-watch-list}

1. Täitke eelsammud.

2. Kasutage `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` nupu vajutamisel. Kasutage nooleklahve △ ▽, et esile tõsta tegevus `{{<T "RemoveFromWatchList" >}}` ja valige see võimalus vajutades keskset `{{<T "Ok" >}}` nuppu või `F3` klahvi `{{<T "Ok" >}}`.

3. Valvelistis kasutage nooleklahve △ ▽, et valida soovitud loom ja kinnitage valikuga `{{<T "Ok" >}}`. Alternatiivina võite looma otsida. Kasutage `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja kasutage nooleklahve ◁ ▷ △ ▽, et valida soovitud numbrid. Lõpuks kinnitage valikuga `{{<T "Ok" >}}`.

4. Loom on nüüd valvelistist eemaldatud.

   ![VitalControl Lists On watch list](../images/remove.png "Eemalda valvelistist")

### Lülita häire olekut {#toggle-alarm-status}

1. Täitke eelsammud.

2. Kasutage `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` nupu vajutamisel. Kasutage nooleklahve △ ▽, et esile tõsta tegevus `{{<T "ToggleAlarmStatus" >}}` ja valige see võimalus vajutades keskset `{{<T "Ok" >}}` nuppu või `F3` klahvi `{{<T "Ok" >}}`.

3. Valvelistis kasutage nooleklahve △ ▽, et valida soovitud loom ja kinnitage valikuga `{{<T "Ok" >}}`. Alternatiivina võite looma otsida. Kasutage `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> ja kasutage nooleklahve ◁ ▷ △ ▽, et valida soovitud numbrid. Lõpuks kinnitage valikuga `{{<T "Ok" >}}`.

4. Loom lisatakse või eemaldatakse häireloendist sõltuvalt tema algsest seisundist.

   ![VitalControl Lists Toggle alarm status](../images/alarmstatus.png "Lülita häireseisund")
