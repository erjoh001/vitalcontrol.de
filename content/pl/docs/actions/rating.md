---
title: Rating
linkTitle: Rating
slug: rating
weight: 30
description: >
 Oceń swoje zwierzęta.
date: 2023-07-26
categories: [Actions]
tags: [Actions, Rating]
translationKey: actions/animal-rating
---

## Oceń swoje zwierzęta {#rate-your-animals}

Podczas oceniania zwierzęcia dokumentujesz stan poszczególnego zwierzęcia. Stan jest określany wizualnie i rejestrowany za pomocą systemu sygnalizacji świetlnej. W podstawowej ocenie rejestrowany jest tylko ogólny stan. W rozszerzonej ocenie rejestrujesz ogólny stan, pobór paszy, konsystencję kału i choroby układu oddechowego. Możesz zmienić tryb oceniania bezpośrednio w akcji <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` lub zdefiniować go w [ustawieniach](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Wskazówka" %}}
Żółta lub czerwona ocena oznacza, że VitalControl klasyfikuje zwierzę jako podejrzane i umieszcza je na liście alarmowej.
{{% /alert %}}

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj zwierzę za pomocą transpondera lub wybierz zwierzę z listy. Potwierdź `{{<T "Ok" >}}` i wybierz zwierzę za pomocą klawiszy strzałek △ ▽. Potwierdź `{{<T "Ok" >}}`.

3. Otwiera się submenu z akcjami zwierzęcia. Użyj klawiszy strzałek ◁ ▷, aby wybrać akcję <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Otwiera się menu oceniania. Jeśli chcesz zmienić tryb oceniania, użyj przycisku `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; i klawiszy strzałek ◁ ▷. Za pomocą klawisza `F1` <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; wrócisz do menu oceny.

5. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać stan i zapisz go za pomocą klawisza `F3` <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> lub klawisza `{{<T "Ok" >}}`.

6. W trybie zaawansowanym użyj klawiszy `F1` i `F3`, aby przełączać się między parametrami oceny.

{{% alert title="Wskazówka" %}}
Jeśli nie dokonasz wyboru za pomocą klawiszy strzałek ◁ ▷, ale zapiszesz bezpośrednio za pomocą klawisza `F3` lub `{{<T "Ok" >}}`, VitalControl zapisze neutralną ocenę, reprezentowaną przez szary kolor.
{{% /alert %}}

### Podstawowa ocena {#basic-rating}

{{< tabpane >}}
{{< tab header="Podstawowa ocena:" text=true disabled=true />}}
{{% tab header="Skanowanie transpondera" text=true %}}
![VitalControl: Menu Akcje Ocena](../images/basicrating-scan.png "Podstawowa ocena")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu Akcje Ocena](../images/basicrating.png "Podstawowa ocena")
{{% /tab %}}
{{< /tabpane >}}

### Rozszerzona ocena {#extended-rating}

{{< tabpane >}}
{{< tab header="Podstawowa ocena:" text=true disabled=true />}}
{{% tab header="Skanowanie transpondera" text=true %}}
![VitalControl: Menu Akcje Ocena](../images/extendedrating-scan.png "Rozszerzona ocena")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu Akcje Ocena](../images/extendedrating.png "Rozszerzona ocena")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Wskazówka" %}}
Jeśli ta akcja nie jest dostępna, prawdopodobnie została dezaktywowana! Aktywuj akcję w menu [ustawienia akcji](../setting/). Alternatywnie, zresetowanie wszystkich akcji przywróci tę akcję.
{{% /alert %}}
