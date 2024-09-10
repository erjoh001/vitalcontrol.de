---
title: Editar datos del animal
linkTitle: Editar
slug: edit
weight: 90
description: >
 Editar datos del animal seleccionado.
date: 2023-07-26
categorías: [Acciones]
etiquetas: [Acciones, datos del animal, editar]
translationKey: actions/edit
---

## Editar datos del animal {#edit-animal-data}

La acción <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editar" /> `{{<T "Edit" >}}` te permite cambiar los datos del animal seleccionado directamente. Esta función facilita la corrección de los datos del animal si, por ejemplo, durante la inspección del animal se observa que el género se ha guardado incorrectamente. Puedes cambiar los siguientes datos:

- Tipo de ganado
- Sexo
- Peso al nacer
- Raza
- Desarrollo de peso
- ID nacional de animal
- ID
- Ternero simple/múltiples
- Fecha de nacimiento
- Facilidad de parto

Para cambiar los datos del animal, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editar" /> `{{<T "Edit" >}}` y confirma con `{{<T "Ok" >}}`.

4. Se abre una lista con los datos del animal. Usa las teclas de flecha △ ▽ para seleccionar la opción de cambio deseada.

5. Para los datos `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` y `{{<T "CalvingEase" >}}` usa las teclas de flecha ◁ ▷ para realizar el cambio deseado.

6. Para los datos `{{<T "ID" >}}` y `{{<T "DateBirth" >}}` selecciónalos con las teclas de flecha △ ▽ y confirma con `{{<T "Ok" >}}`. Usa las teclas de flecha △ ▽ para seleccionar el número correspondiente y las teclas de flecha ◁ ▷ para navegar dentro de los campos numéricos.

7. Guarda el cambio con la tecla `F3`.

{{< tabpane >}}
{{< tab header="Editar datos del animal:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acción Editar datos del animal](../images/edit-scan.png "Editar datos del animal")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acción Editar datos del animal](../images/edit.png "Editar datos del animal")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Sugerencia" %}}
Si esta acción no está disponible, probablemente la acción haya sido desactivada. ¡Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/)! Alternativamente, restablecer todas las acciones hará que esa acción vuelva a aparecer.
{{% /alert %}}
