---
title: "Recoleccion de datós"
linkTitle: "Recoleccion de datós"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: data-acquisition
description: >
 Almacenamiento de configuraciones relevantes para la recolección de datos de animales
categories: [configuraciones]
tags: [configuraciones, Recoleccion de datós]
translationKey: settings/data-acquisition
maphilight: true
---
## Visión general

El siguiente gráfico enumera las configuraciones disponibles sobre el registro de datos de animales:

<img src="../images/animaldataacquisition.png" alt="Recoleccion de datós de animales" title="Recoleccion de datós de animales" usemap="#workmap-overview" class="maphilight" />

<map name="workmap-overview">
  <area shape="rect" coords="3,40,239,80" alt="Registro de peso" title="Submenú: Configuraciones para el registro de peso&#10;Clic del ratón: abrir documentación" href="#configuraciones-registro-de-peso">
  <area shape="rect" coords="3,80,239,160" alt="Modo de calificación de animales" title="Establecer el modo de calificación de animales&#10;Clic del ratón: abrir documentación" href="#modo-de-evaluación-de-animales">
  <area shape="rect" coords="3,160,239,240" alt="Periodo de control de longitud en vacas" title="Establecer la longitud del periodo de control para vacas&#10;Clic del ratón: abrir documentación" href="#período-de-control-de-vacas">

  <area shape="rect" coords="2,282,125,318" alt="Atrás" title="Retroceder un nivel" href="/es/docs/settings/">
</map>

{{% alert title="Consejo" %}}
Mueva el puntero del ratón sobre un símbolo en el gráfico de abajo y déjelo reposar por un momento. Aparecerá una descripción emergente, presentando información sobre la configuración respectiva. Si hace clic en una de las líneas, será redirigido a una descripción de la configuración respectiva.
{{% /alert %}}

## Configuraciones *Registro de peso*

El siguiente gráfico enumera las configuraciones disponibles sobre el registro de peso de los animales:

<img src="../images/weightrecording.png" alt="Ítems del submenú configuraciones para el registro de peso" title="Configuraciones de registro de peso" usemap="#workmap-weight" class="maphilight" />

<map name="workmap-weight">
  <area shape="rect" coords="1,40,230,199" alt="Valores umbral evaluación ganancia diaria de peso" title="Establecer los valores umbral para la evaluación de la ganancia diaria de peso&#10;Clic del ratón: abrir documentación" href="#evaluación-del-aumento-diario-de-peso-valores-umbral">
  <area shape="rect" coords="1,200,230,280" alt="Peso al nacer" title="Establecer el peso al nacer propuesto al registrar un nuevo animal&#10;Clic del ratón: abrir documentación" href="#peso-al-nacer">
  <area shape="rect" coords="1,280,230,360" alt="Ganancia diaria de peso promedio" title="Establecer la ganancia diaria de peso promedio utilizada al estimar el peso de los animales&#10;Clic del ratón: abrir documentación" href="#ganancia-diaria-promedio-de-peso">
  <area shape="rect" coords="1,360,230,440" alt="Precisión en el registro de peso" title="Establecer la precisión del registro de peso&#10;Clic del ratón: abrir documentación" href="#precisión-del-registro-de-peso">
</map>

### Evaluación del aumento diario de peso: Valores umbral

{{% alert title="Consejo" %}}
El campo rojo muestra el área de "aumento de peso críticamente bajo". El campo amarillo muestra el área de "aumento de peso subóptimo".
{{% /alert %}}

Para ajustar los valores umbral para la evaluación del aumento diario de peso, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `Ajustes` y presione el botón `OK`.

2. Se abre un submenú en el que se muestran varias configuraciones. Utilice las teclas de flecha △ ▽ para seleccionar `Recoleccion de datós`. Confirme con `OK`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `Registro de peso`, `Evaluación de animales` y `Período de control de vacas`. Seleccione `Registro de peso` y confirme con `OK`.

4. El campo de preferencia `Ganancia diaria` se selecciona automáticamente. Utilice las teclas de flecha ◁ ▷ para seleccionar la especie animal deseada. Confirme con `OK`. Alternativamente, puede usar el icono de lápiz con <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Editar" /> la tecla `F3` para saltar directamente a la edición de las áreas roja y amarilla.

5. Utilice las teclas de flecha △ ▽ para seleccionar el aumento deseado "mayor que" o "igual a" g/día en las áreas roja y amarilla. Use las teclas `F2`/`F3` 🡄 🡆 o las teclas de flecha ◁ ▷ para seleccionar entre las áreas roja y amarilla.

