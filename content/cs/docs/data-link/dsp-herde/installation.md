---
title: "Nastavení technologie VitalControl:"
linkTitle: Nastavení
date: 2023-08-04T12:21:53+02:00
draft: false
description: >
  Definujte synchronizační parametry pro výměnu dat mezi softwarem *Herde* a zařízením VitalControl.
weight: 10
kategorie: [DSP Herde]
translationKey: DSPherde/installation
---
Před prvním [výměnou dat](../data-exchange/) je nutné vytvořit a nastavit technologické propojení se zařízením VitalControl.

{{% alert title="Pozor" %}}
Před nastavením technologického propojení zkontrolujte, zda je na vašem PC nainstalován software 'VCSynchronizer'; tento software je nezbytný pro výměnu dat. Otevřete nabídku Start systému Windows a v seznamu aplikací vyhledejte položku 'Urban VitalControl'. Pokud takovou položku nenajdete, [nainstalujte](../../vcsynchronizer/installation/) software `VCSynchronizer` na vašem PC.
{{% /alert %}}

Pro nastavení technologie postupujte následovně:

## Vytvoření nového souboru parametrů pro výměnu dat se zařízením VitalControl

1. V softwaru `Herde` otevřete okno `Nastavení`. V závislosti na konfiguraci vašeho uživatelského rozhraní můžete toto okno otevřít prostřednictvím položky menu `Organizace` v hlavním menu (nejvyšší úroveň položky _Nastavení_), v postranním menu nebo ve vaší přizpůsobené sadě nástrojů (horizontální nebo vertikální).

   ![Software Herde: vyvolání menu nastavení](../screenshots/settings.png "Herde: vyvolání Nastavení")

1. Otevře se vyskakovací okno `Nastavení`, v jehož levém postranním panelu je uvedeno mnoho kategorií nastavení. Otevřete kategorii `Služba` <span style="font-size: 140%">➊</span> a vyberte podkategorii `Technologie` <span style="font-size: 140%">➋</span>.

1. V záhlaví hlavní oblasti vpravo se nyní objeví rozbalovací nabídka, ve které jsou uvedeny všechny definované sady parametrů technologie. Počet nastavených technologií je uveden vpravo. Klikněte na tlačítko ![Software Herde: Vytvoření nové sady parametrů technologie](/icons/new.png "Herde: Vytvoření technologického propojení") `Vytvořit novou sadu parametrů technologie` <span style="font-size: 140%">➌</span>.

   ![Software Herde: obrazovka nastavení pro technologii](../screenshots/settings-technology.png "Herde: Nastavení pro technologii")


1. Otevře se další vyskakovací okno. Zadejte `VitalControl` jako **Název připojení** a `Urban VitalControl (Gen 2)` jako **Typ technologie** a poté klikněte na tlačítko `Přijmout`.

   ![Software Herde: Vytvořit novou sadu parametrů pro zařízení VitalControl](../screenshots/new-technology.png "Vytvořit novou technologii: VitalControl").

   Sada parametrů pro technologii `VitalControl` je nyní vytvořena a musí být nakonfigurována v následujících krocích.

## Konfigurace: Základní nastavení

Na začátku je vybrána záložka `Základní nastavení` na zobrazené obrazovce, jak je znázorněno na obrázku níže. Proveďte úpravy v kategoriích `Externí program` <span style="font-size: 140%">➊</span>, `Údaje o zvířatech` <span style="font-size: 140%">➋</span>, `Lokality` <span style="font-size: 140%">➌</span> a `Odchod` <span style="font-size: 140%">➍</span> podle specifických podmínek vaší farmy.

   ![Software Herde: Konfigurace základních nastavení](../screenshots/basic-settings.png "Technologie VitalControl: Základní nastavení").
   
### Kategorie `Externí program` <span style="font-size: 140%">➊</span>

Pro provádění výměny dat mezi VitalControl a Herde Plus je potřeba základní software [VitalControl Synchronizer](../../vcsynchronizer) jako externí pomocný program. Pro správnou funkci tohoto programu je třeba provést některé úpravy v kategorii `Externí program` <span style="font-size: 140%">➊</span>.

- **Název zařízení pro výměnu dat**:  
  Ve výchozím nastavení je toto pole prázdné. Doporučuje se však zde zadat název vašeho počítače. Chcete-li to provést, stiskněte ikonu ![Herde Software: Vytvořit nové propojení technologie](/icons/arrow-down.png "Herde: Vytvořit propojení technologie") `Šipka dolů` na pravém konci rozbalovacího pole. Nyní bude určen a zobrazen název vašeho počítače pro výběr v rozbalovacím seznamu. Jakmile je pole vyplněno názvem vašeho počítače a toto nastavení je uloženo, výměna dat může být od této chvíle spuštěna pouze z vašeho počítače.

- **Spustit v cestě**:
  Zadejte prosím `%LOCALAPPDATA%\Urban\VitalControl\Synchronizer` do tohoto vstupního pole. Toto je absolutní cesta k programu `VitalControl Synchronizer` (nebo konkrétněji k souboru `vcsynchronizer.exe`). Pokud byl cílový adresář pro tento program změněn během [instalace VCSynchronizer](../../vcsynchronizer/installation), zadejte zde vybraný cílový adresář.


