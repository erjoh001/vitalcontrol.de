---
title: "Lista de alarmas"
linkTitle: "Lista de alarmas"
weight: 10
date: 2023-07-28T13:25:28+02:00
draft: false
slug: alarm
description: >
  Consulta tu lista de alarmas.
categorías: [Listas]
etiquetas: [Listas, alarma]
translationKey: lists/alarm
---
## Lista de alarmas {#alarm-list}

En la lista de alarmas encontrarás todos los animales que hayas añadido manualmente a la lista o todos los animales que estaban en el rango amarillo o rojo cuando se midió la temperatura. La lista te ayuda a mantener una visión general de todos los animales destacados. Además, para cada animal en la lista, puedes hacer lo siguiente:

- [Menú acciones](#full-action-menu)
- [Datos del animal](#animal-data)
- [Medir temperatura](#take-temperature)
- [Evaluar animal](#rate-animal)
- [Restablecer alarma](#clear-alarm)
- [Alternar estado de seguimiento](#toggle-watch-status)
- [Buscar animal](#search-animal)
- [Fijar filtro](#set-filter)

La lista de alarmas está estructurada de la siguiente manera:

   ![VitalControl Listas Lista de alarmas](../images/alarmstructure.png "Estructura de la lista de alarmas")

|Símbolo   | Descripción
|-------  |----
| ![VitalControl Icono Cabeza de animal](../images/kopf.png "Cabeza de animal") | Muestra cuántos animales hay en la lista
| ![VitalControl Icono ID](../images/ID.png "ID") | Muestra si el animal seleccionado es un ternero o una vaca. El termómetro clínico muestra si el animal estaba en la zona amarilla o roja en la última medición. La ID del animal se muestra debajo del símbolo.
| ![VitalControl Icono Evaluación](../images/auge.png "Icono Evaluación") | La última evaluación registrada se muestra debajo del símbolo con los colores del sistema de semáforo
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Temperatura corporal" title="Temperatura corporal" /> | La última medición de fiebre registrada se muestra debajo del símbolo con los colores del sistema de semáforo
| &nbsp;<img src="/icons/actions/rating.svg" width="25" align="bottom" alt="Evaluación del animal" title="Evaluación" /> |La marca circular debajo del símbolo indica que el animal está en la lista de vigilancia

### Pasos preliminares {#preliminary-steps}

1. Selecciona el ítem de menú <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listas" /> `{{<T "Lists" >}}` en la pantalla principal de tu dispositivo VitalControl y presiona el botón `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios iconos de listas. Resalta el icono <img src="/icons/lists/alarmlist.svg" width="30" align="bottom" alt="Alarm" /> `{{<T "Alarm" >}}` y confirma con `{{<T "Ok" >}}`.

3. La lista de alarmas ahora está abierta.

   ![VitalControl Lists Alarmlist](../images/firststeps.png "Pasos Preliminares")

### Menú acciones {#full-action-menu}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "ActionMenu" >}}` y selecciona la acción presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de alarmas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. El menú `{{<T "Actions" >}}` se abrirá automáticamente. El manejo de las acciones se puede encontrar [aquí](/es/docs/actions/).

   ![VitalControl Lists Alarmlist](../images/actionmenu.png "Menú de acciones")

### Datos del animal {#animal-data}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "AnimalData" >}}` y selecciona la acción presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de alarmas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. Los datos del animal ahora se mostrarán.

   ![VitalControl Lists Alarmlist](../images/animaldata.png "Datos del animal")

### Medir temperatura {#take-temperature}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "TempTaking" >}}` y selecciona la acción presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de alarmas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. La función [Medir temperatura](/es/docs/actions/measure-temperature/#measure-fever) ahora se inicia automáticamente.

   ![VitalControl Lists Alarmlist](../images/temperature.png "Tomar temperatura")

### Evaluar animal {#rate-animal}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "RateAnimal" >}}` y selecciona la acción presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de alarmas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. La función [Evaluar animal](/es/docs/actions/rating/#rate-your-animals) ahora se inicia automáticamente.

   ![VitalControl Lists Alarmlist](../images/rateanimal.png "Evaluar animal")

### Restablecer alarma {#clear-alarm}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "ClearAlarm" >}}` y selecciona la acción presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de alarmas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y utiliza las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. El animal ahora se elimina de la lista de alarmas.

   ![VitalControl Lists Alarmlist](../images/clearalarm.png "Eliminar alarma")

### Cambiar estado de seguimiento {#toggle-watch-status}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "ToggleWatchStatus" >}}` y selecciona la acción presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de alarmas, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y utiliza las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. El animal ahora se añade o se elimina de la lista de vigilancia dependiendo de su estado inicial.

   ![VitalControl Lists Alarmlist](../images/watchlist.png "Cambiar estado de vigilancia")

### Buscar animal {#search-animal}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; para invocar un menú emergente que lista varias opciones. Usa las teclas de flecha △ ▽ para resaltar la función `{{<T "SearchAnimal" >}}` e invoca la función de búsqueda presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Usa las teclas de flecha △ ▽ ◁ ▷ para seleccionar el ID del animal deseado. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> y utiliza las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

![VitalControl Lists Alarmlist](../images/searchanimal.png "Buscar animal")

### Fijar filtro {#set-filter}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista varias opciones. Usa las teclas de flecha △ ▽ para resaltar la función `{{<T "SetFilter" >}}` e invoca la función de filtro presionando la tecla central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Establece el filtro deseado. Puedes encontrar cómo usar el filtro [aquí](../../filter/).

   ![VitalControl Lists Alarmlist](../images/setfilter.png "Establecer filtro")
