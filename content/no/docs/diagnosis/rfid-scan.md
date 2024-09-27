---
title: "RFID-skanning: rekkeviddetest og diagnose av transpondere"
linkTitle: RFID-skanning
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnose, RFID-skanning]
description: >
  Sjekk rekkevidden til RFID-skanneren din eller vis leseprotokollen og numrene lagret på ukjente transpondere.
translationKey: diagnosis/rfid-scan
weight: 20
---

Ved å bruke menyen 'Rekkeviddetest' kan du avgjøre om VitalControl-enheten kan lese transpondere du har for hånden. I tillegg til å sjekke kompatibilitet, kan du også enkelt bestemme overføringsprotokollen som brukes av disse transponderne og vise nummeret lagret på transponderen.

## Utfør rekkeviddetest {#perform-range-test}

1. Åpne menyelementet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` på hovedskjermen til din VitalControl-enhet.

1. Åpne undermenyen `{{<T "Service" >}}`, velg menyelementet `{{<T "RangeTest" >}}` og bekreft med `{{<T "Ok" >}}`. En animert skanningsskjerm vises nå.

    ![VitalControl: Menyvei Rekkeviddetest RFID-skanner](../images/rangetest.png "Rekkeviddetest RFID-skanner")

1.  Nærm deg sakte transponderen til lesehodet på VitalControl-enheten. For å oppnå et godt leseresultat må transponderen være horisontalt justert til lesehodet på VitalControl-enheten.

    ![ VitalControl: korrekt nærme transponder til RFID-lesehode](/images/diagnosis/transponderscan.svg "Korrekt transponderskanning")

1. Så snart RFID-skanneren oppdager transponderen, utløses en vibrasjonsalarm og bakgrunnsfargen på transponderbildet som vises på skjermen endres til grønn:

   ![VitalControl: Rekkeviddetest: Transponder oppdaget](../images/transponder-detected.png "Transponder oppdaget")

1. Flytt transponderen frem og tilbake flere ganger ved grensen av leseområdet. På denne måten kan du bestemme leseområdet til RFID-skanneren i kombinasjon med transponderne du bruker.

## Transponderkontroll {#transponder-check}

Ved å utføre rekkeviddetesten beskrevet ovenfor, kan du også få informasjon om transpondere fra forskjellige opprinnelser:

### Offisielle transponder øremerker {#official-transponder-ear-tags}

1. Hvis du bruker transponder øremerker for dyrene dine, hvor det offisielt tildelte 15-sifrede øremerket til dyret er kodet, vises følgende informasjon på skjermen når transponderen er lest:

    - 15-sifret ID offisielt tildelt til dyret ditt fra din nasjonale dyreidentifikasjonstjeneste.
    - Landet der virksomheten er lokalisert
    - Landet der virksomheten er lokalisert (kun tyske gårder)
    - Overføringsprotokoll brukt (FDX eller HDX)
    <br>

    ![VitalControl: sjekk av transponder øremerke](../images/transponder-official.png "Info offisielt transponder øremerke")

### Transpondere fra tredjepartsleverandører {#transponders-from-third-party-vendors}

1. Hvis du bruker transpondere fra tredjepartsleverandører, som Urban, for elektronisk identifikasjon av dyrene dine, vises følgende informasjon på skjermen når transponderen er lest:

    - ID kodet på transponderen, antall sifre varierer avhengig av produsenten
    - Produsent av transponderen (hvis lagret på transponderen)
    - Overføringsprotokoll brukt (FDX eller HDX)
    <br>

    ![VitalControl: sjekk av transponder fra produsent](../images/transponder-manufacturer.png "Info transponder fra produsent")
