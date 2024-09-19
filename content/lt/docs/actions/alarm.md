---
title: Signalizacija
linkTitle: Signalizacija
slug: alarm
weight: 60
description: >
 Pridėti ir pašalinti gyvūnus iš signalizacijos sąrašo.
date: 2023-07-26
kategorijos: [Veiksmai]
Žymos: [Veiksmai, Signalizacija]
translationKey: actions/alarm
---

## Signalas {#alert}

Naudodami veiksmą `{{<T "Alarm" >}}` galite pridėti gyvūnus į signalizacijos sąrašą arba pašalinti juos iš jo. Signalizacijos sąrašas padeda greičiau ir lengviau rasti pastebimus gyvūnus, palengvindamas kasdienius patikrinimus. Norėdami pritaikyti veiksmą `{{<T "Alarm" >}}`, atlikite šiuos veiksmus:

1. Pagrindiniame savo VitalControl įrenginio ekrane pasirinkite meniu punktą `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Nuskaitykite gyvūną naudodami transponderį arba pasirinkite gyvūną iš sąrašo. Patvirtinkite su `{{<T "Ok" >}}` ir pasirinkite gyvūną su rodyklių klavišais △ ▽. Patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidarys submeniu su gyvūnų veiksmais. Naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> veiksmą `{{<T "Alarm" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Pasirodys pranešimas, kad gyvūnas sėkmingai pridėtas į signalizacijos sąrašą, ir gyvūno rodymas antraštėje pasikeis. Simbolis &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> rodo, kad šis gyvūnas yra signalizacijos sąraše.

5. Galite vėl pašalinti gyvūną iš signalizacijos sąrašo, dar kartą pritaikydami &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> veiksmą `{{<T "Alarm" >}}`. Ar pridėsite, ar pašalinsite gyvūną iš signalizacijos sąrašo naudodami veiksmą `{{<T "Alarm" >}}`, nurodoma su mažu + arba - ženklu.

{{< tabpane >}}
{{< tab header="Signalas:" text=true disabled=true />}}
{{% tab header="Transponderio nuskaitymas" text=true %}}
![VitalControl: Meniu Veiksmai Signalizacija](../images/alarm-scan.png "Signalizacija")
{{% /tab %}}
{{% tab header="Rankinis pasirinkimas iš sąrašo" text=true %}}
![VitalControl: Meniu Veiksmai Signalizacija](../images/alarm.png "Signalizacija")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Patarimas" %}}
Jei ši veiksmo parinktis nėra prieinama, tikėtina, kad veiksmas buvo išjungtas! Įjunkite veiksmą [veiksmo nustatymų](../setting/) meniu. Arba, atstatant visus veiksmus, šis veiksmas vėl taps prieinamas.
{{% /alert %}}
