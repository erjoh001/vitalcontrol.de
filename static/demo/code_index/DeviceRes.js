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
var EZ="ERROR: Unhandled temperature unit: ";var Hj="ERROR: unhandled assessment.";
var I$="%H:%M";var Io="Invalid month";var OZ="%";var P0="Invalid format code";var
P1=" %Y";var CO="ERROR: Unhandled mass unit: ";
C.A$x={Bzg:function(Ek,Ro){if((Ro>=A._GetAutoObject(A.Device.Helper).Ave(Ek))||(Ro<=
A._GetAutoObject(A.Device.Device).ZQ))return 1;else return 0;},Bzf:function(Ek,Ro
){var Nm=A._GetAutoObject(A.Device.Converter).Aje(Ro,Ek);switch(Nm){case 3:return A.
aaR(A.acf.Avl);case 2:return A.aaR(A.acf.Bi7);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BjD);default:throw new Error(Cc+Nm.toFixed());}},By9:function(
Ek,Ro){var Nm=A._GetAutoObject(A.Device.Converter).Aje(Ro,Ek);switch(Nm){case 3:
return A.jb.Gb;case 2:return A.jb.H4;case 1:return A.jb.EW;case 0:return A.jb.Afi;
default:throw new Error(BF+Nm.toFixed());}},Alz:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGI);case 1:return A.
aaR(A.acf.Bpm);default:A.ab5("%s%s",EZ,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},By_:function(Ek,Ro){var Nm=A._GetAutoObject(A.Device.Converter
).Aje(Ro,Ek);switch(Nm){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nm.toFixed());}},Bza:function(Ek,Ro){var Nm=A._GetAutoObject(
A.Device.Converter).Aje(Ro,Ek);switch(Nm){case 3:return A.jb.Gb;case 2:return A.
jb.Text;case 1:return A.jb.EW;case 0:return A.jb.Afi;default:throw new Error(BF+
Nm.toFixed());}},Bzb:function(Ek,Ro){var Nm=A._GetAutoObject(A.Device.Converter).
Aje(Ro,Ek);switch(Nm){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nm.toFixed());}},By$:function(Ek,Ro
){var Nm=A._GetAutoObject(A.Device.Converter).Aje(Ro,Ek);switch(Nm){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gb;default:throw new Error(Cc+Nm.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$x;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$x._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4S={Bc6:function(Nj){var B4=
A.jb.ST;switch(Nj){case 3:B4=A.jb.EW;break;case 2:B4=A.jb.H4;break;case 1:B4=A.jb.
Gb;break;case 4:B4=A.jb.Afi;break;case 0:case 5:B4=A.jb.ST;break;default:A.ab5("%s"
,Hj);}return B4;},Qh:function(Nj){var B4=A.jb.ST;switch(Nj){case 3:B4=A.jb.EW;break;
case 2:B4=A.jb.H4;break;case 1:B4=A.jb.Gb;break;case 0:case 5:B4=A.jb.CI;break;case
4:B4=A.jb.Afi;break;default:A.ab5("%s%e",Hj,Nj);}return B4;},Xo:function(Nj){var
B4=A.jb.Text;switch(Nj){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hj);}return B4;},_Init:function(aArg){this.
__proto__=C.A4S;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4S._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5K={MonthToString:null,Bio:function(L2){if(!L2)return A.
jV;else{var Au=A._NewObject(A.Core.Bu,0);Au.Initialize(L2);return Au.Format(A.aaR(
A.acf.Biq));}},AjF:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(A.Core.
Bu,0);Au.Initialize(L2);return Au.Format(A.aaR(A.acf.AgK));}},ACG:function(L2){if(
!L2)return A.jV;else{var Au=A._NewObject(A.Core.Bu,0);Au.Initialize(L2);return Au.
Format(A.aaR(A.acf.Bip));}},A6u:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(
A.Core.Bu,0);Au.Initialize(L2);return Au.Format(I$);}},ACH:function(A0P,A0y,Ir){
var B;var Du=A._NewObject(A.Core.Bu,0);var Qe=A._NewObject(A.Core.Bu,0);var Bcl=
A0y<A0P;if(Bcl){Du.Initialize(A0y);Qe.Initialize(A0P);}else{Du.Initialize(A0P);Qe.
Initialize(A0y);}var ABm=0;var Apo=0;var Qc=0;Qc+=(Qe.GE-Du.GE);if(Qc<0){switch(
Qe.Hc){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qc+=31;break;case 5:case
7:case 10:case 12:Qc+=30;break;case 3:if(this.Bjj(Qe.Year))Qc+=29;else Qc+=28;break;
default:A.ab5("%s%i",Io,Qe.Hc);}Apo--;}Apo+=(Qe.Hc-Du.Hc);if(Apo<0){Apo+=12;ABm--;
}ABm+=(Qe.Year-Du.Year);if(Bcl){ABm=-ABm;Apo=-Apo;Qc=-Qc;}var index=Ir.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var BdI=Ir.charCodeAt(index+1)||0;Ir=A.ab1(
Ir,index,2);switch(BdI){case 0x64:Ir=A.abU(Ir,Qc.toFixed(),index);break;case 0x6D:
Ir=A.abU(Ir,Apo.toFixed(),index);break;case 0x79:case 0x59:Ir=A.abU(Ir,ABm.toFixed(
),index);break;case 0x25:Ir=A.abU(Ir,OZ,index);break;default:A.ab5("%s%s",P0,OZ+
String.fromCharCode(BdI));}index=Ir.indexOf(String.fromCharCode(0x25),index+1);}
return Ir;},Bjj:function(AcV){if(!(AcV%4)&&!!(AcV%100))return true;if(!(AcV%400)
)return true;return false;},Bik:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(
A.Core.Bu,0);Au.Initialize(L2);return this.MonthToString.BO(Au.Hc)+Au.Format(P1);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5K;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KI={_Init:function(){C.A5K._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7x={AfR:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AzX);case 1:return A.aaR(A.acf.A7o);default:A.ab5("%s%s",CO,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},By8:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALD
);case 1:return A.aaL(A.ach.ALC);default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzE:function(AoI,Ek){if(AoI<A._GetAutoObject(
A.Device.Helper).ACT(Ek))return A.jb.Gb;else if(AoI<A._GetAutoObject(A.Device.Helper
).ACS(Ek))return A.jb.H4;else return A.jb.EW;},AzG:function(AoI,Ek){if(AoI<A._GetAutoObject(
A.Device.Helper).ACT(Ek))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ACS(
Ek);return A.jb.Text;}},Aan:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BiW);case 1:return A.aaR(A.acf.BnI);default:
A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzF:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bdf:function(Atb,Gt){var Ap4;if(((Atb<10000)||((Atb===10000
)&&(Gt===5)))&&(A._GetAutoObject(A.Device.Device).OI===2))Ap4=10;else if(((Atb<50000
)||((Atb===50000)&&(Gt===5)))&&!!A._GetAutoObject(A.Device.Device).OI)Ap4=100;else
if(((Atb<100000)||((Atb===100000)&&(Gt===5)))&&!!A._GetAutoObject(A.Device.Device
).OI)Ap4=500;else Ap4=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Ap4=(Ap4/2)|0;break;default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Ap4;},Bc$:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvC);case 1:return A.aaL(A.
ach.AvD);default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Aln:function(BbJ,Bxr,BwB){if(!BbJ)return 0;return Math.round((
BwB-Bxr)/BbJ)|0;},_Init:function(aArg){this.__proto__=C.A7x;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7x._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BoL={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.BoM={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
BoN={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KI._this))B._ReInit(),C.KI._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);};C.DF=function(D){var B;if((B=C.Temperature.
_this)&&(B._cycle!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this
)&&(B._cycle!=D))B._Done(C.Assessment._this=null);if((B=C.KI._this)&&(B._cycle!=
D))B._Done(C.KI._this=null);if((B=C.DU._this)&&(B._cycle!=D))B._Done(C.DU._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */