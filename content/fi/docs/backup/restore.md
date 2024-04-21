---
title: "Tietovarauksen palauttaminen"
linkTitle: "Palauta"
date: 2023-07-20
weight: 20
description: >
 VitalControl-laitteen koko datan voi palauttaa toiselle laitteelle käyttäen varmuuskopiotiedostoa.
translationKey: restore
---
{{% usb-drive/en "Jotta voit palauttaa tietovarauksen VitalControl-laitteeseesi," %}}

Tällä USB-muistitikulla on oltava hakemisto `backup`, joka sisältää kelvollisen **tietovarauksen tiedoston `backup.vcu`**.

![USB-muistitikku varmuuskopiotiedostolla VitalControl](../images/backup-file.png "USB-muistitikku varmuuskopiotiedostolla")

{{% alert title="Huomio" %}}
USB-muistitikkusi `backup`-hakemistossa voi olla useita varmuuskopiotiedostoja, joilla on `.vcu`-pääte. VitalControl-laite palauttaa aina tietovarauksen tiedostosta nimeltä `backup.vcu`, joka on aina uusin tiedosto. Jos haluat palauttaa tiedot vanhemmasta varmuuskopiotiedostosta (jossa varmuuskopion päivämäärä on tiedoston nimessä), sinun on nimettävä tämä vanhempi varmuuskopiotiedosto `backup.vcu`:ksi ennen tietojen palauttamista!
{{% /alert %}}

## Tietojen palauttaminen VitalControl-laitteeseen

1. Avaa päävalikosta &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Laite" /> `Laite` VitalControl-laitteessa, johon haluat palauttaa tiedot.

2. Käynnistä alavalikko `Tietojen hallinta` ja valitse sen jälkeen alavalikon kohta `Tietovarmuus`. Valitse nyt valikkokohta `Palauta varmuuskopio` ja vahvista `OK`. Sinua pyydetään nyt asettamaan USB-muistitikku:

   ![VitalControl: valikkopolku tietojen palautukseen](../images/restore.png "Palautus varmuuskopiotiedostosta")

3. Aseta USB-muistitikku (C-pistoke) laitteen alaosan liittimeen.

   ![VitalControl: aseta USB-muistitikku](/images/firmware/update/plug-in-dual-usb-stick.svg "Aseta USB-muistitikku")

4. Kun laite havaitsee USB-tikun asettamisen, vahvistusikkuna ilmestyy. Hyväksy tämä ponnahdusikkuna `Kyllä`-vaihtoehdolla aloittaaksesi tietojen palautuksen. Varmuuskopion purkaminen ja palauttaminen voi kestää minuutin tai kauemmin. Kun tietojen palautus on valmis, näytölle tulee onnistumisviesti:

![VitalControl: onnistunut tietojen palauttamisen viesti](../images/restore-done.png "Onnistunut tietojen palauttamisen viesti")

5. Varmuuskopiotiedot palautettiin onnistuneesti VitalControl-laitteeseen.
