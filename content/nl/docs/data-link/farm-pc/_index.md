---
title: Export of animal and measurement data to the farm management PC
linkTitle: Data export (PC)
date: 2023-07-19
weight: 15
description: >
 Export animal data and measurement values from VitalControl device into several CVS files
categories: [Data export]
---
Proceed as follows to export data from VitalControl to a mass storage device of your PC:

### Connect VitalControl to PC

1. Connect the VitalControl device to your computer or laptop via the supplied USB cable.

   ![Connect VitalControl to PC or laptop](/images/synchronisation/connect-to-pc.svg "Connect VitalControl to PC")

1. Make sure your VitalControl device is turned on.

### Perform data export

1. Press the Windows key to open the Start menu

1. *Windows 11 only*: Click the `All Apps` button

1. In the list of your installed applications, scroll down to the letter `U`. There you should find a menu entry `Urban VitalControl`. If necessary, expand this entry so that all submenu entries are displayed.

   {{% alert title="Attention" %}}
If you cannot find the entry `Urban VitalControl` in your applications list, you may have to [install](../vcsynchronizer/installation/) the software `VCSynchronizer` on your PC first.
   {{% /alert %}}

1. Click on the menu item `Data export (CVS)`.

   ![Windows Start menu, menu entry for Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows start menu, VitalControl")

1. The export process is started. Once data export is finished, an Explorer window opens which displays the local data directory with the four newly created [export files](../../data-export/export-files/).

   ![Local data directory with export files](../../data-export/images/export-files.png "Export files, locally stored")

   {{% alert title="Note" %}}
  You can open each of these four [export files](../../data-export/export-files/) in a spreadsheet program of your choice (such as [Microsoft Excel](https://products.office.com/excel) or [OpenOffice Calc](https://www.openoffice.org/)) and perform advanced analysis of the data there. As an example, the view of the table `animals.csv` in a spreadsheet program is shown below:

  ![Exported animal data table opened in a spreadsheet software](../../data-export/images/animals.png "Spreadsheet software with animal data")
   {{% /alert %}}
