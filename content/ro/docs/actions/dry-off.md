---
title: Uscare
linkTitle: Uscare
slug: dry-off
weight: 115
description: >
 Uscarea unei vaci sau adăugarea ei pe lista vacilor proaspete
date: 2023-07-26
categories: [Uscare]
tags: [Uscare]
translationKey: actions/dry-cows
---

## Uscare {#dry-off}

{{% alert title="Sfat" %}}
În funcție de starea inițială a vacii, puteți fie să uscați animalul și să-l adăugați pe lista uscătoarelor, fie să marcați animalul ca proaspăt muls și astfel să-l adăugați pe lista vacilor proaspăt mulse. Distincția între funcții este clară printr-un simbol plus sau un simbol minus.
{{% /alert %}}

### Uscarea unei vaci {#dry-off-a-cow}

1. Pe ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Fie scanați transponderul animalului fără ID-ul național al animalului, fie selectați animalul din listă. Pentru a face acest lucru, confirmați cu `{{<T "Ok" >}}` și selectați ID-ul animalului folosind tastele săgeată △ ▽. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile animalului. Utilizați tastele săgeată ◁ ▷ △ ▽ pentru a selecta acțiunea <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Animalul a fost marcat cu succes ca uscat.

{{< tabpane >}}
{{< tab header="Uscarea unei vaci:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff-scan.png "Uscarea unei vaci")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff.png "Uscarea unei vaci")
{{% /tab %}}
{{< /tabpane >}}

### Marcarea ca mulsă {#mark-as-lactated}

1. Pe ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Fie scanați transponderul animalului fără ID-ul național al animalului, fie selectați animalul din listă. Pentru a face acest lucru, confirmați cu `{{<T "Ok" >}}` și selectați ID-ul animalului folosind tastele săgeată △ ▽. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile animalului. Folosește tastele săgeată ◁ ▷ △ ▽ pentru a selecta acțiunea <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` și confirmă cu `{{<T "Ok" >}}`.

4. Animalul a fost marcat cu succes ca lactat.

{{< tabpane >}}
{{< tab header="Mark as lactated:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated-scan.png "Mark as lactated")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Mark as lactated](../images/lactated.png "Mark as lactated")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Dacă această acțiune nu este disponibilă, probabil că acțiunea a fost dezactivată! Activează acțiunea în meniul [setări acțiuni](../setting). Alternativ, resetarea tuturor acțiunilor va readuce acea acțiune.
{{% /alert %}}
