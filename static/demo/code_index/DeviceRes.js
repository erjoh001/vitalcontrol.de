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
C.A8h={BvC:function(Ee,Q1){if((Q1>=A._GetAutoObject(A.Device.Helper).AtY(Ee))||(Q1<=
A._GetAutoObject(A.Device.Device).Y$))return 1;else return 0;},BvB:function(Ee,Q1
){var Ni=A._GetAutoObject(A.Device.Converter).Aiu(Q1,Ee);switch(Ni){case 3:return A.
z2(A.abg.At5);case 2:return A.z2(A.abg.BfF);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.Bge);default:throw new Error(B_+Ni.toFixed());}},Bvt:function(
Ee,Q1){var Ni=A._GetAutoObject(A.Device.Converter).Aiu(Q1,Ee);switch(Ni){case 3:
return A.iF.Ft;case 2:return A.iF.H1;case 1:return A.iF.EY;case 0:return A.iF.AeH;
default:throw new Error(BH+Ni.toFixed());}},AkS:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.AEU);case 1:return A.
z2(A.abg.Bl2);default:A.aa8("%s%s",EV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
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
C.A8h;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A8h._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A2j={A$K:function(Ne){var BK=A.iF.Y9;switch(Ne){case 3:BK=A.iF.EY;break;
case 2:BK=A.iF.H1;break;case 1:BK=A.iF.Ft;break;case 0:BK=A.iF.Y9;break;case 4:BK=
A.iF.AeH;break;case 5:BK=A.iF.Y9;break;default:A.aa8("%s",GS);}return BK;},PX:function(
Ne){var BK=A.iF.Y9;switch(Ne){case 3:BK=A.iF.EY;break;case 2:BK=A.iF.H1;break;case
1:BK=A.iF.Ft;break;case 0:BK=A.iF.CL;break;case 5:BK=A.iF.CL;break;case 4:BK=A.iF.
AeH;break;default:A.aa8("%s%e",GS,Ne);}return BK;},WE:function(Ne){var BK=A.iF.Text;
switch(Ne){case 3:BK=A.iF.Bd;break;case 2:BK=A.iF.Text;break;case 1:BK=A.iF.Bd;break;
case 0:BK=A.iF.Text;break;case 4:BK=A.iF.Text;break;case 5:BK=A.iF.Text;break;default:
A.aa8("%s",GS);}return BK;},_Init:function(aArg){this.__proto__=C.A2j;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::AssessmentClass"};C.Assessment={_Init:function(){C.A2j.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.A27={MonthToString:
null,BeY:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.
Initialize(LX);return Aq.Format(A.z2(A.abg.Be0));}},AiZ:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(
A.abg.Af8));}},AA1:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.
Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(A.abg.BeZ));}},A3P:function(LX){if(
!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.
Format(Jt);}},AA2:function(AYp,AX$,Ij){var B;var Dq=A._NewObject(A.Core.Bu,0);var
PV=A._NewObject(A.Core.Bu,0);var A_1=AX$<AYp;if(A_1){Dq.Initialize(AX$);PV.Initialize(
AYp);}else{Dq.Initialize(AYp);PV.Initialize(AX$);}var AzH=0;var Aop=0;var PT=0;PT+=(
PV.Gt-Dq.Gt);if(PT<0){switch(PV.G5){case 1:case 2:case 4:case 6:case 8:case 9:case
11:PT+=31;break;case 5:case 7:case 10:case 12:PT+=30;break;case 3:if(this.BfT(PV.
Year))PT+=29;else PT+=28;break;default:A.aa8("%s%i",IL,PV.G5);}Aop--;}Aop+=(PV.G5-
Dq.G5);if(Aop<0){Aop+=12;AzH--;}AzH+=(PV.Year-Dq.Year);if(A_1){AzH=-AzH;Aop=-Aop;
PT=-PT;}var index=Ij.indexOf(String.fromCharCode(0x25),0);while(index>=0){var Bal=
Ij.charCodeAt(index+1)||0;Ij=A.aa3(Ij,index,2);switch(Bal){case 0x64:Ij=A.aaW(Ij
,PT.toFixed(),index);break;case 0x6D:Ij=A.aaW(Ij,Aop.toFixed(),index);break;case
0x79:case 0x59:Ij=A.aaW(Ij,AzH.toFixed(),index);break;case 0x25:Ij=A.aaW(Ij,OK,index
);break;default:A.aa8("%s%s",PJ,OK+String.fromCharCode(Bal));}index=Ij.indexOf(String.
fromCharCode(0x25),index+1);}return Ij;},BfT:function(Ab9){if(!(Ab9%4)&&!!(Ab9%100
))return true;if(!(Ab9%400))return true;return false;},BeU:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return this.MonthToString.
BZ(Aq.G5)+Aq.Format(N1);}},_Init:function(aArg){A.Device.MonthToString._Init.call(
this.MonthToString={I:this},0);this.__proto__=C.A27;A.hJ++;},_Done:function(){this.
__proto__=null;this.MonthToString._Done();A.hJ--;},_ReInit:function(){this.MonthToString.
_ReInit();},_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::DateFormatterClass"};C.K1={_Init:function(){C.A27._Init.
call(this,0);},_variants:function(){return this;},_this:null};C.A4M={Acq:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.z2(A.abg.AIx
);case 1:return A.z2(A.abg.A4C);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return A.jm;},Bvs:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AJR);case 1:return A.zW(A.abi.
AJQ);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Ax1:function(AnL,Ee){if(AnL<A._GetAutoObject(A.Device.Helper).
ABc(Ee))return A.iF.Ft;else if(AnL<A._GetAutoObject(A.Device.Helper).ABb(Ee))return A.
iF.H1;else return A.iF.EY;},Ax3:function(AnL,Ee){if(AnL<A._GetAutoObject(A.Device.
Helper).ABc(Ee))return A.iF.Bd;else{A._GetAutoObject(A.Device.Helper).ABb(Ee);return A.
iF.Text;}},ZE:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.z2(A.abg.Bfu);case 1:return A.z2(A.abg.Bks);default:A.aa8("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Ax2:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A$V:function(AG4,GC){var As7;if((AG4<50000)||((AG4===50000)&&(GC===5)))As7=100;
else if((AG4<100000)||((AG4===100000)&&(GC===5)))As7=500;else As7=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:As7=(As7/2)|0;break;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return As7;
},A$P:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.Auh);case 1:return A.zW(A.abi.Aui);default:A.aa8("%s%s",CJ,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},AkF:function(A_o,BtQ,Bs0){if(
!A_o)return 0;return Math.round((Bs0-BtQ)/A_o)|0;},_Init:function(aArg){this.__proto__=
C.A4M;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DM={_Init:function(
){C.A4M._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Bls={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Blt={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Blu={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.K1._this))B._ReInit();if((B=C.DM.
_this))B._ReInit();};C.DE=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.K1._this)&&(B._cycle!=D))B._Done(C.K1._this=
null);if((B=C.DM._this)&&(B._cycle!=D))B._Done(C.DM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */