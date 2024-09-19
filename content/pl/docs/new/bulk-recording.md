---
title: "Masowa rejestracja grupy zakupionych zwierząt"
linkTitle: "Rejestracja masowa"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Użyj skanera kodów kreskowych, aby zarejestrować różne zwierzęta.
kategorie: [Rejestracja masowa]
tagi: [Rejestracja masowa]
translationKey: new/bulk-recording
---
## Rejestracja masowa {#bulk-recording}

Za pomocą masowej rejestracji możesz w krótkim czasie zarejestrować dużą liczbę zwierząt i zapisać je na swoim urządzeniu. Użyj skanera kodów kreskowych, aby zeskanować kody kreskowe numeru kolczyka i daty urodzenia na paszportach bydła. Zwierzę jest zapisywane automatycznie i możesz od razu zeskanować kolejny paszport. Aby przeprowadzić masową rejestrację zwierząt, postępuj zgodnie z poniższymi krokami:

1. Podłącz skaner kodów kreskowych do VitalControl za pomocą kabla.

2. Na głównym ekranie urządzenia VitalControl wybierz pozycję menu <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Nowe zwierzę" /> `{{<T "New" >}}` i naciśnij przycisk `{{<T "Ok" >}}`.

3. Otworzy się podmenu. Użyj klawiszy strzałek ◁ ▷ △ ▽, aby wybrać pozycję menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Rejestracja masowa" /> `{{<T "BulkRecording" >}}` i potwierdź przyciskiem `{{<T "Ok" >}}`.

4. Otworzy się kolejne podmenu, które zawiera jedno pole na numer kolczyka zwierzęcia i drugie pole na datę urodzenia zwierzęcia. Najpierw zeskanuj kod kreskowy numeru kolczyka. Obramowanie pola zmieni kolor z czerwonego na zielony. Następnie zeskanuj datę urodzenia. Obramowanie na krótko zmieni kolor na zielony, zanim oba obramowania ponownie staną się czerwone. Licznik pod symbolem paszportu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Paszporty zwierząt" title="Paszporty zwierząt" /> na górze ekranu zwiększa się z 0 do 1. Pierwsze zwierzę zostało zapisane. Kontynuuj i zeskanuj pozostałe paszporty bydła. Po każdym zeskanowanym paszporcie licznik pod symbolem paszportu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Paszporty zwierząt" title="Paszporty zwierząt" /> zwiększa się o jeden. Licznik pod symbolem stada <img src="/icons/header/group.svg" width="35" align="bottom" alt="Grupa zwierząt" title="Grupa zwierząt" /> również zwiększa się o jeden.

{{% alert title="Wskazówka" %}}
Licznik pod symbolem paszportu <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Paszporty zwierząt" title="Paszporty zwierząt" /> pokazuje, ile paszportów zeskanowałeś za jednym razem bez opuszczania ekranu `{{<T "BulkRecording" >}}`. Licznik pod symbolem stada <img src="/icons/header/group.svg" width="35" align="bottom" alt="Nowe zwierzę" /> pokazuje, ile paszportów zeskanowałeś w sumie. Ten licznik nie resetuje się do zera, jeśli opuścisz ekran `{{<T "BulkRecording" >}}`. Liczba ta odpowiada Twoim wpisom w pozycji menu ['Zakupy'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menu 'Nowe - Rejestracja zbiorcza'](../images/bulk-recording.png "Rejestracja zbiorcza")

{{% alert title="Wskazówka" %}}
Masz dodatkowe opcje ustawień w pozycji menu `{{<T "BulkRecording" >}}`. Są one wyjaśnione poniżej. Jako kroki przygotowawcze, zawsze najpierw uzyskaj dostęp do pozycji menu `{{<T "BulkRecording" >}}`, a następnie postępuj zgodnie z instrukcjami.
{{% /alert %}}

{{% alert title="Wskazówka" %}}
Podczas procesu skanowania mogą pojawić się komunikaty o błędach. W takim przypadku skaner kodów kreskowych wydaje dźwięk i dalsze skanowanie nie jest możliwe. Potwierdź odpowiedni komunikat o błędzie na wyświetlaczu VitalControl i kontynuuj skanowanie.
{{% /alert %}}

