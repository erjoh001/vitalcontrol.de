---
title: Avlänka transponder
linkTitle: Avlänka transponder
slug: unlink-transponder
weight: 110
description: >
 Ta bort transponderlänken till ett djur
date: 2023-07-26
Kategorier: [Transponder]
Taggar: [Transponder]
translationKey: actions/transponder-unlink
---
{{% alert title="Varning" color="warning" %}}
Denna åtgärd är inte aktiverad som standard! Aktivera detta som beskrivs i [åtgärdsinställning](../setting/).
{{% /alert %}}

## Avlänka transponder {#unlink-transponder}

Med denna åtgärd kan du koppla bort en transponder som redan har tilldelats ett djur från detta djur.

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` och tryck på `{{<T "Ok" >}}`-knappen.

2. Antingen skanna djuret med den önskade transpondern eller välj djuret med transpondern från listan. För att göra detta, bekräfta med `{{<T "Ok" >}}` och välj djurets ID med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.

3. En undermeny med djuråtgärder öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja åtgärden &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Unlink transponder" /> `{{<T "UnlinkTransponder" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Transpondern kopplades framgångsrikt bort från djuret.

{{< tabpane >}}
{{< tab header="Avlänka transponder:" text=true disabled=true />}}
{{% tab header="Transponderskanning" text=true %}}
![VitalControl: Menyåtgärd Avlänka transponder](../images/unlinktransponder-scan.png "Avlänka transponder")
{{% /tab %}}
{{% tab header="Manuellt val från lista" text=true %}}
![VitalControl: Menyåtgärd Avlänka transponder](../images/unlinktransponder.png "Avlänka transponder")
{{% /tab %}}
{{< /tabpane >}}
