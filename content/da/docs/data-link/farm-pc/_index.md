---
title: Eksport af dyre- og måledata til landbrugsstyrings-PC
linkTitle: Dataeksport (PC)
date: 2023-07-19
weight: 15
description: >
 Eksporter dyredata og måleværdier fra VitalControl-enheden til flere CVS-filer
categories: [Dataeksport]
translationKey: farmPC
---
Følg nedenstående trin for at eksportere data fra VitalControl til en masselagringsenhed på din PC:

### Tilslut VitalControl til PC {#connect-vitalcontrol-to-pc}

1. Tilslut VitalControl-enheden til din computer eller laptop via det medfølgende USB-kabel.

   ![Tilslut VitalControl til PC eller laptop](/images/synchronisation/connect-to-pc.svg "Tilslut VitalControl til PC")

1. Sørg for, at din VitalControl-enhed er tændt.

### Udfør dataeksport {#perform-data-export}

1. Tryk på Windows-tasten for at åbne Start-menuen

1. *Kun Windows 11*: Klik på knappen `Alle Apps`

1. I listen over dine installerede applikationer, rul ned til bogstavet `U`. Der bør du finde en menupost `Urban VitalControl`. Udvid denne post om nødvendigt, så alle undermenuposter vises.

   {{% alert title="Opmærksomhed" %}}
Hvis du ikke kan finde posten `Urban VitalControl` i din appliste, skal du muligvis [installere](../vcsynchronizer/installation/) softwaren `VCSynchronizer` på din PC først.
   {{% /alert %}}

1. Klik på menupunktet `Dataeksport (CVS)`.

   ![Windows Start-menu, menupost for Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows startmenu, VitalControl")

1. Eksportprocessen starter. Når dataeksporten er færdig, åbnes et Explorer-vindue, der viser den lokale datamappe med de fire nyoprettede [eksportfiler](../../data-export/export-files/).

   ![Lokal datamappe med eksportfiler](../../data-export/images/export-files.png "Eksportfiler, lokalt gemt")

   {{% alert title="Bemærk" %}}
  Du kan åbne hver af disse fire [eksportfiler](../../data-export/export-files/) i et regnearksprogram efter eget valg (såsom [Microsoft Excel](https://products.office.com/excel) eller [OpenOffice Calc](https://www.openoffice.org/)) og udføre avanceret analyse af dataene der. Som et eksempel vises nedenfor visningen af tabellen `animals.csv` i et regnearksprogram:


  ![Eksporteret dyredatatabel åbnet i et regnearksprogram](../../data-export/images/animals.png "Regnearksprogram med dyredata")
   {{% /alert %}}
