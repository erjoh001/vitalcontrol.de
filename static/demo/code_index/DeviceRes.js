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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abk)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
abk=(function(){var A=index;var C={};
var B4="Unhandled enum BodyTemperature: ";var BI="Unhandled BodyTemperatureValue: ";
var EH="ERROR: Unhandled temperature unit: ";var Gv="ERROR: unhandled assessment.";
var I5="%H:%M";var Iq="Invalid month";var Oe="%";var Pc="Invalid format code";var
Nq=" %Y";var Cw="ERROR: Unhandled mass unit: ";
C.A5e={Bsq:function(D7,Qn){if((Qn>=A._GetAutoObject(A.Device.Helper).Asm(D7))||(Qn<=
A._GetAutoObject(A.Device.Device).X_))return 1;else return 0;},Bsp:function(D7,Qn
){var MI=A._GetAutoObject(A.Device.Converter).Ahb(Qn,D7);switch(MI){case 3:return A.
z2(A.abg.Asu);case 2:return A.z2(A.abg.Bcq);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.Bc0);default:throw new Error(B4+MI.toFixed());}},Bsh:function(
D7,Qn){var MI=A._GetAutoObject(A.Device.Converter).Ahb(Qn,D7);switch(MI){case 3:
return A.iF.F0;case 2:return A.iF.HB;case 1:return A.iF.E1;case 0:return A.iF.Adz;
default:throw new Error(BI+MI.toFixed());}},AjA:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.AC4);case 1:return A.
z2(A.abg.BiO);default:A.aa8("%s%s",EH,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jm;},Bsi:function(D7,Qn){var MI=A._GetAutoObject(A.Device.Converter
).Ahb(Qn,D7);switch(MI){case 3:return A.iF.Be;case 2:return A.iF.Text;case 1:return A.
iF.Be;case 0:return A.iF.Be;default:throw new Error(B4+MI.toFixed());}},Bsk:function(
D7,Qn){var MI=A._GetAutoObject(A.Device.Converter).Ahb(Qn,D7);switch(MI){case 3:
return A.iF.F0;case 2:return A.iF.Text;case 1:return A.iF.E1;case 0:return A.iF.
Adz;default:throw new Error(BI+MI.toFixed());}},Bsl:function(D7,Qn){var MI=A._GetAutoObject(
A.Device.Converter).Ahb(Qn,D7);switch(MI){case 3:return 16711680;case 2:return 16776960;
case 1:return 65280;case 0:return 255;default:throw new Error(B4+MI.toFixed());}
},Bsj:function(D7,Qn){var MI=A._GetAutoObject(A.Device.Converter).Ahb(Qn,D7);switch(
MI){case 3:return A.iF.Be;case 2:return A.iF.F0;case 1:return A.iF.F0;case 0:return A.
iF.F0;default:throw new Error(B4+MI.toFixed());}},_Init:function(aArg){this.__proto__=
C.A5e;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A5e._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.AZn={A8B:function(MG){var BF=A.iF.AiQ;switch(MG){case 3:BF=A.iF.E1;break;
case 2:BF=A.iF.HB;break;case 1:BF=A.iF.F0;break;case 0:BF=A.iF.AiQ;break;case 4:
BF=A.iF.Adz;break;case 5:BF=A.iF.AiQ;break;default:A.aa8("%s",Gv);}return BF;},Pq:
function(MG){var BF=A.iF.AiQ;switch(MG){case 3:BF=A.iF.E1;break;case 2:BF=A.iF.HB;
break;case 1:BF=A.iF.F0;break;case 0:BF=A.iF.CE;break;case 5:BF=A.iF.CE;break;case
4:BF=A.iF.Adz;break;default:A.aa8("%s%e",Gv,MG);}return BF;},VN:function(MG){var
BF=A.iF.Text;switch(MG){case 3:BF=A.iF.Be;break;case 2:BF=A.iF.Text;break;case 1:
BF=A.iF.Be;break;case 0:BF=A.iF.Text;break;case 4:BF=A.iF.Text;break;case 5:BF=A.
iF.Text;break;default:A.aa8("%s",Gv);}return BF;},_Init:function(aArg){this.__proto__=
C.AZn;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.AZn._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.AZ8={MonthToString:null,BbK:function(Lm){if(!Lm)return A.jm;else{var Ap=
A._NewObject(A.Core.Bp,0);Ap.Initialize(Lm);return Ap.Format(A.z2(A.abg.BbM));}}
,AhB:function(Lm){if(!Lm)return A.jm;else{var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(
Lm);return Ap.Format(A.z2(A.abg.AeZ));}},AKk:function(Lm){if(!Lm)return A.jm;else{
var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(Lm);return Ap.Format(A.z2(A.abg.BbL
));}},A0P:function(Lm){if(!Lm)return A.jm;else{var Ap=A._NewObject(A.Core.Bp,0);
Ap.Initialize(Lm);return Ap.Format(I5);}},Azj:function(AVE,AVo,H0){var B;var Df=
A._NewObject(A.Core.Bp,0);var Po=A._NewObject(A.Core.Bp,0);var A7S=AVo<AVE;if(A7S
){Df.Initialize(AVo);Po.Initialize(AVE);}else{Df.Initialize(AVE);Po.Initialize(AVo
);}var Ax7=0;var Am3=0;var Pm=0;Pm+=(Po.GD-Df.GD);if(Pm<0){switch(Po.GF){case 1:
case 2:case 4:case 6:case 8:case 9:case 11:Pm+=31;break;case 5:case 7:case 10:case
12:Pm+=30;break;case 3:if(this.BcD(Po.Year))Pm+=29;else Pm+=28;break;default:A.aa8(
"%s%i",Iq,Po.GF);}Am3--;}Am3+=(Po.GF-Df.GF);if(Am3<0){Am3+=12;Ax7--;}Ax7+=(Po.Year-
Df.Year);if(A7S){Ax7=-Ax7;Am3=-Am3;Pm=-Pm;}var index=H0.indexOf(String.fromCharCode(
0x25),0);while(index>=0){var A9c=H0.charCodeAt(index+1)||0;H0=A.aa3(H0,index,2);
switch(A9c){case 0x64:H0=A.aaW(H0,Pm.toFixed(),index);break;case 0x6D:H0=A.aaW(H0
,Am3.toFixed(),index);break;case 0x79:case 0x59:H0=A.aaW(H0,Ax7.toFixed(),index);
break;case 0x25:H0=A.aaW(H0,Oe,index);break;default:A.aa8("%s%s",Pc,Oe+String.fromCharCode(
A9c));}index=H0.indexOf(String.fromCharCode(0x25),index+1);}return H0;},BcD:function(
Aa1){if(!(Aa1%4)&&!!(Aa1%100))return true;if(!(Aa1%400))return true;return false;
},BbG:function(Lm){if(!Lm)return A.jm;else{var Ap=A._NewObject(A.Core.Bp,0);Ap.Initialize(
Lm);return this.MonthToString.Cb(Ap.GF)+Ap.Format(Nq);}},_Init:function(aArg){A.
Device.MonthToString._Init.call(this.MonthToString={I:this},0);this.__proto__=C.
AZ8;A.hJ++;},_Done:function(){this.__proto__=null;this.MonthToString._Done();A.hJ--;
},_ReInit:function(){this.MonthToString._ReInit();},_Mark:function(D){var B;if((
B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::DateFormatterClass"
};C.K5={_Init:function(){C.AZ8._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.A1K={Abh:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.z2(A.abg.AGs);case 1:return A.z2(A.abg.A1A);default:A.aa8("%s%s"
,Cw,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Bsg:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AHL
);case 1:return A.zW(A.abi.AHK);default:A.aa8("%s%s",Cw,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Aww:function(Amo,D7){if(Amo<A._GetAutoObject(
A.Device.Helper).Azu(D7))return A.iF.F0;else if(Amo<A._GetAutoObject(A.Device.Helper
).Azt(D7))return A.iF.HB;else return A.iF.E1;},Awy:function(Amo,D7){if(Amo<A._GetAutoObject(
A.Device.Helper).Azu(D7))return A.iF.Be;else{A._GetAutoObject(A.Device.Helper).Azt(
D7);return A.iF.Text;}},YD:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit
){case 0:return A.z2(A.abg.Bcg);case 1:return A.z2(A.abg.Bhh);default:A.aa8("%s%s"
,Cw,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Awx:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",Cw,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A8M:function(AE5,Ge){var Ary;if((AE5<50000)||((AE5===50000)&&(Ge===5)))Ary=100;
else if((AE5<100000)||((AE5===100000)&&(Ge===5)))Ary=500;else Ary=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:Ary=(Ary/2)|0;break;
default:A.aa8("%s%s",Cw,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return Ary;
},A8G:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.AsK);case 1:return A.zW(A.abi.AsL);default:A.aa8("%s%s",Cw,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},Ajm:function(A7h,BqE,BpN){if(
!A7h)return 0;return Math.round((BpN-BqE)/A7h)|0;},_Init:function(aArg){this.__proto__=
C.A1K;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.Dy={_Init:function(
){C.A1K._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Bii={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bij={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bik={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.K5._this))B._ReInit();if((B=C.Dy.
_this))B._ReInit();};C.Dq=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.K5._this)&&(B._cycle!=D))B._Done(C.K5._this=
null);if((B=C.Dy._this)&&(B._cycle!=D))B._Done(C.Dy._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */