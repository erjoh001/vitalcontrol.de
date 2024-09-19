---
title: Umpeutus
linkTitle: Umpeutus
slug: dry-off
weight: 115
description: >
 Umpeutus lehmä tai lisää se tuoreiden lehmien listaan
date: 2023-07-26
luokat: [Umpeutus]
tagit: [Umpeutus]
translationKey: actions/dry-cows
---

## Umpeutus {#dry-off}

{{% alert title="Vihje" %}}
Riippuen lehmän alkutilanteesta, voit joko Umpeutus eläimen ja lisätä sen kuivurilistaan, tai voit merkitä eläimen tuoreeksi lypsäjäksi ja siten lisätä sen tuoreiden lypsäjien listaan. Toimintojen ero tehdään selväksi plus-symbolilla tai miinus-symbolilla.
{{% /alert %}}

### Umpeutus lehmä {#dry-off-a-cow}

1. VitalControl-laitteesi päävalikossa valitse valikkokohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Joko skannaa eläimen transponderi ilman kansallista eläin-ID:tä tai valitse eläin listalta. Tee tämä vahvistamalla `{{<T "Ok" >}}` ja valitsemalla eläin-ID nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`.

3. Alivalikko eläintoiminnoille avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon <img src="/icons/actions/dryoff-plus.svg" width="35" align="bottom" alt="Umpeutus" /> `{{<T "DryOff" >}}` ja vahvista `{{<T "Ok" >}}`.

4. Eläin on onnistuneesti merkitty kuivatuksi.

{{< tabpane >}}
{{< tab header="Umpeutus lehmä:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminnat Umpeutus](../images/dryoff-scan.png "Umpeutus lehmä")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listalta" text=true %}}
![VitalControl: Valikko Toiminnat Umpeutus](../images/dryoff.png "Umpeutus lehmä")
{{% /tab %}}
{{< /tabpane >}}

### Merkitse lypsetyksi {#mark-as-lactated}

1. VitalControl-laitteesi päävalikossa valitse valikkokohta &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Toiminnat" /> `{{<T "Actions" >}}` ja paina `{{<T "Ok" >}}`-nappia.

2. Joko skannaa eläimen transponderi ilman kansallista eläin-ID:tä tai valitse eläin listalta. Tee tämä vahvistamalla `{{<T "Ok" >}}` ja valitsemalla eläin-ID nuolinäppäimillä △ ▽. Vahvista `{{<T "Ok" >}}`.

3. Eläimen toimintojen alivalikko avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi toiminnon <img src="/icons/actions/dryoff-minus.svg" width="35" align="bottom" alt="Umpeutus" /> `{{<T "DryOff" >}}` ja vahvista `{{<T "Ok" >}}`.

4. Eläin on merkitty onnistuneesti lypsetyksi.

{{< tabpane >}}
{{< tab header="Merkitse lypsetyksi:" text=true disabled=true />}}
{{% tab header="Transponderin skannaus" text=true %}}
![VitalControl: Valikko Toiminnat Merkitse lypsetyksi](../images/lactated-scan.png "Merkitse lypsetyksi")
{{% /tab %}}
{{% tab header="Manuaalinen valinta listasta" text=true %}}
![VitalControl: Valikko Toiminnat Merkitse lypsetyksi](../images/lactated.png "Merkitse lypsetyksi")
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="Vinkki" %}}
Jos tämä toiminto ei ole käytettävissä, toiminto on todennäköisesti poistettu käytöstä! Aktivoi toiminto [toimintoasetukset](../setting/) -valikossa. Vaihtoehtoisesti kaikkien toimintojen nollaaminen tuo kyseisen toiminnon takaisin.
{{% /alert %}}
