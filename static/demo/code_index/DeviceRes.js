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
var B9="Unhandled enum BodyTemperature: ";var BG="Unhandled BodyTemperatureValue: ";
var EV="ERROR: Unhandled temperature unit: ";var GS="ERROR: unhandled assessment.";
var Js="%H:%M";var IL="Invalid month";var OJ="%";var PH="Invalid format code";var
N0=" %Y";var CJ="ERROR: Unhandled mass unit: ";
C.A7T={Bvn:function(Eg,Q1){if((Q1>=A._GetAutoObject(A.Device.Helper).AtO(Eg))||(Q1<=
A._GetAutoObject(A.Device.Device).Y2))return 1;else return 0;},Bvm:function(Eg,Q1
){var Nh=A._GetAutoObject(A.Device.Converter).Aik(Q1,Eg);switch(Nh){case 3:return A.
z2(A.abg.AtV);case 2:return A.z2(A.abg.Bfj);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.BfV);default:throw new Error(B9+Nh.toFixed());}},Bve:function(
Eg,Q1){var Nh=A._GetAutoObject(A.Device.Converter).Aik(Q1,Eg);switch(Nh){case 3:
return A.iF.Ft;case 2:return A.iF.H0;case 1:return A.iF.EY;case 0:return A.iF.AeA;
default:throw new Error(BG+Nh.toFixed());}},AkI:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.AEK);case 1:return A.
z2(A.abg.BlG);default:A.aa8("%s%s",EV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jm;},Bvf:function(Eg,Q1){var Nh=A._GetAutoObject(A.Device.Converter
).Aik(Q1,Eg);switch(Nh){case 3:return A.iF.Bd;case 2:return A.iF.Text;case 1:return A.
iF.Bd;case 0:return A.iF.Bd;default:throw new Error(B9+Nh.toFixed());}},Bvh:function(
Eg,Q1){var Nh=A._GetAutoObject(A.Device.Converter).Aik(Q1,Eg);switch(Nh){case 3:
return A.iF.Ft;case 2:return A.iF.Text;case 1:return A.iF.EY;case 0:return A.iF.
AeA;default:throw new Error(BG+Nh.toFixed());}},Bvi:function(Eg,Q1){var Nh=A._GetAutoObject(
A.Device.Converter).Aik(Q1,Eg);switch(Nh){case 3:return 16711680;case 2:return 16776960;
case 1:return 65280;case 0:return 255;default:throw new Error(B9+Nh.toFixed());}
},Bvg:function(Eg,Q1){var Nh=A._GetAutoObject(A.Device.Converter).Aik(Q1,Eg);switch(
Nh){case 3:return A.iF.Bd;case 2:return A.iF.Ft;case 1:return A.iF.Ft;case 0:return A.
iF.Ft;default:throw new Error(B9+Nh.toFixed());}},_Init:function(aArg){this.__proto__=
C.A7T;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A7T._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A1T={A$q:function(Ne){var BJ=A.iF.Y0;switch(Ne){case 3:BJ=A.iF.EY;break;
case 2:BJ=A.iF.H0;break;case 1:BJ=A.iF.Ft;break;case 0:BJ=A.iF.Y0;break;case 4:BJ=
A.iF.AeA;break;case 5:BJ=A.iF.Y0;break;default:A.aa8("%s",GS);}return BJ;},PW:function(
Ne){var BJ=A.iF.Y0;switch(Ne){case 3:BJ=A.iF.EY;break;case 2:BJ=A.iF.H0;break;case
1:BJ=A.iF.Ft;break;case 0:BJ=A.iF.CL;break;case 5:BJ=A.iF.CL;break;case 4:BJ=A.iF.
AeA;break;default:A.aa8("%s%e",GS,Ne);}return BJ;},WC:function(Ne){var BJ=A.iF.Text;
switch(Ne){case 3:BJ=A.iF.Bd;break;case 2:BJ=A.iF.Text;break;case 1:BJ=A.iF.Bd;break;
case 0:BJ=A.iF.Text;break;case 4:BJ=A.iF.Text;break;case 5:BJ=A.iF.Text;break;default:
A.aa8("%s",GS);}return BJ;},_Init:function(aArg){this.__proto__=C.A1T;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::AssessmentClass"};C.Assessment={_Init:function(){C.A1T.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.A2D={MonthToString:
null,BeD:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.
Initialize(LX);return Aq.Format(A.z2(A.abg.BeF));}},AiO:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(
A.abg.AfY));}},AAV:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.
Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(A.abg.BeE));}},A3l:function(LX){if(
!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.
Format(Js);}},AAW:function(AX1,AXL,Ii){var B;var Dq=A._NewObject(A.Core.Bu,0);var
PU=A._NewObject(A.Core.Bu,0);var A_E=AXL<AX1;if(A_E){Dq.Initialize(AXL);PU.Initialize(
AX1);}else{Dq.Initialize(AX1);PU.Initialize(AXL);}var AzA=0;var An$=0;var PR=0;PR+=(
PU.Gu-Dq.Gu);if(PR<0){switch(PU.G6){case 1:case 2:case 4:case 6:case 8:case 9:case
11:PR+=31;break;case 5:case 7:case 10:case 12:PR+=30;break;case 3:if(this.Bfx(PU.
Year))PR+=29;else PR+=28;break;default:A.aa8("%s%i",IL,PU.G6);}An$--;}An$+=(PU.G6-
Dq.G6);if(An$<0){An$+=12;AzA--;}AzA+=(PU.Year-Dq.Year);if(A_E){AzA=-AzA;An$=-An$;
PR=-PR;}var index=Ii.indexOf(String.fromCharCode(0x25),0);while(index>=0){var A$3=
Ii.charCodeAt(index+1)||0;Ii=A.aa3(Ii,index,2);switch(A$3){case 0x64:Ii=A.aaW(Ii
,PR.toFixed(),index);break;case 0x6D:Ii=A.aaW(Ii,An$.toFixed(),index);break;case
0x79:case 0x59:Ii=A.aaW(Ii,AzA.toFixed(),index);break;case 0x25:Ii=A.aaW(Ii,OJ,index
);break;default:A.aa8("%s%s",PH,OJ+String.fromCharCode(A$3));}index=Ii.indexOf(String.
fromCharCode(0x25),index+1);}return Ii;},Bfx:function(AbX){if(!(AbX%4)&&!!(AbX%100
))return true;if(!(AbX%400))return true;return false;},Bez:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return this.MonthToString.
Ca(Aq.G6)+Aq.Format(N0);}},_Init:function(aArg){A.Device.MonthToString._Init.call(
this.MonthToString={I:this},0);this.__proto__=C.A2D;A.hJ++;},_Done:function(){this.
__proto__=null;this.MonthToString._Done();A.hJ--;},_ReInit:function(){this.MonthToString.
_ReInit();},_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::DateFormatterClass"};C.KZ={_Init:function(){C.A2D._Init.
call(this,0);},_variants:function(){return this;},_this:null};C.A4h={Acf:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.z2(A.abg.AIh
);case 1:return A.z2(A.abg.A39);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return A.jm;},Bvd:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AJB);case 1:return A.zW(A.abi.
AJA);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AxV:function(Anv,Eg){if(Anv<A._GetAutoObject(A.Device.Helper).
AA8(Eg))return A.iF.Ft;else if(Anv<A._GetAutoObject(A.Device.Helper).AA7(Eg))return A.
iF.H0;else return A.iF.EY;},AxX:function(Anv,Eg){if(Anv<A._GetAutoObject(A.Device.
Helper).AA8(Eg))return A.iF.Bd;else{A._GetAutoObject(A.Device.Helper).AA7(Eg);return A.
iF.Text;}},Zs:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.z2(A.abg.Be$);case 1:return A.z2(A.abg.Bj8);default:A.aa8("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},AxW:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A$B:function(AGO,GC){var AsY;if((AGO<50000)||((AGO===50000)&&(GC===5)))AsY=100;
else if((AGO<100000)||((AGO===100000)&&(GC===5)))AsY=500;else AsY=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:AsY=(AsY/2)|0;break;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return AsY;
},A$v:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.At9);case 1:return A.zW(A.abi.At_);default:A.aa8("%s%s",CJ,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},Akt:function(A93,BtF,BsP){if(
!A93)return 0;return Math.round((BsP-BtF)/A93)|0;},_Init:function(aArg){this.__proto__=
C.A4h;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DM={_Init:function(
){C.A4h._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Bk8={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bk9={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bk_={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.KZ._this))B._ReInit();if((B=C.DM.
_this))B._ReInit();};C.DB=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.KZ._this)&&(B._cycle!=D))B._Done(C.KZ._this=
null);if((B=C.DM._this)&&(B._cycle!=D))B._Done(C.DM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */