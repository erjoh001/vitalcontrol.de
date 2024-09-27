---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Dodajanje in odstranjevanje živali s seznama alarmov.
date: 2023-07-26
categories: [Actions]
tags: [Actions, Alarm]
translationKey: actions/alarm
---

## Opozorilo {#alert}

Z akcijo `{{<T "Alarm" >}}` lahko živali dodate na seznam alarmov ali jih odstranite s tega seznama. Seznam alarmov vam pomaga hitreje in lažje najti opazne živali, kar olajša vaše vsakodnevne rutinske preglede. Za uporabo akcije `{{<T "Alarm" >}}` sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> in pritisnite gumb `{{<T "Ok" >}}`.

2. Žival lahko bodisi skenirate s transponderjem ali pa jo izberete s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščičnimi tipkami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z akcijami za živali. S puščičnimi tipkami ◁ ▷ △ ▽ izberite &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> akcijo `{{<T "Alarm" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Pojavi se obvestilo, da je bila žival uspešno dodana na seznam alarmov, in prikaz za žival v glavi se spremeni. Simbol &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> označuje, da je ta žival na seznamu alarmov.

5. Žival lahko ponovno odstranite s seznama alarmov tako, da ponovno uporabite &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> akcijo `{{<T "Alarm" >}}`. Ali žival dodate ali odstranite s seznama alarmov z uporabo akcije `{{<T "Alarm" >}}`, je označeno z majhnim znakom + ali -.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Namig" %}}
Če ta akcija ni na voljo, je verjetno bila deaktivirana! Aktivirajte akcijo v meniju [nastavitve akcij](../setting/). Alternativno, ponastavitev vseh akcij bo ponovno omogočila to akcijo.
{{% /alert %}}
