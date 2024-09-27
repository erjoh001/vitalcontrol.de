---
title: Troca de dados entre VitalControl e o software de gestão de rebanho Herde
linkTitle: Troca de dados
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sincronize os animais armazenados no dispositivo VitalControl com os animais gerenciados pelo software *Herde* e transfira os valores medidos registrados com o dispositivo VitalControl para o software *Herde*.
weight: 20
categories: [Troca de dados, DSP Herde]
translationKey: DSPherde/data-exchange
---
Siga os passos abaixo para sincronizar os dados entre o software `Herde` e o dispositivo VitalControl:

### Conectar VitalControl ao PC {#connect-vitalcontrol-to-pc}

1. Conecte o dispositivo VitalControl ao seu computador ou laptop via o cabo USB fornecido.

   ![Conectar VitalControl ao PC ou laptop](/images/synchronisation/connect-to-pc.svg "Conectar VitalControl ao PC")

1. Certifique-se de que seu dispositivo VitalControl está ligado.

### Realizar troca de dados {#perform-data-exchange}

1. No software `Herde`, realize uma troca de dados completa. Dependendo da configuração da sua interface de usuário, você pode invocar essa troca através do item de menu `Troca de dados completa` no menu principal (item de nível superior _Tecnologia_), no menu lateral ou na sua caixa de ferramentas personalizada (horizontal ou vertical).

   ![Software Herde: Iniciando uma troca de dados completa](../screenshots/data-exchange.png "Herde: Iniciando troca de dados")

1. Uma janela pop-up será aberta, listando as acoplamentos de tecnologia estipulados na barra lateral à esquerda. Clique no botão rotulado `VitalControl` para iniciar a troca de dados:

   ![Software Herde, Iniciando troca de dados](../screenshots/start-transfer.png "Herde: Iniciar troca de dados")

1. Na primeira troca de dados, aparecerá um aviso indicando que ainda não há animais registrados no dispositivo VitalControl. Reconheça este aviso com `Sim`. A troca de dados será então iniciada.

   ![Software Herde, troca de dados: aviso](../screenshots/warning.png "Troca de dados: aviso")

1. A troca de dados é um processo em duas etapas: Na primeira etapa ➊ os dados dos animais são transferidos do software `Herde` para o VitalControl. Na segunda etapa ➋, os dados de medição coletados com o VitalControl são transferidos para o software `Herde`. O número de conjuntos de dados importados (animais, partos, alertas e pesos) é listado na janela pop-up:


   ![Troca de dados com o software Herde: Curso das ações](../screenshots/data-transfer.png "Troca de dados: Curso das ações")

1. A conclusão bem-sucedida da troca de dados é sinalizada por meio de um pop-up com uma mensagem de sucesso.

   ![Software Herde: Mensagem de sucesso na troca de dados](../screenshots/success-message.png "Herde: Mensagem de sucesso na troca de dados")

    {{% alert title="Atenção" %}}
Se muitos animais estiverem registrados no dispositivo VitalControl, a troca de dados pode levar algum tempo. O progresso da transferência de dados pode ser visto no display do dispositivo.

![VitalControl, troca de dados: barra de progresso](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: barra de progresso na troca de dados")
    {{% /alert %}}
