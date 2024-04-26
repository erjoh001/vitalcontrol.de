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
);if(index.act)throw new Error("The unit file 'Months.js' included twice!");index.
act=(function(){var A=index;var C={};

C.ABR={2:"\u0410\u043F\u0440\u0438\u043B",4:"duben",0:"April",6:"aprill",7:"Huhtikuu"
,8:"Avril",10:"\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2",11:"Aprile",12:
"\u3057\u304C\u3064",14:"kwiecie\u0144",15:"\u0410\u043F\u0440\u0435\u043B\u044C"
,16:"Abril",17:"Nisan",18:"\u043A\u0432\u0456\u0442\u0435\u043D\u044C"};C.ABY={1:
"Avgust",2:"\u0410\u0432\u0433\u0443\u0441\u0442",4:"srpen",0:"August",5:"Augustus"
,6:"august",7:"Elokuu",8:"Ao\xFBt",10:"\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2"
,11:"Agosto",12:"\u306F\u3061\u304C\u3064",14:"sierpie\u0144",15:"\u0410\u0432\u0433\u0443\u0441\u0442"
,16:"Agosto",17:"A\u011Fustos",18:"\u0441\u0435\u0440\u043F\u0435\u043D\u044C"};
C.ACA={1:"Decembar",2:"\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438",4:"prosinec"
,0:"December",6:"detsember",7:"Joulukuu",8:"D\xE9cembre",9:"Dezember",10:"\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"
,11:"Dicembre",12:"\u3058\u3085\u3046\u306B\u304C\u3064",13:"Desember",14:"grudzie\u0144"
,15:"\u0414\u0435\u043A\u0430\u0431\u0440\u044C",16:"Diciembre",17:"Aral\u0131k"
,18:"\u0433\u0440\u0443\u0434\u0435\u043D\u044C"};C.ACP={1:"Februar",2:"\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438"
,4:"\xFAnor",0:"February",5:"Februari",6:"veebruar",7:"Helmikuu",8:"F\xE9vrier",
9:"Februar",10:"\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2"
,11:"Febbraio",12:"\u306B\u304C\u3064",13:"Februar",14:"Luty",15:"\u0424\u0435\u0432\u0440\u0430\u043B\u044C"
,16:"Febrero",17:"\u015Eubat",18:"\u043B\u044E\u0442\u0438\u0439"};C.AD6={1:"Januar"
,2:"\u042F\u043D\u0443\u0430\u0440\u0438",4:"leden",0:"January",5:"Januari",6:"jaanuar"
,7:"Tammikuu",8:"Janvier",9:"Januar",10:"\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2"
,11:"Gennaio",12:"\u3044\u3061\u304C\u3064",13:"Januar",14:"stycze\u0144",15:"P\u043D\u0432\u0430\u0440\u044C"
,16:"Enero",17:"Ocak",18:"\u0441\u0456\u0447\u0435\u043D\u044C"};C.AD7={1:"Juli"
,2:"\u042E\u043B\u0438",4:"\u010Dervenec",0:"July",5:"Juli",6:"juuli",7:"Hein\xE4kuu"
,8:"Juillet",9:"Juli",10:"\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2",11:"Luglio"
,12:"\u3057\u3061\u304C\u3064",13:"Juli",14:"lipiec",15:"\u0414\u0436\u0443\u043B\u0438"
,16:"Julio  ",17:"Temmuz",18:"\u043B\u0438\u043F\u0435\u043D\u044C"};C.AD8={1:"Juni"
,2:"\u042E\u043D\u0438",4:"\u010Derven",0:"June",5:"Juni",6:"juuni",7:"Kes\xE4kuu"
,8:"Juin",9:"Juni",10:"\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2",11:"giugno",12:
"\u308D\u304F\u304C\u3064",13:"Juni",14:"czerwiec",15:"\u0414\u0436\u0443\u043D\u0438"
,16:"Junio",17:"Haziran",18:"\u0427\u0435\u0440\u0432\u0435\u043D\u044C"};C.AEg={
1:"Mart",2:"\u041C\u0430\u0440\u0442",4:"b\u0159ezen",0:"March",5:"Maart",6:"m\xE4rts"
,7:"Maaliskuu",8:"Mars",9:"M\xE4rz",10:"\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2"
,11:"Marzo",12:"\u3055\u3093\u304C\u3064",13:"Mars",14:"Marzec",15:"\u041C\u0430\u0440\u0448\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,16:"Marzo",17:"Mart",18:"\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C"};C.AEi={
1:"Maj",2:"\u041C\u0430\u0439",4:"kv\u011Bten",0:"May",5:"Mei",6:"mai",7:"Toukokuu"
,8:"Mai",9:"Mai",10:"\u039C\u03AC\u03B9\u03BF\u03C2",11:"Maggio",12:"\u3054\u304C\u3064"
,13:"Mai",14:"Maj",15:"\u041C\u0430\u0439",16:"Mayo",17:"May\u0131s",18:"\u0442\u0440\u0430\u0432\u0435\u043D\u044C"
};C.AEt={1:"Novembar",2:"\u041D\u043E\u0435\u043C\u0432\u0440\u0438",4:"listopad"
,0:"November",6:"november",7:"Marraskuu",8:"Novembre",10:"\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"
,11:"Novembre",12:"\u3058\u3085\u3046\u3044\u3061\u304C\u3064",14:"listopad",15:
"\u041D\u043E\u044F\u0431\u0440\u044C",16:"Noviembre",17:"Kas\u0131m",18:"\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434"
};C.AEv={1:"Oktobar",2:"\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",4:"\u0159\xEDjen"
,0:"October",5:"Oktober",6:"Oktoober",7:"Lokakuu",8:"Octobre",9:"Oktober",10:"\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2"
,11:"Ottobre",12:"\u3058\u3085\u3046\u304C\u3064",13:"Oktober",14:"Pa\u017Adziernik"
,15:"\u041E\u043A\u0442\u044F\u0431\u0440\u044C",16:"Octubre",17:"Ekim",18:"\u0436\u043E\u0432\u0442\u0435\u043D\u044C"
};C.AGF={1:"Septembar",2:"\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438"
,4:"z\xE1\u0159\xED",0:"September",6:"september",7:"Syyskuu",8:"Septembre",10:"\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"
,11:"settembre",12:"\u304F\u304C\u3064",14:"wrzesie\u0144",15:"\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"
,16:"Septiembre",17:"Eyl\xFCl",18:"\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C"
};
C._Init=function(){};C._ReInit=function(){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */