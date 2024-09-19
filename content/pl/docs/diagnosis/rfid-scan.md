---
title: "Skanowanie RFID: test zasięgu i diagnostyka transponderów"
linkTitle: RFID scan
date: 2023-08-07T10:09:46+02:00
draft: false
kategorie: [Diagnosis, RFID Scan]
description: >
  Sprawdź zasięg swojego skanera RFID lub wyświetl protokół odczytu i numery zapisane na nieznanych transponderach.
translationKey: diagnosis/rfid-scan
weight: 20
---

Korzystając z menu 'Test zasięgu', możesz sprawdzić, czy urządzenie VitalControl może odczytywać transpondery, które masz pod ręką. Oprócz sprawdzenia kompatybilności, możesz również wygodnie określić protokół transmisji używany przez te transpondery i wyświetlić numer zapisany na transponderze.

## Wykonaj test zasięgu {#perform-range-test}

1. Otwórz pozycję menu &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` na głównym ekranie urządzenia VitalControl.

1. Wywołaj podmenu `{{<T "Service" >}}`, wybierz pozycję menu `{{<T "RangeTest" >}}` i potwierdź `{{<T "Ok" >}}`. Teraz wyświetli się animowany ekran skanowania.

    ![VitalControl: Ścieżka menu Test zasięgu skanera RFID](../images/rangetest.png "Test zasięgu skanera RFID")

1. Powoli zbliż swój transponder do głowicy odczytującej urządzenia VitalControl. Aby uzyskać dobry wynik odczytu, transponder musi być ustawiony poziomo względem głowicy odczytującej urządzenia VitalControl.

    ![ VitalControl: prawidłowe zbliżenie transpondera do głowicy odczytującej RFID](/images/diagnosis/transponderscan.svg "Prawidłowe skanowanie transpondera")

1. Gdy tylko skaner RFID wykryje transponder, zostanie uruchomiony alarm wibracyjny, a kolor tła obrazu transpondera wyświetlanego na ekranie zmieni się na zielony:

   ![VitalControl: Test zasięgu: Transponder wykryty](../images/transponder-detected.png "Transponder wykryty")

1. Przesuwaj transponder tam i z powrotem kilka razy na granicy pola odczytu. W ten sposób możesz określić zasięg odczytu skanera RFID w połączeniu z używanymi transponderami.

## Sprawdzenie transpondera {#transponder-check}

Przeprowadzając opisany powyżej test zasięgu, możesz również uzyskać informacje o transponderach z różnych źródeł:

### Oficjalne kolczyki z transponderem {#official-transponder-ear-tags}

1. Jeśli używasz kolczyków z transponderem dla swoich zwierząt, na których zakodowany jest oficjalnie przypisany 15-cyfrowy numer kolczyka zwierzęcia, po odczytaniu transpondera na ekranie wyświetlane są następujące informacje:

    - 15-cyfrowy ID oficjalnie przypisany do Twojego zwierzęcia przez krajową służbę identyfikacji zwierząt.
    - Kraj, w którym znajduje się gospodarstwo
    - Kraj, w którym znajduje się gospodarstwo (dotyczy tylko niemieckich gospodarstw)
    - Używany protokół transmisji (FDX lub HDX)
    <br>

    ![VitalControl: sprawdzenie kolczyka z transponderem](../images/transponder-official.png "Info official transponder ear tag")

### Transpondery od dostawców zewnętrznych {#transponders-from-third-party-vendors}

1. Jeśli używasz transponderów od dostawców zewnętrznych, takich jak Urban, do elektronicznej identyfikacji swoich zwierząt, po odczytaniu transpondera na ekranie wyświetlane są następujące informacje:

    - ID zakodowany na transponderze, liczba cyfr zależy od producenta
    - Producent transpondera (jeśli zapisany na transponderze)
    - Używany protokół transmisji (FDX lub HDX)
    <br>

    ![VitalControl: sprawdzenie transpondera od producenta](../images/transponder-manufacturer.png "Info transponder from manufacturer")
