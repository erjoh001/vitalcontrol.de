---
title: "Registracija živali"
linkTitle: "Registracija živali"
date: 2023-07-28T13:25:28+02:00
weight: 60
draft: false
slug: animal-registration
description: >
  Tukaj lahko prilagodite več tovarniško nastavljenih standardov glede registracije novih živali zahtevam vaše kmetije.
categories: [nastavitve]
tags: [nastavitve, Privzete vrednosti]
translationKey: settings/new-animals
---
## Nastavitev privzetih vrednosti {#set-default-values}
### Nastavitev zabeležene teže {#set-recorded-weights}

Tukaj določite, katera teža se zabeleži in shrani ob ustvarjanju novih živali na vaši kmetiji. Za nastavitev zabeležene teže na vaši napravi sledite naslednjim korakom.

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se še en podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji za nastavitve `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "DefaultValues" >}}` in potrdite s `{{<T "Ok" >}}`.

4. Območje `{{<T "WeightRecorded" >}}` je samodejno izbrano. S puščicama ◁ ▷ izberite težo, ki jo želite zajeti.

    ![VitalControl: meni nastavitve Nastavitev zabeležene teže](../images/recordweights.png "Nastavitev zabeležene teže")

{{% alert title="Namig" %}}
 Izberite `{{<T "None" >}}` če: se živali ustvarjajo samodejno v ozadju (preko skeniranja transponderja), na kmetiji ni na voljo tehtnice in niso zaželene ocenjene vrednosti, rojstne teže niso znane.
{{% /alert %}}

### Nastavitev starosti ob registraciji {#set-age-at-registration}
{{% alert title="Namig" %}}
Na podlagi tukaj vnesene starosti naprava izračuna datum rojstva, ki je predlagan za ročno ustvarjeno žival ali ki se uporablja za samodejno ustvarjanje v ozadju (preko skeniranja transponderja). Za mlečne kmetije vnesite starost v dnevih, pri kateri se novorojeni telički registrirajo v VitalControl. Za kmetije za pitanje vnesite povprečno starost kupljenih teličkov. Dovoljen razpon vrednosti je od 0 do 99 dni.
{{% /alert %}}

Za nastavitev starosti ob ustvarjanju na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s tipko `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji za nastavitve `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "DefaultValues" >}}` in potrdite s tipko `{{<T "Ok" >}}`.

4. S puščicama △ ▽ izberite `{{<T "AgeRegistration" >}}`.

5. S puščicama ◁ ▷ nastavite starost ob ustvarjanju.

    ![VitalControl: menu settings Set age at registration](../images/ageatregistration.png "Set age at registration")

### Nastavitev spola {#set-sex}

Tukaj določite, kateri spol je predlagan (ročna ustvaritev) ali samodejno sprejet (ustvarjanje v ozadju). Za določitev spola ob registraciji živali na vaši napravi sledite naslednjim korakom.

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s tipko `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji za nastavitve `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "DefaultValues" >}}` in potrdite s tipko `{{<T "Ok" >}}`.

4. S puščicama △ ▽ izberite `{{<T "Sex" >}}`.

5. S puščicama ◁ ▷ nastavite spol ob ustvarjanju.

    ![VitalControl: menu settings Set sex](../images/setsex.png "Set sex")

### Nastavitev vrste živali {#set-type-of-animal}

Tukaj določite, katera vrsta živali je zabeležena ob ustvarjanju novih živali na vaši kmetiji. Za določitev vrste živali ob ustvarjanju na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med polji nastavitev za `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "DefaultValues" >}}` in potrdite s `{{<T "Ok" >}}`.

4. S puščičnimi tipkami △ ▽ izberite `{{<T "TypeAnimal" >}}`.

5. S puščičnimi tipkami ◁ ▷ nastavite vrsto živali ob ustvarjanju.

    ![VitalControl: menu settings type of animal](../images/typeofanimal.png "typ of animal")

### Nastavitev pasme {#set-breed}

Tukaj določite, katera pasma živine je zabeležena ob ustvarjanju novih živali na vaši kmetiji. Za določitev pasme ob ustvarjanju na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med polji nastavitev za `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "DefaultValues" >}}` in potrdite s `{{<T "Ok" >}}`.

4. S puščičnimi tipkami △ ▽ izberite `{{<T "Breed" >}}`.

5. S puščičnimi tipkami ◁ ▷ nastavite pasmo ob ustvarjanju.

    ![VitalControl: menu settings type of animal](../images/breed.png "typ of animal")

### Nastavitev Lokacije {#set-whereabouts}

