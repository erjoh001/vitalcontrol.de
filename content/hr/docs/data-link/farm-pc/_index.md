---
title: Izvoz podataka o životinjama i mjerenjima na računalo za upravljanje farmom
linkTitle: Izvoz podataka (PC)
date: 2023-07-19
weight: 15
description: >
 Izvoz podataka o životinjama i vrijednosti mjerenja s uređaja VitalControl u nekoliko CVS datoteka
categories: [Izvoz podataka]
translationKey: farmPC
---
Postupite na sljedeći način kako biste izvezli podatke s uređaja VitalControl na uređaj za masovnu pohranu vašeg računala:

### Povežite VitalControl s računalom {#connect-vitalcontrol-to-pc}

1. Povežite uređaj VitalControl s vašim računalom ili prijenosnikom putem priloženog USB kabela.

   ![Povežite VitalControl s računalom ili prijenosnikom](/images/synchronisation/connect-to-pc.svg "Povežite VitalControl s računalom")

1. Provjerite je li vaš uređaj VitalControl uključen.

### Izvršite izvoz podataka {#perform-data-export}

1. Pritisnite tipku Windows za otvaranje izbornika Start

1. *Samo za Windows 11*: Kliknite gumb `Sve aplikacije`

1. Na popisu instaliranih aplikacija, pomaknite se prema dolje do slova `U`. Tamo biste trebali pronaći unos izbornika `Urban VitalControl`. Ako je potrebno, proširite ovaj unos kako bi se prikazali svi podizbornici.

   {{% alert title="Pažnja" %}}
Ako ne možete pronaći unos `Urban VitalControl` na popisu aplikacija, možda ćete morati prvo [instalirati](../vcsynchronizer/installation/) softver `VCSynchronizer` na vaše računalo.
   {{% /alert %}}

1. Kliknite na stavku izbornika `Izvoz podataka (CVS)`.

   ![Izbornik Start sustava Windows, unos izbornika za Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Izbornik Start sustava Windows, VitalControl")

1. Proces izvoza je započet. Nakon što je izvoz podataka završen, otvara se prozor Explorera koji prikazuje lokalni direktorij s četiri novo stvorene [izvozne datoteke](../../data-export/export-files/).

   ![Lokalni direktorij s izvoznim datotekama](../../data-export/images/export-files.png "Izvozne datoteke, lokalno pohranjene")

   {{% alert title="Napomena" %}}
  Svaku od ovih četiri [izvoznih datoteka](../../data-export/export-files/) možete otvoriti u programu za proračunske tablice po vašem izboru (kao što su [Microsoft Excel](https://products.office.com/excel) ili [OpenOffice Calc](https://www.openoffice.org/)) i tamo izvršiti naprednu analizu podataka. Kao primjer, prikazan je pogled tablice `animals.csv` u programu za proračunske tablice:


  ![Izvezena tablica podataka o životinjama otvorena u softveru za proračunske tablice](../../data-export/images/animals.png "Softver za proračunske tablice s podacima o životinjama")
   {{% /alert %}}
