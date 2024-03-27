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
);if(index.act)throw new Error("The unit file 'Months.js' included twice!");index.
act=(function(){var A=index;var C={};

C.ABD={0:"April",7:"Huhtikuu",8:"Avril",15:"\u0410\u043F\u0440\u0435\u043B\u044C"
,16:"Abril"};C.ABK={0:"August",5:"Augustus",7:"Elokuu",8:"Ao\xFBt",15:"\u0410\u0432\u0433\u0443\u0441\u0442"
,16:"Agosto"};C.ACm={0:"December",7:"Joulukuu",8:"D\xE9cembre",9:"Dezember",15:"\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
,16:"Diciembre"};C.ACB={0:"February",5:"Februari",7:"Helmikuu",8:"F\xE9vrier",9:
"Februar",15:"\u0424\u0435\u0432\u0440\u0430\u043B\u044C",16:"Febrero"};C.ADR={0:
"January",5:"Januari",7:"Tammikuu",8:"Janvier",9:"Januar",15:"P\u043D\u0432\u0430\u0440\u044C"
,16:"Enero"};C.ADS={0:"July",5:"Juli",7:"Hein\xE4kuu",8:"Juillet",9:"Juli",15:"\u0414\u0436\u0443\u043B\u0438"
,16:"Julio  "};C.ADT={0:"June",5:"Juni",7:"Kes\xE4kuu",8:"Juin",9:"Juni",15:"\u0414\u0436\u0443\u043D\u0438"
,16:"Junio"};C.AD3={0:"March",5:"Maart",7:"Maaliskuu",8:"Mars",9:"M\xE4rz",15:"\u041C\u0430\u0440\u0448\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,16:"Marzo"};C.AD5={0:"May",5:"Mei",7:"Toukokuu",8:"Mai",9:"Mai",15:"\u041C\u0430\u0439"
,16:"Mayo"};C.AEd={0:"November",7:"Marraskuu",8:"Novembre",15:"\u041D\u043E\u044F\u0431\u0440\u044C"
,16:"Noviembre"};C.AEf={0:"October",5:"Oktober",7:"Lokakuu",8:"Octobre",9:"Oktober"
,15:"\u041E\u043A\u0442\u044F\u0431\u0440\u044C",16:"Octubre"};C.AGp={0:"September"
,7:"Syyskuu",8:"Septembre",15:"\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"
,16:"Septiembre"};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */