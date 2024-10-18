---
title: "Fødsler"
linkTitle: "Fødsler"
weight: 35
date: 2023-07-28T13:25:28+02:00
draft: false
slug: births
description: >
  Her kan du se dine fødsler og lage en eksportfil.
categories: [Fødsler]
tags: [Fødsler]
translationKey: new-on-farm/births
---
## Fødsler {#births}

I denne listen kan du se dine fødsler, redigere dem og lage en eksportfil for å registrere i HI-Tier. For å lage en eksportfil, gjør følgende:

{{% alert title="Hint" %}}
For å eksportere data trenger du den medfølgende UBS-pinnen. Koble USB-pinnen med USB-C-adapteren til din VitalControl-enhet før du følger instruksjonene.
{{% /alert %}}

1. På hovedskjermen til din VitalControl-enhet, velg menyelementet <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="New on farm" /> `{{<T "NewOnFarm" >}}` og trykk på `{{<T "Ok" >}}`-knappen.

2. En undermeny åpnes der du kan velge mellom <img src="/icons/registration/new-on-farm-no-transponder.svg" width="50" align="bottom" alt="New on farm, no transponder" /> `{{<T "NewOnFarmNoTransponder" >}}`, <img src="/icons/main/new-on-farm.svg" width="40" align="bottom" alt="Purchased animals" /> `{{<T "PurchasedAnimals" >}}`, <img src="/icons/registration/no-eartag-number.svg" width="30" align="bottom" alt="No national animal ID" /> `{{<T "NoAnimalIDAssigned" >}}`, <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` og <img src="/icons/registration/no-transponder.svg" width="30" align="bottom" alt="No transponder assigned" /> `{{<T "NoTransponderAssigned" >}}`. Bruk piltastene ◁ ▷ △ ▽ for å velge menyelementet <img src="/icons/main/births.svg" width="40" align="bottom" alt="Births" /> `{{<T "Births" >}}` og bekreft med `{{<T "Ok" >}}`.

3. En liste med alle dine fødsler åpnes.

4. Bruk `F3`-tasten `{{<T "ExportListBirths" >}}`. En undermeny åpnes.

5. Bruk piltastene △ ▽ for å velge menyelementet `{{<T "ExportListBirths" >}}` og bekreft med `{{<T "Ok" >}}`.

6. Listen er nå lagret som en CSV-fil på din USB-pinne. Alle dyr fra `{{<T "Births" >}}`-listen er slettet.


![VitalControl: Meny Ny på gården Fødsler](../images/births.png "Fødsler")

## Innstillingsalternativer {#setting-options}

I tillegg til å lage eksportfilen, har du følgende alternativer:

- [Bytt](#change-between-list-view-and-single-animal-view) mellom listevisning og enkelt dyrevisning
- [Fjern alle fødselsmeldinger](../purchased-animals/#clear-all-purchase-notices)
- [Slett dyr + meldinger](../purchased-animals/#delete-animal--purchase-notice)
- [Fjern fødselsmelding](../purchased-animals/#clear-notice-of-purchase)
- [Rediger](#edit-data-of-birth-notice) en melding

{{% alert title="Hint" %}}
Noen handlinger er identiske med handlingene i `{{<T "PurchasedAnimals" >}}` listen. Følg lenkene til trinn-for-trinn instruksjonene. Åpne alltid `{{<T "Births" >}}` listen først som beskrevet i instruksjonene ovenfor.
{{% /alert %}}

### Bytt mellom listevisning og enkelt dyrevisning {#change-between-list-view-and-single-animal-view}

1. Bruk <img src="/icons/gear.svg" width="25" align="bottom" alt="Gear" /> `På /Av` knappen.

2. Bruk piltastene ◁ ▷ for å velge mellom `{{<T "ListView" >}}` og `{{<T "SingleAnimalView" >}}`.

3. Lagre innstillingen din med `F1` tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Lagre og gå tilbake" />&nbsp;. Innenfor listevisningen, bruk piltastene ◁ ▷ for å bytte mellom dyrene.

![VitalControl: Meny Ny på gården Fødsler](../images/change.png "Bytt mellom listevisning og enkelt dyrevisning")

### Rediger data av fødselsmelding {#edit-data-of-birth-notice}

{{% alert title="Hint" %}}
Redigering av dyredata er kun mulig i listevisning!
{{% /alert %}}

1. Bruk piltastene △ ▽ for å velge dyret du vil redigere og bekreft med `{{<T "Ok" >}}`.

2. En undermeny åpnes der du kan justere ulike innstillinger. For trinn-for-trinn instruksjoner klikk [her](/no/docs/new/calving/#register-a-calving).

![VitalControl: Meny Ny på gården Fødsler](../images/edit2.png "Rediger en fødselsmelding")
