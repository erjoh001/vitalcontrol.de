---
title: Registrar peso
linkTitle: Peso
slug: record-weight
weight: 20
description: >
  Registra el peso de tus animales.
date: 2023-07-26
categories: [Acciones]
tags: [Acciones, peso]
translationKey: actions/weight
---

## Registrar peso {#record-weight}
Utiliza la acción &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Pesaje" /> `{{<T "Weighing" >}}` para guardar el peso de tu animal individualmente. Para hacer esto, pesa tus animales o estima su peso e introduce este valor en el dispositivo VitalControl. Esto te permite verificar el desarrollo del peso de tus animales y evaluarlos individualmente.

{{% alert title="Consejo" %}}
Si el peso promedio se desvía mucho en una dirección (demasiado alto/demasiado bajo), el valor del aumento diario debería ajustarse.
{{% /alert %}}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o selecciona un animal de la lista. Confirma con `{{<T "Ok" >}}` y selecciona un animal con las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Usa las teclas de flecha ◁ ▷ para seleccionar la acción &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Pesaje" /> `{{<T "Weighing" >}}` y confirma con `{{<T "Ok" >}}`.

4. Se abre un menú con una especificación de peso. Aumenta o disminuye esto con las teclas de flecha △ ▽ y guarda el resultado con la tecla `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Guardar" /> o con la tecla `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Registrar peso:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
  ![VitalControl: Menú Acción Pesaje](../images/weighing-scan.png "Pesaje")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
  ![VitalControl: Menú Acción Pesaje](../images/weighing.png "Pesaje")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Consejo" %}}
Si esta acción no está disponible, ¡probablemente la acción ha sido desactivada! Activa la acción en el menú de [configuración de acciones](/es/docs/actions/setting/). Alternativamente, restablecer todas las acciones hará que esta acción vuelva a aparecer.
{{% /alert %}}
