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
var IS="%H:%M";var Ir="Invalid month";var O1="%";var P3="Invalid format code";var
P4=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$a={By7:function(En,Rr){if((Rr>=A._GetAutoObject(A.Device.Helper).ACM(En))||(Rr<=
A._GetAutoObject(A.Device.Device).AcA))return 1;else return 0;},By6:function(En,
Rr){var Nq=A._GetAutoObject(A.Device.Converter).Ajh(Rr,En);switch(Nq){case 3:return A.
aaR(A.acf.Avl);case 2:return A.aaR(A.acf.BiR);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bjl);default:throw new Error(Cc+Nq.toFixed());}},ByY:function(
En,Rr){var Nq=A._GetAutoObject(A.Device.Converter).Ajh(Rr,En);switch(Nq){case 3:
return A.jb.Gi;case 2:return A.jb.H8;case 1:return A.jb.E2;case 0:return A.jb.Afp;
default:throw new Error(BD+Nq.toFixed());}},AlC:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGJ);case 1:return A.
aaR(A.acf.Bo7);default:A.ab5("%s%s",E6,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},ByZ:function(En,Rr){var Nq=A._GetAutoObject(A.Device.Converter
).Ajh(Rr,En);switch(Nq){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nq.toFixed());}},By1:function(En,Rr){var Nq=A._GetAutoObject(
A.Device.Converter).Ajh(Rr,En);switch(Nq){case 3:return A.jb.Gi;case 2:return A.
jb.Text;case 1:return A.jb.E2;case 0:return A.jb.Afp;default:throw new Error(BD+
Nq.toFixed());}},By2:function(En,Rr){var Nq=A._GetAutoObject(A.Device.Converter).
Ajh(Rr,En);switch(Nq){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nq.toFixed());}},By0:function(En,Rr
){var Nq=A._GetAutoObject(A.Device.Converter).Ajh(Rr,En);switch(Nq){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gi;default:throw new Error(Cc+Nq.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$a;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$a._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4L={BcJ:function(Nn){var B3=
A.jb.Re;switch(Nn){case 3:B3=A.jb.E2;break;case 2:B3=A.jb.H8;break;case 1:B3=A.jb.
Gi;break;case 4:B3=A.jb.Afp;break;case 0:case 5:B3=A.jb.Re;break;default:A.ab5("%s"
,Hp);}return B3;},Ql:function(Nn){var B3=A.jb.Re;switch(Nn){case 3:B3=A.jb.E2;break;
case 2:B3=A.jb.H8;break;case 1:B3=A.jb.Gi;break;case 0:case 5:B3=A.jb.CJ;break;case
4:B3=A.jb.Afp;break;default:A.ab5("%s%e",Hp,Nn);}return B3;},Xt:function(Nn){var
B3=A.jb.Text;switch(Nn){case 3:case 1:B3=A.jb.Bm;break;case 2:case 0:case 4:case
5:B3=A.jb.Text;break;default:A.ab5("%s",Hp);}return B3;},_Init:function(aArg){this.
__proto__=C.A4L;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4L._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5q={MonthToString:null,Bh_:function(L3){if(!L3)return A.
jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(
A.acf.Bia));}},AjG:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(A.Core.
Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(A.acf.AgU));}},ACJ:function(L3){if(
!L3)return A.jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.
Format(A.aaR(A.acf.Bh$));}},A6a:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return Au.Format(IS);}},ACK:function(A0K,A0t,Iu){
var B;var Dw=A._NewObject(A.Core.Bs,0);var Qi=A._NewObject(A.Core.Bs,0);var Bb0=
A0t<A0K;if(Bb0){Dw.Initialize(A0t);Qi.Initialize(A0K);}else{Dw.Initialize(A0K);Qi.
Initialize(A0t);}var ABs=0;var Aps=0;var Qg=0;Qg+=(Qi.GK-Dw.GK);if(Qg<0){switch(
Qi.Hi){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qg+=31;break;case 5:case
7:case 10:case 12:Qg+=30;break;case 3:if(this.Bi4(Qi.Year))Qg+=29;else Qg+=28;break;
default:A.ab5("%s%i",Ir,Qi.Hi);}Aps--;}Aps+=(Qi.Hi-Dw.Hi);if(Aps<0){Aps+=12;ABs--;
}ABs+=(Qi.Year-Dw.Year);if(Bb0){ABs=-ABs;Aps=-Aps;Qg=-Qg;}var index=Iu.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bdl=Iu.charCodeAt(index+1)||0;Iu=A.ab1(
Iu,index,2);switch(Bdl){case 0x64:Iu=A.abU(Iu,Qg.toFixed(),index);break;case 0x6D:
Iu=A.abU(Iu,Aps.toFixed(),index);break;case 0x79:case 0x59:Iu=A.abU(Iu,ABs.toFixed(
),index);break;case 0x25:Iu=A.abU(Iu,O1,index);break;default:A.ab5("%s%s",P3,O1+
String.fromCharCode(Bdl));}index=Iu.indexOf(String.fromCharCode(0x25),index+1);}
return Iu;},Bi4:function(Ac1){if(!(Ac1%4)&&!!(Ac1%100))return true;if(!(Ac1%400)
)return true;return false;},Bh6:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return this.MonthToString.BS(Au.Hi)+Au.Format(P4);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5q;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KJ={_Init:function(){C.A5q._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7d={AfZ:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Az1);case 1:return A.aaR(A.acf.A66);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},ByX:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALM
);case 1:return A.aaL(A.ach.ALL);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzH:function(AoL,En){if(AoL<A._GetAutoObject(
A.Device.Helper).ACY(En))return A.jb.Gi;else if(AoL<A._GetAutoObject(A.Device.Helper
).ACX(En))return A.jb.H8;else return A.jb.E2;},AzJ:function(AoL,En){if(AoL<A._GetAutoObject(
A.Device.Helper).ACY(En))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ACX(
En);return A.jb.Text;}},Aar:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BiG);case 1:return A.aaR(A.acf.Bnr);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzI:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BcU:function(Ate,GA){var Ap6;if(((Ate<10000)||((Ate===10000
)&&(GA===5)))&&(A._GetAutoObject(A.Device.Device).OJ===2))Ap6=10;else if(((Ate<50000
)||((Ate===50000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device).OJ)Ap6=100;else
if(((Ate<100000)||((Ate===100000)&&(GA===5)))&&!!A._GetAutoObject(A.Device.Device
).OJ)Ap6=500;else Ap6=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Ap6=(Ap6/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Ap6;},BcO:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvC);case 1:return A.aaL(A.
ach.AvD);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alq:function(Bbn,Bxi,Bws){if(!Bbn)return 0;return Math.round((
Bws-Bxi)/Bbn)|0;},_Init:function(aArg){this.__proto__=C.A7d;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7d._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.Bou={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bov={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bow={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A4W={ACQ:function(AfD
){var B;if(!!!(AfD.length%2))return-1;var BfN=0;var BfO=0;var Aij;var O=0;for(;O<
AfD.length;O++){Aij=A.wz(A.abW(AfD,O,1),-1,10);if(Aij===-1)return-1;if(!!(O%2))BfN+=
Aij;else BfO+=Aij;}Aij=((3*BfO)+BfN)%10;if(!!Aij)Aij=10-Aij;return Aij;},AVi:function(
AfD){if(!AfD.length)return false;if(!!(AfD.length%2))return false;return A.wz(A.
abW(AfD,AfD.length-1,1),-2,10)===this.ACQ(A.abV(AfD,AfD.length-1));},_Init:function(
aArg){this.__proto__=C.A4W;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VA={_Init:function(){C.A4W._Init.call(this,0);},_ReInit:function(){},_variants:
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