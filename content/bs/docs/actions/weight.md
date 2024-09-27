---
title: Zabilježite težinu
linkTitle: Težina
slug: record-weight
weight: 20
description: >
  Zabilježite težinu vaših životinja.
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, težina]
translationKey: actions/weight
---

## Zabilježite težinu {#record-weight}
Koristite &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` akciju da sačuvate težinu vaše životinje pojedinačno. Da biste to uradili, izvažite vaše životinje ili procijenite njihovu težinu i unesite ovu vrijednost u VitalControl uređaj. Ovo vam omogućava da provjerite razvoj težine vaših životinja i procijenite ih pojedinačno.

{{% alert title="Savjet" %}}
Ako prosječna težina jako odstupa u jednom smjeru (previsoka/preslaba), vrijednost za dnevni prirast treba prilagoditi.
{{% /alert %}}

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju sa liste. Potvrdite sa `{{<T "Ok" >}}` i odaberite životinju sa strelicama △ ▽. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se podmeni sa akcijama za životinje. Koristite strelice ◁ ▷ da odaberete akciju &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Otvara se meni sa specifikacijom težine. Povećajte ili smanjite ovu vrijednost sa strelicama △ ▽ i sačuvajte rezultat sa `F3` dugmetom <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> ili sa `{{<T "Ok" >}}` dugmetom.

{{< tabpane >}}
{{< tab header="Zabilježite težinu:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderom" text=true %}}
  ![VitalControl: Meni Akcija Vaga](../images/weighing-scan.png "Weighing")
{{% /tab %}}
{{% tab header="Ručno odabiranje sa liste" text=true %}}
  ![VitalControl: Meni Akcija Vaga](../images/weighing.png "Weighing")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Savjet" %}}
Ako ova akcija nije dostupna, vjerovatno je deaktivirana! Aktivirajte akciju u meniju [postavke akcije](../setting/). Alternativno, resetovanje svih akcija će vratiti tu akciju.
{{% /alert %}}
