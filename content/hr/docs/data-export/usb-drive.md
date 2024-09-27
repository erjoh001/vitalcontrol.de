---
title: Izvoz podataka na USB flash pogon
linkTitle: Na USB flash pogon
date: 2023-07-20
weight: 10
description: >
  Izvoz CSV datoteka koje sadrže podatke o životinjama i vrijednosti mjerenja pohranjenih na uređaju VitalControl na USB flash pogon.
categories: [Izvoz podataka]
tags: [CSV datoteke, USB flash pogon]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Kako biste izvršili izvoz podataka s vašeg uređaja," %}}

## Izvršite izvoz podataka {#perform-data-export}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Uređaj" /> `{{<T "Device" >}}` na glavnom ekranu vašeg uređaja VitalControl.

2. Pozovite podizbornik `{{<T "DataManagement" >}}`, odaberite stavku izbornika `{{<T "AnimalData" >}}` i potvrdite s `{{<T "Ok" >}}`.

3. Otvorit će se drugi podizbornik. Odaberite stavku izbornika `{{<T "ExportAnimalData" >}}` i potvrdite s `{{<T "Ok" >}}`.

4. Sada će vam biti zatraženo da umetnete USB flash pogon:

   ![VitalControl: Putanja izbornika za izvoz podataka](../images/data-export.png "Pozovite izvoz podataka")

5. Umetnite USB flash pogon (C priključak) u konektor na dnu uređaja.

   ![VitalControl: umetnite USB flash pogon](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash pogon")

6. Kada uređaj detektira umetanje USB sticka, izvoz podataka automatski započinje. Pisanje sigurnosnih podataka može potrajati nekoliko sekundi. Kada izvoz podataka završi, prikazuje se poruka o uspjehu:

   ![VitalControl: poruka o uspješnom izvozu podataka](../images/success-data-export.png "Uspješan izvoz podataka")

7. Izvoz podataka je sada završen. Naći ćete četiri stvorene [izvozne datoteke](../export-files/) unutar direktorija `export-csv` na vašem USB flash pogonu.

   ![USB flash pogon s izvoznim datotekama VitalControl](../images/export-files.png "Izvozne datoteke na USB flash pogonu")

   {{% alert title="Napomene" %}}
  - Kako biste spriječili slučajno prepisivanje izvoznih datoteka, naziv svake izvozne datoteke uvijek uključuje datum i vrijeme kada je datoteka stvorena. Budite sigurni da koristite najnoviju verziju izvoznih datoteka ako ste više puta izvozili podatke o životinjama.
  - Veličina izvoznih datoteka ovisi o broju životinja na VitalControlu i o broju izvršenih mjerenja. Općenito, izvozne datoteke zauzimaju samo nekoliko kB prostora na USB sticku.
   {{% /alert %}}

Molim vas, unesite sadržaj Markdown dokumenta koji želite prevesti.
