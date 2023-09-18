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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abg)throw new Error("The unit file 'Strings.js' included twice!");index.
abg=(function(){var A=index;var C={};

C.Bda={0:"AD Converter Temperature",6:"AD-muunduri temperatuur",7:"AD Muuntimen L"
,8:"AD Convertisseur de temp\xE9rature",9:"AD Wandler Temperatur",15:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E-^\u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E "+
"\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E~\u0432\u0430\u0442\u0435\u043B\u044F"
,18:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u043E-\u0446\u0438\u0444\u043E\u0440\u0432\u043E\u0433\u043E "+
"\u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0447\u0430"
};C.Bdb={0:"(\xD8 {1} {2})",13:"Snitt daglig tilvekst"};C.AJP={1:"prosje\u010Dan prirast, \xD8\nod ro\u0111enja"
,2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u0440\u0430\u0436\u0434\u0430\u043D\u0435",3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u5F9E\u51FA\u751F\u6642"
,4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od narozen\xED",0:"Daily weight gain, \xD8\nsince birth"
,5:"Dagelijkse toename, \xD8\nsinds geboorte",6:"P\xE4evane juurdekasv s\xFCnnist"
,7:"P\xE4ivitt\xE4inen pai~non~nousu, \xD8 syn~ty~m\xE4st\xE4 l\xE4htien",8:"Gain de poids quo~ti~dienne, \xD8 depuis la naissance"
,9:"Mittlere t\xE4gliche\nZunahme seit Geburt",10:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7",13:"Snitt daglig tilvekst fra f\xF8dsel"
,15:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441 \u0441 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,16:"Ganancia diaria, \xD8\ndesde el nacimiento",18:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442 \u0437 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bdc={1:"prosje\u010Dan prirast, \xD8\nod prvog vaganja",2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u043F\u044A\u0440\u0432\u043E\u0442\u043E \u0442\u0435\u0433\u043B\u0435\u043D\u0435"
,3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u81EA\u9996\u6B21\u7A31\u91CD\u4EE5\u4F86"
,4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od prvn\xEDho v\xE1\u017Een\xED",
0:"Daily weight gain, \xD8\nsince first weighing",5:"Dagelijkse toename, \xD8\nsinds eerste weging"
,6:"P\xE4evane juurdekasv alates esimesest kaalumisest",7:"P\xE4ivitt\xE4inen pai~non~nousu, \xD8 ensimm\xE4isen punnituksen j\xE4lkeen"
,8:"Gain de poids quo~ti~dienne, \xD8 puis la premi\xE8re pes\xE9e",9:"T\xE4gliche Zunahme, \xD8\nseit erster Wiegung"
,10:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03B1\u03C0\u03BF\u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03B9\u03C3\u03BC\u03CC"
,13:"Snitt daglig tilvekst fra f\xF8rste veiing",15:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441, \xD8\n\u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",16:"Ganancia diaria, \xD8\ndesde el primer pesaje"
,18:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442, \xD8\n\u0437 \u043F\u0435\u0440\u0448\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"};C.As_={1:"prosje\u010Dan prirast, \xD8\nod zadnjeg vaganja"
,2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442, "+
"\xD8\n\u043E\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E "+
"\u0442\u0435\u0433\u043B\u0435\u043D\u0435",3:"\u6BCF\u65E5\u589E\u91CD\uFF0C\xD8\n\u81EA\u4E0A\u4E00\u6B21\u7A31\u91CD\u4EE5\u4F86"
,4:"Pr\u016Fm. denn\xED p\u0159\xEDr\u016Fstek od posledn\xEDho v\xE1\u017Een\xED"
,0:"Daily weight gain, \xD8\nsince last weighing",5:"Dagelijkse toename, \xD8\nsinds laatste weging"
,6:"P\xE4evane juurdekasv alates viimasest kaalumisest",7:"P\xE4ivitt\xE4inen painonnousu, \xD8\nviimeisen punnituksen j\xE4lkeen"
,8:"Gain de poids quo~ti~dienne, \xD8 puis la der~ni\xE8re pes\xE9e",9:"Mittl. t\xE4gl. Zunahme\nseit letzter Wiegung"
,10:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2\u03B1\u03C0\u03CC "+
"\u03C4\u03BF \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03B1\u03C0\u03BF\u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03B9\u03C3\u03BC\u03CC"
,13:"Snitt daglig tilvekst fra siste veiing",15:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441\n\u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",16:"Ganancia diaria, \xD8\ndesde el \xFAltimo pesaje"
,18:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442\n\u0437 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0433\u043E "+
"\u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"};C.A1U={0:"Uncalculable for weighing\non the same day"
,6:"P\xE4evast juurdekasvu ei saa arvutada",8:"Non calculable pour les pes\xE9es du m\xEAme jour "
,9:"Nicht berechenbar bei\nWiegung am selben Tag",15:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C "+
"\u0434\u043B\u044F \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F "+
"\u0432 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0435\u043D\u044C",18:"\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u043B\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0432 \u0442\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u0434\u0435\u043D\u044C"
};C.AJQ={0:"d",6:"P\xE4ev",7:"pv",8:"J",9:"T",10:"\u03B7",13:"D",15:"\u0434",18:
"\u0434"};C.Bde={0:"m",6:"Kuu",7:"kk",8:"M",9:"M",10:"\u03BC",13:"M",15:"\u043C"
,18:"\u043C"};C.Bdf={1:"god",0:"y",6:"Aasta",7:"v",8:"A",9:"J",10:"\u03B5",13:"\xC5"
,15:"\u0433",18:"\u0440"};C.About={1:"o",2:"\u041E\u0442\u043D\u043E\u0441\u043D\u043E"
,3:"\u95DC\u65BC",4:"O",0:"About",5:"Over",6:"Meist",7:"Lis\xE4tieto",8:"\xC0 propos de"
,9:"\xDCber",10:"\u03A3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC",13:"Om",15:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,16:"M\xE1s",17:"Bilgi",18:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"
};C.O7={0:"Chain of actions",8:"Cha\xEEne d\'actions",9:"Aktions~kette"};C.ActionList={
1:"lista aktivnosti",2:"\u0421\u043F\u0438\u0441\u044A\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5\u6E05\u55AE",4:"Seznam akc\xED",0:"Action list",5:"Actielijst",
6:"Tegevuste loend",7:"Toimintalista",8:"Liste d\u2019action",9:"Aktionsliste",10:
"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,13:"Aksjons liste",15:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,16:"Lista de acci\xF3n",18:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0456\u0439"
};C.Aio={1:"Meni svih aktivnosti",2:"\u041C\u0435\u043D\u044E \u0441 \u0432\u0441\u0438\u0447\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u5168\u529F\u80FD\u9078\u55AE",4:"Nab\xEDdka",0:"Full action menu",5:"Actiemenu"
,6:"Tegevuste men\xFC\xFC",7:"Toimintavalikko",8:"Menu d\u2019actions",9:"Aktionsmen\xFC"
,10:"\u039C\u03B5\u03BD\u03BF\u03CD \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,13:"Full aksjons meny",15:"\u041C\u0435\u043D\u044E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,16:"Men\xFA acciones",18:"\u041F\u043E\u0432\u043D\u0435 \u043C\u0435\u043D\u044E \u0434\u0456\u0439"
};C.Aip={1:"Aktivnost {1}",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 {1}"
,4:"Akce {1}",0:"Action {1}",5:"Actie {1}",6:"Tegevus {1}",7:"Toiminto {1}",9:"Aktion {1}"
,10:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 {1}",16:"Acci\xF3n {1}",17:
"Eylem {1}"};C.AcR={1:"Aktivnost OK",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u044A\u0440\u0445\u0443 "+
"\u041E\u041A",3:"OK\u5C31\u53EF\u884C\u52D5",4:"OK",0:"Action on OK",5:"Actie bij OK"
,6:"Alusta OK",7:"Toiminta OK",8:"Action sur OK",9:"Aktion bei OK",10:"\u0388\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \u039F\u039A"
,13:"Aksjon p\xE5 OK",15:"\u0414\u0435\u0439\u0441\u0432\u0438\u0435 \u043F\u0440\u0438 \u041E\u041A"
,16:"Acci\xF3n en OK",18:"\u0414\u0456\u044F \u043F\u0440\u0438 \u041E\u041A"};C.
ActionSettings={1:"Pode\u0161avanje aktivnosti",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5\u8A2D\u5B9A\u503C",4:"Nastaven\xED",0:"Action settings",5:"Instellingen acties"
,6:"Tegevuste seaded",7:"Toiminta-asetukset",8:"R\xE9glages d\u2019actions",9:"Einstellungen Aktionen"
,10:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,13:"Aksjon innstillinger",15:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"
,16:"Ajustes acciones",17:"Eylem ayarlar\u0131",18:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0434\u0456\u0439"};C.SW={1:"Aktivnosti",2:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,3:"\u884C\u52D5",4:"Akce",0:"Actions",5:"Acties",6:"Tegevused",7:"Toiminnat",8:
"Action",9:"Aktionen",10:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2"
,13:"Aksjoner",15:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",16:"Acciones"
,17:"Eylemler",18:"\u0414\u0456\u0457"};C.A15={0:"Add to watch list",9:"Zur Beobachtungsliste hinzuf\xFCgen"
};C.SY={1:"starost",2:"\u0412\u044A\u0437\u0440\u0430\u0441\u0442",3:"\u5E74\u9F61"
,4:"V\u011Bk",0:"Age",5:"Leef~tijd",6:"Vanus",7:"Ik\xE4",8:"\xC2ge",9:"Alter",10:
"\u0397\u03BB\u03B9\u03BA\u03AF\u03B1",13:"Alder",15:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442"
,16:"Edad",18:"\u0412\u0456\u043A"};C.Aiu={1:"starost prilikom registracije",2:"\u0412\u044A\u0437\u0440\u0430\u0441\u0442 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
,3:"\u767B\u9304\u6642\u5E74\u9F61",4:"V\u011Bk p\u0159i registraci",0:"Age at registration"
,5:"Leeftijd bij registratie",6:"Vanus sisestamisel",7:"Ik\xE4 rekister\xF6innin yhteydess\xE4"
,8:"L\u2019\xE2ge \xE0 la cr\xE9ation",9:"Alter beim Anlegen",10:"\u0397\u03BB\u03B9\u03BA\u03AF\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE\u03C2"
,13:"Alder ved registrering",15:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"
,16:"Edad al registrar",18:"\u0412\u0456\u043A \u043F\u0440\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457"
};C.Alarm={2:"\u0410\u043B\u0430\u0440\u043C\u0430",3:"\u8B66\u5831",0:"Alarm",6:
"Hoiatus",7:"H\xE4lytys",8:"Alarme",10:"\u03A3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CC\u03C2"
,15:"\u0421\u0438\u0433\u043D\u0430\u043B",16:"Alarma",18:"\u0421\u0438\u0433\u043D\u0430\u043B"
};C.Bdj={1:"podaci sa svih ure\u0111aja",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E",0:"All device data"
,6:"Kogu seadme info",7:"Kaikki laitteen tiedot",8:"Toutes les donn\xE9es de l\u2019appareil"
,9:"Alle Ger\xE4tedaten",10:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2",13:"Alle enhetsdata",15:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u0430"
,18:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.Bdk={1:"ve\u0107 povezani",2:"\u0412\u0435\u0447\u0435 \u0435 \u043F\u0440\u0438\u0431\u0430\u0432\u0435\u043D"
,0:"Already assigned",6:"Juba m\xE4\xE4ratud",7:"Jo m\xE4\xE4ritetty",8:"D\xE9j\xE0 attribu\xE9"
,9:"Bereits verkn\xFCpft",10:"\u0389\u03B4\u03B7 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF"
,13:"Allerede tildelt",15:"\u0423\u0436\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u044B"
,18:"\u0412\u0436\u0435 \u0437\u0432\'\u044F\u0437\u0430\u043D\u0456"};C.Animal={
1:"\u017Eivotinja",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E",3:"\u5C0F\u725B"
,4:"Zv\xED\u0159e",0:"Animal",5:"Dier",6:"Loom",7:"El\xE4in",9:"Einzeltier",10:"\u0396\u03CE\u03BF"
,13:"Dyr",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435",16:"Animal individual"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430"};C.AcU={1:"podaci o \u017Eivotinji"
,2:"\u0414\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u8CC7\u6599",4:"Data o zv\xED\u0159eti",0:"Animal data",5:"Dier data"
,6:"Looma info",7:"Tietoa el\xE4imist\xE4",8:"Donn\xE9es de l\u2019animal",9:"Tierdaten"
,10:"\u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF\u03C5",
13:"Dyr- data",15:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"Datos animales",18:"\u0414\u0430\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AnimalDataOnly={1:"samo podaci o \u017Eivotinjama",2:"\u0421\u0430\u043C\u043E \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,0:"Animal data only",6:"Ainult looma info",7:"Vain el\xE4intiedot",8:"Uniquement donn\xE9es des animaux"
,9:"Nur Tierdaten",10:"\u039C\u03CC\u03BD\u03BF \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF\u03C5",13:"Data bare for dyr",15:"\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",18:"\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u0430\u043D\u0456 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AKd={1:"istorija \u017Eivotinje",2:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\u0442\u0435"
,3:"\u52D5\u7269\u6B77\u53F2\u6A94\u6848",4:"Historie zv\xED\u0159ete",0:"Animal\u2019s history"
,5:"Dierhistorie",6:"Looma ajalugu",7:"El\xE4in historia",8:"Historique d\u2019animaux"
,9:"Tierhistorie",10:"\u0399\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03B6\u03CE\u03C9\u03BD"
,13:"Dyrenes historikk",15:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0442\u0440\u0435\u0432\u043E\u0433"
,16:"Historial del animal",17:"Hayvan ge\xE7mi\u015Fi",18:"\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0442\u0440\u0438\u0432\u043E\u0433"
};C.Gr={1:"ID \u017Eivotinje",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116"
,3:"\u5C0F\u725B\u8B58\u5225\u865F",4:"ID zv\xED\u0159ete",0:"Animal ID",6:"Looma ID"
,7:"El\xE4in ID",8:"ID de l\u2019animal",9:"Tiernummer",10:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",13:"Dyr-ID",15:"\u041D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"No. del crotal",18:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A2b={1:"ID \u017Eivotinje {1} ve\u0107 postoji",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u0432\u0435\u0447\u0435 "+
"\u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430!",3:"\u5C0F\u725B\u8B58\u5225\u865F {1}\u5DF2\u7D93\u5B58\u5728\uFF01"
,4:"ID zv\xED\u0159ete {1}  ji\u017E existuje",0:"Animal ID {1} already exists!"
,5:"Dier met ID {1} bestaat al!",6:"Looma ID {1} kasutusel!",7:"El\xE4intunnus {1} on jo olemassa!"
,8:"Animal ID {1} existe d\xE9j\xE0\xA0!",9:"Tier mit ID {1} bereits vorhanden!"
,10:"\u0391\u03C5\u03C4\u03CC \u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B7\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7"
,13:"Dyr- ID eksisterer",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"
,16:"\xA1Ya existe un animal con ID {1}!",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0432\u0436\u0435 "+
"\u0456\u0441\u043D\u0443\u0454"};C.A2c={1:"Odlazak \u017Eivotinje?",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u043D\u0430\u043F\u0443\u0441\u043A\u0430\u0449\u043E "+
"\u0444\u0435\u0440\u043C\u0430\u0442\u0430",0:"Animal leaves farm",6:"Loom farmist lahkunud"
,7:"El\xE4in poistunut tilalta",8:"Animal quitte la ferme",9:"Abgang vom Betrieb?"
,10:"\u0391\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7 \u03B6\u03CE\u03BF\u03C5 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03C6\u03AC\u03C1\u03BC\u03B1",13:"Dyr- forlater g\xE5rden"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u0435\u0442 "+
"\u0444\u0435\u0440\u043C\u0443?",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u043F\u043E\u043A\u0438\u0434\u0430\u0454 "+
"\u0444\u0435\u0440\u043C\u0443?"};C.AzQ={1:"Odabir spiska \u017Eivotinja",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441\u043F\u0438\u0441\u044A\u043A\n\u0437\u0430 "+
"\u0441\u0435\u043B\u0435\u043A\u0446\u0438\u044F",3:"\u5C0F\u725B\u6E05\u55AE\n\u4F9B\u9078\u64C7"
,4:"Seznam zv\xED\u0159at pro v\xFDb\u011Br",0:"Animal list\nfor selection",5:"Dierlijst voor selectie dier"
,6:"Looma nimekiri/info valik",7:"El\xE4inluettelo\nvalintaa varten",8:"Liste d\u2019animaux\npour s\xE9lectionner"
,9:"Tierliste zur Tierauswahl",10:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD \u03C0\u03C1\u03CC\u03C2 "+
"\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE",13:"Dyr-liste\nfor utvalg",15:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430",16:"Lista animales\npara seleccionar animal"
,18:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443"};C.AnimalLoss={1:"gubitak \u017Eivotinje"
,2:"\u0423\u043C\u0440\u044F\u043B\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u907A\u5931",4:"Zv\xED\u0159e ztraceno",0:"Animal loss",5:"Dier verloren"
,6:"Loom kadunud",7:"El\xE4inten menetys",8:"Perte d\u2019animaux",9:"Tierverlust"
,10:"\u0391\u03C0\u03CE\u03BB\u03B5\u03B9\u03B1 \u03B6\u03CE\u03BF\u03C5",13:"Dyr- Tapt"
,15:"\u041F\u043E\u0442\u0435\u0440\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"P\xE9rdida del animal",18:"\u0412\u0442\u0440\u0430\u0442\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AnimalNotFound={1:"\u017Eivotinju sa ID {1} nije mogu\u0107e prona\u0107i",2:
"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u043D\u0435 \u0435 "+"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043E"
,3:"\u672A\u767C\u73FE\u725B\u96BB{1}",4:"Zv\xED\u0159e s ID {1} nenalezeno",0:"Animal with ID {1} not found"
,5:"Dier met ID {1} kon niet gevonden worden",6:"Looma ID {1} pole leitav",7:"El\xE4int\xE4 Id {1} ei l\xF6ydy"
,8:"Animal avec\nID {1} introuvable",9:"Tier mit ID {1} konnte nicht gefunden werden"
,10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"{1} \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",13:"Dyr- ikke funnet"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",16:"No se encontr\xF3 el animal con la ID {1}"
,17:"Hayvan bulunamad\u0131",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430"
};C.Bdu={1:"\u017Eivotinja sa ID {1} jo\u0161 nije registrovan",2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u2116 {1} \u043D\u0435 \u0435 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E "+"\u0432\u0441\u0435 \u043E\u0449\u0435"
,3:"\u7DE8\u865F\u70BA{1}\u7684\u5C0F\u725B\u5C1A\u672A\u8A3B\u518A",4:"Zv\xED\u0159e s ID {1} nebylo registrov\xE1no"
,0:"Animal with ID {1} not registered yet",5:"Dier met ID {1} nog niet in systeem aangelegt"
,6:"Looma ID {1} pole veel registeeritud",7:"El\xE4int\xE4, jonka tunnus on {1}, ei ole viel\xE4 rekister\xF6ity"
,8:"Animal avec ID {1} non encore enregistr\xE9",9:"Tier mit der ID {1} noch nicht im System angelegt"
,10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C5\u03C4\u03CC "+"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B1.",13:"Dyr- ikke registrert enda",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"{1} \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435",16:"Animal con ID {1} a\xFAn no registrado"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0449\u0435 \u043D\u0435 "+
"\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0456"};C.A2d={1:"Uginu\u0107e?",2:
"\u0423\u043C\u0440\u044F\u043B\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E?"
,3:"\u5C0F\u725B\u6B7B\u4E86\u55CE\uFF1F",4:"Zv\xED\u0159e zem\u0159elo",0:"Animal perished?"
,5:"Dier dood?",6:"Loom hukkunud",7:"El\xE4in menehtyi?",8:"L\u2019animal a p\xE9ri\xA0?"
,9:"Tier verendet?",10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03C0\u03AD\u03B8\u03B1\u03BD\u03B5;"
,13:"Dyr d\xF8de",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043F\u043E\u0433\u0438\u0431\u043B\u043E?"
,16:"\xBFAnimal muerto?",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0437\u0430\u0433\u0438\u043D\u0443\u043B\u0430?"
};C.A2f={1:"\u017Divotinje",0:"Animals",6:"Loomad",7:"El\xE4imet",8:"Les animaux"
,9:"Tiere",10:"\u0396\u03CE\u03B1",13:"Dyr",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435"
,16:"Animales",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438"};C.A2g={1:"Lampa za osvjetljenje mjesta za mjerenje temperature"
,2:"\u041E\u0441\u0432\u0435\u0442\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0430\u043D\u0443\u0441\u0430",3:"\u809B\u6EAB\u6E2C\u91CF",4:"Anus vy\u0161et\u0159en\xED"
,0:"Anus spotlighting",5:"Verlichting Meetpunt",6:"P\xE4raku valgustus",8:"Eclairage de l\u2019anus"
,9:"Beleuchtung Messort",10:"\u03A4\u03BF\u03C0\u03B9\u03BA\u03CC\u03C2 \u03C6\u03C9\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C0\u03C1\u03C9\u03BA\u03C4\u03BF\u03CD.",13:"Rektum spotlys",15:"\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 \u043C\u0435\u0441\u0442\u0430 "+
"\u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",16:"Iluminaci\xF3n del ano"
,18:"\u041F\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043C\u0456\u0441\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A2i={1:"primjeni",2:"\u041F\u0440\u0438\u043B\u043E\u0436\u0438",3:"\u5957\u7528"
,4:"Aplikovat",0:"Apply",5:"Toepassen",6:"Kohalda",7:"K\xE4yt\xE4",8:"Appliquer"
,9:"Anwenden",10:"\u0395\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03C4\u03B5",13:"S\xF8k"
,15:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",16:"Aplicar",17:"Uygula"
,18:"\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438"};C.A2l={
1:"Dodijeli ID markicu",2:"\u0412\u044A\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0443\u0448\u043D\u0430 "+
"\u043C\u0430\u0440\u043A\u0430",0:"Assignment ear tag number",6:"\xDClesande k\xF5rvam\xE4rgi number"
,7:"Teht\xE4v\xE4 korvamerkin numero",8:"Attribution d\u2019un num\xE9ro de marque auriculaire"
,9:"Zuordnung Ohrmarkennr.",10:"\u0391\u03BD\u03AC\u03B8\u03B5\u03C3\u03B7 \u03B1\u03C1\u03B9\u03B8\u03BC\u03BF\u03CD "+
"\u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5",13:"Oppdrag \xF8remerkenummer",15:"\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0448\u043D\u043E\u0439 "+
"\u0431\u0438\u0440\u043A\u0438 \u2116",18:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\n\u0432\u0443\u0448\u043D\u043E\u0457 "+
"\u0431\u0456\u0440\u043A\u0438 \u2116"};C.AzX={0:"Assignment animal ID",8:"Attribution du n\xB0 d\'animal"
,9:"Vergabe Tiernummer",15:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ID \u0434\u043B\u044F "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",18:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u0438 ID \u0434\u043B\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A2m={1:"nasumice",0:"at random",
6:"Juhuslikult",7:"sattuman~varaisesti",8:"Valeur al\xE9atoire",9:"Zufallswert",
10:"\u039A\u03B1\u03C4\u03AC \u03C4\u03CD\u03C7\u03B7",13:"Tilfeldig",15:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
,18:"\u0412\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Az5={1:"dodijeljen ID broj",2:"\u041F\u0440\u0438\u0431\u0430\u0432\u0435\u043D \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u043D\u043E\u043C\u0435\u0440 (\u2116)",0:"Assigned ID",6:"ID m\xE4\xE4ratud",
7:"Annettu ID tunnus",8:"ID assign\xE9e",9:"Neue Tier-Nr.",10:"\u0391\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC"
,13:"Tildelt ID",15:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u2116",18:"\u041D\u043E\u0432\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430 \u2116"
};C.Z_={1:"automatski uklju\u010Di/isklju\u010Di",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0412\u043A\u043B/\u0418\u0437\u043A\u043B"
,3:"\u81EA\u52D5\u6E2C\u91CF\u958B/\u95DC",4:"Auto ZAP/VYP",0:"Auto ON/OFF",5:"Aan/Uit-Automatic"
,6:"Automaatne sisse/v\xE4lja l\xFClitamine",9:"Ein/Aus-Automatik",10:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF \u03AC\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1/\u03BA\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF"
,13:"Auto AV/P\xC5",15:"\u0410\u0432\u0442\u043E \u0412\u041A\u041B./\u0412\u042B\u041A\u041B."
,18:"\u0410\u0432\u0442\u043E \u0423\u0412\u0406\u041C\u041A./\u0412\u0418\u041C\u041A."
};C.Apa={1:"\u017Divotinje automatski registrirati",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
,3:"\u81EA\u52D5\u767B\u9304",4:"Autoregistrace",0:"Auto-registration",5:"Dieren automatisch registreren"
,6:"Automaatne registreerimine",7:"Autom rekister\xF6inti",8:"Enregistrer animaux automatiques"
,9:"Tiere automatisch anlegen",10:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE"
,13:"Automatisk registrering",15:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445"
,16:"Autoregistro",17:"Otomatik kay\u0131t",18:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D"};C.Automatic={1:"automatski",2:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E"
,3:"\u81EA\u52D5\u5316",4:"Automatick\xE1",0:"Automatic",5:"Automatisch",6:"Automaatne"
,7:"Automaatti",8:"Automatique",9:"Automatisch",10:"\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF"
,13:"Automatisk",15:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438"
,16:"Autom\xE1tico",17:"Otomatik",18:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E"
};C.A2o={1:"prosje\u010Dna te\u017Eina prilikom ro\u0111enja",0:"Average birth weight"
,6:"Keskmine s\xFCnnikaal",7:"Syntym\xE4paino ka",8:"Poids moyen de naissance",9:
"Mittleres Geburtsgewicht",10:"\u039C\u03AD\u03C3\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2 \u03BA\u03B1\u03C4\u03AC "+
"\u03C4\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B1",13:"Gjennomsnittlig f\xF8dselsvekt"
,15:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u043F\u0440\u0438 "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",18:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0430\u0433\u0430 \u043F\u0440\u0438 "+
"\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"};C.A2p={1:"prosje\u010Dan dnevni prirast"
,2:"\u0421\u0440\u0435\u0434\u043D\u043E \u0434\u043D\u0435\u0432\u0435\u043D "+
"\u043F\u0440\u0438\u0440\u0430\u0441\u0442",3:"\u5E73\u5747\u65E5\u589E\u91CD",
4:"Pr\u016Fm\u011Brn\xFD denn\xED p\u0159\xEDr\u016Fstek hmotnosti",0:"Average daily weight gain"
,5:"Gem. dagl. gewichtstoename",6:"Keskmine p\xE4evane juurdekasv",7:"Ka p\xE4iv\xE4kasvu"
,8:"Prise de poids quo~ti~dienne moyenne",9:"Mittlere t\xE4gl. Zunahme",10:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2",13:"Gjennomsnittlig daglig tilvekst"
,15:"\u0421\u0440\u0435\u0434\u043D\u0435\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0439 "+
"\u043F\u0440\u0438\u0432\u0435\u0441",16:"Ganancia diaria promedia",18:"\u0421\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0434\u043E\u0431\u043E\u0432\u0438\u0439 "+
"\u043F\u0440\u0438\u0440\u0456\u0441\u0442"};C.BdA={1:"\xD8 Prirast: {1} {2}",2:
"\xD8 \u041F\u0440\u0438\u0440\u0430\u0441\u0442: {1} {2}",3:"\xD8\u9AD4\u91CD\u589E\u52A0\uFF1A{1} {2}"
,4:"P\u0159\xEDr\u016Fstek hmotnosti: {1} {2}",0:"\xD8 Weight gain: {1} {2}",5:"\xD8 Gewichtstoename: {1} {2}"
,6:"\xD8 Juurdekasv: {1} {2}",7:"\xD8 Painon~nousu: {1} {2}",8:"\xD8 Prise de poids\xA0: {1} {2}"
,9:"\xD8 Zunahme: {1} {2}",10:"\u039C\u03AD\u03C3\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 "+
"\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+"\u03B6\u03CE\u03BF\u03C5: {1} {2}"
,13:"Gj.snittlig tilv. (1) (2)",15:"\xD8 \u043F\u0440\u0438\u0432\u0435\u0441: {1} {2}"
,16:"\xD8 Ganancia: {1} {2}",18:"\xD8 \u043F\u0440\u0438\u0440\u0456\u0441\u0442: {1} {2}"
};C.A2q={1:"Prosje\u010Dna te\u017Eina \u017Eivotinje",0:"Average animal weight"
,6:"Keskmine looma kaal",7:"Elinten paino keskim\xE4\xE4rin",8:"Poids moyen des animaux"
,9:"Mittleres Tiergewicht",10:"\u039C\u03AD\u03C3\u03BF \u03B2\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,13:"Gjennomsnittlig dyrevekt",15:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,18:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0430\u0433\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BdC={1:"nazad na listu koraka",2:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432\n\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,0:"Back to\naction list",6:"Tagasi tegevuste lehele",7:"Palaa toiminta~listaan"
,8:"Retour \xE0 liste d\u2019actions",9:"Zur\xFCck zu\nAktionsliste",10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BD\u03B5\u03C1\u03B3\u03B5\u03B9\u03CE\u03BD"
,13:"Tilbake til\naksjons listet",15:"\u041D\u0430\u0437\u0430\u0434 \u043A\n\u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E\n\u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0434\u0456\u0439"};C.A2t={1:"nazad na listu alarma",2:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432\n\u0430\u043B\u0430\u0440\u043C\u0438"
,3:"\u8FD4\u56DE\n\u8B66\u5831\u6E05\u55AE",4:"Zp\u011Bt do seznamu alarm\u016F"
,0:"Back to\nalarm list",5:"Terug naar\nalarmlijst",6:"Tagasi hoiatuste lehele",
7:"Palaa h\xE4ly~tyslistaan",8:"Retour \xE0\nliste alarmes",9:"Zur\xFCck zu\nAlarmliste"
,10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD"
,13:"Tilbake til\nalarm liste",15:"\u041D\u0430\u0437\u0430\u0434 \u043A\n\u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0442\u0440\u0435\u0432\u043E\u0433",16:"Volver a lista\nde alarmas",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E\n\u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0442\u0440\u0438\u0432\u043E\u0433"};C.BdD={1:"nazad na kontrolnu listu",2:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432\n\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
,3:"\u8FD4\u56DE\n\u63A7\u5236\u6E05\u55AE",4:"Zp\u011Bt do kontroln\xEDho seznamu"
,0:"Back to\ncontrol list",5:"Terug naar\ncontrolelijst",6:"Tagasi men\xFC\xFCse"
,7:"Takaisin oh~ja~usluetteloon",8:"Retour \xE0\nliste contr\xF4le",9:"Zur\xFCck zu\nKontrollliste"
,10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03C9\u03BD",13:"Tilbake til\nkontroll liste"
,15:"\u041D\u0430\u0437\u0430\u0434 \u043A\n\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C\u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443",16:"Volver a lista\nde control",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E\n\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0441\u043F\u0438\u0441\u043A\u0443"};C.A2u={1:"nazad na listu presu\u0161enih krava"
,0:"Back to list\nof dry cows",6:"Tagasi \nkinnislehmade nimekirja",7:"Takaisin luetteloon\numpilehm\xE4t"
,8:"Retour \xE0 la liste\n\u2019vaches taries\u2019",9:"Zur\xFCck zur Liste\n\u2019Trockensteher\u2019"
,10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C4\u03B5\u03AF\u03C1\u03C9\u03BD "+"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD"
,13:"Tilbake til liste\nfor gjeldkyr",15:"\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435\u2019"
,18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456\u2019"
};C.A2v={1:"nazad na listu sve\u017Eih krava",2:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432\nn\u0441\u043A\u043E\u0440\u043E "+
"\u043E\u0442\u0435\u043B\u0435\u043D\u0438",0:"Back to list\nof fresh cows",6:"Tagasi poeginud lehmade lehele"
,7:"Takaisin luetteloon\ntuoreista lehm\xE4t",8:"Retour \xE0 la liste\nvaches fra\xEEches"
,9:"Zur\xFCck zur Liste\n\u2019Frischmelker\u2019",10:"\u0388\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03C6\u03C1\u03AD\u03C3\u03BA\u03C9\u03BD "+"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD"
,13:"Tilbake til liste\nfriske kyr",15:"\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u0430\u044F "+
"\u043A\u043E\u0440\u043E\u0432\u0430\u2019",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0430 "+
"\u043A\u043E\u0440\u043E\u0432\u0430\u2019"};C.A2w={1:"nazad na listu stada",2:
"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432\n\u0441\u0442\u0430\u0434\u043E"
,3:"\u8FD4\u56DE\u6E05\u55AE",0:"Back to\nherd list",5:"Terug naar\nlijst",6:"Tagasi karja lehele"
,7:"Palaa\nkarjalista",8:"Retour \xE0 liste\ntroupeaux",9:"Zur\xFCck zur\nHerdenliste"
,10:"\u0388\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03BA\u03BF\u03C0\u03B1\u03B4\u03B9\u03CE\u03BD"
,13:"Tilbake til\nbuskap liste",15:"\u041D\u0430\u0437\u0430\u0434 \u043A\n\u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0441\u0442\u0430\u0434\u0430",16:"Volver a lista\nde reba\xF1o",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E\n\u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0441\u0442\u0430\u0434\u0430"};C.BdE={1:"nazad na listu bez ID oznaka",0:"Back to\nlist \u2019w/o ID\u2019"
,6:"Tagasi ID-ta loomade nimekirja",7:"Palaa\nlistalle \u2019ei ID\u2019",8:"Retour \xE0 la liste sans ID"
,9:"Zur\xFCck zur Liste\nOhne ID",10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD \u03B6\u03C9\u03C1\u03AF\u03C2 "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC"
,13:"Tilbake til\nliste \"uten ID\"l",15:"\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443\n\u0431\u0435\u0437 "+
"\u043D\u043E\u043C\u0435\u0440\u0430 ID",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443\n\u0431\u0435\u0437 "+
"\u043D\u043E\u043C\u0435\u0440\u0443 ID"};C.BdF={0:"Back to list new,\n(w/o transp.)"
,9:"Zur\xFCck zur Liste\n\u2019Neu, o. Transp.\u2019"};C.A2x={1:"nazad na listu registriranih \u017Eivotinja"
,0:"Back to list\nregistrations",6:"Tagasi registreerimiste nimekirja",7:"Palaa listalle\nrekister\xF6innit"
,8:"Retour \xE0 la liste\nEnregistrement",9:"Zur\xFCck zur Liste\n\u2019Anmeldungen\u2019"
,10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03CE\u03BD"
,13:"Tilbake til liste\nregistrering",15:"\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438\u2019"
,18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457\u2019"
};C.BdG={1:"nazad na meni \"pojedina\u010Dno hranjenje\"",2:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u043C\u0435\u043D\u044E\n\u043E\u0442\u0434\u0435\u043B\u043D\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E",0:"Back to single\nanimal menu",6:"Tagasi \xFCksiku looma lehele"
,7:"Palaa el\xE4in~valikkoon",8:"Retour \xE0 liste d\u2019\nanimal individ.",9:"Zur\xFCck zum\nEinzeltiermen\xFC"
,10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03BF "+
"\u03BC\u03B5\u03BD\u03BF\u03CD \u03BC\u03BF\u03BD\u03CC \u03B6\u03CE\u03BF",13:
"Tilbake til enkelt\ndyrs meny",15:"\u041D\u0430\u0437\u0430\u0434 \u043A\n\u043C\u0435\u043D\u044E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E\n\u043C\u0435\u043D\u044E "+
"\u043E\u043A\u0440\u0435\u043C\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D"
};C.BdH={1:"nazad na listu \"transp. \"",2:"\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u0432\n\u0431\u0435\u0437 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,0:"Back to list\n\u2019w/o transp.\u2019",6:"Tagasi anduri lehele",7:"Palaa listalle\n\u2019ei transpond.\u2019"
,8:"Retour \xE0 liste\nsans transp.",9:"Zur\xFCck zur Liste\n\u2019Ohne Transp.\u2019"
,10:"\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE \u03C3\u03C4\u03B7 "+
"\u03BB\u03AF\u03C3\u03C4\u03B1 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03BF\u03C4\u03CE\u03BD"
,13:"Tilbake til listet\n\u2019\"uten transp.\"",15:"\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u0431\u0435\u0437 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430\u2019"
,18:"\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443\n\u2019\u0431\u0435\u0437 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430\u2019"
};C.BdI={0:"Back to\nwatch list",9:"Zur\xFCck zur Liste\n\u2019Beobachtung\u2019"
};C.BdJ={0:"Backup in progress!\n\nThis process may take a minute or longer, please "+
"be patient!",9:"Datensicherung wird erstellt!\n\nDieser Vorgang kann eine Minute oder l\xE4nger "+
"dauern, etwas Geduld bitte!"};C.Basic={1:"osnovno",2:"\u041E\u0441\u043D\u043E\u0432\u0435\u043D"
,3:"\u57FA\u672C",4:"Z\xE1klad",0:"Basic",5:"Simpel",6:"Alg",7:"Perustieto",8:"Simple"
,9:"Einfach",10:"\u0392\u03B1\u03C3\u03B9\u03BA\u03AC",13:"Grunnleggende",15:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439"
,16:"B\xE1sico",17:"Temel",18:"\u0411\u0430\u0437\u043E\u0432\u0438\u0439"};C.BdK={
1:"Baterija \u0107e se isprazniti!",2:"\u0411\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 \u0435 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E "+
"\u0438\u0437\u0442\u043E\u0449\u0435\u043D\u0430!",3:"\u96FB\u6C60\u96FB\u91CF\u56B4\u91CD\u4E0D\u8DB3\uFF01"
,4:"Stav baterie p\u0159\xEDli\u0161 n\xEDzk\xFD",0:"Battery is critically low!"
,5:"Batterij is erg laag!",6:"Aku peagi t\xFChi!",7:"Akun varaus kriittisen alhainen!"
,8:"La batterie est dangereusement faible\xA0!",9:"Akku: niedriger Ladezustand!"
,10:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 "+
"\u03C0\u03AC\u03C1\u03B1 \u03C0\u03BF\u03BB\u03CD \u03B5\u03BE\u03B1\u03C3\u03B8\u03B5\u03BD\u03B7\u03BC\u03AD\u03BD\u03B7"
,13:"Batteriet er kritisk lavt",15:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F: \u043D\u0438\u0437\u043A\u0438\u0439 "+
"\u0437\u0430\u0440\u044F\u0434!",16:"\xA1Bater\xEDa muy baja!",18:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0457!"};C.A2z={1:"Baterija je iskori\u0161tena!"
,2:"\u0411\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 \u0435 \u0438\u0437\u0442\u043E\u0449\u0435\u043D\u0430!"
,3:"\u96FB\u6C60\u96FB\u91CF\u8017\u76E1\uFF01",4:"Baterie je vybit\xE1",0:"Battery is exhausted!"
,5:"Batterij raakt uitgeput!",6:"Ahu t\xFChi!",7:"Akku on tyhj\xE4!",8:"La batterie est \xE9puis\xE9e\xA0!"
,9:"Akku ist ersch\xF6pft!",10:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03BE\u03B1\u03BD\u03C4\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5"
,13:"Batteriet er utladet",15:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0440\u0430\u0437\u0440\u044F\u0436\u0435\u043D\u0430!"
,16:"\xA1Bater\xEDa descargada!",18:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0440\u043E\u0437\u0440\u044F\u0434\u0436\u0435\u043D\u0430!"
};C.A2A={1:"Baterija: potrebno napuniti!",2:"\u0417\u0430\u0440\u044F\u0434\u0430 \u043D\u0430 \u0431\u0430\u0442\u0435\u0440\u0438\u044F\u0442\u0430 "+
"\u0435 \u043D\u0438\u0441\u044A\u043A!",0:"Charge of battery is low!",6:"Aku tase madal!"
,7:"Akun varaus on alhainen!",8:"La batterie est faible\xA0!",9:"Akku: sehr niedriger Ladezustand!"
,10:"\u0397 \u03BC\u03C0\u03B1\u03C4\u03B1\u03C1\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 "+
"\u03B5\u03BE\u03B1\u03C3\u03B8\u03B5\u03BD\u03B7\u03BC\u03AD\u03BD\u03B7!",13:"Batteriladning er lav"
,15:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F: \u043E\u0447\u0435\u043D\u044C "+
"\u043D\u0438\u0437\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434!",16:"\xA1Bater\xEDa baja!"
,18:"\u0414\u0443\u0436\u0435 \u043D\u0438\u0437\u044C\u043A\u0438\u0439 \u0437\u0430\u0440\u044F\u0434 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0457!"};C.BdM={1:"trenutno + ro\u0111enje"
,2:"\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u043E + \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u76EE\u524D\u7684+\u51FA\u751F",4:"Porodn\xED hmotnost aktu\xE1ln\xED",0:"Current + birth"
,5:"Huidig+ Geboorte",6:"Praegune + s\xFCnd",7:"Nykyinen paino + syntym\xE4paino"
,8:"Actuel + naissance",9:"Aktuell + Geburt",10:"\u039A\u03B1\u03C4\u03B1\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03C1\u03AD\u03C7\u03BF\u03BD\u03C4\u03BF\u03C2"
,13:"N\xE5v\xE6rende + kalving",15:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435 + \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
,16:"Actual + nacimiento",18:"\u041D\u0438\u043D\u0456\u0448\u043D\u0456\u0439 + \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A2B={0:"Birth date mandatory",9:"Geburtsdatum muss angegeben werden"};C.BdN={
0:"Birth notices were deleted after export!",8:"Les d\xE9clarations de naissance ont \xE9t\xE9 supprim\xE9es apr\xE8s l\'exportation\xA0!"
,9:"Geburtsmeldungen wurden nach Export gel\xF6scht!",15:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0431\u044B\u043B\u0438 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435 "+"\u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430!"
,18:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0431\u0443\u043B\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u043F\u0456\u0441\u043B\u044F "+
"\u0435\u043A\u0441\u043F\u043E\u0440\u0442\u0443!"};C.Kv={1:"te\u017Eina pri ro\u0111enju"
,2:"\u0422\u0435\u0433\u043B\u043E \u043F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u9AD4\u91CD",4:"Porodn\xED hmotnost",0:"Birth weight",5:"Geboortegewicht"
,6:"S\xFCnnikaal",7:"Syntym\xE4paino",8:"Poids de naissance",9:"Geburtsgewicht",
10:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,13:"F\xF8dselsvekt",15:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,16:"Peso al nacer",18:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.A2C={1:"te\u017Eina uduplana nakon",0:"Birth weight doubled after",6:"S\xFCnnikaal kahekordistus"
,7:"Syntym\xE4paino kaskinkertaistunut j\xE4lkeen",8:"Le poids de naissance a doubl\xE9 apr\xE8s"
,9:"Geburtsgewicht verdoppelt nach",10:"\u0394\u03B9\u03C0\u03BB\u03B1\u03C3\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,13:"F\xF8dselsvekt dobblet etter",15:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 "+
"\u0443\u0434\u0432\u043E\u0438\u043B\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
,18:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u043F\u043E\u0434\u0432\u043E\u0457\u043B\u0430\u0441\u044F \u0447\u0435\u0440\u0435\u0437"
};C.BdP={1:"na ro\u0111enju",2:"\u041F\u0440\u0438 \u0440\u0430\u0436\u0434\u0430\u043D\u0435"
,3:"\u51FA\u751F\u6642",4:"Porodn\xED hmotnost",0:"At birth",5:"Bij geboorte",6:
"S\xFCndides",7:"Syntym\xE4ss\xE4",8:"\xE0 la naissance",9:"Bei Geburt",10:"\u039B\u03AF\u03C3\u03C4\u03B1 \u03B2\u03B1\u03C1\u03CE\u03BD \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,13:"Ved f\xF8dsel",15:"\u041F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,16:"Al nacer",18:"\u041F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.A2D={1:"te\u017Eine pri ro\u0111enju",0:"Birth weights",6:"S\xFCnnikaalud",7:
"Syntym\xE4~painot",8:"Poids de naissance",9:"Geburts~gewichte",10:"\u0392\u03AC\u03C1\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,13:"F\xF8dselsvekter",15:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
,18:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456"
};C.AKO={0:"Births",9:"Geburten"};C.BdR={0:"Bovine/cattle",6:"Veised",8:"Bovine"
,9:"Rind",10:"\u0392\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2",13:"Bovine/storfe"
,15:"\u041A\u0420\u0421"};C.Breed={2:"\u041F\u043E\u0440\u043E\u0434\u0430",0:"Breed"
,6:"T\xF5ug",7:"Rotu",8:"Race",9:"Rasse",10:"\u03A1\u03AC\u03C4\u03C3\u03B1",13:
"Rase",15:"\u041F\u043E\u0440\u043E\u0434\u0430",18:"\u041F\u043E\u0440\u043E\u0434\u0430"
};C.A2I={1:"Brightness",2:"\u042F\u0440\u043A\u043E\u0441\u0442",3:"\u4EAE\u5EA6"
,4:"Jas",0:"Display brightness",5:"Helderheid",6:"Heledus",7:"Kirkkaus",8:"Luminosit\xE9 de l\'\xE9cran"
,9:"Helligkeit Display",10:"\u03A6\u03C9\u03C4\u03B5\u03B9\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1"
,13:"Lysstyrke",15:"\u042F\u0440\u043A\u043E\u0441\u0442\u044C",16:"Brillo de la pantalla"
,17:"Parlakl\u0131k",18:"\u042F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044C"
};C.AAa={0:"Bulk recording",9:"Massenzugang"};C.A2J={0:"CSV export",9:"CSV-Export"
};C.BdT={1:"tele",2:"\u0422\u0435\u043B\u0435",3:"\u5C0F\u725B",0:"Calf",5:"Kalf"
,6:"Vasikas",7:"Lehm\xE4vasikka",8:"Veau",9:"Kalb",10:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9"
,13:"Kalv",15:"\u0422\u0435\u043B\u0451\u043D\u043E\u043A",16:"Ternero",17:"Buza\u011F\u0131"
,18:"\u0422\u0435\u043B\u044F"};C.A2K={1:"gubitak teladi",2:"\u0423\u043C\u0440\u0435\u043B\u0438"
,0:"Calf losses",6:"Surnud vasikad",7:"Vasikan menetykset",8:"Pertes des veaux",
9:"K\xE4lber~verluste",10:"\u0391\u03C0\u03CE\u03BB\u03B5\u03B9\u03B5\u03C2 \u03BC\u03CC\u03C3\u03C7\u03C9\u03BD"
,13:"D\xF8de kalver",15:"\u041F\u043E\u0442\u0435\u0440\u0438 \u0442\u0435\u043B\u044F\u0442"
,18:"\u0412\u0442\u0440\u0430\u0442\u0438 \u0442\u0435\u043B\u044F\u0442"};C.AK6={
1:"tele",2:"\u0442\u0435\u043B\u0435",3:"\u5C0F\u725B",4:"Tele",0:"calf",5:"kalf"
,6:"Vasikas",7:"Lehm\xE4vasikka",8:"veau",9:"Kalb",10:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9"
,13:"Kalv",15:"\u0422\u0435\u043B\u0451\u043D\u043E\u043A",16:"ternero",17:"Buza\u011F\u0131"
,18:"\u0422\u0435\u043B\u044F"};C.AK7={1:"telad",2:"\u0442\u0435\u043B\u0435\u0442\u0430"
,3:"\u72A2\u725B",4:"telata",0:"calves",5:"kalveren",6:"Vasikad",7:"Vasikat",8:"veaux"
,9:"K\xE4lber",10:"\u039C\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9\u03B1",13:"kalver"
,15:"\u0422\u0435\u043B\u044F\u0442\u0430",16:"terneros",17:"Buza\u011F\u0131lar"
,18:"\u0422\u0435\u043B\u044F\u0442\u0430"};C.Calving={1:"odvikavanje",2:"\u041E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,0:"Calving",6:"Poegimine",7:"Poikiminen",8:"V\xEAlage",9:"Abkalbung",10:"\u03A4\u03BF\u03BA\u03B5\u03C4\u03CC\u03C2"
,13:"Kalving",15:"\u041E\u0442\u0451\u043B",16:"Parto",18:"\u041E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.A2L={1:"datum telenja",2:"\u0414\u0430\u0442\u0430 \u043D\u0430 \u043E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,0:"Calving date",6:"Poegimise kuup\xE4ev",7:"Poikimis~p\xE4iv\xE4",8:"Date de v\xEAlage"
,9:"Letzte Kalbung",10:"\u0397\u03BC/\u03BD\u03B9\u03B1 \u03C4\u03BF\u03BA\u03B5\u03C4\u03BF\u03CD"
,13:"Kalvings dato",15:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u0442\u0451\u043B"
,18:"\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.AiJ={1:"tok telenja",2:"\u041B\u0435\u043A\u043E\u0442\u0430 \u043D\u0430 \u043E\u0442\u0435\u043B\u0432\u0430\u043D\u0435"
,3:"\u6613\u5206\u5A29",4:"Snadn\xE9 otelen\xED",0:"Calving ease",5:"Afkalfverloop"
,6:"Poegimis~raskus",7:"Poikima~vaikeus",8:"D\xE9roulement du v\xEAlage",9:"Geburts~verlauf"
,10:"\u0395\u03C5\u03BA\u03BF\u03BB\u03AF\u03B1 \u03C4\u03BF\u03BA\u03B5\u03C4\u03BF\u03CD"
,13:"Lett kalving",15:"\u041B\u0451\u0433\u043A\u043E\u0441\u0442\u044C \u043E\u0442\u0451\u043B\u0430"
,16:"Facilidad de parto",17:"Do\u011Fum kolayl\u0131\u011F\u0131",18:"\u041B\u0435\u0433\u043A\u0456\u0441\u0442\u044C \u043E\u0442\u0435\u043B\u0435\u043D\u043D\u044F"
};C.Ac9={1:"odustani",2:"\u041E\u0442\u043A\u0430\u0437",3:"\u53D6\u6D88",4:"Zru\u0161it"
,0:"Cancel",5:"Afbreken",6:"T\xFChista",7:"Poista",8:"Annuler",9:"Abbrechen",10:
"\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",13:"Avbryt",15:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
,16:"Cancelar",17:"\u0130ptal",18:"\u0417\u0430\u043A\u0440\u0438\u0442\u0438"};
C.BdW={1:"punja\u010D",0:"Charge controller",6:"Laadige kontrollseadist",7:"Latauss\xE4\xE4din"
,8:"Contr\xF4le de chargeur",9:"Laderegler",10:"\u0395\u03BB\u03B5\u03B3\u03BA\u03C4\u03AE\u03C2 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2"
,13:"Ladekontroller",15:"\u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 "+
"\u0437\u0430\u0440\u044F\u0434\u043D\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,18:"\u0421\u0442\u0430\u0431\u0456\u043B\u0456\u0437\u0430\u0442\u043E\u0440 "+
"\u0437\u0430\u0440\u044F\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.Oq={1:"punjenje u toku",2:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441 \u043D\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u6B63\u5728\u5145\u96FB",4:"Nab\xEDjen\xED prob\xEDh\xE1",0:"Charging in progress"
,5:"Batterij word geladen",6:"Laeb",7:"Lataus k\xE4ynniss\xE4",8:"La batterie est en charge."
,9:"Akku wird geladen",10:"\u0394\u03B9\u03B5\u03BE\u03AC\u03B3\u03B5\u03C4\u03B1\u03B9 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7"
,13:"Lading p\xE5g\xE5r",15:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F"
,16:"Cargando bater\xEDa",18:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0434\u0436\u0430\u0454\u0442\u044C\u0441\u044F"
};C.A2O={1:"provjerite driver aparata",0:"Check device drivers",6:"Kontrollige seadme draivereid"
,7:"Tarkista laiteajurit",8:"Test pilote du dispositif",9:"Pr\xFCfung Ger\xE4tetreiber"
,10:"\u0395\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03BF\u03B4\u03B7\u03B3\u03BF\u03CD\u03C2 "+
"\u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2",13:"Kontroller enhetsdrivere"
,15:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u043E\u0432"
,18:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0456\u0432"
};C.Atr={1:"odabir aktivnosti",2:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,3:"\u9078\u64C7\u52D5\u4F5C",0:"Choose action",5:"Actie kiezen",6:"Vali tegevus"
,7:"Valitse toiminto",8:"S\xE9lectionnez action",9:"Aktion ausw\xE4hlen",10:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1"
,13:"Velg handling",15:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,16:"Seleccionar accion",18:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0434\u0456\u044E"
};C.BdY={1:"odaberite sl aktivnost",2:"\u0418\u0437\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0432\u0430\u0449\u043E "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",0:"Choose next action",6:"Vali j\xE4rgmine tegevus"
,7:"Valitse seuraava toiminto",8:"Action suivante",9:"N\xE4chste Aktion",10:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 "+
"\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1",13:"Velg neste handling",15:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,18:"\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0456\u044F"};C.A2P={
1:"Papci i zglobovi",2:"\u041A\u043E\u043F\u0438\u0442\u0430 \u0438 \u043A\u0440\u0430\u0439\u043D\u0438\u0446\u0438"
,0:"Claws and limbs",6:"S\xF5rad ja j\xE4semed",7:"Sorkat ja jalat",8:"Griffes et membres"
,9:"Klauen und Gliedma\xDFen",10:"\u039D\u03CD\u03C7\u03B9\u03B1 \u03BA\u03B1\u03B9 \u03AC\u03BA\u03C1\u03B1."
,13:"Klauver og Haser",15:"\u041A\u043E\u043F\u044B\u0442\u0430 \u0438 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
,18:"\u041A\u043E\u043F\u0438\u0442\u0430 \u0442\u0430 \u043A\u0456\u043D\u0446\u0456\u0432\u043A\u0438"
};C.A2Q={1:"poni\u0161ti alarma",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0430\u043B\u0430\u0440\u043C\u0430"
,3:"\u6E05\u9664\u8B66\u5831",4:"Vyma\u017E alarm",0:"Clear alarm",5:"Alarm terug zetten"
,6:"T\xFChista hoiatus",7:"Tyhjenn\xE4H\xE4lytykset",8:"R\xE9initialisation de l\u2019alarme"
,9:"Alarm zur\xFCcksetzen",10:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD"
,13:"Fjern alarmen",15:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0438\u0433\u043D\u0430\u043B "+
"\u0442\u0440\u0435\u0432\u043E\u0433\u0438",16:"Restablecer alarma",18:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0441\u0438\u0433\u043D\u0430\u043B "+
"\u0442\u0440\u0438\u0432\u043E\u0433\u0438"};C.A2R={0:"Clear all birth notices"
,6:"T\xFChista k\xF5ik s\xFCnniteavitused",7:"Tyhjenn\xE4 kaikki syntym\xE4ilmoitukset"
,8:"Supprimer toutes les d\xE9clarations de naissances.",9:"Alle Meldungen l\xF6schen"
,10:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD",13:"Fjern alle f\xF8dselsmeldinger"
,15:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445",18:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A2S={0:"Clear all purchase notices",9:"Alle Meldungen l\xF6schen"};C.AAi={0:
"Clear notice of birth",6:"T\xFChista s\xFCnni teavitus",7:"Tyhjenn\xE4 ilmoitus syntym\xE4st\xE4"
,8:"Supprimer la d\xE9claration de naissance",9:"Geburtsmeldung l\xF6schen",10:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03C2",13:"Tydelig f\xF8dselsmelding"
,15:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",18:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.AAj={1:"poni\u0161ti filtere",2:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0444\u0438\u043B\u0442\u044A\u0440"
,3:"\u6E05\u9664\u7BE9\u9078",4:"Vyma\u017E filter",0:"Clear filter",5:"Filter terug zetten"
,6:"Puhasta filter",7:"Tyhjenn\xE4 suodatus",8:"R\xE9initialisation du filtre",9:
"Filter zur\xFCcksetzen",10:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C6\u03AF\u03BB\u03C4\u03C1\u03BF\u03C5"
,13:"T\xF8m filter",15:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 "+
"\u0444\u0438\u043B\u044C\u0440\u0430",16:"Restablecer filtro",18:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0444\u0456\u043B\u044C\u0442\u0440\u0443"};C.AAk={0:"Clear notice of purchase"
,9:"Zugangsmeldung l\xF6schen"};C.A2T={1:"Zatvranje farme",2:"\u0417\u0430\u043A\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0444\u0435\u0440\u043C\u0430"
,0:"Closure of farm",6:"Farmi sulgemine",7:"Maatilan sulkeminen",8:"Fermeture de l\u2019exploitation"
,9:"Abgang des Betriebs",10:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF \u03C6\u03AC\u03C1\u03BC\u03B1\u03C2"
,13:"G\xE5rden legges ned",15:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0444\u0435\u0440\u043C\u044B"
,18:"\u0417\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u0444\u0435\u0440\u043C\u0438"
};C.A2U={1:"ogrlica je odstranjena",2:"\u041A\u043E\u043B\u0430\u043D\u044A\u0442 \u0435 \u0441\u0432\u0430\u043B\u0435\u043D"
,0:"Collar is taken off",6:"Rihm on v\xF5etud",7:"Kaulain irrotetaan",8:"Collier enlev\xE9\xA0?"
,9:"Halsband abgenommen?",10:"\u03A4\u03BF \u03BA\u03BF\u03BB\u03BB\u03AC\u03C1\u03BF \u03B2\u03B3\u03AE\u03BA\u03B5"
,13:"Halsband tas av",15:"\u041E\u0448\u0435\u0439\u043D\u0438\u043A \u0441\u043D\u044F\u0442?"
,18:"\u041E\u0448\u0438\u0439\u043D\u0438\u043A \u0437\u043D\u044F\u0442\u043E?"
};C.Colon={0:":",8:"\xA0:"};C.Aph={1:"Unos kolostruma",2:"\u0418\u0437\u043F\u0438\u0442\u0430 \u043A\u043E\u043B\u0430\u0441\u0442\u0440\u0430"
,3:"\u521D\u4E73\u63A1\u98DF\u91CF",4:"Kolostrum p\u0159\xEDjem",0:"Colostrum intake"
,5:"Biestopname",6:"Ternespiima joomus",7:"Ternimaidon saanti",8:"Prise de colostrum"
,9:"Kolostrumaufnahme",10:"\u0395\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2 \u03C0\u03C1\u03C9\u03C4\u03BF\u03B3\u03AC\u03BB\u03B1\u03BA\u03C4\u03BF\u03C2"
,13:"R\xE5melk inntak",15:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430(\u043C\u043E\u043B\u043E\u0437\u0438\u0432\u0430)"
,16:"Consumo de calostro",18:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430 "+
"(\u043C\u043E\u043B\u043E\u0437\u0438\u0432\u0430)"};C.Bd0={1:"Naslov kolone",2:
"\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u044F \u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0438"
,3:"Spaltentitel",4:"Z\xE1hlav\xED sloupc\u016F",0:"Column headers",5:"Column titel"
,6:"Veeru pealkiri",7:"Sarakeotsikot",8:"En-t\xEAtes de colonne",9:"Spaltentitel"
,10:"\u0395\u03C0\u03B9\u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03B5\u03C2",13:
"Kolonneoverskrifter",15:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430"
,16:"T\xEDtulos de columna",18:"\u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0432\u0431\u0447\u0438\u043A\u0443"
};C.Bd2={1:"Stanje",2:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u044F",3:"\u72C0\u614B"
,4:"Kondice",0:"Condition",5:"Conditie",6:"Seisund",7:"Kunto",8:"\xC9tat",9:"Zustand"
,10:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7",13:"Tilstand",15:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,16:"Condici\xF3n",18:"\u0421\u0442\u0430\u043D"};C.ALk={2:"\u041A",3:"\u72C0\u614B"
,4:"Kondice po\u010D\xE1te\u010Dn\xED",0:"C",6:"S",7:"K",8:"E",9:"Z",10:"\u039A"
,15:"Z"};C.Bd3={1:"Korisnik potvrdio",2:"\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0435\u043D\u043E \u043E\u0442 "+
"\u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B",3:"\u7528\u6236\u78BA\u8A8D"
,4:"Potvrzeno u\u017Eivatelem",0:"User confirmed",5:"Gebruiker bevestigt",6:"Kasutaja kinnitatud"
,7:"K\xE4ytt\xE4j\xE4 vahvistettu",8:"Utilisateur confirm\xE9",9:"Nutzer best\xE4tigt"
,10:"\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03B5\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03B9\u03CE\u03B8\u03B7\u03BA\u03B5"
,13:"Bekreftet av bruker",15:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0434\u044C "+
"\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D",16:"Confirmado por usuario"
,18:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E"
};C.A2Y={0:"Consecutive",8:"Cons\xE9cutif",9:"Fortlaufend"};C.Contains={0:"contains"
,8:"contient",9:"enth\xE4lt",15:"\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442"
,18:"\u0432\u043C\u0456\u0449\u0443\u0454"};C.A2Z={1:"Da li \u017Eelite nastaviti sa registracijom ostalih \u017Eivotinja?"
,2:"\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u043D\u0435 "+"\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u0442\u0430 "+
"\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u0430\u043B\u0438\u0442\u0435 "+"{2} \u0436\u0438\u0432\u043E\u0442\u043D\u0438?"
,0:"Continue with registration of remaining {2} animals?",6:"J\xE4tka \xFClej\xE4\xE4nud {2} looma registreerimist?"
,7:"Jatketaanko j\xE4ljell\xE4 olevien {2} el\xE4imen rekister\xF6inti\xE4?",8:"Poursuivre l\u2019enregistrement des animaux {2} restants\xA0?"
,9:"Mit dem Anmelden der restlichen {2} Tiere fortfahren?",10:"\u03A3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD "+
"\u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03C4\u03C9\u03BD \u03C5\u03C0\u03BF\u03BB\u03BF\u03AF\u03C0\u03C9\u03BD "+
"{2} \u03B6\u03CE\u03C9\u03BD;",13:"Vil du fortsette med registrering av gjenv\xE6rende {2} dyr?"
,15:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E "+
"\u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F {2} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445?"
,18:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E "+
"\u0440\u0435\u0448\u0442\u0438 {2} \u0442\u0432\u0430\u0440\u0438\u043D?"};C.AAo={
1:"kontrola",2:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",3:
"\u63A7\u5236",4:"Ovl\xE1d\xE1n\xED",0:"Control",5:"Controle",6:"Kontroll",7:"Valvonta"
,8:"Contr\xF4le",9:"Kontrolle",10:"\u0384\u0395\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2"
,13:"Kontroll",15:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C",17:"Kontrol"
,18:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C"};C.A20={0:"Control period fresh cows"
,8:"P\xE9riode de contr\xF4le des nouvelles vaches",9:"Kontrolle Frischmelker f\xFCr"
,15:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432",18:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0438\u0445 "+
"\u043A\u043E\u0440\u0456\u0432"};C.AAq={1:"broj",0:"Count",6:"Loenda",7:"Laske"
,8:"Nombre",9:"An~zahl",10:"\u039C\u03AD\u03C4\u03C1\u03B7\u03C3\u03B5",13:"Telle"
,15:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",18:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"
};C.De={1:"zemlja",2:"\u0421\u0442\u0440\u0430\u043D\u0430",3:"\u570B\u5BB6",4:"Zem\u011B"
,0:"Country",5:"Land",6:"Riik",7:"Maa",8:"Pays",9:"Land",10:"\u03A7\u03CE\u03C1\u03B1"
,13:"Land",15:"\u0421\u0442\u0440\u0430\u043D\u0430",16:"Pa\xEDs",17:"\xDClke",18:
"\u041A\u0440\u0430\u0457\u043D\u0430"};C.Bd6={1:"krava",2:"\u041A\u0440\u0430\u0432\u0430"
,3:"\u725B",4:"Kr\xE1va",0:"Cow",5:"Koe",6:"Lehm",7:"Lehm\xE4",8:"Vache",9:"Kuh"
,10:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1",13:"Ku",15:"\u041A\u043E\u0440\u043E\u0432\u0430"
,16:"Vaca",17:"Inek",18:"\u041A\u043E\u0440\u043E\u0432\u0430"};C.Bd7={1:"krava"
,2:"\u043A\u0440\u0430\u0432\u0430",3:"\u725B",0:"cow",5:"koe",6:"lehm",7:"Lehm\xE4"
,8:"vache",9:"Kuh",10:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1",13:"ku",15:"\u041A\u043E\u0440\u043E\u0432\u0430"
,16:"vaca",17:"Inek",18:"\u043A\u043E\u0440\u043E\u0432\u0430"};C.Bd8={1:"krave"
,2:"\u043A\u0440\u0430\u0432\u0438",3:"\u5976\u725B",0:"cows",5:"koeien",6:"lehmad"
,7:"lehm\xE4t",8:"vaches",9:"K\xFChe",10:"\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2"
,13:"Kyr",15:"\u041A\u043E\u0440\u043E\u0432\u044B",16:"vacas",17:"\u0130nekler"
,18:"\u043A\u043E\u0440\u043E\u0432\u0438"};C.AAv={0:"Create backup",8:"Sauvegarder les donn\xE9s"
,9:"Datensicherung erstellen"};C.Bd9={1:"Kreiranje {1} novih \u017Eivotinja\n\n{2}%% obavljeno\n\nregistracija \u017Eivotinje "+
"{3}",2:"\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 {1} "+
"\u043D\u043E\u0432\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438\n\n{2} "+"%% \u0433\u043E\u0442\u043E\u0432\u043E\n\n\u0421\u044A\u0437\u0434\u0430\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E {3}",3:"\u5EFA\u7ACB{1}\u96BB\u65B0\u5C0F\u725B\n\n{2} %%\u5DF2\u5B8C\u6210\n\n{3}\u96BB\u5C0F\u725B\u5EFA\u7ACB\u4E2D"
,4:"Zad\xE1v\xE1n\xED {1} nov\xFDch zv\xED\u0159at\n\n{2} %% hotovo\n\nVytvo\u0159en\xED "+
"zv\xED\u0159ete {3}",0:"Creation of {1} new animals\n\n{2} %% done\n\nCreating animal {3}"
,5:"Aanleggen van {1} nieuwe dieren\n\n{2} %% gedaan\n\nLeg dier {3} aan",6:"{1} Uue looma registreerimine tehtud. Registreerin\n\n{2} %% looma {3}"
,7:"{1} uusien el\xE4inten luominen\n\n{2} %% valmis\n\nLuo el\xE4int\xE4 {3}",8:
"Cr\xE9ation de {1} nouveaux animaux\n\n{2} %% fait\n\nCr\xE9ation d\u2019animal "+
"{3}",9:"Anlegen von {1} neuen Tieren\n\n{2} %% erledigt\n\nLege Tier {3} an",10:
"\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 {1} \u03BD\u03AD\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD\n\n{2} %% \u03AD\u03B3\u03B9\u03BD\u03B5\n\n\u039D\u03AD\u03BF "+
"\u03B6\u03CE\u03BF \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"{3}",13:"Opprettelse av {1}nye dyrs\n\n{2} %% ferdig\n\nSkaper dyr {3}",15:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 {1} \u043D\u0430\u0432\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445\n\n{2} %% \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u043E\n\n\u0421\u043E\u0437\u0434\u0430\u0442\u044C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {3}",16:"Creando entrada de {1} animales nuevos\n\n{2} %% finalizado\n\nCreando "+
"animal {3}",18:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F {1} \u043D\u043E\u0432\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\n\n{2} %% \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043E\n\n\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 {3}"};C.MT={1:"trenutna te\u017Eina"
,2:"\u0422\u0435\u043A\u0443\u0449\u043E \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u76EE\u524D\u7684\u9AD4\u91CD",4:"Aktu\xE1ln\xED v\xE1ha",0:"Current weight"
,5:"Huidig gewicht",6:"Paegune kaal",7:"Nykyinen paino",8:"Poids actuel",9:"Aktuelles Gewicht"
,10:"\u03A4\u03C1\u03AD\u03C7\u03C9\u03BD \u03B2\u03AC\u03C1\u03BF\u03C2",13:"N\xE5v\xE6rende vekt"
,15:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0435\u0441",16:"Peso actual"
,18:"\u041D\u0438\u043D\u0456\u0448\u043D\u044F \u0432\u0430\u0433\u0430"};C.Bd$={
1:"trenutno",2:"\u0422\u0435\u043A\u0443\u0449",3:"\u76EE\u524D\u7684",4:"Aktu\xE1ln\xED hmotnost zkr\xE1cen\xE1"
,0:"Current",5:"Huidig",6:"Praegune",7:"Nykyinen",8:"Actuel",9:"Aktuelles",10:"\u03A4\u03C1\u03AD\u03C7\u03C9\u03BD"
,13:"N\xE5v\xE6rende",15:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439",16:"Actual"
,18:"\u041D\u0438\u043D\u0456\u0448\u043D\u0456\u0439"};C.Bec="DSP Herde";C.AAy={
1:"Dnevni prirast",2:"\u0414\u043D\u0435\u0432\u0435\u043D \u043F\u0440\u0438\u0440\u0430\u0441\u0442"
,3:"\u65E5\u589E\u91CD",4:"Denn\xED p\u0159\xEDr\u016Fstek na v\xE1ze",0:"Daily weight gain"
,5:"Dagelijkse toenames",6:"P\xE4evane juurdekasv",7:"P\xE4iv\xE4kasvu",8:"Croissance journali\xE8re"
,9:"T\xE4gliche Zunahmen",10:"\u0397\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03B1 \u03B1\u03CD\u03BE\u03B7\u03C3\u03B7 "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2",13:"Daglig tilvekst",15:"\u0414\u043D\u0435\u0432\u043D\u043E\u0439 \u043F\u0440\u0438\u0432\u0435\u0441"
,16:"Ganancia diaria",17:"G\xFCnl\xFCk a\u011F\u0131rl\u0131k art\u0131\u015F\u0131"
,18:"\u0414\u0435\u043D\u043D\u0438\u0439 \u043F\u0440\u0438\u0440\u0456\u0441\u0442"
};C.A23={1:"Majka",0:"Dam",7:"Em\xE4",8:"M\xE8re",9:"Muttertier",10:"\u039C\u03B7\u03C4\u03AD\u03C1\u03B1 \u03B6\u03CE\u03BF\u03C5"
,13:"Mor dyr",15:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,18:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430"
};C.AAz={1:"prikupljanje podataka",2:"\u0421\u044A\u0431\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u5C0F\u725B\u8CC7\u6599\u6536\u96C6",4:"Z\xEDsk\xE1v\xE1n\xED dat",0:"Data acquisition"
,6:"Andmete sisestamine",7:"Tiedonkeruu",8:"Acquisition de donn\xE9es",9:"Tierdatenerfassung"
,10:"\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,13:"Datainnsamling",15:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",16:"Recolecci\xF3n de datos"
,18:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445"
};C.A24={1:"prikupljanje podataka",2:"\u0421\u044A\u0431\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438"
,3:"\u5C0F\u725B\u8CC7\u6599\u6536\u96C6",0:"Data acquisition",6:"Andmete sisestamine"
,7:"Tiedonkeruu",8:"Acquisition de donn\xE9es",9:"Datenerfassung",10:"\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,13:"Datainnsamling",15:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
,16:"Recolecci\xF3n datos",18:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0434\u0430\u043D\u0438\u0445"
};C.A25={0:"Data export for",9:"Datenexport f\xFCr"};C.AAB={0:"Data management",
8:"Gestion des donn\xE9es",9:"Datenmanagement"};C.A26={1:"sinhronizacija podataka"
,2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",3:" \u8CC7\u6599\u540C\u6B65"
,4:"Synchronizace dat",0:"Data synchronisation",5:"Data synchronisatie",6:"Andmete s\xFCnkroniseerimine"
,7:"Tietojen synkronointi ruokkijalle",8:"Synchronisation des donn\xE9es",9:"Datensynchronisation"
,10:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD",13:"Data synkronisering"
,15:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"
,16:"Sincronizaci\xF3n de datos",17:"Bilgi senkronizasyonu",18:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F "+
"\u0434\u0430\u043D\u0438\u0445 \u0456\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"
};C.Bed={1:"sinhronizacija podataka u toku {1}%% / obavljena",2:"\u0418\u0437\u0432\u044A\u0440\u0448\u0432\u0430 \u0441\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\n\n{1} %% \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u043D\u043E"
,3:"\u8CC7\u6599\u540C\u6B65\u4E2D\n\n{1} %% \u5B8C\u6210",4:"Synch. dat prob\xEDh\xE1\n{1} %% hotovo"
,0:"Data synchronization in progress\n\n{1} %% done",5:"Data word gesynchroniseerd\n\n{1} gedaan %%"
,6:"Andmete s\xFCnkroniseerimine t\xF6\xF6s\n\n{1} %% valmis",7:"Tiedon synkronointi k\xE4ynniss\xE4\n\n{1} %% valmis"
,8:"Synchronisation des donn\xE9es en cours\n\n{1} %% fait",9:"Daten werden synchronisiert\n\n{1} %% erledigt"
,10:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7\n\n{1} "+
"%%\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5",13:
"Datasynkronisering p\xE5g\xE5r\n\n{1} %% ferdig",15:"\u0421\u0438\u043D\u0445\u0440. \u0434\u0430\u043D\u043D\u044B\u0445\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E",16:"Sincronizaci\xF3n de datos en curso\n\n{1} %% finalizado"
,17:"Bilgi senkronizasyonu i\u015Flemde\n\n{1} %%",18:"\u0421\u0438\u043D\u0445\u0440. \u0434\u0430\u043D\u0438\u0445\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E"};C.Date={1:"datum",2:"\u0414\u0430\u0442\u0430"
,3:"\u65E5\u671F",4:"Datum",0:"Date",5:"Datum",6:"Kuup\xE4ev",7:"P\xE4iv\xE4",9:
"Datum",10:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",13:"Dato"
,15:"\u0414\u0430\u0442\u0430",16:"Fecha",17:"Tarih",18:"\u0414\u0430\u0442\u0430"
};C.AfW={1:"datum ro\u0111enja",2:"\u0414\u0430\u0442\u0430 \u043D\u0430 \u0440\u0430\u0436\u0434."
,3:"\u751F\u65E5",4:"Datum narozen\xED",0:"Date of birth",5:"Geboortedatum",6:"S\xFCnnikuup\xE4ev"
,7:"Syntym\xE4p\xE4iv\xE4",8:"Date de naissance",9:"Geburtsdatum",10:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2"
,11:"Data di nascita",13:"F\xF8dselsdato",14:"Data urodzenia",15:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
,16:"Fecha de nacimiento",17:"Do\u011Fum tarihi",18:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bee={0:"DDMMYYYY",9:"TTMMJJJJ"};C.AAC={1:"datum i vrijeme",2:"\u0414\u0430\u0442\u0430 \u0438 \u0447\u0430\u0441"
,3:"\u65E5\u671F&\u6642\u9593",4:"Datum a \u010Das",0:"Date & Time",5:"Datum & Tijd"
,6:"Kuup\xE4ev ja Aeg",7:"P\xE4iv\xE4 & Aika",8:"Date et heure",9:"Datum & Uhrzeit"
,10:"\u0397\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 "+
"\u03CE\u03C1\u03B1",13:"Dato & Tid",15:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F"
,16:"Fecha & hora",17:"Tarih & Saat",18:"\u0414\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441"
};C.Gu={1:"dan",2:"\u0434\u0435\u043D",3:"\u65E5",4:"Den",0:"day",5:"Dag",6:"p\xE4ev"
,7:"P\xE4iv\xE4",8:"jour",9:"Tag",10:"\u0397\u03BC\u03AD\u03C1\u03B1",13:"Dag",15:
"\u0434\u0435\u043D\u044C",16:"d\xEDa",18:"\u0434\u0435\u043D\u044C"};C.A28={2:"\u0414\u0435\u043D"
,3:"\u65E5",4:"Den",0:"Day",5:"Dag",6:"P\xE4ev",7:"P\xE4iv\xE4",8:"Jour",9:"Tag"
,10:"\u0397\u03BC\u03AD\u03C1\u03B1",13:"Dag",15:"\u0414\u0435\u043D\u044C",16:"D\xEDa"
,18:"\u0414\u0435\u043D\u044C"};C.J9={1:"dani",2:"\u0434\u043D\u0438",3:"\u5929\u6578"
,4:"Dny",0:"days",5:"Dagen",6:"p\xE4evad",7:"P\xE4iv\xE4t",8:"jours",9:"Tage",10:
"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2",13:"Dager",15:"\u0414\u043D\u0438",16:"d\xEDas"
,17:"g\xFCnler",18:"\u0414\u043D\u0456\u0432"};C.Bef={1:"dani",2:"\u0434\u043D\u0438"
,3:"\u5929\u6578",4:"Dny",0:"days",5:"Dagen",6:"p\xE4evad",7:"P\xE4iv\xE4t",8:"jours"
,9:"Tagen",10:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2",13:"Dager",15:"\u0414\u043D\u0435\u0439"
,16:"d\xEDas",18:"\u0414\u043D\u0456\u0432"};C.A29={1:"dani / alarm",2:"\u0414\u043D\u0438 \u0441 \u0430\u043B\u0430\u0440\u043C\u0430"
,3:"\u8B66\u5831\u5929\u6578",4:"Dny v upozorn\u011Bn\xED",0:"Days in alarm",5:"Alarmdagen"
,6:"P\xE4evi hoiatuses",7:"H\xE4lytys~p\xE4iv\xE4t",8:"Jours \xE9tat d\u2019alerte"
,9:"Tage in Alarm",10:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CC"
,13:"Dager i alarm",15:"\u0414\u043D\u0438 \u043D\u0430 \u0442\u0440\u0435\u0432\u043E\u0433\u0435"
,16:"D\xEDas en estado de alarma",18:"\u0414\u043D\u0456\u0432 \u0443 \u0442\u0440\u0438\u0432\u043E\u0437\u0456"
};C.Beg={1:"dani / temperatura",2:"\u0414\u043D\u0438 \u0441 \u0442\u0440\u0435\u0441\u043A\u0430"
,3:"\u767C\u71D2\u5929\u6578",4:"Dny v hore\u010Dce",0:"Days in fever",5:"Koorts dagen"
,6:"P\xE4evi palavikus",7:"Kuumep\xE4iv\xE4t",8:"Des jours de fi\xE8vre",9:"Fiebertage"
,10:"\u0397\u03BC\u03AD\u03C1\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03C5\u03C1\u03B5\u03C4\u03CC"
,13:"Dager med feber",15:"\u0414\u043D\u0435\u0439 \u0441 \u0442\u0435\u043C~\u043F\u0435~\u0440\u0430~\u0442\u0443\u0440\u043E\u0439"
,16:"D\xEDas con fiebre",18:"\u0414\u043D\u0456\u0432 \u0437 \u0442\u0435\u043C~\u043F\u0435~\u0440\u0430~\u0442\u0443\u0440\u043E\u044E"
};C.A2_={0:"Days on watch",9:"Tage unter Beobacht."};C.AiO={1:"zadane vrijednosti"
,2:"\u0421\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435"
,3:"\u51FA\u5EE0\u8A2D\u5B9A",4:"V\xFDchoz\xED hodnoty",0:"Default values",5:"Standaard waardes"
,6:"Vaikimisi v\xE4\xE4rtused",7:"Oletusarvot",8:"Valeurs standards",9:"Standardwerte"
,10:"\u03A0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03B1\u03BE\u03AF\u03B5\u03C2",13:"Standardverdier",15:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"
,16:"Valores por defecto",17:"De\u011Ferleri s\u0131f\u0131rla",18:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C"
};C.Delete={1:"izbrisati",2:"\u0418\u0437\u0442\u0440\u0438\u0439",3:"\u522A\u6389"
,4:"Smazat",0:"Delete",5:"Verwijderen",6:"Kustuta",7:"Poista",8:"Effacer",9:"L\xF6schen"
,10:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",13:"Slett",15:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
,16:"Borrar",18:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"};C.AlQ={1:"Izbrisati podatke o \u017Eivotinji?"
,2:"\u0414\u0430 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0435 \u043B\u0438 "+
"\u0437\u0430\u043F\u0438\u0441\u044A\u0442 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E?"
,0:"Delete animal record?",6:"Kustuta looma andmed?",7:"Poistetaanko el\xE4intietue?"
,8:"Supprimer le registre des animaux\xA0?",9:"Tierdatensatz l\xF6schen?",10:"\u039D\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C8\u03C9 \u03C4\u03BF "+
"\u03B1\u03C1\u03C7\u03B5\u03AF\u03BF \u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5;"
,13:"Slette registeret av dyr?",15:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C "+
"\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C?",18:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441 "+
"\u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0443?"};C.Hv={1:"modus prezentacije"
,2:"\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u0435\u043D "+
"\u0440\u0435\u0436\u0438\u043C",3:"\u793A\u7BC4\u6A21\u5F0F",4:"Uk\xE1zkov\xFD re\u017Eim"
,0:"Demonstration mode",5:"Demonstratiemodus",6:"Demoseisund",7:"Demotila",8:"Mode de pr\xE9sentation"
,9:"Pr\xE4sentationsmodus",10:"\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03B1 \u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2"
,13:"Demonstrasjons modus",15:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438"
,16:"Modo de presentaci\xF3n",18:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457"
};C.A3c={0:"Derivation from transponder number",8:"D\xE9rivation du n\xB0 du transpondeur"
,9:"Ableitung von Transpondernummer",15:"\u0412\u044B\u0432\u043E\u0434 \u0438\u0437 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430",18:"\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A \u0456\u0437 \u043D\u043E\u043C\u0435\u0440\u0443 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"};C.Bek={
1:"Opis kolone",2:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u044F "+
"\u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u0438",3:"\u6A19\u984C\u8AAA\u660E"
,4:"Popis z\xE1hlav\xED sloupc\u016F",0:"Descript. column headers",5:"Toelichting titel"
,6:"Veeru kirjeldus",7:"Kuvaus sarakkeen otsikot",8:"Descript. titres colonnes",
9:"Erl\xE4uterung Spaltentitel",10:"\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03C0\u03B9\u03BA\u03B5\u03C6\u03B1\u03BB\u03AF\u03B4\u03C9\u03BD"
,13:"Beskriv kolonne overskrifter",15:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043A \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E "+
"\u0441\u0442\u043E\u043B\u0431\u0446\u0430",16:"Descr. t\xEDtulos columna",18:"\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0434\u043E \u043D\u0430\u0437\u0432\u0438 "+
"\u0441\u0442\u043E\u0432\u043F\u0447\u0438\u043A\u0430"};C.Device={1:"aparat",2:
"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E",3:"\u8A2D\u5099",
4:"Za\u0159\xEDzen\xED",0:"Device",5:"Apparaat",6:"Seade",7:"Laite",8:"Appareil"
,9:"Ger\xE4t",10:"\u03A3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE",13:"Enhet",15:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E"
,16:"Dispositivo",17:"Cihaz",18:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439"
};C.A3d={1:"aktivnosti aparata",0:"Device actions",6:"Seadme toimingud",7:"Laitetoiminnot"
,8:"Actions de dispositif",9:"Ger\xE4teaktionen",10:"\u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,13:"Enhets handlinger",15:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,18:"\u0414\u0456\u0457 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"};C.Bel={
1:"upravlja\u010Dki program ure\u0111aja USB C",0:"Device driver USB C",6:"Seadme draiver USB C"
,7:"Laiteohjain USB C",8:"Pilote du dispoitif USB C",9:"Ger\xE4tetreiber USB C",
10:"\u039F\u03B4\u03B7\u03B3\u03CC\u03C2 USB C \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,13:"Enhets driver USBC",15:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"USB C",18:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u0437 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"USB C"};C.A3e={1:"upravlja\u010Dki program ure\u0111aja",0:"Device drivers",6:"Seadme draiverid"
,7:"Laiteajurit",8:"Pilote du dispositif",9:"Ger\xE4tetreiber",10:"\u039F\u03B4\u03B7\u03B3\u03BF\u03AF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,13:"Enhets drivere",15:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,18:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.Difficult={1:"te\u0161ko",2:"\u0422\u0440\u0443\u0434\u043D\u043E",0:"Difficult"
,6:"Keeruline",7:"Vaikea",8:"Difficile",9:"Schwer",10:"\u0394\u03CD\u03C3\u03BA\u03BF\u03BB\u03BF"
,13:"Vanskelig",15:"\u0422\u0440\u0443\u0434\u043D\u043E",18:"\u0412\u0430\u0436\u043A\u043E"
};C.E6={1:"broj",2:"\u0446\u0438\u0444\u0440\u0430",3:"\u4F4D\u6578",4:"\u010C\xEDslice"
,0:"digit",5:"Cijfer",6:"number",7:"Numero",8:"chiffre",9:"Ziffer",10:"\u03A8\u03B7\u03C6\u03AF\u03BF"
,13:"Siffer",15:"\u0426\u0438\u0444\u0440\u0430",16:"d\xEDgito",18:"\u0426\u0438\u0444\u0440\u0430"
};C.AiR={1:"brojevi",2:"\u0446\u0438\u0444\u0440\u0438",3:"\u6578\u5B57",4:"\u010C\xEDslice"
,0:"digits",5:"Cijfers",6:"numbrid",7:"Numerot",8:"chiffres",9:"Ziffern",10:"\u03A8\u03B7\u03C6\u03AF\u03B1"
,13:"Sifre",15:"\u0426\u0438\u0444\u0440\u044B",16:"d\xEDgitos",17:"Say\u0131lar"
,18:"\u0426\u0438\u0444\u0440\u0438"};C.AAG={1:"Novi ID: brojevi",2:"\u0411\u0440\u043E\u0439 \u0446\u0438\u0444\u0440\u0438 \u0437\u0430 \u043D\u043E\u0432 "+
"\u2116",3:"\u65B0ID\u7684\u6578\u5B57",4:"\u010C\xEDslice nov\xE9ho ID",0:"Digits of new ID"
,6:"Uue ID number",7:"Uusi ID-numero",8:"Chiffres du nouvel ID",9:"Neue ID: L\xE4nge"
,10:"\u03A8\u03B7\u03C6\u03AF\u03B1 \u03BD\u03AD\u03B1\u03C2 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2"
,13:"Sifre i ny ID",15:"\u041D\u043E\u0432\u044B\u0439\u2116:\u0434\u043B\u0438\u043D\u0430"
,16:"D\xEDgitos de ID nueva",17:"Yeni ID say\u0131lar\u0131",18:"\u041D\u043E\u0432\u0438\u0439\u2116:\u0434\u043E\u0432\u0436\u0438\u043D\u0430"
};C.Display={0:"Display",9:"Darstellung"};C.A3h={1:"prikazane informacije",2:"\u041F\u043E\u043A\u0430\u0437\u0432\u0430\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
,3:"\u986F\u793A\u7684\u8A0A\u606F",4:"Zobrazen\xED info",0:"Displayed info",5:"Weergegeven informatie"
,6:"Kuva info",7:"N\xE4ytetyt tiedot",8:"Informations affich\xE9es",9:"Angezeigte Info"
,10:"\u0395\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03BC\u03AD\u03BD\u03B5\u03C2 "+
"\u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2",13:"Vist info"
,15:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u0430\u044F "+
"\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",16:"Informaci\xF3n mostrada"
,18:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0430 "+
"\u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"};C.K3={1:"obavljeno"
,2:"\u0413\u043E\u0442\u043E\u0432\u043E",0:"done",6:"Tehtud",7:"Tehty",8:"fait"
,9:"erledigt",10:"\u0388\u03B3\u03B9\u03BD\u03B5",13:"Ferdig",15:"\u0433\u043E\u0442\u043E\u0432\u043E"
,18:"\u0433\u043E\u0442\u043E\u0432\u043E"};C.ALK={1:"Zasu\u0161eno",0:"Dried-off"
,7:"Umpeutettu",8:"Tarie",9:"Trocken~stehend",10:"\u03A3\u03C4\u03B5\u03B9\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5"
,13:"T\xF8rket-av",15:"\u0421\u0443\u0445~\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435"
,18:"\u0421\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456"};C.BeB={1:"upravlja\u010Dki program monitora"
,0:"Display driver",6:"Ekraani draiver",7:"N\xE4yt\xF6nohjain",8:"Pilote d\'\xE9cran"
,9:"Bildschirmtreiber",10:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03BF\u03B4\u03B7\u03B3\u03BF\u03CD"
,13:"Skjermdriver",15:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430"
,18:"\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u0435\u043A\u0440\u0430\u043D\u0443"
};C.BeC={1:"suho",0:"Dry",6:"Kinni",7:"Ummessa",8:"Tarie",9:"T",10:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03B1"
,13:"T\xF8rke",15:"\u0421\u0443\u0445\u043E\u0439",18:"\u0421\u0443\u0445\u0438\u0439"
};C.A3v={1:"zasu\u0161ene krave",0:"Dry cows",6:"Kinnislehmad",7:"Umpeutetut",8:
"Vaches taries",9:"Trockensteher",10:"\u03A3\u03C4\u03B5\u03AF\u03C1\u03B5\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B8\u03B5\u03C2"
,13:"Gjelskyr",15:"\u0421\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0435"
,18:"\u0421\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0456"};C.DryOff={1:
"zasu\u0161iti",0:"Dry off",7:"Umpeutus",8:"Tarissement",9:"Trocken~stellen",10:
"\u03A3\u03C4\u03B5\u03AF\u03C1\u03C9\u03C3\u03B5",13:"T\xF8rk-av",15:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
,18:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438"};C.BeD={1:"EEPROM mati\u010Dna plo\u010Da"
,0:"EEPROM Mainboard",6:"EEPROM emaplaat",7:"EEPROM -emolevy",8:"EEPROM carte -m\xE8re"
,10:"\u039A\u03B5\u03BD\u03C4\u03C1\u03B9\u03BA\u03AE \u03C0\u03BB\u03B1\u03BA\u03AD\u03C4\u03B1 "+
"EEPROM",13:"EEPROM hovedkort",15:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430 "+
"EEPROM",18:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0430 \u043F\u043B\u0430\u0442\u0430 "+
"EEPROM"};C.BeE={1:"EEPROMplo\u010Da",0:"EEPROM Torchboard",8:"EEPROM carte (lumi\xE8re)"
,10:"\u03A0\u03BB\u03B1\u03BA\u03AD\u03C4\u03B1 \u03C6\u03B1\u03BA\u03BF\u03CD "+
"EEPROM",13:"EEPROM Datakort"};C.BeF="ESC";C.AAM={1:"broj u\u0161ne markice",2:"\u0423\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430"
,0:"Ear tag number",6:"K\xF5rvam\xE4rgi number",7:"Korvamerkki numero",8:"Nr de la marque auriculaire"
,9:"Ohrmarkennr.",10:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5"
,13:"Nr p\xE5 \xF8remerke",15:"\u041D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438"
,18:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"
};C.Easy={1:"lako",2:"\u041B\u0435\u0441\u043D\u043E",0:"Easy",6:"Lihtne",7:"Helppo"
,8:"Facile",9:"Leicht",10:"\u0395\u03CD\u03BA\u03BF\u03BB\u03BF",13:"Lett",15:"\u043B\u0435\u0433\u043A\u043E"
,18:"\u041B\u0435\u0433\u043A\u043E"};C.Edit={1:"obrada",2:"\u041F\u0440\u043E\u043C\u0435\u043D\u0438"
,3:"\u7DE8\u8F2F",4:"Upravit",0:"Edit",5:"Bewerken",6:"Kohanda",7:"Muokkaa",8:"Changer"
,9:"Bearbeiten",10:"\u0394\u03B9\u03CC\u03C1\u03B8\u03C9\u03C3\u03B7",13:"Rediger"
,15:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",16:"Editar",18:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438"
};C.A3w={0:"Edit marked notice",9:"Mark. Meldung bearbeiten"};C.A3x={1:"obrada",
2:"\u041F\u0440\u043E\u043C\u0435\u043D\u0438",3:"\u7DE8\u8F2F\u503C",4:"Upravit"
,0:"Edit",5:"Veranderen",6:"Kohanda",7:"Muokkaa",8:"Changer",9:"\xC4ndern",10:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1"
,13:"Rediger",15:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",16:"Modificar"
,17:"D\xFCzenle",18:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438"};C.ALT={1:"Prazna lista \u017Eivotinja: nisu prona\u0111ene \u017Eivotinje po zadatim "+
"parametrima pretrage",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438:\n\u043D\u0435 \u0441\u0430 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438 "+
"\u0442\u0435\u043A\u0443\u0449\u0438 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 "+
"\u0437\u0430 \u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0435",0:"Empty animal list:\nno matching animals found with current filter criteria "+
"applied",6:"T\xFChjenda looma nimekiri:\nei leitud valiku p\xF5hist looma",7:"Tyhj\xE4 el\xE4inluettelo:\nvastaavia el\xE4imi\xE4 ei l\xF6ydy, jos nykyisi\xE4 "+
"suodatusehtoja on k\xE4ytetty",8:"Liste d\u2019animaux vide\xA0:\naucun animal trouv\xE9 avec les crit\xE8res "+
"de filtrage actuels appliqu\xE9s",9:"Leere Tierliste:\nmit den aktuell vereinbarten Filter~kriterien wurden "+
"keine Tiere gefunden",10:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD:\n\u03B4\u03AD\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 "+
"\u03C4\u03B1 \u03B4\u03BF\u03B8\u03AD\u03BD\u03C4\u03B1 \u03BA\u03C1\u03B9\u03C4\u03AE\u03C1\u03B9\u03B1 "+
"\u03C6\u03B9\u03BB\u03C4\u03C1\u03B1\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03BF\u03C2"
,13:"Tom dyreliste:\ningen samsvarende dyr funnet med bruk av gjeldende filterkriterier"
,15:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043F\u0443\u0441\u0442:\n\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 "+
"\u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0443\u044E\u0449\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",18:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043F\u0443\u0441\u0442\u0438\u0439:\n\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 "+
"\u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0447\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0456\u044F\u043C \u043F\u043E\u0448\u0443\u043A\u0443, "+
"\u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.ALU={1:"Prazna lista \u017Eivotinja: nisu prona\u0111ene \u017Eivotinje po zadatim "+
"parametrima pretrage",2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A "+
"\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u0438:\n\u043D\u0435 \u0441\u0430 "+
"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D "+
"\u0442\u0435\u043A\u0443\u0449 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 "+
"\u0437\u0430 \u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0435",0:"Empty animal list:\nno matching animals found with current filter criterion "+
"applied",6:"T\xFChjenda looma nimikiri:\nei leitud kriteeriumile vastavat looma"
,7:"Tyhj\xE4 el\xE4inluettelo:\nvastaavia el\xE4imi\xE4 ei l\xF6ydy, jos nykyinen "+
"suodatuskriteeri on k\xE4yt\xF6ss\xE4",8:"Liste d\u2019animaux vide\xA0:\naucun animal trouv\xE9 avec les crit\xE8res "+
"de filtrage actuels appliqu\xE9s",9:"Leere Tierliste:\nmit dem aktuell vereinbarten Filter~kriterium wurden "+
"keine Tiere gefunden",10:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B6\u03CE\u03C9\u03BD:\n\u03B4\u03AD\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 "+
"\u03C4\u03B1 \u03B4\u03BF\u03B8\u03AD\u03BD \u03BA\u03C1\u03B9\u03C4\u03AE\u03C1\u03B9\u03BF "+
"\u03C6\u03B9\u03BB\u03C4\u03C1\u03B1\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03BF\u03C2"
,13:"Tom dyreliste:\ningen samsvarende dyr funnet med bruk av gjeldende filterkriterium"
,15:"\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043F\u0443\u0441\u0442:\n\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 "+
"\u0432\u0440\u0435\u043C\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0443\u044E\u0449\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",18:"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u043F\u0443\u0441\u0442\u0438\u0439:\n\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 "+
"\u043C\u043E\u043C\u0435\u043D\u0442 \u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0447\u0438\u0445 "+
"\u043A\u0440\u0438\u0442\u0435\u0440\u0456\u044F\u043C \u043F\u043E\u0448\u0443\u043A\u0443, "+
"\u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.AiU={1:"Korak nazad"
,2:"\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 "+
"\u0432\u0441\u0438\u0447\u043A\u0438 + \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u043F\u043E\u0440\u044A\u0447\u043A\u0430\u0442\u0430",3:"\u5168\u90E8\u555F\u7528+\u91CD\u7F6E\u9806\u5E8F"
,0:"Enable all + reset order",6:"Luba k\xF5ik + l\xE4htesta k\xE4sk",7:"Ota k\xE4ytt\xF6\xF6n kaikki + nollausj\xE4rjestys"
,8:"R\xE9initialisation de l\u2019ordre",9:"Reihenfolge zur\xFCcksetzen",10:"\u0395\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03CC\u03BB\u03C9\u03BD + \u03B5\u03C0\u03B1\u03BD\u03B1\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",13:"Aktiver alle + tilbakestill rekkef\xF8lge"
,15:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"
,18:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0456\u0441\u0442\u044C"
};C.BeH={0:"Enter animal ID manually",8:"Saisir manuellement le n\xB0 de l\'animal"
,9:"Tiernr. manuell eingeben",15:"\u0412\u0432\u0435\u0441\u0442\u0438 ID \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0432\u0440\u0443\u0447\u043D\u0443\u044E",18:"\u0423\u0432\u0435\u0441\u0442\u0438 ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0432\u0440\u0443\u0447\u043D\u0443"};C.BeI={1:"Aparat \u0107e pre\u0107i u modus mirovanja za {#} minute. Za ponovno pokretanje "+
"pritisnite bilo koje dugme.",2:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u0449\u0435 \u0432\u043B\u0435\u0437\u0435 \u0432 \u0440\u0435\u0436\u0438\u043C "+
"\u043D\u0430 \u0437\u0430\u0441\u043F\u0438\u0432\u0430\u043D\u0435 \u0441\u043B\u0435\u0434 "+
"{#} \u043C\u0438\u043D\u0443\u0442\u0438. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 "+
"\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u0435\u043D \u043A\u043B\u0430\u0432\u0438\u0448, "+
"\u0437\u0430 \u0434\u0430 \u0432\u044A\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 "+
"\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u0430.",4:"P\u0159echod do \u0159e\u017Eimu sp\xE1nku za {#} minut. Stisknut\xEDm "+
"libovoln\xE9 kl\xE1vesy pokra\u010Dujte v \u010Dinnosti.",0:"Device will enter sleep mode in {#} minutes. Press any key to resume operation."
,5:"Apparaat word in {#} minuten in rustmodus gezet. Willekeurige toets drukken "+
"om verder te gaan.",6:"Seade l\xE4heb puhkeasendisse {#} min. Vajuta suvalist nuppu t\xFChistamaks "+
"k\xE4sku.",7:"Laite siirtyy lepotilaan {#} minuutissa. Jatka k\xE4ytt\xF6\xE4 painamalla "+
"mit\xE4 tahansa n\xE4pp\xE4int\xE4.",8:"L\u2019appareil va entrer en mode veille en {#} minutes. Appuyez sur une "+
"touche pour continuer.",9:"Ger\xE4t wird in {#} Minuten in den Ruhezustand versetzt. Eine beliebige "+
"Taste dr\xFCcken, um fortzufahren.",10:"\u0397 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B8\u03B1 \u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03C3\u03B5 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03B1\u03BD\u03B1\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2 "+
"\u03C3\u03B5 {#} \u03BB\u03B5\u03C0\u03C4\u03B1. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 "+
"\u03BF\u03C0\u03BF\u03B9\u03BF\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF "+
"\u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 "+
"\u03C4\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1.",13:
"Enheten g\xE5r i hvilemodus om {#} minutter. Trykk p\xE5 hvilken som helst "+"tast for \xE5 gjenoppta driften."
,16:"El dispositivo entrar\xE1 en modo de reposo dentro de {#} minutos. Pulse "+
"cualquier bot\xF3n para continuar.",17:"Cihaz {#} dakika sonra uyku moduna ge\xE7iyor. \u0130\u015Flemi s\u0131f\u0131rlamak "+
"i\xE7in herhangi bir tu\u015Fa bas\u0131n.",18:"\u0420\u0435\u0436\u0438\u043C \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u0431\u0443\u0434\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u043E "+
"\u0447\u0435\u0440\u0435\u0437 {#} \u043C\u0438\u043D\u0443\u0442\u044B. "+"\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F "+
"\u043D\u0430\u0436\u043C\u0456\u0442\u044C \u0431\u0443\u0434\u044C \u044F\u043A\u0443 "+
"\u043A\u043B\u0430\u0432\u0456\u0448\u0443."};C.BeJ={1:"Kopitar / konj",0:"Equine/horse"
,6:"Hobune",8:"\xC9quid\xE9/cheval",9:"Einhufer/Pferd",10:"\u0386\u03BB\u03BF\u03B3\u03BF"
,13:"Hest",15:"\u041D\u0435\u043F\u0430\u0440\u043D\u043E\u043A\u043E\u043F\u044B\u0442\u043D\u044B\u0435 "+
"/ \u043B\u043E\u0448\u0430\u0434\u044C",18:"\u041D\u0435\u043F\u0430\u0440\u043D\u043E\u043A\u043E\u043F\u0438\u0442\u043D\u0456 "+
"/ \u043A\u0456\u043D\u044C"};C.BeK={0:"Error(s) when checking device drivers!\n\nWould you like to see detail "+
"information on the error(s)?",6:"Viga seadme draiverite kontrollimisel!\n\nKas soovite n\xE4ha vea (vigade) "+
"t\xE4psemat teavet?",7:"Virheit\xE4 laiteajureita tarkastettaessa!\n\nHaluatko n\xE4hd\xE4 tarkat "+
"tiedot virheist\xE4?",8:"Erreur lors de la v\xE9rification des pilotes de dispositif\xA0!"
,9:"Fehler bei der \xDCberpr\xFCfung der Ger\xE4tetreiber!\n\nM\xF6chten Sie "+"Informa~tion zu den aufgetrete~nen Fehler(n) erhalten?"
,10:"\u039B\u03AC\u03B8\u03BF\u03C2(\u03B7) \u03BA\u03B1\u03C4\u03AC \u03C4\u03BF\u03BD "+
"\u03AD\u03BB\u03B5\u03B3\u03C7\u03BF \u03C4\u03C9\u03BD \u03BF\u03B4\u03B7\u03B3\u03CE\u03BD "+
"\u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD!\n\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03BD\u03B1 \u03B4\u03B5\u03AF\u03C4\u03B5 \u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03BB\u03AC\u03B8\u03BF\u03C2(\u03B7);",13:"Feil(er) ved kontroll av enhetsdrivere!\n\nVil du se detaljert informasjon "+
"om feilen(e)?",15:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 "+
"\u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
,18:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 "+
"\u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E"
};C.A3y={1:"Evaluacija",2:"\u041E\u0446\u0435\u043D\u043A\u0430",0:"Evaluation",
6:"Hindamine",7:"Arviointi",8:"\xC9valuation",9:"Auswerten",10:"\u0391\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7"
,13:"Evaluering",15:"\u041E\u0446\u0435\u043D\u043A\u0430",16:"Evaluaci\xF3n",18:
"\u041E\u0446\u0456\u043D\u043A\u0430"};C.A3z={1:"Statistika te\u017Eine pri ro\u0111enju se ne mo\u017Ee obra\u010Dunati!"
,0:"Birth weight statistics cannot be calculated!",6:"S\xFCnnikaalu statistikat ei saa arvutada!"
,7:"Syntym\xE4~painotilastoja ei voi laskea!",8:"Les statistiques sur le poids de naissance ne peuvent pas \xEAtre calcul\xE9es!"
,9:"Statistiken zu den Geburtsgewichten k\xF6nnen nicht berechnet werden!",10:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 \u03B3\u03AD\u03BD\u03BD\u03B1\u03C2 "+"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!",13:"F\xF8dselsvektstatistikk kan ikke beregnes!"
,15:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0432\u0435\u0441\u0430 "+
"\u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E "+
"\u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!",18:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0432\u0430\u0433\u0438 "+
"\u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"
};C.EvaluationInProgress={1:"Obra\u010Dun stopa seo bra\u010Dunava\u2026\n\nMolim vas budite strpljivi!\n\n{1}%% "+
"obavljeno",0:"Calculation of performance parameters in progress\u2026\n\nPlease be patient!\n\n{1} "+
"%% done",6:"Tulemusparameetrite arvutamine...\n\nPalun oodake!\n\n{1} %% valmis"
,7:"Suorituskykyparametreja lasketaan\u2026\n\nOle k\xE4rsiv\xE4llinen!\n\n{1} "+
"%% valmis",8:"Calcul des param\xE8tres de performance en cours\u2026\n\n{1} %% fait"
,9:"Erfolgsgr\xF6\xDFen werden berechnet\u2026\n\nEtwas Geduld bitte!\n\n{1} "+"%% erledigt"
,10:"\u03A5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03C4\u03C1\u03C9\u03BD "+
"\u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7\u03C2 \u03C2\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7...\n\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+
"\u03C0\u03B5\u03C1\u03B9\u03BC\u03AD\u03BD\u03B5\u03C4\u03B5!\n\n{1} %% "+"\u03AD\u03B3\u03B9\u03BD\u03B5"
,13:"Beregning av ytelsesparametere p\xE5g\xE5r...\n\nVennligst v\xE6r t\xE5lmodig!\n\n{1} "+
"%% ferdig",15:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0443\u0441\u043F\u0435\u0445\u0430 "+
"\u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F\u2026\n\n\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435!\n\n{1} %% \u0433\u043E\u0442\u043E\u0432\u043E"
,18:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0443\u0441\u043F\u0456\u0445\u0443 "+
"\u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F\u2026\n\n\u0431\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435!\n\n{1} "+
"%% \u0433\u043E\u0442\u043E\u0432\u043E"};C.A3A={1:"Gubitak teladi se ne mo\u017Ee obra\u010Dunati!"
,0:"Calf losses cannot be calculated!",6:"Surnud vasikaid ei saa arvutada!",7:"Vasikkah\xE4vi\xF6it\xE4 ei voi laskea!"
,8:"Les pertes de veaux ne peuvent pas \xEAtre calcul\xE9es\xA0!",9:"K\xE4lberverluste k\xF6nnen nicht berechnet werden!"
,10:"\u0394\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD "+"\u03BF\u03B9 \u03B1\u03C0\u03CE\u03BB\u03B5\u03B9\u03B5\u03C2 \u03C4\u03C9\u03BD "+
"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD!",13:"Kalvetap kan ikke beregnes!",15:"\u041F\u043E\u0442\u0435\u0440\u0438 \u0442\u0435\u043B\u044F\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E "+
"\u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!",18:"\u0412\u0442\u0440\u0430\u0442\u0438 \u0442\u0435\u043B\u044F\u0442 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E "+
"\u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"};C.A3B={1:
"Statisti\u010Dke podatke u svrhu vrednovanja nije mogu\u0107e obra\u010Dunati!"
,0:"Statistics for evaluation purposes cannot be calculated!",6:"Hindamiseks m\xF5eldud statistikat ei saa arvutada!"
,7:"Tilastot arviointia varten ei voida laskea!",8:"Les statistiques d\u2019\xE9valuation ne peuvent pas \xEAtre calcul\xE9es\xA0!"
,9:"Statistische Gr\xF6\xDFen zur Auswertung k\xF6nnen nicht berechnet werden!",
10:"\u03A4\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BA\u03B1\u03AF\u03B1 \u03B3\u03B9\u03B1 "+
"\u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!"
,13:"Statistikk for evaluerings form\xE5l kan ikke beregnes!",15:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 "+
"\u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B!"
,18:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u043B\u044F \u043E\u0446\u0456\u043D\u043A\u0438 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C "+
"\u0431\u0443\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0456!"
};C.A3C={1:"Statistika temperature se ne mo\u017Ee izra\u010Dunati!",0:"Temperature statistics cannot be calculated!"
,6:"Temperatuuri statistikat ei saa arvutada!",7:"L\xE4mp\xF6tilatilastoja ei voi laskea!"
,8:"Les statistiques de temp\xE9rature ne peuvent pas \xEAtre calcul\xE9es\xA0!"
,9:"Temperaturstatisti~ken k\xF6nnen nicht berechnet werden.",10:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!",13:"Temperaturstatistikk kan ikke beregnes!"
,15:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B "+
"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C."
,18:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 "+
"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438."
};C.A3D={1:"Obra\u010Dun prirasta u kg se ne mo\u017Ee izra\u010Dunati!",0:"Weight development statistics cannot be calculated!"
,6:"Kaalu suurenemise statistikat ei saa arvutada!",7:"Painon kehitystilastoja ei voi laskea"
,8:"Les statistiques sur le d\xE9veloppement du poids ne peuvent pas \xEAtre "+"calcul\xE9es\xA0!"
,9:"Erfolgsgr\xF6\xDFen zur Gewichtsentwick~lung k\xF6nnen nicht berechnet "+"werden!"
,10:"\u03A4\u03B1 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"\u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7\u03C2 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+"\u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03BF\u03CD\u03BD!"
,13:"Vektutviklings statistikk kan ikke beregnes!",15:"\u0424\u0430\u043A\u0442\u043E\u0440\u044B \u0443\u0441\u043F\u0435\u0445\u0430 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0432\u0435\u0441\u0430 "+"\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C!"
,18:"\u0424\u0430\u043A\u0442\u043E\u0440\u0438 \u0443\u0441\u043F\u0456\u0445\u0443 "+
"\u0440\u043E\u0437\u0432\u0438\u0442\u043A\u0443 \u0432\u0430\u0433\u0438 "+"\u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438!"
};C.A3E={0:"Export animal data (csv)",9:"Tierdaten exportieren (CSV)"};C.AL8={0:
"Export csv list of births",6:"Ekspordi s\xFCndide nimekiri",7:"Vie syntym\xE4luettelo"
,8:"Exporter la liste de d\xE9claration HIT",9:"HIT-Meldeliste exportieren",10:"\u0395\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1\u03C2 "+
"\u03B3\u03B5\u03BD\u03BD\u03AE\u03C3\u03B5\u03C9\u03BD",13:"Eksport liste over f\xF8dsler"
,15:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"CSV \u0441\u043F\u0438\u0441\u043E\u043A \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0439"
,18:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 "+
"CSV \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u044C"
};C.AL9={0:"Export csv list of purchases",9:"Export CSV-Meldeliste"};C.Extended={
1:"Pro\u0161ireno",2:"\u0423\u0434\u044A\u043B\u0436\u0435\u043D",3:"\u64F4\u5C55"
,4:"Prodlou\u017Een\xE9",0:"Extended",5:"Uitgebreid",6:"Laiendatud",7:"Laajennettu"
,8:"\xC9tendu",9:"Erweitert",10:"\u0395\u03C0\u03B5\u03BA\u03C4\u03AC\u03B8\u03B7\u03BA\u03B5"
,13:"Forlenget",15:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435"
,16:"Ampliado",17:"Geni\u015Fletildi",18:"\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456"
};C.A3F={1:"Fabri\u010Dka pode\u0161avanja",2:"\u0424\u0430\u0431\u0440\u0438\u0447\u043D\u043E \u043D\u0443\u043B\u0438\u0440\u0430\u043D\u0435"
,3:"\u51FA\u5EE0\u8A2D\u5B9A\u503C",4:"Tov\xE1rn\xED nastaven\xED",0:"Factory reset"
,5:"Reset fabrieksinstellingen",6:"Tehase seaded",7:"Tehdasasetukset",8:"R\xE9initialisation d\u2019usine"
,9:"Reset Werkseinstellung",10:"\u0395\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AD\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",13:"Fabrikkinnstilt",15:
"\u0421\u0431\u0440\u043E\u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A"
,16:"Restablecer ajustes f\xE1brica",17:"Fabrika ayarlar\u0131",18:"\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C"
};C.BeM={0:"Error while creating backup on USB flash drive!",8:"\xC9chec de sauvegarde de donn\xE9es"
,9:"Bei der Erstellung der Daten~siche~rung auf dem USB-^Stick ist ein Fehler "+
"auf~ge~treten!"};C.BeN={0:"Error while restoring backup from USB flash drive!",
8:"\xC9chec de la restauration des donn\xE9es sauvegard\xE9es",9:"Bei der Wieder~her~stellung der Daten~siche~rung vom USB-^Stick ist ein "+
"Fehler auf~ge~treten!"};C.BeO={0:"Error when writing CSV file with birth notices to USB flash drive!"
,8:"Erreur lors de l\'\xE9criture du fichier CSV avec les d\xE9clarations de "+"naissance sur la cl\xE9 USB"
,9:"Beim Schreiben der CSV-Datei mit Geburts~mel~dun~gen auf den USB-^Stick "+"ist ein Fehler aufgetreten!"
,15:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C CSV \u0444\u0430\u0439\u043B "+
"\u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043D\u0430 USB "+"\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C!"
,18:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0441\u043F\u0440\u043E\u0431\u0456 "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u0438 CSV \u0444\u0430\u0439\u043B "+
"\u0456\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447!"
};C.BeP={0:"Error when writing CSV file with animal data to USB flash drive!",9:
"Fehler beim Export der Tierdaten auf den USB-Stick!"};C.BeQ={0:"Error when writing CSV file with purchase notices to USB flash drive!"
,9:"Beim Schreiben der CSV-Datei mit Zugangs~mel~dun~gen auf den USB-^Stick "+"ist ein Fehler aufgetreten!"
};C.AAS={0:"Farm",7:"Maatila",8:"Exploitation",9:"Betrieb",10:"\u03A6\u03AC\u03C1\u03BC\u03B1"
,13:"G\xE5rd",15:"\u0424\u0435\u0440\u043C\u0430",18:"\u0424\u0435\u0440\u043C\u0430"
};C.A3G={1:"Trenutne \u017Eivotinje sa temperaturom",0:"Currently febrile ill animals"
,6:"Praegu haiged ja palavikus loomad",7:"T\xE4ll\xE4 hetkell\xE4 kuumeisia el\xE4imi\xE4"
,8:"Animaux actuellement f\xE9briles",9:"Aktuell fiebrig erkrankte Tiere",10:"\u0395\u03C0\u03AF \u03C4\u03BF\u03C5 \u03C0\u03B1\u03C1\u03CC\u03BD\u03C4\u03BF\u03C2 "+
"\u03B5\u03BC\u03C0\u03CD\u03C1\u03B5\u03C4\u03B1 \u03AC\u03C1\u03C1\u03C9\u03C3\u03C4\u03B1 "+
"\u03B6\u03CE\u03B1",13:"Febersyke dyr",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u0439 "+"\u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438 \u0456\u0437 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E\u044E "+
"\u043D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u044E"};C.A3H={
1:"\u017Divotinje koje su u pro\u0161losti imale temperaturu!",0:"Animals with febrile illnesses during lifetime"
,6:"Loomad, kel on eluajal esinenud palavikuga haiguseid",7:"El\xE4imill\xE4, joilla on aiemmin\ndiagnosoitu kuume"
,8:"Animaux ayant fait \xE9tat de fi\xE8vre dans le pass\xE9",9:"Bereits ein- oder mehrmals\nfiebrig diagnostizierte Tiere"
,10:"\u0396\u03CE\u03B1 \u03BC\u03B5 \u03B5\u03BC\u03C0\u03CD\u03C1\u03B5\u03C4\u03B5\u03C2 "+
"\u03B1\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03BA\u03B1\u03C4\u03AC "+
"\u03C4\u03B7 \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 \u03C4\u03B7\u03C2 "+
"\u03B6\u03C9\u03AE\u03C2 \u03C4\u03BF\u03C5\u03C2",13:"Dyr med febersykdommer i l\xF8pet av livet"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 "+
"\u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E "+
"\u0440\u0430\u0437\n\u0431\u044B\u043B\u0430 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438, \u0443 \u044F\u043A\u0438\u0445 "+
"\u043E\u0434\u0438\u043D \u0447\u0438 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 "+
"\u0440\u0430\u0437 \u0431\u0443\u043B\u0430 \u0434\u0456\u0430\u0433\u043D\u043E\u0441\u0442\u043E\u0432\u0430\u043D\u0430 "+
"\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Feed={1:"Hrana",2:"\u0425\u0440\u0430\u043D\u0430",3:"\u7D66\u98FC",4:"Krmen\xED"
,0:"Feed",5:"Voer",6:"S\xF6\xF6t",7:"Rehu",8:"Nourriture",9:"Futter",10:"\u03A4\u03C1\u03BF\u03C6\u03AE"
,13:"F\xF4r",15:"\u041A\u043E\u0440\u043C",16:"Alimento",17:"Besleme",18:"\u041A\u043E\u0440\u043C"
};C.BeS={1:"Konzumacija hrane",2:"\u0418\u0437\u044F\u0434\u0435\u043D\u0430 \u0445\u0440\u0430\u043D\u0430"
,3:"\u63A1\u98DF",4:"Hodnocen\xED p\u0159\xEDjmu krmen\xED",0:"Feed intake",5:"Voeropname"
,6:"S\xF6\xF6mus",7:"Rehunsy\xF6nti",8:"Consommation",9:"Futterverzehr",10:"\u03A0\u03C1\u03CC\u03C3\u03BB\u03B7\u03C8\u03B7 \u03C4\u03C1\u03BF\u03C6\u03AE\u03C2"
,13:"F\xF4ropptak",15:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043C\u0430"
,16:"Ingesta de alimento",17:"Besin derecelendirmesi",18:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u043C\u0443"
};C.AMi={2:"\u0425",0:"F",7:"R",10:"\u03A4"};C.Female={1:"\u017Densko",2:"\u0416\u0435\u043D\u0441\u043A\u0438"
,3:"\u6BCD",4:"Sami\u010D\xED",0:"Female",5:"Vrouwelijk",6:"Emane",7:"Lehm\xE4",
8:"Femelle",9:"Weiblich",10:"\u0398\u03C5\u03BB\u03B7\u03BA\u03CC",13:"Hunn",15:
"\u0416\u0435\u043D\u0441\u043A\u0438\u0439",16:"Hembra",17:"Di\u015Fi",18:"\u0416\u0456\u043D\u043E\u0447\u0438\u0439"
};C.Fever={1:"Temperatura",2:"\u0422\u0440\u0435\u0441\u043A\u0430",3:"\u767C\u71D2"
,4:"Hore\u010Dka",0:"Fever",5:"Koorts",6:"Palavik",7:"Kuume",8:"Fi\xE8vre",9:"Fieber"
,10:"\u03A0\u03C5\u03C1\u03B5\u03C4\u03CC\u03C2",13:"Feber",15:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,16:"Fiebre",18:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.Filter={1:"filter",2:"\u0424\u0438\u043B\u0442\u044A\u0440",3:"\u904E\u6FFE"
,4:"Filtr",0:"Filter",7:"Suodatus",8:"Filtre",10:"\u03A6\u03AF\u03BB\u03C4\u03C1\u03BF"
,11:"Filtro",14:"Filtr",15:"\u0424\u0438\u043B\u044C\u0442\u0440",16:"Filtro",17:
"Filtre",18:"\u0424\u0456\u043B\u044C\u0442\u0440"};C.A3K={1:"a\u017Euriranje firmvera"
,2:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F "+"\u043D\u0430 \u0444\u044A\u0440\u043C\u0443\u0435\u0440\u0430"
,0:"Firmware update",6:"Tarkvara v\xE4rskenudus",7:"Laiteohjelmiston p\xE4ivitys"
,8:"Mise \xE0 jour du logiciel",9:"Aktualisierung Firmware",10:"\u0391\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03BF\u03CD"
,13:"Program oppdatering",15:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438"
,18:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438"
};C.A3L={0:"First start-up",8:"Premi\xE8re mise en service",9:"Erstinbetrieb~nahme"
};C.AAX={1:"Svjetlo",2:"\u0424\u0435\u043D\u0435\u0440\u0447\u0435",3:"\u624B\u96FB\u7B52"
,4:"Sv\xEDtilna",0:"Flashlight",5:"Lamp",6:"Taskulamp",7:"Valo",8:"Lumi\xE8re",9:
"Licht",10:"\u03A6\u03B1\u03BA\u03CC\u03C2",13:"Spotlys",15:"\u0424\u043E\u043D\u0430\u0440\u044C"
,16:"Linterna",17:"El feneri",18:"\u041B\u0456\u0445\u0442\u0430\u0440"};C.Af8={
1:"%d. %m. %Y",2:"%d.%m.%Y",4:"%d. %m. %Y",0:"%Y-%m-%d",5:"%d-%m-%Y",6:"%d.%m.%Y"
,7:"%d.%m.%Y",8:"%d/%m/%Y",9:"%d.%m.%Y",10:"%#d/%#m/%Y",11:"%d/%m/%Y",12:"%Y\u5E74%m\u6708%d\u65E5"
,13:"%d.%m.%Y",15:"%d-%m-%Y",16:"%d/%m/%Y",17:"%d.%m.%Y",18:"%d.%m.%Y"};C.Be0={1:
"%d. %m.",2:"%d.%m",4:"%d. %m.",0:"%m-%d",5:"%d-%m",6:"%d.%m",7:"%d.%m",8:"%d/%m"
,9:"%d.%m",10:"%#d/%#m",11:"%d/%m",12:"%m\u6708%d\u65E5",13:"%d.%m",15:"%d-%m",16:
"%d/%m",17:"%d.%m",18:"%d.%m"};C.Be1={1:"%H:%M %d. %m. %Y",2:"%H:%M %d.%m.%Y",4:
"%H:%M %d. %m. %Y",0:"%H:%M %Y-%m-%d",5:"%H:%M %d-%m-%Y",6:"%H:%M %d.%m.%Y",7:"%H:%M %d.%m.%Y"
,8:"%H:%M %d/%m/%Y",9:"%H:%M %d.%m.%Y",10:"%H:%M %#d/%#m/%Y",11:"%H:%M %d/%m/%Y"
,12:"%H:%M %Y\u5E74%m\u6708%d\u65E5",13:"%H:%M %d.%m.%Y",15:"%H:%M %d-%m-%Y",16:
"%H:%M %d/%m/%Y",17:"%H:%M %d.%m.%Y",18:"%H:%M %d.%m.%Y"};C.AMt={1:"Grla koja se muzu"
,2:"\u0421\u043A\u043E\u0440\u043E \u043E\u0442\u0435\u043B\u0435\u043D\u0438",0:
"Fresh cows",6:"Poeginud lehmad",7:"Tunnutettavat lehm\xE4t",8:"Vaches fra\xEEches"
,9:"Frischmelker",10:"\u03A6\u03C1\u03AD\u03C3\u03BA\u03B5\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2"
,13:"Friske dyr",15:"\u041D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u0430\u044F"
,16:"Vacas frescas",18:"\u041D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0430"
};C.A3R={1:"prikaz goriva",0:"Fuel gauge",6:"K\xFCtusetaseme n\xE4idik",7:"Polttoainemittar"
,8:"Indicateur de charge",9:"Ladeanzeige",10:"\u039C\u03B5\u03C4\u03C1\u03B7\u03C4\u03AE\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD"
,13:"Drivstoffm\xE5ler",15:"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u044F\u0434\u0430"
,18:"\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u044F\u0434\u0443"
};C.Be5={0:"This function is not available in the demo version!",8:"Cette fonction n\'est plus disponible dans la version d\xE9mo\xA0!"
,9:"Diese Funktion ist in der Demo~version nicht ver~f\xFCgbar!"};C.Bfv={1:"gr/dan"
,2:"\u0433/\u0434\u0435\u043D",3:"\u516C\u514B/\u65E5",4:"gram\u016F za den",0:"g/day"
,5:"g/dag",6:"g/p\xE4evas",7:"g/pv",8:"g/jour",9:"g/Tag",10:"\u03B3\u03C1./\u03BC\u03AD\u03C1\u03B1"
,13:"gr./pr dag",15:"\u0433/\u0434\u0435\u043D\u044C",16:"g/d\xEDa",17:"G\xFCnl\xFCk gram"
,18:"\u0433/\u0434\u0435\u043D\u044C"};C.EX={1:"grafi\u010Dki prikaz",2:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u043D \u0438\u0437\u0433\u043B\u0435\u0434"
,0:"Graphical view",6:"Graafiline vaade",7:"Graafinen n\xE4kym\xE4",8:"Vue graphique"
,9:"Grafische Ansicht",10:"\u0393\u03C1\u03B1\u03C6\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE"
,13:"Grafisk visning",15:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0438\u0434"
,18:"\u0413\u0440\u0430\u0444\u0456\u0447\u043D\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434"
};C.O={1:"grupa",2:"\u0413\u0440\u0443\u043F\u0430",3:"\u7FA4",4:"Skupina",0:"Group"
,5:"Groep",6:"Grupp",7:"Ryhm\xE4",8:"Groupe",9:"Gruppe",10:"\u039F\u03BC\u03AC\u03B4\u03B1"
,13:"Gruppe",15:"\u0413\u0440\u0443\u043F\u043F\u0430",16:"Grupo",17:"Grup",18:"\u0413\u0440\u0443\u043F\u0430"
};C.Bfx="HI-Tier";C.Bfy="Hardware";C.ANv={1:"krdo",2:"\u0421\u0442\u0430\u0434\u043E"
,3:"\u725B\u7FA4",4:"St\xE1do",0:"Herd",5:"Groep",6:"Kari",7:"Karja",8:"Troupeau"
,9:"Herde",10:"\u039A\u03BF\u03C0\u03AC\u03B4\u03B9",13:"Flokk",15:"\u0421\u0442\u0430\u0434\u043E"
,16:"Reba\xF1o",18:"\u0421\u0442\u0430\u0434\u043E"};C.A4b={1:"nakon zavr\u0161etka sakrij opciju"
,2:"\u0421\u043A\u0440\u0438\u0439 \u0441\u043B\u0435\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
,0:"Hide after action",6:"Peida peale tegevust",7:"Piilota toiminnan j\xE4lkeen"
,8:"Dissimuler apr\xE8s l\u2019action",9:"Nach Aktion ausblenden",10:"\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03BC\u03B5\u03C4\u03AC "+
"\u03B1\u03C0\u03CC \u03B4\u03C1\u03AC\u03C3\u03B7",13:"Skjul etter handling",15:
"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,18:"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0456\u0441\u043B\u044F "+
"\u0434\u0456\u0457"};C.BfA={1:"Ne prikazu izmjerena grla",2:"\u0421\u043A\u0440\u0438\u0439 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0442\u0435 "+
"\u043A\u0440\u0430\u0432\u0438",0:"Hide measured cows",6:"Peida m\xF5\xF5detud lehmad"
,7:"Piilota mitatut lehm\xE4t",8:"Masquer anim. mesur\xE9s",9:"Gemessene ausblenden"
,10:"\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03C4\u03C9\u03BD \u03BC\u03B5\u03C4\u03C1\u03B7\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD",13:"Skjul m\xE5lte dyr",15:"\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u043D\u043E\u0435"
,18:"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0435"
};C.At7={1:"visoko",2:"\u0412\u0438\u0441\u043E\u043A",3:"\u9AD8",4:"Vysok\xFD",
0:"High",5:"Hoog",6:"K\xF5rgus",7:"Korkeus",8:"Haut",9:"Hoch",10:"\u03A8\u03B7\u03BB\u03AC"
,13:"H\xF8y",15:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",16:"Alto",17:"Y\xFCksek"
,18:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439"};C.At8={0:"Home screen",9:"Startseite"
};C.HA={2:"\u2116",3:"\u8B58\u5225\u865F",0:"ID",10:"\u03A4\u03B1\u03C5\u03C4~\u03CC\u03C4\u03B7\u03C4\u03B1"
};C.A4c={0:"ID of dam",8:"N\xB0 de l\'animal m\xE8re",9:"ID Muttertier",10:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03BC\u03B7\u03C4\u03AD\u03C1\u03B1\u03C2",13:"ID til Mordyr",15:"ID \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F"
,18:"ID \u043C\u0430\u0442\u0435\u0440\u0456"};C.A4d={1:"ID prve \u017Eivotinje"
,2:"\u2116 \u043D\u0430 \u043F\u044A\u0440\u0432\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u7B2C\u4E00\u96BB\u5C0F\u725B\u7684\u8B58\u5225\u865F",4:"ID prvn\xEDho zv\xED\u0159ete"
,0:"ID of first animal",5:"ID van eerste dier",6:"Esimese looma ID",7:"Ensimm\xE4isen el\xE4imen ID"
,8:"ID du premier animal",9:"ID des ersten Tieres",10:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C0\u03C1\u03CE\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5",13:"ID for f\xF8rste dur"
,15:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u0435\u0440\u0432\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",16:"ID del primer animal"
,18:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u0435\u0440\u0448\u043E\u0457 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.ApH={1:"ID zadnje \u017Eivotinje",2:"\u2116 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u6700\u5F8C\u4E00\u96BB\u5C0F\u725B\u7684\u8B58\u5225\u865F",4:"ID posledn\xEDho zv\xED\u0159ete"
,0:"ID of last animal",5:"ID van laatste dier",6:"Viimase looma ID",7:"Viimeisen el\xE4imen ID"
,8:"ID dernier animal",9:"ID letztes Tier",10:"\u0391\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5"
,13:"ID for siste dyr",15:"ID-\u043D\u043E\u043C\u0435\u0440 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",16:"ID del \xFAltimo animal"
,18:"ID-\u043D\u043E\u043C\u0435\u0440 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.BfD={0:"in one day",6:"\xDChe p\xE4eva jooksul"
,8:"En une journ\xE9e",9:"in einem Tag",10:"\u039C\u03AD\u03C3\u03B1 \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03BC\u03AD\u03C1\u03B1"
,13:"P\xE5 en dag",15:"\u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C"
,18:"\u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C"};C.BfE={0:"in {DAYS} days"
,6:"{DAYS} p\xE4eva jooksul",8:"en {DAYS} jours",9:"in {DAYS} Tagen",10:"\u039C\u03AD\u03C3\u03B1 \u03C3\u03B5 {DAYS} \u03BC\u03AD\u03C1\u03B5\u03C2"
,13:"om {DAYS} dager",15:"\u0447\u0435\u0440\u0435\u0437 {DAYS} \u0434\u043D\u0435\u0439"
,18:"\u0447\u0435\u0440\u0435\u0437 {DAYS} \u0434\u043D\u0456\u0432"};C.BfF={1:"u pozadini"
,2:"\u0412\u044A\u0432 \u0444\u043E\u043D\u043E\u0432 \u0440\u0435\u0436\u0438\u043C"
,3:"\u81EA\u52D5\u767B\u9304",4:"Na pozad\xED",0:"In background",5:"In de achtergrond"
,6:"Taustal",7:"Taustalla",8:"En arri\xE8re-plan",9:"Im Hintergrund",10:"\u03A3\u03C4\u03BF \u03C0\u03B1\u03C1\u03B1\u03C3\u03BA\u03AE\u03BD\u03B9\u03BF"
,13:"I bakgrunnen",15:"\u0412 \u0444\u043E\u043D\u043E\u0432\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435"
,16:"En el fondo",18:"\u0423 \u0444\u043E\u043D\u043E\u0432\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456"
};C.BfG={1:"povi\u0161eno",2:"\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D",
3:"\u589E\u52A0",4:"Zv\xFD\u0161eno",0:"Increased",5:"Verhoogt",6:"T\xF5usnud",7:
"Lis\xE4\xE4ntynyt",8:"Augment\xE9",9:"Erh\xF6ht",10:"\u0391\u03C5\u03BE\u03B7\u03BC\u03AD\u03BD\u03BF"
,13:"\xD8kt",15:"\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043E",16:"Elevado",
17:"Y\xFCksektildi",18:"\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043E"};
C.A4p={1:"neplodno grlo",2:"\u0411\u0435\u0437\u043F\u043B\u043E\u0434\u0438\u0435"
,0:"Infertility",6:"Viljatus",7:"Hedelm\xE4tt\xF6myys",8:"Infertilit\xE9",9:"Unfruchtbarkeit"
,10:"\u0391\u03B3\u03BF\u03BD\u03AF\u03B1",13:"Infertilitet",15:"\u0411\u0435\u0441\u043F\u043B\u043E\u0434\u0438\u0435"
,18:"\u0411\u0435\u0437\u043F\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044C"};
C.Info="Info";C.BfH={0:"Info columns",8:"Colonnes d\'informations",9:"Infospalten"
};C.ABW={1:"Uvedite vrh mjernog instrumenta",2:"\u0412\u043A\u0430\u0440\u0430\u0439\u0442\u0435 \u0432\u044A\u0440\u0445\u0430 "+
"\u043D\u0430 \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u0442\u0435\u043B\u044F"
,3:"\u63D2\u5165\u6EAB\u5EA6\u8A08",4:"Vlo\u017Eit m\u011B\u0159en\xED",0:"Insert measuring tip"
,5:"Meetpunt inbrengen",6:"Sisesta m\xF5\xF5tmisvihje",7:"Aseta mittak\xE4rki",8:
"Ins\xE9rer la pointe\nde mesure",9:"Messspitze einf\xFChren",10:"\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03B1\u03BA\u03C1\u03BF\u03C6\u03CD\u03C3\u03B9\u03BF "+
"\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7\u03C2",13:"Sett inn m\xE5lespiss",15:
"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440"
,16:"Insertar la punta\nde medici\xF3n",18:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440"
};C.Bf3={1:"kilogram",2:"\u041A\u0438\u043B\u043E\u0433\u0440\u0430\u043C",3:"\u516C\u65A4"
,0:"Kilogram",6:"Kilogramm",7:"Kiloa",8:"Kilogramme",9:"Kilogramm",10:"\u039A\u03B9\u03BB\u03CC"
,15:"\u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C",16:"Kilogramos",18:
"\u043A\u0456\u043B\u043E\u0433\u0440\u0430\u043C"};C.AO7={1:"laktacija",2:"\u041B\u0430\u043A\u0442\u0430\u0446\u0438\u044F"
,0:"Lactation",6:"Laktatsioon",7:"Lypsy",9:"Laktation",10:"\u0393\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1"
,13:"Laktasjon",15:"\u041B\u0430\u043A\u0442\u0430\u0446\u0438\u044F",18:"\u041B\u0430\u043A\u0442\u0430\u0446\u0456\u044F"
};C.Bf4={1:"dan laktacije",0:"Day of lactation",6:"Laktatsiooni p\xE4ev",7:"Lypsyp\xE4iv\xE4"
,8:"Jour de lactation",9:"Laktations~tag",10:"\u0397\u03BC\u03AD\u03C1\u03B1 \u03B3\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1\u03C2"
,13:"Dager i laktasjonen",15:"\u0414\u0435\u043D\u044C \u043B\u0430\u043A\u0442\u0430\u0446\u0438\u0438"
,18:"\u0414\u0435\u043D\u044C \u043B\u0430\u043A\u0442\u0430\u0446\u0456\u0457"};
C.AB7={1:"Lakta~cija",2:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0438\u044F",0:"Lacta~tion"
,6:"Laktat~sioon",9:"Lakta~tion",10:"\u0393\u03B1\u03BB\u03BF\u03C5~\u03C7\u03AF\u03B1"
,13:"Lakta-\nsjon",15:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0438\u044F",18:"\u041B\u0430\u043A\u0442\u0430~\u0446\u0456\u044F"
};C.Bf5={1:"janje",2:"\u0410\u0433\u043D\u0435",3:"\u5C0F\u7F8A",4:"Jehn\u011B",
0:"Lamb",5:"Lam",6:"Tall",7:"Lammas",8:"Agneau",9:"Lamm",10:"\u0391\u03C1\u03BD\u03AF"
,13:"Lam",15:"\u042F\u0433\u043D\u044F\u0442",16:"Cordero",17:"Kuzu",18:"\u042F\u0433\u043D\u044F\u0442"
};C.Bf6={1:"janje",2:"\u0430\u0433\u043D\u0435",3:"\u5C0F\u7F8A",0:"lamb",5:"lam"
,6:"Tall",7:"lammas",8:"agneau",9:"Lamm",10:"\u03B1\u03C1\u03BD\u03AF",13:"Lam",
15:"\u042F\u0433\u043D\u044F\u0442",16:"cordero",17:"Kuzu",18:"\u042F\u0433\u043D\u044F\u0442"
};C.Bf7={1:"janjad",2:"\u0430\u0433\u043D\u0435\u0442\u0430",3:"\u5C0F\u7F8A",0:
"lambs",5:"lammeren",6:"talled",7:"lampaat",8:"agneaux",9:"L\xE4mmer",10:"\u0391\u03C1\u03BD\u03B9\u03AC"
,13:"Lam",15:"\u042F\u0433\u043D\u0451\u043D\u043E\u043A",16:"corderos",17:"kuzular"
,18:"\u042F\u0433\u043D\u044F"};C.Language={1:"jezik",2:"\u0415\u0437\u0438\u043A"
,3:"\u8A9E\u8A00",4:"Jazyk",0:"Language",5:"Taal",6:"Keel",7:"Kieli",8:"Langue",
9:"Sprache",10:"\u03B3\u03BB\u03CE\u03C3\u03B1",13:"Spr\xE5k",15:"\u042F\u0437\u044B\u043A"
,16:"Idioma",17:"Dil",18:"\u041C\u043E\u0432\u0430"};C.Agv={1:"zadnji",2:"\u043F\u043E\u0441\u043B\u0435\u0434\u0435\u043D"
,3:"\u6700\u5F8C\u4E00\u500B",4:"Posledn\xED",0:"last",5:"laatste",6:"viimane",7:
"viimeisin",8:"Dernier",9:"Letzte",10:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF"
,13:"Sist",15:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439",16:"\xFAltimos"
,18:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439"};C.A4B={1:"zadnja 3 dana"
,0:"Last 3 days",6:"Viimased 3 p\xE4eva",7:"Viimeiset 3 pv",8:"Les 3 derniers jours"
,9:"Letzte 3 Tage",10:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B5\u03C2 3 \u03BC\u03AD\u03C1\u03B5\u03C2"
,13:"Siste 3 dager",15:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 3 \u0434\u043D\u044F"
,16:"\xDAltimos 3 d\xEDas",18:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456 3 \u0434\u043D\u0456"
};C.Bf8={0:"Eartag: last 5 digits",8:"Marque auriculaire : 5 derniers chiffres",
9:"Ohrmarke: letzte 5 Ziffern"};C.Bf9={1:"zadnji mjesec",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u0435\u043D \u043C\u0435\u0441\u0435\u0446"
,3:"\u4E0A\u500B\u6708",4:"Posledn\xED m\u011Bs\xEDc",0:"Last month",6:"Eelmine kuu"
,7:"Viimekukkausi",8:"Dernier mois",9:"Letzter Monat",10:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2"
,13:"Siste m\xE5ned",15:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043C\u0435\u0441\u044F\u0446"
,16:"Mes pasado",18:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C"
};C.Bf_={1:"zadnji kvartal",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0447\u0435\u0442\u0432\u044A\u0440\u0442"
,3:"\u4E0A\u4E00\u5B63",4:"Posledn\xED \u010Dtvrtlet\xED",0:"Last quarter",6:"Eelmine kvartal"
,7:"Viimeisin nelj\xE4nne",8:"Dernier trimestre",9:"Letztes Vierteljahr",10:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03C4\u03AD\u03C4\u03B1\u03C1\u03C4\u03BF"
,13:"Siste kvartal",15:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044C"
,16:"Trimestre pasado",18:"\u041E\u0441\u0442\u0430\u043D\u043D\u044F \u0447\u0432\u0435\u0440\u0442\u044C"
};C.Bf$={1:"zadnja sedmica",2:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0430 \u0441\u0435\u0434\u043C\u0438\u0446\u0430"
,3:"\u4E0A\u661F\u671F",4:"Posledn\xED v\xEDkend",0:"Last week",6:"Eelmine n\xE4dal"
,7:"Viimeviikko",8:"Semaine derni\xE8re",9:"Letzte Woche",10:"\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"
,13:"Siste uke",15:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043D\u0435\u0434\u0435\u043B\u044F"
,16:"Semana pasada",18:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043D\u044C"
};C.A4C={2:"\u043B\u0438\u0431\u0440\u0438",3:"\u82F1\u938A",4:"Libra",0:"lbs",6:
"Kg",10:"\u039B\u03AF\u03B2\u03C1\u03B5\u03C2",17:"Lbs"};C.A4D={1:"svjetlo",2:"\u0421\u0432\u0435\u0442\u043B\u0438\u043D\u0430"
,3:"\u8F15\u7684",4:"Sv\u011Btlo\n",0:"Light",5:"Licht",6:"Valgus",7:"Valo",8:"Lumi\xE8re\n"
,9:"Licht",10:"\u0395\u03BB\u03B1\u03C6\u03C1\u03CD",13:"Lys",15:"\u0421\u0432\u0435\u0442"
,16:"Linterna\n",18:"\u0421\u0432\u0456\u0442\u043B\u043E"};C.A4E={1:"povezati ID broj \u017Eivotinja"
,2:"\u0412\u0440\u044A\u0437\u043A\u0430 \u2116 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,0:"Link animal ID",6:"Seo looma ID",7:"Linkit\xE4 el\xE4imen ID",8:"Lier ID de l\u2019animal"
,9:"Tier-ID zuordnen",10:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",13:"Koble til dyr-ID",15:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E",18:"\u0417\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0456\u0437 \u043D\u043E\u043C\u0435\u0440\u043E\u043C "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A4F={0:"Link ID (manual)",8:"Attribuer n\xB0 d\'identification (manuel)"
,9:"ID zuordnen (manuell)",15:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C ID (\u0432\u0440\u0443\u0447\u043D\u0443\u044E)"
,18:"\u041F\u0440\u0438\u0432\'\u044F\u0437\u0430\u0442\u0438 ID (\u0432\u0440\u0443\u0447\u043D\u0443)"
};C.A4G={0:"Link ID (RFID scan)",8:"Attribu\xE9 n\xB0 d\'identification (scann\xE9)"
,9:"ID zuordnen (Scan)",15:"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C ID (\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"RFID)",18:"\u041F\u0440\u0438\u0432\'\u044F\u0437\u0430\u0442\u0438 ID (\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 "+
"RFID)"};C.LinkTransponder={1:"povezati transponder",2:"\u0412\u0440\u044A\u0437\u043A\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,0:"Link transponder",6:"Seo vastuv\xF5tja",7:"Linkit\xE4 transponderi",8:"Lier ID transpondeur"
,9:"Transponder zuordnen",10:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BC\u03B5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,13:"Koble til transponder",15:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u043E\u043C"
,18:"\u0417\u0432\'\u044F\u0437\u0430\u0442\u0438 \u0456\u0437 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u043E\u043C"
};C.Bc={1:"pregled lista",2:"\u0418\u0437\u0433\u043B. \u0441\u043F\u0438\u0441\u044A\u043A"
,3:"\u986F\u793A\u6E05\u55AE",4:"Zobrazen\xED seznamu",0:"List view",5:"Lijst",6:
"Nimekiri",7:"Listan\xE4kym\xE4",8:"Liste",9:"Liste",10:"\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1\u03C2"
,13:"Listevisning",15:"\u0421\u043F\u0438\u0441\u043E\u043A",16:"Lista",17:"Liste g\xF6r\xFCn\xFCm\xFC"
,18:"\u0421\u043F\u0438\u0441\u043E\u043A"};C.A4H={1:"Liste",2:"\u0421\u043F\u0438\u0441\u044A\u0446\u0438"
,3:"\u6E05\u55AE",4:"Seznamy",0:"Lists",5:"Lijsten",6:"Nimekiri",7:"Listat",8:"Listes"
,9:"Listen",10:"\u039B\u03AF\u03C3\u03C4\u03B5\u03C2",13:"Lister",15:"\u0421\u043F\u0438\u0441\u043A\u0438"
,16:"Listas",17:"Listeler",18:"\u0421\u043F\u0438\u0441\u043A\u0438"};C.Bge={1:"Lokacija"
,2:"\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435"
,3:"\u4F4D\u7F6E",4:"Um\xEDst\u011Bn\xED",0:"Location",5:"Locatie",6:"Asukoht",7:
"Sijainti",8:"Le site",9:"Standort",10:"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C3\u03AF\u03B1"
,13:"Plassering",15:"\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435"
,16:"Ubicaci\xF3n",17:"Lokasyon",18:"\u041C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.Bgf={1:"nisko",2:"\u041D\u0438\u0441\u044A\u043A",3:"\u4F4E",4:"N\xEDzk\xFD"
,0:"Low",5:"Laag",6:"Madal",7:"Matala",8:"Bas",9:"Niedrig",10:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AC"
,13:"Lav",15:"\u041D\u0438\u0437\u043A\u0438\u0439",16:"Bajo",17:"D\xFC\u015F\xFCk"
,18:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439"};C.ACa={1:"donja granica",0:"Lower limit"
,6:"Alampiir",7:"Alaraja",8:"Limite inf\xE9rieure",9:"Untergrenze",10:"\u039A\u03B1\u03C4\u03CE\u03C4\u03B5\u03C1\u03BF \u03CC\u03C1\u03B9\u03BF"
,13:"Nedre grense",15:"\u041D\u0438\u0436\u043D\u044F\u044F \u0433\u0440\u0430\u043D\u0438\u0446\u0430"
,18:"\u041D\u0438\u0436\u043D\u044F \u043C\u0435\u0436\u0430"};C.Male={1:"mu\u0161ko"
,2:"\u041C\u044A\u0436\u043A\u0438",3:"\u516C",4:"Sam\u010D\xED",0:"Male",5:"Mannelijk"
,6:"Isane",7:"Uros",8:"M\xE2le",9:"M\xE4nnlich",10:"\u0391\u03C1\u03C3\u03B5\u03BD\u03B9\u03BA\u03CC"
,13:"Hann",15:"\u041C\u0443\u0436\u0441\u043A\u043E\u0439",16:"Macho",17:"Erkek"
,18:"\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0438\u0439"};C.Manual={1:"manuelno"
,2:"\u0420\u044A\u0447\u043D\u043E",3:"\u624B\u518A",4:"N\xE1vod",0:"Manual",5:"Manuel"
,6:"K\xE4sitsi",7:"K\xE4sin",8:"Manuel",9:"Manuell",10:"\u0395\u03B3\u03C7\u03B5\u03B9\u03C1\u03AF\u03B4\u03B9\u03BF"
,15:"\u0420\u0443\u0447\u043D\u043E\u0439",17:"Elle",18:"\u0420\u0443\u0447\u043D\u0438\u0439"
};C.A4N={0:"Purchased calves:\nmaximum age",9:"Maximalalter\nzugekaufter Fresser"
};C.Bgk={1:"Mogu\u0107e pohraniti samo {1} \u017Eivotinja!",0:"Only up to {1} animals can be stored!"
,6:"Salvestada saab vaid kuni {1} looma!",7:"Vain {1} el\xE4int\xE4 voidaan tallentaa!"
,8:"Un maximum de {1} animaux peut \xEAtre g\xE9r\xE9\xA0!",9:"Es k\xF6nnen maximal {1} Tiere verwaltet werden!"
,10:"\u039C\u03CC\u03BD\u03BF \u03BC\u03AD\u03C7\u03C1\u03B9 {1} \u03B6\u03CE\u03B1 "+
"\u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD!"
,13:"Bare opp til {1} dyr kan lagres",15:"\u041C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C/\u0438!"
,18:"\u041C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u0442\u0432\u0430\u0440\u0438\u043D\u043E\u044E/\u0430\u043C\u0438!"
};C.Bgl={1:"Mogu\u0107e pohraniti samo {1} neregistrovanih \u017Eivotinja!",0:"Only up to {1} animal unregistrations can be stored!"
,6:"Salvestada saab vaid kuni {1} looma registreeringu t\xFChistamist!",7:"Vain {1} el\xE4inten rekister\xF6inti\xE4 voidaan tallentaa!"
,8:"Un maximum de {1} d\xE9sincriptions peut \xEAtre g\xE9r\xE9\xA0!",9:"Es k\xF6nnen max. {1} Abmeldungen verwaltet werden!"
,10:"\u039C\u03CC\u03BD\u03BF \u03BC\u03AD\u03C7\u03C1\u03B9 {1} \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2 "+
"\u03B6\u03CE\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 "+
"\u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD!",13:"Bare opp til {1} avregistrerte dyr kan lagres"
,15:"\u041C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u0441\u043D\u044F\u0442\u0438\u0435\u043C "+
"\u0441 \u0443\u0447\u0451\u0442\u0430!",18:"\u041C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u0437\u043D\u044F\u0442\u0442\u044F\u043C "+
"\u0437 \u043E\u0431\u043B\u0456\u043A\u0443!"};C.Bgm={1:"Mogu\u0107e pohraniti samo {1} podataka po \u017Eivotinji!"
,0:"Only up to {1} data entities can be stored per animal!",6:"\xDChe looma kohta saab salvestada vaid kuni {1} andme\xFCksust!"
,7:"Vain {1} tietoyksikk\xF6\xE4 voidaan tallentaa el\xE4int\xE4 kohden!",8:"Max. {1} donn\xE9es individuelles peuvent \xEAtre g\xE9r\xE9es par animal\xA0!"
,9:"Pro Tier k\xF6nnen max. {1} Einzeldaten verwaltet werden!",10:"\u039C\u03CC\u03BD\u03BF \u03AD\u03C9\u03C2 {1} \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD "+
"\u03BD\u03B1 \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03C5\u03C4\u03BF\u03CD\u03BD "+
"\u03B1\u03BD\u03AC \u03B6\u03CE\u03BF!",13:"Bare data opp til {1} pr dyr kan lagres"
,15:"\u0414\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u043C\u043E\u0436\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C "+
"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C {1} \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C "+
"\u0434\u0430\u043D\u043D\u044B\u0445!",18:"\u0414\u043B\u044F \u043E\u0434\u043D\u0456\u0454\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043C\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u043D\u0435 \u0431\u0456\u043B\u044C\u0448 \u043D\u0456\u0436 {1} \u043E\u0431\'\u0454\u043A\u0442\u043E\u043C "+
"\u0434\u0430\u043D\u0438\u0445!"};C.APo={1:"Dosegli ste maksimalan broj podataka koji se mogu pohraniti!"
,0:"Maximum number of data records reached!",6:"Saavutatud on maksimaalne andmekirjete arv!"
,7:"Datatietueiden enimm\xE4ism\xE4\xE4r\xE4 saavutettu!",8:"Nombre maximal d\'enregistrements atteint\xA0!"
,9:"Maximale Anzahl an Datens\xE4tzen erreicht!",10:"\u03A3\u03C5\u03BC\u03C0\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BF \u03BC\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C9\u03BD!",13:"Maksimalt antall dataposter n\xE5dd!"
,15:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 "+
"\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439!"
,18:"\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 "+
"\u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u0456\u0432!"
};C.ACg={1:"Mjerenje",2:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438 \u0442\u0438\u043F\u043E\u0432\u0435"
,3:"\u7269\u7A2E\u6E2C\u91CF",4:"M\u011B\u0159en\xE9 druhy zv\xED\u0159at",0:"Species measured"
,5:"Meten bij",6:"T\xF5up\xF5hine m\xF5\xF5tmine",7:"Mittauskohde",8:"Esp\xE8ce mesur\xE9e"
,9:"Messeinsatz bei",10:"\u039C\u03B5\u03C4\u03C1\u03B7\u03BC\u03AD\u03BD\u03B1 \u03B5\u03AF\u03B4\u03B7"
,13:"M\xE5l type dyr",15:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u0438"
,16:"Medici\xF3n de",17:"Hayvan\u0131n t\xFCr\xFC \xF6l\xE7\xFCm\xFC",18:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438"
};C.Bgo={1:"mjerenje nije uspjelo",2:"\u041D\u0435\u0443\u0441\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0435"
,3:"\u6E2C\u91CF\u5931\u6557",4:"M\u011B\u0159en\xED chyba",0:"Measure failed",5:
"Meting mislukt",6:"M\xF5\xF5tmine ei",7:"Mittausvirhe",8:"\xC9chec de la mesure"
,9:"Messung fehlgeschlagen",10:"\u0391\u03C0\u03BF\u03C4\u03C5\u03C7\u03B7\u03BC\u03AD\u03BD\u03B7 \u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7"
,13:"Mislykket m\xE5ling",15:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E"
,16:"Fallo medici\xF3n",17:"\xD6l\xE7\xFCm ba\u015Far\u0131s\u0131z",18:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0435 "+
"\u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E"};C.Bgp={1:"mjerenje uspjelo",
0:"Measure succeeded",6:"M\xF5\xF5tmine \xF5nnestus",7:"Mittaus onnistui",8:"Mesure r\xE9ussie"
,9:"Messung erfolgreich",10:"\u039C\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1\u03C2"
,13:"M\xE5lingen suksessfull",15:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E",18:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E"};C.A4P={1:"vrijednosti izmjerene temperature"
,2:"\u0422\u0435\u043C\u043F. \u0438\u0437\u043C\u0435\u0440\u0432\u0430\u043D\u0438\u044F"
,3:"\u6EAB\u5EA6\u6E2C\u91CF",4:"M\u011B\u0159en\xED teploty",0:"Temp. measurements"
,5:"Gemeten temperaturen",6:"M\xF5\xF5tmis temp.",7:"Lpt. mittaukset",8:"Mesures de la temp\xE9rature"
,9:"Messwerte Temperatur",10:"\u03A0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AD\u03C2 \u03BC\u03B5\u03C4\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2"
,13:"Temp. m\xE5linger",15:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",16:"Mediciones temperatura"
,18:"\u0414\u0430\u043D\u0456 \u0437\u043C\u0456\u043D\u0435\u043D\u043D\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"};C.ACi={1:"Unos u meni"
,2:"\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u043D\u0430 \u043C\u0435\u043D\u044E\u0442\u043E"
,3:"\u9078\u55AE\u9805\u76EE",4:"Polo\u017Eky nabidky",0:"Menu items",5:"Menuonderdelen"
,6:"Men\xFC\xFC kirjed",7:"Valikkokohdat",8:"\xC9l\xE9ments du menu",9:"Men\xFCeintr\xE4ge"
,10:"\u03A0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1 \u03BC\u03B5\u03BD\u03BF\u03CD"
,13:"Meny elementer",15:"\u041F\u0443\u043D\u043A\u0442\u044B \u043C\u0435\u043D\u044E"
,16:"Opciones de men\xFA",17:"Men\xFC \xF6\u011Feleri",18:"\u041F\u0443\u043D\u043A\u0442\u0438 \u043C\u0435\u043D\u044E"
};C.A4R={1:"Bolesti metabolizma",2:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0442\u043D\u0438 \u0437\u0430\u0431\u043E\u043B\u044F\u0432\u0430\u043D\u0438\u044F"
,0:"Metabolic diseases",6:"Ainevahetushaigused",7:"Aineenvaihduntasairaudet",8:"Maladies m\xE9taboliques"
,9:"Stoffwechsel~krankheiten",10:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03BC\u03B5\u03C4\u03B1\u03B2\u03BF\u03BB\u03B9\u03C3\u03BC\u03BF\u03CD"
,13:"Ford\xF8yelses sykdommer",15:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 "+
"\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",18:"\u041C\u0435\u0442\u0430\u0431\u043E\u043B\u0456\u0447\u043D\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A4T={1:"Mogu\u0107nost izmu\u017Ee",2:"\u041C\u043B\u0435\u0447\u043D\u043E\u0441\u0442"
,0:"Milkability",6:"L\xFCpsiv\xF5ime",7:"Lypsett\xE4vyys",8:"Laitabilit\xE9",9:"Melkbarkeit"
,10:"\u0394\u03C5\u03BD\u03B1\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 \u03B1\u03C1\u03BC\u03B5\u03B3\u03AE\u03C2"
,13:"Melkbarhet",15:"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0439\u043A\u0438"
,18:"\u041C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0434\u043E\u0457\u043D\u043D\u044F"
};C.Bgr={1:"Nedostaje ID \u017Eivotinje! Molimo odredite ID \u017Eivotinje koji je "+
"potrebno kreirati!",2:"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u043B\u0438\u043F\u0441\u0432\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, "+
"\u043A\u043E\u0435\u0442\u043E \u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,3:"\u907A\u5931\u5C0F\u725B\u8B58\u5225\u865F\uFF01\n\u8ACB\u6307\u5B9A\u8981\u5EFA\u7ACB\u7684\u5C0F\u725B\u7684\u8B58\u5225\u865F\uFF01"
,4:"ID zv\xED\u0159ete chyb\xED",0:"Animal ID is missing!\nPlease specify the ID of the animal to be created!"
,5:"Dier-ID kwijt!\nGraag ID van nieuwe dier aangeven!",6:"Looma ID puudu\nPalun sisestage looma ID uue looma loomiseks"
,7:"El\xE4imen tunnus puuttuu!\nM\xE4\xE4rit\xE4 luotavan el\xE4imen tunnus!",8:
"L\u2019ID de l\u2019animal est manquant\xA0! Veuillez sp\xE9cifier l\u2019ID "+
"de l\u2019animal \xE0 cr\xE9er\xA0!",9:"Tier-ID fehlt!\nBitte geben Sie die ID f\xFCr das neu zu erstellende Tier "+
"an!",10:"\u039B\u03B5\u03AF\u03C0\u03B5\u03B9 \u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5!\n\u03A0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03B8\u03B1 "+"\u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03B8\u03B5\u03AF!"
,13:"ID mangler!\nVennligst spesifiser ID-en til dyret som skal opprettes!",15:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u043E\u0432\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!"
,16:"\xA1Falta ID del animal!\n\xA1Indique ID del animal nuevo que va a crear!",
18:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ID-\u043D\u043E\u043C\u0435\u0440 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\u0411\u0443\u0434\u044C "+"\u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+
"ID-\u043D\u043E\u043C\u0435\u0440 \u043D\u043E\u0432\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"
};C.Bgs={1:"Nedostaje u\u0161na markica! Molimo odredite broj u\u0161ne markice za "+
"\u017Eivotinju koju je potrebno kreirati!",2:"\u041B\u0438\u043F\u0441\u0432\u0430 \u043D\u043E\u043C\u0435\u0440 \u043D\u0430 "+
"\u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 "+
"\u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 \u043C\u0430\u0440\u043A\u0430 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E, \u043A\u043E\u0435\u0442\u043E "+
"\u0449\u0435 \u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E!"
,0:"Ear tag number is missing!\nPlease specify the ear tag number of the animal "+
"to be created!",6:"Puudub k\xF5rvam\xE4rgi number! \nPalun t\xE4psustage loodava looma k\xF5rvam\xE4rgi "+
"number!",7:"Korvamerkin numero puuttuu!\nM\xE4\xE4rit\xE4 luotavan el\xE4imen korvamerkin "+
"numero!",8:"Le num\xE9ro de la marque au~ri~cu~laire est manquant\xA0!\nVeuillez pr\xE9ciser "+
"le num\xE9ro de la marque auriculaire\xA0!",9:"Ohrmarken- nummer fehlt!\n\nBitte geben Sie eine Ohrmarken- nummer f\xFCr "+
"das neu zu erstellende Tier an!",10:"\u039B\u03B5\u03AF\u03C0\u03B5\u03B9 \u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03C4\u03BF\u03C5 \u03B5\u03BD\u03C9\u03C4\u03AF\u03BF\u03C5!\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 "+
"\u03BA\u03B1\u03B8\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD "+"\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C4\u03BF\u03C5 \u03B5\u03BD\u03CE\u03C4\u03B9\u03BF\u03C5 "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03B8\u03B1 "+"\u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B7\u03B8\u03B5\u03AF!"
,13:"\xD8remerkenummer mangler!\nVennligst spesifiser \xF8remerkenummeret til "+
"dyret som skal lages!",15:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u043E\u043C\u0435\u0440 "+
"\u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 "+"\u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!",18:"\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 \u043D\u043E\u043C\u0435\u0440 "+
"\u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+"\u043D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438 "+
"\u043D\u043E\u0432\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!"};C.
Moderate={1:"Sredstvo",2:"\u0423\u043C\u0435\u0440\u0435\u043D",0:"Moderate",6:"M\xF5\xF5dukas"
,7:"Kohtalainen",8:"Mod\xE9r\xE9",9:"Mittel",10:"\u039C\u03AD\u03C4\u03C1\u03B9\u03BF"
,13:"Moderat",15:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",18:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439"
};C.G6={2:"M\u0435\u0441\u0435\u0446",0:"Month",5:"Maand",7:"Kuukausi ",8:"Mois"
,9:"Monat",11:"Mese",15:"\u041C\u0435\u0441\u044F\u0446",16:"Mes",17:"Ay",18:"\u041C\u0456\u0441\u044F\u0446\u044C"
};C.A4V={1:"Stopa uginu\u0107a",0:"Mortality",6:"Suremus",7:"Kuolleisuus",8:"Taux de perte"
,9:"Verlustrate",10:"\u0398\u03BD\u03B7\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1"
,13:"D\xF8delighet",15:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043F\u043E\u0442\u0435\u0440\u044C"
,18:"\u041A\u043E\u0435\u0444\u0456\u0446\u0456\u0454\u043D\u0442 \u0432\u0442\u0440\u0430\u0442"
};C.A4W={1:"Senzor kretanja",0:"Motion Sensor",6:"Liikumisandur",7:"Liiketunnistin"
,8:"Capteur de position",9:"Lagesensor",10:"\u0391\u03BD\u03B9\u03C7\u03BD\u03B5\u03C5\u03C4\u03AE\u03C2 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2"
,13:"Bevegelsessensor",15:"\u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F"
,18:"\u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"
};C.Aux={1:"Jedno grlo / vi\u0161e grla",2:"\u041C\u043D\u043E\u0433\u043E",3:"\u500D\u6578"
,4:"N\xE1sobky",0:"Multiples",5:"Eenling/Meerling",6:"Paljunda",7:"Toistot",8:"Multiple"
,9:"Einling/Mehrling",10:"\u03A0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03B1"
,13:"Multipliser",15:"\u0411\u043B\u0438\u0437\u043D\u0435\u0446\u044B",16:"Ternero simple/m\xFAltiple"
,17:"\xC7oklu",18:"\u0411\u043B\u0438\u0437\u043D\u044E\u043A\u0438"};C.Bgw={1:"prije {1} dana"
,2:"\u041F\u0440\u0435\u0434\u0438 {1} \u0434\u043D\u0438",3:"{1}\u5929\u524D",4:
"Dny p\u0159ed",0:"{1} days ago",6:"{1} p\xE4eva tagasi",7:"{1} p\xE4iv\xE4\xE4 sitten"
,8:"il y a {1} jour",9:"vor {1} Tagen",10:"\u03A0\u03C1\u03AF\u03BD \u03B1\u03C0\u03AF {1} \u03BC\u03AD\u03C1\u03B1"
,13:"For {1} dager siden",15:"{1} \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434"
,16:"hace {1} d\xEDas",18:"{1} \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443"
};C.APt={1:"{1} od 4",2:"{1} \u043E\u0442 4",0:"{1} of 4",6:"{1} neljast",7:"{1} / 4"
,8:"{1} de 4",9:"{1} von 4",10:"{1} \u03B1\u03C0\u03CC 4",13:"{1} av 4",15:"{1} \u0438\u0437 4"
,18:"{1} \u0456\u0437 4"};C.Bgz={0:"An animal ID is already linked to this animal!\nID reassignment is not "+
"possible!",8:"Un n\xB0 d\'identit\xE9 a \xE9t\xE9 d\xE9j\xE0 attribu\xE9 \xE0 cet animal\xA0! "+
"Une autre attribution n\'est plus possible\xA0!",9:"Diesem Tier wurde bereits eine Ohrmarken~nummer zuge~ordnet! Die Zu~weisung "+
"einer anderen Nummer ist nicht m\xF6glich!",15:"\u041A \u044D\u0442\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D ID!\n\u041F\u0435\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "+
"ID \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E!",18:"\u0414\u043E \u0446\u0456\u0454\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0443\u0436\u0435 \u043F\u0440\u0438\u0432\'\u044F\u0437\u0430\u043D\u043E "+"ID!\n\u041F\u0435\u0440\u0435\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"ID \u043D\u0435 \u0454 \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u043C!"};C.Yt={
1:"Oznaka u\u0161ne markice",0:"National animal ID",6:"Riiklik looma ID",7:"Kansallinen el\xE4in ID"
,8:"Num\xE9ro de la marque auriculaire",9:"Ohrmarken~nummer",10:"\u0395\u03B8\u03BD\u03B9\u03BA\u03CC \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",13:"Nasjonalt dyre-ID",15:"\u041D\u043E\u043C\u0435\u0440 \u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0438"
,18:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"
};C.Gd={1:"novo",2:"\u041D\u043E\u0432",3:"\u65B0\u7684",4:"Nov\xFD",0:"New",5:"Nieuw"
,6:"Uus",7:"Uusi",8:"Nouveau",9:"Neu",10:"\u039D\u03AD\u03BF",13:"Ny",15:"\u041D\u043E\u0432\u044B\u0439"
,16:"Nuevo",18:"\u041D\u043E\u0432\u0438\u0439"};C.A4Z={0:"New animal",9:"Neues Tier"
};C.NewAnimals={0:"New animals",9:"Neue Tiere"};C.A40={0:"New on farm",9:"Zug\xE4nge"
};C.A41={0:"New on farm, no transponder",9:"Zuk\xE4ufe, kein Transponder"};C.API={
1:"briga o novoro\u0111enim grlima",2:"\u0413\u0440\u0438\u0436\u0430 \u0437\u0430 \u043D\u043E\u0432\u043E\u0440\u043E\u0434\u0435\u043D\u043E"
,3:"\u65B0\u751F\u5C0F\u725B\u8B77\u7406",4:"P\xE9\u010De o novorozen\xE9",0:"Newborn care"
,5:"Eerst verzorging kaf",6:"Vasts\xFCndinu",7:"Vastasyntynyt hoito",8:"Premier soin"
,9:"Erstversorgung",10:"\u03A6\u03C1\u03BF\u03BD\u03C4\u03AF\u03B4\u03B1 \u03BD\u03B5\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C4\u03BF\u03C5"
,13:"Omsorg for nyf\xF8dte",15:"\u041F\u0435\u0440\u0432\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C"
,16:"Atenci\xF3n primaria",17:"Yeni do\u011Fan bak\u0131m\u0131",18:"\u041F\u0435\u0440\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"
};C.A42={1:"slede\u0107a \u017Eivotinja",2:"\u0421\u043B\u0435\u0434\u0432\u0430\u0449\u043E\n\u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u4E0B\u4E00\u96BB\u5C0F\u725B",4:"Dal\u0161\xED zv\xED\u0159e",0:"Next\nanimal"
,5:"Volgend\ndier",6:"J\xE4rgmine\nloom",7:"Seuraava\nel\xE4in",8:"Prochain\nanimal"
,9:"N\xE4chstes\nTier",10:"\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF\n\u03B6\u03CE\u03BF"
,13:"Neste\ndyr",15:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,16:"Animal\nsiguiente",18:"\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0430"
};C.ACp={0:"Next animal ID",8:"Prochain n\xB0 d\'animal",9:"N\xE4chste Tiernummer"
,15:"ID \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,18:"ID \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.No={1:"Ne",2:"\u041D\u0435",3:"\u4E0D",4:"Ne",0:"No",5:"nee",6:"Ei",7:"Ei",8:
"Non",9:"Nein",10:"\u0384\u039F\u03C7\u03B9",13:"Nei",14:"Nie",15:"\u041D\u0435\u0442"
,17:"Hay\u0131r",18:"\u041D\u0456"};C.A43={1:"Nikakve aktivnosti",2:"\u041D\u044F\u043C\u0430"
,0:"No action",6:"Pole tegevust",7:"Ei toimintaa",8:"Pas d\u2019action",9:"Keine Aktion"
,10:"\u039A\u03B1\u03BC\u03AF\u03B1 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1"
,13:"Ingen handling",15:"\u0411\u0435\u0437 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
,16:"Ninguna acci\xF3n",18:"\u0411\u0435\u0437 \u0434\u0456\u0457"};C.A44={1:"Nema dodijeljenog ID broja"
,2:"\u041D\u044F\u043C\u0430 \u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,0:"No national animal ID assigned",6:"Looma ID pole m\xE4\xE4ratud",7:"Ei el\xE4intunnusta"
,8:"Aucun ID d\u2019 animal attri~bu\xE9",9:"Keine Ohrmar~kennummer zugewiesen",
10:"\u0394\u03B5\u03BD \u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5",13:"Ingen dyre-ID tildelt",15:"\u041D\u043E\u043C\u0435\u0440 \u0436\u0438~\u0432\u043E\u0442~\u043D\u043E\u0433\u043E "+
"\u043D\u0435 \u043D\u0430~\u0437\u043D\u0430~\u0447\u0435\u043D",18:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E"};C.ACq={
1:"Nema registrovanih \u017Eivotinja!",2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E/\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438!",3:"\u6C92\u6709\u5C0F\u725B\u5DF2\u767B\u9304\uFF01"
,4:"Nebyla registrov\xE1na \u017E\xE1dn\xE1 zv\xED\u0159ata",0:"No animal(s) registered!"
,5:"Geen dier(en) aangemeld!",6:"Loom pole registreeritud",7:"Ei rekister\xF6ityj\xE4 el\xE4imi\xE4!"
,8:"Pas d\u2019animal(s) enregistr\xE9(s)\xA0!",9:"Kein(e) Tier(e) angemeldet!",
10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03B7\u03B8\u03B5\u03AF "+
"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF!",13:"Ingen dyr registrert!"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 "+
"\u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B!"
,16:"\xA1No hay animal(es) registrado(s)!",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430/\u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456!"
};C.BgB={1:"Nema \u017Eivotinja na listi alarma!",2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438 "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"\u6C92\u6709\u5C0F\u725B\u5728\u8B66\u5831\u6E05\u55AE\u4E0A\uFF01",4:"\u017D\xE1dn\xE1 zv\xED\u0159ata na seznamu alarm\u016F"
,0:"No animal(s) on alarm list!",5:"Geen dier(en) op alarmlijst!",6:"Hoiatused puuduvad"
,7:"Ei el\xE4imi\xE4 h\xE4lytyslistalla!",8:"Pas d\u2019animal(s) sur la liste d\u2019alerte\xA0!"
,9:"Kein(e) Tier(e) auf Alarmliste!",10:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03CE\u03BD!"
,13:"Ingen dyr p\xE5 alarmliste!",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0442\u0440\u0435\u0432\u043E\u0433 "+
"\u043D\u0435\u0442!",16:"\xA1No figuran animal(es) en lista de alarmas!",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438/\u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u0440\u0438\u0432\u043E\u0433 "+
"\u043D\u0435\u043C\u0430\u0454!"};C.BgC={1:"Nema \u017Eivotinja na listi za kontrolu!"
,2:"\u041D\u044F\u043C\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438 "+
"\u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0437\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435!"
,3:"\u6C92\u6709\u5C0F\u725B\u5728\u63A7\u5236\u6E05\u55AE\u4E0A\uFF01",4:"\u017D\xE1dn\xE1 zv\xED\u0159ata na kontroln\xEDm seznamu"
,0:"No animal(s) on control list!",5:"Geen dier(en) op controle lijst!",6:"Kontrolli vajavad loomad puuduvad"
,7:"Ei el\xE4imi\xE4 kontrolliluettelossa!",8:"Pas d\u2019animal(s) sur la liste de contr\xF4le\xA0!"
,9:"Kein(e) Tier(e) auf Kontrollliste!",10:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03BF \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5!"
,13:"Ingen dyr p\xE5 kontrolllisten!",15:"\u0412 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C "+
"\u0441\u043F\u0438\u0441\u043A\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u043D\u0435\u0442!",16:"\xA1No figuran animal(es) en lista de control!",18:"\u0423 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u043C\u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u0432\u0430\u0440\u0438\u043D "+"\u043D\u0435\u043C\u0430\u0454!"
};C.APJ={0:"No animal(s) on list!",8:"Aucun animal sur la liste\xA0!",9:"Kein(e) Tier(e) auf der Liste!"
,15:"\u041D\u0435\u0442 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0432 "+
"\u0441\u043F\u0438\u0441\u043A\u0435!",18:"\u041D\u0435\u043C\u0430\u0454 \u0442\u0432\u0430\u0440\u0438\u043D \u0443 "+
"\u0441\u043F\u0438\u0441\u043A\u0443!"};C.BgD={0:"No animal(s) on watch list!",
9:"Keine Tier(e) auf der Beobachtungsliste!"};C.BgE={1:"Prazna lista / svim \u017Eivotinjama su dodijeljeni ID brojevi!"
,0:"Empty list,\nall animals do have IDs (15 digits) assigned!",6:"Nimekiri on t\xFChi, \nk\xF5ikidele loomadele on m\xE4\xE4ratud ID-d (15 "+
"numbrit)!",7:"Tyhj\xE4 luettelo,\nkaikki el\xE4imet on m\xE4\xE4ritetty tunnuksilla (15 "+
"numeroa)!",8:"Liste vide, un n\xB0 d\'identification \xE0 15 chiffres a \xE9t\xE9 attribu\xE9 "+
"\xE0 tous les animaux\xA0!",9:"Liste leer,\nallen Tieren wurde jeweils eine 15 stellige ID zugewiesen!"
,10:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03B1 "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC "+
"(15 \u03C8\u03B7\u03C6\u03AF\u03C9\u03BD)!",13:"Tom liste,\nalle dyr har ID-er (15 sifre) tildelt!"
,15:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442,\n\u0432\u0441\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 "+
"15-\u0437\u043D\u0430\u0447\u043D\u044B\u0435 ID-\u043D\u043E\u043C\u0435\u0440\u0430!"
,18:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439,\n\u0443\u0441\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 "+
"15-\u0437\u043D\u0430\u0447\u043D\u0456 ID-\u043D\u043E\u043C\u0435\u0440\u0438!"
};C.BgF={1:"Lista prazna / svim \u017Eivotinjama je dodijeljen oda\u0161ilja\u010D!"
,2:"\u041F\u0440\u0430\u0437\u0435\u043D \u0441\u043F\u0438\u0441\u044A\u043A,\n\u0432\u0441\u0438\u0447\u043A\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0438\u043C\u0430\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"
,0:"Empty list,\nall animals do have transponders assigned!",6:"T\xFChi nimekiri\nloomad kellel pole vastuv\xF5tja nr m\xE4\xE4ratud"
,7:"Tyhj\xE4 luettelo,\nkaikille el\xE4imille on m\xE4\xE4ritetty transponderit!"
,8:"Liste vide,\ntous les animaux ont des transpondeurs attribu\xE9s\xA0!",9:"Liste leer,\nallen Tieren wurden Transponder zugewiesen!"
,10:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1,\n\u03CC\u03BB\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5\u03C2 "+
"\u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CE\u03C4\u03B5\u03C2!",13:"Tom liste,\nalle dyr har f\xE5tt transpondere!"
,15:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442,\n\u0432\u0441\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044B!",18:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442\u0438\u0439,\n\u0443\u0441\u0456 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438!"};C.A45={
1:"Nisu une\u0161eni podaci o te\u017Eini!",0:"No birth weights recorded yet!",6:
"Salvestatud s\xFCnnikaalud puuduvad!",7:"Syntym\xE4painoja ei ole viel\xE4 kirjattu!"
,8:"Aucun poids de naissance\nenregistr\xE9 pour l\'instant",9:"Noch keine Geburts~gewichte erfasst!"
,10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03AC\u03C1\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2!"
,13:"Ingen f\xF8dselsvekter registrert enn\xE5!",15:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 "+
"\u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D!"
,18:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0456 "+
"\u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430!"
};C.A46={1:"Nema registrovanih teladi!",0:"No calves unregistered yet!",6:"Registreerimata vasikad puuduvad!"
,7:"Ei vasikoita, joita ei ole rekister\xF6ity!",8:"Aucun animal n\u2019a encore \xE9t\xE9 d\xE9senregistr\xE9\xA0!"
,9:"Noch keine K\xE4lber abgemeldet!",10:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03BC\u03BF\u03C3\u03C7\u03AC\u03C1\u03B9 "+
"\u03B4\u03B5\u03BD \u03B4\u03B9\u03B5\u03B3\u03C1\u03AC\u03C6\u03B7 \u03B1\u03BA\u03CC\u03BC\u03B1!"
,13:"Fortsatt inger kalver uregistrert",15:"\u041D\u0438 \u043E\u0434\u0438\u043D \u0442\u0435\u043B\u0451\u043D\u043E\u043A "+
"\u0435\u0449\u0451 \u043D\u0435 \u0441\u043D\u044F\u0442 \u0441 \u0443\u0447\u0451\u0442\u0430!"
,18:"\u0429\u0435 \u0436\u043E\u0434\u043D\u0435 \u0442\u0435\u043B\u044F \u043D\u0435 "+
"\u0437\u043D\u044F\u0442\u043E \u0437 \u043E\u0431\u043B\u0456\u043A\u0443!"};C.
A47={0:"No change",9:"Keine \xC4nderung"};C.BgG={0:"No cow(s) on list!",8:"Aucune vache sur la liste\xA0!"
,9:"Kein(e) K\xFCh(e) auf der Liste!",15:"\u041D\u0435\u0442 \u043A\u043E\u0440\u043E\u0432 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435!"
,18:"\u041D\u0435\u043C\u0430\u0454 \u043A\u043E\u0440\u0456\u0432 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443!"
};C.A48={1:"Na spisku nema zasu\u0161enih krava!",0:"No dry cow(s) on list!",6:"Kinnislehmade nimekiri puudub!"
,7:"Ei umpeutettuja lehmi\xE4 luettelossa!",8:"Aucune vache tarie sur la liste\xA0!"
,9:"Kein(e) trocken~stehende(n) K\xFCh(e) auf der Liste!",10:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C3\u03C4\u03B5\u03AF\u03C1\u03B5\u03C2 "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!"
,13:"Ingen gjeldkyr p\xE5 listen",15:"\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435\u0442 \u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432!",18:"\u0423 \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 "+
"\u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0438\u0445 \u043A\u043E\u0440\u0456\u0432!"
};C.BgH={1:"Nema novih krava na spisku!",2:"\u041D\u044F\u043C\u0430 \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u0435\u043B\u0435\u043D\u0430/\u0438 "+
"\u043A\u0440\u0430\u0432\u0430/\u0438 \u0432 \u0441\u043F\u0438\u0441\u044A\u043A\u0430!"
,0:"No fresh cow(s) on list!",6:"V\xE4rskelt poeginud lehmad puuduvad",7:"Ei tunnutettavia el\xE4imi\xE4 listalla"
,8:"Pas de vache(s) fra\xEEche(s) sur la liste\xA0!",9:"Kein(e) frischmelkende(n) K\xFCh(e) auf der Liste!"
,10:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03C6\u03C1\u03AD\u03C3\u03BA\u03B5\u03C2 "+
"\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B5\u03C2 \u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1!"
,13:"Ingen friske kyr p\xE5 listen",15:"\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u043D\u0435\u0442 \u043D\u043E\u0432\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043A\u043E\u0440\u043E\u0432!",18:"\u0423 \u0441\u043F\u0438\u0441\u043A\u0443 \u043D\u0435\u043C\u0430\u0454 "+
"\u043D\u043E\u0432\u043E\u0442\u0456\u043B\u044C\u043D\u0438\u0445 \u043A\u043E\u0440\u0456\u0432!"
};C.BgJ={0:"No ratings recorded in the displayed date period!",8:"Aucune \xE9valuation n\'a \xE9t\xE9 enregistr\xE9 pendant la p\xE9riode "+
"affich\xE9e sur l\'\xE9cran\xA0!",9:"Im dargestellten Zeitraum wurden keine Bewertungen erfasst!"
,15:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0438\u043A\u0430\u043A\u0438\u0445 "+
"\u043E\u0446\u0435\u043D\u043E\u043A!",18:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0456\u044F\u043A\u0438\u0445 "+
"\u043E\u0446\u0456\u043D\u043E\u043A!"};C.Amt={1:"Nema une\u0161enih ocjena!",2:
"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438!",3:"\u5C1A\u7121\u8A55\u5206\u8A18\u9304\uFF01"
,4:"Zat\xEDm \u017E\xE1dn\xE9 hodnocen\xED",0:"No ratings recorded yet!",5:"Nog geen beoordeling verwerkt!"
,6:"Taset pole veel salvestatud",7:"Arvioita ei ole viel\xE4 tallennettu!",8:"Pas encore de classement enregistr\xE9\xA0!"
,9:"Noch keine Be~wertungen erfasst!",10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2!"
,13:"Forel\xF8pig ingen vurderinger registrer!",15:"\u041E\u0446\u0435\u043D\u043E\u043A \u0435\u0449\u0435 \u043D\u0435\u0442!"
,16:"\xA1A\xFAn no se han registrado evaluaciones!",18:"\u041E\u0446\u0456\u043D\u043E\u043A \u0449\u0435 \u043D\u0435\u043C\u0430\u0454!"
};C.BgK={1:"Nema novi \u017Eivotinja za registraciju!",0:"Empty list, no registrations pending!"
,6:"Nimekiri on t\xFChi, \xFChtki registreerimist pole ootel!",7:"Lista tyhj\xE4, rekister\xF6inti\xE4 ei ole odotettavissa!"
,8:"Aucun nouvel enregistrement d\'animaux\xA0!",9:"Keine neu an~zumeldenden Tiere erfasst!"
,10:"\u039A\u03B5\u03BD\u03AE \u03BB\u03AF\u03C3\u03C4\u03B1, \u03B4\u03B5\u03BD "+
"\u03B5\u03BA\u03BA\u03C1\u03B5\u03BC\u03BF\u03CD\u03BD \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AD\u03C2!"
,13:"Tom liste, ingen registreringer venter!",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0445, \u043E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0445 "+
"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E, \u043D\u0435\u0442!"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D, \u043E\u0447\u0456\u043A\u0443\u044E\u0447\u0438\u0445 "+
"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E, \u043D\u0435\u043C\u0430\u0454!"
};C.APP={1:"Nema rezultata pretra\u017Eivanja prema zadatim brojevima.",2:"\u041D\u044F\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442 "+
"\u043E\u0442 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E:\n\u043D\u0435 "+
"\u0441\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0449\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0437\u0430 \u043D\u043E\u043C\u0435\u0440/\u0430, "+
"\u0434\u0430\u0434\u0435\u043D\u0438 \u043F\u043E-\u0433\u043E\u0440\u0435!",0:
"No search result:\nno matching animals found for digit(s) given above!",6:"Otsingule puuduvad tulemused:\nP\xE4ringule vastavaid loomi ei leitud!"
,7:"Ei hakutuloksia:\nEi vastaavia el\xE4imi\xE4 l\xF6ydetty edell\xE4 annetuista "+
"numeroista!",8:"Aucun r\xE9sultat de recherche\xA0:\naucun animal correspondant au(x) chiffre(s) "+
"indiqu\xE9(s) ci-dessus\xA0!",9:"Kein Suchergebnis:\nkeine passenden Tiere f\xFCr obige Ziffernfolge gefunden!"
,10:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B1\u03C0\u03BF\u03C4\u03AD\u03BB\u03B5\u03C3\u03BC\u03B1 "+
"\u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7\u03C2:\n\u0394\u03B5\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B6\u03CE\u03B1 \u03C0\u03BF\u03C5 "+
"\u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03BF\u03C5\u03BD "+"\u03BC\u03B5 \u03C4\u03B1 \u03C8\u03B7\u03C6\u03AF\u03B1 \u03C0\u03BF\u03C5 "+
"\u03B4\u03AF\u03BD\u03BF\u03BD\u03C4\u03B1\u03B9 \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9!"
,13:"Ingen s\xF8keresultat:\ningen sam~svarende dyr funnet for siffer gitt "+"ovenfor!"
,15:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E\u0438\u0441\u043A\u0430 "+
"\u043D\u0435\u0442:\n\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, "+"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 "+
"\u043E\u0447\u0435\u0440\u0451\u0434\u043D\u043E\u0441\u0442\u0438 \u0446\u0438\u0444\u0440, "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E!",18:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043F\u043E\u0448\u0443\u043A\u0443 "+
"\u043D\u0435\u043C\u0430\u0454:\n\u0442\u0432\u0430\u0440\u0438\u043D, "+"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0457 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u043E\u0441\u0442\u0456 "+
"\u0446\u0438\u0444\u0440, \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"
};C.BgL={0:"No temperatures and no ratings recorded in the period shown in the graphic!"
,8:"Aucune temp\xE9rature et aucune \xE9valuation n\'ont \xE9t\xE9 enregistr\xE9es "+
"pendant la p\xE9riode pr\xE9sent\xE9e dans le graphique\xA0!",9:"Im Darstellungszeitraum der Grafik wurden keine Temperaturen und keine "+
"Bewertungen erfasst!",15:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 "+
"\u0438 \u043E\u0446\u0435\u043D\u043E\u043A!",18:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0456\u044F\u043A\u0438\u0445 "+
"\u043E\u0446\u0456\u043D\u043E\u043A \u0442\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
};C.BgM={1:"Nema sa\u010Duvanih vrijednosti temperature!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 "+
"\u0438 \u043E\u0446\u0435\u043D\u043A\u0430!",3:"\u5C1A\u672A\u6709\u6EAB\u5EA6\u548C\u8A55\u5206\u8A18\u9304\uFF01"
,4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 teploty a \u017E\xE1dn\xE1 "+"hodnocen\xED"
,0:"No temperatures and no ratings recorded yet!",6:"Puudub temp. ja taseme kanne"
,7:"Ei l\xE4mp\xF6tiloja eik\xE4 luokituksia viel\xE4 tallennettu!",8:"Pas de temp\xE9ratures et pas d\u2019\xE9valuations encore enregistr\xE9es\xA0!"
,9:"Keine Temperaturen und keine Bewertungen erfasst!",10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2 "+
"\u03BA\u03B1\u03B9 \u03B2\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2!"
,13:"Ingen temperaturer og ingen vurderinger registrert enn\xE5!",15:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 "+
"\u043E\u0446\u0435\u043D\u043A\u0438 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u044B!"
,16:"\xA1A\xFAn no se han registrado temperaturas o evaluaciones!",18:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0456 "+
"\u043E\u0446\u0456\u043D\u043A\u0438 \u043D\u0435 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456!"
};C.A4_={0:"No temperatures recorded in the period shown in the graphic!",8:"Aucune temp\xE9rature n\'a \xE9t\xE9 enregistr\xE9es pendant la p\xE9riode "+
"pr\xE9sent\xE9e dans le graphique\xA0!",9:"Im Darstellungszeitraum der Grafik wurden keine Temperaturen erfasst!"
,15:"\u0412 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0439 "+
"\u043F\u0435\u0440\u0438\u043E\u0434 \u043D\u0435 \u0431\u044B\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
,18:"\u0412 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0443\u0432\u0430\u043D\u0438\u0439 "+
"\u043F\u0435\u0440\u0456\u043E\u0434 \u043D\u0435 \u0431\u0443\u043B\u043E "+"\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440!"
};C.Ap6={1:"Jo\u0161 nisu sa\u010Duvane vrijednosti temperature!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430!"
,3:"\u5C1A\u672A\u6709\u6EAB\u5EA6\u8A18\u9304\uFF01",4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 teploty!"
,0:"No temperatures recorded yet!",5:"Nog geen temperaturen verwerkt!",6:"Temp. kanne puudub"
,7:"L\xE4mp\xF6tiloja ei ole viel\xE4 kirjattu!",8:"Aucune temp\xE9rature n\u2019a encore \xE9t\xE9 enregistr\xE9e\xA0!"
,9:"Noch keine Temperaturen erfasst!",10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2!"
,13:"Forel\xF8pig ingen temperaturer registrert!",15:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0435 "+
"\u0438\u043C\u0435\u0440\u044F\u043D\u044B!",16:"\xA1A\xFAn no se han registrado temperaturas!"
,18:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u043D\u0435 "+
"\u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0456!"};C.A4$={1:"Nema dodijeljenih transpondera!"
,2:"\u041D\u044F\u043C\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,0:"No transpon~der assigned",6:"Vastuv\xF5tja pole m\xE4\xE4ratud",7:"Ei Transponderia"
,8:"Aucun trans~pon~deur attri~bu\xE9",9:"Kein Trans~ponder zu~gewiesen",10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2",13:"Ingen transponder tildelt"
,15:"\u0422\u0440\u0430\u043D\u0441~\u043F\u043E\u043D~\u0434\u0435\u0440\u044B "+
"\u043D\u0435 \u043D\u0430~\u0437\u043D\u0430~\u0447\u0435\u043D\u044B",18:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0438 "+
"\u043D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0456!"};C.Ap7={1:
"Nema sa\u010Duvanih podataka o te\u017Eini!",2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u043F\u0438\u0441\u0438 "+
"\u0437\u0430 \u0442\u0435\u0433\u043B\u043E!",3:"\u5C1A\u672A\u6709\u9AD4\u91CD\u8A18\u9304\uFF01"
,4:"Dosud nebyly zaznamen\xE1ny \u017E\xE1dn\xE9 v\xE1hy",0:"No weights recorded yet!"
,5:"Nog geen gewichten verwerkt!",6:"Kaalu andmed puuduvud",7:"Ei viel\xE4 painoja kirjattu!"
,8:"Aucun poids n\u2019a encore \xE9t\xE9 enregistr\xE9\xA0!",9:"Noch keine Gewichte erfasst!"
,10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B7 \u03B2\u03AC\u03C1\u03B7!",13:"Forel\xF8pig ingen vekter registrert!"
,15:"\u0412\u0435\u0441\u0430 \u043D\u0435\u0438\u0437\u043C\u0435\u0440\u044F\u043D\u044B!"
,16:"\xA1A\xFAn no se han registrado pesos!",18:"\u0412\u0430\u0433\u0430 \u0449\u0435 \u043D\u0435 \u0432\u0438\u043C\u0456\u0440\u044F\u043D\u0430!"
};C.BgN={1:"Danas nisu sa\u010Duvani podaci o te\u017Eini!",0:"No weights recorded today!"
,6:"T\xE4na salvestatud kaalud puuduvad!",7:"T\xE4n\xE4\xE4n ei kirjattu painoja!"
,8:"Aucun poids n\'a \xE9t\xE9 enregistr\xE9 aujourd\'hui\xA0!",9:"Heute wurden keine\nGewichte erfasst!"
,10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03BF\u03C5\u03BD \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+
"\u03B2\u03AC\u03C1\u03B7 \u03C3\u03AE\u03BC\u03B5\u03C1\u03B1!",13:"Ingen vekter registrert i dag!"
,15:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F "+
"\u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043B\u0438\u0441\u044C!"
,18:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043D\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043B\u043E\u0441\u044C!"
};C.BgO={0:"Empty list,\nall new animals do have transponders assigned!",9:"Liste leer,\nallen neu zugegangenen Tieren wurden Transponder zugewiesen!"
};C.None={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u7121",4:"\u017D\xE1dn\xFD",
0:"none",5:"geen",6:"pole",7:"Ei yht\xE4\xE4n",8:"aucun",9:"keiner",10:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1"
,13:"ingen",15:"\u041D\u0435\u0442",16:"Ninguno",17:"Hi\xE7biri",18:"\u043D\u0435\u043C\u0430\u0454"
};C.A5a={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u6C92\u6709",4:"\u017D\xE1dn\xFD"
,0:"none",5:"geen",6:"pole",7:"ei yht\xE4\xE4n",8:"aucun",9:"keine",10:"\u03BA\u03B1\u03BD\u03AD\u03BD\u03B1"
,13:"ingen",15:"\u041D\u0435\u0442",16:"-",18:"\u043D\u0435\u043C\u0430\u0454"};
C.BgP={1:"nema",2:"\u043D\u044F\u043C\u0430",3:"\u6C92\u6709",4:"\u017D\xE1dn\xFD"
,0:"None",5:"geen",6:"pole",7:"Ei yht\xE4\xE4n",8:"aucun",9:"Keine",10:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1"
,13:"ingen",15:"\u041D\u0435\u0442",16:"Ninguno(s)",18:"\u041D\u0435\u043C\u0430\u0454"
};C.Normal={1:"normalno",2:"\u041D\u043E\u0440\u043C\u0430\u043B\u043D\u043E",3:
"\u6B63\u5E38",4:"Norm\xE1ln\xED",0:"Normal",5:"Normaal",6:"Normaalne",7:"Normaali"
,8:"Normale",10:"\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03CC",15:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E"
,18:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E"};C.Aju={1:"Nisu dodjeljene"
,2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0437\u0430\u0434\u0430\u0434\u0435\u043D\u0438"
,0:"Not assigned yet",6:"Pole veel m\xE4\xE4ratud",7:"Ei viel\xE4 m\xE4\xE4ritetty"
,8:"Pas encore attribu\xE9",9:"Nicht zugewiesen",10:"\u0394\u03B5\u03BD \u03B1\u03BD\u03B1\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B1\u03BA\u03CC\u03BC\u03B1",13:"Ikke tildelt enda",15:"\u041D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E"
,18:"\u041D\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E"};
C.A5c={1:"Broj novih \u017Eivotinja",2:"\u041D\u043E\u043C\u0435\u0440, \u043A\u043E\u0439\u0442\u043E \u0449\u0435 "+
"\u0431\u044A\u0434\u0435 \u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D",3:"\u8981\u5EFA\u7ACB\u7684\u6578\u91CF"
,4:"\u010C\xEDslo nov\xE9ho zv\xED\u0159ete",0:"Number to be created",5:"Aantal nieuwe dieren"
,6:"Loodavate loomade arv",7:"Luotava numero",8:"Nombre d\u2019animaux neufs",9:
"Anzahl neuer Tiere",10:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C0\u03C1\u03CC\u03C2 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF\u03B1"
,13:"Nummer som skal opprettes",15:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u043E\u0432\u044B\u0445 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",16:"N\xFAmero de animales nuevos"
,18:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u043E\u0432\u0438\u0445 "+
"\u0442\u0432\u0430\u0440\u0438\u043D"};C.ACu={1:"od",0:"of",7:"/",8:"de",9:"von"
,10:"\u03C4\u03BF\u03C5",13:"Av",15:"\u043E\u0442",18:"\u0432\u0456\u0434"};C.Off={
1:"Isklju\u010Deno",2:"\u0418\u0437\u043A\u043B.",3:"\u95DC\u9589",4:"Vypnuto",0:
"Off",5:"Uit",6:"V\xE4ljas",7:"Pois p\xE4\xE4lt\xE4",8:"\xC9teint",9:"Aus",10:"\u03A3\u03B2\u03B7\u03C3\u03C4\u03CC"
,13:"Av",15:"\u0412\u044B\u043A\u043B.",16:"apagada",17:"Kapat",18:"\u0412\u0438\u043C\u043A."
};C.ACv={1:"isklju\u010Di desno",2:"\u0418\u0437\u043C\u0435\u0441\u0442\u0432\u0430\u043D\u0435 \u0432 \u0434\u044F\u0441\u043D\u043E"
,3:"\u504F\u79FB\u91CF",4:"Okam\u017Eit\xE9 nastaven\xED",0:"Right offset",5:"Offset rechts"
,6:"\xD5ige seade",7:"Oikea siirtym\xE4",8:"Offset droit",9:"Offset rechts",10:"\u0394\u03B5\u03BE\u03B9\u03AC \u03BC\u03B5\u03C4\u03B1\u03C4\u03CC\u03C0\u03B9\u03C3\u03B7"
,13:"H\xF8yre offset",15:"\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0432\u043F\u0440\u0430\u0432\u043E"
,16:"Compensaci\xF3n derecha",18:"\u0417\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0432\u043F\u0440\u0430\u0432\u043E"
};C.Ok={3:"\u597D\u7684",0:"OK",6:"Jah",10:"\u0395\u03BD\u03C4\u03AC\u03BE\u03B5\u03B9"
,15:"\u041E\u041A",18:"\u041E\u041A"};C.A5d={1:"Uklju\u010Deno",2:"\u0412\u043A\u043B."
,3:"\u958B\u555F",4:"Zapnuto",0:"On",5:"Aan",6:"Sees",7:"P\xE4\xE4ll\xE4",8:"Allum\xE9"
,9:"An",10:"\u0391\u03BD\u03BF\u03B9\u03BA\u03C4\u03CC",13:"P\xE5",15:"\u0412\u043A\u043B."
,16:"encendida",17:"A\xE7\u0131k",18:"\u0423\u0432\u0456\u043C\u043A."};C.AqN={0:
"On watch",9:"Beobachtung"};C.Bkl={1:"Jedan interval za brojeve za \u2642 i \u2640"
,2:"\u0415\u0434\u0438\u043D \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u0437\u0430 \u2642 \u0438 \u2640",0:"One single range for both \u2642 and \u2640"
,6:"\xDCks vahemik nii \u2642 kui \u2640 jaoks",7:"Yksi alue sek\xE4 \u2642 ett\xE4 \u2640"
,8:"Une seule gamme pour \u2642 et \u2640",9:"Ein einziger Nr.- Bereich f\xFCr \u2642 und \u2640"
,10:"\u0388\u03BD\u03B1 \u03BC\u03B5\u03BC\u03BF\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF "+
"\u03B5\u03CD\u03C1\u03BF\u03C2 \u03C4\u03CC\u03C3\u03BF \u03B3\u03B9\u03B1 "+"\u2642 \u03CC\u03C3\u03BF \u03BA\u03B1\u03B9 \u03B3\u03B9\u03B1 \u2640"
,13:"Et enkelt omr\xE5de for b\xE5de \u2642 og \u2640",15:"\u041E\u0434\u0438\u043D \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u2642 \u0438 "+"\u2640"
,18:"\u041E\u0434\u0438\u043D \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D "+
"\u043D\u043E\u043C\u0435\u0440\u0456\u0432 \u0434\u043B\u044F \u2642 \u0442\u0430 "+
"\u2640"};C.Bkm={1:"druga oboljenja",2:"\u0414\u0440\u0443\u0433\u0438 \u0437\u0430\u0431\u043E\u043B\u044F\u0432\u0430\u043D\u0438\u044F"
,0:"Other illnesses",6:"Teised haigused",7:"Muut sairaudet",8:"Autres maladies",
9:"Sonstige Krankheiten",10:"\u0386\u03BB\u03BB\u03B5\u03C2 \u03B1\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2"
,13:"Andre sykdommer",15:"\u041F\u0440\u043E\u0447\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F"
,18:"\u0406\u043D\u0448\u0456 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A7y={1:"drugi razlozi",2:"\u0414\u0440\u0443\u0433\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"
,0:"Other reasons",6:"Teised p\xF5hjused",7:"Muut syyt",8:"Autres raisons",9:"Sonstige Gr\xFCnde"
,10:"\u0386\u03BB\u03BB\u03B5\u03C2 \u03B1\u03B9\u03C4\u03AF\u03B5\u03C2",13:"Andre grunner"
,15:"\u0418\u043D\u044B\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B",18:"\u0406\u043D\u0448\u0456 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"
};C.AD8={1:"Ukupno",2:"\u041E\u0431\u0449",3:"\u5408\u8A08",4:"Celkem",0:"Overall"
,5:"Totaal",6:"\xDCldine",7:"Yleinen",8:"Total",9:"Gesamt",10:"\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AC"
,13:"Alt i alt",15:"\u0412\u0441\u0435\u0433\u043E",16:"Total",18:"\u0423\u0441\u044C\u043E\u0433\u043E"
};C.A7C={1:"nisko",2:"\u0421\u043B\u0430\u0431\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044F\u043D\u0435"
,0:"Poor performance",6:"Kehv tulemus",7:"Huono suorituskyky",8:"Mauvaise performance"
,9:"Geringe Leistung",10:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AE \u03B1\u03C0\u03CC\u03B4\u03BF\u03C3\u03B7"
,13:"D\xE5rlig ytelse",15:"\u041C\u0430\u043B\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C"
,18:"\u041C\u0430\u043B\u0430 \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C"
};C.Pound={1:"funta",2:"\u041B\u0438\u0431\u0440\u0438",3:"\u78C5",4:"Libra",0:"Pound"
,5:"Pond",6:"Nael",7:"pauna",8:"Livre",9:"Pfund",10:"\u039B\u03AF\u03B2\u03C1\u03B1"
,13:"Pund",15:"\u0424\u0443\u043D\u0442",16:"Libras",17:"Paund",18:"\u0424\u0443\u043D\u0442"
};C.Bku={2:"\u041B\u0438\u0431\u0440\u0438/\u0434\u0435\u043D",3:"\u78C5/\u65E5"
,4:"Libra/den",0:"lbs/d",6:"Kg p\xE4evas",7:"lbs/pv",8:"lbs/jour",10:"\u039B\u03AF\u03B2\u03C1\u03B5\u03C2/\u03BC\u03AD\u03C1\u03B1"
,13:"Pund/dag",15:"lbs/\u0434\u0435\u043D\u044C",17:"G\xFCnl\xFCk paund",18:"lbs/\u0434\u0435\u043D\u044C"
};C.PC={1:"o\u010Dekivano",2:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0430\u043D\u043E"
,3:"\u9810\u6E2C",4:"P\u0159edpov\u011Bzen\xE1",0:"Predicted",5:"Verwachte",6:"Ennustatud"
,7:"Ennustettu",8:"Pr\xE9vue",9:"Erwartet",10:"\u03A0\u03C1\u03BF\u03B2\u03BB\u03AD\u03C6\u03B8\u03B7\u03BA\u03B5"
,13:"Sp\xE5dd",15:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438\u0440\u0443\u0435\u043C\u044B\u0439"
,16:"Pronosticado",18:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0443\u0454\u043C\u0438\u0439"
};C.AEb={0:"Premises-ID number",6:"Eelduste ID-number",7:"Maatilan numero",8:"N\xB0 d\'exploitation"
,9:"Betriebsnummer",10:"\u03A0\u03C1\u03BF\u03CB\u03C0\u03CC\u03B8\u03B5\u03C3\u03B5\u03B9\u03C2-\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,13:"Lokale-ID-nummer"};C.Bkv={1:"Problemati\u010Dna prilikom mu\u017Enje",2:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 "+
"\u0434\u043E\u0435\u043D\u0435",0:"Problematic milking behavior",6:"Probleemne l\xFCpsik\xE4itumine"
,7:"Ongelmallinen lypsyk\xE4ytt\xE4ytyminen",8:"Comportement probl\xE9matique lors de la traite"
,9:"Problematisches Melkverhalten",10:"\u03A0\u03C1\u03BF\u03B2\u03BB\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE "+
"\u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03C3\u03C4\u03BF "+
"\u03AC\u03C1\u03BC\u03B5\u03B3\u03BC\u03B1",13:"Problematisk melkeadferd",15:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 "+
"\u043F\u0440\u0438 \u0434\u043E\u0435\u043D\u0438\u0438",18:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430 "+
"\u043F\u0440\u0438 \u0434\u043E\u0457\u043D\u043D\u0456"};C.Bkw={1:"Problemati\u010Dno pona\u0161enje u stadu"
,2:"\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",0:"Problematic social behavior"
,6:"Probleemne sotsiaalne k\xE4itumine",7:"Ongelmainen sosiaalinen k\xE4ytt\xE4ytyminen"
,8:"Comportement social probl\xE9matique",9:"Problematisches Sozialverhalten",10:
"\u03A0\u03C1\u03BF\u03B2\u03BB\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE "+"\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03B9\u03BA\u03AE \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC"
,13:"Problematisk sosial adferd",15:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u043E\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 "+
"\u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",18:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u0430 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430 "+
"\u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430"};C.Bkx={0:"Produced",8:
"Produit",9:"Produziert"};C.Bky={1:"Proizvo\u0111a\u010D",2:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B"
,0:"Producer",6:"Tootja",7:"Tuottaja",8:"Producteur",9:"Hersteller",10:"\u03A0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03CC\u03C2"
,13:"Produsent",15:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"
,16:"Fabricante",18:"\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A"};C.Bkz={1:
"Ubacite USB sa va\u017Ee\u0107im programom - a\u017Euriranje",2:"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u0442\u0430\u0432\u0435\u0442\u0435 "+
"USB \u0444\u043B\u0430\u0448 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E "+
"\u0441 \u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0444\u0430\u0439\u043B "+"\u043D\u0430 \u0444\u044A\u0440\u043C\u0443\u0435\u0440\u0430 \u2019firmware.vcu\u2019!"
,0:"Insert USB flash drive with valid firmware file \u2019firmware.vcu\u2019\n(inside "+
"directory \u2019update\u2019), please!",6:"Siseste USB kehtiva tarkvaraga. Uuenda palun PIN!"
,7:"Aseta USB-muisti~tikku, jossa on kelvollinen firm~ware-tie~dos~to \u2019firmware.vcu\u2019, "+
"kiitos!",8:"Ins\xE9rez une cl\xE9 USB avec un logiciel valide \u2019firmware.vcu\u2019, "+
"s\u2019il vous pla\xEEt\xA0!",9:"Bitte USB-Stick mit g\xFCltiger Firmware-Datei \u2019firmware.vcu\u2019\n(im "+
"Verzeichnis \u2019update\u2019) einstecken!",10:"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 "+
"\u03BC\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 "+
"USB \u03BC\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF "+
"\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03BF\u03CD \xABfirmware.vcu\xBB, "+
"\u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE!",13:"Sett inn USB med gyldig programfil \u2019firmware.vcu\u2019 takk!"
,15:"\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 USB \u0441 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C "+
"\u0444\u0430\u0439\u043B\u043E\u043C \u041F\u041E \u2019firmware.vcu\u2019 "+"(\u0432 \u043F\u0430\u043F\u043A\u0435 \u2019update\u2019)!"
,18:"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 USB \u0456\u0437 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C "+
"\u0444\u0430\u0439\u043B\u043E\u043C \u041F\u041E \u2019firmware.vcu\u2019 "+"(\u0432 \u043F\u0430\u043F\u0446\u0456 \u2019update\u2019)!"
};C.QC={1:"Protokol",2:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B",3:"\u5354\u8B70"
,4:"Protokol",0:"Protocol",6:"Protokoll",7:"Kokoonpano",8:"Protocole",9:"Protokoll"
,10:"\u03A0\u03C1\u03BF\u03C4\u03CC\u03BA\u03C9\u03BB\u03BF",13:"Protikoll",15:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B"
,16:"Protocolo",17:"Protokol",18:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B"
};C.BkA={0:"Purchase notices were deleted after export!",9:"Zugangsmeldungen wurden nach Export gel\xF6scht!"
};C.AEd={0:"Purchased animals",9:"Zuk\xE4ufe"};C.Quadruplets={1:"\u010Cetvorke",
0:"Quadruplets",6:"Nelikud",7:"Neloset",8:"Quadrupl\xE9",9:"Vierlinge",10:"\u03A4\u03B5\u03C4\u03C1\u03AC\u03B4\u03C5\u03BC\u03B1"
,13:"Firlinger",15:"\u0427\u0435\u0442\u0432\u0435\u0440\u043E \u0431\u043B\u0438\u0437\u043D\u0435\u0446\u043E\u0432"
,18:"\u0427\u043E\u0442\u0438\u0440\u0438 \u0431\u043B\u0438\u0437\u043D\u044E\u043A\u0438"
};C.A7F={1:"Kvalitet kolostruma",2:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043B\u0430\u0441\u0442\u0440\u0430"
,3:"\u521D\u4E73\u54C1\u8CEA",4:"Kvalita kolostrum",0:"Quality of colostrum",5:"Biestkwaliteit"
,6:"Ternespiima kvaliteet",7:"Ternimaidon laatu",8:"Qualit\xE9 du colostrum",9:"Kolostrumqualit\xE4t"
,10:"\u03A0\u03BF\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03C1\u03C9\u03C4\u03BF\u03B3\u03AC\u03BB\u03B1\u03BA\u03C4\u03BF\u03C2"
,13:"Kvaliteten p\xE5 r\xE5melk",15:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0430"
,16:"Calidad del calostro",17:"Kolostrum miktar\u0131",18:"\u042F\u043A\u0456\u0441\u0442\u044C \u043A\u043E\u043B\u043E\u0441\u0442\u0440\u0443\u043C\u0443"
};C.QuestionAddAnotherCalfMultiples={1:"\u017Divotinja je uspje\u0161no registrovana. Da li \u017Eelite registrivati "+
"i ostale \u017Eivotinje od iste majke?",0:"New animal (from multiple birth) was registered successfully!\n\nWould "+
"you now like to register its sibling, too?",6:"Mitmiks\xFCnni uue looma registreerimine \xF5nnestus! \n\nKas soovite j\xE4tkata "+
"teise sama s\xFCnni looma registreerimisega?",7:"Uusi el\xE4in (kaksosista) rekister\xF6itiin onnistuneesti!\n\nHaluatko "+
"nyt rekister\xF6id\xE4 my\xF6s sen sisaruksen?",8:"Nouvel animal d\'une naissance multiple enregistr\xE9 avec succ\xE8s\xA0!\nVoulez-vous "+
"enregistrer autre l\'animal de la fratrie\xA0?",9:"Neues Tier aus Mehrlingsgeburt erfolgreich angemeldet!\nM\xF6chten Sie "+
"jetzt das dazugeh\xF6rige Geschwister~tier anmelden?",10:"\u03A4\u03BF \u03BD\u03AD\u03BF \u03B6\u03CE\u03BF (\u03B1\u03C0\u03CC "+
"\u03C0\u03BF\u03BB\u03CD\u03B4\u03C5\u03BC\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7) "+
"\u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B5 \u03BC\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!\n\n\u0398\u03B1 \u03B8\u03AD\u03BB\u03B1\u03C4\u03B5 "+
"\u03C4\u03CE\u03C1\u03B1 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 "+
"\u03BA\u03B1\u03B9 \u03C4\u03BF \u03B1\u03B4\u03B5\u03C1\u03C6\u03AC\u03BA\u03B9 "+
"\u03C4\u03BF\u03C5;",13:"Nytt dyr (fra tvilling/flerf\xF8dsel) ble registrert!\n\nVil du ogs\xE5 "+
"registrere s\xF8sken?",15:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0438\u0437 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E!\n\u0425\u043E\u0442\u0438\u0442\u0435 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u0441\u0435\u0439\u0447\u0430\u0441?",18:"\u041D\u043E\u0432\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0456\u0437 "+
"\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u0430\u044F "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E!\n\u0427\u0438 "+
"\u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 "+
"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0443 \u0440\u043E\u0434\u0438\u043D\u043D\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0437\u0430\u0440\u0430\u0437?"};C.
AmU={3:"\u554F\u865F",0:"?",8:"\xA0?"};C.A7G={1:"RFID \u010Dita\u010D",0:"RFID reader"
,6:"RFID lugeja",7:"RFID lukija",8:"Lecteur RFID",9:"RFID-Leseger\xE4t",10:"\u0391\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03C4\u03B7\u03C2 RFID"
,13:"RFID-leser",15:"\u0421\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C RFID"
,18:"\u0417\u0447\u0438\u0442\u0443\u0432\u0430\u0447 RFID"};C.BkC={0:"RGB LED",
6:"RGB punane"};C.A7I={1:"real time sat",0:"Real time clock",6:"Reaalaja kell",7:
"Reaaliaikainen kello",8:"Module d\'horloge",9:"Uhrenbaustein",10:"\u03A1\u03BF\u03BB\u03CC\u03B9 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03BF\u03CD "+
"\u03C7\u03C1\u03CC\u03BD\u03BF\u03C5",13:"Sanntids klokke",15:"\u041C\u043E\u0434\u0443\u043B\u044C \u0447\u0430\u0441\u043E\u0432"
,18:"\u041C\u043E\u0434\u0443\u043B\u044C \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0430"
};C.RangeTest={1:"Test dosega",2:"\u0422\u0435\u0441\u0442 \u043D\u0430 \u043E\u0431\u0445\u0432\u0430\u0442\u0430"
,3:"\u7BC4\u570D\u6E2C\u8A66",4:"Rozsah testu",0:"Range test",6:"Vahemiku test",
7:"Aluetesti",8:"Test de l\u2019autonomie",9:"Reichweitentest",10:"\u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B5\u03CD\u03C1\u03BF\u03C5\u03C2"
,13:"Rangering",15:"\u0422\u0435\u0441\u0442 \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",16:"Prueba de alcance",17:"Mesafe testi"
,18:"\u0422\u0435\u0441\u0442 \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 "+
"\u0434\u0456\u0457"};C.A7J={1:"Ocjena",2:"\u041E\u0446\u0435\u043D\u043A\u0430"
,3:"\u6BD4\u7387",4:"Hodnotit",0:"Rate",5:"Beoordelen",6:"Hinda",7:"Taso",8:"\xC9valuer"
,9:"Bewerten",10:"\u0394\u03CE\u03C3\u03B5 \u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7"
,13:"Vurdere",15:"\u041E\u0446\u0435\u043D\u0438\u0442\u044C",16:"Evaluar",17:"Oran"
,18:"\u041E\u0446\u0456\u043D\u0438\u0442\u0438"};C.AqT={1:"Ocjenjivanje \u017Eivotinje"
,2:"\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u5C0F\u725B\u8A55\u5206",4:"Hodnotit zv\xED\u0159e",0:"Rate animal",5:"Dier beoordelen"
,6:"Hinda looma",7:"Arvioi el\xE4in",8:"Evaluer l\u2019animal",9:"Tier bewerten"
,10:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF \u03B6\u03CE\u03BF",13:"Vurder dyr",15:"\u041E\u0446\u0435\u043D\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,16:"Evaluar animal",18:"\u041E\u0446\u0456\u043D\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.Rating={1:"Ocjenjivanje",2:"\u041E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435"
,3:"\u8A55\u5206",4:"Hodnocen\xED",0:"Rating",5:"Beoordeling",6:"Hinnang",7:"Luokitus"
,8:"\xC9valuation",9:"Bewertung",10:"\u0395\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7"
,13:"Vurdering",15:"\u041E\u0446\u0435\u043D\u043A\u0430",16:"Evaluaci\xF3n",17:
"Derecelendirme",18:"\u041E\u0446\u0456\u043D\u043A\u0430"};C.A7K={1:"Ocjenjivanje \u017Eivotinja"
,2:"\u041E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438"
,3:"\u5C0F\u725B\u7684\u8A55\u5206",4:"Hodnocen\xED zv\xED\u0159at",0:"Rating of animals"
,6:"Loomade hinnang",7:"El\xE4inten luokitus",8:"Evaluation des animaux",9:"Tierbewertung"
,10:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2 \u03C4\u03C9\u03BD "+
"\u03B6\u03CE\u03C9\u03BD",13:"Vurdering av dyr",15:"\u041E\u0446\u0435\u043D\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"Evaluaci\xF3n de animales",18:"\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BkE={1:"Ukupno stanje \u017Eivotinja",2:"\u041E\u0431\u0449\u043E \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,3:"\u5916\u89C0\u8A55\u5206",4:"Hodnocen\xED vzhledu celkov\xE9",0:"General condition"
,5:"Algemeen optreden",6:"Keskmine seisund",7:"Yleiskunto",8:"\xC9tat g\xE9n\xE9ral"
,9:"Allgemein~zustand",10:"\u0393\u03B5\u03BD\u03B9\u03BA\u03CC\u03C4\u03B5\u03C1\u03B7 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7"
,13:"generell tilstand",15:"\u041E\u0431\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,16:"Aspecto general",17:"Genel g\xF6r\xFCn\xFCm",18:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u0430\u043D"
};C.AEf={1:"Stanje",2:"\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u044F",3:"\u8A55\u5206"
,4:"Hodnocen\xED vzhledu zkr\xE1cen\xE9",0:"Condition",5:"Uiterlijk",6:"Seisund"
,7:"Ulkon\xE4k\xF6",8:"\xC9tat",9:"Zustand",10:"\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7"
,13:"Tilstand",15:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",16:"Aspecto"
,17:"G\xF6r\xFCn\xFCm",18:"\u0421\u0442\u0430\u043D"};C.BkF={1:"Konzistencija izmeta"
,2:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+"\u043D\u0430 \u0438\u0437\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F\u0442\u0430"
,3:"\u7CDE\u4FBF\u5206\u7D1A",4:"Hodnocen\xED konzistence v\xFDkal\u016F",0:"Consistency of faeces"
,5:"Mestconsistentie",6:"Roe konsistents",7:"Ulosteiden yhdenmukaisuus",8:"Consistance f\xE9cale"
,9:"Kotbeschaffenheit",10:"\u03A3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1 \u03C4\u03C9\u03BD \u03C0\u03B5\u03C1\u03B9\u03C4\u03C4\u03C9\u03BC\u03AC\u03C4\u03C9\u03BD"
,13:"Konsistens p\xE5 avf\xF8ring",15:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0438\u0439",16:"Consistencia\nde las heces",17:
"D\u0131\u015Fk\u0131 derecelendirmesi",18:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0456\u0439"};C.AEh={1:"Izmet",2:"\u0418\u0437\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F"
,3:"\u7CDE\u4FBF",4:"Hodnocen\xED konzistence v\xFDkal\u016F zkr\xE1cen\xE9",0:"Faeces"
,5:"Mest",6:"Roe",7:"Ulosteet",8:"F\xE9cal",9:"Kot",10:"\u03A0\u03B5\u03C1\u03B9\u03C4\u03C4\u03CE\u03BC\u03B1\u03C4\u03B1"
,13:"Avf\xF8ring",15:"\u0424\u0435\u043A\u0430\u043B\u0438\u0438",16:"Heces",18:
"\u0424\u0435\u043A\u0430\u043B\u0456\u0457"};C.BkG={1:"Konzumacija hrane",2:"\u0418\u0437\u044F\u0434\u0435\u043D\u0430 \u0445\u0440\u0430\u043D\u0430"
,3:"\u63A1\u98DF",4:"Hodnocen\xED p\u0159\xEDjmu krmen\xED",0:"Feed intake",5:"Voeropname"
,6:"S\xF6\xF6mus",7:"Rehunsy\xF6nti",8:"Consommation",9:"Futteraufnahme",10:"\u03A0\u03C1\u03CC\u03C3\u03BB\u03B7\u03C8\u03B7 \u03C4\u03C1\u03BF\u03C6\u03AE\u03C2"
,13:"F\xF4ropptak",15:"\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0440\u043C\u0430"
,16:"Ingesta de alimento",17:"Besin derecelendirmesi",18:"\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u043C\u0443"
};C.BkH={1:"Oboljenja disajnih puteva",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0430 "+
"\u0431\u043E\u043B\u0435\u0441\u0442",3:"\u547C\u5438\u75BE\u75C5",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED"
,0:"Respiratory disease",5:"Ademwegsziekte",6:"Hingamisteede haigused",7:"Hengityssairaus"
,8:"Maladie respiratoire",9:"Atemwegserkrankung",10:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B1 \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,13:"Luftveissykdom",15:"\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0434\u044B\u0445\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 "+
"\u043F\u0443\u0442\u0435\u0439",16:"Enfermedad respiratoria",17:"Solunum derecelendirmesi"
,18:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 "+
"\u0448\u043B\u044F\u0445\u0456\u0432"};C.BkI={1:"Oboljenja disajnih puteva",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0430 "+
"\u0431\u043E\u043B\u0435\u0441\u0442",3:"\u547C\u5438\u9053\u75BE\u75C5",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED pomoc"
,0:"Respiratory disease",5:"Ademwegsziekte",6:"Hingamisteede haigused",7:"Hengitys~sairaus"
,8:"Maladie respiratoire",9:"Atemwege",10:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B1 \u03B1\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD"
,13:"Luftveissykdom",15:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0435 "+
"\u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435",16:"Enfermedad respiratoria"
,18:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0434\u0438\u0445\u0430\u043B\u044C\u043D\u0438\u0445 "+
"\u0448\u043B\u044F\u0445\u0456\u0432"};C.ARH={2:"\u0420",3:"A",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED po\u010D\xE1te\u010Dn\xED"
,0:"R",7:"H",9:"A",10:"\u0391",15:"\u0410"};C.AEi={1:"Disajni putevi",2:"\u0420\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u0438"
,3:"\u547C\u5438",4:"Hodnocen\xED respira\u010Dn\xEDch nemoc\xED zkr\xE1cen\xE9"
,0:"Respiratory",5:"Ademwegen",6:"Hingamine",7:"Hengitys",8:"Voie respiratoire",
9:"Atemwege",10:"\u0391\u03BD\u03B1\u03C0\u03BD\u03B5\u03C5\u03C3\u03C4\u03B9\u03BA\u03CC"
,13:"Luftveiene",15:"\u041E\u0440\u0433\u0430\u043D\u044B \u0434\u044B\u0445\u0430\u043D\u0438\u044F"
,16:"V\xEDas respi~ratorias",18:"\u041E\u0440\u0433\u0430\u043D\u0438 \u0434\u0438\u0445\u0430\u043D\u043D\u044F"
};C.BkJ={2:"\u0414\u0438\u0430\u0440\u0438\u044F",4:"Pr\u016Fjem",0:"Scours",5:"Diarree"
,6:"K\xF5hulahtisus",7:"Ulosteet",8:"Diarrh\xE9e",9:"Kotkonsistenz",10:"\u0394\u03B9\u03AC\u03C1\u03C1\u03BF\u03B9\u03B1"
,13:"Diare vurdering",15:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0438\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0438\u0439",16:"Diarrea",18:"\u041A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F "+
"\u0444\u0435\u043A\u0430\u043B\u0456\u0439"};C.ARI={2:"\u041E",3:"\u8179\u7009"
,4:"Hodnocen\xED zv\xED\u0159ete po\u010D\xE1te\u010Dn\xED",0:"S",6:"T",7:"U",8:
"D",9:"K",10:"\u0394",15:"\u041A",16:"D"};C.AvP={1:"Ocjenjivanje",2:"\u041E\u0446\u0435\u043D\u043A\u0438"
,3:"\u8A55\u5206",4:"Hodnocen\xED",0:"Ratings",5:"Beoordelin~gen",6:"Tase",7:"Luokitukset"
,8:"\xC9valuations",9:"Bewertungen",10:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2"
,13:"Vurderinger",15:"\u041E\u0446\u0435\u043D\u043A\u0438",16:"Evaluaciones",18:
"\u041E\u0446\u0456\u043D\u043A\u0438"};C.ReasonOfLeaving={1:"Razlog napu\u0161tanja"
,2:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0437\u0430 \u043D\u0430\u043F\u0443\u0441\u043A\u0430\u043D\u0435"
,0:"Reason of leaving",6:"Lahkumise p\xF5hjus",7:"Poiston syy",8:"Motif du d\xE9part"
,9:"Abgangsursache",10:"\u039B\u03CC\u03B3\u03BF\u03C2 \u03B1\u03C0\u03BF\u03C7\u03CE\u03C1\u03B7\u03C3\u03B7\u03C2"
,13:"Grunn til \xE5 forlate",15:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u0442\u0435\u0440\u0438"
,18:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0442\u0440\u0430\u0442\u0438"
};C.ARK={1:"Napunite aparat!",2:"\u0417\u0430\u0440\u0435\u0434\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E!"
,3:"\u5145\u96FB\u88DD\u7F6E\uFF01",4:"Dobijte za\u0159\xEDzen\xED",0:"Recharge device!"
,5:"Apparaat opladen!",6:"Lae seade",7:"Lataa laite!",8:"Rechargez le dispositif\xA0!"
,9:"Bitte Ger\xE4t aufladen!",10:"\u03A6\u03BF\u03C1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE!"
,13:"Lad opp enheten",15:"\u0417\u0430\u0440\u044F\u0434\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E!"
,16:"\xA1Recargar dispositivo!",18:"\u0417\u0430\u0440\u044F\u0434\u0456\u0442\u044C \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439!"
};C.BkK={0:"Record {1} of {2}",6:"Salvesta{1} {2}st",7:"Enn\xE4tys {1} / {2}",8:
"Enregistrement {1} de {2}",9:"Datensatz {1} von {2}",10:"\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE {1} \u03B1\u03C0\u03CC {2}"
,13:"Registrering {1} av {2}",15:"\u0417\u0430\u043F\u0438\u0441\u044C {1} \u0438\u0437 {2}"
,18:"\u0417\u0430\u043F\u0438\u0441 {1} \u0437 {2}"};C.AEj={0:"Recorded values",
9:"Erfasste Werte"};C.BkM={1:"registrivati",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u044A\u0440"
,3:"\u767B\u9304",4:"Registrovat",0:"Register",5:"Aanleggen",6:"Registreeri",7:"Rekister\xF6idy"
,8:"Enregistrer",9:"Anlegen",10:"\u039A\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03C4\u03B5"
,13:"Registrere",15:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,16:"Registrar",18:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438"
};C.BkN={1:"registrovana",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438"
,3:"\u767B\u9304",4:"Registrovan\xFD",0:"Registered",5:"Registreerd",6:"Registreeritud"
,7:"Rekister\xF6ity",8:"Enregistr\xE9",9:"Registriert",10:"\u0395\u03B3\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF"
,13:"Registrert",15:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D"
,16:"Registrado",17:"Kaydedildi",18:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E"
};C.AqW={1:"Registracija \u017Eivotinje",2:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438",3:"\u8A3B\u518A",4:"Registrace",0:"Registration of animals"
,5:"Dieren registreren",6:"Registreeri loom",7:"Rekister\xF6inti",8:"Enregistrer d`animaux"
,9:"Tiere neu anlegen",10:"\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE",13:"Registrering av dyr"
,15:"\u0420\u0435\u0433\u0438\u0442\u0441\u0440\u0430\u0446\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"Registrar animales",17:"Kay\u0131t",18:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.AqX={0:"Remove from watch list",9:"Tier von Beobachtungs~liste entfernen"};C.
A7M={1:"Ponovite mjerenje",2:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438 \u0438\u0437\u043C."
,0:"Repeat measurement",6:"Korda tegevust",7:"Toista mittaus",8:"R\xE9p\xE9ter la mesure"
,9:"Messung wiederholen",10:"\u0395\u03C0\u03B1\u03BD\u03B1\u03BB\u03AC\u03B2\u03B5\u03C4\u03B5 \u03C4\u03B7 "+
"\u03BC\u03AD\u03C4\u03C1\u03B7\u03C3\u03B7",13:"M\xE5l en gang til",15:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435"
,18:"\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.A7O={0:"Reset chain of actions",8:"R\xE9initialisation de la cha\xEEne d\'actions"
,9:"Reset Aktionskette"};C.Aq5={1:"Monitro resursa",2:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0438\u0442\u0435"
,3:"\u8CC7\u6E90\u76E3\u63A7\u5668",4:"Sledov\xE1n\xED zdroje",0:"Resource monitor"
,6:"Vahendite j\xE4lgimine",7:"Resurssien valvonta",8:"Suivi des ressources",9:"Ressourcenmonitor"
,10:"\u03A0\u03B1\u03C1\u03B1\u03BA\u03BF\u03BB\u03BF\u03CD\u03B8\u03B7\u03C3\u03B7 "+
"\u03C0\u03CC\u03C1\u03C9\u03BD",13:"Ressurs overv\xE5ker",15:"\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432"
,16:"Monitor de recursos",18:"\u041C\u043E\u043D\u0456\u0442\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432"
};C.A7P={2:"\u0420\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043D\u0435"
,3:"\u91CD\u65B0\u555F\u52D5",0:"Restart",5:"Nieuwstart",6:"Taask\xE4ivita",7:"Uudelleenk\xE4ynnistys"
,8:"Red\xE9marrage",9:"Neustart",10:"\u0395\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03AF\u03B7\u03C3\u03B7"
,13:"Omstart",15:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"
,16:"Reinicio",17:"Yeniden ba\u015Flat",18:"\u041F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"
};C.AEo={0:"Restore backup",8:"R\xE9tablir la sauvegarde des donn\xE9es",9:"Datensicherung einspielen"
};C.BkS={0:"Restore in progress!\n\nThis process may take a minute or longer, please "+
"be patient!",9:"Daten werden wiederher~gestellt!\n\nDieser Vorgang kann eine Minute oder "+
"l\xE4nger dauern, etwas Geduld bitte!"};C.A7S={1:"SD kartica",0:"SD Card",6:"SD-kaart"
,7:"SD Kortti",8:"Carte SD",9:"SD-Speicherkarte",10:"\u039A\u03AC\u03C1\u03C4\u03B1 SD"
,13:"SD kort",15:"\u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\u044F\u0442\u0438 SD"
,18:"\u041A\u0430\u0440\u0442\u0430 \u043F\u0430\u043C\'\u044F\u0442\u0456 "+"SD"
};C.Bk0={1:"skenirati",2:"\u0421\u043A\u0430\u043D\u0438~\u0440\u0430\u043D\u0435"
,3:"\u6383\u63CF",4:"Ske~no~vat",0:"Scan",6:"Skan~neeri",7:"Skan~naa",8:"Scan~ner"
,10:"\u0391\u03BD\u03B9\u03C7~\u03BD\u03B5\u03CD\u03C3\u03C4\u03B5",13:"Skanning"
,15:"\u0421\u043A\u0430\u043D\u0438~\u0440\u043E~\u0432\u0430\u043D\u0438\u0435"
,16:"Esca~neo",17:"Tara",18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F"
};C.Bk1={0:"Scan ID of animal",8:"Scanner le n\xB0 d\'identification",9:"Ohrmarkennr. einscannen"
,15:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID "+"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.Bk2={1:"Skeniranje u\u0161ne markice",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u0439 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 "+
"\u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430",0:"Scan in electronic\near tag"
,6:"Skanni elektrooniline\nk\xF5rvam\xE4rk",7:"Lue elektroninen\nkorvamerkki",8:
"Lecture (scan) de la marque auriculaire \xE9lectronique",9:"Elektronische Ohrmarke einscannen"
,10:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03CC\n\u03B5\u03BD\u03CE\u03C4\u03B9\u03BF"
,13:"Skann inn elektronisk\near tag",15:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0443\u0448\u043D\u043E\u0439 "+
"\u0431\u0438\u0440\u043A\u0438",18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 "+
"\u0432\u0443\u0448\u043D\u043E\u0457 \u0431\u0456\u0440\u043A\u0438"};C.ScanError={
1:"gre\u0161ka pri skeniranju",2:"\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435"
,3:"\u6383\u63CF\u932F\u8AA4",4:"Chyba skenov\xE1n\xED",0:"Scan error",5:"Fout bij scannen"
,6:"Skanneerimise viga",7:"Skannausvirhe",8:"Erreur lors du scan",9:"Fehler beim Scannen"
,10:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B1\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7\u03C2"
,13:"Feil ved skanning",15:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
,16:"Error de escaneo",17:"Hatay\u0131 tara",18:"\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F"
};C.ScanNotFound={1:"skenirano nije prona\u0111eno",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u043D\u0435 "+
"\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u043E",3:"\u672A\u6383\u63CF\u5230"
,4:"Skenov\xE1n\xED nebylo nalezeno",0:"Scan not found",5:"Scan niet gevonden",6:
"Skanneering pole leitav",7:"Skannausta ei l\xF6ytynyt",8:"Scan ne pas trouver",
9:"Scan nicht gefunden",10:"\u0397 \u03B1\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7 \u03B4\u03B5\u03BD "+
"\u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",13:"Finner ikke skanningen",15:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",16:"Escaneo no encontrado"
,18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435 "+
"\u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"};C.Aq7={1:"skeniranje broja",
2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043D\u043E\u043C\u0435\u0440"
,3:"\u6383\u63CF\u865F\u78BC",4:"Skenovat \u010D\xEDslo",0:"Scan number",5:"Nummer scannen"
,6:"Skanneeringu number",7:"Skannaa numero",8:"Scanner le num\xE9ro",9:"Nr. einscannen"
,10:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C3\u03AC\u03C1\u03C9\u03C3\u03B7\u03C2"
,13:"Skann nummer",15:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u043C\u0435\u0440"
,16:"Escanear n\xFAmero",18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 \u043D\u043E\u043C\u0435\u0440"
};C.PD={1:"skeniranje transpondera",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u6383\u63CF\u65B0\u7684\u611F\u61C9\u5668",4:"Skenov\xE1n\xED transpond\xE9ru"
,0:"Scan in transponder",5:"Diertransponder\ninscannen",6:"Skaneeri uus",7:"Skannaa transponderi"
,8:"Scanner transpondeur",9:"Transponder einscannen",10:"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,13:"Skann transponder",15:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,16:"Escanear transpondedor del animal",17:"Yeni transponder tara",18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.ARZ={1:"tra\u017Eiti \u017Eivotinju",2:"\u0422\u044A\u0440\u0441\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u641C\u5C0B\u5C0F\u725B",4:"Vyhled\xE1n\xED zv\xED\u0159ete",0:"Search animal"
,5:"Dier zoeken",6:"Otsi looma",7:"Etsi el\xE4in",8:"Rechercher un animal",9:"Tier suchen"
,10:"\u0391\u03BD\u03B1\u03B6\u03B7\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B6\u03CE\u03BF"
,13:"S\xF8k etter dyr",15:"\u041F\u043E\u0438\u0441\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"Buscar animal",18:"\u041F\u043E\u0448\u0443\u043A \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A7X={1:"pretra\u017Eivanje ...",2:"\u0422\u044A\u0440\u0441\u0435\u043D\u0435..."
,3:"\u641C\u5C0B\u4E2D...",4:"Prob\xEDh\xE1 vyhled\xE1v\xE1n\xED",0:"Searching\u2026"
,5:"Zoeken",6:"Otsib...",7:"Etsii...",8:"Recherche...",9:"Suche\u2026",10:"\u0393\u03B9\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B1\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7..."
,13:"S\xF8ker",15:"\u041F\u043E\u0438\u0441\u043A...",16:"Buscando...",17:"Aran\u0131yor"
,18:"\u041F\u043E\u0448\u0443\u043A..."};C.A7Y={1:"odaberi \u017Eivotinju",2:"\u0418\u0437\u0431\u043E\u0440 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u9078\u64C7\u5C0F\u725B",4:"Vyberte zv\xED\u0159e",0:"Select animal",5:"Dier selecteren"
,6:"Vali loom",7:"Valitse el\xE4in",8:"S\xE9lectionnez l\u2019animal",9:"Tier ausw\xE4hlen"
,10:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B6\u03CE\u03BF",13:"Velg dyr"
,15:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,16:"Seleccionar animal",18:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.A7Z={1:"odaberi majku",0:"Select dam",7:"Valitse em\xE4",8:"S\xE9lectionner la m\xE8re"
,9:"Muttertier ausw\xE4hlen",10:"\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03BC\u03B7\u03C4\u03AD\u03C1\u03B1"
,13:"Mordyr",15:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435",18:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u044C\u043A\u0443 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443"};C.AgX={0:"Serial number",8:"Num\xE9ro de s\xE9rie"
,9:"Seriennummer"};C.AEx={1:"servis",0:"Service",6:"Seadme hooldus",7:"Huolto",10:
"\u03A3\u03C5\u03BD\u03C4\u03AE\u03C1\u03B7\u03C3\u03B7",15:"\u0421\u0435\u0440\u0432\u0438\u0441"
,16:"Servicio",18:"\u0421\u0435\u0440\u0432\u0456\u0441"};C.Aj1={1:"postaviti filtere"
,2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439 \u0444\u0438\u043B\u0442\u044A\u0440"
,3:"\u8A2D\u7F6E\u904E\u6FFE\u5668",4:"Nastavte filtr",0:"Set filter",5:"Filter zetten"
,6:"Sea filter",7:"Aseta suodatin",8:"D\xE9finir le filtre",9:"Filter setzen",10:
"\u039A\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C6\u03AF\u03BB\u03C4\u03C1\u03BF\u03C5"
,13:"Sett filter",15:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440"
,16:"Fijar filtro",18:"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440"
};C.Settings={1:"postavke",2:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
,3:"\u8A2D\u5B9A\u503C",4:"Nastaven\xED",0:"Settings",5:"Instellingen",6:"Seaded"
,7:"Asetukset",8:"R\xE9glages",9:"Einstellungen",10:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2"
,13:"Innstillinger",15:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
16:"Ajustes",17:"Ayarlar",18:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443~\u0432\u0430\u043D\u043D\u044F"
};C.SevereError={1:"Gre\u0161ka na serveru: {1}",2:"\u0421\u0435\u0440\u0438\u043E\u0437\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430: "+
"{1}",3:"\u56B4\u91CD\u932F\u8AA4\uFF1A{1}",4:"Z\xE1va\u017En\xE1 chyba",0:"Severe error: {1}"
,5:"Zwaar wegende fout: {1}",6:"Ohtlik viga: {1}",7:"Vakava virhe: {1}",8:"Erreur grave\xA0: {1}"
,9:"Schwer~wiegender Fehler: {1}",10:"\u03A3\u03BF\u03B2\u03B1\u03C1\u03CC \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1: "+
"{1}",13:"Alvorlig feil: {1}",15:"\u0421\u0435\u0440\u044A\u0451\u0437\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430: "+
"[1}",16:"Error grave: {1}",17:"Ciddi hata",18:"\u0421\u0435\u0440\u0439\u043E\u0437\u043D\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430: "+
"[1}"};C.Aeq={1:"Spol",2:"\u041F\u043E\u043B",3:"\u6027\u5225",4:"Rod",0:"Sex",5:
"Ge-\nslacht",6:"Sugu",7:"Suku~puoli",8:"Sexe",9:"Ge~schlecht",10:"\u03A6\u03CD\u03BB\u03BF"
,13:"Kj\xF8nn",15:"\u041F\u043E\u043B",16:"Sexo",17:"Cinsiyet",18:"\u0421\u0442\u0430\u0442\u044C"
};C.A73={2:"\u041F\u043E\u043B",3:"\u6027\u5225",4:"Rod",0:"Sex",5:"Ge~slacht",6:
"Sugu",7:"Suku~puoli",8:"Sexe",9:"Ge~schl.",10:"\u03A6\u03CD\u03BB\u03BF",13:"Kj\xF8nn"
,15:"\u041F\u043E\u043B",16:"Sexo",17:"Cinsiyet",18:"\u0421\u0442\u0430\u0442\u044C"
};C.Blg={0:"Sex + Type",8:"Sexe + type",9:"Geschlecht + Typ"};C.Blh={1:"Ovca/koza"
,0:"Sheep/goat",6:"Lammas/kits",7:"Lammas/vuohi",8:"Mouton/Ch\xE8vre",9:"Schaf/Ziege"
,10:"\u03A0\u03C1\u03CC\u03B2\u03B1\u03C4\u03BF/\u03BA\u03B1\u03C4\u03C3\u03AF\u03BA\u03B9"
,13:"Sau/geit",15:"\u041E\u0432\u0446\u0430/\u043A\u043E\u0437\u0430",18:"\u0412\u0456\u0432\u0446\u044F/\u043A\u043E\u0437\u0430"
};C.A77={1:"Isklju\u010Diti",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435"
,3:"\u95DC\u9589",4:"Vypnout",0:"Shut down",5:"Uit schakelen",6:"L\xFClita v\xE4lja"
,7:"Sulje laite",8:"\xC9teindre",9:"Ausschalten",10:"\u03A3\u03B2\u03AE\u03C3\u03B9\u03BC\u03BF \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
,13:"Skru av",15:"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C",16:"Apagar"
,17:"Kapat",18:"\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438"};C.A78={0:"Shutdown device after"
,8:"\xC9teindre l\'appareil apr\xE8s",9:"Ger\xE4t abschalten nach"};C.Blo={0:"Single animal view"
,9:"Einzeltieransicht"};C.Blp={1:"jedno grlo u leglu",0:"Single birth",5:"Eenling"
,6:"\xDCksik tall",7:"Yhden syntym\xE4",8:"Unique",9:"Einling",10:"\u039C\u03BF\u03BD\u03AE \u03B3\u03AD\u03BD\u03BD\u03B1"
,13:"Enkel f\xF8dsel",15:"\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0435 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
,18:"\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u0435 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A7$={0:"ESC: Proceed without transponder scan",9:"ESC: Ohne Scan~vorgang fortfahren"
};C.A8a={0:"Software",8:"Logiciel"};C.A8b={1:"prodato za dalji uzgoj",2:"\u041F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E \u0437\u0430 \u0440\u0430\u0437\u043F\u043B\u043E\u0434"
,0:"Sold for breeding",6:"M\xFC\xFCdud aretuseks",7:"Myyd\xE4\xE4n jalostukseen"
,8:"Vendu pour la reproduction",9:"Verkauf zur Zucht",10:"\u03A0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B3\u03B9\u03B1 \u03B1\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE"
,13:"Solgt til avl",15:"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F"
,18:"\u041F\u0440\u043E\u0434\u0430\u0436 \u0434\u043B\u044F \u0440\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044F"
};C.AEM={1:"pasmina",0:"Species",6:"Liik",7:"Laji",8:"Esp\xE8ces",9:"Tierart",10:
"\u0395\u03AF\u03B4\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5",13:"Arter",15:"\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,18:"\u0412\u0438\u0434 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"};C.A8c={1:"pokrenuti"
,2:"\u0421\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043D\u0435",3:"\u555F\u52D5"
,4:"Uveden\xED do provozu",0:"Start-up",5:"Inbedrijfname",6:"K\xE4ivitub",7:"Aloittaa"
,8:"Mise en route",9:"Inbetriebnahme",10:"\u0395\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7"
,13:"Start opp",15:"\u0412\u0432\u043E\u0434 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E"
,16:"Puesta en marcha",18:"\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044E"
};C.A8d={0:"Start-up screen ",9:"Startbildschirm"};C.GO={1:"Dr\u017Eava",2:"\u0421\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
,0:"State",6:"Olek",7:"Tila",8:"\xC9tat",9:"Bundesland",10:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7"
,13:"Tilstand",15:"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F "+
"\u0437\u0435\u043C\u043B\u044F",18:"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0435\u043C\u043B\u044F"
};C.Sg={1:"Status baterije",2:"\u0421\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,3:"\u5145\u96FB\u72C0\u614B",4:"Stav nab\xEDjen\xED",0:"State of charge",5:"Batterijstatus"
,6:"Aku tase",7:"Lataustila",8:"Niveau de charge\nde la batterie",9:"Ladezustand Batterie"
,10:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03C6\u03CC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2"
,13:"Ladnings tilstand",15:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u0430 "+
"\u0431\u0430\u0442\u0430\u0440\u0435\u0438",16:"Estado de carga de la bater\xEDa"
,18:"\u0421\u0442\u0430\u043D \u0437\u0430\u0440\u044F\u0434\u0443 \u0431\u0430\u0442\u0430\u0440\u0435\u0457"
};C.AEP={1:"status",2:"\u0421\u0442\u0430\u0442\u0443\u0441",3:"\u72C0\u614B",4:
"Stav",0:"Status",6:"Seisund",7:"Tila",8:"Statut",10:"\u0398\u03AD\u03C3\u03B7",
15:"\u0421\u0442\u0430\u0442\u0443\u0441",16:"Estado",18:"\u0421\u0442\u0430\u0442\u0443\u0441"
};C.Blz={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no dodana na spisak \u017Eivotinja!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0435 \u0434\u043E\u0431\u0430\u0432\u0435\u043D\u043E \u043A\u044A\u043C "+"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0441 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"ID\u70BA{1}\u725B\u96BB\u5DF2\u6210\u529F\u7684\u52A0\u5230\u8B66\u544A\u540D\u55AE\u4E2D\uFF01"
,4:"Zv\xED\u0159e (ID {1}) \xFAsp\u011B\u0161n\u011B p\u0159id\xE1no do seznamu "+
"alarm\u016F",0:"Animal with ID {1} success~fully added to alarm list!",5:"Dier met ID {1} is successvol toegevoegt aan alarmlijst!"
,6:"Loom edukalt ID {1} sisesatud hoiatuste nimekirja",7:"El\xE4in ID {1} ~ lis\xE4tty onnistuneesti h\xE4lytyslistalle!"
,8:"Animal avec ID {1} ajout\xE9 \xE0 la liste d\u2019alarme avec succ\xE8s",9:"Tier mit ID {1} wurde erfolgreich zur Alarmliste hinzugef\xFCgt!"
,10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1. \u03C4\u03B1\u03C5\u03C4. "+
"{1} \u03C0\u03C1\u03BF\u03C3\u03C4\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03C3\u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD"
,13:"Dyr med ID {1} ble lagt til alarm listen!",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0442\u0440\u0435\u0432\u043E\u0433!",16:"Se ha agregado el animal con ID {1} a la lista de alarmas con \xE9xito."
,17:"Alarm listesine ekleme ba\u015Far\u0131l\u0131",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0434\u043E\u0434\u0430\u043D\u0430 \u0443 \u0441\u043F\u0438\u0441\u043E\u043A "+
"\u0442\u0440\u0438\u0432\u043E\u0433!"};C.BlA={0:"Animal with ID {1} success~fully added to watch list!"
,9:"Tier mit der ID {1} wurde erfolgreich zur Beobachtungs~liste hinzugef\xFCgt!"
};C.BlB={0:"Bootloader was updated successfully.\nUSB flash drive can be safely removed."
,8:"Le bootloader a \xE9t\xE9 mis \xE0 jour avec succ\xE8s\xA0! La cl\xE9 USB "+
"peut \xEAtre retir\xE9e\xA0!",9:"Bootloader wurde erfolgreich aktualisiert! USB-Stick kann abgezogen werden!"
,15:"\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A \u0431\u044B\u043B "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.\nUSB\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C "+
"\u043C\u043E\u0436\u043D\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0432\u044B\u0442\u0430\u0449\u0438\u0442\u044C.",18:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0447 "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E.\nUSB "+
"\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447 \u043C\u043E\u0436\u043D\u0430 "+
"\u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u0442\u0438."
};C.BlC={0:"{1} notices of birth were cleared successfully!",6:"{1} s\xFCnniteavitust t\xFChistatud!"
,7:"{1} Syntym\xE4ilmoitusten poistaminen onnistui!",8:"{1} D\xE9clarations de naissance ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,9:"{1} Geburts~meldungen wurden erfolg~reich gel\xF6scht!",10:"{1} \u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",13:"{1} F\xF8dselsmeldinger ble slettet!"
,15:"{1} \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 "+"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u0431\u044B\u043B\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",18:"{1} \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u043B\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"};C.
BlD={0:"{1} notices of purchase were cleared successfully!",9:"{1} Zugangs~meldungen wurden erfolg~reich gel\xF6scht!"
};C.SuccessClearAnimalLoss={0:"Notice of animal loss was cleared successfully!",
6:"Surnult s\xFCnni teavitus t\xFChistatud!",8:"La d\xE9claration de perte d\'animal a \xE9t\xE9 supprim\xE9e avec succ\xE8s\xA0!"
,9:"Meldung des Tierverlusts wurde erfolgreich gel\xF6scht!",15:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u043F\u043E\u0442\u0435\u0440\u044F\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,18:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u0432\u0442\u0440\u0430\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.BlE={0:"Notice of birth for animal {1} was cleared successfully!",6:"Looma {1} s\xFCnniteavitus t\xFChistatud!"
,7:"El\xE4imen {1} syntym\xE4ilmoitus poistettiin onnistuneesti!",8:"La d\xE9claration de naissance de l\'animal {1} a \xE9t\xE9 supprim\xE9e "+
"avec succ\xE8s\xA0!",9:"Geburtsmeldung f\xFCr Tier {1} wurde erfolgreich gel\xF6scht!"
,10:"{1} \u039F\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF "+
"\u03B6\u03CE\u03BF {1} \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",13:"Melding om f\xF8dsel for dyr {1} ble slettet!"
,15:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E "+
"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"{1} \u0431\u044B\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+"\u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,18:"\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D {1} \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"};C.BlF={0:"Notice of purchase for animal {1} was cleared successfully!"
,9:"Zugangsmeldung f\xFCr Tier {1} wurde erfolgreich gel\xF6scht!"};C.BlG={0:"Backup file \u2019backup.vcb\u2019 with device data and {1}\xA0animal data "+
"set(s) was successfully written to USB flash drive!",8:"Le fichier de sauvegarde \'backup.vcb\' contenant les donn\xE9es de l\'appareil "+
"et {1}\xA0les donn\xE9es des animaux~ a \xE9t\xE9 \xE9crit avec succ\xE8s "+"sur la cl\xE9 USB\xA0!"
,9:"Sicherungsdatei \u2019backup.vcb\u2019 mit Ger\xE4tedaten und {1}\xA0Tierdaten~s\xE4tzen "+
"wurde erfolg~reich auf den USB-^Stick geschrieben!"};C.SuccessCreationNewAnimal={
1:"Jedna \u017Eivotinja je uspje\u0161no registrovana!",2:"\u0415\u0434\u043D\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0431\u0435\u0448\u0435 "+
"\u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"\u5DF2\u6210\u529F\u5EFA\u7ACB\u4E00\u96BB\u5C0F\u725B\uFF01",4:"Zv\xED\u0159e bylo \xFAsp\u011B\u0161n\u011B zalo\u017Eeno"
,0:"One animal was success~fully created!",5:"Een dier is successvol opgenomen!"
,6:"Uus loom edukalt loodud",7:"Yksi uusi el\xE4in luotiin t\xE4ysin luotu!",8:"Un animal a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s"
,9:"Ein Tier wurde erfolgreich erstellt!",10:"\u0388\u03BD\u03B1 \u03B6\u03CE\u03BF \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",13:"Et dyr ble opprettet med suksess!"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u043E!",16:"Se ha creado un animal con \xE9xito."
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0430!"};C.SuccessCreationNewAnimals={
1:"{1} \u017Eivotinja su uspje\u0161no registrovani.",2:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u044F\u0445\u0430 "+
"\u0441\u044A\u0437\u0434\u0430\u0434\u0435\u043D\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!"
,3:"{1}\u96BB\u5C0F\u725B\u5DF2\u6210\u529F\u5EFA\u7ACB\uFF01",4:"{1} zv\xED\u0159ata byla \xFAsp\u011B\u0161n\u011B vytvo\u0159ena"
,0:"{1} animals were success~fully created!",5:"{1} Dieren successvol aangemaakt!"
,6:"{1} uued loomad edukalt loodud",7:"{1} el\xE4int\xE4 luotiin t\xE4ysin luotu!"
,8:"{1} animaux ont \xE9t\xE9 cr\xE9\xE9s avec succ\xE8s",9:"{1} Tiere wurden erfolgreich erstellt!"
,10:"{1} \u03B6\u03CE\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",13:"{1} dyr ble opprettet med suksess"
,15:"{1} \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u043E\u0437\u0434\u0430\u043D\u044B!",16:"Se han creado {1} animales con \xE9xito."
,18:"{1} \u0442\u0432\u0430\u0440\u0438\u043D \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E!"};C.SuccessDataSync={1:"POdaci su uspje\u0161no sinhronizirani sa aparatom za hranjenje!"
,2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0430 "+
"\u0441 \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0430!",3:"\u8CC7\u6599\u5DF2\u6210\u529F\u540C\u6B65\u5230\u7D66\u98FC\u7AD9\uFF01"
,4:"\xDAsp\u011B\u0161n\xE1 synchronizace dat",0:"Data success~fully synchronized to feeder!"
,5:"Data successvol met automaat gesynchroniseerd!",6:"Andmed edukalt saadetud",
7:"Data siirto onnistui~ t\xE4ysin synkronoitu sy\xF6tt\xF6laitteeseen!",8:"Donn\xE9es synchronis\xE9es avec succ\xE8s avec le DAL"
,9:"Daten erfolgreich mit dem Automaten synchronisiert!",10:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03BC\u03B5 \u03C4\u03BF "+"\u03C3\u03B9\u03C4\u03B9\u03C3\u03C4\u03AE"
,13:"Data er vellykket synkronisert til automat",15:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u044B "+
"\u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C",16:"Se han sincronizado los datos con \xE9xito con el alimentador."
,17:"Besleyiciyle bilgi senkronizasyonu ba\u015Far\u0131yla yap\u0131ld\u0131!",
18:"\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043E "+
"\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C"};C.BlH={1:"\u017Divotinja sa ID brojm {1} uspje\u0161no zasu\u0161ena!"
,0:"Animal with ID {1} success~fully marked as dry!",6:"Loom ID-ga {1} m\xE4rgitud kinnisloomaks!"
,7:"El\xE4in ID {1} onnistunut merkitty umpeutetuksi!",8:"L\'animal avec l\'ID {1} a \xE9t\xE9 marqu\xE9 avec succ\xE8s comme vache "+
"tarie",9:"Tier mit ID {1} wurde erfolgreich als trocken~stehend markiert!",10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03AC\u03BD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C9\u03C2 \u03C3\u03C4\u03B5\u03AF\u03C1\u03BF!"
,13:"Dyr med ID {1} ble markert som gjeldku!",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E "+
"\u043A\u0430\u043A \u0441\u0443\u0445\u043E\u0441\u0442\u043E\u0439\u043D\u043E\u0435!"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0430 \u044F\u043A \u0441\u0443\u0445\u043E\u0441\u0442\u0456\u0439\u043A\u0430!"
};C.BlI={1:"Sistem je uspje\u0161no a\u017Euriran, mo\u017Eete izvaditi USB.",2:
"\u0424\u044A\u0440\u043C\u0443\u0435\u0440\u044A\u0442 \u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E.\nUSB \u0444\u043B\u0430\u0448 "+"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+
"\u043C\u043E\u0436\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E."
,0:"Firmware was updated successfully.\nUSB flash drive can be safely removed.",
6:"Tarkvara uuendus edukas",7:"Laiteohjelmiston p\xE4ivitys onnistui.\nUSB-muistitikku voidaan poistaa "+
"turvallisesti.",8:"Le micrologiciel a \xE9t\xE9 mis \xE0 jour avec succ\xE8s.\nLa cl\xE9 USB "+
"peut \xEAtre retir\xE9e.",9:"Firmware wurde erfolgreich aktualisiert! USB-Stick kann abgezogen werden!"
,10:"\u03A4\u03BF \u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03B9\u03BA\u03CC \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1.\n\u0397 "+"\u03BC\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B1\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u03C2 "+
"USB \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03C6\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF "+
"\u03BC\u03B5 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1.",13:"Programmet ble oppdatert.\nUSB- kan trygt fjernes."
,15:"\u0412\u0435\u0440\u0441\u0438\u044F \u041F\u041E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430! USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C "+
"\u043C\u043E\u0436\u043D\u043E \u0438\u0437\u0432\u043B\u0435\u0447\u044C!",18:
"\u0412\u0435\u0440\u0441\u0456\u044F \u041F\u041E \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0430! USB-\u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447 "+
"\u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0442\u044F\u0433\u0442\u0438!"};C.
BlJ={0:"Animal ID was successfully linked to animal with ID {1}!",8:"Un n\xB0 d\'identification a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 l\'animal "+
"portant l\'ID {1}.",9:"Dem Tier mit der ID {1} wurde erfolgreich eine Ohrmarken~nummer hinzugef\xFCgt."
,15:"ID \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0431\u044B\u043B\u043E "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043E "+
"\u043A \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u0441 ID "+"{1}!"
,18:"ID \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0431\u0443\u043B\u043E "+"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0440\u0438\u0432\'\u044F\u0437\u0430\u043D\u043E "+
"\u0434\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0441 ID {1}!"};C.SuccessLinkTransponder={
0:"Transponder was successfully assigned to animal with ID {1}!",8:"Un transpondeur a \xE9t\xE9 ajout\xE9 avec succ\xE8s \xE0 l\'animal portant "+
"l\'ID {1}.",9:"Dem Tier mit der ID {1} wurde erfolgreich ein Transponder hinzugef\xFCgt."
,15:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0431\u044B\u043B "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 \u0441 ID {1}!",18:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u0431\u0443\u0432 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0456 \u0437 ID {1}!"};C.BlK={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no ozna\u010Dena - u fazi laktacije!"
,0:"Animal with ID {1} success~fully marked as lactating!",6:"Loom ID-ga {1} m\xE4rgitud lakteerivaks!"
,7:"El\xE4in ID {1} onnistunut merkitty lypsyyn!",8:"L\'animal avec l\'ID {1} a \xE9t\xE9 marqu\xE9 avec succ\xE8s comme allaitant "+
"!",9:"Tier mit ID {1} wurde erfolgreich als laktierend markiert!",10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03AC\u03BD\u03B8\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C9\u03C2 \u03B3\u03B1\u03BB\u03BF\u03C5\u03C7\u03AF\u03B1\u03C2!"
,13:"Dyr med ID {1} ble markert som amme!",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u043D\u043E\u043C\u0435\u0440 "+
"{1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E "+
"\u043A\u0430\u043A \u043B\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0435!"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0456\u0434\u043C\u0456\u0447\u0435\u043D\u0430 \u044F\u043A \u043B\u0430\u043A\u0442\u0443\u044E\u0447\u0430!"
};C.BlL={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no izbrisana sa liste!",2:
"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0435 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E \u043A\u044A\u043C "+
"\u0441\u043F\u0438\u0441\u044A\u043A\u0430 \u0441 \u0430\u043B\u0430\u0440\u043C\u0438!"
,3:"ID\u70BA{1}\u725B\u96BB\u5DF2\u6210\u529F\u7684\u5F9E\u8B66\u544A\u540D\u55AE\u79FB\u9664\uFF01"
,4:"Zv\xED\u0159e (ID {1}) bylo \xFAsp\u011B\u0161n\u011B odstran\u011Bno ze "+"seznamu alarm\u016F!"
,0:"Animal with ID {1} success~fully removed from alarm list!",5:"Dier met ID {1} is successvol van alarmlijst gezet!"
,6:"Loomad ID {1} edukalt hoiatuste nimekirjast maha v\xF5etud",7:"El\xE4in ID {1} ~poistettu onnistuneesti h\xE4lytyslistalta!"
,8:"Animal avec ID {1} \xE9limin\xE9 de la liste d\u2019alarme avec succ\xE8s",9:
"Tier mit ID {1} wurde erfolgreich von der Alarmliste entfernt!",10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03BC\u03B5 \u03B1\u03C1. \u03C4\u03B1\u03C5\u03C4. "+
"{1} \u03B1\u03C6\u03B1\u03B9\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 "+
"\u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 \u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD"
,13:"Dyr med ID {1} ble fjernet fra alarmlisten!",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u2116 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 "+
"\u0442\u0440\u0435\u0432\u043E\u0433!",16:"Se ha eliminado con \xE9xito el animal con ID {1} de la lista de alarmas."
,17:"Alarm listesini kald\u0131rmak ba\u015Far\u0131l\u0131",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u2116 {1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 "+
"\u0442\u0440\u0438\u0432\u043E\u0433!"};C.BlM={0:"Animal with ID {1} success~fully removed from watch list!"
,9:"Tier mit der ID {1} wurde erfolgreich von der Beobach~tungsliste entfernt!"};
C.SuccessResetAnimalData={1:"Podaci o \u017Eivotinja uspje\u0161no izbrirsani!",
2:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u0442\u0430 "+"\u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0431\u0435 \u0438\u0437\u0442\u0440\u0438\u0442\u0430 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E!",0:"Animal data were deleted success~fully!"
,6:"Looma andmed edukalt kustutatud",7:"El\xE4intiedot poistettiin onnistuneesti!"
,8:"Les donn\xE9es d\u2019animaux ont \xE9t\xE9 supprim\xE9es avec succ\xE8s\xA0!"
,9:"Tierdaten wurden erfolgreich gel\xF6scht!",10:"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03C4\u03BF\u03C5 "+
"\u03B6\u03CE\u03BF\u03C5 \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",13:"Dyredata ble slettet!"
,15:"\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,18:"\u0414\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.SuccessResetFactorySettings={1:"Aparat je uspje\u0161no ra\u0107en na fabri\u010Dke postavke!"
,2:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043D\u0443\u043B\u0435\u043D\u043E "+
"\u0441\u044A\u0441 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438!"
,3:"\u8A2D\u5099\u6210\u529F\u91CD\u7F6E\u70BA\u51FA\u5EE0\u8A2D\u5B9A\u503C\uFF01"
,4:"\xDAsp\u011B\u0161n\xE9 resetov\xE1n\xED na tov\xE1rn\xED nastaven\xED",0:"Device success~fully reset to factory defaults!"
,5:"Apparaat successvol op Fabrieksinstellingen terug gezet!",6:"Tehase seaded edukalt taask\xE4ivitatud"
,7:"Laite onnistui palautettu tehdasasetuksiin!",8:"L\u2019appareil\na \xE9t\xE9 r\xE9initialiser\navec succ\xE8s\xA0!"
,9:"Ger\xE4t erfolgreich auf Werks~ein~stel~lun~gen zur\xFCckgesetzt!",10:"\u0397 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B5\u03C0\u03B1\u03BD\u03B1\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C3\u03C4\u03B9\u03C2 "+"\u03B5\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AD\u03C2 "+
"\u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",13:"Enheten er tilbakestilt til fabrikkinnstillingene!"
,15:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0441\u0431\u0440\u043E\u0448\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438!",16:"Dispositivo restaurado con \xE9xito a los ajustes de f\xE1brica."
,17:"Fabrika ayarlar\u0131na d\xF6nme ba\u015Far\u0131l\u0131",18:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u043E \u0434\u043E \u0437\u0430\u0432\u043E\u0434\u0441\u044C\u043A\u0438\u0445 "+
"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C!"};C.SuccessRestoreBackup={
0:"Successfully restored device data and {1}\xA0animal data set(s) from backup "+
"file on USB flash drive!",8:"Toutes les donn\xE9es de l\'appareil ainsi que les jeux de donn\xE9es {1}\xA0animales "+
"ont \xE9t\xE9 restaur\xE9s avec succ\xE8s \xE0 partir du fichier de sauvegarde "+
"sur la cl\xE9 USB\xA0!",9:"Alle Ger\xE4tedaten und {1}\xA0Tier~daten~s\xE4tze wurden erfolg~reich "+
"aus der Sicherungs~datei auf dem USB-^Stick wieder~hergestellt!"};C.SuccessUnlinkTransponder={
0:"Assigned transponder was successfully unlinked from animal with ID {1} "+"!",
8:"Le transpondeur attribu\xE9 a \xE9t\xE9 supprim\xE9 avec succ\xE8s des "+"donn\xE9s de l\'animal avec l\'ID {1}."
,9:"Zugeordneter Transponder wur~de erfolgreich aus dem Datensatz des Tieres "+"mit der ID {1} gel\xF6scht."
};C.SuccessUnregister={1:"\u017Divotinja sa ID brojem {1} uspje\u0161no odjavljena!"
,2:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E \u0441 \u2116 {1} \u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043E\u0442\u043F\u0438\u0441\u0430\u043D\u043E!",3:"\u8B58\u5225\u78BC {1}\u7684\u725B\u96BB\u5DF2\u6210\u529F\u89E3\u9664\u8A3B\u518A\uFF01"
,4:"\xDAsp\u011B\u0161n\u011B zru\u0161en\xE1 registrace",0:"Animal with ID {1} successfully unregistered!"
,5:"Dier met ID {1} is successvol afgemeld!",6:"Loom ID {1} nimekirjast edukalt maas"
,7:"El\xE4in poistettu rekisterist\xE4!",8:"Animal avec ID {1}\na \xE9t\xE9 effacer\navec succ\xE8s."
,9:"Tier mit ID {1} wurde erfolgreich abgemeldet!",10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03C4\u03B7\u03BA\u03B5 "+
"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1",13:"Dyr med ID {1} ble avregistrert!"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",16:"Se ha anulado con \xE9xito el registro del animal con ID {1}."
,17:"Kay\u0131t silme ba\u015Far\u0131l\u0131",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430!"};C.BlN={0:"Animal {1} and corresponding birth notice were deleted successfully!"
,6:"Loom {1} ning vastav s\xFCnniteavitus kustutatud!",7:"El\xE4in {1} ja sit\xE4 vastaava syntym\xE4ilmoitus poistettiin!"
,8:"L\'animal {1} et sa d\xE9claration de naissance ont \xE9t\xE9 supprim\xE9s "+
"avec succ\xE8s\xA0!",9:"Tier {1} samt Geburtsmeldung wurde erfolgreich gel\xF6scht!"
,10:"\u03A4\u03BF \u03B6\u03CE\u03BF {1} \u03BA\u03B1\u03B9 \u03B7 \u03B1\u03BD\u03C4\u03AF\u03C3\u03C4\u03BF\u03B9\u03C7\u03B7 "+
"\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2 "+
"\u03B4\u03B9\u03B1\u03B3\u03C1\u03AC\u03C6\u03B7\u03BA\u03B1\u03BD \u03BC\u03B5 "+
"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1!",13:"Dyr {1} og tilh\xF8rende f\xF8dselsmelding ble slettet!"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 {1} \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 "+
"\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E "+"\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u0431\u044B\u043B\u0438 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B!"
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 {1} \u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0435 "+
"\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.BlO={0:"Animal {1} and corresponding purchase notice were deleted successfully!"
,9:"Tier {1} samt Zugangsmeldung wurde erfolgreich gel\xF6scht!"};C.SuccessUnregisterPerished={
1:"Uginuta \u017Eivotinja sa ID brojem {1} uspje\u0161no odjavljena!",2:"\u0423\u043C\u0440\u044F\u043B\u043E\u0442\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E "+
"\u0441 \u2116 {1} \u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0438\u0441\u0430\u043D\u043E!"
,0:"Perished animal with ID {1} successfully unregistered!",6:"Kadunud loom ID {1} niekirjast edukalt maas"
,7:"Kuolleen el\xE4imen, jonka tunnus on {1}, rekisterist\xE4 poisto onnistui!",
8:"L\u2019animal mort avec ID {1} a \xE9t\xE9 d\xE9sactiv\xE9 avec succ\xE8s\xA0!"
,9:"Verendetes Tier mit ID {1} wurde erfolgreich abgemeldet!",10:"\u03A4\u03BF \u03C0\u03B5\u03B8\u03B1\u03BC\u03AD\u03BD\u03BF \u03B6\u03CE\u03BF "+
"\u03BC\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"{1} \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 "+"\u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2!"
,13:"D\xF8dt dyr med ID {1} ble avregistrert!",15:"\u041C\u0451\u0440\u0442\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 "+
"\u043D\u043E\u043C\u0435\u0440 {1} \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u043E!",18:"\u041C\u0435\u0440\u0442\u0432\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0443 "+
"{1} \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!"
};C.BlP={0:"Animal data were successfully written to directory \u2019export-csv\u2019 "+
"on USB flash drive.",9:"Tierdaten wurden erfolgreich auf den USB-Stick exportiert (Verzeichnis "+
"\u2019export-csv\u2019)."};C.BlQ={0:"Animal data were successfully written to USB flash drive! Download data "+
"file \u2019animals.csv\u2019  now?",9:"Tierdaten wurden erfolgreich auf den USB-Stick exportiert. Soll die CSV-Tierdaten~datei "+
"jetzt heruntergeladen werden?"};C.BlR={0:"CSV file {1}, containing {2} birth notice(s) was successfully written to "+
"USB flash drive.",8:"Fichier CSV {1} avec {2} date(s) de naissance ont \xE9t\xE9 enregistr\xE9e(s) "+
"avec succ\xE8s sur la cl\xE9 USB.",9:"CSV-Datei {1} mit {2} Geburts~mel~dun~g(en) erfolgreich auf USB-Stick gespeichert."
,15:"CSV \u0444\u0430\u0439\u043B {1}, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 "+
"{2} \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 "+"\u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C."
,18:"CSV \u0444\u0430\u0439\u043B {1}, \u0432\u043C\u0456\u0449\u0443\u044E\u0447\u0438\u0439 "+
"{2} \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F "+
"\u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447."
};C.BlS={0:"CSV file with birth notices successfully written to USB flash drive! Download "+
"generated CSV file now?",8:"Fichier CSV avec d\xE9claration de naissance ont \xE9t\xE9 enregistr\xE9 "+
"avec succ\xE8s sur une cl\xE9 USB\xA0! Souhaitez-vous t\xE9l\xE9charger "+"le fichier CSV\xA0?"
,9:"CSV-Datei mit Geburts~mel~dun~g(en) erfolgreich auf USB-Stick gespeichert! "+
"M\xF6chten Sie die erzeugte CSV-^Datei herunter~laden?",15:"CSV \u0444\u0430\u0439\u043B \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F\u043C\u0438 "+
"\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E "+
"\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D \u043D\u0430 USB "+"\u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C! \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+
"\u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"CSV \u0444\u0430\u0439\u043B?",18:"CSV \u0444\u0430\u0439\u043B \u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C\u0438 "+
"\u043F\u0440\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043D\u0438\u0439 "+
"\u043D\u0430 USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447! "+
"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0441\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 "+
"CSV \u0444\u0430\u0439\u043B?"};C.BlT={0:"CSV file {1}, containing {2} purchase notice(s) was successfully written "+
"to USB flash drive.",9:"CSV-Datei {1} mit {2} Zugangs~mel~dun~g(en) erfolgreich auf USB-Stick gespeichert."
};C.BlU={0:"CSV file with purchase notices successfully written to USB flash drive! "+
"Download generated CSV file now?",9:"CSV-Datei mit Zugangs~mel~dun~g(en) erfolgreich auf USB-Stick gespeichert! "+
"M\xF6chten Sie die erzeugte CSV-^Datei herunter~laden?"};C.Surgery={1:"Operacija"
,2:"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u043D\u043E",0:"Surgery",6:
"L\xF5ikus",7:"Leikkaus",8:"Chirugie",9:"Operation",10:"\u0395\u03B3\u03C7\u03B5\u03AF\u03C1\u03B7\u03C3\u03B7"
,13:"Kirurgi",15:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F",18:"\u041E\u043F\u0435\u0440\u0430\u0446\u0456\u044F"
};C.BlZ={0:"Sending data",6:"Andmete edastamine",7:"L\xE4hetet\xE4\xE4n tietoja"
,8:"Envoi de donn\xE9es",9:"Sende Daten",10:"\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,13:"Sender data",15:"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"
,18:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u0430\u043D\u0438\u0445"
};C.Bl0={0:"Synchronization failed",6:"S\xFCnkroniseerimine nurjus",7:"L\xE4hetysSynkronointi ep\xE4onnistui"
,8:"\xC9chec du transfert de donn\xE9es",9:"Datentransfer fehlgeschlagen",10:"\u039F \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5",13:"Synkronisering mislyktes",15:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",18:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0456\u044F "+
"\u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044C"};C.Bl1={0:"Receiving data"
,6:"Andmete vastuv\xF5tmine",7:"Vastaanottaa tietoja",8:"R\xE9ception de donn\xE9es"
,9:"Empfange Daten",10:"\u03A0\u03B1\u03C1\u03B1\u03BB\u03B1\u03B2\u03AE \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD"
,13:"Mottar data",15:"\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"
,18:"\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445"
};C.Bl2={0:"Initialising\u2026",6:"Alustamine...",7:"Alustetaan\u2026",8:"Initialiser..."
,9:"Initialisiere\u2026",10:"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7..."
,13:"Initialiserer \u2026",15:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F..."
,18:"\u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F..."
};C.Bl3={0:"Initialising import",6:"Impordi alustamine",7:"Alustetaan tuontia",8:
"Initialisation de l\'importation...",9:"Initialisiere Import\u2026",10:"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 "+
"\u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2",13:"Initialiserer import"
,15:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F "+
"\u0438\u043C\u043F\u043E\u0440\u0442\u0430",18:"\u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F "+
"\u0456\u043C\u043F\u043E\u0440\u0442\u0443"};C.Bl4={0:"Cleaning up\u2026",6:"Impordij\xE4rgne s\xFCnkroniseerimine \u2026"
,7:"Puhdistaa \u2026",8:"Nettoyage",9:"R\xE4ume auf \u2026",10:"\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u2026"
,13:"Rydder opp\u2026",15:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430...",18:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430..."
};C.Bl5={0:"Data transfer successfully finished",6:"Andmeedastus edukalt l\xF5petatud"
,7:"Tiedonsiirto onnistui",8:"Transfert de donn\xE9es termin\xE9 avec succ\xE8s"
,9:"Datentransfer erfolgreich abgeschlossen",10:"\u0397 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD "+
"\u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 "+"\u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1"
,13:"Data overf\xF8ringen er fullf\xF8rt",15:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 "+
"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430"
,18:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u0438\u0445 "+
"\u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u0430"
};C.NW={1:"sinhronizacija u toku",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435"
,3:"\u540C\u6B65",4:"Synchronizace",0:"Synchronizing",5:"Data overdraging",6:"S\xFCnkroonib"
,7:"Synkronointi",8:"Transmission",9:"Daten\xFCbertragung",10:"\u03A3\u03C5\u03BD\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7",13:"Synkroniserer",15:
"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"
,16:"Sincronizando",17:"Senkronize ediliyor",18:"\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u0438\u0445"
};C.AEU={4:"Teplota \xB0C",0:"\xB0C",7:"\xB0 C",17:"Santigrat"};C.Bl6={4:"Teplota \xB0F"
,0:"\xB0F",13:"\xB0C",17:"Fahrenayt"};C.TempMeasurement={1:"mjerenje temperature"
,0:"Temp. measurement",6:"Tempertuuri m\xF5\xF5t",7:"L\xE4mp\xF6tila mittaus",8:
"Mesure de la temp.",9:"Temperaturmessung",10:"\u039C\u03B5\u03C4\u03C1\u03AE\u03C3\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2"
,13:"Temp. m\xE5l",15:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B"
,18:"\u0412\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"
};C.Ag1={1:"mjerenje temperature",2:"\u0418\u0437\u043C\u0435\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,3:"\u6E2C\u91CF\u6EAB\u5EA6",4:"M\u011B\u0159en\xED teploty",0:"Take temperature"
,5:"Temp. meten",6:"M\xF5\xF5da temperatuur",7:"Mittaa l\xE4mp\xF6tila",8:"Mesure de la temp\xE9rature"
,9:"Temp. messen",10:"\u03A0\u03AC\u03C1\u03C4\u03B5 \u03C4\u03B7 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1"
,13:"Ta temperaturen",15:"\u0418\u0437\u043C\u0435\u0440\u0438\u0442\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443"
,16:"Medir temperatura",18:"\u0412\u0438\u043C\u0456\u0440\u044F\u0442\u0438"};C.
Temperature={1:"temperatura",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,3:"\u6EAB\u5EA6",4:"Teplota",0:"Temperature",5:"Temperatuur",6:"Temperatuur",7:
"L\xE4mp\xF6tila",8:"Temp\xE9rature",9:"Temperatur",10:"\u0398\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1"
,11:"Temperatura",13:"Temperatur",14:"L\xE4mp\xF6tila",15:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,16:"Temperatura",17:"S\u0131cakl\u0131k",18:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.A8i={1:"ocjenjivanje t.",2:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438 "+
"\u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438",0:"Temp. scores",6:"Temperat. hinne"
,7:"L\xE4mp\xF6tila pisteet",8:"Eval. temp\xE9rature",9:"Bewertung T.",10:"\u0392\u03B1\u03B8\u03BC\u03BF\u03BB\u03BF\u03B3\u03AF\u03B5\u03C2"
,13:"Temp. score",15:"\u041E\u0446\u0435\u043D\u043A\u0430 \u0442\u0435\u043C\u043F."
,18:"\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0435\u043C\u043F."};C.A8k={1:"grani\u010Dne vrijednosti"
,2:"\u041F\u0440\u0430\u0433\u043E\u0432\u0435",3:"\u9580\u6ABB",4:"Prahov\xE9 hodnoty"
,0:"Thresholds",5:"Drempelwaardes",6:"K\xFCnnised",7:"Kynnysarvot",8:"Seuil",9:"Schwellenwerte"
,10:"\u039A\u03B1\u03C4\u03CE\u03C4\u03B1\u03C4\u03B1 \u03CC\u03C1\u03B9\u03B1",
13:"Terskler",15:"\u041F\u0440\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"
,16:"Valores umbrales",17:"Alt s\u0131n\u0131r",18:"\u0413\u0440\u0430\u043D\u0438\u0447\u043D\u0456 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.Bu={1:"vrijeme",2:"\u0427\u0430\u0441",3:"\u6642\u9593",4:"\u010Cas",0:"Time"
,5:"Tijd",6:"Aeg",7:"Aika",8:"L\u2019heure",9:"Uhrzeit",10:"\u038F\u03C1\u03B1",
13:"Tid",15:"\u0412\u0440\u0435\u043C\u044F",16:"Hora",17:"Saat",18:"\u0427\u0430\u0441"
};C.Ag4={1:"danas",2:"\u0414\u043D\u0435\u0441",3:"\u4ECA\u65E5",4:"Dnes",0:"Today"
,5:"Vandaag",6:"T\xE4na",7:"T\xE4n\xE4\xE4n",8:"Aujourd\u2019hui",9:"Heute",10:"\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1"
,11:"oggi",13:"I dag",15:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",16:"Hoy",17:
"Bug\xFCn",18:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"};C.ASG={1:"promjeniti status alarma"
,2:"\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 "+"\u043D\u0430 \u0441\u044A\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E "+
"\u043D\u0430 \u0430\u043B\u0430\u0440\u043C\u0430\u0442\u0430",3:"\u5207\u63DB\u8B66\u5831\u72C0\u614B"
,4:"P\u0159epnout stav alarmu",0:"Toggle alarm status",6:"Hoiatuse \xFCmberl\xFClitamine"
,7:"Vaihda h\xE4lytyksen tila",8:"Modifier statut de l\u2019alarme",9:"Alarmstatus \xE4ndern"
,10:"\u0395\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7\u03C2 "+
"\u03C3\u03C5\u03BD\u03B1\u03B3\u03B5\u03C1\u03BC\u03BF\u03CD",13:"Bytt alarmstatus"
,15:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0442\u0440\u0435\u0432\u043E\u0433\u0438",16:"Cambiar estado alarma",18:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 "+
"\u0442\u0440\u0438\u0432\u043E\u0433\u0438"};C.ASI={0:"Toggle watch status",9:"Status \u2019Beobachtung\u2019 umkehren"
};C.Bmd={1:"ukupno",0:"Total",6:"Kokku",7:"Yh~teen~s\xE4",10:"\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF"
,15:"\u0412\u0441\u0435\u0433\u043E",18:"\u0423\u0441\u044C\u043E\u0433\u043E"};
C.Transponder={1:"transponder",2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,0:"Transponder",6:"Vastuv\xF5tja",8:"Transpondeur",10:"\u0391\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2"
,15:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440",18:"\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
};C.A8l={1:"Skenirati transponder se ve\u0107 koristi! (\u017Eivotinja {1}) Koristite "+
"transponder koji nije u upotrebi!",2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0432\u0435\u0447\u0435 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430!\n\u041C\u043E\u043B\u044F, "+
"\u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440, \u043A\u043E\u0439\u0442\u043E "+
"\u043E\u0449\u0435 \u043D\u0435 \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043D!"
,3:"\u6383\u63CF\u7684\u611F\u61C9\u5668\u5DF2\u88AB\u4F7F\u7528\uFF01\n\u8ACB\u4F7F\u7528\u5C1A\u672A\u5206\u914D\u7684\u5176\u4ED6\u611F\u61C9\u5668\uFF01"
,4:"Transpond\xE9r je ji\u017E p\u0159i\u0159azen!\nPou\u017Eijte jin\xFD transpond\xE9r, "+
"kter\xFD je\u0161t\u011B nen\xED p\u0159i\u0159azen!",0:"Scanned transponder is in use already!\nPlease use another transponder "+
"not assigned yet!",5:"Gescande transponder is al in gebruik!\nGraag een nog niet in gebruik genomen "+
"transponder gebruiken!",6:"Sk\xE4nnitud vastuv\xF5tja juba kasutusel\nKasuta teist numbrit"
,7:"Skannattu transponderi on jo k\xE4yt\xF6ss\xE4!\nK\xE4yt\xE4 toista transponderia, "+
"joka ei ole viel\xE4 m\xE4\xE4ritetty!",8:"Le transpondeur scann\xE9 est d\xE9j\xE0 utilis\xE9\xA0!\nVeuillez utiliser "+
"un autre transpon~deur non encore attribu\xE9\xA0!",9:"Eingelesener Transponder wird bereits genutzt!\nBitte anderen, ungenutzten "+
"Transponder verwenden!",10:"\u039F \u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2 "+
"\u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"\u03AE\u03B4\u03B7!\n\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE "+"\u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 "+
"\u03AC\u03BB\u03BB\u03BF\u03BD \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03C0\u03BF\u03C5 \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B5\u03BA\u03C7\u03C9\u03C1\u03B7\u03B8\u03B5\u03AF "+
"\u03B1\u03BA\u03CC\u03BC\u03B1!",13:"Skannet transponder er allerede i bruk!\nVennligst bruk en annen transponder "+
"som ikke er tildelt enn\xE5!",15:"\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F!\n\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, "+
"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!",16:"\xA1El transpondedor escaneado ya est\xE1 en uso!\n\xA1Utilice un transpondedor "+
"a\xFAn no asignado!",18:"\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440 "+
"\u0443\u0436\u0435 \u0432\u0438\u043A\u043E\u0440\u0438~\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F!\n\u0411\u0443\u0434\u044C "+
"\u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435 "+
"\u0456\u043D\u0448\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!"
};C.Bmh={1:"Nepoznat transponder! Skenirani transponder ID broj nije prona\u0111en "+
"u sistemu!",2:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440! "+
"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F \u2116 \u043D\u0430 "+
"\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440 \u043D\u0435 \u0435 "+"\u043D\u0430\u043C\u0435\u0440\u0435\u043D\n\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0430!"
,0:"Unknown transponder! Scanned transponder ID not found\nin system!",6:"Tundmatu vastuv\xF5tja! Skanneeritud vastuv\xF5tja ID ei ole s\xFCsteemis "+
"leitav.",7:"Tuntematon transponderi! Skannattua transponderin tunnusta ei l\xF6ydy\nj\xE4rjestelm\xE4st\xE4!"
,8:"Transpondeur inconnu\xA0!\nID de transpondeur scann\xE9 n\u2019a pas \xE9t\xE9 "+
"trouv\xE9 dans le syst\xE8me\xA0!",9:"Unbekannter Transponder!\nDie eingelesene Transponder-ID wurde im System "+
"nicht gefunden!",10:"\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2! "+
"\u03A4\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF\u03C5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5\n\u03C3\u03C4\u03BF "+
"\u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1!",13:"Ukjent transponder! Finner ikke skannet transponder-ID\ni systemet!"
,15:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u0421\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D!"
,18:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440!\n\u0417\u0447\u0438\u0442\u0430\u043D\u0438\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0443 "+
"\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!"
};C.Aka={1:"Braj transpondera!",2:"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u611F\u61C9\u5668\u865F\u78BC",4:"Transponder \u010D\xEDslo",0:"Transponder number"
,5:"Transpondernummer",6:"Vastuv\xF5tja number",7:"Transponderin numero",8:"Num\xE9ro de transpondeur"
,9:"Transpondernummer",10:"\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,13:"Transponder nummer",15:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
,16:"N\xFAmero del transpondedor",18:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.Bmi={1:"Ovoj \u017Eivotinji je ve\u0107 dodijeljen transponder! Novi transponder "+
"se mo\u017Ee samo dodijeliti ako se \u017Eivotinja odjavi, ne mo\u017Ee "+"e prijaviti ponovnim skeniranjem."
,2:"\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u044A\u0442 \u0432\u0435\u0447\u0435 "+
"\u0435 \u043F\u0440\u0438\u0431\u0430\u0432\u0435\u043D \u043A\u044A\u043C "+"\u0442\u043E\u0432\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E!\n\u041F\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0432\u0430\u043D\u0435\u0442\u043E "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+"\u043D\u0435 \u0441\u0435 \u043F\u0440\u0435\u043F\u043E\u0440\u044A\u0447\u0432\u0430 "+
"\u0438 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u044A\u0440\u0448\u0438 "+
"\u0441\u0430\u043C\u043E \u0447\u0440\u0435\u0437 \u043E\u0442\u043F\u0438\u0441\u0432\u0430\u043D\u0435 "+
"\u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E!",0:"A transponder was already assigned to this animal!\nTransponder reassignment "+
"is discouraged and can only be done via unregistering the animal!",6:"Vastuv\xF5tja nr juba loomaga seotud!"
,7:"T\xE4lle el\xE4imelle on jo m\xE4\xE4ritetty transponderi!\nTransponderin "+
"uudelleenm\xE4\xE4rittely\xE4 ei suositella, ja se voidaan tehd\xE4 vain "+"poistamalla el\xE4imen rekister\xF6inti!"
,8:"Un transpondeur a d\xE9j\xE0 \xE9t\xE9 attribu\xE9 \xE0 cet animal\xA0! "+"Une nouvelle at~tri~bu~tion n\u2019est possible qu\u2019en d\xE9senregistrant "+
"l\u2019animal, mais pas en le scannant \xE0 nouveau\xA0!",9:"Diesem Tier wurde bereits ein Transponder zugeordnet! Eine Neuzuordnung "+
"ist nur durch Abmelden des Tieres, nicht aber durch erneutes Scannen m\xF6glich!"
,10:"\u0388\u03BD\u03B1\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7\u03C2 "+
"\u03AD\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B5\u03AF "+
"\u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03B6\u03CE\u03BF!\n\u0397 "+
"\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03B4\u03B5\u03BD \u03C3\u03C5\u03BD\u03B9\u03C3\u03C4\u03AC\u03C4\u03B1\u03B9 "+
"\u03BA\u03B1\u03B9 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 "+
"\u03BC\u03CC\u03BD\u03BF \u03BC\u03B5 \u03C4\u03B7\u03BD \u03BA\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 "+
"\u03C4\u03B7\u03C2 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE\u03C2 \u03C4\u03BF\u03C5 "+
"\u03B6\u03CE\u03BF\u03C5!",13:"En transponder er allerede tilordnet dette dyret!\nOmtildeling av transponder "+
"frar\xE5des og kan bare gj\xF8res ved \xE5 avregistrere dyret!",15:"\u042D\u0442\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u043C\u0443 "+
"\u0443\u0436\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440! "+
"\u041F\u0435\u0440\u0435\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "+
"\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "+
"\u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, "+
"\u043D\u043E \u043D\u0435 \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C "+
"\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438!",18:"\u0426\u0456\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0443\u0436\u0435 "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440! "+
"\u041F\u0435\u0440\u0435\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043B\u0438\u0448\u0435 \u043F\u0456\u0441\u043B\u044F "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u0438, \u0430\u043B\u0435 "+"\u043D\u0435 \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C\u0443 "+
"\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u0456!"};C.A8m={1:"skeniranje transpondera"
,2:"\u0421\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440"
,3:"\u611F\u61C9\u5668\u6383\u63CF",4:"Skenov\xE1n\xED transponderu",0:"Transponder Scan"
,6:"Skanneeri vastuv\xF5tja",7:"Transponder skannaus",8:"Scan transpondeur",10:"\u0391\u03BD\u03AF\u03C7\u03BD\u03B5\u03C5\u03C3\u03B7 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7"
,13:"Transponder skanning",15:"\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430",16:"Escaneo del transpondedor"
,17:"Transponder\u0131 tara",18:"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430"
};C.Triplets={1:"trojke",0:"Triplets",6:"Kolmikud",7:"Kolmoset",8:"Tripl\xE9s",9:
"Drillinge",10:"\u03A4\u03C1\u03AF\u03B4\u03C5\u03BC\u03B1",13:"Trillinger",15:"\u0422\u0440\u043E\u0439\u043D\u044F"
,18:"\u0422\u0440\u0456\u0439\u043D\u044F"};C.Bmm={1:"dvojke",2:"\u0411\u043B\u0438\u0437\u043D\u0430\u0446\u0438"
,3:"\u96D9\u80DE\u80CE",4:"Dvoj\u010Data",0:"Twin birth",5:"Tweeling",6:"Kaksikud"
,7:"Kaksoset",8:"Multiple",9:"Zwillingskalb",10:"\u0394\u03AF\u03B4\u03C5\u03BC\u03B7 \u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7"
,13:"Tvillingf\xF8dsel",15:"\u0411\u043B\u0438\u0437\u043D\u0435\u0446",16:"Ternero m\xFAltiple"
,17:"\u0130kiz do\u011Fum",18:"\u0411\u043B\u0438\u0437\u043D\u044E\u043A"};C.Bmn={
1:"Dva intervala za \u2642 i \u2640",2:"\u0414\u0432\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 "+
"\u0437\u0430 \u2642 \u0438 \u2640",0:"Two distinct ranges for \u2642 and \u2640"
,6:"Kaks erinevat \u2642 ja \u2640 vahemikku",7:"Kaksi eri aluetta \u2642 ja \u2640"
,8:"Deux gammes distinctes pour \u2642 et \u2640",9:"Je ein Nummern- bereich f\xFCr \u2642 und \u2640"
,10:"\u0394\u03CD\u03BF \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03B5\u03C4\u03B9\u03BA\u03AC "+
"\u03B5\u03CD\u03C1\u03B7 \u03B3\u03B9\u03B1 \u2642 \u03BA\u03B1\u03B9 "+"\u2640"
,13:"To distinkte omr\xE5der for \u2642 og \u2640",15:"\u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0443 "+
"\u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u2642 \u0438 "+"\u2640"
,18:"\u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 "+
"\u043D\u043E\u043C\u0435\u0440\u0456\u0432 \u0434\u043B\u044F \u2642 \u0442\u0430 "+
"\u2640"};C.Am9={1:"tip",2:"\u0422\u0438\u043F",3:"\u985E\u578B",4:"Typ",0:"Type"
,6:"T\xF5ug",7:"Tyyp~pi",9:"Typ",10:"\u03A4\u03CD~\u03C0\u03BF\u03C2",15:"\u0422\u0438\u043F"
,16:"Tipo",17:"Tip",18:"\u0422\u0438\u043F"};C.AeG={1:"tip \u017Eivotinje",2:"\u0422\u0438\u043F \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u52D5\u7269\u7684\u7A2E\u985E",4:"Druh zv\xED\u0159ete",0:"Type of animal",
5:"Type van nutdier",6:"Looma T\xF5ug",7:"El\xE4inlaji",8:"Type d\u2019animal",9:
"Art des Nutztiers",10:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5"
,13:"Type dyr",15:"\u0412\u0438\u0434 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"Tipo de ganado",17:"Hayvan tipi",18:"\u0422\u0438\u043F \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.A8n={1:"ocjenjivanje",2:"\u0422\u0438\u043F \u043D\u0430 \u043E\u0446\u0435\u043D\u043A\u0430"
,3:"\u8A55\u5206\u985E\u578B",4:"Druh hodnocen\xED",0:"Type of rating",5:"Beoordeling"
,6:"T\xF5u hinnang",7:"Luokituksen tyyppi",8:"\xC9valuation",9:"Bewertung",10:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7\u03C2"
,13:"Type vurdering",15:"\u041E\u0446\u0435\u043D\u043A\u0430",16:"Evaluaci\xF3n"
,17:"Derecelendirme tipi",18:"\u041E\u0446\u0456\u043D\u043A\u0430"};C.A8q={1:"oboljenje vimena"
,2:"\u0411\u043E\u043B\u0435\u0441\u0442\u0438 \u043D\u0430 \u0432\u0438\u043C\u0435\u0442\u043E"
,0:"Udder diseases",6:"Udarahaigused",7:"Utaresairaudet",8:"Maladies du pis",9:"Euterkrankheiten"
,10:"\u0391\u03C3\u03B8\u03AD\u03BD\u03B5\u03B9\u03B5\u03C2 \u03C4\u03BF\u03C5 "+
"\u03BC\u03B1\u03C3\u03C4\u03BF\u03CD",13:"Jursykdommer",15:"\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0432\u044B\u043C\u0435\u043D\u0438"
,18:"\u0425\u0432\u043E\u0440\u043E\u0431\u0438 \u0432\u0438\u043C\u0435\u043D\u0456"
};C.Undertemperature={1:"pothla\u0111enost",2:"\u041F\u043E\u043D\u0438\u0436. \u0442\u0435\u043C\u043F."
,3:"\u5728\u6EAB\u5EA6\u4E0B",4:"Za teploty",0:"Undertemp.",5:"Onder temp.",6:"Madaltemp."
,7:"Alil\xE4mp\xF6",8:"Hypothermie",9:"Untertemperatur",10:"\u03A5\u03C0\u03BF\u03B8\u03B5\u03C1\u03BC\u03AF\u03B1"
,15:"\u041D\u0438\u0437\u043A\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
,16:"Hipotermia",17:"S\u0131cakl\u0131k alt\u0131nda",18:"\u041D\u0438\u0437\u044C\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"
};C.A8s={1:"jedinica mjere",2:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u043C\u0430\u0441\u0430"
,3:"\u7269\u8CEA\u55AE\u4F4D",4:"Hmotnost",0:"Mass unit",5:"Massaeenheid",6:"Massi \xFChik"
,7:"Painoyksikk\xF6",8:"Unit\xE9 de mesure",9:"Masseneinheit",10:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B1 \u03BC\u03AC\u03B6\u03B1\u03C2"
,13:"Masseenhet",15:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F"
,16:"Unidad de masa",17:"K\xFCtle birimi",18:"\u041E\u0434\u0438\u043D\u0438\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.Bmq={1:"celzijus",2:"\u0426\u0435\u043B\u0437\u0438\u0439",3:"\u651D\u6C0F",
4:"Celsia",0:"Celsius",10:"\u039A\u03B5\u03BB\u03C3\u03AF\u03BF\u03C5",15:"\u0426\u0435\u043B\u044C\u0441\u0438\u0439"
,17:"Santigrat",18:"\u0426\u0435\u043B\u044C\u0441\u0456\u0439"};C.Bmr={1:"farenhajt"
,2:"\u0424\u0430\u0440\u0435\u043D\u0445\u0430\u0439\u0442",3:"\u83EF\u6C0F",4:"Fahrenheita"
,0:"Fahrenheit",10:"\u03A6\u03B1\u03C1\u03B5\u03BD\u03B1\u0390\u03C4",15:"\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442"
,17:"Fahrenayt",18:"\u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442"};C.A8t={
1:"jedinica temperature",2:"\u0422\u0435\u043C\u043F. \u0435\u0434\u0438\u043D\u0438\u0446\u0430"
,3:"\u6EAB\u5EA6\u55AE\u4F4D",4:"Teplota",0:"Temperature unit",5:"Temperatuureenheid"
,6:"Temp \xFChik",7:"L\xE4mp\xF6tilayksik",8:"Unit\xE9 de temp\xE9rature",9:"Temperatureinheit"
,10:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B1 \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2"
,13:"Temperaturf\xF8ler",15:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",16:"Unidad de temperatura"
,17:"S\u0131cakl\u0131k birimi",18:"\u041E\u0434\u0438\u043D\u0438\u0446\u044F \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F "+
"\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0438"};C.AE9={2:"\u043C\u0438\u043D"
,3:"\u5206\u9418",4:"Minuty",0:"min",10:"\u039B\u03B5\u03C0\u03C4\u03CC",15:"\u041C\u0438\u043D"
,17:"Dakika birimi",18:"\u0445\u0432"};C.AE_={1:"jedinica",2:"\u0415\u0434\u0438\u043D\u0438\u0446\u0438"
,3:"\u55AE\u4F4D",4:"Jednotky",0:"Units",5:"Eenheden",6:"\xDChikud",7:"Yksik\xF6t"
,8:"Unit\xE9s",9:"Einheiten",10:"\u039C\u03BF\u03BD\u03AC\u03B4\u03B5\u03C2",13:
"Enheter",15:"\u0415\u0434\u0438\u043D\u0438\u0446\u044B \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F"
,16:"Unidades",17:"Birimler",18:"\u041E\u0434\u0438\u043D\u0438\u0446\u0456 \u0432\u0438\u043C\u0456\u0440\u044E\u0432\u0430\u043D\u043D\u044F"
};C.Unknown={1:"nepoznat",2:"\u041D\u0435\u043F\u043E\u0437\u043D\u0430\u0442",3:
"\u672A\u77E5",4:"Nezn\xE1m\xFD",0:"Unknown",5:"Onbekend",6:"Tundmatu",7:"Tuntematon"
,8:"Inconnue",9:"Unbekannt",10:"\u0386\u03B3\u03BD\u03C9\u03C3\u03C4\u03BF",13:"Ukjent"
,15:"\u041D\u0435\u0438~\u0437\u0432\u0435\u0441\u0442\u043D\u043E",16:"Des~cono~cida"
,17:"Bilinmiyor",18:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u043E"};C.UnlinkTransponder={
0:"Unlink transponder",8:"Retirer le transpondeur",9:"Transponder abnehmen"};C.Unregister={
1:"odjaviti",2:"\u041D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D"
,3:"\u672A\u767B\u9304",4:"Zru\u0161it registraci",0:"Unregister",5:"Afmelden",6:
"Pole registris",7:"Rekister~\xF6im\xE4t\xF6n",8:"D\xE9sinscrire",9:"Abmelden",10:
"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",13:"Avregistrer",15:"\u0412\u044B\u0439\u0442\u0438"
,16:"Anular registro",17:"Kayd\u0131 sil",18:"\u0412\u0438\u0439\u0442\u0438"};C.
AE$={0:"Delete animal + notice",6:"Kustuta loom+teavitus",7:"Poista el\xE4in+ilmoituks."
,8:"Supprimer animal + d\xE9claration",9:"Tier + Meldung l\xF6schen",10:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B6\u03CE\u03BF\u03C5 "+
"\u03BA\u03B1\u03B9 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7\u03C2 "+
"\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7\u03C2",13:"Slett dyr + melding",15:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435+\u0443\u0432\u0435\u0434\u043E\u043C."
,18:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443+\u043F\u043E\u0432\u0456\u0434\u043E\u043C."
};C.Unspecified={1:"nema podataka",2:"\u041D\u0435\u043E~\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D"
,0:"Unspecified",6:"T\xE4psusta~mata",7:"M\xE4\xE4ritt~elem\xE4t\xF6n",8:"Non sp\xE9cifi\xE9"
,9:"Keine Angabe",10:"\u0391\u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03CC\u03C1\u03B9\u03C3\u03C4\u03BF"
,13:"Uspesifisert",15:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
18:"\u041D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445"};C.A8u={1:"a\u017Euriranje u toku"
,2:"\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\u0442\u0430 "+
"\u0435 \u0432 \u0445\u043E\u0434",0:"Update in progress",6:"V\xE4rskendus pooleli"
,7:"P\xE4ivitys k\xE4ynniss\xE4",8:"Mise \xE0 jour en cours",9:"Aktualisierung l\xE4uft"
,10:"\u0391\u03BD\u03B1\u03B2\u03AC\u03B8\u03BC\u03B9\u03C3\u03B7 \u03C3\u03B5 "+
"\u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7",13:"Oppdatering p\xE5g\xE5r",15:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F "+
"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",18:"\u0412\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
};C.AFa={1:"gornja graniza",0:"Upper limit",6:"\xDClempiir",7:"Yl\xE4raja",8:"Limite maximale"
,9:"Obergrenze",10:"\u0391\u03BD\u03CE\u03C4\u03B1\u03C4\u03BF \u03CC\u03C1\u03B9\u03BF"
,13:"\xD8vre grense",15:"\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043F\u0440\u0435\u0434\u0435\u043B"
,18:"\u0412\u0435\u0440\u0445\u043D\u044F \u043C\u0435\u0436\u0430"};C.Bmv={3:"Urban \u5065\u5EB7\u76E3\u63A7\u7CFB\u7D71\n\xA9 Urban GmbH & Co.KG, 2023"
,0:"Urban VitalControl\n\xA9 Urban GmbH & Co.KG, 2023"};C.Bmw={1:"Tov (spostveni)"
,2:"\u0413\u043E\u0432\u0435\u0434\u043E (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0430)",0:"Beef (own farm)",6:"Veiseliha (oma farm)",7:
"Liharotu (oma tila)",8:"L\u2019engraissement (propre ferme)",9:"Mast (eigener Betrieb)"
,10:"\u039A\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C6\u03AC\u03C1\u03BC\u03B1\u03C2)",13:"Kj\xF8tt (egen g\xE5rd)",15:"\u041D\u0430 \u043C\u044F\u0441\u043E (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 "+
"\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435)",18:"\u041D\u0430 \u043C\'\u044F\u0441\u043E (\u0432\u043B\u0430\u0441\u043D\u0435 "+
"\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E)"};C.Bmx={
1:"Uzgoj (spostveni)",2:"\u0420\u0430\u0437\u0432\u044A\u0436\u0434\u0430\u043D\u0435 (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0430)",0:"Breeding (own farm)",6:"Aretus (oma farm)",
7:"Jalostus (oma tila)",8:"L\u2019\xE9levage (dans sa propre ferme)",9:"Zucht (eigener Betrieb)"
,10:"\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C6\u03AC\u03C1\u03BC\u03B1\u03C2)",13:"Oppdrett (egen g\xE5rd)",15:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438 (\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 "+
"\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435)",18:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0456\u0457 (\u0432\u043B\u0430\u0441\u043D\u0435 "+
"\u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E)"};C.Bmy={
1:"deformitet prilikom ro\u0111enja",2:"\u0412\u0440\u043E\u0434\u0435\u043D\u043E \u0443\u0432\u0440\u0435\u0436\u0434\u0430\u043D\u0435"
,0:"Birth defect",6:"S\xFCnnidefekt",7:"Synnynn\xE4inen vika",8:"Anomalie de naissance"
,9:"Missgeburt",10:"\u0393\u03B5\u03BD\u03B5\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03C9\u03BC\u03B1\u03BB\u03AF\u03B1"
,13:"F\xF8dselsskade",15:"\u0412\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0439 \u0434\u0435\u0444\u0435\u043A\u0442"
,18:"\u0423\u0440\u043E\u0434\u0436\u0435\u043D\u0438\u0439 \u0434\u0435\u0444\u0435\u043A\u0442"
};C.Bmz={1:"mrtvoro\u0111eno",2:"\u041C\u044A\u0440\u0442\u0432\u043E \u0440\u043E\u0434\u0435\u043D\u043E"
,0:"Dead born",6:"Surnults\xFCnd",7:"Syntynyt kuolleena",8:"Mort-n\xE9",9:"Tot geboren"
,10:"\u039D\u03B5\u03BA\u03C1\u03BF\u03B3\u03AD\u03BD\u03BD\u03B7\u03C3\u03B7",13:
"D\xF8d f\xF8dt",15:"\u041C\u0451\u0440\u0442\u0432\u043E\u0440\u043E\u0436\u0434\u0451\u043D\u043D\u044B\u0439"
,18:"\u041C\u0435\u0440\u0442\u0432\u043E\u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u0438\u0439"
};C.BmA={1:"Uginulo: nakon 3. dana",2:"\u0423\u043C\u0438\u0440\u044F\u043B\u043E: \u0441\u043B\u0435\u0434 3 "+
"\u0434\u0435\u043D",0:"Died: from day 3 onwards",6:"Suri: alates 3. p\xE4evast"
,7:"Kuollut: p\xE4iv\xE4st\xE4 3 l\xE4htien",8:"D\xE9c\xE8s\xA0: \xE0 partir du troisi\xE8me jour"
,9:"Verendet: ab 3. Tag",10:"\u03A0\u03AD\u03B8\u03B1\u03BD\u03B5: \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD "+
"3\u03B7 \u03B7\u03BC\u03AD\u03C1\u03B1 \u03BA\u03B1\u03B9 \u03BC\u03B5\u03C4\u03AC"
,13:"D\xF8de: fra dag 3 og utover",15:"\u0423\u043C\u0435\u0440: \u0441 3-\u0433\u043E \u0434\u043D\u044F"
,18:"\u041F\u043E\u043C\u0435\u0440: \u0437 3-\u0433\u043E \u0434\u043D\u044F"};
C.BmB={1:"Uginulo: nakon 48 h",2:"\u0423\u043C\u0438\u0440\u044F\u043B\u043E: \u0432 \u0440\u0430\u043C\u043A\u0438\u0442\u0435 "+
"\u043D\u0430 48 \u0447\u0430\u0441\u0430",0:"Died: within 48 h",6:"Suri: 48 tunni jooksul"
,7:"Kuollut: 48 tunnin kuluessa",8:"D\xE9c\xE8s\xA0: dans le 48h",9:"Verendet: erste 48 h"
,10:"\u03A0\u03AD\u03B8\u03B1\u03BD\u03B5: \u03BC\u03AD\u03C3\u03B1 \u03C3\u03B5 "+
"48 \u03CE\u03C1\u03B5\u03C2",13:"D\xF8de: innen 48 timer",15:"\u0423\u043C\u0435\u0440: \u043F\u0435\u0440\u0432\u044B\u0435 48 \u0447\u0430\u0441\u043E\u0432"
,18:"\u041F\u043E\u043C\u0435\u0440: \u043F\u0435\u0440\u0448\u0456 48 \u0433\u043E\u0434\u0438\u043D"
};C.BmC={1:"Ostaje kod prodava\u010Da",2:"\u041E\u0441\u0442\u0430\u0432\u0430 \u0432\u044A\u0432 \u0444\u0435\u0440\u043C\u0430\u0442\u0430 "+
"\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0447\u0430",0:"Remains at seller\u2019s farm"
,6:"J\xE4\xE4b m\xFC\xFCja farmi",7:"Pysyy myyj\xE4n tilalla",8:"Demeure \xE0 la ferme du vendeur"
,9:"Verbleib beim Verk\xE4ufer",10:"\u03A0\u03B1\u03C1\u03B1\u03BC\u03AD\u03BD\u03B5\u03B9 \u03C3\u03C4\u03B7 "+
"\u03C6\u03AC\u03C1\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03C9\u03BB\u03B7\u03C4\u03AE"
,13:"Forblir p\xE5 selgers g\xE5rd",15:"\u041E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0444\u0435\u0440\u043C\u0435 "+
"\u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430",18:"\u0417\u0430\u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 "+
"\u0444\u0435\u0440\u043C\u0456 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F"
};C.BmD={1:"Abortirano",2:"\u0410\u0431\u043E\u0440\u0442",0:"Abort",6:"Katkesta"
,7:"Keskeytt\xE4\xE4",8:"Fausse couche",9:"Ver~kalbung",10:"\u03A0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03C4\u03B5 \u03C3\u03B5 "+
"\u03B1\u03C0\u03BF\u03B2\u03BF\u03BB\u03AE",13:"Avbryte",15:"\u0410\u0431\u043E\u0440\u0442"
,18:"\u0410\u0431\u043E\u0440\u0442"};C.BmE={1:"Tov (prodato)",2:"\u0413\u043E\u0432\u0435\u0434\u043E (\u043F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E)"
,0:"Beef (sold)",6:"Veiseliha (m\xFC\xFCdud)",7:"Liharotu (myyty)",8:"Engraissement (vente)"
,9:"Mast (Verkauf)",10:"\u039A\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5)",13:"Kj\xF8tt (solgt)",15:"\u041D\u0430 \u043C\u044F\u0441\u043E (\u043F\u0440\u043E\u0434\u0430\u0436\u0430)"
,18:"\u041D\u0430 \u043C\'\u044F\u0441\u043E (\u043F\u0440\u043E\u0434\u0430\u0436)"
};C.BmF={1:"Uzgoj (prodato)",2:"\u0420\u0430\u0437\u0432\u044A\u0436\u0434\u0430\u043D\u0435 (\u043F\u0440\u043E\u0434\u0430\u0434\u0435\u043D\u043E)"
,0:"Breeding (sold)",6:"Aretus (m\xFC\xFCdud)",7:"Jalostus (myyty)",8:"\xC9levage (vente)"
,9:"Zucht (Verkauf)",10:"\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"(\u03C0\u03C9\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5)",13:"Avl (solgt)",15:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438 (\u043F\u0440\u043E\u0434\u0430\u0436\u0430)"
,18:"\u0414\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0446\u0456\u0457 (\u043F\u0440\u043E\u0434\u0430\u0436\u0443)"
};C.BmG={1:"vibrator",0:"Vibration motor",6:"Vibratsioonimootor",8:"Moteur \xE0 vibration"
,9:"Vibrationsmotor",10:"\u039C\u03BF\u03C4\u03AD\u03C1 \u03B4\u03CC\u03BD\u03B7\u03C3\u03B7\u03C2"
,13:"Vibrasjonsmotor",15:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 "+
"\u043C\u043E\u0442\u043E\u0440",18:"\u0412\u0456\u0431\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043C\u043E\u0442\u043E\u0440"
};C.Arq={1:"vibraciju pokrenuti pritiskom na tipku",2:"\u0412\u0438\u0431\u0440. \u0431\u0443\u0442\u043E\u043D"
,3:"\u555F\u52D5\u4E86Keypress\u4E0A\u7684\u632F\u52D5",4:"Vibrace p\u0159i stisku kl\xE1vesy"
,0:"Vibration on keypress",5:"Vibraties toetsen",6:"Vibratsioon klahvivajutusega"
,7:"T\xE4rin\xE4 painalluksella",8:"Vibration touche",9:"Vibration Tastendruck",
10:"\u0394\u03CC\u03BD\u03B7\u03C3\u03B7 \u03BA\u03B1\u03C4\u03AC \u03C4\u03BF "+
"\u03C0\u03AC\u03C4\u03B7\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF\u03C5"
,13:"Vibrasjon ved tasting aktivert",15:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0436\u0430\u0442\u0438\u044F "+
"\u043A\u043D\u043E\u043F\u043A\u0438",16:"Vibraci\xF3n al pulsar un bot\xF3n",17:
"Tu\u015Fa bas\u0131ld\u0131\u011F\u0131nda titre\u015Fimi aktif hale getir",18:
"\u0412\u0456\u0431\u0440\u0430\u0446\u0456\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u043D\u043D\u044F "+
"\u043A\u043D\u043E\u043F\u043A\u0438"};C.BmJ={1:"Demo CitalControl",0:"Demo VitalControl"
,6:"VitalControl demo",10:"\u0395\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7 VitalControl"
,15:"\u0414\u0435\u043C\u043E VitalControl",18:"\u0414\u0435\u043C\u043E VitalControl"
};C.BmK={1:"WLAN \u010Dip",0:"WLAN Chip",6:"WLAN kiip",7:"WLAN -siru",8:"Puce WIFI"
,10:"WLAN \u03C4\u03C3\u03AF\u03C0",15:"\u0427\u0438\u043F WiFI",18:"\u0427\u0456\u043F WiFi"
};C.BmL={1:"\u010Cekanje da se vrijednost o\u010Dita",2:"\u0418\u0437\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u043D\u0430 "+
"\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442",3:"\u7B49\u5F85\u7A69\u5B9A\u7684\u503C"
,4:"\u010Cek\xE1n\xED na stabiln\xED hodnotu",0:"Waiting for stable value",5:"Wachten op stabiele waarde"
,6:"Stabiilse v\xE4\xE4rtuse ootamine",7:"Odotetaan vakaata arvoa",8:"En attente d\u2019une\nvaleur stable"
,9:"Warte auf stabilen Wert",10:"\u0391\u03BD\u03B1\u03BC\u03BF\u03BD\u03AE \u03B3\u03B9\u03B1 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AE "+
"\u03C4\u03B9\u03BC\u03AE",13:"Venter p\xE5 stabil verdi",15:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",16:"Esperando valor estable",
18:"\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E\u0433\u043E "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"};C.WarningActionNotApplicable={
0:"Action \u2019{1}\u2019 is not applicable for the selected animal of type "+"\u2019{2}\u2019!"
,6:"Toiming \u2019{1}\u2019 ei ole valitud loomaliigi \u2019{2}\u2019 jaoks "+"kohaldatav!"
,8:"L\'action \u2019{1}\u2019 n\'est pas applicable \xE0 l\'animal de type "+"\u2019{2}\u2019\xA0!"
,9:"Die Aktion \u2019{1}\u2019 ist f\xFCr das Tier vom Typ \u2019{2}\u2019 "+"nicht anwendbar!"
,10:"\u0397 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \"{1}\" \u03B4\u03B5\u03BD "+
"\u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03B9\u03BC\u03B7 "+
"\u03B3\u03B9\u03B1 \u03C4\u03BF \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF "+
"\u03B6\u03CE\u03BF \u03C4\u03CD\u03C0\u03BF\u03C5 \"{2}\"!",13:"Handling \'{1}\' er ikke aktuelt for det valgte dyret av type \'{2}\'!"
,15:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u2019{1}\u2019 \u043D\u0435 "+
"\u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u043E "+
"\u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430 "+
"\u2019{2}\u2019!",18:"\u0414\u0456\u044F \u2019{1}\u2019 \u043D\u0435 \u043C\u043E\u0436\u0435 "+
"\u0431\u0443\u0442\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0430 "+"\u0434\u043B\u044F \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 "+
"\u0442\u0438\u043F\u0443 \u2019{2}\u2019!"};C.BmM={0:"Attention!\n\nWhen restoring a backup, your current animal and device data "+
"wil be overwritten!\nReally proceed with data restore?",9:"Achtung!\n\nBeim Wiederher~stellen der Daten~sicherung werden ihre aktuellen "+
"Tier- und Ger\xE4tedaten \xFCberschrieben!\nR\xFCcksicherung wirklich starten?"
};C.WarningDataSync={1:"Sinhronizirati podatke? Podaci \u0107e nakon toga biti izbrisani. Jeste "+
"li sigurni?",2:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0430\u043D\u0435 "+
"\u043D\u0430 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u043A\u044A\u043C "+"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0430? \u0414\u0430\u043D\u043D\u0438\u0442\u0435 "+
"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 "+
"\u0441\u043B\u0435\u0434 \u0442\u043E\u0432\u0430!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u5C07\u8CC7\u6599\u540C\u6B65\u5230\u7D66\u98FC\u6A5F\uFF1F \u4E4B\u5F8C\u8CC7\u6599\u6703\u88AB\u522A\u9664\uFF01\u4F60\u78BA\u5B9A\u55CE\uFF1F"
,4:"Varov\xE1n\xED synchronizace dat",0:"Synchronize data to feeder? Data will be deleted afterwards!\nAre you sure?"
,5:"Data op automaat synchroniseren? Data word aansluitend verwijdert!\nWeet "+"u dit zeker?"
,6:"Kas s\xFCnkroonida andmed s\xF6\xF6turiga? P\xE4rast seda andmed kustutatakse!\nKas "+
"olete kindel?",7:"Synkronoi tiedot ruokkijaan? Tiedot poistetaan my\xF6hemmin!\nOletko varma?"
,8:"Synchroniser les donn\xE9es avec les DALs? Les donn\xE9es seront supprim\xE9es "+
"par la suite\xA0!\n\xCAtes-vous s\xFBre\xA0?",9:"Daten mit Automaten abgleichen? Die Daten werden anschlie\xDFend gel\xF6scht!\nSind "+
"Sie sicher?",10:"\u03A3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 "+
"\u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B5 \u03C3\u03B9\u03C4\u03B9\u03C3\u03C4\u03AE; "+
"\u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B8\u03B1 "+"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD \u03C3\u03C4\u03B7 "+
"\u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1! \u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",13:"Synkronisere data til automat? Data vil bli slettet etterp\xE5!\nEr du "+
"sikker?",15:"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C? "+
"\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",16:"\xBFSincronizar datos con alimentador?\n\xA1A continuaci\xF3n se eliminar\xE1n "+
"los datos!\n\xBFEst\xE1 seguro?",17:"Bilgi senkronizasyonu uyar\u0131s\u0131",18:
"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0443\u0432\u0430\u0442\u0438 "+
"\u0434\u0430\u043D\u0456 \u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u043E\u043C? "+
"\u041F\u0456\u0441\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0434\u0430\u043D\u0456 "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.BmN={1:"Oprez: \nstandardna markice imaju ID od 13, 14 ili 15 brojeva. Na skeniranoj "+
"markici se o\u010Ditavaj samo {1} brojeva!",2:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:\n\u0421\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0430\u0449\u0438\u044F\u0442 "+
"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u0434\u044A\u043B\u044A\u0433 13, "+"14 \u0438\u043B\u0438 15 \u0446\u0438\u0444\u0440\u0438.\n\u0412\u044A\u043F\u0440\u0435\u043A\u0438 "+
"\u0442\u043E\u0432\u0430, \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0438\u044F\u0442 "+
"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0443\u0448\u043D\u0430\u0442\u0430 "+
"\u043C\u0430\u0440\u043A\u0430 \u0438\u043C\u0430 {1} \u0441\u0430\u043C\u043E "+
"\u0446\u0438\u0444\u0440\u0438!",0:"Caution:\nA compliant animal ID should be 13, 14 or 15 digits wide.\nHowever, "+
"the ear tag number scanned in has {1} digits only!",6:"Hoiatus:\nN\xF5uetele vastava looma ID peaks olema 13, 14 v\xF5i 15 numbrit.\nSkannitud "+
"k\xF5rvam\xE4rgil on vaid {1} numbrit!",7:"Varoitus:\nEl\xE4intunnuksessa on oltava 13, 14 tai 15 numeroa.\nKorvatunnisteen "+
"numerossa on kuitenkin vain {1} numeroa!",8:"Attention\xA0:\nUne ID animale conforme doit comporter 13, 14 ou 15 chiffres. "+
"N\xE9anmoins, le num\xE9ro de la marque au~ri~cu~laire scann\xE9e ne comporte "+
"que {1} chiffres\xA0!",9:"Achtung:\nEine standard~kon~forme Tier-ID um~fasst 13, 14 oder 15 Ziffern. "+
"Auf der einge~scannten Ohr~marke sind jedoch nur {1} Ziffern kodiert!",10:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE:\n\u0388\u03BD\u03B1 \u03C3\u03C5\u03BC\u03B2\u03B1\u03C4\u03CC "+
"\u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 \u03B8\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 "+"\u03BD\u03B1 \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03B5\u03AF\u03C4\u03B1\u03B9 "+
"\u03B1\u03C0\u03CC 13, 14 \u03AE 15 \u03C8\u03B7\u03C6\u03AF\u03B1.\n\u03A9\u03C3\u03C4\u03CC\u03C3\u03BF, "+
"\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03C4\u03BF\u03C5 \u03B1\u03C5\u03C4\u03B9\u03BF\u03CD "+
"\u03C0\u03BF\u03C5 \u03C3\u03B1\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 \u03AD\u03C7\u03B5\u03B9 "+
"\u03BC\u03CC\u03BD\u03BF {1} \u03C8\u03B7\u03C6\u03AF\u03B1!",13:"Forsiktig:\nEn kompatibel dyre-ID b\xF8r v\xE6re 13, 14 eller 15 sifre "+
"bred.\nMen \xF8remerkenummeret som skannes inn har bare {1} sifre!",15:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 "+
"\u043D\u043E\u043C\u0435\u0440 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E "+
"\u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 13, 14 \u0438\u043B\u0438 "+
"15 \u0446\u0438\u0444\u0440. \u041D\u0430 \u0441\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0439 "+
"\u0443\u0448\u043D\u043E\u0439 \u0431\u0438\u0440\u043A\u0435 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043E "+
"\u0442\u043E\u043B\u044C\u043A\u043E {1} \u0446\u0438\u0444\u0440(\u0430)!",18:
"\u0423\u0432\u0430\u0433\u0430:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 "+
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
,4:"Varov\xE1n\xED Vstupte do re\u017Eimu prezentace",0:"All animal and device data will be deleted and demo data will be loaded!\nAre "+
"you sure?",5:"Alle Dier- en Apparaatdata word verwijdert en demo data word geladen!\nWeet "+
"u dit zeker?",6:"K\xF5ik loomade ja seadmete andmed kustutatakse ja laetakse demoandmed!\nKas "+
"olete kindel?",7:"Kaikki el\xE4inten ja laitteiden tiedot poistetaan ja demotiedot ladataan!\nOletko "+
"varma?",8:"Toutes les donn\xE9es relatives aux animaux et \xE0 l\u2019appareil seront "+
"supprim\xE9es, et les donn\xE9es de d\xE9monstration seront charg\xE9es\xA0! "+
"\xCAtes-vous s\xFBr\xA0?",9:"Alle Tier- und Ger\xE4tedaten werden gel\xF6scht und Demodaten werden geladen!\nSind "+
"Sie sicher?",10:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B6\u03CE\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD "+
"\u03B8\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD "+"\u03BA\u03B1\u03B9 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B5\u03C0\u03AF\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2 \u03B8\u03B1 \u03C6\u03BF\u03C1\u03C4\u03C9\u03B8\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",13:"Alle dyre- og enhetsdata vil bli slettet og demodata vil bli lastet inn!\nEr "+
"du sikker?",15:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0431\u0443\u0434\u0443\u0442 "+
"\u0443\u0434\u0430\u043B\u0435\u043D\u044B, \u0430 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 "+
"\u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",16:"\xA1Se eliminar\xE1n todos los datos relacionados con los animales y el "+
"dispositivo, y se cargar\xE1n los datos de demostraci\xF3n!\n\xBFEst\xE1 "+"seguro?"
,18:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0431\u0443\u0434\u0435 "+
"\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E, \u0430 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0456 "+
"\u0434\u0430\u043D\u0456 \u0431\u0443\u0434\u0443\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0456!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.BmO={0:"The animal selected as dam does not have a 15-digit animal ID assigned.\nDo "+
"you want to create an animal without dam assigned?",8:"Aucun n\xB0 d\'identification \xE0 15 chiffres n\'a \xE9t\xE9 attribu\xE9 "+
"\xE0 l\'animal s\xE9lectionn\xE9e. Souhaitez-vous cr\xE9er un animal auquel "+"aucune m\xE8re n\'est attribu\xE9e\xA0?"
,9:"Dem ausge~w\xE4hl~ten Muttertier ist keine 15-stellige Ohrmarkennum~mer "+"zuge~wiesen. M\xF6chten sie ein Tier anlegen, dem kein Mutter~tier zugewiesen "+
"ist?",10:"\u03A4\u03BF \u03B6\u03CE\u03BF \u03C0\u03BF\u03C5 \u03B5\u03C0\u03B9\u03BB\u03AD\u03C7\u03B8\u03B7\u03BA\u03B5 "+
"\u03C9\u03C2 \u03BC\u03B7\u03C4\u03AD\u03C1\u03B1 \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 "+
"\u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03BF \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC "+
"\u03B6\u03CE\u03BF\u03C5 15 \u03C8\u03B7\u03C6\u03AF\u03C9\u03BD.\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 "+
"\u03BD\u03B1 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03B5\u03C4\u03B5 "+
"\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 "+
"\u03AD\u03C7\u03B5\u03B9 \u03B1\u03BD\u03B1\u03C4\u03B5\u03B8\u03B7\u03BC\u03AD\u03BD\u03B7 "+
"\u03BC\u03B7\u03C4\u03AD\u03C1\u03B1;",13:"Dyret som er valgt som mor har ikke tildelt en 15-sifret dyre-ID.\nVil "+
"du opprette et dyr uten mor ID?",15:"\u0416\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 "+
"\u043A\u0430\u043A \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043D\u0435 "+
"\u0438\u043C\u0435\u0435\u0442 15-\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u043E\u0433\u043E "+
"ID.\n\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0431\u0435\u0437 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F?",18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0430 \u043E\u0431\u0440\u0430\u043D\u0430 "+
"\u044F\u043A \u043C\u0430\u0442\u0438 \u043D\u0435 \u043C\u0430\u0454 "+"15-\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u043E\u0433\u043E ID.\n\u0427\u0438 "+
"\u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0443 \u0431\u0435\u0437 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u043C\u0430\u0442\u0435\u0440\u0456?"};C.BmP={0:"No transponder is linked to selected animal, therefore unlinking of trans~ponder "+
"is not possible!",8:"Aucun transpondeur n\'est attribu\xE9 \xE0 l\'animal s\xE9lectionn\xE9, "+
"l\'action \'Retirer le transpondeur\' ne peut donc pas \xEAtre effectu\xE9\xA0!"
,9:"Dem ausgew\xE4hl~ten Tier ist kein Transponder zu~gewiesen, da~her kann "+"die Aktion \u2019Transponder ab~nehmen\u2019 nicht ausgef\xFChrt werden!"
};C.WarningNoActionDefined={1:"Molimo vas definirajte minimalno jednu aktivnost!"
,2:"\u041C\u043E\u043B\u044F, \u043F\u043E\u0441\u043E\u0447\u0435\u0442\u0435 "+
"\u043F\u043E\u043D\u0435 \u0435\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435!"
,4:"Varov\xE1n\xED Nen\xED definov\xE1na \u017E\xE1dn\xE1 akce",0:"Please specify at least one action!"
,5:"Geef minstens een actie aan!",6:"Palun m\xE4\xE4rake v\xE4hemalt \xFCks toiming!"
,7:"M\xE4\xE4rit\xE4 v\xE4hint\xE4\xE4n yksi toi~min~to!",8:"Sp\xE9cifiez au moins une action\xA0!"
,9:"Bitte geben Sie mindestens eine Aktion an!",10:"\u03A0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 "+
"\u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD \u03BC\u03AF\u03B1 "+
"\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1!",13:"Vennligst spesifiser minst \xE9n handling!"
,15:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 "+
"\u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435!"
,16:"\xA1Indique al menos una acci\xF3n!",18:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C "+
"\u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u043D\u0443 \u0434\u0456\u044E!"};
C.WarningNoActionsForAnimalLoss={0:"Performing actions not allowed for animal loss!"
,8:"Ex\xE9cution d\'actions non autoris\xE9e pour les pertes d\'animaux\xA0!",9:
" Ausf\xFChren von Aktionen f\xFCr Tierverluste nicht zul\xE4ssig!",15:"\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F "+
"\u043D\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B \u0434\u043B\u044F "+
"\u043F\u043E\u0442\u0435\u0440\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!"
,18:"\u0412\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u043D\u0456 \u0434\u0456\u0457 "+
"\u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u0456 \u0434\u043B\u044F "+
"\u0432\u0442\u0440\u0430\u0442 \u0442\u0432\u0430\u0440\u0438\u043D!"};C.WarningNoAnimalsRegistered={
1:"Jo\u0161 nema registrovanih \u017Eivotinja, potrebno je prvo registrovati "+"\u017Eivotinje."
,2:"\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0438 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438, \u043F\u044A\u0440\u0432\u043E "+"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E/\u0438!",3:"\u5C1A\u672A\u8A3B\u518A\u5C0F\u725B\uFF0C\u8ACB\u5148\u8A3B\u518A\u5C0F\u725B\uFF01"
,4:"Varov\xE1n\xED \u017D\xE1dn\xE1 zv\xED\u0159ata nebyla zaregistrov\xE1na",0:
"No animals registered yet, please register animal(s) first!",5:"Nog geen dieren aangemeld, graag eerst dier(en) aanmelden!"
,6:"Veel pole \xFChtegi looma registreeritud, palun registreerige k\xF5igepealt "+
"loom(ad)!",7:"Ei viel\xE4 rekister\xF6ityj\xE4 el\xE4imi\xE4, rekister\xF6i ensin el\xE4imet!"
,8:"Aucun animal n\u2019a encore \xE9t\xE9 enregistr\xE9, veuillez d\u2019abord "+
"enregistrer animal(s)\xA0!",9:"Noch keine Tiere angemeldet, bitte zuerst Tier(e) anmelden!"
,10:"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B6\u03CE\u03BF \u03B4\u03B5\u03BD "+
"\u03AD\u03C7\u03B5\u03B9 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF "+"\u03B1\u03BA\u03CC\u03BC\u03B1, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 "+
"\u03B5\u03B3\u03B3\u03C1\u03AC\u03C8\u03C4\u03B5 \u03C0\u03C1\u03CE\u03C4\u03B1 "+
"\u03C4\u03B1 \u03B6\u03CE\u03B1!",13:"Ingen dyr registrert enn\xE5, vennligst registrer dyr f\xF8rst!"
,15:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0435\u0449\u0435 \u043D\u0435 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B, "+
"\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 "+
"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435/\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!"
,16:"A\xFAn no se han registrado animales. Por favor, registre primero animal(es)."
,18:"\u0422\u0432\u0430\u0440\u0438\u043D\u0438 \u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0456, "+
"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 "+
"\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435 "+"\u0442\u0432\u0430\u0440\u0438\u043D\u0443/\u0442\u0432\u0430\u0440\u0438\u043D!"
};C.WarningNoBackupFilePresent={0:"Attention!\n\nBackup file \u2019backup.vcu\u2019 not found! Place it inside "+
"directory \u2019backup\u2019 on your USB stick, please!",9:"Achtung!\n\nSicherungsdatei \u2019backup.vcu\u2019 nicht gefunden! Datei "+
"im Verzeichnis \u2019backup\u2019 auf dem USB-Stick zur Verf\xFCgung stellen!"};
C.WarningNoBackupPathPresent={0:"Attention!\n\nExpected backup file \u2019backup.vcu\u2019 inside directory "+
"\u2019backup\u2019 on your USB stick, but no directory \u2019backup\u2019 "+"was found!"
,9:"Achtung!\nVerzeichnis \u2019backup\u2019 existiert nicht auf USB-^Stick! "+"Siche~rungsdatei \u2019backup.vcu\u2019 in diesem Ver~zeichnis zur Verf\xFCgung "+
"stellen!"};C.WarningNoFlashDrivePresent={0:"Attention!\n\nInsert USB flash drive, please!"
,8:"Attention\xA0!\n\nIns\xE9rez maintenant une cl\xE9 USB\xA0!",9:"Achtung!\n\nStecken Sie jetzt bitte einen USB-^Stick ein!"
,15:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\n\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 "+
"USB \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430!"
,18:"\u0423\u0432\u0430\u0433\u0430!\n\n\u0412\u0441\u0442\u0430\u0432\u0442\u0435 "+
"USB \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447, "+"\u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430!"
};C.WarningNoMenuItemVisible={1:"Molimo vas da podesite minimalno jedan meni odabir za objavu!"
,2:"\u041C\u043E\u043B\u044F, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u043F\u043E\u043D\u0435 "+
"\u0435\u0434\u0438\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u043E\u0442 "+
"\u043C\u0435\u043D\u044E\u0442\u043E \u0434\u0430 \u0441\u0435 \u0432\u0438\u0436\u0434\u0430!"
,3:"\u8ACB\u81F3\u5C11\u8A2D\u5B9A\u4E00\u500B\u9078\u793A\u7684\u9078\u9805\uFF01"
,4:"Varov\xE1n\xED polo\u017Eky nab\xEDdky nejsou viditeln\xE9",0:"Please set at least one menu item visible!"
,5:"Kies minstens een menuonderdeel ter beschouwing uit!",6:"Palun seadke n\xE4htavaks v\xE4hemalt \xFCks men\xFC\xFCelement!"
,7:"Aseta v\xE4hint\xE4\xE4n yksi valikkokohta n\xE4kyviin!",8:"S\xE9lectionnez au moins un \xE9l\xE9ment de menu visible"
,9:"Bitte w\xE4hlen Sie mindestens einen Men\xFCeintrag zur Anzeige aus!",10:"\u039F\u03C1\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF\u03C5\u03BB\u03AC\u03C7\u03B9\u03C3\u03C4\u03BF\u03BD "+
"\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD "+
"\u03BF\u03C1\u03B1\u03C4\u03CC!",13:"Vennligst sett minst ett menyelement synlig!"
,15:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "+
"\u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u043F\u0443\u043D\u043A\u0442 "+
"\u043C\u0435\u043D\u044E \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F!"
,16:"\xA1Seleccione al menos un elemento del men\xFA para su visualizaci\xF3n!",
18:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C "+
"\u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u0438\u043D \u043F\u0443\u043D\u043A\u0442 "+
"\u043C\u0435\u043D\u044F \u0434\u043B\u044F \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F!"
};C.WarningNoPremisesID={0:"Attention!\n\nNo premises ID defined yet! Would you like to enter your "+
"premises ID now?",8:"Il n\'y a pas encore de num\xE9ro d\'exploitation\xA0! Voulez-vous saisir "+
"maintenant votre num\xE9ro d\'exploitation \xE0 12 chiffres\xA0?",9:"Es ist noch keine Betriebsnummer f\xFCr die Geburts~mel~dung bei HI-^Tier "+
"hinterlegt! M\xF6chten Sie jetzt ihre 12-stellige Betriebsnummer jetzt "+"eingeben?"
};C.WarningNoValidCountryCode={1:"Upozorenje:\nStandardni kod ID \u017Eivotinje sadr\u017Ei i dr\u017Eavni "+
"kod. Prema skeniranom kodu ne postoji dr\u017Eavni kod!",2:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:\n\u0421\u044A\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0430\u0449\u0438\u044F\u0442 "+
"\u2116 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E \u0442\u0440\u044F\u0431\u0432\u0430 "+
"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 \u0432\u0430\u043B\u0438\u0434\u0435\u043D "+
"\u043A\u043E\u0434 \u043D\u0430 \u0434\u044A\u0440\u0436\u0430\u0432\u0430\u0442\u0430.\n\u041A\u043E\u0434\u044A\u0442 "+
"{1}, \u043D\u0430\u043C\u0435\u0440\u0435\u043D \u043D\u0430 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u043D\u0430\u0442\u0430 "+
"\u0443\u0448\u043D\u0430 \u043C\u0430\u0440\u043A\u0430, \u043D\u0435 \u0435 "+
"\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043E\u0434 \u043D\u0430 "+"\u0434\u044A\u0440\u0436\u0430\u0432\u0430!"
,0:"Warning:\nA compliant animal ID should contain a valid country code.\nCode "+
"{1} found on scanned ear tag is not a valid country code!",6:"Warning:\nN\xF5uetele vastav loomaID peab sisaldama kehtivat riigikoodi. "+
"Skannitud k\xF5rvam\xE4rgil leitud\nkood {1} ei ole kehtiv riigikood!",7:"Varoitus:\nel\xE4intunnuksen tulee sis\xE4lt\xE4\xE4 kelvollinen maakoodi.\nSkannatussa "+
"korvatunnisteessa oleva koodi {1} ei ole kelvollinen maakoodi!",8:"Avertissement\xA0: Une ID animale conforme doit contenir un code de pays "+
"valide. Le code {1} trouv\xE9 sur la marque auricu~laire scann\xE9e n\u2019est "+
"pas un code de pays valide\xA0!",9:"Warnung:\nEine standard~konforme Tier-ID ent~h\xE4lt einen g\xFCltigen "+
"L\xE4nder~code. Der ein~ge~scann~te Code {1} ist kein g\xFCltiger L\xE4nder~code!"
,10:"\u03A0\u03C1\u03BF\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7:\n\u039C\u03B9\u03B1 "+
"\u03C3\u03C5\u03BC\u03B2\u03B1\u03C4\u03AE \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 "+
"\u03B6\u03CE\u03BF\u03C5 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 "+"\u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF "+
"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C7\u03CE\u03C1\u03B1\u03C2.\n\u039F "+
"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 {1} \u03C0\u03BF\u03C5 \u03B2\u03C1\u03AF\u03C3\u03BA\u03B5\u03C4\u03B1\u03B9 "+
"\u03C3\u03C4\u03BF \u03C3\u03B1\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF \u03B1\u03C5\u03C4\u03AF "+
"\u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 "+
"\u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C7\u03CE\u03C1\u03B1\u03C2!",13:
"Advarsel:\nEn kompatibel dyre-ID b\xF8r inneholde en gyldig landskode.\nKode "+
"{1} funnet p\xE5 skannede \xF8remerker er ikke en gyldig landskode!",15:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 "+
"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 "+
"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 "+
"\u043A\u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u044B. \u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u043A\u043E\u0434 {1} \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F "+
"\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u043C \u043A\u043E\u0434\u043E\u043C "+
"\u0441\u0442\u0440\u0430\u043D\u044B!",18:"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F:\n\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 "+
"\u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u043C\u0456\u0441\u0442\u0438\u0442\u044C "+
"\u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043A\u043E\u0434 \u043A\u0440\u0430\u0457\u043D\u0438. "+
"\u0412\u0456\u0434\u0441\u043A\u0430\u043D\u043E\u0432\u0430\u043D\u0438\u0439 "+
"\u043A\u043E\u0434 {1} \u043D\u0435 \u0454 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0438\u043C "+
"\u043A\u043E\u0434\u043E\u043C \u043A\u0440\u0430\u0457\u043D\u0438!"};C.WarningOutdatedAnimalWeight={
1:"Stara vrijednost te\u017Eine \u017Eivotinje za ID {1}, vaganje je bilo "+"prije {2}\xA0dana!"
,0:"Outdated animal weight!\n\nAnimal {1} was weighed {2} days ago!",6:"Looma kaalu andmed on aegunud!\n\nLooma {1} kaaluti {2} p\xE4eva eest!"
,7:"Vanhentunut el\xE4imen paino! \n\nEl\xE4in {1} punnittiin {2} p\xE4iv\xE4\xE4 "+
"sitten!",8:"Poids de l\'animal p\xE9rim\xE9\xA0!\nL\'animal {1} a \xE9t\xE9 pes\xE9 "+
"il y a d\xE9j\xE0 {2}\xA0jours\xA0!",9:"Veraltetes Tiergewicht!\n\nDie Wiegung von Tier {1} liegt bereits {2}\xA0Tage "+
"zur\xFCck!",10:"\u0391\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03BF\u03BC\u03AD\u03BD\u03BF "+
"\u03B2\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5!\n\n\u03A4\u03BF "+"\u03B6\u03CE\u03BF {1} \u03B6\u03C5\u03B3\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 "+
"\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC {2} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2!"
,13:"Utdatert dyrevekt!\n\nDyret {1} ble veid for {2} dager siden!",15:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0432\u0435\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E!\n\n\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E {1} \u0431\u044B\u043B\u043E "+
"{2}\xA0 \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434!",18:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0432\u0430\u0433\u0443 \u0442\u0432\u0430\u0440\u0438\u043D\u0438!\n\n\u0412\u0437\u0432\u0430\u0436\u0435\u043D\u043D\u044F "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 {1} \u0431\u0443\u043B\u043E "+"{2}\xA0 \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443!"
};C.WarningOutdatedAnimalWeights={1:"Zastarjela vrijednost te\u017Eine \u017Eivotinje! {1} \u017Eivotinje su "+
"vagane prije 7\xA0dana!",0:"Outdated animal weights!\n\n{1} animals were weighed more than 7 days ago!"
,6:"Loomade kaalude andmed on aegunud!\n\n{1}\xA0looma kaaluti enam kui 7\xA0p\xE4eva "+
"eest!",7:"Vanhentuneet el\xE4inten painot!\n\n{1}\xA0el\xE4imet punnittiin yli 7\xA0p\xE4iv\xE4\xE4 "+
"sitten!",8:"Poids des animaux p\xE9rim\xE9s\xA0!\n{1}\xA0animaux ont \xE9t\xE9 pes\xE9s "+
"il y a plus de 7\xA0jours\xA0!",9:"Veraltete Tiergewichte!\n\nBei {1}\xA0Tieren liegt die letzte Wie~gung "+
"mehr als 7\xA0Tage zur\xFCck!",10:"\u0391\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03B2\u03AC\u03C1\u03B7 \u03B6\u03CE\u03C9\u03BD!\n\n{1}\xA0\u03B6\u03C5\u03B3\u03AF\u03C3\u03C4\u03B7\u03BA\u03B1\u03BD "+
"\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\u03C2 "+
"\u03B1\u03C0\u03CC 7\xA0\u03B7\u03BC\u03AD\u03C1\u03B5\u03C2!",13:"Utdaterte dyrevekter!\n\n{1}\xA0dyr ble veid for mer enn 7\xA0dager siden!"
,15:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 "+
"\u043E \u0432\u0435\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445!\n\n\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 "+
"{1}\xA0\u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 \u0431\u044B\u043B\u043E "+
"\u0431\u043E\u043B\u0435\u0435 7\xA0\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434!"
,18:"\u0417\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0456 \u0434\u0430\u043D\u0456 "+
"\u043F\u0440\u043E \u0432\u0430\u0433\u0443 \u0442\u0432\u0430\u0440\u0438\u043D!\n\n\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"{1}\xA0\u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u043B\u043E \u0431\u0456\u043B\u044C\u0448 "+
"\u043D\u0456\u0436 7\xA0\u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443!"};C.
WarningParsedDateInFutureInvalid={0:"Attention!\n\nThe date scanned in as birth date lies in the future and "+
"was therefore discarded!",9:"Achtung!\n\nDas als Geburtsdatum eingelesene Datum liegt in der Zukunft "+
"und wurde daher verworfen!"};C.WarningParsingDateFailed={0:"Attention!\n\nThe barcode read in as birth date could not be converted "+
"into a valid date value and was therefore discarded!",9:"Achtung!\nDer als Geburts~datum eingelese~ne Bar~code konn~te nicht in "+
"einen g\xFCltigen Datums~wert umgewan~delt werden und wurde daher verworfen!"};
C.WarningParsingNaisIdFailed={0:"Attention!\n\nThe barcode read could not be transformed into a valid eartag "+
"number and was therefore discarded!",9:"Achtung!\nDer eingelesene Barcode konnte nicht in eine g\xFClti~ge Ohrmarken~nummer "+
"umge~wandelt werden und wurde daher verworfen!"};C.WarningResetAnimalData={1:"Svi podaci o \u017Eivotinjama \u0107e biti izbrisani! Jeste li sigurni!"
,2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u0438 \u0449\u0435 \u0431\u044A\u0434\u0430\u0442 "+
"\u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",0:"All animal data will be deleted!\nAre you sure?"
,6:"K\xF5ik loomade andmed kustutatakse!\nKas olete kindel?",7:"Kaikki el\xE4intiedot poistetaan!\nOletko varma?"
,8:"Toutes les donn\xE9es relatives aux animaux seront effac\xE9es\xA0!\nVous "+
"\xEAtes s\xFBr\xA0?",9:"Alle Tierdaten werden gel\xF6scht!\nSind Sie sicher?",10:
"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C4\u03C9\u03BD \u03B6\u03CE\u03C9\u03BD \u03B8\u03B1 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD!\n\u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",13:"Alle dyredata vil bli slettet!\nEr du sikker?"
,15:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",18:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.BmQ={1:"Svi podaci o aparatima i \u017Eivotinjama bi\u0107e izbrisani! Jeste li "+
"sigurni\"",2:"\u0412\u0441\u0438\u0447\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u0438 "+
"\u0449\u0435 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438!\n\u0421\u0438\u0433\u0443\u0440\u043D\u0438 "+
"\u043B\u0438 \u0441\u0442\u0435?",3:"\u6240\u6709\u8A2D\u5099\u6578\u64DA\u90FD\u5C07\u88AB\u522A\u9664\uFF01\n\u60A8\u78BA\u5B9A\u55CE\uFF1F"
,4:"Varov\xE1n\xED Obnoven\xED tov\xE1rn\xEDch nastaven\xED",0:"All device and animal data will be deleted!\nAre you sure?"
,5:"Alle data word van Apparaat verwijdert!\nWeet u dit zeker?",6:"K\xF5ik seadme ja loomade andmed kustutatakse!\nKas olete kindel?"
,7:"Kaikki laite- ja el\xE4intiedot poistetaan!\nOletko varma?",8:"Toutes les donn\xE9es de l\u2019appareil seront supprim\xE9es!\n\xCAtes-vous "+
"s\xFBre\xA0?",9:"Alle Ger\xE4te- und Tierdaten werden gel\xF6scht!\nSind Sie sicher?"
,10:"\u038C\u03BB\u03B1 \u03C4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 "+
"\u03C3\u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE \u03B8\u03B1 "+"\u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03BF\u03CD\u03BD! \u0395\u03AF\u03C3\u03C4\u03B5 "+
"\u03C3\u03AF\u03B3\u03BF\u03C5\u03C1\u03BF\u03B9;",13:"Alle enhets- og dyredata vil bli slettet!\nEr du sikker?"
,15:"\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 "+
"\u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B!\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",16:"\xA1Se eliminar\xE1n todos los datos relacionados con el dispositivo!\n\xBFEst\xE1 "+
"seguro?",17:"Fabrika ayarlar\u0131na d\xF6nme uyar\u0131s\u0131",18:"\u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E "+
"\u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!\n\u0412\u0438 "+
"\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"};C.WarningResetTempThresholds={
1:"Da li stvarno \u017Eelite promjeniti grani\u010Dne vrijednosti za sve pasmine?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u043D\u0443\u043B\u0438\u0440\u0430\u0442\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438\u0442\u0435 "+
"\u043F\u0440\u0430\u0433\u043E\u0432\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438 "+
"\u0437\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0432\u0438\u0434\u043E\u0432\u0435?"
,0:"Do you really want to reset temperature threshold values for all species?",6:
"Kas soovite t\xF5esti k\xF5igi liikide temperatuuri l\xE4viv\xE4\xE4rtused "+"l\xE4htestada?"
,7:"Haluatko todella nollata kaikkien lajien l\xE4m~p\xF6~ti~la~rajat?",8:"Souhaitez-vous vraiment r\xE9tablir les valeurs seuils de temp\xE9rature "+
"pour toutes les esp\xE8ces\xA0?",9:"Alle Temperatur~schwellenwerte f\xFCr alle Tierarten werden zur\xFCck~gesetzt!\n\nSind "+
"Sie sicher?",10:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03C4\u03B9\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BF\u03C1\u03AF\u03C9\u03BD "+
"\u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B1\u03C2 "+"\u03B3\u03B9\u03B1 \u03CC\u03BB\u03B1 \u03C4\u03B1 \u03B5\u03AF\u03B4\u03B7;"
,13:"Vil du virkelig tilbakestille temperaturterskelverdier for alle arter?",15:
"\u0412\u0441\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0435 "+
"\u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 "+
"\u0432\u0438\u0434\u043E\u0432 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 "+
"\u0431\u0443\u0434\u0443\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u044B!\n\n\u0412\u044B "+
"\u0443\u0432\u0435\u0440\u0435\u043D\u044B?",18:"\u0423\u0441\u0456 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0456 "+
"\u043F\u043E\u0440\u043E\u0433\u0438 \u0434\u043B\u044F \u0443\u0441\u0456\u0445 "+
"\u0432\u0438\u0434\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D \u0431\u0443\u0434\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u043E!\n\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?"
};C.BmR={1:"Da li stvarno \u017Eelite vratiti na fabri\u010Dke postavke ({1} {2})?"
,2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 "+
"\u0442\u0430\u0437\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 "+"\u0434\u043E \u0444\u0430\u0431\u0440\u0438\u0447\u043D\u0438\u0442\u0435 "+
"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043D\u0435 "+
"({1} {2})?",0:"Do you really want to reset this value to factory default ({1} {2})?"
,6:"Kas soovite t\xF5esti l\xE4htestada selle v\xE4\xE4rtuse tehase vaikeseadetele "+
"({1} {2})?",7:"Haluatko todella palauttaa t\xE4m\xE4n arvon tehdasasetuksiin ({1} {2})?"
,8:"Voulez-vous vraiment r\xE9~ini~tia~li~ser cette valeur \xE0 la valeur de "+"l\u2019usine ({1} {2})\xA0?"
,9:"M\xF6chten Sie diesen Wert wirklich auf die Werkseinstellung zur\xFCcksetzen "+
"({1} {2})?",10:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 "+
"\u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03C4\u03B9\u03BC\u03AE "+"\u03C3\u03C4\u03B7\u03BD \u03B5\u03C1\u03B3\u03BF\u03C3\u03C4\u03B1\u03C3\u03B9\u03B1\u03BA\u03AE "+
"\u03C0\u03C1\u03BF\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE ({1} {2});",13:"Vil du virkelig tilbakestille denne verdien til fabrikkstandard ({1} {2})?"
,15:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C "+
"\u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 "+
"\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 "+
"({1} {2})?",18:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0446\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F "+
"\u0434\u043E \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 "+"\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C ({1} "+
"{2})?"};C.WarningResetWeightSettings={0:"Do you really want to reset all weight-related settings?"
,8:"Voulez-vous vraiment r\xE9initialiser tous les r\xE9glages bas\xE9s sur "+"le poids aux r\xE9glages d\'usine\xA0?"
,9:"Wirklich alle gewichtsbe~zogenen Ein~stellungen auf Werksein~stellungen "+"zur\xFCck~setzen?"
};C.WarningRestart={1:"Da li stvarno \u017Eelite ponovo pokrenuti aparat?",2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u0435 "+
"\u0434\u0430 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u0442\u0435 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E?",3:"\u4F60\u771F\u7684\u60F3\u91CD\u555F\u8A2D\u5099\u55CE\uFF1F"
,4:"Varov\xE1n\xED Restartujte",0:"Do you really want to restart the device?",5:
"Weet u zeker dat u het apparaat nieuw wilt starten?",6:"Kas soovite seadme t\xF5esti taask\xE4ivitada?"
,7:"Haluatko varmasti k\xE4ynnist\xE4\xE4 laitteen uudelleen?",8:"Voulez-vous vraiment r\xE9~ini~tia~li~ser l\u2019appareil\xA0?"
,9:"Wollen Sie das Ger\xE4t wirklich neu starten?",10:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 "+
"\u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE;",13:"Vil du virkelig starte enheten p\xE5 nytt?"
,15:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?",16:"\xBFRealmente quiere reiniciar el dispositivo?"
,17:"Yeniden ba\u015Flatma uyar\u0131s\u0131",18:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 "+
"\u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439?"};C.WarningScanOverwriteNaisId={
0:"An ID different from the scanned ID is assigned to the animal already! "+"Do you want to overwrite the currently assigned ID?"
,9:"Dem Tier ist bereits eine andere ID zugewiesen! Wollen Sie diese ID mit "+"der eingelesenen ID ersetzen?"
};C.BmS={1:"Ne postoji broj transpondera za tu \u017Eivotinju? Da li \u017Eelite da "+
"registrujete transponder?",2:"\u041D\u0435 \u0435 \u0434\u0430\u0434\u0435\u043D \u043D\u043E\u043C\u0435\u0440 "+
"\u043D\u0430 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440, \u0437\u0430 "+
"\u0434\u0430 \u0431\u044A\u0434\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0442\u043E!\n\n\u0418\u0441\u043A\u0430\u0442\u0435 "+
"\u043B\u0438\n\u0434\u0430 \u0441\u043A\u0430\u043D\u0438\u0440\u0430\u0442\u0435\n\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430 "+
"\u0441\u0435\u0433\u0430?",0:"No transponder number given for the animal to be registered!\n\nWould you "+
"like\nto scan in\na transponder now?",6:"Regstreeritaval loomal pole transponderi numbrit!\n\nKas soovite skannida "+
"transponderit?",7:"Transponderin numeroa ei ole annettu rekister\xF6it\xE4v\xE4lle el\xE4imelle!\n\naluatko "+
"skannata transponderin nyt?",8:"Aucun transpondeur n\u2019a encore \xE9t\xE9 en~registr\xE9 pour le nouvel "+
"animal. Vous voulez scanner un transpondeur maintenant\xA0?",9:"F\xFCr das neu anzulegende Tier ist noch kein Transponder hinterlegt. Wollen "+
"Sie jetzt einen Transponder einscannen?",10:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03B4\u03BF\u03B8\u03B5\u03AF "+
"\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE "+
"\u03C4\u03BF\u03C5 \u03B6\u03CE\u03BF\u03C5!\n\n\u0398\u03AD\u03BB\u03B5\u03C4\u03B5\u03BD\u03B1 "+
"\u03C3\u03B1\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03AD\u03BD\u03B1 \u03B1\u03BD\u03B1\u03BC\u03B5\u03C4\u03B1\u03B4\u03CC\u03C4\u03B7 "+
"\u03C4\u03CE\u03C1\u03B1;",13:"Det er ikke oppgitt noe transpondernummer for dyret som skal registreres!\n\nVil "+
"du skanne inn en transponder n\xE5?",15:"\u0414\u043B\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E "+
"\u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u0435\u0449\u0435 "+"\u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440 "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430. "+"\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 "+
"\u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C "+
"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440?",18:"\u0414\u043B\u044F \u043D\u043E\u0432\u043E\u0457 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u043E\u0457 "+
"\u0442\u0432\u0430\u0440\u0438\u043D\u0438 \u0449\u0435 \u043D\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E "+
"\u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440\u0430. "+
"\u0427\u0438 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438 \u0437\u0430\u0440\u0430\u0437 "+
"\u0432\u0456\u0434\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438 "+"\u0442\u0440\u0430\u043D\u0441\u043F\u043E\u043D\u0434\u0435\u0440?"
};C.BmT={1:"Da li stvarno \u017Eelite isklju\u010Diti aparat?",2:"\u041D\u0430\u0438\u0441\u0442\u0438\u043D\u0430 \u043B\u0438 \u0436\u0435\u043B\u0430\u0435\u0442\u0435 "+
"\u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E?"
,3:"\u4F60\u771F\u7684\u60F3\u95DC\u6A5F\u55CE\uFF1F",4:"Varov\xE1n\xED Vypnut\xED"
,0:"Do you really want to shutdown the device?",5:"Weet u zeker dat u het apparaat wilt uit ztten?"
,6:"Kas soovite t\xF5esti seadme v\xE4lja l\xFClitada?",7:"Haluatko varmasti sulkea laitteen?"
,8:"Voulez-vous vraiment \xE9teindre l\u2019appareil\xA0?",9:"Wollen Sie das Ger\xE4t wirklich herunterfahren?"
,10:"\u0398\u03AD\u03BB\u03B5\u03C4\u03B5 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03B9\u03BA\u03AC "+
"\u03BD\u03B1 \u03C3\u03B2\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE;"
,13:"Vil du virkelig sl\xE5 av enheten?",15:"\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E "+
"\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?",16:"\xBFRealmente quiere apagar el dispositivo?"
,17:"Kapatma uyar\u0131s\u0131",18:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 "+
"\u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u043F\u0440\u0438\u0441\u0442\u0440\u0456\u0439?"
};C.BmU={1:"Aparat \u0107e se isklju\u010Diti za {1} sekundi!",2:"\u0418\u0437\u043A\u043B\u044E\u0447\u0432\u0430\u043D\u0435 \u043D\u0430 "+
"\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u0442\u043E "+"\u0441\u043B\u0435\u0434 {1} \u0441\u0435\u043A\u0443\u043D\u0434\u0438!"
,3:"\u5728{1}\u79D2\u5167\u95DC\u9589\u8A2D\u5099\uFF01",4:"Vyp\xEDn\xE1n\xED za\u0159\xEDzen\xED za {1} sekund!"
,0:"Shutting down device in {1} seconds!",5:"Apparaat word in {1} seconden uitgeschakelt!"
,6:"Seade l\xFClitatakse v\xE4lja {1} sekundi p\xE4rast!",7:"Laite sammutetaan {1} sekunnissa!"
,8:"Arr\xEAt de l\u2019appareil en\n{1} secondes\xA0!",9:"Ger\xE4t wird in {1} Sekunden heruntergefahren!"
,10:"\u03A4\u03B5\u03C1\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 "+
"\u03C3\u03B5 {1} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1!"
,13:"Sl\xE5r av enheten om {1} sekunder!",15:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F "+
"\u0447\u0435\u0440\u0435\u0437 {1} \u0441\u0435\u043A\u0443\u043D\u0434!",16:"\xA1El dispositivo se apagar\xE1 dentro de {1} segundos!"
,18:"\u041F\u0440\u0438\u0441\u0442\u0440\u0456\u0439 \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F "+
"\u0447\u0435\u0440\u0435\u0437 {1} \u0441\u0435\u043A\u0443\u043D\u0434!"};C.WarningWeightEvaluationPlural={
1:"Oprez: Ova procjena uklju\u010Duje vrijednosti o te\u017Eini goveda, ali "+"su uklju\u010Dene i vrijednosti o te\u017Eini krava."
,0:"Attention!\nThis evaluation is meant to assess growth develop~ment of calves. "+
"However, calcu~lation included weight values of {1} cows, too!",6:"T\xE4helepanu!\nSee hindamine on m\xF5eldud vasikate kasvuaren~gu hindamiseks. "+
"Kalku~latsioon sisaldas ka {1}\xA0lehma kaalu!",7:"Huomio!\nT\xE4m\xE4n arvioinnin tarkoituksena on arvioida va~si~koi~den "+
"kasvun ke~hi~tys~t\xE4. Las~kel~mat si~s\xE4l~t\xE4v\xE4t kui~ten~kin my\xF6s "+
"{1}\xA0leh~m\xE4n painoarvot!",8:"Attention\xA0!\nCette \xE9valuation est destin\xE9e aux veaux. Cependant, "+
"le calcul a \xE9galement pris en compte les valeurs de poids des {1}\xA0vaches\xA0!"
,9:"Achtung!\nDiese Auswertung bewertet die Gewichtsentwick~lung von K\xE4lbern. "+
"Es wurden jedoch auch Wiegewerte von {1}\xA0K\xFChen verarbeitet!",10:"\u0391\u03C5\u03C4\u03AE \u03B7 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 "+
"\u03AD\u03C7\u03B5\u03B9 \u03C3\u03BA\u03BF\u03C0\u03CC \u03BD\u03B1 \u03B1\u03BE\u03B9\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03B5\u03B9 "+
"\u03C4\u03B7\u03BD \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03C4\u03B7\u03C2 "+
"\u03B1\u03BD\u03AC\u03C0\u03C4\u03C5\u03BE\u03B7\u03C2 \u03C4\u03C9\u03BD "+"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD. \u03A9\u03C3\u03C4\u03CC\u03C3\u03BF, "+
"\u03BF \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 "+"\u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03B9 "+
"\u03BA\u03B1\u03B9 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"{1} \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03C9\u03BD!",13:"OBS!\nDenne evalueringen er ment \xE5 vurdere vekstutvikling av kalver. "+
"Beregningen inkluderer imidlertid vektverdier for {1}\xA0kyr ogs\xE5!",15:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u042D\u0442\u0430 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430 "+"\u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F {1}\xA0\u043A\u043E\u0440\u043E\u0432 "+
"\u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B!"
,18:"\u0423\u0432\u0430\u0433\u0430!\n\u0426\u044F \u043E\u0446\u0456\u043D\u043A\u0430 "+
"\u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A "+
"\u0432\u0430\u0433\u0438 \u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"{1}\xA0\u043A\u043E\u0440\u0456\u0432 \u0442\u0430\u043A\u043E\u0436 \u0431\u0443\u043B\u0438 "+
"\u043E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u0456!"};C.WarningWeightEvaluationSingular={
1:"Oprez: Procjena uklju\u010Duje vrijednosti o te\u017Eini goveda, ali je "+"uklju\u010Dena i vrijednosti o te\u017Eini jedne krave."
,0:"Attention!\nThis evaluation is meant to assess growth develop~ment of calves. "+
"However, calcu~lation included the weight value of one cow (\u2116 {1}), "+"too!"
,6:"T\xE4helepanu!\nSee hindamine on m\xF5eldud vasikate kasvuaren~gu hindamiseks. "+
"Kalku~latsioon sisaldas ka lehma (\u2116 {1}) kaalu!",7:"Huomio!\nT\xE4m\xE4n arvioinnin tarkoituksena on arvioida vasikoiden kasvun "+
"kehityst\xE4. Laskelmat sis\xE4lt\xE4v\xE4t kuitenkin my\xF6s yhden lehm\xE4n "+
"(\u2116 {1}) painoarvon!",8:"Attention\xA0!\nCette \xE9valuation est destin\xE9e aux veaux. Cependant, "+
"la calcu~lation a \xE9galement pris en compte les valeurs de poids d\'une "+"vache (\u2116 {1})\xA0!"
,9:"Achtung!\nDiese Auswertung bewertet die Gewichtsentwick~lung von K\xE4lbern. "+
"Es wurde jedoch auch der Wiegewert einer Kuh (\u2116 {1}) verarbeitet!",10:"\u03A0\u03C1\u03BF\u03C3\u03BF\u03C7\u03AE!\n\u0391\u03C5\u03C4\u03AE "+
"\u03B7 \u03B1\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7 \u03AD\u03C7\u03B5\u03B9 "+
"\u03C3\u03BA\u03BF\u03C0\u03CC \u03BD\u03B1 \u03B1\u03BE\u03B9\u03BF\u03BB\u03BF\u03B3\u03AE\u03C3\u03B5\u03B9 "+
"\u03C4\u03B7\u03BD \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03C4\u03B7\u03C2 "+
"\u03B1\u03BD\u03AC\u03C0\u03C4\u03C5\u03BE\u03B7\u03C2 \u03C4\u03C9\u03BD "+"\u03BC\u03CC\u03C3\u03C7\u03C9\u03BD. \u03A9\u03C3\u03C4\u03CC\u03C3\u03BF, "+
"\u03BF \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 "+"\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03B9 "+
"\u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03C4\u03B9\u03BC\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2 "+
"\u03BC\u03B9\u03B1\u03C2 \u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1\u03C2 "+"(\u2116 {1})!"
,13:"OBS!\nDenne evalueringen er ment \xE5 vurdere vekstutvikling av kalver. "+"Beregningen inkluderer imidlertid vektverdien til \xE9n ku (\u2116 {1}), "+
"ogs\xE5!",15:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!\n\u042D\u0442\u0430 "+
"\u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 "+
"\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430 "+"\u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u0440\u043E\u0432\u044B "+
"(\u2116 {1}) \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E!"
,18:"\u0423\u0432\u0430\u0433\u0430!\n\u0426\u044F \u043E\u0446\u0456\u043D\u043A\u0430 "+
"\u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A "+
"\u0432\u0430\u0433\u0438 \u0442\u0435\u043B\u044F\u0442. \u041E\u0434\u043D\u0430\u043A "+
"\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F "+
"\u043A\u043E\u0440\u043E\u0432\u0438 (\u2116 {1}) \u0442\u0430\u043A\u043E\u0436 "+
"\u0431\u0443\u043B\u043E \u043E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u043E!"
};C.BmV={0:"Attention!\n\nWrong date and time settings, please re-enter date and time!"
,8:"Attention\xA0!\nLes r\xE9glages de la date et de l\'heure sont incorrects\xA0! "+
"Veuillez saisir \xE0 nouveau la date et l\'heure\xA0!",9:"Achtung!\nFalsche Einstel~lungen f\xFCr Datum und Uhrzeit! Bitte Datum "+
"und Uhr~zeit neu eingeben!"};C.AS6={2:"\u0421\u0435\u0434\u043C\u0438\u0446\u0430"
,0:"Week",7:"Viikko",8:"Semaine",9:"Woche",11:"Settimana",15:"\u041D\u0435\u0434\u0435\u0301\u043B\u044F"
,16:"Semana",18:"\u0422\u0438\u0436\u0434\u0435\u043D\u044C"};C.BmY={1:"vaganje \u017Eivotinje"
,2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u0438 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,0:"Weigh animal",6:"Looma kaal",7:"Punnitse el\xE4in",8:"Peser un animal",9:"Tier wiegen"
,10:"\u0396\u03C5\u03B3\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF \u03B6\u03CE\u03BF"
,13:"Vei dyr",15:"\u0412\u0437\u0432\u0435\u0441\u0438\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435"
,18:"\u0412\u0437\u0432\u0430\u0436\u0438\u0442\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0443"
};C.Weighing={1:"Vaganje",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0435"
,3:"\u79E4\u91CD",4:"V\xE1\u017Een\xED",0:"Weighing",5:"Weging",6:"Kaalumine",7:
"Punnitus",8:"Peser",9:"Wiegung",10:"\u0396\u03CD\u03B3\u03B9\u03C3\u03B7",13:"Veiing"
,15:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435",16:"Pesaje"
,17:"S\xFCtten kesme",18:"\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.A8A={1:"Dana\u0161nja vaganja",0:"Today\u2019s weighing",6:"T\xE4nane kaalumine"
,7:"T\xE4m\xE4n p\xE4iv\xE4n punnitus",8:"Pes\xE9e d\'aujourd\'hui",9:"Heutige Wiegung"
,10:"\u03A3\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03B6\u03CD\u03B3\u03B9\u03C3\u03B7"
,13:"Dagens veiing",15:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0435 \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435"
,18:"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0454 \u0432\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.A8B={1:"Vaganja",2:"\u041F\u0440\u0435\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F"
,3:"\u7A31\u91CD",4:"V\xE1\u017Een\xED",0:"Weighings",5:"Wegingen",6:"Kaalumised"
,7:"Punnitukset",8:"Pond\xE9rations",9:"Wiegungen",10:"\u0396\u03C5\u03B3\u03AF\u03C3\u03B5\u03B9\u03C2"
,13:"Veiinger",15:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F"
,16:"Pesajes",18:"\u0412\u0437\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F"
};C.Ag9={1:"te\u017Eina",2:"\u0422\u0435\u0433\u043B\u043E",3:"\u91CD\u91CF",4:"V\xE1ha"
,0:"Weight",5:"Gewicht",6:"Kaal",7:"Paino",8:"Poids",9:"Gewicht",10:"\u0392\u03AC\u03C1\u03BF\u03C2"
,13:"Vekt",15:"\u0412\u0435\u0441",16:"Peso",17:"A\u011F\u0131rl\u0131k",18:"\u0412\u0430\u0433\u0430"
};C.A8C={1:"te\u017Eina \u017Eivotinje",2:"\u0422\u0435\u0433\u043B\u043E \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u043E"
,3:"\u725B\u96BB\u91CD\u91CF",4:"Hmotnost zv\xED\u0159ete",0:"Animal weight",5:"Diergewicht"
,6:"Looma kaal",7:"El\xE4inten paino",8:"Poids d\u2019animal",9:"Tiergewicht",10:
"\u0392\u03AC\u03C1\u03BF\u03C2 \u03B6\u03CE\u03BF\u03C5",13:"Dyrevekt",15:"\u0412\u0435\u0441 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E"
,16:"Peso del animal",17:"Hayvan\u0131n a\u011F\u0131rl\u0131\u011F\u0131",18:"\u0412\u0430\u0433\u0430 \u0442\u0432\u0430\u0440\u0438\u043D\u0438"
};C.BmZ={1:"Te\u017Eina trupa",2:"\u0422\u0440\u0443\u043F\u043D\u043E \u0442\u0435\u0433\u043B\u043E"
,3:"\u9AD4\u91CD\u91CF",4:"Hmotnost uhynul\xE9ho zv\xED\u0159ete",0:"Carcass weight"
,5:"Kadavergewicht",6:"R\xFCmba kaal",7:"Ruhon paino",8:"Poids de la carcasse",9:
"Kadavergewicht",10:"\u0392\u03AC\u03C1\u03BF\u03C2 \u03BA\u03BF\u03C5\u03C6\u03B1\u03C1\u03B9\u03BF\u03CD"
,13:"Slaktevekt",15:"\u0412\u0435\u0441 \u0442\u0443\u0448\u043A\u0438",16:"Peso del cad\xE1ver"
,18:"\u0412\u0430\u0433\u0430 \u0442\u0443\u0448\u043A\u0438"};C.A8D={1:"Te\u017Einska klasa"
,0:"Weight class",6:"Kaaluklass",7:"Painoluokka",8:"Cat\xE9gorie de poids",9:"Gewichtsklasse"
,10:"\u039A\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,13:"Vektklasse",15:"\u0412\u0435\u0441\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"
,18:"\u0412\u0430\u0433\u043E\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F"
};C.AS8={1:"izlazna te\u017Eina",2:"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E\u0442\u043E"
,3:"\u91CD\u91CF\u8A3B\u92B7",4:"Zru\u0161en\xED registrace hmotnosti",0:"Weight deregistration"
,5:"Gewicht deregistraatie",6:"Kaalu registreerimise t\xFChistamine",7:"Painon poistaminen rekister\xF6innist\xE4"
,8:"Poids \xE0 la radiation",9:"Ausstallgewicht",10:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,13:"Vekt avregistrering",15:"\u0412\u0435\u0441 \u043F\u0440\u0438 \u0441\u043D\u044F\u0442\u0438\u0438 "+
"\u0441 \u0443\u0447\u0451\u0442\u0430",16:"Peso al anular el registro",18:"\u0412\u0430\u0433\u0430 \u043F\u0440\u0438 \u0437\u043D\u044F\u0442\u0442\u0456 "+
"\u0437 \u043E\u0431\u043B\u0456\u043A\u0443"};C.A8F={1:"rast te\u017Eine",0:"Weight development"
,6:"Kaalu suurenemine",7:"Painon kehitys",8:"D\xE9veloppement du poids",9:"Gewichts~entwicklung"
,10:"\u0395\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,13:"Vektutvikling",15:"\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u0435\u0441\u0430"
,18:"\u0420\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0432\u0430\u0433\u0438"};
C.AS9={1:"prirast",2:"\u041F\u0440\u0438\u0440\u0430\u0441\u0442",3:"\u589E\u91CD"
,4:"P\u0159\xEDr\u016Fstek",0:"Weight gain",5:"Toename",6:"Kaalut\xF5us",7:"Painonnousu"
,8:"Croissance",9:"Zunahme",10:"\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,13:"Vekt\xF8kning",15:"\u041F\u0440\u0438\u0432\u0435\u0441",16:"Ganancia",17:"A\u011F\u0131rl\u0131k art\u0131\u015F\u0131"
,18:"\u041F\u0440\u0438\u0440\u0456\u0441\u0442"};C.A8H={1:"registrovane te\u017Eine"
,2:"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0442\u0435\u0433\u043B\u043E"
,3:"\u8A18\u9304\u7684\u9AD4\u91CD",4:"Zaznamenan\xE1 hmotnost",0:"Recorded weight(s)"
,5:"Opgenomen gewicht",6:"Salvestatud kaal(ud)",7:"Tallennetut painot",8:"Poids enregistr\xE9(s)"
,9:"Erfasste Gewicht(e)",10:"\u039A\u03B1\u03C4\u03B1\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF "+
"\u03B2\u03AC\u03C1\u03BF\u03C2(\u0392\u03AC\u03C1\u03B7)",13:"Registrerte vekt(er)"
,15:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 "+
"\u0432\u0435\u0441/\u0432\u0435\u0441\u0430",16:"Peso(s) registrado(s)",18:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0430 "+
"\u0432\u0430\u0433\u0430"};C.Art={1:"registrovane te\u017Eine",2:"\u0417\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u0435\u0433\u043B\u043E"
,3:"\u91CD\u91CF\u7D00\u9304",4:"Zaznamen\xE1n\xED v\xE1hy",0:"Weight recording"
,5:"Gewichts bepaling",6:"Kaalu registreerimine",7:"Painon tallennus",8:"Enregistrement du poids"
,9:"Gewichtserfassung",10:"\u039A\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B2\u03AC\u03C1\u03BF\u03C5\u03C2"
,13:"Vektregistrering",15:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 "+
"\u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F",16:"Registro de peso"
,17:"A\u011F\u0131rl\u0131k kayd\u0131",18:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443 "+
"\u0432\u0437\u0432\u0430\u0436\u0435\u043D\u043D\u044F"};C.I$={1:"Ostatak",2:"\u041C\u0435\u0441\u0442\u043E\u043D\u0430\u0445\u043E~\u0436\u0434\u0435\u043D\u0438\u0435"
,0:"Whereabouts",6:"Asukohad",7:"Olinpaika",8:"Lieu de s\xE9jour",9:"Verbleib",10:
"\u03A0\u03BF\u03CD \u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5",13:"Oppholdssted"
,15:"\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E~\u0436\u0435\u043D\u0438\u0435"
,18:"\u041C\u0456\u0441\u0446\u0435\u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F"
};C.A8I={1:"LED bijela",0:"LED white",6:"LED valge",7:"LED valkoinen",8:"DEL blanche"
,9:"LED wei\xDF",10:"LED \u03BB\u03B5\u03C5\u03BA\u03CC",13:"LED hvit",15:"\u0411\u0435\u043B\u044B\u0439 LED"
,18:"\u0411\u0456\u043B\u0438\u0439 LED"};C.Year={1:"godina",0:"Year",5:"Jaar",6:
"Aasta",7:"Vuosi",8:"Ann\xE9e",9:"Jahr",10:"\u0388\u03C4\u03BF\u03C2",13:"\xC5r"
,15:"\u0413\u043E\u0434",16:"A\xF1o",18:"\u0420\u0456\u043A"};C.A8J={0:"yy/mm",6:
"aa/kk",7:"vv/kk",8:"AA/MM",9:"JJ/MM",10:"\u03B5\u03B5/\u03BC\u03BC",13:"\xE5r/mnd"
,15:"\u0413\u0413/\u041C\u041C",18:"\u0420\u0420/\u041C\u041C"};C.A8K={0:"yy/mm/dd"
,6:"aa/kk/pp",7:"vv/kk/pv",8:"AA/MM/JJ",9:"JJ/MM/TT",10:"\u03B5\u03B5/\u03BC\u03BC/\u03B7\u03B7"
,13:"\xE5r/mnd/dag",15:"\u0413\u0413/\u041C\u041C/\u0414\u0414",16:"aa/mm/dd",18:
"\u0420\u0420/\u041C\u041C/\u0414\u0414"};C.Yes={1:"da",2:"\u0414\u0430",3:"\u662F\u7684"
,4:"Ano",0:"Yes",5:"Ja",6:"Jah",7:"Kyll\xE4",8:"Oui",9:"Ja",10:"\u039D\u03B1\u03B9"
,13:"Ja",15:"\u0414\u0430",16:"S\xED",17:"Evet",18:"\u0422\u0430\u043A"};C.AIu={
2:"\u043A\u0433",3:"\u516C\u65A4",0:"kg",10:"\u039A\u03B9\u03BB\u03AC",15:"\u043A\u0433"
,18:"\u043A\u0433"};C.Afh={2:"\u041B\u0438\u0442\u044A\u0440",3:"\u516C\u5347",4:
"Litr",0:"l",5:"I",6:"L",10:"\u0399",15:"\u043B",18:"\u043B"};
C._Init=function(){};C._ReInit=function(){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */