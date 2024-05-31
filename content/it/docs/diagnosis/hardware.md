---
title: Verifica dei componenti hardware del tuo dispositivo VitalControl
linkTitle: Hardware
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  Verifica i componenti hardware del tuo dispositivo VitalControl, soprattutto se sospetti un difetto hardware.
categories: [Diagnosi, Hardware]
weight: 10
---
Se c'è un malfunzionamento sul tuo dispositivo, dovresti prima eseguire un controllo hardware per chiarire se uno dei componenti hardware è difettoso.

## Verifica l'hardware del tuo dispositivo {#check-the-hardware-of-your-device}

1. Apri l'elemento del menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` nella schermata principale del tuo dispositivo VitalControl.

1. Richiama il sottomenu `{{<T "Service" >}}`, seleziona l'elemento del menu `{{<T "CheckDeviceDrivers" >}}` e conferma con `{{<T "Ok" >}}`.

Il dispositivo ora elenca tutti i componenti hardware del dispositivo, insieme al loro stato. Idealmente, tutti i componenti elencati dovrebbero mostrare un punto verde all'estrema destra; questo segnala un componente funzionante. Se viene mostrato un punto rosso per un componente, ciò indica che il componente corrispondente è difettoso. In questo caso, il dispositivo deve essere restituito al produttore per l'assistenza.

   ![VitalControl: Percorso del menu Verifica dei componenti hardware](../images/device-check.png "Verifica hardware")

{{% alert title="NOTA" %}}
Se lo stato di tutti i componenti è mostrato come integro (punti verdi) e c'è ancora un malfunzionamento del dispositivo, potrebbe trattarsi di un difetto software. In questo caso, contatta il tuo rivenditore locale o la [hotline di assistenza](https://www.urbanonline.de/it/contact) del produttore.
{{% /alert %}}
