---
title: "Duomenų atsarginės kopijos atkūrimas"
linkTitle: "Atkurti"
date: 2023-07-20
weight: 20
description: >
 Per duomenų atkūrimą, visa VitalControl įrenginio duomenų atsarginė kopija gali būti atkurta kitame įrenginyje naudojant atsarginės kopijos failą.
translationKey: restore
---
{{% usb-drive/en "Norint atkurti duomenų atsarginę kopiją į jūsų VitalControl įrenginį," %}}

Šiame USB atmintuke turi būti katalogas `backup`, kuriame turi būti galiojantis **duomenų atsarginės kopijos failas `backup.vcu`**.

![USB atmintukas su atsarginės kopijos failu VitalControl](../images/backup-file.png "USB atmintukas su atsarginės kopijos failu")

{{% alert title="Pastaba" %}}
USB atmintuko kataloge `backup` galite rasti kelis atsarginės kopijos failus su plėtiniu `.vcu`. VitalControl įrenginys visada atkuria atsarginius duomenis iš failo, pavadinto `backup.vcu`, kuris visada yra naujausias failas. Jei norite atkurti duomenis iš senesnio atsarginės kopijos failo (kurio pavadinime yra atsarginės kopijos data), turite pervadinti šį senesnį atsarginės kopijos failą į `backup.vcu` prieš atlikdami duomenų atkūrimą!
{{% /alert %}}

## Duomenų atkūrimas į VitalControl įrenginį {#data-restoration-to-vitalcontrol-device}

1. Atidarykite meniu punktą &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Įrenginys" /> `Įrenginys` pagrindiniame VitalControl įrenginio ekrane, į kurį norite atkurti duomenis.

2. Pasirinkite submeniu `Duomenų valdymas` ir po to pasirinkite submeniu punktą `Duomenų atsarginė kopija`. Dabar pasirinkite meniu punktą `Atkurti atsarginę kopiją` ir patvirtinkite su `OK`. Dabar jūsų bus paprašyta įdėti USB atmintuką:

   ![VitalControl: meniu kelias duomenų atkūrimui](../images/restore.png "Atkūrimas iš atsarginės kopijos failo")

3. Įdėkite USB atmintuką (C jungtis) į jungtį įrenginio apačioje.

   ![VitalControl: įdėkite USB atmintuką](/images/firmware/update/plug-in-dual-usb-stick.svg "Įdėkite USB atmintuką")

4. Kai įrenginys aptiks USB atmintuko įdėjimą, pasirodys patvirtinimo langas. Patvirtinkite šį iššokantį langą su `Taip`, kad pradėtumėte duomenų atkūrimą. Atsarginės kopijos išskleidimas ir atkūrimas gali užtrukti minutę ar ilgiau. Kai duomenų atkūrimas bus baigtas, bus parodytas sėkmės pranešimas:

![VitalControl: success message data restore](../images/restore-done.png "Success message data restore")

5. Atsarginės duomenų kopijos buvo sėkmingai atkurtos į VitalControl įrenginį.
