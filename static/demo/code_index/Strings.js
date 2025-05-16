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

C.BhB={1:"AD pretvara\u010D temperature",2:"\u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E - \u0446\u0438\u0444\u0440\u043E\u0432 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435\u043D "+"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B"
,3:"AD \u8F49\u63DB\u5668\u6EAB\u5EA6",25:"AD pretvornik temperature",4:"P\u0159evodn\xEDk AD teploty"
,5:"AD-omformer temperatur",0:"AD Converter Temperature",6:"AD Converter Temperatuur"
,7:"AD-muunduri temperatuur",8:"AD Muuntimen L",9:"AD Convertisseur de temp\xE9rature"
,10:"AD Wandler Temperatur",11:"\u039C\u03B5\u03C4\u03B1\u03C4\u03C1\u03BF\u03C0\u03AD\u03B1\u03C2 \u0398\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+
"AD",12:"AD \xE1talak\xEDt\xF3 h\u0151m\xE9rs\xE9klet",13:"Convertitore AD di temperatura"
,15:"AD p\u0101rveidot\u0101ja temperat\u016Bra",26:"AD keitiklio temperat\u016Bra"
,16:"AD-omformer temperatur",17:"Przetwornik AD temperatury",18:"Conversor AD de Temperatura"
,19:"Convertor AD de temperatur\u0103",20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E-^\u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E "+
"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E~\u0432\u0430\u0442\u0435\u043B\u044F"
,27:"Pretvornik AD temperature",21:"Conversor de temperaturas",22:"AD-omvandlare temperatur"
,23:"Analog-Dijital(AD) \xC7evirici S\u0131cakl\u0131\u011F\u0131",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E-\u0446\u0438\u0444\u043E\u0440\u0432\u043E\u0433\u043E "+
"\u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0447\u0430"
};C.BhC="(\xD8 {1} {2})";C.AMa={1:"prosje\u010Dan prirast, \xD8\nod ro\u0111enja"
,2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u0440\u0430\u0436\u0434\u0430\u043D\u0435",3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u5F9E\u51FA\u751F\u6642"
,25:"Dnevni porast te\u017Eine, \xD8\nod ro\u0111enja",4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od narozen\xED"
,5:"Daglig v\xE6gt\xF8gning siden f\xF8dslen",0:"Daily weight gain, \xD8\nsince birth"
,6:"Dagelijkse toename, \xD8\nsinds geboorte",7:"P\xE4evane juurdekasv\nalates s\xFCnnist"
,8:"P\xE4ivitt\xE4inen pai~non~nousu, \xD8 syn~ty~m\xE4st\xE4 l\xE4htien",9:"Gain de poids quo~ti~dienne, \xD8 depuis la naissance"
,10:"Mittlere t\xE4gliche\nZunahme seit Geburt",11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7",12:"Napi s\xFAlygyarapod\xE1s sz\xFClet\xE9s \xF3ta"
,13:"Aumento di peso giornaliero, \xD8 dall\'inizio della vita",15:"Ikdienas svara pieaugums kop\u0161 dzim\u0161anas"
,26:"Vidutinis dienos svorio prieaugis nuo gimimo",16:"Snitt daglig tilvekst fra f\xF8dsel"
,17:"\u015Aredni przyrost masy cia\u0142a od urodzenia",18:"Ganho de peso di\xE1rio desde o nascimento"
,19:"Cre\u0219tere zilnic\u0103 \xEEn greutate, \xD8\nde la na\u0219tere",20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441 \u0441 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,27:"Dnevni prirastek te\u017Ee od rojstva",21:"Ganancia diaria, \xD8\ndesde el nacimiento"
,22:"Daglig vikt\xF6kning, \xD8\nsedan f\xF6dseln",23:"G\xFCnl\xFCk A\u011F\u0131rl\u0131k Art\u0131\u015F\u0131, \xD8\n Do\u011Fumdan "+
"\u0130tibaren",24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442 \u0437 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.BhD={1:"prosje\u010Dan prirast, \xD8\nod prvog vaganja",2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u043F\u044A\u0440\u0432\u043E\u0442\u043E \u0442\u0435\u0433\u043B\u0435\u043D\u0435"
,3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u81EA\u9996\u6B21\u7A31\u91CD\u4EE5\u4F86"
,25:"Dnevni prirast te\u017Eine, \xD8\nod prvog vaganja",4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od prvn\xEDho v\xE1\u017Een\xED"
,5:"Daglig v\xE6gt\xF8gning siden f\xF8rste vejning",0:"Daily weight gain, \xD8\nsince first weighing"
,6:"Dagelijkse toename, \xD8\nsinds eerste weging",7:"P\xE4evane juurdekasv\nalates esimesest kaalumisest"
,8:"P\xE4ivitt\xE4inen pai~non~nousu, \xD8 ensimm\xE4isen punnituksen j\xE4lkeen"
,9:"Gain de poids quo~ti~dienne, \xD8 puis la premi\xE8re pes\xE9e",10:"T\xE4gliche Zunahme, \xD8\nseit erster Wiegung"
,11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03B1\u03C0\u03BF\u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03B9\u03C3\u03BC\u03CC"
,12:"Napi s\xFAlygyarapod\xE1s, \xD8\naz els\u0151 m\xE9rlegel\xE9s \xF3ta",13:"Aumento di peso giornaliero, \xD8\ndal primo pesaggio"
,15:"Ikdienas svara pieaugums, \xD8\nkop\u0161 pirm\u0101s svaru m\u0113r\u012B\u0161anas"
,26:"Kasdienis svorio prieaugis nuo pirmojo sverimo",16:"Snitt daglig tilvekst fra f\xF8rste veiing"
,17:"Przyrost masy cia\u0142a na dzie\u0144, \xD8\nod pierwszego wa\u017Cenia",18:
"Ganho di\xE1rio de peso desde a primeira pesagem",19:"Cre\u0219tere zilnic\u0103 \xEEn greutate, \xD8\nde la prima c\xE2nt\u0103rire"
,20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441, \xD8\n\u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",27:"Dnevni prirastek te\u017Ee, \xD8\nod prve tehtanja"
,21:"Ganancia diaria, \xD8\ndesde el primer pesaje",22:"Daglig vikt\xF6kning, \xD8\nsedan f\xF6rsta v\xE4gningen"
,23:"G\xFCnl\xFCk A\u011F\u0131rl\u0131k Art\u0131\u015F\u0131, \xD8\n \u0130lk "+
"Tart\u0131mdan Bu Yana",24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442, \xD8\n\u0437 \u043F\u0435\u0440\u0448\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"};C.AuJ={1:"prosje\u010Dan prirast, \xD8\nod zadnjeg vaganja"
,2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E "+
"\u0442\u0435\u0433\u043B\u0435\u043D\u0435",3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u81EA\u4E0A\u4E00\u6B21\u7A31\u91CD\u4EE5\u4F86"
,25:"Dnevni porast te\u017Eine, \xD8\nod zadnjeg vaganja",4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od posledn\xEDho v\xE1\u017Een\xED"
,5:"Daglig v\xE6gt\xF8gning siden sidste vejning",0:"Daily weight gain, \xD8\nsince last weighing"
,6:"Dagelijkse toename, \xD8\nsinds laatste weging",7:"P\xE4evane juurdekasv\nalates viimasest kaalumisest"
,8:"P\xE4ivitt\xE4inen painonnousu, \xD8\nviimeisen punnituksen j\xE4lkeen",9:"Gain de poids quo~ti~dienne, \xD8 puis la der~ni\xE8re pes\xE9e"
,10:"Mittl. t\xE4gl. Zunahme\nseit letzter Wiegung",11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03BF \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03B1\u03C0\u03BF\u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03B9\u03C3\u03BC\u03CC"
,12:"Napi s\xFAlygyarapod\xE1s, \xD8\naz utols\xF3 m\xE9r\xE9s \xF3ta",13:"Aumento di peso giornaliero, \xD8\ndall\'ultima pesata"
,15:"Ikdienas svara pieaugums, \xD8\nkop\u0161 p\u0113d\u0113j\u0101s svaru "+"m\u0113r\u012B\u0161anas"
,26:"Dienos svorio prieaugis, \xD8\nnuo paskutinio svars\u010Di\u0173 matavimo",
16:"Snitt daglig tilvekst fra siste veiing",17:"\u015Aredni dzienny przyrost masy od ostatniego wa\u017Cenia"
,18:"Ganho de peso di\xE1rio, \xD8\ndesde a \xFAltima pesagem",19:"Cre\u0219tere zilnic\u0103 \xEEn greutate, \xD8\nde la ultima c\xE2nt\u0103rire"
,20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441\n\u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",27:"Dnevni prirastek te\u017Ee od zadnjega tehtanja"
,21:"Ganancia diaria, \xD8\ndesde el \xFAltimo pesaje",22:"Daglig vikt\xF6kning, \xD8 sedan senaste v\xE4gningen"
,23:"G\xFCnl\xFCk A\u011F\u0131rl\u0131k Art\u0131\u015F\u0131, \xD8\n Son "+"Tart\u0131mdan Bu Yana"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442\n\u0437 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"};C.A5j={1:"Nemjerljivo za vaganje\nna isti dan"
,2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0438 "+
"\u043F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435\n\u0432 \u0441\u044A\u0449\u0438\u044F "+
"\u0434\u0435\u043D",3:"\u7121\u6CD5\u8A08\u7B97\u7684\u91CD\u91CF\n\u5728\u540C\u4E00\u5929"
,25:"Nemjerljivo za vaganje\nna isti dan",4:"Nevypo\u010Ditateln\xE9 pro v\xE1\u017Een\xED\nve stejn\xFD den"
,5:"Uberegnelig for vejning\np\xE5 samme dag",0:"Uncalculable for weighing\non the same day"
,6:"Niet berekenbaar",7:"P\xE4evast juurdekasvu ei saa\nsamal p\xE4eval m\xF5\xF5detud kaalude p\xF5hjal "+
"arvutada",8:"Painonnousu voidaan laskea vain yhden tuloksen mukaan /pv",9:"Non calculable pour les pes\xE9es du m\xEAme jour "
,10:"Nicht berechenbar bei\nWiegung am selben Tag",11:"\u0391\u03BD\u03C5\u03C0\u03BF\u03BB\u03CC\u03B3\u03B9\u03C3\u03C4\u03BF "+
"\u03B3\u03B9\u03B1 \u03B6\u03CD\u03B3\u03B9\u03C3\u03B7\n\u03C4\u03B7\u03BD "+"\u03AF\u03B4\u03B9\u03B1 \u03BC\u03AD\u03C1\u03B1"
,12:"Nem sz\xE1m\xEDthat\xF3 meg ugyanazon a napon",13:"Imponderabile per pesare\nnello stesso giorno"
,15:"Neapr\u0113\u0137in\u0101ms svar\u012B\u0161anai\ntaj\u0101 pa\u0161\u0101 "+
"dien\u0101",26:"Nesuskai\u010Diuojamas svarstymui t\u0105 pa\u010Di\u0105 dien\u0105"
,16:"Um\xE5lelig for veiing p\xE5 samme dag",17:"Nieobliczalne do wa\u017Cenia tego samego dnia"
,18:"Incalcul\xE1vel para pesar\nno mesmo dia",19:"Imposibil de calculat pentru c\xE2nt\u0103rire\n\xEEn aceea\u0219i zi"
,20:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C "+
"\u0434\u043B\u044F \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F "+
"\u0432 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0435\u043D\u044C",27:"Nemogo\u010De izra\u010Dunati za tehtanje\nna isti dan"
,21:"No calculable en el mismo\nd\xEDa del pesaje",22:"Om\xE4tbar f\xF6r att v\xE4ga\np\xE5 samma dag"
,23:"Ayn\u0131 G\xFCne Ait \u0130ki A\u011F\u0131rl\u0131k \xD6l\xE7\xFCm\xFC "+
"\u0130le Hesap Yap\u0131lamaz",24:"\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u043B\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0432 \u0442\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u0434\u0435\u043D\u044C"
};C.AMb={2:"\u0434",3:"\u65E5",0:"d",6:"D",7:"P\xE4ev",8:"pv",9:"J",10:"T",11:"\u03B7"
,12:"n",13:"g",16:"D",19:"z",20:"\u0434",23:"G",24:"\u0434"};C.BhF={2:"\u043C",3:
"\u6708",25:"M",5:"M",0:"m",6:"M",7:"Kuu",8:"kk",9:"M",10:"M",11:"\u03BC",12:"h"
,16:"M",19:"l",20:"\u043C",23:"A",24:"\u043C"};C.BhG={1:"god",2:"\u0433",3:"\u5E74"
,25:"G",4:"R",5:"\xC5",0:"y",6:"J",7:"Aasta",8:"v",9:"A",10:"J",11:"\u03B5",12:"\xE9"
,13:"a",15:"g",26:"M",16:"\xC5",17:"r",18:"A",19:"a",20:"\u0433",27:"L",21:"a",22:
"\xE5",23:"Y",24:"\u0440"};C.About={1:"o",2:"\u041E\u0442\u043D\u043E\u0441\u043D\u043E"
,3:"\u95DC\u65BC",25:"Oko",4:"O",5:"Om",0:"About",6:"Over",7:"Meist",8:"Lis\xE4tieto"
,9:"\xC0 propos de",10:"\xDCber",11:"\u03A3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC"
,12:"K\xF6r\xFClbel\xFCl",13:"Circa",15:"Par",26:"Apie",16:"Om",17:"O, na temat"
,18:"Sobre",19:"Despre",20:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,27:"O, pribli\u017Eno",21:"Sobre",22:"Om",23:"Bilgi",24:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"
};C.TG={1:"Lanac radnji",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430~\u0442\u0435\u043B\u043D\u043E\u0441\u0442 "+
"\u043E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",3:"\u884C\u52D5\u93C8"
,25:"Lanac radnji",4:"\u0158et\u011Bzec akc\xED",5:"K\xE6de af handlinger",0:"Chain of actions"
,6:"Opeenvol~gende acties",7:"Tegevuste ahel",8:"Toimintaketju",9:"Cha\xEEne d\'actions"
,10:"Aktions~kette",11:"\u0391\u03BB\u03C5\u03C3\u03AF\u03B4\u03B1 \u03B4\u03C1\u03AC\u03C3\u03B5\u03C9\u03BD"
,12:"Cselekv\xE9s~sorozat",13:"Catena di azioni",15:"R\u012Bc\u012Bbu \u0137\u0113de"
,26:"Veiksm\u0173 grandin\u0117",16:"Handlingskjede",17:"\u0141a\u0144cuch dzia\u0142a\u0144"
,18:"Cadeia de a\xE7\xF5es",19:"Lan\u021B de ac\u021Biuni",20:"\u0426\u0435\u043F\u043E\u0447\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,27:"Veriga dejanj",21:"Cadena de acciones",22:"Handlings~kedja",23:"Hareket Zinciri"
,24:"\u041B\u0430\u043D\u0446\u044E\u0433 \u0434\u0456\u0439"};C.ActionList={1:"lista aktivnosti"
,2:"\u0421\u043F\u0438\u0441\u044A\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5\u6E05\u55AE",25:"Popis zadataka",4:"Seznam akc\xED",5:"Handlingsliste"
,0:"Action list",6:"Actielijst",7:"Tegevuste loend",8:"Toimintalista",9:"Liste d\u2019action"
,10:"Aktionsliste",11:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,12:"Feladatlista",13:"Lista delle azioni",15:"Darb\u012Bbu saraksts",26:"Veiksm\u0173 s\u0105ra\u0161as"
,16:"Aksjons liste",17:"Lista dzia\u0142a\u0144",18:"Lista de a\xE7\xF5es",19:"List\u0103 de ac\u021Biuni"
,20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,27:"Seznam ukrepov",21:"Lista de acci\xF3n",22:"\xC5tg\xE4rdslista",23:"Hareket Listesi"
,24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0456\u0439"};C.AuM={1:"Meni svih aktivnosti"
,2:"\u041C\u0435\u043D\u044E \u0441 \u0432\u0441\u0438\u0447\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u5168\u529F\u80FD\u9078\u55AE",25:"Potpuni izbornik akcija",4:"Nab\xEDdka",
5:"Fuld handlingsmenu",0:"Full action menu",6:"Actiemenu",7:"Tegevuste men\xFC\xFC"
,8:"Toimintavalikko",9:"Menu d\u2019actions",10:"Aktionsmen\xFC",11:"\u039C\u03B5\u03BD\u03BF\u03CD \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,12:"Teljes akci\xF3men\xFC",13:"Men\xF9 completo delle azioni",15:"Pilns darb\u012Bbu izv\u0113lne"
,26:"Pilnas veiksm\u0173 meniu",16:"Full aksjons meny",17:"Pe\u0142ne menu akcji"
,18:"Menu completo de a\xE7\xF5es",19:"Meniu complet de ac\u021Biuni",20:"\u041C\u0435\u043D\u044E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,27:"Celoten meni dejanj",21:"Men\xFA acciones",22:"Fullst\xE4ndig aktionsmeny",
23:"Tam Hareket Men\xFCs\xFC",24:"\u041F\u043E\u0432\u043D\u0435 \u043C\u0435\u043D\u044E \u0434\u0456\u0439"
};C.Ajl={1:"Aktivnost {1}",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 {1}"
,3:"\u884C\u52D5 {1}",25:"Akcija {1}",4:"Akce {1}",5:"Handling {1}",0:"Action {1}"
,6:"Actie {1}",7:"Tegevus {1}",8:"Toiminto {1}",10:"Aktion {1}",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 {1}"
,12:"Akci\xF3 {1}",13:"Azione",15:"Darb\u012Bba {1}",26:"Veiksmas {1}",16:"Handling {1}"
,17:"Akcja {1}",18:"A\xE7\xE3o {1}",19:"Ac\u021Biune {1}",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 {1}"
,27:"Akcija {1}",21:"Acci\xF3n {1}",22:"Handling {1}",23:"Eylem {1}",24:"\u0414\u0456\u044F {1}"
};C.ActionSettings={1:"Pode\u0161avanje aktivnosti",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5\u8A2D\u5B9A\u503C",25:"Postavke radnji",4:"Nastaven\xED",5:"Indstillinger for handling"
,0:"Action settings",6:"Instellingen acties",7:"Tegevuste seaded",8:"Toiminta-asetukset"
,9:"R\xE9glages d\u2019actions",10:"Einstellungen Aktionen",11:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,12:"Akci\xF3n be\xE1ll\xEDt\xE1sok",13:"Impostazioni dell\'azione",15:"Darb\u012Bbas iestat\u012Bjumi"
,26:"Veiksmo nustatymai",16:"Aksjon innstillinger",17:"Ustawienia akcji",18:"Configura\xE7\xF5es de a\xE7\xE3o"
,19:"Set\u0103ri de ac\u021Biune",20:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,27:"Nastavitve dejanj",21:"Ajustes acciones",22:"\xC5tg\xE4rdsinst\xE4llningar"
,23:"Eylem ayarlar\u0131",24:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0434\u0456\u0439"};C.VE={1:"Aktivnosti",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5",25:"Akcije",4:"Akce",5:"Handlinger",0:"Actions",6:"Acties",7:"Tegevused"
,8:"Toiminnat",9:"Action",10:"Aktionen",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2"
,12:"Cselekv\xE9sek",13:"Azioni",15:"Darb\u012Bbas",26:"Veiksmai",16:"Aksjoner",
17:"Dzia\u0142ania",18:"A\xE7\xF5es",19:"Ac\u021Biuni",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,27:"Dejanja",21:"Acciones",22:"Handlingar",23:"Eylemler",24:"\u0414\u0456\u0457"
};C.A5s={1:"Dodaj na listu za pra\u0107enje",2:"\u0414\u043E\u0431\u0430\u0432\u044F\u043D\u0435 \u043A\u044A\u043C \u0441\u043F\u0438\u0441\u044A\u043A\u0430 "+
"\u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435",3:"\u52A0\u5165\u89C0\u770B\u6E05\u55AE"
,25:"Dodaj na popis za pra\u0107enje",4:"P\u0159idat na seznam sledov\xE1n\xED",
5:"Tilf\xF8j til overv\xE5gningsliste",0:"Add to watch list",6:"Toevoegen aan Watchlist"
,7:"Lisa j\xE4lgimisnimekirja",8:"Lis\xE4\xE4 katsottavien listaan",9:"Ajouter \xE0 la liste de suivi"
,10:"Zur Beobachtungsliste hinzuf\xFCgen",11:"\u03A0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2"
,12:"Hozz\xE1ad\xE1s a megfigyel\xE9si list\xE1hoz",13:"Aggiungi alla lista dei desideri"
,15:"Pievienot v\u0113ro\u0161anas sarakstam",26:"Prid\u0117ti prie steb\u0117jimo s\u0105ra\u0161o"
,16:"Legg til i overv\xE5kningslisten",17:"Dodaj do listy obserwowanych",18:"Adicionar \xE0 lista de observa\xE7\xE3o"
,19:"Adaug\u0103 la lista de urm\u0103rire",20:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",27:"Dodaj na seznam za ogled"
,21:"A\xF1adir a la lista de seguimento",22:"L\xE4gg till i bevakningslistan",23:
"\u0130zleme Listesine Ekle",24:"\u0414\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F"
};C.RU={1:"starost",2:"\u0412\u044A\u0437\u0440\u0430\u0441\u0442",3:"\u5E74\u9F61"
,25:"Dob",4:"V\u011Bk",5:"Alder",0:"Age",6:"Leef~tijd",7:"Vanus",8:"Ik\xE4",9:"\xC2ge"
,10:"Alter",11:"\u0397\u03BB\u03B9\u03BA\u03AF\u03B1",12:"Kor",13:"Et\xE0",15:"Vecums"
,26:"Am\u017Eius",16:"Alder",17:"Wiek",18:"Idade",19:"V\xE2rst\u0103",20:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442"
,27:"Starost",21:"Edad",22:"\xC5lder",23:"Ya\u015F",24:"\u0412\u0456\u043A"};C.AdW={
1:"Starost (novo tele/jagnje)",2:"\u0412\u044A\u0437\u0440\u0430\u0441\u0442 (\u043D\u043E\u0432\u043E \u0442\u0435\u043B\u0435/\u0430\u0433\u043D\u0435)"
,3:"\u5E74\u9F61\uFF08\u65B0\u751F\u5C0F\u725B\uFF0F\u5C0F\u7F8A\uFF09",25:"Starost (novoro\u0111eno tele/janje)"
,4:"V\u011Bk (nov\xE9 tele/jehn\u011B)",5:"Alder (ny kalv/lam)",0:"Age (new calf/lamb)"
,6:"Leeftijd nieuw kalf/lam",7:"Vanus (noor vasikas/lammas)",8:"Ik\xE4 (uusi vasikka/lammas)"
,9:"\xC2ge (Nouveau jeune animal)",10:"Alter neues Jungtier",11:"\u0397\u03BB\u03B9\u03BA\u03AF\u03B1 (\u03BD\u03B5\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C4\u03BF "+
"\u03BC\u03BF\u03C3\u03C7\u03B1\u03C1\u03AC\u03BA\u03B9/\u03B1\u03C1\u03BD\u03AC\u03BA\u03B9)"
,12:"Kor (\xFAjsz\xFCl\xF6tt borj\xFA/b\xE1r\xE1ny)",13:"Et\xE0 (vitello/agnello nuovo)"
,15:"Vecums (jauns te\u013C\u0161/j\u0113rs)",26:"Am\u017Eius (naujagimis ver\u0161elis/\u0117riukas)"
,16:"Alder (ny kalv/lam)",17:"Wiek (nowo narodzone ciel\u0119/jagni\u0119)",18:"Idade (novo bezerro/cordeiro)"
,19:"V\xE2rst\u0103 (vi\u021Bel/miel nou)",20:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442 (\u043D\u043E\u0432\u043E\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0439 "+
"\u0442\u0435\u043B\u0435\u043D\u043E\u043A/\u044F\u0433\u043D\u0435\u043D\u043E\u043A)"
,27:"Starost (novo tele/jagnje)",21:"Edad (ternero/cordero)",22:"\xC5lder (ny kalv/lamm)"
,23:"Ya\u015F(Yeni buza\u011F\u0131/kuzu)",24:"\u0412\u0456\u043A (\u043D\u043E\u0432\u043E\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u0435 "+
"\u0442\u0435\u043B\u044F/\u044F\u0433\u043D\u044F)"};C.Alarm={2:"\u0410\u043B\u0430\u0440\u043C\u0430"
,3:"\u8B66\u5831",0:"Alarm",7:"Hoiatus",8:"H\xE4lytys",9:"Alarme",11:"\u03A3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CC\u03C2"
,12:"\xC9breszt\u0151",13:"Allarme",15:"Trauksme",26:"Signalas",18:"Alarme",19:"Alarm\u0103"
,20:"\u0421\u0438\u0433\u043D\u0430\u043B",21:"Alarma",22:"Larm",24:"\u0421\u0438\u0433\u043D\u0430\u043B"
};C.BhM={1:"ve\u0107 povezani",2:"\u0412\u0435\u0447\u0435 \u0435 \u043F\u0440\u0438\u0431\u0430\u0432\u0435\u043D"
,3:"\u5DF2\u7D93\u5206\u914D",25:"Ve\u0107 dodijeljeno",4:"Ji\u017E p\u0159id\u011Bleno"
,5:"Allerede tildelt",0:"Already assigned",6:"al toegewezen",7:"Juba m\xE4\xE4ratud"
,8:"Jo m\xE4\xE4ritetty",9:"D\xE9j\xE0 attribu\xE9",10:"Bereits verkn\xFCpft",11:
"\u0389\u03B4\u03B7 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF"
,12:"M\xE1r ki van osztva",13:"Gi\xE0 assegnato",15:"Jau pie\u0161\u0137irts",26:
"Jau paskirta",16:"Allerede tildelt",17:"Ju\u017C przypisane",18:"J\xE1 atribu\xEDdo"
,19:"Deja atribuit",20:"\u0423\u0436\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u044B"
,27:"\u017De dodeljeno",21:"Ya asignado/a",22:"Redan tilldelad",23:"Halihaz\u0131rda Atanm\u0131\u015F"
,24:"\u0412\u0436\u0435 \u0437\u0432\'\u044F\u0437\u0430\u043D\u0456"};C.Animal={
1:"\u017Eivotinja",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E",3:"\u5C0F\u725B"
,25:"\u017Divotinja",4:"Zv\xED\u0159e",5:"Dyr",0:"Animal",6:"Dier",7:"Loom",8:"El\xE4in"
,10:"Einzeltier",11:"\u0396\u03CE\u03BF",12:"\xC1llat",13:"Animale",15:"Dz\u012Bvnieks"
,26:"Gyv\u016Bnas",16:"Dyr",17:"Zwierz\u0119",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"\u017Dival",21:"Animal individual",22:"Djur",23:"Hayvan",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430"
};C.AdY={1:"podaci o \u017Eivotinji",2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u8CC7\u6599",25:"Podaci o \u017Eivotinjama",4:"Data o zv\xED\u0159eti"
,5:"Dyredata",0:"Animal data",6:"Dier data",7:"Looma info",8:"Tietoa el\xE4imist\xE4"
,9:"Donn\xE9es de l\u2019animal",10:"Tierdaten",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llatadatok",13:"Dati sugli animali",15:"Datu par dz\u012Bvniekiem",26:"Gyv\u016Bn\u0173 duomenys"
,16:"Dyr- data",17:"Dane zwierz\u0119ce",18:"Dados sobre animais",19:"Date despre animale"
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Podatki o \u017Eivalih",21:"Datos animales",22:"Djurdata",23:"Hayvan Verisi"
,24:"\u0414\u0430\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.BhN={
1:"Podaci o \u017Eivotinji: Br. markice za uho",2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043E: "+
"\u2116 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430",3:"\u52D5\u7269\u8CC7\u6599\uFF1A\u8033\u6A19\u7DE8\u865F"
,25:"Podaci o \u017Eivotinji: broj markice za uho",4:"\xDAdaje o zv\xED\u0159eti: \u010D. n\xE1u\u0161nice"
,5:"Dyredatabase: Nummer \xF8rem\xE6rke",0:"Animal data: \u2116 eartag",6:"Dierengegevens: nr. oormerk"
,7:"Looma andmed: \u2116 k\xF5rvam\xE4rk",9:"Donn\xE9es sur l\'animal : \u2116 de boucle auriculaire"
,10:"Tierdaten: \u2116 Ohrmarke",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5: "+
"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD",12:"\xC1llat adatok: f\xFClc\xEDmke sz\xE1ma"
,13:"Dati animali: n\xB0 marchio auricolare",15:"Dz\u012Bvnieka dati: \u2116 ausu mar\u0137\u0113jums"
,26:"Gyv\u016Bno duomenys: \u2116 ausies \u017Eyma",16:"Dyredatabase: Nummer \xF8remerke"
,17:"Dane zwierz\u0119cia: nr kolczyka",18:"Dados do animal: \u2116 da etiqueta auricular"
,19:"Date despre animal: Nr. etichet\u0103 de ureche",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E: "+
"\u2116 \u0431\u0438\u0440\u043A\u0438",27:"Podatki o \u017Eivali: \u0161t. u\u0161esne znamke"
,22:"Djurdata: Nr. \xF6ronm\xE4rke",23:"Hayvan Verisi: K\xFCpe \u2116",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443: "+
"\u2116 \u0441\u0435\u0440\u0435\u0436\u043A\u0438 (\u0432\u0443\u0448\u043D\u043E\u0457 "+
"\u043C\u0456\u0442\u043A\u0438)"};C.A5A={1:"Podaci o \u017Eivotinji: spol+vrsta"
,2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E: "+
"\u043F\u043E\u043B+\u0442\u0438\u043F",3:"\u52D5\u7269\u8CC7\u6599\uFF1A\u6027\u5225+\u985E\u578B"
,25:"Podaci o \u017Eivotinji: spol+vrsta",4:"Data o zv\xED\u0159eti: pohlav\xED+druh"
,5:"Dyredata: k\xF8n+type",0:"Animal data: sex+type",6:"Dierlijke gegevens: geslacht+type"
,7:"Looma andmed: sugu+t\xFC\xFCp",9:"Donn\xE9es sur les animaux : sexe + type",
10:"Tierdaten: Geschlecht+Typ",11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5: "+
"\u03C6\u03CD\u03BB\u03BF+\u03B5\u03AF\u03B4\u03BF\u03C2",12:"\xC1llat adatok: nem+t\xEDpus"
,13:"Dati sull\'animale: sesso + tipo",15:"Dz\u012Bvnieka dati: dzimums+veids",26:
"Gyv\u016Bno duomenys: lytis+tipas",16:"Dyredat: kj\xF8nn+type",17:"Dane zwierz\u0119cia: p\u0142e\u0107+rodzaj"
,18:"Dados do animal: sexo+tipo",19:"Date despre animale: sex + tip",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445: "+
"\u043F\u043E\u043B+\u0442\u0438\u043F",27:"Podatki o \u017Eivali: spol + vrsta"
,22:"Djurdata: k\xF6n+typ",23:"Hayvan Verisi: cinsiyet+tip",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443: "+
"\u0441\u0442\u0430\u0442\u044C+\u0442\u0438\u043F"};C.AnimalDataOnly={1:"samo podaci o \u017Eivotinjama"
,2:"\u0421\u0430\u043C\u043E \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u50C5\u9650\u52D5\u7269\u8CC7\u6599",25:"Podaci samo o \u017Eivotinjama",4:
"Data pouze o zv\xED\u0159atech",5:"Data kun om dyr",0:"Animal data only",6:"Alleen dierdata"
,7:"Ainult looma info",8:"Vain el\xE4intiedot",9:"Uniquement donn\xE9es des animaux"
,10:"Nur Tierdaten",11:"\u039C\u03CC\u03BD\u03BF \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF\u03C5",12:"Csak \xE1llatadatok",13:"Dati sugli animali solo"
,15:"Datu par dz\u012Bvniekiem tikai",26:"Gyv\u016Bn\u0173 duomenys tik",16:"Data bare for dyr"
,17:"Dane dotycz\u0105ce tylko zwierz\u0105t",18:"Dados apenas de animais",19:"Date despre animale"
,20:"\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",27:"Podatki samo o \u017Eivalih"
,21:"Solo datos de animales",22:"Djurdata enbart",23:"Sadece Hayvan Verisi",24:"\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u0430\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AMB={1:"istorija \u017Eivotinje",2:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435"
,3:"\u52D5\u7269\u6B77\u53F2\u6A94\u6848",25:"Povijest \u017Eivotinja",4:"Historie zv\xED\u0159ete"
,5:"Dyrs historie",0:"Animal\u2019s history",6:"Dierhistorie",7:"Looma ajalugu",
8:"El\xE4in historia",9:"Historique d\u2019animaux",10:"Tierhistorie",11:"\u0399\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03B6\u03CE\u03C9\u03BD"
,12:"\xC1llatok t\xF6rt\xE9nete",13:"Storia degli animali",15:"Dz\u012Bvnieku v\u0113sture"
,26:"Gyv\u016Bno istorija",16:"Dyrenes historikk",17:"Historia zwierz\u0119cia",
18:"Hist\xF3ria do animal",19:"Istoria animalului",20:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0442\u0440\u0435\u0432\u043E\u0433"
,27:"Zgodovina \u017Eivali",21:"Historial del animal",22:"Djurens historia",23:"Hayvan ge\xE7mi\u015Fi"
,24:"\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0442\u0440\u0438\u0432\u043E\u0433"
};C.GI={1:"ID \u017Eivotinje",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116"
,3:"\u5C0F\u725B\u8B58\u5225\u865F",25:"Identifikacijski broj \u017Eivotinje",4:
"ID zv\xED\u0159ete",5:"Dyrets ID",0:"Animal ID",6:"Diernummer",7:"Looma ID",8:"El\xE4in ID"
,9:"ID de l\u2019animal",10:"Tiernummer",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"\xC1llat azonos\xEDt\xF3",13:"Identificativo animale"
,15:"Dz\u012Bvnieka ID",26:"Gyv\u016Bno ID",16:"Dyr-ID",17:"Identyfikator zwierz\u0119cia"
,18:"Identifica\xE7\xE3o do animal",19:"ID animal",20:"\u041D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Identifikacijska \u0161tevilka \u017Eivali",21:"No. del crotal",22:"Djur-ID"
,23:"Hayvan Kimli\u011Fi(ID)",24:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A5C={1:"Odlazak \u017Eivotinje?",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u043D\u0430\u043F\u0443\u0441\u043A\u0430\u0449\u043E "+
"\u0444\u0435\u0440\u043C\u0430\u0442\u0430",3:"\u52D5\u7269\u96E2\u958B\u8FB2\u5834"
,25:"\u017Divotinja napu\u0161ta farmu",4:"Zv\xED\u0159e opou\u0161t\xED farmu",
5:"Dyr forlader g\xE5rd",0:"Animal leaves farm",6:"Dier verlaat bedrijf",7:"Loom lahkub farmist"
,8:"El\xE4in poistunut tilalta",9:"Animal quitte la ferme",10:"Abgang vom Betrieb?"
,11:"\u0391\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7 \u03B6\u03CE\u03BF\u03C5 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1",12:"\xC1llat elhagyja a farmot"
,13:"Animale lascia la fattoria",15:"Dz\u012Bvnieks pamet saimniec\u012Bbu",26:"Gyv\u016Bnas palieka \u016Bk\u012F"
,16:"Dyr- forlater g\xE5rden",17:"Zwierz\u0119 opuszcza farm\u0119",18:"Animal sai da fazenda"
,19:"Animalul p\u0103r\u0103se\u0219te ferma",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u0435\u0442 "+
"\u0444\u0435\u0440\u043C\u0443?",27:"\u017Dival zapusti kmetijo",21:"Salida de la granja"
,22:"Djur l\xE4mnar bondg\xE5rd",23:"Hayvan \xC7iftli\u011Fi Terk Ediyor",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u043F\u043E\u043A\u0438\u0434\u0430\u0454 "+
"\u0444\u0435\u0440\u043C\u0443?"};C.AB2={1:"Odabir spiska \u017Eivotinja",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441\u043F\u0438\u0441\u044A\u043A\n\u0437\u0430 "+
"\u0441\u0435\u043B\u0435\u043A\u0446\u0438\u044F",3:"\u5C0F\u725B\u6E05\u55AE\n\u4F9B\u9078\u64C7"
,25:"Popis \u017Eivotinja\nza odabir",4:"Seznam zv\xED\u0159at pro v\xFDb\u011Br"
,5:"Dyreliste\ntil valg",0:"Animal list\nfor selection",6:"Dierlijst voor selectie dier"
,7:"Loomade nimekiri\nvalikuks",8:"El\xE4inluettelo\nvalintaa varten",9:"Liste d\u2019animaux\npour s\xE9lectionner"
,10:"Tierliste zur Tierauswahl",11:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD \u03C0\u03C1\u03CC\u03C2 "+
"\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE",12:"\xC1llatlista\na kiv\xE1laszt\xE1shoz"
,13:"Lista di animali\nper la selezione",15:"Saraksts ar dz\u012Bvniekiem\nizv\u0113lei"
,26:"S\u0105ra\u0161as gyv\u016Bn\u0173\npasirinkimui",16:"Dyr-liste\nfor utvalg"
,17:"Lista zwierz\u0105t\ndo wyboru",18:"Lista de animais\npara sele\xE7\xE3o",19:
"List\u0103 de animale\npentru selec\u021Bie",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430",27:"Seznam \u017Eivali\nza izbor"
,21:"Lista animales\npara seleccionar animal",22:"Djurlista\nf\xF6r urval",23:"Se\xE7im \u0130\xE7in\n Hayvan Listesi"
,24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443"};C.AnimalLoss={1:"gubitak \u017Eivotinje"
,2:"\u0423\u043C\u0440\u044F\u043B\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u907A\u5931",25:"Gubitak \u017Eivotinje",4:"Zv\xED\u0159e ztraceno"
,5:"Dyretab",0:"Animal loss",6:"Dier verloren",7:"Looma ei ole enam",8:"El\xE4inten menetys"
,9:"Perte d\u2019animaux",10:"Tierverlust",11:"\u0391\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llatveszt\xE9s",13:"Perdita di un animale",15:"Dz\u012Bvnieka zaud\u0113jums"
,26:"Gyv\u016Bno netektis",16:"Dyr- Tapt",17:"Strata zwierz\u0119cia",18:"Perda de animal"
,19:"Pierderea unui animal",20:"\u041F\u043E\u0442\u0435\u0440\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Izguba \u017Eivali",21:"P\xE9rdida del animal",22:"Djurf\xF6rlust",23:"Hayvan Kayb\u0131"
,24:"\u0412\u0442\u0440\u0430\u0442\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AnimalNotFound={1:"\u017Eivotinju sa ID {1} nije mogu\u0107e prona\u0107i",2:
"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u043D\u0435 \u0435 "+"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043E"
,3:"\u672A\u767C\u73FE\u725B\u96BB{1}",25:"\u017Divotinja s ID-om {1} nije prona\u0111ena"
,4:"Zv\xED\u0159e s ID {1} nenalezeno",5:"Dyr med ID {1} ikke fundet",0:"Animal with ID {1} not found"
,6:"Dier met ID {1} kon niet gevonden worden",7:"Loom ID-ga {1} pole leitav",8:"El\xE4int\xE4 Id {1} ei l\xF6ydy"
,9:"Animal avec\nID {1} introuvable",10:"Tier mit ID {1} konnte nicht gefunden werden"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",12:"Azonos\xEDt\xF3val {1} rendelkez\u0151 \xE1llat nem tal\xE1lhat\xF3."
,13:"Animale con ID {1} non trovato",15:"Dz\u012Bvnieks ar ID {1} nav atrasts",26:
"Gyv\u016Bnas su ID {1} nerastas",16:"Dyr- ikke funnet",17:"Zwierz\u0119 o ID {1} nie zosta\u0142o znalezione."
,18:"Animal com ID {1} n\xE3o encontrado",19:"Animalul cu ID-ul {1} nu a fost g\u0103sit."
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",27:"\u017Dival z ID {1} ni bila najdena."
,21:"No se encontr\xF3 el animal con la ID {1}",22:"Djur med ID {1} hittades inte"
,23:"Hayvan bulunamad\u0131",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430"
};C.BhT={1:"\u017Eivotinja sa ID {1} jo\u0161 nije registrovan",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u043D\u0435 \u0435 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E "+"\u0432\u0441\u0435 \u043E\u0449\u0435"
,3:"\u7DE8\u865F\u70BA{1}\u7684\u5C0F\u725B\u5C1A\u672A\u8A3B\u518A",25:"\u017Divotinja s ID-om {1} jo\u0161 nije registrirana"
,4:"Zv\xED\u0159e s ID {1} nebylo registrov\xE1no",5:"Dyr med ID {1} er endnu ikke registreret"
,0:"Animal with ID {1} not registered yet",6:"Dier met ID {1} nog niet in systeem aangelegd"
,7:"Loom ID-ga {1} pole veel registeeritud",8:"El\xE4int\xE4, jonka tunnus on {1}, ei ole viel\xE4 rekister\xF6ity"
,9:"Animal avec ID {1} non encore enregistr\xE9",10:"Tier mit der ID {1} noch nicht im System angelegt"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C5\u03C4\u03CC "+"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B1.",12:"Az {1} azonos\xEDt\xF3j\xFA \xE1llat m\xE9g nincs regisztr\xE1lva."
,13:"Animale con ID {1} non ancora registrato",15:"Dz\u012Bvnieks ar ID {1} v\u0113l nav re\u0123istr\u0113ts."
,26:"Gyv\u016Bnas su ID {1} dar neu\u017Eregistruotas.",16:"Dyr- ikke registrert enda"
,17:"Zwierz\u0119 o ID {1} nie jest jeszcze zarejestrowane.",18:"Animal com ID {1} ainda n\xE3o registrado"
,19:"Animalul cu ID-ul {1} nu este \xEEnregistrat \xEEnc\u0103.",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435",27:"\u017Dival z ID {1} \u0161e ni registrirana."
,21:"Animal con ID {1} a\xFAn no registrado",22:"Djur med ID {1} \xE4r \xE4nnu inte registrerat."
,23:"{1} Kimliklik Hayvan Hen\xFCz Kaydedilmedi",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0449\u0435 \u043D\u0435 "+
"\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0456"};C.A5D={1:"Uginu\u0107e?",2:
"\u0423\u043C\u0440\u044F\u043B\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E?"
,3:"\u5C0F\u725B\u6B7B\u4E86\u55CE\uFF1F",25:"\u017Divotinja uginula?",4:"Zv\xED\u0159e zem\u0159elo"
,5:"Dyr omkommet?",0:"Animal perished?",6:"Dier dood?",7:"Loom hukkunud?",8:"El\xE4in menehtyi?"
,9:"L\u2019animal a p\xE9ri\xA0?",10:"Tier verendet?",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03C0\u03AD\u03B8\u03B1\u03BD\u03B5;"
,12:"Az \xE1llat elpusztult?",13:"Animale morto?",15:"Vai dz\u012Bvnieks ir miris?"
,26:"Gyv\u016Bnas \u017Euvo?",16:"Dyr d\xF8de",17:"Zwierz\u0119 zgin\u0119\u0142o?"
,18:"Animal morreu?",19:"Animalul a pierit?",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u0433\u0438\u0431\u043B\u043E?"
,27:"Je \u017Eival poginila?",21:"\xBFAnimal muerto?",22:"Djur avlidit?",23:"Hayvan telef mi oldu?"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437\u0430\u0433\u0438\u043D\u0443\u043B\u0430?"
};C.A5F={1:"\u017Divotinje",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u0438",3:"\u52D5\u7269"
,25:"\u017Divotinje",4:"Zv\xED\u0159ata",5:"Dyr",0:"Animals",6:"Dieren",7:"Loomad"
,8:"El\xE4imet",9:"Les animaux",10:"Tiere",11:"\u0396\u03CE\u03B1",12:"\xC1llatok"
,13:"Animali",15:"Dz\u012Bvnieki",26:"Gyv\u016Bnai",16:"Dyr",17:"Zwierz\u0119ta"
,18:"Animais",19:"Animale",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,27:"\u017Divali",21:"Animales",22:"Djur",23:"Hayvanlar",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A5G={1:"Lampa za osvjetljenje mjesta za mjerenje temperature",2:"\u041E\u0441\u0432\u0435\u0442\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0430\u043D\u0443\u0441\u0430",3:"\u809B\u6EAB\u6E2C\u91CF",25:"Osvjetljenje anusa"
,4:"Anus vy\u0161et\u0159en\xED",0:"Anus spotlighting",6:"Verlichting Meetpunt",
7:"P\xE4raku valgustamine",8:"Mittauskohteen valo",9:"Eclairage de l\u2019anus",
10:"Beleuchtung Messort",11:"\u03A4\u03BF\u03C0\u03B9\u03BA\u03CC\u03C2 \u03C6\u03C9\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C0\u03C1\u03C9\u03BA\u03C4\u03BF\u03CD.",12:"V\xE9gb\xE9l megvil\xE1g\xEDt\xE1s"
,13:"Illuminare l\'ano",15:"Taisn\u0101s zarnas izgaismo\u0161ana",26:"I\u0161ang\u0117s ap\u0161vietimas"
,16:"Rektum spotlys",17:"Pod\u015Bwietlenie odbytu",18:"Foco no \xE2nus",19:"Iluminarea anusului"
,20:"\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 \u043C\u0435\u0441\u0442\u0430 "+
"\u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",27:"Osvetlitev anusa",21:
"Iluminaci\xF3n del ano",22:"Anus belysning",23:"An\xFCs Nokta Ayd\u0131nlatma",
24:"\u041F\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043C\u0456\u0441\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A5I={1:"primjeni",2:"\u041F\u0440\u0438\u043B\u043E\u0436\u0438",3:"\u5957\u7528"
,25:"Prijaviti se",4:"Aplikovat",5:"Ans\xF8g",0:"Apply",6:"Toepassen",7:"Kohalda"
,8:"K\xE4yt\xE4",9:"Appliquer",10:"Anwenden",11:"\u0395\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03C4\u03B5"
,12:"Alkalmaz",13:"Applicare",15:"Pieteikties",26:"Taikyti",16:"S\xF8k",17:"Aplikowa\u0107"
,18:"Aplicar",19:"Aplic\u0103",20:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"
,27:"Uporabi",21:"Aplicar",22:"Ans\xF6k",23:"Uygula",24:"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438"
};C.A5L={1:"Dodijeli ID markicu",2:"\u0412\u044A\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0443\u0448\u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0430",3:"\u4F5C\u696D\u8033\u6A19\u865F\u78BC",25:"Broj markice za uho"
,4:"\u010C\xEDslo zna\u010Dky ve uchu",5:"Opgave \xF8rem\xE6rke nummer",0:"Assignment ear tag number"
,6:"Toevoegen Oormerk",7:"\xDClesande k\xF5rvam\xE4rgi number",8:"Teht\xE4v\xE4 korvamerkin numero"
,9:"Attribution d\u2019un \u2116 de boucle auriculaire",10:"Zuordnung Ohrmarkennr."
,11:"\u0391\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD "+
"\u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5",12:"Kijel\xF6lt f\xFClc\xEDmke sz\xE1m"
,13:"Numero di etichetta auricolare",15:"Pie\u0161\u0137ir\u0161anas ausu birkas numurs"
,26:"Priskyrimo auskar\u0173 numeris",16:"Oppdrag \xF8remerkenummer",17:"Numer kolczyka identyfikacyjnego"
,18:"N\xFAmero da etiqueta de identifica\xE7\xE3o",19:"Num\u0103rul de etichet\u0103 al asign\u0103rii"
,20:"\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0448\u043D\u043E\u0439 "+
"\u0431\u0438\u0440\u043A\u0438 \u2116",27:"Dodeljena \u0161tevilka u\u0161esne znamke"
,21:"Asignaci\xF3n del n\xFAmero de la marca auricular",22:"Uppgifts \xF6ronm\xE4rkesnummer"
,23:"Kulak K\xFCpe Numaras\u0131 \u0130\xE7in Atama",24:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\n\u0432\u0443\u0448\u043D\u043E\u0457 "+
"\u0431\u0456\u0440\u043A\u0438 \u2116"};C.Aqq={1:"Zadatak \u017Eivotinjski ID",
2:"\u0417\u0430\u0434\u0430\u0432\u0430\u043D\u0435 ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u6307\u6D3E\u52D5\u7269\u7DE8\u865F",25:"Identifikacijski broj \u017Eivotinje"
,4:"P\u0159i\u0159azen\xED identifika\u010Dn\xEDho \u010D\xEDsla zv\xED\u0159ete"
,5:"Opgave dyre-ID",0:"Assignment animal ID",6:"Toevoegen Diernummer",7:"\xDClesande looma ID"
,8:"El\xE4imen numeron antaminen",9:"Attribution du \u2116 d\'animal",10:"Vergabe Tiernummer"
,11:"\u0391\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03B6\u03C9\u03B9\u03BA\u03BF\u03CD "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"Feladat \xE1llat azonos\xEDt\xF3",13:"Identificativo animale",15:"Uzdevuma dz\u012Bvnieka ID"
,26:"Priskyrimo gyv\u016Bno ID",16:"Oppgave dyre-ID",17:"Przydzielony identyfikator zwierz\u0119cia"
,18:"Identifica\xE7\xE3o do animal de tarefa",19:"Identificatorul animalului din sarcin\u0103"
,20:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ID \u0434\u043B\u044F "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",27:"Naloga \u017Eivalska oznaka"
,21:"Asignaci\xF3n de ID de animal",22:"Uppgift djur-ID",23:"Hayvan Kimlik Atama"
,24:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u0438 ID \u0434\u043B\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A5M={1:"nasumice",2:"\u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E"
,3:"\u96A8\u6A5F",25:"nasumi\u010Dno",4:"n\xE1hodn\u011B",5:"tilf\xE6ldigt",0:"at random"
,6:"toevallig",7:"Juhuslikult",8:"sattuman~varaisesti",9:"Valeur al\xE9atoire",10:
"Zufallswert",11:"\u039A\u03B1\u03C4\u03AC \u03C4\u03CD\u03C7\u03B7",12:"v\xE9letlen~szer\u0171en"
,13:"a caso",15:"nejau\u0161i",26:"atsitiktinai",16:"Tilfeldig",17:"losowo",18:"ao acaso"
,19:"la \xEEnt\xE2mplare",20:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
,27:"naklju\u010Dno",21:"Valor al azar",22:"p\xE5 m\xE5f\xE5",23:"Rastgele",24:"\u0412\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Aqs={1:"dodijeljen ID broj",2:"\u041F\u0440\u0438\u0431\u0430\u0432\u0435\u043D \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 (\u2116)",3:"\u6307\u5B9AID",25:"Dodijeljeni ID"
,4:"P\u0159id\u011Blen\xE9 ID",5:"Tildelt ID",0:"Assigned ID",6:"automatisch dier toevoegen"
,7:"ID m\xE4\xE4ratud",8:"Annettu ID tunnus",9:"ID assign\xE9e",10:"Neue Tier-Nr."
,11:"\u0391\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC"
,12:"Kijel\xF6lt azonos\xEDt\xF3",13:"ID assegnato",15:"Pie\u0161\u0137irts ID",
26:"Priskirtas ID",16:"Tildelt ID",17:"Przypisane ID",18:"Identifica\xE7\xE3o atribu\xEDda"
,19:"ID alocat",20:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u2116",27:"Dodeljena ID \u0161tevilka",21:"ID asignado",22:"Tilldelat ID",23:"Otomatik Atanm\u0131\u015F Kimlik"
,24:"\u041D\u043E\u0432\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430 \u2116"
};C.Abb={1:"automatski uklju\u010Di/isklju\u010Di",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0412\u043A\u043B/\u0418\u0437\u043A\u043B"
,3:"\u81EA\u52D5\u6E2C\u91CF\u958B/\u95DC",25:"Automatsko uklju\u010Divanje/isklju\u010Divanje"
,4:"Auto ZAP/VYP",5:"Automatisk T\xC6ND/SLUK",0:"Auto ON/OFF",6:"Aan/Uit-Automatic"
,7:"Automaatne sisse/v\xE4lja l\xFClitamine",10:"Ein/Aus-Automatik",11:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF \u03AC\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1/\u03BA\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF"
,12:"Automatikus be-/kikapcsol\xE1s",13:"Accensione/Spegnimento automatico",15:"Auto IESL\u0112G\u0160ANA/IZSL\u0112G\u0160ANA"
,26:"Automatinis \u012Fjungimas/i\u0161jungimas",16:"Auto AV/P\xC5",17:"Automatyczne w\u0142\u0105czanie/wy\u0142\u0105czanie"
,18:"Autom\xE1tico Ligado/Desligado",19:"Pornire/Opre\u0219tere automat\u0103",20:
"\u0410\u0432\u0442\u043E \u0412\u041A\u041B./\u0412\u042B\u041A\u041B.",27:"Avtomatski vklop/izklop"
,22:"Automatisk av/p\xE5",23:"Otomatik A\xC7/KAPA",24:"\u0410\u0432\u0442\u043E \u0423\u0412\u0406\u041C\u041A./\u0412\u0418\u041C\u041A."
};C.Aqt={1:"\u017Divotinje automatski registrirati",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
,3:"\u81EA\u52D5\u767B\u9304",25:"Automatska registracija",4:"Autoregistrace",5:
"Selvregistrering",0:"Auto-registration",6:"Dieren automatisch registreren",7:"Automaatne registreerimine"
,8:"Autom rekister\xF6inti",9:"Enregistrer animaux automatiques",10:"Tiere automatisch anlegen"
,11:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE"
,12:"Automatikus regisztr\xE1ci\xF3",13:"Registrazione automatica",15:"Auto-re\u0123istr\u0101cija"
,26:"Automatin\u0117 registracija",16:"Automatisk registrering",17:"Automatyczna rejestracja"
,18:"Auto-registro",19:"\xCEnregistrare automat\u0103",20:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445"
,27:"Samodejna registracija",21:"Autoregistro",22:"Sj\xE4lvanm\xE4lan",23:"Otomatik kay\u0131t"
,24:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D"};C.Automatic={1:"automatski",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E"
,3:"\u81EA\u52D5\u5316",25:"Automatski",4:"Automatick\xE1",5:"Automatisk",0:"Automatic"
,6:"Automatisch",7:"Automaatne",8:"Automaatti",9:"Automatique",10:"Automatisch",
11:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF",12:"Automatikus",13:"Automatico"
,15:"Autom\u0101tisks",26:"Automatinis",16:"Automatisk",17:"Automatyczny",18:"Autom\xE1tico"
,19:"Automat",20:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438"
,27:"Avtomatski",21:"Autom\xE1tico",22:"Automatisk",23:"Otomatik",24:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E"
};C.A5O={1:"prosje\u010Dna te\u017Eina prilikom ro\u0111enja",2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0442\u0435\u0433\u043B\u043E \u043F\u0440\u0438 "+
"\u0440\u0430\u0436\u0434\u0430\u043D\u0435",3:"\u5E73\u5747\u51FA\u751F\u9AD4\u91CD"
,25:"Prosje\u010Dna poro\u0111ajna te\u017Eina",4:"Pr\u016Fm\u011Brn\xE1 porodn\xED hmotnost"
,5:"Gennemsnitlig f\xF8dselsv\xE6gt",0:"Average birth weight",6:"gemiddelde geboorte gewicht"
,7:"Keskmine s\xFCnnikaal",8:"Syntym\xE4paino ka",9:"Poids moyen de naissance",10:
"Mittleres Geburtsgewicht",11:"\u039C\u03AD\u03C3\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2 \u03BA\u03B1\u03C4\u03AC "+
"\u03C4\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B1",12:"\xC1tlagos sz\xFClet\xE9si s\xFAly"
,13:"Peso medio alla nascita",15:"Vid\u0113jais dzim\u0161anas svars",26:"Vidutinis gimimo svoris"
,16:"Gjennomsnittlig f\xF8dselsvekt",17:"\u015Arednia masa urodzeniowa",18:"Peso m\xE9dio ao nascer"
,19:"Greutatea medie la na\u0219tere",20:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u043F\u0440\u0438 "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",27:"Povpre\u010Dna porodna te\u017Ea"
,21:"Peso medio al nacer",22:"Medel f\xF6delsevikt",23:"Ortalama Do\u011Fum A\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0430\u0433\u0430 \u043F\u0440\u0438 "+
"\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"};C.A5P={1:"prosje\u010Dan dnevni prirast"
,2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0434\u043D\u0435\u0432\u0435\u043D "+
"\u043F\u0440\u0438\u0440\u0430\u0441\u0442",3:"\u5E73\u5747\u65E5\u589E\u91CD",
25:"Prosje\u010Dni dnevni prirast te\u017Eine",4:"Pr\u016Fm\u011Brn\xFD denn\xED p\u0159\xEDr\u016Fstek hmotnosti"
,5:"Gennemsnitlig daglig v\xE6gt\xF8gning",0:"Average daily weight gain",6:"Gem. dagl. gewichtstoename"
,7:"Keskmine p\xE4evane juurdekasv",8:"Ka p\xE4iv\xE4kasvu",9:"Prise de poids quo~ti~dienne moyenne"
,10:"Mittlere t\xE4gl. Zunahme",11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2",12:"\xC1tlagos napi s\xFAlygyarapod\xE1s"
,13:"Aumento medio giornaliero del peso",15:"Vid\u0113jais dienas svara pieaugums"
,26:"Vidutinis paros svorio prieaugis",16:"Gjennomsnittlig daglig tilvekst",17:"\u015Aredni dzienny przyrost masy"
,18:"Ganho m\xE9dio di\xE1rio de peso",19:"C\xE2\u0219tigul mediu zilnic \xEEn greutate"
,20:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441",27:"Povpre\u010Den dnevni prirastek te\u017Ee"
,21:"Ganancia diaria promedia",22:"Genomsnittlig daglig vikt\xF6kning",23:"Ortalama G\xFCnl\xFCk A\u011F\u0131rl\u0131 Kazan\u0131m\u0131"
,24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442"};C.BhZ={1:"\xD8 Prirast: {1} {2}",2:
"\xD8 \u041F\u0440\u0438\u0440\u0430\u0441\u0442: {1} {2}",3:"\xD8\u9AD4\u91CD\u589E\u52A0\uFF1A{1} {2}"
,25:"Weight gain: Pove\u0107anje te\u017Eine",4:"P\u0159\xEDr\u016Fstek hmotnosti: {1} {2}"
,5:"V\xE6gt\xF8gning: {1} {2}",0:"\xD8 Weight gain: {1} {2}",6:"\xD8 Gewichtstoename: {1} {2}"
,7:"\xD8 Juurdekasv: {1} {2}",8:"\xD8 Painon~nousu: {1} {2}",9:"\xD8 Prise de poids\xA0: {1} {2}"
,10:"\xD8 Zunahme: {1} {2}",11:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+"\u03B6\u03CE\u03BF\u03C5: {1} {2}"
,12:"S\xFAlyn\xF6veked\xE9s: {1} {2}",13:"Aumento di peso: {1} {2}",15:"Svara pieaugums: {1} {2}"
,26:"Svorio padid\u0117jimas: {1} {2}",16:"Gj.snittlig tilv. (1) (2)",17:"Przyrost wagi: {1} {2}"
,18:"Ganho de peso: {1} {2}",19:"Cre\u0219tere \xEEn greutate: {1} {2}",20:"\xD8 \u043F\u0440\u0438\u0432\u0435\u0441: {1} {2}"
,27:"Weight gain: pridobivanje te\u017Ee",21:"\xD8 Ganancia: {1} {2}",22:"Vikt\xF6kning: {1} {2}"
,23:"\xD8 A\u011F\u0131rl\u0131k Kazan\u0131m\u0131: {1} {2}",24:"\xD8 \u043F\u0440\u0438\u0440\u0456\u0441\u0442: {1} {2}"
};C.A5Q={1:"Prosje\u010Dna te\u017Eina \u017Eivotinje",2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0442\u0435\u0433\u043B\u043E \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",3:"\u5E73\u5747\u52D5\u7269\u9AD4\u91CD"
,25:"Prosje\u010Dna te\u017Eina \u017Eivotinja",4:"Pr\u016Fm\u011Brn\xE1 hmotnost zv\xED\u0159ete"
,5:"Gennemsnitlig dyrev\xE6gt",0:"Average animal weight",6:"gemiddeld diergewicht"
,7:"Keskmine looma kaal",8:"Elinten paino keskim\xE4\xE4rin",9:"Poids moyen des animaux"
,10:"Mittleres Tiergewicht",11:"\u039C\u03AD\u03C3\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1tlagos \xE1llats\xFAly",13:"Peso medio degli animali",15:"Vid\u0113jais dz\u012Bvnieka svars"
,26:"Vidutinis gyv\u016Bno svoris",16:"Gjennomsnittlig dyrevekt",17:"\u015Arednia waga zwierz\u0119cia"
,18:"Peso m\xE9dio dos animais",19:"Greutatea medie a animalelor",20:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Povpre\u010Dna te\u017Ea \u017Eivali",21:"Peso medio del animal",22:"Genomsnittlig djurvikt"
,23:"Ortalama Hayvan A\u011F\u0131rl\u0131\u011F\u0131",24:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0430\u0433\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Bh1={1:"Kopiranje u toku!\n\nOvaj proces mo\u017Ee trajati minutu ili du\u017Ee, "+
"molimo vas da budete strpljivi!",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0430\u043D\u0435!\n\n\u0432 "+
"\u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0446\u0435\u0441 \u043C\u043E\u0436\u0435 "+
"\u0434\u0430 \u043E\u0442\u043D\u0435\u043C\u0435 \u043C\u0438\u043D\u0443\u0442\u0430 "+
"\u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435, \u043C\u043E\u043B\u044F, "+
"\u0431\u044A\u0434\u0435\u0442\u0435 \u0442\u044A\u0440\u043F\u0435\u043B\u0438\u0432\u0438!"
,3:"\u6B63\u5728\u9032\u884C\u5099\u4EFD\uFF01\n\u6B64\u904E\u7A0B\u53EF\u80FD\u9700\u8981\u4E00\u5206\u9418\u6216\u66F4\u9577\u6642\u9593\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5019\uFF01"
,25:"Sigurnosna kopija u tijeku!\n\nOvaj postupak mo\u017Ee trajati minutu "+"ili du\u017Ee, molimo budite strpljivi!"
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
"tov\xE1bb tarthat, k\xE9rj\xFCk, legyen t\xFCrelemmel!",13:"Backup in corso!\n\nQuesto processo potrebbe richiedere un minuto o pi\xF9, "+
"per favore sii paziente!",15:"Dubl\u0113\u0161ana notiek!\n\n\u0160is process var aiz\u0146emt min\u016Bti "+
"vai ilg\u0101k, l\u016Bdzu, esiet paciet\u012Bgi!",26:"Atsargin\u0117 kopija vykdoma!\n\n\u0160is procesas gali u\u017Etrukti "+
"minut\u0119 ar ilgiau, pra\u0161ome kantriai palaukti!",16:"Sikkerhetskopiering p\xE5g\xE5r!\n\nDenne prosessen kan ta et minutt eller "+
"lenger, v\xE6r t\xE5lmodig!",17:"Kopia zapasowa w trakcie!\n\nTen proces mo\u017Ce zaj\u0105\u0107 minut\u0119 "+
"lub d\u0142u\u017Cej, prosz\u0119 o cierpliwo\u015B\u0107!",18:"Backup em andamento!\n\nEste processo pode levar um minuto ou mais, por "+
"favor, tenha paci\xEAncia!",19:"Backup \xEEn curs!\n\nAcest proces poate dura un minut sau mai mult, v\u0103 "+
"rug\u0103m s\u0103 ave\u021Bi r\u0103bdare!",20:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435!\n\u042D\u0442\u043E\u0442 "+
"\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u0435\u0442 "+"\u0437\u0430\u043D\u044F\u0442\u044C \u043C\u0438\u043D\u0443\u0442\u0443 "+
"\u0438\u043B\u0438 \u0434\u043E\u043B\u044C\u0448\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0431\u0443\u0434\u044C\u0442\u0435 \u0442\u0435\u0440\u043F\u0435\u043B\u0438\u0432\u044B!"
,27:"Varnostno kopiranje v teku!\n\nTa postopek lahko traja minuto ali dlje, "+"prosimo za potrpljenje!"
,21:"Copia de seguridad en curso!\n\nEste proceso puede tomar un minuto o m\xE1s, "+
"\xA1por favor ten paciencia!",22:"S\xE4kerhetskopiering p\xE5g\xE5r!\n\nDenna process kan ta en minut eller "+
"l\xE4ngre, var god ha t\xE5lamod!",23:"Yedekleme Devam Ediyor!\n\nBu s\xFCre\xE7 bir dakika veya daha fazla s\xFCrebilir. "+
"L\xFCtfen sab\u0131rl\u0131 olunuz!",24:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0440\u0438\u0432\u0430\u0454!\n\n\u0426\u0435\u0439 \u043F\u0440\u043E\u0446\u0435\u0441 "+
"\u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 \u0445\u0432\u0438\u043B\u0438\u043D\u0443 "+
"\u0430\u0431\u043E \u0431\u0456\u043B\u044C\u0448\u0435, \u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!"
};C.VO={1:"Barkod",2:"\u0411\u0430\u0440\u043A\u043E\u0434",3:"\u689D\u78BC",25:
"Barkod",4:"\u010C\xE1rov\xFD k\xF3d",5:"Stregkode",0:"Barcode",7:"Triipkood",9:
"Code \xE0 barres",11:"\u0393\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03CC\u03C2 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2"
,12:"Vonalk\xF3d",13:"Codice a barre",15:"Sv\u012Btrkods",26:"Br\u016Bk\u0161ninis kodas"
,16:"Strekkode",17:"Kod kreskowy",18:"C\xF3digo de barras",19:"Cod de bare",20:"\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434"
,27:"\u010Crtna koda",21:"C\xF3digo de barras",22:"Streckkod",23:"Barkod",24:"\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434"
};C.Basic={1:"osnovno",2:"\u041E\u0441\u043D\u043E\u0432\u0435\u043D",3:"\u57FA\u672C"
,25:"Osnovno",4:"Z\xE1klad",5:"Grundl\xE6ggende",0:"Basic",6:"Simpel",7:"Alg",8:
"Perustieto",9:"Simple",10:"Einfach",11:"\u0392\u03B1\u03C3\u03B9\u03BA\u03AC",12:
"Alap",13:"Basico",15:"Pamata",26:"Pagrindinis",16:"Grunnleggende",17:"Podstawowy"
,18:"B\xE1sico",19:"De baz\u0103",20:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439"
,27:"Osnovno",21:"B\xE1sico",22:"Grundl\xE4ggande",23:"Temel",24:"\u0411\u0430\u0437\u043E\u0432\u0438\u0439"
};C.Bh3={1:"Baterija \u0107e se isprazniti!",2:"\u0411\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 \u0435 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E "+
"\u0438\u0437\u0442\u043E\u0449\u0435\u043D\u0430!",3:"\u96FB\u6C60\u96FB\u91CF\u56B4\u91CD\u4E0D\u8DB3\uFF01"
,25:"Baterija je kriti\u010Dno prazna!",4:"Stav baterie p\u0159\xEDli\u0161 n\xEDzk\xFD"
,5:"Batteriet er kritisk lavt!",0:"Battery is critically low!",6:"Batterij is erg laag!"
,7:"Aku peagi t\xFChi!",8:"Akun varaus kriittisen alhainen!",9:"La batterie est dangereusement faible\xA0!"
,10:"Akku: niedriger Ladezustand!",11:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 "+
"\u03C0\u03AC\u03C1\u03B1 \u03C0\u03BF\u03BB\u03CD \u03B5\u03BE\u03B1\u03C3\u03B8\u03B5\u03BD\u03B7\u03BC\u03AD\u03BD\u03B7"
,12:"Az akkumul\xE1tor mer\xFCl\xE9se kritikus!",13:"La batteria \xE8 quasi scarica!"
,15:"Akumulatora l\u0101di\u0146\u0161 ir kritiski zems!",26:"Baterija yra kriti\u0161kai i\u0161sikrovusi!"
,16:"Batteriet er kritisk lavt",17:"Bateria jest krytycznie niska!",18:"A bateria est\xE1 criticamente baixa!"
,19:"Bateria este aproape desc\u0103rcat\u0103!",20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F: \u043D\u0438\u0437\u043A\u0438\u0439 "+
"\u0437\u0430\u0440\u044F\u0434!",27:"Baterija je skoraj prazna!",21:"\xA1Bater\xEDa muy baja!"
,22:"Batteriet \xE4r kritiskt l\xE5gt!",23:"Pil kritik d\xFCzeyde azald\u0131",24:
"\u041D\u0438\u0437\u044C\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434 "+"\u0431\u0430\u0442\u0430\u0440\u0435\u0457!"
};C.A5V={1:"Baterija je iskori\u0161tena!",2:"\u0411\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 \u0435 \u0438\u0437\u0442\u043E\u0449\u0435\u043D\u0430!"
,3:"\u96FB\u6C60\u96FB\u91CF\u8017\u76E1\uFF01",25:"Baterija je ispra\u017Enjena!"
,4:"Baterie je vybit\xE1",5:"Batteriet er udt\xF8mt!",0:"Battery is exhausted!",
6:"Batterij raakt uitgeput!",7:"Ahu t\xFChi!",8:"Akku on tyhj\xE4!",9:"La batterie est \xE9puis\xE9e\xA0!"
,10:"Akku ist ersch\xF6pft!",11:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03BE\u03B1\u03BD\u03C4\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5"
,12:"Az akkumul\xE1tor lemer\xFClt!",13:"La batteria \xE8 esaurita!",15:"Baterija ir izl\u0101d\u0113jusies!"
,26:"Baterija i\u0161sikrov\u0117!",16:"Batteriet er utladet",17:"Bateria jest wyczerpana!"
,18:"A bateria est\xE1 esgotada!",19:"Bateria este epuizat\u0103!",20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0440\u0430\u0437\u0440\u044F\u0436\u0435\u043D\u0430!"
,27:"Baterija je izpraznjena!",21:"\xA1Bater\xEDa descargada!",22:"Batteriet \xE4r urladdat!"
,23:"Pil t\xFCkendi!",24:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0440\u043E\u0437\u0440\u044F\u0434\u0436\u0435\u043D\u0430!"
};C.A5W={1:"Baterija: potrebno napuniti!",2:"\u0417\u0430\u0440\u044F\u0434\u0430 \u043D\u0430 \u0431\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 "+
"\u0435 \u043D\u0438\u0441\u044A\u043A!",3:"\u96FB\u6C60\u96FB\u91CF\u4F4E\uFF01"
,25:"Baterija je skoro prazna!",4:"Nabit\xED baterie je n\xEDzk\xE9!",5:"Batteriets opladning er lav!"
,0:"Charge of battery is low!",6:"Batterij is laag",7:"Aku tase madal!",8:"Akun varaus on alhainen!"
,9:"La batterie est faible\xA0!",10:"Akku: sehr niedriger Ladezustand!",11:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 "+
"\u03B5\u03BE\u03B1\u03C3\u03B8\u03B5\u03BD\u03B7\u03BC\u03AD\u03BD\u03B7!",12:"Az akkumul\xE1tor t\xF6lt\xF6tts\xE9ge alacsony!"
,13:"La carica della batteria \xE8 bassa!",15:"Akumulatora l\u0101di\u0146\u0161 ir zems!"
,26:"Baterijos \u012Fkrova yra \u017Eema!",16:"Batteriladning er lav",17:"Poziom na\u0142adowania baterii jest niski!"
,18:"A carga da bateria est\xE1 baixa!",19:"Nivelul bateriei este sc\u0103zut!",
20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F: \u043E\u0447\u0435\u043D\u044C "+
"\u043D\u0438\u0437\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434!",27:"Napolnjenost baterije je nizka!"
,21:"\xA1Bater\xEDa baja!",22:"Batteriets laddning \xE4r l\xE5g!",23:"Pilin \u015Farj\u0131 az!"
,24:"\u0414\u0443\u0436\u0435 \u043D\u0438\u0437\u044C\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0457!"};C.Bh5={1:"trenutno + ro\u0111enje"
,2:"\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u043E + \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u76EE\u524D\u7684+\u51FA\u751F",25:"Trenutni + ro\u0111enje",4:"Porodn\xED hmotnost aktu\xE1ln\xED"
,5:"Nuv\xE6rende + f\xF8dsel",0:"Current + birth",6:"Huidig+ Geboorte",7:"Praegune + s\xFCnd"
,8:"Nykyinen paino + syntym\xE4paino",9:"Actuel + naissance",10:"Aktuell + Geburt"
,11:"\u039A\u03B1\u03C4\u03B1\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03C1\u03AD\u03C7\u03BF\u03BD\u03C4\u03BF\u03C2"
,12:"Jelenlegi + sz\xFClet\xE9s",13:"Corrente + nascita",15:"pa\u0161reiz\u0113jais + dzim\u0161ana"
,26:"Dabartinis + gimimas",16:"N\xE5v\xE6rende + kalving",17:"Obecny + urodzenie"
,18:"Corrente + nascimento",19:"Curent + na\u0219tere",20:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435 + \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
,27:"Trenutni + rojstvo",21:"Actual + nacimiento",22:"Aktuell + f\xF6delse",23:"\u015Eu anki + Do\u011Fum"
,24:"\u041D\u0438\u043D\u0456\u0448\u043D\u0456\u0439 + \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A5X={1:"Datum ro\u0111enja obavezan",2:"\u0414\u0430\u0442\u0430\u0442\u0430 \u043D\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0430"
,3:"\u51FA\u751F\u65E5\u671F\u70BA\u5FC5\u586B",25:"Datum ro\u0111enja obavezan"
,4:"Datum narozen\xED je povinn\xE9.",5:"F\xF8dselsdato obligatorisk",0:"Birth date mandatory"
,6:"Geboorte datum moet aangegeven worden",7:"S\xFCnnikuup\xE4ev kohustuslik",8:
"Syntym\xE4aika pakollinen",9:"La date de naissance doit \xEAtre remplie",10:"Geburtsdatum muss angegeben werden"
,11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03AE",12:"Sz\xFClet\xE9si d\xE1tum k\xF6telez\u0151"
,13:"Data di nascita obbligatoria",15:"Dzim\u0161anas datums oblig\u0101ts",26:"Gimimo data privaloma"
,16:"F\xF8dselsdato obligatorisk",17:"Data urodzenia obowi\u0105zkowa",18:"Data de nascimento obrigat\xF3ria"
,19:"Data na\u0219terii obligatorie",20:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F "+
"\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430",27:"Datum rojstva obvezen"
,21:"Fecha de nacimiento obligatoria",22:"F\xF6delsedatum obligatoriskt",23:"Zorunlu Do\u011Fum Tarihi"
,24:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u043E\u0432\u0430"};C.Bh6={1:"lista ro\u0111enja"
,2:"\u0441\u043F\u0438\u0441\u044A\u043A \u0440\u0430\u0436\u0434\u0430\u043D\u0438\u044F"
,3:"\u51FA\u751F\u6E05\u55AE",25:"popis ro\u0111enih",4:"seznam narozen\xED",5:"f\xF8dselsliste"
,0:"birth list",6:"geboortelijst",7:"s\xFCnniloend",8:"syntym\xE4lista",9:"liste de naissance"
,10:"HI Tier",11:"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD"
,12:"sz\xFClet\xE9si lista",13:"lista nascita",15:"dzim\u0161anas saraksts",26:"gimimo s\u0105ra\u0161as"
,16:"f\xF8dselsliste",17:"lista narodzin",18:"lista de nascimento",19:"list\u0103 de na\u0219tere"
,20:"\u0441\u043F\u0438\u0441\u043E\u043A \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,27:"seznam rojstev",21:"Lista de nacimientos",22:"f\xF6delselista",23:"Do\u011Fum Listesi"
,24:"\u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bh7={1:"Obavijesti o ro\u0111enju su izbrisane nakon izvoza!",2:"\u0411\u0435\u043B\u0435\u0436\u043A\u0438\u0442\u0435 \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0441\u043B\u0435\u0434 "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435!",3:"\u51FA\u751F\u901A\u77E5\u5728\u532F\u51FA\u5F8C\u88AB\u522A\u9664\u4E86\uFF01"
,25:"Obavijesti o ro\u0111enju su izbrisane nakon izvoza!",4:"Ozn\xE1men\xED o narozen\xED byla smaz\xE1na po exportu!"
,5:"F\xF8dselsmeddelelser blev slettet efter eksport!",0:"Birth notices were deleted after export!"
,6:"Geboorte melding wordt verwijderd na data export",7:"S\xFCnniteated kustutati p\xE4rast eksportimist!"
,8:"Syntym\xE4ilmoitukset poistettiin viennin j\xE4lkeen!",9:"Les d\xE9clarations de naissance ont \xE9t\xE9 supprim\xE9es apr\xE8s l\'exportation\xA0!"
,10:"Geburtsmeldungen wurden nach Export gel\xF6scht!",11:"\u039F\u03B9 \u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE!"
,12:"A sz\xFClet\xE9si \xE9rtes\xEDt\xE9seket t\xF6r\xF6lt\xE9k az export\xE1l\xE1s "+
"ut\xE1n!",13:"Le notifiche di nascita sono state eliminate dopo l\'esportazione!"
,15:"Dzim\u0161anas pazi\u0146ojumi tika dz\u0113sti p\u0113c eksport\u0113\u0161anas!"
,26:"Gimimo prane\u0161imai buvo i\u0161trinti po eksporto!",16:"F\xF8dselsmeldinger ble slettet etter eksport!"
,17:"Og\u0142oszenia o narodzinach zosta\u0142y usuni\u0119te po eksporcie!",18:
"Os avisos de nascimento foram exclu\xEDdos ap\xF3s a exporta\xE7\xE3o!",19:"Anun\u021Burile de na\u0219tere au fost \u0219terse dup\u0103 export!"
,20:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u044B\u043B\u0438 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435 "+"\u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430!"
,27:"Obvestila o rojstvu so bila izbrisana po izvozu!",21:"\xA1Los avisos de nacimiento se eliminaron despu\xE9s de la exportaci\xF3n!"
,22:"F\xF6delsenotiser raderades efter exporten!",23:"\u0130hracattan sonra silinen do\u011Fum bildirimleri!"
,24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0431\u0443\u043B\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u043F\u0456\u0441\u043B\u044F "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443!"};C.KP={1:"te\u017Eina pri ro\u0111enju"
,2:"\u0422\u0435\u0433\u043B\u043E \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u9AD4\u91CD",25:"Te\u017Eina pri ro\u0111enju",4:"Porodn\xED hmotnost"
,5:"F\xF8dselsv\xE6gt",0:"Birth weight",6:"Geboortegewicht",7:"S\xFCnnikaal",8:"Syntym\xE4paino"
,9:"Poids de naissance",10:"Geburtsgewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si s\xFAly",13:"Peso alla nascita",15:"Dzim\u0161anas svars",26:
"Gimimo svoris",16:"F\xF8dselsvekt",17:"Waga urodzeniowa",18:"Peso ao nascer",19:
"Greutatea la na\u0219tere",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,27:"Porodna te\u017Ea",21:"Peso al nacer",22:"F\xF6delsevikt",23:"Do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.A5Y={1:"te\u017Eina uduplana nakon",2:"\u0422\u0435\u0433\u043B\u043E\u0442\u043E \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0441\u0435 \u0443\u0434\u0432\u043E\u0438 \u0441\u043B\u0435\u0434",3:"\u51FA\u751F\u9AD4\u91CD\u7FFB\u500D\u5F8C"
,25:"Te\u017Eina pri ro\u0111enju udvostru\u010Dena nakon",4:"Dvojn\xE1sobn\xE1 porodn\xED v\xE1ha po"
,5:"F\xF8dselsv\xE6gten fordoblet efter",0:"Birth weight doubled after",6:"Geboortegewicht verdubbeld na"
,7:"S\xFCnnikaal kahekordistus p\xE4rast",8:"Syntym\xE4paino kaksinkertaistunut j\xE4lkeen"
,9:"Le poids de naissance a doubl\xE9 apr\xE8s",10:"Geburtsgewicht verdoppelt nach"
,11:"\u0394\u03B9\u03C0\u03BB\u03B1\u03C3\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si s\xFAly megdupl\xE1z\xF3dott ut\xE1na",13:"Il peso alla nascita \xE8 raddoppiato dopo"
,15:"Dzim\u0161anas svars dubultoj\u0101s p\u0113c",26:"Gimimo svoris padvigub\u0117jo po"
,16:"F\xF8dselsvekt dobblet etter",17:"waga urodzeniowa podwojona po",18:"Peso ao nascer duplicado ap\xF3s"
,19:"Greutatea la na\u0219tere s-a dublat dup\u0103",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 "+
"\u0443\u0434\u0432\u043E\u0438\u043B\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
,27:"telesna te\u017Ea ob rojstvu se je podvojila po",21:"Peso al nacer duplicado despu\xE9s de"
,22:"F\xF6delsevikten f\xF6rdubblades efter",23:"\u0130kiye katlanan sonraki do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u043F\u043E\u0434\u0432\u043E\u0457\u043B\u0430\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
};C.Bh9={1:"na ro\u0111enju",2:"\u041F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u6642",25:"Pri ro\u0111enju",4:"Porodn\xED hmotnost",5:"Ved f\xF8dslen"
,0:"At birth",6:"Bij geboorte",7:"S\xFCndides",8:"Syntym\xE4ss\xE4",9:"\xE0 la naissance"
,10:"Bei Geburt",11:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B2\u03B1\u03C1\u03CE\u03BD \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9skor",13:"Alla nascita",15:"Piedzim\u0161anas br\u012Bd\u012B"
,26:"Gimimo metu",16:"Ved f\xF8dsel",17:"Przy narodzinach",18:"Ao nascer",19:"La na\u0219tere"
,20:"\u041F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",27:"Ob rojstvu"
,21:"Al nacer",22:"Vid f\xF6dseln",23:"Do\u011Fumda",24:"\u041F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.A5Z={1:"te\u017Eine pri ro\u0111enju",2:"\u0422\u0435\u0433\u043B\u0430 \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u9AD4\u91CD",25:"Te\u017Eine pri ro\u0111enju",4:"Porodn\xED v\xE1hy"
,5:"F\xF8dselsv\xE6gte",0:"Birth weights",6:"Geboortegewicht",7:"S\xFCnnikaalud"
,8:"Syntym\xE4~painot",9:"Poids de naissance",10:"Geburts~gewichte",11:"\u0392\u03AC\u03C1\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si s\xFAlyok",13:"Pesi alla nascita",15:"Dzim\u0161anas svari"
,26:"Gimimo svoriai",16:"F\xF8dselsvekter",17:"Masy urodzeniowe",18:"Pesos ao nascer"
,19:"Greut\u0103\u021Bi la na\u0219tere",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,27:"Te\u017Ee ob rojstvu",21:"Peso al nacer",22:"F\xF6delsevikter",23:"Do\u011Fum A\u011F\u0131rl\u0131klar\u0131"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.ACg={1:"Ro\u0111enja",2:"\u0420\u0430\u0436\u0434\u0430\u043D\u0438\u044F",3:
"\u51FA\u751F",25:"Ro\u0111enja",4:"Narozen\xED",5:"F\xF8dsler",0:"Births",6:"Geboortes"
,7:"S\xFCnnid",8:"Syntym\xE4t",9:"Naissances",10:"Geburten",11:"\u0393\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2"
,12:"Sz\xFClet\xE9sek",13:"Nascite",15:"Dzim\u0161anas",26:"Gimimai",16:"F\xF8dsler"
,17:"Urodzenia",18:"Nascimentos",19:"Na\u0219teri",20:"\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,27:"Rojstva",21:"Nacimientos",22:"F\xF6dslar",23:"Do\u011Fumlar",24:"\u041D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bh$={2:"\u0413\u043E\u0432\u0435\u0434\u0430",3:"\u725B",25:"Goveda",4:"dobytek"
,5:"Kv\xE6g",0:"Bovine/cattle",6:"Rund",7:"Veised",9:"Bovine",10:"Rind",11:"\u0392\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2"
,12:"Szarvasmarha",13:"Bovino",15:"Lopkop\u012Bba",26:"Karv\u0117s",16:"Bovine/storfe"
,17:"Byd\u0142o",18:"Bovino/gado",19:"Bovine/vite",20:"\u041A\u0420\u0421",27:"Govedo"
,21:"Bovino",22:"N\xF6tkreatur",23:"S\u0131\u011F\u0131r",24:"\u0411\u0438\u043A/\u0445\u0443\u0434\u043E\u0431\u0430"
};C.Breed={2:"\u041F\u043E\u0440\u043E\u0434\u0430",3:"\u54C1\u7A2E",25:"Uzgajati"
,4:"Plemeno",5:"Avle",0:"Breed",6:"Ras",7:"T\xF5ug",8:"Rotu",9:"Race",10:"Rasse"
,11:"\u03A1\u03AC\u03C4\u03C3\u03B1",12:"Fajta",13:"Razza",15:"\u0160\u0137irne"
,26:"Veisl\u0117",16:"Rase",17:"Rasa",18:"Ra\xE7a",19:"Ras\u0103",20:"\u041F\u043E\u0440\u043E\u0434\u0430"
,27:"Pasma",21:"Raza",22:"Ras",23:"Irk",24:"\u041F\u043E\u0440\u043E\u0434\u0430"
};C.A54={1:"Brightness",2:"\u042F\u0440\u043A\u043E\u0441\u0442",3:"\u4EAE\u5EA6"
,25:"Svjetlina zaslona",4:"Jas",5:"Sk\xE6rmens lysstyrke",0:"Display brightness"
,6:"Helderheid",7:"Ekraani heledus",8:"Kirkkaus",9:"Luminosit\xE9 de l\'\xE9cran"
,10:"Helligkeit Display",11:"\u03A6\u03C9\u03C4\u03B5\u03B9\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1"
,12:"K\xE9perny\u0151 f\xE9nyer\u0151",13:"Luminosit\xE0 del display",15:"Displeja spilgtums"
,26:"Ekrano ry\u0161kumas",16:"Lysstyrke",17:"Jasno\u015B\u0107 ekranu",18:"Brilho da tela"
,19:"Luminozitatea ecranului",20:"\u042F\u0440\u043A\u043E\u0441\u0442\u044C",27:
"Svetlost zaslona",21:"Brillo de la pantalla",22:"Sk\xE4rmens ljusstyrka",23:"Parlakl\u0131k"
,24:"\u042F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044C"};C.ACl={1:"Snimanje u velikim koli\u010Dinama"
,2:"\u041C\u0430\u0441\u043E\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435"
,3:"\u5927\u91CF\u9304\u88FD",25:"Snimanje u velikim koli\u010Dinama",4:"Hromadn\xE9 nahr\xE1v\xE1n\xED"
,5:"Masseoptagelse",0:"Bulk recording",6:"Massa opname",7:"Hulgisalvestus",8:"Joukkotallennus"
,9:"Acc\xE8s en masse",10:"Massenzugang",11:"\u039C\u03B1\u03B6\u03B9\u03BA\u03AE \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE"
,12:"T\xF6meges felv\xE9tel",13:"Registrazione in blocco",15:"Apjoma ierakst\u012B\u0161ana"
,26:"Didmenin\u0117 \u012Fra\u0161in\u0117jimas",16:"Masseopptak",17:"Nagrywanie zbiorcze"
,18:"Grava\xE7\xE3o em massa",19:"\xCEnregistrare \xEEn mas\u0103",20:"\u041C\u0430\u0441\u0441\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C"
,27:"Mno\u017Ei\u010Dno snemanje",21:"Registro a granel",22:"Bulkinspelning",23:
"Toplu Kay\u0131tlar",24:"\u041C\u0430\u0441\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441"
};C.A55={1:"CSV izvoz",2:"CSV \u0435\u043A\u0441\u043F\u043E\u0440\u0442",3:"CSV\u532F\u51FA"
,25:"CSV izvoz",4:"export CSV",5:"CSV-eksport",0:"CSV export",7:"CSV eksport",8:
"CSV-vienti",9:"Export CSV",10:"CSV-Export",11:"\u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE CSV"
,12:"CSV export\xE1l\xE1s",13:"Esportazione CSV",15:"CSV eksports",26:"CSV eksportas"
,16:"CSV-eksport",17:"eksport CSV",18:"Exporta\xE7\xE3o de CSV",19:"Export CSV",
20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 CSV",27:"Izvoz CSV",21:"Exportar CSV"
,22:"CSV-export",23:"CSV d\u0131\u015Fa aktar",24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 CSV"
};C.Bib={1:"Izvoz CSV datoteke je u tijeku!\n\nOvaj proces mo\u017Ee potrajati nekoliko "+
"sekundi, molimo budite strpljivi!",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 CSV!\n\n \u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0446\u0435\u0441 "+
"\u043C\u043E\u0436\u0435 \u0434\u0430 \u043E\u0442\u043D\u0435\u043C\u0435 "+"\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435~\u043A\u0443\u043D~\u0434\u0438, "+
"\u043C\u043E\u043B\u044F, \u0431\u044A\u0434\u0435\u0442\u0435 \u0442\u044A\u0440\u043F\u0435\u043B\u0438\u0432\u0438!"
,3:"CSV \u532F\u51FA\u9032\u884C\u4E2D\uFF01\n\u6B64\u904E\u7A0B\u53EF\u80FD\u9700\u8981\u5E7E\u79D2\u9418\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\uFF01"
,25:"Izvoz CSV-a u tijeku!\n\nOvaj postupak mo\u017Ee potrajati nekoliko sekundi, "+
"molimo budite strpljivi!",4:"Prob\xEDh\xE1 export CSV!\n\nTento proces m\u016F\u017Ee trvat n\u011Bkolik "+
"sekund, pros\xEDm, bu\u010Fte trp\u011Bliv\xED!",5:"CSV-eksport er i gang!\n\nDenne proces kan tage nogle sekunder, v\xE6r "+
"venlig at v\xE6re t\xE5lmodig!",0:"CSV export in progress!\n\nThis process may take a few se~conds, please "+
"be patient!",6:"CSV-export bezig!\n\nDit proces kan enkele seconden duren, graag geduld!"
,7:"CSV eksportimine k\xE4ib!\n\nSee protsess v\xF5ib v\xF5tta m\xF5ned sekundid, "+
"palun ole kannatlik!",9:"Exportation CSV en cours\xA0!\n\nCe processus peut prendre quelques secondes, "+
"veuillez patienter\xA0!",10:"CSV-Datei wird erstellt!\n\nDieser Vorgang kann einige Se~kunden dauern, "+
"etwas Geduld bitte!",11:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE CSV \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7!\n\n\u0397 "+
"\u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03B1\u03C5\u03C4\u03AE "+
"\u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B4\u03B9\u03B1\u03C1\u03BA\u03AD\u03C3\u03B5\u03B9 "+
"\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03BA\u03AC\u03BD\u03C4\u03B5 "+
"\u03C5\u03C0\u03BF\u03BC\u03BF\u03BD\u03AE!",12:"CSV export\xE1l\xE1s folyamatban!\n\nEz a folyamat n\xE9h\xE1ny m\xE1sodpercet "+
"ig\xE9nybe vehet, k\xE9rj\xFCk, legyen t\xFCrelemmel!",13:"Esportazione CSV in corso!\n\nQuesto processo potrebbe richiedere alcuni "+
"secondi, per favore sii paziente!",15:"CSV eksports notiek!\n\n\u0160is process var aiz\u0146emt da\u017Eas sekundes, "+
"l\u016Bdzu, esiet paciet\u012Bgi!",26:"CSV eksportas vyksta!\n\n\u0160is procesas gali u\u017Etrukti kelet\u0105 "+
"sekund\u017Ei\u0173, pra\u0161ome palaukti!",16:"CSV-eksport p\xE5g\xE5r!\n\nDenne prosessen kan ta noen sekunder, vennligst "+
"v\xE6r t\xE5lmodig!",17:"Eksport CSV w trakcie!\n\nTen proces mo\u017Ce zaj\u0105\u0107 kilka sekund, "+
"prosz\u0119 o cierpliwo\u015B\u0107!",18:"Exporta\xE7\xE3o de CSV em progresso!\n\nEste processo pode levar alguns "+
"segundos, por favor, tenha paci\xEAncia!",19:"Exportul CSV este \xEEn desf\u0103\u0219urare!\n\nAcest proces poate dura "+
"c\xE2teva secunde, v\u0103 rug\u0103m s\u0103 ave\u021Bi r\u0103bdare!",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 CSV \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435!\n\n\u042D\u0442\u043E\u0442 "+
"\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u0435\u0442 "+"\u0437\u0430\u043D\u044F\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E "+
"\u0441\u0435\u043A\u0443\u043D\u0434, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435!",27:"Izvoz CSV v teku!\n\nTa postopek lahko traja nekaj sekund, prosimo, bodite "+
"potrpe\u017Eljivi!",22:"CSV-export p\xE5g\xE5r!\n\nDenna process kan ta n\xE5gra sekunder, var "+
"god ha t\xE5lamod!",23:"CSV d\u0131\u015Fa aktarma i\u015Flemi devam ediyor!\n\nBu i\u015Flem "+
"birka\xE7 saniye s\xFCrebilir, l\xFCtfen sab\u0131rl\u0131 olun!",24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 CSV \u0442\u0440\u0438\u0432\u0430\u0454!\n\n\u0426\u0435\u0439 "+
"\u043F\u0440\u043E\u0446\u0435\u0441 \u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 "+
"\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434, "+"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!"
};C.Bic={1:"tele",2:"\u0422\u0435\u043B\u0435",3:"\u5C0F\u725B",25:"Tele",4:"Telec"
,5:"Kalv",0:"Calf",6:"Kalf",7:"Vasikas",8:"Lehm\xE4vasikka",9:"Veau",10:"Kalb",11:
"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9",12:"Borj\xFA",13:"Vitello",15:"Te\u013C\u0161"
,26:"Ver\u0161elis",16:"Kalv",17:"Ciel\u0119",18:"Bezerra",19:"Vitel",20:"\u0422\u0435\u043B\u0451\u043D\u043E\u043A"
,27:"Teli\u010Dek",21:"Ternero",22:"Kalv",23:"Buza\u011F\u0131",24:"\u0422\u0435\u043B\u044F"
};C.ANs={1:"gubitak teladi",2:"\u0423\u043C\u0440\u0435\u043B\u0438",3:"\u5C0F\u725B\u640D\u5931"
,25:"Gubici teladi",4:"Ztr\xE1ty telat",5:"Kalvetab",0:"Calf losses",6:"Calf Losses"
,7:"Surnud vasikad",8:"Vasikan menetykset",9:"Pertes des veaux",10:"K\xE4lber~verluste"
,11:"\u0391\u03C0\u03CE\u03BB\u03B5\u03B9\u03B5\u03C2 \u03BC\u03CC\u03C3\u03C7\u03C9\u03BD"
,12:"Borj\xFA vesztes\xE9gek",13:"Perdite di vitelli",15:"Te\u013Cu zudumi",26:"Ver\u0161i\u0173 nuostoliai"
,16:"D\xF8de kalver",17:"Straty ciel\u0105t",18:"Perdas de bezerros",19:"Pierderi de vi\u021Bei"
,20:"\u041F\u043E\u0442\u0435\u0440\u0438 \u0442\u0435\u043B\u044F\u0442",27:"Izgube telet"
,21:"Baviera",22:"Kalvf\xF6rluster",23:"Buza\u011F\u0131 Kay\u0131plar\u0131",24:
"\u0412\u0442\u0440\u0430\u0442\u0438 \u0442\u0435\u043B\u044F\u0442"};C.ANt={1:
"tele",2:"\u0442\u0435\u043B\u0435",3:"\u5C0F\u725B",25:"tele",4:"Tele",5:"kalv"
,0:"calf",6:"kalf",7:"Vasikas",8:"Lehm\xE4vasikka",9:"veau",10:"Kalb",11:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9"
,12:"borj\xFA",13:"vitello",15:"te\u013C\u0161",26:"ver\u0161is",16:"Kalv",17:"ciel\u0119"
,18:"bezerro",19:"vi\u021Bel",20:"\u0422\u0435\u043B\u0451\u043D\u043E\u043A",27:
"telec",21:"ternero",22:"kalv",23:"Buza\u011F\u0131",24:"\u0422\u0435\u043B\u044F"
};C.ANu={1:"telad",2:"\u0442\u0435\u043B\u0435\u0442\u0430",3:"\u72A2\u725B",25:
"telad",4:"telata",5:"kalve",0:"calves",6:"kalveren",7:"Vasikad",8:"Vasikat",9:"veaux"
,10:"K\xE4lber",11:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9\u03B1",12:"borj\xFAk"
,13:"vitelli",15:"te\u013Ci",26:"ver\u0161eliai",16:"kalver",17:"ciel\u0119ta",18:
"bezerros",19:"vi\u021Bei",20:"\u0422\u0435\u043B\u044F\u0442\u0430",27:"teleta"
,21:"terneros",22:"kalvar",23:"Buza\u011F\u0131lar",24:"\u0422\u0435\u043B\u044F\u0442\u0430"
};C.Calving={1:"odvikavanje",2:"\u041E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,3:"\u5206\u5A29",25:"Teljenje",4:"Tel\u011Bn\xED",5:"K\xE6lvning",0:"Calving",6:
"Kalving",7:"Poegimine",8:"Poikiminen",9:"V\xEAlage",10:"Abkalbung",11:"\u03A4\u03BF\u03BA\u03B5\u03C4\u03CC\u03C2"
,12:"Borjaz\xE1s",13:"Parto",15:"Tel\u0113\u0161an\u0101",26:"Ver\u0161iavimasis"
,16:"Kalving",17:"Ciel\u0119 si\u0119",18:"Desmame",19:"F\u0103tare",20:"\u041E\u0442\u0451\u043B"
,27:"Teljenje",21:"Parto",22:"Kalvning",23:"Buza\u011F\u0131lama",24:"\u041E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.A56={1:"datum telenja",2:"\u0414\u0430\u0442\u0430 \u043D\u0430 \u043E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,3:"\u5206\u5A29\u65E5\u671F",25:"Datum teljenja",4:"Datum telata",5:"K\xE6lvningsdato"
,0:"Calving date",6:"Kalf datum",7:"Poegimise kuup\xE4ev",8:"Poikimis~p\xE4iv\xE4"
,9:"Date de v\xEAlage",10:"Letzte Kalbung",11:"\u0397\u03BC/\u03BD\u03B9\u03B1 \u03C4\u03BF\u03BA\u03B5\u03C4\u03BF\u03CD"
,12:"Ell\xE9si id\u0151punkt",13:"Data del parto",15:"Tel\u0161anas datums",26:"Ver\u0161iavimosi data"
,16:"Kalvings dato",17:"Data wycielenia",18:"Data de nascimento (do bezerro)",19:
"Data f\u0103t\u0103rii",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u0442\u0451\u043B"
,27:"Datum telitve",21:"Fecha de parto",22:"Kalvningsdatum",23:"Buza\u011F\u0131lama G\xFCn\xFC"
,24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.AgN={1:"tok telenja",2:"\u041B\u0435\u043A\u043E\u0442\u0430 \u043D\u0430 \u043E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,3:"\u6613\u5206\u5A29",25:"Jednostavnost teljenja",4:"Snadn\xE9 otelen\xED",5:"K\xE6lvningslethed"
,0:"Calving ease",6:"Afkalfverloop",7:"Poegimise raskus",8:"Poikima~vaikeus",9:"D\xE9roulement du v\xEAlage"
,10:"Geburts~verlauf",11:"\u0395\u03C5\u03BA\u03BF\u03BB\u03AF\u03B1 \u03C4\u03BF\u03BA\u03B5\u03C4\u03BF\u03CD"
,12:"Ell\xE9si k\xF6nny\u0171s\xE9g",13:"Facilit\xE0 di parto",15:"Dzemd\u012Bbu vieglums"
,26:"Ver\u0161iavimosi lengvumas",16:"Lett kalving",17:"\u0141atwo\u015B\u0107 ocielenia"
,18:"Facilidade de parto",19:"U\u0219urin\u021Ba f\u0103t\u0103rii",20:"\u041B\u0451\u0433\u043A\u043E\u0441\u0442\u044C \u043E\u0442\u0451\u043B\u0430"
,27:"La\u017Eje teljenje",21:"Facilidad de parto",22:"Kalvningsf\xF6rm\xE5ga",23:
"Do\u011Fum kolayl\u0131\u011F\u0131",24:"\u041B\u0435\u0433\u043A\u0456\u0441\u0442\u044C \u043E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.AmH={1:"odustani",2:"\u041E\u0442\u043A\u0430\u0437",3:"\u53D6\u6D88",25:"Otkazati"
,4:"Zru\u0161it",5:"Aflys",0:"Cancel",6:"Afbreken",7:"T\xFChista",8:"Poista",9:"Annuler"
,10:"Abbrechen",11:"\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",12:"Lemond",13:"Annulla"
,15:"Atcelt",26:"At\u0161aukti",16:"Avbryt",17:"Anuluj",18:"Cancelar",19:"Anula\u021Bi"
,20:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",27:"Prekli\u010Di",21:"Cancelar"
,22:"Avbryt",23:"\u0130ptal",24:"\u0417\u0430\u043A\u0440\u0438\u0442\u0438"};C.
Bif={1:"punja\u010D",2:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440 \u0437\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u5145\u96FB\u63A7\u5236\u5668",25:"Regulator punjenja",4:"Regul\xE1tor nab\xEDjen\xED"
,5:"Laderegulator",0:"Charge controller",6:"laadregelaar",7:"Laadige kontrollseadet"
,8:"Latauss\xE4\xE4din",9:"Contr\xF4le de chargeur",10:"Laderegler",11:"\u0395\u03BB\u03B5\u03B3\u03BA\u03C4\u03AE\u03C2 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2"
,12:"T\xF6lt\xE9svez\xE9rl\u0151",13:"Regolatore di carica",15:"L\u0101d\u0113t\u0101ja kontrolieris"
,26:"\u012Ekrovos valdiklis",16:"Ladekontroller",17:"Regulator \u0142adowania",18:
"Controlador de carga",19:"Controler de \xEEnc\u0103rcare",20:"\u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 "+
"\u0437\u0430\u0440\u044F\u0434\u043D\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,27:"Polnilni regulator",21:"Laderegler",22:"Laddningsregulator",23:"\u015Earj Denetleyici"
,24:"\u0421\u0442\u0430\u0431\u0456\u043B\u0456\u0437\u0430\u0442\u043E\u0440 "+
"\u0437\u0430\u0440\u044F\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.OH={1:"punjenje u toku",2:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441 \u043D\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u6B63\u5728\u5145\u96FB",25:"Punjenje u tijeku",4:"Nab\xEDjen\xED prob\xEDh\xE1"
,5:"Opladning i gang",0:"Charging in progress",6:"Batterij word geladen",7:"Laeb"
,8:"Lataus k\xE4ynniss\xE4",9:"La batterie est en charge.",10:"Akku wird geladen"
,11:"\u0394\u03B9\u03B5\u03BE\u03AC\u03B3\u03B5\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7"
,12:"T\xF6lt\xE9s folyamatban",13:"Carica in corso",15:"Iekrau\u0161ana notiek",
26:"\u012Ekrovimas vyksta",16:"Lading p\xE5g\xE5r",17:"\u0141adowanie w toku",18:
"Carregamento em andamento",19:"\xCEnc\u0103rcare \xEEn curs",20:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F"
,27:"Polnjenje v teku",21:"Cargando bater\xEDa",22:"Laddning p\xE5g\xE5r",23:"\u015Earj Devam Ediyor"
,24:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0434\u0436\u0430\u0454\u0442\u044C\u0441\u044F"
};C.A59={1:"provjerite driver aparata",2:"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u0442\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0438\u0442\u0435 "+
"\u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E"
,3:"\u6AA2\u67E5\u8A2D\u5099\u9A45\u52D5\u7A0B\u5F0F",25:"Provjerite upravlja\u010Dke programe ure\u0111aja"
,4:"Zkontrolujte ovlada\u010De za\u0159\xEDzen\xED.",5:"Tjek enhedsdrivere",0:"Check device drivers"
,6:"Controleer apparaatstuurprogramma\'s",7:"Kontrollige seadme draivereid",8:"Tarkista laiteajurit"
,9:"Test pilote du dispositif",10:"Pr\xFCfung Ger\xE4tetreiber",11:"\u0395\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03BF\u03B4\u03B7\u03B3\u03BF\u03CD\u03C2 "+
"\u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2",12:"Ellen\u0151rizd az eszk\xF6zilleszt\u0151ket"
,13:"Controlla i driver del dispositivo",15:"P\u0101rbaudiet ier\u012Bces draiverus"
,26:"Patikrinkite \u012Frenginio tvarkykles",16:"Kontroller enhetsdrivere",17:"Sprawd\u017A sterowniki urz\u0105dzenia"
,18:"Verificar drivers de dispositivo",19:"Verific\u0103 driverele dispozitivului"
,20:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u043E\u0432"
,27:"Preveri gonilnike naprave",21:"Verificar controladores del dispositivo",22:
"Kontrollera enhetsdrivrutiner",23:"Ayg\u0131t S\xFCr\xFCc\xFClerini Kontrol Edin"
,24:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0456\u0432"
};C.ANx={1:"odabir aktivnosti",2:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,3:"\u9078\u64C7\u52D5\u4F5C",25:"Odaberi radnju",4:"Vyberte akci",5:"V\xE6lg handling"
,0:"Choose action",6:"Actie kiezen",7:"Vali tegevus",8:"Valitse toiminto",9:"S\xE9lectionnez action"
,10:"Aktion ausw\xE4hlen",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1"
,12:"V\xE1lassz cselekv\xE9st",13:"Scegli azione",15:"Izv\u0113l\u0113ties darb\u012Bbu"
,26:"Pasirinkti veiksm\u0105",16:"Velg handling",17:"Wybierz dzia\u0142anie",18:
"Escolha a\xE7\xE3o",19:"Alege\u021Bi ac\u021Biunea",20:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,27:"Izberi dejanje",21:"Seleccionar acci\xF3n",22:"V\xE4lj handling",23:"Eylem Se\xE7in"
,24:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0434\u0456\u044E"};C.Bih={1:"odaberite sl aktivnost"
,2:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",3:"\u9078\u64C7\u4E0B\u4E00\u6B65\u884C\u52D5"
,25:"Odaberite sljede\u0107u radnju",4:"Vyberte dal\u0161\xED akci.",5:"V\xE6lg n\xE6ste handling"
,0:"Choose next action",6:"Kies volgende actie",7:"Vali j\xE4rgmine tegevus",8:"Valitse seuraava toiminto"
,9:"Action suivante",10:"N\xE4chste Aktion",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 "+
"\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",12:"V\xE1lassz k\xF6vetkez\u0151 l\xE9p\xE9st"
,13:"Scegli la prossima azione",15:"Izv\u0113lieties n\u0101kamo darb\u012Bbu",26:
"Pasirinkite kit\u0105 veiksm\u0105",16:"Velg neste handling",17:"Wybierz nast\u0119pne dzia\u0142anie"
,18:"Escolha a pr\xF3xima a\xE7\xE3o",19:"Alege\u021Bi urm\u0103toarea ac\u021Biune"
,20:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,27:"Izberi naslednje dejanje",21:"Siguiente acci\xF3n",22:"V\xE4lj n\xE4sta \xE5tg\xE4rd"
,23:"Bir Sonraki Eylemi Se\xE7in",24:"\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0456\u044F"
};C.A5_={1:"Papci i zglobovi",2:"\u041A\u043E\u043F\u0438\u0442\u0430 \u0438 \u043A\u0440\u0430\u0439\u043D\u0438\u0446\u0438"
,3:"\u722A\u5B50\u548C\u80A2\u9AD4",25:"Kand\u017Ee i udovi",4:"Dr\xE1py a kon\u010Detiny"
,5:"Kl\xF8er og lemmer",0:"Claws and limbs",6:"klauwen en poten",7:"S\xF5rad ja j\xE4semed"
,8:"Sorkat ja jalat",9:"Griffes et membres",10:"Klauen und Gliedma\xDFen",11:"\u039D\u03CD\u03C7\u03B9\u03B1 \u03BA\u03B1\u03B9 \u03AC\u03BA\u03C1\u03B1."
,12:"Karmok \xE9s v\xE9gtagok",13:"Artigli e arti",15:"Nagi un ekstremit\u0101tes"
,26:"Nagai ir gal\u016Bn\u0117s",16:"Klauver og Haser",17:"Szpony i ko\u0144czyny"
,18:"Garras e membros",19:"Gheare \u0219i membre",20:"\u041A\u043E\u043F\u044B\u0442\u0430 \u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
,27:"Kremplji in okon\u010Dine",21:"Pezu\xF1as y extremidades",22:"Klor och lemmar"
,23:"Pen\xE7eler ve Uzuvlar",24:"\u041A\u043E\u043F\u0438\u0442\u0430 \u0442\u0430 \u043A\u0456\u043D\u0446\u0456\u0432\u043A\u0438"
};C.A5$={1:"poni\u0161ti alarma",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0430\u043B\u0430\u0440\u043C\u0430"
,3:"\u6E05\u9664\u8B66\u5831",25:"Isklju\u010Di alarm",4:"Vyma\u017E alarm",5:"Deaktiver alarm"
,0:"Clear alarm",6:"Alarm terug zetten",7:"T\xFChista hoiatus",8:"Tyhjenn\xE4 h\xE4lytykset"
,9:"R\xE9initialisation de l\u2019alarme",10:"Alarm zur\xFCcksetzen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD"
,12:"Riaszt\xE1s t\xF6rl\xE9se",13:"Disattiva allarme",15:"Izdz\u0113st trauksmes signalu"
,26:"I\u0161valyti signal\u0105",16:"Fjern alarmen",17:"Wyczy\u015B\u0107 alarm"
,18:"Desativar alarme",19:"Dezactiveaz\u0103 alarma",20:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0438\u0433\u043D\u0430\u043B "+
"\u0442\u0440\u0435\u0432\u043E\u0433\u0438",27:"Izklju\u010Di alarm",21:"Restablecer alarma"
,22:"Rensa larm",23:"Alarm\u0131 Temizle",24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0441\u0438\u0433\u043D\u0430\u043B "+
"\u0442\u0440\u0438\u0432\u043E\u0433\u0438"};C.A6a={1:"Obri\u0161i sve obavijesti o ro\u0111enjima"
,2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0431\u0435\u043B\u0435\u0436\u043A\u0438 \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u6E05\u9664\u6240\u6709\u51FA\u751F\u901A\u77E5",25:"Obri\u0161i sve obavijesti o ro\u0111enju"
,4:"Vy\u010Distit v\u0161echna ozn\xE1men\xED o narozen\xED",5:"Ryd alle f\xF8dselsannoncer"
,0:"Clear all birth notices",6:"Verwijder alle geboortemeldingen",7:"T\xFChista k\xF5ik s\xFCnniteavitused"
,8:"Tyhjenn\xE4 kaikki syntym\xE4ilmoitukset",9:"Supprimer toutes les d\xE9clarations de naissances."
,10:"Alle Meldungen l\xF6schen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD",12:"T\xF6r\xF6lj\xFCk az \xF6sszes sz\xFClet\xE9si \xE9rtes\xEDt\xE9st"
,13:"Cancella tutti gli annunci di nascita",15:"Izdz\u0113siet visus dzim\u0161anas pazi\u0146ojumus"
,26:"I\u0161valyti visas gimimo prane\u0161im\u0173 \u017Einutes.",16:"Fjern alle f\xF8dselsmeldinger"
,17:"Usu\u0144 wszystkie og\u0142oszenia o narodzinach",18:"Limpar todos os avisos de nascimento"
,19:"\u0218terge toate anun\u021Burile de na\u0219tere",20:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445",27:"Po\u010Distite vsa obvestila o rojstvu"
,21:"Borrar todas las notifi~caciones de nacimiento",22:"Rensa alla f\xF6delseannonser"
,23:"T\xFCm Do\u011Fum Kay\u0131tlar\u0131n\u0131 Temizle",24:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A6b={1:"Obri\u0161i sve obavijesti o kupovini",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0431\u0435\u043B\u0435\u0436\u043A\u0438 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430"
,3:"\u6E05\u9664\u6240\u6709\u8CFC\u8CB7\u901A\u77E5",25:"Obri\u0161i sve obavijesti o kupnji"
,4:"Vy\u010Distit v\u0161echna ozn\xE1men\xED o n\xE1kupu",5:"Ryd alle k\xF8bsmeddelelser"
,0:"Clear all purchase notices",6:"Verwijder alle meldingen",7:"Kustuta k\xF5ik ostuteated"
,8:"Tyhjenn\xE4 kaikki ostoilmoitukset",9:"Supprimer tous les messages",10:"Alle Meldungen l\xF6schen"
,11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B5 \u03CC\u03BB\u03B5\u03C2 "+
"\u03C4\u03B9\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2",12:"T\xF6r\xF6lj minden v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9st"
,13:"Elimina tutti gli avvisi di acquisto",15:"Izdz\u0113st visus pirkumu pazi\u0146ojumus"
,26:"I\u0161valyti visus pirkimo prane\u0161imus",16:"Fjern alle kj\xF8psvarsler"
,17:"Wyczy\u015B\u0107 wszystkie powiadomienia o zakupach.",18:"Limpar todos os avisos de compra"
,19:"\u0218terge toate notific\u0103rile de cump\u0103r\u0103turi",20:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u0445",27:"Po\u010Disti vsa obvestila o nakupih"
,21:"Borrar todos los avisos de compra",22:"Rensa alla k\xF6paviseringar",23:"T\xFCm Sat\u0131n Alma Kay\u0131tlar\u0131n\u0131 Temizle"
,24:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438"};C.ACt={1:"Jasna obavijest o ro\u0111enju"
,2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0431\u0435\u043B\u0435\u0436\u043A\u0430 "+
" \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435",3:"\u51FA\u751F\u901A\u77E5\u660E\u78BA"
,25:"Jasna obavijest o ro\u0111enju",4:"Jasn\xE1 ozn\xE1men\xED narozen\xED",5:"Klar meddelelse om f\xF8dsel"
,0:"Clear notice of birth",6:"Verwijder geboortemelding",7:"T\xFChista s\xFCnni teavitus"
,8:"Tyhjenn\xE4 ilmoitus syntym\xE4st\xE4",9:"Supprimer la d\xE9claration de naissance"
,10:"Geburtsmeldung l\xF6schen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03C2",12:"Sz\xFClet\xE9si \xE9rtes\xEDt\xE9s"
,13:"Notifica chiara di nascita",15:"Skaidrs pazi\u0146ojums par dzim\u0161anu",
26:"Ai\u0161kus gimimo prane\u0161imas",16:"Tydelig f\xF8dselsmelding",17:"Jasne zawiadomienie o narodzinach"
,18:"Aviso claro de nascimento",19:"Notificare clar\u0103 a na\u0219terii",20:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",27:"Jasno obvestilo o rojstvu"
,21:"Borrar notificaci\xF3n de nacimiento",22:"Tydlig f\xF6delseanm\xE4lan",23:"T\xFCm Do\u011Fumlar\u0131 Temizle"
,24:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.ACu={1:"poni\u0161ti filtere",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0444\u0438\u043B\u0442\u044A\u0440"
,3:"\u6E05\u9664\u7BE9\u9078",25:"O\u010Disti filter",4:"Vyma\u017E filter",5:"Ryd filter"
,0:"Clear filter",6:"Filter terug zetten",7:"Puhasta filter",8:"Tyhjenn\xE4 suodatus"
,9:"R\xE9initialisation du filtre",10:"Filter zur\xFCcksetzen",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C6\u03AF\u03BB\u03C4\u03C1\u03BF\u03C5"
,12:"Sz\u0171r\u0151 t\xF6rl\xE9se",13:"Filtro chiaro",15:"Not\u012Br\u012Bt filtru"
,26:"I\u0161valyti filtr\u0105",16:"T\xF8m filter",17:"Wyczy\u015B\u0107 filtr",
18:"Filtro limpo",19:"Filtru clar",20:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 "+
"\u0444\u0438\u043B\u044C\u0440\u0430",27:"Po\u010Disti filter",21:"Restablecer filtro"
,22:"Rensa filter",23:"Filtreyi Temizle",24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0444\u0456\u043B\u044C\u0442\u0440\u0443"};C.ACv={1:"Jasna obavijest o kupovini"
,2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0431\u0435\u043B\u0435\u0436\u043A\u0430 "+
" \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430",3:"\u8CFC\u8CB7\u660E\u78BA\u901A\u77E5"
,25:"Jasna obavijest o kupnji",4:"Jasn\xE1 informace o n\xE1kupu",5:"Klar k\xF8bsmeddelelse"
,0:"Clear notice of purchase",6:"Verwijder aankoopmelding",7:"Selge ostuteade",8:
"Tyhjenn\xE4 ostoilmoitus",9:"Supprimer le donn\xE9 d\'achat",10:"Zugangsmeldung l\xF6schen"
,11:"\u03A3\u03B1\u03C6\u03AE\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2",12:"Egy\xE9rtelm\u0171 v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9s"
,13:"Avviso chiaro di acquisto",15:"Skaidrs pirkuma pazi\u0146ojums",26:"Ai\u0161kus pirkimo prane\u0161imas"
,16:"Klar kj\xF8psmelding",17:"Jasne powiadomienie o zakupie",18:"Aviso claro de compra"
,19:"Notificare clar\u0103 a achizi\u021Biei",20:"\u0427\u0451\u0442\u043A\u043E\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435",27:"Jasno obvestilo o nakupu"
,21:"Borrar aviso de compra",22:"Tydligt k\xF6pmeddelande",23:"Satun alma kay\u0131d\u0131n\u0131 temizle"
,24:"\u0427\u0456\u0442\u043A\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443"};C.A6c={1:"Zatvranje farme"
,2:"\u0417\u0430\u043A\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0430"
,3:"\u8FB2\u5834\u95DC\u9589",25:"Zatvaranje farme",4:"Uzav\u0159en\xED farmy",5:
"Lukning af g\xE5rd",0:"Closure of farm",6:"Sluit het bedrijf",7:"Farmi sulgemine"
,8:"Maatilan sulkeminen",9:"Fermeture de l\u2019exploitation",10:"Abgang des Betriebs"
,11:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03C6\u03AC\u03C1\u03BC\u03B1\u03C2"
,12:"Farm bez\xE1r\xE1sa",13:"Chiusura della fattoria",15:"Lauksaimniec\u012Bbas saimniec\u012Bbas sl\u0113g\u0161ana"
,26:"U\u017Edarymas \u016Bkio",16:"G\xE5rden legges ned",17:"Zamkni\u0119cie gospodarstwa"
,18:"Encerramento da fazenda",19:"\xCEnchiderea fermei",20:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0444\u0435\u0440\u043C\u044B"
,27:"Zaprtje kmetije",21:"Borrar notificac. marcadas",22:"St\xE4ngning av g\xE5rd"
,23:"\xC7iftlik kapan\u0131\u015F\u0131",24:"\u0417\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u0444\u0435\u0440\u043C\u0438"
};C.A6d={1:"ogrlica je odstranjena",2:"\u041A\u043E\u043B\u0430\u043D\u044A\u0442 \u0435 \u0441\u0432\u0430\u043B\u0435\u043D"
,3:"\u9805\u5708\u88AB\u53D6\u4E0B\u4E86",25:"Ogrlica je skinuta",4:"Obojek je sund\xE1n"
,5:"Kraven er taget af",0:"Collar is taken off",6:"Halsband is afgenomen",7:"Kaelarihm on \xE4ra v\xF5etud"
,8:"Kaulain irrotetaan",9:"Collier enlev\xE9\xA0?",10:"Halsband abgenommen?",11:
"\u03A4\u03BF \u03BA\u03BF\u03BB\u03BB\u03AC\u03C1\u03BF \u03B2\u03B3\u03AE\u03BA\u03B5"
,12:"A gall\xE9r le van v\xE9ve",13:"Il collare \xE8 stato tolto.",15:"Kakla siksna ir novilkta"
,26:"Apykakl\u0117 nusiimama",16:"Halsband tas av",17:"Obro\u017Ca jest zdj\u0119ta"
,18:"A coleira \xE9 tirada.",19:"Gulerul este dat jos",20:"\u041E\u0448\u0435\u0439\u043D\u0438\u043A \u0441\u043D\u044F\u0442?"
,27:"Ovratnik je odstranjen",21:"Se quita el collar",22:"Kragen tas av",23:"Tasma \xC7\u0131kar\u0131ld\u0131"
,24:"\u041E\u0448\u0438\u0439\u043D\u0438\u043A \u0437\u043D\u044F\u0442\u043E?"
};C.Colon={0:":",9:"\xA0:"};C.AqF={1:"Unos kolostruma",2:"\u0418\u0437\u043F\u0438\u0442\u0430 \u043A\u043E\u043B\u0430\u0441\u0442\u0440\u0430"
,3:"\u521D\u4E73\u63A1\u98DF\u91CF",25:"Unos kolostruma",4:"Kolostrum p\u0159\xEDjem"
,5:"Indtag af r\xE5m\xE6lk",0:"Colostrum intake",6:"Biestopname",7:"Ternespiima joomus"
,8:"Ternimaidon saanti",9:"Prise de colostrum",10:"Kolostrumaufnahme",11:"\u0395\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2 \u03C0\u03C1\u03C9\u03C4\u03BF\u03B3\u03AC\u03BB\u03B1\u03BA\u03C4\u03BF\u03C2"
,12:"Kolosztrum bevitel",13:"Assunzione di colostro",15:"Kolostruma uz\u0146em\u0161ana"
,26:"Pienlig\u0117s suvartojimas",16:"R\xE5melk inntak",17:"Spo\u017Cycie siary"
,18:"Ingest\xE3o de colostro",19:"Aport de colostru",20:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430(\u043C\u043E\u043B\u043E\u0437\u0438\u0432\u0430)"
,27:"Vnos kolostruma",21:"Consumo de calostro",22:"Intag av r\xE5mj\xF6lk",23:"Kolostrum Al\u0131m\u0131"
,24:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430 "+
"(\u043C\u043E\u043B\u043E\u0437\u0438\u0432\u0430)"};C.Bik={1:"Naslov kolone",2:
"\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u044F \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0438"
,3:"Spaltentitel",25:"Zaglavlja stupaca",4:"Z\xE1hlav\xED sloupc\u016F",5:"Kolonneoverskrifter"
,0:"Column headers",6:"Column titel",7:"Veeru pealkiri",8:"Sarakeotsikot",9:"En-t\xEAtes de colonne"
,10:"Spaltentitel",11:"\u0395\u03C0\u03B9\u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03B5\u03C2"
,12:"Oszlopfejl\xE9cek",13:"Intestazioni delle colonne",15:"Kolonnu virsraksti",
26:"Stulpeli\u0173 antra\u0161t\u0117s",16:"Kolonneoverskrifter",17:"Nag\u0142\xF3wki kolumn"
,18:"Cabe\xE7alhos de coluna",19:"Antete de coloane",20:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430"
,27:"Glave stolpcev",21:"T\xEDtulos de columna",22:"Kolumnrubriker",23:"S\xFCtun Ba\u015Fl\u0131klar\u0131"
,24:"\u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0432\u0431\u0447\u0438\u043A\u0443"
};C.Bim={1:"Stanje",2:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u044F",3:"\u72C0\u614B"
,25:"Stanje",4:"Kondice",5:"Tilstand",0:"Condition",6:"Conditie",7:"Seisund",8:"Kunto"
,9:"\xC9tat",10:"Zustand",11:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7"
,12:"\xC1llapot",13:"Condizione",15:"St\u0101voklis",26:"B\u016Bkl\u0117",16:"Tilstand"
,17:"Stan",18:"Condi\xE7\xE3o",19:"Condi\u021Bie",20:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,27:"Stanje",21:"Condici\xF3n",22:"Tillst\xE5nd",23:"Durum",24:"\u0421\u0442\u0430\u043D"
};C.ANL={2:"\u041A",3:"\u72C0\u614B",25:"S",4:"K",0:"C",7:"S",8:"K",9:"\xC9",10:
"Z",11:"\u039A",15:"S",26:"B",16:"T",17:"S",20:"\u0421",27:"S",23:"K",24:"\u0421"
};C.Bin={1:"Korisnik potvrdio",2:"\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0435\u043D\u043E \u043E\u0442 "+
"\u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B",3:"\u7528\u6236\u78BA\u8A8D"
,25:"Korisnik je potvrdio",4:"Potvrzeno u\u017Eivatelem",5:"Bruger bekr\xE6ftet"
,0:"User confirmed",6:"Gebruiker bevestigt",7:"Kasutaja kinnitatud",8:"K\xE4ytt\xE4j\xE4 vahvistettu"
,9:"Utilisateur confirm\xE9",10:"Nutzer best\xE4tigt",11:"\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03B5\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03B9\u03CE\u03B8\u03B7\u03BA\u03B5"
,12:"Felhaszn\xE1l\xF3 meger\u0151s\xEDtette",13:"Utente confermato",15:"Lietot\u0101js apstiprin\u0101ja"
,26:"Vartotojas patvirtino",16:"Bekreftet av bruker",17:"Potwierdzono u\u017Cytkownika"
,18:"Usu\xE1rio confirmado",19:"Utilizator confirmat",20:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0434\u044C "+
"\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D",27:"Uporabnik je potrdil."
,21:"Confirmado por usuario",22:"Anv\xE4ndaren bekr\xE4ftad",23:"Kullan\u0131c\u0131 Onaylad\u0131"
,24:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E"
};C.A6g={1:"Uzastopni",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043D"
,3:"\u9023\u7E8C\u7684",25:"Uzastopni",4:"Souvisl\xFD",5:"Sammenh\xE6ngende",0:"Consecutive"
,6:"opeenvolgend",7:"J\xE4rjestikune",8:"Per\xE4kk\xE4inen",9:"Cons\xE9cutif",10:
"Fortlaufend",11:"\u0394\u03B9\u03B1\u03B4\u03BF\u03C7\u03B9\u03BA\u03CC\u03C2",
12:"Egym\xE1st k\xF6vet\u0151",13:"Consecutivo",15:"Sekojoss",26:"Nuoseklus",16:
"P\xE5f\xF8lgende",17:"Kolejny",18:"Consecutivo",19:"Consecutiv",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439"
,27:"zaporedni",21:"Consecutivo",22:"I f\xF6ljd",23:"Ard\u0131\u015F\u0131k",24:
"\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0438\u0439"};C.Contains={
1:"sadr\u017Ei",2:"\u0441\u044A\u0434\u044A\u0440\u0436\u0430",3:"\u5305\u542B",
25:"sadr\u017Ei",4:"obsahuje",5:"indeholder",0:"contains",6:"bevat",7:"sisaldab"
,8:"sis\xE4lt\xE4\xE4",9:"contient",10:"enth\xE4lt",11:"\u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9"
,12:"tartalmaz",13:"contiene",15:"satur",26:"apima",16:"inneholder",17:"zawiera"
,18:"cont\xE9m",19:"con\u021Bine",20:"\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442"
,27:"vsebuje",21:"Consecutivo",22:"inneh\xE5ller",23:"\u0130\xE7erir",24:"\u0432\u043C\u0456\u0449\u0443\u0454"
};C.A6h={1:"Da li \u017Eelite nastaviti sa registracijom ostalih \u017Eivotinja?"
,2:"\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u043D\u0435 "+"\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430 "+
"\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u0430\u043B\u0438\u0442\u0435 "+"{2} \u0436\u0438\u0432\u043E\u0442\u043D\u0438?"
,3:"\u7E7C\u7E8C\u8A3B\u518A\u5269\u9918\u7684{2}\u96BB\u52D5\u7269\uFF1F",25:"Nastaviti s registracijom preostale {2} \u017Eivotinje?"
,4:"Pokra\u010Dovat v registraci zb\xFDvaj\xEDc\xEDch {2} zv\xED\u0159at?",5:"Forts\xE6t med registrering af de resterende {2} dyr?"
,0:"Continue with registration of remaining {2} animals?",6:"Continu registratie?"
,7:"J\xE4tka \xFClej\xE4\xE4nud {2} looma registreerimist?",8:"Jatketaanko j\xE4ljell\xE4 olevien {2} el\xE4imen rekister\xF6inti\xE4?"
,9:"Poursuivre l\u2019en~re~gis~trement des animaux {2} restants\xA0?",10:"Mit dem Anmelden der restlichen {2} Tiere fortfahren?"
,11:"\u03A3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03C4\u03C9\u03BD \u03C5\u03C0\u03BF\u03BB\u03BF\u03AF\u03C0\u03C9\u03BD "+
"{2} \u03B6\u03CE\u03C9\u03BD;",12:"Folytatja a tov\xE1bbi {2} \xE1llat regisztr\xE1ci\xF3j\xE1t?"
,13:"Continuare con la registrazione dei restanti {2} animali?",15:"Vai turpin\u0101t re\u0123istr\u0101ciju atliku\u0161ajiem {2} dz\u012Bvniekiem?"
,26:"T\u0119sti likusi\u0173 {2} gyv\u016Bn\u0173 registracij\u0105?",16:"Vil du fortsette med registrering av gjenv\xE6rende {2} dyr?"
,17:"Kontynuowa\u0107 rejestracj\u0119 pozosta\u0142ych {2} zwierz\u0105t?",18:"Deseja continuar com o registro dos {2} animais restantes?"
,19:"Continua\u021Bi cu \xEEnregistrarea celorlalte {2} animale?",20:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E "+
"\u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F {2} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445?"
,27:"Nadaljujte z registracijo preostalih {2} \u017Eivali?",21:"\xBFContinuar con el registro de los {2} animales restantes?"
,22:"Forts\xE4tt med registrering av de \xE5terst\xE5ende {2} djuren?",23:"Kalan {2} hayvan\u0131n kayd\u0131yla devam edin?"
,24:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E "+
"\u0440\u0435\u0448\u0442\u0438 {2} \u0442\u0432\u0430\u0440\u0438\u043D?"};C.ACB={
1:"kontrola",2:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",3:
"\u63A7\u5236",25:"Kontrola",4:"Ovl\xE1d\xE1n\xED",5:"Kontrol",0:"Control",6:"Controle"
,7:"Kontroll",8:"Valvonta",9:"Contr\xF4le",10:"Kontrolle",11:"\u0384\u0395\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2"
,12:"Ir\xE1ny\xEDt\xE1s",13:"Controllo",15:"Kontrole",26:"Kontrol\u0117",16:"Kontroll"
,17:"Kontrola",18:"Controle",20:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C"
,27:"nadzor",22:"Kontroll",23:"Kontrol",24:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C"
};C.A6i={1:"Period kontrole svje\u017Eih krava",2:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043D \u043F\u0435\u0440\u0438\u043E\u0434 "+
"\u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u043E\u0442\u0435\u043B\u0435\u043D\u0438 "+
"\u043A\u0440\u0430\u0432\u0438",3:"\u63A7\u5236\u671F\u65B0\u9BAE\u4E73\u725B",
25:"Period kontrole svje\u017Eih krava",4:"Kontroln\xED obdob\xED \u010Derstv\u011B otelen\xFDch krav"
,5:"Kontrolperiode for friske k\xF8er",0:"Control period fresh cows",6:"Controle periode verse koeien"
,7:"Kontrollperioodi poeginud lehmad",8:"Valvontajakso tuoreet lehm\xE4t",9:"P\xE9riode de contr\xF4le des nouvelles vaches"
,10:"Kontrolle Frischmelker f\xFCr",11:"\u03A0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 "+
"\u03C6\u03C1\u03AD\u03C3\u03BA\u03C9\u03BD \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD"
,12:"Kontrollid\u0151szak friss teh\xE9nek",13:"Periodo di controllo delle vacche fresche"
,15:"Kontroles periods svaig\u0101m gov\u012Bm",26:"Kontrolinis laikotarpis \u0161vie\u017Eios karv\u0117s"
,16:"Kontrollperiode for ferske kyr",17:"Okres kontroli \u015Bwie\u017Co ocielonych kr\xF3w"
,18:"Per\xEDodo de controle de vacas rec\xE9m-paridas",19:"Perioada de control la vacile proaspete"
,20:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432",27:"Obdobje nadzora sve\u017Ee telice",21:"Per\xEDodo de control de vacas frescas"
,22:"Kontrollperiod f\xF6r f\xE4rska kor",23:"Yeni Do\u011Fum Yapm\u0131\u015F \u0130neklerin Kontrol Periyodu"
,24:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0438\u0445 "+
"\u043A\u043E\u0440\u0456\u0432"};C.AqH={1:"broj",2:"\u0411\u0440\u043E\u0439",3:
"\u8A08\u6578",25:"Brojiti",4:"Po\u010Det",5:"T\xE6lle",0:"Count",6:"aantal",7:"Loenda"
,8:"Laske",9:"Nombre",10:"An~zahl",11:"\u039C\u03AD\u03C4\u03C1\u03B7\u03C3\u03B5"
,12:"Gr\xF3f",13:"Contare",15:"Skait\u012Bt",26:"Skai\u010Diuoti",16:"Telle",17:
"Liczy\u0107",18:"Contar",19:"Conteaz\u0103",20:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"
,27:"\u0160teti",21:"Contar",22:"R\xE4kna",23:"Say",24:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"
};C.C9={1:"zemlja",2:"\u0421\u0442\u0440\u0430\u043D\u0430",3:"\u570B\u5BB6",25:
"Dr\u017Eava",4:"Zem\u011B",5:"Land",0:"Country",6:"Land",7:"Riik",8:"Maa",9:"Pays"
,10:"Land",11:"\u03A7\u03CE\u03C1\u03B1",12:"Orsz\xE1g",13:"Paese",15:"Valsts",26:
"\u0160alis",16:"Land",17:"Kraj",18:"Pa\xEDs",19:"\u021Aar\u0103",20:"\u0421\u0442\u0440\u0430\u043D\u0430"
,27:"Dr\u017Eava",21:"Pa\xEDs",22:"Land",23:"\xDClke",24:"\u041A\u0440\u0430\u0457\u043D\u0430"
};C.Biq={1:"krava",2:"\u041A\u0440\u0430\u0432\u0430",3:"\u725B",25:"Krava",4:"Kr\xE1va"
,5:"Ko",0:"Cow",6:"Koe",7:"Lehm",8:"Lehm\xE4",9:"Vache",10:"Kuh",11:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1"
,12:"Teh\xE9n",13:"Mucca",15:"Govs",26:"Karv\u0117",16:"Ku",17:"Krowa",18:"Vaca"
,19:"Vaca",20:"\u041A\u043E\u0440\u043E\u0432\u0430",27:"Krava",21:"Vaca",22:"Ko"
,23:"Inek",24:"\u041A\u043E\u0440\u043E\u0432\u0430"};C.Bir={1:"krava",2:"\u043A\u0440\u0430\u0432\u0430"
,3:"\u725B",25:"krava",4:"kr\xE1va",5:"ko",0:"cow",6:"koe",7:"lehm",8:"Lehm\xE4"
,9:"vache",10:"Kuh",11:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1",12:"teh\xE9n"
,13:"mucca",15:"govs",26:"karv\u0117",16:"ku",17:"krowa",18:"vaca",19:"vac\u0103"
,20:"\u041A\u043E\u0440\u043E\u0432\u0430",27:"krava",21:"vaca",22:"ko",23:"Inek"
,24:"\u043A\u043E\u0440\u043E\u0432\u0430"};C.Bis={1:"krave",2:"\u043A\u0440\u0430\u0432\u0438"
,3:"\u5976\u725B",25:"krave",4:"kr\xE1vy",5:"k\xF8er",0:"cows",6:"koeien",7:"lehmad"
,8:"lehm\xE4t",9:"vaches",10:"K\xFChe",11:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2"
,12:"tehenek",13:"mucche",15:"govis",26:"karv\u0117s",16:"Kyr",17:"krowy",18:"vacas"
,19:"vaci",20:"\u041A\u043E\u0440\u043E\u0432\u044B",27:"krave",21:"vacas",22:"kor"
,23:"\u0130nekler",24:"\u043A\u043E\u0440\u043E\u0432\u0438"};C.ACH={1:"Napravi sigurnosnu kopiju"
,2:"\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u0449\u0438\u0442\u0430 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438",3:"\u5EFA\u7ACB\u5099\u4EFD",25:"Stvori sigurnosnu kopiju"
,4:"Vytvo\u0159it z\xE1lohu",5:"Opret sikkerhedskopi",0:"Create backup",6:"Create back up"
,7:"Loo varukoopia",8:"Luo varmuuskopio",9:"Sauvegarder les donn\xE9s",10:"Datensicherung erstellen"
,11:"\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2",12:"K\xE9sz\xEDts biztons\xE1gi m\xE1solatot"
,13:"Crea un backup",15:"Izveidot dubl\u0113jumu",26:"Sukurti atsargin\u0119 kopij\u0105"
,16:"Opprett sikkerhetskopi",17:"Utw\xF3rz kopi\u0119 zapasow\u0105",18:"Criar backup"
,19:"Creeaz\u0103 o copie de rezerv\u0103",20:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E "+
"\u043A\u043E\u043F\u0438\u044E",27:"Ustvari varnostno kopijo",21:"Crear copia de seguridad"
,22:"Skapa s\xE4kerhetskopia",23:"Yedek Olu\u015Ftur",24:"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 "+
"\u043A\u043E\u043F\u0456\u044E"};C.Bit={1:"Kreiranje {1} novih \u017Eivotinja\n\n{2}%% obavljeno\n\nregistracija \u017Eivotinje "+
"{3}",2:"\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 {1} "+
"\u043D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\n\n{2} "+"%% \u0433\u043E\u0442\u043E\u0432\u043E\n\n\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E {3}",3:"\u5EFA\u7ACB{1}\u96BB\u65B0\u5C0F\u725B\n\n{2} %%\u5DF2\u5B8C\u6210\n\n{3}\u96BB\u5C0F\u725B\u5EFA\u7ACB\u4E2D"
,25:"Stvaranje {1} novih \u017Eivotinja\n\n{2} %% dovr\u0161eno\n\nStvaranje "+"\u017Eivotinje {3}"
,4:"Zad\xE1v\xE1n\xED {1} nov\xFDch zv\xED\u0159at\n\n{2} %% hotovo\n\nVytvo\u0159en\xED "+
"zv\xED\u0159ete {3}",5:"Oprettelse af {1} nye dyr\n\n{2} %% udf\xF8rt\n\nOpretter dyr {3}"
,0:"Creation of {1} new animals\n\n{2} %% done\n\nCreating animal {3}",6:"Aanleggen van {1} nieuwe dieren\n\n{2} %% gedaan\n\nLeg dier {3} aan"
,7:"{1} uue looma registreerimine tehtud. Registreerin\n\n{2} %% looma {3}",8:"{1} uusien el\xE4inten luominen\n\n{2} %% valmis\n\nLuo el\xE4int\xE4 {3}"
,9:"Cr\xE9ation de {1} nouveaux animaux\n\n{2} %% fait\n\nCr\xE9ation d\u2019animal "+
"{3}",10:"Anlegen von {1} neuen Tieren\n\n{2} %% erledigt\n\nLege Tier {3} an",11:
"\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 {1} \u03BD\u03AD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD\n\n{2} %% \u03AD\u03B3\u03B9\u03BD\u03B5\n\n\u039D\u03AD\u03BF "+
"\u03B6\u03CE\u03BF \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"{3}",12:"{1} \xFAj \xE1llat l\xE9trehoz\xE1sa\n\n{2} %% k\xE9sz\n\n\xC1llat l\xE9trehoz\xE1sa "+
"{3}",13:"Creazione di {1} nuovi animali\n\n{2} %% completato\n\nCreazione dell\'animale "+
"{3}",15:"Izveido\u0161ana {1} jaunu dz\u012Bvnieku\n\n{2} %% pabeigts\n\nIzveido "+
"dz\u012Bvnieku {3}",26:"Suk\u016Brimas {1} nauj\u0173 gyv\u016Bn\u0173\n\n{2} %% baigta\n\nKuriamas "+
"gyv\u016Bnas {3}",16:"Opprettelse av {1}nye dyrs\n\n{2} %% ferdig\n\nSkaper dyr {3}"
,17:"Tworzenie {1} nowych zwierz\u0105t\n\n{2} %% wykonane\n\nTworzenie zwierz\u0119cia "+
"{3}",18:"Cria\xE7\xE3o de {1} novos animais\n\n{2} %% conclu\xEDdo\n\nCriando animal "+
"{3}",19:"Crearea a {1} animale noi\n\n{2} %% realizat\n\nCrearea animalului {3}"
,20:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 {1} \u043D\u0430\u0432\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445\n\n{2} %% \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u043E\n\n\u0421\u043E\u0437\u0434\u0430\u0442\u044C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {3}",27:"Ustvarjanje {1} novih \u017Eivali\n\n{2} %% opravljeno\n\nUstvarjanje "+
"\u017Eivali {3}",21:"Creando entrada de {1} animales nuevos\n\n{2} %% finalizado\n\nCreando "+
"animal {3}",22:"Skapande av {1} nya djur\n\n{2} %% klart\n\nSkapar djur {3}",23:
"{1} yeni hayvan\u0131n olu\u015Fturulmas\u0131\n\n{2} %% tamamland\u0131\n\nHayvan "+
"{3} olu\u015Fturuluyor",24:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F {1} \u043D\u043E\u0432\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\n\n{2} %% \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043E\n\n\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 {3}"};C.Nc={1:"trenutna te\u017Eina"
,2:"\u0422\u0435\u043A\u0443\u0449\u043E \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u76EE\u524D\u7684\u9AD4\u91CD",25:"Trenutna te\u017Eina",4:"Aktu\xE1ln\xED v\xE1ha"
,5:"Nuv\xE6rende v\xE6gt",0:"Current weight",6:"Huidig gewicht",7:"Paegune kaal"
,8:"Nykyinen paino",9:"Poids actuel",10:"Aktuelles Gewicht",11:"\u03A4\u03C1\u03AD\u03C7\u03C9\u03BD \u03B2\u03AC\u03C1\u03BF\u03C2"
,12:"Aktu\xE1lis s\xFAly",13:"Peso attuale",15:"Pa\u0161reiz\u0113jais svars",26:
"Esamas svoris",16:"N\xE5v\xE6rende vekt",17:"Aktualna waga",18:"Peso atual",19:
"Greutate actual\u0103",20:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0435\u0441"
,27:"Trenutna te\u017Ea",21:"Peso actual",22:"Aktuell vikt",23:"Mevcut A\u011F\u0131rl\u0131k"
,24:"\u041D\u0438\u043D\u0456\u0448\u043D\u044F \u0432\u0430\u0433\u0430"};C.Biv={
1:"trenutno",2:"\u0422\u0435\u043A\u0443\u0449",3:"\u76EE\u524D\u7684",25:"Trenutni"
,4:"Aktu\xE1ln\xED hmotnost zkr\xE1cen\xE1",5:"Aktuel",0:"Current",6:"Huidig",7:
"Praegune",8:"Nykyinen",9:"Actuel",10:"Aktuelles",11:"\u03A4\u03C1\u03AD\u03C7\u03C9\u03BD"
,12:"Jelenlegi",13:"Attuale",15:"Pa\u0161reiz\u0113jais",26:"Dabartinis",16:"N\xE5v\xE6rende"
,17:"Aktualny",18:"Atual",19:"curent",20:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439"
,27:"Trenutni",21:"Actual",22:"Aktuell",23:"Mevcut",24:"\u041D\u0438\u043D\u0456\u0448\u043D\u0456\u0439"
};C.ACK={1:"Dnevni prirast",2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442"
,3:"\u65E5\u589E\u91CD",25:"Dnevni porast te\u017Eine",4:"Denn\xED p\u0159\xEDr\u016Fstek na v\xE1ze"
,5:"Daglig v\xE6gt\xF8gning",0:"Daily weight gain",6:"Dagelijkse toenames",7:"P\xE4evane juurdekasv"
,8:"P\xE4iv\xE4kasvu",9:"Croissance journali\xE8re",10:"T\xE4gliche Zunahmen",11:
"\u0397\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 \u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2",12:"Napi s\xFAlygyarapod\xE1s",13:"Aumento di peso quotidiano"
,15:"Ikdienas svara pieaugums",26:"Kasdienis svorio prieaugis",16:"Daglig tilvekst"
,17:"Przyrost masy cia\u0142a na dob\u0119",18:"Ganho di\xE1rio de peso",19:"Cre\u0219tere zilnic\u0103 \xEEn greutate"
,20:"\u0414\u043D\u0435\u0432\u043D\u043E\u0439 \u043F\u0440\u0438\u0432\u0435\u0441"
,27:"Dnevni prirastek te\u017Ee",21:"Ganancia diaria",22:"Daglig vikt\xF6kning",
23:"G\xFCnl\xFCk a\u011F\u0131rl\u0131k art\u0131\u015F\u0131",24:"\u0414\u0435\u043D\u043D\u0438\u0439 \u043F\u0440\u0438\u0440\u0456\u0441\u0442"
};C.ACL={1:"Majka",2:"\u041C\u0430\u0439\u043A\u0430",3:"\u6C34\u58E9",25:"Brana"
,4:"P\u0159ehrada",5:"D\xE6mning",0:"Dam",6:"Moederdier",7:"Ema",8:"Em\xE4",9:"M\xE8re"
,10:"Muttertier",11:"\u039C\u03B7\u03C4\u03AD\u03C1\u03B1 \u03B6\u03CE\u03BF\u03C5"
,12:"G\xE1t",13:"Diga",15:"Aizsprosts",26:"The translation of \"dam\" into Lithuanian is \"u\u017Etvanka\"."
,16:"Mor dyr",17:"Zapora",18:"Barragem",19:"Baraj",20:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"jez",21:"Madre",22:"Damm",23:"Anne Hayvan",24:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430"
};C.ACM={1:"prikupljanje podataka",2:"\u0421\u044A\u0431\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u5C0F\u725B\u8CC7\u6599\u6536\u96C6",25:"Prikupljanje podataka",4:"Z\xEDsk\xE1v\xE1n\xED dat"
,5:"Dataindsamling",0:"Data acquisition",6:"Data overnemen",7:"Andmete sisestamine"
,8:"Tiedonkeruu",9:"Acquisition de donn\xE9es",10:"Tierdatenerfassung",11:"\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatgy\u0171jt\xE9s",13:"Acquisizione dati",15:"Datu ieg\u016B\u0161ana",26:
"Duomen\u0173 rinkimas",16:"Datainnsamling",17:"Pozyskiwanie danych",18:"Aquisi\xE7\xE3o de dados"
,19:"Achizi\u021Bie de date",20:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",27:"Pridobivanje podatkov"
,21:"Recolecci\xF3n de datos",22:"Datainsamling",23:"Veri Toplama",24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445"
};C.A6l={1:"prikupljanje podataka",2:"\u0421\u044A\u0431\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u5C0F\u725B\u8CC7\u6599\u6536\u96C6",25:"Prikupljanje podataka",4:"sb\u011Br dat"
,5:"Dataindsamling",0:"Data acquisition",6:"Data overnemen",7:"Andmete sisestamine"
,8:"Tiedonkeruu",9:"Acquisition de donn\xE9es",10:"Datenerfassung",11:"\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatgy\u0171jt\xE9s",13:"Acquisizione dei dati",15:"Datu ieguve",26:"Duomen\u0173 \u012Fsigijimas"
,16:"Datainnsamling",17:"Pozyskiwanie danych",18:"Aquisi\xE7\xE3o de dados",19:"Achizi\u021Bie de date"
,20:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
,27:"Pridobivanje podatkov",21:"Recolecci\xF3n datos",22:"Datainsamling",23:"Veri Toplama"
,24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445"
};C.ACN={1:"Rezervna kopija podataka",2:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u8CC7\u6599\u5099\u4EFD",25:"Sigurnosna kopija podataka",4:"Z\xE1lohov\xE1n\xED dat"
,5:"Databackup",0:"Data backup",6:"Gegevensback-up",7:"Andmete varundamine",8:"Datan varmuuskopio"
,9:"Sauvegarde des donn\xE9es",10:"Datensicherung",11:"\u0391\u03BD\u03C4\u03AF\u03B3\u03C1\u03B1\u03C6\u03BF \u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2"
,12:"adatment\xE9s",13:"Backup dei dati",15:"Datu dubl\u0113\u0161ana",26:"Duomen\u0173 atsargin\u0117 kopija"
,16:"Datasisikring",17:"Kopia zapasowa",18:"C\xF3pia de seguran\xE7a",19:"Copie de rezerv\u0103"
,20:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0445",27:"Varnostna kopija podatkov",21:"Copia de seguridad de datos"
,22:"Dataskydd",23:"Veri Yedekleme",24:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0434\u0430\u043D\u0438\u0445"};C.ACO={1:"Upravljanje podacima",2:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 "+
"\u0434\u0430\u043D\u043D\u0438",3:"\u8CC7\u6599\u7BA1\u7406",25:"Upravljanje podacima"
,4:"Spr\xE1va dat",5:"Datastyring",0:"Data management",6:"Gegevensbeheer",7:"Andmehaldus"
,8:"Tiedonhallinta",9:"Gestion des donn\xE9es",10:"Datenmanagement",11:"\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatkezel\xE9s",13:"Gestione dei dati",15:"Datu p\u0101rvald\u012Bba",26:"Duomen\u0173 valdymas"
,16:"Datah\xE5ndtering",17:"Zarz\u0105dzanie danymi",18:"Gest\xE3o de dados",19:
"Gestionarea datelor",20:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u043C\u0438"
,27:"Upravljanje podatkov",21:"Gesti\xF3n de datos",22:"Datahantering",23:"Veri y\xF6netimi"
,24:"\u0423\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u043C\u0438"
};C.A6m={1:"sinhronizacija podataka",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",3:"\u8CC7\u6599\u540C\u6B65"
,25:"Sinkronizacija podataka",4:"Synchronizace dat",5:"Data-synkronisering",0:"Data synchronisation"
,6:"Data synchronisatie",7:"Andmete s\xFCnkroniseerimine",8:"Tietojen synkronointi ruokkijalle"
,9:"Synchronisation des donn\xE9es",10:"Datensynchronisation",11:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD",12:"Adat szinkroniz\xE1ci\xF3"
,13:"Sincronizzazione dei dati",15:"Datu sinhroniz\u0101cija",26:"Duomen\u0173 sinchronizacija"
,16:"Data synkronisering",17:"Synchronizacja danych",18:"Sincroniza\xE7\xE3o de dados"
,19:"Sincronizarea datelor",20:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"
,27:"Sinhronizacija podatkov",21:"Sincronizaci\xF3n de datos",22:"Data-synkronisering"
,23:"Bilgi senkronizasyonu",24:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F "+
"\u0434\u0430\u043D\u0438\u0445 \u0456\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"
};C.Biy={1:"sinhronizacija podataka u toku {1}%% / obavljena",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\n\n{1} %% \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u043D\u043E"
,3:"\u8CC7\u6599\u540C\u6B65\u4E2D\n\n{1} %% \u5B8C\u6210",25:"Sinkronizacija podataka u tijeku\n\n{1} %% dovr\u0161eno"
,4:"Synch. dat prob\xEDh\xE1\n{1} %% hotovo",5:"Data synkronisering i gang\n\n{1} %% udf\xF8rt"
,0:"Data synchronization in progress\n\n{1} %% done",6:"Data word gesynchroniseerd\n\n{1} gedaan %%"
,7:"Andmete s\xFCnkroniseerimine t\xF6\xF6s\n\n{1} %% valmis",8:"Tiedon synkronointi k\xE4ynniss\xE4\n\n{1} %% valmis"
,9:"Synchronisation des donn\xE9es en cours\n\n{1} %% fait",10:"Daten werden synchronisiert\n\n{1} %% erledigt"
,11:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7\n\n{1} "+
"%%\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5",12:
"Adatok szinkroniz\xE1l\xE1sa folyamatban\n\n{1} %% k\xE9sz",13:"Sincronizzazione dei dati in corso\n\n{1} %% completato"
,15:"Datu sinhroniz\u0101cija notiek\n\n{1} %% pabeigts",26:"Duomen\u0173 sinchronizacija vyksta\n\n{1} %% baigta"
,16:"Datasynkronisering p\xE5g\xE5r\n\n{1} %% ferdig",17:"Synchronizacja danych w toku\n\n{1} %% zako\u0144czona"
,18:"Sincroniza\xE7\xE3o de dados em andamento\n\n{1} %% conclu\xEDdo",19:"Sincronizare a datelor \xEEn curs\n\n{1} %% finalizat"
,20:"\u0421\u0438\u043D\u0445\u0440. \u0434\u0430\u043D\u043D\u044B\u0445\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E",27:"Sinhronizacija podatkov v teku\n\n{1} %% opravljeno"
,21:"Sincronizaci\xF3n de datos en curso\n\n{1} %% finalizado",22:"Data synkronisering p\xE5g\xE5r\n\n{1} %% klar"
,23:"Bilgi senkronizasyonu i\u015Flemde\n\n{1} %%",24:"\u0421\u0438\u043D\u0445\u0440. \u0434\u0430\u043D\u0438\u0445\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E"};C.Date={1:"datum",2:"\u0414\u0430\u0442\u0430"
,3:"\u65E5\u671F",25:"Datum",4:"Datum",5:"Dato",0:"Date",6:"Datum",7:"Kuup\xE4ev"
,8:"P\xE4iv\xE4",10:"Datum",11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1"
,12:"D\xE1tum",13:"Data",15:"Datums",26:"Data",16:"Dato",17:"Data",18:"Data",19:
"Dat\u0103",20:"\u0414\u0430\u0442\u0430",27:"Datum",21:"Fecha",22:"Datum",23:"Tarih"
,24:"\u0414\u0430\u0442\u0430"};C.Aej={1:"datum ro\u0111enja",2:"\u0414\u0430\u0442\u0430 \u043D\u0430 \u0440\u0430\u0436\u0434."
,3:"\u751F\u65E5",25:"Datum ro\u0111enja",4:"Datum narozen\xED",5:"F\xF8dselsdato"
,0:"Date of birth",6:"Geboortedatum",7:"S\xFCnnikuup\xE4ev",8:"Syntym\xE4p\xE4iv\xE4"
,9:"Date de naissance",10:"Geburtsdatum",11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Sz\xFClet\xE9si d\xE1tum",13:"Data di nascita",15:"Dzim\u0161anas datums",26:
"Gimimo data",16:"F\xF8dselsdato",17:"Data urodzenia",18:"Data de nascimento",19:
"Data na\u0219terii",20:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,27:"Datum rojstva",21:"Fecha de nacimiento",22:"F\xF6delsedatum",23:"Do\u011Fum tarihi"
,24:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A6n={1:"DD-MM-GGGG",2:"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413",3:
"\u897F\u5143\u5E74\u6708\u65E5",25:"DD-MM-GGGG",4:"DD-MM-RRRR",5:"DD-MM-\xC5\xC5\xC5\xC5"
,0:"DDMMYYYY",6:"DD-MM-JJJJ",7:"PP.KK.AAAA",8:"PP.KK.YYYY",9:"JJ/MM/AAAA",10:"TT.MM.JJJJ"
,11:"\u0397\u0397-\u039C\u039C-\u0395\u0395\u0395\u0395",12:"NN-HH-\xC9\xC9\xC9\xC9"
,13:"GG-MM-AAAA",15:"DD-MM-GGGG",26:"DD-MM-YYYY",16:"DD-MM-\xC5\xC5\xC5\xC5",17:
"DD-MM-RRRR",18:"DD-MM-AAAA",19:"ZZ-LL-AAAA",20:"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413"
,27:"DD-MM-LLLL",21:"DD/MM/YYYY",22:"DD-MM-\xC5\xC5\xC5\xC5",23:"GGAAYYYY",24:"\u0414\u0414-\u041C\u041C-\u0420\u0420\u0420\u0420"
};C.ACP={1:"datum i vrijeme",2:"\u0414\u0430\u0442\u0430 \u0438 \u0447\u0430\u0441"
,3:"\u65E5\u671F&\u6642\u9593",25:"Datum i vrijeme",4:"Datum a \u010Das",5:"Dato & Tid"
,0:"Date & Time",6:"Datum & Tijd",7:"Kuup\xE4ev ja kellaaeg",8:"P\xE4iv\xE4 & Aika"
,9:"Date et heure",10:"Datum & Uhrzeit",11:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 "+
"\u03CE\u03C1\u03B1",12:"D\xE1tum & Id\u0151",13:"Data e ora",15:"Datums un laiks"
,26:"Data ir laikas",16:"Dato & Tid",17:"Data i czas",18:"Data e Hora",19:"Dat\u0103 & Or\u0103"
,20:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",27:"Datum in \u010Das"
,21:"Fecha & hora",22:"Datum & Tid",23:"Tarih & Saat",24:"\u0414\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441"
};C.GL={1:"dan",2:"\u0434\u0435\u043D",3:"\u65E5",25:"dan",4:"Den",5:"dag",0:"day"
,6:"Dag",7:"p\xE4ev",8:"P\xE4iv\xE4",9:"jour",10:"Tag",11:"\u0397\u03BC\u03AD\u03C1\u03B1"
,12:"nap",13:"giorno",15:"diena",26:"diena",16:"Dag",17:"dzie\u0144",18:"dia",19:
"zi",20:"\u0434\u0435\u043D\u044C",27:"dan",21:"d\xEDa",22:"dag",23:"G\xFCn",24:
"\u0434\u0435\u043D\u044C"};C.A6p={1:"Dan",2:"\u0414\u0435\u043D",3:"\u65E5",25:
"Dan",4:"Den",5:"Dag",0:"Day",6:"Dag",7:"P\xE4ev",8:"P\xE4iv\xE4",9:"Jour",10:"Tag"
,11:"\u0397\u03BC\u03AD\u03C1\u03B1",12:"Nap",13:"Giorno",15:"Diena",26:"Diena",
16:"Dag",17:"Dzie\u0144",18:"Dia",19:"Zi",20:"\u0414\u0435\u043D\u044C",27:"Dan"
,21:"D\xEDa",22:"Dag",23:"G\xFCn",24:"\u0414\u0435\u043D\u044C"};C.Kq={1:"dani",
2:"\u0434\u043D\u0438",3:"\u5929\u6578",25:"dani",4:"Dny",5:"dage",0:"days",6:"Dagen"
,7:"p\xE4evad",8:"P\xE4iv\xE4t",9:"jours",10:"Tage",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"napok",13:"giorni",15:"dienas",26:"dienos",16:"Dager",17:"dni",18:"dias",19:
"zile",20:"\u0414\u043D\u0438",27:"dnevi",21:"d\xEDas",22:"dagar",23:"g\xFCnler"
,24:"\u0414\u043D\u0456\u0432"};C.Biz={1:"dani",2:"\u0434\u043D\u0438",3:"\u5929\u6578"
,25:"dani",4:"Dny",5:"dage",0:"days",6:"Dagen",7:"p\xE4evad",8:"P\xE4iv\xE4t",9:
"jours",10:"Tagen",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2",12:"napok",13:"giorni"
,15:"dienas",26:"dienos",16:"Dager",17:"dni",18:"dias",19:"zile",20:"\u0414\u043D\u0435\u0439"
,27:"dnevi",21:"d\xEDas",22:"dagar",23:"G\xFCnler",24:"\u0414\u043D\u0456\u0432"
};C.A6q={1:"dani / alarm",2:"\u0414\u043D\u0438 \u0441 \u0430\u043B\u0430\u0440\u043C\u0430"
,3:"\u8B66\u5831\u5929\u6578",25:"Dani u uzbuni",4:"Dny v upozorn\u011Bn\xED",5:
"Dage i alarm",0:"Days in alarm",6:"Alarmdagen",7:"P\xE4evi hoiatuses",8:"H\xE4lytys~p\xE4iv\xE4t"
,9:"Jours \xE9tat d\u2019alerte",10:"Tage in Alarm",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CC"
,12:"Napok riad\xF3ban",13:"Giorni in allarme",15:"Dienas trauksm\u0113",26:"Dienos sujudoje"
,16:"Dager i alarm",17:"Dni w alarmie",18:"Dias em alarme",19:"Zile \xEEn alarm\u0103"
,20:"\u0414\u043D\u0438 \u043D\u0430 \u0442\u0440\u0435\u0432\u043E\u0433\u0435"
,27:"Dnevi v alarmu",21:"D\xEDas en alarma",22:"Dagar i larm",23:"Alamdaki g\xFCnler"
,24:"\u0414\u043D\u0456\u0432 \u0443 \u0442\u0440\u0438\u0432\u043E\u0437\u0456"
};C.BiA={1:"dani / temperatura",2:"\u0414\u043D\u0438 \u0441 \u0442\u0440\u0435\u0441\u043A\u0430"
,3:"\u767C\u71D2\u5929\u6578",25:"Dani u groznici",4:"Dny v hore\u010Dce",5:"Dage i feber"
,0:"Days in fever",6:"Koorts dagen",7:"P\xE4evi palavikus",8:"Kuumep\xE4iv\xE4t"
,9:"Des jours de fi\xE8vre",10:"Fiebertage",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03C5\u03C1\u03B5\u03C4\u03CC"
,12:"L\xE1zban t\xF6lt\xF6tt napok",13:"Giorni in febbre",15:"Dienas drudz\u012B"
,26:"Dienos kar\u0161\u010Diuojant",16:"Dager med feber",17:"Dni w gor\u0105czce"
,18:"Dias com febre",19:"Zile \xEEn febr\u0103",20:"\u0414\u043D\u0435\u0439 \u0441 \u0442\u0435\u043C~\u043F\u0435~\u0440\u0430~\u0442\u0443\u0440\u043E\u0439"
,27:"Dnevi v vro\u010Dici",21:"D\xEDas con fiebre",22:"Dagar i feber",23:"Ate\u015Fli g\xFCnler"
,24:"\u0414\u043D\u0456\u0432 \u0437 \u0442\u0435\u043C~\u043F\u0435~\u0440\u0430~\u0442\u0443\u0440\u043E\u044E"
};C.BiB={1:"Dani",2:"\u0414\u043D\u0438 -",3:"\u5929\u6578",25:"Days - Dani",4:"Dny"
,5:"Dage",0:"Days-",6:"Days - Dagen",7:"P\xE4evad",9:"Jours",10:"Tage-",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"Napok",13:"Giorni",15:"Days - Dienas",26:"Dienos",16:"Dager",17:"Dni",18:"Dias"
,19:"Zile",20:"\u0414\u043D\u0438",27:"Days - Dnevi",22:"Days - Dagar",24:"\u0414\u043D\u0456"
};C.A6r={1:"Dani na stra\u017Ei",2:"\u0414\u043D\u0438 \u043F\u043E\u0434 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"
,3:"\u99D0\u5B88\u7684\u65E5\u5B50",25:"Dani na stra\u017Ei",4:"Dny na hl\xEDdce"
,5:"Dage p\xE5 vagt",0:"Days on watch",6:"Dagen op de lijst",7:"P\xE4evad vaatlusel"
,8:"P\xE4iv\xE4t tarkkailussa.",9:"jours sous suivi.",10:"Tage unter Beobacht.",
11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C6\u03CD\u03BB\u03B1\u03BE\u03B7"
,12:"Napok az \u0151rs\xE9gben",13:"Giorni di guardia",15:"Dienas sardz\u0113",26:
"Dienos bud\u0117jime",16:"Dager p\xE5 vakt",17:"Dni na warcie",18:"Dias de vigia"
,19:"Zile de veghe",20:"\u0414\u043D\u0438 \u043D\u0430 \u0434\u0435\u0436\u0443\u0440\u0441\u0442\u0432\u0435"
,27:"Dnevi na stra\u017Ei",21:"D\xEDas en observaci\xF3n",22:"Dagar p\xE5 vakt",
23:"\u0130zlemedeki g\xFCnler",24:"\u0414\u043D\u0456 \u043D\u0430 \u0432\u0430\u0440\u0442\u0456"
};C.BiC={1:"Dana+",2:"\u0414\u043D\u0438 +",3:"\u5929\u6578+",25:"Dana",4:"Dny",
5:"Dage",0:"Days+",6:"Dagen",7:"P\xE4evad+",9:"Jours",10:"Tage+",11:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"Napok+",13:"Giorni",15:"Dienas",26:"Dienos",16:"Dager",17:"Dni",18:"Dias",19:
"Zile",20:"\u0414\u043D\u0438",27:"Dnevi",22:"Dagar",24:"\u0414\u043D\u0456+"};C.
AjI={1:"zadane vrijednosti",2:"\u0421\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435"
,3:"\u51FA\u5EE0\u8A2D\u5B9A",25:"Zadane vrijednosti",4:"V\xFDchoz\xED hodnoty",
5:"Standardv\xE6rdier",0:"Default values",6:"Standaard waardes",7:"Vaikimisi v\xE4\xE4rtused"
,8:"Oletusarvot",9:"Valeurs standards",10:"Standardwerte",11:"\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03B1\u03BE\u03AF\u03B5\u03C2",12:"Alap\xE9rtelmezett \xE9rt\xE9kek",13:"Valori predefiniti"
,15:"Noklus\u0113juma v\u0113rt\u012Bbas",26:"Numatytosios reik\u0161m\u0117s",16:
"Standardverdier",17:"Domy\u015Blne warto\u015Bci",18:"Valores padr\xE3o",19:"Valori implicite"
,20:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
,27:"Privzete vrednosti",21:"Valores por defecto",22:"Standardv\xE4rden",23:"De\u011Ferleri s\u0131f\u0131rla"
,24:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C"
};C.Delete={1:"izbrisati",2:"\u0418\u0437\u0442\u0440\u0438\u0439",3:"\u522A\u6389"
,25:"Izbri\u0161i",4:"Smazat",5:"Slet",0:"Delete",6:"Verwijderen",7:"Kustuta",8:
"Poista",9:"Effacer",10:"L\xF6schen",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE"
,12:"T\xF6r\xF6l",13:"Elimina",15:"Dz\u0113st",26:"I\u0161trinti",16:"Slett",17:
"Usu\u0144",18:"Apagar",19:"\u0218terge",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
,27:"Izbri\u0161i",21:"Borrar",22:"Radera",23:"Sil",24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"
};C.A6s={1:"Obri\u0161i sve obavijesti nakon izvoza",2:"\u0418\u0437\u0442\u0440\u0438\u0439\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0431\u0435\u043B\u0435\u0436\u043A\u0438 \u0441\u043B\u0435\u0434 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u532F\u51FA\u5F8C\u522A\u9664\u6240\u6709\u901A\u77E5",25:"Izbri\u0161i sve obavijesti nakon izvoza"
,4:"Odstra\u0148te v\u0161echna ozn\xE1men\xED po exportu",5:"Slet alle meddelelser efter eksport"
,0:"Delete all notices after export",6:"Verwijder alle meldingen na export.",7:"Kustuta k\xF5ik teated p\xE4rast eksportimist"
,9:"Supprimez tous les avis apr\xE8s l\'exportation.",10:"Alle Nachrichten nach Export l\xF6schen"
,11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03AC\u03C8\u03C4\u03B5 \u03CC\u03BB\u03B5\u03C2 "+
"\u03C4\u03B9\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE"
,12:"Export\xE1l\xE1s ut\xE1n t\xF6r\xF6lje az \xF6sszes \xE9rtes\xEDt\xE9st",13:
"Elimina tutti gli avvisi dopo l\'esportazione",15:"Izdz\u0113siet visus pazi\u0146ojumus p\u0113c eksport\u0113\u0161anas."
,26:"I\u0161trinti visus prane\u0161imus po eksporto",16:"Slett alle varsler etter eksport"
,17:"Usu\u0144 wszystkie powiadomienia po eksporcie.",18:"Excluir todos os avisos ap\xF3s a exporta\xE7\xE3o"
,19:"\u0218terge toate notific\u0103rile dup\u0103 export.",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043F\u043E\u0441\u043B\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430."
,27:"Izbri\u0161i vsa obvestila po izvozu",22:"Ta bort alla meddelanden efter exporten"
,24:"\u0412\u0438\u0434\u0430\u043B\u0456\u0442\u044C \u0443\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0456\u0441\u043B\u044F \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443"
};C.AmQ={1:"Izbrisati podatke o \u017Eivotinji?",2:"\u0414\u0430 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0435 \u043B\u0438 "+
"\u0437\u0430\u043F\u0438\u0441\u044A\u0442 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E?"
,3:"\u522A\u9664\u52D5\u7269\u8A18\u9304\uFF1F",25:"Izbrisati zapis o \u017Eivotinji?"
,4:"Smazat z\xE1znam o zv\xED\u0159eti?",5:"Slet dyrejournal?",0:"Delete animal record?"
,6:"Verwijder opname dier",7:"Kustuta looma andmed?",8:"Poistetaanko el\xE4intietue?"
,9:"Supprimer le registre des animaux\xA0?",10:"Tierdatensatz l\xF6schen?",11:"\u039D\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C8\u03C9 \u03C4\u03BF "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5;"
,12:"T\xF6r\xF6lj\xFCk az \xE1llat adatait?",13:"Eliminare il record dell\'animale?"
,15:"Dz\u0113st dz\u012Bvnieka ierakstu?",26:"I\u0161trinti gyv\u016Bno \u012Fra\u0161\u0105?"
,16:"Slette registeret av dyr?",17:"Usun\u0105\u0107 rekord zwierz\u0119cia?",18:
"Excluir registro de animal?",19:"\u0218terge\u021Bi \xEEnregistrarea animalului?"
,20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C?",27:"Izbrisati zapis o \u017Eivali?"
,21:"\xBFBorrar registro del animal?",22:"Radera djurregister?",23:"Hayvan Kayd\u0131n\u0131 Sil"
,24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443?"};C.HH={1:"modus prezentacije"
,2:"\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u0440\u0435\u0436\u0438\u043C",3:"\u793A\u7BC4\u6A21\u5F0F",25:"Na\u010Din demonstracije"
,4:"Uk\xE1zkov\xFD re\u017Eim",5:"Demonstrationstilstand",0:"Demonstration mode"
,6:"Demonstratiemodus",7:"Demore\u017Eiim",8:"Demotila",9:"Mode de pr\xE9sentation"
,10:"Pr\xE4sentationsmodus",11:"\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03B1 \u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2"
,12:"Bemutat\xF3 m\xF3d",13:"Modalit\xE0 dimostrativa",15:"Demonstr\u0101cijas re\u017E\u012Bms"
,26:"Demonstracinis re\u017Eimas",16:"Demonstrasjons modus",17:"Tryb demonstracyjny"
,18:"Modo de demonstra\xE7\xE3o",19:"Mod de demonstra\u021Bie",20:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
,27:"Na\u010Din demonstracije",21:"Modo de presentaci\xF3n",22:"Demosl\xE4ge",23:
"Demo modu",24:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457"
};C.BiF={1:"Izvod iz broja markice za uho",2:"\u0418\u0437\u0432\u043B\u0438\u0447\u0430\u043D\u0435 \u043E\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 \u043C\u0430\u0440\u043A\u0430"
,3:"\u5F9E\u8033\u6A19\u865F\u78BC\u63A8\u5C0E",25:"Izvedenica iz broja markice za uho"
,4:"Odvodit z \u010D\xEDsla u\u0161n\xED zn\xE1mky",5:"Afstamning fra \xF8rem\xE6rkenummer"
,0:"Derivation from eartag number",6:"Afstamming van oornummer",7:"P\xE4ritolu k\xF5rvam\xE4rgi numbri j\xE4rgi"
,8:"Korvamerkin numeron johtaminen",9:"D\xE9rivation du num\xE9ro de la boucle",
10:"Ableitung von Ohrmarkennummer",11:"\u03A0\u03C1\u03BF\u03AD\u03BB\u03B5\u03C5\u03C3\u03B7 \u03B1\u03C0\u03CC "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7\u03C2 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD",12:"Sz\xE1rmaztat\xE1s f\xFClc\xEDmkesz\xE1mb\xF3l"
,13:"Derivazione dal numero del marchio auricolare",15:"Atvasin\u0101jums no auskaru numura"
,26:"I\u0161vestis i\u0161 auskar\u0173 numerio",16:"Avledning fra \xF8remerkenummer"
,17:"Pochodzenie z numeru kolczyka usznego",18:"Deriva\xE7\xE3o do n\xFAmero da etiqueta auricular"
,19:"Derivare din num\u0103rul crotaliei",20:"\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 "+
"\u043E\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0431\u0438\u0440\u043A\u0438 "+
"\u0434\u043B\u044F \u0443\u0445\u0430",27:"Izpeljava iz \u0161tevilke uhanske znamke"
,22:"H\xE4rledning fr\xE5n \xF6ronm\xE4rkesnummer",23:"Kulak etiketi numaras\u0131ndan t\xFCretme"
,24:"\u041F\u043E\u0445\u0456\u0434\u043D\u0435 \u0432\u0456\u0434 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0430"};C.A6w={1:"Izvedenica iz broja transpondera"
,2:"\u0418\u0437\u0432\u043B\u0438\u0447\u0430\u043D\u0435 \u043E\u0442 \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440",3:"\u5F9E\u61C9\u7B54\u5668\u7DE8\u865F\u884D\u751F"
,25:"Izvedenica iz broja transpondera",4:"Odvozen\xED z transpond\xE9rov\xE9ho \u010D\xEDsla"
,5:"Afkobling fra transpondernummer",0:"Derivation from transponder number",6:"Afleiding van het transpondernummer"
,7:"P\xE4ritolu transponderi numbri j\xE4rgi",8:"Transponderin numeron johtaminen"
,9:"D\xE9rivation du \u2116 du transpondeur",10:"Ableitung von Transpondernummer"
,11:"\u03A0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE \u03B1\u03C0\u03CC \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03B4\u03AD\u03BA\u03C4\u03B7-\u03C0\u03BF\u03BC\u03C0\u03BF\u03CD",12:"Sz\xE1rmaztat\xE1s a transzponder sz\xE1m\xE1t\xF3l"
,13:"Derivazione dal numero del trasponder",15:"Atvasin\u0101jums no transpondera numura"
,26:"I\u0161vestis i\u0161 atsako daviklio numerio",16:"Avledning fra transpondernummer"
,17:"Pochodzenie z numeru transpondera",18:"Deriva\xE7\xE3o do n\xFAmero do transponder"
,19:"Derivare din num\u0103rul transponderului",20:"\u0412\u044B\u0432\u043E\u0434 \u0438\u0437 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430",27:"Izpeljava iz \u0161tevilke transponderja"
,21:"Derivaci\xF3n del \u2116 de transpondedor",22:"Derivering fr\xE5n transpondernummer"
,23:"Aktar\u0131c\u0131 numaras\u0131ndan t\xFCretme",24:"\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A \u0456\u0437 \u043D\u043E\u043C\u0435\u0440\u0443 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"};C.BiG={
1:"Opis kolone",2:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u044F "+
"\u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0438",3:"\u6A19\u984C\u8AAA\u660E"
,25:"Opis. zaglavlja stupaca",4:"Popis z\xE1hlav\xED sloupc\u016F",5:"Beskrivelse. kolonneoverskrifter"
,0:"Descript. column headers",6:"Toelichting titel",7:"Veeru kirjeldus",8:"Kuvaus sarakkeen otsikot"
,9:"Descript. titres colonnes",10:"Erl\xE4uterung Spaltentitel",11:"\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03C0\u03B9\u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03C9\u03BD"
,12:"Le\xEDr\xE1s. oszlopfejl\xE9cek",13:"Intestazioni delle colonne descrittive"
,15:"Apraksts. kolonnu virsraksti",26:"Apra\u0161ymo stulpeli\u0173 antra\u0161t\u0117s"
,16:"Beskriv kolonne overskrifter",17:"Nag\u0142\xF3wki kolumn opisowych",18:"Cabe\xE7alhos de coluna de descri\xE7\xE3o"
,19:"Antete de coloane descriptive",20:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E "+
"\u0441\u0442\u043E\u043B\u0431\u0446\u0430",27:"Opis. glave stolpcev",21:"Descr. t\xEDtulos columna"
,22:"Beskrivning. kolumnrubriker",23:"A\xE7\u0131klama. s\xFCtun ba\u015Fl\u0131klar\u0131"
,24:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0434\u043E \u043D\u0430\u0437\u0432\u0438 "+
"\u0441\u0442\u043E\u0432\u043F\u0447\u0438\u043A\u0430"};C.Device={1:"aparat",2:
"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E",3:"\u8A2D\u5099",
25:"Ure\u0111aj",4:"Za\u0159\xEDzen\xED",5:"Enhed",0:"Device",6:"Apparaat",7:"Seade"
,8:"Laite",9:"Appareil",10:"Ger\xE4t",11:"\u03A3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE"
,12:"Eszk\xF6z",13:"Dispositivo",15:"Ier\u012Bce",26:"\u012Erenginys",16:"Enhet"
,17:"Urz\u0105dzenie",18:"Dispositivo",19:"Dispozitiv",20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E"
,27:"Naprava",21:"Dispositivo",22:"Enhet",23:"Cihaz",24:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439"
};C.A6x={1:"aktivnosti aparata",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E"
,3:"\u88DD\u7F6E\u64CD\u4F5C",25:"Radnje ure\u0111aja",4:"Akce za\u0159\xEDzen\xED"
,5:"Enhedsaktioner",0:"Device actions",6:"Aparaat acties",7:"Seadme toimingud",8:
"Laitetoiminnot",9:"Actions de dispositif",10:"Ger\xE4teaktionen",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"Eszk\xF6zm\u0171veletek",13:"Azioni del dispositivo",15:"Ier\u012Bces darb\u012Bbas"
,26:"\u012Erenginio veiksmai",16:"Enhets handlinger",17:"Dzia\u0142ania urz\u0105dzenia"
,18:"A\xE7\xF5es do dispositivo",19:"Ac\u021Biuni ale dispozitivului",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,27:"Dejavnosti naprave",21:"Acciones del dispositivo",22:"\xC5tg\xE4rder f\xF6r enheten"
,23:"Cihaz i\u015Flemleri",24:"\u0414\u0456\u0457 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.DeviceAndAnimalData={1:"Svi podaci o ure\u0111ajima i \u017Eivotinjama",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0438\n\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,3:"\u6240\u6709\u88DD\u7F6E\u548C\u52D5\u7269\u8CC7\u6599",25:"Svi podaci o ure\u0111ajima i \u017Eivotinjama"
,4:"Ve\u0161ker\xE1 data za\u0159\xEDzen\xED a zv\xED\u0159at",5:"Alle enheds- og dyredata"
,0:"All device and\nanimal data",6:"Alle dieren en data",7:"K\xF5ik seadme- ja\nloomaandmed"
,8:"Kaikki laite- ja el\xE4intiedot",9:"Toutes donn\xE9es ani~maux et de l\'appareils"
,10:"Alle Tier- und\nGer\xE4tedaten",11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD \u03BA\u03B1\u03B9 \u03B6\u03CE\u03C9\u03BD"
,12:"\xD6sszes eszk\xF6z- \xE9s \xE1llatadat",13:"Tutti i dati di dispositivi e animali"
,15:"Visi ier\u012B\u010Du un dz\u012Bvnieku dati",26:"Visi \u012Frengini\u0173 ir gyv\u016Bn\u0173 duomenys"
,16:"Alle enhets- og dyredata",17:"Wszystkie dane urz\u0105dze\u0144 i zwierz\u0105t"
,18:"Todos os dados de dispositivos e animais",19:"Toate datele dispozitivelor \u0219i animalelor"
,20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 "+
"\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",27:"Vsi podatki o napravah in \u017Eivalih"
,21:"Todos los datos de dispositivos y animales",22:"Alla enhets- och djurdata",
23:"T\xFCm cihaz ve\nhayvan verileri",24:"\u0412\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457\u0432 "+
"\u0442\u0430 \u0442\u0432\u0430\u0440\u0438\u043D"};C.DeviceDataOnly={1:"Podaci ure\u0111aja samo"
,2:"\u0421\u0430\u043C\u043E \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E"
,3:"\u50C5\u9650\u8A2D\u5099\u6578\u64DA",25:"Podaci ure\u0111aja samo",4:"Data za\u0159\xEDzen\xED pouze"
,5:"Enhedsdata kun",0:"Device data only",6:"Apparaatgegevens alleen",7:"Ainult seadme andmed"
,8:"Vain laitetiedot",9:"Donn\xE9es de l\'appareil uniquement",10:"Nur Ger\xE4tedaten"
,11:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BC\u03CC\u03BD\u03BF",12:"K\xE9sz\xFCl\xE9kadatok csak",13:"Dati del dispositivo solo"
,15:"Ier\u012Bces dati tikai",26:"\u012Erenginio duomenys tik",16:"Enhetsdata bare"
,17:"Dane urz\u0105dzenia tylko",18:"Dados do dispositivo apenas",19:"Datele dispozitivului numai"
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0442\u043E\u043B\u044C\u043A\u043E",27:"Podatki naprave samo",21:"S\xF3lo datos del dispositivo"
,22:"Enbart enhetsdata",23:"Yaln\u0131zca cihaz verileri",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u043B\u0438\u0448\u0435"};C.BiH={1:"upravlja\u010Dki program ure\u0111aja USB C"
,2:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"USB C",3:"USB C \u88DD\u7F6E\u9A45\u52D5\u7A0B\u5F0F",25:"Upravlja\u010Dki program za USB C ure\u0111aj"
,4:"Ovlada\u010D za\u0159\xEDzen\xED USB C",5:"Enhedsdriver USB C",0:"Device driver USB C"
,6:"Apparaatstuurprogramma USB C",7:"Seadme draiver USB C",8:"Laiteohjain USB C"
,9:"Pilote du dispositif USB C",10:"Ger\xE4tetreiber USB C",11:"\u039F\u03B4\u03B7\u03B3\u03CC\u03C2 USB C \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"USB C eszk\xF6zmeghajt\xF3",13:"Driver USB C",15:"Ier\u012Bces draiveris USB C"
,26:"USB C \u012Frenginio tvarkykl\u0117",16:"Enhets driver USBC",17:"Sterownik urz\u0105dzenia USB C"
,18:"Driver de dispositivo USB C",19:"Driver pentru dispozitiv USB C",20:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"USB C",27:"Gonilnik naprave USB C",21:"Controlador de dispositivo USB C",22:"Enhetsdrivrutin USB C"
,23:"Ayg\u0131t s\xFCr\xFCc\xFCs\xFC USB C",24:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u0437 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"USB C"};C.A6y={1:"upravlja\u010Dki program ure\u0111aja",2:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,3:"\u88DD\u7F6E\u9A45\u52D5\u7A0B\u5F0F",25:"Upravlja\u010Dki programi ure\u0111aja"
,4:"Ovlada\u010De za\u0159\xEDzen\xED",5:"Enhedsdrivere",0:"Device drivers",6:"Apparaatstuurprogramma\'s"
,7:"Seadme draiverid",8:"Laiteajurit",9:"Pilote du dispositif",10:"Ger\xE4tetreiber"
,11:"\u039F\u03B4\u03B7\u03B3\u03BF\u03AF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"Eszk\xF6zmeghajt\xF3k",13:"Driver dei dispositivi",15:"Ier\u012B\u010Du draiveri"
,26:"\u012Erenginio tvarkykl\u0117s",16:"Enhets drivere",17:"Sterowniki urz\u0105dze\u0144"
,18:"Drivers de dispositivos",19:"Drivere pentru dispozitive",20:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,27:"Gonilniki naprav",21:"Controladores de dispositivo",22:"Enhetsdrivrutiner",
23:"Ayg\u0131t s\xFCr\xFCc\xFCleri",24:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.Difficult={1:"te\u0161ko",2:"\u0422\u0440\u0443\u0434\u043D\u043E",3:"\u56F0\u96E3"
,25:"Te\u0161ko",4:"T\u011B\u017Ek\xFD",5:"Sv\xE6r",0:"Difficult",6:"Moeilijk",7:
"Keeruline",8:"Vaikea",9:"Difficile",10:"Schwer",11:"\u0394\u03CD\u03C3\u03BA\u03BF\u03BB\u03BF"
,12:"Neh\xE9z",13:"Difficile",15:"Gr\u016Bti",26:"Sunku",16:"Vanskelig",17:"Trudne"
,18:"Dif\xEDcil",19:"Dificil",20:"\u0422\u0440\u0443\u0434\u043D\u043E",27:"Te\u017Eko"
,21:"Dexter",22:"Sv\xE5r",23:"Zor",24:"\u0412\u0430\u0436\u043A\u043E"};C.Ez={1:
"broj",2:"\u0446\u0438\u0444\u0440\u0430",3:"\u4F4D\u6578",25:"brojka",4:"\u010C\xEDslice"
,5:"ciffer",0:"digit",6:"Cijfer",7:"number",8:"Numero",9:"chiffre",10:"Ziffer",11:
"\u03A8\u03B7\u03C6\u03AF\u03BF",12:"sz\xE1mjegy",13:"cifra",15:"cipars",26:"skaitmuo"
,16:"Siffer",17:"cyfra",18:"d\xEDgito",19:"cifr\u0103",20:"\u0426\u0438\u0444\u0440\u0430"
,27:"\u0161tevilka",21:"d\xEDgito",22:"siffra",23:"Hane",24:"\u0426\u0438\u0444\u0440\u0430"
};C.OK={1:"brojevi",2:"\u0446\u0438\u0444\u0440\u0438",3:"\u6578\u5B57",25:"brojevi"
,4:"\u010C\xEDslice",5:"cifre",0:"digits",6:"Cijfers",7:"numbrid",8:"Numerot",9:
"chiffres",10:"Ziffern",11:"\u03A8\u03B7\u03C6\u03AF\u03B1",12:"sz\xE1mjegyek",13:
"cifre",15:"cipari",26:"skaitmenys",16:"Sifre",17:"cyfry",18:"d\xEDgitos",19:"cifre"
,20:"\u0426\u0438\u0444\u0440\u044B",27:"\u0161tevilke",21:"d\xEDgitos",22:"siffror"
,23:"Say\u0131lar",24:"\u0426\u0438\u0444\u0440\u0438"};C.AqN={1:"Novi ID: brojevi"
,2:"\u0411\u0440\u043E\u0439 \u0446\u0438\u0444\u0440\u0438 \u0437\u0430 \u043D\u043E\u0432 "+
"\u2116",3:"\u65B0ID\u7684\u6578\u5B57",25:"Znamenke novog osobnog dokumenta",4:
"\u010C\xEDslice nov\xE9ho ID",5:"Cifre af nyt ID",0:"Digits of new ID",6:"Cijfer van nieuw ID"
,7:"Uue ID numbrid",8:"Uusi ID-numero",9:"Chiffres du nouvel ID",10:"Neue ID: L\xE4nge"
,11:"\u03A8\u03B7\u03C6\u03AF\u03B1 \u03BD\u03AD\u03B1\u03C2 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2"
,12:"\xDAj azonos\xEDt\xF3 sz\xE1mjegyei",13:"Cifre del nuovo ID",15:"Jaun\u0101s ID cipari"
,26:"Skaitmenys naujojo ID",16:"Sifre i ny ID",17:"Cyfry nowego identyfikatora",
18:"D\xEDgitos do novo ID",19:"Cifrele noului ID",20:"\u041D\u043E\u0432\u044B\u0439\u2116:\u0434\u043B\u0438\u043D\u0430"
,27:"\u0160tevilke nove osebne izkaznice",21:"D\xEDgitos de ID nueva",22:"Siffror f\xF6r nytt ID"
,23:"Yeni ID say\u0131lar\u0131",24:"\u041D\u043E\u0432\u0438\u0439\u2116:\u0434\u043E\u0432\u0436\u0438\u043D\u0430"
};C.A6A={1:"Direktni pozivi funkcija",2:"\u0414\u0438\u0440\u0435\u043A\u0442\u043D\u0438 \u0438\u0437\u0432\u0438\u043A\u0432\u0430\u043D\u0438\u044F "+
"\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438",3:"\u76F4\u63A5\u51FD\u6578\u547C\u53EB"
,25:"Izravni pozivi funkcija",4:"P\u0159\xEDm\xE9 vol\xE1n\xED funkc\xED",5:"Direkte funktionskald"
,0:"Direct function calls",6:"Directe functieaanroepen",7:"Otsesed funktsioonikutsed"
,8:"Suorat toiminnot",9:"Fonctions directes",10:"Direktfunktionen",11:"\u0386\u03BC\u03B5\u03C3\u03B5\u03C2 \u03BA\u03BB\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03C3\u03C5\u03BD\u03B1\u03C1\u03C4\u03AE\u03C3\u03B5\u03C9\u03BD",12:"K\xF6zvetlen f\xFCggv\xE9nyh\xEDv\xE1sok"
,13:"Chiamate dirette di funzione",15:"Tie\u0161ie funkciju izsaukumi",26:"Tiesioginiai funkcij\u0173 i\u0161kvietimai"
,16:"Direkte funksjonskall",17:"Bezpo\u015Brednie wywo\u0142ania funkcji",18:"Chamadas diretas de fun\xE7\xE3o"
,19:"Apeluri directe ale func\u021Biei",20:"\u041F\u0440\u044F\u043C\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B "+
"\u0444\u0443\u043D\u043A\u0446\u0438\u0439",27:"Neposredni klici funkcij",22:"Direkta funktionsanrop"
,23:"Do\u011Frudan i\u015Flev \xE7a\u011Fr\u0131lar\u0131",24:"\u041F\u0440\u044F\u043C\u0456 \u0432\u0438\u043A\u043B\u0438\u043A\u0438 "+
"\u0444\u0443\u043D\u043A\u0446\u0456\u0439"};C.A6B={1:"Onemogu\u0107i sve + resetuj redoslijed"
,2:"\u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435 "+"\u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 + \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430",3:"\u505C\u7528\u6240\u6709 + \u91CD\u7F6E\u9806\u5E8F"
,25:"Onemogu\u0107i sve + resetiraj redoslijed",4:"Zak\xE1zat v\u0161e + obnovit po\u0159ad\xED"
,5:"Deaktiver alle + nulstil ordre",0:"Disable all + reset order",6:"Deactiveer alles en reset"
,7:"Keela k\xF5ik + l\xE4htesta j\xE4rjekord",8:"Poista kaikki arvot k\xE4yt\xF6st\xE4"
,9:"D\xE9sactiver toutes les valeurs",10:"Alle Werte deaktivieren",11:"\u0391\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03CC\u03BB\u03C9\u03BD + \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC "+
"\u03C0\u03B1\u03C1\u03B1\u03B3\u03B3\u03B5\u03BB\u03AF\u03B1\u03C2",12:"Kikapcsol\xE1s minden + \xFAjraind\xEDt\xE1si sorrend"
,13:"Disattiva tutto + reimposta ordine",15:"Atsp\u0113jot visu + atiestat\u012Bt sec\u012Bbu"
,26:"I\u0161jungti visk\u0105 + atstatyti eil\u0119",16:"Deaktiver alle + tilbakestill rekkef\xF8lge"
,17:"Wy\u0142\u0105cz wszystko + zresetuj kolejno\u015B\u0107",18:"Desativar tudo + redefinir ordem"
,19:"Dezactiveaz\u0103 tot + reini\u021Bializeaz\u0103 ordinea",20:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0441\u0435 "+
"+ \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
,27:"Onemogo\u010Di vse + ponastavi vrstni red",21:"Desactivar todo + restablecer orden"
,22:"Inaktivera alla + \xE5terst\xE4ll ordning",23:"T\xFCm\xFCn\xFC devre d\u0131\u015F\u0131 b\u0131rak + sipari\u015Fi s\u0131f\u0131rla"
,24:"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0432\u0441\u0435 + "+"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
};C.Display={1:"Prikaz",2:"\u0414\u0438\u0441\u043F\u043B\u0435\u0439",3:"\u986F\u793A\u5668"
,25:"Prikaz",4:"Zobrazit",5:"Sk\xE6rm",0:"Display",7:"Kuva",8:"N\xE4ytt\xF6",9:"Pr\xE9sentation"
,10:"Darstellung",11:"\u039F\u03B8\u03CC\u03BD\u03B7",12:"Kijelz\u0151",13:"Schermo"
,15:"Displejs",26:"Ekranas",16:"Skjerm",17:"Wy\u015Bwietlacz",18:"Exibi\xE7\xE3o"
,19:"Afi\u0219aj",20:"\u0414\u0438\u0441\u043F\u043B\u0435\u0439",27:"Zaslon",21:
"Visualizaci\xF3n",22:"Visa",23:"G\xF6r\xFCnt\xFCle",24:"\u0414\u0438\u0441\u043F\u043B\u0435\u0439"
};C.BiK={1:"prikazane informacije",2:"\u041F\u043E\u043A\u0430\u0437\u0432\u0430\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,3:"\u986F\u793A\u7684\u8A0A\u606F",25:"Prikazane informacije o \u017Eivotinji",
4:"Zobrazen\xED info",5:"Viste dyreoplysninger",0:"Displayed animal info",6:"Weergegeven informatie"
,7:"Kuvatava looma info",8:"N\xE4ytetyt tiedot",9:"Informations affich\xE9es",10:
"Angezeigte Tierinfo",11:"\u0395\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2",12:"Megjelen\xEDtett \xE1llatinf\xF3"
,13:"Informazioni sull\'animale visualizzato",15:"Par\u0101d\u012Bta dz\u012Bvnieka inform\u0101cija"
,26:"Rodyti gyv\u016Bno informacija",16:"Vist info",17:"Wy\u015Bwietlone informacje o zwierz\u0119ciu"
,18:"Informa\xE7\xF5es sobre o animal exibido",19:"Informa\u021Bii despre animal afi\u0219ate"
,20:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u0430\u044F "+
"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",27:"Prikazane informacije o \u017Eivali"
,21:"Informaci\xF3n mostrada",22:"Visad djurinfo",23:"G\xF6r\xFCnt\xFClenen hayvan bilgileri"
,24:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0430 "+
"\u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"};C.BiL={1:"Informacije prikazane u listi"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0441\u0435 \u043F\u043E\u043A\u0430\u0437\u0432\u0430 \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430"
,3:"\u8CC7\u8A0A\u986F\u793A\u65BC\u5217\u8868\u4E2D",25:"Informacije prikazane u popisu"
,4:"Informace zobrazen\xE9 v seznamu",5:"Informationer vises p\xE5 liste",0:"Info displayed in list"
,6:"Info weergegeven in lijst",7:"Teave on kuvatud loendina",9:"Informations affich\xE9es sous forme de liste"
,10:"In Liste gezeigte Info",11:"\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 "+
"\u03C3\u03B5 \u03BB\u03AF\u03C3\u03C4\u03B1",12:"Inform\xE1ci\xF3k megjelen\xEDtve list\xE1ban"
,13:"Informazioni visualizzate in elenco",15:"Inform\u0101cija att\u0113lota sarakst\u0101"
,26:"Informacija pateikiama s\u0105ra\u0161e",16:"Informasjon vist i liste",17:"Informacje wy\u015Bwietlone na li\u015Bcie"
,18:"Informa\xE7\xF5es exibidas em lista",19:"Informa\u021Bii afi\u0219ate \xEEn list\u0103"
,20:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u0430\u044F "+
"\u0432 \u0441\u043F\u0438\u0441\u043A\u0435",27:"Informacije prikazane na seznamu"
,22:"Information visas i lista",23:"Listede g\xF6r\xFCnt\xFClenen bilgiler",24:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430 "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443"};C.Lg={1:"obavljeno",2:"\u0413\u043E\u0442\u043E\u0432\u043E"
,3:"\u5B8C\u6210\u4E86",25:"gotovo",4:"hotovo",5:"f\xE6rdig",0:"done",6:"klaar",
7:"Tehtud",8:"Tehty",9:"fait",10:"erledigt",11:"\u0388\u03B3\u03B9\u03BD\u03B5",
12:"k\xE9sz",13:"fatto",15:"pabeigts",26:"padaryta",16:"Ferdig",17:"zrobione",18:
"feito",19:"gata",20:"\u0433\u043E\u0442\u043E\u0432\u043E",27:"opravljeno",21:"hecho"
,22:"klar",23:"Tamamland\u0131",24:"\u0433\u043E\u0442\u043E\u0432\u043E"};C.AOc={
1:"Zasu\u0161eno",2:"\u041F\u0440\u0435\u0441\u0443\u0448\u0435\u043D\u0438",3:"\u4E7E\u71E5\u7684"
,25:"Osu\u0161en",4:"Usu\u0161en\xFD",5:"Aft\xF8rret",0:"Dried-off",6:"Drooggezet"
,7:"Kinnij\xE4etud",8:"Umpeutettu",9:"Tarie",10:"Trocken~stehend",11:"\u03A3\u03C4\u03B5\u03B9\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5"
,12:"Kisz\xE1radt",13:"Asciugato",15:"Iz\u017E\u0101v\u0113ts",26:"I\u0161d\u017Ei\u016Bv\u0119s"
,16:"T\xF8rket-av",17:"Wysuszony",18:"Seco",19:"Uscat",20:"\u0421\u0443\u0445~\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435"
,27:"Posu\u0161en",21:"Secada",22:"Avtorkad",23:"Kuru-Kapal\u0131",24:"\u0421\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456"
};C.Bi5={1:"upravlja\u010Dki program monitora",2:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u0437\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439"
,3:"\u986F\u793A\u5361\u9A45\u52D5\u7A0B\u5F0F",25:"Upravlja\u010Dki program za prikaz"
,4:"Ovlada\u010D zobrazov\xE1n\xED",5:"Sk\xE6rmdriver",0:"Display driver",7:"Ekraani draiver"
,8:"N\xE4yt\xF6nohjain",9:"Pilote d\'\xE9cran",10:"Bildschirmtreiber",11:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03BF\u03B4\u03B7\u03B3\u03BF\u03CD"
,12:"Kijelz\u0151illeszt\u0151 program",13:"Driver del display",15:"Displeja draiveris"
,26:"Ekrano tvarkykl\u0117",16:"Skjermdriver",17:"Sterownik wy\u015Bwietlacza",18:
"Controlador de v\xEDdeo",19:"Driverul de afi\u0219are",20:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430"
,27:"Prikazovalni gonilnik",21:"Controlador de pantalla",22:"Sk\xE4rmdrivrutin",
23:"G\xF6r\xFCnt\xFCleyici S\xFCr\xFCc\xFCs\xFC",24:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u0435\u043A\u0440\u0430\u043D\u0443"
};C.Bi6={1:"suho",2:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u0438"
,3:"\u4E7E\u71E5",25:"Suho",4:"Such\xFD",5:"T\xF8r",0:"Dry",6:"Droog",7:"Kinnij\xE4etud"
,8:"Ummessa",9:"Tarie",10:"T",11:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03B1",12:"Sz\xE1raz"
,13:"Secco",15:"Sausa",26:"Sausas",16:"T\xF8rke",17:"Suchy",18:"Seco",19:"Uscat"
,20:"\u0421\u0443\u0445\u043E\u0439",27:"Suho",21:"Seca",22:"Torrt",23:"Kuru",24:
"\u0421\u0443\u0445\u0438\u0439"};C.A6L={1:"zasu\u0161ene krave",2:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u0438 \u043A\u0440\u0430\u0432\u0438"
,3:"\u4E7E\u4E73\u725B",25:"Suhe krave",4:"Such\xE9 kr\xE1vy",5:"T\xF8rre k\xF8er"
,0:"Dry cows",6:"Droge koeien",7:"Kinnislehmad",8:"Umpeutetut",9:"Vaches taries"
,10:"Trockensteher",11:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03B5\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B8\u03B5\u03C2"
,12:"Sz\xE1raz teh\xE9n",13:"Mucche asciutte",15:"Sauss govis",26:"Sausos karv\u0117s"
,16:"Gjelskyr",17:"Suche krowy",18:"Vacas secas",19:"Vaci uscate",20:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435"
,27:"Suhe krave",21:"Vacas secas",22:"Torra kor",23:"S\xFCtten Kesilmi\u015F \u0130nekler(Kuru)"
,24:"\u0421\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456"};C.DryOff={1:
"zasu\u0161iti",2:"\u041F\u0440\u0435\u0441\u0443\u0448\u0430\u0432\u0430\u043D\u0435"
,3:"\u64E6\u4E7E",25:"Osusi se",4:"Usu\u0161it se",5:"T\xF8r af",0:"Dry off",6:"Droog zetten"
,7:"Kinnij\xE4tmine",8:"Umpeutus",9:"Tarissement",10:"Trocken~stellen",11:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03C9\u03C3\u03B5"
,12:"Lesz\xE1r\xEDt",13:"Asciugati",15:"Nosusin\u0101ties",26:"Nusausinkite",16:
"T\xF8rk-av",17:"Wysusz si\u0119",18:"Secar-se",19:"Usc\u0103-te",20:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
,27:"Osusi se",21:"Secar",22:"Torka av",23:"Kuru Kapal\u0131",24:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438"
};C.Bi7={1:"EEPROM mati\u010Dna plo\u010Da",3:"EEPROM \u4E3B\u6A5F\u677F",25:"EEPROM mati\u010Dna plo\u010Da"
,4:"EEPROM z\xE1kladn\xED deska",5:"EEPROM-hovedkort",0:"EEPROM Mainboard",7:"EEPROM emaplaat"
,8:"EEPROM -emolevy",9:"EEPROM carte -m\xE8re",11:"\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03C0\u03BB\u03B1\u03BA\u03AD\u03C4\u03B1 "+
"EEPROM",12:"EEPROM alaplap",13:"Scheda madre EEPROM",15:"EEPROM galven\u0101 plate"
,26:"EEPROM pagrindin\u0117 plok\u0161t\u0117",16:"EEPROM hovedkort",17:"P\u0142yta g\u0142\xF3wna EEPROM"
,18:"Placa-m\xE3e EEPROM",19:"Plac\u0103 de baz\u0103 EEPROM",20:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430 "+
"EEPROM",27:"EEPROM osnovna plo\u0161\u010Da",21:"EEPROM Placa principal",22:"EEPROM moderkort"
,23:"EEPROM Anakart",24:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0430 \u043F\u043B\u0430\u0442\u0430 "+
"EEPROM"};C.Bi8={1:"EEPROMplo\u010Da",3:"EEPROM \u71D2\u9304\u677F",0:"EEPROM Torchboard"
,9:"EEPROM carte (lumi\xE8re)",11:"\u03A0\u03BB\u03B1\u03BA\u03AD\u03C4\u03B1 \u03C6\u03B1\u03BA\u03BF\u03CD "+
"EEPROM",13:"Memoria EEPROM Torchboard",15:"EEPROM lukturis",16:"EEPROM Datakort"
,21:"EEPROM Placa de antorcha",23:"EEPROM Me\u015Fale Tahtas\u0131"};C.A6M={3:"\u9000\u51FA"
,4:"\xDAnik",0:"ESC",11:"\u0394\u03B9\u03B1\u03C6\u03C5\u03B3\u03AE",20:"\u042D\u0421\u041A"
,24:"\u0415\u0421\u041A"};C.ACY={1:"broj u\u0161ne markice",2:"\u0423\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430"
,3:"\u8033\u6A19\u865F\u78BC",25:"Broj markice za uho",4:"\u010C\xEDslo u\u0161n\xEDho \u0161t\xEDtku"
,5:"\xD8rem\xE6rkenummer",0:"Ear tag number",6:"Oormerknummer",7:"K\xF5rvam\xE4rgi number"
,8:"Korvamerkki numero",9:"\u2116 de la mar~que auriculaire",10:"Ohrmarkennr.",11:
"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5"
,12:"F\xFCljel sz\xE1ma",13:"Numero del marchio auricolare",15:"Auskari\u0146a numurs"
,26:"Auskar\u0173 numeris",16:"\u2116 p\xE5 \xF8remerke",17:"Numer kolczyka w uchu"
,18:"N\xFAmero de brinco",19:"Num\u0103r de crotalie",20:"\u041D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438"
,27:"\u0160tevilka u\u0161ne znamke",21:"N\xFAmero de etiqueta de oreja",22:"\xD6ronm\xE4rkesnummer"
,23:"Kulak K\xFCpe Numaras\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"
};C.Easy={1:"lako",2:"\u041B\u0435\u0441\u043D\u043E",3:"\u5BB9\u6613",25:"Lako"
,4:"Snadn\xE9",5:"Nem",0:"Easy",6:"Makkelijk",7:"Lihtne",8:"Helppo",9:"Facile",10:
"Leicht",11:"\u0395\u03CD\u03BA\u03BF\u03BB\u03BF",12:"K\xF6nny\u0171",13:"Facile"
,15:"Viegli",26:"Lengva",16:"Lett",17:"\u0141atwy (masculine) / \u0141atwa (feminine) / \u0141atwe (neuter)"
,18:"F\xE1cil",19:"U\u0219or",20:"\u043B\u0435\u0433\u043A\u043E",27:"Lahko",21:
"F\xE1cil",22:"L\xE4tt",23:"Kolay",24:"\u041B\u0435\u0433\u043A\u043E"};C.Edit={
1:"obrada",2:"\u041F\u0440\u043E\u043C\u0435\u043D\u0438",3:"\u7DE8\u8F2F",25:"Uredi"
,4:"Upravit",5:"Rediger",0:"Edit",6:"Bewerken",7:"Muuda",8:"Muokkaa",9:"Changer"
,10:"Bearbeiten",11:"\u0394\u03B9\u03CC\u03C1\u03B8\u03C9\u03C3\u03B7",12:"Szerkeszt"
,13:"Modifica",15:"Redi\u0123\u0113t",26:"Redaguoti",16:"Rediger",17:"Edytuj",18:
"Editar",19:"Edita\u021Bi",20:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
,27:"Uredi",21:"Editar",22:"Redigera",23:"D\xFCzenle",24:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438"
};C.A6N={1:"Uredi ozna\u010Deno obavje\u0161tenje",2:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0430\u0442\u0430 \u0431\u0435\u043B\u0435\u0436\u043A\u0430"
,3:"\u7DE8\u8F2F\u6A19\u8A18\u901A\u77E5",25:"Uredi ozna\u010Denu obavijest",4:"Upravit ozna\u010Den\xE9 ozn\xE1men\xED"
,5:"Rediger markeret meddelelse",0:"Edit marked notice",6:"Voeg gemarkeerde melding toe"
,7:"Muuda m\xE4rgitud teadet",8:"Muokkaa merkitty\xE4 ilmoitusta",9:"Modifier la d\xE9claration marqu\xE9e"
,10:"Mark. Meldung bearbeiten",11:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03B1\u03C3\u03BC\u03AD\u03BD\u03B7\u03C2 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2",12:"Jel\xF6lt \xE9rtes\xEDt\xE9s szerkeszt\xE9se"
,13:"Modifica avviso contrassegnato",15:"Redi\u0123\u0113t atz\u012Bm\u0113to pazi\u0146ojumu"
,26:"Redaguoti pa\u017Eym\u0117t\u0105 prane\u0161im\u0105",16:"Rediger merket varsel"
,17:"Edytuj oznaczone powiadomienie",18:"Editar aviso marcado",19:"Notificare marcat\u0103 pentru editare"
,20:"\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u043E\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435"
,27:"Uredi ozna\u010Deno obvestilo",21:"Editar notificaci\xF3n marcada",22:"Redigera markerat meddelande"
,23:"\u0130\u015Faretli bildirimi d\xFCzenle",24:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"};C.A6O={
1:"obrada",2:"\u041F\u0440\u043E\u043C\u0435\u043D\u0438",3:"\u7DE8\u8F2F\u503C"
,25:"Uredi",4:"Upravit",5:"Redig\xE9r",0:"Edit",6:"Veranderen",7:"Muuda",8:"Muokkaa"
,9:"Changer",10:"\xC4ndern",11:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1"
,12:"Szerkeszt",13:"Modifica",15:"Redi\u0123\u0113t",26:"Redaguoti",16:"Rediger"
,17:"Edytuj",18:"Editar",19:"Edita\u021Bi",20:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
,27:"Uredi",21:"Modificar",22:"Redigera",23:"D\xFCzenle",24:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438"
};C.Bi_={1:"elektronska u\u0161na markica",2:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0443\u0448\u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0430",3:"\u96FB\u5B50\u8033\u6A19",25:"Elektroni\u010Dka markica za uho"
,4:"Elektronick\xE1 u\u0161n\xED zn\xE1mka",5:"Elektronisk \xF8rem\xE6rke",0:"Electronic eartag"
,6:"Elektronische Oortag",7:"Elektrooniline k\xF5rvam\xE4rk",8:"Elektr. korvamerkki"
,9:"Boucle \xE9lectronique",10:"Elektronische Ohrmarke",11:"\u0397\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03CC \u03B5\u03BD\u03CE\u03C4\u03B9\u03BF"
,12:"Elektronikus f\xFCljelz\u0151",13:"Marchio elettronico auricolare",15:"Elektronisk\u0101 auskarpa"
,26:"Elektronin\u0117 auskar\u0117",16:"Elektronisk \xF8remerke",17:"Elektroniczna kolczyk do ucha"
,18:"Brinco eletr\xF4nico",19:"Crotalie electronic\u0103",20:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0443\u0448\u043D\u0430\u044F "+
"\u0431\u0438\u0440\u043A\u0430",27:"Elektronska u\u0161esna znamka",22:"Elektronisk \xF6ronm\xE4rke"
,23:"Elektronik kulak etiketi",24:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u0432\u0443\u0448\u043D\u0430 "+
"\u0431\u0456\u0440\u043A\u0430"};C.AOk={1:"Prazna lista \u017Eivotinja: nisu prona\u0111ene \u017Eivotinje po zadatim "+
"parametrima pretrage",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438:\n\u043D\u0435 \u0441\u0430 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438 "+
"\u0442\u0435\u043A\u0443\u0449\u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 "+
"\u0437\u0430 \u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0435",3:"\u7A7A\u7684\u52D5\u7269\u6E05\u55AE\uFF1A\n\u672A\u627E\u5230\u7B26\u5408\u7576\u524D\u7BE9\u9078\u689D\u4EF6\u7684\u52D5\u7269"
,25:"Prazan popis \u017Eivotinja:\nnema prona\u0111enih \u017Eivotinja koje "+"odgovaraju trenutno primijenjenim kriterijima za filtriranje."
,4:"Pr\xE1zdn\xFD seznam zv\xED\u0159at:\nnebyla nalezena \u017E\xE1dn\xE1 "+"zv\xED\u0159ata odpov\xEDdaj\xEDc\xED aktu\xE1ln\u011B pou\u017Eit\xFDm "+
"krit\xE9ri\xEDm filtrov\xE1n\xED.",5:"Tom dyreliste:\ningen matchende dyr fundet med de nuv\xE6rende filterkriterier "+
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
"sz\u0171r\xE9si krit\xE9riumok szerint",13:"Lista di animali vuota:\nnessun animale corrispondente trovato con i criteri "+
"di filtro attualmente applicati.",15:"Tuk\u0161s dz\u012Bvnieku saraksts:\nnav atrasts neviens atbilsto\u0161s "+
"dz\u012Bvnieks ar pa\u0161reiz piem\u0113roto filtr\u0113\u0161anas krit\u0113riju."
,26:"Tu\u0161\u010Dias gyv\u016Bn\u0173 s\u0105ra\u0161as:\nn\u0117ra rast\u0173 "+
"gyv\u016Bn\u0173, atitinkan\u010Di\u0173 taikytus filtravimo kriterijus.",16:"Tom dyreliste:\ningen samsvarende dyr funnet med bruk av gjeldende filterkriterier"
,17:"Pusta lista zwierz\u0105t:\nnie znaleziono pasuj\u0105cych zwierz\u0105t "+
"przy zastosowanych obecnych kryteriach filtrowania.",18:"Lista de animais vazia:\nnenhum animal correspondente encontrado com os "+
"crit\xE9rios de filtro atuais aplicados.",19:"List\u0103 goal\u0103 de animale:\nnu s-au g\u0103sit animale care s\u0103 "+
"corespund\u0103 criteriilor actuale de filtrare aplicate.",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043F\u0443\u0441\u0442:\n\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 "+
"\u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0443\u044E\u0449\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",27:"Prazen seznam \u017Eivali:\nni najdenih ustreznih \u017Eivali glede na "+
"uporabljena merila filtra",21:"Lista de animales vac\xEDa:\nno se encontraron animales coincidentes con "+
"los criterios de filtro actuales aplicados",22:"Tom djurlista:\ninga matchande djur hittades med nuvarande filterkriterier "+
"till\xE4mpade.",23:"Bo\u015F hayvan listesi:\nmevcut filtre kriterlerinin uyguland\u0131\u011F\u0131 "+
"e\u015Fle\u015Fen hayvan bulunamad\u0131",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043F\u0443\u0441\u0442\u0438\u0439:\n\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 "+
"\u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0447\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0456\u044F\u043C \u043F\u043E\u0448\u0443\u043A\u0443, "+
"\u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.AOl={1:"Prazna lista \u017Eivotinja: nisu prona\u0111ene \u017Eivotinje po zadatim "+
"parametrima pretrage",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438:\n\u043D\u0435 \u0441\u0430 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D "+
"\u0442\u0435\u043A\u0443\u0449 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 "+
"\u0437\u0430 \u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0435",3:"\u7A7A\u7684\u52D5\u7269\u5217\u8868\uFF1A\n\u672A\u627E\u5230\u7B26\u5408\u7576\u524D\u7BE9\u9078\u689D\u4EF6\u7684\u52D5\u7269"
,25:"Prazan popis \u017Eivotinja:\nnijedna \u017Eivotinja nije prona\u0111ena "+
"s primijenjenim trenutnim kriterijem filtriranja.",4:"Pr\xE1zdn\xFD seznam zv\xED\u0159at:\nnebyla nalezena \u017E\xE1dn\xE1 "+
"zv\xED\u0159ata odpov\xEDdaj\xEDc\xED aktu\xE1ln\u011B pou\u017Eit\xE9mu "+"filtru."
,5:"Tom dyreliste:\ningen matchende dyr fundet med det nuv\xE6rende filterkriterium "+
"anvendt",0:"Empty animal list:\nno matching animals found with current filter criterion "+
"applied",6:"lege koeien lijst geen dier gevonden met deze criteria",7:"T\xFChjenda looma nimekiri:\nei leitud kriteeriumile vastavat looma"
,8:"Tyhj\xE4 el\xE4inluettelo:\nvastaavia el\xE4imi\xE4 ei l\xF6ydy, jos nykyinen "+
"suodatuskriteeri on k\xE4yt\xF6ss\xE4",9:"Liste d\u2019animaux vide\xA0:\naucun animal trouv\xE9 avec les crit\xE8res "+
"de filtrage actuels appliqu\xE9s",10:"Leere Tierliste:\nmit dem aktuell vereinbarten Filter~kriterium wurden "+
"keine Tiere gefunden",11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD:\n\u03B4\u03AD\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 "+
"\u03C4\u03B1 \u03B4\u03BF\u03B8\u03AD\u03BD \u03BA\u03C1\u03B9\u03C4\u03AE\u03C1\u03B9\u03BF "+
"\u03C6\u03B9\u03BB\u03C4\u03C1\u03B1\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03BF\u03C2"
,12:"\xDCres \xE1llatlista:\nnem tal\xE1lhat\xF3 egyez\u0151 \xE1llat az alkalmazott "+
"sz\u0171r\xE9si krit\xE9riumok alapj\xE1n",13:"Lista di animali vuota:\nnessun animale corrispondente trovato con il "+
"criterio di filtro attualmente applicato.",15:"Tuk\u0161s dz\u012Bvnieku saraksts:\nnav atrasti atbilsto\u0161i dz\u012Bvnieki "+
"ar pa\u0161reiz piem\u0113roto filtra krit\u0113riju.",26:"Tu\u0161\u010Dias gyv\u016Bn\u0173 s\u0105ra\u0161as:\nn\u0117ra rast\u0173 "+
"atitinkan\u010Di\u0173 gyv\u016Bn\u0173 su taikomu esamu filtravimo kriterijumi."
,16:"Tom dyreliste:\ningen samsvarende dyr funnet med bruk av gjeldende filterkriterium"
,17:"Pusta lista zwierz\u0105t:\nnie znaleziono pasuj\u0105cych zwierz\u0105t "+
"przy zastosowaniu obecnego kryterium filtrowania.",18:"Lista de animais vazia:\nnenhum animal encontrado com o crit\xE9rio de "+
"filtro atual aplicado.",19:"Lista de animale goal\u0103:\nniciun animal corespunz\u0103tor nu a fost "+
"g\u0103sit cu criteriul de filtrare aplicat curent.",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043F\u0443\u0441\u0442:\n\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 "+
"\u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0443\u044E\u0449\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",27:"Prazen seznam \u017Eivali:\nni najdenih \u017Eivali, ki ustrezajo trenutno "+
"uporabljenim kriterijem filtra.",21:"Lista de animales vac\xEDa:\nno se encontraron animales coincidentes con "+
"el criterio de filtro actual aplicado",22:"Tom djurlista:\ninga matchande djur hittades med det nuvarande filterkriteriet "+
"till\xE4mpat.",23:"Bo\u015F hayvan listesi:\nmevcut filtre kriteri uygulanm\u0131\u015F e\u015Fle\u015Fen "+
"hayvan bulunamad\u0131",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043F\u0443\u0441\u0442\u0438\u0439:\n\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 "+
"\u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0447\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0456\u044F\u043C \u043F\u043E\u0448\u0443\u043A\u0443, "+
"\u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.AqS={1:"Korak nazad"
,2:"\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 "+
"\u0432\u0441\u0438\u0447\u043A\u0438 + \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430",3:"\u5168\u90E8\u555F\u7528+\u91CD\u7F6E\u9806\u5E8F"
,25:"Omogu\u0107i sve + resetiraj redoslijed",4:"Povolit v\u0161e + resetovat po\u0159ad\xED"
,5:"Aktiv\xE9r alle + nulstil r\xE6kkef\xF8lge",0:"Enable all + reset order",6:"Schakel in + zet terug"
,7:"Luba k\xF5ik + l\xE4htesta k\xE4sk",8:"Ota k\xE4ytt\xF6\xF6n kaikki + nollausj\xE4rjestys"
,9:"R\xE9initialisation de l\u2019ordre",10:"Reihenfolge zur\xFCcksetzen",11:"\u0395\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03CC\u03BB\u03C9\u03BD + \u03B5\u03C0\u03B1\u03BD\u03B1\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",12:"Enged\xE9lyezd az \xF6sszeset + \xE1ll\xEDtsd vissza a sorrendet"
,13:"Abilita tutto + reimposta ordine",15:"Iesp\u0113jot visu + atiestat\u012Bt sec\u012Bbu"
,26:"\u012Ejungti visk\u0105 + atstatyti tvark\u0105",16:"Aktiver alle + tilbakestill rekkef\xF8lge"
,17:"W\u0142\u0105cz wszystko + zresetuj kolejno\u015B\u0107",18:"Ativar tudo + redefinir ordem"
,19:"Activeaz\u0103 tot + reseteaz\u0103 ordinea",20:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"
,27:"Omogo\u010Di vse + ponastavi vrstni red",21:"Restablecer orden",22:"Aktivera alla + \xE5terst\xE4ll ordning"
,23:"T\xFCm\xFCn\xFC etkinle\u015Ftir + sipari\u015Fi s\u0131f\u0131rla",24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0456\u0441\u0442\u044C"
};C.Bi$={1:"Unesite ID \u017Eivotinje ru\u010Dno",2:"\u0412\u044A\u0432\u0435\u0434\u0435\u0442\u0435 ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0440\u044A\u0447\u043D\u043E",3:"\u624B\u52D5\u8F38\u5165\u52D5\u7269ID",25:"Unesite ID \u017Eivotinje ru\u010Dno"
,4:"Zadejte ID zv\xED\u0159ete ru\u010Dn\u011B",5:"Indtast dyrets ID manuelt",0:
"Enter animal ID manually",6:"Diernummer handmatig geven",7:"Sisesta looma ID k\xE4sitsi"
,8:"El\xE4in nro. sy\xF6t\xE4 manuaalisesti",9:"Saisir manuellement le n\xB0 de l\'animal"
,10:"Tiernr. manuell eingeben",11:"\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B1 "+
"\u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5",12:"K\xE9rem, adja meg az \xE1llat azonos\xEDt\xF3j\xE1t k\xE9zzel."
,13:"Inserisci manualmente l\'ID dell\'animale",15:"Ievadiet dz\u012Bvnieka ID manu\u0101li"
,26:"\u012Eveskite gyv\u016Bno ID rankiniu b\u016Bdu",16:"Skriv inn dyre-ID manuelt"
,17:"Wprowad\u017A identyfikator zwierz\u0119cia r\u0119cznie",18:"Insira o ID do animal manualmente."
,19:"Introduce\u021Bi manual ID-ul animalului",20:"\u0412\u0432\u0435\u0441\u0442\u0438 ID \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0432\u0440\u0443\u0447\u043D\u0443\u044E",27:"Vnesite identifikacijsko \u0161tevilko \u017Eivali ro\u010Dno"
,21:"Ingresar ID del animal manualmente",22:"Ange djur-ID manuellt",23:"Hayvan kimli\u011Fini manuel olarak girin"
,24:"\u0423\u0432\u0435\u0441\u0442\u0438 ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0432\u0440\u0443\u0447\u043D\u0443"};C.Bja={1:"Aparat \u0107e pre\u0107i u modus mirovanja za {#} minute. Za ponovno pokretanje "+
"pritisnite bilo koje dugme.",2:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0449\u0435 \u0432\u043B\u0435\u0437\u0435 \u0432 \u0440\u0435\u0436\u0438\u043C "+
"\u043D\u0430 \u0437\u0430\u0441\u043F\u0438\u0432\u0430\u043D\u0435 \u0441\u043B\u0435\u0434 "+
"{#} \u043C\u0438\u043D\u0443\u0442\u0438. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 "+
"\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u0435\u043D \u043A\u043B\u0430\u0432\u0438\u0448, "+
"\u0437\u0430 \u0434\u0430 \u0432\u044A\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 "+
"\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u0430.",3:"\u88DD\u7F6E\u5C07\u5728 {#} \u5206\u9418\u5F8C\u9032\u5165\u7761\u7720\u6A21\u5F0F\u3002\u6309\u4EFB\u610F\u9375\u4EE5\u6062\u5FA9\u64CD\u4F5C\u3002"
,25:"Ure\u0111aj \u0107e u\u0107i u stanje mirovanja za {#} minuta. Pritisnite "+
"bilo koju tipku za nastavak rada.",4:"P\u0159echod do \u0159e\u017Eimu sp\xE1nku za {#} minut. Stisknut\xEDm "+
"libovoln\xE9 kl\xE1vesy pokra\u010Dujte v \u010Dinnosti.",5:"Enheden g\xE5r i dvale om {#} minutter. Tryk p\xE5 en hvilken som helst "+
"tast for at genoptage drift.",0:"Device will enter sleep mode in {#} minutes. Press any key to resume operation."
,6:"Apparaat word in {#} minuten in rustmodus gezet. Willekeurige toets drukken "+
"om verder te gaan.",7:"Seade l\xE4heb puhkeasendisse {#} min. p\xE4rast. K\xE4su t\xFChistamiseks "+
"vajuta suvalist nuppu.",8:"Laite siirtyy lepotilaan {#} minuutissa. Jatka k\xE4ytt\xF6\xE4 painamalla "+
"mit\xE4 tahansa n\xE4pp\xE4int\xE4.",9:"L\u2019appareil va entrer en mode veille en {#} minutes. Appuyez sur une "+
"touche pour continuer.",10:"Ger\xE4t wird in {#} Minuten in den Ruhezustand versetzt. Eine beliebige "+
"Taste dr\xFCcken, um fortzufahren.",11:"\u0397 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B8\u03B1 \u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03C3\u03B5 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03B1\u03BD\u03B1\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 "+
"\u03C3\u03B5 {#} \u03BB\u03B5\u03C0\u03C4\u03B1. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 "+
"\u03BF\u03C0\u03BF\u03B9\u03BF\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF "+
"\u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1.",12:
"Az eszk\xF6z {#} perc m\xFAlva alv\xF3 \xFCzemm\xF3dba l\xE9p. Nyomjon "+"meg b\xE1rmelyik gombot a m\u0171k\xF6d\xE9s folytat\xE1s\xE1hoz."
,13:"Il dispositivo entrer\xE0 in modalit\xE0 di sospensione tra {#} minuti. "+"Premere un tasto per riprendere il funzionamento."
,15:"Ier\u012Bce ieg\u0101s miega re\u017E\u012Bm\u0101 p\u0113c {#} min\u016Bt\u0113m. "+
"Nospiediet jebkuru tausti\u0146u, lai ats\u0101ktu darb\u012Bbu.",26:"\u012Erenginys pereis \u012F miego re\u017Eim\u0105 po {#} minu\u010Di\u0173. "+
"Paspauskite bet kur\u012F klavi\u0161\u0105, kad t\u0119stum\u0117te darb\u0105."
,16:"Enheten g\xE5r i hvilemodus om {#} minutter. Trykk p\xE5 hvilken som helst "+
"tast for \xE5 gjenoppta driften.",17:"Urz\u0105dzenie przejdzie w tryb u\u015Bpienia za {#} minut. Naci\u015Bnij "+
"dowolny klawisz, aby wznowi\u0107 dzia\u0142anie.",18:"O dispositivo entrar\xE1 em modo de espera em {#} minutos. Pressione qualquer "+
"tecla para retomar a opera\xE7\xE3o.",19:"Dispozitivul va intra \xEEn modul de repaus \xEEn {#} minute. Ap\u0103sa\u021Bi "+
"orice tast\u0103 pentru a relua func\u021Bionarea.",20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0439\u0434\u0435\u0442 "+
"\u0432 \u0440\u0435\u0436\u0438\u043C \u0441\u043D\u0430 \u0447\u0435\u0440\u0435\u0437 "+
"{#} \u043C\u0438\u043D\u0443\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 "+
"\u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0430\u0432\u0438\u0448\u0443 "+"\u0434\u043B\u044F \u0432\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F "+
"\u0440\u0430\u0431\u043E\u0442\u044B.",27:"Naprava bo pre\u0161la v na\u010Din spanja \u010Dez {#} minut. Pritisnite "+
"poljubno tipko za nadaljevanje delovanja.",21:"El dispositivo entrar\xE1 en modo de reposo dentro de {#} minutos. Pulse "+
"cualquier bot\xF3n para continuar.",22:"Enheten kommer att g\xE5 i vilol\xE4ge om {#} minuter. Tryck p\xE5 valfri "+
"knapp f\xF6r att \xE5teruppta anv\xE4ndningen.",23:"Cihaz {#} dakika sonra uyku moduna ge\xE7iyor. \u0130\u015Flemi s\u0131f\u0131rlamak "+
"i\xE7in herhangi bir tu\u015Fa bas\u0131n.",24:"\u0420\u0435\u0436\u0438\u043C \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0431\u0443\u0434\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u043E "+
"\u0447\u0435\u0440\u0435\u0437 {#} \u043C\u0438\u043D\u0443\u0442\u044B. "+"\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F "+
"\u043D\u0430\u0436\u043C\u0456\u0442\u044C \u0431\u0443\u0434\u044C \u044F\u043A\u0443 "+
"\u043A\u043B\u0430\u0432\u0456\u0448\u0443."};C.Bjb={1:"Kopitar / konj",2:"\u0415\u0434\u043D\u043E\u043A\u043E\u043F\u0438\u0442\u043D\u043E/\u043A\u043E\u043D"
,3:"\u99AC",25:"Konj",4:"K\u016F\u0148",5:"Hest",0:"Equine/horse",6:"Paard",7:"Hobune"
,9:"\xC9quid\xE9/cheval",10:"Einhufer/Pferd",11:"\u0386\u03BB\u03BF\u03B3\u03BF"
,12:"l\xF3",13:"Cavallo",15:"zirgs",26:"Arklys",16:"Hest",17:"ko\u0144",18:"Equino/cavalo"
,19:"Cal",20:"\u041D\u0435\u043F\u0430\u0440\u043D\u043E\u043A\u043E\u043F\u044B\u0442\u043D\u044B\u0435 "+
"/ \u043B\u043E\u0448\u0430\u0434\u044C",27:"konj",21:"Equino/ Caballo",22:"H\xE4st"
,23:"At",24:"\u041D\u0435\u043F\u0430\u0440\u043D\u043E\u043A\u043E\u043F\u0438\u0442\u043D\u0456 "+
"/ \u043A\u0456\u043D\u044C"};C.Bjc={1:"Gre\u0161ka(e) prilikom provjere upravlja\u010Dkih programa!\n\n\u017Delite "+
"li vidjeti detaljne informacije o gre\u0161ci(ama)?",2:"\u0413\u0440\u0435\u0448\u043A\u0430(\u0438) \u043F\u0440\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 "+
"\u043D\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043D\u0430 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430!\n\n\u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430 "+
"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0437\u0430 "+"\u0433\u0440\u0435\u0448\u043A\u0430\u0442\u0430(\u0438\u0442\u0435)?"
,3:"\u6AA2\u67E5\u8A2D\u5099\u9A45\u52D5\u7A0B\u5F0F\u6642\u51FA\u73FE\u932F\u8AA4\uFF01\n\u60A8\u60F3\u8981\u67E5\u770B\u932F\u8AA4\u7684\u8A73\u7D30\u8CC7\u8A0A\u55CE\uFF1F"
,25:"Pogre\u0161ka(e) prilikom provjere upravlja\u010Dkih programa ure\u0111aja!\n\n\u017Delite "+
"li vidjeti detaljne informacije o pogre\u0161ci(ama)?",4:"Chyba(y) p\u0159i kontrole ovlada\u010D\u016F za\u0159\xEDzen\xED!\n\nP\u0159ejete "+
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
"l\xE1tni a hiba(k) r\xE9szletes inform\xE1ci\xF3it?",13:"Errori durante il controllo dei driver del dispositivo!\n\nDesideri visualizzare "+
"informazioni dettagliate sugli errori?",15:"K\u013C\u016Bda(s) p\u0101rbaudot ier\u012Bces draiverus!\n\nVai v\u0113laties "+
"redz\u0113t s\u012Bk\u0101ku inform\u0101ciju par k\u013C\u016Bda(m)?",26:"Klaida(-os) tikrinant \u012Frenginio tvarkykles!\n\nAr nor\u0117tum\u0117te "+
"matyti i\u0161samesn\u0119 informacij\u0105 apie klaida(-as)?",16:"Feil(er) ved kontroll av enhetsdrivere!\n\nVil du se detaljert informasjon "+
"om feilen(e)?",17:"B\u0142\u0105d(y) podczas sprawdzania sterownik\xF3w urz\u0105dzenia!\n\nCzy "+
"chcesz zobaczy\u0107 szczeg\xF3\u0142owe informacje o b\u0142\u0119dzie(ach)?",
18:"Erro(s) ao verificar os drivers do dispositivo!\n\nGostaria de ver informa\xE7\xF5es "+
"detalhadas sobre o(s) erro(s)?",19:"Eroare(i) la verificarea driverelor dispozitivului!\n\nDori\u021Bi s\u0103 "+
"vede\u021Bi detalii despre eroare(i)?",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 "+
"\u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,27:"Napake pri preverjanju gonilnikov naprave!\n\n\u017Delite videti podrobne "+
"informacije o napakah?",21:"Errores al verificar los controladores del dispositivo"
,22:"Fel/fel vid kontroll av enhetsdrivrutiner!\n\nVill du se detaljerad information "+
"om felet/felen?",23:"Ayg\u0131t s\xFCr\xFCc\xFClerini kontrol ederken hata(lar)!\n\nHata(lar) "+
"hakk\u0131nda ayr\u0131nt\u0131l\u0131 bilgi g\xF6rmek ister misiniz?",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 "+
"\u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.A6P={1:"Evaluacija",2:"\u041E\u0446\u0435\u043D\u043A\u0430",3:"\u8A55\u4F30"
,25:"Procjena",4:"Hodnocen\xED",5:"Evaluering",0:"Evaluation",6:"Evaluatie",7:"Hindamine"
,8:"Arviointi",9:"\xC9valuation",10:"Auswerten",11:"\u0391\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7"
,12:"\xC9rt\xE9kel\xE9s",13:"Valutazione",15:"Nov\u0113rt\u0113jums",26:"Vertinimas"
,16:"Evaluering",17:"Ocena",18:"Avalia\xE7\xE3o",19:"Evaluare",20:"\u041E\u0446\u0435\u043D\u043A\u0430"
,27:"Ocenjevanje",21:"Evaluaci\xF3n",22:"Utv\xE4rdering",23:"De\u011Ferlendirme"
,24:"\u041E\u0446\u0456\u043D\u043A\u0430"};C.A6Q={1:"Statistika te\u017Eine pri ro\u0111enju se ne mo\u017Ee obra\u010Dunati!"
,2:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430\u0442\u0430 "+"\u0437\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043F\u0440\u0438 "+
"\u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0438!",3:"\u51FA\u751F\u9AD4\u91CD\u7D71\u8A08\u7121\u6CD5\u8A08\u7B97\uFF01"
,25:"Statistika o te\u017Eini pri ro\u0111enju ne mo\u017Ee se izra\u010Dunati!"
,4:"Statistiky porodn\xED hmotnosti nelze vypo\u010D\xEDtat!",5:"Statistikker over f\xF8dselsv\xE6gt kan ikke beregnes!"
,0:"Birth weight statistics cannot be calculated!",6:"Geboortegewicht statistieken kan niet berekend worden"
,7:"S\xFCnnikaalu statistikat ei saa arvutada!",8:"Syntym\xE4~painotilastoja ei voi laskea!"
,9:"Les statistiques sur le poids de naissance ne peuvent pas \xEAtre calcul\xE9es!"
,10:"Statistiken zu den Geburtsgewichten k\xF6nnen nicht berechnet werden!",11:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B1\u03C2 "+"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!",12:"A sz\xFClet\xE9si s\xFAly statisztik\xE1k nem sz\xE1m\xEDthat\xF3k ki!"
,13:"Le statistiche sul peso alla nascita non possono essere calcolate!",15:"Dzim\u0161anas svara statistiku nevar apr\u0113\u0137in\u0101t!"
,26:"Gimimo svorio statistikos apskai\u010Diuoti negalima!",16:"F\xF8dselsvektstatistikk kan ikke beregnes!"
,17:"Statystyki wagi urodzeniowej nie mog\u0105 zosta\u0107 obliczone!",18:"As estat\xEDsticas de peso ao nascer n\xE3o podem ser calculadas!"
,19:"Statisticile privind greutatea la na\u0219tere nu pot fi calculate!",20:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0432\u0435\u0441\u0430 "+
"\u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E "+
"\u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!",27:"Statistike o porodni te\u017Ei se ne morejo izra\u010Dunati!"
,21:"No se pueden calcular estad\xEDsticas de peso al nacer.",22:"Statistik \xF6ver f\xF6delsevikt kan inte ber\xE4knas!"
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
,3:"\u6B63\u5728\u8A08\u7B97\u6027\u80FD\u53C3\u6578\u4E2D\u2026\n\u8ACB\u8010\u5FC3\u7B49\u5F85\uFF01\n{1} "+
"%% \u5B8C\u6210\u4E86",25:"Izra\u010Dun parametara u\u010Dinka u tijeku\u2026\n\nMolimo budite strpljivi!\n\n{1} "+
"%% dovr\u0161eno",4:"Prob\xEDh\xE1 v\xFDpo\u010Det parametr\u016F v\xFDkonu\u2026\n\nBu\u010Fte "+
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
"legyen t\xFCrelmes!\n\n{1} %% k\xE9sz",13:"Calcolo dei parametri di prestazione in corso...\n\nPer favore, sii paziente!\n\n{1} "+
"%% completato",15:"Veiktsp\u0113jas parametru apr\u0113\u0137ins notiek\u2026\n\nL\u016Bdzu, "+
"esiet paciet\u012Bgi!\n\n{1} %% pabeigts",26:"Vykdomas na\u0161umo parametr\u0173 skai\u010Diavimas\u2026\n\nPra\u0161ome "+
"palaukti!\n\n{1} %% atlikta",16:"Beregning av ytelsesparametere p\xE5g\xE5r...\n\nVennligst v\xE6r t\xE5lmodig!\n\n{1} "+
"%% ferdig",17:"Obliczanie parametr\xF3w wydajno\u015Bci w toku...\n\nProsz\u0119 o cierpliwo\u015B\u0107!\n\n{1} "+
"%% zako\u0144czone",18:"C\xE1lculo dos par\xE2metros de desempenho em andamento\u2026\n\nPor favor, "+
"seja paciente!\n\n{1} %% conclu\xEDdo",19:"Calcularea parametrilor de performan\u021B\u0103 \xEEn curs\u2026\n\nV\u0103 "+
"rug\u0103m s\u0103 ave\u021Bi r\u0103bdare!\n\n{1} %% realizat",20:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0443\u0441\u043F\u0435\u0445\u0430 "+
"\u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F\u2026\n\n\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435!\n\n{1} %% \u0433\u043E\u0442\u043E\u0432\u043E"
,27:"Izra\u010Dunavanje parametrov u\u010Dinkovitosti v teku\u2026\n\nProsimo, "+
"bodite potrpe\u017Eljivi!\n\n{1} %% opravljeno",21:"C\xE1lculo de par\xE1metros de rendimiento en progreso... Por favor, sea "+
"paciente.\n\n{1} %% completado.",22:"Ber\xE4kning av prestandaparametrar p\xE5g\xE5r\u2026\n\nVar t\xE5lmodig!\n\n{1} "+
"%% klar",23:"Performans parametrelerinin hesaplanmas\u0131 devam ediyor\u2026\n\nL\xFCtfen "+
"sab\u0131rl\u0131 olun!\n\n{1} %% tamamland\u0131",24:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0443\u0441\u043F\u0456\u0445\u0443 "+
"\u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F\u2026\n\n\u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E"};C.A6R={1:"Gubitak teladi se ne mo\u017Ee obra\u010Dunati!"
,2:"\u0417\u0430\u0433\u0443\u0431\u0438\u0442\u0435 \u043D\u0430 \u0442\u0435\u043B\u0435\u0442\u0430 "+
"\u043D\u0435 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 "+
"\u0438\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0438!",3:"\u5C0F\u725B\u7684\u640D\u5931\u7121\u6CD5\u8A08\u7B97\uFF01"
,25:"Gubitci teladi se ne mogu izra\u010Dunati!",4:"Ztr\xE1ty telat nelze spo\u010D\xEDtat!"
,5:"Kalvetab kan ikke beregnes!",0:"Calf losses cannot be calculated!",6:"Kalver verliezen kan niet worden berekend"
,7:"Surnud vasikate arvu ei saa arvutada!",8:"Vasikkah\xE4vi\xF6it\xE4 ei voi laskea!"
,9:"Les pertes de veaux ne peuvent pas \xEAtre calcul\xE9es\xA0!",10:"K\xE4lberverluste k\xF6nnen nicht berechnet werden!"
,11:"\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD "+"\u03BF\u03B9 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B5\u03C2 \u03C4\u03C9\u03BD "+
"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD!",12:"A borj\xFAvesztes\xE9gek nem sz\xE1molhat\xF3k ki!"
,13:"Le perdite di vitelli non possono essere calcolate!",15:"Te\u013Cu zaud\u0113jumus nevar apr\u0113\u0137in\u0101t!"
,26:"Ver\u0161i\u0173 nuostoliai negali b\u016Bti apskai\u010Diuoti!",16:"Kalvetap kan ikke beregnes!"
,17:"Straty ciel\u0105t nie mog\u0105 by\u0107 obliczone!",18:"As perdas de bezerros n\xE3o podem ser calculadas!"
,19:"Pierderile de vi\u021Bei nu pot fi calculate!",20:"\u041F\u043E\u0442\u0435\u0440\u0438 \u0442\u0435\u043B\u044F\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E "+
"\u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!",27:"Izgub telet ni mogo\u010De izra\u010Dunati!"
,21:"No se pueden calcular las p\xE9rdidas de terneros.",22:"Kalvf\xF6rluster kan inte ber\xE4knas!"
,23:"Buza\u011F\u0131 kay\u0131plar\u0131 hesaplanamaz!",24:"\u0412\u0442\u0440\u0430\u0442\u0438 \u0442\u0435\u043B\u044F\u0442 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E "+
"\u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"};C.A6S={1:
"Statisti\u010Dke podatke u svrhu vrednovanja nije mogu\u0107e obra\u010Dunati!"
,2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u044F\u0432\u0430 "+
"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 "+"\u0446\u0435\u043B\u0438\u0442\u0435 \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430\u0442\u0430!"
,3:"\u7121\u6CD5\u8A08\u7B97\u7528\u65BC\u8A55\u4F30\u7684\u7D71\u8A08\u6578\u64DA\uFF01"
,25:"Statistika za evaluacijske svrhe se ne mo\u017Ee izra\u010Dunati!",4:"Statistiky pro \xFA\u010Dely hodnocen\xED nelze vypo\u010D\xEDtat!"
,5:"Statistikker til evalueringsform\xE5l kan ikke beregnes!",0:"Statistics for evaluation purposes cannot be calculated!"
,6:"Statistieken voor evaluatie kan niet worden berekend",7:"Hindamiseks m\xF5eldud statistikat ei saa arvutada!"
,8:"Tilastot arviointia varten ei voida laskea!",9:"Les statistiques d\u2019\xE9valuation ne peuvent pas \xEAtre calcul\xE9es\xA0!"
,10:"Statistische Gr\xF6\xDFen zur Auswertung k\xF6nnen nicht berechnet werden!"
,11:"\u03A4\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BA\u03B1\u03AF\u03B1 \u03B3\u03B9\u03B1 "+
"\u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!"
,12:"Az \xE9rt\xE9kel\xE9si c\xE9lokra sz\xE1nt statisztik\xE1k nem sz\xE1m\xEDthat\xF3k "+
"ki!",13:"Le statistiche per scopi di valutazione non possono essere calcolate!"
,15:"Statistikas apr\u0113\u0137in\u0101\u0161anai nov\u0113rt\u0113\u0161anas "+
"nol\u016Bkos nav iesp\u0113jama!",26:"Statistikos vertinimo tikslais negalima apskai\u010Diuoti!"
,16:"Statistikk for evaluerings form\xE5l kan ikke beregnes!",17:"Statystyki do cel\xF3w ewaluacyjnych nie mog\u0105 by\u0107 obliczone!"
,18:"As estat\xEDsticas para fins de avalia\xE7\xE3o n\xE3o podem ser calculadas!"
,19:"Statisticile \xEEn scopuri de evaluare nu pot fi calculate!",20:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 "+
"\u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B!"
,27:"Statistike za evalvacijske namene ne morejo biti izra\u010Dunane!",21:"No se pueden calcular estad\xEDsticas con fines de evaluaci\xF3n."
,22:"Statistik f\xF6r utv\xE4rderingssyften kan inte ber\xE4knas!",23:"De\u011Ferlendirme ama\xE7l\u0131 istatistikler hesaplanamaz!"
,24:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u043B\u044F \u043E\u0446\u0456\u043D\u043A\u0438 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C "+
"\u0431\u0443\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0456!"
};C.A6T={1:"Statistika temperature se ne mo\u017Ee izra\u010Dunati!",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u0442\u0430 "+
"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 "+"\u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0438!"
,3:"\u7121\u6CD5\u8A08\u7B97\u6EAB\u5EA6\u7D71\u8A08\uFF01",25:"Statistike temperature se ne mogu izra\u010Dunati!"
,4:"Statistiky teploty nelze vypo\u010D\xEDtat!",5:"Temperaturstatistikker kan ikke beregnes!"
,0:"Temperature statistics cannot be calculated!",6:"Temperatuur statistieken kan niet worden berekend"
,7:"Temperatuuri statistikat ei saa arvutada!",8:"L\xE4mp\xF6tilatilastoja ei voi laskea!"
,9:"Les statistiques de temp\xE9rature ne peuvent pas \xEAtre calcul\xE9es\xA0!"
,10:"Temperaturstatisti~ken k\xF6nnen nicht berechnet werden.",11:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!",12:"A h\u0151m\xE9rs\xE9kleti statisztik\xE1k nem sz\xE1m\xEDthat\xF3k ki!"
,13:"Le statistiche sulla temperatura non possono essere calcolate!",15:"Temperat\u016Bras statistiku nevar apr\u0113\u0137in\u0101t!"
,26:"Temperat\u016Bros statistikos apskai\u010Diuoti negalima!",16:"Temperaturstatistikk kan ikke beregnes!"
,17:"Nie mo\u017Cna obliczy\u0107 statystyk temperatury!",18:"As estat\xEDsticas de temperatura n\xE3o podem ser calculadas!"
,19:"Statisticile privind temperatura nu pot fi calculate!",20:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B "+
"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C."
,27:"Statistike temperature ni mogo\u010De izra\u010Dunati!",21:"No se pueden calcular estad\xEDsticas de temperatura."
,22:"Temperaturstatistik kan inte ber\xE4knas!",23:"S\u0131cakl\u0131k istatistikleri hesaplanam\u0131yor!"
,24:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 "+
"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438."
};C.A6U={1:"Obra\u010Dun prirasta u kg se ne mo\u017Ee izra\u010Dunati!",2:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430\u0442\u0430 "+
"\u0437\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043D\u0430 "+"\u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u0438\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0430!"
,3:"\u7121\u6CD5\u8A08\u7B97\u9AD4\u91CD\u767C\u5C55\u7D71\u8A08\u6578\u64DA\uFF01"
,25:"Statistike razvoja te\u017Eine ne mogu se izra\u010Dunati!",4:"Statistiky v\xFDvoje hmotnosti nelze vypo\u010D\xEDtat!"
,5:"V\xE6gtudviklingsstatistikker kan ikke beregnes!",0:"Weight development statistics cannot be calculated!"
,6:"Gewicht ontwikkelings statistieken kan niet worden berekend",7:"Kaalu suurenemise statistikat ei saa arvutada!"
,8:"Painon kehitystilastoja ei voi laskea",9:"Les statistiques sur le d\xE9veloppement du poids ne peuvent pas \xEAtre "+
"calcul\xE9es\xA0!",10:"Erfolgsgr\xF6\xDFen zur Gewichtsentwick~lung k\xF6nnen nicht berechnet "+
"werden!",11:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7\u03C2 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!"
,12:"A s\xFAlyfejl\u0151d\xE9si statisztik\xE1k nem sz\xE1molhat\xF3k ki!",13:"Le statistiche sullo sviluppo del peso non possono essere calcolate!"
,15:"Svara att\u012Bst\u012Bbas statistiku nevar apr\u0113\u0137in\u0101t!",26:"Svorio raidos statistika negali b\u016Bti apskai\u010Diuota!"
,16:"Vektutviklings statistikk kan ikke beregnes!",17:"Statystyki rozwoju wagi nie mog\u0105 by\u0107 obliczone!"
,18:"As estat\xEDsticas de desenvolvimento de peso n\xE3o podem ser calculadas!"
,19:"Statisticile privind evolu\u021Bia greut\u0103\u021Bii nu pot fi calculate!"
,20:"\u0424\u0430\u043A\u0442\u043E\u0440\u044B \u0443\u0441\u043F\u0435\u0445\u0430 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0432\u0435\u0441\u0430 "+"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!"
,27:"Statistike razvoja te\u017Ee ni mogo\u010De izra\u010Dunati!",21:"No se pueden calcular estad\xEDsticas de desarrollo de peso."
,22:"Statistik \xF6ver viktutveckling kan inte ber\xE4knas!",23:"A\u011F\u0131rl\u0131k geli\u015Fimi istatistikleri hesaplanam\u0131yor!"
,24:"\u0424\u0430\u043A\u0442\u043E\u0440\u0438 \u0443\u0441\u043F\u0456\u0445\u0443 "+
"\u0440\u043E\u0437\u0432\u0438\u0442\u043A\u0443 \u0432\u0430\u0433\u0438 "+"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"
};C.A6V={1:"Izvezi podatke o \u017Eivotinjama (csv)",2:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"(csv)",3:"\u532F\u51FA\u52D5\u7269\u8CC7\u6599\uFF08CSV\uFF09",25:"Izvoz podataka o \u017Eivotinjama (csv)"
,4:"Exportovat data o zv\xED\u0159atech (csv)",5:"Eksporter dyredata (csv)",0:"Export animal data (csv)"
,6:"Export dier data (csv)",7:"Ekspordi loomade andmed (csv)",8:"Vie el\xE4intiedot (csv)"
,9:"Exporter les donn\xE9es des animaux (CSV)",10:"Tierdaten exportieren (CSV)",
11:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD (csv)",12:"\xC1llatadatok export\xE1l\xE1sa (csv)",13:
"Esporta dati degli animali (csv)",15:"Eksport\u0113t dz\u012Bvnieku datus (csv)"
,26:"Eksportuoti gyv\u016Bn\u0173 duomenis (csv)",16:"Eksporter dyredata (csv)",
17:"Eksportuj dane zwierz\u0105t (csv)",18:"Exportar dados de animais (csv)",19:
"Exporta\u021Bi datele animalelor (csv)",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 (csv)",27:"Izvozi podatke o \u017Eivalih (csv)"
,21:"Exportar datos de animales (csv)",22:"Exportera djurdata (csv)",23:"Hayvan verilerini d\u0131\u015Fa aktar (csv)"
,24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"(csv)"};C.AOz={1:"Izvoz csv liste ro\u0111enja",2:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 csv \u0441\u043F\u0438\u0441\u044A\u043A \u0441 \u0440\u0430\u0436\u0434\u0430\u043D\u0438\u044F"
,3:"\u532F\u51FA CSV \u683C\u5F0F\u7684\u51FA\u751F\u540D\u55AE",25:"Izvoz CSV popisa ro\u0111enja"
,4:"Exportovat csv seznam narozen\xED",5:"Eksport\xE9r csv-liste over f\xF8dsler"
,0:"Export csv list of births",6:"Export csv lijst van geboortes",7:"Ekspordi s\xFCndide nimekiri (csv)"
,8:"Vie syntym\xE4luettelo",9:"Exporter la liste de d\xE9claration HIT",10:"HIT-Meldeliste exportieren"
,11:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD",12:"CSV lista export\xE1l\xE1sa a sz\xFClet\xE9sekkel"
,13:"Esporta elenco csv delle nascite",15:"Eksport\u0113t CSV sarakstu ar dzim\u0161an\u0101m"
,26:"Eksportuoti CSV s\u0105ra\u0161\u0105 gimim\u0173",16:"Eksport liste over f\xF8dsler"
,17:"Eksportuj list\u0119 urodze\u0144 w formacie CSV",18:"Exportar lista CSV de nascimentos"
,19:"Exporta\u021Bi lista csv a na\u0219terilor",20:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"CSV \u0441\u043F\u0438\u0441\u043E\u043A \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0439"
,27:"Izvozi csv seznam rojstev",21:"Exportar datos de animales (csv)",22:"Exportera CSV-lista \xF6ver f\xF6dslar"
,23:"Do\u011Fumlar\u0131n csv listesini d\u0131\u015Fa aktar",24:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"CSV \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u044C"
};C.Extended={1:"Pro\u0161ireno",2:"\u0423\u0434\u044A\u043B\u0436\u0435\u043D",
3:"\u64F4\u5C55",25:"Produ\u017Een",4:"Prodlou\u017Een\xE9",5:"Forl\xE6nget",0:"Extended"
,6:"Uitgebreid",7:"Laiendatud",8:"Laajennettu",9:"\xC9tendu",10:"Erweitert",11:"\u0395\u03C0\u03B5\u03BA\u03C4\u03AC\u03B8\u03B7\u03BA\u03B5"
,12:"Kiterjedt",13:"Esteso",15:"Papla\u0161in\u0101ts",26:"I\u0161pl\u0117stas",
16:"Forlenget",17:"Przed\u0142u\u017Cony",18:"Estendido",19:"Prelungit",20:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435"
,27:"Podalj\u0161an",21:"Ampliado",22:"Ut\xF6kad",23:"Geni\u015Fletildi",24:"\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456"
};C.A6W={1:"Fabri\u010Dka pode\u0161avanja",2:"\u0424\u0430\u0431\u0440\u0438\u0447\u043D\u043E \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435"
,3:"\u51FA\u5EE0\u8A2D\u5B9A\u503C",25:"Tvorni\u010Dki reset",4:"Tov\xE1rn\xED nastaven\xED"
,5:"Fabriksindstilling",0:"Factory reset",6:"Reset fabrieksinstellingen",7:"Tehase seadete taastamine"
,8:"Tehdasasetukset",9:"R\xE9initialisation d\u2019usine",10:"Reset Werkseinstellung"
,11:"\u0395\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AD\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",12:"Gy\xE1ri be\xE1ll\xEDt\xE1sok vissza\xE1ll\xEDt\xE1sa"
,13:"Ripristino di fabbrica",15:"R\u016Bpn\u012Bcas atiestat\u012B\u0161ana",26:
"Gamyklinis atstatymas",16:"Fabrikkinnstilt",17:"Przywr\xF3cenie ustawie\u0144 fabrycznych"
,18:"Restaura\xE7\xE3o de f\xE1brica",19:"Resetare la set\u0103rile din fabric\u0103"
,20:"\u0421\u0431\u0440\u043E\u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A"
,27:"Tovarni\u0161ka nastavitev",21:"Restablecer ajustes f\xE1brica",22:"Fabriks\xE5terst\xE4llning"
,23:"Fabrika ayarlar\u0131",24:"\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C"
};C.Bje={1:"Gre\u0161ka prilikom kreiranja sigurnosne kopije na USB fle\u0161 disku!"
,2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0441\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E \u043A\u043E\u043F\u0438\u0435 "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,3:"\u5728 USB \u96A8\u8EAB\u789F\u5EFA\u7ACB\u5099\u4EFD\u6642\u767C\u751F\u932F\u8AA4\uFF01"
,25:"Gre\u0161ka prilikom stvaranja sigurnosne kopije na USB memoriji!",4:"Chyba p\u0159i vytv\xE1\u0159en\xED z\xE1lohy na USB flash disku!"
,5:"Fejl under oprettelse af backup p\xE5 USB-n\xF8gle!",0:"Error while creating backup on USB flash drive!"
,6:"Fout tijdens het maken van back up op USB stick",7:"Viga USB-m\xE4lupulgal varukoopia loomisel!"
,8:"Virhe luotaessa varmuuskopiota USB-muistitikulle!",9:"\xC9chec de sauvegarde de donn\xE9es"
,10:"Bei der Erstellung der Daten~siche~rung auf dem USB-^Stick ist ein Fehler "+
"auf~ge~treten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7 "+
"\u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \u03C3\u03B5 USB "+"flash drive!"
,12:"Hiba t\xF6rt\xE9nt a biztons\xE1gi ment\xE9s l\xE9trehoz\xE1sa k\xF6zben "+
"az USB-meghajt\xF3n!",13:"Errore durante la creazione del backup su chiavetta USB!"
,15:"K\u013C\u016Bda, veidojot dubl\u0113jumu USB zibatmi\u0146\u0101!",26:"Klaida kuriant atsargin\u0119 kopij\u0105 USB atmintin\u0117je!"
,16:"Feil under oppretting av sikkerhetskopi p\xE5 USB-minnepinne!",17:"B\u0142\u0105d podczas tworzenia kopii zapasowej na pendrive\'ie!"
,18:"Erro ao criar backup no pendrive USB!",19:"Eroare la crearea copiei de rezerv\u0103 pe memoria USB!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435!"
,27:"Napaka pri ustvarjanju varnostne kopije na USB klju\u010Dku!",21:"Error al crear una copia de seguridad en una unidad flash USB."
,22:"Fel vid skapande av s\xE4kerhetskopia p\xE5 USB-minne!",23:"USB flash s\xFCr\xFCc\xFCde yedekleme olu\u015Fturulurken hata olu\u015Ftu!"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u0456 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 \u043A\u043E\u043F\u0456\u0457 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448\u0446\u0456!"};C.Bjf={1:"Gre\u0161ka prilikom vra\u0107anja sigurnosne kopije sa USB flash diska!"
,2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E \u043A\u043E\u043F\u0438\u0435 "+
"\u043E\u0442 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,3:"\u5F9E USB \u96A8\u8EAB\u789F\u6062\u5FA9\u5099\u4EFD\u6642\u767C\u751F\u932F\u8AA4\uFF01"
,25:"Pogre\u0161ka prilikom vra\u0107anja sigurnosne kopije s USB memorije!",4:"Chyba p\u0159i obnov\u011B z\xE1lohy z USB flash disku!"
,5:"Fejl under gendannelse af backup fra USB-n\xF8gle!",0:"Error while restoring backup from USB flash drive!"
,6:"Fout tijdens het uploaden vanaf USB stick",7:"Viga USB-m\xE4lupulgalt varukoopia taastamisel!"
,8:"Virhe palautettaessa varmuuskopiota USB-muistitikulta!",9:"\xC9chec de la restauration des donn\xE9es sauvegard\xE9es"
,10:"Bei der Wieder~her~stellung der Daten~siche~rung vom USB-^Stick ist ein "+"Fehler auf~ge~treten!"
,11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \u03B1\u03C0\u03CC "+"USB flash drive!"
,12:"Hiba a vissza\xE1ll\xEDt\xE1s sor\xE1n USB-meghajt\xF3r\xF3l!",13:"Errore durante il ripristino del backup da chiavetta USB!"
,15:"K\u013C\u016Bda, atjaunojot rezerves kopiju no USB zibatmi\u0146as!",26:"Klaida atkuriant atsargin\u0119 kopij\u0105 i\u0161 USB atmintin\u0117s!"
,16:"Feil ved gjenoppretting av sikkerhetskopi fra USB-minnepinne!",17:"B\u0142\u0105d podczas przywracania kopii zapasowej z pami\u0119ci USB!"
,18:"Erro ao restaurar backup de pendrive USB!",19:"Eroare la restaurarea backup-ului de pe memoria USB!"
,20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\u0441 USB-\u0444\u043B\u0435\u0448\u043A\u0438!",27:"Napaka pri obnavljanju varnostne kopije z USB klju\u010Dka!"
,21:"Error al restaurar una copia de seguridad desde una unidad flash USB.",22:"Fel vid \xE5terst\xE4llning av s\xE4kerhetskopia fr\xE5n USB-minne!"
,23:"Yedeklemeyi USB flash s\xFCr\xFCc\xFCden geri y\xFCklerken hata olu\u015Ftu!"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 "+
"\u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \u0437 USB-\u0444\u043B\u0435\u0448\u043A\u0438!"
};C.Bjg={1:"Gre\u0161ka prilikom pisanja CSV datoteke s obavijestima o ro\u0111enju "+
"na USB flash disk!",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043D\u0430 CSV \u0444\u0430\u0439\u043B \u0441 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448\u043A\u0430!"
,3:"\u5BEB\u5165\u51FA\u751F\u901A\u77E5 CSV \u6A94\u6848\u5230 USB \u96A8\u8EAB\u789F\u6642\u767C\u751F\u932F\u8AA4\uFF01"
,25:"Gre\u0161ka prilikom pisanja CSV datoteke s obavijestima o ro\u0111enju "+"na USB flash pogon!"
,4:"Chyba p\u0159i z\xE1pisu CSV souboru s ozn\xE1men\xEDmi o narozen\xED na "+"USB flash disk!"
,5:"Fejl ved skrivning af CSV-fil med f\xF8dselsmeddelelser til USB-n\xF8gle!",0:
"Error when writing CSV file with birth notices to USB flash drive!",6:"Fout tijdens schrijven op CSV bestand met geboorte meldingen naar USB stick"
,7:"Viga s\xFCnniteadetega CSV-faili kirjutamisel USB-m\xE4lupulgale!",8:"Virhe kirjoitettaessa syntym\xE4ilmoituksia sis\xE4lt\xE4v\xE4\xE4 CSV-tiedostoa "+
"USB-muistitikulle!",9:"Erreur lors de l\'\xE9criture du fichier CSV avec les d\xE9clarations de "+
"naissance sur la cl\xE9 USB\xA0!",10:"Beim Schreiben der CSV-Datei mit Geburts~mel~dun~gen auf den USB-^Stick "+
"ist ein Fehler aufgetreten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 "+
"CSV \u03BC\u03B5 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD \u03C3\u03B5 USB "+"flash drive!"
,12:"Hiba t\xF6rt\xE9nt a sz\xFClet\xE9si \xE9rtes\xEDt\xE9sek CSV f\xE1jlj\xE1nak "+
"USB-meghajt\xF3ra \xEDr\xE1sa sor\xE1n!",13:"Errore durante la scrittura del file CSV con gli annunci di nascita su "+
"chiavetta USB!",15:"K\u013C\u016Bda, rakstot CSV failu ar dzim\u0161anas pazi\u0146ojumiem "+
"USB zibatmi\u0146\u0101!",26:"Klaida ra\u0161ant CSV fail\u0105 su gimimo prane\u0161imais \u012F USB "+
"atmintin\u0119!",16:"Feil ved skriving av CSV-fil med f\xF8dselsmeldinger til USB-minnepinne!"
,17:"B\u0142\u0105d podczas zapisywania pliku CSV z og\u0142oszeniami urodzin "+
"na pendrive\'ie!",18:"Erro ao escrever arquivo CSV com notifica\xE7\xF5es de nascimento em pendrive "+
"USB!",19:"Eroare la scrierea fi\u0219ierului CSV cu anun\u021Buri de na\u0219tere "+
"pe memoria USB!",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C CSV \u0444\u0430\u0439\u043B "+
"\u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043D\u0430 USB "+"\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C!"
,27:"Napaka pri pisanju CSV datoteke z obvestili o rojstvu na USB klju\u010Dek!"
,21:"\xA1Error al escribir el archivo CSV con las notificaciones de nacimientos "+
"en la unidad flash USB!",22:"Fel vid skrivning av CSV-fil med f\xF6delsenotiser till USB-minne!"
,23:"Yedeklemeyi USB flash s\xFCr\xFCc\xFCden geri y\xFCklerken hata olu\u015Ftu!"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0441\u043F\u0440\u043E\u0431\u0456 "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u0438 CSV \u0444\u0430\u0439\u043B "+
"\u0456\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.Bjh={1:"Gre\u0161ka prilikom pisanja CSV datoteke s podacima o \u017Eivotinjama "+
"na USB fle\u0161 drajv!",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043D\u0430 CSV \u0444\u0430\u0439\u043B \u0441 \u0434\u0430\u043D\u043D\u0438 "+
"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448\u043A\u0430!"
,3:"\u5BEB\u5165\u52D5\u7269\u8CC7\u6599\u81F3 USB \u96A8\u8EAB\u789F\u7684 "+"CSV \u6A94\u6848\u6642\u767C\u751F\u932F\u8AA4\uFF01"
,25:"Gre\u0161ka prilikom pisanja CSV datoteke s podacima o \u017Eivotinjama "+"na USB ure\u0111aj!"
,4:"Chyba p\u0159i z\xE1pisu CSV souboru s \xFAdaji o zv\xED\u0159atech na "+"USB flash disk!"
,5:"Fejl ved skrivning af CSV-fil med dyredata til USB-n\xF8gle!",0:"Error when writing CSV file with animal data to USB flash drive!"
,6:"Fout tijdens schrijven op CSV bestand met dier meldingen naar USB stick",7:"Viga loomade andmetega CSV-faili kirjutamisel USB-m\xE4lupulgale!"
,8:"Virhe kirjoitettaessa el\xE4intietoja sis\xE4lt\xE4v\xE4\xE4 CSV-tiedostoa "+
"USB-muistitikulle!",9:"Erreur lors de l\'exportation des donn\xE9es des animaux sur la cl\xE9 "+
"USB\xA0!",10:"Fehler beim Export der Tierdaten auf den USB-Stick!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 "+
"CSV \u03BC\u03B5 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03C9\u03BD "+
"\u03C3\u03B5 USB flash drive!",12:"Hiba az \xE1llatadatokat tartalmaz\xF3 CSV f\xE1jl USB-meghajt\xF3ra t\xF6rt\xE9n\u0151 "+
"\xEDr\xE1sakor!",13:"Errore durante la scrittura del file CSV con dati sugli animali sulla "+
"chiavetta USB!",15:"K\u013C\u016Bda, rakstot CSV failu ar dz\u012Bvnieku datiem USB zibatmi\u0146\u0101!"
,26:"Klaida ra\u0161ant CSV fail\u0105 su gyv\u016Bn\u0173 duomenimis \u012F "+"USB atmintin\u0119!"
,16:"Feil ved skriving av CSV-fil med dyredata til USB-minnepinne!",17:"B\u0142\u0105d podczas zapisywania pliku CSV z danymi o zwierz\u0119tach "+
"na pendrive\'ie!",18:"Erro ao escrever arquivo CSV com dados de animais no pen drive USB!"
,19:"Eroare la scrierea fi\u0219ierului CSV cu date despre animale pe memoria "+
"USB!",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0444\u0430\u0439\u043B\u0430 CSV \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443!"
,27:"Napaka pri zapisovanju CSV datoteke z \u017Eivalskimi podatki na USB klju\u010D!"
,21:"Error al escribir un archivo CSV con datos de animales en una unidad flash "+
"USB.",22:"Fel vid skrivning av CSV-fil med djurdata till USB-minne!",23:"Do\u011Fum bildirimlerini i\xE7eren CSV dosyas\u0131n\u0131 USB flash "+
"s\xFCr\xFCc\xFCye yazarken hata olu\u015Ftu!",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 "+
"\u0437\u0430\u043F\u0438\u0441\u0443 CSV-\u0444\u0430\u0439\u043B\u0443 "+"\u0437 \u0434\u0430\u043D\u0438\u043C\u0438 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443!"};C.Bji={1:"Gre\u0161ka prilikom pisanja CSV datoteke s obavijestima o kupovini na "+
"USB flash disk!",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043D\u0430 CSV \u0444\u0430\u0439\u043B \u0441 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448\u043A\u0430!"
,3:"\u5BEB\u5165\u8CFC\u8CB7\u901A\u77E5\u5230USB\u96A8\u8EAB\u789F\u7684CSV\u6A94\u6848\u6642\u767C\u751F\u932F\u8AA4\uFF01"
,25:"Gre\u0161ka prilikom pisanja CSV datoteke s obavijestima o kupnji na USB "+
"ure\u0111aj!",4:"Chyba p\u0159i z\xE1pisu CSV souboru s ozn\xE1men\xEDmi o n\xE1kupu na "+
"USB flash disk!",5:"Fejl ved skrivning af CSV-fil med k\xF8bsmeddelelser til USB-n\xF8gle!"
,0:"Error when writing CSV file with purchase notices to USB flash drive!",6:"Fout tijdens schrijven op CSV bestand met aankoop meldingen naar USB stick"
,7:"Viga ostuteadetega CSV-faili kirjutamisel USB m\xE4lupulgale!",8:"Virhe kirjoitettaessa CSV-tiedostoa ostoilmoitusten kanssa USB-muistitikulle!"
,9:"Erreur lors de l\'\xE9criture du fichier CSV avec les donn\xE9es d\'acc\xE8s "+
"sur la cl\xE9 USB\xA0!",10:"Beim Schreiben der CSV-Datei mit Zugangs~mel~dun~gen auf den USB-^Stick "+
"ist ein Fehler aufgetreten!",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 "+
"CSV \u03BC\u03B5 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03C3\u03B5 USB flash drive!",12:"Hiba t\xF6rt\xE9nt a v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9seket tartalmaz\xF3 "+
"CSV f\xE1jl USB-meghajt\xF3ra t\xF6rt\xE9n\u0151 \xEDr\xE1sakor!",13:"Errore durante la scrittura del file CSV con le notifiche di acquisto "+
"sulla chiavetta USB!",15:"K\u013C\u016Bda, rakstot CSV failu ar pirkumu pazi\u0146ojumiem uz USB "+
"zibatmi\u0146u!",26:"Klaida ra\u0161ant CSV fail\u0105 su pirkimo prane\u0161imais \u012F USB "+
"atmintin\u0119!",16:"Feil ved skriving av CSV-fil med kj\xF8psmeldinger til USB-minnepinne!"
,17:"B\u0142\u0105d podczas zapisywania pliku CSV z powiadomieniami o zakupach "+
"na pendrive!",18:"Erro ao escrever arquivo CSV com avisos de compra em pen drive USB!"
,19:"Eroare la scrierea fi\u0219ierului CSV cu notific\u0103ri de achizi\u021Bie "+
"pe memoria USB!",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0444\u0430\u0439\u043B\u0430 CSV \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C!"
,27:"Napaka pri pisanju CSV datoteke z obvestili o nakupu na USB klju\u010Dek!",
21:"\xA1Error al escribir el archivo CSV con las notificaciones de compra "+"en la unidad flash USB!"
,22:"Fel vid skrivning av CSV-fil med k\xF6paviseringar till USB-minne!",23:"Sat\u0131n alma bildirimlerini i\xE7eren CSV dosyas\u0131n\u0131 USB flash "+
"s\xFCr\xFCc\xFCye yazarken hata olu\u015Ftu!",24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 "+
"\u0437\u0430\u043F\u0438\u0441\u0443 \u0444\u0430\u0439\u043B\u0443 CSV "+"\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 "+"USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.AC4={1:"Farma",2:"\u0424\u0435\u0440\u043C\u0430",3:"\u8FB2\u5834",25:"Farma"
,4:"Farma",5:"G\xE5rd",0:"Farm",6:"Bedrijf",8:"Maatila",9:"Exploitation",10:"Betrieb"
,11:"\u03A6\u03AC\u03C1\u03BC\u03B1",12:"Tanya",13:"Fattoria",15:"Saimniec\u012Bba"
,26:"\u016Akis",16:"G\xE5rd",17:"Gospodarstwo rolne",18:"Fazenda",19:"Ferm\u0103"
,20:"\u0424\u0435\u0440\u043C\u0430",27:"Kmetija",21:"Granja",22:"G\xE5rd",23:"\xC7iftlik"
,24:"\u0424\u0435\u0440\u043C\u0430"};C.A6X={1:"Trenutne \u017Eivotinje sa temperaturom"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 "+
"\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u044F \u043C\u043E\u043C\u0435\u043D\u0442"
,3:"\u76EE\u524D\u767C\u71D2\u7684\u751F\u75C5\u52D5\u7269",25:"Trenutno bolesne \u017Eivotinje s groznicom"
,4:"Aktu\xE1ln\u011B hore\u010Dnat\u011B nemocn\xE1 zv\xED\u0159ata",5:"Aktuelt febrile syge dyr"
,0:"Currently febrile ill animals",6:"Huidige dieren met koortsachtige zieke dieren"
,7:"Praegu haiged ja palavikus loomad",8:"T\xE4ll\xE4 hetkell\xE4 kuumeisia el\xE4imi\xE4"
,9:"Animaux actuellement f\xE9briles",10:"Aktuell fiebrig erkrankte Tiere",11:"\u0395\u03C0\u03AF \u03C4\u03BF\u03C5 \u03C0\u03B1\u03C1\u03CC\u03BD\u03C4\u03BF\u03C2 "+
"\u03B5\u03BC\u03C0\u03CD\u03C1\u03B5\u03C4\u03B1 \u03AC\u03C1\u03C1\u03C9\u03C3\u03C4\u03B1 "+
"\u03B6\u03CE\u03B1",12:"Jelenleg l\xE1zas beteg \xE1llatok",13:"Animali attualmente febbrili e malati"
,15:"Pa\u0161reiz\u0113jie drudzaini slimi dz\u012Bvnieki",26:"\u0160iuo metu sergantys kar\u0161\u010Diuojantys gyv\u016Bnai"
,16:"Febersyke dyr",17:"Obecnie gor\u0105czkuj\u0105ce chore zwierz\u0119ta",18:
"Animais atualmente febris e doentes",19:"Animale bolnave cu febr\u0103 \xEEn prezent"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u0439 "+"\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"
,27:"Trenutno bolne \u017Eivali s povi\u0161ano telesno temperaturo",21:"Animales enfermos actualmente febriles"
,22:"F\xF6r n\xE4rvarande febrila sjuka djur",23:"\u015Eu anda ate\u015Fli hasta hayvanlar"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438 \u0456\u0437 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E\u044E "+
"\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u044E"};C.A6Y={
1:"\u017Divotinje koje su u pro\u0161losti imale temperaturu!",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u043E\u0432\u0438\u0448\u0435\u043D\u0430 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043F\u0440\u0435\u0437 "+
"\u0446\u0435\u043B\u0438\u044F \u0436\u0438\u0432\u043E\u0442",3:"\u4E00\u751F\u4E2D\u6709\u767C\u71D2\u75BE\u75C5\u7684\u52D5\u7269"
,25:"\u017Divotinje s grozni\u010Davim bolestima tijekom \u017Eivota",4:"Zv\xED\u0159ata s hore\u010Dnat\xFDmi nemocemi b\u011Bhem \u017Eivota"
,5:"Dyr med febrilske sygdomme i l\xF8bet af livet",0:"Animals with febrile illnesses during lifetime"
,6:"Huidige dieren met koortsachtige zieke dieren",7:"Loomad, kel on eluajal esinenud palavikuga haiguseid"
,8:"El\xE4imill\xE4, joilla on aiemmin\ndiagnosoitu kuume",9:"Animaux ayant fait \xE9tat de fi\xE8vre dans le pass\xE9"
,10:"Bereits ein- oder mehrmals\nfiebrig diagnostizierte Tiere",11:"\u0396\u03CE\u03B1 \u03BC\u03B5 \u03B5\u03BC\u03C0\u03CD\u03C1\u03B5\u03C4\u03B5\u03C2 "+
"\u03B1\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03BA\u03B1\u03C4\u03AC "+
"\u03C4\u03B7 \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 \u03C4\u03B7\u03C2 "+
"\u03B6\u03C9\u03AE\u03C2 \u03C4\u03BF\u03C5\u03C2",12:"\xC1llatok l\xE1zas betegs\xE9gekkel az \xE9let\xFCk sor\xE1n"
,13:"Animali con malattie febbrili durante la vita",15:"Dz\u012Bvnieki ar drud\u017Ea slim\u012Bb\u0101m dz\u012Bves laik\u0101"
,26:"Gyv\u016Bnai, tur\u0117j\u0119 kar\u0161\u010Diavimo lig\u0173 per gyvenim\u0105"
,16:"Dyr med febersykdommer i l\xF8pet av livet",17:"Zwierz\u0119ta z gor\u0105czkowymi chorobami w trakcie \u017Cycia"
,18:"Animais com doen\xE7as febris durante a vida",19:"Animale cu boli febrile \xEEn timpul vie\u021Bii"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 "+
"\u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E "+
"\u0440\u0430\u0437\n\u0431\u044B\u043B\u0430 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,27:"\u017Divali z vro\u010Dinskimi boleznimi med \u017Eivljenjem",21:"Animales con enfermedades febriles durante su vida"
,22:"Djur med febrila sjukdomar under livstiden",23:"Ya\u015Fam\u0131 boyunca ate\u015Fli hastal\u0131klara yakalanan hayvanlar"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438, \u0443 \u044F\u043A\u0438\u0445 "+
"\u043E\u0434\u0438\u043D \u0447\u0438 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 "+
"\u0440\u0430\u0437 \u0431\u0443\u043B\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u043E\u0432\u0430\u043D\u0430 "+
"\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Feed={1:"Hrana",2:"\u0425\u0440\u0430\u043D\u0430",3:"\u7D66\u98FC",25:"Hrani"
,4:"Krmen\xED",5:"Fodre",0:"Feed",6:"Voer",7:"S\xF6\xF6t",8:"Rehu",9:"Nourriture"
,10:"Futter",11:"\u03A4\u03C1\u03BF\u03C6\u03AE",12:"Etet",13:"Nutrire",15:"Barot"
,26:"Maitinti",16:"F\xF4r",17:"Karmi\u0107",18:"Alimentar",19:"Hr\u0103ni\u021Bi"
,20:"\u041A\u043E\u0440\u043C",27:"Hrani",21:"Alimento",22:"Mata",23:"Besleme",24:
"\u041A\u043E\u0440\u043C"};C.Bjk={1:"Konzumacija hrane",2:"\u0418\u0437\u044F\u0434\u0435\u043D\u0430 \u0445\u0440\u0430\u043D\u0430"
,3:"\u63A1\u98DF",25:"Unos hrane",4:"Hodnocen\xED p\u0159\xEDjmu krmen\xED",5:"Foderindtag"
,0:"Feed intake",6:"Voeropname",7:"S\xF6\xF6mus",8:"Rehunsy\xF6nti",9:"Consommation"
,10:"Futterverzehr",11:"\u03A0\u03C1\u03CC\u03C3\u03BB\u03B7\u03C8\u03B7 \u03C4\u03C1\u03BF\u03C6\u03AE\u03C2"
,12:"Takarm\xE1nyfelv\xE9tel",13:"Assunzione di cibo",15:"Bar\u012Bbas uz\u0146em\u0161ana"
,26:"Pa\u0161aro suvartojimas",16:"F\xF4ropptak",17:"Spo\u017Cycie paszy",18:"Ingest\xE3o de alimentos"
,19:"Aport alimentar",20:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043C\u0430"
,27:"Vnos hrane",21:"Ingesta de alimento",22:"Foderintag",23:"Besin derecelendirmesi"
,24:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u043C\u0443"
};C.AOK={2:"\u0425",25:"U",0:"F",7:"S",8:"R",11:"\u03A4",13:"A",15:"B",26:"P",17:
"S",18:"I",27:"V"};C.Female={1:"\u017Densko",2:"\u0416\u0435\u043D\u0441\u043A\u0438"
,3:"\u6BCD",25:"\u017Densko",4:"Sami\u010D\xED",5:"Kvinde",0:"Female",6:"Vrouwelijk"
,7:"Emane",8:"Lehm\xE4",9:"Femelle",10:"Weiblich",11:"\u0398\u03C5\u03BB\u03B7\u03BA\u03CC"
,12:"N\u0151",13:"Femmina",15:"Sieviete",26:"Moteris",16:"Hunn",17:"Kobieta",18:
"Feminino",19:"Femeie",20:"\u0416\u0435\u043D\u0441\u043A\u0438\u0439",27:"\u017Denska"
,21:"Hembra",22:"Kvinna",23:"Di\u015Fi",24:"\u0416\u0456\u043D\u043E\u0447\u0438\u0439"
};C.Fever={1:"Temperatura",2:"\u0422\u0440\u0435\u0441\u043A\u0430",3:"\u767C\u71D2"
,25:"Groznica",4:"Hore\u010Dka",5:"Feber",0:"Fever",6:"Koorts",7:"Palavik",8:"Kuume"
,9:"Fi\xE8vre",10:"Fieber",11:"\u03A0\u03C5\u03C1\u03B5\u03C4\u03CC\u03C2",12:"L\xE1z"
,13:"Febbre",15:"Drudzis",26:"Kar\u0161\u010Diavimas",16:"Feber",17:"Gor\u0105czka"
,18:"Febre",19:"Febra",20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,27:"Vro\u010Dina",21:"Fiebre",22:"Feber",23:"Ate\u015F",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Filter={1:"filter",2:"\u0424\u0438\u043B\u0442\u044A\u0440",3:"\u904E\u6FFE"
,4:"Filtr",0:"Filter",8:"Suodatus",9:"Filtre",11:"\u03A6\u03AF\u03BB\u03C4\u03C1\u03BF"
,12:"Sz\u0171r\u0151",13:"Filtro",15:"Filtrs",26:"Filtruoti",17:"Filtr",18:"Filtro"
,19:"Filtru",20:"\u0424\u0438\u043B\u044C\u0442\u0440",21:"Filtro",23:"Filtre",24:
"\u0424\u0456\u043B\u044C\u0442\u0440"};C.A61={1:"a\u017Euriranje firmvera",2:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0430 \u0444\u044A\u0440\u043C\u0443\u0435\u0440\u0430",3:"\u97CC\u9AD4\u66F4\u65B0"
,25:"A\u017Euriranje firmvera",4:"Aktualizace firmwaru",5:"Firmwareopdatering",0:
"Firmware update",6:"Firmware-update",7:"P\xFCsivara v\xE4rskendus",8:"Laiteohjelmiston p\xE4ivitys"
,9:"Mise \xE0 jour du logiciel",10:"Aktualisierung Firmware",11:"\u0391\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03BF\u03CD"
,12:"Firmware friss\xEDt\xE9s",13:"Aggiornamento firmware",15:"Programmaparat\u016Bras atjaunin\u0101jums"
,26:"Aparat\u016Bros atnaujinimas",16:"Program oppdatering",17:"Aktualizacja oprogramowania sprz\u0119towego"
,18:"Atualiza\xE7\xE3o de firmware",19:"Actualizare firmware",20:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438"
,27:"Posodobitev vdelane programske opreme",21:"Actualizaci\xF3n de firmware",22:
"Firmwareuppdatering",23:"Yaz\u0131l\u0131m g\xFCncellemesi",24:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438"
};C.A62={1:"Prvi start-up",2:"\u041F\u044A\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u043D\u043E "+
"\u0441\u0442\u0440\u0430\u0442\u0438\u0440\u0430\u043D\u0435",3:"\u9996\u5BB6\u5275\u696D\u516C\u53F8"
,25:"Prvo pokretanje",4:"Prvn\xED start-up",5:"F\xF8rste start-up",0:"First start-up"
,6:"eerste inbedrijfstelling",7:"Esimene start-up",8:"Ensimm\xE4inen k\xE4ynnistys"
,9:"Premi\xE8re mise en service",10:"Erstinbetrieb~nahme",11:"\u03A0\u03C1\u03CE\u03C4\u03B7 \u03B5\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7"
,12:"Els\u0151 startup",13:"Prima start-up",15:"Pirmais start-ups",26:"Pirmasis startuolis"
,16:"F\xF8rste oppstart",17:"Pierwszy start-up",18:"Primeira startup",19:"Primul start-up"
,20:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u0442\u0430\u0440\u0442\u0430\u043F"
,27:"Prvi zagonski podjetje",21:"Puesta en marcha inicial",22:"F\xF6rsta uppstart"
,23:"\u0130lk \xE7al\u0131\u015Ft\u0131rma",24:"\u041F\u0435\u0440\u0448\u0438\u0439 \u0441\u0442\u0430\u0440\u0442\u0430\u043F"
};C.AC9={1:"Svjetlo",2:"\u0424\u0435\u043D\u0435\u0440\u0447\u0435",3:"\u624B\u96FB\u7B52"
,25:"Svjetiljka",4:"Sv\xEDtilna",5:"Lommelygte",0:"Flashlight",6:"Lamp",7:"Taskulamp"
,8:"Valo",9:"Lumi\xE8re",10:"Licht",11:"\u03A6\u03B1\u03BA\u03CC\u03C2",12:"Zsebl\xE1mpa"
,13:"Torcia elettrica",15:"Lukturis",26:"\u017Dibintuv\u0117lis",16:"Spotlys",17:
"Latarka",18:"Lanterna",19:"Lantern\u0103",20:"\u0424\u043E\u043D\u0430\u0440\u044C"
,27:"Svetilka",21:"Linterna",22:"Ficklampa",23:"El feneri",24:"\u041B\u0456\u0445\u0442\u0430\u0440"
};C.Ag2={1:"%d. %m. %Y",2:"%d.%m.%Y",4:"%d. %m. %Y",0:"%Y-%m-%d",6:"%d-%m-%Y",7:
"%d.%m.%Y",8:"%d.%m.%Y",9:"%d/%m/%Y",10:"%d.%m.%Y",11:"%#d/%#m/%Y",13:"%d/%m/%Y"
,14:"%Y\u5E74%m\u6708%d\u65E5",16:"%d.%m.%Y",20:"%d-%m-%Y",21:"%d/%m/%Y",23:"%d.%m.%Y"
,24:"%d.%m.%Y"};C.Bjs={1:"%d. %m.",2:"%d.%m",4:"%d. %m.",5:"%d. %m.",0:"%m-%d",6:
"%d-%m",7:"%d.%m",8:"%d.%m",9:"%d/%m",10:"%d.%m",11:"%#d/%#m",13:"%d/%m",14:"%m\u6708%d\u65E5"
,16:"%d.%m",20:"%d-%m",21:"%d/%m",24:"%d.%m"};C.Bjt={1:"%H:%M %d. %m. %Y",2:"%H:%M %d.%m.%Y"
,4:"%H:%M %d. %m. %Y",0:"%H:%M %Y-%m-%d",6:"%H:%M %d-%m-%Y",7:"%H:%M %d.%m.%Y",8:
"%H:%M %d.%m.%Y",9:"%H:%M %d/%m/%Y",10:"%H:%M %d.%m.%Y",11:"%H:%M %#d/%#m/%Y",13:
"%H:%M %d/%m/%Y",14:"%H:%M %Y\u5E74%m\u6708%d\u65E5",16:"%H:%M %d.%m.%Y",20:"%H:%M %d-%m-%Y"
,21:"%H:%M %d/%m/%Y",23:"%H:%M %d.%m.%Y",24:"%H:%M %d.%m.%Y"};C.AOU={1:"Grla koja se muzu"
,2:"\u0421\u043A\u043E\u0440\u043E \u043E\u0442\u0435\u043B\u0435\u043D\u0438",3:
"\u65B0\u9BAE\u7684\u725B",25:"Svje\u017Ee krave",4:"\u010Cerstv\xE9 kr\xE1vy",5:
"Friske k\xF8er",0:"Fresh cows",6:"Verse koeien",7:"Poeginud lehmad",8:"Tunnutettavat lehm\xE4t"
,9:"Vaches fra\xEEches",10:"Frischmelker",11:"\u03A6\u03C1\u03AD\u03C3\u03BA\u03B5\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2"
,12:"Friss teh\xE9nek",13:"Mucche fresche",15:"Svaigas govis",26:"\u0160vie\u017Eios karv\u0117s"
,16:"Friske dyr",17:"\u015Awie\u017Ce krowy",18:"Vacas frescas",19:"Vaci proaspete"
,20:"\u041D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u0430\u044F",27:"Sve\u017Ee krave"
,21:"Vacas frescas",22:"F\xE4rska kor",23:"Yeni do\u011Fum yapm\u0131\u015F inekler"
,24:"\u041D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0430"};C.A68={1:"prikaz goriva"
,2:"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430 \u0433\u043E\u0440\u0438\u0432\u043E"
,3:"\u6CB9\u91CF\u8868",25:"Mjera\u010D goriva",4:"Ukazatel paliva",5:"Br\xE6ndstofm\xE5ler"
,0:"Fuel gauge",6:"oplader",7:"K\xFCtusetaseme n\xE4idik",8:"Polttoainemittari",
9:"Indicateur de charge",10:"Ladeanzeige",11:"\u039C\u03B5\u03C4\u03C1\u03B7\u03C4\u03AE\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD"
,12:"\xDCzemanyagszint-m\xE9r\u0151",13:"Indicatore del livello di carburante",15:
"Degvielas m\u0113r\u012Bt\u0101js",26:"Degal\u0173 matuoklis",16:"Drivstoffm\xE5ler"
,17:"Wska\u017Anik paliwa",18:"Medidor de combust\xEDvel",19:"Indicator de combustibil"
,20:"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u044F\u0434\u0430"
,27:"Merilnik goriva",21:"Indicador de carga",22:"Br\xE4nslem\xE4tare",23:"Yak\u0131t g\xF6stergesi"
,24:"\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u044F\u0434\u0443"
};C.Bjx={1:"Ova funkcija nije dostupna u demo verziji!",2:"\u0422\u0430\u0437\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0435 "+
"\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u0430 \u0432 \u0434\u0435\u043C\u043E "+
"\u0432\u0435\u0440\u0441\u0438\u044F\u0442\u0430!",3:"\u6B64\u529F\u80FD\u5728\u6F14\u793A\u7248\u672C\u4E2D\u4E0D\u53EF\u7528\uFF01"
,25:"Ova funkcija nije dostupna u demo verziji!",4:"Tato funkce nen\xED dostupn\xE1 v demoverzi!"
,5:"Denne funktion er ikke tilg\xE6ngelig i demoversionen!",0:"This function is not available in the demo version!"
,6:"Deze functie is niet beschikbaar op deze demo versie!",7:"See funktsioon ei ole demoversioonis saadaval!"
,8:"T\xE4m\xE4 toiminto ei ole k\xE4ytett\xE4viss\xE4 demoversiossa!",9:"Cette fonction n\'est plus disponible dans la version d\xE9mo\xA0!"
,10:"Diese Funktion ist in der Demo~version nicht ver~f\xFCgbar!",11:"\u0391\u03C5\u03C4\u03AE \u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 "+
"\u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 "+
"\u03C3\u03C4\u03B7\u03BD \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE\u03C2!"
,12:"Ez a funkci\xF3 nem \xE9rhet\u0151 el a dem\xF3 verzi\xF3ban!",13:"Questa funzione non \xE8 disponibile nella versione demo!"
,15:"\u0160\u012B funkcija nav pieejama demonstr\u0101cijas versij\u0101!",26:"\u0160i funkcija demo versijoje neprieinama!"
,16:"Denne funksjonen er ikke tilgjengelig i demoversjonen!",17:"Ta funkcja nie jest dost\u0119pna w wersji demonstracyjnej!"
,18:"Esta fun\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel na vers\xE3o de demonstra\xE7\xE3o!"
,19:"Aceast\u0103 func\u021Bie nu este disponibil\u0103 \xEEn versiunea demo!",20:
"\u042D\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 "+
"\u0432 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 "+
"\u0432\u0435\u0440\u0441\u0438\u0438!",27:"Ta funkcija ni na voljo v demo razli\u010Dici!"
,21:"Esta funci\xF3n no est\xE1 disponible en la versi\xF3n de demostraci\xF3n."
,22:"Den h\xE4r funktionen \xE4r inte tillg\xE4nglig i demoversionen!",23:"Bu i\u015Flev demo s\xFCr\xFCm\xFCnde mevcut de\u011Fildir!"
,24:"\u0426\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 "+
"\u0443 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0456\u0439 "+
"\u0432\u0435\u0440\u0441\u0456\u0457!"};C.BjZ={1:"gr/dan",2:"\u0433/\u0434\u0435\u043D"
,3:"\u516C\u514B/\u65E5",25:"dobar dan",4:"gram\u016F za den",5:"god dag",0:"g/day"
,6:"g/dag",7:"g/p\xE4evas",8:"g/pv",9:"g/jour",10:"g/Tag",11:"\u03B3\u03C1./\u03BC\u03AD\u03C1\u03B1"
,12:"J\xF3 napot!",13:"buongiorno",15:"Labdien",26:"labas",16:"gr./pr dag",17:"dzie\u0144 dobry"
,18:"bom dia",19:"bun\u0103 ziua",20:"\u0433/\u0434\u0435\u043D\u044C",27:"Dober dan!"
,21:"g/d\xEDa",22:"God dag",23:"G\xFCnl\xFCk gram",24:"\u0433/\u0434\u0435\u043D\u044C"
};C.EU={1:"grafi\u010Dki prikaz",2:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u043D \u0438\u0437\u0433\u043B\u0435\u0434"
,3:"\u5716\u5F62\u8996\u5716",25:"Grafi\u010Dki prikaz",4:"Grafick\xFD pohled",5:
"Grafisk visning",0:"Graphical view",6:"grafische weergave",7:"Graafiline vaade"
,8:"Graafinen n\xE4kym\xE4",9:"Vue graphique",10:"Grafische Ansicht",11:"\u0393\u03C1\u03B1\u03C6\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE"
,12:"Grafikus n\xE9zet",13:"Vista grafica",15:"Grafiskais skats",26:"Grafinis vaizdas"
,16:"Grafisk visning",17:"Widok graficzny",18:"Vis\xE3o gr\xE1fica",19:"Vedere grafic\u0103"
,20:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0438\u0434"
,27:"Grafi\u010Dni pogled",21:"Ganado Glan",22:"Grafisk vy",23:"Grafik G\xF6sterim"
,24:"\u0413\u0440\u0430\u0444\u0456\u0447\u043D\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434"
};C.P={1:"grupa",2:"\u0413\u0440\u0443\u043F\u0430",3:"\u7FA4",25:"Grupa",4:"Skupina"
,5:"Gruppe",0:"Group",6:"Groep",7:"Grupp",8:"Ryhm\xE4",9:"Groupe",10:"Gruppe",11:
"\u039F\u03BC\u03AC\u03B4\u03B1",12:"Csoport",13:"Gruppo",15:"Grupa",26:"Grup\u0117"
,16:"Gruppe",17:"Grupa",18:"Grupo",19:"Grup",20:"\u0413\u0440\u0443\u043F\u043F\u0430"
,27:"Skupina",21:"Grupo",22:"Grupp",23:"Grup",24:"\u0413\u0440\u0443\u043F\u0430"
};C.A7t={1:"Oprema",2:"\u0425\u0440\u0434\u0443\u0435\u0440",3:"\u786C\u9AD4",25:
"Oprema",4:"hardware",0:"Hardware",7:"Riistvara",11:"\u03A5\u03BB\u03B9\u03BA\u03CC (Hardware)"
,12:"Hardver",13:"Ferramenta",15:"Aparat\u016Bra",26:"Aparat\u016Bra",16:"Maskinvare"
,17:"Sprz\u0119t komputerowy",18:"Ferragens",19:"Feronerie",20:"\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"
,27:"Strojna oprema",22:"H\xE5rdvara",23:"Donan\u0131m",24:"\u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F"
};C.Bj2={1:"Junica",2:"\u042E\u043D\u0438\u0446\u0430",3:"\u725D\u725B",25:"Junica"
,4:"Jalovice",5:"Kviekalv",0:"Heifer",6:"Vaars",7:"Mullikas",8:"Hieho",9:"G\xE9nisse"
,10:"F\xE4rse",11:"\u03A4\u03B5\u03BB\u03AF\u03C4\u03C3\u03B1",12:"\xDCsz\u0151"
,13:"Manza",15:"T\u0113lava",26:"Ver\u0161elis",16:"Kvige",17:"Ja\u0142\xF3wka",
18:"Novilha",19:"Juninc\u0103",20:"\u0422\u0435\u043B\u043A\u0430",27:"Telica",21:
"Vaquilla",22:"Kviga",23:"D\xFCve",24:"\u0422\u0435\u043B\u0438\u0446\u044F"};C.
APX={1:"krdo",2:"\u0421\u0442\u0430\u0434\u043E",3:"\u725B\u7FA4",25:"Stado",4:"St\xE1do"
,5:"Flok",0:"Herd",6:"Groep",7:"Kari",8:"Karja",9:"Troupeau",10:"Herde",11:"\u039A\u03BF\u03C0\u03AC\u03B4\u03B9"
,12:"Ny\xE1j",13:"Gregge",15:"Bars",26:"Banda",16:"Flokk",17:"Stado",18:"Rebanho"
,19:"Turm\u0103",20:"\u0421\u0442\u0430\u0434\u043E",27:"\u010Creda",21:"Reba\xF1o"
,22:"Hjord",23:"S\xFCr\xFC",24:"\u0421\u0442\u0430\u0434\u043E"};C.A7x={1:"nakon zavr\u0161etka sakrij opciju"
,2:"\u0421\u043A\u0440\u0438\u0439 \u0441\u043B\u0435\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,3:"\u884C\u52D5\u5F8C\u96B1\u85CF",25:"Sakrij se nakon akcije",4:"Skr\xFDt se po akci"
,5:"Skjul efter handling",0:"Hide after action",6:"verberg na actie",7:"Peida peale tegevust"
,8:"Piilota toiminnan j\xE4lkeen",9:"Dissimuler apr\xE8s l\u2019action",10:"Nach Aktion ausblenden"
,11:"\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03BC\u03B5\u03C4\u03AC "+
"\u03B1\u03C0\u03CC \u03B4\u03C1\u03AC\u03C3\u03B7",12:"Cselekv\xE9s ut\xE1n bujk\xE1l"
,13:"Nasconditi dopo l\'azione",15:"Pasl\u0113pties p\u0113c darb\u012Bbas",26:"Pasl\u0117pti po veiksmo"
,16:"Skjul etter handling",17:"Schowaj si\u0119 po dzia\u0142aniu",18:"Esconder ap\xF3s a\xE7\xE3o"
,19:"Ascunde-te dup\u0103 ac\u021Biune",20:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,27:"Skrij se po dejanju",21:"Ocultar despu\xE9s de la acci\xF3n",22:"D\xF6lj efter \xE5tg\xE4rd"
,23:"\u0130\u015Flemden sonra gizle",24:"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0456\u0441\u043B\u044F "+
"\u0434\u0456\u0457"};C.Bj3={1:"Ne prikazu izmjerena grla",2:"\u0421\u043A\u0440\u0438\u0439 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0442\u0435 "+
"\u043A\u0440\u0430\u0432\u0438",3:"\u96B1\u85CF\u6E2C\u91CF\u904E\u7684\u725B",
25:"Sakrij izmjerene krave",4:"Schovej zm\u011B\u0159en\xE9 kr\xE1vy",5:"Skjul m\xE5lte k\xF8er"
,0:"Hide measured cows",6:"Verborgen gemeten koeien",7:"Peida m\xF5\xF5detud lehmad"
,8:"Piilota mitatut lehm\xE4t",9:"Masquer anim. mesur\xE9s",10:"Gemessene ausblenden"
,11:"\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03C4\u03C9\u03BD \u03BC\u03B5\u03C4\u03C1\u03B7\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD",12:"Rejtett m\xE9rt teh\xE9n"
,13:"Nascondi le mucche misurate",15:"Sl\u0113pt m\u0113r\u012Bt\u0101s govis",26:
"Pasl\u0117pti matuoti karv\u0117s",16:"Skjul m\xE5lte dyr",17:"Ukryj zmierzone krowy"
,18:"Esconder vacas medidas",19:"Ascunde vacile m\u0103surate",20:"\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u043D\u043E\u0435"
,27:"Skrivaj izmerjene krave",21:"Ocultar vacas medidas",22:"D\xF6lj uppm\xE4tta kor"
,23:"\xD6l\xE7\xFClen inekleri gizle",24:"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0435"
};C.AvG={1:"visoko",2:"\u0412\u0438\u0441\u043E\u043A",3:"\u9AD8",25:"Visok",4:"Vysok\xFD"
,5:"H\xF8j",0:"High",6:"Hoog",7:"K\xF5rge",8:"Korkeus",9:"Haut",10:"Hoch",11:"\u03A8\u03B7\u03BB\u03AC"
,12:"Magas",13:"Alto",15:"Augsts",26:"Auk\u0161tas",16:"H\xF8y",17:"Wysoki",18:"Alto"
,19:"\xCEnalt",20:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",27:"Visok",21:"Alto"
,22:"H\xF6g",23:"Y\xFCksek",24:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439"};C.Bj4={
1:"Dokumentacija o uvozu kupljenih \u017Eivotinja u softver za upravljanje "+"stadom \'Herde Mast\' ili \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,2:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F "+"\u0437\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0432 \u0441\u043E\u0444\u0442\u0443\u0435\u0440\u0430 \u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 "+
"\u043D\u0430 \u0441\u0442\u0430\u0434\u043E\u0442\u043E \u201EHerde Mast\u201C "+
"\u0438\u043B\u0438 \u201EHerde Plus\u201C:\n\nhttps://herde.vitalcontrol.de",3:
"\u8CFC\u8CB7\u52D5\u7269\u5C0E\u5165\u300CHerde Mast\u300D\u6216\u300CHerde "+"Plus\u300D\u7267\u7FA4\u7BA1\u7406\u8EDF\u9AD4\u7684\u6587\u4EF6\uFF1A\nhttps://herde.vitalcontrol.de"
,25:"Dokumentacija o uvozu kupljenih \u017Eivotinja u softver za upravljanje "+"stadom \'Herde Mast\' ili \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,4:"Dokumentace k importu zakoupen\xFDch zv\xED\u0159at do softwaru pro spr\xE1vu "+
"st\xE1d \'Herde Mast\' nebo \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",5:
"Dokumentation om import af k\xF8bte dyr til bes\xE6tningsstyringssoftwaren "+"\'Herde Mast\' eller \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,0:"Documentation on import of purchased animals into herd management software "+
"\u2019Herde Mast\u2019 or\n\u2019Herde Plus\u2019:\n\nhttps://herde.vitalcontrol.de"
,6:"Documentatie over de import van aangekochte dieren in kuddebeheersoftware "+
"\'Herde Mast\' of \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",7:"Dokumentatsioon ostetud loomade impordist karjahaldustarkvarasse \"Herde "+
"Mast\" v\xF5i \"Herde Plus\":\n\nhttps://herde.vitalcontrol.de",9:"Documentation sur l\'importation d\'animaux achet\xE9s dans le logiciel "+
"de gestion de troupeaux \'Herde Mast\' ou \'Herde Plus\' :\n\nhttps://herde.vitalcontrol.de"
,10:"Dokumentation zum weiteren Vorgehen:\n\nZugangsmeldung HI Tier:\nhttps://hit.vitalcontrol.de\n\nTierimport "+
"HERDE Mast:\nhttps://herde.vitalcontrol.de",11:"\u03A4\u03B5\u03BA\u03BC\u03B7\u03C1\u03AF\u03C9\u03C3\u03B7 \u03B3\u03B9\u03B1 "+
"\u03C4\u03B7\u03BD \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03B1\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03C3\u03C4\u03BF \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC "+
"\u03B4\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7\u03C2 \u03BA\u03BF\u03C0\u03B1\u03B4\u03B9\u03BF\u03CD "+
"\'Herde Mast\' \u03AE \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",12:"Az \"Herde Mast\" vagy \"Herde Plus\" \xE1llom\xE1nykezel\u0151 szoftverbe "+
"v\xE1s\xE1rolt \xE1llatok import\xE1l\xE1s\xE1nak dokument\xE1ci\xF3ja:\n\nhttps://herde.vitalcontrol.de"
,13:"Documentazione sull\'importazione di animali acquistati nel software di "+"gestione del gregge \'Herde Mast\' o \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,15:"Dokument\u0101cija par ieg\u0101d\u0101to dz\u012Bvnieku import\u0113\u0161anu "+
"gan\u0101mpulka p\u0101rvald\u012Bbas programmat\u016Br\u0101 \"Herde "+"Mast\" vai \"Herde Plus\":\n\nhttps://herde.vitalcontrol.de"
,26:"Dokumentacija apie \u012Fsigyt\u0173 gyv\u016Bn\u0173 importavim\u0105 "+"\u012F bandos valdymo programin\u0119 \u012Frang\u0105 \u201EHerde Mast\u201C "+
"arba \u201EHerde Plus\u201C:\n\nhttps://herde.vitalcontrol.de",16:"Dokumentasjon om import av kj\xF8pte dyr inn i besetningsstyringsprogramvaren "+
"\'Herde Mast\' eller \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",17:"Dokumentacja dotycz\u0105ca importu zakupionych zwierz\u0105t do oprogramowania "+
"do zarz\u0105dzania stadami \'Herde Mast\' lub \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,18:"Documenta\xE7\xE3o sobre importa\xE7\xE3o de animais comprados para o "+"software de gest\xE3o de rebanhos \'Herde Mast\' ou \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,19:"Documenta\u021Bie privind importul animalelor achizi\u021Bionate \xEEn "+"software-ul de gestionare a turmelor \'Herde Mast\' sau \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de"
,20:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F "+
"\u043F\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0443 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 "+
"\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F "+
"\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0434\u043E\u043C "+
"\"Herde Mast\" \u0438\u043B\u0438 \"Herde Plus\":\nhttps://herde.vitalcontrol.de"
,27:"Dokumentacija o uvozu kupljenih \u017Eivali v programsko opremo za upravljanje "+
"\u010Dred \'Herde Mast\' ali \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",
22:"Dokumentation om import av ink\xF6pta djur till bes\xE4ttningshanteringsprogramvaran "+
"\'Herde Mast\' eller \'Herde Plus\':\n\nhttps://herde.vitalcontrol.de",24:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0456\u044F "+
"\u0449\u043E\u0434\u043E \u0456\u043C\u043F\u043E\u0440\u0442\u0443 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D \u0434\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E "+
"\u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F "+"\u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F "+
"\u0441\u0442\u0430\u0434\u043E\u043C \"Herde Mast\" \u0430\u0431\u043E "+"\"Herde Plus\":\n\nhttps://herde.vitalcontrol.de"
};C.AvH={1:"Po\u010Detni ekran",2:"\u041D\u0430\u0447\u0430\u043B\u0435\u043D \u0435\u043A\u0440\u0430\u043D"
,3:"\u9996\u9801\u753B\u9762",25:"Po\u010Detni zaslon",4:"Domovsk\xE1 obrazovka"
,5:"Hjemmesk\xE6rm",0:"Home screen",7:"Avakuva",8:"Aloitusn\xE4ytt\xF6",9:"Page d\'accueil"
,10:"Startseite",11:"\u0391\u03C1\u03C7\u03B9\u03BA\u03AE \u03BF\u03B8\u03CC\u03BD\u03B7"
,12:"Kezd\u0151k\xE9perny\u0151",13:"Schermata principale",15:"S\u0101kuma ekr\u0101ns"
,26:"Pagrindinis ekranas",16:"Hjem-skjerm",17:"Ekran g\u0142\xF3wny",18:"Tela inicial"
,19:"Ecran principal",20:"\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u044D\u043A\u0440\u0430\u043D"
,27:"Doma\u010Di zaslon",21:"Pantalla de inicio",22:"Hemsk\xE4rm",23:"Ana Ekran"
,24:"\u0414\u043E\u043C\u0430\u0448\u043D\u0456\u0439 \u0435\u043A\u0440\u0430\u043D"
};C.GO={2:"\u2116",3:"\u8B58\u5225\u865F",25:"osobna iskaznica",0:"ID",11:"\u03A4\u03B1\u03C5\u03C4~\u03CC\u03C4\u03B7\u03C4\u03B1"
,12:"Szem\xE9lyi igazolv\xE1ny",26:"ID vertimas \u012F lietuvi\u0173 kalb\u0105 yra \"asmens tapatyb\u0117s "+
"kortel\u0117\" arba trumpiau \"ID\".",18:"Identifica\xE7\xE3o",27:"ID v sloven\u0161\u010Dini je \"osebna izkaznica\" ali preprosto \"ID\"."
};C.A7y={1:"ID brane",2:"ID \u043D\u0430 \u043C\u0430\u0439\u043A\u0430",3:"\u6C34\u58E9\u7DE8\u865F"
,25:"ID brane",4:"ID p\u0159ehrady",5:"ID af d\xE6mning",0:"ID of dam",6:"ID van moederdier"
,7:"ema ID",9:"N\xB0 de l\'animal m\xE8re",10:"ID Muttertier",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03BC\u03B7\u03C4\u03AD\u03C1\u03B1\u03C2",12:"g\xE1t azonos\xEDt\xF3ja",13:"ID della diga"
,15:"Dambja ID",26:"ID u\u017Etvankos",16:"ID til Mordyr",17:"Numer ID zapory",18:
"ID da barragem",19:"ID-ul barajului",20:"ID \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F"
,27:"ID jezu",21:"ID de la madre",22:"ID av dam",23:"Anne Hayvan Kimli\u011Fi",24:
"ID \u043C\u0430\u0442\u0435\u0440\u0456"};C.A7z={1:"ID prve \u017Eivotinje",2:"\u2116 \u043D\u0430 \u043F\u044A\u0440\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u7B2C\u4E00\u96BB\u5C0F\u725B\u7684\u8B58\u5225\u865F",25:"ID prvog \u017Eivotinje"
,4:"ID prvn\xEDho zv\xED\u0159ete",5:"ID for det f\xF8rste dyr",0:"ID of first animal"
,6:"ID van eerste dier",7:"Esimese looma ID",8:"Ensimm\xE4isen el\xE4imen ID",9:
"ID du premier animal",10:"ID des ersten Tieres",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C0\u03C1\u03CE\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5",12:"els\u0151 \xE1llat azonos\xEDt\xF3ja"
,13:"ID del primo animale",15:"Pirm\u0101 dz\u012Bvnieka ID",26:"Pirmojo gyv\u016Bno ID"
,16:"ID for f\xF8rste dur",17:"ID pierwszego zwierz\u0119cia",18:"ID do primeiro animal"
,19:"ID-ul primului animal",20:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u0435\u0440\u0432\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",27:"ID prve \u017Eivali"
,21:"ID del primer animal",22:"ID f\xF6r f\xF6rsta djuret",23:"\u0130lk Hayvan Kimli\u011Fi"
,24:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u0435\u0440\u0448\u043E\u0457 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Ara={1:"ID zadnje \u017Eivotinje",2:"\u2116 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u6700\u5F8C\u4E00\u96BB\u5C0F\u725B\u7684\u8B58\u5225\u865F",25:"ID zadnje \u017Eivotinje"
,4:"ID posledn\xEDho zv\xED\u0159ete",5:"ID for sidste dyr",0:"ID of last animal"
,6:"ID van laatste dier",7:"Viimase looma ID",8:"Viimeisen el\xE4imen ID",9:"ID dernier animal"
,10:"ID letztes Tier",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5"
,12:"Az utols\xF3 \xE1llat azonos\xEDt\xF3ja",13:"ID dell\'ultimo animale",15:"ID p\u0113d\u0113j\u0101 dz\u012Bvnieka"
,26:"ID paskutinio gyv\u016Bno",16:"ID for siste dyr",17:"ID ostatniego zwierz\u0119cia"
,18:"ID do \xFAltimo animal",19:"ID-ul ultimului animal",20:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",27:"ID zadnje \u017Eivali"
,21:"ID del \xFAltimo animal",22:"ID f\xF6r sista djuret",23:"Son Hayvan Kimli\u011Fi"
,24:"ID-\u043D\u043E\u043C\u0435\u0440 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.Bj7={1:"za jedan dan",2:"\u0437\u0430 \u0435\u0434\u0438\u043D \u0434\u0435\u043D"
,3:"\u4E00\u5929\u4E4B\u5167",25:"za jedan dan",4:"za jeden den",5:"p\xE5 en dag"
,0:"in one day",6:"op een dag",7:"\xDChe p\xE4eva jooksul",8:"p\xE4iv\xE4ss\xE4"
,9:"En une journ\xE9e",10:"in einem Tag",11:"\u039C\u03AD\u03C3\u03B1 \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03BC\u03AD\u03C1\u03B1"
,12:"egy nap alatt",13:"in un giorno",15:"vien\u0101 dien\u0101",26:"per vien\u0105 dien\u0105"
,16:"P\xE5 en dag",17:"za jeden dzie\u0144",18:"em um dia",19:"\xEEntr-o zi",20:
"\u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C",27:"v enem dnevu"
,21:"en un d\xEDa",22:"p\xE5 en dag",23:"Bir g\xFCnde",24:"\u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C"
};C.Bj8={1:"za {DAYS} dana",2:"\u0441\u043B\u0435\u0434 {DAYS} \u0434\u043D\u0438"
,3:"{DAYS} \u5929\u5F8C",25:"za {DANE} dana",4:"za {DAYS} dn\xED",5:"om {DAGE} dage"
,0:"in {DAYS} days",6:"in {DAYS} dagen",7:"{DAYS} p\xE4eva jooksul",8:"{DAYS} p\xE4iv\xE4ss\xE4"
,9:"en {DAYS} jours",10:"in {DAYS} Tagen",11:"\u039C\u03AD\u03C3\u03B1 \u03C3\u03B5 {DAYS} \u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"{DAYS} nap m\xFAlva",13:"tra {DAYS} giorni",15:"p\u0113c {DIENU} dien\u0101m"
,26:"per {DIENAS} dienas",16:"om {DAYS} dager",17:"za {DNI} dni",18:"em {DAYS} dias"
,19:"\xEEn {DAYS} zile",20:"\u0447\u0435\u0440\u0435\u0437 {DAYS} \u0434\u043D\u0435\u0439"
,27:"\u010Dez {DAYS} dni",21:"en {DAYS} d\xEDas",22:"om {DAYS} dagar",23:"in {DAYS} ka\xE7 g\xFCn i\xE7inde"
,24:"\u0447\u0435\u0440\u0435\u0437 {DAYS} \u0434\u043D\u0456\u0432"};C.Bj9={1:"u pozadini"
,2:"\u0412\u044A\u0432 \u0444\u043E\u043D\u043E\u0432 \u0440\u0435\u0436\u0438\u043C"
,3:"\u81EA\u52D5\u767B\u9304",25:"U pozadini",4:"Na pozad\xED",5:"I baggrunden",
0:"In background",6:"In de achtergrond",7:"Taustal",8:"Taustalla",9:"En arri\xE8re-plan"
,10:"Im Hintergrund",11:"\u03A3\u03C4\u03BF \u03C0\u03B1\u03C1\u03B1\u03C3\u03BA\u03AE\u03BD\u03B9\u03BF"
,12:"A h\xE1tt\xE9rben",13:"In background - In secondo piano",15:"Fon\u0101",26:
"Fone",16:"I bakgrunnen",17:"W tle",18:"Em segundo plano",19:"\xCEn fundal",20:"\u0412 \u0444\u043E\u043D\u043E\u0432\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435"
,27:"V ozadju",21:"En el fondo",22:"I bakgrunden",23:"Arka planda",24:"\u0423 \u0444\u043E\u043D\u043E\u0432\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456"
};C.Bj_={1:"povi\u0161eno",2:"\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D",
3:"\u589E\u52A0",25:"Pove\u0107ano",4:"Zv\xFD\u0161eno",5:"\xD8get",0:"Increased"
,6:"Verhoogt",7:"T\xF5usnud",8:"Lis\xE4\xE4ntynyt",9:"Augment\xE9",10:"Erh\xF6ht"
,11:"\u0391\u03C5\u03BE\u03B7\u03BC\u03AD\u03BD\u03BF",12:"N\xF6vekedett",13:"Aumentato"
,15:"Palielin\u0101ts",26:"Padid\u0117j\u0119s",16:"\xD8kt",17:"Zwi\u0119kszony"
,18:"Aumentado",19:"Crescut",20:"\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043E"
,27:"Pove\u010Dan",21:"Elevado",22:"\xD6kad",23:"Y\xFCksektildi",24:"\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E"
};C.A7L={1:"neplodno grlo",2:"\u0411\u0435\u0437\u043F\u043B\u043E\u0434\u0438\u0435"
,3:"\u4E0D\u5B55\u75C7",25:"Nerodnost",4:"Neplodnost",5:"Infertilitet",0:"Infertility"
,6:"onvruchtbaar",7:"Viljatus",8:"Hedelm\xE4tt\xF6myys",9:"Infertilit\xE9",10:"Unfruchtbarkeit"
,11:"\u0391\u03B3\u03BF\u03BD\u03AF\u03B1",12:"Medd\u0151s\xE9g",13:"Infertilit\xE0"
,15:"Bezsp\u0113ja",26:"Nevaisingumas",16:"Infertilitet",17:"Niep\u0142odno\u015B\u0107"
,18:"Infertilidade",19:"Infertilitate",20:"\u0411\u0435\u0441\u043F\u043B\u043E\u0434\u0438\u0435"
,27:"Neplodnost",21:"Infertilidad",22:"Infertilitet",23:"K\u0131s\u0131rl\u0131k"
,24:"\u0411\u0435\u0437\u043F\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044C"};
C.Info={1:"Informacija",2:"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,3:"\u8CC7\u8A0A",25:"Informacija",4:"Informace",0:"Info",7:"Teave",11:"\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2"
,12:"Inform\xE1ci\xF3",13:"Informazione",15:"Inform\u0101cija",26:"Informacija",
16:"Informasjon",17:"Informacja",18:"Informa\xE7\xE3o",19:"Informa\u021Bie",20:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,27:"Informacije",22:"Information",23:"Bilgi",24:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"
};C.AEa={1:"Uvedite vrh mjernog instrumenta",2:"\u0412\u043A\u0430\u0440\u0430\u0439\u0442\u0435 \u0432\u044A\u0440\u0445\u0430 "+
"\u043D\u0430 \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u0442\u0435\u043B\u044F"
,3:"\u63D2\u5165\u6EAB\u5EA6\u8A08",25:"Umetni mjerni vrh",4:"Vlo\u017Eit m\u011B\u0159en\xED"
,5:"Inds\xE6t m\xE5lespids",0:"Insert measuring tip",6:"Meetpunt inbrengen",7:"Sisesta m\xF5\xF5tmisotsik"
,8:"Aseta mittak\xE4rki",9:"Ins\xE9rer la pointe\nde mesure",10:"Messspitze einf\xFChren"
,11:"\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03B1\u03BA\u03C1\u03BF\u03C6\u03CD\u03C3\u03B9\u03BF "+
"\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7\u03C2",12:"Helyezze be a m\xE9r\u0151hegyet"
,13:"Inserire la punta di misurazione",15:"Ievietojiet m\u0113r\u012B\u0161anas galu"
,26:"\u012Ed\u0117kite matavimo antgal\u012F",16:"Sett inn m\xE5lespiss",17:"W\u0142\xF3\u017C ko\u0144c\xF3wk\u0119 pomiarow\u0105"
,18:"Insira a ponta de medi\xE7\xE3o",19:"Introduce\u021Bi v\xE2rful de m\u0103surare"
,20:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440"
,27:"Vstavite merilno konico",21:"Insertar la punta\nde medici\xF3n",22:"S\xE4tt i m\xE4tspetsen"
,23:"\xD6l\xE7\xFCm ucunu tak\u0131n",24:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440"
};C.Bku={1:"kilogram",2:"\u041A\u0438\u043B\u043E\u0433\u0440\u0430\u043C",3:"\u516C\u65A4"
,0:"Kilogram",7:"Kilogramm",8:"Kiloa",9:"Kilogramme",10:"Kilogramm",11:"\u039A\u03B9\u03BB\u03CC"
,12:"kilogramm",13:"Chilogrammo",15:"Kilograms",26:"Kilogramas",18:"Quilograma",
20:"\u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C",21:"Kilogramos",24:"\u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C"
};C.ARN={1:"laktacija",2:"\u041B\u0430\u043A\u0442\u0430\u0446\u0438\u044F",3:"\u54FA\u4E73"
,25:"Laktacija",4:"Laktace",5:"Amning",0:"Lactation",6:"Lactatie",7:"Laktatsioon"
,8:"Lypsy",10:"Laktation",11:"\u0393\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1",
12:"Szoptat\xE1s",13:"Lattazione",15:"Lakt\u0101cija",26:"Laktacija",16:"Laktasjon"
,17:"Laktacja",18:"Lacta\xE7\xE3o",19:"Lacta\u021Bie",20:"\u041B\u0430\u043A\u0442\u0430\u0446\u0438\u044F"
,27:"Laktacija",21:"Lactancia",22:"Amning",23:"Emzirme",24:"\u041B\u0430\u043A\u0442\u0430\u0446\u0456\u044F"
};C.Bkv={1:"dan laktacije",2:"\u0414\u0435\u043D \u0432 \u043B\u0430\u043A\u0442\u0430\u0446\u0438\u044F"
,3:"\u54FA\u4E73\u65E5",25:"Dan laktacije",4:"Den laktace",5:"Dag for laktation"
,0:"Day of lactation",6:"Lactatiedag",7:"Laktatsiooni p\xE4ev",8:"Lypsyp\xE4iv\xE4"
,9:"Jour de lactation",10:"Laktations~tag",11:"\u0397\u03BC\u03AD\u03C1\u03B1 \u03B3\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1\u03C2"
,12:"Szoptat\xE1s napja",13:"Giorno dell\'allattamento",15:"Lakt\u0101cijas diena"
,26:"Laktacijos diena",16:"Dager i laktasjonen",17:"Dzie\u0144 laktacji",18:"Dia da lacta\xE7\xE3o"
,19:"Ziua de lacta\u021Bie",20:"\u0414\u0435\u043D\u044C \u043B\u0430\u043A\u0442\u0430\u0446\u0438\u0438"
,27:"Dan laktacije",21:"Lactancia",22:"Dag f\xF6r amning",23:"Emzirme G\xFCn\xFC Say\u0131s\u0131"
,24:"\u0414\u0435\u043D\u044C \u043B\u0430\u043A\u0442\u0430\u0446\u0456\u0457"};
C.AEp={1:"Lakta~cija",2:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0438\u044F",3:"\u54FA\u4E73"
,25:"Laktacija",4:"Laktace",5:"Amning",0:"Lacta~tion",6:"Lactatie",7:"Laktat~sioon"
,10:"Lakta~tion",11:"\u0393\u03B1\u03BB\u03BF\u03C5~\u03C7\u03AF\u03B1",12:"Szoptat\xE1s"
,13:"Lattazione",15:"Lakt\u0101cija",26:"Laktacija",16:"Lakta-\nsjon",17:"Laktacja"
,18:"Lacta\xE7\xE3o",19:"Lacta\u021Bie",20:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0438\u044F"
,27:"Laktacija",21:"Lac~tancia",22:"Amning",23:"Emz~irme",24:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0456\u044F"
};C.Bkw={1:"janje",2:"\u0410\u0433\u043D\u0435",3:"\u5C0F\u7F8A",25:"Jagnje",4:"Jehn\u011B"
,5:"Lam",0:"Lamb",6:"Lam",7:"Tall",8:"Lammas",9:"Agneau",10:"Lamm",11:"\u0391\u03C1\u03BD\u03AF"
,12:"B\xE1r\xE1ny",13:"Agnello",15:"J\u0113rs",26:"\u0117riukas",16:"Lam",17:"Baranek"
,18:"Cordeiro",19:"Miel",20:"\u042F\u0433\u043D\u044F\u0442",27:"Jagnje",21:"Cordero"
,22:"Lamm",23:"Kuzu",24:"\u042F\u0433\u043D\u044F\u0442"};C.Bkx={1:"janje",2:"\u0430\u0433\u043D\u0435"
,3:"\u5C0F\u7F8A",25:"janje",4:"jehn\u011B",5:"lam",0:"lamb",6:"lam",7:"Tall",8:
"lammas",9:"agneau",10:"Lamm",11:"\u03B1\u03C1\u03BD\u03AF",12:"b\xE1r\xE1ny",13:
"agnello",15:"j\u0113rs",26:"\u0117riukas",16:"Lam",17:"baranek",18:"cordeiro",19:
"miel",20:"\u042F\u0433\u043D\u044F\u0442",27:"jagnje",21:"cordero",22:"lamm",23:
"Kuzu",24:"\u042F\u0433\u043D\u044F\u0442"};C.Bky={1:"janjad",2:"\u0430\u0433\u043D\u0435\u0442\u0430"
,3:"\u5C0F\u7F8A",25:"janjci",4:"jah\u0148ata",5:"lam",0:"lambs",6:"lammeren",7:
"talled",8:"lampaat",9:"agneaux",10:"L\xE4mmer",11:"\u0391\u03C1\u03BD\u03B9\u03AC"
,12:"b\xE1r\xE1nyok",13:"agnelli",15:"j\u0113ri",26:"\u0117riukai",16:"Lam",17:"jagni\u0119ta"
,18:"cordeiros",19:"miei",20:"\u042F\u0433\u043D\u0451\u043D\u043E\u043A",27:"jagnjeta"
,21:"corderos",22:"lamm",23:"kuzular",24:"\u042F\u0433\u043D\u044F"};C.Language={
1:"jezik",2:"\u0415\u0437\u0438\u043A",3:"\u8A9E\u8A00",25:"Jezik",4:"Jazyk",5:"Sprog"
,0:"Language",6:"Taal",7:"Keel",8:"Kieli",9:"Langue",10:"Sprache",11:"\u03B3\u03BB\u03CE\u03C3\u03B1"
,12:"Nyelv",13:"Lingua",15:"Valoda",26:"Kalba",16:"Spr\xE5k",17:"J\u0119zyk",18:
"Linguagem",19:"Limbaj",20:"\u042F\u0437\u044B\u043A",27:"Jezik",21:"Idioma",22:
"Spr\xE5k",23:"Dil",24:"\u041C\u043E\u0432\u0430"};C.Ahp={1:"zadnji",2:"\u043F\u043E\u0441\u043B\u0435\u0434\u0435\u043D"
,3:"\u6700\u5F8C\u4E00\u500B",25:"zadnji",4:"Posledn\xED",5:"sidste",0:"last",6:
"laatste",7:"viimane",8:"viimeisin",9:"Dernier",10:"Letzte",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF"
,12:"utols\xF3",13:"ultimo",15:"p\u0113d\u0113jais",26:"paskutinis",16:"Sist",17:
"ostatni",18:"\xFAltimo",19:"ultimul",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439"
,27:"zadnji",21:"\xFAltimos",22:"sista",23:"Son",24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439"
};C.A7X={1:"zadnja 3 dana",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 3 \u0434\u043D\u0438"
,3:"\u904E\u53BB\u4E09\u5929",25:"Posljednja 3 dana",4:"Posledn\xED 3 dny",5:"Sidste 3 dage"
,0:"Last 3 days",6:"Laatste 3 dagen",7:"Viimased 3 p\xE4eva",8:"Viimeiset 3 pv",
9:"Les 3 derniers jours",10:"Letzte 3 Tage",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B5\u03C2 3 \u03BC\u03AD\u03C1\u03B5\u03C2"
,12:"Utols\xF3 3 nap",13:"Ultimi 3 giorni",15:"P\u0113d\u0113j\u0101s tr\u012Bs dienas"
,26:"Paskutin\u0117s 3 dienos",16:"Siste 3 dager",17:"Ostatnie 3 dni",18:"\xDAltimos 3 dias"
,19:"Ultimele 3 zile",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 3 \u0434\u043D\u044F"
,27:"Zadnje 3 dni",21:"\xDAltimos 3 d\xEDas",22:"Senaste 3 dagarna",23:"Son 3 g\xFCn"
,24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456 3 \u0434\u043D\u0456"};C.ARP={1:
"Posljednja akcija u redu",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "+
"\u0441 OK",3:"\u6700\u5F8C\u64CD\u4F5C\u78BA\u8A8DOK",25:"Posljednja akcija u redu"
,4:"Posledn\xED akce v po\u0159\xE1dku",5:"Sidste handling p\xE5 OK",0:"Last action on OK"
,6:"Laatste actie op OK",7:"Viimane tegevus OK peal",8:"Viimeinen toimenpide OK"
,9:"Action finale si OK",10:"Abschlussaktion bei OK",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B4\u03C1\u03AC\u03C3\u03B7 "+
"\u03C3\u03B5 \u03B5\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9",12:"Utols\xF3 m\u0171velet rendben"
,13:"Ultima azione su OK",15:"P\u0113d\u0113j\u0101 darb\u012Bba bija OK",26:"Paskutinis veiksmas gerai"
,16:"Siste handling p\xE5 OK",17:"Ostatnia akcja na OK",18:"\xDAltima a\xE7\xE3o em OK"
,19:"Ultima ac\u021Biune pe OK",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "+
"\u0432 OK",27:"Zadnje dejanje v redu",22:"Sista \xE5tg\xE4rden p\xE5 OK",23:"Tamam\'da son eylem"
,24:"\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0434\u0456\u044F \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0443"
};C.A7Y={1:"zadnji mjesec",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u0435\u043D \u043C\u0435\u0441\u0435\u0446"
,3:"\u4E0A\u500B\u6708",25:"Pro\u0161li mjesec",4:"Posledn\xED m\u011Bs\xEDc",5:
"Sidste m\xE5ned",0:"Last month",6:"Afgelopen maand",7:"Eelmine kuu",8:"Viimekukkausi"
,9:"Dernier mois",10:"Letzter Monat",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2"
,12:"m\xFAlt h\xF3nap",13:"Il mese scorso",15:"Pag\u0101ju\u0161aj\u0101 m\u0113nes\u012B"
,26:"Pra\u0117jus\u012F m\u0117nes\u012F",16:"Siste m\xE5ned",17:"Zesz\u0142y miesi\u0105c"
,18:"M\xEAs passado",19:"Luna trecut\u0103",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043C\u0435\u0441\u044F\u0446"
,27:"Prej\u0161nji mesec",21:"Mes pasado",22:"F\xF6rra m\xE5naden",23:"Ge\xE7en ay"
,24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C"
};C.A7Z={1:"zadnji kvartal",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0447\u0435\u0442\u0432\u044A\u0440\u0442"
,3:"\u4E0A\u4E00\u5B63",25:"Posljednji kvartal",4:"Posledn\xED \u010Dtvrtlet\xED"
,5:"Sidste kvartal",0:"Last quarter",6:"Afgelopen kwartaal",7:"Eelmine kvartal",
8:"Viimeisin nelj\xE4nne",9:"Dernier trimestre",10:"Letztes Vierteljahr",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03C4\u03AD\u03C4\u03B1\u03C1\u03C4\u03BF"
,12:"Utols\xF3 negyed\xE9v",13:"Ultimo trimestre",15:"P\u0113d\u0113jais ceturksnis"
,26:"Paskutinis ketvirtis",16:"Siste kvartal",17:"Ostatni kwarta\u0142",18:"\xDAltimo trimestre"
,19:"Ultimul sfert",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044C"
,27:"Zadnje \u010Detrtletje",21:"Trimestre pasado",22:"F\xF6rra kvartalet",23:"Son \xE7eyrek"
,24:"\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0447\u0432\u0435\u0440\u0442\u044C"
};C.A70={1:"zadnja sedmica",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0441\u0435\u0434\u043C\u0438\u0446\u0430"
,3:"\u4E0A\u661F\u671F",25:"Pro\u0161li tjedan",4:"Posledn\xED v\xEDkend",5:"Sidste uge"
,0:"Last week",6:"Afgelopen week",7:"Eelmine n\xE4dal",8:"Viimeviikko",9:"Semaine derni\xE8re"
,10:"Letzte Woche",11:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"
,12:"M\xFAlt h\xE9ten",13:"La settimana scorsa",15:"Pag\u0101ju\u0161aj\u0101 ned\u0113\u013C\u0101"
,26:"Pra\u0117jusi\u0105 savait\u0119",16:"Siste uke",17:"Ostatni tydzie\u0144",
18:"Semana passada",19:"S\u0103pt\u0103m\xE2na trecut\u0103",20:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043D\u0435\u0434\u0435\u043B\u044F"
,27:"Prej\u0161nji teden",21:"Semana pasada",22:"F\xF6rra veckan",23:"Ge\xE7en hafta"
,24:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043D\u044C"
};C.A71={2:"\u043B\u0438\u0431\u0440\u0438",3:"\u82F1\u938A",25:"lbs - funte",4:
"Libra",5:"pund",0:"lbs",6:"Lbs",7:"Kg",11:"\u039B\u03AF\u03B2\u03C1\u03B5\u03C2"
,12:"font",13:"libbre",15:"m\u0101rci\u0146as",26:"svarai",17:"funty",18:"libras"
,19:"livre",27:"funte",22:"pund",23:"Lbs"};C.A72={1:"svjetlo",2:"\u0421\u0432\u0435\u0442\u043B\u0438\u043D\u0430"
,3:"\u8F15\u7684",25:"Svjetlo",4:"Sv\u011Btlo\n",5:"Lys",0:"Light",6:"Licht",7:"Valgus"
,8:"Valo",9:"Lumi\xE8re\n",10:"Licht",11:"\u0395\u03BB\u03B1\u03C6\u03C1\u03CD",
12:"F\xE9ny",13:"Luce",15:"Gaisma",26:"\u0160viesa",16:"Lys",17:"\u015Bwiat\u0142o"
,18:"Luz",19:"Lumin\u0103",20:"\u0421\u0432\u0435\u0442",27:"Svetloba",21:"Linterna\n"
,22:"Ljus",23:"A\xE7\u0131k",24:"\u0421\u0432\u0456\u0442\u043B\u043E"};C.BkB={1:
"povezati ID broj \u017Eivotinja",2:"\u0412\u0440\u044A\u0437\u043A\u0430 \u2116 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u9023\u7D50\u52D5\u7269\u7DE8\u865F",25:"Pove\u017Ei ID \u017Eivotinje",4:"Spojit ID zv\xED\u0159ete"
,5:"Knyt dyre-ID",0:"Link animal ID",6:"Link dier ID",7:"Seo looma ID",8:"Linkit\xE4 el\xE4imen ID"
,9:"Lier ID de l\u2019animal",10:"Ohrmarkennummer zuordnen",11:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"\xC1llat azonos\xEDt\xF3 \xF6sszekapcsol\xE1sa",13:
"Collega ID animale",15:"Saist\u012Bt dz\u012Bvnieka ID",26:"Susieti gyv\u016Bno ID"
,16:"Koble til dyr-ID",17:"Przypisz identyfikator zwierz\u0119cia",18:"Identifica\xE7\xE3o do animal de estima\xE7\xE3o"
,19:"Identificare animal prin link",20:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",27:"Pove\u017Ei \u017Eivalsko identifikacijsko \u0161tevilko"
,21:"Vincular ID del animal",22:"L\xE4nka djur-ID",23:"Hayvan kimli\u011Fini ba\u011Fla"
,24:"\u0417\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0456\u0437 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A73={1:"ID veze (ru\u010Dno)",2:
"ID \u0432\u0440\u044A\u0437\u043A\u0430 (\u0440\u044A\u0447\u043D\u043E)",3:"\u9023\u7D50 ID (\u624B\u52D5)"
,25:"ID veze (ru\u010Dno)",4:"ID odkazu (manu\xE1ln\xED)",5:"Link-ID (manuel)",0:
"Link ID (manual)",6:"Link ID (handmatig)",7:"Seo ID (k\xE4sitsi)",8:"Anna korvamerkin numero (manuaalisesti)"
,9:"Attribuer n\xB0 d\'identification (manuel)",10:"Ohrmarkennummer zuordnen (manuell)"
,11:"\u03A4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BC\u03BF\u03C5 "+
"(\u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B7)",12:"Link azonos\xEDt\xF3 (k\xE9zi)"
,13:"ID del link (manuale)",15:"Saite ID (manu\u0101li)",26:"Nuorodos ID (rankinis)"
,16:"Lenke-ID (manuell)",17:"Identyfikator linku (r\u0119czny)",18:"ID do link (manual)"
,19:"ID-ul leg\u0103turii (manual)",20:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C ID (\u0432\u0440\u0443\u0447\u043D\u0443\u044E)"
,27:"ID povezave (ro\u010Dno)",21:"Vincular ID (manual)",22:"L\xE4nk-ID (manuell)"
,23:"Kimli\u011Fi ba\u011Fla(Manuel)",24:"\u041F\u0440\u0438\u0432\'\u044F\u0437\u0430\u0442\u0438 ID (\u0432\u0440\u0443\u0447\u043D\u0443)"
};C.A74={1:"ID veze (RFID skeniranje)",2:"ID \u0432\u0440\u044A\u0437\u043A\u0430 (RFID \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435)"
,3:"\u9023\u7D50\u8B58\u5225\u78BC (RFID \u6383\u63CF)",25:"ID poveznice (RFID skeniranje)"
,4:"ID odkazu (skenov\xE1n\xED RFID)",5:"Link-ID (RFID-scanning)",0:"Link ID (RFID scan)"
,6:"Link ID (scanner)",7:"Seo ID (RFID skaneering)",8:"Anna korvamerkin numero (skannaus)"
,9:"Attribu\xE9 n\xB0 d\'identification (scann\xE9)",10:"Ohrmarkennummer zuordnen (Scan)"
,11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2 (\u03C3\u03AC\u03C1\u03C9\u03C3\u03B7 "+
"RFID)",12:"Hivatkoz\xE1si azonos\xEDt\xF3 (RFID beolvas\xE1s)",13:"ID collegamento (scansione RFID)"
,15:"Saite ID (RFID sken\u0113\u0161ana)",26:"Ry\u0161io ID (RFID nuskaitymas)",
16:"Lenke-ID (RFID-skanning)",17:"Identyfikator linku (skanowanie RFID)",18:"Identifica\xE7\xE3o de link (varredura RFID)"
,19:"Identificator de leg\u0103tur\u0103 (scanare RFID)",20:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C ID (\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"RFID)",27:"Povezava ID (skeniranje RFID)",21:"Vincular ID (escaneo RFID)",22:"L\xE4nk-ID (RFID-skanning)"
,23:"Ba\u011Flant\u0131 Kimli\u011Fi (RFID taramas\u0131)",24:"\u041F\u0440\u0438\u0432\'\u044F\u0437\u0430\u0442\u0438 ID (\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 "+
"RFID)"};C.LinkTransponder={1:"povezati transponder",2:"\u0412\u0440\u044A\u0437\u043A\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u9023\u7D50\u61C9\u7B54\u5668",25:"Oda\u0161ilja\u010D veze",4:"Spojovac\xED transpond\xE9r"
,5:"Parring med en transponder",0:"Link transponder",7:"Seo transponder",8:"Linkit\xE4 transponderi"
,9:"Lier ID transpondeur",10:"Transponder zuordnen",11:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Link ad\xF3vev\u0151",13:"Trasponditore di collegamento",15:"Saite transponderis"
,26:"Nuorodos si\u0173stuvas",16:"Koble til transponder",17:"Przetwornik \u0142\u0105cza"
,18:"Transponder de liga\xE7\xE3o",19:"Transponder de leg\u0103tur\u0103",20:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u043E\u043C"
,27:"Povezovalni oddajnik",21:"Vincular transpondedor",22:"L\xE4nktransponder",23:
"Ba\u011Flant\u0131 aktar\u0131c\u0131s\u0131",24:"\u0417\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0456\u0437 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u043E\u043C"
};C.Anm={1:"Lista akcija u redu",2:"\u0421\u043F\u0438\u0441\u044A\u043A \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F "+
"\u0441 OK",3:"\u64CD\u4F5C\u6E05\u55AE\u5DF2\u78BA\u8A8D\u5B8C\u6210",25:"Popis akcija u redu"
,4:"Seznam akc\xED v po\u0159\xE1dku",5:"Liste handling p\xE5 OK",0:"List action on OK"
,6:"Lijstactie op OK",7:"Loo OK-ga nimekiri tegevustest",8:"Listaa toiminnot OK-kohtaan"
,9:"Action de liste si OK",10:"Listenaktion bei OK",11:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \u03CC\u03C4\u03B1\u03BD "+
"\u03C0\u03B1\u03C4\u03AC\u03C4\u03B5 OK",12:"Rendben l\xE9v\u0151 m\u0171veletek list\xE1ja"
,13:"Azioni su OK",15:"Saraksts darb\u012Bba uz Labi",26:"Veiksm\u0173 s\u0105ra\u0161as gerai"
,16:"Handling n\xE5r du trykker OK",17:"Lista dzia\u0142a\u0144 na OK",18:"Lista de a\xE7\xF5es OK"
,19:"List\u0103 de ac\u021Biuni la OK",20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 "+
"\u043A\u043D\u043E\u043F\u043A\u0438 OK",27:"Seznam dejanj v redu",22:"Lista \xE5tg\xE4rd p\xE5 OK"
,23:"Tamam\'da eylemi listele",24:"\u0414\u0456\u044F \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u043E\u043C "+
"\u043F\u0440\u0438 \u041E\u041A"};C.Bg={1:"pregled lista",2:"\u0418\u0437\u0433\u043B. \u0441\u043F\u0438\u0441\u044A\u043A"
,3:"\u986F\u793A\u6E05\u55AE",25:"Prikaz popisa",4:"Zobrazen\xED seznamu",5:"Listevisning"
,0:"List view",6:"Lijst",7:"Nimekiri",8:"Listan\xE4kym\xE4",9:"Liste",10:"Liste"
,11:"\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1\u03C2"
,12:"Lista n\xE9zet",13:"Vista elenco",15:"Saraksta skats",26:"S\u0105ra\u0161o rodinys"
,16:"Listevisning",17:"Widok listy",18:"Vista em lista",19:"Vizualizare list\u0103"
,20:"\u0421\u043F\u0438\u0441\u043E\u043A",27:"Pogled seznama",21:"Lista",22:"Listvy"
,23:"Liste g\xF6r\xFCn\xFCm\xFC",24:"\u0421\u043F\u0438\u0441\u043E\u043A"};C.A75={
1:"Liste",2:"\u0421\u043F\u0438\u0441\u044A\u0446\u0438",3:"\u6E05\u55AE",25:"Popisi"
,4:"Seznamy",5:"Lister",0:"Lists",6:"Lijsten",7:"Nimekirjad",8:"Listat",9:"Listes"
,10:"Listen",11:"\u039B\u03AF\u03C3\u03C4\u03B5\u03C2",12:"List\xE1k",13:"Elenchi"
,15:"Saraksti",26:"S\u0105ra\u0161ai",16:"Lister",17:"Listy",18:"Listas",19:"Liste"
,20:"\u0421\u043F\u0438\u0441\u043A\u0438",27:"Seznami",21:"Listas",22:"Listor",
23:"Listeler",24:"\u0421\u043F\u0438\u0441\u043A\u0438"};C.BkF={1:"nisko",2:"\u041D\u0438\u0441\u044A\u043A"
,3:"\u4F4E",25:"Nizak",4:"N\xEDzk\xFD",5:"Lav",0:"Low",6:"Laag",7:"Madal",8:"Matala"
,9:"Bas",10:"Niedrig",11:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AC",12:"Alacsony",13:
"Basso",15:"Zems",26:"\u017Demas",16:"Lav",17:"Niski",18:"Baixo",19:"Sc\u0103zut"
,20:"\u041D\u0438\u0437\u043A\u0438\u0439",27:"Nizek",21:"Bajo",22:"L\xE5g",23:"D\xFC\u015F\xFCk"
,24:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439"};C.AEu={1:"donja granica",2:"\u0414\u043E\u043B\u0435\u043D \u043B\u0438\u043C\u0438\u0442"
,3:"\u4E0B\u9650",25:"Donja granica",4:"doln\xED limit",5:"Nedre gr\xE6nse",0:"Lower limit"
,6:"ondergrens",7:"Alampiir",8:"Alaraja",9:"Limite inf\xE9rieure",10:"Untergrenze"
,11:"\u039A\u03B1\u03C4\u03CE\u03C4\u03B5\u03C1\u03BF \u03CC\u03C1\u03B9\u03BF",
12:"als\xF3 hat\xE1r",13:"Limite inferiore",15:"Apak\u0161\u0113j\u0101 robe\u017Ea"
,26:"Apatin\u0117 riba",16:"Nedre grense",17:"Dolna granica",18:"Limite inferior"
,19:"Limit\u0103 inferioar\u0103",20:"\u041D\u0438\u0436\u043D\u044F\u044F \u0433\u0440\u0430\u043D\u0438\u0446\u0430"
,27:"Spodnja meja",21:"L\xEDmite inferior",22:"Nedre gr\xE4ns",23:"Alt S\u0131n\u0131r"
,24:"\u041D\u0438\u0436\u043D\u044F \u043C\u0435\u0436\u0430"};C.Male={1:"mu\u0161ko"
,2:"\u041C\u044A\u0436\u043A\u0438",3:"\u516C",25:"Mu\u0161ki",4:"Sam\u010D\xED"
,5:"Mand",0:"Male",6:"Mannelijk",7:"Isane",8:"Uros",9:"M\xE2le",10:"M\xE4nnlich"
,11:"\u0391\u03C1\u03C3\u03B5\u03BD\u03B9\u03BA\u03CC",12:"F\xE9rfi",13:"Maschio"
,15:"V\u012Brietis",26:"Vyras",16:"Hann",17:"M\u0119\u017Cczyzna",18:"Masculino"
,19:"Masculin",20:"\u041C\u0443\u0436\u0441\u043A\u043E\u0439",27:"Mo\u0161ki",21:
"Macho",22:"Manlig",23:"Erkek",24:"\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439"
};C.Manual={1:"manuelno",2:"\u0420\u044A\u0447\u043D\u043E",3:"\u624B\u518A",25:
"Priru\u010Dnik",4:"N\xE1vod",0:"Manual",6:"Manuel",7:"K\xE4sitsi",8:"K\xE4sin",
9:"Manuel",10:"Manuell",11:"\u0395\u03B3\u03C7\u03B5\u03B9\u03C1\u03AF\u03B4\u03B9\u03BF"
,12:"K\xE9zik\xF6nyv",13:"Manuale",15:"Rokasgr\u0101mata",26:"Vadovas",17:"Instrukcja"
,20:"\u0420\u0443\u0447\u043D\u043E\u0439",27:"Priro\u010Dnik",22:"Manual in Swedish is \"handbok\" or \"manual\"."
,23:"Elle",24:"\u0420\u0443\u0447\u043D\u0438\u0439"};C.A7_={1:"Ru\u010Dno brisanje obavijesti iz liste je potrebno!"
,2:"\u0418\u0437\u0438\u0441\u043A\u0432\u0430 \u0441\u0435 \u0440\u044A\u0447\u043D\u043E "+
"\u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u043E\u0442 \u0441\u043F\u0438\u0441\u044A\u043A!",3:"\u9700\u8981\u624B\u52D5\u5F9E\u5217\u8868\u4E2D\u522A\u9664\u901A\u77E5\uFF01"
,25:"Ru\u010Dno brisanje obavijesti s popisa je potrebno!",4:"Ru\u010Dn\xED odstran\u011Bn\xED ozn\xE1men\xED ze seznamu je nutn\xE9!"
,5:"Manuel sletning af meddelelser fra listen kr\xE6ves!",0:"Manual deletion of notices from list required!"
,6:"Handmatige verwijdering van meldingen uit lijst vereist!",7:"Vajalik on k\xE4sitsi teadete kustutamine nimekirjast!"
,9:"Suppression manuelle des avis de la liste requise\xA0!",10:"Meldungen m\xFCs~sen noch manuell gel\xF6scht werden!"
,11:"\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C7\u03B5\u03B9\u03C1\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03B7 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!",12:"K\xE9zi t\xF6rl\xE9s sz\xFCks\xE9ges az \xE9rtes\xEDt\xE9sek list\xE1j\xE1r\xF3l!"
,13:"Eliminazione manuale degli avvisi dalla lista richiesta!",15:"Manu\u0101la pazi\u0146ojumu izdz\u0113\u0161ana no saraksta ir nepiecie\u0161ama!"
,26:"Rankinis prane\u0161im\u0173 \u0161alinimas i\u0161 s\u0105ra\u0161o b\u016Btinas!"
,16:"Manuell sletting av varsler fra listen kreves!",17:"R\u0119czne usuwanie powiadomie\u0144 z listy jest wymagane!"
,18:"Exclus\xE3o manual de avisos da lista necess\xE1ria!",19:"\u0218tergerea manual\u0103 a notific\u0103rilor din list\u0103 este necesar\u0103!"
,20:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u043E\u0435 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+
"\u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430!",27:"Ro\u010Dno brisanje obvestil s seznama je potrebno!"
,22:"Manuell borttagning av meddelanden fr\xE5n listan kr\xE4vs!",24:"\u0420\u0443\u0447\u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u0437\u0456 "+
"\u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E!"
};C.A8a={1:"Kupljene teladi:\nmaksimalna starost",2:"\u0417\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0442\u0435\u043B\u0435\u0442\u0430:\n\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 "+
"\u0432\u044A\u0437\u0440\u0430\u0441\u0442",3:"\u5DF2\u8CFC\u8CB7\u7684\u5C0F\u725B\uFF1A\n\u6700\u5927\u5E74\u9F61"
,25:"Kupljena telad:\nmaksimalna dob",4:"Koupen\xE1 telata: maxim\xE1ln\xED v\u011Bk"
,5:"K\xF8bte kalve:\nmaksimal alder",0:"Purchased calves:\nmaximum age",6:"Maximale leeftijd moederdier op nieuw bedrijf"
,7:"Ostetud vasikad:\nmaksimaalne vanus",8:"Ostetut vasikat:\nenimm\xE4isik\xE4"
,9:"\xC2ge maximum\nveaux achet\xE9",10:"Maximalalter\nzugekaufter Fresser",11:"\u0391\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03BC\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9\u03B1:\n\u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03B7 "+
"\u03B7\u03BB\u03B9\u03BA\u03AF\u03B1",12:"V\xE1s\xE1rolt borjak:\nmaxim\xE1lis \xE9letkor"
,13:"Vitelli acquistati:\net\xE0 massima",15:"Ieg\u0101d\u0101tie te\u013Ci:\nmaksim\u0101lais vecums"
,26:"Pirkti ver\u0161eliai:\nmaksimalus am\u017Eius",16:"Kj\xF8pte kalver:\nmaksimal alder"
,17:"Kupione ciel\u0119ta:\nmaksymalny wiek",18:"Bezerros comprados:\nidade m\xE1xima"
,19:"Vitei cump\u0103ra\u021Bi:\nv\xE2rsta maxim\u0103",20:"\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u043B\u044F\u0442\u0430:n\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 "+
"\u0432\u043E\u0437\u0440\u0430\u0441\u0442",27:"Kupljeni teleti:\nnajve\u010Dja starost"
,21:"Comprados terneros:\nedad m\xE1xima",22:"Ink\xF6pta kalvar:\nmaximal \xE5lder"
,23:"Sat\u0131n al\u0131nan buza\u011F\u0131lar:\nmaksimum ya\u015F",24:"\u041A\u0443\u043F\u043B\u0435\u043D\u0456 \u0442\u0435\u043B\u044F\u0442\u0430:\n\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 "+
"\u0432\u0456\u043A"};C.BkK={1:"Mogu\u0107e pohraniti samo {1} \u017Eivotinja!",
2:"\u041C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 "+
"\u0441\u0430\u043C\u043E \u0434\u043E {1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438!"
,3:"\u53EA\u80FD\u5B58\u653E{1}\u96BB\u52D5\u7269\uFF01",25:"Samo do {1} \u017Eivotinja mo\u017Ee biti pohranjeno!"
,4:"Lze skladovat pouze a\u017E {1} zv\xED\u0159at!",5:"Der kan kun opbevares op til {1} dyr!"
,0:"Only up to {1} animals can be stored!",6:"Er kunnen maximaal {1} dieren bewaard worden!"
,7:"Salvestada saab vaid kuni {1} looma!",8:"Vain {1} el\xE4int\xE4 voidaan tallentaa!"
,9:"Un maximum de {1} animaux peut \xEAtre g\xE9r\xE9\xA0!",10:"Es k\xF6nnen maximal {1} Tiere verwaltet werden!"
,11:"\u039C\u03CC\u03BD\u03BF \u03BC\u03AD\u03C7\u03C1\u03B9 {1} \u03B6\u03CE\u03B1 "+
"\u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD!"
,12:"Csak {1} \xE1llat t\xE1rolhat\xF3!",13:"Solo fino a {1} animali possono essere conservati!"
,15:"Var uzglab\u0101t tikai l\u012Bdz {1} dz\u012Bvniekiem!",26:"Gali b\u016Bti laikoma tik iki {1} gyv\u016Bn\u0173!"
,16:"Bare opp til {1} dyr kan lagres",17:"Mo\u017Cna przechowywa\u0107 tylko do {1} zwierz\u0105t!"
,18:"Apenas at\xE9 {1} animais podem ser armazenados!",19:"Doar p\xE2n\u0103 la {1} animale pot fi depozitate!"
,20:"\u041C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C/\u0438!"
,27:"Shranjenih je lahko samo do {1} \u017Eivali!",21:"\xA1Solo se pueden almacenar hasta {1} animales!"
,22:"Endast upp till {1} djur kan lagras!",23:"Yaln\u0131zca en fazla {1} hayvan saklanabilir!"
,24:"\u041C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u0442\u0432\u0430\u0440\u0438\u043D\u043E\u044E/\u0430\u043C\u0438!"
};C.BkL={1:"Mogu\u0107e pohraniti samo {1} neregistrovanih \u017Eivotinja!",2:"\u041C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 "+
"\u0441\u0430\u043C\u043E \u0434\u043E {1} \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0438 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438!",3:"\u53EA\u80FD\u5132\u5B58{1}\u500B\u52D5\u7269\u672A\u767B\u8A18\u7684\u8A18\u9304\uFF01"
,25:"Pohranjeno mo\u017Ee biti samo do {1} odjava \u017Eivotinja!",4:"Lze ulo\u017Eit pouze a\u017E {1} odhl\xE1\u0161en\xED zv\xED\u0159at!"
,5:"Kun op til {1} afregistreringer af dyr kan gemmes!",0:"Only up to {1} animal unregistrations can be stored!"
,6:"Er kunnen maximaal {1} afmeldingen bewaard worden!",7:"Salvestada saab vaid kuni {1} looma registreeringu t\xFChistamist!"
,8:"Vain {1} el\xE4inten rekister\xF6inti\xE4 voidaan tallentaa!",9:"Un maximum de {1} d\xE9sinscriptions peut \xEAtre g\xE9r\xE9\xA0!"
,10:"Es k\xF6nnen max. {1} Abmeldungen verwaltet werden!",11:"\u039C\u03CC\u03BD\u03BF \u03BC\u03AD\u03C7\u03C1\u03B9 {1} \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2 "+
"\u03B6\u03CE\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD!",12:"Csak legfeljebb {1} \xE1llat leiratkoz\xE1sa t\xE1rolhat\xF3!"
,13:"Possono essere memorizzate solo fino a {1} cancellazioni di animali!",15:"Tikai l\u012Bdz {1} dz\u012Bvnieku re\u0123istr\u0101cijas anul\u0113jumiem "+
"var tikt uzglab\u0101ti!",26:"Gali b\u016Bti saugoma tik iki {1} negra\u017Eint\u0173 gyv\u016Bn\u0173!"
,16:"Bare opp til {1} avregistrerte dyr kan lagres",17:"Mo\u017Cna przechowywa\u0107 tylko do {1} wyrejestrowa\u0144 zwierz\u0105t!"
,18:"Apenas at\xE9 {1} desregistros de animais podem ser armazenados!",19:"Pot fi stocate doar p\xE2n\u0103 la {1} dezactiv\u0103ri de animale!"
,20:"\u041C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u0441\u043D\u044F\u0442\u0438\u0435\u043C "+
"\u0441 \u0443\u0447\u0451\u0442\u0430!",27:"Shranjenih je lahko samo do {1} odjav \u017Eivali!"
,21:"\xA1Solo se pueden almacenar hasta {1} anulaciones de animales!",22:"Endast upp till {1} djuravregistreringar kan lagras!"
,23:"Yaln\u0131zca {1} adete kadar hayvan kayd\u0131 silinebilir!",24:"\u041C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u0437\u043D\u044F\u0442\u0442\u044F\u043C "+
"\u0437 \u043E\u0431\u043B\u0456\u043A\u0443!"};C.BkM={1:"Mogu\u0107e pohraniti samo {1} podataka po \u017Eivotinji!"
,2:"\u0421\u0430\u043C\u043E \u0434\u043E {1} \u0435\u0434\u0438\u043D\u0438\u0446\u0438 "+
"\u0434\u0430\u043D\u043D\u0438 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 "+"\u0441\u0435 \u0441\u044A\u0445\u0440\u0430\u043D\u044F\u0432\u0430\u0442 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!",3:"\u6BCF\u96BB\u52D5\u7269\u6700\u591A\u53EA\u80FD\u5132\u5B58 {1} \u500B\u6578\u64DA\u5BE6\u9AD4\uFF01"
,25:"Samo do {1} podatkovnih entiteta mo\u017Ee biti pohranjeno po \u017Eivotinji!"
,4:"Na jedno zv\xED\u0159e lze ulo\u017Eit pouze a\u017E {1} datov\xFDch entit!"
,5:"Der kan kun opbevares op til {1} dataenheder per dyr!",0:"Only up to {1} data entities can be stored per animal!"
,6:"Er kunnen maximaal {1} individuele gegevens bewaard worden!",7:"\xDChe looma kohta saab salvestada vaid kuni {1} andme\xFCksust!"
,8:"Vain {1} tietoyksikk\xF6\xE4 voidaan tallentaa el\xE4int\xE4 kohden!",9:"Max. {1} donn\xE9es individuelles peuvent \xEAtre g\xE9r\xE9es par animal\xA0!"
,10:"Pro Tier k\xF6nnen max. {1} Einzeldaten verwaltet werden!",11:"\u039C\u03CC\u03BD\u03BF \u03AD\u03C9\u03C2 {1} \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD "+
"\u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD "+
"\u03B1\u03BD\u03AC \u03B6\u03CE\u03BF!",12:"Egy \xE1llatonk\xE9nt csak legfeljebb {1} adategys\xE9g t\xE1rolhat\xF3!"
,13:"Solo fino a {1} entit\xE0 di dati possono essere memorizzate per animale!",
15:"Tikai l\u012Bdz {1} datu vien\u012Bb\u0101m var uzglab\u0101t uz vienu "+"dz\u012Bvnieku!"
,26:"Gyv\u016Bne gali b\u016Bti saugoma iki {1} duomen\u0173 vienet\u0173!",16:"Bare data opp til {1} pr dyr kan lagres"
,17:"Tylko do {1} jednostek danych mo\u017Cna przechowywa\u0107 na jedno zwierz\u0119!"
,18:"Apenas at\xE9 {1} entidades de dados podem ser armazenadas por animal!",19:
"Numai p\xE2n\u0103 la {1} entit\u0103\u021Bi de date pot fi stocate per "+"animal!"
,20:"\u0414\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C "+
"\u0434\u0430\u043D\u043D\u044B\u0445!",27:"Samo do {1} podatkovnih entitet lahko shranimo na \u017Eival!"
,21:"\xA1Solo se pueden almacenar hasta {1} entidades de datos por animal!",22:"Endast upp till {1} dataenheter kan lagras per djur!"
,23:"Hayvan ba\u015F\u0131na yaln\u0131zca en fazla {1} veri varl\u0131\u011F\u0131 "+
"depolanabilir!",24:"\u0414\u043B\u044F \u043E\u0434\u043D\u0456\u0454\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u043E\u0431\'\u0454\u043A\u0442\u043E\u043C "+
"\u0434\u0430\u043D\u0438\u0445!"};C.AR8={1:"Dosegli ste maksimalan broj podataka koji se mogu pohraniti!"
,2:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0430\u0442 \u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0438\u044F\u0442 "+
"\u0431\u0440\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 "+"\u0434\u0430\u043D\u043D\u0438!"
,3:"\u5DF2\u9054\u8CC7\u6599\u8A18\u9304\u6578\u4E0A\u9650\uFF01",25:"Maksimalan broj zapisa podataka je dostignut!"
,4:"Byl dosa\u017Een maxim\xE1ln\xED po\u010Det datov\xFDch z\xE1znam\u016F!",5:
"Maksimalt antal dataposter n\xE5et!",0:"Maximum number of data records reached!"
,6:"Maximum aantal bereikt",7:"Saavutatud on maksimaalne andmekirjete arv!",8:"Datatietueiden enimm\xE4ism\xE4\xE4r\xE4 saavutettu!"
,9:"Nombre maximal d\'enregistrements atteint\xA0!",10:"Maximale Anzahl an Datens\xE4tzen erreicht!"
,11:"\u03A3\u03C5\u03BC\u03C0\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BF \u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C9\u03BD!",12:"Az adatbejegyz\xE9sek maxim\xE1lis sz\xE1ma el\xE9rve!"
,13:"Numero massimo di record di dati raggiunto!",15:"Maksim\u0101lais datu ierakstu skaits sasniegts!"
,26:"Maksimalus duomen\u0173 \u012Fra\u0161\u0173 skai\u010Dius pasiektas!",16:"Maksimalt antall dataposter n\xE5dd!"
,17:"Maksymalna liczba rekord\xF3w danych osi\u0105gni\u0119ta!",18:"N\xFAmero m\xE1ximo de registros de dados atingido!"
,19:"Num\u0103rul maxim de \xEEnregistr\u0103ri de date atins!",20:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 "+
"\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439!"
,27:"Maksimalno \u0161tevilo dose\u017Eenih podatkovnih zapisov!",21:"\xA1Se ha alcanzado el n\xFAmero m\xE1ximo de registros de datos!"
,22:"Maximalt antal data-poster uppn\xE5tt!",23:"Maksimum veri kayd\u0131 say\u0131s\u0131na ula\u015F\u0131ld\u0131!"
,24:"\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 "+
"\u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u0456\u0432!"
};C.A8c={1:"Maksimalna preciznost",2:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u043D\u0430 \u043F\u0440\u0435\u0446\u0438\u0437\u043D\u043E\u0441\u0442"
,3:"\u6700\u9AD8\u7CBE\u78BA\u5EA6",25:"Maksimalna preciznost",4:"Maxim\xE1ln\xED p\u0159esnost"
,5:"Maksimal pr\xE6cision",0:"Maximum precision",6:"Maximale precisie",7:"Maksimaalne t\xE4psus"
,8:"Maksimaalinen tarkkuus",9:"Pr\xE9cision maximale",10:"Maximale Genauigkeit",
11:"\u039C\u03AD\u03B3\u03B9\u03C3\u03C4\u03B7 \u03B1\u03BA\u03C1\u03AF\u03B2\u03B5\u03B9\u03B1"
,12:"Maxim\xE1lis pontoss\xE1g",13:"Massima precisione",15:"Maksim\u0101la precizit\u0101te"
,26:"Maksimalus tikslumas",16:"Maksimal presisjon",17:"Maksymalna precyzja",18:"M\xE1xima precis\xE3o"
,19:"Precizie maxim\u0103",20:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F "+
"\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C",27:"Maksimalna natan\u010Dnost"
,21:"Precisi\xF3n m\xE1xima",22:"H\xF6gsta precision",23:"Maksimum hassasiyet",24:
"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C"
};C.Arz={1:"Mjerenje",2:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438 \u0442\u0438\u043F\u043E\u0432\u0435"
,3:"\u7269\u7A2E\u6E2C\u91CF",25:"Vrste izmjerene",4:"M\u011B\u0159en\xE9 druhy zv\xED\u0159at"
,5:"Arter m\xE5lt",0:"Species measured",6:"Meten bij",7:"T\xF5ud, keda m\xF5\xF5deti"
,8:"Mittauskohde",9:"Esp\xE8ce mesur\xE9e",10:"Messeinsatz bei",11:"\u039C\u03B5\u03C4\u03C1\u03B7\u03BC\u03AD\u03BD\u03B1 \u03B5\u03AF\u03B4\u03B7"
,12:"Fajok m\xE9rt\xE9ke",13:"Specie misurate",15:"Sugas m\u0113r\u012Btas",26:"R\u016B\u0161ys matuojamos"
,16:"M\xE5l type dyr",17:"Gatunki zmierzone",18:"Esp\xE9cies medidas",19:"Specii m\u0103surate"
,20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u0438",
27:"Vrste izmerjene",21:"Medici\xF3n de",22:"Arter m\xE4tta",23:"Hayvan\u0131n t\xFCr\xFC \xF6l\xE7\xFCm\xFC"
,24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438"
};C.BkO={1:"mjerenje nije uspjelo",2:"\u041D\u0435\u0443\u0441\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u6E2C\u91CF\u5931\u6557",25:"Mjera nije uspjela",4:"M\u011B\u0159en\xED chyba"
,5:"M\xE5ling mislykkedes",0:"Measure failed",6:"Meting mislukt",7:"M\xF5\xF5tm. eba\xF5nnestus"
,8:"Mittausvirhe",9:"\xC9chec de la mesure",10:"Messung fehlgeschlagen",11:"\u0391\u03C0\u03BF\u03C4\u03C5\u03C7\u03B7\u03BC\u03AD\u03BD\u03B7 \u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7"
,12:"Az int\xE9zked\xE9s megbukott.",13:"La misura \xE8 fallita",15:"M\u0113r\u012Bjums neizdev\u0101s"
,26:"Matavimas nepavyko",16:"Mislykket m\xE5ling",17:"Pomiar nieudany",18:"Medida falhou"
,19:"M\u0103sura a e\u0219uat",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"
,27:"Meritve niso uspele",21:"Fallo medici\xF3n",22:"M\xE5ttet misslyckades",23:
"\xD6l\xE7\xFCm ba\u015Far\u0131s\u0131z",24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0435 "+
"\u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E"};C.BkP={1:"mjerenje uspjelo",
2:"\u0418\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435\u0442\u043E \u0435 "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E"
,3:"\u63AA\u65BD\u6210\u529F\u4E86",25:"Mjera uspjela",4:"M\u011B\u0159en\xED bylo \xFAsp\u011B\u0161n\xE9"
,5:"M\xE5ling lykkedes",0:"Measure succeeded",6:"Meting succesvol",7:"M\xF5\xF5tmine \xF5nnestus"
,8:"Mittaus onnistui",9:"Mesure r\xE9ussie",10:"Messung erfolgreich",11:"\u039C\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1\u03C2"
,12:"M\xE9r\xE9s sikeres",13:"La misura \xE8 riuscita",15:"M\u0113r\u012Bjums izdev\u0101s"
,26:"Matavimas pavyko",16:"M\xE5lingen suksessfull",17:"Pomiar si\u0119 powi\xF3d\u0142"
,18:"A medida foi bem-sucedida",19:"M\u0103sura a reu\u0219it.",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E",27:"Meritev je uspela.",21:"Medida exitosa"
,22:"M\xE4tningen lyckades",23:"\xD6l\xE7\xFCm ba\u015Far\u0131l\u0131 oldu",24:
"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E"};C.A8d={1:"vrijednosti izmjerene temperature"
,2:"\u0422\u0435\u043C\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0438\u044F"
,3:"\u6EAB\u5EA6\u6E2C\u91CF",25:"Mjerenja temperature",4:"M\u011B\u0159en\xED teploty"
,5:"Temperaturm\xE5linger",0:"Temp. measurements",6:"Gemeten temperaturen",7:"Temp. m\xF5\xF5tmised"
,8:"Lpt. mittaukset",9:"Mesures de la temp\xE9rature",10:"Messwerte Temperatur",
11:"\u03A0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AD\u03C2 \u03BC\u03B5\u03C4\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2"
,12:"H\u0151m\xE9rs\xE9klet m\xE9r\xE9sek",13:"Misure della temperatura",15:"Temperat\u016Bras m\u0113r\u012Bjumi"
,26:"Matavimai temperat\u016Bros.",16:"Temp. m\xE5linger",17:"Pomiary temperatury"
,18:"Medi\xE7\xF5es de temperatura",19:"M\u0103sur\u0103tori de temperatur\u0103"
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",27:"Meritve temperature"
,21:"Mediciones temperatura",22:"Temperaturm\xE4tningar",23:"S\u0131cakl\u0131k \xF6l\xE7\xFCmler"
,24:"\u0414\u0430\u043D\u0456 \u0437\u043C\u0456\u043D\u0435\u043D\u043D\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"};C.AEz={1:"Unos u meni"
,2:"\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u043D\u0430 \u043C\u0435\u043D\u044E\u0442\u043E"
,3:"\u9078\u55AE\u9805\u76EE",25:"Stavke izbornika",4:"Polo\u017Eky nabidky",5:"Menukort punkter"
,0:"Menu items",6:"Menuonderdelen",7:"Men\xFC\xFC kirjed",8:"Valikkokohdat",9:"\xC9l\xE9ments du menu"
,10:"Men\xFCeintr\xE4ge",11:"\u03A0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1 \u03BC\u03B5\u03BD\u03BF\u03CD"
,12:"\xC9tlap t\xE9telek",13:"Voci di menu",15:"Vienumi izv\u0113ln\u0113",26:"Meniu punktai"
,16:"Meny elementer",17:"Pozycje w menu",18:"Itens do card\xE1pio",19:"Elemente de meniu"
,20:"\u041F\u0443\u043D\u043A\u0442\u044B \u043C\u0435\u043D\u044E",27:"Menijske postavke"
,21:"Opciones de men\xFA",22:"Menyalternativ",23:"Men\xFC \xF6\u011Feleri",24:"\u041F\u0443\u043D\u043A\u0442\u0438 \u043C\u0435\u043D\u044E"
};C.A8f={1:"Bolesti metabolizma",2:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0442\u043D\u0438 \u0437\u0430\u0431\u043E\u043B\u044F\u0432\u0430\u043D\u0438\u044F"
,3:"\u4EE3\u8B1D\u6027\u75BE\u75C5",25:"Metaboli\u010Dke bolesti",4:"Metabolick\xE9 nemoci"
,5:"Stofskiftesygdomme",0:"Metabolic diseases",6:"Stofwisselingsziekte",7:"Ainevahetushaigused"
,8:"Aineenvaihduntasairaudet",9:"Maladies m\xE9taboliques",10:"Stoffwechsel~krankheiten"
,11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BF\u03BB\u03B9\u03C3\u03BC\u03BF\u03CD"
,12:"Anyagcsere-betegs\xE9gek",13:"Malattie metaboliche",15:"Metabolisk\u0101s slim\u012Bbas"
,26:"Metabolin\u0117s ligos",16:"Ford\xF8yelses sykdommer",17:"Choroby metaboliczne"
,18:"Doen\xE7as metab\xF3licas",19:"Boli metabolice",20:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 "+
"\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",27:"Presnovne bolezni"
,21:"Enfermedades metab\xF3licas",22:"Metabola sjukdomar",23:"Metabolik hastal\u0131klar"
,24:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0456\u0447\u043D\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A8h={1:"Mogu\u0107nost izmu\u017Ee",2:"\u041C\u043B\u0435\u0447\u043D\u043E\u0441\u0442"
,3:"\u4E73\u91CF\u6027",25:"Muznost",4:"Dojivost",5:"M\xE6lkbarhed",0:"Milkability"
,6:"Melkbaarheid",7:"L\xFCpsiv\xF5ime",8:"Lypsett\xE4vyys",9:"Laitabilit\xE9",10:
"Melkbarkeit",11:"\u0394\u03C5\u03BD\u03B1\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 \u03B1\u03C1\u03BC\u03B5\u03B3\u03AE\u03C2"
,12:"Fejhet\u0151s\xE9g",13:"L\'abilit\xE0 di mungere",15:"Piensp\u0113ja",26:"Lengvas mel\u017Eimas"
,16:"Melkbarhet",17:"Dojno\u015B\u0107",18:"Ordenhabilidade",19:"U\u015Furin\u0163a de mulgere"
,20:"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0439\u043A\u0438"
,27:"La\u017Eje mol\u017Ea",21:"Lechabilidad",22:"Mj\xF6lkningsf\xF6rm\xE5ga",23:
"Sa\u011F\u0131labilirlik",24:"\u041C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0434\u043E\u0457\u043D\u043D\u044F"
};C.Moderate={1:"Sredstvo",2:"\u0423\u043C\u0435\u0440\u0435\u043D",3:"\u9069\u5EA6"
,25:"Umjeren",4:"M\xEDrn\xFD",5:"Moderat",0:"Moderate",6:"gemiddeld",7:"M\xF5\xF5dukas"
,8:"Kohtalainen",9:"Mod\xE9r\xE9",10:"Mittel",11:"\u039C\u03AD\u03C4\u03C1\u03B9\u03BF"
,12:"M\xE9rs\xE9kelt",13:"Moderato",15:"Vid\u0113js",26:"Vidutinis",16:"Moderat"
,17:"Umiarkowany",18:"Moderado",19:"Moderat",20:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439"
,27:"zmerno",21:"Moderado",22:"M\xE5ttlig",23:"Orta Seviye",24:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439"
};C.Hl={1:"Mjesec",2:"M\u0435\u0441\u0435\u0446",3:"\u6708\u4EFD",25:"Mjesec",4:
"M\u011Bs\xEDc",5:"M\xE5ned",0:"Month",6:"Maand",7:"Kuu",8:"Kuukausi",9:"Mois",10:
"Monat",11:"\u039C\u03AE\u03BD\u03B1\u03C2",12:"H\xF3nap",13:"Mese",15:"M\u0113nesis"
,26:"M\u0117nuo",16:"M\xE5ned",17:"Miesi\u0105c",18:"M\xEAs",19:"Lun\u0103",20:"\u041C\u0435\u0441\u044F\u0446"
,27:"Mesec",21:"Mes",22:"M\xE5nad",23:"Ay",24:"\u041C\u0456\u0441\u044F\u0446\u044C"
};C.A8j={1:"Stopa uginu\u0107a",2:"\u0421\u043C\u044A\u0440\u0442\u043D\u043E\u0441\u0442"
,3:"\u6B7B\u4EA1\u7387",25:"Smrtnost",4:"Smrtnost",5:"D\xF8delighed",0:"Mortality"
,6:"Sterfte",7:"Suremus",8:"Kuolleisuus",9:"Taux de perte",10:"Verlustrate",11:"\u0398\u03BD\u03B7\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1"
,12:"Hal\xE1loz\xE1s",13:"Mortalit\xE0",15:"Mirst\u012Bba",26:"Mirtingumas",16:"D\xF8delighet"
,17:"\u015Amiertelno\u015B\u0107",18:"Mortalidade",19:"Mortalitate",20:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043F\u043E\u0442\u0435\u0440\u044C"
,27:"Smrtnost",21:"Mortalidad",22:"D\xF6dlighet",23:"\xD6l\xFCm oran\u0131",24:"\u041A\u043E\u0435\u0444\u0456\u0446\u0456\u0454\u043D\u0442 \u0432\u0442\u0440\u0430\u0442"
};C.A8k={1:"Senzor kretanja",2:"\u0421\u0435\u043D\u0437\u043E\u0440 \u0437\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435"
,3:"\u904B\u52D5\u611F\u61C9\u5668",25:"Senzor pokreta",4:"\u010Cidlo pohybu",5:
"Bev\xE6gelsessensor",0:"Motion Sensor",6:"Beweginssensor",7:"Liikumisandur",8:"Liiketunnistin"
,9:"Capteur de position",10:"Lagesensor",11:"\u0391\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AE\u03C2 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Mozg\xE1s\xE9rz\xE9kel\u0151",13:"Sensore di movimento",15:"Kust\u012Bbas sensors"
,26:"Judesio daviklis",16:"Bevegelsessensor",17:"Czujnik ruchu",18:"Sensor de movimento"
,19:"Senzor de mi\u0219care",20:"\u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F"
,27:"Senzor gibanja",21:"Sensor de movimiento",22:"R\xF6relsesensor",23:"Hareket sens\xF6r\xFC"
,24:"\u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"
};C.ArA={1:"Jedno grlo / vi\u0161e grla",2:"\u041C\u043D\u043E\u0433\u043E",3:"\u500D\u6578"
,25:"Vi\u0161ekratnici",4:"N\xE1sobky",5:"Flertal",0:"Multiples",6:"Eenling/Meerling"
,7:"Paljunda",8:"Toistot",9:"Multiple",10:"Einling/Mehrling",11:"\u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03B1"
,12:"T\xF6bbsz\xF6r\xF6s\xF6k",13:"Multipli",15:"Reizin\u0101jumi",26:"Kartotiniai"
,16:"Multipliser",17:"Wielokrotno\u015Bci",18:"M\xFAltiplos",19:"Multipli",20:"\u0411\u043B\u0438\u0437\u043D\u0435\u0446\u044B"
,27:"Ve\u010Dkratniki",21:"Ternero simple/m\xFAltiple",22:"Multipel",23:"\xC7oklu"
,24:"\u0411\u043B\u0438\u0437\u043D\u044E\u043A\u0438"};C.BkU={1:"prije {1} dana"
,2:"\u041F\u0440\u0435\u0434\u0438 {1} \u0434\u043D\u0438",3:"{1}\u5929\u524D",25:
"{1} dana prije",4:"Dny p\u0159ed",5:"{1} dage siden",0:"{1} days ago",6:"{1} dagen geleden"
,7:"{1} p\xE4eva tagasi",8:"{1} p\xE4iv\xE4\xE4 sitten",9:"il y a {1} jour",10:"vor {1} Tagen"
,11:"\u03A0\u03C1\u03AF\u03BD \u03B1\u03C0\u03AF {1} \u03BC\u03AD\u03C1\u03B1",12:
"{1} napja",13:"{1} giorni fa",15:"{1} dienas atpaka\u013C",26:"prie\u0161 {1} dienas"
,16:"For {1} dager siden",17:"{1} dni temu",18:"{1} dias atr\xE1s",19:"acum {1} zile"
,20:"{1} \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434",27:"{1} dni nazaj"
,21:"hace {1} d\xEDas",22:"f\xF6r {1} dagar sedan",23:"{1} g\xFCn \xF6nce",24:"{1} \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443"
};C.ASb={1:"{1} od 4",2:"{1} \u043E\u0442 4",3:"4\u5206\u4E4B{1}",25:"{1} od 4",
4:"{1} z 4",5:"{1} af 4",0:"{1} of 4",6:"{1} van 4",7:"{1} neljast",8:"{1} / 4",
9:"{1} de 4",10:"{1} von 4",11:"{1} \u03B1\u03C0\u03CC 4",12:"{1} a 4-b\u0151l",
13:"{1} di 4",15:"{1} no 4",26:"{1} i\u0161 4",16:"{1} av 4",17:"{1} z 4",18:"{1} de 4"
,19:"{1} din 4",20:"{1} \u0438\u0437 4",27:"{1} od 4",21:"{1} de 4",22:"{1} av 4"
,23:"{1} / 4",24:"{1} \u0456\u0437 4"};C.BkX={1:"Identifikacioni broj \u017Eivotinje je ve\u0107 povezan s ovom \u017Eivotinjom!\nPonovna "+
"dodjela ID-a nije mogu\u0107a!",2:"ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0432\u0435\u0447\u0435 "+
"\u0435 \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u043E \u0441 \u0442\u043E\u0432\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 ID \u043D\u0435 \u0435 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E!"
,3:"\u6B64\u52D5\u7269\u5DF2\u7D93\u9023\u7D50\u4E86\u4E00\u500B\u52D5\u7269\u8B58\u5225\u78BC\uFF01\n\u7121\u6CD5\u91CD\u65B0\u5206\u914D\u8B58\u5225\u78BC\uFF01"
,25:"Identifikacijski broj \u017Eivotinje ve\u0107 je povezan s ovom \u017Eivotinjom!\nPonovna "+
"dodjela ID-a nije mogu\u0107a!",4:"Toto zv\xED\u0159e ji\u017E m\xE1 p\u0159i\u0159azen\xE9 ID!\nP\u0159e\u0159azen\xED "+
"ID nen\xED mo\u017En\xE9!",5:"Et dyre-ID er allerede knyttet til dette dyr!\nGenudpegning af ID er ikke "+
"muligt!",0:"An animal ID is already linked to this animal!\nID reassignment is not "+
"possible!",6:"Er is al een nummer gelinkt aan dit dier.",7:"Loomaga on juba ID seotud!\nID \xFCmberm\xE4\xE4ramine pole v\xF5imalik!"
,8:"T\xE4lle el\xE4imelle on jo annettu korvamerkkinumero! Toisen numeron antaminen "+
"ei ole mahdollista!",9:"Un n\xB0 d\'identit\xE9 a \xE9t\xE9 d\xE9j\xE0 attribu\xE9 \xE0 cet animal\xA0! "+
"Une autre attribution n\'est plus possible\xA0!",10:"Diesem Tier wurde bereits eine Ohrmarken~nummer zuge~ordnet! Die Zu~weisung "+
"einer anderen Nummer ist nicht m\xF6glich!",11:"\u0388\u03BD\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AE\u03B4\u03B7 "+"\u03C3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF \u03BC\u03B5 "+
"\u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03B6\u03CE\u03BF!\n\u0397 \u03B5\u03C0\u03B1\u03BD\u03B1\u03BA\u03B1\u03C4\u03B1\u03BD\u03BF\u03BC\u03AE "+
"\u03C4\u03BF\u03C5 ID \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 "+"\u03B4\u03C5\u03BD\u03B1\u03C4\u03AE!"
,12:"Egy \xE1llat azonos\xEDt\xF3ja m\xE1r hozz\xE1 van rendelve ehhez az \xE1llathoz!\nAzonos\xEDt\xF3 "+
"\xFAjra hozz\xE1rendel\xE9se nem lehets\xE9ges!",13:"Un ID animale \xE8 gi\xE0 collegato a questo animale!\nLa riassegnazione "+
"dell\'ID non \xE8 possibile!",15:"Dz\u012Bvnieka ID jau ir saist\u012Bts ar \u0161o dz\u012Bvnieku!\nID "+
"p\u0101rpie\u0161\u0137ir\u0161ana nav iesp\u0113jama!",26:"Gyv\u016Bno ID jau priskirtas \u0161iam gyv\u016Bnui!\nID perskirstymas "+
"ne\u012Fmanomas!",16:"Et dyre-ID er allerede koblet til dette dyret!\nID-omtildeling er ikke "+
"mulig!",17:"ID zwierz\u0119cia jest ju\u017C przypisane do tego zwierz\u0119cia!\nNie "+
"mo\u017Cna przypisa\u0107 ponownie ID!",18:"Um ID de animal j\xE1 est\xE1 vinculado a este animal!\nA reatribui\xE7\xE3o "+
"de ID n\xE3o \xE9 poss\xEDvel!",19:"Un ID de animal este deja asociat acestui animal!\nReasignarea ID-ului "+
"nu este posibil\u0103!",20:"\u041A \u044D\u0442\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D ID!\n\u041F\u0435\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "+
"ID \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E!",27:"ID \u017Eivali je \u017Ee povezan s to \u017Eivaljo!\nPonovna dodelitev "+
"ID-ja ni mo\u017Ena!",21:"\xA1Un ID de animal ya est\xE1 vinculado a este animal!\n\xA1No es posible "+
"la reasignaci\xF3n del ID!",22:"Ett djur-ID \xE4r redan kopplat till detta djur!\nID-omtilldelning \xE4r "+
"inte m\xF6jlig!",23:"Bu hayvana zaten bir hayvan kimli\u011Fi ba\u011Fl\u0131!\nKimli\u011Fin "+
"yeniden atanmas\u0131 m\xFCmk\xFCn de\u011Fil!",24:"\u0414\u043E \u0446\u0456\u0454\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0432\'\u044F\u0437\u0430\u043D\u043E "+"ID!\n\u041F\u0435\u0440\u0435\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"ID \u043D\u0435 \u0454 \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u043C!"};C.Uq={
1:"Oznaka u\u0161ne markice",2:"\u0423\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430"
,3:"\u570B\u5BB6\u52D5\u7269\u8B58\u5225\u78BC",25:"Nacionalni identifikacijski broj \u017Eivotinje"
,4:"N\xE1rodn\xED identifikace zv\xED\u0159at",5:"Nationalt dyre-ID",0:"National animal ID"
,6:"Oormerknummer",7:"Riiklik looma ID",8:"Kansallinen el\xE4in ID",9:"\u2116 de la boucle"
,10:"Ohrmarken~nummer",11:"\u0395\u03B8\u03BD\u03B9\u03BA\u03CC \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"Nemzeti \xE1llat azonos\xEDt\xF3",13:"Identificativo nazionale dell\'animale"
,15:"Nacion\u0101lais dz\u012Bvnieka ID",26:"Nacionalinis gyv\u016Bno ID",16:"Nasjonalt dyre-ID"
,17:"Krajowy identyfikator zwierz\u0119cia",18:"Identifica\xE7\xE3o nacional de animais"
,19:"Identificator na\u021Bional al animalelor",20:"\u041D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438"
,27:"Nacionalna identifikacija \u017Eivali",21:"ID nacional de animal",22:"Nationellt djur-ID"
,23:"Ulusal hayvan kimli\u011Fi",24:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"
};C.Gs={1:"novo",2:"\u041D\u043E\u0432",3:"\u65B0\u7684",25:"Novo",4:"Nov\xFD",5:
"Ny",0:"New",6:"Nieuw",7:"Uus",8:"Uusi",9:"Nouveau",10:"Neu",11:"\u039D\u03AD\u03BF"
,12:"\xDAj",13:"Nuovo",15:"Jauns",26:"Naujas",16:"Ny",17:"Nowy",18:"Novo",19:"Nou"
,20:"\u041D\u043E\u0432\u044B\u0439",27:"Novo",21:"Nuevo",22:"Ny",23:"Yeni",24:"\u041D\u043E\u0432\u0438\u0439"
};C.A8n={1:"Nova \u017Eivotinja",2:"\u041D\u043E\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u65B0\u52D5\u7269",25:"Novi \u017Eivotinja",4:"Nov\xE9 zv\xED\u0159e",5:"Nyt dyr"
,0:"New animal",6:"Nieuw dier",7:"Uus loom",8:"Uusi el\xE4in",9:"Nouvel animal",
10:"Neues Tier",11:"\u039D\u03AD\u03BF \u03B6\u03CE\u03BF",12:"\xDAj \xE1llat",13:
"Nuovo animale",15:"Jauns dz\u012Bvnieks",26:"Naujas gyv\u016Bnas",16:"Nytt dyr"
,17:"Nowe zwierz\u0119",18:"Novo animal",19:"Animal nou",20:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"Novo \u017Eival",21:"Nuevo animal",22:"Nytt djur",23:"Yeni Hayvan",24:"\u041D\u043E\u0432\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430"
};C.NewAnimals={1:"Nove \u017Eivotinje",2:"\u041D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,3:"\u65B0\u52D5\u7269",25:"Nove \u017Eivotinje",4:"Nov\xE1 zv\xED\u0159ata",5:"Nye dyr"
,0:"New animals",6:"Niewe dieren",7:"Uued loomad",8:"Uudet el\xE4imet",9:"Nouveaux animaux"
,10:"Neue Tiere",11:"\u039D\u03AD\u03B1 \u03B6\u03CE\u03B1",12:"\xDAj \xE1llatok"
,13:"Nuovi animali",15:"Jauni dz\u012Bvnieki",26:"Nauji gyv\u016Bnai",16:"Nye dyr"
,17:"Nowe zwierz\u0119ta",18:"Novos animais",19:"Animale noi",20:"\u041D\u043E\u0432\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,27:"Nove \u017Eivali",21:"Nuevos animales",22:"Nya djur",23:"Yeni Hayvanlar",24:
"\u041D\u043E\u0432\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A8o={1:
"Novo na farmi",2:"\u041D\u043E\u0432\u043E \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430"
,3:"\u8FB2\u5834\u65B0\u54C1",25:"Novo na farmi",4:"Nov\xE9 na farm\u011B",5:"Ny p\xE5 g\xE5rden"
,0:"New on farm",6:"Nieuw op bedrijf",7:"Uus farmis",8:"Uusi tilalla",9:"Arriv\xE9es"
,10:"Zug\xE4nge",11:"\u039D\u03AD\u03BF \u03C3\u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1"
,12:"\xDAj a farmon",13:"Nuovo in fattoria",15:"Jauns saimniec\u012Bb\u0101",26:
"Naujas \u016Bkyje",16:"Ny p\xE5 g\xE5rden",17:"Nowy na farmie",18:"Novo na fazenda"
,19:"Nou la ferm\u0103",20:"\u041D\u043E\u0432\u043E\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0435"
,27:"Novo na kmetiji",21:"Nuevo en la granja",22:"Ny p\xE5 g\xE5rden",23:"\xC7iftlikte Yeni"
,24:"\u041D\u043E\u0432\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0456"};C.A8p={
1:"Novo na farmi, nema transpondera",2:"\u041D\u043E\u0432\u043E \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430, "+
"\u0431\u0435\u0437 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440",3:"\u8FB2\u5834\u65B0\u8A2D\u5099\uFF0C\u7121\u61C9\u7B54\u5668"
,25:"Novo na farmi, nema transpondera",4:"Nov\xE9 na farm\u011B, bez transpond\xE9ru"
,5:"Ny p\xE5 g\xE5rden, ingen transponder",0:"New on farm, no transponder",6:"Nieuw op bedrijf, geen transponder"
,7:"Uus farmis, ilma transponderita",8:"Uusi tilalla, ei transponderia",9:"Arriv\xE9es, pas de transpondeur"
,10:"Zuk\xE4ufe, kein Transponder",11:"\u039D\u03AD\u03BF\u03C2 \u03C3\u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1, "+
"\u03C7\u03C9\u03C1\u03AF\u03C2 \u03B4\u03B9\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"\xDAj a farmon, nincs transzponder",13:"Nuovo nella fattoria, senza transponder"
,15:"Jauns saimniec\u012Bb\u0101, bez transpondera",26:"Naujas \u016Bkyje, be atpa\u017Einimo prietaiso"
,16:"Ny p\xE5 g\xE5rden, ingen transponder",17:"Nowy na farmie, bez transpondera"
,18:"Novo na fazenda, sem transponder",19:"Nou pe ferm\u0103, f\u0103r\u0103 transponder"
,20:"\u041D\u043E\u0432\u043E\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0435, "+
"\u043D\u0435\u0442 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,27:"Novo na kmetiji, brez transponderja",21:"Nuevo en la granja, sin transpondedor"
,22:"Ny p\xE5 g\xE5rden, ingen transponder",23:"\xC7iftlikte yeni, aktar\u0131c\u0131 yok"
,24:"\u041D\u043E\u0432\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0456, "+"\u0431\u0435\u0437 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.ASq={1:"briga o novoro\u0111enim grlima",2:"\u0413\u0440\u0438\u0436\u0430 \u0437\u0430 \u043D\u043E\u0432\u043E\u0440\u043E\u0434\u0435\u043D\u043E"
,3:"\u65B0\u751F\u5C0F\u725B\u8B77\u7406",25:"Njega novoro\u0111en\u010Dadi",4:"P\xE9\u010De o novorozen\xE9"
,5:"Nyf\xF8dtpleje",0:"Newborn care",6:"Eerst verzorging kaf",7:"Vasts\xFCndinute hool."
,8:"Vastasyntynyt hoito",9:"Premier soin",10:"Erstversorgung",11:"\u03A6\u03C1\u03BF\u03BD\u03C4\u03AF\u03B4\u03B1 \u03BD\u03B5\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C4\u03BF\u03C5"
,12:"\xDAjsz\xFCl\xF6tt gondoz\xE1s",13:"Cura del neonato",15:"jaundzimu\u0161o apr\u016Bpe"
,26:"Naujagimi\u0173 prie\u017Ei\u016Bra",16:"Omsorg for nyf\xF8dte",17:"Opieka nad noworodkiem"
,18:"Cuidados com rec\xE9m-nascido",19:"\xCEngrijirea nou-n\u0103scutului",20:"\u041F\u0435\u0440\u0432\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C"
,27:"Negovanje novorojen\u010Dkov",21:"Atenci\xF3n primaria",22:"Nyf\xF6ddv\xE5rd"
,23:"Yeni do\u011Fan bak\u0131m\u0131",24:"\u041F\u0435\u0440\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"
};C.AEG={1:"Sljede\u0107i broj \u017Eivotinje",2:"ID \u043D\u0430 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E\u0442\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",3:"\u4E0B\u4E00\u500B\u52D5\u7269\u7DE8\u865F"
,25:"Sljede\u0107i broj \u017Eivotinje",4:"Dal\u0161\xED identifika\u010Dn\xED \u010D\xEDslo zv\xED\u0159ete"
,5:"N\xE6ste dyre-ID",0:"Next animal ID",6:"Volgend diernummer",7:"J\xE4rgmine looma ID"
,8:"Seuraavan el\xE4imen tunnus",9:"Prochain n\xB0 d\'animal",10:"N\xE4chste Tiernummer"
,11:"\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"K\xF6vetkez\u0151 \xE1llat azonos\xEDt\xF3",13:"Prossimo ID animale"
,15:"N\u0101kamais dz\u012Bvnieka ID",26:"Kitas gyv\u016Bno ID",16:"Neste dyre-ID"
,17:"Nast\u0119pny numer ID zwierz\u0119cia",18:"Pr\xF3ximo ID do animal",19:"Urm\u0103torul ID al animalului"
,20:"ID \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Naslednja \u0161tevilka \u017Eivali",21:"Pr\xF3ximo animal ID",22:"N\xE4sta djur-ID"
,23:"Sonraki hayvan kimli\u011Fi",24:"ID \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.No={1:"Ne",2:"\u041D\u0435",3:"\u4E0D",25:"Ne",4:"Ne",5:"Nej",0:"No",6:"Nee"
,7:"Ei",8:"Ei",9:"Non",10:"Nein",11:"\u0384\u039F\u03C7\u03B9",12:"Nem",15:"N\u0113"
,26:"Ne",16:"Nei",17:"Nie",18:"N\xE3o",19:"Nu",20:"\u041D\u0435\u0442",27:"Ne",22:
"Nej",23:"Hay\u0131r",24:"\u041D\u0456"};C.A8q={1:"Nikakve aktivnosti",2:"\u041D\u044F\u043C\u0430"
,3:"\u7121\u884C\u52D5",25:"Bez akcije",4:"\u017D\xE1dn\xE1 akce",5:"Ingen handling"
,0:"No action",6:"geen actie",7:"Tegevust pole",8:"Ei toimintaa",9:"Pas d\u2019action"
,10:"Keine Aktion",11:"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1"
,12:"Semmi cselekv\xE9s",13:"Nessuna azione",15:"Bez darb\u012Bbas",26:"Jokio veiksmo"
,16:"Ingen handling",17:"Brak dzia\u0142ania",18:"Sem a\xE7\xE3o",19:"F\u0103r\u0103 ac\u021Biune"
,20:"\u0411\u0435\u0437 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",27:"Brez dejanja"
,21:"Ninguna acci\xF3n",22:"Ingen \xE5tg\xE4rd",23:"Eylem Yok",24:"\u0411\u0435\u0437 \u0434\u0456\u0457"
};C.A8r={1:"Nema dodijeljenog ID broja",2:"\u041D\u044F\u043C\u0430 \u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u672A\u6307\u5B9A\u570B\u5BB6\u52D5\u7269\u8B58\u5225\u78BC",25:"Nema dodijeljenog nacionalnog identifikacijskog broja \u017Eivotinje."
,4:"\u017D\xE1dn\xE9 p\u0159id\u011Blen\xE9 identifika\u010Dn\xED \u010D\xEDslo "+
"n\xE1rodn\xEDho zv\xED\u0159ete",5:"Intet nationalt dyre-ID tildelt",0:"No national animal ID assigned"
,6:"Geen oormerk toegewezen",7:"Looma ID pole m\xE4\xE4ratud",8:"Ei el\xE4intunnusta"
,9:"Aucun ID d\u2019animal attri~bu\xE9",10:"Keine Ohrmar~kennummer zugewiesen",
11:"\u0394\u03B5\u03BD \u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",12:"Nincs hozz\xE1~rendelt nem~ze~ti \xE1llat-azonos."
,13:"Nessun ID animale nazionale assegnato",15:"Nav pie\u0161\u0137irts valsts dz\u012Bvnieka ID"
,26:"Nacionalinis gyv\u016Bno ID nepriskirtas",16:"Ingen dyre-ID tildelt",17:"Brak przypisanego krajowego identyfikatora zwierz\u0119cia"
,18:"Nenhum ID de animal nacional atribu\xEDdo",19:"Niciun ID de animal na\u021Bional atribuit"
,20:"\u041D\u043E\u043C\u0435\u0440 \u0436\u0438~\u0432\u043E\u0442~\u043D\u043E\u0433\u043E "+
"\u043D\u0435 \u043D\u0430~\u0437\u043D\u0430~\u0447\u0435\u043D",27:"Brez dodeljene nacionalne identifikacijske \u0161tevilke \u017Eivali"
,21:"Ning\xFAn ID de animal asignado",22:"Ingen nationellt tilldelad djur-ID",23:
"Ulusal hayvan kimli\u011Fi atanmad\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E"};C.AEH={
1:"Nema registrovanih \u017Eivotinja!",2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E/\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438!",3:"\u6C92\u6709\u5C0F\u725B\u5DF2\u767B\u9304\uFF01"
,25:"Nema registriranih \u017Eivotinja!",4:"Nebyla registrov\xE1na \u017E\xE1dn\xE1 zv\xED\u0159ata"
,5:"Ingen dyr registreret!",0:"No animal(s) registered!",6:"Geen dier(en) aangemeld!"
,7:"Loom(ad) pole registreeritud!",8:"Ei rekister\xF6ityj\xE4 el\xE4imi\xE4!",9:
"Pas d\u2019animal(s) enregistr\xE9(s)\xA0!",10:"Kein(e) Tier(e) angemeldet!",11:
"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03B7\u03B8\u03B5\u03AF "+
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF!",12:"Nincs regisztr\xE1lt \xE1llat!"
,13:"Nessun animale registrato!",15:"Nav re\u0123istr\u0113tu dz\u012Bvnieku!",26:
"N\u0117ra registruot\u0173 gyv\u016Bn\u0173!",16:"Ingen dyr registrert!",17:"Nie zarejestrowano zwierz\u0105t!"
,18:"Nenhum animal registrado!",19:"Niciun animal \xEEnregistrat!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 "+
"\u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B!"
,27:"Nobena \u017Eival ni registrirana!",21:"\xA1No hay animal(es) registrado(s)!"
,22:"Inga djur registrerade!",23:"Kay\u0131tl\u0131 hayvan(lar) yok!",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430/\u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456!"
};C.A8s={1:"Nema \u017Eivotinja na listi alarma!",2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438 "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"\u6C92\u6709\u5C0F\u725B\u5728\u8B66\u5831\u6E05\u55AE\u4E0A\uFF01",25:"Nema \u017Eivotinja na popisu alarma!"
,4:"\u017D\xE1dn\xE1 zv\xED\u0159ata na seznamu alarm\u016F",5:"Ingen dyr p\xE5 alarmlisten!"
,0:"No animal(s) on alarm list!",6:"Geen dier(en) op alarmlijst!",7:"Hoiatuste nimekirjas pole loomi!"
,8:"Ei el\xE4imi\xE4 h\xE4lytyslistalla!",9:"Pas d\u2019animal(s) sur la liste d\u2019alerte\xA0!"
,10:"Kein(e) Tier(e) auf Alarmliste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD!"
,12:"\xC1llat(ok) nincsenek a riaszt\xE1si list\xE1n!",13:"Nessun animale nella lista di allarme!"
,15:"Nav dz\u012Bvnieku trauksmes sarakst\u0101!",26:"N\u0117ra gyv\u016Bn\u0173 pavojaus s\u0105ra\u0161e!"
,16:"Ingen dyr p\xE5 alarmliste!",17:"Brak zwierz\u0105t na li\u015Bcie alarmowej!"
,18:"Nenhum animal na lista de alarme!",19:"Niciun animal pe lista de alarm\u0103!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0442\u0440\u0435\u0432\u043E\u0433 "+
"\u043D\u0435\u0442!",27:"Na seznamu alarmov ni \u017Eivali!",21:"\xA1No figuran animal(es) en lista de alarmas!"
,22:"Inga djur p\xE5 larm listan!",23:"Alarm listesinde hayvan(lar) yok!",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438/\u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u0440\u0438\u0432\u043E\u0433 "+
"\u043D\u0435\u043C\u0430\u0454!"};C.A8t={1:"Nema \u017Eivotinja na listi za kontrolu!"
,2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438 "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435!"
,3:"\u6C92\u6709\u5C0F\u725B\u5728\u63A7\u5236\u6E05\u55AE\u4E0A\uFF01",25:"Nema \u017Eivotinja na popisu za kontrolu!"
,4:"\u017D\xE1dn\xE1 zv\xED\u0159ata na kontroln\xEDm seznamu",5:"Ingen dyr p\xE5 kontrollisten!"
,0:"No animal(s) on control list!",6:"Geen dier(en) op controle lijst!",7:"Kontrolli vajavad loomad puuduvad!"
,8:"Ei el\xE4imi\xE4 kontrolliluettelossa!",9:"Pas d\u2019animal(s) sur la liste de contr\xF4le\xA0!"
,10:"Kein(e) Tier(e) auf Kontrollliste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5!"
,12:"Nincs \xE1llat a szab\xE1lyoz\xE1si list\xE1n!",13:"Nessun animale nella lista di controllo!"
,15:"Nav dz\u012Bvnieku kontrolsarakst\u0101!",26:"Joki\u0173 gyv\u016Bn\u0173 kontroliniame s\u0105ra\u0161e!"
,16:"Ingen dyr p\xE5 kontrolllisten!",17:"Brak zwierz\u0105t na li\u015Bcie kontrolnej!"
,18:"Nenhum animal na lista de controle!",19:"Niciun animal pe lista de control!"
,20:"\u0412 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C "+
"\u0441\u043F\u0438\u0441\u043A\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043D\u0435\u0442!",27:"Nobena \u017Eival ni na seznamu nadzora!",21:"\xA1No figuran animal(es) en lista de control!"
,22:"Inga djur p\xE5 kontrollistan!",23:"Kontrol listesinde hayvan(lar) yok!",24:
"\u0423 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C\u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u0432\u0430\u0440\u0438\u043D "+"\u043D\u0435\u043C\u0430\u0454!"
};C.Awa={1:"Nema \u017Eivotinja na listi!",2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E (\u0438) "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!",3:"\u540D\u55AE\u4E0A\u6C92\u6709\u52D5\u7269\uFF01"
,25:"Nema \u017Eivotinja na popisu!",4:"\u017D\xE1dn\xE9 zv\xED\u0159e na seznamu!"
,5:"Ingen dyr p\xE5 listen!",0:"No animal(s) on list!",6:"Geen dieren op de lijst"
,7:"\xDChtegi looma nimekirjas pole!",8:"Ei el\xE4imi\xE4 luettelossa!",9:"Aucun animal sur la liste\xA0!"
,10:"Kein(e) Tier(e) auf der Liste!",11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1!",12:"Nincsenek \xE1llatok a list\xE1n!",13:"Nessun animale nella lista!"
,15:"Nav dz\u012Bvnieku sarakst\u0101!",26:"Joki\u0173 gyv\u016Bn\u0173 s\u0105ra\u0161e!"
,16:"Ingen dyr p\xE5 listen!",17:"Brak zwierz\u0105t na li\u015Bcie!",18:"Nenhum animal na lista!"
,19:"Niciun animal pe list\u0103!",20:"\u041D\u0435\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 "+
"\u0441\u043F\u0438\u0441\u043A\u0435!",27:"Na seznamu ni \u017Eivali!",21:"\xA1Ning\xFAn animal en la lista!"
,22:"Inga djur p\xE5 listan!",23:"Listede hayvan(lar) yok!",24:"\u041D\u0435\u043C\u0430\u0454 \u0442\u0432\u0430\u0440\u0438\u043D \u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443!"};C.A8u={1:"Nema \u017Eivotinja na listi za pra\u0107enje!"
,2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E(\u0438) "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435!"
,3:"\u6C92\u6709\u52D5\u7269\u5728\u89C0\u5BDF\u540D\u55AE\u4E0A\uFF01",25:"Nema \u017Eivotinja na popisu za pra\u0107enje!"
,4:"\u017D\xE1dn\xE9 zv\xED\u0159e/\u017E\xE1dn\xE1 zv\xED\u0159ata na seznamu "+
"sledov\xE1n\xED!",5:"Ingen dyr p\xE5 observationslisten!",0:"No animal(s) on watch list!"
,6:"Geen dieren op Watchlist",7:"\xDChtegi looma vaatlusnimekirjas pole!",8:"Ei el\xE4imi\xE4 katselulistalla!"
,9:"Aucun animal sur la liste de suivi\xA0!",10:"Keine Tier(e) auf der Beobachtungsliste!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2!"
,12:"Nincsenek \xE1llatok a figyel\u0151list\xE1n!",13:"Nessun animale nella lista di osservazione!"
,15:"Nav dz\u012Bvnieku uzraudz\u012Bbas sarakst\u0101!",26:"N\u0117ra gyv\u016Bn\u0173 steb\u0117jimo s\u0105ra\u0161e!"
,16:"Ingen dyr p\xE5 overv\xE5kningslisten!",17:"Brak zwierz\u0105t na li\u015Bcie obserwacyjnej!"
,18:"Nenhum animal na lista de observa\xE7\xE3o!",19:"Niciun animal pe lista de supraveghere!"
,20:"\u041D\u0435\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 "+
"\u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F!"
,27:"Nobena \u017Eival na seznamu opazovanja!",21:"\xA1Ning\xFAn animal en la lista de seguimiento!"
,22:"Inga djur p\xE5 bevakningslistan!",23:"\u0130zleme listesinde hayvan(lar) yok!"
,24:"\u0416\u043E\u0434\u043D\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F!"
};C.A8v={1:"Prazna lista / svim \u017Eivotinjama su dodijeljeni ID brojevi!",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0434\u0430 \u0438\u043C\u0430\u0442 "+
"\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0438 ID (15 \u0446\u0438\u0444\u0440\u0438)!"
,3:"\u7A7A\u7684\u5217\u8868\uFF0C\n\u6240\u6709\u52D5\u7269\u90FD\u6709\u5206\u914D\u7684ID\uFF0815\u4F4D\u6578\u5B57\uFF09\uFF01"
,25:"Prazan popis,\nsva \u017Eivotinja imaju dodijeljene ID-ove (15 znamenki)!",
4:"Pr\xE1zdn\xFD seznam,\nv\u0161echna zv\xED\u0159ata maj\xED p\u0159id\u011Blen\xE1 "+
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
"(15 sz\xE1mjegy)!",13:"Lista vuota,\ntutti gli animali hanno un ID (15 cifre) assegnato!"
,15:"Tuk\u0161s saraksts,\nvienam dz\u012Bvniekam ir pie\u0161\u0137irts ID "+"(15 cipari)!"
,26:"Tu\u0161\u010Dias s\u0105ra\u0161as,\nvisi gyv\u016Bnai turi priskirtus "+"ID (15 skaitmen\u0173)!"
,16:"Tom liste,\nalle dyr har ID-er (15 sifre) tildelt!",17:"Pusta lista,\nwszystkie zwierz\u0119ta maj\u0105 przypisane identyfikatory "+
"(15 cyfr)!",18:"Lista vazia,\ntodos os animais t\xEAm IDs (15 d\xEDgitos) atribu\xEDdos!"
,19:"List\u0103 goal\u0103,\ntoate animalele au alocate numere de identificare "+
"(15 cifre)!",20:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442,\n\u0432\u0441\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 "+
"15-\u0437\u043D\u0430\u0447\u043D\u044B\u0435 ID-\u043D\u043E\u043C\u0435\u0440\u0430!"
,27:"Prazen seznam,\nvse \u017Eivali imajo dodeljene ID-je (15 \u0161tevilk)!",21:
"Lista vac\xEDa,\ntodos los animales tienen asignados IDs (15 d\xEDgitos)",22:"Tom lista,\nalla djur har tilldelats ID-nummer (15 siffror)!"
,23:"Bo\u015F liste,\nt\xFCm hayvanlara atanm\u0131\u015F kimlikler (15 haneli) "+
"var!",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439,\n\u0443\u0441\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 "+
"15-\u0437\u043D\u0430\u0447\u043D\u0456 ID-\u043D\u043E\u043C\u0435\u0440\u0438!"
};C.A8w={1:"Lista prazna / svim \u017Eivotinjama je dodijeljen oda\u0161ilja\u010D!"
,2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0438\u043C\u0430\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"
,3:"\u7A7A\u7684\u5217\u8868\uFF0C\n\u6240\u6709\u52D5\u7269\u90FD\u5DF2\u914D\u7F6E\u4E86\u767C\u5C04\u5668\uFF01"
,25:"Prazan popis,\nsvim \u017Eivotinjama dodijeljeni su oda\u0161ilja\u010Di!",
4:"Pr\xE1zdn\xFD seznam,\nv\u0161echna zv\xED\u0159ata maj\xED p\u0159id\u011Blen\xE9 "+
"transpond\xE9ry!",5:"Tom liste,\nalle dyr har tildelt transpondere!",0:"Empty list,\nall animals do have transponders assigned!"
,6:"Lege lijst. Alle dieren hebben geregistreerde transponders",7:"T\xFChi nimekiri,\nk\xF5ikidele loomadele on vastuv\xF5tja nr m\xE4\xE4ratud!"
,8:"Tyhj\xE4 luettelo,\nkaikille el\xE4imille on m\xE4\xE4ritetty transponderit!"
,9:"Liste vide,\ntous les animaux ont des transpondeurs attribu\xE9s\xA0!",10:"Liste leer,\nallen Tieren wurden Transponder zugewiesen!"
,11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5\u03C2 "+
"\u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CE\u03C4\u03B5\u03C2!",12:"\xDCres lista,\nminden \xE1llatnak van hozz\xE1rendelve transzponder!"
,13:"Lista vuota,\ntutti gli animali hanno trasponder assegnati!",15:"Tuk\u0161s saraksts,\nvisiem dz\u012Bvniekiem ir pie\u0161\u0137irti transponderi!"
,26:"Tu\u0161\u010Dias s\u0105ra\u0161as,\nvisi gyv\u016Bnai turi priskirtus "+"transponderius!"
,16:"Tom liste,\nalle dyr har f\xE5tt transpondere!",17:"Pusta lista,\nwszystkie zwierz\u0119ta maj\u0105 przypisane transpondery!"
,18:"Lista vazia,\ntodos os animais t\xEAm transponders atribu\xEDdos!",19:"List\u0103 goal\u0103,\ntoate animalele au transpondere atribuite!"
,20:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442,\n\u0432\u0441\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B!",27:"Prazen seznam,\nvsi \u017Eivali imajo dodeljene transponderje!"
,21:"Lista vac\xEDa,\ntodos los animales tienen asignados transpondedores",22:"Tom lista,\nalla djur har transpondrar tilldelade!"
,23:"Bo\u015F liste,\nt\xFCm hayvanlara atanm\u0131\u015F aktar\u0131c\u0131lar "+
"var!",24:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439,\n\u0443\u0441\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"};C.A8x={
1:"Nisu une\u0161eni podaci o te\u017Eini!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u0442\u0435\u0433\u043B\u0430 \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435!"
,3:"\u9084\u6C92\u6709\u8A18\u9304\u51FA\u751F\u9AD4\u91CD\uFF01",25:"Jo\u0161 nisu zabilje\u017Eene poro\u0111ajne te\u017Eine!"
,4:"Dosud nejsou zaznamen\xE1ny \u017E\xE1dn\xE9 porodn\xED hmotnosti!",5:"Ingen f\xF8dselsv\xE6gte registreret endnu!"
,0:"No birth weights recorded yet!",6:"Geen geboorte gewicht opgenomen",7:"Registreeritud s\xFCnnikaalud puuduvad!"
,8:"Syntym\xE4painoja ei ole viel\xE4 kirjattu!",9:"Aucun poids de naissance\nenregistr\xE9 pour l\'instant"
,10:"Noch keine Geburts~gewichte erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03AC\u03C1\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2!"
,12:"M\xE9g nem r\xF6gz\xEDtettek sz\xFClet\xE9si s\xFAlyokat!",13:"Non sono ancora stati registrati pesi alla nascita!"
,15:"Nav ierakst\u012Bti dzim\u0161anas svari v\u0113l!",26:"N\u0117ra u\u017Efiksuot\u0173 gimimo svori\u0173!"
,16:"Ingen f\xF8dselsvekter registrert enn\xE5!",17:"Nie zarejestrowano jeszcze wagi urodzeniowej!"
,18:"Nenhum peso ao nascer registrado ainda!",19:"Nu s-au \xEEnregistrat \xEEnc\u0103 greut\u0103\u021Bile la na\u0219tere!"
,20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 "+
"\u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D!"
,27:"Nobene porodne te\u017Ee \u0161e niso zabele\u017Eene!",21:"A\xFAn no se han registrado pesos al nacer"
,22:"Inga f\xF6delsevikter registrerade \xE4n!",23:"Hen\xFCz do\u011Fum a\u011F\u0131rl\u0131\u011F\u0131 kaydedilmedi!"
,24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430!"
};C.A8y={1:"Nema registrovanih teladi!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u043D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0442\u0435\u043B\u0435\u0442\u0430!",3:"\u9084\u6C92\u6709\u767B\u8A18\u7684\u5C0F\u725B\uFF01"
,25:"Nema jo\u0161 neevidentiranih teladi!",4:"\u017D\xE1dn\xE1 telata zat\xEDm nezaregistrov\xE1na!"
,5:"Ingen kalve registreret endnu!",0:"No calves unregistered yet!",6:"Geen ongeregistreerde kalveren"
,7:"Registreerimata vasikad puuduvad!",8:"Ei vasikoita, joita ei ole rekister\xF6ity!"
,9:"Aucun animal n\u2019a encore \xE9t\xE9 d\xE9senregistr\xE9\xA0!",10:"Noch keine K\xE4lber abgemeldet!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03BC\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9 "+
"\u03B4\u03B5\u03BD \u03B4\u03B9\u03B5\u03B3\u03C1\u03AC\u03C6\u03B7 \u03B1\u03BA\u03CC\u03BC\u03B1!"
,12:"M\xE9g nincs bejegyzett borj\xFA!",13:"Nessun vitello registrato ancora!",15:
"Nav re\u0123istr\u0113tu te\u013Cu!",26:"N\u0117ra dar neu\u017Eregistruot\u0173 ver\u0161i\u0173!"
,16:"Fortsatt inger kalver uregistrert",17:"Brak niezarejestrowanych ciel\u0105t!"
,18:"Nenhum bezerro registrado ainda!",19:"Niciun vi\u021Bel ne\xEEnregistrat \xEEnc\u0103!"
,20:"\u041D\u0438 \u043E\u0434\u0438\u043D \u0442\u0435\u043B\u0451\u043D\u043E\u043A "+
"\u0435\u0449\u0451 \u043D\u0435 \u0441\u043D\u044F\u0442 \u0441 \u0443\u0447\u0451\u0442\u0430!"
,27:"Nobeno tele \u0161e ni registrirano!",21:"A\xFAn no se han registrado terneros"
,22:"Inga kalvar registrerade \xE4nnu!",23:"Hen\xFCz kay\u0131t alt\u0131na al\u0131nmam\u0131\u015F buza\u011F\u0131 "+
"yok!",24:"\u0429\u0435 \u0436\u043E\u0434\u043D\u0435 \u0442\u0435\u043B\u044F \u043D\u0435 "+
"\u0437\u043D\u044F\u0442\u043E \u0437 \u043E\u0431\u043B\u0456\u043A\u0443!"};C.
A8z={1:"Bez promjene",2:"\u0411\u0435\u0437 \u043F\u0440\u043E\u043C\u044F\u043D\u0430"
,3:"\u7121\u8B8A\u66F4",25:"Bez promjene",4:"\u017D\xE1dn\xE1 zm\u011Bna",5:"Ingen \xE6ndring"
,0:"No change",6:"Geen verandering",7:"Ei ole muudatusi",8:"Ei muutosta",9:"Aucun changement"
,10:"Keine \xC4nderung",11:"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE"
,12:"Nincs v\xE1ltoz\xE1s",13:"Nessun cambiamento",15:"Bez izmai\u0146\u0101m",26:
"Joki\u0173 poky\u010Di\u0173",16:"Ingen endring",17:"Bez zmian",18:"Sem mudan\xE7a"
,19:"F\u0103r\u0103 schimbare",20:"\u0411\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439"
,27:"Brez spremembe",21:"Sin cambios",22:"Ingen f\xF6r\xE4ndring",23:"De\u011Fi\u015Fiklik yokHYD"
,24:"\u0411\u0435\u0437 \u0437\u043C\u0456\u043D"};C.BkZ={1:"Nema krava na spisku!"
,2:"\u041D\u044F\u043C\u0430 \u043A\u0440\u0430\u0432\u0430 (\u0438) \u0432 "+"\u0441\u043F\u0438\u0441\u044A\u043A\u0430"
,3:"\u540D\u55AE\u4E0A\u6C92\u6709\u725B\uFF01",25:"Nema krava na popisu!",4:"\u017D\xE1dn\xE1 kr\xE1va (kr\xE1vy) na seznamu!"
,5:"Ingen ko(er) p\xE5 listen!",0:"No cow(s) on list!",6:"geen koeien op de lijst"
,7:"Nimekirjas pole \xFChtegi lehma!",8:"Ei lehmi\xE4 listalla!",9:"Aucune vache sur la liste\xA0!"
,10:"Kein(e) K\xFCh(e) auf der Liste!",11:"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1 "+
"\u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!",12:"Nincs teh\xE9n a list\xE1n!"
,13:"Nessuna mucca nella lista!",15:"Nav govs(-u) sarakst\u0101!",26:"Joki\u0173 karv\u0117s(-i\u0173) s\u0105ra\u0161e!"
,16:"Ingen ku(er) p\xE5 listen!",17:"Nie ma krow(y) na li\u015Bcie!",18:"Sem vaca(s) na lista!"
,19:"Nicio vac\u0103 pe list\u0103!",20:"\u041D\u0435\u0442 \u043A\u043E\u0440\u043E\u0432 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435!"
,27:"Na seznamu ni krav!",21:"\xA1Ninguna vaca en la lista!",22:"Ingen ko(r) p\xE5 listan!"
,23:"Listede inek yok!",24:"\u041D\u0435\u043C\u0430\u0454 \u043A\u043E\u0440\u0456\u0432 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443!"
};C.ASr={1:"Na spisku nema zasu\u0161enih krava!",2:"\u041D\u044F\u043C\u0430 \u0441\u0443\u0445\u043E\u0441\u0442\u0439\u043E\u043D\u0430 "+
"(\u0438) \u043A\u0440\u0430\u0432\u0430 (\u0438) \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!"
,3:"\u540D\u55AE\u4E0A\u6C92\u6709\u4E7E\u725B\uFF01",25:"Nema suhih krava na popisu!"
,4:"\u017D\xE1dn\xE9 such\xE9 kr\xE1vy na seznamu!",5:"Ingen t\xF8rre k\xF8er p\xE5 listen!"
,0:"No dry cow(s) on list!",6:"Geen droge koeien op de lijst",7:"Kinnislehmade nimekirjas pole lehmi!"
,8:"Ei umpeutettuja lehmi\xE4 luettelossa!",9:"Aucune vache tarie sur la liste\xA0!"
,10:"Kein(e) trocken~stehende(n) K\xFCh(e) auf der Liste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C3\u03C4\u03B5\u03AF\u03C1\u03B5\u03C2 "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!"
,12:"Nincsenek sz\xE1raz tehenek a list\xE1n!",13:"Nessuna mucca asciutta nell\'elenco!"
,15:"Nav sausu govju sarakst\u0101!",26:"Saus\u0173 karvi\u0173 s\u0105ra\u0161e n\u0117ra!"
,16:"Ingen gjeldkyr p\xE5 listen",17:"Nie ma suchych kr\xF3w na li\u015Bcie!",18:
"Sem vaca(s) seca(s) na lista!",19:"Nicio vac\u0103 uscat\u0103 pe list\u0103!",
20:"\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435\u0442 \u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432!",27:"Na seznamu ni suhih krav!",21:"\xA1Ninguna vaca seca en la lista!"
,22:"Inga torra kor p\xE5 listan!",23:"Listede s\xFCtten kesilmi\u015F inek yok!"
,24:"\u0423 \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 "+
"\u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0438\u0445 \u043A\u043E\u0440\u0456\u0432!"
};C.A8A={1:"Nema novih krava na spisku!",2:"\u041D\u044F\u043C\u0430 \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u0435\u043B\u0435\u043D\u0430/\u0438 "+
"\u043A\u0440\u0430\u0432\u0430/\u0438 \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!"
,3:"\u6C92\u6709\u65B0\u9BAE\u7684\u725B\u5728\u540D\u55AE\u4E0A\uFF01",25:"Nema svje\u017Eih krava na popisu!"
,4:"\u017D\xE1dn\xE9 \u010Derstv\xE9 kr\xE1vy na seznamu!",5:"Ingen friske k\xF8er p\xE5 listen!"
,0:"No fresh cow(s) on list!",6:"Geen Verse koeien op de lijst",7:"V\xE4rskelt poeginud lehmad puuduvad!"
,8:"Ei tunnutettavia el\xE4imi\xE4 listalla",9:"Pas de vache(s) fra\xEEche(s) sur la liste\xA0!"
,10:"Kein(e) frischmelkende(n) K\xFCh(e) auf der Liste!",11:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C6\u03C1\u03AD\u03C3\u03BA\u03B5\u03C2 "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!"
,12:"Nincs friss teh\xE9n a list\xE1n!",13:"Nessuna mucca fresca nella lista!",15:
"Nav svaigu govju sarakst\u0101!",26:"N\u0117ra \u0161vie\u017Ei\u0173 karvi\u0173 s\u0105ra\u0161e!"
,16:"Ingen friske kyr p\xE5 listen",17:"Brak \u015Bwie\u017Cych kr\xF3w na li\u015Bcie!"
,18:"Nenhuma vaca fresca na lista!",19:"Nicio vac\u0103 proasp\u0103t\u0103 pe list\u0103!"
,20:"\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435\u0442 \u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432!",27:"Ni sve\u017Eih krav na seznamu!",21:"\xA1Ninguna vaca fresca en la lista!"
,22:"Inga f\xE4rska kor p\xE5 listan!",23:"Listede yeni do\u011Fum yapm\u0131\u015F inek yok!"
,24:"\u0423 \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 "+
"\u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0438\u0445 \u043A\u043E\u0440\u0456\u0432!"
};C.Bk1={1:"Nema zabilje\u017Eenih ocjena u prikazanom vremenskom periodu!",2:"\u041D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438 \u0437\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043E\u0442 \u0434\u0430\u0442\u0430!",3:
"\u986F\u793A\u65E5\u671F\u7BC4\u570D\u5167\u6C92\u6709\u8A55\u5206\u8A18\u9304\uFF01"
,25:"Nema zabilje\u017Eenih ocjena u prikazanom razdoblju datuma!",4:"V zobrazen\xE9m obdob\xED nebyla zaznamen\xE1na \u017E\xE1dn\xE1 hodnocen\xED!"
,5:"Ingen vurderinger registreret i den viste periode!",0:"No ratings recorded in the displayed date period!"
,6:"Geen waardes opgenomen in de voorgestelde periode",7:"Kuvatud kuup\xE4evavahemikus hinnanguid ei registreeritud!"
,8:"N\xE4ytetyll\xE4 p\xE4iv\xE4m\xE4\xE4r\xE4jaksolla ei ole tallennettuja "+"arvioita!"
,9:"Aucune \xE9valuation n\'a \xE9t\xE9 enregistr\xE9 pendant la p\xE9riode "+"affich\xE9e sur l\'\xE9cran\xA0!"
,10:"Im dargestellten Zeitraum wurden keine Bewertungen erfasst!",11:"\u0394\u03B5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2 \u03C3\u03C4\u03B7\u03BD "+
"\u03B5\u03BC\u03C6\u03B1\u03BD\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03B7 "+"\u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03B9\u03CE\u03BD!"
,12:"Nincs r\xF6gz\xEDtett \xE9rt\xE9kel\xE9s a megjelen\xEDtett id\u0151szakban!"
,13:"Nessuna valutazione registrata nel periodo di date visualizzato!",15:"Nav re\u0123istr\u0113tu nov\u0113rt\u0113jumu nor\u0101d\u012Btaj\u0101 "+
"datumu period\u0101!",26:"N\u0117ra \u012Fra\u0161yt\u0173 \u012Fvertinim\u0173 nurodytu laikotarpiu!"
,16:"Ingen vurderinger registrert i den viste datoperioden!",17:"Brak ocen zarejestrowanych w wy\u015Bwietlanym okresie!"
,18:"Nenhuma avalia\xE7\xE3o registrada no per\xEDodo de datas exibido!",19:"Nu s-au \xEEnregistrat evalu\u0103ri \xEEn perioada de date afi\u0219at\u0103!"
,20:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0438\u043A\u0430\u043A\u0438\u0445 "+
"\u043E\u0446\u0435\u043D\u043E\u043A!",27:"V prikazanem obdobju ni zabele\u017Eenih ocen!"
,21:"No evaluaciones registradas en el per\xEDodo de fechas mostrado",22:"Inga betyg registrerade under det visade datumintervallet!"
,23:"G\xF6r\xFCnt\xFClenen tarih d\xF6neminde kay\u0131tl\u0131 derecelendirme "+
"yok!",24:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0456\u044F\u043A\u0438\u0445 "+
"\u043E\u0446\u0456\u043D\u043E\u043A!"};C.Ant={1:"Nema une\u0161enih ocjena!",2:
"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438!",3:"\u5C1A\u7121\u8A55\u5206\u8A18\u9304\uFF01"
,25:"Jo\u0161 nema zabilje\u017Eenih ocjena!",4:"Zat\xEDm \u017E\xE1dn\xE9 hodnocen\xED"
,5:"Ingen bed\xF8mmelser registreret endnu!",0:"No ratings recorded yet!",6:"Nog geen beoordeling verwerkt!"
,7:"Hinnanguid pole veel registreeritud!",8:"Arvioita ei ole viel\xE4 tallennettu!"
,9:"Pas encore de classement enregistr\xE9\xA0!",10:"Noch keine Be~wertungen erfasst!"
,11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2!"
,12:"M\xE9g nincsenek \xE9rt\xE9kel\xE9sek!",13:"Nessuna valutazione registrata ancora!"
,15:"V\u0113l nav ierakst\u012Bti nov\u0113rt\u0113jumi!",26:"Dar n\u0117ra \u012Fvertinim\u0173!"
,16:"Forel\xF8pig ingen vurderinger registrer!",17:"Nie zarejestrowano jeszcze ocen!"
,18:"Nenhuma avalia\xE7\xE3o registrada ainda!",19:"\xCEnc\u0103 nu s-au \xEEnregistrat evalu\u0103ri!"
,20:"\u041E\u0446\u0435\u043D\u043E\u043A \u0435\u0449\u0435 \u043D\u0435\u0442!"
,27:"Ni \u0161e zabele\u017Eenih ocen!",21:"\xA1A\xFAn no se han registrado evaluaciones!"
,22:"Inga betyg registrerade \xE4n!",23:"Hen\xFCz herhangi bir derecelendirme kaydedilmedi!"
,24:"\u041E\u0446\u0456\u043D\u043E\u043A \u0449\u0435 \u043D\u0435\u043C\u0430\u0454!"
};C.A8C={1:"Nema novi \u017Eivotinja za registraciju!",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A, "+
"\u043D\u044F\u043C\u0430 \u0447\u0430\u043A\u0430\u0449\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438!"
,3:"\u7A7A\u7684\u6E05\u55AE\uFF0C\u6C92\u6709\u5F85\u8655\u7406\u7684\u8A3B\u518A\uFF01"
,25:"Prazan popis, nema \u010Dekanja registracija!",4:"Pr\xE1zdn\xFD seznam, \u017E\xE1dn\xE9 \u010Dekaj\xEDc\xED registrace!"
,5:"Tom liste, ingen ventende registreringer!",0:"Empty list, no registrations pending!"
,6:"Lege lijst. Geen verwacht aanmeldingen",7:"Nimekiri on t\xFChi, \xFChtki registreerimist pole ootel!"
,8:"Lista tyhj\xE4, rekister\xF6inti\xE4 ei ole odotettavissa!",9:"Aucun nouvel enregistrement d\'animaux\xA0!"
,10:"Keine neu an~zumeldenden Tiere erfasst!",11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1, \u03B4\u03B5\u03BD "+
"\u03B5\u03BA\u03BA\u03C1\u03B5\u03BC\u03BF\u03CD\u03BD \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2!"
,12:"\xDCres lista, nincsenek f\xFCgg\u0151ben l\xE9v\u0151 regisztr\xE1ci\xF3k!"
,13:"Lista vuota, nessuna registrazione in sospeso!",15:"Tuk\u0161s saraksts, nav gaid\u0101mo re\u0123istr\u0101ciju!"
,26:"Tu\u0161\u010Dias s\u0105ra\u0161as, n\u0117ra laukian\u010Di\u0173 registracij\u0173!"
,16:"Tom liste, ingen registreringer venter!",17:"Pusta lista, brak oczekuj\u0105cych rejestracji!"
,18:"Lista vazia, sem registros pendentes!",19:"List\u0103 goal\u0103, nicio \xEEnregistrare \xEEn a\u0219teptare!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0445, \u043E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0445 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E, \u043D\u0435\u0442!"
,27:"Prazen seznam, ni \u010Dakajo\u010Dih prijav!",21:"Lista vac\xEDa, \xA1no hay registros pendientes!"
,22:"Tom lista, inga registreringar v\xE4ntar!",23:"Bo\u015F liste, bekleyen kay\u0131t yok!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D, \u043E\u0447\u0456\u043A\u0443\u044E\u0447\u0438\u0445 "+
"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E, \u043D\u0435\u043C\u0430\u0454!"
};C.ASw={1:"Nema rezultata pretra\u017Eivanja prema zadatim brojevima.",2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442 "+
"\u043E\u0442 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E:\n\u043D\u0435 "+
"\u0441\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0437\u0430 \u043D\u043E\u043C\u0435\u0440/\u0430, "+
"\u0434\u0430\u0434\u0435\u043D\u0438 \u043F\u043E-\u0433\u043E\u0440\u0435!",3:
"\u7121\u641C\u5C0B\u7D50\u679C\uFF1A\n\u627E\u4E0D\u5230\u8207\u4E0A\u8FF0\u6578\u5B57\u76F8\u7B26\u7684\u52D5\u7269\uFF01"
,25:"Nema rezultata pretra\u017Eivanja:\nnema prona\u0111enih \u017Eivotinja "+"za gore navedene brojeve!"
,4:"\u017D\xE1dn\xFD v\xFDsledek hled\xE1n\xED:\nnebyla nalezena \u017E\xE1dn\xE1 "+
"odpov\xEDdaj\xEDc\xED zv\xED\u0159ata pro zadan\xE1 \u010D\xEDsla!",5:"Ingen s\xF8geresultat:\ningen matchende dyr fundet for de(n) angivne cifre "+
"ovenfor!",0:"No search result:\nno matching animals found for digit(s) given above!"
,6:"Geen zoekresultaat: Geen dieren gevonden die matchen met bovenstaande",7:"Otsingule puuduvad tulemused:\nNumbrip\xE4ringule vastavaid loomi ei leitud!"
,8:"Ei hakutuloksia:\nEi vastaavia el\xE4imi\xE4 l\xF6ydetty edell\xE4 annetuista "+
"numeroista!",9:"Aucun r\xE9sultat de recherche\xA0:\naucun animal correspondant au(x) chiffre(s) "+
"indiqu\xE9(s) ci-dessus\xA0!",10:"Kein Suchergebnis:\nkeine passenden Tiere f\xFCr obige Ziffernfolge gefunden!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1 "+
"\u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7\u03C2:\n\u0394\u03B5\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B6\u03CE\u03B1 \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03BF\u03C5\u03BD "+"\u03BC\u03B5 \u03C4\u03B1 \u03C8\u03B7\u03C6\u03AF\u03B1 \u03C0\u03BF\u03C5 "+
"\u03B4\u03AF\u03BD\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9!"
,12:"Nincs tal\xE1lat:\nnem tal\xE1lhat\xF3 egyez\u0151 \xE1llat az adott sz\xE1mjegy(ek)re!"
,13:"Nessun risultato di ricerca:\nnessun animale corrispondente trovato per "+"il/i numero/i indicato/i sopra!"
,15:"Nav mekl\u0113\u0161anas rezult\u0101tu:\nnav atrasts neviens atbilsto\u0161s "+
"dz\u012Bvnieks dotajiem cipariem!",26:"N\u0117ra paie\u0161kos rezultato:\nnerasta atitinkan\u010Di\u0173 gyv\u016Bn\u0173 "+
"pagal auk\u0161\u010Diau pateikt\u0105(-us) skaitmen\u012F(-is)!",16:"Ingen s\xF8keresultat:\ningen sam~svarende dyr funnet for siffer gitt "+
"ovenfor!",17:"Brak wynik\xF3w wyszukiwania:\nnie znaleziono pasuj\u0105cych zwierz\u0105t "+
"dla podanych powy\u017Cej cyfr!",18:"Nenhum resultado encontrado:\nnenhum animal correspondente encontrado "+
"para o(s) d\xEDgito(s) fornecido(s) acima!",19:"Niciun rezultat g\u0103sit:\nnu s-au g\u0103sit animale care s\u0103 corespund\u0103 "+
"cifre(i)lor furnizate mai sus!",20:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E\u0438\u0441\u043A\u0430 "+
"\u043D\u0435\u0442:\n\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 "+
"\u043E\u0447\u0435\u0440\u0451\u0434\u043D\u043E\u0441\u0442\u0438 \u0446\u0438\u0444\u0440, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!",27:"Ni rezultatov iskanja:\nni najdenih \u017Eivali za zgoraj navedene \u0161tevilke!"
,21:"Sin resultados de b\xFAsqueda:\nno se encontraron animales coincidentes "+"para el(los) d\xEDgito(s) proporcionado(s) arriba"
,22:"Inga s\xF6kresultat:\ninga matchande djur hittades f\xF6r angiven(a) siffra(or) "+
"ovan!",23:"Arama sonucu yok:\nyukar\u0131da verilen rakam(lar) i\xE7in e\u015Fle\u015Fen "+
"hayvan bulunamad\u0131!",24:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043F\u043E\u0448\u0443\u043A\u0443 "+
"\u043D\u0435\u043C\u0430\u0454:\n\u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0457 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u043E\u0441\u0442\u0456 "+
"\u0446\u0438\u0444\u0440, \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"
};C.Bk2={1:"Nema zabilje\u017Eenih temperatura i ocjena u prikazanom periodu na grafiku!"
,2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0438 "+"\u043E\u0446\u0435\u043D\u043A\u0438 \u0432 \u043F\u0435\u0440\u0438\u043E\u0434\u0430, "+
"\u043F\u043E\u043A\u0430\u0437\u0430\u043D \u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430\u0442\u0430!"
,3:"\u5716\u8868\u986F\u793A\u7684\u671F\u9593\u6C92\u6709\u8A18\u9304\u6EAB\u5EA6\u548C\u8A55\u7D1A\uFF01"
,25:"Nema zabilje\u017Eenih temperatura ni ocjena u prikazanom razdoblju na "+"grafikonu!"
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
,13:"Nessuna temperatura e nessun punteggio registrati nel periodo mostrato "+"nel grafico!"
,15:"Nav re\u0123istr\u0113tas temperat\u016Bras un nov\u0113rt\u0113jumi att\u0113lotaj\u0101 "+
"period\u0101 grafik\u0101!",26:"Grafike nurodytu laikotarpiu neu\u017Efiksuota temperat\u016Br\u0173 ir "+
"\u012Fvertinim\u0173!",16:"Ingen temperaturer og ingen vurderinger registrert i perioden vist i grafikken!"
,17:"Nie zarejestrowano temperatur ani ocen w okresie przedstawionym na grafice!"
,18:"Nenhuma temperatura e nenhuma avalia\xE7\xE3o registradas no per\xEDodo "+"mostrado no gr\xE1fico!"
,19:"Nu s-au \xEEnregistrat temperaturi \u0219i evalu\u0103ri \xEEn perioada "+"indicat\u0103 \xEEn grafic!"
,20:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 "+
"\u0438 \u043E\u0446\u0435\u043D\u043E\u043A!",27:"V obdobju, prikazanem na grafiki, niso zabele\u017Eene temperature in "+
"ocene!",21:"A\xFAn no asignado",22:"Inga temperaturer och inga betyg registrerade under perioden som visas "+
"i grafiken!",23:"Grafikte g\xF6sterilen d\xF6nemde herhangi bir s\u0131cakl\u0131k veya "+
"derecelendirme kaydedilmedi!",24:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0456\u044F\u043A\u0438\u0445 "+
"\u043E\u0446\u0456\u043D\u043E\u043A \u0442\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
};C.Bk3={1:"Nema sa\u010Duvanih vrijednosti temperature!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 "+
"\u0438 \u043E\u0446\u0435\u043D\u043A\u0430!",3:"\u5C1A\u672A\u6709\u6EAB\u5EA6\u548C\u8A55\u5206\u8A18\u9304\uFF01"
,25:"Jo\u0161 nisu zabilje\u017Eene temperature ni ocjene!",4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 teploty a \u017E\xE1dn\xE1 "+
"hodnocen\xED",5:"Ingen temperaturer og ingen bed\xF8mmelser registreret endnu!"
,0:"No temperatures and no ratings recorded yet!",6:"Nog geen temperatuur en waardes opgenomen"
,7:"Temp. ja hinnaguid pole veel registreeritud!",8:"Ei l\xE4mp\xF6tiloja eik\xE4 luokituksia viel\xE4 tallennettu!"
,9:"Pas de temp\xE9ratures et pas d\u2019\xE9valuations encore enregistr\xE9es\xA0!"
,10:"Keine Temperaturen und keine Bewertungen erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2 "+
"\u03BA\u03B1\u03B9 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2!"
,12:"M\xE9g nincsenek r\xF6gz\xEDtve h\u0151m\xE9rs\xE9kletek \xE9s \xE9rt\xE9kel\xE9sek!"
,13:"Nessuna temperatura e nessuna valutazione registrata finora!",15:"V\u0113l nav re\u0123istr\u0113tas temperat\u016Bras un nov\u0113rt\u0113jumi!"
,26:"Dar neu\u017Efiksuota joki\u0173 temperat\u016Br\u0173 ir \u012Fvertinim\u0173!"
,16:"Ingen temperaturer og ingen vurderinger registrert enn\xE5!",17:"Nie odnotowano jeszcze temperatur ani ocen!"
,18:"Nenhuma temperatura e nenhuma avalia\xE7\xE3o registradas at\xE9 agora!",19:
"Nu au fost \xEEnregistrate temperaturi \u0219i evalu\u0103ri \xEEnc\u0103!",20:
"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 "+"\u043E\u0446\u0435\u043D\u043A\u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u044B!"
,27:"Ni zabele\u017Eenih temperatur in ocen!",21:"\xA1A\xFAn no se han registrado temperaturas o evaluaciones!"
,22:"Inga temperaturer och inga betyg registrerade \xE4n!",23:"Hen\xFCz s\u0131cakl\u0131k ve derecelendirme kaydedilmedi!"
,24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0456 "+
"\u043E\u0446\u0456\u043D\u043A\u0438 \u043D\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456!"
};C.A8D={1:"Nema zabilje\u017Eenih temperatura u prikazanom periodu na grafiku!"
,2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0437\u0430 "+
"\u043F\u0435\u0440\u0438\u043E\u0434\u0430, \u043F\u043E\u043A\u0430\u0437\u0430\u043D "+
"\u043D\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430\u0442\u0430!",3:"\u5716\u8868\u6240\u793A\u671F\u9593\u5167\u6C92\u6709\u8A18\u9304\u6EAB\u5EA6\uFF01"
,25:"Nema zabilje\u017Eenih temperatura u prikazanom razdoblju na grafikonu!",4:
"V obdob\xED zobrazen\xE9m na grafu nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 "+"teploty!"
,5:"Ingen temperaturer registreret i den viste periode p\xE5 grafikken!",0:"No temperatures recorded in the period shown in the graphic!"
,6:"Nog geen temperatuur en waardes opgenomen in de geselecteerde periode",7:"Graafikus n\xE4idatud perioodil temperatuure ei registreeritud!"
,8:"Kuvassa n\xE4kyv\xE4ll\xE4 ajanjaksolla ei ole tallennettu l\xE4mp\xF6tiloja!"
,9:"Aucune temp\xE9rature n\'a \xE9t\xE9 enregistr\xE9es pendant la p\xE9riode "+
"pr\xE9sent\xE9e dans le graphique\xA0!",10:"Im Darstellungszeitraum der Grafik wurden keine Temperaturen erfasst!"
,11:"\u0394\u03B5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2 "+"\u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF \u03C0\u03BF\u03C5 "+
"\u03C6\u03B1\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF \u03B3\u03C1\u03AC\u03C6\u03B7\u03BC\u03B1!"
,12:"A grafikonon bemutatott id\u0151szakban nem r\xF6gz\xEDtettek h\u0151m\xE9rs\xE9kleteket!"
,13:"Nessuna temperatura registrata nel periodo indicato nel grafico!",15:"Grafik\u0101 att\u0113lotaj\u0101 period\u0101 temperat\u016Bras nav re\u0123istr\u0113tas!"
,26:"Temperat\u016Bros neregistruotos nurodytu grafiko laikotarpiu!",16:"Ingen temperaturer registrert i perioden som vises i grafikken!"
,17:"Nie odnotowano temperatur w okresie przedstawionym na grafice!",18:"Nenhuma temperatura registrada no per\xEDodo mostrado no gr\xE1fico!"
,19:"Nicio temperatur\u0103 \xEEnregistrat\u0103 \xEEn perioada indicat\u0103 "+
"\xEEn grafic!",20:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
,27:"V obdobju, prikazanem na grafu, ni zabele\u017Eenih temperatur!",21:"No se han registrado temperaturas en el per\xEDodo mostrado en el gr\xE1fico."
,22:"Inga temperaturer registrerade under den period som visas i grafiken!",23:"Grafikte g\xF6sterilen d\xF6nemde herhangi bir s\u0131cakl\u0131k kaydedilmedi!"
,24:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
};C.ArD={1:"Jo\u0161 nisu sa\u010Duvane vrijednosti temperature!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430!"
,3:"\u5C1A\u672A\u6709\u6EAB\u5EA6\u8A18\u9304\uFF01",25:"Jo\u0161 nisu zabilje\u017Eene temperature!"
,4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 teploty!",5:"Ingen temperaturer registreret endnu!"
,0:"No temperatures recorded yet!",6:"Nog geen temperaturen verwerkt!",7:"Temp. pole veel registreeritud!"
,8:"L\xE4mp\xF6tiloja ei ole viel\xE4 kirjattu!",9:"Aucune temp\xE9rature n\u2019a encore \xE9t\xE9 enregistr\xE9e\xA0!"
,10:"Noch keine Temperaturen erfasst!",11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2!"
,12:"M\xE9g nincsenek r\xF6gz\xEDtett h\u0151m\xE9rs\xE9kletek!",13:"Nessuna temperatura registrata finora!"
,15:"V\u0113l nav fiks\u0113tas temperat\u016Bras!",26:"Temperat\u016Bros dar neu\u017Eregistruotos!"
,16:"Forel\xF8pig ingen temperaturer registrert!",17:"Nie zarejestrowano jeszcze temperatur!"
,18:"Nenhuma temperatura registrada ainda!",19:"Nicio temperatur\u0103 \xEEnregistrat\u0103 \xEEnc\u0103!"
,20:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0435 "+
"\u0438\u043C\u0435\u0440\u044F\u043D\u044B!",27:"Nobene temperature \u0161e ni zabele\u017Eene!"
,21:"\xA1A\xFAn no se han registrado temperaturas!",22:"Inga temperaturer registrerade \xE4n!"
,23:"Hen\xFCz s\u0131cakl\u0131k kaydedilmedi!",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u043D\u0435 "+
"\u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0456!"};C.ASx={1:"Nema dodijeljenih transpondera!"
,2:"\u041D\u044F\u043C\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u672A\u6307\u6D3E\u61C9\u7B54\u5668",25:"Nema dodijeljenog transpondera",4:
"\u017D\xE1dn\xFD transpond\xE9r nebyl p\u0159i\u0159azen",5:"Ingen transponder tildelt"
,0:"No transponder assigned",6:"Geen transponder toegewezen",7:"Tansponderit pole m\xE4\xE4ratud"
,8:"Ei Transponderia",9:"Aucun trans~pon~deur attri~bu\xE9",10:"Kein Trans~ponder zu~gewiesen"
,11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2",12:"Nincs transzponder hozz\xE1rendelve"
,13:"Nessun transponder assegnato",15:"Nav pie\u0161\u0137irts transponders",26:
"N\u0117ra priskirto atsakiklio",16:"Ingen transponder tildelt",17:"Nie przypisano transpondera"
,18:"Nenhum transponder atribu\xEDdo",19:"Niciun transponder atribuit",20:"\u0422\u0440\u0430\u043D\u0441~\u043F\u043E\u043D~\u0434\u0435\u0440\u044B "+
"\u043D\u0435 \u043D\u0430~\u0437\u043D\u0430~\u0447\u0435\u043D\u044B",27:"Brez dodeljenega transponderja"
,21:"Ning\xFAn transpondedor asignado.",22:"Ingen transponder tilldelad",23:"Aktar\u0131c\u0131 atanmad\u0131"
,24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438 "+
"\u043D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0456!"};C.Akn={1:
"Nema sa\u010Duvanih podataka o te\u017Eini!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u0433\u043B\u043E!",3:"\u5C1A\u672A\u6709\u9AD4\u91CD\u8A18\u9304\uFF01"
,25:"Jo\u0161 nisu zabilje\u017Eene te\u017Eine!",4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 v\xE1hy"
,5:"Ingen v\xE6gt registreret endnu!",0:"No weights recorded yet!",6:"Nog geen gewichten verwerkt!"
,7:"Kaalu andmeid pole veel registreeritud!",8:"Ei viel\xE4 painoja kirjattu!",9:
"Aucun poids n\u2019a encore \xE9t\xE9 enregistr\xE9\xA0!",10:"Noch keine Gewichte erfasst!"
,11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03AC\u03C1\u03B7!",12:"M\xE9g nincsenek r\xF6gz\xEDtett s\xFAlyok!"
,13:"Nessun peso registrato ancora!",15:"V\u0113l nav ierakst\u012Bti svari!",26:
"Svori\u0173 dar neu\u017Eregistruota!",16:"Forel\xF8pig ingen vekter registrert!"
,17:"Nie zarejestrowano jeszcze \u017Cadnych wag!",18:"Ainda n\xE3o foram registrados pesos!"
,19:"Nu s-au \xEEnregistrat \xEEnc\u0103 greut\u0103\u021Bi!",20:"\u0412\u0435\u0441\u0430 \u043D\u0435\u0438\u0437\u043C\u0435\u0440\u044F\u043D\u044B!"
,27:"Ni zabele\u017Eenih ute\u017Ei!",21:"\xA1A\xFAn no se han registrado pesos!"
,22:"Inga vikter registrerade \xE4n!",23:"Hen\xFCz a\u011F\u0131rl\u0131k kaydedilmedi!"
,24:"\u0412\u0430\u0433\u0430 \u0449\u0435 \u043D\u0435 \u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0430!"
};C.A8E={1:"Danas nisu sa\u010Duvani podaci o te\u017Eini!",2:"\u0414\u043D\u0435\u0441 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u0442\u0435\u0433\u043B\u0430!",3:"\u4ECA\u5929\u6C92\u6709\u8A18\u9304\u9AD4\u91CD\uFF01"
,25:"Danas nisu zabilje\u017Eene te\u017Eine!",4:"Dnes nebyla zaznamen\xE1na \u017E\xE1dn\xE1 v\xE1ha!"
,5:"Ingen v\xE6gt registreret i dag!",0:"No weights recorded today!",6:"Geen gewichten geregistreerd vandaag"
,7:"T\xE4na registreeritud kaaluandmed puuduvad!",8:"T\xE4n\xE4\xE4n ei kirjattu painoja!"
,9:"Aucun poids n\'a \xE9t\xE9 enregistr\xE9 aujourd\'hui\xA0!",10:"Heute wurden keine\nGewichte erfasst!"
,11:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B2\u03AC\u03C1\u03B7 \u03C3\u03AE\u03BC\u03B5\u03C1\u03B1!",12:"Ma nem volt s\xFAlym\xE9r\xE9s!"
,13:"Nessun peso registrato oggi!",15:"\u0160odien svari netika fiks\u0113ti!",26:
"\u0160iandien svoriai neu\u017Eregistruoti!",16:"Ingen vekter registrert i dag!"
,17:"Dzi\u015B nie odnotowano \u017Cadnych wag!",18:"Nenhum peso registrado hoje!"
,19:"Nicio greutate \xEEnregistrat\u0103 ast\u0103zi!",20:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F "+
"\u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043B\u0438\u0441\u044C!"
,27:"Danes ni zabele\u017Eenih ute\u017Ei!",21:"No se han registrado pesos hoy."
,22:"Inga vikter registrerade idag!",23:"Bug\xFCn a\u011F\u0131rl\u0131k kaydedilmedi!"
,24:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043D\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043B\u043E\u0441\u044C!"
};C.AEI={1:"Prazna lista,\nsvim novim \u017Eivotinjama dodijeljeni su transponderi!"
,2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u043D\u0430 "+
"\u0432\u0441\u0438\u0447\u043A\u0438 \u043D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0434\u0430 \u0441\u0435 \u0432\u044A\u0432\u0435\u0434\u0430\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438"
,3:"\u7A7A\u7684\u5217\u8868\uFF0C\n\u6240\u6709\u65B0\u7684\u52D5\u7269\u90FD\u5DF2\u914D\u6709\u767C\u5C04\u5668\uFF01"
,25:"Prazan popis,\nsvim novim \u017Eivotinjama dodijeljeni su transponderi!",4:
"Pr\xE1zdn\xFD seznam,\nv\u0161echna nov\xE1 zv\xED\u0159ata maj\xED p\u0159i\u0159azen\xE9 "+
"transpond\xE9ry!",5:"Tom liste,\nalle nye dyr har f\xE5et tildelt transpondere!"
,0:"Empty list,\nall new animals do have transponders assigned!",6:"Lege lijst,\nAlle nieuwe dieren hebben al transponders"
,7:"T\xFChi nimekiri,\nk\xF5ikidele uutele loomadele on m\xE4\xE4ratud transponderid!"
,8:"Lista tyhj\xE4, kaikille \xE4skett\xE4in vastaanotetuille el\xE4imille "+"on m\xE4\xE4ritetty transponderit!"
,9:"Liste vide,\nnous avons assign\xE9 des transpondeurs \xE0 tous les animaux "+
"nouvellement arriv\xE9s\xA0!",10:"Liste leer,\nallen neu zugegangenen Tieren wurden Transponder zugewiesen!"
,11:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03BD\u03AD\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD "+
"\u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03C5\u03C2 \u03B1\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AD\u03C2!"
,12:"\xDCres lista,\naz \xF6sszes \xFAj \xE1llatnak van rendelve transzponder!",
13:"Lista vuota,\ntutti i nuovi animali hanno trasponder assegnati!",15:"Tuk\u0161s saraksts,\nvisiem jaunajiem dz\u012Bvniekiem ir pie\u0161\u0137irti "+
"transponderi!",26:"Tu\u0161\u010Dias s\u0105ra\u0161as,\nvisi nauji gyv\u016Bnai turi priskirtus "+
"transponderius!",16:"Tom liste,\nalle nye dyr har f\xE5tt tildelt transpondere!"
,17:"Pusta lista,\nwszystkie nowe zwierz\u0119ta maj\u0105 przypisane transpondery!"
,18:"Lista vazia,\ntodos os novos animais t\xEAm transponders atribu\xEDdos!",19:
"List\u0103 goal\u0103,\ntoate animalele noi au transpondere atribuite!",20:"\u041F\u0443\u0441\u0442\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A,\n\u0432\u0441\u0435 "+
"\u043D\u043E\u0432\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 "+
"\u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u043D\u044B\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B!",27:"Prazen seznam,\nvsi novi \u017Eivali imajo dodeljene transponderje!"
,21:"Lista vac\xEDa,\ntodos los nuevos animales tienen asignados transpondedores."
,22:"Tom lista,\nalla nya djur har transpondrar tilldelade!",23:"Bo\u015F liste,\nt\xFCm yeni hayvanlara atanm\u0131\u015F aktar\u0131c\u0131lar "+
"var!",24:"\u041F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0441\u043F\u0438\u0441\u043E\u043A,\n\u0432\u0441\u0456 "+
"\u043D\u043E\u0432\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043C\u0430\u044E\u0442\u044C "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"
};C.None={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u7121",25:"nijedan",4:"\u017D\xE1dn\xFD"
,5:"ingen",0:"none",6:"geen",7:"pole",8:"Ei yht\xE4\xE4n",9:"aucun",10:"keiner",
11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1",12:"egyik sem",13:"nessuno",15:"neviens"
,26:"joks",16:"ingen",17:"\u017Caden",18:"nenhum",19:"niciunul",20:"\u041D\u0435\u0442"
,27:"noben",21:"Ninguno",22:"ingen",23:"Hi\xE7biri",24:"\u043D\u0435\u043C\u0430\u0454"
};C.ASB={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u6C92\u6709",25:"nijedan",4:"\u017D\xE1dn\xFD"
,5:"ingen",0:"none",6:"geen",7:"pole",8:"ei yht\xE4\xE4n",9:"aucun",10:"keine",11:
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1",12:"egyik sem",13:"nessuno",15:"neviena",
26:"n\u0117 vienas",16:"ingen",17:"\u017Caden",18:"nenhum",19:"niciunul",20:"\u041D\u0435\u0442"
,27:"noben",21:"-",22:"ingen",23:"Hi\xE7biri",24:"\u043D\u0435\u043C\u0430\u0454"
};C.Bk4={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u6C92\u6709",25:"Nijedan",4:"\u017D\xE1dn\xFD"
,5:"Ingen",0:"None",6:"geen",7:"Pole",8:"Ei yht\xE4\xE4n",9:"aucun",10:"Keine",11:
"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1",12:"Semmi",13:"Nessuno",15:"Neviens",26:"N\u0117 vienas"
,16:"ingen",17:"\u017Baden",18:"Nenhum",19:"Niciunul",20:"\u041D\u0435\u0442",27:
"Noben",21:"Ninguno(s)",22:"Ingen",23:"Hi\xE7biri",24:"\u041D\u0435\u043C\u0430\u0454"
};C.Normal={1:"normalno",2:"\u041D\u043E\u0440\u043C\u0430\u043B\u043D\u043E",3:
"\u6B63\u5E38",25:"Normalno",4:"Norm\xE1ln\xED",0:"Normal",6:"Normaal",7:"Normaalne"
,8:"Normaali",9:"Normale",11:"\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03CC",
12:"Norm\xE1lis",13:"Normale",15:"Norm\u0101ls",26:"Normalus",17:"Normalny",20:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E"
,27:"Normalno",24:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E"};C.Ako={
1:"Nisu dodjeljene",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043D\u0438"
,3:"\u5C1A\u672A\u5206\u914D",25:"Jo\u0161 nije dodijeljeno",4:"Je\u0161t\u011B nep\u0159id\u011Bleno"
,5:"Endnu ikke tildelt",0:"Not assigned yet",6:"Nog niet toegewezen",7:"Pole veel m\xE4\xE4ratud"
,8:"Ei viel\xE4 m\xE4\xE4ritetty",9:"Pas encore attribu\xE9",10:"Nicht zugewiesen"
,11:"\u0394\u03B5\u03BD \u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B1\u03BA\u03CC\u03BC\u03B1",12:"M\xE9g nincs kijel\xF6lve",13:"Non ancora assegnato"
,15:"V\u0113l nav pie\u0161\u0137irts",26:"Dar nepaskirta",16:"Ikke tildelt enda"
,17:"Nie przydzielono jeszcze",18:"Ainda n\xE3o atribu\xEDdo",19:"\xCEnc\u0103 nu a fost atribuit."
,20:"\u041D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E",27:"\u0160e ni dodeljeno"
,21:"no se encontraron animales coincidentes para el/los d\xEDgito(s) proporcionado(s) "+
"arriba",22:"Inte tilldelad \xE4nnu",23:"Hen\xFCz atanmad\u0131",24:"\u041D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E"
};C.A8G={1:"Broj novih \u017Eivotinja",2:"\u041D\u043E\u043C\u0435\u0440, \u043A\u043E\u0439\u0442\u043E \u0449\u0435 "+
"\u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D",3:"\u8981\u5EFA\u7ACB\u7684\u6578\u91CF"
,25:"Broj koji treba stvoriti",4:"\u010C\xEDslo nov\xE9ho zv\xED\u0159ete",5:"Nummer der skal oprettes"
,0:"Number to be created",6:"Aantal nieuwe dieren",7:"Loodavate loomade arv",8:"Luotava numero"
,9:"Nombre d\u2019animaux neufs",10:"Anzahl neuer Tiere",11:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C0\u03C1\u03CC\u03C2 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03B1"
,12:"Sz\xE1m, amit l\xE9tre kell hozni",13:"Numero da creare",15:"Numurs j\u0101izveido"
,26:"Skai\u010Dius, kur\u012F reikia sukurti",16:"Nummer som skal opprettes",17:
"Liczba do stworzenia",18:"N\xFAmero a ser criado",19:"Num\u0103r de creat",20:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u043E\u0432\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",27:"\u0160tevilka, ki naj bo ustvarjena"
,21:"N\xFAmero de animales nuevos",22:"Nummer som ska skapas",23:"Olu\u015Fturulacak numara"
,24:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u043E\u0432\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D"};C.AEM={1:"od",2:"\u043E\u0442",3:"\u7684"
,25:"od",4:"z",5:"af",0:"of",6:"van",7:"st",8:"/",9:"de",10:"von",11:"\u03C4\u03BF\u03C5"
,12:"/",13:"di",15:"no",26:"apie",16:"Av",17:"z",18:"de",19:"de",20:"\u043E\u0442"
,27:"od",21:"de",22:"av",23:"ile ilgili",24:"\u0432\u0456\u0434"};C.Off={1:"Isklju\u010Deno"
,2:"\u0418\u0437\u043A\u043B.",3:"\u95DC\u9589",25:"Isklju\u010Deno",4:"Vypnuto"
,5:"Fra",0:"Off",6:"Uit",7:"V\xE4ljas",8:"Pois p\xE4\xE4lt\xE4",9:"\xC9teint",10:
"Aus",11:"\u03A3\u03B2\u03B7\u03C3\u03C4\u03CC",12:"Ki",13:"Spento",15:"Izsl\u0113gts"
,26:"I\u0161jungtas",16:"Av",17:"Wy\u0142\u0105czony",18:"Desligado",19:"Oprit",
20:"\u0412\u044B\u043A\u043B.",27:"Izklopljeno",21:"apagada",22:"Av",23:"Kapat",
24:"\u0412\u0438\u043C\u043A."};C.Zs={1:"isklju\u010Di desno",2:"\u0418\u0437\u043C\u0435\u0441\u0442\u0432\u0430\u043D\u0435 \u0432 \u0434\u044F\u0441\u043D\u043E"
,3:"\u504F\u79FB\u91CF",25:"Desni pomak",4:"Okam\u017Eit\xE9 nastaven\xED",5:"H\xF8jre offset"
,0:"Right offset",6:"Offset rechts",7:"\xD5ige seade",8:"Oikea siirtym\xE4",9:"Offset droit"
,10:"Offset rechts",11:"\u0394\u03B5\u03BE\u03B9\u03AC \u03BC\u03B5\u03C4\u03B1\u03C4\u03CC\u03C0\u03B9\u03C3\u03B7"
,12:"Jobb eltol\xE1s",13:"Spostamento a destra",15:"Labais nob\u012Bde",26:"Teisingas poslinkis"
,16:"H\xF8yre offset",17:"Prawe przesuni\u0119cie",18:"Deslocamento \xE0 direita"
,19:"Decalaj la dreapta",20:"\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0432\u043F\u0440\u0430\u0432\u043E"
,27:"Desni zamik",21:"Compensaci\xF3n derecha",22:"H\xF6ger offset",23:"Sa\u011F ofset"
,24:"\u0417\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u043F\u0440\u0430\u0432\u043E"
};C.Ok={3:"\u597D\u7684",0:"OK",7:"Jah",11:"\u0395\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9"
,20:"\u041E\u041A",24:"\u041E\u041A"};C.Bk8={1:"Stariji od {1} dana",2:"\u041F\u043E-\u0441\u0442\u0430\u0440\u0438 \u043E\u0442 {1} \u0434\u043D\u0438"
,3:"\u8D85\u904E {1} \u5929\u7684",25:"Starije od {1} dana",4:"Star\u0161\xED ne\u017E {1} dn\xED"
,5:"\xC6ldre end {1} dage",0:"Older than {1} days",6:"ouder dan {1} dagen",7:"Vanem kui {1} p\xE4eva"
,8:"Yli {1} p\xE4iv\xE4\xE4 vanhempi",9:"Plus \xE2g\xE9 que {1} jours",10:"\xC4lter als {1} Tage"
,11:"\u03A0\u03B1\u03BB\u03B1\u03B9\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC "+
"{1} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",12:"{1} napn\xE1l r\xE9gebbi",13:"Pi\xF9 vecchio di {1} giorni"
,15:"Vec\u0101ks par {1} dien\u0101m",26:"Vyresnis nei {1} dien\u0173",16:"Eldre enn {1} dager"
,17:"Starszy ni\u017C {1} dni",18:"Mais velho que {1} dias",19:"Mai vechi de {1} zile"
,20:"\u0421\u0442\u0430\u0440\u0448\u0435 {1} \u0434\u043D\u0435\u0439",27:"Starej\u0161i od {1} dni"
,21:"Mayor de {1} d\xEDas",22:"\xC4ldre \xE4n {1} dagar",24:"\u0421\u0442\u0430\u0440\u0448\u0435 \u043D\u0456\u0436 {1} \u0434\u043D\u0456\u0432"
};C.A8H={1:"Uklju\u010Deno",2:"\u0412\u043A\u043B.",3:"\u958B\u555F",25:"Na",4:"Zapnuto"
,5:"P\xE5",0:"On",6:"Aan",7:"Sees",8:"P\xE4\xE4ll\xE4",9:"Allum\xE9",10:"An",11:
"\u0391\u03BD\u03BF\u03B9\u03BA\u03C4\u03CC",12:"Be",13:"Su",15:"Uz",26:"\u012Ejungtas"
,16:"P\xE5",17:"Na",18:"Ligado",19:"Pe",20:"\u0412\u043A\u043B.",27:"Na",21:"encendida"
,22:"P\xE5",23:"A\xE7\u0131k",24:"\u0423\u0432\u0456\u043C\u043A."};C.Asm={1:"Na stra\u017Ei"
,2:"\u041F\u043E\u0434 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"
,3:"\u503C\u73ED",25:"Na stra\u017Ei",4:"Na hl\xEDdce",5:"P\xE5 vagt",0:"On watch"
,6:"Bekijken",7:"Valvel",9:"Observation",10:"Beobachtung",11:"\u03A3\u03B5 \u03C6\u03C1\u03BF\u03C5\u03C1\u03AC"
,12:"\u0150rs\xE9gben",13:"In guardia",15:"De\u017E\u016Br\u0101",26:"Bud\u0117ti"
,16:"P\xE5 vakt",17:"Na warcie",18:"De guarda",19:"De gard\u0103",20:"\u041D\u0430 \u0441\u0442\u0440\u0430\u0436\u0435"
,27:"Na stra\u017Ei",21:"En seguimiento",22:"P\xE5 vakt",23:"\u0130zlemede",24:"\u041D\u0430 \u0432\u0430\u0440\u0442\u0456"
};C.BoG={1:"Jedan interval za brojeve za \u2642 i \u2640",2:"\u0415\u0434\u0438\u043D \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u0437\u0430 \u2642 \u0438 \u2640",3:"\u4E00\u500B\u9069\u5408\u7537\u6027\u548C\u5973\u6027\u7684\u55AE\u4E00\u7BC4\u570D"
,25:"Jedan jedinstveni raspon za oba \u2642 i \u2640",4:"Jeden jednotn\xFD rozsah pro ob\u011B pohlav\xED \u2642 a \u2640"
,5:"\xC9n enkelt st\xF8rrelse for b\xE5de \u2642 og \u2640",0:"One single range for both \u2642 and \u2640"
,6:"One single range voor beide \u2642 en \u2640",7:"\xDCks vahemik nii \u2642 kui \u2640 jaoks"
,8:"Yksi alue sek\xE4 \u2642 ett\xE4 \u2640",9:"Une seule gamme pour \u2642 et \u2640"
,10:"Ein einziger Nr.- Bereich f\xFCr \u2642 und \u2640",11:"\u0388\u03BD\u03B1 \u03BC\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF "+
"\u03B5\u03CD\u03C1\u03BF\u03C2 \u03C4\u03CC\u03C3\u03BF \u03B3\u03B9\u03B1 "+"\u2642 \u03CC\u03C3\u03BF \u03BA\u03B1\u03B9 \u03B3\u03B9\u03B1 \u2640"
,12:"Egyetlen tartom\xE1ny mindk\xE9t nem sz\xE1m\xE1ra",13:"Un\'unica gamma sia per \u2642 che per \u2640"
,15:"Viens vien\u012Bgs diapazons gan \u2642, gan \u2640",26:"Vienas diapazonas tiek vyrams, tiek moterims"
,16:"Et enkelt omr\xE5de for b\xE5de \u2642 og \u2640",17:"Jedna wsp\xF3lna rozmiar\xF3wka dla obu p\u0142ci"
,18:"Uma \xFAnica faixa para ambos \u2642 e \u2640",19:"Un singur interval pentru ambele \u2642 \u0219i \u2640"
,20:"\u041E\u0434\u0438\u043D \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u2642 \u0438 "+"\u2640"
,27:"Enoten razpon za oba, \u2642 in \u2640.",21:"Un solo rango para ambos \u2642 y \u2640"
,22:"Ett enda sortiment f\xF6r b\xE5de \u2642 och \u2640",23:"Hem \u2642 hem de \u2640 i\xE7in tek aral\u0131k"
,24:"\u041E\u0434\u0438\u043D \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u043D\u043E\u043C\u0435\u0440\u0456\u0432 \u0434\u043B\u044F \u2642 \u0442\u0430 "+
"\u2640"};C.Options={1:"Opcije",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u043A\u0438"
,3:"\u9078\u9805",25:"Opcije",4:"Mo\u017Enosti",5:"Muligheder",0:"Options",6:"Opties"
,7:"Valikud",10:"Optionen",11:"\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AD\u03C2"
,12:"Lehet\u0151s\xE9gek",13:"Opzioni",15:"Iesp\u0113jas",26:"Pasirinkimai",16:"Alternativer"
,17:"Opcje",18:"Op\xE7\xF5es",19:"Op\u021Biuni",20:"\u041E\u043F\u0446\u0438\u0438"
,27:"Mo\u017Enosti",21:"Opciones",22:"Alternativ",24:"\u041E\u043F\u0446\u0456\u0457"
};C.BoH={1:"druga oboljenja",2:"\u0414\u0440\u0443\u0433\u0438 \u0437\u0430\u0431\u043E\u043B\u044F\u0432\u0430\u043D\u0438\u044F"
,3:"\u5176\u4ED6\u75BE\u75C5",25:"Druge bolesti",4:"Jin\xE9 nemoci",5:"Andre sygdomme"
,0:"Other illnesses",6:"Andere ziektes",7:"Teised haigused",8:"Muut sairaudet",9:
"Autres maladies",10:"Sonstige Krankheiten",11:"\u0386\u03BB\u03BB\u03B5\u03C2 \u03B1\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2"
,12:"M\xE1s betegs\xE9gek",13:"Altre malattie",15:"Citas slim\u012Bbas",26:"Kitos ligos"
,16:"Andre sykdommer",17:"Inne choroby",18:"Outras doen\xE7as",19:"Alte boli",20:
"\u041F\u0440\u043E\u0447\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F"
,27:"Druge bolezni",21:"Otras enfermedades",22:"Andra sjukdomar",23:"Di\u011Fer hastal\u0131klar"
,24:"\u0406\u043D\u0448\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A$q={1:"drugi razlozi",2:"\u0414\u0440\u0443\u0433\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"
,3:"\u5176\u4ED6\u539F\u56E0",25:"Drugi razlozi",4:"Dal\u0161\xED d\u016Fvody",5:
"Andre grunde",0:"Other reasons",6:"Andere redenen",7:"Teised p\xF5hjused",8:"Muut syyt"
,9:"Autres raisons",10:"Sonstige Gr\xFCnde",11:"\u0386\u03BB\u03BB\u03B5\u03C2 \u03B1\u03B9\u03C4\u03AF\u03B5\u03C2"
,12:"Egy\xE9b okok",13:"Altri motivi",15:"Citi iemesli",26:"Kitos prie\u017Eastys"
,16:"Andre grunner",17:"Inne powody",18:"Outros motivos",19:"Alte motive",20:"\u0418\u043D\u044B\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B"
,27:"Druge razloge",21:"Otras razones",22:"Andra sk\xE4l",23:"Di\u011Fer sebepler"
,24:"\u0406\u043D\u0448\u0456 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"};C.AGr={
1:"Ukupno",2:"\u041E\u0431\u0449",3:"\u5408\u8A08",25:"Op\u0107enito",4:"Celkem"
,5:"Overordnet",0:"Overall",6:"Totaal",7:"\xDCldine",8:"Yleinen",9:"Total",10:"Gesamt"
,11:"\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AC",12:"\xC1tfog\xF3an",13:"Complessivo"
,15:"Kopum\u0101",26:"Apytiksliai",16:"Alt i alt",17:"Og\xF3lnie",18:"Globalmente"
,19:"\xCEn general",20:"\u0412\u0441\u0435\u0433\u043E",27:"Na splo\u0161no",21:
"Total",22:"\xD6vergripande",23:"Genelde",24:"\u0423\u0441\u044C\u043E\u0433\u043E"
};C.A$u={1:"nisko",2:"\u0421\u043B\u0430\u0431\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044F\u043D\u0435"
,3:"\u8868\u73FE\u4E0D\u4F73",25:"Slaba izvedba",4:"\u0160patn\xFD v\xFDkon",5:"D\xE5rlig pr\xE6station"
,0:"Poor performance",6:"Slechte prestaties",7:"Kehv tulemus",8:"Huono suorituskyky"
,9:"Mauvaise performance",10:"Geringe Leistung",11:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AE \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7"
,12:"Gyenge teljes\xEDtm\xE9ny",13:"Scarsa prestazione",15:"V\u0101ja sniegums",
26:"Prastas pasirodymas",16:"D\xE5rlig ytelse",17:"S\u0142aba wydajno\u015B\u0107"
,18:"Desempenho ruim",19:"Performan\u021B\u0103 slab\u0103",20:"\u041C\u0430\u043B\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C"
,27:"Slaba uspe\u0161nost",21:"Bajo rendimiento",22:"D\xE5lig prestation",23:"Zay\u0131f performans"
,24:"\u041C\u0430\u043B\u0430 \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C"
};C.Pound={1:"funta",2:"\u041B\u0438\u0431\u0440\u0438",3:"\u78C5",25:"Funt",4:"Libra"
,5:"Pund",0:"Pound",6:"Pond",7:"Nael",8:"pauna",9:"Livre",10:"Pfund",11:"\u039B\u03AF\u03B2\u03C1\u03B1"
,12:"Font",13:"Libbra",15:"M\u0101rci\u0146a",26:"Svaras",16:"Pund",17:"Funt",18:
"Libra",19:"Livr\u0103",20:"\u0424\u0443\u043D\u0442",27:"Funt",21:"Libras",22:"Pund"
,23:"Paund",24:"\u0424\u0443\u043D\u0442"};C.BoP={2:"\u041B\u0438\u0431\u0440\u0438/\u0434\u0435\u043D"
,3:"\u78C5/\u65E5",25:"funte/d",4:"Libra/den",5:"pund pr. dag",0:"lbs/d",6:"ponden/dag"
,7:"Kg p\xE4evas",8:"lbs/pv",9:"lbs/jour",11:"\u039B\u03AF\u03B2\u03C1\u03B5\u03C2/\u03BC\u03AD\u03C1\u03B1"
,12:"font naponta",13:"libbre/g",15:"m\u0101rci\u0146as/dien\u0101",26:"svarai per dien\u0105"
,16:"Pund/dag",17:"lb/dzie\u0144",19:"livre pe zi",20:"lbs/\u0434\u0435\u043D\u044C"
,27:"funtov/d",22:"pund per dag",23:"G\xFCnl\xFCk paund",24:"lbs/\u0434\u0435\u043D\u044C"
};C.P2={1:"o\u010Dekivano",2:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0430\u043D\u043E"
,3:"\u9810\u6E2C",25:"Predvi\u0111eno",4:"P\u0159edpov\u011Bzen\xE1",5:"Forudsagt"
,0:"Predicted",6:"Verwachte",7:"Ennustatud",8:"Ennustettu",9:"Pr\xE9vue",10:"Erwartet"
,11:"\u03A0\u03C1\u03BF\u03B2\u03BB\u03AD\u03C6\u03B8\u03B7\u03BA\u03B5",12:"Megj\xF3solt"
,13:"Preveduto",15:"Prognoz\u0113ts",26:"Numatytas",16:"Sp\xE5dd",17:"Przewidywany"
,18:"Previsto",19:"Prezis",20:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0443\u0435\u043C\u044B\u0439"
,27:"Predvideno",21:"Pronosticado",22:"F\xF6ruts\xE4gd",23:"Tahmin edilen",24:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0443\u0454\u043C\u0438\u0439"
};C.AGw={1:"Broj objekta",2:"\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435-ID \u043D\u043E\u043C\u0435\u0440"
,3:"\u5834\u6240\u7DE8\u865F",25:"Broj identifikacije prostora",4:"\u010C\xEDslo objektu"
,5:"Lokalitets-ID-nummer",0:"Premises-ID number",6:"Bedrijfsnummer",7:"Eelduste ID-number"
,8:"Maatilan numero",9:"N\xB0 d\'exploitation",10:"Betriebsnummer",11:"\u03A0\u03C1\u03BF\u03CB\u03C0\u03CC\u03B8\u03B5\u03C3\u03B5\u03B9\u03C2-\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"Helyrajzi sz\xE1m",13:"Numero ID della sede",15:"Telpu-ID numurs",26:"Pastato ID numeris"
,16:"Lokale-ID-nummer",17:"Numer identyfikacyjny lokalu",18:"N\xFAmero de identifica\xE7\xE3o do local"
,19:"Num\u0103rul de identificare al propriet\u0103\u021Bii",20:"\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F"
,27:"\u0160tevilka identifikacije prostorov",21:"ID de predios",22:"Fastighets-ID-nummer"
,23:"Tesis kimlik numaras\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F-ID"
};C.BoQ={1:"Prethodne dodatne radnje",2:"\u041F\u0440\u0435\u0434\u0438\u0448\u043D\u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",3:"\u5148\u524D\u7684\u984D\u5916\u884C\u52D5"
,25:"Prethodne dodatne radnje",4:"P\u0159edchoz\xED dal\u0161\xED kroky",5:"Tidligere yderligere handlinger"
,0:"Previous additional actions",6:"Vorige toegevoegde acties",7:"Eelmised lisategevused"
,8:"Aiemmat lis\xE4toiminnot",9:"Actions suppl\xE9mentaires pr\xE9c\xE9dentes",10:
"Vorherige Zusatzaktionen",11:"\u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B5\u03C2 "+
"\u03C0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C4\u03B5\u03C2 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2"
,12:"Kor\xE1bbi tov\xE1bbi int\xE9zked\xE9sek",13:"Azioni aggiuntive precedenti"
,15:"Iepriek\u0161\u0113j\u0101s papildu darb\u012Bbas",26:"Ankstesni papildomi veiksmai"
,16:"Tidligere tilleggs handlinger",17:"Poprzednie dodatkowe dzia\u0142ania",18:
"A\xE7\xF5es adicionais anteriores",19:"Ac\u021Biuni suplimentare anterioare",20:
"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",27:"Prej\u0161nja dodatna dejanja"
,22:"Tidigare ytterligare \xE5tg\xE4rder",23:"\xD6nceki ek i\u015Flemler",24:"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 "+
"\u0434\u0456\u0457"};C.BoR={1:"Problemati\u010Dna prilikom mu\u017Enje",2:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 "+
"\u0434\u043E\u0435\u043D\u0435",3:"\u554F\u984C\u6027\u7684\u64E0\u5976\u884C\u70BA"
,25:"Problemati\u010Dno pona\u0161anje pri mu\u017Enji",4:"Probl\xE9mov\xE9 dojic\xED chov\xE1n\xED"
,5:"Problematisk malkning adf\xE6rd",0:"Problematic milking behavior",6:"Problematisch drinkgedrag"
,7:"Probleemne l\xFCpsik\xE4itumine",8:"Ongelmallinen lypsyk\xE4ytt\xE4ytyminen"
,9:"Comportement probl\xE9matique lors de la traite",10:"Problematisches Melkverhalten"
,11:"\u03A0\u03C1\u03BF\u03B2\u03BB\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE "+
"\u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03C3\u03C4\u03BF "+
"\u03AC\u03C1\u03BC\u03B5\u03B3\u03BC\u03B1",12:"Probl\xE9m\xE1s fej\xE9si viselked\xE9s"
,13:"Comportamento problematico durante la mungitura",15:"Probl\u0113m\u0101tiska piena slauk\u0161anas uzved\u012Bba"
,26:"Probleminis mel\u017Eimo elgesys",16:"Problematisk melkeadferd",17:"Problemowe zachowanie podczas doju"
,18:"Comportamento problem\xE1tico na ordenha",19:"Comportament problematic la muls"
,20:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 "+
"\u043F\u0440\u0438 \u0434\u043E\u0435\u043D\u0438\u0438",27:"Problemati\u010Dno vedenje pri mol\u017Ei"
,21:"Comportamiento problem\xE1tico durante el orde\xF1o",22:"Problematiskt mj\xF6lkande beteende"
,23:"Sorunlu sa\u011F\u0131m davran\u0131\u015F\u0131",24:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430 "+
"\u043F\u0440\u0438 \u0434\u043E\u0457\u043D\u043D\u0456"};C.BoS={1:"Problemati\u010Dno pona\u0161enje u stadu"
,2:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",3:"\u554F\u984C\u6027\u793E\u6703\u884C\u70BA"
,25:"Problemati\u010Dno dru\u0161tveno pona\u0161anje",4:"Problemati\u010Dn\xED soci\xE1ln\xED chov\xE1n\xED"
,5:"Problematisk social adf\xE6rd",0:"Problematic social behavior",6:"Problematisch sociaal gedrag"
,7:"Probleemne sotsiaalne k\xE4itumine",8:"Ongelmainen sosiaalinen k\xE4ytt\xE4ytyminen"
,9:"Comportement social probl\xE9matique",10:"Problematisches Sozialverhalten",11:
"\u03A0\u03C1\u03BF\u03B2\u03BB\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE "+"\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03B9\u03BA\u03AE \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC"
,12:"Probl\xE9m\xE1s t\xE1rsas\xE1gi magatart\xE1s",13:"Comportamento sociale problematico"
,15:"Probl\u0113m\u0101tiska soci\u0101l\u0101 uzved\u012Bba",26:"Probleminis socialinis elgesys"
,16:"Problematisk sosial adferd",17:"Problemowe zachowanie spo\u0142eczne",18:"Comportamento social problem\xE1tico"
,19:"Comportament social problematic",20:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 "+
"\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",27:"Problemati\u010Dno dru\u017Ebeno vedenje"
,21:"Comportamiento social problem\xE1tico",22:"Problematiskt socialt beteende",
23:"Sorunlu sosyal davran\u0131\u015F",24:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u0430 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430 "+
"\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430"};C.BoT={1:"Proizvedeno"
,2:"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E",3:"\u88FD\u4F5C"
,25:"Proizvedeno",4:"Vyprodukovan\xFD",5:"Produceret",0:"Produced",6:"Geproduceerd"
,7:"Toodetud",8:"Tuotettu",9:"Produit",10:"Produziert",11:"\u03A0\u03B1\u03C1\u03AC\u03C7\u03B8\u03B7\u03BA\u03B5"
,12:"Termelt",13:"Prodotto",15:"Ra\u017Eots",26:"Pagaminta",16:"Produsert",17:"Wyprodukowany"
,18:"Produzido",19:"Produs",20:"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E"
,27:"Proizvedeno",21:"Producido",22:"Producerad",23:"\xDCretilmi\u015F",24:"\u0412\u0438\u0440\u043E\u0431\u043B\u0435\u043D\u043E"
};C.A$w={1:"Proizvo\u0111a\u010D",2:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B"
,3:"\u88FD\u7247\u4EBA",25:"Producent",4:"Producent",5:"Producent",0:"Producer",
6:"Producent",7:"Tootja",8:"Tuottaja",9:"Producteur",10:"Hersteller",11:"\u03A0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03CC\u03C2"
,12:"Termel\u0151",13:"Produttore",15:"Ra\u017Eot\u0101js",26:"Prodiuseris",16:"Produsent"
,17:"Producent",18:"Produtor",19:"Produc\u0103tor",20:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"
,27:"Producent",21:"Fabricante",22:"Producent",23:"\xDCretici",24:"\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A"
};C.BoU={1:"Ubacite USB sa va\u017Ee\u0107im programom - a\u017Euriranje",2:"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E "+
"\u0441 \u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0444\u0430\u0439\u043B "+"\u043D\u0430 \u0444\u044A\u0440\u043C\u0443\u0435\u0440\u0430 \u2019firmware.vcu\u2019!"
,3:"\u8ACB\u63D2\u5165\u542B\u6709\u6709\u6548\u97CC\u9AD4\u6A94\u6848 \'firmware.vcu\' "+
"\u7684USB\u96A8\u8EAB\u789F\uFF08\u4F4D\u65BC\'update\'\u8CC7\u6599\u593E\u5167\uFF09\uFF01"
,25:"Umetnite USB flash pogon s valjanom datotekom firmvera \'firmware.vcu\' "+"(unutar direktorija \'update\'), molim!"
,4:"Vlo\u017Ete USB flash disk se spr\xE1vn\xFDm souborem firmwaru \'firmware.vcu\' "+
"(uvnit\u0159 slo\u017Eky \'update\'), pros\xEDm!",5:"Inds\xE6t USB-n\xF8gle med gyldig firmwarefil \'firmware.vcu\' (i mappen "+
"\'update\'), venligst!",0:"Insert USB flash drive with valid firmware file \u2019firmware.vcu\u2019\n(inside "+
"directory \u2019update\u2019), please!",6:"Plaats de USB-stick met het geldige firmwarebestand \'firmware.vcu\' (in "+
"de map \'update\'), alstublieft!",7:"Sisesta palun kehtiva p\xFCsivarafailiga \'firmware.vcu\'\n(kataloogis "+
"\'uuendus\') USB-m\xE4lupulk!",8:"Aseta USB-muisti~tikku, jossa on kelvollinen firm~ware-tie~dos~to \u2019firmware.vcu\u2019, "+
"kiitos!",9:"Ins\xE9rez une cl\xE9 USB avec un logiciel valide \u2019firmware.vcu\u2019, "+
"s\u2019il vous pla\xEEt\xA0!",10:"Bitte USB-Stick mit g\xFCltiger Firmware-Datei \u2019firmware.vcu\u2019\n(im "+
"Verzeichnis \u2019update\u2019) einstecken!",11:"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 "+
"\u03BC\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 "+
"USB \u03BC\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+
"\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03BF\u03CD \xABfirmware.vcu\xBB, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE!",12:"K\xE9rj\xFCk, helyezze be az \xE9rv\xE9nyes firmware f\xE1jlt tartalmaz\xF3 "+
"USB flash meghajt\xF3t (\'firmware.vcu\' a \'update\' mapp\xE1ban)!",13:"Inserisci la chiavetta USB con il file di firmware valido \'firmware.vcu\' "+
"(all\'interno della cartella \'update\'), per favore!",15:"Ievietojiet USB zibatmi\u0146u ar der\u012Bgu programmaparat\u016Bras "+
"failu \'firmware.vcu\' (map\u0113 \'update\'), l\u016Bdzu!",26:"\u012Ed\u0117kite USB atmintin\u0119 su galiojan\u010Diu programin\u0117s "+
"\u012Frangos failu \u201Efirmware.vcu\u201C (kataloge \u201Eupdate\u201C), "+"pra\u0161au!"
,16:"Sett inn USB med gyldig programfil \u2019firmware.vcu\u2019 takk!",17:"W\u0142\xF3\u017C pendrive USB z prawid\u0142owym plikiem firmware \'firmware.vcu\' "+
"(w folderze \'update\'), prosz\u0119!",18:"Insira o pen drive USB com o arquivo de firmware v\xE1lido \'firmware.vcu\' "+
"(dentro do diret\xF3rio \'update\'), por favor!",19:"Introduce\u021Bi unitatea USB cu fi\u0219ierul de firmware valid \u2019firmware.vcu\u2019\n(\xEEn "+
"interiorul directorului \u2019update\u2019), v\u0103 rog!",20:"\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 USB \u0441 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C "+
"\u0444\u0430\u0439\u043B\u043E\u043C \u041F\u041E \u2019firmware.vcu\u2019 "+"(\u0432 \u043F\u0430\u043F\u043A\u0435 \u2019update\u2019)!"
,27:"Vstavite USB klju\u010Dek z veljavno datoteko za posodobitev \"firmware.vcu\" "+
"(znotraj mape \"update\"), prosim!",21:"Inserte una unidad flash USB con el archivo de firmware v\xE1lido \'firmware.vcu\'\n(dentro "+
"del directorio \'update\'), por favor.",22:"S\xE4tt in USB-minne med giltig firmwarefil \'firmware.vcu\' (i mappen "+
"\'update\'), tack!",23:"Ge\xE7erli donan\u0131m yaz\u0131l\u0131m\u0131 dosyas\u0131 \'firmware.vcu\'\n(\'g\xFCncelleme\' "+
"dizininin i\xE7ine) i\xE7eren USB flash s\xFCr\xFCc\xFCy\xFC tak\u0131n, "+"l\xFCtfen!"
,24:"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 USB \u0456\u0437 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C "+
"\u0444\u0430\u0439\u043B\u043E\u043C \u041F\u041E \u2019firmware.vcu\u2019 "+"(\u0432 \u043F\u0430\u043F\u0446\u0456 \u2019update\u2019)!"
};C.N_={1:"Protokol",2:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B",3:"\u5354\u8B70"
,25:"Protokol",4:"Protokol",5:"Protokol",0:"Protocol",7:"Protokoll",8:"Kokoonpano"
,9:"Protocole",10:"Protokoll",11:"\u03A0\u03C1\u03BF\u03C4\u03CC\u03BA\u03C9\u03BB\u03BF"
,12:"Protokoll",13:"Protocollo",15:"Protokols",26:"Protokolas",16:"Protikoll",17:
"Protok\xF3\u0142",18:"Protocolo",20:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B"
,27:"Protokol",21:"Protocolo",22:"Protokoll",23:"Protokol",24:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B"
};C.A$y={1:"Obavijesti o kupovini su obrisane nakon izvoza!",2:"\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u044F\u0442\u0430 \u0437\u0430 "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 "+
"\u0441\u043B\u0435\u0434 \u0435\u043A\u0441\u043F\u043E\u0440\u0442!",3:"\u51FA\u53E3\u5F8C\u8CFC\u8CB7\u901A\u77E5\u5DF2\u522A\u9664\uFF01"
,25:"Obavijesti o kupnji su izbrisane nakon izvoza!",4:"Ozn\xE1men\xED o n\xE1kupu byla smaz\xE1na po exportu!"
,5:"K\xF8bsmeddelelser blev slettet efter eksport!",0:"Purchase notices were deleted after export!"
,6:"Aankoopmelding wordt verwijderd na export",7:"Ostu teated kustutati p\xE4rast eksportimist!"
,8:"K\xE4ytt\xF6oikeusviestit poistettiin viennin j\xE4lkeen!",9:"Les donn\xE9es d\'achat ont \xE9t\xE9 supprim\xE9s apr\xE8s l\'exportation\xA0!"
,10:"Zugangsmeldun~gen wurden nach Export gel\xF6scht!",11:"\u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE!"
,12:"A v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9seket t\xF6r\xF6lt\xE9k az export\xE1l\xE1s "+
"ut\xE1n!",13:"Le notifiche di acquisto sono state eliminate dopo l\'esportazione!"
,15:"Pirkuma pazi\u0146ojumi tika dz\u0113sti p\u0113c eksport\u0113\u0161anas!"
,26:"Pirkimo prane\u0161imai buvo i\u0161trinti po eksporto!",16:"Kj\xF8psvarsler ble slettet etter eksport!"
,17:"Powiadomienia o zakupie zosta\u0142y usuni\u0119te po eksporcie!",18:"Os avisos de compra foram exclu\xEDdos ap\xF3s a exporta\xE7\xE3o!"
,19:"Notific\u0103rile de achizi\u021Bie au fost \u0219terse dup\u0103 export!",
20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u044B\u043B\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u044B "+
"\u043F\u043E\u0441\u043B\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430!"
,27:"Obvestila o nakupu so bila izbrisana po izvozu!",21:"\xA1Las notificaciones de compra fueron eliminadas despu\xE9s de la exportaci\xF3n!"
,22:"K\xF6paviseringar raderades efter exporten!",23:"\u0130hracattan sonra sat\u0131n alma bildirimleri silindi!"
,24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0431\u0443\u043B\u0438 "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456 \u043F\u0456\u0441\u043B\u044F "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443!"};C.AGy={1:"Kupljene \u017Eivotinje"
,2:"\u0417\u0430\u043A\u0443\u043F\u0435\u043D\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,3:"\u8CFC\u8CB7\u7684\u52D5\u7269",25:"Kupljene \u017Eivotinje",4:"Koupen\xE1 zv\xED\u0159ata"
,5:"K\xF8bte dyr",0:"Purchased animals",6:"Gekocht dier",7:"Ostetud loomad",8:"Ostettuja el\xE4imi\xE4"
,9:"Animaux achet\xE9s",10:"Zuk\xE4ufe",11:"\u0391\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03B1"
,12:"V\xE1s\xE1rolt \xE1llatok",13:"Animali acquistati",15:"Ieg\u0101d\u0101tie dz\u012Bvnieki"
,26:"Nupirkti gyv\u016Bnai",16:"Kj\xF8pte dyr",17:"Zakupione zwierz\u0119ta",18:
"Animais comprados",19:"Animale cump\u0103rate",20:"\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,27:"Kupljene \u017Eivali",21:"Animales comprados",22:"K\xF6pta djur",23:"Sat\u0131n al\u0131nan hayvanlar"
,24:"\u041A\u0443\u043F\u043B\u0435\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Quadruplets={1:"\u010Cetvorke",2:"\u0427\u0435\u0442\u0440\u0438\u0437\u043D\u0430\u0446\u0438"
,3:"\u56DB\u80DE\u80CE",25:"\u010Cetvorke",4:"\u010Dty\u0159\u010Data",5:"Firlinger"
,0:"Quadruplets",6:"Vierling",7:"Nelikud",8:"Neloset",9:"Quadrupl\xE9",10:"Vierlinge"
,11:"\u03A4\u03B5\u03C4\u03C1\u03AC\u03B4\u03C5\u03BC\u03B1",12:"N\xE9gyes ikrek"
,13:"Quadrupletti",15:"\u010Detrinieki",26:"Ketvertukai",16:"Firlinger",17:"Czw\xF3rki"
,18:"Qu\xE1druplos",19:"cvadruple\u021Bi",20:"\u0427\u0435\u0442\u0432\u0435\u0440\u043E \u0431\u043B\u0438\u0437\u043D\u0435\u0446\u043E\u0432"
,27:"\u010Cetver\u010Dki",21:"Cuatrillizos",22:"Fyrlingar",23:"D\xF6rd\xFCzler",
24:"\u0427\u043E\u0442\u0438\u0440\u0438 \u0431\u043B\u0438\u0437\u043D\u044E\u043A\u0438"
};C.A$z={1:"Kvalitet kolostruma",2:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043B\u0430\u0441\u0442\u0440\u0430"
,3:"\u521D\u4E73\u54C1\u8CEA",25:"Kvaliteta kolostruma",4:"Kvalita kolostrum",5:
"Kvalitet af r\xE5m\xE6lk",0:"Quality of colostrum",6:"Biestkwaliteit",7:"Ternespiima kvaliteet"
,8:"Ternimaidon laatu",9:"Qualit\xE9 du colostrum",10:"Kolostrumqualit\xE4t",11:
"\u03A0\u03BF\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03C1\u03C9\u03C4\u03BF\u03B3\u03AC\u03BB\u03B1\u03BA\u03C4\u03BF\u03C2"
,12:"Kolostrum min\u0151s\xE9ge",13:"Qualit\xE0 del colostro",15:"Kolostruma kvalit\u0101te"
,26:"Kokyb\u0117 kolostrumo",16:"Kvaliteten p\xE5 r\xE5melk",17:"Jako\u015B\u0107 siary"
,18:"Qualidade do colostro",19:"Calitatea colostrului",20:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430"
,27:"Kakovost kolostruma",21:"Calidad del calostro",22:"Kvalitet p\xE5 r\xE5mj\xF6lk"
,23:"Kolostrum miktar\u0131",24:"\u042F\u043A\u0456\u0441\u0442\u044C \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0443"
};C.QuestionAddAnotherCalfMultiples={1:"\u017Divotinja je uspje\u0161no registrovana. Da li \u017Eelite registrivati "+
"i ostale \u017Eivotinje od iste majke?",2:"\u041D\u043E\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E (\u043E\u0442 "+
"\u043C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u043E \u0440\u0430\u0436\u0434\u0430\u043D\u0435) "+
"\u0431\u0435\u0448\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!\n\n\u0421\u0435\u0433\u0430 "+"\u0438\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0434\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 "+
"\u0438 \u0431\u043B\u0438\u0437\u043D\u0430\u043A\u0430 \u043C\u0443?",3:"\u65B0\u751F\u52D5\u7269\uFF08\u4F86\u81EA\u591A\u80DE\u80CE\uFF09\u5DF2\u6210\u529F\u8A3B\u518A\uFF01\n\u60A8\u73FE\u5728\u8981\u8A3B\u518A\u5B83\u7684\u5144\u5F1F\u59D0\u59B9\u55CE\uFF1F"
,25:"Novo \u017Eivotinjsko mladun\u010De (iz vi\u0161eplodnog poroda) je uspje\u0161no "+
"registrirano!\n\n\u017Delite li sada registrirati i njegovog brata ili "+"sestru?"
,4:"Nov\xE9 zv\xED\u0159e (z v\xEDce\u010Detn\xE9ho vrhu) bylo \xFAsp\u011B\u0161n\u011B "+
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
,13:"Il nuovo animale (nato da una nascita multipla) \xE8 stato registrato "+"con successo!\n\nVuoi registrare anche il suo fratellino ora?"
,15:"Jauns dz\u012Bvnieks (no vair\u0101k\u0101m dzemd\u012Bb\u0101m) tika "+"veiksm\u012Bgi re\u0123istr\u0113ts!\n\nVai v\u0113laties re\u0123istr\u0113t "+
"ar\u012B t\u0101 br\u0101li vai m\u0101su?",26:"Naujas gyv\u016Bnas (i\u0161 daugybini\u0173 gimim\u0173) buvo s\u0117kmingai "+
"u\u017Eregistruotas!\n\nAr nor\u0117tum\u0117te dabar u\u017Eregistruoti "+"ir jo brol\u012F ar seser\u012F?"
,16:"Nytt dyr (fra tvilling/flerf\xF8dsel) ble registrert!\n\nVil du ogs\xE5 "+"registrere s\xF8sken?"
,17:"Nowe zwierz\u0119 (z wielorakiego miotu) zosta\u0142o zarejestrowane pomy\u015Blnie!\n\nCzy "+
"chcia\u0142by\u015B teraz zarejestrowa\u0107 r\xF3wnie\u017C jego rodze\u0144stwo?"
,18:"Um novo animal (de m\xFAltiplo nascimento) foi registrado com sucesso!\n\nGostaria "+
"de registrar o irm\xE3o dele tamb\xE9m?",19:"Un nou animal (din na\u0219teri multiple) a fost \xEEnregistrat cu succes!\n\nDori\u021Bi "+
"s\u0103 \xEEi \xEEnregistra\u021Bi \u0219i pe fratele sau sora acestuia "+"acum?"
,20:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0438\u0437 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E!\n\u0425\u043E\u0442\u0438\u0442\u0435 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0441\u0435\u0439\u0447\u0430\u0441?",27:"Novo \u017Eival (iz ve\u010Dkratnega legla) je bilo uspe\u0161no registrirano!\n\nBi "+
"\u017Eeleli registrirati tudi njegovega brata ali sestro?",21:"\xA1El nuevo animal (de un parto m\xFAltiple) se registr\xF3 con \xE9xito!\n\xBFLe "+
"gustar\xEDa registrar a su hermano tambi\xE9n?",22:"Det nya djuret (fr\xE5n flerbarnsf\xF6dsel) registrerades framg\xE5ngsrikt!\n\nVill "+
"du nu ocks\xE5 registrera dess syskon?",23:"Yeni hayvan (\xE7o\u011Ful do\u011Fumdan itibaren) ba\u015Far\u0131yla "+
"kaydedildi!\n\n\u015Eimdi onun karde\u015Fini de kaydetmek ister misiniz?",24:"\u041D\u043E\u0432\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0456\u0437 "+
"\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0430\u044F "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E!\n\u0427\u0438 "+
"\u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0443 \u0440\u043E\u0434\u0438\u043D\u043D\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0437\u0430\u0440\u0430\u0437?"};C.
Afg={3:"\u554F\u865F",0:"?",9:"\xA0?"};C.A$A={1:"RFID \u010Dita\u010D",2:"RFID \u0447\u0435\u0442\u0435\u0446"
,3:"RFID \u8B80\u53D6\u5668",25:"\u010Dita\u010D RFID",4:"\u010Dte\u010Dka RFID"
,5:"RFID-l\xE6ser",0:"RFID reader",6:"RFID lezer",7:"RFID lugeja",8:"RFID lukija"
,9:"Lecteur RFID",10:"RFID-Leseger\xE4t",11:"\u0391\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03C4\u03B7\u03C2 RFID"
,12:"RFID olvas\xF3",13:"Lettore RFID",15:"RFID las\u012Bt\u0101js",26:"RFID skaitytuvas"
,16:"RFID-leser",17:"czytnik RFID",18:"Leitor de RFID",19:"Cititor RFID",20:"\u0421\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C RFID"
,27:"\u010Ditalnik RFID",21:"Lector RFID",22:"RFID-l\xE4sare",23:"RFID okuyucu",
24:"\u0417\u0447\u0438\u0442\u0443\u0432\u0430\u0447 RFID"};C.BoW={3:"RGB \u767C\u5149\u4E8C\u6975\u9AD4"
,0:"RGB LED",13:"LED RGB",17:"Dioda LED RGB",18:"LED RGB",19:"LED RGB",21:"LED RGB"
,23:"RGB LED\'i"};C.A$C={1:"real time sat",2:"\u0427\u0430\u0441\u043E\u0432\u043D\u0438\u043A \u0437\u0430 \u0440\u0435\u0430\u043B\u043D\u043E "+
"\u0432\u0440\u0435\u043C\u0435",3:"\u5BE6\u6642\u6642\u9418",25:"Stvarno vrijeme sata"
,4:"Re\xE1ln\xFD \u010Dasov\xFD hodiny",5:"Realtidsur",0:"Real time clock",6:"Real time klok"
,7:"Reaalaja kell",8:"Reaaliaikainen kello",9:"Module d\'horloge",10:"Uhrenbaustein"
,11:"\u03A1\u03BF\u03BB\u03CC\u03B9 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03BF\u03CD "+
"\u03C7\u03C1\u03CC\u03BD\u03BF\u03C5",12:"Val\xF3s idej\u0171 \xF3ra",13:"Orologio in tempo reale"
,15:"Re\u0101l\u0101 laika pulkstenis",26:"Realiojo laiko laikrodis",16:"Sanntids klokke"
,17:"Zegar czasu rzeczywistego",18:"Rel\xF3gio em tempo real",19:"Ceas \xEEn timp real"
,20:"\u041C\u043E\u0434\u0443\u043B\u044C \u0447\u0430\u0441\u043E\u0432",27:"Prava \u010Dasovna ura"
,21:"Reloj en tiempo real",22:"Realtidsklocka",23:"Ger\xE7ek zamanl\u0131 saat",
24:"\u041C\u043E\u0434\u0443\u043B\u044C \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0430"
};C.RangeTest={1:"Test dosega",2:"\u0422\u0435\u0441\u0442 \u043D\u0430 \u043E\u0431\u0445\u0432\u0430\u0442\u0430"
,3:"\u7BC4\u570D\u6E2C\u8A66",25:"Test raspona",4:"Rozsah testu",5:"R\xE6kkevidde test"
,0:"Range test",7:"Vahemiku test",8:"Aluetesti",9:"Test de l\u2019autonomie",10:
"Reichweitentest",11:"\u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B5\u03CD\u03C1\u03BF\u03C5\u03C2"
,12:"Hat\xF3t\xE1v teszt",13:"Prova di portata",15:"Diapazona tests",26:"Diapazono testas"
,16:"Rangering",17:"Test zasi\u0119gu",18:"Teste de alcance",19:"Test de interval"
,20:"\u0422\u0435\u0441\u0442 \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",27:"Preskus obsega",21:"Prueba de alcance"
,22:"R\xE4ckviddstest",23:"Mesafe testi",24:"\u0422\u0435\u0441\u0442 \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 "+
"\u0434\u0456\u0457"};C.A$D={1:"Ocjena",2:"\u041E\u0446\u0435\u043D\u043A\u0430"
,3:"\u6BD4\u7387",25:"Stopa",4:"Hodnotit",5:"Bed\xF8mme",0:"Rate",6:"Beoordelen"
,7:"Hinda",8:"Taso",9:"\xC9valuer",10:"Bewerten",11:"\u0394\u03CE\u03C3\u03B5 \u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7"
,12:"Ar\xE1ny",13:"Tasso",15:"Likme",26:"Norma",16:"Vurdere",17:"Ocena",18:"Taxa"
,19:"Rat\u0103",20:"\u041E\u0446\u0435\u043D\u0438\u0442\u044C",27:"Stopnja",21:
"Evaluar",22:"Betyg",23:"Oran",24:"\u041E\u0446\u0456\u043D\u0438\u0442\u0438"};
C.AGz={1:"Ocjenjivanje \u017Eivotinje",2:"\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u8A55\u5206",25:"Stopa \u017Eivotinja",4:"Hodnotit zv\xED\u0159e"
,5:"Bed\xF8m dyr",0:"Rate animal",6:"Dier beoordelen",7:"Hinda looma",8:"Arvioi el\xE4in"
,9:"Evaluer l\u2019animal",10:"Tier bewerten",11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF \u03B6\u03CE\u03BF",12:"\xC9rt\xE9kelj \xE1llatot",13:"Valuta animale"
,15:"nov\u0113rt\u0113t dz\u012Bvnieku",26:"\u012Evertinkite gyv\u016Bn\u0105",16:
"Vurder dyr",17:"Stopie\u0144 zwierz\u0119cia",18:"Animal de estima\xE7\xE3o",19:
"Animal de companie",20:"\u041E\u0446\u0435\u043D\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"stopnja \u017Eivali",21:"Evaluar animal",22:"Betygs\xE4tt djur",23:"Hayvan\u0131 de\u011Ferlendir"
,24:"\u041E\u0446\u0456\u043D\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.Rating={1:"Ocjenjivanje",2:"\u041E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435"
,3:"\u8A55\u5206",25:"Ocjena",4:"Hodnocen\xED",5:"Bed\xF8mmelse",0:"Rating",6:"Beoordeling"
,7:"Hinnang",8:"Luokitus",9:"\xC9valuation",10:"Bewertung",11:"\u0395\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7"
,12:"\xC9rt\xE9kel\xE9s",13:"Valutazione",15:"V\u0113rt\u0113jums",26:"\u012Evertinimas"
,16:"Vurdering",17:"Ocena",18:"Avalia\xE7\xE3o",19:"Calificativ",20:"\u041E\u0446\u0435\u043D\u043A\u0430"
,27:"Ocena",21:"Evaluaci\xF3n",22:"Betyg",23:"Derecelendirme",24:"\u041E\u0446\u0456\u043D\u043A\u0430"
};C.A$E={1:"Ocjenjivanje \u017Eivotinja",2:"\u041E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,3:"\u5C0F\u725B\u7684\u8A55\u5206",25:"Ocjena \u017Eivotinja",4:"Hodnocen\xED zv\xED\u0159at"
,5:"Bed\xF8mmelse af dyr",0:"Rating of animals",6:"Dierevaluatie",7:"Loomade hindamine"
,8:"El\xE4inten luokitus",9:"Evaluation des animaux",10:"Tierbewertung",11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2 \u03C4\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD",12:"\xC1llatok \xE9rt\xE9kel\xE9se",13:"Valutazione degli animali"
,15:"Dz\u012Bvnieku v\u0113rt\u0113jums",26:"Gyv\u016Bn\u0173 \u012Fvertinimas",
16:"Vurdering av dyr",17:"Ocena zwierz\u0105t",18:"Avalia\xE7\xE3o de animais",19:
"Evaluarea animalelor",20:"\u041E\u0446\u0435\u043D\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Ocenjevanje \u017Eivali",21:"Evaluaci\xF3n de animales",22:"Betyg p\xE5 djur"
,23:"Hayvanlar\u0131n derecelendirilmesi",24:"\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BoY={1:"Ukupno stanje \u017Eivotinja",2:"\u041E\u0431\u0449\u043E \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,3:"\u5916\u89C0\u8A55\u5206",25:"Op\u0107e stanje",4:"Hodnocen\xED vzhledu celkov\xE9"
,5:"Generel tilstand",0:"General condition",6:"Algemeen optreden",7:"Keskmine seisund"
,8:"Yleiskunto",9:"\xC9tat g\xE9n\xE9ral",10:"Allgemein~zustand",11:"\u0393\u03B5\u03BD\u03B9\u03BA\u03CC\u03C4\u03B5\u03C1\u03B7 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7"
,12:"\xC1ltal\xE1nos \xE1llapot",13:"Condizione generale",15:"Visp\u0101r\u0113jais st\u0101voklis"
,26:"Bendroji b\u016Bkl\u0117",16:"generell tilstand",17:"Stan og\xF3lny",18:"Condi\xE7\xE3o geral"
,19:"Condi\u021Bie general\u0103",20:"\u041E\u0431\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,27:"Splo\u0161no stanje",21:"Aspecto general",22:"Allm\xE4nt tillst\xE5nd",23:"Genel g\xF6r\xFCn\xFCm"
,24:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u0430\u043D"
};C.AGB={1:"Stanje",2:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u044F",3:"\u8A55\u5206"
,25:"Stanje",4:"Hodnocen\xED vzhledu zkr\xE1cen\xE9",5:"Tilstand",0:"Condition",
6:"Uiterlijk",7:"Seisund",8:"Ulkon\xE4k\xF6",9:"\xC9tat",10:"Zustand",11:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7"
,12:"\xC1llapot",13:"Condizione",15:"St\u0101voklis",26:"B\u016Bkl\u0117",16:"Tilstand"
,17:"Stan",18:"Condi\xE7\xE3o",19:"Condi\u021Bie",20:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,27:"Stanje",21:"Aspecto",22:"Tillst\xE5nd",23:"G\xF6r\xFCn\xFCm",24:"\u0421\u0442\u0430\u043D"
};C.BoZ={1:"Konzistencija izmeta",2:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u043D\u0430 \u0438\u0437\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F\u0442\u0430"
,3:"\u7CDE\u4FBF\u5206\u7D1A",25:"Konzistentnost stolice",4:"Hodnocen\xED konzistence v\xFDkal\u016F"
,5:"Konsistens af aff\xF8ring",0:"Consistency of faeces",6:"Mestconsistentie",7:
"V\xE4ljaheite konsistents",8:"Ulosteiden yhdenmukaisuus",9:"Consistance f\xE9cale"
,10:"Kotbeschaffenheit",11:"\u03A3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1 \u03C4\u03C9\u03BD \u03C0\u03B5\u03C1\u03B9\u03C4\u03C4\u03C9\u03BC\u03AC\u03C4\u03C9\u03BD"
,12:"Sz\xE9klet \xE1llaga",13:"Consistenza delle feci",15:"Konsistence izk\u0101rn\u012Bjumiem"
,26:"Konsistencija i\u0161mat\u0173",16:"Konsistens p\xE5 avf\xF8ring",17:"Sp\xF3jno\u015B\u0107 stolca"
,18:"Consist\xEAncia das fezes",19:"Consisten\u021Ba fecalelor",20:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0438\u0439",27:"Konsistenca blata",21:"Consistencia\nde las heces"
,22:"Konsistens av avf\xF6ring",23:"D\u0131\u015Fk\u0131 derecelendirmesi",24:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0456\u0439"};C.AGD={1:"Izmet",2:"\u0418\u0437\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F"
,3:"\u7CDE\u4FBF",25:"Izmet",4:"Hodnocen\xED konzistence v\xFDkal\u016F zkr\xE1cen\xE9"
,5:"Aff\xF8ring",0:"Faeces",6:"Mest",7:"V\xE4ljaheide",8:"Ulosteet",9:"F\xE9cal"
,10:"Kot",11:"\u03A0\u03B5\u03C1\u03B9\u03C4\u03C4\u03CE\u03BC\u03B1\u03C4\u03B1"
,12:"Sz\xE9klet",13:"Feci",15:"F\u0113ces",26:"I\u0161matos",16:"Avf\xF8ring",17:
"Ka\u0142",18:"Fezes",19:"Excremente",20:"\u0424\u0435\u043A\u0430\u043B\u0438\u0438"
,27:"Blato",21:"Heces",22:"Avf\xF6ring",23:"D\u0131\u015Fk\u0131",24:"\u0424\u0435\u043A\u0430\u043B\u0456\u0457"
};C.Bo0={1:"Konzumacija hrane",2:"\u0418\u0437\u044F\u0434\u0435\u043D\u0430 \u0445\u0440\u0430\u043D\u0430"
,3:"\u63A1\u98DF",25:"Unos hrane",4:"Hodnocen\xED p\u0159\xEDjmu krmen\xED",5:"Foderindtag"
,0:"Feed intake",6:"Voeropname",7:"S\xF6\xF6mus",8:"Rehunsy\xF6nti",9:"Consommation"
,10:"Futteraufnahme",11:"\u03A0\u03C1\u03CC\u03C3\u03BB\u03B7\u03C8\u03B7 \u03C4\u03C1\u03BF\u03C6\u03AE\u03C2"
,12:"Takarm\xE1nyfelv\xE9tel",13:"Assunzione di cibo",15:"Bar\u012Bbas uz\u0146em\u0161ana"
,26:"Pa\u0161ar\u0173 suvartojimas",16:"F\xF4ropptak",17:"Spo\u017Cycie paszy",18:
"Ingest\xE3o de alimento",19:"Consumul de hran\u0103",20:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043C\u0430"
,27:"Vnos hrane",21:"Ingesta de alimento",22:"Foderintag",23:"Besin derecelendirmesi"
,24:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u043C\u0443"
};C.Bo1={1:"Oboljenja disajnih puteva",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0430 "+
"\u0431\u043E\u043B\u0435\u0441\u0442",3:"\u547C\u5438\u75BE\u75C5",25:"Respiratorna bolest"
,4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED",5:"Respirationssygdom",0:"Respiratory disease"
,6:"Ademwegsziekte",7:"Hingamisteede haigus",8:"Hengityssairaus",9:"Maladie respiratoire"
,10:"Atemwegserkrankung",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B1 \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"L\xE9gz\u0151szervi betegs\xE9g",13:"Malattia respiratoria",15:"Elpo\u0161anas slim\u012Bba"
,26:"Kv\u0117pavimo tak\u0173 liga",16:"Luftveissykdom",17:"Choroba oddechowa",18:
"Doen\xE7a respirat\xF3ria",19:"Boal\u0103 respiratorie",20:"\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0434\u044B\u0445\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043F\u0443\u0442\u0435\u0439",27:"Bolezen dihal",21:"Enfermedad respiratoria"
,22:"Andningssjukdom",23:"Solunum derecelendirmesi",24:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 "+
"\u0448\u043B\u044F\u0445\u0456\u0432"};C.Bo2={1:"Oboljenja disajnih puteva",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0430 "+
"\u0431\u043E\u043B\u0435\u0441\u0442",3:"\u547C\u5438\u9053\u75BE\u75C5",25:"Respiratorna bolest"
,4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED pomoc",5:"Respiratorisk sygdom",
0:"Respiratory disease",6:"Ademwegsziekte",7:"Hingamisteede haigus",8:"Hengitys~sairaus"
,9:"Maladie respiratoire",10:"Atemwege",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B1 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,12:"L\xE9gz\u0151szervi betegs\xE9g",13:"Malattia respiratoria",15:"Elpo\u0161anas slim\u012Bba"
,26:"Kv\u0117pavimo tak\u0173 liga",16:"Luftveissykdom",17:"Choroba oddechowa",18:
"Doen\xE7a respirat\xF3ria",19:"Boal\u0103 respiratorie",20:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0435 "+
"\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435",27:"Bolezen dihal"
,21:"Enfermedad respiratoria",22:"Andningssjukdom",23:"Solunum yollar\u0131 rahats\u0131zl\u0131\u011F\u0131"
,24:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 "+
"\u0448\u043B\u044F\u0445\u0456\u0432"};C.AUF={2:"\u0420",3:"A",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED po\u010D\xE1te\u010Dn\xED"
,0:"R",8:"H",10:"A",11:"\u0391",12:"L",15:"E",26:"K",17:"O",18:"D",20:"\u0410",27:
"B",22:"A",24:"\u041E"};C.AGE={1:"Disajni putevi",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0438"
,3:"\u547C\u5438",25:"Disajni",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED zkr\xE1cen\xE9"
,5:"Respiratorisk",0:"Respiratory",6:"Ademwegen",7:"Hingamisteede",8:"Hengitys",
9:"Voie respiratoire",10:"Atemwege",11:"\u0391\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03CC"
,12:"L\xE9gz\u0151rendszeri",13:"Respiratorio",15:"Elpo\u0161anas",26:"Kv\u0117pavimo"
,16:"Luftveiene",17:"Oddechowy",18:"Respirat\xF3rio",19:"Respirator",20:"\u041E\u0440\u0433\u0430\u043D\u044B \u0434\u044B\u0445\u0430\u043D\u0438\u044F"
,27:"Dihalni",21:"V\xEDas respi~ratorias",22:"Andnings-",23:"Solunum",24:"\u041E\u0440\u0433\u0430\u043D\u0438 \u0434\u0438\u0445\u0430\u043D\u043D\u044F"
};C.Bo3={1:"\u010Cisti",2:"\u0414\u0438\u0430\u0440\u0438\u044F",3:"\u64E6\u6D17"
,25:"\u010Cisti",4:"Pr\u016Fjem",5:"Skurer",0:"Scours",6:"Diarree",7:"K\xF5hulahtisus"
,8:"Ulosteet",9:"Diarrh\xE9e",10:"Kotkonsistenz",11:"\u0394\u03B9\u03AC\u03C1\u03C1\u03BF\u03B9\u03B1"
,12:"D\xF6rzs\xF6l",13:"Scrofola",15:"Skalo",26:"\u0160vei\u010Dia",16:"Diare vurdering"
,17:"Szoruje",18:"Esfrega",19:"Frec\u0103ri",20:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0438\u0439",27:"Drgeti",21:"Diarrea",22:"Skurar"
,23:"\u0130shal",24:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0456\u0439"};C.AUG={2:"\u041E",3:"\u8179\u7009"
,25:"\u010C",4:"Hodnocen\xED zv\xED\u0159ete po\u010D\xE1te\u010Dn\xED",0:"S",7:
"T",8:"U",9:"D",10:"K",11:"\u0394",12:"D",26:"\u0160",18:"E",19:"F",20:"\u041A",
27:"D",21:"D",24:"\u041A"};C.AxA={1:"Ocjenjivanje",2:"\u041E\u0446\u0435\u043D\u043A\u0438"
,3:"\u8A55\u5206",25:"Ocjene",4:"Hodnocen\xED",5:"Bed\xF8mmelser",0:"Ratings",6:
"Beoordelin~gen",7:"Hinnangud",8:"Luokitukset",9:"\xC9valuations",10:"Bewertungen"
,11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2",12:"\xC9rt\xE9kel\xE9sek"
,13:"Valutazioni",15:"V\u0113rt\u0113jumi",26:"\u012Evertinimai",16:"Vurderinger"
,17:"Oceny",18:"Avalia\xE7\xF5es",19:"Calificative",20:"\u041E\u0446\u0435\u043D\u043A\u0438"
,27:"Ocene",21:"Evaluaciones",22:"Betyg",23:"Derecelendirmeler",24:"\u041E\u0446\u0456\u043D\u043A\u0438"
};C.ReasonOfLeaving={1:"Razlog napu\u0161tanja",2:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0437\u0430 \u043D\u0430\u043F\u0443\u0441\u043A\u0430\u043D\u0435"
,3:"\u96E2\u8077\u539F\u56E0",25:"Razlog odlaska",4:"D\u016Fvod odchodu",5:"\xC5rsag til at forlade"
,0:"Reason of leaving",6:"Reden van afvoer",7:"Lahkumise p\xF5hjus",8:"Poiston syy"
,9:"Motif du d\xE9part",10:"Abgangsursache",11:"\u039B\u03CC\u03B3\u03BF\u03C2 \u03B1\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7\u03C2"
,12:"T\xE1voz\xE1s oka",13:"Motivo della partenza",15:"Iemesls aizie\u0161anai",
26:"Prie\u017Eastis i\u0161eiti",16:"Grunn til \xE5 forlate",17:"Pow\xF3d odej\u015Bcia"
,18:"Motivo da sa\xEDda",19:"Motivul plec\u0103rii",20:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u0442\u0435\u0440\u0438"
,27:"Razlog za odhod",21:"Motivo de salida",22:"Anledning till att l\xE4mna",23:
"Ayr\u0131lma nedeni",24:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0442\u0440\u0430\u0442\u0438"
};C.AUI={1:"Napunite aparat!",2:"\u0417\u0430\u0440\u0435\u0434\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E!"
,3:"\u5145\u96FB\u88DD\u7F6E\uFF01",25:"Napuni ure\u0111aj!",4:"Dobijte za\u0159\xEDzen\xED"
,5:"Oplad enhed!",0:"Recharge device!",6:"Apparaat opladen!",7:"Lae seade",8:"Lataa laite!"
,9:"Rechargez le dispositif\xA0!",10:"Bitte Ger\xE4t aufladen!",11:"\u03A6\u03BF\u03C1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE!"
,12:"T\xF6ltsd fel az eszk\xF6zt!",13:"Ricarica il dispositivo!",15:"Uzl\u0101d\u0113 ier\u012Bci!"
,26:"\u012Ekraukite \u012Frengin\u012F!",16:"Lad opp enheten",17:"Na\u0142aduj urz\u0105dzenie!"
,18:"Recarregue o dispositivo!",19:"\xCEncarc\u0103 dispozitivul!",20:"\u0417\u0430\u0440\u044F\u0434\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,27:"Ponovno napolni napravo!",21:"\xA1Recargar dispositivo!",22:"Ladda enheten!"
,23:"Cihaz\u0131 \u015Farj edin!",24:"\u0417\u0430\u0440\u044F\u0434\u0456\u0442\u044C \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439!"
};C.Bo4={1:"Zapis {1} od {2}",2:"\u0417\u0430\u043F\u0438\u0441 {1} \u043E\u0442 {2}"
,3:"\u8A18\u9304 {1} \u5171 {2} \u689D",25:"Zapis {1} od {2}",4:"Z\xE1znam {1} z {2}"
,5:"Post {1} af {2}",0:"Record {1} of {2}",6:"Opname {1} van {2}",7:"Salvesta{1} {2}st"
,8:"Enn\xE4tys {1} / {2}",9:"Enregistrement {1} de {2}",10:"Datensatz {1} von {2}"
,11:"\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE {1} \u03B1\u03C0\u03CC {2}",12:"Rekord {1} a(z) {2}-b\u0151l"
,13:"Record {1} di {2}",15:"Ieraksts {1} no {2}",26:"\u012Era\u0161as {1} i\u0161 {2}"
,16:"Registrering {1} av {2}",17:"Rekord {1} z {2}",18:"Registro {1} de {2}",19:
"\xCEnregistrarea {1} din {2}",20:"\u0417\u0430\u043F\u0438\u0441\u044C {1} \u0438\u0437 {2}"
,27:"Zapis {1} od {2}",21:"Registro {1} de {2}",22:"Post {1} av {2}",23:"Record {1} / {2}"
,24:"\u0417\u0430\u043F\u0438\u0441 {1} \u0437 {2}"};C.AGF={1:"Zabilje\u017Eene vrijednosti"
,2:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438"
,3:"\u8A18\u9304\u503C",25:"Zabilje\u017Eene vrijednosti",4:"Zaznamenan\xE9 hodnoty"
,5:"Optagede v\xE6rdier",0:"Recorded values",6:"opgenomen waardes",7:"Registreeritud v\xE4\xE4rtused"
,8:"Tallennetut arvot",9:"Valeurs enregistr\xE9es",10:"Erfasste Werte",11:"\u039A\u03B1\u03C4\u03B1\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03C4\u03B9\u03BC\u03AD\u03C2",12:"Feljegyzett \xE9rt\xE9kek",13:"Valori registrati"
,15:"Ierakst\u012Bt\u0101s v\u0113rt\u012Bbas",26:"\u012Era\u0161ytos vert\u0117s"
,16:"Registrerte verdier",17:"Zarejestrowane warto\u015Bci",18:"Valores registrados"
,19:"Valori \xEEnregistrate",20:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
,27:"Zabele\u017Eene vrednosti",21:"Valores registrados",22:"Registrerade v\xE4rden"
,23:"Kaydedilen de\u011Ferler",24:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Bo5={1:"Dodjela transpondera uspje\u0161no zavr\u0161ena!\n\nPreusmjeriti sada "+
"na ekran \'Kupljene \u017Eivotinje\'?\n\nTamo mo\u017Eete izvesti CSV datoteku "+
"za uvoz \u017Eivotinja u sistem upravljanja stadom.",2:"\u041F\u0440\u0438\u0441\u0432\u043E\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0437\u0430\u0432\u044A\u0440\u0448\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!\n\n\u041F\u0440\u0435\u043D\u0430\u0441\u043E\u0447\u0432\u0430\u043D\u0435 "+
"\u043A\u044A\u043C \u0435\u043A\u0440\u0430\u043D \u201E\u0417\u0430\u043A\u0443\u043F\u0435\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438\u201C \u0441\u0435\u0433\u0430?\n\u0422\u0430\u043C "+
"\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u0442\u0435 "+
"CSV \u0444\u0430\u0439\u043B \u0437\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430 "+
"\u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 "+"\u043D\u0430 \u0441\u0442\u0430\u0434\u043E\u0442\u043E."
,3:"\u61C9\u7B54\u5668\u5206\u914D\u6210\u529F\u5B8C\u6210\uFF01\n\u73FE\u5728\u8981\u91CD\u5B9A\u5411\u5230\u300C\u5DF2\u8CFC\u8CB7\u52D5\u7269\u300D\u756B\u9762\u55CE\uFF1F\n\u5728\u90A3\u88E1\uFF0C\u60A8\u53EF\u4EE5\u532F\u51FA "+
"CSV \u6A94\u6848\uFF0C\u4EE5\u4FBF\u5C07\u52D5\u7269\u5C0E\u5165\u7267\u7FA4\u7BA1\u7406\u7CFB\u7D71\u3002"
,25:"Dodjela transpondera uspje\u0161no zavr\u0161ena!\n\nPreusmjeriti sada "+"na zaslon \'Kupljene \u017Eivotinje\'?\nOndje mo\u017Eete izvesti CSV "+
"datoteku za uvoz \u017Eivotinja u sustav upravljanja stada.",4:"P\u0159i\u0159azen\xED transpond\xE9r\u016F \xFAsp\u011B\u0161n\u011B dokon\u010Deno!\n\nP\u0159esm\u011Brovat "+
"nyn\xED na obrazovku \'Zakoupen\xE1 zv\xED\u0159ata\'?\n\nZde m\u016F\u017Eete "+
"exportovat soubor CSV pro import zv\xED\u0159at do syst\xE9mu spr\xE1vy "+"st\xE1da."
,5:"Tildeling af transponder er afsluttet med succes!\n\nOmdiriger til sk\xE6rmen "+
"\'K\xF8bte dyr\' nu?\n\nDer kan du eksportere en CSV-fil til import af "+"dyr i bes\xE6tningsstyringssystemet."
,0:"Transponder assignment finished successfully!\n\nRedirect to screen \u2019Purchased "+
"animals\u2019 now?\n\nThere you can export a CSV file for animal import "+"into herd management system."
,6:"Transponder toewijzing succesvol afgerond!\n\nDoorverwijzen naar het scherm "+
"\'Gekochte dieren\' nu?\nDaar kunt u een CSV-bestand exporteren voor dierimport "+
"in het kuddebeheersysteem.",7:"Transponderi m\xE4\xE4ramine l\xF5petatud edukalt!\n\nSuunata n\xFC\xFCd "+
"ekraanile \"Ostetud loomad\"?\n\nSeal saate eksportida loomade importimise "+"CSV-faili karjahalduss\xFCsteemi."
,9:"Affectation du transpondeur termin\xE9e avec succ\xE8s\xA0!\nRediriger "+"maintenant vers l\'\xE9cran \'Animaux achet\xE9s\'\xA0?\nL\xE0, vous pouvez "+
"exporter un fichier CSV pour l\'importation des animaux dans le syst\xE8me "+"de gestion de troupeau."
,10:"Zuordnung beendet!\n\nJetzt auf Bildschirm \u2019Zug\xE4nge\u2019 umleiten?\n\nDort "+
"dann eine CSV-Datei f\xFCr die Zugangsmeldung bei HI-Tier oder f\xFCr "+"den Import in HERDE Mast erstellen!"
,11:"\u0397 \u03B1\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03B4\u03AD\u03BA\u03C4\u03B7-\u03C0\u03BF\u03BC\u03C0\u03BF\u03CD "+
"\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!\n\n\u0391\u03BD\u03B1\u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 "+
"\u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 \"\u0391\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03B1\" \u03C4\u03CE\u03C1\u03B1;\n\u0395\u03BA\u03B5\u03AF "+"\u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03BE\u03AC\u03B3\u03B5\u03C4\u03B5 "+
"\u03AD\u03BD\u03B1 \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03B3\u03B9\u03B1 "+
"\u03C4\u03B7\u03BD \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03B6\u03CE\u03C9\u03BD "+
"\u03C3\u03C4\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B4\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7\u03C2 "+
"\u03BA\u03BF\u03C0\u03B1\u03B4\u03B9\u03BF\u03CD.",12:"A transzponder hozz\xE1rendel\xE9s sikeresen befejez\u0151d\xF6tt!\n\n\xC1tir\xE1ny\xEDt\xE1s "+
"a \'Megv\xE1s\xE1rolt \xE1llatok\' k\xE9perny\u0151re most?\nOtt export\xE1lhat "+
"egy CSV f\xE1jlt az \xE1llatok behozatal\xE1hoz a ny\xE1jkezel\u0151 rendszerbe."
,13:"Assegnazione del transponder completata con successo!\n\nReindirizzare "+"ora alla schermata \'Animali acquistati\'?\nL\xEC puoi esportare un file "+
"CSV per l\'importazione degli animali nel sistema di gestione del gregge.",15:"Transpondera pie\u0161\u0137ir\u0161ana veiksm\u012Bgi pabeigta!\n\nVai "+
"tagad p\u0101radres\u0113t uz ekr\u0101nu \"Ieg\u0101d\u0101tie dz\u012Bvnieki\"?\nTur "+
"j\u016Bs varat eksport\u0113t CSV failu dz\u012Bvnieku import\u0113\u0161anai "+
"gan\u0101mpulka p\u0101rvald\u012Bbas sist\u0113m\u0101.",26:"Transponderio priskyrimas s\u0117kmingai baigtas!\n\nAr dabar peradresuoti "+
"\u012F ekran\u0105 \"\u012Esigyti gyv\u016Bnai\"?\n\nTen gal\u0117site "+"eksportuoti CSV fail\u0105 gyv\u016Bn\u0173 importui \u012F bandos valdymo "+
"sistem\u0105.",16:"Transponder-tildeling fullf\xF8rt med suksess!\n\nOmdiriger til skjermen "+
"\'Kj\xF8pte dyr\' n\xE5?\nDer kan du eksportere en CSV-fil for import "+"av dyr inn i besetningsstyringssystemet."
,17:"Przypisanie transpondera zako\u0144czone pomy\u015Blnie!\n\nPrzekierowa\u0107 "+
"teraz do ekranu \"Zakupione zwierz\u0119ta\"?\nTam mo\u017Cesz wyeksportowa\u0107 "+
"plik CSV do importu zwierz\u0105t do systemu zarz\u0105dzania stadem.",18:"Atribui\xE7\xE3o de transponder conclu\xEDda com sucesso!\n\nRedirecionar "+
"para a tela \'Animais comprados\' agora?\nL\xE1 voc\xEA pode exportar "+"um arquivo CSV para importa\xE7\xE3o de animais no sistema de gest\xE3o "+
"de rebanho.",19:"Alocarea transponderului a fost finalizat\u0103 cu succes!\n\nRedirec\u021Bionare "+
"c\u0103tre ecranul \'Animale achizi\u021Bionate\' acum?\nAcolo pute\u021Bi "+"exporta un fi\u0219ier CSV pentru importul animalelor \xEEn sistemul de "+
"gestionare a turmei.",20:"\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043F\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u043D\u0430 \u044D\u043A\u0440\u0430\u043D \"\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435\" \u0441\u0435\u0439\u0447\u0430\u0441?\n\u0422\u0430\u043C "+
"\u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0444\u0430\u0439\u043B CSV \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",27:"Dodelitev transponderja uspe\u0161no zaklju\u010Dena!\n\nPreusmeritev "+
"na zaslon \'Kupljene \u017Eivali\' zdaj?\nTam lahko izvozite CSV datoteko "+"za uvoz \u017Eivali v sistem za upravljanje \u010Drede."
,22:"S\xE4ndartilldelning slutf\xF6rd framg\xE5ngsrikt!\n\nOmdirigera till "+"sk\xE4rmen \u2019K\xF6pta djur\u2019 nu?\nD\xE4r kan du exportera en CSV-fil "+
"f\xF6r att importera djur till systemet f\xF6r hjordhantering.",24:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u0437\u0430\u0440\u0430\u0437 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D "+"\"\u041A\u0443\u043F\u043B\u0435\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438\"?\n\u0422\u0430\u043C "+
"\u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"\u0444\u0430\u0439\u043B CSV \u0434\u043B\u044F \u0456\u043C\u043F\u043E\u0440\u0442\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D \u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 "+
"\u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0441\u0442\u0430\u0434\u043E\u043C."
};C.Bo7={1:"registrivati",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u044A\u0440",3:
"\u767B\u9304",25:"Registrirati",4:"Registrovat",5:"Registrer",0:"Register",6:"Aanleggen"
,7:"Registreeri",8:"Rekister\xF6idy",9:"Enregistrer",10:"Anlegen",11:"\u039A\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03C4\u03B5"
,12:"Regisztr\xE1lj",13:"Registrare",15:"Re\u0123istr\u0113ties",26:"Registruoti"
,16:"Registrere",17:"Zarejestrowa\u0107",18:"Registrar",19:"\xCEnregistreaz\u0103"
,20:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,27:"Registriraj",21:"Registrar",22:"Registrera",23:"Kay\u0131t",24:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438"
};C.Bo8={1:"registrovana",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438"
,3:"\u767B\u9304",25:"Registriran",4:"Registrovan\xFD",5:"Registreret",0:"Registered"
,6:"Registreerd",7:"Registreeritud",8:"Rekister\xF6ity",9:"Enregistr\xE9",10:"Registriert"
,11:"\u0395\u03B3\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF",12:"Regisztr\xE1lt"
,13:"Registrato",15:"Re\u0123istr\u0113ts",26:"Registruotas",16:"Registrert",17:
"Zarejestrowany",18:"Registrado",19:"\xCEnregistrat",20:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D"
,27:"Registriran",21:"Registrado",22:"Registrerad",23:"Kaydedildi",24:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E"
};C.Asw={1:"Registracija \u017Eivotinje",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438",3:"\u8A3B\u518A",25:"Registracija \u017Eivotinja"
,4:"Registrace",5:"Registrering af dyr",0:"Registration of animals",6:"Dieren registreren"
,7:"Registreeri loomad",8:"Rekister\xF6inti",9:"Enregistrer d`animaux",10:"Tiere neu anlegen"
,11:"\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE",12:"\xC1llatok regisztr\xE1ci\xF3ja"
,13:"Registrazione degli animali",15:"Re\u0123istr\u0101cija dz\u012Bvniekiem",26:
"Registracija gyv\u016Bn\u0173",16:"Registrering av dyr",17:"Rejestracja zwierz\u0105t"
,18:"Registro de animais",19:"\xCEnregistrarea animalelor",20:"\u0420\u0435\u0433\u0438\u0442\u0441\u0440\u0430\u0446\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Registracija \u017Eivali",21:"Registrar animales",22:"Registrering av djur"
,23:"Kay\u0131t",24:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Bpa={1:"Ukloni sa liste pra\u0107enja",2:"\u041F\u0440\u0435\u043C\u0430\u0445\u0432\u0430\u043D\u0435 \u043E\u0442 "+
"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435"
,3:"\u5F9E\u89C0\u5BDF\u6E05\u55AE\u4E2D\u79FB\u9664",25:"Ukloni s popisa pra\u0107enja"
,4:"Odebrat ze seznamu sledov\xE1n\xED",5:"Fjern fra overv\xE5gningsliste",0:"Remove from watch list"
,6:"verwijder van Watchlist",7:"Eemalda j\xE4lgimisnimekirjast",8:"Poista el\xE4in tarkkailulistalta"
,9:"Supprimer l\'animal de la liste de suivi",10:"Tier von Beobachtungs~liste entfernen"
,11:"\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03B1\u03C0\u03CC "+
"\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2"
,12:"Elt\xE1vol\xEDt\xE1s a megfigyel\xE9si list\xE1r\xF3l",13:"Rimuovi dalla lista di osservazione"
,15:"No\u0146emt no v\u0113ro\u0161anas saraksta",26:"Pa\u0161alinti i\u0161 steb\u0117jimo s\u0105ra\u0161o"
,16:"Fjern fra overv\xE5kningslisten",17:"Usu\u0144 z listy obserwowanych",18:"Remover da lista de observa\xE7\xE3o"
,19:"Elimin\u0103 din lista de urm\u0103rire",20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 "+
"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",27:"Odstrani s seznama opazovanj"
,21:"Quitar de la lista de seguimiento",22:"Ta bort fr\xE5n bevakningslistan",23:
"\u0130zleme listesinden kald\u0131r",24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F"
};C.A$G={1:"Ponovite mjerenje",2:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438 \u0438\u0437\u043C."
,3:"\u91CD\u8907\u6E2C\u91CF",25:"Ponovno mjerenje",4:"Opakovan\xE9 m\u011B\u0159en\xED"
,5:"Gentag m\xE5ling",0:"Repeat measurement",6:"herhaal meting",7:"Korda hind.",
8:"Toista mittaus",9:"R\xE9p\xE9ter la mesure",10:"Messung wiederholen",11:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03AC\u03B2\u03B5\u03C4\u03B5 \u03C4\u03B7 "+
"\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7",12:"Ism\xE9telt m\xE9r\xE9s",13:"Misurazione ripetuta"
,15:"Atk\u0101rtots m\u0113r\u012Bjums",26:"Pakartotinis matavimas",16:"M\xE5l en gang til"
,17:"Ponowny pomiar",18:"Medi\xE7\xE3o repetida",19:"Repetare m\u0103surare",20:
"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435"
,27:"Ponovna meritev",21:"Volver a medir",22:"Upprepa m\xE4tning",23:"\xD6l\xE7\xFCmTekrar\u0131"
,24:"\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A$I={1:"Resetiraj niz akcija",2:"\u041D\u0443\u043B\u0438\u0440\u0430\u0439\u0442\u0435 \u0432\u0435\u0440\u0438\u0433\u0430\u0442\u0430 "+
"\u043E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",3:"\u91CD\u7F6E\u884C\u52D5\u93C8"
,25:"Ponovno postavi niz radnji",4:"Resetovat \u0159et\u011Bzec akc\xED",5:"Nulstil handlingsk\xE6de"
,0:"Reset chain of actions",6:"Reset acties",7:"Tegevuste ahela l\xE4htestamine"
,8:"Nollaa toimintaketju",9:"R\xE9initialisation de la cha\xEEne d\'actions",10:
"Reset Aktionskette",11:"\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03BB\u03C5\u03C3\u03AF\u03B4\u03B1\u03C2 "+
"\u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD",12:"Akci\xF3k sor\xE1nak \xFAjraind\xEDt\xE1sa"
,13:"Ripristina catena di azioni",15:"Atiestat\u012Bt darb\u012Bbu virkni",26:"Atstatyti veiksm\u0173 grandin\u0119"
,16:"Nullstill handlingskjeden",17:"Zresetuj ci\u0105g dzia\u0142a\u0144",18:"Redefinir cadeia de a\xE7\xF5es"
,19:"Reseta\u021Bi lan\u021Bul de ac\u021Biuni",20:"\u0421\u0431\u0440\u043E\u0441 \u0446\u0435\u043F\u043E\u0447\u043A\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439",27:"Ponastavi zaporedje dejanj"
,21:"Reiniciar cadena de acciones",22:"\xC5terst\xE4ll h\xE4ndelsekedjan",23:"Eylem zincirini s\u0131f\u0131rla"
,24:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043B\u0430\u043D\u0446\u044E\u0433 "+
"\u0434\u0456\u0439"};C.AsD={1:"Monitro resursa",2:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0438\u0442\u0435"
,3:"\u8CC7\u6E90\u76E3\u63A7\u5668",25:"Nadzor resursa",4:"Sledov\xE1n\xED zdroje"
,5:"Ressourceoverv\xE5gning",0:"Resource monitor",7:"Vahendite j\xE4lgimine",8:"Resurssien valvonta"
,9:"Suivi des ressources",10:"Ressourcenmonitor",11:"\u03A0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7 "+
"\u03C0\u03CC\u03C1\u03C9\u03BD",12:"Er\u0151forr\xE1s-figyel\u0151",13:"Monitor delle risorse"
,15:"Resursu monitors",26:"I\u0161tekli\u0173 monitorius",16:"Ressurs overv\xE5ker"
,17:"Monitor zasob\xF3w",18:"Monitor de recursos",19:"Monitor de resurse",20:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432"
,27:"Nadzornik virov",21:"Monitor de recursos",22:"Resurs\xF6vervakare",23:"Kaynak Monit\xF6r\xFC"
,24:"\u041C\u043E\u043D\u0456\u0442\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432"
};C.A$J={2:"\u0420\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u91CD\u65B0\u555F\u52D5",25:"Ponovno pokreni",5:"Genstart",0:"Restart",6:"Nieuwstart"
,7:"Taask\xE4ivita",8:"Uudelleenk\xE4ynnistys",9:"Red\xE9marrage",10:"Neustart",
11:"\u0395\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03AF\u03B7\u03C3\u03B7",12:"\xDAjraind\xEDt\xE1s"
,13:"Riavvia",15:"Ats\u0101kt",26:"Paleiskite i\u0161 naujo",16:"Omstart",17:"Uruchom ponownie"
,18:"Reiniciar",19:"Repornire",20:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"
,27:"Ponovni zagon",21:"Reinicio",22:"Starta om",23:"Yeniden ba\u015Flat",24:"\u041F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"
};C.AGJ={1:"Vrati sigurnosnu kopiju",2:"\u0412\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438",3:"\u9084\u539F\u5099\u4EFD",25:"Vrati sigurnosnu kopiju"
,4:"Obnovit z\xE1lohu",5:"Gendan backup",0:"Restore backup",6:"Bewaar Back Up",7:
"Taasta varukoopia",8:"Palauta varmuuskopio",9:"R\xE9tablir la sauvegarde des donn\xE9es"
,10:"Datensicherung einspielen",11:"\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2",12:"Biztons\xE1gi ment\xE9s vissza\xE1ll\xEDt\xE1sa"
,13:"Ripristina backup",15:"Atjaunot rezerves kopiju",26:"Atkurti atsargin\u0119 kopij\u0105"
,16:"Gjenopprett sikkerhetskopi",17:"Przywr\xF3\u0107 kopi\u0119 zapasow\u0105",
18:"Restaurar backup",19:"Restaureaz\u0103 backup-ul",20:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E"
,27:"Obnovi varnostno kopijo",21:"Restaurar copia de seguridad",22:"\xC5terst\xE4ll s\xE4kerhetskopia"
,23:"Yede\u011Fi geri y\xFCkle",24:"\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 "+
"\u043A\u043E\u043F\u0456\u044E"};C.Bpf={1:"Obnavljanje u toku!\n\nOvaj proces mo\u017Ee trajati minutu ili du\u017Ee, "+
"molimo vas budite strpljivi!",2:"\u0412\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u0435 \u0432 \u0445\u043E\u0434!\n\n \u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0446\u0435\u0441 "+
"\u043C\u043E\u0436\u0435 \u0434\u0430 \u043E\u0442\u043D\u0435\u043C\u0435 "+"\u043C\u0438\u043D\u0443\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u0432\u0435\u0447\u0435, "+
"\u043C\u043E\u043B\u044F, \u0431\u044A\u0434\u0435\u0442\u0435 \u0442\u044A\u0440\u043F\u0435\u043B\u0438\u0432\u0438!"
,3:"\u6B63\u5728\u6062\u5FA9\u4E2D\uFF01\n\u6B64\u904E\u7A0B\u53EF\u80FD\u9700\u8981\u4E00\u5206\u9418\u6216\u66F4\u9577\u6642\u9593\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\uFF01"
,25:"Obnavljanje u tijeku!\n\nOvaj postupak mo\u017Ee trajati minutu ili du\u017Ee, "+
"molimo budite strpljivi!",4:"Obnova prob\xEDh\xE1!\n\nTento proces m\u016F\u017Ee trvat minutu nebo "+
"d\xE9le, pros\xEDm o trp\u011Blivost!",5:"Gendannelse i gang!\n\nDenne proces kan tage et minut eller l\xE6ngere, "+
"v\xE6r t\xE5lmodig!",0:"Restore in progress!\n\nThis process may take a minute or longer, please "+
"be patient!",6:"Herstel wordt uitgevoerd!\n\nDit proces kan een minuut of langer duren, "+
"wees geduldig!",7:"Taastamine k\xE4ib!\n\nSee protsess v\xF5ib v\xF5tta aega minut v\xF5i "+
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
"percig vagy tov\xE1bb tarthat, k\xE9rj\xFCk, legyen t\xFCrelemmel!",13:"Ripristino in corso!\n\nQuesto processo potrebbe richiedere un minuto "+
"o pi\xF9, per favore sii paziente!",15:"Atjauno\u0161ana notiek!\n\n\u0160is process var aiz\u0146emt min\u016Bti "+
"vai ilg\u0101k, l\u016Bdzu, esiet paciet\u012Bgi!",26:"Atk\u016Brimas vyksta!\n\n\u0160is procesas gali u\u017Etrukti minut\u0119 "+
"ar ilgiau, pra\u0161ome b\u016Bti kantriems!",16:"Gjenoppretting p\xE5g\xE5r!\n\nDenne prosessen kan ta et minutt eller "+
"lenger, v\xE6r t\xE5lmodig!",17:"Przywracanie w toku!\n\nTen proces mo\u017Ce zaj\u0105\u0107 minut\u0119 "+
"lub d\u0142u\u017Cej, prosz\u0119 o cierpliwo\u015B\u0107!",18:"Restaura\xE7\xE3o em andamento!\n\nEste processo pode levar um minuto "+
"ou mais, por favor, tenha paci\xEAncia!",19:"Restaurare \xEEn curs!\n\nAcest proces poate dura un minut sau mai mult, "+
"v\u0103 rug\u0103m s\u0103 ave\u021Bi r\u0103bdare!",20:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 "+
"\u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435!\n\n\u042D\u0442\u043E\u0442 "+
"\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u0435\u0442 "+"\u0437\u0430\u043D\u044F\u0442\u044C \u043C\u0438\u043D\u0443\u0442\u0443 "+
"\u0438\u043B\u0438 \u0434\u043E\u043B\u044C\u0448\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0431\u0443\u0434\u044C\u0442\u0435 \u0442\u0435\u0440\u043F\u0435\u043B\u0438\u0432\u044B!"
,27:"Obnova v teku!\n\nTa postopek lahko traja minuto ali dlje, prosimo za "+"potrpljenje!"
,21:"Restauraci\xF3n en progreso.\n\n\xA1Este proceso puede llevar un minuto "+"o m\xE1s, por favor, ten paciencia!"
,22:"\xC5terst\xE4llning p\xE5g\xE5r!\n\nDenna process kan ta en minut eller "+"l\xE4ngre, var god ha t\xE5lamod!"
,23:"Geri y\xFCkleme i\u015Flemi s\xFCr\xFCyor!\n\nBu i\u015Flem bir dakika "+"veya daha uzun s\xFCrebilir, l\xFCtfen sab\u0131rl\u0131 olun!"
,24:"\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u0454!\n\n\u0426\u0435\u0439 "+
"\u043F\u0440\u043E\u0446\u0435\u0441 \u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 "+
"\u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0430\u0431\u043E \u0431\u0456\u043B\u044C\u0448\u0435, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!"
};C.A$N={1:"SD kartica",2:"SD \u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\u0435\u0442"
,3:"SD\u5361",25:"SD kartica",4:"SD karta",5:"SD-kort",0:"SD Card",6:"SD Kaart",
7:"SD-kaart",8:"SD Kortti",9:"Carte SD",10:"SD-Speicherkarte",11:"\u039A\u03AC\u03C1\u03C4\u03B1 SD"
,12:"SD k\xE1rtya",13:"Scheda SD",15:"SD karte",26:"SD kortel\u0117",16:"SD kort"
,17:"Karta SD",18:"Cart\xE3o SD",19:"Card SD",20:"\u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\u044F\u0442\u0438 SD"
,27:"SD kartica",21:"Tarjeta SD",22:"SD-kort",23:"SD Kart",24:"\u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\'\u044F\u0442\u0456 "+
"SD"};C.Bpn={1:"skenirati",2:"\u0421\u043A\u0430\u043D\u0438~\u0440\u0430\u043D\u0435"
,3:"\u6383\u63CF",25:"Skenirati",4:"Ske~no~vat",5:"Skan",0:"Scan",7:"Skanni",8:"Skan~naa"
,9:"Scan~ner",11:"\u0391\u03BD\u03B9\u03C7~\u03BD\u03B5\u03CD\u03C3\u03C4\u03B5"
,12:"Szkennel",13:"Scansione",15:"Sken\u0113t",26:"Skenavimas",16:"Skanning",17:
"Skanowa\u0107",18:"Escanear",19:"Scanare",20:"\u0421\u043A\u0430\u043D\u0438~\u0440\u043E~\u0432\u0430\u043D\u0438\u0435"
,27:"Skeniraj",21:"Esca~neo",22:"Skanna",23:"Tara",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F"
};C.Bpo={1:"Skenirajte ID \u017Eivotinje",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439\u0442\u0435 ID \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E",3:"\u6383\u63CF\u52D5\u7269\u7684ID"
,25:"Skenirajte ID \u017Eivotinje",4:"Skenovat ID zv\xED\u0159ete",5:"Scan ID af dyr"
,0:"Scan ID of animal",6:"Scan dier ID",7:"Looma ID skannimine",8:"Skannaa el\xE4imen tunnus"
,9:"Scanner le n\xB0 d\'identification",10:"Ohrmarkennr. einscannen",11:"\u03A3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"\u03B6\u03CE\u03BF\u03C5",12:"\xC1llat azonos\xEDt\xF3ja beolvas\xE1sa",13:"Scansiona l\'ID dell\'animale"
,15:"Sken\u0113t dz\u012Bvnieka ID",26:"Nuskaitykite gyv\u016Bno ID",16:"Skann ID-en til dyret"
,17:"Skanuj ID zwierz\u0119cia",18:"Escaneie o ID do animal",19:"Scaneaz\u0103 ID-ul animalului"
,20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID "+"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Skeniraj ID \u017Eivali",21:"Escanear el ID del animal",22:"Skanna ID f\xF6r djur"
,23:"Hayvan\u0131n tarama kimli\u011Fi",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Bpp={1:"Skenirajte datum ro\u0111enja, molim.",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439\u0442\u0435 \u0434\u0430\u0442\u0430\u0442\u0430 "+
"\u043D\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435, \u043C\u043E\u043B\u044F"
,3:"\u8ACB\u6383\u63CF\u51FA\u751F\u65E5\u671F",25:"Skenirajte datum ro\u0111enja, molim."
,4:"Naskenujte datum narozen\xED, pros\xEDm.",5:"Skan f\xF8dselsdato, venligst."
,0:"Scan birth date, please",6:"Scan geboortedatum, alstublieft",7:"Skanni palun s\xFCnnikuup\xE4ev"
,8:"Skannaa syntym\xE4aika, kiitos",9:"Veuillez scanner la date de naissance\xA0!"
,10:"Bitte Geburtsdatum\neinscannen!",11:"\u03A3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE."
,12:"K\xE9rj\xFCk, olvassa be a sz\xFClet\xE9si d\xE1tumot.",13:"Scansiona la data di nascita, per favore."
,15:"Sken\u0113jiet dzim\u0161anas datumu, l\u016Bdzu.",26:"Nuskenuokite gimimo dat\u0105, pra\u0161au."
,16:"Skann f\xF8dselsdato, v\xE6r s\xE5 snill.",17:"Zeskanuj dat\u0119 urodzenia, prosz\u0119."
,18:"Digitalize a data de nascimento, por favor.",19:"Scaneaz\u0103 data na\u0219terii, te rog."
,20:"\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, "+"\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430."
,27:"Preglej datum rojstva, prosim.",21:"Escanear fecha de nacimiento, por favor"
,22:"Skanna f\xF6delsedatum, tack.",23:"Do\u011Fum tarihini taray\u0131n l\xFCtfen"
,24:"\u0421\u043A\u0430\u043D\u0443\u0439\u0442\u0435 \u0434\u0430\u0442\u0443 "+
"\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430."};C.AUV={1:"Skenirajte broj markice na uhu, molim vas."
,2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439\u0442\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 \u043C\u0430\u0440\u043A\u0430, "+
"\u043C\u043E\u043B\u044F",3:"\u8ACB\u6383\u63CF\u8033\u6A19\u865F\u78BC\u3002",
25:"Skenirajte broj markice za uho, molim.",4:"Naskenujte, pros\xEDm, \u010D\xEDslo identifika\u010Dn\xEDho \u0161t\xEDtku."
,5:"Scan \xF8rem\xE6rkenummer, venligst.",0:"Scan eartag number, please",6:"Scan Oornummer, alstublieft"
,7:"Skanni palun k\xF5rvam\xE4rgi number",8:"Skannaa korvamerkin numero, kiitos"
,9:"Veuillez scanner le num\xE9ro de la boucle\xA0!",10:"Bitte Ohrmarkennummer einscannen!"
,11:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03C4\u03B7\u03C2 \u03B5\u03C4\u03B9\u03BA\u03AD\u03C4\u03B1\u03C2 \u03C4\u03BF\u03C5 "+
"\u03B1\u03C5\u03C4\u03B9\u03BF\u03CD, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE."
,12:"K\xE9rem, olvassa be a f\xFClc\xEDmke sz\xE1m\xE1t.",13:"Scansiona il numero del cartellino auricolare, per favore."
,15:"L\u016Bdzu, nosken\u0113jiet ausu birkas numuru.",26:"Nuskaitykite auskarinio numer\u012F, pra\u0161au."
,16:"Skann \xF8remerkenummeret, v\xE6r s\xE5 snill.",17:"Zeskanuj numer kolczyka, prosz\u0119."
,18:"Digitalize o n\xFAmero da etiqueta auricular, por favor.",19:"Scaneaz\u0103 num\u0103rul crotaliei, te rog."
,20:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u043D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u043C\u0435\u0442\u043A\u0438."
,27:"Skenirajte \u0161tevilko u\u0161esne znamke, prosim.",21:"Escanear n\xFAmero de etiqueta de o\xEDdo, por favor"
,22:"Skanna \xF6ronm\xE4rkesnummer, tack.",23:"Kulak etiketi numaras\u0131n\u0131 taray\u0131n, l\xFCtfen"
,24:"\u0421\u043A\u0430\u043D\u0443\u0439\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"\u0441\u0435\u0440\u0435\u0436\u043A\u0438 \u0434\u043B\u044F \u0432\u0443\u0445\u0430, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430."};C.A$O={1:"Skeniranje u\u0161ne markice"
,2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 "+
"\u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430",3:"\u6383\u63CF\u96FB\u5B50\u8033\u6A19"
,25:"Skeniraj u elektroni\u010Dku oznaku za uho",4:"Skenov\xE1n\xED elektronick\xE9ho n\xE1u\u0161n\xEDku"
,5:"Scan in elektronisk \xF8rem\xE6rke",0:"Scan in electronic\near tag",6:"Scan electronische tag"
,7:"Skanni elektrooniline\nk\xF5rvam\xE4rk",8:"Lue elektroninen\nkorvamerkki",9:
"Lecture (scan) de la boucle \xE9lectronique",10:"Elektronische Ohrmarke einscannen"
,11:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03CC\n\u03B5\u03BD\u03CE\u03C4\u03B9\u03BF"
,12:"Szkennelje be az elektronikus f\xFCljel\xF6l\u0151t",13:"Scansione in etichetta elettronica per l\'orecchio"
,15:"Sken\u0113t elektroniski ausu birku",26:"Skaityti elektronin\u0119 ausin\u0119 \u017Eym\u0119"
,16:"Skann inn elektronisk\near tag",17:"Skanuj elektroniczn\u0105 metk\u0119 w uchu"
,18:"Digitalizar em etiqueta eletr\xF4nica de ouvido",19:"Scanare electronic\u0103 a etichetei auriculare"
,20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0443\u0448\u043D\u043E\u0439 "+
"\u0431\u0438\u0440\u043A\u0438",27:"Skeniraj v elektronsko u\u0161esno oznako",
21:"Escanear en etiqueta\nauricular electr\xF3nica",22:"Skanna in elektronisk \xF6ronm\xE4rke"
,23:"Elektronik yak\u0131n etiketiyle taray\u0131n",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 "+
"\u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"};C.ScanError={
1:"gre\u0161ka pri skeniranju",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435"
,3:"\u6383\u63CF\u932F\u8AA4",25:"Gre\u0161ka pri skeniranju",4:"Chyba skenov\xE1n\xED"
,5:"Scanningsfejl",0:"Scan error",6:"Fout bij scannen",7:"Skannimise viga",8:"Skannausvirhe"
,9:"Erreur lors du scan",10:"Fehler beim Scannen",11:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B1\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7\u03C2"
,12:"Szkennel\xE9si hiba",13:"Errore di scansione",15:"Sken\u0113\u0161anas k\u013C\u016Bda"
,26:"Skaitymo klaida",16:"Feil ved skanning",17:"B\u0142\u0105d skanowania",18:"Erro de digitaliza\xE7\xE3o"
,19:"Eroare de scanare",20:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
,27:"Napaka pri skeniranju",21:"Error de escaneo",22:"Skanningsfel",23:"Hatay\u0131 tara"
,24:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F"
};C.ScanNotFound={1:"skenirano nije prona\u0111eno",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u043D\u0435 "+
"\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043E",3:"\u672A\u6383\u63CF\u5230"
,25:"Skeniranje nije prona\u0111eno",4:"Skenov\xE1n\xED nebylo nalezeno",5:"Scanning ikke fundet"
,0:"Scan not found",6:"Scan niet gevonden",7:"Skaneering pole leitav",8:"Skannausta ei l\xF6ytynyt"
,9:"Scan ne pas trouver",10:"Scan nicht gefunden",11:"\u0397 \u03B1\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7 \u03B4\u03B5\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",12:"Nincs tal\xE1lat",13:"Scansione non trovata"
,15:"Sken\u0113jums nav atrasts",26:"N\u0117ra nuskaitymo",16:"Finner ikke skanningen"
,17:"Skanowanie nie znalezione",18:"Digitaliza\xE7\xE3o n\xE3o encontrada",19:"Scanare neg\u0103sit\u0103"
,20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",27:"Skeniranje ni bilo najdeno"
,21:"Escaneo no encontrado",22:"Skanning hittades inte",23:"Tarama Bulunamad\u0131"
,24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435 "+
"\u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.AsF={1:"skeniranje broja",
2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043D\u043E\u043C\u0435\u0440"
,3:"\u6383\u63CF\u865F\u78BC",25:"Broj skeniranja",4:"Skenovat \u010D\xEDslo",5:
"Scanningsnummer",0:"Scan number",6:"Nummer scannen",7:"Skaneeringu number",8:"Skannaa numero"
,9:"Scanner le num\xE9ro",10:"Nr. einscannen",11:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C3\u03AC\u03C1\u03C9\u03C3\u03B7\u03C2"
,12:"Sz\xE1molj be",13:"Numero di scansione",15:"Sken\u0113\u0161anas numurs",26:
"Skenavimo numeris",16:"Skann nummer",17:"Numer skanowania",18:"N\xFAmero de digitaliza\xE7\xE3o"
,19:"Num\u0103r de scanare",20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u043C\u0435\u0440"
,27:"\u0160tevilka skeniranja",21:"Escanear n\xFAmero",22:"Skanningsnummer",23:"Tarama Numaras\u0131"
,24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 \u043D\u043E\u043C\u0435\u0440"
};C.O0={1:"skeniranje transpondera",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u6383\u63CF\u65B0\u7684\u611F\u61C9\u5668",25:"Skeniraj transponder",4:"Skenov\xE1n\xED transpond\xE9ru"
,5:"Skan transponderen",0:"Scan in transponder",6:"Diertransponder\ninscannen",7:
"Skanni transponderis",8:"Skannaa transponderi",9:"Scanner transpondeur",10:"Transponder einscannen"
,11:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Transzponder beolvas\xE1sa",13:"Scansiona il transponder",15:"Sken\u0113t transponder\u012B"
,26:"Nuskaityti atsakikl\u012F",16:"Skann transponder",17:"Zeskanuj transponder"
,18:"Escaneie o transponder",19:"Scaneaz\u0103 \xEEn transponder",20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,27:"Skeniraj transponder",21:"Escanear trans~pondedor del animal",22:"Skanna in transponder"
,23:"Yeni transponder tara",24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.Bpq={1:"Otkriven \u010Dita\u010D barkodova! Promijenite na ekran \'Novo\' \u2014> "+
"\'Masovno snimanje\' kako biste registrirali kupljene \u017Eivotinje?",2:"\u041E\u0442\u043A\u0440\u0438\u0442 \u0435 \u0441\u043A\u0435\u043D\u0435\u0440 "+
"\u0437\u0430 \u0431\u0430\u0440\u043A\u043E\u0434!\n\u041F\u0440\u043E\u043C\u044F\u043D\u0430 "+
"\u043D\u0430 \u0435\u043A\u0440\u0430\u043D \u201E\u041D\u043E\u0432\u043E\u201C "+
"\u2014> \u201E\u0413\u0440\u0443\u043F\u043E\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435\u201C, "+
"\u0437\u0430 \u0434\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 "+
"\u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 "+"\u0432\u0430\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438?"
,3:"\u689D\u78BC\u6383\u63CF\u5668\u5DF2\u5075\u6E2C\uFF01\n\u662F\u5426\u5207\u63DB\u5230\u300C\u65B0\u5EFA\u300D->\u300C\u6279\u91CF\u767B\u8A18\u300D\u4EE5\u767B\u8A18\u60A8\u8CFC\u8CB7\u7684\u52D5\u7269\uFF1F"
,25:"Otkriven skener barkodova! Promijenite na zaslon \'Novo\' \u2014> \'Masovno "+
"snimanje\' kako biste registrirali kupljene \u017Eivotinje?",4:"\u010Cte\u010Dka \u010D\xE1rov\xFDch k\xF3d\u016F detekov\xE1na! P\u0159epn\u011Bte "+
"na obrazovku \'Nov\xFD\' -> \'Hromadn\xE9 z\xE1znamy\' pro registraci zakoupen\xFDch "+
"zv\xED\u0159at.",5:"Stregkodescanner registreret!\nSkift til sk\xE6rmen \'Ny\' \u2014> \'Masseoptagelse\' "+
"for at registrere dine k\xF8bte dyr?",0:"Barcode scanner detected!\nChange to screen \u2019New\u2019 \u2014> \u2019Bulk "+
"recording\u2019 in order to register your purchased animals?",6:"Barcode scanner gedetecteerd! Wijzig naar scherm \'Nieuw\' \u2014> \'Bulkopname\' "+
"om uw gekochte dieren te registreren?",7:"Triipkoodi skanner tuvastatud! Muuda ekraanil \"Uus\" -> \"Hulgisalvestus\", "+
"et registreerida ostetud loomad?",9:"Le scanner de codes-barres d\xE9tect\xE9\xA0!\nChangez \xE0 l\'\xE9cran "+
"\'Nouveau\' \u2014> \'Enregistrement en masse\' pour enregistrer vos animaux "+
"achet\xE9s\xA0?",10:"Barcodescanner erkannt!\nBitte zum Bild~schirm \u2019Neu\u2019 \u2014> "+
"\u2019Massen~zugang\u2019 wechseln, dort k\xF6nnen Sie ihre zuge~kauften "+"Tiere erfassen!"
,11:"\u0395\u03BD\u03C4\u03BF\u03C0\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 \u03C3\u03B1\u03C1\u03C9\u03C4\u03AE\u03C2 "+
"\u03B3\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03BF\u03CD \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1! "+
"\u0391\u03BB\u03BB\u03AC\u03BE\u03C4\u03B5 \u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 "+
"\"\u039D\u03AD\u03BF\" -> \"\u039C\u03B1\u03B6\u03B9\u03BA\u03AE \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE\" "+
"\u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03B1 \u03B1\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 "+"\u03C3\u03B1\u03C2 \u03B6\u03CE\u03B1."
,12:"Vonalk\xF3dolvas\xF3 \xE9szlelve! V\xE1ltson a \'New\' \u2014> \'Bulk "+"recording\' k\xE9perny\u0151re az \xE1llatok regisztr\xE1l\xE1s\xE1hoz?"
,13:"Rilevatore di codici a barre rilevato! Cambiare alla schermata \"Nuovo\" "+
"\u2014> \"Registrazione in massa\" per registrare gli animali acquistati?",15:"Sv\u012Btru kodu skeneris atkl\u0101ts! Lai re\u0123istr\u0113tu ieg\u0101d\u0101tos "+
"dz\u012Bvniekus, p\u0101rejiet uz ekr\u0101nu \"Jauns\" \u2014> \"Apjoma "+"ierakst\u012B\u0161ana\"?"
,26:"Br\u016Bk\u0161nini\u0173 kod\u0173 skaitytuvas aptiktas! Pereikite \u012F "+
"ekran\u0105 \"Naujas\" \u2014> \"Didmenin\u0117 \u012Fra\u0161ymas\", "+"kad u\u017Eregistruotum\u0117te \u012Fsigytus gyv\u016Bnus."
,16:"Strekkodeskanner oppdaget! Bytt til skjermen \u2019Ny\u2019 \u2014> \u2019Masseopptak\u2019 "+
"for \xE5 registrere dine kj\xF8pte dyr.",17:"Skaner kod\xF3w kreskowych wykryty! Przejd\u017A do ekranu \"Nowy\" -> "+
"\"Rejestracja zbiorcza\", aby zarejestrowa\u0107 zakupione zwierz\u0119ta.",18:
"Leitor de c\xF3digo de barras detectado! Altere para a tela \'Novo\' \u2014> "+
"\'Registro em massa\' para registrar seus animais comprados?",19:"Scanner de coduri de bare detectat! Schimba\u021Bi la ecranul \"Nou\" "+
"\u2014> \"\xCEnregistrare \xEEn mas\u0103\" pentru a \xEEnregistra animalele "+
"achizi\u021Bionate?",20:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0430 "+
"\u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D! \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 "+
"\u043D\u0430 \u044D\u043A\u0440\u0430\u043D \"\u041D\u043E\u0432\u044B\u0439\" "+
"\u2014> \"\u041C\u0430\u0441\u0441\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C\", "+
"\u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0432\u0430\u0448\u0438\u0445 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445.",27:"\u010Citalnik \u010Drtne kode zaznan! \nZa registracijo kupljenih \u017Eivali "+
"preklopite na zaslon \"Novo\" \u2014> \"Mno\u017Ei\u010Dno bele\u017Eenje\"?",22:
"Streckkodsl\xE4sare uppt\xE4ckt! Byt till sk\xE4rmen \'Ny\' \u2014> \'Massregistrering\' "+
"f\xF6r att registrera dina k\xF6pta djur?",24:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0456\u0432 "+
"\u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E!\n\u041F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C "+
"\u043D\u0430 \u0435\u043A\u0440\u0430\u043D \"\u041D\u043E\u0432\u0438\u0439\" "+
"\u2014> \"\u041C\u0430\u0441\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441\", "+
"\u0449\u043E\u0431 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u0432\u0430\u0448\u0456 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0456 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0438?"
};C.Bpr={1:"Skenir ure\u0111aj uklonjen!\n\nPreusmjeriti na ekran za dodjeljivanje?\n\nTamo "+
"mo\u017Eete dodijeliti transpondere va\u0161im kupljenim \u017Eivotinjama.",2:"\u0421\u043A\u0435\u043D\u0435\u0440\u044A\u0442 \u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442!\n\n\u041F\u0440\u0435\u043D\u0430\u0441\u043E\u0447\u0432\u0430\u043D\u0435 "+
"\u043A\u044A\u043C \u0435\u043A\u0440\u0430\u043D\u0430 \u0437\u0430 \u043F\u0440\u0438~\u0441\u0432\u043E\u044F\u0432~\u0430\u043D\u0435?\n\u041A\u044A\u0434\u0435\u0442\u043E "+
"\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u0435 "+
"\u0440\u0435\u0441~\u043F\u043E\u043D\u0434\u0435\u0440\u0438 \u043D\u0430 "+"\u0437\u0430\u043A\u0443\u043F\u0435\u043D\u0438\u0442\u0435 \u043E\u0442 "+
"\u0432\u0430\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438.",3:"\u6383\u63CF\u5668\u5DF2\u79FB\u9664\uFF01\n\u662F\u5426\u8DF3\u8F49\u81F3\u5206\u914D\u756B\u9762\uFF1F\n\u5728\u90A3\u88E1\uFF0C\u60A8\u53EF\u4EE5\u5C07\u61C9\u7B54\u5668\u5206\u914D\u7D66\u60A8\u8CFC\u8CB7\u7684\u52D5\u7269\u3002"
,25:"Skenir ure\u0111aj uklonjen!\n\nPreusmjeriti na ekran za dodjelu?\nTamo "+"mo\u017Eete dodijeliti oda\u0161ilja\u010De va\u0161im kupljenim \u017Eivotinjama."
,4:"Skenov\xE1n\xED odstran\u011Bno!\n\nP\u0159esm\u011Brovat na obrazovku "+"\xFAkol\u016F?\nTam m\u016F\u017Eete p\u0159i\u0159azovat odpov\xEDda\u010De "+
"ke koupen\xFDm zv\xED\u0159at\u016Fm.",5:"Scanner fjernet!\n\nOmdiriger til opgavesk\xE6rmen?\nDer kan du tildele "+
"transpondere til dine k\xF8bte dyr.",0:"Scanner removed!\n\nRedirect to as~sign~ment screen?\nThere you can assign "+
"trans~ponders to your purchased animals.",6:"Scanner verwijderd!\n\nDoorverwijzen naar het toewijzingsscherm?\nDaar "+
"kunt u transponders toewijzen aan uw gekochte dieren.",7:"Skanner eemaldatud!\n\nSuunata \xFClesannete ekraanile?\nSeal saate oma "+
"ostetud loomadele transpondereid m\xE4\xE4rata.",9:"Scanner retir\xE9\xA0!\n\nRediriger vers l\'\xE9cran des affectations\xA0?\n\nL\xE0, "+
"vous pouvez attribuer des transpondeurs \xE0 vos animaux achet\xE9s.",10:"Scanner entfernt!\n\nJetzt zum Zuordnungs~bild~schirm umleiten?\nDort "+
"k\xF6nnen Sie ihren zugekauften Tieren Transpon~der zuweisen.",11:"\u039F \u03C3\u03B1\u03C1\u03C9\u03C4\u03AE\u03C2 \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5!\n\n\u0391\u03BD\u03B1\u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 "+
"\u03C3\u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7 \u03B1\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7\u03C2;\n\u0395\u03BA\u03B5\u03AF "+
"\u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03B1\u03BD\u03B1\u03B8\u03AD\u03C3\u03B5\u03C4\u03B5 "+
"\u03B4\u03B9\u03B1\u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AC \u03C3\u03C4\u03B1 "+
"\u03B1\u03B3\u03BF\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03B1 \u03C3\u03B1\u03C2 "+
"\u03B6\u03CE\u03B1.",12:"Szkennel\u0151 elt\xE1vol\xEDtva!\n\n\xC1tir\xE1ny\xEDt\xE1s a feladat "+
"k\xE9perny\u0151re?\nOtt rendelhet transzpondereket megv\xE1s\xE1rolt "+"\xE1llataihoz."
,13:"Scanner rimosso!\n\nReindirizzare alla schermata di assegnazione?\n\nL\xEC "+
"puoi assegnare i trasponder ai tuoi animali acquistati.",15:"Skeneris no\u0146emts!\n\nVai p\u0101radres\u0113t uz uzdevumu ekr\u0101nu?\nTur "+
"j\u016Bs varat pie\u0161\u0137irt atstarot\u0101jus ieg\u0101d\u0101tajiem "+"dz\u012Bvniekiem."
,26:"Skenavimo \u012Frenginys pa\u0161alintas!\n\nNukreipti \u012F u\u017Eduo\u010Di\u0173 "+
"ekran\u0105?\nTen gal\u0117site priskirti atpa\u017Einimo prietaisus \u012Fsigytiems "+
"gyv\u016Bnams.",16:"Skanner fjernet!\n\nOmdirigere til oppgaveskjerm?\nDer kan du tilordne "+
"transpondere til dine kj\xF8pte dyr.",17:"Skaner usuni\u0119ty!\n\nPrzekierowa\u0107 do ekranu przypisywania?\nTam "+
"mo\u017Cesz przypisa\u0107 transpondery do zakupionych zwierz\u0105t.",18:"Scanner removido!\n\nRedirecionar para a tela de tarefas?\nL\xE1 voc\xEA "+
"pode atribuir transponders aos seus animais comprados.",19:"Scanner eliminat!\n\nRedirec\u021Bioneaz\u0103 c\u0103tre ecranul de atribuire?\n\nAcolo "+
"po\u021Bi atribui transpondere animalelor tale achizi\u021Bionate.",20:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0443\u0434\u0430\u043B\u0451\u043D!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0437\u0430\u0434\u0430\u043D\u0438\u0439?\n\n\u0422\u0430\u043C "+
"\u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B "+"\u0432\u0430\u0448\u0438\u043C \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C.",27:"Skenirnik odstranjen!\n\nPreusmeritev na zaslon za dodeljevanje nalog?\n\nTam "+
"lahko svojim kupljenim \u017Eivalim dodelite oddajnike.",22:"Skanner borttagen!\n\nOmdirigera till uppgiftssk\xE4rmen?\nD\xE4r kan "+
"du tilldela transpondrar till dina k\xF6pta djur.",24:"\u0421\u043A\u0430\u043D\u0435\u0440 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\n\u041F\u0435\u0440\u0435\u0439\u0442\u0438 "+
"\u0434\u043E \u0435\u043A\u0440\u0430\u043D\u0443 \u0437\u0430\u0432\u0434\u0430\u043D\u044C?\n\u0422\u0430\u043C "+
"\u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438 "+"\u0432\u0430\u0448\u0438\u043C \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u043C "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C."};C.AUY={1:"tra\u017Eiti \u017Eivotinju"
,2:"\u0422\u044A\u0440\u0441\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E",3:
"\u641C\u5C0B\u5C0F\u725B",25:"Pretra\u017Ei \u017Eivotinju",4:"Vyhled\xE1n\xED zv\xED\u0159ete"
,5:"S\xF8g dyr",0:"Search animal",6:"Dier zoeken",7:"Otsi looma",8:"Etsi el\xE4in"
,9:"Rechercher un animal",10:"Tier suchen",11:"\u0391\u03BD\u03B1\u03B6\u03B7\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B6\u03CE\u03BF"
,12:"Keres\xE9s \xE1llat",13:"Cerca animale",15:"Mekl\u0113t dz\u012Bvnieku",26:
"Ie\u0161koti gyv\u016Bno",16:"S\xF8k etter dyr",17:"szukaj zwierz\u0119cia",18:
"Procurar animal",19:"Caut\u0103 animal",20:"\u041F\u043E\u0438\u0441\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Iskati \u017Eival",21:"Buscar animal",22:"S\xF6k djur",23:"Hayvan Ara",24:"\u041F\u043E\u0448\u0443\u043A \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A$S={1:"pretra\u017Eivanje ...",2:"\u0422\u044A\u0440\u0441\u0435\u043D\u0435..."
,3:"\u641C\u5C0B\u4E2D...",25:"Tra\u017Eim\u2026",4:"Prob\xEDh\xE1 vyhled\xE1v\xE1n\xED"
,5:"S\xF8ger\u2026",0:"Searching\u2026",6:"Zoeken",7:"Otsib...",8:"Etsii...",9:"Recherche..."
,10:"Suche\u2026",11:"\u0393\u03B9\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7..."
,12:"Keres\xE9s\u2026",13:"Cercando...",15:"Mekl\u0113\u0161ana\u2026",26:"Ie\u0161koma\u2026"
,16:"S\xF8ker",17:"Szukam\u2026",18:"Procurando...",19:"C\u0103utare\u2026",20:"\u041F\u043E\u0438\u0441\u043A..."
,27:"Iskanje\u2026",21:"Buscando...",22:"S\xF6ker\u2026",23:"Aran\u0131yor",24:"\u041F\u043E\u0448\u0443\u043A..."
};C.A$T={1:"odaberi \u017Eivotinju",2:"\u0418\u0437\u0431\u043E\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u9078\u64C7\u5C0F\u725B",25:"Odaberi \u017Eivotinju",4:"Vyberte zv\xED\u0159e"
,5:"V\xE6lg dyr",0:"Select animal",6:"Dier selecteren",7:"Vali loom",8:"Valitse el\xE4in"
,9:"S\xE9lectionnez l\u2019animal",10:"Tier ausw\xE4hlen",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B6\u03CE\u03BF"
,12:"V\xE1lassz \xE1llatot",13:"Seleziona animale",15:"Izv\u0113l\u0113ties dz\u012Bvnieku"
,26:"Pasirinkti gyv\u016Bn\u0105",16:"Velg dyr",17:"Wybierz zwierz\u0119",18:"Selecionar animal"
,19:"Selecteaz\u0103 animalul",20:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"Izberite \u017Eival",21:"Seleccionar animal",22:"V\xE4lj djur",23:"Hayvan Se\xE7in"
,24:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.A$U={1:"odaberi majku",2:"\u0418\u0437\u0431\u043E\u0440 \u043D\u0430 \u043C\u0430\u0439\u043A\u0430"
,3:"\u9078\u64C7\u6C34\u58E9",25:"Izaberi branu",4:"Vyberte p\u0159ehradu",5:"V\xE6lg d\xE6mning"
,0:"Select dam",6:"Selecteer Moederdier",7:"Vali ema",8:"Valitse em\xE4",9:"S\xE9lectionner la m\xE8re"
,10:"Muttertier ausw\xE4hlen",11:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03BC\u03B7\u03C4\u03AD\u03C1\u03B1"
,12:"V\xE1lassz g\xE1tat",13:"Seleziona diga",15:"Izv\u0113l\u0113ties dambi",26:
"Pasirinkti u\u017Etvank\u0105",16:"Mordyr",17:"Wybierz tam\u0119",18:"Selecionar barragem"
,19:"Alege baraj",20:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435",27:"Izberi jez",21:"Seleccionar madre"
,22:"V\xE4lj dam",23:"Anne Hayvan Se\xE7in",24:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443"};C.AhM={1:"Serijski broj",2:"\u0421\u0435\u0440\u0438\u0435\u043D \u043D\u043E\u043C\u0435\u0440"
,3:"\u5E8F\u865F",25:"Serijski broj",4:"S\xE9riov\xE9 \u010D\xEDslo",5:"Serienummer"
,0:"Serial number",6:"Serienummer",7:"Seerianumber",8:"Sarjanumero",9:"Num\xE9ro de s\xE9rie"
,10:"Seriennummer",11:"\u03A3\u03B5\u03B9\u03C1\u03B9\u03B1\u03BA\u03CC\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2"
,12:"Sorozatsz\xE1m",13:"Numero di serie",15:"S\u0113rijas numurs",26:"Serijos numeris"
,16:"Serienummer",17:"Numer seryjny",18:"N\xFAmero de s\xE9rie",19:"Num\u0103r de serie"
,20:"\u0421\u0435\u0440\u0438\u0439\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440"
,27:"Serijska \u0161tevilka",21:"N\xFAmero serial",22:"Serienummer",23:"Seri Numaras\u0131"
,24:"\u0421\u0435\u0440\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440"
};C.AGT={1:"servis",2:"\u0421\u0435\u0440\u0432\u0438\u0437",3:"\u670D\u52D9",25:
"Usluga",4:"Slu\u017Eba",0:"Service",7:"Seadme hooldus",8:"Huolto",11:"\u03A3\u03C5\u03BD\u03C4\u03AE\u03C1\u03B7\u03C3\u03B7"
,12:"Szolg\xE1ltat\xE1s",13:"Servizio",15:"Pakalpojums",26:"Paslauga",17:"Us\u0142uga"
,18:"Servi\xE7o",19:"Serviciu",20:"\u0421\u0435\u0440\u0432\u0438\u0441",27:"Storitev"
,21:"Servicio",22:"Tj\xE4nst",23:"Servis",24:"\u0421\u0435\u0440\u0432\u0456\u0441"
};C.AkW={1:"postaviti filtere",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439 \u0444\u0438\u043B\u0442\u044A\u0440"
,3:"\u8A2D\u7F6E\u904E\u6FFE\u5668",25:"Postavi filter",4:"Nastavte filtr",5:"S\xE6t filter"
,0:"Set filter",6:"Filter zetten",7:"M\xE4\xE4ra filter",8:"Aseta suodatin",9:"D\xE9finir le filtre"
,10:"Filter setzen",11:"\u039A\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C6\u03AF\u03BB\u03C4\u03C1\u03BF\u03C5"
,12:"Sz\u0171r\u0151 be\xE1ll\xEDt\xE1sa",13:"Imposta filtro",15:"Iestat\u012Bt filtru"
,26:"Nustatyti filtr\u0105",16:"Sett filter",17:"Ustaw filtr",18:"Definir filtro"
,19:"Seta\u021Bi filtrul",20:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440"
,27:"Nastavi filter",21:"Fijar filtro",22:"St\xE4ll in filter",23:"Filtreyi ayarla"
,24:"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440"
};C.Settings={1:"postavke",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
,3:"\u8A2D\u5B9A\u503C",25:"Postavke",4:"Nastaven\xED",5:"Indstillinger",0:"Settings"
,6:"Instellingen",7:"Seaded",8:"Asetukset",9:"R\xE9glages",10:"Einstellungen",11:
"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",12:"Be\xE1ll\xEDt\xE1sok"
,13:"Impostazioni",15:"Iestat\u012Bjumi",26:"Nustatymai",16:"Innstillinger",17:"Ustawienia"
,18:"Configura\xE7\xF5es",19:"Set\u0103ri",20:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
,27:"Nastavitve",21:"Ajustes",22:"Inst\xE4llningar",23:"Ayarlar",24:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443~\u0432\u0430\u043D\u043D\u044F"
};C.SevereError={1:"Gre\u0161ka na serveru: {1}",2:"\u0421\u0435\u0440\u0438\u043E\u0437\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430: "+
"{1}",3:"\u56B4\u91CD\u932F\u8AA4\uFF1A{1}",25:"Te\u0161ka gre\u0161ka: {1}",4:"Z\xE1va\u017En\xE1 chyba"
,5:"Alvorlig fejl: {1}",0:"Severe error: {1}",6:"Zwaar wegende fout: {1}",7:"Ohtlik viga: {1}"
,8:"Vakava virhe: {1}",9:"Erreur grave\xA0: {1}",10:"Schwer~wiegender Fehler: {1}"
,11:"\u03A3\u03BF\u03B2\u03B1\u03C1\u03CC \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1: "+
"{1}",12:"S\xFAlyos hiba: {1}",13:"Errore grave: {1}",15:"Smags k\u013C\u016Bda: {1}"
,26:"Sunki klaida: {1}",16:"Alvorlig feil: {1}",17:"Powa\u017Cny b\u0142\u0105d: {1}"
,18:"Erro grave: {1}",19:"Eroare grav\u0103: {1}",20:"\u0421\u0435\u0440\u044A\u0451\u0437\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430: "+
"{1}",27:"Huda napaka: {1}",21:"Error grave: {1}",22:"Allvarligt fel: {1}",23:"Ciddi hata"
,24:"\u0421\u0435\u0440\u0439\u043E\u0437\u043D\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430: "+
"{1}"};C.Aft={1:"Spol",2:"\u041F\u043E\u043B",3:"\u6027\u5225",25:"Spol",4:"Rod"
,5:"Seks",0:"Sex",6:"Ge~slacht",7:"Sugu",8:"Suku~puoli",9:"Sexe",10:"Ge~schlecht"
,11:"\u03A6\u03CD\u03BB\u03BF",12:"Szex",13:"Sesso",15:"Sekss",26:"Lytis",16:"Kj\xF8nn"
,17:"P\u0142e\u0107",18:"Sexo",20:"\u041F\u043E\u043B",27:"Spol",21:"Sexo",23:"Cins~iyet"
,24:"\u0421\u0442\u0430\u0442\u044C"};C.A$Z={1:"Spol",2:"\u041F\u043E\u043B",3:"\u6027\u5225"
,25:"Spol",4:"Rod",5:"Seks",0:"Sex",6:"Ge~slacht",7:"Sugu",8:"Suku~puoli",9:"Sexe"
,10:"Ge~schl.",11:"\u03A6\u03CD\u03BB\u03BF",12:"Szex",13:"Sesso",15:"Sekss",26:
"Lytis",16:"Kj\xF8nn",17:"P\u0142e\u0107",18:"Sexo",20:"\u041F\u043E\u043B",27:"Spol"
,21:"Sexo",23:"Cins~iyet",24:"\u0421\u0442\u0430\u0442\u044C"};C.BpG={1:"Ovca/koza"
,2:"\u041E\u0432\u0446\u0430/\u043A\u043E\u0437\u0430",3:"\u7F8A",25:"Ovca/koza"
,4:"ovce/koza",5:"F\xE5r/ged",0:"Sheep/goat",6:"Schaap/Geit",7:"Lammas/kits",8:"Lammas/vuohi"
,9:"Mouton/Ch\xE8vre",10:"Schaf/Ziege",11:"\u03A0\u03C1\u03CC\u03B2\u03B1\u03C4\u03BF/\u03BA\u03B1\u03C4\u03C3\u03AF\u03BA\u03B9"
,12:"juh/kecske",13:"Pecora/capra",15:"Auns/kaza",26:"Avis / O\u017Eka",16:"Sau/geit"
,17:"Owca/koza",18:"Ovelha/cabra",19:"oaie/capr\u0103",20:"\u041E\u0432\u0446\u0430/\u043A\u043E\u0437\u0430"
,27:"ovca/koza",21:"Oveja/cabra",22:"F\xE5r/get",23:"Koyun/Ke\xE7i",24:"\u0412\u0456\u0432\u0446\u044F/\u043A\u043E\u0437\u0430"
};C.A$2={1:"Isklju\u010Diti",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435"
,3:"\u95DC\u9589",25:"Ugasi",4:"Vypnout",5:"Luk ned",0:"Shut down",6:"Uit schakelen"
,7:"L\xFClita v\xE4lja",8:"Sulje laite",9:"\xC9teindre",10:"Ausschalten",11:"\u03A3\u03B2\u03AE\u03C3\u03B9\u03BC\u03BF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,12:"Le\xE1ll\xEDt",13:"Spegni",15:"Izsl\u0113gt",26:"I\u0161junkite",16:"Skru av"
,17:"Wy\u0142\u0105cz",18:"Desligar",19:"\xCEnchide\u021Bi",20:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C"
,27:"Ugasni",21:"Apagar",22:"St\xE4ng av",23:"Kapat",24:"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438"
};C.A$3={1:"Isklju\u010Di ure\u0111aj nakon",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0441\u043B\u0435\u0434",3:"\u95DC\u6A5F\u5F8C",25:"Isklju\u010Di ure\u0111aj nakon"
,4:"Vypnout za\u0159\xEDzen\xED po",5:"Sluk enheden efter",0:"Shutdown device after"
,6:"Zet uit na",7:"L\xFClita seade v\xE4lja p\xE4rast",8:"Sammuta laite t\xE4m\xE4n j\xE4lkeen"
,9:"\xC9teindre l\'appareil apr\xE8s",10:"Ger\xE4t abschalten nach",11:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BC\u03B5\u03C4\u03AC",12:"Kapcsolja ki az eszk\xF6zt ut\xE1na",13:"Spegni il dispositivo dopo"
,15:"Izsl\u0113gt ier\u012Bci p\u0113c",26:"I\u0161jungti \u012Frengin\u012F po"
,16:"Sl\xE5 av enheten etter",17:"Wy\u0142\u0105cz urz\u0105dzenie po",18:"Desligue o dispositivo depois"
,19:"\xCEnchide dispozitivul dup\u0103",20:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E "+
"\u043F\u043E\u0441\u043B\u0435",27:"Izklopi napravo po",21:"Apagar el dispositivo despu\xE9s de"
,22:"St\xE4ng av enheten efter",23:"Sonras\u0131nda Ayg\u0131t\u0131 Kapat",24:"\u0412\u0438\u043C\u043A\u043D\u0456\u0442\u044C \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 "+
"\u043F\u0456\u0441\u043B\u044F"};C.BpN={1:"Pojedina\u010Dni pogled na \u017Eivotinju"
,2:"\u0418\u0437\u0433\u043B\u0435\u0434 \u043D\u0430 \u0435\u0434\u043D\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",3:"\u55AE\u4E00\u52D5\u7269\u8996\u89D2"
,25:"Pogled na pojedina\u010Dnu \u017Eivotinju",4:"Pohled na jedno zv\xED\u0159e"
,5:"Enkelt dyrevisning",0:"Single animal view",6:"Individueel dier zicht",7:"\xDCksiku looma vaade"
,8:"Yhden el\xE4imen n\xE4kym\xE4",9:"Aper\xE7u de l\'animal individuel",10:"Einzeltieransicht"
,11:"\u039C\u03BF\u03BD\u03AE \u03B8\u03AD\u03B1 \u03B6\u03CE\u03BF\u03C5",12:"Egyetlen \xE1llat n\xE9zete"
,13:"Vista di un singolo animale",15:"Viena dz\u012Bvnieka skats",26:"Vieno gyv\u016Bno vaizdas"
,16:"Enkelt dyreutsikt",17:"Pojedynczy widok zwierz\u0119cia",18:"Vista de um \xFAnico animal"
,19:"Vedere unic\u0103 a animalului",20:"\u041E\u0434\u0438\u043D\u043E\u043A\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"Pogled na posamezno \u017Eival",21:"Vista de animal individual",22:"Enskild djurvy"
,23:"Tek hayvan g\xF6r\xFCn\xFCm\xFC",24:"\u041E\u0434\u0438\u043D\u0438\u0447\u043D\u0438\u0439 \u0432\u0438\u0434 "+
"\u043D\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"};C.BpO={1:"jedno grlo u leglu"
,2:"\u0415\u0434\u043D\u043E \u0440\u0430\u0436\u0434\u0430\u043D\u0435",3:"\u55AE\u80DE\u80CE"
,25:"Pojedina\u010Dni porod",4:"Jednotliv\xFD porod",5:"Enkeltf\xF8dsel",0:"Single birth"
,6:"Eenling",7:"\xDCksik s\xFCnd",8:"Yhden syntym\xE4",9:"Unique",10:"Einling",11:
"\u039C\u03BF\u03BD\u03AE \u03B3\u03AD\u03BD\u03BD\u03B1",12:"Egysz\xFCl\xF6tt",
13:"Nascita singola",15:"Vienreiz\u0113ja dzim\u0161ana",26:"Vienas gimimas",16:
"Enkel f\xF8dsel",17:"Pojedyncze narodziny",18:"Nascimento \xFAnico",19:"Na\u0219tere unic\u0103"
,20:"\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0435 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
,27:"Enojni porod",21:"Nac. Individual",22:"Enkel f\xF6dsel",23:"Tek do\u011Fum"
,24:"\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u0435 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A$6={1:"ESC: Nastavite bez skeniranja transpondera",2:"ESC: \u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0435\u0442\u0435 \u0431\u0435\u0437 "+
"\u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"ESC: \u7121\u6383\u63CF\u904E\u7A0B\u7E7C\u7E8C",25:"Nastavite bez skeniranja transpondera."
,4:"ESC: Pokra\u010Dujte bez skenov\xE1n\xED transpond\xE9ru.",5:"ESC: Forts\xE6t uden transponder-scanning"
,0:"ESC: Proceed without transponder scan",6:"ESC: werkt zonder transponder scan"
,7:"J\xE4tka transponderi skannimiseta",8:"ESC: Jatka ilman skannausta",9:"ESC : continuer sans scanner"
,10:"ESC: Ohne Scan~vorgang fortfahren",11:"ESC: \u03A3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03C4\u03B5 \u03C7\u03C9\u03C1\u03AF\u03C2 "+
"\u03C3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03B1"
,12:"ESC: Folytat\xE1s transzp. szkennel\xE9s n\xE9lk\xFCl",13:"ESC: Procedere senza scansione del transponder."
,15:"ESC: Turpin\u0101t bez transpondera sken\u0113\u0161anas",26:"ESC: T\u0119sti be transponderio skenavimo"
,16:"ESC: Fortsett uten transponder-skanning",17:"ESC: Kontynuuj bez skanowania transpondera"
,18:"Prossiga sem a varredura do transponder",19:"ESC: Continua\u021Bi f\u0103r\u0103 scanarea transponderului"
,20:"ESC: \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0431\u0435\u0437 "+
"\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F "+"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,27:"Nadaljuj brez skeniranja transponderja.",21:"ESC: Continuar sin escaneo",22:
"ESC: Forts\xE4tt utan transponderskanning",23:"ESC: Aktar\u0131c\u0131 taramas\u0131 yapmadan devam edin"
,24:"ESC: \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0439\u0442\u0435 "+"\u0431\u0435\u0437 \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"};C.A$7={
1:"Softver",2:"\u0421\u043E\u0444\u0442\u0443\u0435\u0440",3:"\u8EDF\u9AD4",25:"Softver"
,0:"Software",7:"Tarkvara",8:"Ohjelma",9:"Logiciel",11:"\u039B\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC"
,12:"Szoftver",15:"Programmat\u016Bra",26:"Programin\u0117 \u012Franga",16:"Programvare"
,17:"Oprogramowanie",20:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435"
,27:"Programska oprema",22:"Programvara",23:"Yaz\u0131l\u0131m",24:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F"
};C.A$8={1:"prodato za dalji uzgoj",2:"\u041F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E \u0437\u0430 \u0440\u0430\u0437\u043F\u043B\u043E\u0434"
,3:"\u7528\u65BC\u7E41\u6B96\u7684\u5DF2\u552E\u51FA",25:"Prodano za uzgoj",4:"Prod\xE1no pro chov"
,5:"Solgt til avl",0:"Sold for breeding",6:"Verkocht voor fokkerij",7:"M\xFC\xFCdud aretuseks"
,8:"Myyd\xE4\xE4n jalostukseen",9:"Vendu pour la reproduction",10:"Verkauf zur Zucht"
,11:"\u03A0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B3\u03B9\u03B1 \u03B1\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE"
,12:"Eladva teny\xE9szt\xE9sre",13:"Venduto per la riproduzione",15:"P\u0101rdots audz\u0113\u0161anai"
,26:"Parduotas veisimui",16:"Solgt til avl",17:"Sprzedany do hodowli",18:"Vendido para reprodu\xE7\xE3o"
,19:"V\xE2ndut pentru reproducere",20:"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F"
,27:"Prodano za vzrejo",21:"Vendido para cr\xEDa",22:"S\xE5ld f\xF6r avel",23:"Yeti\u015Ftirilmek \xFCzere sat\u0131l\u0131yor"
,24:"\u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u043B\u044F \u0440\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F"
};C.AG7={1:"pasmina",2:"\u0412\u0438\u0434\u043E\u0432\u0435",3:"\u7269\u7A2E",25:
"Vrste",4:"Druh",5:"Arter",0:"Species",6:"soorten",7:"Liik",8:"Laji",9:"Esp\xE8ces"
,10:"Tierart",11:"\u0395\u03AF\u03B4\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5",12:"Fajok"
,13:"Specie",15:"Sugas",26:"R\u016B\u0161is",16:"Arter",17:"Gatunek",18:"Esp\xE9cies"
,19:"Specii",20:"\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,27:"Vrsta",21:"Especie",22:"Arter",23:"T\xFCrler",24:"\u0412\u0438\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A$9={1:"pokrenuti",2:"\u0421\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u555F\u52D5",25:"Pokretanje",4:"Uveden\xED do provozu",5:"Ibrugtagning",0:"Start-up"
,6:"Inbedrijfname",7:"K\xE4ivitub",8:"Aloittaa",9:"Mise en route",10:"Inbetriebnahme"
,11:"\u0395\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7",12:"\xDCzembe helyez\xE9s"
,13:"Messa in servizio",15:"Nodo\u0161ana ekspluat\u0101cij\u0101",26:"Start-upas"
,16:"Start opp",17:"Uruchomienie",18:"Comissionamento",19:"Punerea \xEEn func\u021Biune"
,20:"\u0412\u0432\u043E\u0434 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E"
,27:"Zagon",21:"Puesta en marcha",22:"Drifts\xE4ttning",23:"Ba\u015Flatma",24:"\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044E"
};C.A$_={1:"Po\u010Detni ekran",2:"Start- up \u0435\u043A\u0440\u0430\u043D",3:"\u555F\u52D5\u756B\u9762"
,25:"Po\u010Detni zaslon",4:"\xDAvodn\xED obrazovka",5:"Startsk\xE6rm",0:"Start-up screen "
,6:"scherm opstarten",7:"K\xE4ivitusekraan",8:"Aloitusn\xE4ytt\xF6",9:"\xC9cran d\'accueil"
,10:"Startbildschirm",11:"\u039F\u03B8\u03CC\u03BD\u03B7 \u03B5\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Ind\xEDt\xF3 k\xE9perny\u0151",13:"Schermata iniziale",15:"S\u0101kuma ekr\u0101ns"
,26:"Prad\u017Eios ekranas",16:"Oppstartsskjerm",17:"Ekran startowy",18:"Tela inicial"
,19:"Ecran de pornire",20:"\u042D\u043A\u0440\u0430\u043D \u0437\u0430\u043F\u0443\u0441\u043A\u0430"
,27:"Za\u010Detni zaslon",21:"Pantalla de inicio",22:"Startsk\xE4rm",23:"Ba\u015Flatma Ekran\u0131"
,24:"\u0415\u043A\u0440\u0430\u043D \u0437\u0430\u043F\u0443\u0441\u043A\u0443"};
C.EN={1:"Dr\u017Eava",2:"\u0421\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,3:"\u5DDE",25:"Dr\u017Eava",4:"St\xE1t",5:"Stat",0:"State",6:"Provincie",7:"Olek"
,8:"Tila",9:"\xC9tat",10:"Bundesland",11:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7"
,12:"\xC1llam",13:"Stato",15:"Valsts",26:"Valstyb\u0117",16:"Tilstand",17:"Stan"
,18:"Estado",19:"Stat",20:"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F "+
"\u0437\u0435\u043C\u043B\u044F",27:"dr\u017Eava",21:"Estado",22:"Stat",23:"Durum"
,24:"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0435\u043C\u043B\u044F"
};C.SZ={1:"Status baterije",2:"\u0421\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u5145\u96FB\u72C0\u614B",25:"Stanje punjenja",4:"Stav nab\xEDjen\xED",5:"Tilstand af opladning"
,0:"State of charge",6:"Batterijstatus",7:"Aku tase",8:"Lataustila",9:"Niveau de charge\nde la batterie"
,10:"Ladezustand Batterie",11:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2"
,12:"T\xF6lt\xF6tts\xE9gi szint",13:"Stato di carica",15:"L\u0101d\u0113\u0161anas st\u0101voklis"
,26:"\u012Ekrovos b\u016Bsena",16:"Ladnings tilstand",17:"Stan na\u0142adowania"
,18:"Estado de carga",19:"Starea de \xEEnc\u0103rcare",20:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u0430 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0438",27:"Stanje napolnjenosti",21:"Estado de carga de la bater\xEDa"
,22:"Laddningstillst\xE5nd",23:"\u015Earz Durumu",24:"\u0421\u0442\u0430\u043D \u0437\u0430\u0440\u044F\u0434\u0443 \u0431\u0430\u0442\u0430\u0440\u0435\u0457"
};C.AG9={1:"status",2:"\u0421\u0442\u0430\u0442\u0443\u0441",3:"\u72C0\u614B",4:
"Stav",0:"Status",7:"Seisund",8:"Tila",9:"Statut",11:"\u0398\u03AD\u03C3\u03B7",
12:"\xC1llapot",13:"Stato",15:"Statuss",26:"Statusas",18:"Estado",19:"Stare",20:
"\u0421\u0442\u0430\u0442\u0443\u0441",21:"Estado",23:"Durum",24:"\u0421\u0442\u0430\u0442\u0443\u0441"
};C.BpY={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no dodana na spisak \u017Eivotinja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0435 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u043E \u043A\u044A\u043C "+"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0441 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"ID\u70BA{1}\u725B\u96BB\u5DF2\u6210\u529F\u7684\u52A0\u5230\u8B66\u544A\u540D\u55AE\u4E2D\uFF01"
,25:"\u017Divotinja s ID-jem {1} uspje\u0161no dodana na popis alarma!",4:"Zv\xED\u0159e (ID {1}) \xFAsp\u011B\u0161n\u011B p\u0159id\xE1no do seznamu "+
"alarm\u016F",5:"Dyr med ID {1} er succesfuldt tilf\xF8jet til alarmlisten!",0:"Animal with ID {1} success~fully added to alarm list!"
,6:"Dier met ID {1} is succesvol toegevoegt aan alarmlijst!",7:"Loom ID-ga {1} on edukalt hoiatuste nimekirja lisatud!"
,8:"El\xE4in ID {1} lis\xE4tty onnistuneesti h\xE4lytyslistalle!",9:"Animal avec ID {1} ajout\xE9 \xE0 la liste d\u2019alarme avec succ\xE8s"
,10:"Tier mit ID {1} wurde erfolgreich zur Alarmliste hinzugef\xFCgt!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1. \u03C4\u03B1\u03C5\u03C4. "+
"{1} \u03C0\u03C1\u03BF\u03C3\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD"
,12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen hozz\xE1adva a riaszt\xE1si "+
"list\xE1hoz!",13:"Animale con ID {1} aggiunto con successo alla lista di allarme!"
,15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi pievienots trauksmes sarakstam!",26:
"Gyv\u016Bnas su ID {1} s\u0117kmingai prid\u0117tas \u012F pavoj\u0173 "+"s\u0105ra\u0161\u0105!"
,16:"Dyr med ID {1} ble lagt til alarm listen!",17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie dodane do listy alarmowej!"
,18:"Animal com ID {1} adicionado com sucesso \xE0 lista de alarme!",19:"Animalul cu ID-ul {1} a fost ad\u0103ugat cu succes \xEEn lista de alarm\u0103!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0442\u0440\u0435\u0432\u043E\u0433!",27:"\u017Dival z ID {1} je bila uspe\u0161no dodana na seznam alarmov!"
,21:"Se ha agregado el animal con ID {1} a la lista de alarmas con \xE9xito.",22:
"Djur med ID {1} har framg\xE5ngsrikt lagts till i larm listan!",23:"Alarm listesine ekleme ba\u015Far\u0131l\u0131"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0434\u043E\u0434\u0430\u043D\u0430 \u0443 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0442\u0440\u0438\u0432\u043E\u0433!"};C.BpZ={1:"\u017Divotinja s ID {1} uspje\u0161no dodana na listu pra\u0107enja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u0435\u043D\u043E \u043A\u044A\u043C \u0441\u043F\u0438\u0441\u044A\u043A\u0430 "+
"\u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435!",3:"\u5DF2\u6210\u529F\u5C07\u5E36\u6709 ID {1} \u7684\u52D5\u7269\u52A0\u5165\u89C0\u5BDF\u540D\u55AE\uFF01"
,25:"\u017Divotinja s ID-om {1} uspje\u0161no dodana na popis za pra\u0107enje!"
,4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B p\u0159id\xE1no na "+"sledovac\xED seznam!"
,5:"Dyr med ID {1} er succesfuldt tilf\xF8jet til overv\xE5gningslisten!",0:"Animal with ID {1} success~fully added to watch list!"
,6:"Dier met nummer {1} Succesvol toegevoegd aan Watchlist",7:"Loom ID-ga {1} on edukalt j\xE4lgimisnimekirja lisatud!"
,8:"El\xE4in, jonka tunnus on {1}, lis\xE4ttiin tarkkailulistalle!",9:"L\'animal avec l\'ID {1} a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 la liste "+
"de suivi\xA0!",10:"Tier mit der ID {1} wurde erfolgreich zur Beobachtungs~liste hinzugef\xFCgt!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 {1} \u03C0\u03C1\u03BF\u03C3\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2!"
,12:"Az {1} azonos\xEDt\xF3j\xFA \xE1llat sikeresen hozz\xE1adva a megfigyel\xE9si "+
"list\xE1hoz!",13:"Animale con ID {1} aggiunto con successo alla lista di osservazione!"
,15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi pievienots uzraudz\u012Bbas sarakstam!"
,26:"Gyv\u016Bnas su ID {1} s\u0117kmingai prid\u0117tas \u012F steb\u0117jim\u0173 "+
"s\u0105ra\u0161\u0105!",16:"Dyr med ID {1} ble vellykket lagt til overv\xE5kningslisten!"
,17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie dodane do listy obserwowanych!"
,18:"Animal com ID {1} adicionado com sucesso \xE0 lista de observa\xE7\xE3o!",19:
"Animalul cu ID-ul {1} a fost ad\u0103ugat cu succes \xEEn lista de supraveghere!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 ID {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F!",27:"\u017Dival z ID {1} je bila uspe\u0161no dodana na seznam opazovanja!"
,21:"Animal con ID {1} a\xF1adido exitosamente a la lista de seguimiento.",22:"Djur med ID {1} har lagts till i bevakningslistan!"
,23:"{1} kimlikli hayvan ba\u015Far\u0131yla izleme listesine eklendi!",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437 ID {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0434\u043E\u0434\u0430\u043D\u0430 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F!"
};C.Bp0={1:"Bootloader je uspje\u0161no a\u017Euriran.\nUSB flash disk se mo\u017Ee "+
"sigurno ukloniti.",2:"\u0411\u0443\u0443\u0442\u043B\u043E\u0443\u0434\u044A\u0440\u044A\u0442 "+
"\u0431\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.\nUSB \u0444\u043B\u0430\u0448 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u043C\u043E\u0436\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E."
,3:"\u555F\u52D5\u7A0B\u5F0F\u5DF2\u6210\u529F\u66F4\u65B0\u3002\nUSB \u96A8\u8EAB\u789F\u73FE\u5728\u53EF\u4EE5\u5B89\u5168\u79FB\u9664\u3002"
,25:"Bootloader je uspje\u0161no a\u017Euriran.\nUSB flash disk se mo\u017Ee "+"sigurno ukloniti."
,4:"Zavad\u011B\u010D byl \xFAsp\u011B\u0161n\u011B aktualizov\xE1n.\nUSB flash "+
"disk lze bezpe\u010Dn\u011B odebrat.",5:"Bootloaderen blev opdateret med succes.\nUSB-n\xF8glen kan nu fjernes sikkert."
,0:"Bootloader was updated successfully.\nUSB flash drive can be safely removed."
,6:"Bootlader is succesvol geupdate",7:"Alglaadur on edukalt uuendatud.\nUSB m\xE4lupulga v\xF5ib ohutult eemaldada."
,8:"Bootloader on p\xE4ivitetty onnistuneesti! USB-tikku voidaan irrottaa!",9:"Le bootloader a \xE9t\xE9 mis \xE0 jour avec succ\xE8s\xA0! La cl\xE9 USB "+
"peut \xEAtre retir\xE9e\xA0!",10:"Bootloader wurde erfolgreich aktualisiert! USB-Stick kann abgezogen werden!"
,11:"\u03A4\u03BF bootloader \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2.\n\u03A4\u03BF USB flash "+"drive \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03BC\u03B5 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1.",12:"A rendszerbet\xF6lt\u0151 sikeresen friss\xFClt.\nAz USB flash meghajt\xF3 "+
"biztons\xE1gosan elt\xE1vol\xEDthat\xF3.",13:"Il bootloader \xE8 stato aggiornato con successo.\nLa chiavetta USB pu\xF2 "+
"essere rimossa in sicurezza.",15:"Iel\u0101d\u0113t\u0101jprogramma ir veiksm\u012Bgi atjaunin\u0101ta.\nUSB "+
"zibatmi\u0146u var dro\u0161i no\u0146emt.",26:"U\u017Ekroviklis buvo s\u0117kmingai atnaujintas.\nUSB atmintin\u0119 "+
"galima saugiai pa\u0161alinti.",16:"Oppstartslasteren ble oppdatert med hell.\nUSB-minnepinnen kan trygt fjernes."
,17:"Program rozruchowy zosta\u0142 pomy\u015Blnie zaktualizowany.\nPendrive "+"USB mo\u017Ce by\u0107 bezpiecznie od\u0142\u0105czony."
,18:"O bootloader foi atualizado com sucesso.\nO pen drive USB pode ser removido "+
"com seguran\xE7a.",19:"Bootloader-ul a fost actualizat cu succes.\nMemoria USB poate fi scoas\u0103 "+
"\xEEn siguran\u021B\u0103.",20:"\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A \u0431\u044B\u043B "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.\nUSB\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C "+
"\u043C\u043E\u0436\u043D\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0432\u044B\u0442\u0430\u0449\u0438\u0442\u044C.",27:"Zagonski nalagalnik je bil uspe\u0161no posodobljen.\nUSB klju\u010Dek "+
"je mogo\u010De varno odstraniti.",21:"El cargador de arranque se actualiz\xF3 con \xE9xito.\nLa unidad flash "+
"USB se puede retirar de forma segura.",22:"Startprogrammet uppdaterades framg\xE5ngsrikt.\nUSB-minnet kan nu avl\xE4gsnas "+
"s\xE4kert.",23:"\xD6ny\xFCkleyici ba\u015Far\u0131yla g\xFCncellendi.\nUSB flash s\xFCr\xFCc\xFC "+
"g\xFCvenli bir \u015Fekilde kald\u0131r\u0131labilir.",24:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0447 "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E.\nUSB "+
"\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447 \u043C\u043E\u0436\u043D\u0430 "+
"\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u0442\u0438."
};C.Bp1={1:"Povezani transponder za \u017Eivotinju sa ID {1} je uspje\u0161no zamijenjen!"
,2:"\u0421\u0432\u044A\u0440\u0437\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1} \u0431\u0435\u0448\u0435 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u0437\u0430\u043C\u0435\u043D\u0435\u043D!",3:"\u5DF2\u6210\u529F\u66F4\u63DB\u7D81\u5B9A\u65BC\u52D5\u7269ID {1} \u7684\u61C9\u7B54\u5668\uFF01"
,25:"Povezani transponder za \u017Eivotinju s ID-om {1} je uspje\u0161no zamijenjen!"
,4:"P\u0159ipojen\xFD transpond\xE9r pro zv\xED\u0159e s ID {1} byl \xFAsp\u011B\u0161n\u011B "+
"vym\u011Bn\u011Bn!",5:"Transponderen forbundet til dyret med ID {1} blev succesfuldt udskiftet!"
,0:"Linked transponder for animal with ID {1} was success~fully replaced!",6:"Linked transponder voor dier met ID {1} is succes~vol teruggeplaats"
,7:"Looma ID-ga {1} seotud transponder vahetati edukalt v\xE4lja!",8:"El\xE4imelle tunnuksella {1} m\xE4\xE4ritetty transponderi on vaihdettu "+
"onnistuneesti!",9:"Le transpondeur attribu\xE9 \xE0 l\'animal avec l\'ID {1} a \xE9t\xE9 remplac\xE9 "+
"avec succ\xE8s\xA0!",10:"Der dem Tier mit der ID {1} zugeordnete Transponder wurde erfolgreich "+
"ersetzt!",11:"\u03A4\u03BF \u03C3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF "+
"\u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AD\u03B1 \u03B3\u03B9\u03B1 "+"\u03C4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B1\u03BD\u03C4\u03B9\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03AC\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!",12:"Az \xE1llat azonos\xEDt\xF3j\xE1val ({1}) t\xE1rs\xEDtott transzponder "+
"sikeresen kicser\xE9lve!",13:"Il trasponder collegato per l\'animale con ID {1} \xE8 stato sostituito "+
"con successo!",15:"Saist\u012Btais transponders dz\u012Bvniekam ar ID {1} tika veiksm\u012Bgi "+
"nomain\u012Bts!",26:"Prijungtas transponderis gyv\u016Bnui su ID {1} s\u0117kmingai pakeistas!"
,16:"Koblet transponder for dyr med ID {1} ble vellykket erstattet!",17:"Przypisany transponder dla zwierz\u0119cia o ID {1} zosta\u0142 pomy\u015Blnie "+
"wymieniony!",18:"O transponder vinculado ao animal com ID {1} foi substitu\xEDdo com sucesso!"
,19:"Transponderul conectat pentru animalul cu ID-ul {1} a fost \xEEnlocuit "+"cu succes!"
,20:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0434\u043B\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+"\u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C "+
"{1} \u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0435\u043D!"
,27:"Povezani transponder za \u017Eival z ID {1} je bil uspe\u0161no zamenjan!",
21:"\xA1El transpondedor vinculado para el animal con ID {1} fue reemplazado "+"con \xE9xito!"
,22:"Transpondern kopplad till djuret med ID {1} har framg\xE5ngsrikt ersatts!",
23:"{1} kimlikli hayvan i\xE7in ba\u011Flant\u0131l\u0131 aktar\u0131c\u0131 "+"ba\u015Far\u0131yla de\u011Fi\u015Ftirildi!"
,24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440, \u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0438\u0439 "+
"\u0437 \u0442\u0432\u0430\u0440\u0438\u043D\u043E\u044E \u0437 ID {1}, "+"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043C\u0456\u043D\u0435\u043D\u043E!"
};C.Bp2={1:"{1} obavijesti o ro\u0111enju su uspje\u0161no obra\u0111ene!",2:"{1} \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",3:"{1} \u500B\u51FA\u751F\u901A\u77E5\u5DF2\u6210\u529F\u6E05\u9664\uFF01"
,25:"{1} obavijesti o ro\u0111enju su uspje\u0161no o\u010Di\u0161\u0107ene!",4:
"{1} ozn\xE1men\xED o narozen\xED bylo \xFAsp\u011B\u0161n\u011B vy\u0159\xEDzeno!"
,5:"{1} f\xF8dselsanmeldelser blev ryddet med succes!",0:"{1} notices of birth were cleared successfully!"
,6:"{1} meldinge voor geboortes zijn succesvol geklaard",7:"{1} s\xFCnniteavitust t\xFChistatud!"
,8:"{1} Syntym\xE4ilmoitusten poistaminen onnistui!",9:"{1} D\xE9clarations de naissance ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,10:"{1} Geburts~meldungen wurden erfolg~reich gel\xF6scht!",11:"{1} \u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"{1} sz\xFClet\xE9si \xE9rtes\xEDt\xE9st sikeresen t\xF6r\xF6lt\xFCnk!"
,13:"{1} notifiche di nascita sono state cancellate con successo!",15:"{1} dzim\u0161anas pazi\u0146ojumi tika veiksm\u012Bgi apstiprin\u0101ti!"
,26:"{1} gimimo prane\u0161imai s\u0117kmingai patvirtinti!",16:"{1} F\xF8dselsmeldinger ble slettet!"
,17:"{1} zg\u0142oszenia urodzenia zosta\u0142y pomy\u015Blnie zatwierdzone!",18:
"{1} avisos de nascimento foram liberados com sucesso!",19:"{1} notific\u0103ri de na\u0219tere au fost procesate cu succes!"
,20:"{1} \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u0431\u044B\u043B\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",27:"{1} obvestil o rojstvu je bilo uspe\u0161no obdelanih!"
,21:"{1} Notificaciones de nacimiento se eliminaron con \xE9xito.",22:"{1} meddelanden om f\xF6dsel rensades framg\xE5ngsrikt!"
,23:"{1} do\u011Fum bildirimi ba\u015Far\u0131yla temizlendi!",24:"{1} \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u043B\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"};C.
Bp3={1:"{1} obavijesti o kupovini su uspje\u0161no o\u010Di\u0161\u0107ene!",2:"{1} \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",3:"{1} \u7B46\u8CFC\u8CB7\u901A\u77E5\u5DF2\u6210\u529F\u6E05\u9664\uFF01"
,25:"{1} obavijesti o kupnji su uspje\u0161no o\u010Di\u0161\u0107ene!",4:"{1} ozn\xE1men\xED o n\xE1kupu bylo \xFAsp\u011B\u0161n\u011B vy\u0159\xEDzeno!"
,5:"{1} k\xF8bsmeddelelser blev ryddet med succes!",0:"{1} notices of purchase were cleared successfully!"
,6:"{1} meldinge voor koop zijn succesvol geklaard",7:"{1} ostuteadet kustutati edukalt!"
,8:"{1} ostoilmoitusta tyhjennettiin onnistuneesti!",9:"{1} Les donn\xE9es d\'achats ont \xE9t\xE9 supprim\xE9s avec succ\xE8s\xA0!"
,10:"{1} Zugangs~meldungen wurden erfolg~reich gel\xF6scht!",11:"\u039F\u03B9 {1} \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03B5\u03BA\u03BA\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"{1} v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9st sikeresen t\xF6r\xF6lt\xFCnk!"
,13:"{1} avvisi di acquisto sono stati cancellati con successo!",15:"{1} pirkumu pazi\u0146ojumi tika veiksm\u012Bgi apstiprin\u0101ti!"
,26:"{1} pirkimo prane\u0161imai s\u0117kmingai patvirtinti!",16:"{1} kj\xF8psvarsel ble ryddet med suksess!"
,17:"{1} powiadomienia o zakupie zosta\u0142y pomy\u015Blnie zatwierdzone!",18:"{1} avisos de compra foram liberados com sucesso!"
,19:"{1} notific\u0103ri de cump\u0103rare au fost procesate cu succes!",20:"{1} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u044B\u043B\u043E "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E!"
,27:"{1} obvestil o nakupu je bilo uspe\u0161no potrjenih!",21:"\xA1{1} notificaciones de compra fueron eliminadas con \xE9xito!"
,22:"{1} k\xF6paviseringar rensades framg\xE5ngsrikt!",23:"{1} sat\u0131n alma bildirimi ba\u015Far\u0131yla temizlendi!"
,24:"{1} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C "+"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0431\u0443\u043B\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u043E!"
};C.SuccessClearAnimalLoss={1:"Obavijest o gubitku \u017Eivotinje je uspje\u0161no uklonjena!"
,2:"\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u0435\u0442\u043E \u0437\u0430 "+
"\u0437\u0430\u0433\u0443\u0431\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0431\u0435\u0448\u0435 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",3:"\u52D5\u7269\u907A\u5931\u901A\u77E5\u5DF2\u6210\u529F\u6E05\u9664\uFF01"
,25:"Obavijest o nestanku \u017Eivotinje je uspje\u0161no rije\u0161ena!",4:"Ozn\xE1men\xED o ztr\xE1t\u011B zv\xED\u0159ete bylo \xFAsp\u011B\u0161n\u011B "+
"vy\u0159\xEDzeno!",5:"Meddelelse om tab af dyr blev ryddet succesfuldt!",0:"Notice of animal loss was cleared successfully!"
,6:"Meldingen voor dierverliezen zijn succesvol",7:"Surnud looma teavitus t\xFChistatud!"
,8:"Ilmoitus el\xE4inten katoamisesta on poistettu onnistuneesti!",9:"La d\xE9claration de perte d\'animal a \xE9t\xE9 supprim\xE9e avec succ\xE8s\xA0!"
,10:"Meldung des Tierverlusts wurde erfolgreich gel\xF6scht!",11:"\u0397 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1\u03C2 "+
"\u03B6\u03CE\u03BF\u03C5 \u03BA\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!",12:"Az \xE1llat elveszt\xE9s\xE9nek bejelent\xE9se sikeresen t\xF6r\xF6lve!"
,13:"La notifica di perdita dell\'animale \xE8 stata cancellata con successo!",15:
"Pazi\u0146ojums par dz\u012Bvnieka zaud\u0113\u0161anu tika veiksm\u012Bgi "+"no\u0146emts!"
,26:"Prane\u0161imas apie gyv\u016Bno praradim\u0105 s\u0117kmingai i\u0161valytas!"
,16:"Melding om tap av dyr ble fjernet med hell!",17:"Zawiadomienie o zagini\u0119ciu zwierz\u0119cia zosta\u0142o pomy\u015Blnie "+
"wyja\u015Bnione!",18:"Aviso de perda de animal foi resolvido com sucesso!",19:"Notificarea privind pierderea animalului a fost eliminat\u0103 cu succes!"
,20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u043F\u043E\u0442\u0435\u0440\u044F\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,27:"Obvestilo o izgubi \u017Eivali je bilo uspe\u0161no po\u010Di\u0161\u010Deno!"
,21:"La notificaci\xF3n de p\xE9rdida de animal se elimin\xF3 con \xE9xito.",22:
"Meddelande om f\xF6rlorat djur har rensats framg\xE5ngsrikt!",23:"Hayvan kayb\u0131 bildirimi ba\u015Far\u0131yla temizlendi!"
,24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u0432\u0442\u0440\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bp4={1:"Obavijest o ro\u0111enju \u017Eivotinje {1} je uspje\u0161no odobrena!"
,2:"\u0421\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u0442\u043E \u0437\u0430 "+
"\u0440\u0430\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"{1} \u0431\u0435 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u043E "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u52D5\u7269 {1} \u7684\u51FA\u751F\u901A\u77E5\u5DF2\u6210\u529F\u901A\u904E\uFF01"
,25:"Obavijest o ro\u0111enju \u017Eivotinje {1} je uspje\u0161no odobrena!",4:"Ozn\xE1men\xED o narozen\xED zv\xED\u0159ete {1} bylo \xFAsp\u011B\u0161n\u011B "+
"zpracov\xE1no!",5:"Meddelelse om f\xF8dsel for dyr {1} blev ryddet med succes!"
,0:"Notice of birth for animal {1} was cleared successfully!",6:"Melding voor geboort voor dier met ID {1} is succesvol geklaard"
,7:"Looma {1} s\xFCnniteavitus t\xFChistatud!",8:"El\xE4imen {1} syntym\xE4ilmoitus poistettiin onnistuneesti!"
,9:"La d\xE9claration de naissance de l\'animal {1} a \xE9t\xE9 supprim\xE9e "+"avec succ\xE8s\xA0!"
,10:"Geburtsmeldung f\xFCr Tier {1} wurde erfolgreich gel\xF6scht!",11:"{1} \u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF "+
"\u03B6\u03CE\u03BF {1} \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Az \xE1llat {1} sz\xFClet\xE9si \xE9rtes\xEDt\xE9se sikeresen j\xF3v\xE1hagyva!"
,13:"La notifica di nascita per l\'animale {1} \xE8 stata completata con successo!"
,15:"Pazi\u0146ojums par dz\u012Bvnieka {1} dzim\u0161anu tika veiksm\u012Bgi "+
"apstiprin\u0101ts!",26:"Gyv\u016Bno {1} gimimo prane\u0161imas s\u0117kmingai patvirtintas!"
,16:"Melding om f\xF8dsel for dyr {1} ble slettet!",17:"Zg\u0142oszenie urodzenia zwierz\u0119cia {1} zosta\u0142o pomy\u015Blnie "+
"zatwierdzone!",18:"A notifica\xE7\xE3o de nascimento para o animal {1} foi conclu\xEDda com "+
"sucesso!",19:"Notificarea de na\u0219tere pentru animalul {1} a fost procesat\u0103 "+
"cu succes!",20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"{1} \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+"\u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,27:"Obvestilo o rojstvu \u017Eivali {1} je bilo uspe\u0161no potrjeno!",21:"La notificaci\xF3n de nacimiento para el animal {1} se elimin\xF3 con "+
"\xE9xito.",22:"Meddelande om f\xF6dsel f\xF6r djur {1} har godk\xE4nts framg\xE5ngsrikt!"
,23:"{1} numaral\u0131 hayvan\u0131n do\u011Fum bildirimi ba\u015Far\u0131yla "+
"onayland\u0131!",24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D {1} \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"};C.Bp5={1:"Obavijest o kupovini za \u017Eivotinju {1} je uspje\u0161no odobrena!"
,2:"\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u0435\u0442\u043E \u0437\u0430 "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"{1} \u0431\u0435 \u0438\u0437\u0447\u0438\u0441\u0442\u0435\u043D\u043E "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u8CFC\u8CB7\u52D5\u7269{1}\u7684\u901A\u77E5\u5DF2\u6210\u529F\u5B8C\u6210\uFF01"
,25:"Obavijest o kupnji \u017Eivotinje {1} uspje\u0161no je odobrena!",4:"Ozn\xE1men\xED o n\xE1kupu zv\xED\u0159ete {1} bylo \xFAsp\u011B\u0161n\u011B "+
"zpracov\xE1no!",5:"K\xF8bsmeddelelse for dyr {1} blev godkendt succesfuldt!",0:
"Notice of purchase for animal {1} was cleared successfully!",6:"Melding voor koop voor dier met ID {1} is succesvol geklaard"
,7:"Looma {1} ostuteavitus t\xFChistati edukalt!",8:"El\xE4imen {1} ostoilmoitus tyhjennettiin onnistuneesti!"
,9:"La d\xE9claration d\'achat pour l\'animal {1} a \xE9t\xE9 supprim\xE9 avec "+
"succ\xE8s\xA0!",10:"Zugangsmeldung f\xFCr Tier {1} wurde erfolgreich gel\xF6scht!"
,11:"\u0397 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03B6\u03CE\u03BF {1} \u03B5\u03BA\u03BA\u03B1\u03B8\u03B1\u03C1\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Az {1} \xE1llat v\xE1s\xE1rl\xE1s\xE1ra vonatkoz\xF3 \xE9rtes\xEDt\xE9s "+
"sikeresen lez\xE1rult!",13:"Notifica di acquisto per l\'animale {1} \xE8 stata completata con successo!"
,15:"Pazi\u0146ojums par dz\u012Bvnieka {1} pirkumu tika veiksm\u012Bgi apstiprin\u0101ts!"
,26:"Gyv\u016Bno {1} pirkimo prane\u0161imas s\u0117kmingai patvirtintas!",16:"Kj\xF8psvarsel for dyr {1} ble godkjent!"
,17:"Powiadomienie o zakupie zwierz\u0119cia {1} zosta\u0142o pomy\u015Blnie "+"zatwierdzone!"
,18:"Aviso de compra do animal {1} foi liberado com sucesso!",19:"Notificarea de achizi\u021Bie pentru animalul {1} a fost procesat\u0103 "+
"cu succes!",20:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+
"\u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"{1} \u0431\u044B\u043B\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+"\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E!"
,27:"Obvestilo o nakupu \u017Eivali {1} je bilo uspe\u0161no potrjeno!",21:"\xA1La notificaci\xF3n de compra para el animal {1} fue eliminada con "+
"\xE9xito!",22:"Meddelande om k\xF6p f\xF6r djur {1} har godk\xE4nts framg\xE5ngsrikt!"
,23:"{1} adl\u0131 hayvan\u0131n sat\u0131n alma bildirimi ba\u015Far\u0131yla "+
"onayland\u0131!",24:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043A\u0443\u043F\u0456\u0432\u043B\u044E \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"{1} \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+"\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E!"
};C.Bp6={1:"Sigurnosna kopija datoteke \'backup.vcb\' s podacima ure\u0111aja i {1} "+
"skupom podataka o \u017Eivotinjama uspje\u0161no je zapisana na USB flash "+"disk!"
,2:"\u0410\u0440\u0445\u0438\u0432\u043D\u0438\u044F\u0442 \u0444\u0430\u0439\u043B "+
"\u201Ebackup.vcb\u201C \u0441 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0438 {1}\xA0\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438~\u0432\u043E\u0442~\u043D\u0438 "+
"\u0431\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430~\u043F\u0438~\u0441\u0430\u043D "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441~\u0442~\u0440\u043E\u0439\u0441~\u0442~\u0432\u043E!"
,3:"\u5099\u4EFD\u6A94\u6848 \'backup.vcb\' \u5305\u542B\u8A2D\u5099\u6578\u64DA\u548C{1}\u500B\u52D5\u7269\u6578\u64DA\u96C6\u5DF2\u6210\u529F\u5BEB\u5165USB\u96A8\u8EAB\u789F\uFF01"
,25:"Sigurnosna kopija datoteke \'backup.vcb\' s podacima ure\u0111aja i {1}\xA0set(ovima) "+
"podataka o \u017Eivotinjama uspje\u0161no je zapisana na USB memoriju!",4:"Z\xE1lo\u017En\xED soubor \"backup.vcb\" s daty za\u0159\xEDzen\xED a {1}\xA0sadou "+
"(sadami) dat o zv\xED\u0159atech byl \xFAsp\u011B\u0161n\u011B zaps\xE1n "+"na USB flash disk!"
,5:"Sikkerhedskopifilen \'backup.vcb\' med enhedsdata og {1}\xA0datas\xE6t "+"med dyredata blev succesfuldt skrevet til USB-n\xF8gle!"
,0:"Backup file \u2019backup.vcb\u2019 with device data and {1}\xA0animal data "+
"set(s) was successfully written to USB flash drive!",6:"Het back-upbestand \'backup.vcb\' met apparaatgegevens en {1} dierendataset(s) "+
"is succesvol naar de USB-stick geschreven!",7:"Varundusfail \'backup.vcb\', mis sisaldab seadme andmeid ja{1}\xA0looma "+
"andmekomplekt(i), kirjutati edukalt USB m\xE4lupulgale!",8:"Varmuuskopiotiedosto \'backup.vcb\', jossa on laitetiedot ja {1}\xA0el\xE4intietojoukot, "+
"kirjoitettiin USB-muistitikulle onnistuneesti!",9:"Le fichier de sauvegarde \'backup.vcb\' contenant les donn\xE9es de l\'appareil "+
"et {1}\xA0les donn\xE9es des animaux~ a \xE9t\xE9 \xE9crit avec succ\xE8s "+"sur la cl\xE9 USB\xA0!"
,10:"Sicherungsdatei \u2019backup.vcb\u2019 mit Ger\xE4tedaten und {1}\xA0Tierdaten~s\xE4tzen "+
"wurde erfolg~reich auf den USB-^Stick geschrieben!",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2 \'backup.vcb\' "+"\u03BC\u03B5 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03BA\u03B1\u03B9 {1} \u03C3\u03B5\u03C4 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03B5\u03B3\u03C1\u03AC\u03C6\u03B7 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03C3\u03B5 USB flash drive!",12:"A(z) \'backup.vcb\' biztons\xE1gi ment\xE9si f\xE1jl, amely tartalmazza "+
"az eszk\xF6zadatokat \xE9s az {1} \xE1llatadat-k\xE9szlet(ek)et, sikeresen "+"ki\xEDr\xE1sra ker\xFClt az USB-s mem\xF3ri\xE1ra!"
,13:"Il file di backup \'backup.vcb\' con dati del dispositivo e {1}\xA0set "+"di dati animali \xE8 stato scritto con successo su chiavetta USB!"
,15:"Rezerves kopijas fails \"backup.vcb\" ar ier\u012Bces datiem un {1}\xA0dz\u012Bvnieku "+
"datu kopu(-\u0101m) tika veiksm\u012Bgi ierakst\u012Bts USB zibatmi\u0146\u0101!"
,26:"Atsargin\u0117 failo \u201Ebackup.vcb\u201C kopija su \u012Frenginio duomenimis "+
"ir {1} gyv\u016Bn\u0173 duomen\u0173 rinkiniu(ai) s\u0117kmingai \u012Fra\u0161yta "+
"\u012F USB atmintin\u0119!",16:"Sikkerhetskopifilen \u2019backup.vcb\u2019 med enhetsdata og {1}\xA0dyredatasett "+
"ble vellykket skrevet til USB-minnepinne!",17:"Plik kopii zapasowej \"backup.vcb\" z danymi urz\u0105dzenia i {1}\xA0zestawem "+
"danych o zwierz\u0119tach zosta\u0142 pomy\u015Blnie zapisany na pendrive\'ie "+
"USB!",18:"O arquivo de backup \'backup.vcb\' com dados do dispositivo e {1}\xA0conjunto(s) "+
"de dados de animais foi gravado com sucesso em um pendrive USB!",19:"Fi\u0219ierul de rezerv\u0103 \u2019backup.vcb\u2019 cu datele dispozitivului "+
"\u0219i setul/seturile de date ale animalelor a fost scris cu succes pe "+"memoria USB!"
,20:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F "+
"\u0444\u0430\u0439\u043B\u0430 \"backup.vcb\" \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 {1}\xA0\u043D\u0430\u0431\u043E\u0440\u043E\u043C(\u0430\u043C\u0438) "+
"\u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0430 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C!"
,27:"Varnostna kopija datoteke \'backup.vcb\' z napravami in {1}\xA0naborom "+"podatkov o \u017Eivalih je bila uspe\u0161no zapisana na USB klju\u010Dek!"
,21:"El archivo de respaldo \'backup.vcb\' con datos del dispositivo y {1}\xA0conjunto(s) "+
"de datos de animal fue escrito con \xE9xito en la unidad flash USB.",22:"S\xE4kerhetskopian \u2019backup.vcb\u2019 med enhetsdata och {1}\xA0djurdatam\xE4ngd(er) "+
"skrevs framg\xE5ngsrikt till USB-minne!",23:"Cihaz verilerini ve {1}\xA0hayvan veri k\xFCmelerini i\xE7eren \'backup.vcb\' "+
"yedekleme dosyas\u0131 ba\u015Far\u0131yla USB flash s\xFCr\xFCc\xFCye "+"yaz\u0131ld\u0131!"
,24:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0438\u0439 \u0444\u0430\u0439\u043B "+
"\'backup.vcb\' \u0437 \u0434\u0430\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0442\u0430 {1}\xA0\u043D\u0430\u0431\u043E\u0440\u043E\u043C \u0434\u0430\u043D\u0438\u0445 "+
"\u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u0432 "+"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.SuccessCreationNewAnimal={1:"Jedna \u017Eivotinja je uspje\u0161no registrovana!"
,2:"\u0415\u0434\u043D\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0448\u0435 "+
"\u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u5DF2\u6210\u529F\u5EFA\u7ACB\u4E00\u96BB\u5C0F\u725B\uFF01",25:"Jedna \u017Eivotinja je uspje\u0161no stvorena!"
,4:"Zv\xED\u0159e bylo \xFAsp\u011B\u0161n\u011B zalo\u017Eeno",5:"Et dyr blev succesfuldt skabt!"
,0:"One animal was success~fully created!",6:"Een dier is successvol opgenomen!"
,7:"Uus loom edukalt loodud!",8:"Yksi uusi el\xE4in luotiin t\xE4ysin luotu!",9:
"Un animal a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s",10:"Ein Tier wurde erfolgreich erstellt!"
,11:"\u0388\u03BD\u03B1 \u03B6\u03CE\u03BF \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Egy \xE1llat sikeresen l\xE9trehozva!"
,13:"Un animale \xE8 stato creato con successo!",15:"Viens dz\u012Bvnieks tika veiksm\u012Bgi izveidots!"
,26:"Vienas gyv\u016Bnas s\u0117kmingai sukurtas!",16:"Et dyr ble opprettet med suksess!"
,17:"Jedno zwierz\u0119 zosta\u0142o pomy\u015Blnie stworzone!",18:"Um animal foi criado com sucesso!"
,19:"Un animal a fost creat cu succes!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u043E!",27:"Ena \u017Eival je bila uspe\u0161no ustvarjena!"
,21:"Se ha creado un animal con \xE9xito.",22:"Ett djur skapades framg\xE5ngsrikt!"
,23:"Bir hayvan ba\u015Far\u0131yla~ba\u015Far\u0131yla yarat\u0131ld\u0131!",24:
"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0430!"};C.SuccessCreationNewAnimals={
1:"{1} \u017Eivotinja su uspje\u0161no registrovani.",2:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u044F\u0445\u0430 "+
"\u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"{1}\u96BB\u5C0F\u725B\u5DF2\u6210\u529F\u5EFA\u7ACB\uFF01",25:"{1} \u017Eivotinje su uspje\u0161no stvorene!"
,4:"{1} zv\xED\u0159ata byla \xFAsp\u011B\u0161n\u011B vytvo\u0159ena",5:"{1} dyr blev succesfuldt skabt!"
,0:"{1} animals were success~fully created!",6:"{1} Dieren successvol aangemaakt!"
,7:"{1} uut looma edukalt loodud",8:"{1} el\xE4int\xE4 luotiin t\xE4ysin luotu!"
,9:"{1} animaux ont \xE9t\xE9 cr\xE9\xE9s avec succ\xE8s",10:"{1} Tiere wurden erfolgreich erstellt!"
,11:"{1} \u03B6\u03CE\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"{1} \xE1llat sikeresen l\xE9trehozva!"
,13:"{1} animali sono stati creati con successo!",15:"{1} dz\u012Bvnieki tika veiksm\u012Bgi izveidoti!"
,26:"{1} gyv\u016Bnai s\u0117kmingai sukurti!",16:"{1} dyr ble opprettet med suksess"
,17:"{1} zwierz\u0119ta zosta\u0142y pomy\u015Blnie stworzone!",18:"{1} animais foram criados com sucesso!"
,19:"{1} animale au fost create cu succes!",20:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u044B!",27:"{1} \u017Eivali je bilo uspe\u0161no ustvarjenih!"
,21:"Se han creado {1} animales con \xE9xito.",22:"{1} djur skapades framg\xE5ngsrikt!"
,23:"{1} hayvan ba\u015Far\u0131yla olu\u015Fturuldu!",24:"{1} \u0442\u0432\u0430\u0440\u0438\u043D \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!"};C.SuccessDataSync={1:"POdaci su uspje\u0161no sinhronizirani sa aparatom za hranjenje!"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0430 "+
"\u0441 \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0430!",3:"\u8CC7\u6599\u5DF2\u6210\u529F\u540C\u6B65\u5230\u7D66\u98FC\u7AD9\uFF01"
,25:"Podaci uspje\u0161no sinkronizirani s dovodnikom!",4:"\xDAsp\u011B\u0161n\xE1 synchronizace dat"
,5:"Data er succesfuldt synkroniseret til feeder!",0:"Data success~fully synchronized to feeder!"
,6:"Data successvol met automaat gesynchroniseerd!",7:"Andmed edukalt s\xF6\xF6turiga s\xFCnkroniseeritud!"
,8:"Data siirto onnistui~ t\xE4ysin synkronoitu sy\xF6tt\xF6laitteeseen!",9:"Donn\xE9es synchronis\xE9es avec succ\xE8s avec le DAL"
,10:"Daten erfolgreich mit dem Automaten synchronisiert!",11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03BC\u03B5 \u03C4\u03BF "+"\u03C3\u03B9\u03C4\u03B9\u03C3\u03C4\u03AE"
,12:"Adatok sikeresen szinkroniz\xE1lva az etet\u0151h\xF6z!",13:"Dati sincronizzati con successo al dispositivo di alimentazione!"
,15:"Dati veiksm\u012Bgi sinhroniz\u0113ti ar barotavu!",26:"Duomenys s\u0117kmingai sinchronizuoti su tiek\u0117ju!"
,16:"Data er vellykket synkronisert til automat",17:"Dane zosta\u0142y pomy\u015Blnie zsynchronizowane z podajnikiem!"
,18:"Dados sincronizados com sucesso no alimentador!",19:"Datele au fost sincronizate cu succes la alimentator!"
,20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u044B "+
"\u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C",27:"Podatki uspe\u0161no sinhronizirani z napajalnikom!"
,21:"Se han sincronizado los datos con \xE9xito con el alimentador.",22:"Data framg\xE5ngsrikt synkroniserad till mataren!"
,23:"Besleyiciyle bilgi senkronizasyonu ba\u015Far\u0131yla yap\u0131ld\u0131!",
24:"\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043E "+
"\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"};C.Bp7={1:"\u017Divotinja sa ID brojm {1} uspje\u0161no zasu\u0161ena!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u043E \u043A\u0430\u0442\u043E "+
"\u043F\u0440\u0435\u0441\u0443\u0448\u0435\u043D\u043E!",3:"\u52D5\u7269\u7DE8\u865F {1} \u5DF2\u6210\u529F\u6A19\u8A18\u70BA\u4E7E\u71E5\uFF01"
,25:"\u017Divotinja s ID {1} uspje\u0161no ozna\u010Dena kao suha!",4:"Zv\xED\u0159e s ID {1} \xFAsp\u011B\u0161n\u011B ozna\u010Deno jako such\xE9!"
,5:"Dyr med ID {1} er succesfuldt markeret som t\xF8rt!",0:"Animal with ID {1} success~fully marked as dry!"
,6:"Dier met nummer {1} is succesvol gemarkeerd als droog",7:"Loom ID-ga {1} m\xE4rgitud kinnisloomaks!"
,8:"El\xE4in ID {1} onnistunut merkitty umpeutetuksi!",9:"L\'animal avec l\'ID {1} a \xE9t\xE9 marqu\xE9 avec succ\xE8s comme vache "+
"tarie",10:"Tier mit ID {1} wurde erfolgreich als trocken~stehend markiert!",11:
"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03AC\u03BD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C9\u03C2 \u03C3\u03C4\u03B5\u03AF\u03C1\u03BF!"
,12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen megjel\xF6lve, mint sz\xE1raz!"
,13:"Animale con ID {1} segnato come asciutto con successo!",15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi atz\u012Bm\u0113ts k\u0101 sauss!"
,26:"Gyv\u016Bnas su ID {1} s\u0117kmingai pa\u017Eym\u0117tas kaip sausas!",16:
"Dyr med ID {1} ble markert som gjeldku!",17:"Zwierz\u0119 o ID {1} pomy\u015Blnie oznaczone jako suche!"
,18:"Animal com ID {1} marcado como seco com sucesso!",19:"Animalul cu ID-ul {1} a fost marcat ca fiind uscat cu succes!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E "+
"\u043A\u0430\u043A \u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u043E\u0435!"
,27:"\u017Dival z ID {1} uspe\u0161no ozna\u010Dena kot suha!",21:"Animal con ID {1} marcado con \xE9xito como seco."
,22:"Djur med ID {1} har framg\xE5ngsrikt markerats som torrt!",23:"{1} kimlikli hayvan ba\u015Far\u0131yla kuru olarak i\u015Faretlendi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0430 \u044F\u043A \u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0430!"
};C.Bp8={1:"Sistem je uspje\u0161no a\u017Euriran, mo\u017Eete izvaditi USB.",2:
"\u0424\u044A\u0440\u043C\u0443\u0435\u0440\u044A\u0442 \u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.\nUSB \u0444\u043B\u0430\u0448 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u043C\u043E\u0436\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E."
,3:"\u97CC\u9AD4\u5DF2\u6210\u529F\u66F4\u65B0\u3002\nUSB \u96A8\u8EAB\u789F\u73FE\u5728\u53EF\u4EE5\u5B89\u5168\u79FB\u9664\u3002"
,25:"Firmware je uspje\u0161no a\u017Euriran.\nUSB flash disk mo\u017Ee se "+"sigurno ukloniti."
,4:"Firmware byl \xFAsp\u011B\u0161n\u011B aktualizov\xE1n.\nUSB flash disk "+"m\u016F\u017Ee b\xFDt bezpe\u010Dn\u011B odstran\u011Bn."
,5:"Firmwaren blev opdateret med succes.\nUSB-n\xF8glen kan nu fjernes sikkert."
,0:"Firmware was updated successfully.\nUSB flash drive can be safely removed.",
6:"De firmware is succesvol bijgewerkt.\nUSB-flashstation kan nu veilig worden "+
"verwijderd.",7:"P\xFCsivara edukalt uuendatud.\nUSB-m\xE4lupulga v\xF5ib ohutult eemaldada."
,8:"Laiteohjelmiston p\xE4ivitys onnistui.\nUSB-muistitikku voidaan poistaa "+"turvallisesti."
,9:"Le micrologiciel a \xE9t\xE9 mis \xE0 jour avec succ\xE8s.\nLa cl\xE9 USB "+
"peut \xEAtre retir\xE9e.",10:"Firmware wurde erfolgreich aktualisiert! USB-Stick kann abgezogen werden!"
,11:"\u03A4\u03BF \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1.\n\u0397 "+"\u03BC\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 "+
"USB \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03BC\u03B5 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1.",12:"A firmware sikeresen friss\xFClt.\nAz USB flash meghajt\xF3 biztons\xE1gosan "+
"elt\xE1vol\xEDthat\xF3.",13:"Il firmware \xE8 stato aggiornato con successo.\nLa chiavetta USB pu\xF2 "+
"essere rimossa in sicurezza.",15:"Programmaparat\u016Bra veiksm\u012Bgi atjaunin\u0101ta.\nUSB zibatmi\u0146u "+
"var dro\u0161i iz\u0146emt.",26:"Aparatin\u0117 \u012Franga s\u0117kmingai atnaujinta.\nUSB atmintin\u0119 "+
"galima saugiai pa\u0161alinti.",16:"Programmet ble oppdatert.\nUSB- kan trygt fjernes."
,17:"Oprogramowanie uk\u0142adowe zosta\u0142o pomy\u015Blnie zaktualizowane.\nPendrive "+
"USB mo\u017Ce by\u0107 bezpiecznie od\u0142\u0105czony.",18:"O firmware foi atualizado com sucesso.\nO pendrive USB pode ser removido "+
"com seguran\xE7a.",19:"Firmware-ul a fost actualizat cu succes.\nMemoria USB poate fi scoas\u0103 "+
"\xEEn siguran\u021B\u0103.",20:"\u0412\u0435\u0440\u0441\u0438\u044F \u041F\u041E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430! USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C "+
"\u043C\u043E\u0436\u043D\u043E \u0438\u0437\u0432\u043B\u0435\u0447\u044C!",27:
"Vdelana programska oprema je bila uspe\u0161no posodobljena.\nUSB klju\u010Dek "+
"je mogo\u010De varno odstraniti.",21:"El firmware se ac~tualiz\xF3 con \xE9xito.\nEl USB flash drive puede ser "+
"retirado con seguridad.",22:"Firmware uppdaterades framg\xE5ngsrikt.\nUSB-minnet kan nu s\xE4kert tas "+
"bort.",23:"Firmware ba\u015Far\u0131yla g\xFCncellendi.\nUSB flash s\xFCr\xFCc\xFC "+
"g\xFCvenli bir \u015Fekilde \xE7\u0131kar\u0131labilir.",24:"\u0412\u0435\u0440\u0441\u0456\u044F \u041F\u041E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0430! USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447 "+
"\u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0442\u044F\u0433\u0442\u0438!"};C.
Bp9={1:"ID \u017Eivotinje je uspje\u0161no povezan sa \u017Eivotinjom s ID {1}!"
,2:"ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0448\u0435 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0432\u044A\u0440\u0437\u0430\u043D "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1}!",3:"\u52D5\u7269ID\u5DF2\u6210\u529F\u9023\u7D50\u81F3ID\u70BA{1}\u7684\u52D5\u7269\uFF01"
,25:"ID \u017Eivotinje je uspje\u0161no povezan s \u017Eivotinjom s ID-om {1}!",
4:"ID zv\xED\u0159ete bylo \xFAsp\u011B\u0161n\u011B propojeno se zv\xED\u0159etem "+
"s ID {1}!",5:"Dyrets ID blev succesfuldt forbundet med dyret med ID {1}!",0:"Animal ID was successfully linked to animal with ID {1}!"
,6:"Diernummer is gekoppeld aan dier met ID {1}",7:"Looma ID \xFChendati edukalt loomaga, kelle ID on {1}!"
,8:"Korvamerkkinumero lis\xE4ttiin onnistuneesti el\xE4imeen, jonka tunnus "+"on {1}."
,9:"Un n\xB0 d\'identification a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 l\'animal "+
"portant l\'ID {1}.",10:"Dem Tier mit der ID {1} wurde erfolgreich eine Ohrmarken~nummer hinzugef\xFCgt."
,11:"\u03A4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03C3\u03C5\u03BD\u03B4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03BC\u03B5 \u03C4\u03BF "+"\u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1}!",12:"Az \xE1llat azonos\xEDt\xF3ja sikeresen \xF6sszekapcsol\xE1sra ker\xFClt "+
"az \xE1llattal, melynek azonos\xEDt\xF3ja {1}!",13:"L\'ID dell\'animale \xE8 stato collegato con successo all\'animale con "+
"ID {1}!",15:"Dz\u012Bvnieka ID tika veiksm\u012Bgi saist\u012Bts ar dz\u012Bvnieku, "+
"kura ID ir {1}!",26:"Gyv\u016Bno ID s\u0117kmingai susietas su gyv\u016Bnu, kurio ID {1}!"
,16:"Dyrets ID ble vellykket koblet til dyret med ID {1}!",17:"Identyfikator zwierz\u0119cia zosta\u0142 pomy\u015Blnie powi\u0105zany "+
"ze zwierz\u0119ciem o ID {1}!",18:"O ID do animal foi vinculado com sucesso ao animal com ID {1}!"
,19:"ID-ul animalului a fost asociat cu succes animalului cu ID-ul {1}!",20:"ID \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043E "+
"\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u0441 ID "+"{1}!"
,27:"ID \u017Eivali je bil uspe\u0161no povezan z \u017Eivaljo z ID {1}!",21:"El ID del animal se vincul\xF3 correctamente al animal con ID {1}."
,22:"Djurets ID kopplades framg\xE5ngsrikt till djuret med ID {1}!",23:"Hayvan kimli\u011Fi, {1} kimli\u011Fine sahip hayvana ba\u015Far\u0131yla "+
"ba\u011Fland\u0131!",24:"ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0431\u0443\u043B\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0440\u0438\u0432\'\u044F\u0437\u0430\u043D\u043E "+
"\u0434\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0441 ID {1}!"};C.SuccessLinkTransponder={
1:"Transponder je uspje\u0161no dodijeljen \u017Eivotinji s ID {1}!",2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044A\u0442 \u0431\u0435\u0448\u0435 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0435\u043D "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1}!",3:"\u61C9\u7B54\u5668\u5DF2\u6210\u529F\u5206\u914D\u7D66ID\u70BA{1}\u7684\u52D5\u7269\uFF01"
,25:"Transponder je uspje\u0161no dodijeljen \u017Eivotinji s ID-jem {1}!",4:"Transpond\xE9r byl \xFAsp\u011B\u0161n\u011B p\u0159i\u0159azen zv\xED\u0159eti "+
"s ID {1}!",5:"Transponderen blev succesfuldt tildelt dyret med ID {1}!",0:"Transponder was successfully assigned to animal with ID {1}!"
,6:"Transponder is succesvol gematch met Dier ID {1}",7:"Transponder m\xE4\xE4rati edukalt loomale ID-ga {1}!"
,8:"Transponderi m\xE4\xE4ritettiin el\xE4imelle, jonka tunnus on {1}!",9:"Un transpondeur a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 l\'animal portant "+
"l\'ID {1}.",10:"Dem Tier mit der ID {1} wurde erfolgreich ein Transponder hinzugef\xFCgt."
,11:"\u039F \u03B4\u03AD\u03BA\u03C4\u03B7\u03C2 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 \u03C3\u03C4\u03BF "+"\u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 "+
"{1}!",12:"A transzponder sikeresen hozz\xE1rendelve az {1} azonos\xEDt\xF3j\xFA "+
"\xE1llathoz!",13:"Il transponder \xE8 stato assegnato con successo all\'animale con ID {1}!"
,15:"Transponderis veiksm\u012Bgi pie\u0161\u0137irts dz\u012Bvniekam ar ID "+"{1}!"
,26:"Transponderis s\u0117kmingai priskirtas gyv\u016Bnui su ID {1}!",16:"Transponderen ble vellykket tildelt dyret med ID {1}!"
,17:"Transponder zosta\u0142 pomy\u015Blnie przypisany do zwierz\u0119cia o "+"ID {1}!"
,18:"O transponder foi atribu\xEDdo com sucesso ao animal com o ID {1}!",19:"Transponderul a fost atribuit cu succes animalului cu ID-ul {1}!"
,20:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0431\u044B\u043B "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u0441 ID {1}!",27:"Pretvornik je bil uspe\u0161no dodeljen \u017Eivali z ID {1}!"
,21:"El transpondedor se asign\xF3 con \xE9xito al animal con ID {1}.",22:"Transponder tilldelades framg\xE5ngsrikt till djuret med ID {1}!"
,23:"Transponder ba\u015Far\u0131yla {1} kimlikli hayvana atand\u0131!",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0431\u0443\u0432 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0456 \u0437 ID {1}!"};C.Bp_={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no ozna\u010Dena - u fazi laktacije!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 ID {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u043C\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u043E \u043A\u0430\u0442\u043E "+
"\u043B\u0430\u043A\u0442\u0438\u0440\u0430\u0449\u043E!",3:"\u6A19\u8A18\u52D5\u7269ID {1} \u70BA\u6B63\u5728\u6CCC\u4E73\u6210\u529F\uFF01"
,25:"\u017Divotinja s ID {1} uspje\u0161no ozna\u010Dena kao dojilja!",4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B ozna\u010Deno jako "+
"laktuj\xEDc\xED!",5:"Dyr med ID {1} er succesfuldt markeret som lakterende!",0:
"Animal with ID {1} success~fully marked as lactating!",6:"Dier met ID {1} is succesvol gemarkeerd als lacterend"
,7:"Loom ID-ga {1} m\xE4rgitud lakteerivaks!",8:"El\xE4in ID {1} onnistunut merkitty lypsyyn!"
,9:"L\'animal avec l\'ID {1} a \xE9t\xE9 marqu\xE9 avec succ\xE8s comme allaitant\xA0!"
,10:"Tier mit ID {1} wurde erfolgreich als laktierend markiert!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03AC\u03BD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C9\u03C2 \u03B3\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1\u03C2!"
,12:"Az {1} azonos\xEDt\xF3j\xFA \xE1llat sikeresen megjel\xF6lve, mint tejel\u0151!"
,13:"Animale con ID {1} contrassegnato con successo come in lattazione!",15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi atz\u012Bm\u0113ts k\u0101 piena "+
"dod\u0113js!",26:"Gyv\u016Bnas su ID {1} s\u0117kmingai pa\u017Eym\u0117tas kaip pieningas!"
,16:"Dyr med ID {1} ble markert som amme!",17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie oznaczone jako karmi\u0105ce!"
,18:"Animal com ID {1} marcado como lactante com sucesso!",19:"Animalul cu ID {1} a fost marcat cu succes ca fiind \xEEn lacta\u021Bie!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E "+
"\u043A\u0430\u043A \u043B\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0435!"
,27:"\u017Dival z ID {1} je uspe\u0161no ozna\u010Dena kot doje\u010Da!",21:"Animal con ID {1} marcado con \xE9xito como en lactancia."
,22:"Djur med ID {1} \xE4r nu markerat som lakterande!",23:"{1} kimlikli hayvan ba\u015Far\u0131yla emziriyor olarak i\u015Faretlendi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0430 \u044F\u043A \u043B\u0430\u043A\u0442\u0443\u044E\u0447\u0430!"
};C.SuccessMassDeregistration={1:"{1} \u017Eivotinje su uspje\u0161no odjavljene!"
,2:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u044F\u0445\u0430 "+"\u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u0434\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438!"
,3:"{1} \u96BB\u52D5\u7269\u5DF2\u6210\u529F\u53D6\u6D88\u8A3B\u518A\uFF01",25:"{1} \u017Eivotinja je uspje\u0161no odjavljena!"
,4:"{1} zv\xED\u0159at bylo \xFAsp\u011B\u0161n\u011B odregistrov\xE1no!",5:"{1} dyr blev succesfuldt afmeldt!"
,0:"{1} animals were success~fully unregistered!",6:"{1} dieren zijn succesvol afgemeld"
,7:"{1} looma registreerimine t\xFChistati edukalt!",8:"{1} el\xE4int\xE4 on poistettu onnistuneesti!"
,9:"{1} Les animaux ont \xE9t\xE9 d\xE9sinscrits avec succ\xE8s\xA0!",10:"{1} Tiere wurden erfolgreich abgemeldet!"
,11:"{1} \u03B6\u03CE\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE!",12:"{1} \xE1llat sikeresen le lett iratkozva!"
,13:"{1} animali sono stati cancellati con successo!",15:"{1} dz\u012Bvnieki tika veiksm\u012Bgi izdz\u0113sti no re\u0123istra!"
,26:"{1} gyv\u016Bnai s\u0117kmingai i\u0161registruoti!",16:"{1} dyr ble vellykket avregistrert!"
,17:"{1} zwierz\u0119ta zosta\u0142y pomy\u015Blnie wyrejestrowane!",18:"{1} animais foram desregistrados com sucesso!"
,19:"{1} animale au fost scoase din eviden\u021B\u0103 cu succes!",20:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043D\u044F\u0442\u043E "+"\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438!"
,27:"{1} \u017Eivali je bilo uspe\u0161no odjavljenih!",21:"\xA1{1} animales fueron desregistrados con \xE9xito!"
,22:"{1} djur avregistrerades framg\xE5ngsrikt!",23:"{1} hayvan\u0131n kayd\u0131 ba\u015Far\u0131yla~kald\u0131r\u0131ld\u0131!"
,24:"{1} \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437 \u0440\u0435\u0454\u0441\u0442\u0440\u0443!"
};C.Bp$={1:"\u017Divotinja {1}\nje uspje\u0161no registrovana.",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E {1}\n\u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.",3:"\u52D5\u7269 {1}\n\u5DF2\u6210\u529F\u8A3B\u518A\u3002"
,25:"\u017Divotinja {1}\nje uspje\u0161no registrirana.",4:"Zv\xED\u0159e {1}\nbylo \xFAsp\u011B\u0161n\u011B zaregistrov\xE1no."
,5:"Dyret blev registreret med succes.",0:"Animal {1}\nwas registered successfully."
,6:"Dier {1} is succesvol geregistreerd",7:"Loom {1}\nregistreeriti edukalt.",8:
"El\xE4in {1}\n on rekister\xF6ity onnistuneesti.",9:"L\'animal {1} a \xE9t\xE9 enregistr\xE9 avec succ\xE8s."
,10:"Tier {1}\n wurde erfolgreich registriert.",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2.",12:"Az \xE1llat {1}\nsikeresen regisztr\xE1lva."
,13:"L\'animale \xE8 stato registrato con successo.",15:"Dz\u012Bvnieks tika veiksm\u012Bgi re\u0123istr\u0113ts."
,26:"Gyv\u016Bnas {1}\ns\u0117kmingai u\u017Eregistruotas.",16:"Dyret ble registrert vellykket."
,17:"Zwierz\u0119 zosta\u0142o pomy\u015Blnie zarejestrowane.",18:"Animal {1}\nfoi registrado com sucesso."
,19:"Animalul a fost \xEEnregistrat cu succes.",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1}\n\u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E."
,27:"\u017Dival {1}\nje bila uspe\u0161no registrirana.",21:"El animal {1} fue registrado con \xE9xito."
,22:"Djuret registrerades framg\xE5ngsrikt.",23:"Hayvan {1}\nba\u015Far\u0131yla kaydedildi."
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1}\n\u0431\u0443\u043B\u0430 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430."
};C.Bqa={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no izbrisana sa liste!",2:
"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E \u043A\u044A\u043C "+
"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0441 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"ID\u70BA{1}\u725B\u96BB\u5DF2\u6210\u529F\u7684\u5F9E\u8B66\u544A\u540D\u55AE\u79FB\u9664\uFF01"
,25:"\u017Divotinja s ID-em {1} uspje\u0161no je uklonjena s popisa alarma!",4:"Zv\xED\u0159e (ID {1}) bylo \xFAsp\u011B\u0161n\u011B odstran\u011Bno ze "+
"seznamu alarm\u016F!",5:"Dyr med ID {1} er blevet fjernet fra alarmlisten!",0:"Animal with ID {1} success~fully removed from alarm list!"
,6:"Dier met ID {1} is successvol van alarmlijst gezet!",7:"Loom ID-ga {1} edukalt hoiatuste nimekirjast eemaldatud!"
,8:"El\xE4in ID {1} ~poistettu onnistuneesti h\xE4lytyslistalta!",9:"Animal avec ID {1} \xE9limin\xE9 de la liste d\u2019alarme avec succ\xE8s"
,10:"Tier mit ID {1} wurde erfolgreich von der Alarmliste entfernt!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1. \u03C4\u03B1\u03C5\u03C4. "+
"{1} \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD"
,12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen elt\xE1vol\xEDtva a riaszt\xE1si "+
"list\xE1r\xF3l!",13:"Animale con ID {1} rimosso con successo dall\'elenco degli allarmi!"
,15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi no\u0146emts no trauksmes saraksta!"
,26:"Gyv\u016Bnas su ID {1} s\u0117kmingai pa\u0161alintas i\u0161 \u012Fsp\u0117jim\u0173 "+
"s\u0105ra\u0161o!",16:"Dyr med ID {1} ble fjernet fra alarmlisten!",17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie usuni\u0119te z listy "+
"alarmowej!",18:"Animal com ID {1} removido com sucesso da lista de alarme!",19:
"Animalul cu ID-ul {1} a fost eliminat cu succes din lista de alarm\u0103!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 "+
"\u0442\u0440\u0435\u0432\u043E\u0433!",27:"\u017Dival z ID {1} je bila uspe\u0161no odstranjena s seznama alarmov!"
,21:"Se ha eliminado con \xE9xito el animal con ID {1} de la lista de alarmas.",
22:"Djur med ID {1} har tagits bort fr\xE5n larm listan!",23:"Alarm listesini kald\u0131rmak ba\u015Far\u0131l\u0131"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0442\u0440\u0438\u0432\u043E\u0433!"};C.Bqb={1:"\u017Divotinja s ID {1} uspje\u0161no uklonjena s liste pra\u0107enja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E~\u043D\u0430\u043F\u044A\u043B\u043D\u043E "+
"\u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E \u043E\u0442 "+"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435!"
,3:"\u5E36\u6709 ID {1} \u7684\u52D5\u7269\u5DF2\u6210\u529F\u5F9E\u76E3\u6E2C\u540D\u55AE\u4E2D\u79FB\u9664\uFF01"
,25:"\u017Divotinja s ID-em {1} uspje\u0161no je uklonjena s popisa za pra\u0107enje!"
,4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B odstran\u011Bno ze "+"sledovan\xE9ho seznamu!"
,5:"Dyr med ID {1} er blevet fjernet fra overv\xE5gningslisten!",0:"Animal with ID {1} success~fully removed from watch list!"
,6:"Dier met ID {1} is succesvol verwijderd van de Watchlist",7:"Loom ID-ga {1} on edukalt j\xE4lgimisnimekirjast eemaldatud!"
,8:"El\xE4in, jonka tunnus on {1}, on poistettu seurantalistalta!",9:"L\'animal avec l\'ID {1} a \xE9t\xE9 retir\xE9 avec succ\xE8s de la liste "+
"de suivi\xA0!",10:"Tier mit der ID {1} wurde erfolgreich von der Beobach~tungsliste entfernt!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2!"
,12:"Az \xE1llat, azonos\xEDt\xF3val {1}, sikeresen elt\xE1vol\xEDtva a megfigyel\xE9si "+
"list\xE1r\xF3l!",13:"Animale con ID {1} rimosso con successo dalla lista di osservazione!"
,15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi no\u0146emts no uzraudz\u012Bbas "+
"saraksta!",26:"Gyv\u016Bnas su ID {1} s\u0117kmingai pa\u0161alintas i\u0161 steb\u0117jimo "+
"s\u0105ra\u0161o!",16:"Dyr med ID {1} er vellykket fjernet fra overv\xE5kningslisten!"
,17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie usuni\u0119te z listy "+"obserwowanych!"
,18:"Animal com ID {1} removido com sucesso da lista de observa\xE7\xE3o!",19:"Animalul cu ID-ul {1} a fost eliminat cu succes din lista de supraveghere!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E "+
"\u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F!"
,27:"\u017Dival z ID {1} je bila uspe\u0161no odstranjena s seznama opazovanj!",
21:"Animal con ID {1} retirado con \xE9xito de la lista de seguimiento.",22:"Djur med ID {1} har tagits bort fr\xE5n bevakningslistan!"
,23:"{1} kimlikli hayvan, izleme listesinden ba\u015Far\u0131yla kald\u0131r\u0131ld\u0131!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437 ID {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u043B\u0443\u0447\u0435\u043D\u0430 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F!"
};C.SuccessResetAnimalData={1:"Podaci o \u017Eivotinja uspje\u0161no izbrirsani!"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u0435 \u0438\u0437\u0442\u0440\u0438\u0442\u0430 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",3:"\u52D5\u7269\u8CC7\u6599\u5DF2\u6210\u529F\u522A\u9664\uFF01"
,25:"Podaci o \u017Eivotinjama su uspje\u0161no izbrisani!",4:"Data o zv\xED\u0159atech byla \xFAsp\u011B\u0161n\u011B smaz\xE1na!"
,5:"Dyrenes data blev slettet succesfuldt!",0:"Animal data were deleted success~fully!"
,6:"Dierdata is succesvol verwijderd",7:"Looma andmed edukalt kustutatud!",8:"El\xE4intiedot poistettiin onnistuneesti!"
,9:"Les donn\xE9es d\u2019animaux ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,10:"Tierdaten wurden erfolgreich gel\xF6scht!",11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03BF\u03C5 "+
"\u03B6\u03CE\u03BF\u03C5 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"Az \xE1llatadatok sikeresen t\xF6rl\u0151dtek!"
,13:"I dati sugli animali sono stati eliminati con successo!",15:"Dz\u012Bvnieku dati tika veiksm\u012Bgi dz\u0113sti!"
,26:"Gyv\u016Bn\u0173 duomenys buvo s\u0117kmingai i\u0161trinti!",16:"Dyredata ble slettet!"
,17:"Dane o zwierz\u0119tach zosta\u0142y pomy\u015Blnie usuni\u0119te!",18:"Os dados dos animais foram exclu\xEDdos com sucesso!"
,19:"Datele despre animale au fost \u0219terse cu succes!",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,27:"Podatki o \u017Eivalih so bili uspe\u0161no izbrisani!",21:"Los datos del animal se eliminaron con \xE9xito."
,22:"Djurdata raderades framg\xE5ngsrikt!",23:"Hayvan verileri ba\u015Far\u0131yla silindi!"
,24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bqc={1:"Podaci ure\u0111aja su uspje\u0161no izbrisani!",2:"\u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0443\u0441\u043F\u0435~\u0448\u043D\u043E!"
,3:"\u88DD\u7F6E\u8CC7\u6599\u5DF2\u6210\u529F\u522A\u9664\uFF01",25:"Podaci ure\u0111aja su uspje\u0161no izbrisani!"
,4:"Data za\u0159\xEDzen\xED byla \xFAsp\u011B\u0161n\u011B smaz\xE1na!",5:"Enhedsdata blev slettet succesfuldt!"
,0:"Device data were deleted success~fully!",6:"Apparaatgegevens zijn succesvol verwijderd!"
,7:"Seadme andmed kustutati edukalt!",8:"Laitteen tiedot poistettiin onnistu~neesti!"
,9:"Les donn\xE9es de l\'appareil ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,10:"Ger\xE4tedaten wurden erfolgreich gel\xF6scht!",11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03B7\u03C2 "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!",12:"Az eszk\xF6zadatok sikeresen t\xF6rl\u0151dtek!"
,13:"I dati del dispositivo sono stati eliminati con successo!",15:"Ier\u012Bces dati tika veiksm\u012Bgi dz\u0113sti!"
,26:"\u012Erenginio duomenys s\u0117kmingai i\u0161trinti!",16:"Enhetsdataene ble slettet vellykket!"
,17:"Dane urz\u0105dzenia zosta\u0142y pomy\u015Blnie usuni\u0119te!",18:"Os dados do dispositivo foram exclu\xEDdos com sucesso!"
,19:"Datele dispozitivului au fost \u0219terse cu succes!",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,27:"Podatki naprave so bili uspe\u0161no izbrisani!",21:"Los datos del dispositivo se eliminaron con \xE9xito."
,22:"Enhetsdata raderades framg\xE5ngsrikt!",23:"Cihaz verileri ba\u015Far\u0131yla silindi!"
,24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u043B\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456!"
};C.SuccessResetFactorySettings={1:"Aparat je uspje\u0161no ra\u0107en na fabri\u010Dke postavke!"
,2:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043D\u0443\u043B\u0435\u043D\u043E "+
"\u0441\u044A\u0441 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438!"
,3:"\u8A2D\u5099\u6210\u529F\u91CD\u7F6E\u70BA\u51FA\u5EE0\u8A2D\u5B9A\u503C\uFF01"
,25:"Ure\u0111aj je uspje\u0161no vra\u0107en na tvorni\u010Dke postavke!",4:"\xDAsp\u011B\u0161n\xE9 resetov\xE1n\xED na tov\xE1rn\xED nastaven\xED"
,5:"Enheden er nulstillet til fabriksindstillingerne!",0:"Device success~fully reset to factory defaults!"
,6:"Apparaat successvol op Fabrieksinstellingen terug gezet!",7:"Seade on edukalt taastatud tehaseseadetele!"
,8:"Laite onnistui palautettu tehdasasetuksiin!",9:"L\u2019appareil\na \xE9t\xE9 r\xE9initialiser\navec succ\xE8s\xA0!"
,10:"Ger\xE4t erfolgreich auf Werks~ein~stel~lun~gen zur\xFCckgesetzt!",11:"\u0397 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B5\u03C0\u03B1\u03BD\u03B1\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03B9\u03C2 "+"\u03B5\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AD\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",12:"Az eszk\xF6z sikeresen vissza\xE1ll\xEDtva az alap\xE9rtelmezett gy\xE1ri "+
"be\xE1ll\xEDt\xE1sokra!",13:"Dispositivo ripristinato con successo alle impostazioni di fabbrica!"
,15:"Ier\u012Bce veiksm\u012Bgi atiestat\u012Bta uz r\u016Bpn\u012Bcas iestat\u012Bjumiem!"
,26:"\u012Erenginys s\u0117kmingai atstatytas \u012F gamyklinius nustatymus!",16:
"Enheten er tilbakestilt til fabrikkinnstillingene!",17:"Urz\u0105dzenie zosta\u0142o pomy\u015Blnie zresetowane do ustawie\u0144 "+
"fabrycznych!",18:"Dispositivo redefinido com sucesso para as configura\xE7\xF5es de f\xE1brica!"
,19:"Dispozitivul a fost resetat la set\u0103rile din fabric\u0103 cu succes!",20:
"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u0431\u0440\u043E\u0448\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438!",27:"Naprava je uspe\u0161no ponastavljena na tovarni\u0161ke nastavitve!"
,21:"Dispositivo restaurado con \xE9xito a los ajustes de f\xE1brica.",22:"Enheten har \xE5terst\xE4llts till fabriksinst\xE4llningarna!"
,23:"Fabrika ayarlar\u0131na d\xF6nme ba\u015Far\u0131l\u0131",24:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u043E \u0434\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u044C\u043A\u0438\u0445 "+
"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C!"};C.SuccessRestoreBackup={
1:"Uspe\u0161no obnovljeni podaci ure\u0111aja i {1}\xA0set(ovi) podataka "+"o \u017Eivotinjama iz rezervne kopije na USB fle\u0161 disku!"
,2:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u0435\u043D\u0438 "+
"\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0438 {1}\xA0\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u043E\u0442 \u0430\u0440\u0445\u0438\u0432\u0435\u043D \u0444\u0430\u0439\u043B "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,3:"\u6210\u529F\u5F9E USB \u96A8\u8EAB\u789F\u7684\u5099\u4EFD\u6A94\u6848\u4E2D\u6062\u5FA9\u8A2D\u5099\u6578\u64DA\u548C "+
"{1}\xA0\u500B\u52D5\u7269\u8CC7\u6599\u96C6\uFF01",25:"Uspje\u0161no obnovljeni podaci ure\u0111aja i {1}\xA0set podataka o \u017Eivotinjama "+
"iz sigurnosne kopije na USB memoriji!",4:"\xDAsp\u011B\u0161n\u011B obnovena data za\u0159\xEDzen\xED a {1}\xA0sada(y) "+
"dat o zv\xED\u0159atech ze z\xE1lo\u017En\xEDho souboru na USB flash disku!",5:
"Genskabt enhedsdata og {1}\xA0datas\xE6t med dyredata fra sikkerhedskopi "+"p\xE5 USB-n\xF8gle!"
,0:"Successfully restored device data and {1}\xA0animal data set(s) from backup "+
"file on USB flash drive!",6:"Succesvol herstelde apparaatgegevens en {1}\xA0dierset(s) van back-upbestand "+
"op USB-stick!",7:"Seadme andmed ja {1}\xA0loomade andmekomplekt(id) USB-m\xE4lupulgal olevast "+
"varundusfailist edukalt taastatud!",8:"Kaikki laitetiedot ja {1}\xA0el\xE4intietotietueet palautettiin onnistuneesti "+
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
,13:"Dati del dispositivo ripristinati con successo e {1}\xA0set di dati animali "+
"dal file di backup su chiavetta USB!",15:"Veiksm\u012Bgi atjaunoti ier\u012Bces dati un {1}\xA0dz\u012Bvnieku datu "+
"komplekti no rezerves kopijas faila USB zibatmi\u0146\u0101!",26:"S\u0117kmingai atkurti \u012Frenginio duomenys ir {1}\xA0gyv\u016Bn\u0173 "+
"duomen\u0173 rinkiniai i\u0161 atsargin\u0117s kopijos USB atmintin\u0117je!",16:
"Vellykket gjenopprettet enhetsdata og {1}\xA0dyredata sett fra sikkerhetskopifil "+
"p\xE5 USB-minnepinne!",17:"Pomy\u015Blnie przywr\xF3cono dane urz\u0105dzenia oraz {1}\xA0zestaw(y) "+
"danych zwierz\u0119cych z pliku kopii zapasowej na pendrive\'ie USB!",18:"Dados do dispositivo restaurados com sucesso e conjunto(s) de dados de "+
"{1}\xA0animal de arquivo de backup em pen drive USB!",19:"Datele dispozitivului \u0219i {1}\xA0set(uri) de date pentru animale au "+
"fost restaurate cu succes din fi\u0219ierul de backup de pe memoria USB!",20:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0438 {1}\xA0\u043D\u0430\u0431\u043E\u0440(\u044B) \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0438\u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 "+
"\u043A\u043E\u043F\u0438\u0438 \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0435!"
,27:"Uspe\u0161no obnovljeni podatki naprave in {1} nabor(i) podatkov o \u017Eivalih "+
"iz varnostne kopije na USB klju\u010Dku!",21:"Los datos del dispositivo y el/los {1}\xA0con~jun~to(s) de datos del animal "+
"se res~tau~raron con \xE9xito desde el ar~chivo de copia de se~gu~ri~dad "+"en la uni~dad flash USB."
,22:"Lyckades \xE5terst\xE4lla enhetsdata och {1}\xA0djurdatasats(er) fr\xE5n "+
"s\xE4kerhetskopian p\xE5 USB-minne!",23:"USB flash s\xFCr\xFCc\xFCdeki yedekleme dosyas\u0131ndan cihaz verileri "+
"ve {1}\xA0hayvan veri seti/k\xFCmeleri ba\u015Far\u0131yla geri y\xFCklendi!",24:
"\u0423\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043E "+
"\u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+"\u0442\u0430 {1}\xA0\u043D\u0430\u0431\u0456\u0440(\u0438) \u0434\u0430\u043D\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D \u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456!"
};C.SuccessUnlinkTransponder={1:"Dodijeljeni transponder je uspje\u0161no odvojen od \u017Eivotinje s ID "+
"{1}!",2:"\u041F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0431\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442 "+
"\u043E\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E \u0441 "+"ID {1}!"
,3:"\u5DF2\u6210\u529F\u5C07\u6307\u5B9A\u7684\u61C9\u7B54\u5668\u8207\u7DE8\u865F "+
"{1} \u7684\u52D5\u7269\u89E3\u9664\u9023\u7D50\uFF01",25:"Dodijeljeni transponder je uspje\u0161no odvojen od \u017Eivotinje s ID-om "+
"{1}!",4:"P\u0159i\u0159azen\xFD transpond\xE9r byl \xFAsp\u011B\u0161n\u011B odpojen "+
"od zv\xED\u0159ete s ID {1}!",5:"Tildelt transponder blev succesfuldt afkoblet fra dyret med ID {1}\xA0!"
,0:"Assigned transponder was successfully unlinked from animal with ID {1}\xA0!"
,6:"Toegekend transponder is succesvol gesplitst van dier met ID {1}!",7:"M\xE4\xE4ratud transponder on edukalt looma ID-st {1} lahti \xFChendatud!"
,8:"M\xE4\xE4ritetty transponderi on poistettu onnistuneesti el\xE4imest\xE4, "+
"jonka tunnus on {1}!",9:"Le transpondeur attribu\xE9 a \xE9t\xE9 supprim\xE9 avec succ\xE8s des "+
"donn\xE9s de l\'animal avec l\'ID {1}.",10:"Zugeordneter Transponder wur~de erfolgreich aus dem Datensatz des Tieres "+
"mit der ID {1} gel\xF6scht.",11:"\u03A4\u03BF \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF "+
"\u03B4\u03B9\u03B1\u03B2\u03B9\u03B2\u03B1\u03C3\u03C4\u03AE\u03C1\u03B1\u03C2 "+
"\u03B1\u03C0\u03BF\u03C3\u03C5\u03BD\u03B4\u03AD\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF "+
"\u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1}\xA0!",12:"A hozz\xE1rendelt transzponder sikeresen le lett v\xE1lasztva az {1} azonos\xEDt\xF3j\xFA "+
"\xE1llatr\xF3l!",13:"Il transponder assegnato \xE8 stato scollegato con successo dall\'animale "+
"con ID {1}!",15:"Pie\u0161\u0137irtais transponders veiksm\u012Bgi atvienots no dz\u012Bvnieka "+
"ar ID {1}!",26:"Priskirtas atsakiklis s\u0117kmingai atjungtas nuo gyv\u016Bno su ID {1}!"
,16:"Tildelt transponder ble vellykket frakoblet fra dyret med ID {1}\xA0!",17:"Przypisany transponder zosta\u0142 pomy\u015Blnie od\u0142\u0105czony "+
"od zwierz\u0119cia o ID {1}!",18:"O transponder atribu\xEDdo foi desvinculado com sucesso do animal com "+
"o ID {1}!",19:"Transponderul atribuit a fost dezlegat cu succes de la animalul cu ID-ul "+
"{1}!",20:"\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D "+
"\u043E\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0441 "+"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C "+
"{1}!",27:"Dodeljeni transponder je bil uspe\u0161no odklopljen od \u017Eivali z "+
"ID {1}!",21:"El transpondedor asignado se desvincul\xF3 con \xE9xito del animal con "+
"ID {1}.",22:"Tilldelad transponder avl\xE4nkades framg\xE5ngsrikt fr\xE5n djur med "+
"ID {1}!",23:"Atanan aktar\u0131c\u0131n\u0131n {1} kimlikli hayvanla ba\u011Flant\u0131s\u0131 "+
"ba\u015Far\u0131yla kald\u0131r\u0131ld\u0131!",24:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0456\u0434\'\u0454\u0434\u043D\u0430\u043D\u043E "+
"\u0432\u0456\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0437 ID "+"{1}!"
};C.SuccessUnregister={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no odjavljena!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043E\u0442\u043F\u0438\u0441\u0430\u043D\u043E!",3:"\u8B58\u5225\u78BC {1}\u7684\u725B\u96BB\u5DF2\u6210\u529F\u89E3\u9664\u8A3B\u518A\uFF01"
,25:"\u017Divotinja s ID-om {1} uspje\u0161no je odjavljena!",4:"\xDAsp\u011B\u0161n\u011B zru\u0161en\xE1 registrace"
,5:"Dyr med ID {1} er blevet afmeldt!",0:"Animal with ID {1} successfully unregistered!"
,6:"Dier met ID {1} is successvol afgemeld!",7:"Loom ID {1} nimekirjast edukalt maas"
,8:"El\xE4in poistettu rekisterist\xE4!",9:"Animal avec ID {1}\na \xE9t\xE9 effacer\navec succ\xE8s."
,10:"Tier mit ID {1} wurde erfolgreich abgemeldet!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03C4\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1",12:"Az \xE1llat azonos\xEDt\xF3val {1} sikeresen leiratkozott!"
,13:"Animale con ID {1} cancellato con successo!",15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi izdz\u0113sts no re\u0123istra!"
,26:"Gyv\u016Bnas su ID {1} s\u0117kmingai i\u0161registruotas!",16:"Dyr med ID {1} ble avregistrert!"
,17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie wyrejestrowane!",18:"Animal com ID {1} desregistrado com sucesso!"
,19:"Animalul cu ID-ul {1} a fost dez\xEEnregistrat cu succes!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",27:"\u017Dival z ID {1} uspe\u0161no odjavljena!"
,21:"Se ha anulado con \xE9xito el registro del animal con ID {1}.",22:"Djur med ID {1} har framg\xE5ngsrikt avregistrerats!"
,23:"Kay\u0131t silme ba\u015Far\u0131l\u0131",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430!"};C.Bqd={1:"\u017Divotinja {1} i odgovaraju\u0107a obavijest o ro\u0111enju su uspje\u0161no "+
"izbrisani!",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E {1} \u0438 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u043E\u0442\u043E "+
"\u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435 \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u52D5\u7269 {1} \u53CA\u5176\u51FA\u751F\u901A\u77E5\u5DF2\u6210\u529F\u522A\u9664\uFF01"
,25:"\u017Divotinja {1} i odgovaraju\u0107a obavijest o ro\u0111enju uspje\u0161no "+
"su izbrisane!",4:"Zv\xED\u0159e {1} a odpov\xEDdaj\xEDc\xED ozn\xE1men\xED o narozen\xED "+
"byly \xFAsp\u011B\u0161n\u011B smaz\xE1ny!",5:"Dyret {1} og den tilsvarende f\xF8dselsmeddelelse blev slettet succesfuldt!"
,0:"Animal {1} and corresponding birth notice were deleted successfully!",6:"Dier {1} en bijbehorend geboorte melding is succesvol verwijderd"
,7:"Loom {1} ning vastav s\xFCnniteavitus kustutatud!",8:"El\xE4in {1} ja sit\xE4 vastaava syntym\xE4ilmoitus poistettiin!"
,9:"L\'animal {1} et sa d\xE9claration de naissance ont \xE9t\xE9 supprim\xE9s "+
"avec succ\xE8s\xA0!",10:"Tier {1} samt Geburtsmeldung wurde erfolgreich gel\xF6scht!"
,11:"\u03A4\u03BF \u03B6\u03CE\u03BF {1} \u03BA\u03B1\u03B9 \u03B7 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03BF\u03B9\u03C7\u03B7 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD \u03BC\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",12:"\xC1llat {1} \xE9s a hozz\xE1tartoz\xF3 sz\xFClet\xE9si bejelent\xE9s "+
"sikeresen t\xF6r\xF6lve!",13:"L\'animale {1} e l\'avviso di nascita corrispondente sono stati eliminati "+
"con successo!",15:"Dz\u012Bvnieks {1} un atbilsto\u0161ais dzim\u0161anas pazi\u0146ojums "+
"tika veiksm\u012Bgi izdz\u0113sts!",26:"Gyv\u016Bnas {1} ir atitinkamas gimimo prane\u0161imas s\u0117kmingai "+
"i\u0161trinti!",16:"Dyr {1} og tilh\xF8rende f\xF8dselsmelding ble slettet!",17:
"Zwierz\u0119 {1} oraz odpowiadaj\u0105ce mu og\u0142oszenie o narodzinach "+"zosta\u0142y pomy\u015Blnie usuni\u0119te!"
,18:"Animal {1} e o respectivo aviso de nascimento foram exclu\xEDdos com sucesso!"
,19:"Animalul {1} \u0219i anun\u021Bul corespunz\u0103tor despre na\u0219tere "+
"au fost \u0219terse cu succes!",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1} \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u0431\u044B\u043B\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,27:"\u017Dival {1} in pripadajo\u010De obvestilo o rojstvu sta bili uspe\u0161no "+
"izbrisani!",21:"El animal {1} y la notificaci\xF3n de nacimiento correspondiente se eliminaron "+
"con \xE9xito.",22:"Djur {1} och motsvarande f\xF6delseanm\xE4lan raderades framg\xE5ngsrikt!"
,23:"Hayvan {1} ve ilgili do\u011Fum bildirimi ba\u015Far\u0131yla silindi!",24:
"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1} \u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bqe={1:"\u017Divotinja {1} i odgovaraju\u0107e obavje\u0161tenje o kupovini su "+
"uspje\u0161no izbrisani!",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E {1} \u0438 \u0441\u044A\u043E\u0442\u0432\u0435\u0442\u043D\u043E\u0442\u043E "+
"\u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435 \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 "+
"\u0431\u044F\u0445\u0430 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u52D5\u7269 {1} \u53CA\u5176\u76F8\u95DC\u8CFC\u8CB7\u901A\u77E5\u5DF2\u6210\u529F\u522A\u9664\uFF01"
,25:"\u017Divotinja {1} i odgovaraju\u0107a obavijest o kupnji uspje\u0161no "+"su izbrisane!"
,4:"Zv\xED\u0159e {1} a p\u0159\xEDslu\u0161n\xE9 ozn\xE1men\xED o koupi byly "+
"\xFAsp\u011B\u0161n\u011B smaz\xE1ny!",5:"Dyr {1} og tilh\xF8rende k\xF8bsmeddelelse blev slettet succesfuldt!"
,0:"Animal {1} and corresponding purchase notice were deleted successfully!",6:"Dier {1} en bijbehorende koop is succesvol verwijderd"
,7:"Looma {1} ja vastav ostuteade kustutati edukalt!",8:"El\xE4in {1} ja vastaava ostoilmoitus poistettiin onnistuneesti!"
,9:"L\'animal {1} et sa d\xE9claration d\'achat ont \xE9t\xE9 supprim\xE9s "+"avec succ\xE8s\xA0!"
,10:"Tier {1} samt Zugangsmeldung wurde erfolgreich gel\xF6scht!",11:"\u03A4\u03BF \u03B6\u03CE\u03BF {1} \u03BA\u03B1\u03B9 \u03B7 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03BF\u03B9\u03C7\u03B7 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!"
,12:"Az \xE1llat {1} \xE9s a hozz\xE1 tartoz\xF3 v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9s "+
"sikeresen t\xF6r\xF6lve lett!",13:"L\'animale {1} e il relativo avviso di acquisto sono stati eliminati con "+
"successo!",15:"Dz\u012Bvnieks {1} un atbilsto\u0161s pirkuma pazi\u0146ojums tika veiksm\u012Bgi "+
"izdz\u0113sti!",26:"Gyv\u016Bnas {1} ir atitinkamas pirkimo prane\u0161imas buvo s\u0117kmingai "+
"i\u0161trinti!",16:"Dyret {1} og tilh\xF8rende kj\xF8psmelding ble slettet!",17:
"Zwierz\u0119 {1} oraz odpowiadaj\u0105ce mu powiadomienie o zakupie zosta\u0142y "+
"pomy\u015Blnie usuni\u0119te!",18:"Animal {1} e aviso de compra correspondente foram exclu\xEDdos com sucesso!"
,19:"Animalul {1} \u0219i anun\u021Bul de cump\u0103rare corespunz\u0103tor "+"au fost \u0219terse cu succes!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1} \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+"\u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B!",27:"\u017Dival {1} in ustrezen nakupni nalog sta bila uspe\u0161no izbrisana!"
,21:"\xA1El animal {1} y la correspondiente notificaci\xF3n de compra fueron "+"eliminados con \xE9xito!"
,22:"Djur {1} och motsvarande k\xF6pmeddelande raderades framg\xE5ngsrikt!",23:"Hayvan {1} ve ilgili sat\u0131n alma bildirimi ba\u015Far\u0131yla silindi!"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1} \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0431\u0443\u043B\u0438 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456!"
};C.SuccessUnregisterPerished={1:"Uginuta \u017Eivotinja sa ID brojem {1} uspje\u0161no odjavljena!"
,2:"\u0423\u043C\u0440\u044F\u043B\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0441 \u2116 {1} \u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0438\u0441\u0430\u043D\u043E!"
,3:"\u5E36\u6709 ID {1} \u7684\u6B7B\u4EA1\u52D5\u7269\u5DF2\u6210\u529F\u53D6\u6D88\u767B\u8A18\uFF01"
,25:"Uginula \u017Eivotinja s ID-jem {1} uspje\u0161no je odjavljena!",4:"Zv\xED\u0159e s ID {1} bylo \xFAsp\u011B\u0161n\u011B odhl\xE1\u0161eno!"
,5:"D\xF8dt dyr med ID {1} er blevet afmeldt med succes!",0:"Perished animal with ID {1} successfully unregistered!"
,6:"Omgekomen dier met nummer {1} is succesvol verwijderd",7:"Kadunud loom ID {1} niekirjast edukalt maas"
,8:"Kuolleen el\xE4imen, jonka tunnus on {1}, rekisterist\xE4 poisto onnistui!",
9:"L\u2019animal mort avec ID {1} a \xE9t\xE9 d\xE9sactiv\xE9 avec succ\xE8s\xA0!"
,10:"Verendetes Tier mit ID {1} wurde erfolgreich abgemeldet!",11:"\u03A4\u03BF \u03C0\u03B5\u03B8\u03B1\u03BC\u03AD\u03BD\u03BF \u03B6\u03CE\u03BF "+
"\u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!"
,12:"Azonos\xEDt\xF3val {1} rendelkez\u0151 elhullott \xE1llat sikeresen leiratkozott!"
,13:"Animale deceduto con ID {1} rimosso con successo!",15:"Dz\u012Bvnieks ar ID {1} veiksm\u012Bgi izdz\u0113sts no re\u0123istra!"
,26:"Mir\u0119s gyv\u016Bnas su ID {1} s\u0117kmingai i\u0161registruotas!",16:"D\xF8dt dyr med ID {1} ble avregistrert!"
,17:"Zwierz\u0119 o ID {1} zosta\u0142o pomy\u015Blnie wyrejestrowane!",18:"Animal perecido com ID {1} desregistrado com sucesso!"
,19:"Animalul cu ID-ul {1} a fost dez\xEEnregistrat cu succes!",20:"\u041C\u0451\u0440\u0442\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u043D\u043E\u043C\u0435\u0440 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",27:"\u017Dival z ID-jem {1} je bila uspe\u0161no odjavljena!"
,21:"El animal fallecido con ID {1} se dio de baja con \xE9xito.",22:"D\xF6tt djur med ID {1} har framg\xE5ngsrikt avregistrerats!"
,23:"{1} kimlikli telef olan hayvan\u0131n kayd\u0131 ba\u015Far\u0131yla iptal "+
"edildi!",24:"\u041C\u0435\u0440\u0442\u0432\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 "+
"{1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.Bqf={1:"Podaci o \u017Eivotinjama su uspje\u0161no zapisani u direktorij \'export-csv\' "+
"na USB flash disku.",2:"\u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0431\u044F\u0445\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u201Eexport-csv\u201C "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
,3:"\u52D5\u7269\u6578\u64DA\u5DF2\u6210\u529F\u5BEB\u5165 USB \u96A8\u8EAB\u789F\u7684 "+
"\'export-csv\' \u76EE\u9304\u4E2D\u3002",25:"Podaci o \u017Eivotinjama su uspje\u0161no zapisani u direktorij \'export-csv\' "+
"na USB memoriji.",4:"Data o zv\xED\u0159atech byla \xFAsp\u011B\u0161n\u011B zaps\xE1na do adres\xE1\u0159e "+
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
"az USB-meghajt\xF3n.",13:"I dati degli animali sono stati scritti con successo nella cartella \'export-csv\' "+
"sulla chiavetta USB.",15:"Datu par dz\u012Bvniekiem veiksm\u012Bgi ierakst\u012Bja map\u0113 \"export-csv\" "+
"USB zibatmi\u0146\u0101.",26:"Gyv\u016Bn\u0173 duomenys s\u0117kmingai \u012Fra\u0161yti \u012F aplank\u0105 "+
"\u201Eexport-csv\u201C USB atmintin\u0117je.",16:"Dyredata ble vellykket skrevet til mappen \'export-csv\' p\xE5 USB-minnepinnen."
,17:"Dane zwierz\u0119ce zosta\u0142y pomy\u015Blnie zapisane w katalogu \'export-csv\' "+
"na pendrive\'ie USB.",18:"Os dados dos animais foram gravados com sucesso no diret\xF3rio \'export-csv\' "+
"no pen drive USB.",19:"Datele despre animale au fost scrise cu succes \xEEn directorul \'export-csv\' "+
"pe memoria USB.",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B "+
"\u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \'export-csv\' \u043D\u0430 "+
"USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,27:"Podatki o \u017Eivalih so bili uspe\u0161no zapisani v mapo \'export-csv\' "+
"na USB klju\u010Dku.",21:"Los datos del animal se escribieron con \xE9xito en el directorio \'export-csv\' "+
"en la unidad flash USB.",22:"Djurdata skrevs framg\xE5ngsrikt till mappen \u2019export-csv\u2019 p\xE5 "+
"USB-minnet.",23:"Hayvan verileri USB flash s\xFCr\xFCc\xFCdeki \'export-csv\' dizinine "+
"ba\u015Far\u0131yla yaz\u0131ld\u0131.",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E "+
"\u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \'export-csv\' \u043D\u0430 "+
"USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456."
};C.Bqg={1:"Podaci o \u017Eivotinjama su uspje\u0161no zapisani na USB flash disk! "+
"\u017Delite li sada preuzeti datoteku \'animals.csv\'?",2:"\u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435 "+
"\u0431\u044F\u0445\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043D\u0430 USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E! "+
"\u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0444\u0430\u0439\u043B\u0430 "+
"\u0441 \u0434\u0430\u043D\u043D\u0438 \u201Eanimals.csv\u201C \u0441\u0435\u0433\u0430?"
,3:"\u52D5\u7269\u6578\u64DA\u5DF2\u6210\u529F\u5BEB\u5165 USB \u96A8\u8EAB\u789F\uFF01\u73FE\u5728\u8981\u4E0B\u8F09\u6578\u64DA\u6A94\u6848\u300Canimals.csv\u300D\u55CE\uFF1F"
,25:"Podaci o \u017Eivotinjama su uspje\u0161no zapisani na USB stick! \u017Delite "+
"li sada preuzeti datoteku \'animals.csv\'?",4:"Data o zv\xED\u0159atech byla \xFAsp\u011B\u0161n\u011B zaps\xE1na na USB "+
"flash disk! St\xE1hnout soubor s daty \'animals.csv\' nyn\xED?",5:"Dyredata blev succesfuldt skrevet til USB-n\xF8gle! Download datafilen "+
"\'animals.csv\' nu?",0:"Animal data were successfully written to USB flash drive! Download data "+
"file \u2019animals.csv\u2019  now?",6:"Dierdata is succesvol naar USB data geschreven. Download Data bestand \u2019animals.csv\u2019 "+
"nu?",7:"Loomade andmed on edukalt USBm\xE4lupulgale kirjutatud! Kas laadida n\xFC\xFCd "+
"alla andmefail \"animals.csv\"?",8:"El\xE4inten tiedot kirjoitettiin USB-muistitikulle onnistuneesti! Ladataanko "+
"datatiedosto \'animals.csv\' nyt?",9:"Les donn\xE9es des animaux ont \xE9t\xE9 export\xE9es avec succ\xE8s sur "+
"la cl\xE9 USB. Le fichier CSV des donn\xE9es animales doit-il \xEAtre t\xE9l\xE9charg\xE9 "+
"maintenant\xA0?",10:"Tierdaten wurden erfolgreich auf den USB-Stick exportiert. Soll die CSV-Tierdaten~datei "+
"jetzt heruntergeladen werden?",11:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF USB "+"flash drive! \u039D\u03B1 \u03BA\u03B1\u03C4\u03B5\u03B2\u03AC\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03C4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \'animals.csv\';"
,12:"Az \xE1llatadatok sikeresen ker\xFCltek \xEDr\xE1sra az USB pendrive-ra! "+
"Let\xF6lten\xE9 most az \'animals.csv\' adatf\xE1jlt?",13:"I dati degli animali sono stati scritti con successo sulla chiavetta USB! "+
"Scaricare ora il file di dati \'animals.csv\'?",15:"Datu par dz\u012Bvniekiem veiksm\u012Bgi ierakst\u012Bti USB zibatmi\u0146\u0101! "+
"Vai tagad lejupiel\u0101d\u0113t datu failu \"animals.csv\"?",26:"Gyv\u016Bn\u0173 duomenys s\u0117kmingai \u012Fra\u0161yti \u012F USB "+
"atmintin\u0119! Ar norite dabar atsisi\u0173sti duomen\u0173 fail\u0105 "+"\u201Eanimals.csv\u201C?"
,16:"Dyredata ble vellykket lagret p\xE5 USB-minnepinnen! Vil du laste ned "+"datafilen \'animals.csv\' n\xE5?"
,17:"Dane o zwierz\u0119tach zosta\u0142y pomy\u015Blnie zapisane na pendrive "+
"USB! Czy pobra\u0107 teraz plik danych \'animals.csv\'?",18:"Os dados dos animais foram gravados com sucesso no pen drive USB! Deseja "+
"baixar o arquivo de dados \'animals.csv\' agora?",19:"Datele despre animale au fost salvate cu succes pe memoria USB! Desc\u0103rca\u021Bi "+
"fi\u0219ierul de date \'animals.csv\' acum?",20:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B "+
"\u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443! \u0421\u043A\u0430\u0447\u0430\u0442\u044C "+
"\u0444\u0430\u0439\u043B \u0434\u0430\u043D\u043D\u044B\u0445 \"animals.csv\" "+
"\u0441\u0435\u0439\u0447\u0430\u0441?",27:"Podatki o \u017Eivalih so bili uspe\u0161no zapisani na USB klju\u010Dek! "+
"Ali \u017Eelite zdaj prenesti datoteko \'animals.csv\'?",21:"Los datos del animal se escribieron con \xE9xito en la unidad flash USB. "+
"\xBFDeseas descargar el archivo de datos \'animals.csv\' ahora?",22:"Djurdata har framg\xE5ngsrikt sparats p\xE5 USB-minne! Vill du ladda ner "+
"datafilen \u2019animals.csv\u2019 nu?",23:"Hayvan verileri ba\u015Far\u0131yla USB flash s\xFCr\xFCc\xFCye yaz\u0131ld\u0131! "+
"\'animals.csv\' veri dosyas\u0131 \u015Fimdi indirilsin mi?",24:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E "+
"\u043D\u0430 USB \u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447! "+
"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B "+
"\u0434\u0430\u043D\u0438\u0445 \'animals.csv\' \u0437\u0430\u0440\u0430\u0437?"
};C.Baa={1:"CSV datoteka sa {1} obavijest(i) o ro\u0111enju uspje\u0161no je zapisana "+
"u mapu \'{2}\' na USB flash disku.",2:"CSV \u0444\u0430\u0439\u043B\u044A\u0442, \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0449 "+
"{1} \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F \u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435, "+
"\u0431\u0435\u0448\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0432 \u043F\u0430\u043F\u043A\u0430 \u201E{2}\u201C \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
,3:"CSV \u6A94\u6848\u5305\u542B {1} \u500B\u51FA\u751F\u901A\u77E5\u5DF2\u6210\u529F\u5BEB\u5165\u5230 "+
"USB \u96A8\u8EAB\u789F\u7684 \'{2}\' \u8CC7\u6599\u593E\u4E2D\u3002",25:"CSV datoteka s {1} obavijest(i) o ro\u0111enju uspje\u0161no je spremljena "+
"u mapu \'{2}\' na USB memoriji.",4:"CSV soubor s {1} ozn\xE1men\xEDm(i) o narozen\xED byl \xFAsp\u011B\u0161n\u011B "+
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
,13:"Il file CSV con {1} annuncio(i) di nascita \xE8 stato scritto con successo "+
"nella cartella \'{2}\' sulla chiavetta USB.",15:"CSV fails ar {1} dzim\u0161anas pazi\u0146ojumu(-iem) tika veiksm\u012Bgi "+
"ierakst\u012Bts map\u0113 \'{2}\' USB zibatmi\u0146\u0101.",26:"CSV failas su {1} gimimo prane\u0161imu (-ais) s\u0117kmingai \u012Fra\u0161ytas "+
"\u012F aplank\u0105 \'{2}\' USB atmintin\u0117je.",16:"CSV-fil med {1} f\xF8dselsmelding(er) ble vellykket skrevet til mappen "+
"\'{2}\' p\xE5 USB-minnepinnen.",17:"Plik CSV z {1} zawiadomieniem(ienia) o narodzinach zosta\u0142 pomy\u015Blnie "+
"zapisany w folderze \'{2}\' na pendrive\'ie.",18:"O arquivo CSV com {1} aviso(s) de nascimento foi gravado com sucesso na "+
"pasta \'{2}\' no pen drive USB.",19:"Fi\u0219ierul CSV cu {1} anun\u021B(uri) de na\u0219tere a fost scris "+
"cu succes \xEEn dosarul \'{2}\' pe memoria USB.",20:"CSV \u0444\u0430\u0439\u043B \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 "+
"{1} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+"\u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,27:"CSV datoteka z {1} obvestilom(a) o rojstvu je bila uspe\u0161no zapisana "+
"v mapo \'{2}\' na USB klju\u010Dku.",21:"\xA1El archivo CSV que contiene {1} notificaci\xF3n(es) de nacimiento "+
"fue escrito con \xE9xito en la carpeta \'{2}\' en la unidad flash USB!",22:"CSV-filen med {1} f\xF6delsemeddelande(n) skrevs framg\xE5ngsrikt till "+
"mappen \'{2}\' p\xE5 USB-minnet.",23:"{1} do\u011Fum bildirimini i\xE7eren CSV dosyas\u0131, USB flash s\xFCr\xFCc\xFCdeki "+
"\'{2}\' klas\xF6r\xFCne ba\u015Far\u0131yla yaz\u0131ld\u0131.",24:"CSV \u0444\u0430\u0439\u043B \u0432\u043C\u0456\u0449\u0443\u044E\u0447\u0438\u0439 "+
"{1} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447."
};C.Bqh={1:"CSV datoteka s obavijestima o ro\u0111enju uspje\u0161no je zapisana na "+
"USB flash disk! \u017Delite li sada preuzeti generiranu CSV datoteku?",2:"CSV \u0444\u0430\u0439\u043B \u0441 \u0431\u0435\u043B\u0435\u0436\u043A\u0438 "+
"\u0437\u0430 \u0440\u0430\u0436\u0434\u0430\u043D\u0435, \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB \u0444\u043B\u0430\u0448\u043A\u0430! "+
"\u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 \u043D\u0430 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0430\u043D\u0438\u044F "+
"CSV \u0444\u0430\u0439\u043B \u0441\u0435\u0433\u0430?",3:"CSV \u6A94\u6848\u5305\u542B\u51FA\u751F\u901A\u77E5\u5DF2\u6210\u529F\u5BEB\u5165 "+
"USB \u96A8\u8EAB\u789F\uFF01\u73FE\u5728\u4E0B\u8F09\u7522\u751F\u7684 "+"CSV \u6A94\u6848\u55CE\uFF1F"
,25:"CSV datoteka s obavijestima o ro\u0111enju uspje\u0161no je spremljena "+"na USB memoriju! \u017Delite li sada preuzeti generiranu CSV datoteku?"
,4:"Soubor CSV s ozn\xE1men\xEDmi o narozen\xED byl \xFAsp\u011B\u0161n\u011B "+
"zaps\xE1n na USB flash disk! St\xE1hnout vygenerovan\xFD soubor CSV nyn\xED?",5:
"CSV-fil med f\xF8dselsannoncer er succesfuldt skrevet til USB-n\xF8gle! "+"Vil du downloade den genererede CSV-fil nu?"
,0:"CSV file with birth notices successfully written to USB flash drive! Download "+
"generated CSV file now?",6:"CSV bestand met geboorte meldingen is succesvol op de USB gezet Download "+
"gemaakt CSV bestand nu?",7:"CSV-fail s\xFCnniteadetega on edukalt USB-m\xE4lupulgale kirjutatud! Kas "+
"laadida loodud CSV-fail n\xFC\xFCd alla?",8:"CSV-tiedosto, jossa syntym\xE4ilmoitukset on kirjoitettu USB-muistitikulle "+
"onnistuneesti! Ladataanko luotu CSV-tiedosto nyt?",9:"Fichier CSV avec d\xE9claration de naissance ont \xE9t\xE9 enregistr\xE9 "+
"avec succ\xE8s sur une cl\xE9 USB\xA0! Souhaitez-vous t\xE9l\xE9charger "+"le fichier CSV\xA0?"
,10:"CSV-Datei mit Ge~burts~mel~dun~g(en) erfolgreich auf USB-^Stick gespeichert! "+
"M\xF6chten Sie die erzeugte CSV-^Datei herunter~laden?",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 \u03C4\u03B9\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03B9\u03C2 \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF USB "+"flash drive! \u039D\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03BB\u03AE\u03C8\u03B7 "+
"\u03C4\u03BF\u03C5 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03BC\u03AD\u03BD\u03BF\u03C5 "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 CSV \u03C4\u03CE\u03C1\u03B1;",12:"CSV f\xE1jl sz\xFClet\xE9si \xE9rtes\xEDt\xE9sekkel sikeresen ki\xEDrva "+
"USB pendrive-ra! Let\xF6lten\xE9 a l\xE9trehozott CSV f\xE1jlt most?",13:"File CSV con annunci di nascita scritto con successo su chiavetta USB! "+
"Scaricare il file CSV generato ora?",15:"CSV fails ar dzim\u0161anas pazi\u0146ojumiem veiksm\u012Bgi ierakst\u012Bts "+
"USB zibatmi\u0146\u0101! Vai tagad lejupiel\u0101d\u0113t \u0123ener\u0113to "+
"CSV failu?",26:"CSV failas su gimimo prane\u0161imais s\u0117kmingai \u012Fra\u0161ytas "+
"\u012F USB atmintin\u0119! Ar norite dabar atsisi\u0173sti sugeneruot\u0105 "+"CSV fail\u0105?"
,16:"CSV-fil med f\xF8dselsmeldinger er vellykket skrevet til USB-minnepinne! "+
"Laste ned generert CSV-fil n\xE5?",17:"Plik CSV z og\u0142oszeniami o narodzinach zosta\u0142 pomy\u015Blnie "+
"zapisany na pendrive\'ie! Czy pobra\u0107 wygenerowany plik CSV teraz?",18:"Arquivo CSV com avisos de nascimento gravado com sucesso em pendrive USB! "+
"Baixar o arquivo CSV gerado agora?",19:"Fi\u0219ierul CSV cu anun\u021Burile de na\u0219tere a fost scris cu succes "+
"pe memoria USB! Dori\u021Bi s\u0103 desc\u0103rca\u021Bi fi\u0219ierul "+"CSV generat acum?"
,20:"CSV \u0444\u0430\u0439\u043B \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB "+"\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C! \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+
"\u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"CSV \u0444\u0430\u0439\u043B?",27:"CSV datoteka z obvestili o rojstvih je uspe\u0161no zapisana na USB klju\u010Dek! "+
"Prenesete generirano CSV datoteko zdaj?",21:"\xA1El archivo CSV con las notificaciones de nacimientos fue escrito con "+
"\xE9xito en la unidad flash USB! \xBFDesea descargar el archivo CSV generado "+
"ahora?",22:"CSV-fil med f\xF6delsemeddelanden har framg\xE5ngsrikt skrivits till USB-minne! "+
"Vill du ladda ner den genererade CSV-filen nu?",23:"Do\u011Fum bildirimlerini i\xE7eren CSV dosyas\u0131 ba\u015Far\u0131yla "+
"USB flash s\xFCr\xFCc\xFCye yaz\u0131ld\u0131! Olu\u015Fturulan CSV dosyas\u0131 "+
"\u015Fimdi indirilsin mi?",24:"CSV \u0444\u0430\u0439\u043B \u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447! "+
"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0441\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 "+
"CSV \u0444\u0430\u0439\u043B?"};C.Bab={1:"CSV datoteka s {1} obavijest(i) o kupovini je uspje\u0161no zapisana u "+
"folder \'{2}\' na USB flash disku.",2:"CSV \u0444\u0430\u0439\u043B\u044A\u0442, \u0441\u044A~\u0434\u044A\u0440\u0436\u0430\u0449 "+
"{1} \u0438\u0437~\u0432\u0435\u0441~\u0442\u0438\u044F \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430, "+
"\u0431\u0435\u0448\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0432 \u043F\u0430\u043F\u043A\u0430 \u201E{2}\u201C \u043D\u0430 USB "+"\u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
,3:"\u5DF2\u6210\u529F\u5C07\u5305\u542B {1} \u7B46\u8CFC\u8CB7\u901A\u77E5\u7684 "+
"CSV \u6A94\u6848\u5BEB\u5165 USB \u96A8\u8EAB\u789F\u7684 \'{2}\' \u8CC7\u6599\u593E\u4E2D\u3002"
,25:"CSV datoteka s {1} obavijest(i) o kupnji uspje\u0161no je zapisana u mapu "+
"\'{2}\' na USB memoriji.",4:"Soubor CSV s {1} ozn\xE1men\xEDm(i) o n\xE1kupu byl \xFAsp\u011B\u0161n\u011B "+
"zaps\xE1n do slo\u017Eky \'{2}\' na USB flash disku.",5:"CSV-fil med {1} k\xF8bsmeddelelse(r) blev succesfuldt skrevet til mappen "+
"\'{2}\' p\xE5 USB-n\xF8gle.",0:"CSV file with {1} pur~chase notice(s) was successfully written to folder "+
"\'{2}\' on USB flash drive.",6:"CSV-bestand met {1} aankoopmel~din~g(en) is succesvol weggeschreven naar "+
"map \u2019{2}\u2019 op USB-stick.",7:"CSV-fail, milles on {1} ostuteadet, kirjutati edukalt kausta \'{2}\' USB "+
"m\xE4lupulgal.",8:"CSV-tiedosto, joka sis\xE4lt\xE4\xE4 {1} ostoilmoitusta, kirjoitettiin "+
"onnistuneesti USB-muistitikulla olevaan kansioon {2}.",9:"Fichier CSV avec {1} donn\xE9e(s) d\u2019achat est enregistr\xE9e(s) avec "+
"succ\xE8s dans le r\xE9pertoire \u2019{2}\u2019 de la cl\xE9 USB.",10:"CSV-Datei mit {1} Zu~gangs~mel~dun~g(en) erfolgreich im Verzeichnis \'{2}\' "+
"auf dem USB-^Stick gespeichert.",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 {1} "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7(\u03B5\u03B9\u03C2) "+
"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF\u03BD "+"\u03C6\u03AC\u03BA\u03B5\u03BB\u03BF \'{2}\' \u03C3\u03B5 USB flash drive."
,12:"A(z) {1} v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9st tartalmaz\xF3 CSV f\xE1jl "+
"sikeresen el lett mentve a(z) \'{2}\' mapp\xE1ba az USB-meghajt\xF3n.",13:"Il file CSV con {1} avviso(i) di acquisto \xE8 stato scritto con successo "+
"nella cartella \'{2}\' su chiavetta USB.",15:"CSV fails ar {1} pirkumu pazi\u0146ojumu(-iem) veiksm\u012Bgi tika ierakst\u012Bts "+
"map\u0113 \'{2}\' USB zibatmi\u0146\u0101.",26:"CSV failas su {1} pirkimo prane\u0161imu (-ais) s\u0117kmingai \u012Fra\u0161ytas "+
"\u012F aplank\u0105 \'{2}\' USB atmintin\u0117je.",16:"CSV-fil med {1} kj\xF8psmelding(er) ble vellykket skrevet til mappen \'{2}\' "+
"p\xE5 USB-minnepinnen.",17:"Plik CSV z {1} powiadomieniem(ieniami) o zakupie zosta\u0142 pomy\u015Blnie "+
"zapisany w folderze \'{2}\' na pendrive\'ie USB.",18:"O arquivo CSV com {1} aviso(s) de compra foi gravado com sucesso na pasta "+
"\'{2}\' no pen drive USB.",19:"Fi\u0219ierul CSV cu {1} notificare(i) de achizi\u021Bie a fost scris "+
"cu succes \xEEn dosarul \'{2}\' pe memoria USB.",20:"CSV-\u0444\u0430\u0439\u043B \u0441 {1} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C(\u044F\u043C\u0438) "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0432 \u043F\u0430\u043F\u043A\u0443 "+
"\'{2}\' \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,27:"CSV datoteka z {1} obvestilom(i) o nakupu je bila uspe\u0161no zapisana "+"v mapo \'{2}\' na USB klju\u010Dku."
,21:"\xA1El archivo CSV que contiene {1} notificaci\xF3n(es) de compra fue "+"escrito con \xE9xito en la carpeta \'{2}\' en la unidad flash USB!"
,22:"CSV-filen med {1} k\xF6pavisering(ar) skrevs framg\xE5ngsrikt till mappen "+
"\'{2}\' p\xE5 USB-minnet.",23:"{1} sat\u0131n alma bildirimini i\xE7eren CSV dosyas\u0131, USB flash "+
"s\xFCr\xFCc\xFCs\xFCndeki \'{2}\' klas\xF6r\xFCne ba\u015Far\u0131yla "+"yaz\u0131ld\u0131."
,24:"CSV-\u0444\u0430\u0439\u043B \u0437 {1} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C(\u043C\u0438) "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 \u043F\u0430\u043F\u043A\u0443 "+
"\'{2}\' \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456."
};C.Bqi={1:"CSV datoteka s obavijestima o kupovini uspje\u0161no je zapisana na USB "+
"flash disk! Preuzmite generiranu CSV datoteku sada?",2:"CSV \u0444\u0430\u0439\u043B \u0441 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044F "+
"\u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430, \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB \u0444\u043B\u0430\u0448 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E! \u0418\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435 "+
"\u043D\u0430 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0430\u043D\u0438\u044F "+
"CSV \u0444\u0430\u0439\u043B \u0441\u0435\u0433\u0430?",3:"\u5DF2\u6210\u529F\u5C07\u8CFC\u8CB7\u901A\u77E5\u7684 CSV \u6A94\u6848\u5BEB\u5165 "+
"USB \u96A8\u8EAB\u789F\uFF01\u73FE\u5728\u4E0B\u8F09\u7522\u751F\u7684 "+"CSV \u6A94\u6848\u55CE\uFF1F"
,25:"CSV datoteka s obavijestima o kupnji uspje\u0161no je zapisana na USB "+"stick! \u017Delite li sada preuzeti generiranu CSV datoteku?"
,4:"Soubor CSV s ozn\xE1men\xEDmi o n\xE1kupu byl \xFAsp\u011B\u0161n\u011B "+"zaps\xE1n na USB flash disk! Chcete nyn\xED st\xE1hnout vygenerovan\xFD "+
"soubor CSV?",5:"CSV-fil med k\xF8bsmeddelelser er blevet succesfuldt skrevet til USB-n\xF8gle! "+
"Vil du downloade den genererede CSV-fil nu?",0:"CSV file with purchase notices successfully written to USB flash drive! "+
"Download generated CSV file now?",6:"CSV-bestand met aankoopmeldin~gen succesvol weggeschreven naar USB-stick! "+
"Nu gegenereerd CSV-bestand downloaden?",7:"CSV-fail ostuteadetega on edukalt USB-m\xE4lupulgale kirjutatud! Kas soovite "+
"loodud CSV-faili n\xFC\xFCd alla laadida?",8:"CSV-tiedosto, jossa ostoilmoitukset on kirjoitettu USB-muistitikulle onnistuneesti! "+
"Ladataanko luotu CSV-tiedosto nyt?",9:"Le fichier CSV avec les donn\xE9es d\'achats a \xE9t\xE9 enregistr\xE9 "+
"avec succ\xE8s sur la cl\xE9 USB\xA0! Souhaitez-vous t\xE9l\xE9charger "+"le fichier CSV g\xE9n\xE9r\xE9\xA0?"
,10:"CSV-Datei mit Zu~gangs~mel~dun~g(en) erfolgreich auf USB-Stick gespeichert! "+
"M\xF6chten Sie die erzeugte CSV-^Datei herunter~laden?",11:"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF CSV \u03BC\u03B5 \u03C4\u03B9\u03C2 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+"\u03B1\u03B3\u03BF\u03C1\u03AC\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03BF USB "+"flash drive! \u039D\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 \u03BB\u03AE\u03C8\u03B7 "+
"\u03C4\u03BF\u03C5 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03BC\u03AD\u03BD\u03BF\u03C5 "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF\u03C5 CSV \u03C4\u03CE\u03C1\u03B1;",12:"CSV f\xE1jl a v\xE1s\xE1rl\xE1si \xE9rtes\xEDt\xE9sekkel sikeresen l\xE9trehozva "+
"az USB meghajt\xF3n! Szeretn\xE9 let\xF6lteni a gener\xE1lt CSV f\xE1jlt "+"most?"
,13:"File CSV con notifiche di acquisto scritto con successo su chiavetta USB! "+
"Scaricare ora il file CSV generato?",15:"CSV fails ar pirkumu pazi\u0146ojumiem veiksm\u012Bgi ierakst\u012Bts "+
"USB zibatmi\u0146\u0101! Vai lejupiel\u0101d\u0113t \u0123ener\u0113to "+"CSV failu tagad?"
,26:"CSV failas su pirkimo prane\u0161imais s\u0117kmingai \u012Fra\u0161ytas "+
"\u012F USB atmintin\u0119! Ar norite dabar atsisi\u0173sti sugeneruot\u0105 "+"CSV fail\u0105?"
,16:"CSV-fil med kj\xF8psmeldinger er lagret p\xE5 USB-minnepinnen! Vil du "+"laste ned den genererte CSV-filen n\xE5?"
,17:"Plik CSV z powiadomieniami o zakupie zosta\u0142 pomy\u015Blnie zapisany "+
"na pendrive USB! Czy chcesz teraz pobra\u0107 wygenerowany plik CSV?",18:"Arquivo CSV com avisos de compra gravado com sucesso no pen drive USB! "+
"Baixar o arquivo CSV gerado agora?",19:"Fi\u0219ierul CSV cu notific\u0103ri de achizi\u021Bie a fost scris cu "+
"succes pe unitatea USB! Desc\u0103rca\u021Bi fi\u0219ierul CSV generat "+"acum?"
,20:"CSV-\u0444\u0430\u0439\u043B \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u0445 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB-\u0444\u043B\u0435\u0448-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C! "+
"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"CSV-\u0444\u0430\u0439\u043B \u0441\u0435\u0439\u0447\u0430\u0441?",27:"CSV datoteka z obvestili o nakupu je uspe\u0161no zapisana na USB klju\u010Dek! "+
"Ali \u017Eelite zdaj prenesti ustvarjeno CSV datoteko?",21:"\xA1El archivo CSV con las notificaciones de compra fue escrito con \xE9xito "+
"en la unidad flash USB! \xBFDesea descargar el archivo CSV generado ahora?",22:
"CSV-fil med k\xF6paviseringar har skrivits till USB-minne! Vill du ladda "+"ner den genererade CSV-filen nu?"
,23:"Sat\u0131n alma bildirimlerini i\xE7eren CSV dosyas\u0131 ba\u015Far\u0131yla "+
"USB flash s\xFCr\xFCc\xFCye yaz\u0131ld\u0131! Olu\u015Fturulan CSV dosyas\u0131 "+
"\u015Fimdi indirilsin mi?",24:"CSV-\u0444\u0430\u0439\u043B \u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 USB-\u0444\u043B\u0435\u0448\u043A\u0443! "+
"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0439 "+
"CSV-\u0444\u0430\u0439\u043B \u0437\u0430\u0440\u0430\u0437?"};C.Surgery={1:"Operacija"
,2:"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u043D\u043E",3:"\u624B\u8853"
,25:"Kirurgija",4:"chirurgie",5:"Kirurgi",0:"Surgery",6:"operatie",7:"L\xF5ikus"
,8:"Leikkaus",9:"Chirurgie",10:"Operation",11:"\u0395\u03B3\u03C7\u03B5\u03AF\u03C1\u03B7\u03C3\u03B7"
,12:"M\u0171t\xE9t",13:"Chirurgia",15:"\u0136irur\u0123ija",26:"Chirurgija",16:"Kirurgi"
,17:"Chirurgia",18:"Cirurgia",19:"Chirurgie",20:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F"
,27:"Kirurgija",21:"Cirug\xEDa",22:"Kirurgi",23:"Ameliyat",24:"\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u044F"
};C.Bqn={1:"Slanje podataka",2:"\u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u50B3\u9001\u8CC7\u6599",25:"Slanje podataka",4:"Odes\xEDl\xE1n\xED dat",5:
"Afsendelse af data",0:"Sending data",6:"Zend data",7:"Andmete edastamine",8:"L\xE4hetet\xE4\xE4n tietoja"
,9:"Envoi de donn\xE9es",10:"Sende Daten",11:"\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatk\xFCld\xE9s",13:"Inviando dati",15:"S\u016Bt\u012Bt datus",26:"Siun\u010Diama informacija"
,16:"Sender data",17:"Wysy\u0142anie danych",18:"Enviando dados",19:"Trimiterea datelor"
,20:"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"
,27:"Po\u0161iljanje podatkov",21:"Enviando datos",22:"Skickar data",23:"Veri g\xF6nderiliyor"
,24:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u0438\u0445"
};C.Bqo={1:"Sinhronizacija nije uspjela",2:"\u041D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u0430 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
,3:"\u540C\u6B65\u5931\u6557",25:"Sinkronizacija nije uspjela",4:"Synchronizace selhala"
,5:"Synkronisering mislykkedes",0:"Synchronization failed",6:"Synchronization gefaald"
,7:"S\xFCnkroniseerimine eba\xF5nnestus",8:"L\xE4hetys Synkronointi ep\xE4onnistui"
,9:"\xC9chec du transfert de donn\xE9es",10:"Datentransfer fehlgeschlagen",11:"\u039F \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5",12:"Az \xF6sszehangol\xE1s sikertelen"
,13:"La sincronizzazione \xE8 fallita",15:"Sinhriniz\u0101cija neizdev\u0101s",26:
"Sinchronizacija nepavyko",16:"Synkronisering mislyktes",17:"Synchronizacja nie powiod\u0142a si\u0119"
,18:"A sincroniza\xE7\xE3o falhou",19:"Sincronizarea a e\u0219uat",20:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",27:"Sinhronizacija ni uspela."
,21:"Fallo en la sincronizaci\xF3n",22:"Synkronisering misslyckades",23:"Senkronizasyon ba\u015Far\u0131s\u0131z oldu"
,24:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0456\u044F "+
"\u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044C"};C.Bqp={1:"Primati podatke"
,2:"\u041F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0434\u0430\u043D\u043D\u0438",3:"\u63A5\u6536\u8CC7\u6599",25:"Primanje podataka"
,4:"P\u0159\xEDjem dat",5:"Modtager data",0:"Receiving data",6:"Ontvangen data",
7:"Andmete vastuv\xF5tmine",8:"Vastaanottaa tietoja",9:"R\xE9ception de donn\xE9es"
,10:"Empfange Daten",11:"\u03A0\u03B1\u03C1\u03B1\u03BB\u03B1\u03B2\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,12:"Adatok fogad\xE1sa",13:"Ricezione dati",15:"Sa\u0146emt datus",26:"Gaunant duomenis"
,16:"Mottar data",17:"Odbieranie danych",18:"Recebendo dados",19:"Primirea datelor"
,20:"\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"
,27:"Prejemanje podatkov",21:"Recibiendo datos",22:"Mottagning av data",23:"Veri al\u0131yor"
,24:"\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445"
};C.Bqq={1:"Pokretanje\u2026",2:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0435\u2026"
,3:"\u521D\u59CB\u5316\u4E2D\u2026",25:"Pokretanje\u2026",4:"Inicializace\u2026"
,5:"Initialisering\u2026",0:"Initialising\u2026",7:"Alustamine...",8:"Alustetaan\u2026"
,9:"Initialiser...",10:"Initialisiere\u2026",11:"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7..."
,12:"Inicializ\xE1l\xE1s\u2026",13:"Inizializzazione...",15:"Inicializ\u0113\u0161ana\u2026"
,26:"Inicijuojama\u2026",16:"Initialiserer \u2026",17:"Inicjalizacja\u2026",18:"Inicializando\u2026"
,19:"Ini\u021Bializare\u2026",20:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F..."
,27:"Za\u010Denjam\u2026",21:"Inicializando...",22:"Initierar...",23:"Ba\u015Flat\u0131l\u0131yor\u2026"
,24:"\u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F..."
};C.Bqr={1:"Inicijalizacija uvoza",2:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u521D\u59CB\u5316\u5C0E\u5165",25:"Inicijalizacija uvoza",4:"Inicializace importu"
,5:"Initialisering af import",0:"Initialising import",7:"Impordi alustamine",8:"Alustetaan tuontia"
,9:"Initialisation de l\'importation...",10:"Initialisiere Import\u2026",11:"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2",12:"Kezdeti import\xE1l\xE1s"
,13:"Inizializzazione dell\'importazione",15:"Inicializ\u0113\u0161ana import\u0113\u0161ana"
,26:"Inicijuojamas importas",16:"Initialiserer import",17:"Inicjowanie importu",
18:"Inicializando importa\xE7\xE3o",19:"Ini\u021Bializarea importului",20:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u0438\u043C\u043F\u043E\u0440\u0442\u0430",27:"Za\u010Denjam uvoz",21:"Inicializando importaci\xF3n"
,22:"Initierar import",23:"\u0130\xE7e aktarma ba\u015Flat\u0131l\u0131yor",24:"\u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F "+
"\u0456\u043C\u043F\u043E\u0440\u0442\u0443"};C.Bqs={1:"\u010Ci\u0161\u0107enje\u2026"
,2:"\u041F\u043E\u0447\u0438\u0441\u0442\u0432\u0430\u043D\u0435...",3:"\u6253\u6383\u4E2D\u2026"
,25:"\u010Ci\u0161\u0107enje\u2026",4:"Ukl\xEDz\xEDm\u2026",5:"Rydder op\u2026",
0:"Cleaning up\u2026",6:"Opschonen",7:"Impordij\xE4rgne s\xFCnkroniseerimine \u2026"
,8:"Puhdistaa \u2026",9:"Nettoyage",10:"R\xE4ume auf \u2026",11:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u2026"
,12:"Takar\xEDt\xE1s\u2026",13:"Pulendo...",15:"T\u012Br\u012B\u0161ana\u2026",26:
"Tvarkymasis...",16:"Rydder opp\u2026",17:"Sprz\u0105tanie\u2026",18:"Limpando..."
,19:"Cur\u0103\u021Benie \xEEn curs\u2026",20:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430..."
,27:"\u010Ci\u0161\u010Denje...",21:"Limpiando...",22:"St\xE4dar upp...",23:"Temizleniyor..."
,24:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430..."};C.Bqt={1:"Prijenos podataka uspje\u0161no zavr\u0161en"
,2:"\u041F\u0440\u0435\u0445\u0432\u044A\u0440\u043B\u044F\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E",3:"\u8CC7\u6599\u50B3\u8F38\u6210\u529F\u5B8C\u6210"
,25:"Prijenos podataka uspje\u0161no zavr\u0161en",4:"P\u0159enos dat \xFAsp\u011B\u0161n\u011B dokon\u010Den"
,5:"Dataoverf\xF8rsel er gennemf\xF8rt \u0443\u0441\u043F\u0435\u0448\u043D\u043E"
,0:"Data transfer successfully finished",6:"Data transfer succesvol be\xEBindigd"
,7:"Andmeedastus edukalt l\xF5petatud",8:"Tiedonsiirto onnistui",9:"Transfert de donn\xE9es termin\xE9 avec succ\xE8s"
,10:"Datentransfer erfolgreich abgeschlossen",11:"\u0397 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1"
,12:"Az adat\xE1tvitel sikeresen befejez\u0151d\xF6tt.",13:"Trasferimento dei dati completato con successo"
,15:"Datu p\u0101rs\u016Bt\u012B\u0161ana veiksm\u012Bgi pabeigta",26:"Duomen\u0173 perdavimas s\u0117kmingai baigtas"
,16:"Data overf\xF8ringen er fullf\xF8rt",17:"Przesy\u0142anie danych zako\u0144czone pomy\u015Blnie"
,18:"Transfer\xEAncia de dados conclu\xEDda com sucesso",19:"Transferul de date s-a finalizat cu succes."
,20:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430"
,27:"Prenos podatkov uspe\u0161no zaklju\u010Den",21:"Transferencia de datos finalizada con \xE9xito"
,22:"Data\xF6verf\xF6ring framg\xE5ngsrikt avslutad",23:"Veri aktar\u0131m\u0131 ba\u015Far\u0131yla tamamland\u0131"
,24:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u0438\u0445 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u0430"
};C.Od={1:"sinhronizacija u toku",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435"
,3:"\u540C\u6B65",25:"Sinkroniziranje",4:"Synchronizace",5:"Synkronisering",0:"Synchronizing"
,6:"Data overdraging",7:"S\xFCnkroonib",8:"Synkronointi",9:"Transmission",10:"Daten\xFCbertragung"
,11:"\u03A3\u03C5\u03BD\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7",12:"Szinkroniz\xE1l\xE1s"
,13:"Sincronizzando",15:"Sinhroniz\u0113\u0161ana",26:"Sinchronizuojant",16:"Synkroniserer"
,17:"Synchronizowanie",18:"Sincronizando",19:"Sincronizare",20:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"
,27:"Sinhroniziranje",21:"Sincronizando",22:"Synkronisering",23:"Senkronize ediliyor"
,24:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u0438\u0445"
};C.AHa={0:"\xB0C",8:"\xB0 C"};C.Bqu="\xB0F";C.TempMeasurement={1:"mjerenje temperature"
,2:"\u0422\u0435\u043C\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u6EAB\u5EA6\u6E2C\u91CF",25:"Mjerenje temperature",4:"M\u011B\u0159en\xED teploty"
,5:"Temperaturm\xE5ling",0:"Temp. measurement",6:"Temperatuur meting",7:"Tempertuuri m\xF5\xF5t"
,8:"L\xE4mp\xF6tila mittaus",9:"Mesure de la temp.",10:"Temperaturmessung",11:"\u039C\u03B5\u03C4\u03C1\u03AE\u03C3\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2"
,12:"H\u0151m\xE9rs\xE9kletm\xE9r\xE9s",13:"Misurazione della temperatura",15:"Temperat\u016Bras m\u0113r\u012Bjums"
,26:"Matavimas temperat\u016Bros",16:"Temp. m\xE5l",17:"Pomiar temperatury",18:"Medi\xE7\xE3o de temperatura"
,19:"M\u0103surarea temperaturii",20:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B"
,27:"Meritve temperature",21:"Medici\xF3n de temperatura",22:"Temperaturm\xE4tning"
,23:"S\u0131cakl\u0131k Ayar\u0131",24:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"
};C.An6={1:"mjerenje temperature",2:"\u0418\u0437\u043C\u0435\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,3:"\u6E2C\u91CF\u6EAB\u5EA6",25:"Izmjeri temperaturu",4:"M\u011B\u0159en\xED teploty"
,5:"Tag temperature",0:"Take temperature",6:"Temp. meten",7:"M\xF5\xF5da temperatuur"
,8:"Mittaa l\xE4mp\xF6tila",9:"Mesure de la temp\xE9rature",10:"Temp. messen",11:
"\u03A0\u03AC\u03C1\u03C4\u03B5 \u03C4\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1"
,12:"H\u0151m\xE9rs\xE9kletet m\xE9r",13:"Prendere la temperatura",15:"Izm\u0113r\u012Bt temperat\u016Bru"
,26:"Paimkite temperat\u016Br\u0105",16:"Ta temperaturen",17:"Zmierz temperatur\u0119"
,18:"Tomar a temperatura",19:"Lua\u021Bi temperatura",20:"\u0418\u0437\u043C\u0435\u0440\u0438\u0442\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443"
,27:"Izmeri temperaturo",21:"Medir temperatura",22:"Ta temperaturen",23:"S\u0131cakl\u0131\u011F\u0131 Al"
,24:"\u0412\u0438\u043C\u0456\u0440\u044F\u0442\u0438"};C.Temperature={1:"temperatura"
,2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",3:"\u6EAB\u5EA6"
,25:"Temperatura",4:"Teplota",5:"Temperatur",0:"Temperature",6:"Temperatuur",7:"Temperatuur"
,8:"L\xE4mp\xF6tila",9:"Temp\xE9rature",10:"Temperatur",11:"\u0398\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1"
,12:"H\u0151m\xE9rs\xE9klet",13:"Temperatura",15:"Temperat\u016Bra",26:"Temperat\u016Bra"
,16:"Temperatur",17:"L\xE4mp\xF6tila",18:"Temperatura",19:"Temperatur\u0103",20:
"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",27:"Temperatura"
,21:"Temperatura",22:"Temperatur",23:"S\u0131cakl\u0131k",24:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Bag={1:"ocjenjivanje t.",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438 "+
"\u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438",3:"\u81E8\u6642\u6210\u7E3E"
,25:"Privremeni rezultati",4:"Do\u010Dasn\xE9 sk\xF3re",5:"Temp. scorer",0:"Temp. scores"
,7:"Temperat. hinang",8:"L\xE4mp\xF6tila pisteet",9:"Eval. temp\xE9rature",10:"Bewertung T."
,11:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2",12:"Ideiglenes pontsz\xE1mok"
,13:"Punteggi temporanei",15:"Temp. rezult\u0101ti",26:"Laikini \u012Fvertinimai"
,16:"Temp. score",17:"Wyniki tymczasowe.",18:"Pontua\xE7\xF5es tempor\xE1rias",19:
"Scoruri temporare.",20:"\u041E\u0446\u0435\u043D\u043A\u0430 \u0442\u0435\u043C\u043F."
,27:"Rezultati temp.",21:"Valoraci\xF3n T.",22:"Tempor\xE4ra po\xE4ng",23:"S\u0131cakl\u0131k Puan\u0131"
,24:"\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0435\u043C\u043F."};C.AHg={1:"grani\u010Dne vrijednosti"
,2:"\u041F\u0440\u0430\u0433\u043E\u0432\u0435",3:"\u9580\u6ABB",25:"Pragovi",4:
"Prahov\xE9 hodnoty",5:"T\xE6rskler",0:"Thresholds",6:"Drempelwaardes",7:"K\xFCnnised"
,8:"Kynnysarvot",9:"Seuil",10:"Schwellenwerte",11:"\u039A\u03B1\u03C4\u03CE\u03C4\u03B1\u03C4\u03B1 \u03CC\u03C1\u03B9\u03B1"
,12:"K\xFCsz\xF6b\xF6k",13:"Soglie",15:"Sliek\u0161\u0146i",26:"Slenks\u010Diai"
,16:"Terskler",17:"Progi",18:"Limites",19:"Praguri",20:"\u041F\u0440\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
,27:"Pragovi",21:"Valores umbrales",22:"Tr\xF6sklar",23:"Alt s\u0131n\u0131r",24:
"\u0413\u0440\u0430\u043D\u0438\u0447\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Bs={1:"vrijeme",2:"\u0427\u0430\u0441",3:"\u6642\u9593",25:"Vrijeme",4:"\u010Cas"
,5:"Tid",0:"Time",6:"Tijd",7:"Aeg",8:"Aika",9:"L\u2019heure",10:"Uhrzeit",11:"\u038F\u03C1\u03B1"
,12:"Id\u0151",13:"Tempo",15:"Laiks",26:"Laikas",16:"Tid",17:"Czas",18:"Tempo",19:
"Timp",20:"\u0412\u0440\u0435\u043C\u044F",27:"\u010Cas",21:"Hora",22:"Tid",23:"Saat"
,24:"\u0427\u0430\u0441"};C.AhU={1:"danas",2:"\u0414\u043D\u0435\u0441",3:"\u4ECA\u65E5"
,25:"Danas",4:"Dnes",5:"I dag",0:"Today",6:"Vandaag",7:"T\xE4na",8:"T\xE4n\xE4\xE4n"
,9:"Aujourd\u2019hui",10:"Heute",11:"\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1",12:"Ma"
,13:"oggi",15:"\u0160odien",26:"\u0160iandien",16:"I dag",17:"Dzisiaj",18:"Hoje"
,19:"Ast\u0103zi",20:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",27:"Danes",21:
"Hoy",22:"Idag",23:"Bug\xFCn",24:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"
};C.AVH={1:"promjeniti status alarma",2:"\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0430\u043B\u0430\u0440\u043C\u0430\u0442\u0430",3:"\u5207\u63DB\u8B66\u5831\u72C0\u614B"
,25:"Promijeni status alarma",4:"P\u0159epnout stav alarmu",5:"Skift alarmstatus"
,0:"Toggle alarm status",6:"Schakel alarmstatus",7:"Hoiatuse \xFCmberl\xFClitamine"
,8:"Vaihda h\xE4lytyksen tila",9:"Modifier statut de l\u2019alarme",10:"Alarmstatus \xE4ndern"
,11:"\u0395\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7\u03C2 "+
"\u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD",12:"Kapcsold ki/be az \xE9breszt\xE9st"
,13:"Attiva/disattiva lo stato dell\'allarme",15:"P\u0101rsl\u0113gt trauksmes st\u0101vokli"
,26:"\u012Ejungti/i\u0161jungti signalizacij\u0105",16:"Bytt alarmstatus",17:"Prze\u0142\u0105cz status alarmu"
,18:"Alternar status do alarme",19:"Comutare statut alarm\u0103",20:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0442\u0440\u0435\u0432\u043E\u0433\u0438",27:"Preklopi stanje alarma",21:"Cambiar estado alarma"
,22:"Aktivera/Inaktivera larmstatus",23:"Alarm durumunu de\u011Fi\u015Ftir",24:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0442\u0440\u0438\u0432\u043E\u0433\u0438"};C.AVJ={1:"Promijeni status pra\u0107enja"
,2:"\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 "+"\u043D\u0430 \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0447\u0430\u0441\u043E\u0432\u043D\u0438\u043A\u0430",3:"\u5207\u63DB\u89C0\u770B\u72C0\u614B"
,25:"Promijeni status pra\u0107enja",4:"P\u0159epnout stav sledov\xE1n\xED",5:"Skift urstatus"
,0:"Toggle watch status",6:"Wijzig kijkstatus",7:"J\xE4lgimisseisundi \xFCmberl\xFClitamine"
,8:"Vaihda seurantatila",9:"revenir sur statue \'suivi\'",10:"Status \u2019Beobachtung\u2019 umkehren"
,11:"\u0395\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7\u03C2 "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7\u03C2"
,12:"\xC1llapot v\xE1lt\xE1sa",13:"Cambia lo stato dell\'orologio",15:"P\u0101rsl\u0113gt pulkste\u0146a statusu"
,26:"Perjungti steb\u0117jimo b\u016Bsen\u0105",16:"Endre klokkestatus",17:"Prze\u0142\u0105cz status ogl\u0105dania"
,18:"Alternar status de observa\xE7\xE3o",19:"Schimb\u0103 starea ceasului",20:"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",27:"Spremeni status ure"
,21:"Cambiar estado de seguimiento",22:"\xC4ndra klockans status",23:"\u0130zleme durumunu de\u011Fi\u015Ftir"
,24:"\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0430"};C.BqD={1:"ukupno",2:"\u041E\u0431\u0449\u043E"
,3:"\u7E3D\u8A08",25:"Ukupno",4:"Celkov\xFD",0:"Total",6:"Totaal",7:"Kokku",8:"Yh~teen~s\xE4"
,11:"\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF",12:"Teljes",13:"Totale",15:"Kop\u0101"
,26:"Viso",17:"Ca\u0142kowity",20:"\u0412\u0441\u0435\u0433\u043E",27:"Skupaj",23:
"Toplam",24:"\u0423\u0441\u044C\u043E\u0433\u043E"};C.Transponder={1:"transponder"
,2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440",3:"\u61C9\u7B54\u5668"
,4:"P\u0159evad\u011B\u010D",0:"Transponder",9:"Transpondeur",11:"\u0391\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2"
,12:"Ad\xF3vev\u0151",13:"Trasponditore",15:"Transponders",26:"Transponderis",20:
"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440",27:"Oddajnik-odzivnik"
,21:"Transpondedor",23:"Aktar\u0131c\u0131",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.Bai={1:"Skenirati transponder se ve\u0107 koristi! (\u017Eivotinja {1}) Koristite "+
"transponder koji nije u upotrebi!",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0432\u0435\u0447\u0435 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440, \u043A\u043E\u0439\u0442\u043E "+
"\u043E\u0449\u0435 \u043D\u0435 \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043D!"
,3:"\u6383\u63CF\u7684\u611F\u61C9\u5668\u5DF2\u88AB\u4F7F\u7528\uFF01\n\u8ACB\u4F7F\u7528\u5C1A\u672A\u5206\u914D\u7684\u5176\u4ED6\u611F\u61C9\u5668\uFF01"
,25:"Skenirani transponder je ve\u0107 u upotrebi!\nMolimo koristite drugi "+"transponder koji jo\u0161 nije dodijeljen!"
,4:"Transpond\xE9r je ji\u017E p\u0159i\u0159azen!\nPou\u017Eijte jin\xFD transpond\xE9r, "+
"kter\xFD je\u0161t\u011B nen\xED p\u0159i\u0159azen!",5:"Den scannede transponder er allerede i brug!\nBrug venligst en anden transponder, "+
"der endnu ikke er tildelt!",0:"Scanned transponder is in use already!\nPlease use another transponder "+
"not assigned yet!",6:"Gescande transponder is al in gebruik!\nGraag een nog niet in gebruik genomen "+
"transponder gebruiken!",7:"Skannitud transponder on juba kasutusel!\nKasuta teist transponderinumbrit"
,8:"Skannattu transponderi on jo k\xE4yt\xF6ss\xE4!\nK\xE4yt\xE4 toista transponderia, "+
"joka ei ole viel\xE4 m\xE4\xE4ritetty!",9:"Le transpondeur scann\xE9 est d\xE9j\xE0 utilis\xE9\xA0!\nVeuillez utiliser "+
"un autre transpon~deur non encore attribu\xE9\xA0!",10:"Eingelesener Transponder wird bereits genutzt!\nBitte anderen, ungenutzten "+
"Transponder verwenden!",11:"\u039F \u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2 "+
"\u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"\u03AE\u03B4\u03B7!\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+"\u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 "+
"\u03AC\u03BB\u03BB\u03BF\u03BD \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B5\u03BA\u03C7\u03C9\u03C1\u03B7\u03B8\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B1!",12:"Az olvasott transzponder m\xE1r haszn\xE1latban van!\nK\xE9rj\xFCk, haszn\xE1ljon "+
"m\xE9g nem kiosztott transzpondert!",13:"Il transponder scansionato \xE8 gi\xE0 in uso!\nPer favore, utilizza un "+
"altro transponder che non \xE8 ancora stato assegnato!",15:"Jau tiek izmantots sken\u0113ts transponders!\nL\u016Bdzu, izmantojiet "+
"citu v\u0113l nepie\u0161\u0137irto transponderi!",26:"Nuskaitytas transponderis jau naudojamas!\nPra\u0161ome naudoti dar nepriskirt\u0105 "+
"transponder\u012F!",16:"Skannet transponder er allerede i bruk!\nVennligst bruk en annen transponder "+
"som ikke er tildelt enn\xE5!",17:"Skanowany transponder jest ju\u017C u\u017Cywany!\nProsz\u0119 u\u017Cy\u0107 "+
"innego transpondera, kt\xF3ry jeszcze nie zosta\u0142 przypisany!",18:"O transponder escaneado j\xE1 est\xE1 em uso!\nPor favor, use outro transponder "+
"que ainda n\xE3o foi atribu\xEDdo!",19:"Transponderul scanat este deja \xEEn uz!\nV\u0103 rug\u0103m s\u0103 folosi\u021Bi "+
"un alt transponder care nu a fost \xEEnc\u0103 atribuit!",20:"\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!",27:"Skeniran transponder je \u017Ee v uporabi!\nProsimo, uporabite drug transponder, "+
"ki \u0161e ni dodeljen!",21:"\xA1El transpondedor escaneado ya est\xE1 en uso!\n\xA1Utilice un transpondedor "+
"a\xFAn no asignado!",22:"Den skannade transpondern anv\xE4nds redan!\nV\xE4nligen anv\xE4nd en "+
"annan transponder som \xE4nnu inte \xE4r tilldelad!",23:"Taranan aktar\u0131c\u0131 zaten kullan\u0131mda!\nL\xFCtfen hen\xFCz "+
"atanmam\u0131\u015F ba\u015Fka bir aktar\u0131c\u0131y\u0131 kullan\u0131n!",24:
"\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u0432\u0438\u043A\u043E\u0440\u0438~\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435 "+
"\u0456\u043D\u0448\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!"
};C.BqH={1:"Nepoznat transponder! Skenirani transponder ID broj nije prona\u0111en "+
"u sistemu!",2:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440! "+
"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F \u2116 \u043D\u0430 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 \u0435 "+"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\n\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430!"
,3:"\u672A\u77E5\u7684\u61C9\u7B54\u5668\uFF01\u6383\u63CF\u5230\u7684\u61C9\u7B54\u5668ID\u5728\u7CFB\u7D71\u4E2D\u672A\u627E\u5230\uFF01"
,25:"Nepoznati transponder! ID skeniranog transpondera nije prona\u0111en u "+"sustavu!"
,4:"Nezn\xE1m\xFD odpov\u011Bdn\xEDk! ID skenovan\xE9ho odpov\u011Bdn\xEDku "+"nenalezeno v syst\xE9mu!"
,5:"Ukendt transponder! Scannet transponder-ID ikke fundet i systemet!",0:"Unknown transponder! Scanned transponder ID not found\nin system!"
,6:"onbekende transponder. Gescande transponder niet gevonden",7:"Tundmatu transponder! Skannitud transponderi ID ei ole s\xFCsteemis leitav."
,8:"Tuntematon transponderi! Skannattua transponderin tunnusta ei l\xF6ydy\nj\xE4rjestelm\xE4st\xE4!"
,9:"Transpondeur inconnu\xA0!\nID de transpondeur scann\xE9 n\u2019a pas \xE9t\xE9 "+
"trouv\xE9 dans le syst\xE8me\xA0!",10:"Unbekannter Transponder!\nDie eingelesene Transponder-ID wurde im System "+
"nicht gefunden!",11:"\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2! "+
"\u03A4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5\n\u03C3\u03C4\u03BF "+
"\u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1!",12:"Ismeretlen ad\xF3vev\u0151! A vizsg\xE1lt ad\xF3vev\u0151 azonos\xEDt\xF3ja "+
"nem tal\xE1lhat\xF3 a rendszerben!",13:"Trasponder sconosciuto! ID del trasponder scansionato non trovato nel "+
"sistema!",15:"Nezin\u0101ms raid\u012Bt\u0101js! Sken\u0113tais raid\u012Bt\u0101ja "+
"ID nav atrasts sist\u0113m\u0101!",26:"Ne\u017Einomas atsakiklis! Nuskaityto atsakiklio ID nerastas sistemoje!"
,16:"Ukjent transponder! Finner ikke skannet transponder-ID\ni systemet!",17:"Nieznany transponder! Skanowany identyfikator transpondera nie zosta\u0142 "+
"znaleziony w systemie!",18:"Transponder desconhecido! ID do transponder escaneado n\xE3o encontrado "+
"no sistema!",19:"Transponder necunoscut! ID-ul transponderului scanat nu a fost g\u0103sit "+
"\xEEn sistem!",20:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D!"
,27:"Neznan transponder! ID skeniranega transponderja ni najden v sistemu!",21:"Transpondedor desconocido. El ID de transpondedor escaneado no se encuentra "+
"en el sistema.",22:"Ok\xE4nd transponder! Skannat transponder-ID hittades inte i systemet!"
,23:"Bilinmeyen aktar\u0131c\u0131Taranan aktar\u0131c\u0131 kimli\u011Fi\ninsistemde "+
"bulunamad\u0131!",24:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0443 "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"
};C.Ak8={1:"Braj transpondera!",2:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u611F\u61C9\u5668\u865F\u78BC",25:"Broj transpondera",4:"Transponder \u010D\xEDslo"
,5:"Transpondernummer",0:"Transponder number",6:"Transpondernummer",7:"Transponderi number"
,8:"Transponderin numero",9:"Num\xE9ro de transpondeur",10:"Transpondernummer",11:
"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Transzponder sz\xE1m",13:"Numero del transponder",15:"Transpondera numurs",
26:"Transponderio numeris",16:"Transponder nummer",17:"Numer transpondera",18:"N\xFAmero do transponder"
,19:"Num\u0103rul transponderului",20:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,27:"\u0160tevilka transponderja",21:"N\xFAmero del transpondedor",22:"Transpondernummer"
,23:"Aktar\u0131c\u0131 numaras\u0131",24:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.BqI={1:"Transponder je ve\u0107 dodijeljen ovoj \u017Eivotinji! Odspojiti trenutni "+
"transponder i zamijeniti ga sa skeniranim transponderom?",2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044A\u0442 \u0432\u0435\u0447\u0435 "+
"\u0435 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D \u043A\u044A\u043C "+"\u0442\u043E\u0432\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043A\u044A\u0441\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u0441 \u0442\u0435\u043A\u0443\u0449\u0438\u044F "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0438 \u0437\u0430\u043C\u044F\u043D\u0430\u0442\u0430 "+
"\u043C\u0443 \u0441 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440?",3:"\u9019\u96BB\u52D5\u7269\u5DF2\u7D93\u88AB\u5206\u914D\u4E86\u4E00\u500B\u61C9\u7B54\u5668\uFF01\n\u662F\u5426\u8981\u89E3\u9664\u76EE\u524D\u7684\u61C9\u7B54\u5668\u4E26\u66FF\u63DB\u70BA\u6383\u63CF\u7684\u61C9\u7B54\u5668\uFF1F"
,25:"Transponder je ve\u0107 dodijeljen ovoj \u017Eivotinji! Odspojiti trenutni "+
"transponder i zamijeniti ga s transponderom koji je skeniran?",4:"Tento zv\xED\u0159eti byl ji\u017E p\u0159i\u0159azen transpond\xE9r! Odpojit "+
"st\xE1vaj\xEDc\xED transpond\xE9r a nahradit jej naskenovan\xFDm transpond\xE9rem?"
,5:"En transponder er allerede tildelt til dette dyr!\nVil du fjerne den nuv\xE6rende "+
"transponder og erstatte den med den scannede transponder?",0:"A transponder was already assigned to this animal!\nUnlink current transponder "+
"and replace it with transponder scanned in?",6:"Er is al een transponder toegezegd aan dit dier. Splits huidige en hernoem "+
"het met transponder die gescand is?",7:"Sellele loomale on juba transponder m\xE4\xE4ratud! Kas siduda olemasolev "+
"transponder lahti ja asendada see skannitud transponderiga?",8:"T\xE4lle el\xE4imelle on jo m\xE4\xE4ritetty transponderi! Pit\xE4isik\xF6 "+
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
,13:"\xC8 gi\xE0 stato assegnato un trasponditore a questo animale! Vuoi scollegare "+
"il trasponditore attuale e sostituirlo con quello appena scansionato?",15:"\u0160im dz\u012Bvniekam jau ir pie\u0161\u0137irts transponders!\nVai "+
"atvienot pa\u0161reiz\u0113jo transponderu un aizst\u0101t to ar nolasi\u0304to "+
"transponderu?",26:"\u0160iam gyv\u016Bnui jau priskirtas atsakiklis!\nAtjungti esam\u0105 "+
"atsakikl\u012F ir pakeisti nuskaitytu atsakikliu?",16:"En transponder var allerede tildelt dette dyret!\nKoble fra gjeldende "+
"transponder og erstatte den med skannet transponder?",17:"Transponder zosta\u0142 ju\u017C przypisany do tego zwierz\u0119cia!\nOd\u0142\u0105czy\u0107 "+
"obecny transponder i zast\u0105pi\u0107 go zeskanowanym transponderem?",18:"Um transponder j\xE1 foi atribu\xEDdo a este animal!\nDeseja desvincular "+
"o transponder atual e substitu\xED-lo pelo transponder escaneado?",19:"Unui transponder i-a fost deja atribuit acest animal! Dezactiveaz\u0103 "+
"transponderul curent \u0219i \xEEnlocuie\u0219te-l cu transponderul scanat?",20:
"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0443\u0436\u0435 "+
"\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D \u044D\u0442\u043E\u043C\u0443 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443!\n\u041E\u0442\u0432\u044F\u0437\u0430\u0442\u044C "+
"\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0438 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E "+"\u043D\u0430 \u043F\u0440\u043E\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440?",27:"Temu \u017Eivali je \u017Ee dodeljen odzivnik! Prekiniti povezavo s trenutnim "+
"odzivnikom in ga zamenjati z odzivnikom, ki je bil skeniran?",21:"\xA1Ya se asign\xF3 un transpondedor a este animal! \xBFDesvincular el "+
"transpondedor actual y reemplazarlo con el transpondedor escaneado?",22:"En transponder har redan tilldelats detta djur!\nVill du koppla bort den "+
"nuvarande transpondern och ers\xE4tta den med den skannade transpondern?",23:"Bu hayvana zaten bir aktar\u0131c\u0131 atanm\u0131\u015F!\nMevcut aktar\u0131c\u0131n\u0131n "+
"ba\u011Flant\u0131s\u0131 kald\u0131r\u0131l\u0131p, taranan aktar\u0131c\u0131yla "+
"de\u011Fi\u015Ftirilsin mi?",24:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0443\u0436\u0435 "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0446\u0456\u0439 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0456!\n\u0412\u0456\u0434\'\u0454\u0434\u043D\u0430\u0442\u0438 "+
"\u043F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0456 \u0437\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u0439\u043E\u0433\u043E "+
"\u043D\u0430 \u0432\u0456\u0434\u0441\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439?"
};C.Baj={1:"skeniranje transpondera",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u611F\u61C9\u5668\u6383\u63CF",25:"Skeniranje transpondera",4:"Skenov\xE1n\xED transponderu"
,5:"Transponder scanning",0:"Transponder Scan",7:"Skanni transponder",8:"Transponder skannaus"
,9:"Scan transpondeur",11:"\u0391\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,12:"Transzponder szkennel\xE9s",13:"Scansione del trasponder",15:"Transpondera sken\u0113\u0161ana"
,26:"Transponderio nuskaitymas",16:"Transponder skanning",17:"Skanowanie transpondera"
,18:"Varredura de transponder",19:"Scanare transponder",20:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430",27:"Skeniranje transponderja"
,21:"Escaneo del transpondedor",22:"Transponderskanning",23:"Transponder\u0131 tara"
,24:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.Triplets={1:"trojke",2:"\u0422\u0440\u0438\u0437\u043D\u0430\u0446\u0438",3:
"\u4E09\u80DE\u80CE",25:"Trojke",4:"Troj\u010Data",5:"Trillinger",0:"Triplets",6:
"Drieling",7:"Kolmikud",8:"Kolmoset",9:"Tripl\xE9s",10:"Drillinge",11:"\u03A4\u03C1\u03AF\u03B4\u03C5\u03BC\u03B1"
,12:"H\xE1rmasikrek",13:"Triplette",15:"Tr\u012Bn\u012B\u0161i",26:"Trynukai",16:
"Trillinger",17:"Trojaczki",18:"Trig\xEAmeos",19:"Triple\u021Bi",20:"\u0422\u0440\u043E\u0439\u043D\u044F"
,27:"Troj\u010Dki",21:"Trillizos",22:"Trillingar",23:"\xDC\xE7\xFCzler",24:"\u0422\u0440\u0456\u0439\u043D\u044F"
};C.BqM={1:"dvojke",2:"\u0411\u043B\u0438\u0437\u043D\u0430\u0446\u0438",3:"\u96D9\u80DE\u80CE"
,25:"Blizana\u010Dki porod",4:"Dvoj\u010Data",5:"Tvillingef\xF8dsel",0:"Twin birth"
,6:"Tweeling",7:"Kaksikud",8:"Kaksoset",9:"Multiple",10:"Zwillingskalb",11:"\u0394\u03AF\u03B4\u03C5\u03BC\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7"
,12:"Iker sz\xFClet\xE9s",13:"Parto gemellare",15:"Dv\u012B\u0146u dzim\u0161ana"
,26:"Dvyni\u0173 gimimas",16:"Tvillingf\xF8dsel",17:"Por\xF3d bli\u017Ani\u0105t"
,18:"Nascimento de g\xEAmeos",19:"Na\u0219tere de gemeni",20:"\u0411\u043B\u0438\u0437\u043D\u0435\u0446"
,27:"Dvoj\u010Dka",21:"Ternero m\xFAltiple",22:"Tvillingf\xF6dsel",23:"\u0130kiz do\u011Fum"
,24:"\u0411\u043B\u0438\u0437\u043D\u044E\u043A"};C.BqN={1:"Dva intervala za \u2642 i \u2640"
,2:"\u0414\u0432\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 "+
"\u0437\u0430 \u2642 \u0438 \u2640",3:"\u5169\u500B\u4E0D\u540C\u7684\u7BC4\u570D\uFF0C\u5206\u5225\u70BA\u2642\u548C\u2640"
,25:"Dva razli\u010Dita raspona za \u2642 i \u2640",4:"Dva odli\u0161n\xE9 rozsahy pro \u2642 a \u2640"
,5:"To forskellige r\xE6kker for \u2642 og \u2640",0:"Two distinct ranges for \u2642 and \u2640"
,6:"Twee verschillende bereiken voor \u2642 en \u2640",7:" \u2642-le ja \u2640-le on kaks erinevat vahemikku"
,8:"Kaksi eri aluetta \u2642 ja \u2640",9:"Deux gammes distinctes pour \u2642 et \u2640"
,10:"Je ein Nummern- bereich f\xFCr \u2642 und \u2640",11:"\u0394\u03CD\u03BF \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03B5\u03C4\u03B9\u03BA\u03AC "+
"\u03B5\u03CD\u03C1\u03B7 \u03B3\u03B9\u03B1 \u2642 \u03BA\u03B1\u03B9 "+"\u2640"
,12:"K\xE9t k\xFCl\xF6nb\xF6z\u0151 tartom\xE1ny \u2642 \xE9s \u2640 sz\xE1m\xE1ra"
,13:"Due intervalli distinti per \u2642 e \u2640",15:"Divi at\u0161\u0137ir\u012Bgi diapazoni \u2642 un \u2640"
,26:"Du skirtingi diapazonai vyrams ir moterims",16:"To distinkte omr\xE5der for \u2642 og \u2640"
,17:"Dwa r\xF3\u017Cne zakresy dla \u2642 i \u2640",18:"Duas faixas distintas para \u2642 e \u2640"
,19:"Dou\u0103 game distincte pentru \u2642 \u0219i \u2640",20:"\u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0443 "+
"\u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u2642 \u0438 "+"\u2640"
,27:"Dva razli\u010Dna obsega za \u2642 in \u2640",21:"Dos rangos distintos para \u2642 y \u2640"
,22:"Tv\xE5 olika omr\xE5den f\xF6r \u2642 och \u2640",23:"\u2642 ve \u2640 i\xE7in iki farkl\u0131 aral\u0131k"
,24:"\u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 "+
"\u043D\u043E\u043C\u0435\u0440\u0456\u0432 \u0434\u043B\u044F \u2642 \u0442\u0430 "+
"\u2640"};C.Aoa={1:"tip",2:"\u0422\u0438\u043F",3:"\u985E\u578B",25:"Vrsta",4:"Typ"
,0:"Type",7:"T\xF5ug",8:"Tyyp~pi",10:"Typ",11:"\u03A4\u03CD~\u03C0\u03BF\u03C2",
12:"T\xEDpus",13:"Digitare",15:"Tips",26:"Tipas",17:"Rodzaj",18:"Tipo",19:"Tip",
20:"\u0422\u0438\u043F",27:"Vrsta",21:"Tipo",22:"Typ",23:"Tip",24:"\u0422\u0438\u043F"
};C.Afy={1:"tip \u017Eivotinje",2:"\u0422\u0438\u043F \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u52D5\u7269\u7684\u7A2E\u985E",25:"Vrsta \u017Eivotinje",4:"Druh zv\xED\u0159ete"
,5:"Type af dyr",0:"Type of animal",6:"Type van nutdier",7:"Looma t\xF5ug",8:"El\xE4inlaji"
,9:"Type d\u2019animal",10:"Art des Nutztiers",11:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llatfaj",13:"Tipo di animale",15:"Dz\u012Bvnieka veids",26:"Gyv\u016Bno r\u016B\u0161is"
,16:"Type dyr",17:"Rodzaj zwierz\u0119cia",18:"Tipo de animal",19:"Tip de animal"
,20:"\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",
27:"Vrsta \u017Eivali",21:"Tipo de ganado",22:"Typ av djur",23:"Hayvan tipi",24:
"\u0422\u0438\u043F \u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.Bam={1:"ocjenjivanje"
,2:"\u0422\u0438\u043F \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430",3:"\u8A55\u5206\u985E\u578B"
,25:"Vrsta ocjenjivanja",4:"Druh hodnocen\xED",5:"Type af bed\xF8mmelse",0:"Type of rating"
,6:"Beoordeling",7:"T\xF5u hinnang",8:"Luokituksen tyyppi",9:"\xC9valuation",10:
"Bewertung",11:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7\u03C2"
,12:"\xC9rt\xE9kel\xE9s t\xEDpusa",13:"Tipo di valutazione",15:"V\u0113rt\u0113juma veids"
,26:"\u012Evertinimo tipas",16:"Type vurdering",17:"Rodzaj oceny",18:"Tipo de classifica\xE7\xE3o"
,19:"Tip de evaluare",20:"\u041E\u0446\u0435\u043D\u043A\u0430",27:"Vrsta ocenjevanja"
,21:"Evaluaci\xF3n",22:"Betygstyp",23:"Derecelendirme tipi",24:"\u041E\u0446\u0456\u043D\u043A\u0430"
};C.Bap={1:"oboljenje vimena",2:"\u0411\u043E\u043B\u0435\u0441\u0442\u0438 \u043D\u0430 \u0432\u0438\u043C\u0435\u0442\u043E"
,3:"\u4E73\u623F\u75BE\u75C5",25:"Bolesti vimena",4:"Nemoci vemene",5:"Yversygdomme"
,0:"Udder diseases",6:"Uierziekte",7:"Udarahaigused",8:"Utaresairaudet",9:"Maladies du pis"
,10:"Euterkrankheiten",11:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03C4\u03BF\u03C5 "+
"\u03BC\u03B1\u03C3\u03C4\u03BF\u03CD",12:"Eml\u0151betegs\xE9gek",13:"Malattie della mammella"
,15:"Z\u012Bd\u012Bt\u0101ju slim\u012Bbas",26:"Lig\u0173 pieno liaukos",16:"Jursykdommer"
,17:"Choroby wymion",18:"Doen\xE7as do \xFAbere",19:"Boli ale ugerului",20:"\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0432\u044B\u043C\u0435\u043D\u0438"
,27:"Bolezni vimena",21:"Enfermedades de la ubre",22:"Juversjukdomar",23:"Meme Hastal\u0131klar\u0131"
,24:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0432\u0438\u043C\u0435\u043D\u0456"
};C.Undertemperature={1:"pothla\u0111enost",2:"\u041F\u043E\u043D\u0438\u0436. \u0442\u0435\u043C\u043F."
,3:"\u5728\u6EAB\u5EA6\u4E0B",25:"Ispod temperature",4:"Za teploty",5:"Underkropstemp."
,0:"Undertemperature",6:"Onder temp.",7:"Madaltemp.",8:"Alil\xE4mp\xF6",9:"Hypothermie"
,10:"Untertemperatur",11:"\u03A5\u03C0\u03BF\u03B8\u03B5\u03C1\u03BC\u03AF\u03B1"
,12:"Alacsony h\u0151m\xE9rs\xE9kleten",13:"Sotto la temperatura",15:"Zema temperat\u016Bra"
,26:"\u017Demiau reikiamo temperat\u016Bros",16:"Undertemp.",17:"Zani\u017Cona temperatura"
,18:"Abaixo da temperatura desejada",19:"Subtemperatur\u0103",20:"\u041D\u0438\u0437\u043A\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,27:"Nizka temperatura",21:"Hipotermia",22:"Undertemperatur.",23:"S\u0131cakl\u0131k alt\u0131nda"
,24:"\u041D\u0438\u0437\u044C\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Bar={1:"jedinica mjere",2:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u043C\u0430\u0441\u0430"
,3:"\u7269\u8CEA\u55AE\u4F4D",25:"Jedinica mase",4:"Hmotnost",5:"Masseenhed",0:"Mass unit"
,6:"Massaeenheid",7:"Massi \xFChik",8:"Painoyksikk\xF6",9:"Unit\xE9 de mesure",10:
"Masseneinheit",11:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B1 \u03BC\u03AC\u03B6\u03B1\u03C2"
,12:"t\xF6megegys\xE9g",13:"Unit\xE0 di massa",15:"Masa vien\u012Bba",26:"Mas\u0117s vienetas"
,16:"Masseenhet",17:"Jednostka masy",18:"Unidade de massa",19:"Unitate de mas\u0103"
,20:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F"
,27:"Merska enota za maso",21:"Unidad de masa",22:"Massenhet",23:"K\xFCtle birimi"
,24:"\u041E\u0434\u0438\u043D\u0438\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.BqQ={1:"celzijus",2:"\u0426\u0435\u043B\u0437\u0438\u0439",3:"\u651D\u6C0F",
25:"Celzijus",4:"Celsia",0:"Celsius",11:"\u039A\u03B5\u03BB\u03C3\u03AF\u03BF\u03C5"
,15:"Celsijs",26:"Celsijus",17:"Celsjusz",20:"\u0426\u0435\u043B\u044C\u0441\u0438\u0439"
,27:"Celzij",23:"Santigrat",24:"\u0426\u0435\u043B\u044C\u0441\u0456\u0439"};C.BqR={
1:"farenhajt",2:"\u0424\u0430\u0440\u0435\u043D\u0445\u0430\u0439\u0442",3:"\u83EF\u6C0F"
,4:"Fahrenheita",0:"Fahrenheit",11:"\u03A6\u03B1\u03C1\u03B5\u03BD\u03B1\u0390\u03C4"
,15:"F\u0101renheits",26:"Farenheitas",20:"\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442"
,23:"Fahrenayt",24:"\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442"};C.Bas={
1:"jedinica temperature",2:"\u0422\u0435\u043C\u043F. \u0435\u0434\u0438\u043D\u0438\u0446\u0430"
,3:"\u6EAB\u5EA6\u55AE\u4F4D",25:"Jedinica temperature",4:"Teplota",5:"Temperatureenhed"
,0:"Temperature unit",6:"Temperatuureenheid",7:"Temp \xFChik",8:"L\xE4mp\xF6tilayksik"
,9:"Unit\xE9 de temp\xE9rature",10:"Temperatureinheit",11:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2"
,12:"h\u0151m\xE9rs\xE9kleti egys\xE9g",13:"Unit\xE0 di temperatura",15:"Temperat\u016Bras m\u0113rvien\u012Bba"
,26:"Matavimo vienetas",16:"Temperaturf\xF8ler",17:"Jednostka temperatury",18:"Unidade de temperatura"
,19:"Unitate de temperatur\u0103",20:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",27:"Enota za temperaturo"
,21:"Unidad de temperatura",22:"Temperatur enhet",23:"S\u0131cakl\u0131k birimi"
,24:"\u041E\u0434\u0438\u043D\u0438\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"};C.AHq={2:"\u043C\u0438\u043D"
,3:"\u5206\u9418",25:"minuta",4:"Minuty",5:"my",0:"min",11:"\u039B\u03B5\u03C0\u03C4\u03CC"
,12:"perc",13:"minuto",15:"min\u016Bte",26:"minut\u0117",17:"minuta",18:"minuto"
,19:"minut",20:"\u041C\u0438\u043D",27:"minuta",22:"minut",23:"Dakika birimi",24:
"\u0445\u0432"};C.AHr={1:"jedinica",2:"\u0415\u0434\u0438\u043D\u0438\u0446\u0438"
,3:"\u55AE\u4F4D",25:"Jedinice",4:"Jednotky",5:"Enheder",0:"Units",6:"Eenheden",
7:"\xDChikud",8:"Yksik\xF6t",9:"Unit\xE9s",10:"Einheiten",11:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B5\u03C2"
,12:"Egys\xE9gek",13:"Unit\xE0",15:"Vien\u012Bbas",26:"Vienetai",16:"Enheter",17:
"Jednostki",18:"Unidades",19:"Unit\u0103\u021Bi",20:"\u0415\u0434\u0438\u043D\u0438\u0446\u044B \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F"
,27:"Enote",21:"Unidades",22:"Enheter",23:"Birimler",24:"\u041E\u0434\u0438\u043D\u0438\u0446\u0456 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.Unknown={1:"nepoznat",2:"\u041D\u0435\u043F\u043E\u0437\u043D\u0430\u0442",3:
"\u672A\u77E5",25:"Nepoznato",4:"Nezn\xE1m\xFD",5:"Ukendt",0:"Unknown",6:"Onbekend"
,7:"Tundmatu",8:"Tuntematon",9:"Inconnue",10:"Unbekannt",11:"\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF"
,12:"Ismeretlen",13:"Sconosciuto",15:"Nezin\u0101ms",26:"Ne\u017Einomas",16:"Ukjent"
,17:"Nieznany",18:"Desconhecido",19:"Necunoscut",20:"\u041D\u0435\u0438~\u0437\u0432\u0435\u0441\u0442\u043D\u043E"
,27:"Neznano",21:"Des~cono~cida",22:"Ok\xE4nd",23:"Bilinmiyor",24:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u043E"
};C.BqS={1:"Skenirani transponder je ve\u0107 dodijeljen drugoj \u017Eivotinji! Odspojite "+
"transponder i dodijelite ga odabranoj \u017Eivotinji {1}?",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0432\u0435\u0447\u0435 \u0435 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D "+
"\u043D\u0430 \u0434\u0440\u0443\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043A\u0440\u0430\u0442\u0435\u0442\u0435 "+
"\u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0438 \u0433\u043E \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u0442\u0435 "+"\u043D\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\xA0{1}?"
,3:"\u5DF2\u6383\u63CF\u7684\u61C9\u7B54\u5668\u5DF2\u5206\u914D\u7D66\u5176\u4ED6\u52D5\u7269\uFF01\n\u8981\u89E3\u9664\u61C9\u7B54\u5668\u7684\u9023\u7D50\u4E26\u5206\u914D\u7D66\u9078\u5B9A\u7684\u52D5\u7269{1}\u55CE\uFF1F"
,25:"Skenirani transponder je ve\u0107 dodijeljen drugoj \u017Eivotinji! Odspoji "+
"transponder i dodijeli ga odabranom \u017Eivotinju {1}?",4:"Skenovan\xFD transpond\xE9r je ji\u017E p\u0159i\u0159azen jin\xE9mu zv\xED\u0159eti! "+
"Odpojit transpond\xE9r a p\u0159i\u0159adit ho vybran\xE9mu zv\xED\u0159eti "+"{1}?"
,5:"Den skannede transponder er allerede tildelt et andet dyr! Vil du fjerne "+"tilknytningen fra transponderen og tildele den til det valgte dyr {1}?"
,0:"Scanned transponder is assigned to another animal already!\nUnlink transpon~der "+
"and assign it to selected animal\xA0{1}?",6:"Gescande transponder is toegezegd aan een ander dier!\nSplits transpon~der "+
"en zeg toe naar geselecteerd dier\xA0{1}?",7:"Skannitud transponder on juba teisele loomale m\xE4\xE4ratud!\nKas siduda "+
"transponder lahti ja m\xE4\xE4rata see valitud loomale\xA0{1}?",8:"Skannattu trans~ponderi on jo m\xE4\xE4ritetty toiselle el\xE4imelle!\nPoista "+
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
"a transzpondert \xE9s hozz\xE1rendeli a kiv\xE1lasztott \xE1llathoz {1}?",13:"Il trasponder scansionato \xE8 gi\xE0 assegnato a un altro animale! Vuoi "+
"scollegare il trasponder e assegnarlo all\'animale selezionato {1}?",15:"Sken\u0113tais transponders jau ir pie\u0161\u0137irts citam dz\u012Bvniekam! "+
"Vai atvienot transponderi un pie\u0161\u0137irt to izv\u0113l\u0113tajam "+"dz\u012Bvniekam {1}?"
,26:"Nuskaitytas atsakiklis jau priskirtas kitam gyv\u016Bnui! Atjunkite atsakikl\u012F "+
"ir priskirkite j\u012F pasirinktam gyv\u016Bnui {1}?",16:"Den skannede transponderen er allerede tildelt et annet dyr! Fjern koblingen "+
"fra transponderen og tildel den til det valgte dyret {1}?",17:"Skanowany transponder jest ju\u017C przypisany do innego zwierz\u0119cia! "+
"Od\u0142\u0105cz transponder i przypisz go do wybranego zwierz\u0119cia "+"{1}?"
,18:"O transponder escaneado j\xE1 est\xE1 atribu\xEDdo a outro animal! Desvincule "+
"o transponder e atribua-o ao animal selecionado {1}?",19:"Transponderul scanat este deja atribuit altui animal! Dezactiveaz\u0103 "+
"transponderul \u0219i atribuie-l animalului selectat {1}?",20:"\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0443\u0436\u0435 "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u0440\u0443\u0433\u043E\u043C\u0443 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443! \u041E\u0442\u0432\u044F\u0437\u0430\u0442\u044C "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0438 "+"\u043D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0435\u0433\u043E "+
"\u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 "+
"{1}?",27:"Opti\u010Dno prebrani transponder je \u017Ee dodeljen drugi \u017Eivali! "+
"Prekini povezavo transponderja in ga dodeli izbrani \u017Eivali {1}?",21:"\xA1El transpondedor escaneado ya est\xE1 asignado a otro animal! \xBFDesvincular "+
"el transpondedor y asignarlo al animal seleccionado\xA0{1}?",22:"Den skannade transpondern \xE4r redan tilldelad till ett annat djur! Vill "+
"du koppla bort transpondern och tilldela den till det valda djuret {1}?",23:"Taranan aktar\u0131c\u0131 zaten ba\u015Fka bir hayvana atanm\u0131\u015F!\nAktar\u0131c\u0131n\u0131n "+
"ba\u011Flant\u0131s\u0131 kald\u0131r\u0131l\u0131p se\xE7ilen hayvana "+"atans\u0131n\xA0{1}?"
,24:"\u0421\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E "+
"\u0456\u043D\u0448\u0456\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0456!\n\u0412\u0456\u0434\'\u0454\u0434\u043D\u0430\u0439\u0442\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0456 "+"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0442\u0435 \u0439\u043E\u0433\u043E "+
"\u043E\u0431\u0440\u0430\u043D\u0456\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0456 "+
"{1}?"};C.UnlinkTransponder={1:"Otka\u010Di transponder",2:"\u041D\u0435\u0441\u0432\u044A\u0440\u0437\u0430\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u89E3\u9664\u9023\u7D50\u61C9\u7B54\u5668",25:"Otkop\u010Daj transponder",4:
"Odpojit transpond\xE9r",5:"Afkobl transponder",0:"Unlink transponder",6:"Transponder afnemen"
,7:"Seo transponder lahti",8:"Poista transponderin linkitys",9:"Retirer le transpondeur"
,10:"Transponder abnehmen",11:"\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03B4\u03AD\u03BA\u03C4\u03B7-\u03C0\u03BF\u03BC\u03C0\u03BF\u03CD"
,12:"Lev\xE1laszt transzponder",13:"Disconnettere il transponder",15:"Atvienot transponderi"
,26:"Atjunkite atsakikl\u012F",16:"Koble fra transponderen",17:"Od\u0142\u0105cz transponder"
,18:"Desvincular transponder",19:"Deconecteaz\u0103 transponderul",20:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,27:"Odklopi transponder",22:"Koppla bort transponder",23:"Aktar\u0131c\u0131n\u0131n ba\u011Flant\u0131s\u0131n\u0131 kald\u0131r"
,24:"\u0412\u0456\u0434\'\u0454\u0434\u043D\u0430\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.Unregister={1:"odjaviti",2:"\u041D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D"
,3:"\u672A\u767B\u9304",25:"Odjaviti",4:"Zru\u0161it registraci",5:"Afmeld",0:"Unregister"
,6:"Afmelden",7:"T\xFChista registreering",8:"Rekister~\xF6im\xE4t\xF6n",9:"D\xE9sinscrire"
,10:"Abmelden",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",12:"Leiratkoz\xE1s"
,13:"Annullare la registrazione",15:"Atcelt re\u0123istr\u0101ciju",26:"Atsiregistruoti"
,16:"Avregistrer",17:"Wyrejestrowa\u0107",18:"Cancelar registro",19:"Anula\u021Bi \xEEnregistrarea"
,20:"\u0412\u044B\u0439\u0442\u0438",27:"Odjaviti",21:"Anular registro",22:"Avregistrera"
,23:"Kayd\u0131 sil",24:"\u0412\u0438\u0439\u0442\u0438"};C.AHs={1:"Obri\u0161i \u017Eivotinju + obavijest"
,2:"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"+ \u0431\u0435\u043B\u0435\u0436\u043A\u0430",3:"\u522A\u9664\u52D5\u7269 + \u901A\u77E5"
,25:"Izbri\u0161i \u017Eivotinju + obavijest",4:"Odstranit zv\xED\u0159e + upozorn\u011Bn\xED"
,5:"Slet dyr + varsel",0:"Delete animal + notice",6:"Verwijder dier +melding",7:
"Kustuta loom+teavitus",8:"Poista el\xE4in+ilmoituks.",9:"Supprimer animal + d\xE9claration"
,10:"Tier + Meldung l\xF6schen",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B6\u03CE\u03BF\u03C5 "+
"\u03BA\u03B1\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2",12:"T\xF6r\xF6lj \xE1llat + \xE9szrev\xE9tel"
,13:"Cancella animale + avviso",15:"Izdz\u0113st dz\u012Bvnieku + pazi\u0146ojums"
,26:"I\u0161trinti gyv\u016Bn\u0105 + pasteb\u0117ti",16:"Slett dyr + melding",17:
"Usu\u0144 zwierz\u0119 + zawiadomienie",18:"Apagar animal + aviso",19:"\u0218terge animal + notificare"
,20:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435+\u0443\u0432\u0435\u0434\u043E\u043C."
,27:"Izbri\u0161i \u017Eival + obvestilo",21:"Borrar animal+notificat.",22:"Radera djur + meddelande"
,23:"Hayvan\u0131 sil + bildirim",24:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443+\u043F\u043E\u0432\u0456\u0434\u043E\u043C."
};C.Bat={1:"Neregistrirane \u017Eivotinje",2:"\u041D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438",3:"\u672A\u767B\u8A18\u7684\u52D5\u7269"
,25:"Neregistrirane \u017Eivotinje",4:"Neregistrovan\xE1 zv\xED\u0159ata",5:"Afmeld dyr"
,0:"Unregister animals",6:"Dier afmelden",7:"T\xFChista loomade registreerimine"
,8:"Poista el\xE4inten rekister\xF6inti",9:"D\xE9sinscrire les animaux",10:"Tiere abmelden"
,11:"\u0391\u03BA\u03B1\u03C4\u03B1\u03C7\u03CE\u03C1\u03B7\u03C4\u03B1 \u03B6\u03CE\u03B1"
,12:"Nem regisztr\xE1lt \xE1llatok",13:"Animali non registrati",15:"Neat\u013Caut dz\u012Bvniekus"
,26:"Neregistruoti gyv\u016Bnai",16:"Uregistrerte dyr",17:"Niezarejestrowane zwierz\u0119ta"
,18:"Animais n\xE3o registrados",19:"Animale nerevendicate",20:"\u041D\u0435\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",27:"Neregistrirane \u017Eivali"
,21:"Desregistrar animales",22:"Avregistrera djur",23:"Kay\u0131ts\u0131z hayvanlar"
,24:"\u041D\u0435\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.Unspecified={1:"nema podataka",2:
"\u041D\u0435\u043E~\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D",3:"\u672A\u6307\u5B9A"
,25:"Nespecificiran",4:"nespecifikovan\xFD",5:"Uspecificeret",0:"Unspecified",6:
"geen specificatie",7:"T\xE4psusta~mata",8:"M\xE4\xE4ritt~elem\xE4t\xF6n",9:"Non sp\xE9cifi\xE9"
,10:"Keine Angabe",11:"\u0391\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03CC\u03C1\u03B9\u03C3\u03C4\u03BF"
,12:"Meghat\xE1rozatlan",13:"Non specificato",15:"Nenoteikts",26:"Nenustatyta",16:
"Uspesifisert",17:"Nieokre\u015Blony",18:"N\xE3o especificado",19:"Nespecificat"
,20:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",27:"Nedolo\u010Deno"
,21:"No especificado",22:"Ospecificerad",23:"Belirtilmemi\u015F",24:"\u041D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445"
};C.AVY={1:"a\u017Euriranje u toku",2:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\u0442\u0430 "+
"\u0435 \u0432 \u0445\u043E\u0434",3:"\u66F4\u65B0\u9032\u884C\u4E2D",25:"A\u017Euriranje u tijeku"
,4:"Prob\xEDh\xE1 aktualizace",5:"Opdatering i gang",0:"Update in progress",7:"V\xE4rskendus pooleli"
,8:"P\xE4ivitys k\xE4ynniss\xE4",9:"Mise \xE0 jour en cours",10:"Aktualisierung l\xE4uft"
,11:"\u0391\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03C3\u03B5 "+
"\u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7",12:"Friss\xEDt\xE9s folyamatban",13:
"Aggiornamento in corso",15:"Atjaunin\u0101\u0161ana notiek",26:"Atnaujinimas vyksta"
,16:"Oppdatering p\xE5g\xE5r",17:"Aktualizacja w trakcie",18:"Atualiza\xE7\xE3o em andamento"
,19:"Actualizare \xEEn curs",20:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F "+
"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",27:"Posodobitev v teku"
,21:"Actualizaci\xF3n en progreso",22:"Uppdatering p\xE5g\xE5r",23:"G\xFCncelleme devam ediyor"
,24:"\u0412\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
};C.AHt={1:"gornja graniza",2:"\u0413\u043E\u0440\u0435\u043D \u043B\u0438\u043C\u0438\u0442"
,3:"\u4E0A\u9650",25:"Gornja granica",4:"Horn\xED limit",5:"\xD8vre gr\xE6nse",0:
"Upper limit",6:"bovengrens",7:"\xDClempiir",8:"Yl\xE4raja",9:"Limite maximale",
10:"Obergrenze",11:"\u0391\u03BD\u03CE\u03C4\u03B1\u03C4\u03BF \u03CC\u03C1\u03B9\u03BF"
,12:"fels\u0151 hat\xE1r",13:"Limite superiore",15:"Aug\u0161\u0113j\u0101 robe\u017Ea"
,26:"Vir\u0161utin\u0117 riba",16:"\xD8vre grense",17:"G\xF3rna granica",18:"Limite superior"
,19:"Limit\u0103 superioar\u0103",20:"\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043F\u0440\u0435\u0434\u0435\u043B"
,27:"Zgornja meja",21:"L\xEDmite superior",22:"\xD6vre gr\xE4ns",23:"\xDCst limit"
,24:"\u0412\u0435\u0440\u0445\u043D\u044F \u043C\u0435\u0436\u0430"};C.BqW={3:"Urban \u5065\u5EB7\u76E3\u63A7\u7CFB\u7D71\n\xA9 Urban GmbH & Co.KG, 2025"
,0:"Urban VitalControl\n\xA9 Urban GmbH & Co.KG, 2025",12:"V\xE1rosi VitalControl\n\xA9 Urban GmbH & Co.KG, 2025"
,13:"Controllo Vitale Urbano\n\xA9 Urban GmbH & Co.KG, 2025",15:"Pils\u0113tas VitalControl\n\xA9 Urban GmbH & Co.KG, 2025"
,26:"Miesto Gyvyb\u0117s Kontrol\u0117\n\xA9 Urban GmbH & Co.KG, 2025",17:"Kontrola Witalno\u015Bci Miejskiej\n\xA9 Urban GmbH & Co.KG, 2025"
,18:"Controle Vital Urbano\n\xA9 Urban GmbH & Co.KG, 2025",19:"Controlul Vital Urban\n\xA9 Urban GmbH & Co.KG, 2025"
};C.BqX={1:"Tov (spostveni)",2:"\u0413\u043E\u0432\u0435\u0434\u043E (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0430)",3:"\u725B\u8089\uFF08\u81EA\u5BB6\u8FB2\u5834\uFF09"
,25:"Govedina (vlastita farma)",4:"Hov\u011Bz\xED (vlastn\xED farma)",5:"Oksek\xF8d (egen g\xE5rd)"
,0:"Beef (own farm)",6:"Mest (eigen bedrijf)",7:"Veiseliha (oma farm)",8:"Liharotu (oma tila)"
,9:"L\u2019engraissement (propre ferme)",10:"Mast (eigener Betrieb)",11:"\u039A\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C6\u03AC\u03C1\u03BC\u03B1\u03C2)",12:"Marha (saj\xE1t farm)",13:"Manzo (di allevamento proprio)"
,15:"Liellopa ga\u013Ca (pa\u0161u ferma)",26:"M\u0117sa (savas \u016Bkis)",16:"Kj\xF8tt (egen g\xE5rd)"
,17:"Wo\u0142owina (z w\u0142asnej fermy)",18:"Carne bovina (da pr\xF3pria fazenda)"
,19:"Carne de vit\u0103 (de la propria ferm\u0103)",20:"\u041D\u0430 \u043C\u044F\u0441\u043E (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 "+
"\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435)",27:"Govedina (lastna kmetija)"
,21:"Carne (granja propia)",22:"N\xF6tk\xF6tt (egen g\xE5rd)",23:"Et\xE7i(kendi \xE7iftli\u011Fi)"
,24:"\u041D\u0430 \u043C\'\u044F\u0441\u043E (\u0432\u043B\u0430\u0441\u043D\u0435 "+
"\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E)"};C.BqY={
1:"Uzgoj (spostveni)",2:"\u0420\u0430\u0437\u0432\u044A\u0436\u0434\u0430\u043D\u0435 (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0430)",3:"\u81EA\u5BB6\u7E41\u6B96",25:"Uzgoj (vlastita farma)"
,4:"Chov (vlastn\xED farma)",5:"Avl (egen g\xE5rd)",0:"Breeding (own farm)",6:"Fokkerij(eigen bedrijf)"
,7:"Aretus (oma farm)",8:"Jalostus (oma tila)",9:"L\u2019\xE9levage (dans sa propre ferme)"
,10:"Zucht (eigener Betrieb)",11:"\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C6\u03AC\u03C1\u03BC\u03B1\u03C2)",12:"Teny\xE9szt\xE9s (saj\xE1t gazdas\xE1g)"
,13:"Allevamento (propria fattoria)",15:"Audz\u0113\u0161ana (sava saimniec\u012Bba)"
,26:"Veisimas (savo \u016Bkis)",16:"Oppdrett (egen g\xE5rd)",17:"Hodowla (w\u0142asne gospodarstwo)"
,18:"Cria\xE7\xE3o (pr\xF3pria fazenda)",19:"Cre\u0219tere (propria ferm\u0103)"
,20:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438 (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 "+
"\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435)",27:"Reja (lastna kmetija)"
,21:"Cr\xEDa (granja propia)",22:"Avel (egen g\xE5rd)",23:"Yeti\u015Ftirme(kendi \xE7iftli\u011Fi)"
,24:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0456\u0457 (\u0432\u043B\u0430\u0441\u043D\u0435 "+
"\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E)"};C.BqZ={
1:"deformitet prilikom ro\u0111enja",2:"\u0412\u0440\u043E\u0434\u0435\u043D\u043E \u0443\u0432\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u5148\u5929\u7F3A\u9677",25:"Uro\u0111ena mana",4:"Vrozen\xE1 vada",5:"F\xF8dselsdefekt"
,0:"Birth defect",6:"Miskraam",7:"S\xFCnnidefekt",8:"Synnynn\xE4inen vika",9:"Anomalie de naissance"
,10:"Missgeburt",11:"\u0393\u03B5\u03BD\u03B5\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03C9\u03BC\u03B1\u03BB\u03AF\u03B1"
,12:"Sz\xFClet\xE9si rendelleness\xE9g",13:"Difetto congenito",15:"Iedzimts defekts"
,26:"Gimdos defektas",16:"F\xF8dselsskade",17:"Wada wrodzona",18:"Defeito cong\xEAnito"
,19:"Defect congenital",20:"\u0412\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0444\u0435\u043A\u0442"
,27:"Prirojena napaka",21:"Defecto de nacimiento",22:"F\xF6delsefel",23:"Do\u011Fum kusuru"
,24:"\u0423\u0440\u043E\u0434\u0436\u0435\u043D\u0438\u0439 \u0434\u0435\u0444\u0435\u043A\u0442"
};C.Bq0={1:"mrtvoro\u0111eno",2:"\u041C\u044A\u0440\u0442\u0432\u043E \u0440\u043E\u0434\u0435\u043D\u043E"
,3:"\u6B7B\u80CE",25:"Mrtvoro\u0111en\u010Dad",4:"Mrtv\u011B narozen\xFD",5:"D\xF8df\xF8dt"
,0:"Dead born",6:"Doodgeboren",7:"Surnults\xFCnd",8:"Syntynyt kuolleena",9:"Mort-n\xE9"
,10:"Tot geboren",11:"\u039D\u03B5\u03BA\u03C1\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7"
,12:"Halva sz\xFCletett",13:"Nato morto",15:"Mirusi dzimusi",26:"Negyvas gim\u0119s"
,16:"D\xF8d f\xF8dt",17:"Urodzony martwy",18:"Nado-morto",19:"N\u0103scut mort",
20:"\u041C\u0451\u0440\u0442\u0432\u043E\u0440\u043E\u0436\u0434\u0451\u043D\u043D\u044B\u0439"
,27:"Mrtvorojen",21:"Nacido muerto",22:"D\xF6df\xF6dd",23:"\xD6l\xFC do\u011Fum"
,24:"\u041C\u0435\u0440\u0442\u0432\u043E\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u0438\u0439"
};C.Bq1={1:"Uginulo: nakon 3. dana",2:"\u0423\u043C\u0438\u0440\u044F\u043B\u043E: \u0441\u043B\u0435\u0434 3 "+
"\u0434\u0435\u043D",3:"\u6B7B\u4EA1\uFF1A\u5F9E\u7B2C\u4E09\u5929\u8D77",25:"Preminuo: od tre\u0107eg dana nadalje"
,4:"Zem\u0159el: od t\u0159et\xEDho dne d\xE1le",5:"D\xF8d: fra dag 3 og fremefter"
,0:"Died: from day 3 onwards",6:"Dood: vanaf dag 3",7:"Suri: alates 3. p\xE4evast"
,8:"Kuollut: p\xE4iv\xE4st\xE4 3 l\xE4htien",9:"D\xE9c\xE8s\xA0: \xE0 partir du troisi\xE8me jour"
,10:"Verendet: ab 3. Tag",11:"\u03A0\u03AD\u03B8\u03B1\u03BD\u03B5: \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD "+
"3\u03B7 \u03B7\u03BC\u03AD\u03C1\u03B1 \u03BA\u03B1\u03B9 \u03BC\u03B5\u03C4\u03AC"
,12:"Meghalt: a 3. napt\xF3l kezdve",13:"Deceduto: dal giorno 3 in poi",15:"Miris: no tre\u0161\u0101s dienas"
,26:"Mir\u0117: nuo 3 dienos",16:"D\xF8de: fra dag 3 og utover",17:"Zmar\u0142: od 3 dnia wzwy\u017C"
,18:"Morreu: a partir do dia 3 em diante",19:"Decedat: de la ziua 3 \xEEnainte",
20:"\u0423\u043C\u0435\u0440: \u0441 3-\u0433\u043E \u0434\u043D\u044F",27:"Umrli: od tretjega dne dalje"
,21:"Muerto: a partir del tercer d\xEDa",22:"Avled: fr\xE5n dag 3 och fram\xE5t"
,23:"\xD6l\xFCm: 3. g\xFCnden itibaren",24:"\u041F\u043E\u043C\u0435\u0440: \u0437 3-\u0433\u043E \u0434\u043D\u044F"
};C.Bq2={1:"Uginulo: nakon 48 h",2:"\u0423\u043C\u0438\u0440\u044F\u043B\u043E: \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 "+
"\u043D\u0430 48 \u0447\u0430\u0441\u0430",3:"\u6B7B\u4EA1\uFF1A48\u5C0F\u6642\u5167"
,25:"Preminuo: unutar 48 sati",4:"Zem\u0159el: do 48 hodin",5:"D\xF8d: inden for 48 timer"
,0:"Died: within 48 h",6:"Dood: in eerste 48 uur",7:"Suri: 48 tunni jooksul",8:"Kuollut: 48 tunnin kuluessa"
,9:"D\xE9c\xE8s\xA0: dans le 48h",10:"Verendet: erste 48 h",11:"\u03A0\u03AD\u03B8\u03B1\u03BD\u03B5: \u03BC\u03AD\u03C3\u03B1 \u03C3\u03B5 "+
"48 \u03CE\u03C1\u03B5\u03C2",12:"Meghalt: 48 \xF3r\xE1n bel\xFCl.",13:"Deceduto: entro 48 ore"
,15:"Mir\u0161ana: 48 stundu laik\u0101",26:"Mir\u0117: per 48 valandas",16:"D\xF8de: innen 48 timer"
,17:"Zmar\u0142: w ci\u0105gu 48 godzin",18:"Morreu: dentro de 48 horas",19:"Decedat: \xEEn 48 de ore"
,20:"\u0423\u043C\u0435\u0440: \u043F\u0435\u0440\u0432\u044B\u0435 48 \u0447\u0430\u0441\u043E\u0432"
,27:"Umrlo: v 48 urah",21:"Muerto: en las primeras 48 horas",22:"Dog: inom 48 timmar"
,23:"\xD6l\xFCm: 48 saat i\xE7inde",24:"\u041F\u043E\u043C\u0435\u0440: \u043F\u0435\u0440\u0448\u0456 48 \u0433\u043E\u0434\u0438\u043D"
};C.Bq3={1:"Ostaje kod prodava\u010Da",2:"\u041E\u0441\u0442\u0430\u0432\u0430 \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430 "+
"\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0447\u0430",3:"\u7559\u5728\u8CE3\u65B9\u7684\u8FB2\u5834"
,25:"Ostaje na farmi prodavatelja",4:"Z\u016Fst\xE1v\xE1 na farm\u011B prod\xE1vaj\xEDc\xEDho"
,5:"Forbliver p\xE5 s\xE6lgers g\xE5rd",0:"Remains at seller\u2019s farm",6:"Blijft bij verkoper"
,7:"J\xE4\xE4b m\xFC\xFCja farmi",8:"Pysyy myyj\xE4n tilalla",9:"Demeure \xE0 la ferme du vendeur"
,10:"Verbleib beim Verk\xE4ufer",11:"\u03A0\u03B1\u03C1\u03B1\u03BC\u03AD\u03BD\u03B5\u03B9 \u03C3\u03C4\u03B7 "+
"\u03C6\u03AC\u03C1\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03C9\u03BB\u03B7\u03C4\u03AE"
,12:"Marad az elad\xF3 gazdas\xE1g\xE1ban",13:"Resta nella fattoria del venditore"
,15:"Paliek p\u0101rdev\u0113ja saimniec\u012Bb\u0101",26:"Lieka pardav\u0117jo \u016Bkyje"
,16:"Forblir p\xE5 selgers g\xE5rd",17:"Pozostaje na farmie sprzedawcy",18:"Permanece na fazenda do vendedor"
,19:"R\u0103m\xE2ne la ferma v\xE2nz\u0103torului",20:"\u041E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0444\u0435\u0440\u043C\u0435 "+
"\u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430",27:"Ostane na kmetiji prodajalca"
,21:"Permanece en la granja del vendedor",22:"Kvar p\xE5 s\xE4ljarens g\xE5rd",23:
"Sat\u0131c\u0131n\u0131n \xE7iftli\u011Finde kalan",24:"\u0417\u0430\u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0456 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F"
};C.Bq4={1:"Abortirano",2:"\u0410\u0431\u043E\u0440\u0442",3:"\u4E2D\u6B62",25:"Prekinuti"
,4:"P\u0159eru\u0161it",5:"Afbryd",0:"Abort",6:"Afbreken",7:"Katkesta",8:"Keskeytt\xE4\xE4"
,9:"Fausse couche",10:"Ver~kalbung",11:"\u03A0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03C4\u03B5 \u03C3\u03B5 "+
"\u03B1\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE",12:"Megszak\xEDt",13:"Abortire",15:
"Abort\u0113t",26:"At\u0161aukti",16:"Avbryte",17:"Przerwij",18:"Abortar",19:"Avorta"
,20:"\u0410\u0431\u043E\u0440\u0442",27:"Prekini",21:"Aborto",22:"Avbryt",23:"D\xFC\u015F\xFCk"
,24:"\u0410\u0431\u043E\u0440\u0442"};C.Bq5={1:"Tov (prodato)",2:"\u0413\u043E\u0432\u0435\u0434\u043E (\u043F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E)"
,3:"\u725B\u8089\uFF08\u552E\u51FA\uFF09",25:"Govedina (prodano)",4:"Hov\u011Bz\xED maso (prod\xE1van\xE9)"
,5:"Oksek\xF8d (solgt)",0:"Beef (sold)",6:"Mest (verkocht)",7:"Veiseliha (m\xFC\xFCdud)"
,8:"Liharotu (myyty)",9:"Engraissement (vente)",10:"Mast (Verkauf)",11:"\u039A\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5)",12:"Marhah\xFAs (eladva)",13:
"Manzo (venduto)",15:"Liellopu ga\u013Ca (p\u0101rdota)",26:"Jautiena (parduota)"
,16:"Kj\xF8tt (solgt)",17:"Wo\u0142owina (sprzedana)",18:"Carne bovina (vendida)"
,19:"Vit\u0103 (v\xE2ndut\u0103)",20:"\u041D\u0430 \u043C\u044F\u0441\u043E (\u043F\u0440\u043E\u0434\u0430\u0436\u0430)"
,27:"Govedina (prodano)",21:"Carne (vendido)",22:"N\xF6tk\xF6tt (s\xE5ldes)",23:
"Et\xE7i (sat\u0131ld\u0131)",24:"\u041D\u0430 \u043C\'\u044F\u0441\u043E (\u043F\u0440\u043E\u0434\u0430\u0436)"
};C.Bq6={1:"Uzgoj (prodato)",2:"\u0420\u0430\u0437\u0432\u044A\u0436\u0434\u0430\u043D\u0435 (\u043F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E)"
,3:"\u7E41\u6B96\uFF08\u552E\u51FA\uFF09",25:"Uzgoj (prodaja)",4:"Chov (prod\xE1n)"
,5:"Opdr\xE6t (solgt)",0:"Breeding (sold)",6:"Fokkerij (verkocht)",7:"Aretus (m\xFC\xFCdud)"
,8:"Jalostus (myyty)",9:"\xC9levage (vente)",10:"Zucht (Verkauf)",11:"\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5)",12:"Teny\xE9szt\xE9s (eladva)"
,13:"Allevamento (venduto)",15:"Audz\u0113\u0161ana (p\u0101rdots)",26:"Veisimas (parduotas)"
,16:"Avl (solgt)",17:"Hodowla (sprzedana)",18:"Reprodu\xE7\xE3o (vendido)",19:"Reproducere (v\xE2ndut)"
,20:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438 (\u043F\u0440\u043E\u0434\u0430\u0436\u0430)"
,27:"Reja (prodano)",21:"Cr\xEDa (vendido)",22:"Avel (s\xE5ld)",23:"Yeti\u015Ftirme (sat\u0131ld\u0131)"
,24:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0456\u0457 (\u043F\u0440\u043E\u0434\u0430\u0436\u0443)"
};C.Bq7={1:"vibrator",2:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u043C\u043E\u0442\u043E\u0440"
,3:"\u632F\u52D5\u99AC\u9054",25:"Vibracijski motor",4:"Vibra\u010Dn\xED motor",
5:"Vibrationsmotor",0:"Vibration motor",6:"Tril motor",7:"Vibratsioonimootor",9:
"Moteur \xE0 vibration",10:"Vibrationsmotor",11:"\u039C\u03BF\u03C4\u03AD\u03C1 \u03B4\u03CC\u03BD\u03B7\u03C3\u03B7\u03C2"
,12:"Rezg\u0151motor",13:"Motore a vibrazione",15:"Vibr\u0101cijas motors",26:"Vibracinis variklis"
,16:"Vibrasjonsmotor",17:"Silnik wibracyjny",18:"Motor de vibra\xE7\xE3o",19:"Motor de vibra\u021Bii"
,20:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 "+
"\u043C\u043E\u0442\u043E\u0440",27:"Vibracijski motor",21:"Motor de vibraci\xF3n"
,22:"Vibrationsmotor",23:"Titre\u015Fim motoru",24:"\u0412\u0456\u0431\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043C\u043E\u0442\u043E\u0440"
};C.As0={1:"vibraciju pokrenuti pritiskom na tipku",2:"\u0412\u0438\u0431\u0440. \u0431\u0443\u0442\u043E\u043D"
,3:"\u555F\u52D5\u4E86Keypress\u4E0A\u7684\u632F\u52D5",25:"Vibracija pri pritisku tipke"
,4:"Vibrace p\u0159i stisku kl\xE1vesy",5:"Vibration ved tastetryk",0:"Vibration on keypress"
,6:"Vibraties toetsen",7:"Klahvivajutusel algab vibratsioon",8:"T\xE4rin\xE4 painalluksella"
,9:"Vibration touche",10:"Vibration Tastendruck",11:"\u0394\u03CC\u03BD\u03B7\u03C3\u03B7 \u03BA\u03B1\u03C4\u03AC \u03C4\u03BF "+
"\u03C0\u03AC\u03C4\u03B7\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF\u03C5"
,12:"Billenty\u0171le\xFCt\xE9s rezg\xE9se",13:"Vibrazione alla pressione dei tasti"
,15:"Tausti\u0146a nospie\u0161anas vibr\u0101cija",26:"Vibracija paspaudus klavi\u0161\u0105"
,16:"Vibrasjon ved tasting aktivert",17:"Wibracja przy naci\u015Bni\u0119ciu klawisza"
,18:"Vibra\xE7\xE3o ao pressionar a tecla",19:"Vibra\u021Bie la ap\u0103sarea tastei"
,20:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0436\u0430\u0442\u0438\u044F "+
"\u043A\u043D\u043E\u043F\u043A\u0438",27:"Vibracija ob pritisku tipke",21:"Vibraci\xF3n al pulsar un bot\xF3n"
,22:"Vibration vid knapptryckning",23:"Tu\u015Fa bas\u0131ld\u0131\u011F\u0131nda titre\u015Fimi aktif hale getir"
,24:"\u0412\u0456\u0431\u0440\u0430\u0446\u0456\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u043D\u043D\u044F "+
"\u043A\u043D\u043E\u043F\u043A\u0438"};C.Bq_={1:"Demo CitalControl",2:"\u0414\u0435\u043C\u043E VitalControl"
,3:"\u6F14\u793A VitalControl",0:"Demo VitalControl",7:"VitalControl demo",11:"\u0395\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7 VitalControl"
,18:"Demo Controle Vital",20:"\u0414\u0435\u043C\u043E VitalControl",21:"Demostraci\xF3n de VitalControl"
,24:"\u0414\u0435\u043C\u043E VitalControl"};C.Bq$={1:"WLAN \u010Dip",2:"\u0427\u0438\u043F WiFI"
,3:"WLAN \u6676\u7247",25:"WLAN \u010Dip",4:"\u010Dip WLAN",5:"WLAN-chip",0:"WLAN Chip"
,7:"WLAN kiip",8:"WLAN -siru",9:"Puce WIFI",11:"WLAN \u03C4\u03C3\u03AF\u03C0",12:
"WLAN chip",13:"Chip WLAN",15:"WLAN mikrosh\u0113ma",26:"Mikroschemos WLAN",17:"Czip WLAN"
,18:"Chip WLAN",19:"Cip WLAN",20:"\u0427\u0438\u043F WiFI",27:"\u010Dip WLAN",21:
"LED blanco",22:"WLAN-chip",23:"WLAN \xC7ipi",24:"\u0427\u0456\u043F WiFi"};C.Bra={
1:"\u010Cekanje da se vrijednost o\u010Dita",2:"\u0418\u0437\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u043D\u0430 "+
"\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442",3:"\u7B49\u5F85\u7A69\u5B9A\u7684\u503C"
,25:"\u010Cekanje na stabilnu vrijednost",4:"\u010Cek\xE1n\xED na stabiln\xED hodnotu"
,5:"Venter p\xE5 stabil v\xE6rdi",0:"Waiting for stable value",6:"Wachten op stabiele waarde"
,7:"Stabiilse v\xE4\xE4rtuse ootamine",8:"Odotetaan vakaata arvoa",9:"En attente d\u2019une\nvaleur stable"
,10:"Warte auf stabilen Wert",11:"\u0391\u03BD\u03B1\u03BC\u03BF\u03BD\u03AE \u03B3\u03B9\u03B1 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AE "+
"\u03C4\u03B9\u03BC\u03AE",12:"V\xE1rakoz\xE1s stabil \xE9rt\xE9kre",13:"In attesa di un valore stabile"
,15:"Gaida stab\u012Blu v\u0113rt\u012Bbu",26:"Laukiama stabilios vert\u0117s",16:
"Venter p\xE5 stabil verdi",17:"Czekaj\u0105c na stabiln\u0105 warto\u015B\u0107"
,18:"Aguardando por valor est\xE1vel",19:"A\u0219tept\xE2nd o valoare stabil\u0103"
,20:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",27:"\u010Cakanje na stabilno vrednost"
,21:"Esperando valor estable",22:"V\xE4ntar p\xE5 stabilt v\xE4rde",23:"Sabit de\u011Fer bekleniyor"
,24:"\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"};C.WarningActionNotApplicable={
1:"Akcija \'{1}\' nije primjenjiva za odabranu \u017Eivotinju vrste \'{2}\'!",2:
"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u201E{1}\u201C "+
"\u043D\u0435 \u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043C\u043E "+"\u0437\u0430 \u0438\u0437\u0431\u0440\u0430\u043D\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u043E\u0442 \u0442\u0438\u043F \u201E{2}\u201C!",3:"\u52D5\u4F5C \'{1}\' \u4E0D\u9069\u7528\u65BC\u6240\u9078\u7684\u52D5\u7269\u985E\u578B "+
"\'{2}\'\uFF01",25:"Radnja \'{1}\' nije primjenjiva za odabranu \u017Eivotinju vrste \'{2}\'!"
,4:"Akce \'{1}\' nen\xED vhodn\xE1 pro vybran\xE9 zv\xED\u0159e typu \'{2}\'!",5:
"Handlingen \'{1}\' er ikke anvendelig for det valgte dyr af typen \'{2}\'!",0:"Action \u2019{1}\u2019 is not applicable for the selected animal of type "+
"\u2019{2}\u2019!",6:"Actie \u2019{1}\u2019 is niet beschikbaar voor het geselecteerde dier of "+
"type \u2019{2}\u2019",7:"Toiming \u2019{1}\u2019 ei ole valitud loomaliigi \u2019{2}\u2019 jaoks "+
"kohaldatav!",8:"Toiminto \'{1}\' ei sovellu valitulle tyypin \'{2}\' el\xE4imelle!"
,9:"L\'action \u2019{1}\u2019 n\'est pas applicable \xE0 l\'animal de type "+"\u2019{2}\u2019\xA0!"
,10:"Die Aktion \u2019{1}\u2019 ist f\xFCr das Tier vom Typ \u2019{2}\u2019 "+"nicht anwendbar!"
,11:"\u0397 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \"{1}\" \u03B4\u03B5\u03BD "+
"\u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03B9\u03BC\u03B7 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF "+
"\u03B6\u03CE\u03BF \u03C4\u03CD\u03C0\u03BF\u03C5 \"{2}\"!",12:"Az \u201E{1}\u201D m\u0171velet nem alkalmazhat\xF3 a kiv\xE1lasztott "+
"\u201E{2}\u201D t\xEDpus\xFA \xE1llatra!",13:"L\'azione \'{1}\' non \xE8 applicabile per l\'animale selezionato di tipo "+
"\'{2}\'!",15:"Darb\u012Bba \'{1}\' nav piem\u0113rota izv\u0113l\u0113tajam dz\u012Bvnieka "+
"tipam \'{2}\'!",26:"Veiksmas \'{1}\' netaikomas pasirinktam gyv\u016Bnui tipo \'{2}\'!"
,16:"Handling \'{1}\' er ikke aktuelt for det valgte dyret av type \'{2}\'!",17:
"Dzia\u0142anie \'{1}\' nie jest odpowiednie dla wybranego zwierz\u0119cia "+"typu \'{2}\'!"
,18:"A a\xE7\xE3o \'{1}\' n\xE3o \xE9 aplic\xE1vel para o animal selecionado "+"do tipo \'{2}\'!"
,19:"Ac\u021Biunea \'{1}\' nu este aplicabil\u0103 pentru animalul selectat "+"de tipul \'{2}\'!"
,20:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u2019{1}\u2019 \u043D\u0435 "+
"\u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u043E "+
"\u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430 "+
"\u2019{2}\u2019!",27:"Dejanje \'{1}\' ni primerno za izbrano \u017Eival vrste \'{2}\'!"
,21:"Action \'{1}\' is not applicable for the selected animal of type \'{2}\'!\" "+
"- \"La acci\xF3n \'{1}\' no es aplicable para el animal seleccionado de "+"tipo \'{2}\'."
,22:"\xC5tg\xE4rden \'{1}\' \xE4r inte till\xE4mplig f\xF6r det valda djuret "+"av typen \'{2}\'!"
,23:"\'{1}\' eylemi se\xE7ilen \'{2}\' t\xFCr\xFCndeki hayvan i\xE7in ge\xE7erli "+
"de\u011Fil!",24:"\u0414\u0456\u044F \u2019{1}\u2019 \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0431\u0443\u0442\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0430 "+"\u0434\u043B\u044F \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0442\u0438\u043F\u0443 \u2019{2}\u2019!"};C.Baz={1:"Oprez:\nID \u017Eivotinje {1} ve\u0107 postoji"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u0432\u0435\u0447\u0435 "+
"\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430!",3:"\u5C0F\u725B\u8B58\u5225\u865F {1}\u5DF2\u7D93\u5B58\u5728\uFF01"
,25:"Pozor!\n\n\u017Divotinjski ID {1} ve\u0107 postoji!",4:"ID zv\xED\u0159ete {1}  ji\u017E existuje"
,5:"Opm\xE6rksomhed!\n\nDyrets ID {1} eksisterer allerede!",0:"Attention!\n\nAnimal ID {1} already exists!"
,6:"Attentie!\nDier met ID {1} bestaat al!",7:"T\xE4helepanu!\n\nLooma ID {1} on juba kasutusel!"
,8:"Huomio!\nEl\xE4intunnus {1} on jo olemassa!",9:"Attention\xA0!\nAnimal ID {1} existe d\xE9j\xE0\xA0!"
,10:"Achtung!\n\nTier mit ID {1} bereits vorhanden!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\u0391\u03C5\u03C4\u03CC "+
"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B7\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7"
,12:"Figyelem!\n\nAz \xE1llat azonos\xEDt\xF3 {1} m\xE1r l\xE9tezik!",13:"Attenzione!\n\nL\'ID animale {1} esiste gi\xE0!"
,15:"Uzman\u012Bbu!\n\nDz\u012Bvnieka ID {1} jau eksist\u0113!",26:"D\u0117mesio!\n\nGyv\u016Bno ID {1} jau egzistuoja!"
,16:"OBS!\nDyr- ID eksisterer",17:"Uwaga!\n\nIdentyfikator zwierz\u0119cia {1} ju\u017C istnieje!"
,18:"Aten\xE7\xE3o!\n\nO ID do animal {1} j\xE1 existe!",19:"Aten\u021Bie!\n\nID-ul animalului {1} exist\u0103 deja!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C {1} \u0443\u0436\u0435 "+"\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"
,27:"Pozor!\n\nID \u017Eivali {1} \u017Ee obstaja!",21:"Atenci\xF3n:\n\xA1Ya existe un animal con ID {1}!"
,22:"Uppm\xE4rksamhet!\n\nDjur-ID {1} finns redan!",23:"Dikkat!\n\nHayvan Kimli\u011Fi {1} zaten mevcut!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\u0422\u0432\u0430\u0440\u0438\u043D\u0430 "+
"\u2116 {1} \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454"};C.Brb={1:"Pa\u017Enja!\n\nPrilikom vra\u0107anja sigurnosne kopije, va\u0161i trenutni "+
"podaci o \u017Eivotinjama i ure\u0111aju \u0107e biti prepisani!\nDa li "+"zaista \u017Eelite nastaviti s vra\u0107anjem podataka?"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041A\u043E\u0433\u0430\u0442\u043E "+
"\u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u0442\u0435 "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E \u043A\u043E\u043F\u0438\u0435, "+
"\u0432\u0430\u0448\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438 "+"\u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0449\u0435 "+
"\u0431\u044A\u0434\u0430\u0442 \u043F\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438!\n\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 "+
"\u043B\u0438 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u0442\u0435 "+
"\u0441 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435?",3:"\u6CE8\u610F\uFF01\n\u7576\u60A8\u6062\u5FA9\u5099\u4EFD\u6642\uFF0C\u60A8\u76EE\u524D\u7684\u52D5\u7269\u548C\u8A2D\u5099\u6578\u64DA\u5C07\u6703\u88AB\u8986\u84CB\uFF01\n\u78BA\u5B9A\u8981\u7E7C\u7E8C\u6062\u5FA9\u6578\u64DA\u55CE\uFF1F"
,25:"Pa\u017Enja!\n\nPrilikom vra\u0107anja sigurnosne kopije, trenutni podaci "+
"o \u017Eivotinjama i ure\u0111aju bit \u0107e prebrisani!\nZaista \u017Eelite "+
"nastaviti s vra\u0107anjem podataka?",4:"Pozor!\nP\u0159i obnov\u011B z\xE1lohy budou va\u0161e aktu\xE1ln\xED data "+
"o zv\xED\u0159atech a za\u0159\xEDzen\xED p\u0159eps\xE1na! Opravdu chcete "+"pokra\u010Dovat v obnov\u011B dat?"
,5:"Advarsel!\nN\xE5r du gendanner en sikkerhedskopi, vil dine nuv\xE6rende "+"dyre- og enhedsdata blive overskrevet!\nVil du virkelig forts\xE6tte med "+
"at gendanne data?",0:"Attention!\n\nWhen restoring a backup, your current animal and device data "+
"wil be overwritten!\nReally proceed with data restore?",6:"Attentie\n\n Als je er nu een back Up komt, wordt het huidige dier overschreven"
,7:"T\xE4helepanu!\nVarunduse taastamisel kirjutatakse \xFCle teie praegused "+"looma- ja seadmeandmed!\n\nKas soovite kindlasti andmete taastamisega j\xE4tkata?"
,8:"Huomio!\nKun palautat varmuuskopion, nykyiset el\xE4in- ja laitetietosi "+"korvataan!\nJatketaanko tietojen palauttamista?"
,9:"Attention\xA0!\nLors de la restau~ration de la sauve~garde, vos don~n\xE9es "+
"actuelles sur les animaux et les appareils seront remplac\xE9es\xA0! D\xE9~marrer "+
"vraiment la restauration\xA0?",10:"Achtung!\nBeim Wiederher~stellen der Daten~sicherung werden ihre aktuellen "+
"Tier- und Ger\xE4tedaten \xFCberschrieben!\nR\xFCcksicherung wirklich "+"starten?"
,11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\u039A\u03B1\u03C4\u03AC "+"\u03C4\u03B7\u03BD \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC "+
"\u03B5\u03BD\u03CC\u03C2 \u03B1\u03BD\u03C4\u03B9\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 "+
"\u03B1\u03C3\u03C6\u03B1\u03BB\u03B5\u03AF\u03B1\u03C2, \u03C4\u03B1 \u03C4\u03C1\u03AD\u03C7\u03BF\u03BD\u03C4\u03B1 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03C9\u03BD \u03B6\u03CE\u03C9\u03BD "+
"\u03BA\u03B1\u03B9 \u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03C3\u03B1\u03C2 \u03B8\u03B1 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03B1\u03B8\u03BF\u03CD\u03BD!\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC \u03BD\u03B1 "+"\u03C0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C3\u03C4\u03B7\u03BD "+
"\u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD;"
,12:"Figyelem!\nAmikor egy biztons\xE1gi ment\xE9st \xE1ll\xEDt vissza, a jelenlegi "+
"\xE1llat- \xE9s eszk\xF6zadatok fel\xFCl\xEDr\xE1sra ker\xFClnek!\nVal\xF3ban "+
"folytatja az adatok vissza\xE1ll\xEDt\xE1s\xE1t?",13:"Attenzione!\nQuando si ripristina un backup, i dati attuali degli animali "+
"e del dispositivo verranno sovrascritti!\nProcedere realmente con il ripristino "+
"dei dati?",15:"Uzman\u012Bbu!\n\nVeicot dubl\u0113juma atjauno\u0161anu, tiks p\u0101rrakst\u012Bti "+
"pa\u0161reiz\u0113jie dz\u012Bvnieku un ier\u012Bces dati!\n\nVai tie\u0161\u0101m "+
"v\u0113laties turpin\u0101t datu atjauno\u0161anu?",26:"D\u0117mesio!\nAtkuriant atsargin\u0119 kopij\u0105, dabartiniai gyv\u016Bn\u0173 "+
"ir \u012Frenginio duomenys bus perra\u0161yti! Ar tikrai norite t\u0119sti "+"duomen\u0173 atk\u016Brim\u0105?"
,16:"Oppmerksomhet!\n\nN\xE5r du gjenoppretter en sikkerhetskopi, vil dine "+"n\xE5v\xE6rende dyre- og enhetsdata bli overskrevet!\nVil du virkelig "+
"fortsette med datagjenoppretting?",17:"Uwaga!\nPrzywracaj\u0105c kopi\u0119 zapasow\u0105, bie\u017C\u0105ce "+
"dane o zwierz\u0119tach i urz\u0105dzeniach zostan\u0105 nadpisane!\nCzy "+"na pewno kontynuowa\u0107 przywracanie danych?"
,18:"Aten\xE7\xE3o!\n\nAo restaurar um backup, os dados atuais do seu animal "+"e dispositivo ser\xE3o sobrescritos!\nDeseja realmente prosseguir com "+
"a restaura\xE7\xE3o dos dados?",19:"Aten\u021Bie!\nC\xE2nd restaura\u021Bi o copie de rezerv\u0103, datele "+
"actuale ale animalului \u0219i ale dispozitivului vor fi suprascrise!\nDori\u021Bi "+
"s\u0103 continua\u021Bi cu restaurarea datelor?",20:"\u041F\u0440\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432~\u043B\u0435\u043D\u0438\u0438 "+
"\u0440\u0435~\u0437\u0435\u0440\u0432~\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\u0442\u0435~\u043A\u0443~\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0438 \u0443\u0441\u0442~\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u043F\u0435~\u0440\u0435\u0437\u0430~\u043F\u0438\u0441\u0430\u043D\u044B! "+
"\u0412\u044B \u0434\u0435\u0439~\u0441\u0442\u0432~\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E~\u0434\u043E\u043B~\u0436\u0438\u0442\u044C "+
"\u0432\u043E\u0441\u0441\u0442\u0430~\u043D\u043E\u0432~\u043B\u0435\u043D\u0438\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0445?",27:"Pozor!\n\nOb obnovitvi varnostne kopije bodo trenutni podatki o \u017Eivalih "+
"in napravi prepisani!\nRes \u017Eelite nadaljevati z obnovo podatkov?",21:"\xA1Atenci\xF3n!\nAl restaurar una copia de seguri~dad, sus datos ac~tuales "+
"de ani~ma~les y dispositi~vos se sobrescri~bir\xE1n. \xBFRealmente de~sea "+"continuar con la restau~ra~ci\xF3n de datos?"
,22:"Uppm\xE4rksamhet!\nN\xE4r du \xE5terst\xE4ller en s\xE4kerhetskopia kommer "+
"dina nuvarande djur- och enhetsdata att skrivas \xF6ver!\nVill du verkligen "+"forts\xE4tta med \xE5terst\xE4llningen av data?"
,23:"Dikkat!\nBir yede\u011Fi geri y\xFCklerken mevcut hayvan ve cihaz verilerinizin "+
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
,25:"Sinkronizirati podatke s dovodnikom? Podaci \u0107e biti izbrisani nakon "+
"toga!\nJeste li sigurni?",4:"Varov\xE1n\xED synchronizace dat",5:"Synkroniser data til feeder? Data vil blive slettet bagefter!\nEr du sikker?"
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
"t\xF6rl\u0151dnek!\nBiztos benne?",13:"Sincronizzare i dati al dispositivo di alimentazione? I dati verranno "+
"eliminati successivamente!\nSei sicuro?",15:"Sinhroniz\u0113t datus ar barot\u0101ju? Dati tiks dz\u0113sti p\u0113c "+
"tam!\nVai esat p\u0101rliecin\u0101ts?",26:"Sinchronizuoti duomenis \u012F maitintuv\u0105? Duomenys bus i\u0161trinti "+
"v\u0117liau!\nAr tikrai?",16:"Synkronisere data til automat? Data vil bli slettet etterp\xE5!\nEr du "+
"sikker?",17:"Synchronizowa\u0107 dane do podajnika? Dane zostan\u0105 usuni\u0119te "+
"p\xF3\u017Aniej!\nCzy jeste\u015B pewien?",18:"Sincronizar dados com o alimentador? Os dados ser\xE3o exclu\xEDdos depois!\nTem "+
"certeza?",19:"Sincroniza\u021Bi datele cu alimentatorul? Datele vor fi \u0219terse ulterior!\nSunte\u021Bi "+
"sigur?",20:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C? "+
"\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",27:"Sinhronizirajte podatke na podajalnik? Podatki bodo nato izbrisani!\nSte "+
"prepri\u010Dani?",21:"\xBFSincronizar datos con alimentador?\n\xA1A continuaci\xF3n se eliminar\xE1n "+
"los datos!\n\xBFEst\xE1 seguro?",22:"Synkronisera data till mataren? Data kommer att raderas efter\xE5t!\n\xC4r "+
"du s\xE4ker?",23:"Bilgi senkronizasyonu uyar\u0131s\u0131",24:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u0430\u043D\u0456 \u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C? "+
"\u041F\u0456\u0441\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0434\u0430\u043D\u0456 "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.Brc={1:"Oprez:\nStandardna markice imaju ID od 13, 14 ili 15 brojeva. Na skeniranoj "+
"markici se o\u010Ditavaj samo {1} brojeva!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:\n\u0421\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0430\u0449\u0438\u044F\u0442 "+
"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u0434\u044A\u043B\u044A\u0433 13, "+"14 \u0438\u043B\u0438 15 \u0446\u0438\u0444\u0440\u0438.\n\u0412\u044A\u043F\u0440\u0435\u043A\u0438 "+
"\u0442\u043E\u0432\u0430, \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 "+
"\u043C\u0430\u0440\u043A\u0430 \u0438\u043C\u0430 {1} \u0441\u0430\u043C\u043E "+
"\u0446\u0438\u0444\u0440\u0438!",3:"\u6CE8\u610F\uFF1A\n\u7B26\u5408\u898F\u5B9A\u7684\u52D5\u7269\u8B58\u5225\u78BC\u61C9\u70BA13\u300114\u621615\u4F4D\u6578\u3002\n\u7136\u800C\uFF0C\u6383\u63CF\u9032\u4F86\u7684\u8033\u6A19\u865F\u78BC\u50C5\u6709{1}\u4F4D\u6578\uFF01"
,25:"Upozorenje:\nValjani broj identifikacije \u017Eivotinje treba imati 13, "+"14 ili 15 znamenki.\nMe\u0111utim, skenirani broj markice u uhu ima samo "+
"{1} znamenki!",4:"Upozorn\u011Bn\xED:\nID zv\xED\u0159ete v souladu by m\u011Blo m\xEDt 13, "+
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
,13:"Attenzione:\nUn ID animale conforme dovrebbe essere largo 13, 14 o 15 "+"cifre.\nTuttavia, il numero del tag auricolare scansionato ha solo {1} "+
"cifre!",15:"Uzman\u012Bbu:\nAtbilsto\u0161am dz\u012Bvnieka ID j\u0101b\u016Bt 13, "+
"14 vai 15 ciparus gar\u0161.\nTom\u0113r iem\u0113r\u012Btais ausu birkas "+"numurs ir tikai {1} cipari!"
,26:"Atsargiai:\nTeisingas gyv\u016Bno ID tur\u0117t\u0173 b\u016Bti 13, 14 "+"arba 15 skaitmen\u0173.\nTa\u010Diau nuskaitytas auskar\u0173 numeris "+
"turi tik {1} skaitmenis!",16:"Forsiktig:\nEn kompatibel dyre-ID b\xF8r v\xE6re 13, 14 eller 15 sifre "+
"bred.\nMen \xF8remerkenummeret som skannes inn har bare {1} sifre!",17:"Ostrze\u017Cenie:\nZgodny numer identyfikacyjny zwierz\u0119cia powinien "+
"mie\u0107 13, 14 lub 15 cyfr.\nJednak zeskanowany numer kolczyka ma tylko "+"{1} cyfr!"
,18:"Cuidado:\nUm ID de animal conforme deve ter 13, 14 ou 15 d\xEDgitos.\nNo "+
"entanto, o n\xFAmero da etiqueta auricular escaneado possui apenas {1} "+"d\xEDgitos!"
,19:"Aten\u021Bie:\nUn ID de animal conform trebuie s\u0103 aib\u0103 13, 14 "+"sau 15 cifre.\nTotu\u0219i, num\u0103rul crotaliei scanate are doar {1} "+
"cifre!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 13, 14 \u0438\u043B\u0438 "+
"15 \u0446\u0438\u0444\u0440. \u041D\u0430 \u0441\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0439 "+
"\u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0435 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043E "+
"\u0442\u043E\u043B\u044C\u043A\u043E {1} \u0446\u0438\u0444\u0440(\u0430)!",27:
"Pozor:\nUstrezen identifikacijski broj \u017Eivali mora imeti 13, 14 ali "+"15 \u0161tevilk.\nVendar ima skenirana \u0161tevilka u\u0161esne znamke "+
"le {1} \u0161tevilk!",21:"Precauci\xF3n:\nUn ID de animal compatible debe tener 13, 14 o 15 d\xEDgitos "+
"de longitud.\nEl n\xFAmero de etiqueta auricular escaneado tiene solo "+"{1} d\xEDgitos"
,22:"Varning:\nEtt godk\xE4nt djur-ID ska vara 13, 14 eller 15 siffror brett.\nDock "+
"har det inskannade \xF6ronm\xE4rkesnumret endast {1} siffror!",23:"Dikkat:\nUyumlu bir hayvan kimli\u011Fi 13, 14 veya 15 hane geni\u015Fli\u011Finde "+
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
,25:"Svi podaci o \u017Eivotinjama i ure\u0111ajima bit \u0107e izbrisani i "+"u\u010Ditat \u0107e se demo podaci!\nJeste li sigurni?"
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
"adatok ker\xFClnek bet\xF6lt\xE9sre!\nBiztos benne?",13:"Tutti i dati degli animali e dei dispositivi saranno cancellati e verranno "+
"caricati i dati dimostrativi!\nSei sicuro?",15:"Visi dz\u012Bvnieku un ier\u012B\u010Du dati tiks dz\u0113sti un tiks "+
"iel\u0101d\u0113ti demonstr\u0101cijas dati!\nVai esat p\u0101rliecin\u0101ts?"
,26:"Visi gyv\u016Bn\u0173 ir \u012Frengini\u0173 duomenys bus i\u0161trinti "+"ir bus \u012Fkelti demonstraciniai duomenys! Ar esate tikri?"
,16:"Alle dyre- og enhetsdata vil bli slettet og demodata vil bli lastet inn!\nEr "+
"du sikker?",17:"Wszystkie dane dotycz\u0105ce zwierz\u0105t i urz\u0105dze\u0144 zostan\u0105 "+
"usuni\u0119te, a zostan\u0105 za\u0142adowane dane demonstracyjne!\nCzy "+"jeste\u015B pewien?"
,18:"Todos os dados de animais e dispositivos ser\xE3o exclu\xEDdos e dados "+"de demonstra\xE7\xE3o ser\xE3o carregados!\nTem certeza?"
,19:"Toate datele despre animale \u0219i dispozitive vor fi \u0219terse \u0219i "+
"datele demonstrative vor fi \xEEnc\u0103rcate!\nSunte\u021Bi sigur?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0431\u0443\u0434\u0443\u0442 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B, \u0430 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",27:"Vsi podatki o \u017Eivalih in napravah bodo izbrisani in nalo\u017Eeni "+
"bodo demonstracijski podatki!\nSte prepri\u010Dani?",21:"\xA1Se eliminar\xE1n todos los datos relacionados con los animales y el "+
"dispositivo, y se cargar\xE1n los datos de demostraci\xF3n!\n\xBFEst\xE1 "+"seguro?"
,22:"All djur- och enhetsdata kommer att raderas och demodata kommer att laddas "+
"in!\n\xC4r du s\xE4ker?",23:"T\xFCm hayvan ve cihaz verileri silinecek ve demo verileri y\xFCklenecek!\nEmin "+
"misiniz?",24:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0431\u0443\u0434\u0435 "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E, \u0430 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0456 "+
"\u0434\u0430\u043D\u0456 \u0431\u0443\u0434\u0443\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0456!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.Brd={1:"Pa\u017Enja!\n\nDa li zaista \u017Eelite odjaviti {1} \u017Eivotinja?"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 "+
"\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0434\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 "+
"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438?",3:"\u6CE8\u610F\uFF01\n\n\u60A8\u78BA\u5B9A\u8981\u53D6\u6D88\u8A3B\u518A "+
"{1} \u96BB\u52D5\u7269\u55CE\uFF1F",25:"Pozor!\n\n\u017Delite li stvarno odjaviti {1} \u017Eivotinja?"
,4:"Pozor!\n\nOpravdu chcete odregistrovat {1} zv\xED\u0159at?",5:"Opm\xE6rksomhed!\n\nVil du virkelig afmelde {1} dyr?"
,0:"Attention!\n\nDo you really want to unregister {1} animals?",6:"Attentie\n\nWil je echt dier {1} afmelden?"
,7:"T\xE4helepanu!\n\nKas soovite t\xF5esti t\xFChistada {1} looma registreerimise?"
,8:"Huomio!\n\nHaluatko varmasti poistaa {1} el\xE4imen rekister\xF6innin?",9:"Attention\xA0!\n\nVous voulez vraiment d\xE9sinscrire {1} animaux\xA0?"
,10:"Achtung!\n\nM\xF6chten Sie wirklich {1} Tiere abmelden?",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC \u03BD\u03B1 "+"\u03B1\u03C0\u03B5\u03B3\u03B3\u03C1\u03AC\u03C8\u03B5\u03C4\u03B5 {1} "+
"\u03B6\u03CE\u03B1;",12:"Figyelem!\n\nBiztosan szeretn\xE9d leiratkoztatni a(z) {1} \xE1llatot?"
,13:"Attenzione!\n\nVuoi davvero cancellare la registrazione di {1} animali?",15:
"Uzman\u012Bbu!\n\nVai tie\u0161\u0101m v\u0113laties atteikties no {1} "+"dz\u012Bvnieku re\u0123istr\u0101cijas?"
,26:"D\u0117mesio!\n\nAr tikrai norite atsiregistruoti {1} gyv\u016Bnus?",16:"Oppmerksomhet!\n\nVil du virkelig avregistrere {1} dyr?"
,17:"Uwaga!\n\nCzy naprawd\u0119 chcesz wyrejestrowa\u0107 {1} zwierz\u0119ta?",
18:"Aten\xE7\xE3o!\n\nVoc\xEA realmente deseja cancelar o registro de {1} "+"animais?"
,19:"Aten\u021Bie!\n\nDori\u021Bi cu adev\u0103rat s\u0103 anula\u021Bi \xEEnregistrarea "+
"pentru {1} animale?",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E {1} "+"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445?"
,27:"Pozor!\n\nAli res \u017Eelite odjaviti {1} \u017Eivali?",21:"\xA1Atenci\xF3n! \xBFRealmente desea desregistrar {1} animales?"
,22:"Uppm\xE4rksamhet!\n\nVill du verkligen avregistrera {1} djur?",23:"Dikkat!\n\nGer\xE7ekten {1} hayvan\u0131n kayd\u0131n\u0131 iptal etmek "+
"istiyor musunuz?",24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E "+
"\u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 "+
"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E {1} \u0442\u0432\u0430\u0440\u0438\u043D?"
};C.Bre={1:"Nedostaje ID \u017Eivotinje! Molimo odredite ID \u017Eivotinje koji je "+
"potrebno kreirati!",2:"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043B\u0438\u043F\u0441\u0432\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, "+
"\u043A\u043E\u0435\u0442\u043E \u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,3:"\u907A\u5931\u5C0F\u725B\u8B58\u5225\u865F\uFF01\n\u8ACB\u6307\u5B9A\u8981\u5EFA\u7ACB\u7684\u5C0F\u725B\u7684\u8B58\u5225\u865F\uFF01"
,25:"Nedostaje identifikacijski broj \u017Eivotinje!\nMolimo navedite ID \u017Eivotinje "+
"koja \u0107e biti kreirana!",4:"ID zv\xED\u0159ete chyb\xED",5:"Dyrets ID mangler!\nAngiv venligst ID\'et p\xE5 det dyr, der skal oprettes!"
,0:"Animal ID is missing!\nPlease specify the ID of the animal to be created!",6:
"Dier-ID kwijt!\nGraag ID van nieuwe dier aangeven!",7:"Looma ID puudu!\nPalun sisestage uule looma loomiseks tema ID!"
,8:"El\xE4imen tunnus puuttuu!\nM\xE4\xE4rit\xE4 luotavan el\xE4imen tunnus!",9:
"L\u2019ID de l\u2019animal est manquant\xA0! Veuillez sp\xE9cifier l\u2019ID "+
"de l\u2019animal \xE0 cr\xE9er\xA0!",10:"Tier-ID fehlt!\nBitte geben Sie die ID f\xFCr das neu zu erstellende Tier "+
"an!",11:"\u039B\u03B5\u03AF\u03C0\u03B5\u03B9 \u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5!\n\u03A0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03B8\u03B1 "+"\u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03B8\u03B5\u03AF!"
,12:"\xC1llat azonos\xEDt\xF3 hi\xE1nyzik!\nK\xE9rem, adja meg a l\xE9trehozand\xF3 "+
"\xE1llat azonos\xEDt\xF3j\xE1t!",13:"L\'ID dell\'animale \xE8 mancante!\nSi prega di specificare l\'ID dell\'animale "+
"da creare!",15:"Dz\u012Bvnieka ID tr\u016Bkst!\nL\u016Bdzu, nor\u0101diet izveidojam\u0101 "+
"dz\u012Bvnieka ID!",26:"Gyv\u016Bno ID n\u0117ra!\nPra\u0161ome nurodyti kuriamo gyv\u016Bno ID!"
,16:"ID mangler!\nVennligst spesifiser ID-en til dyret som skal opprettes!",17:"Brakuje identyfikatora zwierz\u0119cia!\nProsz\u0119 poda\u0107 identyfikator "+
"zwierz\u0119cia, kt\xF3re ma zosta\u0107 utworzone!",18:"O ID do animal est\xE1 faltando!\nPor favor, especifique o ID do animal "+
"a ser criado!",19:"ID-ul animalului lipse\u0219te!\nV\u0103 rug\u0103m s\u0103 specifica\u021Bi "+
"ID-ul animalului care urmeaz\u0103 s\u0103 fie creat!",20:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u043E\u0432\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!"
,27:"ID \u017Eivali manjka!\nProsimo, navedite ID \u017Eivali, ki naj bo ustvarjena!"
,21:"\xA1Falta ID del animal!\n\xA1Indique ID del animal nuevo que va a crear!",
22:"Djurets ID saknas!\nV\xE4nligen ange ID f\xF6r djuret som ska skapas!",23:"Hayvan Kimli\u011Fi eksik!\nL\xFCtfen olu\u015Fturulacak hayvan\u0131n "+
"kimli\u011Fini belirtin!",24:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\u0411\u0443\u0434\u044C "+"\u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+
"ID-\u043D\u043E\u043C\u0435\u0440 \u043D\u043E\u0432\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"
};C.Brf={1:"\u017Divotinja odabrana kao majka nema dodijeljen 15-cifreni identifikacijski "+
"broj \u017Eivotinje.\n\u017Delite li kreirati \u017Eivotinju bez dodijeljene "+
"majke?",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u0438\u0437\u0431\u0440\u0430\u043D\u043E "+
"\u043A\u0430\u0442\u043E \u043C\u0430\u0439\u043A\u0430, \u043D\u044F\u043C\u0430 "+
"\u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D 15-\u0446\u0438\u0444\u0440\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E.\n\u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438 \u0434\u0430 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0437 \u043F\u0440\u0438\u0441\u0432\u043E\u0435\u043D\u0430 "+
"\u043C\u0430\u0439\u043A\u0430?",3:"\u6240\u9078\u7684\u6BCD\u755C\u672A\u88AB\u5206\u914D15\u4F4D\u6578\u7684\u52D5\u7269ID\u3002\n\u60A8\u8981\u5EFA\u7ACB\u4E00\u500B\u672A\u6307\u5B9A\u6BCD\u755C\u7684\u52D5\u7269\u55CE\uFF1F"
,25:"\u017Divotinja odabrana kao majka nema dodijeljen 15-znamenkasti identifikacijski "+
"broj \u017Eivotinje.\n\u017Delite li stvoriti \u017Eivotinju bez dodijeljene "+
"majke?",4:"Zv\xED\u0159e vybran\xE9 jako matka nem\xE1 p\u0159id\u011Blen\xE9 15m\xEDstn\xE9 "+
"ID zv\xED\u0159ete.\nChcete vytvo\u0159it zv\xED\u0159e bez p\u0159i\u0159azen\xE9 "+
"matky?",5:"Dyret valgt som moder har ikke et 15-cifret dyre-ID tildelt.\nVil du oprette "+
"et dyr uden en tildelt moder?",0:"The animal selected as dam does not have a 15-digit animal ID assigned.\nDo "+
"you want to create an animal without dam assigned?",6:"Het geselecteerde dier als moederdier heeft geen 15 cijferige ID geregistreerd. "+
"Wil je een dier aanmaken zonder geregistreerde moeder?",7:"Valitud emasloomal ei ole 15-kohalist ID-d.\nKas soovite luua looma ilma "+
"emaslooma m\xE4\xE4ramata?",8:"Em\xE4ksi valitulle el\xE4imelle ei ole m\xE4\xE4ritetty 15-numeroista "+
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
,13:"L\'animale selezionato come madre non ha un ID animale di 15 cifre assegnato.\nVuoi "+
"creare un animale senza madre assegnata?",15:"Izv\u0113l\u0113tajam dz\u012Bvniekam k\u0101 m\u0101tei nav pie\u0161\u0137irts "+
"15 ciparu dz\u012Bvnieka ID.\nVai v\u0113laties izveidot dz\u012Bvnieku "+"bez nor\u0101d\u012Btas m\u0101tes?"
,26:"Pasirinktam motinai n\u0117ra priskirtas 15 skaitmen\u0173 gyv\u016Bno "+"ID. Ar norite sukurti gyv\u016Bn\u0105 be priskirtos motinos?"
,16:"Dyret som er valgt som mor har ikke tildelt en 15-sifret dyre-ID.\nVil "+"du opprette et dyr uten mor ID?"
,17:"Wybrany zwierz\u0119cy rodzic nie posiada przypisanego 15-cyfrowego identyfikatora "+
"zwierz\u0119cia.\nCzy chcesz utworzy\u0107 zwierz\u0119 bez przypisanego "+"rodzica?"
,18:"O animal selecionado como matriz n\xE3o possui um ID de animal de 15 d\xEDgitos "+
"atribu\xEDdo.\nVoc\xEA deseja criar um animal sem matriz atribu\xEDda?",19:"Animalul selectat ca mam\u0103 nu are un ID de animal de 15 cifre atribuit.\nDori\u021Bi "+
"s\u0103 crea\u021Bi un animal f\u0103r\u0103 mam\u0103 atribuit\u0103?",20:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 "+
"\u043A\u0430\u043A \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043D\u0435 "+
"\u0438\u043C\u0435\u0435\u0442 15-\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u043E\u0433\u043E "+
"ID.\n\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0431\u0435\u0437 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F?",27:"Izbrana \u017Eival kot mati nima dodeljene 15-mestne identifikacijske "+
"\u0161tevilke \u017Eivali.\n\n\u017Delite ustvariti \u017Eival brez dodeljene "+
"matere?",21:"El animal seleccionado como madre no tiene asignado un ID de animal de "+
"15 d\xEDgitos.\n\xBFDesea crear un animal sin madre asignada?",22:"Djuret som valts som mamma har inte f\xE5tt ett 15-siffrigt djur-ID tilldelat.\nVill "+
"du skapa ett djur utan tilldelad mamma?",23:"Anne Hayvan olarak se\xE7ilen hayvana atanm\u0131\u015F 15 haneli bir "+
"hayvan kimli\u011Fi yok.\nAnne Hayvan olarak atanmam\u0131\u015F bir hayvan "+"olu\u015Fturmak istiyor musunuz?"
,24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u043E\u0431\u0440\u0430\u043D\u0430 "+
"\u044F\u043A \u043C\u0430\u0442\u0438 \u043D\u0435 \u043C\u0430\u0454 "+"15-\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u043E\u0433\u043E ID.\n\u0427\u0438 "+
"\u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0431\u0435\u0437 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u043C\u0430\u0442\u0435\u0440\u0456?"};C.Brg={1:"Ne mogu oduzeti identifikacijski broj \u017Eivotinje zbog nedostatka broja "+
"markice na uhu!\nMolimo navedite broj markice na uhu za \u017Eivotinju "+"koja \u0107e biti kreirana!"
,2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 "+
"\u043F\u0440\u0438\u0441\u043F\u0430\u0434\u043D\u0430\u0442\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043F\u043E\u0440\u0430\u0434\u0438 "+
"\u043B\u0438\u043F\u0441\u0432\u0430\u0449 \u043D\u043E\u043C\u0435\u0440 "+"\u043D\u0430 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u043A\u043E\u0435\u0442\u043E "+
"\u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,3:"\u7121\u6CD5\u6263\u9664\u52D5\u7269ID\uFF0C\u56E0\u8033\u6A19\u865F\u78BC\u907A\u5931\uFF01\n\u8ACB\u70BA\u8981\u5EFA\u6A94\u7684\u52D5\u7269\u6307\u5B9A\u4E00\u500B\u8033\u6A19\u865F\u78BC\uFF01"
,25:"Nije mogu\u0107e oduzeti identifikacijski broj \u017Eivotinje zbog nedostaju\u0107eg "+
"broja markice na uhu!\nMolimo navedite broj markice na uhu za \u017Eivotinju "+
"koja \u0107e biti kreirana!",4:"Nelze odvodit ID zv\xED\u0159ete kv\u016Fli chyb\u011Bj\xEDc\xEDmu \u010D\xEDslu "+
"zn\xE1mky na uchu!\nPros\xEDm, uve\u010Fte \u010D\xEDslo zn\xE1mky na uchu "+"pro vytvo\u0159en\xED z\xE1znamu o zv\xED\u0159eti!"
,5:"Kan ikke fratr\xE6kke dyrets ID p\xE5 grund af manglende \xF8rem\xE6rkenummer!\nAngiv "+
"venligst et \xF8rem\xE6rkenummer for at oprette dyret!",0:"Cannot deduct animal ID due to missing ear tag number!\nPlease specify "+
"an ear tag number for the animal to be created!",6:"Voor dat dier kan er geen ID gemaakt worden. Maak een ID aan voor het te "+
"maken dier",7:"Looma ID-d ei sa tuletada, kuna k\xF5rvam\xE4rgi number puudub!\nLooma "+
"loomiseks m\xE4\xE4rake palun k\xF5rvam\xE4rgi number!",8:"El\xE4imelle ei voi saada tunnusmerkki\xE4!\nAnna korvamerkkinumero uudelle "+
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
,13:"Non \xE8 possibile dedurre l\'ID dell\'animale a causa del numero del "+"marchio auricolare mancante!\nSi prega di specificare un numero di marchio "+
"auricolare per l\'animale da creare!",15:"Nevar atskait\u012Bt dz\u012Bvnieka ID, jo tr\u016Bkst ausu birkas numura!\nL\u016Bdzu, "+
"nor\u0101diet dz\u012Bvnieka izveido\u0161anai nepiecie\u0161amo ausu "+"birkas numuru!"
,26:"Negalima nustatyti gyv\u016Bno ID d\u0117l tr\u016Bkstamo ausies \u017Eymeklio "+
"numerio!\nPra\u0161ome nurodyti ausies \u017Eymeklio numer\u012F kuriamam "+"gyv\u016Bnui!"
,16:"Kan ikke trekke fra dyre-ID p\xE5 grunn av manglende \xF8remerkenummer!\nVennligst "+
"oppgi et \xF8remerkenummer for at dyret skal opprettes!",17:"Nie mo\u017Cna ustali\u0107 identyfikatora zwierz\u0119cia z powodu brakuj\u0105cego "+
"numeru kolczyka w uchu!\nProsz\u0119 poda\u0107 numer kolczyka dla tworzonego "+
"zwierz\u0119cia!",18:"N\xE3o \xE9 poss\xEDvel deduzir o ID do animal devido \xE0 falta do n\xFAmero "+
"da etiqueta auricular!\nPor favor, especifique um n\xFAmero de etiqueta "+"auricular para que o animal seja criado!"
,19:"Nu se poate deduce ID-ul animalului din cauza lipsei num\u0103rului de "+"crotalie!\nV\u0103 rug\u0103m s\u0103 specifica\u021Bi un num\u0103r de "+
"crotalie pentru animalul care urmeaz\u0103 s\u0103 fie creat!",20:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0438\u0437-\u0437\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F "+
"\u043D\u043E\u043C\u0435\u0440\u0430 \u0431\u0438\u0440\u043A\u0438 \u043D\u0430 "+
"\u0443\u0445\u0435!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+"\u0431\u0438\u0440\u043A\u0438 \u043D\u0430 \u0443\u0445\u0435 \u0434\u043B\u044F "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438"
,27:"Ni mogo\u010De dolo\u010Diti identifikacijske \u0161tevilke \u017Eivali "+"zaradi manjkajo\u010De \u0161tevilke uhanske znamke!\nProsimo, navedite "+
"\u0161tevilko uhanske znamke za ustvarjanje \u017Eivali!",21:"\xA1No se puede deducir la ID del animal debido a la falta del n\xFAmero "+
"de etiqueta de o\xEDdo! \xA1Especifique un n\xFAmero de etiqueta de o\xEDdo "+"para el animal que se va a crear!"
,22:"Kan inte dra av djur-ID p\xE5 grund av saknat \xF6ronm\xE4rkesnummer!\nV\xE4nligen "+
"ange ett \xF6ronm\xE4rkesnummer f\xF6r att skapa djuret!",23:"Kulak k\xFCpesi numaras\u0131 eksik oldu\u011Fundan hayvan kimli\u011Fi "+
"\xE7\u0131kar\u0131lam\u0131yor!\nL\xFCtfen olu\u015Fturulacak hayvan "+"i\xE7in bir kulak k\xFCpesi numaras\u0131 belirtin!"
,24:"\u041D\u0435 \u043C\u043E\u0436\u0443 \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 "+
"ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0447\u0435\u0440\u0435\u0437 "+
"\u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0441\u0435\u0440\u0435\u0436\u043A\u0438 \u0432 \u0432\u0443\u0441\u0456!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u043A\u0430\u0436\u0456\u0442\u044C "+"\u043D\u043E\u043C\u0435\u0440 \u0441\u0435\u0440\u0435\u0436\u043A\u0438 "+
"\u0432 \u0432\u0443\u0441\u0456 \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F "+
"\u0437\u0430\u043F\u0438\u0441\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"
};C.Brh={1:"Nijedan transponder nije povezan sa odabranom \u017Eivotinjom, stoga odspajanje "+
"transpondera nije mogu\u0107e!",2:"\u041D\u0438\u0442\u043E \u0435\u0434\u0438\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u043D\u0435 \u0435 \u0441\u0432\u044A\u0440\u0437\u0430\u043D \u0441 \u0438\u0437\u0431\u0440\u0430\u043D\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E, \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u043E "+
"\u043F\u0440\u0435\u043C\u0430\u0445\u0432\u0430\u043D\u0435\u0442\u043E "+"\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430\u0442\u0430 \u043D\u0430 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 \u0435 "+"\u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E!"
,3:"\u6240\u9078\u52D5\u7269\u672A\u9023\u63A5\u5230\u61C9\u7B54\u5668\uFF0C\u56E0\u6B64\u7121\u6CD5\u89E3\u9664\u61C9\u7B54\u5668\u7684\u9023\u63A5\uFF01"
,25:"Nijedan oda\u0161ilja\u010D nije povezan s odabranom \u017Eivotinjom, "+"stoga odspajanje oda\u0161ilja\u010Da nije mogu\u0107e!"
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
,13:"Nessun trasponder \xE8 collegato all\'animale selezionato, quindi lo scollegamento "+
"del trasponder non \xE8 possibile!",15:"Izv\u0113l\u0113tajam dz\u012Bvniekam nav piesaist\u012Bts neviens transponders, "+
"t\u0101p\u0113c transpondera atvieno\u0161ana nav iesp\u0113jama!",26:"N\u0117ra su pasirinktu gyv\u016Bnu susieto atsakiklio, tod\u0117l atsakiklio "+
"atsiejimas ne\u012Fmanomas!",16:"Ingen transponder er koblet til det valgte dyret, derfor er det ikke mulig "+
"\xE5 koble fra transponderen!",17:"Nie ma przypisanego transpondera do wybranego zwierz\u0119cia, dlatego "+
"od\u0142\u0105czenie transpondera nie jest mo\u017Cliwe!",18:"Nenhum transponder est\xE1 vinculado ao animal selecionado, portanto, "+
"o desvinculamento do transponder n\xE3o \xE9 poss\xEDvel!",19:"Niciun transponder nu este asociat cu animalul selectat, prin urmare, "+
"decuplarea transponderului nu este posibil\u0103!",20:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 "+
"\u0441\u0432\u044F\u0437\u0430\u043D \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 "+
"\u043E\u0442\u0432\u044F\u0437\u043A\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430!",27:"Noben transponder ni povezan z izbrano \u017Eivaljo, zato odklop transponderja "+
"ni mogo\u010D!",21:"No hay un transpondedor vinculado al animal seleccionado, por lo tanto, "+
"no es posible desvincular el trans~pondedor.",22:"Ingen s\xE4ndare \xE4r kopplad till det valda djuret, d\xE4rf\xF6r \xE4r "+
"det inte m\xF6jligt att koppla ifr\xE5n s\xE4ndaren!",23:"Se\xE7ilen hayvana hi\xE7bir aktar\u0131c\u0131 ba\u011Fl\u0131 de\u011Fil, "+
"dolay\u0131s\u0131yla aktar\u0131c\u0131n\u0131n ba\u011Flant\u0131s\u0131n\u0131n "+
"kesilmesi m\xFCmk\xFCn de\u011Fil!",24:"\u0416\u043E\u0434\u0435\u043D \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u043D\u0435 \u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0438\u0439 "+"\u0437 \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C, "+
"\u0442\u043E\u043C\u0443 \u0432\u0456\u0434\'\u0454\u0434\u043D\u0430\u043D\u043D\u044F "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u0435!"
};C.Bri={1:"Nije mogu\u0107e oduzeti ID \u017Eivotinje zbog nedostaju\u0107eg broja "+
"transpondera!\nMolimo navedite broj transpondera za kreiranje \u017Eivotinje!",
2:"\u041D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u043F\u0440\u0438\u0441\u043F\u0430\u0434\u043D\u0435 "+
"ID \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043F\u043E\u0440\u0430\u0434\u0438 "+
"\u043B\u0438\u043F\u0441\u0432\u0430\u0449 \u043D\u043E\u043C\u0435\u0440 "+"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u043A\u043E\u0435\u0442\u043E "+
"\u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,3:"\u7121\u6CD5\u56E0\u7F3A\u5C11\u6676\u7247\u7DE8\u865F\u800C\u6263\u9664\u52D5\u7269ID\uFF01\n\u8ACB\u70BA\u8981\u5EFA\u7ACB\u7684\u52D5\u7269\u6307\u5B9A\u4E00\u500B\u6676\u7247\u7DE8\u865F\uFF01"
,25:"Nije mogu\u0107e oduzeti identifikacijski broj \u017Eivotinje zbog nedostatka "+
"broja transpondera!\nMolimo navedite broj transpondera za kreiranje \u017Eivotinje!"
,4:"Nelze ode\u010D\xEDst ID zv\xED\u0159ete kv\u016Fli chyb\u011Bj\xEDc\xEDmu "+
"\u010D\xEDslu transpond\xE9ru!\nPros\xEDm, uve\u010Fte \u010D\xEDslo transpond\xE9ru "+
"pro vytvo\u0159en\xED zv\xED\u0159ete!",5:"Kan ikke fratr\xE6kke dyrets ID p\xE5 grund af manglende transpondernummer!\nAngiv "+
"venligst et transpondernummer for at oprette dyret!",0:"Cannot deduct animal ID due to missing transponder number!\nPlease specify "+
"a transponder number for the animal to be created!",6:"Kan dier ID niet afleiden vanwege ontbrekende transpondernummer! Geef een "+
"transpondernummer op voor het dier dat moet worden aangemaakt!",7:"Looma ID-d ei sa tuletada, kuna transponderi number puudub!!\nLooma loomiseks "+
"m\xE4\xE4rake palun trasnponderi number!",8:"El\xE4imelle ei voida johtaa tunnusta! Sy\xF6t\xE4 transponderin numero "+
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
"\xE1llat sz\xE1m\xE1ra!",13:"Impossibile dedurre l\'ID dell\'animale a causa del numero di transponder "+
"mancante!\nSi prega di specificare un numero di transponder per la creazione "+
"dell\'animale!",15:"Nevar at\u0146emt dz\u012Bvnieka ID, jo tr\u016Bkst transpondera numura!\nL\u016Bdzu, "+
"nor\u0101diet transpondera numuru, lai izveidotu dz\u012Bvnieku!",26:"Negalima nustatyti gyv\u016Bno ID d\u0117l tr\u016Bkstamo transponderio "+
"numerio!\nPra\u0161ome nurodyti transponderio numer\u012F, kad b\u016Bt\u0173 "+
"sukurtas gyv\u016Bnas!",16:"Kan ikke trekke fra dyre-ID p\xE5 grunn av manglende transpondernummer!\nVennligst "+
"oppgi et transpondernummer for at dyret skal opprettes!",17:"Nie mo\u017Cna okre\u015Bli\u0107 identyfikatora zwierz\u0119cia z powodu "+
"braku numeru transpondera!\nProsz\u0119 poda\u0107 numer transpondera "+"dla tworzonego zwierz\u0119cia!"
,18:"N\xE3o \xE9 poss\xEDvel deduzir o ID do animal devido ao n\xFAmero do "+"transponder faltante!\nPor favor, especifique um n\xFAmero de transponder "+
"para que o animal seja criado!",19:"Nu se poate deduce ID-ul animalului din cauza lipsei num\u0103rului transponderului!\nV\u0103 "+
"rug\u0103m s\u0103 specifica\u021Bi un num\u0103r de transponder pentru "+"animalul care urmeaz\u0103 s\u0103 fie creat!"
,20:"\u041D\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0438\u0437-\u0437\u0430 "+
"\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u043E \u0436\u0438\u0432\u043E\u0442",27:"Ni mogo\u010De dolo\u010Diti identifikacijske \u0161tevilke \u017Eivali "+
"zaradi manjkajo\u010De \u0161tevilke transponderja!\nProsimo, navedite "+"\u0161tevilko transponderja za ustvarjanje \u017Eivali!"
,21:"\xA1No se puede deducir la ID del animal debido a la falta del n\xFAmero "+
"de transpondedor! \xA1Especifique un n\xFAmero de transpondedor para el "+"animal que se va a crear!"
,22:"Kan inte dra av djur-ID p\xE5 grund av saknat transpondernummer!\nV\xE4nligen "+
"ange ett transpondernummer f\xF6r att skapa djuret!",23:"Eksik aktar\u0131c\u0131 numaras\u0131 nedeniyle hayvan kimli\u011Fi \xE7\u0131kar\u0131lam\u0131yor!\nL\xFCtfen "+
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
,3:"\u8ACB\u81F3\u5C11\u6307\u5B9A\u4E00\u500B\u52D5\u4F5C\uFF01",25:"Molim navedite barem jednu akciju!"
,4:"Varov\xE1n\xED Nen\xED definov\xE1na \u017E\xE1dn\xE1 akce",5:"Venligst angiv mindst \xE9n handling!"
,0:"Please specify at least one action!",6:"Geef minstens een actie aan!",7:"Palun m\xE4\xE4rake v\xE4hemalt \xFCks toiming!"
,8:"M\xE4\xE4rit\xE4 v\xE4hint\xE4\xE4n yksi toi~min~to!",9:"Sp\xE9cifiez au moins une action\xA0!"
,10:"Bitte geben Sie mindestens eine Aktion an!",11:"\u03A0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD \u03BC\u03AF\u03B1 "+
"\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1!",12:"K\xE9rlek, hat\xE1rozz meg legal\xE1bb egy cselekv\xE9st!"
,13:"Per favore specifica almeno un\'azione!",15:"L\u016Bdzu, nor\u0101diet vismaz vienu darb\u012Bbu!"
,26:"Nurodykite bent vien\u0105 veiksm\u0105!",16:"Vennligst spesifiser minst \xE9n handling!"
,17:"Prosz\u0119 poda\u0107 przynajmniej jedn\u0105 czynno\u015B\u0107!",18:"Por favor, especifique pelo menos uma a\xE7\xE3o!"
,19:"V\u0103 rog s\u0103 specifica\u021Bi cel pu\u021Bin o ac\u021Biune!",20:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 "+
"\u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435!"
,27:"Prosimo, navedite vsaj eno dejanje!",21:"\xA1Indique al menos una acci\xF3n!"
,22:"V\xE4nligen specificera minst en handling!",23:"L\xFCtfen en az bir eylem belirtin!"
,24:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+
"\u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u043D\u0443 \u0434\u0456\u044E!"};
C.WarningNoActionsForAnimalLoss={1:"Izvo\u0111enje radnji koje nisu dozvoljene zbog gubitka \u017Eivotinja!"
,2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0438\u0442\u043E "+
"\u043D\u0435 \u0441\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438 "+
"\u0437\u0430 \u0437\u0430\u0433\u0443\u0431\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!"
,3:"\u7981\u6B62\u57F7\u884C\u5C0D\u52D5\u7269\u5931\u8E2A\u7684\u4E0D\u5141\u8A31\u884C\u70BA\uFF01"
,25:"Izvo\u0111enje radnji koje nisu dopu\u0161tene zbog gubitka \u017Eivotinje!"
,4:"Prov\xE1d\u011Bn\xED akc\xED, kter\xE9 nejsou povoleny pro ztr\xE1tu zv\xED\u0159ete!"
,5:"Udf\xF8re handlinger ikke tilladt for dyretab!",0:"Performing actions not allowed for animal loss!"
,6:"Acties uitvoeren die niet zijn toegestaan voor verlies van dieren!",7:"Loomade kaotuse korral pole lubatud toiminguid teha!"
,8:"Toimien suorittaminen ei ole sallittua el\xE4imen menett\xE4misen vuoksi!",9:
"Ex\xE9cution d\'actions non autoris\xE9e pour les pertes d\'animaux\xA0!",10:" Ausf\xFChren von Aktionen f\xFCr Tierverluste nicht zul\xE4ssig!"
,11:"\u0395\u03BA\u03C4\u03AD\u03BB\u03B5\u03C3\u03B7 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD "+
"\u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03BF\u03BD\u03C4\u03B1\u03B9 "+
"\u03B3\u03B9\u03B1 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1 \u03B6\u03CE\u03BF\u03C5!"
,12:"\xC1llatveszt\xE9sre nem enged\xE9lyezett cselekv\xE9sek v\xE9grehajt\xE1sa!"
,13:"Azioni non consentite per la perdita di animali!",15:"Veicot darb\u012Bbas, kas nav at\u013Cautas dz\u012Bvnieku zaud\u0113\u0161anai!"
,26:"Atliekami veiksmai draud\u017Eiami d\u0117l gyv\u016Bn\u0173 netekimo!",16:
"Utf\xF8rer handlinger som ikke er tillatt for tap av dyr!",17:"Wykonywanie czynno\u015Bci niedozwolonych dla utraty zwierz\u0119cia!"
,18:"Realizando a\xE7\xF5es n\xE3o permitidas para perda de animais!",19:"Ac\u021Biuni interzise pentru pierderea animalelor!"
,20:"\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F "+
"\u043D\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B \u0434\u043B\u044F "+
"\u043F\u043E\u0442\u0435\u0440\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!"
,27:"Izvajanje dejanj, ki niso dovoljena zaradi izgube \u017Eivali!",21:"\xA1Por favor, especifique al menos una acci\xF3n!"
,22:"Utf\xF6r handlingar som inte \xE4r till\xE5tna f\xF6r f\xF6rlust av djur!",
23:"Hayvan kayb\u0131 nedeniyle izin verilmeyen eylemler!",24:"\u0412\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u043D\u0456 \u0434\u0456\u0457 "+
"\u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u0456 \u0434\u043B\u044F "+
"\u0432\u0442\u0440\u0430\u0442 \u0442\u0432\u0430\u0440\u0438\u043D!"};C.WarningNoAnimalsRegistered={
1:"Jo\u0161 nema registrovanih \u017Eivotinja, potrebno je prvo registrovati "+"\u017Eivotinje."
,2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438, \u043F\u044A\u0440\u0432\u043E "+"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438!",3:"\u5C1A\u672A\u8A3B\u518A\u5C0F\u725B\uFF0C\u8ACB\u5148\u8A3B\u518A\u5C0F\u725B\uFF01"
,25:"Jo\u0161 nisu registrirane \u017Eivotinje, molimo prvo registrirajte \u017Eivotinju/e!"
,4:"Varov\xE1n\xED \u017D\xE1dn\xE1 zv\xED\u0159ata nebyla zaregistrov\xE1na",5:
"Ingen dyr registreret endnu, registrer venligst dyr f\xF8rst!",0:"No animals registered yet, please register animal(s) first!"
,6:"Nog geen dieren aangemeld, graag eerst dier(en) aanmelden!",7:"\xDChtegi looma pole veel registreeritud, palun registreerige k\xF5igepealt "+
"loom(ad)!",8:"Ei viel\xE4 rekister\xF6ityj\xE4 el\xE4imi\xE4, rekister\xF6i ensin el\xE4imet!"
,9:"Aucun animal n\u2019a encore \xE9t\xE9 enregistr\xE9, veuillez d\u2019abord "+
"enregistrer animal(s)\xA0!",10:"Noch keine Tiere angemeldet, bitte zuerst Tier(e) anmelden!"
,11:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03B4\u03B5\u03BD "+
"\u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+"\u03B1\u03BA\u03CC\u03BC\u03B1, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 "+
"\u03B5\u03B3\u03B3\u03C1\u03AC\u03C8\u03C4\u03B5 \u03C0\u03C1\u03CE\u03C4\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1!",12:"M\xE9g nincsenek regisztr\xE1lt \xE1llatok, k\xE9rj\xFCk, el\u0151sz\xF6r "+
"regisztr\xE1ljon \xE1llat(oka)t!",13:"Nessun animale registrato, per favore registra prima gli animali!"
,15:"V\u0113l nav re\u0123istr\u0113ti dz\u012Bvnieki, l\u016Bdzu, vispirms "+"re\u0123istr\u0113jiet dz\u012Bvnieku(s)!"
,26:"Dar n\u0117ra u\u017Eregistruot\u0173 gyv\u016Bn\u0173, pra\u0161ome pirmiausia "+
"u\u017Eregistruoti gyv\u016Bn\u0105 (-us)!",16:"Ingen dyr registrert enn\xE5, vennligst registrer dyr f\xF8rst!"
,17:"Nie zarejestrowano jeszcze \u017Cadnych zwierz\u0105t, prosz\u0119 najpierw "+
"zarejestrowa\u0107 zwierz\u0119(a)!",18:"Nenhum animal registrado ainda, por favor registre o(s) animal(is) primeiro!"
,19:"Niciun animal \xEEnregistrat \xEEnc\u0103, v\u0103 rug\u0103m s\u0103 "+"\xEEnregistra\u021Bi \xEEnt\xE2i animal(e)!"
,20:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0435\u0449\u0435 \u043D\u0435 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B, "+
"\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!"
,27:"\u0160e ni registriranih \u017Eivali, najprej registrirajte \u017Eival(i)!"
,21:"A\xFAn no se han registrado animales. Por favor, registre primero animal(es)."
,22:"Inga djur registrerade \xE4nnu, v\xE4nligen registrera djur f\xF6rst!",23:"Hen\xFCz kay\u0131tl\u0131 hayvan yok, l\xFCtfen \xF6nce hayvan(lar)\u0131 "+
"kaydedin!",24:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438 \u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 "+
"\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0443/\u0442\u0432\u0430\u0440\u0438\u043D!"
};C.WarningNoBackupFilePresent={1:"Pa\u017Enja!\n\nRezervna datoteka \'backup.vcu\' nije prona\u0111ena! Molimo "+
"vas da je stavite u direktorij \'backup\' na va\u0161em USB ure\u0111aju!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0410\u0440\u0445\u0438\u0432\u043D\u0438\u044F\u0442 "+
"\u0444\u0430\u0439\u043B \u2019backup.vcu\u2019 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D! "+
"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"\u0433\u043E \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F "+
"\u201Ebackup\u201C \u043D\u0430 \u0432\u0430\u0448\u0438\u044F USB \u0441\u0442\u0438\u043A!"
,3:"\u6CE8\u610F\uFF01\n\u627E\u4E0D\u5230\u5099\u4EFD\u6A94\u6848 \u2018backup.vcu\u2019\uFF01\u8ACB\u5C07\u5176\u653E\u7F6E\u65BC\u60A8 "+
"USB \u96A8\u8EAB\u789F\u4E2D\u7684 \u2018backup\u2019 \u76EE\u9304\u88E1\uFF01"
,25:"Pozor!\n\nSigurnosna kopija datoteke \'backup.vcu\' nije prona\u0111ena! "+
"Molimo stavite je unutar direktorija \'backup\' na va\u0161em USB sticku!",4:"Pozor!\n\nZ\xE1lo\u017En\xED soubor \u2019backup.vcu\u2019 nebyl nalezen! "+
"Um\xEDst\u011Bte ho, pros\xEDm, do slo\u017Eky \u2019backup\u2019 na va\u0161em "+
"USB disku!",5:"Opm\xE6rksomhed!\n\nSikkerhedskopifilen \u2019backup.vcu\u2019 blev ikke "+
"fundet! Placer den venligst i mappen \u2019backup\u2019 p\xE5 dit USB-stik!",0:
"Attention!\n\nBackup file \u2019backup.vcu\u2019 not found! Place it inside "+"directory \u2019backup\u2019 on your USB stick, please!"
,6:"Attentie! Back-up bestand \'backup.vcu\' niet gevonden! Plaats het in de "+"map \'backup\' op je USB-stick, alsjeblieft!"
,7:"T\xE4helepanu!\n\nVarundusfaili \u2019backup.vcu\u2019 ei leitud! Palun "+"pange see oma USB m\xE4lupulga kausta \u2019backup\u2019!"
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
"az USB meghajt\xF3j\xE1n!",13:"Attenzione!\n\nFile di backup \'backup.vcu\' non trovato! Posizionalo "+
"all\'interno della cartella \'backup\' sulla tua chiavetta USB, per favore!",15:
"Uzman\u012Bbu!\n\nRezerves kopijas fails \"backup.vcu\" nav atrasts! L\u016Bdzu, "+
"ievietojiet to map\u0113 \"backup\" sav\u0101 USB zibatmi\u0146\u0101!",26:"D\u0117mesio!\n\nAtsargin\u0117s kopijos failas \u201Ebackup.vcu\u201C "+
"nerastas! \u012Ed\u0117kite j\u012F \u012F aplank\u0105 \u201Ebackup\u201C "+"savo USB laikmenoje, pra\u0161ome!"
,16:"Oppmerksomhet!\n\nSikkerhetskopi-filen \u2019backup.vcu\u2019 ble ikke "+"funnet! Vennligst plasser den i mappen \u2019backup\u2019 p\xE5 USB-stikken "+
"din!",17:"Uwaga!\n\nPlik kopii zapasowej \"backup.vcu\" nie zosta\u0142 znaleziony! "+
"Umie\u015B\u0107 go, prosz\u0119, w katalogu \"backup\" na swoim pendrive\'ie!"
,18:"Aten\xE7\xE3o!\n\nArquivo de backup \'backup.vcu\' n\xE3o encontrado! "+"Por favor, coloque-o dentro do diret\xF3rio \'backup\' no seu pen drive!"
,19:"Aten\u021Bie!\n\nFi\u0219ierul de backup \u2019backup.vcu\u2019 nu a fost "+
"g\u0103sit! V\u0103 rug\u0103m s\u0103-l plasa\u021Bi \xEEn directorul "+"\u2019backup\u2019 de pe stick-ul USB!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0424\u0430\u0439\u043B "+
"\u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u043A\u043E\u043F\u0438\u0438 "+
"\'backup.vcu\' \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D! \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043E "+"\u0432 \u043F\u0430\u043F\u043A\u0443 \'backup\' \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 "+
"\u0444\u043B\u0435\u0448\u043A\u0435!",27:"Pozor!\n\nVarnostna kopija datoteke \'backup.vcu\' ni najdena! Prosimo, "+
"postavite jo v mapo \'backup\' na va\u0161em USB klju\u010Dku!",21:"\xA1Atenci\xF3n!\n\n\xA1No se ha encontrado el archivo de copia de seguridad "+
"\'backup.vcu\'! Col\xF3quelo dentro del directorio \'backup\' en su memoria "+"USB, por favor."
,22:"Uppm\xE4rksamhet!\n\nS\xE4kerhetskopian \u2019backup.vcu\u2019 hittades "+"inte! Placera den i mappen \u2019backup\u2019 p\xE5 ditt USB-minne, tack!"
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
,3:"\u6CE8\u610F\uFF01\n\n\u9810\u671F\u5728\u60A8\u7684 USB \u96A8\u8EAB\u789F\u4E2D\u7684 "+
"\'backup\' \u76EE\u9304\u5167\u627E\u5230\u5099\u4EFD\u6A94\u6848 \'backup.vcu\'\uFF0C\u4F46\u672A\u627E\u5230 "+
"\'backup\' \u76EE\u9304\uFF01",25:"Pa\u017Enja!\n\nO\u010Dekivana sigurnosna kopija datoteke \'backup.vcu\' "+
"unutar direktorija \'backup\' na va\u0161em USB sticku, ali direktorij "+"\'backup\' nije prona\u0111en!"
,4:"Pozor!\n\nO\u010Dek\xE1van\xFD z\xE1lo\u017En\xED soubor \u2019backup.vcu\u2019 "+
"ve slo\u017Ece \u2019backup\u2019 na va\u0161em USB disku, ale slo\u017Eka "+"\u2019backup\u2019 nebyla nalezena!"
,5:"Opm\xE6rksomhed!\n\nForventede backupfilen \'backup.vcu\' i mappen \'backup\' "+
"p\xE5 dit USB-stik, men ingen mappe \'backup\' blev fundet!",0:"Attention!\n\nExpected backup file \u2019backup.vcu\u2019 inside directory "+
"\u2019backup\u2019 on your USB stick, but no directory \u2019backup\u2019 "+"was found!"
,6:"Attentie! Er werd backup bestand \'backup.vcu\' verwacht in de map \'backup\' "+
"op uw USB stick, maar er is geen map \'backup\' gevonden!",7:"T\xE4helepanu!\n\nOtsiti varukoopia faili \u2019backup.vcu\u2019 teie USB "+
"m\xE4lupulgal kaustas \u2019backup\u2019, kuid kausta \u2019backup\u2019 "+"ei leitud!"
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
"\u2019backup\u2019 k\xF6nyvt\xE1r!",13:"Attenzione!\n\nFile di backup atteso \'backup.vcu\' all\'interno della "+
"cartella \'backup\' sulla tua chiavetta USB, ma non \xE8 stata trovata "+"nessuna cartella \'backup\'!"
,15:"Uzman\u012Bbu!\n\nGaid\u012Bj\u0101m rezerves kopijas failu \"backup.vcu\" "+
"map\u0113 \"backup\" j\u016Bsu USB zibatmi\u0146\u0101, bet mape \"backup\" "+"netika atrasta!"
,26:"D\u0117mesio!\n\nTik\u0117tasi atsargin\u0117s kopijos failo \"backup.vcu\" "+
"kataloge \"backup\" J\u016Bs\u0173 USB laikmenoje, ta\u010Diau katalogas "+"\"backup\" nerastas!"
,16:"Oppmerksomhet!\n\nForventet sikkerhetskopifil \u2019backup.vcu\u2019 inne "+
"i mappen \u2019backup\u2019 p\xE5 USB-stikken din, men ingen mappe \u2019backup\u2019 "+
"ble funnet!",17:"Uwaga!\n\nOczekiwano pliku kopii zapasowej \'backup.vcu\' w katalogu \'backup\' "+
"na Twoim pendrive, ale nie znaleziono katalogu \'backup\'!",18:"Aten\xE7\xE3o!\n\nArquivo de backup esperado \'backup.vcu\' dentro do "+
"diret\xF3rio \'backup\' no seu pendrive, mas nenhum diret\xF3rio \'backup\' "+"foi encontrado!"
,19:"Aten\u021Bie!\n\nSe a\u0219tepta ca fi\u0219ierul de backup \u2019backup.vcu\u2019 "+
"s\u0103 fie \xEEn directorul \u2019backup\u2019 de pe stick-ul USB, dar "+"nu s-a g\u0103sit niciun director \u2019backup\u2019!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 "+
"\u0444\u0430\u0439\u043B \u0431\u044D\u043A\u0430\u043F\u0430 \'backup.vcu\' "+
"\u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \'backup\' "+
"\u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0444\u043B\u0435\u0448\u043A\u0435, "+
"\u043D\u043E \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F "+"\'backup\' \u043D\u0435 \u0431\u044B\u043B\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u0430!"
,27:"Pozor!\n\nPri\u010Dakovala se je varnostna kopija datoteke \'backup.vcu\' "+
"v mapi \'backup\' na va\u0161em USB klju\u010Dku, vendar mapa \'backup\' "+"ni bila najdena!"
,21:"\xA1Atenci\xF3n!\n\nSe esperaba el archivo de copia de seguridad \'backup.vcu\' "+
"dentro del directorio \'backup\' en su memoria USB, \xA1pero no se encontr\xF3 "+
"el directorio \'backup\'!",22:"Uppm\xE4rksamhet!\n\nF\xF6rv\xE4ntad s\xE4kerhetskopia \u2019backup.vcu\u2019 "+
"i mappen \u2019backup\u2019 p\xE5 ditt USB-minne, men ingen mapp \u2019backup\u2019 "+
"hittades!",23:"Dikkat!\n\nUSB \xE7ubu\u011Funuzdaki \'backup\' dizininde \'backup.vcu\' "+
"yedekleme dosyas\u0131 bekleniyordu, ancak \'backup\' dizini bulunamad\u0131!",
24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u0444\u0430\u0439\u043B \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0457 "+
"\u043A\u043E\u043F\u0456\u0457 \u2019backup.vcu\u2019 \u0443 \u043F\u0430\u043F\u0446\u0456 "+
"\u2019backup\u2019 \u043D\u0430 \u0432\u0430\u0448\u043E\u043C\u0443 USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456, "+
"\u0430\u043B\u0435 \u043F\u0430\u043F\u043A\u0443 \u2019backup\u2019 \u043D\u0435 "+
"\u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"};C.Brj={1:"Pa\u017Enja!\nK\xF4d dr\u017Eave nije mogao biti prona\u0111en ni u skeniranom "+
"ID-u niti izveden iz ID-a prostorija. \u017Delite li sada unijeti svoj "+"ID prostorija?"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041A\u043E\u0434\u044A\u0442 "+
"\u043D\u0430 \u0434\u044A\u0440~\u0436\u0430~\u0432\u0430~\u0442\u0430 "+"\u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0431\u044A\u0434\u0435 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D \u043D\u0438\u0442\u043E \u0432 "+"\u0441\u043A\u0430~\u043D\u0438~\u0440\u0430~\u043D\u0438\u044F  \u0438\u0434\u0435\u043D~\u0442\u0438~\u0444\u0438~\u043A\u0430~\u0446\u0438~\u043E\u043D~\u043D\u0438\u044F "+
"\u043D\u043E~\u043C\u0435\u0440, \u043D\u0438\u0442\u043E \u0432 \u043F\u043E~\u043B\u0443~\u0447\u0435~\u043D\u0430~\u0442\u0430 "+
"\u0444\u043E\u0440\u043C\u0430 \u043D\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F. "+
"\u0418\u0441\u043A\u0430\u0442\u0435 \u043B\u0438 \u0434\u0430 \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 "+
"ID \u043D\u0430 \u0432\u0430\u0448\u0435\u0442\u043E \u043F\u043E~\u043C\u0435~\u0449\u0435~\u043D\u0438\u0435 "+
"\u0441\u0435\u0433\u0430?",3:"\u6CE8\u610F\uFF01\n\u7121\u6CD5\u5F9E\u6383\u63CF\u7684\u8EAB\u4EFD\u8B49\u4E2D\u627E\u5230\u570B\u5BB6\u4EE3\u78BC\uFF0C\u4E5F\u7121\u6CD5\u5F9E\u5834\u6240ID\u63A8\u5C0E\u51FA\u4F86\u3002\u60A8\u73FE\u5728\u8981\u8F38\u5165\u60A8\u7684\u5834\u6240ID\u55CE\uFF1F"
,25:"Pozor!\nK\xF4d dr\u017Eave nije mogu\u0107e prona\u0107i ni u skeniranom "+
"ID-u niti izvesti iz ID-a prostora. \u017Delite li sada unijeti svoj ID "+"prostora?"
,4:"Pozor!\nK\xF3d zem\u011B nebyl nalezen ani ve skenovan\xE9m ID ani odvozen "+
"z ID prostor. Chcete zadat ID sv\xFDch prostor nyn\xED?",5:"Advarsel!\nLandekoden kunne hverken findes i det scannede ID eller udledes "+
"fra lokalitets-ID. Vil du indtaste dit lokalitets-ID nu?",0:"Attention!\nCountry code could neither be found in ID scanned in nor derived "+
"form premises ID. Would you like to enter your premises ID now?",6:"Let op!\nDe landcode kon niet worden ge~vonden in het in~gescande ID en "+
"kon ook niet worden afgeleid van het ID van het pand. Wilt u nu uw ID invoeren?"
,7:"T\xE4helepanu!\nRiigi koodi ei leitud skannitud ID-st ega tuletatud territooriumi "+
"ID-st. Kas soovite sisestada oma territooriumi ID?",8:"Huomio!\nMaakoodia ei l\xF6y~tynyt skannatusta tunnuksesta eik\xE4 johdettu "+
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
,13:"Attenzione!\nIl codice del paese non \xE8 stato trovato n\xE9 nell\'ID "+"scannerizzato n\xE9 derivato dall\'ID della sede. Vorresti inserire ora "+
"il tuo ID della sede?",15:"Uzman\u012Bbu!\nValsts kods netika atrasts ne sken\u0113taj\u0101 ID, "+
"ne ieg\u016Bts no telpas ID. Vai v\u0113laties ievad\u012Bt savu telpas "+"ID tagad?"
,26:"D\u0117mesio!\n\u0160alies kodo nepavyko rasti nuskaitytame ID arba gauti "+
"i\u0161 patalp\u0173 ID. Ar nor\u0117tum\u0117te dabar \u012Fvesti savo "+"patalp\u0173 ID?"
,16:"Oppmerksomhet!\nLandkoden kunne verken finnes i ID skannet eller avledet "+
"fra lokalenes ID. Vil du angi din lokale ID n\xE5?",17:"Uwaga!\nNie mo\u017Cna by\u0142o znale\u017A\u0107 kodu kraju ani w zeskanowanym "+
"ID, ani w ID lokalu. Czy chcesz teraz wprowadzi\u0107 ID swojego lokalu?",18:"Aten\xE7\xE3o!\nO c\xF3digo do pa\xEDs n\xE3o p\xF4de ser encontrado nem "+
"no documento de identifica\xE7\xE3o escaneado nem derivado do ID do local. "+"Gostaria de inserir o ID do seu local agora?"
,19:"Aten\u021Bie!\nCodul \u021B\u0103rii nu a putut fi g\u0103sit \xEEn ID-ul "+
"scanat \u0219i nici derivat din ID-ul sediului. Dori\u021Bi s\u0103 introduce\u021Bi "+
"acum ID-ul sediului dumneavoastr\u0103?",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u041A\u043E\u0434 "+
"\u0441\u0442\u0440\u0430\u043D\u044B \u043D\u0435 \u0431\u044B\u043B \u043D\u0430\u0439\u0434\u0435\u043D "+
"\u043D\u0438 \u0432 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C "+
"\u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0438 "+
"\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043D\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D "+
"\u0438\u0437 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F. \u0425\u043E\u0442\u0435\u043B\u0438 "+
"\u0431\u044B \u0432\u044B \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A"
,27:"Pozor!\nDr\u017Eavne kode ni bilo mogo\u010De najti v skenirani osebni "+"izkaznici niti izpeljati iz identifikacijske \u0161tevilke prostorov. "+
"Bi \u017Eeleli sedaj vnesti svojo identifikacijsko \u0161tevilko prostorov?",21:
"\xA1Atenci\xF3n!\nEl c\xF3digo de pa\xEDs no se encontr\xF3 ni en la ID "+"escaneada ni derivado de la ID de las instalaciones. \xBFLe gustar\xEDa "+
"ingresar su ID de instalaciones ahora?",22:"Uppm\xE4rksamhet!\nLandskoden kunde varken hittas i det inskannade ID:t "+
"eller h\xE4rledas fr\xE5n lokalens ID. Vill du ange ditt lokal-ID nu?",23:"Dikkat!\nTaranan kimlikte veya t\xFCretilmi\u015F tesis kimli\u011Finde "+
"\xFClke kodu bulunamad\u0131. \u015Eimdi tesis kimli\u011Finizi girmek "+"ister misiniz?"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F "+
"\u0437\u043D\u0430\u0439\u0442\u0438 \u043A\u043E\u0434 \u043A\u0440\u0430\u0457\u043D\u0438 "+
"\u043D\u0456 \u0432 \u0441\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u043E\u043C\u0443 "+
"ID, \u043D\u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0439\u043E\u0433\u043E "+
"\u0437 ID \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F. "+"\u0427\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 "+
"ID \u0432\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F "+
"\u0437\u0430\u0440\u0430\u0437?"};C.WarningNoFlashDrivePresent={1:"Pa\u017Enja!\n\nMolimo, umetnite USB flash disk!"
,2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"USB \u0444\u043B\u0430\u0448\u043A\u0430, \u043C\u043E\u043B\u044F!",3:"\u6CE8\u610F\uFF01\n\n\u8ACB\u63D2\u5165USB\u96A8\u8EAB\u789F\uFF01"
,25:"Pa\u017Enja!\n\nMolimo, umetnite USB stick!",4:"Pozor!\n\nVlo\u017Ete, pros\xEDm, USB flash disk!"
,5:"Opm\xE6rksomhed!\n\nInds\xE6t venligst USB-n\xF8gle!",0:"Attention!\n\nInsert USB flash drive, please!"
,6:"Let op!\n\nPlaats een USB-stick!",7:"T\xE4helepanu!\n\nPalun sisestage USB m\xE4lupulk!"
,8:"Huomio!\n\nAseta USB-tikku nyt!",9:"Attention\xA0!\n\nIns\xE9rez maintenant une cl\xE9 USB\xA0!"
,10:"Achtung!\n\nStecken Sie jetzt bitte einen USB-^Stick ein!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE, "+
"\u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF USB flash "+"drive!"
,12:"Figyelem!\n\nK\xE9rj\xFCk, helyezze be az USB flash meghajt\xF3t!",13:"Attenzione!\n\nInserisci la chiavetta USB, per favore!"
,15:"Uzman\u012Bbu!\n\nL\u016Bdzu, ievietojiet USB zibatmi\u0146u!",26:"D\u0117mesio!\n\n\u012Ed\u0117kite USB atmintin\u0119, pra\u0161au!"
,16:"Oppmerksomhet!\n\nVennligst sett inn USB-minnepinnen!",17:"Uwaga!\n\nProsz\u0119 w\u0142o\u017Cy\u0107 pendrive USB!"
,18:"Aten\xE7\xE3o!\n\nInsira o pen drive USB, por favor!",19:"Aten\u021Bie!\n\nV\u0103 rug\u0103m s\u0103 introduce\u021Bi memoria USB!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 "+
"USB \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430!"
,27:"Pozor!\n\nVstavite USB klju\u010Dek, prosim!",21:"\xA1Atenci\xF3n!\n\n\xA1Inserte la memoria USB, por favor!"
,22:"Uppm\xE4rksamhet!\n\nS\xE4tt in USB-minnet, tack!",23:"Dikkat!\n\nUSB flash s\xFCr\xFCc\xFCy\xFC tak\u0131n l\xFCtfen!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0412\u0441\u0442\u0430\u0432\u0442\u0435 "+
"USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447, "+"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430!"
};C.WarningNoMenuItemVisible={1:"Molimo vas da podesite minimalno jedan meni odabir za objavu!"
,2:"\u041C\u043E\u043B\u044F, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u043F\u043E\u043D\u0435 "+
"\u0435\u0434\u0438\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u043E\u0442 "+
"\u043C\u0435\u043D\u044E\u0442\u043E \u0434\u0430 \u0441\u0435 \u0432\u0438\u0436\u0434\u0430!"
,3:"\u8ACB\u81F3\u5C11\u8A2D\u5B9A\u4E00\u500B\u9078\u793A\u7684\u9078\u9805\uFF01"
,25:"Postavite barem jednu stavku izbornika vidljivom!",4:"Varov\xE1n\xED polo\u017Eky nab\xEDdky nejsou viditeln\xE9"
,5:"V\xE6r venlig at g\xF8re mindst \xE9n menupunkt synlig!",0:"Please set at least one menu item visible!"
,6:"Kies minstens een menuonderdeel ter beschouwing uit!",7:"Palun m\xE4\xE4rake n\xE4htavaks v\xE4hemalt \xFCks men\xFC\xFCelement!"
,8:"Aseta v\xE4hint\xE4\xE4n yksi valikkokohta n\xE4kyviin!",9:"S\xE9lectionnez au moins un \xE9l\xE9ment de menu visible"
,10:"Bitte w\xE4hlen Sie mindestens einen Men\xFCeintrag zur Anzeige aus!",11:"\u039F\u03C1\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD "+
"\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD "+
"\u03BF\u03C1\u03B1\u03C4\u03CC!",12:"K\xE9rj\xFCk, legal\xE1bb egy men\xFCpontot l\xE1that\xF3v\xE1 tegyen!"
,13:"Per favore, rendi visibile almeno un elemento del menu!",15:"L\u016Bdzu, padariet vismaz vienu izv\u0113lnes vienumu redzamu!"
,26:"Pra\u0161au padaryti bent vien\u0105 meniu punkt\u0105 matom\u0105!",16:"Vennligst sett minst ett menyelement synlig!"
,17:"Ustaw przynajmniej jedn\u0105 pozycj\u0119 w menu jako widoczn\u0105!",18:"Por favor, torne vis\xEDvel pelo menos um item do menu!"
,19:"V\u0103 rug\u0103m s\u0103 seta\u021Bi cel pu\u021Bin un element de meniu "+
"vizibil!",20:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "+
"\u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u043F\u0443\u043D\u043A\u0442 "+
"\u043C\u0435\u043D\u044E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F!"
,27:"Prosim, nastavite vsaj en element menija na vidno!",21:"\xA1Seleccione al menos un elemento del men\xFA para su visualizaci\xF3n!"
,22:"St\xE4ll in minst ett menyalternativ som synligt!",23:"L\xFCtfen en az bir men\xFC \xF6\u011Fesini g\xF6r\xFCn\xFCr hale getirin!"
,24:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C "+
"\u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u0438\u043D \u043F\u0443\u043D\u043A\u0442 "+
"\u043C\u0435\u043D\u044F \u0434\u043B\u044F \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F!"
};C.WarningNoPremisesID={1:"Pa\u017Enja!\n\nID prostora jo\u0161 nije definisan! \u017Delite li unijeti "+
"svoj ID prostora sada?",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0441\u0435 "+
"\u043E\u0449\u0435 \u043D\u0435 \u0441\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F! \u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438 \u0434\u0430 \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 "+"ID \u043D\u0430 \u0432\u0430\u0448\u0435\u0442\u043E \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 "+
"\u0441\u0435\u0433\u0430?",3:"\u6CE8\u610F\uFF01\n\n\u5C1A\u672A\u5B9A\u7FA9\u5834\u6240 ID\uFF01\u60A8\u73FE\u5728\u8981\u8F38\u5165\u60A8\u7684\u5834\u6240 "+
"ID \u55CE\uFF1F",25:"Pa\u017Enja!\n\nID prostora jo\u0161 nije definiran! \u017Delite li unijeti "+
"svoj ID prostora sada?",4:"Pozor!\n\nID prostor nebylo dosud definov\xE1no! Chcete nyn\xED zadat sv\xE9 "+
"ID prostor?",5:"Opm\xE6rksomhed!\n\nIngen lokations-ID er defineret endnu! Vil du indtaste "+
"dit lokations-ID nu?",0:"Attention!\n\nNo premises ID defined yet! Would you like to enter your "+
"premises ID now?",6:"Attentie! Nog geen pand ID gedefinieerd! Wilt u nu uw pand-ID invoeren?"
,7:"T\xE4helepanu!\n\nTerritooriumi ID-d pole veel m\xE4\xE4ratletud! Kas soovite "+
"sisestada oma territooriumi ID?",8:"Huomio!\n\nTilatunnusta ei ole viel\xE4 m\xE4\xE4ritetty! Haluatko antaa "+
"tilatunnuksesi nyt?",9:"Il n\'y a pas encore de num\xE9ro d\'exploitation\xA0! Voulez-vous saisir "+
"maintenant votre num\xE9ro d\'ex~ploi~tation \xE0 12 chiffres\xA0?",10:"Es ist noch keine Betriebsnummer f\xFCr die Bewe~gungsmeldung bei HI-^Tier "+
"hinterlegt! M\xF6chten Sie jetzt ihre 12-stellige Betriebsnummer eingeben?",11:
"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 "+
"\u03BF\u03C1\u03B9\u03C3\u03C4\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B1 "+"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B1\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5! "+
"\u0398\u03B1 \u03B8\u03AD\u03BB\u03B1\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B1\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5 \u03C3\u03B1\u03C2;"
,12:"Figyelem!\n\nM\xE9g nincs r\xF6gz\xEDtett telephely azonos\xEDt\xF3! Szeretn\xE9 "+
"most megadni a telephely azonos\xEDt\xF3j\xE1t?",13:"Attenzione!\n\nNessun ID dei locali definito ancora! Vorresti inserire "+
"ora il tuo ID dei locali?",15:"Uzman\u012Bbu!\n\nNav defin\u0113ts telpu ID! Vai v\u0113laties ievad\u012Bt "+
"savu telpu ID tagad?",26:"D\u0117mesio!\n\nN\u0117ra nustatyto patalp\u0173 ID! Ar nor\u0117tum\u0117te "+
"\u012Fvesti savo patalp\u0173 ID dabar?",16:"Oppmerksomhet!\n\nIngen lokale-ID er definert enn\xE5! \xD8nsker du \xE5 "+
"angi din lokale-ID n\xE5?",17:"Uwaga!\n\nNie zdefiniowano jeszcze identyfikatora obiektu! Czy chcia\u0142by\u015B "+
"wprowadzi\u0107 teraz sw\xF3j identyfikator obiektu?",18:"Aten\xE7\xE3o!\n\nID do local ainda n\xE3o definido! Gostaria de inserir "+
"seu ID do local agora?",19:"Aten\u021Bie!\n\nID-ul loca\u021Biei nu a fost \xEEnc\u0103 definit! Dori\u021Bi "+
"s\u0103 introduce\u021Bi acum ID-ul loca\u021Biei?",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0435\u0449\u0435 "+"\u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D! \u0425\u043E\u0442\u0438\u0442\u0435 "+
"\u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0441\u0435\u0439\u0447\u0430\u0441?"
,27:"Pozor!\n\nID prostora \u0161e ni dolo\u010Den! Bi \u017Eeleli zdaj vnesti "+
"svoj ID prostora?",21:"\xA1Atenci\xF3n!\n\n\xA1Todav\xEDa no se ha definido un ID de predios! "+
"\xBFDesea ingresar su ID de predios ahora?",22:"Uppm\xE4rksamhet!\n\nInget lokal-ID definierat \xE4n! Vill du ange ditt "+
"lokal-ID nu?",23:"Dikkat!\n\nHen\xFCz tan\u0131ml\u0131 tesis kimli\u011Fi yok! \u015Eimdi "+
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
,3:"\u8B66\u544A\uFF1A\n\u5408\u898F\u7684\u52D5\u7269\u8B58\u5225\u78BC\u61C9\u5305\u542B\u6709\u6548\u7684\u570B\u5BB6\u4EE3\u78BC\u3002\n\u6383\u63CF\u5230\u7684\u8033\u6A19\u4E0A\u7684\u4EE3\u78BC "+
"{1} \u4E0D\u662F\u6709\u6548\u7684\u570B\u5BB6\u4EE3\u78BC\uFF01",25:"Upozorenje:\nID \u017Eivotinje u skladu treba sadr\u017Eavati valjanu "+
"oznaku dr\u017Eave.\nKod {1} prona\u0111en na skeniranoj markici uha nije "+"valjana oznaka dr\u017Eave!"
,4:"Upozorn\u011Bn\xED:\nID zv\xED\u0159ete v souladu by m\u011Blo obsahovat "+"platn\xFD k\xF3d zem\u011B.\nK\xF3d {1} nalezen\xFD na na\u010Dten\xE9 "+
"zn\xE1mce ucha nen\xED platn\xFD k\xF3d zem\u011B!",5:"Advarsel:\nEt lovligt dyre-ID skal indeholde en gyldig landekode.\nKoden "+
"{1} fundet p\xE5 det scannede \xF8rem\xE6rke er ikke en gyldig landekode!",0:"Warning:\nA compliant animal ID should contain a valid country code.\nCode "+
"{1} found on scanned ear tag is not a valid country code!",6:"Waarschuwing:\nEen conform dier ID moet een geldige landcode bevatten. "+
"Code {1} op het gescande oormerk is geen geldige landcode!",7:"Hoiatus:\nN\xF5uetele vastav looma ID peab sisaldama kehtivat riigikoodi. "+
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
,13:"Attenzione:\nUn ID animale conforme deve contenere un codice paese valido.\nIl "+
"codice {1} trovato sull\'etichetta auricolare scansionata non \xE8 un "+"codice paese valido!"
,15:"Br\u012Bdin\u0101jums:\nAtbilsto\u0161am dz\u012Bvnieka ID j\u0101satur "+"der\u012Bgs valsts kods.\nKods {1}, kas atrodams uz sken\u0113t\u0101s "+
"ausu pl\u0101ksnes, nav der\u012Bgs valsts kods!",26:"\u012Esp\u0117jimas:\nAtitinkantis gyv\u016Bno ID tur\u0117t\u0173 apimti "+
"galiojant\u012F \u0161alies kod\u0105.\nKodas {1}, nustatytas nuskaitytoje "+"ausies \u017Eymoje, n\u0117ra galiojantis \u0161alies kodas!"
,16:"Advarsel:\nEn kompatibel dyre-ID b\xF8r inneholde en gyldig landskode.\nKode "+
"{1} funnet p\xE5 skannede \xF8remerker er ikke en gyldig landskode!",17:"Ostrze\u017Cenie:\nZgodny identyfikator zwierz\u0119cia powinien zawiera\u0107 "+
"prawid\u0142owy kod kraju.\nZnaleziony kod {1} na przeskanowanym kolczyku "+"usznym nie jest prawid\u0142owym kodem kraju!"
,18:"Aviso:\nUm ID de animal conforme deve conter um c\xF3digo de pa\xEDs v\xE1lido.\nO "+
"c\xF3digo {1} encontrado na etiqueta auricular escaneada n\xE3o \xE9 um "+"c\xF3digo de pa\xEDs v\xE1lido!"
,19:"Avertisment:\nUn ID de animal conform trebuie s\u0103 con\u021Bin\u0103 "+"un cod de \u021Bar\u0103 valid.\nCodul {1} g\u0103sit pe eticheta urechii "+
"scanate nu este un cod de \u021Bar\u0103 valid!",20:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 "+
"\u043A\u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u044B. \u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u043A\u043E\u0434 {1} \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F "+
"\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u043C \u043A\u043E\u0434\u043E\u043C "+
"\u0441\u0442\u0440\u0430\u043D\u044B!",27:"Opozorilo:\nID \u017Eivali, ki je v skladu s predpisi, mora vsebovati "+
"veljavno kodo dr\u017Eave.\nKoda {1}, najdena na skenirani uhani, ni veljavna "+
"koda dr\u017Eave!",21:"Advertencia:\nUn ID de animal conforme debe contener un c\xF3digo de pa\xEDs "+
"v\xE1lido.\n\xA1El c\xF3digo {1} encontrado en la etiqueta auricular escaneada "+
"no es un c\xF3digo de pa\xEDs v\xE1lido!",22:"Varning:\nEtt f\xF6ljsamt djur-ID ska inneh\xE5lla en giltig landskod.\nKoden "+
"{1} som hittades p\xE5 den skannade \xF6ronm\xE4rkningen \xE4r inte en "+"giltig landskod!"
,23:"Uyar\u0131:\nUyumlu bir hayvan kimli\u011Fi ge\xE7erli bir \xFClke kodu "+"i\xE7ermelidir.\nTaranan kulak k\xFCpesinde bulunan {1} kodu ge\xE7erli "+
"bir \xFClke kodu de\u011Fil!",24:"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 "+
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
"\u043F\u0440\u0435\u0434\u0438 {2} \u0434\u043D\u0438!",3:"\u904E\u6642\u7684\u52D5\u7269\u9AD4\u91CD\uFF01\n\n\u52D5\u7269{1}\u5728{2}\u5929\u524D\u88AB\u7A31\u91CD\u4E86\uFF01"
,25:"Zastarjela te\u017Eina \u017Eivotinje!\n\n\u017Divotinja {1} je izmjerena "+
"prije {2} dana!",4:"Zastaral\xE1 v\xE1ha zv\xED\u0159ete!\n\nZv\xED\u0159e {1} bylo v\xE1\u017Eeno "+
"p\u0159ed {2} dny!",5:"For\xE6ldet dyrev\xE6gt!\n\nDyr {1} blev vejet for {2} dage siden!"
,0:"Outdated animal weight!\n\nAnimal {1} was weighed {2} days ago!",6:"Verouderd diergewicht!\nDier {1} is {2} dagen geleden gewogen!"
,7:"Looma kaalu andmed on aegunud!\n\nLooma {1} kaaluti {2} p\xE4eva eest!",8:"Vanhentunut el\xE4imen paino!\n\nEl\xE4in {1} punnittiin {2} p\xE4iv\xE4\xE4 "+
"sitten!",9:"Poids de l\'animal p\xE9rim\xE9\xA0!\nL\'animal {1} a \xE9t\xE9 pes\xE9 "+
"il y a d\xE9j\xE0 {2}\xA0jours\xA0!",10:"Veraltetes Tiergewicht!\n\nDie Wiegung von Tier {1} liegt bereits {2}\xA0Tage "+
"zur\xFCck!",11:"\u0391\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03BF\u03BC\u03AD\u03BD\u03BF "+
"\u03B2\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5!\n\n\u03A4\u03BF "+"\u03B6\u03CE\u03BF {1} \u03B6\u03C5\u03B3\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC {2} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2!"
,12:"Elavult \xE1llats\xFAly!\n\nAz \xE1llatot ({1}) {2} napja m\xE9rt\xE9k "+"le!"
,13:"Animale {1} \xE8 stato pesato {2} giorni fa!",15:"Noaktu\u0101lais dz\u012Bvnieka svars!\n\nDz\u012Bvnieks {1} tika svarots "+
"pirms {2} dien\u0101m!",26:"Pasenusi gyv\u016Bno svoris!\n\nGyv\u016Bnas {1} buvo pasvertas prie\u0161 "+
"{2} dienas!",16:"Utdatert dyrevekt!\n\nDyret {1} ble veid for {2} dager siden!"
,17:"Przestarza\u0142a waga zwierz\u0119cia!\n\nZwierz\u0119 {1} zosta\u0142o "+
"zwa\u017Cone {2} dni temu!",18:"Peso desatualizado do animal!\n\nO animal {1} foi pesado h\xE1 {2} dias!"
,19:"Animalul {1} a fost c\xE2nt\u0103rit acum {2} zile!",20:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0432\u0435\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\n\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E {1} \u0431\u044B\u043B\u043E "+
"{2}\xA0 \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434!",27:"Zastarela te\u017Ea \u017Eivali!\n\n\u017Dival {1} je bila tehtana pred "+
"{2} dnevi!",21:"\xA1Peso del animal desactualizado!\n\xA1El animal {1} fue pesado hace "+
"{2} d\xEDas!",22:"F\xF6r\xE5ldrad djurvikt!\n\nDjur {1} v\xE4gdes f\xF6r {2} dagar sedan!"
,23:"G\xFCncel olmayan hayvan a\u011F\u0131rl\u0131\u011F\u0131!\n\nHayvan "+"{1}, {2} g\xFCn \xF6nce tart\u0131ld\u0131!"
,24:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0432\u0430\u0433\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\n\u0412\u0437\u0432\u0430\u0436\u0435\u043D\u043D\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 {1} \u0431\u0443\u043B\u043E "+"{2}\xA0 \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443!"
};C.WarningOutdatedAnimalWeights={1:"Zastarjela vrijednost te\u017Eine \u017Eivotinje! {1} \u017Eivotinje su "+
"vagane prije 7\xA0dana!",2:"\u0422\u0435\u0433\u043B\u0430\u0442\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435 "+
"\u0441\u0430 \u043E\u0441\u0442\u0430\u0440\u0435\u043B\u0438!\n\n{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0441\u0430 \u043F\u0440\u0435\u0442\u0435\u0433\u043B\u0435\u043D\u0438 "+"\u043F\u0440\u0435\u0434\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 "+
"7 \u0434\u043D\u0438!",3:"\u904E\u6642\u7684\u52D5\u7269\u9AD4\u91CD\uFF01\n\n{1} \u500B\u52D5\u7269\u7684\u9AD4\u91CD\u662F\u8D85\u904E7\u5929\u524D\u6E2C\u91CF\u7684\uFF01"
,25:"Zastarjele te\u017Eine \u017Eivotinja!\n\n{1} \u017Eivotinja je izmjereno "+
"prije vi\u0161e od 7 dana!",4:"Zastaral\xE9 v\xE1hy zv\xED\u0159at!\n\n{1} zv\xED\u0159at bylo v\xE1\u017Eeno "+
"p\u0159ed v\xEDce ne\u017E 7 dny!",5:"For\xE6ldede dyrev\xE6gte!\n\n{1} dyr blev vejet for mere end 7 dage siden!"
,0:"Outdated animal weights!\n\n{1} animals were weighed more than 7 days ago!",
6:"Verouderde diergewichten!\n\nDe dieren zijn meer dan 7 dagen geleden gewogen!"
,7:"Loomade kaalude andmed on aegunud!\n\n{1}looma kaaluti enam kui 7 p\xE4eva "+
"eest!",8:"Vanhentuneet el\xE4inten painot!\n\n{1}\xA0el\xE4imet punnittiin yli 7\xA0p\xE4iv\xE4\xE4 "+
"sitten!",9:"Poids des animaux p\xE9rim\xE9s\xA0!\n{1}\xA0animaux ont \xE9t\xE9 pes\xE9s "+
"il y a plus de 7\xA0jours\xA0!",10:"Veraltete Tiergewichte!\n\nBei {1}\xA0Tieren liegt die letzte Wie~gung "+
"mehr als 7\xA0Tage zur\xFCck!",11:"\u0391\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B2\u03AC\u03C1\u03B7 \u03B6\u03CE\u03C9\u03BD!\n\n{1}\xA0\u03B6\u03C5\u03B3\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 "+
"\u03B1\u03C0\u03CC 7\xA0\u03B7\u03BC\u03AD\u03C1\u03B5\u03C2!",12:"Elavult \xE1llats\xFAlyok!\n\n{1} \xE1llatot t\xF6bb mint 7 napja m\xE9rtek!"
,13:"Pesi degli animali non aggiornati!\n\n{1} animali sono stati pesati pi\xF9 "+
"di 7 giorni fa!",15:"Novecoju\u0161i dz\u012Bvnieku svari!\n\n{1} dz\u012Bvnieki tika svaroti "+
"pirms vair\u0101k nek\u0101 7 dien\u0101m!",26:"Pasenusi gyv\u016Bn\u0173 svoriai!\n\n{1} gyv\u016Bnai buvo pasverti daugiau "+
"nei prie\u0161 7 dienas!",16:"Utdaterte dyrevekter!\n\n{1}\xA0dyr ble veid for mer enn 7\xA0dager siden!"
,17:"Przestarza\u0142e wagi zwierz\u0105t!\n\n{1} zwierz\u0105t wa\u017Cono "+"ponad 7 dni temu!"
,18:"Pesos desatualizados de animais!\n\n{1} animais foram pesados h\xE1 mais "+
"de 7 dias!",19:"Greut\u0103\u021Bi \xEEnvechite ale animalelor!\n\n{1} animale au fost "+
"c\xE2nt\u0103rite acum mai mult de 7 zile!",20:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0432\u0435\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!\n\n\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 "+
"{1}\xA0\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0431\u044B\u043B\u043E "+
"\u0431\u043E\u043B\u0435\u0435 7\xA0\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434!"
,27:"Zastarele te\u017Ee \u017Eivali!\n\n{1} \u017Eivali so bile stehtane pred "+
"ve\u010D kot 7 dnevi!",21:"\xA1Pesos de animales desactualizados!\n\n\xA1{1} animales fueron pesados "+
"hace m\xE1s de 7 d\xEDas!",22:"Inaktuella djurvikter!\n\n{1} djur v\xE4gdes f\xF6r mer \xE4n 7 dagar "+
"sedan!",23:"G\xFCncel olmayan hayvan a\u011F\u0131rl\u0131klar\u0131!\n\n{1} hayvan "+
"7 g\xFCnden daha uzun s\xFCre \xF6nce tart\u0131ld\u0131!",24:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0432\u0430\u0433\u0443 \u0442\u0432\u0430\u0440\u0438\u043D!\n\n\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"{1}\xA0\u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u043B\u043E \u0431\u0456\u043B\u044C\u0448 "+
"\u043D\u0456\u0436 7\xA0\u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443!"};C.
WarningParsedDateInFutureInvalid={1:"Pa\u017Enja!\n\nDatum ro\u0111enja koji je skeniran je u budu\u0107nosti "+
"i stoga je odba\u010Den!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0430\u0442\u0430 "+
"\u0434\u0430\u0442\u0430 \u043A\u0430\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0430 "+
"\u0434\u0430\u0442\u0430 \u0435 \u0432 \u0431\u044A\u0434\u0435\u0449\u0435\u0442\u043E "+
"\u0438 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u043D\u043E "+
"\u0435 \u043E\u0442\u0445\u0432\u044A\u0440\u043B\u0435\u043D\u0430!",3:"\u6CE8\u610F\uFF01\n\n\u6383\u63CF\u9032\u4F86\u7684\u51FA\u751F\u65E5\u671F\u662F\u672A\u4F86\u7684\u65E5\u671F\uFF0C\u56E0\u6B64\u88AB\u4E1F\u68C4\u4E86\uFF01"
,25:"Pozor!\n\nDatum koji je skeniran kao datum ro\u0111enja je u budu\u0107nosti "+
"i stoga je odba\u010Den!",4:"Pozor!\n\nDatum naskenovan\xE9 jako datum narozen\xED le\u017E\xED v budoucnosti "+
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
,13:"Attenzione!\n\nLa data di nascita scannerizzata \xE8 nel futuro e quindi "+
"\xE8 stata scartata!",15:"Uzman\u012Bbu!\n\nIevad\u012Btais dzim\u0161anas datums ir n\u0101kotn\u0113 "+
"un t\u0101p\u0113c tika atcelts!",26:"D\u0117mesio!\n\nNuskaityta gimimo data yra ateityje, tod\u0117l buvo "+
"atmesta!",16:"Oppmerksomhet!\n\nDatoen som ble skannet inn som f\xF8dselsdato ligger "+
"i fremtiden og ble derfor forkastet!",17:"Uwaga!\n\nData wprowadzona jako data urodzenia jest dat\u0105 przysz\u0142\u0105 "+
"i zosta\u0142a odrzucona!",18:"Aten\xE7\xE3o!\n\nA data inserida como data de nascimento est\xE1 no futuro "+
"e, portanto, foi descartada!",19:"Aten\u021Bie!\n\nData introdus\u0103 ca dat\u0103 de na\u0219tere este "+
"\xEEn viitor \u0219i a fost, prin urmare, ignorat\u0103!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0432\u0435\u0434\u0451\u043D\u043D\u0430\u044F "+
"\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F "+"\u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 "+
"\u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u044B\u043B\u0430 "+"\u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430!"
,27:"Pozor!\n\nDatum, skeniran kot rojstni datum, le\u017Ei v prihodnosti in "+"je bil zato zavrnjen!"
,21:"\xA1Atenci\xF3n!\n\nLa fecha escaneada como fecha de nacimiento est\xE1 "+"en el futuro y, por lo tanto, se descart\xF3."
,22:"Observera!\n\nDet inskannade f\xF6delsedatumet ligger i framtiden och "+"har d\xE4rf\xF6r kasserats!"
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
,3:"\u6CE8\u610F\uFF01\n\n\u689D\u78BC\u6383\u63CF\u4F5C\u70BA\u51FA\u751F\u65E5\u671F\u7121\u6CD5\u8F49\u63DB\u70BA\u6709\u6548\u7684\u65E5\u671F\u503C\uFF0C\u56E0\u6B64\u5DF2\u88AB\u4E1F\u68C4\uFF01"
,25:"Pa\u017Enja!\n\nBarkod koji je u\u010Ditan kao datum ro\u0111enja nije "+"mogao biti pretvoren u valjanu vrijednost datuma te je stoga odba\u010Den!"
,4:"Pozor!\n\n\u010C\xE1rov\xFD k\xF3d na\u010Dten\xFD jako datum narozen\xED "+
"nemohl b\xFDt p\u0159eveden na platnou hodnotu data a byl proto zahozen!",5:"Opm\xE6rksomhed!\n\nStregkoden, der blev indl\xE6st som f\xF8dselsdato, "+
"kunne ikke konverteres til en gyldig dato og blev derfor kasseret!",0:"Attention!\n\nThe barcode read in as birth date could not be converted "+
"into a valid date value and was therefore discarded!",6:"Let op!\nDe barcode die is ingelezen als geboortedatum kon niet worden "+
"omgezet in een geldige datumwaarde en is daarom verwijderd!",7:"T\xE4helepanu!\n\nV\xF6\xF6tkoodina sisestatud s\xFCnnikuup\xE4eva ei \xF5nnestunud "+
"kehtivaks kuup\xE4evaks teisendada ja seet\xF5ttu seda eirati!",8:"Huomio!\n\nSyntym\xE4p\xE4iv\xE4n\xE4 luettua viivakoo~dia ei voitu muun~taa "+
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
"eldob\xE1sra ker\xFClt!",13:"Attenzione!\n\nIl codice a barre letto come data di nascita non \xE8 stato "+
"convertito in un valore di data valido e pertanto \xE8 stato scartato!",15:"Uzman\u012Bbu!\n\nSv\u012Btrkods, kas tika nolas\u012Bts k\u0101 dzim\u0161anas "+
"datums, nevar\u0113ja tikt p\u0101rveidots par der\u012Bgu datuma v\u0113rt\u012Bbu "+
"un t\u0101d\u0113\u013C tika atmests!",26:"D\u0117mesio!\n\nBr\u016Bk\u0161ninis kodas, nuskaitytas kaip gimimo data, "+
"negal\u0117jo b\u016Bti paverstas \u012F galiojan\u010Di\u0105 datos reik\u0161m\u0119 "+
"ir tod\u0117l buvo atmestas!",16:"Oppmerksomhet!\n\nStrekkoden som ble lest inn som f\xF8dselsdato kunne "+
"ikke konverteres til en gyldig dato og ble derfor forkastet!",17:"Uwaga!\n\nKod kreskowy odczytany jako data urodzenia nie m\xF3g\u0142 "+
"zosta\u0107 przekszta\u0142cony w prawid\u0142ow\u0105 warto\u015B\u0107 "+"daty i zosta\u0142 zignorowany!"
,18:"Aten\xE7\xE3o!\n\nO c\xF3digo de barras lido como data de nascimento n\xE3o "+
"p\xF4de ser convertido em um valor de data v\xE1lido e, portanto, foi "+"descartado!"
,19:"Aten\u021Bie!\n\nCodul de bare citit ca dat\u0103 de na\u0219tere nu a "+"putut fi convertit \xEEntr-o valoare de dat\u0103 valid\u0103 \u0219i "+
"a fost, prin urmare, eliminat!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434, "+
"\u0441\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u043A "+"\u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, "+
"\u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D "+
"\u0432 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0443\u044E \u0434\u0430\u0442\u0443 "+
"\u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u044B\u043B \u043E\u0442\u0431\u0440\u043E\u0448\u0435\u043D!"
,27:"Pozor!\n\n\u010Crtna koda, prebrana kot datum rojstva, ni bila pretvorjena "+
"v veljavno vrednost datuma in je bila zato zavrnjena!",21:"\xA1Atenci\xF3n!\nEl c\xF3digo de barras le\xEDdo como fecha de nacimiento "+
"no se pudo convertir en un valor de fecha v\xE1lido y, por lo tanto, se "+"descart\xF3."
,22:"Uppm\xE4rksamhet!\n\nStreckkoden som l\xE4stes in som f\xF6delsedatum "+"kunde inte omvandlas till ett giltigt datumv\xE4rde och har d\xE4rf\xF6r "+
"kasserats!",23:"Dikkat!\n\nDo\u011Fum tarihi olarak okunan barkod ge\xE7erli bir tarih "+
"de\u011Ferine d\xF6n\xFC\u015Ft\xFCr\xFClemedi\u011Fi i\xE7in at\u0131ld\u0131!"
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
,3:"\u6CE8\u610F\uFF01\n\n\u689D\u78BC\u8B80\u53D6\u672A\u80FD\u8F49\u63DB\u6210\u6709\u6548\u7684\u8033\u6A19\u865F\u78BC\uFF0C\u56E0\u6B64\u88AB\u4E1F\u68C4\uFF01"
,25:"Pa\u017Enja!\n\nO\u010Ditan barkod nije mogao biti pretvoren u valjani "+"broj markice za uho i stoga je odba\u010Den!"
,4:"Pozor!\n\n\u010C\xE1rov\xFD k\xF3d nebylo mo\u017En\xE9 p\u0159ev\xE9st "+"na platn\xE9 \u010D\xEDslo u\u0161n\xED zn\xE1mky a byl proto zahozen!"
,5:"Opm\xE6rksomhed!\n\nStregkoden kunne ikke omdannes til et gyldigt \xF8rem\xE6rkenummer "+
"og blev derfor kasseret!",0:"Attention!\n\nThe barcode read could not be transformed into a valid eartag "+
"number and was therefore discarded!",6:"Attentie:\nDe Barcode scanner kan het nummer niet omzetten naar een waardig "+
"oormerk en moet weggegooid",7:"T\xE4helepanu!\n\nLoetud triipkoodi ei \xF5nnestunud teisendada kehtivaks "+
"k\xF5rvam\xE4rgi numbriks ja seet\xF5ttu seda eirati!",8:"Huomio!\n\nLuettua viivakoodia ei voitu muuntaa kelvolliseksi korvamerkkinumeroksi, "+
"joten se hyl\xE4ttiin!",9:"Attention\xA0!\n\nLe code-barres lu n\'a pas pu \xEAtre converti en un "+
"num\xE9ro de boucle valable et a donc \xE9t\xE9 rejet\xE9\xA0!",10:"Achtung!\nDer eingelesene Barcode konnte nicht in eine g\xFClti~ge Ohrmarken~nummer "+
"umge~wandelt werden und wurde daher verworfen!",11:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\n\u0397 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 "+
"\u03C4\u03BF\u03C5 \u03B3\u03C1\u03B1\u03BC\u03BC\u03C9\u03C4\u03BF\u03CD "+"\u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03B4\u03B5\u03BD \u03BC\u03C0\u03CC\u03C1\u03B5\u03C3\u03B5 "+
"\u03BD\u03B1 \u03BC\u03B5\u03C4\u03B1\u03C4\u03C1\u03B1\u03C0\u03B5\u03AF "+"\u03C3\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC "+
"\u03B5\u03BD\u03CE\u03C4\u03B9\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03B3\u03B9\u03B1 "+
"\u03B1\u03C5\u03C4\u03CC \u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5!"
,12:"Figyelem!\n\nA vonalk\xF3d leolvas\xE1sa nem alak\xEDthat\xF3 \xE1t \xE9rv\xE9nyes "+
"f\xFCljelz\u0151 sz\xE1mra, ez\xE9rt eldob\xE1sra ker\xFClt!",13:"Attenzione!\n\nIl codice a barre letto non \xE8 stato trasformato in un "+
"numero di etichetta auricolare valido e quindi \xE8 stato scartato!",15:"Uzman\u012Bbu!\n\nSv\u012Btrkods, ko nolas\u012Bja, nevar\u0113ja p\u0101rveidot "+
"par der\u012Bgu auskaru numuru, t\u0101p\u0113c tas tika atmests!",26:"D\u0117mesio!\n\nNepavyko paversti nuskaityto br\u016Bk\u0161ninio kodo "+
"\u012F galiojant\u012F auskar\u0117lio numer\u012F, tod\u0117l jis buvo "+"atmestas!"
,16:"Oppmerksomhet!\n\nStrekkoden som ble lest kunne ikke omformes til et gyldig "+
"\xF8remerkenummer og ble derfor forkastet!",17:"Uwaga!\n\nOdczyt kodu kreskowego nie m\xF3g\u0142 zosta\u0107 przekszta\u0142cony "+
"w prawid\u0142owy numer kolczyka identyfikacyjnego i zosta\u0142 odrzucony!",18:
"Aten\xE7\xE3o!\n\nO c\xF3digo de barras lido n\xE3o p\xF4de ser transformado "+
"em um n\xFAmero de brinco v\xE1lido e, portanto, foi descartado!",19:"Aten\u021Bie!\n\nCitirea codului de bare nu a putut fi transformat\u0103 "+
"\xEEntr-un num\u0103r de etichet\u0103 valid \u0219i, prin urmare, a fost "+"respins\u0103!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 "+
"\u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C "+
"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u044C "+
"\u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0431\u0438\u0440\u043A\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 "+
"\u043E\u043D \u0431\u044B\u043B \u043E\u0442\u0431\u0440\u043E\u0448\u0435\u043D!"
,27:"Pozor!\n\nBranje \u010Drtne kode ni bilo mogo\u010De pretvoriti v veljavno "+
"\u0161tevilko u\u0161esne znamke in je bilo zato zavrnjeno!",21:"\xA1Atenci\xF3n!\nEl c\xF3digo de barras le\xEDdo no se pudo transformar "+
"en un n\xFAmero de etiqueta de o\xEDdo v\xE1lido y, por lo tanto, se descart\xF3."
,22:"Uppm\xE4rksamhet!\n\nStreckkoden som l\xE4stes kunde inte omvandlas till "+
"ett giltigt \xF6ronm\xE4rkesnummer och kasserades d\xE4rf\xF6r!",23:"Dikkat!\n\nDo\u011Fum tarihi olarak okunan barkod ge\xE7erli bir tarih "+
"de\u011Ferine d\xF6n\xFC\u015Ft\xFCr\xFClemedi\u011Fi i\xE7in at\u0131ld\u0131!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 "+
"\u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 "+
"\u0431\u0443\u043B\u043E \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u043D\u0430 \u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 "+
"\u0431\u0438\u0440\u043A\u0438, \u0442\u043E\u043C\u0443 \u0432\u0456\u043D "+"\u0431\u0443\u0432 \u0432\u0456\u0434\u043A\u0438\u043D\u0443\u0442\u0438\u0439!"
};C.WarningResetAnimalData={1:"Svi podaci o \u017Eivotinjama \u0107e biti izbrisani! Jeste li sigurni!"
,2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 "+
"\u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u6240\u6709\u52D5\u7269\u8CC7\u6599\u5C07\u88AB\u522A\u9664\uFF01\n\u60A8\u78BA\u5B9A\u55CE\uFF1F"
,25:"Svi podaci o \u017Eivotinjama bit \u0107e izbrisani!\nJeste li sigurni?",4:
"V\u0161echna data o zv\xED\u0159atech budou smaz\xE1na!\nJste si jisti?",5:"Alle dyredata vil blive slettet!\nEr du sikker?"
,0:"All animal data will be deleted!\nAre you sure?",6:"Alle dierdata wordt verwijderd\n weet je het zeker?"
,7:"K\xF5ik loomade andmed kustutatakse!\nKas olete kindel?",8:"Kaikki el\xE4intiedot poistetaan!\nOletko varma?"
,9:"Toutes les don~n\xE9es relatives aux animaux seront effac\xE9es\xA0!\nVous "+
"\xEAtes s\xFBr\xA0?",10:"Alle Tierdaten werden gel\xF6scht!\nSind Sie sicher?",
11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C4\u03C9\u03BD \u03B6\u03CE\u03C9\u03BD \u03B8\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden \xE1llatadat t\xF6rl\xE9sre ker\xFCl!\nBiztos benne?"
,13:"Tutti i dati degli animali verranno eliminati!\nSei sicuro?",15:"Visi dz\u012Bvnieku dati tiks dz\u0113sti!\nVai esat p\u0101rliecin\u0101ts?"
,26:"Visi gyv\u016Bn\u0173 duomenys bus i\u0161trinti!\nAr tikrai?",16:"Alle dyredata vil bli slettet!\nEr du sikker?"
,17:"Wszystkie dane zwierz\u0105t zostan\u0105 usuni\u0119te!\nCzy jeste\u015B "+
"pewien?",18:"Todos os dados dos animais ser\xE3o exclu\xEDdos!\nVoc\xEA tem certeza?"
,19:"Toate datele despre animale vor fi \u0219terse!\nE\u0219ti sigur?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",27:"Vsi podatki o \u017Eivalih bodo izbrisani!\nSte prepri\u010Dani?"
,21:"\xA1Se borrar\xE1n todos los datos de los animales!\n\xBFEst\xE1 seguro?",22:
"All djurdata kommer att raderas!\n\xC4r du s\xE4ker?",23:"T\xFCm hayvan verileri silinecek!\nEmin misiniz?"
,24:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.WarningResetDeviceData={1:
"Svi podaci ure\u0111aja \u0107e biti izbrisani!\nJeste li sigurni?",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u6240\u6709\u88DD\u7F6E\u8CC7\u6599\u5C07\u88AB\u522A\u9664\uFF01\n\u60A8\u78BA\u5B9A\u55CE\uFF1F"
,25:"Svi podaci na ure\u0111aju bit \u0107e izbrisani! \nJeste li sigurni?",4:"Ve\u0161ker\xE1 data za\u0159\xEDzen\xED budou smaz\xE1na!\nJste si jisti?"
,5:"Alle enhedsdata vil blive slettet!\nEr du sikker?",0:"All device data will be deleted!\nAre you sure?"
,6:"Alle apparaatgegevens worden verwijderd!\nWeet u het zeker?",7:"K\xF5ik seadme andmed kustutatakse!\nKas olete kindel?"
,8:"Kaikki laitteen tiedot poistetaan! Oletko varma?",9:"Toutes les donn\xE9es de l\'appareil seront supprim\xE9es\xA0!\n\xCAtes-vous "+
"s\xFBr\xA0?",10:"Alle Ger\xE4tedaten werden gel\xF6scht!\nSind Sie sicher?",11:
"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03B8\u03B1 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden eszk\xF6zadat t\xF6rl\u0151dik!\nBiztos benne?"
,13:"Tutti i dati del dispositivo verranno eliminati!\nSei sicuro?",15:"Visi ier\u012Bces dati tiks dz\u0113sti!\nVai esat p\u0101rliecin\u0101ts?"
,26:"Visi \u012Frenginio duomenys bus i\u0161trinti!\nAr tikrai?",16:"Alle enhetsdata vil bli slettet!\nEr du sikker?"
,17:"Wszystkie dane urz\u0105dzenia zostan\u0105 usuni\u0119te!\nCzy jeste\u015B "+
"pewien?",18:"Todos os dados do dispositivo ser\xE3o exclu\xEDdos!\nVoc\xEA tem certeza?"
,19:"Toate datele dispozitivului vor fi \u0219terse!\nE\u0219ti sigur?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",27:"Vsi podatki na napravi bodo izbrisani!\nSte prepri\u010Dani?"
,21:"\xA1Se borrar\xE1n todos los datos del dispositivo!\n\xBFEst\xE1 seguro?",22:
"All enhetsdata kommer att raderas!\n\xC4r du s\xE4ker?",23:"T\xFCm cihaz verileri silinecek! Emin misiniz?"
,24:"\u0412\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u0434\u0443\u0442\u044C \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.Brk={1:"Svi podaci o aparatima i \u017Eivotinjama bi\u0107e izbrisani! Jeste li "+
"sigurni\"",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u6240\u6709\u8A2D\u5099\u6578\u64DA\u90FD\u5C07\u88AB\u522A\u9664\uFF01\n\u60A8\u78BA\u5B9A\u55CE\uFF1F"
,25:"Svi podaci o ure\u0111ajima i \u017Eivotinjama bit \u0107e izbrisani!\nJeste "+
"li sigurni?",4:"Varov\xE1n\xED Obnoven\xED tov\xE1rn\xEDch nastaven\xED",5:"Alle enheds- og dyredata vil blive slettet!\nEr du sikker?"
,0:"All device and animal data will be deleted!\nAre you sure?",6:"Alle data word van Apparaat verwijdert!\nWeet u dit zeker?"
,7:"K\xF5ik seadme ja loomade andmed kustutatakse!\nKas olete kindel?",8:"Kaikki laite- ja el\xE4intiedot poistetaan!\nOletko varma?"
,9:"Toutes les don~n\xE9es de l\u2019appareil seront supprim\xE9es\xA0!\n\xCAtes-vous "+
"s\xFBre\xA0?",10:"Alle Ger\xE4te- und Tierdaten werden gel\xF6scht!\nSind Sie sicher?"
,11:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C3\u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B8\u03B1 "+"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD! \u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",12:"Minden eszk\xF6z- \xE9s \xE1llatadat t\xF6rl\u0151dik!\nBiztos benne?"
,13:"Tutti i dati dei dispositivi e degli animali verranno eliminati!\nSei "+"sicuro?"
,15:"Visi ier\u012B\u010Du un dz\u012Bvnieku dati tiks dz\u0113sti!\nVai esat "+
"p\u0101rliecin\u0101ts?",26:"Visi \u012Frenginio ir gyv\u016Bn\u0173 duomenys bus i\u0161trinti!\nAr "+
"tikrai?",16:"Alle enhets- og dyredata vil bli slettet!\nEr du sikker?",17:"Wszystkie dane urz\u0105dze\u0144 i zwierz\u0105t zostan\u0105 usuni\u0119te!\nCzy "+
"jeste\u015B pewien?",18:"Todos os dados de dispositivos e animais ser\xE3o deletados!\nVoc\xEA "+
"tem certeza?",19:"Toate datele dispozitivelor \u0219i animalelor vor fi \u0219terse!\nSunte\u021Bi "+
"sigur?",20:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",27:"Vsi podatki o napravah in \u017Eivalih bodo izbrisani!\nSte prepri\u010Dani?"
,21:"\xA1Se eliminar\xE1n todos los datos relacionados con el dispositivo!\n\xBFEst\xE1 "+
"seguro?",22:"All enhets- och djurdata kommer att raderas!\n\xC4r du s\xE4ker?",
23:"Fabrika ayarlar\u0131na d\xF6nme uyar\u0131s\u0131",24:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.WarningResetTempThresholds={
1:"Da li stvarno \u017Eelite promjeniti grani\u010Dne vrijednosti za sve pasmine?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u043D\u0443\u043B\u0438\u0440\u0430\u0442\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438\u0442\u0435 "+
"\u043F\u0440\u0430\u0433\u043E\u0432\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438 "+
"\u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0432\u0438\u0434\u043E\u0432\u0435?"
,3:"\u60A8\u771F\u7684\u8981\u91CD\u8A2D\u6240\u6709\u7269\u7A2E\u7684\u6EAB\u5EA6\u95BE\u503C\u55CE\uFF1F"
,25:"\u017Delite li doista resetirati vrijednosti pragova temperature za sve "+"vrste?"
,4:"Opravdu chcete obnovit hodnoty prahov\xE9 teploty pro v\u0161echny druhy?",5:
"Vil du virkelig nulstille temperaturt\xE6rskelv\xE6rdierne for alle arter?",0:"Do you really want to reset temperature threshold values for all species?"
,6:"Wil je echt alle temperatuurwaarden resetten?",7:"Kas soovite kindlasti k\xF5igi liikide temperatuuri l\xE4vev\xE4\xE4rtused "+
"l\xE4htestada?",8:"Haluatko todella nollata kaikkien lajien l\xE4m~p\xF6~ti~la~rajat?"
,9:"Souhaitez-vous vraiment r\xE9tablir les valeurs seuils de temp\xE9rature "+"pour toutes les esp\xE8ces\xA0?"
,10:"Alle Temperatur~schwellenwerte f\xFCr alle Tierarten werden zur\xFCck~gesetzt!\n\nSind "+
"Sie sicher?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BF\u03C1\u03AF\u03C9\u03BD "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+"\u03B3\u03B9\u03B1 \u03CC\u03BB\u03B1 \u03C4\u03B1 \u03B5\u03AF\u03B4\u03B7;"
,12:"Val\xF3ban szeretn\xE9 alaphelyzetbe \xE1ll\xEDtani a h\u0151m\xE9rs\xE9kleti "+
"k\xFCsz\xF6b\xE9rt\xE9keket az \xF6sszes faj sz\xE1m\xE1ra?",13:"Vuoi davvero reimpostare i valori soglia della temperatura per tutte le "+
"specie?",15:"Vai tie\u0161\u0101m v\u0113laties atiestat\u012Bt temperat\u016Bras sliek\u0161\u0146a "+
"v\u0113rt\u012Bbas vis\u0101m sug\u0101m?",26:"Ar tikrai norite i\u0161 naujo nustatyti temperat\u016Bros slenks\u010Di\u0173 "+
"reik\u0161mes visoms r\u016B\u0161ims?",16:"Vil du virkelig tilbakestille temperaturterskelverdier for alle arter?"
,17:"Czy na pewno chcesz zresetowa\u0107 warto\u015Bci progowe temperatury "+"dla wszystkich gatunk\xF3w?"
,18:"Voc\xEA realmente quer redefinir os valores de limite de temperatura para "+
"todas as esp\xE9cies?",19:"Dore\u0219ti cu adev\u0103rat s\u0103 resetezi valorile pragului de temperatur\u0103 "+
"pentru toate speciile?",20:"\u0412\u0441\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0435 "+
"\u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 "+
"\u0432\u0438\u0434\u043E\u0432 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u044B!\n\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",27:"Ali res \u017Eelite ponastaviti vrednosti temperaturnih pragov za vse "+
"vrste?",21:"\xBFRealmente desea restablecer los valores de umbral de temperatura para "+
"todas las especies?",22:"Vill du verkligen \xE5terst\xE4lla temperaturtr\xF6skelv\xE4rdena f\xF6r "+
"alla arter?",23:"Ger\xE7ekten t\xFCm t\xFCrler i\xE7in s\u0131cakl\u0131k e\u015Fik de\u011Ferlerini "+
"s\u0131f\u0131rlamak istiyor musunuz?",24:"\u0423\u0441\u0456 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0456 "+
"\u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043B\u044F \u0443\u0441\u0456\u0445 "+
"\u0432\u0438\u0434\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u0434\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u043E!\n\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"
};C.Brl={1:"Da li stvarno \u017Eelite vratiti na fabri\u010Dke postavke ({1} {2})?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 "+
"\u0442\u0430\u0437\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 "+"\u0434\u043E \u0444\u0430\u0431\u0440\u0438\u0447\u043D\u0438\u0442\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435 "+
"({1} {2})?",3:"\u60A8\u78BA\u5B9A\u8981\u5C07\u6B64\u503C\u91CD\u7F6E\u70BA\u51FA\u5EE0\u9810\u8A2D\u503C "+
"({1} {2}) \u55CE\uFF1F",25:"\u017Delite li zaista vratiti ovu vrijednost na tvorni\u010Dke postavke "+
"({1} {2})?",4:"Opravdu chcete obnovit tuto hodnotu na tov\xE1rn\xED nastaven\xED ({1} "+
"{2})?",5:"Vil du virkelig nulstille denne v\xE6rdi til fabriksindstillinger ({1} "+
"{2})?",0:"Do you really want to reset this value to factory default ({1} {2})?"
,6:"Wil je echt alle waardes resetten met waarde ({1} {2})?",7:"Kas soovite kindlasti l\xE4htestada selle v\xE4\xE4rtuse tehaseseadetele "+
"({1} {2})?",8:"Haluatko todella palauttaa t\xE4m\xE4n arvon tehdasasetuksiin ({1} {2})?"
,9:"Voulez-vous vraiment r\xE9~ini~tia~li~ser cette valeur \xE0 la valeur de "+"l\u2019usine ({1} {2})\xA0?"
,10:"M\xF6chten Sie diesen Wert wirklich auf die Werkseinstellung zur\xFCcksetzen "+
"({1} {2})?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03C4\u03B9\u03BC\u03AE "+"\u03C3\u03C4\u03B7\u03BD \u03B5\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AE "+
"\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE ({1} {2});",12:"Val\xF3ban vissza szeretn\xE9 \xE1ll\xEDtani ezt az \xE9rt\xE9ket gy\xE1ri "+
"alap\xE9rtelmez\xE9sre ({1} {2})?",13:"Vuoi davvero ripristinare questo valore alle impostazioni di fabbrica "+
"({1} {2})?",15:"Vai tie\u0161\u0101m v\u0113laties atiestat\u012Bt \u0161o v\u0113rt\u012Bbu "+
"uz r\u016Bpn\u012Bcas noklus\u0113jumiem ({1} {2})?",26:"Ar tikrai norite atkurti \u0161i\u0105 reik\u0161m\u0119 \u012F gamyklinius "+
"nustatymus ({1} {2})?",16:"Vil du virkelig tilbakestille denne verdien til fabrikkstandard ({1} {2})?"
,17:"Czy na pewno chcesz przywr\xF3ci\u0107 warto\u015B\u0107 domy\u015Bln\u0105 "+
"({1} {2})?",18:"Voc\xEA realmente deseja redefinir este valor para o padr\xE3o de f\xE1brica "+
"({1} {2})?",19:"Dori\u021Bi cu adev\u0103rat s\u0103 reseta\u021Bi aceast\u0103 valoare "+
"la set\u0103rile din fabric\u0103 ({1} {2})?",20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C "+
"\u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 "+
"\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 "+
"({1} {2})?",27:"Ali res \u017Eelite ponastaviti to vrednost na tovarni\u0161ke nastavitve "+
"({1} {2})?",21:"\xBFRealmente desea restablecer este valor a los valores predeterminados "+
"de f\xE1brica ({1} {2})?",22:"Vill du verkligen \xE5terst\xE4lla detta v\xE4rde till fabriksinst\xE4llningarna "+
"({1} {2})?",23:"Bu de\u011Feri ger\xE7ekten fabrika varsay\u0131lan\u0131na ({1} {2}) "+
"s\u0131f\u0131rlamak istiyor musunuz?",24:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0446\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u043E \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 "+"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C ({1} "+
"{2})?"};C.WarningResetWeightSettings={1:"Da li zaista \u017Eelite resetovati sve postavke vezane za te\u017Einu?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u043D\u0443\u043B\u0438\u0440\u0430\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 "+
"\u0441 \u0442\u0435\u0433\u043B\u043E\u0442\u043E?",3:"\u60A8\u771F\u7684\u8981\u91CD\u8A2D\u6240\u6709\u8207\u9AD4\u91CD\u76F8\u95DC\u7684\u8A2D\u5B9A\u55CE\uFF1F"
,25:"\u017Delite li zaista resetirati sve postavke vezane uz te\u017Einu?",4:"Opravdu chcete obnovit v\u0161echna nastaven\xED souvisej\xEDc\xED s v\xE1hou?"
,5:"Vil du virkelig nulstille alle v\xE6gtrelaterede indstillinger?",0:"Do you really want to reset all weight-related settings?"
,6:"Wil je echt alle gewichtsdata resetten?",7:"Kas soovite kindlasti l\xE4htestada k\xF5ik kaaluga seotud seaded?"
,8:"Haluatko todella palauttaa kaikki painoon liittyv\xE4t asetukset tehdasasetuksiin?"
,9:"Voulez-vous vraiment r\xE9initialiser tous les r\xE9glages bas\xE9s sur "+"le poids aux r\xE9glages d\'usine\xA0?"
,10:"Wirklich alle gewichtsbe~zogenen Ein~stellungen auf Werksein~stellungen "+"zur\xFCck~setzen?"
,11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 "+
"\u03C0\u03BF\u03C5 \u03C3\u03C7\u03B5\u03C4\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 "+
"\u03BC\u03B5 \u03C4\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2;",12:"Val\xF3ban szeretn\xE9d alaphelyzetbe \xE1ll\xEDtani az \xF6sszes s\xFAlykapcsolatos "+
"be\xE1ll\xEDt\xE1st?",13:"Vuoi davvero reimpostare tutte le impostazioni relative al peso?"
,15:"Vai tie\u0161\u0101m v\u0113laties atiestat\u012Bt visus svara saist\u012Btos "+
"iestat\u012Bjumus?",26:"Ar tikrai norite i\u0161 naujo nustatyti visus svorio susijusius nustatymus?"
,16:"Vil du virkelig tilbakestille alle vektrelaterte innstillinger?",17:"Czy na pewno chcesz zresetowa\u0107 wszystkie ustawienia zwi\u0105zane "+
"z wag\u0105?",18:"Voc\xEA realmente deseja redefinir todas as configura\xE7\xF5es relacionadas "+
"ao peso?",19:"Dore\u0219ti cu adev\u0103rat s\u0103 resetezi toate set\u0103rile legate "+
"de greutate?",20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C "+
"\u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, "+"\u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0432\u0435\u0441\u043E\u043C?"
,27:"Ali res \u017Eelite ponastaviti vse nastavitve, povezane z ute\u017Emi?",21:
"\xBFRealmente desea restablecer todas las configuraciones relacionadas "+"con el peso?"
,22:"Vill du verkligen \xE5terst\xE4lla alla viktrelaterade inst\xE4llningar?",23:
"Kiloyla ilgili t\xFCm ayarlar\u0131 ger\xE7ekten s\u0131f\u0131rlamak "+"istiyor musunuz?"
,24:"\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0441\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F, "+
"\u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0456 \u0437 \u0432\u0430\u0433\u043E\u044E?"
};C.WarningRestart={1:"Da li stvarno \u017Eelite ponovo pokrenuti aparat?",2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u0442\u0435 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E?",3:"\u4F60\u771F\u7684\u60F3\u91CD\u555F\u8A2D\u5099\u55CE\uFF1F"
,25:"\u017Delite li doista ponovno pokrenuti ure\u0111aj?",4:"Varov\xE1n\xED Restartujte"
,5:"Vil du virkelig genstarte enheden?",0:"Do you really want to restart the device?"
,6:"Weet u zeker dat u het apparaat nieuw wilt starten?",7:"Kas soovite kindlasti seadet taask\xE4ivitada?"
,8:"Haluatko varmasti k\xE4ynnist\xE4\xE4 laitteen uudelleen?",9:"Voulez-vous vraiment r\xE9~ini~tia~li~ser l\u2019appareil\xA0?"
,10:"Wollen Sie das Ger\xE4t wirklich neu starten?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 "+
"\u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE;",12:"Val\xF3ban \xFAjraind\xEDtan\xE1 a k\xE9sz\xFCl\xE9ket?"
,13:"Vuoi davvero riavviare il dispositivo?",15:"Vai tie\u0161\u0101m v\u0113laties restart\u0113t ier\u012Bci?"
,26:"Ar tikrai norite i\u0161 naujo paleisti \u012Frengin\u012F?",16:"Vil du virkelig starte enheten p\xE5 nytt?"
,17:"Czy naprawd\u0119 chcesz zrestartowa\u0107 urz\u0105dzenie?",18:"Voc\xEA realmente quer reiniciar o dispositivo?"
,19:"Dore\u0219ti cu adev\u0103rat s\u0103 reporne\u0219ti dispozitivul?",20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?",27:"Ali res \u017Eelite ponovno zagnati napravo?"
,21:"\xBFRealmente quiere reiniciar el dispositivo?",22:"Vill du verkligen starta om enheten?"
,23:"Yeniden ba\u015Flatma uyar\u0131s\u0131",24:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 "+
"\u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439?"};C.Brm={1:"Da li stvarno \u017Eelite isklju\u010Diti aparat?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0436\u0435\u043B\u0430\u0435\u0442\u0435 "+
"\u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E?"
,3:"\u4F60\u771F\u7684\u60F3\u95DC\u6A5F\u55CE\uFF1F",25:"\u017Delite li doista isklju\u010Diti ure\u0111aj?"
,4:"Varov\xE1n\xED Vypnut\xED",5:"Vil du virkelig slukke enheden?",0:"Do you really want to shutdown the device?"
,6:"Weet u zeker dat u het apparaat wilt uit ztten?",7:"Kas soovite kindlasti seadme v\xE4lja l\xFClitada?"
,8:"Haluatko varmasti sulkea laitteen?",9:"Voulez-vous vraiment \xE9teindre l\u2019appareil\xA0?"
,10:"Wollen Sie das Ger\xE4t wirklich herunterfahren?",11:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03C3\u03B2\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE;"
,12:"Val\xF3ban le szeretn\xE9d \xE1ll\xEDtani az eszk\xF6zt?",13:"Vuoi davvero spegnere il dispositivo?"
,15:"Vai tie\u0161\u0101m v\u0113laties izsl\u0113gt ier\u012Bci?",26:"Ar tikrai norite i\u0161jungti \u012Frengin\u012F?"
,16:"Vil du virkelig sl\xE5 av enheten?",17:"Czy naprawd\u0119 chcesz wy\u0142\u0105czy\u0107 urz\u0105dzenie?"
,18:"Voc\xEA realmente quer desligar o dispositivo?",19:"Dore\u0219ti cu adev\u0103rat s\u0103 opre\u0219ti dispozitivul?"
,20:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?",27:"Ali res \u017Eelite izklopiti napravo?"
,21:"\xBFRealmente quiere apagar el dispositivo?",22:"Vill du verkligen st\xE4nga av enheten?"
,23:"Kapatma uyar\u0131s\u0131",24:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439?"
};C.Brn={1:"Aparat \u0107e se isklju\u010Diti za {1} sekundi!",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0441\u043B\u0435\u0434 {1} \u0441\u0435\u043A\u0443\u043D\u0434\u0438!"
,3:"\u5728{1}\u79D2\u5167\u95DC\u9589\u8A2D\u5099\uFF01",25:"Isklju\u010Divanje ure\u0111aja za {1} sekundi!"
,4:"Vyp\xEDn\xE1n\xED za\u0159\xEDzen\xED za {1} sekund!",5:"Enheden lukker ned om {1} sekunder!"
,0:"Shutting down device in {1} seconds!",6:"Apparaat word in {1} seconden uitgeschakelt!"
,7:"Seade l\xFClitatakse v\xE4lja {1} sekundi p\xE4rast!",8:"Laite sammutetaan {1} sekunnissa!"
,9:"Arr\xEAt de l\u2019appareil en\n{1} secondes\xA0!",10:"Ger\xE4t wird in {1} Sekunden heruntergefahren!"
,11:"\u03A4\u03B5\u03C1\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03C3\u03B5 {1} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1!"
,12:"Az eszk\xF6z le\xE1ll {1} m\xE1sodperc m\xFAlva!",13:"Spegnimento del dispositivo tra {1} secondi!"
,15:"Ier\u012Bce tiks izsl\u0113gta p\u0113c {1} sekund\u0113m!",26:"\u012Erenginys bus i\u0161jungtas po {1} sekund\u017Ei\u0173!"
,16:"Sl\xE5r av enheten om {1} sekunder!",17:"Wy\u0142\u0105czanie urz\u0105dzenia za {1} sekund!"
,18:"Desligando o dispositivo em {1} segundos!",19:"Oprirea dispozitivului \xEEn {1} secunde!"
,20:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F "+
"\u0447\u0435\u0440\u0435\u0437 {1} \u0441\u0435\u043A\u0443\u043D\u0434!",27:"Izklop naprave \u010Dez {1} sekund!"
,21:"\xA1El dispositivo se apagar\xE1 dentro de {1} segundos!",22:"St\xE4nger av enheten om {1} sekunder!"
,23:"Cihaz {1} saniye i\xE7inde kapat\u0131l\u0131yor!",24:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F "+
"\u0447\u0435\u0440\u0435\u0437 {1} \u0441\u0435\u043A\u0443\u043D\u0434!"};C.Bro={
3:"\u672A\u77E5\u8033\u6A19\uFF01\n\n\u6383\u63CF\u5230\u7684\u8033\u6A19\u865F\u78BC\u5728\u52D5\u7269\u540D\u55AE\u4E2D\u627E\u4E0D\u5230\uFF01"
,0:"Unknown ear tag!\n\nScanned ear tag number could not be found in animal "+"list!"
,10:"Unbekannte Ohrmarke!\nDie eingelesene Ohrmarken~nummer wurde nicht in "+"der Tierliste gefunden!"
};C.WarningWeightEvaluationPlural={1:"Oprez:\nOva procjena uklju\u010Duje vrijednosti o te\u017Eini goveda, ali "+
"su uklju\u010Dene i vrijednosti o te\u017Eini krava.",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u0422\u0430\u0437\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0430 \u0437\u0430 \u0446\u0435\u043B "+
"\u0434\u0430 \u043E\u0446\u0435\u043D\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u0436\u0430 \u043D\u0430 \u0442\u0435\u043B\u0435\u0442\u0430. "+
"\u0418\u0437\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435\u0442\u043E "+"\u043E\u0431\u0430\u0447\u0435 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "+
"\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438\u0442\u0435 "+"\u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E \u043D\u0430 {1} "+
"\u043A\u0440\u0430\u0432\u0438!",3:"\u6CE8\u610F\uFF01\n\u6B64\u8A55\u4F30\u65E8\u5728\u8A55\u4F30\u5C0F\u725B\u7684\u751F\u9577\u767C\u5C55\u3002\u7136\u800C\uFF0C\u8A08\u7B97\u4E2D\u4E5F\u5305\u62EC\u4E86 "+
"{1} \u982D\u725B\u7684\u9AD4\u91CD\u503C\uFF01",25:"Pozor!\nOva procjena namijenjena je za procjenu rasta teladi. Me\u0111utim, "+
"u izra\u010Dun su uklju\u010Dene i te\u017Eine {1} krava!",4:"Pozor!\nToto hodnocen\xED je ur\u010Deno k posouzen\xED r\u016Fstov\xE9ho "+
"v\xFDvoje telat. Nicm\xE9n\u011B, v\xFDpo\u010Det zahrnoval tak\xE9 hmotnostn\xED "+
"hodnoty {1} krav!",5:"Opm\xE6rksomhed!\nDenne evaluering er beregnet til at vurdere v\xE6kstudviklingen "+
"af kalve. Beregningen inkluderede dog ogs\xE5 v\xE6gtv\xE6rdierne fra {1} "+"k\xF8er!"
,0:"Attention!\nThis evaluation is meant to assess growth develop~ment of calves. "+
"However, calcu~lation included weight values of {1} cows, too!",6:"Let op!\nDeze evaluatie is bedoeld om de groei van kalveren te beoordelen. "+
"Echter, bij de berekening zijn ook de gewichtswaarden van {1} koeien meegenomen!"
,7:"T\xE4helepanu!\nSee hindamine on m\xF5eldud vasikate kasvuarengu hindamiseks, "+
"kuid arvutused h\xF5lmasid ka {1} lehma kaaluv\xE4\xE4rtusi!",8:"Huomio!\nT\xE4m\xE4n arvioinnin tarkoituksena on arvioida va~si~koi~den "+
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
"{1} tehenek s\xFAly\xE9rt\xE9ke is!",13:"Attenzione!\nQuesta valutazione \xE8 destinata a valutare lo sviluppo "+
"della crescita dei vitelli. Tuttavia, nel calcolo sono stati inclusi anche "+"i valori del peso di {1} mucche!"
,15:"Uzman\u012Bbu!\n\u0160is nov\u0113rt\u0113jums ir paredz\u0113ts, lai "+"nov\u0113rt\u0113tu te\u013Cu izaugsmes att\u012Bst\u012Bbu. Tom\u0113r "+
"apr\u0113\u0137inos tika iek\u013Cautas ar\u012B {1} govs svara v\u0113rt\u012Bbas!"
,26:"D\u0117mesio!\n\u0160is vertinimas skirtas \u012Fvertinti ver\u0161i\u0173 "+
"augimo vystym\u0105si. Ta\u010Diau, skai\u010Diavime buvo \u012Ftrauktos "+"ir {1} karvi\u0173 svorio reik\u0161m\u0117s!"
,16:"OBS!\nDenne evalueringen er ment \xE5 vurdere vekstutvikling av kalver. "+"Beregningen inkluderer imidlertid vektverdier for {1}\xA0kyr ogs\xE5!"
,17:"Uwaga!\nTa ocena ma na celu ocen\u0119 wzrostu ciel\u0105t. Jednak w obliczeniach "+
"uwzgl\u0119dniono r\xF3wnie\u017C wag\u0119 {1} kr\xF3w!",18:"Aten\xE7\xE3o!\nEsta avalia\xE7\xE3o destina-se a avaliar o desenvolvimento "+
"de crescimento dos bezerros. No entanto, o c\xE1lculo incluiu tamb\xE9m "+"os valores de peso de {1} vacas!"
,19:"Aten\u021Bie!\nAceast\u0103 evaluare este destinat\u0103 s\u0103 aprecieze "+
"dezvoltarea cre\u0219terii vi\u021Beilor. Totu\u0219i, calculul a inclus "+"\u0219i valorile greut\u0103\u021Bii a {1} vaci!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u042D\u0442\u0430 "+"\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430 "+"\u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F {1}\xA0\u043A\u043E\u0440\u043E\u0432 "+
"\u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B!"
,27:"Pozor!\nTo ocenjevanje je namenjeno oceni rasti telet. Vendar so v izra\u010Dun "+
"vklju\u010Dene tudi te\u017Enostne vrednosti {1} krav!",21:"Atenci\xF3n:\nEsta evaluaci\xF3n est\xE1 destinada a evaluar el desarrollo "+
"del crecimiento de los terneros. Sin embargo, el c\xE1lculo incluy\xF3 "+"los valores de peso de {1} vacas tambi\xE9n."
,22:"Uppm\xE4rksamhet!\nDenna utv\xE4rdering \xE4r avsedd att bed\xF6ma tillv\xE4xtutvecklingen "+
"hos kalvar. Dock inkluderades viktv\xE4rden fr\xE5n {1} kor ocks\xE5!",23:"Dikkat!\nBu de\u011Ferlendirme buza\u011F\u0131lar\u0131n b\xFCy\xFCme "+
"geli\u015Fimini de\u011Ferlendirmek i\xE7indir. Ancak hesaplamaya {1} "+"ine\u011Fin a\u011F\u0131rl\u0131k de\u011Ferleri de dahil edildi!"
,24:"\u0423\u0432\u0430\u0433\u0430!\n\u0426\u044F \u043E\u0446\u0456\u043D\u043A\u0430 "+
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
"\u043A\u0440\u0430\u0432\u0430 (\u2116 {1})!",3:"\u6CE8\u610F\uFF01\n\u9019\u9805\u8A55\u4F30\u65E8\u5728\u8A55\u4F30\u5C0F\u725B\u7684\u751F\u9577\u767C\u5C55\u3002\u7136\u800C\uFF0C\u8A08\u7B97\u4E2D\u4E5F\u5305\u62EC\u4E86\u4E00\u982D\u725B\uFF08\u7DE8\u865F{1}\uFF09\u7684\u91CD\u91CF\u503C\uFF01"
,25:"Pozor!\nOva procjena namijenjena je za ocjenjivanje rasta teladi. Me\u0111utim, "+
"u izra\u010Dun je uklju\u010Dena i te\u017Eina jedne krave (broj {1})!",4:"Pozor!\nToto hodnocen\xED m\xE1 za \xFAkol posoudit r\u016Fstov\xFD v\xFDvoj "+
"telat. Av\u0161ak byla zahrnuta i hmotnost jedn\xE9 kr\xE1vy (\u010D. {1})!",5:
"Opm\xE6rksomhed!\nDenne evaluering er beregnet til at vurdere v\xE6kstudviklingen "+
"af kalve. Dog inkluderede beregningen ogs\xE5 v\xE6gtv\xE6rdien af en ko "+"(nr. {1})!"
,0:"Attention!\nThis evaluation is meant to assess growth develop~ment of calves. "+
"However, calcu~lation included the weight value of one cow (\u2116 {1}), "+"too!"
,6:"Let op! Deze evaluatie is bedoeld om de groei-ontwikkeling van kalveren "+"te beoordelen. Echter, de berekening omvatte ook het gewicht van \xE9\xE9n "+
"koe (nr. {1})!",7:"T\xE4helepanu!\nSee hindamine on m\xF5eldud vasikate kasvuarengu hindamiseks, "+
"kuid arvutused h\xF5lmasid ka lehma (\u2116 {1}) kaaluv\xE4\xE4rtust!",8:"Huomio!\nT\xE4m\xE4n arvioinnin tarkoituksena on arvioida vasikoiden kasvun "+
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
,13:"Attenzione!\nQuesta valutazione \xE8 destinata a valutare lo sviluppo "+"della crescita dei vitelli. Tuttavia, nel calcolo \xE8 stato incluso anche "+
"il peso di una mucca (\u2116 {1})!",15:"Uzman\u012Bbu!\n\u0160is nov\u0113rt\u0113jums ir paredz\u0113ts, lai "+
"nov\u0113rt\u0113tu te\u013Cu izaugsmes att\u012Bst\u012Bbu. Tom\u0113r "+"apr\u0113\u0137in\u0101 tika iek\u013Cauta ar\u012B vienas govs (Nr. 1) "+
"svars!",26:"D\u0117mesio!\n\u0160is \u012Fvertinimas skirtas ver\u0161i\u0173 augimo "+
"vystymuisi \u012Fvertinti. Ta\u010Diau buvo \u012Ftraukta ir vienos karv\u0117s "+
"(Nr. {1}) svorio reik\u0161m\u0117!",16:"OBS!\nDenne evalueringen er ment \xE5 vurdere vekstutvikling av kalver. "+
"Beregningen inkluderer imidlertid vektverdien til \xE9n ku (\u2116 {1}), "+"ogs\xE5!"
,17:"Uwaga!\nTa ocena ma na celu ocen\u0119 wzrostu ciel\u0105t. Jednak obliczenia "+
"uwzgl\u0119dniaj\u0105 tak\u017Ce wag\u0119 jednej krowy (nr {1})!",18:"Aten\xE7\xE3o!\nEsta avalia\xE7\xE3o destina-se a avaliar o desenvolvimento "+
"do crescimento de bezerros. No entanto, o c\xE1lculo incluiu tamb\xE9m "+"o valor do peso de uma vaca (\u2116 {1})!"
,19:"Aten\u021Bie!\nAceast\u0103 evaluare are scopul de a asesiza dezvoltarea "+
"\xEEn cre\u0219tere a vi\u021Beilor. Totu\u0219i, calculul a inclus \u0219i "+"valoarea \xEEn greutate a unei vaci (Nr. {1})!"
,20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u042D\u0442\u0430 "+"\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430 "+"\u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u0440\u043E\u0432\u044B "+
"(\u2116 {1}) \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E!"
,27:"Pozor!\nTa ocena je namenjena ocenjevanju razvoja rasti telet. V izra\u010Dun "+
"je bila vklju\u010Dena tudi te\u017Ea ene krave (\u0161t. {1})!",21:"Atenci\xF3n:\nEsta evaluaci\xF3n est\xE1 destinada a evaluar el desarrollo "+
"del crecimiento de los terneros. Sin embargo, el c\xE1lculo incluy\xF3 "+"el valor de peso de una vaca (\u2116 {1}) tambi\xE9n"
,22:"Uppm\xE4rksamhet!\nDenna utv\xE4rdering \xE4r avsedd att bed\xF6ma tillv\xE4xtutvecklingen "+
"hos kalvar. Dock inkluderades viktv\xE4rdet f\xF6r en ko (nummer {1}) "+"ocks\xE5!"
,23:"Dikkat!\nBu de\u011Ferlendirme buza\u011F\u0131lar\u0131n b\xFCy\xFCme "+"geli\u015Fimini de\u011Ferlendirmek i\xE7indir. Ancak hesaplamaya {1} "+
"ine\u011Fin a\u011F\u0131rl\u0131k de\u011Ferleri de dahil edildi!",24:"\u0423\u0432\u0430\u0433\u0430!\n\u0426\u044F \u043E\u0446\u0456\u043D\u043A\u0430 "+
"\u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A "+
"\u0432\u0430\u0433\u0438 \u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043A\u043E\u0440\u043E\u0432\u0438 (\u2116 {1}) \u0442\u0430\u043A\u043E\u0436 "+
"\u0431\u0443\u043B\u043E \u043E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u043E!"
};C.Brp={1:"Pa\u017Enja!\n\nPogre\u0161no pode\u0161eni datum i vrijeme, molimo ponovo "+
"unesite datum i vrijeme!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0413\u0440\u0435\u0448\u043D\u0438 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430 \u0434\u0430\u0442\u0430 "+
"\u0438 \u0447\u0430\u0441, \u043C\u043E\u043B\u044F, \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 "+
"\u043E\u0442\u043D\u043E\u0432\u043E \u0434\u0430\u0442\u0430 \u0438 \u0447\u0430\u0441!"
,3:"\u6CE8\u610F\uFF01\n\n\u65E5\u671F\u548C\u6642\u9593\u8A2D\u5B9A\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165\u65E5\u671F\u548C\u6642\u9593\uFF01"
,25:"Pa\u017Enja!\n\nPogre\u0161ni datum i vrijeme, molimo unesite ponovno "+"datum i vrijeme!"
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
"adja meg \xFAjra a d\xE1tumot \xE9s az id\u0151t!",13:"Attenzione!\n\nImpostazioni di data e ora errate, si prega di reinserire "+
"data e ora!",15:"Uzman\u012Bbu!\n\nNepareizi datuma un laika iestat\u012Bjumi, l\u016Bdzu, "+
"ievadiet datumu un laiku no jauna!",26:"D\u0117mesio!\n\nNeteisingi datos ir laiko nustatymai, pra\u0161ome \u012Fvesti "+
"dat\u0105 ir laik\u0105 i\u0161 naujo!",16:"Oppmerksomhet!\n\nFeil dato- og tidsinnstillinger, vennligst angi dato "+
"og tid p\xE5 nytt!",17:"Uwaga!\n\nB\u0142\u0119dne ustawienia daty i godziny, prosz\u0119 ponownie "+
"wprowadzi\u0107 dat\u0119 i godzin\u0119!",18:"Aten\xE7\xE3o!\n\nConfigura\xE7\xF5es de data e hora incorretas, por favor "+
"reinsira a data e a hora!",19:"Aten\u021Bie!\n\nSet\u0103rile gre\u0219ite pentru dat\u0103 \u0219i or\u0103, "+
"v\u0103 rug\u0103m s\u0103 reintroduce\u021Bi data \u0219i ora!",20:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0430\u0442\u044B "+
"\u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 "+"\u0432\u0440\u0435\u043C\u044F \u0437\u0430\u043D\u043E\u0432\u043E!"
,27:"Pozor!\n\nNapa\u010Dne nastavitve datuma in ure, prosimo, ponovno vnesite "+
"datum in uro!",21:"Atenci\xF3n:\nConfiguraci\xF3n incorrecta de fecha y hora, por favor, "+
"vuelva a ingresar la fecha y la hora.",22:"Observera!\n\nFelaktiga datum- och tidsinst\xE4llningar, v\xE4nligen ange "+
"datum och tid igen!",23:"Dikkat!\n\nTarih ve Saat ayarlar\u0131 yanl\u0131\u015Ft\u0131r. L\xFCtfen "+
"tekrar giriniz.",24:"\u0423\u0432\u0430\u0433\u0430!\n\n\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 "+
"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+"\u0434\u0430\u0442\u0438 \u0442\u0430 \u0447\u0430\u0441\u0443, \u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+"\u0434\u0430\u0442\u0443 \u0442\u0430 \u0447\u0430\u0441 \u0437\u043D\u043E\u0432\u0443!"
};C.AWa={1:"Sedmica",2:"\u0421\u0435\u0434\u043C\u0438\u0446\u0430",3:"\u9031",25:
"Tjedan",4:"t\xFDden",5:"Uge",0:"Week",7:"N\xE4dal",8:"Viikko",9:"Semaine",10:"Woche"
,11:"\u0395\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",12:"H\xE9t",13:"Settimana"
,15:"Ned\u0113\u013Ca",26:"Savait\u0117",16:"Uke",17:"Tydzie\u0144",18:"Semana",
19:"S\u0103pt\u0103m\xE2n\u0103",20:"\u041D\u0435\u0434\u0435\u0301\u043B\u044F"
,27:"Teden",21:"Semana",22:"Vecka",23:"Hafta",24:"\u0422\u0438\u0436\u0434\u0435\u043D\u044C"
};C.BaB={1:"vaganje \u017Eivotinje",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u79E4\u52D5\u7269",25:"Vagati \u017Eivotinju",4:"V\xE1\u017Eit zv\xED\u0159e"
,5:"Vej dyr",0:"Weigh animal",6:"Dier wegen",7:"Looma kaal",8:"Punnitse el\xE4in"
,9:"Peser un animal",10:"Tier wiegen",11:"\u0396\u03C5\u03B3\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF \u03B6\u03CE\u03BF"
,12:"\xC1llatot m\xE9rni",13:"Pesare l\'animale",15:"Sv\u0113rt dz\u012Bvnieku",
26:"Sverti gyv\u016Bn\u0105",16:"Vei dyr",17:"Wa\u017C zwierz\u0119",18:"Pesar animal"
,19:"C\xE2nt\u0103re\u0219te animalul",20:"\u0412\u0437\u0432\u0435\u0441\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,27:"Tehtaj \u017Eival",21:"Pesaje de animal",22:"V\xE4g djur",23:"Tart\u0131m Hayvan\u0131"
,24:"\u0412\u0437\u0432\u0430\u0436\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.Weighing={1:"Vaganje",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435"
,3:"\u79E4\u91CD",25:"Va\u017Eenje",4:"V\xE1\u017Een\xED",5:"Vejer",0:"Weighing"
,6:"Weging",7:"Kaalumine",8:"Punnitus",9:"Peser",10:"Wiegung",11:"\u0396\u03CD\u03B3\u03B9\u03C3\u03B7"
,12:"M\xE9rlegel\xE9s",13:"Pesando",15:"Svar\u012B\u0161ana",26:"Sveriant",16:"Veiing"
,17:"Wa\u017Cenie",18:"Pesando",19:"C\xE2nt\u0103rire",20:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435"
,27:"Tehtanje",21:"Pesaje",22:"V\xE4gning",23:"S\xFCtten kesme",24:"\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.BaC={1:"Dana\u0161nja vaganja",2:"\u0414\u043D\u0435\u0448\u043D\u043E\u0442\u043E \u043F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435"
,3:"\u4ECA\u65E5\u7A31\u91CD",25:"Dana\u0161nje vaganje",4:"Dne\u0161n\xED v\xE1\u017Een\xED"
,5:"Dagens vejning",0:"Today\u2019s weighing",6:"Weging van vandaag",7:"T\xE4nane kaalumine"
,8:"T\xE4m\xE4n p\xE4iv\xE4n punnitus",9:"Pes\xE9e d\'aujourd\'hui",10:"Heutige Wiegung"
,11:"\u03A3\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03B6\u03CD\u03B3\u03B9\u03C3\u03B7"
,12:"A mai m\xE9rlegel\xE9s",13:"La pesatura di oggi",15:"\u0160odienas svars",26:
"\u0160iandienos svarstymas",16:"Dagens veiing",17:"Dzisiejsze wa\u017Cenie",18:
"Pesagem de hoje",19:"C\xE2nt\u0103rirea de ast\u0103zi",20:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0435 \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435"
,27:"Dana\u0161nje tehtanje",21:"Hoy pesaje",22:"Dagens v\xE4gning",23:"Bug\xFCn\xFCn Tart\u0131m\u0131"
,24:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0454 \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.AWc={1:"Vaganja",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F"
,3:"\u7A31\u91CD",25:"Va\u017Eenja",4:"V\xE1\u017Een\xED",5:"V\xE6gninger",0:"Weighings"
,6:"Wegingen",7:"Kaalumised",8:"Punnitukset",9:"Pond\xE9rations",10:"Wiegungen",
11:"\u0396\u03C5\u03B3\u03AF\u03C3\u03B5\u03B9\u03C2",12:"M\xE9r\xE9sek",13:"Pesature"
,15:"Svari",26:"Svarstymai",16:"Veiinger",17:"Wa\u017Cenia",18:"Pesagens",19:"C\xE2nt\u0103riri"
,20:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",27:"Tehtanja"
,21:"Pesajes",22:"V\xE4gningar",23:"Tart\u0131mlar",24:"\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.AfA={1:"te\u017Eina",2:"\u0422\u0435\u0433\u043B\u043E",3:"\u91CD\u91CF",25:
"Te\u017Eina",4:"V\xE1ha",5:"V\xE6gt",0:"Weight",6:"Gewicht",7:"Kaal",8:"Paino",
9:"Poids",10:"Gewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2",12:"S\xFAly",13:"Peso"
,15:"Svars",26:"Svoris",16:"Vekt",17:"Waga",18:"Peso",19:"Greutate",20:"\u0412\u0435\u0441"
,27:"Te\u017Ea",21:"Peso",22:"Vikt",23:"A\u011F\u0131rl\u0131k",24:"\u0412\u0430\u0433\u0430"
};C.BaD={1:"te\u017Eina \u017Eivotinje",2:"\u0422\u0435\u0433\u043B\u043E \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u725B\u96BB\u91CD\u91CF",25:"Te\u017Eina \u017Eivotinje",4:"Hmotnost zv\xED\u0159ete"
,5:"Dyrev\xE6gt",0:"Animal weight",6:"Diergewicht",7:"Looma kaal",8:"El\xE4inten paino"
,9:"Poids d\u2019animal",10:"Tiergewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,12:"\xC1llats\xFAly",13:"Peso dell\'animale",15:"Dz\u012Bvnieka svars",26:"Gyv\u016Bno svoris"
,16:"Dyrevekt",17:"Waga zwierz\u0119cia",18:"Peso do animal",19:"Greutatea animalului"
,20:"\u0412\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",
27:"Te\u017Ea \u017Eivali",21:"Peso del animal",22:"Djurs vikt",23:"Hayvan\u0131n a\u011F\u0131rl\u0131\u011F\u0131"
,24:"\u0412\u0430\u0433\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.Brs={
1:"Te\u017Eina trupa",2:"\u0422\u0440\u0443\u043F\u043D\u043E \u0442\u0435\u0433\u043B\u043E"
,3:"\u9AD4\u91CD\u91CF",25:"Te\u017Eina trupa",4:"Hmotnost uhynul\xE9ho zv\xED\u0159ete"
,5:"Slagtev\xE6gt",0:"Carcass weight",6:"Kadavergewicht",7:"R\xFCmba kaal",8:"Ruhon paino"
,9:"Poids de la carcasse",10:"Kadavergewicht",11:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03BA\u03BF\u03C5\u03C6\u03B1\u03C1\u03B9\u03BF\u03CD"
,12:"V\xE1g\xF3h\xEDdi tests\xFAly",13:"Peso della carcassa",15:"Kaut\u0137erme\u0146a svars"
,26:"Skerdienos svoris",16:"Slaktevekt",17:"Waga tuszy",18:"Peso da carca\xE7a",
19:"Greutatea carcasei",20:"\u0412\u0435\u0441 \u0442\u0443\u0448\u043A\u0438",27:
"Te\u017Ea trupa",21:"Peso del cad\xE1ver",22:"Slaktvikt",23:"Karkas A\u011F\u0131rl\u0131k"
,24:"\u0412\u0430\u0433\u0430 \u0442\u0443\u0448\u043A\u0438"};C.AHv={1:"Te\u017Einska klasa"
,2:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u0430 \u0442\u0435\u0433\u043B\u043E"
,3:"\u9AD4\u91CD\u7D1A",25:"Kategorija te\u017Eine",4:"V\xE1hov\xE1 kategorie",5:
"V\xE6gtklasse",0:"Weight class",6:"Gewichtsklasse",7:"Kaaluklass",8:"Painoluokka"
,9:"Cat\xE9gorie de poids",10:"Gewichtsklasse",11:"\u039A\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlycsoport",13:"Classe di peso",15:"Svara kategorija",26:"Svorio kategorija"
,16:"Vektklasse",17:"Kategoria wagowa",18:"Classe de peso",19:"Categorie de greutate"
,20:"\u0412\u0435\u0441\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"
,27:"Te\u017Enostni razred",21:"Clase de peso",22:"Viktklass",23:"A\u011Firlik s\u0131n\u0131f\u0131"
,24:"\u0412\u0430\u0433\u043E\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F"
};C.AWd={1:"izlazna te\u017Eina",2:"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E"
,3:"\u91CD\u91CF\u8A3B\u92B7",25:"Deregistracija te\u017Eine",4:"Zru\u0161en\xED registrace hmotnosti"
,5:"V\xE6gt afregistrering",0:"Weight deregistration",6:"Gewicht deregistraatie"
,7:"Kaalu registreerimise t\xFChistamine",8:"Painon poistaminen rekister\xF6innist\xE4"
,9:"Poids \xE0 la radiation",10:"Ausstallgewicht",11:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlyt\xF6rl\xE9s",13:"Deregistrazione del peso",15:"Svara atre\u0123istr\u0101cija"
,26:"Svorio atregistravimas",16:"Vekt avregistrering",17:"Odrejestrowanie wagi",
18:"Desregisto de peso",19:"Deregistrare greutate",20:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0441\u043D\u044F\u0442\u0438\u0438 "+
"\u0441 \u0443\u0447\u0451\u0442\u0430",27:"Odjava te\u017Ee",21:"Peso al anular el registro"
,22:"Viktavregistrering",23:"A\u011F\u0131rl\u0131k iptali",24:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u0437\u043D\u044F\u0442\u0442\u0456 "+
"\u0437 \u043E\u0431\u043B\u0456\u043A\u0443"};C.BaF={1:"rast te\u017Eine",2:"\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E"
,3:"\u9AD4\u91CD\u767C\u5C55",25:"Razvoj te\u017Eine",4:"V\xFDvoj hmotnosti",5:"V\xE6gtudvikling"
,0:"Weight development",6:"gewichtsontwikkeling",7:"Kaalu suurenemine",8:"Painon kehitys"
,9:"D\xE9veloppement du poids",10:"Gewichts~entwicklung",11:"\u0395\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlyfejl\u0151d\xE9s",13:"Sviluppo del peso",15:"Svara att\u012Bst\u012Bba"
,26:"Svorio raida",16:"Vektutvikling",17:"Rozw\xF3j wagi",18:"Desenvolvimento do peso"
,19:"Dezvoltarea greut\u0103\u021Bii",20:"\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430"
,27:"Razvoj te\u017Ee",21:"Desarrollo de peso",22:"Viktutveckling",23:"A\u011F\u0131rl\u0131k geli\u015Fimi"
,24:"\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0432\u0430\u0433\u0438"};
C.AHw={1:"prirast",2:"\u041F\u0440\u0438\u0440\u0430\u0441\u0442",3:"\u589E\u91CD"
,25:"Debljanje",4:"P\u0159\xEDr\u016Fstek",5:"V\xE6gt\xF8gning",0:"Weight gain",
6:"Toename",7:"Kaaluiive",8:"Painonnousu",9:"Croissance",10:"Zunahme",11:"\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"H\xEDz\xE1s",13:"Aumento di peso",15:"Svara pieaugums",26:"Svorio padid\u0117jimas"
,16:"Vekt\xF8kning",17:"Przybieranie na wadze",18:"Ganho de peso",19:"Cre\u0219tere \xEEn greutate"
,20:"\u041F\u0440\u0438\u0432\u0435\u0441",27:"Pridobivanje te\u017Ee",21:"Ganancia"
,22:"Vikt\xF6kning",23:"A\u011F\u0131rl\u0131k art\u0131\u015F\u0131",24:"\u041F\u0440\u0438\u0440\u0456\u0441\u0442"
};C.BaH={1:"registrovane te\u017Eine",2:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u0433\u043B\u043E"
,3:"\u8A18\u9304\u7684\u9AD4\u91CD",25:"Zabilje\u017Eena te\u017Eina (te\u017Eine)"
,4:"Zaznamenan\xE1 hmotnost",5:"Registreret v\xE6gt (singular)\nRegistrerede v\xE6gte (plural)"
,0:"Recorded weight(s)",6:"Opgenomen gewicht",7:"Registreeritud kaal(ud)",8:"Tallennetut painot"
,9:"Poids enregistr\xE9(s)",10:"Erfasste Gewicht(e)",11:"\u039A\u03B1\u03C4\u03B1\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF "+
"\u03B2\u03AC\u03C1\u03BF\u03C2(\u0392\u03AC\u03C1\u03B7)",12:"Feljegyzett s\xFAly(ok)"
,13:"Peso(i) registrato(i)",15:"Ierakst\u012Btais svars",26:"\u012Era\u0161ytas (-i) svoris (-iai)"
,16:"Registrerte vekt(er)",17:"Zarejestrowana/e waga/wagi",18:"Peso(s) registrado(s)"
,19:"Greut\u0103\u021Bi \xEEnregistrate",20:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0432\u0435\u0441/\u0432\u0435\u0441\u0430",27:"Zabele\u017Eena te\u017Ea (te\u017Ee)"
,21:"Peso(s) registrado(s)",22:"Inskrivna vikt(er)",23:"Kay\u0131tl\u0131 a\u011F\u0131rl\u0131klar"
,24:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u0432\u0430\u0433\u0430"};C.As3={1:"registrovane te\u017Eine",2:"\u0417\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E"
,3:"\u91CD\u91CF\u7D00\u9304",25:"Evidencija te\u017Eine",4:"Zaznamen\xE1n\xED v\xE1hy"
,5:"V\xE6gtregistrering",0:"Weight recording",6:"Gewichts bepaling",7:"Kaalu registreerimine"
,8:"Painon tallennus",9:"Enregistrement du poids",10:"Gewichtserfassung",11:"\u039A\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,12:"S\xFAlyfeljegyz\xE9s",13:"Registrazione del peso",15:"Svara ierakst\u012B\u0161ana"
,26:"Svorio u\u017Era\u0161ymas",16:"Vektregistrering",17:"Rejestracja wagi",18:
"Registro de peso",19:"\xCEnregistrarea greut\u0103\u021Bii",20:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",27:"Zapisovanje te\u017Ee"
,21:"Registro de peso",22:"Viktregistrering",23:"A\u011F\u0131rl\u0131k kayd\u0131"
,24:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443 "+
"\u0432\u0437\u0432\u0430\u0436\u0435\u043D\u043D\u044F"};C.Jm={1:"Ostatak",2:"\u041C\u0435\u0441\u0442\u043E\u043D\u0430\u0445\u043E~\u0436\u0434\u0435\u043D\u0438\u0435"
,3:"\u4E0B\u843D",25:"gdje se nalazi",4:"kde p\u0159esn\u011B",5:"Omgivelser",0:
"Whereabouts",6:"verblijfplaats",7:"Asukohad",8:"Olinpaikka",9:"Lieu de s\xE9jour"
,10:"Verbleib",11:"\u03A0\u03BF\u03CD \u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5"
,12:"hol, holl\xE9t",13:"Dove",15:"Atra\u0161an\u0101s vieta",26:"Apie kurias vietas"
,16:"Oppholdssted",17:"gdzie\u015B",18:"Ondeabouts",19:"Unde, \xEEn ce zon\u0103"
,20:"\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E~\u0436\u0435\u043D\u0438\u0435"
,27:"Kje to\u010Dno",21:"Desarrollo de peso",22:"Var trakter",23:"Neresinden",24:
"\u041C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.BaI={1:"LED bijela",2:"LED \u0411\u044F\u043B",3:"LED \u767D\u5149",25:"LED bijela"
,4:"LED b\xEDl\xE1",5:"LED hvid",0:"LED white",6:"LED wit",7:"LED valge",8:"LED valkoinen"
,9:"DEL blanche",10:"LED wei\xDF",11:"LED \u03BB\u03B5\u03C5\u03BA\u03CC",12:"LED feh\xE9r"
,13:"LED bianco",15:"LED balts",26:"LED balta",16:"LED hvit",17:"LED bia\u0142y"
,18:"LED branco",19:"LED alb",20:"\u0411\u0435\u043B\u044B\u0439 LED",27:"LED bela"
,21:"LED blanco",22:"LED vit",23:"Beyaz LED",24:"\u0411\u0456\u043B\u0438\u0439 LED"
};C.Year={1:"godina",2:"\u0413\u043E\u0434\u0438\u043D\u0430",3:"\u5E74",25:"Godina"
,4:"rok",5:"\xC5r",0:"Year",6:"Jaar",7:"Aasta",8:"Vuosi",9:"Ann\xE9e",10:"Jahr",
11:"\u0388\u03C4\u03BF\u03C2",12:"\xC9v",13:"Anno",15:"Gads",26:"Metai",16:"\xC5r"
,17:"Rok",18:"Ano",19:"An",20:"\u0413\u043E\u0434",27:"Leto",21:"A\xF1o",22:"\xC5r"
,23:"Y\u0131l",24:"\u0420\u0456\u043A"};C.BaJ={2:"\u0413\u0413/\u041C\u041C",3:"\u5E74/\u6708"
,25:"gg/mm",4:"rok/m\u011Bs\xEDc",5:"\xE5r/m\xE5ned",0:"yy/mm",6:"JJ/MM",7:"aa/kk"
,8:"vv/kk",9:"AA/MM",10:"JJ/MM",11:"\u03B5\u03B5/\u03BC\u03BC",12:"\xE9v/h\xF3nap"
,13:"aa/mm",15:"gg/mm",26:"metai/m\u0117nuo",16:"\xE5r/mnd",17:"rok/miesi\u0105c"
,18:"aa/mm",19:"an/lun\u0103",20:"\u0413\u0413/\u041C\u041C",27:"leto/mesec",21:
"aa/mm",22:"\xE5r/m\xE5nad",23:"YY/AA",24:"\u0420\u0420/\u041C\u041C"};C.BaK={2:
"\u0413\u0413/\u041C\u041C/\u0414\u0414",3:"\u5E74/\u6708/\u65E5",25:"gg/mm/dd",
4:"rr/mm/dd",5:"\xE5\xE5/mm/dd",0:"yy/mm/dd",6:"JJ/MM/DD",7:"aa/kk/pp",8:"vv/kk/pv"
,9:"AA/MM/JJ",10:"JJ/MM/TT",11:"\u03B5\u03B5/\u03BC\u03BC/\u03B7\u03B7",12:"\xE9\xE9/hh/nn"
,13:"aa/mm/gg",15:"gg/mm/ddd",26:"metai/m\u0117nuo/diena",16:"\xE5r/mnd/dag",17:
"rr/mm/dd",18:"aa/mm/dd",19:"aa/ll/zz",20:"\u0413\u0413/\u041C\u041C/\u0414\u0414"
,27:"ll/mm/dd",21:"aa/mm/dd",22:"\xE5\xE5/mm/dd",23:"YY/AA/GG",24:"\u0420\u0420/\u041C\u041C/\u0414\u0414"
};C.Yes={1:"da",2:"\u0414\u0430",3:"\u662F\u7684",25:"Da",4:"Ano",5:"Ja",0:"Yes"
,6:"Ja",7:"Jah",8:"Kyll\xE4",9:"Oui",10:"Ja",11:"\u039D\u03B1\u03B9",12:"Igen",13:
"S\xEC",15:"J\u0101",26:"Taip",16:"Ja",17:"Tak",18:"Sim",19:"Da",20:"\u0414\u0430"
,27:"Da",21:"S\xED",22:"Ja",23:"Evet",24:"\u0422\u0430\u043A"};C.AiH={3:"\u514B"
,0:"g",11:"\u03B3",20:"\u0433",24:"\u0491"};C.AAo={2:"\u043A\u0433",3:"\u516C\u65A4"
,0:"kg",6:"Kg",11:"\u039A\u03B9\u03BB\u03AC",20:"\u043A\u0433",24:"\u043A\u0433"
};C.Aga={2:"\u041B\u0438\u0442\u044A\u0440",3:"\u516C\u5347",4:"Litr",0:"l",7:"L"
,11:"\u0399",20:"\u043B",23:"I",24:"\u043B"};
C._Init=function(){};C._ReInit=function(){};C.DI=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */