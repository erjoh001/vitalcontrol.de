---
title: Åtgärdslista
linkTitle: Åtgärdslista
weight: 30
date: 2023-07-28T13:25:28+02:00
draft: false
slug: actions
description: >
 Kolla in din åtgärdslista.
categories: [Lists]
tags: [Lists, Action]
translationKey: lists/action
---
## Åtgärdslista {#action-list}

Inom åtgärdslistan kan du se de djur för vilka ingen åtgärd har vidtagits på sex timmar. Följande inställningsalternativ är också tillgängliga:

- [Ta temperatur](../alarm/#take-temperature)
- [Betygsätt djur](../alarm/#rate-animal)
- [Väg djur](#weigh-animals)
- [Åtgärdskedja](#chain-of-action)
- [Länka transponder](#link-transponder)
- [Dölj efter åtgärd](#hide-after-action)
- [Sök djur](../alarm/#search-animal)
- [Ställ in filter](../alarm/#set-filter)

{{% alert title="Hint" %}}
Vissa åtgärder ska utföras på samma sätt som i [larmlistan](../alarm). Dessa förklaras inte här. Utför de preliminära stegen och använd länken för respektive åtgärd för att komma till instruktionerna.
{{% /alert %}}

### Preliminära steg {#preliminary-steps}

1. Välj menyalternativet <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Lists" />  `{{<T "Lists" >}}` på huvudskärmen på din VitalControl-enhet och tryck på `{{<T "Ok" >}}`-knappen.

2. En undermeny öppnas där olika listikoner visas. Markera ikonen <img src="/icons/lists/actionlist.svg" width="30" align="bottom" alt="Action list" /> `{{<T "ActionList" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. Åtgärdslistan är nu öppen.

   ![VitalControl Lists Action list](../images/firststeps3.png "Preliminary Steps")

### Väg djur {#weigh-animals}

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att öppna en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-knappen. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "WeighAnimal" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.


3. Inom åtgärdslistan, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.

4. Menyn [väg djur](../../actions/record-weight/) öppnas automatiskt.

   ![VitalControl Lists Action list](../images/weightanimals.png "Väg djur")

### Åtgärdskedja {#chain-of-action}

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att anropa en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-tangenten. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "ActionChain" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

3. Inom åtgärdslistan, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.

4. Funktionen [åtgärdskedja](../../chain-of-actions) öppnas automatiskt.

   ![VitalControl Lists Action list](../images/chainofaction.png "Åtgärdskedja")

### Länka transponder {#link-transponder}

Denna funktion används för att lägga till en transponder till dataregistret för djur som ännu inte har tilldelats en transponder.

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att anropa en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-tangenten. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "LinkTransponder" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.


3. Inom åtgärdslistan, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.

4. Skanna nu in transpondern för det aktuella djuret.

   ![VitalControl Lists Action list](../images/linktransponder.png "Länka transponder")

### Dölj efter åtgärd {#hide-after-action}

Om denna funktion är aktiverad, kommer djur för vilka en åtgärd har utförts att döljas från åtgärdslistan. Om denna funktion är avaktiverad, kommer bearbetade djur att förbli synliga i listan.

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; för att öppna en popup-meny som listar olika alternativ. Använd piltangenterna △ ▽ för att markera alternativet `{{<T "HideAfterAction" >}}` och växla detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

3. Funktionen `{{<T "HideAfterAction" >}}` är nu aktiverad/inaktiverad. Aktivering indikeras via en bock i rutan.

   ![VitalControl Lists Action list](../images/hideafteraction.png "Dölj efter åtgärd")

