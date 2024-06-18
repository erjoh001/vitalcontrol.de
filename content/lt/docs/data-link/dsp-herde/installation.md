---
title: "Technologijos VitalControl nustatymas:"
linkTitle: Nustatymas
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Apibrėžkite sinchronizavimo parametrus duomenų mainams tarp programinės įrangos *Herde* ir VitalControl įrenginio.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Prieš pirmąjį [duomenų mainą](../data-exchange/), reikia sukurti ir nustatyti technologijos sujungimą su VitalControl įrenginiu.

{{% alert title="Dėmesio" %}}
Prieš nustatant technologijos sujungimą, patikrinkite, ar jūsų kompiuteryje įdiegta 'VCSynchronizer' programinė įranga; ši programinė įranga yra būtina duomenų mainams. Norėdami tai padaryti, atidarykite Windows Start meniu ir ieškokite savo programų sąraše įrašo pavadinimu 'Urban VitalControl'. Jei tokio įrašo nerandate, [įdiekite](../../vcsynchronizer/installation/) `VCSynchronizer` programinę įrangą savo kompiuteryje.
{{% /alert %}}

Norėdami nustatyti technologiją, atlikite šiuos veiksmus:

## Sukurkite naują parametrų rinkinį duomenų mainams su VitalControl įrenginiu {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Programinėje įrangoje `Herde` atidarykite `Nustatymų` langą. Priklausomai nuo jūsų vartotojo sąsajos konfigūracijos, šį langą galite atidaryti per meniu punktą `Organizacija` pagrindiniame meniu (aukščiausio lygio punktas _Nustatymai_), šoniniame meniu arba jūsų pritaikytoje įrankių juostoje (horizontaliai arba vertikaliai).

   ![Programinė įranga Herde: nustatymų meniu iškvietimas](../screenshots/settings.png "Herde: iškviesti Nustatymus")

1. Atsidaro iššokantis langas `Nustatymai`, kurio kairiajame šoniniame meniu išvardytos daugybė nustatymų kategorijų. Atidarykite kategoriją `Paslauga` ➊ ir pasirinkite subkategoriją `Technologija` ➋.

1. Dešinės pagrindinės srities antraštėje dabar pasirodo išskleidžiamasis sąrašas, kuriame išvardyti visi apibrėžti technologijos parametrų rinkiniai. Dešinėje rodomas nustatytų technologijų skaičius. Spustelėkite mygtuką ![Programinė įranga Herde: Sukurti naują technologijos parametrų rinkinį](/icons/new.png "Herde: sukurti technologijos sujungimą") `Sukurti naują technologijos parametrų rinkinį` ➌.

