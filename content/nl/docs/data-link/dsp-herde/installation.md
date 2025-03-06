---
title: "Installatie van Technologie VitalControl:"
linkTitle: Installatie
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definieer de synchronisatieparameters voor gegevensuitwisseling tussen de software *Herde* en het VitalControl-apparaat.
weight: 10
categorieën: [DSP Herde]
translationKey: DSPherde/installation
---
Voor de eerste [gegevensuitwisseling](../data-exchange/), moet de technologiekoppeling met het VitalControl-apparaat eenmalig worden gecreëerd en ingesteld.

{{% alert title="Let op" %}}
Controleer voordat u de technologiekoppeling instelt of de 'VCSynchronizer' software op uw PC geïnstalleerd is; deze software is verplicht voor gegevensuitwisseling. Om dit te doen, open het Windows Startmenu en zoek in de lijst van uw applicaties naar een item genaamd 'Urban VitalControl'. Als u zo'n item niet kunt vinden, [installeer](../../vcsynchronizer/installation/) de `VCSynchronizer` software op uw PC.
{{% /alert %}}

Om de technologie in te stellen, ga als volgt te werk:

## Maak een nieuwe parameterset voor gegevensuitwisseling met het VitalControl-apparaat

1. Open binnen de software `Herde` het venster `Instellingen`. Afhankelijk van de configuratie van uw gebruikersinterface, kunt u dit venster openen via het menu-item `Organisatie` in het hoofdmenu (bovenste item _Instellingen_), in het zijbalkmenu of in uw aangepaste gereedschapskist (horizontaal of verticaal).

   ![Software Herde: oproepen van instellingenmenu](../screenshots/settings.png "Herde: Instellingen oproepen")

1. Een pop-upvenster `Instellingen` opent, waarin aan de linkerzijbalk talrijke instellingscategorieën worden vermeld. Open de categorie `Service` <span style="font-size: 140%">➊</span> en selecteer de subcategorie `Technologie` <span style="font-size: 140%">➋</span>.

1. In de kop van het hoofdgebied aan de rechterkant verschijnt nu een dropdown waarin alle gedefinieerde technologieparametersets worden vermeld. Het aantal ingestelde technologieën wordt rechts weergegeven. Klik op de knop ![Software Herde: Maak nieuwe technologieparameterset](/icons/new.png "Herde: Technologiekoppeling maken") `Maak nieuwe technologieparameterset` <span style="font-size: 140%">➌</span>.

   ![Software Herde: instellingenscherm voor technologie](../screenshots/settings-technology.png "Herde: Instellingen voor Technologie")

1. Er opent zich een ander pop-upvenster. Voer `VitalControl` in als **Naam van de verbinding** en `Urban VitalControl (Gen 2)` als **Type Technologie** en klik vervolgens op de knop `Accepteren`.

   ![Software Herde: Maak nieuwe parameterset voor VitalControl-apparaat](../screenshots/new-technology.png "Nieuwe technologie aanmaken: VitalControl").

   De parameterset voor technologie `VitalControl` is nu gecreëerd en moet in de volgende stappen geconfigureerd worden.

## Configuratie: Basisinstellingen

Aanvankelijk is het tabblad `Basisinstellingen` geselecteerd op het weergegeven scherm, zoals hieronder in de figuur getoond. Maak daar aanpassingen in de categorieën `Extern programma` <span style="font-size: 140%">➊</span>, `Diergegevens` <span style="font-size: 140%">➋</span>, `Locaties` <span style="font-size: 140%">➌</span> en `Vertrek` <span style="font-size: 140%">➍</span> volgens de specifieke omstandigheden van uw boerderij.

   ![Software Herde: Configuratie van basisinstellingen](../screenshots/basic-settings.png "Technologie VitalControl: Basisinstellingen").
   
### Categorie `Extern programma` <span style="font-size: 140%">➊</span>

Om gegevensuitwisseling tussen VitalControl en Herde Plus mogelijk te maken, is basissoftware [VitalControl Synchronizer](../../vcsynchronizer) nodig als extern hulpprogramma. Voor de juiste werking van dit programma moeten enkele aanpassingen worden gemaakt in de categorie `Extern programma` <span style="font-size: 140%">➊</span>.

- **Apparaatnaam voor gegevensuitwisseling**:  
  Standaard is dit veld leeg. Het wordt echter aanbevolen om hier de naam van uw computer in te voeren. Om dit te doen, drukt u op het pictogram ![Herde Software: Maak nieuwe technologie koppeling](/icons/arrow-down.png "Herde: Maak technologie koppeling") `Pijl omlaag` aan het rechter uiteinde van het dropdown-veld. De naam van uw computer wordt nu bepaald en weergegeven voor selectie in de dropdown-lijst. Zodra het veld is ingevuld met uw computernaam en deze instelling is opgeslagen, kan gegevensuitwisseling vanaf nu alleen vanaf uw computer worden geactiveerd.

- **Uitvoeren in pad**:
  Voer `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` in dit invoerveld in. Dit is het absolute pad naar het programma `VitalControl Synchronizer` (of meer specifiek naar het bestand `vcsynchronizer.exe`). Als de doelmap voor dit programma is gewijzigd tijdens de [installatie van de VCSynchronizer](../../vcsynchronizer/installation), voer dan hier de geselecteerde doelmap in.

