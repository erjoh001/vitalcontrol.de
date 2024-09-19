---
title: Osušit
linkTitle: Osušit
slug: dry-off
weight: 115
description: >
 Osušit krávu nebo ji přidat na seznam čerstvých krav
date: 2023-07-26
kategorie: [Osušit]
štítky: [Osušit]
translationKey: actions/dry-cows
---

## Osušit {#dry-off}

{{% alert title="Tip" %}}
V závislosti na počátečním stavu krávy můžete buď osušit zvíře a přidat ho na seznam sušičů, nebo můžete označit zvíře jako čerstvou dojnici a tím ho přidat na seznam čerstvých dojnic. Rozlišení mezi funkcemi je zřejmé pomocí plusového nebo minusového symbolu.
{{% /alert %}}

### Osušit krávu {#dry-off-a-cow}

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Akce" /> `{{<T "Actions" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Buď naskenujte transpondér zvířete bez národního ID zvířete, nebo vyberte zvíře ze seznamu. Potvrďte tlačítkem `{{<T "Ok" >}}` a vyberte ID zvířete pomocí šipek △ ▽. Potvrďte tlačítkem `{{<T "Ok" >}}`.

3. Otevře se podmenu s akcemi zvířete. Pomocí šipek ◁ ▷ △ ▽ vyberte akci <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Osušit" /> `{{<T "DryOff" >}}` a potvrďte tlačítkem `{{<T "Ok" >}}`.

4. Zvíře bylo úspěšně označeno jako suché.

{{< tabpane >}}
{{< tab header="Osušit krávu:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu Akce Osušit](../images/dryoff-scan.png "Osušit krávu")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu Akce Osušit](../images/dryoff.png "Osušit krávu")
{{% /tab %}}
{{< /tabpane >}}

### Označit jako laktovanou {#mark-as-lactated}

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Akce" /> `{{<T "Actions" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Buď naskenujte transpondér zvířete bez národního ID zvířete, nebo vyberte zvíře ze seznamu. Potvrďte tlačítkem `{{<T "Ok" >}}` a vyberte ID zvířete pomocí šipek △ ▽. Potvrďte tlačítkem `{{<T "Ok" >}}`.


3. Otevře se podnabídka s akcemi pro zvířata. Pomocí šipek ◁ ▷ △ ▽ vyberte akci <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Osušit" /> `{{<T "DryOff" >}}` a potvrďte `{{<T "Ok" >}}`.

4. Zvíře bylo úspěšně označeno jako laktující.

{{< tabpane >}}
{{< tab header="Označit jako laktující:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu Akce Označit jako laktující](../images/lactated-scan.png "Označit jako laktující")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu Akce Označit jako laktující](../images/lactated.png "Označit jako laktující")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Tip" %}}
Pokud tato akce není dostupná, pravděpodobně byla deaktivována! Aktivujte akci v nabídce [nastavení akcí](../settings/). Alternativně, resetování všech akcí tuto akci obnoví.
{{% /alert %}}
