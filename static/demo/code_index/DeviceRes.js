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
var EU="ERROR: Unhandled temperature unit: ";var Hd="ERROR: unhandled assessment.";
var I7="%H:%M";var II="Invalid month";var OI="%";var PM="Invalid format code";var
PN=" %Y";var CJ="ERROR: Unhandled mass unit: ";
C.A8W={BvX:function(Eb,Q8){if((Q8>=A._GetAutoObject(A.Device.Helper).Aum(Eb))||(Q8<=
A._GetAutoObject(A.Device.Device).Zj))return 1;else return 0;},BvW:function(Eb,Q8
){var Nc=A._GetAutoObject(A.Device.Converter).AiI(Q8,Eb);switch(Nc){case 3:return A.
aaR(A.acf.Aut);case 2:return A.aaR(A.acf.Bgc);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BgL);default:throw new Error(B9+Nc.toFixed());}},BvO:function(
Eb,Q8){var Nc=A._GetAutoObject(A.Device.Converter).AiI(Q8,Eb);switch(Nc){case 3:
return A.jb.FU;case 2:return A.jb.HY;case 1:return A.jb.EX;case 0:return A.jb.AeL;
default:throw new Error(BC+Nc.toFixed());}},Ak2:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AFb);case 1:return A.
aaR(A.acf.Bmn);default:A.ab5("%s%s",EU,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BvP:function(Eb,Q8){var Nc=A._GetAutoObject(A.Device.Converter
).AiI(Q8,Eb);switch(Nc){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bh;default:throw new Error(B9+Nc.toFixed());}},BvR:function(Eb,Q8){var Nc=A._GetAutoObject(
A.Device.Converter).AiI(Q8,Eb);switch(Nc){case 3:return A.jb.FU;case 2:return A.
jb.Text;case 1:return A.jb.EX;case 0:return A.jb.AeL;default:throw new Error(BC+
Nc.toFixed());}},BvS:function(Eb,Q8){var Nc=A._GetAutoObject(A.Device.Converter).
AiI(Q8,Eb);switch(Nc){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(B9+Nc.toFixed());}},BvQ:function(Eb,Q8
){var Nc=A._GetAutoObject(A.Device.Converter).AiI(Q8,Eb);switch(Nc){case 3:return A.
jb.Bh;case 2:case 1:case 0:return A.jb.FU;default:throw new Error(B9+Nc.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A8W;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A8W._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A2D={Ban:function(M$){var BX=
A.jb.AbX;switch(M$){case 3:BX=A.jb.EX;break;case 2:BX=A.jb.HY;break;case 1:BX=A.
jb.FU;break;case 4:BX=A.jb.AeL;break;case 0:case 5:BX=A.jb.AbX;break;default:A.ab5(
"%s",Hd);}return BX;},P4:function(M$){var BX=A.jb.AbX;switch(M$){case 3:BX=A.jb.
EX;break;case 2:BX=A.jb.HY;break;case 1:BX=A.jb.FU;break;case 0:case 5:BX=A.jb.CM;
break;case 4:BX=A.jb.AeL;break;default:A.ab5("%s%e",Hd,M$);}return BX;},W1:function(
M$){var BX=A.jb.Text;switch(M$){case 3:case 1:BX=A.jb.Bh;break;case 2:case 0:case
4:case 5:BX=A.jb.Text;break;default:A.ab5("%s",Hd);}return BX;},_Init:function(aArg
){this.__proto__=C.A2D;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.
Assessment={_Init:function(){C.A2D._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.A3v={MonthToString:null,Bfx:function(LS){
if(!LS)return A.jV;else{var As=A._NewObject(A.Core.Bt,0);As.Initialize(LS);return As.
Format(A.aaR(A.acf.Bfz));}},Ai$:function(LS){if(!LS)return A.jV;else{var As=A._NewObject(
A.Core.Bt,0);As.Initialize(LS);return As.Format(A.aaR(A.acf.Af$));}},ABl:function(
LS){if(!LS)return A.jV;else{var As=A._NewObject(A.Core.Bt,0);As.Initialize(LS);return As.
Format(A.aaR(A.acf.Bfy));}},A4d:function(LS){if(!LS)return A.jV;else{var As=A._NewObject(
A.Core.Bt,0);As.Initialize(LS);return As.Format(I7);}},ABm:function(AYH,AYr,Ij){
var B;var Dl=A._NewObject(A.Core.Bt,0);var P1=A._NewObject(A.Core.Bt,0);var A$E=
AYr<AYH;if(A$E){Dl.Initialize(AYr);P1.Initialize(AYH);}else{Dl.Initialize(AYH);P1.
Initialize(AYr);}var Az8=0;var AoL=0;var PZ=0;PZ+=(P1.Gv-Dl.Gv);if(PZ<0){switch(
P1.G7){case 1:case 2:case 4:case 6:case 8:case 9:case 11:PZ+=31;break;case 5:case
7:case 10:case 12:PZ+=30;break;case 3:if(this.Bgq(P1.Year))PZ+=29;else PZ+=28;break;
default:A.ab5("%s%i",II,P1.G7);}AoL--;}AoL+=(P1.G7-Dl.G7);if(AoL<0){AoL+=12;Az8--;
}Az8+=(P1.Year-Dl.Year);if(A$E){Az8=-Az8;AoL=-AoL;PZ=-PZ;}var index=Ij.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Ba0=Ij.charCodeAt(index+1)||0;Ij=A.ab1(
Ij,index,2);switch(Ba0){case 0x64:Ij=A.abU(Ij,PZ.toFixed(),index);break;case 0x6D:
Ij=A.abU(Ij,AoL.toFixed(),index);break;case 0x79:case 0x59:Ij=A.abU(Ij,Az8.toFixed(
),index);break;case 0x25:Ij=A.abU(Ij,OI,index);break;default:A.ab5("%s%s",PM,OI+
String.fromCharCode(Ba0));}index=Ij.indexOf(String.fromCharCode(0x25),index+1);}
return Ij;},Bgq:function(Acp){if(!(Acp%4)&&!!(Acp%100))return true;if(!(Acp%400)
)return true;return false;},Bft:function(LS){if(!LS)return A.jV;else{var As=A._NewObject(
A.Core.Bt,0);As.Initialize(LS);return this.MonthToString.B0(As.G7)+As.Format(PN);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A3v;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.Ky={_Init:function(){C.A3v._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A5e={AcI:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AIG);case 1:return A.aaR(A.acf.A47);default:A.ab5("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BvN:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AJ2
);case 1:return A.aaL(A.ach.AJ1);default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ays:function(An5,Eb){if(An5<A._GetAutoObject(
A.Device.Helper).ABy(Eb))return A.jb.FU;else if(An5<A._GetAutoObject(A.Device.Helper
).ABx(Eb))return A.jb.HY;else return A.jb.EX;},Ayu:function(An5,Eb){if(An5<A._GetAutoObject(
A.Device.Helper).ABy(Eb))return A.jb.Bh;else{A._GetAutoObject(A.Device.Helper).ABx(
Eb);return A.jb.Text;}},ZQ:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.aaR(A.acf.Bf4);case 1:return A.aaR(A.acf.BkP);default:A.ab5("%s%s"
,CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Ayt:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},Bay:function(AHj,GF){var Ats;if((AHj<50000)||((AHj===50000)&&(GF===5)))Ats=100;
else if((AHj<100000)||((AHj===100000)&&(GF===5)))Ats=500;else Ats=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:Ats=(Ats/2)|0;break;
default:A.ab5("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return Ats;
},Bas:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
aaL(A.ach.AuI);case 1:return A.aaL(A.ach.AuJ);default:A.ab5("%s%s",CJ,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},AkQ:function(A_2,Bt$,Btj){if(
!A_2)return 0;return Math.round((Btj-Bt$)/A_2)|0;},_Init:function(aArg){this.__proto__=
C.A5e;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DI={_Init:function(
){C.A5e._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.BlO={3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn"
,10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF",15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439"
,17:"Ye\u015Fil"};C.BlP={3:"\u7D05\u8272",0:"Red",7:"Punainen",8:"Rouge",9:"Rot"
,10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF",15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439"
,17:"K\u0131rm\u0131z\u0131"};C.BlQ={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:
"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF",15:"\u0416\u0451\u043B\u0442\u044B\u0439"
,17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.Ky._this))B._ReInit(),C.Ky._ReInit.call(B);if((B=C.DI._this
))B._ReInit(),C.DI._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Temperature.
_this)&&(B._cycle!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this
)&&(B._cycle!=D))B._Done(C.Assessment._this=null);if((B=C.Ky._this)&&(B._cycle!=
D))B._Done(C.Ky._this=null);if((B=C.DI._this)&&(B._cycle!=D))B._Done(C.DI._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */