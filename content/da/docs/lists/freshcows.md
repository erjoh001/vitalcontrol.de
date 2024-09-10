---
title: "Liste over nykælvere"
linkTitle: "Liste over nykælvere"
weight: 40
date: 2023-07-28T13:25:28+02:00
draft: false
slug: fresh-cows
description: >
  Faciliter kontrollen af dine nykælvere.
kategorier: [Lister]
tags: [Lister, nykælver]
translationKey: lists/fresh-cows
---
### Liste over nykælvere {#fresh-cows-list}

{{% alert title="Forklaring" %}}
Når man håndterer nykælvere, betragtes det som en bedste praksis rutine at kontrollere dyrene dagligt i flere dage efter fødslen. Listen over nykælvere understøtter denne kontrol, især med hensyn til temperaturregistrering. For hvert dyr vises et søjlediagram over alle dage i kontrolperioden, hver dag i kontrolperioden er repræsenteret af en lodret søjle. Afhængigt af søjlens farve (grøn, gul eller rød), kan du se, om der blev målt en normal, forhøjet eller kritisk forhøjet temperatur på den pågældende dag for det respektive dyr.
{{% /alert %}}

Køer sættes på listen over nykælvere umiddelbart efter, at deres kælvning er blevet registreret. De forbliver på den liste i en vis periode, længden af denne periode (i dage) kan justeres i [indstillingerne](../../settings/data-acquisition/#control-period-of-fresh-cows).
 Følgende handlinger er tilgængelige for denne liste:

- [Fuld handlingsmenu](../alarm/#full-action-menu)
- [Dyredata](../alarm/#animal-data)
- [Tag temperatur](../alarm/#take-temperature)
- [Skift alarmstatus](#toggle-alarm-status)
- [Skift overvågningsstatus](#toggle-watch-status)
- [Skjul målte køer](#hide-measured-cows)
- [Søg dyr](../alarm/#search-animal)
- [Sæt filter](../alarm/#set-filter)

{{% alert title="Tip" %}}
Nogle handlinger skal udføres på samme måde som i [alarmlisten](../alarm). Disse er ikke forklaret her. Udfør de indledende trin og brug linket til den respektive handling for at få instruktionerne.
{{% /alert %}}

### Indledende Trin {#preliminary-steps}

1. Vælg menupunktet <img src="/icons/main/lists.svg" width="25" align="bottom" alt="Lister" /> `{{<T "Lists" >}}` på hovedskærmen på din VitalControl-enhed og tryk på `{{<T "Ok" >}}` knappen.

2. En undermenu åbnes, hvor forskellige lister vises. Vælg `{{<T "FreshCows" >}}` listen <img src="/icons/lists/freshcows.svg" width="30" align="bottom" alt="Fresh-cows" />. Bekræft med `{{<T "Ok" >}}`.

3. Listen over friske køer er nu åben.

   ![VitalControl Lists Fresh cows list](../images/firststeps4.png "Fresh cow list")

### Skift alarmstatus {#toggle-alarm-status}

1. Fuldfør de indledende trin.

2. Brug `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for at fremkalde en popup-menu, der viser de mulige handlinger, når du trykker på `{{<T "Ok" >}}` tasten. Brug piletasterne △ ▽ for at fremhæve handlingen `{{<T "ToggleAlarmStatus" >}}` og vælg denne mulighed ved at trykke på den centrale `{{<T "Ok" >}}` knap eller `F3` tasten `{{<T "Ok" >}}`.

3. Inden for listen over friske køer, brug piletasterne △ ▽ for at vælge det ønskede dyr og bekræft med `{{<T "Ok" >}}`. Alternativt kan du søge efter et dyr. Brug `On/Off` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og brug piletasterne ◁ ▷ △ ▽ for at vælge de ønskede cifre. Bekræft til sidst med `{{<T "Ok" >}}`.

4. Dyret er nu tilføjet eller fjernet fra alarmlisten afhængigt af dets oprindelige status.

   ![VitalControl Lists Fresh cows list](../images/togglealarmstatus.png "Toggle alarm status")

### Skift overvågningsstatus {#toggle-watch-status}

1. Fuldfør de indledende trin.

2. Brug `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Open popup" />&nbsp; for at fremkalde en popup-menu, der viser de mulige handlinger, når du trykker på `{{<T "Ok" >}}` tasten. Brug piletasterne △ ▽ for at fremhæve handlingen `{{<T "ToggleWatchStatus" >}}` og vælg denne mulighed ved at trykke på den centrale `{{<T "Ok" >}}` knap eller `F3` tasten `{{<T "Ok" >}}`.

3. Inden for listen over friske køer, brug piletasterne △ ▽ for at vælge det ønskede dyr og bekræft med `{{<T "Ok" >}}`. Alternativt kan du søge efter et dyr. Brug `On/Off` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Search" /> og brug piletasterne ◁ ▷ △ ▽ for at vælge de ønskede cifre. Bekræft til sidst med `{{<T "Ok" >}}`.

4. Dyret er nu tilføjet eller fjernet fra overvågningslisten afhængigt af dets oprindelige status.

   ![VitalControl Lister Friske køer liste](../images/togglewatchstatus.png "Skift overvågningsstatus")

### Skjul målte køer {#hide-measured-cows}

Hvis denne funktion er aktiveret, skjules de dyr, for hvilke der er foretaget en temperaturmåling, på goldkøerlisten. Hvis denne funktion ikke er aktiveret, forbliver dyrene synlige på listen.

1. Fuldfør de indledende trin.

2. Brug `F3` tasten &nbsp;<img src="/icons/footer/open-popup.svg" width="15" align="bottom" alt="Handlinger" />&nbsp; for at fremkalde en popup-menu, der viser forskellige muligheder. Brug piletasterne △ ▽ for at fremhæve muligheden `{{<T "HideMeasuredCows" >}}` og skift denne mulighed ved at trykke på den centrale `{{<T "Ok" >}}` knap eller `F3` tasten `{{<T "Ok" >}}`.

3. Inden for listen over friske køer, brug piletasterne △ ▽ for at vælge det ønskede dyr og bekræft med `{{<T "Ok" >}}`. Alternativt kan du søge efter et dyr. Brug `On/Off` knappen <img src="/icons/footer/search.svg" width="15" align="bottom" alt="Søg" /> og brug piletasterne ◁ ▷ △ ▽ for at vælge de ønskede cifre. Bekræft til sidst med `{{<T "Ok" >}}`.

4. Funktionen `{{<T "HideMeasuredCows" >}}` er nu aktiveret. Aktivering er angivet ved at afkrydse boksen.

   ![VitalControl Lister Friske køer liste](../images/hidemeasuredcows.png "Skjul målte køer")
