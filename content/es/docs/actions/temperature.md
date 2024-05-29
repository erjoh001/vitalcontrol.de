---
title: Medir la temperatura
linkTitle: Temperatura
slug: measure-temperature
weight: 10
description: >
  Medir la fiebre en tus animales.
date: 2023-07-26
Categories: [Acciones]
tags: [Acciones, fiebre, temperatura]
translationKey: actions/temperature
---

## Medir la fiebre {#measure-fever}

Utiliza la acción de temperatura para medir la temperatura de tus animales. Inserta la punta del medidor rectalmente hasta la profundidad de medición especificada (para animales grandes toda la longitud hasta el abultamiento, para pequeños rumiantes aproximadamente 6 cm o 2/3 de la punta del medidor). El proceso de medición se ejecuta automáticamente. Tan pronto como el proceso de medición se complete, el dispositivo muestra la temperatura medida. La codificación por colores indica si la temperatura está en el rango verde, amarillo o rojo. Tienes varias opciones durante la campaña de Tomar la temperatura:

- [Guardar el resultado](#save-result) para documentar la medición de manera específica al animal
- Poner al animal en la [Lista de Observación](#put-on-the-watch-list). Esto te facilita verificar las repeticiones, ya que puedes convocar a estos animales usando la 'lista de observación' y así encontrar más fácilmente a los animales conspicuos.
- Encender y apagar la [Iluminación del Sitio de Medición](#lighting-of-the-measurement-location-on-and-off)
- La [Repetición de la medición](#repeat-the-measurement)
- La [Cancelación de la acción](#cancel-the-action)

{{% alert title="Consejo" %}}
Si la temperatura está en el área amarilla ("elevada") o roja ("fiebre"), VitalControl automáticamente pone al animal seleccionado en la lista de alarmas. Al correlacionar con otros datos, puedes monitorear continuamente la salud del animal individual.
{{% /alert %}}

### Pasos preliminares

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. La acción <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperatura" /> `{{<T "Temperature" >}}` está automáticamente seleccionada. Confirma con `{{<T "Ok" >}}`.

4. Ahora realice la medición. Tan pronto como se complete la medición, la temperatura se resalta en azul, verde, amarillo o rojo, dependiendo del umbral establecido.

{{< tabpane >}}
{{< tab header="Pasos preliminares:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Acciones del Menú Pasos Preliminares](../images/firststeps-scan.png "Pasos preliminares")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Acciones del Menú Pasos Preliminares](../images/firststeps.png "Pasos preliminares")
{{% /tab %}}
{{< /tabpane >}}

### Guardar resultado {#save-result}

1. Complete los pasos preliminares.

2. Use la tecla `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Guardar" /> o confirme con `{{<T "Ok" >}}` para guardar el resultado.

    ![VitalControl: Acciones del Menú Guardar resultados](../images/saveresults.png "Guardar resultados")

### Añadir a la lista de seguimiento {#put-on-the-watch-list}

1. Complete los pasos preliminares.

2. Presione el botón superior central `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Abrir popup" />.

3. Se abre un menú emergente en el que puede seleccionar de los ítems del menú `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` o `{{<T "Flashlight" >}}`. Use las teclas de flecha △ ▽ para seleccionar `{{<T "AddToWatchList" >}}` y presione la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Acciones del Menú Añadir a lista de seguimiento](../images/watchlist.png "Añadir a lista de seguimiento")

### Encender y apagar la iluminación del lugar de medición {#lighting-of-the-measurement-location-on-and-off}

1. Complete los pasos preliminares.

2. Presione el botón superior central `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Abrir popup" />.

3. Se abre un menú emergente en el que puede seleccionar de los ítems del menú `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` o `{{<T "Flashlight" >}}`. Use las teclas de flecha △ ▽ para seleccionar `{{<T "Flashlight" >}}` y presione la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Acciones del Menú Encender y apagar linterna](../images/light.png "Encender y apagar linterna")

### Repetir la medición {#repeat-the-measurement}

1. Complete los pasos preliminares.

2. Presiona el botón superior central `On/Off` <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. Se abre un menú emergente en el que puedes seleccionar entre los ítems del menú `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` o `{{<T "Flashlight" >}}`. Usa las teclas de flecha △ ▽ para seleccionar `{{<T "RepeatMeasurement" >}}` y presiona la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

    ![VitalControl: Acciones del Menú Luz encendida/apagada](../images/repeat.png "Luz encendida/apagada")

### Cancelar la acción {#cancel-the-action}

1. Completa los pasos preliminares.

2. Presiona la tecla `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancelar" /> para cancelar la acción.

    ![VitalControl: Acciones del Menú Cancelar la acción](../images/saveresults.png "Cancelar la acción")

{{% alert title="Consejo" %}}
Si esta acción no está disponible, ¡probablemente ha sido desactivada! Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
