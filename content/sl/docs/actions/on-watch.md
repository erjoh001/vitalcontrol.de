---
title: Na opazovanju
linkTitle: Na opazovanju
slug: on-watch
weight: 70
description: >
 Dodajte živali na seznam opazovanja ali jih odstranite.
date: 2023-07-26
categories: [Dejanja]
tags: [Dejanja, na opazovanju]
translationKey: actions/on-watch
---

## Na opazovanju {#on-watch}

Z dejanjem `{{<T "OnWatch" >}}` dodate živali na seznam opazovanja ali jih odstranite s seznama. Seznam opazovanja vam pomaga hitreje in lažje najti opazne živali, kar olajša vaše vsakodnevne rutinske preglede. Če želite uporabiti dejanje `{{<T "OnWatch" >}}`, sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Dejanja" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Skenirajte žival s transponderjem ali izberite žival s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščičnimi tipkami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. Uporabite puščične tipke ◁ ▷ △ ▽ za izbiro &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="Na opazovanju" /> dejanja `{{<T "OnWatch" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Pojavi se obvestilo, da je bila žival uspešno dodana na seznam opazovanja.

5. Žival lahko ponovno odstranite s seznama opazovanja z uporabo dejanja &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="Ni na opazovanju" /> `{{<T "OnWatch" >}}`. Ali dodate ali odstranite žival s seznama opazovanja z uporabo dejanja `{{<T "OnWatch" >}}` je označeno z majhnim znakom ⊕ ali ⊖.

{{< tabpane >}}
{{< tab header="Na opazovanju:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Meni Dejanja Na opazovanju](../images/onwatch-scan.png "Na opazovanju")
{{% /tab %}}
{{% tab header="Ročna izbira s seznama" text=true %}}
![VitalControl: Meni Dejanja Na opazovanju](../images/onwatch.png "Na opazovanju")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Namig" %}}
Če to dejanje ni na voljo, je verjetno deaktivirano! Aktivirajte dejanje v meniju [nastavitve dejanj](../setting/). Alternativno, ponastavitev vseh dejanj bo ponovno omogočila to dejanje.
{{% /alert %}}


