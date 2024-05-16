---
title: Export dat o zvířatech a měření do počítače pro správu farmy
linkTitle: Export dat (PC)
date: 2023-07-19
weight: 15
description: >
 Export dat o zvířatech a hodnot měření z zařízení VitalControl do několika CVS souborů
categories: [Export dat]
translationKey: farmPC
---
Postupujte následovně pro export dat z VitalControl do paměťového zařízení vašeho PC:

### Připojte VitalControl k PC

1. Připojte zařízení VitalControl k vašemu počítači nebo notebooku pomocí dodaného USB kabelu.

   ![Připojte VitalControl k PC nebo notebooku](/images/synchronisation/connect-to-pc.svg "Připojte VitalControl k PC")

1. Ujistěte se, že vaše zařízení VitalControl je zapnuté.

### Proveďte export dat

1. Stiskněte klávesu Windows pro otevření nabídky Start

1. *Pouze Windows 11*: Klikněte na tlačítko `Všechny aplikace`

1. V seznamu nainstalovaných aplikací sjeďte dolů k písmenu `U`. Tam byste měli najít položku menu `Urban VitalControl`. Pokud je to nutné, rozbalte tuto položku, aby se zobrazily všechny podpoložky.

   {{% alert title="Pozor" %}}
Pokud nemůžete najít položku `Urban VitalControl` ve vašem seznamu aplikací, možná budete muset nejprve [nainstalovat](../vcsynchronizer/installation/) software `VCSynchronizer` na váš PC.
   {{% /alert %}}

1. Klikněte na položku menu `Export dat (CVS)`.

   ![Nabídka Start systému Windows, položka menu pro Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Nabídka Start systému Windows, VitalControl")

1. Proces exportu je zahájen. Jakmile je export dat dokončen, otevře se okno Průzkumníka, které zobrazí místní datový adresář se čtyřmi nově vytvořenými [exportními soubory](../../data-export/export-files/).

   ![Místní datový adresář s exportními soubory](../../data-export/images/export-files.png "Exportní soubory, místně uložené")

   {{% alert title="Poznámka" %}}
  Každý z těchto čtyř [exportních souborů](../../data-export/export-files/) můžete otevřít v tabulkovém programu dle vašeho výběru (například [Microsoft Excel](https://products.office.com/excel) nebo [OpenOffice Calc](https://www.openoffice.org/)) a provést pokročilou analýzu dat tam. Jako příklad je níže uveden pohled na tabulku `animals.csv` v tabulkovém programu:


  ![Exportovaná tabulka dat o zvířatech otevřená v tabulkovém softwaru](../../data-export/images/animals.png "Tabulkový software s daty o zvířatech")
   {{% /alert %}}