6. Una vez que haya establecido el aumento deseado "mayor que" o "igual a" g/día, use la tecla `F1` <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Salir" /> o confirme con `OK` para volver a `Ganancia diaria`.

    ![VitalControl: configuraciones del menú aumento diario de peso](../images/dailyweightgain.png "Aumento diario de peso")

### Peso al nacer

El dispositivo utiliza el peso al nacer almacenado aquí en la configuración como el valor predeterminado cuando se crean nuevos animales. Para poder seleccionar más rápidamente el peso al nacer individual de un animal recién nacido, puede necesitar ajustar este valor predeterminado para su granja. Para ajustar el valor del `peso al nacer`, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Ajustes` y presione el botón `OK`.

2. Se abre un submenú en el que se muestran varias configuraciones. Utilice las teclas de flecha △ ▽ para seleccionar `Recoleccion de datós`. Confirme con `OK`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `Registro de peso`, `Evaluación de animales` y `Período de control de vacas`. Seleccione `Registro de peso` y confirme con `OK`.

4. Utilice las teclas de flecha △ ▽ para seleccionar el campo de configuración `Peso al nacer` y use las teclas de flecha ◁ ▷ para establecer el peso al nacer deseado. El dispositivo ahora utiliza el peso al nacer definido aquí como estándar al crear nuevos animales. El peso al nacer individual de un animal recién nacido puede entonces seleccionarse más rápidamente.

    ![VitalControl: configuración del menú peso al nacer](../images/birthweight.png "Peso al nacer")

{{% alert title="Advertencia" color="warning" %}}
El peso al nacer estándar es solo un valor aproximado, que debe ajustarse individualmente al crear un nuevo animal.
Si no desea hacer este ajuste o si crea animales automáticamente [en segundo plano](../animal-registration/#autoregistro), no se debe consultar ni guardar el peso al nacer al crear un nuevo animal. Esto se puede definir en la configuración para [registro de animales](../animal-registration/#configurar-pesos-registrados).
{{% /alert %}}

{{% alert title="Valores predeterminados para pesos al nacer:" %}}

| Tipo de nuevo animal          |  Cordero       | Ternero       |
|-------------------------------|----------------|---------------| 
| Valor predeterminado *peso al nacer*: | 4 kg           | 40 kg         |
| Rango de valores:             | 1,0 hasta 99 kg| 1,0 hasta 99 kg |
{{% /alert %}}

### Ganancia diaria promedio de peso

{{% alert title="Explicación" %}}
Cuando [se pesa](../../actions/record-weight/) a un animal, el aumento diario definido se utiliza para el cálculo del valor de peso sugerido durante el pesaje del animal. Si el valor de peso sugerido es demasiado bajo o demasiado alto para la mayoría de los animales a pesar, debería ajustar el valor definido hacia abajo o hacia arriba, respectivamente, para acortar el tiempo necesario para ajustar el valor del peso con las teclas de flecha.
{{% /alert %}}

Para configurar la `ganancia diaria promedio de peso` utilizada en el cálculo del peso aproximado de un animal, proceda de la siguiente manera.

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Ajustes` y presione el botón `OK`.

2. Se abre un submenú en el que se muestran varias configuraciones. Utilice las teclas de flecha △ ▽ para seleccionar `Recoleccion de datós`. Confirme con `OK`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `Registro de peso`, `Evaluación del animal` y `Período de control de vacas`. Seleccione `Registro de peso` y confirme con `OK`.

4. Utilice las teclas de flecha △ ▽ para seleccionar el campo de configuración `Ganancia diaria promedio`. Utilice las teclas de flecha ◁ ▷ para establecer el aumento diario promedio deseado en g/día. El dispositivo ahora utiliza la ganancia diaria promedio definida aquí como estándar para la ganancia diaria esperada de los animales.

    ![VitalControl: configuraciones del menú ganancia diaria promedio de peso](../images/averagedailyweightgain.png "Ganancia diaria promedio de peso")

### Precisión del registro de peso

{{% alert title="Explicación" %}}
Dependiendo del caso de uso y la especie animal (*cordero*, *ternero*, *vaca*), hay diferentes requisitos respecto a la resolución del valor del peso a registrar (precisión de *10 g*, *100 g* o *1 kg*). Para cumplir con estos requisitos se requiere utilizar la configuración de *Máxima precisión*.
{{% /alert %}}

