---
title: "Installation av Technology VitalControl:"
linkTitle: Installation
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definiera synkroniseringsparametrarna för datautbyte mellan mjukvaran *Herde* och VitalControl-enheten.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Innan den första [datautbytet](../data-exchange/), måste teknologikopplingen till VitalControl-enheten skapas och ställas in en gång.

{{% alert title="Uppmärksamhet" %}}
Innan du ställer in teknologikopplingen, kontrollera om programvaran 'VCSynchronizer' är installerad på din PC; denna programvara är obligatorisk för datautbyte. För att göra detta, öppna Windows Start-meny och sök i listan över dina applikationer efter en post som heter 'Urban VitalControl' där. Om du inte hittar en sådan post, [installera](../../vcsynchronizer/installation/) `VCSynchronizer`-programvaran på din PC.
{{% /alert %}}

För att ställa in teknologin, gör följande:

## Skapa ny uppsättning parametrar för datautbyte med VitalControl-enheten {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Inom mjukvaran `Herde`, öppna fönstret `Inställningar`. Beroende på konfigurationen av ditt användargränssnitt kan du öppna detta fönster via menyalternativet `Organisation` i huvudmenyn (översta nivån _Inställningar_), i sidomenyn eller i din anpassade verktygslåda (horisontell eller vertikal).

   ![Software Herde: öppning av inställningsmenyn](../screenshots/settings.png "Herde: öppna Inställningar")

1. Ett popup-fönster `Inställningar` öppnas, i vars vänstra sidofält många inställningskategorier är listade. Öppna kategorin `Service` ➊ och välj underkategorin `Teknologi` ➋.

1. I rubriken av huvudområdet till höger visas nu en dropdown där alla definierade teknologiparameteruppsättningar är listade. Antalet uppsatta teknologier visas till höger. Klicka på knappen ![Software Herde: Skapa ny teknologiparameteruppsättning](/icons/new.png "Herde: Skapa Teknologikoppling") `Skapa ny teknologiparameteruppsättning` ➌.

![Software Herde: inställningsskärm för teknologi](../screenshots/settings-technology.png "Herde: Inställningar för Teknologi")

1. Ett annat popup-fönster öppnas. Ange `VitalControl` som **Namn på anslutningen** och `Urban VitalControl (Gen 2)` som **Typ av Teknologi** och klicka sedan på knappen `Acceptera`.

   ![Software Herde: Skapa ny parameteruppsättning för VitalControl-enhet](../screenshots/new-technology.png "Skapa ny teknologi: VitalControl").

   Parameteruppsättningen för teknologin `VitalControl` är nu skapad och måste konfigureras i de följande stegen.

## Konfiguration: Grundinställningar {#configuration-basic-settings}

Inledningsvis är fliken `Grundinställningar` vald på den visade skärmen, som visas i figuren nedan. Gör justeringar där i kategorierna `Externt program` ➊, `Djurdata` ➋, `Platser` ➌ och `Lämnar` ➍ enligt dina gårdsspecifika förhållanden.

   ![Software Herde: Konfiguration av grundinställningar](../screenshots/basic-settings.png "Teknologi VitalControl: Grundinställningar").
   
### Kategori `Externt program` ➊ {#category-external-program-}

För att utföra datautbyte mellan VitalControl och Herde Plus behövs grundprogramvaran [VitalControl Synchronizer](../../vcsynchronizer) som externt hjälpprogram. För att detta program ska fungera korrekt måste vissa justeringar göras i kategorin `Externt program` ➊.

- **Enhetsnamn för datautbyte**:  
  Som standard är detta fält tomt. Det rekommenderas dock att ange namnet på din dator här. För att göra detta, tryck på ikonen ![Herde Software: Skapa ny teknologikoppling](/icons/arrow-down.png "Herde: Skapa teknologikoppling") `Pil nedåt` längst till höger i rullgardinsfältet. Ditt datornamn kommer nu att bestämmas och visas för val i rullgardinslistan. När fältet är fyllt med ditt datornamn och denna inställning är sparad, kan datautbyte endast utlösas från din dator hädanefter.

- **Kör i sökväg**:
  Vänligen ange `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` i detta inmatningsfält. Detta är den absoluta sökvägen till programmet `VitalControl Synchronizer` (eller mer specifikt till filen `vcsynchronizer.exe`). Om målkatalogen för detta program har ändrats under [installationen av VCSynchronizer](../../vcsynchronizer/installation), vänligen ange den valda målkatalogen här.


