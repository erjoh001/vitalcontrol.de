---
title: Export av djur- och mätdata till gårdsdatorn
linkTitle: Dataexport (PC)
date: 2023-07-19
weight: 15
description: >
 Exportera djurdata och mätvärden från VitalControl-enheten till flera CVS-filer
categories: [Data export]
translationKey: farmPC
---
Följ dessa steg för att exportera data från VitalControl till en masslagringsenhet på din PC:

### Anslut VitalControl till PC {#connect-vitalcontrol-to-pc}

1. Anslut VitalControl-enheten till din dator eller laptop via den medföljande USB-kabeln.

   ![Anslut VitalControl till PC eller laptop](/images/synchronisation/connect-to-pc.svg "Anslut VitalControl till PC")

1. Se till att din VitalControl-enhet är påslagen.

### Utför dataexport {#perform-data-export}

1. Tryck på Windows-tangenten för att öppna Start-menyn

1. *Endast Windows 11*: Klicka på knappen `Alla appar`

1. I listan över dina installerade applikationer, scrolla ner till bokstaven `U`. Där bör du hitta en menyinmatning `Urban VitalControl`. Om nödvändigt, expandera denna inmatning så att alla undermenyalternativ visas.

   {{% alert title="Uppmärksamhet" %}}
Om du inte kan hitta inmatningen `Urban VitalControl` i din applikationslista, kan det hända att du först måste [installera](../vcsynchronizer/installation/) programvaran `VCSynchronizer` på din PC.
   {{% /alert %}}

1. Klicka på menyalternativet `Dataexport (CVS)`.

   ![Windows Start-meny, menyalternativ för Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows start-meny, VitalControl")

1. Exportprocessen startas. När dataexporten är klar öppnas ett Utforskarfönster som visar den lokala datakatalogen med de fyra nyss skapade [exportfilerna](../../data-export/export-files/).

   ![Lokal datakatalog med exportfiler](../../data-export/images/export-files.png "Exportfiler, lokalt lagrade")

   {{% alert title="Notera" %}}
  Du kan öppna var och en av dessa fyra [exportfiler](../../data-export/export-files/) i ett kalkylprogram efter eget val (såsom [Microsoft Excel](https://products.office.com/excel) eller [OpenOffice Calc](https://www.openoffice.org/)) och utföra avancerad analys av data där. Som ett exempel visas nedan vyn av tabellen `animals.csv` i ett kalkylprogram:


  ![Exporterad djurdatatabell öppnad i ett kalkylprogram](../../data-export/images/animals.png "Kalkylprogram med djurdata")
   {{% /alert %}}
