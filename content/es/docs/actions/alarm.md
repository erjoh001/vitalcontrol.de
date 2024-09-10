---
title: Alarma
linkTitle: Alarma
slug: alarm
weight: 60
description: >
 Añade y elimina animales de la lista de alarma.
date: 2023-07-26
categorías: [Acciones]
etiquetas: [Acciones, Alarma]
translationKey: actions/alarm
---

## Alerta {#alert}

Con la acción `{{<T "Alarm" >}}` puedes poner animales en la lista de alarma o quitarlos de ella. La lista de alarma te ayuda a encontrar animales conspicuos más rápidamente y fácilmente, facilitando tus chequeos rutinarios diarios. Para aplicar la acción `{{<T "Alarm" >}}`, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones para animales. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Agregar alarma" /> `{{<T "Alarm" >}}` y confirma con `{{<T "Ok" >}}`.

4. Aparece una notificación de que el animal fue añadido exitosamente a la lista de alarma y el display para el animal en el encabezado cambia. El símbolo &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal en alarma" /> indica que este animal está en la lista de alarma.

5. Puedes quitar el animal de la lista de alarma aplicando nuevamente la acción &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Quitar alarma" /> `{{<T "Alarm" >}}`. Si añades o quitas el animal de la lista de alarma usando la acción `{{<T "Alarm" >}}` se indica con un pequeño signo + o -.

{{< tabpane >}}
{{< tab header="Alerta:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acciones Alarma](../images/alarm-scan.png "Alarma")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acciones Alarma](../images/alarm.png "Alarma")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Consejo" %}}
Si esta acción no está disponible, ¡probablemente ha sido desactivada! Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
