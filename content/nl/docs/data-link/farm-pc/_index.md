---
title: Export van dier- en meetgegevens naar de PC van het boerderijbeheer
linkTitle: Gegevensexport (PC)
date: 2023-07-19
weight: 15
description: >
 Exporteer diergegevens en meetwaarden vanuit het VitalControl-apparaat naar verschillende CVS-bestanden
categories: [Data export]
---
Ga als volgt te werk om gegevens van VitalControl naar een opslagapparaat van uw PC te exporteren:

### Verbind VitalControl met PC

1. Verbind het VitalControl-apparaat met uw computer of laptop via de meegeleverde USB-kabel.

   ![Verbind VitalControl met PC of laptop](/images/synchronisation/connect-to-pc.svg "Verbind VitalControl met PC")

1. Zorg ervoor dat uw VitalControl-apparaat is ingeschakeld.

### Voer gegevensexport uit

1. Druk op de Windows-toets om het Startmenu te openen

1. *Alleen Windows 11*: Klik op de knop `Alle apps`

1. Scroll in de lijst van uw geïnstalleerde applicaties naar de letter `U`. Daar zou u een menu-item `Urban VitalControl` moeten vinden. Indien nodig, vouw dit item uit zodat alle submenu-items worden weergegeven.

   {{% alert title="Let op" %}}
Als u het item `Urban VitalControl` niet kunt vinden in uw applicatielijst, moet u mogelijk eerst de software `VCSynchronizer` op uw PC [installeren](../vcsynchronizer/installation/).
   {{% /alert %}}

1. Klik op het menu-item `Gegevensexport (CVS)`.

   ![Windows Startmenu, menu-item voor Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows startmenu, VitalControl")

1. Het exportproces wordt gestart. Zodra de gegevensexport is voltooid, opent een Verkenner-venster dat de lokale gegevensdirectory toont met de vier nieuw aangemaakte [exportbestanden](../../data-export/export-files/).

   ![Lokale gegevensdirectory met exportbestanden](../../data-export/images/export-files.png "Exportbestanden, lokaal opgeslagen")

   {{% alert title="Opmerking" %}}
  U kunt elk van deze vier [exportbestanden](../../data-export/export-files/) openen in een spreadsheetprogramma naar keuze (zoals [Microsoft Excel](https://products.office.com/excel) of [OpenOffice Calc](https://www.openoffice.org/)) en daar geavanceerde data-analyses uitvoeren. Als voorbeeld wordt hieronder de weergave van de tabel `animals.csv` in een spreadsheetprogramma getoond:

![Geëxporteerde dierendata tabel geopend in spreadsheetsoftware](../../data-export/images/animals.png "Spreadsheetsoftware met dierendata")
{{% /alert %}}
