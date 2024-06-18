---
title: "Veiksmų grandinė: nustatymas ir naudojimas"
linkTitle: "Veiksmų grandinė"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Atlikite kelis gyvūnų veiksmus iš eilės
categories: [Veiksmų grandinė]
tags: [Veiksmų grandinė, Veiksmai]
translationKey: action-chain
---
## Veiksmų grandinė {#chain-of-actions}

Veiksmų grandinė leidžia automatiškai atlikti kelis veiksmus gyvūnui vienas po kito. Pavyzdžiui, galite pasirinkti veiksmus `{{<T "Temperature" >}}` ir `{{<T "Rating" >}}`. Jei tada atliksite veiksmų grandinę, pirmiausia galite išmatuoti savo gyvūno temperatūrą ir iš karto po to užregistruoti įvertinimą.

### Naudoti veiksmų grandinę {#use-chain-of-actions}

1. Pagrindiniame jūsų VitalControl įrenginio ekrane pasirinkite meniu punktą &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Nuskaitykite gyvūną naudodami transponderį arba patvirtinkite su `{{<T "Ok" >}}` ir naudokite rodyklių klavišus △ ▽ ◁ ▷ norėdami įvesti norimą gyvūno ID.

3. Dabar vykdoma veiksmų grandinė. Kai visi veiksmų grandinės veiksmai bus atlikti, galima tiesiogiai pasirinkti kitą gyvūną.

{{< tabpane >}}
{{< tab header="Naudoti veiksmų grandinę:" text=true disabled=true />}}
{{% tab header="Transponderio nuskaitymas" text=true %}}
![VitalControl: Meniu veiksmų grandinė](images/chainofactions-scan.png "Veiksmų grandinė")
{{% /tab %}}
{{% tab header="Rankinis pasirinkimas iš sąrašo" text=true %}}
![VitalControl: Meniu veiksmų grandinė](images/chainofactions.png "Veiksmų grandinė")
{{% /tab %}}
{{< /tabpane >}}

### Nustatyti veiksmų grandinę {#set-chain-of-actions}

1. Pagrindiniame jūsų VitalControl įrenginio ekrane pasirinkite meniu punktą &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

2. Naudokite mygtuką `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).


3. Atsiranda perdangos ekranas. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte tarp išvardytų veiksmų 1 - 4 (galite atlikti iki keturių veiksmų iš eilės). Naudokite rodyklių klavišus ◁ ▷, kad pasirinktumėte norimą veiksmą atitinkamam veiksmui. Išsaugokite nustatymus su `F1` klavišu &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Išsaugoti ir grįžti" />&nbsp;.

4. Jei norite iš naujo nustatyti visą veiksmų grandinę, pasirinkite parinktį `{{<T "ResetActionChain" >}}` submeniu naudodami rodyklių klavišus △ ▽ ir patvirtinkite su `{{<T "Ok" >}}`.

    ![VitalControl: Veiksmų grandinės meniu](images/setchainofactions.png "Nustatyti veiksmų grandinę")

{{% alert title="Hint" %}}
Kiekvieno atskiro veiksmo viduje turite tas pačias nustatymo parinktis, kaip aprašyta skyriuje [Veiksmai](../actions) kiekvienam atskiram veiksmui.
{{% /alert %}}

{{% alert title="Hint" %}}
Veiksmų grandinės pradžios ekrane esantys simboliai rodo, kokius veiksmus nustatėte ir kokia tvarka.
{{% /alert %}}
