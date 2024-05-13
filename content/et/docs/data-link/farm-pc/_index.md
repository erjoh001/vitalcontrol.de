---
title: Loomade ja mõõtmisandmete eksport farmihalduse arvutisse
linkTitle: Andmete eksport (PC)
date: 2023-07-19
weight: 15
description: >
 Loomade andmete ja mõõtmisväärtuste eksportimine VitalControl seadmest mitmesse CVS-faili
categories: [Andmete eksport]
translationKey: farmPC
---
Järgige järgmisi samme, et eksportida andmeid VitalControl seadmest massmäluseadmesse arvutis:

### Ühendage VitalControl arvutiga

1. Ühendage VitalControl seade arvuti või sülearvutiga kaasasoleva USB-kaabli kaudu.

   ![Ühendage VitalControl arvuti või sülearvutiga](/images/synchronisation/connect-to-pc.svg "Ühendage VitalControl arvutiga")

1. Veenduge, et teie VitalControl seade oleks sisse lülitatud.

### Viige läbi andmete eksport

1. Vajutage Windowsi klahvi, et avada Start-menüü

1. *Ainult Windows 11*: Klõpsake nuppu `Kõik rakendused`

1. Kerige oma installitud rakenduste loendis alla tähe `U` juurde. Seal peaks olema menüüelement `Urban VitalControl`. Vajadusel laiendage seda kirjet, et kõik alammenüü kirjed kuvataks.

   {{% alert title="Tähelepanu" %}}
Kui te ei leia oma rakenduste loendist kirjet `Urban VitalControl`, peate võib-olla esmalt [installima](../vcsynchronizer/installation/) tarkvara `VCSynchronizer` oma arvutisse.
   {{% /alert %}}

1. Klõpsake menüüelemendil `Andmete eksport (CVS)`.

   ![Windowsi Start-menüü, menüüelement Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windowsi start-menüü, VitalControl")

1. Eksportimisprotsess algab. Kui andmete eksport on lõppenud, avaneb Exploreri aken, mis kuvab kohaliku andmekataloogi nelja äsja loodud [ekspordifailiga](../../data-export/export-files/).

   ![Kohalik andmekataloog ekspordifailidega](../../data-export/images/export-files.png "Ekspordifailid, kohalikult salvestatud")

   {{% alert title="Märkus" %}}
  Iga nelja [ekspordifaili](../../data-export/export-files/) saate avada oma valitud tabelarvutusprogrammis (näiteks [Microsoft Excel](https://products.office.com/excel) või [OpenOffice Calc](https://www.openoffice.org/)) ja seal andmeid põhjalikumalt analüüsida. Näiteks on allpool näidatud tabeli `animals.csv` vaade tabelarvutusprogrammis:

![Eksporditud loomade andmetabel, avatud tabelarvutustarkvaras](../../data-export/images/animals.png "Tabelarvutustarkvara loomaandmetega")
{{% /alert %}}
