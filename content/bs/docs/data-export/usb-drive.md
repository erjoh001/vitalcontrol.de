---
title: Izvoz podataka na USB flash disk
linkTitle: Na USB flash disk
date: 2023-07-20
weight: 10
description: >
  Izvoz CVS datoteka koje sadrže podatke o životinjama i vrijednosti mjerenja pohranjenih na uređaju VitalControl na USB flash disk.
categories: [Izvoz podataka]
tags: [CSV datoteke, USB flash disk]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "Da biste izvršili izvoz podataka sa svog uređaja," %}}

## Izvršite izvoz podataka {#perform-data-export}

1. Otvorite stavku izbornika &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Uređaj" /> `{{<T "Device" >}}` na glavnom ekranu vašeg VitalControl uređaja.

2. Pozovite podizbornik `{{<T "DataManagement" >}}`, odaberite stavku izbornika `{{<T "AnimalData" >}}` i potvrdite sa `{{<T "Ok" >}}`.

3. Otvorit će se drugi podizbornik. Odaberite stavku izbornika `{{<T "ExportAnimalData" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Sada će vam biti zatraženo da umetnete USB flash disk:

   ![VitalControl: Putanja izbornika za izvoz podataka](../images/data-export.png "Pozovite izvoz podataka")

5. Umetnite USB flash disk (C priključak) u konektor na dnu uređaja.

   ![VitalControl: umetnite USB flash disk](/images/firmware/update/plug-in-dual-usb-stick.svg "Umetnite USB flash disk")

6. Kada uređaj detektuje umetanje USB sticka, izvoz podataka automatski započinje. Pisanje sigurnosnih podataka može potrajati nekoliko sekundi. Kada izvoz podataka završi, prikazuje se poruka o uspjehu:

   ![VitalControl: poruka o uspješnom izvozu podataka](../images/success-data-export.png "Uspješan izvoz podataka")

7. Izvoz podataka je sada završen. Naći ćete četiri kreirane [izvozne datoteke](../export-files/) unutar direktorija `export-csv` na vašem USB flash disku.

   ![USB flash disk sa izvoznim datotekama VitalControl](../images/export-files.png "Izvozne datoteke na USB flash disku")

   {{% alert title="Napomene" %}}
  - Da biste spriječili slučajno prepisivanje izvoznih datoteka, naziv svake izvozne datoteke uvijek uključuje datum i vrijeme kada je datoteka kreirana. Budite sigurni da koristite najnoviju verziju izvoznih datoteka ako ste više puta izvozili podatke o životinjama.
  - Veličina izvoznih datoteka ovisi o broju životinja na VitalControl uređaju i o broju izvršenih mjerenja. Općenito, izvozne datoteke zauzimaju samo nekoliko kB prostora na USB sticku.
   {{% /alert %}}

Molim vas unesite sadržaj Markdown dokumenta koji želite prevesti.
