---
title: Andmete eksport USB mälupulgale
linkTitle: USB mälupulgale
date: 2023-07-20
weight: 10
description: >
  Ekspordi CVS andmefailid, mis sisaldavad loomade andmeid ja mõõtmistulemusi, mis on salvestatud VitalControl seadmesse, USB mälupulgale.
kategooriad: [Andmete eksport]
Sildid: [CSV failid, USB mälupulk]
translationKey: data-export/usb-drive
---
{{% usb-drive/et "Selleks, et teostada oma seadme andmete eksporti," %}}

## Viige läbi andmete eksport {#perform-data-export}	

1. Avage menüüpunkt &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Seade" /> `{{<T "Device" >}}` oma VitalControl seadme põhiekraanil.

2. Kutsuge esile alammenüü `{{<T "DataManagement" >}}`, valige menüüpunkt `{{<T "AnimalData" >}}` ja kinnitage `{{<T "Ok" >}}`.

3. Avaneb veel üks alammenüü. Valige menüüpunkt `{{<T "ExportAnimalData" >}}` ja kinnitage `{{<T "Ok" >}}`.

4. Teilt küsitakse nüüd USB mälupulga sisestamist:

   ![VitalControl: Menüütee andmete eksportimiseks](../images/data-export.png "Kutsu esile andmete eksport")

5. Sisestage USB mälupulk (C pistik) seadme allosas olevasse ühenduspesasse.

   ![VitalControl: sisesta USB mälupulk](/images/firmware/update/plug-in-dual-usb-stick.svg "Sisesta USB mälupulk")

6. Kui seade on tuvastanud USB pulga sisestamise, algab andmete eksport automaatselt. Varundusandmete kirjutamine võib võtta mõned sekundid. Kui andmete eksport on lõppenud, kuvatakse edukateade:

   ![VitalControl: edukateade andmete ekspordi kohta](../images/success-data-export.png "Edukas andmete eksport")

7. Andmete eksport on nüüd lõpetatud. Te leiate neli loodud [ekspordifaili](../export-files/) kaustast `export-csv` oma USB mälupulgal.

   ![USB mälupulk ekspordifailidega VitalControl](../images/export-files.png "Ekspordifailid USB mälupulgal")

   {{% alert title="Märkused" %}}
  - Ekspordifailide kogemata ülekirjutamise vältimiseks sisaldab iga ekspordifaili nimi alati kuupäeva ja kellaaega, millal fail loodi. Kui olete loomade andmeid mitu korda eksportinud, kasutage kindlasti ekspordifailide uusimat versiooni.
  - Ekspordifailide suurus sõltub VitalControlis olevate loomade arvust ja tehtud mõõtmiste arvust. Üldiselt võtavad ekspordifailid USB pulgal vaid mõned kB salvestusruumi.
   {{% /alert %}}
