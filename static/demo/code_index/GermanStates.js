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
);if(index.acp)throw new Error("The unit file 'GermanStates.js' included twice!"
);index.acp=(function(){var A=index;var C={};

C.BB={2:"\u0411\u0440\u0430\u043D\u0434\u0435\u043D\u0431\u0443\u0440\u0433",0:"Brandenburg"
,9:"Brandenbourg",20:"\u0411\u0440\u0430\u043D\u0434\u0435\u043D\u0431\u0443\u0440\u0433"
,21:"Brandeburgo",24:"\u0411\u0440\u0430\u043D\u0434\u0435\u0440\u0431\u0443\u0440\u0433"
};C.BE={2:"\u0411\u0435\u0440\u043B\u0438\u043D",0:"Berlin",6:"Berlijn",7:"Berliin"
,20:"\u0411\u0435\u0440\u043B\u0438\u043D",24:"\u0411\u0435\u0440\u043B\u0456\u043D"
};C.A5F={2:"\u0411\u0430\u0434\u0435\u043D \u0412\u044E\u0440\u0442\u0435\u043D\u0431\u0435\u0440\u0433"
,0:"Baden-W\xFCrttemberg",7:"BW",9:"Bade - Wurtemberg",20:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
,21:"Baden-Wurtemberg",24:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
};C.BhN={1:"Baden-W\xFCrttemb.",2:"\u0411\u0430\u0434\u0435\u043D \u0412\u044E\u0440\u0442\u0435\u043D\u0431\u0435\u0440\u0433"
,5:"Baden-W\xFCrttemberg",0:"Bad.-W\xFCrttemb.",7:"Baden-W\xFCrttemberg",9:"Bade-Wurtemb."
,12:"Baden-W\xFCrttemberg",19:"Baden-W\xFCrttemberg",20:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
,22:"Baden-W\xFCrttemberg",24:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
};C.AMX={2:"\u0411\u0430\u0432\u0430\u0440\u0438\u044F",5:"Bayern",0:"Bavaria",9:
"Bavi\xE8re",10:"Bayern",12:"Bajororsz\xE1g",16:"Bayeren",20:"\u0411\u0430\u0432\u0430\u0440\u0438\u044F"
,21:"Baviera",22:"Bayern",24:"\u0411\u0430\u0432\u0430\u0440\u0456\u044F"};C.AO4={
2:"\u0411\u0440\u0435\u043C\u0435\u043D",0:"Bremen",9:"Br\xEAme",20:"\u0411\u0440\u0435\u043C\u0435\u043D"
,24:"\u0411\u0440\u0435\u043C\u0435\u043D"};C.HE={2:"\u0425\u0435\u0437\u0435",0:
"Hesse",10:"Hessen",16:"Hessen",19:"Hessa",20:"\u0413\u0435\u0441\u0441\u0435\u043D"
,24:"\u0413\u0435\u0441\u0441\u0435\u043D"};C.AO5={2:"\u0425\u0430\u043C\u0431\u0443\u0440\u0433"
,0:"Hamburg",9:"Hambourg",20:"\u0413\u0430\u043C\u0431\u0443\u0440\u0433",21:"Hamburgo"
,24:"\u0413\u0430\u043C\u0431\u0443\u0440\u0433"};C.A7X={2:"\u041C\u0435\u043A\u043B\u0435\u043D\u0431\u0443\u0440\u0433, \u0417\u0430\u043F\u0430\u0434\u043D\u0430 "+
"\u041F\u043E\u043C\u0435\u0440\u0430\u043D\u0438\u044F",5:"Mecklenburg-Vorpommern"
,0:"Mecklenburg Western Pomerania",7:"Mecklenburg-Vorpommern",9:"Mecklembourg-Pom\xE9ranie occidentale"
,10:"Mecklenburg-Vorpommern",12:"Mecklenburg-El\u0151-Pomer\xE1nia",19:"Mecklenburg-Pomerania de Vest"
,20:"\u041C\u0435\u043A\u043B\u0435\u043D\u0431\u0443\u0440\u0433-\u041F\u0435\u0440\u0435\u0434\u043D\u044F\u044F "+
"\u041F\u043E\u043C\u0435\u0440\u0430\u043D\u0438\u044F",21:"Mecklemburgo-Pomerania Occidental"
,22:"Mecklenburg-Vorpommern",23:"Mecklenburg Bat\u0131 Pomeranya",24:"\u041C\u0435\u043A\u043B\u0435\u043D\u0431\u0443\u0440\u0433 \u0417\u0430\u0445\u0456\u0434\u043D\u0430 "+
"\u041F\u043E\u043C\u0435\u0440\u0430\u043D\u0456\u044F"};C.Bku={1:"Meckl. Pomerania"
,2:"\u041C\u0435\u043A-\u041F\u043E\u043C",5:"Meckl.-V.Pom.",0:"Meckl.-W. Pom.",
7:"Meck-Pomm",9:"Meck-Pom",10:"Meck-Pomm",12:"\"Meckl.-El\u0151-Pom.",19:"Meckl.-P. de V."
,20:"\u041C\u0435\u043A-\u041F\u043E\u043C",22:"Meckl.-V.Pom.",24:"\u041C\u0435\u043A-\u043F\u043E\u043C"
};C.AR3={2:"\u0414\u043E\u043B\u043D\u0430 \u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F"
,5:"Niedersachsen",0:"Lower Saxony",7:"Alam-Saksi",9:"Basse-Saxe",10:"Niedersachsen"
,12:"Als\xF3-Sz\xE1szorsz\xE1g",16:"Niedersachsen",19:"Saxonia Inferioar\u0103",
20:"\u041D\u0438\u0436\u043D\u044F\u044F \u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F"
,21:"Baja Sajonia",22:"Niedersachsen",23:"A\u015Fa\u011F\u0131 Saksonya",24:"\u041D\u0438\u0436\u043D\u044F \u0421\u0430\u043A\u0441\u043E\u043D\u0456\u044F"
};C.BkI={2:"\u0421\u0435\u0432\u0435\u0440\u0435\u043D \u0420\u0435\u0439\u043D - \u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,0:"NRW",11:"North Rhine-Westphalia",12:"\xC9szak-Rajna-Vesztf\xE1lia",19:"Renania de Nord-Westfalia"
,20:"\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,24:"\u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0438\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0456\u044F"
};C.A7$={1:"NRW",2:"\u0421\u0435\u0432\u0435\u0440\u0435\u043D \u0420\u0435\u0439\u043D \u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,5:"Nordrhein-Westfalen",0:"Northrhine-Westphalia",7:"Nordrhein-Westfalen",9:"Rh\xE9nanie-du-Nord-Westphalie"
,10:"Nordrhein-Westfalen",12:"\xC9szak-Rajna-Vesztf\xE1lia",19:"Renania de Nord-Westfalia"
,20:"\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,21:"Renania del Norte-Westfalia",22:"Nordrhein-Westfalen",24:"\u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0438\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0456\u044F"
};C.A$p={1:"Rheinland govedo",5:"Rheinland-Pfalz",0:"Rhineland Palatinate",7:"Reinimaa-Pfalz"
,9:"Rh\xE9nanie-Palatinat",10:"Rheinland-Pfalz",12:"Rajna-vid\xE9k-Pfalz",16:"Rheinland-Pfalz"
,19:"Renania-Palatinat",20:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
,21:"Renania-Palatinado",22:"Rheinland-Pfalz",24:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
};C.BoL={2:"Rhineland Palatinate",5:"Rhinland Pfalz",0:"Rhineland Palat.",7:"Rheinland-Pfalz"
,9:"Rh\xE9nanie-Palat.",10:"Rheinland-Pfalz",12:"Rajna-vid\xE9ki Pfalz",19:"Palatinatul Renan"
,20:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
,21:"Renania-Palatin.",22:"Rhenland-Pfalz",23:"Rhineland Palat. K\u0131sa",24:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
};C.SH={0:"Schleswig-Holstein",7:"SH",9:"le Schleswig-Holstein",20:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442\u0435\u0439\u043D"
,24:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442\u0435\u0439\u043D"
};C.Bo9={5:"Schleswig-Holsten.",0:"Schlesw.-Holst.",12:"Schleswig-Holstein",19:"Schleswig-Holstein"
,20:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442."
,22:"Schleswig-Holstein",23:"Schlesw.-Holst. K\u0131sa",24:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442."
};C.AUG={1:"Sl",0:"Saarland",7:"SL",9:"La Sarre",12:"Saar-vid\xE9k",20:"\u0421\u0430\u0430\u0440\u043B\u0430\u043D\u0434"
,21:"Sarre",24:"\u0421\u0430\u0430\u0440\u043B\u0430\u043D\u0434"};C.AUH={1:"Saksonija"
,2:"\u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F",5:"Sachsen",0:"Saxony",7:"SN"
,9:"La Saxe",10:"Sachsen",12:"Sz\xE1szorsz\xE1g",16:"Sachsen",19:"Saxonia",20:"\u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F"
,21:"Sajonia",22:"Sachsen",23:"Saksonya",24:"\u0421\u0430\u043A\u0441\u043E\u043D\u0456\u044F"
};C.AUI={1:"Sakson anhalt",5:"Sachsen-Anhalt",0:"Saxony-Anhalt",7:"ST",9:"La Saxe-Anhalt"
,10:"Sachsen-Anhalt",12:"Sz\xE1sz-Anhalt",16:"Sachsen-Anhalt",19:"Saxonia-Anhalt"
,20:"\u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F-\u0410\u043D\u0445\u0430\u043B\u044C\u0442"
,21:"Sajonia-Anhalt",22:"Sachsen-Anhalt",24:"\u0421\u0430\u043A\u0441\u043E\u043D\u0456\u044F-\u0410\u043D\u0445\u0430\u043B\u044C\u0442"
};C.AVi={1:"Turingen",5:"Th\xFCringen",0:"Thuringia",7:"T\xFC\xFCringi",9:"La Thuringe"
,10:"Th\xFCringen",12:"Th\xFCringia",16:"Th\xFCringen",19:"Turingia",20:"\u0422\u044E\u0440\u0438\u043D\u0433\u0438\u044F"
,21:"Turingia",22:"Th\xFCringen",24:"\u0422\u044E\u0440\u0456\u043D\u0433\u0456\u044F"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */