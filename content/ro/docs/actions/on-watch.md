---
title: On watch
linkTitle: On watch
slug: on-watch
weight: 70
description: >
 Puneți animalele pe lista de supraveghere sau eliminați-le.
date: 2023-07-26
categorii: [Actions]
etichete: [Actions, on watch]
translationKey: actions/on-watch
---

## On watch {#on-watch}

Cu acțiunea `{{<T "OnWatch" >}}` puteți pune animalele pe lista de supraveghere sau le puteți elimina de pe aceasta. Lista de supraveghere vă ajută să găsiți animalele suspecte mai rapid și mai ușor, făcând verificările zilnice mai ușoare. Pentru a aplica acțiunea `{{<T "OnWatch" >}}`, procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Fie scanați un animal folosind transponderul, fie selectați un animal din listă. Confirmați cu `{{<T "Ok" >}}` și selectați un animal cu tastele săgeată △ ▽. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile pentru animale. Folosiți tastele săgeată ◁ ▷ △ ▽ pentru a selecta acțiunea &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="On watch" /> `{{<T "OnWatch" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Apare o notificare că animalul a fost adăugat cu succes pe lista de supraveghere.

5. Puteți elimina animalul de pe lista de supraveghere aplicând din nou acțiunea &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="Not on watch" />  `{{<T "OnWatch" >}}`. Fie că adăugați sau eliminați animalul de pe lista de supraveghere folosind acțiunea `{{<T "OnWatch" >}}`, acest lucru este indicat printr-un semn mic ⊕ sau ⊖.

{{< tabpane >}}
{{< tab header="On watch:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions On watch](../images/onwatch-scan.png "On watch")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions On watch](../images/onwatch.png "On watch")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Dacă această acțiune nu este disponibilă, probabil că a fost dezactivată! Activați acțiunea în meniul [setări acțiuni](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce această acțiune.
{{% /alert %}}


