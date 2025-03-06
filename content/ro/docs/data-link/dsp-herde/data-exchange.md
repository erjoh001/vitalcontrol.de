---
title: Schimb de date între VitalControl și software-ul de gestionare a turmei Herde
linkTitle: Schimb de date
date: 2023-08-04T12:22:12+02:00
draft: false
description: >
  Sincronizați animalele stocate pe dispozitivul VitalControl cu animalele gestionate de software-ul *Herde* și transferați valorile măsurate înregistrate cu dispozitivul VitalControl în software-ul *Herde*.
weight: 20
categorii: [Schimb de date, DSP Herde]
translationKey: DSPherde/data-exchange
---
Urmați pașii de mai jos pentru a sincroniza datele între software-ul `Herde` și dispozitivul VitalControl:

### Conectați VitalControl la PC {#connect-vitalcontrol-to-pc}

1. Conectați dispozitivul VitalControl la computerul sau laptopul dvs. prin cablul USB furnizat.

   ![Conectați VitalControl la PC sau laptop](/images/synchronisation/connect-to-pc.svg "Conectați VitalControl la PC")

1. Asigurați-vă că dispozitivul VitalControl este pornit.

### Efectuați schimbul de date {#perform-data-exchange}

1. În cadrul software-ului `Herde`, efectuați un schimb complet de date. În funcție de configurația interfeței dvs. de utilizator, puteți invoca acest schimb prin elementul de meniu `Schimb complet de date` din meniul principal (elementul de nivel superior _Tehnologie_), în meniul din bara laterală sau în trusa dvs. personalizată de instrumente (orizontală sau verticală).

   ![Software Herde: Inițierea unui schimb complet de date](../screenshots/data-exchange.png "Herde: Inițierea schimbului de date")

1. Se deschide un pop-up, listând cuplările tehnologice stipulate în bara laterală din stânga. Faceți clic pe butonul etichetat `VitalControl` pentru a începe schimbul de date:

   ![Software Herde, Începerea schimbului de date](../screenshots/start-transfer.png "Herde: Începerea schimbului de date")

1. La primul schimb de date apare un avertisment, indicând că nu există încă animale înregistrate pe dispozitivul VitalControl. Confirmați această notificare cu `Da`. Schimbul de date este apoi început.

   ![Software Herde, schimb de date: avertisment](../screenshots/warning.png "Schimb de date: avertisment")

1. Schimbul de date este un proces în două etape: În prima etapă <span style="font-size: 140%">➊</span> datele despre animale sunt transferate din software-ul `Herde` în VitalControl. În a doua etapă <span style="font-size: 140%">➋</span>, datele de măsurare colectate cu VitalControl sunt transferate în software-ul `Herde`. Numărul de seturi de date importate (animale, fătări, alerte și greutăți) este listat în pop-up:

![Schimb de date cu software-ul Herde: Cursul acțiunilor](../screenshots/data-transfer.png "Schimb de date: Cursul acțiunilor")

1. Finalizarea cu succes a schimbului de date este semnalată printr-un pop-up cu un mesaj de succes.

   ![Software Herde: Mesaj de succes schimb de date](../screenshots/success-message.png "Herde: Mesaj de succes schimb de date")

    {{% alert title="Atenție" %}}
Dacă multe animale sunt înregistrate pe dispozitivul VitalControl, schimbul de date poate dura ceva timp. Progresul transferului de date poate fi văzut pe afișajul dispozitivului.

![VitalControl, schimb de date: bara de progres](../../vcsynchronizer/images/import-animals/data-transfer.png "VitalControl: bara de progres schimb de date")
    {{% /alert %}}
