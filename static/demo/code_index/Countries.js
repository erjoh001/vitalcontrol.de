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

C.BhD={1:"Austrija",2:"\u0410\u0432\u0441\u0442\u0440\u0438\u044F",3:"\u5967\u5730\u5229"
,4:"Rakousko",0:"Austria",5:"Oostenrijk",7:"It\xE4valta",8:"Autriche",9:"\xD6sterreich"
,10:"\u0391\u03C5\u03C3\u03C4\u03C1\u03AF\u03B1",12:"\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2"
,13:"\xD8sterrike",15:"\u0410\u0432\u0441\u0442\u0440\u0438\u044F",17:"Avusturya"
,18:"\u0410\u0432\u0441\u0442\u0440\u0456\u044F"};C.BhK={2:"\u0411\u0435\u043B\u0433\u0438\u044F"
,3:"\u6BD4\u5229\u6642",4:"Belgie",0:"Belgium",5:"Belgi\xE9",6:"Belgia",7:"Belgia"
,8:"Belgique",9:"Belgien",10:"\u0392\u03AD\u03BB\u03B3\u03B9\u03BF",11:"Belgio",
12:"\u30D9\u30EB\u30AE\u30FC",14:"Belgia",15:"\u0411\u0435\u043B\u044C\u0433\u0438\u044F"
,16:"B\xE9lgica",17:"Bel\xE7ika",18:"\u0411\u0435\u043B\u044C\u0433\u0456\u044F"
};C.BhQ={1:"Bosna",2:"\u0411\u043E\u0441\u043D\u0430",4:"Bosna",0:"Bosnia",5:"Bosni\xEB"
,8:"Bosnie",9:"Bosnien",10:"\u0392\u03BF\u03C3\u03BD\u03AF\u03B1",12:"\u30DC\u30B9\u30CB\u30A2"
,14:"Bo\u015Bnia",15:"\u0411\u043E\u0441\u043D\u0438\u044F",17:"Bosna",18:"\u0411\u043E\u0441\u043D\u0456\u044F"
};C.BhS={1:"Bugarska",2:"\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F",4:"Bulharsko"
,0:"Bulgaria",5:"Bulgaars",6:"Bulgaaria",8:"Bulgarie",9:"Bulgarien",10:"\u0392\u03BF\u03C5\u03BB\u03B3\u03B1\u03C1\u03AF\u03B1"
,12:"\u30D6\u30EB\u30AC\u30EA\u30A2",14:"Bu\u0142garia",15:"\u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F"
,17:"Bulgaristan"};C.BhV={1:"Kanada",2:"\u041A\u0430\u043D\u0430\u0434\u0430",3:
"\u52A0\u62FF\u5927",0:"Canada",7:"Kanada",9:"Kanada",10:"\u039A\u03B1\u03BD\u03B1\u03B4\u03AC\u03C2"
,12:"\u30AB\u30CA\u30C0",14:"Kanada",15:"\u041A\u0430\u043D\u0430\u0434\u0430",16:
"Canad\xE1",17:"Kanada",18:"\u041A\u0430\u043D\u0430\u0434\u0430"};C.BhY={1:"Kina"
,2:"\u041A\u0438\u0442\u0430\u0439",3:"\u4E2D\u570B",4:"\u010C\xEDna",0:"China",
7:"Kiina",8:"Chine",9:"VR China",10:"\u039A\u03AF\u03BD\u03B1",11:"Cina",12:"\u4E2D\u56FD"
,13:"Kina",14:"Chiny",15:"\u041A\u0438\u0442\u0430\u0439",16:"RP China",17:"\xC7in"
,18:"\u041A\u0438\u0442\u0430\u0439"};C.Bia={1:"Hrvatska",2:"\u0425\u044A\u0440\u0432\u0430\u0442\u0438\u044F"
,4:"Chorvatsko",0:"Croatia",5:"Kroatie",6:"Horvaatia",7:"Kroatia",8:"Croatie",9:
"Kroatien",10:"\u039A\u03C1\u03BF\u03B1\u03C4\u03AF\u03B1",11:"Croazia",12:"\u30AF\u30ED\u30A2\u30C1\u30A2"
,13:"Kroatia",14:"Chorwacja",15:"\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F"
,16:"Croacia",17:"H\u0131rvatistan"};C.Bic={1:"Kipar",2:"\u041A\u0438\u043F\u044A\u0440"
,4:"Kypr",0:"Cyprus",6:"K\xFCpros",7:"Kypros",8:"Chypre",9:"Zypern",10:"\u039A\u03CD\u03C0\u03C1\u03BF\u03C2"
,11:"Cipro",12:"\u30AD\u30D7\u30ED\u30B9",13:"Kypros",14:"Cypr",15:"\u041A\u0438\u043F\u0440"
,16:"Chipre",17:"K\u0131br\u0131s"};C.Bid={1:"Republika \u010Ce\u0161ka",2:"\u0427\u0435\u0445\u0438\u044F"
,3:"\u6377\u514B",4:"\u010Cesk\xE1 republika",0:"Czech Republic",5:"Tsjechi\xE9"
,6:"Czech Republik",7:"T\u0161ekin tasavalta",8:"Tch\xE9quie",9:"Tschechien",10:
"\u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1 \u03C4\u03B7\u03C2 "+
"\u03A4\u03C3\u03B5\u03C7\u03AF\u03B1\u03C2",11:"Repubblica Ceca",12:"\u30C1\u30A7\u30B3\u5171\u548C\u56FD"
,13:"Tsjekkisk Republikk",14:"Czechy",15:"\u0427\u0435\u0445\u0438\u044F",16:"Chequia"
,17:"\xC7ek Cumhuriyeti",18:"\u0427\u0435\u0441\u044C\u043A\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0456\u043A\u0430"
};C.Bik={1:"Danska",2:"\u0414\u0430\u043D\u0438\u044F",3:"\u4E39\u9EA5",4:"D\xE1nsko"
,0:"Denmark",5:"Denemarken",7:"Tanska",8:"Danemark",9:"D\xE4nemark",10:"\u0394\u03B1\u03BD\u03AF\u03B1"
,11:"Danimarca",12:"\u30C7\u30F3\u30DE\u30FC\u30AF",13:"Danmark",14:"Dania",15:"\u0414\u0430\u043D\u0438\u044F"
,16:"Dinamarca",17:"Danimarka",18:"\u0414\u0430\u043D\u0456\u044F"};C.BiV={1:"Estonija"
,2:"\u0415\u0441\u0442\u043E\u043D\u0438\u044F",3:"\u611B\u6C99\u5C3C\u4E9E",4:"Estonsko"
,0:"Estonia",5:"Estland",6:"Eesti",7:"Viro",8:"Estonie",9:"Estland",10:"\u0395\u03C3\u03B8\u03BF\u03BD\u03AF\u03B1"
,12:"\u30A8\u30B9\u30C8\u30CB\u30A2",13:"Estland",15:"\u042D\u0441\u0442\u043E\u043D\u0438\u044F"
,17:"Estonya",18:"\u0415\u0441\u0442\u043E\u043D\u0456\u044F"};C.Bi4={1:"Finska"
,2:"\u0424\u0438\u043D\u043B\u0430\u043D\u0434\u0438\u044F",3:"\u82AC\u862D",4:"Finsko"
,0:"Finland",7:"Suomi",8:"Finlande",9:"Finnland",10:"\u03A6\u03B9\u03BD\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"
,11:"Finlandia",12:"\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9",14:"Finlandia",15:"\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F"
,16:"Finlandia",17:"Finlandiya",18:"\u0424\u0456\u043D\u043B\u044F\u043D\u0434\u0456\u044F"
};C.Bja={1:"Francuska",2:"\u0424\u0440\u0430\u043D\u0446\u0438\u044F",3:"\u6CD5\u570B"
,4:"Francie",0:"France",5:"Frankrijk",7:"Ranska",9:"Frankreich",10:"\u0393\u03B1\u03BB\u03AF\u03B1"
,11:"Francia",12:"\u30D5\u30E9\u30F3\u30B9",13:"Frankrike",14:"Francja",15:"\u0424\u0440\u0430\u043D\u0446\u0438\u044F"
,16:"Francia",17:"Fransa",18:"\u0424\u0440\u0430\u043D\u0446\u0456\u044F"};C.Bje={
1:"Njema\u010Dka",2:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",3:"\u5FB7\u570B"
,4:"N\u011Bmeck\xFD",0:"Germany",5:"Duitsland",7:"Saksa",8:"Allemagne",9:"Deutschland"
,10:"\u0393\u03B5\u03C1\u03BC\u03B1\u03BD\u03AF\u03B1",11:"Germania",12:"\u30C9\u30A4\u30C1\u30E5\u30E9\u30F3\u30C8"
,13:"Tyskland",14:"Niemcy",15:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F"
,16:"Alemania",17:"Almanya",18:"\u041D\u0456\u043C\u0435\u0447\u0447\u0438\u043D\u0430"
};C.BjG={1:"Gr\u010Dka",2:"\u0413\u044A\u0440\u0446\u0438\u044F",4:"\u0158ecko",
0:"Greece",5:"Griekenland",8:"Gr\xE8ce",9:"Griechenland",10:"\u0395\u03BB\u03BB\u03AC\u03B4\u03B1"
,11:"Grecia",12:"\u30AE\u30EA\u30B7\u30E3",13:"Hellas",14:"Grecja",15:"\u0413\u0440\u0435\u0446\u0438\u044F"
,16:"Grecia",17:"Yunanistan",18:"\u0413\u0440\u0435\u0446\u0456\u044F"};C.BjM={1:
"Ma\u0111arska",2:"\u0423\u043D\u0433\u0430\u0440\u0438\u044F",3:"\u5308\u7259\u5229"
,4:"Ma\u010Farsko",0:"Hungary",5:"Hungarije",7:"Unkari",8:"Hongrie",9:"Ungarn",10:
"\u039F\u03C5\u03B3\u03B3\u03B1\u03C1\u03AF\u03B1",11:"Ungheria",12:"\u30CF\u30F3\u30AC\u30EA\u30FC"
,13:"Ungarn",14:"W\u0119gry",15:"\u0412\u0435\u043D\u0433\u0440\u0438\u044F",16:
"Hungr\xEDa",17:"Macaristan",18:"\u0423\u0433\u043E\u0440\u0449\u0438\u043D\u0430"
};C.BjV={1:"Irska",2:"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",3:"\u611B\u723E\u862D"
,4:"Irsko",0:"Ireland",5:"Ierland",7:"Irlanti",8:"Irlande",9:"Irland",10:"\u0399\u03C1\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"
,11:"Irlanda",12:"\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9",13:"Irland",14:"Irlandia"
,15:"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",16:"Irlanda",17:"\u0130rlanda"
,18:"\u0406\u0440\u043B\u0430\u043D\u0434\u0456\u044F"};C.Bj8={1:"Italija",2:"\u0418\u0442\u0430\u043B\u0438\u044F"
,3:"\u610F\u5927\u5229",4:"It\xE1lie",0:"Italy",5:"Italie",7:"Italia",8:"Italie"
,9:"Italien",10:"\u0399\u03C4\u03B1\u03BB\u03AF\u03B1",11:"Italia",12:"\u30A4\u30BF\u30EA\u30A2"
,13:"Italia",14:"W\u0142ochy",15:"\u0418\u0442\u0430\u043B\u0438\u044F",16:"Italia"
,17:"\u0130talya",18:"\u0406\u0442\u0430\u043B\u0456\u044F"};C.Bj_={2:"\u042F\u043F\u043E\u043D\u0438\u044F"
,3:"\u65E5\u672C",4:"Japonsko",0:"Japan",8:"Japon",10:"\u0399\u03B1\u03C0\u03C9\u03BD\u03AF\u03B1"
,11:"Giappone",12:"\u65E5\u672C",14:"Japonia",15:"\u042F\u043F\u043E\u043D\u0438\u044F"
,16:"Jap\xF3n",17:"Japonya",18:"\u042F\u043F\u043E\u043D\u0456\u044F"};C.Bkg={1:
"Latvija",2:"\u041B\u0430\u0442\u0432\u0438\u044F",4:"Loty\u0161sko",0:"Latvia",
5:"Letland",6:"L\xE4ti",8:"Lettonie",9:"Lettland",10:"\u039B\u03B5\u03C4\u03BF\u03BD\u03AF\u03B1"
,11:"Lettonia",12:"\u30E9\u30C8\u30D3\u30A2",14:"\u0141otwa",15:"\u041B\u0430\u0442\u0432\u0438\u044F"
,16:"Letonia",17:"Letonya"};C.Bkj={1:"Litvanija",2:"\u041B\u0438\u0442\u0432\u0430"
,3:"\u7ACB\u9676\u5B9B",4:"Litva",0:"Lithuania",5:"Litauen",8:"Lituanie",9:"Litauen"
,10:"\u039B\u03B9\u03B8\u03BF\u03C5\u03B1\u03BD\u03AF\u03B1",11:"Lituania",12:"\u30EA\u30C8\u30A2\u30CB\u30A2"
,13:"Litauen",14:"Litwa",15:"\u041B\u0438\u0442\u0432\u0430",16:"Lituania",17:"Litvanya"
,18:"\u041B\u0438\u0442\u0432\u0430"};C.Bkm={1:"Luksemburg",2:"\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433"
,4:"Lucembursko",0:"Luxembourg",5:"Luxemburg",6:"Luksemburg",7:"Luxemburg",9:"Luxemburg"
,10:"\u039B\u03BF\u03C5\u03BE\u03B5\u03BC\u03B2\u03BF\u03CD\u03C1\u03B3\u03BF",11:
"Lussemburgo",12:"\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30AF",14:"Luksemburg",15:
"\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433",16:"Luxemburgo",17:
"L\xFCksemburg"};C.Bko={2:"\u041C\u0430\u043B\u0442\u0430",0:"Malta",8:"Malte",10:
"\u039C\u03AC\u03BB\u03C4\u03B1",12:"\u30DE\u30EB\u30BF",15:"\u041C\u0430\u043B\u044C\u0442\u0430"
};C.BkE={1:"Nizozemska",2:"\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0438\u044F"
,3:"\u8377\u862D",4:"Holandsko",0:"Netherlands",5:"Nederland",7:"Alankomaat",8:"Les Pays-Bas"
,9:"Niederlande",10:"\u039F\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1",11:"Paesi Bassi"
,12:"\u30AA\u30E9\u30F3\u30C0",13:"Nederland",14:"Holandia",15:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0438\u044F"
,16:"Pa\xEDses Bajos",17:"Hollanda",18:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0456\u044F"
};C.BkL={1:"Norve\u0161ka",2:"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F",
3:"\u632A\u5A01",4:"Norsko",0:"Norway",5:"Noorwegen",7:"Norja",8:"La Norv\xE8ge"
,9:"Norwegen",10:"\u039D\u03BF\u03C1\u03B2\u03B7\u03B3\u03AF\u03B1",11:"Norvegia"
,12:"\u30CE\u30EB\u30A6\u30A7\u30FC",13:"Norge",14:"Norwegia",15:"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F"
,16:"Noruega",17:"Nove\xE7",18:"\u041D\u043E\u0440\u0432\u0435\u0433\u0456\u044F"
};C.Bou={1:"Poljska",2:"\u041F\u043E\u043B\u0448\u0430",3:"\u6CE2\u862D",4:"Polsko"
,0:"Poland",5:"Polen",7:"Puola",8:"La Pologne",9:"Polen",10:"\u03A0\u03BF\u03BB\u03C9\u03BD\u03AF\u03B1"
,11:"Polonia",12:"\u30DD\u30FC\u30E9\u30F3\u30C9",13:"Polen",14:"Polska",15:"\u041F\u043E\u043B\u044C\u0448\u0430"
,16:"Polonia",17:"Polanya",18:"\u041F\u043E\u043B\u044C\u0449\u0430"};C.Bov={2:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F"
,3:"\u8461\u8404\u7259",4:"Portugalsko",0:"Portugal",7:"Portugali",8:"Le Portugal"
,10:"\u03A0\u03BF\u03C1\u03C4\u03BF\u03B3\u03B1\u03BB\u03AF\u03B1",11:"Portogallo"
,12:"\u30DD\u30EB\u30C8\u30AC\u30EB",14:"Portugalia",15:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F"
,17:"Portekiz",18:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0456\u044F"
};C.BoZ={1:"Rumunija",2:"\u0420\u0443\u043C\u044A\u043D\u0438\u044F",4:"Rumunsko"
,0:"Romania",5:"Roemeni\xEB",6:"Rumeenia",8:"Roumanie",9:"Rum\xE4nien",10:"\u03A1\u03BF\u03C5\u03BC\u03B1\u03BD\u03AF\u03B1"
,12:"\u30EB\u30FC\u30DE\u30CB\u30A2",14:"Rumunia",15:"\u0420\u0443\u043C\u044B\u043D\u0438\u044F"
,16:"Rumania",17:"Romanya"};C.Bo1={1:"Rusija",2:"\u0420\u0443\u0441\u0438\u044F"
,3:"\u8607\u806F",4:"Rusko",0:"Russian Federation",5:"Rusland",6:"Russia",8:"La Russie"
,9:"Russland",10:"\u03A1\u03C9\u03C3\u03B9\u03BA\u03AE \u03BF\u03BC\u03BF\u03C3\u03C0\u03BF\u03BD\u03B4\u03AF\u03B1"
,11:"Federazione Russa",12:"\u30ED\u30B7\u30A2\u9023\u90A6",13:"Russiske f\xF8derasjon"
,14:"Rosja",15:"\u0420\u043E\u0441\u0441\u0438\u044F",16:"Rusia",17:"Rusya Federasyonu"
,18:"\u0420\u043E\u0441\u0456\u044F"};C.Bpy={1:"Slova\u010Dka",2:"\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F"
,4:"Slovensko",0:"Slovakia",5:"Slowakije",6:"Slovakkia",8:"Slovaquie",9:"Slowakei"
,10:"\u03A3\u03BB\u03BF\u03B2\u03B1\u03BA\u03AF\u03B1",11:"Slovacchia",12:"\u30B9\u30ED\u30D0\u30AD\u30A2"
,14:"S\u0142owacja",15:"\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F",16:"Eslovaquia"
,17:"Slovakya"};C.Bpz={1:"Slovenija",2:"\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F"
,3:"\u65AF\u6D1B\u7DAD\u5C3C\u4E9E",4:"Slovinsko",0:"Slovenia",5:"Sloweni\xE9",8:
"La Slov\xE9nie",9:"Slowenien",10:"\u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1"
,12:"\u30B9\u30ED\u30D9\u30CB\u30A2",14:"S\u0142owenia",15:"\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F"
,16:"Eslovenia",17:"Slovenya",18:"\u0421\u043B\u043E\u0432\u0435\u043D\u0456\u044F"
};C.BpA={1:"\u0160panija",2:"\u0418\u0441\u043F\u0430\u043D\u0438\u044F",3:"\u897F\u73ED\u7259"
,4:"\u0160pan\u011Blsko",0:"Spain",5:"Spanje",8:"L\u2019Espagne",9:"Spanien",10:
"\u0399\u03C3\u03C0\u03B1\u03BD\u03AF\u03B1",11:"Spagna",12:"\u30B9\u30DA\u30A4\u30F3"
,13:"Spania",14:"Hiszpania",15:"\u0418\u0441\u043F\u0430\u043D\u0438\u044F",16:"Espa\xF1a"
,17:"\u0130spanya",18:"\u0406\u0441\u043F\u0430\u043D\u0456\u044F"};C.Bp6={1:"\u0160vedska"
,2:"\u0428\u0432\u0435\u0446\u0438\u044F",3:"\u745E\u5178",4:"\u0160v\xE9dsko",0:
"Sweden",5:"Zweden",8:"La Su\xE8de",9:"Schweden",10:"\u03A3\u03BF\u03C5\u03B7\u03B4\u03AF\u03B1"
,11:"Svezia",12:"\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3",13:"Sverige",14:"Szwecja"
,15:"\u0428\u0432\u0435\u0446\u0438\u044F",16:"Suecia",17:"\u0130sve\xE7",18:"\u0428\u0432\u0435\u0446\u0456\u044F"
};C.Bp7={1:"\u0160vicarska",2:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F"
,3:"\u745E\u58EB",4:"\u0160v\xFDcarsko",0:"Switzerland",5:"Zwitserland",8:"La Suisse"
,9:"Schweiz",10:"\u0395\u03BB\u03B2\u03B5\u03C4\u03AF\u03B1",11:"Svizzera",12:"\u30B9\u30A4\u30B9"
,13:"Sveits",14:"Szwajcaria",15:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F"
,16:"Suiza",17:"\u0130svi\xE7re",18:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0456\u044F"
};C.Bqe={1:"Tajvan",2:"\u0422\u0430\u0439\u0432\u0430\u043D",3:"\u53F0\u7063",4:
"Tchaj-wan",0:"Taiwan",8:"Ta\xEFwan",10:"\u03A4\u03B1\u03CA\u03B2\u03AC\u03BD",12:
"\u53F0\u6E7E (\u305F\u3044\u308F\u3093)",14:"Tajwan",15:"\u0422\u0430\u0439\u0432\u0430\u043D\u044C"
,16:"Taiw\xE1n",17:"Tayvan",18:"\u0422\u0430\u0439\u0432\u0430\u043D\u044C"};C.Bqu={
1:"Turska",2:"\u0422\u0443\u0440\u0446\u0438\u044F",3:"\u571F\u8033\u5176",4:"Turecko"
,0:"Turkey",5:"Turkije",8:"La Turquie",9:"T\xFCrkei",10:"\u03A4\u03BF\u03C5\u03C1\u03BA\u03AF\u03B1"
,11:"Tacchino",12:"\u30C8\u30EB\u30B3",13:"Tyrkia",14:"Turcja",15:"\u0422\u0443\u0440\u0446\u0438\u044F"
,16:"Turqu\xEDa",17:"T\xFCrkiye",18:"\u0422\u0443\u0440\u0435\u0447\u0447\u0438\u043D\u0430"
};C.A$4={1:"Ujedinjeno kraljevstvo",2:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"
,3:"\u82F1\u570B",4:"Anglie",0:"United Kingdom",5:"Groot-Brittani\xE9",8:"Royaume-Uni"
,9:"Gro\xDFbritannien",10:"\u0395\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF \u0392\u03B1\u03C3\u03AF\u03BB\u03B5\u03B9\u03BF"
,11:"Regno Unito",12:"\u30A4\u30AE\u30EA\u30B9",13:"Storbritannia",14:"Wielka Brytania"
,15:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"
,16:"Reino Unido",17:"Birle\u015Fik Krall\u0131k",18:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0456\u044F"
};C.Bqx={1:"USA",2:"\u0421\u0410\u0429",3:"\u7F8E\u570B",4:"USA",0:"United States of America"
,5:"USA",6:"USA",7:"Yhdysvallat",8:"Les \xC9tats-Unis",9:"USA",10:"\u0397\u03BD\u03C9\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C0\u03BF\u03BB\u03B9\u03C4\u03B5\u03AF\u03B5\u03C2 "+
"\u03C4\u03B7\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2",11:"Stati Uniti d\'America"
,12:"\u30A2\u30E1\u30EA\u30AB\u5408\u8846\u56FD",13:"USA",14:"USA",15:"\u0421\u0428\u0410"
,16:"EE. UU.",17:"Amerika Birle\u015Fik Devletleri",18:"\u0421\u0428\u0410"};C.Bqy={
1:"Ukrajina",2:"\u0423\u043A\u0440\u0430\u0439\u043D\u0430",4:"Ukrajina",0:"Ukraine"
,5:"Oekra\xEFne",6:"Ukraina",7:"Ukraina",10:"\u039F\u03C5\u03BA\u03C1\u03B1\u03BD\u03AF\u03B1"
,11:"Ucraina",12:"\u30A6\u30AF\u30E9\u30A4\u30CA",13:"Ukraina",14:"Ukraina",15:"\u0423\u043A\u0440\u0430\u0438\u043D\u0430"
,16:"Ucrania",17:"Ukrayna",18:"\u0423\u043A\u0440\u0430\u0457\u043D\u0430"};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */