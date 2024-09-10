---
title: Afmeld dyr
linkTitle: Afmeld
slug: unregister
weight: 100
description: >
 Afmeld et dyr
date: 2023-07-26
kategorier: [Handlinger]
tags: [Handlinger, Afmeld]
translationKey: actions/unregister
---
{{% alert title="Advarsel" color="warning" %}}
Så snart du sletter dyrets dataoptegnelse, er den ikke længere tilgængelig til evalueringsformål! Hvis du afmelder et dyr, men for eksempel vil evaluere dyrets udvikling igen bagefter, skal du beholde dyrets dataoptegnelse!
{{% /alert %}}

## Afmeld {#unregister}

Handlingen `{{<T "Unregister" >}}` giver dig mulighed for at afmelde et dyr, så snart det er flyttet ud. For at afmelde et dyr, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed, vælg menupunktet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Handlinger" /> `{{<T "Actions" >}}` og tryk på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller vælg et dyr fra listen. Bekræft med `{{<T "Ok" >}}` og vælg et dyr med piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.

3. En undermenu med dyrets handlinger åbnes. Brug piletasterne ◁ ▷ △ ▽ til at vælge handlingen &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Afmeld" /> `{{<T "Unregister" >}}` og bekræft med `{{<T "Ok" >}}`.

4. En anden undermenu åbnes, hvor du kan gemme forskellige indstillinger. Brug piletasterne △ ▽ til at vælge den ønskede indstillingsmulighed. Brug piletasterne ◁ ▷ til at vælge den ønskede indstilling.

5. Brug tasten `F3` `{{<T "Unregister" >}}` til at afmelde dyret med de angivne indstillinger.

{{< tabpane >}}
{{< tab header="Afmeld:" text=true disabled=true />}}
{{% tab header="Transponderscan" text=true %}}
![VitalControl: Menu Handling Afmeld](../images/unregister-scan.png "Afmeld et dyr")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
![VitalControl: Menu Handling Afmeld](../images/unregister.png "Afmeld et dyr")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tip" %}}
Hvis denne handling ikke er tilgængelig, er handlingen sandsynligvis blevet deaktiveret! Aktivér handlingen i [handlingsindstillinger](../setting/) menuen. Alternativt vil nulstilling af alle handlinger bringe denne handling tilbage.
{{% /alert %}}
