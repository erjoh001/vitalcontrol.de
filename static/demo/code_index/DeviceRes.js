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
var Cc="Unhandled enum BodyTemperature: ";var BF="Unhandled BodyTemperatureValue: ";
var E4="ERROR: Unhandled temperature unit: ";var Hm="ERROR: unhandled assessment.";
var IQ="%H:%M";var Iq="Invalid month";var O2="%";var P1="Invalid format code";var
P2=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$r={Bzr:function(Em,Rq){if((Rq>=A._GetAutoObject(A.Device.Helper).Avm(Em))||(Rq<=
A._GetAutoObject(A.Device.Device).Z0))return 1;else return 0;},Bzq:function(Em,Rq
){var Nr=A._GetAutoObject(A.Device.Converter).Ajl(Rq,Em);switch(Nr){case 3:return A.
aaR(A.acf.Avt);case 2:return A.aaR(A.acf.Bi6);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BjC);default:throw new Error(Cc+Nr.toFixed());}},Bzi:function(
Em,Rq){var Nr=A._GetAutoObject(A.Device.Converter).Ajl(Rq,Em);switch(Nr){case 3:
return A.jb.Gf;case 2:return A.jb.H6;case 1:return A.jb.E1;case 0:return A.jb.Afq;
default:throw new Error(BF+Nr.toFixed());}},AlJ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGP);case 1:return A.
aaR(A.acf.Bpn);default:A.ab5("%s%s",E4,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},Bzj:function(Em,Rq){var Nr=A._GetAutoObject(A.Device.Converter
).Ajl(Rq,Em);switch(Nr){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nr.toFixed());}},Bzl:function(Em,Rq){var Nr=A._GetAutoObject(
A.Device.Converter).Ajl(Rq,Em);switch(Nr){case 3:return A.jb.Gf;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afq;default:throw new Error(BF+
Nr.toFixed());}},Bzm:function(Em,Rq){var Nr=A._GetAutoObject(A.Device.Converter).
Ajl(Rq,Em);switch(Nr){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nr.toFixed());}},Bzk:function(Em,Rq
){var Nr=A._GetAutoObject(A.Device.Converter).Ajl(Rq,Em);switch(Nr){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gf;default:throw new Error(Cc+Nr.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$r;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$r._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4Y={Bc2:function(Nn){var B3=
A.jb.Re;switch(Nn){case 3:B3=A.jb.E1;break;case 2:B3=A.jb.H6;break;case 1:B3=A.jb.
Gf;break;case 4:B3=A.jb.Afq;break;case 0:case 5:B3=A.jb.Re;break;default:A.ab5("%s"
,Hm);}return B3;},Qj:function(Nn){var B3=A.jb.Re;switch(Nn){case 3:B3=A.jb.E1;break;
case 2:B3=A.jb.H6;break;case 1:B3=A.jb.Gf;break;case 0:case 5:B3=A.jb.CK;break;case
4:B3=A.jb.Afq;break;default:A.ab5("%s%e",Hm,Nn);}return B3;},Xv:function(Nn){var
B3=A.jb.Text;switch(Nn){case 3:case 1:B3=A.jb.Bm;break;case 2:case 0:case 4:case
5:B3=A.jb.Text;break;default:A.ab5("%s",Hm);}return B3;},_Init:function(aArg){this.
__proto__=C.A4Y;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A4Y._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5E={MonthToString:null,Bin:function(L2){if(!L2)return A.
jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L2);return Au.Format(A.aaR(
A.acf.Bip));}},AjM:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(A.Core.
Bs,0);Au.Initialize(L2);return Au.Format(A.aaR(A.acf.AgR));}},ACN:function(L2){if(
!L2)return A.jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L2);return Au.
Format(A.aaR(A.acf.Bio));}},A6p:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L2);return Au.Format(IQ);}},ACO:function(A0W,A0F,It){
var B;var Dw=A._NewObject(A.Core.Bs,0);var Qg=A._NewObject(A.Core.Bs,0);var Bch=
A0F<A0W;if(Bch){Dw.Initialize(A0F);Qg.Initialize(A0W);}else{Dw.Initialize(A0W);Qg.
Initialize(A0F);}var ABw=0;var Apy=0;var Qe=0;Qe+=(Qg.GH-Dw.GH);if(Qe<0){switch(
Qg.He){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qe+=31;break;case 5:case
7:case 10:case 12:Qe+=30;break;case 3:if(this.Bji(Qg.Year))Qe+=29;else Qe+=28;break;
default:A.ab5("%s%i",Iq,Qg.He);}Apy--;}Apy+=(Qg.He-Dw.He);if(Apy<0){Apy+=12;ABw--;
}ABw+=(Qg.Year-Dw.Year);if(Bch){ABw=-ABw;Apy=-Apy;Qe=-Qe;}var index=It.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var BdE=It.charCodeAt(index+1)||0;It=A.ab1(
It,index,2);switch(BdE){case 0x64:It=A.abU(It,Qe.toFixed(),index);break;case 0x6D:
It=A.abU(It,Apy.toFixed(),index);break;case 0x79:case 0x59:It=A.abU(It,ABw.toFixed(
),index);break;case 0x25:It=A.abU(It,O2,index);break;default:A.ab5("%s%s",P1,O2+
String.fromCharCode(BdE));}index=It.indexOf(String.fromCharCode(0x25),index+1);}
return It;},Bji:function(Ac3){if(!(Ac3%4)&&!!(Ac3%100))return true;if(!(Ac3%400)
)return true;return false;},Bij:function(L2){if(!L2)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L2);return this.MonthToString.BI(Au.He)+Au.Format(P2);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5E;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KK={_Init:function(){C.A5E._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7s={AfZ:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Az6);case 1:return A.aaR(A.acf.A7j);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bzh:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALQ
);case 1:return A.aaL(A.ach.ALP);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzN:function(AoS,Em){if(AoS<A._GetAutoObject(
A.Device.Helper).AC2(Em))return A.jb.Gf;else if(AoS<A._GetAutoObject(A.Device.Helper
).AC1(Em))return A.jb.H6;else return A.jb.E1;},AzP:function(AoS,Em){if(AoS<A._GetAutoObject(
A.Device.Helper).AC2(Em))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).AC1(
Em);return A.jb.Text;}},Aax:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BiV);case 1:return A.aaR(A.acf.BnI);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzO:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bdb:function(Atl,Gw){var Aqb;if(((Atl<10000)||((Atl===10000
)&&(Gw===5)))&&(A._GetAutoObject(A.Device.Device).OK===2))Aqb=10;else if(((Atl<50000
)||((Atl===50000)&&(Gw===5)))&&!!A._GetAutoObject(A.Device.Device).OK)Aqb=100;else
if(((Atl<100000)||((Atl===100000)&&(Gw===5)))&&!!A._GetAutoObject(A.Device.Device
).OK)Aqb=500;else Aqb=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Aqb=(Aqb/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Aqb;},Bc7:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.
ach.AvL);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alx:function(BbG,BxC,BwM){if(!BbG)return 0;return Math.round((
BwM-BxC)/BbG)|0;},_Init:function(aArg){this.__proto__=C.A7s;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DV={_Init:function(){C.A7s._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BoM={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.BoN={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
BoO={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A49={ACT:function(AfD
){var B;if(!!!(AfD.length%2))return-1;var Bf5=0;var Bf6=0;var Aik;var O=0;for(;O<
AfD.length;O++){Aik=A.wz(A.abW(AfD,O,1),-1,10);if(Aik===-1)return-1;if(!!(O%2))Bf5+=
Aik;else Bf6+=Aik;}Aik=((3*Bf6)+Bf5)%10;if(!!Aik)Aik=10-Aik;return Aik;},AVr:function(
AfD){if(!AfD.length)return false;if(!!(AfD.length%2))return false;return A.wz(A.
abW(AfD,AfD.length-1,1),-2,10)===this.ACT(A.abV(AfD,AfD.length-1));},_Init:function(
aArg){this.__proto__=C.A49;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VA={_Init:function(){C.A49._Init.call(this,0);},_ReInit:function(){},_variants:
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