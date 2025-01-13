---
title: "Τελευταίες εκδόσεις firmware"
linkTitle: "Τελευταίες εκδόσεις"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Λίστα των τρεχουσών εκδόσεων firmware για τη συσκευή VitalControl.
---

## Προσδιορίστε τις εγκατεστημένες εκδόσεις firmware στη συσκευή σας {#determine-firmware-versions-installed-on-your-device}

1. Ανοίξτε το στοιχείο μενού <img src="/icons/device.svg" width="25" align="bottom" alt="Συσκευή" /> `{{<T "Device" >}}` στην κύρια οθόνη της συσκευής σας VitalControl.

2. Καλέστε το υπομενού `{{<T "Info" >}}`, επιλέξτε το στοιχείο μενού `{{<T "Software" >}}` και επιβεβαιώστε με `{{<T "Ok" >}}`. Ένα αναδυόμενο παράθυρο ανοίγει το οποίο απαριθμεί τις εκδόσεις λογισμικού που είναι εγκατεστημένες επί του παρόντος στη συσκευή σας:

![VitalControl: προσδιορισμός εκδόσεων firmware](../images/firmware-versions.png "Εμφάνιση εκδόσεων firmware")

## Τελευταίες εκδόσεις firmware: {#latest-firmware-versions}

Ο παρακάτω πίνακας απαριθμεί τις τρέχουσες εκδόσεις firmware:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Έκδοση**      | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Ημερομηνία**     | {{% version/firmware component="gui-date" %}} | {{% version/firmware component="middelware-date" %}} | {{% version/firmware component="bootloader-date" %}} |
| **Κωδικός commit** | {{% version/firmware component="gui-commitHash" %}} | {{% version/firmware component="middelware-commitHash" %}} |  {{% version/firmware component="bootloader-commitHash" %}} |
| **Αριθμός commit**   | {{% version/firmware component="gui-commitNo" %}} | {{% version/firmware component="middelware-commitNo" %}} | {{% version/firmware component="bootloader-commitNo" %}}|

{{% alert title="Συμβουλή" %}}
Εάν σας λείπουν νεότερες δυνατότητες στη συσκευή σας ή αντιμετωπίζετε προβλήματα σταθερότητας, σας συνιστούμε να [ενημερώσετε](../update/) το firmware στη συσκευή σας στην τελευταία κυκλοφορημένη έκδοση.
{{% /alert %}}
