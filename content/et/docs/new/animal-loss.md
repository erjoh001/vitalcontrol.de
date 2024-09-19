---
title: Looma kadumise registreerimine
linkTitle: Looma kadu
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Kuidas registreerida looma kadumist VitalControl seadmega.
kategooriad: [Animal-loss]
Sildid: [Animal-loss]
translationKey: new/animal-loss
---
## Looma kadumise registreerimine {#record-the-loss-of-an-animal}

{{% alert title="Vihje" %}}
Selle menüüpunkti looma kadumise funktsioon on peamiselt mõeldud surnud vasikate/lammaste registreerimiseks. Seadistusvõimalused on vastavalt kohandatud ja ei ole identne menüüpunktidega `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` või `{{<T "AnimalLoss" >}}`.
{{% /alert %}}

Looma kadumise registreerimiseks toimi järgnevalt:

1. Oma VitalControl seadme põhiekraanil vali menüüpunkt <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Uus loom" /> `{{<T "New" >}}` ja vajuta `{{<T "Ok" >}}` nuppu.

2. Avaneb alammenüü. Kasuta nooleklahve ◁ ▷ △ ▽, et valida menüüpunkt <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Looma kadu" /> `{{<T "AnimalLoss" >}}` ja kinnita valikuga `{{<T "Ok" >}}`.

3. Skaneeri emalooma transponder või kasuta `{{<T "Ok" >}}` nuppu. Sisesta emalooma ID kasutades nooleklahve ◁ ▷ △ ▽ ja kinnita `{{<T "Ok" >}}`-ga.

4. Avaneb veel üks alammenüü, kus saad salvestada looma kohta käivat infot. Kasuta nooleklahve △ ▽, et valida soovitud seadistuspunkt.

5. Seadistuste `{{<T "TypeAnimal" >}}`,`{{<T "Sex" >}}`,`{{<T "BirthWeight" >}}`,`{{<T "Breed" >}}`,`{{<T "Whereabouts" >}}`,`{{<T "Multiples" >}}` ja `{{<T "CalvingEase" >}}` jaoks kasuta nooleklahve ◁ ▷, et valida soovitud seadistus.

6. Seadistuse `{{<T "DateBirth" >}}` jaoks kasuta nooleklahve △ ▽, et valida soovitud seadistusvõimalus ja kinnita `{{<T "Ok" >}}`-ga. Kasuta nooleklahve △ ▽◁ ▷, et valida soovitud numbrid. Lõpuks kinnita `{{<T "Ok" >}}`-ga.

7. Salvesta seadistused ja loo uus loom klahviga `F3` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvesta" />&nbsp;.

{{% alert title="Vihje" %}}
Lisainformatsiooni ja seadistusvõimalusi uute loomade loomiseks leiad [siit](../../settings/animal-registration/).
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Looma kadumine:" text=true disabled=true />}}
{{% tab header="Transponderi skaneerimine" text=true %}}
![VitalControl: Menüütee Uus looma kadumine](../images/animalloss-scan.png "Looma kadumise registreerimine")
{{% /tab %}}
{{% tab header="Käsitsi valik nimekirjast" text=true %}}
![VitalControl: Menüütee Uus looma kadumine](../images/animalloss.png "Looma kadumise registreerimine")
{{% /tab %}}
{{< /tabpane >}}
