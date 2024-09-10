---
title: "RFID scan: rækkeviddetest og diagnose af transpondere"
linkTitle: RFID scan
date: 2023-08-07T10:09:46+02:00
draft: false
kategorier: [Diagnosis, RFID Scan]
description: >
  Tjek rækkevidden af din RFID-scanner eller vis læseprotokollen og numrene gemt på ukendte transpondere.
translationKey: diagnosis/rfid-scan
weight: 20
---

Ved at bruge menuen 'Rækkeviddetest' kan du afgøre, om VitalControl-enheden kan læse de transpondere, du har ved hånden. Udover at tjekke kompatibilitet, kan du også bekvemt bestemme transmissionsprotokollen, der bruges af disse transpondere, og vise nummeret gemt på transponderen.

## Udfør rækkeviddetest {#perform-range-test}

1. Åbn menuen &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` på hovedskærmen af din VitalControl-enhed.

1. Åbn undermenuen `{{<T "Service" >}}`, vælg menuen `{{<T "RangeTest" >}}` og bekræft med `{{<T "Ok" >}}`. En animeret scanningsskærm vises nu.

    ![VitalControl: Menuvej Rækkeviddetest RFID-scanner](../images/rangetest.png "Rækkeviddetest RFID-scanner")

1.  Nærm langsomt din transponder til læsehovedet på VitalControl-enheden. For at opnå et godt læseresultat skal transponderen være vandret justeret til læsehovedet på VitalControl-enheden.

    ![ VitalControl: korrekt nærmelse af transponder til RFID-læsehoved](/images/diagnosis/transponderscan.svg "Korrekt transponderscan")

1. Så snart RFID-scanneren registrerer transponderen, udløses en vibrationsalarm, og baggrundsfarven på transponderbilledet, der vises på skærmen, ændres til grøn:

   ![VitalControl: Rækkeviddetest: Transponder registreret](../images/transponder-detected.png "Transponder registreret")

1. Flyt transponderen frem og tilbage flere gange ved grænsen af læsefeltet. På denne måde kan du bestemme læserækkevidden af RFID-scanneren i kombination med de transpondere, du bruger.

## Transponder check {#transponder-check}

Ved at udføre den ovenfor beskrevne rækkeviddetest kan du også få oplysninger om transpondere fra forskellige oprindelser:

### Officielle transponder øremærker {#official-transponder-ear-tags}

1. Hvis du bruger transponder øremærker til dine dyr, hvor det officielt tildelte 15-cifrede øremærkenummer på dyret er kodet, vises følgende oplysninger på skærmen, når transponderen er læst:

    - 15-cifret ID officielt tildelt dit dyr fra din nationale dyreidentifikationstjeneste.
    - Land, hvor virksomheden er beliggende
    - Land, hvor virksomheden er beliggende (kun tyske gårde)
    - Transmissionsprotokol brugt (FDX eller HDX)
    <br>

    ![VitalControl: check af transponder øremærke](../images/transponder-official.png "Info officielt transponder øremærke")

### Transpondere fra tredjepartsleverandører {#transponders-from-third-party-vendors}

1. Hvis du bruger transpondere fra tredjepartsleverandører, såsom Urban, til elektronisk identifikation af dine dyr, vises følgende oplysninger på skærmen, når transponderen er læst:

    - ID kodet på transponderen, antallet af cifre varierer afhængigt af producenten
    - Producent af transponderen (hvis lagret på transponderen)
    - Transmissionsprotokol brugt (FDX eller HDX)
    <br>

    ![VitalControl: check af transponder fra producent](../images/transponder-manufacturer.png "Info transponder fra producent")
