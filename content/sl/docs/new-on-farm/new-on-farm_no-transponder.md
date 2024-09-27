---
title: "Novo na kmetiji, brez transponderja"
linkTitle: "Novo na kmetiji, brez transponderja"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: new-no-transponder
description: >
  Tukaj dodelite transponder novim živalim brez transponderja.
categories: [Novo na kmetiji, transponder]
tags: [Novo na kmetiji, transponder]
translationKey: new-on-farm/new-on-farm, no transponder
---
### Novo na kmetiji, brez transponderja {#new-on-farm-no-transponder}

Na tem seznamu boste našli vse na novo ustvarjene živali z največ X dnevi starosti, ki jim še ni bil dodeljen transponder. Največjo starost lahko nastavite [tukaj](/sl/docs/settings/animal-registration/#set-default-values). Ko zberete transponder od teh živali, lahko poiščete ustrezno ID živali na seznamu in skenirate pripadajoči transponder. Transponder se nato samodejno dodeli živali in žival se izbriše s seznama. Za dodelitev transponderja sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Novo na kmetiji" /> `{{<T "NewOnFarm" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem lahko izbirate med <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na kmetiji, brez transponderja" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Kupljene živali" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Brez nacionalne ID živali" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Rojstva" /> `{{<T "Births" >}}` in <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Brez dodeljenega transponderja" /> `{{<T "NoTransponderAssigned" >}}`. S puščicami ◁ ▷ △ ▽ izberite meni <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Novo na kmetiji, brez transponderja" /> `{{<T "NewOnFarmNoTransponder" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Odpre se seznam vseh živali, ki so bile na novo ustvarjene, vendar jim še ni bil dodeljen transponder. Uporabite puščične tipke △ ▽ za izbiro želene živali in potrdite z `{{<T "Ok" >}}`. Alternativno lahko iščete žival. Uporabite gumb `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> in uporabite puščične tipke ◁ ▷ △ ▽ za izbiro želenih številk. Na koncu potrdite z `{{<T "Ok" >}}`.

4. Zdaj skenirajte transponder živali.

5. Transponder je bil uspešno dodan živali.

{{< tabpane >}}
{{< tab header="New on farm, no transponder:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu New on farm, no transponder](../images/notransponder-scan.png "New on farm, no transponder")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu New on farm, no transponder](../images/notransponder.png "New on farm, no transponder")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Takoj ko dodelite vse živali, imate možnost, da se prek gumba `{{<T "Ok" >}}` preusmerite na meni `{{<T "PurchasedAnimals" >}}`. Tam lahko ustvarite CSV datoteko za poročilo o dostopu v HI-Tier ali HERDE-Mast. <br/>
<br/>
![VitalControl: Menu New on farm, no transponder](../images/redirect.png "Redirect")
{{% /alert %}}

## Prejšnja dodatna dejanja {#previous-additional-actions}

Prejšnja dodatna dejanja lahko uporabite za nastavitev, katera dejanja želite izvesti pred dodelitvijo transponderja. Izbirate lahko med merjenjem temperature, ocenjevanjem živali in tehtanjem živali. Posamezno dejanje se shrani neposredno za žival, ki jo nato dodelite. Postopek je naslednji:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem lahko izbirate med <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` in <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Uporabite puščične tipke ◁ ▷ △ ▽ za izbiro menija <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Uporabite tipko `{{<T "Ok" >}}` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Aufruf Popup" />&nbsp; za priklic pojavnega okna. Uporabite puščične tipke △ ▽ za navigacijo do elementa `F3`.

4. Uporabite puščične gumbe △ ▽ za izbiro med `{{<T "PreviousAdditionalActions" >}}`, `{{<T "TempTaking" >}}` in `{{<T "RateAnimal" >}}`. Potrdite z `{{<T "Ok" >}}` za aktivacijo potrditvenega polja. Kljukica se pojavi znotraj potrditvenega polja, kar potrjuje, da je dejanje aktivirano. Ponovno potrdite z `{{<T "Ok" >}}` za deaktivacijo dejanja. Hkrati lahko aktivirate poljubno število dejanj.

{{% alert title="Namig" %}}
Element menija `{{<T "Ok" >}}` vas obvešča, da bo dodelitev transponderja vedno zadnje dejanje, ki se izvede, takoj ko potrdite izbiro živali z `{{<T "Ok" >}}` v elementu menija `{{<T "Ok" >}}`.
{{% /alert %}}

![VitalControl: Meni Novo na kmetiji, brez transponderja](../images/actions.png "Dodatna dejanja")

## Nadaljnji elementi menija {#further-menu-items}

V pojavnem oknu imate tudi možnost izbire med `{{<T "NewOnFarmNoTransponder" >}}`, `{{<T "Settings" >}}` in `{{<T "SetFilter" >}}`. Uporabite puščične gumbe △ ▽ za navigacijo do ustreznega elementa menija in potrdite z `{{<T "Ok" >}}`. Informacije za element menija `{{<T "NewOnFarmNoTransponder" >}}` najdete [tukaj](/sl/docs/settings/animal-registration/#set-default-values), za `{{<T "SetFilter" >}}` [tukaj](/sl/docs/filter/) in za `{{<T "Settings" >}}` nadaljujte kot v `{{<T "Ok" >}}` koraku 3.
