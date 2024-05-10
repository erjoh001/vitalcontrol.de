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
var Ce="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var E7="ERROR: Unhandled temperature unit: ";var Hr="ERROR: unhandled assessment.";
var IV="%H:%M";var Is="Invalid month";var O6="%";var P_="Invalid format code";var
P$=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$2={Bz$:function(Eo,Ru){if((Ru>=A._GetAutoObject(A.Device.Helper).AC3(Eo))||(Ru<=
A._GetAutoObject(A.Device.Device).AcG))return 1;else return 0;},Bz_:function(Eo,
Ru){var Nw=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nw){case 3:return A.
aaR(A.acf.AvD);case 2:return A.aaR(A.acf.BjV);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bkq);default:throw new Error(Ce+Nw.toFixed());}},Bz2:function(
Eo,Ru){var Nw=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nw){case 3:
return A.jb.Gj;case 2:return A.jb.H9;case 1:return A.jb.E1;case 0:return A.jb.Afu;
default:throw new Error(BD+Nw.toFixed());}},AlM:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AG2);case 1:return A.
acf.Bqi;default:A.ab5("%s%s",E7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},Bz3:function(Eo,Ru){var Nw=A._GetAutoObject(A.Device.Converter
).Ajn(Ru,Eo);switch(Nw){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Ce+Nw.toFixed());}},Bz5:function(Eo,Ru){var Nw=A._GetAutoObject(
A.Device.Converter).Ajn(Ru,Eo);switch(Nw){case 3:return A.jb.Gj;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afu;default:throw new Error(BD+
Nw.toFixed());}},Bz6:function(Eo,Ru){var Nw=A._GetAutoObject(A.Device.Converter).
Ajn(Ru,Eo);switch(Nw){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Ce+Nw.toFixed());}},Bz4:function(Eo,Ru
){var Nw=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nw){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gj;default:throw new Error(Ce+Nw.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$2;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$2._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5v={BdG:function(Nu){var B4=
A.jb.Ri;switch(Nu){case 3:B4=A.jb.E1;break;case 2:B4=A.jb.H9;break;case 1:B4=A.jb.
Gj;break;case 4:B4=A.jb.Afu;break;case 0:case 5:B4=A.jb.Ri;break;default:A.ab5("%s"
,Hr);}return B4;},Qr:function(Nu){var B4=A.jb.Ri;switch(Nu){case 3:B4=A.jb.E1;break;
case 2:B4=A.jb.H9;break;case 1:B4=A.jb.Gj;break;case 0:case 5:B4=A.jb.CJ;break;case
4:B4=A.jb.Afu;break;default:A.ab5("%s%e",Hr,Nu);}return B4;},XB:function(Nu){var
B4=A.jb.Text;switch(Nu){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hr);}return B4;},_Init:function(aArg){this.
__proto__=C.A5v;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5v._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6a={MonthToString:null,Bjc:function(L7){if(!L7)return A.
jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L7);return Av.Format(A.aaR(
A.acf.Bje));}},AjN:function(L7){if(!L7)return A.jV;else{var Av=A._NewObject(A.Core.
Bs,0);Av.Initialize(L7);return Av.Format(A.aaR(A.acf.Ag0));}},AC0:function(L7){if(
!L7)return A.jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L7);return Av.
Format(A.aaR(A.acf.Bjd));}},A6S:function(L7){if(!L7)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L7);return Av.Format(IV);}},AC1:function(A1q,A0_,Iv){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qo=A._NewObject(A.Core.Bs,0);var BcW=
A0_<A1q;if(BcW){Dx.Initialize(A0_);Qo.Initialize(A1q);}else{Dx.Initialize(A1q);Qo.
Initialize(A0_);}var ABI=0;var ApB=0;var Qm=0;Qm+=(Qo.GL-Dx.GL);if(Qm<0){switch(
Qo.Hk){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qm+=31;break;case 5:case
7:case 10:case 12:Qm+=30;break;case 3:if(this.Bj8(Qo.Year))Qm+=29;else Qm+=28;break;
default:A.ab5("%s%i",Is,Qo.Hk);}ApB--;}ApB+=(Qo.Hk-Dx.Hk);if(ApB<0){ApB+=12;ABI--;
}ABI+=(Qo.Year-Dx.Year);if(BcW){ABI=-ABI;ApB=-ApB;Qm=-Qm;}var index=Iv.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bej=Iv.charCodeAt(index+1)||0;Iv=A.ab1(
Iv,index,2);switch(Bej){case 0x64:Iv=A.abU(Iv,Qm.toFixed(),index);break;case 0x6D:
Iv=A.abU(Iv,ApB.toFixed(),index);break;case 0x79:case 0x59:Iv=A.abU(Iv,ABI.toFixed(
),index);break;case 0x25:Iv=A.abU(Iv,O6,index);break;default:A.ab5("%s%s",P_,O6+
String.fromCharCode(Bej));}index=Iv.indexOf(String.fromCharCode(0x25),index+1);}
return Iv;},Bj8:function(Ac7){if(!(Ac7%4)&&!!(Ac7%100))return true;if(!(Ac7%400)
)return true;return false;},Bi_:function(L7){if(!L7)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L7);return this.MonthToString.BS(Av.Hk)+Av.Format(P$);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6a;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KO={_Init:function(){C.A6a._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7X={Af4:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAd);case 1:return A.aaR(A.acf.A7N);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bz1:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AL1
);case 1:return A.aaL(A.ach.AL0);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzV:function(AoU,Eo){if(AoU<A._GetAutoObject(
A.Device.Helper).ADe(Eo))return A.jb.Gj;else if(AoU<A._GetAutoObject(A.Device.Helper
).ADd(Eo))return A.jb.H9;else return A.jb.E1;},AzX:function(AoU,Eo){if(AoU<A._GetAutoObject(
A.Device.Helper).ADe(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADd(
Eo);return A.jb.Text;}},Aaw:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BjK);case 1:return A.aaR(A.acf.BoB);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzW:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BdR:function(Atu,GA){var Aqd;if(((Atu<10000)||((Atu===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OP===2))Aqd=10;else if(((Atu<50000
)||((Atu===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OP)Aqd=100;else
if(((Atu<100000)||((Atu===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OP)Aqd=500;else Aqd=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqd=(Aqd/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqd;},BdL:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ADV);case 1:return A.aaL(A.
ach.ADW);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlA:function(Bch,Byl,Bxw){if(!Bch)return 0;return Math.round((
Bxw-Byl)/Bch)|0;},_Init:function(aArg){this.__proto__=C.A7X;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7X._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpI={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpJ={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
BpK={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5G={AC7:function(AfI
){var B;if(!!!(AfI.length%2))return-1;var BgK=0;var BgL=0;var Aip;var O=0;for(;O<
AfI.length;O++){Aip=A.wz(A.abW(AfI,O,1),-1,10);if(Aip===-1)return-1;if(!!(O%2))BgK+=
Aip;else BgL+=Aip;}Aip=((3*BgL)+BgK)%10;if(!!Aip)Aip=10-Aip;return Aip;},AVO:function(
AfI){if(!AfI.length)return false;if(!!(AfI.length%2))return false;return A.wz(A.
abW(AfI,AfI.length-1,1),-2,10)===this.AC7(A.abV(AfI,AfI.length-1));},_Init:function(
aArg){this.__proto__=C.A5G;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VG={_Init:function(){C.A5G._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KO._this))B._ReInit(),C.KO._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VG._this))B._ReInit(),C.VG._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KO._this)&&(B._cycle!=D))B._Done(C.KO._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VG._this)&&(B._cycle!=D))
B._Done(C.VG._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */