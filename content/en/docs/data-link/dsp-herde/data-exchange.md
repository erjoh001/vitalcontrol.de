---
title: Data exchange between VitalControl and herd management software Herde
linkTitle: Data exchange
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synchronize the animals stored on VitalControl device with animals managed by *Herde* software and transfer measured values recorded with VitalControl device to *Herde* software.
weight: 20
categories: [Data exchange, DSP Herde]
translationKey: DSPherde/data-exchange
---
Follow the steps below to synchronize data between the software `Herde` and VitalControl device:

### Connect VitalControl to PC

1. Connect the VitalControl device to your computer or laptop via the supplied USB cable.

   ![Connect VitalControl to PC or laptop](/images/synchronisation/connect-to-pc.svg "Connect VitalControl to PC")

1. Make sure your VitalControl device is turned on.

### Perform data exchange

1. Within the software `Herde`, perform a full data exchange. Depending on the configuration of your user interface, you can invoke this exchange via the menu item `Full data exchange` in the main menu (top level item _Technology_), in the sidebar menu or in your customized toolbox (horizontal or vertical).

   ![Software Herde: Triggering a full data exchange](../screenshots/data-exchange.png "Herde: Triggering data exchange")

1. A pop-up opens, listing the stipulated technology couplings in the sidebar to the left. Click on the button labeled `VitalControl` in order to start the data exchange:

   ![Software Herde, Starting data exchange](../screenshots/start-transfer.png "Herde: Start data exchange")

1. On first time data exchange a warning appears, indicating that there are no animals registered on the VitalControl device yet. Acknowledge this notice with `Yes`. Data exchange is started then.

   ![Software Herde, data exchange: warning](../screenshots/warning.png "Data exchange: warning")

1. Data exchange is a two-step process: In the first step ➊ the animal data are transferred from software `Herde` to the VitalControl. In the second step ➋, measurement data collected with the VitalControl are transferred into software `Herde`. The number of imported data sets (animals, calvings, alerts and weights) is listed in the pop-up:

   ![Data exchange with software Herde: Course of actions](../screenshots/data-transfer.png "Data exchange: Course of actions")

1. Successful completion of data exchange is signalled via a pop-up with a success message.

   ![Software Herde: Success message data exchange](../screenshots/success-message.png "Herde: Success message data exchange")

    {{% alert title="Attention" %}}
If many animals are registered on the VitalControl device, data exchange may take some time. The progress of the data transfer can be seen on the display of the device.

![VitalControl, data exchange: progress bar](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: progress bar data exchange")
    {{% /alert %}}
