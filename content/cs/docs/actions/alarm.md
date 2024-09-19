---
title: Alarm
linkTitle: Alarm
slug: alarm
weight: 60
description: >
 Přidání a odstranění zvířat ze seznamu alarmů.
date: 2023-07-26
kategorie: [Actions]
štítky: [Actions, Alarm]
translationKey: actions/alarm
---

## Upozornění {#alert}

Pomocí akce `{{<T "Alarm" >}}` můžete přidávat zvířata na seznam alarmů nebo je z něj odstraňovat. Seznam alarmů vám pomůže rychleji a snadněji najít nápadná zvířata, což usnadní vaše každodenní kontroly. Pro použití akce `{{<T "Alarm" >}}` postupujte následovně:

1. Na hlavní obrazovce vašeho zařízení VitalControl vyberte položku menu `{{<T "Actions" >}}` &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> a stiskněte tlačítko `{{<T "Ok" >}}`.

2. Buď naskenujte zvíře pomocí transpondéru, nebo vyberte zvíře ze seznamu. Potvrďte tlačítkem `{{<T "Ok" >}}` a vyberte zvíře pomocí šipek △ ▽. Potvrďte tlačítkem `{{<T "Ok" >}}`.

3. Otevře se podmenu s akcemi pro zvíře. Pomocí šipek ◁ ▷ △ ▽ vyberte &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> akci `{{<T "Alarm" >}}` a potvrďte tlačítkem `{{<T "Ok" >}}`.

4. Zobrazí se oznámení, že zvíře bylo úspěšně přidáno na seznam alarmů a zobrazení pro zvíře v záhlaví se změní. Symbol &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> označuje, že toto zvíře je na seznamu alarmů.

5. Zvíře můžete ze seznamu alarmů opět odstranit použitím akce &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` znovu. Zda přidáváte nebo odstraňujete zvíře ze seznamu alarmů pomocí akce `{{<T "Alarm" >}}`, je označeno malým znaménkem + nebo -.

{{< tabpane >}}
{{< tab header="Alert:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm-scan.png "Alarm")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Alarm](../images/alarm.png "Alarm")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Pokud tato akce není dostupná, pravděpodobně byla deaktivována! Aktivujte akci v menu [nastavení akcí](../settings/). Alternativně, resetování všech akcí tuto akci obnoví.
{{% /alert %}}


