---
title: Vērtējums
linkTitle: Vērtējums
slug: rating
weight: 30
description: >
 Novērtējiet savus dzīvniekus.
date: 2023-07-26
categories: [Darbības]
tags: [Darbības, Vērtējums]
translationKey: actions/animal-rating
---

## Novērtējiet savus dzīvniekus {#rate-your-animals}

Novērtējot dzīvnieku, jūs dokumentējat individuālā dzīvnieka stāvokli. Stāvoklis tiek noteikts vizuāli un reģistrēts ar luksofora sistēmas palīdzību. Pamata novērtējumā tiek reģistrēts tikai vispārējais stāvoklis. Paplašinātajā novērtējumā jūs reģistrējat vispārējo stāvokli, barības uzņemšanu, fekāliju konsistenci un elpošanas slimības. Jūs varat mainīt vērtēšanas režīmu tieši <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` darbībā vai arī to definēt [iestatījumos](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Padoms" %}}
Dzeltenais vai sarkanais novērtējums nozīmē, ka VitalControl klasificē dzīvnieku kā pamanāmu un ievieto to trauksmes sarakstā.
{{% /alert %}}

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Vai nu skenējiet dzīvnieku, izmantojot transponderu, vai izvēlieties dzīvnieku no saraksta. Apstipriniet ar `{{<T "Ok" >}}` un izvēlieties dzīvnieku ar bultiņu taustiņiem △ ▽. Apstipriniet ar `{{<T "Ok" >}}`.

3. Atveras apakšizvēlne ar dzīvnieku darbībām. Izmantojiet bultiņu taustiņus ◁ ▷, lai izvēlētos darbību <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` un apstipriniet ar `{{<T "Ok" >}}`.

4. Atveras vērtēšanas izvēlne. Ja vēlaties pārslēgt vērtēšanas režīmu, izmantojiet `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; pogu un bultiņu taustiņus ◁ ▷. Ar `F1` taustiņu <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; jūs atgriežaties uz novērtēšanas izvēlni.

5. Izmantojiet bultiņu taustiņus ◁ ▷ △ ▽, lai izvēlētos stāvokli un saglabājiet to ar `F3` taustiņu <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> vai `{{<T "Ok" >}}` taustiņu.

6. Paplašinātajā režīmā izmantojiet taustiņus `F1` un `F3`, lai pārslēgtos starp vērtēšanas parametriem.

{{% alert title="Padoms" %}}
Ja neveicat izvēli, izmantojot bulttaustiņus ◁ ▷, bet saglabājat tieši, izmantojot taustiņu `F3` vai `{{<T "Ok" >}}`, VitalControl saglabā neitrālu novērtējumu, kas attēlots ar pelēku krāsu.
{{% /alert %}}

### Pamata vērtējums {#basic-rating}

{{< tabpane >}}
{{< tab header="Pamata vērtējums:" text=true disabled=true />}}
{{% tab header="Transpondera skenēšana" text=true %}}
![VitalControl: Izvēlņu darbības vērtējums](../images/basicrating-scan.png "Pamata vērtējums")
{{% /tab %}}
{{% tab header="Manuāla izvēle no saraksta" text=true %}}
![VitalControl: Izvēlņu darbības vērtējums](../images/basicrating.png "Pamata vērtējums")
{{% /tab %}}
{{< /tabpane >}}

### Paplašinātais vērtējums {#extended-rating}

{{< tabpane >}}
{{< tab header="Pamata vērtējums:" text=true disabled=true />}}
{{% tab header="Transpondera skenēšana" text=true %}}
![VitalControl: Izvēlņu darbības vērtējums](../images/extendedrating-scan.png "Paplašinātais vērtējums")
{{% /tab %}}
{{% tab header="Manuāla izvēle no saraksta" text=true %}}
![VitalControl: Izvēlņu darbības vērtējums](../images/extendedrating.png "Paplašinātais vērtējums")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Padoms" %}}
Ja šī darbība nav pieejama, iespējams, ka darbība ir deaktivizēta! Aktivizējiet darbību [darbību iestatījumu](../setting/) izvēlnē. Alternatīvi, atiestatot visas darbības, šī darbība atkal būs pieejama.
{{% /alert %}}
