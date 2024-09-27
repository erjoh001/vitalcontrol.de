---
title: Ocjenjivanje
linkTitle: Ocjenjivanje
slug: rating
weight: 30
description: >
 Ocijenite svoje životinje.
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, Ocjenjivanje]
translationKey: actions/animal-rating
---

## Ocijenite svoje životinje {#rate-your-animals}

Prilikom ocjenjivanja životinje, dokumentujete stanje pojedinačne životinje. Stanje se određuje vizualno i bilježi se uz pomoć sistema semafora. U osnovnoj procjeni bilježi se samo opće stanje. U proširenoj evaluaciji bilježite opće stanje, unos hrane, konzistenciju izmeta i respiratorne bolesti. Možete promijeniti način ocjenjivanja direktno u <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` akciji ili ga možete definirati u [postavkama](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Savjet" %}}
Žuta ili crvena evaluacija znači da VitalControl klasificira životinju kao upadljivu i stavlja je na listu alarma.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju s liste. Potvrdite s `{{<T "Ok" >}}` i odaberite životinju pomoću strelica △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s akcijama za životinje. Koristite strelice ◁ ▷ da odaberete akciju <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Otvara se izbornik za ocjenjivanje. Ako želite promijeniti način ocjenjivanja, koristite dugme `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; i strelice ◁ ▷. Pomoću tipke `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; vraćate se u izbornik za evaluaciju.

5. Koristite strelice ◁ ▷ △ ▽ da odaberete stanje i sačuvajte ga pomoću tipke `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ili tipke `{{<T "Ok" >}}`.


6. U naprednom režimu, koristite tastere `F1` i `F3` za prebacivanje između parametara ocjenjivanja.

{{% alert title="Hint" %}}
Ako ne napravite izbor koristeći tastere sa strelicama ◁ ▷ već direktno sačuvate koristeći taster `F3` ili `{{<T "Ok" >}}`, VitalControl će sačuvati neutralnu ocjenu, predstavljenu sivom bojom.
{{% /alert %}}

### Osnovno ocjenjivanje {#basic-rating}

{{< tabpane >}}
{{< tab header="Osnovno ocjenjivanje:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Meni Akcije Ocjenjivanje](../images/basicrating-scan.png "Osnovno ocjenjivanje")
{{% /tab %}}
{{% tab header="Ručno odabiranje sa liste" text=true %}}
![VitalControl: Meni Akcije Ocjenjivanje](../images/basicrating.png "Osnovno ocjenjivanje")
{{% /tab %}}
{{< /tabpane >}}

### Prošireno ocjenjivanje {#extended-rating}

{{< tabpane >}}
{{< tab header="Osnovno ocjenjivanje:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Meni Akcije Ocjenjivanje](../images/extendedrating-scan.png "Prošireno ocjenjivanje")
{{% /tab %}}
{{% tab header="Ručno odabiranje sa liste" text=true %}}
![VitalControl: Meni Akcije Ocjenjivanje](../images/extendedrating.png "Prošireno ocjenjivanje")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Ako ova akcija nije dostupna, vjerovatno je deaktivirana! Aktivirajte akciju u meniju [postavke akcija](../setting/). Alternativno, resetovanje svih akcija će vratiti tu akciju.
{{% /alert %}}
