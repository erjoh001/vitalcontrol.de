---
title: "Rekisteröinti"
linkTitle: "Rekisteröinti"
date: 2023-07-28T13:25:28+02:00
weight: 60
draft: false
slug: animal-registration
description: >
  Täällä voit mukauttaa useita tehdasasetuksia uusien eläinten rekisteröinnin vaatimuksiin tilallasi.
luokat: [asetukset]
tagit: [asetukset, Oletusarvot]
translationKey: settings/new-animals
---
## Aseta oletusarvot {#set-default-values}
### Aseta tallennettu paino {#set-recorded-weights}

Tässä määrität, mikä paino tallennetaan ja säilytetään luotaessa uusia eläimiä tilallasi. Tallennetun painon asettamiseksi laitteellasi toimi seuraavasti.

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit vaihtaa asetusalueiden välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}` käyttämällä nuolinäppäimiä △ ▽. Valitse `{{<T "DefaultValues" >}}` ja vahvista `{{<T "Ok" >}}`-näppäimellä.

4. `{{<T "WeightRecorded" >}}`-alue valitaan automaattisesti. Käytä nuolinäppäimiä ◁ ▷ valitaksesi tallennettavan painon.

    ![VitalControl: valikkoasetukset Aseta tallennettu paino](../images/recordweights.png "Aseta tallennettu paino")

{{% alert title="Vihje" %}}
 Valitse `{{<T "None" >}}`, jos: eläimet luodaan automaattisesti taustalla (transponderiskannauksen kautta), tilalla ei ole käytettävissä vaakaa eikä arvioituja arvoja haluta, syntymäpainot ovat tuntemattomia.
{{% /alert %}}

### Aseta ikä rekisteröinnin yhteydessä {#set-age-at-registration}
{{% alert title="Vihje" %}}
Tässä syötetyn iän perusteella laite laskee ehdotetun syntymäajan manuaalisesti luodulle eläimelle tai sitä käytetään automaattisesti luodessa taustalla (transponderiskannauksen kautta). Maitotiloille, syötä päivien määrä, jossa vastasyntyneet vasikat rekisteröidään VitalControliin. Lihakarjan kasvattamotiloille, tähän tulee syöttää ostettujen vasikoiden keski-ikä. Sallittu arvoalue on 0-99 päivää.
{{% /alert %}}

Aseta ikä luomishetkellä laitteellasi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Avautuu alivalikko, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "DefaultValues" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "AgeRegistration" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi iän luomishetkellä.

    ![VitalControl: valikkoasetukset Aseta rekisteröinti-ikä](../images/ageatregistration.png "Aseta rekisteröinti-ikä")

### Aseta sukupuoli {#set-sex}

Tässä määrität, mikä sukupuoli ehdotetaan (manuaalinen luonti) tai otetaan automaattisesti käyttöön (taustalla tapahtuva luonti). Määritelläksesi sukupuolen eläimen rekisteröinnissä laitteellasi, toimi seuraavasti.

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Avautuu alivalikko, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "DefaultValues" >}}` ja vahvista `{{<T "Ok" >}}`:lla.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "Sex" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi sukupuolen luomishetkellä.

    ![VitalControl: valikkoasetukset Aseta sukupuoli](../images/setsex.png "Aseta sukupuoli")

### Aseta eläimen tyyppi {#set-type-of-animal}

Tässä määrität, minkä tyyppinen eläin kirjataan luotaessa uusia eläimiä tilallesi. Määritelläksesi eläimen tyypin sen luomishetkellä laitteellasi, toimi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Settings" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "DefaultValues" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "TypeAnimal" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi eläimen tyypin luotaessa.

    ![VitalControl: valikkoasetukset eläimen tyyppi](../images/typeofanimal.png "eläimen tyyppi")

### Aseta rotu {#set-breed}

Tässä määrität, mikä karjan rotu tallennetaan uusia eläimiä luotaessa tilallesi. Määritelläksesi rodun luotaessa laitteellasi, toimi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "DefaultValues" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "Breed" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi rodun luotaessa.

    ![VitalControl: valikkoasetukset eläimen tyyppi](../images/breed.png "eläimen tyyppi")

### Aseta olinpaikka {#set-whereabouts}

Tässä määrität, mitkä olinpaikat annetaan eläimille uusia maatilan eläimiä luotaessa. Määritelläksesi maatilan eläimen olinpaikan sen luomishetkellä laitteellasi, toimi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alavalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetusalueiden välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "DefaultValues" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "Whereabouts" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi olinpaikan luotaessa.

    ![VitalControl: valikkoasetukset olinpaikka](../images/whereabout.png "olinpaikka")

