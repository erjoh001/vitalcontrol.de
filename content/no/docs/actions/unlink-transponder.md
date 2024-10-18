---
title: Fjern kobling til transponder
linkTitle: Fjern kobling til transponder
slug: unlink-transponder
weight: 110
description: >
 Fjern koblingen til en transponder fra et dyr
date: 2023-07-26
categories: [Transponder]
tags: [Transponder]
translationKey: actions/transponder-unlink
---
{{% alert title="Advarsel" color="warning" %}}
Denne handlingen er ikke aktivert som standard! Aktiver dette som beskrevet i [handlingsinnstilling](../setting/).
{{% /alert %}}

## Fjern kobling til transponder {#unlink-transponder}

Med denne handlingen kan du fjerne en transponder som allerede er tildelt et dyr fra dette dyret.

1. På hovedskjermen til din VitalControl-enhet, velg menyvalget &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. Enten skann dyret med ønsket transponder eller velg dyret med transponderen fra listen. For å gjøre dette, bekreft med `{{<T "Ok" >}}` og velg dyrets ID ved hjelp av piltastene △ ▽. Bekreft med `{{<T "Ok" >}}`.

3. En undermeny med dyrehandlinger åpnes. Bruk piltastene ◁ ▷ △ ▽ for å velge handlingen &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Unlink transponder" /> `{{<T "UnlinkTransponder" >}}` og bekreft med `{{<T "Ok" >}}`.

4. Transponderen ble vellykket fjernet fra dyret.

{{< tabpane >}}
{{< tab header="Fjern kobling til transponder:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Menyhandling Fjern kobling til transponder](../images/unlinktransponder-scan.png "Fjern kobling til transponder")
{{% /tab %}}
{{% tab header="Manuelt valg fra liste" text=true %}}
![VitalControl: Menyhandling Fjern kobling til transponder](../images/unlinktransponder.png "Fjern kobling til transponder")
{{% /tab %}}
{{< /tabpane >}}
