---
title: Adatok exportálása USB flash meghajtóra
linkTitle: USB flash meghajtóra
date: 2023-07-20
weight: 10
description: >
  Állatadatokat és mérési értékeket tartalmazó CVS adatfájlok exportálása a VitalControl eszközről egy USB flash meghajtóra.
categories: [Adatok exportálása]
tags: [CSV fájlok, USB flash meghajtó]
translationKey: data-export/usb-drive
---
{{% usb-drive/hu "Az eszköz adatainak exportálásához," %}}

## Adatok exportálása {#perform-data-export}	

1. Nyissa meg a menüpontot &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Eszköz" /> `{{<T "Device" >}}` a VitalControl eszköz főképernyőjén.

2. Hívja elő az `{{<T "DataManagement" >}}` almenüt, válassza az `{{<T "AnimalData" >}}` menüpontot, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Egy másik almenü nyílik meg. Válassza az `{{<T "ExportAnimalData" >}}` menüpontot, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Most kérni fogja, hogy helyezzen be egy USB flash meghajtót:

   ![VitalControl: Menüútvonal adat exportálás](../images/data-export.png "Adatok exportálásának előhívása")

5. Helyezze be az USB flash meghajtót (C csatlakozó) az eszköz alján található csatlakozóba.

   ![VitalControl: USB flash meghajtó behelyezése](/images/firmware/update/plug-in-dual-usb-stick.svg "USB flash meghajtó behelyezése")

6. Amint az eszköz érzékeli az USB stick behelyezését, az adatok exportálása automatikusan elindul. Az adatmentés írása néhány másodpercet vehet igénybe. Amikor az adatok exportálása befejeződött, egy sikerüzenet jelenik meg:

   ![VitalControl: sikerüzenet adat exportálás](../images/success-data-export.png "Sikeres adat exportálás")

7. Az adatok exportálása most befejeződött. A négy létrehozott [export fájlt](../export-files/) az `export-csv` könyvtárban találja az USB flash meghajtón.

   ![USB flash meghajtó export fájlokkal VitalControl](../images/export-files.png "Export fájlok USB flash meghajtón")

   {{% alert title="Megjegyzések" %}}
  - Az export fájlok véletlen felülírásának elkerülése érdekében minden export fájl neve tartalmazza a fájl létrehozásának dátumát és időpontját. Ügyeljen arra, hogy a legújabb verziót használja, ha többször exportált állatadatokat.
  - Az export fájlok mérete az állatok számától és a végrehajtott mérések számától függ. Általában az export fájlok csak néhány kB tárhelyet foglalnak el az USB sticken.
   {{% /alert %}}
