---
title: Erfassung einer Vielzahl von Tierzugängen
linkTitle: Massenzugang
date: 2023-07-28T13:25:28+02:00
weight: 40
draft: false
slug: massenzugang
description: >
  Nutzen Sie den Barcodescanner um mittels der Tierpässe eine Vielzahl von zugekauften Tieren zu erfassen.
Kategorien: [Massenzugang]
Tags: [Massenzugang]
translationKey: new/bulk-recording
---
## Massenzugang {#bulk-recording}

Mithilfe des Massenzuganges können Sie eine Vielzahl von Tieren in kurzer Zeit erfassen und in Ihrem Gerät abspeichern. Mit dem Barcode-Scanner scannen Sie die Barcodes für die Ohrmarkennummer und das Geburtsdatum auf den Rinderpässen. Das Tier wird automatisch abgespeichert und Sie können direkt den nächsten Pass einscannen. Um den Massenzugang zu verwenden gehen Sie wie folgt vor:

1. Schließen Sie den Barcode-Scanner mittels des Kabels an das VitalControl an.

2. Wählen Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="New animal" /> `Neu` und drücken Sie die Taste `OK`.

3. Es öffnet sich ein Untermenü. Wählen Sie mit den Pfeiltasten ◁ ▷ △ ▽ den Menüpunkt <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massenzugang" /> `Massenzugang` und bestätigen Sie mit `OK`.

4. Es öffnet sich der Erfassungsbildschirm, in dem je ein Feld für die Ohrmarkennummer und ein Feld für das Geburtsdatum des zu erfassenden Tieres angezeigt werden. Scannen Sie zuerst den Barcode für die Ohrmarkennummer. Die Umrandung des Feldes wechselt von rot zu grün. Scannen Sie anschließend das Geburtsdatum. Die Umrandung wird kurzzeitig grün, bevor beide Umrandungen wieder rot erscheinen. Der Zähler rechts neben den Symbol &nbsp;<img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Tierpässe" title="Tierpässe" /> `Tierpässe` in der Kopfzeile wird von 0 auf 1 erhöht. Das erste Tier wurde gespeichert. Fahren Sie fort und scannen Sie die weiteren Rinderpässe ein. Nach jedem gescannten Pass erhöht sich der Zähler am Passsymbol <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Tierpässe"  title="Tierpässe" /> um eins. Der Zähler am Herdensymbol <img src="/icons/header/group.svg" width="35" align="bottom" alt="Tiergruppe" title="Tiergruppe" /> erhöht sich ebenfalls um eins. 

{{% alert title="Hinweis" %}}
Der Zähler am Passsymbol <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Tierpässe"  title="Tierpässe" /> verdeutlicht wie viele Pässe Sie in einem Zug, ohne den Bildschirm `Massenzugang` zu verlassen, eingescannt haben. Der Zähler am Herdensymbol <img src="/icons/header/group.svg" width="35" align="bottom" alt="Tiergruppe"  title="Tiergruppe" /> verdeutlicht wie viele Pässe Sie insgesamt eingescannt haben. Dieser setzt sich nicht auf Null zurück, sollten Sie den Bildschirm `Massenzugang` verlassen. Der Zähler ist äquivalent zu Ihrem Einträgen in dem Menüpunkt [`Zukäufe`](../zugaenge/zukaeufe/).
{{% /alert %}}

   ![VitalControl: Menüfolge Neu Massenzugang](../bilder/massenzugang.png "Massenzugang nutzen")

{{% alert title="Hinweis" %}}
Innerhalb des Menüpunktes Massenzuganges haben Sie noch weitere Einstellungsmöglichkeiten. Diese sind im Folgenden erläutert. Rufen Sie als vorbereitende Schritte immer zuerst den Menüpunkt Massenzugang auf und verfahren Sie dann wie in der Anleitung.
{{% /alert %}}

{{% alert title="Hinweis" %}}
Während des Scanvorgangs kann es zu Fehlermeldungen kommen. Der Barcodescanner gibt in diesem Falle einen Ton aus und ein weiteres Scannen ist nicht möglich. Quittieren Sie die entsprechende Fehlermeldung im Display des VitalControls und fahren Sie mit dem Scannen fort. 
{{% /alert %}}


### Geburtsdatum muss angegeben werden {#birth-date-mandatory}

Mit dieser Einstellungsoption bestimmten Sie, ob das Geburtsdatum beim Anlegen der Tiere zwingend mit angegeben werden muss. Deaktivieren Sie diese Option, müssen Sie nur noch eine Ohrmarkennummer scannen um ein Tier anzulegen. Bei diesen Tieren wird dann jedoch das aktuelle Datum als Geburtsdatum hinterlegt! Diese Funktion ist standardmäßig aktiviert. Um Sie zu deaktivieren gehen Sie wie folgt vor:

