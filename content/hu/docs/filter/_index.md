---
title: Szűrő alkalmazása egy állatlistán
linkTitle: Szűrő
weight: 50
description: >
 Hogyan alkalmazzunk szűrőt egy állatlistán annak érdekében, hogy csak az eszközön lévő állatok egy részhalmazát jelenítsük meg.
date: 2023-07-26
categories: [Szűrő]
tags: [Szűrő]
translationKey: filter
---
## Szűrők alkalmazása {#applying-filters}

{{% alert title="MEGJEGYZÉS" %}}
A szűrő segít a kiválasztás végrehajtásában a VitalControl eszköz `{{<T "Herd" >}}`, `{{<T "Lists" >}}` és `{{<T "Evaluation" >}}` menüpontjaiban található szűrési kritériumok segítségével. Amint alkalmaz egy szűrőt, a különböző szűrési kritériumok szimbólumai megjelennek a képernyő tetején. Ezek a szimbólumok segítenek megtudni, hogy mely szűrési kritériumok vannak aktiválva. Például, ha a `{{<T "Sex" >}}` szűrőt férfira állítja, az eszköz csak férfi állatokat fog használni. Ha például az `{{<T "OnWatch" >}}` szűrőt is aktiválja, az eszköz csak a megfigyelési listán szereplő férfi állatokat használja.
{{% /alert %}}

Szűrő létrehozásához az értékelésekben, kövesse az alábbi lépéseket:

1. A felső menüpont <img src="/icons/main/evaluation.svg" width="50" align="bottom" alt="Értékelés" /> `{{<T "Evaluation" >}}` alá tartozó almenüben nyomja meg egyszer az `F3` gombot <img src="/icons/footer/filter.svg" width="25" align="bottom" alt="Szűrő" />. A felső menüpontok <img src="/icons/main/lists.svg" width="28" align="bottom" alt="Listák" /> `{{<T "Lists" >}}` és <img src="/icons/main/herd.svg" width="60" align="bottom" alt="Nyáj" /> `{{<T "Herd" >}}` alá tartozó almenükben kétszer kell megnyomnia a gombot.

2. Megnyílik egy almenü, ahol beállíthatja az összes szűrési lehetőséget. Szűrhet `{{<T "AnimalID" >}}`, `{{<T "Age" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}`, `{{<T "NationalAnimalID" >}}`, `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}`, `{{<T "TypeAnimal" >}}` és `{{<T "Alarm" >}}` alapján.

3. Az `{{<T "TypeAnimal" >}}`, `{{<T "Sex" >}}`, `{{<T "Transponder" >}}` és `{{<T "NationalAnimalID" >}}` szűrők esetében navigáljon a megfelelő területre és erősítse meg az `{{<T "Ok" >}}` gombbal. Használja a ◁ ▷ nyílgombokat a kívánt beállítás megadásához. Az `F3` gomb `{{<T "Apply" >}}` segítségével helyezze el a kiválasztott beállítást. A szűrő módosításainak elvetéséhez nyomja meg az `F1` gombot &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Vissza" />&nbsp;.

![VitalControl: menu Evaluation Create filter](images/filter.png "Szűrő létrehozása")

4. Az `{{<T "AnimalID" >}}` és `{{<T "Age" >}}` szűrőknél válassza ki a megfelelő feltételt, majd erősítse meg `{{<T "Ok" >}}` gombbal. Most egy alsó és egy felső határ lesz látható. Navigáljon a kívánt határhoz a nyílbillentyűkkel △ ▽ és erősítse meg kétszer az `{{<T "Ok" >}}` gomb megnyomásával. Most beállíthatja a kívánt számot a nyílbillentyűkkel ◁ ▷ és a nyílbillentyűkkel △ ▽. Ha minden beállítás helyes, nyomja meg újra az `{{<T "Ok" >}}` gombot a beállítási mód elhagyásához, és alkalmazza a kiválasztott szűrő(ke)t az `F3` gomb `{{<T "Apply" >}}` megnyomásával. Az `F1` gomb &nbsp;<img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Vissza" />&nbsp; megnyomásával elvetheti a módosításokat, ha szükséges.

![VitalControl: menu Evaluation Create filter](images/filter2.png "Szűrő létrehozása")

5. A `{{<T "Fever" >}}`, `{{<T "OnWatch" >}}` és `{{<T "Alarm" >}}` szűrőknél lehetőség van azok alkalmazásának letiltására vagy engedélyezésére. Ehhez válassza ki a megfelelő szűrőt, majd erősítse meg `{{<T "Ok" >}}` gombbal. A szűrő most aktív. Erősítse meg újra az `{{<T "Ok" >}}` gomb megnyomásával a szűrő deaktiválásához.

![VitalControl: menu Evaluation Create filter](images/filter3.png "Szűrő létrehozása")

6. Miután beállította az összes szűrőt, használja az `F3` gombot `{{<T "Apply" >}}` a meghatározott szűrők alkalmazásához, vagy nyomja meg az `F1` gombot <img src="/icons/footer/exit.svg" width="25" align="bottom" alt="Vissza" /> a szűrő(k) módosításainak elvetéséhez.
