---
title: Sušenje
linkTitle: Sušenje
slug: dry-off
weight: 115
description: >
 Sušenje krave ali dodajanje na seznam svežih krav
date: 2023-07-26
categories: [Sušenje]
tags: [Sušenje]
translationKey: actions/dry-cows
---

## Sušenje {#dry-off}

{{% alert title="Namig" %}}
Glede na začetni status krave lahko žival posušite in jo dodate na seznam sušilcev, ali pa žival označite kot svežo molznico in jo tako dodate na seznam svežih molznic. Razlikovanje med funkcijami je jasno označeno s plus ali minus simbolom.
{{% /alert %}}

### Sušenje krave {#dry-off-a-cow}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Ali skenirajte transponder živali brez nacionalne ID številke ali izberite žival s seznama. Za to potrdite z `{{<T "Ok" >}}` in izberite ID živali s pomočjo puščičnih tipk △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z akcijami za živali. S puščičnimi tipkami ◁ ▷ △ ▽ izberite akcijo <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Žival je bila uspešno označena kot suha.

{{< tabpane >}}
{{< tab header="Sušenje krave:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff-scan.png "Sušenje krave")
{{% /tab %}}
{{% tab header="Ročna izbira s seznama" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff.png "Sušenje krave")
{{% /tab %}}
{{< /tabpane >}}

### Označi kot molznico {#mark-as-lactated}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Ali skenirajte transponder živali brez nacionalne ID številke ali izberite žival s seznama. Za to potrdite z `{{<T "Ok" >}}` in izberite ID živali s pomočjo puščičnih tipk △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji živali. Uporabite puščične tipke ◁ ▷ △ ▽ za izbiro dejanja <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Žival je bila uspešno označena kot laktirana.

{{< tabpane >}}
{{< tab header="Mark as lactated:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated-scan.png "Mark as lactated")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated.png "Mark as lactated")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Če to dejanje ni na voljo, je verjetno bilo deaktivirano! Aktivirajte dejanje v meniju [nastavitve dejanj](../setting). Alternativno bo ponastavitev vseh dejanj ponovno prikazala to dejanje.
{{% /alert %}}
