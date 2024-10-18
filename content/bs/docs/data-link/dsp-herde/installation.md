---
title: "Postavljanje tehnologije VitalControl:"
linkTitle: Postavljanje
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definišite parametre za sinhronizaciju za razmjenu podataka između softvera *Herde* i uređaja VitalControl.
weight: 10
categories: [DSP Herde]
translationKey: DSPherde/installation
---
Prije prve [razmjene podataka](../data-exchange/), potrebno je jednom kreirati i postaviti tehnološku vezu s uređajem VitalControl.

{{% alert title="Pažnja" %}}
Prije postavljanja tehnološke veze, provjerite da li je softver 'VCSynchronizer' instaliran na vašem računaru; ovaj softver je obavezan za razmjenu podataka. Da biste to uradili, otvorite Windows Start meni i potražite u listi vaših aplikacija unos pod nazivom 'Urban VitalControl'. Ako ne možete pronaći takav unos, [instalirajte](../../vcsynchronizer/installation/) softver `VCSynchronizer` na vašem računaru.
{{% /alert %}}

Da biste postavili tehnologiju, postupite na sljedeći način:

## Kreirajte novi set parametara za razmjenu podataka s uređajem VitalControl {#create-new-parameter-set-for-data-exchange-with-vitalcontrol-device}

1. Unutar softvera `Herde`, otvorite prozor `Postavke`. Ovisno o konfiguraciji vašeg korisničkog sučelja, ovaj prozor možete otvoriti putem stavke menija `Organizacija` u glavnom meniju (stavka najvišeg nivoa _Postavke_), u bočnom meniju ili u vašem prilagođenom alatu (horizontalno ili vertikalno).

   ![Softver Herde: pozivanje menija postavki](../screenshots/settings.png "Herde: pozivanje Postavki")

1. Otvara se pop-up prozor `Postavke`, u čijoj lijevoj bočnoj traci je navedeno mnogo kategorija postavki. Otvorite kategoriju `Servis` ➊ i odaberite potkategoriju `Tehnologija` ➋.

1. U zaglavlju desnog glavnog područja sada se pojavljuje padajući meni u kojem su navedeni svi definirani setovi tehnoloških parametara. Broj postavljenih tehnologija prikazan je s desne strane. Kliknite na dugme ![Softver Herde: Kreirajte novi set tehnoloških parametara](/icons/new.png "Herde: Kreirajte tehnološku vezu") `Kreirajte novi set tehnoloških parametara` ➌.

![Software Herde: settings screen for technology](../screenshots/settings-technology.png "Herde: Settings for Technology")

1. Otvara se novi prozor. Unesite `VitalControl` kao **Naziv veze** i `Urban VitalControl (Gen 2)` kao **Tip tehnologije** i zatim kliknite na dugme `Prihvati`.

   ![Software Herde: Create new parameter set for VitalControl device](../screenshots/new-technology.png "Create new technology: VitalControl").

   Skup parametara za tehnologiju `VitalControl` je sada kreiran i mora biti konfigurisan u narednim koracima.

## Konfiguracija: Osnovne postavke {#configuration-basic-settings}

U početku je odabrana kartica `Osnovne postavke` na prikazanom ekranu, kao što je prikazano na slici ispod. Napravite prilagodbe u kategorijama `Vanjski program` ➊, `Podaci o životinjama` ➋, `Lokacije` ➌ i `Odlazak` ➍ prema specifičnim uslovima vaše farme.

   ![Software Herde: Configuration of basic settings](../screenshots/basic-settings.png "Technology VitalControl: Basic settings").
   
### Kategorija `Vanjski program` ➊ {#category-external-program-}

Da bi se izvršila razmjena podataka između VitalControl i Herde Plus, potreban je osnovni softver [VitalControl Synchronizer](../../vcsynchronizer) kao vanjski pomoćni program. Za ispravno funkcionisanje ovog programa, potrebno je napraviti neke prilagodbe u kategoriji `Vanjski program` ➊.

- **Naziv uređaja za razmjenu podataka**:  
  Po defaultu ovo polje je prazno. Međutim, preporučuje se da ovdje unesete naziv vašeg računara. Da biste to uradili, pritisnite ikonu ![Herde Software: Create new technology coupling](/icons/arrow-down.png "Herde: Create technology coupling") `Strelica dolje` na desnom kraju padajućeg polja. Naziv vašeg računara će sada biti određen i prikazan za odabir unutar padajuće liste. Kada se polje popuni nazivom vašeg računara i ova postavka se sačuva, razmjena podataka će se od sada moći pokrenuti samo sa vašeg računara.

- **Izvrši u putanji**:
  Molimo unesite `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` u ovo polje za unos. Ovo je apsolutna putanja do programa `VitalControl Synchronizer` (ili tačnije do datoteke `vcsynchronizer.exe`). Ako je ciljna direktorija za ovaj program promijenjena tokom [instalacije VCSynchronizer](../../vcsynchronizer/installation), molimo unesite ovdje odabranu ciljnu direktoriju.


