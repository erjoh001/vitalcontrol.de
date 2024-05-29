---
title: Anular registro a un animal
linkTitle: Anular registro
slug: unregister
weight: 100
description: >
 Anular registro a un animal
date: 2023-07-26
categories: [Acciones]
tags: [Acciones, Anular registro]
translationKey: actions/unregister
---
{{% alert title="Advertencia" color="warning" %}}
¡Tan pronto como elimines el registro de datos del animal, este ya no estará disponible para fines de evaluación! Si das de baja a un animal, pero luego quieres, por ejemplo, evaluar nuevamente el desarrollo del animal, debes conservar el registro de datos del animal.
{{% /alert %}}

## Anular registro {#unregister}

La acción `{{<T "Unregister" >}}` te permite Anular registro a un animal tan pronto como se traslade. Para Anular registro a un animal, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Anular registro" /> `{{<T "Unregister" >}}` y confirma con `{{<T "Ok" >}}`.

4. Se abre otro submenú en el que puedes guardar varios ajustes. Usa las teclas de flecha △ ▽ para seleccionar la opción de ajuste deseada. Usa las teclas de flecha ◁ ▷ para seleccionar el ajuste deseado.

5. Usa la tecla `F3` `{{<T "Unregister" >}}` para Anular registro al animal con los ajustes especificados.

{{< tabpane >}}
{{< tab header="Anular registro:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acción Anular registro](../images/unregister-scan.png "Anular registro a un animal")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acción Anular registro](../images/unregister.png "Anular registro a un animal")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Consejo" %}}
Si esta acción no está disponible, probablemente haya sido desactivada. Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
