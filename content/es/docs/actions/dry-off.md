---
title: Secar
linkTitle: Secar
slug: dry-off
weight: 115
description: >
 Secar una vaca o añadirla a la lista de vacas frescas
date: 2023-07-26
categories: [Secar]
tags: [Secar]
translationKey: actions/dry-cows
---

## Secar {#dry-off}

{{% alert title="Consejo" %}}
Dependiendo del estado inicial de la vaca, puedes secar al animal y añadirlo a la lista de secado, o puedes marcar al animal como una ordeñadora fresca y así añadirla a la lista de ordeñadoras frescas. La distinción entre las funciones se aclara mediante un símbolo de más o un símbolo de menos.
{{% /alert %}}

### Secar una vaca {#dry-off-a-cow}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea el transpondedor del animal sin la ID nacional del animal o selecciona el animal de la lista. Para hacer esto, confirma con `{{<T "Ok" >}}` y selecciona la ID del animal usando las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Secar" /> `{{<T "DryOff" >}}` y confirma con `{{<T "Ok" >}}`.

4. El animal fue marcado exitosamente como seco.

{{< tabpane >}}
{{< tab header="Secar una vaca:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acciones Secar](../images/dryoff-scan.png "Secar una vaca")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acciones Secar](../images/dryoff.png "Secar una vaca")
{{% /tab %}}
{{< /tabpane >}}

### Marcar como lactada {#mark-as-lactated}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea el transpondedor del animal sin la ID nacional del animal o selecciona el animal de la lista. Para hacer esto, confirma con `{{<T "Ok" >}}` y selecciona la ID del animal usando las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Utiliza las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` y confirma con `{{<T "Ok" >}}`.

4. El animal fue marcado exitosamente como lactado.

{{< tabpane >}}
{{< tab header="Marcar como lactado:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acciones Marcar como lactado](../images/lactated-scan.png "Marcar como lactado")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acciones Marcar como lactado](../images/lactated.png "Marcar como lactado")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Consejo" %}}
Si esta acción no está disponible, ¡probablemente ha sido desactivada! Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
