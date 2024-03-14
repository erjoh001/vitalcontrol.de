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
var Cd="Unhandled enum BodyTemperature: ";var BF="Unhandled BodyTemperatureValue: ";
var E4="ERROR: Unhandled temperature unit: ";var Hm="ERROR: unhandled assessment.";
var IQ="%H:%M";var Ip="Invalid month";var O1="%";var P1="Invalid format code";var
P2=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$i={Bzh:function(Em,Rq){if((Rq>=A._GetAutoObject(A.Device.Helper).Avi(Em))||(Rq<=
A._GetAutoObject(A.Device.Device).Z1))return 1;else return 0;},Bzg:function(Em,Rq
){var Nq=A._GetAutoObject(A.Device.Converter).Ajk(Rq,Em);switch(Nq){case 3:return A.
aaR(A.acf.Avp);case 2:return A.aaR(A.acf.Bi0);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bju);default:throw new Error(Cd+Nq.toFixed());}},By_:function(
Em,Rq){var Nq=A._GetAutoObject(A.Device.Converter).Ajk(Rq,Em);switch(Nq){case 3:
return A.jb.Gf;case 2:return A.jb.H6;case 1:return A.jb.E1;case 0:return A.jb.Afo;
default:throw new Error(BF+Nq.toFixed());}},AlH:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGM);case 1:return A.
aaR(A.acf.Bpf);default:A.ab5("%s%s",E4,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},By$:function(Em,Rq){var Nq=A._GetAutoObject(A.Device.Converter
).Ajk(Rq,Em);switch(Nq){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cd+Nq.toFixed());}},Bzb:function(Em,Rq){var Nq=A._GetAutoObject(
A.Device.Converter).Ajk(Rq,Em);switch(Nq){case 3:return A.jb.Gf;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afo;default:throw new Error(BF+
Nq.toFixed());}},Bzc:function(Em,Rq){var Nq=A._GetAutoObject(A.Device.Converter).
Ajk(Rq,Em);switch(Nq){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cd+Nq.toFixed());}},Bza:function(Em,Rq
){var Nq=A._GetAutoObject(A.Device.Converter).Ajk(Rq,Em);switch(Nq){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gf;default:throw new Error(Cd+Nq.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$i;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$i._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4S={BcS:function(Nm){var B3=
A.jb.Re;switch(Nm){case 3:B3=A.jb.E1;break;case 2:B3=A.jb.H6;break;case 1:B3=A.jb.
Gf;break;case 4:B3=A.jb.Afo;break;case 0:case 5:B3=A.jb.Re;break;default:A.ab5("%s"
,Hm);}return B3;},Qj:function(Nm){var B3=A.jb.Re;switch(Nm){case 3:B3=A.jb.E1;break;
case 2:B3=A.jb.H6;break;case 1:B3=A.jb.Gf;break;case 0:case 5:B3=A.jb.CK;break;case
4:B3=A.jb.Afo;break;default:A.ab5("%s%e",Hm,Nm);}return B3;},Xv:function(Nm){var
B3=A.jb.Text;switch(Nm){case 3:case 1:B3=A.jb.Bm;break;case 2:case 0:case 4:case
5:B3=A.jb.Text;break;default:A.ab5("%s",Hm);}return B3;},_Init:function(aArg){this.
__proto__=C.A4S;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4S._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5y={MonthToString:null,Bih:function(L2){if(!L2)return A.
jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L2);return Au.Format(A.aaR(
A.acf.Bij));}},AjL:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(A.Core.
Bs,0);Au.Initialize(L2);return Au.Format(A.aaR(A.acf.AgP));}},ACK:function(L2){if(
!L2)return A.jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L2);return Au.
Format(A.aaR(A.acf.Bii));}},A6i:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L2);return Au.Format(IQ);}},ACL:function(A0T,A0C,Is){
var B;var Dw=A._NewObject(A.Core.Bs,0);var Qg=A._NewObject(A.Core.Bs,0);var Bb9=
A0C<A0T;if(Bb9){Dw.Initialize(A0C);Qg.Initialize(A0T);}else{Dw.Initialize(A0T);Qg.
Initialize(A0C);}var ABs=0;var Apx=0;var Qe=0;Qe+=(Qg.GH-Dw.GH);if(Qe<0){switch(
Qg.He){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qe+=31;break;case 5:case
7:case 10:case 12:Qe+=30;break;case 3:if(this.Bjb(Qg.Year))Qe+=29;else Qe+=28;break;
default:A.ab5("%s%i",Ip,Qg.He);}Apx--;}Apx+=(Qg.He-Dw.He);if(Apx<0){Apx+=12;ABs--;
}ABs+=(Qg.Year-Dw.Year);if(Bb9){ABs=-ABs;Apx=-Apx;Qe=-Qe;}var index=Is.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bdu=Is.charCodeAt(index+1)||0;Is=A.ab1(
Is,index,2);switch(Bdu){case 0x64:Is=A.abU(Is,Qe.toFixed(),index);break;case 0x6D:
Is=A.abU(Is,Apx.toFixed(),index);break;case 0x79:case 0x59:Is=A.abU(Is,ABs.toFixed(
),index);break;case 0x25:Is=A.abU(Is,O1,index);break;default:A.ab5("%s%s",P1,O1+
String.fromCharCode(Bdu));}index=Is.indexOf(String.fromCharCode(0x25),index+1);}
return Is;},Bjb:function(Ac2){if(!(Ac2%4)&&!!(Ac2%100))return true;if(!(Ac2%400)
)return true;return false;},Bid:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L2);return this.MonthToString.BH(Au.He)+Au.Format(P2);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5y;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KK={_Init:function(){C.A5y._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7l={AfY:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Az2);case 1:return A.aaR(A.acf.A7c);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},By9:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALT
);case 1:return A.aaL(A.ach.ALS);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzJ:function(AoR,Em){if(AoR<A._GetAutoObject(
A.Device.Helper).ACZ(Em))return A.jb.Gf;else if(AoR<A._GetAutoObject(A.Device.Helper
).ACY(Em))return A.jb.H6;else return A.jb.E1;},AzL:function(AoR,Em){if(AoR<A._GetAutoObject(
A.Device.Helper).ACZ(Em))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ACY(
Em);return A.jb.Text;}},Aax:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BiP);case 1:return A.aaR(A.acf.BnB);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzK:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bc3:function(Ati,Gw){var Aqa;if(((Ati<10000)||((Ati===10000
)&&(Gw===5)))&&(A._GetAutoObject(A.Device.Device).OJ===2))Aqa=10;else if(((Ati<50000
)||((Ati===50000)&&(Gw===5)))&&!!A._GetAutoObject(A.Device.Device).OJ)Aqa=100;else
if(((Ati<100000)||((Ati===100000)&&(Gw===5)))&&!!A._GetAutoObject(A.Device.Device
).OJ)Aqa=500;else Aqa=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqa=(Aqa/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqa;},BcX:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvG);case 1:return A.aaL(A.
ach.AvH);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alv:function(Bbw,Bxs,BwC){if(!Bbw)return 0;return Math.round((
BwC-Bxs)/Bbw)|0;},_Init:function(aArg){this.__proto__=C.A7l;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DV={_Init:function(){C.A7l._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BoE={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.BoF={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
BoG={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A43={ACQ:function(AfC
){var B;if(!!!(AfC.length%2))return-1;var BfW=0;var BfX=0;var Aij;var O=0;for(;O<
AfC.length;O++){Aij=A.wz(A.abW(AfC,O,1),-1,10);if(Aij===-1)return-1;if(!!(O%2))BfW+=
Aij;else BfX+=Aij;}Aij=((3*BfX)+BfW)%10;if(!!Aij)Aij=10-Aij;return Aij;},AVr:function(
AfC){if(!AfC.length)return false;if(!!(AfC.length%2))return false;return A.wz(A.
abW(AfC,AfC.length-1,1),-2,10)===this.ACQ(A.abV(AfC,AfC.length-1));},_Init:function(
aArg){this.__proto__=C.A43;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VA={_Init:function(){C.A43._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KK._this))B._ReInit(),C.KK._ReInit.call(B);if((B=C.DV._this
))B._ReInit(),C.DV._ReInit.call(B);if((B=C.VA._this))B._ReInit(),C.VA._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KK._this)&&(B._cycle!=D))B._Done(C.KK._this=null);if((B=C.DV.
_this)&&(B._cycle!=D))B._Done(C.DV._this=null);if((B=C.VA._this)&&(B._cycle!=D))
B._Done(C.VA._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */