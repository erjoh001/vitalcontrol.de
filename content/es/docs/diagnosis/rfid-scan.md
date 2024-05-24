---
title: "Escaneo RFID: prueba de alcance y diagnóstico de transpondedores"
linkTitle: Escaneo RFID
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnóstico, Escaneo RFID]
description: >
  Verifica el alcance de tu escáner RFID o muestra el protocolo de lectura y los números almacenados en transpondedores desconocidos.
translationKey: diagnosis/rfid-scan
weight: 20
---

Utilizando el menú 'Prueba de alcance', puedes determinar si el dispositivo VitalControl puede leer los transpondedores que tienes a mano. Además de verificar la compatibilidad, también puedes determinar de manera conveniente el protocolo de transmisión utilizado por estos transpondedores y mostrar el número almacenado en el transpondedor.

## Realizar prueba de alcance {#perform-range-test}

1. Abre el elemento del menú &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Dispositivo" /> `Dispositivo` en la pantalla principal de tu dispositivo VitalControl.

1. Invoca el submenú `Servicio`, selecciona el elemento del menú `Prueba de alcance` y confirma con `OK`. Ahora se muestra una pantalla de escaneo animada.

    ![VitalControl: Camino del menú Prueba de alcance escáner RFID](../images/rangetest.png "Prueba de alcance escáner RFID")

1. Acercar lentamente tu transpondedor a la cabeza de lectura del dispositivo VitalControl. Para lograr un buen resultado de lectura, el transpondedor debe estar alineado horizontalmente con la cabeza de lectura del dispositivo VitalControl.

    ![VitalControl: acercar correctamente el transpondedor a la cabeza de lectura RFID](/images/diagnosis/transponderscan.svg "Escaneo correcto de transpondedor")

1. Tan pronto como el escáner RFID detecte el transpondedor, se activará una alarma de vibración y el color de fondo de la imagen del transpondedor que se muestra en la pantalla cambiará a verde:

   ![VitalControl: Prueba de alcance: Transpondedor detectado](../images/transponder-detected.png "Transpondedor detectado")

1. Mueve el transpondedor hacia adelante y hacia atrás varias veces en el borde del campo de lectura. De esta manera, puedes determinar el rango de lectura del escáner RFID en combinación con los transpondedores que estás utilizando.

## Verificación de transpondedor {#transponder-check}

Realizando la prueba de alcance descrita anteriormente, también puedes obtener información sobre transpondedores de diferentes orígenes:

### Etiquetas oficiales de oreja con transpondedor {#official-transponder-ear-tags}

1. Si utiliza etiquetas de oreja con transpondedor para sus animales, en las cuales se codifica el número de etiqueta de oreja de 15 dígitos asignado oficialmente al animal, se mostrará la siguiente información en la pantalla una vez que se haya leído el transpondedor:

    - ID de 15 dígitos asignado oficialmente a su animal por su servicio nacional de identificación de animales.
    - País en el que se encuentra la empresa
    - País en el que se encuentra la empresa (solo granjas alemanas)
    - Protocolo de transmisión utilizado (FDX o HDX)
    <br>

    ![VitalControl: verificación de etiqueta de oreja con transpondedor](../images/transponder-official.png "Info etiqueta de oreja con transpondedor oficial")

### Transpondedores de proveedores terceros {#transponders-from-third-party-vendors}

1. Si utiliza transpondedores de proveedores terceros, como Urban, para la identificación electrónica de sus animales, se mostrará la siguiente información en la pantalla una vez que se haya leído el transpondedor:

    - ID codificado en el transpondedor, el número de dígitos varía dependiendo del fabricante
    - Fabricante del transpondedor (si está almacenado en el transpondedor)
    - Protocolo de transmisión utilizado (FDX o HDX)
    <br>

    ![VitalControl: verificación de transpondedor de fabricante](../images/transponder-manufacturer.png "Info transpondedor de fabricante")

