---
title: Wyrejestrowanie zwierzęcia
linkTitle: Wyrejestrowanie
slug: unregister
weight: 100
description: >
 Wyrejestrowanie zwierzęcia
date: 2023-07-26
categories: [Działania]
tags: [Działania, Wyrejestrowanie]
translationKey: actions/unregister
---
{{% alert title="Ostrzeżenie" color="warning" %}}
Gdy tylko usuniesz rekord danych zwierzęcia, nie będzie on już dostępny do celów oceny! Jeśli wyrejestrujesz zwierzę, ale chcesz na przykład ponownie ocenić rozwój zwierzęcia, musisz zachować rekord danych zwierzęcia!
{{% /alert %}}

## Wyrejestrowanie {#unregister}

Działanie `{{<T "Unregister" >}}` pozwala na wyrejestrowanie zwierzęcia, gdy tylko zostanie ono przeniesione. Aby wyrejestrować zwierzę, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Działania" /> `{{<T "Actions" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj zwierzę za pomocą transpondera lub wybierz zwierzę z listy. Potwierdź `{{<T "Ok" >}}` i wybierz zwierzę za pomocą klawiszy strzałek △ ▽. Potwierdź `{{<T "Ok" >}}`.

3. Otworzy się submenu z działaniami dotyczącymi zwierzęcia. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać działanie &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Wyrejestrowanie" /> `{{<T "Unregister" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Otworzy się kolejne submenu, w którym możesz zapisać różne ustawienia. Użyj klawiszy strzałek △ ▽, aby wybrać żądaną opcję ustawień. Użyj klawiszy strzałek ◁ ▷, aby wybrać żądane ustawienie.

5. Użyj klawisza `F3` `{{<T "Unregister" >}}`, aby wyrejestrować zwierzę z określonymi ustawieniami.

{{< tabpane >}}
{{< tab header="Wyrejestrowanie:" text=true disabled=true />}}
{{% tab header="Skanowanie transpondera" text=true %}}
![VitalControl: Menu Działanie Wyrejestrowanie](../images/unregister-scan.png "Wyrejestrowanie zwierzęcia")
{{% /tab %}}
{{% tab header="Ręczny wybór z listy" text=true %}}
![VitalControl: Menu Działanie Wyrejestrowanie](../images/unregister.png "Wyrejestrowanie zwierzęcia")
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="Wskazówka" %}}
Jeśli ta akcja nie jest dostępna, prawdopodobnie została dezaktywowana! Aktywuj akcję w menu [ustawienia akcji](../setting/). Alternatywnie, zresetowanie wszystkich akcji przywróci tę akcję.
{{% /alert %}}
