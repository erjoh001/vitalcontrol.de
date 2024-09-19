---
title: Állat azonosító összekapcsolása
linkTitle: Állat azonosító összekapcsolása
slug: link-animal-id
weight: 115
description: >
 Országos állat azonosító hozzárendelése egy olyan állathoz, amelynek nincs országos állat azonosítója
date: 2023-07-26
kategóriák: [Országos állat azonosító]
címkék: [Országos állat azonosító]
translationKey: actions/national-animal-id
---
{{% alert title="Figyelmeztetés" color="warning" %}}
Ez a művelet alapértelmezés szerint nincs engedélyezve! Aktiválja ezt a [művelet beállítások](../setting/) leírása szerint.
{{% /alert %}}

## Állat azonosító összekapcsolása {#link-animal-id}
 
Országos állat azonosító hozzárendeléséhez egy olyan állathoz, amelynek nincs országos állat azonosítója, kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy olvassa be az állat transzponderét, amelynek nincs országos állat azonosítója, vagy válassza ki az állatot a listából. Ehhez erősítse meg az `{{<T "Ok" >}}` gombbal, és válassza ki az állat azonosítóját a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állat műveleteivel. Használja a ◁ ▷ △ ▽ nyílgombokat a &nbsp;<img src="/icons/actions/link-nais-id.svg" width="35" align="bottom" alt="Link animal ID" /> `{{<T "LinkAnimalID" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Egy másik almenü nyílik meg az állat adataival kapcsolatos összes beállítási lehetőséggel. Az `{{<T "NationalAnimalID" >}}` beállítási lehetőség automatikusan ki van választva. Erősítse meg az `{{<T "Ok" >}}` gombbal.

5. Használja a ◁ ▷ △ ▽ nyílgombokat az országos állat azonosító beállításához. Ismét erősítse meg az `{{<T "Ok" >}}` gombbal.

6. Mentse a beállításokat, és térjen vissza a főmenübe &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` az `F3` gomb használatával.

{{< tabpane >}}
{{< tab header="Állat azonosító összekapcsolása:" text=true disabled=true />}}
{{% tab header="Transzponder beolvasás" text=true %}}
![VitalControl: Menü Művelet Állat azonosító összekapcsolása](../images/linkanimalid-scan.png "Állat azonosító összekapcsolása")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menü Művelet Állat azonosító összekapcsolása](../images/linkanimalid.png "Állat azonosító összekapcsolása")
{{% /tab %}}
{{< /tabpane >}}

## Az állat azonosítójának összekapcsolása az elektronikus fülcímke beolvasásával {#link-animal-id-with-electronic-ear-tag-scan}

Az állat nemzeti azonosítójának hozzárendeléséhez egy elektronikus fülcímkével rendelkező állathoz, kövesse az alábbi lépéseket:

1. A VitalControl készülék főképernyőjén válassza ki a &nbsp;<img src="/icons/actions.svg" width="40" align="bottom" alt="Actions" /> `{{<T "Actions" >}}` menüpontot, és nyomja meg az `{{<T "Ok" >}}` gombot.

2. Vagy olvassa be az állat transzponderét, amely nem rendelkezik nemzeti állat azonosítóval, vagy válassza ki az állatot a listából. Ehhez erősítse meg az `{{<T "Ok" >}}` gombbal, és válassza ki az állat azonosítóját a △ ▽ nyílgombokkal. Erősítse meg az `{{<T "Ok" >}}` gombbal.

3. Megnyílik egy almenü az állat műveleteivel. Használja a ◁ ▷ △ ▽ nyílgombokat a &nbsp;<img src="/icons/actions/scan-nais-id.svg" width="35" align="bottom" alt="Link animal ID" />  `{{<T "LinkAnimalID" >}}` művelet kiválasztásához, és erősítse meg az `{{<T "Ok" >}}` gombbal.

4. Most olvassa be az elektronikus fülcímkét.

5. Az állat sikeresen megkapta a nemzeti állat azonosítót.

{{< tabpane >}}
{{< tab header="Az állat azonosítójának összekapcsolása az elektronikus fülcímke beolvasásával:" text=true disabled=true />}}
{{% tab header="Transzponder beolvasása" text=true %}}
![VitalControl: Menu Action Link animal ID](../images/linkanimalidscan-scan.png "Link animal ID")
{{% /tab %}}
{{% tab header="Kézi kiválasztás a listából" text=true %}}
![VitalControl: Menu Action Link animal ID](../images/linkanimalidscan.png "Link animal ID")
{{% /tab %}}
{{< /tabpane >}}