### Data urodzenia obowiązkowa {#birth-date-mandatory}

Dzięki tej opcji ustawień możesz określić, czy data urodzenia musi być podana podczas tworzenia zwierząt. Jeśli dezaktywujesz tę opcję, wystarczy zeskanować kod kreskowy, aby zapisać zwierzę. Dla tych zwierząt jednak aktualna data jest zapisywana jako data urodzenia! Ta funkcja jest domyślnie włączona. Aby ją dezaktywować, wykonaj następujące kroki:

1. Użyj przycisku <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu ustawień" /> `Włącz/Wyłącz`, aby otworzyć menu ustawień.

2. Użyj klawiszy strzałek △ ▽, aby wybrać opcję ustawień `{{<T "BirthDateMandatory" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Żółte kółko symbolizuje, że funkcja jest aktywowana. Szare kółko symbolizuje, że funkcja jest dezaktywowana.

4. Zapisz ustawienia i użyj klawisza `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> aby wrócić do pozycji menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Birth date mandatory](../images/birthdate.png "Birth date mandatory")

### Wartości domyślne {#default-values}

W menu ustawień `{{<T "DefaultValues" >}}` ustawiasz standardy, które mają zastosowanie do każdego zwierzęcia, które tworzysz. Proces tworzenia za pomocą skanera kodów kreskowych pozostaje niezmieniony, jak opisano powyżej. Masz możliwość ustawienia rodzaju zwierząt gospodarskich, płci, rasy i miejsca pobytu. Aby ustawić `{{<T "DefaultValues" >}}`, postępuj w następujący sposób:

1. Użyj przycisku <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off`, aby otworzyć menu ustawień.

2. Użyj klawiszy strzałek △ ▽, aby wybrać pozycję menu `{{<T "DefaultValues" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Otworzy się submenu z różnymi opcjami ustawień. Użyj klawiszy strzałek △ ▽, aby wybrać żądaną opcję ustawienia. Użyj klawiszy strzałek ◁ ▷, aby wybrać żądane ustawienie.

4. Zapisz ustawienia i użyj klawisza `F1`&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> aby wrócić do pozycji menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu New Default values](../images/defaultvalues.png "Default values")

### Zarejestrowane wartości {#recorded-values}

W menu ustawień `{{<T "RecordedValues" >}}` możesz określić, które wartości powinny być rejestrowane oprócz numeru kolczyka i daty urodzenia. Możesz wybierać między `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` i `{{<T "TypeAnimal" >}}`. Gdy tylko ustawisz co najmniej jedną wartość, proces zmienia się podczas skanowania. Najpierw zeskanuj numer kolczyka i datę urodzenia. Następnie użyj klawiszy kierunkowych △ ▽, aby wybrać wartości do ustawienia i ustaw wartości. Następnie zapisz swoje wpisy za pomocą klawisza `F3`. Dopiero wtedy zwierzę zostanie utworzone! Aby ustawić wartości do zarejestrowania, postępuj w następujący sposób:

1. Użyj przycisku <img src="/icons/gear.svg" width="25" align="bottom" alt="Menu ustawień" /> `On/Off`, aby otworzyć menu ustawień.

2. Użyj klawiszy strzałek △ ▽, aby wybrać pozycję menu `{{<T "RecordedValues" >}}` i potwierdź `{{<T "Ok" >}}`.

3. Wybierz żądaną wartość do zapisania za pomocą klawiszy strzałek △ ▽ i potwierdź `{{<T "Ok" >}}`. Pojawi się żółte kółko. Jeśli chcesz dezaktywować wartość do zapisania, ponownie potwierdź `{{<T "Ok" >}}`. Żółte kółko zniknie.

4. Zapisz ustawienia i użyj klawisza `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Zapisz i wróć" /> aby wrócić do pozycji menu <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Nagrywanie zbiorcze" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Jeśli chcesz ponownie dezaktywować wszystkie wartości do zapisania, wybierz opcję ustawienia `{{<T "EnableAllResetOrder" >}}` w pozycji menu `{{<T "RecordedValues" >}}` i potwierdź `{{<T "Ok" >}}`.

   ![VitalControl: Menu Nowe wartości zapisu](../images/recordvalues.png "Zapisz wartości")
