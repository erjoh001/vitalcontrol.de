---
title: Em observação
linkTitle: Em observação
slug: on-watch
weight: 70
description: >
 Coloque animais na lista de observação ou remova-os.
date: 2023-07-26
categories: [Ações]
tags: [Ações, em observação]
translationKey: actions/on-watch
---

## Em observação {#on-watch}

Com a ação `{{<T "OnWatch" >}}` você coloca animais na lista de observação ou os remove dela. A lista de observação ajuda você a encontrar animais conspícuos mais rápida e facilmente, facilitando suas verificações diárias de rotina. Para aplicar a ação `{{<T "OnWatch" >}}`, proceda da seguinte forma:

1. Na tela principal do seu dispositivo VitalControl, selecione o item do menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Ações" /> `{{<T "Actions" >}}` e pressione o botão `{{<T "Ok" >}}`.

2. Escaneie um animal usando o transponder ou selecione um animal da lista. Confirme com `{{<T "Ok" >}}` e selecione um animal com as teclas de seta △ ▽. Confirme com `{{<T "Ok" >}}`.

3. Um submenu com as ações do animal será aberto. Use as teclas de seta ◁ ▷ △ ▽ para selecionar a ação &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="Em observação" /> `{{<T "OnWatch" >}}` e confirme com `{{<T "Ok" >}}`.

4. Uma notificação aparecerá informando que o animal foi adicionado com sucesso à lista de observação.

5. Você pode remover o animal da lista de observação aplicando novamente a ação &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="Não em observação" />  `{{<T "OnWatch" >}}`. Se você adiciona ou remove o animal da lista de observação usando a ação `{{<T "OnWatch" >}}`, isso será indicado com um pequeno sinal ⊕ ou ⊖.

{{< tabpane >}}
{{< tab header="Em observação:" text=true disabled=true />}}
{{% tab header="Escaneamento de transponder" text=true %}}
![VitalControl: Menu Ações Em observação](../images/onwatch-scan.png "Em observação")
{{% /tab %}}
{{% tab header="Seleção manual da lista" text=true %}}
![VitalControl: Menu Ações Em observação](../images/onwatch.png "Em observação")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Dica" %}}
Se esta ação não estiver disponível, provavelmente a ação foi desativada! Ative a ação no menu de [configurações de ação](../setting/). Alternativamente, redefinir todas as ações trará essa ação de volta.
{{% /alert %}}

```markdown
---
translationKey: "GettingStarted"
slug: "/getting-started"
---

# Getting Started

Bem-vindo ao nosso guia de início rápido! Este documento irá ajudá-lo a configurar e começar a usar nosso produto rapidamente.

## Requisitos

Antes de começar, certifique-se de que você tem os seguintes requisitos:

- Node.js versão 12 ou superior
- npm versão 6 ou superior
- Um editor de texto como o VSCode

## Instalação

Para instalar o nosso produto, siga os passos abaixo:

```bash
npm install -g nosso-produto
```

## Configuração

Depois de instalar, você precisará configurar o produto. Crie um arquivo de configuração chamado `config.json` no diretório raiz do seu projeto:

```json
{
  "apiKey": "sua-chave-api",
  "projectId": "seu-id-projeto"
}
```

## Uso

Agora você está pronto para usar o produto. Execute o seguinte comando para iniciar:

```bash
nosso-produto start
```

<Notes>
  Certifique-se de substituir `"sua-chave-api"` e `"seu-id-projeto"` pelos valores reais fornecidos a você.
</Notes>

## Próximos Passos

Para mais informações sobre como usar o produto, consulte a [documentação completa](https://example.com/docs).

Esperamos que você aproveite usar nosso produto!
```
