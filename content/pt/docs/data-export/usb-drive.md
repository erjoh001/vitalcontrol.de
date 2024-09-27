---
title: Exportação de dados para pen drive USB
linkTitle: Para pen drive USB
date: 2023-07-20
weight: 10
description: >
  Exportar arquivos de dados CVS contendo dados de animais e valores de medição armazenados no dispositivo VitalControl para um pen drive USB.
categories: [Exportação de dados]
tags: [Arquivos CSV, Pen drive USB]
translationKey: data-export/usb-drive
---
{{% usb-drive/en "In order to perform an export of your device data," %}}

## Realizar exportação de dados {#perform-data-export}

1. Abra o item de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` na tela principal do seu dispositivo VitalControl.

2. Acesse o submenu `{{<T "DataManagement" >}}`, selecione o item de menu `{{<T "AnimalData" >}}` e confirme com `{{<T "Ok" >}}`.

3. Outro submenu será aberto. Selecione o item de menu `{{<T "ExportAnimalData" >}}` e confirme com `{{<T "Ok" >}}`.

4. Agora você será solicitado a inserir um pen drive USB:

   ![VitalControl: Menu path data export](../images/data-export.png "Invoke data export")

5. Insira o pen drive USB (plugue C) no conector na parte inferior do dispositivo.

   ![VitalControl: insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

6. Assim que o dispositivo detectar a inserção do pen drive, a exportação de dados será iniciada automaticamente. A gravação dos dados de backup pode levar alguns segundos. Quando a exportação de dados for concluída, uma mensagem de sucesso será exibida:

   ![VitalControl: success message data export](../images/success-data-export.png "Success data export")

7. A exportação de dados está agora completa. Você encontrará os quatro [arquivos exportados](../export-files/) criados dentro do diretório `export-csv` no seu pen drive USB.

   ![USB flash drive with export files VitalControl](../images/export-files.png "Export files on USB flash drive")

   {{% alert title="Notes" %}}
  - Para evitar a sobrescrita acidental dos arquivos exportados, o nome de cada arquivo de exportação sempre inclui a data e hora em que o arquivo foi criado. Certifique-se de usar a versão mais recente dos arquivos exportados se você tiver exportado dados de animais várias vezes.
  - O tamanho dos arquivos exportados depende do número de animais no VitalControl e do número de medições realizadas. Em geral, os arquivos exportados ocupam apenas alguns kB de espaço de armazenamento no pen drive USB.
   {{% /alert %}}

Por favor, forneça o conteúdo Markdown que você gostaria de traduzir.
