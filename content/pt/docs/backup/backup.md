---
title: "Criando um backup de dados"
linkTitle: "Backup"
date: 2023-07-20
weight: 20
description: >
  Por meio de um backup de dados, é criado um arquivo de backup que contém todos os dados armazenados no dispositivo VitalControl.
categories: [Backup de dados]
tags: [arquivo de backup, pen drive USB]
translationKey: backup
---
{{% usb-drive/en "Para realizar um backup de dados do seu dispositivo," %}}

## Realizar backup de dados {#perform-data-backup}

1. Abra o item de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Device" >}}" /> `{{< T "Device" >}}` na tela principal do seu dispositivo VitalControl.

2. Acesse o submenu `{{< T "DataManagement" >}}` e selecione o item de submenu `{{< T "DataBackup" >}}` em seguida. Agora selecione o item de menu `{{< T "CreateBackup" >}}` e confirme com `OK`. Você será solicitado a inserir um pen drive USB:

   ![VitalControl: caminho do menu backup de dados](../images/backup.png "Acessar backup de dados")

3. Insira o pen drive USB (plugue C) no conector na parte inferior do dispositivo.

   ![VitalControl: inserir pen drive USB](/images/firmware/update/plug-in-dual-usb-stick.svg "Inserir pen drive USB")

4. Uma vez que o dispositivo detecte a inserção do pen drive, o backup de dados será iniciado automaticamente. Coletar, comprimir e gravar os dados do backup pode levar um minuto ou mais. Quando o backup estiver concluído, uma mensagem de sucesso será exibida:

   ![VitalControl: mensagem de sucesso do backup](../images/backup-done.png "Sucesso no backup de dados")

5. O backup de dados agora está criado. Você encontrará o arquivo criado `backup.vcu` no diretório `backup` do seu pen drive USB. O arquivo de backup requer aproximadamente 1 MB de espaço de armazenamento no pen drive.

   ![Pen drive USB com arquivo de backup VitalControl](../images/backup-file.png "Pen drive USB com arquivo de backup")

   {{% alert title="Dica" %}}
  Se um arquivo `backup.vcu` já existir no diretório `backup` do seu pen drive USB, este arquivo será renomeado. O novo nome do arquivo é composto pela string inicial `backup` e a data e hora em que o arquivo de backup foi criado (por exemplo, `backup_2023-07-17_12-50-37.vcb`). O arquivo de backup recém-gravado sempre será nomeado `backup.vcu`.
    {{% /alert %}}


6. O arquivo de backup criado pode ser usado para [restaurar](../restore) os dados armazenados em qualquer dispositivo VitalControl, se necessário.
