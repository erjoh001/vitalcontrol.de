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
);if(index.ack)throw new Error("The unit file 'Breeds.js' included twice!");index.
ack=(function(){var A=index;var C={};

C.AA={2:"\u0410\u0431\u0440\u0435\u0434\u0438\u043D \u0430\u043D\u0433\u044A\u0441"
,0:"Aberdeen Angus",15:"\u0410\u0431\u0435\u0440\u0434\u0438\u043D-\u0430\u043D\u0433\u0443\u0441\u0441\u043A\u0430\u044F"
};C.AO={1:"Tele mu\u0161ko",0:"Heck Cattle",8:"B\xE9tail Aurochs",9:"Auerochse (Heckrind)"
,10:"Heck",15:"\u0422\u0443\u0440 (\u0431\u044B\u043A)",16:"Uro (ganado de Heck)"
,18:"\u0422\u0443\u0440 (\u0431\u0438\u043A)"};C.AS={2:"\u0410\u0439\u044A\u0440\u0448\u0438\u0440"
,0:"Ayrshire",15:"\u0410\u0439\u0440\u0448\u0438\u0440\u0441\u043A\u0430\u044F"};
C.AT={0:"Ansbach-Triesdorfer",15:"\u0410\u043D\u0441\u0431\u0430\u0445-\u0422\u0440\u0438\u0441\u0434\u043E\u0440\u0444\u0441\u043A\u0430\u044F"
};C.AU={1:"Aubrac",0:"Aubrac Cattle",8:"Aubrac",9:"Aubrac",10:"Aubrac",13:"Aubrac storfe"
,15:"\u041E\u0431\u0440\u0430\u043A",16:"Ganado Aubrac"};C.BA={2:"\u0411\u043B\u043E\u043D\u0434 \u0414\u2019 \u0410\u043A\u0438\u0442\u0435\u043D"
,0:"Blonde d\u2019Aquitaine",13:"Blonde d`Aquitaine",15:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0430\u043A\u0432\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F"
,16:"Blonde de Aquitania"};C.BAZ={0:"Bazadaise",15:"\u0411\u0430\u0437\u0430\u0434\u044D\u0437"
,18:"\u0411\u0430\u0437\u0430\u0434\u0435\u0437"};C.BB={2:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u043E \u0441\u0438\u043D\u044C\u043E"
,0:"British Blue",15:"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u0443\u0431\u0430\u044F"
,16:"Brit\xE1nica Blue"};C.BE={2:"\u0411\u0438\u0444\u0430\u043B\u043E",0:"Beefalo"
,15:"\u0411\u0438\u0444\u0430\u043B\u043E",18:"\u0411\u0456\u0444\u0430\u043B\u043E"
};C.BGA={2:"\u0413\u0430\u043B\u043E\u0443\u0435\u0439",0:"Belted Galloway",8:"Galloway ceintur\xE9e"
,15:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u043A\u0430\u044F",16:
"Galloway cintado"};C.BIS={2:"\u0411\u0438\u0437\u043E\u043D",0:"Bison",9:"Bison/Wisent"
,15:"\u0411\u0438\u0437\u043E\u043D/\u0437\u0443\u0431\u0440",16:"Bisonte",18:"\u0411\u0456\u0437\u043E\u043D/\u0437\u0443\u0431\u0440"
};C.BLA={0:"Blaarkop",15:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F (Blaarkop)"
};C.BLH="British Longhorn";C.BRA={0:"Brangus",15:"\u0411\u0440\u0430\u043D\u0433\u0443\u0441"
};C.BRN={0:"Brahman",15:"\u0411\u0440\u0430\u0445\u043C\u0430\u043D",18:"\u0411\u0440\u0430\u0445\u043C\u0430\u043D"
};C.BV={0:"Braunvieh",8:"Brune des Alpes",15:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F"
,16:"Pardo Suizo"};C.BVF={0:"Braunvieh, beef",6:"Braunvieh beef",8:"Brune des Alpes, engraissement"
,9:"Braunvieh, Fleischnutzung",10:"Braunvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Braunvieh, kj\xF8tt",15:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Pardo Suizo, carne"};C.CHA={2:"\u0428\u0430\u0440\u043E\u043B\u0435"
,0:"Charolais",15:"\u0428\u0430\u0440\u043E\u043B\u0435\u0437\u0441\u043A\u0430\u044F"
};C.CHI={2:"\u041A\u0438\u0430\u043D\u0438\u043D\u0430",0:"Chianina",15:"\u041A\u044C\u044F\u043D\u0438\u043D\u0430"
};C.DA={1:"Njema\u010Dki angus",0:"German Angus",8:"Angus Allemand",9:"Deutsch Angus"
,15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0430\u043D\u0433\u0443\u0441"
,16:"Angus alem\xE1n"};C.DBV={1:"DBV",0:"Braunvieh (old breed)",6:"Braunvieh",8:
"Brune des Alpes (ancienne race)",9:"Braunvieh alter Zuchtrichtung",10:"Braunvieh (\u03C0\u03B1\u03BB\u03B9\u03AC \u03C1\u03AC\u03C4\u03C3\u03B1)"
,13:"Braunvieh (gammel rase)",15:"\u0411\u0443\u0440\u0430\u044F \u0448\u0432\u0438\u0446\u043A\u0430\u044F, "+
"\u0441\u0442\u0430\u0440\u043E\u0439 \u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438"
,16:"Braunvieh (raza vieja)"};C.DEX={2:"\u0414\u0435\u043A\u0441\u0442\u044A\u0440"
,0:"Dexter",15:"\u0414\u0435\u043A\u0441\u0442\u0435\u0440"};C.DSN={1:"Njema\u010Dka crna krava"
,0:"German Black Pied",8:"Pied noir allemand",9:"Schwarzbuntes Niederungsrind",15:
"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u0447\u0451\u0440\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F"
,16:"Pardo Suizo Alem\xE1n"};C.EBS={0:"Ennstaler Bergscheck",9:"Ennstaler Bergschecken"
};C.ERI={0:"Herens",8:"Vache d\'H\xE9rens",9:"Eringer"};C.EVO={0:"\xC9vol\xE8ne"
,9:"Evol\xE8ner",16:" \xC9vol\xE8ne"};C.FL={1:"simental",0:"Fleckvieh",6:"Fleckiev"
,15:"\u0424\u043B\u0435\u043A\u0444\u0438"};C.FLF={1:"simentalsko govedo",0:"Fleckvieh, beef"
,8:"Fleckvieh-\nSimmental",9:"Fleckvieh-\nSimmental",10:"Fleckvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Fleckvieh, kj\xF8tt",15:"\u0424\u043B\u0435\u043A\u0444\u0438-\n\u0421\u0438\u043C\u043C\u0435\u043D\u0442\u0430\u043B\u044C"
,16:"Fleckvieh, carne"};C.FR={0:"Fj\xE4ll",9:"Fj\xE4ll-Rind",13:"Svensk fjellku"
,15:"Fj\xE4ll - \u0448\u0432\u0435\u0434\u0441\u043A\u0430\u044F \u043F\u043E\u0440\u043E\u0434\u0430"
,16:"Raza Fj\xE4ll"};C.GAL={1:"Galloway govedo",2:"\u0413\u0430\u043B\u043E\u0443\u0435\u0439"
,0:"Galloway Cattle",8:"Galloway",9:"Galloway",13:"Galloway Storfe",15:"\u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439\u0441\u043A\u0430\u044F"
,16:"Galloway"};C.GR={1:"Glan govedo",0:"Glan Cattle",8:"Bovins Glan",9:"Glanrind"
,13:"Glan Storfe",15:"\u0413\u043B\u0430\u043D \u041A\u0420\u0421",16:"Ganado Glan"
};C.GRV={1:"Tirolsko govedo",0:"Tyrolean Grey",8:"Grauvieh / Race Grise",9:"Grauvieh"
,13:"Tyroler Gr\xE5",15:"\u0422\u0438\u0440\u043E\u043B\u044C\u0441\u043A\u0430\u044F \u0441\u0435\u0440\u0430\u044F"
,16:"Ganado Glan"};C.GV={1:"\u017Euto govedo",0:"Gelbvieh",6:"Gelvbieh",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0413\u0435\u043B\u0431\u0444\u0438"
};C.GVF={1:"\u017Euto june",0:"Gelbvieh, beef",8:"Gelbvieh / engraissement",9:"Gelbvieh, Fleischnutzung"
,10:"Gelbvieh, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Gelbvieh, kj\xF8tt",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0413\u0435\u043B\u0431\u0444\u0438, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Gelbvieh"};C.HE={2:"\u0425\u0435\u0440\u0435\u0444\u043E\u0440\u0434"
,0:"Hereford",15:"\u0413\u0435\u0440\u0435\u0444\u043E\u0440\u0434\u0441\u043A\u0430\u044F"
};C.HIN={1:"Hinterwald govedo",0:"Hinterwald Cattle",8:"Bovins de l\u2019Hinterwald"
,9:"Hinterw\xE4lder",13:"Hinterwald Storfe",15:"\u0425\u0438\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440"
,16:"Ganado Hinterwald"};C.HLD={1:"Highland govedo",0:"Highland Cattle",8:"Highland"
,9:"Highland",13:"H\xF8ylandsfe",15:"\u0425\u0430\u0439\u043B\u0435\u043D\u0434"
,16:"Ganado Hinterwald"};C.HWF={1:"Hintervald june",0:"Hinterwald Cattle, beef",
8:"Vache d\u2019Hinterwald, engraissement",9:"Hinterw\xE4lder, Fleischnutzung",10:
"Hinterwald Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Hinterwald Cattle, kj\xF8tt",15:"\u0425\u0438\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Ganado Hinterwald, carne",18:"\u0425\u0456\u043D\u0442\u0435\u0440\u0432\u0435\u043B\u044C\u0434\u0435\u0440, "+
"\u043C\'\u044F\u0441\u043D\u0430"};C.IND={1:"ostala goveda",2:"\u0417\u0435\u0431\u0443"
,0:"Other Zebu cattle",8:"Autres bovins z\xE9bus",9:"Sonstige Zebu-\nRinder (Bos indicus)"
,10:"Zebu cattle",13:"Andre Zebu storfe",15:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421"
,16:"Otras razas de ganado ceb\xFA (Bos indicus)",18:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421"
};C.JER={1:"D\u017Eersej",2:"\u0414\u0436\u0435\u0440\u0441\u0435\u0439",0:"Jersey"
,8:"Jersiaise",15:"\u0414\u0436\u0435\u0440\u0441\u0435\u0439\u0441\u043A\u0430\u044F"
};C.LAK={0:"Dutch Belted",8:"Lakenvelder",9:"Lakenvelder",13:"Nederlandsk Beltet"
,15:"\u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F \u043E\u043F\u043E\u044F\u0441\u0430\u043D\u043D\u0430\u044F"
,16:"Lakenvelder"};C.LG={0:"Luing",15:"\u041B\u0443\u0438\u043D\u0433\u0441\u043A\u0438\u0439 \u041A\u0420\u0421"
};C.LH={2:"\u041B\u043E\u043D\u0433 \u0425\u043E\u0440\u043D",0:"Longhorn",13:"Langhorn"
,15:"\u0422\u0435\u0445\u0430\u0441\u0441\u043A\u0438\u0439 \u043B\u043E\u043D\u0433\u0445\u043E\u0440\u043D"
};C.LIM={2:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D",0:"Limousin",15:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D\u0441\u043A\u0430\u044F"
};C.LMP={0:"Limpurger",15:"\u041B\u0438\u043C\u043F\u0443\u0440\u0433\u0435\u0440"
};C.LPF={1:"limpurger june",0:"Limpurger, beef",8:"Limpurger, pour l\u2019engraissement"
,9:"Limpurger, Fleischnutzung",10:"Limpurger, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Limpurger, kj\xF8tt",15:"\u041B\u0438\u043C\u043F\u0443\u0440\u0433\u0435\u0440, \u043C\u044F\u0441\u043D\u0430\u044F"
,16:"Limpurger, carne",18:"\u041B\u0456\u043C\u043F\u0443\u0440\u0433\u0435\u0440, \u043C\'\u044F\u0441\u043D\u0430"
};C.LR={1:"lincoln red",0:"Lincoln Red",15:"\u041B\u0438\u043D\u043A\u043E\u043B\u044C\u043D\u0441\u043A\u0430\u044F "+
"\u043A\u0440\u0430\u0441\u043D\u0430\u044F",16:"Lincoln Rojo"};C.MA={0:"Maine-Anjou"
,8:"Rouge des pr\xE9s",15:"\u041C\u0435\u043D-\u0430\u043D\u0436\u0443"};C.MAR={
0:"Marchigiana",15:"\u041C\u0430\u0440\u043A\u0438\u0434\u0436\u0430\u043D\u0441\u043A\u0430\u044F"
};C.MGR="Murray Grey";C.MON={2:"\u041C\u043E\u043D\u0442\u0431\u0435\u043B\u0438\u0430\u0440\u0434"
,0:"Montb\xE9liarde",6:"Montbeliard",9:"Montb\xE9liard",15:"\u041C\u043E\u043D\u0431\u0435\u043B\u044C\u044F\u0440"
};C.MUR="Murbodner";C.MW={0:"Murnau-Werdenfels Cattle",6:"MW",8:"Murnau-Werdenfels"
,9:"Murnau-\nWerdenfelser",13:"Murnau-Werdenfels Storfe",15:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441"
,16:"Ganado Murnau-Werdenfels"};C.MWF={1:"Murnau-Werdenfels Cattle, govedo",0:"Murnau-Werdenfels Cattle, beef"
,6:"MWB",8:" Murnau-Werdenfels pour l\u2019engraissement",9:"Murnau-Werdenfel~ser, Fleischnutzung"
,10:"Murnau-Werdenfels Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Murnau-Werdenfels Storfe, kj\xF8tt",15:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Ganado Murnau-Werdenfels, carne",18:"\u041C\u0443\u0440\u043D\u0430\u0443-\u0412\u0435\u0440\u0434\u0435\u043D\u0444\u0435\u043B\u044C\u0441, "+
"\u043C\'\u044F\u0441\u043D\u0430"};C.NOR={0:"Normande Cattle",8:"Normande",9:"Normanne"
,13:"Normande storfe",15:"\u041D\u043E\u0440\u043C\u0430\u043D\u0434\u0441\u043A\u0430\u044F"
,16:"Ganado Normando"};C.PAR="Parthenaise";C.PIE={0:"Piedmontese",6:"PIE",8:"Pi\xE9montais"
,9:"Piemonteser",15:"\u041F\u044C\u0435\u043C\u043E\u043D\u0442\u0441\u043A\u0430\u044F"
};C.PIF={1:"Pinzgauer, govedo",0:"Pinzgauer, beef",6:"PIF",8:"Pinzgauer,\nrace \xE0 viande"
,9:"Pinzgauer, Fleischnutzung",10:"Pinzgauer, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Pinzgauer, kj\xF8tt",15:"\u041F\u0438\u043D\u0446\u0433\u0430\u0443, \u043C\u044F\u0441\u043D\u0430\u044F"
,16:"Pinzgauer, carne"};C.PIN={0:"Pinzgauer",6:"PIN",15:"\u041F\u0438\u043D\u0446\u0433\u0430\u0443"
};C.PS={1:"Pustertal Pied govedo",0:"Pustertal Pied Cattle",6:"PS",7:"Pustertal -karja"
,8:"Pustertaler",9:"Pustertaler",13:"Pustertal Pied Storfe",15:"\u041F\u0443\u0441\u0442\u0435\u0440\u0442\u0430\u043B\u0435\u0440"
,16:"Ganado Pustertal Pied"};C.RBF={1:"njema\u010Dko crveno govedo",0:"German Red Pied, beef"
,6:"RBF",8:"Rotbunt / Pie rouge",9:"Rotbunt, Fleischnutzung",10:"German Red Pied, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"German Red Pied, kj\xF8tt",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F, "+
"\u043C\u044F\u0441\u043D\u0430\u044F",16:"Pardo Alem\xE1n Rojo, carne"};C.RBT={
1:"crveni Hol\u0161tajn",2:"\u0420\u0435\u0434 \u0445\u043E\u043B\u0449\u0430\u0439\u043D"
,0:"Red Holstein",6:"RBT",8:"Pie rouge",9:"Holstein-Rotbunt",13:"R\xF8d Holstein"
,15:"\u0413\u043E\u043B\u0448\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F"
,16:"Holstein Rojo"};C.RDN={1:"Crveno njema\u010Dko govedo",0:"German Red Pied",
6:"RDN",8:"Pie rouge\xA0/\nrace viande/lait",9:"Rotbunt, Doppelnutzung",15:"\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043A\u0440\u0430\u0441\u043D\u043E-\u043F\u0451\u0441\u0442\u0440\u0430\u044F, "+
"\u0434\u0432\u043E\u0439\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
,16:"Pardo Alem\xE1n Rojo"};C.RHV={1:"Crveno govedo",0:"Rotes H\xF6henvieh",6:"RHV"
,8:"Vogelsberger",15:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0433\u043E\u0440\u043D\u0430\u044F"
,16:"Rotes H\xF6henvieh (Esto parece ser una raza de ganado espec\xEDfica y "+"\"Rotes H\xF6henvieh\" se puede usar tal cual en espa\xF1ol)"
};C.ROM={1:"Romagnola govedo",0:"Romagnola Cattle",6:"ROM",8:"Romagnola",9:"Romagnola"
,15:"\u0420\u043E\u043C\u0430\u043D\u044C\u043E\u043B\u0430",16:"Ganado Romagnola"
};C.RV={1:"Angler govedo",0:"Angeln cattle\n(old breed)",6:"RV",8:"Rouge de la Baltic/\nAngler"
,9:"Rotvieh, Alter Angler",10:"Angeln cattle\n(\u03C0\u03B1\u03BB\u03B9\u03AC \u03C1\u03AC\u03C4\u03C3\u03B1)"
,13:"Angeln storfe\n(gammel rase)",15:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u043A\u0430\u044F, \u0441\u0442\u0430\u0440\u043E\u0439 "+
"\u0441\u0435\u043B\u0435\u043A\u0446\u0438\u0438",16:"Ganado Angeln (raza antigua)"
};C.RVA={1:"Angler stoka",0:"Angeln cattle",6:"RVA",8:"Angler",9:"Angler",13:"Angeln storfe"
,15:"\u0410\u043D\u0433\u0435\u043B\u044C\u043D\u0441\u043A\u0430\u044F",16:"Ganado Angeln"
};C.SAL={1:"Salers stoka",0:"Salers",6:"M\xFC\xFCjad",15:"\u0421\u0430\u043B\u0435\u0440\u0441\u043A\u0430\u044F (\u0421\u0430\u043B\u0435\u0440\u0441)"
};C.SBT={2:"\u0425\u043E\u043B\u0449\u0430\u0439\u043D \u0444\u0440\u0435\u0437\u0438\u0439\u0441\u043A\u043E"
,0:"Holstein Friesian",6:"Holstein",8:"Holstein",9:"Holstein-\nSchwarzbunt",15:"\u0413\u043E\u043B\u0448\u0442\u0438\u043D\u043E-\u0444\u0440\u0438\u0437\u0441\u043A\u0430\u044F"
,16:"Vaca Holstein"};C.SD={0:"South Devon",6:"SD",15:"\u042E\u0436\u043D\u043E-\u0434\u0435\u0432\u043E\u043D\u0441\u043A\u0430\u044F"
};C.SH={1:"njema\u010Dki Shorthorn",0:"German Shorthorn",6:"SH",8:"Shorthorn allemand"
,9:"Deutsches Shorthorn",15:"\u0428\u043E\u0440\u0442\u0433\u043E\u0440\u043D\u0441\u043A\u0430\u044F"
,16:"Shorthorn Alem\xE1n"};C.SON={1:"Ostala ukr\u0161tenja",2:"\u041A\u0440\u0443\u0441\u0442\u043E\u0441\u043A\u0430"
,0:"Other crossbreeds",6:"SON",8:"Autres croisements",9:"Sonstige Kreuzungen",10:
"\u0386\u03BB\u03BB\u03B1 \u03B6\u03CE\u03B1 \u03BC\u03B9\u03BA\u03C4\u03AE\u03C2 "+
"\u03C1\u03AC\u03C4\u03C3\u03B1\u03C2",13:"Andre kryssninger",15:"\u041F\u0440\u043E\u0447\u0438\u0435 \u0441\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u044F"
,16:"Otras razas cruzadas",18:"\u0406\u043D\u0448\u0456 \u0441\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F"
};C.TAU={1:"Druga goveda",0:"Other cattle\n(Bos taurus)",6:"TAU",8:"Autres bovins de race taurine"
,9:"Sonstige taurine Rinder (Bos taurus)",10:"\u0386\u03BB\u03BB\u03BF \u03B2\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2\n(Bostaurus)"
,13:"Andre storfe\n(Bos taurus)",15:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421 (boss taurus)"
,16:"Otros bovinos\n(Bos taurus)",18:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421 (boss taurus)"
};C.TIN={1:"Druga goveda",0:"Other cattle\n(Taur indicus)",6:"TIN",8:"Autres bovins taur indicus"
,9:"Sonstige taur indicus-Rinder",10:"\u0386\u03BB\u03BB\u03BF \u03B2\u03BF\u03BF\u03B5\u03B9\u03B4\u03AD\u03C2\n(Taurindicus)"
,13:"Andre storfe\n(Taur indicus)",15:"\u041F\u0440\u043E\u0447\u0438\u0439 \u041A\u0420\u0421 (taur indicus)"
,16:"Otros bovinos\n(Taur indicus)",18:"\u0406\u043D\u0448\u0438\u0439 \u041A\u0420\u0421 (taur indicus)"
};C.TLH="Texas Longhorn";C.TLM={1:"Telemark govedo",0:"Telemark Cattle",6:"TLM",
8:"Bovins T\xE9l\xE9mark",9:"Telemark",13:"Telemarksfe",15:"\u0422\u0435\u043B\u0435\u043C\u0430\u0440\u043A\u0441\u043A\u0430\u044F"
,16:"Ganado Telemark"};C.TUX={1:"Tuxer",0:"Tux Cattle",6:"TUX",8:"Tux-zillertal"
,9:"Tuxer",13:"Tux Storfe",15:"\u0422\u0443\u043A\u0441\u043A\u0430\u044F",16:"Ganado Tux"
};C.UCK={0:"Uckerm\xE4rker",6:"UCK",15:"\u0423\u043A\u0435\u0440\u043C\u044D\u0440\u043A\u0441\u043A\u0430\u044F"
};C.UST={1:"Ma\u0111arsko sivo govedo",0:"Hungarian Grey",6:"UST",8:"B\u0153uf gris de Hongrie"
,9:"Ungarisches Steppenrind",13:"Ungarsk Gr\xE5",15:"\u0412\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0430\u044F \u0441\u0435\u0440\u0430\u044F"
,16:"Ganado H\xFAngaro"};C.VR={1:"Vogesen govedo",0:"Vogesenrind",8:"Vosgienne",
9:"Vogesen-Rind",15:"\u0412\u043E\u0433\u0435\u0437\u0441\u043A\u0430\u044F",16:
"Vaca de los Vosgos"};C.VW={1:"Vorderwald govedo",0:"Vorderwald Cattle",8:"Vorderw\xE4lder"
,9:"Vorderw\xE4lder",13:"Vorderwald Storfe",15:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434"
,16:"Ganado de Vorderwald"};C.VWF={1:"Vorderwald govedo za tov",0:"Vorderwald Cattle, beef"
,8:"Vorderw\xE4lder, engraissement",9:"Vorderw\xE4lder, Fleischnutzung",10:"Vorderwald Cattle, \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Vorderwald kj\xF8ttfe",15:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434, \u043C\u044F\u0441\u043D\u0430\u044F"
,16:"Ganado de Vorderwald, carne",18:"\u0424\u043E\u0440\u0434\u0435\u0440\u0432\u0430\u043B\u044C\u0434, \u043C\'\u044F\u0441\u043D\u0430"
};C.WAG={0:"Wagy\u016B",6:"WAG",8:"Wagyu",15:"\u0412\u0430\u0433\u044E",18:"\u0412\u0430\u0433\u044E"
};C.WB={0:"Welsh-Black",6:"WB",13:"Welsh-svart",15:"\u0423\u044D\u043B\u044C\u0441\u043A\u0430\u044F \u0447\u0451\u0440\u043D\u0430\u044F"
};C.WBB={2:"\u0411\u0435\u043B\u0433\u0438\u0439\u0441\u043A\u043E \u0441\u0438\u043D\u044C\u043E"
,0:"Belgian blue",6:"WBB",8:"Blanc bleu belge",9:"Wei\xDFblaue Belgier",13:"Belgisk bl\xE5"
,15:"\u0411\u0435\u043B\u044C\u0433\u0438\u0439\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u0443\u0431\u0430\u044F"
};C.WGA={0:"White Galloway",6:"WGA",8:"White Galloway (blanche)",15:"\u0411\u0435\u043B\u044B\u0439 \u0413\u0430\u043B\u043B\u043E\u0432\u0435\u0439"
};C.WIT={0:"Witrug",6:"WIT",15:"\u0412\u0438\u0442\u0440\u0443\u0433"};C.WL={1:"vodeni bufalo"
,2:"\u0412\u043E\u0434\u0435\u043D \u0431\u0438\u0432\u043E\u043B",0:"Water buffalo"
,6:"WL",8:"Buffle d\u2019eau / karbau",9:"Wasserb\xFCffel",13:"Vannb\xF8ffel",15:
"\u0412\u043E\u0434\u044F\u043D\u043E\u0439 \u0431\u0443\u0439\u0432\u043E\u043B"
,18:"\u0412\u043E\u0434\u044F\u043D\u0438\u0439 \u0431\u0443\u0439\u0432\u043E\u043B"
};C.WP={1:"bijeli park",0:"White Park",6:"WP",15:"\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u0430\u044F"
};C.WSH="Whitbred Shorthorn";C.XFF={1:"Ukr\u0161tenje mesno govedo x mesno govedo"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u0435\u0441\u043E "+
"\u0445 \u043C\u0435\u0441\u043E",0:"Crossbreed beef \xD7 beef",6:"Ristand lihaveis \xD7 lihaveis"
,8:"Bovins \xE0 viande \xD7 bovins \xE0 viande",9:"Kreuzung Fleischrind \xD7 Fleischrind"
,10:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Kryssing kj\xF8tt \xD7 kj\xF8tt",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044F\u0441\u043D\u043E\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u044F\u0441\u043D\u043E\u0439 \u0441\u043A\u043E\u0442"
,18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\'\u044F\u0441\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\'\u044F\u0441\u043D\u0430 "+"\u0445\u0443\u0434\u043E\u0431\u0430"
};C.XFM={1:"Ukr\u0161tanje mesno govedo x mlije\u010Dno govedo",2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u0435\u0441\u043E "+
"\xD7 \u043C\u043B\u044F\u043A\u043E",0:"Crossbreed beef \xD7 milk",6:"Ristand lihaveis \xD7 piimalehm"
,8:"Bovins \xE0 viande \xD7 bovins laitiers",9:"Kreuzung Fleischrind \xD7 Milchrind"
,10:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03BA\u03C1\u03B5\u03B1\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Kryssing kj\xF8tt x melk",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044F\u0441\u043D\u043E\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442",18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\'\u044F\u0441\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.XMM={1:"Ukr\u0161tanje mlije\u010Dno govedo x mlije\u010Dno govedo"
,2:"\u041A\u0440\u044A\u0441\u0442\u043E\u0441\u043A\u0430 \u043C\u043B\u044F\u043A\u043E "+
"\xD7 \u043C\u043B\u044F\u043A\u043E",0:"Crossbreed milk \xD7 milk",6:"Ristand piimalehm \xD7 piimalehm"
,8:"Bovins laitiers \xD7 bovins laitiers",9:"Kreuzung Milchrind \xD7 Milchrind",
10:"\u0394\u03B9\u03B1\u03C6\u03C5\u03BB\u03B9\u03BA\u03CC \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2 "+
"\u03C7 \u03B3\u03B1\u03BB\u03B1\u03BA\u03C4\u03BF\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE\u03C2"
,13:"Kryssing melk \xD7 melk",15:"\u0421\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 "+
"\u0441\u043A\u043E\u0442",18:"\u0421\u0445\u0440\u0435\u0449\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430 \xD7 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 "+
"\u0445\u0443\u0434\u043E\u0431\u0430"};C.XZF={0:"Crossbreed dual-use \xD7 beef"
,9:"Kreuzung Zweinut~zungsrind \xD7 Fleischr."};C.XZM={0:"Crossbreed dual-use \xD7 milk"
,9:"Kreuzung Zweinut~zungsrind \xD7 Milchr."};C.XZZ={0:"Crossbreed dual-use \xD7 dual-use"
,9:"Kreuzung Zweinut~zung \xD7 Zweinutzung"};C.YAK={0:"Yakutian",8:"Yack",9:"Yak"
,15:"\u042F\u043A",18:"\u042F\u043A"};C.ZEB={1:"minijaturna zebu",0:"Miniature Zebu"
,6:"ZEB",8:"Zebu miniature",9:"Zwerg-Zebu",15:"\u041A\u0430\u0440\u043B\u0438\u043A\u043E\u0432\u044B\u0439 \u0417\u0435\u0431\u0443"
};
C._Init=function(){};C._ReInit=function(){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */