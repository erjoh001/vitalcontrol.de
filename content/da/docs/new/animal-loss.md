---
title: Registrering af et dyretab
linkTitle: Dyretab
date: 2023-07-28T13:25:28+02:00
weight: 10
draft: false
slug: animal-loss
description: >
  Hvordan man registrerer tabet af et dyr ved hjælp af VitalControl-enheden.
kategorier: [Animal-loss]
tags: [Animal-loss]
translationKey: new/animal-loss
---
## Registrer tabet af et dyr {#record-the-loss-of-an-animal}

{{% alert title="Hint" %}}
Dyretabsfunktionen i dette menupunkt bruges primært til at registrere døde kalve/lam. Indstillingsmulighederne er tilpasset derefter og er ikke identiske med indstillingspunkterne i menuen `{{<T "Actions" >}}` -> `{{<T "Unregister" >}}` eller `{{<T "AnimalLoss" >}}`.
{{% /alert %}}

For at registrere tabet af et dyr, skal du gøre følgende:

1. På hovedskærmen på din VitalControl-enhed skal du vælge menupunktet <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `{{<T "New" >}}` og trykke på `{{<T "Ok" >}}` knappen.

2. En undermenu åbnes. Brug piletasterne ◁ ▷ △ ▽ til at vælge menupunktet <img src="/icons/main/stillbirth.svg" width="40" align="bottom" alt="Animal loss" /> `{{<T "AnimalLoss" >}}` og bekræft med `{{<T "Ok" >}}`.

3. Scan enten moderdyrets transponder eller brug `{{<T "Ok" >}}` knappen. Indtast ID'et på moderdyret ved hjælp af piletasterne ◁ ▷ △ ▽ og bekræft med `{{<T "Ok" >}}`.

4. En anden undermenu åbnes, hvor du kan gemme oplysningerne om dyret. Brug piletasterne △ ▽ til at vælge det ønskede indstillingspunkt.

5. For indstillingerne `{{<T "TypeAnimal" >}}`,`{{<T "Sex" >}}` ,`{{<T "BirthWeight" >}}`, `{{<T "Breed" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "Multiples" >}}` og `{{<T "CalvingEase" >}}`, brug piletasterne ◁ ▷ til at vælge den ønskede indstilling.

6. For indstillingen `{{<T "DateBirth" >}}` brug piletasterne △ ▽ til at vælge den ønskede indstillingsmulighed og bekræft med `{{<T "Ok" >}}`. Brug piletasterne △ ▽◁ ▷ til at vælge de ønskede tal. Bekræft til sidst med `{{<T "Ok" >}}`.

7. Gem indstillingerne og opret det nye dyr med `F3` tasten &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save" />&nbsp;.

{{% alert title="Hint" %}}
Yderligere information og indstillingsmuligheder for oprettelse af nye dyr kan findes [her](../../settings/animal-registration/).
{{% /alert %}}

{{< tabpane >}}
{{< tab header="Dyretab:" text=true disabled=true />}}
{{% tab header="Transponder scanning" text=true %}}
![VitalControl: Menuvej Ny dyretab](../images/animalloss-scan.png "Registrer tabet af et dyr")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
![VitalControl: Menuvej Ny dyretab](../images/animalloss.png "Registrer tabet af et dyr")
{{% /tab %}}
{{< /tabpane >}}