- **Program HerdePlus 🡒 Technologie**:  
  Toto vstupní pole musí být vyplněno hodnotou `vc_imp.bat`. Odpovídající dávkový soubor určuje sled operací během importu dat.

- **Technologie 🡒 Program HerdePlus**:  
  Toto vstupní pole musí být vyplněno hodnotou `vc_exp.bat`. Odpovídající dávkový soubor určuje sled operací během exportu dat.

### Kategorie `Údaje o zvířatech` <span style="font-size: 140%">➋</span>

Další úpravy je třeba provést v kategorii 'Údaje o zvířatech' <span style="font-size: 140%">➋</span>, aby byl výměna dat plně funkční.

- **Číslo zvířete**:  
  Toto nastavení určuje, jaké ID zvířata obdrží pro zobrazení na zařízení VitalControl:
  - Pokud jste svým zvířatům přiřadili krátká ID (`Číslo stáje`, 2 až 6 číslic), měli byste zde vybrat hodnotu 'Číslo stáje': zobrazené ID zvířete na zařízení VitalControl bude odpovídat číslu stáje přiřazenému zvířeti.
  - Pokud jste svým zvířatům **nepřiřadili** krátká ID čísla - což je běžné například v sektoru výkrmu - měli byste zde vybrat hodnotu `Číslo značky (5 číslic)`. Zobrazené ID zvířete na zařízení VitalControl bude odpovídat posledním 5 číslicím ID vytištěného na žluté ušní značce zvířete.
  
<br>

- **Číslo vysílače**:  
  Toto nastavení určuje číslo očekávané pro zvíře během RFID skenování:  
  - Pokud svým zvířatům nasadíte obojek s transpondérem nebo ušní transpondér - například pro identifikaci u automatického krmítka -, měli byste zde vybrat hodnotu 'Transpondér'.
  - Pokud vaše zvířata nebo telata nosí elektronické ušní značky zakódované oficiálním národním 15místným identifikačním číslem vašeho zvířete, které bude sloužit k identifikaci zvířete po celý jeho život, měli byste zde vybrat hodnotu 'Číslo značky (15 číslic)`.

<br>

- **Minimální věk pro přenos**:  
  Pokud je jako hodnota tohoto vstupního pole zadáno `0`, **všechna zvířata** budou přenesena na zařízení VitalControl, bez ohledu na jejich věk. Hodnota větší než `0` definuje minimální věk (ve dnech) pro přenos zvířat. Například pokud mají být na zařízení přeneseny **pouze krávy**, musí být zde jako minimální věk zadána hodnota 600 dní (= 20 měsíců).

### Kategorie `Lokality` <span style="font-size: 140%">➌</span>

Použijte tuto kategorii k vyloučení zvířat na určitých lokalitách z přenosu dat do zařízení. Chcete-li to provést, odstraňte zaškrtnutí u lokalit, pro které **nechcete** přenášet zvířata umístěná tam do zařízení.

### Kategorie `Odchod` <span style="font-size: 140%">➍</span>

Zaškrtněte zde možnost 'Odchod v HERDEplus'. Tímto způsobem určíte, že zvířata, která opustila stádo, jsou také smazána ze zařízení VitalControl během synchronizace.
Také zaškrtněte možnost 'Neexistuje na skladě'. Tímto způsobem určíte, že zvířata na zařízení VitalControl, která nejsou známa softwaru `Herde`, jsou během synchronizace smazána z VitalControl.

## Konfigurace: Nastavení specifická pro technologii

Dále klikněte na záložku `Nastavení specifická pro technologii` pro určení rozsahu výměny dat. Doporučuje se zaškrtnout všechny zaškrtávací políčka uvedená tam kromě zaškrtávacího políčka `Uložit importní soubor po zpracování`. Toto poslední zaškrtávací políčko je určeno pro diagnostické účely a mělo by být vybráno pouze na žádost servisního personálu.

- **Maximální věk pro přenos**:  
  Pokud je zde zadána hodnota `0`, budou na zařízení VitalControl přenesena **všechna zvířata**, bez ohledu na jejich věk. Hodnota větší než `0` definuje maximální věk (ve dnech) pro zvířata, která mají být přenesena. Pokud mají být například přenesena na zařízení **pouze telata**, musí být zde zadána hodnota 90 dní (= 3 měsíce) jako maximální věk.

   ![Herde Software: Konfigurace Výměna dat](../screenshots/technology-specific-settings.png "Výměna dat: specifická nastavení").

## Uložit nastavení výměny dat

Stiskněte klávesu `Uložit (F2)` poté, co jste vhodně nakonfigurovali všechny konfigurační parametry. Sada parametrů pro výměnu dat na zařízení VitalControl je nyní uložena a připravena k použití.  
Proveďte nyní [výměnu dat](../data-exchange/), abyste zkontrolovali, zda jsou stanovená nastavení platná, aby se vám úspěšně podařilo vyměnit data do a ze zařízení VitalControl.
