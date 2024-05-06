---
title: "Laitteesi laiteohjelmiston päivitys"
linkTitle: Päivitys
weight: 4
description: >
  Suorittamalla laiteohjelmiston päivityksen, voit päivittää VitalControl-laitteesi laiteohjelmiston uusimpiin saatavilla oleviin versioihin.
---
Varmista ensin, että [uudempi laiteohjelmiston versio](../versions/) on saatavilla laitteellesi ja tarvittaessa päivitä laitteesi laiteohjelmisto seuraavien ohjeiden mukaisesti.

## Tarvittava lisävaruste

Laitteen päivityksen asentamiseksi tarvitset kaksipäisen USB-muistitikun (2-in-1 USB-tikku) Type-C/USB 3.0, jossa on USB C -liitin ja USB A -liitin. Tällainen kaksipäinen USB-muistitikku toimitetaan laitteen mukana. Voit myös ostaa tällaisen USB-muistitikun eri toimittajilta.

![Kaksipäinen USB-muistitikku (USB A / USB C)](/images/firmware/update/usb-dual-stick.svg "Kaksipäinen USB-muistitikku")

## Valmistelu: lataa uusin laiteohjelmisto

1. Työnnä USB-muistitikkusi tietokoneesi USB-liitäntään. Luo sitten uusi hakemisto nimeltä 'update' muistitikkusi juurihakemistoon.

    ![Windows Explorer: USB-muistitikku hakemistolla 'update'](../images/create-folder-update.png "USB-muistitikku: hakemisto 'update'")

1. Lataa [laiteohjelmistotiedosto](/download/firmware.vcu) (tiedostonimi: `firmware.vcu`) ja tallenna se aiemmin luomaasi `update`-hakemistoon USB-muistitikullasi. Päivitystiedosto vaatii noin 2,5 MB tallennustilaa muistitikulla.

    ![Windows Explorer: muistitikku laiteohjelmistotiedostolla 'firmware.vcu'](../images/save-firmware-file.png "Muistitikku laiteohjelmistotiedostolla")

1. Luo [tietovarmuuskopio][] laitteestasi.

    {{% alert title="Info" %}}
Tietovarmuuskopio on suositeltava varotoimenpide. Kaikki olemassa olevat eläin- ja laitetiedot säilyvät, kun päivität VitalControl-laitteen laiteohjelmiston.
    {{% /alert %}}

[tietovarmuuskopio]: {{< relref "../backup/backup/" >}}

## Suorita laiteohjelmiston päivitys

1. Avaa päävalikosta `Laite`-valikkokohta VitalControl-laitteessasi.

1. Kutsu alavalikko `Huolto`, valitse valikkokohta `Laiteohjelmiston päivitys` ja vahvista `OK`. Sinua pyydetään nyt asettamaan valmistelemaasi USB-muistitikkua:

![VitalControl: menu path firmware update](../images/firmware-update.png "Firmware update")

1. Aseta USB-muistitikku (C-liitin) laitteen alaosassa olevaan liittimeen ja vahvista `OK`.

    ![VitalControl: Insert USB flash drive](/images/firmware/update/plug-in-dual-usb-stick.svg "Insert USB flash drive")

    Laite suorittaa päivityksen automaattisesti. Päivityksen aikana näyttö ilmoittaa päivityksen etenemisestä. Päivityksen valmistuttua laite käynnistyy automaattisesti uudelleen ja näyttää onnistumisviestin uudelleenkäynnistyksen jälkeen:

   ![VitalControl: Success message firmware update](../images/update-success.png "Success firmware update")

   Uusi laiteohjelmisto on nyt asennettu laitteeseesi.
