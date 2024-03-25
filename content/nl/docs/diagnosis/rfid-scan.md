---
title: "RFID scan: range test and diagnosis of transponders"
linkTitle: RFID scan
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnosis, RFID Scan]
description: >
  Check the range of your RFID scanner or show the reading protocol and the numbers stored on unknown transponders.
translationKey: diagnosis/rfid-scan
weight: 20
---

Using the menu 'Range test' you can determine whether VitalControl device can read transponders you have at hand. Besides checking compatibility, you can also conveniently determine the transmission protocol used by these transponders and display the number stored on the transponder.

## Perform range test

1. Open the menu item &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Apparaat` in the main screen of your VitalControl device.

1. Invoke the submenu `Service`, select the menu item `Range test` and confirm with `OK`. An animated scan screen is displayed now.

    ![VitalControl: Menu path Range test RFID scanner](../images/rangetest.png "Range test RFID scanner")

1.  Slowly approach your transponder to the reading head of the VitalControl device. To achieve a good reading result, the transponder must be aligned horizontally to the reading head of the VitalControl device.

    ![ VitalControl: correctly approach transponder to RFID reading head](/images/diagnosis/transponderscan.svg "Correct transponder scan")

1. As soon as the RFID scanner detects the transponder, a vibration alarm is triggered and the background color of the transponder image displayed on the screen changes to green:

   ![VitalControl: Range test: Transponder detected](../images/transponder-detected.png "Transponder detected")

1. Move the transponder back and forth several times at the border of the reading field. This way, you can determine the reading range of the RFID scanner in combination with the transponders you are using.

## Transponder check

Performing the range test described above, you can obtain information on transponders from different origin, too:

### Official transponder ear tags

1. If you use transponder ear tags for your animals, on which the officially assigned 15-digit ear tag number of the animal is encoded, the following information is displayed on the screen once the transponder was read:

    - 15-digit ID official assigned to your animal from your national animal identification service.
    - Country in which the business is located
    - Country in which the business is located (German farms only)
    - Transmission protocol used (FDX or HDX)
    <br>

    ![VitalControl: check of transponder ear tag](../images/transponder-official.png "Info official transponder ear tag")

### Transponders from third-party vendors

1. If you use transponders from third-party suppliers, such as Urban, for the electronic identification of your animals, the following information will be displayed on the screen once the transponder was read:

    - ID encoded on transponder, number of digits varies depending on the manufacturer
    - Manufacturer of the transponder (if stored on the transponder)
    - Transmission protocol used (FDX or HDX)
    <br>

    ![VitalControl: check of transponder from manufacturer](../images/transponder-manufacturer.png "Info transponder from manufacturer")

