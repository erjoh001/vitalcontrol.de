---
title: Bedømmelse
linkTitle: Bedømmelse
slug: rating
weight: 30
description: >
 Bedøm dine dyr.
date: 2023-07-26
categories: [Handlinger]
tags: [Handlinger, Bedømmelse]
translationKey: actions/animal-rating
---

## Bedøm dine dyr {#rate-your-animals}

Når du bedømmer dyret, dokumenterer du tilstanden af det enkelte dyr. Tilstanden bestemmes visuelt og registreres ved hjælp af trafiklyssystemet. I den grundlæggende vurdering registreres kun den generelle tilstand. I den udvidede evaluering registrerer du den generelle tilstand, foderindtag, konsistens af afføring og luftvejssygdomme. Du kan enten ændre bedømmelsestilstanden direkte i <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` handlingen eller du kan definere det i [indstillingerne](../../settings/data-acquisition/#mode-of-animal-rating).

{{% alert title="Hint" %}}
En gul eller rød evaluering betyder, at VitalControl klassificerer dyret som iøjnefaldende og sætter det på alarmlisten.
{{% /alert %}}

1. På hovedskærmen på din VitalControl-enhed, vælg menuen &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` og tryk på `{{<T "Ok" >}}` knappen.

2. Enten scan et dyr ved hjælp af transponderen eller vælg et dyr fra listen. Bekræft med `{{<T "Ok" >}}` og vælg et dyr med piletasterne △ ▽. Bekræft med `{{<T "Ok" >}}`.

3. En undermenu med dyrehandlinger åbnes. Brug piletasterne ◁ ▷ til at vælge handlingen <img src="/icons/actions/rating.svg" width="30" align="bottom" alt="Rating" /> `{{<T "Rating" >}}` og bekræft med `{{<T "Ok" >}}`.

4. Bedømmelsesmenuen åbnes. Hvis du vil skifte bedømmelsestilstand, brug `On/Off` &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Chain-of-actions" />&nbsp; knappen og piletasterne ◁ ▷. Med `F1` tasten <img src="/icons/footer/exit.svg" width="24" align="bottom" alt="Back" />&nbsp; kommer du tilbage til evalueringsmenuen.

5. Brug piletasterne ◁ ▷ △ ▽ til at vælge en tilstand og gem den med `F3` tasten <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> eller `{{<T "Ok" >}}` tasten.


6. I avanceret tilstand skal du bruge `F1` og `F3` tasterne til at skifte mellem vurderingsparametrene.

{{% alert title="Tip" %}}
Hvis du ikke foretager et valg ved hjælp af piletasterne ◁ ▷ men gemmer direkte ved hjælp af `F3` eller `{{<T "Ok" >}}` tasten, gemmer VitalControl en neutral vurdering, repræsenteret ved en grå farve.
{{% /alert %}}

### Grundlæggende vurdering {#basic-rating}

{{< tabpane >}}
{{< tab header="Grundlæggende vurdering:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Handlinger Vurdering](../images/basicrating-scan.png "Grundlæggende vurdering")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
![VitalControl: Menu Handlinger Vurdering](../images/basicrating.png "Grundlæggende vurdering")
{{% /tab %}}
{{< /tabpane >}}

### Udvidet vurdering {#extended-rating}

{{< tabpane >}}
{{< tab header="Grundlæggende vurdering:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Handlinger Vurdering](../images/extendedrating-scan.png "Udvidet vurdering")
{{% /tab %}}
{{% tab header="Manuel valg fra liste" text=true %}}
![VitalControl: Menu Handlinger Vurdering](../images/extendedrating.png "Udvidet vurdering")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Tip" %}}
Hvis denne handling ikke er tilgængelig, er handlingen sandsynligvis blevet deaktiveret! Aktivér handlingen i [handlingsindstillinger](../setting/) menuen. Alternativt vil nulstilling af alle handlinger bringe denne handling tilbage.
{{% /alert %}}
