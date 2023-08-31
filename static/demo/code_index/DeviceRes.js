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
var B_="Unhandled enum BodyTemperature: ";var BH="Unhandled BodyTemperatureValue: ";
var EV="ERROR: Unhandled temperature unit: ";var GS="ERROR: unhandled assessment.";
var Jt="%H:%M";var IL="Invalid month";var OK="%";var PJ="Invalid format code";var
N1=" %Y";var CJ="ERROR: Unhandled mass unit: ";
C.A7$={BvC:function(Ee,Q1){if((Q1>=A._GetAutoObject(A.Device.Helper).AtZ(Ee))||(Q1<=
A._GetAutoObject(A.Device.Device).Zd))return 1;else return 0;},BvB:function(Ee,Q1
){var Ni=A._GetAutoObject(A.Device.Converter).Aiu(Q1,Ee);switch(Ni){case 3:return A.
z2(A.abg.At6);case 2:return A.z2(A.abg.Bfy);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.Bf_);default:throw new Error(B_+Ni.toFixed());}},Bvt:function(
Ee,Q1){var Ni=A._GetAutoObject(A.Device.Converter).Aiu(Q1,Ee);switch(Ni){case 3:
return A.iF.Ft;case 2:return A.iF.H1;case 1:return A.iF.EY;case 0:return A.iF.AeH;
default:throw new Error(BH+Ni.toFixed());}},AkQ:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.AEU);case 1:return A.
z2(A.abg.BlW);default:A.aa8("%s%s",EV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jm;},Bvu:function(Ee,Q1){var Ni=A._GetAutoObject(A.Device.Converter
).Aiu(Q1,Ee);switch(Ni){case 3:return A.iF.Bd;case 2:return A.iF.Text;case 1:return A.
iF.Bd;case 0:return A.iF.Bd;default:throw new Error(B_+Ni.toFixed());}},Bvw:function(
Ee,Q1){var Ni=A._GetAutoObject(A.Device.Converter).Aiu(Q1,Ee);switch(Ni){case 3:
return A.iF.Ft;case 2:return A.iF.Text;case 1:return A.iF.EY;case 0:return A.iF.
AeH;default:throw new Error(BH+Ni.toFixed());}},Bvx:function(Ee,Q1){var Ni=A._GetAutoObject(
A.Device.Converter).Aiu(Q1,Ee);switch(Ni){case 3:return 16711680;case 2:return 16776960;
case 1:return 65280;case 0:return 255;default:throw new Error(B_+Ni.toFixed());}
},Bvv:function(Ee,Q1){var Ni=A._GetAutoObject(A.Device.Converter).Aiu(Q1,Ee);switch(
Ni){case 3:return A.iF.Bd;case 2:return A.iF.Ft;case 1:return A.iF.Ft;case 0:return A.
iF.Ft;default:throw new Error(B_+Ni.toFixed());}},_Init:function(aArg){this.__proto__=
C.A7$;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A7$._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A2c={A$D:function(Ne){var BK=A.iF.Zb;switch(Ne){case 3:BK=A.iF.EY;break;
case 2:BK=A.iF.H1;break;case 1:BK=A.iF.Ft;break;case 0:BK=A.iF.Zb;break;case 4:BK=
A.iF.AeH;break;case 5:BK=A.iF.Zb;break;default:A.aa8("%s",GS);}return BK;},PX:function(
Ne){var BK=A.iF.Zb;switch(Ne){case 3:BK=A.iF.EY;break;case 2:BK=A.iF.H1;break;case
1:BK=A.iF.Ft;break;case 0:BK=A.iF.CL;break;case 5:BK=A.iF.CL;break;case 4:BK=A.iF.
AeH;break;default:A.aa8("%s%e",GS,Ne);}return BK;},WI:function(Ne){var BK=A.iF.Text;
switch(Ne){case 3:BK=A.iF.Bd;break;case 2:BK=A.iF.Text;break;case 1:BK=A.iF.Bd;break;
case 0:BK=A.iF.Text;break;case 4:BK=A.iF.Text;break;case 5:BK=A.iF.Text;break;default:
A.aa8("%s",GS);}return BK;},_Init:function(aArg){this.__proto__=C.A2c;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::AssessmentClass"};C.Assessment={_Init:function(){C.A2c.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.A20={MonthToString:
null,BeR:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.
Initialize(LX);return Aq.Format(A.z2(A.abg.BeT));}},AiZ:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(
A.abg.Af7));}},AA2:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.
Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(A.abg.BeS));}},A3I:function(LX){if(
!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.
Format(Jt);}},AA3:function(AYi,AX4,Ij){var B;var Dq=A._NewObject(A.Core.Bu,0);var
PV=A._NewObject(A.Core.Bu,0);var A_U=AX4<AYi;if(A_U){Dq.Initialize(AX4);PV.Initialize(
AYi);}else{Dq.Initialize(AYi);PV.Initialize(AX4);}var AzI=0;var Aol=0;var PT=0;PT+=(
PV.Gt-Dq.Gt);if(PT<0){switch(PV.G5){case 1:case 2:case 4:case 6:case 8:case 9:case
11:PT+=31;break;case 5:case 7:case 10:case 12:PT+=30;break;case 3:if(this.BfM(PV.
Year))PT+=29;else PT+=28;break;default:A.aa8("%s%i",IL,PV.G5);}Aol--;}Aol+=(PV.G5-
Dq.G5);if(Aol<0){Aol+=12;AzI--;}AzI+=(PV.Year-Dq.Year);if(A_U){AzI=-AzI;Aol=-Aol;
PT=-PT;}var index=Ij.indexOf(String.fromCharCode(0x25),0);while(index>=0){var Bae=
Ij.charCodeAt(index+1)||0;Ij=A.aa3(Ij,index,2);switch(Bae){case 0x64:Ij=A.aaW(Ij
,PT.toFixed(),index);break;case 0x6D:Ij=A.aaW(Ij,Aol.toFixed(),index);break;case
0x79:case 0x59:Ij=A.aaW(Ij,AzI.toFixed(),index);break;case 0x25:Ij=A.aaW(Ij,OK,index
);break;default:A.aa8("%s%s",PJ,OK+String.fromCharCode(Bae));}index=Ij.indexOf(String.
fromCharCode(0x25),index+1);}return Ij;},BfM:function(Ab_){if(!(Ab_%4)&&!!(Ab_%100
))return true;if(!(Ab_%400))return true;return false;},BeN:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return this.MonthToString.
BZ(Aq.G5)+Aq.Format(N1);}},_Init:function(aArg){A.Device.MonthToString._Init.call(
this.MonthToString={I:this},0);this.__proto__=C.A20;A.hJ++;},_Done:function(){this.
__proto__=null;this.MonthToString._Done();A.hJ--;},_ReInit:function(){this.MonthToString.
_ReInit();},_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::DateFormatterClass"};C.K1={_Init:function(){C.A20._Init.
call(this,0);},_variants:function(){return this;},_this:null};C.A4E={Acr:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.z2(A.abg.AIy
);case 1:return A.z2(A.abg.A4u);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return A.jm;},Bvs:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AJS);case 1:return A.zW(A.abi.
AJR);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Ax2:function(AnH,Ee){if(AnH<A._GetAutoObject(A.Device.Helper).
ABd(Ee))return A.iF.Ft;else if(AnH<A._GetAutoObject(A.Device.Helper).ABc(Ee))return A.
iF.H1;else return A.iF.EY;},Ax4:function(AnH,Ee){if(AnH<A._GetAutoObject(A.Device.
Helper).ABd(Ee))return A.iF.Bd;else{A._GetAutoObject(A.Device.Helper).ABc(Ee);return A.
iF.Text;}},ZE:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.z2(A.abg.Bfn);case 1:return A.z2(A.abg.Bkm);default:A.aa8("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Ax3:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A$O:function(AG5,GC){var As8;if((AG5<50000)||((AG5===50000)&&(GC===5)))As8=100;
else if((AG5<100000)||((AG5===100000)&&(GC===5)))As8=500;else As8=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:As8=(As8/2)|0;break;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return As8;
},A$I:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.Aui);case 1:return A.zW(A.abi.Auj);default:A.aa8("%s%s",CJ,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},AkD:function(A_h,BtQ,Bs0){if(
!A_h)return 0;return Math.round((Bs0-BtQ)/A_h)|0;},_Init:function(aArg){this.__proto__=
C.A4E;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DM={_Init:function(
){C.A4E._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Blm={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Bln={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Blo={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.K1._this))B._ReInit();if((B=C.DM.
_this))B._ReInit();};C.DE=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.K1._this)&&(B._cycle!=D))B._Done(C.K1._this=
null);if((B=C.DM._this)&&(B._cycle!=D))B._Done(C.DM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */