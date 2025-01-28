---
title: "Viimeisimmät laiteohjelmistoversiot"
linkTitle: "Viimeisimmät versiot"
date: 2023-07-18T12:47:29+02:00
draft: false
weight: 10
description: >
 Laiteohjelmiston nykyiset versiot VitalControl-laitteelle.
---

## Määritä laitteeseesi asennetut laiteohjelmistoversiot {#determine-firmware-versions-installed-on-your-device}

1. Avaa valikkokohta <img src="/icons/device.svg" width="25" align="bottom" alt="Laite" /> `{{<T "Device" >}}` VitalControl-laitteesi päävalikosta.

2. Käynnistä alavalikko `{{<T "Info" >}}`, valitse valikkokohta `{{<T "Software" >}}` ja vahvista `{{<T "Ok" >}}`. Avautuu ponnahdusikkuna, joka näyttää laitteeseesi asennetut ohjelmistoversiot:

![VitalControl: määritä laiteohjelmistoversiot](../images/firmware-versions.png "Näytä laiteohjelmistoversiot")

## Viimeisimmät laiteohjelmistoversiot: {#latest-firmware-versions}

Seuraava taulukko listaa nykyiset laiteohjelmistoversiot:

|                 | GUI-laiteohjelmisto  | Väliohjelmisto  | Käynnistyslataaja |
|-----------------|:-------------:|:-----------:|:----------:|
| **Versio**     | {{% version/firmware component="gui" %}} | {{% version/firmware component="middleware" %}} | {{% version/firmware component="bootloader" %}} |
| **Päivämäärä**       | {{% version/firmware component="gui" info="date" %}}  | {{% version/firmware component="middleware" info="date" %}} | {{% version/firmware component="bootloader" info="date" %}} |
| **Commit Hash** | {{% version/firmware component="gui" info="commitHash" %}} | {{% version/firmware component="middleware" info="commitHash" %}} |  {{% version/firmware component="bootloader" info="commitHash" %}} |
| **Commit №**    | {{% version/firmware component="gui" info="commitNo" %}} | {{% version/firmware component="middleware" info="commitNo" %}} | {{% version/firmware component="bootloader" info="commitNo" %}}|

{{% alert title="Vinkki" %}}
Jos kaipaat laitteeseesi uudempia ominaisuuksia tai kohtaat vakausongelmia, suosittelemme [päivittämään](../update/) laitteesi laiteohjelmiston uusimpaan julkaistuun versioon.
{{% /alert %}}
