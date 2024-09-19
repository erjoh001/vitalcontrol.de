---
title: "Suur hulk ostetud loomade registreerimine"
linkTitle: "Hulgi-registreerimine"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Kasuta vöötkoodi skannerit mitmesuguste loomade registreerimiseks.
kategooriad: [Hulgi-registreerimine]
Sildid: [Hulgi-registreerimine]
translationKey: new/bulk-recording
---
## Hulgi-registreerimine {#bulk-recording}

Massregistreerimise abil saate lühikese aja jooksul registreerida suure hulga loomi ja need oma seadmesse salvestada. Kasutage vöötkoodi skannerit, et skaneerida veiste passidel olevaid kõrvamärgi numbreid ja sünnikuupäevi. Loom salvestatakse automaatselt ja saate kohe järgmise passi skaneerida. Loomade massiliseks registreerimiseks toimige järgmiselt:

1. Ühendage vöötkoodi skanner VitalControl seadmega kaabli abil.

2. Oma VitalControl seadme põhiekraanil valige menüüpunkt <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Uus loom" /> `{{<T "New" >}}` ja vajutage `{{<T "Ok" >}}` nuppu.

3. Avaneb alammenüü. Kasutage nooleklahve ◁ ▷ △ ▽ menüüpunkti <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hulgi registreerimine" /> `{{<T "BulkRecording" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

4. Avaneb veel üks alammenüü, mis sisaldab ühte välja looma kõrvamärgi numbri jaoks ja teist välja looma sünnikuupäeva jaoks. Skaneerige esmalt kõrvamärgi numbri vöötkood. Välja piir muutub punasest roheliseks. Seejärel skaneerige sünnikuupäev. Piir muutub hetkeks roheliseks enne kui mõlemad piirid muutuvad jälle punaseks. Ekraani ülaosas passi sümboli <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Looma passid" title="Looma passid" /> all olev loendur suureneb 0-lt 1-le. Esimene loom on salvestatud. Jätkake ja skaneerige teised veiste passid. Iga skaneeritud passi järel suureneb passi sümboli <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Looma passid" title="Looma passid" /> all olev loendur ühe võrra. Karja sümboli <img src="/icons/header/group.svg" width="35" align="bottom" alt="Looma grupp"  title="Looma grupp" /> all olev loendur suureneb samuti ühe võrra.

{{% alert title="Vihje" %}}
Loendur passi sümboli all <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> näitab, mitu passi olete korraga skaneerinud, ilma et oleksite lahkunud ekraanilt `{{<T "BulkRecording" >}}`. Loendur karja sümboli all <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> näitab, mitu passi olete kokku skaneerinud. See loendur ei lähtestu nulli, kui lahkute ekraanilt `{{<T "BulkRecording" >}}`. Number vastab teie sisestustele menüüpunkti ['Ostetud loomad'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Menüü 'Uus - Hulgisalvestus'](../images/bulk-recording.png "Hulgisalvestus")

{{% alert title="Vihje" %}}
Menüüpunktis `{{<T "BulkRecording" >}}` on täiendavaid seadistamisvõimalusi. Need on selgitatud allpool. Ettevalmistavate sammudena pääsege alati esmalt menüüpunkti `{{<T "BulkRecording" >}}` ja seejärel järgige juhiseid.
{{% /alert %}}

{{% alert title="Vihje" %}}
Skaneerimisprotsessi ajal võivad ilmneda veateated. Sellisel juhul teeb vöötkoodiskanner heli ja edasine skaneerimine pole võimalik. Kinnitage vastav veateade VitalControli ekraanil ja jätkake skaneerimist.
{{% /alert %}}

### Sünnikuupäev on kohustuslik {#birth-date-mandatory}

Selle seadistusvõimalusega saate määrata, kas loomade loomisel tuleb määrata sünnikuupäev. Kui deaktiveerite selle valiku, peate looma salvestamiseks skaneerima ainult vöötkoodi. Nende loomade jaoks salvestatakse siiski sünnikuupäevana praegune kuupäev! See funktsioon on vaikimisi lubatud. Selle deaktiveerimiseks tehke järgmist:

