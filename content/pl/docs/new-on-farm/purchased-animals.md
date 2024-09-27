---
title: Zakupione zwierzęta
linkTitle: Zakupione zwierzęta
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Tutaj możesz zobaczyć swoje bieżące zakupy i wyeksportować dane.
kategorie: [Nowość na farmie]
tagi: [Nowość na farmie]
translationKey: new-on-farm/new-on-farm
---
## Zakupione zwierzęta {#purchased-animals}

Na tej liście znajdziesz wszystkie zwierzęta, które utworzyłeś za pomocą masowego rejestrowania. Możesz wyeksportować tę listę i tym samym zarejestrować swoje dodatki bezpośrednio w programie zarządzania stadem DSP-Herde i w HI-Tier. Alternatywnie, możesz usunąć wszystkie powiadomienia o zakupie.

{{% alert title="Wskazówka" %}}
Do eksportu danych potrzebny jest dołączony UBS stick. Podłącz USB stick za pomocą adaptera USB-C do urządzenia VitalControl przed wykonaniem instrukcji.
{{% /alert %}}

1. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nowość na farmie" /> `{{<T "NewOnFarm" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

2. Otworzy się podmenu, w którym możesz wybierać między <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nowość na farmie, bez transpondera" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zakupione zwierzęta" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Brak krajowego ID zwierzęcia" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Narodziny" /> `{{<T "Births" >}}` i <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Brak przypisanego transpondera" /> `{{<T "NoTransponderAssigned" >}}`. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać pozycję menu <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Zakupione zwierzęta" /> `{{<T "PurchasedAnimals" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

3. Otworzy się lista z twoimi zakupami, które zarejestrowałeś za pomocą pozycji menu masowego rejestrowania.


4. Użyj klawisza `F2` `{{<T "CSVExport" >}}`.

5. Lista wiadomości CSV jest teraz zapisana na twoim pendrive.

    ![VitalControl: Lista zakupionych zwierząt, eksport csv](../images/purchasedanimals.png "Zakupione zwierzęta, eksport csv ")

## Opcje: Usuń wszystkie powiadomienia po eksporcie {#options-delete-all-notices-after-export}

Dzięki tej opcji możesz ustawić, czy wszystkie wiadomości na liście `{{<T "PurchasedAnimals" >}}` powinny zostać usunięte po wyeksportowaniu pliku CSV. Używaj tej opcji tylko wtedy, gdy jesteś pewien, że nie potrzebujesz już tych wiadomości!

1. Użyj klawisza `F3`. Otworzy się submenu.

2. Użyj klawiszy strzałek △ ▽, aby wybrać pozycję menu `{{<T "DeleteAllNoticesAfterExport" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Pole jest teraz oznaczone haczykiem. Opcja jest aktywowana. Potwierdź ponownie `{{<T "Ok" >}}`, aby dezaktywować opcję.

    ![VitalControl: Lista zakupionych zwierząt, eksport csv](../images/delete-all.png "Usuń wszystkie powiadomienia po eksporcie")    

## Bezpośrednie wywołania funkcji {#direct-function-calls}

Oprócz tworzenia pliku eksportu, masz następujące opcje:

- [Odłącz transponder](#unlink-transponder)
- [Wyczyść wszystkie powiadomienia o zakupie](#clear-all-purchase-notices)
- [Usuń zwierzę + powiadomienie](#delete-animal--purchase-notice)
- [Wyczyść powiadomienie o zakupie](#clear-notice-of-purchase)
- [Edytuj oznaczenie](#edit-data-of-purchased-animal)

{{% alert title="Wskazówka" %}}
Zawsze najpierw otwórz listę `{{<T "PurchasedAnimals" >}}`, jak opisano w powyższych instrukcjach.
{{% /alert %}}

### Odłącz transponder {#unlink-transponder}

Możesz użyć tej funkcji, aby usunąć transponder ze zwierzęcia.

1. Użyj klawisza `F3`. Otworzy się submenu.

2. Użyj klawiszy strzałek △ ▽, aby wybrać pozycję menu `{{<T "UnlinkTransponder" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Transponder został pomyślnie odłączony.

    ![VitalControl: Lista zakupionych zwierząt, eksport csv](../images/unlink-transponder.png "Zakupione zwierzęta, odłącz transponder")

### Wyczyść wszystkie powiadomienia o zakupie {#clear-all-purchase-notices}


Dzięki tej funkcji możesz usunąć wszystkie zwierzęta z listy `{{<T "PurchasedAnimals" >}}` bez konieczności tworzenia pliku eksportu.

1. Użyj klawisza `F3`. Otworzy się submenu.

2. Użyj klawiszy strzałek △ ▽, aby wybrać element menu `{{<T "ClearAllPurchaseNotices" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Powiadomienia o zakupie zostały pomyślnie usunięte.

    ![VitalControl: Lista zakupionych zwierząt, usuń powiadomienia o zakupie](../images/clear.png "Usuń wszystkie powiadomienia o zakupie")

### Usuń zwierzę + powiadomienie o zakupie {#delete-animal--purchase-notice}

Aby usunąć zwierzę i odpowiadające mu powiadomienie o zakupie, postępuj w następujący sposób:

1. Użyj klawiszy strzałek △ ▽, aby wybrać zwierzę, które chcesz usunąć.

2. Użyj klawisza `F3`. Otworzy się submenu.

3. Użyj klawiszy strzałek △ ▽, aby wybrać element menu `{{<T "UnregisterAnimalAndBirthNotice" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Zwierzę i wiadomość dostępu zostały pomyślnie usunięte.

    ![VitalControl: Lista zakupionych zwierząt, usuń zwierzę + powiadomienie](../images/delete.png "Usuń zwierzę + powiadomienie")

### Usuń powiadomienie o zakupie {#clear-notice-of-purchase}

Aby usunąć powiadomienie o zakupie zwierzęcia z listy, postępuj w następujący sposób:

1. Użyj klawiszy strzałek △ ▽, aby wybrać zwierzę, którego powiadomienie o zakupie chcesz usunąć.

2. Użyj klawisza `F3`. Otworzy się submenu.

3. Użyj klawiszy strzałek △ ▽, aby wybrać element menu `{{<T "ClearPurchaseNotice" >}}` i potwierdź `{{<T "Ok" >}}`.

4. Powiadomienie o zakupie wybranego zwierzęcia zostało pomyślnie usunięte.

    ![VitalControl: Lista zakupionych zwierząt, usuń powiadomienie o zakupie](../images/clearnotice.png "Usuń powiadomienie o zakupie")

### Edytuj dane zakupionego zwierzęcia {#edit-data-of-purchased-animal}

Aby edytować dane zwierzęcia na liście zakupów, postępuj w następujący sposób:

1. Użyj klawiszy strzałek △ ▽, aby wybrać zwierzę, które chcesz edytować.

2. Użyj przycisku `{{<T "Ok" >}}`. Otworzy się submenu z danymi zwierzęcia. Możesz dowiedzieć się, jak je edytować [tutaj](/pl/docs/actions/edit/#edit-animal-data).

![VitalControl: Lista zakupionych zwierząt, Edytuj dane zwierzęcia](../images/edit.png "Edytuj dane zakupionego zwierzęcia")
