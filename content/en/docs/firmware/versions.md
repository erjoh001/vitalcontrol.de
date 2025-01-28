---
title: "Latest firmware versions"
linkTitle: "Latest versions"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 List of the current firmware versions for the VitalControl device.
---

## Determine firmware versions installed on your device {#determine-firmware-versions-installed-on-your-device}

1. Open the menu item <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` in the main screen of your VitalControl device.

2. Invoke the submenu `{{<T "Info" >}}`, select the menu item `{{<T "Software" >}}` and confirm with `{{<T "Ok" >}}`. A pop-up window opens which lists the software versions currently installed on your device:

![VitalControl: determine firmware versions](../images/firmware-versions.png "Display firmware versions")

## Latest firmware versions: {#latest-firmware-versions}

The following table lists the current firmware versions:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Version**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Tip" %}}
If you miss newer features on your device or face stability problems, you are encouraged to [update](../update/) the firmware on your device to latest released version.
{{% /alert %}}