1. Kasutage <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` nuppu, et avada seadete menüü.

2. Kasutage nooleklahve △ ▽ valiku `{{<T "BirthDateMandatory" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

3. Kollane ring sümboliseerib, et funktsioon on aktiveeritud. Hall ring sümboliseerib, et funktsioon on deaktiveeritud.

4. Salvestage seaded ja kasutage `F1` klahvi &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> menüüpunkti <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}` juurde naasmiseks.

![VitalControl: Menüü Uus Sünnikuupäev kohustuslik](../images/birthdate.png "Sünnikuupäev kohustuslik")

### Vaikimisi väärtused {#default-values}

`{{<T "DefaultValues" >}}` seadistusmenüüs saate määrata standardeid, mis kehtivad iga looma loomisel. Loomise protsess ribakoodi skanneriga jääb samaks nagu ülal kirjeldatud. Teil on võimalus määrata karilooma tüüp, sugu, tõug ja asukoht. `{{<T "DefaultValues" >}}` seadmiseks toimige järgmiselt:

1. Kasutage <img src="/icons/gear.svg" width="25" align="bottom" alt="Seadete menüü" /> `On/Off` nuppu, et avada seadete menüü.

2. Kasutage nooleklahve △ ▽ menüüpunkti `{{<T "DefaultValues" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`-ga.

3. Avaneb alammenüü erinevate seadistusvõimalustega. Kasutage nooleklahve △ ▽ soovitud seadistusvõimaluse valimiseks. Kasutage nooleklahve ◁ ▷ soovitud seadistuse valimiseks.

4. Salvestage seaded ja kasutage `F1` klahvi&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvesta ja naase" /> menüüpunkti <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hulgi registreerimine" />&nbsp; `{{<T "BulkRecording" >}}` naasmiseks.

   ![VitalControl: Menüü Uus Vaikimisi väärtused](../images/defaultvalues.png "Vaikimisi väärtused")

### Registreeritud väärtused {#recorded-values}

`{{<T "RecordedValues" >}}` seadistusmenüüs saate määrata, milliseid väärtusi tuleks lisaks kõrvamärgi numbrile ja sünnikuupäevale registreerida. Saate valida vahel `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` ja `{{<T "TypeAnimal" >}}`. Niipea kui määrate vähemalt ühe väärtuse, muutub skaneerimise protsess. Skaneerige esmalt kõrvamärgi number ja sünnikuupäev. Seejärel kasutage suunaklahve △ ▽ määratavate väärtuste valimiseks ja väärtuste seadmiseks. Seejärel salvestage oma sisestused `F3` klahviga. Alles siis luuakse loom! Registreeritavate väärtuste seadmiseks toimige järgmiselt:

1. Kasutage <img src="/icons/gear.svg" width="25" align="bottom" alt="Seadete menüü" /> `On/Off` nuppu, et avada seadete menüü.

2. Kasutage nooleklahve △ ▽ menüüpunkti `{{<T "RecordedValues" >}}` valimiseks ja kinnitage `{{<T "Ok" >}}`.

3. Valige nooltega △ ▽ salvestatav väärtus ja kinnitage `{{<T "Ok" >}}`-ga. Ilmub kollane ring. Kui soovite salvestatava väärtuse deaktiveerida, kinnitage uuesti `{{<T "Ok" >}}`-ga. Kollane ring kaob.

4. Salvestage seaded ja kasutage `F1` klahvi &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Salvesta ja naase" /> menüüpunkti naasmiseks <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Hulgisalvestus" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Kui soovite kõik salvestatavad väärtused uuesti deaktiveerida, valige menüüpunktis `{{<T "EnableAllResetOrder" >}}` seade `{{<T "RecordedValues" >}}` ja kinnitage `{{<T "Ok" >}}`-ga.

   ![VitalControl: Menüü Uued salvestusväärtused](../images/recordvalues.png "Salvesta väärtused")
