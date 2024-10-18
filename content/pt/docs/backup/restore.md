---
title: "Restaurando um backup de dados"
linkTitle: "Restaurar"
date: 2023-07-20
weight: 20
description: >
 Via uma restauração de dados, todos os dados de um dispositivo VitalControl podem ser restaurados em um dispositivo diferente usando um arquivo de backup.
translationKey: restore
---
{{% usb-drive/en "Para restaurar um backup de dados no seu dispositivo VitalControl," %}}

Nesta unidade flash USB, deve existir um diretório `backup`, que deve conter um **arquivo de backup de dados válido `backup.vcu`**.

![Unidade flash USB com arquivo de backup VitalControl](../images/backup-file.png "Unidade flash USB com arquivo de backup")

{{% alert title="Nota" %}}
Dentro do diretório `backup` da sua unidade flash USB, você pode encontrar vários arquivos de backup com a extensão `.vcu`. O dispositivo VitalControl sempre restaura os dados do backup a partir do arquivo chamado `backup.vcu`, que é sempre o arquivo mais recente. Se você quiser restaurar dados de um arquivo de backup mais antigo (que contém a data do backup no nome do arquivo), você deve renomear este arquivo de backup mais antigo para `backup.vcu` antes de realizar a restauração de dados!
{{% /alert %}}

## Restauração de dados para o dispositivo VitalControl {#data-restoration-to-vitalcontrol-device}

1. Abra o item de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `Dispositivo` na tela principal do dispositivo VitalControl para o qual você deseja restaurar os dados.

2. Acesse o submenu `Gerenciamento de dados` e selecione o item de submenu `Backup de dados` em seguida. Agora selecione o item de menu `Restaurar backup` e confirme com `OK`. Você será solicitado a inserir uma unidade flash USB:

   ![VitalControl: caminho do menu para restauração de dados](../images/restore.png "Restaurando do arquivo de backup")

3. Insira a unidade flash USB (plugue C) no conector na parte inferior do dispositivo.

   ![VitalControl: inserir unidade flash USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Conectar unidade flash USB")

4. Uma vez que o dispositivo detectou a inserção do pen drive, uma janela de confirmação aparecerá. Confirme este popup com `Sim` para iniciar a restauração dos dados. Descompactar e restaurar o backup pode levar um minuto ou mais. Quando a restauração dos dados estiver completa, uma mensagem de sucesso será exibida:


   ![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Os dados de backup foram restaurados com sucesso no dispositivo VitalControl.
