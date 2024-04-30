---
title: "Teknologian VitalControl asetukset:"
linkTitle: Asetukset
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Määritä synkronointiparametrit tiedonvaihtoon *Herde*-ohjelmiston ja VitalControl-laitteen välillä.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Ennen ensimmäistä [tiedonvaihtoa](../data-exchange/), teknologian kytkentä VitalControl-laitteeseen on luotava ja asetettava kerran.

{{% alert title="Huomio" %}}
Ennen teknologian kytkennän asettamista, tarkista onko 'VCSynchronizer' ohjelmisto asennettu tietokoneellesi; tämä ohjelmisto on välttämätön tiedonvaihtoon. Tee tämä avaamalla Windowsin Käynnistä-valikko ja etsimällä sovelluslistastasi nimellä 'Urban VitalControl'. Jos et löydä kyseistä merkintää, [asenna](../../vcsynchronizer/installation/) `VCSynchronizer` ohjelmisto tietokoneellesi.
{{% /alert %}}

Tehdäksesi teknologian asetukset, toimi seuraavasti:

## Luo uusi parametrisetti tiedonvaihtoon VitalControl-laitteen kanssa

1. Avaa ohjelmassa `Herde` `Asetukset`-ikkuna. Käyttöliittymäsi konfiguraatiosta riippuen voit avata tämän ikkunan päävalikon kohdasta `Organisaatio` (ylätason kohta _Asetukset_), sivupalkin valikosta tai mukautetusta työkalupakistasi (vaaka- tai pystysuora).

   ![Ohjelmisto Herde: asetusvalikon käynnistys](../screenshots/settings.png "Herde: kutsu Asetukset")

1. Ponnahdusikkuna `Asetukset` avautuu, jonka vasemmassa sivupalkissa on lueteltu lukuisia asetuskategorioita. Avaa kategoria `Palvelu` ➊ ja valitse alakategoria `Teknologia` ➋.

1. Oikean pääalueen ylälaidassa ilmestyy nyt pudotusvalikko, jossa on lueteltu kaikki määritellyt teknologiaparametrisetit. Asetettujen teknologioiden määrä näkyy oikealla. Napsauta painiketta ![Ohjelmisto Herde: Luo uusi teknologiaparametrisetti](/icons/new.png "Herde: Luo Teknologiakytkentä") `Luo uusi teknologiaparametrisetti` ➌.

   ![Ohjelmisto Herde: teknologia-asetusten näyttö](../screenshots/settings-technology.png "Herde: Teknologia-asetukset")

1. Toinen ponnahdusikkuna avautuu. Kirjoita **Yhteyden nimi**-kohtaan `VitalControl` ja **Teknologian tyyppi**-kohtaan `Urban VitalControl (Gen 2)` ja sitten klikkaa `Hyväksy`-painiketta.

   ![Software Herde: Luo uusi parametrisetti VitalControl-laitteelle](../screenshots/new-technology.png "Luo uusi teknologia: VitalControl").

   Parametrisetti teknologialle `VitalControl` on nyt luotu ja se on määritettävä seuraavissa vaiheissa.

## Konfigurointi: Perusasetukset

Aluksi välilehti `Perusasetukset` on valittuna näytöllä, kuten alla olevasta kuvasta näkyy. Tee siellä säädöt kategorioissa `Ulkoinen ohjelma` ➊, `Eläintiedot` ➋, `Sijainnit` ➌ ja `Poistuminen` ➍ farmikohtaisten olosuhteidesi mukaan.

   ![Software Herde: Perusasetusten konfigurointi](../screenshots/basic-settings.png "Teknologia VitalControl: Perusasetukset").
   
### Kategoria `Ulkoinen ohjelma` ➊

Jotta VitalControl ja Herde Plus välillä voidaan suorittaa tiedonvaihto, tarvitaan ulkoinen apuohjelma [VitalControl Synchronizer](../../vcsynchronizer). Tämän ohjelman oikean toiminnan varmistamiseksi joitakin säätöjä on tehtävä kategoriassa `Ulkoinen ohjelma` ➊.

- **Laitteen nimi tiedonvaihtoon**:  
  Oletusarvoisesti tämä kenttä on tyhjä. On kuitenkin suositeltavaa kirjoittaa tähän tietokoneesi nimi. Tee tämä painamalla kuvaketta ![Herde Software: Luo uusi teknologiakytkentä](/icons/arrow-down.png "Herde: Luo teknologiakytkentä") `Nuoli alas` pudotusvalikon oikeassa päässä. Tietokoneesi nimi määritetään nyt ja näytetään valittavaksi pudotusvalikossa. Kun kenttä on täytetty tietokoneesi nimellä ja tämä asetus on tallennettu, tiedonsiirto voidaan tästä lähtien laukaista vain tietokoneeltasi.

- **Suorita polussa**:
  Anna tähän syöttökenttään `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer`. Tämä on absoluuttinen polku ohjelmaan `VitalControl Synchronizer` (tai tarkemmin tiedostoon `vcsynchronizer.exe`). Jos tämän ohjelman kohdekansio on muutettu [VCSynchronizerin asennuksen](../../vcsynchronizer/installation) aikana, kirjoita tähän valittu kohdekansio.

