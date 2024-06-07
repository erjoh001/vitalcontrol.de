---
title: Animales comprados
linkTitle: Animales comprados
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Aquí puedes ver tus compras actuales y exportar los datos.
categories: [Nuevo en la granja]
tags: [Nuevo en la granja]
translationKey: new-on-farm/new-on-farm
---
## Animales comprados {#purchased-animals}

En esta lista encontrarás todos los animales que has creado mediante el registro masivo. Puedes exportar esta lista y así registrar tus adiciones directamente en el programa de gestión de rebaños DSP-Herde y en HI-Tier. Alternativamente, puedes eliminar todos los avisos de compra.

{{% alert title="Consejo" %}}
Para exportar datos necesitas el USB incluido. Conecta el USB con el adaptador USB-C a tu dispositivo VitalControl antes de seguir las instrucciones.
{{% /alert %}}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nuevo en la granja" /> `{{<T "NewOnFarm" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Se abre un submenú en el que puedes elegir entre <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` y <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar el ítem del menú <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Animales comprados" /> `{{<T "PurchasedAnimals" >}}` y confirma con `{{<T "Ok" >}}`.

3. Se abre una lista con tus compras que has registrado mediante el ítem del menú de registro masivo.

4. Usa la tecla `F2` `{{<T "CSVExport" >}}`.

5. La lista de mensajes CSV ahora se guarda en tu USB stick.

![VitalControl: Lista de animales comprados, exportación csv](../images/purchasedanimals.png "Animales comprados, exportación csv")

## Opciones: Eliminar todos los avisos después de la exportación {#options-delete-all-notices-after-export}

Con esta opción, puedes configurar si todos los mensajes dentro de la lista `{{<T "PurchasedAnimals" >}}` deben ser eliminados después de que el archivo CSV haya sido exportado. ¡Solo usa esta opción si estás seguro de que ya no necesitas los mensajes!

1. Usa la tecla `F3`. Se abre un submenú.

2. Usa las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "DeleteAllNoticesAfterExport" >}}` y confirma con `{{<T "Ok" >}}`.

3. La casilla ahora está marcada con una marca. La opción está activada. Confirma de nuevo con `{{<T "Ok" >}}` para desactivar la opción.

![VitalControl: Lista de animales comprados, exportación csv](../images/delete-all.png "Eliminar todos los avisos después de la exportación")

## Llamadas directas a funciones {#direct-function-calls}

Además de crear el archivo de exportación, tienes las siguientes opciones:

- [Desvincular transpondedor](#unlink-transponder)
- [Borrar todos los avisos de compra](#clear-all-purchase-notices)
- [Borrar animal + notification](#delete-animal--purchase-notice)
- [Borrar aviso de compra](#clear-notice-of-purchase)
- [Editar una marca](#edit-data-of-purchased-animal)

{{% alert title="Consejo" %}}
Siempre abre primero la lista de `{{<T "PurchasedAnimals" >}}` como se describe en las instrucciones anteriores.
{{% /alert %}}

### Desvincular transpondedor {#unlink-transponder}

Puedes usar esta función para remover el transpondedor de un animal.

1. Usa la tecla `F3`. Se abre un submenú.

2. Usa las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "UnlinkTransponder" >}}` y confirma con `{{<T "Ok" >}}`.

3. El transpondedor ha sido desvinculado con éxito.

![VitalControl: Lista de animales comprados, exportación csv](../images/unlink-transponder.png "Animales comprados, desvincular transpondedor")

### Borrar todos los avisos de compra {#clear-all-purchase-notices}

Con esta función puedes eliminar todos los animales de la lista `{{<T "PurchasedAnimals" >}}` sin necesidad de crear un archivo de exportación primero.

1. Usa la tecla `F3`. Se abre un submenú.

2. Usa las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "ClearAllPurchaseNotices" >}}` y confirma con `{{<T "Ok" >}}`.

3. Los avisos de compra han sido eliminados con éxito.

![VitalControl: Lista de animales comprados, limpiar avisos de compra](../images/clear.png "Limpiar todos los avisos de compra")

### Borrar animal + notification {#delete-animal--purchase-notice}

Para eliminar un animal y su correspondiente aviso de compra, proceda de la siguiente manera:

1. Utilice las teclas de flecha △ ▽ para seleccionar el animal que desea eliminar.

2. Utilice la tecla `F3`. Se abre un submenú.

3. Utilice las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "UnregisterAnimalAndBirthNotice >}}` y confirme con `{{<T "Ok" >}}`.

4. El animal y el mensaje de acceso han sido eliminados con éxito.

![VitalControl: Lista de animales comprados, eliminar animal + aviso](../images/delete.png "Eliminar animal + aviso")

### Borrar aviso de compra {#clear-notice-of-purchase}

Para eliminar el aviso de compra de un animal de la lista, proceda de la siguiente manera:

1. Utilice las teclas de flecha △ ▽ para seleccionar el animal cuyo aviso de compra desea eliminar.

2. Utilice la tecla `F3`. Se abre un submenú.

3. Utilice las teclas de flecha △ ▽ para seleccionar el ítem del menú `{{<T "ClearPurchaseNotice" >}}` y confirme con `{{<T "Ok" >}}`.

4. El aviso de compra del animal seleccionado ha sido eliminado con éxito.

![VitalControl: Lista de animales comprados, limpiar aviso de compra](../images/clearnotice.png "Limpiar aviso de compra")

### Editar datos del animal comprado {#edit-data-of-purchased-animal}

Para editar los datos de un animal en la lista de compras, proceda de la siguiente manera:

1. Utilice las teclas de flecha △ ▽ para seleccionar el animal que desea editar.

2. Utilice el botón `{{<T "Ok" >}}`. Se abre un submenú con los datos del animal. Puede encontrar cómo editar estos [aquí](/es/docs/actions/edit/#edit-animal-data).

![VitalControl: Lista de animales comprados, editar datos del animal](../images/edit.png "Editar datos del animal comprado")