- **Program HerdePlus 🡒 Technology**:  
  Detta inmatningsfält måste fyllas i med värdet `vc_imp.bat`. Den motsvarande batchfilen specificerar sekvensen av operationer under dataimporten.

- **Technology 🡒 Program HerdePlus**:  
  Detta inmatningsfält måste fyllas i med värdet `vc_exp.bat`. Den motsvarande batchfilen specificerar sekvensen av operationer under dataexporten.

### Kategori `Djurdata` ➋ {#category-animal-data-}

Ytterligare justeringar måste göras i kategorin 'Djurdata' ➋ för att få datautbytet fullt fungerande.

- **Djurnummer**:  
  Denna inställning bestämmer vilket ID djuren får för visning på VitalControl-enheten:
  - Om du har tilldelat korta ID:n (`Stallnummer`, 2 till 6 siffror) till dina djur, bör du välja värdet 'Stallnummer' här: det visade ID:t för ett djur på VitalControl kommer då att motsvara det stallnummer som tilldelats djuret.
  - Om du **inte** har tilldelat korta ID-nummer till dina djur - detta är vanligt inom gödsektorn, till exempel - bör du välja värdet `Tag no. (5 siffror)` här. Det visade ID:t för ett djur på VitalControl-enheten kommer då att motsvara de sista 5 siffrorna av ID:t som är tryckt på djurets gula öronmärke.
  
<br>

- **Sändarnummer**:  
  Denna inställning bestämmer vilket nummer som förväntas för ett djur under RFID-skanning:  
  - Om du sätter ett halsband med en transponder på dina djur eller sätter en örontransponder på dina djur - till exempel för identifiering vid den automatiska mataren - bör du välja värdet 'Transponder' här.
  - Om dina djur eller kalvar bär elektroniska öronmärken kodade med det officiella nationella 15-siffriga identifikationsnumret för ditt djur som kommer att användas för identifiering av djuret under hela dess liv, bör du välja värdet 'Tag no. (15 siffror)` här.

<br>

- **Minimiålder för överföring**:  
  Om `0` anges som värde för detta inmatningsfält, kommer **alla djur** att överföras till VitalControl-enheten, oavsett deras ålder. Ett värde större än `0` definierar minimiåldern (i dagar) för djuren som ska överföras. Till exempel, om **endast kor** ska överföras till enheten, måste ett värde på 600 dagar (= 20 månader) anges här som minimiålder.

### Kategori `Platser` ➌ {#category-locations-}

Använd denna kategori för att exkludera djur på vissa platser från dataöverföring till enheten. För att göra detta, ta bort markeringen från platsen/platsena för vilka du **inte** vill överföra djuren som finns där till enheten.

### Kategori `Lämnar` ➍ {#category-leaving-}

Markera alternativet 'Lämnar i HERDEplus' här. På så sätt specificerar du att djur som lämnat flocken också tas bort från VitalControl-enheten under synkronisering.
Markera också alternativet 'Finns inte i lager'. På så sätt specificerar du att djur på VitalControl som inte är kända av `Herde`-programvaran tas bort från VitalControl under synkronisering.

## Konfiguration: Teknikspecifika inställningar {#configuration-technology-specific-settings}

Klicka sedan på fliken `Teknikspecifika inställningar` för att bestämma omfattningen av datautbytet. Det rekommenderas att markera alla kryssrutor som listas där förutom kryssrutan `Spara importfil efter bearbetning`. Den senare kryssrutan är avsedd för diagnostiska ändamål och bör endast väljas om det krävs av servicepersonal.

- **Maximal ålder för överföring**:  
  Om `0` anges här som värde, kommer **alla djur** att överföras till VitalControl-enheten, oavsett deras ålder. Ett värde större än `0` definierar den maximala åldern (i dagar) för de djur som ska överföras. Om till exempel **endast kalvar** ska överföras till enheten, måste ett värde på 90 dagar (= 3 månader) anges här som maximal ålder.

   ![Herde Software: Konfiguration Datautbyte](../screenshots/technology-specific-settings.png "Datautbyte: specifika inställningar").

## Spara datautbytesinställningar {#save-data-exchange-settings}

Tryck på `Spara (F2)`-tangenten efter att du har konfigurerat alla konfigurationsparametrar på lämpligt sätt. Parameteruppsättningen för datautbyte till VitalControl-enheten är nu sparad och redo att användas.  
Utför en [datautbyte](../data-exchange/) nu för att kontrollera om de angivna inställningarna är giltiga så att du framgångsrikt kan utbyta data till och från VitalControl-enheten.


