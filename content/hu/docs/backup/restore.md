---
title: "Adatmentés visszaállítása"
linkTitle: "Visszaállítás"
date: 2023-07-20
weight: 20
description: >
 Az adatmentés visszaállításával a VitalControl eszköz teljes adatait vissza lehet állítani egy másik eszközre egy biztonsági mentési fájl segítségével.
translationKey: restore
---
{{% usb-drive/hu "Ahhoz, hogy visszaállítsa az adatmentést a VitalControl eszközére," %}}

Ezen az USB flash meghajtón léteznie kell egy `backup` könyvtárnak, amelynek tartalmaznia kell egy érvényes **adatmentési fájlt `backup.vcu`**.

![USB-flash meghajtó biztonsági mentési fájllal VitalControl](../images/backup-file.png "USB-flash meghajtó biztonsági mentési fájllal")

{{% alert title="Megjegyzés" %}}
Az USB flash meghajtó `backup` könyvtárában több `.vcu` kiterjesztésű biztonsági mentési fájlt is találhat. A VitalControl eszköz mindig a `backup.vcu` nevű fájlból állítja vissza az adatokat, amely mindig a legújabb fájl. Ha egy régebbi biztonsági mentési fájlból szeretne adatokat visszaállítani (amely tartalmazza a mentés dátumát a fájlnévben), akkor ezt a régebbi biztonsági mentési fájlt át kell neveznie `backup.vcu`-ra, mielőtt végrehajtaná az adatvisszaállítást!
{{% /alert %}}

## Adatvisszaállítás a VitalControl eszközre

1. Nyissa meg a menüpontot &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Eszköz" /> `Eszköz` a VitalControl eszköz főképernyőjén, amelyre vissza szeretné állítani az adatokat.

2. Hívja elő az `Adatkezelés` almenüt, majd válassza az `Adatmentés` almenüpontot. Most válassza a `Biztonsági mentés visszaállítása` menüpontot, és erősítse meg az `OK` gombbal. Most megkérik, hogy helyezzen be egy USB flash meghajtót:

   ![VitalControl: menüútvonal adatvisszaállítás](../images/restore.png "Visszaállítás biztonsági mentési fájlból")

3. Helyezze be az USB flash meghajtót (C csatlakozó) az eszköz alján található csatlakozóba.

   ![VitalControl: USB flash meghajtó behelyezése](/images/firmware/update/plug-in-dual-usb-stick.svg "USB flash meghajtó behelyezése")

4. Amint az eszköz érzékeli az USB stick behelyezését, megjelenik egy megerősítő ablak. Erősítse meg ezt a felugró ablakot `Igen` gombbal az adatvisszaállítás megkezdéséhez. Az adatmentés kicsomagolása és visszaállítása egy percig vagy tovább is tarthat. Amikor az adatvisszaállítás befejeződik, egy sikerüzenet jelenik meg:

   ![VitalControl: sikeres adatvisszaállítás üzenet](../images/restore-done.png "Sikeres adatvisszaállítás üzenet")

5. A biztonsági mentés adatai sikeresen visszaálltak a VitalControl eszközre.
