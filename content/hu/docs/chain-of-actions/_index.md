---
title: "Akciólánc: beállítás és használat"
linkTitle: "Akciólánc"
weight: 15
date: 2023-07-28T13:25:28+02:00
draft: false
slug: chain-of-actions
description: >
 Több állati akció egymás utáni végrehajtása
categories: [Akciólánc]
tags: [Akciólánc, Akciók]
translationKey: action-chain
--- 
## Akciólánc {#chain-of-actions}

Az akciólánc lehetővé teszi, hogy automatikusan több akciót hajts végre egy állaton egymás után. Például kiválaszthatod a `{{<T "Temperature" >}}` és `{{<T "Rating" >}}` akciókat. Ha ezután végrehajtod az akcióláncot, először megmérheted az állat hőmérsékletét, majd azonnal rögzítheted az értékelést.

### Akciólánc használata {#use-chain-of-actions}

1. A VitalControl készülék főképernyőjén válaszd ki a &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Akciólánc" />&nbsp; `{{<T "ActionChain" >}}` menüpontot és nyomd meg az `{{<T "Ok" >}}` gombot.

2. Vagy olvasd be az állatot a transzponder segítségével, vagy erősítsd meg az `{{<T "Ok" >}}` gombbal, és használd a △ ▽ ◁ ▷ nyílgombokat a kívánt állat azonosítójának megadásához.

3. Az akciólánc most végrehajtásra kerül. Amint az akciólánc összes akciója végrehajtásra került, közvetlenül kiválasztható a következő állat.

{{< tabpane >}}
{{< tab header="Akciólánc használata:" text=true disabled=true />}}
{{% tab header="Transzponder beolvasás" text=true %}}
![VitalControl: Menü akciólánc](images/chainofactions-scan.png "Akciólánc")
{{% /tab %}}
{{% tab header="Kézi kiválasztás listából" text=true %}}
![VitalControl: Menü akciólánc](images/chainofactions.png "Akciólánc")
{{% /tab %}}
{{< /tabpane >}}

### Akciólánc beállítása {#set-chain-of-actions}

1. A VitalControl készülék főképernyőjén válaszd ki a &nbsp;<img src="/icons/actions/action-chain.svg" width="35" align="bottom" alt="Akciólánc" />&nbsp; `{{<T "ActionChain" >}}` menüpontot és nyomd meg az `{{<T "Ok" >}}` gombot.

2. Használd az `F2` gombot &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Aktionskette" />&nbsp; (`{{<T "Settings" >}}`).

3. Egy átfedő képernyő jelenik meg. Használd a △ ▽ nyílgombokat az 1 - 4 listázott akció közötti választáshoz (egymás után legfeljebb négy akciót hajthatsz végre). Használd a ◁ ▷ nyílgombokat a kívánt akció kiválasztásához az adott akcióhoz. Mentsd el a beállításokat az `F1` gombbal &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés és visszatérés" />&nbsp;.


4. Ha az egész műveletsort vissza szeretné állítani, válassza a `{{<T "ResetActionChain" >}}` opciót az almenüben a △ ▽ nyílbillentyűkkel, és erősítse meg az `{{<T "Ok" >}}` gombbal.

    ![VitalControl: Műveletsor menü](images/setchainofactions.png "Műveletsor beállítása")

{{% alert title="Tipp" %}}
Az egyes műveleteken belül ugyanazok a beállítási lehetőségek állnak rendelkezésre, mint az [Műveletek](../actions) fejezetben leírtak az egyes műveletekhez.
{{% /alert %}}

{{% alert title="Tipp" %}}
A műveletsor kezdőképernyőjén található szimbólumok megmutatják, hogy mely műveleteket állította be és milyen sorrendben.
{{% /alert %}}