![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Atsidaro kitas iššokantis langas. Įveskite `VitalControl` kaip **Ryšio pavadinimą** ir `Urban VitalControl (Gen 2)` kaip **Technologijos tipą**, tada spustelėkite mygtuką `Priimti`.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   Dabar sukurtas `VitalControl` technologijos parametrų rinkinys, kurį reikia sukonfigūruoti kitais žingsniais.

## Konfigūracija: Pagrindiniai nustatymai {#configuration-basic-settings}

Iš pradžių ekrane pasirinkta `Pagrindiniai nustatymai` kortelė, kaip parodyta žemiau esančiame paveikslėlyje. Atlikite ten koregavimus kategorijose `Išorinė programa` ➊, `Gyvūnų duomenys` ➋, `Vietos` ➌ ir `Išėjimas` ➍ pagal jūsų ūkio specifines sąlygas.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Kategorija `Išorinė programa` ➊ {#category-external-program-}

Norint atlikti duomenų mainus tarp VitalControl ir Herde Plus, reikalinga pagrindinė programinė įranga [VitalControl Synchronizer](../../vcsynchronizer) kaip išorinė pagalbinė programa. Kad ši programa veiktų tinkamai, reikia atlikti tam tikrus koregavimus kategorijoje `Išorinė programa` ➊.

- **Įrenginio pavadinimas duomenų mainams**:  
  Pagal numatytuosius nustatymus šis laukas yra tuščias. Tačiau rekomenduojama čia įvesti jūsų kompiuterio pavadinimą. Norėdami tai padaryti, paspauskite piktogramą ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Rodyklė žemyn` dešiniajame išskleidžiamojo lauko gale. Dabar bus nustatytas ir rodomas jūsų kompiuterio pavadinimas pasirinkimui iš išskleidžiamojo sąrašo. Kai laukas bus užpildytas jūsų kompiuterio pavadinimu ir šis nustatymas bus išsaugotas, duomenų mainai nuo šiol galės būti inicijuojami tik iš jūsų kompiuterio.

- **Vykdyti kelyje**:
  Prašome įvesti `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` į šį įvesties lauką. Tai yra absoliutus kelias į programą `VitalControl Synchronizer` (arba konkrečiau į failą `vcsynchronizer.exe`). Jei šios programos tikslinė direktorija buvo pakeista [VCSynchronizer diegimo metu](../../vcsynchronizer/installation), prašome čia įvesti pasirinktą tikslinę direktoriją.

- **Program HerdePlus 🡒 Technology**:  
  Šis įvesties laukas turi būti užpildytas verte `vc_imp.bat`. Atitinkamai pavadintas paketinis failas nurodo operacijų seką duomenų importo metu.

- **Technology 🡒 Program HerdePlus**:  
  Šis įvesties laukas turi būti užpildytas verte `vc_exp.bat`. Atitinkamai pavadintas paketinis failas nurodo operacijų seką duomenų eksporto metu.

### Kategorija `Gyvūnų duomenys` ➋ {#category-animal-data-}

Papildomi pakeitimai turi būti atlikti kategorijoje 'Gyvūnų duomenys' ➋, kad duomenų mainai būtų visiškai funkcionalūs.

- **Gyvūno numeris**:  
  Šis nustatymas lemia, kokį ID gyvūnai gauna rodymui VitalControl įrenginyje:
  - Jei savo gyvūnams priskyrėte trumpus ID (`Tvarto nr.`, 2-6 skaitmenys), čia turėtumėte pasirinkti vertę 'Tvarto numeris': gyvūno ID, rodomas VitalControl, atitiks gyvūnui priskirtą tvarto numerį.
  - Jei savo gyvūnams **ne** priskyrėte trumpų ID numerių - tai įprasta, pavyzdžiui, penėjimo sektoriuje - čia turėtumėte pasirinkti vertę `Žymės nr. (5 skaitmenys)`. Gyvūno ID, rodomas VitalControl įrenginyje, atitiks paskutinius 5 skaitmenis ID, atspausdinto ant geltonos ausies žymės.

<br>

- **Siųstuvo nr.**:  
  Šis nustatymas lemia numerį, kurio tikimasi gyvūnui RFID skenavimo metu:  
  - Jei savo gyvūnams uždedate antkaklį su transponderiu arba ausies transponderį - pavyzdžiui, identifikacijai prie automatinio šėryklos - čia turėtumėte pasirinkti vertę 'Transponderis'.
  - Jei jūsų gyvūnai ar veršeliai nešioja elektronines ausies žymes, užkoduotas oficialiu nacionaliniu 15 skaitmenų gyvūno identifikacijos numeriu, kuris bus naudojamas gyvūno identifikacijai visą jo gyvenimą, čia turėtumėte pasirinkti vertę 'Žymės nr. (15 skaitmenų)`.

<br>

- **Minimalus amžius perdavimui**:  
  Jei šiame įvesties lauke įvedama vertė `0`, **visi gyvūnai** bus perduoti į VitalControl įrenginį, nepriklausomai nuo jų amžiaus. Vertė, didesnė nei `0`, apibrėžia minimalų amžių (dienomis) gyvūnams, kurie bus perduoti. Pavyzdžiui, jei įrenginiui turi būti perduotos **tik karvės**, čia kaip minimalus amžius turi būti įvesta 600 dienų (= 20 mėnesių) vertė.

### Kategorija `Vietos` ➌ {#category-locations-}

Naudokite šią kategoriją, kad išskirtumėte gyvūnus tam tikrose vietose iš duomenų perdavimo į įrenginį. Norėdami tai padaryti, pašalinkite žymėjimą iš vietos (-ų), kuriose **nenorite**, kad ten laikomi gyvūnai būtų perduoti į įrenginį.

### Kategorija `Išvykimas` ➍ {#category-leaving-}

Pažymėkite parinktį 'Išvykimas HERDEplus'. Tokiu būdu nurodote, kad gyvūnai, kurie paliko bandą, taip pat bus ištrinti iš VitalControl įrenginio sinchronizacijos metu.
Taip pat pažymėkite parinktį 'Nėra sandėlyje'. Tokiu būdu nurodote, kad gyvūnai, esantys VitalControl, kurie nėra žinomi `Herde` programinei įrangai, bus ištrinti iš VitalControl sinchronizacijos metu.

## Konfigūracija: Technologijai specifiniai nustatymai {#configuration-technology-specific-settings}

Toliau spustelėkite skirtuką `Technologijai specifiniai nustatymai`, kad nustatytumėte duomenų mainų apimtį. Rekomenduojama pažymėti visus ten išvardytus žymimuosius langelius, išskyrus žymimąjį langelį `Išsaugoti importo failą po apdorojimo`. Pastarasis žymimasis langelis skirtas diagnostikos tikslams ir turėtų būti pasirinktas tik tada, kai to reikalauja aptarnavimo personalas.

- **Maksimalus amžius perdavimui**:  
  Jei čia įvedama reikšmė `0`, **visi gyvūnai** bus perduoti į VitalControl įrenginį, nepriklausomai nuo jų amžiaus. Reikšmė, didesnė nei `0`, apibrėžia maksimalų amžių (dienomis) gyvūnams, kurie bus perduoti. Pavyzdžiui, jei į įrenginį turi būti perduoti **tik veršeliai**, čia turi būti įvesta 90 dienų (= 3 mėnesiai) kaip maksimalus amžius.

   ![Herde Software: Konfigūracijos Duomenų mainai](../screenshots/technology-specific-settings.png "Duomenų mainai: specifiniai nustatymai").

## Išsaugoti duomenų mainų nustatymus {#save-data-exchange-settings}

Paspauskite klavišą `Išsaugoti (F2)` po to, kai tinkamai sukonfigūravote visus konfigūracijos parametrus. Dabar duomenų mainų parametrų rinkinys į VitalControl įrenginį yra išsaugotas ir paruoštas naudoti.  
Dabar atlikite [duomenų mainus](../data-exchange/), kad patikrintumėte, ar nustatyti parametrai yra galiojantys, kad sėkmingai galėtumėte keistis duomenimis su VitalControl įrenginiu.


