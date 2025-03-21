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
var I0="%H:%M";var Iw="Invalid month";var O$="%";var Qb="Invalid format code";var
Qc=" %Y";var CR="ERROR: Unhandled mass unit: ";
C.Bad={BAi:function(Eo,Rx){if((Rx>=A._GetAutoObject(A.Device.Helper).ADc(Eo))||(Rx<=
A._GetAutoObject(A.Device.Device).AcK))return 1;else return 0;},BAh:function(Eo,
Rx){var NC=A._GetAutoObject(A.Device.Converter).Ajo(Rx,Eo);switch(NC){case 3:return A.
aaR(A.acf.AvF);case 2:return A.aaR(A.acf.Bj7);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BkC);default:throw new Error(Cf+NC.toFixed());}},Bz$:function(
Eo,Rx){var NC=A._GetAutoObject(A.Device.Converter).Ajo(Rx,Eo);switch(NC){case 3:
return A.jb.Gk;case 2:return A.jb.Ib;case 1:return A.jb.E1;case 0:return A.jb.Afx;
default:throw new Error(BD+NC.toFixed());}},AlQ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AG_);case 1:return A.
acf.Bqr;default:A.ab5("%s%s",E8,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BAa:function(Eo,Rx){var NC=A._GetAutoObject(A.Device.Converter
).Ajo(Rx,Eo);switch(NC){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cf+NC.toFixed());}},BAc:function(Eo,Rx){var NC=A._GetAutoObject(
A.Device.Converter).Ajo(Rx,Eo);switch(NC){case 3:return A.jb.Gk;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afx;default:throw new Error(BD+
NC.toFixed());}},BAd:function(Eo,Rx){var NC=A._GetAutoObject(A.Device.Converter).
Ajo(Rx,Eo);switch(NC){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cf+NC.toFixed());}},BAb:function(Eo,Rx
){var NC=A._GetAutoObject(A.Device.Converter).Ajo(Rx,Eo);switch(NC){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gk;default:throw new Error(Cf+NC.toFixed(
));}},_Init:function(aArg){this.__proto__=C.Bad;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.Bad._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5H={BdS:function(NA){var B4=
A.jb.Rk;switch(NA){case 3:B4=A.jb.E1;break;case 2:B4=A.jb.Ib;break;case 1:B4=A.jb.
Gk;break;case 4:B4=A.jb.Afx;break;case 0:case 5:B4=A.jb.Rk;break;default:A.ab5("%s"
,Hs);}return B4;},Qu:function(NA){var B4=A.jb.Rk;switch(NA){case 3:B4=A.jb.E1;break;
case 2:B4=A.jb.Ib;break;case 1:B4=A.jb.Gk;break;case 0:case 5:B4=A.jb.CK;break;case
4:B4=A.jb.Afx;break;default:A.ab5("%s%e",Hs,NA);}return B4;},XG:function(NA){var
B4=A.jb.Text;switch(NA){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hs);}return B4;},_Init:function(aArg){this.
__proto__=C.A5H;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5H._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6m={MonthToString:null,Bjo:function(L$){if(!L$)return A.
jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L$);return Av.Format(A.aaR(
A.acf.Bjq));}},AjN:function(L$){if(!L$)return A.jV;else{var Av=A._NewObject(A.Core.
Bs,0);Av.Initialize(L$);return Av.Format(A.aaR(A.acf.Ag1));}},AC$:function(L$){if(
!L$)return A.jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L$);return Av.
Format(A.aaR(A.acf.Bjp));}},A64:function(L$){if(!L$)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L$);return Av.Format(I0);}},ADa:function(A1D,A1l,Iz){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qr=A._NewObject(A.Core.Bs,0);var Bc8=
A1l<A1D;if(Bc8){Dx.Initialize(A1l);Qr.Initialize(A1D);}else{Dx.Initialize(A1D);Qr.
Initialize(A1l);}var ABS=0;var ApE=0;var Qp=0;Qp+=(Qr.GL-Dx.GL);if(Qp<0){switch(
Qr.Hm){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qp+=31;break;case 5:case
7:case 10:case 12:Qp+=30;break;case 3:if(this.Bki(Qr.Year))Qp+=29;else Qp+=28;break;
default:A.ab5("%s%i",Iw,Qr.Hm);}ApE--;}ApE+=(Qr.Hm-Dx.Hm);if(ApE<0){ApE+=12;ABS--;
}ABS+=(Qr.Year-Dx.Year);if(Bc8){ABS=-ABS;ApE=-ApE;Qp=-Qp;}var index=Iz.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bev=Iz.charCodeAt(index+1)||0;Iz=A.ab1(
Iz,index,2);switch(Bev){case 0x64:Iz=A.abU(Iz,Qp.toFixed(),index);break;case 0x6D:
Iz=A.abU(Iz,ApE.toFixed(),index);break;case 0x79:case 0x59:Iz=A.abU(Iz,ABS.toFixed(
),index);break;case 0x25:Iz=A.abU(Iz,O$,index);break;default:A.ab5("%s%s",Qb,O$+
String.fromCharCode(Bev));}index=Iz.indexOf(String.fromCharCode(0x25),index+1);}
return Iz;},Bki:function(Ac8){if(!(Ac8%4)&&!!(Ac8%100))return true;if(!(Ac8%400)
)return true;return false;},Bjk:function(L$){if(!L$)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L$);return this.MonthToString.BT(Av.Hm)+Av.Format(Qc);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6m;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KR={_Init:function(){C.A6m._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A79={Af7:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAn);case 1:return A.aaR(A.acf.A7Z);default:A.ab5("%s%s",CR,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bz_:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AL9
);case 1:return A.aaL(A.ach.AL8);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Az5:function(AoX,Eo){if(AoX<A._GetAutoObject(
A.Device.Helper).ADp(Eo))return A.jb.Gk;else if(AoX<A._GetAutoObject(A.Device.Helper
).ADo(Eo))return A.jb.Ib;else return A.jb.E1;},Az7:function(AoX,Eo){if(AoX<A._GetAutoObject(
A.Device.Helper).ADp(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADo(
Eo);return A.jb.Text;}},AaE:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BjW);case 1:return A.aaR(A.acf.BoM);default:
A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},Az6:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bd3:function(Atx,GA){var Aqh;if(((Atx<10000)||((Atx===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OT===2))Aqh=10;else if(((Atx<50000
)||((Atx===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OT)Aqh=100;else
if(((Atx<100000)||((Atx===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OT)Aqh=500;else Aqh=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqh=(Aqh/2)|0;break;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqh;},BdX:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AD6);case 1:return A.aaL(A.
ach.AD7);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlE:function(Bct,Byt,BxE){if(!Bct)return 0;return Math.round((
BxE-Byt)/Bct)|0;},_Init:function(aArg){this.__proto__=C.A79;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A79._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpR={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpS={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
BpT={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5S={ADg:function(AfL
){var B;if(!!!(AfL.length%2))return-1;var BgW=0;var BgX=0;var Aiq;var O=0;for(;O<
AfL.length;O++){Aiq=A.wz(A.abW(AfL,O,1),-1,10);if(Aiq===-1)return-1;if(!!(O%2))BgW+=
Aiq;else BgX+=Aiq;}Aiq=((3*BgX)+BgW)%10;if(!!Aiq)Aiq=10-Aiq;return Aiq;},AV1:function(
AfL){if(!AfL.length)return false;if(!!(AfL.length%2))return false;return A.wz(A.
abW(AfL,AfL.length-1,1),-2,10)===this.ADg(A.abV(AfL,AfL.length-1));},_Init:function(
aArg){this.__proto__=C.A5S;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VN={_Init:function(){C.A5S._Init.call(this,0);},_ReInit:function(){},_variants:
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

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */