---
title: Registrer vægt
linkTitle: Vægt
slug: record-weight
weight: 20
description: >
  Registrer vægten af dine dyr.
date: 2023-07-26
categories: [Handlinger]
tags: [Handlinger, vægt]
translationKey: actions/weight
---

## Registrer vægt {#record-weight}
Brug handlingen &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` til at gemme vægten af dit dyr individuelt. For at gøre dette, vej dine dyr eller estimer deres vægt og indtast denne værdi i VitalControl-enheden. Dette giver dig mulighed for at kontrollere vægtudviklingen af dine dyr og evaluere dem individuelt.

{{% alert title="Tip" %}}
Hvis den gennemsnitlige vægt afviger meget i en retning (for høj/for lav), bør værdien for den daglige stigning justeres.
{{% /alert %}}

1. På hovedskærmen af din VitalControl-enhed, vælg menupunktet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Handlinger" /> `{{<T "Actions" >}}` og tryk på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller vælg et dyr fra listen. Bekræft med `{{<T "Ok" >}}` og vælg et dyr med piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.

3. En undermenu med dyrehandlinger åbnes. Brug piletasterne ◁ ▷ til at vælge handlingen &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` og bekræft med `{{<T "Ok" >}}`.

4. En menu åbnes med en vægtangivelse. Øg eller mindsk denne med piletasterne △ ▽ og gem resultatet med `F3` tasten <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Gem" /> eller med `{{<T "Ok" >}}` tasten.

{{< tabpane >}}
{{< tab header="Registrer vægt:" text=true disabled=true />}}
{{% tab header="Transponderscan" text=true %}}
  ![VitalControl: Menu Handling Vejning](../images/weighing-scan.png "Weighing")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
  ![VitalControl: Menu Handling Vejning](../images/weighing.png "Weighing")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tip" %}}
Hvis denne handling ikke er tilgængelig, er handlingen sandsynligvis blevet deaktiveret! Aktivér handlingen i [handlingsindstillinger](../setting/) menuen. Alternativt vil nulstilling af alle handlinger bringe denne handling tilbage.
{{% /alert %}}
