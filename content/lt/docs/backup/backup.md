---
title: "Duomenų atsarginės kopijos kūrimas"
linkTitle: "Atsarginė kopija"
date: 2023-07-20
weight: 20
description: >
  Duomenų atsarginės kopijos pagalba sukuriamas atsarginės kopijos failas, kuriame yra visi duomenys, saugomi VitalControl įrenginyje.
kategorijos: [Duomenų atsarginė kopija]
Žymos: [atsarginės kopijos failas, USB atmintinė]
translationKey: backup
---
{{% usb-drive/lt "Norėdami atlikti įrenginio duomenų atsarginę kopiją," %}}

## Atlikti duomenų atsarginę kopiją {#perform-data-backup}

1. Atidarykite meniu punktą &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="{{< T "Įrenginys" >}}" /> `{{< T "Įrenginys" >}}` pagrindiniame VitalControl įrenginio ekrane.

2. Pasirinkite submeniu `{{< T "DuomenųValdymas" >}}` ir tada pasirinkite submeniu punktą `{{< T "DuomenųAtsarginėKopija" >}}`. Dabar pasirinkite meniu punktą `{{< T "SukurtiAtsarginęKopiją" >}}` ir patvirtinkite su `OK`. Jums bus paprašyta įdėti USB atmintinę:

   ![VitalControl: meniu kelias duomenų atsarginė kopija](../images/backup.png "Atlikti duomenų atsarginę kopiją")

3. Įdėkite USB atmintinę (C jungtis) į jungtį įrenginio apačioje.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Įdėkite USB atmintinę" title="Įdėkite USB atmintinę" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">2 pav.: Įdėkite USB atmintinę į VitalContro</figcaption></a>
   </figure>

4. Kai įrenginys aptiks USB atmintinės įdėjimą, duomenų atsarginė kopija bus automatiškai pradėta. Duomenų rinkimas, suspaudimas ir rašymas gali užtrukti minutę ar ilgiau. Kai atsarginė kopija bus baigta, bus rodoma sėkmės žinutė:

   ![VitalControl: sėkmės žinutė atsarginė kopija](../images/backup-done.png "Sėkmės duomenų atsarginė kopija")

5. Dabar duomenų atsarginė kopija yra sukurta. Sukurtą failą `backup.vcu` rasite `backup` kataloge savo USB atmintinėje. Atsarginės kopijos failas užima apie 1 MB vietos atmintinėje.

   ![USB atmintinė su atsarginės kopijos failu VitalControl](../images/backup-file.png "USB atmintinė su atsarginės kopijos failu")

   {{% alert title="Patarimas" %}}
  Jei USB atmintinės `backup` kataloge jau yra failas `backup.vcu`, šis failas bus pervadintas. Naujas failo pavadinimas bus sudarytas iš pradinės eilutės `backup` ir datos bei laiko, kada buvo sukurtas atsarginės kopijos failas (pvz., `backup_2023-07-17_12-50-37.vcb`). Naujas atsarginės kopijos failas visada bus pavadintas `backup.vcu`.
    {{% /alert %}}


6. Sukurtas atsarginės kopijos failas gali būti naudojamas [atkurti](../restore) saugomus duomenis bet kuriame VitalControl įrenginyje, jei reikia.
