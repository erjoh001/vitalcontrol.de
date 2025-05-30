---
title: "Adatmentés létrehozása"
linkTitle: "Mentés"
date: 2023-07-20
weight: 20
description: >
  Az adatmentés segítségével egy biztonsági mentési fájl jön létre, amely tartalmazza a VitalControl eszközön tárolt összes adatot.
kategóriák: [Adatmentés]
címkék: [mentési fájl, USB flash meghajtó]
translationKey: backup
---
{{% usb-drive/hu "Az eszköz adatmentésének végrehajtásához," %}}

## Adatmentés végrehajtása {#perform-data-backup}

1. Nyissa meg a &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Eszköz" /> `Eszköz` menüpontot a VitalControl eszköz főképernyőjén.

2. Hívja elő az `Adatkezelés` almenüt, majd válassza az `Adatmentés` almenüpontot. Most válassza a `Mentés létrehozása` menüpontot, és erősítse meg az `OK` gombbal. Most kérni fogja, hogy helyezzen be egy USB flash meghajtót:

   ![VitalControl: adatmentés menüútvonal](../images/backup.png "Adatmentés előhívása")

3. Helyezze be az USB flash meghajtót (C csatlakozó) az eszköz alján található csatlakozóba.

   <figure class="figure">
        <img src="/images/firmware/update/plug-in-dual-usb-stick.svg" class="border border-2 figure-img img-fluid rounded p-3" style="max-width: 500px; width: 100%;" align="bottom" alt="VitalControl: Helyezze be az USB-meghajtót" title="Helyezze be az USB-meghajtót" />
        <a name="AnschlussBarcodescanner" ><figcaption class="figure-caption fs-6">2. ábra: Helyezze be az USB-meghajtót a VitalControlba</figcaption></a>
   </figure>

4. Amint az eszköz érzékeli az USB stick behelyezését, az adatmentés automatikusan elindul. Az adatok gyűjtése, tömörítése és írása egy percet vagy annál hosszabb időt vehet igénybe. Amikor a mentés elkészült, egy sikerüzenet jelenik meg:

   ![VitalControl: sikerüzenet mentés](../images/backup-done.png "Sikeres adatmentés")

5. Az adatmentés most létrejött. A létrehozott `backup.vcu` fájlt a `backup` könyvtárban találja az USB flash meghajtón. A mentési fájl körülbelül 1 MB tárhelyet igényel a flash meghajtón.

   ![USB flash meghajtó mentési fájllal VitalControl](../images/backup-file.png "USB flash meghajtó mentési fájllal")

   {{% alert title="Tipp" %}}
  Ha már létezik egy `backup.vcu` fájl az USB flash meghajtó `backup` könyvtárában, ez a fájl át lesz nevezve. Az új fájl neve a `backup` előtagból és a mentési fájl létrehozásának dátumából és idejéből áll össze (pl. `backup_2023-07-17_12-50-37.vcb`). Az újonnan írt mentési fájl neve mindig `backup.vcu`.
    {{% /alert %}}

6. A létrehozott biztonsági mentési fájl felhasználható az elmentett adatok [visszaállítására](../restore) bármely VitalControl eszközre, ha szükséges.
