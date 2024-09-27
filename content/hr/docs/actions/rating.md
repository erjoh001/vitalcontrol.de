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

Prilikom ocjenjivanja životinje, dokumentirate stanje pojedine životinje. Stanje se određuje vizualno i bilježi uz pomoć sustava semafora. U osnovnoj procjeni bilježi se samo opće stanje. U proširenoj procjeni bilježite opće stanje, unos hrane, konzistenciju izmeta i respiratorne bolesti. Način ocjenjivanja možete promijeniti izravno u akciji <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` ili ga možete definirati u [postavkama](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Savjet" %}}
Žuta ili crvena ocjena znači da VitalControl klasificira životinju kao uočljivu i stavlja je na popis alarma.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja odaberite stavku izbornika &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju s popisa. Potvrdite s `{{<T "Ok" >}}` i odaberite životinju pomoću tipki sa strelicama △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s akcijama za životinje. Pomoću tipki sa strelicama ◁ ▷ odaberite akciju <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Otvara se izbornik za ocjenjivanje. Ako želite promijeniti način ocjenjivanja, koristite gumb `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; i tipke sa strelicama ◁ ▷. Pomoću tipke `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; vraćate se u izbornik za procjenu.

5. Pomoću tipki sa strelicama ◁ ▷ △ ▽ odaberite stanje i spremite ga pomoću tipke `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ili tipke `{{<T "Ok" >}}`.

6. U naprednom načinu rada, koristite tipke `F1` i `F3` za prebacivanje između parametara ocjenjivanja.

{{% alert title="Savjet" %}}
Ako ne napravite izbor koristeći tipke sa strelicama ◁ ▷, već direktno spremite koristeći tipku `F3` ili `{{<T "Ok" >}}`, VitalControl sprema neutralnu ocjenu, predstavljenu sivom bojom.
{{% /alert %}}

### Osnovno ocjenjivanje {#basic-rating}

{{< tabpane >}}
{{< tab header="Osnovno ocjenjivanje:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Izbornik Akcije Ocjenjivanje](../images/basicrating-scan.png "Osnovno ocjenjivanje")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Izbornik Akcije Ocjenjivanje](../images/basicrating.png "Osnovno ocjenjivanje")
{{% /tab %}}
{{< /tabpane >}}

### Prošireno ocjenjivanje {#extended-rating}

{{< tabpane >}}
{{< tab header="Osnovno ocjenjivanje:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Izbornik Akcije Ocjenjivanje](../images/extendedrating-scan.png "Prošireno ocjenjivanje")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Izbornik Akcije Ocjenjivanje](../images/extendedrating.png "Prošireno ocjenjivanje")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Savjet" %}}
Ako ova akcija nije dostupna, vjerojatno je akcija deaktivirana! Aktivirajte akciju u izborniku [postavke akcija](../setting/). Alternativno, resetiranje svih akcija će vratiti tu akciju.
{{% /alert %}}
