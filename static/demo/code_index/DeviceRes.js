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
var Ca="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var EW="ERROR: Unhandled temperature unit: ";var Hh="ERROR: unhandled assessment.";
var I8="%H:%M";var IJ="Invalid month";var OT="%";var PV="Invalid format code";var
PW=" %Y";var CM="ERROR: Unhandled mass unit: ";
C.A_l={BxN:function(Ee,Rf){if((Rf>=A._GetAutoObject(A.Device.Helper).AuQ(Ee))||(Rf<=
A._GetAutoObject(A.Device.Device).Zz))return 1;else return 0;},BxM:function(Ee,Rf
){var Nk=A._GetAutoObject(A.Device.Converter).Ai1(Rf,Ee);switch(Nk){case 3:return A.
aaR(A.acf.AuX);case 2:return A.aaR(A.acf.BhG);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bic);default:throw new Error(Ca+Nk.toFixed());}},BxE:function(
Ee,Rf){var Nk=A._GetAutoObject(A.Device.Converter).Ai1(Rf,Ee);switch(Nk){case 3:
return A.jb.FZ;case 2:return A.jb.H1;case 1:return A.jb.ET;case 0:return A.jb.Ae6;
default:throw new Error(BD+Nk.toFixed());}},Alh:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AF5);case 1:return A.
aaR(A.acf.Bn0);default:A.ab5("%s%s",EW,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BxF:function(Ee,Rf){var Nk=A._GetAutoObject(A.Device.Converter
).Ai1(Rf,Ee);switch(Nk){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bi;default:throw new Error(Ca+Nk.toFixed());}},BxH:function(Ee,Rf){var Nk=A._GetAutoObject(
A.Device.Converter).Ai1(Rf,Ee);switch(Nk){case 3:return A.jb.FZ;case 2:return A.
jb.Text;case 1:return A.jb.ET;case 0:return A.jb.Ae6;default:throw new Error(BD+
Nk.toFixed());}},BxI:function(Ee,Rf){var Nk=A._GetAutoObject(A.Device.Converter).
Ai1(Rf,Ee);switch(Nk){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Ca+Nk.toFixed());}},BxG:function(Ee,Rf
){var Nk=A._GetAutoObject(A.Device.Converter).Ai1(Rf,Ee);switch(Nk){case 3:return A.
jb.Bi;case 2:case 1:case 0:return A.jb.FZ;default:throw new Error(Ca+Nk.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A_l;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A_l._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A3Y={BbR:function(Nh){var B1=
A.jb.Ace;switch(Nh){case 3:B1=A.jb.ET;break;case 2:B1=A.jb.H1;break;case 1:B1=A.
jb.FZ;break;case 4:B1=A.jb.Ae6;break;case 0:case 5:B1=A.jb.Ace;break;default:A.ab5(
"%s",Hh);}return B1;},Qd:function(Nh){var B1=A.jb.Ace;switch(Nh){case 3:B1=A.jb.
ET;break;case 2:B1=A.jb.H1;break;case 1:B1=A.jb.FZ;break;case 0:case 5:B1=A.jb.CG;
break;case 4:B1=A.jb.Ae6;break;default:A.ab5("%s%e",Hh,Nh);}return B1;},Xd:function(
Nh){var B1=A.jb.Text;switch(Nh){case 3:case 1:B1=A.jb.Bi;break;case 2:case 0:case
4:case 5:B1=A.jb.Text;break;default:A.ab5("%s",Hh);}return B1;},_Init:function(aArg
){this.__proto__=C.A3Y;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.
Assessment={_Init:function(){C.A3Y._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.A4P={MonthToString:null,BgZ:function(LX){
if(!LX)return A.jV;else{var Au=A._NewObject(A.Core.Bt,0);Au.Initialize(LX);return Au.
Format(A.aaR(A.acf.Bg1));}},Ajs:function(LX){if(!LX)return A.jV;else{var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(LX);return Au.Format(A.aaR(A.acf.Agw));}},AB$:function(
LX){if(!LX)return A.jV;else{var Au=A._NewObject(A.Core.Bt,0);Au.Initialize(LX);return Au.
Format(A.aaR(A.acf.Bg0));}},A5y:function(LX){if(!LX)return A.jV;else{var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(LX);return Au.Format(I8);}},ACa:function(AZ0,AZK,Im){
var B;var Dq=A._NewObject(A.Core.Bt,0);var Qa=A._NewObject(A.Core.Bt,0);var Ba9=
AZK<AZ0;if(Ba9){Dq.Initialize(AZK);Qa.Initialize(AZ0);}else{Dq.Initialize(AZ0);Qa.
Initialize(AZK);}var AAT=0;var Ao7=0;var P_=0;P_+=(Qa.GB-Dq.GB);if(P_<0){switch(
Qa.Ha){case 1:case 2:case 4:case 6:case 8:case 9:case 11:P_+=31;break;case 5:case
7:case 10:case 12:P_+=30;break;case 3:if(this.BhU(Qa.Year))P_+=29;else P_+=28;break;
default:A.ab5("%s%i",IJ,Qa.Ha);}Ao7--;}Ao7+=(Qa.Ha-Dq.Ha);if(Ao7<0){Ao7+=12;AAT--;
}AAT+=(Qa.Year-Dq.Year);if(Ba9){AAT=-AAT;Ao7=-Ao7;P_=-P_;}var index=Im.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bct=Im.charCodeAt(index+1)||0;Im=A.ab1(
Im,index,2);switch(Bct){case 0x64:Im=A.abU(Im,P_.toFixed(),index);break;case 0x6D:
Im=A.abU(Im,Ao7.toFixed(),index);break;case 0x79:case 0x59:Im=A.abU(Im,AAT.toFixed(
),index);break;case 0x25:Im=A.abU(Im,OT,index);break;default:A.ab5("%s%s",PV,OT+
String.fromCharCode(Bct));}index=Im.indexOf(String.fromCharCode(0x25),index+1);}
return Im;},BhU:function(AcJ){if(!(AcJ%4)&&!!(AcJ%100))return true;if(!(AcJ%400)
)return true;return false;},BgV:function(LX){if(!LX)return A.jV;else{var Au=A._NewObject(
A.Core.Bt,0);Au.Initialize(LX);return this.MonthToString.BP(Au.Ha)+Au.Format(PW);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A4P;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KD={_Init:function(){C.A4P._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A6A={AfE:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.Azr);case 1:return A.aaR(A.acf.A6r);default:A.ab5("%s%s",CM,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BxD:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AK5
);case 1:return A.aaL(A.ach.AK4);default:A.ab5("%s%s",CM,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ay_:function(Aop,Ee){if(Aop<A._GetAutoObject(
A.Device.Helper).ACo(Ee))return A.jb.FZ;else if(Aop<A._GetAutoObject(A.Device.Helper
).ACn(Ee))return A.jb.H1;else return A.jb.ET;},Aza:function(Aop,Ee){if(Aop<A._GetAutoObject(
A.Device.Helper).ACo(Ee))return A.jb.Bi;else{A._GetAutoObject(A.Device.Helper).ACn(
Ee);return A.jb.Text;}},Z9:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.aaR(A.acf.Bhv);case 1:return A.aaR(A.acf.Bmk);default:A.ab5("%s%s"
,CM,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Ay$:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.ab5("%s%s",CM,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},Bb2:function(AsM,Gq){var ApK;if(((AsM<10000)||((AsM===10000)&&(Gq===5)))&&(A._GetAutoObject(
A.Device.Device).OD===2))ApK=10;else if(((AsM<50000)||((AsM===50000)&&(Gq===5)))&&
!!A._GetAutoObject(A.Device.Device).OD)ApK=100;else if(((AsM<100000)||((AsM===100000
)&&(Gq===5)))&&!!A._GetAutoObject(A.Device.Device).OD)ApK=500;else ApK=1000;switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:ApK=(ApK/2)|0;break;
default:A.ab5("%s%s",CM,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return ApK;
},BbW:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
aaL(A.ach.Ava);case 1:return A.aaL(A.ach.Avb);default:A.ab5("%s%s",CM,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},Ak7:function(Baw,BvZ,Bu9){if(
!Baw)return 0;return Math.round((Bu9-BvZ)/Baw)|0;},_Init:function(aArg){this.__proto__=
C.A6A;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DN={_Init:function(
){C.A6A._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Bnn={3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn"
,10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF",15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439"
,17:"Ye\u015Fil"};C.Bno={3:"\u7D05\u8272",0:"Red",7:"Punainen",8:"Rouge",9:"Rot"
,10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF",15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439"
,17:"K\u0131rm\u0131z\u0131"};C.Bnp={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:
"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF",15:"\u0416\u0451\u043B\u0442\u044B\u0439"
,17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KD._this))B._ReInit(),C.KD._ReInit.call(B);if((B=C.DN._this
))B._ReInit(),C.DN._ReInit.call(B);};C.Dz=function(D){var B;if((B=C.Temperature.
_this)&&(B._cycle!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this
)&&(B._cycle!=D))B._Done(C.Assessment._this=null);if((B=C.KD._this)&&(B._cycle!=
D))B._Done(C.KD._this=null);if((B=C.DN._this)&&(B._cycle!=D))B._Done(C.DN._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */