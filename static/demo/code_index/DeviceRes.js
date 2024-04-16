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
var Ce="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var E7="ERROR: Unhandled temperature unit: ";var Hr="ERROR: unhandled assessment.";
var IU="%H:%M";var Is="Invalid month";var O4="%";var P_="Invalid format code";var
P$=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$T={Bz9:function(Eo,Ru){if((Ru>=A._GetAutoObject(A.Device.Helper).ACZ(Eo))||(Ru<=
A._GetAutoObject(A.Device.Device).AcF))return 1;else return 0;},Bz8:function(Eo,
Ru){var Nv=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nv){case 3:return A.
aaR(A.acf.AvB);case 2:return A.aaR(A.acf.BjM);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bkh);default:throw new Error(Ce+Nv.toFixed());}},Bz0:function(
Eo,Ru){var Nv=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nv){case 3:
return A.jb.Gj;case 2:return A.jb.H9;case 1:return A.jb.E1;case 0:return A.jb.Afu;
default:throw new Error(BD+Nv.toFixed());}},AlM:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGY);case 1:return A.
aaR(A.acf.Bp$);default:A.ab5("%s%s",E7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},Bz1:function(Eo,Ru){var Nv=A._GetAutoObject(A.Device.Converter
).Ajn(Ru,Eo);switch(Nv){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Ce+Nv.toFixed());}},Bz3:function(Eo,Ru){var Nv=A._GetAutoObject(
A.Device.Converter).Ajn(Ru,Eo);switch(Nv){case 3:return A.jb.Gj;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afu;default:throw new Error(BD+
Nv.toFixed());}},Bz4:function(Eo,Ru){var Nv=A._GetAutoObject(A.Device.Converter).
Ajn(Ru,Eo);switch(Nv){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Ce+Nv.toFixed());}},Bz2:function(Eo,Ru
){var Nv=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nv){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gj;default:throw new Error(Ce+Nv.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$T;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$T._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5n={Bdx:function(Nt){var B3=
A.jb.Ri;switch(Nt){case 3:B3=A.jb.E1;break;case 2:B3=A.jb.H9;break;case 1:B3=A.jb.
Gj;break;case 4:B3=A.jb.Afu;break;case 0:case 5:B3=A.jb.Ri;break;default:A.ab5("%s"
,Hr);}return B3;},Qr:function(Nt){var B3=A.jb.Ri;switch(Nt){case 3:B3=A.jb.E1;break;
case 2:B3=A.jb.H9;break;case 1:B3=A.jb.Gj;break;case 0:case 5:B3=A.jb.CJ;break;case
4:B3=A.jb.Afu;break;default:A.ab5("%s%e",Hr,Nt);}return B3;},XB:function(Nt){var
B3=A.jb.Text;switch(Nt){case 3:case 1:B3=A.jb.Bm;break;case 2:case 0:case 4:case
5:B3=A.jb.Text;break;default:A.ab5("%s",Hr);}return B3;},_Init:function(aArg){this.
__proto__=C.A5n;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5n._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A54={MonthToString:null,Bi5:function(L5){if(!L5)return A.
jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L5);return Av.Format(A.aaR(
A.acf.Bi7));}},AjN:function(L5){if(!L5)return A.jV;else{var Av=A._NewObject(A.Core.
Bs,0);Av.Initialize(L5);return Av.Format(A.aaR(A.acf.Ag0));}},ACW:function(L5){if(
!L5)return A.jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L5);return Av.
Format(A.aaR(A.acf.Bi6));}},A6J:function(L5){if(!L5)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L5);return Av.Format(IU);}},ACX:function(A1i,A02,Iv){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qo=A._NewObject(A.Core.Bs,0);var BcN=
A02<A1i;if(BcN){Dx.Initialize(A02);Qo.Initialize(A1i);}else{Dx.Initialize(A1i);Qo.
Initialize(A02);}var ABE=0;var Apz=0;var Qm=0;Qm+=(Qo.GL-Dx.GL);if(Qm<0){switch(
Qo.Hk){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qm+=31;break;case 5:case
7:case 10:case 12:Qm+=30;break;case 3:if(this.BjZ(Qo.Year))Qm+=29;else Qm+=28;break;
default:A.ab5("%s%i",Is,Qo.Hk);}Apz--;}Apz+=(Qo.Hk-Dx.Hk);if(Apz<0){Apz+=12;ABE--;
}ABE+=(Qo.Year-Dx.Year);if(BcN){ABE=-ABE;Apz=-Apz;Qm=-Qm;}var index=Iv.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bd$=Iv.charCodeAt(index+1)||0;Iv=A.ab1(
Iv,index,2);switch(Bd$){case 0x64:Iv=A.abU(Iv,Qm.toFixed(),index);break;case 0x6D:
Iv=A.abU(Iv,Apz.toFixed(),index);break;case 0x79:case 0x59:Iv=A.abU(Iv,ABE.toFixed(
),index);break;case 0x25:Iv=A.abU(Iv,O4,index);break;default:A.ab5("%s%s",P_,O4+
String.fromCharCode(Bd$));}index=Iv.indexOf(String.fromCharCode(0x25),index+1);}
return Iv;},BjZ:function(Ac7){if(!(Ac7%4)&&!!(Ac7%100))return true;if(!(Ac7%400)
)return true;return false;},Bi1:function(L5){if(!L5)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L5);return this.MonthToString.BS(Av.Hk)+Av.Format(P$);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A54;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KM={_Init:function(){C.A54._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7O={Af4:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAa);case 1:return A.aaR(A.acf.A7E);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BzZ:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALY
);case 1:return A.aaL(A.ach.ALX);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzS:function(AoS,Eo){if(AoS<A._GetAutoObject(
A.Device.Helper).ADa(Eo))return A.jb.Gj;else if(AoS<A._GetAutoObject(A.Device.Helper
).AC$(Eo))return A.jb.H9;else return A.jb.E1;},AzU:function(AoS,Eo){if(AoS<A._GetAutoObject(
A.Device.Helper).ADa(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).AC$(
Eo);return A.jb.Text;}},Aav:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BjB);case 1:return A.aaR(A.acf.Bos);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzT:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BdI:function(Ats,GA){var Aqb;if(((Ats<10000)||((Ats===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OM===2))Aqb=10;else if(((Ats<50000
)||((Ats===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OM)Aqb=100;else
if(((Ats<100000)||((Ats===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OM)Aqb=500;else Aqb=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqb=(Aqb/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqb;},BdC:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ADR);case 1:return A.aaL(A.
ach.ADS);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlA:function(Bb_,Byj,Bxu){if(!Bb_)return 0;return Math.round((
Bxu-Byj)/Bb_)|0;},_Init:function(aArg){this.__proto__=C.A7O;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7O._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.Bpz={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.BpA={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
BpB={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A5y={AC3:function(AfI
){var B;if(!!!(AfI.length%2))return-1;var BgA=0;var BgB=0;var Aip;var O=0;for(;O<
AfI.length;O++){Aip=A.wz(A.abW(AfI,O,1),-1,10);if(Aip===-1)return-1;if(!!(O%2))BgA+=
Aip;else BgB+=Aip;}Aip=((3*BgB)+BgA)%10;if(!!Aip)Aip=10-Aip;return Aip;},AVK:function(
AfI){if(!AfI.length)return false;if(!!(AfI.length%2))return false;return A.wz(A.
abW(AfI,AfI.length-1,1),-2,10)===this.AC3(A.abV(AfI,AfI.length-1));},_Init:function(
aArg){this.__proto__=C.A5y;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VG={_Init:function(){C.A5y._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KM._this))B._ReInit(),C.KM._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VG._this))B._ReInit(),C.VG._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KM._this)&&(B._cycle!=D))B._Done(C.KM._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VG._this)&&(B._cycle!=D))
B._Done(C.VG._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */