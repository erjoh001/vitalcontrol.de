---
title: Adatcsere a VitalControl és a Herde állománykezelő szoftver között
linkTitle: Adatcsere
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Szinkronizálja a VitalControl eszközön tárolt állatokat a *Herde* szoftverrel kezelt állatokkal, és továbbítsa a VitalControl eszközzel rögzített mért értékeket a *Herde* szoftverbe.
weight: 20
kategóriák: [Adatcsere, DSP Herde]
translationKey: DSPherde/data-exchange
---
Kövesse az alábbi lépéseket az adatok szinkronizálásához a `Herde` szoftver és a VitalControl eszköz között:

### Csatlakoztassa a VitalControl-t a PC-hez

1. Csatlakoztassa a VitalControl eszközt a számítógépéhez vagy laptopjához a mellékelt USB kábellel.

   ![Csatlakoztassa a VitalControl-t a PC-hez vagy laptophoz](/images/synchronisation/connect-to-pc.svg "Csatlakoztassa a VitalControl-t a PC-hez")

1. Győződjön meg arról, hogy a VitalControl eszköz be van kapcsolva.

### Végezze el az adatcserét

1. A `Herde` szoftveren belül végezzen teljes adatcserét. A felhasználói felület konfigurációjától függően ezt a cserét a főmenü (felső szintű elem _Technológia_) `Teljes adatcsere` menüpontjával, az oldalsáv menüben vagy az egyéni eszköztárában (vízszintes vagy függőleges) hívhatja elő.

   ![Herde szoftver: Teljes adatcsere indítása](../screenshots/data-exchange.png "Herde: Adatcsere indítása")

1. Egy felugró ablak jelenik meg, amely a bal oldali oldalsávban felsorolja a meghatározott technológiai kapcsolódásokat. Kattintson a `VitalControl` feliratú gombra az adatcsere elindításához:

   ![Herde szoftver, Adatcsere indítása](../screenshots/start-transfer.png "Herde: Adatcsere indítása")

1. Az első adatcsere alkalmával figyelmeztetés jelenik meg, jelezve, hogy még nincsenek állatok regisztrálva a VitalControl eszközön. Erősítse meg ezt az értesítést `Igen` gombbal. Az adatcsere ekkor elindul.

   ![Herde szoftver, adatcsere: figyelmeztetés](../screenshots/warning.png "Adatcsere: figyelmeztetés")

1. Az adatcsere kétlépcsős folyamat: Az első lépésben ➊ az állatadatok átkerülnek a `Herde` szoftverből a VitalControl-ba. A második lépésben ➋ a VitalControl-lal gyűjtött mérési adatok átkerülnek a `Herde` szoftverbe. Az importált adatkészletek (állatok, ellések, figyelmeztetések és súlyok) száma fel van tüntetve a felugró ablakban:


   ![Adatcsere a Herde szoftverrel: Teendők](../screenshots/data-transfer.png "Adatcsere: Teendők")

1. Az adatcsere sikeres befejezését egy felugró ablak jelzi sikerüzenettel.

   ![Herde szoftver: Sikerüzenet adatcsere](../screenshots/success-message.png "Herde: Sikerüzenet adatcsere")

    {{% alert title="Figyelem" %}}
Ha sok állat van regisztrálva a VitalControl eszközön, az adatcsere eltarthat egy ideig. Az adatátvitel előrehaladása látható az eszköz kijelzőjén.

![VitalControl, adatcsere: folyamatjelző sáv](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: folyamatjelző sáv adatcsere")
    {{% /alert %}}
