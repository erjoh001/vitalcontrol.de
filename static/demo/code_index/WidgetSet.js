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
);if(index.acr)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acr=(function(){var A=index;var C={};
var Cd=[0,0,200,50];var BF=[0,0,150,50];var E4=[0,50];var Hm=[150,50];var IQ=[150
,0];var Ip=[0,0];
C.Ad7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADm={AxH:null,AxG:null,AUO:500,AGZ:-1,AVg:0xFFFFFFFF,AGY:-1,W1:A.wf,Bm8:
function(E){if(this.AUO===E)return;this.AUO=E;A.pe([this,this.EH],this);},A_j:function(
E){if(this.AGZ===E)return;this.AGZ=E;A.pe([this,this.EH],this);},A_i:function(E){
if(this.AxH===E)return;this.AxH=E;A.pe([this,this.EH],this);},A_h:function(E){if(
this.AVg===E)return;this.AVg=E;A.pe([this,this.EH],this);},A_g:function(E){if(this.
AGY===E)return;this.AGY=E;A.pe([this,this.EH],this);},A_f:function(E){if(this.AxG===
E)return;this.AxG=E;A.pe([this,this.EH],this);},AFY:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W1,E))return;this.W1=E;A.pe([this,this.EH
],this);},_Init:function(aArg){C.Aob._Init.call(this,aArg);this.__proto__=C.ADm;
},_Mark:function(D){var B;C.Aob._Mark.call(this,D);if((B=this.AxH)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxG)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU$={AvQ:null,AvP:null,Au8:null,Au$:null
,Au_:null,Au9:null,Au4:null,Au7:null,Au6:null,Au5:null,ARf:0xFF000000,ARi:0xFF000000
,ARh:0xFF000000,ARg:0xFF000000,ARb:0xFF000000,ARe:0xFF000000,ARd:0xFF000000,ARc:
0xFF000000,ARa:0,A6T:0xFFFFFFFF,A6W:0xFFFFFFFF,A6V:0xFFFFFFFF,A6U:0xFFFFFFFF,A6P:
0xFFFFFFFF,A6S:0xFFFFFFFF,A6R:0xFFFFFFFF,A6Q:0xFFFFFFFF,A6O:0,AQ$:0x12,A6N:0x12,
AOl:0x3F,AOq:-1,AOt:-1,AOs:-1,AOr:-1,AOm:-1,AOp:-1,AOo:-1,AOn:-1,W1:A.wf,Bmx:function(
E){if(this.ARf===E)return;this.ARf=E;A.pe([this,this.EH],this);},BmA:function(E){
if(this.ARi===E)return;this.ARi=E;A.pe([this,this.EH],this);},Bmz:function(E){if(
this.ARh===E)return;this.ARh=E;A.pe([this,this.EH],this);},Bmy:function(E){if(this.
ARg===E)return;this.ARg=E;A.pe([this,this.EH],this);},Bmt:function(E){if(this.ARb===
E)return;this.ARb=E;A.pe([this,this.EH],this);},Bmw:function(E){if(this.ARe===E)
return;this.ARe=E;A.pe([this,this.EH],this);},Bmv:function(E){if(this.ARd===E)return;
this.ARd=E;A.pe([this,this.EH],this);},Bmu:function(E){if(this.ARc===E)return;this.
ARc=E;A.pe([this,this.EH],this);},Bms:function(E){if(this.ARa===E)return;this.ARa=
E;A.pe([this,this.EH],this);},Bmg:function(E){if(this.A6T===E)return;this.A6T=E;
A.pe([this,this.EH],this);},Bmj:function(E){if(this.A6W===E)return;this.A6W=E;A.
pe([this,this.EH],this);},Bmi:function(E){if(this.A6V===E)return;this.A6V=E;A.pe([
this,this.EH],this);},Bmh:function(E){if(this.A6U===E)return;this.A6U=E;A.pe([this
,this.EH],this);},Bmc:function(E){if(this.A6P===E)return;this.A6P=E;A.pe([this,this.
EH],this);},Bmf:function(E){if(this.A6S===E)return;this.A6S=E;A.pe([this,this.EH
],this);},Bme:function(E){if(this.A6R===E)return;this.A6R=E;A.pe([this,this.EH],
this);},Bmd:function(E){if(this.A6Q===E)return;this.A6Q=E;A.pe([this,this.EH],this
);},Bmb:function(E){if(this.A6O===E)return;this.A6O=E;A.pe([this,this.EH],this);
},Bmq:function(E){if(this.AQ$===E)return;this.AQ$=E;A.pe([this,this.EH],this);},
A9Q:function(E){if(this.AvQ===E)return;this.AvQ=E;A.pe([this,this.EH],this);},A9P:
function(E){if(this.AvP===E)return;this.AvP=E;A.pe([this,this.EH],this);},Bl$:function(
E){if(this.A6N===E)return;this.A6N=E;A.pe([this,this.EH],this);},BlL:function(E){
if(this.AOl===E)return;this.AOl=E;A.pe([this,this.EH],this);},BlY:function(E){if(
this.AOq===E)return;this.AOq=E;A.pe([this,this.EH],this);},Bl1:function(E){if(this.
AOt===E)return;this.AOt=E;A.pe([this,this.EH],this);},Bl0:function(E){if(this.AOs===
E)return;this.AOs=E;A.pe([this,this.EH],this);},BlZ:function(E){if(this.AOr===E)
return;this.AOr=E;A.pe([this,this.EH],this);},BlU:function(E){if(this.Au8===E)return;
this.Au8=E;A.pe([this,this.EH],this);},BlX:function(E){if(this.Au$===E)return;this.
Au$=E;A.pe([this,this.EH],this);},BlW:function(E){if(this.Au_===E)return;this.Au_=
E;A.pe([this,this.EH],this);},BlV:function(E){if(this.Au9===E)return;this.Au9=E;
A.pe([this,this.EH],this);},BlQ:function(E){if(this.AOm===E)return;this.AOm=E;A.
pe([this,this.EH],this);},BlT:function(E){if(this.AOp===E)return;this.AOp=E;A.pe([
this,this.EH],this);},BlS:function(E){if(this.AOo===E)return;this.AOo=E;A.pe([this
,this.EH],this);},BlR:function(E){if(this.AOn===E)return;this.AOn=E;A.pe([this,this.
EH],this);},BlM:function(E){if(this.Au4===E)return;this.Au4=E;A.pe([this,this.EH
],this);},BlP:function(E){if(this.Au7===E)return;this.Au7=E;A.pe([this,this.EH],
this);},BlO:function(E){if(this.Au6===E)return;this.Au6=E;A.pe([this,this.EH],this
);},BlN:function(E){if(this.Au5===E)return;this.Au5=E;A.pe([this,this.EH],this);
},AFY:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W1,E))
return;this.W1=E;A.pe([this,this.EH],this);},_Init:function(aArg){C.Aob._Init.call(
this,aArg);this.__proto__=C.AU$;},_Mark:function(D){var B;C.Aob._Mark.call(this,
D);if((B=this.AvQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au5)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aob={
EH:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aob;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADl={LL:null,LK:null,Appearance:null
,M4:null,Aij:0,F0:100,Gm:0,AM:50,BfN:true,H:function(E){var B;if(!!this.Appearance
){var Azl=[E[2]-E[0],E[3]-E[1]];var Oj=Azl;if(Oj[0]<this.Appearance.W1[0])Oj=[this.
Appearance.W1[0],Oj[1]];if(Oj[1]<this.Appearance.W1[1])Oj=[Oj[0],this.Appearance.
W1[1]];var G8=A.abe(Oj,Azl);if(!!G8[0]){var HS=((this.PH&0x4)===0x4);var HT=((this.
PH&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+G8[0]);else if(!HS&&HT)E=[].concat(E[0]-
G8[0],E.slice(1,4));else{E=[].concat(E[0]-((G8[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Oj[0]);}}if(!!G8[1]){var HU=((this.PH&0x10)===0x10);var HR=((this.PH&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+G8[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-G8[1]);else{E=A.abP(E,E[1]-((G8[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oj[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BdR=!!this.Appearance&&!!this.Appearance.AxG;var BdS=!!this.Appearance&&!!this.
Appearance.AxH;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BdR&&!!!this.LK){this.
LK=A._NewObject(A.acg.NO,0);this.J(this.LK,0);}else if(!BdR&&!!this.LK){this.HN(
this.LK);this.LK=null;}if(BdS&&!!!this.LL){this.LL=A._NewObject(A.acg.NO,0);this.
J(this.LL,0);}else if(!BdS&&!!this.LL){this.HN(this.LL);this.LL=null;}if(!!this.
LK){this.LK.Aw(this.Appearance.AxG);this.LK.L(this.Appearance.AVg);this.LK.A9C(0x1B
);this.LK.Ar5(54);if(this.Appearance.AGY<0){this.LK.Zr(true);this.LK.Cv(0);}else{
this.LK.Zr(false);this.LK.Cv(this.Appearance.AGY);}}if(!!this.LL){this.LL.Aw(this.
Appearance.AxH);this.LL.L(0xFFFFFFFF);this.LL.A9C(0x1E);this.LL.Ar5(35);if(this.
Appearance.AGZ<0){this.LL.Zr(true);this.LL.Cv(0);}else{this.LL.Zr(false);this.LL.
Cv(this.Appearance.AGZ);}}var pos=((AE[2]-AE[0])*this.Aij)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LK&&!!this.LK.Al){var s=this.LK.Al.FrameSize;
var x2=AE[2]-AE[0];var En=pos;if(En>x2)En=x2;this.LK.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),En,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LK.A9S([x2-((s[0]
/3)|0),this.LK.Ani[1]]);this.LK.Z(true);}if(!!this.LL&&!!this.LL.Al){var s=this.
LL.Al.FrameSize;var x2=AE[2]-AE[0];var En=pos;if(En<0)En=0;this.LL.H([En,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LL.A9S([x2-((s[0]/3)|0),this.LL.Ani[1]]);this.LL.Z(true);}},AKE:function(G){var AtX=
this.Aij;var ALa=0;if(!!this.Appearance)ALa=this.Appearance.AUO;if(this.BfN&&(this.
F0!==this.Gm)){this.Aij=-this.Gm/(this.F0-this.Gm);AtX=this.Aij;this.BfN=false;}
if(this.F0!==this.Gm)AtX=(this.Ue()-this.Gm)/(this.F0-this.Gm);if(AtX===this.Aij
)return;this.M4.Ar(false);if(ALa<=0){this.Aij=AtX;this.An();return;}var AKL=AtX-
this.Aij;if(AKL<0)AKL=-AKL;this.M4.WD(14);this.M4.Cw=this.Aij;this.M4.B2=AtX;this.
M4.Fm((10+((ALa/2)|0))+((((ALa*AKL)|0)/2)|0));this.M4.Ar(true);},Bz4:function(G){
},Bz7:function(G){this.Aij=this.M4.A4;this.An();},ApJ:function(G){A.pe([this,this.
AKE],this);if(!!this.Appearance)this.H(this.M);this.An();},EV:function(E){if(this.
F0===E)return;this.F0=E;A.pe([this,this.AKE],this);},F_:function(E){if(this.Gm===
E)return;this.Gm=E;A.pe([this,this.AKE],this);},Ue:function(){var E=this.AM;if(this.
Gm>this.F0){if(E<this.F0)E=this.F0;if(E>this.Gm)E=this.Gm;}else{if(E<this.Gm)E=this.
Gm;if(E>this.F0)E=this.F0;}return E;},By:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKE],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApJ],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApJ],E,0);A.pe([this,this.ApJ],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M4._Init.call(this.M4={I:this},0);this.__proto__=
C.ADl;this.H(Cd);this.M4.WD(14);this.M4.HM(1);this.M4.Sx=[this,this.Bz4];this.M4.
Ahf=[this,this.Bz7];},_Done:function(){this.__proto__=A.Core.P;this.M4._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M4.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M4)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UG={Qv:null
,Va:null,Appearance:null,Q:null,Bo:null,Dl:null,CR:null,ADZ:A.jV,ADY:A.jV,A3d:0,
BAU:0,VI:false,H:function(E){var B;if(!!this.Appearance){var Azl=[E[2]-E[0],E[3]-
E[1]];var Oj=Azl;if(Oj[0]<this.Appearance.W1[0])Oj=[this.Appearance.W1[0],Oj[1]];
if(Oj[1]<this.Appearance.W1[1])Oj=[Oj[0],this.Appearance.W1[1]];var G8=A.abe(Oj,
Azl);if(!!G8[0]){var HS=((this.PH&0x4)===0x4);var HT=((this.PH&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+G8[0]);else if(!HS&&HT)E=[].concat(E[0]-G8[0],E.slice(1,4));else{
E=[].concat(E[0]-((G8[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Oj[0]);}}if(!!G8[1]){
var HU=((this.PH&0x10)===0x10);var HR=((this.PH&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+G8[1]);else if(!HU&&HR)E=A.abP(E,E[1]-G8[1]);else{E=A.abP(E,E[
1]-((G8[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oj[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BdQ=!!this.Appearance&&(((((((
!!this.Appearance.Au5||!!this.Appearance.Au6)||!!this.Appearance.Au7)||!!this.Appearance.
Au4)||!!this.Appearance.Au9)||!!this.Appearance.Au_)||!!this.Appearance.Au$)||!!
this.Appearance.Au8);var BdT=!!this.Appearance&&((!!this.ADY&&!!this.Appearance.
AvP)||(!!this.ADZ&&!!this.Appearance.AvQ));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af2;if(BdQ&&!!!this.Va){this.Va=A._NewObject(A.acg.NO,0);this.J(this.Va,
0);}else if(!BdQ&&!!this.Va){this.HN(this.Va);this.Va=null;}if(BdT&&!!!this.Qv){
this.Qv=A._NewObject(A.acg.Text,0);this.J(this.Qv,0);this.Qv.BlE(true);}else if(
!BdT&&!!this.Qv){this.HN(this.Qv);this.Qv=null;}if(!((Ae&0x10)===0x10))Af2=0x44;
else if(((this.CR.Down&&this.CR.YG)||this.Dl.Down)||this.Bo.Bw)Af2=0x41;else if(((
Ae&0x40)===0x40))Af2=0x46;else Af2=0x45;if(!this.VI)Af2=String.fromCharCode(Af2).
toLowerCase().charCodeAt(0)||0;this.BAU=Af2;if(!!this.Va){var bitmap;var Aav;var
EW=this.Appearance.AOl;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af2){case 0x44:{bitmap=
this.Appearance.Au_;Aav=this.Appearance.AOs;}break;case 0x41:{bitmap=this.Appearance.
Au8;Aav=this.Appearance.AOq;}break;case 0x46:{bitmap=this.Appearance.Au$;Aav=this.
Appearance.AOt;}break;case 0x45:{bitmap=this.Appearance.Au9;Aav=this.Appearance.
AOr;}break;case 0x64:{bitmap=this.Appearance.Au6;Aav=this.Appearance.AOo;}break;
case 0x61:{bitmap=this.Appearance.Au4;Aav=this.Appearance.AOm;}break;case 0x66:{
bitmap=this.Appearance.Au7;Aav=this.Appearance.AOp;}break;default:{bitmap=this.Appearance.
Au5;Aav=this.Appearance.AOn;}}this.Va.Zr(Aav<0);this.Va.L(0xFFFFFFFF);if(Aav<0)Aav=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BY);else if(!HS&&HT)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BK=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BK);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BK
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BK/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BK);}}this.Va.Cv(Aav);this.Va.Aw(bitmap);this.Va.H(Az);this.Va.Ar5(16
);}if(!!this.Qv){var Aih;var font;var A2i;switch(Af2){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvQ;A2i=this.ADZ;}break;default:{font=this.Appearance.
AvP;A2i=this.ADY;}}switch(Af2){case 0x44:Aih=this.Appearance.ARh;break;case 0x41:
Aih=this.Appearance.ARf;break;case 0x46:Aih=this.Appearance.ARi;break;case 0x45:
Aih=this.Appearance.ARg;break;case 0x64:Aih=this.Appearance.ARd;break;case 0x61:
Aih=this.Appearance.ARb;break;case 0x66:Aih=this.Appearance.ARe;break;default:Aih=
this.Appearance.ARc;}this.Qv.H([AE[0]+this.Appearance.ARa,AE[1],AE[2],AE[3]]);this.
Qv.A6(this.Appearance.AQ$);this.Qv.S(font);this.Qv.R(A2i);this.Qv.L(Aih);this.Qv.
KR(true);this.Qv.BlD(true);this.Qv.Ar5(92);}this.ExtendClipping(0,0,0,0);{var Auq=
AE;this.CR.DM(Auq.slice(0,2));this.CR.Kr(Auq.slice(2,4));this.CR.DC([Auq[2],Auq[
1]]);this.CR.JQ([Auq[0],Auq[3]]);}},ApJ:function(G){var Bd2=this.Dl.Filter;this.
Dl.Filter=149;if(!Bd2&&!!this.Dl.Filter)this.Cy(0x4,0x0);if(!!Bd2&&!this.Dl.Filter
)this.Cy(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.An();},Kc:function(G){
var F;if(!!this.Q)this.ArK((F=this.Q,F[1].call(F[0])));},Qn:function(G){var F;this.
An();this.ArK(!this.VI);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VI));A.abo(this.
Q,0);}},BAq:function(G){var F;var ApV=0;if(!!this.Appearance)ApV=50;this.CR.Ar(true
);this.An();if(((this.Dl.Bs-this.A3d)|0)>=ApV){this.ArK(!this.VI);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VI));A.abo(this.Q,0);}}else{this.Bo.Wy(ApV-((this.Dl.
Bs-this.A3d)|0));this.Bo.Ar(true);}},AiO:function(G){var F;this.CR.Ar(false);this.
An();if(this.Bo.Bw){this.Bo.Ar(false);this.ArK(!this.VI);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VI));A.abo(this.Q,0);}}this.A3d=this.Dl.Bs;},Bz_:function(G){
this.An();},Bz6:function(G){this.An();},AAy:function(G){var F;var ApV=0;if(!!this.
Appearance)ApV=50;this.Dl.Bw=true;if(!this.CR.YG)return;if(this.CR.NF)return;if(
this.CR.Jp>=ApV){this.ArK(!this.VI);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VI
));A.abo(this.Q,0);}}else{this.Bo.Wy(ApV-this.CR.Jp);this.Bo.Ar(true);}},AAx:function(
G){var F;this.Dl.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArK(!this.VI);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VI));A.abo(this.Q,0);}}},As:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kc],E,0);if(!!E)this.Kc(this);},ArK:function(E){if(this.VI===
E)return;this.VI=E;this.An();},A9O:function(E){if((E===this.ADY)&&(E===this.ADZ)
)return;this.ADY=E;this.ADZ=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApJ],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApJ],E,0);A.pe([this,this.ApJ],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BM._Init.call(this.Dl={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UG;this.H(BF);this.Bo.PO(0);this.Bo.Wy(50);this.Dl.Filter=149;this.CR.
JQ(E4);this.CR.Kr(Hm);this.CR.DC(IQ);this.CR.DM(Ip);this.CR.BmX(16);this.CR.AFn(
100);this.J(this.CR,0);this.Bo.Mx=[this,this.Qn];this.Dl.Ll=[this,this.BAq];this.
Dl.BN=[this,this.AiO];this.CR.AEE=[this,this.Bz_];this.CR.Av2=[this,this.Bz6];this.
CR.Ll=[this,this.AAy];this.CR.BN=[this,this.AAx];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dl._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dl._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Va)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADm.__proto__=C.Aob;C.AU$.__proto__=C.Aob;C.ADl.__proto__=A.
Core.P;C.UG.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad7[0]._this)&&(B._cycle!=D))B._Done(C.Ad7[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */