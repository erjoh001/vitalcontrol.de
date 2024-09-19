---
title: "Ryhmän ostettujen eläinten massarekisteröinti"
linkTitle: "Uoukkotallennus"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Käytä viivakoodinlukijaa erilaisten eläinten rekisteröimiseen.
luokat: [Uoukkotallennus]
tagit: [Uoukkotallennus]
translationKey: new/Uoukkotallennus
---
## Uoukkotallennus {#bulk-recording}

Massarekisteröinnin avulla voit tallentaa suuren määrän eläimiä lyhyessä ajassa laitteeseesi. Käytä viivakoodinlukijaa skannataksesi korvamerkkien numerot ja syntymäajat nautojen passeista. Eläin tallennetaan automaattisesti ja voit skannata seuraavan passin heti. Toimi seuraavasti suorittaaksesi eläinten massarekisteröinnin:

1. Yhdistä viivakoodinlukija VitalControl-laitteeseen kaapelilla.

2. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Uusi eläin" /> `{{<T "New" >}}` ja paina `{{<T "Ok" >}}`-nappia.

3. Alivalikko avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Uoukkotallennus" /> `{{<T "BulkRecording" >}}` ja vahvista `{{<T "Ok" >}}`-näppäimellä.

4. Toinen alivalikko avautuu, jossa on yksi kenttä eläimen korvamerkin numerolle ja toinen kenttä eläimen syntymäajalle. Skannaa ensin korvamerkin numero. Kentän reunus vaihtuu punaisesta vihreäksi. Skannaa sitten syntymäaika. Reunus muuttuu hetkellisesti vihreäksi ennen kuin molemmat reunukset näkyvät jälleen punaisina. Laskuri passikuvakkeen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Eläinpassit" title="Eläinpassit" /> alla ruudun yläosassa kasvaa 0:sta 1:een. Ensimmäinen eläin on tallennettu. Jatka ja skannaa muut naudan passit. Jokaisen skannatun passin jälkeen passikuvakkeen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Eläinpassit" title="Eläinpassit" /> alla oleva laskuri kasvaa yhdellä. Lauman kuvakkeen <img src="/icons/header/group.svg" width="35" align="bottom" alt="Eläinryhmä"  title="Eläinryhmä" /> alla oleva laskuri kasvaa myös yhdellä.

{{% alert title="Vihje" %}}
Passikuvakkeen alla oleva laskuri <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> näyttää, kuinka monta passia olet skannannut kerralla poistumatta `{{<T "BulkRecording" >}}` -näytöltä. Lauman kuvakkeen alla oleva laskuri <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> näyttää, kuinka monta passia olet yhteensä skannannut. Tämä laskuri ei nollaudu, jos poistut `{{<T "BulkRecording" >}}` -näytöltä. Numero vastaa kirjauksiasi valikossa ['Ostot'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Valikko 'Uusi - Bulk recording'](../images/bulk-recording.png "Bulk recording")

{{% alert title="Vihje" %}}
Sinulla on lisää asetusvaihtoehtoja `{{<T "BulkRecording" >}}` -valikossa. Nämä selitetään alla. Valmistautumisvaiheina, käy ensin `{{<T "BulkRecording" >}}` -valikossa ja toimi ohjeiden mukaisesti.
{{% /alert %}}

{{% alert title="Vihje" %}}
Skannausprosessin aikana voi ilmetä virheilmoituksia. Tällöin viivakoodinlukija antaa äänimerkin, eikä skannaaminen ole mahdollista. Hyväksy vastaava virheilmoitus VitalControl-näytöllä ja jatka skannausta.
{{% /alert %}}

### Syntymäaika pakollinen {#birth-date-mandatory}

