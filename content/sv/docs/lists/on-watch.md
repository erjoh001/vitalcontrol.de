---
title: "På bevakningslista"
linkTitle: "På bevakningslista"
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: on-watch
description: >
 Kolla in din bevakningslista.
Kategorier: [Listor]
Taggar: [Listor, på bevakning]
translationKey: lists/on-watch
---
## På bevakningslista {#on-watch-list}

På bevakningslistan hittar du alla djur som du manuellt har lagt till på listan. Listan hjälper dig att hålla en översikt över de djur du har bedömt som iögonfallande. För varje djur på listan kan du också göra följande:

- [Full åtgärdsmeny](../alarm/#full-action-menu)
- [Djursdata](../alarm/#animal-data)
- [Ta temperatur](../alarm/#take-temperature)
- [Bedöm djur](../alarm/#rate-animal)
- [Ta bort från bevakningslista](#remove-from-watch-list)
- [Växla larmstatus](#toggle-alarm-status)
- [Sök djur](../alarm/#search-animal)
- [Ställ in filter](../alarm/#set-filter)

{{% alert title="Tips" %}}
Vissa åtgärder ska utföras på samma sätt som i [Larmlista](../alarm). Dessa förklaras inte här. Utför de preliminära stegen och använd länken för respektive åtgärd för att komma till instruktionerna.
{{% /alert %}}

Larmlistan är strukturerad enligt följande:

   ![VitalControl Listor På bevakningslista](../images/onwatchstructure.png "Struktur för bevakningslistan")

|Symbol   | Beskrivning
|---------|-----
| ![VitalControl Listor På bevakningslista](../images/kopf.png "Räknare för besättningsstorlek") | Visar hur många djur som finns på listan
| ![Ikon för ko](../images/kopf2.png "Kohuvud") | Visar om det valda djuret är en kalv eller en ko
| ![VitalControl Listor På bevakningslista](../images/auge.png "Bedömning") | Den senaste registrerade bedömningen visas under symbolen med trafikljussystemets färger
| &nbsp;<img src="/icons/actions/temperature.svg" width="12" align="bottom" alt="Kroppstemperatur" title="Kroppstemperatur" /> | Den senaste febermätningen som registrerats visas under symbolen med trafikljussystemets färger
| &nbsp;&nbsp;<img src="/icons/header/alarm.svg" width="8" align="bottom" alt="Visa djur på larm" title="Djur på larm" /> | En cirkelmarkering under symbolen indikerar att djuret finns på larmlistan

### Förberedande steg {#preliminary-steps}

1. Välj menyalternativet <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` på huvudskärmen på din VitalControl-enhet och tryck på `{{<T "Ok" >}}`-knappen.

2. En undermeny öppnas där olika listor visas. Välj listan &nbsp;<img src="/icons/lists/onwatch.svg" width="28" align="bottom" alt="List 'On watch'" /> `{{<T "OnWatch" >}}`. Bekräfta med `{{<T "Ok" >}}`.

3. Listan `{{<T "OnWatch" >}}` är nu öppen.

   ![VitalControl Lists On watch list](../images/firststeps2.png "Preliminary Steps")

### Ta bort från bevakningslistan {#remove-from-watch-list}

1. Slutför de förberedande stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att öppna en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-knappen. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "RemoveFromWatchList" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

3. Inom bevakningslistan, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.

4. Djuret är nu borttaget från bevakningslistan.

   ![VitalControl Lists On watch list](../images/remove.png "Remove from watch list")

### Växla larmstatus {#toggle-alarm-status}

1. Slutför de förberedande stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att öppna en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-knappen. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "ToggleAlarmStatus" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.


3. Inom bevakningslistan, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `På/Av`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Sök" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.

4. Djuret är nu tillagt eller borttaget från larmlistan beroende på dess ursprungliga status.

   ![VitalControl Listor Växla larmstatus](../images/alarmstatus.png "Växla larmstatus")
