---
title: Mjerenje temperature
linkTitle: Temperatura
slug: measure-temperature
weight: 10
description: >
  Mjerenje temperature kod vaših životinja.
date: 2023-07-26
Categories: [Actions]
tags: [Actions, fever, temperature]
translationKey: actions/temperature
---

## Mjerenje temperature {#measure-fever}

Koristite akciju mjerenja temperature za mjerenje temperature vaših životinja. Umetnite vrh za mjerenje rektalno do specificirane dubine mjerenja (za velike životinje cijelom dužinom do izbočine, za male preživače otprilike 6 cm ili 2/3 vrha za mjerenje). Proces mjerenja se odvija automatski. Čim je proces mjerenja završen, uređaj prikazuje izmjerenu temperaturu. Kodiranje bojama pokazuje je li temperatura u zelenom, žutom ili crvenom rasponu. Imate nekoliko opcija tijekom kampanje za mjerenje temperature:

- [Spremite rezultat](#save-result) kako biste dokumentirali mjerenje specifično za životinju
- Stavite životinju na [Listu za praćenje](#put-on-the-watch-list). To vam olakšava provjeru ponavljanja, jer možete pozvati te životinje pomoću 'liste za promatranje' i tako lakše pronaći upadljive životinje.
- Uključite i isključite [Osvjetljenje mjesta mjerenja](#lighting-of-the-measurement-location-on-and-off)
- [Ponovite mjerenje](#repeat-the-measurement)
- [Otkažite akciju](#cancel-the-action)

{{% alert title="Savjet" %}}
Ako je temperatura u žutom području ("povišena") ili crvenom području ("groznica"), VitalControl automatski stavlja odabranu životinju na listu alarma. Korelacijom s drugim podacima možete kontinuirano pratiti zdravlje pojedine životinje.
{{% /alert %}}

### Preliminarni koraci {#preliminary-steps}

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju s popisa. Potvrdite s `{{<T "Ok" >}}` i odaberite životinju pomoću tipki sa strelicama △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se podizbornik s radnjama za životinje. Radnja <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` automatski je odabrana. Potvrdite s `{{<T "Ok" >}}`.

4. Sada izvršite mjerenje. Čim je mjerenje završeno, temperatura će biti istaknuta plavom, zelenom, žutom ili crvenom bojom, ovisno o postavljenom pragu.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Spremi rezultat {#save-result}

1. Dovršite preliminarne korake.

2. Koristite tipku `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ili potvrdite s `{{<T "Ok" >}}` za spremanje rezultata.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Stavite na popis za praćenje {#put-on-the-watch-list}

1. Dovršite preliminarne korake.

2. Pritisnite srednju gornju tipku `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Otvorit će se skočni izbornik u kojem možete odabrati stavke iz izbornika `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ili `{{<T "Flashlight" >}}`. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "AddToWatchList" >}}` i pritisnite središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Uključivanje i isključivanje osvjetljenja mjesta mjerenja {#lighting-of-the-measurement-location-on-and-off}

1. Dovršite preliminarne korake.

2. Pritisnite srednju gornju tipku `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.


3. Otvorit će se skočni izbornik u kojem možete odabrati stavke iz izbornika `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ili `{{<T "Flashlight" >}}`. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "Flashlight" >}}` i pritisnite središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Ponovite mjerenje {#repeat-the-measurement}

1. Dovršite preliminarne korake.

2. Pritisnite srednju gornju tipku `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Otvorit će se skočni izbornik u kojem možete odabrati stavke iz izbornika `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ili `{{<T "Flashlight" >}}`. Koristite tipke sa strelicama △ ▽ za odabir `{{<T "RepeatMeasurement" >}}` i pritisnite središnju tipku `{{<T "Ok" >}}` ili tipku `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Otkazivanje radnje {#cancel-the-action}

1. Dovršite preliminarne korake.

2. Pritisnite tipku `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> za otkazivanje radnje.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Hint" %}}
Ako ova radnja nije dostupna, radnja je vjerojatno deaktivirana! Aktivirajte radnju u izborniku [postavke radnje](../setting/). Alternativno, resetiranje svih radnji će ponovno omogućiti tu radnju.
{{% /alert %}}
