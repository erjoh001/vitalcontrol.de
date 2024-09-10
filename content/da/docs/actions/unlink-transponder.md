---
title: Fjern transponder
linkTitle: Fjern transponder
slug: unlink-transponder
weight: 110
description: >
 Fjern transponderlinket til et dyr
date: 2023-07-26
kategorier: [Transponder]
tags: [Transponder]
translationKey: actions/transponder-unlink
---
{{% alert title="Advarsel" color="warning" %}}
Denne handling er ikke aktiveret som standard! Aktivér dette som beskrevet i [handlingsindstilling](../setting/).
{{% /alert %}}

## Fjern transponder {#unlink-transponder}

Med denne handling kan du fjerne en transponder, der allerede er tildelt et dyr, fra dette dyr.

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Handlinger" /> `{{<T "Actions" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. Enten scan dyret med den ønskede transponder eller vælg dyret med transponderen fra listen. For at gøre dette, bekræft med `{{<T "Ok" >}}` og vælg dyrets ID ved hjælp af piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.

3. En undermenu med dyrehandlinger åbnes. Brug piletasterne ◁ ▷ △ ▽ til at vælge handlingen &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Fjern transponder" /> `{{<T "UnlinkTransponder" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Transponderen blev succesfuldt fjernet fra dyret.

{{< tabpane >}}
{{< tab header="Fjern transponder:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Handling Fjern transponder](../images/unlinktransponder-scan.png "Fjern transponder")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
![VitalControl: Menu Handling Fjern transponder](../images/unlinktransponder.png "Fjern transponder")
{{% /tab %}}
{{< /tabpane >}}
