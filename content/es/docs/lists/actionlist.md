---
title: Lista de acciones
linkTitle: Lista de acciones
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Consulta tu lista de acciones.
categorías: [Listas]
etiquetas: [Listas, Acción]
translationKey: lists/action
---
## Lista de acciones {#action-list}

Dentro de la lista de acciones puedes ver los animales para los cuales no se ha tomado ninguna acción durante seis horas. También están disponibles las siguientes opciones de configuración:

- [Medir temperatura](../alarm/#take-temperature)
- [Evaluar animal](../alarm/#rate-animal)
- [Pesaje de animal](#weigh-animals)
- [Cadena de acciones](#chain-of-action)
- [Vincular transpondedor](#link-transponder)
- [Ocultar después de la acción](#hide-after-action)
- [Buscar animal](../alarm/#search-animal)
- [Fijar filtro](../alarm/#set-filter)

{{% alert title="Consejo" %}}
Algunas acciones se deben realizar de la misma manera que en la [lista de alarmas](../alarm). Estas no se explican aquí. Realiza los pasos preliminares y usa el enlace de la acción respectiva para llegar a las instrucciones.
{{% /alert %}}

### Pasos preliminares {#preliminary-steps}

1. Selecciona el elemento del menú <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listas" />  `{{<T "Lists" >}}` en la pantalla principal de tu dispositivo VitalControl y presiona el botón `{{<T "Ok" >}}`.

2. Se abre un submenú en el que se muestran varios iconos de listas. Destaca el icono <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Lista de acciones" /> `{{<T "ActionList" >}}` y confirma con `{{<T "Ok" >}}`.

3. La lista de acciones ahora está abierta.

   ![VitalControl Listas Lista de acciones](../images/firststeps3.png "Pasos preliminares")

### Pesaje de animal {#weigh-animals}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir popup" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para destacar la acción `{{<T "WeighAnimal" >}}` y selecciona esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de acciones, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. El menú [pesaje de animal](/es/docs/actions/record-weight/) se abrirá automáticamente.

   ![VitalControl Lists Action list](../images/weightanimals.png "Pesar animales")

### Cadena de acciones {#chain-of-action}

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "ActionChain" >}}` y selecciona esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de acciones, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. La función [cadena de acciones](../../chain-of-actions) se abrirá automáticamente.

   ![VitalControl Lists Action list](../images/chainofaction.png "Cadena de acciones")

### Vincular transpondedor {#link-transponder}

Esta función se utiliza para añadir un transpondedor al registro de datos de animales que aún no tienen asignado un transpondedor.

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Abrir menú emergente" />&nbsp; para invocar un menú emergente que lista las posibles acciones al presionar la tecla `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para resaltar la acción `{{<T "LinkTransponder" >}}` y selecciona esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. Dentro de la lista de acciones, usa las teclas de flecha △ ▽ para seleccionar el animal deseado y confirma con `{{<T "Ok" >}}`. Alternativamente, puedes buscar un animal. Usa el botón `On/Off` <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Buscar" /> y usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar los dígitos deseados. Finalmente confirma con `{{<T "Ok" >}}`.

4. Ahora escanea el transpondedor del animal correspondiente.

   ![VitalControl Lists Action list](../images/linktransponder.png "Vincular transpondedor")

### Ocultar después de la acción {#hide-after-action}

Si esta función está activada, los animales para los cuales se ha realizado una acción serán ocultados de la lista de acciones. Si esta función está desactivada, los animales procesados permanecerán visibles en la lista.

1. Completa los pasos preliminares.

2. Usa la tecla `F3` &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Acciones" />&nbsp; para invocar un menú emergente que lista varias opciones. Usa las teclas de flecha △ ▽ para resaltar la opción `{{<T "HideAfterAction" >}}` y activa o desactiva esta opción presionando el botón central `{{<T "Ok" >}}` o la tecla `F3` `{{<T "Ok" >}}`.

3. La función `{{<T "HideAfterAction" >}}` ahora está habilitada/deshabilitada. La activación se indica mediante una marca de verificación dentro del cuadro.

   ![Listas de Control Vital Lista de acciones](../images/hideafteraction.png "Ocultar después de la acción")
