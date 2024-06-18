---
title: "Masinė įsigytų gyvūnų grupės registracija"
linkTitle: "Masinė registracija"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Naudokite brūkšninių kodų skaitytuvą, kad užregistruotumėte įvairius gyvūnus.
categories: [Masinė registracija]
tags: [Masinė registracija]
translationKey: new/bulk-recording
---
## Masinė registracija {#bulk-recording}

Naudodamiesi masine registracija, galite greitai užfiksuoti didelį skaičių gyvūnų ir išsaugoti juos savo įrenginyje. Naudokite brūkšninių kodų skaitytuvą, kad nuskaitytumėte ausų žymės numerio ir gimimo datos brūkšninius kodus iš galvijų pasų. Gyvūnas išsaugomas automatiškai ir galite iš karto nuskaityti kitą pasą. Norėdami atlikti masinę gyvūnų registraciją, atlikite šiuos veiksmus:

1. Prijunkite brūkšninių kodų skaitytuvą prie VitalControl naudodami kabelį.

2. Pagrindiniame VitalControl įrenginio ekrane pasirinkite meniu punktą <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Naujas gyvūnas" /> `{{<T "New" >}}` ir paspauskite mygtuką `{{<T "Ok" >}}`.

3. Atsidaro submeniu. Naudokite rodyklių klavišus ◁ ▷ △ ▽, kad pasirinktumėte meniu punktą <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masinė registracija" /> `{{<T "BulkRecording" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

4. Atsidaro kitas submeniu, kuriame yra vienas laukas gyvūno ausų žymės numeriui ir kitas laukas gyvūno gimimo datai. Pirmiausia nuskaitykite ausų žymės numerio brūkšninį kodą. Lauko rėmelis pasikeičia iš raudonos į žalią. Tada nuskaitykite gimimo datą. Rėmelis trumpam tampa žalias, prieš abu rėmeliai vėl pasirodant raudoni. Skaitiklis po paso simboliu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Gyvūnų pasai" title="Gyvūnų pasai" /> ekrano viršuje padidėja nuo 0 iki 1. Pirmasis gyvūnas buvo išsaugotas. Tęskite ir nuskaitykite kitus galvijų pasus. Po kiekvieno nuskaityto paso skaitiklis po paso simboliu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Gyvūnų pasai" title="Gyvūnų pasai" /> padidėja vienu. Skaitiklis po bandos simboliu <img src="/icons/header/group.svg" width="35" align="bottom" alt="Gyvūnų grupė"  title="Gyvūnų grupė" /> taip pat padidėja vienu.

{{% alert title="Patarimas" %}}
Skaitiklis po paso simboliu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Gyvūnų pasai" title="Gyvūnų pasai" /> rodo, kiek pasų nuskenavote vienu metu neišeidami iš `{{<T "BulkRecording" >}}` ekrano. Skaitiklis po bandos simboliu <img src="/icons/header/group.svg" width="35" align="bottom" alt="Naujas gyvūnas" /> rodo, kiek pasų iš viso nuskenavote. Šis skaitiklis nenustatomas į nulį, jei išeinate iš `{{<T "BulkRecording" >}}` ekrano. Skaičius atitinka jūsų įrašus meniu punkte ['Pirkimai'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Meniu 'Naujas - Masinis įrašymas'](../images/bulk-recording.png "Masinis įrašymas")

{{% alert title="Patarimas" %}}
Turite papildomų nustatymo parinkčių meniu punkte `{{<T "BulkRecording" >}}`. Jos paaiškintos žemiau. Kaip parengiamuosius veiksmus, visada pirmiausia pasiekite meniu punktą `{{<T "BulkRecording" >}}` ir tada tęskite pagal instrukcijas.
{{% /alert %}}

{{% alert title="Patarimas" %}}
Skenerio proceso metu gali pasirodyti klaidų pranešimai. Tokiu atveju brūkšninių kodų skaitytuvas skleidžia garsą ir tolesnis skenavimas neįmanomas. Patvirtinkite atitinkamą klaidos pranešimą VitalControl ekrane ir tęskite skenavimą.
{{% /alert %}}

### Privaloma gimimo data {#birth-date-mandatory}

