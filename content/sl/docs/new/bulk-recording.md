---
title: "Masovna registracija skupine kupljenih živali"
linkTitle: "Bulk-recording"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Uporabite čitalnik črtne kode za beleženje različnih živali.
categories: [Bulk-recording]
tags: [Bulk-recording]
translationKey: new/bulk-recording
---
## Bulk-recording {#bulk-recording}

S pomočjo masovne registracije lahko zajamete veliko število živali v kratkem času in jih shranite na svojo napravo. Uporabite čitalnik črtne kode za skeniranje črtnih kod za številko ušesne oznake in datum rojstva na govejih potnih listih. Žival se samodejno shrani in lahko takoj skenirate naslednji potni list. Za izvedbo masovne registracije živali sledite naslednjim korakom:

1. Povežite čitalnik črtne kode z VitalControl z uporabo kabla.

2. Na glavnem zaslonu vaše naprave VitalControl izberite meni <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

3. Odpre se podmeni. Uporabite puščične tipke ◁ ▷ △ ▽ za izbiro menija <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" /> `{{<T "BulkRecording" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se še en podmeni, ki vsebuje eno polje za številko ušesne oznake živali in drugo polje za datum rojstva živali. Najprej skenirajte črtno kodo za številko ušesne oznake. Obroba polja se spremeni iz rdeče v zeleno. Nato skenirajte datum rojstva. Obroba se za kratek čas obarva zeleno, preden se obe obrobi ponovno obarvata rdeče. Števec pod simbolom potnega lista <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> na vrhu zaslona se poveča iz 0 na 1. Prva žival je bila shranjena. Nadaljujte in skenirajte druge goveje potne liste. Po vsakem skeniranem potnem listu se števec pod simbolom potnega lista <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> poveča za eno. Števec pod simbolom črede <img src="/icons/header/group.svg" width="35" align="bottom" alt="Animal group"  title="Animal group" /> se prav tako poveča za eno.


{{% alert title="Namig" %}}
Števec pod simbolom potnega lista <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Živalski potni listi" title="Živalski potni listi" /> prikazuje, koliko potnih listov ste skenirali naenkrat, ne da bi zapustili zaslon `{{<T "BulkRecording" >}}`. Števec pod simbolom črede <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nova žival" /> prikazuje, koliko potnih listov ste skenirali skupaj. Ta števec se ne ponastavi na nič, če zapustite zaslon `{{<T "BulkRecording" >}}`. Število ustreza vašim vnosom v menijski postavki ['Nakupi'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Meni 'Novo - Skupinsko snemanje'](../images/bulk-recording.png "Skupinsko snemanje")

{{% alert title="Namig" %}}
V menijski postavki `{{<T "BulkRecording" >}}` imate dodatne možnosti nastavitev. Te so pojasnjene spodaj. Kot pripravljalne korake vedno najprej dostopajte do menijske postavke `{{<T "BulkRecording" >}}` in nato nadaljujte po navodilih.
{{% /alert %}}

{{% alert title="Namig" %}}
Med postopkom skeniranja se lahko pojavijo sporočila o napakah. V tem primeru čitalnik črtne kode odda zvok in nadaljnje skeniranje ni mogoče. Potrdite ustrezno sporočilo o napaki na zaslonu VitalControl in nadaljujte s skeniranjem.
{{% /alert %}}

### Obvezen datum rojstva {#birth-date-mandatory}

S to možnostjo nastavitve lahko določite, ali je treba ob ustvarjanju živali navesti datum rojstva. Če to možnost deaktivirate, morate za shranjevanje živali skenirati samo črtno kodo. Za te živali pa se nato kot datum rojstva shrani trenutni datum! Ta funkcija je privzeto omogočena. Če jo želite deaktivirati, naredite naslednje:

1. Uporabite <img src="/icons/gear.svg" width="25" align="bottom" alt="Meni nastavitev" /> gumb `Vklop/Izklop` za odpiranje menija nastavitev.

2. Uporabite puščične tipke △ ▽ za izbiro možnosti nastavitve `{{<T "BirthDateMandatory" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Rumeni krog simbolizira, da je funkcija aktivirana. Sivi krog simbolizira, da je funkcija deaktivirana.

4. Shranite nastavitve in uporabite tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za vrnitev na meni <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Birth date mandatory")

### Privzete vrednosti {#default-values}

V meniju nastavitev `{{<T "DefaultValues" >}}` nastavite standarde, ki veljajo za vsako žival, ki jo ustvarite. Postopek ustvarjanja z uporabo čitalca črtne kode ostaja nespremenjen, kot je opisano zgoraj. Imate možnost nastaviti vrsto živine, spol, pasmo in lokacijo. Za nastavitev `{{<T "DefaultValues" >}}` sledite naslednjim korakom:

1. Uporabite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> gumb `On/Off` za odprtje menija nastavitev.

2. Uporabite puščične tipke △ ▽ za izbiro menija `{{<T "DefaultValues" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z različnimi možnostmi nastavitev. Uporabite puščične tipke △ ▽ za izbiro želene možnosti nastavitve. Uporabite puščične tipke ◁ ▷ za izbiro želene nastavitve.

4. Shranite nastavitve in uporabite tipko `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za vrnitev na meni <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Default values](../images/defaultvalues.png "Default values")

### Zabeležene vrednosti {#recorded-values}

V meniju nastavitev `{{<T "RecordedValues" >}}` lahko določite, katere vrednosti naj se zajamejo poleg številke ušesne oznake in datuma rojstva. Izbirate lahko med `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` in `{{<T "TypeAnimal" >}}`. Takoj ko nastavite vsaj eno vrednost, se postopek spremeni med skeniranjem. Najprej skenirajte številko ušesne oznake in datum rojstva. Nato uporabite smerne tipke △ ▽ za izbiro vrednosti, ki jih želite nastaviti, in nastavite vrednosti. Nato shranite svoje vnose s tipko `F3`. Šele nato je žival ustvarjena! Za nastavitev vrednosti, ki naj se zabeležijo, sledite naslednjim korakom:


1. Uporabite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> gumb `On/Off` za odprtje menija nastavitev.

2. Uporabite puščične tipke △ ▽ za izbiro menijske postavke `{{<T "RecordedValues" >}}` in potrdite z `{{<T "Ok" >}}`.

3. Izberite želeno vrednost za snemanje s puščičnimi tipkami △ ▽ in potrdite z `{{<T "Ok" >}}`. Pojavi se rumen krog. Če želite deaktivirati vrednost za snemanje, ponovno potrdite z `{{<T "Ok" >}}`. Rumeni krog izgine.

4. Shranite nastavitve in uporabite tipko `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za vrnitev na menijsko postavko <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Če želite ponovno deaktivirati vse vrednosti za snemanje, izberite možnost nastavitve `{{<T "EnableAllResetOrder" >}}` v menijski postavki `{{<T "RecordedValues" >}}` in potrdite z `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
