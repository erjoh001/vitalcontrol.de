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
var Ca="Unhandled enum BodyTemperature: ";var BC="Unhandled BodyTemperatureValue: ";
var EW="ERROR: Unhandled temperature unit: ";var Hh="ERROR: unhandled assessment.";
var I8="%H:%M";var IJ="Invalid month";var OW="%";var PW="Invalid format code";var
PX=" %Y";var CL="ERROR: Unhandled mass unit: ";
C.A_K={Byc:function(Ee,Rf){if((Rf>=A._GetAutoObject(A.Device.Helper).AuQ(Ee))||(Rf<=
A._GetAutoObject(A.Device.Device).ZA))return 1;else return 0;},Byb:function(Ee,Rf
){var Nj=A._GetAutoObject(A.Device.Converter).Ai4(Rf,Ee);switch(Nj){case 3:return A.
aaR(A.acf.AuX);case 2:return A.aaR(A.acf.Bh_);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BiG);default:throw new Error(Ca+Nj.toFixed());}},Bx5:function(
Ee,Rf){var Nj=A._GetAutoObject(A.Device.Converter).Ai4(Rf,Ee);switch(Nj){case 3:
return A.jb.FZ;case 2:return A.jb.H1;case 1:return A.jb.ET;case 0:return A.jb.Ae9;
default:throw new Error(BC+Nj.toFixed());}},Alj:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AGa);case 1:return A.
aaR(A.acf.Bor);default:A.ab5("%s%s",EW,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},Bx6:function(Ee,Rf){var Nj=A._GetAutoObject(A.Device.Converter
).Ai4(Rf,Ee);switch(Nj){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bj;default:throw new Error(Ca+Nj.toFixed());}},Bx8:function(Ee,Rf){var Nj=A._GetAutoObject(
A.Device.Converter).Ai4(Rf,Ee);switch(Nj){case 3:return A.jb.FZ;case 2:return A.
jb.Text;case 1:return A.jb.ET;case 0:return A.jb.Ae9;default:throw new Error(BC+
Nj.toFixed());}},Bx9:function(Ee,Rf){var Nj=A._GetAutoObject(A.Device.Converter).
Ai4(Rf,Ee);switch(Nj){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Ca+Nj.toFixed());}},Bx7:function(Ee,Rf
){var Nj=A._GetAutoObject(A.Device.Converter).Ai4(Rf,Ee);switch(Nj){case 3:return A.
jb.Bj;case 2:case 1:case 0:return A.jb.FZ;default:throw new Error(Ca+Nj.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A_K;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A_K._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A4d={Bcg:function(Ng){var B2=
A.jb.Acf;switch(Ng){case 3:B2=A.jb.ET;break;case 2:B2=A.jb.H1;break;case 1:B2=A.
jb.FZ;break;case 4:B2=A.jb.Ae9;break;case 0:case 5:B2=A.jb.Acf;break;default:A.ab5(
"%s",Hh);}return B2;},Qc:function(Ng){var B2=A.jb.Acf;switch(Ng){case 3:B2=A.jb.
ET;break;case 2:B2=A.jb.H1;break;case 1:B2=A.jb.FZ;break;case 0:case 5:B2=A.jb.CF;
break;case 4:B2=A.jb.Ae9;break;default:A.ab5("%s%e",Hh,Ng);}return B2;},Xc:function(
Ng){var B2=A.jb.Text;switch(Ng){case 3:case 1:B2=A.jb.Bj;break;case 2:case 0:case
4:case 5:B2=A.jb.Text;break;default:A.ab5("%s",Hh);}return B2;},_Init:function(aArg
){this.__proto__=C.A4d;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.
Assessment={_Init:function(){C.A4d._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.A46={MonthToString:null,Bhr:function(LX){
if(!LX)return A.jV;else{var Au=A._NewObject(A.Core.Bt,0);Au.Initialize(LX);return Au.
Format(A.aaR(A.acf.Bht));}},Aju:function(LX){if(!LX)return A.jV;else{var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(LX);return Au.Format(A.aaR(A.acf.Agz));}},AB9:function(
LX){if(!LX)return A.jV;else{var Au=A._NewObject(A.Core.Bt,0);Au.Initialize(LX);return Au.
Format(A.aaR(A.acf.Bhs));}},A5P:function(LX){if(!LX)return A.jV;else{var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(LX);return Au.Format(I8);}},AB_:function(A0f,AZ0,Im){
var B;var Dq=A._NewObject(A.Core.Bt,0);var P$=A._NewObject(A.Core.Bt,0);var Bby=
AZ0<A0f;if(Bby){Dq.Initialize(AZ0);P$.Initialize(A0f);}else{Dq.Initialize(A0f);P$.
Initialize(AZ0);}var AAQ=0;var Ao_=0;var P9=0;P9+=(P$.GB-Dq.GB);if(P9<0){switch(
P$.Ha){case 1:case 2:case 4:case 6:case 8:case 9:case 11:P9+=31;break;case 5:case
7:case 10:case 12:P9+=30;break;case 3:if(this.Bim(P$.Year))P9+=29;else P9+=28;break;
default:A.ab5("%s%i",IJ,P$.Ha);}Ao_--;}Ao_+=(P$.Ha-Dq.Ha);if(Ao_<0){Ao_+=12;AAQ--;
}AAQ+=(P$.Year-Dq.Year);if(Bby){AAQ=-AAQ;Ao_=-Ao_;P9=-P9;}var index=Im.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var BcU=Im.charCodeAt(index+1)||0;Im=A.ab1(
Im,index,2);switch(BcU){case 0x64:Im=A.abU(Im,P9.toFixed(),index);break;case 0x6D:
Im=A.abU(Im,Ao_.toFixed(),index);break;case 0x79:case 0x59:Im=A.abU(Im,AAQ.toFixed(
),index);break;case 0x25:Im=A.abU(Im,OW,index);break;default:A.ab5("%s%s",PW,OW+
String.fromCharCode(BcU));}index=Im.indexOf(String.fromCharCode(0x25),index+1);}
return Im;},Bim:function(AcK){if(!(AcK%4)&&!!(AcK%100))return true;if(!(AcK%400)
)return true;return false;},Bhn:function(LX){if(!LX)return A.jV;else{var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(LX);return this.MonthToString.BQ(Au.Ha)+Au.Format(PX);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A46;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KE={_Init:function(){C.A46._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A6R={AfH:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Azo);case 1:return A.aaR(A.acf.A6I);default:A.ab5("%s%s",CL,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bx4:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALd
);case 1:return A.aaL(A.ach.ALc);default:A.ab5("%s%s",CL,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ay7:function(Aor,Ee){if(Aor<A._GetAutoObject(
A.Device.Helper).ACm(Ee))return A.jb.FZ;else if(Aor<A._GetAutoObject(A.Device.Helper
).ACl(Ee))return A.jb.H1;else return A.jb.ET;},Ay9:function(Aor,Ee){if(Aor<A._GetAutoObject(
A.Device.Helper).ACm(Ee))return A.jb.Bj;else{A._GetAutoObject(A.Device.Helper).ACl(
Ee);return A.jb.Text;}},Z_:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.aaR(A.acf.BhZ);case 1:return A.aaR(A.acf.BmN);default:A.ab5("%s%s"
,CL,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Ay8:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.ab5("%s%s",CL,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},Bcr:function(AsN,Gq){var ApN;if(((AsN<10000)||((AsN===10000)&&(Gq===5)))&&(A._GetAutoObject(
A.Device.Device).OG===2))ApN=10;else if(((AsN<50000)||((AsN===50000)&&(Gq===5)))&&
!!A._GetAutoObject(A.Device.Device).OG)ApN=100;else if(((AsN<100000)||((AsN===100000
)&&(Gq===5)))&&!!A._GetAutoObject(A.Device.Device).OG)ApN=500;else ApN=1000;switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:ApN=(ApN/2)|0;break;
default:A.ab5("%s%s",CL,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return ApN;
},Bcl:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
aaL(A.ach.Ava);case 1:return A.aaL(A.ach.Avb);default:A.ab5("%s%s",CL,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},Ak9:function(BaX,Bwo,Bvy){if(
!BaX)return 0;return Math.round((Bvy-Bwo)/BaX)|0;},_Init:function(aArg){this.__proto__=
C.A6R;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DN={_Init:function(
){C.A6R._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.BnQ={3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn"
,10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF",15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439"
,17:"Ye\u015Fil"};C.BnR={3:"\u7D05\u8272",0:"Red",7:"Punainen",8:"Rouge",9:"Rot"
,10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF",15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439"
,17:"K\u0131rm\u0131z\u0131"};C.BnS={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:
"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF",15:"\u0416\u0451\u043B\u0442\u044B\u0439"
,17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KE._this))B._ReInit(),C.KE._ReInit.call(B);if((B=C.DN._this
))B._ReInit(),C.DN._ReInit.call(B);};C.DB=function(D){var B;if((B=C.Temperature.
_this)&&(B._cycle!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this
)&&(B._cycle!=D))B._Done(C.Assessment._this=null);if((B=C.KE._this)&&(B._cycle!=
D))B._Done(C.KE._this=null);if((B=C.DN._this)&&(B._cycle!=D))B._Done(C.DN._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */