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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acm)throw new Error("The unit file 'Countries.js' included twice!");index.
acm=(function(){var A=index;var C={};

C.BgU={1:"Austrija",3:"\u5967\u5730\u5229",4:"Rakousko",0:"Austria",5:"Oostenrijk"
,7:"It\xE4valta",8:"Autriche",9:"\xD6sterreich",10:"\u0391\u03C5\u03C3\u03C4\u03C1\u03AF\u03B1"
,13:"\xD8sterrike",15:"\u0410\u0432\u0441\u0442\u0440\u0438\u044F",17:"Avusturya"
,18:"\u0410\u0432\u0441\u0442\u0440\u0456\u044F"};C.Bg1={3:"\u6BD4\u5229\u6642",
4:"Belgie",0:"Belgium",5:"Belgi\xE9",6:"Belgia",7:"Belgia",8:"Belgique",9:"Belgien"
,10:"\u0392\u03AD\u03BB\u03B3\u03B9\u03BF",12:"\u30D9\u30EB\u30AE\u30FC",14:"Belgia"
,15:"\u0411\u0435\u043B\u044C\u0433\u0438\u044F",16:"B\xE9lgica",17:"Bel\xE7ika"
,18:"\u0411\u0435\u043B\u044C\u0433\u0456\u044F"};C.Bg7={2:"\u0411\u043E\u0441\u043D\u0430"
,4:"Bosna",0:"Bosnia",5:"Bosni\xEB",8:"Bosnie",9:"Bosnien",10:"\u0392\u03BF\u03C3\u03BD\u03AF\u03B1"
,12:"\u30DC\u30B9\u30CB\u30A2",14:"Bo\u015Bnia",15:"\u0411\u043E\u0441\u043D\u0438\u044F"
,17:"Bosna",18:"\u0411\u043E\u0441\u043D\u0456\u044F"};C.Bg9={0:"Bulgaria",5:"Bulgaars"
,9:"Bulgarien"};C.Bg$={1:"Kanada",3:"\u52A0\u62FF\u5927",0:"Canada",7:"Kanada",9:
"Kanada",10:"\u039A\u03B1\u03BD\u03B1\u03B4\u03AC\u03C2",14:"Kanada",15:"\u041A\u0430\u043D\u0430\u0434\u0430"
,16:"Canad\xE1",17:"Kanada",18:"\u041A\u0430\u043D\u0430\u0434\u0430"};C.Bhc={1:
"Kina",3:"\u4E2D\u570B",4:"\u010C\xEDna",0:"China",7:"Kiina",8:"Chine",9:"VR China"
,10:"\u039A\u03AF\u03BD\u03B1",13:"Kina",14:"Chiny",15:"\u041A\u0438\u0442\u0430\u0439"
,16:"RP China",17:"\xC7in",18:"\u041A\u0438\u0442\u0430\u0439"};C.Bhq={0:"Croatia"
,5:"Kroatie",9:"Kroatien",16:"Croacia"};C.Bhs={0:"Cyprus",9:"Zypern",16:"Chipre"
};C.Bht={1:"Republika \u010Ce\u0161ka",3:"\u6377\u514B",4:"\u010Cesk\xE1 republika"
,0:"Czech Republic",5:"Tsjechi\xE9",6:"Czech Republik",7:"T\u0161ekin tasavalta"
,8:"Tch\xE9quie",9:"Tschechien",10:"\u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1 \u03C4\u03B7\u03C2 "+
"\u03A4\u03C3\u03B5\u03C7\u03AF\u03B1\u03C2",13:"Tsjekkisk Republikk",14:"Czechy"
,15:"\u0427\u0435\u0445\u0438\u044F",16:"Chequia",17:"\xC7ek Cumhuriyeti",18:"\u0427\u0435\u0441\u044C\u043A\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0456\u043A\u0430"
};C.Bhz={1:"Danska",3:"\u4E39\u9EA5",4:"D\xE1nsko",0:"Denmark",5:"Denemarken",7:
"Tanska",8:"Danemark",9:"D\xE4nemark",10:"\u0394\u03B1\u03BD\u03AF\u03B1",13:"Danmark"
,14:"Dania",15:"\u0414\u0430\u043D\u0438\u044F",16:"Dinamarca",17:"Danimarka",18:
"\u0414\u0430\u043D\u0456\u044F"};C.Bh4={1:"Estonija",3:"\u611B\u6C99\u5C3C\u4E9E"
,4:"Estonsko",0:"Estonia",5:"Estland",6:"Eesti",7:"Viro",8:"Estonie",9:"Estland"
,10:"\u0395\u03C3\u03B8\u03BF\u03BD\u03AF\u03B1",13:"Estland",15:"\u042D\u0441\u0442\u043E\u043D\u0438\u044F"
,17:"Estonya",18:"\u0415\u0441\u0442\u043E\u043D\u0456\u044F"};C.Bib={1:"Finska"
,3:"\u82AC\u862D",4:"Finsko",0:"Finland",7:"Suomi",8:"Finlande",9:"Finnland",10:
"\u03A6\u03B9\u03BD\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1",14:"Finlandia",15:"\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F"
,16:"Finlandia",17:"Finlandiya",18:"\u0424\u0456\u043D\u043B\u044F\u043D\u0434\u0456\u044F"
};C.Bij={1:"Francuska",3:"\u6CD5\u570B",4:"Francie",0:"France",5:"Frankrijk",7:"Ranska"
,9:"Frankreich",10:"\u0393\u03B1\u03BB\u03AF\u03B1",13:"Frankrike",14:"Francja",
15:"\u0424\u0440\u0430\u043D\u0446\u0438\u044F",16:"Francia",17:"Fransa",18:"\u0424\u0440\u0430\u043D\u0446\u0456\u044F"
};C.Bin={1:"Njema\u010Dka",3:"\u5FB7\u570B",4:"N\u011Bmeck\xFD",0:"Germany",5:"Duitsland"
,7:"Saksa",8:"Allemagne",9:"Deutschland",10:"\u0393\u03B5\u03C1\u03BC\u03B1\u03BD\u03AF\u03B1"
,12:"\u30C9\u30A4\u30C1\u30E5\u30E9\u30F3\u30C8",13:"Tyskland",14:"Niemcy",15:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F"
,16:"Alemania",17:"Almanya",18:"\u041D\u0456\u043C\u0435\u0447\u0447\u0438\u043D\u0430"
};C.BiP={1:"Gr\u010Dka",0:"Greece",5:"Griekenland",8:"Gr\xE8ce",9:"Griechenland"
,10:"\u0395\u03BB\u03BB\u03AC\u03B4\u03B1",13:"Hellas",15:"\u0413\u0440\u0435\u0446\u0438\u044F"
,16:"Grecia",18:"\u0413\u0440\u0435\u0446\u0456\u044F"};C.BiW={1:"Ma\u0111arska"
,3:"\u5308\u7259\u5229",4:"Ma\u010Farsko",0:"Hungary",5:"Hungarije",7:"Unkari",8:
"Hongrie",9:"Ungarn",10:"\u039F\u03C5\u03B3\u03B3\u03B1\u03C1\u03AF\u03B1",13:"Ungarn"
,14:"W\u0119gry",15:"\u0412\u0435\u043D\u0433\u0440\u0438\u044F",16:"Hungr\xEDa"
,17:"Macaristan",18:"\u0423\u0433\u043E\u0440\u0449\u0438\u043D\u0430"};C.Bi5={1:
"Irska",3:"\u611B\u723E\u862D",4:"Irsko",0:"Ireland",5:"Ierland",7:"Irlanti",8:"Irlande"
,9:"Irland",10:"\u0399\u03C1\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1",13:"Irland",14:
"Irlandia",15:"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",16:"Irlanda",17:
"\u0130rlanda",18:"\u0406\u0440\u043B\u0430\u043D\u0434\u0456\u044F"};C.Bjf={1:"Italija"
,3:"\u610F\u5927\u5229",4:"It\xE1lie",0:"Italy",5:"Italie",7:"Italia",8:"Italie"
,9:"Italien",10:"\u0399\u03C4\u03B1\u03BB\u03AF\u03B1",13:"Italia",14:"W\u0142ochy"
,15:"\u0418\u0442\u0430\u043B\u0438\u044F",16:"Italia",17:"\u0130talya",18:"\u0406\u0442\u0430\u043B\u0456\u044F"
};C.Bjh={3:"\u65E5\u672C",4:"Japonsko",0:"Japan",8:"Japon",10:"\u0399\u03B1\u03C0\u03C9\u03BD\u03AF\u03B1"
,14:"Japonia",15:"\u042F\u043F\u043E\u043D\u0438\u044F",16:"Jap\xF3n",17:"Japonya"
,18:"\u042F\u043F\u043E\u043D\u0456\u044F"};C.Bjp={0:"Latvia",5:"Letland",9:"Lettland"
,16:"Letonia"};C.Bjs={1:"Litvanija",3:"\u7ACB\u9676\u5B9B",4:"Litva",0:"Lithuania"
,5:"Litauen",8:"Lituanie",9:"Litauen",10:"\u039B\u03B9\u03B8\u03BF\u03C5\u03B1\u03BD\u03AF\u03B1"
,13:"Litauen",14:"Litwa",15:"\u041B\u0438\u0442\u0432\u0430",16:"Lituania",17:"Litvanya"
,18:"\u041B\u0438\u0442\u0432\u0430"};C.Bjv={0:"Luxembourg",5:"Luxemburg",9:"Luxemburg"
,16:"Luxemburgo"};C.Bjx="Malta";C.BjN={1:"Nizozemska",3:"\u8377\u862D",4:"Holandsko"
,0:"Netherlands",5:"Nederland",7:"Alankomaat",8:"Les Pays-Bas",9:"Niederlande",10:
"\u039F\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1",13:"Nederland",14:"Holandia",15:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0438\u044F"
,16:"Pa\xEDses Bajos",17:"Hollanda",18:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0456\u044F"
};C.BjU={1:"Norve\u0161ka",3:"\u632A\u5A01",4:"Norsko",0:"Norway",5:"Noorwegen",
7:"Norja",8:"La Norv\xE8ge",9:"Norwegen",10:"\u039D\u03BF\u03C1\u03B2\u03B7\u03B3\u03AF\u03B1"
,13:"Norge",14:"Norwegia",15:"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F",
16:"Noruega",17:"Nove\xE7",18:"\u041D\u043E\u0440\u0432\u0435\u0433\u0456\u044F"
};C.Bnz={1:"Poljska",3:"\u6CE2\u862D",4:"Polsko",0:"Poland",5:"Polen",7:"Puola",
8:"La Pologne",9:"Polen",10:"\u03A0\u03BF\u03BB\u03C9\u03BD\u03AF\u03B1",13:"Polen"
,14:"Polska",15:"\u041F\u043E\u043B\u044C\u0448\u0430",16:"Polonia",17:"Polanya"
,18:"\u041F\u043E\u043B\u044C\u0449\u0430"};C.BnA={3:"\u8461\u8404\u7259",4:"Portugalsko"
,0:"Portugal",7:"Portugali",8:"Le Portugal",10:"\u03A0\u03BF\u03C1\u03C4\u03BF\u03B3\u03B1\u03BB\u03AF\u03B1"
,14:"Portugalia",15:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F"
,17:"Portekiz",18:"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0456\u044F"
};C.Bn2={0:"Romania",5:"Roemeni\xEB",9:"Rum\xE4nien",16:"Rumania"};C.Bn4={1:"Rusija"
,3:"\u8607\u806F",4:"Rusko",0:"Russian Federation",5:"Rusland",6:"Russia",8:"La Russie"
,9:"Russland",10:"\u03A1\u03C9\u03C3\u03B9\u03BA\u03AE \u03BF\u03BC\u03BF\u03C3\u03C0\u03BF\u03BD\u03B4\u03AF\u03B1"
,13:"Russiske f\xF8derasjon",14:"Rosja",15:"\u0420\u043E\u0441\u0441\u0438\u044F"
,16:"Rusia",17:"Rusya Federasyonu",18:"\u0420\u043E\u0441\u0456\u044F"};C.Boz={0:
"Slovakia",5:"Slowakije",9:"Slowakei",16:"Eslovaquia"};C.BoA={1:"Slovenija",3:"\u65AF\u6D1B\u7DAD\u5C3C\u4E9E"
,4:"Slovinsko",0:"Slovenia",5:"Sloweni\xE9",8:"La Slov\xE9nie",9:"Slowenien",10:
"\u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1",14:"S\u0142owenia",15:"\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F"
,16:"Eslovenia",17:"Slovenya",18:"\u0421\u043B\u043E\u0432\u0435\u043D\u0456\u044F"
};C.BoB={1:"\u0160panija",3:"\u897F\u73ED\u7259",4:"\u0160pan\u011Blsko",0:"Spain"
,5:"Spanje",8:"L\u2019Espagne",9:"Spanien",10:"\u0399\u03C3\u03C0\u03B1\u03BD\u03AF\u03B1"
,13:"Spania",14:"Hiszpania",15:"\u0418\u0441\u043F\u0430\u043D\u0438\u044F",16:"Espa\xF1a"
,17:"\u0130spanya",18:"\u0406\u0441\u043F\u0430\u043D\u0456\u044F"};C.Bo8={1:"\u0160vedska"
,3:"\u745E\u5178",4:"\u0160v\xE9dsko",0:"Sweden",5:"Zweden",8:"La Su\xE8de",9:"Schweden"
,10:"\u03A3\u03BF\u03C5\u03B7\u03B4\u03AF\u03B1",13:"Sverige",14:"Szwecja",15:"\u0428\u0432\u0435\u0446\u0438\u044F"
,16:"Suecia",17:"\u0130sve\xE7",18:"\u0428\u0432\u0435\u0446\u0456\u044F"};C.Bo9={
1:"\u0160vicarska",3:"\u745E\u58EB",4:"\u0160v\xFDcarsko",0:"Switzerland",5:"Zwitserland"
,8:"La Suisse",9:"Schweiz",10:"\u0395\u03BB\u03B2\u03B5\u03C4\u03AF\u03B1",13:"Sveits"
,14:"Szwajcaria",15:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F",16:
"Suiza",17:"\u0130svi\xE7re",18:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0456\u044F"
};C.Bpg={1:"Tajvan",3:"\u53F0\u7063",4:"Tchaj-wan",0:"Taiwan",8:"Ta\xEFwan",10:"\u03A4\u03B1\u03CA\u03B2\u03AC\u03BD"
,14:"Tajwan",15:"\u0422\u0430\u0439\u0432\u0430\u043D\u044C",16:"Taiw\xE1n",17:"Tayvan"
,18:"\u0422\u0430\u0439\u0432\u0430\u043D\u044C"};C.Bpy={1:"Turska",3:"\u571F\u8033\u5176"
,4:"Turecko",0:"Turkey",5:"Turkije",8:"La Turquie",9:"T\xFCrkei",10:"\u03A4\u03BF\u03C5\u03C1\u03BA\u03AF\u03B1"
,12:"\u30C8\u30EB\u30B3",13:"Tyrkia",14:"Turcja",15:"\u0422\u0443\u0440\u0446\u0438\u044F"
,16:"Turqu\xEDa",17:"T\xFCrkiye",18:"\u0422\u0443\u0440\u0435\u0447\u0447\u0438\u043D\u0430"
};C.A$o={1:"Ujedinjeno kraljevstvo",3:"\u82F1\u570B",4:"Anglie",0:"United Kingdom"
,5:"Groot-Brittani\xE9",8:"Royaume-Uni",9:"Gro\xDFbritannien",10:"\u0395\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF \u0392\u03B1\u03C3\u03AF\u03BB\u03B5\u03B9\u03BF"
,13:"Storbritannia",14:"Wielka Brytania",15:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"
,16:"Reino Unido",17:"Birle\u015Fik Krall\u0131k",18:"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0456\u044F"
};C.BpB={1:"USA",3:"\u7F8E\u570B",4:"USA",0:"United States of America",5:"USA",6:
"USA",7:"Yhdysvallat",8:"Les \xC9tats-Unis",9:"USA",10:"\u0397\u03BD\u03C9\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C0\u03BF\u03BB\u03B9\u03C4\u03B5\u03AF\u03B5\u03C2 "+
"\u03C4\u03B7\u03C2 \u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03AE\u03C2",13:"USA",14:
"USA",15:"\u0421\u0428\u0410",16:"EE. UU.",17:"Amerika Birle\u015Fik Devletleri"
,18:"\u0421\u0428\u0410"};C.BpC={4:"Ukrajina",0:"Ukraine",5:"Oekra\xEFne",6:"Ukraina"
,7:"Ukraina",10:"\u039F\u03C5\u03BA\u03C1\u03B1\u03BD\u03AF\u03B1",13:"Ukraina",
14:"Ukraina",15:"\u0423\u043A\u0440\u0430\u0438\u043D\u0430",16:"Ucrania",17:"Ukrayna"
,18:"\u0423\u043A\u0440\u0430\u0457\u043D\u0430"};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */