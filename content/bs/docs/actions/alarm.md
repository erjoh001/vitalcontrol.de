---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Dodajte i uklonite životinje sa liste alarma.
date: 2023-07-26
categories: [Akcije]
tags: [Akcije, Alarm]
translationKey: actions/alarm
---

## Upozorenje {#alert}

Sa akcijom `{{<T "Alarm" >}}` možete staviti životinje na listu alarma ili ih ukloniti sa nje. Lista alarma vam pomaže da brže i lakše pronađete upadljive životinje, čineći vaše dnevne rutinske provjere jednostavnijim. Da biste primijenili akciju `{{<T "Alarm" >}}`, postupite na sljedeći način:

1. Na glavnom ekranu vašeg VitalControl uređaja, odaberite stavku iz menija `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> i pritisnite dugme `{{<T "Ok" >}}`.

2. Ili skenirajte životinju pomoću transpondera ili odaberite životinju sa liste. Potvrdite sa `{{<T "Ok" >}}` i odaberite životinju sa strelicama △ ▽. Potvrdite sa `{{<T "Ok" >}}`.

3. Otvara se podmeni sa akcijama za životinje. Koristite strelice ◁ ▷ △ ▽ da odaberete &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> akciju `{{<T "Alarm" >}}` i potvrdite sa `{{<T "Ok" >}}`.

4. Pojavljuje se obavijest da je životinja uspješno dodana na listu alarma i prikaz za životinju u zaglavlju se mijenja. Simbol &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> označava da je ova životinja na listi alarma.

5. Možete ponovo ukloniti životinju sa liste alarma primjenom &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> akcije `{{<T "Alarm" >}}`. Da li dodajete ili uklanjate životinju sa liste alarma pomoću akcije `{{<T "Alarm" >}}` označeno je sa malim znakom + ili -.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Savjet" %}}
Ako ova akcija nije dostupna, vjerovatno je deaktivirana! Aktivirajte akciju u meniju [postavke akcije](../setting/). Alternativno, resetovanje svih akcija će vratiti tu akciju.
{{% /alert %}}
