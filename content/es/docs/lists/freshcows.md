---
title: "Lista de vacas recién paridas"
linkTitle: "Lista de vacas recién paridas"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Facilita el control de tus vacas recién paridas.
categorías: [Listas]
etiquetas: [Listas, vaca recién parida]
translationKey: lists/fresh-cows
---
### Lista de vacas recién paridas {#fresh-cows-list}

{{% alert title="Explicación" %}}
Al manejar vacas recién paridas, se considera una rutina de mejores prácticas revisar a los animales diariamente durante varios días después del parto. La lista de vacas recién paridas facilita este control, especialmente en términos de registro de temperatura. Para cada animal, se muestra un gráfico de columnas durante todos los días del período de control, cada día del período de control está representado por una barra vertical. Dependiendo del color de la barra (verde, amarillo o rojo), puedes ver si se midió una temperatura normal, elevada o críticamente elevada ese día para el animal respectivo.
{{% /alert %}}

Las vacas se incluyen en la lista de vacas recién paridas inmediatamente después de que se haya registrado su parto. Permanecen en esa lista durante un cierto período de tiempo, la duración de este período (en días) se puede ajustar en los [ajustes](../../settings/data-acquisition/#control-period-of-fresh-cows)).
 Las siguientes acciones están disponibles para esta lista:

- [Menú acciones](../alarm/#full-action-menu)
- [Datos del animal](../alarm/#animal-data)
- [Medir temperatura](../alarm/#take-temperature)
- [Cambiar estado alarma](#toggle-alarm-status)
- [Cambiar estado de seguimiento](#toggle-watch-status)
- [Ocultar vacas medidas](#hide-measured-cows)
- [Buscar animal](../alarm/#search-animal)
- [Fijar filtro](../alarm/#set-filter)

{{% alert title="Consejo" %}}
Algunas acciones se llevan a cabo de la misma manera que en la [lista de alarmas](../alarm). Estas no se explican aquí. Realiza los pasos preliminares y usa el enlace de la acción respectiva para obtener las instrucciones.
{{% /alert %}}

### Pasos preliminares {#preliminary-steps}

1. Selecciona el elemento del menú <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Listas" /> `{{<T "Lists" >}}` en la pantalla principal de tu dispositivo VitalControl y presiona el botón `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varias listas. Selecciona la lista de `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Vacas frescas" />. Confirma con `{{<T "Ok" >}}`.

3. La lista de vacas frescas está ahora abierta.

   ![Listas de VitalControl Lista de vacas frescas](../images/firststeps4.png "Lista de vacas frescas")

### Cambiar estado alarma {#toggle-alarm-status}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista las acciones posibles al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "ToggleAlarmStatus" >}}` y selecciona esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de vacas frescas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. El animal ahora se añade o se elimina de la lista de alertas dependiendo de su estado inicial.

   ![Listas de VitalControl Lista de vacas frescas](../images/togglealarmstatus.png "Cambiar estado de alarma")

### Cambiar estado de seguimiento {#toggle-watch-status}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista las acciones posibles al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "ToggleWatchStatus" >}}` y selecciona esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de vacas frescas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. El animal ahora se añade o se elimina de la lista de vigilancia dependiendo de su estado inicial.

![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Cambiar estado de vigilancia")

### Ocultar vacas medidas {#hide-measured-cows}

Si esta función está activada, los animales a los que se les ha realizado una medición de temperatura se ocultan en la lista de vacas secas. Si esta función no está activada, los animales permanecen visibles en la lista.

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; para invocar un menú emergente que lista varias opciones. Usa las teclas de flecha △ ▽ para resaltar la opción `{{<T "HideMeasuredCows" >}}` y activa esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de vacas frescas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. La función `{{<T "HideMeasuredCows" >}}` ahora está activada. La activación se indica marcando la casilla.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Ocultar vacas medidas")
