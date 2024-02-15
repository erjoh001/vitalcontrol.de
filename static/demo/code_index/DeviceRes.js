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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acj)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
acj=(function(){var A=index;var C={};
var B9="Unhandled enum BodyTemperature: ";var BC="Unhandled BodyTemperatureValue: ";
var EW="ERROR: Unhandled temperature unit: ";var He="ERROR: unhandled assessment.";
var I7="%H:%M";var IH="Invalid month";var OM="%";var PQ="Invalid format code";var
PR=" %Y";var CO="ERROR: Unhandled mass unit: ";
C.A9B={BwI:function(Ec,Ra){if((Ra>=A._GetAutoObject(A.Device.Helper).AuK(Ec))||(Ra<=
A._GetAutoObject(A.Device.Device).Zo))return 1;else return 0;},BwH:function(Ec,Ra
){var Nh=A._GetAutoObject(A.Device.Converter).AiR(Ra,Ec);switch(Nh){case 3:return A.
aaR(A.acf.AuR);case 2:return A.aaR(A.acf.BgQ);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bhm);default:throw new Error(B9+Nh.toFixed());}},Bwz:function(
Ec,Ra){var Nh=A._GetAutoObject(A.Device.Converter).AiR(Ra,Ec);switch(Nh){case 3:
return A.jb.FW;case 2:return A.jb.HZ;case 1:return A.jb.EU;case 0:return A.jb.AeV;
default:throw new Error(BC+Nh.toFixed());}},Alc:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AFC);case 1:return A.
aaR(A.acf.Bm6);default:A.ab5("%s%s",EW,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BwA:function(Ec,Ra){var Nh=A._GetAutoObject(A.Device.Converter
).AiR(Ra,Ec);switch(Nh){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bh;default:throw new Error(B9+Nh.toFixed());}},BwC:function(Ec,Ra){var Nh=A._GetAutoObject(
A.Device.Converter).AiR(Ra,Ec);switch(Nh){case 3:return A.jb.FW;case 2:return A.
jb.Text;case 1:return A.jb.EU;case 0:return A.jb.AeV;default:throw new Error(BC+
Nh.toFixed());}},BwD:function(Ec,Ra){var Nh=A._GetAutoObject(A.Device.Converter).
AiR(Ra,Ec);switch(Nh){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(B9+Nh.toFixed());}},BwB:function(Ec,Ra
){var Nh=A._GetAutoObject(A.Device.Converter).AiR(Ra,Ec);switch(Nh){case 3:return A.
jb.Bh;case 2:case 1:case 0:return A.jb.FW;default:throw new Error(B9+Nh.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A9B;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A9B._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A3h={Ba2:function(Ne){var BZ=
A.jb.Ab6;switch(Ne){case 3:BZ=A.jb.EU;break;case 2:BZ=A.jb.HZ;break;case 1:BZ=A.
jb.FW;break;case 4:BZ=A.jb.AeV;break;case 0:case 5:BZ=A.jb.Ab6;break;default:A.ab5(
"%s",He);}return BZ;},P9:function(Ne){var BZ=A.jb.Ab6;switch(Ne){case 3:BZ=A.jb.
EU;break;case 2:BZ=A.jb.HZ;break;case 1:BZ=A.jb.FW;break;case 0:case 5:BZ=A.jb.CE;
break;case 4:BZ=A.jb.AeV;break;default:A.ab5("%s%e",He,Ne);}return BZ;},W6:function(
Ne){var BZ=A.jb.Text;switch(Ne){case 3:case 1:BZ=A.jb.Bh;break;case 2:case 0:case
4:case 5:BZ=A.jb.Text;break;default:A.ab5("%s",He);}return BZ;},_Init:function(aArg
){this.__proto__=C.A3h;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.
Assessment={_Init:function(){C.A3h._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.A3$={MonthToString:null,Bf$:function(LW){
if(!LW)return A.jV;else{var At=A._NewObject(A.Core.Bt,0);At.Initialize(LW);return At.
Format(A.aaR(A.acf.Bgb));}},Ajj:function(LW){if(!LW)return A.jV;else{var At=A._NewObject(
A.Core.Bt,0);At.Initialize(LW);return At.Format(A.aaR(A.acf.Agk));}},ABM:function(
LW){if(!LW)return A.jV;else{var At=A._NewObject(A.Core.Bt,0);At.Initialize(LW);return At.
Format(A.aaR(A.acf.Bga));}},A4T:function(LW){if(!LW)return A.jV;else{var At=A._NewObject(
A.Core.Bt,0);At.Initialize(LW);return At.Format(I7);}},ABN:function(AZl,AY7,Ik){
var B;var Dm=A._NewObject(A.Core.Bt,0);var P6=A._NewObject(A.Core.Bt,0);var Bai=
AY7<AZl;if(Bai){Dm.Initialize(AY7);P6.Initialize(AZl);}else{Dm.Initialize(AZl);P6.
Initialize(AY7);}var AAv=0;var AoW=0;var P4=0;P4+=(P6.Gz-Dm.Gz);if(P4<0){switch(
P6.G9){case 1:case 2:case 4:case 6:case 8:case 9:case 11:P4+=31;break;case 5:case
7:case 10:case 12:P4+=30;break;case 3:if(this.Bg4(P6.Year))P4+=29;else P4+=28;break;
default:A.ab5("%s%i",IH,P6.G9);}AoW--;}AoW+=(P6.G9-Dm.G9);if(AoW<0){AoW+=12;AAv--;
}AAv+=(P6.Year-Dm.Year);if(Bai){AAv=-AAv;AoW=-AoW;P4=-P4;}var index=Ik.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var BbD=Ik.charCodeAt(index+1)||0;Ik=A.ab1(
Ik,index,2);switch(BbD){case 0x64:Ik=A.abU(Ik,P4.toFixed(),index);break;case 0x6D:
Ik=A.abU(Ik,AoW.toFixed(),index);break;case 0x79:case 0x59:Ik=A.abU(Ik,AAv.toFixed(
),index);break;case 0x25:Ik=A.abU(Ik,OM,index);break;default:A.ab5("%s%s",PQ,OM+
String.fromCharCode(BbD));}index=Ik.indexOf(String.fromCharCode(0x25),index+1);}
return Ik;},Bg4:function(Acx){if(!(Acx%4)&&!!(Acx%100))return true;if(!(Acx%400)
)return true;return false;},Bf7:function(LW){if(!LW)return A.jV;else{var At=A._NewObject(
A.Core.Bt,0);At.Initialize(LW);return this.MonthToString.BX(At.G9)+At.Format(PR);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A3$;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KB={_Init:function(){C.A3$._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A5T={Afu:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Ay6);case 1:return A.aaR(A.acf.A5K);default:A.ab5("%s%s",CO,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bwy:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AKw
);case 1:return A.aaL(A.ach.AKv);default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AyO:function(Aoe,Ec){if(Aoe<A._GetAutoObject(
A.Device.Helper).AB0(Ec))return A.jb.FW;else if(Aoe<A._GetAutoObject(A.Device.Helper
).ABZ(Ec))return A.jb.HZ;else return A.jb.EU;},AyQ:function(Aoe,Ec){if(Aoe<A._GetAutoObject(
A.Device.Helper).AB0(Ec))return A.jb.Bh;else{A._GetAutoObject(A.Device.Helper).ABZ(
Ec);return A.jb.Text;}},ZX:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.aaR(A.acf.BgG);case 1:return A.aaR(A.acf.Blt);default:A.ab5("%s%s"
,CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},AyP:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},Bbb:function(AsJ,Gn){var ApB;if(((AsJ<10000)||((AsJ===10000)&&(Gn===5)))&&(A._GetAutoObject(
A.Device.Device).Ow===2))ApB=10;else if(((AsJ<50000)||((AsJ===50000)&&(Gn===5)))&&
!!A._GetAutoObject(A.Device.Device).Ow)ApB=100;else if(((AsJ<100000)||((AsJ===100000
)&&(Gn===5)))&&!!A._GetAutoObject(A.Device.Device).Ow)ApB=500;else ApB=1000;switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:ApB=(ApB/2)|0;break;
default:A.ab5("%s%s",CO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return ApB;
},Ba7:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
aaL(A.ach.Au6);case 1:return A.aaL(A.ach.Au7);default:A.ab5("%s%s",CO,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},Ak2:function(A$H,BuX,Bt7){if(
!A$H)return 0;return Math.round((Bt7-BuX)/A$H)|0;},_Init:function(aArg){this.__proto__=
C.A5T;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DM={_Init:function(
){C.A5T._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Bmu={3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn"
,10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF",15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439"
,17:"Ye\u015Fil"};C.Bmv={3:"\u7D05\u8272",0:"Red",7:"Punainen",8:"Rouge",9:"Rot"
,10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF",15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439"
,17:"K\u0131rm\u0131z\u0131"};C.Bmw={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:
"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF",15:"\u0416\u0451\u043B\u0442\u044B\u0439"
,17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KB._this))B._ReInit(),C.KB._ReInit.call(B);if((B=C.DM._this
))B._ReInit(),C.DM._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Temperature.
_this)&&(B._cycle!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this
)&&(B._cycle!=D))B._Done(C.Assessment._this=null);if((B=C.KB._this)&&(B._cycle!=
D))B._Done(C.KB._this=null);if((B=C.DM._this)&&(B._cycle!=D))B._Done(C.DM._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */