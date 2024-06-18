---
title: Na obserwacji
linkTitle: Na obserwacji
slug: on-watch
weight: 70
description: >
 Umieść zwierzęta na liście obserwacyjnej lub usuń je z niej.
date: 2023-07-26
categories: [Akcje]
tags: [Akcje, na obserwacji]
translationKey: actions/on-watch
---

## Na obserwacji {#on-watch}

Za pomocą akcji `{{<T "OnWatch" >}}` umieszczasz zwierzęta na liście obserwacyjnej lub usuwasz je z niej. Lista obserwacyjna pomaga szybciej i łatwiej znaleźć podejrzane zwierzęta, co ułatwia codzienne kontrole. Aby zastosować akcję `{{<T "OnWatch" >}}`, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Akcje" /> `{{<T "Actions" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj zwierzę za pomocą transpondera lub wybierz zwierzę z listy. Potwierdź przyciskiem `{{<T "Ok" >}}` i wybierz zwierzę za pomocą klawiszy strzałek △ ▽. Potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Otworzy się submenu z akcjami dla zwierząt. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać akcję &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="Na obserwacji" /> `{{<T "OnWatch" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Pojawi się powiadomienie, że zwierzę zostało pomyślnie dodane do listy obserwacyjnej.

5. Możesz ponownie usunąć zwierzę z listy obserwacyjnej, stosując ponownie akcję &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="Nie na obserwacji" />  `{{<T "OnWatch" >}}`. Czy dodajesz, czy usuwasz zwierzę z listy obserwacyjnej za pomocą akcji `{{<T "OnWatch" >}}`, jest oznaczone małym znakiem ⊕ lub ⊖.

{{< tabpane >}}
{{< tab header="Na obserwacji:" text=true disabled=true />}}
{{% tab header="Skanowanie transpondera" text=true %}}
![VitalControl: Menu Akcje Na obserwacji](../images/onwatch-scan.png "Na obserwacji")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu Akcje Na obserwacji](../images/onwatch.png "Na obserwacji")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Wskazówka" %}}
Jeśli ta akcja nie jest dostępna, prawdopodobnie została dezaktywowana! Aktywuj akcję w menu [ustawienia akcji](../setting/). Alternatywnie, zresetowanie wszystkich akcji przywróci tę akcję.
{{% /alert %}}

```markdown
---
slug: /guides/using-graphql
translationKey: usingGraphQL
---

# Using GraphQL

GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

## Introduction

GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## Getting Started

To get started with GraphQL, you need to set up a GraphQL server. There are many libraries available for different programming languages to help you set up a GraphQL server.

### Setting Up

1. **Install the necessary packages**: Depending on your programming language, you will need to install the appropriate GraphQL package. For example, if you are using Node.js, you can use `npm` to install `graphql` and `express-graphql`.

    ```bash
    npm install graphql express-graphql
    ```

2. **Define your schema**: A schema defines the types and relationships in your data. Here is an example of a simple schema:

    ```javascript
    const { buildSchema } = require('graphql');

    const schema = buildSchema(`
      type Query {
        hello: String
      }
    `);
    ```

3. **Create root resolver**: A resolver is a function that resolves a value for a type or field in your schema. Here is an example of a simple resolver:

    ```javascript
    const root = {
      hello: () => {
        return 'Hello world!';
      },
    };
    ```

4. **Set up the server**: Finally, you need to set up the server to use the schema and resolver. Here is an example using Express:

    ```javascript
    const express = require('express');
    const { graphqlHTTP } = require('express-graphql');

    const app = express();
    app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }));

    app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
    ```

## Conclusion

GraphQL is a powerful tool for building APIs that allows clients to request exactly the data they need. By following the steps above, you can set up a basic GraphQL server and start building your API.
```
