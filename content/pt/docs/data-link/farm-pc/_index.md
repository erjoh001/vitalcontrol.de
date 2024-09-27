---
title: Exportação de dados de animais e medições para o PC de gestão da fazenda
linkTitle: Exportação de dados (PC)
date: 2023-07-19
weight: 15
description: >
 Exportar dados de animais e valores de medições do dispositivo VitalControl para vários arquivos CVS
categories: [Exportação de dados]
translationKey: farmPC
---
Proceda da seguinte forma para exportar dados do VitalControl para um dispositivo de armazenamento em massa do seu PC:

### Conectar VitalControl ao PC {#connect-vitalcontrol-to-pc}

1. Conecte o dispositivo VitalControl ao seu computador ou laptop via o cabo USB fornecido.

   ![Conectar VitalControl ao PC ou laptop](/images/synchronisation/connect-to-pc.svg "Conectar VitalControl ao PC")

1. Certifique-se de que seu dispositivo VitalControl esteja ligado.

### Realizar exportação de dados {#perform-data-export}

1. Pressione a tecla Windows para abrir o menu Iniciar

1. *Somente no Windows 11*: Clique no botão `Todos os Aplicativos`

1. Na lista de seus aplicativos instalados, role para baixo até a letra `U`. Lá você deve encontrar uma entrada de menu `Urban VitalControl`. Se necessário, expanda esta entrada para que todas as subentradas de menu sejam exibidas.

   {{% alert title="Atenção" %}}
Se você não conseguir encontrar a entrada `Urban VitalControl` na sua lista de aplicativos, pode ser necessário [instalar](../vcsynchronizer/installation/) o software `VCSynchronizer` no seu PC primeiro.
   {{% /alert %}}

1. Clique no item de menu `Exportação de dados (CVS)`.

   ![Menu Iniciar do Windows, entrada de menu para Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Menu iniciar do Windows, VitalControl")

1. O processo de exportação é iniciado. Uma vez que a exportação de dados é concluída, uma janela do Explorer é aberta exibindo o diretório de dados local com os quatro [arquivos de exportação](../../data-export/export-files/) recém-criados.

   ![Diretório de dados local com arquivos de exportação](../../data-export/images/export-files.png "Arquivos de exportação, armazenados localmente")

   {{% alert title="Nota" %}}
  Você pode abrir cada um desses quatro [arquivos de exportação](../../data-export/export-files/) em um programa de planilhas de sua escolha (como [Microsoft Excel](https://products.office.com/excel) ou [OpenOffice Calc](https://www.openoffice.org/)) e realizar análises avançadas dos dados lá. Como exemplo, a visualização da tabela `animals.csv` em um programa de planilhas é mostrada abaixo:


  ![Tabela de dados de animais exportada aberta em um software de planilha](../../data-export/images/animals.png "Software de planilha com dados de animais")
   {{% /alert %}}