Tällä asetusvaihtoehdolla voit määrittää, onko eläintä luotaessa ilmoitettava syntymäaika. Jos poistat tämän toiminnon käytöstä, sinun tarvitsee vain skannata viivakoodi tallentaaksesi eläimen. Näille eläimille tallennetaan kuitenkin nykyinen päivämäärä syntymäajankohdaksi! Tämä toiminto on oletusarvoisesti käytössä. Poistaaksesi sen käytöstä, tee seuraavasti:

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` -painiketta avataksesi asetusvalikon.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi asetusvaihtoehdon `{{<T "BirthDateMandatory" >}}` ja vahvista `{{<T "Ok" >}}`.

3. Keltainen ympyrä symboloi, että toiminto on aktivoitu. Harmaa ympyrä symboloi, että toiminto on deaktivoitu.

4. Tallenna asetukset ja käytä `F1` -näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> palataksesi valikkoon <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `{{<T "BulkRecording" >}}`.

![VitalControl: Menu Uusi Syntymäaika pakollinen](../images/birthdate.png "Syntymäaika pakollinen")

### Oletusarvot {#default-values}

`{{<T "DefaultValues" >}}`-asetusvalikossa asetat standardit, jotka koskevat jokaista luomaasi eläintä. Viivakoodinlukijalla luomisprosessi pysyy muuttumattomana kuten yllä kuvattu. Voit asettaa eläimen tyypin, sukupuolen, rodun ja olinpaikan. Asettaaksesi `{{<T "DefaultValues" >}}`, toimi seuraavasti:

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetusvalikko" /> `On/Off`-painiketta avataksesi asetusvalikon.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohteen `{{<T "DefaultValues" >}}` ja vahvista `{{<T "Ok" >}}`.

3. Alivalikko avautuu eri asetusvaihtoehtoineen. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi asetusvaihtoehdon. Käytä nuolinäppäimiä ◁ ▷ valitaksesi haluamasi asetuksen.

4. Tallenna asetukset ja käytä `F1`-näppäintä&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" /> palataksesi valikkokohtaan <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Erärekisteröinti" />&nbsp; `{{<T "BulkRecording" >}}`.

   ![VitalControl: Menu Uusi Oletusarvot](../images/defaultvalues.png "Oletusarvot")

### Tallennetut arvot {#recorded-values}

`{{<T "RecordedValues" >}}`-asetusvalikossa voit määrittää, mitkä arvot tulee tallentaa korvamerkin numeron ja syntymäajan lisäksi. Voit valita `{{<T "Breed" >}}`, `{{<T "Sex" >}}`, `{{<T "Whereabouts" >}}`, `{{<T "CurrentWeight" >}}`, `{{<T "BirthWeight" >}}` ja `{{<T "TypeAnimal" >}}` välillä. Heti kun asetat ainakin yhden arvon, prosessi muuttuu skannauksen aikana. Skannaa ensin korvamerkin numero ja syntymäaika. Käytä sitten suuntanäppäimiä △ ▽ valitaksesi asetettavat arvot ja aseta arvot. Tallenna sitten tietosi `F3`-näppäimellä. Vasta sitten eläin luodaan! Asettaaksesi tallennettavat arvot, toimi seuraavasti:

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetusvalikko" /> `On/Off`-painiketta avataksesi asetusvalikon.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohteen `{{<T "RecordedValues" >}}` ja vahvista `{{<T "Ok" >}}`.

3. Valitse tallennettava arvo nuolinäppäimillä △ ▽ ja vahvista painamalla `{{<T "Ok" >}}`. Keltainen ympyrä ilmestyy. Jos haluat poistaa tallennettavan arvon käytöstä, vahvista uudelleen painamalla `{{<T "Ok" >}}`. Keltainen ympyrä katoaa.

4. Tallenna asetukset ja palaa valikkokohtaan käyttämällä `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" /> `{{<T "BulkRecording" >}}` <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Erärekisteröinti" />&nbsp;.

5. Jos haluat poistaa kaikki tallennettavat arvot käytöstä uudelleen, valitse valikkokohdasta `{{<T "RecordedValues" >}}` asetusvaihtoehto `{{<T "RecordedValues" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

   ![VitalControl: Valikko Uudet tallennusarvot](../images/recordvalues.png "Tallenna arvot")
