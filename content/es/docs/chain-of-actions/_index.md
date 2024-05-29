---
title: "Cadena de acciones: configuración y uso"
linkTitle: "Cadena de acciones"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Realizar múltiples acciones animales de manera consecutiva
categories: [Cadena de acciones]
tags: [Cadena de acciones, Acciones]
translationKey: action-chain
---
## Cadena de acciones {#chain-of-actions}
 
La cadena de acciones te permite llevar a cabo automáticamente varias acciones para un animal una tras otra. Por ejemplo, puedes seleccionar las acciones `{{<T "Temperature" >}}` y `{{<T "Rating" >}}`. Si luego realizas la cadena de acciones, puedes tomar primero la temperatura de tu animal y registrar la calificación inmediatamente después.

### Usar cadena de acciones {#use-chain-of-actions}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Cadena de acciones" />&nbsp; `{{<T "ActionChain" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Escanea un animal usando el transpondedor o confirma con `{{<T "Ok" >}}` y usa las teclas de flecha △ ▽ ◁ ▷ para ingresar la ID del animal deseado.

3. La cadena de acciones ahora se ejecuta. Tan pronto como todas las acciones en la cadena de acciones se hayan llevado a cabo, se puede seleccionar directamente el siguiente animal.

{{< tabpane >}}
{{< tab header="Usar cadena de acciones:" text=true disabled=true />}}
{{% tab header="Escaneo de transpondedor" text=true %}}
![VitalControl: Menú cadena de acciones](images/chainofactions-scan.png "Cadena de acciones")
{{% /tab %}}
{{% tab header="Selección manual de la lista" text=true %}}
![VitalControl: Menú cadena de acciones](images/chainofactions.png "Cadena de acciones")
{{% /tab %}}
{{< /tabpane >}}

### Configurar cadena de acciones {#set-chain-of-actions}

1. En la pantalla principal de tu dispositivo VitalControl, selecciona el ítem del menú &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Cadena de acciones" />&nbsp; `{{<T "ActionChain" >}}` y presiona el botón `{{<T "Ok" >}}`.

2. Usa el botón `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Cadena de acciones" />&nbsp; (`{{<T "Settings" >}}`).

3. Aparece una pantalla superpuesta. Usa las teclas de flecha △ ▽ para elegir entre las acciones listadas del 1 al 4 (puedes realizar hasta cuatro acciones en fila). Usa las teclas de flecha ◁ ▷ para seleccionar la acción deseada para la respectiva acción. Guarda la configuración con la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y volver" />&nbsp;.

4. Si desea restablecer toda la cadena de acciones, seleccione la opción `{{<T "ResetActionChain" >}}` en el submenú utilizando las teclas de flecha △ ▽ y confirme con `{{<T "Ok" >}}`.

    ![VitalControl: Menú cadena de acciones](images/setchainofactions.png "Establecer cadena de acciones")

{{% alert title="Consejo" %}}
Dentro de las acciones individuales, tiene las mismas opciones de configuración que se describen en el capítulo [Acciones](../actions) para cada acción individual.
{{% /alert %}}

{{% alert title="Consejo" %}}
Los símbolos en la pantalla de inicio de la cadena de acciones muestran qué acciones ha configurado y en qué orden.
{{% /alert %}}
