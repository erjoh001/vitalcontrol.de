---
title: Állatveszteség
linkTitle: Állatveszteség
slug: animal-loss
weight: 110
description: >
 Állatveszteség regisztrálása.
date: 2023-07-26
kategóriák: [Actions]
címkék: [Actions, animal-loss]
translationKey: actions/animal-loss
---

## Állatveszteség {#animal-loss}

Az `{{<T "AnimalLoss" >}}` művelet lehetővé teszi egy állatveszteség regisztrálását. Az állatveszteség regisztrálásához kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a menüpontot &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy olvassa be egy állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a nyíl billentyűkkel △ ▽. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Egy almenü nyílik meg az állatműveletekkel. Használja a nyíl billentyűket ◁ ▷ △ ▽ a <img src="/icons/actions/animal-loss.svg" width="38" align="bottom" alt="Tierverlust" /> `{{<T "AnimalLoss" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Egy másik almenü nyílik meg, ahol különböző beállításokat menthet. Használja a nyíl billentyűket △ ▽ a kívánt beállítási lehetőség kiválasztásához. Használja a nyíl billentyűket ◁ ▷ a kívánt beállítás kiválasztásához.

5. Használja az `F3` gombot az állat kijelentéséhez a megadott beállításokkal.

{{< tabpane >}}
{{< tab header="Állatveszteség:" text=true disabled=true />}}
{{% tab header="Transzponder beolvasás" text=true %}}
![VitalControl: Menü Művelet Állatveszteség](../images/animalloss-scan.png "Állatveszteség regisztrálása")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Művelet Állatveszteség](../images/animalloss.png "Állatveszteség regisztrálása")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg a művelet deaktiválva lett! Aktiválja a műveletet a [művelet beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}