Tallenna asetukset ja palaa päävalikkoon `{{<T "Settings" >}}` painamalla `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.

## Autom rekisteröinti {#auto-registration}

Tässä määrität laitteen käyttäytymisen, kun uusi tunnistin, joka ei ole vielä tunnettu VitalControl-laitteelle, skannataan. Tälle tapaukselle voidaan määritellä kolme erilaista käyttäytymistä.

{{% alert title = "Vihje" %}}
Kun käyttäjä vahvistaa eläinten luomisen, näyttöön tulee syöttöruutu, jossa käyttäjä voi syöttää luotavan uuden eläimen tiedot (sukupuoli, syntymäaika jne.). Automaattisessa luonnissa käytetään "Asetukset > Luo uudet eläimet" -kohdassa määriteltyjä arvoja kaikille automaattisesti luoduille eläimille sukupuolen, iän jne. osalta. Eläinkohtaisia asetuksia ei ole tässä mahdollista.
{{% /alert %}}

Määritelläksesi käyttäytymisen, kun käyttäjän eläin luodaan automaattisesti laitteellasi, toimi seuraavasti:

1. VitalControl-laitteesi päänäytössä valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alavalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alavalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetusalueiden välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "AutoRegistration" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Asetuskenttä `{{<T "AutoRegistration" >}}` valitaan automaattisesti. Käytä nuolinäppäimiä ◁ ▷ määrittääksesi laitteen käyttäytymisen uusia eläimiä luotaessa.

![VitalControl: valikkoasetukset Autom rekisteröinti](../images/autoregistration.png "Autom rekisteröinti")

## Eläimen numeron antaminen {#assignment-animal-id}

Tässä määrität, mikä eläimen tunnus ehdotetaan (johdettu transponderinumerosta) tai käytetään (peräkkäinen), kun luot uuden eläimen tilallesi.

{{% alert title = "Vihje" %}}
Valitse "Peräkkäinen" vaihtoehto, jos käyttämäsi karsinanumero eläimen visuaaliseen tunnistamiseen on määritetty riippumatta käytetystä transponderinumerosta elektroniseen tunnistamiseen. Karsina- tai kaulanumerot määritetään sitten peräkkäin tietyssä vaihteluvälissä (esim. 1 - 40) eivätkä ne ole suoraan yhteydessä käytettyihin transponderinumeroihin. Valitse vaihtoehto "Johda transponderinumerosta", jos haluat yhdistää eläimen karsinanumeron suoraan sille määritettyyn transponderinumeroon. Tämä vaihtoehto on erityisen hyödyllinen, jos käytät keltaisia elektronisia korvamerkkejä, navetan numero on silloin identtinen keltaiseen korvamerkkiin painetun kymmennumeroinen eläinnumeron loppunumeroiden kanssa.
{{% /alert %}}

Määritelläksesi eläimen tunnuksen määrittämisen luodessasi tilaeläintä laitteellasi, toimi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "AutoRegistration" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "AssignmentIDs" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi työeläimen tunnuksen määrittämisen luodessasi.

6. Jos valitset asetuksen `{{<T "Consecutive" >}}`, sinulla on mahdollisuus määrittää `{{<T "NextAnimalID" >}}`. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "NextAnimalID" >}}` -alueen ja vahvista painamalla `{{<T "Ok" >}}`. Navigoi alueella käyttämällä nuolinäppäimiä ◁ ▷. Nyt voit valita numeron käyttämällä nuolinäppäimiä △ ▽. Laite käyttää nyt automaattisesti tätä numeroa aloittaakseen jatkuvan laskennan siitä. Lisäksi voit asettaa, lasketaanko numerot jatkuvasti kasvavasti vai jatkuvasti vähenevästi. Tee tämä käyttämällä nuolinäppäimiä ◁ ▷ siirtyäksesi 9/1-symboliin. Käytä nuolinäppäimiä △ ▽ vaihtaaksesi jatkuvasti kasvavan tai jatkuvasti vähenevän laskennan välillä. Tallenna asetukset käyttämällä `F1` tai `{{<T "Ok" >}}` -näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.

![VitalControl: valikkoasetukset eläimen tunnisteen määritys](../images/assignmentanimalid2.png "Eläimen tunnisteen määritys")

![VitalControl: valikkoasetukset eläimen tunnisteen määritys](../images/assignmentanimalid3.png "eläimen tunnisteen määritys")

