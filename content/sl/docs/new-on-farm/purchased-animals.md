---
title: Kupljene živali
linkTitle: Kupljene živali
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Tukaj lahko vidite svoje trenutne nakupe in izvozite podatke.
categories: [Novo na kmetiji]
tags: [Novo na kmetiji]
translationKey: new-on-farm/new-on-farm
---
## Kupljene živali {#purchased-animals}

Na tem seznamu boste našli vse živali, ki ste jih ustvarili prek množičnega beleženja. Ta seznam lahko izvozite in tako neposredno registrirate svoje dodatke v programu za upravljanje črede DSP-Herde in v HI-Tier. Alternativno lahko izbrišete vsa obvestila o nakupu.

{{% alert title="Namig" %}}
Za izvoz podatkov potrebujete priložen UBS ključek. Preden sledite navodilom, povežite USB ključek z USB-C adapterjem na vašo napravo VitalControl.
{{% /alert %}}

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na kmetiji" /> `{{<T "NewOnFarm" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem lahko izbirate med <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na kmetiji, brez transponderja" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene živali" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Brez nacionalne ID številke" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rojstva" /> `{{<T "Births" >}}` in <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Brez dodeljenega transponderja" /> `{{<T "NoTransponderAssigned" >}}`. S puščicami ◁ ▷ △ ▽ izberite meni <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene živali" /> `{{<T "PurchasedAnimals" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Odpre se seznam z vašimi nakupi, ki ste jih registrirali prek menija za množično beleženje.


4. Uporabite tipko `F2` `{{<T "CSVExport" >}}`.

5. Seznam sporočil CSV je zdaj shranjen na vašem USB ključku.

    ![VitalControl: Seznam kupljenih živali, izvoz csv](../images/purchasedanimals.png "Kupljene živali, izvoz csv")

## Možnosti: Izbriši vsa obvestila po izvozu {#options-delete-all-notices-after-export}

S to možnostjo lahko nastavite, ali naj se vsa sporočila na seznamu `{{<T "PurchasedAnimals" >}}` izbrišejo po izvozu CSV datoteke. To možnost uporabite le, če ste prepričani, da sporočil ne boste več potrebovali!

1. Uporabite tipko `F3`. Odpre se podmeni.

2. Uporabite puščične tipke △ ▽ za izbiro menijske postavke `{{<T "DeleteAllNoticesAfterExport" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Polje je zdaj označeno s kljukico. Možnost je aktivirana. Ponovno potrdite z `{{<T "Ok" >}}`, da deaktivirate možnost.

    ![VitalControl: Seznam kupljenih živali, izvoz csv](../images/delete-all.png "Izbriši vsa obvestila po izvozu")

## Neposredni klici funkcij {#direct-function-calls}

Poleg ustvarjanja izvoznih datotek imate naslednje možnosti:

- [Odstrani transponder](#unlink-transponder)
- [Počisti vsa obvestila o nakupu](#clear-all-purchase-notices)
- [Izbriši žival + obvestilo](#delete-animal--purchase-notice)
- [Počisti obvestilo o nakupu](#clear-notice-of-purchase)
- [Uredi oznako](#edit-data-of-purchased-animal)

{{% alert title="Namig" %}}
Vedno najprej odprite seznam `{{<T "PurchasedAnimals" >}}`, kot je opisano v zgornjih navodilih.
{{% /alert %}}

### Odstrani transponder {#unlink-transponder}

To funkcijo lahko uporabite za odstranitev transponderja iz živali.

1. Uporabite tipko `F3`. Odpre se podmeni.

2. Uporabite puščične tipke △ ▽ za izbiro menijske postavke `{{<T "UnlinkTransponder" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Transponder je bil uspešno odstranjen.

    ![VitalControl: Seznam kupljenih živali, izvoz csv](../images/unlink-transponder.png "Kupljene živali, odstranitev transponderja")

### Počisti vsa obvestila o nakupu {#clear-all-purchase-notices}

S to funkcijo lahko izbrišete vse živali s seznama `{{<T "PurchasedAnimals" >}}` brez potrebe po ustvarjanju izvozne datoteke.

1. Uporabite tipko `F3`. Odpre se podmeni.

2. Uporabite puščične tipke △ ▽ za izbiro menijske postavke `{{<T "ClearAllPurchaseNotices" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Obvestila o nakupu so bila uspešno izbrisana.

    ![VitalControl: Seznam kupljenih živali, izbris obvestil o nakupu](../images/clear.png "Izbriši vsa obvestila o nakupu")

### Izbriši žival + obvestilo o nakupu {#delete-animal--purchase-notice}

Za izbris živali in ustreznega obvestila o nakupu sledite naslednjim korakom:

1. Uporabite puščične tipke △ ▽ za izbiro živali, ki jo želite izbrisati.

2. Uporabite tipko `F3`. Odpre se podmeni.

3. Uporabite puščične tipke △ ▽ za izbiro menijske postavke `{{<T "UnregisterAnimalAndBirthNotice" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Žival in dostopno sporočilo sta bila uspešno izbrisana.

    ![VitalControl: Seznam kupljenih živali, izbris živali + obvestilo](../images/delete.png "Izbriši žival + obvestilo")

### Izbriši obvestilo o nakupu {#clear-notice-of-purchase}

Za izbris obvestila o nakupu živali s seznama sledite naslednjim korakom:

1. Uporabite puščične tipke △ ▽ za izbiro živali, katere obvestilo o nakupu želite izbrisati.

2. Uporabite tipko `F3`. Odpre se podmeni.

3. Uporabite puščične tipke △ ▽ za izbiro menijske postavke `{{<T "ClearPurchaseNotice" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Obvestilo o nakupu izbrane živali je bilo uspešno izbrisano.

    ![VitalControl: Seznam kupljenih živali, izbris obvestila o nakupu](../images/clearnotice.png "Izbriši obvestilo o nakupu")

### Uredi podatke o kupljeni živali {#edit-data-of-purchased-animal}

Za urejanje podatkov o živali na seznamu nakupov sledite naslednjim korakom:

1. Uporabite puščične tipke △ ▽ za izbiro živali, ki jo želite urediti.

2. Uporabite gumb `{{<T "Ok" >}}`. Odpre se podmeni s podatki o živali. Kako urediti te podatke lahko izveste [tukaj](/sl/docs/actions/edit/#edit-animal-data).

![VitalControl: Seznam kupljenih živali, Uredi podatke o živali](../images/edit.png "Uredi podatke o kupljeni živali")