Tukaj določite, katere lokacije so dodeljene živalim ob ustvarjanju novih kmetijskih živali. Za določitev lokacije kmetijske živali, ko je ustvarjena na vaši napravi, sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. Uporabite puščične tipke △ ▽ za izbiro `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se še en podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med nastavitvenimi polji za `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "DefaultValues" >}}` in potrdite s `{{<T "Ok" >}}`.

4. Uporabite puščične tipke △ ▽ za izbiro `{{<T "Whereabouts" >}}`.

5. Uporabite puščične tipke ◁ ▷ za nastavitev lokacije ob ustvarjanju.

    ![VitalControl: meni nastavitve lokacije](../images/whereabout.png "lokacije")

Shranjene nastavitve in vrnitev v glavni meni `{{<T "Settings" >}}` izvedete s pritiskom na tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Shrani in vrni" />&nbsp;.

## Samodejna registracija {#auto-registration}

Tukaj določite vedenje naprave, ko je skeniran nov transponder, ki še ni znan napravi VitalControl. Za ta primer lahko določite tri različna vedenja.

{{% alert title = "Namig" %}}
Ko uporabnik potrdi ustvarjanje živali, se prikaže vnosni zaslon, na katerem lahko uporabnik vnese podatke o novi živali, ki jo želi ustvariti (spol, datum rojstva itd.). Pri samodejnem ustvarjanju se za vse samodejno ustvarjene živali uporabijo vrednosti, določene v "Nastavitve > Ustvari nove živali" za spol, starost itd. Tukaj specifične nastavitve za živali niso možne.
{{% /alert %}}

Za določitev vedenja, ko je uporabniška žival samodejno ustvarjena na vaši napravi, sledite naslednjim korakom:


1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med nastavitvenimi polji za `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "AutoRegistration" >}}` in potrdite s `{{<T "Ok" >}}`.

4. Prednostno polje `{{<T "AutoRegistration" >}}` je samodejno izbrano. S puščičnimi tipkami ◁ ▷ določite vedenje naprave pri ustvarjanju novih živali.

    ![VitalControl: menu settings auto-registration](../images/autoregistration.png "auto-registration")

## Dodelitev ID-ja živali {#assignment-animal-id}

Tukaj določite, kateri ID živali je predlagan (izpeljan iz številke transponderja) ali uporabljen (zaporedno) pri ustvarjanju nove živali na vaši kmetiji.

{{% alert title = "Namig" %}}
Izberite možnost "Zaporedno", če je številka boksa, ki jo uporabljate za vizualno identifikacijo živali, dodeljena neodvisno od številke transponderja, ki se uporablja za elektronsko identifikacijo. Številke boksov ali ovratnic so nato dodeljene zaporedno v določenem obsegu (npr. 1 - 40) in niso neposredno povezane s številkami uporabljenih transponderjev. Izberite možnost "Izpelji iz številke transponderja", če želite številko boksa živali neposredno povezati s številko transponderja, ki je bil dodeljen živali. Ta možnost je še posebej uporabna, če uporabljate rumene elektronske ušesne oznake, številka boksa pa je nato enaka končnim številkam desetmestne številke živali, natisnjene na rumeni ušesni oznaki.
{{% /alert %}}

Za določitev dodelitve ID-ja živali pri ustvarjanju kmetijske živali na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med polji nastavitev za `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "AutoRegistration" >}}` in potrdite z `{{<T "Ok" >}}`.

4. S puščičnimi tipkami △ ▽ izberite `{{<T "AssignmentIDs" >}}`.

5. S puščičnimi tipkami ◁ ▷ nastavite dodelitev ID-ja živali delovne živali ob ustvarjanju.

6. Če izberete nastavitev `{{<T "Consecutive" >}}`, imate možnost določiti `{{<T "NextAnimalID" >}}`. S puščičnimi tipkami △ ▽ izberite področje `{{<T "NextAnimalID" >}}` in potrdite z `{{<T "Ok" >}}`. Znotraj področja se pomikajte s puščičnimi tipkami ◁ ▷. Sedaj lahko izberete številko s puščičnimi tipkami △ ▽. Naprava bo sedaj samodejno uporabila to številko za začetek neprekinjenega štetja od tam naprej. Poleg tega lahko nastavite, ali se številke štejejo neprekinjeno naraščajoče ali neprekinjeno padajoče. Za to uporabite puščične tipke ◁ ▷, da se premaknete na simbol 9/1. S puščičnimi tipkami △ ▽ preklapljajte med neprekinjenim naraščajočim ali neprekinjenim padajočim štetjem. Shranite nastavitve s tipko `F1` ali `{{<T "Ok" >}}` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Shrani in se vrni" />&nbsp;.

    ![VitalControl: meni nastavitve dodelitev ID-ja živali](../images/assignmentanimalid2.png "Dodelitev ID-ja živali")

    ![VitalControl: meni nastavitve dodelitev ID-ja živali](../images/assignmentanimalid3.png "dodelitev ID-ja živali")

{{% alert title = "Namig" %}}
Samo pri uporabi možnosti `{{<T "Consecutive" >}}`: če ste nastavili uporabo ločenih številskih območij za moške in ženske živali pri dodeljevanju številke ušesne oznake, je za vsako od moških, ženskih in živali neznanega spola shranjena naslednja številka živali. Simbol, postavljen levo od številke živali, označuje, za kaj se uporablja naslednja številka živali: bodisi za moške ♀ bodisi za ženske ♂ bodisi za živali neznanega spola ♀♂?
{{% /alert %}}

### Števka nove ID {#digit-of-the-new-id}

Tukaj določite, kakšno dolžino ima številka hleva, pridobljena iz številke transponderja, za novo žival na vaši kmetiji. Možno območje vrednosti je od 2 do 6 števk. Za določitev dolžine nove ID kmetijske živali na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite menijsko postavko <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščičnimi tipkami △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščičnimi tipkami △ ▽ preklapljate med nastavitvenimi polji za `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "AutoRegistration" >}}` in potrdite s `{{<T "Ok" >}}`.

4. S puščičnimi tipkami △ ▽ izberite `{{<T "AssignmentIDs" >}}`.

5. S puščičnimi tipkami ◁ ▷ nastavite števko nove ID delovne živali ob ustvarjanju.

    ![VitalControl: menu nastavitve Števka nove ID](../images/digitofnewid.png "Števka nove ID")

### Desni zamik {#right-offset}

Tukaj določite, ali se pri pridobivanju številke hleva iz številke transponderja upošteva tudi zamik. Brez zamika se kot stabilna številka uporabi zadnjih 2-6 števk številke transponderja, z zamikom 1 se zavrže desna števka, z zamikom 2 pa dve desni števki in tako naprej.

{{% alert title = "Namig" %}}
Za grafično ponazoritev učinka nastavljenih parametrov je pod vrstico za nastavitev zamika prikazana petnajstmestna številka transponderja. Zeleni okvir označuje številko hleva, ki bi bila pridobljena iz številke transponderja z trenutnimi nastavitvami. Sprememba vrednosti nastavitev "Dolžina" in "Zamik" neposredno vodi do posodobitve pridobljene številke hleva.
{{% /alert %}}

Za nastavitev odmika na desni strani živali na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji za nastavitve `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "AutoRegistration" >}}` in potrdite s `{{<T "Ok" >}}`.

4. S puščicama △ ▽ izberite `{{<T "OffsetRight" >}}`.

5. S puščicama ◁ ▷ nastavite desno odmikovno območje delovne živali pri ustvarjanju.

    ![VitalControl: menu settings right offset](../images/rightoffset.png "right offset")

Shranjene nastavitve in se vrnite v glavni meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` s pritiskom na tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" />&nbsp;.

