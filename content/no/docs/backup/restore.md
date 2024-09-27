---
title: "Gjenopprette en databackup"
linkTitle: "Gjenopprett"
date: 2023-07-20
weight: 20
description: >
 Via en datagjenoppretting kan hele dataen til en VitalControl-enhet gjenopprettes på en annen enhet ved hjelp av en backupfil.
translationKey: restore
---
{{% usb-drive/en "For å gjenopprette en databackup til din VitalControl-enhet," %}}

På denne USB-minnepinnen må det finnes en katalog `backup`, som må inneholde en gyldig **databackupfil `backup.vcu`**.

![USB-minnepinne med backupfil VitalControl](../images/backup-file.png "USB-minnepinne med backupfil")

{{% alert title="Merk" %}}
Inne i katalogen `backup` på din USB-minnepinne kan du finne flere backupfiler med utvidelsen `.vcu`. VitalControl-enheten gjenoppretter alltid backupdata fra filen som heter `backup.vcu`, som alltid er den nyeste filen. Hvis du vil gjenopprette data fra en eldre backupfil (som inneholder backupdatoen i filnavnet), må du gi denne eldre backupfilen navnet `backup.vcu` før du utfører datagjenopprettingen!
{{% /alert %}}

## Datagjenoppretting til VitalControl-enhet {#data-restoration-to-vitalcontrol-device}

1. Åpne menyelementet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Enhet" /> `Enhet` på hovedskjermen til VitalControl-enheten som du vil gjenopprette data til.

2. Åpne undermenyen `Databehandling` og velg deretter undermenyelementet `Databackup`. Velg nå menyelementet `Gjenopprett backup` og bekreft med `OK`. Du blir nå bedt om å sette inn en USB-minnepinne:

   ![VitalControl: menyvei datagjenoppretting](../images/restore.png "Gjenoppretter fra backupfil")

3. Sett inn USB-minnepinnen (C-plugg) i kontakten nederst på enheten.

   ![VitalControl: sett inn USB-minnepinne](/images/firmware/update/plug-in-dual-usb-stick.svg "Sett inn USB-minnepinne")

4. Når enheten har oppdaget innsettingen av USB-pinnen, vises et bekreftelsesvindu. Bekreft denne popupen med `Ja` for å starte datagjenopprettingen. De-komprimering og gjenoppretting av backupen kan ta et minutt eller lenger. Når datagjenopprettingen er fullført, vises en suksessmelding:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Sikkerhetskopidata ble vellykket gjenopprettet til VitalControl-enheten.
