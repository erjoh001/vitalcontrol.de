---
title: Súly rögzítése
linkTitle: Súly
slug: record-weight
weight: 20
description: >
  Rögzítse állatai súlyát.
date: 2023-07-26
kategóriák: [Actions]
címkék: [Actions, weight]
translationKey: actions/weight
---

## Súly rögzítése {#record-weight}
Használja a &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` műveletet, hogy egyedileg mentse állata súlyát. Ehhez mérje meg állatai súlyát vagy becsülje meg azt, és adja meg ezt az értéket a VitalControl készülékben. Ez lehetővé teszi, hogy ellenőrizze állatai súlyfejlődését és egyedileg értékelje őket.

{{% alert title="Tipp" %}}
Ha az átlagos súly nagyon erősen eltér egy irányba (túl magas/túl alacsony), a napi növekedés értékét módosítani kell.
{{% /alert %}}

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy szkennelje be az állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állatműveletekkel. Használja a ◁ ▷ nyílgombokat a &nbsp;<img src="/icons/actions/weight.svg" width="20" align="bottom" alt="Weighing" /> `{{<T "Weighing" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Megnyílik egy menü súlyspecifikációval. Növelje vagy csökkentse ezt a △ ▽ nyílgombokkal, és mentse az eredményt az `F3` gombbal <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> vagy az `{{<T "Ok" >}}` gombbal.

{{< tabpane >}}
{{< tab header="Súly rögzítése:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
  ![VitalControl: Menü Művelet Súlymérés](../images/weighing-scan.png "Súlymérés")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
  ![VitalControl: Menü Művelet Súlymérés](../images/weighing.png "Súlymérés")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg deaktiválták! Aktiválja a műveletet az [művelet beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}