- **Program HerdePlus 🡒 Technology**:  
  Ovo polje za unos treba popuniti vrijednošću `vc_imp.bat`. Odgovarajuća batch datoteka određuje redoslijed operacija tokom uvoza podataka.

- **Technology 🡒 Program HerdePlus**:  
  Ovo polje za unos treba popuniti vrijednošću `vc_exp.bat`. Odgovarajuća batch datoteka određuje redoslijed operacija tokom izvoza podataka.

### Kategorija `Podaci o životinjama` ➋ {#category-animal-data-}

Daljnje prilagodbe moraju se izvršiti u kategoriji 'Podaci o životinjama' ➋ kako bi razmjena podataka bila potpuno funkcionalna.

- **Broj životinje**:  
  Ova postavka određuje koji ID životinje dobijaju za prikaz na uređaju VitalControl:
  - Ako ste dodijelili kratke ID brojeve (`Broj štale`, 2 do 6 cifara) svojim životinjama, trebali biste ovdje odabrati vrijednost 'Broj štale': prikazani ID životinje na VitalControlu će tada odgovarati broju štale dodijeljenom životinji.
  - Ako **niste** dodijelili kratke ID brojeve svojim životinjama - što je uobičajeno u sektoru tova, na primjer - tada biste ovdje trebali odabrati vrijednost `Broj markice (5 cifara)`. Prikazani ID životinje na uređaju VitalControl će tada odgovarati zadnjih 5 cifara ID broja otisnutog na žutoj ušnoj markici životinje.
  
<br>

- **Broj odašiljača**:  
  Ova postavka određuje broj koji se očekuje za životinju tokom RFID skeniranja:  
  - Ako stavite ogrlicu s transponderom na svoje životinje ili stavite ušni transponder na svoje životinje - na primjer za identifikaciju na automatskom hranilici -, trebali biste ovdje odabrati vrijednost 'Transponder'.
  - Ako vaše životinje ili telad nose elektronske ušne markice kodirane sa službenim nacionalnim 15-cifrenim identifikacijskim brojem vaše životinje koji će služiti za identifikaciju životinje tokom cijelog njenog života, trebali biste ovdje odabrati vrijednost 'Broj markice (15 cifara)`.

<br>

- **Minimalna starost za prijenos**:  
  Ako se kao vrijednost za ovo polje za unos unese `0`, **sve životinje** će biti prenesene na uređaj VitalControl, bez obzira na njihovu starost. Vrijednost veća od `0` definira minimalnu starost (u danima) za životinje koje će biti prenesene. Na primjer, ako se **samo krave** trebaju prenijeti na uređaj, ovdje se mora unijeti vrijednost od 600 dana (= 20 mjeseci) kao minimalna starost.

### Kategorija `Lokacije` ➌ {#category-locations-}

Koristite ovu kategoriju da isključite životinje na određenim lokacijama iz prenosa podataka na uređaj. Da biste to uradili, uklonite oznaku sa lokacije(a) za koje **ne** želite da prenesete životinje koje su tamo smještene na uređaj.

### Kategorija `Odlazak` ➍ {#category-leaving-}

Označite opciju 'Odlazak u HERDEplus' ovdje. Na ovaj način specificirate da se životinje koje su napustile stado također brišu sa VitalControl uređaja tokom sinhronizacije.
Također označite opciju 'Ne postoji na stanju'. Na ovaj način specificirate da se životinje na VitalControl koje nisu poznate `Herde` softveru brišu sa VitalControl tokom sinhronizacije.

## Konfiguracija: Tehnološki specifične postavke {#configuration-technology-specific-settings}

Zatim kliknite na karticu `Tehnološki specifične postavke` da biste odredili obim razmjene podataka. Preporučuje se da označite sve kućice navedene tamo osim kućice `Sačuvaj uvozni fajl nakon obrade`. Ova kućica je namijenjena za dijagnostičke svrhe i treba je odabrati samo ako to zahtijeva servisno osoblje.

- **Maksimalna starost za prijenos**:  
  Ako se ovdje unese `0` kao vrijednost, **sve životinje** će biti prenesene na VitalControl uređaj, bez obzira na njihovu starost. Vrijednost veća od `0` definiše maksimalnu starost (u danima) za životinje koje će biti prenesene. Ako, na primjer, **samo telad** treba biti prenesena na uređaj, ovdje se mora unijeti vrijednost od 90 dana (= 3 mjeseca) kao maksimalna starost.

   ![Herde Softver: Konfiguracija razmjene podataka](../screenshots/technology-specific-settings.png "Razmjena podataka: specifične postavke").

## Sačuvaj postavke razmjene podataka {#save-data-exchange-settings}

Pritisnite tipku `Sačuvaj (F2)` nakon što ste pravilno konfigurirali sve parametre konfiguracije. Skup parametara za razmjenu podataka na VitalControl uređaj je sada sačuvan i spreman za upotrebu.  
Izvršite [razmjenu podataka](../data-exchange/) sada da provjerite da li su navedene postavke važeće kako biste uspješno mogli razmijeniti podatke sa i na VitalControl uređaj.


