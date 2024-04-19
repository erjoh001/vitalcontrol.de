---
title: Tietojen vaihto VitalControl-laitteen ja karjanhallintaohjelmiston Herde välillä
linkTitle: Tietojen vaihto
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synkronoi VitalControl-laitteella tallennetut eläimet *Herde*-ohjelmistossa hallittavien eläinten kanssa ja siirrä VitalControl-laitteella mitatut arvot *Herde*-ohjelmistoon.
weight: 20
categories: [Tietojen vaihto, DSP Herde]
---
Noudata alla olevia ohjeita synkronoidaksesi tietoja `Herde`-ohjelmiston ja VitalControl-laitteen välillä:

### Yhdistä VitalControl tietokoneeseen

1. Yhdistä VitalControl-laite tietokoneeseesi tai kannettavaan tietokoneeseen mukana toimitetun USB-kaapelin avulla.

   ![Yhdistä VitalControl tietokoneeseen tai kannettavaan](/images/synchronisation/connect-to-pc.svg "Yhdistä VitalControl tietokoneeseen")

1. Varmista, että VitalControl-laite on päällä.

### Suorita tietojen vaihto

1. Suorita `Herde`-ohjelmistossa täydellinen tietojen vaihto. Käyttöliittymäsi konfiguraatiosta riippuen voit käynnistää tämän vaihdon päävalikon kohdasta `Täydellinen tietojen vaihto` (ylätason kohta _Teknologia_), sivupalkin valikosta tai mukautetusta työkalupakistasi (vaaka- tai pystysuora).

   ![Ohjelmisto Herde: Täydellisen tietojen vaihdon käynnistäminen](../screenshots/data-exchange.png "Herde: Tietojen vaihdon käynnistäminen")

1. Popup-ikkuna avautuu, jossa luetellaan sivupalkissa määritellyt teknologialiitännät. Napsauta `VitalControl`-painiketta aloittaaksesi tietojen vaihdon:

   ![Ohjelmisto Herde, tietojen vaihdon aloittaminen](../screenshots/start-transfer.png "Herde: Aloita tietojen vaihto")

1. Ensimmäisellä kerralla tietoja vaihdettaessa varoitus ilmestyy, jossa ilmoitetaan, että VitalControl-laitteessa ei ole vielä rekisteröityjä eläimiä. Hyväksy tämä ilmoitus valitsemalla `Kyllä`. Tietojen vaihto käynnistetään tämän jälkeen.

   ![Ohjelmisto Herde, tietojen vaihto: varoitus](../screenshots/warning.png "Tietojen vaihto: varoitus")

1. Tietojen vaihto on kaksivaiheinen prosessi: Ensimmäisessä vaiheessa ➊ eläintiedot siirretään `Herde`-ohjelmistosta VitalControl-laitteeseen. Toisessa vaiheessa ➋ VitalControl-laitteella kerätyt mittausdata siirretään `Herde`-ohjelmistoon. Popup-ikkunassa luetellaan tuodut tietueet (eläimet, poikimiset, hälytykset ja painot):

![Tietojenvaihto ohjelmiston Herde kanssa: Toimenpiteiden kulku](../screenshots/data-transfer.png "Tietojenvaihto: Toimenpiteiden kulku")

1. Tietojenvaihdon onnistunut valmistuminen ilmoitetaan pop-up-ikkunassa, jossa on onnistumisviesti.

   ![Ohjelmisto Herde: Onnistumisviesti tietojenvaihdosta](../screenshots/success-message.png "Herde: Onnistumisviesti tietojenvaihdosta")

    {{% alert title="Huomio" %}}
Jos VitalControl-laitteeseen on rekisteröity monta eläintä, tietojenvaihto voi kestää jonkin aikaa. Tietojensiirron etenemistä voi seurata laitteen näytöltä.

![VitalControl, tietojenvaihto: edistymispalkki](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: edistymispalkki tietojenvaihdossa")
    {{% /alert %}}
