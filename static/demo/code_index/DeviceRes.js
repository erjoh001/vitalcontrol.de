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
var IW="%H:%M";var It="Invalid month";var O6="%";var P_="Invalid format code";var
P$=" %Y";var CR="ERROR: Unhandled mass unit: ";
C.A$4={Bz$:function(Eo,Ru){if((Ru>=A._GetAutoObject(A.Device.Helper).AC4(Eo))||(Ru<=
A._GetAutoObject(A.Device.Device).AcG))return 1;else return 0;},Bz_:function(Eo,
Ru){var Nw=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nw){case 3:return A.
aaR(A.acf.AvC);case 2:return A.aaR(A.acf.BjX);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bks);default:throw new Error(Ce+Nw.toFixed());}},Bz2:function(
Eo,Ru){var Nw=A._GetAutoObject(A.Device.Converter).Ajn(Ru,Eo);switch(Nw){case 3:
return A.jb.Gj;case 2:return A.jb.H_;case 1:return A.jb.E1;case 0:return A.jb.Afu;
default:throw new Error(BD+Nw.toFixed());}},AlN:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AG3);case 1:return A.
acf.Bqk;default:A.ab5("%s%s",E7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
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
));}},_Init:function(aArg){this.__proto__=C.A$4;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$4._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5x={BdI:function(Nu){var B4=
A.jb.Ri;switch(Nu){case 3:B4=A.jb.E1;break;case 2:B4=A.jb.H_;break;case 1:B4=A.jb.
Gj;break;case 4:B4=A.jb.Afu;break;case 0:case 5:B4=A.jb.Ri;break;default:A.ab5("%s"
,Hr);}return B4;},Qr:function(Nu){var B4=A.jb.Ri;switch(Nu){case 3:B4=A.jb.E1;break;
case 2:B4=A.jb.H_;break;case 1:B4=A.jb.Gj;break;case 0:case 5:B4=A.jb.CJ;break;case
4:B4=A.jb.Afu;break;default:A.ab5("%s%e",Hr,Nu);}return B4;},XC:function(Nu){var
B4=A.jb.Text;switch(Nu){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hr);}return B4;},_Init:function(aArg){this.
__proto__=C.A5x;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5x._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6c={MonthToString:null,Bje:function(L7){if(!L7)return A.
jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L7);return Av.Format(A.aaR(
A.acf.Bjg));}},AjN:function(L7){if(!L7)return A.jV;else{var Av=A._NewObject(A.Core.
Bs,0);Av.Initialize(L7);return Av.Format(A.aaR(A.acf.Ag0));}},AC1:function(L7){if(
!L7)return A.jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L7);return Av.
Format(A.aaR(A.acf.Bjf));}},A6U:function(L7){if(!L7)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L7);return Av.Format(IW);}},AC2:function(A1s,A1a,Iw){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qo=A._NewObject(A.Core.Bs,0);var BcY=
A1a<A1s;if(BcY){Dx.Initialize(A1a);Qo.Initialize(A1s);}else{Dx.Initialize(A1s);Qo.
Initialize(A1a);}var ABJ=0;var ApB=0;var Qm=0;Qm+=(Qo.GL-Dx.GL);if(Qm<0){switch(
Qo.Hk){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qm+=31;break;case 5:case
7:case 10:case 12:Qm+=30;break;case 3:if(this.Bj_(Qo.Year))Qm+=29;else Qm+=28;break;
default:A.ab5("%s%i",It,Qo.Hk);}ApB--;}ApB+=(Qo.Hk-Dx.Hk);if(ApB<0){ApB+=12;ABJ--;
}ABJ+=(Qo.Year-Dx.Year);if(BcY){ABJ=-ABJ;ApB=-ApB;Qm=-Qm;}var index=Iw.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bel=Iw.charCodeAt(index+1)||0;Iw=A.ab1(
Iw,index,2);switch(Bel){case 0x64:Iw=A.abU(Iw,Qm.toFixed(),index);break;case 0x6D:
Iw=A.abU(Iw,ApB.toFixed(),index);break;case 0x79:case 0x59:Iw=A.abU(Iw,ABJ.toFixed(
),index);break;case 0x25:Iw=A.abU(Iw,O6,index);break;default:A.ab5("%s%s",P_,O6+
String.fromCharCode(Bel));}index=Iw.indexOf(String.fromCharCode(0x25),index+1);}
return Iw;},Bj_:function(Ac7){if(!(Ac7%4)&&!!(Ac7%100))return true;if(!(Ac7%400)
)return true;return false;},Bja:function(L7){if(!L7)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L7);return this.MonthToString.BT(Av.Hk)+Av.Format(P$);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6c;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KO={_Init:function(){C.A6c._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7Z={Af4:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAe);case 1:return A.aaR(A.acf.A7P);default:A.ab5("%s%s",CR,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bz1:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AL3
);case 1:return A.aaL(A.ach.AL2);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzW:function(AoU,Eo){if(AoU<A._GetAutoObject(
A.Device.Helper).ADf(Eo))return A.jb.Gj;else if(AoU<A._GetAutoObject(A.Device.Helper
).ADe(Eo))return A.jb.H_;else return A.jb.E1;},AzY:function(AoU,Eo){if(AoU<A._GetAutoObject(
A.Device.Helper).ADf(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADe(
Eo);return A.jb.Text;}},Aaw:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BjM);case 1:return A.aaR(A.acf.BoD);default:
A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzX:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BdT:function(Att,GA){var Aqd;if(((Att<10000)||((Att===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OP===2))Aqd=10;else if(((Att<50000
)||((Att===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OP)Aqd=100;else
if(((Att<100000)||((Att===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OP)Aqd=500;else Aqd=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqd=(Aqd/2)|0;break;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqd;},BdN:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ADW);case 1:return A.aaL(A.
ach.ADX);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlB:function(Bcj,Byl,Bxw){if(!Bcj)return 0;return Math.round((
Bxw-Byl)/Bcj)|0;},_Init:function(aArg){this.__proto__=C.A7Z;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7Z._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpK={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpL={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
BpM={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5I={AC8:function(AfI
){var B;if(!!!(AfI.length%2))return-1;var BgM=0;var BgN=0;var Aip;var O=0;for(;O<
AfI.length;O++){Aip=A.wz(A.abW(AfI,O,1),-1,10);if(Aip===-1)return-1;if(!!(O%2))BgM+=
Aip;else BgN+=Aip;}Aip=((3*BgN)+BgM)%10;if(!!Aip)Aip=10-Aip;return Aip;},AVQ:function(
AfI){if(!AfI.length)return false;if(!!(AfI.length%2))return false;return A.wz(A.
abW(AfI,AfI.length-1,1),-2,10)===this.AC8(A.abV(AfI,AfI.length-1));},_Init:function(
aArg){this.__proto__=C.A5I;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VH={_Init:function(){C.A5I._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KO._this))B._ReInit(),C.KO._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VH._this))B._ReInit(),C.VH._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KO._this)&&(B._cycle!=D))B._Done(C.KO._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VH._this)&&(B._cycle!=D))
B._Done(C.VH._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */