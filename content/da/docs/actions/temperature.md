---
title: Mål temperatur
linkTitle: Temperatur
slug: measure-temperature
weight: 10
description: >
  Mål feber hos dine dyr.
date: 2023-07-26
kategorier: [Handlinger]
tags: [Handlinger, feber, temperatur]
translationKey: actions/temperature
---

## Mål feber {#measure-fever}

Brug temperaturhandlingen til at måle temperaturen på dine dyr. Indsæt målespidsen rektalt til den angivne måledybde (for store dyr hele længden op til bulen, for små drøvtyggere ca. 6 cm eller 2/3 af målespidsen). Måleprocessen kører automatisk. Så snart måleprocessen er afsluttet, viser enheden den målte temperatur. Farvekodningen angiver, om temperaturen er i det grønne, gule eller røde område. Du har en række muligheder under Tag en temperaturkampagne:

- [Gem resultatet](#save-result) for at dokumentere målingen dyrespecifikt
- Sæt dyret på [Overvågningslisten](#put-on-the-watch-list). Dette gør det lettere for dig at kontrollere gentagelserne, da du kan kalde disse dyr op ved hjælp af 'observationslisten' og dermed finde de iøjnefaldende dyr lettere.
- Tænd og sluk for [Målepladsbelysningen](#lighting-of-the-measurement-location-on-and-off)
- [Gentag målingen](#repeat-the-measurement)
- [Annuller handlingen](#cancel-the-action)

{{% alert title="Tip" %}}
Hvis temperaturen er i det gule område ("forhøjet") eller røde område ("feber"), sætter VitalControl automatisk det valgte dyr på alarmlisten. Ved at korrelere med andre data kan du kontinuerligt overvåge det enkelte dyrs helbred.
{{% /alert %}}

### Forberedende trin {#preliminary-steps}

1. På hovedskærmen på din VitalControl-enhed skal du vælge menuen &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Handlinger" /> `{{<T "Actions" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller vælg et dyr fra listen. Bekræft med `{{<T "Ok" >}}` og vælg et dyr med piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.


3. En undermenu med dyrehandlingerne åbnes. Handlingen <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` er automatisk valgt. Bekræft med `{{<T "Ok" >}}`.

4. Udfør nu målingen. Så snart målingen er afsluttet, fremhæves temperaturen i blå, grøn, gul eller rød, afhængigt af den indstillede tærskel.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Gem resultat {#save-result}

1. Fuldfør de indledende trin.

2. Brug `F3` tasten <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> eller bekræft med `{{<T "Ok" >}}` for at gemme resultatet.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Sæt på overvågningslisten {#put-on-the-watch-list}

1. Fuldfør de indledende trin.

2. Tryk på den midterste øverste `On/Off` knap <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. En popup-menu åbnes, hvor du kan vælge mellem menupunkterne `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` eller `{{<T "Flashlight" >}}`. Brug piletasterne △ ▽ til at vælge `{{<T "AddToWatchList" >}}` og tryk på den centrale `{{<T "Ok" >}}` tast eller `F3` tasten `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Tænd og sluk for belysningen af måleområdet {#lighting-of-the-measurement-location-on-and-off}

1. Fuldfør de indledende trin.

2. Tryk på den midterste øverste `On/Off` knap <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.


3. En popupmenu åbnes, hvor du kan vælge mellem menupunkterne `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` eller `{{<T "Flashlight" >}}`. Brug piletasterne △ ▽ til at vælge `{{<T "Flashlight" >}}` og tryk på den centrale `{{<T "Ok" >}}` tast eller `F3` tasten `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Gentag målingen {#repeat-the-measurement}

1. Fuldfør de indledende trin.

2. Tryk på den midterste øverste `On/Off` knap <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. En popupmenu åbnes, hvor du kan vælge mellem menupunkterne `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` eller `{{<T "Flashlight" >}}`. Brug piletasterne △ ▽ til at vælge `{{<T "RepeatMeasurement" >}}` og tryk på den centrale `{{<T "Ok" >}}` tast eller `F3` tasten `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Annuller handlingen {#cancel-the-action}

1. Fuldfør de indledende trin.

2. Tryk på `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" /> tasten for at annullere handlingen.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Hint" %}}
Hvis denne handling ikke er tilgængelig, er handlingen sandsynligvis blevet deaktiveret! Aktivér handlingen i [handlingsindstillingerne](../setting/) menuen. Alternativt vil nulstilling af alle handlinger bringe denne handling tilbage.
{{% /alert %}}
