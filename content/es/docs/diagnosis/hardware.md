---
title: Comprobación de los componentes de hardware de tu dispositivo VitalControl
linkTitle: Hardware
date: 2023-08-07T10:09:46+02:00
draft: false
translationKey: diagnosis/hardware
description: >
  Comprueba los componentes de hardware de tu dispositivo VitalControl, especialmente si sospechas de un defecto de hardware.
categories: [Diagnóstico, Hardware]
weight: 10
---
Si hay un mal funcionamiento en tu dispositivo, primero deberías realizar una comprobación de hardware para aclarar si alguno de los componentes de hardware está defectuoso.

## Comprueba el hardware de tu dispositivo {#check-the-hardware-of-your-device}

1. Abre el ítem del menú &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `{{<T "Device" >}}` en la pantalla principal de tu dispositivo VitalControl.

1. Invoca el submenú `{{<T "Service" >}}`, selecciona el ítem del menú `{{<T "CheckDeviceDrivers" >}}` y confirma con `{{<T "Ok" >}}`.

El dispositivo ahora lista todos los componentes de hardware del dispositivo, junto con su estado. Idealmente, todos los componentes listados deberían mostrar un punto verde en el extremo derecho; esto señala un componente funcionando correctamente. Si se muestra un punto rojo para un componente, esto indica que el componente correspondiente está defectuoso. En este caso, el dispositivo debe ser devuelto al fabricante para servicio.

   ![VitalControl: Ruta del menú Comprobación de componentes de hardware](../images/device-check.png "Comprobación de hardware")

{{% alert title="NOTA" %}}
Si el estado de todos los componentes se muestra como intacto (puntos verdes) y todavía hay un mal funcionamiento del dispositivo, podría ser un defecto de software. En este caso, contacta a tu distribuidor local o a la [línea de servicio](https://www.urbanonline.de/en/contact) del fabricante.
{{% /alert %}}
