---
title: Registro de pérdida de un animal
linkTitle: Pérdida de animal
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Cómo registrar la pérdida de un animal utilizando el dispositivo VitalControl.
categorías: [Animal-loss]
etiquetas: [Animal-loss]
translationKey: new/animal-loss
---
## Registrar la pérdida de un animal {#record-the-loss-of-an-animal}

{{% alert title="Consejo" %}}
La función de pérdida de animal en este elemento del menú se utiliza principalmente para registrar terneros/corderos muertos. Las opciones de configuración se adaptan en consecuencia y no son idénticas a los elementos de configuración en el menú `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` o `{{<T "AnimalLoss" >}}`.
{{% /alert %}}

Para registrar la pérdida de un animal, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nuevo animal" /> `{{<T "New" >}}` y presione el botón `{{<T "Ok" >}}`.

2. Se abre un submenú. Utilice las teclas de flecha ◁ ▷ △ ▽ para seleccionar el elemento del menú <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Pérdida de animal" /> `{{<T "AnimalLoss" >}}` y confirme con `{{<T "Ok" >}}`.

3. Escanee el transpondedor del animal madre o use el botón `{{<T "Ok" >}}`. Ingrese la ID del animal madre utilizando las teclas de flecha ◁ ▷ △ ▽ y confirme con `{{<T "Ok" >}}`.

4. Se abre otro submenú en el que puede guardar la información sobre el animal. Utilice las teclas de flecha △ ▽ para seleccionar el elemento de configuración deseado.

5. Para las configuraciones `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` y `{{<T "CalvingEase" >}}`, utilice las teclas de flecha ◁ ▷ para seleccionar la configuración deseada.

6. Para la configuración `{{<T "DateBirth" >}}` use las teclas de flecha △ ▽ para seleccionar la opción de configuración deseada y confirme con `{{<T "Ok" >}}`. Utilice las teclas de flecha △ ▽◁ ▷ para seleccionar los números deseados. Finalmente, confirme con `{{<T "Ok" >}}`.

7. Guarde las configuraciones y cree el nuevo animal con la tecla `F3` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar" />&nbsp;.

{{% alert title="Consejo" %}}
Puede encontrar más información y opciones de configuración para la creación de nuevos animales [aquí](../../settings/animal-registration/).
{{% /alert %}}


{{< tabpane >}}
{{< tab header="Pérdida de animal:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Ruta del menú Nueva pérdida de animal](../images/animalloss-scan.png "Registrar la pérdida de un animal")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Ruta del menú Nueva pérdida de animal](../images/animalloss.png "Registrar la pérdida de un animal")
{{% /tab %}}
{{< /tabpane >}}
