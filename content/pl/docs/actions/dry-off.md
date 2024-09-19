---
title: Osusz
linkTitle: Osusz
slug: dry-off
weight: 115
description: >
 Osusz krowę lub dodaj ją do listy świeżych krów
date: 2023-07-26
kategorie: [Osusz]
tagi: [Osusz]
translationKey: actions/dry-cows
---

## Osusz {#dry-off}

{{% alert title="Wskazówka" %}}
W zależności od początkowego statusu krowy, możesz albo osuszyć zwierzę i dodać je do listy osuszonych, albo oznaczyć zwierzę jako świeżo dojącą i tym samym dodać je do listy świeżo dojących. Różnica między funkcjami jest wyraźnie zaznaczona symbolem plusa lub minusa.
{{% /alert %}}

### Osusz krowę {#dry-off-a-cow}

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj transponder zwierzęcia bez krajowego ID zwierzęcia lub wybierz zwierzę z listy. Aby to zrobić, potwierdź `{{<T "Ok" >}}` i wybierz ID zwierzęcia za pomocą klawiszy strzałek △ ▽. Potwierdź `{{<T "Ok" >}}`.

3. Otworzy się submenu z akcjami dla zwierzęcia. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać akcję <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Zwierzę zostało pomyślnie oznaczone jako osuszone.

{{< tabpane >}}
{{< tab header="Osusz krowę:" text=true disabled=true />}}
{{% tab header="Skanowanie transpondera" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff-scan.png "Osusz krowę")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu Actions Dry off](../images/dryoff.png "Osusz krowę")
{{% /tab %}}
{{< /tabpane >}}

### Oznacz jako dojącą {#mark-as-lactated}

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj transponder zwierzęcia bez krajowego ID zwierzęcia lub wybierz zwierzę z listy. Aby to zrobić, potwierdź `{{<T "Ok" >}}` i wybierz ID zwierzęcia za pomocą klawiszy strzałek △ ▽. Potwierdź `{{<T "Ok" >}}`.

3. Otworzy się submenu z akcjami zwierząt. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać akcję <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Dry off" /> `{{<T "DryOff" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Zwierzę zostało pomyślnie oznaczone jako laktujące.

{{< tabpane >}}
{{< tab header="Oznacz jako laktujące:" text=true disabled=true />}}
{{% tab header="Skanowanie transpondera" text=true %}}
![VitalControl: Menu Akcje Oznacz jako laktujące](../images/lactated-scan.png "Oznacz jako laktujące")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu Akcje Oznacz jako laktujące](../images/lactated.png "Oznacz jako laktujące")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Wskazówka" %}}
Jeśli ta akcja nie jest dostępna, prawdopodobnie została dezaktywowana! Aktywuj akcję w menu [ustawienia akcji](../setting). Alternatywnie, zresetowanie wszystkich akcji przywróci tę akcję.
{{% /alert %}}
