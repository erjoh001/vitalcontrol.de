---
title: Dzīvnieku un mērījumu datu eksports uz saimniecības pārvaldības datoru
linkTitle: Datu eksports (PC)
date: 2023-07-19
weight: 15
description: >
 Eksportējiet dzīvnieku datus un mērījumu vērtības no VitalControl ierīces uz vairākiem CVS failiem
categories: [Datu eksports]
translationKey: farmPC
---
Veiciet šādas darbības, lai eksportētu datus no VitalControl uz jūsu datora masveida atmiņas ierīci:

### Savienojiet VitalControl ar datoru {#connect-vitalcontrol-to-pc}

1. Savienojiet VitalControl ierīci ar datoru vai klēpjdatoru, izmantojot piegādāto USB kabeli.

   ![Savienojiet VitalControl ar datoru vai klēpjdatoru](/images/synchronisation/connect-to-pc.svg "Savienojiet VitalControl ar datoru")

1. Pārliecinieties, ka jūsu VitalControl ierīce ir ieslēgta.

### Veiciet datu eksportu {#perform-data-export}

1. Nospiediet Windows taustiņu, lai atvērtu Sākuma izvēlni

1. *Tikai Windows 11*: Noklikšķiniet uz pogas `Visas lietotnes`

1. Jūsu instalēto lietotņu sarakstā ritiniet uz leju līdz burtam `U`. Tur jums vajadzētu atrast izvēlnes ierakstu `Urban VitalControl`. Ja nepieciešams, paplašiniet šo ierakstu, lai tiktu parādīti visi apakšizvēlnes ieraksti.

   {{% alert title="Uzmanību" %}}
Ja nevarat atrast ierakstu `Urban VitalControl` jūsu lietotņu sarakstā, iespējams, vispirms būs jāinstalē programmatūra `VCSynchronizer` jūsu datorā.
   {{% /alert %}}

1. Noklikšķiniet uz izvēlnes vienuma `Datu eksports (CVS)`.

   ![Windows Sākuma izvēlne, izvēlnes ieraksts Urban VitalControl (VCSynchronizer)](../vcsynchronizer/images/data-export/data-export.png "Windows sākuma izvēlne, VitalControl")

1. Eksporta process tiek sākts. Kad datu eksports ir pabeigts, tiek atvērts Explorer logs, kas parāda vietējo datu direktoriju ar četriem jaunizveidotajiem [eksporta failiem](../../data-export/export-files/).

   ![Vietējais datu direktorijs ar eksporta failiem](../../data-export/images/export-files.png "Eksporta faili, lokāli saglabāti")

   {{% alert title="Piezīme" %}}
  Jūs varat atvērt katru no šiem četriem [eksporta failiem](../../data-export/export-files/) izklājlapu programmā pēc jūsu izvēles (piemēram, [Microsoft Excel](https://products.office.com/excel) vai [OpenOffice Calc](https://www.openoffice.org/)) un veikt tur datu padziļinātu analīzi. Kā piemērs zemāk ir parādīts tabulas `animals.csv` skats izklājlapu programmā:

![Eksportēta dzīvnieku datu tabula, atvērta izklājlapu programmā](../../data-export/images/animals.png "Izklājlapu programma ar dzīvnieku datiem")
{{% /alert %}}
