/*******************************************************************************
*
* V I T A L C O N T R O L    D E M O N S T R A T I O N    A P P
*
*                                             specification: Urban GmbH & Co. KG
*                                         programming: Tara Systems GmbH, Munich
*
********************************************************************************
*
* Urban VitalControl is a novel equipment for digital health control of farm
* animals suitable for a variety of documentation and monitoring tasks.
*
* The device combines an RFID reader for animal transponders with a rectal
* fever thermometer. Data transfer and exchange is possible via USB, WiFi
* or bluetooth
*
* VitalControl device is developed and distributed by Urban GmbH & Co.KG:
* https://www.urbanonline.de
*
* For further information visit the product home page:
* https://www.vitalcontrol.de
*
* This file is part of demonstration application developed in order to be able
* to demonstrate the use of the device to both interested parties and 
* prospective customers.
*
* The demonstration application is browser based and can be run from inside any
*  WebGL enabled web browser (Firefox, Chrome, Edge, ...):
*
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acf)throw new Error("The unit file 'Strings.js' included twice!");index.
acf=(function(){var A=index;var C={};

C.Bhm={1:"AD pretvara\u010D temperature",2:"\u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E - \u0446\u0438\u0444\u0440\u043E\u0432 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435\u043D "+"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B"
,4:"P\u0159evodn\xEDk AD teploty",5:"AD-omformer temperatur",0:"AD Converter Temperature"
,6:"AD Converter Temperatuur",7:"AD-muunduri temperatuur",8:"AD Muuntimen L",9:"AD Convertisseur de temp\xE9rature"
,10:"AD Wandler Temperatur",11:"\u039C\u03B5\u03C4\u03B1\u03C4\u03C1\u03BF\u03C0\u03AD\u03B1\u03C2 \u0398\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+
"AD",12:"AD \xE1talak\xEDt\xF3 h\u0151m\xE9rs\xE9klet",16:"AD-omformer temperatur"
,20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E-^\u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E "+
"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E~\u0432\u0430\u0442\u0435\u043B\u044F"
,21:"Conversor de temperaturas",23:"Analog-Dijital(AD) \xC7evirici S\u0131cakl\u0131\u011F\u0131"
,24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E-\u0446\u0438\u0444\u043E\u0440\u0432\u043E\u0433\u043E "+
"\u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0447\u0430"
};C.Bhn="(\xD8 {1} {2})";C.AL2={1:"prosje\u010Dan prirast, \xD8\nod ro\u0111enja"
,2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u0440\u0430\u0436\u0434\u0430\u043D\u0435",3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u5F9E\u51FA\u751F\u6642"
,4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od narozen\xED",5:"Daglig v\xE6gt\xF8gning siden f\xF8dslen"
,0:"Daily weight gain, \xD8\nsince birth",6:"Dagelijkse toename, \xD8\nsinds geboorte"
,7:"P\xE4evane juurdekasv s\xFCnnist",8:"P\xE4ivitt\xE4inen pai~non~nousu, \xD8 syn~ty~m\xE4st\xE4 l\xE4htien"
,9:"Gain de poids quo~ti~dienne, \xD8 depuis la naissance",10:"Mittlere t\xE4gliche\nZunahme seit Geburt"
,11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7",12:"Napi s\xFAlygyarapod\xE1s sz\xFClet\xE9s \xF3ta"
,16:"Snitt daglig tilvekst fra f\xF8dsel",20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441 \u0441 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,21:"Ganancia diaria, \xD8\ndesde el nacimiento",23:"G\xFCnl\xFCk A\u011F\u0131rl\u0131k Art\u0131\u015F\u0131, \xD8\n Do\u011Fumdan "+
"\u0130tibaren",24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442 \u0437 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bho={1:"prosje\u010Dan prirast, \xD8\nod prvog vaganja",2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u043F\u044A\u0440\u0432\u043E\u0442\u043E \u0442\u0435\u0433\u043B\u0435\u043D\u0435"
,3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u81EA\u9996\u6B21\u7A31\u91CD\u4EE5\u4F86"
,4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od prvn\xEDho v\xE1\u017Een\xED",
5:"Daglig v\xE6gt\xF8gning siden f\xF8rste vejning",0:"Daily weight gain, \xD8\nsince first weighing"
,6:"Dagelijkse toename, \xD8\nsinds eerste weging",7:"P\xE4evane juurdekasv alates esimesest kaalumisest"
,8:"P\xE4ivitt\xE4inen pai~non~nousu, \xD8 ensimm\xE4isen punnituksen j\xE4lkeen"
,9:"Gain de poids quo~ti~dienne, \xD8 puis la premi\xE8re pes\xE9e",10:"T\xE4gliche Zunahme, \xD8\nseit erster Wiegung"
,11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03B1\u03C0\u03BF\u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03B9\u03C3\u03BC\u03CC"
,12:"Napi s\xFAlygyarapod\xE1s, \xD8\naz els\u0151 m\xE9rlegel\xE9s \xF3ta",16:"Snitt daglig tilvekst fra f\xF8rste veiing"
,20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441, \xD8\n\u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",21:"Ganancia diaria, \xD8\ndesde el primer pesaje"
,23:"G\xFCnl\xFCk A\u011F\u0131rl\u0131k Art\u0131\u015F\u0131, \xD8\n \u0130lk "+
"Tart\u0131mdan Bu Yana",24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442, \xD8\n\u0437 \u043F\u0435\u0440\u0448\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"};C.AuF={1:"prosje\u010Dan prirast, \xD8\nod zadnjeg vaganja"
,2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E "+
"\u0442\u0435\u0433\u043B\u0435\u043D\u0435",3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u81EA\u4E0A\u4E00\u6B21\u7A31\u91CD\u4EE5\u4F86"
,4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od posledn\xEDho v\xE1\u017Een\xED"
,5:"Daglig v\xE6gt\xF8gning siden sidste vejning",0:"Daily weight gain, \xD8\nsince last weighing"
,6:"Dagelijkse toename, \xD8\nsinds laatste weging",7:"P\xE4evane juurdekasv alates viimasest kaalumisest"
,8:"P\xE4ivitt\xE4inen painonnousu, \xD8\nviimeisen punnituksen j\xE4lkeen",9:"Gain de poids quo~ti~dienne, \xD8 puis la der~ni\xE8re pes\xE9e"
,10:"Mittl. t\xE4gl. Zunahme\nseit letzter Wiegung",11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03BF \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03B1\u03C0\u03BF\u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03B9\u03C3\u03BC\u03CC"
,12:"Napi s\xFAlygyarapod\xE1s, \xD8\naz utols\xF3 m\xE9r\xE9s \xF3ta",16:"Snitt daglig tilvekst fra siste veiing"
,20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441\n\u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",21:"Ganancia diaria, \xD8\ndesde el \xFAltimo pesaje"
,23:"G\xFCnl\xFCk A\u011F\u0131rl\u0131k Art\u0131\u015F\u0131, \xD8\n Son "+"Tart\u0131mdan Bu Yana"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442\n\u0437 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"};C.A47={1:"Nemjerljivo za vaganje\nna isti dan"
,2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0438 "+
"\u043F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435\n\u0432 \u0441\u044A\u0449\u0438\u044F "+
"\u0434\u0435\u043D",4:"Nevypo\u010Ditateln\xE9 pro v\xE1\u017Een\xED\nve stejn\xFD den"
,5:"Uberegnelig for vejning\np\xE5 samme dag",0:"Uncalculable for weighing\non the same day"
,6:"Niet berekenbaar",7:"P\xE4evast juurdekasvu ei saa arvutada",8:"Painonnousu voidaan laskea vain yhden tuloksen mukaan /pv"
,9:"Non calculable pour les pes\xE9es du m\xEAme jour ",10:"Nicht berechenbar bei\nWiegung am selben Tag"
,11:"\u0391\u03BD\u03C5\u03C0\u03BF\u03BB\u03CC\u03B3\u03B9\u03C3\u03C4\u03BF "+
"\u03B3\u03B9\u03B1 \u03B6\u03CD\u03B3\u03B9\u03C3\u03B7\n\u03C4\u03B7\u03BD "+"\u03AF\u03B4\u03B9\u03B1 \u03BC\u03AD\u03C1\u03B1"
,12:"Nem sz\xE1m\xEDthat\xF3 meg ugyanazon a napon",16:"Um\xE5lelig for veiing p\xE5 samme dag"
,20:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C "+
"\u0434\u043B\u044F \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F "+
"\u0432 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0435\u043D\u044C",21:"No calculable en el mismo\nd\xEDa del pesaje"
,23:"Ayn\u0131 G\xFCne Ait \u0130ki A\u011F\u0131rl\u0131k \xD6l\xE7\xFCm\xFC "+
"\u0130le Hesap Yap\u0131lamaz",24:"\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u043B\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0432 \u0442\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u0434\u0435\u043D\u044C"
};C.AL3={2:"\u0434",0:"d",6:"D",7:"P\xE4ev",8:"pv",9:"J",10:"T",11:"\u03B7",12:"n"
,16:"D",20:"\u0434",23:"G",24:"\u0434"};C.Bhq={2:"\u043C",5:"M",0:"m",6:"M",7:"Kuu"
,8:"kk",9:"M",10:"M",11:"\u03BC",12:"h",16:"M",20:"\u043C",23:"A",24:"\u043C"};C.
Bhr={1:"god",2:"\u0433",4:"R",5:"\xC5",0:"y",6:"J",7:"Aasta",8:"v",9:"A",10:"J",
11:"\u03B5",12:"\xE9",16:"\xC5",20:"\u0433",21:"a",23:"Y",24:"\u0440"};C.About={
1:"o",2:"\u041E\u0442\u043D\u043E\u0441\u043D\u043E",3:"\u95DC\u65BC",4:"O",5:"Om"
,0:"About",6:"Over",7:"Meist",8:"Lis\xE4tieto",9:"\xC0 propos de",10:"\xDCber",11:
"\u03A3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC",12:"K\xF6r\xFClbel\xFCl",16:"Om",20:
"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",21:"Sobre",23:"Bilgi"
,24:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"};C.TB={1:"Lanac radnji"
,2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430~\u0442\u0435\u043B\u043D\u043E\u0441\u0442 "+
"\u043E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",4:"\u0158et\u011Bzec akc\xED"
,5:"K\xE6de af handlinger",0:"Chain of actions",6:"Opeenvol~gende acties",7:"Tegevuste ahel"
,8:"Toimintaketju",9:"Cha\xEEne d\'actions",10:"Aktions~kette",11:"\u0391\u03BB\u03C5\u03C3\u03AF\u03B4\u03B1 \u03B4\u03C1\u03AC\u03C3\u03B5\u03C9\u03BD"
,12:"Cselekv\xE9s~sorozat",16:"Handlingskjede",20:"\u0426\u0435\u043F\u043E\u0447\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,21:"Cadena de acciones",23:"Hareket Zinciri",24:"\u041B\u0430\u043D\u0446\u044E\u0433 \u0434\u0456\u0439"
};C.ActionList={1:"lista aktivnosti",2:"\u0421\u043F\u0438\u0441\u044A\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5\u6E05\u55AE",4:"Seznam akc\xED",5:"Handlingsliste",0:"Action list"
,6:"Actielijst",7:"Tegevuste loend",8:"Toimintalista",9:"Liste d\u2019action",10:
"Aktionsliste",11:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,12:"Feladatlista",16:"Aksjons liste",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,21:"Lista de acci\xF3n",23:"Hareket Listesi",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0456\u0439"
};C.AuI={1:"Meni svih aktivnosti",2:"\u041C\u0435\u043D\u044E \u0441 \u0432\u0441\u0438\u0447\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u5168\u529F\u80FD\u9078\u55AE",4:"Nab\xEDdka",5:"Fuld handlingsmenu",0:"Full action menu"
,6:"Actiemenu",7:"Tegevuste men\xFC\xFC",8:"Toimintavalikko",9:"Menu d\u2019actions"
,10:"Aktionsmen\xFC",11:"\u039C\u03B5\u03BD\u03BF\u03CD \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,12:"Teljes akci\xF3men\xFC",16:"Full aksjons meny",20:"\u041C\u0435\u043D\u044E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,21:"Men\xFA acciones",23:"Tam Hareket Men\xFCs\xFC",24:"\u041F\u043E\u0432\u043D\u0435 \u043C\u0435\u043D\u044E \u0434\u0456\u0439"
};C.Ajj={1:"Aktivnost {1}",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 {1}"
,4:"Akce {1}",5:"Handling {1}",0:"Action {1}",6:"Actie {1}",7:"Tegevus {1}",8:"Toiminto {1}"
,10:"Aktion {1}",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 {1}",12:"Akci\xF3 {1}"
,16:"Handling {1}",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 {1}",21:
"Acci\xF3n {1}",23:"Eylem {1}",24:"\u0414\u0456\u044F {1}"};C.ActionSettings={1:
"Pode\u0161avanje aktivnosti",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5\u8A2D\u5B9A\u503C",4:"Nastaven\xED",5:"Indstillinger for handling"
,0:"Action settings",6:"Instellingen acties",7:"Tegevuste seaded",8:"Toiminta-asetukset"
,9:"R\xE9glages d\u2019actions",10:"Einstellungen Aktionen",11:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,12:"Akci\xF3n be\xE1ll\xEDt\xE1sok",16:"Aksjon innstillinger",20:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,21:"Ajustes acciones",23:"Eylem ayarlar\u0131",24:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0434\u0456\u0439"};C.Vw={1:"Aktivnosti",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5",4:"Akce",5:"Handlinger",0:"Actions",6:"Acties",7:"Tegevused",8:
"Toiminnat",9:"Action",10:"Aktionen",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2"
,12:"Cselekv\xE9sek",16:"Aksjoner",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,21:"Acciones",23:"Eylemler",24:"\u0414\u0456\u0457"};C.A5e={1:"Dodaj na listu za pra\u0107enje"
,2:"\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043A\u044A\u043C \u0441\u043F\u0438\u0441\u044A\u043A\u0430 "+
"\u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435",4:"P\u0159idat na seznam sledov\xE1n\xED"
,5:"Tilf\xF8j til overv\xE5gningsliste",0:"Add to watch list",6:"Toevoegen aan Watchlist"
,7:"Lisa j\xE4lgimisnimekirja",8:"Lis\xE4\xE4 katsottavien listaan",9:"Ajouter \xE0 la liste de suivi"
,10:"Zur Beobachtungsliste hinzuf\xFCgen",11:"\u03A0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2"
,12:"Hozz\xE1ad\xE1s a megfigyel\xE9si list\xE1hoz",16:"Legg til i overv\xE5kningslisten"
,20:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",21:"A\xF1adir a la lista de seguimento"
,23:"\u0130zleme Listesine Ekle",24:"\u0414\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F"
};C.RQ={1:"starost",2:"\u0412\u044A\u0437\u0440\u0430\u0441\u0442",3:"\u5E74\u9F61"
,4:"V\u011Bk",5:"Alder",0:"Age",6:"Leef~tijd",7:"Vanus",8:"Ik\xE4",9:"\xC2ge",10:
"Alter",11:"\u0397\u03BB\u03B9\u03BA\u03AF\u03B1",12:"Kor",16:"Alder",20:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442"
,21:"Edad",23:"Ya\u015F",24:"\u0412\u0456\u043A"};C.AdT={1:"Starost (novo tele/jagnje)"
,2:"\u0412\u044A\u0437\u0440\u0430\u0441\u0442 (\u043D\u043E\u0432\u043E \u0442\u0435\u043B\u0435/\u0430\u0433\u043D\u0435)"
,4:"V\u011Bk (nov\xE9 tele/jehn\u011B)",5:"Alder (ny kalv/lam)",0:"Age (new calf/lamb)"
,6:"Leeftijd nieuw kalf/lam",7:"Vanus (noor vasikas/lammas)",8:"Ik\xE4 (uusi vasikka/lammas)"
,9:"\xC2ge (Nouveau jeune animal)",10:"Alter neues Jungtier",11:"\u0397\u03BB\u03B9\u03BA\u03AF\u03B1 (\u03BD\u03B5\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C4\u03BF "+
"\u03BC\u03BF\u03C3\u03C7\u03B1\u03C1\u03AC\u03BA\u03B9/\u03B1\u03C1\u03BD\u03AC\u03BA\u03B9)"
,12:"Kor (\xFAjsz\xFCl\xF6tt borj\xFA/b\xE1r\xE1ny)",16:"Alder (ny kalv/lam)",20:
"\u0412\u043E\u0437\u0440\u0430\u0441\u0442 (\u043D\u043E\u0432\u043E\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0439 "+
"\u0442\u0435\u043B\u0435\u043D\u043E\u043A/\u044F\u0433\u043D\u0435\u043D\u043E\u043A)"
,21:"Edad (ternero/cordero)",23:"Ya\u015F(Yeni buza\u011F\u0131/kuzu)",24:"\u0412\u0456\u043A (\u043D\u043E\u0432\u043E\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u0435 "+
"\u0442\u0435\u043B\u044F/\u044F\u0433\u043D\u044F)"};C.Alarm={2:"\u0410\u043B\u0430\u0440\u043C\u0430"
,3:"\u8B66\u5831",0:"Alarm",7:"Hoiatus",8:"H\xE4lytys",9:"Alarme",11:"\u03A3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CC\u03C2"
,12:"\xC9breszt\u0151",20:"\u0421\u0438\u0433\u043D\u0430\u043B",21:"Alarma",24:
"\u0421\u0438\u0433\u043D\u0430\u043B"};C.Bhx={1:"ve\u0107 povezani",2:"\u0412\u0435\u0447\u0435 \u0435 \u043F\u0440\u0438\u0431\u0430\u0432\u0435\u043D"
,4:"Ji\u017E p\u0159id\u011Bleno",5:"Allerede tildelt",0:"Already assigned",6:"al toegewezen"
,7:"Juba m\xE4\xE4ratud",8:"Jo m\xE4\xE4ritetty",9:"D\xE9j\xE0 attribu\xE9",10:"Bereits verkn\xFCpft"
,11:"\u0389\u03B4\u03B7 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF"
,12:"M\xE1r ki van osztva",16:"Allerede tildelt",20:"\u0423\u0436\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u044B"
,21:"Ya asignado/a",23:"Halihaz\u0131rda Atanm\u0131\u015F",24:"\u0412\u0436\u0435 \u0437\u0432\'\u044F\u0437\u0430\u043D\u0456"
};C.Animal={1:"\u017Eivotinja",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E",3:
"\u5C0F\u725B",4:"Zv\xED\u0159e",5:"Dyr",0:"Animal",6:"Dier",7:"Loom",8:"El\xE4in"
,10:"Einzeltier",11:"\u0396\u03CE\u03BF",12:"\xC1llat",16:"Dyr",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Animal individual",23:"Hayvan",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430"
};C.AdV={1:"podaci o \u017Eivotinji",2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u8CC7\u6599",4:"Data o zv\xED\u0159eti",5:"Dyredata",0:"Animal data"
,6:"Dier data",7:"Looma info",8:"Tietoa el\xE4imist\xE4",9:"Donn\xE9es de l\u2019animal"
,10:"Tierdaten",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llatadatok",16:"Dyr- data",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Datos animales",23:"Hayvan Verisi",24:"\u0414\u0430\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Bhy={1:"Podaci o \u017Eivotinji: Br. markice za uho",2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043E: "+
"\u2116 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430",4:"\xDAdaje o zv\xED\u0159eti: \u010D. n\xE1u\u0161nice"
,5:"Dyredatabase: Nummer \xF8rem\xE6rke",0:"Animal data: \u2116 eartag",6:"Dierengegevens: nr. oormerk"
,7:"Looma andmed: \u2116 k\xF5rvam\xE4rk",10:"Tierdaten: \u2116 Ohrmarke",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5: "+
"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD",12:"\xC1llat adatok: f\xFClc\xEDmke sz\xE1ma"
,16:"Dyredatabase: Nummer \xF8remerke",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E: "+
"\u2116 \u0431\u0438\u0440\u043A\u0438",23:"Hayvan Verisi: K\xFCpe \u2116",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443: "+
"\u2116 \u0441\u0435\u0440\u0435\u0436\u043A\u0438 (\u0432\u0443\u0448\u043D\u043E\u0457 "+
"\u043C\u0456\u0442\u043A\u0438)"};C.A5m={1:"Podaci o \u017Eivotinji: spol+vrsta"
,2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E: "+
"\u043F\u043E\u043B+\u0442\u0438\u043F",4:"Data o zv\xED\u0159eti: pohlav\xED+druh"
,5:"Dyredata: k\xF8n+type",0:"Animal data: sex+type",6:"Dierlijke gegevens: geslacht+type"
,7:"Looma andmed: sugu+t\xFC\xFCp",10:"Tierdaten: Geschlecht+Typ",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5: "+
"\u03C6\u03CD\u03BB\u03BF+\u03B5\u03AF\u03B4\u03BF\u03C2",12:"\xC1llat adatok: nem+t\xEDpus"
,16:"Dyredat: kj\xF8nn+type",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445: "+
"\u043F\u043E\u043B+\u0442\u0438\u043F",23:"Hayvan Verisi: cinsiyet+tip",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443: "+
"\u0441\u0442\u0430\u0442\u044C+\u0442\u0438\u043F"};C.AnimalDataOnly={1:"samo podaci o \u017Eivotinjama"
,2:"\u0421\u0430\u043C\u043E \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,4:"Data pouze o zv\xED\u0159atech",5:"Data kun om dyr",0:"Animal data only",6:"Alleen dierdata"
,7:"Ainult looma info",8:"Vain el\xE4intiedot",9:"Uniquement donn\xE9es des animaux"
,10:"Nur Tierdaten",11:"\u039C\u03CC\u03BD\u03BF \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF\u03C5",12:"Csak \xE1llatadatok",16:"Data bare for dyr",20:"\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",21:"Solo datos de animales"
,23:"Sadece Hayvan Verisi",24:"\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u0430\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AMr={1:"istorija \u017Eivotinje",2:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435"
,3:"\u52D5\u7269\u6B77\u53F2\u6A94\u6848",4:"Historie zv\xED\u0159ete",5:"Dyrs historie"
,0:"Animal\u2019s history",6:"Dierhistorie",7:"Looma ajalugu",8:"El\xE4in historia"
,9:"Historique d\u2019animaux",10:"Tierhistorie",11:"\u0399\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03B6\u03CE\u03C9\u03BD"
,12:"\xC1llatok t\xF6rt\xE9nete",16:"Dyrenes historikk",20:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0442\u0440\u0435\u0432\u043E\u0433"
,21:"Historial del animal",23:"Hayvan ge\xE7mi\u015Fi",24:"\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0442\u0440\u0438\u0432\u043E\u0433"
};C.GI={1:"ID \u017Eivotinje",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116"
,3:"\u5C0F\u725B\u8B58\u5225\u865F",4:"ID zv\xED\u0159ete",5:"Dyrets ID",0:"Animal ID"
,6:"Diernummer",7:"Looma ID",8:"El\xE4in ID",9:"ID de l\u2019animal",10:"Tiernummer"
,11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"\xC1llat azonos\xEDt\xF3",16:"Dyr-ID",20:"\u041D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"No. del crotal",23:"Hayvan Kimli\u011Fi(ID)",24:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A5o={1:"Odlazak \u017Eivotinje?",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u043D\u0430\u043F\u0443\u0441\u043A\u0430\u0449\u043E "+
"\u0444\u0435\u0440\u043C\u0430\u0442\u0430",4:"Zv\xED\u0159e opou\u0161t\xED farmu"
,5:"Dyr forlader g\xE5rd",0:"Animal leaves farm",6:"Dier verlaat bedrijf",7:"Loom farmist lahkunud"
,8:"El\xE4in poistunut tilalta",9:"Animal quitte la ferme",10:"Abgang vom Betrieb?"
,11:"\u0391\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7 \u03B6\u03CE\u03BF\u03C5 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1",12:"\xC1llat elhagyja a farmot"
,16:"Dyr- forlater g\xE5rden",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u0435\u0442 "+
"\u0444\u0435\u0440\u043C\u0443?",21:"Salida de la granja",23:"Hayvan \xC7iftli\u011Fi Terk Ediyor"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u043F\u043E\u043A\u0438\u0434\u0430\u0454 "+
"\u0444\u0435\u0440\u043C\u0443?"};C.ABQ={1:"Odabir spiska \u017Eivotinja",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441\u043F\u0438\u0441\u044A\u043A\n\u0437\u0430 "+
"\u0441\u0435\u043B\u0435\u043A\u0446\u0438\u044F",3:"\u5C0F\u725B\u6E05\u55AE\n\u4F9B\u9078\u64C7"
,4:"Seznam zv\xED\u0159at pro v\xFDb\u011Br",5:"Dyreliste\ntil valg",0:"Animal list\nfor selection"
,6:"Dierlijst voor selectie dier",7:"Looma nimekiri/info valik",8:"El\xE4inluettelo\nvalintaa varten"
,9:"Liste d\u2019animaux\npour s\xE9lectionner",10:"Tierliste zur Tierauswahl",11:
"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD \u03C0\u03C1\u03CC\u03C2 "+
"\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE",12:"\xC1llatlista\na kiv\xE1laszt\xE1shoz"
,16:"Dyr-liste\nfor utvalg",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430",21:"Lista animales\npara seleccionar animal"
,23:"Se\xE7im \u0130\xE7in\n Hayvan Listesi",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443"};C.AnimalLoss={1:"gubitak \u017Eivotinje"
,2:"\u0423\u043C\u0440\u044F\u043B\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u907A\u5931",4:"Zv\xED\u0159e ztraceno",5:"Dyretab",0:"Animal loss"
,6:"Dier verloren",7:"Loom kadunud",8:"El\xE4inten menetys",9:"Perte d\u2019animaux"
,10:"Tierverlust",11:"\u0391\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llatveszt\xE9s",16:"Dyr- Tapt",20:"\u041F\u043E\u0442\u0435\u0440\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"P\xE9rdida del animal",23:"Hayvan Kayb\u0131",24:"\u0412\u0442\u0440\u0430\u0442\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AnimalNotFound={1:"\u017Eivotinju sa ID {1} nije mogu\u0107e prona\u0107i",2:
"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u043D\u0435 \u0435 "+"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043E"
,3:"\u672A\u767C\u73FE\u725B\u96BB{1}",4:"Zv\xED\u0159e s ID {1} nenalezeno",5:"Dyr med ID {1} ikke fundet"
,0:"Animal with ID {1} not found",6:"Dier met ID {1} kon niet gevonden worden",7:
"Looma ID {1} pole leitav",8:"El\xE4int\xE4 Id {1} ei l\xF6ydy",9:"Animal avec\nID {1} introuvable"
,10:"Tier mit ID {1} konnte nicht gefunden werden",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",12:"Azonos\xEDt\xF3val {1} rendelkez\u0151 \xE1llat nem tal\xE1lhat\xF3."
,16:"Dyr- ikke funnet",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",21:"No se encontr\xF3 el animal con la ID {1}"
,23:"Hayvan bulunamad\u0131",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430"
};C.BhE={1:"\u017Eivotinja sa ID {1} jo\u0161 nije registrovan",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u043D\u0435 \u0435 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E "+"\u0432\u0441\u0435 \u043E\u0449\u0435"
,3:"\u7DE8\u865F\u70BA{1}\u7684\u5C0F\u725B\u5C1A\u672A\u8A3B\u518A",4:"Zv\xED\u0159e s ID {1} nebylo registrov\xE1no"
,5:"Dyr med ID {1} er endnu ikke registreret",0:"Animal with ID {1} not registered yet"
,6:"Dier met ID {1} nog niet in systeem aangelegd",7:"Looma ID {1} pole veel registeeritud"
,8:"El\xE4int\xE4, jonka tunnus on {1}, ei ole viel\xE4 rekister\xF6ity",9:"Animal avec ID {1} non encore enregistr\xE9"
,10:"Tier mit der ID {1} noch nicht im System angelegt",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C5\u03C4\u03CC "+
"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B1.",12:"Az {1} azonos\xEDt\xF3j\xFA \xE1llat m\xE9g nincs regisztr\xE1lva."
,16:"Dyr- ikke registrert enda",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435",21:"Animal con ID {1} a\xFAn no registrado"
,23:"{1} Kimliklik Hayvan Hen\xFCz Kaydedilmedi",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0449\u0435 \u043D\u0435 "+
"\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0456"};C.A5p={1:"Uginu\u0107e?",2:
"\u0423\u043C\u0440\u044F\u043B\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E?"
,3:"\u5C0F\u725B\u6B7B\u4E86\u55CE\uFF1F",4:"Zv\xED\u0159e zem\u0159elo",5:"Dyr omkommet?"
,0:"Animal perished?",6:"Dier dood?",7:"Loom hukkunud",8:"El\xE4in menehtyi?",9:
"L\u2019animal a p\xE9ri\xA0?",10:"Tier verendet?",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03C0\u03AD\u03B8\u03B1\u03BD\u03B5;"
,12:"Az \xE1llat elpusztult?",16:"Dyr d\xF8de",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u0433\u0438\u0431\u043B\u043E?"
,21:"\xBFAnimal muerto?",23:"Hayvan telef mi oldu?",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437\u0430\u0433\u0438\u043D\u0443\u043B\u0430?"
};C.A5r={1:"\u017Divotinje",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u0438",4:"Zv\xED\u0159ata"
,5:"Dyr",0:"Animals",6:"Dieren",7:"Loomad",8:"El\xE4imet",9:"Les animaux",10:"Tiere"
,11:"\u0396\u03CE\u03B1",12:"\xC1llatok",16:"Dyr",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,21:"Animales",23:"Hayvanlar",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438"};C.
A5s={1:"Lampa za osvjetljenje mjesta za mjerenje temperature",2:"\u041E\u0441\u0432\u0435\u0442\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0430\u043D\u0443\u0441\u0430",3:"\u809B\u6EAB\u6E2C\u91CF",4:"Anus vy\u0161et\u0159en\xED"
,0:"Anus spotlighting",6:"Verlichting Meetpunt",7:"P\xE4raku valgustus",8:"Mittauskohteen valo"
,9:"Eclairage de l\u2019anus",10:"Beleuchtung Messort",11:"\u03A4\u03BF\u03C0\u03B9\u03BA\u03CC\u03C2 \u03C6\u03C9\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C0\u03C1\u03C9\u03BA\u03C4\u03BF\u03CD.",12:"\"V\xE9gb\xE9l megvil\xE1g\xEDt\xE1s\""
,16:"Rektum spotlys",20:"\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 \u043C\u0435\u0441\u0442\u0430 "+
"\u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",21:"Iluminaci\xF3n del ano"
,23:"An\xFCs Nokta Ayd\u0131nlatma",24:"\u041F\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043C\u0456\u0441\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A5u={1:"primjeni",2:"\u041F\u0440\u0438\u043B\u043E\u0436\u0438",3:"\u5957\u7528"
,4:"Aplikovat",5:"Ans\xF8g",0:"Apply",6:"Toepassen",7:"Kohalda",8:"K\xE4yt\xE4",
9:"Appliquer",10:"Anwenden",11:"\u0395\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03C4\u03B5"
,12:"Alkalmaz",16:"S\xF8k",20:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"
,21:"Aplicar",23:"Uygula",24:"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438"
};C.A5x={1:"Dodijeli ID markicu",2:"\u0412\u044A\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0443\u0448\u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0430",4:"\u010C\xEDslo zna\u010Dky ve uchu",5:"Opgave \xF8rem\xE6rke nummer"
,0:"Assignment ear tag number",6:"Toevoegen Oormerk",7:"\xDClesande k\xF5rvam\xE4rgi number"
,8:"Teht\xE4v\xE4 korvamerkin numero",9:"Attribution d\u2019un \u2116 de boucle auriculaire"
,10:"Zuordnung Ohrmarkennr.",11:"\u0391\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD "+
"\u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5",12:"Kijel\xF6lt f\xFClc\xEDmke sz\xE1m"
,16:"Oppdrag \xF8remerkenummer",20:"\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0448\u043D\u043E\u0439 "+
"\u0431\u0438\u0440\u043A\u0438 \u2116",21:"Asignaci\xF3n del n\xFAmero de la marca auricular"
,23:"Kulak K\xFCpe Numaras\u0131 \u0130\xE7in Atama",24:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\n\u0432\u0443\u0448\u043D\u043E\u0457 "+
"\u0431\u0456\u0440\u043A\u0438 \u2116"};C.Aql={1:"Zadatak \u017Eivotinjski ID",
2:"\u0417\u0430\u0434\u0430\u0432\u0430\u043D\u0435 ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,4:"P\u0159i\u0159azen\xED identifika\u010Dn\xEDho \u010D\xEDsla zv\xED\u0159ete"
,5:"Opgave dyre-ID",0:"Assignment animal ID",6:"Toevoegen Diernummer",7:"\xDClesande looma ID"
,8:"El\xE4imen numeron antaminen",9:"Attribution du \u2116 d\'animal",10:"Vergabe Tiernummer"
,11:"\u0391\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03B6\u03C9\u03B9\u03BA\u03BF\u03CD "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"Feladat \xE1llat azonos\xEDt\xF3",16:"Oppgave dyre-ID",20:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ID \u0434\u043B\u044F "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",21:"Asignaci\xF3n de ID de animal"
,23:"Hayvan Kimlik Atama",24:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u0438 ID \u0434\u043B\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A5y={1:"nasumice",2:"\u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E"
,4:"n\xE1hodn\u011B",5:"tilf\xE6ldigt",0:"at random",6:"toevallig",7:"Juhuslikult"
,8:"sattuman~varaisesti",9:"Valeur al\xE9atoire",10:"Zufallswert",11:"\u039A\u03B1\u03C4\u03AC \u03C4\u03CD\u03C7\u03B7"
,12:"v\xE9letlen~szer\u0171en",16:"Tilfeldig",20:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
,21:"Valor al azar",23:"Rastgele",24:"\u0412\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Aqn={1:"dodijeljen ID broj",2:"\u041F\u0440\u0438\u0431\u0430\u0432\u0435\u043D \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 (\u2116)",4:"P\u0159id\u011Blen\xE9 ID",5:"Tildelt ID"
,0:"Assigned ID",6:"automatisch dier toevoegen",7:"ID m\xE4\xE4ratud",8:"Annettu ID tunnus"
,9:"ID assign\xE9e",10:"Neue Tier-Nr.",11:"\u0391\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC"
,12:"Kijel\xF6lt azonos\xEDt\xF3",16:"Tildelt ID",20:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u2116",21:"ID asignado",23:"Otomatik Atanm\u0131\u015F Kimlik",24:"\u041D\u043E\u0432\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430 \u2116"
};C.Aa4={1:"automatski uklju\u010Di/isklju\u010Di",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0412\u043A\u043B/\u0418\u0437\u043A\u043B"
,3:"\u81EA\u52D5\u6E2C\u91CF\u958B/\u95DC",4:"Auto ZAP/VYP",5:"Automatisk T\xC6ND/SLUK"
,0:"Auto ON/OFF",6:"Aan/Uit-Automatic",7:"Automaatne sisse/v\xE4lja l\xFClitamine"
,10:"Ein/Aus-Automatik",11:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF \u03AC\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1/\u03BA\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF"
,12:"Automatikus be-/kikapcsol\xE1s",16:"Auto AV/P\xC5",20:"\u0410\u0432\u0442\u043E \u0412\u041A\u041B./\u0412\u042B\u041A\u041B."
,23:"Otomatik A\xC7/KAPA",24:"\u0410\u0432\u0442\u043E \u0423\u0412\u0406\u041C\u041A./\u0412\u0418\u041C\u041A."
};C.Aqo={1:"\u017Divotinje automatski registrirati",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
,3:"\u81EA\u52D5\u767B\u9304",4:"Autoregistrace",5:"Selvregistrering",0:"Auto-registration"
,6:"Dieren automatisch registreren",7:"Automaatne registreerimine",8:"Autom rekister\xF6inti"
,9:"Enregistrer animaux automatiques",10:"Tiere automatisch anlegen",11:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE"
,12:"Automatikus regisztr\xE1ci\xF3",16:"Automatisk registrering",20:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445"
,21:"Autoregistro",23:"Otomatik kay\u0131t",24:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D"};C.Automatic={1:"automatski",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E"
,3:"\u81EA\u52D5\u5316",4:"Automatick\xE1",5:"Automatisk",0:"Automatic",6:"Automatisch"
,7:"Automaatne",8:"Automaatti",9:"Automatique",10:"Automatisch",11:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF"
,12:"Automatikus",16:"Automatisk",20:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438"
,21:"Autom\xE1tico",23:"Otomatik",24:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E"
};C.A5A={1:"prosje\u010Dna te\u017Eina prilikom ro\u0111enja",2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0442\u0435\u0433\u043B\u043E \u043F\u0440\u0438 "+
"\u0440\u0430\u0436\u0434\u0430\u043D\u0435",4:"Pr\u016Fm\u011Brn\xE1 porodn\xED hmotnost"
,5:"Gennemsnitlig f\xF8dselsv\xE6gt",0:"Average birth weight",6:"gemiddelde geboorte gewicht"
,7:"Keskmine s\xFCnnikaal",8:"Syntym\xE4paino ka",9:"Poids moyen de naissance",10:
"Mittleres Geburtsgewicht",11:"\u039C\u03AD\u03C3\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2 \u03BA\u03B1\u03C4\u03AC "+
"\u03C4\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B1",12:"\xC1tlagos sz\xFClet\xE9si s\xFAly"
,16:"Gjennomsnittlig f\xF8dselsvekt",20:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u043F\u0440\u0438 "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",21:"Peso medio al nacer",23:"Ortalama Do\u011Fum A\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0430\u0433\u0430 \u043F\u0440\u0438 "+
"\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"};C.A5B={1:"prosje\u010Dan dnevni prirast"
,2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0434\u043D\u0435\u0432\u0435\u043D "+
"\u043F\u0440\u0438\u0440\u0430\u0441\u0442",3:"\u5E73\u5747\u65E5\u589E\u91CD",
4:"Pr\u016Fm\u011Brn\xFD denn\xED p\u0159\xEDr\u016Fstek hmotnosti",5:"Gennemsnitlig daglig v\xE6gt\xF8gning"
,0:"Average daily weight gain",6:"Gem. dagl. gewichtstoename",7:"Keskmine p\xE4evane juurdekasv"
,8:"Ka p\xE4iv\xE4kasvu",9:"Prise de poids quo~ti~dienne moyenne",10:"Mittlere t\xE4gl. Zunahme"
,11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2",12:"\xC1tlagos napi s\xFAlygyarapod\xE1s"
,16:"Gjennomsnittlig daglig tilvekst",20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441",21:"Ganancia diaria promedia",23:"Ortalama G\xFCnl\xFCk A\u011F\u0131rl\u0131 Kazan\u0131m\u0131"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442"};C.BhK={1:"\xD8 Prirast: {1} {2}",2:
"\xD8 \u041F\u0440\u0438\u0440\u0430\u0441\u0442: {1} {2}",3:"\xD8\u9AD4\u91CD\u589E\u52A0\uFF1A{1} {2}"
,4:"P\u0159\xEDr\u016Fstek hmotnosti: {1} {2}",5:"V\xE6gt\xF8gning: {1} {2}",0:"\xD8 Weight gain: {1} {2}"
,6:"\xD8 Gewichtstoename: {1} {2}",7:"\xD8 Juurdekasv: {1} {2}",8:"\xD8 Painon~nousu: {1} {2}"
,9:"\xD8 Prise de poids\xA0: {1} {2}",10:"\xD8 Zunahme: {1} {2}",11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+"\u03B6\u03CE\u03BF\u03C5: {1} {2}"
,12:"S\xFAlyn\xF6veked\xE9s: {1} {2}",16:"Gj.snittlig tilv. (1) (2)",20:"\xD8 \u043F\u0440\u0438\u0432\u0435\u0441: {1} {2}"
,21:"\xD8 Ganancia: {1} {2}",23:"\xD8 A\u011F\u0131rl\u0131k Kazan\u0131m\u0131: {1} {2}"
,24:"\xD8 \u043F\u0440\u0438\u0440\u0456\u0441\u0442: {1} {2}"};C.A5C={1:"Prosje\u010Dna te\u017Eina \u017Eivotinje"
,2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0442\u0435\u0433\u043B\u043E \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",4:"Pr\u016Fm\u011Brn\xE1 hmotnost zv\xED\u0159ete"
,5:"Gennemsnitlig dyrev\xE6gt",0:"Average animal weight",6:"gemiddeld diergewicht"
,7:"Keskmine looma kaal",8:"Elinten paino keskim\xE4\xE4rin",9:"Poids moyen des animaux"
,10:"Mittleres Tiergewicht",11:"\u039C\u03AD\u03C3\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1tlagos \xE1llats\xFAly",16:"Gjennomsnittlig dyrevekt",20:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Peso medio del animal",23:"Ortalama Hayvan A\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0430\u0433\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BhM={1:"Kopiranje u toku!\n\nOvaj proces mo\u017Ee trajati minutu ili du\u017Ee, "+
"molimo vas da budete strpljivi!",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0430\u043D\u0435!\n\n\u0432 "+
"\u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0446\u0435\u0441 \u043C\u043E\u0436\u0435 "+
"\u0434\u0430 \u043E\u0442\u043D\u0435\u043C\u0435 \u043C\u0438\u043D\u0443\u0442\u0430 "+
"\u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435, \u043C\u043E\u043B\u044F, "+
"\u0431\u044A\u0434\u0435\u0442\u0435 \u0442\u044A\u0440\u043F\u0435\u043B\u0438\u0432\u0438!"
,4:"Z\xE1lohov\xE1n\xED prob\xEDh\xE1!\n\nTento proces m\u016F\u017Ee trvat "+"minutu nebo d\xE9le, pros\xEDm o trp\u011Blivost!"
,5:"Sikkerhedskopi i gang!\n\nDenne proces kan tage et minut eller l\xE6ngere, "+
"v\xE6r venlig at v\xE6re t\xE5lmodig!",0:"Backup in progress!\n\nThis process may take a minute or longer, please "+
"be patient!",6:"Back up in behandeling. Dit duurt een minuut of langer, wees geduldig!"
,7:"Varundamine k\xE4ib!\n\nSee protsess v\xF5ib v\xF5tta minut v\xF5i kauem, "+
"palun ole kannatlik!",8:"Varmuuskopiointi k\xE4ynniss\xE4!\n\nT\xE4m\xE4 prosessi voi kest\xE4\xE4 "+
"minuutin tai kauemmin, ole k\xE4rsiv\xE4llinen!",9:"La sauvegarde des donn\xE9es est en cours!\nCe processus peut prendre une "+
"minute ou plus, un peu de patience s\'il vous pla\xEEt\xA0!",10:"Datensicherung wird erstellt!\n\nDieser Vorgang kann eine Minute oder "+
"l\xE4nger dauern, etwas Geduld bitte!",11:"\u0391\u03BD\u03C4\u03AF\u03B3\u03C1\u03B1\u03C6\u03BF \u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 "+
"\u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7!\n\n\u0397 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 "+
"\u03B1\u03C5\u03C4\u03AE \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 "+"\u03B4\u03B9\u03B1\u03C1\u03BA\u03AD\u03C3\u03B5\u03B9 \u03AD\u03BD\u03B1 "+
"\u03BB\u03B5\u03C0\u03C4\u03CC \u03AE \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03BF, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03BD\u03B1 \u03B5\u03AF\u03C3\u03C4\u03B5 "+
"\u03C5\u03C0\u03BF\u03BC\u03BF\u03BD\u03B5\u03C4\u03B9\u03BA\u03BF\u03AF!",12:"Biztons\xE1gi ment\xE9s folyamatban!\n\nEz a folyamat egy percig vagy "+
"tov\xE1bb tarthat, k\xE9rj\xFCk, legyen t\xFCrelemmel!",16:"Sikkerhetskopiering p\xE5g\xE5r!\n\nDenne prosessen kan ta et minutt eller "+
"lenger, v\xE6r t\xE5lmodig!",20:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435!\n\u042D\u0442\u043E\u0442 "+
"\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u0435\u0442 "+"\u0437\u0430\u043D\u044F\u0442\u044C \u043C\u0438\u043D\u0443\u0442\u0443 "+
"\u0438\u043B\u0438 \u0434\u043E\u043B\u044C\u0448\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0431\u0443\u0434\u044C\u0442\u0435 \u0442\u0435\u0440\u043F\u0435\u043B\u0438\u0432\u044B!"
,21:"Copia de seguridad en curso!\n\nEste proceso puede tomar un minuto o m\xE1s, "+
"\xA1por favor ten paciencia!",23:"Yedekleme Devam Ediyor!\n\nBu s\xFCre\xE7 bir dakika veya daha fazla s\xFCrebilir. "+
"L\xFCtfen sab\u0131rl\u0131 olunuz!",24:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0440\u0438\u0432\u0430\u0454!\n\n\u0426\u0435\u0439 \u043F\u0440\u043E\u0446\u0435\u0441 "+
"\u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 \u0445\u0432\u0438\u043B\u0438\u043D\u0443 "+
"\u0430\u0431\u043E \u0431\u0456\u043B\u044C\u0448\u0435, \u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!"
};C.VG={1:"Barkod",2:"\u0411\u0430\u0440\u043A\u043E\u0434",4:"\u010C\xE1rov\xFD k\xF3d"
,5:"Stregkode",0:"Barcode",7:"Triipkood",9:"Code \xE0 barres",11:"\u0393\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03CC\u03C2 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2"
,12:"Vonalk\xF3d",16:"Strekkode",20:"\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434"
,21:"C\xF3digo de barras",23:"Barkod",24:"\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434"
};C.Basic={1:"osnovno",2:"\u041E\u0441\u043D\u043E\u0432\u0435\u043D",3:"\u57FA\u672C"
,4:"Z\xE1klad",5:"Grundl\xE6ggende",0:"Basic",6:"Simpel",7:"Alg",8:"Perustieto",
9:"Simple",10:"Einfach",11:"\u0392\u03B1\u03C3\u03B9\u03BA\u03AC",12:"Alap",16:"Grunnleggende"
,20:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439",21:"B\xE1sico",23:"Temel",24:"\u0411\u0430\u0437\u043E\u0432\u0438\u0439"
};C.BhO={1:"Baterija \u0107e se isprazniti!",2:"\u0411\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 \u0435 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E "+
"\u0438\u0437\u0442\u043E\u0449\u0435\u043D\u0430!",3:"\u96FB\u6C60\u96FB\u91CF\u56B4\u91CD\u4E0D\u8DB3\uFF01"
,4:"Stav baterie p\u0159\xEDli\u0161 n\xEDzk\xFD",5:"Batteriet er kritisk lavt!"
,0:"Battery is critically low!",6:"Batterij is erg laag!",7:"Aku peagi t\xFChi!"
,8:"Akun varaus kriittisen alhainen!",9:"La batterie est dangereusement faible\xA0!"
,10:"Akku: niedriger Ladezustand!",11:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 "+
"\u03C0\u03AC\u03C1\u03B1 \u03C0\u03BF\u03BB\u03CD \u03B5\u03BE\u03B1\u03C3\u03B8\u03B5\u03BD\u03B7\u03BC\u03AD\u03BD\u03B7"
,12:"Az akkumul\xE1tor mer\xFCl\xE9se kritikus!",16:"Batteriet er kritisk lavt",
20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F: \u043D\u0438\u0437\u043A\u0438\u0439 "+
"\u0437\u0430\u0440\u044F\u0434!",21:"\xA1Bater\xEDa muy baja!",23:"Pil kritik d\xFCzeyde azald\u0131"
,24:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0457!"};C.A5H={1:"Baterija je iskori\u0161tena!"
,2:"\u0411\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 \u0435 \u0438\u0437\u0442\u043E\u0449\u0435\u043D\u0430!"
,3:"\u96FB\u6C60\u96FB\u91CF\u8017\u76E1\uFF01",4:"Baterie je vybit\xE1",5:"Batteriet er udt\xF8mt!"
,0:"Battery is exhausted!",6:"Batterij raakt uitgeput!",7:"Ahu t\xFChi!",8:"Akku on tyhj\xE4!"
,9:"La batterie est \xE9puis\xE9e\xA0!",10:"Akku ist ersch\xF6pft!",11:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03BE\u03B1\u03BD\u03C4\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5"
,12:"Az akkumul\xE1tor lemer\xFClt!",16:"Batteriet er utladet",20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0440\u0430\u0437\u0440\u044F\u0436\u0435\u043D\u0430!"
,21:"\xA1Bater\xEDa descargada!",23:"Pil t\xFCkendi!",24:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0440\u043E\u0437\u0440\u044F\u0434\u0436\u0435\u043D\u0430!"
};C.A5I={1:"Baterija: potrebno napuniti!",2:"\u0417\u0430\u0440\u044F\u0434\u0430 \u043D\u0430 \u0431\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 "+
"\u0435 \u043D\u0438\u0441\u044A\u043A!",4:"Nabit\xED baterie je n\xEDzk\xE9!",5:
"Batteriets opladning er lav!",0:"Charge of battery is low!",6:"Batterij is laag"
,7:"Aku tase madal!",8:"Akun varaus on alhainen!",9:"La batterie est faible\xA0!"
,10:"Akku: sehr niedriger Ladezustand!",11:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 "+
"\u03B5\u03BE\u03B1\u03C3\u03B8\u03B5\u03BD\u03B7\u03BC\u03AD\u03BD\u03B7!",12:"Az akkumul\xE1tor t\xF6lt\xF6tts\xE9ge alacsony!"
,16:"Batteriladning er lav",20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F: \u043E\u0447\u0435\u043D\u044C "+
"\u043D\u0438\u0437\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434!",21:"\xA1Bater\xEDa baja!"
,23:"Pilin \u015Farj\u0131 az!",24:"\u0414\u0443\u0436\u0435 \u043D\u0438\u0437\u044C\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0457!"};C.BhQ={1:"trenutno + ro\u0111enje"
,2:"\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u043E + \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u76EE\u524D\u7684+\u51FA\u751F",4:"Porodn\xED hmotnost aktu\xE1ln\xED",5:"Nuv\xE6rende + f\xF8dsel"
,0:"Current + birth",6:"Huidig+ Geboorte",7:"Praegune + s\xFCnd",8:"Nykyinen paino + syntym\xE4paino"
,9:"Actuel + naissance",10:"Aktuell + Geburt",11:"\u039A\u03B1\u03C4\u03B1\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03C1\u03AD\u03C7\u03BF\u03BD\u03C4\u03BF\u03C2"
,12:"Jelenlegi + sz\xFClet\xE9s",16:"N\xE5v\xE6rende + kalving",20:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435 + \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
,21:"Actual + nacimiento",23:"\u015Eu anki + Do\u011Fum",24:"\u041D\u0438\u043D\u0456\u0448\u043D\u0456\u0439 + \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A5J={1:"Datum ro\u0111enja obavezan",2:"\u0414\u0430\u0442\u0430\u0442\u0430 \u043D\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0430"
,4:"Datum narozen\xED je povinn\xE9.",5:"F\xF8dselsdato obligatorisk",0:"Birth date mandatory"
,6:"Geboorte datum moet aangegeven worden",7:"S\xFCnnikuup\xE4ev kohustuslik",8:
"Syntym\xE4aika pakollinen",9:"La date de naissance doit \xEAtre remplie",10:"Geburtsdatum muss angegeben werden"
,11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03AE",12:"Sz\xFClet\xE9si d\xE1tum k\xF6telez\u0151"
,16:"F\xF8dselsdato obligatorisk",20:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F "+
"\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430",21:"Fecha de nacimiento obligatoria"
,23:"Zorunlu Do\u011Fum Tarihi",24:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u043E\u0432\u0430"};C.BhR={1:"lista ro\u0111enja"
,2:"\u0441\u043F\u0438\u0441\u044A\u043A \u0440\u0430\u0436\u0434\u0430\u043D\u0438\u044F"
,4:"seznam narozen\xED",5:"f\xF8dselsliste",0:"birth list",6:"geboortelijst",7:"s\xFCnniloend"
,8:"syntym\xE4lista",9:"liste de naissance",10:"HI Tier",11:"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD"
,12:"sz\xFClet\xE9si lista",16:"f\xF8dselsliste",20:"\u0441\u043F\u0438\u0441\u043E\u043A \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,21:"Lista de nacimientos",23:"Do\u011Fum Listesi",24:"\u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.BhS={1:"Obavijesti o ro\u0111enju su izbrisane nakon izvoza!",2:"\u0411\u0435\u043B\u0435\u0436\u043A\u0438\u0442\u0435 \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0441\u043B\u0435\u0434 "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435!",4:"Ozn\xE1men\xED o narozen\xED byla smaz\xE1na po exportu!"
,5:"F\xF8dselsmeddelelser blev slettet efter eksport!",0:"Birth notices were deleted after export!"
,6:"Geboorte melding wordt verwijderd na data export",7:"S\xFCnniteated kustutati p\xE4rast eksportimist!"
,8:"Syntym\xE4ilmoitukset poistettiin viennin j\xE4lkeen!",9:"Les d\xE9clarations de naissance ont \xE9t\xE9 supprim\xE9es apr\xE8s l\'exportation\xA0!"
,10:"Geburtsmeldungen wurden nach Export gel\xF6scht!",11:"\u039F\u03B9 \u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE!"
,12:"A sz\xFClet\xE9si \xE9rtes\xEDt\xE9seket t\xF6r\xF6lt\xE9k az export\xE1l\xE1s "+
"ut\xE1n!",16:"F\xF8dselsmeldinger ble slettet etter eksport!",20:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u044B\u043B\u0438 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435 "+"\u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430!"
,21:"\xA1Los avisos de nacimiento se eliminaron despu\xE9s de la exportaci\xF3n!"
,23:"\u0130hracattan sonra silinen do\u011Fum bildirimleri!",24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0431\u0443\u043B\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u043F\u0456\u0441\u043B\u044F "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443!"};C.KM={1:"te\u017Eina pri ro\u0111enju"
,2:"\u0422\u0435\u0433\u043B\u043E \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u9AD4\u91CD",4:"Porodn\xED hmotnost",5:"F\xF8dselsv\xE6gt",0:"Birth weight"
,6:"Geboortegewicht",7:"S\xFCnnikaal",8:"Syntym\xE4paino",9:"Poids de naissance"
,10:"Geburtsgewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si s\xFAly",16:"F\xF8dselsvekt",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,21:"Peso al nacer",23:"Do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131",24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.A5K={1:"te\u017Eina uduplana nakon",2:"\u0422\u0435\u0433\u043B\u043E\u0442\u043E \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0441\u0435 \u0443\u0434\u0432\u043E\u0438 \u0441\u043B\u0435\u0434",4:"Dvojn\xE1sobn\xE1 porodn\xED v\xE1ha po"
,5:"F\xF8dselsv\xE6gten fordoblet efter",0:"Birth weight doubled after",6:"Geboortegewicht verdubbeld na"
,7:"S\xFCnnikaal kahekordistus",8:"Syntym\xE4paino kaksinkertaistunut j\xE4lkeen"
,9:"Le poids de naissance a doubl\xE9 apr\xE8s",10:"Geburtsgewicht verdoppelt nach"
,11:"\u0394\u03B9\u03C0\u03BB\u03B1\u03C3\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si s\xFAly megdupl\xE1z\xF3dott ut\xE1na",16:"F\xF8dselsvekt dobblet etter"
,20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 "+
"\u0443\u0434\u0432\u043E\u0438\u043B\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
,21:"Peso al nacer duplicado despu\xE9s de",23:"\u0130kiye katlanan sonraki do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u043F\u043E\u0434\u0432\u043E\u0457\u043B\u0430\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
};C.BhU={1:"na ro\u0111enju",2:"\u041F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u6642",4:"Porodn\xED hmotnost",5:"Ved f\xF8dslen",0:"At birth",
6:"Bij geboorte",7:"S\xFCndides",8:"Syntym\xE4ss\xE4",9:"\xE0 la naissance",10:"Bei Geburt"
,11:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B2\u03B1\u03C1\u03CE\u03BD \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9skor",16:"Ved f\xF8dsel",20:"\u041F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,21:"Al nacer",23:"Do\u011Fumda",24:"\u041F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.A5L={1:"te\u017Eine pri ro\u0111enju",2:"\u0422\u0435\u0433\u043B\u0430 \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,4:"Porodn\xED v\xE1hy",5:"F\xF8dselsv\xE6gte",0:"Birth weights",6:"Geboortegewicht"
,7:"S\xFCnnikaalud",8:"Syntym\xE4~painot",9:"Poids de naissance",10:"Geburts~gewichte"
,11:"\u0392\u03AC\u03C1\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2",
12:"Sz\xFClet\xE9si s\xFAlyok",16:"F\xF8dselsvekter",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,21:"Peso al nacer",23:"Do\u011Fum A\u011F\u0131rl\u0131klar\u0131",24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.AB5={1:"Ro\u0111enja",2:"\u0420\u0430\u0436\u0434\u0430\u043D\u0438\u044F",4:
"Narozen\xED",5:"F\xF8dsler",0:"Births",6:"Geboortes",7:"S\xFCnnid",8:"Syntym\xE4t"
,9:"Naissances",10:"Geburten",11:"\u0393\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2"
,12:"Sz\xFClet\xE9sek",16:"F\xF8dsler",20:"\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,21:"Nacimientos",23:"Do\u011Fumlar",24:"\u041D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.BhW={2:"\u0413\u043E\u0432\u0435\u0434\u0430",4:"dobytek",5:"Kv\xE6g",0:"Bovine/cattle"
,6:"Rund",7:"Veised",9:"Bovine",10:"Rind",11:"\u0392\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2"
,12:"Szarvasmarha",16:"Bovine/storfe",20:"\u041A\u0420\u0421",21:"Bovino",23:"S\u0131\u011F\u0131r"
,24:"\u0411\u0438\u043A/\u0445\u0443\u0434\u043E\u0431\u0430"};C.Breed={2:"\u041F\u043E\u0440\u043E\u0434\u0430"
,4:"Plemeno",5:"Avle",0:"Breed",6:"Ras",7:"T\xF5ug",8:"Rotu",9:"Race",10:"Rasse"
,11:"\u03A1\u03AC\u03C4\u03C3\u03B1",12:"Fajta",16:"Rase",20:"\u041F\u043E\u0440\u043E\u0434\u0430"
,21:"Raza",23:"Irk",24:"\u041F\u043E\u0440\u043E\u0434\u0430"};C.A5Q={1:"Brightness"
,2:"\u042F\u0440\u043A\u043E\u0441\u0442",3:"\u4EAE\u5EA6",4:"Jas",5:"Sk\xE6rmens lysstyrke"
,0:"Display brightness",6:"Helderheid",7:"Heledus",8:"Kirkkaus",9:"Luminosit\xE9 de l\'\xE9cran"
,10:"Helligkeit Display",11:"\u03A6\u03C9\u03C4\u03B5\u03B9\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1"
,12:"K\xE9perny\u0151 f\xE9nyer\u0151",16:"Lysstyrke",20:"\u042F\u0440\u043A\u043E\u0441\u0442\u044C"
,21:"Brillo de la pantalla",23:"Parlakl\u0131k",24:"\u042F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044C"
};C.AB_={1:"Snimanje u velikim koli\u010Dinama",2:"\u041C\u0430\u0441\u043E\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435"
,4:"Hromadn\xE9 nahr\xE1v\xE1n\xED",5:"Masseoptagelse",0:"Bulk recording",6:"Massa opname"
,7:"Hulgisalvestus",8:"Joukkotallennus",9:"Acc\xE8s en masse",10:"Massenzugang",
11:"\u039C\u03B1\u03B6\u03B9\u03BA\u03AE \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE"
,12:"T\xF6meges felv\xE9tel",16:"Masseopptak",20:"\u041C\u0430\u0441\u0441\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C"
,21:"Registro a granel",23:"Toplu Kay\u0131tlar",24:"\u041C\u0430\u0441\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441"
};C.A5R={1:"CSV izvoz",2:"CSV \u0435\u043A\u0441\u043F\u043E\u0440\u0442",4:"export CSV"
,5:"CSV-eksport",0:"CSV export",7:"CSV eksport",8:"CSV-vienti",9:"Export CSV",10:
"CSV-Export",11:"\u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE CSV",12:"CSV export\xE1l\xE1s"
,16:"CSV-eksport",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 CSV",21:"Exportar CSV"
,23:"CSV d\u0131\u015Fa aktar",24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 CSV"
};C.BhY={1:"Izvoz CSV datoteke je u tijeku!\n\nOvaj proces mo\u017Ee potrajati nekoliko "+
"sekundi, molimo budite strpljivi!",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 CSV!\n\n \u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0446\u0435\u0441 "+
"\u043C\u043E\u0436\u0435 \u0434\u0430 \u043E\u0442\u043D\u0435\u043C\u0435 "+"\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435~\u043A\u0443\u043D~\u0434\u0438, "+
"\u043C\u043E\u043B\u044F, \u0431\u044A\u0434\u0435\u0442\u0435 \u0442\u044A\u0440\u043F\u0435\u043B\u0438\u0432\u0438!"
,4:"Prob\xEDh\xE1 export CSV!\n\nTento proces m\u016F\u017Ee trvat n\u011Bkolik "+
"sekund, pros\xEDm, bu\u010Fte trp\u011Bliv\xED!",5:"CSV-eksport er i gang!\n\nDenne proces kan tage nogle sekunder, v\xE6r "+
"venlig at v\xE6re t\xE5lmodig!",0:"CSV export in progress!\n\nThis process may take a few se~conds, please "+
"be patient!",6:"CSV-export bezig!\n\nDit proces kan enkele seconden duren, graag geduld!"
,7:"CSV eksportimine k\xE4ib!\n\nSee protsess v\xF5ib v\xF5tta m\xF5ned sekundid, "+
"palun ole kannatlik!",10:"CSV-Datei wird erstellt!\n\nDieser Vorgang kann einige Se~kunden dauern, "+
"etwas Geduld bitte!",11:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE CSV \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7!\n\n\u0397 "+
"\u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03B1\u03C5\u03C4\u03AE "+
"\u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B4\u03B9\u03B1\u03C1\u03BA\u03AD\u03C3\u03B5\u03B9 "+
"\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03BA\u03AC\u03BD\u03C4\u03B5 "+
"\u03C5\u03C0\u03BF\u03BC\u03BF\u03BD\u03AE!",12:"CSV export\xE1l\xE1s folyamatban!\n\nEz a folyamat n\xE9h\xE1ny m\xE1sodpercet "+
"ig\xE9nybe vehet, k\xE9rj\xFCk, legyen t\xFCrelemmel!",16:"CSV-eksport p\xE5g\xE5r!\n\nDenne prosessen kan ta noen sekunder, vennligst "+
"v\xE6r t\xE5lmodig!",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 CSV \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435!\n\n\u042D\u0442\u043E\u0442 "+
"\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u0435\u0442 "+"\u0437\u0430\u043D\u044F\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E "+
"\u0441\u0435\u043A\u0443\u043D\u0434, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435!",23:"CSV d\u0131\u015Fa aktarma i\u015Flemi devam ediyor!\n\nBu i\u015Flem "+
"birka\xE7 saniye s\xFCrebilir, l\xFCtfen sab\u0131rl\u0131 olun!",24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 CSV \u0442\u0440\u0438\u0432\u0430\u0454!\n\n\u0426\u0435\u0439 "+
"\u043F\u0440\u043E\u0446\u0435\u0441 \u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 "+
"\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434, "+"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!"
};C.BhZ={1:"tele",2:"\u0422\u0435\u043B\u0435",3:"\u5C0F\u725B",4:"Telec",5:"Kalv"
,0:"Calf",6:"Kalf",7:"Vasikas",8:"Lehm\xE4vasikka",9:"Veau",10:"Kalb",11:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9"
,12:"Borj\xFA",16:"Kalv",20:"\u0422\u0435\u043B\u0451\u043D\u043E\u043A",21:"Ternero"
,23:"Buza\u011F\u0131",24:"\u0422\u0435\u043B\u044F"};C.ANj={1:"gubitak teladi",
2:"\u0423\u043C\u0440\u0435\u043B\u0438",4:"Ztr\xE1ty telat",5:"Kalvetab",0:"Calf losses"
,6:"Calf Losses",7:"Surnud vasikad",8:"Vasikan menetykset",9:"Pertes des veaux",
10:"K\xE4lber~verluste",11:"\u0391\u03C0\u03CE\u03BB\u03B5\u03B9\u03B5\u03C2 \u03BC\u03CC\u03C3\u03C7\u03C9\u03BD"
,12:"Borj\xFA vesztes\xE9gek",16:"D\xF8de kalver",20:"\u041F\u043E\u0442\u0435\u0440\u0438 \u0442\u0435\u043B\u044F\u0442"
,21:"Baviera",23:"Buza\u011F\u0131 Kay\u0131plar\u0131",24:"\u0412\u0442\u0440\u0430\u0442\u0438 \u0442\u0435\u043B\u044F\u0442"
};C.ANk={1:"tele",2:"\u0442\u0435\u043B\u0435",3:"\u5C0F\u725B",4:"Tele",5:"kalv"
,0:"calf",6:"kalf",7:"Vasikas",8:"Lehm\xE4vasikka",9:"veau",10:"Kalb",11:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9"
,12:"borj\xFA",16:"Kalv",20:"\u0422\u0435\u043B\u0451\u043D\u043E\u043A",21:"ternero"
,23:"Buza\u011F\u0131",24:"\u0422\u0435\u043B\u044F"};C.ANl={1:"telad",2:"\u0442\u0435\u043B\u0435\u0442\u0430"
,3:"\u72A2\u725B",4:"telata",5:"kalve",0:"calves",6:"kalveren",7:"Vasikad",8:"Vasikat"
,9:"veaux",10:"K\xE4lber",11:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9\u03B1",
12:"borj\xFAk",16:"kalver",20:"\u0422\u0435\u043B\u044F\u0442\u0430",21:"terneros"
,23:"Buza\u011F\u0131lar",24:"\u0422\u0435\u043B\u044F\u0442\u0430"};C.Calving={
1:"odvikavanje",2:"\u041E\u0442\u0435\u043B\u0432\u0430\u043D\u0435",4:"Tel\u011Bn\xED"
,5:"K\xE6lvning",0:"Calving",6:"Kalving",7:"Poegimine",8:"Poikiminen",9:"V\xEAlage"
,10:"Abkalbung",11:"\u03A4\u03BF\u03BA\u03B5\u03C4\u03CC\u03C2",12:"Borjaz\xE1s"
,16:"Kalving",20:"\u041E\u0442\u0451\u043B",21:"Parto",23:"Buza\u011F\u0131lama"
,24:"\u041E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"};C.A5S={1:"datum telenja"
,2:"\u0414\u0430\u0442\u0430 \u043D\u0430 \u043E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,4:"Datum telata",5:"K\xE6lvningsdato",0:"Calving date",6:"Kalf datum",7:"Poegimise kuup\xE4ev"
,8:"Poikimis~p\xE4iv\xE4",9:"Date de v\xEAlage",10:"Letzte Kalbung",11:"\u0397\u03BC/\u03BD\u03B9\u03B1 \u03C4\u03BF\u03BA\u03B5\u03C4\u03BF\u03CD"
,12:"Ell\xE9si id\u0151punkt",16:"Kalvings dato",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u0442\u0451\u043B"
,21:"Fecha de parto",23:"Buza\u011F\u0131lama G\xFCn\xFC",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.AgK={1:"tok telenja",2:"\u041B\u0435\u043A\u043E\u0442\u0430 \u043D\u0430 \u043E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,3:"\u6613\u5206\u5A29",4:"Snadn\xE9 otelen\xED",5:"K\xE6lvningslethed",0:"Calving ease"
,6:"Afkalfverloop",7:"Poegimis~raskus",8:"Poikima~vaikeus",9:"D\xE9roulement du v\xEAlage"
,10:"Geburts~verlauf",11:"\u0395\u03C5\u03BA\u03BF\u03BB\u03AF\u03B1 \u03C4\u03BF\u03BA\u03B5\u03C4\u03BF\u03CD"
,12:"Ell\xE9si k\xF6nny\u0171s\xE9g",16:"Lett kalving",20:"\u041B\u0451\u0433\u043A\u043E\u0441\u0442\u044C \u043E\u0442\u0451\u043B\u0430"
,21:"Facilidad de parto",23:"Do\u011Fum kolayl\u0131\u011F\u0131",24:"\u041B\u0435\u0433\u043A\u0456\u0441\u0442\u044C \u043E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.AmC={1:"odustani",2:"\u041E\u0442\u043A\u0430\u0437",3:"\u53D6\u6D88",4:"Zru\u0161it"
,5:"Aflys",0:"Cancel",6:"Afbreken",7:"T\xFChista",8:"Poista",9:"Annuler",10:"Abbrechen"
,11:"\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",12:"Lemond",16:"Avbryt",20:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
,21:"Cancelar",23:"\u0130ptal",24:"\u0417\u0430\u043A\u0440\u0438\u0442\u0438"};
C.Bh2={1:"punja\u010D",2:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440 \u0437\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,4:"Regul\xE1tor nab\xEDjen\xED",5:"Laderegulator",0:"Charge controller",6:"laadregelaar"
,7:"Laadige kontrollseadist",8:"Latauss\xE4\xE4din",9:"Contr\xF4le de chargeur",
10:"Laderegler",11:"\u0395\u03BB\u03B5\u03B3\u03BA\u03C4\u03AE\u03C2 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2"
,12:"T\xF6lt\xE9svez\xE9rl\u0151",16:"Ladekontroller",20:"\u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 "+
"\u0437\u0430\u0440\u044F\u0434\u043D\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,21:"Laderegler",23:"\u015Earj Denetleyici",24:"\u0421\u0442\u0430\u0431\u0456\u043B\u0456\u0437\u0430\u0442\u043E\u0440 "+
"\u0437\u0430\u0440\u044F\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.OD={1:"punjenje u toku",2:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441 \u043D\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u6B63\u5728\u5145\u96FB",4:"Nab\xEDjen\xED prob\xEDh\xE1",5:"Opladning i gang"
,0:"Charging in progress",6:"Batterij word geladen",7:"Laeb",8:"Lataus k\xE4ynniss\xE4"
,9:"La batterie est en charge.",10:"Akku wird geladen",11:"\u0394\u03B9\u03B5\u03BE\u03AC\u03B3\u03B5\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7"
,12:"T\xF6lt\xE9s folyamatban",16:"Lading p\xE5g\xE5r",20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F"
,21:"Cargando bater\xEDa",23:"\u015Earj Devam Ediyor",24:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0434\u0436\u0430\u0454\u0442\u044C\u0441\u044F"
};C.A5V={1:"provjerite driver aparata",2:"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u0442\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0438\u0442\u0435 "+
"\u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E"
,4:"Zkontrolujte ovlada\u010De za\u0159\xEDzen\xED.",5:"Tjek enhedsdrivere",0:"Check device drivers"
,6:"Controleer apparaatstuurprogramma\'s",7:"Kontrollige seadme draivereid",8:"Tarkista laiteajurit"
,9:"Test pilote du dispositif",10:"Pr\xFCfung Ger\xE4tetreiber",11:"\u0395\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03BF\u03B4\u03B7\u03B3\u03BF\u03CD\u03C2 "+
"\u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2",12:"Ellen\u0151rizd az eszk\xF6zilleszt\u0151ket"
,16:"Kontroller enhetsdrivere",20:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u043E\u0432"
,21:"Verificar controladores del dispositivo",23:"Ayg\u0131t S\xFCr\xFCc\xFClerini Kontrol Edin"
,24:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0456\u0432"
};C.ANo={1:"odabir aktivnosti",2:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,3:"\u9078\u64C7\u52D5\u4F5C",4:"Vyberte akci",5:"V\xE6lg handling",0:"Choose action"
,6:"Actie kiezen",7:"Vali tegevus",8:"Valitse toiminto",9:"S\xE9lectionnez action"
,10:"Aktion ausw\xE4hlen",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1"
,12:"V\xE1lassz cselekv\xE9st",16:"Velg handling",20:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,21:"Seleccionar acci\xF3n",23:"Eylem Se\xE7in",24:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0434\u0456\u044E"
};C.Bh4={1:"odaberite sl aktivnost",2:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",4:"Vyberte dal\u0161\xED akci."
,5:"V\xE6lg n\xE6ste handling",0:"Choose next action",6:"Kies volgende actie",7:
"Vali j\xE4rgmine tegevus",8:"Valitse seuraava toiminto",9:"Action suivante",10:
"N\xE4chste Aktion",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 "+
"\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",12:"V\xE1lassz k\xF6vetkez\u0151 l\xE9p\xE9st"
,16:"Velg neste handling",20:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,21:"Siguiente acci\xF3n",23:"Bir Sonraki Eylemi Se\xE7in",24:"\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0456\u044F"
};C.A5W={1:"Papci i zglobovi",2:"\u041A\u043E\u043F\u0438\u0442\u0430 \u0438 \u043A\u0440\u0430\u0439\u043D\u0438\u0446\u0438"
,4:"Dr\xE1py a kon\u010Detiny",5:"Kl\xF8er og lemmer",0:"Claws and limbs",6:"klauwen en poten"
,7:"S\xF5rad ja j\xE4semed",8:"Sorkat ja jalat",9:"Griffes et membres",10:"Klauen und Gliedma\xDFen"
,11:"\u039D\u03CD\u03C7\u03B9\u03B1 \u03BA\u03B1\u03B9 \u03AC\u03BA\u03C1\u03B1."
,12:"Karmok \xE9s v\xE9gtagok",16:"Klauver og Haser",20:"\u041A\u043E\u043F\u044B\u0442\u0430 \u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
,21:"Pezu\xF1as y extremidades",23:"Pen\xE7eler ve Uzuvlar",24:"\u041A\u043E\u043F\u0438\u0442\u0430 \u0442\u0430 \u043A\u0456\u043D\u0446\u0456\u0432\u043A\u0438"
};C.A5X={1:"poni\u0161ti alarma",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0430\u043B\u0430\u0440\u043C\u0430"
,3:"\u6E05\u9664\u8B66\u5831",4:"Vyma\u017E alarm",5:"Deaktiver alarm",0:"Clear alarm"
,6:"Alarm terug zetten",7:"T\xFChista hoiatus",8:"Tyhjenn\xE4 h\xE4lytykset",9:"R\xE9initialisation de l\u2019alarme"
,10:"Alarm zur\xFCcksetzen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD"
,12:"Riaszt\xE1s t\xF6rl\xE9se",16:"Fjern alarmen",20:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0438\u0433\u043D\u0430\u043B "+
"\u0442\u0440\u0435\u0432\u043E\u0433\u0438",21:"Restablecer alarma",23:"Alarm\u0131 Temizle"
,24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0441\u0438\u0433\u043D\u0430\u043B "+
"\u0442\u0440\u0438\u0432\u043E\u0433\u0438"};C.A5Y={1:"Obri\u0161i sve obavijesti o ro\u0111enjima"
,2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0431\u0435\u043B\u0435\u0436\u043A\u0438 \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,4:"Vy\u010Distit v\u0161echna ozn\xE1men\xED o narozen\xED",5:"Ryd alle f\xF8dselsannoncer"
,0:"Clear all birth notices",6:"Verwijder alle geboortemeldingen",7:"T\xFChista k\xF5ik s\xFCnniteavitused"
,8:"Tyhjenn\xE4 kaikki syntym\xE4ilmoitukset",9:"Supprimer toutes les d\xE9clarations de naissances."
,10:"Alle Meldungen l\xF6schen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD",12:"T\xF6r\xF6lj\xFCk az \xF6sszes sz\xFClet\xE9si \xE9rtes\xEDt\xE9st"
,16:"Fjern alle f\xF8dselsmeldinger",20:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445",21:"Borrar todas las notifi~caciones de nacimiento"
,23:"T\xFCm Do\u011Fum Kay\u0131tlar\u0131n\u0131 Temizle",24:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A5Z={1:"Obri\u0161i sve obavijesti o kupovini",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0431\u0435\u043B\u0435\u0436\u043A\u0438 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430"
,4:"Vy\u010Distit v\u0161echna ozn\xE1men\xED o n\xE1kupu",5:"Ryd alle k\xF8bsmeddelelser"
,0:"Clear all purchase notices",6:"Verwijder alle meldingen",7:"Kustuta k\xF5ik ostuteated"
,8:"Tyhjenn\xE4 kaikki ostoilmoitukset",9:"Supprimer tous les messages",10:"Alle Meldungen l\xF6schen"
,11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B5 \u03CC\u03BB\u03B5\u03C2 "+
"\u03C4\u03B9\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2",12:"T\xF6r\xF6lj minden v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9st"
,16:"Fjern alle kj\xF8psvarsler",20:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u0445",21:"Borrar todos los avisos de compra"
,23:"T\xFCm Sat\u0131n Alma Kay\u0131tlar\u0131n\u0131 Temizle",24:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438"};C.ACg={1:"Jasna obavijest o ro\u0111enju"
,2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0431\u0435\u043B\u0435\u0436\u043A\u0430 "+
" \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435",4:"Jasn\xE1 ozn\xE1men\xED narozen\xED"
,5:"Klar meddelelse om f\xF8dsel",0:"Clear notice of birth",6:"Verwijder geboortemelding"
,7:"T\xFChista s\xFCnni teavitus",8:"Tyhjenn\xE4 ilmoitus syntym\xE4st\xE4",9:"Supprimer la d\xE9claration de naissance"
,10:"Geburtsmeldung l\xF6schen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03C2",12:"Sz\xFClet\xE9si \xE9rtes\xEDt\xE9s"
,16:"Tydelig f\xF8dselsmelding",20:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",21:"Borrar notificaci\xF3n de nacimiento"
,23:"T\xFCm Do\u011Fumlar\u0131 Temizle",24:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.ACh={1:"poni\u0161ti filtere",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0444\u0438\u043B\u0442\u044A\u0440"
,3:"\u6E05\u9664\u7BE9\u9078",4:"Vyma\u017E filter",5:"Ryd filter",0:"Clear filter"
,6:"Filter terug zetten",7:"Puhasta filter",8:"Tyhjenn\xE4 suodatus",9:"R\xE9initialisation du filtre"
,10:"Filter zur\xFCcksetzen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C6\u03AF\u03BB\u03C4\u03C1\u03BF\u03C5"
,12:"Sz\u0171r\u0151 t\xF6rl\xE9se",16:"T\xF8m filter",20:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 "+
"\u0444\u0438\u043B\u044C\u0440\u0430",21:"Restablecer filtro",23:"Filtreyi Temizle"
,24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0444\u0456\u043B\u044C\u0442\u0440\u0443"};C.ACi={1:"Jasna obavijest o kupovini"
,2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0431\u0435\u043B\u0435\u0436\u043A\u0430 "+
" \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430",4:"Jasn\xE1 informace o n\xE1kupu"
,5:"Klar k\xF8bsmeddelelse",0:"Clear notice of purchase",6:"Verwijder aankoopmelding"
,7:"Selge ostuteade",8:"Tyhjenn\xE4 ostoilmoitus",9:"Supprimer le donn\xE9 d\'achat"
,10:"Zugangsmeldung l\xF6schen",11:"\u03A3\u03B1\u03C6\u03AE\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2",12:"Egy\xE9rtelm\u0171 v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9s"
,16:"Klar kj\xF8psmelding",20:"\u0427\u0451\u0442\u043A\u043E\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435",21:"Borrar aviso de compra",
23:"Satun alma kay\u0131d\u0131n\u0131 temizle",24:"\u0427\u0456\u0442\u043A\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443"};C.A50={1:"Zatvranje farme"
,2:"\u0417\u0430\u043A\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0430"
,4:"Uzav\u0159en\xED farmy",5:"Lukning af g\xE5rd",0:"Closure of farm",6:"Sluit het bedrijf"
,7:"Farmi sulgemine",8:"Maatilan sulkeminen",9:"Fermeture de l\u2019exploitation"
,10:"Abgang des Betriebs",11:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03C6\u03AC\u03C1\u03BC\u03B1\u03C2"
,12:"Farm bez\xE1r\xE1sa",16:"G\xE5rden legges ned",20:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0444\u0435\u0440\u043C\u044B"
,21:"Borrar notificac. marcadas",23:"\xC7iftlik kapan\u0131\u015F\u0131",24:"\u0417\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u0444\u0435\u0440\u043C\u0438"
};C.A51={1:"ogrlica je odstranjena",2:"\u041A\u043E\u043B\u0430\u043D\u044A\u0442 \u0435 \u0441\u0432\u0430\u043B\u0435\u043D"
,4:"Obojek je sund\xE1n",5:"Kraven er taget af",0:"Collar is taken off",6:"Halsband is afgenomen"
,7:"Rihm on v\xF5etud",8:"Kaulain irrotetaan",9:"Collier enlev\xE9\xA0?",10:"Halsband abgenommen?"
,11:"\u03A4\u03BF \u03BA\u03BF\u03BB\u03BB\u03AC\u03C1\u03BF \u03B2\u03B3\u03AE\u03BA\u03B5"
,12:"A gall\xE9r le van v\xE9ve",16:"Halsband tas av",20:"\u041E\u0448\u0435\u0439\u043D\u0438\u043A \u0441\u043D\u044F\u0442?"
,21:"Se quita el collar",23:"Tasma \xC7\u0131kar\u0131ld\u0131",24:"\u041E\u0448\u0438\u0439\u043D\u0438\u043A \u0437\u043D\u044F\u0442\u043E?"
};C.Colon={0:":",9:"\xA0:"};C.Aqy={1:"Unos kolostruma",2:"\u0418\u0437\u043F\u0438\u0442\u0430 \u043A\u043E\u043B\u0430\u0441\u0442\u0440\u0430"
,3:"\u521D\u4E73\u63A1\u98DF\u91CF",4:"Kolostrum p\u0159\xEDjem",5:"Indtag af r\xE5m\xE6lk"
,0:"Colostrum intake",6:"Biestopname",7:"Ternespiima joomus",8:"Ternimaidon saanti"
,9:"Prise de colostrum",10:"Kolostrumaufnahme",11:"\u0395\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2 \u03C0\u03C1\u03C9\u03C4\u03BF\u03B3\u03AC\u03BB\u03B1\u03BA\u03C4\u03BF\u03C2"
,12:"Kolosztrum bevitel",16:"R\xE5melk inntak",20:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430(\u043C\u043E\u043B\u043E\u0437\u0438\u0432\u0430)"
,21:"Consumo de calostro",23:"Kolostrum Al\u0131m\u0131",24:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430 "+
"(\u043C\u043E\u043B\u043E\u0437\u0438\u0432\u0430)"};C.Bh7={1:"Naslov kolone",2:
"\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u044F \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0438"
,3:"Spaltentitel",4:"Z\xE1hlav\xED sloupc\u016F",5:"Kolonneoverskrifter",0:"Column headers"
,6:"Column titel",7:"Veeru pealkiri",8:"Sarakeotsikot",9:"En-t\xEAtes de colonne"
,10:"Spaltentitel",11:"\u0395\u03C0\u03B9\u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03B5\u03C2"
,12:"Oszlopfejl\xE9cek",16:"Kolonneoverskrifter",20:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430"
,21:"T\xEDtulos de columna",23:"S\xFCtun Ba\u015Fl\u0131klar\u0131",24:"\u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0432\u0431\u0447\u0438\u043A\u0443"
};C.Bh9={1:"Stanje",2:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u044F",3:"\u72C0\u614B"
,4:"Kondice",5:"Tilstand",0:"Condition",6:"Conditie",7:"Seisund",8:"Kunto",9:"\xC9tat"
,10:"Zustand",11:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7",12:"\xC1llapot"
,16:"Tilstand",20:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",21:"Condici\xF3n"
,23:"Durum",24:"\u0421\u0442\u0430\u043D"};C.ANC={2:"\u041A",3:"\u72C0\u614B",4:
"K",0:"C",7:"S",8:"K",9:"\xC9",10:"Z",11:"\u039A",16:"T",20:"\u0421",23:"K",24:"\u0421"
};C.Bh_={1:"Korisnik potvrdio",2:"\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0435\u043D\u043E \u043E\u0442 "+
"\u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B",3:"\u7528\u6236\u78BA\u8A8D"
,4:"Potvrzeno u\u017Eivatelem",5:"Bruger bekr\xE6ftet",0:"User confirmed",6:"Gebruiker bevestigt"
,7:"Kasutaja kinnitatud",8:"K\xE4ytt\xE4j\xE4 vahvistettu",9:"Utilisateur confirm\xE9"
,10:"Nutzer best\xE4tigt",11:"\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03B5\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03B9\u03CE\u03B8\u03B7\u03BA\u03B5"
,12:"Felhaszn\xE1l\xF3 meger\u0151s\xEDtette",16:"Bekreftet av bruker",20:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0434\u044C "+
"\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D",21:"Confirmado por usuario"
,23:"Kullan\u0131c\u0131 Onaylad\u0131",24:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E"
};C.A54={1:"Uzastopni",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043D"
,4:"Souvisl\xFD",5:"Sammenh\xE6ngende",0:"Consecutive",6:"opeenvolgend",7:"J\xE4rjestikune"
,8:"Per\xE4kk\xE4inen",9:"Cons\xE9cutif",10:"Fortlaufend",11:"\u0394\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03CC\u03C2"
,12:"Egym\xE1st k\xF6vet\u0151",16:"P\xE5f\xF8lgende",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439"
,21:"Consecutivo",23:"Ard\u0131\u015F\u0131k",24:"\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0438\u0439"
};C.Contains={1:"sadr\u017Ei",2:"\u0441\u044A\u0434\u044A\u0440\u0436\u0430",4:"obsahuje"
,5:"indeholder",0:"contains",6:"bevat",7:"sisaldab",8:"sis\xE4lt\xE4\xE4",9:"contient"
,10:"enth\xE4lt",11:"\u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9",12:"tartalmaz"
,16:"inneholder",20:"\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",21:"Consecutivo"
,23:"\u0130\xE7erir",24:"\u0432\u043C\u0456\u0449\u0443\u0454"};C.A55={1:"Da li \u017Eelite nastaviti sa registracijom ostalih \u017Eivotinja?"
,2:"\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u043D\u0435 "+"\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430 "+
"\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u0430\u043B\u0438\u0442\u0435 "+"{2} \u0436\u0438\u0432\u043E\u0442\u043D\u0438?"
,4:"Pokra\u010Dovat v registraci zb\xFDvaj\xEDc\xEDch {2} zv\xED\u0159at?",5:"Forts\xE6t med registrering af de resterende {2} dyr?"
,0:"Continue with registration of remaining {2} animals?",6:"Continu registratie?"
,7:"J\xE4tka \xFClej\xE4\xE4nud {2} looma registreerimist?",8:"Jatketaanko j\xE4ljell\xE4 olevien {2} el\xE4imen rekister\xF6inti\xE4?"
,9:"Poursuivre l\u2019en~re~gis~trement des animaux {2} restants\xA0?",10:"Mit dem Anmelden der restlichen {2} Tiere fortfahren?"
,11:"\u03A3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03C4\u03C9\u03BD \u03C5\u03C0\u03BF\u03BB\u03BF\u03AF\u03C0\u03C9\u03BD "+
"{2} \u03B6\u03CE\u03C9\u03BD;",12:"Folytatja a tov\xE1bbi {2} \xE1llat regisztr\xE1ci\xF3j\xE1t?"
,16:"Vil du fortsette med registrering av gjenv\xE6rende {2} dyr?",20:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E "+
"\u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F {2} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445?"
,21:"\xBFContinuar con el registro de los {2} animales restantes?",23:"Kalan {2} hayvan\u0131n kayd\u0131yla devam edin?"
,24:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E "+
"\u0440\u0435\u0448\u0442\u0438 {2} \u0442\u0432\u0430\u0440\u0438\u043D?"};C.ACo={
1:"kontrola",2:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",3:
"\u63A7\u5236",4:"Ovl\xE1d\xE1n\xED",5:"Kontrol",0:"Control",6:"Controle",7:"Kontroll"
,8:"Valvonta",9:"Contr\xF4le",10:"Kontrolle",11:"\u0384\u0395\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2"
,12:"Ir\xE1ny\xEDt\xE1s",16:"Kontroll",20:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C"
,23:"Kontrol",24:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C"};C.A56={1:"Period kontrole svje\u017Eih krava"
,2:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043D \u043F\u0435\u0440\u0438\u043E\u0434 "+
"\u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u043E\u0442\u0435\u043B\u0435\u043D\u0438 "+
"\u043A\u0440\u0430\u0432\u0438",4:"Kontroln\xED obdob\xED \u010Derstv\u011B otelen\xFDch krav"
,5:"Kontrolperiode for friske k\xF8er",0:"Control period fresh cows",6:"Controle periode verse koeien"
,7:"Kontrollperioodi v\xE4rsked lehmad",8:"Valvontajakso tuoreet lehm\xE4t",9:"P\xE9riode de contr\xF4le des nouvelles vaches"
,10:"Kontrolle Frischmelker f\xFCr",11:"\u03A0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 "+
"\u03C6\u03C1\u03AD\u03C3\u03BA\u03C9\u03BD \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD"
,12:"Kontrollid\u0151szak friss teh\xE9nek",16:"Kontrollperiode for ferske kyr",
20:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432",21:"Per\xEDodo de control de vacas frescas",23:
"Yeni Do\u011Fum Yapm\u0131\u015F \u0130neklerin Kontrol Periyodu",24:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0438\u0445 "+
"\u043A\u043E\u0440\u0456\u0432"};C.AqA={1:"broj",2:"\u0411\u0440\u043E\u0439",4:
"Po\u010Det",5:"T\xE6lle",0:"Count",6:"aantal",7:"Loenda",8:"Laske",9:"Nombre",10:
"An~zahl",11:"\u039C\u03AD\u03C4\u03C1\u03B7\u03C3\u03B5",12:"Gr\xF3f",16:"Telle"
,20:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",21:"Contar",23:
"Say",24:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"};C.C9={1:"zemlja"
,2:"\u0421\u0442\u0440\u0430\u043D\u0430",3:"\u570B\u5BB6",4:"Zem\u011B",5:"Land"
,0:"Country",6:"Land",7:"Riik",8:"Maa",9:"Pays",10:"Land",11:"\u03A7\u03CE\u03C1\u03B1"
,12:"Orsz\xE1g",16:"Land",20:"\u0421\u0442\u0440\u0430\u043D\u0430",21:"Pa\xEDs"
,23:"\xDClke",24:"\u041A\u0440\u0430\u0457\u043D\u0430"};C.Bib={1:"krava",2:"\u041A\u0440\u0430\u0432\u0430"
,3:"\u725B",4:"Kr\xE1va",5:"Ko",0:"Cow",6:"Koe",7:"Lehm",8:"Lehm\xE4",9:"Vache",
10:"Kuh",11:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1",12:"Teh\xE9n",16:"Ku",20:
"\u041A\u043E\u0440\u043E\u0432\u0430",21:"Vaca",23:"Inek",24:"\u041A\u043E\u0440\u043E\u0432\u0430"
};C.Bic={1:"krava",2:"\u043A\u0440\u0430\u0432\u0430",3:"\u725B",4:"kr\xE1va",5:
"ko",0:"cow",6:"koe",7:"lehm",8:"Lehm\xE4",9:"vache",10:"Kuh",11:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1"
,12:"teh\xE9n",16:"ku",20:"\u041A\u043E\u0440\u043E\u0432\u0430",21:"vaca",23:"Inek"
,24:"\u043A\u043E\u0440\u043E\u0432\u0430"};C.Bid={1:"krave",2:"\u043A\u0440\u0430\u0432\u0438"
,3:"\u5976\u725B",4:"kr\xE1vy",5:"k\xF8er",0:"cows",6:"koeien",7:"lehmad",8:"lehm\xE4t"
,9:"vaches",10:"K\xFChe",11:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2",12:
"tehenek",16:"Kyr",20:"\u041A\u043E\u0440\u043E\u0432\u044B",21:"vacas",23:"\u0130nekler"
,24:"\u043A\u043E\u0440\u043E\u0432\u0438"};C.ACu={1:"Napravi sigurnosnu kopiju"
,2:"\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438",4:"Vytvo\u0159it z\xE1lohu",5:"Opret sikkerhedskopi"
,0:"Create backup",6:"Create back up",7:"Loo varukoopia",8:"Luo varmuuskopio",9:
"Sauvegarder les donn\xE9s",10:"Datensicherung erstellen",11:"\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2",12:"K\xE9sz\xEDts biztons\xE1gi m\xE1solatot"
,16:"Opprett sikkerhetskopi",20:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E "+
"\u043A\u043E\u043F\u0438\u044E",21:"Crear copia de seguridad",23:"Yedek Olu\u015Ftur"
,24:"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 "+
"\u043A\u043E\u043F\u0456\u044E"};C.Bie={1:"Kreiranje {1} novih \u017Eivotinja\n\n{2}%% obavljeno\n\nregistracija \u017Eivotinje "+
"{3}",2:"\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 {1} "+
"\u043D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\n\n{2} "+"%% \u0433\u043E\u0442\u043E\u0432\u043E\n\n\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E {3}",3:"\u5EFA\u7ACB{1}\u96BB\u65B0\u5C0F\u725B\n\n{2} %%\u5DF2\u5B8C\u6210\n\n{3}\u96BB\u5C0F\u725B\u5EFA\u7ACB\u4E2D"
,4:"Zad\xE1v\xE1n\xED {1} nov\xFDch zv\xED\u0159at\n\n{2} %% hotovo\n\nVytvo\u0159en\xED "+
"zv\xED\u0159ete {3}",5:"Oprettelse af {1} nye dyr\n\n{2} %% udf\xF8rt\n\nOpretter dyr {3}"
,0:"Creation of {1} new animals\n\n{2} %% done\n\nCreating animal {3}",6:"Aanleggen van {1} nieuwe dieren\n\n{2} %% gedaan\n\nLeg dier {3} aan"
,7:"{1} Uue looma registreerimine tehtud. Registreerin\n\n{2} %% looma {3}",8:"{1} uusien el\xE4inten luominen\n\n{2} %% valmis\n\nLuo el\xE4int\xE4 {3}"
,9:"Cr\xE9ation de {1} nouveaux animaux\n\n{2} %% fait\n\nCr\xE9ation d\u2019animal "+
"{3}",10:"Anlegen von {1} neuen Tieren\n\n{2} %% erledigt\n\nLege Tier {3} an",11:
"\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 {1} \u03BD\u03AD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD\n\n{2} %% \u03AD\u03B3\u03B9\u03BD\u03B5\n\n\u039D\u03AD\u03BF "+
"\u03B6\u03CE\u03BF \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"{3}",12:"{1} \xFAj \xE1llat l\xE9trehoz\xE1sa\n\n{2} %% k\xE9sz\n\n\xC1llat l\xE9trehoz\xE1sa "+
"{3}",16:"Opprettelse av {1}nye dyrs\n\n{2} %% ferdig\n\nSkaper dyr {3}",20:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 {1} \u043D\u0430\u0432\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445\n\n{2} %% \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u043E\n\n\u0421\u043E\u0437\u0434\u0430\u0442\u044C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {3}",21:"Creando entrada de {1} animales nuevos\n\n{2} %% finalizado\n\nCreando "+
"animal {3}",23:"{1} yeni hayvan\u0131n olu\u015Fturulmas\u0131\n\n{2} %% tamamland\u0131\n\nHayvan "+
"{3} olu\u015Fturuluyor",24:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F {1} \u043D\u043E\u0432\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\n\n{2} %% \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043E\n\n\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 {3}"};C.M8={1:"trenutna te\u017Eina"
,2:"\u0422\u0435\u043A\u0443\u0449\u043E \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u76EE\u524D\u7684\u9AD4\u91CD",4:"Aktu\xE1ln\xED v\xE1ha",5:"Nuv\xE6rende v\xE6gt"
,0:"Current weight",6:"Huidig gewicht",7:"Paegune kaal",8:"Nykyinen paino",9:"Poids actuel"
,10:"Aktuelles Gewicht",11:"\u03A4\u03C1\u03AD\u03C7\u03C9\u03BD \u03B2\u03AC\u03C1\u03BF\u03C2"
,12:"Aktu\xE1lis s\xFAly",16:"N\xE5v\xE6rende vekt",20:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0435\u0441"
,21:"Peso actual",23:"Mevcut A\u011F\u0131rl\u0131k",24:"\u041D\u0438\u043D\u0456\u0448\u043D\u044F \u0432\u0430\u0433\u0430"
};C.Big={1:"trenutno",2:"\u0422\u0435\u043A\u0443\u0449",3:"\u76EE\u524D\u7684",
4:"Aktu\xE1ln\xED hmotnost zkr\xE1cen\xE1",5:"Aktuel",0:"Current",6:"Huidig",7:"Praegune"
,8:"Nykyinen",9:"Actuel",10:"Aktuelles",11:"\u03A4\u03C1\u03AD\u03C7\u03C9\u03BD"
,12:"Jelenlegi",16:"N\xE5v\xE6rende",20:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439"
,21:"Actual",23:"Mevcut",24:"\u041D\u0438\u043D\u0456\u0448\u043D\u0456\u0439"};
C.ACx={1:"Dnevni prirast",2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442"
,3:"\u65E5\u589E\u91CD",4:"Denn\xED p\u0159\xEDr\u016Fstek na v\xE1ze",5:"Daglig v\xE6gt\xF8gning"
,0:"Daily weight gain",6:"Dagelijkse toenames",7:"P\xE4evane juurdekasv",8:"P\xE4iv\xE4kasvu"
,9:"Croissance journali\xE8re",10:"T\xE4gliche Zunahmen",11:"\u0397\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 \u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2",12:"Napi s\xFAlygyarapod\xE1s",16:"Daglig tilvekst"
,20:"\u0414\u043D\u0435\u0432\u043D\u043E\u0439 \u043F\u0440\u0438\u0432\u0435\u0441"
,21:"Ganancia diaria",23:"G\xFCnl\xFCk a\u011F\u0131rl\u0131k art\u0131\u015F\u0131"
,24:"\u0414\u0435\u043D\u043D\u0438\u0439 \u043F\u0440\u0438\u0440\u0456\u0441\u0442"
};C.ACy={1:"Majka",2:"\u041C\u0430\u0439\u043A\u0430",4:"P\u0159ehrada",5:"D\xE6mning"
,0:"Dam",6:"Moederdier",7:"Tamm",8:"Em\xE4",9:"M\xE8re",10:"Muttertier",11:"\u039C\u03B7\u03C4\u03AD\u03C1\u03B1 \u03B6\u03CE\u03BF\u03C5"
,12:"G\xE1t",16:"Mor dyr",20:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Madre",23:"Anne Hayvan",24:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430"
};C.ACz={1:"prikupljanje podataka",2:"\u0421\u044A\u0431\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u5C0F\u725B\u8CC7\u6599\u6536\u96C6",4:"Z\xEDsk\xE1v\xE1n\xED dat",5:"Dataindsamling"
,0:"Data acquisition",6:"Data overnemen",7:"Andmete sisestamine",8:"Tiedonkeruu"
,9:"Acquisition de donn\xE9es",10:"Tierdatenerfassung",11:"\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatgy\u0171jt\xE9s",16:"Datainnsamling",20:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",21:"Recolecci\xF3n de datos"
,23:"Veri Toplama",24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445"
};C.A59={1:"prikupljanje podataka",2:"\u0421\u044A\u0431\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u5C0F\u725B\u8CC7\u6599\u6536\u96C6",4:"sb\u011Br dat",5:"Dataindsamling",0:
"Data acquisition",6:"Data overnemen",7:"Andmete sisestamine",8:"Tiedonkeruu",9:
"Acquisition de donn\xE9es",10:"Datenerfassung",11:"\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatgy\u0171jt\xE9s",16:"Datainnsamling",20:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
,21:"Recolecci\xF3n datos",23:"Veri Toplama",24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445"
};C.ACA={1:"Rezervna kopija podataka",2:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,4:"Z\xE1lohov\xE1n\xED dat",5:"Databackup",0:"Data backup",6:"Gegevensback-up",
7:"Andmete varundamine",8:"Datan varmuuskopio",9:"Sauvegarde des donn\xE9es",10:
"Datensicherung",11:"\u0391\u03BD\u03C4\u03AF\u03B3\u03C1\u03B1\u03C6\u03BF \u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2"
,12:"adatment\xE9s",16:"Datasisikring",20:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0445",21:"Copia de seguridad de datos",23:"Veri Yedekleme"
,24:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0434\u0430\u043D\u0438\u0445"};C.ACB={1:"Upravljanje podacima",2:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 "+
"\u0434\u0430\u043D\u043D\u0438",4:"Spr\xE1va dat",5:"Datastyring",0:"Data management"
,6:"Gegevensbeheer",7:"Andmehaldus",8:"Tiedonhallinta",9:"Gestion des donn\xE9es"
,10:"Datenmanagement",11:"\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatkezel\xE9s",16:"Datah\xE5ndtering",20:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u043C\u0438"
,21:"Gesti\xF3n de datos",23:"Veri y\xF6netimi",24:"\u0423\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u043C\u0438"
};C.A5_={1:"sinhronizacija podataka",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",3:"\u8CC7\u6599\u540C\u6B65"
,4:"Synchronizace dat",5:"Data-synkronisering",0:"Data synchronisation",6:"Data synchronisatie"
,7:"Andmete s\xFCnkroniseerimine",8:"Tietojen synkronointi ruokkijalle",9:"Synchronisation des donn\xE9es"
,10:"Datensynchronisation",11:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD",12:"Adat szinkroniz\xE1ci\xF3"
,16:"Data synkronisering",20:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"
,21:"Sincronizaci\xF3n de datos",23:"Bilgi senkronizasyonu",24:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F "+
"\u0434\u0430\u043D\u0438\u0445 \u0456\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"
};C.Bij={1:"sinhronizacija podataka u toku {1}%% / obavljena",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\n\n{1} %% \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u043D\u043E"
,3:"\u8CC7\u6599\u540C\u6B65\u4E2D\n\n{1} %% \u5B8C\u6210",4:"Synch. dat prob\xEDh\xE1\n{1} %% hotovo"
,5:"Data synkronisering i gang\n\n{1} %% udf\xF8rt",0:"Data synchronization in progress\n\n{1} %% done"
,6:"Data word gesynchroniseerd\n\n{1} gedaan %%",7:"Andmete s\xFCnkroniseerimine t\xF6\xF6s\n\n{1} %% valmis"
,8:"Tiedon synkronointi k\xE4ynniss\xE4\n\n{1} %% valmis",9:"Synchronisation des donn\xE9es en cours\n\n{1} %% fait"
,10:"Daten werden synchronisiert\n\n{1} %% erledigt",11:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7\n\n{1} "+
"%%\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5",12:
"Adatok szinkroniz\xE1l\xE1sa folyamatban\n\n{1} %% k\xE9sz",16:"Datasynkronisering p\xE5g\xE5r\n\n{1} %% ferdig"
,20:"\u0421\u0438\u043D\u0445\u0440. \u0434\u0430\u043D\u043D\u044B\u0445\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E",21:"Sincronizaci\xF3n de datos en curso\n\n{1} %% finalizado"
,23:"Bilgi senkronizasyonu i\u015Flemde\n\n{1} %%",24:"\u0421\u0438\u043D\u0445\u0440. \u0434\u0430\u043D\u0438\u0445\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E"};C.Date={1:"datum",2:"\u0414\u0430\u0442\u0430"
,3:"\u65E5\u671F",4:"Datum",5:"Dato",0:"Date",6:"Datum",7:"Kuup\xE4ev",8:"P\xE4iv\xE4"
,10:"Datum",11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",12:
"D\xE1tum",16:"Dato",20:"\u0414\u0430\u0442\u0430",21:"Fecha",23:"Tarih",24:"\u0414\u0430\u0442\u0430"
};C.Aeg={1:"datum ro\u0111enja",2:"\u0414\u0430\u0442\u0430 \u043D\u0430 \u0440\u0430\u0436\u0434."
,3:"\u751F\u65E5",4:"Datum narozen\xED",5:"F\xF8dselsdato",0:"Date of birth",6:"Geboortedatum"
,7:"S\xFCnnikuup\xE4ev",8:"Syntym\xE4p\xE4iv\xE4",9:"Date de naissance",10:"Geburtsdatum"
,11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si d\xE1tum",13:"Data di nascita",16:"F\xF8dselsdato",17:"Data urodzenia"
,20:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
21:"Fecha de nacimiento",23:"Do\u011Fum tarihi",24:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A5$={1:"DD-MM-GGGG",2:"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413",4:
"DD-MM-RRRR",5:"DD-MM-\xC5\xC5\xC5\xC5",0:"DD-MM-YYYY",6:"DD-MM-JJJJ",7:"PP.KK.AAAA"
,8:"PP.KK.YYYY",9:"JJ/MM/AAAA",10:"TT.MM.JJJJ",11:"\u0397\u0397-\u039C\u039C-\u0395\u0395\u0395\u0395"
,12:"NN-HH-\xC9\xC9\xC9\xC9",16:"DD-MM-\xC5\xC5\xC5\xC5",20:"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413"
,21:"DD/MM/YYYY",23:"GGAAYYYY",24:"\u0414\u0414-\u041C\u041C-\u0420\u0420\u0420\u0420"
};C.ACC={1:"datum i vrijeme",2:"\u0414\u0430\u0442\u0430 \u0438 \u0447\u0430\u0441"
,3:"\u65E5\u671F&\u6642\u9593",4:"Datum a \u010Das",5:"Dato & Tid",0:"Date & Time"
,6:"Datum & Tijd",7:"Kuup\xE4ev ja Aeg",8:"P\xE4iv\xE4 & Aika",9:"Date et heure"
,10:"Datum & Uhrzeit",11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 "+
"\u03CE\u03C1\u03B1",12:"D\xE1tum & Id\u0151",16:"Dato & Tid",20:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F"
,21:"Fecha & hora",23:"Tarih & Saat",24:"\u0414\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441"
};C.GL={1:"dan",2:"\u0434\u0435\u043D",3:"\u65E5",4:"Den",5:"dag",0:"day",6:"Dag"
,7:"p\xE4ev",8:"P\xE4iv\xE4",9:"jour",10:"Tag",11:"\u0397\u03BC\u03AD\u03C1\u03B1"
,12:"nap",16:"Dag",20:"\u0434\u0435\u043D\u044C",21:"d\xEDa",23:"G\xFCn",24:"\u0434\u0435\u043D\u044C"
};C.A6b={1:"Dan",2:"\u0414\u0435\u043D",3:"\u65E5",4:"Den",5:"Dag",0:"Day",6:"Dag"
,7:"P\xE4ev",8:"P\xE4iv\xE4",9:"Jour",10:"Tag",11:"\u0397\u03BC\u03AD\u03C1\u03B1"
,12:"Nap",16:"Dag",20:"\u0414\u0435\u043D\u044C",21:"D\xEDa",23:"G\xFCn",24:"\u0414\u0435\u043D\u044C"
};C.Ko={1:"dani",2:"\u0434\u043D\u0438",3:"\u5929\u6578",4:"Dny",5:"dage",0:"days"
,6:"Dagen",7:"p\xE4evad",8:"P\xE4iv\xE4t",9:"jours",10:"Tage",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"napok",16:"Dager",20:"\u0414\u043D\u0438",21:"d\xEDas",23:"g\xFCnler",24:"\u0414\u043D\u0456\u0432"
};C.Bik={1:"dani",2:"\u0434\u043D\u0438",3:"\u5929\u6578",4:"Dny",5:"dage",0:"days"
,6:"Dagen",7:"p\xE4evad",8:"P\xE4iv\xE4t",9:"jours",10:"Tagen",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"napok",16:"Dager",20:"\u0414\u043D\u0435\u0439",21:"d\xEDas",23:"G\xFCnler"
,24:"\u0414\u043D\u0456\u0432"};C.A6c={1:"dani / alarm",2:"\u0414\u043D\u0438 \u0441 \u0430\u043B\u0430\u0440\u043C\u0430"
,3:"\u8B66\u5831\u5929\u6578",4:"Dny v upozorn\u011Bn\xED",5:"Dage i alarm",0:"Days in alarm"
,6:"Alarmdagen",7:"P\xE4evi hoiatuses",8:"H\xE4lytys~p\xE4iv\xE4t",9:"Jours \xE9tat d\u2019alerte"
,10:"Tage in Alarm",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CC"
,12:"Napok riad\xF3ban",16:"Dager i alarm",20:"\u0414\u043D\u0438 \u043D\u0430 \u0442\u0440\u0435\u0432\u043E\u0433\u0435"
,21:"D\xEDas en alarma",23:"Alamdaki g\xFCnler",24:"\u0414\u043D\u0456\u0432 \u0443 \u0442\u0440\u0438\u0432\u043E\u0437\u0456"
};C.Bil={1:"dani / temperatura",2:"\u0414\u043D\u0438 \u0441 \u0442\u0440\u0435\u0441\u043A\u0430"
,3:"\u767C\u71D2\u5929\u6578",4:"Dny v hore\u010Dce",5:"Dage i feber",0:"Days in fever"
,6:"Koorts dagen",7:"P\xE4evi palavikus",8:"Kuumep\xE4iv\xE4t",9:"Des jours de fi\xE8vre"
,10:"Fiebertage",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03C5\u03C1\u03B5\u03C4\u03CC"
,12:"L\xE1zban t\xF6lt\xF6tt napok",16:"Dager med feber",20:"\u0414\u043D\u0435\u0439 \u0441 \u0442\u0435\u043C~\u043F\u0435~\u0440\u0430~\u0442\u0443\u0440\u043E\u0439"
,21:"D\xEDas con fiebre",23:"Ate\u015Fli g\xFCnler",24:"\u0414\u043D\u0456\u0432 \u0437 \u0442\u0435\u043C~\u043F\u0435~\u0440\u0430~\u0442\u0443\u0440\u043E\u044E"
};C.Bim={1:"Dani",2:"\u0414\u043D\u0438 -",4:"Dny",5:"Dage",0:"Days-",6:"Days - Dagen"
,7:"P\xE4evad",10:"Tage-",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2",12:"Napok",16:
"Dager",20:"\u0414\u043D\u0438",24:"\u0414\u043D\u0456"};C.A6d={1:"Dani na stra\u017Ei"
,2:"\u0414\u043D\u0438 \u043F\u043E\u0434 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"
,4:"Dny na hl\xEDdce",5:"Dage p\xE5 vagt",0:"Days on watch",6:"Dagen op de lijst"
,7:"P\xE4evad valves",8:"P\xE4iv\xE4t tarkkailussa.",9:"jours sous suivi.",10:"Tage unter Beobacht."
,11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C6\u03CD\u03BB\u03B1\u03BE\u03B7"
,12:"Napok az \u0151rs\xE9gben",16:"Dager p\xE5 vakt",20:"\u0414\u043D\u0438 \u043D\u0430 \u0434\u0435\u0436\u0443\u0440\u0441\u0442\u0432\u0435"
,21:"D\xEDas en observaci\xF3n",23:"\u0130zlemedeki g\xFCnler",24:"\u0414\u043D\u0456 \u043D\u0430 \u0432\u0430\u0440\u0442\u0456"
};C.Bin={1:"Dana+",2:"\u0414\u043D\u0438 +",4:"Dny",5:"Dage",0:"Days+",6:"Dagen"
,7:"P\xE4evad",10:"Tage+",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2",12:"Napok+",
16:"Dager",20:"\u0414\u043D\u0438",24:"\u0414\u043D\u0456+"};C.AjH={1:"zadane vrijednosti"
,2:"\u0421\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435"
,3:"\u51FA\u5EE0\u8A2D\u5B9A",4:"V\xFDchoz\xED hodnoty",5:"Standardv\xE6rdier",0:
"Default values",6:"Standaard waardes",7:"Vaikimisi v\xE4\xE4rtused",8:"Oletusarvot"
,9:"Valeurs standards",10:"Standardwerte",11:"\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03B1\u03BE\u03AF\u03B5\u03C2",12:"Alap\xE9rtelmezett \xE9rt\xE9kek",16:"Standardverdier"
,20:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
,21:"Valores por defecto",23:"De\u011Ferleri s\u0131f\u0131rla",24:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C"
};C.Delete={1:"izbrisati",2:"\u0418\u0437\u0442\u0440\u0438\u0439",3:"\u522A\u6389"
,4:"Smazat",5:"Slet",0:"Delete",6:"Verwijderen",7:"Kustuta",8:"Poista",9:"Effacer"
,10:"L\xF6schen",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",12:"T\xF6r\xF6l"
,16:"Slett",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",21:"Borrar",23:"Sil"
,24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"};C.A6e={1:"Obri\u0161i sve obavijesti nakon izvoza"
,2:"\u0418\u0437\u0442\u0440\u0438\u0439\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0431\u0435\u043B\u0435\u0436\u043A\u0438 \u0441\u043B\u0435\u0434 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,4:"Odstra\u0148te v\u0161echna ozn\xE1men\xED po exportu",5:"Slet alle meddelelser efter eksport"
,0:"Delete all notices after export",6:"Verwijder alle meldingen na export.",7:"Kustuta k\xF5ik teated p\xE4rast eksportimist."
,10:"Alle Nachrichten nach Export l\xF6schen",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03AC\u03C8\u03C4\u03B5 \u03CC\u03BB\u03B5\u03C2 "+
"\u03C4\u03B9\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE"
,12:"Export\xE1l\xE1s ut\xE1n t\xF6r\xF6lje az \xF6sszes \xE9rtes\xEDt\xE9st",16:
"Slett alle varsler etter eksport",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043F\u043E\u0441\u043B\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430."
,24:"\u0412\u0438\u0434\u0430\u043B\u0456\u0442\u044C \u0443\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0456\u0441\u043B\u044F \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443"
};C.AmL={1:"Izbrisati podatke o \u017Eivotinji?",2:"\u0414\u0430 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0435 \u043B\u0438 "+
"\u0437\u0430\u043F\u0438\u0441\u044A\u0442 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E?"
,4:"Smazat z\xE1znam o zv\xED\u0159eti?",5:"Slet dyrejournal?",0:"Delete animal record?"
,6:"Verwijder opname dier",7:"Kustuta looma andmed?",8:"Poistetaanko el\xE4intietue?"
,9:"Supprimer le registre des animaux\xA0?",10:"Tierdatensatz l\xF6schen?",11:"\u039D\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C8\u03C9 \u03C4\u03BF "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5;"
,12:"T\xF6r\xF6lj\xFCk az \xE1llat adatait?",16:"Slette registeret av dyr?",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C?",21:"\xBFBorrar registro del animal?"
,23:"Hayvan Kayd\u0131n\u0131 Sil",24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443?"};C.HG={1:"modus prezentacije"
,2:"\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u0440\u0435\u0436\u0438\u043C",3:"\u793A\u7BC4\u6A21\u5F0F",4:"Uk\xE1zkov\xFD re\u017Eim"
,5:"Demonstrationstilstand",0:"Demonstration mode",6:"Demonstratiemodus",7:"Demoseisund"
,8:"Demotila",9:"Mode de pr\xE9sentation",10:"Pr\xE4sentationsmodus",11:"\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03B1 \u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2"
,12:"Bemutat\xF3 m\xF3d",16:"Demonstrasjons modus",20:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
,21:"Modo de presentaci\xF3n",23:"Demo modu",24:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457"
};C.Biq={1:"Izvod iz broja markice za uho",2:"\u0418\u0437\u0432\u043B\u0438\u0447\u0430\u043D\u0435 \u043E\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 \u043C\u0430\u0440\u043A\u0430"
,4:"Odvodit z \u010D\xEDsla u\u0161n\xED zn\xE1mky",5:"Afstamning fra \xF8rem\xE6rkenummer"
,0:"Derivation from eartag number",6:"Afstamming van oornummer",7:"P\xE4ritolu k\xF5rvam\xE4rgi numbrist"
,8:"Korvamerkin numeron johtaminen",9:"D\xE9rivation du num\xE9ro de la boucle",
10:"Ableitung von Ohrmarkennummer",11:"\u03A0\u03C1\u03BF\u03AD\u03BB\u03B5\u03C5\u03C3\u03B7 \u03B1\u03C0\u03CC "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD",12:"Sz\xE1rmaztat\xE1s f\xFClc\xEDmkesz\xE1mb\xF3l"
,16:"Avledning fra \xF8remerkenummer",20:"\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 "+
"\u043E\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0431\u0438\u0440\u043A\u0438 "+
"\u0434\u043B\u044F \u0443\u0445\u0430",23:"Kulak etiketi numaras\u0131ndan t\xFCretme"
,24:"\u041F\u043E\u0445\u0456\u0434\u043D\u0435 \u0432\u0456\u0434 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0430"};C.A6i={1:"Izvedenica iz broja transpondera"
,2:"\u0418\u0437\u0432\u043B\u0438\u0447\u0430\u043D\u0435 \u043E\u0442 \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440",4:"Odvozen\xED z transpond\xE9rov\xE9ho \u010D\xEDsla"
,5:"Afkobling fra transpondernummer",0:"Derivation from transponder number",6:"Afleiding van het transpondernummer"
,7:"Transpondri numbri tuletis",8:"Transponderin numeron johtaminen",9:"D\xE9rivation du \u2116 du transpondeur"
,10:"Ableitung von Transpondernummer",11:"\u03A0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE \u03B1\u03C0\u03CC \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03B4\u03AD\u03BA\u03C4\u03B7-\u03C0\u03BF\u03BC\u03C0\u03BF\u03CD",12:"Sz\xE1rmaztat\xE1s a transzponder sz\xE1m\xE1t\xF3l"
,16:"Avledning fra transpondernummer",20:"\u0412\u044B\u0432\u043E\u0434 \u0438\u0437 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430",21:"Derivaci\xF3n del \u2116 de transpondedor"
,23:"Aktar\u0131c\u0131 numaras\u0131ndan t\xFCretme",24:"\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A \u0456\u0437 \u043D\u043E\u043C\u0435\u0440\u0443 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"};C.Bir={
1:"Opis kolone",2:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u044F "+
"\u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0438",3:"\u6A19\u984C\u8AAA\u660E"
,4:"Popis z\xE1hlav\xED sloupc\u016F",5:"Beskrivelse. kolonneoverskrifter",0:"Descript. column headers"
,6:"Toelichting titel",7:"Veeru kirjeldus",8:"Kuvaus sarakkeen otsikot",9:"Descript. titres colonnes"
,10:"Erl\xE4uterung Spaltentitel",11:"\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03C0\u03B9\u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03C9\u03BD"
,12:"Le\xEDr\xE1s. oszlopfejl\xE9cek",16:"Beskriv kolonne overskrifter",20:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E "+
"\u0441\u0442\u043E\u043B\u0431\u0446\u0430",21:"Descr. t\xEDtulos columna",23:"A\xE7\u0131klama. s\xFCtun ba\u015Fl\u0131klar\u0131"
,24:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0434\u043E \u043D\u0430\u0437\u0432\u0438 "+
"\u0441\u0442\u043E\u0432\u043F\u0447\u0438\u043A\u0430"};C.Device={1:"aparat",2:
"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E",3:"\u8A2D\u5099",
4:"Za\u0159\xEDzen\xED",5:"Enhed",0:"Device",6:"Apparaat",7:"Seade",8:"Laite",9:
"Appareil",10:"Ger\xE4t",11:"\u03A3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE",12:"Eszk\xF6z"
,16:"Enhet",20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E",21:
"Dispositivo",23:"Cihaz",24:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439"};
C.A6j={1:"aktivnosti aparata",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E"
,4:"Akce za\u0159\xEDzen\xED",5:"Enhedsaktioner",0:"Device actions",6:"Aparaat acties"
,7:"Seadme toimingud",8:"Laitetoiminnot",9:"Actions de dispositif",10:"Ger\xE4teaktionen"
,11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"Eszk\xF6zm\u0171veletek",16:"Enhets handlinger",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,21:"Acciones del dispositivo",23:"Cihaz i\u015Flemleri",24:"\u0414\u0456\u0457 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.DeviceAndAnimalData={1:"Svi podaci o ure\u0111ajima i \u017Eivotinjama",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0438\n\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,4:"Ve\u0161ker\xE1 data za\u0159\xEDzen\xED a zv\xED\u0159at",5:"Alle enheds- og dyredata"
,0:"All device and\nanimal data",6:"Alle dieren en data",7:"K\xF5ik seadme- ja loomaandmed"
,8:"Kaikki laite- ja el\xE4intiedot",9:"Toutes les donn\xE9es des animaux et de l\'appareils"
,10:"Alle Tier- und\nGer\xE4tedaten",11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD \u03BA\u03B1\u03B9 \u03B6\u03CE\u03C9\u03BD"
,12:"\xD6sszes eszk\xF6z- \xE9s \xE1llatadat",16:"Alle enhets- og dyredata",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 "+
"\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",21:"Todos los datos de dispositivos y animales"
,23:"T\xFCm cihaz ve\nhayvan verileri",24:"\u0412\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457\u0432 "+
"\u0442\u0430 \u0442\u0432\u0430\u0440\u0438\u043D"};C.DeviceDataOnly={1:"Podaci ure\u0111aja samo"
,2:"\u0421\u0430\u043C\u043E \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E"
,4:"Data za\u0159\xEDzen\xED pouze",5:"Enhedsdata kun",0:"Device data only",6:"Apparaatgegevens alleen"
,7:"Seadme andmed ainult",10:"Nur Ger\xE4tedaten",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BC\u03CC\u03BD\u03BF",12:"K\xE9sz\xFCl\xE9kadatok csak",16:"Enhetsdata bare"
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0442\u043E\u043B\u044C\u043A\u043E",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u043B\u0438\u0448\u0435"};C.Bis={1:"upravlja\u010Dki program ure\u0111aja USB C"
,2:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"USB C",4:"Ovlada\u010D za\u0159\xEDzen\xED USB C",5:"Enhedsdriver USB C",0:"Device driver USB C"
,6:"Apparaatstuurprogramma USB C",7:"Seadme draiver USB C",8:"Laiteohjain USB C"
,9:"Pilote du dispositif USB C",10:"Ger\xE4tetreiber USB C",11:"\u039F\u03B4\u03B7\u03B3\u03CC\u03C2 USB C \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"USB C eszk\xF6zmeghajt\xF3",16:"Enhets driver USBC",20:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"USB C",21:"Controlador de dispositivo USB C",23:"Ayg\u0131t s\xFCr\xFCc\xFCs\xFC USB C"
,24:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u0437 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"USB C"};C.A6k={1:"upravlja\u010Dki program ure\u0111aja",2:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,4:"Ovlada\u010De za\u0159\xEDzen\xED",5:"Enhedsdrivere",0:"Device drivers",6:"Apparaatstuurprogramma\'s"
,7:"Seadme draiverid",8:"Laiteajurit",9:"Pilote du dispositif",10:"Ger\xE4tetreiber"
,11:"\u039F\u03B4\u03B7\u03B3\u03BF\u03AF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"Eszk\xF6zmeghajt\xF3k",16:"Enhets drivere",20:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,21:"Controladores de dispositivo",23:"Ayg\u0131t s\xFCr\xFCc\xFCleri",24:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.Difficult={1:"te\u0161ko",2:"\u0422\u0440\u0443\u0434\u043D\u043E",4:"T\u011B\u017Ek\xFD"
,5:"Sv\xE6r",0:"Difficult",6:"Moeilijk",7:"Keeruline",8:"Vaikea",9:"Difficile",10:
"Schwer",11:"\u0394\u03CD\u03C3\u03BA\u03BF\u03BB\u03BF",12:"Neh\xE9z",16:"Vanskelig"
,20:"\u0422\u0440\u0443\u0434\u043D\u043E",21:"Dexter",23:"Zor",24:"\u0412\u0430\u0436\u043A\u043E"
};C.Ez={1:"broj",2:"\u0446\u0438\u0444\u0440\u0430",3:"\u4F4D\u6578",4:"\u010C\xEDslice"
,5:"ciffer",0:"digit",6:"Cijfer",7:"number",8:"Numero",9:"chiffre",10:"Ziffer",11:
"\u03A8\u03B7\u03C6\u03AF\u03BF",12:"sz\xE1mjegy",16:"Siffer",20:"\u0426\u0438\u0444\u0440\u0430"
,21:"d\xEDgito",23:"Hane",24:"\u0426\u0438\u0444\u0440\u0430"};C.OG={1:"brojevi"
,2:"\u0446\u0438\u0444\u0440\u0438",3:"\u6578\u5B57",4:"\u010C\xEDslice",5:"cifre"
,0:"digits",6:"Cijfers",7:"numbrid",8:"Numerot",9:"chiffres",10:"Ziffern",11:"\u03A8\u03B7\u03C6\u03AF\u03B1"
,12:"sz\xE1mjegyek",16:"Sifre",20:"\u0426\u0438\u0444\u0440\u044B",21:"d\xEDgitos"
,23:"Say\u0131lar",24:"\u0426\u0438\u0444\u0440\u0438"};C.AqG={1:"Novi ID: brojevi"
,2:"\u0411\u0440\u043E\u0439 \u0446\u0438\u0444\u0440\u0438 \u0437\u0430 \u043D\u043E\u0432 "+
"\u2116",3:"\u65B0ID\u7684\u6578\u5B57",4:"\u010C\xEDslice nov\xE9ho ID",5:"Cifre af nyt ID"
,0:"Digits of new ID",6:"Cijfer van nieuw ID",7:"Uue ID number",8:"Uusi ID-numero"
,9:"Chiffres du nouvel ID",10:"Neue ID: L\xE4nge",11:"\u03A8\u03B7\u03C6\u03AF\u03B1 \u03BD\u03AD\u03B1\u03C2 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2"
,12:"\xDAj azonos\xEDt\xF3 sz\xE1mjegyei",16:"Sifre i ny ID",20:"\u041D\u043E\u0432\u044B\u0439\u2116:\u0434\u043B\u0438\u043D\u0430"
,21:"D\xEDgitos de ID nueva",23:"Yeni ID say\u0131lar\u0131",24:"\u041D\u043E\u0432\u0438\u0439\u2116:\u0434\u043E\u0432\u0436\u0438\u043D\u0430"
};C.A6m={1:"Direktni pozivi funkcija",2:"\u0414\u0438\u0440\u0435\u043A\u0442\u043D\u0438 \u0438\u0437\u0432\u0438\u043A\u0432\u0430\u043D\u0438\u044F "+
"\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438",4:"P\u0159\xEDm\xE9 vol\xE1n\xED funkc\xED"
,5:"Direkte funktionskald",0:"Direct function calls",6:"Directe functieaanroepen"
,7:"Otsesed funktsioonikutsed",8:"Suorat toiminnot",9:"Fonctions directes",10:"Direktfunktionen"
,11:"\u0386\u03BC\u03B5\u03C3\u03B5\u03C2 \u03BA\u03BB\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03C3\u03C5\u03BD\u03B1\u03C1\u03C4\u03AE\u03C3\u03B5\u03C9\u03BD",12:"K\xF6zvetlen f\xFCggv\xE9nyh\xEDv\xE1sok"
,16:"Direkte funksjonskall",20:"\u041F\u0440\u044F\u043C\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B "+
"\u0444\u0443\u043D\u043A\u0446\u0438\u0439",23:"Do\u011Frudan i\u015Flev \xE7a\u011Fr\u0131lar\u0131"
,24:"\u041F\u0440\u044F\u043C\u0456 \u0432\u0438\u043A\u043B\u0438\u043A\u0438 "+
"\u0444\u0443\u043D\u043A\u0446\u0456\u0439"};C.A6n={1:"Onemogu\u0107i sve + resetuj redoslijed"
,2:"\u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435 "+"\u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 + \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430",4:"Zak\xE1zat v\u0161e + obnovit po\u0159ad\xED"
,5:"Deaktiver alle + nulstil ordre",0:"Disable all + reset order",6:"Deactiveer alles en reset"
,7:"Keela k\xF5ik + l\xE4htesta j\xE4rjekord",8:"Poista kaikki arvot k\xE4yt\xF6st\xE4"
,9:"D\xE9sactiver toutes les valeurs",10:"Alle Werte deaktivieren",11:"\u0391\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03CC\u03BB\u03C9\u03BD + \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC "+
"\u03C0\u03B1\u03C1\u03B1\u03B3\u03B3\u03B5\u03BB\u03AF\u03B1\u03C2",12:"Kikapcsol\xE1s minden + \xFAjraind\xEDt\xE1si sorrend"
,16:"Deaktiver alle + tilbakestill rekkef\xF8lge",20:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0441\u0435 "+
"+ \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
,21:"Desactivar todo + restablecer orden",23:"T\xFCm\xFCn\xFC devre d\u0131\u015F\u0131 b\u0131rak + sipari\u015Fi s\u0131f\u0131rla"
,24:"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0432\u0441\u0435 + "+"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
};C.Display={1:"Prikaz",2:"\u0414\u0438\u0441\u043F\u043B\u0435\u0439",4:"Zobrazit"
,5:"Sk\xE6rm",0:"Display",7:"N\xE4ita",8:"N\xE4ytt\xF6",9:"Pr\xE9sentation",10:"Darstellung"
,11:"\u039F\u03B8\u03CC\u03BD\u03B7",12:"Kijelz\u0151",16:"Skjerm",20:"\u0414\u0438\u0441\u043F\u043B\u0435\u0439"
,21:"Visualizaci\xF3n",23:"G\xF6r\xFCnt\xFCle",24:"\u0414\u0438\u0441\u043F\u043B\u0435\u0439"
};C.Biv={1:"prikazane informacije",2:"\u041F\u043E\u043A\u0430\u0437\u0432\u0430\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,3:"\u986F\u793A\u7684\u8A0A\u606F",4:"Zobrazen\xED info",5:"Viste dyreoplysninger"
,0:"Displayed animal info",6:"Weergegeven informatie",7:"Kuva info",8:"N\xE4ytetyt tiedot"
,9:"Informations affich\xE9es",10:"Angezeigte Tierinfo",11:"\u0395\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2",12:"Megjelen\xEDtett \xE1llatinf\xF3"
,16:"Vist info",20:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u0430\u044F "+
"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",21:"Informaci\xF3n mostrada"
,23:"G\xF6r\xFCnt\xFClenen hayvan bilgileri",24:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0430 "+
"\u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"};C.Biw={1:"Informacije prikazane u listi"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0441\u0435 \u043F\u043E\u043A\u0430\u0437\u0432\u0430 \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430"
,4:"Informace zobrazen\xE9 v seznamu",5:"Informationer vises p\xE5 liste",0:"Info displayed in list"
,6:"Info weergegeven in lijst",7:"Teave on kuvatud loendina",10:"In Liste gezeigte Info"
,11:"\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 "+
"\u03C3\u03B5 \u03BB\u03AF\u03C3\u03C4\u03B1",12:"Inform\xE1ci\xF3k megjelen\xEDtve list\xE1ban"
,16:"Informasjon vist i liste",20:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u0430\u044F "+
"\u0432 \u0441\u043F\u0438\u0441\u043A\u0435",23:"Listede g\xF6r\xFCnt\xFClenen bilgiler"
,24:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430 "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443"};C.Le={1:"obavljeno",2:"\u0413\u043E\u0442\u043E\u0432\u043E"
,4:"hotovo",5:"f\xE6rdig",0:"done",6:"klaar",7:"Tehtud",8:"Tehty",9:"fait",10:"erledigt"
,11:"\u0388\u03B3\u03B9\u03BD\u03B5",12:"k\xE9sz",16:"Ferdig",20:"\u0433\u043E\u0442\u043E\u0432\u043E"
,21:"hecho",23:"Tamamland\u0131",24:"\u0433\u043E\u0442\u043E\u0432\u043E"};C.AN5={
1:"Zasu\u0161eno",2:"\u041F\u0440\u0435\u0441\u0443\u0448\u0435\u043D\u0438",4:"Usu\u0161en\xFD"
,5:"Aft\xF8rret",0:"Dried-off",6:"Drooggezet",7:"Kuivatatud",8:"Umpeutettu",9:"Tarie"
,10:"Trocken~stehend",11:"\u03A3\u03C4\u03B5\u03B9\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5"
,12:"Kisz\xE1radt",16:"T\xF8rket-av",20:"\u0421\u0443\u0445~\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435"
,21:"Secada",23:"Kuru-Kapal\u0131",24:"\u0421\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456"
};C.BiQ={1:"upravlja\u010Dki program monitora",2:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u0437\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439"
,4:"Ovlada\u010D zobrazov\xE1n\xED",5:"Sk\xE6rmdriver",0:"Display driver",7:"Ekraani draiver"
,8:"N\xE4yt\xF6nohjain",9:"Pilote d\'\xE9cran",10:"Bildschirmtreiber",11:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03BF\u03B4\u03B7\u03B3\u03BF\u03CD"
,12:"Kijelz\u0151illeszt\u0151 program",16:"Skjermdriver",20:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430"
,21:"Controlador de pantalla",23:"G\xF6r\xFCnt\xFCleyici S\xFCr\xFCc\xFCs\xFC",24:
"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u0435\u043A\u0440\u0430\u043D\u0443"
};C.BiR={1:"suho",2:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u0438"
,4:"Such\xFD",5:"T\xF8r",0:"Dry",6:"Droog",7:"Kinni",8:"Ummessa",9:"Tarie",10:"T"
,11:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03B1",12:"Sz\xE1raz",16:"T\xF8rke",20:"\u0421\u0443\u0445\u043E\u0439"
,21:"Seca",23:"Kuru",24:"\u0421\u0443\u0445\u0438\u0439"};C.A6x={1:"zasu\u0161ene krave"
,2:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u0438 \u043A\u0440\u0430\u0432\u0438"
,4:"Such\xE9 kr\xE1vy",5:"T\xF8rre k\xF8er",0:"Dry cows",6:"Droge koeien",7:"Kinnislehmad"
,8:"Umpeutetut",9:"Vaches taries",10:"Trockensteher",11:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03B5\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B8\u03B5\u03C2"
,12:"Sz\xE1raz teh\xE9n",16:"Gjelskyr",20:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435"
,21:"Vacas secas",23:"S\xFCtten Kesilmi\u015F \u0130nekler(Kuru)",24:"\u0421\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456"
};C.DryOff={1:"zasu\u0161iti",2:"\u041F\u0440\u0435\u0441\u0443\u0448\u0430\u0432\u0430\u043D\u0435"
,4:"Usu\u0161it se",5:"T\xF8r af",0:"Dry off",6:"Droog zetten",7:"Kuivata end",8:
"Umpeutus",9:"Tarissement",10:"Trocken~stellen",11:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03C9\u03C3\u03B5"
,12:"Lesz\xE1r\xEDt",16:"T\xF8rk-av",20:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
,21:"Secar",23:"Kuru Kapal\u0131",24:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438"
};C.BiS={1:"EEPROM mati\u010Dna plo\u010Da",4:"EEPROM z\xE1kladn\xED deska",5:"EEPROM-hovedkort"
,0:"EEPROM Mainboard",7:"EEPROM emaplaat",8:"EEPROM -emolevy",9:"EEPROM carte -m\xE8re"
,11:"\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03C0\u03BB\u03B1\u03BA\u03AD\u03C4\u03B1 "+
"EEPROM",12:"EEPROM alaplap",16:"EEPROM hovedkort",20:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430 "+
"EEPROM",21:"EEPROM Placa principal",23:"EEPROM Anakart",24:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0430 \u043F\u043B\u0430\u0442\u0430 "+
"EEPROM"};C.BiT={1:"EEPROMplo\u010Da",0:"EEPROM Torchboard",9:"EEPROM carte (lumi\xE8re)"
,11:"\u03A0\u03BB\u03B1\u03BA\u03AD\u03C4\u03B1 \u03C6\u03B1\u03BA\u03BF\u03CD "+
"EEPROM",16:"EEPROM Datakort",21:"EEPROM Placa de antorcha",23:"EEPROM Me\u015Fale Tahtas\u0131"
};C.A6y={4:"\xDAnik",0:"ESC",11:"\u0394\u03B9\u03B1\u03C6\u03C5\u03B3\u03AE",20:
"\u042D\u0421\u041A",24:"\u0415\u0421\u041A"};C.ACL={1:"broj u\u0161ne markice",
2:"\u0423\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430",4:"\u010C\xEDslo u\u0161n\xEDho \u0161t\xEDtku"
,5:"\xD8rem\xE6rkenummer",0:"Ear tag number",6:"Oormerknummer",7:"K\xF5rvam\xE4rgi number"
,8:"Korvamerkki numero",9:"\u2116 de la mar~que auriculaire",10:"Ohrmarkennr.",11:
"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5"
,12:"F\xFCljel sz\xE1ma",16:"\u2116 p\xE5 \xF8remerke",20:"\u041D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438"
,21:"N\xFAmero de etiqueta de oreja",23:"Kulak K\xFCpe Numaras\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"
};C.Easy={1:"lako",2:"\u041B\u0435\u0441\u043D\u043E",4:"Snadn\xE9",5:"Nem",0:"Easy"
,6:"Makkelijk",7:"Lihtne",8:"Helppo",9:"Facile",10:"Leicht",11:"\u0395\u03CD\u03BA\u03BF\u03BB\u03BF"
,12:"K\xF6nny\u0171",16:"Lett",20:"\u043B\u0435\u0433\u043A\u043E",21:"F\xE1cil"
,23:"Kolay",24:"\u041B\u0435\u0433\u043A\u043E"};C.Edit={1:"obrada",2:"\u041F\u0440\u043E\u043C\u0435\u043D\u0438"
,3:"\u7DE8\u8F2F",4:"Upravit",5:"Rediger",0:"Edit",6:"Bewerken",7:"Kohanda",8:"Muokkaa"
,9:"Changer",10:"Bearbeiten",11:"\u0394\u03B9\u03CC\u03C1\u03B8\u03C9\u03C3\u03B7"
,12:"Szerkeszt",16:"Rediger",20:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
,21:"Editar",23:"D\xFCzenle",24:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438"};C.
A6z={1:"Uredi ozna\u010Deno obavje\u0161tenje",2:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0430\u0442\u0430 \u0431\u0435\u043B\u0435\u0436\u043A\u0430"
,4:"Upravit ozna\u010Den\xE9 ozn\xE1men\xED",5:"Rediger markeret meddelelse",0:"Edit marked notice"
,6:"Voeg gemarkeerde melding toe",7:"Muuda m\xE4rgitud teadet",8:"Muokkaa merkitty\xE4 ilmoitusta"
,9:"Modifier la d\xE9claration marqu\xE9e",10:"Mark. Meldung bearbeiten",11:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03B1\u03C3\u03BC\u03AD\u03BD\u03B7\u03C2 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2",12:"Jel\xF6lt \xE9rtes\xEDt\xE9s szerkeszt\xE9se"
,16:"Rediger merket varsel",20:"\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435"
,21:"Editar notificaci\xF3n marcada",23:"\u0130\u015Faretli bildirimi d\xFCzenle"
,24:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"};C.A6A={
1:"obrada",2:"\u041F\u0440\u043E\u043C\u0435\u043D\u0438",3:"\u7DE8\u8F2F\u503C"
,4:"Upravit",5:"Redig\xE9r",0:"Edit",6:"Veranderen",7:"Kohanda",8:"Muokkaa",9:"Changer"
,10:"\xC4ndern",11:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1"
,12:"Szerkeszt",16:"Rediger",20:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
,21:"Modificar",23:"D\xFCzenle",24:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438"};
C.BiV={1:"elektronska u\u0161na markica",2:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0443\u0448\u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0430",4:"Elektronick\xE1 u\u0161n\xED zn\xE1mka",5:"Elektronisk \xF8rem\xE6rke"
,0:"Electronic eartag",6:"Elektronische Oortag",7:"Elektrooniline k\xF5rvam\xE4rk"
,8:"Elektr. korvamerkki",9:"Boucle \xE9lectronique",10:"Elektronische Ohrmarke",
11:"\u0397\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03CC \u03B5\u03BD\u03CE\u03C4\u03B9\u03BF"
,12:"Elektronikus f\xFCljelz\u0151",16:"Elektronisk \xF8remerke",20:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0443\u0448\u043D\u0430\u044F "+
"\u0431\u0438\u0440\u043A\u0430",23:"Elektronik kulak etiketi",24:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0432\u0443\u0448\u043D\u0430 "+
"\u0431\u0456\u0440\u043A\u0430"};C.AOb={1:"Prazna lista \u017Eivotinja: nisu prona\u0111ene \u017Eivotinje po zadatim "+
"parametrima pretrage",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438:\n\u043D\u0435 \u0441\u0430 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438 "+
"\u0442\u0435\u043A\u0443\u0449\u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 "+
"\u0437\u0430 \u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0435",4:"Pr\xE1zdn\xFD seznam zv\xED\u0159at:\nnebyla nalezena \u017E\xE1dn\xE1 "+
"zv\xED\u0159ata odpov\xEDdaj\xEDc\xED aktu\xE1ln\u011B pou\u017Eit\xFDm "+"krit\xE9ri\xEDm filtrov\xE1n\xED."
,5:"Tom dyreliste:\ningen matchende dyr fundet med de nuv\xE6rende filterkriterier "+
"anvendt",0:"Empty animal list:\nno matching animals found with current filter criteria "+
"applied",6:"lege koeien lijst geen dier gevonden met deze criteria",7:"T\xFChjenda looma nimekiri:\nei leitud valiku p\xF5hist looma"
,8:"Tyhj\xE4 el\xE4inluettelo:\nvastaavia el\xE4imi\xE4 ei l\xF6ydy, jos nykyisi\xE4 "+
"suodatusehtoja on k\xE4ytetty",9:"Liste d\u2019animaux vide\xA0:\naucun animal trouv\xE9 avec les crit\xE8res "+
"de filtrage actuels appliqu\xE9s",10:"Leere Tierliste:\nmit den aktuell vereinbarten Filter~kriterien wurden "+
"keine Tiere gefunden",11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD:\n\u03B4\u03AD\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 "+
"\u03C4\u03B1 \u03B4\u03BF\u03B8\u03AD\u03BD\u03C4\u03B1 \u03BA\u03C1\u03B9\u03C4\u03AE\u03C1\u03B9\u03B1 "+
"\u03C6\u03B9\u03BB\u03C4\u03C1\u03B1\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03BF\u03C2"
,12:"\xDCres \xE1llatlista:\nnincs egyez\u0151 \xE1llat a jelenleg alkalmazott "+
"sz\u0171r\xE9si krit\xE9riumok szerint",16:"Tom dyreliste:\ningen samsvarende dyr funnet med bruk av gjeldende filterkriterier"
,20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043F\u0443\u0441\u0442:\n\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 "+
"\u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0443\u044E\u0449\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",21:"Lista de animales vac\xEDa:\nno se encontraron animales coincidentes con "+
"los criterios de filtro actuales aplicados",23:"Bo\u015F hayvan listesi:\nmevcut filtre kriterlerinin uyguland\u0131\u011F\u0131 "+
"e\u015Fle\u015Fen hayvan bulunamad\u0131",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043F\u0443\u0441\u0442\u0438\u0439:\n\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 "+
"\u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0447\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0456\u044F\u043C \u043F\u043E\u0448\u0443\u043A\u0443, "+
"\u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.AOc={1:"Prazna lista \u017Eivotinja: nisu prona\u0111ene \u017Eivotinje po zadatim "+
"parametrima pretrage",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438:\n\u043D\u0435 \u0441\u0430 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D "+
"\u0442\u0435\u043A\u0443\u0449 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 "+
"\u0437\u0430 \u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0435",4:"Pr\xE1zdn\xFD seznam zv\xED\u0159at:\nnebyla nalezena \u017E\xE1dn\xE1 "+
"zv\xED\u0159ata odpov\xEDdaj\xEDc\xED aktu\xE1ln\u011B pou\u017Eit\xE9mu "+"filtru."
,5:"Tom dyreliste:\ningen matchende dyr fundet med det nuv\xE6rende filterkriterium "+
"anvendt",0:"Empty animal list:\nno matching animals found with current filter criterion "+
"applied",6:"lege koeien lijst geen dier gevonden met deze criteria",7:"T\xFChjenda looma nimikiri:\nei leitud kriteeriumile vastavat looma"
,8:"Tyhj\xE4 el\xE4inluettelo:\nvastaavia el\xE4imi\xE4 ei l\xF6ydy, jos nykyinen "+
"suodatuskriteeri on k\xE4yt\xF6ss\xE4",9:"Liste d\u2019animaux vide\xA0:\naucun animal trouv\xE9 avec les crit\xE8res "+
"de filtrage actuels appliqu\xE9s",10:"Leere Tierliste:\nmit dem aktuell vereinbarten Filter~kriterium wurden "+
"keine Tiere gefunden",11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD:\n\u03B4\u03AD\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 "+
"\u03C4\u03B1 \u03B4\u03BF\u03B8\u03AD\u03BD \u03BA\u03C1\u03B9\u03C4\u03AE\u03C1\u03B9\u03BF "+
"\u03C6\u03B9\u03BB\u03C4\u03C1\u03B1\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03BF\u03C2"
,12:"\xDCres \xE1llatlista:\nnem tal\xE1lhat\xF3 egyez\u0151 \xE1llat az alkalmazott "+
"sz\u0171r\xE9si krit\xE9riumok alapj\xE1n",16:"Tom dyreliste:\ningen samsvarende dyr funnet med bruk av gjeldende filterkriterium"
,20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043F\u0443\u0441\u0442:\n\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 "+
"\u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0443\u044E\u0449\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",21:"Lista de animales vac\xEDa:\nno se encontraron animales coincidentes con "+
"el criterio de filtro actual aplicado",23:"Bo\u015F hayvan listesi:\nmevcut filtre kriteri uygulanm\u0131\u015F e\u015Fle\u015Fen "+
"hayvan bulunamad\u0131",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043F\u0443\u0441\u0442\u0438\u0439:\n\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 "+
"\u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0447\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0456\u044F\u043C \u043F\u043E\u0448\u0443\u043A\u0443, "+
"\u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.AqL={1:"Korak nazad"
,2:"\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 "+
"\u0432\u0441\u0438\u0447\u043A\u0438 + \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430",3:"\u5168\u90E8\u555F\u7528+\u91CD\u7F6E\u9806\u5E8F"
,4:"Povolit v\u0161e + resetovat po\u0159ad\xED",5:"Aktiv\xE9r alle + nulstil r\xE6kkef\xF8lge"
,0:"Enable all + reset order",6:"Schakel in + zet terug",7:"Luba k\xF5ik + l\xE4htesta k\xE4sk"
,8:"Ota k\xE4ytt\xF6\xF6n kaikki + nollausj\xE4rjestys",9:"R\xE9initialisation de l\u2019ordre"
,10:"Reihenfolge zur\xFCcksetzen",11:"\u0395\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03CC\u03BB\u03C9\u03BD + \u03B5\u03C0\u03B1\u03BD\u03B1\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",12:"Enged\xE9lyezd az \xF6sszeset + \xE1ll\xEDtsd vissza a sorrendet"
,16:"Aktiver alle + tilbakestill rekkef\xF8lge",20:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"
,21:"Restablecer orden",23:"T\xFCm\xFCn\xFC etkinle\u015Ftir + sipari\u015Fi s\u0131f\u0131rla"
,24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0456\u0441\u0442\u044C"
};C.BiW={1:"Unesite ID \u017Eivotinje ru\u010Dno",2:"\u0412\u044A\u0432\u0435\u0434\u0435\u0442\u0435 ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0440\u044A\u0447\u043D\u043E",4:"Zadejte ID zv\xED\u0159ete ru\u010Dn\u011B",
5:"Indtast dyrets ID manuelt",0:"Enter animal ID manually",6:"Diernummer handmatig geven"
,7:"Sisesta looma ID k\xE4sitsi",8:"El\xE4in nro. sy\xF6t\xE4 manuaalisesti",9:"Saisir manuellement le n\xB0 de l\'animal"
,10:"Tiernr. manuell eingeben",11:"\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B1 "+
"\u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5",12:"K\xE9rem, adja meg az \xE1llat azonos\xEDt\xF3j\xE1t k\xE9zzel."
,16:"Skriv inn dyre-ID manuelt",20:"\u0412\u0432\u0435\u0441\u0442\u0438 ID \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0432\u0440\u0443\u0447\u043D\u0443\u044E",21:"Ingresar ID del animal manualmente"
,23:"Hayvan kimli\u011Fini manuel olarak girin",24:"\u0423\u0432\u0435\u0441\u0442\u0438 ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0432\u0440\u0443\u0447\u043D\u0443"};C.BiX={1:"Aparat \u0107e pre\u0107i u modus mirovanja za {#} minute. Za ponovno pokretanje "+
"pritisnite bilo koje dugme.",2:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0449\u0435 \u0432\u043B\u0435\u0437\u0435 \u0432 \u0440\u0435\u0436\u0438\u043C "+
"\u043D\u0430 \u0437\u0430\u0441\u043F\u0438\u0432\u0430\u043D\u0435 \u0441\u043B\u0435\u0434 "+
"{#} \u043C\u0438\u043D\u0443\u0442\u0438. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 "+
"\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u0435\u043D \u043A\u043B\u0430\u0432\u0438\u0448, "+
"\u0437\u0430 \u0434\u0430 \u0432\u044A\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 "+
"\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u0430.",4:"P\u0159echod do \u0159e\u017Eimu sp\xE1nku za {#} minut. Stisknut\xEDm "+
"libovoln\xE9 kl\xE1vesy pokra\u010Dujte v \u010Dinnosti.",5:"Enheden g\xE5r i dvale om {#} minutter. Tryk p\xE5 en hvilken som helst "+
"tast for at genoptage drift.",0:"Device will enter sleep mode in {#} minutes. Press any key to resume operation."
,6:"Apparaat word in {#} minuten in rustmodus gezet. Willekeurige toets drukken "+
"om verder te gaan.",7:"Seade l\xE4heb puhkeasendisse {#} min. Vajuta suvalist nuppu t\xFChistamaks "+
"k\xE4sku.",8:"Laite siirtyy lepotilaan {#} minuutissa. Jatka k\xE4ytt\xF6\xE4 painamalla "+
"mit\xE4 tahansa n\xE4pp\xE4int\xE4.",9:"L\u2019appareil va entrer en mode veille en {#} minutes. Appuyez sur une "+
"touche pour continuer.",10:"Ger\xE4t wird in {#} Minuten in den Ruhezustand versetzt. Eine beliebige "+
"Taste dr\xFCcken, um fortzufahren.",11:"\u0397 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B8\u03B1 \u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03C3\u03B5 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03B1\u03BD\u03B1\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 "+
"\u03C3\u03B5 {#} \u03BB\u03B5\u03C0\u03C4\u03B1. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 "+
"\u03BF\u03C0\u03BF\u03B9\u03BF\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF "+
"\u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1.",12:
"Az eszk\xF6z {#} perc m\xFAlva alv\xF3 \xFCzemm\xF3dba l\xE9p. Nyomjon "+"meg b\xE1rmelyik gombot a m\u0171k\xF6d\xE9s folytat\xE1s\xE1hoz."
,16:"Enheten g\xE5r i hvilemodus om {#} minutter. Trykk p\xE5 hvilken som helst "+
"tast for \xE5 gjenoppta driften.",20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0439\u0434\u0435\u0442 "+
"\u0432 \u0440\u0435\u0436\u0438\u043C \u0441\u043D\u0430 \u0447\u0435\u0440\u0435\u0437 "+
"{#} \u043C\u0438\u043D\u0443\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 "+
"\u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0430\u0432\u0438\u0448\u0443 "+"\u0434\u043B\u044F \u0432\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F "+
"\u0440\u0430\u0431\u043E\u0442\u044B.",21:"El dispositivo entrar\xE1 en modo de reposo dentro de {#} minutos. Pulse "+
"cualquier bot\xF3n para continuar.",23:"Cihaz {#} dakika sonra uyku moduna ge\xE7iyor. \u0130\u015Flemi s\u0131f\u0131rlamak "+
"i\xE7in herhangi bir tu\u015Fa bas\u0131n.",24:"\u0420\u0435\u0436\u0438\u043C \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0431\u0443\u0434\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u043E "+
"\u0447\u0435\u0440\u0435\u0437 {#} \u043C\u0438\u043D\u0443\u0442\u044B. "+"\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F "+
"\u043D\u0430\u0436\u043C\u0456\u0442\u044C \u0431\u0443\u0434\u044C \u044F\u043A\u0443 "+
"\u043A\u043B\u0430\u0432\u0456\u0448\u0443."};C.BiY={1:"Kopitar / konj",2:"\u0415\u0434\u043D\u043E\u043A\u043E\u043F\u0438\u0442\u043D\u043E/\u043A\u043E\u043D"
,4:"K\u016F\u0148",5:"Hest",0:"Equine/horse",6:"Paard",7:"Hobune",9:"\xC9quid\xE9/cheval"
,10:"Einhufer/Pferd",11:"\u0386\u03BB\u03BF\u03B3\u03BF",12:"l\xF3",16:"Hest",20:
"\u041D\u0435\u043F\u0430\u0440\u043D\u043E\u043A\u043E\u043F\u044B\u0442\u043D\u044B\u0435 "+
"/ \u043B\u043E\u0448\u0430\u0434\u044C",21:"Equino/ Caballo",23:"At",24:"\u041D\u0435\u043F\u0430\u0440\u043D\u043E\u043A\u043E\u043F\u0438\u0442\u043D\u0456 "+
"/ \u043A\u0456\u043D\u044C"};C.BiZ={1:"Gre\u0161ka(e) prilikom provjere upravlja\u010Dkih programa!\n\n\u017Delite "+
"li vidjeti detaljne informacije o gre\u0161ci(ama)?",2:"\u0413\u0440\u0435\u0448\u043A\u0430(\u0438) \u043F\u0440\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 "+
"\u043D\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043D\u0430 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430!\n\n\u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430 "+
"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 "+"\u0433\u0440\u0435\u0448\u043A\u0430\u0442\u0430(\u0438\u0442\u0435)?"
,4:"Chyba(y) p\u0159i kontrole ovlada\u010D\u016F za\u0159\xEDzen\xED!\n\nP\u0159ejete "+
"si zobrazit podrobn\xE9 informace o chyb\u011B(ch)?",5:"Fejl ved kontrol af enhedsdrivere!\n\nVil du se detaljerede oplysninger "+
"om fejlen(e)?",0:"Error(s) when checking device drivers!\n\nWould you like to see detail "+
"information on the error(s)?",6:"Foutmelding met checken drivers. Wil je de link zien met details?"
,7:"Viga seadme draiverite kontrollimisel!\n\nKas soovite n\xE4ha vea (vigade) "+
"t\xE4psemat teavet?",8:"Virheit\xE4 laiteajureita tarkastettaessa!\n\nHaluatko n\xE4hd\xE4 tarkat "+
"tiedot virheist\xE4?",9:"Erreur lors de la v\xE9rification des pilotes de dispositif\xA0!"
,10:"Fehler bei der \xDCberpr\xFCfung der Ger\xE4tetreiber!\n\nM\xF6chten Sie "+
"Informa~tion zu den aufgetrete~nen Fehler(n) erhalten?",11:"\u039B\u03AC\u03B8\u03BF\u03C2(\u03B7) \u03BA\u03B1\u03C4\u03AC \u03C4\u03BF\u03BD "+
"\u03AD\u03BB\u03B5\u03B3\u03C7\u03BF \u03C4\u03C9\u03BD \u03BF\u03B4\u03B7\u03B3\u03CE\u03BD "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD!\n\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03BD\u03B1 \u03B4\u03B5\u03AF\u03C4\u03B5 \u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03BB\u03AC\u03B8\u03BF\u03C2(\u03B7);",12:"Hiba(k) az eszk\xF6zmeghajt\xF3k ellen\u0151rz\xE9sekor!\n\nSzeretn\xE9 "+
"l\xE1tni a hiba(k) r\xE9szletes inform\xE1ci\xF3it?",16:"Feil(er) ved kontroll av enhetsdrivere!\n\nVil du se detaljert informasjon "+
"om feilen(e)?",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 "+
"\u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,21:"Errores al verificar los controladores del dispositivo",23:"Ayg\u0131t s\xFCr\xFCc\xFClerini kontrol ederken hata(lar)!\n\nHata(lar) "+
"hakk\u0131nda ayr\u0131nt\u0131l\u0131 bilgi g\xF6rmek ister misiniz?",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 "+
"\u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.A6B={1:"Evaluacija",2:"\u041E\u0446\u0435\u043D\u043A\u0430",4:"Hodnocen\xED"
,5:"Evaluering",0:"Evaluation",6:"Evaluatie",7:"Hindamine",8:"Arviointi",9:"\xC9valuation"
,10:"Auswerten",11:"\u0391\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7"
,12:"\xC9rt\xE9kel\xE9s",16:"Evaluering",20:"\u041E\u0446\u0435\u043D\u043A\u0430"
,21:"Evaluaci\xF3n",23:"De\u011Ferlendirme",24:"\u041E\u0446\u0456\u043D\u043A\u0430"
};C.A6C={1:"Statistika te\u017Eine pri ro\u0111enju se ne mo\u017Ee obra\u010Dunati!"
,2:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430\u0442\u0430 "+"\u0437\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043F\u0440\u0438 "+
"\u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0438!",4:"Statistiky porodn\xED hmotnosti nelze vypo\u010D\xEDtat!"
,5:"Statistikker over f\xF8dselsv\xE6gt kan ikke beregnes!",0:"Birth weight statistics cannot be calculated!"
,6:"Geboortegewicht statistieken kan niet berekend worden",7:"S\xFCnnikaalu statistikat ei saa arvutada!"
,8:"Syntym\xE4~painotilastoja ei voi laskea!",9:"Les statistiques sur le poids de naissance ne peuvent pas \xEAtre calcul\xE9es!"
,10:"Statistiken zu den Geburtsgewichten k\xF6nnen nicht berechnet werden!",11:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B1\u03C2 "+"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!",12:"A sz\xFClet\xE9si s\xFAly statisztik\xE1k nem sz\xE1m\xEDthat\xF3k ki!"
,16:"F\xF8dselsvektstatistikk kan ikke beregnes!",20:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0432\u0435\u0441\u0430 "+
"\u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E "+
"\u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!",21:"No se pueden calcular estad\xEDsticas de peso al nacer."
,23:"Do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131 istatistikleri hesaplanam\u0131yor"
,24:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0432\u0430\u0433\u0438 "+
"\u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"
};C.EvaluationInProgress={1:"Obra\u010Dun stopa seo bra\u010Dunava\u2026\n\nMolim vas budite strpljivi!\n\n{1}%% "+
"obavljeno",2:"\u0418\u0437\u0447\u0438\u0441\u043B\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0442\u0435 "+
"\u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442\u0442\u0430 "+
"\u0435 \u0432 \u0445\u043E\u0434\u2026\n\n\u041C\u043E\u043B\u044F, \u0438\u043C\u0430\u0439\u0442\u0435 "+
"\u0442\u044A\u0440\u043F\u0435\u043D\u0438\u0435!\n\n{1} %% \u0433\u043E\u0442\u043E\u0432\u043E"
,4:"Prob\xEDh\xE1 v\xFDpo\u010Det parametr\u016F v\xFDkonu\u2026\n\nBu\u010Fte "+
"trp\u011Bliv\xED!\n\n{1} %% hotovo",5:"Beregning af ydelsesparametre er i gang\u2026\n\nV\xE6r t\xE5lmodig!\n\n{1} "+
"%% f\xE6rdig",0:"Calculation of performance parameters in progress\u2026\n\nPlease be patient!\n\n{1} "+
"%% done",6:"Berekening van prestatie parameters aan het laden. Wees geduldig",7:
"Tulemusparameetrite arvutamine...\n\nPalun oodake!\n\n{1} %% valmis",8:"Suorituskykyparametreja lasketaan\u2026\n\nOle k\xE4rsiv\xE4llinen!\n\n{1} "+
"%% valmis",9:"Calcul des param\xE8tres de performance en cours\u2026\n\n{1} %% fait"
,10:"Erfolgsgr\xF6\xDFen werden berechnet\u2026\n\nEtwas Geduld bitte!\n\n{1} "+
"%% erledigt",11:"\u03A5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03C9\u03BD "+
"\u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C2\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7...\n\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+
"\u03C0\u03B5\u03C1\u03B9\u03BC\u03AD\u03BD\u03B5\u03C4\u03B5!\n\n{1} %% "+"\u03AD\u03B3\u03B9\u03BD\u03B5"
,12:"Teljes\xEDtm\xE9nypar\xE1meterek kisz\xE1m\xEDt\xE1sa folyamatban...\n\nK\xE9rj\xFCk, "+
"legyen t\xFCrelmes!\n\n{1} %% k\xE9sz",16:"Beregning av ytelsesparametere p\xE5g\xE5r...\n\nVennligst v\xE6r t\xE5lmodig!\n\n{1} "+
"%% ferdig",20:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0443\u0441\u043F\u0435\u0445\u0430 "+
"\u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F\u2026\n\n\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435!\n\n{1} %% \u0433\u043E\u0442\u043E\u0432\u043E"
,21:"C\xE1lculo de par\xE1metros de rendimiento en progreso... Por favor, sea "+
"paciente.\n\n{1} %% completado.",23:"Performans parametrelerinin hesaplanmas\u0131 devam ediyor\u2026\n\nL\xFCtfen "+
"sab\u0131rl\u0131 olun!\n\n{1} %% tamamland\u0131",24:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0443\u0441\u043F\u0456\u0445\u0443 "+
"\u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F\u2026\n\n\u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E"};C.A6D={1:"Gubitak teladi se ne mo\u017Ee obra\u010Dunati!"
,2:"\u0417\u0430\u0433\u0443\u0431\u0438\u0442\u0435 \u043D\u0430 \u0442\u0435\u043B\u0435\u0442\u0430 "+
"\u043D\u0435 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 "+
"\u0438\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0438!",4:"Ztr\xE1ty telat nelze spo\u010D\xEDtat!"
,5:"Kalvetab kan ikke beregnes!",0:"Calf losses cannot be calculated!",6:"Kalver verliezen kan niet worden berekend"
,7:"Surnud vasikaid ei saa arvutada!",8:"Vasikkah\xE4vi\xF6it\xE4 ei voi laskea!"
,9:"Les pertes de veaux ne peuvent pas \xEAtre calcul\xE9es\xA0!",10:"K\xE4lberverluste k\xF6nnen nicht berechnet werden!"
,11:"\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD "+"\u03BF\u03B9 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B5\u03C2 \u03C4\u03C9\u03BD "+
"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD!",12:"A borj\xFAvesztes\xE9gek nem sz\xE1molhat\xF3k ki!"
,16:"Kalvetap kan ikke beregnes!",20:"\u041F\u043E\u0442\u0435\u0440\u0438 \u0442\u0435\u043B\u044F\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E "+
"\u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!",21:"No se pueden calcular las p\xE9rdidas de terneros."
,23:"Buza\u011F\u0131 kay\u0131plar\u0131 hesaplanamaz!",24:"\u0412\u0442\u0440\u0430\u0442\u0438 \u0442\u0435\u043B\u044F\u0442 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E "+
"\u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"};C.A6E={1:
"Statisti\u010Dke podatke u svrhu vrednovanja nije mogu\u0107e obra\u010Dunati!"
,2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u044F\u0432\u0430 "+
"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 "+"\u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430\u0442\u0430!"
,4:"Statistiky pro \xFA\u010Dely hodnocen\xED nelze vypo\u010D\xEDtat!",5:"Statistikker til evalueringsform\xE5l kan ikke beregnes!"
,0:"Statistics for evaluation purposes cannot be calculated!",6:"Statistieken voor evaluatie kan niet worden berekend"
,7:"Hindamiseks m\xF5eldud statistikat ei saa arvutada!",8:"Tilastot arviointia varten ei voida laskea!"
,9:"Les statistiques d\u2019\xE9valuation ne peuvent pas \xEAtre calcul\xE9es\xA0!"
,10:"Statistische Gr\xF6\xDFen zur Auswertung k\xF6nnen nicht berechnet werden!"
,11:"\u03A4\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BA\u03B1\u03AF\u03B1 \u03B3\u03B9\u03B1 "+
"\u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!"
,12:"Az \xE9rt\xE9kel\xE9si c\xE9lokra sz\xE1nt statisztik\xE1k nem sz\xE1m\xEDthat\xF3k "+
"ki!",16:"Statistikk for evaluerings form\xE5l kan ikke beregnes!",20:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 "+
"\u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B!"
,21:"No se pueden calcular estad\xEDsticas con fines de evaluaci\xF3n.",23:"De\u011Ferlendirme ama\xE7l\u0131 istatistikler hesaplanamaz!"
,24:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u043B\u044F \u043E\u0446\u0456\u043D\u043A\u0438 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C "+
"\u0431\u0443\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0456!"
};C.A6F={1:"Statistika temperature se ne mo\u017Ee izra\u010Dunati!",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u0442\u0430 "+
"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 "+"\u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0438!"
,4:"Statistiky teploty nelze vypo\u010D\xEDtat!",5:"Temperaturstatistikker kan ikke beregnes!"
,0:"Temperature statistics cannot be calculated!",6:"Temperatuur statistieken kan niet worden berekend"
,7:"Temperatuuri statistikat ei saa arvutada!",8:"L\xE4mp\xF6tilatilastoja ei voi laskea!"
,9:"Les statistiques de temp\xE9rature ne peuvent pas \xEAtre calcul\xE9es\xA0!"
,10:"Temperaturstatisti~ken k\xF6nnen nicht berechnet werden.",11:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!",12:"A h\u0151m\xE9rs\xE9kleti statisztik\xE1k nem sz\xE1m\xEDthat\xF3k ki!"
,16:"Temperaturstatistikk kan ikke beregnes!",20:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B "+
"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C."
,21:"No se pueden calcular estad\xEDsticas de temperatura.",23:"S\u0131cakl\u0131k istatistikleri hesaplanam\u0131yor!"
,24:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 "+
"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438."
};C.A6G={1:"Obra\u010Dun prirasta u kg se ne mo\u017Ee izra\u010Dunati!",2:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430\u0442\u0430 "+
"\u0437\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043D\u0430 "+"\u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0430!"
,4:"Statistiky v\xFDvoje hmotnosti nelze vypo\u010D\xEDtat!",5:"V\xE6gtudviklingsstatistikker kan ikke beregnes!"
,0:"Weight development statistics cannot be calculated!",6:"Gewicht ontwikkelings statistieken kan niet worden berekend"
,7:"Kaalu suurenemise statistikat ei saa arvutada!",8:"Painon kehitystilastoja ei voi laskea"
,9:"Les statistiques sur le d\xE9veloppement du poids ne peuvent pas \xEAtre "+"calcul\xE9es\xA0!"
,10:"Erfolgsgr\xF6\xDFen zur Gewichtsentwick~lung k\xF6nnen nicht berechnet "+"werden!"
,11:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7\u03C2 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!"
,12:"A s\xFAlyfejl\u0151d\xE9si statisztik\xE1k nem sz\xE1molhat\xF3k ki!",16:"Vektutviklings statistikk kan ikke beregnes!"
,20:"\u0424\u0430\u043A\u0442\u043E\u0440\u044B \u0443\u0441\u043F\u0435\u0445\u0430 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0432\u0435\u0441\u0430 "+"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!"
,21:"No se pueden calcular estad\xEDsticas de desarrollo de peso.",23:"A\u011F\u0131rl\u0131k geli\u015Fimi istatistikleri hesaplanam\u0131yor!"
,24:"\u0424\u0430\u043A\u0442\u043E\u0440\u0438 \u0443\u0441\u043F\u0456\u0445\u0443 "+
"\u0440\u043E\u0437\u0432\u0438\u0442\u043A\u0443 \u0432\u0430\u0433\u0438 "+"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"
};C.A6H={1:"Izvezi podatke o \u017Eivotinjama (csv)",2:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"(csv)",4:"Exportovat data o zv\xED\u0159atech (csv)",5:"Eksporter dyredata (csv)"
,0:"Export animal data (csv)",6:"Export dier data (csv)",7:"Ekspordi loomade andmed (csv)"
,8:"Vie el\xE4intiedot (csv)",9:"Exporter les donn\xE9es des animaux (CSV)",10:"Tierdaten exportieren (CSV)"
,11:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD (csv)",12:"\xC1llatadatok export\xE1l\xE1sa (csv)",16:
"Eksporter dyredata (csv)",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 (csv)",21:"Exportar datos de animales (csv)"
,23:"Hayvan verilerini d\u0131\u015Fa aktar (csv)",24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"(csv)"};C.AOq={1:"Izvoz csv liste ro\u0111enja",2:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 csv \u0441\u043F\u0438\u0441\u044A\u043A \u0441 \u0440\u0430\u0436\u0434\u0430\u043D\u0438\u044F"
,4:"Exportovat csv seznam narozen\xED",5:"Eksport\xE9r csv-liste over f\xF8dsler"
,0:"Export csv list of births",6:"Export csv lijst van geboortes",7:"Ekspordi s\xFCndide nimekiri"
,8:"Vie syntym\xE4luettelo",9:"Exporter la liste de d\xE9claration HIT",10:"HIT-Meldeliste exportieren"
,11:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD",12:"CSV lista export\xE1l\xE1sa a sz\xFClet\xE9sekkel"
,16:"Eksport liste over f\xF8dsler",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"CSV \u0441\u043F\u0438\u0441\u043E\u043A \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0439"
,21:"Exportar datos de animales (csv)",23:"Do\u011Fumlar\u0131n csv listesini d\u0131\u015Fa aktar"
,24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"CSV \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u044C"
};C.Extended={1:"Pro\u0161ireno",2:"\u0423\u0434\u044A\u043B\u0436\u0435\u043D",
3:"\u64F4\u5C55",4:"Prodlou\u017Een\xE9",5:"Forl\xE6nget",0:"Extended",6:"Uitgebreid"
,7:"Laiendatud",8:"Laajennettu",9:"\xC9tendu",10:"Erweitert",11:"\u0395\u03C0\u03B5\u03BA\u03C4\u03AC\u03B8\u03B7\u03BA\u03B5"
,12:"Kiterjedt",16:"Forlenget",20:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435"
,21:"Ampliado",23:"Geni\u015Fletildi",24:"\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456"
};C.A6I={1:"Fabri\u010Dka pode\u0161avanja",2:"\u0424\u0430\u0431\u0440\u0438\u0447\u043D\u043E \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435"
,3:"\u51FA\u5EE0\u8A2D\u5B9A\u503C",4:"Tov\xE1rn\xED nastaven\xED",5:"Fabriksindstilling"
,0:"Factory reset",6:"Reset fabrieksinstellingen",7:"Tehase seaded",8:"Tehdasasetukset"
,9:"R\xE9initialisation d\u2019usine",10:"Reset Werkseinstellung",11:"\u0395\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AD\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",12:"Gy\xE1ri be\xE1ll\xEDt\xE1sok vissza\xE1ll\xEDt\xE1sa"
,16:"Fabrikkinnstilt",20:"\u0421\u0431\u0440\u043E\u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A"
,21:"Restablecer ajustes f\xE1brica",23:"Fabrika ayarlar\u0131",24:"\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C"
};C.Bi1={1:"Gre\u0161ka prilikom kreiranja sigurnosne kopije na USB fle\u0161 disku!"
,2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E \u043A\u043E\u043F\u0438\u0435 "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,4:"Chyba p\u0159i vytv\xE1\u0159en\xED z\xE1lohy na USB flash disku!",5:"Fejl under oprettelse af backup p\xE5 USB-n\xF8gle!"
,0:"Error while creating backup on USB flash drive!",6:"Fout tijdens het maken van back up op USB stick"
,7:"Viga USB-m\xE4lupulgal varukoopia loomisel!",8:"Virhe luotaessa varmuuskopiota USB-muistitikulle!"
,9:"\xC9chec de sauvegarde de donn\xE9es",10:"Bei der Erstellung der Daten~siche~rung auf dem USB-^Stick ist ein Fehler "+
"auf~ge~treten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7 "+
"\u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \u03C3\u03B5 USB "+"flash drive!"
,12:"Hiba t\xF6rt\xE9nt a biztons\xE1gi ment\xE9s l\xE9trehoz\xE1sa k\xF6zben "+
"az USB-meghajt\xF3n!",16:"Feil under oppretting av sikkerhetskopi p\xE5 USB-minnepinne!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435!"
,21:"Error al crear una copia de seguridad en una unidad flash USB.",23:"USB flash s\xFCr\xFCc\xFCde yedekleme olu\u015Fturulurken hata olu\u015Ftu!"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u0456 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 \u043A\u043E\u043F\u0456\u0457 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448\u0446\u0456!"};C.Bi2={1:"Gre\u0161ka prilikom vra\u0107anja sigurnosne kopije sa USB flash diska!"
,2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E \u043A\u043E\u043F\u0438\u0435 "+
"\u043E\u0442 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,4:"Chyba p\u0159i obnov\u011B z\xE1lohy z USB flash disku!",5:"Fejl under gendannelse af backup fra USB-n\xF8gle!"
,0:"Error while restoring backup from USB flash drive!",6:"Fout tijdens het uploaden vanaf USB stick"
,7:"Viga USB-m\xE4lupulgalt varukoopia taastamisel!",8:"Virhe palautettaessa varmuuskopiota USB-muistitikulta!"
,9:"\xC9chec de la restauration des donn\xE9es sauvegard\xE9es",10:"Bei der Wieder~her~stellung der Daten~siche~rung vom USB-^Stick ist ein "+
"Fehler auf~ge~treten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \u03B1\u03C0\u03CC "+"USB flash drive!"
,12:"Hiba a vissza\xE1ll\xEDt\xE1s sor\xE1n USB-meghajt\xF3r\xF3l!",16:"Feil ved gjenoppretting av sikkerhetskopi fra USB-minnepinne!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\u0441 USB-\u0444\u043B\u0435\u0448\u043A\u0438!",21:"Error al restaurar una copia de seguridad desde una unidad flash USB."
,23:"Yedeklemeyi USB flash s\xFCr\xFCc\xFCden geri y\xFCklerken hata olu\u015Ftu!"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 "+
"\u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \u0437 USB-\u0444\u043B\u0435\u0448\u043A\u0438!"
};C.Bi3={1:"Gre\u0161ka prilikom pisanja CSV datoteke s obavijestima o ro\u0111enju "+
"na USB flash disk!",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043D\u0430 CSV \u0444\u0430\u0439\u043B \u0441 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448\u043A\u0430!"
,4:"Chyba p\u0159i z\xE1pisu CSV souboru s ozn\xE1men\xEDmi o narozen\xED na "+"USB flash disk!"
,5:"Fejl ved skrivning af CSV-fil med f\xF8dselsmeddelelser til USB-n\xF8gle!",0:
"Error when writing CSV file with birth notices to USB flash drive!",6:"Fout tijdens schrijven op CSV bestand met geboorte meldingen naar USB stick"
,7:"Viga CSV-faili kirjutamisel s\xFCnniteadetega USB-m\xE4lupulgale!",8:"Virhe kirjoitettaessa syntym\xE4ilmoituksia sis\xE4lt\xE4v\xE4\xE4 CSV-tiedostoa "+
"USB-muistitikulle!",9:"Erreur lors de l\'\xE9criture du fichier CSV avec les d\xE9clarations de "+
"naissance sur la cl\xE9 USB\xA0!",10:"Beim Schreiben der CSV-Datei mit Geburts~mel~dun~gen auf den USB-^Stick "+
"ist ein Fehler aufgetreten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 "+
"CSV \u03BC\u03B5 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD \u03C3\u03B5 USB "+"flash drive!"
,12:"Hiba t\xF6rt\xE9nt a sz\xFClet\xE9si \xE9rtes\xEDt\xE9sek CSV f\xE1jlj\xE1nak "+
"USB-meghajt\xF3ra \xEDr\xE1sa sor\xE1n!",16:"Feil ved skriving av CSV-fil med f\xF8dselsmeldinger til USB-minnepinne!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C CSV \u0444\u0430\u0439\u043B "+
"\u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043D\u0430 USB "+"\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C!"
,21:"\xA1Error al escribir el archivo CSV con las notificaciones de nacimientos "+
"en la unidad flash USB!",23:"Yedeklemeyi USB flash s\xFCr\xFCc\xFCden geri y\xFCklerken hata olu\u015Ftu!"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0441\u043F\u0440\u043E\u0431\u0456 "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u0438 CSV \u0444\u0430\u0439\u043B "+
"\u0456\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.Bi4={1:"Gre\u0161ka prilikom pisanja CSV datoteke s podacima o \u017Eivotinjama "+
"na USB fle\u0161 drajv!",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043D\u0430 CSV \u0444\u0430\u0439\u043B \u0441 \u0434\u0430\u043D\u043D\u0438 "+
"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448\u043A\u0430!"
,4:"Chyba p\u0159i z\xE1pisu CSV souboru s \xFAdaji o zv\xED\u0159atech na "+"USB flash disk!"
,5:"Fejl ved skrivning af CSV-fil med dyredata til USB-n\xF8gle!",0:"Error when writing CSV file with animal data to USB flash drive!"
,6:"Fout tijdens schrijven op CSV bestand met dier meldingen naar USB stick",7:"Viga CSV-faili loomisel loomade andmetega USB-m\xE4lupulgale!"
,8:"Virhe kirjoitettaessa el\xE4intietoja sis\xE4lt\xE4v\xE4\xE4 CSV-tiedostoa "+
"USB-muistitikulle!",9:"Erreur lors de l\'exportation des donn\xE9es des animaux sur la cl\xE9 "+
"USB\xA0!",10:"Fehler beim Export der Tierdaten auf den USB-Stick!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 "+
"CSV \u03BC\u03B5 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03C9\u03BD "+
"\u03C3\u03B5 USB flash drive!",12:"Hiba az \xE1llatadatokat tartalmaz\xF3 CSV f\xE1jl USB-meghajt\xF3ra t\xF6rt\xE9n\u0151 "+
"\xEDr\xE1sakor!",16:"Feil ved skriving av CSV-fil med dyredata til USB-minnepinne!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0444\u0430\u0439\u043B\u0430 CSV \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443!"
,21:"Error al escribir un archivo CSV con datos de animales en una unidad flash "+
"USB.",23:"Do\u011Fum bildirimlerini i\xE7eren CSV dosyas\u0131n\u0131 USB flash "+
"s\xFCr\xFCc\xFCye yazarken hata olu\u015Ftu!",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 "+
"\u0437\u0430\u043F\u0438\u0441\u0443 CSV-\u0444\u0430\u0439\u043B\u0443 "+"\u0437 \u0434\u0430\u043D\u0438\u043C\u0438 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443!"};C.Bi5={1:"Gre\u0161ka prilikom pisanja CSV datoteke s obavijestima o kupovini na "+
"USB flash disk!",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043D\u0430 CSV \u0444\u0430\u0439\u043B \u0441 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448\u043A\u0430!"
,4:"Chyba p\u0159i z\xE1pisu CSV souboru s ozn\xE1men\xEDmi o n\xE1kupu na "+"USB flash disk!"
,5:"Fejl ved skrivning af CSV-fil med k\xF8bsmeddelelser til USB-n\xF8gle!",0:"Error when writing CSV file with purchase notices to USB flash drive!"
,6:"Fout tijdens schrijven op CSV bestand met aankoop meldingen naar USB stick",
7:"Viga CSV-faili kirjutamisel ostuteadetega USB m\xE4lupulgale!",8:"Virhe kirjoitettaessa CSV-tiedostoa ostoilmoitusten kanssa USB-muistitikulle!"
,9:"Erreur lors de l\'\xE9criture du fichier CSV avec les donn\xE9es d\'acc\xE8s "+
"sur la cl\xE9 USB\xA0!",10:"Beim Schreiben der CSV-Datei mit Zugangs~mel~dun~gen auf den USB-^Stick "+
"ist ein Fehler aufgetreten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 "+
"CSV \u03BC\u03B5 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03C3\u03B5 USB flash drive!",12:"Hiba t\xF6rt\xE9nt a v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9seket tartalmaz\xF3 "+
"CSV f\xE1jl USB-meghajt\xF3ra t\xF6rt\xE9n\u0151 \xEDr\xE1sakor!",16:"Feil ved skriving av CSV-fil med kj\xF8psmeldinger til USB-minnepinne!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0444\u0430\u0439\u043B\u0430 CSV \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C!"
,21:"\xA1Error al escribir el archivo CSV con las notificaciones de compra "+"en la unidad flash USB!"
,23:"Sat\u0131n alma bildirimlerini i\xE7eren CSV dosyas\u0131n\u0131 USB flash "+
"s\xFCr\xFCc\xFCye yazarken hata olu\u015Ftu!",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 "+
"\u0437\u0430\u043F\u0438\u0441\u0443 \u0444\u0430\u0439\u043B\u0443 CSV "+"\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 "+"USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.ACR={1:"Farma",2:"\u0424\u0435\u0440\u043C\u0430",4:"Farma",5:"G\xE5rd",0:"Farm"
,6:"Bedrijf",8:"Maatila",9:"Exploitation",10:"Betrieb",11:"\u03A6\u03AC\u03C1\u03BC\u03B1"
,12:"Tanya",16:"G\xE5rd",20:"\u0424\u0435\u0440\u043C\u0430",21:"Granja",23:"\xC7iftlik"
,24:"\u0424\u0435\u0440\u043C\u0430"};C.A6J={1:"Trenutne \u017Eivotinje sa temperaturom"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 "+
"\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u044F \u043C\u043E\u043C\u0435\u043D\u0442"
,4:"Aktu\xE1ln\u011B hore\u010Dnat\u011B nemocn\xE1 zv\xED\u0159ata",5:"Aktuelt febrile syge dyr"
,0:"Currently febrile ill animals",6:"Huidige dieren met koortsachtige zieke dieren"
,7:"Praegu haiged ja palavikus loomad",8:"T\xE4ll\xE4 hetkell\xE4 kuumeisia el\xE4imi\xE4"
,9:"Animaux actuellement f\xE9briles",10:"Aktuell fiebrig erkrankte Tiere",11:"\u0395\u03C0\u03AF \u03C4\u03BF\u03C5 \u03C0\u03B1\u03C1\u03CC\u03BD\u03C4\u03BF\u03C2 "+
"\u03B5\u03BC\u03C0\u03CD\u03C1\u03B5\u03C4\u03B1 \u03AC\u03C1\u03C1\u03C9\u03C3\u03C4\u03B1 "+
"\u03B6\u03CE\u03B1",12:"Jelenleg l\xE1zas beteg \xE1llatok",16:"Febersyke dyr",
20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u0439 "+"\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"
,21:"Animales enfermos actualmente febriles",23:"\u015Eu anda ate\u015Fli hasta hayvanlar"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438 \u0456\u0437 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E\u044E "+
"\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u044E"};C.A6K={
1:"\u017Divotinje koje su u pro\u0161losti imale temperaturu!",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u043E\u0432\u0438\u0448\u0435\u043D\u0430 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043F\u0440\u0435\u0437 "+
"\u0446\u0435\u043B\u0438\u044F \u0436\u0438\u0432\u043E\u0442",4:"Zv\xED\u0159ata s hore\u010Dnat\xFDmi nemocemi b\u011Bhem \u017Eivota"
,5:"Dyr med febrilske sygdomme i l\xF8bet af livet",0:"Animals with febrile illnesses during lifetime"
,6:"Huidige dieren met koortsachtige zieke dieren",7:"Loomad, kel on eluajal esinenud palavikuga haiguseid"
,8:"El\xE4imill\xE4, joilla on aiemmin\ndiagnosoitu kuume",9:"Animaux ayant fait \xE9tat de fi\xE8vre dans le pass\xE9"
,10:"Bereits ein- oder mehrmals\nfiebrig diagnostizierte Tiere",11:"\u0396\u03CE\u03B1 \u03BC\u03B5 \u03B5\u03BC\u03C0\u03CD\u03C1\u03B5\u03C4\u03B5\u03C2 "+
"\u03B1\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03BA\u03B1\u03C4\u03AC "+
"\u03C4\u03B7 \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 \u03C4\u03B7\u03C2 "+
"\u03B6\u03C9\u03AE\u03C2 \u03C4\u03BF\u03C5\u03C2",12:"\xC1llatok l\xE1zas betegs\xE9gekkel az \xE9let\xFCk sor\xE1n"
,16:"Dyr med febersykdommer i l\xF8pet av livet",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 "+
"\u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E "+
"\u0440\u0430\u0437\n\u0431\u044B\u043B\u0430 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,21:"Animales con enfermedades febriles durante su vida",23:"Ya\u015Fam\u0131 boyunca ate\u015Fli hastal\u0131klara yakalanan hayvanlar"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438, \u0443 \u044F\u043A\u0438\u0445 "+
"\u043E\u0434\u0438\u043D \u0447\u0438 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 "+
"\u0440\u0430\u0437 \u0431\u0443\u043B\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u043E\u0432\u0430\u043D\u0430 "+
"\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Feed={1:"Hrana",2:"\u0425\u0440\u0430\u043D\u0430",3:"\u7D66\u98FC",4:"Krmen\xED"
,5:"Fodre",0:"Feed",6:"Voer",7:"S\xF6\xF6t",8:"Rehu",9:"Nourriture",10:"Futter",
11:"\u03A4\u03C1\u03BF\u03C6\u03AE",12:"Etet",16:"F\xF4r",20:"\u041A\u043E\u0440\u043C"
,21:"Alimento",23:"Besleme",24:"\u041A\u043E\u0440\u043C"};C.Bi7={1:"Konzumacija hrane"
,2:"\u0418\u0437\u044F\u0434\u0435\u043D\u0430 \u0445\u0440\u0430\u043D\u0430",3:
"\u63A1\u98DF",4:"Hodnocen\xED p\u0159\xEDjmu krmen\xED",5:"Foderindtag",0:"Feed intake"
,6:"Voeropname",7:"S\xF6\xF6mus",8:"Rehunsy\xF6nti",9:"Consommation",10:"Futterverzehr"
,11:"\u03A0\u03C1\u03CC\u03C3\u03BB\u03B7\u03C8\u03B7 \u03C4\u03C1\u03BF\u03C6\u03AE\u03C2"
,12:"Takarm\xE1nyfelv\xE9tel",16:"F\xF4ropptak",20:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043C\u0430"
,21:"Ingesta de alimento",23:"Besin derecelendirmesi",24:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u043C\u0443"
};C.AOB={2:"\u0425",0:"F",8:"R",11:"\u03A4"};C.Female={1:"\u017Densko",2:"\u0416\u0435\u043D\u0441\u043A\u0438"
,3:"\u6BCD",4:"Sami\u010D\xED",5:"Kvinde",0:"Female",6:"Vrouwelijk",7:"Emane",8:
"Lehm\xE4",9:"Femelle",10:"Weiblich",11:"\u0398\u03C5\u03BB\u03B7\u03BA\u03CC",12:
"N\u0151",16:"Hunn",20:"\u0416\u0435\u043D\u0441\u043A\u0438\u0439",21:"Hembra",
23:"Di\u015Fi",24:"\u0416\u0456\u043D\u043E\u0447\u0438\u0439"};C.Fever={1:"Temperatura"
,2:"\u0422\u0440\u0435\u0441\u043A\u0430",3:"\u767C\u71D2",4:"Hore\u010Dka",5:"Feber"
,0:"Fever",6:"Koorts",7:"Palavik",8:"Kuume",9:"Fi\xE8vre",10:"Fieber",11:"\u03A0\u03C5\u03C1\u03B5\u03C4\u03CC\u03C2"
,12:"L\xE1z",16:"Feber",20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,21:"Fiebre",23:"Ate\u015F",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Filter={1:"filter",2:"\u0424\u0438\u043B\u0442\u044A\u0440",3:"\u904E\u6FFE"
,4:"Filtr",0:"Filter",8:"Suodatus",9:"Filtre",11:"\u03A6\u03AF\u03BB\u03C4\u03C1\u03BF"
,12:"Sz\u0171r\u0151",13:"Filtro",17:"Filtr",20:"\u0424\u0438\u043B\u044C\u0442\u0440"
,21:"Filtro",23:"Filtre",24:"\u0424\u0456\u043B\u044C\u0442\u0440"};C.A6N={1:"a\u017Euriranje firmvera"
,2:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F "+"\u043D\u0430 \u0444\u044A\u0440\u043C\u0443\u0435\u0440\u0430"
,4:"Aktualizace firmwaru",5:"Firmwareopdatering",0:"Firmware update",6:"Firmware-update"
,7:"Tarkvara v\xE4rskenudus",8:"Laiteohjelmiston p\xE4ivitys",9:"Mise \xE0 jour du logiciel"
,10:"Aktualisierung Firmware",11:"\u0391\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03BF\u03CD"
,12:"Firmware friss\xEDt\xE9s",16:"Program oppdatering",20:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438"
,21:"Actualizaci\xF3n de firmware",23:"Yaz\u0131l\u0131m g\xFCncellemesi",24:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438"
};C.A6O={1:"Prvi start-up",2:"\u041F\u044A\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u043D\u043E "+
"\u0441\u0442\u0440\u0430\u0442\u0438\u0440\u0430\u043D\u0435",4:"Prvn\xED start-up"
,5:"F\xF8rste start-up",0:"First start-up",6:"eerste inbedrijfstelling",7:"Esimene start-up"
,8:"Ensimm\xE4inen k\xE4ynnistys",9:"Premi\xE8re mise en service",10:"Erstinbetrieb~nahme"
,11:"\u03A0\u03C1\u03CE\u03C4\u03B7 \u03B5\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7"
,12:"Els\u0151 startup",16:"F\xF8rste oppstart",20:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u0442\u0430\u0440\u0442\u0430\u043F"
,21:"Puesta en marcha inicial",23:"\u0130lk \xE7al\u0131\u015Ft\u0131rma",24:"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u0442\u0430\u0440\u0442\u0430\u043F"
};C.ACW={1:"Svjetlo",2:"\u0424\u0435\u043D\u0435\u0440\u0447\u0435",3:"\u624B\u96FB\u7B52"
,4:"Sv\xEDtilna",5:"Lommelygte",0:"Flashlight",6:"Lamp",7:"Taskulamp",8:"Valo",9:
"Lumi\xE8re",10:"Licht",11:"\u03A6\u03B1\u03BA\u03CC\u03C2",12:"Zsebl\xE1mpa",16:
"Spotlys",20:"\u0424\u043E\u043D\u0430\u0440\u044C",21:"Linterna",23:"El feneri"
,24:"\u041B\u0456\u0445\u0442\u0430\u0440"};C.Ag0={1:"%d. %m. %Y",2:"%d.%m.%Y",4:
"%d. %m. %Y",0:"%Y-%m-%d",6:"%d-%m-%Y",7:"%d.%m.%Y",8:"%d.%m.%Y",9:"%d/%m/%Y",10:
"%d.%m.%Y",11:"%#d/%#m/%Y",13:"%d/%m/%Y",14:"%Y\u5E74%m\u6708%d\u65E5",16:"%d.%m.%Y"
,20:"%d-%m-%Y",21:"%d/%m/%Y",23:"%d.%m.%Y",24:"%d.%m.%Y"};C.Bjd={1:"%d. %m.",2:"%d.%m"
,4:"%d. %m.",5:"%d. %m.",0:"%m-%d",6:"%d-%m",7:"%d.%m",8:"%d.%m",9:"%d/%m",10:"%d.%m"
,11:"%#d/%#m",13:"%d/%m",14:"%m\u6708%d\u65E5",16:"%d.%m",20:"%d-%m",21:"%d/%m",
24:"%d.%m"};C.Bje={1:"%H:%M %d. %m. %Y",2:"%H:%M %d.%m.%Y",4:"%H:%M %d. %m. %Y",
0:"%H:%M %Y-%m-%d",6:"%H:%M %d-%m-%Y",7:"%H:%M %d.%m.%Y",8:"%H:%M %d.%m.%Y",9:"%H:%M %d/%m/%Y"
,10:"%H:%M %d.%m.%Y",11:"%H:%M %#d/%#m/%Y",13:"%H:%M %d/%m/%Y",14:"%H:%M %Y\u5E74%m\u6708%d\u65E5"
,16:"%H:%M %d.%m.%Y",20:"%H:%M %d-%m-%Y",21:"%H:%M %d/%m/%Y",23:"%H:%M %d.%m.%Y"
,24:"%H:%M %d.%m.%Y"};C.AOL={1:"Grla koja se muzu",2:"\u0421\u043A\u043E\u0440\u043E \u043E\u0442\u0435\u043B\u0435\u043D\u0438"
,4:"\u010Cerstv\xE9 kr\xE1vy",5:"Friske k\xF8er",0:"Fresh cows",6:"Verse koeien"
,7:"Poeginud lehmad",8:"Tunnutettavat lehm\xE4t",9:"Vaches fra\xEEches",10:"Frischmelker"
,11:"\u03A6\u03C1\u03AD\u03C3\u03BA\u03B5\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2"
,12:"Friss teh\xE9nek",16:"Friske dyr",20:"\u041D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u0430\u044F"
,21:"Vacas frescas",23:"Yeni do\u011Fum yapm\u0131\u015F inekler",24:"\u041D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0430"
};C.A6U={1:"prikaz goriva",2:"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430 \u0433\u043E\u0440\u0438\u0432\u043E"
,4:"Ukazatel paliva",5:"Br\xE6ndstofm\xE5ler",0:"Fuel gauge",6:"oplader",7:"K\xFCtusetaseme n\xE4idik"
,8:"Polttoainemittari",9:"Indicateur de charge",10:"Ladeanzeige",11:"\u039C\u03B5\u03C4\u03C1\u03B7\u03C4\u03AE\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD"
,12:"\xDCzemanyagszint-m\xE9r\u0151",16:"Drivstoffm\xE5ler",20:"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u044F\u0434\u0430"
,21:"Indicador de carga",23:"Yak\u0131t g\xF6stergesi",24:"\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u044F\u0434\u0443"
};C.Bji={1:"Ova funkcija nije dostupna u demo verziji!",2:"\u0422\u0430\u0437\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0435 "+
"\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u0430 \u0432 \u0434\u0435\u043C\u043E "+
"\u0432\u0435\u0440\u0441\u0438\u044F\u0442\u0430!",4:"Tato funkce nen\xED dostupn\xE1 v demoverzi!"
,5:"Denne funktion er ikke tilg\xE6ngelig i demoversionen!",0:"This function is not available in the demo version!"
,6:"Deze functie is niet beschikbaar op deze demo versie!",7:"See funktsioon ei ole demoversioonis saadaval!"
,8:"T\xE4m\xE4 toiminto ei ole k\xE4ytett\xE4viss\xE4 demoversiossa!",9:"Cette fonction n\'est plus disponible dans la version d\xE9mo\xA0!"
,10:"Diese Funktion ist in der Demo~version nicht ver~f\xFCgbar!",11:"\u0391\u03C5\u03C4\u03AE \u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 "+
"\u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 "+
"\u03C3\u03C4\u03B7\u03BD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE\u03C2!"
,12:"Ez a funkci\xF3 nem \xE9rhet\u0151 el a dem\xF3 verzi\xF3ban!",16:"Denne funksjonen er ikke tilgjengelig i demoversjonen!"
,20:"\u042D\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 "+
"\u0432 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 "+
"\u0432\u0435\u0440\u0441\u0438\u0438!",21:"Esta funci\xF3n no est\xE1 disponible en la versi\xF3n de demostraci\xF3n."
,23:"Bu i\u015Flev demo s\xFCr\xFCm\xFCnde mevcut de\u011Fildir!",24:"\u0426\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 "+
"\u0443 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0456\u0439 "+
"\u0432\u0435\u0440\u0441\u0456\u0457!"};C.BjK={1:"gr/dan",2:"\u0433/\u0434\u0435\u043D"
,3:"\u516C\u514B/\u65E5",4:"gram\u016F za den",5:"god dag",0:"g/day",6:"g/dag",7:
"g/p\xE4evas",8:"g/pv",9:"g/jour",10:"g/Tag",11:"\u03B3\u03C1./\u03BC\u03AD\u03C1\u03B1"
,12:"J\xF3 napot!",16:"gr./pr dag",20:"\u0433/\u0434\u0435\u043D\u044C",21:"g/d\xEDa"
,23:"G\xFCnl\xFCk gram",24:"\u0433/\u0434\u0435\u043D\u044C"};C.EU={1:"grafi\u010Dki prikaz"
,2:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u043D \u0438\u0437\u0433\u043B\u0435\u0434"
,4:"Grafick\xFD pohled",5:"Grafisk visning",0:"Graphical view",6:"grafische weergave"
,7:"Graafiline vaade",8:"Graafinen n\xE4kym\xE4",9:"Vue graphique",10:"Grafische Ansicht"
,11:"\u0393\u03C1\u03B1\u03C6\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE"
,12:"Grafikus n\xE9zet",16:"Grafisk visning",20:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0438\u0434"
,21:"Ganado Glan",23:"Grafik G\xF6sterim",24:"\u0413\u0440\u0430\u0444\u0456\u0447\u043D\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434"
};C.P={1:"grupa",2:"\u0413\u0440\u0443\u043F\u0430",3:"\u7FA4",4:"Skupina",5:"Gruppe"
,0:"Group",6:"Groep",7:"Grupp",8:"Ryhm\xE4",9:"Groupe",10:"Gruppe",11:"\u039F\u03BC\u03AC\u03B4\u03B1"
,12:"Csoport",16:"Gruppe",20:"\u0413\u0440\u0443\u043F\u043F\u0430",21:"Grupo",23:
"Grup",24:"\u0413\u0440\u0443\u043F\u0430"};C.A7f={1:"Oprema",2:"\u0425\u0440\u0434\u0443\u0435\u0440"
,4:"hardware",0:"Hardware",7:"Riistvara",11:"\u03A5\u03BB\u03B9\u03BA\u03CC (Hardware)"
,12:"Szoftver",16:"Maskinvare",20:"\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"
,23:"Donan\u0131m",24:"\u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F"
};C.BjN={1:"Junica",2:"\u042E\u043D\u0438\u0446\u0430",4:"Jalovice",5:"Kviekalv"
,0:"Heifer",6:"Vaars",7:"Lehmvasikas",8:"Hieho",9:"G\xE9nisse",10:"F\xE4rse",11:
"\u03A4\u03B5\u03BB\u03AF\u03C4\u03C3\u03B1",12:"\xDCsz\u0151",16:"Kvige",20:"\u0422\u0435\u043B\u043A\u0430"
,21:"Vaquilla",23:"D\xFCve",24:"\u0422\u0435\u043B\u0438\u0446\u044F"};C.APO={1:
"krdo",2:"\u0421\u0442\u0430\u0434\u043E",3:"\u725B\u7FA4",4:"St\xE1do",5:"Flok"
,0:"Herd",6:"Groep",7:"Kari",8:"Karja",9:"Troupeau",10:"Herde",11:"\u039A\u03BF\u03C0\u03AC\u03B4\u03B9"
,12:"Ny\xE1j",16:"Flokk",20:"\u0421\u0442\u0430\u0434\u043E",21:"Reba\xF1o",23:"S\xFCr\xFC"
,24:"\u0421\u0442\u0430\u0434\u043E"};C.A7j={1:"nakon zavr\u0161etka sakrij opciju"
,2:"\u0421\u043A\u0440\u0438\u0439 \u0441\u043B\u0435\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,4:"Skr\xFDt se po akci",5:"Skjul efter handling",0:"Hide after action",6:"verberg na actie"
,7:"Peida peale tegevust",8:"Piilota toiminnan j\xE4lkeen",9:"Dissimuler apr\xE8s l\u2019action"
,10:"Nach Aktion ausblenden",11:"\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03BC\u03B5\u03C4\u03AC "+
"\u03B1\u03C0\u03CC \u03B4\u03C1\u03AC\u03C3\u03B7",12:"Cselekv\xE9s ut\xE1n bujk\xE1l"
,16:"Skjul etter handling",20:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,21:"Ocultar despu\xE9s de la acci\xF3n",23:"\u0130\u015Flemden sonra gizle",24:
"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0456\u0441\u043B\u044F "+
"\u0434\u0456\u0457"};C.BjO={1:"Ne prikazu izmjerena grla",2:"\u0421\u043A\u0440\u0438\u0439 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0442\u0435 "+
"\u043A\u0440\u0430\u0432\u0438",4:"Schovej zm\u011B\u0159en\xE9 kr\xE1vy",5:"Skjul m\xE5lte k\xF8er"
,0:"Hide measured cows",6:"Verborgen gemeten koeien",7:"Peida m\xF5\xF5detud lehmad"
,8:"Piilota mitatut lehm\xE4t",9:"Masquer anim. mesur\xE9s",10:"Gemessene ausblenden"
,11:"\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03C4\u03C9\u03BD \u03BC\u03B5\u03C4\u03C1\u03B7\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD",12:"Rejtett m\xE9rt teh\xE9n"
,16:"Skjul m\xE5lte dyr",20:"\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u043D\u043E\u0435"
,21:"Ocultar vacas medidas",23:"\xD6l\xE7\xFClen inekleri gizle",24:"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0435"
};C.AvD={1:"visoko",2:"\u0412\u0438\u0441\u043E\u043A",3:"\u9AD8",4:"Vysok\xFD",
5:"H\xF8j",0:"High",6:"Hoog",7:"K\xF5rgus",8:"Korkeus",9:"Haut",10:"Hoch",11:"\u03A8\u03B7\u03BB\u03AC"
,12:"Magas",16:"H\xF8y",20:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",21:"Alto"
,23:"Y\xFCksek",24:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439"};C.BjP={1:"Dokumentacija o uvozu kupljenih \u017Eivotinja u softver za upravljanje "+
"stadom \'Herde Mast\' ili \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",2:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F "+
"\u0437\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0432 \u0441\u043E\u0444\u0442\u0443\u0435\u0440\u0430 \u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 "+
"\u043D\u0430 \u0441\u0442\u0430\u0434\u043E\u0442\u043E \u201EHerde Mast\u201C "+
"\u0438\u043B\u0438 \u201EHerde Plus\u201C:\n\nhttps://herde.vitalcontrol.de",4:
"Dokumentace k importu zakoupen\xFDch zv\xED\u0159at do softwaru pro spr\xE1vu "+
"st\xE1d \'Herde Mast\' nebo \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",5:
"Dokumentation om import af k\xF8bte dyr til bes\xE6tningsstyringssoftwaren "+"\'Herde Mast\' eller \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,0:"Documentation on import of purchased animals into herd management software "+
"\u2019Herde Mast\u2019 or\n\u2019Herde Plus\u2019:\n\nhttps://herde.vitalcontrol.de"
,6:"Documentatie over de import van aangekochte dieren in kuddebeheersoftware "+
"\'Herde Mast\' of \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",7:"Dokumentatsioon ostetud loomade impordiks karjahaldustarkvarasse \"Herde "+
"Mast\" v\xF5i \"Herde Plus\":\n\nhttps://herde.vitalcontrol.de",10:"Dokumentation zum weiteren Vorgehen:\n\nZugangsmeldung HI Tier:\nhttps://hit.vitalcontrol.de\n\nTierimport "+
"HERDE Mast:\nhttps://herde.vitalcontrol.de",11:"\u03A4\u03B5\u03BA\u03BC\u03B7\u03C1\u03AF\u03C9\u03C3\u03B7 \u03B3\u03B9\u03B1 "+
"\u03C4\u03B7\u03BD \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03B1\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03C3\u03C4\u03BF \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC "+
"\u03B4\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7\u03C2 \u03BA\u03BF\u03C0\u03B1\u03B4\u03B9\u03BF\u03CD "+
"\'Herde Mast\' \u03AE \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",12:"Az \"Herde Mast\" vagy \"Herde Plus\" \xE1llom\xE1nykezel\u0151 szoftverbe "+
"v\xE1s\xE1rolt \xE1llatok import\xE1l\xE1s\xE1nak dokument\xE1ci\xF3ja:\n\nhttps://herde.vitalcontrol.de"
,16:"Dokumentasjon om import av kj\xF8pte dyr inn i besetningsstyringsprogramvaren "+
"\'Herde Mast\' eller \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",20:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F "+
"\u043F\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0443 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 "+
"\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F "+
"\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0434\u043E\u043C "+
"\"Herde Mast\" \u0438\u043B\u0438 \"Herde Plus\":\nhttps://herde.vitalcontrol.de"
,24:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0456\u044F "+
"\u0449\u043E\u0434\u043E \u0456\u043C\u043F\u043E\u0440\u0442\u0443 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D \u0434\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E "+
"\u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F "+"\u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F "+
"\u0441\u0442\u0430\u0434\u043E\u043C \"Herde Mast\" \u0430\u0431\u043E "+"\"Herde Plus\":\n\nhttps://herde.vitalcontrol.de"
};C.AvE={1:"Po\u010Detni ekran",2:"\u041D\u0430\u0447\u0430\u043B\u0435\u043D \u0435\u043A\u0440\u0430\u043D"
,4:"Domovsk\xE1 obrazovka",5:"Hjemmesk\xE6rm",0:"Home screen",7:"Avakuva",8:"Aloitusn\xE4ytt\xF6"
,9:"Page d\'accueil",10:"Startseite",11:"\u0391\u03C1\u03C7\u03B9\u03BA\u03AE \u03BF\u03B8\u03CC\u03BD\u03B7"
,12:"Kezd\u0151k\xE9perny\u0151",16:"Hjem-skjerm",20:"\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u044D\u043A\u0440\u0430\u043D"
,21:"Pantalla de inicio",23:"Ana Ekran",24:"\u0414\u043E\u043C\u0430\u0448\u043D\u0456\u0439 \u0435\u043A\u0440\u0430\u043D"
};C.GN={2:"\u2116",3:"\u8B58\u5225\u865F",5:"ID translates to \"ID\" in Danish as well. The abbreviation stands for "+
"\"identifikation\".",0:"ID",11:"\u03A4\u03B1\u03C5\u03C4~\u03CC\u03C4\u03B7\u03C4\u03B1"
,12:"Szem\xE9lyi igazolv\xE1ny"};C.A7k={1:"ID brane",2:"ID \u043D\u0430 \u043C\u0430\u0439\u043A\u0430"
,4:"ID p\u0159ehrady",5:"ID af d\xE6mning",0:"ID of dam",6:"ID van moederdier",7:
"tammipaisu ID",9:"N\xB0 de l\'animal m\xE8re",10:"ID Muttertier",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03BC\u03B7\u03C4\u03AD\u03C1\u03B1\u03C2",12:"g\xE1t azonos\xEDt\xF3ja",16:"ID til Mordyr"
,20:"ID \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F",21:"ID de la madre",23:
"Anne Hayvan Kimli\u011Fi",24:"ID \u043C\u0430\u0442\u0435\u0440\u0456"};C.A7l={
1:"ID prve \u017Eivotinje",2:"\u2116 \u043D\u0430 \u043F\u044A\u0440\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u7B2C\u4E00\u96BB\u5C0F\u725B\u7684\u8B58\u5225\u865F",4:"ID prvn\xEDho zv\xED\u0159ete"
,5:"ID for det f\xF8rste dyr",0:"ID of first animal",6:"ID van eerste dier",7:"Esimese looma ID"
,8:"Ensimm\xE4isen el\xE4imen ID",9:"ID du premier animal",10:"ID des ersten Tieres"
,11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C0\u03C1\u03CE\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5",12:"els\u0151 \xE1llat azonos\xEDt\xF3ja"
,16:"ID for f\xF8rste dur",20:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u0435\u0440\u0432\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",21:"ID del primer animal"
,23:"\u0130lk Hayvan Kimli\u011Fi",24:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u0435\u0440\u0448\u043E\u0457 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.Aq5={1:"ID zadnje \u017Eivotinje"
,2:"\u2116 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u6700\u5F8C\u4E00\u96BB\u5C0F\u725B\u7684\u8B58\u5225\u865F",4:"ID posledn\xEDho zv\xED\u0159ete"
,5:"ID for sidste dyr",0:"ID of last animal",6:"ID van laatste dier",7:"Viimase looma ID"
,8:"Viimeisen el\xE4imen ID",9:"ID dernier animal",10:"ID letztes Tier",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5"
,12:"Az utols\xF3 \xE1llat azonos\xEDt\xF3ja",16:"ID for siste dyr",20:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",21:"ID del \xFAltimo animal"
,23:"Son Hayvan Kimli\u011Fi",24:"ID-\u043D\u043E\u043C\u0435\u0440 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.BjS={1:"za jedan dan",2:"\u0437\u0430 \u0435\u0434\u0438\u043D \u0434\u0435\u043D"
,4:"za jeden den",5:"p\xE5 en dag",0:"in one day",6:"op een dag",7:"\xDChe p\xE4eva jooksul"
,8:"p\xE4iv\xE4ss\xE4",9:"En une journ\xE9e",10:"in einem Tag",11:"\u039C\u03AD\u03C3\u03B1 \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03BC\u03AD\u03C1\u03B1"
,12:"egy nap alatt",16:"P\xE5 en dag",20:"\u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C"
,21:"en un d\xEDa",23:"Bir g\xFCnde",24:"\u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C"
};C.BjT={1:"za {DAYS} dana",2:"\u0441\u043B\u0435\u0434 {DAYS} \u0434\u043D\u0438"
,4:"za {DAYS} dn\xED",5:"om {DAGE} dage",0:"in {DAYS} days",6:"in {DAYS} dagen",
7:"{DAYS} p\xE4eva jooksul",8:"{DAYS} p\xE4iv\xE4ss\xE4",9:"en {DAYS} jours",10:
"in {DAYS} Tagen",11:"\u039C\u03AD\u03C3\u03B1 \u03C3\u03B5 {DAYS} \u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"{DAYS} nap m\xFAlva",16:"om {DAYS} dager",20:"\u0447\u0435\u0440\u0435\u0437 {DAYS} \u0434\u043D\u0435\u0439"
,21:"en {DAYS} d\xEDas",23:"in {DAYS} ka\xE7 g\xFCn i\xE7inde",24:"\u0447\u0435\u0440\u0435\u0437 {DAYS} \u0434\u043D\u0456\u0432"
};C.BjU={1:"u pozadini",2:"\u0412\u044A\u0432 \u0444\u043E\u043D\u043E\u0432 \u0440\u0435\u0436\u0438\u043C"
,3:"\u81EA\u52D5\u767B\u9304",4:"Na pozad\xED",5:"I baggrunden",0:"In background"
,6:"In de achtergrond",7:"Taustal",8:"Taustalla",9:"En arri\xE8re-plan",10:"Im Hintergrund"
,11:"\u03A3\u03C4\u03BF \u03C0\u03B1\u03C1\u03B1\u03C3\u03BA\u03AE\u03BD\u03B9\u03BF"
,12:"A h\xE1tt\xE9rben",16:"I bakgrunnen",20:"\u0412 \u0444\u043E\u043D\u043E\u0432\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435"
,21:"En el fondo",23:"Arka planda",24:"\u0423 \u0444\u043E\u043D\u043E\u0432\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456"
};C.BjV={1:"povi\u0161eno",2:"\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D",
3:"\u589E\u52A0",4:"Zv\xFD\u0161eno",5:"\xD8get",0:"Increased",6:"Verhoogt",7:"T\xF5usnud"
,8:"Lis\xE4\xE4ntynyt",9:"Augment\xE9",10:"Erh\xF6ht",11:"\u0391\u03C5\u03BE\u03B7\u03BC\u03AD\u03BD\u03BF"
,12:"N\xF6vekedett",16:"\xD8kt",20:"\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043E"
,21:"Elevado",23:"Y\xFCksektildi",24:"\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E"
};C.A7x={1:"neplodno grlo",2:"\u0411\u0435\u0437\u043F\u043B\u043E\u0434\u0438\u0435"
,4:"Neplodnost",5:"Infertilitet",0:"Infertility",6:"onvruchtbaar",7:"Viljatus",8:
"Hedelm\xE4tt\xF6myys",9:"Infertilit\xE9",10:"Unfruchtbarkeit",11:"\u0391\u03B3\u03BF\u03BD\u03AF\u03B1"
,12:"Medd\u0151s\xE9g",16:"Infertilitet",20:"\u0411\u0435\u0441\u043F\u043B\u043E\u0434\u0438\u0435"
,21:"Infertilidad",23:"K\u0131s\u0131rl\u0131k",24:"\u0411\u0435\u0437\u043F\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044C"
};C.Info={1:"Informacija",2:"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,4:"Informace",5:"Info translates to \"info\" in Danish.",0:"Info",7:"Teave",11:
"\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2",12:"Inform\xE1ci\xF3"
,16:"Informasjon",20:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,23:"Bilgi",24:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"};C.
ADZ={1:"Uvedite vrh mjernog instrumenta",2:"\u0412\u043A\u0430\u0440\u0430\u0439\u0442\u0435 \u0432\u044A\u0440\u0445\u0430 "+
"\u043D\u0430 \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u0442\u0435\u043B\u044F"
,3:"\u63D2\u5165\u6EAB\u5EA6\u8A08",4:"Vlo\u017Eit m\u011B\u0159en\xED",5:"Inds\xE6t m\xE5lespids"
,0:"Insert measuring tip",6:"Meetpunt inbrengen",7:"Sisesta m\xF5\xF5tmisvihje",
8:"Aseta mittak\xE4rki",9:"Ins\xE9rer la pointe\nde mesure",10:"Messspitze einf\xFChren"
,11:"\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03B1\u03BA\u03C1\u03BF\u03C6\u03CD\u03C3\u03B9\u03BF "+
"\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7\u03C2",12:"Helyezze be a m\xE9r\u0151hegyet"
,16:"Sett inn m\xE5lespiss",20:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440"
,21:"Insertar la punta\nde medici\xF3n",23:"\xD6l\xE7\xFCm ucunu tak\u0131n",24:
"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440"
};C.Bkg={1:"kilogram",2:"\u041A\u0438\u043B\u043E\u0433\u0440\u0430\u043C",3:"\u516C\u65A4"
,0:"Kilogram",7:"Kilogramm",8:"Kiloa",9:"Kilogramme",10:"Kilogramm",11:"\u039A\u03B9\u03BB\u03CC"
,12:"kilogramm",20:"\u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C",21:"Kilogramos"
,24:"\u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C"};C.ARD={1:"laktacija",2:"\u041B\u0430\u043A\u0442\u0430\u0446\u0438\u044F"
,4:"Laktace",5:"Amning",0:"Lactation",6:"Lactatie",7:"Laktatsioon",8:"Lypsy",10:
"Laktation",11:"\u0393\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1",12:"Szoptat\xE1s"
,16:"Laktasjon",20:"\u041B\u0430\u043A\u0442\u0430\u0446\u0438\u044F",21:"Lactancia"
,23:"Emzirme",24:"\u041B\u0430\u043A\u0442\u0430\u0446\u0456\u044F"};C.Bkh={1:"dan laktacije"
,2:"\u0414\u0435\u043D \u0432 \u043B\u0430\u043A\u0442\u0430\u0446\u0438\u044F",
4:"Den laktace",5:"Dag for laktation",0:"Day of lactation",6:"Lactatiedag",7:"Laktatsiooni p\xE4ev"
,8:"Lypsyp\xE4iv\xE4",9:"Jour de lactation",10:"Laktations~tag",11:"\u0397\u03BC\u03AD\u03C1\u03B1 \u03B3\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1\u03C2"
,12:"Szoptat\xE1s napja",16:"Dager i laktasjonen",20:"\u0414\u0435\u043D\u044C \u043B\u0430\u043A\u0442\u0430\u0446\u0438\u0438"
,21:"Lactancia",23:"Emzirme G\xFCn\xFC Say\u0131s\u0131",24:"\u0414\u0435\u043D\u044C \u043B\u0430\u043A\u0442\u0430\u0446\u0456\u0457"
};C.AEc={1:"Lakta~cija",2:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0438\u044F",4:
"Laktace",5:"Amning",0:"Lacta~tion",6:"Lactatie",7:"Laktat~sioon",10:"Lakta~tion"
,11:"\u0393\u03B1\u03BB\u03BF\u03C5~\u03C7\u03AF\u03B1",12:"Szoptat\xE1s",16:"Lakta-\nsjon"
,20:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0438\u044F",21:"Lac~tancia",23:"Emz~irme"
,24:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0456\u044F"};C.Bki={1:"janje",2:"\u0410\u0433\u043D\u0435"
,3:"\u5C0F\u7F8A",4:"Jehn\u011B",5:"Lam",0:"Lamb",6:"Lam",7:"Tall",8:"Lammas",9:
"Agneau",10:"Lamm",11:"\u0391\u03C1\u03BD\u03AF",12:"B\xE1r\xE1ny",16:"Lam",20:"\u042F\u0433\u043D\u044F\u0442"
,21:"Cordero",23:"Kuzu",24:"\u042F\u0433\u043D\u044F\u0442"};C.Bkj={1:"janje",2:
"\u0430\u0433\u043D\u0435",3:"\u5C0F\u7F8A",4:"jehn\u011B",5:"lam",0:"lamb",6:"lam"
,7:"Tall",8:"lammas",9:"agneau",10:"Lamm",11:"\u03B1\u03C1\u03BD\u03AF",12:"b\xE1r\xE1ny"
,16:"Lam",20:"\u042F\u0433\u043D\u044F\u0442",21:"cordero",23:"Kuzu",24:"\u042F\u0433\u043D\u044F\u0442"
};C.Bkk={1:"janjad",2:"\u0430\u0433\u043D\u0435\u0442\u0430",3:"\u5C0F\u7F8A",4:
"jah\u0148ata",5:"lam",0:"lambs",6:"lammeren",7:"talled",8:"lampaat",9:"agneaux"
,10:"L\xE4mmer",11:"\u0391\u03C1\u03BD\u03B9\u03AC",12:"b\xE1r\xE1nyok",16:"Lam"
,20:"\u042F\u0433\u043D\u0451\u043D\u043E\u043A",21:"corderos",23:"kuzular",24:"\u042F\u0433\u043D\u044F"
};C.Language={1:"jezik",2:"\u0415\u0437\u0438\u043A",3:"\u8A9E\u8A00",4:"Jazyk",
5:"Sprog",0:"Language",6:"Taal",7:"Keel",8:"Kieli",9:"Langue",10:"Sprache",11:"\u03B3\u03BB\u03CE\u03C3\u03B1"
,12:"Nyelv",16:"Spr\xE5k",20:"\u042F\u0437\u044B\u043A",21:"Idioma",23:"Dil",24:
"\u041C\u043E\u0432\u0430"};C.Ahn={1:"zadnji",2:"\u043F\u043E\u0441\u043B\u0435\u0434\u0435\u043D"
,3:"\u6700\u5F8C\u4E00\u500B",4:"Posledn\xED",5:"sidste",0:"last",6:"laatste",7:
"viimane",8:"viimeisin",9:"Dernier",10:"Letzte",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF"
,12:"utols\xF3",16:"Sist",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439"
,21:"\xFAltimos",23:"Son",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439"};
C.A7J={1:"zadnja 3 dana",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 3 \u0434\u043D\u0438"
,4:"Posledn\xED 3 dny",5:"Sidste 3 dage",0:"Last 3 days",6:"Laatste 3 dagen",7:"Viimased 3 p\xE4eva"
,8:"Viimeiset 3 pv",9:"Les 3 derniers jours",10:"Letzte 3 Tage",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B5\u03C2 3 \u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"Utols\xF3 3 nap",16:"Siste 3 dager",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 3 \u0434\u043D\u044F"
,21:"\xDAltimos 3 d\xEDas",23:"Son 3 g\xFCn",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456 3 \u0434\u043D\u0456"
};C.ARF={1:"Posljednja akcija u redu",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "+
"\u0441 OK",4:"Posledn\xED akce v po\u0159\xE1dku",5:"Sidste handling p\xE5 OK",
0:"Last action on OK",6:"Laatste actie op OK",7:"Viimane tegevus OK peal",8:"Viimeinen toimenpide OK"
,9:"Action finale si OK",10:"Abschlussaktion bei OK",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B4\u03C1\u03AC\u03C3\u03B7 "+
"\u03C3\u03B5 \u03B5\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9",12:"Utols\xF3 m\u0171velet rendben"
,16:"Siste handling p\xE5 OK",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "+
"\u0432 OK",23:"Tamam\'da son eylem",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0434\u0456\u044F \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0443"
};C.A7K={1:"zadnji mjesec",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u0435\u043D \u043C\u0435\u0441\u0435\u0446"
,3:"\u4E0A\u500B\u6708",4:"Posledn\xED m\u011Bs\xEDc",5:"Sidste m\xE5ned",0:"Last month"
,6:"Afgelopen maand",7:"Eelmine kuu",8:"Viimekukkausi",9:"Dernier mois",10:"Letzter Monat"
,11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2"
,12:"m\xFAlt h\xF3nap",16:"Siste m\xE5ned",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043C\u0435\u0441\u044F\u0446"
,21:"Mes pasado",23:"Ge\xE7en ay",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C"
};C.A7L={1:"zadnji kvartal",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0447\u0435\u0442\u0432\u044A\u0440\u0442"
,3:"\u4E0A\u4E00\u5B63",4:"Posledn\xED \u010Dtvrtlet\xED",5:"Sidste kvartal",0:"Last quarter"
,6:"Afgelopen kwartaal",7:"Eelmine kvartal",8:"Viimeisin nelj\xE4nne",9:"Dernier trimestre"
,10:"Letztes Vierteljahr",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03C4\u03AD\u03C4\u03B1\u03C1\u03C4\u03BF"
,12:"Utols\xF3 negyed\xE9v",16:"Siste kvartal",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044C"
,21:"Trimestre pasado",23:"Son \xE7eyrek",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0447\u0432\u0435\u0440\u0442\u044C"
};C.A7M={1:"zadnja sedmica",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0441\u0435\u0434\u043C\u0438\u0446\u0430"
,3:"\u4E0A\u661F\u671F",4:"Posledn\xED v\xEDkend",5:"Sidste uge",0:"Last week",6:
"Afgelopen week",7:"Eelmine n\xE4dal",8:"Viimeviikko",9:"Semaine derni\xE8re",10:
"Letzte Woche",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"
,12:"M\xFAlt h\xE9ten",16:"Siste uke",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043D\u0435\u0434\u0435\u043B\u044F"
,21:"Semana pasada",23:"Ge\xE7en hafta",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043D\u044C"
};C.A7N={2:"\u043B\u0438\u0431\u0440\u0438",3:"\u82F1\u938A",4:"Libra",5:"pund",
0:"lbs",6:"Lbs",7:"Kg",11:"\u039B\u03AF\u03B2\u03C1\u03B5\u03C2",12:"font",23:"Lbs"
};C.A7O={1:"svjetlo",2:"\u0421\u0432\u0435\u0442\u043B\u0438\u043D\u0430",3:"\u8F15\u7684"
,4:"Sv\u011Btlo\n",5:"Lys",0:"Light",6:"Licht",7:"Valgus",8:"Valo",9:"Lumi\xE8re\n"
,10:"Licht",11:"\u0395\u03BB\u03B1\u03C6\u03C1\u03CD",12:"F\xE9ny",16:"Lys",20:"\u0421\u0432\u0435\u0442"
,21:"Linterna\n",23:"A\xE7\u0131k",24:"\u0421\u0432\u0456\u0442\u043B\u043E"};C.
Bkn={1:"povezati ID broj \u017Eivotinja",2:"\u0412\u0440\u044A\u0437\u043A\u0430 \u2116 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,4:"Spojit ID zv\xED\u0159ete",5:"Knyt dyre-ID",0:"Link animal ID",6:"Link dier ID"
,7:"Seo looma ID",8:"Linkit\xE4 el\xE4imen ID",9:"Lier ID de l\u2019animal",10:"Ohrmarkennummer zuordnen"
,11:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"\xC1llat azonos\xEDt\xF3 \xF6sszekapcsol\xE1sa",16:
"Koble til dyr-ID",20:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",21:"Vincular ID del animal"
,23:"Hayvan kimli\u011Fini ba\u011Fla",24:"\u0417\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0456\u0437 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A7P={1:"ID veze (ru\u010Dno)",2:
"ID \u0432\u0440\u044A\u0437\u043A\u0430 (\u0440\u044A\u0447\u043D\u043E)",4:"ID odkazu (manu\xE1ln\xED)"
,5:"Link-ID (manuel)",0:"Link ID (manual)",6:"Link ID (handmatig)",7:"Lingi ID (k\xE4sitsi)"
,8:"Anna korvamerkin numero (manuaalisesti)",9:"Attribuer n\xB0 d\'identification (manuel)"
,10:"Ohrmarkennummer zuordnen (manuell)",11:"\u03A4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BC\u03BF\u03C5 "+
"(\u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B7)",12:"Link azonos\xEDt\xF3 (k\xE9zi)"
,16:"Lenke-ID (manuell)",20:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C ID (\u0432\u0440\u0443\u0447\u043D\u0443\u044E)"
,21:"Vincular ID (manual)",23:"Kimli\u011Fi ba\u011Fla(Manuel)",24:"\u041F\u0440\u0438\u0432\'\u044F\u0437\u0430\u0442\u0438 ID (\u0432\u0440\u0443\u0447\u043D\u0443)"
};C.A7Q={1:"ID veze (RFID skeniranje)",2:"ID \u0432\u0440\u044A\u0437\u043A\u0430 (RFID \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435)"
,4:"ID odkazu (skenov\xE1n\xED RFID)",5:"Link-ID (RFID-scanning)",0:"Link ID (RFID scan)"
,6:"Link ID (scanner)",7:"Lingi ID (RFID skaneering)",8:"Anna korvamerkin numero (skannaus)"
,9:"Attribu\xE9 n\xB0 d\'identification (scann\xE9)",10:"Ohrmarkennummer zuordnen (Scan)"
,11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2 (\u03C3\u03AC\u03C1\u03C9\u03C3\u03B7 "+
"RFID)",12:"Hivatkoz\xE1si azonos\xEDt\xF3 (RFID beolvas\xE1s)",16:"Lenke-ID (RFID-skanning)"
,20:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C ID (\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"RFID)",21:"Vincular ID (escaneo RFID)",23:"Ba\u011Flant\u0131 Kimli\u011Fi (RFID taramas\u0131)"
,24:"\u041F\u0440\u0438\u0432\'\u044F\u0437\u0430\u0442\u0438 ID (\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 "+
"RFID)"};C.LinkTransponder={1:"povezati transponder",2:"\u0412\u0440\u044A\u0437\u043A\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,4:"Spojovac\xED transpond\xE9r",5:"Link transponder: Link transponder",0:"Link transponder"
,7:"Seo vastuv\xF5tja",8:"Linkit\xE4 transponderi",9:"Lier ID transpondeur",10:"Transponder zuordnen"
,11:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Link ad\xF3vev\u0151",16:"Koble til transponder",20:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u043E\u043C"
,21:"Vincular transpondedor",23:"Ba\u011Flant\u0131 aktar\u0131c\u0131s\u0131",24:
"\u0417\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0456\u0437 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u043E\u043C"
};C.Anh={1:"Lista akcija u redu",2:"\u0421\u043F\u0438\u0441\u044A\u043A \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F "+
"\u0441 OK",4:"Seznam akc\xED v po\u0159\xE1dku",5:"Liste handling p\xE5 OK",0:"List action on OK"
,6:"Lijstactie op OK",7:"Nimekiri tegevustest on OK",8:"Listaa toiminnot OK-kohtaan"
,9:"Action de liste si OK",10:"Listenaktion bei OK",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \u03CC\u03C4\u03B1\u03BD "+
"\u03C0\u03B1\u03C4\u03AC\u03C4\u03B5 OK",12:"\"Rendben l\xE9v\u0151 m\u0171veletek list\xE1ja\""
,16:"Handling n\xE5r du trykker OK",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 "+
"\u043A\u043D\u043E\u043F\u043A\u0438 OK",23:"Tamam\'da eylemi listele",24:"\u0414\u0456\u044F \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u043E\u043C "+
"\u043F\u0440\u0438 \u041E\u041A"};C.Bg={1:"pregled lista",2:"\u0418\u0437\u0433\u043B. \u0441\u043F\u0438\u0441\u044A\u043A"
,3:"\u986F\u793A\u6E05\u55AE",4:"Zobrazen\xED seznamu",5:"Listevisning",0:"List view"
,6:"Lijst",7:"Nimekiri",8:"Listan\xE4kym\xE4",9:"Liste",10:"Liste",11:"\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1\u03C2"
,12:"Lista n\xE9zet",16:"Listevisning",20:"\u0421\u043F\u0438\u0441\u043E\u043A"
,21:"Lista",23:"Liste g\xF6r\xFCn\xFCm\xFC",24:"\u0421\u043F\u0438\u0441\u043E\u043A"
};C.A7R={1:"Liste",2:"\u0421\u043F\u0438\u0441\u044A\u0446\u0438",3:"\u6E05\u55AE"
,4:"Seznamy",5:"Lister",0:"Lists",6:"Lijsten",7:"Nimekiri",8:"Listat",9:"Listes"
,10:"Listen",11:"\u039B\u03AF\u03C3\u03C4\u03B5\u03C2",12:"List\xE1k",16:"Lister"
,20:"\u0421\u043F\u0438\u0441\u043A\u0438",21:"Listas",23:"Listeler",24:"\u0421\u043F\u0438\u0441\u043A\u0438"
};C.Bkq={1:"nisko",2:"\u041D\u0438\u0441\u044A\u043A",3:"\u4F4E",4:"N\xEDzk\xFD"
,5:"Lav",0:"Low",6:"Laag",7:"Madal",8:"Matala",9:"Bas",10:"Niedrig",11:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AC"
,12:"Alacsony",16:"Lav",20:"\u041D\u0438\u0437\u043A\u0438\u0439",21:"Bajo",23:"D\xFC\u015F\xFCk"
,24:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439"};C.AEh={1:"donja granica",2:"\u0414\u043E\u043B\u0435\u043D \u043B\u0438\u043C\u0438\u0442"
,4:"doln\xED limit",5:"Nedre gr\xE6nse",0:"Lower limit",6:"ondergrens",7:"Alampiir"
,8:"Alaraja",9:"Limite inf\xE9rieure",10:"Untergrenze",11:"\u039A\u03B1\u03C4\u03CE\u03C4\u03B5\u03C1\u03BF \u03CC\u03C1\u03B9\u03BF"
,12:"als\xF3 hat\xE1r",16:"Nedre grense",20:"\u041D\u0438\u0436\u043D\u044F\u044F \u0433\u0440\u0430\u043D\u0438\u0446\u0430"
,21:"L\xEDmite inferior",23:"Alt S\u0131n\u0131r",24:"\u041D\u0438\u0436\u043D\u044F \u043C\u0435\u0436\u0430"
};C.Male={1:"mu\u0161ko",2:"\u041C\u044A\u0436\u043A\u0438",3:"\u516C",4:"Sam\u010D\xED"
,5:"Mand",0:"Male",6:"Mannelijk",7:"Isane",8:"Uros",9:"M\xE2le",10:"M\xE4nnlich"
,11:"\u0391\u03C1\u03C3\u03B5\u03BD\u03B9\u03BA\u03CC",12:"F\xE9rfi",16:"Hann",20:
"\u041C\u0443\u0436\u0441\u043A\u043E\u0439",21:"Macho",23:"Erkek",24:"\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439"
};C.Manual={1:"manuelno",2:"\u0420\u044A\u0447\u043D\u043E",3:"\u624B\u518A",4:"N\xE1vod"
,0:"Manual",6:"Manuel",7:"K\xE4sitsi",8:"K\xE4sin",9:"Manuel",10:"Manuell",11:"\u0395\u03B3\u03C7\u03B5\u03B9\u03C1\u03AF\u03B4\u03B9\u03BF"
,12:"K\xE9zik\xF6nyv",20:"\u0420\u0443\u0447\u043D\u043E\u0439",23:"Elle",24:"\u0420\u0443\u0447\u043D\u0438\u0439"
};C.A7W={1:"Ru\u010Dno brisanje obavijesti iz liste je potrebno!",2:"\u0418\u0437\u0438\u0441\u043A\u0432\u0430 \u0441\u0435 \u0440\u044A\u0447\u043D\u043E "+
"\u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u043E\u0442 \u0441\u043F\u0438\u0441\u044A\u043A!",4:"Ru\u010Dn\xED odstran\u011Bn\xED ozn\xE1men\xED ze seznamu je nutn\xE9!"
,5:"Manuel sletning af meddelelser fra listen kr\xE6ves!",0:"Manual deletion of notices from list required!"
,6:"Handmatige verwijdering van meldingen uit lijst vereist!",7:"K\xE4sitsi teadete kustutamine nimekirjast on vajalik!"
,10:"Meldungen m\xFCs~sen noch manuell gel\xF6scht werden!",11:"\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B7 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!",12:"K\xE9zi t\xF6rl\xE9s sz\xFCks\xE9ges az \xE9rtes\xEDt\xE9sek list\xE1j\xE1r\xF3l!"
,16:"Manuell sletting av varsler fra listen kreves!",20:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u043E\u0435 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+
"\u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430!",24:"\u0420\u0443\u0447\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u0437\u0456 "+
"\u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E!"
};C.A7Y={1:"Kupljene teladi:\nmaksimalna starost",2:"\u0417\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0442\u0435\u043B\u0435\u0442\u0430:\n\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 "+
"\u0432\u044A\u0437\u0440\u0430\u0441\u0442",4:"Koupen\xE1 telata: maxim\xE1ln\xED v\u011Bk"
,5:"K\xF8bte kalve:\nmaksimal alder",0:"Purchased calves:\nmaximum age",6:"Maximale leeftijd moederdier op nieuw bedrijf"
,7:"Ostetud vasikad:\nmaksimaalne vanus",8:"Ostetut vasikat:\nenimm\xE4isik\xE4"
,9:"\xC2ge maximum\nveaux achet\xE9",10:"Maximalalter\nzugekaufter Fresser",11:"\u0391\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03BC\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9\u03B1:\n\u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03B7 "+
"\u03B7\u03BB\u03B9\u03BA\u03AF\u03B1",12:"V\xE1s\xE1rolt borjak:\nmaxim\xE1lis \xE9letkor"
,16:"Kj\xF8pte kalver:\nmaksimal alder",20:"\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u043B\u044F\u0442\u0430:n\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 "+
"\u0432\u043E\u0437\u0440\u0430\u0441\u0442",21:"Comprados terneros:\nedad m\xE1xima"
,23:"Sat\u0131n al\u0131nan buza\u011F\u0131lar:\nmaksimum ya\u015F",24:"\u041A\u0443\u043F\u043B\u0435\u043D\u0456 \u0442\u0435\u043B\u044F\u0442\u0430:\n\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 "+
"\u0432\u0456\u043A"};C.Bkv={1:"Mogu\u0107e pohraniti samo {1} \u017Eivotinja!",
2:"\u041C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 "+
"\u0441\u0430\u043C\u043E \u0434\u043E {1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438!"
,4:"Lze skladovat pouze a\u017E {1} zv\xED\u0159at!",5:"Der kan kun opbevares op til {1} dyr!"
,0:"Only up to {1} animals can be stored!",6:"Er kunnen maximaal {1} dieren bewaard worden!"
,7:"Salvestada saab vaid kuni {1} looma!",8:"Vain {1} el\xE4int\xE4 voidaan tallentaa!"
,9:"Un maximum de {1} animaux peut \xEAtre g\xE9r\xE9\xA0!",10:"Es k\xF6nnen maximal {1} Tiere verwaltet werden!"
,11:"\u039C\u03CC\u03BD\u03BF \u03BC\u03AD\u03C7\u03C1\u03B9 {1} \u03B6\u03CE\u03B1 "+
"\u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD!"
,12:"Csak {1} \xE1llat t\xE1rolhat\xF3!",16:"Bare opp til {1} dyr kan lagres",20:
"\u041C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C/\u0438!"
,21:"\xA1Solo se pueden almacenar hasta {1} animales!",23:"Yaln\u0131zca en fazla {1} hayvan saklanabilir!"
,24:"\u041C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u0442\u0432\u0430\u0440\u0438\u043D\u043E\u044E/\u0430\u043C\u0438!"
};C.Bkw={1:"Mogu\u0107e pohraniti samo {1} neregistrovanih \u017Eivotinja!",2:"\u041C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 "+
"\u0441\u0430\u043C\u043E \u0434\u043E {1} \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0438 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438!",4:"Lze ulo\u017Eit pouze a\u017E {1} odhl\xE1\u0161en\xED zv\xED\u0159at!"
,5:"Kun op til {1} afregistreringer af dyr kan gemmes!",0:"Only up to {1} animal unregistrations can be stored!"
,6:"Er kunnen maximaal {1} afmeldingen bewaard worden!",7:"Salvestada saab vaid kuni {1} looma registreeringu t\xFChistamist!"
,8:"Vain {1} el\xE4inten rekister\xF6inti\xE4 voidaan tallentaa!",9:"Un maximum de {1} d\xE9sinscriptions peut \xEAtre g\xE9r\xE9\xA0!"
,10:"Es k\xF6nnen max. {1} Abmeldungen verwaltet werden!",11:"\u039C\u03CC\u03BD\u03BF \u03BC\u03AD\u03C7\u03C1\u03B9 {1} \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2 "+
"\u03B6\u03CE\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD!",12:"Csak legfeljebb {1} \xE1llat leiratkoz\xE1sa t\xE1rolhat\xF3!"
,16:"Bare opp til {1} avregistrerte dyr kan lagres",20:"\u041C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u0441\u043D\u044F\u0442\u0438\u0435\u043C "+
"\u0441 \u0443\u0447\u0451\u0442\u0430!",21:"\xA1Solo se pueden almacenar hasta {1} anulaciones de animales!"
,23:"Yaln\u0131zca {1} adete kadar hayvan kayd\u0131 silinebilir!",24:"\u041C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u0437\u043D\u044F\u0442\u0442\u044F\u043C "+
"\u0437 \u043E\u0431\u043B\u0456\u043A\u0443!"};C.Bkx={1:"Mogu\u0107e pohraniti samo {1} podataka po \u017Eivotinji!"
,2:"\u0421\u0430\u043C\u043E \u0434\u043E {1} \u0435\u0434\u0438\u043D\u0438\u0446\u0438 "+
"\u0434\u0430\u043D\u043D\u0438 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 "+"\u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!",4:"Na jedno zv\xED\u0159e lze ulo\u017Eit pouze a\u017E {1} datov\xFDch entit!"
,5:"Der kan kun opbevares op til {1} dataenheder per dyr!",0:"Only up to {1} data entities can be stored per animal!"
,6:"Er kunnen maximaal {1} individuele gegevens bewaard worden!",7:"\xDChe looma kohta saab salvestada vaid kuni {1} andme\xFCksust!"
,8:"Vain {1} tietoyksikk\xF6\xE4 voidaan tallentaa el\xE4int\xE4 kohden!",9:"Max. {1} donn\xE9es individuelles peuvent \xEAtre g\xE9r\xE9es par animal\xA0!"
,10:"Pro Tier k\xF6nnen max. {1} Einzeldaten verwaltet werden!",11:"\u039C\u03CC\u03BD\u03BF \u03AD\u03C9\u03C2 {1} \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD "+
"\u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD "+
"\u03B1\u03BD\u03AC \u03B6\u03CE\u03BF!",12:"Egy \xE1llatonk\xE9nt csak legfeljebb {1} adategys\xE9g t\xE1rolhat\xF3!"
,16:"Bare data opp til {1} pr dyr kan lagres",20:"\u0414\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C "+
"\u0434\u0430\u043D\u043D\u044B\u0445!",21:"\xA1Solo se pueden almacenar hasta {1} entidades de datos por animal!"
,23:"Hayvan ba\u015F\u0131na yaln\u0131zca en fazla {1} veri varl\u0131\u011F\u0131 "+
"depolanabilir!",24:"\u0414\u043B\u044F \u043E\u0434\u043D\u0456\u0454\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u043E\u0431\'\u0454\u043A\u0442\u043E\u043C "+
"\u0434\u0430\u043D\u0438\u0445!"};C.ARX={1:"Dosegli ste maksimalan broj podataka koji se mogu pohraniti!"
,2:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0430\u0442 \u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0438\u044F\u0442 "+
"\u0431\u0440\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 "+"\u0434\u0430\u043D\u043D\u0438!"
,4:"Byl dosa\u017Een maxim\xE1ln\xED po\u010Det datov\xFDch z\xE1znam\u016F!",5:
"Maksimalt antal dataposter n\xE5et!",0:"Maximum number of data records reached!"
,6:"Maximum aantal bereikt",7:"Saavutatud on maksimaalne andmekirjete arv!",8:"Datatietueiden enimm\xE4ism\xE4\xE4r\xE4 saavutettu!"
,9:"Nombre maximal d\'enregistrements atteint\xA0!",10:"Maximale Anzahl an Datens\xE4tzen erreicht!"
,11:"\u03A3\u03C5\u03BC\u03C0\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BF \u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C9\u03BD!",12:"Az adatbejegyz\xE9sek maxim\xE1lis sz\xE1ma el\xE9rve!"
,16:"Maksimalt antall dataposter n\xE5dd!",20:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 "+
"\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439!"
,21:"\xA1Se ha alcanzado el n\xFAmero m\xE1ximo de registros de datos!",23:"Maksimum veri kayd\u0131 say\u0131s\u0131na ula\u015F\u0131ld\u0131!"
,24:"\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 "+
"\u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u0456\u0432!"
};C.A70={1:"Maksimalna preciznost",2:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 \u043F\u0440\u0435\u0446\u0438\u0437\u043D\u043E\u0441\u0442"
,4:"Maxim\xE1ln\xED p\u0159esnost",5:"Maksimal pr\xE6cision",0:"Maximum precision"
,6:"Maximale precisie",7:"Maksimaalne t\xE4psus",8:"Maksimaalinen tarkkuus",9:"Pr\xE9cision maximale"
,10:"Maximale Genauigkeit",11:"\u039C\u03AD\u03B3\u03B9\u03C3\u03C4\u03B7 \u03B1\u03BA\u03C1\u03AF\u03B2\u03B5\u03B9\u03B1"
,12:"Maxim\xE1lis pontoss\xE1g",16:"Maksimal presisjon",20:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F "+
"\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C",21:"Precisi\xF3n m\xE1xima",23:
"Maksimum hassasiyet",24:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C"
};C.Arr={1:"Mjerenje",2:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438 \u0442\u0438\u043F\u043E\u0432\u0435"
,3:"\u7269\u7A2E\u6E2C\u91CF",4:"M\u011B\u0159en\xE9 druhy zv\xED\u0159at",5:"Arter m\xE5lt"
,0:"Species measured",6:"Meten bij",7:"T\xF5up\xF5hine m\xF5\xF5tmine",8:"Mittauskohde"
,9:"Esp\xE8ce mesur\xE9e",10:"Messeinsatz bei",11:"\u039C\u03B5\u03C4\u03C1\u03B7\u03BC\u03AD\u03BD\u03B1 \u03B5\u03AF\u03B4\u03B7"
,12:"Fajok m\xE9rt\xE9ke",16:"M\xE5l type dyr",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u0438"
,21:"Medici\xF3n de",23:"Hayvan\u0131n t\xFCr\xFC \xF6l\xE7\xFCm\xFC",24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438"
};C.Bkz={1:"mjerenje nije uspjelo",2:"\u041D\u0435\u0443\u0441\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u6E2C\u91CF\u5931\u6557",4:"M\u011B\u0159en\xED chyba",5:"M\xE5ling mislykkedes"
,0:"Measure failed",6:"Meting mislukt",7:"M\xF5\xF5tmine ei",8:"Mittausvirhe",9:
"\xC9chec de la mesure",10:"Messung fehlgeschlagen",11:"\u0391\u03C0\u03BF\u03C4\u03C5\u03C7\u03B7\u03BC\u03AD\u03BD\u03B7 \u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7"
,12:"Az int\xE9zked\xE9s megbukott.",16:"Mislykket m\xE5ling",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"
,21:"Fallo medici\xF3n",23:"\xD6l\xE7\xFCm ba\u015Far\u0131s\u0131z",24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0435 "+
"\u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E"};C.BkA={1:"mjerenje uspjelo",
2:"\u0418\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435\u0442\u043E \u0435 "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E"
,4:"M\u011B\u0159en\xED bylo \xFAsp\u011B\u0161n\xE9",5:"M\xE5ling lykkedes",0:"Measure succeeded"
,6:"Meting succesvol",7:"M\xF5\xF5tmine \xF5nnestus",8:"Mittaus onnistui",9:"Mesure r\xE9ussie"
,10:"Messung erfolgreich",11:"\u039C\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1\u03C2"
,12:"M\xE9r\xE9s sikeres",16:"M\xE5lingen suksessfull",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E",21:"Medida exitosa",23:"\xD6l\xE7\xFCm ba\u015Far\u0131l\u0131 oldu"
,24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E"};C.A71={1:"vrijednosti izmjerene temperature"
,2:"\u0422\u0435\u043C\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0438\u044F"
,3:"\u6EAB\u5EA6\u6E2C\u91CF",4:"M\u011B\u0159en\xED teploty",5:"Temperaturm\xE5linger"
,0:"Temp. measurements",6:"Gemeten temperaturen",7:"M\xF5\xF5tmis temp.",8:"Lpt. mittaukset"
,9:"Mesures de la temp\xE9rature",10:"Messwerte Temperatur",11:"\u03A0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AD\u03C2 \u03BC\u03B5\u03C4\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2"
,12:"H\u0151m\xE9rs\xE9klet m\xE9r\xE9sek",16:"Temp. m\xE5linger",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",21:"Mediciones temperatura"
,23:"S\u0131cakl\u0131k \xF6l\xE7\xFCmler",24:"\u0414\u0430\u043D\u0456 \u0437\u043C\u0456\u043D\u0435\u043D\u043D\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"};C.AEm={1:"Unos u meni"
,2:"\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u043D\u0430 \u043C\u0435\u043D\u044E\u0442\u043E"
,3:"\u9078\u55AE\u9805\u76EE",4:"Polo\u017Eky nabidky",5:"Menukort punkter",0:"Menu items"
,6:"Menuonderdelen",7:"Men\xFC\xFC kirjed",8:"Valikkokohdat",9:"\xC9l\xE9ments du menu"
,10:"Men\xFCeintr\xE4ge",11:"\u03A0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1 \u03BC\u03B5\u03BD\u03BF\u03CD"
,12:"\xC9tlap t\xE9telek",16:"Meny elementer",20:"\u041F\u0443\u043D\u043A\u0442\u044B \u043C\u0435\u043D\u044E"
,21:"Opciones de men\xFA",23:"Men\xFC \xF6\u011Feleri",24:"\u041F\u0443\u043D\u043A\u0442\u0438 \u043C\u0435\u043D\u044E"
};C.A73={1:"Bolesti metabolizma",2:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0442\u043D\u0438 \u0437\u0430\u0431\u043E\u043B\u044F\u0432\u0430\u043D\u0438\u044F"
,4:"Metabolick\xE9 nemoci",5:"Stofskiftesygdomme",0:"Metabolic diseases",6:"Stofwisselingsziekte"
,7:"Ainevahetushaigused",8:"Aineenvaihduntasairaudet",9:"Maladies m\xE9taboliques"
,10:"Stoffwechsel~krankheiten",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BF\u03BB\u03B9\u03C3\u03BC\u03BF\u03CD"
,12:"Anyagcsere-betegs\xE9gek",16:"Ford\xF8yelses sykdommer",20:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 "+
"\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",21:"Enfermedades metab\xF3licas"
,23:"Metabolik hastal\u0131klar",24:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0456\u0447\u043D\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A75={1:"Mogu\u0107nost izmu\u017Ee",2:"\u041C\u043B\u0435\u0447\u043D\u043E\u0441\u0442"
,4:"Dojivost",5:"M\xE6lkbarhed",0:"Milkability",6:"Melkbaarheid",7:"L\xFCpsiv\xF5ime"
,8:"Lypsett\xE4vyys",9:"Laitabilit\xE9",10:"Melkbarkeit",11:"\u0394\u03C5\u03BD\u03B1\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 \u03B1\u03C1\u03BC\u03B5\u03B3\u03AE\u03C2"
,12:"\"Fejhet\u0151s\xE9g\"",16:"Melkbarhet",20:"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0439\u043A\u0438"
,21:"Lechabilidad",23:"Sa\u011F\u0131labilirlik",24:"\u041C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0434\u043E\u0457\u043D\u043D\u044F"
};C.Moderate={1:"Sredstvo",2:"\u0423\u043C\u0435\u0440\u0435\u043D",4:"M\xEDrn\xFD"
,5:"Moderat",0:"Moderate",6:"gemiddeld",7:"M\xF5\xF5dukas",8:"Kohtalainen",9:"Mod\xE9r\xE9"
,10:"Mittel",11:"\u039C\u03AD\u03C4\u03C1\u03B9\u03BF",12:"M\xE9rs\xE9kelt",16:"Moderat"
,20:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",21:"Moderado",23:"Orta Seviye",
24:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439"};C.Hk={1:"Mjesec",2:"M\u0435\u0441\u0435\u0446"
,4:"M\u011Bs\xEDc",5:"M\xE5ned",0:"Month",6:"Maand",7:"Kuu",8:"Kuukausi",9:"Mois"
,10:"Monat",11:"\u039C\u03AE\u03BD\u03B1\u03C2",12:"H\xF3nap",13:"Mese",16:"M\xE5ned"
,20:"\u041C\u0435\u0441\u044F\u0446",21:"Mes",23:"Ay",24:"\u041C\u0456\u0441\u044F\u0446\u044C"
};C.A77={1:"Stopa uginu\u0107a",2:"\u0421\u043C\u044A\u0440\u0442\u043D\u043E\u0441\u0442"
,4:"Smrtnost",5:"D\xF8delighed",0:"Mortality",6:"Sterfte",7:"Suremus",8:"Kuolleisuus"
,9:"Taux de perte",10:"Verlustrate",11:"\u0398\u03BD\u03B7\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1"
,12:"Hal\xE1loz\xE1s",16:"D\xF8delighet",20:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043F\u043E\u0442\u0435\u0440\u044C"
,21:"Mortalidad",23:"\xD6l\xFCm oran\u0131",24:"\u041A\u043E\u0435\u0444\u0456\u0446\u0456\u0454\u043D\u0442 \u0432\u0442\u0440\u0430\u0442"
};C.A78={1:"Senzor kretanja",2:"\u0421\u0435\u043D\u0437\u043E\u0440 \u0437\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435"
,4:"\u010Cidlo pohybu",5:"Bev\xE6gelsessensor",0:"Motion Sensor",6:"Beweginssensor"
,7:"Liikumisandur",8:"Liiketunnistin",9:"Capteur de position",10:"Lagesensor",11:
"\u0391\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AE\u03C2 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Mozg\xE1s\xE9rz\xE9kel\u0151",16:"Bevegelsessensor",20:"\u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F"
,21:"Sensor de movimiento",23:"Hareket sens\xF6r\xFC",24:"\u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"
};C.Ars={1:"Jedno grlo / vi\u0161e grla",2:"\u041C\u043D\u043E\u0433\u043E",3:"\u500D\u6578"
,4:"N\xE1sobky",5:"Flertal",0:"Multiples",6:"Eenling/Meerling",7:"Paljunda",8:"Toistot"
,9:"Multiple",10:"Einling/Mehrling",11:"\u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03B1"
,12:"T\xF6bbsz\xF6r\xF6s\xF6k",16:"Multipliser",20:"\u0411\u043B\u0438\u0437\u043D\u0435\u0446\u044B"
,21:"Ternero simple/m\xFAltiple",23:"\xC7oklu",24:"\u0411\u043B\u0438\u0437\u043D\u044E\u043A\u0438"
};C.BkF={1:"prije {1} dana",2:"\u041F\u0440\u0435\u0434\u0438 {1} \u0434\u043D\u0438"
,3:"{1}\u5929\u524D",4:"Dny p\u0159ed",5:"{1} dage siden",0:"{1} days ago",6:"{1} dagen geleden"
,7:"{1} p\xE4eva tagasi",8:"{1} p\xE4iv\xE4\xE4 sitten",9:"il y a {1} jour",10:"vor {1} Tagen"
,11:"\u03A0\u03C1\u03AF\u03BD \u03B1\u03C0\u03AF {1} \u03BC\u03AD\u03C1\u03B1",12:
"{1} napja",16:"For {1} dager siden",20:"{1} \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434"
,21:"hace {1} d\xEDas",23:"{1} g\xFCn \xF6nce",24:"{1} \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443"
};C.AR2={1:"{1} od 4",2:"{1} \u043E\u0442 4",4:"1 z 4",5:"1 af 4",0:"{1} of 4",6:
"{1} van 4",7:"{1} neljast",8:"{1} / 4",9:"{1} de 4",10:"{1} von 4",11:"{1} \u03B1\u03C0\u03CC 4"
,12:"1 a 4-b\u0151l",16:"{1} av 4",20:"{1} \u0438\u0437 4",21:"{1} de 4",23:"{1} / 4"
,24:"{1} \u0456\u0437 4"};C.BkI={1:"Identifikacioni broj \u017Eivotinje je ve\u0107 povezan s ovom \u017Eivotinjom!\nPonovna "+
"dodjela ID-a nije mogu\u0107a!",2:"ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0432\u0435\u0447\u0435 "+
"\u0435 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u043E \u0441 \u0442\u043E\u0432\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 ID \u043D\u0435 \u0435 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E!"
,4:"Toto zv\xED\u0159e ji\u017E m\xE1 p\u0159i\u0159azen\xE9 ID!\nP\u0159e\u0159azen\xED "+
"ID nen\xED mo\u017En\xE9!",5:"Et dyre-ID er allerede knyttet til dette dyr!\nGenudpegning af ID er ikke "+
"muligt!",0:"An animal ID is already linked to this animal!\nID reassignment is not "+
"possible!",6:"Er is al een nummer gelinkt aan dit dier.",7:"Loomale on juba looma ID seotud!\nID \xFCmberm\xE4\xE4ramine pole v\xF5imalik!"
,8:"T\xE4lle el\xE4imelle on jo annettu korvamerkkinumero! Toisen numeron antaminen "+
"ei ole mahdollista!",9:"Un n\xB0 d\'identit\xE9 a \xE9t\xE9 d\xE9j\xE0 attribu\xE9 \xE0 cet animal\xA0! "+
"Une autre attribution n\'est plus possible\xA0!",10:"Diesem Tier wurde bereits eine Ohrmarken~nummer zuge~ordnet! Die Zu~weisung "+
"einer anderen Nummer ist nicht m\xF6glich!",11:"\u0388\u03BD\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AE\u03B4\u03B7 "+"\u03C3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF \u03BC\u03B5 "+
"\u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03B6\u03CE\u03BF!\n\u0397 \u03B5\u03C0\u03B1\u03BD\u03B1\u03BA\u03B1\u03C4\u03B1\u03BD\u03BF\u03BC\u03AE "+
"\u03C4\u03BF\u03C5 ID \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 "+"\u03B4\u03C5\u03BD\u03B1\u03C4\u03AE!"
,12:"Egy \xE1llat azonos\xEDt\xF3ja m\xE1r hozz\xE1 van rendelve ehhez az \xE1llathoz!\nAzonos\xEDt\xF3 "+
"\xFAjra hozz\xE1rendel\xE9se nem lehets\xE9ges!",16:"Et dyre-ID er allerede koblet til dette dyret!\nID-omtildeling er ikke "+
"mulig!",20:"\u041A \u044D\u0442\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D ID!\n\u041F\u0435\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "+
"ID \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E!",21:"\xA1Un ID de animal ya est\xE1 vinculado a este animal!\n\xA1No es posible "+
"la reasignaci\xF3n del ID!",23:"Bu hayvana zaten bir hayvan kimli\u011Fi ba\u011Fl\u0131!\nKimli\u011Fin "+
"yeniden atanmas\u0131 m\xFCmk\xFCn de\u011Fil!",24:"\u0414\u043E \u0446\u0456\u0454\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0432\'\u044F\u0437\u0430\u043D\u043E "+"ID!\n\u041F\u0435\u0440\u0435\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"ID \u043D\u0435 \u0454 \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u043C!"};C.Ul={
1:"Oznaka u\u0161ne markice",2:"\u0423\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430"
,4:"N\xE1rodn\xED identifikace zv\xED\u0159at",5:"Nationalt dyre-ID",0:"National animal ID"
,6:"Oormerknummer",7:"Riiklik looma ID",8:"Kansallinen el\xE4in ID",9:"\u2116 de la boucle"
,10:"Ohrmarken~nummer",11:"\u0395\u03B8\u03BD\u03B9\u03BA\u03CC \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"Nemzeti \xE1llat azonos\xEDt\xF3",16:"Nasjonalt dyre-ID"
,20:"\u041D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438"
,21:"ID nacional de animal",23:"Ulusal hayvan kimli\u011Fi",24:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"
};C.Gr={1:"novo",2:"\u041D\u043E\u0432",3:"\u65B0\u7684",4:"Nov\xFD",5:"Ny",0:"New"
,6:"Nieuw",7:"Uus",8:"Uusi",9:"Nouveau",10:"Neu",11:"\u039D\u03AD\u03BF",12:"\xDAj"
,16:"Ny",20:"\u041D\u043E\u0432\u044B\u0439",21:"Nuevo",23:"Yeni",24:"\u041D\u043E\u0432\u0438\u0439"
};C.A7$={1:"Nova \u017Eivotinja",2:"\u041D\u043E\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,4:"Nov\xE9 zv\xED\u0159e",5:"Nyt dyr",0:"New animal",6:"Nieuw dier",7:"Uus loom"
,8:"Uusi el\xE4in",9:"Nouvel animal",10:"Neues Tier",11:"\u039D\u03AD\u03BF \u03B6\u03CE\u03BF"
,12:"\xDAj \xE1llat",16:"Nytt dyr",20:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Nuevo animal",23:"Yeni Hayvan",24:"\u041D\u043E\u0432\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430"
};C.NewAnimals={1:"Nove \u017Eivotinje",2:"\u041D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,4:"Nov\xE1 zv\xED\u0159ata",5:"Nye dyr",0:"New animals",6:"Niewe dieren",7:"Uued loomad"
,8:"Uudet el\xE4imet",9:"Nouveaux animaux",10:"Neue Tiere",11:"\u039D\u03AD\u03B1 \u03B6\u03CE\u03B1"
,12:"\xDAj \xE1llatok",16:"Nye dyr",20:"\u041D\u043E\u0432\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,21:"Nuevos animales",23:"Yeni Hayvanlar",24:"\u041D\u043E\u0432\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A8a={1:"Novo na farmi",2:"\u041D\u043E\u0432\u043E \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430"
,4:"Nov\xE9 na farm\u011B",5:"Ny p\xE5 g\xE5rden",0:"New on farm",6:"Nieuw op bedrijf"
,7:"Uus farmis",8:"Uusi tilalla",9:"Arriv\xE9es",10:"Zug\xE4nge",11:"\u039D\u03AD\u03BF \u03C3\u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1"
,12:"\xDAj a farmon",16:"Ny p\xE5 g\xE5rden",20:"\u041D\u043E\u0432\u043E\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0435"
,21:"Nuevo en la granja",23:"\xC7iftlikte Yeni",24:"\u041D\u043E\u0432\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0456"
};C.A8b={1:"Novo na farmi, nema transpondera",2:"\u041D\u043E\u0432\u043E \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430, "+
"\u0431\u0435\u0437 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440",4:"Nov\xE9 na farm\u011B, bez transpond\xE9ru"
,5:"Ny p\xE5 g\xE5rden, ingen transponder",0:"New on farm, no transponder",6:"Nieuw op bedrijf, geen transponder"
,7:"Uus farmis, ilma saatjata",8:"Uusi tilalla, ei transponderia",9:"Arriv\xE9es, pas de transpondeur"
,10:"Zuk\xE4ufe, kein Transponder",11:"\u039D\u03AD\u03BF\u03C2 \u03C3\u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1, "+
"\u03C7\u03C9\u03C1\u03AF\u03C2 \u03B4\u03B9\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"\xDAj a farmon, nincs transzponder",16:"Ny p\xE5 g\xE5rden, ingen transponder"
,20:"\u041D\u043E\u0432\u043E\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0435, "+
"\u043D\u0435\u0442 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,21:"Nuevo en la granja, sin transpondedor",23:"\xC7iftlikte yeni, aktar\u0131c\u0131 yok"
,24:"\u041D\u043E\u0432\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0456, "+"\u0431\u0435\u0437 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.ASf={1:"briga o novoro\u0111enim grlima",2:"\u0413\u0440\u0438\u0436\u0430 \u0437\u0430 \u043D\u043E\u0432\u043E\u0440\u043E\u0434\u0435\u043D\u043E"
,3:"\u65B0\u751F\u5C0F\u725B\u8B77\u7406",4:"P\xE9\u010De o novorozen\xE9",5:"Nyf\xF8dtpleje"
,0:"Newborn care",6:"Eerst verzorging kaf",7:"Vasts\xFCndinu",8:"Vastasyntynyt hoito"
,9:"Premier soin",10:"Erstversorgung",11:"\u03A6\u03C1\u03BF\u03BD\u03C4\u03AF\u03B4\u03B1 \u03BD\u03B5\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C4\u03BF\u03C5"
,12:"\xDAjsz\xFCl\xF6tt gondoz\xE1s",16:"Omsorg for nyf\xF8dte",20:"\u041F\u0435\u0440\u0432\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C"
,21:"Atenci\xF3n primaria",23:"Yeni do\u011Fan bak\u0131m\u0131",24:"\u041F\u0435\u0440\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"
};C.AEt={1:"Sljede\u0107i broj \u017Eivotinje",2:"ID \u043D\u0430 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E\u0442\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",4:"Dal\u0161\xED identifika\u010Dn\xED \u010D\xEDslo zv\xED\u0159ete"
,5:"N\xE6ste dyre-ID",0:"Next animal ID",6:"Volgend diernummer",7:"J\xE4rgmine looma ID"
,8:"Seuraavan el\xE4imen tunnus",9:"Prochain n\xB0 d\'animal",10:"N\xE4chste Tiernummer"
,11:"\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"K\xF6vetkez\u0151 \xE1llat azonos\xEDt\xF3",16:"Neste dyre-ID"
,20:"ID \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Pr\xF3ximo animal ID",23:"Sonraki hayvan kimli\u011Fi",24:"ID \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.No={1:"Ne",2:"\u041D\u0435",3:"\u4E0D",4:"Ne",5:"Nej",0:"No",6:"Nee",7:"Ei",
8:"Ei",9:"Non",10:"Nein",11:"\u0384\u039F\u03C7\u03B9",12:"Nem",16:"Nei",17:"Nie"
,20:"\u041D\u0435\u0442",23:"Hay\u0131r",24:"\u041D\u0456"};C.A8c={1:"Nikakve aktivnosti"
,2:"\u041D\u044F\u043C\u0430",4:"\u017D\xE1dn\xE1 akce",5:"Ingen handling",0:"No action"
,6:"geen actie",7:"Pole tegevust",8:"Ei toimintaa",9:"Pas d\u2019action",10:"Keine Aktion"
,11:"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1"
,12:"Semmi cselekv\xE9s",16:"Ingen handling",20:"\u0411\u0435\u0437 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,21:"Ninguna acci\xF3n",23:"Eylem Yok",24:"\u0411\u0435\u0437 \u0434\u0456\u0457"
};C.A8d={1:"Nema dodijeljenog ID broja",2:"\u041D\u044F\u043C\u0430 \u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,4:"\u017D\xE1dn\xE9 p\u0159id\u011Blen\xE9 identifika\u010Dn\xED \u010D\xEDslo "+
"n\xE1rodn\xEDho zv\xED\u0159ete",5:"Intet nationalt dyre-ID tildelt",0:"No national animal ID assigned"
,6:"Geen oormerk toegewezen",7:"Looma ID pole m\xE4\xE4ratud",8:"Ei el\xE4intunnusta"
,9:"Aucun ID d\u2019animal attri~bu\xE9",10:"Keine Ohrmar~kennummer zugewiesen",
11:"\u0394\u03B5\u03BD \u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"Nincs hozz\xE1~rendelt nem~ze~ti \xE1llat-azonos."
,16:"Ingen dyre-ID tildelt",20:"\u041D\u043E\u043C\u0435\u0440 \u0436\u0438~\u0432\u043E\u0442~\u043D\u043E\u0433\u043E "+
"\u043D\u0435 \u043D\u0430~\u0437\u043D\u0430~\u0447\u0435\u043D",21:"Ning\xFAn ID de animal asignado"
,23:"Ulusal hayvan kimli\u011Fi atanmad\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E"};C.AEu={
1:"Nema registrovanih \u017Eivotinja!",2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E/\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438!",3:"\u6C92\u6709\u5C0F\u725B\u5DF2\u767B\u9304\uFF01"
,4:"Nebyla registrov\xE1na \u017E\xE1dn\xE1 zv\xED\u0159ata",5:"Ingen dyr registreret!"
,0:"No animal(s) registered!",6:"Geen dier(en) aangemeld!",7:"Loom pole registreeritud"
,8:"Ei rekister\xF6ityj\xE4 el\xE4imi\xE4!",9:"Pas d\u2019animal(s) enregistr\xE9(s)\xA0!"
,10:"Kein(e) Tier(e) angemeldet!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03B7\u03B8\u03B5\u03AF "+
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF!",12:"Nincs regisztr\xE1lt \xE1llat!"
,16:"Ingen dyr registrert!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 "+
"\u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B!"
,21:"\xA1No hay animal(es) registrado(s)!",23:"Kay\u0131tl\u0131 hayvan(lar) yok!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430/\u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456!"
};C.A8e={1:"Nema \u017Eivotinja na listi alarma!",2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438 "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"\u6C92\u6709\u5C0F\u725B\u5728\u8B66\u5831\u6E05\u55AE\u4E0A\uFF01",4:"\u017D\xE1dn\xE1 zv\xED\u0159ata na seznamu alarm\u016F"
,5:"Ingen dyr p\xE5 alarmlisten!",0:"No animal(s) on alarm list!",6:"Geen dier(en) op alarmlijst!"
,7:"Hoiatused puuduvad",8:"Ei el\xE4imi\xE4 h\xE4lytyslistalla!",9:"Pas d\u2019animal(s) sur la liste d\u2019alerte\xA0!"
,10:"Kein(e) Tier(e) auf Alarmliste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD!"
,12:"\xC1llat(ok) nincsenek a riaszt\xE1si list\xE1n!",16:"Ingen dyr p\xE5 alarmliste!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0442\u0440\u0435\u0432\u043E\u0433 "+
"\u043D\u0435\u0442!",21:"\xA1No figuran animal(es) en lista de alarmas!",23:"Alarm listesinde hayvan(lar) yok!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438/\u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u0440\u0438\u0432\u043E\u0433 "+
"\u043D\u0435\u043C\u0430\u0454!"};C.A8f={1:"Nema \u017Eivotinja na listi za kontrolu!"
,2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438 "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435!"
,3:"\u6C92\u6709\u5C0F\u725B\u5728\u63A7\u5236\u6E05\u55AE\u4E0A\uFF01",4:"\u017D\xE1dn\xE1 zv\xED\u0159ata na kontroln\xEDm seznamu"
,5:"Ingen dyr p\xE5 kontrollisten!",0:"No animal(s) on control list!",6:"Geen dier(en) op controle lijst!"
,7:"Kontrolli vajavad loomad puuduvad",8:"Ei el\xE4imi\xE4 kontrolliluettelossa!"
,9:"Pas d\u2019animal(s) sur la liste de contr\xF4le\xA0!",10:"Kein(e) Tier(e) auf Kontrollliste!"
,11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5!"
,12:"Nincs \xE1llat a szab\xE1lyoz\xE1si list\xE1n!",16:"Ingen dyr p\xE5 kontrolllisten!"
,20:"\u0412 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C "+
"\u0441\u043F\u0438\u0441\u043A\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043D\u0435\u0442!",21:"\xA1No figuran animal(es) en lista de control!",23:"Kontrol listesinde hayvan(lar) yok!"
,24:"\u0423 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C\u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u0432\u0430\u0440\u0438\u043D "+"\u043D\u0435\u043C\u0430\u0454!"
};C.Av_={1:"Nema \u017Eivotinja na listi!",2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E (\u0438) "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!",4:"\u017D\xE1dn\xE9 zv\xED\u0159e na seznamu!"
,5:"Ingen dyr p\xE5 listen!",0:"No animal(s) on list!",6:"Geen dieren op de lijst"
,7:"\xDChtegi looma nimekirjas pole!",8:"Ei el\xE4imi\xE4 luettelossa!",9:"Aucun animal sur la liste\xA0!"
,10:"Kein(e) Tier(e) auf der Liste!",11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1!",12:"Nincsenek \xE1llatok a list\xE1n!",16:"Ingen dyr p\xE5 listen!"
,20:"\u041D\u0435\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 "+
"\u0441\u043F\u0438\u0441\u043A\u0435!",21:"\xA1Ning\xFAn animal en la lista!",23:
"Listede hayvan(lar) yok!",24:"\u041D\u0435\u043C\u0430\u0454 \u0442\u0432\u0430\u0440\u0438\u043D \u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443!"};C.A8g={1:"Nema \u017Eivotinja na listi za pra\u0107enje!"
,2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E(\u0438) "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435!"
,4:"\u017D\xE1dn\xE9 zv\xED\u0159e/\u017E\xE1dn\xE1 zv\xED\u0159ata na seznamu "+
"sledov\xE1n\xED!",5:"Ingen dyr p\xE5 observationslisten!",0:"No animal(s) on watch list!"
,6:"Geen dieren op Watchlist",7:"\xDChtegi looma vaatlusnimekirjas pole!",8:"Ei el\xE4imi\xE4 katselulistalla!"
,9:"Aucun animal sur la liste de suivi\xA0!",10:"Keine Tier(e) auf der Beobachtungsliste!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2!"
,12:"Nincsenek \xE1llatok a figyel\u0151list\xE1n!",16:"Ingen dyr p\xE5 overv\xE5kningslisten!"
,20:"\u041D\u0435\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 "+
"\u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F!"
,21:"\xA1Ning\xFAn animal en la lista de seguimiento!",23:"\u0130zleme listesinde hayvan(lar) yok!"
,24:"\u0416\u043E\u0434\u043D\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F!"
};C.A8h={1:"Prazna lista / svim \u017Eivotinjama su dodijeljeni ID brojevi!",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0434\u0430 \u0438\u043C\u0430\u0442 "+
"\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0438 ID (15 \u0446\u0438\u0444\u0440\u0438)!"
,4:"Pr\xE1zdn\xFD seznam,\nv\u0161echna zv\xED\u0159ata maj\xED p\u0159id\u011Blen\xE1 "+
"ID (15 \u010D\xEDslic)!",5:"Tom liste,\nalle dyr har ID\'er (15 cifre) tildelt!"
,0:"Empty list,\nall animals do have IDs (15 digits) assigned!",6:"Lege lijst. Alle dieren hebben 15 cijfers in het ID"
,7:"Nimekiri on t\xFChi,\nk\xF5ikidele loomadele on m\xE4\xE4ratud ID-d (15 "+"numbrit)!"
,8:"Tyhj\xE4 luettelo,\nkaikki el\xE4imet on m\xE4\xE4ritetty tunnuksilla (15 "+
"numeroa)!",9:"Liste vide, un \u2116 d\'identification \xE0 15 chiffres a \xE9t\xE9 attribu\xE9 "+
"\xE0 tous les animaux\xA0!",10:"Liste leer,\nallen Tieren wurde jeweils eine 15 stellige ID zugewiesen!"
,11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03B1 "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"(15 \u03C8\u03B7\u03C6\u03AF\u03C9\u03BD)!",12:"\xDCres lista,\nminden \xE1llatnak van hozz\xE1rendelve azonos\xEDt\xF3 "+
"(15 sz\xE1mjegy)!",16:"Tom liste,\nalle dyr har ID-er (15 sifre) tildelt!",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442,\n\u0432\u0441\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 "+
"15-\u0437\u043D\u0430\u0447\u043D\u044B\u0435 ID-\u043D\u043E\u043C\u0435\u0440\u0430!"
,21:"Lista vac\xEDa,\ntodos los animales tienen asignados IDs (15 d\xEDgitos)",23:
"Bo\u015F liste,\nt\xFCm hayvanlara atanm\u0131\u015F kimlikler (15 haneli) "+"var!"
,24:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439,\n\u0443\u0441\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 "+
"15-\u0437\u043D\u0430\u0447\u043D\u0456 ID-\u043D\u043E\u043C\u0435\u0440\u0438!"
};C.A8i={1:"Lista prazna / svim \u017Eivotinjama je dodijeljen oda\u0161ilja\u010D!"
,2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0438\u043C\u0430\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"
,4:"Pr\xE1zdn\xFD seznam,\nv\u0161echna zv\xED\u0159ata maj\xED p\u0159id\u011Blen\xE9 "+
"transpond\xE9ry!",5:"Tom liste,\nalle dyr har tildelt transpondere!",0:"Empty list,\nall animals do have transponders assigned!"
,6:"Lege lijst. Alle dieren hebben geregistreerde transponders",7:"T\xFChi nimekiri\nloomad kellel pole vastuv\xF5tja nr m\xE4\xE4ratud"
,8:"Tyhj\xE4 luettelo,\nkaikille el\xE4imille on m\xE4\xE4ritetty transponderit!"
,9:"Liste vide,\ntous les animaux ont des transpondeurs attribu\xE9s\xA0!",10:"Liste leer,\nallen Tieren wurden Transponder zugewiesen!"
,11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5\u03C2 "+
"\u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CE\u03C4\u03B5\u03C2!",12:"\xDCres lista,\nminden \xE1llatnak van hozz\xE1rendelve transzponder!"
,16:"Tom liste,\nalle dyr har f\xE5tt transpondere!",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442,\n\u0432\u0441\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B!",21:"Lista vac\xEDa,\ntodos los animales tienen asignados transpondedores"
,23:"Bo\u015F liste,\nt\xFCm hayvanlara atanm\u0131\u015F aktar\u0131c\u0131lar "+
"var!",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439,\n\u0443\u0441\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"};C.A8j={
1:"Nisu une\u0161eni podaci o te\u017Eini!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u0442\u0435\u0433\u043B\u0430 \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435!"
,4:"Dosud nejsou zaznamen\xE1ny \u017E\xE1dn\xE9 porodn\xED hmotnosti!",5:"Ingen f\xF8dselsv\xE6gte registreret endnu!"
,0:"No birth weights recorded yet!",6:"Geen geboorte gewicht opgenomen",7:"Salvestatud s\xFCnnikaalud puuduvad!"
,8:"Syntym\xE4painoja ei ole viel\xE4 kirjattu!",9:"Aucun poids de naissance\nenregistr\xE9 pour l\'instant"
,10:"Noch keine Geburts~gewichte erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03AC\u03C1\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2!"
,12:"M\xE9g nem r\xF6gz\xEDtettek sz\xFClet\xE9si s\xFAlyokat!",16:"Ingen f\xF8dselsvekter registrert enn\xE5!"
,20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 "+
"\u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D!"
,21:"A\xFAn no se han registrado pesos al nacer",23:"Hen\xFCz do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131 kaydedilmedi!"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430!"
};C.A8k={1:"Nema registrovanih teladi!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u043D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0442\u0435\u043B\u0435\u0442\u0430!",4:"\u017D\xE1dn\xE1 telata zat\xEDm nezaregistrov\xE1na!"
,5:"Ingen kalve registreret endnu!",0:"No calves unregistered yet!",6:"Geen ongeregistreerde kalveren"
,7:"Registreerimata vasikad puuduvad!",8:"Ei vasikoita, joita ei ole rekister\xF6ity!"
,9:"Aucun animal n\u2019a encore \xE9t\xE9 d\xE9senregistr\xE9\xA0!",10:"Noch keine K\xE4lber abgemeldet!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03BC\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9 "+
"\u03B4\u03B5\u03BD \u03B4\u03B9\u03B5\u03B3\u03C1\u03AC\u03C6\u03B7 \u03B1\u03BA\u03CC\u03BC\u03B1!"
,12:"M\xE9g nincs bejegyzett borj\xFA!",16:"Fortsatt inger kalver uregistrert",20:
"\u041D\u0438 \u043E\u0434\u0438\u043D \u0442\u0435\u043B\u0451\u043D\u043E\u043A "+
"\u0435\u0449\u0451 \u043D\u0435 \u0441\u043D\u044F\u0442 \u0441 \u0443\u0447\u0451\u0442\u0430!"
,21:"A\xFAn no se han registrado terneros",23:"Hen\xFCz kay\u0131t alt\u0131na al\u0131nmam\u0131\u015F buza\u011F\u0131 "+
"yok!",24:"\u0429\u0435 \u0436\u043E\u0434\u043D\u0435 \u0442\u0435\u043B\u044F \u043D\u0435 "+
"\u0437\u043D\u044F\u0442\u043E \u0437 \u043E\u0431\u043B\u0456\u043A\u0443!"};C.
A8l={1:"Bez promjene",2:"\u0411\u0435\u0437 \u043F\u0440\u043E\u043C\u044F\u043D\u0430"
,4:"\u017D\xE1dn\xE1 zm\u011Bna",5:"Ingen \xE6ndring",0:"No change",6:"Geen verandering"
,7:"Ei muudatusi",8:"Ei muutosta",9:"Aucun changement",10:"Keine \xC4nderung",11:
"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE",12:"Nincs v\xE1ltoz\xE1s"
,16:"Ingen endring",20:"\u0411\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439"
,21:"Sin cambios",23:"De\u011Fi\u015Fiklik yokHYD",24:"\u0411\u0435\u0437 \u0437\u043C\u0456\u043D"
};C.BkK={1:"Nema krava na spisku!",2:"\u041D\u044F\u043C\u0430 \u043A\u0440\u0430\u0432\u0430 (\u0438) \u0432 "+
"\u0441\u043F\u0438\u0441\u044A\u043A\u0430",4:"\u017D\xE1dn\xE1 kr\xE1va (kr\xE1vy) na seznamu!"
,5:"Ingen ko(er) p\xE5 listen!",0:"No cow(s) on list!",6:"geen koeien op de lijst"
,7:"\xDChtegi lehma nimekirjas pole!",8:"Ei lehmi\xE4 listalla!",9:"Aucune vache sur la liste\xA0!"
,10:"Kein(e) K\xFCh(e) auf der Liste!",11:"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1 "+
"\u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!",12:"Nincs teh\xE9n a list\xE1n!"
,16:"Ingen ku(er) p\xE5 listen!",20:"\u041D\u0435\u0442 \u043A\u043E\u0440\u043E\u0432 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435!"
,21:"\xA1Ninguna vaca en la lista!",23:"Listede inek yok!",24:"\u041D\u0435\u043C\u0430\u0454 \u043A\u043E\u0440\u0456\u0432 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443!"
};C.ASg={1:"Na spisku nema zasu\u0161enih krava!",2:"\u041D\u044F\u043C\u0430 \u0441\u0443\u0445\u043E\u0441\u0442\u0439\u043E\u043D\u0430 "+
"(\u0438) \u043A\u0440\u0430\u0432\u0430 (\u0438) \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!"
,4:"\u017D\xE1dn\xE9 such\xE9 kr\xE1vy na seznamu!",5:"Ingen t\xF8rre k\xF8er p\xE5 listen!"
,0:"No dry cow(s) on list!",6:"Geen droge koeien op de lijst",7:"Kinnislehmade nimekiri puudub!"
,8:"Ei umpeutettuja lehmi\xE4 luettelossa!",9:"Aucune vache tarie sur la liste\xA0!"
,10:"Kein(e) trocken~stehende(n) K\xFCh(e) auf der Liste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C3\u03C4\u03B5\u03AF\u03C1\u03B5\u03C2 "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!"
,12:"Nincsenek sz\xE1raz tehenek a list\xE1n!",16:"Ingen gjeldkyr p\xE5 listen",
20:"\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435\u0442 \u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432!",21:"\xA1Ninguna vaca seca en la lista!",23:"Listede s\xFCtten kesilmi\u015F inek yok!"
,24:"\u0423 \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 "+
"\u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0438\u0445 \u043A\u043E\u0440\u0456\u0432!"
};C.A8m={1:"Nema novih krava na spisku!",2:"\u041D\u044F\u043C\u0430 \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u0435\u043B\u0435\u043D\u0430/\u0438 "+
"\u043A\u0440\u0430\u0432\u0430/\u0438 \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!"
,4:"\u017D\xE1dn\xE9 \u010Derstv\xE9 kr\xE1vy na seznamu!",5:"Ingen friske k\xF8er p\xE5 listen!"
,0:"No fresh cow(s) on list!",6:"Geen Verse koeien op de lijst",7:"V\xE4rskelt poeginud lehmad puuduvad"
,8:"Ei tunnutettavia el\xE4imi\xE4 listalla",9:"Pas de vache(s) fra\xEEche(s) sur la liste\xA0!"
,10:"Kein(e) frischmelkende(n) K\xFCh(e) auf der Liste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C6\u03C1\u03AD\u03C3\u03BA\u03B5\u03C2 "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!"
,12:"Nincs friss teh\xE9n a list\xE1n!",16:"Ingen friske kyr p\xE5 listen",20:"\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435\u0442 \u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432!",21:"\xA1Ninguna vaca fresca en la lista!",23:"Listede yeni do\u011Fum yapm\u0131\u015F inek yok!"
,24:"\u0423 \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 "+
"\u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0438\u0445 \u043A\u043E\u0440\u0456\u0432!"
};C.BkM={1:"Nema zabilje\u017Eenih ocjena u prikazanom vremenskom periodu!",2:"\u041D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438 \u0437\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043E\u0442 \u0434\u0430\u0442\u0430!",4:
"V zobrazen\xE9m obdob\xED nebyla zaznamen\xE1na \u017E\xE1dn\xE1 hodnocen\xED!"
,5:"Ingen vurderinger registreret i den viste periode!",0:"No ratings recorded in the displayed date period!"
,6:"Geen waardes opgenomen in de voorgestelde periode",7:"Kuvatud kuup\xE4evavahemikus hinnanguid ei registreeritud!"
,8:"N\xE4ytetyll\xE4 p\xE4iv\xE4m\xE4\xE4r\xE4jaksolla ei ole tallennettuja "+"arvioita!"
,9:"Aucune \xE9valuation n\'a \xE9t\xE9 enregistr\xE9 pendant la p\xE9riode "+"affich\xE9e sur l\'\xE9cran\xA0!"
,10:"Im dargestellten Zeitraum wurden keine Bewertungen erfasst!",11:"\u0394\u03B5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2 \u03C3\u03C4\u03B7\u03BD "+
"\u03B5\u03BC\u03C6\u03B1\u03BD\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03B7 "+"\u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03B9\u03CE\u03BD!"
,12:"Nincs r\xF6gz\xEDtett \xE9rt\xE9kel\xE9s a megjelen\xEDtett id\u0151szakban!"
,16:"Ingen vurderinger registrert i den viste datoperioden!",20:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0438\u043A\u0430\u043A\u0438\u0445 "+
"\u043E\u0446\u0435\u043D\u043E\u043A!",21:"No evaluaciones registradas en el per\xEDodo de fechas mostrado"
,23:"G\xF6r\xFCnt\xFClenen tarih d\xF6neminde kay\u0131tl\u0131 derecelendirme "+
"yok!",24:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0456\u044F\u043A\u0438\u0445 "+
"\u043E\u0446\u0456\u043D\u043E\u043A!"};C.Ano={1:"Nema une\u0161enih ocjena!",2:
"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438!",3:"\u5C1A\u7121\u8A55\u5206\u8A18\u9304\uFF01"
,4:"Zat\xEDm \u017E\xE1dn\xE9 hodnocen\xED",5:"Ingen bed\xF8mmelser registreret endnu!"
,0:"No ratings recorded yet!",6:"Nog geen beoordeling verwerkt!",7:"Taset pole veel salvestatud"
,8:"Arvioita ei ole viel\xE4 tallennettu!",9:"Pas encore de classement enregistr\xE9\xA0!"
,10:"Noch keine Be~wertungen erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2!"
,12:"M\xE9g nincsenek \xE9rt\xE9kel\xE9sek!",16:"Forel\xF8pig ingen vurderinger registrer!"
,20:"\u041E\u0446\u0435\u043D\u043E\u043A \u0435\u0449\u0435 \u043D\u0435\u0442!"
,21:"\xA1A\xFAn no se han registrado evaluaciones!",23:"Hen\xFCz herhangi bir derecelendirme kaydedilmedi!"
,24:"\u041E\u0446\u0456\u043D\u043E\u043A \u0449\u0435 \u043D\u0435\u043C\u0430\u0454!"
};C.A8o={1:"Nema novi \u017Eivotinja za registraciju!",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A, "+
"\u043D\u044F\u043C\u0430 \u0447\u0430\u043A\u0430\u0449\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438!"
,4:"Pr\xE1zdn\xFD seznam, \u017E\xE1dn\xE9 \u010Dekaj\xEDc\xED registrace!",5:"Tom liste, ingen ventende registreringer!"
,0:"Empty list, no registrations pending!",6:"Lege lijst. Geen verwacht aanmeldingen"
,7:"Nimekiri on t\xFChi, \xFChtki registreerimist pole ootel!",8:"Lista tyhj\xE4, rekister\xF6inti\xE4 ei ole odotettavissa!"
,9:"Aucun nouvel enregistrement d\'animaux\xA0!",10:"Keine neu an~zumeldenden Tiere erfasst!"
,11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1, \u03B4\u03B5\u03BD "+
"\u03B5\u03BA\u03BA\u03C1\u03B5\u03BC\u03BF\u03CD\u03BD \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2!"
,12:"\xDCres lista, nincsenek f\xFCgg\u0151ben l\xE9v\u0151 regisztr\xE1ci\xF3k!"
,16:"Tom liste, ingen registreringer venter!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0445, \u043E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0445 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E, \u043D\u0435\u0442!"
,21:"Lista vac\xEDa, \xA1no hay registros pendientes!",23:"Bo\u015F liste, bekleyen kay\u0131t yok!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D, \u043E\u0447\u0456\u043A\u0443\u044E\u0447\u0438\u0445 "+
"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E, \u043D\u0435\u043C\u0430\u0454!"
};C.ASl={1:"Nema rezultata pretra\u017Eivanja prema zadatim brojevima.",2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442 "+
"\u043E\u0442 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E:\n\u043D\u0435 "+
"\u0441\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0437\u0430 \u043D\u043E\u043C\u0435\u0440/\u0430, "+
"\u0434\u0430\u0434\u0435\u043D\u0438 \u043F\u043E-\u0433\u043E\u0440\u0435!",4:
"\u017D\xE1dn\xFD v\xFDsledek hled\xE1n\xED:\nnebyla nalezena \u017E\xE1dn\xE1 "+
"odpov\xEDdaj\xEDc\xED zv\xED\u0159ata pro zadan\xE1 \u010D\xEDsla!",5:"Ingen s\xF8geresultat:\ningen matchende dyr fundet for de(n) angivne cifre "+
"ovenfor!",0:"No search result:\nno matching animals found for digit(s) given above!"
,6:"Geen zoekresultaat: Geen dieren gevonden die matchen met bovenstaande",7:"Otsingule puuduvad tulemused:\nP\xE4ringule vastavaid loomi ei leitud!"
,8:"Ei hakutuloksia:\nEi vastaavia el\xE4imi\xE4 l\xF6ydetty edell\xE4 annetuista "+
"numeroista!",9:"Aucun r\xE9sultat de recherche\xA0:\naucun animal correspondant au(x) chiffre(s) "+
"indiqu\xE9(s) ci-dessus\xA0!",10:"Kein Suchergebnis:\nkeine passenden Tiere f\xFCr obige Ziffernfolge gefunden!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1 "+
"\u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7\u03C2:\n\u0394\u03B5\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B6\u03CE\u03B1 \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03BF\u03C5\u03BD "+"\u03BC\u03B5 \u03C4\u03B1 \u03C8\u03B7\u03C6\u03AF\u03B1 \u03C0\u03BF\u03C5 "+
"\u03B4\u03AF\u03BD\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9!"
,12:"Nincs tal\xE1lat:\nnem tal\xE1lhat\xF3 egyez\u0151 \xE1llat az adott sz\xE1mjegy(ek)re!"
,16:"Ingen s\xF8keresultat:\ningen sam~svarende dyr funnet for siffer gitt "+"ovenfor!"
,20:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E\u0438\u0441\u043A\u0430 "+
"\u043D\u0435\u0442:\n\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 "+
"\u043E\u0447\u0435\u0440\u0451\u0434\u043D\u043E\u0441\u0442\u0438 \u0446\u0438\u0444\u0440, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!",21:"Sin resultados de b\xFAsqueda:\nno se encontraron animales coincidentes "+
"para el(los) d\xEDgito(s) proporcionado(s) arriba",23:"Arama sonucu yok:\nyukar\u0131da verilen rakam(lar) i\xE7in e\u015Fle\u015Fen "+
"hayvan bulunamad\u0131!",24:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043F\u043E\u0448\u0443\u043A\u0443 "+
"\u043D\u0435\u043C\u0430\u0454:\n\u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0457 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u043E\u0441\u0442\u0456 "+
"\u0446\u0438\u0444\u0440, \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"
};C.BkN={1:"Nema zabilje\u017Eenih temperatura i ocjena u prikazanom periodu na grafiku!"
,2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0438 "+"\u043E\u0446\u0435\u043D\u043A\u0438 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0430, "+
"\u043F\u043E\u043A\u0430\u0437\u0430\u043D \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430\u0442\u0430!"
,4:"V obdob\xED zobrazen\xE9m na grafu nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 "+
"teploty ani hodnocen\xED!",5:"Ingen temperaturer og ingen vurderinger registreret i perioden vist p\xE5 "+
"grafikken!",0:"No temperatures and no ratings recorded in the period shown in the graphic!"
,6:"Geen temperatuur en waardes te zien in deze periode op het figuur",7:"Perioodil, mida graafik n\xE4itab, ei registreeritud temperatuure ega hinnanguid!"
,8:"Ei l\xE4mp\xF6tiloja eik\xE4 arvoja tallennettuna kuvassa n\xE4kyv\xE4ll\xE4 "+
"ajanjaksolla!",9:"Aucune temp\xE9rature et aucune \xE9valuation n\'ont \xE9t\xE9 enregistr\xE9es "+
"pendant la p\xE9riode pr\xE9sent\xE9e dans le graphique\xA0!",10:"Im Darstellungszeitraum der Grafik wurden keine Temperaturen und keine "+
"Bewertungen erfasst!",11:"\u0394\u03B5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2 "+"\u03BA\u03B1\u03B9 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2 "+
"\u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF \u03C0\u03BF\u03C5 "+
"\u03C6\u03B1\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF \u03B3\u03C1\u03AC\u03C6\u03B7\u03BC\u03B1!"
,12:"A grafikonon megjelen\xEDtett id\u0151szakban nincsenek r\xF6gz\xEDtett "+"h\u0151m\xE9rs\xE9kleti \xE9s \xE9rt\xE9kel\xE9si adatok!"
,16:"Ingen temperaturer og ingen vurderinger registrert i perioden vist i grafikken!"
,20:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 "+
"\u0438 \u043E\u0446\u0435\u043D\u043E\u043A!",21:"A\xFAn no asignado",23:"Grafikte g\xF6sterilen d\xF6nemde herhangi bir s\u0131cakl\u0131k veya "+
"derecelendirme kaydedilmedi!",24:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0456\u044F\u043A\u0438\u0445 "+
"\u043E\u0446\u0456\u043D\u043E\u043A \u0442\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
};C.BkO={1:"Nema sa\u010Duvanih vrijednosti temperature!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 "+
"\u0438 \u043E\u0446\u0435\u043D\u043A\u0430!",3:"\u5C1A\u672A\u6709\u6EAB\u5EA6\u548C\u8A55\u5206\u8A18\u9304\uFF01"
,4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 teploty a \u017E\xE1dn\xE1 "+"hodnocen\xED"
,5:"Ingen temperaturer og ingen bed\xF8mmelser registreret endnu!",0:"No temperatures and no ratings recorded yet!"
,6:"Nog geen temperatuur en waardes opgenomen",7:"Puudub temp. ja taseme kanne",
8:"Ei l\xE4mp\xF6tiloja eik\xE4 luokituksia viel\xE4 tallennettu!",9:"Pas de temp\xE9ratures et pas d\u2019\xE9valuations encore enregistr\xE9es\xA0!"
,10:"Keine Temperaturen und keine Bewertungen erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2 "+
"\u03BA\u03B1\u03B9 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2!"
,12:"M\xE9g nincsenek r\xF6gz\xEDtve h\u0151m\xE9rs\xE9kletek \xE9s \xE9rt\xE9kel\xE9sek!"
,16:"Ingen temperaturer og ingen vurderinger registrert enn\xE5!",20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u044B!"
,21:"\xA1A\xFAn no se han registrado temperaturas o evaluaciones!",23:"Hen\xFCz s\u0131cakl\u0131k ve derecelendirme kaydedilmedi!"
,24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0456 "+
"\u043E\u0446\u0456\u043D\u043A\u0438 \u043D\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456!"
};C.A8p={1:"Nema zabilje\u017Eenih temperatura u prikazanom periodu na grafiku!"
,2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0437\u0430 "+
"\u043F\u0435\u0440\u0438\u043E\u0434\u0430, \u043F\u043E\u043A\u0430\u0437\u0430\u043D "+
"\u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430\u0442\u0430!",4:"V obdob\xED zobrazen\xE9m na grafu nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 "+
"teploty!",5:"Ingen temperaturer registreret i den viste periode p\xE5 grafikken!"
,0:"No temperatures recorded in the period shown in the graphic!",6:"Nog geen temperatuur en waardes opgenomen in de geselecteerde periode"
,7:"Graafikus n\xE4idatud perioodil temperatuure ei registreeritud!",8:"Kuvassa n\xE4kyv\xE4ll\xE4 ajanjaksolla ei ole tallennettu l\xE4mp\xF6tiloja!"
,9:"Aucune temp\xE9rature n\'a \xE9t\xE9 enregistr\xE9es pendant la p\xE9riode "+
"pr\xE9sent\xE9e dans le graphique\xA0!",10:"Im Darstellungszeitraum der Grafik wurden keine Temperaturen erfasst!"
,11:"\u0394\u03B5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2 "+"\u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF \u03C0\u03BF\u03C5 "+
"\u03C6\u03B1\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF \u03B3\u03C1\u03AC\u03C6\u03B7\u03BC\u03B1!"
,12:"A grafikonon bemutatott id\u0151szakban nem r\xF6gz\xEDtettek h\u0151m\xE9rs\xE9kleteket!"
,16:"Ingen temperaturer registrert i perioden som vises i grafikken!",20:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
,21:"No se han registrado temperaturas en el per\xEDodo mostrado en el gr\xE1fico."
,23:"Grafikte g\xF6sterilen d\xF6nemde herhangi bir s\u0131cakl\u0131k kaydedilmedi!"
,24:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
};C.Arv={1:"Jo\u0161 nisu sa\u010Duvane vrijednosti temperature!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430!"
,3:"\u5C1A\u672A\u6709\u6EAB\u5EA6\u8A18\u9304\uFF01",4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 teploty!"
,5:"Ingen temperaturer registreret endnu!",0:"No temperatures recorded yet!",6:"Nog geen temperaturen verwerkt!"
,7:"Temp. kanne puudub",8:"L\xE4mp\xF6tiloja ei ole viel\xE4 kirjattu!",9:"Aucune temp\xE9rature n\u2019a encore \xE9t\xE9 enregistr\xE9e\xA0!"
,10:"Noch keine Temperaturen erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2!"
,12:"M\xE9g nincsenek r\xF6gz\xEDtett h\u0151m\xE9rs\xE9kletek!",16:"Forel\xF8pig ingen temperaturer registrert!"
,20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0435 "+
"\u0438\u043C\u0435\u0440\u044F\u043D\u044B!",21:"\xA1A\xFAn no se han registrado temperaturas!"
,23:"Hen\xFCz s\u0131cakl\u0131k kaydedilmedi!",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u043D\u0435 "+
"\u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0456!"};C.ASm={1:"Nema dodijeljenih transpondera!"
,2:"\u041D\u044F\u043C\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,4:"\u017D\xE1dn\xFD transpond\xE9r nebyl p\u0159i\u0159azen",5:"Ingen transponder tildelt"
,0:"No transponder assigned",6:"Geen transponder toegewezen",7:"Vastuv\xF5tja pole m\xE4\xE4ratud"
,8:"Ei Transponderia",9:"Aucun trans~pon~deur attri~bu\xE9",10:"Kein Trans~ponder zu~gewiesen"
,11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2",12:"Nincs transzponder hozz\xE1rendelve"
,16:"Ingen transponder tildelt",20:"\u0422\u0440\u0430\u043D\u0441~\u043F\u043E\u043D~\u0434\u0435\u0440\u044B "+
"\u043D\u0435 \u043D\u0430~\u0437\u043D\u0430~\u0447\u0435\u043D\u044B",21:"Ning\xFAn transpondedor asignado."
,23:"Aktar\u0131c\u0131 atanmad\u0131",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438 "+
"\u043D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0456!"};C.Akm={1:
"Nema sa\u010Duvanih podataka o te\u017Eini!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u0433\u043B\u043E!",3:"\u5C1A\u672A\u6709\u9AD4\u91CD\u8A18\u9304\uFF01"
,4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 v\xE1hy",5:"Ingen v\xE6gt registreret endnu!"
,0:"No weights recorded yet!",6:"Nog geen gewichten verwerkt!",7:"Kaalu andmed puuduvud"
,8:"Ei viel\xE4 painoja kirjattu!",9:"Aucun poids n\u2019a encore \xE9t\xE9 enregistr\xE9\xA0!"
,10:"Noch keine Gewichte erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03AC\u03C1\u03B7!",12:"M\xE9g nincsenek r\xF6gz\xEDtett s\xFAlyok!"
,16:"Forel\xF8pig ingen vekter registrert!",20:"\u0412\u0435\u0441\u0430 \u043D\u0435\u0438\u0437\u043C\u0435\u0440\u044F\u043D\u044B!"
,21:"\xA1A\xFAn no se han registrado pesos!",23:"Hen\xFCz a\u011F\u0131rl\u0131k kaydedilmedi!"
,24:"\u0412\u0430\u0433\u0430 \u0449\u0435 \u043D\u0435 \u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0430!"
};C.A8q={1:"Danas nisu sa\u010Duvani podaci o te\u017Eini!",2:"\u0414\u043D\u0435\u0441 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u0442\u0435\u0433\u043B\u0430!",4:"Dnes nebyla zaznamen\xE1na \u017E\xE1dn\xE1 v\xE1ha!"
,5:"Ingen v\xE6gt registreret i dag!",0:"No weights recorded today!",6:"Geen gewichten geregistreerd vandaag"
,7:"T\xE4na salvestatud kaalud puuduvad!",8:"T\xE4n\xE4\xE4n ei kirjattu painoja!"
,9:"Aucun poids n\'a \xE9t\xE9 enregistr\xE9 aujourd\'hui\xA0!",10:"Heute wurden keine\nGewichte erfasst!"
,11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B2\u03AC\u03C1\u03B7 \u03C3\u03AE\u03BC\u03B5\u03C1\u03B1!",12:"Ma nem volt s\xFAlym\xE9r\xE9s!"
,16:"Ingen vekter registrert i dag!",20:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F "+
"\u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043B\u0438\u0441\u044C!"
,21:"No se han registrado pesos hoy.",23:"Bug\xFCn a\u011F\u0131rl\u0131k kaydedilmedi!"
,24:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043D\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043B\u043E\u0441\u044C!"
};C.AEv={1:"Prazna lista,\nsvim novim \u017Eivotinjama dodijeljeni su transponderi!"
,2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u043D\u0430 "+
"\u0432\u0441\u0438\u0447\u043A\u0438 \u043D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0434\u0430 \u0441\u0435 \u0432\u044A\u0432\u0435\u0434\u0430\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438"
,4:"Pr\xE1zdn\xFD seznam,\nv\u0161echna nov\xE1 zv\xED\u0159ata maj\xED p\u0159i\u0159azen\xE9 "+
"transpond\xE9ry!",5:"Tom liste,\nalle nye dyr har f\xE5et tildelt transpondere!"
,0:"Empty list,\nall new animals do have transponders assigned!",6:"Lege lijst,\nAlle nieuwe dieren hebben al transponders"
,7:"T\xFChi nimekiri,\nk\xF5ik uued loomad on varustatud saatjatega!",8:"Lista tyhj\xE4, kaikille \xE4skett\xE4in vastaanotetuille el\xE4imille "+
"on m\xE4\xE4ritetty transponderit!",9:"Liste vide,\nnous avons assign\xE9 des transpondeurs \xE0 tous les animaux "+
"nouvellement arriv\xE9s\xA0!",10:"Liste leer,\nallen neu zugegangenen Tieren wurden Transponder zugewiesen!"
,11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03BD\u03AD\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD "+
"\u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03C5\u03C2 \u03B1\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AD\u03C2!"
,12:"\xDCres lista,\naz \xF6sszes \xFAj \xE1llatnak van rendelve transzponder!",
16:"Tom liste,\nalle nye dyr har f\xE5tt tildelt transpondere!",20:"\u041F\u0443\u0441\u0442\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A,\n\u0432\u0441\u0435 "+
"\u043D\u043E\u0432\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 "+
"\u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u043D\u044B\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B!",21:"Lista vac\xEDa,\ntodos los nuevos animales tienen asignados transpondedores."
,23:"Bo\u015F liste,\nt\xFCm yeni hayvanlara atanm\u0131\u015F aktar\u0131c\u0131lar "+
"var!",24:"\u041F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0441\u043F\u0438\u0441\u043E\u043A,\n\u0432\u0441\u0456 "+
"\u043D\u043E\u0432\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043C\u0430\u044E\u0442\u044C "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"
};C.None={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u7121",4:"\u017D\xE1dn\xFD",
5:"ingen",0:"none",6:"geen",7:"pole",8:"Ei yht\xE4\xE4n",9:"aucun",10:"keiner",11:
"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1",12:"egyik sem",16:"ingen",20:"\u041D\u0435\u0442"
,21:"Ninguno",23:"Hi\xE7biri",24:"\u043D\u0435\u043C\u0430\u0454"};C.ASq={1:"nema"
,2:"\u043D\u044F\u043C\u0430",3:"\u6C92\u6709",4:"\u017D\xE1dn\xFD",5:"ingen",0:
"none",6:"geen",7:"pole",8:"ei yht\xE4\xE4n",9:"aucun",10:"keine",11:"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1"
,12:"egyik sem",16:"ingen",20:"\u041D\u0435\u0442",21:"-",23:"Hi\xE7biri",24:"\u043D\u0435\u043C\u0430\u0454"
};C.BkP={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u6C92\u6709",4:"\u017D\xE1dn\xFD"
,5:"Ingen",0:"None",6:"geen",7:"pole",8:"Ei yht\xE4\xE4n",9:"aucun",10:"Keine",11:
"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1",12:"Semmi",16:"ingen",20:"\u041D\u0435\u0442"
,21:"Ninguno(s)",23:"Hi\xE7biri",24:"\u041D\u0435\u043C\u0430\u0454"};C.Normal={
1:"normalno",2:"\u041D\u043E\u0440\u043C\u0430\u043B\u043D\u043E",3:"\u6B63\u5E38"
,4:"Norm\xE1ln\xED",0:"Normal",6:"Normaal",7:"Normaalne",8:"Normaali",9:"Normale"
,11:"\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03CC",12:"Norm\xE1lis",20:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E"
,24:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E"};C.Akn={1:"Nisu dodjeljene"
,2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043D\u0438"
,4:"Je\u0161t\u011B nep\u0159id\u011Bleno",5:"Endnu ikke tildelt",0:"Not assigned yet"
,6:"Nog niet toegewezen",7:"Pole veel m\xE4\xE4ratud",8:"Ei viel\xE4 m\xE4\xE4ritetty"
,9:"Pas encore attribu\xE9",10:"Nicht zugewiesen",11:"\u0394\u03B5\u03BD \u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B1\u03BA\u03CC\u03BC\u03B1",12:"M\xE9g nincs kijel\xF6lve",16:"Ikke tildelt enda"
,20:"\u041D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E",21:"no se encontraron animales coincidentes para el/los d\xEDgito(s) proporcionado(s) "+
"arriba",23:"Hen\xFCz atanmad\u0131",24:"\u041D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E"
};C.A8s={1:"Broj novih \u017Eivotinja",2:"\u041D\u043E\u043C\u0435\u0440, \u043A\u043E\u0439\u0442\u043E \u0449\u0435 "+
"\u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D",3:"\u8981\u5EFA\u7ACB\u7684\u6578\u91CF"
,4:"\u010C\xEDslo nov\xE9ho zv\xED\u0159ete",5:"Nummer der skal oprettes",0:"Number to be created"
,6:"Aantal nieuwe dieren",7:"Loodavate loomade arv",8:"Luotava numero",9:"Nombre d\u2019animaux neufs"
,10:"Anzahl neuer Tiere",11:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C0\u03C1\u03CC\u03C2 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03B1"
,12:"Sz\xE1m, amit l\xE9tre kell hozni",16:"Nummer som skal opprettes",20:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u043E\u0432\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",21:"N\xFAmero de animales nuevos"
,23:"Olu\u015Fturulacak numara",24:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u043E\u0432\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D"};C.AEz={1:"od",2:"\u043E\u0442",4:"z",5:"af"
,0:"of",6:"van",7:"millestki",8:"/",9:"de",10:"von",11:"\u03C4\u03BF\u03C5",12:"/"
,16:"Av",20:"\u043E\u0442",21:"de",23:"ile ilgili",24:"\u0432\u0456\u0434"};C.Off={
1:"Isklju\u010Deno",2:"\u0418\u0437\u043A\u043B.",3:"\u95DC\u9589",4:"Vypnuto",5:
"Fra",0:"Off",6:"Uit",7:"V\xE4ljas",8:"Pois p\xE4\xE4lt\xE4",9:"\xC9teint",10:"Aus"
,11:"\u03A3\u03B2\u03B7\u03C3\u03C4\u03CC",12:"Ki",16:"Av",20:"\u0412\u044B\u043A\u043B."
,21:"apagada",23:"Kapat",24:"\u0412\u0438\u043C\u043A."};C.Zm={1:"isklju\u010Di desno"
,2:"\u0418\u0437\u043C\u0435\u0441\u0442\u0432\u0430\u043D\u0435 \u0432 \u0434\u044F\u0441\u043D\u043E"
,3:"\u504F\u79FB\u91CF",4:"Okam\u017Eit\xE9 nastaven\xED",5:"H\xF8jre offset",0:
"Right offset",6:"Offset rechts",7:"\xD5ige seade",8:"Oikea siirtym\xE4",9:"Offset droit"
,10:"Offset rechts",11:"\u0394\u03B5\u03BE\u03B9\u03AC \u03BC\u03B5\u03C4\u03B1\u03C4\u03CC\u03C0\u03B9\u03C3\u03B7"
,12:"Jobb eltol\xE1s",16:"H\xF8yre offset",20:"\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0432\u043F\u0440\u0430\u0432\u043E"
,21:"Compensaci\xF3n derecha",23:"Sa\u011F ofset",24:"\u0417\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u043F\u0440\u0430\u0432\u043E"
};C.Ok={3:"\u597D\u7684",0:"OK",7:"Jah",11:"\u0395\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9"
,20:"\u041E\u041A",24:"\u041E\u041A"};C.BkT={1:"Stariji od {1} dana",2:"\u041F\u043E-\u0441\u0442\u0430\u0440\u0438 \u043E\u0442 {1} \u0434\u043D\u0438"
,4:"Star\u0161\xED ne\u017E {1} dn\xED",5:"\xC6ldre end {1} dage",0:"Older than {1} days"
,6:"ouder dan {1} dagen",7:"Vanem kui {1} p\xE4eva",8:"Yli {1} p\xE4iv\xE4\xE4 vanhempi"
,9:"Plus \xE2g\xE9 que {1} jours",10:"\xC4lter als {1} Tage",11:"\u03A0\u03B1\u03BB\u03B1\u03B9\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC "+
"{1} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",12:"{1} napn\xE1l r\xE9gebbi",16:"Eldre enn {1} dager"
,20:"\u0421\u0442\u0430\u0440\u0448\u0435 {1} \u0434\u043D\u0435\u0439",21:"Mayor de {1} d\xEDas"
,24:"\u0421\u0442\u0430\u0440\u0448\u0435 \u043D\u0456\u0436 {1} \u0434\u043D\u0456\u0432"
};C.A8t={1:"Uklju\u010Deno",2:"\u0412\u043A\u043B.",3:"\u958B\u555F",4:"Zapnuto"
,5:"P\xE5",0:"On",6:"Aan",7:"Sees",8:"P\xE4\xE4ll\xE4",9:"Allum\xE9",10:"An",11:
"\u0391\u03BD\u03BF\u03B9\u03BA\u03C4\u03CC",12:"Be",16:"P\xE5",20:"\u0412\u043A\u043B."
,21:"encendida",23:"A\xE7\u0131k",24:"\u0423\u0432\u0456\u043C\u043A."};C.Asf={1:
"Na stra\u017Ei",2:"\u041F\u043E\u0434 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"
,4:"Na hl\xEDdce",5:"P\xE5 vagt",0:"On watch",6:"Bekijken",7:"Valvel",9:"Observation"
,10:"Beobachtung",11:"\u03A3\u03B5 \u03C6\u03C1\u03BF\u03C5\u03C1\u03AC",12:"\u0150rs\xE9gben"
,16:"P\xE5 vakt",20:"\u041D\u0430 \u0441\u0442\u0440\u0430\u0436\u0435",21:"En seguimiento"
,23:"\u0130zlemede",24:"\u041D\u0430 \u0432\u0430\u0440\u0442\u0456"};C.Bos={1:"Jedan interval za brojeve za \u2642 i \u2640"
,2:"\u0415\u0434\u0438\u043D \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u0437\u0430 \u2642 \u0438 \u2640",4:"Jeden jednotn\xFD rozsah pro ob\u011B pohlav\xED \u2642 a \u2640"
,5:"\xC9n enkelt st\xF8rrelse for b\xE5de \u2642 og \u2640",0:"One single range for both \u2642 and \u2640"
,6:"One single range voor beide \u2642 en \u2640",7:"\xDCks vahemik nii \u2642 kui \u2640 jaoks"
,8:"Yksi alue sek\xE4 \u2642 ett\xE4 \u2640",9:"Une seule gamme pour \u2642 et \u2640"
,10:"Ein einziger Nr.- Bereich f\xFCr \u2642 und \u2640",11:"\u0388\u03BD\u03B1 \u03BC\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF "+
"\u03B5\u03CD\u03C1\u03BF\u03C2 \u03C4\u03CC\u03C3\u03BF \u03B3\u03B9\u03B1 "+"\u2642 \u03CC\u03C3\u03BF \u03BA\u03B1\u03B9 \u03B3\u03B9\u03B1 \u2640"
,12:"Egyetlen tartom\xE1ny mindk\xE9t nem sz\xE1m\xE1ra",16:"Et enkelt omr\xE5de for b\xE5de \u2642 og \u2640"
,20:"\u041E\u0434\u0438\u043D \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u2642 \u0438 "+"\u2640"
,21:"Un solo rango para ambos \u2642 y \u2640",23:"Hem \u2642 hem de \u2640 i\xE7in tek aral\u0131k"
,24:"\u041E\u0434\u0438\u043D \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u043D\u043E\u043C\u0435\u0440\u0456\u0432 \u0434\u043B\u044F \u2642 \u0442\u0430 "+
"\u2640"};C.Options={1:"Opcije",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0438"
,4:"Mo\u017Enosti",5:"Muligheder",0:"Options",6:"Opties",7:"Valikud",10:"Optionen"
,11:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AD\u03C2",12:"Lehet\u0151s\xE9gek",
16:"Alternativer",20:"\u041E\u043F\u0446\u0438\u0438",21:"Opciones",24:"\u041E\u043F\u0446\u0456\u0457"
};C.Bot={1:"druga oboljenja",2:"\u0414\u0440\u0443\u0433\u0438 \u0437\u0430\u0431\u043E\u043B\u044F\u0432\u0430\u043D\u0438\u044F"
,4:"Jin\xE9 nemoci",5:"Andre sygdomme",0:"Other illnesses",6:"Andere ziektes",7:
"Teised haigused",8:"Muut sairaudet",9:"Autres maladies",10:"Sonstige Krankheiten"
,11:"\u0386\u03BB\u03BB\u03B5\u03C2 \u03B1\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2"
,12:"M\xE1s betegs\xE9gek",16:"Andre sykdommer",20:"\u041F\u0440\u043E\u0447\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F"
,21:"Otras enfermedades",23:"Di\u011Fer hastal\u0131klar",24:"\u0406\u043D\u0448\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A$c={1:"drugi razlozi",2:"\u0414\u0440\u0443\u0433\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"
,4:"Dal\u0161\xED d\u016Fvody",5:"Andre grunde",0:"Other reasons",6:"Andere redenen"
,7:"Teised p\xF5hjused",8:"Muut syyt",9:"Autres raisons",10:"Sonstige Gr\xFCnde"
,11:"\u0386\u03BB\u03BB\u03B5\u03C2 \u03B1\u03B9\u03C4\u03AF\u03B5\u03C2",12:"Egy\xE9b okok"
,16:"Andre grunner",20:"\u0418\u043D\u044B\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B"
,21:"Otras razones",23:"Di\u011Fer sebepler",24:"\u0406\u043D\u0448\u0456 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"
};C.AGg={1:"Ukupno",2:"\u041E\u0431\u0449",3:"\u5408\u8A08",4:"Celkem",5:"Overordnet"
,0:"Overall",6:"Totaal",7:"\xDCldine",8:"Yleinen",9:"Total",10:"Gesamt",11:"\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AC"
,12:"\xC1tfog\xF3an",16:"Alt i alt",20:"\u0412\u0441\u0435\u0433\u043E",21:"Total"
,23:"Genelde",24:"\u0423\u0441\u044C\u043E\u0433\u043E"};C.A$g={1:"nisko",2:"\u0421\u043B\u0430\u0431\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044F\u043D\u0435"
,4:"\u0160patn\xFD v\xFDkon",5:"D\xE5rlig pr\xE6station",0:"Poor performance",6:
"Slechte prestaties",7:"Kehv tulemus",8:"Huono suorituskyky",9:"Mauvaise performance"
,10:"Geringe Leistung",11:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AE \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7"
,12:"Gyenge teljes\xEDtm\xE9ny",16:"D\xE5rlig ytelse",20:"\u041C\u0430\u043B\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C"
,21:"Bajo rendimiento",23:"Zay\u0131f performans",24:"\u041C\u0430\u043B\u0430 \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C"
};C.Pound={1:"funta",2:"\u041B\u0438\u0431\u0440\u0438",3:"\u78C5",4:"Libra",5:"Pund"
,0:"Pound",6:"Pond",7:"Nael",8:"pauna",9:"Livre",10:"Pfund",11:"\u039B\u03AF\u03B2\u03C1\u03B1"
,12:"Font",16:"Pund",20:"\u0424\u0443\u043D\u0442",21:"Libras",23:"Paund",24:"\u0424\u0443\u043D\u0442"
};C.BoB={2:"\u041B\u0438\u0431\u0440\u0438/\u0434\u0435\u043D",3:"\u78C5/\u65E5"
,4:"Libra/den",5:"pund pr. dag",0:"lbs/d",6:"ponden/dag",7:"Kg p\xE4evas",8:"lbs/pv"
,9:"lbs/jour",11:"\u039B\u03AF\u03B2\u03C1\u03B5\u03C2/\u03BC\u03AD\u03C1\u03B1"
,12:"font naponta",16:"Pund/dag",20:"lbs/\u0434\u0435\u043D\u044C",21:"lbs/d (libras por d\xEDa)"
,23:"G\xFCnl\xFCk paund",24:"lbs/\u0434\u0435\u043D\u044C"};C.PX={1:"o\u010Dekivano"
,2:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0430\u043D\u043E",3:
"\u9810\u6E2C",4:"P\u0159edpov\u011Bzen\xE1",5:"Forudsagt",0:"Predicted",6:"Verwachte"
,7:"Ennustatud",8:"Ennustettu",9:"Pr\xE9vue",10:"Erwartet",11:"\u03A0\u03C1\u03BF\u03B2\u03BB\u03AD\u03C6\u03B8\u03B7\u03BA\u03B5"
,12:"Megj\xF3solt",16:"Sp\xE5dd",20:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0443\u0435\u043C\u044B\u0439"
,21:"Pronosticado",23:"Tahmin edilen",24:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0443\u0454\u043C\u0438\u0439"
};C.AGl={1:"Broj objekta",2:"\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435-ID \u043D\u043E\u043C\u0435\u0440"
,4:"\u010C\xEDslo objektu",5:"Lokalitets-ID-nummer",0:"Premises-ID number",6:"Bedrijfsnummer"
,7:"Eelduste ID-number",8:"Maatilan numero",9:"N\xB0 d\'exploitation",10:"Betriebsnummer"
,11:"\u03A0\u03C1\u03BF\u03CB\u03C0\u03CC\u03B8\u03B5\u03C3\u03B5\u03B9\u03C2-\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"Helyrajzi sz\xE1m",16:"Lokale-ID-nummer",20:"\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F"
,21:"ID de predios",23:"Tesis kimlik numaras\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F-ID"
};C.BoC={1:"Prethodne dodatne radnje",2:"\u041F\u0440\u0435\u0434\u0438\u0448\u043D\u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",4:"P\u0159edchoz\xED dal\u0161\xED kroky"
,5:"Tidligere yderligere handlinger",0:"Previous additional actions",6:"Vorige toegevoegde acties"
,7:"Eelmised lisategevused",8:"Aiemmat lis\xE4toiminnot",9:"Actions suppl\xE9mentaires pr\xE9c\xE9dentes"
,10:"Vorherige Zusatzaktionen",11:"\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B5\u03C2 "+
"\u03C0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C4\u03B5\u03C2 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2"
,12:"Kor\xE1bbi tov\xE1bbi int\xE9zked\xE9sek",16:"Tidligere tilleggs handlinger"
,20:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",23:"\xD6nceki ek i\u015Flemler"
,24:"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 "+
"\u0434\u0456\u0457"};C.BoD={1:"Problemati\u010Dna prilikom mu\u017Enje",2:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 "+
"\u0434\u043E\u0435\u043D\u0435",4:"Probl\xE9mov\xE9 dojic\xED chov\xE1n\xED",5:
"Problematisk malkning adf\xE6rd",0:"Problematic milking behavior",6:"Problematisch drinkgedrag"
,7:"Probleemne l\xFCpsik\xE4itumine",8:"Ongelmallinen lypsyk\xE4ytt\xE4ytyminen"
,9:"Comportement probl\xE9matique lors de la traite",10:"Problematisches Melkverhalten"
,11:"\u03A0\u03C1\u03BF\u03B2\u03BB\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE "+
"\u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03C3\u03C4\u03BF "+
"\u03AC\u03C1\u03BC\u03B5\u03B3\u03BC\u03B1",12:"Probl\xE9m\xE1s fej\xE9si viselked\xE9s"
,16:"Problematisk melkeadferd",20:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 "+
"\u043F\u0440\u0438 \u0434\u043E\u0435\u043D\u0438\u0438",21:"Comportamiento problem\xE1tico durante el orde\xF1o"
,23:"Sorunlu sa\u011F\u0131m davran\u0131\u015F\u0131",24:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430 "+
"\u043F\u0440\u0438 \u0434\u043E\u0457\u043D\u043D\u0456"};C.BoE={1:"Problemati\u010Dno pona\u0161enje u stadu"
,2:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",4:"Problemati\u010Dn\xED soci\xE1ln\xED chov\xE1n\xED"
,5:"Problematisk social adf\xE6rd",0:"Problematic social behavior",6:"Problematisch sociaal gedrag"
,7:"Probleemne sotsiaalne k\xE4itumine",8:"Ongelmainen sosiaalinen k\xE4ytt\xE4ytyminen"
,9:"Comportement social probl\xE9matique",10:"Problematisches Sozialverhalten",11:
"\u03A0\u03C1\u03BF\u03B2\u03BB\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE "+"\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03B9\u03BA\u03AE \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC"
,12:"Probl\xE9m\xE1s t\xE1rsas\xE1gi magatart\xE1s",16:"Problematisk sosial adferd"
,20:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 "+
"\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",21:"Comportamiento social problem\xE1tico"
,23:"Sorunlu sosyal davran\u0131\u015F",24:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u0430 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430 "+
"\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430"};C.BoF={1:"Proizvedeno"
,2:"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E",4:"Vyprodukovan\xFD"
,5:"Produceret",0:"Produced",6:"Geproduceerd",7:"Toodetud",8:"Tuotettu",9:"Produit"
,10:"Produziert",11:"\u03A0\u03B1\u03C1\u03AC\u03C7\u03B8\u03B7\u03BA\u03B5",12:
"Termelt",16:"Produsert",20:"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E"
,21:"Producido",23:"\xDCretilmi\u015F",24:"\u0412\u0438\u0440\u043E\u0431\u043B\u0435\u043D\u043E"
};C.A$i={1:"Proizvo\u0111a\u010D",2:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B"
,4:"Producent",5:"Producent",0:"Producer",6:"Producent",7:"Tootja",8:"Tuottaja",
9:"Producteur",10:"Hersteller",11:"\u03A0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03CC\u03C2"
,12:"Termel\u0151",16:"Produsent",20:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"
,21:"Fabricante",23:"\xDCretici",24:"\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A"
};C.BoG={1:"Ubacite USB sa va\u017Ee\u0107im programom - a\u017Euriranje",2:"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E "+
"\u0441 \u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0444\u0430\u0439\u043B "+"\u043D\u0430 \u0444\u044A\u0440\u043C\u0443\u0435\u0440\u0430 \u2019firmware.vcu\u2019!"
,4:"Vlo\u017Ete USB flash disk se spr\xE1vn\xFDm souborem firmwaru \'firmware.vcu\' "+
"(uvnit\u0159 slo\u017Eky \'update\'), pros\xEDm!",5:"Inds\xE6t USB-n\xF8gle med gyldig firmwarefil \'firmware.vcu\' (i mappen "+
"\'update\'), venligst!",0:"Insert USB flash drive with valid firmware file \u2019firmware.vcu\u2019\n(inside "+
"directory \u2019update\u2019), please!",6:"Plaats de USB-stick met het geldige firmwarebestand \'firmware.vcu\' (in "+
"de map \'update\'), alstublieft!",7:"Siseste USB kehtiva tarkvaraga. Uuenda palun PIN!"
,8:"Aseta USB-muisti~tikku, jossa on kelvollinen firm~ware-tie~dos~to \u2019firmware.vcu\u2019, "+
"kiitos!",9:"Ins\xE9rez une cl\xE9 USB avec un logiciel valide \u2019firmware.vcu\u2019, "+
"s\u2019il vous pla\xEEt\xA0!",10:"Bitte USB-Stick mit g\xFCltiger Firmware-Datei \u2019firmware.vcu\u2019\n(im "+
"Verzeichnis \u2019update\u2019) einstecken!",11:"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 "+
"\u03BC\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 "+
"USB \u03BC\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+
"\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03BF\u03CD \xABfirmware.vcu\xBB, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE!",12:"K\xE9rj\xFCk, helyezze be az \xE9rv\xE9nyes firmware f\xE1jlt tartalmaz\xF3 "+
"USB flash meghajt\xF3t (\'firmware.vcu\' a \'update\' mapp\xE1ban)!",16:"Sett inn USB med gyldig programfil \u2019firmware.vcu\u2019 takk!"
,20:"\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 USB \u0441 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C "+
"\u0444\u0430\u0439\u043B\u043E\u043C \u041F\u041E \u2019firmware.vcu\u2019 "+"(\u0432 \u043F\u0430\u043F\u043A\u0435 \u2019update\u2019)!"
,21:"Inserte una unidad flash USB con el archivo de firmware v\xE1lido \'firmware.vcu\'\n(dentro "+
"del directorio \'update\'), por favor.",23:"Ge\xE7erli donan\u0131m yaz\u0131l\u0131m\u0131 dosyas\u0131 \'firmware.vcu\'\n(\'g\xFCncelleme\' "+
"dizininin i\xE7ine) i\xE7eren USB flash s\xFCr\xFCc\xFCy\xFC tak\u0131n, "+"l\xFCtfen!"
,24:"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 USB \u0456\u0437 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C "+
"\u0444\u0430\u0439\u043B\u043E\u043C \u041F\u041E \u2019firmware.vcu\u2019 "+"(\u0432 \u043F\u0430\u043F\u0446\u0456 \u2019update\u2019)!"
};C.N6={1:"Protokol",2:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B",3:"\u5354\u8B70"
,4:"Protokol",5:"Protokol",0:"Protocol",7:"Protokoll",8:"Kokoonpano",9:"Protocole"
,10:"Protokoll",11:"\u03A0\u03C1\u03BF\u03C4\u03CC\u03BA\u03C9\u03BB\u03BF",12:"Protokoll"
,16:"Protikoll",20:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B",21:"Protocolo"
,23:"Protokol",24:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B"};C.A$k={1:"Obavijesti o kupovini su obrisane nakon izvoza!"
,2:"\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u044F\u0442\u0430 \u0437\u0430 "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 "+
"\u0441\u043B\u0435\u0434 \u0435\u043A\u0441\u043F\u043E\u0440\u0442!",4:"Ozn\xE1men\xED o n\xE1kupu byla smaz\xE1na po exportu!"
,5:"K\xF8bsmeddelelser blev slettet efter eksport!",0:"Purchase notices were deleted after export!"
,6:"Aankoopmelding wordt verwijderd na export",7:"Ostu teated kustutati p\xE4rast eksportimist!"
,8:"K\xE4ytt\xF6oikeusviestit poistettiin viennin j\xE4lkeen!",9:"Les donn\xE9es d\'achat ont \xE9t\xE9 supprim\xE9s apr\xE8s l\'exportation\xA0!"
,10:"Zugangsmeldun~gen wurden nach Export gel\xF6scht!",11:"\u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE!"
,12:"A v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9seket t\xF6r\xF6lt\xE9k az export\xE1l\xE1s "+
"ut\xE1n!",16:"Kj\xF8psvarsler ble slettet etter eksport!",20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u044B\u043B\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u044B "+
"\u043F\u043E\u0441\u043B\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430!"
,21:"\xA1Las notificaciones de compra fueron eliminadas despu\xE9s de la exportaci\xF3n!"
,23:"\u0130hracattan sonra sat\u0131n alma bildirimleri silindi!",24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0431\u0443\u043B\u0438 "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456 \u043F\u0456\u0441\u043B\u044F "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443!"};C.AGn={1:"Kupljene \u017Eivotinje"
,2:"\u0417\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,4:"Koupen\xE1 zv\xED\u0159ata",5:"K\xF8bte dyr",0:"Purchased animals",6:"Gekocht dier"
,7:"Ostetud loomad",8:"Ostettuja el\xE4imi\xE4",9:"Animaux achet\xE9s",10:"Zuk\xE4ufe"
,11:"\u0391\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03B1"
,12:"V\xE1s\xE1rolt \xE1llatok",16:"Kj\xF8pte dyr",20:"\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,21:"Animales comprados",23:"Sat\u0131n al\u0131nan hayvanlar",24:"\u041A\u0443\u043F\u043B\u0435\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Quadruplets={1:"\u010Cetvorke",2:"\u0427\u0435\u0442\u0440\u0438\u0437\u043D\u0430\u0446\u0438"
,4:"\u010Dty\u0159\u010Data",5:"Firlinger",0:"Quadruplets",6:"Vierling",7:"Nelikud"
,8:"Neloset",9:"Quadrupl\xE9",10:"Vierlinge",11:"\u03A4\u03B5\u03C4\u03C1\u03AC\u03B4\u03C5\u03BC\u03B1"
,12:"N\xE9gyes ikrek",16:"Firlinger",20:"\u0427\u0435\u0442\u0432\u0435\u0440\u043E \u0431\u043B\u0438\u0437\u043D\u0435\u0446\u043E\u0432"
,21:"Cuatrillizos",23:"D\xF6rd\xFCzler",24:"\u0427\u043E\u0442\u0438\u0440\u0438 \u0431\u043B\u0438\u0437\u043D\u044E\u043A\u0438"
};C.A$l={1:"Kvalitet kolostruma",2:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043B\u0430\u0441\u0442\u0440\u0430"
,3:"\u521D\u4E73\u54C1\u8CEA",4:"Kvalita kolostrum",5:"Kvalitet af r\xE5m\xE6lk"
,0:"Quality of colostrum",6:"Biestkwaliteit",7:"Ternespiima kvaliteet",8:"Ternimaidon laatu"
,9:"Qualit\xE9 du colostrum",10:"Kolostrumqualit\xE4t",11:"\u03A0\u03BF\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03C1\u03C9\u03C4\u03BF\u03B3\u03AC\u03BB\u03B1\u03BA\u03C4\u03BF\u03C2"
,12:"Kolostrum min\u0151s\xE9ge",16:"Kvaliteten p\xE5 r\xE5melk",20:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430"
,21:"Calidad del calostro",23:"Kolostrum miktar\u0131",24:"\u042F\u043A\u0456\u0441\u0442\u044C \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0443"
};C.QuestionAddAnotherCalfMultiples={1:"\u017Divotinja je uspje\u0161no registrovana. Da li \u017Eelite registrivati "+
"i ostale \u017Eivotinje od iste majke?",2:"\u041D\u043E\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E (\u043E\u0442 "+
"\u043C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u043E \u0440\u0430\u0436\u0434\u0430\u043D\u0435) "+
"\u0431\u0435\u0448\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!\n\n\u0421\u0435\u0433\u0430 "+"\u0438\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0434\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 "+
"\u0438 \u0431\u043B\u0438\u0437\u043D\u0430\u043A\u0430 \u043C\u0443?",4:"Nov\xE9 zv\xED\u0159e (z v\xEDce\u010Detn\xE9ho vrhu) bylo \xFAsp\u011B\u0161n\u011B "+
"zaregistrov\xE1no!\n\nCht\u011Bli byste nyn\xED zaregistrovat i jeho sourozence?"
,5:"Nyt dyr (fra flere f\xF8dsler) blev registreret succesfuldt!\n\nVil du "+"nu ogs\xE5 registrere dets s\xF8skende?"
,0:"New animal (from multiple birth) was registered successfully!\n\nWould "+"you now like to register its sibling, too?"
,6:"Nieuw dier (van meerling) is geregistreerd. Wil je de andere ook registreren?"
,7:"Mitmiks\xFCnni uue looma registreerimine \xF5nnestus!\n\nKas soovite j\xE4tkata "+
"teise sama s\xFCnni looma registreerimisega?",8:"Uusi el\xE4in (kaksosista) rekister\xF6itiin onnistuneesti!\n\nHaluatko "+
"nyt rekister\xF6id\xE4 my\xF6s sen sisaruksen?",9:"Nouvel animal d\'une naissance multiple en~registr\xE9 avec succ\xE8s\xA0!\nVoulez-vous "+
"enregistrer autre l\'animal de la fratrie\xA0?",10:"Neues Tier aus Mehrlingsgeburt erfolgreich angemeldet!\nM\xF6chten Sie "+
"jetzt das dazugeh\xF6rige Geschwister~tier anmelden?",11:"\u03A4\u03BF \u03BD\u03AD\u03BF \u03B6\u03CE\u03BF (\u03B1\u03C0\u03CC "+
"\u03C0\u03BF\u03BB\u03CD\u03B4\u03C5\u03BC\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7) "+
"\u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B5 \u03BC\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!\n\n\u0398\u03B1 \u03B8\u03AD\u03BB\u03B1\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 "+
"\u03BA\u03B1\u03B9 \u03C4\u03BF \u03B1\u03B4\u03B5\u03C1\u03C6\u03AC\u03BA\u03B9 "+
"\u03C4\u03BF\u03C5;",12:"Az \xFAj \xE1llat (t\xF6bbsz\xF6r\xF6s sz\xFClet\xE9sb\u0151l) sikeresen "+
"regisztr\xE1lva!\n\nSzeretn\xE9 most az \xE1llat testv\xE9r\xE9t is regisztr\xE1lni?"
,16:"Nytt dyr (fra tvilling/flerf\xF8dsel) ble registrert!\n\nVil du ogs\xE5 "+"registrere s\xF8sken?"
,20:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0438\u0437 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E!\n\u0425\u043E\u0442\u0438\u0442\u0435 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0441\u0435\u0439\u0447\u0430\u0441?",21:"\xA1El nuevo animal (de un parto m\xFAltiple) se registr\xF3 con \xE9xito!\n\xBFLe "+
"gustar\xEDa registrar a su hermano tambi\xE9n?",23:"Yeni hayvan (\xE7o\u011Ful do\u011Fumdan itibaren) ba\u015Far\u0131yla "+
"kaydedildi!\n\n\u015Eimdi onun karde\u015Fini de kaydetmek ister misiniz?",24:"\u041D\u043E\u0432\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0456\u0437 "+
"\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0430\u044F "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E!\n\u0427\u0438 "+
"\u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0443 \u0440\u043E\u0434\u0438\u043D\u043D\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0437\u0430\u0440\u0430\u0437?"};C.
Afd={3:"\u554F\u865F",5:"Please provide the word or sentence you\'d like translated into Danish."
,0:"?",9:"\xA0?",12:"Sure, I can help you translate from English to Hungarian. Please provide "+
"the word or sentence you\'d like to translate."};C.A$m={1:"RFID \u010Dita\u010D"
,2:"RFID \u0447\u0435\u0442\u0435\u0446",4:"\u010Dte\u010Dka RFID",5:"RFID-l\xE6ser"
,0:"RFID reader",6:"RFID lezer",7:"RFID lugeja",8:"RFID lukija",9:"Lecteur RFID"
,10:"RFID-Leseger\xE4t",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03C4\u03B7\u03C2 RFID"
,12:"RFID olvas\xF3",16:"RFID-leser",20:"\u0421\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C RFID"
,21:"Lector RFID",23:"RFID okuyucu",24:"\u0417\u0447\u0438\u0442\u0443\u0432\u0430\u0447 RFID"
};C.BoI={0:"RGB LED",7:"RGB punane",21:"LED RGB",23:"RGB LED\'i"};C.A$o={1:"real time sat"
,2:"\u0427\u0430\u0441\u043E\u0432\u043D\u0438\u043A \u0437\u0430 \u0440\u0435\u0430\u043B\u043D\u043E "+
"\u0432\u0440\u0435\u043C\u0435",4:"Re\xE1ln\xFD \u010Dasov\xFD hodiny",5:"Realtidsur"
,0:"Real time clock",6:"Real time klok",7:"Reaalaja kell",8:"Reaaliaikainen kello"
,9:"Module d\'horloge",10:"Uhrenbaustein",11:"\u03A1\u03BF\u03BB\u03CC\u03B9 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03BF\u03CD "+
"\u03C7\u03C1\u03CC\u03BD\u03BF\u03C5",12:"Val\xF3s idej\u0171 \xF3ra",16:"Sanntids klokke"
,20:"\u041C\u043E\u0434\u0443\u043B\u044C \u0447\u0430\u0441\u043E\u0432",21:"Reloj en tiempo real"
,23:"Ger\xE7ek zamanl\u0131 saat",24:"\u041C\u043E\u0434\u0443\u043B\u044C \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0430"
};C.RangeTest={1:"Test dosega",2:"\u0422\u0435\u0441\u0442 \u043D\u0430 \u043E\u0431\u0445\u0432\u0430\u0442\u0430"
,3:"\u7BC4\u570D\u6E2C\u8A66",4:"Rozsah testu",5:"R\xE6kkevidde test",0:"Range test"
,7:"Vahemiku test",8:"Aluetesti",9:"Test de l\u2019autonomie",10:"Reichweitentest"
,11:"\u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B5\u03CD\u03C1\u03BF\u03C5\u03C2",
12:"Hat\xF3t\xE1v teszt",16:"Rangering",20:"\u0422\u0435\u0441\u0442 \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",21:"Prueba de alcance",23:"Mesafe testi"
,24:"\u0422\u0435\u0441\u0442 \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 "+
"\u0434\u0456\u0457"};C.A$p={1:"Ocjena",2:"\u041E\u0446\u0435\u043D\u043A\u0430"
,3:"\u6BD4\u7387",4:"Hodnotit",5:"Bed\xF8mme",0:"Rate",6:"Beoordelen",7:"Hinda",
8:"Taso",9:"\xC9valuer",10:"Bewerten",11:"\u0394\u03CE\u03C3\u03B5 \u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7"
,12:"Ar\xE1ny",16:"Vurdere",20:"\u041E\u0446\u0435\u043D\u0438\u0442\u044C",21:"Evaluar"
,23:"Oran",24:"\u041E\u0446\u0456\u043D\u0438\u0442\u0438"};C.AGo={1:"Ocjenjivanje \u017Eivotinje"
,2:"\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u8A55\u5206",4:"Hodnotit zv\xED\u0159e",5:"Bed\xF8m dyr",0:"Rate animal"
,6:"Dier beoordelen",7:"Hinda looma",8:"Arvioi el\xE4in",9:"Evaluer l\u2019animal"
,10:"Tier bewerten",11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF \u03B6\u03CE\u03BF",12:"\xC9rt\xE9kelj \xE1llatot",16:"Vurder dyr"
,20:"\u041E\u0446\u0435\u043D\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Evaluar animal",23:"Hayvan\u0131 de\u011Ferlendir",24:"\u041E\u0446\u0456\u043D\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.Rating={1:"Ocjenjivanje",2:"\u041E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435"
,3:"\u8A55\u5206",4:"Hodnocen\xED",5:"Bed\xF8mmelse",0:"Rating",6:"Beoordeling",
7:"Hinnang",8:"Luokitus",9:"\xC9valuation",10:"Bewertung",11:"\u0395\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7"
,12:"\xC9rt\xE9kel\xE9s",16:"Vurdering",20:"\u041E\u0446\u0435\u043D\u043A\u0430"
,21:"Evaluaci\xF3n",23:"Derecelendirme",24:"\u041E\u0446\u0456\u043D\u043A\u0430"
};C.A$q={1:"Ocjenjivanje \u017Eivotinja",2:"\u041E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,3:"\u5C0F\u725B\u7684\u8A55\u5206",4:"Hodnocen\xED zv\xED\u0159at",5:"Bed\xF8mmelse af dyr"
,0:"Rating of animals",6:"Dierevaluatie",7:"Loomade hinnang",8:"El\xE4inten luokitus"
,9:"Evaluation des animaux",10:"Tierbewertung",11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2 \u03C4\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD",12:"\xC1llatok \xE9rt\xE9kel\xE9se",16:"Vurdering av dyr"
,20:"\u041E\u0446\u0435\u043D\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Evaluaci\xF3n de animales",23:"Hayvanlar\u0131n derecelendirilmesi",24:"\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BoK={1:"Ukupno stanje \u017Eivotinja",2:"\u041E\u0431\u0449\u043E \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,3:"\u5916\u89C0\u8A55\u5206",4:"Hodnocen\xED vzhledu celkov\xE9",5:"Generel tilstand"
,0:"General condition",6:"Algemeen optreden",7:"Keskmine seisund",8:"Yleiskunto"
,9:"\xC9tat g\xE9n\xE9ral",10:"Allgemein~zustand",11:"\u0393\u03B5\u03BD\u03B9\u03BA\u03CC\u03C4\u03B5\u03C1\u03B7 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7"
,12:"\xC1ltal\xE1nos \xE1llapot",16:"generell tilstand",20:"\u041E\u0431\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,21:"Aspecto general",23:"Genel g\xF6r\xFCn\xFCm",24:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u0430\u043D"
};C.AGq={1:"Stanje",2:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u044F",3:"\u8A55\u5206"
,4:"Hodnocen\xED vzhledu zkr\xE1cen\xE9",5:"Tilstand",0:"Condition",6:"Uiterlijk"
,7:"Seisund",8:"Ulkon\xE4k\xF6",9:"\xC9tat",10:"Zustand",11:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7"
,12:"\xC1llapot",16:"Tilstand",20:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,21:"Aspecto",23:"G\xF6r\xFCn\xFCm",24:"\u0421\u0442\u0430\u043D"};C.BoL={1:"Konzistencija izmeta"
,2:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+"\u043D\u0430 \u0438\u0437\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F\u0442\u0430"
,3:"\u7CDE\u4FBF\u5206\u7D1A",4:"Hodnocen\xED konzistence v\xFDkal\u016F",5:"Konsistens af aff\xF8ring"
,0:"Consistency of faeces",6:"Mestconsistentie",7:"Roe konsistents",8:"Ulosteiden yhdenmukaisuus"
,9:"Consistance f\xE9cale",10:"Kotbeschaffenheit",11:"\u03A3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1 \u03C4\u03C9\u03BD \u03C0\u03B5\u03C1\u03B9\u03C4\u03C4\u03C9\u03BC\u03AC\u03C4\u03C9\u03BD"
,12:"Sz\xE9klet \xE1llaga",16:"Konsistens p\xE5 avf\xF8ring",20:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0438\u0439",21:"Consistencia\nde las heces",23:
"D\u0131\u015Fk\u0131 derecelendirmesi",24:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0456\u0439"};C.AGs={1:"Izmet",2:"\u0418\u0437\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F"
,3:"\u7CDE\u4FBF",4:"Hodnocen\xED konzistence v\xFDkal\u016F zkr\xE1cen\xE9",5:"Aff\xF8ring"
,0:"Faeces",6:"Mest",7:"Roe",8:"Ulosteet",9:"F\xE9cal",10:"Kot",11:"\u03A0\u03B5\u03C1\u03B9\u03C4\u03C4\u03CE\u03BC\u03B1\u03C4\u03B1"
,12:"Sz\xE9klet",16:"Avf\xF8ring",20:"\u0424\u0435\u043A\u0430\u043B\u0438\u0438"
,21:"Heces",23:"D\u0131\u015Fk\u0131",24:"\u0424\u0435\u043A\u0430\u043B\u0456\u0457"
};C.BoM={1:"Konzumacija hrane",2:"\u0418\u0437\u044F\u0434\u0435\u043D\u0430 \u0445\u0440\u0430\u043D\u0430"
,3:"\u63A1\u98DF",4:"Hodnocen\xED p\u0159\xEDjmu krmen\xED",5:"Foderindtag",0:"Feed intake"
,6:"Voeropname",7:"S\xF6\xF6mus",8:"Rehunsy\xF6nti",9:"Consommation",10:"Futteraufnahme"
,11:"\u03A0\u03C1\u03CC\u03C3\u03BB\u03B7\u03C8\u03B7 \u03C4\u03C1\u03BF\u03C6\u03AE\u03C2"
,12:"Takarm\xE1nyfelv\xE9tel",16:"F\xF4ropptak",20:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043C\u0430"
,21:"Ingesta de alimento",23:"Besin derecelendirmesi",24:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u043C\u0443"
};C.BoN={1:"Oboljenja disajnih puteva",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0430 "+
"\u0431\u043E\u043B\u0435\u0441\u0442",3:"\u547C\u5438\u75BE\u75C5",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED"
,5:"Respirationssygdom",0:"Respiratory disease",6:"Ademwegsziekte",7:"Hingamisteede haigused"
,8:"Hengityssairaus",9:"Maladie respiratoire",10:"Atemwegserkrankung",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B1 \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"L\xE9gz\u0151szervi betegs\xE9g",16:"Luftveissykdom",20:"\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0434\u044B\u0445\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043F\u0443\u0442\u0435\u0439",21:"Enfermedad respiratoria",23:"Solunum derecelendirmesi"
,24:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 "+
"\u0448\u043B\u044F\u0445\u0456\u0432"};C.BoO={1:"Oboljenja disajnih puteva",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0430 "+
"\u0431\u043E\u043B\u0435\u0441\u0442",3:"\u547C\u5438\u9053\u75BE\u75C5",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED pomoc"
,5:"Respiratorisk sygdom",0:"Respiratory disease",6:"Ademwegsziekte",7:"Hingamisteede haigused"
,8:"Hengitys~sairaus",9:"Maladie respiratoire",10:"Atemwege",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B1 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"L\xE9gz\u0151szervi betegs\xE9g",16:"Luftveissykdom",20:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0435 "+
"\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435",21:"Enfermedad respiratoria"
,23:"Solunum yollar\u0131 rahats\u0131zl\u0131\u011F\u0131",24:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 "+
"\u0448\u043B\u044F\u0445\u0456\u0432"};C.AUr={2:"\u0420",3:"A",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED po\u010D\xE1te\u010Dn\xED"
,0:"R",8:"H",10:"A",11:"\u0391",12:"L",20:"\u0410",24:"The letter \"R\" in Ukrainian is \"\u0420\" (pronounced as \'er\')."
};C.AGt={1:"Disajni putevi",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0438"
,3:"\u547C\u5438",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED zkr\xE1cen\xE9"
,5:"Respiratorisk",0:"Respiratory",6:"Ademwegen",7:"Hingamine",8:"Hengitys",9:"Voie respiratoire"
,10:"Atemwege",11:"\u0391\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03CC"
,12:"L\xE9gz\u0151rendszeri",16:"Luftveiene",20:"\u041E\u0440\u0433\u0430\u043D\u044B \u0434\u044B\u0445\u0430\u043D\u0438\u044F"
,21:"V\xEDas respi~ratorias",23:"Solunum",24:"\u041E\u0440\u0433\u0430\u043D\u0438 \u0434\u0438\u0445\u0430\u043D\u043D\u044F"
};C.BoP={1:"\u010Cisti",2:"\u0414\u0438\u0430\u0440\u0438\u044F",4:"Pr\u016Fjem"
,5:"Skurer",0:"Scours",6:"Diarree",7:"K\xF5hulahtisus",8:"Ulosteet",9:"Diarrh\xE9e"
,10:"Kotkonsistenz",11:"\u0394\u03B9\u03AC\u03C1\u03C1\u03BF\u03B9\u03B1",12:"D\xF6rzs\xF6l"
,16:"Diare vurdering",20:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0438\u0439",21:"Diarrea",23:"\u0130shal",24:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0456\u0439"};C.AUs={2:"\u041E",3:"\u8179\u7009"
,4:"Hodnocen\xED zv\xED\u0159ete po\u010D\xE1te\u010Dn\xED",0:"S",7:"T",8:"U",9:
"D",10:"K",11:"\u0394",12:"D",20:"\u041A",21:"D",24:"\u041A"};C.Axv={1:"Ocjenjivanje"
,2:"\u041E\u0446\u0435\u043D\u043A\u0438",3:"\u8A55\u5206",4:"Hodnocen\xED",5:"Bed\xF8mmelser"
,0:"Ratings",6:"Beoordelin~gen",7:"Tase",8:"Luokitukset",9:"\xC9valuations",10:"Bewertungen"
,11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2",12:"\xC9rt\xE9kel\xE9sek"
,16:"Vurderinger",20:"\u041E\u0446\u0435\u043D\u043A\u0438",21:"Evaluaciones",23:
"Derecelendirmeler",24:"\u041E\u0446\u0456\u043D\u043A\u0438"};C.ReasonOfLeaving={
1:"Razlog napu\u0161tanja",2:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0437\u0430 \u043D\u0430\u043F\u0443\u0441\u043A\u0430\u043D\u0435"
,4:"D\u016Fvod odchodu",5:"\xC5rsag til at forlade",0:"Reason of leaving",6:"Reden van afvoer"
,7:"Lahkumise p\xF5hjus",8:"Poiston syy",9:"Motif du d\xE9part",10:"Abgangsursache"
,11:"\u039B\u03CC\u03B3\u03BF\u03C2 \u03B1\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7\u03C2"
,12:"T\xE1voz\xE1s oka",16:"Grunn til \xE5 forlate",20:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u0442\u0435\u0440\u0438"
,21:"Motivo de salida",23:"Ayr\u0131lma nedeni",24:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0442\u0440\u0430\u0442\u0438"
};C.AUu={1:"Napunite aparat!",2:"\u0417\u0430\u0440\u0435\u0434\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E!"
,3:"\u5145\u96FB\u88DD\u7F6E\uFF01",4:"Dobijte za\u0159\xEDzen\xED",5:"Oplad enhed!"
,0:"Recharge device!",6:"Apparaat opladen!",7:"Lae seade",8:"Lataa laite!",9:"Rechargez le dispositif\xA0!"
,10:"Bitte Ger\xE4t aufladen!",11:"\u03A6\u03BF\u03C1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE!"
,12:"T\xF6ltsd fel az eszk\xF6zt!",16:"Lad opp enheten",20:"\u0417\u0430\u0440\u044F\u0434\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,21:"\xA1Recargar dispositivo!",23:"Cihaz\u0131 \u015Farj edin!",24:"\u0417\u0430\u0440\u044F\u0434\u0456\u0442\u044C \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439!"
};C.BoQ={1:"Zapis {1} od {2}",2:"\u0417\u0430\u043F\u0438\u0441 {1} \u043E\u0442 {2}"
,4:"Z\xE1znam {1} z {2}",5:"Post {1} af {2}",0:"Record {1} of {2}",6:"Opname {1} van {2}"
,7:"Salvesta{1} {2}st",8:"Enn\xE4tys {1} / {2}",9:"Enregistrement {1} de {2}",10:
"Datensatz {1} von {2}",11:"\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE {1} \u03B1\u03C0\u03CC {2}"
,12:"Rekord {1} a(z) {2}-b\u0151l",16:"Registrering {1} av {2}",20:"\u0417\u0430\u043F\u0438\u0441\u044C {1} \u0438\u0437 {2}"
,21:"Registro {1} de {2}",23:"Record {1} / {2}",24:"\u0417\u0430\u043F\u0438\u0441 {1} \u0437 {2}"
};C.AGu={1:"Zabilje\u017Eene vrijednosti",2:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438"
,4:"Zaznamenan\xE9 hodnoty",5:"Optagede v\xE6rdier",0:"Recorded values",6:"opgenomen waardes"
,7:"Salvestatud v\xE4\xE4rtused",8:"Tallennetut arvot",9:"Valeurs enregistr\xE9es"
,10:"Erfasste Werte",11:"\u039A\u03B1\u03C4\u03B1\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03C4\u03B9\u03BC\u03AD\u03C2",12:"Feljegyzett \xE9rt\xE9kek",16:"Registrerte verdier"
,20:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
,21:"Valores registrados",23:"Kaydedilen de\u011Ferler",24:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.BoR={1:"Dodjela transpondera uspje\u0161no zavr\u0161ena!\n\nPreusmjeriti sada "+
"na ekran \'Kupljene \u017Eivotinje\'?\n\nTamo mo\u017Eete izvesti CSV datoteku "+
"za uvoz \u017Eivotinja u sistem upravljanja stadom.",2:"\u041F\u0440\u0438\u0441\u0432\u043E\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0437\u0430\u0432\u044A\u0440\u0448\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!\n\n\u041F\u0440\u0435\u043D\u0430\u0441\u043E\u0447\u0432\u0430\u043D\u0435 "+
"\u043A\u044A\u043C \u0435\u043A\u0440\u0430\u043D \u201E\u0417\u0430\u043A\u0443\u043F\u0435\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438\u201C \u0441\u0435\u0433\u0430?\n\n\u0422\u0430\u043C "+
"\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u0442\u0435 "+
"CSV \u0444\u0430\u0439\u043B \u0437\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430 "+
"\u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 "+"\u043D\u0430 \u0441\u0442\u0430\u0434\u043E\u0442\u043E."
,4:"P\u0159i\u0159azen\xED transpond\xE9r\u016F \xFAsp\u011B\u0161n\u011B dokon\u010Deno!\n\nP\u0159esm\u011Brovat "+
"nyn\xED na obrazovku \'Zakoupen\xE1 zv\xED\u0159ata\'?\n\nZde m\u016F\u017Eete "+
"exportovat soubor CSV pro import zv\xED\u0159at do syst\xE9mu spr\xE1vy "+"st\xE1da."
,5:"Tildeling af transponder er afsluttet med succes!\n\nOmdiriger til sk\xE6rmen "+
"\'K\xF8bte dyr\' nu?\n\nDer kan du eksportere en CSV-fil til import af "+"dyr i bes\xE6tningsstyringssystemet."
,0:"Transponder assignment finished successfully!\n\nRedirect to screen \u2019Purchased "+
"animals\u2019 now?\n\nThere you can export a CSV file for animal import "+"into herd management system."
,6:"Transponder toewijzing succesvol afgerond!\n\nDoorverwijzen naar het scherm "+
"\'Gekochte dieren\' nu?\n\nDaar kunt u een CSV-bestand exporteren voor "+"dierimport in het kuddebeheersysteem."
,7:"Transponderi m\xE4\xE4ramine l\xF5petatud edukalt!\n\nSuunata n\xFC\xFCd "+"ekraanile \"Ostetud loomad\"?\n\nSeal saate eksportida CSV-faili loomade "+
"importimiseks karjahalduss\xFCsteemi.",10:"Zuordnung beendet!\n\nJetzt auf Bildschirm \u2019Zug\xE4nge\u2019 umleiten?\n\nDort "+
"dann eine CSV-Datei f\xFCr die Zugangsmeldung bei HI-Tier oder f\xFCr "+"den Import in HERDE Mast erstellen!"
,11:"\u0397 \u03B1\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03B4\u03AD\u03BA\u03C4\u03B7-\u03C0\u03BF\u03BC\u03C0\u03BF\u03CD "+
"\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!\n\n\u0391\u03BD\u03B1\u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 "+
"\u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 \"\u0391\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03B1\" \u03C4\u03CE\u03C1\u03B1;\n\n\u0395\u03BA\u03B5\u03AF "+"\u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03BE\u03AC\u03B3\u03B5\u03C4\u03B5 "+
"\u03AD\u03BD\u03B1 \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03B3\u03B9\u03B1 "+
"\u03C4\u03B7\u03BD \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03B6\u03CE\u03C9\u03BD "+
"\u03C3\u03C4\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B4\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7\u03C2 "+
"\u03BA\u03BF\u03C0\u03B1\u03B4\u03B9\u03BF\u03CD.",12:"A transzponder hozz\xE1rendel\xE9s sikeresen befejez\u0151d\xF6tt!\n\n\xC1tir\xE1ny\xEDt\xE1s "+
"a \'Megv\xE1s\xE1rolt \xE1llatok\' k\xE9perny\u0151re most?\n\nOtt export\xE1lhat "+
"egy CSV f\xE1jlt az \xE1llatok behozatal\xE1hoz a ny\xE1jkezel\u0151 rendszerbe."
,16:"Transponder-tildeling fullf\xF8rt med suksess!\n\nOmdiriger til skjermen "+
"\'Kj\xF8pte dyr\' n\xE5?\n\nDer kan du eksportere en CSV-fil for import "+"av dyr inn i besetningsstyringssystemet."
,20:"\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043F\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u043D\u0430 \u044D\u043A\u0440\u0430\u043D \"\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435\" \u0441\u0435\u0439\u0447\u0430\u0441?\n\n\u0422\u0430\u043C "+
"\u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0444\u0430\u0439\u043B CSV \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",24:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u0437\u0430\u0440\u0430\u0437 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D "+"\"\u041A\u0443\u043F\u043B\u0435\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438\"?\n\n\u0422\u0430\u043C "+
"\u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"\u0444\u0430\u0439\u043B CSV \u0434\u043B\u044F \u0456\u043C\u043F\u043E\u0440\u0442\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D \u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 "+
"\u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0441\u0442\u0430\u0434\u043E\u043C."
};C.BoT={1:"registrivati",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u044A\u0440",3:
"\u767B\u9304",4:"Registrovat",5:"Registrer",0:"Register",6:"Aanleggen",7:"Registreeri"
,8:"Rekister\xF6idy",9:"Enregistrer",10:"Anlegen",11:"\u039A\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03C4\u03B5"
,12:"Regisztr\xE1lj",16:"Registrere",20:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,21:"Registrar",23:"Kay\u0131t",24:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438"
};C.BoU={1:"registrovana",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438"
,3:"\u767B\u9304",4:"Registrovan\xFD",5:"Registreret",0:"Registered",6:"Registreerd"
,7:"Registreeritud",8:"Rekister\xF6ity",9:"Enregistr\xE9",10:"Registriert",11:"\u0395\u03B3\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF"
,12:"Regisztr\xE1lt",16:"Registrert",20:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D"
,21:"Registrado",23:"Kaydedildi",24:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E"
};C.Asp={1:"Registracija \u017Eivotinje",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438",3:"\u8A3B\u518A",4:"Registrace",5:"Registrering af dyr"
,0:"Registration of animals",6:"Dieren registreren",7:"Registreeri loom",8:"Rekister\xF6inti"
,9:"Enregistrer d`animaux",10:"Tiere neu anlegen",11:"\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE"
,12:"\xC1llatok regisztr\xE1ci\xF3ja",16:"Registrering av dyr",20:"\u0420\u0435\u0433\u0438\u0442\u0441\u0440\u0430\u0446\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Registrar animales",23:"Kay\u0131t",24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BoY={1:"Ukloni sa liste pra\u0107enja",2:"\u041F\u0440\u0435\u043C\u0430\u0445\u0432\u0430\u043D\u0435 \u043E\u0442 "+
"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"
,4:"Odebrat ze seznamu sledov\xE1n\xED",5:"Fjern fra overv\xE5gningsliste",0:"Remove from watch list"
,6:"verwijder van Watchlist",7:"Eemalda j\xE4lgimisnimekirjast",8:"Poista el\xE4in tarkkailulistalta"
,9:"Supprimer l\'animal de la liste de suivi",10:"Tier von Beobachtungs~liste entfernen"
,11:"\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03B1\u03C0\u03CC "+
"\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2"
,12:"Elt\xE1vol\xEDt\xE1s a megfigyel\xE9si list\xE1r\xF3l",16:"Fjern fra overv\xE5kningslisten"
,20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 "+
"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",21:"Quitar de la lista de seguimiento"
,23:"\u0130zleme listesinden kald\u0131r",24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F"
};C.A$s={1:"Ponovite mjerenje",2:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438 \u0438\u0437\u043C."
,4:"Opakovan\xE9 m\u011B\u0159en\xED",5:"Gentag m\xE5ling",0:"Repeat measurement"
,6:"herhaal meting",7:"Korda tegevust",8:"Toista mittaus",9:"R\xE9p\xE9ter la mesure"
,10:"Messung wiederholen",11:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03AC\u03B2\u03B5\u03C4\u03B5 \u03C4\u03B7 "+
"\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7",12:"Ism\xE9telt m\xE9r\xE9s",16:"M\xE5l en gang til"
,20:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435"
,21:"Volver a medir",23:"\xD6l\xE7\xFCmTekrar\u0131",24:"\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A$u={1:"Resetiraj niz akcija",2:"\u041D\u0443\u043B\u0438\u0440\u0430\u0439\u0442\u0435 \u0432\u0435\u0440\u0438\u0433\u0430\u0442\u0430 "+
"\u043E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",4:"Resetovat \u0159et\u011Bzec akc\xED"
,5:"Nulstil handlingsk\xE6de",0:"Reset chain of actions",6:"Reset acties",7:"Tegevuste ahela l\xE4htestamine"
,8:"Nollaa toimintaketju",9:"R\xE9initialisation de la cha\xEEne d\'actions",10:
"Reset Aktionskette",11:"\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03BB\u03C5\u03C3\u03AF\u03B4\u03B1\u03C2 "+
"\u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD",12:"Akci\xF3k sor\xE1nak \xFAjraind\xEDt\xE1sa"
,16:"Nullstill handlingskjeden",20:"\u0421\u0431\u0440\u043E\u0441 \u0446\u0435\u043F\u043E\u0447\u043A\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439",21:"Reiniciar cadena de acciones"
,23:"Eylem zincirini s\u0131f\u0131rla",24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043B\u0430\u043D\u0446\u044E\u0433 "+
"\u0434\u0456\u0439"};C.Asw={1:"Monitro resursa",2:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0438\u0442\u0435"
,3:"\u8CC7\u6E90\u76E3\u63A7\u5668",4:"Sledov\xE1n\xED zdroje",5:"Ressourceoverv\xE5gning"
,0:"Resource monitor",7:"Vahendite j\xE4lgimine",8:"Resurssien valvonta",9:"Suivi des ressources"
,10:"Ressourcenmonitor",11:"\u03A0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7 "+
"\u03C0\u03CC\u03C1\u03C9\u03BD",12:"Er\u0151forr\xE1s-figyel\u0151",16:"Ressurs overv\xE5ker"
,20:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432"
,21:"Monitor de recursos",23:"Kaynak Monit\xF6r\xFC",24:"\u041C\u043E\u043D\u0456\u0442\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432"
};C.A$v={2:"\u0420\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u91CD\u65B0\u555F\u52D5",5:"Genstart",0:"Restart",6:"Nieuwstart",7:"Taask\xE4ivita"
,8:"Uudelleenk\xE4ynnistys",9:"Red\xE9marrage",10:"Neustart",11:"\u0395\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03AF\u03B7\u03C3\u03B7"
,12:"\xDAjraind\xEDt\xE1s",16:"Omstart",20:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"
,21:"Reinicio",23:"Yeniden ba\u015Flat",24:"\u041F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"
};C.AGy={1:"Vrati sigurnosnu kopiju",2:"\u0412\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438",4:"Obnovit z\xE1lohu",5:"Gendan backup"
,0:"Restore backup",6:"Bewaar Back Up",7:"Taasta varukoopia",8:"Palauta varmuuskopio"
,9:"R\xE9tablir la sauvegarde des donn\xE9es",10:"Datensicherung einspielen",11:
"\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2",12:"Biztons\xE1gi ment\xE9s vissza\xE1ll\xEDt\xE1sa"
,16:"Gjenopprett sikkerhetskopi",20:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E"
,21:"Restaurar copia de seguridad",23:"Yede\u011Fi geri y\xFCkle",24:"\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 "+
"\u043A\u043E\u043F\u0456\u044E"};C.Bo3={1:"Obnavljanje u toku!\n\nOvaj proces mo\u017Ee trajati minutu ili du\u017Ee, "+
"molimo vas budite strpljivi!",2:"\u0412\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u0435 \u0432 \u0445\u043E\u0434!\n\n \u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0446\u0435\u0441 "+
"\u043C\u043E\u0436\u0435 \u0434\u0430 \u043E\u0442\u043D\u0435\u043C\u0435 "+"\u043C\u0438\u043D\u0443\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435, "+
"\u043C\u043E\u043B\u044F, \u0431\u044A\u0434\u0435\u0442\u0435 \u0442\u044A\u0440\u043F\u0435\u043B\u0438\u0432\u0438!"
,4:"Obnova prob\xEDh\xE1!\n\nTento proces m\u016F\u017Ee trvat minutu nebo "+"d\xE9le, pros\xEDm o trp\u011Blivost!"
,5:"Gendannelse i gang!\n\nDenne proces kan tage et minut eller l\xE6ngere, "+"v\xE6r t\xE5lmodig!"
,0:"Restore in progress!\n\nThis process may take a minute or longer, please "+"be patient!"
,6:"Opslaan in behandeling",7:"Taastamine k\xE4ib!\n\nSee protsess v\xF5ib v\xF5tta aega minut v\xF5i "+
"kauem, palun ole kannatlik!",8:"Tietoja palautetaan!\n\nT\xE4m\xE4 prosessi voi kest\xE4\xE4 minuutin tai "+
"enemm\xE4n, ole k\xE4rsiv\xE4llinen!",9:"Les donn\xE9es sont en cours de restaurer\xA0!\n\nCe processus peut prendre "+
"une minute ou plus, Patientez s\'il vous pla\xEEt\xA0!",10:"Daten werden wiederher~gestellt!\n\nDieser Vorgang kann eine Minute oder "+
"l\xE4nger dauern, etwas Geduld bitte!",11:"\u0397 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B2\u03C1\u03AF\u03C3\u03BA\u03B5\u03C4\u03B1\u03B9 "+
"\u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7!\n\n\u0391\u03C5\u03C4\u03AE "+
"\u03B7 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF "+
"\u03BD\u03B1 \u03B4\u03B9\u03B1\u03C1\u03BA\u03AD\u03C3\u03B5\u03B9 \u03AD\u03BD\u03B1 "+
"\u03BB\u03B5\u03C0\u03C4\u03CC \u03AE \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03BF, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03BA\u03AC\u03BD\u03C4\u03B5 "+
"\u03C5\u03C0\u03BF\u03BC\u03BF\u03BD\u03AE!",12:"Folyamatban l\xE9v\u0151 helyre\xE1ll\xEDt\xE1s!\n\nEz a folyamat egy "+
"percig vagy tov\xE1bb tarthat, k\xE9rj\xFCk, legyen t\xFCrelemmel!",16:"Gjenoppretting p\xE5g\xE5r!\n\nDenne prosessen kan ta et minutt eller "+
"lenger, v\xE6r t\xE5lmodig!",20:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 "+
"\u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435!\n\n\u042D\u0442\u043E\u0442 "+
"\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u0435\u0442 "+"\u0437\u0430\u043D\u044F\u0442\u044C \u043C\u0438\u043D\u0443\u0442\u0443 "+
"\u0438\u043B\u0438 \u0434\u043E\u043B\u044C\u0448\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0431\u0443\u0434\u044C\u0442\u0435 \u0442\u0435\u0440\u043F\u0435\u043B\u0438\u0432\u044B!"
,21:"Restauraci\xF3n en progreso.\n\n\xA1Este proceso puede llevar un minuto "+"o m\xE1s, por favor, ten paciencia!"
,23:"Geri y\xFCkleme i\u015Flemi s\xFCr\xFCyor!\n\nBu i\u015Flem bir dakika "+"veya daha uzun s\xFCrebilir, l\xFCtfen sab\u0131rl\u0131 olun!"
,24:"\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u0454!\n\n\u0426\u0435\u0439 "+
"\u043F\u0440\u043E\u0446\u0435\u0441 \u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 "+
"\u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0430\u0431\u043E \u0431\u0456\u043B\u044C\u0448\u0435, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!"
};C.A$z={1:"SD kartica",2:"SD \u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\u0435\u0442"
,4:"SD karta",5:"SD-kort",0:"SD Card",6:"SD Kaart",7:"SD-kaart",8:"SD Kortti",9:
"Carte SD",10:"SD-Speicherkarte",11:"\u039A\u03AC\u03C1\u03C4\u03B1 SD",12:"SD k\xE1rtya"
,16:"SD kort",20:"\u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\u044F\u0442\u0438 SD"
,21:"Tarjeta SD",23:"SD Kart",24:"\u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\'\u044F\u0442\u0456 "+
"SD"};C.Bo$={1:"skenirati",2:"\u0421\u043A\u0430\u043D\u0438~\u0440\u0430\u043D\u0435"
,3:"\u6383\u63CF",4:"Ske~no~vat",5:"Skan",0:"Scan",7:"Skan~neeri",8:"Skan~naa",9:
"Scan~ner",11:"\u0391\u03BD\u03B9\u03C7~\u03BD\u03B5\u03CD\u03C3\u03C4\u03B5",12:
"Szkennel",16:"Skanning",20:"\u0421\u043A\u0430\u043D\u0438~\u0440\u043E~\u0432\u0430\u043D\u0438\u0435"
,21:"Esca~neo",23:"Tara",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F"
};C.Bpa={1:"Skenirajte ID \u017Eivotinje",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439\u0442\u0435 ID \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E",4:"Skenovat ID zv\xED\u0159ete"
,5:"Scan ID af dyr",0:"Scan ID of animal",6:"Scan dier ID",7:"Looma ID skaneerimine"
,8:"Skannaa el\xE4imen tunnus",9:"Scanner le n\xB0 d\'identification",10:"Ohrmarkennr. einscannen"
,11:"\u03A3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"\u03B6\u03CE\u03BF\u03C5",12:"\xC1llat azonos\xEDt\xF3ja beolvas\xE1sa",16:"Skann ID-en til dyret"
,20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID "+"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Escanear el ID del animal",23:"Hayvan\u0131n tarama kimli\u011Fi",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Bpb={1:"Skenirajte datum ro\u0111enja, molim.",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439\u0442\u0435 \u0434\u0430\u0442\u0430\u0442\u0430 "+
"\u043D\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435, \u043C\u043E\u043B\u044F"
,4:"Naskenujte datum narozen\xED, pros\xEDm.",5:"Skan f\xF8dselsdato, venligst."
,0:"Scan birth date, please",6:"Scan geboortedatum, alstublieft",7:"Skanni s\xFCnnikuup\xE4ev, palun."
,8:"Skannaa syntym\xE4aika, kiitos",9:"Veuillez scanner la date de naissance\xA0!"
,10:"Bitte Geburtsdatum\neinscannen!",11:"\u03A3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE."
,12:"K\xE9rj\xFCk, olvassa be a sz\xFClet\xE9si d\xE1tumot.",16:"Skann f\xF8dselsdato, v\xE6r s\xE5 snill."
,20:"\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, "+"\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430."
,21:"Escanear fecha de nacimiento, por favor",23:"Do\u011Fum tarihini taray\u0131n l\xFCtfen"
,24:"\u0421\u043A\u0430\u043D\u0443\u0439\u0442\u0435 \u0434\u0430\u0442\u0443 "+
"\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430."};C.Bpc={1:"Skenirajte broj markice na uhu, molim vas."
,2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439\u0442\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 \u043C\u0430\u0440\u043A\u0430, "+
"\u043C\u043E\u043B\u044F",4:"Naskenujte, pros\xEDm, \u010D\xEDslo identifika\u010Dn\xEDho \u0161t\xEDtku."
,5:"Scan \xF8rem\xE6rkenummer, venligst.",0:"Scan eartag number, please",6:"Scan Oornummer, alstublieft"
,7:"Skaneeri k\xF5rvam\xE4rgi number, palun.",8:"Skannaa korvamerkin numero, kiitos"
,9:"Veuillez scanner le num\xE9ro de la boucle\xA0!",10:"Bitte Ohrmarkennummer einscannen!"
,11:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03C4\u03B7\u03C2 \u03B5\u03C4\u03B9\u03BA\u03AD\u03C4\u03B1\u03C2 \u03C4\u03BF\u03C5 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE."
,12:"K\xE9rem, olvassa be a f\xFClc\xEDmke sz\xE1m\xE1t.",16:"Skann \xF8remerkenummeret, v\xE6r s\xE5 snill."
,20:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u043D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u043C\u0435\u0442\u043A\u0438."
,21:"Escanear n\xFAmero de etiqueta de o\xEDdo, por favor",23:"Kulak etiketi numaras\u0131n\u0131 taray\u0131n, l\xFCtfen"
,24:"\u0421\u043A\u0430\u043D\u0443\u0439\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"\u0441\u0435\u0440\u0435\u0436\u043A\u0438 \u0434\u043B\u044F \u0432\u0443\u0445\u0430, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430."};C.A$A={1:"Skeniranje u\u0161ne markice"
,2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 "+
"\u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430",4:"Skenov\xE1n\xED elektronick\xE9ho n\xE1u\u0161n\xEDku"
,5:"Scan in elektronisk \xF8rem\xE6rke",0:"Scan in electronic\near tag",6:"Scan electronische tag"
,7:"Skanni elektrooniline\nk\xF5rvam\xE4rk",8:"Lue elektroninen\nkorvamerkki",9:
"Lecture (scan) de la boucle \xE9lectronique",10:"Elektronische Ohrmarke einscannen"
,11:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03CC\n\u03B5\u03BD\u03CE\u03C4\u03B9\u03BF"
,12:"Szkennelje be az elektronikus f\xFCljel\xF6l\u0151t",16:"Skann inn elektronisk\near tag"
,20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0443\u0448\u043D\u043E\u0439 "+
"\u0431\u0438\u0440\u043A\u0438",21:"Escanear en etiqueta\nauricular electr\xF3nica"
,23:"Elektronik yak\u0131n etiketiyle taray\u0131n",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 "+
"\u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"};C.ScanError={
1:"gre\u0161ka pri skeniranju",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435"
,3:"\u6383\u63CF\u932F\u8AA4",4:"Chyba skenov\xE1n\xED",5:"Scanningsfejl",0:"Scan error"
,6:"Fout bij scannen",7:"Skanneerimise viga",8:"Skannausvirhe",9:"Erreur lors du scan"
,10:"Fehler beim Scannen",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B1\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7\u03C2"
,12:"Szkennel\xE9si hiba",16:"Feil ved skanning",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
,21:"Error de escaneo",23:"Hatay\u0131 tara",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F"
};C.ScanNotFound={1:"skenirano nije prona\u0111eno",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u043D\u0435 "+
"\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043E",3:"\u672A\u6383\u63CF\u5230"
,4:"Skenov\xE1n\xED nebylo nalezeno",5:"Scanning ikke fundet",0:"Scan not found"
,6:"Scan niet gevonden",7:"Skanneering pole leitav",8:"Skannausta ei l\xF6ytynyt"
,9:"Scan ne pas trouver",10:"Scan nicht gefunden",11:"\u0397 \u03B1\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7 \u03B4\u03B5\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",12:"Nincs tal\xE1lat",16:"Finner ikke skanningen"
,20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",21:"Escaneo no encontrado"
,23:"Tarama Bulunamad\u0131",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435 "+
"\u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.Asy={1:"skeniranje broja",
2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043D\u043E\u043C\u0435\u0440"
,3:"\u6383\u63CF\u865F\u78BC",4:"Skenovat \u010D\xEDslo",5:"Scanningsnummer",0:"Scan number"
,6:"Nummer scannen",7:"Skanneeringu number",8:"Skannaa numero",9:"Scanner le num\xE9ro"
,10:"Nr. einscannen",11:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C3\u03AC\u03C1\u03C9\u03C3\u03B7\u03C2"
,12:"Sz\xE1molj be",16:"Skann nummer",20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u043C\u0435\u0440"
,21:"Escanear n\xFAmero",23:"Tarama Numaras\u0131",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 \u043D\u043E\u043C\u0435\u0440"
};C.OV={1:"skeniranje transpondera",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u6383\u63CF\u65B0\u7684\u611F\u61C9\u5668",4:"Skenov\xE1n\xED transpond\xE9ru"
,5:"Skan transponderen",0:"Scan in transponder",6:"Diertransponder\ninscannen",7:
"Skaneeri uus",8:"Skannaa transponderi",9:"Scanner transpondeur",10:"Transponder einscannen"
,11:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Transzponder beolvas\xE1sa",16:"Skann transponder",20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,21:"Escanear trans~pondedor del animal",23:"Yeni transponder tara",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.Bpd={1:"Otkriven \u010Dita\u010D barkodova! Promijenite na ekran \'Novo\' \u2014> "+
"\'Masovno snimanje\' kako biste registrirali kupljene \u017Eivotinje?",2:"\u041E\u0442\u043A\u0440\u0438\u0442 \u0435 \u0441\u043A\u0435\u043D\u0435\u0440 "+
"\u0437\u0430 \u0431\u0430\u0440\u043A\u043E\u0434!\n\u041F\u0440\u043E\u043C\u044F\u043D\u0430 "+
"\u043D\u0430 \u0435\u043A\u0440\u0430\u043D \u201E\u041D\u043E\u0432\u043E\u201C "+
"\u2014> \u201E\u0413\u0440\u0443\u043F\u043E\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435\u201C, "+
"\u0437\u0430 \u0434\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 "+
"\u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 "+"\u0432\u0430\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438?"
,4:"\u010Cte\u010Dka \u010D\xE1rov\xFDch k\xF3d\u016F detekov\xE1na! P\u0159epn\u011Bte "+
"na obrazovku \'Nov\xFD\' -> \'Hromadn\xE9 z\xE1znamy\' pro registraci zakoupen\xFDch "+
"zv\xED\u0159at.",5:"Stregkodescanner registreret!\nSkift til sk\xE6rmen \'Ny\' \u2014> \'Masseoptagelse\' "+
"for at registrere dine k\xF8bte dyr?",0:"Barcode scanner detected!\nChange to screen \u2019New\u2019 \u2014> \u2019Bulk "+
"recording\u2019 in order to register your purchased animals?",6:"Barcode scanner gedetecteerd! Wijzig naar scherm \'Nieuw\' \u2014> \'Bulkopname\' "+
"om uw gekochte dieren te registreren?",7:"Triipkoodi skanner tuvastatud! Muuda ekraanil \"Uus\" -> \"Hulgisalvestus\", "+
"et registreerida ostetud loomad?",10:"Barcodescanner erkannt!\nBitte zum Bild~schirm \u2019Neu\u2019 \u2014> "+
"\u2019Massen~zugang\u2019 wechseln, dort k\xF6nnen Sie ihre zuge~kauften "+"Tiere erfassen!"
,11:"\u0395\u03BD\u03C4\u03BF\u03C0\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 \u03C3\u03B1\u03C1\u03C9\u03C4\u03AE\u03C2 "+
"\u03B3\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03BF\u03CD \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1! "+
"\u0391\u03BB\u03BB\u03AC\u03BE\u03C4\u03B5 \u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 "+
"\"\u039D\u03AD\u03BF\" -> \"\u039C\u03B1\u03B6\u03B9\u03BA\u03AE \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE\" "+
"\u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03B1 \u03B1\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 "+"\u03C3\u03B1\u03C2 \u03B6\u03CE\u03B1."
,12:"Vonalk\xF3dolvas\xF3 \xE9szlelve! V\xE1ltson a \'New\' \u2014> \'Bulk "+"recording\' k\xE9perny\u0151re az \xE1llatok regisztr\xE1l\xE1s\xE1hoz?"
,16:"Strekkodeskanner oppdaget! Bytt til skjermen \u2019Ny\u2019 \u2014> \u2019Masseopptak\u2019 "+
"for \xE5 registrere dine kj\xF8pte dyr.",20:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0430 "+
"\u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D! \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 "+
"\u043D\u0430 \u044D\u043A\u0440\u0430\u043D \"\u041D\u043E\u0432\u044B\u0439\" "+
"\u2014> \"\u041C\u0430\u0441\u0441\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C\", "+
"\u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0432\u0430\u0448\u0438\u0445 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445.",24:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0456\u0432 "+
"\u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E!\n\u041F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C "+
"\u043D\u0430 \u0435\u043A\u0440\u0430\u043D \"\u041D\u043E\u0432\u0438\u0439\" "+
"\u2014> \"\u041C\u0430\u0441\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441\", "+
"\u0449\u043E\u0431 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u0432\u0430\u0448\u0456 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0456 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0438?"
};C.Bpe={1:"Skenir ure\u0111aj uklonjen!\n\nPreusmjeriti na ekran za dodjeljivanje?\n\nTamo "+
"mo\u017Eete dodijeliti transpondere va\u0161im kupljenim \u017Eivotinjama.",2:"\u0421\u043A\u0435\u043D\u0435\u0440\u044A\u0442 \u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442!\n\n\u041F\u0440\u0435\u043D\u0430\u0441\u043E\u0447\u0432\u0430\u043D\u0435 "+
"\u043A\u044A\u043C \u0435\u043A\u0440\u0430\u043D\u0430 \u0437\u0430 \u043F\u0440\u0438~\u0441\u0432\u043E\u044F\u0432~\u0430\u043D\u0435?\n\u041A\u044A\u0434\u0435\u0442\u043E "+
"\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u0435 "+
"\u0440\u0435\u0441~\u043F\u043E\u043D\u0434\u0435\u0440\u0438 \u043D\u0430 "+"\u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 "+
"\u0432\u0430\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438.",4:"Skenov\xE1n\xED odstran\u011Bno!\n\nP\u0159esm\u011Brovat na obrazovku "+
"\xFAkol\u016F?\nTam m\u016F\u017Eete p\u0159i\u0159azovat odpov\xEDda\u010De "+
"ke koupen\xFDm zv\xED\u0159at\u016Fm.",5:"Scanner fjernet!\n\nOmdiriger til opgavesk\xE6rmen?\nDer kan du tildele "+
"transpondere til dine k\xF8bte dyr.",0:"Scanner removed!\n\nRedirect to as~sign~ment screen?\nThere you can assign "+
"trans~ponders to your purchased animals.",6:"Scanner verwijderd!\n\nDoorverwijzen naar het toewijzingsscherm?\nDaar "+
"kunt u transponders toewijzen aan uw gekochte dieren.",7:"Skanner eemaldatud!\n\nSuunata \xFClesannete ekraanile?\nSeal saate oma "+
"ostetud loomadele transpondereid m\xE4\xE4rata.",10:"Scanner entfernt!\n\nJetzt zum Zuordnungs~bild~schirm umleiten?\nDort "+
"k\xF6nnen Sie ihren zugekauften Tieren Transpon~der zuweisen.",11:"\u039F \u03C3\u03B1\u03C1\u03C9\u03C4\u03AE\u03C2 \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5!\n\n\u0391\u03BD\u03B1\u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 "+
"\u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 \u03B1\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7\u03C2;\n\u0395\u03BA\u03B5\u03AF "+
"\u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03BD\u03B1\u03B8\u03AD\u03C3\u03B5\u03C4\u03B5 "+
"\u03B4\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AC \u03C3\u03C4\u03B1 "+
"\u03B1\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03C3\u03B1\u03C2 "+
"\u03B6\u03CE\u03B1.",12:"Szkennel\u0151 elt\xE1vol\xEDtva!\n\n\xC1tir\xE1ny\xEDt\xE1s a feladat "+
"k\xE9perny\u0151re?\nOtt rendelhet transzpondereket megv\xE1s\xE1rolt "+"\xE1llataihoz."
,16:"Skanner fjernet!\n\nOmdirigere til oppgaveskjerm?\nDer kan du tilordne "+"transpondere til dine kj\xF8pte dyr."
,20:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0443\u0434\u0430\u043B\u0451\u043D!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0437\u0430\u0434\u0430\u043D\u0438\u0439?\n\n\u0422\u0430\u043C "+
"\u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B "+"\u0432\u0430\u0448\u0438\u043C \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C.",24:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u0434\u043E \u0435\u043A\u0440\u0430\u043D\u0443 \u0437\u0430\u0432\u0434\u0430\u043D\u044C?\n\u0422\u0430\u043C "+
"\u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438 "+"\u0432\u0430\u0448\u0438\u043C \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u043C "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C."};C.AUJ={1:"tra\u017Eiti \u017Eivotinju"
,2:"\u0422\u044A\u0440\u0441\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E",3:
"\u641C\u5C0B\u5C0F\u725B",4:"Vyhled\xE1n\xED zv\xED\u0159ete",5:"S\xF8g dyr",0:
"Search animal",6:"Dier zoeken",7:"Otsi looma",8:"Etsi el\xE4in",9:"Rechercher un animal"
,10:"Tier suchen",11:"\u0391\u03BD\u03B1\u03B6\u03B7\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B6\u03CE\u03BF"
,12:"Keres\xE9s \xE1llat",16:"S\xF8k etter dyr",20:"\u041F\u043E\u0438\u0441\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Buscar animal",23:"Hayvan Ara",24:"\u041F\u043E\u0448\u0443\u043A \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A$E={1:"pretra\u017Eivanje ...",2:"\u0422\u044A\u0440\u0441\u0435\u043D\u0435..."
,3:"\u641C\u5C0B\u4E2D...",4:"Prob\xEDh\xE1 vyhled\xE1v\xE1n\xED",5:"S\xF8ger\u2026"
,0:"Searching\u2026",6:"Zoeken",7:"Otsib...",8:"Etsii...",9:"Recherche...",10:"Suche\u2026"
,11:"\u0393\u03B9\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7..."
,12:"Keres\xE9s\u2026",16:"S\xF8ker",20:"\u041F\u043E\u0438\u0441\u043A...",21:"Buscando..."
,23:"Aran\u0131yor",24:"\u041F\u043E\u0448\u0443\u043A..."};C.A$F={1:"odaberi \u017Eivotinju"
,2:"\u0418\u0437\u0431\u043E\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u9078\u64C7\u5C0F\u725B",4:"Vyberte zv\xED\u0159e",5:"V\xE6lg dyr",0:"Select animal"
,6:"Dier selecteren",7:"Vali loom",8:"Valitse el\xE4in",9:"S\xE9lectionnez l\u2019animal"
,10:"Tier ausw\xE4hlen",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B6\u03CE\u03BF"
,12:"V\xE1lassz \xE1llatot",16:"Velg dyr",20:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Seleccionar animal",23:"Hayvan Se\xE7in",24:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.A$G={1:"odaberi majku",2:"\u0418\u0437\u0431\u043E\u0440 \u043D\u0430 \u043C\u0430\u0439\u043A\u0430"
,4:"Vyberte p\u0159ehradu",5:"V\xE6lg d\xE6mning",0:"Select dam",6:"Selecteer Moederdier"
,7:"Vali tamm",8:"Valitse em\xE4",9:"S\xE9lectionner la m\xE8re",10:"Muttertier ausw\xE4hlen"
,11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03BC\u03B7\u03C4\u03AD\u03C1\u03B1"
,12:"V\xE1lassz g\xE1tat",16:"Mordyr",20:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435",21:"Seleccionar madre",23:"Anne Hayvan Se\xE7in"
,24:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443"};C.AhL={1:"Serijski broj",2:"\u0421\u0435\u0440\u0438\u0435\u043D \u043D\u043E\u043C\u0435\u0440"
,4:"S\xE9riov\xE9 \u010D\xEDslo",5:"Serienummer",0:"Serial number",6:"Serienummer"
,7:"Seerianumber",8:"Sarjanumero",9:"Num\xE9ro de s\xE9rie",10:"Seriennummer",11:
"\u03A3\u03B5\u03B9\u03C1\u03B9\u03B1\u03BA\u03CC\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2"
,12:"Sorozatsz\xE1m",16:"Serienummer",20:"\u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440"
,21:"N\xFAmero serial",23:"Seri Numaras\u0131",24:"\u0421\u0435\u0440\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440"
};C.AGJ={1:"servis",2:"\u0421\u0435\u0440\u0432\u0438\u0437",4:"Slu\u017Eba",0:"Service"
,7:"Seadme hooldus",8:"Huolto",11:"\u03A3\u03C5\u03BD\u03C4\u03AE\u03C1\u03B7\u03C3\u03B7"
,12:"Szolg\xE1ltat\xE1s",20:"\u0421\u0435\u0440\u0432\u0438\u0441",21:"Servicio"
,23:"Servis",24:"\u0421\u0435\u0440\u0432\u0456\u0441"};C.AkU={1:"postaviti filtere"
,2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439 \u0444\u0438\u043B\u0442\u044A\u0440"
,3:"\u8A2D\u7F6E\u904E\u6FFE\u5668",4:"Nastavte filtr",5:"S\xE6t filter",0:"Set filter"
,6:"Filter zetten",7:"Sea filter",8:"Aseta suodatin",9:"D\xE9finir le filtre",10:
"Filter setzen",11:"\u039A\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C6\u03AF\u03BB\u03C4\u03C1\u03BF\u03C5"
,12:"Sz\u0171r\u0151 be\xE1ll\xEDt\xE1sa",16:"Sett filter",20:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440"
,21:"Fijar filtro",23:"Filtreyi ayarla",24:"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440"
};C.Settings={1:"postavke",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
,3:"\u8A2D\u5B9A\u503C",4:"Nastaven\xED",5:"Indstillinger",0:"Settings",6:"Instellingen"
,7:"Seaded",8:"Asetukset",9:"R\xE9glages",10:"Einstellungen",11:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2"
,12:"Be\xE1ll\xEDt\xE1sok",16:"Innstillinger",20:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
,21:"Ajustes",23:"Ayarlar",24:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443~\u0432\u0430\u043D\u043D\u044F"
};C.SevereError={1:"Gre\u0161ka na serveru: {1}",2:"\u0421\u0435\u0440\u0438\u043E\u0437\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430: "+
"{1}",3:"\u56B4\u91CD\u932F\u8AA4\uFF1A{1}",4:"Z\xE1va\u017En\xE1 chyba",5:"Alvorlig fejl: {1}"
,0:"Severe error: {1}",6:"Zwaar wegende fout: {1}",7:"Ohtlik viga: {1}",8:"Vakava virhe: {1}"
,9:"Erreur grave\xA0: {1}",10:"Schwer~wiegender Fehler: {1}",11:"\u03A3\u03BF\u03B2\u03B1\u03C1\u03CC \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1: "+
"{1}",12:"S\xFAlyos hiba: {1}",16:"Alvorlig feil: {1}",20:"\u0421\u0435\u0440\u044A\u0451\u0437\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430: "+
"{1}",21:"Error grave: {1}",23:"Ciddi hata",24:"\u0421\u0435\u0440\u0439\u043E\u0437\u043D\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430: "+
"{1}"};C.Afo={1:"Spol",2:"\u041F\u043E\u043B",3:"\u6027\u5225",4:"Rod",5:"Seks",
0:"Sex",6:"Ge~slacht",7:"Sugu",8:"Suku~puoli",9:"Sexe",10:"Ge~schlecht",11:"\u03A6\u03CD\u03BB\u03BF"
,12:"Szex",16:"Kj\xF8nn",20:"\u041F\u043E\u043B",21:"Sexo",23:"Cins~iyet",24:"\u0421\u0442\u0430\u0442\u044C"
};C.A$K={1:"Spol",2:"\u041F\u043E\u043B",3:"\u6027\u5225",4:"Rod",5:"Seks",0:"Sex"
,6:"Ge~slacht",7:"Sugu",8:"Suku~puoli",9:"Sexe",10:"Ge~schl.",11:"\u03A6\u03CD\u03BB\u03BF"
,12:"Szex",16:"Kj\xF8nn",20:"\u041F\u043E\u043B",21:"Sexo",23:"Cins~iyet",24:"\u0421\u0442\u0430\u0442\u044C"
};C.Bpu={1:"Ovca/koza",2:"\u041E\u0432\u0446\u0430/\u043A\u043E\u0437\u0430",4:"ovce/koza"
,5:"F\xE5r/ged",0:"Sheep/goat",6:"Schaap/Geit",7:"Lammas/kits",8:"Lammas/vuohi",
9:"Mouton/Ch\xE8vre",10:"Schaf/Ziege",11:"\u03A0\u03C1\u03CC\u03B2\u03B1\u03C4\u03BF/\u03BA\u03B1\u03C4\u03C3\u03AF\u03BA\u03B9"
,12:"juh/kecske",16:"Sau/geit",20:"\u041E\u0432\u0446\u0430/\u043A\u043E\u0437\u0430"
,21:"Oveja/cabra",23:"Koyun/Ke\xE7i",24:"\u0412\u0456\u0432\u0446\u044F/\u043A\u043E\u0437\u0430"
};C.A$N={1:"Isklju\u010Diti",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435"
,3:"\u95DC\u9589",4:"Vypnout",5:"Luk ned",0:"Shut down",6:"Uit schakelen",7:"L\xFClita v\xE4lja"
,8:"Sulje laite",9:"\xC9teindre",10:"Ausschalten",11:"\u03A3\u03B2\u03AE\u03C3\u03B9\u03BC\u03BF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"Le\xE1ll\xEDt",16:"Skru av",20:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C"
,21:"Apagar",23:"Kapat",24:"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438"};C.
A$O={1:"Isklju\u010Di ure\u0111aj nakon",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0441\u043B\u0435\u0434",4:"Vypnout za\u0159\xEDzen\xED po",5:"Sluk enheden efter"
,0:"Shutdown device after",6:"Zet uit na",7:"L\xFClita seade v\xE4lja p\xE4rast"
,8:"Sammuta laite t\xE4m\xE4n j\xE4lkeen",9:"\xC9teindre l\'appareil apr\xE8s",10:
"Ger\xE4t abschalten nach",11:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BC\u03B5\u03C4\u03AC",12:"Kapcsolja ki az eszk\xF6zt ut\xE1na",16:"Sl\xE5 av enheten etter"
,20:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E "+
"\u043F\u043E\u0441\u043B\u0435",21:"Apagar el dispositivo despu\xE9s de",23:"Sonras\u0131nda Ayg\u0131t\u0131 Kapat"
,24:"\u0412\u0438\u043C\u043A\u043D\u0456\u0442\u044C \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 "+
"\u043F\u0456\u0441\u043B\u044F"};C.BpB={1:"Pojedina\u010Dni pogled na \u017Eivotinju"
,2:"\u0418\u0437\u0433\u043B\u0435\u0434 \u043D\u0430 \u0435\u0434\u043D\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",4:"Pohled na jedno zv\xED\u0159e",5:
"Enkelt dyrevisning",0:"Single animal view",6:"Individueel dier zicht",7:"\xDCksiku looma vaade"
,8:"Yhden el\xE4imen n\xE4kym\xE4",9:"Aper\xE7u de l\'animal individuel",10:"Einzeltieransicht"
,11:"\u039C\u03BF\u03BD\u03AE \u03B8\u03AD\u03B1 \u03B6\u03CE\u03BF\u03C5",12:"Egyetlen \xE1llat n\xE9zete"
,16:"Enkelt dyreutsikt",20:"\u041E\u0434\u0438\u043D\u043E\u043A\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Vista de animal individual",23:"Tek hayvan g\xF6r\xFCn\xFCm\xFC",24:"\u041E\u0434\u0438\u043D\u0438\u0447\u043D\u0438\u0439 \u0432\u0438\u0434 "+
"\u043D\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"};C.BpC={1:"jedno grlo u leglu"
,2:"\u0415\u0434\u043D\u043E \u0440\u0430\u0436\u0434\u0430\u043D\u0435",4:"Jednotliv\xFD porod"
,5:"Enkeltf\xF8dsel",0:"Single birth",6:"Eenling",7:"\xDCksik tall",8:"Yhden syntym\xE4"
,9:"Unique",10:"Einling",11:"\u039C\u03BF\u03BD\u03AE \u03B3\u03AD\u03BD\u03BD\u03B1"
,12:"Egysz\xFCl\xF6tt",16:"Enkel f\xF8dsel",20:"\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0435 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
,21:"Nac. Individual",23:"Tek do\u011Fum",24:"\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u0435 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A$R={1:"Nastavite bez skeniranja transpondera",2:"ESC: \u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0435\u0442\u0435 \u0431\u0435\u0437 "+
"\u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,4:"Pokra\u010Dujte bez skenov\xE1n\xED transpond\xE9ru.",5:"Forts\xE6t uden transponder-scanning"
,0:"ESC: Proceed without transponder scan",6:"ESC: werkt zonder transponder scan"
,7:"J\xE4tka ilma transpondri skaneerimiseta",8:"ESC: Jatka ilman skannausta",9:
"ESC : continuer sans scanner",10:"ESC: Ohne Scan~vorgang fortfahren",11:"ESC: \u03A3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03C4\u03B5 \u03C7\u03C9\u03C1\u03AF\u03C2 "+
"\u03C3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03B1"
,12:"ESC: Folytat\xE1s transzp. szkennel\xE9s n\xE9lk\xFCl",16:"ESC: Fortsett uten transponder-skanning"
,20:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0431\u0435\u0437 "+
"\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F "+"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,21:"ESC: Continuar sin escaneo",23:"ESC: Aktar\u0131c\u0131 taramas\u0131 yapmadan devam edin"
,24:"ESC: \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0439\u0442\u0435 "+"\u0431\u0435\u0437 \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"};C.A$S={
1:"Softver",2:"\u0421\u043E\u0444\u0442\u0443\u0435\u0440",4:"Software in Czech is \"software\"."
,5:"Software p\xE5 dansk er \"software\".",0:"Software",7:"Tarkvara",8:"Ohjelma"
,9:"Logiciel",11:"\u039B\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC",12:"Szoftver"
,16:"Programvare",20:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435"
,23:"Yaz\u0131l\u0131m",24:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F"
};C.A$T={1:"prodato za dalji uzgoj",2:"\u041F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E \u0437\u0430 \u0440\u0430\u0437\u043F\u043B\u043E\u0434"
,4:"Prod\xE1no pro chov",5:"Solgt til avl",0:"Sold for breeding",6:"Verkocht voor fokkerij"
,7:"M\xFC\xFCdud aretuseks",8:"Myyd\xE4\xE4n jalostukseen",9:"Vendu pour la reproduction"
,10:"Verkauf zur Zucht",11:"\u03A0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B3\u03B9\u03B1 \u03B1\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE"
,12:"Eladva teny\xE9szt\xE9sre",16:"Solgt til avl",20:"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F"
,21:"Vendido para cr\xEDa",23:"Yeti\u015Ftirilmek \xFCzere sat\u0131l\u0131yor",
24:"\u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u043B\u044F \u0440\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F"
};C.AGX={1:"pasmina",2:"\u0412\u0438\u0434\u043E\u0432\u0435",4:"Druh",5:"Arter"
,0:"Species",6:"soorten",7:"Liik",8:"Laji",9:"Esp\xE8ces",10:"Tierart",11:"\u0395\u03AF\u03B4\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,12:"Fajok",16:"Arter",20:"\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Especie",23:"T\xFCrler",24:"\u0412\u0438\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A$U={1:"pokrenuti",2:"\u0421\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u555F\u52D5",4:"Uveden\xED do provozu",5:"Ibrugtagning",0:"Start-up",6:"Inbedrijfname"
,7:"K\xE4ivitub",8:"Aloittaa",9:"Mise en route",10:"Inbetriebnahme",11:"\u0395\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7"
,12:"Start-up in Hungarian is \"startup\".",16:"Start opp",20:"\u0412\u0432\u043E\u0434 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E"
,21:"Puesta en marcha",23:"Ba\u015Flatma",24:"\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044E"
};C.A$V={1:"Po\u010Detni ekran",2:"Start- up \u0435\u043A\u0440\u0430\u043D",4:"\xDAvodn\xED obrazovka"
,5:"Startsk\xE6rm",0:"Start-up screen ",6:"scherm opstarten",7:"K\xE4ivitusekraan"
,8:"Aloitusn\xE4ytt\xF6",9:"\xC9cran d\'accueil",10:"Startbildschirm",11:"\u039F\u03B8\u03CC\u03BD\u03B7 \u03B5\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Ind\xEDt\xF3 k\xE9perny\u0151",16:"Oppstartsskjerm",20:"\u042D\u043A\u0440\u0430\u043D \u0437\u0430\u043F\u0443\u0441\u043A\u0430"
,21:"Pantalla de inicio",23:"Ba\u015Flatma Ekran\u0131",24:"\u0415\u043A\u0440\u0430\u043D \u0437\u0430\u043F\u0443\u0441\u043A\u0443"
};C.EN={1:"Dr\u017Eava",2:"\u0421\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,4:"St\xE1t",5:"Stat",0:"State",6:"Provincie",7:"Olek",8:"Tila",9:"\xC9tat",10:"Bundesland"
,11:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7",12:"\xC1llam",16:"Tilstand"
,20:"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F "+
"\u0437\u0435\u043C\u043B\u044F",21:"Estado",23:"Durum",24:"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0435\u043C\u043B\u044F"
};C.ST={1:"Status baterije",2:"\u0421\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u5145\u96FB\u72C0\u614B",4:"Stav nab\xEDjen\xED",5:"Tilstand af opladning",
0:"State of charge",6:"Batterijstatus",7:"Aku tase",8:"Lataustila",9:"Niveau de charge\nde la batterie"
,10:"Ladezustand Batterie",11:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2"
,12:"T\xF6lt\xF6tts\xE9gi szint",16:"Ladnings tilstand",20:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u0430 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0438",21:"Estado de carga de la bater\xEDa"
,23:"\u015Earz Durumu",24:"\u0421\u0442\u0430\u043D \u0437\u0430\u0440\u044F\u0434\u0443 \u0431\u0430\u0442\u0430\u0440\u0435\u0457"
};C.AGZ={1:"status",2:"\u0421\u0442\u0430\u0442\u0443\u0441",3:"\u72C0\u614B",4:
"Stav",0:"Status",7:"Seisund",8:"Tila",9:"Statut",11:"\u0398\u03AD\u03C3\u03B7",
12:"\xC1llapot",20:"\u0421\u0442\u0430\u0442\u0443\u0441",21:"Estado",23:"Durum"
,24:"\u0421\u0442\u0430\u0442\u0443\u0441"};C.BpM={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no dodana na spisak \u017Eivotinja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0435 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u043E \u043A\u044A\u043C "+"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0441 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"ID\u70BA{1}\u725B\u96BB\u5DF2\u6210\u529F\u7684\u52A0\u5230\u8B66\u544A\u540D\u55AE\u4E2D\uFF01"
,4:"Zv\xED\u0159e (ID {1}) \xFAsp\u011B\u0161n\u011B p\u0159id\xE1no do seznamu "+
"alarm\u016F",5:"Dyr med ID {1} er succesfuldt tilf\xF8jet til alarmlisten!",0:"Animal with ID {1} success~fully added to alarm list!"
,6:"Dier met ID {1} is succesvol toegevoegt aan alarmlijst!",7:"Loom edukalt ID {1} sisesatud hoiatuste nimekirja"
,8:"El\xE4in ID {1} lis\xE4tty onnistuneesti h\xE4lytyslistalle!",9:"Animal avec ID {1} ajout\xE9 \xE0 la liste d\u2019alarme avec succ\xE8s"
,10:"Tier mit ID {1} wurde erfolgreich zur Alarmliste hinzugef\xFCgt!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1. \u03C4\u03B1\u03C5\u03C4. "+
"{1} \u03C0\u03C1\u03BF\u03C3\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD"
,12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen hozz\xE1adva a riaszt\xE1si "+
"list\xE1hoz!",16:"Dyr med ID {1} ble lagt til alarm listen!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0442\u0440\u0435\u0432\u043E\u0433!",21:"Se ha agregado el animal con ID {1} a la lista de alarmas con \xE9xito."
,23:"Alarm listesine ekleme ba\u015Far\u0131l\u0131",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0434\u043E\u0434\u0430\u043D\u0430 \u0443 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0442\u0440\u0438\u0432\u043E\u0433!"};C.BpN={1:"\u017Divotinja s ID {1} uspje\u0161no dodana na listu pra\u0107enja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u0435\u043D\u043E \u043A\u044A\u043C \u0441\u043F\u0438\u0441\u044A\u043A\u0430 "+
"\u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435!",4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B p\u0159id\xE1no na "+
"sledovac\xED seznam!",5:"Dyr med ID {1} er succesfuldt tilf\xF8jet til overv\xE5gningslisten!"
,0:"Animal with ID {1} success~fully added to watch list!",6:"Dier met nummer {1} Succesvol toegevoegd aan Watchlist"
,7:"Loom ID-ga {1} on edukalt j\xE4lgimisnimekirja lisatud!",8:"El\xE4in, jonka tunnus on {1}, lis\xE4ttiin tarkkailulistalle!"
,9:"L\'animal avec l\'ID {1} a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 la liste "+
"de suivi\xA0!",10:"Tier mit der ID {1} wurde erfolgreich zur Beobachtungs~liste hinzugef\xFCgt!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 {1} \u03C0\u03C1\u03BF\u03C3\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2!"
,12:"Az {1} azonos\xEDt\xF3j\xFA \xE1llat sikeresen hozz\xE1adva a megfigyel\xE9si "+
"list\xE1hoz!",16:"Dyr med ID {1} ble vellykket lagt til overv\xE5kningslisten!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 ID {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F!",21:"Animal con ID {1} a\xF1adido exitosamente a la lista de seguimiento."
,23:"{1} kimlikli hayvan ba\u015Far\u0131yla izleme listesine eklendi!",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437 ID {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0434\u043E\u0434\u0430\u043D\u0430 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F!"
};C.BpO={1:"Bootloader je uspje\u0161no a\u017Euriran.\nUSB flash disk se mo\u017Ee "+
"sigurno ukloniti.",2:"\u0411\u0443\u0443\u0442\u043B\u043E\u0443\u0434\u044A\u0440\u044A\u0442 "+
"\u0431\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.\nUSB \u0444\u043B\u0430\u0448 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u043C\u043E\u0436\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E."
,4:"Zavad\u011B\u010D byl \xFAsp\u011B\u0161n\u011B aktualizov\xE1n.\nUSB flash "+
"disk lze bezpe\u010Dn\u011B odebrat.",5:"Bootloaderen blev opdateret med succes.\nUSB-n\xF8glen kan nu fjernes sikkert."
,0:"Bootloader was updated successfully.\nUSB flash drive can be safely removed."
,6:"Bootlader is succesvol geupdate",7:"Alglaadur on edukalt uuendatud.\nUSB m\xE4lupulk v\xF5ib ohutult eemaldada."
,8:"Bootloader on p\xE4ivitetty onnistuneesti! USB-tikku voidaan irrottaa!",9:"Le bootloader a \xE9t\xE9 mis \xE0 jour avec succ\xE8s\xA0! La cl\xE9 USB "+
"peut \xEAtre retir\xE9e\xA0!",10:"Bootloader wurde erfolgreich aktualisiert! USB-Stick kann abgezogen werden!"
,11:"\u03A4\u03BF bootloader \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2.\n\u03A4\u03BF USB flash "+"drive \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03BC\u03B5 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1.",12:"A rendszerbet\xF6lt\u0151 sikeresen friss\xFClt.\nAz USB flash meghajt\xF3 "+
"biztons\xE1gosan elt\xE1vol\xEDthat\xF3.",16:"Oppstartslasteren ble oppdatert med hell.\nUSB-minnepinnen kan trygt fjernes."
,20:"\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A \u0431\u044B\u043B "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.\nUSB\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C "+
"\u043C\u043E\u0436\u043D\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0432\u044B\u0442\u0430\u0449\u0438\u0442\u044C.",21:"El cargador de arranque se actualiz\xF3 con \xE9xito.\nLa unidad flash "+
"USB se puede retirar de forma segura.",23:"\xD6ny\xFCkleyici ba\u015Far\u0131yla g\xFCncellendi.\nUSB flash s\xFCr\xFCc\xFC "+
"g\xFCvenli bir \u015Fekilde kald\u0131r\u0131labilir.",24:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0447 "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E.\nUSB "+
"\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447 \u043C\u043E\u0436\u043D\u0430 "+
"\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u0442\u0438."
};C.BpP={1:"Povezani transponder za \u017Eivotinju sa ID {1} je uspje\u0161no zamijenjen!"
,2:"\u0421\u0432\u044A\u0440\u0437\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1} \u0431\u0435\u0448\u0435 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u0437\u0430\u043C\u0435\u043D\u0435\u043D!",4:"P\u0159ipojen\xFD transpond\xE9r pro zv\xED\u0159e s ID {1} byl \xFAsp\u011B\u0161n\u011B "+
"vym\u011Bn\u011Bn!",5:"Transponderen forbundet til dyret med ID {1} blev succesfuldt udskiftet!"
,0:"Linked transponder for animal with ID {1} was success~fully replaced!",6:"Linked transponder voor dier met ID {1} is succes~vol teruggeplaats"
,7:"Looma ID {1}ga seotud transponder vahetati edukalt v\xE4lja!",8:"El\xE4imelle tunnuksella {1} m\xE4\xE4ritetty transponderi on vaihdettu "+
"onnistuneesti!",9:"Le transpondeur attribu\xE9 \xE0 l\'animal avec l\'ID {1} a \xE9t\xE9 remplac\xE9 "+
"avec succ\xE8s\xA0!",10:"Der dem Tier mit der ID {1} zugeordnete Transponder wurde erfolgreich "+
"ersetzt!",11:"\u03A4\u03BF \u03C3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF "+
"\u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03B1 \u03B3\u03B9\u03B1 "+"\u03C4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B1\u03BD\u03C4\u03B9\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03AC\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!",12:"Az \xE1llat azonos\xEDt\xF3j\xE1val ({1}) t\xE1rs\xEDtott transzponder "+
"sikeresen kicser\xE9lve!",16:"Koblet transponder for dyr med ID {1} ble vellykket erstattet!"
,20:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0434\u043B\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+"\u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C "+
"{1} \u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0435\u043D!"
,21:"\xA1El transpondedor vinculado para el animal con ID {1} fue reemplazado "+
"con \xE9xito!",23:"{1} kimlikli hayvan i\xE7in ba\u011Flant\u0131l\u0131 aktar\u0131c\u0131 "+
"ba\u015Far\u0131yla de\u011Fi\u015Ftirildi!",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440, \u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0438\u0439 "+
"\u0437 \u0442\u0432\u0430\u0440\u0438\u043D\u043E\u044E \u0437 ID {1}, "+"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043C\u0456\u043D\u0435\u043D\u043E!"
};C.BpQ={1:"{1} obavijesti o ro\u0111enju su uspje\u0161no obra\u0111ene!",2:"{1} \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",4:"{1} ozn\xE1men\xED o narozen\xED bylo \xFAsp\u011B\u0161n\u011B vy\u0159\xEDzeno!"
,5:"{1} f\xF8dselsanmeldelser blev ryddet med succes!",0:"{1} notices of birth were cleared successfully!"
,6:"{1} meldinge voor geboortes zijn succesvol geklaard",7:"{1} s\xFCnniteavitust t\xFChistatud!"
,8:"{1} Syntym\xE4ilmoitusten poistaminen onnistui!",9:"{1} D\xE9clarations de naissance ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,10:"{1} Geburts~meldungen wurden erfolg~reich gel\xF6scht!",11:"{1} \u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"{1} sz\xFClet\xE9si \xE9rtes\xEDt\xE9st sikeresen t\xF6r\xF6lt\xFCnk!"
,16:"{1} F\xF8dselsmeldinger ble slettet!",20:"{1} \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u0431\u044B\u043B\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",21:"{1} Notificaciones de nacimiento se eliminaron con \xE9xito."
,23:"{1} do\u011Fum bildirimi ba\u015Far\u0131yla temizlendi!",24:"{1} \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u043B\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"};C.
BpR={1:"{1} obavijesti o kupovini su uspje\u0161no o\u010Di\u0161\u0107ene!",2:"{1} \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",4:"{1} ozn\xE1men\xED o n\xE1kupu bylo \xFAsp\u011B\u0161n\u011B vy\u0159\xEDzeno!"
,5:"{1} k\xF8bsmeddelelser blev ryddet med succes!",0:"{1} notices of purchase were cleared successfully!"
,6:"{1} meldinge voor koop zijn succesvol geklaard",7:"{1} ostuteadet kustutati edukalt!"
,8:"{1} ostoilmoitusta tyhjennettiin onnistuneesti!",9:"{1} Les donn\xE9es d\'achats ont \xE9t\xE9 supprim\xE9s avec succ\xE8s\xA0!"
,10:"{1} Zugangs~meldungen wurden erfolg~reich gel\xF6scht!",11:"\u039F\u03B9 {1} \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03B5\u03BA\u03BA\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"{1} v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9st sikeresen t\xF6r\xF6lt\xFCnk!"
,16:"{1} kj\xF8psvarsel ble ryddet med suksess!",20:"{1} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u044B\u043B\u043E "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E!"
,21:"\xA1{1} notificaciones de compra fueron eliminadas con \xE9xito!",23:"{1} sat\u0131n alma bildirimi ba\u015Far\u0131yla temizlendi!"
,24:"{1} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C "+"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0431\u0443\u043B\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u043E!"
};C.SuccessClearAnimalLoss={1:"Obavijest o gubitku \u017Eivotinje je uspje\u0161no uklonjena!"
,2:"\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u0435\u0442\u043E \u0437\u0430 "+
"\u0437\u0430\u0433\u0443\u0431\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0431\u0435\u0448\u0435 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",4:"Ozn\xE1men\xED o ztr\xE1t\u011B zv\xED\u0159ete bylo \xFAsp\u011B\u0161n\u011B "+
"vy\u0159\xEDzeno!",5:"Meddelelse om tab af dyr blev ryddet succesfuldt!",0:"Notice of animal loss was cleared successfully!"
,6:"Meldingen voor dierverliezen zijn succesvol",7:"Surnult s\xFCnni teavitus t\xFChistatud!"
,8:"Ilmoitus el\xE4inten katoamisesta on poistettu onnistuneesti!",9:"La d\xE9claration de perte d\'animal a \xE9t\xE9 supprim\xE9e avec succ\xE8s\xA0!"
,10:"Meldung des Tierverlusts wurde erfolgreich gel\xF6scht!",11:"\u0397 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1\u03C2 "+
"\u03B6\u03CE\u03BF\u03C5 \u03BA\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!",12:"Az \xE1llat elveszt\xE9s\xE9nek bejelent\xE9se sikeresen t\xF6r\xF6lve!"
,16:"Melding om tap av dyr ble fjernet med hell!",20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u043F\u043E\u0442\u0435\u0440\u044F\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,21:"La notificaci\xF3n de p\xE9rdida de animal se elimin\xF3 con \xE9xito.",23:
"Hayvan kayb\u0131 bildirimi ba\u015Far\u0131yla temizlendi!",24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u0432\u0442\u0440\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.BpS={1:"Obavijest o ro\u0111enju \u017Eivotinje {1} je uspje\u0161no odobrena!"
,2:"\u0421\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u0442\u043E \u0437\u0430 "+
"\u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"{1} \u0431\u0435 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u043E "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,4:"Ozn\xE1men\xED o narozen\xED zv\xED\u0159ete {1} bylo \xFAsp\u011B\u0161n\u011B "+
"zpracov\xE1no!",5:"Meddelelse om f\xF8dsel for dyr {1} blev ryddet med succes!"
,0:"Notice of birth for animal {1} was cleared successfully!",6:"Melding voor geboort voor dier met ID {1} is succesvol geklaard"
,7:"Looma {1} s\xFCnniteavitus t\xFChistatud!",8:"El\xE4imen {1} syntym\xE4ilmoitus poistettiin onnistuneesti!"
,9:"La d\xE9claration de naissance de l\'animal {1} a \xE9t\xE9 supprim\xE9e "+"avec succ\xE8s\xA0!"
,10:"Geburtsmeldung f\xFCr Tier {1} wurde erfolgreich gel\xF6scht!",11:"{1} \u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF "+
"\u03B6\u03CE\u03BF {1} \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Az \xE1llat {1} sz\xFClet\xE9si \xE9rtes\xEDt\xE9se sikeresen j\xF3v\xE1hagyva!"
,16:"Melding om f\xF8dsel for dyr {1} ble slettet!",20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"{1} \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+"\u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,21:"La notificaci\xF3n de nacimiento para el animal {1} se elimin\xF3 con "+"\xE9xito."
,23:"{1} numaral\u0131 hayvan\u0131n do\u011Fum bildirimi ba\u015Far\u0131yla "+
"onayland\u0131!",24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D {1} \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"};C.BpT={1:"Obavijest o kupovini za \u017Eivotinju {1} je uspje\u0161no odobrena!"
,2:"\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u0435\u0442\u043E \u0437\u0430 "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"{1} \u0431\u0435 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u043E "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,4:"Ozn\xE1men\xED o n\xE1kupu zv\xED\u0159ete {1} bylo \xFAsp\u011B\u0161n\u011B "+
"zpracov\xE1no!",5:"K\xF8bsmeddelelse for dyr {1} blev godkendt succesfuldt!",0:
"Notice of purchase for animal {1} was cleared successfully!",6:"Melding voor koop voor dier met ID {1} is succesvol geklaard"
,7:"Teate ostust looma {1} jaoks kinnitati edukalt!",8:"El\xE4imen {1} ostoilmoitus tyhjennettiin onnistuneesti!"
,9:"La d\xE9claration d\'achat pour l\'animal {1} a \xE9t\xE9 supprim\xE9 avec "+
"succ\xE8s\xA0!",10:"Zugangsmeldung f\xFCr Tier {1} wurde erfolgreich gel\xF6scht!"
,11:"\u0397 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03B6\u03CE\u03BF {1} \u03B5\u03BA\u03BA\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Az {1} \xE1llat v\xE1s\xE1rl\xE1s\xE1ra vonatkoz\xF3 \xE9rtes\xEDt\xE9s "+
"sikeresen lez\xE1rult!",16:"Kj\xF8psvarsel for dyr {1} ble godkjent!",20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"{1} \u0431\u044B\u043B\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+"\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E!"
,21:"\xA1La notificaci\xF3n de compra para el animal {1} fue eliminada con "+"\xE9xito!"
,23:"{1} adl\u0131 hayvan\u0131n sat\u0131n alma bildirimi ba\u015Far\u0131yla "+
"onayland\u0131!",24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043A\u0443\u043F\u0456\u0432\u043B\u044E \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"{1} \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+"\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E!"
};C.BpU={1:"Sigurnosna kopija datoteke \'backup.vcb\' s podacima ure\u0111aja i {1} "+
"skupom podataka o \u017Eivotinjama uspje\u0161no je zapisana na USB flash "+"disk!"
,2:"\u0410\u0440\u0445\u0438\u0432\u043D\u0438\u044F\u0442 \u0444\u0430\u0439\u043B "+
"\u201Ebackup.vcb\u201C \u0441 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0438 {1}\xA0\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438~\u0432\u043E\u0442~\u043D\u0438 "+
"\u0431\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430~\u043F\u0438~\u0441\u0430\u043D "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441~\u0442~\u0440\u043E\u0439\u0441~\u0442~\u0432\u043E!"
,4:"Z\xE1lo\u017En\xED soubor \"backup.vcb\" s daty za\u0159\xEDzen\xED a {1}\xA0sadou "+
"(sadami) dat o zv\xED\u0159atech byl \xFAsp\u011B\u0161n\u011B zaps\xE1n "+"na USB flash disk!"
,5:"Sikkerhedskopifilen \'backup.vcb\' med enhedsdata og {1}\xA0datas\xE6t "+"med dyredata blev succesfuldt skrevet til USB-n\xF8gle!"
,0:"Backup file \u2019backup.vcb\u2019 with device data and {1}\xA0animal data "+
"set(s) was successfully written to USB flash drive!",6:"Het back-upbestand \'backup.vcb\' met apparaatgegevens en {1} dierendataset(s) "+
"is succesvol naar de USB-stick geschreven!",7:"Varundusfail \'backup.vcb\', mis sisaldab seadme andmeid ja {1} loomaandmete "+
"komplekt(i), kirjutati edukalt USB m\xE4lupulgale!",8:"Varmuuskopiotiedosto \'backup.vcb\', jossa on laitetiedot ja {1}\xA0el\xE4intietojoukot, "+
"kirjoitettiin USB-muistitikulle onnistuneesti!",9:"Le fichier de sauvegarde \'backup.vcb\' contenant les donn\xE9es de l\'appareil "+
"et {1}\xA0les donn\xE9es des animaux~ a \xE9t\xE9 \xE9crit avec succ\xE8s "+"sur la cl\xE9 USB\xA0!"
,10:"Sicherungsdatei \u2019backup.vcb\u2019 mit Ger\xE4tedaten und {1}\xA0Tierdaten~s\xE4tzen "+
"wurde erfolg~reich auf den USB-^Stick geschrieben!",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \'backup.vcb\' "+"\u03BC\u03B5 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BA\u03B1\u03B9 {1} \u03C3\u03B5\u03C4 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03B5\u03B3\u03C1\u03AC\u03C6\u03B7 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03C3\u03B5 USB flash drive!",12:"A(z) \'backup.vcb\' biztons\xE1gi ment\xE9si f\xE1jl, amely tartalmazza "+
"az eszk\xF6zadatokat \xE9s az {1} \xE1llatadat-k\xE9szlet(ek)et, sikeresen "+"ki\xEDr\xE1sra ker\xFClt az USB-s mem\xF3ri\xE1ra!"
,16:"Sikkerhetskopifilen \u2019backup.vcb\u2019 med enhetsdata og {1}\xA0dyredatasett "+
"ble vellykket skrevet til USB-minnepinne!",20:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F "+
"\u0444\u0430\u0439\u043B\u0430 \"backup.vcb\" \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 {1}\xA0\u043D\u0430\u0431\u043E\u0440\u043E\u043C(\u0430\u043C\u0438) "+
"\u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0430 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C!"
,21:"El archivo de respaldo \'backup.vcb\' con datos del dispositivo y {1}\xA0conjunto(s) "+
"de datos de animal fue escrito con \xE9xito en la unidad flash USB.",23:"Cihaz verilerini ve {1}\xA0hayvan veri k\xFCmelerini i\xE7eren \'backup.vcb\' "+
"yedekleme dosyas\u0131 ba\u015Far\u0131yla USB flash s\xFCr\xFCc\xFCye "+"yaz\u0131ld\u0131!"
,24:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0438\u0439 \u0444\u0430\u0439\u043B "+
"\'backup.vcb\' \u0437 \u0434\u0430\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0442\u0430 {1}\xA0\u043D\u0430\u0431\u043E\u0440\u043E\u043C \u0434\u0430\u043D\u0438\u0445 "+
"\u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u0432 "+"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.SuccessCreationNewAnimal={1:"Jedna \u017Eivotinja je uspje\u0161no registrovana!"
,2:"\u0415\u0434\u043D\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0448\u0435 "+
"\u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u5DF2\u6210\u529F\u5EFA\u7ACB\u4E00\u96BB\u5C0F\u725B\uFF01",4:"Zv\xED\u0159e bylo \xFAsp\u011B\u0161n\u011B zalo\u017Eeno"
,5:"Et dyr blev succesfuldt skabt!",0:"One animal was success~fully created!",6:
"Een dier is successvol opgenomen!",7:"Uus loom edukalt loodud",8:"Yksi uusi el\xE4in luotiin t\xE4ysin luotu!"
,9:"Un animal a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s",10:"Ein Tier wurde erfolgreich erstellt!"
,11:"\u0388\u03BD\u03B1 \u03B6\u03CE\u03BF \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Egy \xE1llat sikeresen l\xE9trehozva!"
,16:"Et dyr ble opprettet med suksess!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u043E!",21:"Se ha creado un animal con \xE9xito."
,23:"Bir hayvan ba\u015Far\u0131yla~ba\u015Far\u0131yla yarat\u0131ld\u0131!",24:
"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0430!"};C.SuccessCreationNewAnimals={
1:"{1} \u017Eivotinja su uspje\u0161no registrovani.",2:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u044F\u0445\u0430 "+
"\u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"{1}\u96BB\u5C0F\u725B\u5DF2\u6210\u529F\u5EFA\u7ACB\uFF01",4:"{1} zv\xED\u0159ata byla \xFAsp\u011B\u0161n\u011B vytvo\u0159ena"
,5:"{1} dyr blev succesfuldt skabt!",0:"{1} animals were success~fully created!"
,6:"{1} Dieren successvol aangemaakt!",7:"{1} uued loomad edukalt loodud",8:"{1} el\xE4int\xE4 luotiin t\xE4ysin luotu!"
,9:"{1} animaux ont \xE9t\xE9 cr\xE9\xE9s avec succ\xE8s",10:"{1} Tiere wurden erfolgreich erstellt!"
,11:"{1} \u03B6\u03CE\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"{1} \xE1llat sikeresen l\xE9trehozva!"
,16:"{1} dyr ble opprettet med suksess",20:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u044B!",21:"Se han creado {1} animales con \xE9xito."
,23:"{1} hayvan ba\u015Far\u0131yla olu\u015Fturuldu!",24:"{1} \u0442\u0432\u0430\u0440\u0438\u043D \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!"};C.SuccessDataSync={1:"POdaci su uspje\u0161no sinhronizirani sa aparatom za hranjenje!"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0430 "+
"\u0441 \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0430!",3:"\u8CC7\u6599\u5DF2\u6210\u529F\u540C\u6B65\u5230\u7D66\u98FC\u7AD9\uFF01"
,4:"\xDAsp\u011B\u0161n\xE1 synchronizace dat",5:"Data er succesfuldt synkroniseret til feeder!"
,0:"Data success~fully synchronized to feeder!",6:"Data successvol met automaat gesynchroniseerd!"
,7:"Andmed edukalt saadetud",8:"Data siirto onnistui~ t\xE4ysin synkronoitu sy\xF6tt\xF6laitteeseen!"
,9:"Donn\xE9es synchronis\xE9es avec succ\xE8s avec le DAL",10:"Daten erfolgreich mit dem Automaten synchronisiert!"
,11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03BC\u03B5 \u03C4\u03BF "+"\u03C3\u03B9\u03C4\u03B9\u03C3\u03C4\u03AE"
,12:"Adatok sikeresen szinkroniz\xE1lva az etet\u0151h\xF6z!",16:"Data er vellykket synkronisert til automat"
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u044B "+
"\u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C",21:"Se han sincronizado los datos con \xE9xito con el alimentador."
,23:"Besleyiciyle bilgi senkronizasyonu ba\u015Far\u0131yla yap\u0131ld\u0131!",
24:"\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043E "+
"\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"};C.BpV={1:"\u017Divotinja sa ID brojm {1} uspje\u0161no zasu\u0161ena!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u043E \u043A\u0430\u0442\u043E "+
"\u043F\u0440\u0435\u0441\u0443\u0448\u0435\u043D\u043E!",4:"Zv\xED\u0159e s ID {1} \xFAsp\u011B\u0161n\u011B ozna\u010Deno jako such\xE9!"
,5:"Dyr med ID {1} er succesfuldt markeret som t\xF8rt!",0:"Animal with ID {1} success~fully marked as dry!"
,6:"Dier met nummer {1} is succesvol gemarkeerd als droog",7:"Loom ID-ga {1} m\xE4rgitud kinnisloomaks!"
,8:"El\xE4in ID {1} onnistunut merkitty umpeutetuksi!",9:"L\'animal avec l\'ID {1} a \xE9t\xE9 marqu\xE9 avec succ\xE8s comme vache "+
"tarie",10:"Tier mit ID {1} wurde erfolgreich als trocken~stehend markiert!",11:
"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03AC\u03BD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C9\u03C2 \u03C3\u03C4\u03B5\u03AF\u03C1\u03BF!"
,12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen megjel\xF6lve, mint sz\xE1raz!"
,16:"Dyr med ID {1} ble markert som gjeldku!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E "+
"\u043A\u0430\u043A \u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u043E\u0435!"
,21:"Animal con ID {1} marcado con \xE9xito como seco.",23:"{1} kimlikli hayvan ba\u015Far\u0131yla kuru olarak i\u015Faretlendi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0430 \u044F\u043A \u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0430!"
};C.BpW={1:"Sistem je uspje\u0161no a\u017Euriran, mo\u017Eete izvaditi USB.",2:
"\u0424\u044A\u0440\u043C\u0443\u0435\u0440\u044A\u0442 \u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.\nUSB \u0444\u043B\u0430\u0448 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u043C\u043E\u0436\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E."
,4:"Firmware byl \xFAsp\u011B\u0161n\u011B aktualizov\xE1n.\nUSB flash disk "+"m\u016F\u017Ee b\xFDt bezpe\u010Dn\u011B odstran\u011Bn."
,5:"Firmwaren blev opdateret med succes.\nUSB-n\xF8glen kan nu fjernes sikkert."
,0:"Firmware was updated successfully.\nUSB flash drive can be safely removed.",
6:"De firmware is succesvol bijgewerkt.\nUSB-flashstation kan nu veilig worden "+
"verwijderd.",7:"Tarkvara uuendus edukas",8:"Laiteohjelmiston p\xE4ivitys onnistui.\nUSB-muistitikku voidaan poistaa "+
"turvallisesti.",9:"Le micrologiciel a \xE9t\xE9 mis \xE0 jour avec succ\xE8s.\nLa cl\xE9 USB "+
"peut \xEAtre retir\xE9e.",10:"Firmware wurde erfolgreich aktualisiert! USB-Stick kann abgezogen werden!"
,11:"\u03A4\u03BF \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1.\n\u0397 "+"\u03BC\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 "+
"USB \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03BC\u03B5 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1.",12:"A firmware sikeresen friss\xFClt.\nAz USB flash meghajt\xF3 biztons\xE1gosan "+
"elt\xE1vol\xEDthat\xF3.",16:"Programmet ble oppdatert.\nUSB- kan trygt fjernes."
,20:"\u0412\u0435\u0440\u0441\u0438\u044F \u041F\u041E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430! USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C "+
"\u043C\u043E\u0436\u043D\u043E \u0438\u0437\u0432\u043B\u0435\u0447\u044C!",21:
"El firmware se ac~tualiz\xF3 con \xE9xito.\nEl USB flash drive puede ser "+"retirado con seguridad."
,23:"Firmware ba\u015Far\u0131yla g\xFCncellendi.\nUSB flash s\xFCr\xFCc\xFC "+"g\xFCvenli bir \u015Fekilde \xE7\u0131kar\u0131labilir."
,24:"\u0412\u0435\u0440\u0441\u0456\u044F \u041F\u041E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0430! USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447 "+
"\u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0442\u044F\u0433\u0442\u0438!"};C.
BpX={1:"ID \u017Eivotinje je uspje\u0161no povezan sa \u017Eivotinjom s ID {1}!"
,2:"ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0448\u0435 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0432\u044A\u0440\u0437\u0430\u043D "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1}!",4:"ID zv\xED\u0159ete bylo \xFAsp\u011B\u0161n\u011B propojeno se zv\xED\u0159etem "+
"s ID {1}!",5:"Dyrets ID blev succesfuldt forbundet med dyret med ID {1}!",0:"Animal ID was successfully linked to animal with ID {1}!"
,6:"Diernummer is gekoppeld aan dier met ID {1}",7:"Looma ID \xFChendati edukalt loomaga, mille ID on {1}!"
,8:"Korvamerkkinumero lis\xE4ttiin onnistuneesti el\xE4imeen, jonka tunnus "+"on {1}."
,9:"Un n\xB0 d\'identification a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 l\'animal "+
"portant l\'ID {1}.",10:"Dem Tier mit der ID {1} wurde erfolgreich eine Ohrmarken~nummer hinzugef\xFCgt."
,11:"\u03A4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03C3\u03C5\u03BD\u03B4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03BC\u03B5 \u03C4\u03BF "+"\u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1}!",12:"Az \xE1llat azonos\xEDt\xF3ja sikeresen \xF6sszekapcsol\xE1sra ker\xFClt "+
"az \xE1llattal, melynek azonos\xEDt\xF3ja {1}!",16:"Dyrets ID ble vellykket koblet til dyret med ID {1}!"
,20:"ID \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043E "+
"\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u0441 ID "+"{1}!"
,21:"El ID del animal se vincul\xF3 correctamente al animal con ID {1}.",23:"Hayvan kimli\u011Fi, {1} kimli\u011Fine sahip hayvana ba\u015Far\u0131yla "+
"ba\u011Fland\u0131!",24:"ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0431\u0443\u043B\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0440\u0438\u0432\'\u044F\u0437\u0430\u043D\u043E "+
"\u0434\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0441 ID {1}!"};C.SuccessLinkTransponder={
1:"Transponder je uspje\u0161no dodijeljen \u017Eivotinji s ID {1}!",2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044A\u0442 \u0431\u0435\u0448\u0435 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0435\u043D "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1}!",4:"Transpond\xE9r byl \xFAsp\u011B\u0161n\u011B p\u0159i\u0159azen zv\xED\u0159eti "+
"s ID {1}!",5:"Transponderen blev succesfuldt tildelt dyret med ID {1}!",0:"Transponder was successfully assigned to animal with ID {1}!"
,6:"Transponder is succesvol gematch met Dier ID {1}",7:"Transponder m\xE4\xE4rati edukalt loomale ID-ga {1}!"
,8:"Transponderi m\xE4\xE4ritettiin el\xE4imelle, jonka tunnus on {1}!",9:"Un transpondeur a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 l\'animal portant "+
"l\'ID {1}.",10:"Dem Tier mit der ID {1} wurde erfolgreich ein Transponder hinzugef\xFCgt."
,11:"\u039F \u03B4\u03AD\u03BA\u03C4\u03B7\u03C2 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 \u03C3\u03C4\u03BF "+"\u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"{1}!",12:"A transzponder sikeresen hozz\xE1rendelve az {1} azonos\xEDt\xF3j\xFA "+
"\xE1llathoz!",16:"Transponderen ble vellykket tildelt dyret med ID {1}!",20:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0431\u044B\u043B "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u0441 ID {1}!",21:"El transpondedor se asign\xF3 con \xE9xito al animal con ID {1}."
,23:"Transponder ba\u015Far\u0131yla {1} kimlikli hayvana atand\u0131!",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0431\u0443\u0432 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0456 \u0437 ID {1}!"};C.BpY={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no ozna\u010Dena - u fazi laktacije!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u043E \u043A\u0430\u0442\u043E "+
"\u043B\u0430\u043A\u0442\u0438\u0440\u0430\u0449\u043E!",4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B ozna\u010Deno jako "+
"laktuj\xEDc\xED!",5:"Dyr med ID {1} er succesfuldt markeret som lakterende!",0:
"Animal with ID {1} success~fully marked as lactating!",6:"Dier met ID {1} is succesvol gemarkeerd als lacterend"
,7:"Loom ID-ga {1} m\xE4rgitud lakteerivaks!",8:"El\xE4in ID {1} onnistunut merkitty lypsyyn!"
,9:"L\'animal avec l\'ID {1} a \xE9t\xE9 marqu\xE9 avec succ\xE8s comme allaitant "+
"!",10:"Tier mit ID {1} wurde erfolgreich als laktierend markiert!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03AC\u03BD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C9\u03C2 \u03B3\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1\u03C2!"
,12:"Az {1} azonos\xEDt\xF3j\xFA \xE1llat sikeresen megjel\xF6lve, mint tejel\u0151!"
,16:"Dyr med ID {1} ble markert som amme!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E "+
"\u043A\u0430\u043A \u043B\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0435!"
,21:"Animal con ID {1} marcado con \xE9xito como en lactancia.",23:"{1} kimlikli hayvan ba\u015Far\u0131yla emziriyor olarak i\u015Faretlendi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0430 \u044F\u043A \u043B\u0430\u043A\u0442\u0443\u044E\u0447\u0430!"
};C.SuccessMassDeregistration={1:"{1} \u017Eivotinje su uspje\u0161no odjavljene!"
,2:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u044F\u0445\u0430 "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u0434\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438!"
,4:"{1} zv\xED\u0159at bylo \xFAsp\u011B\u0161n\u011B odregistrov\xE1no!",5:"{1} dyr blev succesfuldt afmeldt!"
,0:"{1} animals were success~fully unregistered!",6:"{1} dieren zijn succesvol afgemeld"
,7:"{1} looma registreerimine t\xFChistati edukalt!",8:"{1} el\xE4int\xE4 on poistettu onnistuneesti!"
,9:"{1} Les animaux ont \xE9t\xE9 d\xE9sinscrits avec succ\xE8s\xA0!",10:"{1} Tiere wurden erfolgreich abgemeldet!"
,11:"{1} \u03B6\u03CE\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE!",12:"{1} \xE1llat sikeresen le lett iratkozva!"
,16:"{1} dyr ble vellykket avregistrert!",20:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043D\u044F\u0442\u043E "+"\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438!"
,21:"\xA1{1} animales fueron desregistrados con \xE9xito!",23:"{1} hayvan\u0131n kayd\u0131 ba\u015Far\u0131yla~kald\u0131r\u0131ld\u0131!"
,24:"{1} \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437 \u0440\u0435\u0454\u0441\u0442\u0440\u0443!"
};C.BpZ={1:"\u017Divotinja {1}\nje uspje\u0161no registrovana.",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E {1}\n\u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.",4:"Zv\xED\u0159e {1}\nbylo \xFAsp\u011B\u0161n\u011B zaregistrov\xE1no."
,5:"Dyret blev registreret med succes.",0:"Animal {1}\nwas registered successfully."
,6:"Dier {1} is succesvol geregistreerd",7:"Loom {1}\nregistreeriti edukalt.",8:
"El\xE4in {1}\n on rekister\xF6ity onnistuneesti.",9:"L\'animal {1} a \xE9t\xE9 enregistr\xE9 avec succ\xE8s."
,10:"Tier {1}\n wurde erfolgreich registriert.",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2.",12:"Az \xE1llat {1}\nsikeresen regisztr\xE1lva."
,16:"Dyret ble registrert vellykket.",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1}\n\u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E."
,21:"El animal {1} fue registrado con \xE9xito.",23:"Hayvan {1}\nba\u015Far\u0131yla kaydedildi."
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1}\n\u0431\u0443\u043B\u0430 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430."
};C.Bp0={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no izbrisana sa liste!",2:
"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E \u043A\u044A\u043C "+
"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0441 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"ID\u70BA{1}\u725B\u96BB\u5DF2\u6210\u529F\u7684\u5F9E\u8B66\u544A\u540D\u55AE\u79FB\u9664\uFF01"
,4:"Zv\xED\u0159e (ID {1}) bylo \xFAsp\u011B\u0161n\u011B odstran\u011Bno ze "+"seznamu alarm\u016F!"
,5:"Dyr med ID {1} er blevet fjernet fra alarmlisten!",0:"Animal with ID {1} success~fully removed from alarm list!"
,6:"Dier met ID {1} is successvol van alarmlijst gezet!",7:"Loomad ID {1} edukalt hoiatuste nimekirjast maha v\xF5etud"
,8:"El\xE4in ID {1} ~poistettu onnistuneesti h\xE4lytyslistalta!",9:"Animal avec ID {1} \xE9limin\xE9 de la liste d\u2019alarme avec succ\xE8s"
,10:"Tier mit ID {1} wurde erfolgreich von der Alarmliste entfernt!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1. \u03C4\u03B1\u03C5\u03C4. "+
"{1} \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD"
,12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen elt\xE1vol\xEDtva a riaszt\xE1si "+
"list\xE1r\xF3l!",16:"Dyr med ID {1} ble fjernet fra alarmlisten!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 "+
"\u0442\u0440\u0435\u0432\u043E\u0433!",21:"Se ha eliminado con \xE9xito el animal con ID {1} de la lista de alarmas."
,23:"Alarm listesini kald\u0131rmak ba\u015Far\u0131l\u0131",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0442\u0440\u0438\u0432\u043E\u0433!"};C.Bp1={1:"\u017Divotinja s ID {1} uspje\u0161no uklonjena s liste pra\u0107enja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E \u043E\u0442 "+"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435!"
,4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B odstran\u011Bno ze "+"sledovan\xE9ho seznamu!"
,5:"Dyr med ID {1} er blevet fjernet fra overv\xE5gningslisten!",0:"Animal with ID {1} success~fully removed from watch list!"
,6:"Dier met ID {1} is succesvol verwijderd van de Watchlist",7:"Looma ID-ga {1} on edukalt j\xE4lgimisnimekirjast eemaldatud!"
,8:"El\xE4in, jonka tunnus on {1}, on poistettu seurantalistalta!",9:"L\'animal avec l\'ID {1} a \xE9t\xE9 retir\xE9 avec succ\xE8s de la liste "+
"de suivi\xA0!",10:"Tier mit der ID {1} wurde erfolgreich von der Beobach~tungsliste entfernt!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2!"
,12:"Az \xE1llat, azonos\xEDt\xF3val {1}, sikeresen elt\xE1vol\xEDtva a megfigyel\xE9si "+
"list\xE1r\xF3l!",16:"Dyr med ID {1} er vellykket fjernet fra overv\xE5kningslisten!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E "+
"\u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F!"
,21:"Animal con ID {1} retirado con \xE9xito de la lista de seguimiento.",23:"{1} kimlikli hayvan, izleme listesinden ba\u015Far\u0131yla kald\u0131r\u0131ld\u0131!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437 ID {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u043B\u0443\u0447\u0435\u043D\u0430 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F!"
};C.SuccessResetAnimalData={1:"Podaci o \u017Eivotinja uspje\u0161no izbrirsani!"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u0435 \u0438\u0437\u0442\u0440\u0438\u0442\u0430 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",4:"Data o zv\xED\u0159atech byla \xFAsp\u011B\u0161n\u011B smaz\xE1na!"
,5:"Dyrenes data blev slettet succesfuldt!",0:"Animal data were deleted success~fully!"
,6:"Dierdata is succesvol verwijderd",7:"Looma andmed edukalt kustutatud",8:"El\xE4intiedot poistettiin onnistuneesti!"
,9:"Les donn\xE9es d\u2019animaux ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,10:"Tierdaten wurden erfolgreich gel\xF6scht!",11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03BF\u03C5 "+
"\u03B6\u03CE\u03BF\u03C5 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Az \xE1llatadatok sikeresen t\xF6rl\u0151dtek!"
,16:"Dyredata ble slettet!",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,21:"Los datos del animal se eliminaron con \xE9xito.",23:"Hayvan verileri ba\u015Far\u0131yla silindi!"
,24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bp2={1:"Podaci ure\u0111aja su uspje\u0161no izbrisani!",2:"\u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0443\u0441\u043F\u0435~\u0448\u043D\u043E!"
,4:"Data za\u0159\xEDzen\xED byla \xFAsp\u011B\u0161n\u011B smaz\xE1na!",5:"Enhedsdata blev slettet succesfuldt!"
,0:"Device data were deleted success~fully!",6:"Apparaatgegevens zijn succesvol verwijderd!"
,7:"Seadme andmed kustutati edukalt!",10:"Ger\xE4tedaten wurden erfolgreich gel\xF6scht!"
,11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03B7\u03C2 "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!",12:"Az eszk\xF6zadatok sikeresen t\xF6rl\u0151dtek!"
,16:"Enhetsdataene ble slettet vellykket!",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u043B\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456!"
};C.SuccessResetFactorySettings={1:"Aparat je uspje\u0161no ra\u0107en na fabri\u010Dke postavke!"
,2:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043D\u0443\u043B\u0435\u043D\u043E "+
"\u0441\u044A\u0441 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438!"
,3:"\u8A2D\u5099\u6210\u529F\u91CD\u7F6E\u70BA\u51FA\u5EE0\u8A2D\u5B9A\u503C\uFF01"
,4:"\xDAsp\u011B\u0161n\xE9 resetov\xE1n\xED na tov\xE1rn\xED nastaven\xED",5:"Enheden er nulstillet til fabriksindstillingerne!"
,0:"Device success~fully reset to factory defaults!",6:"Apparaat successvol op Fabrieksinstellingen terug gezet!"
,7:"Tehase seaded edukalt taask\xE4ivitatud",8:"Laite onnistui palautettu tehdasasetuksiin!"
,9:"L\u2019appareil\na \xE9t\xE9 r\xE9initialiser\navec succ\xE8s\xA0!",10:"Ger\xE4t erfolgreich auf Werks~ein~stel~lun~gen zur\xFCckgesetzt!"
,11:"\u0397 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B5\u03C0\u03B1\u03BD\u03B1\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03B9\u03C2 "+"\u03B5\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AD\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",12:"Az eszk\xF6z sikeresen vissza\xE1ll\xEDtva az alap\xE9rtelmezett gy\xE1ri "+
"be\xE1ll\xEDt\xE1sokra!",16:"Enheten er tilbakestilt til fabrikkinnstillingene!"
,20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u0431\u0440\u043E\u0448\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438!",21:"Dispositivo restaurado con \xE9xito a los ajustes de f\xE1brica."
,23:"Fabrika ayarlar\u0131na d\xF6nme ba\u015Far\u0131l\u0131",24:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u043E \u0434\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u044C\u043A\u0438\u0445 "+
"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C!"};C.SuccessRestoreBackup={
1:"Uspe\u0161no obnovljeni podaci ure\u0111aja i {1}\xA0set(ovi) podataka "+"o \u017Eivotinjama iz rezervne kopije na USB fle\u0161 disku!"
,2:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u0435\u043D\u0438 "+
"\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0438 {1}\xA0\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u043E\u0442 \u0430\u0440\u0445\u0438\u0432\u0435\u043D \u0444\u0430\u0439\u043B "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,4:"\xDAsp\u011B\u0161n\u011B obnovena data za\u0159\xEDzen\xED a {1}\xA0sada(y) "+
"dat o zv\xED\u0159atech ze z\xE1lo\u017En\xEDho souboru na USB flash disku!",5:
"Genskabt enhedsdata og {1}\xA0datas\xE6t med dyredata fra sikkerhedskopi "+"p\xE5 USB-n\xF8gle!"
,0:"Successfully restored device data and {1}\xA0animal data set(s) from backup "+
"file on USB flash drive!",6:"Succesvol herstelde apparaatgegevens en {1}\xA0dierset(s) van back-upbestand "+
"op USB-stick!",7:"Edukalt taastatud seadme andmed ja {1}\xA0loomade andmekomplekt(id) varundusfailist "+
"USB m\xE4lupulgalt!",8:"Kaikki laitetiedot ja {1}\xA0el\xE4intietotietueet palautettiin onnistuneesti "+
"USB-tikulla olevasta varmuuskopiotiedostosta!",9:"Toutes les don~n\xE9es de l\'appareil ainsi que les jeux de donn\xE9es "+
"{1}\xA0ani~males ont \xE9t\xE9 restaur\xE9s avec succ\xE8s \xE0 partir "+"du fichier de sauve~garde sur la cl\xE9 USB\xA0!"
,10:"Alle Ger\xE4tedaten und {1}\xA0Tier~daten~s\xE4tze wurden erfolg~reich "+"aus der Sicherungs~datei auf dem USB-^Stick wieder~hergestellt!"
,11:"\u0395\u03C0\u03B9\u03C4\u03C5\u03C7\u03AE\u03C2 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BA\u03B1\u03B9 {1}\xA0\u03C3\u03B5\u03C4 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03B1\u03C0\u03CC \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+
"\u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 \u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 "+
"\u03C3\u03B5 USB flash drive!",12:"Sikeresen vissza\xE1ll\xEDtottam az eszk\xF6zadatokat \xE9s {1}\xA0\xE1llatadat-k\xE9szlet(ek)et "+
"a USB-s mem\xF3riameghajt\xF3n l\xE9v\u0151 biztons\xE1gi ment\xE9si f\xE1jlb\xF3l!"
,16:"Vellykket gjenopprettet enhetsdata og {1}\xA0dyredata sett fra sikkerhetskopifil "+
"p\xE5 USB-minnepinne!",20:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0438 {1}\xA0\u043D\u0430\u0431\u043E\u0440(\u044B) \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0438\u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 "+
"\u043A\u043E\u043F\u0438\u0438 \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435!"
,21:"Los datos del dispositivo y el/los {1}\xA0con~jun~to(s) de datos del animal "+
"se res~tau~raron con \xE9xito desde el ar~chivo de copia de se~gu~ri~dad "+"en la uni~dad flash USB."
,23:"USB flash s\xFCr\xFCc\xFCdeki yedekleme dosyas\u0131ndan cihaz verileri "+"ve {1}\xA0hayvan veri seti/k\xFCmeleri ba\u015Far\u0131yla geri y\xFCklendi!"
,24:"\u0423\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043E "+
"\u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+"\u0442\u0430 {1}\xA0\u043D\u0430\u0431\u0456\u0440(\u0438) \u0434\u0430\u043D\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D \u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456!"
};C.SuccessUnlinkTransponder={1:"Dodijeljeni transponder je uspje\u0161no odvojen od \u017Eivotinje s ID "+
"{1}!",2:"\u041F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0431\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442 "+
"\u043E\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E \u0441 "+"ID {1}!"
,4:"P\u0159i\u0159azen\xFD transpond\xE9r byl \xFAsp\u011B\u0161n\u011B odpojen "+
"od zv\xED\u0159ete s ID {1}!",5:"Tildelt transponder blev succesfuldt afkoblet fra dyret med ID {1} !"
,0:"Assigned transponder was successfully unlinked from animal with ID {1} "+"!"
,6:"Toegekend transponder is succesvol gesplitst van dier met ID {1}!",7:"M\xE4\xE4ratud saatja on edukalt looma ID-ga {1} lahti \xFChendatud!"
,8:"M\xE4\xE4ritetty transponderi on poistettu onnistuneesti el\xE4imest\xE4, "+
"jonka tunnus on {1}!",9:"Le transpondeur attribu\xE9 a \xE9t\xE9 supprim\xE9 avec succ\xE8s des "+
"donn\xE9s de l\'animal avec l\'ID {1}.",10:"Zugeordneter Transponder wur~de erfolgreich aus dem Datensatz des Tieres "+
"mit der ID {1} gel\xF6scht.",11:"\u03A4\u03BF \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF "+
"\u03B4\u03B9\u03B1\u03B2\u03B9\u03B2\u03B1\u03C3\u03C4\u03AE\u03C1\u03B1\u03C2 "+
"\u03B1\u03C0\u03BF\u03C3\u03C5\u03BD\u03B4\u03AD\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF "+
"\u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} !",12:"A hozz\xE1rendelt transzponder sikeresen le lett v\xE1lasztva az {1} azonos\xEDt\xF3j\xFA "+
"\xE1llatr\xF3l!",16:"Tildelt transponder ble vellykket frakoblet fra dyret med ID {1} !"
,20:"\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D "+
"\u043E\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0441 "+"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C "+
"{1}!",21:"El transpondedor asignado se desvincul\xF3 con \xE9xito del animal con "+
"ID {1}.",23:"Atanan aktar\u0131c\u0131n\u0131n {1} kimlikli hayvanla ba\u011Flant\u0131s\u0131 "+
"ba\u015Far\u0131yla kald\u0131r\u0131ld\u0131!",24:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0456\u0434\'\u0454\u0434\u043D\u0430\u043D\u043E "+
"\u0432\u0456\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0437 ID "+"{1}!"
};C.SuccessUnregister={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no odjavljena!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043E\u0442\u043F\u0438\u0441\u0430\u043D\u043E!",3:"\u8B58\u5225\u78BC {1}\u7684\u725B\u96BB\u5DF2\u6210\u529F\u89E3\u9664\u8A3B\u518A\uFF01"
,4:"\xDAsp\u011B\u0161n\u011B zru\u0161en\xE1 registrace",5:"Dyr med ID {1} er blevet afmeldt!"
,0:"Animal with ID {1} successfully unregistered!",6:"Dier met ID {1} is successvol afgemeld!"
,7:"Loom ID {1} nimekirjast edukalt maas",8:"El\xE4in poistettu rekisterist\xE4!"
,9:"Animal avec ID {1}\na \xE9t\xE9 effacer\navec succ\xE8s.",10:"Tier mit ID {1} wurde erfolgreich abgemeldet!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03C4\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1",12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen leiratkozott!"
,16:"Dyr med ID {1} ble avregistrert!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",21:"Se ha anulado con \xE9xito el registro del animal con ID {1}."
,23:"Kay\u0131t silme ba\u015Far\u0131l\u0131",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430!"};C.Bp3={1:"\u017Divotinja {1} i odgovaraju\u0107a obavijest o ro\u0111enju su uspje\u0161no "+
"izbrisani!",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E {1} \u0438 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u043E\u0442\u043E "+
"\u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435 \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,4:"Zv\xED\u0159e {1} a odpov\xEDdaj\xEDc\xED ozn\xE1men\xED o narozen\xED "+"byly \xFAsp\u011B\u0161n\u011B smaz\xE1ny!"
,5:"Dyret {1} og den tilsvarende f\xF8dselsmeddelelse blev slettet succesfuldt!"
,0:"Animal {1} and corresponding birth notice were deleted successfully!",6:"Dier {1} en bijbehorend geboorte melding is succesvol verwijderd"
,7:"Loom {1} ning vastav s\xFCnniteavitus kustutatud!",8:"El\xE4in {1} ja sit\xE4 vastaava syntym\xE4ilmoitus poistettiin!"
,9:"L\'animal {1} et sa d\xE9claration de naissance ont \xE9t\xE9 supprim\xE9s "+
"avec succ\xE8s\xA0!",10:"Tier {1} samt Geburtsmeldung wurde erfolgreich gel\xF6scht!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF {1} \u03BA\u03B1\u03B9 \u03B7 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03BF\u03B9\u03C7\u03B7 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD \u03BC\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"\xC1llat {1} \xE9s a hozz\xE1tartoz\xF3 sz\xFClet\xE9si bejelent\xE9s "+
"sikeresen t\xF6r\xF6lve!",16:"Dyr {1} og tilh\xF8rende f\xF8dselsmelding ble slettet!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1} \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u0431\u044B\u043B\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,21:"El animal {1} y la notificaci\xF3n de nacimiento correspondiente se eliminaron "+
"con \xE9xito.",23:"Hayvan {1} ve ilgili do\u011Fum bildirimi ba\u015Far\u0131yla silindi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1} \u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bp4={1:"\u017Divotinja {1} i odgovaraju\u0107e obavje\u0161tenje o kupovini su "+
"uspje\u0161no izbrisani!",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E {1} \u0438 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u043E\u0442\u043E "+
"\u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,4:"Zv\xED\u0159e {1} a p\u0159\xEDslu\u0161n\xE9 ozn\xE1men\xED o koupi byly "+
"\xFAsp\u011B\u0161n\u011B smaz\xE1ny!",5:"Dyr {1} og tilh\xF8rende k\xF8bsmeddelelse blev slettet succesfuldt!"
,0:"Animal {1} and corresponding purchase notice were deleted successfully!",6:"Dier {1} en bijbehorende koop is succesvol verwijderd"
,7:"Looma {1} ja vastav ostuteade kustutati edukalt!",8:"El\xE4in {1} ja vastaava ostoilmoitus poistettiin onnistuneesti!"
,9:"L\'animal {1} et sa d\xE9claration d\'achat ont \xE9t\xE9 supprim\xE9s "+"avec succ\xE8s\xA0!"
,10:"Tier {1} samt Zugangsmeldung wurde erfolgreich gel\xF6scht!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF {1} \u03BA\u03B1\u03B9 \u03B7 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03BF\u03B9\u03C7\u03B7 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!"
,12:"Az \xE1llat {1} \xE9s a hozz\xE1 tartoz\xF3 v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9s "+
"sikeresen t\xF6r\xF6lve lett!",16:"Dyret {1} og tilh\xF8rende kj\xF8psmelding ble slettet!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1} \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+"\u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B!",21:"\xA1El animal {1} y la correspondiente notificaci\xF3n de compra fueron "+
"eliminados con \xE9xito!",23:"Hayvan {1} ve ilgili sat\u0131n alma bildirimi ba\u015Far\u0131yla silindi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1} \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0431\u0443\u043B\u0438 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456!"
};C.SuccessUnregisterPerished={1:"Uginuta \u017Eivotinja sa ID brojem {1} uspje\u0161no odjavljena!"
,2:"\u0423\u043C\u0440\u044F\u043B\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0441 \u2116 {1} \u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0438\u0441\u0430\u043D\u043E!"
,4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B odhl\xE1\u0161eno!",5:
"D\xF8dt dyr med ID {1} er blevet afmeldt med succes!",0:"Perished animal with ID {1} successfully unregistered!"
,6:"Omgekomen dier met nummer {1} is succesvol verwijderd",7:"Kadunud loom ID {1} niekirjast edukalt maas"
,8:"Kuolleen el\xE4imen, jonka tunnus on {1}, rekisterist\xE4 poisto onnistui!",
9:"L\u2019animal mort avec ID {1} a \xE9t\xE9 d\xE9sactiv\xE9 avec succ\xE8s\xA0!"
,10:"Verendetes Tier mit ID {1} wurde erfolgreich abgemeldet!",11:"\u03A4\u03BF \u03C0\u03B5\u03B8\u03B1\u03BC\u03AD\u03BD\u03BF \u03B6\u03CE\u03BF "+
"\u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!"
,12:"Azonos\xEDt\xF3val {1} rendelkez\u0151 elhullott \xE1llat sikeresen leiratkozott!"
,16:"D\xF8dt dyr med ID {1} ble avregistrert!",20:"\u041C\u0451\u0440\u0442\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u043D\u043E\u043C\u0435\u0440 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",21:"El animal fallecido con ID {1} se dio de baja con \xE9xito."
,23:"{1} kimlikli telef olan hayvan\u0131n kayd\u0131 ba\u015Far\u0131yla iptal "+
"edildi!",24:"\u041C\u0435\u0440\u0442\u0432\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 "+
"{1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bp5={1:"Podaci o \u017Eivotinjama su uspje\u0161no zapisani u direktorij \'export-csv\' "+
"na USB flash disku.",2:"\u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0431\u044F\u0445\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u201Eexport-csv\u201C "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
,4:"Data o zv\xED\u0159atech byla \xFAsp\u011B\u0161n\u011B zaps\xE1na do adres\xE1\u0159e "+
"\'export-csv\' na USB flash disku.",5:"Dyrenes data blev succesfuldt skrevet til mappen \'export-csv\' p\xE5 USB-n\xF8glen."
,0:"Animal data were successfully written to directory \u2019export-csv\u2019 "+
"on USB flash drive.",6:"Dierdata is succesvol naar Export-CSV verplaatst naar USB stick"
,7:"Loomade andmed kirjutati edukalt USB-m\xE4lupulgal asuvasse kausta \'export-csv\'."
,8:"El\xE4inten tiedot kirjoitettiin onnistuneesti USB-muistitikulla olevaan "+"hakemistoon \"export-csv\"."
,9:"Les donn\xE9es des animaux ont \xE9t\xE9 export\xE9es avec succ\xE8s sur "+"la cl\xE9 USB (r\xE9pertoire \u2019export-csv\u2019)."
,10:"Tierdaten wurden erfolgreich auf den USB-Stick exportiert (Verzeichnis "+"\u2019export-csv\u2019)."
,11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03BF\u03C5 "+
"\u03B6\u03CE\u03BF\u03C5 \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF\u03BD "+"\u03BA\u03B1\u03C4\u03AC\u03BB\u03BF\u03B3\u03BF \'export-csv\' \u03C3\u03B5 "+
"USB flash drive.",12:"Az \xE1llatadatok sikeresen el lettek mentve az \'export-csv\' mapp\xE1ba "+
"az USB-meghajt\xF3n.",16:"Dyredata ble vellykket skrevet til mappen \'export-csv\' p\xE5 USB-minnepinnen."
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B "+
"\u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \'export-csv\' \u043D\u0430 "+
"USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,21:"Los datos del animal se escribieron con \xE9xito en el directorio \'export-csv\' "+
"en la unidad flash USB.",23:"Hayvan verileri USB flash s\xFCr\xFCc\xFCdeki \'export-csv\' dizinine "+
"ba\u015Far\u0131yla yaz\u0131ld\u0131.",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E "+
"\u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \'export-csv\' \u043D\u0430 "+
"USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456."
};C.Bp6={1:"Podaci o \u017Eivotinjama su uspje\u0161no zapisani na USB flash disk! "+
"\u017Delite li sada preuzeti datoteku \'animals.csv\'?",2:"\u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435 "+
"\u0431\u044F\u0445\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E! "+
"\u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0444\u0430\u0439\u043B\u0430 "+
"\u0441 \u0434\u0430\u043D\u043D\u0438 \u201Eanimals.csv\u201C \u0441\u0435\u0433\u0430?"
,4:"Data o zv\xED\u0159atech byla \xFAsp\u011B\u0161n\u011B zaps\xE1na na USB "+
"flash disk! St\xE1hnout soubor s daty \'animals.csv\' nyn\xED?",5:"Dyredata blev succesfuldt skrevet til USB-n\xF8gle! Download datafilen "+
"\'animals.csv\' nu?",0:"Animal data were successfully written to USB flash drive! Download data "+
"file \u2019animals.csv\u2019  now?",6:"Dierdata is succesvol naar USB data geschreven. Download Data bestand \u2019animals.csv\u2019 "+
"nu?",7:"Loomade andmed on edukalt USB m\xE4lupulgale kirjutatud! Kas laadida alla "+
"andmefail \"animals.csv\" n\xFC\xFCd?",8:"El\xE4inten tiedot kirjoitettiin USB-muistitikulle onnistuneesti! Ladataanko "+
"datatiedosto \'animals.csv\' nyt?",9:"Les donn\xE9es des animaux ont \xE9t\xE9 export\xE9es avec succ\xE8s sur "+
"la cl\xE9 USB. Le fichier CSV des donn\xE9es animales doit-il \xEAtre t\xE9l\xE9charg\xE9 "+
"maintenant\xA0?",10:"Tierdaten wurden erfolgreich auf den USB-Stick exportiert. Soll die CSV-Tierdaten~datei "+
"jetzt heruntergeladen werden?",11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF USB "+"flash drive! \u039D\u03B1 \u03BA\u03B1\u03C4\u03B5\u03B2\u03AC\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03C4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \'animals.csv\';"
,12:"Az \xE1llatadatok sikeresen ker\xFCltek \xEDr\xE1sra az USB pendrive-ra! "+
"Let\xF6lten\xE9 most az \'animals.csv\' adatf\xE1jlt?",16:"Dyredata ble vellykket lagret p\xE5 USB-minnepinnen! Vil du laste ned "+
"datafilen \'animals.csv\' n\xE5?",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443! \u0421\u043A\u0430\u0447\u0430\u0442\u044C "+
"\u0444\u0430\u0439\u043B \u0434\u0430\u043D\u043D\u044B\u0445 \"animals.csv\" "+
"\u0441\u0435\u0439\u0447\u0430\u0441?",21:"Los datos del animal se escribieron con \xE9xito en la unidad flash USB. "+
"\xBFDeseas descargar el archivo de datos \'animals.csv\' ahora?",23:"Hayvan verileri ba\u015Far\u0131yla USB flash s\xFCr\xFCc\xFCye yaz\u0131ld\u0131! "+
"\'animals.csv\' veri dosyas\u0131 \u015Fimdi indirilsin mi?",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E "+
"\u043D\u0430 USB \u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447! "+
"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B "+
"\u0434\u0430\u043D\u0438\u0445 \'animals.csv\' \u0437\u0430\u0440\u0430\u0437?"
};C.A$X={1:"CSV datoteka sa {1} obavijest(i) o ro\u0111enju uspje\u0161no je zapisana "+
"u mapu \'{2}\' na USB flash disku.",2:"CSV \u0444\u0430\u0439\u043B\u044A\u0442, \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0449 "+
"{1} \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435, "+
"\u0431\u0435\u0448\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0432 \u043F\u0430\u043F\u043A\u0430 \u201E{2}\u201C \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
,4:"CSV soubor s {1} ozn\xE1men\xEDm(i) o narozen\xED byl \xFAsp\u011B\u0161n\u011B "+
"ulo\u017Een do slo\u017Eky \'{2}\' na USB flash disku.",5:"CSV-fil med {1} f\xF8dselsmeddelelse(r) blev succesfuldt skrevet til mappen "+
"\'{2}\' p\xE5 USB-n\xF8gle.",0:"CSV file with {1} birth notice(s) was successfully written to folder \'{2}\' "+
"on USB flash drive.",6:"CSV bestand bevat {1} geboorte meldingen is succesvol op map \u2019{2}\u2019 "+
"op de USB gezet",7:"CSV-fail, mis sisaldab {1} s\xFCnniteadet, kirjutati edukalt kausta \'{2}\' "+
"USB m\xE4lupulgal.",8:"CSV-tiedosto, joka sis\xE4lt\xE4\xE4 {1} syntym\xE4ilmoitusta, kirjoitettiin "+
"onnistuneesti USB-muistitikulla olevaan kansioon {2}.",9:"Fichier CSV avec {1} date(s) de naissance ont \xE9t\xE9 enregistr\xE9e(s) "+
"avec succ\xE8s dans le dossier \u2019{2}\u2019 sur la cl\xE9 USB.",10:"CSV-Datei mit {1} Ge~burts~mel~dun~g(en) erfolgreich im Verzeichnis \'{2}\' "+
"auf dem USB-^Stick gespeichert.",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 {1} "+
"\u03B1\u03BD\u03B1\u03BA\u03BF\u03AF\u03BD\u03C9\u03C3\u03B7(\u03B5\u03B9\u03C2) "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B5\u03B3\u03C1\u03AC\u03C6\u03B7 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF\u03BD "+"\u03C6\u03AC\u03BA\u03B5\u03BB\u03BF \'{2}\' \u03C3\u03B5 USB flash drive."
,12:"A(z) {1} sz\xFClet\xE9si \xE9rtes\xEDt\xE9s(ek)et tartalmaz\xF3 CSV f\xE1jl "+
"sikeresen ki\xEDr\xE1sra ker\xFClt a(z) \'{2}\' mapp\xE1ba az USB-meghajt\xF3n."
,16:"CSV-fil med {1} f\xF8dselsmelding(er) ble vellykket skrevet til mappen "+"\'{2}\' p\xE5 USB-minnepinnen."
,20:"CSV \u0444\u0430\u0439\u043B \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 "+
"{1} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+"\u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,21:"\xA1El archivo CSV que contiene {1} notificaci\xF3n(es) de nacimiento "+"fue escrito con \xE9xito en la carpeta \'{2}\' en la unidad flash USB!"
,23:"{1} do\u011Fum bildirimini i\xE7eren CSV dosyas\u0131, USB flash s\xFCr\xFCc\xFCdeki "+
"\'{2}\' klas\xF6r\xFCne ba\u015Far\u0131yla yaz\u0131ld\u0131.",24:"CSV \u0444\u0430\u0439\u043B \u0432\u043C\u0456\u0449\u0443\u044E\u0447\u0438\u0439 "+
"{1} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447."
};C.Bp7={1:"CSV datoteka s obavijestima o ro\u0111enju uspje\u0161no je zapisana na "+
"USB flash disk! \u017Delite li sada preuzeti generiranu CSV datoteku?",2:"CSV \u0444\u0430\u0439\u043B \u0441 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435, \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB \u0444\u043B\u0430\u0448\u043A\u0430! "+
"\u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0430\u043D\u0438\u044F "+
"CSV \u0444\u0430\u0439\u043B \u0441\u0435\u0433\u0430?",4:"Soubor CSV s ozn\xE1men\xEDmi o narozen\xED byl \xFAsp\u011B\u0161n\u011B "+
"zaps\xE1n na USB flash disk! St\xE1hnout vygenerovan\xFD soubor CSV nyn\xED?",5:
"CSV-fil med f\xF8dselsannoncer er succesfuldt skrevet til USB-n\xF8gle! "+"Vil du downloade den genererede CSV-fil nu?"
,0:"CSV file with birth notices successfully written to USB flash drive! Download "+
"generated CSV file now?",6:"CSV bestand met geboorte meldingen is succesvol op de USB gezet Download "+
"gemaakt CSV bestand nu?",7:"CSV-fail s\xFCnniteadetega on edukalt USB-m\xE4lupulgale kirjutatud! Kas "+
"laadida genereeritud CSV-fail n\xFC\xFCd alla?",8:"CSV-tiedosto, jossa syntym\xE4ilmoitukset on kirjoitettu USB-muistitikulle "+
"onnistuneesti! Ladataanko luotu CSV-tiedosto nyt?",9:"Fichier CSV avec d\xE9claration de naissance ont \xE9t\xE9 enregistr\xE9 "+
"avec succ\xE8s sur une cl\xE9 USB\xA0! Souhaitez-vous t\xE9l\xE9charger "+"le fichier CSV\xA0?"
,10:"CSV-Datei mit Ge~burts~mel~dun~g(en) erfolgreich auf USB-^Stick gespeichert! "+
"M\xF6chten Sie die erzeugte CSV-^Datei herunter~laden?",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 \u03C4\u03B9\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2 \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF USB "+"flash drive! \u039D\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03BB\u03AE\u03C8\u03B7 "+
"\u03C4\u03BF\u03C5 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03BC\u03AD\u03BD\u03BF\u03C5 "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 CSV \u03C4\u03CE\u03C1\u03B1;",12:"CSV f\xE1jl sz\xFClet\xE9si \xE9rtes\xEDt\xE9sekkel sikeresen ki\xEDrva "+
"USB pendrive-ra! Let\xF6lten\xE9 a l\xE9trehozott CSV f\xE1jlt most?",16:"CSV-fil med f\xF8dselsmeldinger er vellykket skrevet til USB-minnepinne! "+
"Laste ned generert CSV-fil n\xE5?",20:"CSV \u0444\u0430\u0439\u043B \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB "+"\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C! \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+
"\u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"CSV \u0444\u0430\u0439\u043B?",21:"\xA1El archivo CSV con las notificaciones de nacimientos fue escrito con "+
"\xE9xito en la unidad flash USB! \xBFDesea descargar el archivo CSV generado "+
"ahora?",23:"Do\u011Fum bildirimlerini i\xE7eren CSV dosyas\u0131 ba\u015Far\u0131yla "+
"USB flash s\xFCr\xFCc\xFCye yaz\u0131ld\u0131! Olu\u015Fturulan CSV dosyas\u0131 "+
"\u015Fimdi indirilsin mi?",24:"CSV \u0444\u0430\u0439\u043B \u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447! "+
"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0441\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 "+
"CSV \u0444\u0430\u0439\u043B?"};C.A$Y={1:"CSV datoteka s {1} obavijest(i) o kupovini je uspje\u0161no zapisana u "+
"folder \'{2}\' na USB flash disku.",2:"CSV \u0444\u0430\u0439\u043B\u044A\u0442, \u0441\u044A~\u0434\u044A\u0440\u0436\u0430\u0449 "+
"{1} \u0438\u0437~\u0432\u0435\u0441~\u0442\u0438\u044F \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430, "+
"\u0431\u0435\u0448\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0432 \u043F\u0430\u043F\u043A\u0430 \u201E{2}\u201C \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
,4:"Soubor CSV s {1} ozn\xE1men\xEDm(i) o n\xE1kupu byl \xFAsp\u011B\u0161n\u011B "+
"zaps\xE1n do slo\u017Eky \'{2}\' na USB flash disku.",5:"CSV-fil med {1} k\xF8bsmeddelelse(r) blev succesfuldt skrevet til mappen "+
"\'{2}\' p\xE5 USB-n\xF8gle.",0:"CSV file with {1} pur~chase notice(s) was successfully written to folder "+
"\'{2}\' on USB flash drive.",6:"CSV-bestand met {1} aankoopmel~din~g(en) is succesvol weggeschreven naar "+
"map \u2019{2}\u2019 op USB-stick.",7:"CSV-fail, milles on {1} ostuteadet, kirjutati edukalt kausta \'{2}\' USB-m\xE4lupulgale."
,8:"CSV-tiedosto, joka sis\xE4lt\xE4\xE4 {1} ostoilmoitusta, kirjoitettiin "+"onnistuneesti USB-muistitikulla olevaan kansioon {2}."
,9:"Fichier CSV avec {1} donn\xE9e(s) d\u2019achat est enregistr\xE9e(s) avec "+
"succ\xE8s dans le r\xE9pertoire \u2019{2}\u2019 de la cl\xE9 USB.",10:"CSV-Datei mit {1} Zu~gangs~mel~dun~g(en) erfolgreich im Verzeichnis \'{2}\' "+
"auf dem USB-^Stick gespeichert.",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 {1} "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7(\u03B5\u03B9\u03C2) "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF\u03BD "+"\u03C6\u03AC\u03BA\u03B5\u03BB\u03BF \'{2}\' \u03C3\u03B5 USB flash drive."
,12:"A(z) {1} v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9st tartalmaz\xF3 CSV f\xE1jl "+
"sikeresen el lett mentve a(z) \'{2}\' mapp\xE1ba az USB-meghajt\xF3n.",16:"CSV-fil med {1} kj\xF8psmelding(er) ble vellykket skrevet til mappen \'{2}\' "+
"p\xE5 USB-minnepinnen.",20:"CSV-\u0444\u0430\u0439\u043B \u0441 {1} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C(\u044F\u043C\u0438) "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0432 \u043F\u0430\u043F\u043A\u0443 "+
"\'{2}\' \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,21:"\xA1El archivo CSV que contiene {1} notificaci\xF3n(es) de compra fue "+"escrito con \xE9xito en la carpeta \'{2}\' en la unidad flash USB!"
,23:"{1} sat\u0131n alma bildirimini i\xE7eren CSV dosyas\u0131, USB flash "+"s\xFCr\xFCc\xFCs\xFCndeki \'{2}\' klas\xF6r\xFCne ba\u015Far\u0131yla "+
"yaz\u0131ld\u0131.",24:"CSV-\u0444\u0430\u0439\u043B \u0437 {1} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C(\u043C\u0438) "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 \u043F\u0430\u043F\u043A\u0443 "+
"\'{2}\' \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456."
};C.Bp8={1:"CSV datoteka s obavijestima o kupovini uspje\u0161no je zapisana na USB "+
"flash disk! Preuzmite generiranu CSV datoteku sada?",2:"CSV \u0444\u0430\u0439\u043B \u0441 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F "+
"\u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430, \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB \u0444\u043B\u0430\u0448 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E! \u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 "+
"\u043D\u0430 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0430\u043D\u0438\u044F "+
"CSV \u0444\u0430\u0439\u043B \u0441\u0435\u0433\u0430?",4:"Soubor CSV s ozn\xE1men\xEDmi o n\xE1kupu byl \xFAsp\u011B\u0161n\u011B "+
"zaps\xE1n na USB flash disk! Chcete nyn\xED st\xE1hnout vygenerovan\xFD "+"soubor CSV?"
,5:"CSV-fil med k\xF8bsmeddelelser er blevet succesfuldt skrevet til USB-n\xF8gle! "+
"Vil du downloade den genererede CSV-fil nu?",0:"CSV file with purchase notices successfully written to USB flash drive! "+
"Download generated CSV file now?",6:"CSV-bestand met aankoopmeldin~gen succesvol weggeschreven naar USB-stick! "+
"Nu gegenereerd CSV-bestand downloaden?",7:"CSV-fail ostuteadetega on edukalt USB-m\xE4lupulgale kirjutatud! Kas soovite "+
"genereeritud CSV-faili n\xFC\xFCd alla laadida?",8:"CSV-tiedosto, jossa ostoilmoitukset on kirjoitettu USB-muistitikulle onnistuneesti! "+
"Ladataanko luotu CSV-tiedosto nyt?",9:"Le fichier CSV avec les donn\xE9es d\'achats a \xE9t\xE9 enregistr\xE9 "+
"avec succ\xE8s sur la cl\xE9 USB\xA0! Souhaitez-vous t\xE9l\xE9charger "+"le fichier CSV g\xE9n\xE9r\xE9\xA0?"
,10:"CSV-Datei mit Zu~gangs~mel~dun~g(en) erfolgreich auf USB-Stick gespeichert! "+
"M\xF6chten Sie die erzeugte CSV-^Datei herunter~laden?",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 \u03C4\u03B9\u03C2 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF USB "+"flash drive! \u039D\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03BB\u03AE\u03C8\u03B7 "+
"\u03C4\u03BF\u03C5 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03BC\u03AD\u03BD\u03BF\u03C5 "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 CSV \u03C4\u03CE\u03C1\u03B1;",12:"CSV f\xE1jl a v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9sekkel sikeresen l\xE9trehozva "+
"az USB meghajt\xF3n! Szeretn\xE9 let\xF6lteni a gener\xE1lt CSV f\xE1jlt "+"most?"
,16:"CSV-fil med kj\xF8psmeldinger er lagret p\xE5 USB-minnepinnen! Vil du "+"laste ned den genererte CSV-filen n\xE5?"
,20:"CSV-\u0444\u0430\u0439\u043B \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u0445 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C! "+
"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"CSV-\u0444\u0430\u0439\u043B \u0441\u0435\u0439\u0447\u0430\u0441?",21:"\xA1El archivo CSV con las notificaciones de compra fue escrito con \xE9xito "+
"en la unidad flash USB! \xBFDesea descargar el archivo CSV generado ahora?",23:
"Sat\u0131n alma bildirimlerini i\xE7eren CSV dosyas\u0131 ba\u015Far\u0131yla "+
"USB flash s\xFCr\xFCc\xFCye yaz\u0131ld\u0131! Olu\u015Fturulan CSV dosyas\u0131 "+
"\u015Fimdi indirilsin mi?",24:"CSV-\u0444\u0430\u0439\u043B \u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443! "+
"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439 "+
"CSV-\u0444\u0430\u0439\u043B \u0437\u0430\u0440\u0430\u0437?"};C.Surgery={1:"Operacija"
,2:"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u043D\u043E",4:"chirurgie",
5:"Kirurgi",0:"Surgery",6:"operatie",7:"L\xF5ikus",8:"Leikkaus",9:"Chirurgie",10:
"Operation",11:"\u0395\u03B3\u03C7\u03B5\u03AF\u03C1\u03B7\u03C3\u03B7",12:"M\u0171t\xE9t"
,16:"Kirurgi",20:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F",21:"Cirug\xEDa"
,23:"Ameliyat",24:"\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u044F"};C.Bqb={1:"Slanje podataka"
,2:"\u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,4:"Odes\xEDl\xE1n\xED dat",5:"Afsendelse af data",0:"Sending data",6:"Zend data"
,7:"Andmete edastamine",8:"L\xE4hetet\xE4\xE4n tietoja",9:"Envoi de donn\xE9es",
10:"Sende Daten",11:"\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatk\xFCld\xE9s",16:"Sender data",20:"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"
,21:"Enviando datos",23:"Veri g\xF6nderiliyor",24:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u0438\u0445"
};C.Bqc={1:"Sinhronizacija nije uspjela",2:"\u041D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u0430 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
,4:"Synchronizace selhala",5:"Synkronisering mislykkedes",0:"Synchronization failed"
,6:"Synchronization gefaald",7:"S\xFCnkroniseerimine nurjus",8:"L\xE4hetys Synkronointi ep\xE4onnistui"
,9:"\xC9chec du transfert de donn\xE9es",10:"Datentransfer fehlgeschlagen",11:"\u039F \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5",12:"Az \xF6sszehangol\xE1s sikertelen"
,16:"Synkronisering mislyktes",20:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",21:"Fallo en la sincronizaci\xF3n"
,23:"Senkronizasyon ba\u015Far\u0131s\u0131z oldu",24:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0456\u044F "+
"\u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044C"};C.Bqd={1:"Primati podatke"
,2:"\u041F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0434\u0430\u043D\u043D\u0438",4:"P\u0159\xEDjem dat",5:"Modtager data",0:"Receiving data"
,6:"Ontvangen data",7:"Andmete vastuv\xF5tmine",8:"Vastaanottaa tietoja",9:"R\xE9ception de donn\xE9es"
,10:"Empfange Daten",11:"\u03A0\u03B1\u03C1\u03B1\u03BB\u03B1\u03B2\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatok fogad\xE1sa",16:"Mottar data",20:"\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"
,21:"Recibiendo datos",23:"Veri al\u0131yor",24:"\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445"
};C.Bqe={1:"Pokretanje\u2026",2:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0435\u2026"
,4:"Inicializace\u2026",5:"Initialisering\u2026",0:"Initialising\u2026",7:"Alustamine..."
,8:"Alustetaan\u2026",9:"Initialiser...",10:"Initialisiere\u2026",11:"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7..."
,12:"Inicializ\xE1l\xE1s\u2026",16:"Initialiserer \u2026",20:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F..."
,21:"Inicializando...",23:"Ba\u015Flat\u0131l\u0131yor\u2026",24:"\u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F..."
};C.Bqf={1:"Inicijalizacija uvoza",2:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,4:"Inicializace importu",5:"Initialisering af import",0:"Initialising import",7:
"Impordi alustamine",8:"Alustetaan tuontia",9:"Initialisation de l\'importation..."
,10:"Initialisiere Import\u2026",11:"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2",12:"Kezdeti import\xE1l\xE1s"
,16:"Initialiserer import",20:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u0438\u043C\u043F\u043E\u0440\u0442\u0430",21:"Inicializando importaci\xF3n",23:
"\u0130\xE7e aktarma ba\u015Flat\u0131l\u0131yor",24:"\u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F "+
"\u0456\u043C\u043F\u043E\u0440\u0442\u0443"};C.Bqg={1:"\u010Ci\u0161\u0107enje\u2026"
,2:"\u041F\u043E\u0447\u0438\u0441\u0442\u0432\u0430\u043D\u0435...",4:"Ukl\xEDz\xEDm\u2026"
,5:"Rydder op\u2026",0:"Cleaning up\u2026",6:"Opschonen",7:"Impordij\xE4rgne s\xFCnkroniseerimine \u2026"
,8:"Puhdistaa \u2026",9:"Nettoyage",10:"R\xE4ume auf \u2026",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u2026"
,12:"Takar\xEDt\xE1s\u2026",16:"Rydder opp\u2026",20:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430..."
,21:"Limpiando...",23:"Temizleniyor...",24:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430..."
};C.Bqh={1:"Prijenos podataka uspje\u0161no zavr\u0161en",2:"\u041F\u0440\u0435\u0445\u0432\u044A\u0440\u043B\u044F\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E",4:"P\u0159enos dat \xFAsp\u011B\u0161n\u011B dokon\u010Den"
,5:"Dataoverf\xF8rsel er gennemf\xF8rt \u0443\u0441\u043F\u0435\u0448\u043D\u043E"
,0:"Data transfer successfully finished",6:"Data transfer succesvol be\xEBindigd"
,7:"Andmeedastus edukalt l\xF5petatud",8:"Tiedonsiirto onnistui",9:"Transfert de donn\xE9es termin\xE9 avec succ\xE8s"
,10:"Datentransfer erfolgreich abgeschlossen",11:"\u0397 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1"
,12:"Az adat\xE1tvitel sikeresen befejez\u0151d\xF6tt.",16:"Data overf\xF8ringen er fullf\xF8rt"
,20:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430"
,21:"Transferencia de datos finalizada con \xE9xito",23:"Veri aktar\u0131m\u0131 ba\u015Far\u0131yla tamamland\u0131"
,24:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u0438\u0445 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u0430"
};C.N$={1:"sinhronizacija u toku",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435"
,3:"\u540C\u6B65",4:"Synchronizace",5:"Synkronisering",0:"Synchronizing",6:"Data overdraging"
,7:"S\xFCnkroonib",8:"Synkronointi",9:"Transmission",10:"Daten\xFCbertragung",11:
"\u03A3\u03C5\u03BD\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7",12:"Szinkroniz\xE1l\xE1s"
,16:"Synkroniserer",20:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"
,21:"Sincronizando",23:"Senkronize ediliyor",24:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u0438\u0445"
};C.AG2={4:"Teplota \xB0C",0:"\xB0C",8:"\xB0 C",23:"Santigrat"};C.Bqi={4:"Teplota \xB0F"
,5:"\xB0F - grader Fahrenheit",0:"\xB0F",12:"\xB0Fahrenheit (\xB0F)",16:"\xB0C",
23:"Fahrenayt"};C.TempMeasurement={1:"mjerenje temperature",2:"\u0422\u0435\u043C\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,4:"M\u011B\u0159en\xED teploty",5:"Temperaturm\xE5ling",0:"Temp. measurement",6:
"Temperatuur meting",7:"Tempertuuri m\xF5\xF5t",8:"L\xE4mp\xF6tila mittaus",9:"Mesure de la temp."
,10:"Temperaturmessung",11:"\u039C\u03B5\u03C4\u03C1\u03AE\u03C3\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2"
,12:"H\u0151m\xE9rs\xE9kletm\xE9r\xE9s",16:"Temp. m\xE5l",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B"
,21:"Medici\xF3n de temperatura",23:"S\u0131cakl\u0131k Ayar\u0131",24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"
};C.An1={1:"mjerenje temperature",2:"\u0418\u0437\u043C\u0435\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,3:"\u6E2C\u91CF\u6EAB\u5EA6",4:"M\u011B\u0159en\xED teploty",5:"Tag temperature"
,0:"Take temperature",6:"Temp. meten",7:"M\xF5\xF5da temperatuur",8:"Mittaa l\xE4mp\xF6tila"
,9:"Mesure de la temp\xE9rature",10:"Temp. messen",11:"\u03A0\u03AC\u03C1\u03C4\u03B5 \u03C4\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1"
,12:"H\u0151m\xE9rs\xE9kletet m\xE9r",16:"Ta temperaturen",20:"\u0418\u0437\u043C\u0435\u0440\u0438\u0442\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443"
,21:"Medir temperatura",23:"S\u0131cakl\u0131\u011F\u0131 Al",24:"\u0412\u0438\u043C\u0456\u0440\u044F\u0442\u0438"
};C.Temperature={1:"temperatura",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,3:"\u6EAB\u5EA6",4:"Teplota",5:"Temperatur",0:"Temperature",6:"Temperatuur",7:"Temperatuur"
,8:"L\xE4mp\xF6tila",9:"Temp\xE9rature",10:"Temperatur",11:"\u0398\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1"
,12:"H\u0151m\xE9rs\xE9klet",13:"Temperatura",16:"Temperatur",17:"L\xE4mp\xF6tila"
,20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",21:"Temperatura"
,23:"S\u0131cakl\u0131k",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.A$3={1:"ocjenjivanje t.",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438 "+
"\u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438",4:"Do\u010Dasn\xE9 sk\xF3re"
,5:"Temp. scorer",0:"Temp. scores",7:"Temperat. hinne",8:"L\xE4mp\xF6tila pisteet"
,9:"Eval. temp\xE9rature",10:"Bewertung T.",11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2"
,12:"Ideiglenes pontsz\xE1mok",16:"Temp. score",20:"\u041E\u0446\u0435\u043D\u043A\u0430 \u0442\u0435\u043C\u043F."
,21:"Valoraci\xF3n T.",23:"S\u0131cakl\u0131k Puan\u0131",24:"\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0435\u043C\u043F."
};C.AG7={1:"grani\u010Dne vrijednosti",2:"\u041F\u0440\u0430\u0433\u043E\u0432\u0435"
,3:"\u9580\u6ABB",4:"Prahov\xE9 hodnoty",5:"T\xE6rskler",0:"Thresholds",6:"Drempelwaardes"
,7:"K\xFCnnised",8:"Kynnysarvot",9:"Seuil",10:"Schwellenwerte",11:"\u039A\u03B1\u03C4\u03CE\u03C4\u03B1\u03C4\u03B1 \u03CC\u03C1\u03B9\u03B1"
,12:"K\xFCsz\xF6b\xF6k",16:"Terskler",20:"\u041F\u0440\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
,21:"Valores umbrales",23:"Alt s\u0131n\u0131r",24:"\u0413\u0440\u0430\u043D\u0438\u0447\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Bs={1:"vrijeme",2:"\u0427\u0430\u0441",3:"\u6642\u9593",4:"\u010Cas",5:"Tid"
,0:"Time",6:"Tijd",7:"Aeg",8:"Aika",9:"L\u2019heure",10:"Uhrzeit",11:"\u038F\u03C1\u03B1"
,12:"Id\u0151",16:"Tid",20:"\u0412\u0440\u0435\u043C\u044F",21:"Hora",23:"Saat",
24:"\u0427\u0430\u0441"};C.AhT={1:"danas",2:"\u0414\u043D\u0435\u0441",3:"\u4ECA\u65E5"
,4:"Dnes",5:"I dag",0:"Today",6:"Vandaag",7:"T\xE4na",8:"T\xE4n\xE4\xE4n",9:"Aujourd\u2019hui"
,10:"Heute",11:"\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1",12:"Ma",13:"oggi",16:"I dag"
,20:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",21:"Hoy",23:"Bug\xFCn",24:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"
};C.AVt={1:"promjeniti status alarma",2:"\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0430\u043B\u0430\u0440\u043C\u0430\u0442\u0430",3:"\u5207\u63DB\u8B66\u5831\u72C0\u614B"
,4:"P\u0159epnout stav alarmu",5:"Skift alarmstatus",0:"Toggle alarm status",6:"Schakel alarmstatus"
,7:"Hoiatuse \xFCmberl\xFClitamine",8:"Vaihda h\xE4lytyksen tila",9:"Modifier statut de l\u2019alarme"
,10:"Alarmstatus \xE4ndern",11:"\u0395\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7\u03C2 "+
"\u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD",12:"Kapcsold ki/be az \xE9breszt\xE9st"
,16:"Bytt alarmstatus",20:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0442\u0440\u0435\u0432\u043E\u0433\u0438",21:"Cambiar estado alarma",23:"Alarm durumunu de\u011Fi\u015Ftir"
,24:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0442\u0440\u0438\u0432\u043E\u0433\u0438"};C.AVv={1:"Promijeni status pra\u0107enja"
,2:"\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 "+"\u043D\u0430 \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0447\u0430\u0441\u043E\u0432\u043D\u0438\u043A\u0430",4:"P\u0159epnout stav sledov\xE1n\xED"
,5:"Skift urstatus",0:"Toggle watch status",6:"Wijzig kijkstatus",7:"L\xFClita vaatlusseisundit"
,8:"Vaihda seurantatila",9:"revenir sur statue \'suivi\'",10:"Status \u2019Beobachtung\u2019 umkehren"
,11:"\u0395\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7\u03C2 "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2"
,12:"\xC1llapot v\xE1lt\xE1sa",16:"Endre klokkestatus",20:"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",21:"Cambiar estado de seguimiento"
,23:"\u0130zleme durumunu de\u011Fi\u015Ftir",24:"\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0430"};C.Bqr={1:"ukupno",2:"\u041E\u0431\u0449\u043E"
,4:"Celkov\xFD",0:"Total",6:"Totaal",7:"Kokku",8:"Yh~teen~s\xE4",11:"\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF"
,12:"Teljes",20:"\u0412\u0441\u0435\u0433\u043E",23:"Toplam",24:"\u0423\u0441\u044C\u043E\u0433\u043E"
};C.Transponder={1:"transponder",2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,4:"P\u0159evad\u011B\u010D",0:"Transponder",7:"Vastuv\xF5tja",9:"Transpondeur",
11:"\u0391\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2",12:
"Ad\xF3vev\u0151",20:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,21:"Transpondedor",23:"Aktar\u0131c\u0131",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.A$5={1:"Skenirati transponder se ve\u0107 koristi! (\u017Eivotinja {1}) Koristite "+
"transponder koji nije u upotrebi!",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0432\u0435\u0447\u0435 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440, \u043A\u043E\u0439\u0442\u043E "+
"\u043E\u0449\u0435 \u043D\u0435 \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043D!"
,3:"\u6383\u63CF\u7684\u611F\u61C9\u5668\u5DF2\u88AB\u4F7F\u7528\uFF01\n\u8ACB\u4F7F\u7528\u5C1A\u672A\u5206\u914D\u7684\u5176\u4ED6\u611F\u61C9\u5668\uFF01"
,4:"Transpond\xE9r je ji\u017E p\u0159i\u0159azen!\nPou\u017Eijte jin\xFD transpond\xE9r, "+
"kter\xFD je\u0161t\u011B nen\xED p\u0159i\u0159azen!",5:"Den scannede transponder er allerede i brug!\nBrug venligst en anden transponder, "+
"der endnu ikke er tildelt!",0:"Scanned transponder is in use already!\nPlease use another transponder "+
"not assigned yet!",6:"Gescande transponder is al in gebruik!\nGraag een nog niet in gebruik genomen "+
"transponder gebruiken!",7:"Sk\xE4nnitud vastuv\xF5tja juba kasutusel\nKasuta teist numbrit"
,8:"Skannattu transponderi on jo k\xE4yt\xF6ss\xE4!\nK\xE4yt\xE4 toista transponderia, "+
"joka ei ole viel\xE4 m\xE4\xE4ritetty!",9:"Le transpondeur scann\xE9 est d\xE9j\xE0 utilis\xE9\xA0!\nVeuillez utiliser "+
"un autre transpon~deur non encore attribu\xE9\xA0!",10:"Eingelesener Transponder wird bereits genutzt!\nBitte anderen, ungenutzten "+
"Transponder verwenden!",11:"\u039F \u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2 "+
"\u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"\u03AE\u03B4\u03B7!\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+"\u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 "+
"\u03AC\u03BB\u03BB\u03BF\u03BD \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B5\u03BA\u03C7\u03C9\u03C1\u03B7\u03B8\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B1!",12:"Az olvasott transzponder m\xE1r haszn\xE1latban van!\nK\xE9rj\xFCk, haszn\xE1ljon "+
"m\xE9g nem kiosztott transzpondert!",16:"Skannet transponder er allerede i bruk!\nVennligst bruk en annen transponder "+
"som ikke er tildelt enn\xE5!",20:"\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!",21:"\xA1El transpondedor escaneado ya est\xE1 en uso!\n\xA1Utilice un transpondedor "+
"a\xFAn no asignado!",23:"Taranan aktar\u0131c\u0131 zaten kullan\u0131mda!\nL\xFCtfen hen\xFCz "+
"atanmam\u0131\u015F ba\u015Fka bir aktar\u0131c\u0131y\u0131 kullan\u0131n!",24:
"\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u0432\u0438\u043A\u043E\u0440\u0438~\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435 "+
"\u0456\u043D\u0448\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!"
};C.Bqv={1:"Nepoznat transponder! Skenirani transponder ID broj nije prona\u0111en "+
"u sistemu!",2:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440! "+
"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F \u2116 \u043D\u0430 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 \u0435 "+"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\n\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430!"
,4:"Nezn\xE1m\xFD odpov\u011Bdn\xEDk! ID skenovan\xE9ho odpov\u011Bdn\xEDku "+"nenalezeno v syst\xE9mu!"
,5:"Ukendt transponder! Scannet transponder-ID ikke fundet i systemet!",0:"Unknown transponder! Scanned transponder ID not found\nin system!"
,6:"onbekende transponder. Gescande transponder niet gevonden",7:"Tundmatu vastuv\xF5tja! Skanneeritud vastuv\xF5tja ID ei ole s\xFCsteemis "+
"leitav.",8:"Tuntematon transponderi! Skannattua transponderin tunnusta ei l\xF6ydy\nj\xE4rjestelm\xE4st\xE4!"
,9:"Transpondeur inconnu\xA0!\nID de transpondeur scann\xE9 n\u2019a pas \xE9t\xE9 "+
"trouv\xE9 dans le syst\xE8me\xA0!",10:"Unbekannter Transponder!\nDie eingelesene Transponder-ID wurde im System "+
"nicht gefunden!",11:"\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2! "+
"\u03A4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5\n\u03C3\u03C4\u03BF "+
"\u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1!",12:"Ismeretlen ad\xF3vev\u0151! A vizsg\xE1lt ad\xF3vev\u0151 azonos\xEDt\xF3ja "+
"nem tal\xE1lhat\xF3 a rendszerben!",16:"Ukjent transponder! Finner ikke skannet transponder-ID\ni systemet!"
,20:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D!"
,21:"Transpondedor desconocido. El ID de transpondedor escaneado no se encuentra "+
"en el sistema.",23:"Bilinmeyen aktar\u0131c\u0131Taranan aktar\u0131c\u0131 kimli\u011Fi\ninsistemde "+
"bulunamad\u0131!",24:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0443 "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"
};C.Ak6={1:"Braj transpondera!",2:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u611F\u61C9\u5668\u865F\u78BC",4:"Transponder \u010D\xEDslo",5:"Transpondernummer"
,0:"Transponder number",6:"Transpondernummer",7:"Vastuv\xF5tja number",8:"Transponderin numero"
,9:"Num\xE9ro de transpondeur",10:"Transpondernummer",11:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Transzponder sz\xE1m",16:"Transponder nummer",20:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,21:"N\xFAmero del transpondedor",23:"Aktar\u0131c\u0131 numaras\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.Bqw={1:"Transponder je ve\u0107 dodijeljen ovoj \u017Eivotinji! Odspojiti trenutni "+
"transponder i zamijeniti ga sa skeniranim transponderom?",2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044A\u0442 \u0432\u0435\u0447\u0435 "+
"\u0435 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D \u043A\u044A\u043C "+"\u0442\u043E\u0432\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043A\u044A\u0441\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u0441 \u0442\u0435\u043A\u0443\u0449\u0438\u044F "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0438 \u0437\u0430\u043C\u044F\u043D\u0430\u0442\u0430 "+
"\u043C\u0443 \u0441 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440?",4:"Tento zv\xED\u0159eti byl ji\u017E p\u0159i\u0159azen transpond\xE9r! Odpojit "+
"st\xE1vaj\xEDc\xED transpond\xE9r a nahradit jej naskenovan\xFDm transpond\xE9rem?"
,5:"En transponder er allerede tildelt til dette dyr!\nVil du fjerne den nuv\xE6rende "+
"transponder og erstatte den med den scannede transponder?",0:"A transponder was already assigned to this animal!\nUnlink current transponder "+
"and replace it with transponder scanned in?",6:"Er is al een transponder toegezegd aan dit dier. Splits huidige en hernoem "+
"het met transponder die gescand is?",7:"Sellele loomale on juba transponder m\xE4\xE4ratud! Kas katkestada olemasolev "+
"transponder ja asendada see skannitud transponderiga?",8:"T\xE4lle el\xE4imelle on jo m\xE4\xE4ritetty transponderi! Pit\xE4isik\xF6 "+
"t\xE4ll\xE4 hetkell\xE4 m\xE4\xE4ritetty transponderi korvata skannattuun?",9:"Un transpondeur a d\xE9j\xE0 \xE9t\xE9 attribu\xE9 \xE0 cet animal\xA0! "+
"Le transpondeur actuellement attribu\xE9 doit-il \xEAtre remplac\xE9 par "+"celui qui a \xE9t\xE9 scann\xE9\xA0?"
,10:"Diesem Tier wurde bereits ein Transponder zugeordnet! Soll der aktuell "+"zugewiesene Transponder mit dem eingescannten ersetzt werden?"
,11:"\u0388\u03BD\u03B1\u03C2 \u03B1\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AE\u03C2 "+
"\u03AD\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03B6\u03CE\u03BF!\n\u039D\u03B1 "+
"\u03B1\u03C0\u03BF\u03C3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF \u03BF "+"\u03C4\u03C1\u03AD\u03C7\u03C9\u03BD \u03B1\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AE\u03C2 "+
"\u03BA\u03B1\u03B9 \u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03B1\u03B8\u03B5\u03AF "+
"\u03BC\u03B5 \u03C4\u03BF\u03BD \u03B1\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AE "+
"\u03C0\u03BF\u03C5 \u03C3\u03BA\u03B1\u03BD\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5;"
,12:"Ehhez az \xE1llathoz m\xE1r rendeltek transzpondert!\nLev\xE1lasztja a "+"jelenlegi transzpondert \xE9s lecser\xE9li az olvasott transzponderre?"
,16:"En transponder var allerede tildelt dette dyret!\nKoble fra gjeldende "+"transponder og erstatte den med skannet transponder?"
,20:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0443\u0436\u0435 "+
"\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D \u044D\u0442\u043E\u043C\u0443 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443!\n\u041E\u0442\u0432\u044F\u0437\u0430\u0442\u044C "+
"\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E "+"\u043D\u0430 \u043F\u0440\u043E\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440?",21:"\xA1Ya se asign\xF3 un transpondedor a este animal! \xBFDesvincular el "+
"transpondedor actual y reemplazarlo con el transpondedor escaneado?",23:"Bu hayvana zaten bir aktar\u0131c\u0131 atanm\u0131\u015F!\nMevcut aktar\u0131c\u0131n\u0131n "+
"ba\u011Flant\u0131s\u0131 kald\u0131r\u0131l\u0131p, taranan aktar\u0131c\u0131yla "+
"de\u011Fi\u015Ftirilsin mi?",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0443\u0436\u0435 "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0446\u0456\u0439 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0456!\n\u0412\u0456\u0434\'\u0454\u0434\u043D\u0430\u0442\u0438 "+
"\u043F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0456 \u0437\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u0439\u043E\u0433\u043E "+
"\u043D\u0430 \u0432\u0456\u0434\u0441\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439?"
};C.A$6={1:"skeniranje transpondera",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u611F\u61C9\u5668\u6383\u63CF",4:"Skenov\xE1n\xED transponderu",5:"Transponder scanning"
,0:"Transponder Scan",7:"Skanneeri vastuv\xF5tja",8:"Transponder skannaus",9:"Scan transpondeur"
,11:"\u0391\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Transzponder szkennel\xE9s",16:"Transponder skanning",20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430",21:"Escaneo del transpondedor"
,23:"Transponder\u0131 tara",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.Triplets={1:"trojke",2:"\u0422\u0440\u0438\u0437\u043D\u0430\u0446\u0438",4:
"Troj\u010Data",5:"Trillinger",0:"Triplets",6:"Drieling",7:"Kolmikud",8:"Kolmoset"
,9:"Tripl\xE9s",10:"Drillinge",11:"\u03A4\u03C1\u03AF\u03B4\u03C5\u03BC\u03B1",12:
"H\xE1rmasikrek",16:"Trillinger",20:"\u0422\u0440\u043E\u0439\u043D\u044F",21:"Trillizos"
,23:"\xDC\xE7\xFCzler",24:"\u0422\u0440\u0456\u0439\u043D\u044F"};C.BqA={1:"dvojke"
,2:"\u0411\u043B\u0438\u0437\u043D\u0430\u0446\u0438",3:"\u96D9\u80DE\u80CE",4:"Dvoj\u010Data"
,5:"Tvillingef\xF8dsel",0:"Twin birth",6:"Tweeling",7:"Kaksikud",8:"Kaksoset",9:
"Multiple",10:"Zwillingskalb",11:"\u0394\u03AF\u03B4\u03C5\u03BC\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7"
,12:"Iker sz\xFClet\xE9s",16:"Tvillingf\xF8dsel",20:"\u0411\u043B\u0438\u0437\u043D\u0435\u0446"
,21:"Ternero m\xFAltiple",23:"\u0130kiz do\u011Fum",24:"\u0411\u043B\u0438\u0437\u043D\u044E\u043A"
};C.BqB={1:"Dva intervala za \u2642 i \u2640",2:"\u0414\u0432\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 "+
"\u0437\u0430 \u2642 \u0438 \u2640",4:"Dva odli\u0161n\xE9 rozsahy pro \u2642 a \u2640"
,5:"To forskellige r\xE6kker for \u2642 og \u2640",0:"Two distinct ranges for \u2642 and \u2640"
,6:"Twee verschillende bereiken voor \u2642 en \u2640",7:"Kaks erinevat \u2642 ja \u2640 vahemikku"
,8:"Kaksi eri aluetta \u2642 ja \u2640",9:"Deux gammes distinctes pour \u2642 et \u2640"
,10:"Je ein Nummern- bereich f\xFCr \u2642 und \u2640",11:"\u0394\u03CD\u03BF \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03B5\u03C4\u03B9\u03BA\u03AC "+
"\u03B5\u03CD\u03C1\u03B7 \u03B3\u03B9\u03B1 \u2642 \u03BA\u03B1\u03B9 "+"\u2640"
,12:"K\xE9t k\xFCl\xF6nb\xF6z\u0151 tartom\xE1ny \u2642 \xE9s \u2640 sz\xE1m\xE1ra"
,16:"To distinkte omr\xE5der for \u2642 og \u2640",20:"\u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0443 "+
"\u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u2642 \u0438 "+"\u2640"
,21:"Dos rangos distintos para \u2642 y \u2640",23:"\u2642 ve \u2640 i\xE7in iki farkl\u0131 aral\u0131k"
,24:"\u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 "+
"\u043D\u043E\u043C\u0435\u0440\u0456\u0432 \u0434\u043B\u044F \u2642 \u0442\u0430 "+
"\u2640"};C.An7={1:"tip",2:"\u0422\u0438\u043F",3:"\u985E\u578B",4:"Typ",0:"Type"
,7:"T\xF5ug",8:"Tyyp~pi",10:"Typ",11:"\u03A4\u03CD~\u03C0\u03BF\u03C2",12:"T\xEDpus"
,20:"\u0422\u0438\u043F",21:"Tipo",23:"Tip",24:"\u0422\u0438\u043F"};C.Aft={1:"tip \u017Eivotinje"
,2:"\u0422\u0438\u043F \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E",
3:"\u52D5\u7269\u7684\u7A2E\u985E",4:"Druh zv\xED\u0159ete",5:"Type af dyr",0:"Type of animal"
,6:"Type van nutdier",7:"Looma T\xF5ug",8:"El\xE4inlaji",9:"Type d\u2019animal",
10:"Art des Nutztiers",11:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llatfaj",16:"Type dyr",20:"\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Tipo de ganado",23:"Hayvan tipi",24:"\u0422\u0438\u043F \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A$9={1:"ocjenjivanje",2:"\u0422\u0438\u043F \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430"
,3:"\u8A55\u5206\u985E\u578B",4:"Druh hodnocen\xED",5:"Type af bed\xF8mmelse",0:
"Type of rating",6:"Beoordeling",7:"T\xF5u hinnang",8:"Luokituksen tyyppi",9:"\xC9valuation"
,10:"Bewertung",11:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7\u03C2"
,12:"\xC9rt\xE9kel\xE9s t\xEDpusa",16:"Type vurdering",20:"\u041E\u0446\u0435\u043D\u043A\u0430"
,21:"Evaluaci\xF3n",23:"Derecelendirme tipi",24:"\u041E\u0446\u0456\u043D\u043A\u0430"
};C.Baa={1:"oboljenje vimena",2:"\u0411\u043E\u043B\u0435\u0441\u0442\u0438 \u043D\u0430 \u0432\u0438\u043C\u0435\u0442\u043E"
,4:"Nemoci vemene",5:"Yversygdomme",0:"Udder diseases",6:"Uierziekte",7:"Udarahaigused"
,8:"Utaresairaudet",9:"Maladies du pis",10:"Euterkrankheiten",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03C4\u03BF\u03C5 "+
"\u03BC\u03B1\u03C3\u03C4\u03BF\u03CD",12:"Eml\u0151betegs\xE9gek",16:"Jursykdommer"
,20:"\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0432\u044B\u043C\u0435\u043D\u0438"
,21:"Enfermedades de la ubre",23:"Meme Hastal\u0131klar\u0131",24:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0432\u0438\u043C\u0435\u043D\u0456"
};C.Undertemperature={1:"pothla\u0111enost",2:"\u041F\u043E\u043D\u0438\u0436. \u0442\u0435\u043C\u043F."
,3:"\u5728\u6EAB\u5EA6\u4E0B",4:"Za teploty",5:"Underkropstemp.",0:"Undertemp.",
6:"Onder temp.",7:"Madaltemp.",8:"Alil\xE4mp\xF6",9:"Hypothermie",10:"Untertemperatur"
,11:"\u03A5\u03C0\u03BF\u03B8\u03B5\u03C1\u03BC\u03AF\u03B1",12:"Alacsony h\u0151m\xE9rs\xE9kleten"
,20:"\u041D\u0438\u0437\u043A\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,21:"Hipotermia",23:"S\u0131cakl\u0131k alt\u0131nda",24:"\u041D\u0438\u0437\u044C\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Bac={1:"jedinica mjere",2:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u043C\u0430\u0441\u0430"
,3:"\u7269\u8CEA\u55AE\u4F4D",4:"Hmotnost",5:"Masseenhed",0:"Mass unit",6:"Massaeenheid"
,7:"Massi \xFChik",8:"Painoyksikk\xF6",9:"Unit\xE9 de mesure",10:"Masseneinheit"
,11:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B1 \u03BC\u03AC\u03B6\u03B1\u03C2",12:"t\xF6megegys\xE9g"
,16:"Masseenhet",20:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F"
,21:"Unidad de masa",23:"K\xFCtle birimi",24:"\u041E\u0434\u0438\u043D\u0438\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.BqE={1:"celzijus",2:"\u0426\u0435\u043B\u0437\u0438\u0439",3:"\u651D\u6C0F",
4:"Celsia",0:"Celsius",11:"\u039A\u03B5\u03BB\u03C3\u03AF\u03BF\u03C5",20:"\u0426\u0435\u043B\u044C\u0441\u0438\u0439"
,23:"Santigrat",24:"\u0426\u0435\u043B\u044C\u0441\u0456\u0439"};C.BqF={1:"farenhajt"
,2:"\u0424\u0430\u0440\u0435\u043D\u0445\u0430\u0439\u0442",3:"\u83EF\u6C0F",4:"Fahrenheita"
,0:"Fahrenheit",11:"\u03A6\u03B1\u03C1\u03B5\u03BD\u03B1\u0390\u03C4",20:"\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442"
,23:"Fahrenayt",24:"\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442"};C.Bad={
1:"jedinica temperature",2:"\u0422\u0435\u043C\u043F. \u0435\u0434\u0438\u043D\u0438\u0446\u0430"
,3:"\u6EAB\u5EA6\u55AE\u4F4D",4:"Teplota",5:"Temperatureenhed",0:"Temperature unit"
,6:"Temperatuureenheid",7:"Temp \xFChik",8:"L\xE4mp\xF6tilayksik",9:"Unit\xE9 de temp\xE9rature"
,10:"Temperatureinheit",11:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2"
,12:"h\u0151m\xE9rs\xE9kleti egys\xE9g",16:"Temperaturf\xF8ler",20:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",21:"Unidad de temperatura"
,23:"S\u0131cakl\u0131k birimi",24:"\u041E\u0434\u0438\u043D\u0438\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"};C.AHf={2:"\u043C\u0438\u043D"
,3:"\u5206\u9418",4:"Minuty",5:"my",0:"min",11:"\u039B\u03B5\u03C0\u03C4\u03CC",
12:"perc",20:"\u041C\u0438\u043D",23:"Dakika birimi",24:"\u0445\u0432"};C.AHg={1:
"jedinica",2:"\u0415\u0434\u0438\u043D\u0438\u0446\u0438",3:"\u55AE\u4F4D",4:"Jednotky"
,5:"Enheder",0:"Units",6:"Eenheden",7:"\xDChikud",8:"Yksik\xF6t",9:"Unit\xE9s",10:
"Einheiten",11:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B5\u03C2",12:"Egys\xE9gek",16:
"Enheter",20:"\u0415\u0434\u0438\u043D\u0438\u0446\u044B \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F"
,21:"Unidades",23:"Birimler",24:"\u041E\u0434\u0438\u043D\u0438\u0446\u0456 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.Unknown={1:"nepoznat",2:"\u041D\u0435\u043F\u043E\u0437\u043D\u0430\u0442",3:
"\u672A\u77E5",4:"Nezn\xE1m\xFD",5:"Ukendt",0:"Unknown",6:"Onbekend",7:"Tundmatu"
,8:"Tuntematon",9:"Inconnue",10:"Unbekannt",11:"\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF"
,12:"Ismeretlen",16:"Ukjent",20:"\u041D\u0435\u0438~\u0437\u0432\u0435\u0441\u0442\u043D\u043E"
,21:"Des~cono~cida",23:"Bilinmiyor",24:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u043E"
};C.BqG={1:"Skenirani transponder je ve\u0107 dodijeljen drugoj \u017Eivotinji! Odspojite "+
"transponder i dodijelite ga odabranoj \u017Eivotinji {1}?",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0432\u0435\u0447\u0435 \u0435 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D "+
"\u043D\u0430 \u0434\u0440\u0443\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043A\u0440\u0430\u0442\u0435\u0442\u0435 "+
"\u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0438 \u0433\u043E \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u0442\u0435 "+"\u043D\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\xA0{1}?"
,4:"Skenovan\xFD transpond\xE9r je ji\u017E p\u0159i\u0159azen jin\xE9mu zv\xED\u0159eti! "+
"Odpojit transpond\xE9r a p\u0159i\u0159adit ho vybran\xE9mu zv\xED\u0159eti "+"{1}?"
,5:"Den skannede transponder er allerede tildelt et andet dyr! Vil du fjerne "+"tilknytningen fra transponderen og tildele den til det valgte dyr {1}?"
,0:"Scanned transponder is assigned to another animal already!\nUnlink transpon~der "+
"and assign it to selected animal\xA0{1}?",6:"Gescande transponder is toegezegd aan een ander dier!\nSplits transpon~der "+
"en zeg toe naar geselecteerd dier\xA0{1}?",7:"Skaneeritud transponder on juba teisele loomale m\xE4\xE4ratud! Kas lahti "+
"siduda transponder ja m\xE4\xE4rata see valitud loomale {1}?",8:"Skannattu trans~ponderi on jo m\xE4\xE4ritetty toiselle el\xE4imelle!\nPoista "+
"trans~ponderin linkitys ja m\xE4\xE4ritet\xE4\xE4nk\xF6 se valitulle el\xE4imelle\xA0{1}?"
,9:"Le transpondeur scann\xE9 est d\xE9j\xE0 attribu\xE9 \xE0 un autre animal\xA0! "+
"Annuler l\'attribution en cours et assigner le \xE0 l\'animal s\xE9lectionn\xE9\xA0{1}\xA0?"
,10:"Der eingescannte Transponder ist bereits einem anderen Tier zu~gewiesen! "+
"Be~stehende Zuwei~sung l\xF6sen und Transponder dem ausgew\xE4hlten Tier\xA0{1} "+
"zuweisen?",11:"\u039F \u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03B5\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C4\u03AE\u03C2 "+
"\u03AD\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03C3\u03B5 \u03AC\u03BB\u03BB\u03BF \u03B6\u03CE\u03BF!\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03BD\u03B1 \u03B1\u03C0\u03BF\u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03BF\u03BD \u03B5\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C4\u03AE "+
"\u03BA\u03B1\u03B9 \u03BD\u03B1 \u03C4\u03BF\u03BD \u03B1\u03BD\u03B1\u03B8\u03AD\u03C3\u03B5\u03C4\u03B5 "+
"\u03C3\u03C4\u03BF \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF "+
"\u03B6\u03CE\u03BF {1};",12:"A vizsg\xE1lt transzponder m\xE1r egy m\xE1sik \xE1llathoz van rendelve!\nFeloldja "+
"a transzpondert \xE9s hozz\xE1rendeli a kiv\xE1lasztott \xE1llathoz {1}?",16:"Den skannede transponderen er allerede tildelt et annet dyr! Fjern koblingen "+
"fra transponderen og tildel den til det valgte dyret {1}?",20:"\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0443\u0436\u0435 "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u0440\u0443\u0433\u043E\u043C\u0443 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443! \u041E\u0442\u0432\u044F\u0437\u0430\u0442\u044C "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0438 "+"\u043D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0435\u0433\u043E "+
"\u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 "+
"{1}?",21:"\xA1El transpondedor escaneado ya est\xE1 asignado a otro animal! \xBFDesvincular "+
"el transpondedor y asignarlo al animal seleccionado\xA0{1}?",23:"Taranan aktar\u0131c\u0131 zaten ba\u015Fka bir hayvana atanm\u0131\u015F!\nAktar\u0131c\u0131n\u0131n "+
"ba\u011Flant\u0131s\u0131 kald\u0131r\u0131l\u0131p se\xE7ilen hayvana "+"atans\u0131n\xA0{1}?"
,24:"\u0421\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E "+
"\u0456\u043D\u0448\u0456\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0456!\n\u0412\u0456\u0434\'\u0454\u0434\u043D\u0430\u0439\u0442\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0456 "+"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0442\u0435 \u0439\u043E\u0433\u043E "+
"\u043E\u0431\u0440\u0430\u043D\u0456\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0456 "+
"{1}?"};C.UnlinkTransponder={1:"Otka\u010Di transponder",2:"\u041D\u0435\u0441\u0432\u044A\u0440\u0437\u0430\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,4:"Odpojit transpond\xE9r",5:"Afkobl transponder",0:"Unlink transponder",6:"Transponder afnemen"
,7:"Eralda transponder",8:"Poista transponderin linkitys",9:"Retirer le transpondeur"
,10:"Transponder abnehmen",11:"\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03B4\u03AD\u03BA\u03C4\u03B7-\u03C0\u03BF\u03BC\u03C0\u03BF\u03CD"
,12:"Lev\xE1laszt transzponder",16:"Koble fra transponderen",20:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,23:"Aktar\u0131c\u0131n\u0131n ba\u011Flant\u0131s\u0131n\u0131 kald\u0131r",24:
"\u0412\u0456\u0434\'\u0454\u0434\u043D\u0430\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.Unregister={1:"odjaviti",2:"\u041D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D"
,3:"\u672A\u767B\u9304",4:"Zru\u0161it registraci",5:"Afmeld",0:"Unregister",6:"Afmelden"
,7:"Pole registris",8:"Rekister~\xF6im\xE4t\xF6n",9:"D\xE9sinscrire",10:"Abmelden"
,11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",12:"Leiratkoz\xE1s",16:"Avregistrer"
,20:"\u0412\u044B\u0439\u0442\u0438",21:"Anular registro",23:"Kayd\u0131 sil",24:
"\u0412\u0438\u0439\u0442\u0438"};C.AHh={1:"Obri\u0161i \u017Eivotinju + obavijest"
,2:"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"+ \u0431\u0435\u043B\u0435\u0436\u043A\u0430",4:"Odstranit zv\xED\u0159e + upozorn\u011Bn\xED"
,5:"Slet dyr + varsel",0:"Delete animal + notice",6:"Verwijder dier +melding",7:
"Kustuta loom+teavitus",8:"Poista el\xE4in+ilmoituks.",9:"Supprimer animal + d\xE9claration"
,10:"Tier + Meldung l\xF6schen",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B6\u03CE\u03BF\u03C5 "+
"\u03BA\u03B1\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2",12:"T\xF6r\xF6lj \xE1llat + \xE9szrev\xE9tel"
,16:"Slett dyr + melding",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435+\u0443\u0432\u0435\u0434\u043E\u043C."
,21:"Borrar animal+notificat.",23:"Hayvan\u0131 sil + bildirim",24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443+\u043F\u043E\u0432\u0456\u0434\u043E\u043C."
};C.Bae={1:"Neregistrirane \u017Eivotinje",2:"\u041D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438",4:"Neregistrovan\xE1 zv\xED\u0159ata"
,5:"Afmeld dyr",0:"Unregister animals",6:"Dier afmelden",7:"Registreerimata loomad"
,8:"Poista el\xE4inten rekister\xF6inti",9:"D\xE9sinscrire les animaux",10:"Tiere abmelden"
,11:"\u0391\u03BA\u03B1\u03C4\u03B1\u03C7\u03CE\u03C1\u03B7\u03C4\u03B1 \u03B6\u03CE\u03B1"
,12:"Nem regisztr\xE1lt \xE1llatok",16:"Uregistrerte dyr",20:"\u041D\u0435\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",21:"Desregistrar animales",23:
"Kay\u0131ts\u0131z hayvanlar",24:"\u041D\u0435\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.Unspecified={1:"nema podataka",2:
"\u041D\u0435\u043E~\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D",4:"nespecifikovan\xFD"
,5:"Uspecificeret",0:"Unspecified",6:"geen specificatie",7:"T\xE4psusta~mata",8:
"M\xE4\xE4ritt~elem\xE4t\xF6n",9:"Non sp\xE9cifi\xE9",10:"Keine Angabe",11:"\u0391\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03CC\u03C1\u03B9\u03C3\u03C4\u03BF"
,12:"Meghat\xE1rozatlan",16:"Uspesifisert",20:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"
,21:"No especificado",23:"Belirtilmemi\u015F",24:"\u041D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445"
};C.AVK={1:"a\u017Euriranje u toku",2:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\u0442\u0430 "+
"\u0435 \u0432 \u0445\u043E\u0434",4:"Prob\xEDh\xE1 aktualizace",5:"Opdatering i gang"
,0:"Update in progress",7:"V\xE4rskendus pooleli",8:"P\xE4ivitys k\xE4ynniss\xE4"
,9:"Mise \xE0 jour en cours",10:"Aktualisierung l\xE4uft",11:"\u0391\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03C3\u03B5 "+
"\u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7",12:"Friss\xEDt\xE9s folyamatban",16:
"Oppdatering p\xE5g\xE5r",20:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F "+
"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",21:"Actualizaci\xF3n en progreso"
,23:"G\xFCncelleme devam ediyor",24:"\u0412\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
};C.AHi={1:"gornja graniza",2:"\u0413\u043E\u0440\u0435\u043D \u043B\u0438\u043C\u0438\u0442"
,4:"Horn\xED limit",5:"\xD8vre gr\xE6nse",0:"Upper limit",6:"bovengrens",7:"\xDClempiir"
,8:"Yl\xE4raja",9:"Limite maximale",10:"Obergrenze",11:"\u0391\u03BD\u03CE\u03C4\u03B1\u03C4\u03BF \u03CC\u03C1\u03B9\u03BF"
,12:"fels\u0151 hat\xE1r",16:"\xD8vre grense",20:"\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043F\u0440\u0435\u0434\u0435\u043B"
,21:"L\xEDmite superior",23:"\xDCst limit",24:"\u0412\u0435\u0440\u0445\u043D\u044F \u043C\u0435\u0436\u0430"
};C.BqK={3:"Urban \u5065\u5EB7\u76E3\u63A7\u7CFB\u7D71\n\xA9 Urban GmbH & Co.KG, 2024"
,0:"Urban VitalControl\n\xA9 Urban GmbH & Co.KG, 2024",12:"V\xE1rosi VitalControl\n\xA9 Urban GmbH & Co.KG, 2024"
};C.BqL={1:"Tov (spostveni)",2:"\u0413\u043E\u0432\u0435\u0434\u043E (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0430)",4:"Hov\u011Bz\xED (vlastn\xED farma)",5:"Oksek\xF8d (egen g\xE5rd)"
,0:"Beef (own farm)",6:"Mest (eigen bedrijf)",7:"Veiseliha (oma farm)",8:"Liharotu (oma tila)"
,9:"L\u2019engraissement (propre ferme)",10:"Mast (eigener Betrieb)",11:"\u039A\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C6\u03AC\u03C1\u03BC\u03B1\u03C2)",12:"Marha (saj\xE1t farm)",16:"Kj\xF8tt (egen g\xE5rd)"
,20:"\u041D\u0430 \u043C\u044F\u0441\u043E (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 "+
"\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435)",21:"Carne (granja propia)"
,23:"Et\xE7i(kendi \xE7iftli\u011Fi)",24:"\u041D\u0430 \u043C\'\u044F\u0441\u043E (\u0432\u043B\u0430\u0441\u043D\u0435 "+
"\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E)"};C.BqM={
1:"Uzgoj (spostveni)",2:"\u0420\u0430\u0437\u0432\u044A\u0436\u0434\u0430\u043D\u0435 (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0430)",4:"Chov (vlastn\xED farma)",5:"Avl (egen g\xE5rd)"
,0:"Breeding (own farm)",6:"Fokkerij(eigen bedrijf)",7:"Aretus (oma farm)",8:"Jalostus (oma tila)"
,9:"L\u2019\xE9levage (dans sa propre ferme)",10:"Zucht (eigener Betrieb)",11:"\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C6\u03AC\u03C1\u03BC\u03B1\u03C2)",12:"Teny\xE9szt\xE9s (saj\xE1t gazdas\xE1g)"
,16:"Oppdrett (egen g\xE5rd)",20:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438 (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 "+
"\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435)",21:"Cr\xEDa (granja propia)"
,23:"Yeti\u015Ftirme(kendi \xE7iftli\u011Fi)",24:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0456\u0457 (\u0432\u043B\u0430\u0441\u043D\u0435 "+
"\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E)"};C.BqN={
1:"deformitet prilikom ro\u0111enja",2:"\u0412\u0440\u043E\u0434\u0435\u043D\u043E \u0443\u0432\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,4:"Vrozen\xE1 vada",5:"F\xF8dselsdefekt",0:"Birth defect",6:"Miskraam",7:"S\xFCnnidefekt"
,8:"Synnynn\xE4inen vika",9:"Anomalie de naissance",10:"Missgeburt",11:"\u0393\u03B5\u03BD\u03B5\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03C9\u03BC\u03B1\u03BB\u03AF\u03B1"
,12:"Sz\xFClet\xE9si rendelleness\xE9g",16:"F\xF8dselsskade",20:"\u0412\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0444\u0435\u043A\u0442"
,21:"Defecto de nacimiento",23:"Do\u011Fum kusuru",24:"\u0423\u0440\u043E\u0434\u0436\u0435\u043D\u0438\u0439 \u0434\u0435\u0444\u0435\u043A\u0442"
};C.BqO={1:"mrtvoro\u0111eno",2:"\u041C\u044A\u0440\u0442\u0432\u043E \u0440\u043E\u0434\u0435\u043D\u043E"
,4:"Mrtv\u011B narozen\xFD",5:"D\xF8df\xF8dt",0:"Dead born",6:"Doodgeboren",7:"Surnults\xFCnd"
,8:"Syntynyt kuolleena",9:"Mort-n\xE9",10:"Tot geboren",11:"\u039D\u03B5\u03BA\u03C1\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7"
,12:"Halva sz\xFCletett",16:"D\xF8d f\xF8dt",20:"\u041C\u0451\u0440\u0442\u0432\u043E\u0440\u043E\u0436\u0434\u0451\u043D\u043D\u044B\u0439"
,21:"Nacido muerto",23:"\xD6l\xFC do\u011Fum",24:"\u041C\u0435\u0440\u0442\u0432\u043E\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u0438\u0439"
};C.BqP={1:"Uginulo: nakon 3. dana",2:"\u0423\u043C\u0438\u0440\u044F\u043B\u043E: \u0441\u043B\u0435\u0434 3 "+
"\u0434\u0435\u043D",4:"Zem\u0159el: od t\u0159et\xEDho dne d\xE1le",5:"D\xF8d: fra dag 3 og fremefter"
,0:"Died: from day 3 onwards",6:"Dood: vanaf dag 3",7:"Suri: alates 3. p\xE4evast"
,8:"Kuollut: p\xE4iv\xE4st\xE4 3 l\xE4htien",9:"D\xE9c\xE8s\xA0: \xE0 partir du troisi\xE8me jour"
,10:"Verendet: ab 3. Tag",11:"\u03A0\u03AD\u03B8\u03B1\u03BD\u03B5: \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD "+
"3\u03B7 \u03B7\u03BC\u03AD\u03C1\u03B1 \u03BA\u03B1\u03B9 \u03BC\u03B5\u03C4\u03AC"
,12:"Meghalt: a 3. napt\xF3l kezdve",16:"D\xF8de: fra dag 3 og utover",20:"\u0423\u043C\u0435\u0440: \u0441 3-\u0433\u043E \u0434\u043D\u044F"
,21:"Muerto: a partir del tercer d\xEDa",23:"\xD6l\xFCm: 3. g\xFCnden itibaren",
24:"\u041F\u043E\u043C\u0435\u0440: \u0437 3-\u0433\u043E \u0434\u043D\u044F"};C.
BqQ={1:"Uginulo: nakon 48 h",2:"\u0423\u043C\u0438\u0440\u044F\u043B\u043E: \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 "+
"\u043D\u0430 48 \u0447\u0430\u0441\u0430",4:"Zem\u0159el: do 48 hodin",5:"D\xF8d: inden for 48 timer"
,0:"Died: within 48 h",6:"Dood: in eerste 48 uur",7:"Suri: 48 tunni jooksul",8:"Kuollut: 48 tunnin kuluessa"
,9:"D\xE9c\xE8s\xA0: dans le 48h",10:"Verendet: erste 48 h",11:"\u03A0\u03AD\u03B8\u03B1\u03BD\u03B5: \u03BC\u03AD\u03C3\u03B1 \u03C3\u03B5 "+
"48 \u03CE\u03C1\u03B5\u03C2",12:"Meghalt: 48 \xF3r\xE1n bel\xFCl.",16:"D\xF8de: innen 48 timer"
,20:"\u0423\u043C\u0435\u0440: \u043F\u0435\u0440\u0432\u044B\u0435 48 \u0447\u0430\u0441\u043E\u0432"
,21:"Muerto: en las primeras 48 horas",23:"\xD6l\xFCm: 48 saat i\xE7inde",24:"\u041F\u043E\u043C\u0435\u0440: \u043F\u0435\u0440\u0448\u0456 48 \u0433\u043E\u0434\u0438\u043D"
};C.BqR={1:"Ostaje kod prodava\u010Da",2:"\u041E\u0441\u0442\u0430\u0432\u0430 \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430 "+
"\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0447\u0430",4:"Z\u016Fst\xE1v\xE1 na farm\u011B prod\xE1vaj\xEDc\xEDho"
,5:"Forbliver p\xE5 s\xE6lgers g\xE5rd",0:"Remains at seller\u2019s farm",6:"Blijft bij verkoper"
,7:"J\xE4\xE4b m\xFC\xFCja farmi",8:"Pysyy myyj\xE4n tilalla",9:"Demeure \xE0 la ferme du vendeur"
,10:"Verbleib beim Verk\xE4ufer",11:"\u03A0\u03B1\u03C1\u03B1\u03BC\u03AD\u03BD\u03B5\u03B9 \u03C3\u03C4\u03B7 "+
"\u03C6\u03AC\u03C1\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03C9\u03BB\u03B7\u03C4\u03AE"
,12:"Marad az elad\xF3 gazdas\xE1g\xE1ban",16:"Forblir p\xE5 selgers g\xE5rd",20:
"\u041E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0444\u0435\u0440\u043C\u0435 "+
"\u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430",21:"Permanece en la granja del vendedor"
,23:"Sat\u0131c\u0131n\u0131n \xE7iftli\u011Finde kalan",24:"\u0417\u0430\u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0456 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F"
};C.BqS={1:"Abortirano",2:"\u0410\u0431\u043E\u0440\u0442",4:"P\u0159eru\u0161it"
,5:"Afbryd",0:"Abort",6:"Afbreken",7:"Katkesta",8:"Keskeytt\xE4\xE4",9:"Fausse couche"
,10:"Ver~kalbung",11:"\u03A0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03C4\u03B5 \u03C3\u03B5 "+
"\u03B1\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE",12:"Megszak\xEDt",16:"Avbryte",20:"\u0410\u0431\u043E\u0440\u0442"
,21:"Aborto",23:"D\xFC\u015F\xFCk",24:"\u0410\u0431\u043E\u0440\u0442"};C.BqT={1:
"Tov (prodato)",2:"\u0413\u043E\u0432\u0435\u0434\u043E (\u043F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E)"
,4:"Hov\u011Bz\xED maso (prod\xE1van\xE9)",5:"Oksek\xF8d (solgt)",0:"Beef (sold)"
,6:"Mest (verkocht)",7:"Veiseliha (m\xFC\xFCdud)",8:"Liharotu (myyty)",9:"Engraissement (vente)"
,10:"Mast (Verkauf)",11:"\u039A\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5)",12:"Marhah\xFAs (eladva)",16:
"Kj\xF8tt (solgt)",20:"\u041D\u0430 \u043C\u044F\u0441\u043E (\u043F\u0440\u043E\u0434\u0430\u0436\u0430)"
,21:"Carne (vendido)",23:"Et\xE7i (sat\u0131ld\u0131)",24:"\u041D\u0430 \u043C\'\u044F\u0441\u043E (\u043F\u0440\u043E\u0434\u0430\u0436)"
};C.BqU={1:"Uzgoj (prodato)",2:"\u0420\u0430\u0437\u0432\u044A\u0436\u0434\u0430\u043D\u0435 (\u043F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E)"
,4:"Chov (prod\xE1n)",5:"Opdr\xE6t (solgt)",0:"Breeding (sold)",6:"Fokkerij (verkocht)"
,7:"Aretus (m\xFC\xFCdud)",8:"Jalostus (myyty)",9:"\xC9levage (vente)",10:"Zucht (Verkauf)"
,11:"\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5)",12:"Teny\xE9szt\xE9s (eladva)"
,16:"Avl (solgt)",20:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438 (\u043F\u0440\u043E\u0434\u0430\u0436\u0430)"
,21:"Cr\xEDa (vendido)",23:"Yeti\u015Ftirme (sat\u0131ld\u0131)",24:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0456\u0457 (\u043F\u0440\u043E\u0434\u0430\u0436\u0443)"
};C.BqV={1:"vibrator",2:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u043C\u043E\u0442\u043E\u0440"
,4:"Vibra\u010Dn\xED motor",5:"Vibrationsmotor",0:"Vibration motor",6:"Tril motor"
,7:"Vibratsioonimootor",9:"Moteur \xE0 vibration",10:"Vibrationsmotor",11:"\u039C\u03BF\u03C4\u03AD\u03C1 \u03B4\u03CC\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Rezg\u0151motor",16:"Vibrasjonsmotor",20:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 "+
"\u043C\u043E\u0442\u043E\u0440",21:"Motor de vibraci\xF3n",23:"Titre\u015Fim motoru"
,24:"\u0412\u0456\u0431\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043C\u043E\u0442\u043E\u0440"
};C.AsT={1:"vibraciju pokrenuti pritiskom na tipku",2:"\u0412\u0438\u0431\u0440. \u0431\u0443\u0442\u043E\u043D"
,3:"\u555F\u52D5\u4E86Keypress\u4E0A\u7684\u632F\u52D5",4:"Vibrace p\u0159i stisku kl\xE1vesy"
,5:"Vibration ved tastetryk",0:"Vibration on keypress",6:"Vibraties toetsen",7:"Vibratsioon klahvivajutusega"
,8:"T\xE4rin\xE4 painalluksella",9:"Vibration touche",10:"Vibration Tastendruck"
,11:"\u0394\u03CC\u03BD\u03B7\u03C3\u03B7 \u03BA\u03B1\u03C4\u03AC \u03C4\u03BF "+
"\u03C0\u03AC\u03C4\u03B7\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF\u03C5"
,12:"Billenty\u0171le\xFCt\xE9s rezg\xE9se",16:"Vibrasjon ved tasting aktivert",
20:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0436\u0430\u0442\u0438\u044F "+
"\u043A\u043D\u043E\u043F\u043A\u0438",21:"Vibraci\xF3n al pulsar un bot\xF3n",23:
"Tu\u015Fa bas\u0131ld\u0131\u011F\u0131nda titre\u015Fimi aktif hale getir",24:
"\u0412\u0456\u0431\u0440\u0430\u0446\u0456\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u043D\u043D\u044F "+
"\u043A\u043D\u043E\u043F\u043A\u0438"};C.BqY={1:"Demo CitalControl",2:"\u0414\u0435\u043C\u043E VitalControl"
,0:"Demo VitalControl",7:"VitalControl demo",11:"\u0395\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7 VitalControl"
,20:"\u0414\u0435\u043C\u043E VitalControl",21:"Demostraci\xF3n de VitalControl"
,24:"\u0414\u0435\u043C\u043E VitalControl"};C.BqZ={1:"WLAN \u010Dip",2:"\u0427\u0438\u043F WiFI"
,4:"\u010Dip WLAN",5:"WLAN-chip",0:"WLAN Chip",7:"WLAN kiip",8:"WLAN -siru",9:"Puce WIFI"
,11:"WLAN \u03C4\u03C3\u03AF\u03C0",12:"WLAN chip",20:"\u0427\u0438\u043F WiFI",
21:"LED blanco",23:"WLAN \xC7ipi",24:"\u0427\u0456\u043F WiFi"};C.Bq0={1:"\u010Cekanje da se vrijednost o\u010Dita"
,2:"\u0418\u0437\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u043D\u0430 "+
"\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442",3:"\u7B49\u5F85\u7A69\u5B9A\u7684\u503C"
,4:"\u010Cek\xE1n\xED na stabiln\xED hodnotu",5:"Venter p\xE5 stabil v\xE6rdi",0:
"Waiting for stable value",6:"Wachten op stabiele waarde",7:"Stabiilse v\xE4\xE4rtuse ootamine"
,8:"Odotetaan vakaata arvoa",9:"En attente d\u2019une\nvaleur stable",10:"Warte auf stabilen Wert"
,11:"\u0391\u03BD\u03B1\u03BC\u03BF\u03BD\u03AE \u03B3\u03B9\u03B1 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AE "+
"\u03C4\u03B9\u03BC\u03AE",12:"V\xE1rakoz\xE1s stabil \xE9rt\xE9kre",16:"Venter p\xE5 stabil verdi"
,20:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",21:"Esperando valor estable",
23:"Sabit de\u011Fer bekleniyor",24:"\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"};C.WarningActionNotApplicable={
1:"Akcija \'{1}\' nije primjenjiva za odabranu \u017Eivotinju vrste \'{2}\'!",2:
"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u201E{1}\u201C "+
"\u043D\u0435 \u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E "+"\u0437\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u043E\u0442 \u0442\u0438\u043F \u201E{2}\u201C!",4:"Akce \'{1}\' nen\xED vhodn\xE1 pro vybran\xE9 zv\xED\u0159e typu \'{2}\'!"
,5:"Handlingen \'{1}\' er ikke anvendelig for det valgte dyr af typen \'{2}\'!",
0:"Action \u2019{1}\u2019 is not applicable for the selected animal of type "+"\u2019{2}\u2019!"
,6:"Actie \u2019{1}\u2019 is niet beschikbaar voor het geselecteerde dier of "+"type \u2019{2}\u2019"
,7:"Toiming \u2019{1}\u2019 ei ole valitud loomaliigi \u2019{2}\u2019 jaoks "+"kohaldatav!"
,8:"Toiminto \'{1}\' ei sovellu valitulle tyypin \'{2}\' el\xE4imelle!",9:"L\'action \u2019{1}\u2019 n\'est pas applicable \xE0 l\'animal de type "+
"\u2019{2}\u2019\xA0!",10:"Die Aktion \u2019{1}\u2019 ist f\xFCr das Tier vom Typ \u2019{2}\u2019 "+
"nicht anwendbar!",11:"\u0397 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \"{1}\" \u03B4\u03B5\u03BD "+
"\u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03B9\u03BC\u03B7 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF "+
"\u03B6\u03CE\u03BF \u03C4\u03CD\u03C0\u03BF\u03C5 \"{2}\"!",12:"Az \u201E{1}\u201D m\u0171velet nem alkalmazhat\xF3 a kiv\xE1lasztott "+
"\u201E{2}\u201D t\xEDpus\xFA \xE1llatra!",16:"Handling \'{1}\' er ikke aktuelt for det valgte dyret av type \'{2}\'!"
,20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u2019{1}\u2019 \u043D\u0435 "+
"\u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u043E "+
"\u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430 "+
"\u2019{2}\u2019!",21:"Action \'{1}\' is not applicable for the selected animal of type \'{2}\'!\" "+
"- \"La acci\xF3n \'{1}\' no es aplicable para el animal seleccionado de "+"tipo \'{2}\'."
,23:"\'{1}\' eylemi se\xE7ilen \'{2}\' t\xFCr\xFCndeki hayvan i\xE7in ge\xE7erli "+
"de\u011Fil!",24:"\u0414\u0456\u044F \u2019{1}\u2019 \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0431\u0443\u0442\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0430 "+"\u0434\u043B\u044F \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0442\u0438\u043F\u0443 \u2019{2}\u2019!"};C.Bal={1:"Oprez:\nID \u017Eivotinje {1} ve\u0107 postoji"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u0432\u0435\u0447\u0435 "+
"\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430!",3:"\u5C0F\u725B\u8B58\u5225\u865F {1}\u5DF2\u7D93\u5B58\u5728\uFF01"
,4:"ID zv\xED\u0159ete {1}  ji\u017E existuje",5:"Opm\xE6rksomhed!\n\nDyrets ID {1} eksisterer allerede!"
,0:"Attention!\n\nAnimal ID {1} already exists!",6:"Attentie!\nDier met ID {1} bestaat al!"
,7:"T\xE4helepanu!\nLooma ID {1} kasutusel!",8:"Huomio!\nEl\xE4intunnus {1} on jo olemassa!"
,9:"Attention\xA0!\nAnimal ID {1} existe d\xE9j\xE0\xA0!",10:"Achtung!\n\nTier mit ID {1} bereits vorhanden!"
,11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\u0391\u03C5\u03C4\u03CC "+"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B7\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7"
,12:"Figyelem!\n\nAz \xE1llat azonos\xEDt\xF3 {1} m\xE1r l\xE9tezik!",16:"OBS!\nDyr- ID eksisterer"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C {1} \u0443\u0436\u0435 "+"\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"
,21:"Atenci\xF3n:\n\xA1Ya existe un animal con ID {1}!",23:"Dikkat!\n\nHayvan Kimli\u011Fi {1} zaten mevcut!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\u0422\u0432\u0430\u0440\u0438\u043D\u0430 "+
"\u2116 {1} \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454"};C.Bq1={1:"Pa\u017Enja!\n\nPrilikom vra\u0107anja sigurnosne kopije, va\u0161i trenutni "+
"podaci o \u017Eivotinjama i ure\u0111aju \u0107e biti prepisani!\nDa li "+"zaista \u017Eelite nastaviti s vra\u0107anjem podataka?"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041A\u043E\u0433\u0430\u0442\u043E "+
"\u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u0442\u0435 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E \u043A\u043E\u043F\u0438\u0435, "+
"\u0432\u0430\u0448\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438 "+"\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0449\u0435 "+
"\u0431\u044A\u0434\u0430\u0442 \u043F\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438!\n\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 "+
"\u043B\u0438 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u0442\u0435 "+
"\u0441 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435?",4:"Pozor!\n\nP\u0159i obnov\u011B z\xE1lohy budou va\u0161e aktu\xE1ln\xED "+
"data o zv\xED\u0159atech a za\u0159\xEDzen\xED p\u0159eps\xE1na! Opravdu "+"chcete pokra\u010Dovat v obnov\u011B dat?"
,5:"Advarsel!\n\nN\xE5r du gendanner en sikkerhedskopi, vil dine nuv\xE6rende "+
"dyre- og enhedsdata blive overskrevet!\nVil du virkelig forts\xE6tte med "+"at gendanne data?"
,0:"Attention!\n\nWhen restoring a backup, your current animal and device data "+
"wil be overwritten!\nReally proceed with data restore?",6:"Attentie\n\n Als je er nu een back Up komt, wordt het huidige dier overschreven"
,7:"T\xE4helepanu!\n\nVarunduse taastamisel kirjutatakse \xFCle teie praegused "+
"looma- ja seadmeandmed!\n\nKas soovite kindlasti andmete taastamisega j\xE4tkata?"
,8:"Huomio!\n\nKun palautat varmuuskopion, nykyiset el\xE4in- ja laitetietosi "+
"korvataan!\nJatketaanko tietojen palauttamista?",9:"Attention\xA0!\nLors de la restau~ration de la sauve~garde, vos don~n\xE9es "+
"actuelles sur les animaux et les appareils seront remplac\xE9es\xA0! D\xE9~marrer "+
"vraiment la restauration\xA0?",10:"Achtung!\nBeim Wiederher~stellen der Daten~sicherung werden ihre aktuellen "+
"Tier- und Ger\xE4tedaten \xFCberschrieben!\nR\xFCcksicherung wirklich "+"starten?"
,11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u039A\u03B1\u03C4\u03AC "+"\u03C4\u03B7\u03BD \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC "+
"\u03B5\u03BD\u03CC\u03C2 \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2, \u03C4\u03B1 \u03C4\u03C1\u03AD\u03C7\u03BF\u03BD\u03C4\u03B1 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03C9\u03BD \u03B6\u03CE\u03C9\u03BD "+
"\u03BA\u03B1\u03B9 \u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03C3\u03B1\u03C2 \u03B8\u03B1 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03B1\u03B8\u03BF\u03CD\u03BD!\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC \u03BD\u03B1 "+"\u03C0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C3\u03C4\u03B7\u03BD "+
"\u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD;"
,12:"Figyelem!\n\nAmikor egy biztons\xE1gi ment\xE9st \xE1ll\xEDt vissza, a "+"jelenlegi \xE1llat- \xE9s eszk\xF6zadatok fel\xFCl\xEDr\xE1sra ker\xFClnek!\nVal\xF3ban "+
"folytatja az adatok vissza\xE1ll\xEDt\xE1s\xE1t?",16:"Oppmerksomhet!\n\nN\xE5r du gjenoppretter en sikkerhetskopi, vil dine "+
"n\xE5v\xE6rende dyre- og enhetsdata bli overskrevet!\nVil du virkelig "+"fortsette med datagjenoppretting?"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041F\u0440\u0438 "+"\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B!\n\n\u0412\u044B "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C "+
"\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0445?",21:"\xA1Atenci\xF3n!\nAl restaurar una copia de seguri~dad, sus datos ac~tuales "+
"de ani~ma~les y dispositi~vos se sobrescri~bir\xE1n. \xBFRealmente de~sea "+"continuar con la restau~ra~ci\xF3n de datos?"
,23:"Dikkat!\n\nBir yede\u011Fi geri y\xFCklerken mevcut hayvan ve cihaz verilerinizin "+
"\xFCzerine yaz\u0131lacak!\nGer\xE7ekten veri geri y\xFCkleme i\u015Flemine "+"devam edilsin mi?"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u041F\u0440\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 \u043A\u043E\u043F\u0456\u0457 "+
"\u0432\u0430\u0448\u0456 \u043F\u043E\u0442\u043E\u0447\u043D\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D \u0442\u0430 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 "+
"\u0431\u0443\u0434\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0456!\n\u0414\u0456\u0439\u0441\u043D\u043E "+
"\u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F "+
"\u0434\u0430\u043D\u0438\u0445?"};C.WarningDataSync={1:"Sinhronizirati podatke? Podaci \u0107e nakon toga biti izbrisani. Jeste "+
"li sigurni?",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u043A\u044A\u043C "+"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0430? \u0414\u0430\u043D\u043D\u0438\u0442\u0435 "+
"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 "+
"\u0441\u043B\u0435\u0434 \u0442\u043E\u0432\u0430!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u5C07\u8CC7\u6599\u540C\u6B65\u5230\u7D66\u98FC\u6A5F\uFF1F \u4E4B\u5F8C\u8CC7\u6599\u6703\u88AB\u522A\u9664\uFF01\u4F60\u78BA\u5B9A\u55CE\uFF1F"
,4:"Varov\xE1n\xED synchronizace dat",5:"Synkroniser data til feeder? Data vil blive slettet bagefter!\nEr du sikker?"
,0:"Synchronize data to feeder? Data will be deleted afterwards!\nAre you sure?"
,6:"Data op automaat synchroniseren? Data word aansluitend verwijdert!\nWeet "+"u dit zeker?"
,7:"Kas s\xFCnkroonida andmed s\xF6\xF6turiga? P\xE4rast seda andmed kustutatakse!\nKas "+
"olete kindel?",8:"Synkronoi tiedot ruokkijaan? Tiedot poistetaan my\xF6hemmin!\nOletko varma?"
,9:"Synchroniser les donn\xE9es avec les DALs? Les donn\xE9es seront supprim\xE9es "+
"par la suite\xA0!\n\xCAtes-vous s\xFBre\xA0?",10:"Daten mit Automaten abgleichen? Die Daten werden anschlie\xDFend gel\xF6scht!\nSind "+
"Sie sicher?",11:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B5 \u03C3\u03B9\u03C4\u03B9\u03C3\u03C4\u03AE; "+
"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B8\u03B1 "+"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD \u03C3\u03C4\u03B7 "+
"\u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1! \u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Szinkroniz\xE1lja az adatokat az etet\u0151h\xF6z? Az adatok ezut\xE1n "+
"t\xF6rl\u0151dnek!\nBiztos benne?",16:"Synkronisere data til automat? Data vil bli slettet etterp\xE5!\nEr du "+
"sikker?",20:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C? "+
"\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",21:"\xBFSincronizar datos con alimentador?\n\xA1A continuaci\xF3n se eliminar\xE1n "+
"los datos!\n\xBFEst\xE1 seguro?",23:"Bilgi senkronizasyonu uyar\u0131s\u0131",24:
"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u0430\u043D\u0456 \u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C? "+
"\u041F\u0456\u0441\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0434\u0430\u043D\u0456 "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.Bq2={1:"Oprez:\nStandardna markice imaju ID od 13, 14 ili 15 brojeva. Na skeniranoj "+
"markici se o\u010Ditavaj samo {1} brojeva!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:\n\u0421\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0430\u0449\u0438\u044F\u0442 "+
"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u0434\u044A\u043B\u044A\u0433 13, "+"14 \u0438\u043B\u0438 15 \u0446\u0438\u0444\u0440\u0438.\n\u0412\u044A\u043F\u0440\u0435\u043A\u0438 "+
"\u0442\u043E\u0432\u0430, \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 "+
"\u043C\u0430\u0440\u043A\u0430 \u0438\u043C\u0430 {1} \u0441\u0430\u043C\u043E "+
"\u0446\u0438\u0444\u0440\u0438!",4:"Upozorn\u011Bn\xED:\nID zv\xED\u0159ete v souladu by m\u011Blo m\xEDt 13, "+
"14 nebo 15 \u010D\xEDslic.\nAv\u0161ak na\u010Dten\xE9 \u010D\xEDslo n\xE1u\u0161nice "+
"m\xE1 pouze {1} \u010D\xEDslic!",5:"Forsigtighed:\nEt overensstemmende dyre-ID skal v\xE6re 13, 14 eller 15 "+
"cifre bredt.\nDet indscannede \xF8rem\xE6rkenummer har dog kun {1} cifre!",0:"Caution:\nA compliant animal ID should be 13, 14 or 15 digits wide.\nHowever, "+
"the ear tag number scanned in has {1} digits only!",6:"Attentie.\nEen diernummer zou 13, 14, of 15 cjfers moeten zijn.\n Ook al "+
"heeft de scanner {1} cijfers",7:"Hoiatus:\nN\xF5uetele vastava looma ID peaks olema 13, 14 v\xF5i 15 numbrit.\nSkannitud "+
"k\xF5rvam\xE4rgil on vaid {1} numbrit!",8:"Varoitus:\nEl\xE4intunnuksessa on oltava 13, 14 tai 15 numeroa.\nKorvatunnisteen "+
"numerossa on kuitenkin vain {1} numeroa!",9:"Attention\xA0:\nUne ID animale conforme doit comporter 13, 14 ou 15 chiffres. "+
"N\xE9anmoins, le num\xE9ro de la boucle \xE9lec~tro~nique scann\xE9e ne "+"comporte que {1} chiffres\xA0!"
,10:"Achtung:\nEine standard~kon~forme Tier-ID um~fasst 13, 14 oder 15 Ziffern. "+
"Auf der einge~scannten Ohr~marke sind jedoch nur {1} Ziffern kodiert!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE:\n\u0388\u03BD\u03B1 \u03C3\u03C5\u03BC\u03B2\u03B1\u03C4\u03CC "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03B8\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 "+"\u03BD\u03B1 \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"\u03B1\u03C0\u03CC 13, 14 \u03AE 15 \u03C8\u03B7\u03C6\u03AF\u03B1.\n\u03A9\u03C3\u03C4\u03CC\u03C3\u03BF, "+
"\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C4\u03BF\u03C5 \u03B1\u03C5\u03C4\u03B9\u03BF\u03CD "+
"\u03C0\u03BF\u03C5 \u03C3\u03B1\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 \u03AD\u03C7\u03B5\u03B9 "+
"\u03BC\u03CC\u03BD\u03BF {1} \u03C8\u03B7\u03C6\u03AF\u03B1!",12:"Figyelem:\nEgy megfelel\u0151 \xE1llat-azonos\xEDt\xF3nak 13, 14 vagy "+
"15 sz\xE1mjegyb\u0151l kell \xE1llnia.\nAzonban a beolvasott f\xFClc\xEDmke "+"sz\xE1ma csak {1} sz\xE1mjegyet tartalmaz!"
,16:"Forsiktig:\nEn kompatibel dyre-ID b\xF8r v\xE6re 13, 14 eller 15 sifre "+"bred.\nMen \xF8remerkenummeret som skannes inn har bare {1} sifre!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 13, 14 \u0438\u043B\u0438 "+
"15 \u0446\u0438\u0444\u0440. \u041D\u0430 \u0441\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0439 "+
"\u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0435 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043E "+
"\u0442\u043E\u043B\u044C\u043A\u043E {1} \u0446\u0438\u0444\u0440(\u0430)!",21:
"Precauci\xF3n:\nUn ID de animal compatible debe tener 13, 14 o 15 d\xEDgitos "+
"de longitud.\nEl n\xFAmero de etiqueta auricular escaneado tiene solo "+"{1} d\xEDgitos"
,23:"Dikkat:\nUyumlu bir hayvan kimli\u011Fi 13, 14 veya 15 hane geni\u015Fli\u011Finde "+
"olmal\u0131d\u0131r.\nAncak, taranan kulak k\xFCpesi numaras\u0131nda "+"yaln\u0131zca {1} hane vard\u0131r!"
,24:"\u0423\u0432\u0430\u0433\u0430:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+"\u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437 "+
"13, 14 \u0447\u0438 15 \u0446\u0438\u0444\u0440. \u041D\u0430 \u0437\u0447\u0438\u0442\u0430\u043D\u0456\u0439 "+
"\u0432\u0443\u0448\u043D\u0456\u0439 \u0431\u0456\u0440\u0446\u0456 \u0437\u0430\u043A\u043E\u0434\u043E\u0432\u0430\u043D\u043E "+
"\u043B\u0438\u0448\u0435 {1} \u0446\u0438\u0444\u0440(\u0430)!"};C.WarningEnterPresentationMode={
1:"Svi podaci o \u017Eivotinjama i aparatima \u0107e se izbrisati i postavit "+"\u0107e se demo podaci. Jeste li sigurni? "
,2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 "+
"\u0438 \u0434\u0435\u043C\u043E \u0434\u0430\u043D\u043D\u0438\u0442\u0435 "+"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0437\u0430\u0440\u0435\u0434\u0435\u043D\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u6240\u6709\u5C0F\u725B\u548C\u8A2D\u5099\u7684\u8CC7\u6599\u5C07\u88AB\u522A\u9664\uFF0C\u5C07\u5B89\u88DD\u5C55\u793A\u8CC7\u6599\uFF01\u4F60\u78BA\u5B9A\u55CE?"
,4:"Varov\xE1n\xED Vstupte do re\u017Eimu prezentace",5:"Alle data om dyr og enheder vil blive slettet, og demodata vil blive indl\xE6st!\nEr "+
"du sikker?",0:"All animal and device data will be deleted and demo data will be loaded!\nAre "+
"you sure?",6:"Alle Dier- en Apparaat data word verwijdert en demo data word geladen!\nWeet "+
"u dit zeker?",7:"K\xF5ik loomade ja seadmete andmed kustutatakse ja laetakse demoandmed!\nKas "+
"olete kindel?",8:"Kaikki el\xE4inten ja laitteiden tiedot poistetaan ja demotiedot ladataan!\nOletko "+
"varma?",9:"Toutes les don~n\xE9es relatives aux animaux et \xE0 l\u2019appareil seront "+
"supprim\xE9es, et les donn\xE9es de d\xE9monstration seront charg\xE9es\xA0! "+
"\xCAtes-vous s\xFBr\xA0?",10:"Alle Tier- und Ger\xE4tedaten werden gel\xF6scht und Demodaten werden "+
"geladen!\nSind Sie sicher?",11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD "+
"\u03B8\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD "+"\u03BA\u03B1\u03B9 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2 \u03B8\u03B1 \u03C6\u03BF\u03C1\u03C4\u03C9\u03B8\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden \xE1llat- \xE9s eszk\xF6zadat t\xF6rl\u0151dik, \xE9s bemutat\xF3 "+
"adatok ker\xFClnek bet\xF6lt\xE9sre!\nBiztos benne?",16:"Alle dyre- og enhetsdata vil bli slettet og demodata vil bli lastet inn!\nEr "+
"du sikker?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0431\u0443\u0434\u0443\u0442 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B, \u0430 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",21:"\xA1Se eliminar\xE1n todos los datos relacionados con los animales y el "+
"dispositivo, y se cargar\xE1n los datos de demostraci\xF3n!\n\xBFEst\xE1 "+"seguro?"
,23:"T\xFCm hayvan ve cihaz verileri silinecek ve demo verileri y\xFCklenecek!\nEmin "+
"misiniz?",24:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0431\u0443\u0434\u0435 "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E, \u0430 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0456 "+
"\u0434\u0430\u043D\u0456 \u0431\u0443\u0434\u0443\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0456!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.Bq3={1:"Pa\u017Enja!\n\nDa li zaista \u017Eelite odjaviti {1} \u017Eivotinja?"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 "+
"\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0434\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 "+
"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438?",4:"Pozor!\n\nOpravdu chcete odregistrovat {1} zv\xED\u0159at?"
,5:"Opm\xE6rksomhed!\n\nVil du virkelig afmelde {1} dyr?",0:"Attention!\n\nDo you really want to unregister {1} animals?"
,6:"Attentie\n\nWil je echt dier {1} afmelden?",7:"T\xE4helepanu!\n\nKas soovite t\xF5esti t\xFChistada {1} looma registreerimise?"
,8:"Huomio!\n\nHaluatko varmasti poistaa {1} el\xE4imen rekister\xF6innin?",9:"Attention\xA0!\n\nVous voulez vraiment d\xE9sinscrire {1} animaux\xA0?"
,10:"Achtung!\n\nM\xF6chten Sie wirklich {1} Tiere abmelden?",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC \u03BD\u03B1 "+"\u03B1\u03C0\u03B5\u03B3\u03B3\u03C1\u03AC\u03C8\u03B5\u03C4\u03B5 {1} "+
"\u03B6\u03CE\u03B1;",12:"Figyelem!\n\nBiztosan szeretn\xE9d leiratkoztatni a(z) {1} \xE1llatot?"
,16:"Oppmerksomhet!\n\nVil du virkelig avregistrere {1} dyr?",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E {1} "+"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445?"
,21:"\xA1Atenci\xF3n! \xBFRealmente desea desregistrar {1} animales?",23:"Dikkat!\n\nGer\xE7ekten {1} hayvan\u0131n kayd\u0131n\u0131 iptal etmek "+
"istiyor musunuz?",24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E "+
"\u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 "+
"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E {1} \u0442\u0432\u0430\u0440\u0438\u043D?"
};C.Bq4={1:"Nedostaje ID \u017Eivotinje! Molimo odredite ID \u017Eivotinje koji je "+
"potrebno kreirati!",2:"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043B\u0438\u043F\u0441\u0432\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, "+
"\u043A\u043E\u0435\u0442\u043E \u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,3:"\u907A\u5931\u5C0F\u725B\u8B58\u5225\u865F\uFF01\n\u8ACB\u6307\u5B9A\u8981\u5EFA\u7ACB\u7684\u5C0F\u725B\u7684\u8B58\u5225\u865F\uFF01"
,4:"ID zv\xED\u0159ete chyb\xED",5:"Dyrets ID mangler!\nAngiv venligst ID\'et p\xE5 det dyr, der skal oprettes!"
,0:"Animal ID is missing!\nPlease specify the ID of the animal to be created!",6:
"Dier-ID kwijt!\nGraag ID van nieuwe dier aangeven!",7:"Looma ID puudu\nPalun sisestage looma ID uue looma loomiseks"
,8:"El\xE4imen tunnus puuttuu!\nM\xE4\xE4rit\xE4 luotavan el\xE4imen tunnus!",9:
"L\u2019ID de l\u2019animal est manquant\xA0! Veuillez sp\xE9cifier l\u2019ID "+
"de l\u2019animal \xE0 cr\xE9er\xA0!",10:"Tier-ID fehlt!\nBitte geben Sie die ID f\xFCr das neu zu erstellende Tier "+
"an!",11:"\u039B\u03B5\u03AF\u03C0\u03B5\u03B9 \u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5!\n\u03A0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03B8\u03B1 "+"\u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03B8\u03B5\u03AF!"
,12:"\xC1llat azonos\xEDt\xF3 hi\xE1nyzik!\nK\xE9rem, adja meg a l\xE9trehozand\xF3 "+
"\xE1llat azonos\xEDt\xF3j\xE1t!",16:"ID mangler!\nVennligst spesifiser ID-en til dyret som skal opprettes!"
,20:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u043E\u0432\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!"
,21:"\xA1Falta ID del animal!\n\xA1Indique ID del animal nuevo que va a crear!",
23:"Hayvan Kimli\u011Fi eksik!\nL\xFCtfen olu\u015Fturulacak hayvan\u0131n "+"kimli\u011Fini belirtin!"
,24:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\u0411\u0443\u0434\u044C "+"\u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+
"ID-\u043D\u043E\u043C\u0435\u0440 \u043D\u043E\u0432\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"
};C.Bq5={1:"\u017Divotinja odabrana kao majka nema dodijeljen 15-cifreni identifikacijski "+
"broj \u017Eivotinje.\n\u017Delite li kreirati \u017Eivotinju bez dodijeljene "+
"majke?",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u0438\u0437\u0431\u0440\u0430\u043D\u043E "+
"\u043A\u0430\u0442\u043E \u043C\u0430\u0439\u043A\u0430, \u043D\u044F\u043C\u0430 "+
"\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D 15-\u0446\u0438\u0444\u0440\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E.\n\u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438 \u0434\u0430 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0430 "+
"\u043C\u0430\u0439\u043A\u0430?",4:"Zv\xED\u0159e vybran\xE9 jako matka nem\xE1 p\u0159id\u011Blen\xE9 15m\xEDstn\xE9 "+
"ID zv\xED\u0159ete.\nChcete vytvo\u0159it zv\xED\u0159e bez p\u0159i\u0159azen\xE9 "+
"matky?",5:"Dyret valgt som moder har ikke et 15-cifret dyre-ID tildelt.\nVil du oprette "+
"et dyr uden en tildelt moder?",0:"The animal selected as dam does not have a 15-digit animal ID assigned.\nDo "+
"you want to create an animal without dam assigned?",6:"Het geselecteerde dier als moederdier heeft geen 15 cijferige ID geregistreerd. "+
"Wil je een dier aanmaken zonder geregistreerde moeder?",7:"Valitud emaslooma jaoks ei ole m\xE4\xE4ratud 15-kohalist looma ID-d.\nKas "+
"soovite luua looma ilma emaslooma m\xE4\xE4ramata?",8:"Em\xE4ksi valitulle el\xE4imelle ei ole m\xE4\xE4ritetty 15-numeroista "+
"el\xE4imen tunnusta.\nHaluatko luoda el\xE4imen, jolla ei ole em\xE4\xE4?",9:"Aucun \u2116 d\'identification \xE0 15 chiffres n\'a \xE9t\xE9 attribu\xE9 "+
"\xE0 l\'animal s\xE9lectionn\xE9e. Souhaitez-vous cr\xE9er un animal auquel "+"aucune m\xE8re n\'est attribu\xE9e\xA0?"
,10:"Dem ausge~w\xE4hl~ten Muttertier ist keine 15-stellige Ohrmarkennum~mer "+"zuge~wiesen. M\xF6chten sie ein Tier anlegen, dem kein Mutter~tier zugewiesen "+
"ist?",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 \u03B5\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B5 "+
"\u03C9\u03C2 \u03BC\u03B7\u03C4\u03AD\u03C1\u03B1 \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 "+
"\u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 15 \u03C8\u03B7\u03C6\u03AF\u03C9\u03BD.\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03BD\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03B5\u03C4\u03B5 "+
"\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 "+
"\u03AD\u03C7\u03B5\u03B9 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03B7 "+
"\u03BC\u03B7\u03C4\u03AD\u03C1\u03B1;",12:"Az anya\xE1llatk\xE9nt kiv\xE1lasztott \xE1llatnak nincs hozz\xE1rendelve "+
"15 sz\xE1mjegy\u0171 \xE1llat-azonos\xEDt\xF3.\nSzeretne l\xE9trehozni "+"egy \xE1llatot anya n\xE9lk\xFCl?"
,16:"Dyret som er valgt som mor har ikke tildelt en 15-sifret dyre-ID.\nVil "+"du opprette et dyr uten mor ID?"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 "+
"\u043A\u0430\u043A \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043D\u0435 "+
"\u0438\u043C\u0435\u0435\u0442 15-\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u043E\u0433\u043E "+
"ID.\n\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0431\u0435\u0437 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F?",21:"El animal seleccionado como madre no tiene asignado un ID de animal de "+
"15 d\xEDgitos.\n\xBFDesea crear un animal sin madre asignada?",23:"Anne Hayvan olarak se\xE7ilen hayvana atanm\u0131\u015F 15 haneli bir "+
"hayvan kimli\u011Fi yok.\nAnne Hayvan olarak atanmam\u0131\u015F bir hayvan "+"olu\u015Fturmak istiyor musunuz?"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u043E\u0431\u0440\u0430\u043D\u0430 "+
"\u044F\u043A \u043C\u0430\u0442\u0438 \u043D\u0435 \u043C\u0430\u0454 "+"15-\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u043E\u0433\u043E ID.\n\u0427\u0438 "+
"\u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0431\u0435\u0437 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u043C\u0430\u0442\u0435\u0440\u0456?"};C.Bq6={1:"Ne mogu oduzeti identifikacijski broj \u017Eivotinje zbog nedostatka broja "+
"markice na uhu!\nMolimo navedite broj markice na uhu za \u017Eivotinju "+"koja \u0107e biti kreirana!"
,2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 "+
"\u043F\u0440\u0438\u0441\u043F\u0430\u0434\u043D\u0430\u0442\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043F\u043E\u0440\u0430\u0434\u0438 "+
"\u043B\u0438\u043F\u0441\u0432\u0430\u0449 \u043D\u043E\u043C\u0435\u0440 "+"\u043D\u0430 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u043A\u043E\u0435\u0442\u043E "+
"\u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,4:"Nelze odvodit ID zv\xED\u0159ete kv\u016Fli chyb\u011Bj\xEDc\xEDmu \u010D\xEDslu "+
"zn\xE1mky na uchu!\nPros\xEDm, uve\u010Fte \u010D\xEDslo zn\xE1mky na uchu "+"pro vytvo\u0159en\xED z\xE1znamu o zv\xED\u0159eti!"
,5:"Kan ikke fratr\xE6kke dyrets ID p\xE5 grund af manglende \xF8rem\xE6rkenummer!\nAngiv "+
"venligst et \xF8rem\xE6rkenummer for at oprette dyret!",0:"Cannot deduct animal ID due to missing ear tag number!\nPlease specify "+
"an ear tag number for the animal to be created!",6:"Voor dat dier kan er geen ID gemaakt worden. Maak een ID aan voor het te "+
"maken dier",7:"Ei saa looma ID-d maha arvata, kuna k\xF5rvam\xE4rgi number puudub!\nPalun "+
"m\xE4\xE4rake loodavale loomale k\xF5rvam\xE4rgi number!",8:"El\xE4imelle ei voi saada tunnusmerkki\xE4!\nAnna korvamerkkinumero uudelle "+
"luotavalle el\xE4imelle!",9:"Aucune identification ne peut \xEAtre d\xE9duite pour l\'animal\xA0!\nVeuillez "+
"indiquer un num\xE9ro de boucle pour le nouvel animal \xE0 produire\xA0!",10:"F\xFCr das Tier kann keine ID ab~geleitet werden!\nBitte geben Sie f\xFCr "+
"das neu zu er~stellende Tier eine Ohrmarken~nummer an!",11:"\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03BB\u03CC\u03B3\u03C9 \u03B1\u03C0\u03BF\u03C5\u03C3\u03AF\u03B1\u03C2 "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2 "+
"\u03C4\u03BF\u03C5 \u03B1\u03C5\u03C4\u03B9\u03BF\u03CD!\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+
"\u03BA\u03B1\u03B8\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 \u03AD\u03BD\u03B1\u03BD "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD \u03B3\u03B9\u03B1 \u03C4\u03BF \u03B6\u03CE\u03BF "+
"\u03C0\u03BF\u03C5 \u03B8\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03B8\u03B5\u03AF!"
,12:"Nem lehet levonni az \xE1llat azonos\xEDt\xF3j\xE1t az elveszett f\xFCljel\xF6l\u0151 "+
"sz\xE1m miatt!\nK\xE9rem, adjon meg egy f\xFCljel\xF6l\u0151 sz\xE1mot "+"az \xFAj \xE1llat l\xE9trehoz\xE1s\xE1hoz!"
,16:"Kan ikke trekke fra dyre-ID p\xE5 grunn av manglende \xF8remerkenummer!\nVennligst "+
"oppgi et \xF8remerkenummer for at dyret skal opprettes!",20:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0438\u0437-\u0437\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F "+
"\u043D\u043E\u043C\u0435\u0440\u0430 \u0431\u0438\u0440\u043A\u0438 \u043D\u0430 "+
"\u0443\u0445\u0435!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+"\u0431\u0438\u0440\u043A\u0438 \u043D\u0430 \u0443\u0445\u0435 \u0434\u043B\u044F "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438"
,21:"\xA1No se puede deducir la ID del animal debido a la falta del n\xFAmero "+
"de etiqueta de o\xEDdo! \xA1Especifique un n\xFAmero de etiqueta de o\xEDdo "+"para el animal que se va a crear!"
,23:"Kulak k\xFCpesi numaras\u0131 eksik oldu\u011Fundan hayvan kimli\u011Fi "+"\xE7\u0131kar\u0131lam\u0131yor!\nL\xFCtfen olu\u015Fturulacak hayvan "+
"i\xE7in bir kulak k\xFCpesi numaras\u0131 belirtin!",24:"\u041D\u0435 \u043C\u043E\u0436\u0443 \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 "+
"ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0447\u0435\u0440\u0435\u0437 "+
"\u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0441\u0435\u0440\u0435\u0436\u043A\u0438 \u0432 \u0432\u0443\u0441\u0456!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u043A\u0430\u0436\u0456\u0442\u044C "+"\u043D\u043E\u043C\u0435\u0440 \u0441\u0435\u0440\u0435\u0436\u043A\u0438 "+
"\u0432 \u0432\u0443\u0441\u0456 \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F "+
"\u0437\u0430\u043F\u0438\u0441\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"
};C.Bq7={1:"Nijedan transponder nije povezan sa odabranom \u017Eivotinjom, stoga odspajanje "+
"transpondera nije mogu\u0107e!",2:"\u041D\u0438\u0442\u043E \u0435\u0434\u0438\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u043D\u0435 \u0435 \u0441\u0432\u044A\u0440\u0437\u0430\u043D \u0441 \u0438\u0437\u0431\u0440\u0430\u043D\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E, \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u043E "+
"\u043F\u0440\u0435\u043C\u0430\u0445\u0432\u0430\u043D\u0435\u0442\u043E "+"\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u043D\u0430 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 \u0435 "+"\u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E!"
,4:"\u017D\xE1dn\xFD transpond\xE9r nen\xED spojen se zvolen\xFDm zv\xED\u0159etem, "+
"proto odpojen\xED transpond\xE9ru nen\xED mo\u017En\xE9!",5:"Ingen transponder er forbundet med det valgte dyr, derfor er det ikke muligt "+
"at afkoble transponderen!",0:"No transponder is linked to selected animal, therefore unlinking of trans~ponder "+
"is not possible!",6:"Er is geen transponder gelinkt aan het geselecteerde dier. Afmelden van "+
"de link is niet mogelijk!",7:"Valitud loomaga ei ole seotud \xFChtegi transponderit, seet\xF5ttu ei ole "+
"transponderi lahti\xFChendamine v\xF5imalik!",8:"Valitulle el\xE4imelle ei ole m\xE4\xE4ritetty transponderia, joten \"poista "+
"transponderi\" -toimintoa ei voida suorittaa!",9:"Aucun trans~pondeur n\u2019est attribu\xE9 \xE0 l\u2019animal s\xE9lectionn\xE9, "+
"l\u2019action \u2019Retirer le transpondeur\u2019 ne peut donc pas \xEAtre "+"effectu\xE9\xA0!"
,10:"Dem ausgew\xE4hl~ten Tier ist kein Transponder zu~gewiesen, da~her kann "+"die Aktion \u2019Transponder ab~nehmen\u2019 nicht ausgef\xFChrt werden!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1\u03C2 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03B1\u03C2 "+
"\u03B4\u03B5\u03BD \u03C3\u03C5\u03BD\u03B4\u03AD\u03B5\u03C4\u03B1\u03B9 "+"\u03BC\u03B5 \u03C4\u03BF \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF "+
"\u03B6\u03CE\u03BF, \u03B5\u03C0\u03BF\u03BC\u03AD\u03BD\u03C9\u03C2 \u03BF "+"\u03B1\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03C4\u03BF\u03C5 "+
"\u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03B1 \u03B4\u03B5\u03BD "+"\u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE!"
,12:"Nincs transzponder kapcsolva a kiv\xE1lasztott \xE1llathoz, ez\xE9rt a "+"transzponder lev\xE1laszt\xE1sa nem lehets\xE9ges!"
,16:"Ingen transponder er koblet til det valgte dyret, derfor er det ikke mulig "+
"\xE5 koble fra transponderen!",20:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 "+
"\u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 "+
"\u043E\u0442\u0432\u044F\u0437\u043A\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430!",21:"No hay un transpondedor vinculado al animal seleccionado, por lo tanto, "+
"no es posible desvincular el trans~pondedor.",23:"Se\xE7ilen hayvana hi\xE7bir aktar\u0131c\u0131 ba\u011Fl\u0131 de\u011Fil, "+
"dolay\u0131s\u0131yla aktar\u0131c\u0131n\u0131n ba\u011Flant\u0131s\u0131n\u0131n "+
"kesilmesi m\xFCmk\xFCn de\u011Fil!",24:"\u0416\u043E\u0434\u0435\u043D \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u043D\u0435 \u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0438\u0439 "+"\u0437 \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C, "+
"\u0442\u043E\u043C\u0443 \u0432\u0456\u0434\'\u0454\u0434\u043D\u0430\u043D\u043D\u044F "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u0435!"
};C.Bq8={1:"Nije mogu\u0107e oduzeti ID \u017Eivotinje zbog nedostaju\u0107eg broja "+
"transpondera!\nMolimo navedite broj transpondera za kreiranje \u017Eivotinje!",
2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u043F\u0440\u0438\u0441\u043F\u0430\u0434\u043D\u0435 "+
"ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043F\u043E\u0440\u0430\u0434\u0438 "+
"\u043B\u0438\u043F\u0441\u0432\u0430\u0449 \u043D\u043E\u043C\u0435\u0440 "+"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u043A\u043E\u0435\u0442\u043E "+
"\u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,4:"Nelze ode\u010D\xEDst ID zv\xED\u0159ete kv\u016Fli chyb\u011Bj\xEDc\xEDmu "+
"\u010D\xEDslu transpond\xE9ru!\nPros\xEDm, uve\u010Fte \u010D\xEDslo transpond\xE9ru "+
"pro vytvo\u0159en\xED zv\xED\u0159ete!",5:"Kan ikke fratr\xE6kke dyrets ID p\xE5 grund af manglende transpondernummer!\nAngiv "+
"venligst et transpondernummer for at oprette dyret!",0:"Cannot deduct animal ID due to missing transponder number!\nPlease specify "+
"a transponder number for the animal to be created!",6:"Kan dier ID niet afleiden vanwege ontbrekende transpondernummer! Geef een "+
"transpondernummer op voor het dier dat moet worden aangemaakt!",7:"Ei saa looma ID-d maha arvata puuduva transpondernumbri t\xF5ttu!\nPalun "+
"m\xE4\xE4rake looma loomiseks transpondernumber!",8:"El\xE4imelle ei voida johtaa tunnusta! Sy\xF6t\xE4 transponderin numero "+
"uudelle luotavalle el\xE4imelle!",9:"Aucune identification ne peut \xEAtre d\xE9duite pour l\'animal\xA0!\nVeuillez "+
"indiquer un num\xE9ro de transpondeur pour le nouvel animal \xE0 \xE9tablir\xA0!"
,10:"F\xFCr das Tier kann keine ID ab~geleitet werden!\nBitte geben Sie f\xFCr "+
"das neu zu er~stellende Tier eine Transponder~nummer an!",11:"\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03BB\u03CC\u03B3\u03C9 \u03B1\u03C0\u03BF\u03C5\u03C3\u03AF\u03B1\u03C2 "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD \u03B4\u03B9\u03B1\u03BC\u03B5\u03C4\u03B1\u03BA\u03BF\u03BC\u03B9\u03C3\u03C4\u03AE!\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+
"\u03BA\u03B1\u03B8\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 \u03AD\u03BD\u03B1\u03BD "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03B4\u03B9\u03B1\u03BC\u03B5\u03C4\u03B1\u03BA\u03BF\u03BC\u03B9\u03C3\u03C4\u03AE "+
"\u03B3\u03B9\u03B1 \u03C4\u03B7 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5!",12:"Nem lehet levonni az \xE1llat azonos\xEDt\xF3j\xE1t a hi\xE1nyz\xF3 transzponder "+
"sz\xE1m miatt!\nK\xE9rem, adjon meg egy transzponder sz\xE1mot az l\xE9trehozand\xF3 "+
"\xE1llat sz\xE1m\xE1ra!",16:"Kan ikke trekke fra dyre-ID p\xE5 grunn av manglende transpondernummer!\nVennligst "+
"oppgi et transpondernummer for at dyret skal opprettes!",20:"\u041D\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0438\u0437-\u0437\u0430 "+
"\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u043E \u0436\u0438\u0432\u043E\u0442",21:"\xA1No se puede deducir la ID del animal debido a la falta del n\xFAmero "+
"de transpondedor! \xA1Especifique un n\xFAmero de transpondedor para el "+"animal que se va a crear!"
,23:"Eksik aktar\u0131c\u0131 numaras\u0131 nedeniyle hayvan kimli\u011Fi \xE7\u0131kar\u0131lam\u0131yor!\nL\xFCtfen "+
"olu\u015Fturulacak hayvan i\xE7in bir aktar\u0131c\u0131 numaras\u0131 "+"belirtin!"
,24:"\u041D\u0435 \u043C\u043E\u0436\u0443 \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 "+
"ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0447\u0435\u0440\u0435\u0437 "+
"\u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u043A\u0430\u0436\u0456\u0442\u044C "+"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F "+"\u0437\u0430\u043F\u0438\u0441\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"
};C.WarningNoActionDefined={1:"Molimo vas definirajte minimalno jednu aktivnost!"
,2:"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 "+
"\u043F\u043E\u043D\u0435 \u0435\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435!"
,4:"Varov\xE1n\xED Nen\xED definov\xE1na \u017E\xE1dn\xE1 akce",5:"Venligst angiv mindst \xE9n handling!"
,0:"Please specify at least one action!",6:"Geef minstens een actie aan!",7:"Palun m\xE4\xE4rake v\xE4hemalt \xFCks toiming!"
,8:"M\xE4\xE4rit\xE4 v\xE4hint\xE4\xE4n yksi toi~min~to!",9:"Sp\xE9cifiez au moins une action\xA0!"
,10:"Bitte geben Sie mindestens eine Aktion an!",11:"\u03A0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD \u03BC\u03AF\u03B1 "+
"\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1!",12:"K\xE9rlek, hat\xE1rozz meg legal\xE1bb egy cselekv\xE9st!"
,16:"Vennligst spesifiser minst \xE9n handling!",20:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 "+
"\u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435!"
,21:"\xA1Indique al menos una acci\xF3n!",23:"L\xFCtfen en az bir eylem belirtin!"
,24:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+
"\u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u043D\u0443 \u0434\u0456\u044E!"};
C.WarningNoActionsForAnimalLoss={1:"Izvo\u0111enje radnji koje nisu dozvoljene zbog gubitka \u017Eivotinja!"
,2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0438\u0442\u043E "+
"\u043D\u0435 \u0441\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438 "+
"\u0437\u0430 \u0437\u0430\u0433\u0443\u0431\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!"
,4:"Prov\xE1d\u011Bn\xED akc\xED, kter\xE9 nejsou povoleny pro ztr\xE1tu zv\xED\u0159ete!"
,5:"Udf\xF8re handlinger ikke tilladt for dyretab!",0:"Performing actions not allowed for animal loss!"
,6:"Acties uitvoeren die niet zijn toegestaan voor verlies van dieren!",7:"Tegutsemine keelatud looma kadumise korral!"
,8:"Toimien suorittaminen ei ole sallittua el\xE4imen menett\xE4misen vuoksi!",9:
"Ex\xE9cution d\'actions non autoris\xE9e pour les pertes d\'animaux\xA0!",10:" Ausf\xFChren von Aktionen f\xFCr Tierverluste nicht zul\xE4ssig!"
,11:"\u0395\u03BA\u03C4\u03AD\u03BB\u03B5\u03C3\u03B7 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD "+
"\u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03BF\u03BD\u03C4\u03B1\u03B9 "+
"\u03B3\u03B9\u03B1 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1 \u03B6\u03CE\u03BF\u03C5!"
,12:"\xC1llatveszt\xE9sre nem enged\xE9lyezett cselekv\xE9sek v\xE9grehajt\xE1sa!"
,16:"Utf\xF8rer handlinger som ikke er tillatt for tap av dyr!",20:"\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F "+
"\u043D\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B \u0434\u043B\u044F "+
"\u043F\u043E\u0442\u0435\u0440\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!"
,21:"\xA1Por favor, especifique al menos una acci\xF3n!",23:"Hayvan kayb\u0131 nedeniyle izin verilmeyen eylemler!"
,24:"\u0412\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u043D\u0456 \u0434\u0456\u0457 "+
"\u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u0456 \u0434\u043B\u044F "+
"\u0432\u0442\u0440\u0430\u0442 \u0442\u0432\u0430\u0440\u0438\u043D!"};C.WarningNoAnimalsRegistered={
1:"Jo\u0161 nema registrovanih \u017Eivotinja, potrebno je prvo registrovati "+"\u017Eivotinje."
,2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438, \u043F\u044A\u0440\u0432\u043E "+"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438!",3:"\u5C1A\u672A\u8A3B\u518A\u5C0F\u725B\uFF0C\u8ACB\u5148\u8A3B\u518A\u5C0F\u725B\uFF01"
,4:"Varov\xE1n\xED \u017D\xE1dn\xE1 zv\xED\u0159ata nebyla zaregistrov\xE1na",5:
"Ingen dyr registreret endnu, registrer venligst dyr f\xF8rst!",0:"No animals registered yet, please register animal(s) first!"
,6:"Nog geen dieren aangemeld, graag eerst dier(en) aanmelden!",7:"Veel pole \xFChtegi looma registreeritud, palun registreerige k\xF5igepealt "+
"loom(ad)!",8:"Ei viel\xE4 rekister\xF6ityj\xE4 el\xE4imi\xE4, rekister\xF6i ensin el\xE4imet!"
,9:"Aucun animal n\u2019a encore \xE9t\xE9 enregistr\xE9, veuillez d\u2019abord "+
"enregistrer animal(s)\xA0!",10:"Noch keine Tiere angemeldet, bitte zuerst Tier(e) anmelden!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03B4\u03B5\u03BD "+
"\u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+"\u03B1\u03BA\u03CC\u03BC\u03B1, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 "+
"\u03B5\u03B3\u03B3\u03C1\u03AC\u03C8\u03C4\u03B5 \u03C0\u03C1\u03CE\u03C4\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1!",12:"M\xE9g nincsenek regisztr\xE1lt \xE1llatok, k\xE9rj\xFCk, el\u0151sz\xF6r "+
"regisztr\xE1ljon \xE1llat(oka)t!",16:"Ingen dyr registrert enn\xE5, vennligst registrer dyr f\xF8rst!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0435\u0449\u0435 \u043D\u0435 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B, "+
"\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!"
,21:"A\xFAn no se han registrado animales. Por favor, registre primero animal(es)."
,23:"Hen\xFCz kay\u0131tl\u0131 hayvan yok, l\xFCtfen \xF6nce hayvan(lar)\u0131 "+
"kaydedin!",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438 \u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 "+
"\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0443/\u0442\u0432\u0430\u0440\u0438\u043D!"
};C.WarningNoBackupFilePresent={1:"Pa\u017Enja!\n\nRezervna datoteka \'backup.vcu\' nije prona\u0111ena! Molimo "+
"vas da je stavite u direktorij \'backup\' na va\u0161em USB ure\u0111aju!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0410\u0440\u0445\u0438\u0432\u043D\u0438\u044F\u0442 "+
"\u0444\u0430\u0439\u043B \u2019backup.vcu\u2019 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D! "+
"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"\u0433\u043E \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F "+
"\u201Ebackup\u201C \u043D\u0430 \u0432\u0430\u0448\u0438\u044F USB \u0441\u0442\u0438\u043A!"
,4:"Pozor!\n\nZ\xE1lo\u017En\xED soubor \u2019backup.vcu\u2019 nebyl nalezen! "+
"Um\xEDst\u011Bte ho, pros\xEDm, do slo\u017Eky \u2019backup\u2019 na va\u0161em "+
"USB disku!",5:"Opm\xE6rksomhed!\n\nSikkerhedskopifilen \u2019backup.vcu\u2019 blev ikke "+
"fundet! Placer den venligst i mappen \u2019backup\u2019 p\xE5 dit USB-stik!",0:
"Attention!\n\nBackup file \u2019backup.vcu\u2019 not found! Place it inside "+"directory \u2019backup\u2019 on your USB stick, please!"
,6:"Attentie! Back-up bestand \'backup.vcu\' niet gevonden! Plaats het in de "+"map \'backup\' op je USB-stick, alsjeblieft!"
,7:"T\xE4helepanu!\n\nVarundusfaili \u2019backup.vcu\u2019 ei leitud! Palun "+"asetage see USB m\xE4lupulga kausta \u2019backup\u2019!"
,8:"Huomio!\n\nVarmuuskopiotiedostoa \'backup.vcu\' ei l\xF6ydy! Aseta se USB-tikulla "+
"olevaan hakemistoon \"varmuuskopio\"!",9:"Attention\xA0!\nLe fichier de sauvegarde \u2019backup.vcu\u2019 n\u2019a "+
"pas \xE9t\xE9 trouv\xE9\xA0! Mettre le dans le r\xE9pertoire \u2019backup\u2019 "+
"sur la cl\xE9 USB\xA0!",10:"Achtung!\n\nSicherungsdatei \u2019backup.vcu\u2019 nicht gefunden! Datei "+
"im Verzeichnis \u2019backup\u2019 auf dem USB-Stick zur Verf\xFCgung stellen!",
11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+
"\u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 \u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 "+
"\'backup.vcu\' \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5! "+
"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF "+
"\u03BC\u03AD\u03C3\u03B1 \u03C3\u03C4\u03BF\u03BD \u03C6\u03AC\u03BA\u03B5\u03BB\u03BF "+
"\'backup\' \u03C3\u03C4\u03BF USB \u03C3\u03B1\u03C2, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE!"
,12:"Figyelem!\n\nA \u2019backup.vcu\u2019 biztons\xE1gi ment\xE9si f\xE1jl "+"nem tal\xE1lhat\xF3! K\xE9rem, helyezze azt a \u2019backup\u2019 mapp\xE1ba "+
"az USB meghajt\xF3j\xE1n!",16:"Oppmerksomhet!\n\nSikkerhetskopi-filen \u2019backup.vcu\u2019 ble ikke "+
"funnet! Vennligst plasser den i mappen \u2019backup\u2019 p\xE5 USB-stikken "+"din!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0424\u0430\u0439\u043B "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\'backup.vcu\' \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D! \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043E "+"\u0432 \u043F\u0430\u043F\u043A\u0443 \'backup\' \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 "+
"\u0444\u043B\u0435\u0448\u043A\u0435!",21:"\xA1Atenci\xF3n!\n\n\xA1No se ha encontrado el archivo de copia de seguridad "+
"\'backup.vcu\'! Col\xF3quelo dentro del directorio \'backup\' en su memoria "+"USB, por favor."
,23:"Dikkat!\n\n\'backup.vcu\' yedekleme dosyas\u0131 bulunamad\u0131! L\xFCtfen "+
"onu USB \xE7ubu\u011Funuzdaki \'yedekleme\' dizininin i\xE7ine yerle\u015Ftirin!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0424\u0430\u0439\u043B \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \'backup.vcu\' \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E! "+
"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u043E\u043C\u0456\u0441\u0442\u0456\u0442\u044C "+
"\u0439\u043E\u0433\u043E \u0432 \u043F\u0430\u043F\u043A\u0443 \'backup\' "+"\u043D\u0430 \u0432\u0430\u0448\u043E\u043C\u0443 USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456!"
};C.WarningNoBackupPathPresent={1:"Pa\u017Enja!\n\nO\u010Dekivana sigurnosna kopija datoteke \'backup.vcu\' "+
"unutar direktorija \'backup\' na va\u0161em USB ure\u0111aju, ali direktorij "+
"\'backup\' nije prona\u0111en!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u043D\u0435\u043E\u0447\u0430\u043A\u0432\u0430\u043D "+
"\u0430\u0440\u0445\u0438\u0432\u0435\u043D \u0444\u0430\u0439\u043B \u2019backup.vcu\u2019 "+
"\u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u2019backup\u2019 "+
"\u043D\u0430 \u0432\u0430\u0448\u0438\u044F USB \u0441\u0442\u0438\u043A, "+"\u043D\u043E \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430 "+
"\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u2019backup\u2019!"
,4:"Pozor!\n\nO\u010Dek\xE1van\xFD z\xE1lo\u017En\xED soubor \u2019backup.vcu\u2019 "+
"ve slo\u017Ece \u2019backup\u2019 na va\u0161em USB disku, ale slo\u017Eka "+"\u2019backup\u2019 nebyla nalezena!"
,5:"Opm\xE6rksomhed!\n\nForventede backupfilen \'backup.vcu\' i mappen \'backup\' "+
"p\xE5 dit USB-stik, men ingen mappe \'backup\' blev fundet!",0:"Attention!\n\nExpected backup file \u2019backup.vcu\u2019 inside directory "+
"\u2019backup\u2019 on your USB stick, but no directory \u2019backup\u2019 "+"was found!"
,6:"Attentie! Er werd backup bestand \'backup.vcu\' verwacht in de map \'backup\' "+
"op uw USB stick, maar er is geen map \'backup\' gevonden!",7:"T\xE4helepanu!\n\nOodatud varukoopi fail \u2019backup.vcu\u2019 kaustas "+
"\u2019backup\u2019 teie USB m\xE4lupulgal, kuid kausta \u2019backup\u2019 "+"ei leitud!"
,8:"Huomio!\n\nOdotettu varmuuskopiotiedosto \'backup.vcu\' USB-tikulla olevan "+
"hakemiston \'backup\' sis\xE4ll\xE4, mutta hakemistoa \'backup\' ei l\xF6ytynyt!"
,9:"Attention\xA0!\nLe r\xE9pertoire \u2019backup\u2019 n\'existe pas sur la "+"cl\xE9 USB\xA0! Mettre le fichier de sauvegarde \u2019backup.vcu\u2019 "+
"dans ce r\xE9pertoire\xA0!",10:"Achtung!\nVerzeichnis \u2019backup\u2019 existiert nicht auf USB-^Stick! "+
"Siche~rungsdatei \u2019backup.vcu\u2019 in diesem Ver~zeichnis zur Verf\xFCgung "+
"stellen!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0391\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \u2019backup.vcu\u2019 "+
"\u03BC\u03AD\u03C3\u03B1 \u03C3\u03C4\u03BF\u03BD \u03C6\u03AC\u03BA\u03B5\u03BB\u03BF "+
"\u2019backup\u2019 \u03C3\u03C4\u03BF USB stick \u03C3\u03B1\u03C2, \u03B1\u03BB\u03BB\u03AC "+
"\u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1\u03C2 "+
"\u03C6\u03AC\u03BA\u03B5\u03BB\u03BF\u03C2 \u2019backup\u2019!",12:"Figyelem!\n\nElv\xE1rt biztons\xE1gi ment\xE9si f\xE1jl \u2019backup.vcu\u2019 "+
"a \u2019backup\u2019 k\xF6nyvt\xE1rban az USB meghajt\xF3n, de nem tal\xE1lhat\xF3 "+
"\u2019backup\u2019 k\xF6nyvt\xE1r!",16:"Oppmerksomhet!\n\nForventet sikkerhetskopifil \u2019backup.vcu\u2019 inne "+
"i mappen \u2019backup\u2019 p\xE5 USB-stikken din, men ingen mappe \u2019backup\u2019 "+
"ble funnet!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 "+
"\u0444\u0430\u0439\u043B \u0431\u044D\u043A\u0430\u043F\u0430 \'backup.vcu\' "+
"\u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \'backup\' "+
"\u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0444\u043B\u0435\u0448\u043A\u0435, "+
"\u043D\u043E \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F "+"\'backup\' \u043D\u0435 \u0431\u044B\u043B\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u0430!"
,21:"\xA1Atenci\xF3n!\n\nSe esperaba el archivo de copia de seguridad \'backup.vcu\' "+
"dentro del directorio \'backup\' en su memoria USB, \xA1pero no se encontr\xF3 "+
"el directorio \'backup\'!",23:"Dikkat!\n\nUSB \xE7ubu\u011Funuzdaki \'backup\' dizininde \'backup.vcu\' "+
"yedekleme dosyas\u0131 bekleniyordu, ancak \'backup\' dizini bulunamad\u0131!",
24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u0444\u0430\u0439\u043B \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \u2019backup.vcu\u2019 \u0443 \u043F\u0430\u043F\u0446\u0456 "+
"\u2019backup\u2019 \u043D\u0430 \u0432\u0430\u0448\u043E\u043C\u0443 USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456, "+
"\u0430\u043B\u0435 \u043F\u0430\u043F\u043A\u0443 \u2019backup\u2019 \u043D\u0435 "+
"\u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"};C.Bq9={1:"Pa\u017Enja!\nK\xF4d dr\u017Eave nije mogao biti prona\u0111en ni u skeniranom "+
"ID-u niti izveden iz ID-a prostorija. \u017Delite li sada unijeti svoj "+"ID prostorija?"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041A\u043E\u0434\u044A\u0442 "+
"\u043D\u0430 \u0434\u044A\u0440~\u0436\u0430~\u0432\u0430~\u0442\u0430 "+"\u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D \u043D\u0438\u0442\u043E \u0432 "+"\u0441\u043A\u0430~\u043D\u0438~\u0440\u0430~\u043D\u0438\u044F  \u0438\u0434\u0435\u043D~\u0442\u0438~\u0444\u0438~\u043A\u0430~\u0446\u0438~\u043E\u043D~\u043D\u0438\u044F "+
"\u043D\u043E~\u043C\u0435\u0440, \u043D\u0438\u0442\u043E \u0432 \u043F\u043E~\u043B\u0443~\u0447\u0435~\u043D\u0430~\u0442\u0430 "+
"\u0444\u043E\u0440\u043C\u0430 \u043D\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F. "+
"\u0418\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0434\u0430 \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 "+
"ID \u043D\u0430 \u0432\u0430\u0448\u0435\u0442\u043E \u043F\u043E~\u043C\u0435~\u0449\u0435~\u043D\u0438\u0435 "+
"\u0441\u0435\u0433\u0430?",4:"Pozor!\nK\xF3d zem\u011B nebyl nalezen ani ve skenovan\xE9m ID ani odvozen "+
"z ID prostor. Chcete zadat ID sv\xFDch prostor nyn\xED?",5:"Advarsel!\nLandekoden kunne hverken findes i det scannede ID eller udledes "+
"fra lokalitets-ID. Vil du indtaste dit lokalitets-ID nu?",0:"Attention!\nCountry code could neither be found in ID scanned in nor derived "+
"form premises ID. Would you like to enter your premises ID now?",6:"Let op!\nDe landcode kon niet worden ge~vonden in het in~gescande ID en "+
"kon ook niet worden afgeleid van het ID van het pand. Wilt u nu uw ID invoeren?"
,7:"T\xE4helepanu!\nRiigikoodi ei leitud ei skaneeritud isikutunnistusest ega "+
"saadud kinnistu ID-st. Kas soovite sisestada oma kinnistu ID n\xFC\xFCd?",8:"Huomio!\nMaakoodia ei l\xF6y~tynyt skannatusta tunnuksesta eik\xE4 johdettu "+
"tila~tunnuksessa. Haluatko antaa tila~tunnuksesi nyt?",9:"Aucun code pays n\'a \xE9t\xE9 trouv\xE9 dans l\'ID scann\xE9, aucun num\xE9ro "+
"d\'entreprise n\'est disponible pour la d\xE9duire. Voulez-^vous maintenant "+"introduire votre\n\u2116 d\'entreprise\xA0?"
,10:"Kein L\xE4ndercode in eingescannter ID gefunden, keine Betriebs~nummer "+"vorhan~den zur Ableitung. M\xF6chten Sie jetzt ihre 12-stellige Betriebsnummer "+
"eingeben?",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE! \u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 "+
"\u03C7\u03CE\u03C1\u03B1\u03C2 \u03B4\u03B5\u03BD \u03BC\u03C0\u03CC\u03C1\u03B5\u03C3\u03B5 "+
"\u03BD\u03B1 \u03B2\u03C1\u03B5\u03B8\u03B5\u03AF \u03BF\u03CD\u03C4\u03B5 "+"\u03C3\u03C4\u03BF \u03C3\u03B1\u03C1\u03C9\u03B8\u03AD\u03BD \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"\u03BF\u03CD\u03C4\u03B5 \u03BD\u03B1 \u03C0\u03C1\u03BF\u03BA\u03CD\u03C8\u03B5\u03B9 "+
"\u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC "+"\u03C4\u03C9\u03BD \u03B5\u03B3\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03AC\u03C3\u03B5\u03C9\u03BD. "+
"\u0398\u03B1 \u03B8\u03AD\u03BB\u03B1\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC "+
"\u03C4\u03C9\u03BD \u03B5\u03B3\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03AC\u03C3\u03B5\u03CE\u03BD "+
"\u03C3\u03B1\u03C2;",12:"Figyelem! Az orsz\xE1gk\xF3d sem az azonos\xEDt\xF3ban, sem az \xFCzemi "+
"azonos\xEDt\xF3b\xF3l nem tal\xE1lhat\xF3. Szeretn\xE9 most megadni az "+"\xFCzemi azonos\xEDt\xF3j\xE1t?"
,16:"Oppmerksomhet!\nLandkoden kunne verken finnes i ID skannet eller avledet "+
"fra lokalenes ID. Vil du angi din lokale ID n\xE5?",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041A\u043E\u0434 "+
"\u0441\u0442\u0440\u0430\u043D\u044B \u043D\u0435 \u0431\u044B\u043B \u043D\u0430\u0439\u0434\u0435\u043D "+
"\u043D\u0438 \u0432 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C "+
"\u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0438 "+
"\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043D\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D "+
"\u0438\u0437 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F. \u0425\u043E\u0442\u0435\u043B\u0438 "+
"\u0431\u044B \u0432\u044B \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A"
,21:"\xA1Atenci\xF3n!\nEl c\xF3digo de pa\xEDs no se encontr\xF3 ni en la ID "+"escaneada ni derivado de la ID de las instalaciones. \xBFLe gustar\xEDa "+
"ingresar su ID de instalaciones ahora?",23:"Dikkat!\nTaranan kimlikte veya t\xFCretilmi\u015F tesis kimli\u011Finde "+
"\xFClke kodu bulunamad\u0131. \u015Eimdi tesis kimli\u011Finizi girmek "+"ister misiniz?"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F "+
"\u0437\u043D\u0430\u0439\u0442\u0438 \u043A\u043E\u0434 \u043A\u0440\u0430\u0457\u043D\u0438 "+
"\u043D\u0456 \u0432 \u0441\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u043E\u043C\u0443 "+
"ID, \u043D\u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0439\u043E\u0433\u043E "+
"\u0437 ID \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F. "+"\u0427\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 "+
"ID \u0432\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F "+
"\u0437\u0430\u0440\u0430\u0437?"};C.WarningNoFlashDrivePresent={1:"Pa\u017Enja!\n\nMolimo, umetnite USB flash disk!"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"USB \u0444\u043B\u0430\u0448\u043A\u0430, \u043C\u043E\u043B\u044F!",4:"Pozor!\n\nVlo\u017Ete, pros\xEDm, USB flash disk!"
,5:"Opm\xE6rksomhed!\n\nInds\xE6t venligst USB-n\xF8gle!",0:"Attention!\n\nInsert USB flash drive, please!"
,6:"Let op!\n\nPlaats een USB-stick!",7:"T\xE4helepanu!\n\nPalun sisestage USB m\xE4lupulk!"
,8:"Huomio!\n\nAseta USB-tikku nyt!",9:"Attention\xA0!\n\nIns\xE9rez maintenant une cl\xE9 USB\xA0!"
,10:"Achtung!\n\nStecken Sie jetzt bitte einen USB-^Stick ein!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE, "+
"\u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF USB flash "+"drive!"
,12:"Figyelem!\n\nK\xE9rj\xFCk, helyezze be az USB flash meghajt\xF3t!",16:"Oppmerksomhet!\n\nVennligst sett inn USB-minnepinnen!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 "+
"USB \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430!"
,21:"\xA1Atenci\xF3n!\n\n\xA1Inserte la memoria USB, por favor!",23:"Dikkat!\n\nUSB flash s\xFCr\xFCc\xFCy\xFC tak\u0131n l\xFCtfen!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0412\u0441\u0442\u0430\u0432\u0442\u0435 "+
"USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447, "+"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430!"
};C.WarningNoMenuItemVisible={1:"Molimo vas da podesite minimalno jedan meni odabir za objavu!"
,2:"\u041C\u043E\u043B\u044F, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u043F\u043E\u043D\u0435 "+
"\u0435\u0434\u0438\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u043E\u0442 "+
"\u043C\u0435\u043D\u044E\u0442\u043E \u0434\u0430 \u0441\u0435 \u0432\u0438\u0436\u0434\u0430!"
,3:"\u8ACB\u81F3\u5C11\u8A2D\u5B9A\u4E00\u500B\u9078\u793A\u7684\u9078\u9805\uFF01"
,4:"Varov\xE1n\xED polo\u017Eky nab\xEDdky nejsou viditeln\xE9",5:"V\xE6r venlig at g\xF8re mindst \xE9n menupunkt synlig!"
,0:"Please set at least one menu item visible!",6:"Kies minstens een menuonderdeel ter beschouwing uit!"
,7:"Palun seadke n\xE4htavaks v\xE4hemalt \xFCks men\xFC\xFCelement!",8:"Aseta v\xE4hint\xE4\xE4n yksi valikkokohta n\xE4kyviin!"
,9:"S\xE9lectionnez au moins un \xE9l\xE9ment de menu visible",10:"Bitte w\xE4hlen Sie mindestens einen Men\xFCeintrag zur Anzeige aus!"
,11:"\u039F\u03C1\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD "+
"\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD "+
"\u03BF\u03C1\u03B1\u03C4\u03CC!",12:"K\xE9rj\xFCk, legal\xE1bb egy men\xFCpontot l\xE1that\xF3v\xE1 tegyen!"
,16:"Vennligst sett minst ett menyelement synlig!",20:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "+
"\u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u043F\u0443\u043D\u043A\u0442 "+
"\u043C\u0435\u043D\u044E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F!"
,21:"\xA1Seleccione al menos un elemento del men\xFA para su visualizaci\xF3n!",
23:"L\xFCtfen en az bir men\xFC \xF6\u011Fesini g\xF6r\xFCn\xFCr hale getirin!",
24:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C "+
"\u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u0438\u043D \u043F\u0443\u043D\u043A\u0442 "+
"\u043C\u0435\u043D\u044F \u0434\u043B\u044F \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F!"
};C.WarningNoPremisesID={1:"Pa\u017Enja!\n\nID prostora jo\u0161 nije definisan! \u017Delite li unijeti "+
"svoj ID prostora sada?",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0441\u0435 "+
"\u043E\u0449\u0435 \u043D\u0435 \u0441\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F! \u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438 \u0434\u0430 \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 "+"ID \u043D\u0430 \u0432\u0430\u0448\u0435\u0442\u043E \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 "+
"\u0441\u0435\u0433\u0430?",4:"Pozor!\n\nID prostor nebylo dosud definov\xE1no! Chcete nyn\xED zadat sv\xE9 "+
"ID prostor?",5:"Opm\xE6rksomhed!\n\nIngen lokations-ID er defineret endnu! Vil du indtaste "+
"dit lokations-ID nu?",0:"Attention!\n\nNo premises ID defined yet! Would you like to enter your "+
"premises ID now?",6:"Attentie! Nog geen pand ID gedefinieerd! Wilt u nu uw pand-ID invoeren?"
,7:"T\xE4helepanu!\n\nHoone ID-d pole veel m\xE4\xE4ratletud! Kas sooviksite "+"sisestada oma hoone ID n\xFC\xFCd?"
,8:"Huomio!\n\nTilatunnusta ei ole viel\xE4 m\xE4\xE4ritetty! Haluatko antaa "+"tilatunnuksesi nyt?"
,9:"Il n\'y a pas encore de num\xE9ro d\'exploitation\xA0! Voulez-vous saisir "+
"maintenant votre num\xE9ro d\'ex~ploi~tation \xE0 12 chiffres\xA0?",10:"Es ist noch keine Betriebsnummer f\xFCr die Bewe~gungsmeldung bei HI-^Tier "+
"hinterlegt! M\xF6chten Sie jetzt ihre 12-stellige Betriebsnummer eingeben?",11:
"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 "+
"\u03BF\u03C1\u03B9\u03C3\u03C4\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B1 "+"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B1\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5! "+
"\u0398\u03B1 \u03B8\u03AD\u03BB\u03B1\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B1\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5 \u03C3\u03B1\u03C2;"
,12:"Figyelem!\n\nM\xE9g nincs r\xF6gz\xEDtett telephely azonos\xEDt\xF3! Szeretn\xE9 "+
"most megadni a telephely azonos\xEDt\xF3j\xE1t?",16:"Oppmerksomhet!\n\nIngen lokale-ID er definert enn\xE5! \xD8nsker du \xE5 "+
"angi din lokale-ID n\xE5?",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0435\u0449\u0435 "+"\u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D! \u0425\u043E\u0442\u0438\u0442\u0435 "+
"\u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0441\u0435\u0439\u0447\u0430\u0441?"
,21:"\xA1Atenci\xF3n!\n\n\xA1Todav\xEDa no se ha definido un ID de predios! "+"\xBFDesea ingresar su ID de predios ahora?"
,23:"Dikkat!\n\nHen\xFCz tan\u0131ml\u0131 tesis kimli\u011Fi yok! \u015Eimdi "+
"tesis kimli\u011Finizi girmek ister misiniz?",24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0406\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440 "+
"\u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0449\u0435 "+"\u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E! \u0427\u0438 "+
"\u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 "+
"\u0441\u0432\u0456\u0439 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440 "+
"\u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0437\u0430\u0440\u0430\u0437?"
};C.WarningNoValidCountryCode={1:"Upozorenje:\nStandardni kod ID \u017Eivotinje sadr\u017Ei i dr\u017Eavni "+
"kod. Prema skeniranom kodu ne postoji dr\u017Eavni kod!",2:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:\n\u0421\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0430\u0449\u0438\u044F\u0442 "+
"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0432\u0430\u043B\u0438\u0434\u0435\u043D "+
"\u043A\u043E\u0434 \u043D\u0430 \u0434\u044A\u0440\u0436\u0430\u0432\u0430\u0442\u0430.\n\u041A\u043E\u0434\u044A\u0442 "+
"{1}, \u043D\u0430\u043C\u0435\u0440\u0435\u043D \u043D\u0430 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0430\u0442\u0430 "+
"\u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430, \u043D\u0435 \u0435 "+
"\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043E\u0434 \u043D\u0430 "+"\u0434\u044A\u0440\u0436\u0430\u0432\u0430!"
,4:"Upozorn\u011Bn\xED:\nID zv\xED\u0159ete v souladu by m\u011Blo obsahovat "+"platn\xFD k\xF3d zem\u011B.\nK\xF3d {1} nalezen\xFD na na\u010Dten\xE9 "+
"zn\xE1mce ucha nen\xED platn\xFD k\xF3d zem\u011B!",5:"Advarsel:\nEt lovligt dyre-ID skal indeholde en gyldig landekode.\nKoden "+
"{1} fundet p\xE5 det scannede \xF8rem\xE6rke er ikke en gyldig landekode!",0:"Warning:\nA compliant animal ID should contain a valid country code.\nCode "+
"{1} found on scanned ear tag is not a valid country code!",6:"Waarschuwing:\nEen conform dier ID moet een geldige landcode bevatten. "+
"Code {1} op het gescande oormerk is geen geldige landcode!",7:"Warning:\nN\xF5uetele vastav loomaID peab sisaldama kehtivat riigikoodi. "+
"Skannitud k\xF5rvam\xE4rgil leitud\nkood {1} ei ole kehtiv riigikood!",8:"Varoitus:\nel\xE4intunnuksen tulee sis\xE4lt\xE4\xE4 kelvollinen maakoodi.\nSkannatussa "+
"korvatunnisteessa oleva koodi {1} ei ole kelvollinen maakoodi!",9:"Avertissement\xA0: Une ID animale conforme doit contenir un code de pays "+
"valide. Le code {1} trouv\xE9 sur la boucle \xE9lec~tro~nique scann\xE9e "+"n\u2019est pas un code de pays valide\xA0!"
,10:"Warnung:\nEine standard~konforme Tier-ID ent~h\xE4lt einen g\xFCltigen "+"L\xE4nder~code. Der ein~ge~scann~te Code {1} ist kein g\xFCltiger L\xE4nder~code!"
,11:"\u03A0\u03C1\u03BF\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7:\n\u039C\u03B9\u03B1 "+
"\u03C3\u03C5\u03BC\u03B2\u03B1\u03C4\u03AE \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"\u03B6\u03CE\u03BF\u03C5 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 "+"\u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF "+
"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03B1\u03C2.\n\u039F "+
"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 {1} \u03C0\u03BF\u03C5 \u03B2\u03C1\u03AF\u03C3\u03BA\u03B5\u03C4\u03B1\u03B9 "+
"\u03C3\u03C4\u03BF \u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF \u03B1\u03C5\u03C4\u03AF "+
"\u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 "+
"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C7\u03CE\u03C1\u03B1\u03C2!",12:
"Figyelmeztet\xE9s:\nEgy megfelel\u0151 \xE1llat azonos\xEDt\xF3nak \xE9rv\xE9nyes "+
"orsz\xE1gk\xF3dot kell tartalmaznia.\nA {1} k\xF3d, amit a beolvasott "+"f\xFCltagn\xE1l tal\xE1ltunk, nem \xE9rv\xE9nyes orsz\xE1gk\xF3d!"
,16:"Advarsel:\nEn kompatibel dyre-ID b\xF8r inneholde en gyldig landskode.\nKode "+
"{1} funnet p\xE5 skannede \xF8remerker er ikke en gyldig landskode!",20:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 "+
"\u043A\u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u044B. \u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u043A\u043E\u0434 {1} \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F "+
"\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u043C \u043A\u043E\u0434\u043E\u043C "+
"\u0441\u0442\u0440\u0430\u043D\u044B!",21:"Advertencia:\nUn ID de animal conforme debe contener un c\xF3digo de pa\xEDs "+
"v\xE1lido.\n\xA1El c\xF3digo {1} encontrado en la etiqueta auricular escaneada "+
"no es un c\xF3digo de pa\xEDs v\xE1lido!",23:"Uyar\u0131:\nUyumlu bir hayvan kimli\u011Fi ge\xE7erli bir \xFClke kodu "+
"i\xE7ermelidir.\nTaranan kulak k\xFCpesinde bulunan {1} kodu ge\xE7erli "+"bir \xFClke kodu de\u011Fil!"
,24:"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 "+
"\u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043C\u0456\u0441\u0442\u0438\u0442\u044C "+
"\u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043A\u043E\u0434 \u043A\u0440\u0430\u0457\u043D\u0438. "+
"\u0412\u0456\u0434\u0441\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439 "+
"\u043A\u043E\u0434 {1} \u043D\u0435 \u0454 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0438\u043C "+
"\u043A\u043E\u0434\u043E\u043C \u043A\u0440\u0430\u0457\u043D\u0438!"};C.WarningOutdatedAnimalWeight={
1:"Stara vrijednost te\u017Eine \u017Eivotinje za ID {1}, vaganje je bilo "+"prije {2}\xA0dana!"
,2:"\u041E\u0441\u0442\u0430\u0440\u044F\u043B\u043E \u0442\u0435\u0433\u043B\u043E "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\n\u0416\u0438\u0432\u043E\u0442\u043D\u043E "+
"{1} \u0431\u0435\u0448\u0435 \u043F\u0440\u0435\u0442\u0435\u0433\u043B\u0435\u043D\u043E "+
"\u043F\u0440\u0435\u0434\u0438 {2} \u0434\u043D\u0438!",4:"Zastaral\xE1 v\xE1ha zv\xED\u0159ete!\n\nZv\xED\u0159e {1} bylo v\xE1\u017Eeno "+
"p\u0159ed {2} dny!",5:"For\xE6ldet dyrev\xE6gt!\n\nDyr {1} blev vejet for {2} dage siden!"
,0:"Outdated animal weight!\n\nAnimal {1} was weighed {2} days ago!",6:"Verouderd diergewicht!\nDier {1} is {2} dagen geleden gewogen!"
,7:"Looma kaalu andmed on aegunud!\n\nLooma {1} kaaluti {2} p\xE4eva eest!",8:"Vanhentunut el\xE4imen paino!\n\nEl\xE4in {1} punnittiin {2} p\xE4iv\xE4\xE4 "+
"sitten!",9:"Poids de l\'animal p\xE9rim\xE9\xA0!\nL\'animal {1} a \xE9t\xE9 pes\xE9 "+
"il y a d\xE9j\xE0 {2}\xA0jours\xA0!",10:"Veraltetes Tiergewicht!\n\nDie Wiegung von Tier {1} liegt bereits {2}\xA0Tage "+
"zur\xFCck!",11:"\u0391\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03BF\u03BC\u03AD\u03BD\u03BF "+
"\u03B2\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5!\n\n\u03A4\u03BF "+"\u03B6\u03CE\u03BF {1} \u03B6\u03C5\u03B3\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC {2} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2!"
,12:"Elavult \xE1llats\xFAly!\n\nAz \xE1llatot ({1}) {2} napja m\xE9rt\xE9k "+"le!"
,16:"Utdatert dyrevekt!\n\nDyret {1} ble veid for {2} dager siden!",20:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0432\u0435\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\n\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E {1} \u0431\u044B\u043B\u043E "+
"{2}\xA0 \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434!",21:"\xA1Peso del animal desactualizado!\n\xA1El animal {1} fue pesado hace "+
"{2} d\xEDas!",23:"G\xFCncel olmayan hayvan a\u011F\u0131rl\u0131\u011F\u0131!\n\nHayvan "+
"{1}, {2} g\xFCn \xF6nce tart\u0131ld\u0131!",24:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0432\u0430\u0433\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\n\u0412\u0437\u0432\u0430\u0436\u0435\u043D\u043D\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 {1} \u0431\u0443\u043B\u043E "+"{2}\xA0 \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443!"
};C.WarningOutdatedAnimalWeights={1:"Zastarjela vrijednost te\u017Eine \u017Eivotinje! {1} \u017Eivotinje su "+
"vagane prije 7\xA0dana!",2:"\u0422\u0435\u0433\u043B\u0430\u0442\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435 "+
"\u0441\u0430 \u043E\u0441\u0442\u0430\u0440\u0435\u043B\u0438!\n\n{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0441\u0430 \u043F\u0440\u0435\u0442\u0435\u0433\u043B\u0435\u043D\u0438 "+"\u043F\u0440\u0435\u0434\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 "+
"7 \u0434\u043D\u0438!",4:"Zastaral\xE9 v\xE1hy zv\xED\u0159at!\n\n{1} zv\xED\u0159at bylo v\xE1\u017Eeno "+
"p\u0159ed v\xEDce ne\u017E 7 dny!",5:"For\xE6ldede dyrev\xE6gte!\n\n{1} dyr blev vejet for mere end 7 dage siden!"
,0:"Outdated animal weights!\n\n{1} animals were weighed more than 7 days ago!",
6:"Verouderde diergewichten!\n\nDe dieren zijn meer dan 7 dagen geleden gewogen!"
,7:"Loomade kaalude andmed on aegunud!\n\n{1}\xA0looma kaaluti enam kui 7\xA0p\xE4eva "+
"eest!",8:"Vanhentuneet el\xE4inten painot!\n\n{1}\xA0el\xE4imet punnittiin yli 7\xA0p\xE4iv\xE4\xE4 "+
"sitten!",9:"Poids des animaux p\xE9rim\xE9s\xA0!\n{1}\xA0animaux ont \xE9t\xE9 pes\xE9s "+
"il y a plus de 7\xA0jours\xA0!",10:"Veraltete Tiergewichte!\n\nBei {1}\xA0Tieren liegt die letzte Wie~gung "+
"mehr als 7\xA0Tage zur\xFCck!",11:"\u0391\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B2\u03AC\u03C1\u03B7 \u03B6\u03CE\u03C9\u03BD!\n\n{1}\xA0\u03B6\u03C5\u03B3\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 "+
"\u03B1\u03C0\u03CC 7\xA0\u03B7\u03BC\u03AD\u03C1\u03B5\u03C2!",12:"Elavult \xE1llats\xFAlyok!\n\n{1} \xE1llatot t\xF6bb mint 7 napja m\xE9rtek!"
,16:"Utdaterte dyrevekter!\n\n{1}\xA0dyr ble veid for mer enn 7\xA0dager siden!"
,20:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0432\u0435\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!\n\n\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 "+
"{1}\xA0\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0431\u044B\u043B\u043E "+
"\u0431\u043E\u043B\u0435\u0435 7\xA0\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434!"
,21:"\xA1Pesos de animales desactualizados!\n\n\xA1{1} animales fueron pesados "+
"hace m\xE1s de 7 d\xEDas!",23:"G\xFCncel olmayan hayvan a\u011F\u0131rl\u0131klar\u0131!\n\n{1} hayvan "+
"7 g\xFCnden daha uzun s\xFCre \xF6nce tart\u0131ld\u0131!",24:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0432\u0430\u0433\u0443 \u0442\u0432\u0430\u0440\u0438\u043D!\n\n\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"{1}\xA0\u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u043B\u043E \u0431\u0456\u043B\u044C\u0448 "+
"\u043D\u0456\u0436 7\xA0\u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443!"};C.
WarningParsedDateInFutureInvalid={1:"Pa\u017Enja!\n\nDatum ro\u0111enja koji je skeniran je u budu\u0107nosti "+
"i stoga je odba\u010Den!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0430\u0442\u0430 "+
"\u0434\u0430\u0442\u0430 \u043A\u0430\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0430 "+
"\u0434\u0430\u0442\u0430 \u0435 \u0432 \u0431\u044A\u0434\u0435\u0449\u0435\u0442\u043E "+
"\u0438 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u043E "+
"\u0435 \u043E\u0442\u0445\u0432\u044A\u0440\u043B\u0435\u043D\u0430!",4:"Pozor!\n\nDatum naskenovan\xE9 jako datum narozen\xED le\u017E\xED v budoucnosti "+
"a bylo proto zahozeno!",5:"Opm\xE6rksomhed!\n\nDen indscannede f\xF8dselsdato ligger i fremtiden og "+
"blev derfor forkastet!",0:"Attention!\n\nThe date scanned in as birth date lies in the future and "+
"was therefore discarded!",6:"Let op!\n\nDe datum die is ingescand als geboorte~datum ligt in de toekomst "+
"en is daarom verwijderd!",7:"T\xE4helepanu!\n\nSisestatud s\xFCnnikuup\xE4ev on tulevikus ja seet\xF5ttu "+
"eirati seda!",8:"Huomio!\n\nSyntym\xE4p\xE4iv\xE4n\xE4 skannattu p\xE4iv\xE4m\xE4\xE4r\xE4 "+
"on tulevaisuudessa, joten se hyl\xE4ttiin!",9:"Attention\xA0!\n\nLa date scann\xE9e comme date de naissance se situe dans "+
"le futur et a donc \xE9t\xE9 rejet\xE9e\xA0!",10:"Achtung!\n\nDas als Geburtsdatum eingelesene Datum liegt in der Zukunft "+
"und wurde daher verworfen!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0397 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 "+
"\u03C0\u03BF\u03C5 \u03C3\u03B1\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 \u03C9\u03C2 "+
"\u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03B2\u03C1\u03AF\u03C3\u03BA\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF "+"\u03BC\u03AD\u03BB\u03BB\u03BF\u03BD \u03BA\u03B1\u03B9 \u03B3\u03B9\' "+
"\u03B1\u03C5\u03C4\u03CC \u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5!"
,12:"Figyelem!\n\nAz \xE9szlelt sz\xFClet\xE9si d\xE1tum a j\xF6v\u0151ben "+"van, ez\xE9rt elvetett\xFCk!"
,16:"Oppmerksomhet!\n\nDatoen som ble skannet inn som f\xF8dselsdato ligger "+"i fremtiden og ble derfor forkastet!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F "+
"\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F "+"\u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 "+
"\u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u044B\u043B\u0430 "+"\u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430!"
,21:"\xA1Atenci\xF3n!\n\nLa fecha escaneada como fecha de nacimiento est\xE1 "+"en el futuro y, por lo tanto, se descart\xF3."
,23:"Dikkat!\n\nDo\u011Fum tarihi olarak taranan tarih gelecekte yer ald\u0131\u011F\u0131ndan "+
"silindi!",24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F, "+
"\u044F\u043A\u0430 \u0431\u0443\u043B\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0430, "+
"\u043B\u0435\u0436\u0438\u0442\u044C \u0443 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443 "+
"\u0456 \u0442\u043E\u043C\u0443 \u0431\u0443\u043B\u0430 \u0432\u0456\u0434\u043A\u0438\u043D\u0443\u0442\u0430!"
};C.WarningParsingDateFailed={1:"Pa\u017Enja!\n\nBar-kod koji je u\u010Ditan kao datum ro\u0111enja nije "+
"mogao biti pretvoren u va\u017Ee\u0107u vrijednost datuma i stoga je odba\u010Den!"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041F\u0440\u043E\u0447\u0435\u0442\u0435\u043D\u0438\u044F\u0442 "+
"\u043A\u0430\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0430 \u0434\u0430\u0442\u0430 "+
"\u0431\u0430\u0440\u043A\u043E\u0434 \u043D\u0435 \u043C\u043E\u0436\u0430 "+"\u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u0432\u0430\u043D "+
"\u0432\u044A\u0432 \u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 "+
"\u043D\u0430 \u0434\u0430\u0442\u0430\u0442\u0430 \u0438 \u0437\u0430\u0442\u043E\u0432\u0430 "+
"\u0431\u0435\u0448\u0435 \u043E\u0442\u0445\u0432\u044A\u0440\u043B\u0435\u043D!"
,4:"Pozor!\n\n\u010C\xE1rov\xFD k\xF3d na\u010Dten\xFD jako datum narozen\xED "+
"nemohl b\xFDt p\u0159eveden na platnou hodnotu data a byl proto zahozen!",5:"Opm\xE6rksomhed!\n\nStregkoden, der blev indl\xE6st som f\xF8dselsdato, "+
"kunne ikke konverteres til en gyldig dato og blev derfor kasseret!",0:"Attention!\n\nThe barcode read in as birth date could not be converted "+
"into a valid date value and was therefore discarded!",6:"Let op!\nDe barcode die is ingelezen als geboortedatum kon niet worden "+
"omgezet in een geldige datumwaarde en is daarom verwijderd!",7:"T\xE4helepanu!\n\nV\xF6\xF6tkoodina sisestatud s\xFCnnikuup\xE4eva ei \xF5nnestunud "+
"kehtivaks kuup\xE4evav\xE4\xE4rtuseks teisendada ja see seet\xF5ttu k\xF5rvale "+
"heideti!",8:"Huomio!\n\nSyntym\xE4p\xE4iv\xE4n\xE4 luettua viivakoo~dia ei voitu muun~taa "+
"kelvolliseksi p\xE4iv\xE4m\xE4\xE4r\xE4arvoksi, joten se hyl\xE4ttiin!",9:"Attention\xA0!\n\nLe code-barres lu comme date de naissance n\'a pas pu "+
"\xEAtre converti en une valeur de date valable et a donc \xE9t\xE9 rejet\xE9\xA0!"
,10:"Achtung!\nDer als Geburts~datum eingelese~ne Bar~code konn~te nicht in "+"einen g\xFCltigen Datums~wert umgewan~delt werden und wurde daher verworfen!"
,11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 "+
"\u03B3\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03AE\u03C2 \u03C0\u03BF\u03C5 "+"\u03B4\u03B9\u03B1\u03B2\u03AC\u03C3\u03C4\u03B7\u03BA\u03B5 \u03C9\u03C2 "+
"\u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03CC\u03C1\u03B5\u03C3\u03B5 \u03BD\u03B1 "+"\u03BC\u03B5\u03C4\u03B1\u03C4\u03C1\u03B1\u03C0\u03B5\u03AF \u03C3\u03B5 "+
"\u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03B9\u03B1\u03BA\u03AE "+
"\u03C4\u03B9\u03BC\u03AE \u03BA\u03B1\u03B9 \u03B3\u03B9\' \u03B1\u03C5\u03C4\u03CC "+
"\u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5!",12:"Figyelem!\n\nA vonalk\xF3dk\xE9nt beolvasott sz\xFClet\xE9si d\xE1tum "+
"nem alak\xEDthat\xF3 \xE1t \xE9rv\xE9nyes d\xE1tum\xE9rt\xE9kk\xE9, ez\xE9rt "+
"eldob\xE1sra ker\xFClt!",16:"Oppmerksomhet!\n\nStrekkoden som ble lest inn som f\xF8dselsdato kunne "+
"ikke konverteres til en gyldig dato og ble derfor forkastet!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434, "+
"\u0441\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043A "+"\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, "+
"\u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D "+
"\u0432 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0443\u044E \u0434\u0430\u0442\u0443 "+
"\u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u044B\u043B \u043E\u0442\u0431\u0440\u043E\u0448\u0435\u043D!"
,21:"\xA1Atenci\xF3n!\nEl c\xF3digo de barras le\xEDdo como fecha de nacimiento "+
"no se pudo convertir en un valor de fecha v\xE1lido y, por lo tanto, se "+"descart\xF3."
,23:"Dikkat!\n\nDo\u011Fum tarihi olarak okunan barkod ge\xE7erli bir tarih "+"de\u011Ferine d\xF6n\xFC\u015Ft\xFCr\xFClemedi\u011Fi i\xE7in at\u0131ld\u0131!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434, "+
"\u044F\u043A\u0438\u0439 \u0431\u0443\u043B\u043E \u0437\u0447\u0438\u0442\u0430\u043D\u043E "+
"\u044F\u043A \u0434\u0430\u0442\u0443 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F, "+
"\u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u043D\u0430 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u0430\u0442\u0438, \u0442\u043E\u043C\u0443 \u0432\u0456\u043D "+"\u0431\u0443\u0432 \u0432\u0456\u0434\u043A\u0438\u043D\u0443\u0442\u0438\u0439!"
};C.WarningParsingNaisIdFailed={1:"Pa\u017Enja!\n\nO\u010Ditan barkod nije mogao biti pretvoren u va\u017Ee\u0107i "+
"broj markice za uho i stoga je odba\u010Den!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041F\u0440\u043E\u0447\u0435\u0442\u0435\u043D\u0438\u044F\u0442 "+
"\u0431\u0430\u0440\u043A\u043E\u0434 \u043D\u0435 \u043C\u043E\u0436\u0430 "+"\u0434\u0430 \u0441\u0435 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0438\u0440\u0430 "+
"\u0432\u044A\u0432 \u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430 \u0438 "+"\u0437\u0430\u0442\u043E\u0432\u0430 \u0431\u0435\u0448\u0435 \u043E\u0442\u0445\u0432\u044A\u0440\u043B\u0435\u043D!"
,4:"Pozor!\n\n\u010C\xE1rov\xFD k\xF3d nebylo mo\u017En\xE9 p\u0159ev\xE9st "+"na platn\xE9 \u010D\xEDslo u\u0161n\xED zn\xE1mky a byl proto zahozen!"
,5:"Opm\xE6rksomhed!\n\nStregkoden kunne ikke omdannes til et gyldigt \xF8rem\xE6rkenummer "+
"og blev derfor kasseret!",0:"Attention!\n\nThe barcode read could not be transformed into a valid eartag "+
"number and was therefore discarded!",6:"Attentie:\nDe Barcode scanner kan het nummer niet omzetten naar een waardig "+
"oormerk en moet weggegooid",7:"T\xE4helepanu!\n\nLoetud triipkoodi ei \xF5nnestunud teisendada kehtivaks "+
"k\xF5rvam\xE4rgi numbriseks ja seet\xF5ttu see k\xF5rvale heideti!",8:"Huomio!\n\nLuettua viivakoodia ei voitu muuntaa kelvolliseksi korvamerkkinumeroksi, "+
"joten se hyl\xE4ttiin!",9:"Attention\xA0!\n\nLe code-barres lu n\'a pas pu \xEAtre converti en un "+
"num\xE9ro de boucle valable et a donc \xE9t\xE9 rejet\xE9\xA0!",10:"Achtung!\nDer eingelesene Barcode konnte nicht in eine g\xFClti~ge Ohrmarken~nummer "+
"umge~wandelt werden und wurde daher verworfen!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0397 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 "+
"\u03C4\u03BF\u03C5 \u03B3\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03BF\u03CD "+"\u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03B4\u03B5\u03BD \u03BC\u03C0\u03CC\u03C1\u03B5\u03C3\u03B5 "+
"\u03BD\u03B1 \u03BC\u03B5\u03C4\u03B1\u03C4\u03C1\u03B1\u03C0\u03B5\u03AF "+"\u03C3\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03B5\u03BD\u03CE\u03C4\u03B9\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03B3\u03B9\u03B1 "+
"\u03B1\u03C5\u03C4\u03CC \u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5!"
,12:"Figyelem!\n\nA vonalk\xF3d leolvas\xE1sa nem alak\xEDthat\xF3 \xE1t \xE9rv\xE9nyes "+
"f\xFCljelz\u0151 sz\xE1mra, ez\xE9rt eldob\xE1sra ker\xFClt!",16:"Oppmerksomhet!\n\nStrekkoden som ble lest kunne ikke omformes til et gyldig "+
"\xF8remerkenummer og ble derfor forkastet!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 "+
"\u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C "+
"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u044C "+
"\u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0431\u0438\u0440\u043A\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 "+
"\u043E\u043D \u0431\u044B\u043B \u043E\u0442\u0431\u0440\u043E\u0448\u0435\u043D!"
,21:"\xA1Atenci\xF3n!\nEl c\xF3digo de barras le\xEDdo no se pudo transformar "+
"en un n\xFAmero de etiqueta de o\xEDdo v\xE1lido y, por lo tanto, se descart\xF3."
,23:"Dikkat!\n\nDo\u011Fum tarihi olarak okunan barkod ge\xE7erli bir tarih "+"de\u011Ferine d\xF6n\xFC\u015Ft\xFCr\xFClemedi\u011Fi i\xE7in at\u0131ld\u0131!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 "+
"\u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 "+
"\u0431\u0443\u043B\u043E \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u043D\u0430 \u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 "+
"\u0431\u0438\u0440\u043A\u0438, \u0442\u043E\u043C\u0443 \u0432\u0456\u043D "+"\u0431\u0443\u0432 \u0432\u0456\u0434\u043A\u0438\u043D\u0443\u0442\u0438\u0439!"
};C.WarningResetAnimalData={1:"Svi podaci o \u017Eivotinjama \u0107e biti izbrisani! Jeste li sigurni!"
,2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 "+
"\u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",4:"V\u0161echna data o zv\xED\u0159atech budou smaz\xE1na!\nJste si jisti?"
,5:"Alle dyredata vil blive slettet!\nEr du sikker?",0:"All animal data will be deleted!\nAre you sure?"
,6:"Alle dierdata wordt verwijderd\n weet je het zeker?",7:"K\xF5ik loomade andmed kustutatakse!\nKas olete kindel?"
,8:"Kaikki el\xE4intiedot poistetaan!\nOletko varma?",9:"Toutes les don~n\xE9es relatives aux animaux seront effac\xE9es\xA0!\nVous "+
"\xEAtes s\xFBr\xA0?",10:"Alle Tierdaten werden gel\xF6scht!\nSind Sie sicher?",
11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C4\u03C9\u03BD \u03B6\u03CE\u03C9\u03BD \u03B8\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden \xE1llatadat t\xF6rl\xE9sre ker\xFCl!\nBiztos benne?"
,16:"Alle dyredata vil bli slettet!\nEr du sikker?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",21:"\xA1Se borrar\xE1n todos los datos de los animales!\n\xBFEst\xE1 seguro?"
,23:"T\xFCm hayvan verileri silinecek!\nEmin misiniz?",24:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.WarningResetDeviceData={1:
"Svi podaci ure\u0111aja \u0107e biti izbrisani!\nJeste li sigurni?",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",4:"Ve\u0161ker\xE1 data za\u0159\xEDzen\xED budou smaz\xE1na!\nJste si jisti?"
,5:"Alle enhedsdata vil blive slettet!\nEr du sikker?",0:"All device data will be deleted!\nAre you sure?"
,6:"Alle apparaatgegevens worden verwijderd!\nWeet u het zeker?",7:"K\xF5ik seadme andmed kustutatakse!\nKas olete kindel?"
,10:"Alle Ger\xE4tedaten werden gel\xF6scht!\nSind Sie sicher?",11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03B8\u03B1 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden eszk\xF6zadat t\xF6rl\u0151dik!\nBiztos benne?"
,16:"Alle enhetsdata vil bli slettet!\nEr du sikker?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",24:"\u0412\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u0434\u0443\u0442\u044C \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.Bq_={1:"Svi podaci o aparatima i \u017Eivotinjama bi\u0107e izbrisani! Jeste li "+
"sigurni\"",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u6240\u6709\u8A2D\u5099\u6578\u64DA\u90FD\u5C07\u88AB\u522A\u9664\uFF01\n\u60A8\u78BA\u5B9A\u55CE\uFF1F"
,4:"Varov\xE1n\xED Obnoven\xED tov\xE1rn\xEDch nastaven\xED",5:"Alle enheds- og dyredata vil blive slettet!\nEr du sikker?"
,0:"All device and animal data will be deleted!\nAre you sure?",6:"Alle data word van Apparaat verwijdert!\nWeet u dit zeker?"
,7:"K\xF5ik seadme ja loomade andmed kustutatakse!\nKas olete kindel?",8:"Kaikki laite- ja el\xE4intiedot poistetaan!\nOletko varma?"
,9:"Toutes les don~n\xE9es de l\u2019appareil seront supprim\xE9es\xA0!\n\xCAtes-vous "+
"s\xFBre\xA0?",10:"Alle Ger\xE4te- und Tierdaten werden gel\xF6scht!\nSind Sie sicher?"
,11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C3\u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B8\u03B1 "+"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD! \u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden eszk\xF6z- \xE9s \xE1llatadat t\xF6rl\u0151dik!\nBiztos benne?"
,16:"Alle enhets- og dyredata vil bli slettet!\nEr du sikker?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",21:"\xA1Se eliminar\xE1n todos los datos relacionados con el dispositivo!\n\xBFEst\xE1 "+
"seguro?",23:"Fabrika ayarlar\u0131na d\xF6nme uyar\u0131s\u0131",24:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.WarningResetTempThresholds={
1:"Da li stvarno \u017Eelite promjeniti grani\u010Dne vrijednosti za sve pasmine?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u043D\u0443\u043B\u0438\u0440\u0430\u0442\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438\u0442\u0435 "+
"\u043F\u0440\u0430\u0433\u043E\u0432\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438 "+
"\u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0432\u0438\u0434\u043E\u0432\u0435?"
,4:"Opravdu chcete obnovit hodnoty prahov\xE9 teploty pro v\u0161echny druhy?",5:
"Vil du virkelig nulstille temperaturt\xE6rskelv\xE6rdierne for alle arter?",0:"Do you really want to reset temperature threshold values for all species?"
,6:"Wil je echt alle temperatuurwaarden resetten?",7:"Kas soovite t\xF5esti k\xF5igi liikide temperatuuri l\xE4viv\xE4\xE4rtused "+
"l\xE4htestada?",8:"Haluatko todella nollata kaikkien lajien l\xE4m~p\xF6~ti~la~rajat?"
,9:"Souhaitez-vous vraiment r\xE9tablir les valeurs seuils de temp\xE9rature "+"pour toutes les esp\xE8ces\xA0?"
,10:"Alle Temperatur~schwellenwerte f\xFCr alle Tierarten werden zur\xFCck~gesetzt!\n\nSind "+
"Sie sicher?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BF\u03C1\u03AF\u03C9\u03BD "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+"\u03B3\u03B9\u03B1 \u03CC\u03BB\u03B1 \u03C4\u03B1 \u03B5\u03AF\u03B4\u03B7;"
,12:"Val\xF3ban szeretn\xE9 alaphelyzetbe \xE1ll\xEDtani a h\u0151m\xE9rs\xE9kleti "+
"k\xFCsz\xF6b\xE9rt\xE9keket az \xF6sszes faj sz\xE1m\xE1ra?",16:"Vil du virkelig tilbakestille temperaturterskelverdier for alle arter?"
,20:"\u0412\u0441\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0435 "+
"\u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 "+
"\u0432\u0438\u0434\u043E\u0432 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u044B!\n\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",21:"\xBFRealmente desea restablecer los valores de umbral de temperatura para "+
"todas las especies?",23:"Ger\xE7ekten t\xFCm t\xFCrler i\xE7in s\u0131cakl\u0131k e\u015Fik de\u011Ferlerini "+
"s\u0131f\u0131rlamak istiyor musunuz?",24:"\u0423\u0441\u0456 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0456 "+
"\u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043B\u044F \u0443\u0441\u0456\u0445 "+
"\u0432\u0438\u0434\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u0434\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u043E!\n\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"
};C.Bq$={1:"Da li stvarno \u017Eelite vratiti na fabri\u010Dke postavke ({1} {2})?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 "+
"\u0442\u0430\u0437\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 "+"\u0434\u043E \u0444\u0430\u0431\u0440\u0438\u0447\u043D\u0438\u0442\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435 "+
"({1} {2})?",4:"Opravdu chcete obnovit tuto hodnotu na tov\xE1rn\xED nastaven\xED ({1} "+
"{2})?",5:"Vil du virkelig nulstille denne v\xE6rdi til fabriksindstillinger ({1} "+
"{2})?",0:"Do you really want to reset this value to factory default ({1} {2})?"
,6:"Wil je echt alle waardes resetten met waarde ({1} {2})?",7:"Kas soovite t\xF5esti l\xE4htestada selle v\xE4\xE4rtuse tehase vaikeseadetele "+
"({1} {2})?",8:"Haluatko todella palauttaa t\xE4m\xE4n arvon tehdasasetuksiin ({1} {2})?"
,9:"Voulez-vous vraiment r\xE9~ini~tia~li~ser cette valeur \xE0 la valeur de "+"l\u2019usine ({1} {2})\xA0?"
,10:"M\xF6chten Sie diesen Wert wirklich auf die Werkseinstellung zur\xFCcksetzen "+
"({1} {2})?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03C4\u03B9\u03BC\u03AE "+"\u03C3\u03C4\u03B7\u03BD \u03B5\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AE "+
"\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE ({1} {2});",12:"Val\xF3ban vissza szeretn\xE9 \xE1ll\xEDtani ezt az \xE9rt\xE9ket gy\xE1ri "+
"alap\xE9rtelmez\xE9sre ({1} {2})?",16:"Vil du virkelig tilbakestille denne verdien til fabrikkstandard ({1} {2})?"
,20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C "+
"\u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 "+
"\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 "+
"({1} {2})?",21:"\xBFRealmente desea restablecer este valor a los valores predeterminados "+
"de f\xE1brica ({1} {2})?",23:"Bu de\u011Feri ger\xE7ekten fabrika varsay\u0131lan\u0131na ({1} {2}) "+
"s\u0131f\u0131rlamak istiyor musunuz?",24:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0446\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u043E \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 "+"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C ({1} "+
"{2})?"};C.WarningResetWeightSettings={1:"Da li zaista \u017Eelite resetovati sve postavke vezane za te\u017Einu?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u043D\u0443\u043B\u0438\u0440\u0430\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 "+
"\u0441 \u0442\u0435\u0433\u043B\u043E\u0442\u043E?",4:"Opravdu chcete obnovit v\u0161echna nastaven\xED souvisej\xEDc\xED s v\xE1hou?"
,5:"Vil du virkelig nulstille alle v\xE6gtrelaterede indstillinger?",0:"Do you really want to reset all weight-related settings?"
,6:"Wil je echt alle gewichtsdata resetten?",7:"Kas sa t\xF5esti soovid k\xF5ik kaaluga seotud seaded l\xE4htestada?"
,8:"Haluatko todella palauttaa kaikki painoon liittyv\xE4t asetukset tehdasasetuksiin?"
,9:"Voulez-vous vraiment r\xE9initialiser tous les r\xE9glages bas\xE9s sur "+"le poids aux r\xE9glages d\'usine\xA0?"
,10:"Wirklich alle gewichtsbe~zogenen Ein~stellungen auf Werksein~stellungen "+"zur\xFCck~setzen?"
,11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 "+
"\u03C0\u03BF\u03C5 \u03C3\u03C7\u03B5\u03C4\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 "+
"\u03BC\u03B5 \u03C4\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2;",12:"Val\xF3ban szeretn\xE9d alaphelyzetbe \xE1ll\xEDtani az \xF6sszes s\xFAlykapcsolatos "+
"be\xE1ll\xEDt\xE1st?",16:"Vil du virkelig tilbakestille alle vektrelaterte innstillinger?"
,20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C "+
"\u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, "+"\u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0432\u0435\u0441\u043E\u043C?"
,21:"\xBFRealmente desea restablecer todas las configuraciones relacionadas "+"con el peso?"
,23:"Kiloyla ilgili t\xFCm ayarlar\u0131 ger\xE7ekten s\u0131f\u0131rlamak "+"istiyor musunuz?"
,24:"\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0441\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F, "+
"\u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0456 \u0437 \u0432\u0430\u0433\u043E\u044E?"
};C.WarningRestart={1:"Da li stvarno \u017Eelite ponovo pokrenuti aparat?",2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u0442\u0435 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E?",3:"\u4F60\u771F\u7684\u60F3\u91CD\u555F\u8A2D\u5099\u55CE\uFF1F"
,4:"Varov\xE1n\xED Restartujte",5:"Vil du virkelig genstarte enheden?",0:"Do you really want to restart the device?"
,6:"Weet u zeker dat u het apparaat nieuw wilt starten?",7:"Kas soovite seadme t\xF5esti taask\xE4ivitada?"
,8:"Haluatko varmasti k\xE4ynnist\xE4\xE4 laitteen uudelleen?",9:"Voulez-vous vraiment r\xE9~ini~tia~li~ser l\u2019appareil\xA0?"
,10:"Wollen Sie das Ger\xE4t wirklich neu starten?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 "+
"\u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE;",12:"Val\xF3ban \xFAjraind\xEDtan\xE1 a k\xE9sz\xFCl\xE9ket?"
,16:"Vil du virkelig starte enheten p\xE5 nytt?",20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?",21:"\xBFRealmente quiere reiniciar el dispositivo?"
,23:"Yeniden ba\u015Flatma uyar\u0131s\u0131",24:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 "+
"\u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439?"};C.Bra={1:"Da li stvarno \u017Eelite isklju\u010Diti aparat?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0436\u0435\u043B\u0430\u0435\u0442\u0435 "+
"\u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E?"
,3:"\u4F60\u771F\u7684\u60F3\u95DC\u6A5F\u55CE\uFF1F",4:"Varov\xE1n\xED Vypnut\xED"
,5:"Vil du virkelig slukke enheden?",0:"Do you really want to shutdown the device?"
,6:"Weet u zeker dat u het apparaat wilt uit ztten?",7:"Kas soovite t\xF5esti seadme v\xE4lja l\xFClitada?"
,8:"Haluatko varmasti sulkea laitteen?",9:"Voulez-vous vraiment \xE9teindre l\u2019appareil\xA0?"
,10:"Wollen Sie das Ger\xE4t wirklich herunterfahren?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03C3\u03B2\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE;"
,12:"Val\xF3ban le szeretn\xE9d \xE1ll\xEDtani az eszk\xF6zt?",16:"Vil du virkelig sl\xE5 av enheten?"
,20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?",21:"\xBFRealmente quiere apagar el dispositivo?"
,23:"Kapatma uyar\u0131s\u0131",24:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439?"
};C.Brb={1:"Aparat \u0107e se isklju\u010Diti za {1} sekundi!",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0441\u043B\u0435\u0434 {1} \u0441\u0435\u043A\u0443\u043D\u0434\u0438!"
,3:"\u5728{1}\u79D2\u5167\u95DC\u9589\u8A2D\u5099\uFF01",4:"Vyp\xEDn\xE1n\xED za\u0159\xEDzen\xED za {1} sekund!"
,5:"Enheden lukker ned om {1} sekunder!",0:"Shutting down device in {1} seconds!"
,6:"Apparaat word in {1} seconden uitgeschakelt!",7:"Seade l\xFClitatakse v\xE4lja {1} sekundi p\xE4rast!"
,8:"Laite sammutetaan {1} sekunnissa!",9:"Arr\xEAt de l\u2019appareil en\n{1} secondes\xA0!"
,10:"Ger\xE4t wird in {1} Sekunden heruntergefahren!",11:"\u03A4\u03B5\u03C1\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03C3\u03B5 {1} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1!"
,12:"Az eszk\xF6z le\xE1ll {1} m\xE1sodperc m\xFAlva!",16:"Sl\xE5r av enheten om {1} sekunder!"
,20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F "+
"\u0447\u0435\u0440\u0435\u0437 {1} \u0441\u0435\u043A\u0443\u043D\u0434!",21:"\xA1El dispositivo se apagar\xE1 dentro de {1} segundos!"
,23:"Cihaz {1} saniye i\xE7inde kapat\u0131l\u0131yor!",24:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F "+
"\u0447\u0435\u0440\u0435\u0437 {1} \u0441\u0435\u043A\u0443\u043D\u0434!"};C.WarningWeightEvaluationPlural={
1:"Oprez:\nOva procjena uklju\u010Duje vrijednosti o te\u017Eini goveda, ali "+"su uklju\u010Dene i vrijednosti o te\u017Eini krava."
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u0422\u0430\u0437\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0430 \u0437\u0430 \u0446\u0435\u043B "+
"\u0434\u0430 \u043E\u0446\u0435\u043D\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u0436\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0442\u0430. "+
"\u0418\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435\u0442\u043E "+"\u043E\u0431\u0430\u0447\u0435 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "+
"\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438\u0442\u0435 "+"\u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043D\u0430 {1} "+
"\u043A\u0440\u0430\u0432\u0438!",4:"Pozor!\nToto hodnocen\xED je ur\u010Deno k posouzen\xED r\u016Fstov\xE9ho "+
"v\xFDvoje telat. Nicm\xE9n\u011B, v\xFDpo\u010Det zahrnoval tak\xE9 hmotnostn\xED "+
"hodnoty {1} krav!",5:"Opm\xE6rksomhed!\nDenne evaluering er beregnet til at vurdere v\xE6kstudviklingen "+
"af kalve. Beregningen inkluderede dog ogs\xE5 v\xE6gtv\xE6rdierne fra {1} "+"k\xF8er!"
,0:"Attention!\nThis evaluation is meant to assess growth develop~ment of calves. "+
"However, calcu~lation included weight values of {1} cows, too!",6:"Let op!\nDeze evaluatie is bedoeld om de groei van kalveren te beoordelen. "+
"Echter, bij de berekening zijn ook de gewichtswaarden van {1} koeien meegenomen!"
,7:"T\xE4helepanu!\nSee hindamine on m\xF5eldud vasikate kasvuaren~gu hindamiseks. "+
"Kalku~latsioon sisaldas ka {1}\xA0lehma kaalu!",8:"Huomio!\nT\xE4m\xE4n arvioinnin tarkoituksena on arvioida va~si~koi~den "+
"kasvun ke~hi~tys~t\xE4. Las~kel~mat si~s\xE4l~t\xE4v\xE4t kui~ten~kin my\xF6s "+
"{1}\xA0leh~m\xE4n painoarvot!",9:"Attention\xA0!\nCette \xE9valuation est destin\xE9e aux veaux. Cependant, "+
"le calcul a \xE9ga~le~ment pris en compte les valeurs de poids des {1}\xA0vaches\xA0!"
,10:"Achtung!\nDiese Auswertung bewertet die Gewichtsentwick~lung von K\xE4lbern. "+
"Es wurden jedoch auch Wiegewerte von {1}\xA0K\xFChen verarbeitet!",11:"\u0391\u03C5\u03C4\u03AE \u03B7 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 "+
"\u03AD\u03C7\u03B5\u03B9 \u03C3\u03BA\u03BF\u03C0\u03CC \u03BD\u03B1 \u03B1\u03BE\u03B9\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03B5\u03B9 "+
"\u03C4\u03B7\u03BD \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03C4\u03B7\u03C2 "+
"\u03B1\u03BD\u03AC\u03C0\u03C4\u03C5\u03BE\u03B7\u03C2 \u03C4\u03C9\u03BD "+"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD. \u03A9\u03C3\u03C4\u03CC\u03C3\u03BF, "+
"\u03BF \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 "+"\u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03B9 "+
"\u03BA\u03B1\u03B9 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"{1} \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD!",12:"Figyelem!\nEz az \xE9rt\xE9kel\xE9s a borjak n\xF6veked\xE9si fejl\u0151d\xE9s\xE9nek "+
"meg\xEDt\xE9l\xE9s\xE9re szolg\xE1l. Azonban a sz\xE1m\xEDt\xE1sba beleker\xFClt "+
"{1} tehenek s\xFAly\xE9rt\xE9ke is!",16:"OBS!\nDenne evalueringen er ment \xE5 vurdere vekstutvikling av kalver. "+
"Beregningen inkluderer imidlertid vektverdier for {1}\xA0kyr ogs\xE5!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u042D\u0442\u0430 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430 "+"\u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F {1}\xA0\u043A\u043E\u0440\u043E\u0432 "+
"\u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B!"
,21:"Atenci\xF3n:\nEsta evaluaci\xF3n est\xE1 destinada a evaluar el desarrollo "+
"del crecimiento de los terneros. Sin embargo, el c\xE1lculo incluy\xF3 "+"los valores de peso de {1} vacas tambi\xE9n."
,23:"Dikkat!\nBu de\u011Ferlendirme buza\u011F\u0131lar\u0131n b\xFCy\xFCme "+"geli\u015Fimini de\u011Ferlendirmek i\xE7indir. Ancak hesaplamaya {1} "+
"ine\u011Fin a\u011F\u0131rl\u0131k de\u011Ferleri de dahil edildi!",24:"\u0423\u0432\u0430\u0433\u0430!\n\u0426\u044F \u043E\u0446\u0456\u043D\u043A\u0430 "+
"\u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A "+
"\u0432\u0430\u0433\u0438 \u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"{1}\xA0\u043A\u043E\u0440\u0456\u0432 \u0442\u0430\u043A\u043E\u0436 \u0431\u0443\u043B\u0438 "+
"\u043E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u0456!"};C.WarningWeightEvaluationSingular={
1:"Oprez:\nProcjena uklju\u010Duje vrijednosti o te\u017Eini goveda, ali je "+"uklju\u010Dena i vrijednosti o te\u017Eini jedne krave."
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u0422\u0430\u0437\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0430 \u0437\u0430 \u0446\u0435\u043B "+
"\u0434\u0430 \u043E\u0446\u0435\u043D\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u0436\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0442\u0430. "+
"\u0418\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435\u0442\u043E "+"\u043E\u0431\u0430\u0447\u0435 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "+
"\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 "+
"\u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043D\u0430 \u0435\u0434\u043D\u0430 "+
"\u043A\u0440\u0430\u0432\u0430 (\u2116 {1})!",4:"Pozor!\nToto hodnocen\xED m\xE1 za \xFAkol posoudit r\u016Fstov\xFD v\xFDvoj "+
"telat. Av\u0161ak byla zahrnuta i hmotnost jedn\xE9 kr\xE1vy (\u010D. {1})!",5:
"Opm\xE6rksomhed!\nDenne evaluering er beregnet til at vurdere v\xE6kstudviklingen "+
"af kalve. Dog inkluderede beregningen ogs\xE5 v\xE6gtv\xE6rdien af en ko "+"(nr. {1})!"
,0:"Attention!\nThis evaluation is meant to assess growth develop~ment of calves. "+
"However, calcu~lation included the weight value of one cow (\u2116 {1}), "+"too!"
,6:"Let op! Deze evaluatie is bedoeld om de groei-ontwikkeling van kalveren "+"te beoordelen. Echter, de berekening omvatte ook het gewicht van \xE9\xE9n "+
"koe (nr. {1})!",7:"T\xE4helepanu!\nSee hindamine on m\xF5eldud vasikate kasvuaren~gu hindamiseks. "+
"Kalku~latsioon sisaldas ka lehma (\u2116 {1}) kaalu!",8:"Huomio!\nT\xE4m\xE4n arvioinnin tarkoituksena on arvioida vasikoiden kasvun "+
"kehityst\xE4. Laskelmat sis\xE4lt\xE4v\xE4t kuitenkin my\xF6s yhden lehm\xE4n "+
"(\u2116 {1}) painoarvon!",9:"Attention\xA0!\nCette \xE9valuation est destin\xE9e aux veaux. Cependant, "+
"la calcu~lation a \xE9ga~le~ment pris en compte les valeurs de poids d\'une "+"vache (\u2116 {1})\xA0!"
,10:"Achtung!\nDiese Auswertung bewertet die Gewichtsentwick~lung von K\xE4lbern. "+
"Es wurde jedoch auch der Wiegewert einer Kuh (\u2116 {1}) verarbeitet!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\u0391\u03C5\u03C4\u03AE "+
"\u03B7 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 \u03AD\u03C7\u03B5\u03B9 "+
"\u03C3\u03BA\u03BF\u03C0\u03CC \u03BD\u03B1 \u03B1\u03BE\u03B9\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03B5\u03B9 "+
"\u03C4\u03B7\u03BD \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03C4\u03B7\u03C2 "+
"\u03B1\u03BD\u03AC\u03C0\u03C4\u03C5\u03BE\u03B7\u03C2 \u03C4\u03C9\u03BD "+"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD. \u03A9\u03C3\u03C4\u03CC\u03C3\u03BF, "+
"\u03BF \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 "+"\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03B9 "+
"\u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03C4\u03B9\u03BC\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03BC\u03B9\u03B1\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1\u03C2 "+"(\u2116 {1})!"
,12:"Figyelem!\nEz az \xE9rt\xE9kel\xE9s a borjak n\xF6veked\xE9si fejl\u0151d\xE9s\xE9nek "+
"felm\xE9r\xE9s\xE9t szolg\xE1lja. Azonban a sz\xE1m\xEDt\xE1s mag\xE1ban "+"foglalta egy teh\xE9n (\u2116 {1}) s\xFAly\xE9rt\xE9k\xE9t is!"
,16:"OBS!\nDenne evalueringen er ment \xE5 vurdere vekstutvikling av kalver. "+"Beregningen inkluderer imidlertid vektverdien til \xE9n ku (\u2116 {1}), "+
"ogs\xE5!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u042D\u0442\u0430 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430 "+"\u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u0440\u043E\u0432\u044B "+
"(\u2116 {1}) \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E!"
,21:"Atenci\xF3n:\nEsta evaluaci\xF3n est\xE1 destinada a evaluar el desarrollo "+
"del crecimiento de los terneros. Sin embargo, el c\xE1lculo incluy\xF3 "+"el valor de peso de una vaca (\u2116 {1}) tambi\xE9n"
,23:"Dikkat!\nBu de\u011Ferlendirme buza\u011F\u0131lar\u0131n b\xFCy\xFCme "+"geli\u015Fimini de\u011Ferlendirmek i\xE7indir. Ancak hesaplamaya {1} "+
"ine\u011Fin a\u011F\u0131rl\u0131k de\u011Ferleri de dahil edildi!",24:"\u0423\u0432\u0430\u0433\u0430!\n\u0426\u044F \u043E\u0446\u0456\u043D\u043A\u0430 "+
"\u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A "+
"\u0432\u0430\u0433\u0438 \u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043A\u043E\u0440\u043E\u0432\u0438 (\u2116 {1}) \u0442\u0430\u043A\u043E\u0436 "+
"\u0431\u0443\u043B\u043E \u043E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u043E!"
};C.Brc={1:"Pa\u017Enja!\n\nPogre\u0161no pode\u0161eni datum i vrijeme, molimo ponovo "+
"unesite datum i vrijeme!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0413\u0440\u0435\u0448\u043D\u0438 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430 \u0434\u0430\u0442\u0430 "+
"\u0438 \u0447\u0430\u0441, \u043C\u043E\u043B\u044F, \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 "+
"\u043E\u0442\u043D\u043E\u0432\u043E \u0434\u0430\u0442\u0430 \u0438 \u0447\u0430\u0441!"
,4:"Pozor!\n\nNespr\xE1vn\xE9 nastaven\xED data a \u010Dasu, pros\xEDm, zadejte "+
"znovu datum a \u010Das!",5:"Opm\xE6rksomhed!\n\nForkerte dato- og tidsindstillinger, venligst indtast "+
"dato og tid igen!",0:"Attention!\n\nWrong date and time settings, please re-enter date and time!"
,6:"Attentie:\nVerkeerde datum en tijd instellingen. Graag veranderen",7:"T\xE4helepanu!\n\nVale kuup\xE4ev ja kellaaeg, palun sisestage kuup\xE4ev "+
"ja kellaaeg uuesti!",8:"Huomio!\nV\xE4\xE4r\xE4t p\xE4iv\xE4m\xE4\xE4r\xE4- ja aika-asetukset! "+
"Anna p\xE4iv\xE4m\xE4\xE4r\xE4 ja aika uudelleen!",9:"Attention\xA0!\nLes r\xE9glages de la date et de l\'heure sont incorrects\xA0! "+
"Veuillez saisir \xE0 nouveau la date et l\'heure\xA0!",10:"Achtung!\nFalsche Einstel~lungen f\xFCr Datum und Uhrzeit! Bitte Datum "+
"und Uhr~zeit neu eingeben!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u039B\u03AC\u03B8\u03BF\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1\u03C2 "+
"\u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1\u03C2, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+
"\u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC "+"\u03C4\u03B7\u03BD \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 "+
"\u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03CE\u03C1\u03B1!",12:"Figyelem!\n\nHelytelen d\xE1tum \xE9s id\u0151 be\xE1ll\xEDt\xE1sok, k\xE9rj\xFCk, "+
"adja meg \xFAjra a d\xE1tumot \xE9s az id\u0151t!",16:"Oppmerksomhet!\n\nFeil dato- og tidsinnstillinger, vennligst angi dato "+
"og tid p\xE5 nytt!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0430\u0442\u044B "+
"\u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 "+"\u0432\u0440\u0435\u043C\u044F \u0437\u0430\u043D\u043E\u0432\u043E!"
,21:"Atenci\xF3n:\nConfiguraci\xF3n incorrecta de fecha y hora, por favor, "+"vuelva a ingresar la fecha y la hora."
,23:"Dikkat!\n\nTarih ve Saat ayarlar\u0131 yanl\u0131\u015Ft\u0131r. L\xFCtfen "+
"tekrar giriniz.",24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 "+
"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+"\u0434\u0430\u0442\u0438 \u0442\u0430 \u0447\u0430\u0441\u0443, \u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+"\u0434\u0430\u0442\u0443 \u0442\u0430 \u0447\u0430\u0441 \u0437\u043D\u043E\u0432\u0443!"
};C.AVX={1:"Sedmica",2:"\u0421\u0435\u0434\u043C\u0438\u0446\u0430",4:"t\xFDden"
,5:"Uge",0:"Week",7:"N\xE4dal",8:"Viikko",9:"Semaine",10:"Woche",11:"\u0395\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"
,12:"H\xE9t",13:"Settimana",16:"Uke",20:"\u041D\u0435\u0434\u0435\u0301\u043B\u044F"
,21:"Semana",23:"Hafta",24:"\u0422\u0438\u0436\u0434\u0435\u043D\u044C"};C.Ban={
1:"vaganje \u017Eivotinje",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,4:"V\xE1\u017Eit zv\xED\u0159e",5:"Vej dyr",0:"Weigh animal",6:"Dier wegen",7:"Looma kaal"
,8:"Punnitse el\xE4in",9:"Peser un animal",10:"Tier wiegen",11:"\u0396\u03C5\u03B3\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF \u03B6\u03CE\u03BF"
,12:"\xC1llatot m\xE9rni",16:"Vei dyr",20:"\u0412\u0437\u0432\u0435\u0441\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,21:"Pesaje de animal",23:"Tart\u0131m Hayvan\u0131",24:"\u0412\u0437\u0432\u0430\u0436\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.Weighing={1:"Vaganje",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435"
,3:"\u79E4\u91CD",4:"V\xE1\u017Een\xED",5:"Vejer",0:"Weighing",6:"Weging",7:"Kaalumine"
,8:"Punnitus",9:"Peser",10:"Wiegung",11:"\u0396\u03CD\u03B3\u03B9\u03C3\u03B7",12:
"M\xE9rlegel\xE9s",16:"Veiing",20:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435"
,21:"Pesaje",23:"S\xFCtten kesme",24:"\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.Bao={1:"Dana\u0161nja vaganja",2:"\u0414\u043D\u0435\u0448\u043D\u043E\u0442\u043E \u043F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435"
,4:"Dne\u0161n\xED v\xE1\u017Een\xED",5:"Dagens vejning",0:"Today\u2019s weighing"
,6:"Weging van vandaag",7:"T\xE4nane kaalumine",8:"T\xE4m\xE4n p\xE4iv\xE4n punnitus"
,9:"Pes\xE9e d\'aujourd\'hui",10:"Heutige Wiegung",11:"\u03A3\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03B6\u03CD\u03B3\u03B9\u03C3\u03B7"
,12:"A mai m\xE9rlegel\xE9s",16:"Dagens veiing",20:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0435 \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435"
,21:"Hoy pesaje",23:"Bug\xFCn\xFCn Tart\u0131m\u0131",24:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0454 \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.AVZ={1:"Vaganja",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F"
,3:"\u7A31\u91CD",4:"V\xE1\u017Een\xED",5:"V\xE6gninger",0:"Weighings",6:"Wegingen"
,7:"Kaalumised",8:"Punnitukset",9:"Pond\xE9rations",10:"Wiegungen",11:"\u0396\u03C5\u03B3\u03AF\u03C3\u03B5\u03B9\u03C2"
,12:"M\xE9r\xE9sek",16:"Veiinger",20:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F"
,21:"Pesajes",23:"Tart\u0131mlar",24:"\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.Afv={1:"te\u017Eina",2:"\u0422\u0435\u0433\u043B\u043E",3:"\u91CD\u91CF",4:"V\xE1ha"
,5:"V\xE6gt",0:"Weight",6:"Gewicht",7:"Kaal",8:"Paino",9:"Poids",10:"Gewicht",11:
"\u0392\u03AC\u03C1\u03BF\u03C2",12:"S\xFAly",16:"Vekt",20:"\u0412\u0435\u0441",
21:"Peso",23:"A\u011F\u0131rl\u0131k",24:"\u0412\u0430\u0433\u0430"};C.Bap={1:"te\u017Eina \u017Eivotinje"
,2:"\u0422\u0435\u0433\u043B\u043E \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u725B\u96BB\u91CD\u91CF",4:"Hmotnost zv\xED\u0159ete",5:"Dyrev\xE6gt",0:"Animal weight"
,6:"Diergewicht",7:"Looma kaal",8:"El\xE4inten paino",9:"Poids d\u2019animal",10:
"Tiergewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5",12:"\xC1llats\xFAly"
,16:"Dyrevekt",20:"\u0412\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,21:"Peso del animal",23:"Hayvan\u0131n a\u011F\u0131rl\u0131\u011F\u0131",24:"\u0412\u0430\u0433\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Brf={1:"Te\u017Eina trupa",2:"\u0422\u0440\u0443\u043F\u043D\u043E \u0442\u0435\u0433\u043B\u043E"
,3:"\u9AD4\u91CD\u91CF",4:"Hmotnost uhynul\xE9ho zv\xED\u0159ete",5:"Slagtev\xE6gt"
,0:"Carcass weight",6:"Kadavergewicht",7:"R\xFCmba kaal",8:"Ruhon paino",9:"Poids de la carcasse"
,10:"Kadavergewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03BA\u03BF\u03C5\u03C6\u03B1\u03C1\u03B9\u03BF\u03CD"
,12:"V\xE1g\xF3h\xEDdi tests\xFAly",16:"Slaktevekt",20:"\u0412\u0435\u0441 \u0442\u0443\u0448\u043A\u0438"
,21:"Peso del cad\xE1ver",23:"Karkas A\u011F\u0131rl\u0131k",24:"\u0412\u0430\u0433\u0430 \u0442\u0443\u0448\u043A\u0438"
};C.AHk={1:"Te\u017Einska klasa",2:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u0430 \u0442\u0435\u0433\u043B\u043E"
,4:"V\xE1hov\xE1 kategorie",5:"V\xE6gtklasse",0:"Weight class",6:"Gewichtsklasse"
,7:"Kaaluklass",8:"Painoluokka",9:"Cat\xE9gorie de poids",10:"Gewichtsklasse",11:
"\u039A\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlycsoport",16:"Vektklasse",20:"\u0412\u0435\u0441\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"
,21:"Clase de peso",23:"A\u011Firlik s\u0131n\u0131f\u0131",24:"\u0412\u0430\u0433\u043E\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F"
};C.AV0={1:"izlazna te\u017Eina",2:"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E"
,3:"\u91CD\u91CF\u8A3B\u92B7",4:"Zru\u0161en\xED registrace hmotnosti",5:"V\xE6gt afregistrering"
,0:"Weight deregistration",6:"Gewicht deregistraatie",7:"Kaalu registreerimise t\xFChistamine"
,8:"Painon poistaminen rekister\xF6innist\xE4",9:"Poids \xE0 la radiation",10:"Ausstallgewicht"
,11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlyt\xF6rl\xE9s",16:"Vekt avregistrering",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0441\u043D\u044F\u0442\u0438\u0438 "+
"\u0441 \u0443\u0447\u0451\u0442\u0430",21:"Peso al anular el registro",23:"A\u011F\u0131rl\u0131k iptali"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u0437\u043D\u044F\u0442\u0442\u0456 "+
"\u0437 \u043E\u0431\u043B\u0456\u043A\u0443"};C.Bar={1:"rast te\u017Eine",2:"\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E"
,4:"V\xFDvoj hmotnosti",5:"V\xE6gtudvikling",0:"Weight development",6:"gewichtsontwikkeling"
,7:"Kaalu suurenemine",8:"Painon kehitys",9:"D\xE9veloppement du poids",10:"Gewichts~entwicklung"
,11:"\u0395\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlyfejl\u0151d\xE9s",16:"Vektutvikling",20:"\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430"
,21:"Desarrollo de peso",23:"A\u011F\u0131rl\u0131k geli\u015Fimi",24:"\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0432\u0430\u0433\u0438"
};C.AHl={1:"prirast",2:"\u041F\u0440\u0438\u0440\u0430\u0441\u0442",3:"\u589E\u91CD"
,4:"P\u0159\xEDr\u016Fstek",5:"V\xE6gt\xF8gning",0:"Weight gain",6:"Toename",7:"Kaalut\xF5us"
,8:"Painonnousu",9:"Croissance",10:"Zunahme",11:"\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"H\xEDz\xE1s",16:"Vekt\xF8kning",20:"\u041F\u0440\u0438\u0432\u0435\u0441",21:
"Ganancia",23:"A\u011F\u0131rl\u0131k art\u0131\u015F\u0131",24:"\u041F\u0440\u0438\u0440\u0456\u0441\u0442"
};C.Bat={1:"registrovane te\u017Eine",2:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u0433\u043B\u043E"
,3:"\u8A18\u9304\u7684\u9AD4\u91CD",4:"Zaznamenan\xE1 hmotnost",5:"Registreret v\xE6gt (singular)\nRegistrerede v\xE6gte (plural)"
,0:"Recorded weight(s)",6:"Opgenomen gewicht",7:"Salvestatud kaal(ud)",8:"Tallennetut painot"
,9:"Poids enregistr\xE9(s)",10:"Erfasste Gewicht(e)",11:"\u039A\u03B1\u03C4\u03B1\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF "+
"\u03B2\u03AC\u03C1\u03BF\u03C2(\u0392\u03AC\u03C1\u03B7)",12:"Feljegyzett s\xFAly(ok)"
,16:"Registrerte vekt(er)",20:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0432\u0435\u0441/\u0432\u0435\u0441\u0430",21:"Peso(s) registrado(s)",23:"Kay\u0131tl\u0131 a\u011F\u0131rl\u0131klar"
,24:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u0432\u0430\u0433\u0430"};C.AsW={1:"registrovane te\u017Eine",2:"\u0417\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E"
,3:"\u91CD\u91CF\u7D00\u9304",4:"Zaznamen\xE1n\xED v\xE1hy",5:"V\xE6gtregistrering"
,0:"Weight recording",6:"Gewichts bepaling",7:"Kaalu registreerimine",8:"Painon tallennus"
,9:"Enregistrement du poids",10:"Gewichtserfassung",11:"\u039A\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlyfeljegyz\xE9s",16:"Vektregistrering",20:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",21:"Registro de peso"
,23:"A\u011F\u0131rl\u0131k kayd\u0131",24:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443 "+
"\u0432\u0437\u0432\u0430\u0436\u0435\u043D\u043D\u044F"};C.Jj={1:"Ostatak",2:"\u041C\u0435\u0441\u0442\u043E\u043D\u0430\u0445\u043E~\u0436\u0434\u0435\u043D\u0438\u0435"
,4:"kde p\u0159esn\u011B",5:"Omgivelser",0:"Whereabouts",6:"verblijfplaats",7:"Asukohad"
,8:"Olinpaikka",9:"Lieu de s\xE9jour",10:"Verbleib",11:"\u03A0\u03BF\u03CD \u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5"
,12:"hol, holl\xE9t",16:"Oppholdssted",20:"\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E~\u0436\u0435\u043D\u0438\u0435"
,21:"Desarrollo de peso",23:"Neresinden",24:"\u041C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bau={1:"LED bijela",2:"LED \u0411\u044F\u043B",4:"LED b\xEDl\xE1",5:"LED hvid"
,0:"LED white",6:"LED wit",7:"LED valge",8:"LED valkoinen",9:"DEL blanche",10:"LED wei\xDF"
,11:"LED \u03BB\u03B5\u03C5\u03BA\u03CC",12:"LED feh\xE9r",16:"LED hvit",20:"\u0411\u0435\u043B\u044B\u0439 LED"
,21:"LED blanco",23:"Beyaz LED",24:"\u0411\u0456\u043B\u0438\u0439 LED"};C.Year={
1:"godina",2:"\u0413\u043E\u0434\u0438\u043D\u0430",4:"rok",5:"\xC5r",0:"Year",6:
"Jaar",7:"Aasta",8:"Vuosi",9:"Ann\xE9e",10:"Jahr",11:"\u0388\u03C4\u03BF\u03C2",
12:"\xC9v",16:"\xC5r",20:"\u0413\u043E\u0434",21:"A\xF1o",23:"Y\u0131l",24:"\u0420\u0456\u043A"
};C.Bav={2:"\u0413\u0413/\u041C\u041C",4:"rok/m\u011Bs\xEDc",5:"\xE5r/m\xE5ned",
0:"yy/mm",6:"JJ/MM",7:"aa/kk",8:"vv/kk",9:"AA/MM",10:"JJ/MM",11:"\u03B5\u03B5/\u03BC\u03BC"
,12:"\xE9v/h\xF3nap",16:"\xE5r/mnd",20:"\u0413\u0413/\u041C\u041C",21:"aa/mm",23:
"YY/AA",24:"\u0420\u0420/\u041C\u041C"};C.Baw={2:"\u0413\u0413/\u041C\u041C/\u0414\u0414"
,4:"rr/mm/dd",5:"\xE5\xE5/mm/dd",0:"yy/mm/dd",6:"JJ/MM/DD",7:"aa/kk/pp",8:"vv/kk/pv"
,9:"AA/MM/JJ",10:"JJ/MM/TT",11:"\u03B5\u03B5/\u03BC\u03BC/\u03B7\u03B7",12:"\xE9\xE9/hh/nn"
,16:"\xE5r/mnd/dag",20:"\u0413\u0413/\u041C\u041C/\u0414\u0414",21:"aa/mm/dd",23:
"YY/AA/GG",24:"\u0420\u0420/\u041C\u041C/\u0414\u0414"};C.Yes={1:"da",2:"\u0414\u0430"
,3:"\u662F\u7684",4:"Ano",5:"Ja",0:"Yes",6:"Ja",7:"Jah",8:"Kyll\xE4",9:"Oui",10:
"Ja",11:"\u039D\u03B1\u03B9",12:"Igen",16:"Ja",20:"\u0414\u0430",21:"S\xED",23:"Evet"
,24:"\u0422\u0430\u043A"};C.AiF={0:"g",11:"\u03B3",20:"\u0433",24:"\u0491"};C.AAd={
2:"\u043A\u0433",3:"\u516C\u65A4",0:"kg",6:"Kg",11:"\u039A\u03B9\u03BB\u03AC",20:
"\u043A\u0433",24:"\u043A\u0433"};C.Af8={2:"\u041B\u0438\u0442\u044A\u0440",3:"\u516C\u5347"
,4:"Litr",0:"l",7:"L",11:"\u0399",20:"\u043B",23:"I",24:"\u043B"};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */