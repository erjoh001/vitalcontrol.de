---
title: Izvoz podataka o životinjama i mjerenjima na računar za upravljanje farmom
linkTitle: Izvoz podataka (PC)
date: 2023-07-19
weight: 15
description: >
 Izvoz podataka o životinjama i vrijednosti mjerenja sa uređaja VitalControl u nekoliko CVS datoteka
categories: [Izvoz podataka]
translationKey: farmPC
---
Postupite na sljedeći način kako biste izvezli podatke sa VitalControl uređaja na uređaj za masovno skladištenje vašeg računara:

### Povežite VitalControl sa računarom {#connect-vitalcontrol-to-pc}

1. Povežite VitalControl uređaj sa vašim računarom ili laptopom putem priloženog USB kabla.

   ![Povežite VitalControl sa računarom ili laptopom](/images/synchronisation/connect-to-pc.svg "Povežite VitalControl sa računarom")

1. Uvjerite se da je vaš VitalControl uređaj uključen.

### Izvršite izvoz podataka {#perform-data-export}

1. Pritisnite Windows tipku da otvorite Start meni

1. *Samo za Windows 11*: Kliknite na dugme `Sve aplikacije`

1. U listi instaliranih aplikacija, skrolujte do slova `U`. Tamo biste trebali pronaći unos menija `Urban VitalControl`. Ako je potrebno, proširite ovaj unos kako bi se prikazali svi podmeniji.

   {{% alert title="Pažnja" %}}
Ako ne možete pronaći unos `Urban VitalControl` u vašoj listi aplikacija, možda ćete prvo morati [instalirati](../vcsynchronizer/installation/) softver `VCSynchronizer` na vaš računar.
   {{% /alert %}}

1. Kliknite na stavku menija `Izvoz podataka (CVS)`.

   ![Windows Start meni, unos menija za Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows start meni, VitalControl")

1. Proces izvoza je započet. Kada se izvoz podataka završi, otvoriće se prozor Explorera koji prikazuje lokalni direktorij sa četiri novo kreirane [izvozne datoteke](../../data-export/export-files/).

   ![Lokalni direktorij sa izvoznim datotekama](../../data-export/images/export-files.png "Izvozne datoteke, lokalno pohranjene")

   {{% alert title="Napomena" %}}
  Možete otvoriti svaku od ovih četiri [izvoznih datoteka](../../data-export/export-files/) u programu za proračunske tablice po vašem izboru (kao što su [Microsoft Excel](https://products.office.com/excel) ili [OpenOffice Calc](https://www.openoffice.org/)) i tamo izvršiti naprednu analizu podataka. Kao primjer, prikazan je pogled na tabelu `animals.csv` u programu za proračunske tablice:


  ![Izvezeni podaci o životinjama otvoreni u softveru za proračunske tablice](../../data-export/images/animals.png "Softver za proračunske tablice sa podacima o životinjama")
   {{% /alert %}}
