---
title: Rating
linkTitle: Rating
slug: rating
weight: 30
description: >
 Evaluează-ți animalele.
date: 2023-07-26
categories: [Actions]
tags: [Actions, Rating]
translationKey: actions/animal-rating
---

## Evaluează-ți animalele {#rate-your-animals}

Când evaluezi animalul, documentezi starea individuală a acestuia. Starea este determinată vizual și înregistrată cu ajutorul sistemului de semafor. În evaluarea de bază, se înregistrează doar starea generală. În evaluarea extinsă, înregistrezi starea generală, consumul de hrană, consistența fecalelor și bolile respiratorii. Poți schimba modul de evaluare fie direct în acțiunea <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}`, fie îl poți defini în [setări](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Hint" %}}
O evaluare galbenă sau roșie înseamnă că VitalControl clasifică animalul ca fiind suspect și îl pune pe lista de alarme.
{{% /alert %}}

1. În ecranul principal al dispozitivului tău VitalControl, selectează elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` și apasă butonul `{{<T "Ok" >}}`.

2. Fie scanează un animal folosind transponderul, fie selectează un animal din listă. Confirmă cu `{{<T "Ok" >}}` și selectează un animal cu tastele săgeată △ ▽. Confirmă cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile pentru animale. Folosește tastele săgeată ◁ ▷ pentru a selecta acțiunea <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` și confirmă cu `{{<T "Ok" >}}`.

4. Se deschide meniul de evaluare. Dacă vrei să schimbi modul de evaluare, folosește butonul `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; și tastele săgeată ◁ ▷. Cu tasta `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; te întorci la meniul de evaluare.

5. Folosește tastele săgeată ◁ ▷ △ ▽ pentru a selecta o stare și salvează cu tasta `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> sau cu tasta `{{<T "Ok" >}}`.

6. În modul avansat, folosiți tastele `F1` și `F3` pentru a comuta între parametrii de evaluare.

{{% alert title="Hint" %}}
Dacă nu faceți o selecție folosind tastele săgeată ◁ ▷ dar salvați direct folosind tasta `F3` sau tasta `{{<T "Ok" >}}`, VitalControl salvează o evaluare neutră, reprezentată printr-o culoare gri.
{{% /alert %}}

### Evaluare de bază {#basic-rating}

{{< tabpane >}}
{{< tab header="Evaluare de bază:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
![VitalControl: Menu Actions Rating](../images/basicrating-scan.png "Evaluare de bază")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
![VitalControl: Menu Actions Rating](../images/basicrating.png "Evaluare de bază")
{{% /tab %}}
{{< /tabpane >}}

### Evaluare extinsă {#extended-rating}

{{< tabpane >}}
{{< tab header="Evaluare de bază:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
![VitalControl: Menu Actions Rating](../images/extendedrating-scan.png "Evaluare extinsă")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
![VitalControl: Menu Actions Rating](../images/extendedrating.png "Evaluare extinsă")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Dacă această acțiune nu este disponibilă, probabil acțiunea a fost dezactivată! Activați acțiunea în meniul [setări acțiuni](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce acea acțiune.
{{% /alert %}}
