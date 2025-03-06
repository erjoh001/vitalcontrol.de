---
title: "Postavljanje tehnologije VitalControl:"
linkTitle: Postavljanje
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definirajte parametre sinkronizacije za razmjenu podataka između softvera *Herde* i uređaja VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Prije prve [razmjene podataka](../data-exchange/), potrebno je jednom stvoriti i postaviti tehnološku vezu s uređajem VitalControl.

{{% alert title="Pažnja" %}}
Prije postavljanja tehnološke veze, provjerite je li na vašem računalu instaliran softver 'VCSynchronizer'; ovaj softver je obavezan za razmjenu podataka. Da biste to učinili, otvorite izbornik Start u sustavu Windows i potražite u popisu svojih aplikacija unos pod nazivom 'Urban VitalControl'. Ako ne možete pronaći takav unos, [instalirajte](../../vcsynchronizer/installation/) softver `VCSynchronizer` na svoje računalo.
{{% /alert %}}

Za postavljanje tehnologije, postupite na sljedeći način:

## Stvorite novi skup parametara za razmjenu podataka s uređajem VitalControl {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Unutar softvera `Herde`, otvorite prozor `Postavke`. Ovisno o konfiguraciji vašeg korisničkog sučelja, ovaj prozor možete otvoriti putem stavke izbornika `Organizacija` u glavnom izborniku (stavka najviše razine _Postavke_), u izborniku sa strane ili u vašem prilagođenom alatu (vodoravnom ili okomitom).

   ![Softver Herde: pozivanje izbornika postavki](../screenshots/settings.png "Herde: pozivanje Postavki")

1. Otvara se skočni prozor `Postavke`, u čijoj lijevoj bočnoj traci je navedeno mnogo kategorija postavki. Otvorite kategoriju `Servis` <span style="font-size: 140%">➊</span> i odaberite potkategoriju `Tehnologija` <span style="font-size: 140%">➋</span>.

1. U zaglavlju glavnog desnog područja sada se pojavljuje padajući izbornik u kojem su navedeni svi definirani skupovi tehnoloških parametara. Desno je prikazan broj postavljenih tehnologija. Kliknite na gumb ![Softver Herde: Stvorite novi skup tehnoloških parametara](/icons/new.png "Herde: Stvorite tehnološku vezu") `Stvorite novi skup tehnoloških parametara` <span style="font-size: 140%">➌</span>.

