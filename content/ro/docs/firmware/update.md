---
title: "Actualizarea firmware-ului dispozitivului dvs."
linkTitle: Update
weight: 4
description: >
  Prin efectuarea unei actualizări de firmware, firmware-ul dispozitivului dvs. VitalControl poate fi actualizat la cele mai recente versiuni disponibile.
---
Mai întâi, asigurați-vă că este disponibilă o [versiune mai nouă de firmware](../versions/) pentru dispozitivul dvs. și, dacă este necesar, actualizați firmware-ul dispozitivului dvs. conform instrucțiunilor de mai jos.

## Accesoriu necesar {#required-accessory}

Pentru a instala actualizarea pe dispozitivul dvs., aveți nevoie de un stick USB dual (2-în-1 USB stick) Type-C/USB 3.0 cu un conector USB C și un conector USB A. Un astfel de stick USB dual este livrat împreună cu dispozitivul dvs. De asemenea, puteți achiziționa un astfel de stick USB de la diferiți furnizori.

![Stick USB dual (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Stick USB dual")

## Pregătire: descărcați cel mai recent firmware {#preparation-download-latest-firmware}

1. Introduceți stick-ul USB în conectorul USB al computerului dvs. Apoi creați un nou director numit 'update' în directorul rădăcină al stick-ului USB.

    ![Windows Explorer: stick USB cu directorul 'update'](../images/create-folder-update.png "Stick USB: directorul 'update'")

1. Descărcați [fișierul firmware](/download/firmware.vcu) (nume fișier: `firmware.vcu`) și stocați-l în directorul `update` creat anterior pe stick-ul USB. Fișierul de actualizare necesită aproximativ 2.5 MB de spațiu de stocare pe stick-ul USB.

    ![Windows Explorer: stick USB cu fișierul firmware 'firmware.vcu'](../images/save-firmware-file.png "Stick USB cu fișierul firmware")

1. Creați un [backup de date][] pe dispozitivul dvs.

    {{% alert title="Info" %}}
Backup-ul de date este o măsură de precauție recomandată. Toate datele existente despre animale și dispozitiv vor fi păstrate la actualizarea firmware-ului dispozitivului VitalControl.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Efectuați actualizarea firmware-ului {#perform-firmware-update}

1. Deschideți elementul de meniu `{{<T "Device" >}}` în ecranul principal al dispozitivului dvs. VitalControl.


1. Invocați submeniul `{{<T "Service" >}}`, selectați elementul de meniu `{{<T "FirmwareUpdate" >}}` și confirmați cu `{{<T "Ok" >}}`. Acum vi se cere să introduceți unitatea flash USB pe care ați pregătit-o deja:

    ![VitalControl: cale meniu actualizare firmware](../images/firmware-update.png "Actualizare firmware")

1. Introduceți unitatea flash USB (conector C) în conectorul de la baza dispozitivului și confirmați cu `{{<T "Ok" >}}`.

    ![VitalControl: Introduceți unitatea flash USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Introduceți unitatea flash USB")

    Dispozitivul efectuează actualizarea automat. În timpul actualizării, afișajul vă informează despre progresul actualizării. După ce actualizarea este completă, dispozitivul repornește automat și afișează un mesaj de succes după repornire:

   ![VitalControl: Mesaj de succes actualizare firmware](../images/update-success.png "Succes actualizare firmware")

   Noua versiune de firmware este acum instalată pe dispozitivul dvs.

