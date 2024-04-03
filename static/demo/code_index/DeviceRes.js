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
var E7="ERROR: Unhandled temperature unit: ";var Hq="ERROR: unhandled assessment.";
var IU="%H:%M";var Is="Invalid month";var O2="%";var P7="Invalid format code";var
P8=" %Y";var CQ="ERROR: Unhandled mass unit: ";
C.A$x={BzL:function(En,Rt){if((Rt>=A._GetAutoObject(A.Device.Helper).ACU(En))||(Rt<=
A._GetAutoObject(A.Device.Device).AcD))return 1;else return 0;},BzK:function(En,
Rt){var Nr=A._GetAutoObject(A.Device.Converter).Ajl(Rt,En);switch(Nr){case 3:return A.
aaR(A.acf.Avt);case 2:return A.aaR(A.acf.Bjm);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BjT);default:throw new Error(Cc+Nr.toFixed());}},BzC:function(
En,Rt){var Nr=A._GetAutoObject(A.Device.Converter).Ajl(Rt,En);switch(Nr){case 3:
return A.jb.Gi;case 2:return A.jb.H8;case 1:return A.jb.E1;case 0:return A.jb.Afs;
default:throw new Error(BD+Nr.toFixed());}},AlJ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGQ);case 1:return A.
aaR(A.acf.BpM);default:A.ab5("%s%s",E7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BzD:function(En,Rt){var Nr=A._GetAutoObject(A.Device.Converter
).Ajl(Rt,En);switch(Nr){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cc+Nr.toFixed());}},BzF:function(En,Rt){var Nr=A._GetAutoObject(
A.Device.Converter).Ajl(Rt,En);switch(Nr){case 3:return A.jb.Gi;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afs;default:throw new Error(BD+
Nr.toFixed());}},BzG:function(En,Rt){var Nr=A._GetAutoObject(A.Device.Converter).
Ajl(Rt,En);switch(Nr){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cc+Nr.toFixed());}},BzE:function(En,Rt
){var Nr=A._GetAutoObject(A.Device.Converter).Ajl(Rt,En);switch(Nr){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gi;default:throw new Error(Cc+Nr.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$x;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$x._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A46={Bdb:function(Np){var B3=
A.jb.Rg;switch(Np){case 3:B3=A.jb.E1;break;case 2:B3=A.jb.H8;break;case 1:B3=A.jb.
Gi;break;case 4:B3=A.jb.Afs;break;case 0:case 5:B3=A.jb.Rg;break;default:A.ab5("%s"
,Hq);}return B3;},Qo:function(Np){var B3=A.jb.Rg;switch(Np){case 3:B3=A.jb.E1;break;
case 2:B3=A.jb.H8;break;case 1:B3=A.jb.Gi;break;case 0:case 5:B3=A.jb.CJ;break;case
4:B3=A.jb.Afs;break;default:A.ab5("%s%e",Hq,Np);}return B3;},Xv:function(Np){var
B3=A.jb.Text;switch(Np){case 3:case 1:B3=A.jb.Bm;break;case 2:case 0:case 4:case
5:B3=A.jb.Text;break;default:A.ab5("%s",Hq);}return B3;},_Init:function(aArg){this.
__proto__=C.A46;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A46._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A5L={MonthToString:null,BiE:function(L3){if(!L3)return A.
jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(
A.acf.BiG));}},AjK:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(A.Core.
Bs,0);Au.Initialize(L3);return Au.Format(A.aaR(A.acf.AgW));}},ACR:function(L3){if(
!L3)return A.jV;else{var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(L3);return Au.
Format(A.aaR(A.acf.BiF));}},A6s:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return Au.Format(IU);}},ACS:function(A04,A0M,Iv){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Ql=A._NewObject(A.Core.Bs,0);var Bcr=
A0M<A04;if(Bcr){Dx.Initialize(A0M);Ql.Initialize(A04);}else{Dx.Initialize(A04);Ql.
Initialize(A0M);}var ABA=0;var Apx=0;var Qj=0;Qj+=(Ql.GL-Dx.GL);if(Qj<0){switch(
Ql.Hj){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qj+=31;break;case 5:case
7:case 10:case 12:Qj+=30;break;case 3:if(this.Bjz(Ql.Year))Qj+=29;else Qj+=28;break;
default:A.ab5("%s%i",Is,Ql.Hj);}Apx--;}Apx+=(Ql.Hj-Dx.Hj);if(Apx<0){Apx+=12;ABA--;
}ABA+=(Ql.Year-Dx.Year);if(Bcr){ABA=-ABA;Apx=-Apx;Qj=-Qj;}var index=Iv.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var BdP=Iv.charCodeAt(index+1)||0;Iv=A.ab1(
Iv,index,2);switch(BdP){case 0x64:Iv=A.abU(Iv,Qj.toFixed(),index);break;case 0x6D:
Iv=A.abU(Iv,Apx.toFixed(),index);break;case 0x79:case 0x59:Iv=A.abU(Iv,ABA.toFixed(
),index);break;case 0x25:Iv=A.abU(Iv,O2,index);break;default:A.ab5("%s%s",P7,O2+
String.fromCharCode(BdP));}index=Iv.indexOf(String.fromCharCode(0x25),index+1);}
return Iv;},Bjz:function(Ac4){if(!(Ac4%4)&&!!(Ac4%100))return true;if(!(Ac4%400)
)return true;return false;},BiA:function(L3){if(!L3)return A.jV;else{var Au=A._NewObject(
A.Core.Bs,0);Au.Initialize(L3);return this.MonthToString.BS(Au.Hj)+Au.Format(P8);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A5L;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KK={_Init:function(){C.A5L._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A7v={Af0:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Az9);case 1:return A.aaR(A.acf.A7m);default:A.ab5("%s%s",CQ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BzB:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALT
);case 1:return A.aaL(A.ach.ALS);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},AzP:function(AoQ,En){if(AoQ<A._GetAutoObject(
A.Device.Helper).AC6(En))return A.jb.Gi;else if(AoQ<A._GetAutoObject(A.Device.Helper
).AC5(En))return A.jb.H8;else return A.jb.E1;},AzR:function(AoQ,En){if(AoQ<A._GetAutoObject(
A.Device.Helper).AC6(En))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).AC5(
En);return A.jb.Text;}},Aat:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.Bja);case 1:return A.aaR(A.acf.Bn3);default:
A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},AzQ:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bdm:function(Atj,Gz){var Ap$;if(((Atj<10000)||((Atj===10000
)&&(Gz===5)))&&(A._GetAutoObject(A.Device.Device).OK===2))Ap$=10;else if(((Atj<50000
)||((Atj===50000)&&(Gz===5)))&&!!A._GetAutoObject(A.Device.Device).OK)Ap$=100;else
if(((Atj<100000)||((Atj===100000)&&(Gz===5)))&&!!A._GetAutoObject(A.Device.Device
).OK)Ap$=500;else Ap$=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Ap$=(Ap$/2)|0;break;default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Ap$;},Bdg:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AvK);case 1:return A.aaL(A.
ach.AvL);default:A.ab5("%s%s",CQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alx:function(BbO,BxY,Bw9){if(!BbO)return 0;return Math.round((
Bw9-BxY)/BbO)|0;},_Init:function(aArg){this.__proto__=C.A7v;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A7v._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.Bo_={3:"\u7DA0\u8272"
,0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bo$={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bpa={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};C.A5f={ACY:function(AfE
){var B;if(!!!(AfE.length%2))return-1;var Bge=0;var Bgf=0;var Ain;var O=0;for(;O<
AfE.length;O++){Ain=A.wz(A.abW(AfE,O,1),-1,10);if(Ain===-1)return-1;if(!!(O%2))Bge+=
Ain;else Bgf+=Ain;}Ain=((3*Bgf)+Bge)%10;if(!!Ain)Ain=10-Ain;return Ain;},AVw:function(
AfE){if(!AfE.length)return false;if(!!(AfE.length%2))return false;return A.wz(A.
abW(AfE,AfE.length-1,1),-2,10)===this.ACY(A.abV(AfE,AfE.length-1));},_Init:function(
aArg){this.__proto__=C.A5f;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VD={_Init:function(){C.A5f._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KK._this))B._ReInit(),C.KK._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VD._this))B._ReInit(),C.VD._ReInit.call(
B);};C.DH=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KK._this)&&(B._cycle!=D))B._Done(C.KK._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VD._this)&&(B._cycle!=D))
B._Done(C.VD._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */