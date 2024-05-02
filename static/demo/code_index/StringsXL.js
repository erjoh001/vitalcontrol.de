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
);if(index.acu)throw new Error("The unit file 'StringsXL.js' included twice!");index.
acu=(function(){var A=index;var C={};

C.Akl={0:"\u2013.\u2013",17:"-.-",19:"-.-",20:"-.-",21:"-.-",22:"-.-",24:"-.-"};C.
Bqq={1:"previsoko",2:"\u0412\u0438\u0441\u043E\u043A\u0430!",3:"\u9AD8",4:"P\u0159\xEDli\u0161 vysok\xFD"
,5:"For h\xF8j",0:"Too high",6:"Te hoog",7:"Liiga k\xF5rge",8:"Korkeus",9:"Haut"
,10:"Hoch",11:"\u03A8\u03B7\u03BB\u03AC",12:"T\xFAl magas",13:"Troppo alto",15:"P\u0101r\u0101k augsts"
,16:"For h\xF8y",17:"Zbyt wysoko",19:"Prea \xEEnalt",20:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439"
,21:"Alta",22:"F\xF6r h\xF6g",23:"Y\xFCksek",24:"\u0412\u0438\u0441\u043E\u043A\u0438\u0439"
};C.AVw={1:"prenisko",2:"\u041D\u0438\u0441\u043A\u0430!",3:"\u4F4E",4:"P\u0159\xEDli\u0161 n\xEDzk\xFD"
,5:"For lav",0:"Too low",6:"Te laag",7:"Liiga madal",8:"Matala",9:"Bas",10:"Niedrig"
,11:"\u03A7\u03B1\u03BC\u03B7\u03BB\u03AC",12:"T\xFAl alacsony",13:"Troppo basso"
,15:"P\u0101r\u0101k zems",16:"For lav",17:"Za nisko",19:"Prea jos",20:"\u041D\u0438\u0437\u043A\u0438\u0439"
,21:"Baja",22:"F\xF6r l\xE5g",23:"D\xFC\u015F\xFCk",24:"\u041D\u0438\u0437\u044C\u043A\u0438\u0439"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */