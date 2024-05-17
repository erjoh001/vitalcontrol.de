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
);if(index.ack)throw new Error("The unit file 'Breeds.js' included twice!");index.
ack=(function(){var A=index;var C={};

C.AA={2:"\u0410\u0431\u0440\u0435\u0434\u0438\u043D \u0430\u043D\u0433\u044A\u0441"
,0:"Aberdeen Angus",15:"Aberd\u012Bna anguss",26:"Aberdyno Angusas",20:"\u0410\u0431\u0435\u0440\u0434\u0438\u043D-\u0430\u043D\u0433\u0443\u0441\u0441\u043A\u0430\u044F"
,24:"\u0410\u0431\u0435\u0440\u0434\u0438\u043D-\u0430\u043D\u0433\u0443\u0441"};
C.AO={1:"Tele mu\u0161ko",25:"Heckova goveda",4:"Pekeln\xFD skot",5:"Heckkv\xE6g"
,0:"Heck Cattle",6:"Heckrunderen",7:"Hecki veis",9:"B\xE9tail Aurochs",10:"Auerochse (Heckrind)"
,11:"Heck",12:"Heck-marha",13:"Bovini di Heck",15:"Hecka liellopi",26:"Hecko jautai"
,17:"Byd\u0142o Hecka",18:"Gado Heck",19:"Vit\u0103 Heck",20:"\u0422\u0443\u0440 (\u0431\u044B\u043A)"
,27:"Heckova govedo",21:"Uro (ganado de Heck)",22:"Heckkor",23:"Yaban \xD6k\xFCz\xFC"
,24:"\u0422\u0443\u0440 (\u0431\u0438\u043A)"};C.AS={2:"\u0410\u0439\u044A\u0440\u0448\u0438\u0440"
,0:"Ayrshire",15:"Eir\u0161\u012Bra",26:"Eir\u0161yras",20:"\u0410\u0439\u0440\u0448\u0438\u0440\u0441\u043A\u0430\u044F"
,24:"\u0415\u0440\u0448\u0438\u0440"};C.AT={0:"Ansbach-Triesdorfer",20:"\u0410\u043D\u0441\u0431\u0430\u0445-\u0422\u0440\u0438\u0441\u0434\u043E\u0440\u0444\u0441\u043A\u0430\u044F"
,24:"\u0410\u043D\u0441\u0431\u0430\u0445-\u0422\u0440\u0456\u0441\u0434\u043E\u0440\u0444\u0435\u0440"
};C.AU={1:"Aubrac",25:"Aubra\u010Dka goveda",4:"Aubrack\xFD skot",5:"Aubrac-kv\xE6g"
,0:"Aubrac Cattle",6:"Aubrac-runderen",7:"Aubraci t\xF5ug",9:"Aubrac",10:"Aubrac"
,11:"Aubrac",12:"Aubrac szarvasmarha",13:"Bestiame di Aubrac",15:"Aubrakas liellopi"
,26:"Aubrako galvijai",16:"Aubrac storfe",17:"Byd\u0142o Aubrac",18:"Gado Aubrac"
,19:"Vaci Aubrac",20:"\u041E\u0431\u0440\u0430\u043A",27:"Aubra\u0161ka goveda",
21:"Ganado Aubrac",22:"Aubrackor",23:"Aubrac S\u0131\u011F\u0131r\u0131",24:"\u0410\u0431\u0440\u0430\u043A\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.BA={2:"\u0411\u043B\u043E\u043D\u0434 \u0414\u2019 \u0410\u043A\u0438\u0442\u0435\u043D"
,4:"Blonde d\'Aquitaine",0:"Blonde d\u2019Aquitaine",6:"Blonde d\'Aquitaine",13:
"Blonde d\'Aquitaine",26:"Blonde d\'Aquitaine",16:"Blonde d`Aquitaine",17:"Blonde d\'Aquitaine"
,18:"Blonde d\'Aquitaine",19:"Blonde d\'Aquitaine",20:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0430\u043A\u0432\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F"
,27:"Blonde d\'Aquitaine",21:"Blonde de Aquitania",22:"Blonde d\'Aquitaine",24:"\u0411\u043B\u043E\u043D\u0434 \u0434\'\u0410\u043A\u0456\u0442\u0435\u043D"
};C.BAZ={0:"Bazadaise",20:"\u0411\u0430\u0437\u0430\u0434\u044D\u0437",23:"Bazadais S\u0131\u011F\u0131r\u0131"
,24:"\u0411\u0430\u0437\u0430\u0434\u0435\u0437"};C.BB={2:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E \u0441\u0438\u043D\u044C\u043E"
,25:"Britanski plavi",4:"Britsk\xE1 modr\xE1",5:"Britisk Bl\xE5",0:"British Blue"
,6:"Brits Blauw",12:"Brit K\xE9k",13:"Blu Britannico",15:"Britu zilais",26:"Brit\u0173 m\u0117lynasis"
,17:"Brytyjski niebieski",18:"Azul Brit\xE2nico",19:"Albastru Britanic",20:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u0443\u0431\u0430\u044F"
,27:"Britanski modri",21:"Brit\xE1nica Blue",22:"Brittisk Bl\xE5",23:"\u0130ngiliz Mavisi"
,24:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u0431\u043B\u0430\u043A\u0438\u0442\u043D\u0438\u0439"
};C.BE={2:"\u0411\u0438\u0444\u0430\u043B\u043E",25:"Govedalo",0:"Beefalo",12:"Bivalyh\xFAs"
,15:"Bifalo",26:"Bifalas",18:"B\xFAfalo-dom\xE9stico",19:"Bivol domestic",20:"\u0411\u0438\u0444\u0430\u043B\u043E"
,27:"Govedobizon",24:"\u0411\u0456\u0444\u0430\u043B\u043E"};C.BGA={2:"\u0413\u0430\u043B\u043E\u0443\u0435\u0439"
,0:"Belted Galloway",9:"Galloway ceintur\xE9e",12:"\xD6vezetes Galloway",20:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u043A\u0430\u044F"
,21:"Galloway cintado",22:"B\xE4ltad Galloway",23:"Ku\u015Fakl\u0131 Galloway S\u0131\u011F\u0131r\u0131"
,24:"\u0411\u0435\u043B\u0442\u0435\u0434 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
};C.BIS={2:"\u0411\u0438\u0437\u043E\u043D",25:"Bizon",4:"Zubr",0:"Bison",6:"Bizon"
,10:"Bison/Wisent",12:"B\xF6l\xE9ny",13:"Bisonte",15:"Bizons",26:"Bizonas",17:"\u017Bubr"
,18:"Bis\xE3o",19:"Bizon",20:"\u0411\u0438\u0437\u043E\u043D/\u0437\u0443\u0431\u0440"
,27:"Bizon",21:"Bisonte",23:"Bizon",24:"\u0411\u0456\u0437\u043E\u043D/\u0437\u0443\u0431\u0440"
};C.BLA={0:"Blaarkop",20:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F (Blaarkop)"
};C.BLH={1:"Britanski longhorn",2:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,25:"Britanski dugorogi",4:"Britsk\xFD longhorn",5:"Britisk Longhorn",0:"British Longhorn"
,6:"Britse Longhorn",7:"Briti Longhorn",11:"\u0392\u03C1\u03B5\u03C4\u03B1\u03BD\u03B9\u03BA\u03CC \u039B\u03CC\u03B3\u03C7\u03BF\u03C1\u03BD"
,12:"Brit hossz\xFAszarv\xFA",13:"Longhorn Britannico",15:"Britu Longhorns",26:"Brit\u0173 ilgaragis"
,16:"Britisk Longhorn",17:"Brytyjski Longhorn",18:"Boi Longhorn Brit\xE2nico",19:
"Corn Lung Britanic",20:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,27:"Britanski Longhorn",22:"Brittisk Longhorn",23:"\u0130ngiliz Uzun Boynuz",24:
"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
};C.BRA={0:"Brangus",15:"D\u0101rgs",20:"\u0411\u0440\u0430\u043D\u0433\u0443\u0441"
};C.BRN={0:"Brahman",15:"Brahmanis",26:"Brahmanas",20:"\u0411\u0440\u0430\u0445\u043C\u0430\u043D"
,24:"\u0411\u0440\u0430\u0445\u043C\u0430\u043D"};C.BV={0:"Braunvieh",6:"Bruinvee"
,9:"Brune des Alpes",20:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F"
,21:"Pardo Suizo",24:"\u0411\u0440\u0430\u0443\u043D\u0432\u0456\u0445"};C.BVF={
25:"Braunvieh, govedina",4:"Braunvieh, hov\u011Bz\xED maso",5:"Braunvieh, oksek\xF8d"
,0:"Braunvieh, beef",6:"Braunvieh, rundvlees",7:"Braunvieh lihaveis",9:"Brune des Alpes, engraissement"
,10:"Braunvieh, Fleischnutzung",11:"Braunvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Braunvieh, marhah\xFAs",13:"Braunvieh, manzo",15:"Braunvieh, liellopu ga\u013Ca"
,26:"Braunvieh, jautiena",16:"Braunvieh, kj\xF8tt",17:"Braunvieh, wo\u0142owina"
,18:"Braunvieh, carne bovina",19:"Braunvieh, carne de vit\u0103",20:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",27:"Braunvieh, govedina",21:"Pardo Suizo, carne"
,22:"Braunvieh, n\xF6tk\xF6tt",23:"Braunvieh, S\u0131\u011F\u0131r",24:"\u0411\u0440\u0430\u0443\u043D\u0432\u0456, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.CHA={2:"\u0428\u0430\u0440\u043E\u043B\u0435",0:"Charolais",15:"\u0160arol\u0113"
,18:"Charol\xEAs",20:"\u0428\u0430\u0440\u043E\u043B\u0435\u0437\u0441\u043A\u0430\u044F"
,23:"\u015Earole",24:"\u0428\u0430\u0440\u043E\u043B\u0435"};C.CHI={2:"\u041A\u0438\u0430\u043D\u0438\u043D\u0430"
,0:"Chianina",15:"\u010Cian\u012Bna",20:"\u041A\u044C\u044F\u043D\u0438\u043D\u0430"
,24:"\u0427\u0456\u0430\u043D\u0456\u043D\u0430"};C.DA={1:"Njema\u010Dki angus",
25:"Njema\u010Dki Angus",4:"n\u011Bmeck\xFD angus",5:"Tysk Angus",0:"German Angus"
,6:"Duitse Angus",9:"Angus Allemand",10:"Deutsch Angus",12:"N\xE9met Angus",13:"Angus tedesco"
,15:"V\u0101cu Angus",26:"Vokie\u010Di\u0173 Angusas",17:"Niemiecki Angus",18:"Angus Alem\xE3o"
,19:"Angus german",20:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0430\u043D\u0433\u0443\u0441"
,27:"Nem\u0161ki Angus",21:"Angus alem\xE1n",22:"Tysk Angus",23:"Alman Angus",24:
"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0438\u0439 \u0430\u043D\u0433\u0443\u0441"
};C.DBV={1:"DBV",25:"Braunvieh (stara pasmina)",4:"Braunvieh (star\xE9 plemeno)"
,5:"Braunvieh (gammel race)",0:"Braunvieh (old breed)",6:"Braunvieh (oud ras)",7:
"Braunvieh",9:"Brune des Alpes (ancienne race)",10:"Braunvieh alter Zuchtrichtung"
,11:"Braunvieh (\u03C0\u03B1\u03BB\u03B9\u03AC \u03C1\u03AC\u03C4\u03C3\u03B1)",
12:"Braunvieh (r\xE9gi fajta)",13:"Braunvieh (razza antica)",15:"Braunvieh (sen\u0101 \u0161\u0137irne)"
,26:"Braunvieh (senov\u0117s veisl\u0117)",16:"Braunvieh (gammel rase)",17:"Braunvieh (stara rasa)"
,18:"Braunvieh (ra\xE7a antiga)",19:"Braunvieh (ras\u0103 veche)",20:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F, "+
"\u0441\u0442\u0430\u0440\u043E\u0439 \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438"
,27:"Braunvieh (stara pasma)",21:"Braunvieh (raza vieja)",22:"Braunvieh (gammal ras)"
,23:"Braunvieh (eski \u0131rk)",24:"\u0431\u0440\u0430\u0443\u043D\u0448\u0432\u0435\u0439\u0433 (\u0441\u0442\u0430\u0440\u0430 "+
"\u043F\u043E\u0440\u043E\u0434\u0430)"};C.DEX={2:"\u0414\u0435\u043A\u0441\u0442\u044A\u0440"
,0:"Dexter",15:"Deksters",26:"Deksteris",20:"\u0414\u0435\u043A\u0441\u0442\u0435\u0440"
,24:"\u0414\u0435\u043A\u0441\u0442\u0435\u0440"};C.DSN={1:"Njema\u010Dka crna krava"
,25:"Njema\u010Dki crno-\u0161areni",4:"N\u011Bmeck\xFD \u010Dernob\xEDl\xFD skot"
,5:"Tysk sortbroget",0:"German Black Pied",6:"Duits Zwartbont",9:"Pied noir allemand"
,10:"Schwarzbuntes Niederungsrind",12:"N\xE9met fekete tarka",13:"Pezzata Nera Tedesca"
,15:"V\u0101cu melnbaltais pied",26:"Vokie\u010Di\u0173 juodmargis",17:"Niemiecka Czarno-Bia\u0142a"
,18:"Preta Malhada Alem\xE3",19:"Piedmontez negru german",20:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u0447\u0451\u0440\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F"
,27:"Nem\u0161ka \u010Drno-bela govedo",21:"Pardo Suizo Alem\xE1n",22:"Tysk svartbrokad"
,23:"Alman Siyah Alaca",24:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u0447\u043E\u0440\u043D\u043E-\u043F\u043B\u044F\u043C\u0438\u0441\u0442\u0430"
};C.EBS={0:"Ennstaler Bergscheck",8:"Ennstaler Bergschecken",9:"Ch\xE8vre de montagne Ennstal"
,10:"Ennstaler Bergschecken",20:"\u042D\u043D\u043D\u0441\u0442\u0430\u043B\u0435\u0440 \u0411\u0435\u0440\u0433\u0448\u0435\u043A"
,24:"\u0415\u043D\u043D\u0441\u0442\u0430\u043B\u0435\u0440 \u0411\u0435\u0440\u0433\u0448\u0435\u043A"
};C.ERI={2:"\u0425\u0435\u0440\u0435\u043D\u0441",0:"Herens",9:"Vache d\'H\xE9rens"
,10:"Eringer",20:"\u0425\u0435\u0440\u0435\u043D\u0441",24:"\u0425\u0435\u0440\u0435\u043D\u0441"
};C.EVO={2:"\u0415\u0432\u043E\u043B\u0435\u043D",0:"\xC9vol\xE8ne",10:"Evol\xE8ner"
,20:"\u042D\u0432\u043E\u043B\u0435\u043D",24:"\u0415\u0432\u043E\u043B\u0435\u043D"
};C.FL={1:"simental",0:"Fleckvieh",7:"Fleckiev",20:"\u0424\u043B\u0435\u043A\u0444\u0438"
,23:"Simental",24:"\u0424\u043B\u0435\u043A\u0432\u0456\u0445"};C.FLF={1:"simentalsko govedo"
,25:"Fleckvieh, govedina",4:"Fleckvieh, hov\u011Bz\xED maso",5:"Fleckvieh, oksek\xF8d"
,0:"Fleckvieh, beef",6:"Fleckvieh, rundvlees",7:"Fleckvieh, lihaveis",9:"Fleckvieh-\nSimmental"
,10:"Fleckvieh-\nSimmental",11:"Fleckvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Fleckvieh, marhah\xFAs",13:"Fleckvieh, carne bovina",15:"Fleckvieh, liellopu ga\u013Ca"
,26:"Fleckvieh, m\u0117sos veisl\u0117",16:"Fleckvieh, kj\xF8tt",17:"Fleckvieh, wo\u0142owina"
,18:"Fleckvieh, carne de boi",19:"Fleckvieh, carne de vit\u0103",20:"\u0424\u043B\u0435\u043A\u0444\u0438-\n\u0421\u0438\u043C\u043C\u0435\u043D\u0442\u0430\u043B\u044C"
,27:"Fleckvieh, govedina",21:"Fleckvieh, carne",22:"Fleckvieh, n\xF6tk\xF6tt",23:
"Et\xE7i Simental",24:"Fleckvieh, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.FR={5:"Fjeldkv\xE6g",0:"Fj\xE4ll",9:"Fjall",10:"Fj\xE4ll-Rind",16:"Svensk fjellku"
,20:"Fj\xE4ll - \u0448\u0432\u0435\u0434\u0441\u043A\u0430\u044F \u043F\u043E\u0440\u043E\u0434\u0430"
,21:"Raza Fj\xE4ll",22:"Fj\xE4llko"};C.GAL={1:"Galloway govedo",2:"\u0413\u0430\u043B\u043E\u0443\u0435\u0439"
,25:"Galloway goveda",4:"Gallowaysk\xFD skot",5:"Galloway-kv\xE6g",0:"Galloway Cattle"
,6:"Galloway-runderen",7:"Galloway veis",9:"Galloway",10:"Galloway",12:"Galloway szarvasmarha"
,13:"Bestiame di Galloway",15:"Galloway liellopi",26:"Galloway galvijai",16:"Galloway Storfe"
,17:"Byd\u0142o Galloway",18:"Gado Galloway",19:"Vit\u0103 de Galloway",20:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u043A\u0430\u044F"
,27:"Galloway govedo",21:"Galloway",22:"Gallowayboskap",23:"Galloway S\u0131\u011F\u0131r\u0131"
,24:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.GR={1:"Glan govedo",25:"Glan goveda",4:
"Plemeno skotu Glan",5:"Glan kv\xE6g",0:"Glan Cattle",6:"Glanvee",7:"Glan veis",
9:"Bovins Glan",10:"Glanrind",12:"Glan szarvasmarha",13:"Bovini Glan",15:"Glanu liellopi"
,26:"Glan\u0173 galvijai",16:"Glan Storfe",17:"Byd\u0142o z Glan",18:"Gado Glan"
,19:"Vit\u0103 Glan",20:"\u0413\u043B\u0430\u043D \u041A\u0420\u0421",27:"Glan govedo"
,21:"Ganado Glan",22:"Glan-n\xF6tkreatur",23:"Glan S\u0131\u011F\u0131r\u0131",24:
"\u0413\u043B\u0430\u043D\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.GRV={1:"Tirolsko govedo",25:"Tirolsko sivo",4:"Tyrolsk\xE1 \u0161ed\xE1",5:"Tyrolergr\xE5"
,0:"Tyrolean Grey",6:"Tiroler Grijs",9:"Grauvieh / Race Grise",10:"Grauvieh",12:
"Tirolsz\xFCrke",13:"Grigio tirolese",15:"Tiroles pel\u0113ks",26:"Tirolinis pilkas"
,16:"Tyroler Gr\xE5",17:"Szary tyrolski",18:"Cinzento Tirol\xEAs",19:"Gri Tirolez"
,20:"\u0422\u0438\u0440\u043E\u043B\u044C\u0441\u043A\u0430\u044F \u0441\u0435\u0440\u0430\u044F"
,27:"Tirolsko sivo",21:"Ganado Glan",22:"Tyrolergr\xE5",23:"Tyrolean Grisi",24:"\u0422\u0438\u0440\u043E\u043B\u044C\u0441\u044C\u043A\u0438\u0439 \u0441\u0456\u0440\u0438\u0439"
};C.GV={1:"\u017Euto govedo",0:"Gelbvieh",7:"Gelvbieh",20:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0413\u0435\u043B\u0431\u0444\u0438"
,24:"\u0413\u0435\u043B\u044C\u0431\u0432\u0456\u0445"};C.GVF={1:"\u017Euto june"
,25:"Gelbvieh, govedina",4:"Gelbvieh, hov\u011Bz\xED maso",5:"Gelbvieh, oksek\xF8d"
,0:"Gelbvieh, beef",6:"Gelbvieh, rundvlees",7:"Gelbvieh, lihaveis",9:"Gelbvieh / engraissement"
,10:"Gelbvieh, Fleischnutzung",11:"Gelbvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Gelbvieh, marhah\xFAs",13:"Gelbvieh, carne bovina",15:"Gelbvieh, liellopu ga\u013Ca"
,26:"Gelbvieh, m\u0117sos veisl\u0117",16:"Gelbvieh, kj\xF8tt",17:"Gelbvieh, wo\u0142owina"
,18:"Gelbvieh, carne bovina",19:"Gelbvieh, carne de vit\u0103",20:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0413\u0435\u043B\u0431\u0444\u0438, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",27:"Gelbvieh, govedina",21:"Gelbvieh",22:
"Gelbvieh, n\xF6tk\xF6tt",23:"Gelbvieh, et\xE7i",24:"\u0413\u0435\u043B\u044C\u0431\u0432\u0456, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.HE={2:"\u0425\u0435\u0440\u0435\u0444\u043E\u0440\u0434",0:"Hereford",26:"Herefordas"
,20:"\u0413\u0435\u0440\u0435\u0444\u043E\u0440\u0434\u0441\u043A\u0430\u044F",24:
"\u0413\u0435\u0440\u0435\u0444\u043E\u0440\u0434"};C.HIN={1:"Hinterwald govedo"
,25:"Hinterwaldska goveda",4:"Hinterwaldsk\xFD skot",5:"Hinterwaldkv\xE6g",0:"Hinterwald Cattle"
,6:"Hinterwald-runderen",7:"Hinterwald veis",9:"Bovins de l\u2019Hinterwald",10:
"Hinterw\xE4lder",12:"Hinterwaldi szarvasmarha",13:"Bovini di Hinterwald",15:"Hinterwaldas liellopi"
,26:"Hinterwaldo karv\u0117s",16:"Hinterwald Storfe",17:"Byd\u0142o Hinterwald",
18:"Gado Hinterwald",19:"Vaci Hinterwald",20:"\u0425\u0438\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440"
,27:"Hinterwaldsko govedo",21:"Ganado Hinterwald",22:"Hinterwald-n\xF6t ",23:"Hinterwald S\u0131\u011F\u0131r\u0131"
,24:"\u0413\u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u0434\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.HLD={1:"Highland govedo",25:"Visokogorje govedo"
,4:"Skotsk\xFD n\xE1horn\xED skot",5:"H\xF8jlandskv\xE6g",0:"Highland Cattle",6:
"Schotse Hooglander",7:"Highland veis",9:"Highland",10:"Highland",12:"Sk\xF3t szarvasmarha"
,13:"Bestiame delle Highlands",15:"Augstienes liellopi",26:"Auk\u0161tum\u0173 galvijai"
,16:"H\xF8ylandsfe",17:"Byd\u0142o g\xF3rskie",18:"Gado das Terras Altas",19:"Vit\u0103 sco\u021Bian\u0103 de munte"
,20:"\u0425\u0430\u0439\u043B\u0435\u043D\u0434",27:"Visokogorska goveda",21:"Ganado Hinterwald"
,22:"H\xF6glandsboskap",23:"Highland S\u0131\u011F\u0131r\u0131",24:"\u0412\u0438\u0441\u043E\u043A\u043E\u0433\u0456\u0440\u043D\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.HWF={1:"Hintervald june",25:"Hinterwaldska goveda, govedina",4:"Hinterwaldsk\xFD skot, hov\u011Bz\xED maso"
,5:"Hinterwaldkv\xE6g, oksek\xF8d",0:"Hinterwald Cattle, beef",6:"Hinterwald runderen, rundvlees"
,7:"Hinterwald lihaveis",9:"Vache d\u2019Hinterwald, engraissement",10:"Hinterw\xE4lder, Fleischnutzung"
,11:"Hinterwald Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Hinterwald marha, marhah\xFAs",13:"Bestiame di Hinterwald, carne bovina",15:
"Hinterwalda liellopi, liellopu ga\u013Ca",26:"Hinterwaldo galvijai, jautiena",16:
"Hinterwald Cattle, kj\xF8tt",17:"Byd\u0142o z Hinterwaldu, wo\u0142owina",18:"Gado Hinterwald, carne bovina"
,19:"Vite Hinterwald, carne de vit\u0103",20:"\u0425\u0438\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",27:"Hinterwaldsko govedo, govedina",21:"Ganado Hinterwald, carne"
,22:"Hinterwald-n\xF6tkreatur, n\xF6tk\xF6tt",23:"Hinterwald S\u0131\u011F\u0131r\u0131, Et\xE7i"
,24:"\u0425\u0456\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440, "+
"\u043C\'\u044F\u0441\u043D\u0430"};C.IND={1:"ostala goveda",2:"\u0417\u0435\u0431\u0443"
,25:"Ostale zebove goveda",4:"Dal\u0161\xED skot zebu",5:"Andre Zebu-kv\xE6g",0:
"Other Zebu cattle",6:"Andere Zebu-runderen",7:"Muud Zebu veised",9:"Autres bovins z\xE9bus"
,10:"Sonstige Zebu-\nRinder (Bos indicus)",11:"Zebu cattle",12:"M\xE1s zebugulya"
,13:"Altri bovini Zebu",15:"Citi zebu liellopi",26:"Kiti zebu galvijai",16:"Andre Zebu storfe"
,17:"Inne byd\u0142o zebu",18:"Outros gados Zebu",19:"Alte bovine Zebu",20:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421"
,27:"Druge zebu govedo",21:"Otras razas de ganado ceb\xFA (Bos indicus)",22:"Andra zebun\xF6ttdjur"
,23:"Di\u011Fer Zebu S\u0131\u011F\u0131r\u0131",24:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421"
};C.JER={1:"D\u017Eersej",2:"\u0414\u0436\u0435\u0440\u0441\u0435\u0439",25:"Dres"
,4:"Dres",0:"Jersey",9:"Jersiaise",12:"Dzserzi",13:"Maglia",15:"D\u017Eersija",26:
"D\u017Eersis",17:"D\u017Cersej",20:"\u0414\u0436\u0435\u0440\u0441\u0435\u0439\u0441\u043A\u0430\u044F"
,27:"Dres",24:"\u0414\u0436\u0435\u0440\u0441\u0456"};C.LAK={25:"Nizozemski pojasasti"
,4:"nizozemsk\xFD p\xE1skovan\xFD",5:"Hollandsk B\xE6ltet",0:"Dutch Belted",6:"Hollands bont"
,9:"Lakenvelder",10:"Lakenvelder",12:"holland \xF6ves",13:"Olandese Cinturato",15:
"N\u012Bderlandes jostveid\u012Bgais",26:"olandinis dir\u017Einis",16:"Nederlandsk Beltet"
,17:"Holenderski pasiasty",18:"Cintado Holand\xEAs",19:"Olandez\u0103 \xEEncins\u0103"
,20:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F \u043E\u043F\u043E\u044F\u0441\u0430\u043D\u043D\u0430\u044F"
,27:"nizozemski pasavec",21:"Lakenvelder",22:"Holl\xE4ndskt bandad",23:"Hollanda Kemerli Irk"
,24:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u044C\u043A\u0430 \u043F\u043E\u044F\u0441\u043D\u0430"
};C.LG={0:"Luing",20:"\u041B\u0443\u0438\u043D\u0433\u0441\u043A\u0438\u0439 \u041A\u0420\u0421"
,24:"\u041B\u0443\u0457\u043D\u0433\u0441\u044C\u043A\u0438\u0439 \u0412\u0420\u0425"
};C.LH={2:"\u041B\u043E\u043D\u0433 \u0425\u043E\u0440\u043D",25:"Dugorog",0:"Longhorn"
,12:"Hossz\xFAszarv\xFA",15:"Longhorna",16:"Langhorn",18:"Chifrudo",19:"Corn lung"
,20:"\u0422\u0435\u0445\u0430\u0441\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,27:"Dolgorepec",22:"L\xE5nghorn",23:"UzunBoynuz",24:"\u0414\u043E\u0432\u0433\u043E\u0440\u0456\u0433"
};C.LIM={2:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D",25:"Limuzina",0:"Limousin"
,15:"Limuz\u012Bns",26:"Limuzinas",20:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D\u0441\u043A\u0430\u044F"
,27:"Limuzina",23:"Limuzin",24:"\u041B\u0456\u043C\u0443\u0437\u0435\u043D"};C.LMP={
0:"Limpurger",6:"Limburger",15:"Limpurgeris",26:"Limpurgeris",20:"\u041B\u0438\u043C\u043F\u0443\u0440\u0433\u0435\u0440"
,24:"\u041B\u0456\u043C\u043F\u0443\u0440\u0433\u0435\u0440"};C.LPF={1:"limpurger june"
,25:"Limpurger, govedina",4:"Limpurger, hov\u011Bz\xED",5:"Limpurger, oksek\xF8d"
,0:"Limpurger, beef",6:"Limburger, rundvlees",7:"Limpurger, lihaveis",9:"Limpurger, pour l\u2019engraissement"
,10:"Limpurger, Fleischnutzung",11:"Limpurger, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Limpurger marhah\xFAs",13:"Limpurger, manzo",15:"Limpurgera liellopu ga\u013Ca"
,26:"Limpurgeris, jautiena",16:"Limpurger, kj\xF8tt",17:"Limpurger, wo\u0142owina"
,18:"Limpurger, carne bovina",19:"Limburger, carne de vit\u0103",20:"\u041B\u0438\u043C\u043F\u0443\u0440\u0433\u0435\u0440, \u043C\u044F\u0441\u043D\u0430\u044F"
,27:"Limpurger, govedina",21:"Limpurger, carne",22:"Limpurger, n\xF6tk\xF6tt",23:
"Limpurger, et\xE7i",24:"\u041B\u0456\u043C\u043F\u0443\u0440\u0433\u0435\u0440, \u043C\'\u044F\u0441\u043D\u0430"
};C.LR={1:"lincoln red",0:"Lincoln Red",12:"Lincoln V\xF6r\xF6s",15:"Linkolna sarkanais"
,19:"Lincoln Ro\u0219u",20:"\u041B\u0438\u043D\u043A\u043E\u043B\u044C\u043D\u0441\u043A\u0430\u044F "+
"\u043A\u0440\u0430\u0441\u043D\u0430\u044F",21:"Lincoln Rojo",23:"Lincoln K\u0131rm\u0131z\u0131"
,24:"\u041B\u0456\u043D\u043A\u043E\u043B\u044C\u043D \u0420\u0435\u0434"};C.MA={
0:"Maine-Anjou",9:"Rouge des pr\xE9s",20:"\u041C\u0435\u043D-\u0430\u043D\u0436\u0443"
,24:"\u041C\u0435\u043D-\u0410\u043D\u0436\u0443"};C.MAR={0:"Marchigiana",20:"\u041C\u0430\u0440\u043A\u0438\u0434\u0436\u0430\u043D\u0441\u043A\u0430\u044F"
,24:"\u041C\u0430\u0440\u043A\u0456\u0434\u0436\u0430\u043D\u0430"};C.MGR={2:"\u041C\u044E\u0440\u0435\u0439 \u0413\u0440\u0435\u0439"
,0:"Murray Grey",11:"\u039C\u03AC\u03C1\u03B5\u03CA \u0393\u03BA\u03C1\u03AD\u03B9"
,20:"\u041C\u0443\u0440\u0440\u0435\u0439 \u0413\u0440\u0435\u0439",23:"Murray Grisi"
,24:"\u041C\u0443\u0440\u0440\u0435\u0439 \u0413\u0440\u0435\u0439"};C.MON={2:"\u041C\u043E\u043D\u0442\u0431\u0435\u043B\u0438\u0430\u0440\u0434"
,0:"Montb\xE9liarde",7:"Montbeliard",10:"Montb\xE9liard",20:"\u041C\u043E\u043D\u0431\u0435\u043B\u044C\u044F\u0440"
,24:"\u041C\u043E\u043D\u0431\u0435\u043B\u044C\u044F\u0440\u0434"};C.MUR={2:"\u041C\u044A\u0440\u0431\u043E\u0434\u043D\u0435\u0440"
,0:"Murbodner",20:"\u041C\u044A\u0440\u0431\u043E\u0434\u043D\u0435\u0440",24:"\u041C\u0443\u0440\u0431\u043E\u0434\u043D\u0435\u0440"
};C.MW={25:"Murnau-Werdenfelska goveda",4:"Murnau-Werdenfelsk\xFD skot",5:"Murnau-Werdenfels Kv\xE6g"
,0:"Murnau-Werdenfels Cattle",6:"Murnau-Werdenfels Rund",7:"MW",9:"Murnau-Werdenfels"
,10:"Murnau-\nWerdenfelser",12:"Murnau-Werdenfels-i szarvasmarha",13:"Bestiame di Murnau-Werdenfels"
,15:"Murnau-Werdenfels govji",26:"Murnau-Werdenfelso karv\u0117s",16:"Murnau-Werdenfels Storfe"
,17:"Byd\u0142o Murnau-Werdenfels",18:"Gado Murnau-Werdenfels",19:"Vaci Murnau-Werdenfels"
,20:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441"
,27:"Murnau-Werdenfelska govedo",21:"Ganado Murnau-Werdenfels",22:"Murnau-Werdenfels kreatur"
,23:"Murnau-Werdenfels S\u0131\u011F\u0131r\u0131",24:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.MWF={1:"Murnau-Werdenfels Cattle, govedo"
,25:"Murnau-Werdenfels govedo, govedina",4:"Murnau-Werdenfelsk\xFD skot, hov\u011Bz\xED maso"
,5:"Murnau-Werdenfels kv\xE6g, oksek\xF8d",0:"Murnau-Werdenfels Cattle, beef",6:
"Murnau-Werdenfels-runderen, rundvlees",7:"MWF lihaveis",9:"Murnau-Werdenfels pour l\u2019engraissement"
,10:"Murnau-Werdenfel~ser, Fleischnutzung",11:"Murnau-Werdenfels Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Murnau-Werdenfels szarvasmarha, marhah\xFAs",13:"Murnau-Werdenfels, manzo",
15:"Murnau-Werdenfels liellopi, liellopu ga\u013Ca",26:"Murnau-Werdenfelso veisl\u0117s galvijai, jautiena"
,16:"Murnau-Werdenfels Storfe, kj\xF8tt",17:"Byd\u0142o Murnau-Werdenfels, wo\u0142owina"
,18:"Gado Murnau-Werdenfels, carne bovina",19:"Murnau-Werdenfels, carne de vit\u0103"
,20:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",27:"Murnau-Werdenfels govedo, goveje meso"
,21:"Ganado Murnau-Werdenfels, carne",22:"Murnau-Werdenfels n\xF6tkreatur, n\xF6tk\xF6tt"
,23:"Murnau-Werdenfels S\u0131\u011F\u0131r\u0131, et\xE7i",24:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441, "+
"\u043C\'\u044F\u0441\u043D\u0430"};C.NOR={25:"Normandijska goveda",4:"Normandsk\xFD skot"
,5:"Normande-kv\xE6g",0:"Normande Cattle",6:"Normandische runderen",7:"Normande veis"
,9:"Normande",10:"Normanne",12:"Normandiai szarvasmarha",13:"Bestiame Normanno",
15:"Normandijas liellopi",26:"Normandijos karv\u0117s",16:"Normande storfe",17:"Byd\u0142o normandzkie"
,18:"Gado Normando",19:"Vit\u0103 Normand\u0103",20:"\u041D\u043E\u0440\u043C\u0430\u043D\u0434\u0441\u043A\u0430\u044F"
,27:"Normandijska govedina",21:"Ganado Normando",22:"Normandisk boskap",23:"Normande S\u0131\u011F\u0131r\u0131"
,24:"\u041D\u043E\u0440\u043C\u0430\u043D\u0434\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.PAR={2:"\u041F\u0430\u0440\u0442\u0435\u043D\u0435\u0437",0:"Parthenaise",8:
"Havainto",20:"\u041F\u0430\u0440\u0442\u0435\u043D\u0435\u0437",24:"\u041F\u0430\u0440\u0442\u0435\u043D\u0435\u0437"
};C.PIE={25:"Pijemontski",4:"piemon\u0165an\u0161tina",5:"Piemontesisk",0:"Piedmontese"
,6:"Piemontees",7:"PIE",9:"Pi\xE9montais",10:"Piemonteser",12:"piemonti",13:"Piemontese"
,15:"Pjemontie\u0161u",26:"Pjemontie\u010Di\u0173",17:"piemoncki",18:"Piemont\xEAs"
,19:"Piemontez",20:"\u041F\u044C\u0435\u043C\u043E\u043D\u0442\u0441\u043A\u0430\u044F"
,27:"Piemon\u0161\u010Dina",22:"Piemontesiska",24:"\u043F\'\u0454\u043C\u043E\u043D\u0442\u0441\u044C\u043A\u0438\u0439"
};C.PIF={1:"Pinzgauer, govedo",25:"Pinzgauer, govedina",4:"Pinzgauer, hov\u011Bz\xED"
,5:"Pinzgauer, oksek\xF8d",0:"Pinzgauer, beef",6:"Pinzgauer, rundvlees",7:"PIF lihaveis"
,9:"Pinzgauer,\nrace \xE0 viande",10:"Pinzgauer, Fleischnutzung",11:"Pinzgauer, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Pinzgauer, marhah\xFAs",13:"Pinzgauer, manzo",15:"Pinzgauer, liellopu ga\u013Ca"
,26:"Pinzgauer, jautiena",16:"Pinzgauer, kj\xF8tt",17:"Pinzgauer, wo\u0142owina"
,18:"Pinzgauer, carne de boi",19:"Pinzgauer, carne de vit\u0103",20:"\u041F\u0438\u043D\u0446\u0433\u0430\u0443, \u043C\u044F\u0441\u043D\u0430\u044F"
,27:"Pinzgauer, govedina",21:"Pinzgauer, carne",22:"Pinzgauer, n\xF6tk\xF6tt",23:
"Pinzgauer, et\xE7i",24:"\u041F\u0456\u043D\u0446\u0433\u0430\u0443\u0435\u0440, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.PIN={0:"Pinzgauer",7:"PIN",20:"\u041F\u0438\u043D\u0446\u0433\u0430\u0443",24:
"\u041F\u0456\u043D\u0446\u0433\u0430\u0443\u0435\u0440"};C.PS={1:"Pustertal Pied govedo"
,25:"Pustertalska goveda s bijelim nogama",4:"Pustertalsk\xE9 skvrnit\xE9 skot",
5:"Pustertal Broget Kv\xE6g",0:"Pustertal Pied Cattle",6:"Pustertaler Schecken Rund"
,7:"PS",8:"Pustertal -karja",9:"Pustertaler",10:"Pustertaler",12:"Pustertali tarka szarvasmarha"
,13:"Bestiame Piede del Pustertal",15:"Pustert\u0101les zemsk\u0101bata liellopi"
,26:"Pustertalio kuilys karv\u0117s",16:"Pustertal Pied Storfe",17:"Byd\u0142o Pustertalskie"
,18:"Gado Pustertal Pied",19:"Vaca pestri\u021B\u0103 din Pustertal",20:"\u041F\u0443\u0441\u0442\u0435\u0440\u0442\u0430\u043B\u0435\u0440"
,27:"Pustertalska nizkonoga govedo",21:"Ganado Pustertal Pied",22:"Pustertaler",
23:"Pustertal Alaca S\u0131\u011F\u0131r",24:"\u041F\u0443\u0441\u0442\u0435\u0440\u0442\u0430\u043B\u044C\u0441\u044C\u043A\u0430 "+
"\u043F\'\u0454\u0434\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.RBF={1:"njema\u010Dko crveno govedo",25:"Njema\u010Dko crveno \u0161areno govedo, govedina"
,4:"n\u011Bmeck\xE9 \u010Derven\xE9 skvrnit\xE9, hov\u011Bz\xED",5:"Tysk R\xF8d Plettet, oksek\xF8d"
,0:"German Red Pied, beef",6:"Duits Roodbont, rundvlees",7:"German Red Pied, lihaveis"
,9:"Rotbunt / Pie rouge",10:"Rotbunt, Fleischnutzung",11:"German Red Pied, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"n\xE9met v\xF6r\xF6s tarka, marhah\xFAs",13:"Pezzata Rossa Tedesca, manzo",
15:"V\u0101cu sarkans str\u012Bpainais, liellopa ga\u013Ca",26:"Vokie\u010Di\u0173 raudonoji \u0161erno, m\u0117sa"
,16:"German Red Pied, kj\xF8tt",17:"Niemiecka Czerwona Pstra, wo\u0142owina",18:
"Pardo Alem\xE3o Vermelho, carne",19:"German Red Pied, carne de vit\u0103",20:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",27:"Nem\u0161ko rde\u010De pegasto govedo, govedina"
,21:"Pardo Alem\xE1n Rojo, carne",22:"Tysk R\xF6d Brokad, n\xF6tk\xF6tt",23:"Alman K\u0131rm\u0131z\u0131 Pied, et\xE7i"
,24:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u0447\u0435\u0440\u0432\u043E\u043D\u0430 "+
"\u043F\u043B\u044F\u043C\u0438\u0441\u0442\u0430, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.RBT={1:"crveni Hol\u0161tajn",2:"\u0420\u0435\u0434 \u0445\u043E\u043B\u0449\u0430\u0439\u043D"
,25:"Crveni Holstein",4:"\u010Cerven\xFD Hol\u0161t\xFDn",5:"R\xF8d Holstein",0:
"Red Holstein",6:"Roodbont Holstein",9:"Pie rouge",10:"Holstein-Rotbunt",12:"V\xF6r\xF6s Holstein"
,13:"Holstein rossa",15:"Sarkangais hol\u0161teinietis",26:"Raudonasis Hol\u0161teinas"
,16:"R\xF8d Holstein",17:"Czerwona Holstein",18:"Holstein Vermelho",19:"Holstein ro\u0219u"
,20:"\u0413\u043E\u043B\u0448\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F"
,27:"rde\u010Di hol\u0161tajn",21:"Holstein Rojo",22:"R\xF6d Holstein",23:"K\u0131rm\u0131z\u0131 Holstein"
,24:"\u0427\u0435\u0440\u0432\u043E\u043D\u0430 \u0413\u043E\u043B\u044C\u0448\u0442\u0438\u043D\u0441\u044C\u043A\u0430 "+
"\u043F\u043E\u0440\u043E\u0434\u0430"};C.RDN={1:"Crveno njema\u010Dko govedo",25:
"Njema\u010Dko crveno \u0161areno govedo",4:"N\u011Bmeck\xFD \u010Derven\xFD strak\xE1\u010D"
,5:"Tysk R\xF8dbroget",0:"German Red Pied",6:"Duits roodbont",9:"Pie rouge\xA0/\nrace viande/lait"
,10:"Rotbunt, Doppelnutzung",12:"N\xE9met v\xF6r\xF6s tarka",13:"Pezzata Rossa Tedesca"
,15:"V\u0101cu sarkangalv\u0101 \u0161\u0137irne",26:"Vokie\u010Di\u0173 raudonpiedis"
,17:"Czerwona Niemiecka Byd\u0142o",18:"Pardo Alem\xE3o Vermelho",19:"Piept\u0103nat Ro\u0219u German"
,20:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F, "+
"\u0434\u0432\u043E\u0439\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
,27:"nem\u0161ko rde\u010De pegasto",21:"Pardo Alem\xE1n Rojo",22:"Tysk r\xF6dfl\xE4ckig"
,23:"Alman K\u0131rm\u0131z\u0131 Pied",24:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u0447\u0435\u0440\u0432\u043E\u043D\u0430 "+
"\u043F\u043B\u044F\u043C\u0438\u0441\u0442\u0430"};C.RHV={1:"Crveno govedo",25:
"\"Crvena planinska stoka\"",4:"\u010Cerven\xFD horsk\xFD skot",5:"R\xF8de H\xF8jlandskv\xE6g"
,0:"Rotes H\xF6henvieh",6:"Rood Bergvee",7:"RHV",9:"Vogelsberger",26:"Raudonieji kaln\u0173 galvijai"
,18:"Gado de Altitude Vermelho",20:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0433\u043E\u0440\u043D\u0430\u044F"
,27:"Rde\u010Da gorska govedo",22:"R\xF6d h\xF6gv\xE4xt boskap",24:"\u0427\u0435\u0440\u0432\u043E\u043D\u0430 \u0433\u0456\u0440\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.ROM={1:"Romagnola govedo",25:"Romagnola goveda"
,4:"Romagnolsk\xFD skot",5:"Romagnola-kv\xE6g",0:"Romagnola Cattle",6:"Romagnola-runderen"
,7:"ROM",9:"Romagnola",10:"Romagnola",12:"Romagnola szarvasmarha",13:"Bestiame Romagnolo"
,15:"Romagnolas liellopi",26:"Romagnolos galvijai",17:"Byd\u0142o rasy Romagnola"
,18:"Gado Romagnola",19:"Vit\u0103 Romagnola",20:"\u0420\u043E\u043C\u0430\u043D\u044C\u043E\u043B\u0430"
,27:"Romagnolska goveda",21:"Ganado Romagnola",22:"Romagnola-n\xF6tkreatur",23:"Romagnola S\u0131\u011F\u0131r\u0131"
,24:"\u0420\u043E\u043C\u0430\u043D\u044C\u0439\u043E\u043B\u0430 (\u0441\u043A\u043E\u0442\u0438\u043D\u0430)"
};C.RV={1:"Angler govedo",25:"Angeln govedo (stara pasmina)",4:"Angeln\u0161t\xED skot"
,5:"Angler kv\xE6g",0:"Angeln cattle\n(old breed)",6:"Angelnvee",7:"Angeln veis"
,9:"Rouge de la Baltic/\nAngler",10:"Rotvieh, Alter Angler",11:"Angeln cattle\n(\u03C0\u03B1\u03BB\u03B9\u03AC \u03C1\u03AC\u03C4\u03C3\u03B1)"
,12:"Angeln-marha (r\xE9gi fajta)",13:"Bovini di razza Angeln",15:"Angelnas \u0161\u0137irnes liellopi"
,26:"Angeln\u0173 veisl\u0117s galvijai",16:"Angeln storfe\n(gammel rase)",17:"Byd\u0142o angeln (stara rasa)"
,18:"Gado Angeln (ra\xE7a antiga)",19:"Vite Angeln (ras\u0103 veche)",20:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u043A\u0430\u044F, \u0441\u0442\u0430\u0440\u043E\u0439 "+
"\u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438",27:"Angle\u0161ko govedo",21:
"Ganado Angeln (raza antigua)",22:"Angelnboskapen (gammal ras)",23:"Angeln s\u0131\u011F\u0131r\u0131\n(eski \u0131rk)"
,24:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.RVA={1:"Angler stoka",25:"Angeln goveda",4:"Angelnsk\xFD skot",5:"Angeln-kv\xE6g"
,0:"Angeln cattle",6:"Angelnvee",7:"Angeln veis",9:"Angler",10:"Angler",12:"Angol szarvasmarha"
,13:"Bestiame da allevamento",15:"Angelnas liellopi",26:"Angeln\u0173 veisl\u0117s galvijai"
,16:"Angeln storfe",17:"Byd\u0142o angeln",18:"Gado Angeln",19:"Vite Angeln",20:
"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u043A\u0430\u044F",27:"Angeln govedo"
,21:"Ganado Angeln",22:"Angelnboskap",23:"Angeln s\u0131\u011F\u0131r\u0131",24:
"\u0410\u043D\u0433\u0435\u043B\u044C\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.SAL={1:"Salers stoka",0:"Salers",7:"M\xFC\xFCjad",20:"\u0421\u0430\u043B\u0435\u0440\u0441\u043A\u0430\u044F (\u0421\u0430\u043B\u0435\u0440\u0441)"
,24:"\u0421\u0430\u043B\u0435\u0440\u0438"};C.SBT={2:"\u0425\u043E\u043B\u0449\u0430\u0439\u043D \u0444\u0440\u0435\u0437\u0438\u0439\u0441\u043A\u043E"
,4:"Hol\u0161t\xFDnsk\xFD fr\xEDzsk\xFD",0:"Holstein Friesian",6:"Holstein-Friesian"
,7:"Holstein",9:"Holstein",10:"Holstein-\nSchwarzbunt",12:"Holstein-fr\xEDz",15:
"Hol\u0161teinas fr\u012Bzijas",26:"Hol\u0161teino friz\u0173",17:"Holstein-Fryzyjska"
,18:"Holstein Fr\xEDsia",20:"\u0413\u043E\u043B\u0448\u0442\u0438\u043D\u043E-\u0444\u0440\u0438\u0437\u0441\u043A\u0430\u044F"
,21:"Vaca Holstein",24:"\u0413\u043E\u043B\u044C\u0448\u0442\u0438\u043D\u0441\u044C\u043A\u0430 "+
"\u0444\u0440\u0456\u0437\u044C\u043A\u0430"};C.SD={25:"Ju\u017Eni Devon",4:"Ji\u017En\xED Devon"
,5:"Syd Devon",0:"South Devon",6:"Zuid-Devon",7:"SD",12:"D\xE9l-Devon",13:"Devon del Sud"
,15:"Dienviddevona",26:"Piet\u0173 Devonas",17:"Po\u0142udniowe Devon",18:"Devon do Sul"
,19:"Devonul de Sud",20:"\u042E\u0436\u043D\u043E-\u0434\u0435\u0432\u043E\u043D\u0441\u043A\u0430\u044F"
,27:"Ju\u017Eni Devon",22:"Syddevon",24:"\u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0438\u0439 \u0414\u0435\u0432\u043E\u043D"
};C.SH={1:"njema\u010Dki Shorthorn",25:"Njema\u010Dki kratkodlaki pti\u010Dar",4:
"N\u011Bmeck\xFD strak\xE1\u010D",5:"Tysk Korthorn",0:"German Shorthorn",6:"Duitse Korthaar"
,7:"SH",9:"Shorthorn allemand",10:"Deutsches Shorthorn",12:"N\xE9met r\xF6vidsz\u0151r\u0171"
,13:"Segugio tedesco",15:"V\u0101cu \u012Bssparnis",26:"Vokie\u010Di\u0173 trumpasnapis"
,17:"Niemiecki kr\xF3tkorogi",18:"Boi Alem\xE3o de Chifre Curto",19:"Corn scurt german"
,20:"\u0428\u043E\u0440\u0442\u0433\u043E\u0440\u043D\u0441\u043A\u0430\u044F",27:
"Nem\u0161ki kratkodlaki pti\u010Dar",21:"Shorthorn Alem\xE1n",22:"Tysk korthorn"
,23:"Alman K\u0131saBoynuz",24:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0438\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0440\u043E\u0433\u0438\u0439"
};C.SON={1:"Ostala ukr\u0161tenja",2:"\u041A\u0440\u0443\u0441\u0442\u043E\u0441\u043A\u0430"
,25:"Ostali kri\u017Eanci",4:"Jin\xE1 k\u0159\xED\u017Een\xED",5:"Andre krydsracer"
,0:"Other crossbreeds",6:"Andere kruisingen",7:"SON",9:"Autres croisements",10:"Sonstige Kreuzungen"
,11:"\u0386\u03BB\u03BB\u03B1 \u03B6\u03CE\u03B1 \u03BC\u03B9\u03BA\u03C4\u03AE\u03C2 "+
"\u03C1\u03AC\u03C4\u03C3\u03B1\u03C2",12:"M\xE1s kever\xE9kfajt\xE1k",13:"Altri incroci"
,15:"Citi \u0161\u0137irnes krustojumi",26:"Kiti mi\u0161r\u016Bnai",16:"Andre kryssninger"
,17:"Inne miesza\u0144ce",18:"Outros h\xEDbridos",19:"Alte meti\u0219e",20:"\u041F\u0440\u043E\u0447\u0438\u0435 \u0441\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u044F"
,27:"Druge kri\u017Eance",21:"Otras razas cruzadas",22:"Andra korsningar",23:"Di\u011Fer melezler"
,24:"\u0406\u043D\u0448\u0456 \u0441\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F"
};C.TAU={1:"Druga goveda",25:"Druge goveda (Bos taurus)",4:"Jin\xFD skot (Bos taurus)"
,5:"Andre kv\xE6g\n(Bos taurus)",0:"Other cattle\n(Bos taurus)",6:"Andere runderen\n(Bos taurus)"
,7:"TAU",9:"Autres bovins de race taurine",10:"Sonstige taurine Rinder (Bos taurus)"
,11:"\u0386\u03BB\u03BB\u03BF \u03B2\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2\n(Bostaurus)"
,12:"M\xE1s szarvasmarh\xE1k (Bos taurus)",13:"Altri bovini\n(Bos taurus)",15:"Citi liellopi\n(Bos taurus)"
,26:"Kiti galvijai (Bos taurus)",16:"Andre storfe\n(Bos taurus)",17:"Inne byd\u0142o\n(Bos taurus)"
,18:"Outros bovinos (Bos taurus)",19:"Alte bovine",20:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421 (boss taurus)"
,27:"Druge govedi (Bos taurus)",21:"Otros bovinos\n(Bos taurus)",22:"Andra n\xF6tkreatur\n(Bos taurus)"
,23:"Di\u011Fer s\u0131\u011F\u0131rlar\n(Bos taurus)",24:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421 (boss taurus)"
};C.TIN={1:"Druga goveda",25:"Ostalo govedo\n(Taur indicus)",4:"Ostatn\xED skot (Bos indicus)"
,5:"Andre kv\xE6garter\n(Taur indicus)",0:"Other cattle\n(Taur indicus)",6:"Ander vee\n(Taur indicus)"
,7:"TIN",9:"Autres bovins taur indicus",10:"Sonstige taur indicus-Rinder",11:"\u0386\u03BB\u03BB\u03BF \u03B2\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2\n(Taurindicus)"
,12:"M\xE1s szarvasmarh\xE1k\n(Taur indicus)",13:"Altri bovini\n(Taurus indicus)"
,15:"Citi liellopi\n(Taur indicus)",26:"Kiti galvijai (Taur indicus)",16:"Andre storfe\n(Taur indicus)"
,17:"Inne byd\u0142o\n(Taur indicus)",18:"Outro gado\n(Taurus indicus)",19:"Alte bovine\n(Taur indicus)"
,20:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421 (taur indicus)",27:
"Drugo govedo\n(Taur indicus)",21:"Otros bovinos\n(Taur indicus)",22:"Boskap (Taur indicus)"
,23:"Di\u011Fer s\u0131\u011F\u0131rlar\n(Taur indicus)",24:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421 (taur indicus)"
};C.TLH={1:"Teksas Longhorn",2:"\u0422\u0435\u043A\u0441\u0430\u0441\u043A\u0438 \u041B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,25:"Teksas Longhorn",0:"Texas Longhorn",11:"\u03A4\u03AD\u03BE\u03B1\u03C2 \u039B\u03CC\u03BD\u03B3\u03BA\u03C7\u03BF\u03C1\u03BD"
,12:"Texasi Longhorn",13:"Longhorn del Texas",15:"Teksasas Longhorns",26:"Teksaso Longhornas"
,17:"Byk rasy Texas Longhorn",19:"Longhorn din Texas",20:"\u0422\u0435\u0445\u0430\u0441\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,27:"Teksas Longhorn",23:"Teksas Uzun Boynuz",24:"\u0422\u0435\u0445\u0430\u0441\u044C\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
};C.TLM={1:"Telemark govedo",25:"Telemark goveda",4:"Telemarksk\xFD skot",5:"Telemarkkv\xE6g"
,0:"Telemark Cattle",6:"Telemarkvee",7:"TLM",9:"Bovins T\xE9l\xE9mark",10:"Telemark"
,12:"Telemarki szarvasmarha",13:"Bestiame da Telemark",15:"Telemarkas liellopi",
26:"Telemarko galvijai",16:"Telemarksfe",17:"Byd\u0142o z Telemarku",18:"Gado Telemark"
,19:"Vite Telemark",20:"\u0422\u0435\u043B\u0435\u043C\u0430\u0440\u043A\u0441\u043A\u0430\u044F"
,27:"Telemark govedo",21:"Ganado Telemark",22:"Telemarkboskap",23:"Telemark S\u0131\u011F\u0131r\u0131"
,24:"\u0422\u0435\u043B\u0435\u043C\u0430\u0440\u043A\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.TUX={1:"Tuxer",25:"Tux goveda",4:"Tux dobytek"
,5:"Tux Kv\xE6g",0:"Tux Cattle",6:"Tux Vee",7:"TUX",9:"Tux-zillertal",10:"Tuxer"
,12:"Tux szarvasmarha",13:"Bestiame Tux",15:"Tux liellopi",26:"Tukso karv\u0117s"
,16:"Tux Storfe",17:"Byd\u0142o Tux",18:"Gado Tux",19:"Vite Tux",20:"\u0422\u0443\u043A\u0441\u043A\u0430\u044F"
,27:"Tux govedo",21:"Ganado Tux",22:"Tux n\xF6tkreatur",23:"Tux S\u0131\u011F\u0131r\u0131"
,24:"\u0422\u0430\u043A\u0441 \u041A\u0430\u0442\u0442\u043B"};C.UCK={1:"osoba iz Uckermarka"
,4:"Uckerm\xE4r\u010Dan",0:"Uckerm\xE4rker",7:"UCK",12:"Uckermarki",20:"\u0423\u043A\u0435\u0440\u043C\u044D\u0440\u043A\u0441\u043A\u0430\u044F"
,23:"\u0130\u015Faret\xE7i",24:"\u0423\u043A\u0435\u0440\u043C\u0430\u0440\u043A\u0435\u0440"
};C.UST={1:"Ma\u0111arsko sivo govedo",25:"Ma\u0111arski sivi",4:"Ma\u010Farsk\xFD \u0161ed\xFD"
,5:"Ungarsk Gr\xE5",0:"Hungarian Grey",6:"Hongaarse Grijs",7:"UST",9:"B\u0153uf gris de Hongrie"
,10:"Ungarisches Steppenrind",12:"Magyar sz\xFCrke",13:"Grigio ungherese",15:"Ung\u0101ru pel\u0113ks"
,26:"Vengr\u0173 pilkas",16:"Ungarsk Gr\xE5",17:"W\u0119gierski Szary",18:"Cinzento H\xFAngaro"
,19:"Gri unguresc",20:"\u0412\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0430\u044F \u0441\u0435\u0440\u0430\u044F"
,27:"Mad\u017Earski sivi",21:"Ganado H\xFAngaro",22:"Ungersk gr\xE5",23:"Macar Grisi"
,24:"\u0443\u0433\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u0441\u0456\u0440\u0438\u0439"
};C.VR={1:"Vogesen govedo",25:"Vosgeska krava",4:"Vosgesk\xFD skot",5:"Vogeser kv\xE6g"
,0:"Vogesenrind",6:"Vogezenrund",7:"Vosgesi rinne",9:"Vosgienne",10:"Vogesen-Rind"
,12:"Vog\xE9ziai szarvasmarha",13:"Bovino dei Vosgi",15:"Vog\u0113zu \u0161\u0137irnes liellops"
,26:"Vog\u0117z\u0173 galvija",17:"Wogezyjska rasa byd\u0142a",19:"Vit\u0103 din Vosges"
,20:"\u0412\u043E\u0433\u0435\u0437\u0441\u043A\u0430\u044F",21:"Vaca de los Vosgos"
,22:"Vogesenrasko",24:"\u041F\u043E\u0440\u043E\u0434\u0430 \u043A\u043E\u0440\u0456\u0432 \u0437 "+
"\u0412\u043E\u0433\u0435\u0437\u0456\u0432"};C.VW={1:"Vorderwald govedo",25:"Vorderwaldska goveda"
,4:"Vorderwaldsk\xFD skot",5:"Vorderwald Kv\xE6g",0:"Vorderwald Cattle",6:"Vorderwaldrunderen"
,7:"Vorderwaldi veis",9:"Vorderw\xE4lder",10:"Vorderw\xE4lder",12:"Vorderwaldi szarvasmarha"
,13:"Bestiame di Vorderwald",15:"Vorderwalda \u0161\u0137irnes liellopi",26:"Vorderwaldo karv\u0117s"
,16:"Vorderwald Storfe",17:"Byd\u0142o z Vorderwaldu",18:"Gado Vorderwald",19:"Vit\u0103 de Vorderwald"
,20:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434",27:"Vorderwaldska govedo"
,21:"Ganado de Vorderwald",22:"Vorderwaldkreatur",23:"Vorderwald S\u0131\u011F\u0131r\u0131"
,24:"\u0412\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.VWF={1:"Vorderwald govedo za tov",25:"Vorderwald goveda, govedina"
,4:"Vorderwaldsk\xFD skot, hov\u011Bz\xED maso",5:"Vorderwaldkv\xE6g, oksek\xF8d"
,0:"Vorderwald Cattle, beef",6:"Vorderwaldvee, rundvlees",7:"Vorderwaldi veised, veiseliha"
,9:"Vorderw\xE4lder, engraissement",10:"Vorderw\xE4lder, Fleischnutzung",11:"Vorderwald Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Vorderwald szarvasmarha, marhah\xFAs",13:"Vorderwald Cattle, carne bovina",
15:"Vorderwalda \u0161\u0137irnes liellopi, liellopu ga\u013Ca",26:"Vorderwaldo galvijai, jautiena"
,16:"Vorderwald kj\xF8ttfe",17:"Byd\u0142o z Vorderwaldu, wo\u0142owina",18:"Gado Vorderwald, carne bovina"
,19:"Vite Vorderwald, carne de vit\u0103",20:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434, \u043C\u044F\u0441\u043D\u0430\u044F"
,27:"Vorderwaldska goveda, govedina",21:"Ganado de Vorderwald, carne",22:"Vorderwaldkreatur, n\xF6tk\xF6tt"
,23:"Vorderwald S\u0131\u011F\u0131r\u0131, Et\xE7i",24:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434, \u043C\'\u044F\u0441\u043D\u0430"
};C.WAG={0:"Wagy\u016B",7:"WAG",9:"Wagyu",15:"Vagj\u016B",26:"Vagiu",20:"\u0412\u0430\u0433\u044E"
,23:"Wagyu",24:"\u0412\u0430\u0433\u044E"};C.WB={25:"Vel\u0161ko-crni",4:"vel\u0161sko-\u010Dern\xFD"
,0:"Welsh-Black",6:"Welsh-Zwart",7:"WB",12:"Welsh-fekete",13:"Gallese-Nero",15:"vel\u0161u melnais"
,26:"velsietis juodasis",16:"Welsh-svart",17:"Walijska rasa czarna",18:"Gales-Negro"
,19:"Vel\u0219-Negru",20:"\u0423\u044D\u043B\u044C\u0441\u043A\u0430\u044F \u0447\u0451\u0440\u043D\u0430\u044F"
,27:"vel\u0161ko-\u010Drno",24:"\u0432\u0430\u043B\u043B\u0456\u0439\u0441\u044C\u043A\u043E-\u0447\u043E\u0440\u043D\u0438\u0439"
};C.WBB={2:"\u0411\u0435\u043B\u0433\u0438\u0439\u0441\u043A\u043E \u0441\u0438\u043D\u044C\u043E"
,25:"Belgijski plavi",4:"Belgick\xFD modr\xFD",5:"Belgisk bl\xE5",0:"Belgian blue"
,6:"Belgisch blauw",7:"WBB",9:"Blanc bleu belge",10:"Wei\xDFblaue Belgier",12:"Belga k\xE9k"
,13:"Blu belga",15:"Be\u013C\u0123u zilais",26:"Belgijos m\u0117lyna",16:"Belgisk bl\xE5"
,17:"Belgijski niebieski",18:"Azul belga",19:"Albastru belgian",20:"\u0411\u0435\u043B\u044C\u0433\u0438\u0439\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u0443\u0431\u0430\u044F"
,27:"belgijsko modro",22:"Belgisk bl\xE5",23:"Bel\xE7ika Mavisi",24:"\u0411\u0435\u043B\u044C\u0433\u0456\u0439\u0441\u044C\u043A\u0430 \u0431\u043B\u0430\u043A\u0438\u0442\u043D\u0430"
};C.WGA={25:"Bijeli Galloway",4:"B\xEDl\xFD Galloway",5:"Hvid Galloway",0:"White Galloway"
,6:"Witte Galloway",7:"WGA",9:"White Galloway (blanche)",12:"Feh\xE9r Galloway",
13:"Galloway Bianco",15:"Baltais Galloway",26:"Baltasis Galloway",17:"Bia\u0142a Galloway"
,18:"Galloway Branco",19:"Galloway Alb",20:"\u0411\u0435\u043B\u044B\u0439 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
,27:"Beli Galloway",22:"Vit Galloway",23:"Beyaz Galloway",24:"\u0411\u0456\u043B\u0438\u0439 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
};C.WIT={0:"Witrug",6:"Witte rug",7:"WIT",20:"\u0412\u0438\u0442\u0440\u0443\u0433"
,24:"\u0412\u0456\u0442\u0440\u0443\u0433"};C.WL={1:"vodeni bufalo",2:"\u0412\u043E\u0434\u0435\u043D \u0431\u0438\u0432\u043E\u043B"
,25:"Vodeni bivo",4:"Vodn\xED buvol",5:"Vandb\xF8ffel",0:"Water buffalo",6:"Waterbuffel"
,7:"WL",9:"Buffle d\u2019eau / karbau",10:"Wasserb\xFCffel",12:"V\xEDzibivaly",13:
"Bufalo d\'acqua",15:"\u016Adens bife\u013Ci",26:"Vandens bizonas",16:"Vannb\xF8ffel"
,17:"Baw\xF3\u0142 wodny",18:"B\xFAfalo d\'\xE1gua",19:"Bivol de ap\u0103",20:"\u0412\u043E\u0434\u044F\u043D\u043E\u0439 \u0431\u0443\u0439\u0432\u043E\u043B"
,27:"vodni bivol",22:"Vattenbuffel",23:"Manda",24:"\u0412\u043E\u0434\u044F\u043D\u0438\u0439 \u0431\u0443\u0439\u0432\u043E\u043B"
};C.WP={1:"bijeli park",25:"Bijeli park",4:"B\xEDl\xFD park",5:"Hvid Park",0:"White Park"
,6:"Wit Park",7:"WP",12:"Feh\xE9r Park",13:"Parco Bianco",15:"Baltais parks",26:
"Baltasis parkas",17:"Bia\u0142y Park",18:"Parque Branco",19:"Parc Alb",20:"\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u0430\u044F"
,27:"Beli park",22:"Vit Park",24:"\u0411\u0456\u043B\u0438\u0439 \u041F\u0430\u0440\u043A"
};C.WSH={2:"\u0411\u044F\u043B \u0428\u043E\u0440\u0442\u0445\u043E\u0440\u043D"
,0:"Whitbred Shorthorn",7:"Whitbreadi l\xFChisarv",11:"\u039B\u03B5\u03C5\u03BA\u03CC\u03BA\u03B5\u03C1\u03C9\u03C2 \u03A3\u03BF\u03C1\u03C4\u03C7\u03BF\u03C1\u03BD"
,15:"Baltais \u0161orthorns",20:"\u0423\u0438\u0442\u0431\u0440\u0435\u0434 \u0428\u043E\u0440\u0442\u0433\u043E\u0440\u043D"
,24:"\u0412\u0456\u0442\u0431\u0440\u0435\u0434 \u043A\u043E\u0440\u043E\u0442\u043A\u0430 "+
"\u0440\u043E\u0433\u0430"};C.XFF={1:"Ukr\u0161tenje mesno govedo x mesno govedo"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u0435\u0441\u043E "+
"\u0445 \u043C\u0435\u0441\u043E",25:"Kri\u017Eanac goveda \xD7 goveda",4:"K\u0159\xED\u017Een\xED hov\u011Bz\xEDho \xD7 hov\u011Bz\xEDho"
,5:"Krydsning mellem oksek\xF8d \xD7 oksek\xF8d",0:"Crossbreed beef \xD7 beef",6:
"Kruising rund \xD7 rund",7:"Ristand lihaveis \xD7 lihaveis",9:"Bovins \xE0 viande \xD7 bovins \xE0 viande"
,10:"Kreuzung Fleischrind \xD7 Fleischrind",11:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Hibrid marha \xD7 marha",13:"Incrocio bovino \xD7 bovino",15:"Krusto\u0161ana starp liellopiem \xD7 liellopi"
,26:"Hibridin\u0117 veisl\u0117 jautiena \xD7 jautiena",16:"Kryssing kj\xF8tt \xD7 kj\xF8tt"
,17:"Mi\u0119so wo\u0142owe z krzy\u017C\xF3wki",18:"Cruzamento de bovinos \xD7 bovinos"
,19:"Hibrizi carne de vit\u0103 \xD7 carne de vit\u0103",20:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044F\u0441\u043D\u043E\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u044F\u0441\u043D\u043E\u0439 \u0441\u043A\u043E\u0442"
,27:"Kri\u017Eanec govedo \xD7 govedo",22:"Korsning n\xF6tk\xF6tt \xD7 n\xF6tk\xF6tt"
,23:"Melezleme et x et",24:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\'\u044F\u0441\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\'\u044F\u0441\u043D\u0430 "+"\u0445\u0443\u0434\u043E\u0431\u0430"
};C.XFM={1:"Ukr\u0161tanje mesno govedo x mlije\u010Dno govedo",2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u0435\u0441\u043E "+
"\xD7 \u043C\u043B\u044F\u043A\u043E",25:"Kri\u017Eanac goveda mesa i mlijeka",4:
"K\u0159\xED\u017Eenec masn\xE9ho a ml\xE9\u010Dn\xE9ho skotu",5:"Krydsning mellem k\xF8d- og m\xE6lkerace"
,0:"Crossbreed beef \xD7 milk",6:"Kruising vlees \xD7 melk",7:"Ristand lihaveis \xD7 piimalehm"
,9:"Bovins \xE0 viande \xD7 bovins laitiers",10:"Kreuzung Fleischrind \xD7 Milchrind"
,11:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Keresztezett h\xFAs \xD7 tej",13:"Ibrido carne \xD7 latte",15:"\u0160\u0137ir\u0146u krustojums ga\u013Cai \xD7 pienam"
,26:"Hibridin\u0117 m\u0117sos \xD7 pieno veisl\u0117",16:"Kryssing kj\xF8tt x melk"
,17:"Byd\u0142o miesza\u0144cowe mi\u0119sne \xD7 mleczne",18:"Cruzamento entre bovinos de corte e leite"
,19:"Hibrizi carne \xD7 lapte",20:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044F\u0441\u043D\u043E\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442",27:"Kri\u017Eanec med govedino in mlekom",22:"Korsning n\xF6tk\xF6tt \xD7 mj\xF6lk"
,23:"Melezleme et x s\xFCt",24:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\'\u044F\u0441\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.XMM={1:"Ukr\u0161tanje mlije\u010Dno govedo x mlije\u010Dno govedo"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u043B\u044F\u043A\u043E "+
"\xD7 \u043C\u043B\u044F\u043A\u043E",25:"Hibrid mlijeka \xD7 mlijeka",4:"K\u0159\xED\u017Eenec ml\xE9ko \xD7 ml\xE9ko"
,5:"Krydsning af m\xE6lk \xD7 m\xE6lk",0:"Crossbreed milk \xD7 milk",6:"Kruising melk \xD7 melk"
,7:"Ristand piimalehm \xD7 piimalehm",9:"Bovins laitiers \xD7 bovins laitiers",10:
"Kreuzung Milchrind \xD7 Milchrind",11:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,12:"Keresztezett tej \xD7 tej",13:"Ibrido latte \xD7 latte",15:"Krusto \u0161\u0137irne piena \xD7 piena"
,26:"Hibridin\u0117 pieno \xD7 pieno",16:"Kryssing melk \xD7 melk",17:"Mleko skrzy\u017Cowane z mlekiem"
,18:"H\xEDbrido leite \xD7 leite",19:"\xCEncruci\u0219are lapte \xD7 lapte",20:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442",27:"Kri\u017Eanec mleko \xD7 mleko",22:"Korsning mj\xF6lk \xD7 mj\xF6lk"
,23:"Melezleme s\xFCt x s\xFCt",24:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.XZF={1:"Kri\u017Eanac dvostruke namjene \xD7 govedina"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u0441 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \xD7 \u0433\u043E\u0432\u0435\u0436\u0434\u043E "+
"\u043C\u0435\u0441\u043E",25:"Kri\u017Eanac dvostruke namjene \xD7 govedina",4:
"K\u0159\xED\u017Eenec dvoj\xEDho vyu\u017Eit\xED \xD7 maso",5:"Krydsning dobbeltform\xE5l \xD7 k\xF8d"
,0:"Crossbreed dual-use \xD7 beef",6:"Kruising dubbeldoel \xD7 vlees",7:"Ristand kaksikotstarbeline \xD7 lihaveis"
,8:"Risteytys kaksik\xE4ytt\xF6inen \xD7 naudanliha",9:"Croisement bovin \xE0 deux fins \xD7 b\u0153uf de boucherie"
,10:"Kreuzung Zweinut~zungsrind \xD7 Fleischr.",11:"\u0394\u03B9\u03C0\u03BB\u03AE\u03C2 \u03C7\u03C1\u03AE\u03C3\u03B7\u03C2 "+
"\u03C5\u03B2\u03C1\u03B9\u03B4\u03B9\u03BA\u03CC \xD7 \u03BC\u03BF\u03C3\u03C7\u03B1\u03C1\u03AF\u03C3\u03B9\u03BF"
,12:"Kett\u0151s hasznos\xEDt\xE1s\xFA \xD7 h\xFAshaszn\xFA keresztez\xE9s",13:"Incrocio doppio uso \xD7 carne bovina"
,15:"Hibr\u012Bdsist\u0113ma divk\u0101r\u0161ai lieto\u0161anai \xD7 liellopu "+
"ga\u013Ca",26:"Hibridinis dvigubos paskirties \xD7 m\u0117sinis",16:"Kryssavl dobbeltbruk \xD7 kj\xF8ttfe"
,17:"Krzy\u017C\xF3wka u\u017Cytkowa \xD7 mi\u0119sna",18:"H\xEDbrido de dupla finalidade \xD7 carne"
,19:"Hibridizare dual\u0103 pentru carne",20:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \xD7 \u0433\u043E\u0432\u044F\u0434\u0438\u043D\u0430"
,27:"Kri\u017Eanec dvojne uporabe \xD7 govedina",22:"Korsning dubbelanv\xE4ndning \xD7 n\xF6tk\xF6tt"
,23:"Melezleme \xC7ift Kullan\u0131m x Et",24:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u0433\u043E "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \xD7 "+"\u043C\'\u044F\u0441\u043E"
};C.XZM={1:"Kri\u017Eani dvostruki \xD7 mlijeko",2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u0441 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \xD7 \u043C\u043B\u044F\u043A\u043E"
,25:"Kri\u017Eanac dvostruke namjene \xD7 mlijeko",4:"K\u0159\xED\u017Eenec s dvoj\xEDm \xFA\u010Delem \xD7 ml\xE9ko"
,5:"Krydsning dobbeltform\xE5l \xD7 m\xE6lk",0:"Crossbreed dual-use \xD7 milk",6:
"Kruising dubbel gebruik \xD7 melk",7:"Ristand kaksotstarbeline \xD7 piimalehm",
8:"Kaksik\xE4ytt\xF6isen karjan risteytt\xE4minen \xD7 maito.",9:"Croisement bovin \xE0 deux fins \xD7 bovin laitier"
,10:"Kreuzung Zweinut~zungsrind \xD7 Milchr.",11:"\u0394\u03B9\u03B1\u03C3\u03C4\u03B1\u03C5\u03C1\u03C9\u03BC\u03AD\u03BD\u03B7\u03C2 "+
"\u03C7\u03C1\u03AE\u03C3\u03B7\u03C2 \xD7 \u03B3\u03AC\u03BB\u03B1",12:"Kett\u0151s hasznos\xEDt\xE1s\xFA \xD7 tejhibrid"
,13:"Incrocio doppio uso \xD7 latte",15:"\u0160\u0137ir\u0161\u013Cirnes dubult\u0101 izmanto\u0161ana \xD7 piens"
,26:"Veisli\u0173 kry\u017Eminimas, dviguba paskirtis \xD7 pienas",16:"Kryssavl dobbeltbruk \xD7 melk"
,17:"Krzy\u017C\xF3wka o podw\xF3jnym zastosowaniu \xD7 mleko",18:"Cruzamento duplo prop\xF3sito \xD7 leite"
,19:"Hibridizare cu dubl\u0103 utilizare \xD7 lapte",20:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \xD7 \u043C\u043E\u043B\u043E\u043A\u043E"
,27:"Kri\u017Eanec dvojne uporabe \xD7 mleko",22:"Korsning dubbelanv\xE4ndning \xD7 mj\xF6lk"
,23:"Melezleme \xC7ift Kullan\u0131m x S\xFCt",24:"\u0421\u0445\u0440\u0435\u0449\u0435\u043D\u043D\u044F \u0434\u0432\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0438\u0445 "+
"\xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445"};C.XZZ={1:"Hibrid dvostruke namjene \xD7 dvostruke namjene"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \xD7 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430",25:"Kri\u017Eanac dvostruke namjene \xD7 dvostruke namjene"
,4:"K\u0159\xED\u017Eenec dvoj\xEDho vyu\u017Eit\xED \xD7 dvoj\xED vyu\u017Eit\xED"
,5:"Krydsning dobbeltanvendelse \xD7 dobbeltanvendelse",0:"Crossbreed dual-use \xD7 dual-use"
,6:"Kruising dubbel gebruik \xD7 dubbel gebruik",7:"Ristand kaksotstarbeline \xD7 kaksotstarbeline"
,8:"Risteytys kaksik\xE4ytt\xF6inen \xD7 kaksik\xE4ytt\xF6inen",9:"Croisement double fins \xD7 double fins"
,10:"Kreuzung Zweinut~zung \xD7 Zweinutzung",11:"\u0394\u03B9\u03C0\u03BB\u03AE\u03C2 \u03C7\u03C1\u03AE\u03C3\u03B7\u03C2 "+
"\u03B4\u03B9\u03B1\u03C3\u03C4\u03B1\u03CD\u03C1\u03C9\u03C3\u03B7 \xD7 "+"\u03B4\u03B9\u03C0\u03BB\u03AE\u03C2 \u03C7\u03C1\u03AE\u03C3\u03B7\u03C2"
,12:"Kett\u0151s haszn\xE1lat\xFA hibrid \xD7 kett\u0151s haszn\xE1lat\xFA",13:"Incrocio a doppio uso \xD7 doppio uso"
,15:"\u0160\u0137irnes hibr\u012Bds divk\u0101r\u0161as lieto\u0161anas \xD7 "+"divk\u0101r\u0161as lieto\u0161anas"
,26:"Hibridinis dvipaskirtis \xD7 dvipaskirtis",16:"Krysning dobbeltbruk \xD7 dobbeltbruk"
,17:"Krzy\u017C\xF3wka podw\xF3jnego zastosowania \xD7 podw\xF3jne zastosowanie"
,18:"Cruzamento de dupla utilidade \xD7 dupla utilidade",19:"Hibrid cu dubl\u0103 utilizare \xD7 dubl\u0103 utilizare"
,20:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \xD7 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",27:"Kri\u017Eanec dvojne uporabe \xD7 dvojne uporabe"
,22:"Korsning dubbelanv\xE4ndning \xD7 dubbelanv\xE4ndning",23:"Melezleme \xC7ift Kullan\u0131m x \xC7ift Kullan\u0131m"
,24:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u0433\u043E "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \xD7 "+"\u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.YAK={25:"Jakutski",4:"jakutsk\xFD",5:"Yakutisk",0:"Yakutian",6:"Jakoets",7:"Jakuudi"
,9:"Yack",10:"Yak",12:"J\xE1kut",13:"Yakutian in Italian is \"Yakuto\".",15:"jakutie\u0161u"
,26:"Jakut\u0173",17:"Jakucki",18:"Yakutiano",19:"Yakutian in Romanian can be translated as \"yakut\"."
,20:"\u042F\u043A",27:"Jakutski",22:"Jakutiska",23:"Yakut\xE7a",24:"\u042F\u043A"
};C.ZEB={1:"minijaturna zebu",25:"Minijaturni zebu",5:"Miniature zebu",0:"Miniature Zebu"
,6:"Miniatuur Zebu",7:"ZEB",9:"Zebu miniature",10:"Zwerg-Zebu",12:"Miniat\u0171r zebu"
,13:"Zeb\xF9 in miniatura",15:"Miniat\u016Bras zebu",26:"Miniat\u016Brinis zebu"
,17:"Miniatury Zebu",18:"Miniatura Zebu",19:"Zebu \xEEn miniatur\u0103",20:"\u041A\u0430\u0440\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u0417\u0435\u0431\u0443"
,27:"Miniaturni zebu",22:"Miniatyrzebu",23:"Minyat\xFCr Zebu",24:"\u041C\u0456\u043D\u0456\u0430\u0442\u044E\u0440\u043D\u0438\u0439 \u0437\u0435\u0431\u0443"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */