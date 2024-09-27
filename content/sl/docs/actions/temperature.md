---
title: Merjenje temperature
linkTitle: Temperatura
slug: measure-temperature
weight: 10
description: >
  Merjenje vročine pri vaših živalih.
date: 2023-07-26
Categories: [Dejanja]
tags: [Dejanja, vročina, temperatura]
translationKey: actions/temperature
---

## Merjenje vročine {#measure-fever}

Uporabite dejanje merjenja temperature za merjenje temperature vaših živali. Vstavite merilno konico rektalno do določene globine merjenja (pri velikih živalih celotno dolžino do izbokline, pri majhnih prežvekovalcih približno 6 cm ali 2/3 merilne konice). Merilni postopek poteka samodejno. Takoj, ko je merilni postopek končan, naprava prikaže izmerjeno temperaturo. Barvna oznaka označuje, ali je temperatura v zelenem, rumenem ali rdečem območju. Med kampanjo za merjenje temperature imate več možnosti:

- [Shrani rezultat](#save-result) za dokumentiranje meritve specifično za žival
- Postavite žival na [Seznam za opazovanje](#put-on-the-watch-list). To vam olajša preverjanje ponovitev, saj lahko te živali prikličete s pomočjo 'seznama za opazovanje' in tako lažje najdete opazne živali.
- Vklopite in izklopite [Osvetlitev merilnega mesta](#lighting-of-the-measurement-location-on-and-off)
- [Ponovite meritev](#repeat-the-measurement)
- [Prekliči dejanje](#cancel-the-action)

{{% alert title="Namig" %}}
Če je temperatura v rumenem območju ("povišana") ali rdečem območju ("vročina"), VitalControl samodejno postavi izbrano žival na seznam alarmov. S korelacijo z drugimi podatki lahko neprekinjeno spremljate zdravje posamezne živali.
{{% /alert %}}

### Predhodni koraki {#preliminary-steps}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Dejanja" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Bodisi skenirajte žival s transponderjem ali izberite žival s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščicama △ ▽. Potrdite z `{{<T "Ok" >}}`.


3. Odpre se podmeni z dejanji živali. Dejanje <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` je samodejno izbrano. Potrdite z `{{<T "Ok" >}}`.

4. Zdaj izvedite meritev. Takoj ko je meritev zaključena, je temperatura označena z modro, zeleno, rumeno ali rdečo barvo, odvisno od nastavljenega praga.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Shranjevanje rezultata {#save-result}

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ali potrdite z `{{<T "Ok" >}}` za shranjevanje rezultata.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Dodaj na seznam za spremljanje {#put-on-the-watch-list}

1. Dokončajte predhodne korake.

2. Pritisnite zgornji srednji gumb `Vklop/Izklop` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Odpre se pojavni meni, v katerem lahko izberete med menijskimi elementi `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ali `{{<T "Flashlight" >}}`. Uporabite puščične tipke △ ▽ za izbiro `{{<T "AddToWatchList" >}}` in pritisnite osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Vklop in izklop osvetlitve merilnega mesta {#lighting-of-the-measurement-location-on-and-off}

1. Dokončajte predhodne korake.

2. Pritisnite zgornji srednji gumb `Vklop/Izklop` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.


3. Odpre se pojavni meni, v katerem lahko izberete med elementi menija `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ali `{{<T "Flashlight" >}}`. Uporabite puščične tipke △ ▽ za izbiro `{{<T "Flashlight" >}}` in pritisnite osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Ponovite meritev {#repeat-the-measurement}

1. Dokončajte predhodne korake.

2. Pritisnite zgornji srednji gumb `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Odpre se pojavni meni, v katerem lahko izberete med elementi menija `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ali `{{<T "Flashlight" >}}`. Uporabite puščične tipke △ ▽ za izbiro `{{<T "RepeatMeasurement" >}}` in pritisnite osrednjo tipko `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Prekliči dejanje {#cancel-the-action}

1. Dokončajte predhodne korake.

2. Pritisnite tipko `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> za preklic dejanja.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Namig" %}}
Če to dejanje ni na voljo, je verjetno bilo deaktivirano! Aktivirajte dejanje v meniju [nastavitve dejanj](../setting/). Alternativno, ponastavitev vseh dejanj bo ponovno omogočila to dejanje.
{{% /alert %}}
