---
title: "Leitura RFID: teste de alcance e diagnóstico de transponders"
linkTitle: RFID scan
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnóstico, Leitura RFID]
description: >
  Verifique o alcance do seu leitor RFID ou exiba o protocolo de leitura e os números armazenados em transponders desconhecidos.
translationKey: diagnosis/rfid-scan
weight: 20
---

Usando o menu 'Teste de alcance' você pode determinar se o dispositivo VitalControl pode ler os transponders que você possui. Além de verificar a compatibilidade, você também pode determinar convenientemente o protocolo de transmissão usado por esses transponders e exibir o número armazenado no transponder.

## Realizar teste de alcance {#perform-range-test}

1. Abra o item de menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` na tela principal do seu dispositivo VitalControl.

1. Acesse o submenu `{{<T "Service" >}}`, selecione o item de menu `{{<T "RangeTest" >}}` e confirme com `{{<T "Ok" >}}`. Uma tela de leitura animada será exibida agora.

    ![VitalControl: Caminho do menu Teste de alcance do leitor RFID](../images/rangetest.png "Teste de alcance do leitor RFID")

1. Aproxime lentamente seu transponder da cabeça de leitura do dispositivo VitalControl. Para obter um bom resultado de leitura, o transponder deve estar alinhado horizontalmente com a cabeça de leitura do dispositivo VitalControl.

    ![VitalControl: aproxime corretamente o transponder da cabeça de leitura RFID](/images/diagnosis/transponderscan.svg "Leitura correta do transponder")

1. Assim que o leitor RFID detectar o transponder, um alarme vibratório será acionado e a cor de fundo da imagem do transponder exibida na tela mudará para verde:

   ![VitalControl: Teste de alcance: Transponder detectado](../images/transponder-detected.png "Transponder detectado")

1. Mova o transponder para frente e para trás várias vezes na borda do campo de leitura. Desta forma, você pode determinar o alcance de leitura do leitor RFID em combinação com os transponders que você está usando.

## Verificação de transponder {#transponder-check}

Realizando o teste de alcance descrito acima, você também pode obter informações sobre transponders de diferentes origens:

### Brincos de transponder oficiais {#official-transponder-ear-tags}

1. Se você usar brincos de transponder para seus animais, nos quais o número oficial de brinco de 15 dígitos do animal está codificado, as seguintes informações serão exibidas na tela assim que o transponder for lido:

    - ID de 15 dígitos oficialmente atribuído ao seu animal pelo serviço nacional de identificação animal.
    - País em que o negócio está localizado
    - País em que o negócio está localizado (somente fazendas alemãs)
    - Protocolo de transmissão usado (FDX ou HDX)
    <br>

    ![VitalControl: verificação do brinco de transponder](../images/transponder-official.png "Info brinco de transponder oficial")

### Transponders de fornecedores terceiros {#transponders-from-third-party-vendors}

1. Se você usar transponders de fornecedores terceiros, como Urban, para a identificação eletrônica de seus animais, as seguintes informações serão exibidas na tela assim que o transponder for lido:

    - ID codificado no transponder, o número de dígitos varia dependendo do fabricante
    - Fabricante do transponder (se armazenado no transponder)
    - Protocolo de transmissão usado (FDX ou HDX)
    <br>

    ![VitalControl: verificação do transponder do fabricante](../images/transponder-manufacturer.png "Info transponder do fabricante")
