---
title: "Ryhmän ostettujen eläinten massarekisteröinti"
linkTitle: "Uoukkotallennus"
date: 2023-07-28T13:25:28+02:00
weight: 15
draft: false
slug: bulk-recording
description: >
  Käytä viivakoodinlukijaa erilaisten eläinten rekisteröimiseen.
categories: [Uoukkotallennus]
tags: [Uoukkotallennus]
translationKey: new/Uoukkotallennus
---
## Uoukkotallennus {#bulk-recording}

Massarekisteröinnin avulla voit tallentaa suuren määrän eläimiä lyhyessä ajassa laitteeseesi. Käytä viivakoodinlukijaa skannataksesi korvamerkkien numerot ja syntymäajat nautojen passeista. Eläin tallennetaan automaattisesti ja voit skannata seuraavan passin heti. Toimi seuraavasti suorittaaksesi eläinten massarekisteröinnin:

1. Yhdistä viivakoodinlukija VitalControl-laitteeseen kaapelilla.

2. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/main/new-animal.svg" width="35" align="bottom" alt="Uusi eläin" /> `Uusi` ja paina `OK`-nappia.

3. Alivalikko avautuu. Käytä nuolinäppäimiä ◁ ▷ △ ▽ valitaksesi valikkokohdan <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Uoukkotallennus" /> `Uoukkotallennus` ja vahvista `OK`-näppäimellä.

4. Toinen alivalikko avautuu, jossa on yksi kenttä eläimen korvamerkin numerolle ja toinen kenttä eläimen syntymäajalle. Skannaa ensin korvamerkin numero. Kentän reunus vaihtuu punaisesta vihreäksi. Skannaa sitten syntymäaika. Reunus muuttuu hetkellisesti vihreäksi ennen kuin molemmat reunukset näkyvät jälleen punaisina. Laskuri passikuvakkeen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Eläinpassit" title="Eläinpassit" /> alla ruudun yläosassa kasvaa 0:sta 1:een. Ensimmäinen eläin on tallennettu. Jatka ja skannaa muut naudan passit. Jokaisen skannatun passin jälkeen passikuvakkeen <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Eläinpassit" title="Eläinpassit" /> alla oleva laskuri kasvaa yhdellä. Lauman kuvakkeen <img src="/icons/header/group.svg" width="35" align="bottom" alt="Eläinryhmä"  title="Eläinryhmä" /> alla oleva laskuri kasvaa myös yhdellä.

{{% alert title="Vihje" %}}
Passikuvakkeen alla oleva laskuri <img src="/icons/header/animal-passports.svg" width="25" align="bottom" alt="Animal passports" title="Animal passports" /> näyttää, kuinka monta passia olet skannannut kerralla poistumatta `Uoukkotallennus` -näytöltä. Lauman kuvakkeen alla oleva laskuri <img src="/icons/header/group.svg" width="35" align="bottom" alt="New animal" /> näyttää, kuinka monta passia olet yhteensä skannannut. Tämä laskuri ei nollaudu, jos poistut `Uoukkotallennus` -näytöltä. Numero vastaa kirjauksiasi valikossa ['Ostot'](../new-on-farm/purchased-animals/).
{{% /alert %}}

   ![VitalControl: Valikko 'Uusi - Bulk recording'](../images/bulk-recording.png "Bulk recording")

{{% alert title="Vihje" %}}
Sinulla on lisää asetusvaihtoehtoja `Uoukkotallennus` -valikossa. Nämä selitetään alla. Valmistautumisvaiheina, käy ensin `Uoukkotallennus` -valikossa ja toimi ohjeiden mukaisesti.
{{% /alert %}}

{{% alert title="Vihje" %}}
Skannausprosessin aikana voi ilmetä virheilmoituksia. Tällöin viivakoodinlukija antaa äänimerkin, eikä skannaaminen ole mahdollista. Hyväksy vastaava virheilmoitus VitalControl-näytöllä ja jatka skannausta.
{{% /alert %}}

### Syntymäaika pakollinen {#birth-date-mandatory}

