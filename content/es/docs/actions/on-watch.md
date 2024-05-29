---
title: En seguimiento
linkTitle: En seguimiento
slug: on-watch
weight: 70
description: >
 Coloca animales en la lista de vigilancia o retíralos de ella.
date: 2023-07-26
categories: [Acciones]
tags: [Acciones, En seguimiento]
translationKey: actions/on-watch
---

## En seguimiento {#on-watch}

Con la acción `{{<T "OnWatch" >}}` colocas animales en la lista de vigilancia o los retiras de ella. La lista de vigilancia te ayuda a encontrar animales conspicuos más rápidamente y fácilmente, facilitando tus chequeos rutinarios diarios. Para aplicar la acción `{{<T "OnWatch" >}}`, procede de la siguiente manera:

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones para animales. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="En seguimiento" /> `{{<T "OnWatch" >}}` y confirma con `{{<T "Ok" >}}`.

4. Aparece una notificación de que el animal fue añadido exitosamente a la lista de vigilancia.

5. Puedes retirar el animal de la lista de vigilancia aplicando la acción &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="No En seguimiento" />  `{{<T "OnWatch" >}}` nuevamente. Si agregas o retiras el animal de la lista de vigilancia usando la acción `{{<T "OnWatch" >}}` se indica con un pequeño signo ⊕ o ⊖.

{{< tabpane >}}
{{< tab header="En seguimiento:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acciones En seguimiento](../images/onwatch-scan.png "En seguimiento")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acciones En seguimiento](../images/onwatch.png "En seguimiento")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Consejo" %}}
Si esta acción no está disponible, ¡probablemente ha sido desactivada! Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
