---
title: "Lista över nykalvade kor"
linkTitle: "Lista över nykalvade kor"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Underlätta kontrollen av dina nykalvade kor.
categories: [Lists]
tags: [Lists, fresh cow]
translationKey: lists/fresh-cows
---
### Lista över nykalvade kor {#fresh-cows-list}

{{% alert title="Förklaring" %}}
När man hanterar nykalvade kor anses det vara en bästa praxis att kontrollera djuren dagligen under flera dagar efter födseln. Listan över nykalvade kor underlättar denna kontroll, särskilt när det gäller temperaturregistrering. För varje djur visas ett stapeldiagram över alla dagar under kontrollperioden, varje dag representeras av en vertikal stapel. Beroende på stapelns färg (grön, gul eller röd) kan du se om en normal, förhöjd eller kritiskt förhöjd temperatur mättes den dagen för det aktuella djuret.
{{% /alert %}}

Kor sätts på listan över nykalvade kor omedelbart efter att deras kalvning har registrerats. De förblir på den listan under en viss tid, längden på denna period (i dagar) kan justeras i [inställningarna](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Följande åtgärder är tillgängliga för denna lista:

- [Fullständig åtgärdsmeny](../alarm/#full-action-menu)
- [Djursdata](../alarm/#animal-data)
- [Ta temperatur](../alarm/#take-temperature)
- [Växla larmstatus](#toggle-alarm-status)
- [Växla bevakningsstatus](#toggle-watch-status)
- [Dölj mätta kor](#hide-measured-cows)
- [Sök djur](../alarm/#search-animal)
- [Ställ in filter](../alarm/#set-filter)

{{% alert title="Tips" %}}
Vissa åtgärder ska utföras på samma sätt som i [larmlistan](../alarm). Dessa förklaras inte här. Utför de preliminära stegen och använd länken för respektive åtgärd för att komma till instruktionerna.
{{% /alert %}}

### Förberedande steg {#preliminary-steps}

1. Välj menyalternativet <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lists" /> `{{<T "Lists" >}}` på huvudskärmen på din VitalControl-enhet och tryck på `{{<T "Ok" >}}`-knappen.

2. En undermeny öppnas där olika listor visas. Välj listan `{{<T "FreshCows" >}}` <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Bekräfta med `{{<T "Ok" >}}`.

3. Listan över färska kor är nu öppen.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Växla larmstatus {#toggle-alarm-status}

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att öppna en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-tangenten. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "ToggleAlarmStatus" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

3. Inom listan över färska kor, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.

4. Djuret är nu tillagt eller borttaget från larmlistan beroende på dess ursprungliga status.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Växla bevakningsstatus {#toggle-watch-status}

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; för att öppna en popup-meny som listar de möjliga åtgärderna när du trycker på `{{<T "Ok" >}}`-tangenten. Använd piltangenterna △ ▽ för att markera åtgärden `{{<T "ToggleWatchStatus" >}}` och välj detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

3. Inom listan över färska kor, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Bekräfta slutligen med `{{<T "Ok" >}}`.


4. Djuret läggs nu till eller tas bort från bevakningslistan beroende på dess ursprungliga status.

   ![VitalControl Lists Fresh cows list](../images/togglewatchstatus.png "Växla bevakningsstatus")

### Dölj mätta kor {#hide-measured-cows}

Om denna funktion är aktiverad, döljs djuren för vilka en temperaturmätning har utförts på listan över sinande kor. Om denna funktion inte är aktiverad, förblir djuren synliga på listan.

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Actions" />&nbsp; för att öppna en popup-meny som listar olika alternativ. Använd piltangenterna △ ▽ för att markera alternativet `{{<T "HideMeasuredCows" >}}` och växla detta alternativ genom att trycka på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

3. Inom listan över färska kor, använd piltangenterna △ ▽ för att välja önskat djur och bekräfta med `{{<T "Ok" >}}`. Alternativt kan du söka efter ett djur. Använd `On/Off`-knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> och använd piltangenterna ◁ ▷ △ ▽ för att välja önskade siffror. Slutligen bekräfta med `{{<T "Ok" >}}`.

4. Funktionen `{{<T "HideMeasuredCows" >}}` är nu aktiverad. Aktivering indikeras genom att kryssrutan markeras.

   ![VitalControl Lists Fresh cows list](../images/hidemeasuredcows.png "Dölj mätta kor")
