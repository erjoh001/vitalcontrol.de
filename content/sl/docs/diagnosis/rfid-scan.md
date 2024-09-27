---
title: "RFID skeniranje: test dometa in diagnostika transponderjev"
linkTitle: RFID skeniranje
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnostika, RFID skeniranje]
description: >
  Preverite domet vašega RFID skenerja ali prikažite bralni protokol in številke, shranjene na neznanih transponderjih.
translationKey: diagnosis/rfid-scan
weight: 20
---

Z uporabo menija 'Test dometa' lahko ugotovite, ali lahko naprava VitalControl bere transponderje, ki jih imate pri roki. Poleg preverjanja združljivosti lahko tudi priročno določite prenosni protokol, ki ga uporabljajo ti transponderji, in prikažete številko, shranjeno na transponderju.

## Izvedite test dometa {#perform-range-test}

1. Odprite postavko menija &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Naprava" /> `{{<T "Device" >}}` na glavnem zaslonu vaše naprave VitalControl.

1. Pokličite podmeni `{{<T "Service" >}}`, izberite postavko menija `{{<T "RangeTest" >}}` in potrdite z `{{<T "Ok" >}}`. Zdaj je prikazan animiran zaslon za skeniranje.

    ![VitalControl: Pot menija Test dometa RFID skenerja](../images/rangetest.png "Test dometa RFID skenerja")

1.  Počasi približajte svoj transponder bralni glavi naprave VitalControl. Za dosego dobrega rezultata branja mora biti transponder poravnan vodoravno z bralno glavo naprave VitalControl.

    ![ VitalControl: pravilno približajte transponder RFID bralni glavi](/images/diagnosis/transponderscan.svg "Pravilno skeniranje transponderja")

1. Takoj ko RFID skener zazna transponder, se sproži vibracijski alarm in barva ozadja slike transponderja, prikazane na zaslonu, se spremeni v zeleno:

   ![VitalControl: Test dometa: Transponder zaznan](../images/transponder-detected.png "Transponder zaznan")

1. Premikajte transponder naprej in nazaj večkrat na meji bralnega polja. Na ta način lahko določite bralni domet RFID skenerja v kombinaciji s transponderji, ki jih uporabljate.

## Preverjanje transponderja {#transponder-check}

Izvajanje zgoraj opisanega testa dosega, lahko pridobite informacije tudi o transponderjih iz različnih virov:

### Uradne transponder ušesne oznake {#official-transponder-ear-tags}

1. Če uporabljate transponder ušesne oznake za vaše živali, na katerih je kodirana uradno dodeljena 15-mestna številka ušesne oznake živali, se na zaslonu prikažejo naslednje informacije, ko je transponder prebran:

    - 15-mestna ID številka uradno dodeljena vaši živali s strani vaše nacionalne službe za identifikacijo živali.
    - Država, v kateri se nahaja podjetje
    - Država, v kateri se nahaja podjetje (samo nemške kmetije)
    - Uporabljen prenosni protokol (FDX ali HDX)
    <br>

    ![VitalControl: preverjanje transponder ušesne oznake](../images/transponder-official.png "Info uradna transponder ušesna oznaka")

### Transponderji od tretjih ponudnikov {#transponders-from-third-party-vendors}

1. Če uporabljate transponderje od tretjih dobaviteljev, kot je Urban, za elektronsko identifikacijo vaših živali, se na zaslonu prikažejo naslednje informacije, ko je transponder prebran:

    - ID kodiran na transponderju, število mest se razlikuje glede na proizvajalca
    - Proizvajalec transponderja (če je shranjen na transponderju)
    - Uporabljen prenosni protokol (FDX ali HDX)
    <br>

    ![VitalControl: preverjanje transponderja od proizvajalca](../images/transponder-manufacturer.png "Info transponder od proizvajalca")
