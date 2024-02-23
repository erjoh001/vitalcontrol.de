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
);if(index.acq)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acq=(function(){var A=index;var C={};
var Ca=[0,0,200,50];var BD=[0,0,150,50];var EW=[0,50];var Hh=[150,50];var I8=[150
,0];var IJ=[0,0];
C.AdK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ACI={Aw8:null,Aw7:null,ATT:500,AGd:-1,AUl:0xFFFFFFFF,AGc:-1,WF:A.wf,BlU:
function(E){if(this.ATT===E)return;this.ATT=E;A.pe([this,this.Ex],this);},A9n:function(
E){if(this.AGd===E)return;this.AGd=E;A.pe([this,this.Ex],this);},A9m:function(E){
if(this.Aw8===E)return;this.Aw8=E;A.pe([this,this.Ex],this);},A9l:function(E){if(
this.AUl===E)return;this.AUl=E;A.pe([this,this.Ex],this);},A9k:function(E){if(this.
AGc===E)return;this.AGc=E;A.pe([this,this.Ex],this);},A9j:function(E){if(this.Aw7===
E)return;this.Aw7=E;A.pe([this,this.Ex],this);},AFe:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WF,E))return;this.WF=E;A.pe([this,this.Ex
],this);},_Init:function(aArg){C.AnN._Init.call(this,aArg);this.__proto__=C.ACI;
},_Mark:function(D){var B;C.AnN._Mark.call(this,D);if((B=this.Aw8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Aw7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AUe={Avj:null,Avi:null,AuC:null,AuF:null
,AuE:null,AuD:null,Auy:null,AuB:null,AuA:null,Auz:null,AQu:0xFF000000,AQx:0xFF000000
,AQw:0xFF000000,AQv:0xFF000000,AQq:0xFF000000,AQt:0xFF000000,AQs:0xFF000000,AQr:
0xFF000000,AQp:0,A59:0xFFFFFFFF,A6a:0xFFFFFFFF,A5$:0xFFFFFFFF,A5_:0xFFFFFFFF,A55:
0xFFFFFFFF,A58:0xFFFFFFFF,A57:0xFFFFFFFF,A56:0xFFFFFFFF,A54:0,AQo:0x12,A53:0x12,
ANz:0x3F,ANE:-1,ANH:-1,ANG:-1,ANF:-1,ANA:-1,AND:-1,ANC:-1,ANB:-1,WF:A.wf,Blm:function(
E){if(this.AQu===E)return;this.AQu=E;A.pe([this,this.Ex],this);},Blp:function(E){
if(this.AQx===E)return;this.AQx=E;A.pe([this,this.Ex],this);},Blo:function(E){if(
this.AQw===E)return;this.AQw=E;A.pe([this,this.Ex],this);},Bln:function(E){if(this.
AQv===E)return;this.AQv=E;A.pe([this,this.Ex],this);},Bli:function(E){if(this.AQq===
E)return;this.AQq=E;A.pe([this,this.Ex],this);},Bll:function(E){if(this.AQt===E)
return;this.AQt=E;A.pe([this,this.Ex],this);},Blk:function(E){if(this.AQs===E)return;
this.AQs=E;A.pe([this,this.Ex],this);},Blj:function(E){if(this.AQr===E)return;this.
AQr=E;A.pe([this,this.Ex],this);},Blh:function(E){if(this.AQp===E)return;this.AQp=
E;A.pe([this,this.Ex],this);},Bk9:function(E){if(this.A59===E)return;this.A59=E;
A.pe([this,this.Ex],this);},Bla:function(E){if(this.A6a===E)return;this.A6a=E;A.
pe([this,this.Ex],this);},Bk$:function(E){if(this.A5$===E)return;this.A5$=E;A.pe([
this,this.Ex],this);},Bk_:function(E){if(this.A5_===E)return;this.A5_=E;A.pe([this
,this.Ex],this);},Bk5:function(E){if(this.A55===E)return;this.A55=E;A.pe([this,this.
Ex],this);},Bk8:function(E){if(this.A58===E)return;this.A58=E;A.pe([this,this.Ex
],this);},Bk7:function(E){if(this.A57===E)return;this.A57=E;A.pe([this,this.Ex],
this);},Bk6:function(E){if(this.A56===E)return;this.A56=E;A.pe([this,this.Ex],this
);},Bk4:function(E){if(this.A54===E)return;this.A54=E;A.pe([this,this.Ex],this);
},Blf:function(E){if(this.AQo===E)return;this.AQo=E;A.pe([this,this.Ex],this);},
A8U:function(E){if(this.Avj===E)return;this.Avj=E;A.pe([this,this.Ex],this);},A8T:
function(E){if(this.Avi===E)return;this.Avi=E;A.pe([this,this.Ex],this);},Bk2:function(
E){if(this.A53===E)return;this.A53=E;A.pe([this,this.Ex],this);},BkC:function(E){
if(this.ANz===E)return;this.ANz=E;A.pe([this,this.Ex],this);},BkP:function(E){if(
this.ANE===E)return;this.ANE=E;A.pe([this,this.Ex],this);},BkS:function(E){if(this.
ANH===E)return;this.ANH=E;A.pe([this,this.Ex],this);},BkR:function(E){if(this.ANG===
E)return;this.ANG=E;A.pe([this,this.Ex],this);},BkQ:function(E){if(this.ANF===E)
return;this.ANF=E;A.pe([this,this.Ex],this);},BkL:function(E){if(this.AuC===E)return;
this.AuC=E;A.pe([this,this.Ex],this);},BkO:function(E){if(this.AuF===E)return;this.
AuF=E;A.pe([this,this.Ex],this);},BkN:function(E){if(this.AuE===E)return;this.AuE=
E;A.pe([this,this.Ex],this);},BkM:function(E){if(this.AuD===E)return;this.AuD=E;
A.pe([this,this.Ex],this);},BkH:function(E){if(this.ANA===E)return;this.ANA=E;A.
pe([this,this.Ex],this);},BkK:function(E){if(this.AND===E)return;this.AND=E;A.pe([
this,this.Ex],this);},BkJ:function(E){if(this.ANC===E)return;this.ANC=E;A.pe([this
,this.Ex],this);},BkI:function(E){if(this.ANB===E)return;this.ANB=E;A.pe([this,this.
Ex],this);},BkD:function(E){if(this.Auy===E)return;this.Auy=E;A.pe([this,this.Ex
],this);},BkG:function(E){if(this.AuB===E)return;this.AuB=E;A.pe([this,this.Ex],
this);},BkF:function(E){if(this.AuA===E)return;this.AuA=E;A.pe([this,this.Ex],this
);},BkE:function(E){if(this.Auz===E)return;this.Auz=E;A.pe([this,this.Ex],this);
},AFe:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WF,E))
return;this.WF=E;A.pe([this,this.Ex],this);},_Init:function(aArg){C.AnN._Init.call(
this,aArg);this.__proto__=C.AUe;},_Mark:function(D){var B;C.AnN._Mark.call(this,
D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuE)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AuD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuB)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AuA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auz)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.AnN={
Ex:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.AnN;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ACH={LE:null,LD:null,Appearance:null
,M4:null,Ah0:0,FS:100,Ge:0,AK:50,BeD:true,H:function(E){var B;if(!!this.Appearance
){var AyL=[E[2]-E[0],E[3]-E[1]];var Of=AyL;if(Of[0]<this.Appearance.WF[0])Of=[this.
Appearance.WF[0],Of[1]];if(Of[1]<this.Appearance.WF[1])Of=[Of[0],this.Appearance.
WF[1]];var G3=A.abe(Of,AyL);if(!!G3[0]){var HN=((this.PC&0x4)===0x4);var HO=((this.
PC&0x8)===0x8);if(HN&&!HO)E=A.abN(E,E[2]+G3[0]);else if(!HN&&HO)E=[].concat(E[0]-
G3[0],E.slice(1,4));else{E=[].concat(E[0]-((G3[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Of[0]);}}if(!!G3[1]){var HP=((this.PC&0x10)===0x10);var HM=((this.PC&0x20)===
0x20);if(HP&&!HM)E=[].concat(E.slice(0,3),E[3]+G3[1]);else if(!HP&&HM)E=A.abP(E,
E[1]-G3[1]);else{E=A.abP(E,E[1]-((G3[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Of[
1]);}}}A.Core.O.H.call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);
var BcP=!!this.Appearance&&!!this.Appearance.Aw7;var BcQ=!!this.Appearance&&!!this.
Appearance.Aw8;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BcP&&!!!this.LD){this.
LD=A._NewObject(A.acg.NJ,0);this.J(this.LD,0);}else if(!BcP&&!!this.LD){this.HI(
this.LD);this.LD=null;}if(BcQ&&!!!this.LE){this.LE=A._NewObject(A.acg.NJ,0);this.
J(this.LE,0);}else if(!BcQ&&!!this.LE){this.HI(this.LE);this.LE=null;}if(!!this.
LD){this.LD.Ay(this.Appearance.Aw7);this.LD.L(this.Appearance.AUl);this.LD.A8G(0x1B
);this.LD.Arp(54);if(this.Appearance.AGc<0){this.LD.Y5(true);this.LD.Cv(0);}else{
this.LD.Y5(false);this.LD.Cv(this.Appearance.AGc);}}if(!!this.LE){this.LE.Ay(this.
Appearance.Aw8);this.LE.L(0xFFFFFFFF);this.LE.A8G(0x1E);this.LE.Arp(35);if(this.
Appearance.AGd<0){this.LE.Y5(true);this.LE.Cv(0);}else{this.LE.Y5(false);this.LE.
Cv(this.Appearance.AGd);}}var pos=((AE[2]-AE[0])*this.Ah0)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LD&&!!this.LD.Al){var s=this.LD.Al.FrameSize;
var x2=AE[2]-AE[0];var Eg=pos;if(Eg>x2)Eg=x2;this.LD.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eg,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LD.A8W([x2-((s[0]
/3)|0),this.LD.AmW[1]]);this.LD.Y(true);}if(!!this.LE&&!!this.LE.Al){var s=this.
LE.Al.FrameSize;var x2=AE[2]-AE[0];var Eg=pos;if(Eg<0)Eg=0;this.LE.H([Eg,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LE.A8W([x2-((s[0]/3)|0),this.LE.AmW[1]]);this.LE.Y(true);}},AJS:function(G){var Atm=
this.Ah0;var AKm=0;if(!!this.Appearance)AKm=this.Appearance.ATT;if(this.BeD&&(this.
FS!==this.Ge)){this.Ah0=-this.Ge/(this.FS-this.Ge);Atm=this.Ah0;this.BeD=false;}
if(this.FS!==this.Ge)Atm=(this.T7()-this.Ge)/(this.FS-this.Ge);if(Atm===this.Ah0
)return;this.M4.Ar(false);if(AKm<=0){this.Ah0=Atm;this.Am();return;}var AJZ=Atm-
this.Ah0;if(AJZ<0)AJZ=-AJZ;this.M4.Wj(14);this.M4.Cs=this.Ah0;this.M4.B0=Atm;this.
M4.Fe((10+((AKm/2)|0))+((((AKm*AJZ)|0)/2)|0));this.M4.Ar(true);},Byw:function(G){
},Byz:function(G){this.Ah0=this.M4.A6;this.Am();},Apf:function(G){A.pe([this,this.
AJS],this);if(!!this.Appearance)this.H(this.M);this.Am();},E1:function(E){if(this.
FS===E)return;this.FS=E;A.pe([this,this.AJS],this);},Gn:function(E){if(this.Ge===
E)return;this.Ge=E;A.pe([this,this.AJS],this);},T7:function(){var E=this.AK;if(this.
Ge>this.FS){if(E<this.FS)E=this.FS;if(E>this.Ge)E=this.Ge;}else{if(E<this.Ge)E=this.
Ge;if(E>this.FS)E=this.FS;}return E;},Bx:function(E){if(this.AK===E)return;this.
AK=E;A.pe([this,this.AJS],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Apf],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Apf],E,0);A.pe([this,this.Apf],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acl.M4._Init.call(this.M4={I:this},0);this.__proto__=
C.ACH;this.H(Ca);this.M4.Wj(14);this.M4.HG(1);this.M4.Sm=[this,this.Byw];this.M4.
AgW=[this,this.Byz];},_Done:function(){this.__proto__=A.Core.O;this.M4._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.M4.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.LE)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M4)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.Uv={Qo:null
,UV:null,Appearance:null,Q:null,Bl:null,Dg:null,CQ:null,ADg:A.jV,ADf:A.jV,A2h:0,
Bzo:0,Vp:false,H:function(E){var B;if(!!this.Appearance){var AyL=[E[2]-E[0],E[3]-
E[1]];var Of=AyL;if(Of[0]<this.Appearance.WF[0])Of=[this.Appearance.WF[0],Of[1]];
if(Of[1]<this.Appearance.WF[1])Of=[Of[0],this.Appearance.WF[1]];var G3=A.abe(Of,
AyL);if(!!G3[0]){var HN=((this.PC&0x4)===0x4);var HO=((this.PC&0x8)===0x8);if(HN&&
!HO)E=A.abN(E,E[2]+G3[0]);else if(!HN&&HO)E=[].concat(E[0]-G3[0],E.slice(1,4));else{
E=[].concat(E[0]-((G3[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Of[0]);}}if(!!G3[1]){
var HP=((this.PC&0x10)===0x10);var HM=((this.PC&0x20)===0x20);if(HP&&!HM)E=[].concat(
E.slice(0,3),E[3]+G3[1]);else if(!HP&&HM)E=A.abP(E,E[1]-G3[1]);else{E=A.abP(E,E[
1]-((G3[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Of[1]);}}}A.Core.O.H.call(this,E
);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var BcO=!!this.Appearance&&(((((((
!!this.Appearance.Auz||!!this.Appearance.AuA)||!!this.Appearance.AuB)||!!this.Appearance.
Auy)||!!this.Appearance.AuD)||!!this.Appearance.AuE)||!!this.Appearance.AuF)||!!
this.Appearance.AuC);var BcR=!!this.Appearance&&((!!this.ADf&&!!this.Appearance.
Avi)||(!!this.ADg&&!!this.Appearance.Avj));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var AfG;if(BcO&&!!!this.UV){this.UV=A._NewObject(A.acg.NJ,0);this.J(this.UV,
0);}else if(!BcO&&!!this.UV){this.HI(this.UV);this.UV=null;}if(BcR&&!!!this.Qo){
this.Qo=A._NewObject(A.acg.Text,0);this.J(this.Qo,0);this.Qo.Bkv(true);}else if(
!BcR&&!!this.Qo){this.HI(this.Qo);this.Qo=null;}if(!((Ae&0x10)===0x10))AfG=0x44;
else if(((this.CQ.Down&&this.CQ.Yk)||this.Dg.Down)||this.Bl.Bv)AfG=0x41;else if(((
Ae&0x40)===0x40))AfG=0x46;else AfG=0x45;if(!this.Vp)AfG=String.fromCharCode(AfG).
toLowerCase().charCodeAt(0)||0;this.Bzo=AfG;if(!!this.UV){var bitmap;var Z8;var EL=
this.Appearance.ANz;var Ax=[AE[0],AE[1],AE[2],AE[3]];switch(AfG){case 0x44:{bitmap=
this.Appearance.AuE;Z8=this.Appearance.ANG;}break;case 0x41:{bitmap=this.Appearance.
AuC;Z8=this.Appearance.ANE;}break;case 0x46:{bitmap=this.Appearance.AuF;Z8=this.
Appearance.ANH;}break;case 0x45:{bitmap=this.Appearance.AuD;Z8=this.Appearance.ANF;
}break;case 0x64:{bitmap=this.Appearance.AuA;Z8=this.Appearance.ANC;}break;case 0x61:{
bitmap=this.Appearance.Auy;Z8=this.Appearance.ANA;}break;case 0x66:{bitmap=this.
Appearance.AuB;Z8=this.Appearance.AND;}break;default:{bitmap=this.Appearance.Auz;
Z8=this.Appearance.ANB;}}this.UV.Y5(Z8<0);this.UV.L(0xFFFFFFFF);if(Z8<0)Z8=0;if(
!!bitmap&&!((EL&0x1)===0x1)){var HN=((EL&0x4)===0x4);var HO=((EL&0x8)===0x8);var
BU=bitmap.FrameSize[0];if(HN&&!HO)Ax=A.abN(Ax,Ax[0]+BU);else if(!HN&&HO)Ax=[].concat(
Ax[2]-BU,Ax.slice(1,4));else{Ax=[].concat(Ax[0]+((((Ax[2]-Ax[0])/2)|0)-((BU/2)|0
)),Ax.slice(1,4));Ax=A.abN(Ax,Ax[0]+BU);}}if(!!bitmap&&!((EL&0x2)===0x2)){var HP=((
EL&0x10)===0x10);var HM=((EL&0x20)===0x20);var BI=bitmap.FrameSize[1];if(HP&&!HM
)Ax=[].concat(Ax.slice(0,3),Ax[1]+BI);else if(!HP&&HM)Ax=A.abP(Ax,Ax[3]-BI);else{
Ax=A.abP(Ax,Ax[1]+((((Ax[3]-Ax[1])/2)|0)-((BI/2)|0)));Ax=[].concat(Ax.slice(0,3)
,Ax[1]+BI);}}this.UV.Cv(Z8);this.UV.Ay(bitmap);this.UV.H(Ax);this.UV.Arp(16);}if(
!!this.Qo){var AhY;var font;var A1o;switch(AfG){case 0x44:case 0x41:case 0x46:case
0x45:{font=this.Appearance.Avj;A1o=this.ADg;}break;default:{font=this.Appearance.
Avi;A1o=this.ADf;}}switch(AfG){case 0x44:AhY=this.Appearance.AQw;break;case 0x41:
AhY=this.Appearance.AQu;break;case 0x46:AhY=this.Appearance.AQx;break;case 0x45:
AhY=this.Appearance.AQv;break;case 0x64:AhY=this.Appearance.AQs;break;case 0x61:
AhY=this.Appearance.AQq;break;case 0x66:AhY=this.Appearance.AQt;break;default:AhY=
this.Appearance.AQr;}this.Qo.H([AE[0]+this.Appearance.AQp,AE[1],AE[2],AE[3]]);this.
Qo.A3(this.Appearance.AQo);this.Qo.S(font);this.Qo.R(A1o);this.Qo.L(AhY);this.Qo.
KL(true);this.Qo.Bku(true);this.Qo.Arp(92);}this.ExtendClipping(0,0,0,0);{var AtT=
AE;this.CQ.DY(AtT.slice(0,2));this.CQ.Kf(AtT.slice(2,4));this.CQ.DM([AtT[2],AtT[
1]]);this.CQ.Kg([AtT[0],AtT[3]]);}},Apf:function(G){var Bc0=this.Dg.Filter;this.
Dg.Filter=149;if(!Bc0&&!!this.Dg.Filter)this.Cu(0x4,0x0);if(!!Bc0&&!this.Dg.Filter
)this.Cu(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},L6:function(G){
var F;if(!!this.Q)this.Aq_((F=this.Q,F[1].call(F[0])));},Qg:function(G){var F;this.
Am();this.Aq_(!this.Vp);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vp));A.abo(this.
Q,0);}},ByV:function(G){var F;var Apr=0;if(!!this.Appearance)Apr=50;this.CQ.Ar(true
);this.Am();if(((this.Dg.Bt-this.A2h)|0)>=Apr){this.Aq_(!this.Vp);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.Vp));A.abo(this.Q,0);}}else{this.Bl.Wf(Apr-((this.Dg.
Bt-this.A2h)|0));this.Bl.Ar(true);}},Ais:function(G){var F;this.CQ.Ar(false);this.
Am();if(this.Bl.Bv){this.Bl.Ar(false);this.Aq_(!this.Vp);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.Vp));A.abo(this.Q,0);}}this.A2h=this.Dg.Bt;},ByD:function(G){
this.Am();},Byy:function(G){this.Am();},AzY:function(G){var F;var Apr=0;if(!!this.
Appearance)Apr=50;this.Dg.Bv=true;if(!this.CQ.Yk)return;if(this.CQ.NA)return;if(
this.CQ.Jh>=Apr){this.Aq_(!this.Vp);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vp
));A.abo(this.Q,0);}}else{this.Bl.Wf(Apr-this.CQ.Jh);this.Bl.Ar(true);}},AzX:function(
G){var F;this.Dg.Bv=false;if(this.Bl.Bv){this.Bl.Ar(false);this.Aq_(!this.Vp);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Vp));A.abo(this.Q,0);}}},At:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.L6],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.L6],E,0);if(!!E)this.L6(this);},Aq_:function(E){if(this.Vp===
E)return;this.Vp=E;this.Am();},A8S:function(E){if((E===this.ADf)&&(E===this.ADg)
)return;this.ADf=E;this.ADg=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Apf],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Apf],E,0);A.pe([this,this.Apf],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bl={I:this},0);A.Core.
BK._Init.call(this.Dg={I:this},0);A.Core.Bj._Init.call(this.CQ={I:this},0);this.
__proto__=C.Uv;this.H(BD);this.Bl.PJ(0);this.Bl.Wf(50);this.Dg.Filter=149;this.CQ.
Kg(EW);this.CQ.Kf(Hh);this.CQ.DM(I8);this.CQ.DY(IJ);this.CQ.BlK(16);this.CQ.AEF(
100);this.J(this.CQ,0);this.Bl.Mt=[this,this.Qg];this.Dg.Li=[this,this.ByV];this.
Dg.BL=[this,this.Ais];this.CQ.ADX=[this,this.ByD];this.CQ.Avt=[this,this.Byy];this.
CQ.Li=[this,this.AzY];this.CQ.BL=[this,this.AzX];},_Done:function(){this.__proto__=
A.Core.O;this.Bl._Done();this.Dg._Done();this.CQ._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bl._ReInit();this.Dg._ReInit(
);this.CQ._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Qo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.UV)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bl)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ACI.__proto__=C.AnN;C.AUe.__proto__=C.AnN;C.ACH.__proto__=A.
Core.O;C.Uv.__proto__=A.Core.O;};C._ReInit=function(){};C.Dz=function(D){var B;if((
B=C.AdK[0]._this)&&(B._cycle!=D))B._Done(C.AdK[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */