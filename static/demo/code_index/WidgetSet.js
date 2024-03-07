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
);if(index.acq)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acq=(function(){var A=index;var C={};
var Cc=[0,0,200,50];var BF=[0,0,150,50];var EY=[0,50];var Hi=[150,50];var I7=[150
,0];var Ik=[0,0];
C.AdR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ACX={Axi:null,Axh:null,AUm:500,AGy:-1,AUQ:0xFFFFFFFF,AGx:-1,WM:A.wf,BmN:
function(E){if(this.AUm===E)return;this.AUm=E;A.pe([this,this.EB],this);},A9$:function(
E){if(this.AGy===E)return;this.AGy=E;A.pe([this,this.EB],this);},A9_:function(E){
if(this.Axi===E)return;this.Axi=E;A.pe([this,this.EB],this);},A99:function(E){if(
this.AUQ===E)return;this.AUQ=E;A.pe([this,this.EB],this);},A98:function(E){if(this.
AGx===E)return;this.AGx=E;A.pe([this,this.EB],this);},A97:function(E){if(this.Axh===
E)return;this.Axh=E;A.pe([this,this.EB],this);},AFz:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WM,E))return;this.WM=E;A.pe([this,this.EB
],this);},_Init:function(aArg){C.AnX._Init.call(this,aArg);this.__proto__=C.ACX;
},_Mark:function(D){var B;C.AnX._Mark.call(this,D);if((B=this.Axi)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Axh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AUJ={Avu:null,Avt:null,AuN:null,AuQ:null
,AuP:null,AuO:null,AuJ:null,AuM:null,AuL:null,AuK:null,AQO:0xFF000000,AQR:0xFF000000
,AQQ:0xFF000000,AQP:0xFF000000,AQK:0xFF000000,AQN:0xFF000000,AQM:0xFF000000,AQL:
0xFF000000,AQJ:0,A6N:0xFFFFFFFF,A6Q:0xFFFFFFFF,A6P:0xFFFFFFFF,A6O:0xFFFFFFFF,A6J:
0xFFFFFFFF,A6M:0xFFFFFFFF,A6L:0xFFFFFFFF,A6K:0xFFFFFFFF,A6I:0,AQI:0x12,A6H:0x12,
ANS:0x3F,ANX:-1,AN0:-1,ANZ:-1,ANY:-1,ANT:-1,ANW:-1,ANV:-1,ANU:-1,WM:A.wf,Bmd:function(
E){if(this.AQO===E)return;this.AQO=E;A.pe([this,this.EB],this);},Bmg:function(E){
if(this.AQR===E)return;this.AQR=E;A.pe([this,this.EB],this);},Bmf:function(E){if(
this.AQQ===E)return;this.AQQ=E;A.pe([this,this.EB],this);},Bme:function(E){if(this.
AQP===E)return;this.AQP=E;A.pe([this,this.EB],this);},Bl$:function(E){if(this.AQK===
E)return;this.AQK=E;A.pe([this,this.EB],this);},Bmc:function(E){if(this.AQN===E)
return;this.AQN=E;A.pe([this,this.EB],this);},Bmb:function(E){if(this.AQM===E)return;
this.AQM=E;A.pe([this,this.EB],this);},Bma:function(E){if(this.AQL===E)return;this.
AQL=E;A.pe([this,this.EB],this);},Bl_:function(E){if(this.AQJ===E)return;this.AQJ=
E;A.pe([this,this.EB],this);},BlZ:function(E){if(this.A6N===E)return;this.A6N=E;
A.pe([this,this.EB],this);},Bl2:function(E){if(this.A6Q===E)return;this.A6Q=E;A.
pe([this,this.EB],this);},Bl1:function(E){if(this.A6P===E)return;this.A6P=E;A.pe([
this,this.EB],this);},Bl0:function(E){if(this.A6O===E)return;this.A6O=E;A.pe([this
,this.EB],this);},BlV:function(E){if(this.A6J===E)return;this.A6J=E;A.pe([this,this.
EB],this);},BlY:function(E){if(this.A6M===E)return;this.A6M=E;A.pe([this,this.EB
],this);},BlX:function(E){if(this.A6L===E)return;this.A6L=E;A.pe([this,this.EB],
this);},BlW:function(E){if(this.A6K===E)return;this.A6K=E;A.pe([this,this.EB],this
);},BlU:function(E){if(this.A6I===E)return;this.A6I=E;A.pe([this,this.EB],this);
},Bl8:function(E){if(this.AQI===E)return;this.AQI=E;A.pe([this,this.EB],this);},
A9H:function(E){if(this.Avu===E)return;this.Avu=E;A.pe([this,this.EB],this);},A9G:
function(E){if(this.Avt===E)return;this.Avt=E;A.pe([this,this.EB],this);},BlS:function(
E){if(this.A6H===E)return;this.A6H=E;A.pe([this,this.EB],this);},Bls:function(E){
if(this.ANS===E)return;this.ANS=E;A.pe([this,this.EB],this);},BlF:function(E){if(
this.ANX===E)return;this.ANX=E;A.pe([this,this.EB],this);},BlI:function(E){if(this.
AN0===E)return;this.AN0=E;A.pe([this,this.EB],this);},BlH:function(E){if(this.ANZ===
E)return;this.ANZ=E;A.pe([this,this.EB],this);},BlG:function(E){if(this.ANY===E)
return;this.ANY=E;A.pe([this,this.EB],this);},BlB:function(E){if(this.AuN===E)return;
this.AuN=E;A.pe([this,this.EB],this);},BlE:function(E){if(this.AuQ===E)return;this.
AuQ=E;A.pe([this,this.EB],this);},BlD:function(E){if(this.AuP===E)return;this.AuP=
E;A.pe([this,this.EB],this);},BlC:function(E){if(this.AuO===E)return;this.AuO=E;
A.pe([this,this.EB],this);},Blx:function(E){if(this.ANT===E)return;this.ANT=E;A.
pe([this,this.EB],this);},BlA:function(E){if(this.ANW===E)return;this.ANW=E;A.pe([
this,this.EB],this);},Blz:function(E){if(this.ANV===E)return;this.ANV=E;A.pe([this
,this.EB],this);},Bly:function(E){if(this.ANU===E)return;this.ANU=E;A.pe([this,this.
EB],this);},Blt:function(E){if(this.AuJ===E)return;this.AuJ=E;A.pe([this,this.EB
],this);},Blw:function(E){if(this.AuM===E)return;this.AuM=E;A.pe([this,this.EB],
this);},Blv:function(E){if(this.AuL===E)return;this.AuL=E;A.pe([this,this.EB],this
);},Blu:function(E){if(this.AuK===E)return;this.AuK=E;A.pe([this,this.EB],this);
},AFz:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WM,E))
return;this.WM=E;A.pe([this,this.EB],this);},_Init:function(aArg){C.AnX._Init.call(
this,aArg);this.__proto__=C.AUJ;},_Mark:function(D){var B;C.AnX._Mark.call(this,
D);if((B=this.Avu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avt)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuP)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AuO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AuJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuM)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AuL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuK)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.AnX={
EB:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.AnX;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ACW={LJ:null,LI:null,Appearance:null
,M5:null,Ah9:0,FV:100,Gg:0,AM:50,Bft:true,H:function(E){var B;if(!!this.Appearance
){var AyX=[E[2]-E[0],E[3]-E[1]];var Om=AyX;if(Om[0]<this.Appearance.WM[0])Om=[this.
Appearance.WM[0],Om[1]];if(Om[1]<this.Appearance.WM[1])Om=[Om[0],this.Appearance.
WM[1]];var G5=A.abe(Om,AyX);if(!!G5[0]){var HO=((this.PG&0x4)===0x4);var HP=((this.
PG&0x8)===0x8);if(HO&&!HP)E=A.abN(E,E[2]+G5[0]);else if(!HO&&HP)E=[].concat(E[0]-
G5[0],E.slice(1,4));else{E=[].concat(E[0]-((G5[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Om[0]);}}if(!!G5[1]){var HQ=((this.PG&0x10)===0x10);var HN=((this.PG&0x20)===
0x20);if(HQ&&!HN)E=[].concat(E.slice(0,3),E[3]+G5[1]);else if(!HQ&&HN)E=A.abP(E,
E[1]-G5[1]);else{E=A.abP(E,E[1]-((G5[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Om[
1]);}}}A.Core.O.H.call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);
var BdE=!!this.Appearance&&!!this.Appearance.Axh;var BdF=!!this.Appearance&&!!this.
Appearance.Axi;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BdE&&!!!this.LI){this.
LI=A._NewObject(A.acg.NJ,0);this.J(this.LI,0);}else if(!BdE&&!!this.LI){this.HJ(
this.LI);this.LI=null;}if(BdF&&!!!this.LJ){this.LJ=A._NewObject(A.acg.NJ,0);this.
J(this.LJ,0);}else if(!BdF&&!!this.LJ){this.HJ(this.LJ);this.LJ=null;}if(!!this.
LI){this.LI.Ax(this.Appearance.Axh);this.LI.L(this.Appearance.AUQ);this.LI.A9t(0x1B
);this.LI.ArB(54);if(this.Appearance.AGx<0){this.LI.Y$(true);this.LI.Cx(0);}else{
this.LI.Y$(false);this.LI.Cx(this.Appearance.AGx);}}if(!!this.LJ){this.LJ.Ax(this.
Appearance.Axi);this.LJ.L(0xFFFFFFFF);this.LJ.A9t(0x1E);this.LJ.ArB(35);if(this.
Appearance.AGy<0){this.LJ.Y$(true);this.LJ.Cx(0);}else{this.LJ.Y$(false);this.LJ.
Cx(this.Appearance.AGy);}}var pos=((AE[2]-AE[0])*this.Ah9)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LI&&!!this.LI.Al){var s=this.LI.Al.FrameSize;
var x2=AE[2]-AE[0];var Ej=pos;if(Ej>x2)Ej=x2;this.LI.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ej,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LI.A9J([x2-((s[0]
/3)|0),this.LI.Am5[1]]);this.LI.Y(true);}if(!!this.LJ&&!!this.LJ.Al){var s=this.
LJ.Al.FrameSize;var x2=AE[2]-AE[0];var Ej=pos;if(Ej<0)Ej=0;this.LJ.H([Ej,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LJ.A9J([x2-((s[0]/3)|0),this.LJ.Am5[1]]);this.LJ.Y(true);}},AJ_:function(G){var Atz=
this.Ah9;var AKF=0;if(!!this.Appearance)AKF=this.Appearance.AUm;if(this.Bft&&(this.
FV!==this.Gg)){this.Ah9=-this.Gg/(this.FV-this.Gg);Atz=this.Ah9;this.Bft=false;}
if(this.FV!==this.Gg)Atz=(this.Ua()-this.Gg)/(this.FV-this.Gg);if(Atz===this.Ah9
)return;this.M5.Ar(false);if(AKF<=0){this.Ah9=Atz;this.An();return;}var AKf=Atz-
this.Ah9;if(AKf<0)AKf=-AKf;this.M5.Wo(14);this.M5.Cu=this.Ah9;this.M5.B3=Atz;this.
M5.Fi((10+((AKF/2)|0))+((((AKF*AKf)|0)/2)|0));this.M5.Ar(true);},Bzx:function(G){
},BzA:function(G){this.Ah9=this.M5.A5;this.An();},Apo:function(G){A.pe([this,this.
AJ_],this);if(!!this.Appearance)this.H(this.M);this.An();},E4:function(E){if(this.
FV===E)return;this.FV=E;A.pe([this,this.AJ_],this);},Gp:function(E){if(this.Gg===
E)return;this.Gg=E;A.pe([this,this.AJ_],this);},Ua:function(){var E=this.AM;if(this.
Gg>this.FV){if(E<this.FV)E=this.FV;if(E>this.Gg)E=this.Gg;}else{if(E<this.Gg)E=this.
Gg;if(E>this.FV)E=this.FV;}return E;},BC:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AJ_],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Apo],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Apo],E,0);A.pe([this,this.Apo],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ACW;this.H(Cc);this.M5.Wo(14);this.M5.HI(1);this.M5.Sr=[this,this.Bzx];this.M5.
Ag6=[this,this.BzA];},_Done:function(){this.__proto__=A.Core.O;this.M5._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.LJ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UA={Qr:null
,U1:null,Appearance:null,Q:null,Bo:null,Dj:null,CR:null,ADy:A.jV,ADx:A.jV,A2W:0,
BAo:0,Vv:false,H:function(E){var B;if(!!this.Appearance){var AyX=[E[2]-E[0],E[3]-
E[1]];var Om=AyX;if(Om[0]<this.Appearance.WM[0])Om=[this.Appearance.WM[0],Om[1]];
if(Om[1]<this.Appearance.WM[1])Om=[Om[0],this.Appearance.WM[1]];var G5=A.abe(Om,
AyX);if(!!G5[0]){var HO=((this.PG&0x4)===0x4);var HP=((this.PG&0x8)===0x8);if(HO&&
!HP)E=A.abN(E,E[2]+G5[0]);else if(!HO&&HP)E=[].concat(E[0]-G5[0],E.slice(1,4));else{
E=[].concat(E[0]-((G5[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Om[0]);}}if(!!G5[1]){
var HQ=((this.PG&0x10)===0x10);var HN=((this.PG&0x20)===0x20);if(HQ&&!HN)E=[].concat(
E.slice(0,3),E[3]+G5[1]);else if(!HQ&&HN)E=A.abP(E,E[1]-G5[1]);else{E=A.abP(E,E[
1]-((G5[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Om[1]);}}}A.Core.O.H.call(this,E
);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var BdD=!!this.Appearance&&(((((((
!!this.Appearance.AuK||!!this.Appearance.AuL)||!!this.Appearance.AuM)||!!this.Appearance.
AuJ)||!!this.Appearance.AuO)||!!this.Appearance.AuP)||!!this.Appearance.AuQ)||!!
this.Appearance.AuN);var BdG=!!this.Appearance&&((!!this.ADx&&!!this.Appearance.
Avt)||(!!this.ADy&&!!this.Appearance.Avu));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var AfP;if(BdD&&!!!this.U1){this.U1=A._NewObject(A.acg.NJ,0);this.J(this.U1,
0);}else if(!BdD&&!!this.U1){this.HJ(this.U1);this.U1=null;}if(BdG&&!!!this.Qr){
this.Qr=A._NewObject(A.acg.Text,0);this.J(this.Qr,0);this.Qr.Bll(true);}else if(
!BdG&&!!this.Qr){this.HJ(this.Qr);this.Qr=null;}if(!((Ae&0x10)===0x10))AfP=0x44;
else if(((this.CR.Down&&this.CR.Yq)||this.Dj.Down)||this.Bo.By)AfP=0x41;else if(((
Ae&0x40)===0x40))AfP=0x46;else AfP=0x45;if(!this.Vv)AfP=String.fromCharCode(AfP).
toLowerCase().charCodeAt(0)||0;this.BAo=AfP;if(!!this.U1){var bitmap;var Aae;var
EQ=this.Appearance.ANS;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(AfP){case 0x44:{bitmap=
this.Appearance.AuP;Aae=this.Appearance.ANZ;}break;case 0x41:{bitmap=this.Appearance.
AuN;Aae=this.Appearance.ANX;}break;case 0x46:{bitmap=this.Appearance.AuQ;Aae=this.
Appearance.AN0;}break;case 0x45:{bitmap=this.Appearance.AuO;Aae=this.Appearance.
ANY;}break;case 0x64:{bitmap=this.Appearance.AuL;Aae=this.Appearance.ANV;}break;
case 0x61:{bitmap=this.Appearance.AuJ;Aae=this.Appearance.ANT;}break;case 0x66:{
bitmap=this.Appearance.AuM;Aae=this.Appearance.ANW;}break;default:{bitmap=this.Appearance.
AuK;Aae=this.Appearance.ANU;}}this.U1.Y$(Aae<0);this.U1.L(0xFFFFFFFF);if(Aae<0)Aae=
0;if(!!bitmap&&!((EQ&0x1)===0x1)){var HO=((EQ&0x4)===0x4);var HP=((EQ&0x8)===0x8
);var BX=bitmap.FrameSize[0];if(HO&&!HP)Az=A.abN(Az,Az[0]+BX);else if(!HO&&HP)Az=[
].concat(Az[2]-BX,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BX/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BX);}}if(!!bitmap&&!((EQ&0x2)===0x2)){
var HQ=((EQ&0x10)===0x10);var HN=((EQ&0x20)===0x20);var BJ=bitmap.FrameSize[1];if(
HQ&&!HN)Az=[].concat(Az.slice(0,3),Az[1]+BJ);else if(!HQ&&HN)Az=A.abP(Az,Az[3]-BJ
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BJ/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BJ);}}this.U1.Cx(Aae);this.U1.Ax(bitmap);this.U1.H(Az);this.U1.ArB(16
);}if(!!this.Qr){var Ah7;var font;var A10;switch(AfP){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.Avu;A10=this.ADy;}break;default:{font=this.Appearance.
Avt;A10=this.ADx;}}switch(AfP){case 0x44:Ah7=this.Appearance.AQQ;break;case 0x41:
Ah7=this.Appearance.AQO;break;case 0x46:Ah7=this.Appearance.AQR;break;case 0x45:
Ah7=this.Appearance.AQP;break;case 0x64:Ah7=this.Appearance.AQM;break;case 0x61:
Ah7=this.Appearance.AQK;break;case 0x66:Ah7=this.Appearance.AQN;break;default:Ah7=
this.Appearance.AQL;}this.Qr.H([AE[0]+this.Appearance.AQJ,AE[1],AE[2],AE[3]]);this.
Qr.A7(this.Appearance.AQI);this.Qr.S(font);this.Qr.R(A10);this.Qr.L(Ah7);this.Qr.
KP(true);this.Qr.Blk(true);this.Qr.ArB(92);}this.ExtendClipping(0,0,0,0);{var At5=
AE;this.CR.DY(At5.slice(0,2));this.CR.Ki(At5.slice(2,4));this.CR.DI([At5[2],At5[
1]]);this.CR.Kj([At5[0],At5[3]]);}},Apo:function(G){var BdP=this.Dj.Filter;this.
Dj.Filter=149;if(!BdP&&!!this.Dj.Filter)this.Cw(0x4,0x0);if(!!BdP&&!this.Dj.Filter
)this.Cw(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.An();},J5:function(G){
var F;if(!!this.Q)this.Ark((F=this.Q,F[1].call(F[0])));},Qj:function(G){var F;this.
An();this.Ark(!this.Vv);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vv));A.abo(this.
Q,0);}},BzW:function(G){var F;var ApB=0;if(!!this.Appearance)ApB=50;this.CR.Ar(true
);this.An();if(((this.Dj.Bw-this.A2W)|0)>=ApB){this.Ark(!this.Vv);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.Vv));A.abo(this.Q,0);}}else{this.Bo.Wk(ApB-((this.Dj.
Bw-this.A2W)|0));this.Bo.Ar(true);}},AiC:function(G){var F;this.CR.Ar(false);this.
An();if(this.Bo.By){this.Bo.Ar(false);this.Ark(!this.Vv);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.Vv));A.abo(this.Q,0);}}this.A2W=this.Dj.Bw;},BzE:function(G){
this.An();},Bzz:function(G){this.An();},Az_:function(G){var F;var ApB=0;if(!!this.
Appearance)ApB=50;this.Dj.By=true;if(!this.CR.Yq)return;if(this.CR.NA)return;if(
this.CR.Jg>=ApB){this.Ark(!this.Vv);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vv
));A.abo(this.Q,0);}}else{this.Bo.Wk(ApB-this.CR.Jg);this.Bo.Ar(true);}},Az9:function(
G){var F;this.Dj.By=false;if(this.Bo.By){this.Bo.Ar(false);this.Ark(!this.Vv);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Vv));A.abo(this.Q,0);}}},As:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J5],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.J5],E,0);if(!!E)this.J5(this);},Ark:function(E){if(this.Vv===
E)return;this.Vv=E;this.An();},A9F:function(E){if((E===this.ADx)&&(E===this.ADy)
)return;this.ADx=E;this.ADy=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Apo],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Apo],E,0);A.pe([this,this.Apo],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BL._Init.call(this.Dj={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UA;this.H(BF);this.Bo.PN(0);this.Bo.Wk(50);this.Dj.Filter=149;this.CR.
Kj(EY);this.CR.Ki(Hi);this.CR.DI(I7);this.CR.DY(Ik);this.CR.BmC(16);this.CR.AEZ(
100);this.J(this.CR,0);this.Bo.Mv=[this,this.Qj];this.Dj.Ll=[this,this.BzW];this.
Dj.BM=[this,this.AiC];this.CR.AEd=[this,this.BzE];this.CR.AvE=[this,this.Bzz];this.
CR.Ll=[this,this.Az_];this.CR.BM=[this,this.Az9];},_Done:function(){this.__proto__=
A.Core.O;this.Bo._Done();this.Dj._Done();this.CR._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bo._ReInit();this.Dj._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Qr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U1)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ACX.__proto__=C.AnX;C.AUJ.__proto__=C.AnX;C.ACW.__proto__=A.
Core.O;C.UA.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){var B;if((
B=C.AdR[0]._this)&&(B._cycle!=D))B._Done(C.AdR[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */