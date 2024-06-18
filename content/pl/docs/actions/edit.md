---
title: Edytuj dane zwierzęcia
linkTitle: Edytuj
slug: edit
weight: 90
description: >
 Edytuj dane wybranego zwierzęcia.
date: 2023-07-26
categories: [Actions]
tags: [Actions, dane zwierzęcia, edytuj]
translationKey: actions/edit
---

## Edytuj dane zwierzęcia {#edit-animal-data}

Akcja <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` pozwala na bezpośrednią zmianę danych wybranego zwierzęcia. Ta funkcja ułatwia korektę danych zwierzęcia, jeśli na przykład podczas inspekcji okaże się, że płeć została zapisana nieprawidłowo. Możesz zmienić następujące dane:

- Rodzaj zwierzęcia
- Płeć
- Waga urodzeniowa
- Rasa
- Miejsce pobytu
- Krajowy identyfikator zwierzęcia
- ID
- Wielokrotności
- Data urodzenia
- Łatwość wycielenia

Aby zmienić dane zwierzęcia, postępuj w następujący sposób:

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Zeskanuj zwierzę za pomocą transpondera lub wybierz zwierzę z listy. Potwierdź `{{<T "Ok" >}}` i wybierz zwierzę za pomocą klawiszy strzałek △ ▽. Potwierdź `{{<T "Ok" >}}`.

3. Otworzy się submenu z akcjami dotyczącymi zwierzęcia. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać akcję <img src="/icons/actions/edit.svg" width="24" align="bottom" alt="Edit" /> `{{<T "Edit" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Otworzy się lista z danymi zwierzęcia. Użyj klawiszy strzałek △ ▽, aby wybrać żądaną opcję zmiany.

5. Dla danych `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` i `{{<T "CalvingEase" >}}` użyj klawiszy strzałek ◁ ▷, aby dokonać żądanej zmiany.

6. Dla danych `{{<T "ID" >}}` i `{{<T "DateBirth" >}}` wybierz je za pomocą klawiszy strzałek △ ▽ i potwierdź `{{<T "Ok" >}}`. Użyj klawiszy strzałek △ ▽, aby wybrać odpowiednią liczbę i klawiszy strzałek ◁ ▷, aby nawigować w polach liczbowych.

7. Zapisz zmianę za pomocą klawisza `F3`.

{{< tabpane >}}
{{< tab header="Edit animal data:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit-scan.png "Edit animal data")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Action Edit animal data](../images/edit.png "Edit animal data")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Hint" %}}
Jeśli ta akcja nie jest dostępna, prawdopodobnie została dezaktywowana! Aktywuj akcję w menu [ustawienia akcji](../setting/). Alternatywnie, zresetowanie wszystkich akcji przywróci tę akcję.
{{% /alert %}}
