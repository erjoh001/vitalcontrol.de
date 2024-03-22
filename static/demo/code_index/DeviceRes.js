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
);if(index.acj)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
acj=(function(){var A=index;var C={};
var Cc="Unhandled enum BodyTemperature: ";var BF="Unhandled BodyTemperatureValue: ";
var E7="ERROR: Unhandled temperature unit: ";var Hp="ERROR: unhandled assessment.";
var IS="%H:%M";var Ir="Invalid month";var O1="%";var P3="Invalid format code";var
P4=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$m={Bzm:function(En,Ru){if((Ru>=A._GetAutoObject(A.Device.Helper).ACS(En))||(Ru<=
A._GetAutoObject(A.Device.Device).AcJ))return 1;else return 0;},Bzl:function(En,
Ru){var Nq=A._GetAutoObject(A.Device.Converter).Ajq(Ru,En);switch(Nq){case 3:return A.
aaR(A.acf.Avs);case 2:return A.aaR(A.acf.Bi5);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bjz);default:throw new Error(Cc+Nq.toFixed());}},Bzd:function(
En,Ru){var Nq=A._GetAutoObject(A.Device.Converter).Ajq(Ru,En);switch(Nq){case 3:
return A.jb.Gk;case 2:return A.jb.H8;case 1:return A.jb.E4;case 0:return A.jb.Afs;
default:throw new Error(BF+Nq.toFixed());}},AlN:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGP);case 1:return A.
aaR(A.acf.Bpk);default:A.ab5("%s%s",E7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},Bze:function(En,Ru){var Nq=A._GetAutoObject(A.Device.Converter
).Ajq(Ru,En);switch(Nq){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nq.toFixed());}},Bzg:function(En,Ru){var Nq=A._GetAutoObject(
A.Device.Converter).Ajq(Ru,En);switch(Nq){case 3:return A.jb.Gk;case 2:return A.
jb.Text;case 1:return A.jb.E4;case 0:return A.jb.Afs;default:throw new Error(BF+
Nq.toFixed());}},Bzh:function(En,Ru){var Nq=A._GetAutoObject(A.Device.Converter).
Ajq(Ru,En);switch(Nq){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nq.toFixed());}},Bzf:function(En,Ru
){var Nq=A._GetAutoObject(A.Device.Converter).Ajq(Ru,En);switch(Nq){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gk;default:throw new Error(Cc+Nq.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$m;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$m._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4W={BcV:function(Nn){var B3=
A.jb.Rg;switch(Nn){case 3:B3=A.jb.E4;break;case 2:B3=A.jb.H8;break;case 1:B3=A.jb.
Gk;break;case 4:B3=A.jb.Afs;break;case 0:case 5:B3=A.jb.Rg;break;default:A.ab5("%s"
,Hp);}return B3;},Ql:function(Nn){var B3=A.jb.Rg;switch(Nn){case 3:B3=A.jb.E4;break;
case 2:B3=A.jb.H8;break;case 1:B3=A.jb.Gk;break;case 0:case 5:B3=A.jb.CK;break;case
4:B3=A.jb.Afs;break;default:A.ab5("%s%e",Hp,Nn);}return B3;},XA:function(Nn){var
B3=A.jb.Text;switch(Nn){case 3:case 1:B3=A.jb.Bm;break;case 2:case 0:case 4:case
5:B3=A.jb.Text;break;default:A.ab5("%s",Hp);}return B3;},_Init:function(aArg){this.
__proto__=C.A4W;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4W._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5C={MonthToString:null,Bil:function(L3){if(!L3)return A.
jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(
A.acf.Bin));}},AjQ:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(A.Core.
Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(A.acf.AgX));}},ACP:function(L3){if(
!L3)return A.jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.
Format(A.aaR(A.acf.Bim));}},A6m:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return Au.Format(IS);}},ACQ:function(A0W,A0F,Iu){
var B;var Dw=A._NewObject(A.Core.Bs,0);var Qi=A._NewObject(A.Core.Bs,0);var Bca=
A0F<A0W;if(Bca){Dw.Initialize(A0F);Qi.Initialize(A0W);}else{Dw.Initialize(A0W);Qi.
Initialize(A0F);}var ABy=0;var ApB=0;var Qg=0;Qg+=(Qi.GK-Dw.GK);if(Qg<0){switch(
Qi.Hi){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qg+=31;break;case 5:case
7:case 10:case 12:Qg+=30;break;case 3:if(this.Bjg(Qi.Year))Qg+=29;else Qg+=28;break;
default:A.ab5("%s%i",Ir,Qi.Hi);}ApB--;}ApB+=(Qi.Hi-Dw.Hi);if(ApB<0){ApB+=12;ABy--;
}ABy+=(Qi.Year-Dw.Year);if(Bca){ABy=-ABy;ApB=-ApB;Qg=-Qg;}var index=Iu.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bdx=Iu.charCodeAt(index+1)||0;Iu=A.ab1(
Iu,index,2);switch(Bdx){case 0x64:Iu=A.abU(Iu,Qg.toFixed(),index);break;case 0x6D:
Iu=A.abU(Iu,ApB.toFixed(),index);break;case 0x79:case 0x59:Iu=A.abU(Iu,ABy.toFixed(
),index);break;case 0x25:Iu=A.abU(Iu,O1,index);break;default:A.ab5("%s%s",P3,O1+
String.fromCharCode(Bdx));}index=Iu.indexOf(String.fromCharCode(0x25),index+1);}
return Iu;},Bjg:function(Ac6){if(!(Ac6%4)&&!!(Ac6%100))return true;if(!(Ac6%400)
)return true;return false;},Bih:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return this.MonthToString.BH(Au.Hi)+Au.Format(P4);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5C;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KK={_Init:function(){C.A5C._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7p={Af2:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Az7);case 1:return A.aaR(A.acf.A7g);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bzc:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALQ
);case 1:return A.aaL(A.ach.ALP);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzN:function(AoV,En){if(AoV<A._GetAutoObject(
A.Device.Helper).AC4(En))return A.jb.Gk;else if(AoV<A._GetAutoObject(A.Device.Helper
).AC3(En))return A.jb.H8;else return A.jb.E4;},AzP:function(AoV,En){if(AoV<A._GetAutoObject(
A.Device.Helper).AC4(En))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).AC3(
En);return A.jb.Text;}},AaA:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BiT);case 1:return A.aaR(A.acf.BnG);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzO:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bc6:function(Atm,GA){var Aqe;if(((Atm<10000)||((Atm===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OJ===2))Aqe=10;else if(((Atm<50000
)||((Atm===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OJ)Aqe=100;else
if(((Atm<100000)||((Atm===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OJ)Aqe=500;else Aqe=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqe=(Aqe/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqe;},Bc0:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvJ);case 1:return A.aaL(A.
ach.AvK);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlB:function(Bbz,Bxx,BwH){if(!Bbz)return 0;return Math.round((
BwH-Bxx)/Bbz)|0;},_Init:function(aArg){this.__proto__=C.A7p;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DV={_Init:function(){C.A7p._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BoJ={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.BoK={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
BoL={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A47={ACW:function(AfG
){var B;if(!!!(AfG.length%2))return-1;var BfZ=0;var Bf0=0;var Aiq;var O=0;for(;O<
AfG.length;O++){Aiq=A.wz(A.abW(AfG,O,1),-1,10);if(Aiq===-1)return-1;if(!!(O%2))BfZ+=
Aiq;else Bf0+=Aiq;}Aiq=((3*Bf0)+BfZ)%10;if(!!Aiq)Aiq=10-Aiq;return Aiq;},AVo:function(
AfG){if(!AfG.length)return false;if(!!(AfG.length%2))return false;return A.wz(A.
abW(AfG,AfG.length-1,1),-2,10)===this.ACW(A.abV(AfG,AfG.length-1));},_Init:function(
aArg){this.__proto__=C.A47;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VE={_Init:function(){C.A47._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KK._this))B._ReInit(),C.KK._ReInit.call(B);if((B=C.DV._this
))B._ReInit(),C.DV._ReInit.call(B);if((B=C.VE._this))B._ReInit(),C.VE._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KK._this)&&(B._cycle!=D))B._Done(C.KK._this=null);if((B=C.DV.
_this)&&(B._cycle!=D))B._Done(C.DV._this=null);if((B=C.VE._this)&&(B._cycle!=D))
B._Done(C.VE._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */