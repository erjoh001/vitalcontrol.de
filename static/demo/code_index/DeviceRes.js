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
var Cc="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var E6="ERROR: Unhandled temperature unit: ";var Hp="ERROR: unhandled assessment.";
var IS="%H:%M";var Ir="Invalid month";var O1="%";var P4="Invalid format code";var
P5=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A_$={By7:function(En,Rq){if((Rq>=A._GetAutoObject(A.Device.Helper).ACM(En))||(Rq<=
A._GetAutoObject(A.Device.Device).AcA))return 1;else return 0;},By6:function(En,
Rq){var Nq=A._GetAutoObject(A.Device.Converter).Ajh(Rq,En);switch(Nq){case 3:return A.
aaR(A.acf.Avm);case 2:return A.aaR(A.acf.BiQ);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bjk);default:throw new Error(Cc+Nq.toFixed());}},ByY:function(
En,Rq){var Nq=A._GetAutoObject(A.Device.Converter).Ajh(Rq,En);switch(Nq){case 3:
return A.jb.Gh;case 2:return A.jb.H8;case 1:return A.jb.E1;case 0:return A.jb.Afp;
default:throw new Error(BD+Nq.toFixed());}},AlC:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGJ);case 1:return A.
aaR(A.acf.Bo6);default:A.ab5("%s%s",E6,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},ByZ:function(En,Rq){var Nq=A._GetAutoObject(A.Device.Converter
).Ajh(Rq,En);switch(Nq){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nq.toFixed());}},By1:function(En,Rq){var Nq=A._GetAutoObject(
A.Device.Converter).Ajh(Rq,En);switch(Nq){case 3:return A.jb.Gh;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afp;default:throw new Error(BD+
Nq.toFixed());}},By2:function(En,Rq){var Nq=A._GetAutoObject(A.Device.Converter).
Ajh(Rq,En);switch(Nq){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nq.toFixed());}},By0:function(En,Rq
){var Nq=A._GetAutoObject(A.Device.Converter).Ajh(Rq,En);switch(Nq){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gh;default:throw new Error(Cc+Nq.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A_$;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A_$._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4K={BcI:function(Nn){var B2=
A.jb.Rd;switch(Nn){case 3:B2=A.jb.E1;break;case 2:B2=A.jb.H8;break;case 1:B2=A.jb.
Gh;break;case 4:B2=A.jb.Afp;break;case 0:case 5:B2=A.jb.Rd;break;default:A.ab5("%s"
,Hp);}return B2;},Qm:function(Nn){var B2=A.jb.Rd;switch(Nn){case 3:B2=A.jb.E1;break;
case 2:B2=A.jb.H8;break;case 1:B2=A.jb.Gh;break;case 0:case 5:B2=A.jb.CJ;break;case
4:B2=A.jb.Afp;break;default:A.ab5("%s%e",Hp,Nn);}return B2;},Xu:function(Nn){var
B2=A.jb.Text;switch(Nn){case 3:case 1:B2=A.jb.Bm;break;case 2:case 0:case 4:case
5:B2=A.jb.Text;break;default:A.ab5("%s",Hp);}return B2;},_Init:function(aArg){this.
__proto__=C.A4K;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4K._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5p={MonthToString:null,Bh9:function(L3){if(!L3)return A.
jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(
A.acf.Bh$));}},AjG:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(A.Core.
Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(A.acf.AgU));}},ACJ:function(L3){if(
!L3)return A.jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.
Format(A.aaR(A.acf.Bh_));}},A5$:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return Au.Format(IS);}},ACK:function(A0J,A0s,Iu){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qj=A._NewObject(A.Core.Bs,0);var BbZ=
A0s<A0J;if(BbZ){Dx.Initialize(A0s);Qj.Initialize(A0J);}else{Dx.Initialize(A0J);Qj.
Initialize(A0s);}var ABs=0;var Aps=0;var Qh=0;Qh+=(Qj.GK-Dx.GK);if(Qh<0){switch(
Qj.Hi){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qh+=31;break;case 5:case
7:case 10:case 12:Qh+=30;break;case 3:if(this.Bi3(Qj.Year))Qh+=29;else Qh+=28;break;
default:A.ab5("%s%i",Ir,Qj.Hi);}Aps--;}Aps+=(Qj.Hi-Dx.Hi);if(Aps<0){Aps+=12;ABs--;
}ABs+=(Qj.Year-Dx.Year);if(BbZ){ABs=-ABs;Aps=-Aps;Qh=-Qh;}var index=Iu.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bdk=Iu.charCodeAt(index+1)||0;Iu=A.ab1(
Iu,index,2);switch(Bdk){case 0x64:Iu=A.abU(Iu,Qh.toFixed(),index);break;case 0x6D:
Iu=A.abU(Iu,Aps.toFixed(),index);break;case 0x79:case 0x59:Iu=A.abU(Iu,ABs.toFixed(
),index);break;case 0x25:Iu=A.abU(Iu,O1,index);break;default:A.ab5("%s%s",P4,O1+
String.fromCharCode(Bdk));}index=Iu.indexOf(String.fromCharCode(0x25),index+1);}
return Iu;},Bi3:function(Ac1){if(!(Ac1%4)&&!!(Ac1%100))return true;if(!(Ac1%400)
)return true;return false;},Bh5:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return this.MonthToString.BR(Au.Hi)+Au.Format(P5);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5p;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KJ={_Init:function(){C.A5p._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7c={AfZ:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Az1);case 1:return A.aaR(A.acf.A65);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},ByX:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALM
);case 1:return A.aaL(A.ach.ALL);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzH:function(AoL,En){if(AoL<A._GetAutoObject(
A.Device.Helper).ACY(En))return A.jb.Gh;else if(AoL<A._GetAutoObject(A.Device.Helper
).ACX(En))return A.jb.H8;else return A.jb.E1;},AzJ:function(AoL,En){if(AoL<A._GetAutoObject(
A.Device.Helper).ACY(En))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ACX(
En);return A.jb.Text;}},Aaq:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BiF);case 1:return A.aaR(A.acf.Bnq);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzI:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BcT:function(Ate,Gz){var Ap6;if(((Ate<10000)||((Ate===10000
)&&(Gz===5)))&&(A._GetAutoObject(A.Device.Device).OJ===2))Ap6=10;else if(((Ate<50000
)||((Ate===50000)&&(Gz===5)))&&!!A._GetAutoObject(A.Device.Device).OJ)Ap6=100;else
if(((Ate<100000)||((Ate===100000)&&(Gz===5)))&&!!A._GetAutoObject(A.Device.Device
).OJ)Ap6=500;else Ap6=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Ap6=(Ap6/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Ap6;},BcN:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvD);case 1:return A.aaL(A.
ach.AvE);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alq:function(Bbm,Bxi,Bws){if(!Bbm)return 0;return Math.round((
Bws-Bxi)/Bbm)|0;},_Init:function(aArg){this.__proto__=C.A7c;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7c._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.Bot={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bou={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bov={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A4V={ACQ:function(AfD
){var B;if(!!!(AfD.length%2))return-1;var BfM=0;var BfN=0;var Aij;var O=0;for(;O<
AfD.length;O++){Aij=A.wz(A.abW(AfD,O,1),-1,10);if(Aij===-1)return-1;if(!!(O%2))BfM+=
Aij;else BfN+=Aij;}Aij=((3*BfN)+BfM)%10;if(!!Aij)Aij=10-Aij;return Aij;},AVh:function(
AfD){if(!AfD.length)return false;if(!!(AfD.length%2))return false;return A.wz(A.
abW(AfD,AfD.length-1,1),-2,10)===this.ACQ(A.abV(AfD,AfD.length-1));},_Init:function(
aArg){this.__proto__=C.A4V;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VA={_Init:function(){C.A4V._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KJ._this))B._ReInit(),C.KJ._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VA._this))B._ReInit(),C.VA._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KJ._this)&&(B._cycle!=D))B._Done(C.KJ._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VA._this)&&(B._cycle!=D))
B._Done(C.VA._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */