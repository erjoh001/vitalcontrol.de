---
title: "Massregistrering av en grupp inköpta djur"
linkTitle: "Massregistrering"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Använd streckkodsläsaren för att registrera en mängd djur.
Kategorier: [Massregistrering]
Taggar: [Massregistrering]
translationKey: new/bulk-recording
---
## Massregistrering {#bulk-recording}

Med hjälp av massregistrering kan du fånga ett stort antal djur på kort tid och spara dem på din enhet. Använd streckkodsläsaren för att skanna streckkoderna för öronmärkets nummer och födelsedatum på djurpasserna. Djuret sparas automatiskt och du kan direkt skanna nästa pass. För att utföra massregistrering av djur, gör följande:

1. Anslut streckkodsläsaren till VitalControl med hjälp av kabeln.

2. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` och tryck på `{{<T "Ok" >}}` knappen.

3. En undermeny öppnas. Använd piltangenterna ◁ ▷ △ ▽ för att välja menyalternativet <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" /> `{{<T "BulkRecording" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. En annan undermeny öppnas, som innehåller ett fält för djurets öronmärkesnummer och ett annat fält för djurets födelsedatum. Skanna först streckkoden för öronmärkesnumret. Fältets kant ändras från rött till grönt. Skanna sedan födelsedatumet. Kanten blir kortvarigt grön innan båda kanterna återigen blir röda. Räknaren under passymbolen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> högst upp på skärmen ökar från 0 till 1. Det första djuret har sparats. Fortsätt och skanna de andra djurpassen. Efter varje skannat pass ökar räknaren under passymbolen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> med ett. Räknaren under hjordsymbolen <img src="/icons/header/group.svg" width="35" align="bottom" alt="Animal group"  title="Animal group" /> ökar också med ett.

{{% alert title="Tips" %}}
Räknaren under passikonen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> visar hur många pass du har skannat på en gång utan att lämna `{{<T "BulkRecording" >}}`-skärmen. Räknaren under flockikonen <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> visar hur många pass du har skannat totalt. Denna räknare återställs inte till noll om du lämnar `{{<T "BulkRecording" >}}`-skärmen. Antalet motsvarar dina poster i menyalternativet ['Inköp'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Meny 'Ny - Massregistrering'](../images/bulk-recording.png "Massregistrering")

{{% alert title="Tips" %}}
Du har ytterligare inställningsalternativ inom menyalternativet `{{<T "BulkRecording" >}}`. Dessa förklaras nedan. Som förberedande steg, gå alltid först till menyalternativet `{{<T "BulkRecording" >}}` och fortsätt sedan enligt instruktionerna.
{{% /alert %}}

{{% alert title="Tips" %}}
Felmeddelanden kan visas under skanningsprocessen. I detta fall avger streckkodsläsaren ett ljud och ytterligare skanning är inte möjlig. Bekräfta motsvarande felmeddelande på VitalControl-displayen och fortsätt skanna.
{{% /alert %}}

### Födelsedatum obligatoriskt {#birth-date-mandatory}

Med detta inställningsalternativ kan du bestämma om födelsedatum måste anges när djuren skapas. Om du avaktiverar detta alternativ behöver du bara skanna streckkoden för att spara ett djur. För dessa djur lagras dock det aktuella datumet som födelsedatum! Denna funktion är aktiverad som standard. För att avaktivera den, gör följande:

1. Använd <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `På/Av`-knappen för att öppna inställningsmenyn.

2. Använd piltangenterna △ ▽ för att välja inställningsalternativet `{{<T "BirthDateMandatory" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. Den gula cirkeln symboliserar att funktionen är aktiverad. En grå cirkel symboliserar att funktionen är avaktiverad.

4. Spara inställningarna och använd `F1`-tangenten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Spara och återgå" /> för att återgå till menyalternativet <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massinspelning" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Meny Nytt Födelsedatum obligatoriskt](../images/birthdate.png "Födelsedatum obligatoriskt")

### Standardvärden {#default-values}

Inom `{{<T "DefaultValues" >}}` inställningsmenyn ställer du in standarder som gäller för varje djur du skapar. Processen för att skapa med streckkodsläsaren förblir oförändrad som beskrivits ovan. Du har möjlighet att ställa in typ av boskap, kön, ras och vistelseort. För att ställa in `{{<T "DefaultValues" >}}`, gör följande:

1. Använd <img src="/icons/gear.svg" width="25" align="bottom" alt="Inställningsmeny" /> `On/Off`-knappen för att öppna inställningsmenyn.

2. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "DefaultValues" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. En undermeny öppnas med olika inställningsalternativ. Använd piltangenterna △ ▽ för att välja önskat inställningsalternativ. Använd piltangenterna ◁ ▷ för att välja önskad inställning.

4. Spara inställningarna och använd `F1`-tangenten&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Spara och återgå" /> för att återgå till menyalternativet <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massinspelning" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Meny Nya Standardvärden](../images/defaultvalues.png "Standardvärden")

### Registrerade värden {#recorded-values}

Inom `{{<T "RecordedValues" >}}` inställningsmenyn kan du specificera vilka värden som ska registreras utöver öronmärkets nummer och födelsedatum. Du kan välja mellan `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` och `{{<T "TypeAnimal" >}}`. Så snart du ställer in minst ett värde ändras processen under skanning. Först skannar du öronmärkets nummer och födelsedatum. Använd sedan riktningsknapparna △ ▽ för att välja de värden som ska ställas in och ställ in värdena. Spara sedan dina inmatningar med `F3`-tangenten. Först då skapas djuret! För att ställa in de värden som ska registreras, gör följande:


1. Använd <img src="/icons/gear.svg" width="25" align="bottom" alt="Inställningsmeny" /> `On/Off`-knappen för att öppna inställningsmenyn.

2. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "RecordedValues" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. Välj önskat värde som ska registreras med piltangenterna △ ▽ och bekräfta med `{{<T "Ok" >}}`. En gul cirkel visas. Om du vill avaktivera värdet som ska registreras, bekräfta igen med `{{<T "Ok" >}}`. Den gula cirkeln försvinner.

4. Spara inställningarna och använd `F1`-tangenten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Spara och återgå" /> för att återgå till menyalternativet <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massregistrering" />&nbsp; `{{<T "BulkRecording" >}}`.

5. Om du vill avaktivera alla värden som ska registreras igen, välj inställningsalternativet `{{<T "EnableAllResetOrder" >}}` i menyalternativet `{{<T "RecordedValues" >}}` och bekräfta med `{{<T "Ok" >}}`.

   ![VitalControl: Meny Nya registreringsvärden](../images/recordvalues.png "Registreringsvärden")
