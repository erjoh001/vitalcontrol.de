---
title: "Setup of Technology VitalControl:"
linkTitle: Setup
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Define the synchronisation parameters for data exchange between the software *Herde* and the VitalControl device.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Prior to the first [data exchange](../data-exchange/), the technology coupling to the VitalControl device must be created and set up once.

{{% alert title="Attention" %}}
Before setting up the technology coupling, check whether the 'VCSynchronizer' software is installed on your PC; this software is mandatory for data exchange.  To do so, open the Windows Start menu and search the in list of your applications in for an entry named 'Urban VitalControl' there. If you can't find such an entry, [install](../../vcsynchronizer/installation/) the `VCSynchronizer` software on your PC.
{{% /alert %}}

To set up the technology, proceed as follows:

## Create new parameter set for data exchange with VitalControl device {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Within the software `Herde`, open the `Settings` window. Depending on the configuration of your user interface, you can open this window via the menu item `Organization` in the main menu (top level item _Settings_), in the sidebar menu or in your customized toolbox (horizontal or vertical).

   ![Software Herde: invocation of settings menu](../screenshots/settings.png "Herde: invoke Settings")

1. A pop-up window `Settings` opens, in whose left sidebar numerous setting categories are listed. Open the category `Service` <span style="font-size: 140%">➊</span> and select the subcategory `Technology` <span style="font-size: 140%">➋</span>.

1. In the header of the right-hand main area, a dropdown now appears in which all defined technology parameter sets are listed. The number of set up technologies is shown to the right. Click on the button ![Software Herde: Create new technology parameter set](/icons/new.png "Herde: Create Technology Coupling") `Create new technology parameter set` <span style="font-size: 140%">➌</span>.

   ![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Another pop-up window opens. Enter `VitalControl` as **Name of the connection** and `Urban VitalControl (Gen 2)` as **Type of Technology** and then click the `Accept` button.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   The parameter set for technology `VitalControl` is now created and must be configured in the next steps.

## Configuration: Basic settings {#configuration-basic-settings}

Initially, the tab `Basic settings` is selected in the screen displayed, as shown in the figure below. Make adjustments there in the categories `External program` <span style="font-size: 140%">➊</span>, `Animal data` <span style="font-size: 140%">➋</span>, `Locations` <span style="font-size: 140%">➌</span> and `Leaving` <span style="font-size: 140%">➍</span> according to your farm-specific conditions.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Category `External program` <span style="font-size: 140%">➊</span> {#category-external-program-}

In order to perform data exchange between VitalControl and Herde Plus, basic software [VitalControl Synchronizer](../../vcsynchronizer) is needed as external helper program. For the correct function of this program, some adjustments have to be made in the category `External program` <span style="font-size: 140%">➊</span>.

- **Device name for data exchange**:  
  By default this field is empty. However, it is recommended to enter the name of your computer here. To do so, press the icon ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Arrow down` at the right end of the drop-down field. Your computer name will now be determined and displayed for selection inside the drop down list. Once the field is filled with your computer name and this setting is stored, data exchange can only be triggered from your computer from now on.

- **Execute in path**:
  Please enter `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` into this input field. This is the absolute path to the program `VitalControl Synchronizer` (or more specifically to the file `vcsynchronizer.exe`). If the target directory for this program has been changed during the [installation of the VCSynchronizer](../../vcsynchronizer/installation), please enter the selected target directory here.

- **Program HerdePlus 🡒 Technology**:  
  This input field needs to be filled with the value `vc_imp.bat`. The correspondingly named batch file specifies the sequence of operations during data import.

- **Technology 🡒  Program HerdePlus**:  
  This input field needs to be filled with the value `vc_exp.bat`. The correspondingly named batch file specifies the sequence of operations during data export.

### Category `Animal Data` <span style="font-size: 140%">➋</span> {#category-animal-data-}

Further adjustments have to be made in the category 'Animal data' <span style="font-size: 140%">➋</span> in order to get data exchange fully functional.

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

### Category `Locations` <span style="font-size: 140%">➌</span> {#category-locations-}

Use this category to exclude animals at certain locations from data transfer to the device. To do so, remove the checkmark from the location(s) for which you **do not** want to transfer the animals housed there to the device.

### Category `Leaving` <span style="font-size: 140%">➍</span> {#category-leaving-}

Tick the 'Leaving in HERDEplus' option here. This way you specify that animals that left the herd are also deleted from VitalControl device during synchronisation.
Also tick the 'Does not exist in stock' option. This way you specify that animals on the VitalControl that are not known to `Herde` software are deleted from the VitalControl during synchronisation.

## Configuration: Technology-specific settings {#configuration-technology-specific-settings}

Next, click on the `Technology-specific settings` tab to determine the scope of the data exchange. It is recommended to check all check boxes listed there except for the checkbox `Save import file after processing`. The latter checkbox is meant for diagnostic purposes and should be selected only if demanded by service personnel.

- **Maximum age for transfer**:  
  If `0` is entered here as the value, **all animals** will be transferred to the VitalControl device, regardless of their age. A value greater than `0` defines the maximum age (in days) for the animals to be transferred. If, for example, **only calves** are to be transferred to the device, a value of 90 days (= 3 months) must be entered here as the maximum age.

   ![Herde Software: Configuration Data exchange](../screenshots/technology-specific-settings.png "Data exchange: specific settings").

## Save data exchange settings {#save-data-exchange-settings}

Press the `Save (F2)` key after you have configured all configuration parameters appropriately. The parameter set for data exchange to VitalControl device is now saved and ready for use.  
Perform a [data exchange](../data-exchange/) now to check whether the stipulated settings are valid so that you successfully can exchange data to and from VitalControl device.