- **Ohjelma HerdePlus 🡒 Teknologia**:  
  Tähän syöttökenttään tulee täyttää arvo `vc_imp.bat`. Vastaavanniminen eräajotiedosto määrittelee toimenpiteiden järjestyksen tiedon tuonnin aikana.

- **Teknologia 🡒 Ohjelma HerdePlus**:  
  Tähän syöttökenttään tulee täyttää arvo `vc_exp.bat`. Vastaavanniminen eräajotiedosto määrittelee toimenpiteiden järjestyksen tiedon viennin aikana.

### Kategoria `Eläintiedot` ➋

Lisäsäätöjä on tehtävä 'Eläintiedot' -kategoriassa ➋, jotta tiedonvaihto toimisi täysin.

- **Eläimen numero**:  
  Tämä asetus määrittää, minkä ID:n eläimet saavat näytölle VitalControl-laitteessa:
  - Jos olet antanut eläimillesi lyhyet ID:t (`Navettanro.`, 2–6 numeroa), sinun tulee valita tässä arvo 'Navettanumero': eläimen näytöllä näkyvä ID vastaa tällöin eläimelle annettua navettanumeroa.
  - Jos et ole antanut eläimillesi lyhyitä ID-numeroita - tämä on yleistä esimerkiksi lihotussektorilla - sinun tulee valita tässä arvo `Tunnistenro. (5 numeroa)`. VitalControl-laitteen näytöllä näkyvä eläimen ID vastaa tällöin eläimen keltaiseen korvamerkkiin painetun ID:n viimeisiä viisi numeroa.
  
<br>

- **Lähetysnumero**:  
  Tämä asetus määrittää odotetun numeron eläimelle RFID-skannauksen aikana:  
  - Jos laitat eläimillesi kaulapannan, jossa on transponderi, tai korvatransponderin eläimillesi - esimerkiksi tunnistamiseen automaattisessa ruokintalaitteessa -, sinun tulee valita tässä arvo 'Transponderi'.
  - Jos eläimesi tai vasikat kantavat virallisia kansallisia 15-numeroisia tunnistenumeroita sisältäviä elektronisia korvamerkkejä, jotka toimivat eläimen tunnistamisessa koko sen elämän ajan, sinun tulee valita tässä arvo 'Tunnistenro. (15 numeroa)`.

<br>

- **Minimi-ikä siirrolle**:  
  Jos tähän syöttökenttään syötetään arvo `0`, **kaikki eläimet** siirretään VitalControl-laitteeseen, iästä riippumatta. Arvo suurempi kuin `0` määrittelee minimi-iän (päivinä) siirrettäville eläimille. Esimerkiksi, jos **vain lehmät** halutaan siirtää laitteeseen, tulee tähän syöttää minimi-ikä 600 päivää (= 20 kuukautta).

### Kategoria `Sijainnit` ➌

Käytä tätä kategoriaa poistaaksesi tietyt eläimet tiedonsiirrosta laitteelle tietyissä sijainneissa. Poista valinta sijainneista, joista **et** halua siirtää siellä olevia eläimiä laitteelle.

### Kategoria `Lähtevät` ➍

Valitse tässä 'Lähtee HERDEplus'ssa' -vaihtoehto. Näin määrität, että laumasta lähteneet eläimet poistetaan myös VitalControl-laitteesta synkronoinnin aikana.
Valitse myös 'Ei ole varastossa' -vaihtoehto. Näin määrität, että VitalControl-laitteessa olevat, mutta `Herde`-ohjelmistolle tuntemattomat eläimet poistetaan VitalControl-laitteesta synkronoinnin aikana.

## Asetukset: Teknologiaspesifiset asetukset

Seuraavaksi napsauta `Teknologiaspesifiset asetukset` -välilehteä määrittääksesi tiedonvaihdon laajuuden. On suositeltavaa valita kaikki siellä luetellut valintaruudut lukuun ottamatta `Tallenna tuontitiedosto käsittelyn jälkeen` -valintaruutua. Jälkimmäinen valintaruutu on tarkoitettu diagnostisiin tarkoituksiin ja se tulisi valita vain, jos huoltohenkilöstö sitä vaatii.

- **Maksimi-ikä siirrolle**:  
  Jos tähän syötetään arvo `0`, **kaikki eläimet** siirretään VitalControl-laitteelle, iästä riippumatta. Arvo suurempi kuin `0` määrittää eläinten siirrettävän maksimi-iän (päivinä). Jos esimerkiksi **vain vasikat** halutaan siirtää laitteelle, tulee tähän syöttää maksimi-ikä 90 päivää (= 3 kuukautta).

   ![Herde Software: Asetusten määrittely Tiedonvaihto](../screenshots/technology-specific-settings.png "Tiedonvaihto: spesifiset asetukset").

## Tallenna tiedonvaihtoasetukset

Paina `Tallenna (F2)` -näppäintä, kun olet määrittänyt kaikki asetusparametrit asianmukaisesti. Tiedonvaihtoa varten VitalControl-laitteelle asetettu parametrisarja on nyt tallennettu ja valmis käytettäväksi.  
Suorita nyt [tiedonvaihto](../data-exchange/) tarkistaaksesi, ovatko määritellyt asetukset kelvollisia, jotta voit onnistuneesti vaihtaa tietoja VitalControl-laitteen kanssa ja sieltä pois.
