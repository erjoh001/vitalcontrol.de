---
title: Seznam dejanj
linkTitle: Seznam dejanj
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Oglejte si svoj seznam dejanj.
categories: [Seznami]
tags: [Seznami, Dejanje]
translationKey: lists/action
---
## Seznam dejanj {#action-list}

V seznamu dejanj lahko vidite živali, za katere šest ur ni bilo izvedeno nobeno dejanje. Na voljo so tudi naslednje možnosti nastavitev:

- [Izmerite temperaturo](../alarm/#take-temperature)
- [Ocenite živali](../alarm/#rate-animal)
- [Tehtajte živali](#weigh-animals)
- [Veriga dejanj](#chain-of-action)
- [Povežite transponder](#link-transponder)
- [Skrij po dejanju](#hide-after-action)
- [Poiščite žival](../alarm/#search-animal)
- [Nastavite filter](../alarm/#set-filter)

{{% alert title="Namig" %}}
Nekatera dejanja je treba izvesti na enak način kot v [seznamu alarmov](../alarm). Ta tukaj niso pojasnjena. Izvedite predhodne korake in uporabite povezavo ustreznega dejanja, da pridete do navodil.
{{% /alert %}}

### Predhodni koraki {#preliminary-steps}

1. Izberite <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" />  `{{<T "Lists" >}}` meni na glavnem zaslonu vaše naprave VitalControl in pritisnite `{{<T "Ok" >}}` gumb.

2. Odpre se podmeni, v katerem so prikone različne ikone seznamov. Označite ikono <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Action list" /> `{{<T "ActionList" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Seznam dejanj je zdaj odprt.

   ![VitalControl Lists Action list](../images/firststeps3.png "Preliminary Steps")

### Tehtajte živali {#weigh-animals}

1. Izvedite predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na `{{<T "Ok" >}}` tipko. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "WeighAnimal" >}}` in izberite to možnost s pritiskom na osrednji `{{<T "Ok" >}}` gumb ali tipko `F3` `{{<T "Ok" >}}`.


3. Znotraj seznama dejanj uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Lahko pa tudi iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Meni [tehtanje živali](../../actions/record-weight/) se bo odprl samodejno.

   ![VitalControl Lists Action list](../images/weightanimals.png "Tehtanje živali")

### Veriga dejanj {#chain-of-action}

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "ActionChain" >}}` in izberite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Znotraj seznama dejanj uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Lahko pa tudi iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Funkcija [veriga dejanj](../../chain-of-actions) se bo odprla samodejno.

   ![VitalControl Lists Action list](../images/chainofaction.png "Veriga dejanj")

### Povezava transponderja {#link-transponder}

Ta funkcija se uporablja za dodajanje transponderja v podatkovni zapis živali, ki še niso bile dodeljene transponderju.

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; za priklic pojavnega menija, ki navaja možna dejanja ob pritisku na tipko `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽ za označitev dejanja `{{<T "LinkTransponder" >}}` in izberite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.


3. Znotraj seznama dejanj uporabite puščične tipke △ ▽ za izbiro želenega živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Sedaj skenirajte transponder ustrezne živali.

   ![VitalControl Lists Action list](../images/linktransponder.png "Link transponder")

### Skrij po dejanju {#hide-after-action}

Če je ta funkcija aktivirana, bodo živali, za katere je bilo izvedeno dejanje, skrite s seznama dejanj. Če je ta funkcija deaktivirana, bodo obdelane živali ostale vidne na seznamu.

1. Dokončajte predhodne korake.

2. Uporabite tipko `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; za priklic pojavnega menija, ki navaja različne možnosti. Uporabite puščične tipke △ ▽ za označitev možnosti `{{<T "HideAfterAction" >}}` in preklopite to možnost s pritiskom na osrednji gumb `{{<T "Ok" >}}` ali tipko `F3` `{{<T "Ok" >}}`.

3. Funkcija `{{<T "HideAfterAction" >}}` je zdaj omogočena/onemogočena. Aktivacija je označena s kljukico znotraj polja.

   ![VitalControl Lists Action list](../images/hideafteraction.png "Hide after action")
