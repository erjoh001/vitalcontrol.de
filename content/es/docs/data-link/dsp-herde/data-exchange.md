---
title: Intercambio de datos entre VitalControl y el software de gestión de ganado Herde
linkTitle: Intercambio de datos
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sincroniza los animales almacenados en el dispositivo VitalControl con los animales gestionados por el software *Herde* y transfiere los valores medidos registrados con el dispositivo VitalControl al software *Herde*.
weight: 20
categorías: [Intercambio de datos, DSP Herde]
translationKey: DSPherde/data-exchange
---
Sigue los pasos a continuación para sincronizar datos entre el software `Herde` y el dispositivo VitalControl:

### Conectar VitalControl al PC

1. Conecta el dispositivo VitalControl a tu computadora o laptop mediante el cable USB suministrado.

   ![Conectar VitalControl a PC o laptop](/images/synchronisation/connect-to-pc.svg "Conectar VitalControl al PC")

1. Asegúrate de que tu dispositivo VitalControl esté encendido.

### Realizar el intercambio de datos

1. Dentro del software `Herde`, realiza un intercambio de datos completo. Dependiendo de la configuración de tu interfaz de usuario, puedes invocar este intercambio a través del elemento del menú `Intercambio de datos completo` en el menú principal (elemento de nivel superior _Tecnología_), en el menú lateral o en tu caja de herramientas personalizada (horizontal o vertical).

   ![Software Herde: Activar un intercambio de datos completo](../screenshots/data-exchange.png "Herde: Activar intercambio de datos")

1. Se abre un pop-up, listando las acoplamientos de tecnología estipulados en el menú lateral a la izquierda. Haz clic en el botón etiquetado `VitalControl` para iniciar el intercambio de datos:

   ![Software Herde, Iniciando el intercambio de datos](../screenshots/start-transfer.png "Herde: Iniciar intercambio de datos")

1. La primera vez que se realiza el intercambio de datos aparece una advertencia, indicando que no hay animales registrados en el dispositivo VitalControl aún. Acepta este aviso con `Sí`. Entonces se inicia el intercambio de datos.

   ![Software Herde, intercambio de datos: advertencia](../screenshots/warning.png "Intercambio de datos: advertencia")

1. El intercambio de datos es un proceso de dos pasos: En el primer paso ➊ los datos de los animales se transfieren desde el software `Herde` al VitalControl. En el segundo paso ➋, los datos de medición recogidos con el VitalControl se transfieren al software `Herde`. El número de conjuntos de datos importados (animales, partos, alertas y pesos) se lista en el pop-up:

![Intercambio de datos con el software Herde: Curso de acciones](../screenshots/data-transfer.png "Intercambio de datos: Curso de acciones")

1. La finalización exitosa del intercambio de datos se señala mediante un pop-up con un mensaje de éxito.

   ![Software Herde: Mensaje de éxito en el intercambio de datos](../screenshots/success-message.png "Herde: Mensaje de éxito en el intercambio de datos")

    {{% alert title="Atención" %}}
Si se registran muchos animales en el dispositivo VitalControl, el intercambio de datos puede tardar algún tiempo. El progreso de la transferencia de datos se puede ver en la pantalla del dispositivo.

![VitalControl, intercambio de datos: barra de progreso](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: barra de progreso en el intercambio de datos")
    {{% /alert %}}
