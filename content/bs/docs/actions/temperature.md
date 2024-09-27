---
title: Mjerenje temperature
linkTitle: Temperatura
slug: measure-temperature
weight: 10
description: >
  Mjerite temperaturu kod vaših životinja.
date: 2023-07-26
Categories: [Actions]
tags: [Actions, groznica, temperatura]
translationKey: actions/temperature
---

## Mjerenje groznice {#measure-fever}

Koristite akciju mjerenja temperature za mjerenje temperature vaših životinja. Umetnite vrh za mjerenje rektalno do specificirane dubine mjerenja (za velike životinje cijelom dužinom do izbočine, za male preživače otprilike 6 cm ili 2/3 vrha za mjerenje). Proces mjerenja se odvija automatski. Čim je proces mjerenja završen, uređaj prikazuje izmjerenu temperaturu. Kodiranje bojama pokazuje da li je temperatura u zelenom, žutom ili crvenom rasponu. Imate nekoliko opcija tokom kampanje za mjerenje temperature:

- [Spremite rezultat](#save-result) za dokumentovanje mjerenja specifično za životinju
- Stavite životinju na [Listu za praćenje](#put-on-the-watch-list). Ovo vam olakšava provjeru ponavljanja, jer možete pozvati ove životinje koristeći 'listu za praćenje' i tako lakše pronaći upadljive životinje.
- Uključite i isključite [Osvjetljenje mjesta mjerenja](#lighting-of-the-measurement-location-on-and-off)
- [Ponovite mjerenje](#repeat-the-measurement)
- [Otkažite akciju](#cancel-the-action)

{{% alert title="Savjet" %}}
Ako je temperatura u žutom području ("povišena") ili crvenom području ("groznica"), VitalControl automatski stavlja odabranu životinju na listu alarma. Korelacijom s drugim podacima, možete kontinuirano pratiti zdravlje pojedinačne životinje.
{{% /alert %}}

### Preliminarni koraci {#preliminary-steps}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju sa liste. Potvrdite sa `{{<T "Ok" >}}` i odaberite životinju sa strelicama △ ▽. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se podmeni sa akcijama za životinje. Akcija <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` je automatski odabrana. Potvrdite sa `{{<T "Ok" >}}`.

4. Sada izvršite mjerenje. Čim se mjerenje završi, temperatura će biti istaknuta plavom, zelenom, žutom ili crvenom bojom, ovisno o postavljenom pragu.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Sačuvaj rezultat {#save-result}

1. Završite preliminarne korake.

2. Koristite `F3` tipku <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ili potvrdite sa `{{<T "Ok" >}}` da sačuvate rezultat.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Stavite na listu za praćenje {#put-on-the-watch-list}

1. Završite preliminarne korake.

2. Pritisnite srednje gornje dugme `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Otvara se popup meni u kojem možete odabrati stavke iz menija `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ili `{{<T "Flashlight" >}}`. Koristite strelice △ ▽ da odaberete `{{<T "AddToWatchList" >}}` i pritisnite centralno dugme `{{<T "Ok" >}}` ili `F3` tipku `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Uključivanje i isključivanje osvjetljenja mjesta mjerenja {#lighting-of-the-measurement-location-on-and-off}

1. Završite preliminarne korake.

2. Pritisnite srednje gornje dugme `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Otvara se iskačući meni u kojem možete odabrati stavke iz menija `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ili `{{<T "Flashlight" >}}`. Koristite strelice △ ▽ za odabir `{{<T "Flashlight" >}}` i pritisnite centralni taster `{{<T "Ok" >}}` ili taster `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Ponovite mjerenje {#repeat-the-measurement}

1. Završite preliminarne korake.

2. Pritisnite srednje gornje dugme `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Otvara se iskačući meni u kojem možete odabrati stavke iz menija `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` ili `{{<T "Flashlight" >}}`. Koristite strelice △ ▽ za odabir `{{<T "RepeatMeasurement" >}}` i pritisnite centralni taster `{{<T "Ok" >}}` ili taster `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Otkažite akciju {#cancel-the-action}

1. Završite preliminarne korake.

2. Pritisnite taster `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> da otkažete akciju.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Hint" %}}
Ako ova akcija nije dostupna, vjerovatno je deaktivirana! Aktivirajte akciju u meniju [postavke akcije](../setting/). Alternativno, resetovanje svih akcija će vratiti tu akciju.
{{% /alert %}}