- **Programma HerdePlus 🡒 Technologie**:  
  Dit invoerveld moet worden ingevuld met de waarde `vc_imp.bat`. Het overeenkomstig genoemde batchbestand specificeert de volgorde van handelingen tijdens de gegevensimport.

- **Technologie 🡒 Programma HerdePlus**:  
  Dit invoerveld moet worden ingevuld met de waarde `vc_exp.bat`. Het overeenkomstig genoemde batchbestand specificeert de volgorde van handelingen tijdens de gegevensexport.

### Categorie `Diergegevens` <span style="font-size: 140%">➋</span>

Verdere aanpassingen moeten worden gemaakt in de categorie 'Diergegevens' <span style="font-size: 140%">➋</span> om de gegevensuitwisseling volledig functioneel te maken.

- **Dier nummer**:  
  Deze instelling bepaalt welke ID dieren ontvangen voor weergave op het VitalControl-apparaat:
  - Als u korte ID's (`Stalnr.`, 2 tot 6 cijfers) aan uw dieren heeft toegewezen, moet u hier de waarde 'Stalnummer' selecteren: de weergegeven ID van een dier op de VitalControl komt dan overeen met het aan het dier toegewezen stalnummer.
  - Als u **geen** korte ID-nummers aan uw dieren heeft toegewezen - dit is gebruikelijk in de vetmesterijsector, bijvoorbeeld - dan moet u hier de waarde `Oornr. (5 cijfers)` selecteren. De weergegeven ID van een dier op het VitalControl-apparaat komt dan overeen met de laatste 5 cijfers van de ID die op het gele oormerk van het dier is gedrukt.
  
<br>

- **Zendernr.**:  
  Deze instelling bepaalt het nummer dat van een dier wordt verwacht tijdens een RFID-scan:  
  - Als u een halsband met een transponder om uw dieren doet of een oortransponder op uw dieren plaatst -bijvoorbeeld voor identificatie bij de automatische voederbak-, moet u hier de waarde 'Transponder' selecteren.
  - Als uw dieren of kalveren elektronische oormerken dragen die zijn gecodeerd met het officiële nationale 15-cijferige identificatienummer van uw dier, dat dient voor de identificatie van het dier gedurende zijn hele leven, moet u hier de waarde 'Oornr. (15 cijfers)` selecteren.

<br>

- **Minimale leeftijd voor overdracht**:  
  Als `0` wordt ingevoerd als waarde voor dit invoerveld, worden **alle dieren** overgedragen naar het VitalControl-apparaat, ongeacht hun leeftijd. Een waarde groter dan `0` definieert de minimale leeftijd (in dagen) voor de over te dragen dieren. Bijvoorbeeld, als **alleen koeien** moeten worden overgedragen naar het apparaat, moet hier een waarde van 600 dagen (= 20 maanden) worden ingevoerd als minimale leeftijd.

### Categorie `Locaties` <span style="font-size: 140%">➌</span>

Gebruik deze categorie om dieren op bepaalde locaties uit te sluiten van gegevensoverdracht naar het apparaat. Om dit te doen, verwijder het vinkje bij de locatie(s) waarvoor je **niet** wilt dat de daar gehuisveste dieren naar het apparaat worden overgebracht.

### Categorie `Vertrekken` <span style="font-size: 140%">➍</span>

Vink hier de optie 'Vertrekken in HERDEplus' aan. Op deze manier geef je aan dat dieren die de kudde hebben verlaten ook worden verwijderd van het VitalControl-apparaat tijdens synchronisatie.
Vink ook de optie 'Bestaat niet in voorraad' aan. Hiermee geef je aan dat dieren op de VitalControl die niet bekend zijn bij de `Herde` software, worden verwijderd van de VitalControl tijdens synchronisatie.

## Configuratie: Technologie-specifieke instellingen

Klik vervolgens op het tabblad `Technologie-specifieke instellingen` om de reikwijdte van de gegevensuitwisseling te bepalen. Het wordt aanbevolen om alle aangegeven selectievakjes aan te vinken, behalve het selectievakje `Importbestand opslaan na verwerking`. Dit laatste selectievakje is bedoeld voor diagnostische doeleinden en moet alleen worden geselecteerd als dit door servicemedewerkers wordt gevraagd.

- **Maximale leeftijd voor overdracht**:  
  Als hier `0` wordt ingevoerd als waarde, worden **alle dieren** overgebracht naar het VitalControl-apparaat, ongeacht hun leeftijd. Een waarde groter dan `0` definieert de maximale leeftijd (in dagen) voor de over te dragen dieren. Als bijvoorbeeld **alleen kalveren** naar het apparaat moeten worden overgebracht, moet hier een waarde van 90 dagen (= 3 maanden) worden ingevoerd als maximale leeftijd.

   ![Herde Software: Configuratie Gegevensuitwisseling](../screenshots/technology-specific-settings.png "Gegevensuitwisseling: specifieke instellingen").

## Gegevensuitwisselingsinstellingen opslaan

Druk op de `Opslaan (F2)` toets nadat je alle configuratieparameters naar behoren hebt ingesteld. De parameterset voor gegevensuitwisseling naar het VitalControl-apparaat is nu opgeslagen en klaar voor gebruik.  
Voer nu een [gegevensuitwisseling](../data-exchange/) uit om te controleren of de vastgestelde instellingen geldig zijn, zodat je succesvol gegevens kunt uitwisselen naar en van het VitalControl-apparaat.
