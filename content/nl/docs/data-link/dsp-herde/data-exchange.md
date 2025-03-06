---
title: Gegevensuitwisseling tussen VitalControl en veemanagementsoftware Herde
linkTitle: Gegevensuitwisseling
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Synchroniseer de dieren opgeslagen op het VitalControl-apparaat met dieren beheerd door *Herde* software en draag gemeten waarden over die zijn opgenomen met het VitalControl-apparaat naar *Herde* software.
weight: 20
categorieën: [Gegevensuitwisseling, DSP Herde]
translationKey: DSPherde/data-exchange
---
Volg de onderstaande stappen om gegevens te synchroniseren tussen de software `Herde` en het VitalControl-apparaat:

### Verbind VitalControl met PC

1. Verbind het VitalControl-apparaat met uw computer of laptop via de meegeleverde USB-kabel.

   ![Verbind VitalControl met PC of laptop](/images/synchronisation/connect-to-pc.svg "Verbind VitalControl met PC")

1. Zorg ervoor dat uw VitalControl-apparaat is ingeschakeld.

### Voer gegevensuitwisseling uit

1. Voer binnen de software `Herde` een volledige gegevensuitwisseling uit. Afhankelijk van de configuratie van uw gebruikersinterface, kunt u deze uitwisseling oproepen via het menu-item `Volledige gegevensuitwisseling` in het hoofdmenu (bovenste niveau item _Technologie_), in het zijbalkmenu of in uw aangepaste gereedschapskist (horizontaal of verticaal).

   ![Software Herde: Een volledige gegevensuitwisseling activeren](../screenshots/data-exchange.png "Herde: Gegevensuitwisseling activeren")

1. Er opent een pop-up, waarin de voorgeschreven technologiekoppelingen in de zijbalk links worden vermeld. Klik op de knop met het label `VitalControl` om de gegevensuitwisseling te starten:

   ![Software Herde, starten van gegevensuitwisseling](../screenshots/start-transfer.png "Herde: Start gegevensuitwisseling")

1. Bij de eerste gegevensuitwisseling verschijnt een waarschuwing dat er nog geen dieren geregistreerd zijn op het VitalControl-apparaat. Bevestig deze melding met `Ja`. De gegevensuitwisseling wordt dan gestart.

   ![Software Herde, gegevensuitwisseling: waarschuwing](../screenshots/warning.png "Gegevensuitwisseling: waarschuwing")

1. Gegevensuitwisseling is een tweestapsproces: In de eerste stap <span style="font-size: 140%">➊</span> worden de diergegevens overgedragen van software `Herde` naar de VitalControl. In de tweede stap <span style="font-size: 140%">➋</span> worden de meetgegevens die met de VitalControl zijn verzameld, overgedragen naar software `Herde`. Het aantal geïmporteerde gegevenssets (dieren, kalveren, waarschuwingen en gewichten) wordt vermeld in de pop-up:

![Data-uitwisseling met software Herde: Actieverloop](../screenshots/data-transfer.png "Data-uitwisseling: Actieverloop")

1. Succesvolle voltooiing van de gegevensuitwisseling wordt aangegeven via een pop-up met een succesmelding.

   ![Software Herde: Succesmelding gegevensuitwisseling](../screenshots/success-message.png "Herde: Succesmelding gegevensuitwisseling")

    {{% alert title="Let op" %}}
Als er veel dieren geregistreerd staan op het VitalControl-apparaat, kan de gegevensuitwisseling enige tijd in beslag nemen. De voortgang van de gegevensoverdracht is zichtbaar op het display van het apparaat.

![VitalControl, gegevensuitwisseling: voortgangsbalk](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: voortgangsbalk gegevensuitwisseling")
    {{% /alert %}}
