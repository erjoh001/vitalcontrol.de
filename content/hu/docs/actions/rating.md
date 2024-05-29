---
title: Értékelés
linkTitle: Értékelés
slug: rating
weight: 30
description: >
 Értékeld az állataidat.
date: 2023-07-26
categories: [Actions]
tags: [Actions, Rating]
translationKey: actions/animal-rating
---

## Értékeld az állataidat {#rate-your-animals}

Az állat értékelésekor dokumentálod az egyes állatok állapotát. Az állapotot vizuálisan határozzák meg, és a közlekedési lámpa rendszer segítségével rögzítik. Az alapértékelés során csak az általános állapotot rögzítik. A kiterjesztett értékelés során rögzíted az általános állapotot, a takarmányfelvételt, az ürülék konzisztenciáját és a légzőszervi betegségeket. Az értékelési módot közvetlenül a <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` akcióban változtathatod meg, vagy meghatározhatod a [beállításokban](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Tipp" %}}
A sárga vagy piros értékelés azt jelenti, hogy a VitalControl az állatot feltűnőnek minősíti, és felveszi a riasztási listára.
{{% /alert %}}

1. A VitalControl készülék főképernyőjén válaszd ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot, és nyomd meg az `{{<T "Ok" >}}` gombot.

2. Vagy szkenneld be az állatot a transzponder segítségével, vagy válassz egy állatot a listából. Erősítsd meg az `{{<T "Ok" >}}` gombbal, és válassz egy állatot a △ ▽ nyílgombokkal. Erősítsd meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állati akciókkal. Használd a ◁ ▷ nyílgombokat az <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` akció kiválasztásához, és erősítsd meg az `{{<T "Ok" >}}` gombbal.

4. Megnyílik az értékelési menü. Ha váltani szeretnél az értékelési módok között, használd a `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; gombot és a ◁ ▷ nyílgombokat. Az `F1` gombbal <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; visszatérhetsz az értékelési menübe.

5. Használd a ◁ ▷ △ ▽ nyílgombokat egy állapot kiválasztásához, és mentsd el az `F3` gombbal <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> vagy az `{{<T "Ok" >}}` gombbal.

6. Haladó módban használja az `F1` és `F3` billentyűket a minősítési paraméterek közötti váltáshoz.

{{% alert title="Tipp" %}}
Ha nem választ a nyílbillentyűkkel ◁ ▷, hanem közvetlenül az `F3` vagy `{{<T "Ok" >}}` billentyűvel ment, a VitalControl semleges értékelést ment, amelyet szürke szín jelöl.
{{% /alert %}}

### Alapvető értékelés {#basic-rating}

{{< tabpane >}}
{{< tab header="Alapvető értékelés:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü Műveletek Értékelés](../images/basicrating-scan.png "Alapvető értékelés")
{{% /tab %}}
{{% tab header="Kézi kiválasztás listából" text=true %}}
![VitalControl: Menü Műveletek Értékelés](../images/basicrating.png "Alapvető értékelés")
{{% /tab %}}
{{< /tabpane >}}

### Kiterjesztett értékelés {#extended-rating}

{{< tabpane >}}
{{< tab header="Alapvető értékelés:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü Műveletek Értékelés](../images/extendedrating-scan.png "Kiterjesztett értékelés")
{{% /tab %}}
{{% tab header="Kézi kiválasztás listából" text=true %}}
![VitalControl: Menü Műveletek Értékelés](../images/extendedrating.png "Kiterjesztett értékelés")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg a művelet le van tiltva! Aktiválja a műveletet az [művelet beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}