{{% alert title = "Vihje" %}}
Vain käytettäessä vaihtoehtoa `{{<T "Consecutive" >}}`: jos olet asettanut käyttämään erillisiä numerosarjoja uroksille ja naaraille korvamerkin numeron määrittämisessä, seuraava eläinnumero tallennetaan kullekin uroksille, naaraalle ja tuntemattoman sukupuolen eläimille. Symboli eläinnumeron vasemmalla puolella osoittaa, mihin seuraavaa eläinnumeroa käytetään: joko urokselle ♀ tai naaraalle ♂ tai tuntemattoman sukupuolen eläimille ♀♂?
{{% /alert %}}

### Uuden tunnisteen numero {#digit-of-the-new-id}

Tässä määrität, kuinka pitkä navetan numero, joka johdetaan lähetysnumeron perusteella, on uudelle eläimelle tilallasi. Mahdollinen arvoalue on 2-6 numeroa. Määritä uuden tilaeläimen tunnisteen pituus laitteellasi seuraavasti:

1. VitalControl-laitteesi päävalikossa valitse valikkokohta <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näytetään erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "AutoRegistration" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "AssignmentIDs" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi uuden työeläimen tunnisteen numeron luotaessa.

    ![VitalControl: valikkoasetukset Uuden tunnisteen numero](../images/digitofnewid.png "Uuden tunnisteen numero")

### Oikea siirtymä {#right-offset}
 
Tässä määrität, otetaanko siirtymä huomioon myös navetan numeron johdossa lähetysnumerosta. Ilman siirtymää käytetään lähetysnumeron viimeisiä 2-6 numeroa navetan numerona, 1 siirtymällä hylätään oikeanpuoleisin numero, 2 siirtymällä kaksi oikeanpuoleisinta numeroa, ja niin edelleen.

{{% alert title = "Vihje" %}}
Asetusparametrien vaikutuksen graafiseksi havainnollistamiseksi alla olevalla rivillä näkyy viisitoistamerkkinen transponderinumero. Vihreä kehys osoittaa sen karsinanumeron, joka johdettaisiin transponderinumerosta nykyisillä asetuksilla. Asetusarvojen "Pituus" ja "Siirtymä" muuttaminen johtaa välittömästi johdetun
karsinanumeron päivitykseen.
{{% /alert %}}

Aseta siirtymä oikealle eläimen kohdalla laitteellasi seuraavasti:

1. Valitse VitalControl-laitteesi päävalikosta kohde <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetusalueiden `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}` välillä. Valitse `{{<T "AutoRegistration" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "OffsetRight" >}}`.

5. Käytä nuolinäppäimiä ◁ ▷ asettaaksesi työskentelevän eläimen oikean siirtymäalueen luomisen yhteydessä.

    ![VitalControl: valikkoasetukset oikea siirtymä](../images/rightoffset.png "oikea siirtymä")

Tallenna asetukset ja palaa ylävalikkoon <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` painamalla `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.

## Tehtävä korvamerkin numero {#assignment-ear-tag-number}

Tässä määrität, käytetäänkö yhtä vai kahta numerosarjaa korvamerkin numeron määrittämisessä eläinten manuaalisen uudelleenrekisteröinnin yhteydessä. Määritelläksesi maatilaeläimen korvamerkin numeron määrityksen laitteellasi, toimi seuraavasti:

1. Valitse VitalControl-laitteesi päävalikosta kohde <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` ja paina `{{<T "Ok" >}}`-näppäintä.

2. Alivalikko avautuu, jossa näkyy erilaisia asetuksia. Käytä nuolinäppäimiä △ ▽ valitaksesi `{{<T "RegistrationAnimals" >}}`. Vahvista painamalla `{{<T "Ok" >}}`.

3. Toinen alivalikko avautuu, jossa voit käyttää nuolinäppäimiä △ ▽ vaihtaaksesi asetuskenttien välillä `{{<T "DefaultValues" >}}`, `{{<T "AutoRegistration" >}}` ja `{{<T "AssignmentEartagNr" >}}`. Valitse `{{<T "AssignmentEartagNr" >}}` ja vahvista painamalla `{{<T "Ok" >}}`.

4. Käytä nuolinäppäimiä ◁ ▷ määrittääksesi työeläimen korvamerkin numeron luotaessa.

    ![VitalControl: valikkoasetukset Korvamerkin numero](../images/assignmenteartagnumber.png "Korvamerkin numero")

Tallenna asetukset ja palaa päävalikkoon `{{<T "RegistrationAnimals" >}}` painamalla `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.

Tallenna asetukset ja palaa päävalikkoon <img src="/icons/gear.svg" width="25" align="bottom" alt="Asetukset" /> `{{<T "Settings" >}}` painamalla `F1`-näppäintä &nbsp;<img src="/icons/footer/save_exit.svg" width="65" align="bottom" alt="Tallenna ja palaa" />&nbsp;.
