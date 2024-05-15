---
title: Állat- és mérési adatok exportálása a gazdálkodási számítógépre
linkTitle: Adatok exportálása (PC)
date: 2023-07-19
weight: 15
description: >
 Állat- és mérési adatok exportálása a VitalControl eszközről több CSV fájlba
categories: [Adatok exportálása]
translationKey: farmPC
---
Járjon el az alábbiak szerint, hogy adatokat exportáljon a VitalControl eszközről a számítógépének tömegtároló eszközére:

### Csatlakoztassa a VitalControl-t a számítógéphez

1. Csatlakoztassa a VitalControl eszközt a számítógépéhez vagy laptopjához a mellékelt USB kábellel.

   ![Csatlakoztassa a VitalControl-t a számítógéphez vagy laptophoz](/images/synchronisation/connect-to-pc.svg "Csatlakoztassa a VitalControl-t a számítógéphez")

1. Győződjön meg róla, hogy a VitalControl eszköz be van kapcsolva.

### Végezze el az adatok exportálását

1. Nyomja meg a Windows gombot a Start menü megnyitásához

1. *Csak Windows 11 esetén*: Kattintson az `Összes alkalmazás` gombra

1. A telepített alkalmazások listájában görgessen le az `U` betűig. Itt meg kell találnia az `Urban VitalControl` menüpontot. Szükség esetén bontsa ki ezt a bejegyzést, hogy az összes almenüpont megjelenjen.

   {{% alert title="Figyelem" %}}
Ha nem találja az `Urban VitalControl` bejegyzést az alkalmazások listájában, előfordulhat, hogy először telepítenie kell a `VCSynchronizer` szoftvert a számítógépére.
   {{% /alert %}}

1. Kattintson az `Adatok exportálása (CSV)` menüpontra.

   ![Windows Start menü, Urban VitalControl (VCSynchronizer) menüpont](../vcsynchronizer/images/data-export/data-export.png "Windows start menü, VitalControl")

1. Az exportálási folyamat elindul. Miután az adatok exportálása befejeződött, egy Explorer ablak nyílik meg, amely megjeleníti a helyi adatkönyvtárat a négy újonnan létrehozott [export fájllal](../../data-export/export-files/).

   ![Helyi adatkönyvtár export fájlokkal](../../data-export/images/export-files.png "Export fájlok, helyileg tárolva")

   {{% alert title="Megjegyzés" %}}
  Mindegyik [export fájlt](../../data-export/export-files/) megnyithatja egy tetszőleges táblázatkezelő programban (például [Microsoft Excel](https://products.office.com/excel) vagy [OpenOffice Calc](https://www.openoffice.org/)), és ott részletes elemzést végezhet az adatokon. Példaként az `animals.csv` táblázat nézete látható egy táblázatkezelő programban:


  ![Exportált állatadatok táblázata táblázatkezelő szoftverben megnyitva](../../data-export/images/animals.png "Táblázatkezelő szoftver állatadatokkal")
   {{% /alert %}}
