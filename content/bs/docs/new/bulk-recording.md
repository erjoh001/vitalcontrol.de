---
title: "Masovna registracija grupe kupljenih životinja"
linkTitle: "Masovno snimanje"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Koristite skener bar kodova za snimanje različitih životinja.
categories: [Masovno snimanje]
tags: [Masovno snimanje]
translationKey: new/bulk-recording
---
## Masovno snimanje {#bulk-recording}

Uz pomoć masovne registracije, možete zabilježiti veliki broj životinja u kratkom vremenu i sačuvati ih na svom uređaju. Koristite skener bar kodova za skeniranje bar kodova za broj ušne markice i datum rođenja na pasošima stoke. Životinja se automatski sprema i možete odmah skenirati sljedeći pasoš. Da biste izvršili masovnu registraciju životinja, postupite na sljedeći način:

1. Povežite skener bar kodova sa VitalControl uređajem pomoću kabla.

2. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nova životinja" /> `{{<T "New" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

3. Otvara se podmeni. Koristite strelice ◁ ▷ △ ▽ da odaberete stavku iz menija <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masovno snimanje" /> `{{<T "BulkRecording" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Otvara se još jedan podmeni, koji sadrži jedno polje za broj ušne markice životinje i drugo polje za datum rođenja životinje. Prvo skenirajte bar kod za broj ušne markice. Granica polja se mijenja iz crvene u zelenu. Zatim skenirajte datum rođenja. Granica se nakratko pretvara u zelenu prije nego što obje granice ponovo postanu crvene. Brojač ispod simbola pasoša <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasoši životinja" title="Pasoši životinja" /> na vrhu ekrana povećava se sa 0 na 1. Prva životinja je sačuvana. Nastavite i skenirajte ostale pasoše stoke. Nakon svakog skeniranog pasoša, brojač ispod simbola pasoša <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasoši životinja" title="Pasoši životinja" /> povećava se za jedan. Brojač ispod simbola stada <img src="/icons/header/group.svg" width="35" align="bottom" alt="Grupa životinja"  title="Grupa životinja" /> također se povećava za jedan.

{{% alert title="Savjet" %}}
Brojač ispod simbola pasoša <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Pasoši životinja" title="Pasoši životinja" /> pokazuje koliko ste pasoša skenirali odjednom bez napuštanja ekrana `{{<T "BulkRecording" >}}`. Brojač ispod simbola stada <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nova životinja" /> pokazuje koliko ste ukupno skenirali pasoša. Ovaj brojač se ne resetuje na nulu ako napustite ekran `{{<T "BulkRecording" >}}`. Broj je ekvivalentan vašim unosima u stavci menija ['Kupovine'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Meni 'Novo - Masovno snimanje'](../images/bulk-recording.png "Masovno snimanje")

{{% alert title="Savjet" %}}
Imate dodatne opcije postavki unutar stavke menija `{{<T "BulkRecording" >}}`. One su objašnjene u nastavku. Kao pripremne korake, uvijek prvo pristupite stavci menija `{{<T "BulkRecording" >}}` i zatim nastavite prema uputama.
{{% /alert %}}

{{% alert title="Savjet" %}}
Tokom procesa skeniranja mogu se pojaviti poruke o greškama. U tom slučaju, skener bar koda emitira zvuk i daljnje skeniranje nije moguće. Potvrdite odgovarajuću poruku o grešci na ekranu VitalControl i nastavite sa skeniranjem.
{{% /alert %}}

### Datum rođenja obavezan {#birth-date-mandatory}

Ovom opcijom postavki možete odrediti da li se datum rođenja mora navesti prilikom kreiranja životinja. Ako deaktivirate ovu opciju, samo trebate skenirati bar kod da biste sačuvali životinju. Međutim, za te životinje će trenutni datum biti pohranjen kao datum rođenja! Ova funkcija je po defaultu omogućena. Da biste je deaktivirali, uradite sljedeće:

1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Meni postavki" /> dugme `Uključeno/Isključeno` da otvorite meni postavki.

2. Koristite strelice △ ▽ da odaberete opciju postavki `{{<T "BirthDateMandatory" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Žuti krug simbolizira da je funkcija aktivirana. Sivi krug simbolizira da je funkcija deaktivirana.

4. Sačuvajte postavke i koristite taster `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> da se vratite na stavku menija <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Birth date mandatory")

### Zadane vrijednosti {#default-values}

Unutar menija postavki `{{<T "DefaultValues" >}}` postavljate standarde koji se primjenjuju na svaku životinju koju kreirate. Proces kreiranja sa skenerom barkoda ostaje nepromijenjen kao što je gore opisano. Imate mogućnost postavljanja vrste stoke, spola, rase i lokacije. Da biste postavili `{{<T "DefaultValues" >}}`, postupite na sljedeći način:

1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> dugme `On/Off` da otvorite meni postavki.

2. Koristite strelice △ ▽ da odaberete stavku menija `{{<T "DefaultValues" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se podmeni sa različitim opcijama postavki. Koristite strelice △ ▽ da odaberete željenu opciju postavki. Koristite strelice ◁ ▷ da odaberete željenu postavku.

4. Sačuvajte postavke i koristite taster `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> da se vratite na stavku menija <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Default values](../images/defaultvalues.png "Default values")

### Zabilježene vrijednosti {#recorded-values}

Unutar menija postavki `{{<T "RecordedValues" >}}` možete odrediti koje vrijednosti treba zabilježiti pored broja ušne markice i datuma rođenja. Možete birati između `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` i `{{<T "TypeAnimal" >}}`. Čim postavite barem jednu vrijednost, proces se mijenja tokom skeniranja. Prvo skenirajte broj ušne markice i datum rođenja. Zatim koristite strelice △ ▽ da odaberete vrijednosti koje treba postaviti i postavite vrijednosti. Zatim sačuvajte svoje unose sa tasterom `F3`. Tek tada je životinja kreirana! Da biste postavili vrijednosti koje treba zabilježiti, postupite na sljedeći način:


1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> dugme `On/Off` za otvaranje menija sa postavkama.

2. Koristite strelice △ ▽ za odabir stavke menija `{{<T "RecordedValues" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Odaberite željenu vrijednost za snimanje pomoću strelica △ ▽ i potvrdite sa `{{<T "Ok" >}}`. Pojaviće se žuti krug. Ako želite deaktivirati vrijednost za snimanje, ponovo potvrdite sa `{{<T "Ok" >}}`. Žuti krug će nestati.

4. Sačuvajte postavke i koristite tipku `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za povratak na stavku menija <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Ako želite ponovo deaktivirati sve vrijednosti za snimanje, odaberite opciju postavki `{{<T "EnableAllResetOrder" >}}` u stavci menija `{{<T "RecordedValues" >}}` i potvrdite sa `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