Tällä asetusvaihtoehdolla voit määrittää, onko eläintä luotaessa ilmoitettava syntymäaika. Jos poistat tämän toiminnon käytöstä, sinun tarvitsee vain skannata viivakoodi tallentaaksesi eläimen. Näille eläimille tallennetaan kuitenkin nykyinen päivämäärä syntymäajankohdaksi! Tämä toiminto on oletusarvoisesti käytössä. Poistaaksesi sen käytöstä, tee seuraavasti:

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings menu" /> `On/Off` -painiketta avataksesi asetusvalikon.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi asetusvaihtoehdon `Syntymäaika pakollinen` ja vahvista `OK`.

3. Keltainen ympyrä symboloi, että toiminto on aktivoitu. Harmaa ympyrä symboloi, että toiminto on deaktivoitu.

4. Tallenna asetukset ja käytä `F1` -näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Save and return" /> palataksesi valikkoon <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Bulk recording" />&nbsp; `Uoukkotallennus`.

![VitalControl: Menu Uusi Syntymäaika pakollinen](../images/birthdate.png "Syntymäaika pakollinen")

### Oletusarvot {#default-values}

`Oletusarvot`-asetusvalikossa asetat standardit, jotka koskevat jokaista luomaasi eläintä. Viivakoodinlukijalla luomisprosessi pysyy muuttumattomana kuten yllä kuvattu. Voit asettaa eläimen tyypin, sukupuolen, rodun ja olinpaikan. Asettaaksesi `Oletusarvot`, toimi seuraavasti:

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetusvalikko" /> `Päälle/Pois`-painiketta avataksesi asetusvalikon.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohteen `Oletusarvot` ja vahvista `OK`.

3. Alivalikko avautuu eri asetusvaihtoehtoineen. Käytä nuolinäppäimiä △ ▽ valitaksesi haluamasi asetusvaihtoehdon. Käytä nuolinäppäimiä ◁ ▷ valitaksesi haluamasi asetuksen.

4. Tallenna asetukset ja käytä `F1`-näppäintä&nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" /> palataksesi valikkokohtaan <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Erärekisteröinti" />&nbsp; `Uoukkotallennus`.

   ![VitalControl: Menu Uusi Oletusarvot](../images/defaultvalues.png "Oletusarvot")

### Tallennetut arvot {#recorded-values}

`Tallennetut arvot`-asetusvalikossa voit määrittää, mitkä arvot tulee tallentaa korvamerkin numeron ja syntymäajan lisäksi. Voit valita `Rotu`, `Sukupuoli`, `Olinpaikka`, `Nykyisen painon`, `Syntymäpainon` ja `Eläinlaji` välillä. Heti kun asetat ainakin yhden arvon, prosessi muuttuu skannauksen aikana. Skannaa ensin korvamerkin numero ja syntymäaika. Käytä sitten suuntanäppäimiä △ ▽ valitaksesi asetettavat arvot ja aseta arvot. Tallenna sitten tietosi `F3`-näppäimellä. Vasta sitten eläin luodaan! Asettaaksesi tallennettavat arvot, toimi seuraavasti:

1. Käytä <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetusvalikko" /> `Päälle/Pois`-painiketta avataksesi asetusvalikon.

2. Käytä nuolinäppäimiä △ ▽ valitaksesi valikkokohteen `Tallennetut arvot` ja vahvista `OK`.

3. Valitse tallennettava arvo nuolinäppäimillä △ ▽ ja vahvista painamalla `OK`. Keltainen ympyrä ilmestyy. Jos haluat poistaa tallennettavan arvon käytöstä, vahvista uudelleen painamalla `OK`. Keltainen ympyrä katoaa.

4. Tallenna asetukset ja palaa valikkokohtaan käyttämällä `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" /> `Erärekisteröinti` <img src="/icons/main/barcode-scan.svg" width="35" align="bottom" alt="Erärekisteröinti" />&nbsp;.

5. Jos haluat poistaa kaikki tallennettavat arvot käytöstä uudelleen, valitse valikkokohdasta `Tallennetut arvot` asetusvaihtoehto `Poista kaikki arvot käytöstä` ja vahvista painamalla `OK`.

   ![VitalControl: Valikko Uudet tallennusarvot](../images/recordvalues.png "Tallenna arvot")
