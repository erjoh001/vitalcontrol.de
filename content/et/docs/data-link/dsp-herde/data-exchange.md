---
title: Andmevahetus VitalControli ja karjahaldustarkvara Herde vahel
linkTitle: Andmevahetus
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sünkroniseerige VitalControl seadmes olevad loomad *Herde* tarkvaras hallatavate loomadega ja edastage VitalControl seadmega mõõdetud väärtused *Herde* tarkvarasse.
weight: 20
categories: [Andmevahetus, DSP Herde]
translationKey: DSPherde/data-exchange
---
Järgige alltoodud samme, et sünkroniseerida andmeid tarkvara `Herde` ja VitalControl seadme vahel:

### Ühendage VitalControl arvutiga

1. Ühendage VitalControl seade arvuti või sülearvutiga kaasasoleva USB-kaabli kaudu.

   ![Ühendage VitalControl arvuti või sülearvutiga](/images/synchronisation/connect-to-pc.svg "Ühendage VitalControl arvutiga")

1. Veenduge, et teie VitalControl seade oleks sisse lülitatud.

### Sooritage andmevahetus

1. Tarkvaras `Herde` sooritage täielik andmevahetus. Sõltuvalt teie kasutajaliidese konfiguratsioonist saate seda vahetust käivitada peamenüüst (ülemine tase _Tehnoloogia_), külgmenüüst või oma kohandatud tööriistakastist (horisontaalne või vertikaalne).

   ![Tarkvara Herde: Täieliku andmevahetuse käivitamine](../screenshots/data-exchange.png "Herde: Andmevahetuse käivitamine")

1. Avaneb hüpikaken, kus vasakul küljel on loetletud määratud tehnoloogiaühendused. Klõpsake nupul `VitalControl`, et alustada andmevahetust:

   ![Tarkvara Herde, andmevahetuse alustamine](../screenshots/start-transfer.png "Herde: Alusta andmevahetust")

1. Esimesel andmevahetusel ilmub hoiatus, et VitalControl seadmes pole veel loomi registreeritud. Kinnitage see teade nupuga `Jah`. Seejärel alustatakse andmevahetust.

   ![Tarkvara Herde, andmevahetus: hoiatus](../screenshots/warning.png "Andmevahetus: hoiatus")

1. Andmevahetus on kaheetapiline protsess: Esimeses etapis ➊ kantakse loomaandmed tarkvarast `Herde` VitalControli. Teises etapis ➋ kantakse VitalControliga kogutud mõõtmisandmed tarkvarasse `Herde`. Hüpikaknas on loetletud imporditud andmekogumid (loomad, poegimised, hoiatused ja kaalud):

![Andmete vahetus tarkvaraga Herde: Tegevuste käik](../screenshots/data-transfer.png "Andmete vahetus: Tegevuste käik")

1. Andmevahetuse edukas lõpuleviimine kuvatakse hüpikaknaga, mis sisaldab edusõnumit.

   ![Tarkvara Herde: Edusõnum andmevahetuse kohta](../screenshots/success-message.png "Herde: Edusõnum andmevahetuse kohta")

    {{% alert title="Tähelepanu" %}}
Kui VitalControl seadmesse on registreeritud palju loomi, võib andmevahetus aega võtta. Andmeülekande kulgu saab jälgida seadme ekraanil.

![VitalControl, andmevahetus: edenemisriba](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: andmevahetuse edenemisriba")
    {{% /alert %}}