La tabla a continuación muestra la precisión del registro de peso dependiendo del rango de peso y la configuración estipulada para *Máxima precisión*:

| Configuración *Máxima precisión*:               |  10 g | 100 g | 1 kg |
|-------------------------------------------------|-------|-------|------|
| Precisión en el rango de *0 a 9,9 kg*:          | 10 g  | 100 g | 1 kg |
| Precisión en el rango de *10 a 49,9 kg*:        | 100 g | 100 g | 1 kg |
| Precisión en el rango de *50 a 99,9 kg*:        | 500 g | 500 g | 1 kg |
| Precisión para valores *≥ 100 kg*:              | 1 kg  | 1 kg  | 1 kg |

Para configurar la máxima precisión al registrar pesos de animales con su dispositivo, proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Ajustes` y presione el botón `OK`.

2. Se abre un submenú en el que se muestran varias configuraciones. Utilice las teclas de flecha △ ▽ para seleccionar `Recoleccion de datós`. Confirme con `OK`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `Registro de peso`, `Evaluación de animales` y `Período de control vacas`. Seleccione `Registro de peso` y confirme con `OK`.

4. Utilice las teclas de flecha △ ▽ para seleccionar el campo de configuración `Precisión máxima`. Utilice las teclas de flecha ◁ ▷ para establecer la máxima precisión deseada. La precisión del registro de peso en el dispositivo ahora sigue la configuración estipulada.

    ![VitalControl: ruta del menú configuraciones máxima precisión registro de peso](../images/precisionweightrecording.png "Estipular máxima precisión del registro de peso.")

<br>
Guarde las configuraciones y regrese al menú principal `Recoleccion de datós` presionando la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" />&nbsp;.

## Modo de evaluación de animales

{{% alert title="Explicación" %}}
En el modo simple, solo se consulta el estado general durante la evaluación del animal (verde/amarillo/rojo). En la evaluación extendida, se consultan 4 categorías de evaluación: estado general, consumo de alimento, diarrea y enfermedad respiratoria.
{{% /alert %}}

Para configurar la `Evaluación de animales` en su dispositivo, proceda de la siguiente manera.

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `Ajustes` y presione el botón `OK`.

2. Se abre un submenú en el que se muestran varias configuraciones. Utilice las teclas de flecha △ ▽ para seleccionar `Recoleccion de datós`. Confirme con `OK`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `Registro de peso`, `Evaluación de animales` y `Período de control vacas`. Seleccione `Evaluación de animales` y confirme con `OK`.

4. Utilice las teclas de flecha ◁ ▷ para establecer la calificación deseada de los animales.

    ![VitalControl: configuración del menú calificación promedio de animales](../images/raitingofanimals.png "Calificación de animales")

## Período de control de vacas

{{% alert title="Explicación" %}}
Al manejar vacas, se considera una rutina de mejores prácticas revisar a los animales diariamente durante varios días después del parto, incluyendo tomar su temperatura. La duración de este período de control varía considerablemente de granja a granja. Por esta razón, la longitud del período de control puede ajustarse a un valor entre 3 y 14 días en las configuraciones de VitalControl. El valor establecido para el período de control de vacas determina el número de columnas del gráfico de columnas mostrado para cada animal en la [lista de vacas](../../lists/fresh-cows/).
{{% /alert %}}

Para configurar la longitud del período de control para sus vacas proceda de la siguiente manera:

1. En la pantalla principal de su dispositivo VitalControl, seleccione el elemento del menú <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `Ajustes` y presione el botón `OK`.

2. Se abre un submenú en el que se muestran varias configuraciones. Utilice las teclas de flecha △ ▽ para seleccionar `Recoleccion de datós`. Confirme con `OK`.

3. Se abre otro submenú en el que puede usar las teclas de flecha △ ▽ para alternar entre los campos de configuración para `Registro de peso`, `Calificación de animal` y `Período de control vacas`. Seleccione `Período de control vacas` y confirme con `OK`.

4. Utilice las teclas de flecha ◁ ▷ para establecer la duración deseada del período de control en días post parto.

    ![VitalControl: configuración del menú período de control vacas](../images/controlperiodfreshcows.png "Período de control vacas")

<br>

Guarde la configuración y regrese al menú principal <img src="/icons/gear.svg" width="25" align="bottom" alt="Configuración" /> `Configuración` presionando la tecla `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Guardar y regresar" />&nbsp;.
