---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Dodajte i uklonite životinje s popisa alarma.
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, Alarm]
translationKey: actions/alarm
---

## Upozorenje {#alert}

S akcijom `{{<T "Alarm" >}}` stavljate životinje na popis alarma ili ih uklanjate s njega. Popis alarma pomaže vam brže i lakše pronaći upadljive životinje, čineći vaše svakodnevne rutinske provjere jednostavnijima. Da biste primijenili akciju `{{<T "Alarm" >}}`, postupite na sljedeći način:

1. Na glavnom zaslonu vašeg VitalControl uređaja odaberite stavku izbornika `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> i pritisnite gumb `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju s popisa. Potvrdite s `{{<T "Ok" >}}` i odaberite životinju pomoću tipki sa strelicama △ ▽. Potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s akcijama za životinje. Pomoću tipki sa strelicama ◁ ▷ △ ▽ odaberite &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> akciju `{{<T "Alarm" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Pojavljuje se obavijest da je životinja uspješno dodana na popis alarma i prikaz za životinju u zaglavlju se mijenja. Simbol &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> označava da je ova životinja na popisu alarma.

5. Životinju možete ponovno ukloniti s popisa alarma primjenom &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> akcije `{{<T "Alarm" >}}` ponovno. Bilo da dodajete ili uklanjate životinju s popisa alarma pomoću akcije `{{<T "Alarm" >}}`, označeno je malim znakom + ili -.

{{< tabpane >}}
{{< tab header="Upozorenje:" text=true disabled=true />}}
{{% tab header="Skeniranje transpondera" text=true %}}
![VitalControl: Izbornik Akcije Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Ručno odabiranje s popisa" text=true %}}
![VitalControl: Izbornik Akcije Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Savjet" %}}
Ako ova akcija nije dostupna, vjerojatno je deaktivirana! Aktivirajte akciju u izborniku [postavke akcije](../setting/). Alternativno, resetiranje svih akcija će vratiti tu akciju.
{{% /alert %}}