![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Otvara se novi skočni prozor. Unesite `VitalControl` kao **Naziv veze** i `Urban VitalControl (Gen 2)` kao **Tip tehnologije** te zatim kliknite na gumb `Prihvati`.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   Skup parametara za tehnologiju `VitalControl` je sada kreiran i mora se konfigurirati u sljedećim koracima.

## Konfiguracija: Osnovne postavke {#configuration-basic-settings}

U početku je odabrana kartica `Osnovne postavke` na prikazanom ekranu, kao što je prikazano na slici ispod. Napravite prilagodbe u kategorijama `Vanjski program` <span style="font-size: 140%">➊</span>, `Podaci o životinjama` <span style="font-size: 140%">➋</span>, `Lokacije` <span style="font-size: 140%">➌</span> i `Odlazak` <span style="font-size: 140%">➍</span> prema specifičnim uvjetima vaše farme.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Kategorija `Vanjski program` <span style="font-size: 140%">➊</span> {#category-external-program-}

Kako bi se izvršila razmjena podataka između VitalControl i Herde Plus, potreban je osnovni softver [VitalControl Synchronizer](../../vcsynchronizer) kao vanjski pomoćni program. Za ispravno funkcioniranje ovog programa, potrebno je napraviti neke prilagodbe u kategoriji `Vanjski program` <span style="font-size: 140%">➊</span>.

- **Naziv uređaja za razmjenu podataka**:  
  Po defaultu ovo polje je prazno. Međutim, preporuča se unijeti naziv vašeg računala ovdje. Da biste to učinili, pritisnite ikonu ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Strelica dolje` na desnom kraju padajućeg polja. Naziv vašeg računala će sada biti određen i prikazan za odabir unutar padajućeg popisa. Kada je polje popunjeno nazivom vašeg računala i ova postavka je pohranjena, razmjena podataka može se pokrenuti samo s vašeg računala od sada nadalje.

- **Izvrši u putanji**:
  Molimo unesite `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` u ovo polje za unos. Ovo je apsolutna putanja do programa `VitalControl Synchronizer` (ili točnije do datoteke `vcsynchronizer.exe`). Ako je ciljani direktorij za ovaj program promijenjen tijekom [instalacije VCSynchronizera](../../vcsynchronizer/installation), molimo unesite ovdje odabrani ciljani direktorij.


- **Program HerdePlus 🡒 Tehnologija**:  
  Ovo polje za unos treba ispuniti vrijednošću `vc_imp.bat`. Odgovarajuća batch datoteka specificira slijed operacija tijekom uvoza podataka.

- **Tehnologija 🡒 Program HerdePlus**:  
  Ovo polje za unos treba ispuniti vrijednošću `vc_exp.bat`. Odgovarajuća batch datoteka specificira slijed operacija tijekom izvoza podataka.

### Kategorija `Podaci o životinjama` <span style="font-size: 140%">➋</span> {#category-animal-data-}

Daljnje prilagodbe moraju se izvršiti u kategoriji 'Podaci o životinjama' <span style="font-size: 140%">➋</span> kako bi razmjena podataka bila potpuno funkcionalna.

- **Broj životinje**:  
  Ova postavka određuje koji ID životinje dobivaju za prikaz na uređaju VitalControl:
  - Ako ste svojim životinjama dodijelili kratke ID-ove (`Broj staje`, 2 do 6 znamenki), ovdje biste trebali odabrati vrijednost 'Broj staje': prikazani ID životinje na VitalControlu tada će odgovarati broju staje dodijeljenom životinji.
  - Ako **niste** dodijelili kratke ID brojeve svojim životinjama - što je uobičajeno u sektoru tova, na primjer - tada biste ovdje trebali odabrati vrijednost `Broj oznake (5 znamenki)`. Prikazani ID životinje na uređaju VitalControl tada će odgovarati zadnjih 5 znamenki ID-a ispisanog na žutoj ušnoj oznaci životinje.
  
<br>

- **Broj odašiljača**:  
  Ova postavka određuje broj koji se očekuje za životinju tijekom RFID skeniranja:  
  - Ako svojim životinjama stavite ogrlicu s transponderom ili im stavite ušni transponder - na primjer za identifikaciju na automatskom hranilici - ovdje biste trebali odabrati vrijednost 'Transponder'.
  - Ako vaše životinje ili telad nose elektroničke ušne oznake kodirane s službenim nacionalnim 15-znamenkastim identifikacijskim brojem vaše životinje koji će služiti za identifikaciju životinje tijekom cijelog njenog života, ovdje biste trebali odabrati vrijednost 'Broj oznake (15 znamenki)`.

<br>

- **Minimalna dob za prijenos**:  
  Ako je kao vrijednost za ovo polje za unos unesen `0`, **sve životinje** će biti prenesene na uređaj VitalControl, bez obzira na njihovu dob. Vrijednost veća od `0` definira minimalnu dob (u danima) za životinje koje će biti prenesene. Na primjer, ako se **samo krave** trebaju prenijeti na uređaj, ovdje se mora unijeti vrijednost od 600 dana (= 20 mjeseci) kao minimalna dob.

### Kategorija `Lokacije` <span style="font-size: 140%">➌</span> {#category-locations-}

Koristite ovu kategoriju kako biste isključili životinje na određenim lokacijama iz prijenosa podataka na uređaj. Da biste to učinili, uklonite kvačicu s lokacije(a) za koje **ne** želite prenijeti životinje smještene tamo na uređaj.

### Kategorija `Odlazak` <span style="font-size: 140%">➍</span> {#category-leaving-}

Označite opciju 'Odlazak u HERDEplus' ovdje. Na taj način specificirate da se životinje koje su napustile stado također brišu s VitalControl uređaja tijekom sinkronizacije.
Također označite opciju 'Ne postoji na skladištu'. Na taj način specificirate da se životinje na VitalControl koje nisu poznate softveru `Herde` brišu s VitalControl tijekom sinkronizacije.

## Konfiguracija: Postavke specifične za tehnologiju {#configuration-technology-specific-settings}

Zatim kliknite na karticu `Postavke specifične za tehnologiju` kako biste odredili opseg razmjene podataka. Preporučuje se označiti sve kvačice navedene tamo osim kvačice `Spremi uvoznu datoteku nakon obrade`. Potonja kvačica je namijenjena za dijagnostičke svrhe i treba je odabrati samo ako to zahtijeva servisno osoblje.

- **Maksimalna starost za prijenos**:  
  Ako je ovdje unesen `0` kao vrijednost, **sve životinje** će biti prenesene na VitalControl uređaj, bez obzira na njihovu starost. Vrijednost veća od `0` definira maksimalnu starost (u danima) za životinje koje će biti prenesene. Ako se, na primjer, **samo telad** treba prenijeti na uređaj, ovdje se mora unijeti vrijednost od 90 dana (= 3 mjeseca) kao maksimalna starost.

   ![Herde Software: Konfiguracija razmjene podataka](../screenshots/technology-specific-settings.png "Razmjena podataka: specifične postavke").

## Spremi postavke razmjene podataka {#save-data-exchange-settings}

Pritisnite tipku `Spremi (F2)` nakon što ste pravilno konfigurirali sve parametre konfiguracije. Skup parametara za razmjenu podataka na VitalControl uređaj sada je spremljen i spreman za upotrebu.  
Izvršite [razmjenu podataka](../data-exchange/) sada kako biste provjerili jesu li propisane postavke valjane kako biste uspješno mogli razmjenjivati podatke na i s VitalControl uređaja.


