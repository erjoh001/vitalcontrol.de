---
title: Poveži ID živali
linkTitle: Poveži ID živali
slug: link-animal-id
weight: 115
description: >
 Dodeli nacionalni ID živali živali, ki nima nacionalnega ID živali
date: 2023-07-26
categories: [Nacionalni ID živali]
tags: [Nacionalni ID živali]
translationKey: actions/national-animal-id
---
{{% alert title="Opozorilo" color="warning" %}}
To dejanje ni privzeto omogočeno! Aktivirajte to, kot je opisano v [nastavitvah dejanj](../setting/).
{{% /alert %}}

## Poveži ID živali {#link-animal-id}

Za dodelitev nacionalnega ID živali živali, ki nima nacionalnega ID živali, nadaljujte na naslednji način:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Dejanja" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Ali skenirajte transponder živali brez nacionalnega ID živali ali izberite žival s seznama. Za to potrdite z `{{<T "Ok" >}}` in izberite ID živali s pomočjo puščičnih tipk △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z dejanji za živali. S puščičnimi tipkami ◁ ▷ △ ▽ izberite dejanje &nbsp;<img src="/icons/actions/link-nais-id.svg" width="35" align="bottom" alt="Poveži ID živali" /> `{{<T "LinkAnimalID" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Odpre se še en podmeni z vsemi možnostmi nastavitve podatkov o živali. Možnost nastavitve `{{<T "NationalAnimalID" >}}` je samodejno izbrana. Potrdite z `{{<T "Ok" >}}`.

5. S puščičnimi tipkami ◁ ▷ △ ▽ nastavite nacionalni ID živali. Ponovno potrdite z `{{<T "Ok" >}}`.

6. Shranite nastavitve in se vrnite v glavni meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Dejanja" /> `{{<T "Actions" >}}` s pomočjo tipke `F3`.

{{< tabpane >}}
{{< tab header="Poveži ID živali:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Meni Dejanje Poveži ID živali](../images/linkanimalid-scan.png "Poveži ID živali")
{{% /tab %}}
{{% tab header="Ročna izbira s seznama" text=true %}}
![VitalControl: Meni Dejanje Poveži ID živali](../images/linkanimalid.png "Poveži ID živali")
{{% /tab %}}
{{< /tabpane >}}

## Povezava ID živali z elektronskim ušesnim značkom {#link-animal-id-with-electronic-ear-tag-scan}

Za dodelitev nacionalnega ID-ja živali, ki ima elektronski ušesni značek, sledite naslednjim korakom:

1. Na glavnem zaslonu vaše naprave VitalControl izberite meni &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` in pritisnite gumb `{{<T "Ok" >}}`.

2. Bodisi skenirajte transponder živali brez nacionalnega ID-ja ali izberite žival s seznama. Za to potrdite z `{{<T "Ok" >}}` in izberite ID živali s pomočjo puščičnih tipk △ ▽. Potrdite z `{{<T "Ok" >}}`.

3. Odpre se podmeni z akcijami za živali. S puščičnimi tipkami ◁ ▷ △ ▽ izberite akcijo &nbsp;<img src="/icons/actions/scan-nais-id.svg" width="35" align="bottom" alt="Link animal ID" />  `{{<T "LinkAnimalID" >}}` in potrdite z `{{<T "Ok" >}}`.

4. Sedaj skenirajte elektronski ušesni značek.

5. Žival je bila uspešno dodeljena nacionalnemu ID-ju.

{{< tabpane >}}
{{< tab header="Povezava ID živali z elektronskim ušesnim značkom:" text=true disabled=true />}}
{{% tab header="Skeniranje transponderja" text=true %}}
![VitalControl: Menu Action Link animal ID](../images/linkanimalidscan-scan.png "Link animal ID")
{{% /tab %}}
{{% tab header="Ročna izbira s seznama" text=true %}}
![VitalControl: Menu Action Link animal ID](../images/linkanimalidscan.png "Link animal ID")
{{% /tab %}}
{{< /tabpane >}}
