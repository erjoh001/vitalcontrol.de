---
title: "RFID-skanning: räckviddstest och diagnos av transpondrar"
linkTitle: RFID-skanning
date: 2023-08-07T10:09:46+02:00
draft: false
categories: [Diagnos, RFID-skanning]
description: >
  Kontrollera räckvidden för din RFID-skanner eller visa läsprotokollet och numren som lagras på okända transpondrar.
translationKey: diagnosis/rfid-scan
weight: 20
---

Med hjälp av menyn 'Räckviddstest' kan du avgöra om VitalControl-enheten kan läsa transpondrar du har till hands. Förutom att kontrollera kompatibilitet kan du också bekvämt bestämma överföringsprotokollet som används av dessa transpondrar och visa numret som lagras på transpondern.

## Utför räckviddstest {#perform-range-test}

1. Öppna menyalternativet &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` på huvudskärmen på din VitalControl-enhet.

1. Gå till undermenyn `{{<T "Service" >}}`, välj menyalternativet `{{<T "RangeTest" >}}` och bekräfta med `{{<T "Ok" >}}`. En animerad skanningsskärm visas nu.

    ![VitalControl: Menyväg Räckviddstest RFID-skanner](../images/rangetest.png "Räckviddstest RFID-skanner")

1.  Närma dig långsamt transpondern till läshuvudet på VitalControl-enheten. För att uppnå ett bra läsresultat måste transpondern vara horisontellt riktad mot läshuvudet på VitalControl-enheten.

    ![ VitalControl: korrekt närma transponder till RFID-läshuvud](/images/diagnosis/transponderscan.svg "Korrekt transponderskanning")

1. Så snart RFID-skannern upptäcker transpondern, utlöses ett vibrationslarm och bakgrundsfärgen på transponderbilden som visas på skärmen ändras till grönt:

   ![VitalControl: Räckviddstest: Transponder upptäckt](../images/transponder-detected.png "Transponder upptäckt")

1. Flytta transpondern fram och tillbaka flera gånger vid gränsen av läsfältet. På detta sätt kan du bestämma läsintervallet för RFID-skannern i kombination med de transpondrar du använder.

## Transponderkontroll {#transponder-check}

Genom att utföra räckviddstestet som beskrivs ovan kan du också få information om transpondrar från olika ursprung:

### Officiella transponderörmärken {#official-transponder-ear-tags}

1. Om du använder transponderörmärken för dina djur, där det officiellt tilldelade 15-siffriga örmärkesnumret för djuret är kodad, visas följande information på skärmen när transpondern har lästs:

    - 15-siffrigt ID officiellt tilldelat ditt djur från din nationella djurid-tjänst.
    - Land där verksamheten är belägen
    - Land där verksamheten är belägen (endast tyska gårdar)
    - Använt överföringsprotokoll (FDX eller HDX)
    <br>

    ![VitalControl: kontroll av transponderörmärke](../images/transponder-official.png "Info officiellt transponderörmärke")

### Transpondrar från tredjepartsleverantörer {#transponders-from-third-party-vendors}

1. Om du använder transpondrar från tredjepartsleverantörer, såsom Urban, för elektronisk identifiering av dina djur, visas följande information på skärmen när transpondern har lästs:

    - ID kodad på transpondern, antalet siffror varierar beroende på tillverkaren
    - Tillverkare av transpondern (om lagrad på transpondern)
    - Använt överföringsprotokoll (FDX eller HDX)
    <br>

    ![VitalControl: kontroll av transponder från tillverkare](../images/transponder-manufacturer.png "Info transponder från tillverkare")
