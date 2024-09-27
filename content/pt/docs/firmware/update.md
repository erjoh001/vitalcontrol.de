---
title: "Atualização de firmware do seu dispositivo"
linkTitle: Update
weight: 4
description: >
  Ao realizar uma atualização de firmware, o firmware do seu dispositivo VitalControl pode ser atualizado para as versões mais recentes disponíveis.
---
Primeiro, certifique-se de que uma [versão de firmware mais recente](../versions/) está disponível para o seu dispositivo e, se necessário, atualize o firmware do seu dispositivo de acordo com as instruções a seguir.

## Acessório necessário {#required-accessory}

Para instalar a atualização no seu dispositivo, você precisa de um pendrive USB duplo (2-em-1 USB stick) Tipo-C/USB 3.0 com um conector USB C e um conector USB A. Tal pendrive USB duplo é entregue junto com o seu dispositivo. Você também pode comprar tal pendrive USB de diferentes fornecedores.

![Dual USB flash drive (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Dual USB flash drive")

## Preparação: baixar o firmware mais recente {#preparation-download-latest-firmware}

1. Insira seu pendrive USB no conector USB do seu computador. Em seguida, crie um novo diretório chamado 'update' no diretório raiz do seu pendrive.

    ![Windows Explorer: USB flash drive with directory 'update'](../images/create-folder-update.png "USB flash drive: directory 'update'")

1. Baixe o [arquivo de firmware](/download/firmware.vcu) (nome do arquivo: `firmware.vcu`) e armazene-o no diretório `update` previamente criado no seu pendrive USB. O arquivo de atualização requer aproximadamente 2,5 MB de espaço de armazenamento no pendrive.

    ![Windows Explorer: flash drive with firmware file 'firmware.vcu'](../images/save-firmware-file.png "Flash drive with firmware file")

1. Crie um [backup de dados][] no seu dispositivo.

    {{% alert title="Info" %}}
O backup de dados é uma medida de precaução recomendada. Todos os dados existentes de animais e do dispositivo serão preservados ao atualizar o firmware do dispositivo VitalControl.
    {{% /alert %}}

[data backup]: {{< relref "../backup/backup/" >}}

## Realizar atualização de firmware {#perform-firmware-update}

1. Abra o item de menu `{{<T "Device" >}}` na tela principal do seu dispositivo VitalControl.


1. Invoque o submenu `{{<T "Service" >}}`, selecione o item do menu `{{<T "FirmwareUpdate" >}}` e confirme com `{{<T "Ok" >}}`. Agora você será solicitado a inserir o pen drive USB que você já preparou:

    ![VitalControl: menu caminho atualização de firmware](../images/firmware-update.png "Atualização de firmware")

1. Insira o pen drive USB (plugue C) no conector na parte inferior do dispositivo e confirme com `{{<T "Ok" >}}`.

    ![VitalControl: Inserir pen drive USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Inserir pen drive USB")

    O dispositivo realiza a atualização automaticamente. Durante a atualização, o display informa sobre o progresso da atualização. Após a conclusão da atualização, o dispositivo reinicia automaticamente e exibe uma mensagem de sucesso após o reinício:

   ![VitalControl: Mensagem de sucesso atualização de firmware](../images/update-success.png "Sucesso na atualização de firmware")

   O novo firmware está agora instalado no seu dispositivo.

