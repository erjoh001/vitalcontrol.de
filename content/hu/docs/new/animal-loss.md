---
title: Állatveszteség regisztrációja
linkTitle: Állatveszteség
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Hogyan regisztráljuk egy állat elvesztését a VitalControl eszközzel.
categories: [Állatveszteség]
tags: [Állatveszteség]
translationKey: new/animal-loss
---
## Állatveszteség rögzítése {#record-the-loss-of-an-animal}

{{% alert title="Tipp" %}}
Az állatveszteség funkció ebben a menüpontban elsősorban elhullott borjak/bárányok rögzítésére szolgál. A beállítási lehetőségek ennek megfelelően vannak adaptálva, és nem azonosak az `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` vagy `{{<T "AnimalLoss" >}}` menüpontok beállítási elemeivel.
{{% /alert %}}

Az állatveszteség rögzítéséhez kövesse az alábbi lépéseket:

1. A VitalControl eszköz főképernyőjén válassza ki a <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Új állat" /> `{{<T "New" >}}` menüpontot, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Egy almenü nyílik meg. Használja a nyílgombokat ◁ ▷ △ ▽ a <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Állatveszteség" /> `{{<T "AnimalLoss" >}}` menüpont kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Vagy olvassa be az anyaállat transzponderét, vagy használja az `{{<T "Ok" >}}` gombot. Adja meg az anyaállat azonosítóját a nyílgombok ◁ ▷ △ ▽ segítségével, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Egy másik almenü nyílik meg, ahol elmentheti az állat adatait. Használja a nyílgombokat △ ▽ a kívánt beállítási elem kiválasztásához.

5. Az `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` és `{{<T "CalvingEase" >}}` beállításokhoz használja a nyílgombokat ◁ ▷ a kívánt beállítás kiválasztásához.

6. A `{{<T "DateBirth" >}}` beállításhoz használja a nyílgombokat △ ▽ a kívánt beállítási lehetőség kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal. Használja a nyílgombokat △ ▽◁ ▷ a kívánt számok kiválasztásához. Végül erősítse meg az `{{<T "Ok" >}}` gombbal.

7. Mentse el a beállításokat és hozza létre az új állatot az `F3` gombbal &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Mentés" />&nbsp;.

{{% alert title="Tipp" %}}
További információk és beállítási lehetőségek az új állatok létrehozásához [itt találhatók](../../settings/animal-registration/).
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Állatveszteség:" text=true disabled=true />}}
{{% tab header="Transzponder szkennelés" text=true %}}
![VitalControl: Menü útvonal Új állatveszteség](../images/animalloss-scan.png "Egy állat elvesztésének rögzítése")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü útvonal Új állatveszteség](../images/animalloss.png "Egy állat elvesztésének rögzítése")
{{% /tab %}}
{{< /tabpane >}}
