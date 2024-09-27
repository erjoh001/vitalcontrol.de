---
title: Inköpta djur
linkTitle: Inköpta djur
weight: 20
date: 2023-07-28T13:25:28+02:00
draft: false
slug: purchased-animals
description: >
  Här kan du se dina aktuella inköp och exportera data.
Kategorier: [Nytt på gården]
Taggar: [Nytt på gården]
translationKey: new-on-farm/new-on-farm
---
## Inköpta djur {#purchased-animals}

I denna lista hittar du alla djur som du har skapat via massregistrering. Du kan exportera denna lista och därmed registrera dina tillägg direkt i besättningshanteringsprogrammet DSP-Herde och i HI-Tier. Alternativt kan du radera alla inköpsmeddelanden.

{{% alert title="Tips" %}}
För att exportera data behöver du den medföljande UBS-stickan. Anslut USB-stickan med USB-C-adaptern till din VitalControl-enhet innan du följer instruktionerna.
{{% /alert %}}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Nytt på gården" /> `{{<T "NewOnFarm" >}}` och tryck på knappen `{{<T "Ok" >}}`.

2. En undermeny öppnas där du kan välja mellan <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="Nytt på gården, ingen transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Inköpta djur" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="Ingen nationell djur-ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Födslar" /> `{{<T "Births" >}}` och <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="Ingen transponder tilldelad" /> `{{<T "NoTransponderAssigned" >}}`. Använd piltangenterna ◁ ▷ △ ▽ för att välja menyalternativet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Inköpta djur" /> `{{<T "PurchasedAnimals" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. En lista öppnas med dina inköp som du har registrerat via menyalternativet massregistrering.


4. Använd `F2`-tangenten `{{<T "CSVExport" >}}`.

5. CSV-meddelandelistan är nu sparad på ditt USB-minne.

    ![VitalControl: List of purchased animals, csv export](../images/purchasedanimals.png "Purchased animals, csv export ")

## Alternativ: Radera alla meddelanden efter export {#options-delete-all-notices-after-export}

Med detta alternativ kan du ställa in om alla meddelanden inom `{{<T "PurchasedAnimals" >}}`-listan ska raderas efter att CSV-filen har exporterats. Använd endast detta alternativ om du är säker på att du inte längre behöver meddelandena!

1. Använd `F3`-tangenten. En undermeny öppnas.

2. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "DeleteAllNoticesAfterExport" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. Rutan är nu markerad med en bock. Alternativet är aktiverat. Bekräfta igen med `{{<T "Ok" >}}` för att inaktivera alternativet.

    ![VitalControl: List of purchased animals, csv export](../images/delete-all.png "Delete all notices after export")    

## Direkta funktionsanrop {#direct-function-calls}

Förutom att skapa exportfilen har du följande alternativ:

- [Avlänka transponder](#unlink-transponder)
- [Rensa alla köpmärken](#clear-all-purchase-notices)
- [Radera djur + meddelande](#delete-animal--purchase-notice)
- [Rensa köpmärke](#clear-notice-of-purchase)
- [Redigera ett märke](#edit-data-of-purchased-animal)

{{% alert title="Hint" %}}
Öppna alltid `{{<T "PurchasedAnimals" >}}`-listan först som beskrivs i instruktionerna ovan.
{{% /alert %}}

### Avlänka transponder {#unlink-transponder}

Du kan använda denna funktion för att ta bort transpondern från ett djur.

1. Använd `F3`-tangenten. En undermeny öppnas.

2. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "UnlinkTransponder" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. Transpondern har framgångsrikt avlänkats.

    ![VitalControl: List of purchased animals, csv export](../images/unlink-transponder.png "Purchased animals, unlink transponder")

### Rensa alla köpmärken {#clear-all-purchase-notices}

Med denna funktion kan du radera alla djur från `{{<T "PurchasedAnimals" >}}` listan utan att behöva skapa en exportfil först.

1. Använd `F3`-tangenten. En undermeny öppnas.

2. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "ClearAllPurchaseNotices" >}}` och bekräfta med `{{<T "Ok" >}}`.

3. Köpeanmälningarna har raderats framgångsrikt.

    ![VitalControl: Lista över köpta djur, rensa köpeanmälningar](../images/clear.png "Rensa alla köpeanmälningar")

### Radera djur + köpeanmälan {#delete-animal--purchase-notice}

För att radera ett djur och dess motsvarande köpeanmälan, gör följande:

1. Använd piltangenterna △ ▽ för att välja det djur du vill radera.

2. Använd `F3`-tangenten. En undermeny öppnas.

3. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "UnregisterAnimalAndBirthNotice" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Djuret och åtkomstmeddelandet har raderats framgångsrikt.

    ![VitalControl: Lista över köpta djur, radera djur + anmälan](../images/delete.png "Radera djur + anmälan")

### Rensa köpeanmälan {#clear-notice-of-purchase}

För att radera ett djurs köpeanmälan från listan, gör följande:

1. Använd piltangenterna △ ▽ för att välja det djur vars köpeanmälan du vill radera.

2. Använd `F3`-tangenten. En undermeny öppnas.

3. Använd piltangenterna △ ▽ för att välja menyalternativet `{{<T "ClearPurchaseNotice" >}}` och bekräfta med `{{<T "Ok" >}}`.

4. Köpeanmälan för det valda djuret har raderats framgångsrikt.

    ![VitalControl: Lista över köpta djur, rensa köpeanmälan](../images/clearnotice.png "Rensa köpeanmälan")

### Redigera data för köpt djur {#edit-data-of-purchased-animal}

För att redigera data för ett djur i köplistan, gör följande:

1. Använd piltangenterna △ ▽ för att välja det djur du vill redigera.

2. Använd `{{<T "Ok" >}}`-knappen. En undermeny med djurets data öppnas. Du kan ta reda på hur du redigerar dessa [här](/sv/docs/actions/edit/#edit-animal-data).

    ![VitalControl: Lista över köpta djur, Redigera djurdata](../images/edit.png "Redigera data för köpt djur")