Naudodami šią nustatymo parinktį galite nustatyti, ar kuriant gyvūnus būtina nurodyti gimimo datą. Jei išjungsite šią parinktį, jums reikės tik nuskenuoti brūkšninį kodą, kad išsaugotumėte gyvūną. Tačiau šiems gyvūnams bus saugoma dabartinė data kaip gimimo data! Ši funkcija įjungta pagal numatytuosius nustatymus. Norėdami ją išjungti, atlikite šiuos veiksmus:

1. Naudokite <img src="/icons/gear.svg" width="25" align="bottom" alt="Nustatymų meniu" /> `Įjungti/Išjungti` mygtuką, kad atidarytumėte nustatymų meniu.

2. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte nustatymo parinktį `{{<T "BirthDateMandatory" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Geltonas apskritimas simbolizuoja, kad funkcija įjungta. Pilkas apskritimas simbolizuoja, kad funkcija išjungta.

4. Išsaugokite nustatymus ir naudokite `F1` klavišą &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Išsaugoti ir grįžti" /> grįžti į meniu punktą <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masinis įrašymas" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Meniu Naujas Privalomas gimimo data](../images/birthdate.png "Privalomas gimimo data")

### Numatytosios reikšmės {#default-values}

`{{<T "DefaultValues" >}}` nustatymų meniu galite nustatyti standartus, kurie taikomi kiekvienam jūsų sukurtam gyvūnui. Sukūrimo procesas naudojant brūkšninių kodų skaitytuvą lieka nepakitęs, kaip aprašyta aukščiau. Jūs turite galimybę nustatyti gyvulių tipą, lytį, veislę ir buvimo vietą. Norėdami nustatyti `{{<T "DefaultValues" >}}`, atlikite šiuos veiksmus:

1. Naudokite <img src="/icons/gear.svg" width="25" align="bottom" alt="Nustatymų meniu" /> `On/Off` mygtuką, kad atidarytumėte nustatymų meniu.

2. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "DefaultValues" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Atsidarys submeniu su įvairiomis nustatymo parinktimis. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte norimą nustatymo parinktį. Naudokite rodyklių klavišus ◁ ▷, kad pasirinktumėte norimą nustatymą.

4. Išsaugokite nustatymus ir naudokite `F1` klavišą&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Išsaugoti ir grįžti" /> grįžti į meniu punktą <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masinis įrašymas" />&nbsp; `{{<T "BulkRecording" >}}` .

   ![VitalControl: Meniu Naujas Numatytosios reikšmės](../images/defaultvalues.png "Numatytosios reikšmės")

### Įrašytos reikšmės {#recorded-values}

`{{<T "RecordedValues" >}}` nustatymų meniu galite nurodyti, kurios reikšmės turėtų būti užfiksuotos be ausų žymės numerio ir gimimo datos. Galite pasirinkti tarp `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` ir `{{<T "TypeAnimal" >}}`. Kai nustatote bent vieną reikšmę, procesas keičiasi skenavimo metu. Pirmiausia nuskaitykite ausų žymės numerį ir gimimo datą. Tada naudokite krypties klavišus △ ▽, kad pasirinktumėte nustatytinas reikšmes ir nustatykite reikšmes. Tada išsaugokite savo įrašus su `F3` klavišu. Tik tada gyvūnas yra sukurtas! Norėdami nustatyti įrašytinas reikšmes, atlikite šiuos veiksmus:


1. Naudokite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `Įjungti/Išjungti` mygtuką, kad atidarytumėte nustatymų meniu.

2. Naudokite rodyklių klavišus △ ▽, kad pasirinktumėte meniu punktą `{{<T "RecordedValues" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

3. Pasirinkite norimą įrašyti reikšmę naudodami rodyklių klavišus △ ▽ ir patvirtinkite su `{{<T "Ok" >}}`. Atsiras geltonas apskritimas. Jei norite išjungti įrašomą reikšmę, dar kartą patvirtinkite su `{{<T "Ok" >}}`. Geltonas apskritimas išnyks.

4. Išsaugokite nustatymus ir naudokite `F1` klavišą &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> grįžti į meniu punktą <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Jei norite išjungti visas įrašomas reikšmes, pasirinkite nustatymo parinktį `{{<T "EnableAllResetOrder" >}}` meniu punkte `{{<T "RecordedValues" >}}` ir patvirtinkite su `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
