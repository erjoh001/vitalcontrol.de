---
title: Állat törlése
linkTitle: Törlés
slug: unregister
weight: 100
description: >
 Állat törlése
date: 2023-07-26
categories: [Actions]
tags: [Actions, Unregister]
translationKey: actions/unregister
---
{{% alert title="Figyelem" color="warning" %}}
Amint törli az állat adatlapját, az többé nem áll rendelkezésre értékelési célokra! Ha töröl egy állatot, de például később újra értékelni szeretné az állat fejlődését, meg kell őriznie az állat adatlapját!
{{% /alert %}}

## Törlés {#unregister}

A `{{<T "Unregister" >}}` művelet lehetővé teszi egy állat törlését, amint az elmozdul. Az állat törléséhez kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy szkenneljen be egy állatot a transzponder segítségével, vagy válasszon egy állatot a listából. Erősítse meg az `{{<T "Ok" >}}` gombbal, és válasszon egy állatot a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állatműveletekkel. Használja a ◁ ▷ △ ▽ nyílgombokat a &nbsp;<img src="/icons/actions/unregister.svg" width="33" align="bottom" alt="Unregister" /> `{{<T "Unregister" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Megnyílik egy másik almenü, ahol különböző beállításokat menthet. Használja a △ ▽ nyílgombokat a kívánt beállítási lehetőség kiválasztásához. Használja a ◁ ▷ nyílgombokat a kívánt beállítás kiválasztásához.

5. Használja az `F3` `{{<T "Unregister" >}}` gombot az állat törléséhez a megadott beállításokkal.

{{< tabpane >}}
{{< tab header="Törlés:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü Művelet Törlés](../images/unregister-scan.png "Állat törlése")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Művelet Törlés](../images/unregister.png "Állat törlése")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tipp" %}}
Ha ez a művelet nem elérhető, valószínűleg a művelet le van tiltva! Aktiválja a műveletet a [művelet beállítások](../setting/) menüben. Alternatív megoldásként az összes művelet visszaállítása visszahozza ezt a műveletet.
{{% /alert %}}


