---
title: Registracija izgube živali
linkTitle: Izguba živali
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Kako registrirati izgubo živali z uporabo naprave VitalControl.
categories: [Izguba živali]
tags: [Izguba živali]
translationKey: new/animal-loss
---
## Zabeležite izgubo živali {#record-the-loss-of-an-animal}

{{% alert title="Namig" %}}
Funkcija izgube živali v tem meniju je namenjena predvsem beleženju mrtvorojenih telet/jagnjet. Možnosti nastavitev so temu ustrezno prilagojene in niso enake nastavitvenim elementom v meniju `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` ali `{{<T "AnimalLoss" >}}`.
{{% /alert %}}

Za zabeležitev izgube živali sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nova žival" /> `{{<T "New" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni. S puščičnimi tipkami ◁ ▷ △ ▽ izberite meni <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Izguba živali" /> `{{<T "AnimalLoss" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Skenirajte transponder matične živali ali uporabite gumb `{{<T "Ok" >}}`. Vnesite ID matične živali s puščičnimi tipkami ◁ ▷ △ ▽ in potrdite z `{{<T "Ok" >}}`.

4. Odpre se drug podmeni, v katerem lahko shranite informacije o živali. S puščičnimi tipkami △ ▽ izberite želeni nastavitveni element.

5. Za nastavitve `{{<T "TypeAnimal" >}}`,`{{<T "Sex" >}}` ,`{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` in `{{<T "CalvingEase" >}}`, uporabite puščične tipke ◁ ▷ za izbiro želene nastavitve.

6. Za nastavitev `{{<T "DateBirth" >}}` uporabite puščične tipke △ ▽ za izbiro želene možnosti nastavitve in potrdite z `{{<T "Ok" >}}`. Uporabite puščične tipke △ ▽◁ ▷ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

7. Shranite nastavitve in ustvarite novo žival s tipko `F3` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Shrani" />&nbsp;.

{{% alert title="Namig" %}}
Več informacij in možnosti nastavitve za ustvarjanje novih živali najdete [tukaj](../../settings/animal-registration/).
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Izguba živali:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Pot do menija Nova izguba živali](../images/animalloss-scan.png "Zabeležite izgubo živali")
{{% /tab %}}
{{% tab header="Ročna izbira iz seznama" text=true %}}
![VitalControl: Pot do menija Nova izguba živali](../images/animalloss.png "Zabeležite izgubo živali")
{{% /tab %}}
{{< /tabpane >}}
