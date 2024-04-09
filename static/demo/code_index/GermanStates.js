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
);if(index.acp)throw new Error("The unit file 'GermanStates.js' included twice!"
);index.acp=(function(){var A=index;var C={};

C.BB={2:"\u0411\u0440\u0430\u043D\u0434\u0435\u043D\u0431\u0443\u0440\u0433",0:"Brandenburg"
,8:"Brandenbourg",15:"\u0411\u0440\u0430\u043D\u0434\u0435\u043D\u0431\u0443\u0440\u0433"
,16:"Brandeburgo",18:"\u0411\u0440\u0430\u043D\u0434\u0435\u0440\u0431\u0443\u0440\u0433"
};C.BE={2:"\u0411\u0435\u0440\u043B\u0438\u043D",0:"Berlin",5:"Berlijn",15:"\u0411\u0435\u0440\u043B\u0438\u043D"
,18:"\u0411\u0435\u0440\u043B\u0456\u043D"};C.A5v={2:"\u0411\u0430\u0434\u0435\u043D \u0412\u044E\u0440\u0442\u0435\u043D\u0431\u0435\u0440\u0433"
,0:"Baden-W\xFCrttemberg",6:"BW",8:"Bade - Wurtemberg",15:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
,16:"Baden-Wurtemberg",18:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
};C.BhA={1:"Baden-W\xFCrttemb.",2:"\u0411\u0430\u0434\u0435\u043D \u0412\u044E\u0440\u0442\u0435\u043D\u0431\u0435\u0440\u0433"
,0:"Bad.-W\xFCrttemb.",8:"Bade-Wurtemb.",15:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
,18:"\u0411\u0430\u0434\u0435\u043D-\u0412\u0440\u0442\u0442\u0435\u043C\u0431\u0435\u0440\u0433"
};C.AMT={2:"\u0411\u0430\u0432\u0430\u0440\u0438\u044F",0:"Bavaria",8:"Bavi\xE8re"
,9:"Bayern",13:"Bayeren",15:"\u0411\u0430\u0432\u0430\u0440\u0438\u044F",16:"Baviera"
,18:"\u0411\u0430\u0432\u0430\u0440\u0456\u044F"};C.AO0={2:"\u0411\u0440\u0435\u043C\u0435\u043D"
,0:"Bremen",8:"Br\xEAme",15:"\u0411\u0440\u0435\u043C\u0435\u043D",18:"\u0411\u0440\u0435\u043C\u0435\u043D"
};C.HE={2:"\u0425\u0435\u0437\u0435",0:"Hesse",9:"Hessen",13:"Hessen",15:"\u0413\u0435\u0441\u0441\u0435\u043D"
,18:"\u0413\u0435\u0441\u0441\u0435\u043D"};C.AO1={2:"\u0425\u0430\u043C\u0431\u0443\u0440\u0433"
,0:"Hamburg",8:"Hambourg",15:"\u0413\u0430\u043C\u0431\u0443\u0440\u0433",16:"Hamburgo"
,18:"\u0413\u0430\u043C\u0431\u0443\u0440\u0433"};C.A7L={2:"\u041C\u0435\u043A\u043B\u0435\u043D\u0431\u0443\u0440\u0433, \u0417\u0430\u043F\u0430\u0434\u043D\u0430 "+
"\u041F\u043E\u043C\u0435\u0440\u0430\u043D\u0438\u044F",0:"Mecklenburg Western Pomerania"
,8:"Mecklembourg-Pom\xE9ranie occidentale",9:"Mecklenburg-Vorpommern",15:"\u041C\u0435\u043A\u043B\u0435\u043D\u0431\u0443\u0440\u0433-\u041F\u0435\u0440\u0435\u0434\u043D\u044F\u044F "+
"\u041F\u043E\u043C\u0435\u0440\u0430\u043D\u0438\u044F",16:"Mecklemburgo-Pomerania Occidental"
,18:"\u041C\u0435\u043A\u043B\u0435\u043D\u0431\u0443\u0440\u0433 \u0417\u0430\u0445\u0456\u0434\u043D\u0430 "+
"\u041F\u043E\u043C\u0435\u0440\u0430\u043D\u0456\u044F"};C.Bkj={1:"Meckl. Pomerania"
,2:"\u041C\u0435\u043A-\u041F\u043E\u043C",0:"Meckl.-W. Pom.",8:"Meck-Pom",9:"Meck-Pomm"
,15:"\u041C\u0435\u043A-\u041F\u043E\u043C",18:"\u041C\u0435\u043A-\u043F\u043E\u043C"
};C.ARZ={2:"\u0414\u043E\u043B\u043D\u0430 \u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F"
,0:"Lower Saxony",8:"Basse-Saxe",9:"Niedersachsen",13:"Niedersachsen",15:"\u041D\u0438\u0436\u043D\u044F\u044F \u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F"
,16:"Baja Sajonia",18:"\u041D\u0438\u0436\u043D\u044F \u0421\u0430\u043A\u0441\u043E\u043D\u0456\u044F"
};C.Bkx={0:"NRW",10:"North Rhine-Westphalia",15:"\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,18:"\u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0438\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0456\u044F"
};C.A7Z={1:"NRW",2:"\u0421\u0435\u0432\u0435\u0440\u0435\u043D \u0420\u0435\u0439\u043D \u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,0:"Northrhine-Westphalia",8:"Rh\xE9nanie-du-Nord-Westphalie",9:"Nordrhein-Westfalen"
,15:"\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0438\u044F"
,16:"Renania del Norte-Westfalia",18:"\u041F\u0456\u0432\u043D\u0456\u0447\u043D\u0438\u0439 \u0420\u0435\u0439\u043D-\u0412\u0435\u0441\u0442\u0444\u0430\u043B\u0456\u044F"
};C.A$d={1:"Rheinland govedo",0:"Rhineland Palatinate",8:"Rh\xE9nanie-Palatinat"
,9:"Rheinland-Pfalz",13:"Rheinland-Pfalz",15:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
,16:"Renania-Palatinado",18:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
};C.BoA={2:"Rhineland Palatinate",0:"Rhineland Palat.",8:"Rh\xE9nanie-Palat.",9:
"Rheinland-Pfalz",15:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
,16:"Renania-Palatin.",18:"\u0420\u0430\u0439\u043D\u043B\u0430\u043D\u0434-\u041F\u0444\u0430\u043B\u044C\u0446"
};C.SH={0:"Schleswig-Holstein",6:"SH",8:"le Schleswig-Holstein",15:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442\u0435\u0439\u043D"
,18:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442\u0435\u0439\u043D"
};C.BoY={0:"Schlesw.-Holst.",15:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442."
,18:"\u0428\u043B\u0435\u0441\u0432\u0438\u0433-\u0413\u043E\u043B\u044C\u0448\u0442."
};C.AUC={1:"Sl",0:"Saarland",6:"SL",8:"La Sarre",15:"\u0421\u0430\u0430\u0440\u043B\u0430\u043D\u0434"
,16:"Sarre",18:"\u0421\u0430\u0430\u0440\u043B\u0430\u043D\u0434"};C.AUD={1:"Saksonija"
,2:"\u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F",0:"Saxony",6:"SN",8:"La Saxe"
,9:"Sachsen",13:"Sachsen",15:"\u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F",
16:"Sajonia",18:"\u0421\u0430\u043A\u0441\u043E\u043D\u0456\u044F"};C.AUE={1:"Sakson anhalt"
,0:"Saxony-Anhalt",6:"ST",8:"La Saxe-Anhalt",9:"Sachsen-Anhalt",13:"Sachsen-Anhalt"
,15:"\u0421\u0430\u043A\u0441\u043E\u043D\u0438\u044F-\u0410\u043D\u0445\u0430\u043B\u044C\u0442"
,16:"Sajonia-Anhalt",18:"\u0421\u0430\u043A\u0441\u043E\u043D\u0456\u044F-\u0410\u043D\u0445\u0430\u043B\u044C\u0442"
};C.AVe={1:"Turingen",0:"Thuringia",8:"La Thuringe",9:"Th\xFCringen",13:"Th\xFCringen"
,15:"\u0422\u044E\u0440\u0438\u043D\u0433\u0438\u044F",16:"Turingia",18:"\u0422\u044E\u0440\u0456\u043D\u0433\u0456\u044F"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */