---
title: Tegevuste nimekiri
linkTitle: Tegevuste nimekiri
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Vaata oma tegevuste nimekirja.
categories: [Nimekirjad]
tags: [Nimekirjad, Tegevus]
translationKey: lists/action
---
## Tegevuste nimekiri {#action-list}

Tegevuste nimekirjas näete loomi, kellele pole kuue tunni jooksul tegevusi tehtud. Samuti on saadaval järgmised seadistusvõimalused:

- [Võta temperatuur](../alarm/#take-temperature)
- [Hinda loomi](../alarm/#rate-animal)
- [Kaaluge loomi](#weigh-animals)
- [Tegevuste ahel](#chain-of-action)
- [Ühenda transponder](#link-transponder)
- [Peida pärast tegevust](#hide-after-action)
- [Otsi looma](../alarm/#search-animal)
- [Sea filter](../alarm/#set-filter)

{{% alert title="Vihje" %}}
Mõned tegevused tuleb teha samamoodi nagu [häirete nimekirjas](../alarm). Neid siin ei selgitata. Tee eelnevad sammud ja kasuta vastava tegevuse linki juhiste juurde jõudmiseks.
{{% /alert %}}

### Eelsammud {#preliminary-steps}

1. Valige peamenüüs <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Nimekirjad" />  `{{<T "Lists" >}}` menüüpunkt ja vajutage `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü, kus kuvatakse erinevad nimekirja ikoonid. Tõstke esile ikoon <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Tegevuste nimekiri" /> `{{<T "ActionList" >}}` ja kinnitage `{{<T "Ok" >}}` nupuga.

3. Tegevuste nimekiri on nüüd avatud.

   ![VitalControl Nimekirjad Tegevuste nimekiri](../images/firststeps3.png "Eelsammud")

### Kaaluge loomi {#weigh-animals}

1. Täitke eelsammud.

2. Kasutage `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Ava hüpikaken" />&nbsp; hüpikmenüü kutsumiseks, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` nupu vajutamisel. Kasutage nooleklahve △ ▽, et esile tõsta tegevus `{{<T "WeighAnimal" >}}` ja valige see võimalus vajutades keskset `{{<T "Ok" >}}` nuppu või `F3` klahvi `{{<T "Ok" >}}`.

3. Tegevuste nimekirjas kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage `{{<T "Ok" >}}` nupuga. Alternatiivina võite otsida looma. Kasutage `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Otsi" /> ja kasutage nooleklahve ◁ ▷ △ ▽ soovitud numbrite valimiseks. Lõpuks kinnitage `{{<T "Ok" >}}`.

4. [Loomade kaalumise](../../actions/record-weight/) menüü avaneb automaatselt.

   ![VitalControl Lists Action list](../images/weightanimals.png "Loomade kaalumine")

### Tegevuste jada {#chain-of-action}

1. Viige lõpule eelnevad sammud.

2. Kasutage `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Ava hüpikaken" />&nbsp; hüpikmenüü kutsumiseks, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` nupu vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "ActionChain" >}}` esiletõstmiseks ja valige see võimalus keskse `{{<T "Ok" >}}` nupu või `F3` klahvi `{{<T "Ok" >}}` abil.

3. Tegevuste loendis kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage `{{<T "Ok" >}}`-ga. Alternatiivina võite looma otsida. Kasutage `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Otsing" /> ja valige nooleklahvidega ◁ ▷ △ ▽ soovitud numbrid. Lõpuks kinnitage `{{<T "Ok" >}}`-ga.

4. [Tegevuste jada](../../chain-of-actions) funktsioon avaneb automaatselt.

   ![VitalControl Lists Action list](../images/chainofaction.png "Tegevuste jada")

### Ühenda transponder {#link-transponder} 

Seda funktsiooni kasutatakse transponderi lisamiseks loomade andmekirjele, kellele pole veel transponderit määratud.

1. Viige lõpule eelnevad sammud.

2. Kasutage `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Ava hüpikaken" />&nbsp; hüpikmenüü kutsumiseks, mis loetleb võimalikud tegevused `{{<T "Ok" >}}` nupu vajutamisel. Kasutage nooleklahve △ ▽ tegevuse `{{<T "LinkTransponder" >}}` esiletõstmiseks ja valige see võimalus keskse `{{<T "Ok" >}}` nupu või `F3` klahvi `{{<T "Ok" >}}` abil.

3. Tegevuste loendis kasutage nooleklahve △ ▽ soovitud looma valimiseks ja kinnitage `{{<T "Ok" >}}`-ga. Alternatiivina võite looma otsida. Kasutage `On/Off` nuppu <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Otsing" /> ja valige nooleklahvidega ◁ ▷ △ ▽ soovitud numbrid. Lõpuks kinnitage `{{<T "Ok" >}}`-ga.

4. Skaneerige nüüd vastava looma transponder.

   ![VitalControl Lists Action list](../images/linktransponder.png "Ühenda transponder")

### Peida pärast tegevust {#hide-after-action}

Kui see funktsioon on aktiveeritud, peidetakse loomad, kellele on tegevus tehtud, tegevuste nimekirjast. Kui see funktsioon on deaktiveeritud, jäävad töödeldud loomad nimekirja nähtavale.

1. Täida eelnevad sammud.

2. Kasuta `F3` klahvi &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; et kutsuda esile hüpikmenüü, mis loetleb erinevaid valikuid. Kasuta nooleklahve △ ▽, et esile tõsta valik `{{<T "HideAfterAction" >}}` ja lülita see valik sisse/välja vajutades keskset `{{<T "Ok" >}}` nuppu või `F3` klahvi `{{<T "Ok" >}}`.

3. `{{<T "HideAfterAction" >}}` funktsioon on nüüd sisse/välja lülitatud. Aktiveerimist näitab märkeruut.

   ![VitalControl Lists Action list](../images/hideafteraction.png "Peida pärast tegevust")
