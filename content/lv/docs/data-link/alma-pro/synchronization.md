---
title: Datu sinhronizācija starp VitalControl un Alma Pro
linkTitle: Sinhronizācija
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Sinhronizējiet dzīvniekus, kas saglabāti VitalControl ierīcē, ar dzīvniekiem, kas reģistrēti automātiskajā barotavā, un pārsūtiet mērījumu vērtības, kas ierakstītas ar VitalControl ierīci, uz barotavu novērtēšanas nolūkos un labākai vizualizācijai.
weight: 20
categories: [Datu apmaiņa, Alma Pro]
translationKey: alma-pro/synchronization
---
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

Lai veiktu sinhronizāciju starp Alma Pro automātisko barotavu un VitalControl ierīci, rīkojieties šādi:

## Atveriet USB portu

1. Izmantojiet mazu skrūvgriezi, lai atskrūvētu bloķēšanas skrūvi uz USB porta vāciņa un nolaidiet to:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Atveriet USB portu" title="Atveriet USB portu" /></a>
        <figcaption class="figure-caption fs-6">1. attēls: Atveriet USB portu</figcaption>
    </figure>

## Pievienojiet VitalControl

2. Ieslēdziet VitalControl ierīci, nospiežot augšējo centrālo `On/Off` pogu &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off poga" />.

2. Savienojiet VitalControl ierīces USB-C ligzdu, izmantojot piegādāto USB kabeli <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> ar skārienekrāna USB-A ligzdu <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

<figure class="figure" style="margin-top: 10px;">
    <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
    <figcaption class="figure-caption fs-6">2. attēls: VitalControl savienošana ar Alma Pro</figcaption>
</figure>

### Sākt sinhronizāciju

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Lai sāktu VitalControl ierīces sinhronizāciju, jums jābūt pieslēgtam pie iekārtas lietotāja lomā <span style="font-family: monospace; font-size: 90%;">Site Manager</span>. Pretējā gadījumā <span style="font-family: monospace; font-size: 90%;">Synchronize</span> poga <a href="#synchronize-vc-ap" >Sinhronizācijas izvēlnē</a> ir atspējota.
    </div>
</div>

4. Skārienekrāna termināļa kreisajā sānjoslā noklikšķiniet uz otrās pogas no augšas <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `Feeder` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. Ja atrodaties galvenajā izvēlnē, kur sānjosla nav redzama, nospiediet pogu &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">Feeder</span>, lai atvērtu feeder izvēlni.

1. Skārienjutīgā termināļa labajā sānjoslā, zem pievienotā padevēja simboliem, tagad tiek parādīts simbols <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> ierīcei `VitalControl`. Noklikšķiniet uz šī simbola.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
            Ja simbols <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> ierīcei <span style="font-family: monospace; font-size: 90%;">VitalControl</span> labajā sānjoslā <span style="font-weight: bold;">nav</span> parādīts, ierīce joprojām ir deaktivizēta iestatījumos. Šajā gadījumā sekojiet norādījumiem par vienreizēju ierīces <a href="../configuration" >aktivizēšanu</a>.
        </div>
    </div>

1. Tagad parādīsies sinhronizācijas ekrāns. Noklikšķiniet uz pogas <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `Sinhronizēt` vidū apakšā, lai sāktu sinhronizāciju ar VitalControl ierīci.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronize-vc-ap"><img src="../images/synchronize-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronization VitalControl with Alma Pro" title="Synchronization VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">3. attēls: VitalControl sinhronizācija ar Alma Pro automātisko padevēju</figcaption>
    </figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Uzmanību</span><br>
        Ja nepieciešams pārvietot daudz dzīvnieku, sinhronizācija var aizņemt kādu laiku. Sinhronizācijas progresu var redzēt uz VitalControl ierīces displeja.<br>
        <figure class="figure" style="margin-top: 25px;">
        <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Sinhronizācija VitalControl Alma Pro, progresa indikators" title="Sinhronizācijas progress" /></a>
            <figcaption class="figure-caption fs-6">4. attēls: Sinhronizācija VitalControl Alma Pro, progresa indikators</figcaption>
        </figure>
    </div>
</div>

## Aizveriet USB portu

7. Pēc veiksmīgas sinhronizācijas atvienojiet USB kabeli no skārienekrāna USB porta. Salokiet porta aizsargvāciņu atpakaļ un nostipriniet to, pievelkot fiksācijas skrūvi ar mazu skrūvgriezi.

<figure class="figure" style="margin-top: 10px;">
    <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Aizveriet USB portu" title="Aizveriet USB portu" /></a>
    <figcaption class="figure-caption fs-6">5. attēls: Aizveriet USB portu atkal</figcaption>
</figure>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
    <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Piezīme</span><br>
        Pārliecinieties, ka pēc katras sinhronizācijas aizverat USB porta vāciņu, lai novērstu mitruma iekļūšanu portā un aizsargātu portu no korozīvā gaisa, kas atrodas jūsu kūtī!<br>
        <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Obligāta USB porta aizvēršana" title="Obligāta USB porta aizvēršana" /></a>
            <figcaption class="figure-caption fs-6">6. attēls: Obligāta USB porta aizvēršana</figcaption>
        </figure>
    </div>
</div>

Izskatās, ka jūs neesat ievietojis nekādu saturu. Lūdzu, ielīmējiet Markdown saturu, kuru vēlaties tulkot, un es palīdzēšu ar tulkojumu.