1. Verwenden Sie die `An/Aus` Taste &nbsp;<img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungen Massenzugang" /> um das Einstellungsmenü für den Massenzugang zu öffnen.

2. Verwenden Sie die Pfeiltasten △ ▽ um die Einstellungsoption `Geburtsdatum muss angegeben werden` auszuwählen und bestätigen Sie mit `OK`.

3. Der gelbe Kreis symbolisiert, dass die Funktion aktiviert ist. Ein grauer Kreis symbolisiert, dass die Funktion deaktiviert ist.

4. Speichern Sie die Einstellungen und gelangen Sie mit der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und zurück" /> zurück zum Menüpunkt <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massenzugang" />&nbsp; `Massenzugang`.

   ![VitalControl: Menüfolge Neu Massenzugang](../bilder/geburtsdatum.png "Geburtsdatum muss angegeben werden aktivieren bzw. deaktivieren")

### Standardwerte einstellen {#default-values}

Innerhalb des Einstellungsmenüs `Standardwerte` legen Sie Standards fest die für jedes Tier gelten, das Sie anlegen. Der Ablauf des Anlegens mit dem Barcode-Scanner bleibt dabei unverändert wie oben beschrieben. Sie haben die Möglichkeit die Art des Nutztieres, das Geschlecht, die Rasse und den Verbleib einzustellen. Um die `Standardwerte` einzustellen gehen Sie wie folgt vor:

1. Verwenden Sie die <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungsmenü" /> `An/Aus` Taste um das Einstellungsmenü zu öffnen.

2. Verwenden Sie die Pfeiltasten △ ▽ um den Menüpunkt `Standardwerte` auszuwählen und bestätigen Sie mit `OK`.

3. Es öffnet sich ein Untermenü mit den unterschiedlichen Einstellungsmöglichkeiten. Verwenden Sie die Pfeiltasten △ ▽ um die gewünschte Einstellungsoption auszuwählen. Verwenden Sie die Pfeiltasten ◁ ▷ um die gewünschte Einstellung auszuwählen.

4. Speichern Sie die Einstellungen und gelangen sie mit der  `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und zurück" />&nbsp; zurück zum Menüpunkt <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massenzugang" />&nbsp; `Massenzugang`.

   ![VitalControl: Menüfolge Neu Standardwerte](../bilder/standardwerte.png "Standardwerte einstellen")

### Erfasste Werte einstellen {#recorded-values}

Innerhalb des Einstellungsmenüs `Erfasste Werte` legen Sie fest, welche Werte zusätzlich zu der Ohrmarkennummer und dem Geburtsdatum erfasst werden sollen. Sie können zwischen `Rasse`, `Geschlecht`, `Verbleib`, `Aktuelles Gewicht`, `Geburtsgewicht` und `Art des Nutztieres` auswählen. Sobald Sie dabei mindestens einen Wert einstellen verändert sich der Ablauf während des Scans. Scannen Sie zunächst die Ohrmarkennummer und das Geburtsdatum ein. Wählen Sie dann mit den Peiltasten △ ▽ die einzustellenden Werte aus und legen Sie die Werte fest. Speichern Sie dann mit der Taste `F3` ihre Angaben ab. Erst danach ist das Tier angelegt! Um die zu erfassenden Werte einzustellen gehen Sie wie folgt vor:

1. Verwenden Sie die <img src="/icons/gear.svg" width="25" align="bottom" alt="Einstellungsmenü" /> `An/Aus` Taste um das Einstellungsmenü zu öffnen.

2. Verwenden Sie die Pfeiltasten △ ▽ um den Menüpunkt `Erfasste Werte` auszuwählen und bestätigen Sie mit `OK`.

3. Wählen Sie den gewünschten zu erfassenden Wert mit den Pfeiltasten △ ▽ aus und bestätigen Sie mit `OK`. Es erscheint ein gelber Kreis. Möchten Sie den zu erfassenden Wert wieder deaktivieren bestätigen Sie erneut mit `OK`. Der gelbe Kreis verschwindet.

4. Speichern Sie die Einstellungen und gelangen Sie mit der `F1` Taste &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Speichern und zurück" /> zurück zum Menüpunkt <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Massenzugang" />&nbsp; `Massenzugang`.

5. Möchten Sie alle zu erfassenden Werte wieder deaktivieren wählen Sie im Menüpunkt `Erfasste Werte` unten die Einstellungsoption Reihenfolge zurücksetzen und bestätigen Sie mit `OK`.

   ![VitalControl: Menüfolge Neu Erfasste Werte](../bilder/erfasstewerte.png "Erfasste Werte einstellen")
