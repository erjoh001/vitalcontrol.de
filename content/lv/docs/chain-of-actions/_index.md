---
title: "Darbību ķēde: iestatīšana un lietošana"
linkTitle: "Darbību ķēde"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Veikt vairākas dzīvnieku darbības secīgi
categories: [Darbību ķēde]
tags: [Darbību ķēde, Darbības]
translationKey: action-chain
---
## Darbību ķēde {#chain-of-actions}

Darbību ķēde ļauj automātiski veikt vairākas darbības dzīvniekam vienu pēc otras. Piemēram, jūs varat izvēlēties darbības `{{<T "Temperature" >}}` un `{{<T "Rating" >}}`. Ja pēc tam veicat darbību ķēdi, jūs varat vispirms izmērīt dzīvnieka temperatūru un uzreiz pēc tam ierakstīt vērtējumu.

### Lietot darbību ķēdi {#use-chain-of-actions}

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Vai nu noskenējiet dzīvnieku, izmantojot transponderu, vai apstipriniet ar `{{<T "Ok" >}}` un izmantojiet bulttaustiņus △ ▽ ◁ ▷, lai ievadītu vēlamo dzīvnieka ID.

3. Tagad tiek izpildīta darbību ķēde. Tiklīdz visas darbības darbību ķēdē ir izpildītas, var tieši izvēlēties nākamo dzīvnieku.

{{< tabpane >}}
{{< tab header="Lietot darbību ķēdi:" text=true disabled=true />}}
{{% tab header="Transpondera skenēšana" text=true %}}
![VitalControl: Darbību ķēdes izvēlne](images/chainofactions-scan.png "Darbību ķēde")
{{% /tab %}}
{{% tab header="Manuāla izvēle no saraksta" text=true %}}
![VitalControl: Darbību ķēdes izvēlne](images/chainofactions.png "Darbību ķēde")
{{% /tab %}}
{{< /tabpane >}}

### Iestatīt darbību ķēdi {#set-chain-of-actions}

1. Jūsu VitalControl ierīces galvenajā ekrānā izvēlieties izvēlnes vienumu &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Chain of actions" />&nbsp; `{{<T "ActionChain" >}}` un nospiediet `{{<T "Ok" >}}` pogu.

2. Izmantojiet pogu `F2` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Parādās pārklājuma ekrāns. Izmantojiet bultiņu taustiņus △ ▽, lai izvēlētos starp uzskaitītajām darbībām 1 - 4 (jūs varat veikt līdz četrām darbībām pēc kārtas). Izmantojiet bultiņu taustiņus ◁ ▷, lai izvēlētos vēlamo darbību attiecīgajai darbībai. Saglabājiet iestatījumus ar taustiņu `F1` &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Saglabāt un atgriezties" />&nbsp;.

4. Ja vēlaties atiestatīt visu darbību ķēdi, izvēlieties opciju `{{<T "ResetActionChain" >}}` apakšizvēlnē, izmantojot bultiņu taustiņus △ ▽, un apstipriniet ar `{{<T "Ok" >}}`.

   ![VitalControl: Darbību ķēdes izvēlne](images/setchainofactions.png "Iestatīt darbību ķēdi")

{{% alert title="Padoms" %}}
Individuālajās darbībās jums ir tādas pašas iestatījumu iespējas, kā aprakstīts nodaļā [Darbības](../actions) katrai atsevišķai darbībai.
{{% /alert %}}

{{% alert title="Padoms" %}}
Darbību ķēdes sākuma ekrānā esošie simboli parāda, kuras darbības esat iestatījis un kādā secībā.
{{% /alert %}}
