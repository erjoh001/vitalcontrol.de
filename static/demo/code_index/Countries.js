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
);if(index.acm)throw new Error("The unit file 'Countries.js' included twice!");index.
acm=(function(){var A=index;var C={};

C.BhI={1:"Austrija",2:"\u0410\u0432\u0441\u0442\u0440\u0438\u044F",3:"\u5967\u5730\u5229"
,4:"Rakousko",0:"Austria",6:"Oostenrijk",8:"It\xE4valta",9:"Autriche",10:"\xD6sterreich"
,11:"\u0391\u03C5\u03C3\u03C4\u03C1\u03AF\u03B1",14:"\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2"
,15:"Austrija",16:"\xD8sterrike",20:"\u0410\u0432\u0441\u0442\u0440\u0438\u044F"
,23:"Avusturya",24:"\u0410\u0432\u0441\u0442\u0440\u0456\u044F"};C.BhP={2:"\u0411\u0435\u043B\u0433\u0438\u044F"
,3:"\u6BD4\u5229\u6642",4:"Belgie",0:"Belgium",6:"Belgi\xE9",7:"Belgia",8:"Belgia"
,9:"Belgique",10:"Belgien",11:"\u0392\u03AD\u03BB\u03B3\u03B9\u03BF",13:"Belgio"
,14:"\u30D9\u30EB\u30AE\u30FC",15:"Be\u013C\u0123ija",17:"Belgia",20:"\u0411\u0435\u043B\u044C\u0433\u0438\u044F"
,21:"B\xE9lgica",23:"Bel\xE7ika",24:"\u0411\u0435\u043B\u044C\u0433\u0456\u044F"
};C.BhV={1:"Bosna",2:"\u0411\u043E\u0441\u043D\u0430",4:"Bosna",0:"Bosnia",6:"Bosni\xEB"
,9:"Bosnie",10:"Bosnien",11:"\u0392\u03BF\u03C3\u03BD\u03AF\u03B1",14:"\u30DC\u30B9\u30CB\u30A2"
,15:"Bosnija",17:"Bo\u015Bnia",20:"\u0411\u043E\u0441\u043D\u0438\u044F",23:"Bosna"
,24:"\u0411\u043E\u0441\u043D\u0456\u044F"};C.BhX={1:"Bugarska",2:"\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F"
,4:"Bulharsko",0:"Bulgaria",6:"Bulgaars",7:"Bulgaaria",9:"Bulgarie",10:"Bulgarien"
,11:"\u0392\u03BF\u03C5\u03BB\u03B3\u03B1\u03C1\u03AF\u03B1",14:"\u30D6\u30EB\u30AC\u30EA\u30A2"
,15:"Bulg\u0101rija",17:"Bu\u0142garia",20:"\u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F"
,23:"Bulgaristan",24:"\u0411\u043E\u043B\u0433\u0430\u0440\u0456\u044F"};C.Bh0={
1:"Kanada",2:"\u041A\u0430\u043D\u0430\u0434\u0430",3:"\u52A0\u62FF\u5927",0:"Canada"
,8:"Kanada",10:"Kanada",11:"\u039A\u03B1\u03BD\u03B1\u03B4\u03AC\u03C2",14:"\u30AB\u30CA\u30C0"
,15:"Kan\u0101da",17:"Kanada",20:"\u041A\u0430\u043D\u0430\u0434\u0430",21:"Canad\xE1"
,23:"Kanada",24:"\u041A\u0430\u043D\u0430\u0434\u0430"};C.Bh3={1:"Kina",2:"\u041A\u0438\u0442\u0430\u0439"
,3:"\u4E2D\u570B",4:"\u010C\xEDna",0:"China",8:"Kiina",9:"Chine",10:"VR China",11:
"\u039A\u03AF\u03BD\u03B1",13:"Cina",14:"\u4E2D\u56FD",15:"\u0136\u012Bna",16:"Kina"
,17:"Chiny",20:"\u041A\u0438\u0442\u0430\u0439",21:"RP China",23:"\xC7in",24:"\u041A\u0438\u0442\u0430\u0439"
};C.Bif={1:"Hrvatska",2:"\u0425\u044A\u0440\u0432\u0430\u0442\u0438\u044F",4:"Chorvatsko"
,0:"Croatia",6:"Kroatie",7:"Horvaatia",8:"Kroatia",9:"Croatie",10:"Kroatien",11:
"\u039A\u03C1\u03BF\u03B1\u03C4\u03AF\u03B1",13:"Croazia",14:"\u30AF\u30ED\u30A2\u30C1\u30A2"
,15:"Horv\u0101tija",16:"Kroatia",17:"Chorwacja",20:"\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F"
,21:"Croacia",23:"H\u0131rvatistan",24:"\u0425\u043E\u0440\u0432\u0430\u0442\u0456\u044F"
};C.Bih={1:"Kipar",2:"\u041A\u0438\u043F\u044A\u0440",4:"Kypr",0:"Cyprus",7:"K\xFCpros"
,8:"Kypros",9:"Chypre",10:"Zypern",11:"\u039A\u03CD\u03C0\u03C1\u03BF\u03C2",13:
"Cipro",14:"\u30AD\u30D7\u30ED\u30B9",15:"Kipra",16:"Kypros",17:"Cypr",20:"\u041A\u0438\u043F\u0440"
,21:"Chipre",23:"K\u0131br\u0131s",24:"\u041A\u0456\u043F\u0440"};C.Bii={1:"Republika \u010Ce\u0161ka"
,2:"\u0427\u0435\u0445\u0438\u044F",3:"\u6377\u514B",4:"\u010Cesk\xE1 republika"
,0:"Czech Republic",6:"Tsjechi\xE9",7:"Czech Republik",8:"T\u0161ekin tasavalta"
,9:"Tch\xE9quie",10:"Tschechien",11:"\u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1 \u03C4\u03B7\u03C2 "+
"\u03A4\u03C3\u03B5\u03C7\u03AF\u03B1\u03C2",13:"Repubblica Ceca",14:"\u30C1\u30A7\u30B3\u5171\u548C\u56FD"
,15:"\u010Cehija",16:"Tsjekkisk Republikk",17:"Czechy",20:"\u0427\u0435\u0445\u0438\u044F"
,21:"Chequia",23:"\xC7ek Cumhuriyeti",24:"\u0427\u0435\u0441\u044C\u043A\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0456\u043A\u0430"
};C.Bip={1:"Danska",2:"\u0414\u0430\u043D\u0438\u044F",3:"\u4E39\u9EA5",4:"D\xE1nsko"
,0:"Denmark",6:"Denemarken",8:"Tanska",9:"Danemark",10:"D\xE4nemark",11:"\u0394\u03B1\u03BD\u03AF\u03B1"
,13:"Danimarca",14:"\u30C7\u30F3\u30DE\u30FC\u30AF",15:"D\u0101nija",16:"Danmark"
,17:"Dania",20:"\u0414\u0430\u043D\u0438\u044F",21:"Dinamarca",23:"Danimarka",24:
"\u0414\u0430\u043D\u0456\u044F"};C.Bi0={1:"Estonija",2:"\u0415\u0441\u0442\u043E\u043D\u0438\u044F"
,3:"\u611B\u6C99\u5C3C\u4E9E",4:"Estonsko",0:"Estonia",6:"Estland",7:"Eesti",8:"Viro"
,9:"Estonie",10:"Estland",11:"\u0395\u03C3\u03B8\u03BF\u03BD\u03AF\u03B1",14:"\u30A8\u30B9\u30C8\u30CB\u30A2"
,15:"Igaunija",16:"Estland",20:"\u042D\u0441\u0442\u043E\u043D\u0438\u044F",23:"Estonya"
,24:"\u0415\u0441\u0442\u043E\u043D\u0456\u044F"};C.Bi9={1:"Finska",2:"\u0424\u0438\u043D\u043B\u0430\u043D\u0434\u0438\u044F"
,3:"\u82AC\u862D",4:"Finsko",0:"Finland",8:"Suomi",9:"Finlande",10:"Finnland",11:
"\u03A6\u03B9\u03BD\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1",13:"Finlandia",14:"\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9"
,15:"Somija",17:"Finlandia",20:"\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F"
,21:"Finlandia",23:"Finlandiya",24:"\u0424\u0456\u043D\u043B\u044F\u043D\u0434\u0456\u044F"
};C.Bjf={1:"Francuska",2:"\u0424\u0440\u0430\u043D\u0446\u0438\u044F",3:"\u6CD5\u570B"
,4:"Francie",0:"France",6:"Frankrijk",8:"Ranska",10:"Frankreich",11:"\u0393\u03B1\u03BB\u03AF\u03B1"
,13:"Francia",14:"\u30D5\u30E9\u30F3\u30B9",15:"Francija",16:"Frankrike",17:"Francja"
,20:"\u0424\u0440\u0430\u043D\u0446\u0438\u044F",21:"Francia",23:"Fransa",24:"\u0424\u0440\u0430\u043D\u0446\u0456\u044F"
};C.Bjj={1:"Njema\u010Dka",2:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",
3:"\u5FB7\u570B",4:"N\u011Bmeck\xFD",0:"Germany",6:"Duitsland",8:"Saksa",9:"Allemagne"
,10:"Deutschland",11:"\u0393\u03B5\u03C1\u03BC\u03B1\u03BD\u03AF\u03B1",13:"Germania"
,14:"\u30C9\u30A4\u30C1\u30E5\u30E9\u30F3\u30C8",15:"V\u0101cija",16:"Tyskland",
17:"Niemcy",20:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",21:"Alemania",
23:"Almanya",24:"\u041D\u0456\u043C\u0435\u0447\u0447\u0438\u043D\u0430"};C.BjL={
1:"Gr\u010Dka",2:"\u0413\u044A\u0440\u0446\u0438\u044F",4:"\u0158ecko",0:"Greece"
,6:"Griekenland",9:"Gr\xE8ce",10:"Griechenland",11:"\u0395\u03BB\u03BB\u03AC\u03B4\u03B1"
,13:"Grecia",14:"\u30AE\u30EA\u30B7\u30E3",15:"Grie\u0137ija",16:"Hellas",17:"Grecja"
,20:"\u0413\u0440\u0435\u0446\u0438\u044F",21:"Grecia",23:"Yunanistan",24:"\u0413\u0440\u0435\u0446\u0456\u044F"
};C.BjR={1:"Ma\u0111arska",2:"\u0423\u043D\u0433\u0430\u0440\u0438\u044F",3:"\u5308\u7259\u5229"
,4:"Ma\u010Farsko",0:"Hungary",6:"Hungarije",8:"Unkari",9:"Hongrie",10:"Ungarn",
11:"\u039F\u03C5\u03B3\u03B3\u03B1\u03C1\u03AF\u03B1",13:"Ungheria",14:"\u30CF\u30F3\u30AC\u30EA\u30FC"
,15:"Ung\u0101rija",16:"Ungarn",17:"W\u0119gry",20:"\u0412\u0435\u043D\u0433\u0440\u0438\u044F"
,21:"Hungr\xEDa",23:"Macaristan",24:"\u0423\u0433\u043E\u0440\u0449\u0438\u043D\u0430"
};C.Bj0={1:"Irska",2:"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",3:"\u611B\u723E\u862D"
,4:"Irsko",0:"Ireland",6:"Ierland",8:"Irlanti",9:"Irlande",10:"Irland",11:"\u0399\u03C1\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"
,13:"Irlanda",14:"\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9",15:"\u012Arija",16:"Irland"
,17:"Irlandia",20:"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",21:"Irlanda"
,23:"\u0130rlanda",24:"\u0406\u0440\u043B\u0430\u043D\u0434\u0456\u044F"};C.Bkb={
1:"Italija",2:"\u0418\u0442\u0430\u043B\u0438\u044F",3:"\u610F\u5927\u5229",4:"It\xE1lie"
,0:"Italy",6:"Italie",8:"Italia",9:"Italie",10:"Italien",11:"\u0399\u03C4\u03B1\u03BB\u03AF\u03B1"
,13:"Italia",14:"\u30A4\u30BF\u30EA\u30A2",15:"It\u0101lija",16:"Italia",17:"W\u0142ochy"
,20:"\u0418\u0442\u0430\u043B\u0438\u044F",21:"Italia",23:"\u0130talya",24:"\u0406\u0442\u0430\u043B\u0456\u044F"
};C.Bkd={2:"\u042F\u043F\u043E\u043D\u0438\u044F",3:"\u65E5\u672C",4:"Japonsko",
0:"Japan",9:"Japon",11:"\u0399\u03B1\u03C0\u03C9\u03BD\u03AF\u03B1",13:"Giappone"
,14:"\u65E5\u672C",15:"Jap\u0101na",17:"Japonia",20:"\u042F\u043F\u043E\u043D\u0438\u044F"
,21:"Jap\xF3n",23:"Japonya",24:"\u042F\u043F\u043E\u043D\u0456\u044F"};C.Bkl={1:
"Latvija",2:"\u041B\u0430\u0442\u0432\u0438\u044F",4:"Loty\u0161sko",0:"Latvia",
6:"Letland",7:"L\xE4ti",9:"Lettonie",10:"Lettland",11:"\u039B\u03B5\u03C4\u03BF\u03BD\u03AF\u03B1"
,13:"Lettonia",14:"\u30E9\u30C8\u30D3\u30A2",15:"Latvija",17:"\u0141otwa",20:"\u041B\u0430\u0442\u0432\u0438\u044F"
,21:"Letonia",23:"Letonya",24:"\u041B\u0430\u0442\u0432\u0456\u044F"};C.Bko={1:"Litvanija"
,2:"\u041B\u0438\u0442\u0432\u0430",3:"\u7ACB\u9676\u5B9B",4:"Litva",0:"Lithuania"
,6:"Litauen",9:"Lituanie",10:"Litauen",11:"\u039B\u03B9\u03B8\u03BF\u03C5\u03B1\u03BD\u03AF\u03B1"
,13:"Lituania",14:"\u30EA\u30C8\u30A2\u30CB\u30A2",15:"Lietuva",16:"Litauen",17:
"Litwa",20:"\u041B\u0438\u0442\u0432\u0430",21:"Lituania",23:"Litvanya",24:"\u041B\u0438\u0442\u0432\u0430"
};C.Bkr={1:"Luksemburg",2:"\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433"
,4:"Lucembursko",0:"Luxembourg",6:"Luxemburg",7:"Luksemburg",8:"Luxemburg",10:"Luxemburg"
,11:"\u039B\u03BF\u03C5\u03BE\u03B5\u03BC\u03B2\u03BF\u03CD\u03C1\u03B3\u03BF",13:
"Lussemburgo",14:"\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30AF",15:"Luksemburga",17:
"Luksemburg",20:"\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433",21:
"Luxemburgo",23:"L\xFCksemburg",24:"\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433"
};C.Bkt={2:"\u041C\u0430\u043B\u0442\u0430",0:"Malta",9:"Malte",11:"\u039C\u03AC\u03BB\u03C4\u03B1"
,14:"\u30DE\u30EB\u30BF",20:"\u041C\u0430\u043B\u044C\u0442\u0430",24:"\u041C\u0430\u043B\u044C\u0442\u0430"
};C.BkJ={1:"Nizozemska",2:"\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0438\u044F"
,3:"\u8377\u862D",4:"Holandsko",0:"Netherlands",6:"Nederland",8:"Alankomaat",9:"Les Pays-Bas"
,10:"Niederlande",11:"\u039F\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1",13:"Paesi Bassi"
,14:"\u30AA\u30E9\u30F3\u30C0",15:"N\u012Bderlande",16:"Nederland",17:"Holandia"
,20:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0438\u044F",21:"Pa\xEDses Bajos"
,23:"Hollanda",24:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0456\u044F"};C.BkQ={
1:"Norve\u0161ka",2:"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F",3:"\u632A\u5A01"
,4:"Norsko",0:"Norway",6:"Noorwegen",8:"Norja",9:"La Norv\xE8ge",10:"Norwegen",11:
"\u039D\u03BF\u03C1\u03B2\u03B7\u03B3\u03AF\u03B1",13:"Norvegia",14:"\u30CE\u30EB\u30A6\u30A7\u30FC"
,15:"Norv\u0113\u0123ija",16:"Norge",17:"Norwegia",20:"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F"
,21:"Noruega",23:"Nove\xE7",24:"\u041D\u043E\u0440\u0432\u0435\u0433\u0456\u044F"
};C.Boz={1:"Poljska",2:"\u041F\u043E\u043B\u0448\u0430",3:"\u6CE2\u862D",4:"Polsko"
,0:"Poland",6:"Polen",8:"Puola",9:"La Pologne",10:"Polen",11:"\u03A0\u03BF\u03BB\u03C9\u03BD\u03AF\u03B1"
,13:"Polonia",14:"\u30DD\u30FC\u30E9\u30F3\u30C9",15:"Polija",16:"Polen",17:"Polska"
,20:"\u041F\u043E\u043B\u044C\u0448\u0430",21:"Polonia",23:"Polanya",24:"\u041F\u043E\u043B\u044C\u0449\u0430"
};C.BoA={2:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F",3:"\u8461\u8404\u7259"
,4:"Portugalsko",0:"Portugal",8:"Portugali",9:"Le Portugal",11:"\u03A0\u03BF\u03C1\u03C4\u03BF\u03B3\u03B1\u03BB\u03AF\u03B1"
,13:"Portogallo",14:"\u30DD\u30EB\u30C8\u30AC\u30EB",15:"Portug\u0101le",17:"Portugalia"
,20:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F",23:"Portekiz"
,24:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0456\u044F"};C.Bo4={1:"Rumunija"
,2:"\u0420\u0443\u043C\u044A\u043D\u0438\u044F",4:"Rumunsko",0:"Romania",6:"Roemeni\xEB"
,7:"Rumeenia",9:"Roumanie",10:"Rum\xE4nien",11:"\u03A1\u03BF\u03C5\u03BC\u03B1\u03BD\u03AF\u03B1"
,14:"\u30EB\u30FC\u30DE\u30CB\u30A2",15:"Rum\u0101nija",17:"Rumunia",20:"\u0420\u0443\u043C\u044B\u043D\u0438\u044F"
,21:"Rumania",23:"Romanya",24:"\u0420\u0443\u043C\u0443\u043D\u0456\u044F"};C.Bo6={
1:"Rusija",2:"\u0420\u0443\u0441\u0438\u044F",3:"\u8607\u806F",4:"Rusko",0:"Russian Federation"
,6:"Rusland",7:"Russia",9:"La Russie",10:"Russland",11:"\u03A1\u03C9\u03C3\u03B9\u03BA\u03AE \u03BF\u03BC\u03BF\u03C3\u03C0\u03BF\u03BD\u03B4\u03AF\u03B1"
,13:"Federazione Russa",14:"\u30ED\u30B7\u30A2\u9023\u90A6",15:"Krievijas Feder\u0101cija"
,16:"Russiske f\xF8derasjon",17:"Rosja",20:"\u0420\u043E\u0441\u0441\u0438\u044F"
,21:"Rusia",23:"Rusya Federasyonu",24:"\u0420\u043E\u0441\u0456\u044F"};C.BpD={1:
"Slova\u010Dka",2:"\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F",4:"Slovensko"
,0:"Slovakia",6:"Slowakije",7:"Slovakkia",9:"Slovaquie",10:"Slowakei",11:"\u03A3\u03BB\u03BF\u03B2\u03B1\u03BA\u03AF\u03B1"
,13:"Slovacchia",14:"\u30B9\u30ED\u30D0\u30AD\u30A2",15:"Slov\u0101kija",17:"S\u0142owacja"
,20:"\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F",21:"Eslovaquia",23:"Slovakya"
,24:"\u0421\u043B\u043E\u0432\u0430\u0447\u0447\u0438\u043D\u0430"};C.BpE={1:"Slovenija"
,2:"\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F",3:"\u65AF\u6D1B\u7DAD\u5C3C\u4E9E"
,4:"Slovinsko",0:"Slovenia",6:"Sloweni\xE9",9:"La Slov\xE9nie",10:"Slowenien",11:
"\u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1",14:"\u30B9\u30ED\u30D9\u30CB\u30A2"
,15:"Slov\u0113nija",17:"S\u0142owenia",20:"\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F"
,21:"Eslovenia",23:"Slovenya",24:"\u0421\u043B\u043E\u0432\u0435\u043D\u0456\u044F"
};C.BpF={1:"\u0160panija",2:"\u0418\u0441\u043F\u0430\u043D\u0438\u044F",3:"\u897F\u73ED\u7259"
,4:"\u0160pan\u011Blsko",0:"Spain",6:"Spanje",9:"L\u2019Espagne",10:"Spanien",11:
"\u0399\u03C3\u03C0\u03B1\u03BD\u03AF\u03B1",13:"Spagna",14:"\u30B9\u30DA\u30A4\u30F3"
,15:"Sp\u0101nija",16:"Spania",17:"Hiszpania",20:"\u0418\u0441\u043F\u0430\u043D\u0438\u044F"
,21:"Espa\xF1a",23:"\u0130spanya",24:"\u0406\u0441\u043F\u0430\u043D\u0456\u044F"
};C.Bp$={1:"\u0160vedska",2:"\u0428\u0432\u0435\u0446\u0438\u044F",3:"\u745E\u5178"
,4:"\u0160v\xE9dsko",0:"Sweden",6:"Zweden",9:"La Su\xE8de",10:"Schweden",11:"\u03A3\u03BF\u03C5\u03B7\u03B4\u03AF\u03B1"
,13:"Svezia",14:"\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3",15:"Zviedrija",16:"Sverige"
,17:"Szwecja",20:"\u0428\u0432\u0435\u0446\u0438\u044F",21:"Suecia",23:"\u0130sve\xE7"
,24:"\u0428\u0432\u0435\u0446\u0456\u044F"};C.Bqa={1:"\u0160vicarska",2:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F"
,3:"\u745E\u58EB",4:"\u0160v\xFDcarsko",0:"Switzerland",6:"Zwitserland",9:"La Suisse"
,10:"Schweiz",11:"\u0395\u03BB\u03B2\u03B5\u03C4\u03AF\u03B1",13:"Svizzera",14:"\u30B9\u30A4\u30B9"
,15:"\u0160veice",16:"Sveits",17:"Szwajcaria",20:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F"
,21:"Suiza",23:"\u0130svi\xE7re",24:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0456\u044F"
};C.Bqj={1:"Tajvan",2:"\u0422\u0430\u0439\u0432\u0430\u043D",3:"\u53F0\u7063",4:
"Tchaj-wan",0:"Taiwan",9:"Ta\xEFwan",11:"\u03A4\u03B1\u03CA\u03B2\u03AC\u03BD",14:
"\u53F0\u6E7E (\u305F\u3044\u308F\u3093)",15:"Taiv\u0101na",17:"Tajwan",20:"\u0422\u0430\u0439\u0432\u0430\u043D\u044C"
,21:"Taiw\xE1n",23:"Tayvan",24:"\u0422\u0430\u0439\u0432\u0430\u043D\u044C"};C.Bqz={
1:"Turska",2:"\u0422\u0443\u0440\u0446\u0438\u044F",3:"\u571F\u8033\u5176",4:"Turecko"
,0:"Turkey",6:"Turkije",9:"La Turquie",10:"T\xFCrkei",11:"\u03A4\u03BF\u03C5\u03C1\u03BA\u03AF\u03B1"
,13:"Tacchino",14:"\u30C8\u30EB\u30B3",15:"Turcija",16:"Tyrkia",17:"Turcja",20:"\u0422\u0443\u0440\u0446\u0438\u044F"
,21:"Turqu\xEDa",23:"T\xFCrkiye",24:"\u0422\u0443\u0440\u0435\u0447\u0447\u0438\u043D\u0430"
};C.A$$={1:"Ujedinjeno kraljevstvo",2:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"
,3:"\u82F1\u570B",4:"Anglie",0:"United Kingdom",6:"Groot-Brittani\xE9",9:"Royaume-Uni"
,10:"Gro\xDFbritannien",11:"\u0395\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF \u0392\u03B1\u03C3\u03AF\u03BB\u03B5\u03B9\u03BF"
,13:"Regno Unito",14:"\u30A4\u30AE\u30EA\u30B9",15:"Apvienot\u0101 Karaliste",16:
"Storbritannia",17:"Wielka Brytania",20:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"
,21:"Reino Unido",23:"Birle\u015Fik Krall\u0131k",24:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0456\u044F"
};C.BqC={1:"USA",2:"\u0421\u0410\u0429",3:"\u7F8E\u570B",4:"USA",0:"United States of America"
,6:"USA",7:"USA",8:"Yhdysvallat",9:"Les \xC9tats-Unis",10:"USA",11:"\u0397\u03BD\u03C9\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C0\u03BF\u03BB\u03B9\u03C4\u03B5\u03AF\u03B5\u03C2 "+
"\u03C4\u03B7\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2",13:"Stati Uniti d\'America"
,14:"\u30A2\u30E1\u30EA\u30AB\u5408\u8846\u56FD",15:"Amerikas Savienot\u0101s Valstis"
,16:"USA",17:"USA",20:"\u0421\u0428\u0410",21:"EE. UU.",23:"Amerika Birle\u015Fik Devletleri"
,24:"\u0421\u0428\u0410"};C.BqD={1:"Ukrajina",2:"\u0423\u043A\u0440\u0430\u0439\u043D\u0430"
,4:"Ukrajina",0:"Ukraine",6:"Oekra\xEFne",7:"Ukraina",8:"Ukraina",11:"\u039F\u03C5\u03BA\u03C1\u03B1\u03BD\u03AF\u03B1"
,13:"Ucraina",14:"\u30A6\u30AF\u30E9\u30A4\u30CA",15:"Ukraina",16:"Ukraina",17:"Ukraina"
,20:"\u0423\u043A\u0440\u0430\u0438\u043D\u0430",21:"Ucrania",23:"Ukrayna",24:"\u0423\u043A\u0440\u0430\u0457\u043D\u0430"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */