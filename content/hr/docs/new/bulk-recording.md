---
title: "Masovna registracija grupe kupljenih životinja"
linkTitle: "Masovno bilježenje"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Koristite skener barkoda za bilježenje raznih životinja.
categories: [Masovno bilježenje]
tags: [Masovno bilježenje]
translationKey: new/bulk-recording
---
## Masovno bilježenje {#bulk-recording}

Uz pomoć masovne registracije, možete zabilježiti veliki broj životinja u kratkom vremenu i spremiti ih na svoj uređaj. Koristite skener barkoda za skeniranje barkodova za broj ušne markice i datum rođenja na putovnicama stoke. Životinja se automatski sprema i možete odmah skenirati sljedeću putovnicu. Da biste izvršili masovnu registraciju životinja, postupite na sljedeći način:

1. Spojite skener barkoda na VitalControl pomoću kabela.

2. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku izbornika <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nova životinja" /> `{{<T "New" >}}` i pritisnite gumb `{{<T "Ok" >}}`.

3. Otvara se podizbornik. Koristite tipke sa strelicama ◁ ▷ △ ▽ za odabir stavke izbornika <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Masovno bilježenje" /> `{{<T "BulkRecording" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Otvara se još jedan podizbornik, koji sadrži jedno polje za broj ušne markice životinje i drugo polje za datum rođenja životinje. Prvo skenirajte barkod za broj ušne markice. Granica polja mijenja boju iz crvene u zelenu. Zatim skenirajte datum rođenja. Granica se nakratko pretvara u zelenu prije nego što obje granice ponovno postanu crvene. Brojač ispod simbola putovnice <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Putovnice životinja" title="Putovnice životinja" /> na vrhu ekrana povećava se s 0 na 1. Prva životinja je spremljena. Nastavite i skenirajte ostale putovnice stoke. Nakon svake skenirane putovnice, brojač ispod simbola putovnice <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Putovnice životinja" title="Putovnice životinja" /> povećava se za jedan. Brojač ispod simbola stada <img src="/icons/header/group.svg" width="35" align="bottom" alt="Grupa životinja"  title="Grupa životinja" /> također se povećava za jedan.

{{% alert title="Savjet" %}}
Brojač ispod simbola putovnice <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Životinjske putovnice" title="Životinjske putovnice" /> pokazuje koliko ste putovnica skenirali odjednom bez napuštanja zaslona `{{<T "BulkRecording" >}}`. Brojač ispod simbola stada <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nova životinja" /> pokazuje koliko ste ukupno skenirali putovnica. Ovaj brojač se ne resetira na nulu ako napustite zaslon `{{<T "BulkRecording" >}}`. Broj je ekvivalentan vašim unosima u stavci izbornika ['Kupnje'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Izbornik 'Novo - Skupno snimanje'](../images/bulk-recording.png "Skupno snimanje")

{{% alert title="Savjet" %}}
Imate dodatne opcije postavki unutar stavke izbornika `{{<T "BulkRecording" >}}`. One su objašnjene u nastavku. Kao pripremne korake, uvijek prvo pristupite stavci izbornika `{{<T "BulkRecording" >}}` i zatim nastavite prema uputama.
{{% /alert %}}

{{% alert title="Savjet" %}}
Tijekom procesa skeniranja mogu se pojaviti poruke o pogreškama. U tom slučaju, skener barkoda emitira zvuk i daljnje skeniranje nije moguće. Potvrdite odgovarajuću poruku o pogrešci na zaslonu VitalControl i nastavite sa skeniranjem.
{{% /alert %}}

### Obavezan datum rođenja {#birth-date-mandatory}

S ovom opcijom postavki možete odrediti mora li se navesti datum rođenja prilikom kreiranja životinja. Ako deaktivirate ovu opciju, samo trebate skenirati barkod kako biste spremili životinju. Međutim, za te životinje će se tada pohraniti trenutni datum kao datum rođenja! Ova značajka je prema zadanim postavkama omogućena. Da biste je deaktivirali, učinite sljedeće:

1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Izbornik postavki" /> gumb `Uključeno/Isključeno` za otvaranje izbornika postavki.

2. Koristite tipke sa strelicama △ ▽ za odabir opcije postavki `{{<T "BirthDateMandatory" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Žuti krug simbolizira da je funkcija aktivirana. Sivi krug simbolizira da je funkcija deaktivirana.

4. Spremite postavke i koristite tipku `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za povratak na stavku izbornika <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Birth date mandatory")

### Zadane vrijednosti {#default-values}

Unutar izbornika postavki `{{<T "DefaultValues" >}}` postavljate standarde koji se primjenjuju na svaku životinju koju kreirate. Proces kreiranja pomoću skenera barkoda ostaje nepromijenjen kao što je gore opisano. Imate mogućnost postavljanja vrste stoke, spola, pasmine i lokacije. Da biste postavili `{{<T "DefaultValues" >}}`, postupite na sljedeći način:

1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> tipku `On/Off` za otvaranje izbornika postavki.

2. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "DefaultValues" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Otvara se podizbornik s različitim opcijama postavki. Koristite tipke sa strelicama △ ▽ za odabir željene opcije postavki. Koristite tipke sa strelicama ◁ ▷ za odabir željene postavke.

4. Spremite postavke i koristite tipku `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za povratak na stavku izbornika <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Default values](../images/defaultvalues.png "Default values")

### Zabilježene vrijednosti {#recorded-values}

Unutar izbornika postavki `{{<T "RecordedValues" >}}` možete odrediti koje vrijednosti treba zabilježiti uz broj ušne markice i datum rođenja. Možete birati između `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` i `{{<T "TypeAnimal" >}}`. Čim postavite barem jednu vrijednost, proces se mijenja tijekom skeniranja. Prvo skenirajte broj ušne markice i datum rođenja. Zatim koristite tipke sa strelicama △ ▽ za odabir vrijednosti koje treba postaviti i postavite vrijednosti. Zatim spremite svoje unose s tipkom `F3`. Tek tada je životinja kreirana! Da biste postavili vrijednosti koje treba zabilježiti, postupite na sljedeći način:


1. Koristite <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> gumb `On/Off` za otvaranje izbornika postavki.

2. Koristite tipke sa strelicama △ ▽ za odabir stavke izbornika `{{<T "RecordedValues" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Odaberite željenu vrijednost za snimanje pomoću tipki sa strelicama △ ▽ i potvrdite s `{{<T "Ok" >}}`. Pojavit će se žuti krug. Ako želite deaktivirati vrijednost za snimanje, ponovno potvrdite s `{{<T "Ok" >}}`. Žuti krug će nestati.

4. Spremite postavke i koristite tipku `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> za povratak na stavku izbornika <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Ako želite ponovno deaktivirati sve vrijednosti za snimanje, odaberite opciju postavki `{{<T "EnableAllResetOrder" >}}` u stavci izbornika `{{<T "RecordedValues" >}}` i potvrdite s `{{<T "Ok" >}}`.

   ![VitalControl: Menu New Record values](../images/recordvalues.png "Record values")
