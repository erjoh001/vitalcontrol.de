---
title: Dezregistrare animal
linkTitle: Dezregistrare
slug: unregister
weight: 100
description: >
 Dezregistrare un animal
date: 2023-07-26
categories: [Acțiuni]
tags: [Acțiuni, Dezregistrare]
translationKey: actions/unregister
---
{{% alert title="Avertisment" color="warning" %}}
De îndată ce ștergeți înregistrarea datelor animalului, aceasta nu mai este disponibilă pentru evaluare! Dacă dezactivați un animal, dar doriți, de exemplu, să evaluați din nou dezvoltarea animalului ulterior, trebuie să păstrați înregistrarea datelor animalului!
{{% /alert %}}

## Dezregistrare {#unregister}

Acțiunea `{{<T "Unregister" >}}` vă permite să dezactivați un animal de îndată ce acesta este mutat. Pentru a dezactiva un animal, procedați după cum urmează:

1. În ecranul principal al dispozitivului dvs. VitalControl, selectați elementul de meniu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` și apăsați butonul `{{<T "Ok" >}}`.

2. Fie scanați un animal folosind transponderul, fie selectați un animal din listă. Confirmați cu `{{<T "Ok" >}}` și selectați un animal cu tastele săgeată △ ▽. Confirmați cu `{{<T "Ok" >}}`.

3. Se deschide un submeniu cu acțiunile pentru animale. Folosiți tastele săgeată ◁ ▷ △ ▽ pentru a selecta acțiunea &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` și confirmați cu `{{<T "Ok" >}}`.

4. Se deschide un alt submeniu în care puteți salva diverse setări. Folosiți tastele săgeată △ ▽ pentru a selecta opțiunea de setare dorită. Folosiți tastele săgeată ◁ ▷ pentru a selecta setarea dorită.

5. Folosiți tasta `F3` `{{<T "Unregister" >}}` pentru a dezactiva animalul cu setările specificate.

{{< tabpane >}}
{{< tab header="Dezregistrare:" text=true disabled=true />}}
{{% tab header="Scanare transponder" text=true %}}
![VitalControl: Meniu Acțiune Dezregistrare](../images/unregister-scan.png "Dezregistrare un animal")
{{% /tab %}}
{{% tab header="Selecție manuală din listă" text=true %}}
![VitalControl: Meniu Acțiune Dezregistrare](../images/unregister.png "Dezregistrare un animal")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Sfat" %}}
Dacă această acțiune nu este disponibilă, probabil că a fost dezactivată! Activați acțiunea în meniul [setări acțiune](../setting/). Alternativ, resetarea tuturor acțiunilor va readuce acea acțiune.
{{% /alert %}}
