---
title: Alarmă
linkTitle: Alarmă
slug: alarm
weight: 60
description: >
 Adăugați și eliminați animale din lista de alarmă.
date: 2023-07-26
categorii: [Acțiuni]
etichete: [Acțiuni, Alarmă]
translationKey: actions/alarm
---

## Alertă {#alert}

Cu acțiunea `{{<T "Alarm" >}}` puteți adăuga animale pe lista de alarmă sau le puteți elimina de pe aceasta. Lista de alarmă vă ajută să găsiți animalele suspecte mai rapid și mai ușor, făcând verificările zilnice mai simple. Pentru a aplica acțiunea `{{<T "Alarm" >}}`, procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> și apăsați butonul `{{<T "Ok" >}}`.

2. Fie scanați un animal folosind transponderul, fie selectați un animal din listă. Confirmați cu `{{<T "Ok" >}}` și selectați un animal cu tastele săgeată △ ▽. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile pentru animale. Folosiți tastele săgeată ◁ ▷ △ ▽ pentru a selecta acțiunea &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> `{{<T "Alarm" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Apare o notificare că animalul a fost adăugat cu succes pe lista de alarmă și afișajul pentru animal în antet se schimbă. Simbolul &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> indică faptul că acest animal este pe lista de alarmă.

5. Puteți elimina animalul de pe lista de alarmă aplicând din nou acțiunea &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}`. Dacă adăugați sau eliminați animalul de pe lista de alarmă folosind acțiunea `{{<T "Alarm" >}}` este indicat printr-un semn mic + sau -.

{{< tabpane >}}
{{< tab header="Alertă:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Sfat" %}}
Dacă această acțiune nu este disponibilă, probabil că a fost dezactivată! Activați acțiunea în meniul [setări acțiune](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce acea acțiune.
{{% /alert %}}
