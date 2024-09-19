---
title: Mät temperatur
linkTitle: Temperatur
slug: measure-temperature
weight: 10
description: >
  Mät feber hos dina djur.
date: 2023-07-26
Kategorier: [Åtgärder]
Taggar: [Åtgärder, feber, temperatur]
translationKey: actions/temperature
---

## Mät feber {#measure-fever}

Använd temperaturåtgärden för att mäta temperaturen på dina djur. Sätt in mätspetsen rektalt till den angivna mätningen (för stora djur hela längden upp till bulan, för små idisslare ca 6 cm eller 2/3 av mätspetsen). Mätprocessen körs automatiskt. Så snart mätprocessen är klar visar enheten den uppmätta temperaturen. Färgkodningen indikerar om temperaturen är i det gröna, gula eller röda området. Du har flera alternativ under kampanjen Ta en temperatur:

- [Spara resultatet](#save-result) för att dokumentera mätningen djurspecifikt
- Sätt djuret på [Bevakningslistan](#put-on-the-watch-list). Detta gör det lättare för dig att kontrollera repetitionerna, eftersom du kan kalla upp dessa djur med hjälp av 'observationslistan' och därmed hitta de iögonfallande djuren lättare.
- Slå på och av [Belysning av mätplatsen](#lighting-of-the-measurement-location-on-and-off)
- [Upprepa mätningen](#repeat-the-measurement)
- [Avbryt åtgärden](#cancel-the-action)

{{% alert title="Tips" %}}
Om temperaturen är i det gula området ("förhöjd") eller röda området ("feber"), sätter VitalControl automatiskt det valda djuret på larmlistan. Genom att korrelera med andra data kan du kontinuerligt övervaka hälsan hos det enskilda djuret.
{{% /alert %}}

### Förberedande steg {#preliminary-steps}

1. På huvudskärmen på din VitalControl-enhet, välj menyalternativet &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Åtgärder" /> `{{<T "Actions" >}}` och tryck på `{{<T "Ok" >}}`-knappen.

2. Antingen skanna ett djur med hjälp av transpondern eller välj ett djur från listan. Bekräfta med `{{<T "Ok" >}}` och välj ett djur med piltangenterna △ ▽. Bekräfta med `{{<T "Ok" >}}`.


3. En undermeny med djuråtgärder öppnas. Åtgärden <img src="/icons/actions/temperature.svg" width="10" align="bottom" alt="Temperature" /> `{{<T "Temperature" >}}` är automatiskt vald. Bekräfta med `{{<T "Ok" >}}`.

4. Utför nu mätningen. Så snart mätningen är klar markeras temperaturen i blått, grönt, gult eller rött, beroende på den inställda tröskeln.

{{< tabpane >}}
{{< tab header="Preliminary steps:" text=true disabled=true />}}
{{% tab header="Transponder scan" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps-scan.png "Preliminary steps")
{{% /tab %}}
{{% tab header="Manual selection from list" text=true %}}
![VitalControl: Menu Actions Preliminary steps](../images/firststeps.png "Preliminary steps")
{{% /tab %}}
{{< /tabpane >}}

### Spara resultat {#save-result}

1. Slutför de preliminära stegen.

2. Använd `F3`-tangenten <img src="/icons/footer/save.svg" width="25" align="bottom" alt="Save" /> eller bekräfta med `{{<T "Ok" >}}` för att spara resultatet.

    ![VitalControl: Menu Actions Save results](../images/saveresults.png "Save results")

### Lägg till på bevakningslistan {#put-on-the-watch-list}

1. Slutför de preliminära stegen.

2. Tryck på den mellersta övre `On/Off`-knappen <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. En popup-meny öppnas där du kan välja från menyalternativen `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` eller `{{<T "Flashlight" >}}`. Använd piltangenterna △ ▽ för att välja `{{<T "AddToWatchList" >}}` och tryck på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-tangenten `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Put on watch list](../images/watchlist.png "Put on watch list")

### Tänd och släck belysningen på mätplatsen {#lighting-of-the-measurement-location-on-and-off}

1. Slutför de preliminära stegen.

2. Tryck på den mellersta övre `On/Off`-knappen <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.


3. En popup-meny öppnas där du kan välja från menyalternativen `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` eller `{{<T "Flashlight" >}}`. Använd piltangenterna △ ▽ för att välja `{{<T "Flashlight" >}}` och tryck på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-knappen `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Flashlight on off](../images/light.png "Flashlight on off")

### Upprepa mätningen {#repeat-the-measurement}

1. Slutför de preliminära stegen.

2. Tryck på den mellersta övre `On/Off`-knappen <img src="/icons/footer/repeat_add_to_watch.svg" width="65" align="bottom" alt="Open popup" />.

3. En popup-meny öppnas där du kan välja från menyalternativen `{{<T "RepeatMeasurement" >}}`, `{{<T "AddToWatchList" >}}` eller `{{<T "Flashlight" >}}`. Använd piltangenterna △ ▽ för att välja `{{<T "RepeatMeasurement" >}}` och tryck på den centrala `{{<T "Ok" >}}`-knappen eller `F3`-knappen `{{<T "Ok" >}}`.

    ![VitalControl: Menu Actions Light on off](../images/repeat.png "Light on off")

### Avbryt åtgärden {#cancel-the-action}

1. Slutför de preliminära stegen.

2. Tryck på `F1` <img src="/icons/footer/cancel.svg" width="25" align="bottom" alt="Cancel" />-knappen för att avbryta åtgärden.

    ![VitalControl: Menu Actions Cancel the action](../images/saveresults.png "Cancel the action")

{{% alert title="Hint" %}}
Om denna åtgärd inte är tillgänglig har åtgärden förmodligen inaktiverats! Aktivera åtgärden i menyn [action settings](../setting/). Alternativt kommer en återställning av alla åtgärder att återställa denna åtgärd.
{{% /alert %}}
