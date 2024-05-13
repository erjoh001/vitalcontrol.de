---
title: "Ενημέρωση firmware της συσκευής σας"
linkTitle: Ενημέρωση
weight: 4
description: >
  Εκτελώντας μια ενημέρωση firmware, το firmware της συσκευής σας VitalControl μπορεί να ενημερωθεί στις τελευταίες διαθέσιμες εκδόσεις.
---
Πρώτα, βεβαιωθείτε ότι υπάρχει διαθέσιμη μια [νεότερη έκδοση firmware](../versions/) για τη συσκευή σας και, εάν χρειάζεται, ενημερώστε το firmware της συσκευής σας σύμφωνα με τις ακόλουθες οδηγίες.

## Απαραίτητο αξεσουάρ

Για να εγκαταστήσετε την ενημέρωση στη συσκευή σας, χρειάζεστε ένα διπλό USB flash drive (2-σε-1 USB stick) τύπου C/USB 3.0 με συνδετήρα USB C και USB A. Ένα τέτοιο διπλό USB flash drive παραδίδεται μαζί με τη συσκευή σας. Μπορείτε επίσης να αγοράσετε ένα τέτοιο USB flash drive από διάφορους προμηθευτές.

![Διπλό USB flash drive (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Διπλό USB flash drive")

## Προετοιμασία: κατεβάστε το τελευταίο firmware

1. Εισάγετε το USB flash drive σας στη θύρα USB του υπολογιστή σας. Στη συνέχεια, δημιουργήστε έναν νέο κατάλογο με την ονομασία 'update' στον κύριο κατάλογο του flash drive σας.

    ![Windows Explorer: USB flash drive με κατάλογο 'update'](../images/create-folder-update.png "USB flash drive: κατάλογος 'update'")

1. Κατεβάστε το [αρχείο firmware](/download/firmware.vcu) (όνομα αρχείου: `firmware.vcu`) και αποθηκεύστε το στον προηγουμένως δημιουργημένο κατάλογο `update` του USB flash drive σας. Το αρχείο ενημέρωσης απαιτεί περίπου 2.5 MB χώρο αποθήκευσης στο flash drive.

    ![Windows Explorer: flash drive με αρχείο firmware 'firmware.vcu'](../images/save-firmware-file.png "Flash drive με αρχείο firmware")

1. Δημιουργήστε ένα [αντίγραφο ασφαλείας][] στη συσκευή σας.

    {{% alert title="Πληροφορίες" %}}
Το αντίγραφο ασφαλείας είναι μια συνιστώμενη προληπτική μέτρηση. Όλα τα υπάρχοντα δεδομένα ζώων και συσκευών θα διατηρηθούν κατά την ενημέρωση του firmware της συσκευής VitalControl.
    {{% /alert %}}

[αντίγραφο ασφαλείας]: {{< relref "../backup/backup/" >}}

## Εκτελέστε την ενημέρωση firmware

1. Ανοίξτε το στοιχείο μενού `Συσκευή` στην κύρια οθόνη της συσκευής σας VitalControl.

1. Καλέστε το υπομενού `Υπηρεσία`, επιλέξτε το στοιχείο μενού `Ενημέρωση Firmware` και επιβεβαιώστε με `OK`. Τώρα θα σας ζητηθεί να εισάγετε το USB flash drive που έχετε ήδη προετοιμάσει:

![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. Εισάγετε το USB flash drive (C plug) στην υποδοχή στο κάτω μέρος της συσκευής και επιβεβαιώστε με `OK`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    Η συσκευή εκτελεί αυτόματα την ενημέρωση. Κατά τη διάρκεια της ενημέρωσης, η οθόνη σας ενημερώνει για την πρόοδο της ενημέρωσης. Μετά την ολοκλήρωση της ενημέρωσης, η συσκευή επανεκκινεί αυτόματα και εμφανίζει ένα μήνυμα επιτυχίας μετά την επανεκκίνηση:

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   Το νέο firmware είναι τώρα εγκατεστημένο στη συσκευή σας.
