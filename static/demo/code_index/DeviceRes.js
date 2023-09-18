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
var B$="Unhandled enum BodyTemperature: ";var BH="Unhandled BodyTemperatureValue: ";
var EV="ERROR: Unhandled temperature unit: ";var GT="ERROR: unhandled assessment.";
var Jt="%H:%M";var IL="Invalid month";var OK="%";var PJ="Invalid format code";var
N1=" %Y";var CJ="ERROR: Unhandled mass unit: ";
C.A8h={BvG:function(Ee,Q3){if((Q3>=A._GetAutoObject(A.Device.Helper).At0(Ee))||(Q3<=
A._GetAutoObject(A.Device.Device).Zb))return 1;else return 0;},BvF:function(Ee,Q3
){var Nk=A._GetAutoObject(A.Device.Converter).Aiv(Q3,Ee);switch(Nk){case 3:return A.
z2(A.abg.At7);case 2:return A.z2(A.abg.BfG);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.Bgf);default:throw new Error(B$+Nk.toFixed());}},Bvx:function(
Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter).Aiv(Q3,Ee);switch(Nk){case 3:
return A.iF.Ft;case 2:return A.iF.H1;case 1:return A.iF.EY;case 0:return A.iF.AeH;
default:throw new Error(BH+Nk.toFixed());}},AkT:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.AEU);case 1:return A.
z2(A.abg.Bl6);default:A.aa8("%s%s",EV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jm;},Bvy:function(Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter
).Aiv(Q3,Ee);switch(Nk){case 3:return A.iF.Bd;case 2:return A.iF.Text;case 1:return A.
iF.Bd;case 0:return A.iF.Bd;default:throw new Error(B$+Nk.toFixed());}},BvA:function(
Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter).Aiv(Q3,Ee);switch(Nk){case 3:
return A.iF.Ft;case 2:return A.iF.Text;case 1:return A.iF.EY;case 0:return A.iF.
AeH;default:throw new Error(BH+Nk.toFixed());}},BvB:function(Ee,Q3){var Nk=A._GetAutoObject(
A.Device.Converter).Aiv(Q3,Ee);switch(Nk){case 3:return 16711680;case 2:return 16776960;
case 1:return 65280;case 0:return 255;default:throw new Error(B$+Nk.toFixed());}
},Bvz:function(Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter).Aiv(Q3,Ee);switch(
Nk){case 3:return A.iF.Bd;case 2:return A.iF.Ft;case 1:return A.iF.Ft;case 0:return A.
iF.Ft;default:throw new Error(B$+Nk.toFixed());}},_Init:function(aArg){this.__proto__=
C.A8h;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A8h._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A2j={A$K:function(Ng){var BK=A.iF.Y$;switch(Ng){case 3:BK=A.iF.EY;break;
case 2:BK=A.iF.H1;break;case 1:BK=A.iF.Ft;break;case 0:BK=A.iF.Y$;break;case 4:BK=
A.iF.AeH;break;case 5:BK=A.iF.Y$;break;default:A.aa8("%s",GT);}return BK;},PY:function(
Ng){var BK=A.iF.Y$;switch(Ng){case 3:BK=A.iF.EY;break;case 2:BK=A.iF.H1;break;case
1:BK=A.iF.Ft;break;case 0:BK=A.iF.CL;break;case 5:BK=A.iF.CL;break;case 4:BK=A.iF.
AeH;break;default:A.aa8("%s%e",GT,Ng);}return BK;},WF:function(Ng){var BK=A.iF.Text;
switch(Ng){case 3:BK=A.iF.Bd;break;case 2:BK=A.iF.Text;break;case 1:BK=A.iF.Bd;break;
case 0:BK=A.iF.Text;break;case 4:BK=A.iF.Text;break;case 5:BK=A.iF.Text;break;default:
A.aa8("%s",GT);}return BK;},_Init:function(aArg){this.__proto__=C.A2j;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::AssessmentClass"};C.Assessment={_Init:function(){C.A2j.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.A27={MonthToString:
null,BeZ:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.
Initialize(LX);return Aq.Format(A.z2(A.abg.Be1));}},Ai0:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(
A.abg.Af8));}},AA2:function(LX){if(!LX)return A.jm;else{var Aq=A._NewObject(A.Core.
Bu,0);Aq.Initialize(LX);return Aq.Format(A.z2(A.abg.Be0));}},A3P:function(LX){if(
!LX)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return Aq.
Format(Jt);}},AA3:function(AYp,AX$,Ij){var B;var Dq=A._NewObject(A.Core.Bu,0);var
PV=A._NewObject(A.Core.Bu,0);var A_1=AX$<AYp;if(A_1){Dq.Initialize(AX$);PV.Initialize(
AYp);}else{Dq.Initialize(AYp);PV.Initialize(AX$);}var AzI=0;var Aop=0;var PT=0;PT+=(
PV.Gu-Dq.Gu);if(PT<0){switch(PV.G6){case 1:case 2:case 4:case 6:case 8:case 9:case
11:PT+=31;break;case 5:case 7:case 10:case 12:PT+=30;break;case 3:if(this.BfU(PV.
Year))PT+=29;else PT+=28;break;default:A.aa8("%s%i",IL,PV.G6);}Aop--;}Aop+=(PV.G6-
Dq.G6);if(Aop<0){Aop+=12;AzI--;}AzI+=(PV.Year-Dq.Year);if(A_1){AzI=-AzI;Aop=-Aop;
PT=-PT;}var index=Ij.indexOf(String.fromCharCode(0x25),0);while(index>=0){var Bal=
Ij.charCodeAt(index+1)||0;Ij=A.aa3(Ij,index,2);switch(Bal){case 0x64:Ij=A.aaW(Ij
,PT.toFixed(),index);break;case 0x6D:Ij=A.aaW(Ij,Aop.toFixed(),index);break;case
0x79:case 0x59:Ij=A.aaW(Ij,AzI.toFixed(),index);break;case 0x25:Ij=A.aaW(Ij,OK,index
);break;default:A.aa8("%s%s",PJ,OK+String.fromCharCode(Bal));}index=Ij.indexOf(String.
fromCharCode(0x25),index+1);}return Ij;},BfU:function(Ab9){if(!(Ab9%4)&&!!(Ab9%100
))return true;if(!(Ab9%400))return true;return false;},BeV:function(LX){if(!LX)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LX);return this.MonthToString.
B0(Aq.G6)+Aq.Format(N1);}},_Init:function(aArg){A.Device.MonthToString._Init.call(
this.MonthToString={I:this},0);this.__proto__=C.A27;A.hJ++;},_Done:function(){this.
__proto__=null;this.MonthToString._Done();A.hJ--;},_ReInit:function(){this.MonthToString.
_ReInit();},_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::DateFormatterClass"};C.K1={_Init:function(){C.A27._Init.
call(this,0);},_variants:function(){return this;},_this:null};C.A4M={Acq:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.z2(A.abg.AIu
);case 1:return A.z2(A.abg.A4C);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return A.jm;},Bvw:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AJO);case 1:return A.zW(A.abi.
AJN);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Ax3:function(AnL,Ee){if(AnL<A._GetAutoObject(A.Device.Helper).
ABd(Ee))return A.iF.Ft;else if(AnL<A._GetAutoObject(A.Device.Helper).ABc(Ee))return A.
iF.H1;else return A.iF.EY;},Ax5:function(AnL,Ee){if(AnL<A._GetAutoObject(A.Device.
Helper).ABd(Ee))return A.iF.Bd;else{A._GetAutoObject(A.Device.Helper).ABc(Ee);return A.
iF.Text;}},ZG:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.z2(A.abg.Bfv);case 1:return A.z2(A.abg.Bku);default:A.aa8("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Ax4:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A$V:function(AG1,GD){var As9;if((AG1<50000)||((AG1===50000)&&(GD===5)))As9=100;
else if((AG1<100000)||((AG1===100000)&&(GD===5)))As9=500;else As9=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:As9=(As9/2)|0;break;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return As9;
},A$P:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.Auj);case 1:return A.zW(A.abi.Auk);default:A.aa8("%s%s",CJ,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},AkG:function(A_o,BtU,Bs4){if(
!A_o)return 0;return Math.round((Bs4-BtU)/A_o)|0;},_Init:function(aArg){this.__proto__=
C.A4M;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DM={_Init:function(
){C.A4M._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Blv={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Blw={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Blx={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.K1._this))B._ReInit();if((B=C.DM.
_this))B._ReInit();};C.DE=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.K1._this)&&(B._cycle!=D))B._Done(C.K1._this=
null);if((B=C.DM._this)&&(B._cycle!=D))B._Done(C.DM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */