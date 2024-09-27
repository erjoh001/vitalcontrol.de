---
title: Ocena
linkTitle: Ocena
slug: rating
weight: 30
description: >
 Ocenite svoje živali.
date: 2023-07-26
categories: [Dejanja]
tags: [Dejanja, Ocena]
translationKey: actions/animal-rating
---

## Ocenite svoje živali {#rate-your-animals}

Pri ocenjevanju živali dokumentirate stanje posamezne živali. Stanje se določi vizualno in zabeleži s pomočjo sistema semaforja. V osnovni oceni se zabeleži samo splošno stanje. V razširjeni oceni zabeležite splošno stanje, vnos hrane, konsistenco iztrebkov in dihalne bolezni. Način ocenjevanja lahko spremenite neposredno v akciji <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` ali pa ga določite v [nastavitvah](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Namig" %}}
Rumena ali rdeča ocena pomeni, da VitalControl žival razvrsti kot opazno in jo uvrsti na seznam alarmov.
{{% /alert %}}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Žival lahko skenirate s transponderjem ali izberete žival s seznama. Potrdite z `{{<T "Ok" >}}` in izberite žival s puščičnimi tipkami △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. S puščičnimi tipkami ◁ ▷ izberite dejanje <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se meni za ocenjevanje. Če želite spremeniti način ocenjevanja, uporabite gumb `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; in puščične tipke ◁ ▷. S tipko `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; se vrnete v meni za ocenjevanje.

5. S puščičnimi tipkami ◁ ▷ △ ▽ izberite stanje in ga shranite s tipko `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ali tipko `{{<T "Ok" >}}`.


6. V naprednem načinu uporabite tipki `F1` in `F3` za preklapljanje med parametri ocenjevanja.

{{% alert title="Namig" %}}
Če ne izberete z uporabo puščičnih tipk ◁ ▷, ampak neposredno shranite z uporabo tipke `F3` ali tipke `{{<T "Ok" >}}`, VitalControl shrani nevtralno oceno, ki je predstavljena z sivo barvo.
{{% /alert %}}

### Osnovno ocenjevanje {#basic-rating}

{{< tabpane >}}
{{< tab header="Osnovno ocenjevanje:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Menu Actions Rating](../images/basicrating-scan.png "Osnovno ocenjevanje")
{{% /tab %}}
{{% tab header="Ročna izbira iz seznama" text=true %}}
![VitalControl: Menu Actions Rating](../images/basicrating.png "Osnovno ocenjevanje")
{{% /tab %}}
{{< /tabpane >}}

### Razširjeno ocenjevanje {#extended-rating}

{{< tabpane >}}
{{< tab header="Osnovno ocenjevanje:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Menu Actions Rating](../images/extendedrating-scan.png "Razširjeno ocenjevanje")
{{% /tab %}}
{{% tab header="Ročna izbira iz seznama" text=true %}}
![VitalControl: Menu Actions Rating](../images/extendedrating.png "Razširjeno ocenjevanje")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Namig" %}}
Če ta akcija ni na voljo, je verjetno bila deaktivirana! Aktivirajte akcijo v meniju [nastavitve akcij](../setting/). Alternativno bo ponastavitev vseh akcij ponovno omogočila to akcijo.
{{% /alert %}}
