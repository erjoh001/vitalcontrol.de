---
title: Exportación de datos de animales y mediciones al PC de gestión de la granja
linkTitle: Exportación de datos (PC)
date: 2023-07-19
weight: 15
description: >
 Exporta datos de animales y valores de medición desde el dispositivo VitalControl a varios archivos CVS
categories: [Exportación de datos]
translationKey: farmPC
---
Procede de la siguiente manera para exportar datos desde VitalControl a un dispositivo de almacenamiento masivo de tu PC:

### Conectar VitalControl al PC

1. Conecta el dispositivo VitalControl a tu computadora o laptop mediante el cable USB suministrado.

   ![Conectar VitalControl a PC o laptop](/images/synchronisation/connect-to-pc.svg "Conectar VitalControl al PC")

1. Asegúrate de que tu dispositivo VitalControl esté encendido.

### Realizar la exportación de datos

1. Presiona la tecla de Windows para abrir el menú de inicio

1. *Solo Windows 11*: Haz clic en el botón `Todas las aplicaciones`

1. En la lista de tus aplicaciones instaladas, desplázate hacia abajo hasta la letra `U`. Allí deberías encontrar una entrada de menú `Urban VitalControl`. Si es necesario, expande esta entrada para que se muestren todas las subentradas del menú.

   {{% alert title="Atención" %}}
Si no encuentras la entrada `Urban VitalControl` en tu lista de aplicaciones, puede que tengas que [instalar](../vcsynchronizer/installation/) primero el software `VCSynchronizer` en tu PC.
   {{% /alert %}}

1. Haz clic en el elemento de menú `Exportación de datos (CVS)`.

   ![Menú de inicio de Windows, entrada de menú para Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Menú de inicio de Windows, VitalControl")

1. Se inicia el proceso de exportación. Una vez finalizada la exportación de datos, se abre una ventana del Explorador que muestra el directorio de datos local con los cuatro [archivos de exportación](../../data-export/export-files/) recién creados.

   ![Directorio de datos local con archivos de exportación](../../data-export/images/export-files.png "Archivos de exportación, almacenados localmente")

   {{% alert title="Nota" %}}
  Puedes abrir cada uno de estos cuatro [archivos de exportación](../../data-export/export-files/) en un programa de hoja de cálculo de tu elección (como [Microsoft Excel](https://products.office.com/excel) o [OpenOffice Calc](https://www.openoffice.org/)) y realizar un análisis avanzado de los datos allí. Como ejemplo, se muestra a continuación la vista de la tabla `animals.csv` en un programa de hoja de cálculo:

![Tabla de datos de animales exportada abierta en un software de hoja de cálculo](../../data-export/images/animals.png "Software de hoja de cálculo con datos de animales")
   {{% /alert %}}
