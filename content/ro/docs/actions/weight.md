---
title: Înregistrare greutate
linkTitle: Greutate
slug: record-weight
weight: 20
description: >
  Înregistrează greutatea animalelor tale.
date: 2023-07-26
categorii: [Acțiuni]
etichete: [Acțiuni, greutate]
translationKey: actions/weight
---

## Înregistrare greutate {#record-weight}
Folosește acțiunea &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Cântărire" /> `{{<T "Weighing" >}}` pentru a salva greutatea animalului tău individual. Pentru a face acest lucru, cântărește animalele sau estimează greutatea lor și introdu această valoare în dispozitivul VitalControl. Acest lucru îți permite să verifici dezvoltarea greutății animalelor tale și să le evaluezi individual.

{{% alert title="Sfat" %}}
Dacă greutatea medie deviază foarte mult într-o direcție (prea mare/prea mică), valoarea pentru creșterea zilnică ar trebui ajustată.
{{% /alert %}}

1. În ecranul principal al dispozitivului tău VitalControl, selectează elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Acțiuni" /> `{{<T "Actions" >}}` și apasă butonul `{{<T "Ok" >}}`.

2. Fie scanează un animal folosind transponderul, fie selectează un animal din listă. Confirmă cu `{{<T "Ok" >}}` și selectează un animal cu tastele săgeată △ ▽. Confirmă cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile pentru animale. Folosește tastele săgeată ◁ ▷ pentru a selecta acțiunea &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Cântărire" /> `{{<T "Weighing" >}}` și confirmă cu `{{<T "Ok" >}}`.

4. Se deschide un meniu cu o specificație de greutate. Crește sau scade aceasta cu tastele săgeată △ ▽ și salvează rezultatul cu tasta `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Salvează" /> sau cu tasta `{{<T "Ok" >}}`.

{{< tabpane >}}
{{< tab header="Înregistrare greutate:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
  ![VitalControl: Meniu Acțiune Cântărire](../images/weighing-scan.png "Cântărire")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
  ![VitalControl: Meniu Acțiune Cântărire](../images/weighing.png "Cântărire")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Sfat" %}}
Dacă această acțiune nu este disponibilă, probabil că a fost dezactivată! Activați acțiunea în meniul [setări acțiune](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce acea acțiune.
{{% /alert %}}
