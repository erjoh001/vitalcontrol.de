---
title: "Últimas versões de firmware"
linkTitle: "Últimas versões"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Lista das versões atuais de firmware para o dispositivo VitalControl.
---

## Determinar as versões de firmware instaladas no seu dispositivo {#determine-firmware-versions-installed-on-your-device}

1. Abra o item de menu <img src="/icons/device.svg" width="25" align="bottom" alt="Device" /> `{{<T "Device" >}}` na tela principal do seu dispositivo VitalControl.

2. Acesse o submenu `{{<T "Info" >}}`, selecione o item de menu `{{<T "Software" >}}` e confirme com `{{<T "Ok" >}}`. Uma janela pop-up será aberta listando as versões de software atualmente instaladas no seu dispositivo:

![VitalControl: determine firmware versions](../images/firmware-versions.png "Display firmware versions")

## Últimas versões de firmware: {#latest-firmware-versions}

A tabela a seguir lista as versões atuais de firmware:

|                 | GUI-Firmware  | Middleware  | Bootloader |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versão**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Date**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Dica" %}}
Se você sentir falta de novos recursos no seu dispositivo ou enfrentar problemas de estabilidade, é recomendável [atualizar](../update/) o firmware do seu dispositivo para a versão mais recente lançada.
{{% /alert %}}