## Dodelitev številke ušesne oznake {#assignment-ear-tag-number}

Tukaj določite, ali se pri dodeljevanju številke ušesne oznake pri ročnem ponovnem registriranju živali uporablja eno ali dve številčni območji. Za določitev dodelitve številke ušesne oznake kmetijske živali na vaši napravi sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` in pritisnite tipko `{{<T "Ok" >}}`.

2. Odpre se podmeni, v katerem so prikazane različne nastavitve. S puščicama △ ▽ izberite `{{<T "RegistrationAnimals" >}}`. Potrdite s `{{<T "Ok" >}}`.

3. Odpre se drug podmeni, v katerem lahko s puščicama △ ▽ preklapljate med polji za nastavitve `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` in `{{<T "AssignmentEartagNr" >}}`. Izberite `{{<T "AssignmentEartagNr" >}}` in potrdite s `{{<T "Ok" >}}`.


4. Uporabite puščične tipke ◁ ▷ za dodelitev številke ušesne oznake delovnemu živali pri ustvarjanju.

    ![VitalControl: nastavitve menija Dodelitev številke ušesne oznake](../images/assignmenteartagnumber.png "Dodelitev številke ušesne oznake")

Shranite nastavitve in se vrnite v glavni meni `{{<T "RegistrationAnimals" >}}` s pritiskom na tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Shrani in se vrni" />&nbsp;.

Shranite nastavitve in se vrnite v glavni meni <img src="/icons/gear.svg" width="25" align="bottom" alt="Nastavitve" /> `{{<T "Settings" >}}` s pritiskom na tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Shrani in se vrni" />&nbsp;.
