---
title: Odpojit transpondér
linkTitle: Odpojit transpondér
slug: unlink-transponder
weight: 110
description: >
 Odstranit propojení transpondéru se zvířetem
date: 2023-07-26
kategorie: [Transpondér]
štítky: [Transpondér]
translationKey: actions/transponder-unlink
---
{{% alert title="Varování" color="warning" %}}
Tato akce není ve výchozím nastavení povolena! Aktivujte ji, jak je popsáno v [nastavení akce](../settings/).
{{% /alert %}}

## Odpojit transpondér {#unlink-transponder}

Tuto akci můžete použít k odpojení transpondéru, který byl již přiřazen ke zvířeti, od tohoto zvířete.

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Akce" /> `{{<T "Actions" >}}` a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Buď naskenujte zvíře s požadovaným transpondérem, nebo vyberte zvíře s transpondérem ze seznamu. Potvrďte tlačítkem `{{<T "Ok" >}}` a pomocí šipek △ ▽ vyberte ID zvířete. Potvrďte tlačítkem `{{<T "Ok" >}}`.

3. Otevře se podmenu s akcemi pro zvíře. Pomocí šipek ◁ ▷ △ ▽ vyberte akci &nbsp;<img src="/icons/actions/unlink-transponder.svg" width="45" align="bottom" alt="Odpojit transpondér" /> `{{<T "UnlinkTransponder" >}}` a potvrďte tlačítkem `{{<T "Ok" >}}`.

4. Transpondér byl úspěšně odpojen od zvířete.

{{< tabpane >}}
{{< tab header="Odpojit transpondér:" text=true disabled=true />}}
{{% tab header="Skenování transpondéru" text=true %}}
![VitalControl: Menu Akce Odpojit transpondér](../images/unlinktransponder-scan.png "Odpojit transpondér")
{{% /tab %}}
{{% tab header="Ruční výběr ze seznamu" text=true %}}
![VitalControl: Menu Akce Odpojit transpondér](../images/unlinktransponder.png "Odpojit transpondér")
{{% /tab %}}
{{< /tabpane >}}
