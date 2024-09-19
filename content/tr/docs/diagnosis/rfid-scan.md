---
title: "RFID tarama: transponderların menzil testi ve teşhisi"
linkTitle: RFID tarama
date: 2023-08-07T10:09:46+02:00
draft: false
Kategoriler: [Teşhis, RFID Tarama]
description: >
  RFID tarayıcınızın menzilini kontrol edin veya okuma protokolünü ve bilinmeyen transponderlarda saklanan numaraları gösterin.
translationKey: diagnosis/rfid-scan
weight: 20
---

'Range test' menüsünü kullanarak VitalControl cihazınızın elinizdeki transponderları okuyup okuyamayacağını belirleyebilirsiniz. Uyumluluğu kontrol etmenin yanı sıra, bu transponderların kullandığı iletim protokolünü de kolayca belirleyebilir ve transponderda saklanan numarayı görüntüleyebilirsiniz.

## Menzil testi yapma {#perform-range-test}

1. VitalControl cihazınızın ana ekranında &nbsp;<img src="/icons/device.svg" width="23" align="bottom" alt="Device" /> `{{<T "Device" >}}` menü öğesini açın.

1. `{{<T "Service" >}}` alt menüsünü çağırın, `{{<T "RangeTest" >}}` menü öğesini seçin ve `{{<T "Ok" >}}` ile onaylayın. Şimdi animasyonlu bir tarama ekranı görüntülenir.

    ![VitalControl: Menü yolu Menzil testi RFID tarayıcı](../images/rangetest.png "Menzil testi RFID tarayıcı")

1.  Transponderınızı VitalControl cihazının okuma başlığına yavaşça yaklaştırın. İyi bir okuma sonucu elde etmek için, transponder VitalControl cihazının okuma başlığına yatay olarak hizalanmalıdır.

    ![ VitalControl: transponderı RFID okuma başlığına doğru şekilde yaklaştırma](/images/diagnosis/transponderscan.svg "Doğru transponder taraması")

1. RFID tarayıcı transponderı algılar algılamaz, bir titreşim alarmı tetiklenir ve ekranda görüntülenen transponder resminin arka plan rengi yeşile döner:

   ![VitalControl: Menzil testi: Transponder algılandı](../images/transponder-detected.png "Transponder algılandı")

1. Transponderı okuma alanının sınırında birkaç kez ileri geri hareket ettirin. Bu şekilde, kullandığınız transponderlarla birlikte RFID tarayıcının okuma menzilini belirleyebilirsiniz.

## Transponder kontrolü {#transponder-check}

Yukarıda açıklanan menzil testini gerçekleştirerek, farklı kökenlerden gelen transponderlar hakkında da bilgi edinebilirsiniz:

### Resmi transponder kulak küpeleri {#official-transponder-ear-tags}

1. Hayvanlarınız için resmi olarak atanmış 15 haneli kulak küpe numarasının kodlandığı transponder kulak küpeleri kullanıyorsanız, transponder okunduktan sonra ekranda aşağıdaki bilgiler görüntülenir:

    - Ulusal hayvan kimlik hizmetiniz tarafından hayvanınıza resmi olarak atanan 15 haneli kimlik numarası.
    - İşletmenin bulunduğu ülke
    - İşletmenin bulunduğu ülke (sadece Alman çiftlikleri için)
    - Kullanılan iletim protokolü (FDX veya HDX)
    <br>

    ![VitalControl: transponder kulak küpesinin kontrolü](../images/transponder-official.png "Resmi transponder kulak küpesi bilgisi")

### Üçüncü taraf satıcılardan transponderlar {#transponders-from-third-party-vendors}

1. Hayvanlarınızın elektronik kimliklendirilmesi için Urban gibi üçüncü taraf tedarikçilerden transponderlar kullanıyorsanız, transponder okunduktan sonra ekranda aşağıdaki bilgiler görüntülenir:

    - Transponderda kodlanmış kimlik, rakam sayısı üreticiye bağlı olarak değişir
    - Transponderın üreticisi (transponderda saklanmışsa)
    - Kullanılan iletim protokolü (FDX veya HDX)
    <br>

    ![VitalControl: üreticiden transponder kontrolü](../images/transponder-manufacturer.png "Üreticiden transponder bilgisi")
