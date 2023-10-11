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
C.A8i={BvG:function(Ee,Q3){if((Q3>=A._GetAutoObject(A.Device.Helper).AtY(Ee))||(Q3<=
A._GetAutoObject(A.Device.Device).Zd))return 1;else return 0;},BvF:function(Ee,Q3
){var Nk=A._GetAutoObject(A.Device.Converter).Aiw(Q3,Ee);switch(Nk){case 3:return A.
z2(A.abg.At5);case 2:return A.z2(A.abg.BfH);case 1:return A.z2(A.abg.Normal);case
0:return A.z2(A.abg.Bgg);default:throw new Error(B$+Nk.toFixed());}},Bvx:function(
Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter).Aiw(Q3,Ee);switch(Nk){case 3:
return A.iF.Ft;case 2:return A.iF.H1;case 1:return A.iF.EY;case 0:return A.iF.AeI;
default:throw new Error(BH+Nk.toFixed());}},AkR:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.z2(A.abg.AEV);case 1:return A.
z2(A.abg.Bl7);default:A.aa8("%s%s",EV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jm;},Bvy:function(Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter
).Aiw(Q3,Ee);switch(Nk){case 3:return A.iF.Bd;case 2:return A.iF.Text;case 1:return A.
iF.Bd;case 0:return A.iF.Bd;default:throw new Error(B$+Nk.toFixed());}},BvA:function(
Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter).Aiw(Q3,Ee);switch(Nk){case 3:
return A.iF.Ft;case 2:return A.iF.Text;case 1:return A.iF.EY;case 0:return A.iF.
AeI;default:throw new Error(BH+Nk.toFixed());}},BvB:function(Ee,Q3){var Nk=A._GetAutoObject(
A.Device.Converter).Aiw(Q3,Ee);switch(Nk){case 3:return 16711680;case 2:return 16776960;
case 1:return 65280;case 0:return 255;default:throw new Error(B$+Nk.toFixed());}
},Bvz:function(Ee,Q3){var Nk=A._GetAutoObject(A.Device.Converter).Aiw(Q3,Ee);switch(
Nk){case 3:return A.iF.Bd;case 2:return A.iF.Ft;case 1:return A.iF.Ft;case 0:return A.
iF.Ft;default:throw new Error(B$+Nk.toFixed());}},_Init:function(aArg){this.__proto__=
C.A8i;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"};C.Temperature={
_Init:function(){C.A8i._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A2j={A$M:function(Ng){var BK=A.iF.Zb;switch(Ng){case 3:BK=A.iF.EY;break;
case 2:BK=A.iF.H1;break;case 1:BK=A.iF.Ft;break;case 0:BK=A.iF.Zb;break;case 4:BK=
A.iF.AeI;break;case 5:BK=A.iF.Zb;break;default:A.aa8("%s",GT);}return BK;},PY:function(
Ng){var BK=A.iF.Zb;switch(Ng){case 3:BK=A.iF.EY;break;case 2:BK=A.iF.H1;break;case
1:BK=A.iF.Ft;break;case 0:BK=A.iF.CL;break;case 5:BK=A.iF.CL;break;case 4:BK=A.iF.
AeI;break;default:A.aa8("%s%e",GT,Ng);}return BK;},WG:function(Ng){var BK=A.iF.Text;
switch(Ng){case 3:BK=A.iF.Bd;break;case 2:BK=A.iF.Text;break;case 1:BK=A.iF.Bd;break;
case 0:BK=A.iF.Text;break;case 4:BK=A.iF.Text;break;case 5:BK=A.iF.Text;break;default:
A.aa8("%s",GT);}return BK;},_Init:function(aArg){this.__proto__=C.A2j;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::AssessmentClass"};C.Assessment={_Init:function(){C.A2j.
_Init.call(this,0);},_variants:function(){return this;},_this:null};C.A27={MonthToString:
null,Be1:function(LY){if(!LY)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.
Initialize(LY);return Aq.Format(A.z2(A.abg.Be3));}},Ai1:function(LY){if(!LY)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LY);return Aq.Format(A.z2(
A.abg.Af7));}},AA3:function(LY){if(!LY)return A.jm;else{var Aq=A._NewObject(A.Core.
Bu,0);Aq.Initialize(LY);return Aq.Format(A.z2(A.abg.Be2));}},A3P:function(LY){if(
!LY)return A.jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LY);return Aq.
Format(Jt);}},AA4:function(AYp,AX$,Ij){var B;var Dq=A._NewObject(A.Core.Bu,0);var
PV=A._NewObject(A.Core.Bu,0);var A_3=AX$<AYp;if(A_3){Dq.Initialize(AX$);PV.Initialize(
AYp);}else{Dq.Initialize(AYp);PV.Initialize(AX$);}var AzJ=0;var Aoo=0;var PT=0;PT+=(
PV.Gu-Dq.Gu);if(PT<0){switch(PV.G6){case 1:case 2:case 4:case 6:case 8:case 9:case
11:PT+=31;break;case 5:case 7:case 10:case 12:PT+=30;break;case 3:if(this.BfV(PV.
Year))PT+=29;else PT+=28;break;default:A.aa8("%s%i",IL,PV.G6);}Aoo--;}Aoo+=(PV.G6-
Dq.G6);if(Aoo<0){Aoo+=12;AzJ--;}AzJ+=(PV.Year-Dq.Year);if(A_3){AzJ=-AzJ;Aoo=-Aoo;
PT=-PT;}var index=Ij.indexOf(String.fromCharCode(0x25),0);while(index>=0){var Ban=
Ij.charCodeAt(index+1)||0;Ij=A.aa3(Ij,index,2);switch(Ban){case 0x64:Ij=A.aaW(Ij
,PT.toFixed(),index);break;case 0x6D:Ij=A.aaW(Ij,Aoo.toFixed(),index);break;case
0x79:case 0x59:Ij=A.aaW(Ij,AzJ.toFixed(),index);break;case 0x25:Ij=A.aaW(Ij,OK,index
);break;default:A.aa8("%s%s",PJ,OK+String.fromCharCode(Ban));}index=Ij.indexOf(String.
fromCharCode(0x25),index+1);}return Ij;},BfV:function(Ab_){if(!(Ab_%4)&&!!(Ab_%100
))return true;if(!(Ab_%400))return true;return false;},BeX:function(LY){if(!LY)return A.
jm;else{var Aq=A._NewObject(A.Core.Bu,0);Aq.Initialize(LY);return this.MonthToString.
B0(Aq.G6)+Aq.Format(N1);}},_Init:function(aArg){A.Device.MonthToString._Init.call(
this.MonthToString={I:this},0);this.__proto__=C.A27;A.hJ++;},_Done:function(){this.
__proto__=null;this.MonthToString._Done();A.hJ--;},_ReInit:function(){this.MonthToString.
_ReInit();},_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"DeviceRes::DateFormatterClass"};C.K1={_Init:function(){C.A27._Init.
call(this,0);},_variants:function(){return this;},_this:null};C.A4N={Acr:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.z2(A.abg.AIt
);case 1:return A.z2(A.abg.A4D);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return A.jm;},Bvw:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AJN);case 1:return A.zW(A.abi.
AJM);default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Ax4:function(AnK,Ee){if(AnK<A._GetAutoObject(A.Device.Helper).
ABe(Ee))return A.iF.Ft;else if(AnK<A._GetAutoObject(A.Device.Helper).ABd(Ee))return A.
iF.H1;else return A.iF.EY;},Ax6:function(AnK,Ee){if(AnK<A._GetAutoObject(A.Device.
Helper).ABe(Ee))return A.iF.Bd;else{A._GetAutoObject(A.Device.Helper).ABd(Ee);return A.
iF.Text;}},ZH:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.z2(A.abg.Bfx);case 1:return A.z2(A.abg.Bkv);default:A.aa8("%s%s",CJ,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jm;},Ax5:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;case 1:return 5;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return 10;
},A$X:function(AG0,GD){var As7;if((AG0<50000)||((AG0===50000)&&(GD===5)))As7=100;
else if((AG0<100000)||((AG0===100000)&&(GD===5)))As7=500;else As7=1000;switch(A.
_GetAutoObject(A.Device.Device).MassUnit){case 0:break;case 1:As7=(As7/2)|0;break;
default:A.aa8("%s%s",CJ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return As7;
},A$R:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.
zW(A.abi.Auh);case 1:return A.zW(A.abi.Aui);default:A.aa8("%s%s",CJ,A._GetAutoObject(
A.Device.Device).MassUnit.toFixed());}return null;},AkE:function(A_q,BtU,Bs4){if(
!A_q)return 0;return Math.round((Bs4-BtU)/A_q)|0;},_Init:function(aArg){this.__proto__=
C.A4N;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"DeviceRes::MassClass"};C.DM={_Init:function(
){C.A4N._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Blw={
3:"\u7DA0\u8272",0:"Green",7:"Vihre\xE4",8:"Vert",9:"Gr\xFCn",10:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,15:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",17:"Ye\u015Fil"};C.Blx={3:"\u7D05\u8272"
,0:"Red",7:"Punainen",8:"Rouge",9:"Rot",10:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,15:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",17:"K\u0131rm\u0131z\u0131"};C.
Bly={3:"\u9EC3\u8272",0:"Yellow",7:"Keltainen",8:"Jaune",9:"Gelb",10:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,15:"\u0416\u0451\u043B\u0442\u044B\u0439",17:"Sar\u0131"};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
);if((B=C.Assessment._this))B._ReInit();if((B=C.K1._this))B._ReInit();if((B=C.DM.
_this))B._ReInit();};C.DE=function(D){var B;if((B=C.Temperature._this)&&(B._cycle
!=D))B._Done(C.Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))
B._Done(C.Assessment._this=null);if((B=C.K1._this)&&(B._cycle!=D))B._Done(C.K1._this=
null);if((B=C.DM._this)&&(B._cycle!=D))B._Done(C.DM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */