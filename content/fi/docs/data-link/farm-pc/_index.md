---
title: Eläin- ja mittausdatan vienti maatilan hallintatietokoneelle
linkTitle: Datan vienti (PC)
date: 2023-07-19
weight: 15
description: >
 VitalControl-laitteesta useisiin CVS-tiedostoihin vietävien eläindatan ja mittausarvojen vienti
categories: [Data export]
translationKey: farmPC
---
Noudata seuraavia ohjeita viedäksesi dataa VitalControl-laitteesta massamuistilaitteeseen tietokoneellasi:

### Yhdistä VitalControl tietokoneeseen

1. Yhdistä VitalControl-laite tietokoneeseesi tai kannettavaan tietokoneeseesi mukana toimitetun USB-kaapelin avulla.

   ![Yhdistä VitalControl tietokoneeseen tai kannettavaan](/images/synchronisation/connect-to-pc.svg "Yhdistä VitalControl tietokoneeseen")

1. Varmista, että VitalControl-laite on päällä.

### Suorita datan vienti

1. Paina Windows-näppäintä avataksesi Käynnistä-valikon

1. *Vain Windows 11*: Napsauta `Kaikki sovellukset` -painiketta

1. Selaa asennettujen sovellustesi listaa kirjaimeen `U`. Siellä pitäisi löytyä valikko `Urban VitalControl`. Tarvittaessa laajenna tämä kohta, jotta kaikki alavalikot näkyvät.

   {{% alert title="Huomio" %}}
Jos et löydä `Urban VitalControl` -kohtaa sovelluslistastasi, sinun on ehkä asennettava ensin `VCSynchronizer`-ohjelmisto tietokoneellesi.
   {{% /alert %}}

1. Napsauta valikkokohtaa `Datan vienti (CVS)`.

   ![Windowsin Käynnistä-valikko, valikkokohta Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windowsin käynnistä-valikko, VitalControl")

1. Vientiprosessi käynnistyy. Kun datan vienti on valmis, Explorer-ikkuna avautuu näyttäen paikallisen datadirektorion, jossa on neljä uutta [vientitiedostoa](../../data-export/export-files/).

   ![Paikallinen datadirektorio vientitiedostoineen](../../data-export/images/export-files.png "Vientitiedostot, paikallisesti tallennettuna")

   {{% alert title="Huomautus" %}}
  Voit avata jokaisen näistä neljästä [vientitiedostosta](../../data-export/export-files/) haluamassasi taulukkolaskentaohjelmassa (kuten [Microsoft Excel](https://products.office.com/excel) tai [OpenOffice Calc](https://www.openoffice.org/)) ja suorittaa datan tarkempaa analysointia siellä. Esimerkkinä näkymä taulukosta `animals.csv` taulukkolaskentaohjelmassa on näytetty alla:

![Viedyn eläintiedot taulukkolaskentaohjelmassa](../../data-export/images/animals.png "Taulukkolaskentaohjelma eläintiedoilla")
{{% /alert %}}
