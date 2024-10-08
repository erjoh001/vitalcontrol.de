---
title: Desvincular transpondedor
linkTitle: Desvincular transpondedor
slug: unlink-transponder
weight: 110
description: >
 Eliminar el enlace del transpondedor a un animal
date: 2023-07-26
categorías: [Transpondedor]
etiquetas: [Transpondedor]
translationKey: actions/transponder-unlink
---
{{% alert title="Advertencia" color="warning" %}}
¡Esta acción no está habilitada por defecto! Actívala como se describe en [configuración de acciones](../setting/).
{{% /alert %}}

## Desvincular transpondedor {#unlink-transponder}

Con esta acción puedes desvincular un transpondedor que ya ha sido asignado a un animal de este animal.

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el elemento del menú &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acciones" /> `{{<T "Actions" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea el animal con el transpondedor deseado o selecciona el animal con el transpondedor de la lista. Para hacerlo, confirma con `{{<T "Ok" >}}` y selecciona la ID del animal usando las teclas de flecha △ ▽. Confirma con `{{<T "Ok" >}}`.

3. Se abre un submenú con las acciones del animal. Usa las teclas de flecha ◁ ▷ △ ▽ para seleccionar la acción &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Desvincular transpondedor" /> `{{<T "UnlinkTransponder" >}}` y confirma con `{{<T "Ok" >}}`.

4. El transpondedor se desvinculó exitosamente del animal.

{{< tabpane >}}
{{< tab header="Desvincular transpondedor:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú Acción Desvincular transpondedor](../images/unlinktransponder-scan.png "Desvincular transpondedor")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú Acción Desvincular transpondedor](../images/unlinktransponder.png "Desvincular transpondedor")
{{% /tab %}}
{{< /tabpane >}}
