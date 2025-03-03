---
title: Data synchronisation between VitalControl and Alma Pro
linkTitle: Synchronisation
date: 2023-08-04T12:32:41+02:00
draft: false
description: >
  Synchronise the animals stored on VitalControl device with animals registered on the automatic feeder and transfer measured values recorded with VitalControl device to the feeder for evaluation purposes and better visualisation.
weight: 20
categories: [Data exchange, Alma Pro]
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

To carry out synchronisation between the Alma Pro automatic feeder and the VitalControl device, proceed as follows:

## Open USB port

1. Use a small screwdriver to loosen the locking screw on the flap of the USB port and fold it down:

    <figure class="figure" style="margin-top: 10px;">
        <a name="open-usb-slot"><img src="/images/synchronisation/open-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom"     alt="Open USB port" title="Open USB port" /></a>
        <figcaption class="figure-caption fs-6">Figure 1: Open USB port</figcaption>
    </figure>

## Connect VitalControl

2. Switch on the VitalControl device by pressing the top centre `On/Off` button &nbsp;<img src="/icons/footer/on-off.svg" width="18" align="bottom" alt="On/Off button" />.

2. Connect the USB-C socket of the VitalControl device using the USB cable supplied <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Circled digit 1" title="Digit 1" /> with the USB-A socket of the touchscreen <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Circled digit 2" title="Digit 2" />.

    <figure class="figure" style="margin-top: 10px;">
        <a name="connect-vc-ap"><img src="/images/synchronisation/connect-vitalcontrol-alma_pro.svg" width="1024" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Connect VitalControl to Alma Pro" title="Connection VitalControl Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figure 2: Connecting VitalControl to Alma Pro</figcaption>
    </figure>

### Start synchronization

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
    </svg>
    <div>
        <span class="text-primary fs-3 fw-semibold">Attention</span><br>
        In order to start the synchronization of the VitalControl device, you must be logged on to the machine in the user role <span style="font-family: monospace; font-size: 90%;">Site Manager</span>. Otherwise, the <span style="font-family: monospace; font-size: 90%;">Synchronize</span> button in the <a href="#synchronize-vc-ap" >Synchronization menu</a> is disabled.
    </div>
</div>

4. In the left side bar of the touch terminal, click the second button from the top <img src="/icons/feeder.svg" width="25" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> `Feeder` <img src="/digits/1_negative_circled.svg" width="25" align="middle" alt="Digit 1" title="Digit 1" />. If you are in the main menu where no sidebar is visible, press the button &nbsp;<img src="/icons/feeder.svg" width="20" align="bottom" alt="Alma Pro: Feeder menu" title="Feeder menu"/> &nbsp;<span style="font-family: monospace; font-size: 90%;">Feeder</span> to open the feeder menu.

1. In the right sidebar of the touchscreen terminal, below the symbol(s) for the connected feeder(s), the symbol <img src="/digits/2_negative_circled.svg" width="25" align="middle" alt="Digit 2 in circle" title="Digit 2" /> <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> for the `VitalControl` device is now displayed. Click on this symbol.

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="70px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If the symbol <img src="/icons/device.svg" width="25" align="bottom" alt="VitalControl device" title="VitalControl"/> for the <span style="font-family: monospace; font-size: 90%;">VitalControl</span> device in the right sidebar <span style="font-weight: bold;">not</span> displayed, the device is still deactivated in the settings. In this case, follow the instructions for one-time <a href="../configuration" >activation</a> of the device.
        </div>
    </div>

1. The synchronization screen will now appear. Click on the button <img src="/digits/3_negative_circled.svg" width="25" align="middle" alt="circled number 3" title="number 3" /> `Synchronize` in the middle at the bottom to start synchronization with the VitalControl device.

    <figure class="figure" style="margin-top: 10px;">
        <a name="synchronize-vc-ap"><img src="../images/synchronize-vitalcontrol-alma-pro.png" width="1024" class="border border-2 figure-img img-fluid rounded p-3" align="bottom" alt="Synchronization VitalControl with Alma Pro" title="Synchronization VitalControl - Alma Pro" /></a>
        <figcaption class="figure-caption fs-6">Figure 3: Synchronization of VitalControl with Alma Pro automatic feeder</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
            <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Attention</span><br>
            If many animals need to be transferred, synchronization can take some time. You can see the synchronization progress on the display of the VitalControl device.<br>
            <figure class="figure" style="margin-top: 25px;">
            <a name="close-usb-slot-mandatory"><img src="../../vcsynchronizer/images/import-animals/data-transfer.png" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Synchronization VitalControl Alma Pro, progress indicator" title="Synchronization progress" /></a>
                <figcaption class="figure-caption fs-6">Figure 4: Synchronization VitalControl Alma Pro, progress indicator</figcaption>
            </figure>
        </div>
    </div>

## Close USB port

7. After successful synchronization, unplug the USB cable from the USB port on the touchscreen. Fold the protective cover of the port back up and secure it by tightening the locking screw using a small screwdriver.

    <figure class="figure" style="margin-top: 10px;">
        <a name="close-usb-slot"><img src="/images/synchronisation/close-usb-slot.svg" width="600" class="border border-3 figure-img img-fluid rounded p-4" align="bottom" alt="Close USB port" title="Close USB port" /></a>
        <figcaption class="figure-caption fs-6">Figure 5: Close USB port again</figcaption>
    </figure>

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" fill="#810012" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3" viewBox="0 0 16 16" role="img" aria-label="Info:">
        <use xlink:href="#info-fill"/>
        </svg>
        <div>
            <span class="text-primary fs-3 fw-semibold">Note</span><br>
            Make sure to close the flap of the USB port after each synchronization to prevent moisture from entering the port and to protect the port from the corrosive air present in your barn!<br>
            <figure class="figure" style="margin-top: 25px;">
                <a name="close-usb-slot-mandatory"><img src="/images/synchronisation/info-close-usb-mandatory.svg" width="840" class="bg-body border border-primary border-2 figure-img img-fluid rounded p-4" align="bottom" alt="Mandatory closing of USB port" title="Mandatory closing of USB port" /></a>
                <figcaption class="figure-caption fs-6">Figure 6: Mandatory closing of USB port</figcaption>
            </figure>
        </div>
    </div>
