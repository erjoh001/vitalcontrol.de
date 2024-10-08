---
title: "En lista de vigilancia"
linkTitle: "En lista de vigilancia"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Consulta tu lista de vigilancia.
categorías: [Listas]
etiquetas: [Listas, en vigilancia]
translationKey: lists/on-watch
---
## En lista de vigilancia {#on-watch-list}

En la lista de vigilancia encontrarás todos los animales que has añadido manualmente a la lista. La lista te ayuda a mantener una visión general de los animales que has calificado como conspicuos. Además, para cada animal en la lista, puedes realizar las siguientes acciones:

- [Menú acciones](../alarm/#full-action-menu)
- [Datos del animal](../alarm/#animal-data)
- [Medir temperatura](../alarm/#take-temperature)
- [Evaluar animal](../alarm/#rate-animal)
- [Quitar de la lista de seguimiento](#remove-from-watch-list)
- [Cambiar estado alarma](#toggle-alarm-status)
- [Buscar animal](../alarm/#search-animal)
- [Fijar filtro](../alarm/#set-filter)

{{% alert title="Consejo" %}}
Algunas acciones se llevan a cabo de la misma manera que en la [Lista de alarmas](../alarm). Estas no se explican aquí. Realiza los pasos preliminares y usa el enlace de la acción respectiva para llegar a las instrucciones.
{{% /alert %}}

La lista de alarmas está estructurada de la siguiente manera:

   ![VitalControl Listas En lista de vigilancia](../images/onwatchstructure.png "Estructura de la En lista de vigilancia")

|Símbolo   | Descripción
|---------|-----
| ![VitalControl Listas En lista de vigilancia](../images/kopf.png "Contador tamaño del rebaño") | Muestra cuántos animales están en la lista
| ![Icono de vaca](../images/kopf2.png "Cabeza de vaca") | Muestra si el animal seleccionado es un ternero o una vaca
| ![VitalControl Listas En lista de vigilancia](../images/auge.png "Calificación") | La última calificación registrada se muestra debajo del símbolo con los colores del sistema de semáforo
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Temperatura corporal" title="Temperatura corporal" /> | La última medición de fiebre registrada se muestra debajo del símbolo con los colores del sistema de semáforo
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Mostrar animal en alarma" title="Animal en alarma" /> | Una marca circular debajo del símbolo indica que el animal está en la lista de alarmas

### Pasos Preliminares {#preliminary-steps}

1. Seleccione el elemento del menú <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listas" /> `{{<T "Lists" >}}` en la pantalla principal de su dispositivo VitalControl y presione el botón `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varias listas. Seleccione la lista &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="Lista 'En vigilancia'" /> `{{<T "OnWatch" >}}`. Confirme con `{{<T "Ok" >}}`.

3. La lista `{{<T "OnWatch" >}}` ahora está abierta.

   ![Listas de VitalControl Lista En vigilancia](../images/firststeps2.png "Pasos Preliminares")

### Quitar de la lista de seguimiento {#remove-from-watch-list}

1. Complete los pasos preliminares.

2. Utilice la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Use las teclas de flecha △ ▽ para resaltar la acción `{{<T "RemoveFromWatchList" >}}` y seleccione esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista en vigilancia, use las teclas de flecha △ ▽ para seleccionar el animal deseado y confirme con `{{<T "Ok" >}}`. Alternativamente, puede buscar un animal. Use el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y use las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirme con `{{<T "Ok" >}}`.

4. El animal ahora se ha eliminado de la lista de vigilancia.

   ![Listas de VitalControl Lista En vigilancia](../images/remove.png "Quitar de la lista de seguimiento")

### Cambiar estado alarma {#toggle-alarm-status}

1. Complete los pasos preliminares.

2. Utilice la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Use las teclas de flecha △ ▽ para resaltar la acción `{{<T "ToggleAlarmStatus" >}}` y seleccione esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista en vigilancia, use las teclas de flecha △ ▽ para seleccionar el animal deseado y confirme con `{{<T "Ok" >}}`. Alternativamente, puede buscar un animal. Use el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y use las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirme con `{{<T "Ok" >}}`.

4. El animal ahora se añade o se elimina de la lista de alarmas dependiendo de su estado inicial.

   ![VitalControl Lists Toggle alarm status](../images/alarmstatus.png "Toggle alarm status")
