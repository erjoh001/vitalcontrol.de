---
title: Mittaa lämpötila
linkTitle: Lämpötila
slug: measure-temperature
weight: 10
description: >
  Mittaa kuume eläimilläsi.
date: 2023-07-26
luokat: [Toiminnot]
tagit: [Toiminnot, kuume, lämpötila]
translationKey: actions/temperature
---

## Mittaa kuume {#measure-fever}

Käytä lämpötilatoimintoa eläintesi lämpötilan mittaamiseen. Aseta mittauskärki peräsuoleen määritettyyn syvyyteen (suurilla eläimillä koko pituus pullistumaan asti, pienillä märehtijöillä noin 6 cm tai 2/3 mittauskärjestä). Mittausprosessi toimii automaattisesti. Heti kun mittausprosessi on valmis, laite näyttää mitatun lämpötilan. Värikoodaus osoittaa, onko lämpötila vihreällä, keltaisella tai punaisella alueella. Sinulla on useita vaihtoehtoja Lämpötilan mittaus -kampanjan aikana:

- [Tallenna tulos](#save-result) dokumentoidaksesi mittauksen eläinkohtaisesti
- Lisää [katsottavien listaan](#put-on-the-watch-list). Tämä helpottaa toistojen tarkistamista, koska voit kutsua nämä eläimet esiin 'tarkkailulistan' avulla ja siten löytää helpommin huomiotaherättävät eläimet.
- Kytke [Mittauspaikan valaistus](#lighting-of-the-measurement-location-on-and-off) päälle ja pois
- [Toista mittaus](#repeat-the-measurement)
- [Peruuta toiminto](#cancel-the-action)

{{% alert title="Vihje" %}}
Jos lämpötila on keltaisella alueella ("kohonnut") tai punaisella alueella ("kuume"), VitalControl asettaa automaattisesti valitun eläimen hälytyslistalle. Yhdistämällä muita tietoja voit jatkuvasti seurata yksittäisen eläimen terveyttä.
{{% /alert %}}

### Alustavat vaiheet 

1. Valitse VitalControl-laitteesi päänäytössä valikkokohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnot" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-painiketta.

2. Joko skannaa eläin transponderilla tai valitse eläin listalta. Vahvista `{{<T "Ok" >}}`-painikkeella ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`-painikkeella.

3. Alivalikko eläintoiminnoille avautuu. Toiminto <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Lämpötila" /> `{{<T "Temperature" >}}` on automaattisesti valittuna. Vahvista `{{<T "Ok" >}}`-painikkeella.

4. Suorita mittaus. Heti kun mittaus on valmis, lämpötila korostetaan sinisenä, vihreänä, keltaisena tai punaisena asetetun kynnyksen mukaan.

{{< tabpane >}}
{{< tab header="Alustavat vaiheet:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminnot Alustavat vaiheet](../images/firststeps-scan.png "Alustavat vaiheet")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko Toiminnot Alustavat vaiheet](../images/firststeps.png "Alustavat vaiheet")
{{% /tab %}}
{{< /tabpane >}}

### Tallenna tulos {#save-result}

1. Suorita alustavat vaiheet.

2. Käytä `F3`-näppäintä <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Tallenna" /> tai vahvista `{{<T "Ok" >}}`-painikkeella tuloksen tallentamiseksi.

    ![VitalControl: Valikko Toiminnot Tallenna tulokset](../images/saveresults.png "Tallenna tulokset")

### Lisää katsottavien listaan {#put-on-the-watch-list}

1. Suorita alustavat vaiheet.

2. Paina keskimmäistä yläpuolella olevaa `On/Off`-painiketta <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Avaa ponnahdusikkuna" />.

3. Ponnahdusvalikko avautuu, josta voit valita valikkokohteista `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` tai `{{<T "Flashlight" >}}`. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "AddToWatchList" >}}` ja paina keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

    ![VitalControl: Valikko Toiminnot Lisää katsottavien listaan](../images/watchlist.png "Lisää katsottavien listaan")

### Mittauspaikan valaistuksen kytkeminen päälle ja pois {#lighting-of-the-measurement-location-on-and-off}

1. Suorita alustavat vaiheet.

2. Paina keskimmäistä yläpuolella olevaa `On/Off`-painiketta <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Avaa ponnahdusikkuna" />.

3. Ponnahdusvalikko avautuu, josta voit valita valikkokohteista `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` tai `{{<T "Flashlight" >}}`. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "Flashlight" >}}` ja paina keskimmäistä `{{<T "Ok" >}}`-näppäintä tai `F3`-näppäintä `{{<T "Ok" >}}`.

    ![VitalControl: Valikko Toiminnot Valo päälle pois](../images/light.png "Valo päälle pois")

### Toista mittaus {#repeat-the-measurement}

1. Suorita alustavat vaiheet.

2. Paina keskimmäistä yläreunan `On/Off` -painiketta <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Avaa ponnahdusikkuna" />.

3. Ponnahdusvalikko avautuu, josta voit valita valikkokohteista `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` tai `{{<T "Flashlight" >}}`. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RepeatMeasurement" >}}` ja paina keskimmäistä `{{<T "Ok" >}}` -näppäintä tai `F3` -näppäintä `{{<T "Ok" >}}`.

    ![VitalControl: Valikon toiminnot Valo päällä pois päältä](../images/repeat.png "Valo päällä pois päältä")

### Peruuta toiminto {#cancel-the-action}

1. Suorita alustavat vaiheet.

2. Paina `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Peruuta" /> -näppäintä peruuttaaksesi toiminnon.

    ![VitalControl: Valikon toiminnot Peruuta toiminto](../images/saveresults.png "Peruuta toiminto")

{{% alert title="Vihje" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti poistettu käytöstä! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo kyseisen toiminnon takaisin.
{{% /alert %}}
