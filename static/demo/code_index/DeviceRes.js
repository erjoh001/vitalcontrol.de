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
);if(index.acj)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
acj=(function(){var A=index;var C={};
var Cf="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var E8="ERROR: Unhandled temperature unit: ";var Hs="ERROR: unhandled assessment.";
var I0="%H:%M";var Iw="Invalid month";var O$="%";var Qc="Invalid format code";var
Qd=" %Y";var CR="ERROR: Unhandled mass unit: ";
C.Baf={BAk:function(Eo,Ry){if((Ry>=A._GetAutoObject(A.Device.Helper).ADe(Eo))||(Ry<=
A._GetAutoObject(A.Device.Device).AcL))return 1;else return 0;},BAj:function(Eo,
Ry){var NC=A._GetAutoObject(A.Device.Converter).Ajp(Ry,Eo);switch(NC){case 3:return A.
aaR(A.acf.AvG);case 2:return A.aaR(A.acf.Bj9);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BkE);default:throw new Error(Cf+NC.toFixed());}},BAb:function(
Eo,Ry){var NC=A._GetAutoObject(A.Device.Converter).Ajp(Ry,Eo);switch(NC){case 3:
return A.jb.Gk;case 2:return A.jb.Ib;case 1:return A.jb.E1;case 0:return A.jb.Afy;
default:throw new Error(BD+NC.toFixed());}},AlR:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AHa);case 1:return A.
acf.Bqt;default:A.ab5("%s%s",E8,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BAc:function(Eo,Ry){var NC=A._GetAutoObject(A.Device.Converter
).Ajp(Ry,Eo);switch(NC){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cf+NC.toFixed());}},BAe:function(Eo,Ry){var NC=A._GetAutoObject(
A.Device.Converter).Ajp(Ry,Eo);switch(NC){case 3:return A.jb.Gk;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afy;default:throw new Error(BD+
NC.toFixed());}},BAf:function(Eo,Ry){var NC=A._GetAutoObject(A.Device.Converter).
Ajp(Ry,Eo);switch(NC){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cf+NC.toFixed());}},BAd:function(Eo,Ry
){var NC=A._GetAutoObject(A.Device.Converter).Ajp(Ry,Eo);switch(NC){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gk;default:throw new Error(Cf+NC.toFixed(
));}},_Init:function(aArg){this.__proto__=C.Baf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.Baf._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5J={BdU:function(NA){var B4=
A.jb.Rl;switch(NA){case 3:B4=A.jb.E1;break;case 2:B4=A.jb.Ib;break;case 1:B4=A.jb.
Gk;break;case 4:B4=A.jb.Afy;break;case 0:case 5:B4=A.jb.Rl;break;default:A.ab5("%s"
,Hs);}return B4;},Qv:function(NA){var B4=A.jb.Rl;switch(NA){case 3:B4=A.jb.E1;break;
case 2:B4=A.jb.Ib;break;case 1:B4=A.jb.Gk;break;case 0:case 5:B4=A.jb.CJ;break;case
4:B4=A.jb.Afy;break;default:A.ab5("%s%e",Hs,NA);}return B4;},XG:function(NA){var
B4=A.jb.Text;switch(NA){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hs);}return B4;},_Init:function(aArg){this.
__proto__=C.A5J;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5J._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6o={MonthToString:null,Bjq:function(L$){if(!L$)return A.
jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L$);return Av.Format(A.aaR(
A.acf.Bjs));}},AjO:function(L$){if(!L$)return A.jV;else{var Av=A._NewObject(A.Core.
Bs,0);Av.Initialize(L$);return Av.Format(A.aaR(A.acf.Ag2));}},ADb:function(L$){if(
!L$)return A.jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L$);return Av.
Format(A.aaR(A.acf.Bjr));}},A66:function(L$){if(!L$)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L$);return Av.Format(I0);}},ADc:function(A1F,A1n,Iz){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qs=A._NewObject(A.Core.Bs,0);var Bc_=
A1n<A1F;if(Bc_){Dx.Initialize(A1n);Qs.Initialize(A1F);}else{Dx.Initialize(A1F);Qs.
Initialize(A1n);}var ABU=0;var ApF=0;var Qq=0;Qq+=(Qs.GL-Dx.GL);if(Qq<0){switch(
Qs.Hl){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qq+=31;break;case 5:case
7:case 10:case 12:Qq+=30;break;case 3:if(this.Bkk(Qs.Year))Qq+=29;else Qq+=28;break;
default:A.ab5("%s%i",Iw,Qs.Hl);}ApF--;}ApF+=(Qs.Hl-Dx.Hl);if(ApF<0){ApF+=12;ABU--;
}ABU+=(Qs.Year-Dx.Year);if(Bc_){ABU=-ABU;ApF=-ApF;Qq=-Qq;}var index=Iz.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bex=Iz.charCodeAt(index+1)||0;Iz=A.ab1(
Iz,index,2);switch(Bex){case 0x64:Iz=A.abU(Iz,Qq.toFixed(),index);break;case 0x6D:
Iz=A.abU(Iz,ApF.toFixed(),index);break;case 0x79:case 0x59:Iz=A.abU(Iz,ABU.toFixed(
),index);break;case 0x25:Iz=A.abU(Iz,O$,index);break;default:A.ab5("%s%s",Qc,O$+
String.fromCharCode(Bex));}index=Iz.indexOf(String.fromCharCode(0x25),index+1);}
return Iz;},Bkk:function(Ac9){if(!(Ac9%4)&&!!(Ac9%100))return true;if(!(Ac9%400)
)return true;return false;},Bjm:function(L$){if(!L$)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L$);return this.MonthToString.BT(Av.Hl)+Av.Format(Qd);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6o;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KR={_Init:function(){C.A6o._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7$={Af8:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAo);case 1:return A.aaR(A.acf.A71);default:A.ab5("%s%s",CR,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BAa:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AL$
);case 1:return A.aaL(A.ach.AL_);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Az6:function(AoY,Eo){if(AoY<A._GetAutoObject(
A.Device.Helper).ADr(Eo))return A.jb.Gk;else if(AoY<A._GetAutoObject(A.Device.Helper
).ADq(Eo))return A.jb.Ib;else return A.jb.E1;},Az8:function(AoY,Eo){if(AoY<A._GetAutoObject(
A.Device.Helper).ADr(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADq(
Eo);return A.jb.Text;}},AaE:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BjY);case 1:return A.aaR(A.acf.BoO);default:
A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},Az7:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bd5:function(Aty,GA){var Aqi;if(((Aty<10000)||((Aty===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OT===2))Aqi=10;else if(((Aty<50000
)||((Aty===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OT)Aqi=100;else
if(((Aty<100000)||((Aty===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OT)Aqi=500;else Aqi=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqi=(Aqi/2)|0;break;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqi;},BdZ:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AD8);case 1:return A.aaL(A.
ach.AD9);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlF:function(Bcv,Byv,BxG){if(!Bcv)return 0;return Math.round((
BxG-Byv)/Bcv)|0;},_Init:function(aArg){this.__proto__=C.A7$;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7$._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpT={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpU={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
BpV={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5U={ADi:function(AfM
){var B;if(!!!(AfM.length%2))return-1;var BgY=0;var BgZ=0;var Air;var O=0;for(;O<
AfM.length;O++){Air=A.wz(A.abW(AfM,O,1),-1,10);if(Air===-1)return-1;if(!!(O%2))BgY+=
Air;else BgZ+=Air;}Air=((3*BgZ)+BgY)%10;if(!!Air)Air=10-Air;return Air;},AV3:function(
AfM){if(!AfM.length)return false;if(!!(AfM.length%2))return false;return A.wz(A.
abW(AfM,AfM.length-1,1),-2,10)===this.ADi(A.abV(AfM,AfM.length-1));},_Init:function(
aArg){this.__proto__=C.A5U;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VN={_Init:function(){C.A5U._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KR._this))B._ReInit(),C.KR._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VN._this))B._ReInit(),C.VN._ReInit.call(
B);};C.DI=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KR._this)&&(B._cycle!=D))B._Done(C.KR._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VN._this)&&(B._cycle!=D))
B._Done(C.VN._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */