---
title: Eksport av dyre- og måledata til gårdsadministrasjons-PC
linkTitle: Dataeksport (PC)
date: 2023-07-19
weight: 15
description: >
 Eksporter dyredata og måleverdier fra VitalControl-enheten til flere CVS-filer
categories: [Dataeksport]
translationKey: farmPC
---
Følg disse trinnene for å eksportere data fra VitalControl til en masselagringsenhet på din PC:

### Koble VitalControl til PC {#connect-vitalcontrol-to-pc}

1. Koble VitalControl-enheten til datamaskinen eller laptopen din via den medfølgende USB-kabelen.

   ![Koble VitalControl til PC eller laptop](/images/synchronisation/connect-to-pc.svg "Koble VitalControl til PC")

1. Sørg for at VitalControl-enheten er slått på.

### Utfør dataeksport {#perform-data-export}

1. Trykk på Windows-tasten for å åpne Start-menyen

1. *Kun Windows 11*: Klikk på `Alle apper`-knappen

1. I listen over dine installerte applikasjoner, bla ned til bokstaven `U`. Der skal du finne en menyoppføring `Urban VitalControl`. Om nødvendig, utvid denne oppføringen slik at alle undermenyoppføringer vises.

   {{% alert title="Oppmerksomhet" %}}
Hvis du ikke finner oppføringen `Urban VitalControl` i applikasjonslisten din, må du kanskje [installere](../vcsynchronizer/installation/) programvaren `VCSynchronizer` på din PC først.
   {{% /alert %}}

1. Klikk på menyelementet `Dataeksport (CVS)`.

   ![Windows Start-meny, menyoppføring for Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows start-meny, VitalControl")

1. Eksportprosessen starter. Når dataeksporten er ferdig, åpnes et Utforsker-vindu som viser den lokale datamappen med de fire nyopprettede [eksportfilene](../../data-export/export-files/).

   ![Lokal datamappe med eksportfiler](../../data-export/images/export-files.png "Eksportfiler, lokalt lagret")

   {{% alert title="Merk" %}}
  Du kan åpne hver av disse fire [eksportfilene](../../data-export/export-files/) i et regnearkprogram etter eget valg (som [Microsoft Excel](https://products.office.com/excel) eller [OpenOffice Calc](https://www.openoffice.org/)) og utføre avansert analyse av dataene der. Som et eksempel vises visningen av tabellen `animals.csv` i et regnearkprogram nedenfor:


  ![Eksportert dyredatatabell åpnet i et regnearkprogram](../../data-export/images/animals.png "Regnearkprogram med dyredata")
   {{% /alert %}}
