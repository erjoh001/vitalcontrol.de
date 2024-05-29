---
title: Hälytys
linkTitle: Hälytys
slug: alarm
weight: 60
description: >
 Lisää ja poista eläimiä hälytyslistalta.
date: 2023-07-26
categories: [Toiminnat]
tags: [Toiminnat, Hälytys]
translationKey: actions/alarm
---

## Hälytys {#alert}

Toiminnolla `{{<T "Alarm" >}}` voit lisätä eläimiä hälytyslistalle tai poistaa niitä sieltä. Hälytyslista auttaa sinua löytämään huomiota herättävät eläimet nopeammin ja helpommin, mikä tekee päivittäisistä tarkastuksistasi helpompia. Toimiaksesi `{{<T "Alarm" >}}` toiminnolla, toimi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> ja paina `{{<T "Ok" >}}`-nappia.

2. Joko skannaa eläin käyttäen transponderia tai valitse eläin listalta. Vahvista `{{<T "Ok" >}}`-näppäimellä ja valitse eläin nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`-näppäimellä.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Lisää hälytys" /> `{{<T "Alarm" >}}` toiminnon ja vahvista `{{<T "Ok" >}}`-näppäimellä.

4. Ilmoitus näkyy, että eläin on onnistuneesti lisätty hälytyslistalle ja eläimen näyttö otsikossa muuttuu. Symboli &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Eläin hälytyksessä" /> osoittaa, että tämä eläin on hälytyslistalla.

5. Voit poistaa eläimen hälytyslistalta uudelleen soveltamalla &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Poista hälytys" /> `{{<T "Alarm" >}}` toimintoa uudelleen. Lisäätkö vai poistatko eläimen hälytyslistalta käyttämällä `{{<T "Alarm" >}}` toimintoa, osoitetaan pienellä + tai - merkillä.

{{< tabpane >}}
{{< tab header="Hälytys:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminnat Hälytys](../images/alarm-scan.png "Hälytys")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminnat Hälytys](../images/alarm.png "Hälytys")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vihje" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti poistettu käytöstä! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo kyseisen toiminnon takaisin.
{{% /alert %}}
