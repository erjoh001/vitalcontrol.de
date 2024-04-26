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
,0:"Aberdeen Angus",15:"\u0410\u0431\u0435\u0440\u0434\u0438\u043D-\u0430\u043D\u0433\u0443\u0441\u0441\u043A\u0430\u044F"
,18:"\u0410\u0431\u0435\u0440\u0434\u0438\u043D-\u0430\u043D\u0433\u0443\u0441"};
C.AO={1:"Tele mu\u0161ko",4:"Pekeln\xFD skot",0:"Heck Cattle",5:"Heckrunderen",6:
"Hecki veis",8:"B\xE9tail Aurochs",9:"Auerochse (Heckrind)",10:"Heck",15:"\u0422\u0443\u0440 (\u0431\u044B\u043A)"
,16:"Uro (ganado de Heck)",18:"\u0422\u0443\u0440 (\u0431\u0438\u043A)"};C.AS={2:
"\u0410\u0439\u044A\u0440\u0448\u0438\u0440",0:"Ayrshire",15:"\u0410\u0439\u0440\u0448\u0438\u0440\u0441\u043A\u0430\u044F"
,18:"\u0415\u0440\u0448\u0438\u0440"};C.AT={0:"Ansbach-Triesdorfer",15:"\u0410\u043D\u0441\u0431\u0430\u0445-\u0422\u0440\u0438\u0441\u0434\u043E\u0440\u0444\u0441\u043A\u0430\u044F"
,18:"\u0410\u043D\u0441\u0431\u0430\u0445-\u0422\u0440\u0456\u0441\u0434\u043E\u0440\u0444\u0435\u0440"
};C.AU={1:"Aubrac",4:"Aubrack\xFD skot",0:"Aubrac Cattle",5:"Aubrac-runderen",6:
"Aubraci t\xF5ug",8:"Aubrac",9:"Aubrac",10:"Aubrac",13:"Aubrac storfe",15:"\u041E\u0431\u0440\u0430\u043A"
,16:"Ganado Aubrac",18:"\u0410\u0431\u0440\u0430\u043A\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.BA={2:"\u0411\u043B\u043E\u043D\u0434 \u0414\u2019 \u0410\u043A\u0438\u0442\u0435\u043D"
,4:"Blonde d\'Aquitaine",0:"Blonde d\u2019Aquitaine",5:"Blonde d\'Aquitaine",13:
"Blonde d`Aquitaine",15:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0430\u043A\u0432\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F"
,16:"Blonde de Aquitania",18:"\u0411\u043B\u043E\u043D\u0434 \u0434\'\u0410\u043A\u0456\u0442\u0435\u043D"
};C.BAZ={0:"Bazadaise",15:"\u0411\u0430\u0437\u0430\u0434\u044D\u0437",18:"\u0411\u0430\u0437\u0430\u0434\u0435\u0437"
};C.BB={2:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E \u0441\u0438\u043D\u044C\u043E"
,4:"Britsk\xE1 modr\xE1",0:"British Blue",5:"Brits Blauw",15:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u0443\u0431\u0430\u044F"
,16:"Brit\xE1nica Blue",18:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u0431\u043B\u0430\u043A\u0438\u0442\u043D\u0438\u0439"
};C.BE={2:"\u0411\u0438\u0444\u0430\u043B\u043E",0:"Beefalo",15:"\u0411\u0438\u0444\u0430\u043B\u043E"
,18:"\u0411\u0456\u0444\u0430\u043B\u043E"};C.BGA={2:"\u0413\u0430\u043B\u043E\u0443\u0435\u0439"
,0:"Belted Galloway",8:"Galloway ceintur\xE9e",15:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u043A\u0430\u044F"
,16:"Galloway cintado",18:"\u0411\u0435\u043B\u0442\u0435\u0434 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
};C.BIS={2:"\u0411\u0438\u0437\u043E\u043D",4:"Zubr",0:"Bison",5:"Bizon",9:"Bison/Wisent"
,15:"\u0411\u0438\u0437\u043E\u043D/\u0437\u0443\u0431\u0440",16:"Bisonte",18:"\u0411\u0456\u0437\u043E\u043D/\u0437\u0443\u0431\u0440"
};C.BLA={0:"Blaarkop",15:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F (Blaarkop)"
};C.BLH={1:"Britanski longhorn",2:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,4:"Britsk\xFD longhorn",0:"British Longhorn",5:"Britse Longhorn",6:"Briti Longhorn"
,10:"\u0392\u03C1\u03B5\u03C4\u03B1\u03BD\u03B9\u03BA\u03CC \u039B\u03CC\u03B3\u03C7\u03BF\u03C1\u03BD"
,13:"Britisk Longhorn",15:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,18:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u044C\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
};C.BRA={0:"Brangus",15:"\u0411\u0440\u0430\u043D\u0433\u0443\u0441"};C.BRN={0:"Brahman"
,15:"\u0411\u0440\u0430\u0445\u043C\u0430\u043D",18:"\u0411\u0440\u0430\u0445\u043C\u0430\u043D"
};C.BV={0:"Braunvieh",5:"Bruinvee",8:"Brune des Alpes",15:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F"
,16:"Pardo Suizo",18:"\u0411\u0440\u0430\u0443\u043D\u0432\u0456\u0445"};C.BVF={
4:"Braunvieh, hov\u011Bz\xED maso",0:"Braunvieh, beef",5:"Braunvieh, rundvlees",
6:"Braunvieh beef",8:"Brune des Alpes, engraissement",9:"Braunvieh, Fleischnutzung"
,10:"Braunvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Braunvieh, kj\xF8tt",15:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Pardo Suizo, carne",18:"\u0411\u0440\u0430\u0443\u043D\u0432\u0456, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.CHA={2:"\u0428\u0430\u0440\u043E\u043B\u0435",0:"Charolais",15:"\u0428\u0430\u0440\u043E\u043B\u0435\u0437\u0441\u043A\u0430\u044F"
,18:"\u0428\u0430\u0440\u043E\u043B\u0435"};C.CHI={2:"\u041A\u0438\u0430\u043D\u0438\u043D\u0430"
,0:"Chianina",15:"\u041A\u044C\u044F\u043D\u0438\u043D\u0430",18:"\u0427\u0456\u0430\u043D\u0456\u043D\u0430"
};C.DA={1:"Njema\u010Dki angus",4:"n\u011Bmeck\xFD angus",0:"German Angus",5:"Duitse Angus"
,8:"Angus Allemand",9:"Deutsch Angus",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0430\u043D\u0433\u0443\u0441"
,16:"Angus alem\xE1n",18:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0438\u0439 \u0430\u043D\u0433\u0443\u0441"
};C.DBV={1:"DBV",4:"Braunvieh (star\xE9 plemeno)",0:"Braunvieh (old breed)",5:"Braunvieh (oud ras)"
,6:"Braunvieh",8:"Brune des Alpes (ancienne race)",9:"Braunvieh alter Zuchtrichtung"
,10:"Braunvieh (\u03C0\u03B1\u03BB\u03B9\u03AC \u03C1\u03AC\u03C4\u03C3\u03B1)",
13:"Braunvieh (gammel rase)",15:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F, "+
"\u0441\u0442\u0430\u0440\u043E\u0439 \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438"
,16:"Braunvieh (raza vieja)",18:"\u0431\u0440\u0430\u0443\u043D\u0448\u0432\u0435\u0439\u0433 (\u0441\u0442\u0430\u0440\u0430 "+
"\u043F\u043E\u0440\u043E\u0434\u0430)"};C.DEX={2:"\u0414\u0435\u043A\u0441\u0442\u044A\u0440"
,0:"Dexter",15:"\u0414\u0435\u043A\u0441\u0442\u0435\u0440",18:"\u0414\u0435\u043A\u0441\u0442\u0435\u0440"
};C.DSN={1:"Njema\u010Dka crna krava",4:"N\u011Bmeck\xFD \u010Dernob\xEDl\xFD skot"
,0:"German Black Pied",5:"Duits Zwartbont",8:"Pied noir allemand",9:"Schwarzbuntes Niederungsrind"
,15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u0447\u0451\u0440\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F"
,16:"Pardo Suizo Alem\xE1n",18:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u0447\u043E\u0440\u043D\u043E-\u043F\u043B\u044F\u043C\u0438\u0441\u0442\u0430"
};C.EBS={0:"Ennstaler Bergscheck",7:"Ennstaler Bergschecken",8:"Ch\xE8vre de montagne Ennstal"
,9:"Ennstaler Bergschecken",15:"\u042D\u043D\u043D\u0441\u0442\u0430\u043B\u0435\u0440 \u0411\u0435\u0440\u0433\u0448\u0435\u043A"
,18:"\u0415\u043D\u043D\u0441\u0442\u0430\u043B\u0435\u0440 \u0411\u0435\u0440\u0433\u0448\u0435\u043A"
};C.ERI={2:"\u0425\u0435\u0440\u0435\u043D\u0441",0:"Herens",8:"Vache d\'H\xE9rens"
,9:"Eringer",15:"\u0425\u0435\u0440\u0435\u043D\u0441",18:"\u0425\u0435\u0440\u0435\u043D\u0441"
};C.EVO={2:"\u0415\u0432\u043E\u043B\u0435\u043D",0:"\xC9vol\xE8ne",9:"Evol\xE8ner"
,15:"\u042D\u0432\u043E\u043B\u0435\u043D",18:"\u0415\u0432\u043E\u043B\u0435\u043D"
};C.FL={1:"simental",0:"Fleckvieh",6:"Fleckiev",15:"\u0424\u043B\u0435\u043A\u0444\u0438"
,18:"\u0424\u043B\u0435\u043A\u0432\u0456\u0445"};C.FLF={1:"simentalsko govedo",
4:"Fleckvieh, hov\u011Bz\xED maso",0:"Fleckvieh, beef",5:"Fleckvieh, rundvlees",
8:"Fleckvieh-\nSimmental",9:"Fleckvieh-\nSimmental",10:"Fleckvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Fleckvieh, kj\xF8tt",15:"\u0424\u043B\u0435\u043A\u0444\u0438-\n\u0421\u0438\u043C\u043C\u0435\u043D\u0442\u0430\u043B\u044C"
,16:"Fleckvieh, carne",18:"Fleckvieh, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.FR={0:"Fj\xE4ll",9:"Fj\xE4ll-Rind",13:"Svensk fjellku",15:"Fj\xE4ll - \u0448\u0432\u0435\u0434\u0441\u043A\u0430\u044F \u043F\u043E\u0440\u043E\u0434\u0430"
,16:"Raza Fj\xE4ll"};C.GAL={1:"Galloway govedo",2:"\u0413\u0430\u043B\u043E\u0443\u0435\u0439"
,4:"Gallowaysk\xFD skot",0:"Galloway Cattle",5:"Galloway-runderen",8:"Galloway",
9:"Galloway",13:"Galloway Storfe",15:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u043A\u0430\u044F"
,16:"Galloway",18:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.GR={1:"Glan govedo",4:"Plemeno skotu Glan"
,0:"Glan Cattle",5:"Glanvee",8:"Bovins Glan",9:"Glanrind",13:"Glan Storfe",15:"\u0413\u043B\u0430\u043D \u041A\u0420\u0421"
,16:"Ganado Glan",18:"\u0413\u043B\u0430\u043D\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.GRV={1:"Tirolsko govedo",4:"Tyrolsk\xE1 \u0161ed\xE1",0:"Tyrolean Grey",5:"Tiroler Grijs"
,8:"Grauvieh / Race Grise",9:"Grauvieh",13:"Tyroler Gr\xE5",15:"\u0422\u0438\u0440\u043E\u043B\u044C\u0441\u043A\u0430\u044F \u0441\u0435\u0440\u0430\u044F"
,16:"Ganado Glan",18:"\u0422\u0438\u0440\u043E\u043B\u044C\u0441\u044C\u043A\u0438\u0439 \u0441\u0456\u0440\u0438\u0439"
};C.GV={1:"\u017Euto govedo",0:"Gelbvieh",6:"Gelvbieh",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0413\u0435\u043B\u0431\u0444\u0438"
,18:"\u0413\u0435\u043B\u044C\u0431\u0432\u0456\u0445"};C.GVF={1:"\u017Euto june"
,4:"Gelbvieh, hov\u011Bz\xED maso",0:"Gelbvieh, beef",5:"Gelbvieh, rundvlees",8:
"Gelbvieh / engraissement",9:"Gelbvieh, Fleischnutzung",10:"Gelbvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Gelbvieh, kj\xF8tt",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0413\u0435\u043B\u0431\u0444\u0438, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Gelbvieh",18:"\u0413\u0435\u043B\u044C\u0431\u0432\u0456, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.HE={2:"\u0425\u0435\u0440\u0435\u0444\u043E\u0440\u0434",0:"Hereford",15:"\u0413\u0435\u0440\u0435\u0444\u043E\u0440\u0434\u0441\u043A\u0430\u044F"
,18:"\u0413\u0435\u0440\u0435\u0444\u043E\u0440\u0434"};C.HIN={1:"Hinterwald govedo"
,4:"Hinterwaldsk\xFD skot",0:"Hinterwald Cattle",5:"Hinterwald-runderen",8:"Bovins de l\u2019Hinterwald"
,9:"Hinterw\xE4lder",13:"Hinterwald Storfe",15:"\u0425\u0438\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440"
,16:"Ganado Hinterwald",18:"\u0413\u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u0434\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.HLD={1:"Highland govedo",4:"Skotsk\xFD n\xE1horn\xED skot"
,0:"Highland Cattle",5:"Schotse Hooglander",8:"Highland",9:"Highland",13:"H\xF8ylandsfe"
,15:"\u0425\u0430\u0439\u043B\u0435\u043D\u0434",16:"Ganado Hinterwald",18:"\u0412\u0438\u0441\u043E\u043A\u043E\u0433\u0456\u0440\u043D\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.HWF={1:"Hintervald june",4:"Hinterwaldsk\xFD skot, hov\u011Bz\xED maso",0:"Hinterwald Cattle, beef"
,5:"Hinterwald runderen, rundvlees",8:"Vache d\u2019Hinterwald, engraissement",9:
"Hinterw\xE4lder, Fleischnutzung",10:"Hinterwald Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Hinterwald Cattle, kj\xF8tt",15:"\u0425\u0438\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Ganado Hinterwald, carne",18:"\u0425\u0456\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440, "+
"\u043C\'\u044F\u0441\u043D\u0430"};C.IND={1:"ostala goveda",2:"\u0417\u0435\u0431\u0443"
,4:"Dal\u0161\xED skot zebu",0:"Other Zebu cattle",5:"Andere Zebu-runderen",8:"Autres bovins z\xE9bus"
,9:"Sonstige Zebu-\nRinder (Bos indicus)",10:"Zebu cattle",13:"Andre Zebu storfe"
,15:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421",16:"Otras razas de ganado ceb\xFA (Bos indicus)"
,18:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421"};C.JER={1:"D\u017Eersej"
,2:"\u0414\u0436\u0435\u0440\u0441\u0435\u0439",4:"Dres",0:"Jersey",8:"Jersiaise"
,15:"\u0414\u0436\u0435\u0440\u0441\u0435\u0439\u0441\u043A\u0430\u044F",18:"\u0414\u0436\u0435\u0440\u0441\u0456"
};C.LAK={4:"nizozemsk\xFD p\xE1skovan\xFD",0:"Dutch Belted",5:"Hollands bont",8:
"Lakenvelder",9:"Lakenvelder",13:"Nederlandsk Beltet",15:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F \u043E\u043F\u043E\u044F\u0441\u0430\u043D\u043D\u0430\u044F"
,16:"Lakenvelder",18:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u044C\u043A\u0430 \u043F\u043E\u044F\u0441\u043D\u0430"
};C.LG={0:"Luing",15:"\u041B\u0443\u0438\u043D\u0433\u0441\u043A\u0438\u0439 \u041A\u0420\u0421"
,18:"\u041B\u0443\u0457\u043D\u0433\u0441\u044C\u043A\u0438\u0439 \u0412\u0420\u0425"
};C.LH={2:"\u041B\u043E\u043D\u0433 \u0425\u043E\u0440\u043D",0:"Longhorn",13:"Langhorn"
,15:"\u0422\u0435\u0445\u0430\u0441\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,18:"\u0414\u043E\u0432\u0433\u043E\u0440\u0456\u0433"};C.LIM={2:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D"
,0:"Limousin",15:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D\u0441\u043A\u0430\u044F"
,18:"\u041B\u0456\u043C\u0443\u0437\u0435\u043D"};C.LMP={0:"Limpurger",5:"Limburger"
,15:"\u041B\u0438\u043C\u043F\u0443\u0440\u0433\u0435\u0440",18:"\u041B\u0456\u043C\u043F\u0443\u0440\u0433\u0435\u0440"
};C.LPF={1:"limpurger june",4:"Limpurger, hov\u011Bz\xED",0:"Limpurger, beef",5:
"Limburger, rundvlees",8:"Limpurger, pour l\u2019engraissement",9:"Limpurger, Fleischnutzung"
,10:"Limpurger, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Limpurger, kj\xF8tt",15:"\u041B\u0438\u043C\u043F\u0443\u0440\u0433\u0435\u0440, \u043C\u044F\u0441\u043D\u0430\u044F"
,16:"Limpurger, carne",18:"\u041B\u0456\u043C\u043F\u0443\u0440\u0433\u0435\u0440, \u043C\'\u044F\u0441\u043D\u0430"
};C.LR={1:"lincoln red",0:"Lincoln Red",15:"\u041B\u0438\u043D\u043A\u043E\u043B\u044C\u043D\u0441\u043A\u0430\u044F "+
"\u043A\u0440\u0430\u0441\u043D\u0430\u044F",16:"Lincoln Rojo",18:"\u041B\u0456\u043D\u043A\u043E\u043B\u044C\u043D \u0420\u0435\u0434"
};C.MA={0:"Maine-Anjou",8:"Rouge des pr\xE9s",15:"\u041C\u0435\u043D-\u0430\u043D\u0436\u0443"
,18:"\u041C\u0435\u043D-\u0410\u043D\u0436\u0443"};C.MAR={0:"Marchigiana",15:"\u041C\u0430\u0440\u043A\u0438\u0434\u0436\u0430\u043D\u0441\u043A\u0430\u044F"
,18:"\u041C\u0430\u0440\u043A\u0456\u0434\u0436\u0430\u043D\u0430"};C.MGR={2:"\u041C\u044E\u0440\u0435\u0439 \u0413\u0440\u0435\u0439"
,0:"Murray Grey",10:"\u039C\u03AC\u03C1\u03B5\u03CA \u0393\u03BA\u03C1\u03AD\u03B9"
,15:"\u041C\u0443\u0440\u0440\u0435\u0439 \u0413\u0440\u0435\u0439",18:"\u041C\u0443\u0440\u0440\u0435\u0439 \u0413\u0440\u0435\u0439"
};C.MON={2:"\u041C\u043E\u043D\u0442\u0431\u0435\u043B\u0438\u0430\u0440\u0434",
0:"Montb\xE9liarde",6:"Montbeliard",9:"Montb\xE9liard",15:"\u041C\u043E\u043D\u0431\u0435\u043B\u044C\u044F\u0440"
,18:"\u041C\u043E\u043D\u0431\u0435\u043B\u044C\u044F\u0440\u0434"};C.MUR={2:"\u041C\u044A\u0440\u0431\u043E\u0434\u043D\u0435\u0440"
,0:"Murbodner",15:"\u041C\u044A\u0440\u0431\u043E\u0434\u043D\u0435\u0440",18:"\u041C\u0443\u0440\u0431\u043E\u0434\u043D\u0435\u0440"
};C.MW={4:"Murnau-Werdenfelsk\xFD skot",0:"Murnau-Werdenfels Cattle",5:"Murnau-Werdenfels Rund"
,6:"MW",8:"Murnau-Werdenfels",9:"Murnau-\nWerdenfelser",13:"Murnau-Werdenfels Storfe"
,15:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441"
,16:"Ganado Murnau-Werdenfels",18:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.MWF={1:"Murnau-Werdenfels Cattle, govedo"
,4:"Murnau-Werdenfelsk\xFD skot, hov\u011Bz\xED maso",0:"Murnau-Werdenfels Cattle, beef"
,5:"Murnau-Werdenfels-runderen, rundvlees",6:"MWB",8:"Murnau-Werdenfels pour l\u2019engraissement"
,9:"Murnau-Werdenfel~ser, Fleischnutzung",10:"Murnau-Werdenfels Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Murnau-Werdenfels Storfe, kj\xF8tt",15:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Ganado Murnau-Werdenfels, carne",18:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441, "+
"\u043C\'\u044F\u0441\u043D\u0430"};C.NOR={4:"Normandsk\xFD skot",0:"Normande Cattle"
,5:"Normandische runderen",8:"Normande",9:"Normanne",13:"Normande storfe",15:"\u041D\u043E\u0440\u043C\u0430\u043D\u0434\u0441\u043A\u0430\u044F"
,16:"Ganado Normando",18:"\u041D\u043E\u0440\u043C\u0430\u043D\u0434\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.PAR={2:"\u041F\u0430\u0440\u0442\u0435\u043D\u0435\u0437",0:"Parthenaise",7:
"Havainto",15:"\u041F\u0430\u0440\u0442\u0435\u043D\u0435\u0437",18:"\u041F\u0430\u0440\u0442\u0435\u043D\u0435\u0437"
};C.PIE={4:"piemon\u0165an\u0161tina",0:"Piedmontese",5:"Piemontees",6:"PIE",8:"Pi\xE9montais"
,9:"Piemonteser",15:"\u041F\u044C\u0435\u043C\u043E\u043D\u0442\u0441\u043A\u0430\u044F"
,18:"\u043F\'\u0454\u043C\u043E\u043D\u0442\u0441\u044C\u043A\u0438\u0439"};C.PIF={
1:"Pinzgauer, govedo",4:"Pinzgauer, hov\u011Bz\xED",0:"Pinzgauer, beef",5:"Pinzgauer, rundvlees"
,6:"PIF",8:"Pinzgauer,\nrace \xE0 viande",9:"Pinzgauer, Fleischnutzung",10:"Pinzgauer, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Pinzgauer, kj\xF8tt",15:"\u041F\u0438\u043D\u0446\u0433\u0430\u0443, \u043C\u044F\u0441\u043D\u0430\u044F"
,16:"Pinzgauer, carne",18:"\u041F\u0456\u043D\u0446\u0433\u0430\u0443\u0435\u0440, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.PIN={0:"Pinzgauer",6:"PIN",15:"\u041F\u0438\u043D\u0446\u0433\u0430\u0443",18:
"\u041F\u0456\u043D\u0446\u0433\u0430\u0443\u0435\u0440"};C.PS={1:"Pustertal Pied govedo"
,4:"Pustertalsk\xE9 skvrnit\xE9 skot",0:"Pustertal Pied Cattle",5:"Pustertaler Schecken Rund"
,6:"PS",7:"Pustertal -karja",8:"Pustertaler",9:"Pustertaler",13:"Pustertal Pied Storfe"
,15:"\u041F\u0443\u0441\u0442\u0435\u0440\u0442\u0430\u043B\u0435\u0440",16:"Ganado Pustertal Pied"
,18:"\u041F\u0443\u0441\u0442\u0435\u0440\u0442\u0430\u043B\u044C\u0441\u044C\u043A\u0430 "+
"\u043F\'\u0454\u0434\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.RBF={1:"njema\u010Dko crveno govedo",4:"n\u011Bmeck\xE9 \u010Derven\xE9 skvrnit\xE9, hov\u011Bz\xED"
,0:"German Red Pied, beef",5:"Duits Roodbont, rundvlees",6:"RBF",8:"Rotbunt / Pie rouge"
,9:"Rotbunt, Fleischnutzung",10:"German Red Pied, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"German Red Pied, kj\xF8tt",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Pardo Alem\xE1n Rojo, carne",18:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u0447\u0435\u0440\u0432\u043E\u043D\u0430 "+
"\u043F\u043B\u044F\u043C\u0438\u0441\u0442\u0430, \u044F\u043B\u043E\u0432\u0438\u0447\u0438\u043D\u0430"
};C.RBT={1:"crveni Hol\u0161tajn",2:"\u0420\u0435\u0434 \u0445\u043E\u043B\u0449\u0430\u0439\u043D"
,4:"\u010Cerven\xFD Hol\u0161t\xFDn",0:"Red Holstein",5:"Roodbont Holstein",6:"RBT"
,8:"Pie rouge",9:"Holstein-Rotbunt",13:"R\xF8d Holstein",15:"\u0413\u043E\u043B\u0448\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F"
,16:"Holstein Rojo",18:"\u0427\u0435\u0440\u0432\u043E\u043D\u0430 \u0413\u043E\u043B\u044C\u0448\u0442\u0438\u043D\u0441\u044C\u043A\u0430 "+
"\u043F\u043E\u0440\u043E\u0434\u0430"};C.RDN={1:"Crveno njema\u010Dko govedo",4:
"N\u011Bmeck\xFD \u010Derven\xFD strak\xE1\u010D",0:"German Red Pied",5:"Duits roodbont"
,6:"RDN",8:"Pie rouge\xA0/\nrace viande/lait",9:"Rotbunt, Doppelnutzung",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F, "+
"\u0434\u0432\u043E\u0439\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
,16:"Pardo Alem\xE1n Rojo",18:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u0447\u0435\u0440\u0432\u043E\u043D\u0430 "+
"\u043F\u043B\u044F\u043C\u0438\u0441\u0442\u0430"};C.RHV={1:"Crveno govedo",4:"\u010Cerven\xFD horsk\xFD skot"
,0:"Rotes H\xF6henvieh",5:"Rood Bergvee",6:"RHV",8:"Vogelsberger",15:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0433\u043E\u0440\u043D\u0430\u044F"
,18:"\u0427\u0435\u0440\u0432\u043E\u043D\u0430 \u0433\u0456\u0440\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.ROM={1:"Romagnola govedo",4:"Romagnolsk\xFD skot"
,0:"Romagnola Cattle",5:"Romagnola-runderen",6:"ROM",8:"Romagnola",9:"Romagnola"
,15:"\u0420\u043E\u043C\u0430\u043D\u044C\u043E\u043B\u0430",16:"Ganado Romagnola"
,18:"\u0420\u043E\u043C\u0430\u043D\u044C\u0439\u043E\u043B\u0430 (\u0441\u043A\u043E\u0442\u0438\u043D\u0430)"
};C.RV={1:"Angler govedo",4:"Angeln\u0161t\xED skot",0:"Angeln cattle\n(old breed)"
,5:"Angelnvee",6:"RV",8:"Rouge de la Baltic/\nAngler",9:"Rotvieh, Alter Angler",
10:"Angeln cattle\n(\u03C0\u03B1\u03BB\u03B9\u03AC \u03C1\u03AC\u03C4\u03C3\u03B1)"
,13:"Angeln storfe\n(gammel rase)",15:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u043A\u0430\u044F, \u0441\u0442\u0430\u0440\u043E\u0439 "+
"\u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438",16:"Ganado Angeln (raza antigua)"
,18:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.RVA={1:"Angler stoka",4:"Angelnsk\xFD skot",0:"Angeln cattle",5:"Angelnvee",
6:"RVA",8:"Angler",9:"Angler",13:"Angeln storfe",15:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u043A\u0430\u044F"
,16:"Ganado Angeln",18:"\u0410\u043D\u0433\u0435\u043B\u044C\u0441\u044C\u043A\u0430 \u0445\u0443\u0434\u043E\u0431\u0430"
};C.SAL={1:"Salers stoka",0:"Salers",6:"M\xFC\xFCjad",15:"\u0421\u0430\u043B\u0435\u0440\u0441\u043A\u0430\u044F (\u0421\u0430\u043B\u0435\u0440\u0441)"
,18:"\u0421\u0430\u043B\u0435\u0440\u0438"};C.SBT={2:"\u0425\u043E\u043B\u0449\u0430\u0439\u043D \u0444\u0440\u0435\u0437\u0438\u0439\u0441\u043A\u043E"
,4:"Hol\u0161t\xFDnsk\xFD fr\xEDzsk\xFD",0:"Holstein Friesian",5:"Holstein-Friesian"
,6:"Holstein",8:"Holstein",9:"Holstein-\nSchwarzbunt",15:"\u0413\u043E\u043B\u0448\u0442\u0438\u043D\u043E-\u0444\u0440\u0438\u0437\u0441\u043A\u0430\u044F"
,16:"Vaca Holstein",18:"\u0413\u043E\u043B\u044C\u0448\u0442\u0438\u043D\u0441\u044C\u043A\u0430 "+
"\u0444\u0440\u0456\u0437\u044C\u043A\u0430"};C.SD={4:"Ji\u017En\xED Devon",0:"South Devon"
,5:"Zuid-Devon",6:"SD",15:"\u042E\u0436\u043D\u043E-\u0434\u0435\u0432\u043E\u043D\u0441\u043A\u0430\u044F"
,18:"\u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0438\u0439 \u0414\u0435\u0432\u043E\u043D"
};C.SH={1:"njema\u010Dki Shorthorn",4:"N\u011Bmeck\xFD strak\xE1\u010D",0:"German Shorthorn"
,5:"Duitse Korthaar",6:"SH",8:"Shorthorn allemand",9:"Deutsches Shorthorn",15:"\u0428\u043E\u0440\u0442\u0433\u043E\u0440\u043D\u0441\u043A\u0430\u044F"
,16:"Shorthorn Alem\xE1n",18:"\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0438\u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0440\u043E\u0433\u0438\u0439"
};C.SON={1:"Ostala ukr\u0161tenja",2:"\u041A\u0440\u0443\u0441\u0442\u043E\u0441\u043A\u0430"
,4:"Jin\xE1 k\u0159\xED\u017Een\xED",0:"Other crossbreeds",5:"Andere kruisingen"
,6:"SON",8:"Autres croisements",9:"Sonstige Kreuzungen",10:"\u0386\u03BB\u03BB\u03B1 \u03B6\u03CE\u03B1 \u03BC\u03B9\u03BA\u03C4\u03AE\u03C2 "+
"\u03C1\u03AC\u03C4\u03C3\u03B1\u03C2",13:"Andre kryssninger",15:"\u041F\u0440\u043E\u0447\u0438\u0435 \u0441\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u044F"
,16:"Otras razas cruzadas",18:"\u0406\u043D\u0448\u0456 \u0441\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F"
};C.TAU={1:"Druga goveda",4:"Jin\xFD skot (Bos taurus)",0:"Other cattle\n(Bos taurus)"
,5:"Andere runderen\n(Bos taurus)",6:"TAU",8:"Autres bovins de race taurine",9:"Sonstige taurine Rinder (Bos taurus)"
,10:"\u0386\u03BB\u03BB\u03BF \u03B2\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2\n(Bostaurus)"
,13:"Andre storfe\n(Bos taurus)",15:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421 (boss taurus)"
,16:"Otros bovinos\n(Bos taurus)",18:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421 (boss taurus)"
};C.TIN={1:"Druga goveda",4:"Ostatn\xED skot (Bos indicus)",0:"Other cattle\n(Taur indicus)"
,5:"Ander vee\n(Taur indicus)",6:"TIN",8:"Autres bovins taur indicus",9:"Sonstige taur indicus-Rinder"
,10:"\u0386\u03BB\u03BB\u03BF \u03B2\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2\n(Taurindicus)"
,13:"Andre storfe\n(Taur indicus)",15:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421 (taur indicus)"
,16:"Otros bovinos\n(Taur indicus)",18:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421 (taur indicus)"
};C.TLH={1:"Teksas Longhorn",2:"\u0422\u0435\u043A\u0441\u0430\u0441\u043A\u0438 \u041B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,0:"Texas Longhorn",10:"\u03A4\u03AD\u03BE\u03B1\u03C2 \u039B\u03CC\u03BD\u03B3\u03BA\u03C7\u03BF\u03C1\u03BD"
,15:"\u0422\u0435\u0445\u0430\u0441\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
,18:"\u0422\u0435\u0445\u0430\u0441\u044C\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
};C.TLM={1:"Telemark govedo",4:"Telemarksk\xFD skot",0:"Telemark Cattle",5:"Telemarkvee"
,6:"TLM",8:"Bovins T\xE9l\xE9mark",9:"Telemark",13:"Telemarksfe",15:"\u0422\u0435\u043B\u0435\u043C\u0430\u0440\u043A\u0441\u043A\u0430\u044F"
,16:"Ganado Telemark",18:"\u0422\u0435\u043B\u0435\u043C\u0430\u0440\u043A\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.TUX={1:"Tuxer",4:"Tux dobytek",0:"Tux Cattle"
,5:"Tux Vee",6:"TUX",8:"Tux-zillertal",9:"Tuxer",13:"Tux Storfe",15:"\u0422\u0443\u043A\u0441\u043A\u0430\u044F"
,16:"Ganado Tux",18:"\u0422\u0430\u043A\u0441 \u041A\u0430\u0442\u0442\u043B"};C.
UCK={1:"osoba iz Uckermarka",4:"Uckerm\xE4r\u010Dan",0:"Uckerm\xE4rker",6:"UCK",
15:"\u0423\u043A\u0435\u0440\u043C\u044D\u0440\u043A\u0441\u043A\u0430\u044F",18:
"\u0423\u043A\u0435\u0440\u043C\u0430\u0440\u043A\u0435\u0440"};C.UST={1:"Ma\u0111arsko sivo govedo"
,4:"Ma\u010Farsk\xFD \u0161ed\xFD",0:"Hungarian Grey",5:"Hongaarse Grijs",6:"UST"
,8:"B\u0153uf gris de Hongrie",9:"Ungarisches Steppenrind",13:"Ungarsk Gr\xE5",15:
"\u0412\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0430\u044F \u0441\u0435\u0440\u0430\u044F"
,16:"Ganado H\xFAngaro",18:"\u0443\u0433\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u0441\u0456\u0440\u0438\u0439"
};C.VR={1:"Vogesen govedo",4:"Vosgesk\xFD skot",0:"Vogesenrind",5:"Vogezenrund",
6:"Vosgesi rinne",8:"Vosgienne",9:"Vogesen-Rind",15:"\u0412\u043E\u0433\u0435\u0437\u0441\u043A\u0430\u044F"
,16:"Vaca de los Vosgos",18:"\u041F\u043E\u0440\u043E\u0434\u0430 \u043A\u043E\u0440\u0456\u0432 \u0437 "+
"\u0412\u043E\u0433\u0435\u0437\u0456\u0432"};C.VW={1:"Vorderwald govedo",4:"Vorderwaldsk\xFD skot"
,0:"Vorderwald Cattle",5:"Vorderwaldrunderen",6:"Vorderwaldi veis",8:"Vorderw\xE4lder"
,9:"Vorderw\xE4lder",13:"Vorderwald Storfe",15:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434"
,16:"Ganado de Vorderwald",18:"\u0412\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434\u0441\u044C\u043A\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.VWF={1:"Vorderwald govedo za tov",4:"Vorderwaldsk\xFD skot, hov\u011Bz\xED maso"
,0:"Vorderwald Cattle, beef",5:"Vorderwaldvee, rundvlees",6:"Vorderwaldi veised, veiseliha"
,8:"Vorderw\xE4lder, engraissement",9:"Vorderw\xE4lder, Fleischnutzung",10:"Vorderwald Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Vorderwald kj\xF8ttfe",15:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434, \u043C\u044F\u0441\u043D\u0430\u044F"
,16:"Ganado de Vorderwald, carne",18:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434, \u043C\'\u044F\u0441\u043D\u0430"
};C.WAG={0:"Wagy\u016B",6:"WAG",8:"Wagyu",15:"\u0412\u0430\u0433\u044E",18:"\u0412\u0430\u0433\u044E"
};C.WB={4:"vel\u0161sko-\u010Dern\xFD",0:"Welsh-Black",5:"Welsh-Zwart",6:"WB",13:
"Welsh-svart",15:"\u0423\u044D\u043B\u044C\u0441\u043A\u0430\u044F \u0447\u0451\u0440\u043D\u0430\u044F"
,18:"\u0432\u0430\u043B\u043B\u0456\u0439\u0441\u044C\u043A\u043E-\u0447\u043E\u0440\u043D\u0438\u0439"
};C.WBB={2:"\u0411\u0435\u043B\u0433\u0438\u0439\u0441\u043A\u043E \u0441\u0438\u043D\u044C\u043E"
,4:"Belgick\xFD modr\xFD",0:"Belgian blue",5:"Belgisch blauw",6:"WBB",8:"Blanc bleu belge"
,9:"Wei\xDFblaue Belgier",13:"Belgisk bl\xE5",15:"\u0411\u0435\u043B\u044C\u0433\u0438\u0439\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u0443\u0431\u0430\u044F"
,18:"\u0411\u0435\u043B\u044C\u0433\u0456\u0439\u0441\u044C\u043A\u0430 \u0431\u043B\u0430\u043A\u0438\u0442\u043D\u0430"
};C.WGA={4:"B\xEDl\xFD Galloway",0:"White Galloway",5:"Witte Galloway",6:"WGA",8:
"White Galloway (blanche)",15:"\u0411\u0435\u043B\u044B\u0439 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
,18:"\u0411\u0456\u043B\u0438\u0439 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
};C.WIT={0:"Witrug",5:"Witte rug",6:"WIT",15:"\u0412\u0438\u0442\u0440\u0443\u0433"
,18:"\u0412\u0456\u0442\u0440\u0443\u0433"};C.WL={1:"vodeni bufalo",2:"\u0412\u043E\u0434\u0435\u043D \u0431\u0438\u0432\u043E\u043B"
,4:"Vodn\xED buvol",0:"Water buffalo",5:"Waterbuffel",6:"WL",8:"Buffle d\u2019eau / karbau"
,9:"Wasserb\xFCffel",13:"Vannb\xF8ffel",15:"\u0412\u043E\u0434\u044F\u043D\u043E\u0439 \u0431\u0443\u0439\u0432\u043E\u043B"
,18:"\u0412\u043E\u0434\u044F\u043D\u0438\u0439 \u0431\u0443\u0439\u0432\u043E\u043B"
};C.WP={1:"bijeli park",4:"B\xEDl\xFD park",0:"White Park",5:"Wit Park",6:"WP",15:
"\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u0430\u044F"
,18:"\u0411\u0456\u043B\u0438\u0439 \u041F\u0430\u0440\u043A"};C.WSH={2:"\u0411\u044F\u043B \u0428\u043E\u0440\u0442\u0445\u043E\u0440\u043D"
,0:"Whitbred Shorthorn",6:"Whitbreadi l\xFChisarv",10:"\u039B\u03B5\u03C5\u03BA\u03CC\u03BA\u03B5\u03C1\u03C9\u03C2 \u03A3\u03BF\u03C1\u03C4\u03C7\u03BF\u03C1\u03BD"
,15:"\u0423\u0438\u0442\u0431\u0440\u0435\u0434 \u0428\u043E\u0440\u0442\u0433\u043E\u0440\u043D"
,18:"\u0412\u0456\u0442\u0431\u0440\u0435\u0434 \u043A\u043E\u0440\u043E\u0442\u043A\u0430 "+
"\u0440\u043E\u0433\u0430"};C.XFF={1:"Ukr\u0161tenje mesno govedo x mesno govedo"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u0435\u0441\u043E "+
"\u0445 \u043C\u0435\u0441\u043E",4:"K\u0159\xED\u017Een\xED hov\u011Bz\xEDho \xD7 hov\u011Bz\xEDho"
,0:"Crossbreed beef \xD7 beef",5:"Kruising rund \xD7 rund",6:"Ristand lihaveis \xD7 lihaveis"
,8:"Bovins \xE0 viande \xD7 bovins \xE0 viande",9:"Kreuzung Fleischrind \xD7 Fleischrind"
,10:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Kryssing kj\xF8tt \xD7 kj\xF8tt",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044F\u0441\u043D\u043E\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u044F\u0441\u043D\u043E\u0439 \u0441\u043A\u043E\u0442"
,18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\'\u044F\u0441\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\'\u044F\u0441\u043D\u0430 "+"\u0445\u0443\u0434\u043E\u0431\u0430"
};C.XFM={1:"Ukr\u0161tanje mesno govedo x mlije\u010Dno govedo",2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u0435\u0441\u043E "+
"\xD7 \u043C\u043B\u044F\u043A\u043E",4:"K\u0159\xED\u017Eenec masn\xE9ho a ml\xE9\u010Dn\xE9ho skotu"
,0:"Crossbreed beef \xD7 milk",5:"Kruising vlees \xD7 melk",6:"Ristand lihaveis \xD7 piimalehm"
,8:"Bovins \xE0 viande \xD7 bovins laitiers",9:"Kreuzung Fleischrind \xD7 Milchrind"
,10:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Kryssing kj\xF8tt x melk",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044F\u0441\u043D\u043E\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442",18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\'\u044F\u0441\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.XMM={1:"Ukr\u0161tanje mlije\u010Dno govedo x mlije\u010Dno govedo"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u043B\u044F\u043A\u043E "+
"\xD7 \u043C\u043B\u044F\u043A\u043E",4:"K\u0159\xED\u017Eenec ml\xE9ko \xD7 ml\xE9ko"
,0:"Crossbreed milk \xD7 milk",5:"Kruising melk \xD7 melk",6:"Ristand piimalehm \xD7 piimalehm"
,8:"Bovins laitiers \xD7 bovins laitiers",9:"Kreuzung Milchrind \xD7 Milchrind",
10:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Kryssing melk \xD7 melk",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442",18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.XZF={1:"Kri\u017Eanac dvostruke namjene \xD7 govedina"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u0441 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \xD7 \u0433\u043E\u0432\u0435\u0436\u0434\u043E "+
"\u043C\u0435\u0441\u043E",4:"K\u0159\xED\u017Eenec dvoj\xEDho vyu\u017Eit\xED \xD7 maso"
,0:"Crossbreed dual-use \xD7 beef",5:"Kruising dubbeldoel \xD7 vlees",6:"Ristand kaksikotstarbeline \xD7 lihaveis"
,7:"Risteytys kaksik\xE4ytt\xF6inen \xD7 naudanliha",8:"Croisement bovin \xE0 deux fins \xD7 b\u0153uf de boucherie"
,9:"Kreuzung Zweinut~zungsrind \xD7 Fleischr.",10:"\u0394\u03B9\u03C0\u03BB\u03AE\u03C2 \u03C7\u03C1\u03AE\u03C3\u03B7\u03C2 "+
"\u03C5\u03B2\u03C1\u03B9\u03B4\u03B9\u03BA\u03CC \xD7 \u03BC\u03BF\u03C3\u03C7\u03B1\u03C1\u03AF\u03C3\u03B9\u03BF"
,13:"Kryssavl dobbeltbruk \xD7 kj\xF8ttfe",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \xD7 \u0433\u043E\u0432\u044F\u0434\u0438\u043D\u0430"
,18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u0433\u043E "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \xD7 "+"\u043C\'\u044F\u0441\u043E"
};C.XZM={1:"Kri\u017Eani dvostruki \xD7 mlijeko",2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u0441 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \xD7 \u043C\u043B\u044F\u043A\u043E"
,4:"K\u0159\xED\u017Eenec s dvoj\xEDm \xFA\u010Delem \xD7 ml\xE9ko",0:"Crossbreed dual-use \xD7 milk"
,5:"Kruising dubbel gebruik \xD7 melk",6:"Ristand topeltkasutusega \xD7 piim",7:
"Kaksik\xE4ytt\xF6isen karjan risteytt\xE4minen \xD7 maito.",8:"Croisement bovin \xE0 deux fins \xD7 bovin laitier"
,9:"Kreuzung Zweinut~zungsrind \xD7 Milchr.",10:"\u0394\u03B9\u03B1\u03C3\u03C4\u03B1\u03C5\u03C1\u03C9\u03BC\u03AD\u03BD\u03B7\u03C2 "+
"\u03C7\u03C1\u03AE\u03C3\u03B7\u03C2 \xD7 \u03B3\u03AC\u03BB\u03B1",13:"Kryssavl dobbeltbruk \xD7 melk"
,15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \xD7 \u043C\u043E\u043B\u043E\u043A\u043E"
,18:"\u0421\u0445\u0440\u0435\u0449\u0435\u043D\u043D\u044F \u0434\u0432\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u0438\u0445 "+
"\xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445"};C.XZZ={1:"Hibrid dvostruke namjene \xD7 dvostruke namjene"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430 \xD7 \u0434\u0432\u043E\u0439\u043D\u0430 "+
"\u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430",4:"K\u0159\xED\u017Eenec dvoj\xEDho vyu\u017Eit\xED \xD7 dvoj\xED vyu\u017Eit\xED"
,0:"Crossbreed dual-use \xD7 dual-use",5:"Kruising dubbel gebruik \xD7 dubbel gebruik"
,6:"Ristkasutusega topeltkasutus \xD7 topeltkasutus",7:"Risteytys kaksik\xE4ytt\xF6inen \xD7 kaksik\xE4ytt\xF6inen"
,8:"Croisement double fins \xD7 double fins",9:"Kreuzung Zweinut~zung \xD7 Zweinutzung"
,10:"\u0394\u03B9\u03C0\u03BB\u03AE\u03C2 \u03C7\u03C1\u03AE\u03C3\u03B7\u03C2 "+
"\u03B4\u03B9\u03B1\u03C3\u03C4\u03B1\u03CD\u03C1\u03C9\u03C3\u03B7 \xD7 "+"\u03B4\u03B9\u03C0\u03BB\u03AE\u03C2 \u03C7\u03C1\u03AE\u03C3\u03B7\u03C2"
,13:"Krysning dobbeltbruk \xD7 dobbeltbruk",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \xD7 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E "+
"\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u0433\u043E "+
"\u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \xD7 "+"\u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
};C.YAK={4:"jakutsk\xFD",0:"Yakutian",5:"Jakoets",6:"Jakuudi",8:"Yack",9:"Yak",15:
"\u042F\u043A",18:"\u042F\u043A"};C.ZEB={1:"minijaturna zebu",0:"Miniature Zebu"
,5:"Miniatuur Zebu",6:"ZEB",8:"Zebu miniature",9:"Zwerg-Zebu",15:"\u041A\u0430\u0440\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u0417\u0435\u0431\u0443"
,18:"\u041C\u0456\u043D\u0456\u0430\u0442\u044E\u0440\u043D\u0438\u0439 \u0437\u0435\u0431\u0443"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */