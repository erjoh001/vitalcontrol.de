---
title: Import des Tierbestands aus der HI-Tier Datenbank
linkTitle: Tierimport
date: 2023-07-19T10:32:21+02:00
draft: false
weight: 30
translationKey: import-db-nais
description: >
  Tierbestand komplett oder teilweise von HI-Tier Datenbank ins VitalControl importieren
kategorien: [HI-Tier, Tierimport]
tags: [HI-Tier, Import Tierbestand]
slug: tierimport
---
## Import des Tierbestandes aus HI-Tier

Gehen Sie wie folgt vor, um ihren in der HI-Tier Datenbank hinterlegten Tierbestand ganz oder teilweise auf das VitalControl zu übertragen:

### Nur beim ersten Import: Betriebsnummer am VitalControl eingeben

1. Vor dem ersten Datenimport müssen Sie einmalig am VitalControl Ihre [Betriebsnummer eingeben]({{< relref "../../einstellungen/farm-number.md" >}}).

  {{% alert title="Hinweis" %}}
Die Betriebsnummer wird permanent in den Einstellungen des VitalControls gespeichert, daher kann dieser Schritt bei allen zukünftigen Tierimporten übersprungen werden.
  {{% /alert %}}

### VitalControl mit dem PC verbinden

2. Verbinden Sie das VitalControl-Gerät via des mitgelieferten USB-Kabels mit ihrem Computer oder Laptop.

   ![VitalControl mit dem PC verbinden](/images/synchronisation/connect-to-pc.svg "VitalControl mit PC koppeln")

1. Stellen Sie sicher, dass das VitalControl-Gerät eingeschaltet ist.

### Importvorgang am PC aufrufen

4. Drücken Sie die Windows-Taste, um das Startmenü zu öffnen

1. *Nur Windows 11*: Klicken Sie auf den Eintrag `Alle Apps`

1. Scrollen Sie in der Liste ihrer installierten Anwendungen nach unten bis zum Buchstaben `U`. Dort sollten Sie einen Eintrag `Urban VitalControl` vorfinden. Klappen Sie ggf. diesen Eintrag auf, damit alle Untermenüeinträge angezeigt werden.

    {{% alert title="Achtung" %}}
Falls Sie in der Liste ihrer Anwendungen den Eintrag `Urban VitalControl` nicht finden können, müssen Sie ggf. die Software `VCSynchronizer` auf ihrem [PC installieren](../../vcsynchronizer/installation/).
    {{% /alert %}}

1. Klicken Sie jetzt auf den Menüeintrag `Import Tierbestand HI-Tier`.

   ![Windows Startmenü, Eintrag für Urban VitalControl (VCSynchronizer)](../../vcsynchronizer/images/tierimport/import-tierbestand.png "Windows Startmenü, VitalControl")

1. Es öffnet sich ein DOS-Fenster, der Importvorgang wird gestartet. Es werden mehrere Abfragen gestellt, anhand derer sie Angaben zum Umfang des Tierimports festlegen können. Hierbei werden abgefragt:

   - ➀ **Geschlecht** der zu importierenden Tiere:
     Drücken Sie hier `M` oder `W` um nur **m**ännliche bzw. **w**eibliche Tiere zu importieren oder drücken Sie `OK` um alle Tiere zu berücksichtigen)
   - ➁ **Mindest-** und ➂ **Maximalalter** der zu importierenden Tiere
     Geben Sie hier jeweils entweder einen Zahlenwert (in Tagen) an oder drücken Sie `OK` wenn Sie keine Alterbeschränkung wünschen.
   - ➃ **Zugangsdatum** der zu importierenden Tiere
     Geben Sie hier das Meldedatum der zu importierenden Tiere (im Format `Tag-Monat-Jahr`) an oder drücken Sie `OK` um ohne Datumsbeschränkung fortzufahren.
     <br>

   ![DOS-Fenster, Import des Tierbestandes aus HI-Tier](../../vcsynchronizer/images/tierimport/ablauf-import.png "DOS-Fenster, Import Tierbestand")

1. Das Programm stellt nun anhand der im VitalControl hinterlegten [Betriebsnummer]({{< relref "../../einstellungen/farm-number.md" >}}) die Verbindung zur HI-Tier Datenbank her. In diesem Zuge wird ihr ➄ **Passwort** bei HI-Tier abgefragt, tippen Sie dieses im Fenster ein.

1. Nach einer korrekten Passworteingabe werden die zu importierenden Tiere abgerufen und auf das VitalControl-Gerät übertragen.

    {{% alert title="Achtung" %}}
Falls viele Tiere übertragen sollen, kann der Importvorgang eine gewisse Zeitspanne in Anspruch nehmen. Den Fortschritt des Datenimports können Sie dabei dem Display des VitalControl-Geräts entnehmen.

![Datenimport von HI-Tier, Fortschrittsanzeige](../../vcsynchronizer/images/tierimport/datenuebertragung.png "Fortschritt Datenimport")
    {{% /alert %}}

1. Der Import der Tiere ist jetzt abgeschlossen. Wenn Sie im Hauptbildschirm Ihres VitalControl-Geräts den Menüpunkt `Herde` aufrufen, können Sie sich davon überzeugen, ob alle Tiere erfolgreich übertragen wurden.

  ![Importierte Herde, Ansicht im VitalControl](../../vcsynchronizer/images/tierimport/herde.png "Importierte Tiere")
