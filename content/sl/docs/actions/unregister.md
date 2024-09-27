---
title: Odjava živali
linkTitle: Odjava
slug: unregister
weight: 100
description: >
 Odjava živali
date: 2023-07-26
categories: [Dejanja]
tags: [Dejanja, Odjava]
translationKey: actions/unregister
---
{{% alert title="Opozorilo" color="warning" %}}
Takoj ko izbrišete podatkovni zapis o živali, ta ni več na voljo za namene ocenjevanja! Če odjavite žival, vendar želite na primer kasneje ponovno oceniti razvoj živali, morate obdržati podatkovni zapis o živali!
{{% /alert %}}

## Odjava {#unregister}

Dejanje `{{<T "Unregister" >}}` vam omogoča, da odjavite žival takoj, ko je premaknjena. Za odjavo živali sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Žival lahko bodisi skenirate s transponderjem ali izberete iz seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščičnimi tipkami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. S puščičnimi tipkami ◁ ▷ △ ▽ izberite dejanje &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se še en podmeni, v katerem lahko shranite različne nastavitve. S puščičnimi tipkami △ ▽ izberite želeno možnost nastavitve. S puščičnimi tipkami ◁ ▷ izberite želeno nastavitev.

5. S tipko `F3` `{{<T "Unregister" >}}` odjavite žival z določenimi nastavitvami.

{{< tabpane >}}
{{< tab header="Odjava:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Meni Dejanje Odjava](../images/unregister-scan.png "Odjava živali")
{{% /tab %}}
{{% tab header="Ročna izbira iz seznama" text=true %}}
![VitalControl: Meni Dejanje Odjava](../images/unregister.png "Odjava živali")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Namig" %}}
Če ta akcija ni na voljo, je verjetno bila deaktivirana! Aktivirajte akcijo v meniju [nastavitve akcij](../setting/). Alternativno, ponastavitev vseh akcij bo ponovno omogočila to akcijo.
{{% /alert %}}
