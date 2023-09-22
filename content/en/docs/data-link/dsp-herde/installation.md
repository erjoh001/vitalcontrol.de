---
title: "Setup of Technology: definition of synchronisation parameters"
linkTitle: Setup
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Set up the technology coupling once for data synchronisation between the software *Herde* and the VitalControl device.
weight: 10
categories: [DSP Herde]
---
Vor dem erstmaligen [Datenaustausch](../data-exchange/) muss einmalig die Installation der Technikkopplung zum VitalControl-Gerät eingerichtet werden.

{{% alert title="Achtung" %}}
Vor der Einrichtung der Technikkopplung muss zwingend die Software `VCSynchronizer` auf ihrem [PC installieren](../../vcsynchronizer/installation/).<br>Wenn Sie in der Liste ihrer Anwendungen im Windows Startmenü den Eintrag `Urban VitalControl` finden können, ist die Software bereits installiert.
{{% /alert %}}

Zur Einrichtung der Kopplung selbst gegen Sie wie folgt vor:

## Create new parameter set for data exchange with VitalControl device

1. Within the software `Herde`, open the `Settings` window. Depending on the configuration of your user interface, you can open this window via the menu item `Organization` in the main menu (top level item _Settings_), in the sidebar menu or in your customized toolbox (horizontal oder vertical).

   ![Herde Software: Aufruf des Einstellungsmenüs](../screenshots/settings.png "Herde: Aufruf Einstellungen")

1. Es öffnet sich ein Pop-up betitelt `Einstellungen` ➊, in dessen linker Seitenleiste zahlreiche Einstellungskategorien aufgelistet sind. Öffnen Sie die Kategorie `Service` ➋, und wählen sie die Unterkategorie `Technik` aus:

1. In der Kopfzeile des rechten Hauptbereichs erscheint jetzt ein Dropdown im welchem die aktuell bereits eingerichteten Technikkopplungen aufgeführt sind. Rechts daneben wird die Anzahl der vorhandenen Kopplungen angegeben. Klicken Sie auf die Schaltfläche  ![Herde Software: Neue Technikkopplung anlegen](/icons/new.png "Herde: Technikkopplung anlegen") `Neue Kopplung anlegen` ➌.

   ![Herde Software: Einstellungen Technik aufrufen](../screenshots/settings-technology.png "Herde: Settings Technology")

1. Es öffnet sich ein weiteres Popup-Fenster. Geben Sie dort als **Name der Kopplung** `VitalControl` und als **Techniktyp** `Urban VitalControl (Gen 2)`an und klicken Sie anschließend die Schaltfläche `Übernehmen`.

   ![Herde Software: Neue Technikkopplung VitalControl](../screenshots/new-technology.png "New technology VitalControl").
   
   Die Technikkopplung ist jetzt angelegt und muss in den nächsten Schritten konfiguriert werden.

## Configuration: Basic settings

Initial ist im angezeigten Bildschirm der Reiter `Grundeinstellungen` ausgewählt, wie die untenstehende Abbildung zeigt. Nehmen Sie dort in den Kategorien `Externes Programm` ➊, `Tierdaten` ➊ und `Orte` ➌ Anpassungen gemäß ihren betriebsspezifischen Gegebenheiten vor.

   ![Herde Software: Konfiguration Technikkopplung](../screenshots/basic-settings.png "Technikkopplung: Basic settings").
   
### Category `External program` ➊

In order to perform data exchange between VitalControl and Herde Plus, basic software [VitalControl Synchronizer](../../vcsynchronizer) is needed as external helper program. For the correct function of this program, some adjustments have to be made in the category `External program` ➊.

- **Device name for data exchange**:  
  By default this field is empty. However, it is recommended to enter the name of your computer here. To do so, press the icon 'Arrow down' ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") at the right end of the drop-down field. Your computer name will now be determined and displayed for selection inside the drop down list. Once the field is filled with your computer name and this setting is stored, data exchange can only be triggered from your computer from now on.

- **Execute in path**:
  Please enter `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` into this input field. This is the absolute path to the program `VitalControl Synchronizer` respectively to the file `vcsynchronizer.exe`. If the target directory for this program has been changed during the [installation of the VCSynchronizer](../../vcsynchronizer/installation), please enter the selected target directory here.

- **Program HerdePlus 🡒 Technology**:  
  This input field needs to be filled with the value `vc_imp.bat`. The correspondingly named batch file specifies the sequence of operations during data import.

- **Technology 🡒  Program HerdePlus**:  
  This input field needs to be filled with the value `vc_exp.bat`. The correspondingly named batch file specifies the sequence of operations during data export.

### Category `Animal Data` ➊

Further adjustments have to be made in the category 'Animal data' ➋ in order to get data exchange fully functional.

- **Animal number**:  
  This setting determines which ID animals receive for display on VitalControl device:
  - If you have assigned short IDs (`Barn no.`, 2 to 6 digits) to your animals, you should select the value 'Barn number' here: the displayed ID of an animal on the VitalControl will then correspond to the barn number assigned to the animal.
  - If you do **not** have assigned short ID numbers to your animals - this is common in the fattening sector, for example - then you should select the value `Tag no. (5 digits)` here. The displayed ID of an animal on VitalControl device will then correspond to the last 5 digits of the ID printed on the yellow ear tag of the animal.
  
<br>

- **Transmitter no.**:  
  This setting determines the number expected for an animal during RFID scan:  
  - If you put a collar with a transponder on your animals or put an ear transponder on your animals -for example for identification at the automatic feeder-, you should select the value 'Transponder' here.
  - If your animals or calves carry electronic ear tags encoded with the official national 15-digit identification number of your animal which will serve for the identification of the animal throughout its whole life, you should select the value 'Tag no. (15 digits)` here.

<br>

- **Minimum age for transfer**:  
  If `0` is entered as value for this input field, **all animals** will be transferred to the VitalControl device, regardless of their age. A value greater than `0` defines the minimum age (in days) for the animals to be transferred. For example, if **only cows** are to be transferred to the device, a value of 600 days (= 20 months) must be entered here as the minimum age.

### Category `Locations` ➌

Use this category to exclude animals at certain locations from data transfer to the device. To do so, remove the checkmark from the location(s) for which you **do not** want to transfer the animals housed there to the device.

## Configuration: Technology-specific settings

Next, click on the `Technology-specific settings` tab to determine the scope of the data exchange. It is recommended to check all check boxes listed there except for the checkbox `Save import file after processing`. The latter checkbox is meant for diagnostic purposes and should be selected only if demanded by service personnel.

- **Maximum age for transfer**:  
  If `0` is entered here as the value, **all animals** will be transferred to the VitalControl device, regardless of their age. A value greater than `0` defines the maximum age (in days) for the animals to be transferred. If, for example, **only calves** are to be transferred to the device, a value of 90 days (= 3 months) must be entered here as the maximum age.

   ![Herde Software: Configuration Data exchange](../screenshots/technology-specific-settings.png "Data exchange: specific settings").

## Save data exchange settings

Press the `Save (F2)` key after you have configured all configuration parameters appropriately. The parameter set for data exchange to VitalControl device is now saved and ready for use.  
Perform a [data exchange](../data-exchange/) now to check whether the stipulated settings are valid so that you successfully can exchange data to and from VitalControl device.
