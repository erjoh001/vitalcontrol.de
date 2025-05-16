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

C.AB6={2:"\u0410\u043F\u0440\u0438\u043B",25:"travanj",4:"duben",0:"April",7:"aprill"
,8:"Huhtikuu",9:"Avril",11:"\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2",12:
"\xE1prilis",13:"Aprile",14:"\u3057\u304C\u3064",15:"apr\u012Blis",26:"Balandis"
,17:"kwiecie\u0144",18:"Abril",19:"aprilie",20:"\u0410\u043F\u0440\u0435\u043B\u044C"
,21:"Abril",23:"Nisan",24:"\u043A\u0432\u0456\u0442\u0435\u043D\u044C"};C.ACb={1:
"Avgust",2:"\u0410\u0432\u0433\u0443\u0441\u0442",25:"kolovoz",4:"srpen",0:"August"
,6:"Augustus",7:"august",8:"Elokuu",9:"Ao\xFBt",11:"\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2"
,12:"augusztus",13:"Agosto",14:"\u306F\u3061\u304C\u3064",15:"augusts",26:"rugpj\u016Btis"
,17:"sierpie\u0144",18:"Agosto",20:"\u0410\u0432\u0433\u0443\u0441\u0442",27:"avgust"
,21:"Agosto",22:"Augusti",23:"A\u011Fustos",24:"\u0441\u0435\u0440\u043F\u0435\u043D\u044C"
};C.ACQ={1:"Decembar",2:"\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438",25:"prosinac"
,4:"prosinec",0:"December",7:"detsember",8:"Joulukuu",9:"D\xE9cembre",10:"Dezember"
,11:"\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",12:"december"
,13:"Dicembre",14:"\u3058\u3085\u3046\u306B\u304C\u3064",15:"decembris",26:"gruodis"
,16:"Desember",17:"grudzie\u0144",18:"Dezembro",19:"decembrie",20:"\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
,27:"december",21:"Diciembre",23:"Aral\u0131k",24:"\u0433\u0440\u0443\u0434\u0435\u043D\u044C"
};C.AC5={1:"Februar",2:"\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",25:"velja\u010Da"
,4:"\xFAnor",5:"Februar",0:"February",6:"Februari",7:"veebruar",8:"Helmikuu",9:"F\xE9vrier"
,10:"Februar",11:"\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2"
,12:"febru\xE1r",13:"Febbraio",14:"\u306B\u304C\u3064",15:"febru\u0101ris",26:"vasaris"
,16:"Februar",17:"Luty",18:"Fevereiro",19:"Februarie",20:"\u0424\u0435\u0432\u0440\u0430\u043B\u044C"
,27:"februar",21:"Febrero",22:"Februari",23:"\u015Eubat",24:"\u043B\u044E\u0442\u0438\u0439"
};C.AEk={1:"Januar",2:"\u042F\u043D\u0443\u0430\u0440\u0438",25:"sije\u010Danj",
4:"leden",5:"Januar",0:"January",6:"Januari",7:"jaanuar",8:"Tammikuu",9:"Janvier"
,10:"Januar",11:"\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",12:
"janu\xE1r",13:"Gennaio",14:"\u3044\u3061\u304C\u3064",15:"Janv\u0101ris",26:"Sausis"
,16:"Januar",17:"stycze\u0144",18:"Janeiro",19:"ianuarie",20:"P\u043D\u0432\u0430\u0440\u044C"
,27:"januar",21:"Enero",22:"Januari",23:"Ocak",24:"\u0441\u0456\u0447\u0435\u043D\u044C"
};C.AEl={1:"Juli",2:"\u042E\u043B\u0438",25:"Srpanj",4:"\u010Dervenec",5:"Juli",
0:"July",6:"Juli",7:"juuli",8:"Hein\xE4kuu",9:"Juillet",10:"Juli",11:"\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2"
,12:"j\xFAlius",13:"Luglio",14:"\u3057\u3061\u304C\u3064",15:"j\u016Blijs",26:"Liepa"
,16:"Juli",17:"lipiec",18:"Julho",19:"Iulie",20:"\u0414\u0436\u0443\u043B\u0438"
,27:"julij",21:"Julio  ",22:"Juli",23:"Temmuz",24:"\u043B\u0438\u043F\u0435\u043D\u044C"
};C.AEm={1:"Juni",2:"\u042E\u043D\u0438",25:"lipanj",4:"\u010Derven",5:"Juni",0:
"June",6:"Juni",7:"juuni",8:"Kes\xE4kuu",9:"Juin",10:"Juni",11:"\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2"
,12:"j\xFAnius",13:"giugno",14:"\u308D\u304F\u304C\u3064",15:"j\u016Bnijs",26:"bir\u017Eelis"
,16:"Juni",17:"czerwiec",18:"Junho",19:"iunie",20:"\u0414\u0436\u0443\u043D\u0438"
,27:"junij",21:"Junio",22:"Juni",23:"Haziran",24:"\u0427\u0435\u0440\u0432\u0435\u043D\u044C"
};C.AEw={1:"Mart",2:"\u041C\u0430\u0440\u0442",25:"o\u017Eujak",4:"b\u0159ezen",
5:"Marts",0:"March",6:"Maart",7:"m\xE4rts",8:"Maaliskuu",9:"Mars",10:"M\xE4rz",11:
"\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2",12:"m\xE1rcius",13:"Marzo",14:"\u3055\u3093\u304C\u3064"
,15:"marts",26:"Kovas",16:"Mars",17:"Marzec",18:"Mar\xE7o",19:"Martie",20:"\u041C\u0430\u0440\u0448\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
,27:"marec",21:"Marzo",22:"Mars",23:"Mart",24:"\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C"
};C.AEy={1:"Maj",2:"\u041C\u0430\u0439",25:"Svibanj",4:"kv\u011Bten",5:"Maj",0:"May"
,6:"Mei",7:"mai",8:"Toukokuu",9:"Mai",10:"Mai",11:"\u039C\u03AC\u03B9\u03BF\u03C2"
,12:"m\xE1jus",13:"Maggio",14:"\u3054\u304C\u3064",15:"maijs",26:"Gegu\u017E\u0117"
,16:"Mai",17:"Maj",18:"Maio",19:"Mai",20:"\u041C\u0430\u0439",27:"maj",21:"Mayo"
,22:"Maj",23:"May\u0131s",24:"\u0442\u0440\u0430\u0432\u0435\u043D\u044C"};C.AEJ={
1:"Novembar",2:"\u041D\u043E\u0435\u043C\u0432\u0440\u0438",25:"Studeni",4:"listopad"
,0:"November",7:"november",8:"Marraskuu",9:"Novembre",11:"\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"
,12:"november",13:"Novembre",14:"\u3058\u3085\u3046\u3044\u3061\u304C\u3064",15:
"novembris",26:"lapkritis",17:"listopad",18:"Novembro",19:"Noiembrie",20:"\u041D\u043E\u044F\u0431\u0440\u044C"
,27:"november",21:"Noviembre",23:"Kas\u0131m",24:"\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434"
};C.AEL={1:"Oktobar",2:"\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",25:"listopad"
,4:"\u0159\xEDjen",5:"Oktober",0:"October",6:"Oktober",7:"oktoober",8:"Lokakuu",
9:"Octobre",10:"Oktober",11:"\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2"
,12:"okt\xF3ber",13:"Ottobre",14:"\u3058\u3085\u3046\u304C\u3064",15:"oktobris",
26:"Spalis",16:"Oktober",17:"Pa\u017Adziernik",18:"Outubro",19:"Octombrie",20:"\u041E\u043A\u0442\u044F\u0431\u0440\u044C"
,27:"Oktober",21:"Octubre",22:"Oktober",23:"Ekim",24:"\u0436\u043E\u0432\u0442\u0435\u043D\u044C"
};C.AGS={1:"Septembar",2:"\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438"
,25:"rujan",4:"z\xE1\u0159\xED",0:"September",7:"september",8:"Syyskuu",9:"Septembre"
,11:"\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",12:"szeptember"
,13:"settembre",14:"\u304F\u304C\u3064",15:"Septembris",26:"Rugs\u0117jis",17:"wrzesie\u0144"
,18:"Setembro",19:"Septembrie",20:"\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"
,27:"september",21:"Septiembre",23:"Eyl\xFCl",24:"\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C"
};
C._Init=function(){};C._ReInit=function(){};C.DI=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */