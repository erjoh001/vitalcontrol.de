---
title: Riasztás
linkTitle: Riasztás
slug: alarm
weight: 60
description: >
 Állatok hozzáadása és eltávolítása a riasztási listáról.
date: 2023-07-26
kategóriák: [Actions]
címkék: [Actions, Alarm]
translationKey: actions/alarm
---

## Riasztás {#alert}

A `{{<T "Alarm" >}}` akcióval állatokat helyezhet a riasztási listára, vagy eltávolíthatja őket onnan. A riasztási lista segít gyorsabban és könnyebben megtalálni a feltűnő állatokat, megkönnyítve ezzel a napi rutinellenőrzéseket. A `{{<T "Alarm" >}}` akció alkalmazásához kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki az `{{<T "Actions" >}}` menüpontot &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy szkenneljen be egy állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állat akcióival. Használja a ◁ ▷ △ ▽ nyílgombokat a &nbsp;<img src="/icons/actions/alarm.svg" width="35" align="bottom" alt="Add alarm" /> `{{<T "Alarm" >}}` akció kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Megjelenik egy értesítés, hogy az állat sikeresen hozzá lett adva a riasztási listához, és az állat kijelzője a fejlécben megváltozik. A szimbólum &nbsp;<img src="/icons/header/animal-in-alarm.svg" width="32" align="bottom" alt="Animal in alarm" /> jelzi, hogy ez az állat a riasztási listán van.

5. Az állatot újra eltávolíthatja a riasztási listáról, ha ismét alkalmazza a &nbsp;<img src="/icons/actions/alarm-minus.svg" width="35" align="bottom" alt="Remove alarm" /> `{{<T "Alarm" >}}` akciót. Hogy az állatot hozzáadja vagy eltávolítja a riasztási listáról a `{{<T "Alarm" >}}` akcióval, azt egy kis + vagy - jel jelzi.

{{< tabpane >}}
{{< tab header="Riasztás:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü Akciók Riasztás](../images/alarm-scan.png "Riasztás")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Akciók Riasztás](../images/alarm.png "Riasztás")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tipp" %}}
Ha ez az akció nem elérhető, valószínűleg az akció deaktiválva lett! Aktiválja az akciót az [akció beállítások](../setting/) menüben. Alternatív megoldásként az összes akció visszaállítása visszahozza ezt az akciót.
{{% /alert %}}


