---
title: Megfigyelés alatt
linkTitle: Megfigyelés alatt
slug: on-watch
weight: 70
description: >
 Állatok megfigyelési listára helyezése vagy eltávolítása.
date: 2023-07-26
categories: [Actions]
tags: [Actions, on watch]
translationKey: actions/on-watch
---

## Megfigyelés alatt {#on-watch}

A `{{<T "OnWatch" >}}` művelettel állatokat helyezhet a megfigyelési listára vagy távolíthat el onnan. A megfigyelési lista segít gyorsabban és könnyebben megtalálni a feltűnő állatokat, így megkönnyítve a napi rutin ellenőrzéseket. A `{{<T "OnWatch" >}}` művelet alkalmazásához kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy olvassa be egy állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állatműveletekkel. Használja a ◁ ▷ △ ▽ nyílgombokat a &nbsp;<img src="/icons/actions/on-watch.svg" width="35" align="bottom" alt="On watch" /> `{{<T "OnWatch" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Megjelenik egy értesítés, hogy az állat sikeresen hozzá lett adva a megfigyelési listához.

5. Az állatot újra eltávolíthatja a megfigyelési listáról, ha ismét alkalmazza a &nbsp;<img src="/icons/actions/on-watch-minus.svg" width="35" align="bottom" alt="Not on watch" />  `{{<T "OnWatch" >}}` műveletet. Hogy az állatot hozzáadja vagy eltávolítja a megfigyelési listáról a `{{<T "OnWatch" >}}` művelettel, azt egy kis ⊕ vagy ⊖ jel jelzi.

{{< tabpane >}}
{{< tab header="Megfigyelés alatt:" text=true disabled=true />}}
{{% tab header="Transzponder beolvasás" text=true %}}
![VitalControl: Menü Műveletek Megfigyelés alatt](../images/onwatch-scan.png "Megfigyelés alatt")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Műveletek Megfigyelés alatt](../images/onwatch.png "Megfigyelés alatt")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg deaktiválva lett! Aktiválja a műveletet a [művelet beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}


