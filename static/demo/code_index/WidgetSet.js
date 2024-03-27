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
var Cc=[0,0,200,50];var BD=[0,0,150,50];var E6=[0,50];var Hq=[150,50];var IT=[150
,0];var Is=[0,0];
C.Ad9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADl={AxK:null,AxJ:null,AUH:500,AGW:-1,AU$:0xFFFFFFFF,AGV:-1,W0:A.wf,Bni:
function(E){if(this.AUH===E)return;this.AUH=E;A.pe([this,this.EG],this);},A_n:function(
E){if(this.AGW===E)return;this.AGW=E;A.pe([this,this.EG],this);},A_m:function(E){
if(this.AxK===E)return;this.AxK=E;A.pe([this,this.EG],this);},A_l:function(E){if(
this.AU$===E)return;this.AU$=E;A.pe([this,this.EG],this);},A_k:function(E){if(this.
AGV===E)return;this.AGV=E;A.pe([this,this.EG],this);},A_j:function(E){if(this.AxJ===
E)return;this.AxJ=E;A.pe([this,this.EG],this);},AFV:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))return;this.W0=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.An_._Init.call(this,aArg);this.__proto__=C.ADl;
},_Mark:function(D){var B;C.An_._Mark.call(this,D);if((B=this.AxK)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxJ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU4={AvR:null,AvQ:null,Au8:null,Au$:null
,Au_:null,Au9:null,Au4:null,Au7:null,Au6:null,Au5:null,ARa:0xFF000000,ARd:0xFF000000
,ARc:0xFF000000,ARb:0xFF000000,AQ8:0xFF000000,AQ$:0xFF000000,AQ_:0xFF000000,AQ9:
0xFF000000,AQ7:0,A6X:0xFFFFFFFF,A60:0xFFFFFFFF,A6Z:0xFFFFFFFF,A6Y:0xFFFFFFFF,A6T:
0xFFFFFFFF,A6W:0xFFFFFFFF,A6V:0xFFFFFFFF,A6U:0xFFFFFFFF,A6S:0,AQ6:0x12,A6R:0x12,
AOg:0x3F,AOl:-1,AOo:-1,AOn:-1,AOm:-1,AOh:-1,AOk:-1,AOj:-1,AOi:-1,W0:A.wf,BmJ:function(
E){if(this.ARa===E)return;this.ARa=E;A.pe([this,this.EG],this);},BmM:function(E){
if(this.ARd===E)return;this.ARd=E;A.pe([this,this.EG],this);},BmL:function(E){if(
this.ARc===E)return;this.ARc=E;A.pe([this,this.EG],this);},BmK:function(E){if(this.
ARb===E)return;this.ARb=E;A.pe([this,this.EG],this);},BmF:function(E){if(this.AQ8===
E)return;this.AQ8=E;A.pe([this,this.EG],this);},BmI:function(E){if(this.AQ$===E)
return;this.AQ$=E;A.pe([this,this.EG],this);},BmH:function(E){if(this.AQ_===E)return;
this.AQ_=E;A.pe([this,this.EG],this);},BmG:function(E){if(this.AQ9===E)return;this.
AQ9=E;A.pe([this,this.EG],this);},BmE:function(E){if(this.AQ7===E)return;this.AQ7=
E;A.pe([this,this.EG],this);},Bms:function(E){if(this.A6X===E)return;this.A6X=E;
A.pe([this,this.EG],this);},Bmv:function(E){if(this.A60===E)return;this.A60=E;A.
pe([this,this.EG],this);},Bmu:function(E){if(this.A6Z===E)return;this.A6Z=E;A.pe([
this,this.EG],this);},Bmt:function(E){if(this.A6Y===E)return;this.A6Y=E;A.pe([this
,this.EG],this);},Bmo:function(E){if(this.A6T===E)return;this.A6T=E;A.pe([this,this.
EG],this);},Bmr:function(E){if(this.A6W===E)return;this.A6W=E;A.pe([this,this.EG
],this);},Bmq:function(E){if(this.A6V===E)return;this.A6V=E;A.pe([this,this.EG],
this);},Bmp:function(E){if(this.A6U===E)return;this.A6U=E;A.pe([this,this.EG],this
);},Bmn:function(E){if(this.A6S===E)return;this.A6S=E;A.pe([this,this.EG],this);
},BmC:function(E){if(this.AQ6===E)return;this.AQ6=E;A.pe([this,this.EG],this);},
A9T:function(E){if(this.AvR===E)return;this.AvR=E;A.pe([this,this.EG],this);},A9S:
function(E){if(this.AvQ===E)return;this.AvQ=E;A.pe([this,this.EG],this);},Bml:function(
E){if(this.A6R===E)return;this.A6R=E;A.pe([this,this.EG],this);},BlX:function(E){
if(this.AOg===E)return;this.AOg=E;A.pe([this,this.EG],this);},Bl_:function(E){if(
this.AOl===E)return;this.AOl=E;A.pe([this,this.EG],this);},Bmb:function(E){if(this.
AOo===E)return;this.AOo=E;A.pe([this,this.EG],this);},Bma:function(E){if(this.AOn===
E)return;this.AOn=E;A.pe([this,this.EG],this);},Bl$:function(E){if(this.AOm===E)
return;this.AOm=E;A.pe([this,this.EG],this);},Bl6:function(E){if(this.Au8===E)return;
this.Au8=E;A.pe([this,this.EG],this);},Bl9:function(E){if(this.Au$===E)return;this.
Au$=E;A.pe([this,this.EG],this);},Bl8:function(E){if(this.Au_===E)return;this.Au_=
E;A.pe([this,this.EG],this);},Bl7:function(E){if(this.Au9===E)return;this.Au9=E;
A.pe([this,this.EG],this);},Bl2:function(E){if(this.AOh===E)return;this.AOh=E;A.
pe([this,this.EG],this);},Bl5:function(E){if(this.AOk===E)return;this.AOk=E;A.pe([
this,this.EG],this);},Bl4:function(E){if(this.AOj===E)return;this.AOj=E;A.pe([this
,this.EG],this);},Bl3:function(E){if(this.AOi===E)return;this.AOi=E;A.pe([this,this.
EG],this);},BlY:function(E){if(this.Au4===E)return;this.Au4=E;A.pe([this,this.EG
],this);},Bl1:function(E){if(this.Au7===E)return;this.Au7=E;A.pe([this,this.EG],
this);},Bl0:function(E){if(this.Au6===E)return;this.Au6=E;A.pe([this,this.EG],this
);},BlZ:function(E){if(this.Au5===E)return;this.Au5=E;A.pe([this,this.EG],this);
},AFV:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))
return;this.W0=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.An_._Init.call(
this,aArg);this.__proto__=C.AU4;},_Mark:function(D){var B;C.An_._Mark.call(this,
D);if((B=this.AvR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au_)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au5)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.An_={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.An_;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADk={LL:null,LK:null,Appearance:null
,M5:null,Ail:0,F_:100,Go:0,AM:50,BfX:true,H:function(E){var B;if(!!this.Appearance
){var Azn=[E[2]-E[0],E[3]-E[1]];var Om=Azn;if(Om[0]<this.Appearance.W0[0])Om=[this.
Appearance.W0[0],Om[1]];if(Om[1]<this.Appearance.W0[1])Om=[Om[0],this.Appearance.
W0[1]];var Hb=A.abe(Om,Azn);if(!!Hb[0]){var HS=((this.PL&0x4)===0x4);var HT=((this.
PL&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+Hb[0]);else if(!HS&&HT)E=[].concat(E[0]-
Hb[0],E.slice(1,4));else{E=[].concat(E[0]-((Hb[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Om[0]);}}if(!!Hb[1]){var HU=((this.PL&0x10)===0x10);var HR=((this.PL&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+Hb[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-Hb[1]);else{E=A.abP(E,E[1]-((Hb[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Om[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var Bd2=!!this.Appearance&&!!this.Appearance.AxJ;var Bd3=!!this.Appearance&&!!this.
Appearance.AxK;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Bd2&&!!!this.LK){this.
LK=A._NewObject(A.acg.NP,0);this.J(this.LK,0);}else if(!Bd2&&!!this.LK){this.HN(
this.LK);this.LK=null;}if(Bd3&&!!!this.LL){this.LL=A._NewObject(A.acg.NP,0);this.
J(this.LL,0);}else if(!Bd3&&!!this.LL){this.HN(this.LL);this.LL=null;}if(!!this.
LK){this.LK.Ax(this.Appearance.AxJ);this.LK.L(this.Appearance.AU$);this.LK.A9F(0x1B
);this.LK.Ar1(54);if(this.Appearance.AGV<0){this.LK.Zm(true);this.LK.Cv(0);}else{
this.LK.Zm(false);this.LK.Cv(this.Appearance.AGV);}}if(!!this.LL){this.LL.Ax(this.
Appearance.AxK);this.LL.L(0xFFFFFFFF);this.LL.A9F(0x1E);this.LL.Ar1(35);if(this.
Appearance.AGW<0){this.LL.Zm(true);this.LL.Cv(0);}else{this.LL.Zm(false);this.LL.
Cv(this.Appearance.AGW);}}var pos=((AE[2]-AE[0])*this.Ail)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LK&&!!this.LK.Al){var s=this.LK.Al.FrameSize;
var x2=AE[2]-AE[0];var Eo=pos;if(Eo>x2)Eo=x2;this.LK.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eo,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LK.A9V([x2-((s[0]
/3)|0),this.LK.Anh[1]]);this.LK.Z(true);}if(!!this.LL&&!!this.LL.Al){var s=this.
LL.Al.FrameSize;var x2=AE[2]-AE[0];var Eo=pos;if(Eo<0)Eo=0;this.LL.H([Eo,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LL.A9V([x2-((s[0]/3)|0),this.LL.Anh[1]]);this.LL.Z(true);}},AKy:function(G){var AtX=
this.Ail;var AK6=0;if(!!this.Appearance)AK6=this.Appearance.AUH;if(this.BfX&&(this.
F_!==this.Go)){this.Ail=-this.Go/(this.F_-this.Go);AtX=this.Ail;this.BfX=false;}
if(this.F_!==this.Go)AtX=(this.Ug()-this.Go)/(this.F_-this.Go);if(AtX===this.Ail
)return;this.M5.Ar(false);if(AK6<=0){this.Ail=AtX;this.Am();return;}var AKF=AtX-
this.Ail;if(AKF<0)AKF=-AKF;this.M5.WC(14);this.M5.Cw=this.Ail;this.M5.B1=AtX;this.
M5.Fp((10+((AK6/2)|0))+((((AK6*AKF)|0)/2)|0));this.M5.Ar(true);},BAf:function(G){
},BAi:function(G){this.Ail=this.M5.A4;this.Am();},ApF:function(G){A.pe([this,this.
AKy],this);if(!!this.Appearance)this.H(this.M);this.Am();},EU:function(E){if(this.
F_===E)return;this.F_=E;A.pe([this,this.AKy],this);},F$:function(E){if(this.Go===
E)return;this.Go=E;A.pe([this,this.AKy],this);},Ug:function(){var E=this.AM;if(this.
Go>this.F_){if(E<this.F_)E=this.F_;if(E>this.Go)E=this.Go;}else{if(E<this.Go)E=this.
Go;if(E>this.F_)E=this.F_;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKy],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApF],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApF],E,0);A.pe([this,this.ApF],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ADk;this.H(Cc);this.M5.WC(14);this.M5.HM(1);this.M5.SA=[this,this.BAf];this.M5.
Ahk=[this,this.BAi];},_Done:function(){this.__proto__=A.Core.P;this.M5._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UH={Qz:null
,Vc:null,Appearance:null,Q:null,Bo:null,Dn:null,CR:null,ADY:A.jV,ADX:A.jV,A3g:0,
BA_:0,VK:false,H:function(E){var B;if(!!this.Appearance){var Azn=[E[2]-E[0],E[3]-
E[1]];var Om=Azn;if(Om[0]<this.Appearance.W0[0])Om=[this.Appearance.W0[0],Om[1]];
if(Om[1]<this.Appearance.W0[1])Om=[Om[0],this.Appearance.W0[1]];var Hb=A.abe(Om,
Azn);if(!!Hb[0]){var HS=((this.PL&0x4)===0x4);var HT=((this.PL&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+Hb[0]);else if(!HS&&HT)E=[].concat(E[0]-Hb[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hb[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Om[0]);}}if(!!Hb[1]){
var HU=((this.PL&0x10)===0x10);var HR=((this.PL&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+Hb[1]);else if(!HU&&HR)E=A.abP(E,E[1]-Hb[1]);else{E=A.abP(E,E[
1]-((Hb[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Om[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Bd1=!!this.Appearance&&(((((((
!!this.Appearance.Au5||!!this.Appearance.Au6)||!!this.Appearance.Au7)||!!this.Appearance.
Au4)||!!this.Appearance.Au9)||!!this.Appearance.Au_)||!!this.Appearance.Au$)||!!
this.Appearance.Au8);var Bd4=!!this.Appearance&&((!!this.ADX&&!!this.Appearance.
AvQ)||(!!this.ADY&&!!this.Appearance.AvR));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af3;if(Bd1&&!!!this.Vc){this.Vc=A._NewObject(A.acg.NP,0);this.J(this.Vc,
0);}else if(!Bd1&&!!this.Vc){this.HN(this.Vc);this.Vc=null;}if(Bd4&&!!!this.Qz){
this.Qz=A._NewObject(A.acg.Text,0);this.J(this.Qz,0);this.Qz.BlQ(true);}else if(
!Bd4&&!!this.Qz){this.HN(this.Qz);this.Qz=null;}if(!((Ae&0x10)===0x10))Af3=0x44;
else if(((this.CR.Down&&this.CR.YC)||this.Dn.Down)||this.Bo.Bw)Af3=0x41;else if(((
Ae&0x40)===0x40))Af3=0x46;else Af3=0x45;if(!this.VK)Af3=String.fromCharCode(Af3).
toLowerCase().charCodeAt(0)||0;this.BA_=Af3;if(!!this.Vc){var bitmap;var Aar;var
EW=this.Appearance.AOg;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af3){case 0x44:{bitmap=
this.Appearance.Au_;Aar=this.Appearance.AOn;}break;case 0x41:{bitmap=this.Appearance.
Au8;Aar=this.Appearance.AOl;}break;case 0x46:{bitmap=this.Appearance.Au$;Aar=this.
Appearance.AOo;}break;case 0x45:{bitmap=this.Appearance.Au9;Aar=this.Appearance.
AOm;}break;case 0x64:{bitmap=this.Appearance.Au6;Aar=this.Appearance.AOj;}break;
case 0x61:{bitmap=this.Appearance.Au4;Aar=this.Appearance.AOh;}break;case 0x66:{
bitmap=this.Appearance.Au7;Aar=this.Appearance.AOk;}break;default:{bitmap=this.Appearance.
Au5;Aar=this.Appearance.AOi;}}this.Vc.Zm(Aar<0);this.Vc.L(0xFFFFFFFF);if(Aar<0)Aar=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BX=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BX);else if(!HS&&HT)Az=[
].concat(Az[2]-BX,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BX/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BX);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BI=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BI);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BI
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BI/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BI);}}this.Vc.Cv(Aar);this.Vc.Ax(bitmap);this.Vc.H(Az);this.Vc.Ar1(16
);}if(!!this.Qz){var Aik;var font;var A2j;switch(Af3){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvR;A2j=this.ADY;}break;default:{font=this.Appearance.
AvQ;A2j=this.ADX;}}switch(Af3){case 0x44:Aik=this.Appearance.ARc;break;case 0x41:
Aik=this.Appearance.ARa;break;case 0x46:Aik=this.Appearance.ARd;break;case 0x45:
Aik=this.Appearance.ARb;break;case 0x64:Aik=this.Appearance.AQ_;break;case 0x61:
Aik=this.Appearance.AQ8;break;case 0x66:Aik=this.Appearance.AQ$;break;default:Aik=
this.Appearance.AQ9;}this.Qz.H([AE[0]+this.Appearance.AQ7,AE[1],AE[2],AE[3]]);this.
Qz.A6(this.Appearance.AQ6);this.Qz.S(font);this.Qz.R(A2j);this.Qz.L(Aik);this.Qz.
KR(true);this.Qz.BlP(true);this.Qz.Ar1(92);}this.ExtendClipping(0,0,0,0);{var Auq=
AE;this.CR.DM(Auq.slice(0,2));this.CR.Ku(Auq.slice(2,4));this.CR.DC([Auq[2],Auq[
1]]);this.CR.JT([Auq[0],Auq[3]]);}},ApF:function(G){var Beb=this.Dn.Filter;this.
Dn.Filter=149;if(!Beb&&!!this.Dn.Filter)this.Cr(0x4,0x0);if(!!Beb&&!this.Dn.Filter
)this.Cr(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Kf:function(G){
var F;if(!!this.Q)this.ArF((F=this.Q,F[1].call(F[0])));},Qr:function(G){var F;this.
Am();this.ArF(!this.VK);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VK));A.abo(this.
Q,0);}},BAF:function(G){var F;var ApQ=0;if(!!this.Appearance)ApQ=50;this.CR.Ar(true
);this.Am();if(((this.Dn.Bs-this.A3g)|0)>=ApQ){this.ArF(!this.VK);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VK));A.abo(this.Q,0);}}else{this.Bo.Wz(ApQ-((this.Dn.
Bs-this.A3g)|0));this.Bo.Ar(true);}},AiO:function(G){var F;this.CR.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArF(!this.VK);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VK));A.abo(this.Q,0);}}this.A3g=this.Dn.Bs;},BAl:function(G){
this.Am();},BAh:function(G){this.Am();},AAz:function(G){var F;var ApQ=0;if(!!this.
Appearance)ApQ=50;this.Dn.Bw=true;if(!this.CR.YC)return;if(this.CR.NF)return;if(
this.CR.Js>=ApQ){this.ArF(!this.VK);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VK
));A.abo(this.Q,0);}}else{this.Bo.Wz(ApQ-this.CR.Js);this.Bo.Ar(true);}},AAy:function(
G){var F;this.Dn.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArF(!this.VK);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VK));A.abo(this.Q,0);}}},At:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kf],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kf],E,0);if(!!E)this.Kf(this);},ArF:function(E){if(this.VK===
E)return;this.VK=E;this.Am();},A9R:function(E){if((E===this.ADX)&&(E===this.ADY)
)return;this.ADX=E;this.ADY=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApF],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApF],E,0);A.pe([this,this.ApF],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BK._Init.call(this.Dn={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UH;this.H(BD);this.Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=149;this.CR.
JT(E6);this.CR.Ku(Hq);this.CR.DC(IT);this.CR.DM(Is);this.CR.Bm9(16);this.CR.AFl(
100);this.J(this.CR,0);this.Bo.Mz=[this,this.Qr];this.Dn.Ln=[this,this.BAF];this.
Dn.BL=[this,this.AiO];this.CR.AED=[this,this.BAl];this.CR.Av4=[this,this.BAh];this.
CR.Ln=[this,this.AAz];this.CR.BL=[this,this.AAy];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dn._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vc)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADl.__proto__=C.An_;C.AU4.__proto__=C.An_;C.ADk.__proto__=A.
Core.P;C.UH.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad9[0]._this)&&(B._cycle!=D))B._Done(C.Ad9[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */