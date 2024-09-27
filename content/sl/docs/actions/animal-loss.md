---
title: Izguba živali
linkTitle: Izguba živali
slug: animal-loss
weight: 110
description: >
 Registracija izgube živali.
date: 2023-07-26
categories: [Dejanja]
tags: [Dejanja, izguba-živali]
translationKey: actions/animal-loss
---

## Izguba živali {#animal-loss}

Dejanje `{{<T "AnimalLoss" >}}` vam omogoča registracijo izgube živali. Za registracijo izgube živali sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite postavko menija &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Dejanja" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Skenirajte žival s transponderjem ali izberite žival s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščicami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. Uporabite puščice ◁ ▷ △ ▽ za izbiro dejanja <img src="/icons/actions/animal-loss.svg" width="38" align="bottom" alt="Izguba živali" /> `{{<T "AnimalLoss" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se drug podmeni, v katerem lahko shranite različne nastavitve. Uporabite puščice △ ▽ za izbiro želene možnosti nastavitve. Uporabite puščice ◁ ▷ za izbiro želene nastavitve.

5. Uporabite tipko `F3` za odjavo živali z določenimi nastavitvami.

{{< tabpane >}}
{{< tab header="Izguba živali:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Meni Dejanje Izguba živali](../images/animalloss-scan.png "Registracija izgube živali")
{{% /tab %}}
{{% tab header="Ročna izbira s seznama" text=true %}}
![VitalControl: Meni Dejanje Izguba živali](../images/animalloss.png "Registracija izgube živali")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Namig" %}}
Če to dejanje ni na voljo, je verjetno bilo deaktivirano! Aktivirajte dejanje v meniju [nastavitve dejanj](../setting/). Alternativno, ponastavitev vseh dejanj bo ponovno omogočila to dejanje.
{{% /alert %}}
