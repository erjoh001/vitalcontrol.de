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
);if(index.acg)throw new Error("The unit file 'Views.js' included twice!");index.
acg=(function(){var A=index;var C={};
var Cc=[1,1];var BD=[0,0];var E6=[0,0,0,0];var Hp="\uFEFF";var IS="No matrix to perform 3D transformation";
var Ir="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C4={KF:null,Ak6:1,Ak5:1,AQ:0xFFFFFFFF,Kl:function(CY,aClip,aOffset,Ci,aBlend){var
B;var Agn=this.Ak5;var Ago=this.Ak6;var Adv=A.abf(this.Es,aOffset);var Adw=A.abf(
this.EC,aOffset);var Alo;var Alp;var B2=this.AQ;if(A.aaX(Adv,Adw))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;Alo=Alp=B2;if(Ci<256){Alo=(Alo&0x00FFFFFF)|((((
Ci*((Alo>>24)&0xFF))>>8)&0xFF)<<24);Alp=(Alp&0x00FFFFFF)|((((Ci*((Alp>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agn===1)&&(Ago===1))CY.AuU(aClip,Adv,Adw,Alo,Alp,aBlend);else
CY.BhJ(aClip,Adv,Adw,Agn,Ago,Alo,Alp,aBlend);},GetExtent:function(){var Agn=this.
Ak5;var Ago=this.Ak6;var Adv=this.Es;var Adw=this.EC;if(((Agn===1)&&(Ago===1))||
A.aaX(Adv,Adw))return A.Core.Aka.GetExtent.call(this);var Aix=Agn/2;var Aiy=Ago/
2;var Ape=Adv[0];var Apf=Adv[1];var Apg=Adw[0];var Aph=Adw[1];var J7=Apg-Ape;var
J8=Aph-Apf;var IW=Math.sqrt((J7*J7)+(J8*J8));J7=J7/IW;J8=J8/IW;var Bb8=Ape+(J8*Aix
);var Bb9=Apf-(J7*Aix);var AJr=Apg+(J8*Aiy);var AJs=Aph-(J7*Aiy);var AJt=Apg-(J8
*Aiy);var AJu=Aph+(J7*Aiy);var AJv=Ape-(J8*Aix);var AJw=Apf+(J7*Aix);var left=Bb8;
var right=Bb8;var top=Bb9;var bottom=Bb9;if(AJr<left)left=AJr;if(AJt<left)left=AJt;
if(AJv<left)left=AJv;if(AJr>right)right=AJr;if(AJt>right)right=AJt;if(AJv>right)
right=AJv;if(AJs<top)top=AJs;if(AJu<top)top=AJu;if(AJw<top)top=AJw;if(AJs>bottom
)bottom=AJs;if(AJu>bottom)bottom=AJu;if(AJw>bottom)bottom=AJw;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RF:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_g:function(E){var B;if(E<1)E=1;if(E===this.Ak6)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak6=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak5!==1))&&!this.KF){
this.KF=A.aaL(A.aci.AsM);if(this.KF.OK)A.zV([this,this.RF],this.KF,0);}if(((E===
1)&&(this.Ak5===1))&&!!this.KF){if(this.KF.OK)A.z9([this,this.RF],this.KF,0);this.
KF=null;}},A_f:function(E){var B;if(E<1)E=1;if(E===this.Ak5)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak5=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak6!==1))&&!this.
KF){this.KF=A.aaL(A.aci.AsM);if(this.KF.OK)A.zV([this,this.RF],this.KF,0);}if(((
E===1)&&(this.Ak6===1))&&!!this.KF){if(this.KF.OK)A.z9([this,this.RF],this.KF,0);
this.KF=null;}},Ng:function(E){var B;if(E<1)E=1;if((E===this.Ak5)&&(E===this.Ak6
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ak5=E;this.Ak6=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KF){this.KF=A.aaL(A.aci.AsM);if(this.KF.OK)A.zV([this,this.
RF],this.KF,0);}if((E===1)&&!!this.KF){if(this.KF.OK)A.z9([this,this.RF],this.KF
,0);this.KF=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(
aArg){A.Core.Aka._Init.call(this,aArg);this.__proto__=C.C4;},_Mark:function(D){var
B;A.Core.Aka._Mark.call(this,D);if((B=this.KF)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANc:0xFFFFFFFF,ANd:0xFFFFFFFF,ANh:0xFFFFFFFF
,ANg:0xFFFFFFFF,AQ:0xFFFFFFFF,Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;var DD=
this.ANg;var DO=this.ANh;var DI=this.ANc;var DN=this.ANd;var B2=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ci=Ci+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
))DD=DO=DI=DN=B2;else if(B2!==0xFFFFFFFF){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)
*(((B2>>24)&0xFF)+1))>>8)&0xFF)<<24);DD=(DD&0xFFFFFF00)|((((DD&0xFF)*((B2&0xFF)+
1))>>8)&0xFF);DD=(DD&0xFFFF00FF)|((((((DD>>8)&0xFF)*(((B2>>8)&0xFF)+1))>>8)&0xFF
)<<8);DD=(DD&0xFF00FFFF)|((((((DD>>16)&0xFF)*(((B2>>16)&0xFF)+1))>>8)&0xFF)<<16);
DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*(((B2>>24)&0xFF)+1))>>8)&0xFF)<<24);DO=(DO&
0xFFFFFF00)|((((DO&0xFF)*((B2&0xFF)+1))>>8)&0xFF);DO=(DO&0xFFFF00FF)|((((((DO>>8
)&0xFF)*(((B2>>8)&0xFF)+1))>>8)&0xFF)<<8);DO=(DO&0xFF00FFFF)|((((((DO>>16)&0xFF)
*(((B2>>16)&0xFF)+1))>>8)&0xFF)<<16);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*(((B2>>
24)&0xFF)+1))>>8)&0xFF)<<24);DI=(DI&0xFFFFFF00)|((((DI&0xFF)*((B2&0xFF)+1))>>8)&
0xFF);DI=(DI&0xFFFF00FF)|((((((DI>>8)&0xFF)*(((B2>>8)&0xFF)+1))>>8)&0xFF)<<8);DI=(
DI&0xFF00FFFF)|((((((DI>>16)&0xFF)*(((B2>>16)&0xFF)+1))>>8)&0xFF)<<16);DN=(DN&0x00FFFFFF
)|((((((DN>>24)&0xFF)*(((B2>>24)&0xFF)+1))>>8)&0xFF)<<24);DN=(DN&0xFFFFFF00)|((((
DN&0xFF)*((B2&0xFF)+1))>>8)&0xFF);DN=(DN&0xFFFF00FF)|((((((DN>>8)&0xFF)*(((B2>>8
)&0xFF)+1))>>8)&0xFF)<<8);DN=(DN&0xFF00FFFF)|((((((DN>>16)&0xFF)*(((B2>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CY.Au9(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awm:
function(E){var B;if(E===this.ANc)return;this.ANc=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awn:function(E){var B;if(E===this.ANd)return;this.ANd=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Awp:function(E){var B;
if(E===this.ANh)return;this.ANh=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},Awo:function(E){var B;if(E===this.ANg)return;this.ANg=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fo:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BT={Width:1,AQ:0xFFFFFFFF,Kl:function(CY
,aClip,aOffset,Ci,aBlend){var B;var DD;var DO;var DI;var DN;var B2=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;DD=DO=DI=DN=B2;if(Ci<256){DD=(DD&0x00FFFFFF
)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ci*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.BhH(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Ng:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(
0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.
BT;},_className:"Views::Border"};C.NO={timer:null,Al:null,MM:-1,AQ:0xFFFFFFFF,AuV:
0x1F,TN:0,Dx:0,Ane:A.wf,Vw:false,Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;var
Nr=this.TN;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B2=this.AQ;var Ke=(((Ci+1)*255)>>
8)+1;var Og=this.AuV;var Az=A.abh(this.M,aOffset);var AKT=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Ane);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B2;if(Ke<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Ke)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(((this.
Ane[0]>0)&&(AKT[0]>0))&&!((Og&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKT[
0];if(((Og&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Og=Og|0x4;}else if(((Og&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Og=Og|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Og=Og|0x5;}}if(((this.Ane[1]>0)&&(AKT[1]>0))&&!((Og&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKT[1];if(((Og&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Og=Og|0x8;}else if(((Og&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Og=Og|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Og=Og|
0xA;}}CY.BhG(aClip,this.Al,Nr,Az,Og,DD,DO,DN,DI,aBlend);},RF:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(G){var B;var Nr=
this.MM;var Tk=0;if(!!this.Al)Tk=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MM<0))&&(Tk>0))this.Dx=this.timer.Bs-(this.TN*this.Al.FrameDelay);if(
!!this.timer&&(Tk>0)){var Au=(this.timer.Bs-this.Dx)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tk){Nr=Nr%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Au%Tk);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!Tk&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zl:function(E){var B;if(this.Vw===E)return;this.Vw=E;this.MM=-1;if(
!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aed);A.zV([this,this.Me],this.timer,0);A.pe([this,this.
Me],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9u:function(
E){var B;if(E===this.AuV)return;this.AuV=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cu:function(E){var B;if(E<0)E=0;if((E===this.TN)&&(this.MM===-1)
)return;this.TN=E;if(!this.timer)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OK)A.z9([this,this.RF],this.Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OK)A.zV([this,this.
RF],E,0);if(this.Vw){this.Zl(false);this.Zl(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},A9K:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Ane))return;this.Ane=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.AuV&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.
__proto__=C.NO;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MM:0,AQ:0xFFFFFFFF
,Kg:0x12,TN:0,G7:255,Vw:false,AaZ:false,Kl:function(CY,aClip,aOffset,Ci,aBlend){
var B;var Nr=this.TN;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C3=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B2=this.AQ;var Ke=(((
Ci+1)*this.G7)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B2;if(Ke<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Ke)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C3))CY.A5l(aClip,this.Al,Nr,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CY.BnX(aClip,this.Al,Nr
,A.abh(AE,aOffset),[].concat(BD,C3),DD,DO,DN,DI,aBlend,true);},RF:function(G){var
B;if(((this.AaZ&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(
G){var B;var Nr=this.MM;var Tk=0;if(!!this.Al)Tk=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MM<0))&&(Tk>0))this.Dx=this.timer.Bs-(this.TN*this.Al.FrameDelay
);if(!!this.timer&&(Tk>0)){var Au=(this.timer.Bs-this.Dx)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tk){Nr=Nr%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Au%Tk);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!Tk&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},I9:function(E
){if(E===this.AaZ)return;this.AaZ=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zl:function(
E){var B;if(this.Vw===E)return;this.Vw=E;this.MM=-1;if(!E&&!!this.timer){A.z9([this
,this.Me],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aed);A.zV([this,this.Me],this.timer,0);A.pe([this,this.Me],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A5:function(E){var B;if(E===this.Kg)return;
this.Kg=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cu:function(E){
var B;if(E<0)E=0;if((E===this.TN)&&(this.MM===-1))return;this.TN=E;if(!this.timer
)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OK)A.z9([this,this.RF],this.
Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OK)A.zV([this,this.RF],E,0);if(this.Vw){this.
Zl(false);this.Zl(true);}if(((this.AaZ&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
Dj:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G7)return;this.G7=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cr(
0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E6;var Bu=this.Kg;var C3=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C3[0]||!C3[1])return E6;var Df=[0,0
,width,height];var B3=Df;if(((Bu&0x40)===0x40)){var A3F=((((Df[2]-Df[0])<<16)+((
C3[0]/2)|0))/C3[0])|0;var AAZ=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var AiW=
A3F;if(AAZ>AiW)AiW=AAZ;B3=A.abL(B3,((C3[0]*AiW)+32768)>>16);B3=A.abI(B3,((C3[1]*
AiW)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3F=((((Df[2]-Df[0])<<16)+((C3[
0]/2)|0))/C3[0])|0;var AAZ=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var AiW=
A3F;if(AAZ<AiW)AiW=AAZ;B3=A.abL(B3,((C3[0]*AiW)+32768)>>16);B3=A.abI(B3,((C3[1]*
AiW)+32768)>>16);}else if(!((Bu&0x100)===0x100))B3=A.abK(B3,C3);if((B3[2]-B3[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B3=A.abM(B3,Df[2]-(B3[2]-B3[0]));else if(((
Bu&0x2)===0x2))B3=A.abM(B3,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B3[2]-B3[0])/2)|0));
}if((B3[3]-B3[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B3=A.abO(B3,Df[3]-(B3[3
]-B3[1]));else if(((Bu&0x10)===0x10))B3=A.abO(B3,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B3[3]-B3[1])/2)|0));}B3=A.abh(B3,Bd.slice(0,2));return B3;},Bj4:function(){return this.
AQ;},ASg:function(){return this.TN;},_Init:function(aArg){A.Core.Et._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CI:
A.jV,String:A.jV,Oe:null,Amc:A.wf,Ja:0,N3:0,AcG:0,Br:A.wf,Kg:0x12,AQ:0xFFFFFFFF,
Afv:false,AaZ:false,Yh:false,AN2:false,HX:false,La:function(){if(!!this.Oe){this.
A1L(this.Oe);this.Oe=null;}},Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;if((this.
CI===A.jV)||!this.B6)return;var Bu=this.Kg;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Ke=(((Ci+1)*255)>>8)+1;
var Kc=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kc<1)return;DD=DO=DI=DN=col;if(Ke<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kc===1)&&!((Bu&0x40)===
0x40)){CY.A5Q(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N3>0)leading=(this.N3-font.
Ascent)-font.Descent;var AaH=(font.Ascent+font.Descent)+leading;var BxX=aClip[1]-
AE[1];var BxY=aClip[3]-AE[1];var A0Z=AE[2]-AE[0];var Dg=0;var O=1;var B2=this.CI.
charCodeAt(1)||0;while(((Dg+AaH)<BxX)&&(B2>0)){O=O+B2;Dg=Dg+AaH;B2=this.CI.charCodeAt(
O)||0;}while((Dg<BxY)&&(B2>0)){var Ma=A.abe(Bq,[0,Dg]);var Al7=0;var O_=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B2)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B2)||0)!==0x00))O_=true;if(O_&&!!(Bu&0x6
)){var ApU=O+B2;var Ay8=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Ay9=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Ay8<0)||(Ay8>=ApU))&&((Ay9<0)||(Ay9>=
ApU)))O_=false;}if(O_)Al7=A0Z;else if(((Bu&0x4)===0x4))Ma=[(Ma[0]-A0Z)+font.Ym(this.
CI,O+1,B2-1),Ma[1]];else if(((Bu&0x2)===0x2))Ma=[(Ma[0]-((A0Z/2)|0))+((font.Ym(this.
CI,O+1,B2-1)/2)|0),Ma[1]];CY.A5Q(aClip,font,this.CI,O+1,B2-1,Df,Ma,Al7,0,DD,DO,DN
,DI,true);O=O+B2;Dg=Dg+AaH;B2=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bfr;Bfr=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bfr&&
!this.AcG)&&this.Afv)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HX=false;A.pe([this,this.Pb],this);}if(((this.Yh&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pb],this);}A.Core.Et.H.call(this,E);A.pe([this
,this.AiP],this);},BxP:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BxO:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1L:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bx$:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiP:function(G){A.pe(this.El
,this);},Pb:function(G){A.pe([this,this.XF],this);},XF:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xx=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afv){
if(this.AcG>0)Xx=this.AcG;else if(!this.AaZ)Xx=width-(this.Ja*2);else Xx=width;if(
Xx<0)Xx=1;}if(!!this.Oe){this.A1L(this.Oe);this.Oe=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN2)this.Oe=this.Bx$(length
);this.CI=font.Bnl(this.String,0,Xx,length,this.Oe);if(!!this.Oe&&!this.BiY()){this.
A1L(this.Oe);this.Oe=null;}}else this.CI=A.jV;this.Amc=BD;if(((this.Yh&&(this.CI
!==A.jV))&&!this.AaZ)&&!!font){var Bu=this.Kg;var leading=font.Leading;var IB=this.
CI;var AKN=this.AjZ();if(((Bu&0x80)===0x80)){if(AKN)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AAU=(font.
Ascent+font.Descent)+leading;var Kc=IB.charCodeAt(0)||0;var AlM=((height+leading
)/AAU)|0;var A1b=false;var AJz=false;if(AlM<=0)AlM=1;if(Kc>AlM){var Bf=0;var AAV=
0;var AKL=Kc-1;var K1;var Ns=IB.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AAV=Kc-AlM;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AAV=((Kc-AlM)/2)|0;AKL=(AAV+AlM)-1;}else
AKL=AlM-1;A1b=AAV>0;AJz=AKL<(Kc-1);for(K1=1;Bf<AAV;Bf=Bf+1)K1=K1+(IB.charCodeAt(
K1)||0);if(AJz)for(Ns=K1;Bf<AKL;Bf=Bf+1)Ns=Ns+(IB.charCodeAt(Ns)||0);if(A1b){var
IW=IB.charCodeAt(K1)||0;tmp=(Hp+A.abW(IB,K1,IW))+Hp;tmp=A.abQ(tmp,0,(IW+2)&0xFFFF
);K1=K1+IW;if((tmp.charCodeAt(IW)||0)===0x0A){tmp=A.abQ(tmp,IW,0xFEFF);tmp=A.abQ(
tmp,IW+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IB,K1,Ns-K1);if(AJz&&(
Ns>=K1)){var IW=IB.charCodeAt(Ns)||0;var Qy=(Hp+A.abW(IB,Ns,IW))+Hp;Qy=A.abQ(Qy,
0,(IW+2)&0xFFFF);Qy=A.abQ(Qy,1,0xFEFF);if((Qy.charCodeAt(IW)||0)===0x0A){Qy=A.abQ(
Qy,IW,0xFEFF);Qy=A.abQ(Qy,IW+1,0x0A);}if((Qy.charCodeAt(2)||0)===0x0A){Qy=A.abQ(
Qy,2,0xFEFF);Qy=A.abQ(Qy,1,0x0A);}else Qy=A.abQ(Qy,1,0xFEFF);tmp=tmp+Qy;}IB=String.
fromCharCode(AlM&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKk=width-(this.Ja*2);if(this.
Afv&&(this.AcG>0))AKk=this.AcG;Kc=IB.charCodeAt(0)||0;for(;Bf<Kc;Bf=Bf+1){var Al4=
A1b&&!Bf;var Al5=AJz&&(Bf===(Kc-1));var Xn=false;var Xo=false;var At$=AKN;if((AKN&&
Al4)&&!Al5){Al4=false;Al5=true;}else if((AKN&&Al5)&&!Al4){Al5=false;Al4=true;}var
XG=inx+1;var IW=IB.charCodeAt(inx)||0;var K1=XG;var Ns=(XG+IW)-2;var A10=-1;var A11=-
1;if(!this.Afv&&(font.Ym(IB,XG,IW-1)>AKk)){var AoQ=Bu;if(((AoQ&0x2)===0x2)&&!!(AoQ&
0x5))AoQ&=~0x2;if(((AoQ&0x2)===0x2))AoQ&=~0x5;if(((AoQ&0x4)===0x4))Xn=true;else if(((
AoQ&0x2)===0x2)){Xn=true;Xo=true;}else Xo=true;}if((IB.charCodeAt(K1)||0)===0x0A
)K1=K1+1;if((IB.charCodeAt(Ns)||0)===0x0A)Ns=Ns-1;while(Xn&&((IB.charCodeAt(K1)||
0)===0xFEFF))K1=K1+1;while(Xo&&((IB.charCodeAt(Ns)||0)===0xFEFF))Ns=Ns-1;Xn=Xn&&
!Al5;Xo=Xo&&!Al4;while((((Xn||Xo)||Al4)||Al5)&&(K1<Ns)){if((Xn&&(At$||!Xo))||Al4
){if(A10>0)IB=A.abQ(IB,A10,0xFEFF);IB=A.abQ(IB,K1,0x2026);A10=K1;K1=K1+1;At$=!At$;
Al4=false;if(font.Ym(IB,XG,IW-1)<=AKk){Xn=false;Xo=false;}else Xn=Xn||!Xo;}if((Xo&&(
!At$||!Xn))||Al5){if(A11>0)IB=A.abQ(IB,A11,0xFEFF);IB=A.abQ(IB,Ns,0x2026);A11=Ns;
Ns=Ns-1;At$=!At$;Al5=false;if(font.Ym(IB,XG,IW-1)<=AKk){Xn=false;Xo=false;}else Xo=
Xo||!Xn;}}inx=inx+IW;}this.Amc=[font.A6k(IB),((IB.charCodeAt(0)||0)*AAU)-leading
];this.CI=IB;}if(this.AaZ&&(this.CI!==A.jV)){var AtX=[this.Ja,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),AtX),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiP],this);},Blt:function(
E){if(E===this.AN2)return;this.AN2=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pb],this);},Hl:function(E){if(E<0)E=0;if(this.Ja===E)return;this.Ja=E;this.CI=A.
jV;this.HX=false;A.pe([this,this.Pb],this);},AwV:function(E){var B;if(E<0)E=0;if(
this.N3===E)return;this.N3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yh){this.CI=A.jV;this.HX=false;A.pe([this,this.Pb],this);}if(this.AaZ&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiP],this);}
,Bls:function(E){if(E===this.Yh)return;this.Yh=E;if(((this.Afv&&!!!this.AcG)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pb],this);},Q2:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcG&&this.Afv)||!!E)||this.Yh)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I9:function(E){if(E===this.AaZ)return;this.AaZ=E;if(E&&this.Yh){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pb],this);}if(E&&this.HX){var AtX=[this.Ja,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),AtX),this.Br));this.U=this.U&~
0x2000;}},Bm5:function(E){if(E<0)E=0;if(E===this.AcG)return;this.AcG=E;if(this.Afv&&
this.HX){this.CI=A.jV;this.HX=false;A.pe([this,this.Pb],this);}if(((!!!E&&this.Afv
)||this.Yh)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KQ:function(
E){if(E===this.Afv)return;this.Afv=E;if(this.HX){this.CI=A.jV;this.HX=false;A.pe([
this,this.Pb],this);}if(((E&&!!!this.AcG)||this.Yh)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Ga:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HX)A.pe([this
,this.AiP],this);},A5:function(E){var B;if(E===this.Kg)return;this.Kg=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yh){this.CI=A.jV;this.HX=false;
A.pe([this,this.Pb],this);}if(this.HX)A.pe([this,this.AiP],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pb],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pb],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},AjZ:function(
){if(!this.HX)this.XF(this);if(!this.Oe)return false;var result=false;var bidi=this.
Oe;result=A.v2(bidi);return result;},BiY:function(){if(!this.HX)this.XF(this);if(
!this.Oe)return false;var result=false;var bidi=this.Oe;result=A.zZ(bidi);return result;
},AGH:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yh)return BD;if(
!this.HX)this.XF(this);if(aIndex<0)aIndex=0;var Bzk=(this.CI.charCodeAt(0)||0)-1;
var Md=this.CI.charCodeAt(1)||0;var inx=1;var Ai1=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<Bzk)&&((inx+Md)<=aIndex)){inx=inx+Md;Bf=Bf+1;Ai1=Ai1+1;
aIndex=aIndex+1;Md=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Md))aIndex=inx+Md;
if(!!this.Oe)aIndex=(inx+this.BxO(this.Oe,(inx+1)-Ai1,(inx+Md)-Ai1,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iw=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iw!==0xFEFF)&&(Iw!==0x0A);}return[col,Bf];},AnK:function(AoF){if(((this.String===
A.jV)||!this.B6)||this.Yh)return 0;if(!this.HX)this.XF(this);var Bf=AoF[1];var col=
AoF[0];var inx=1;var Ai1=2;var Kc=this.CI.charCodeAt(0)||0;var Md=this.CI.charCodeAt(
1)||0;if(Bf>=Kc){Bf=Kc-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Md>0)){inx=inx+Md;Bf=Bf-1;Ai1=Ai1+1;Md=this.CI.charCodeAt(inx)||0;
}var Xw=inx;var AKM=(inx-Ai1)+1;var ApU=(AKM+Md)-1;var AAG=false;while((col>=0)&&(
Md>1)){var Iw=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Md=Md-1;AAG=(Iw===0xFEFF)||(
Iw===0x0A);if(!AAG){col=col-1;Xw=inx;}}if((!AAG&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAG=true;if(AAG)Xw=Xw+1;Xw=Xw-Ai1;if(!!this.Oe)Xw=AKM+this.BxP(
this.Oe,AKM,ApU,Xw-AKM);return Xw;},ATH:function(KY){var B;if((this.String===A.jV
)||!this.B6)return BD;if(!this.HX)this.XF(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B6;var Bu=this.Kg;var Kc=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(KY[1]<AE[1])KY=[KY[0],AE[1]];if(KY[1]>=AE[3])KY=[
KY[0],AE[3]-1];if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AaH=(
font.Ascent+font.Descent)+leading;var Bf=((KY[1]-AE[1])/AaH)|0;var NA=this.ACU(Bf
);var Md=NA.length;var O_=false;if(((Bu&0x80)===0x80)){if(this.AjZ())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kc-1)))O_=true;if((O_&&(
NA.indexOf(String.fromCharCode(0x20),0)<0))&&(NA.indexOf(String.fromCharCode(0xA0
),0)<0))O_=false;if(O_){var inx=1;var ApT=Bf;while(ApT>0){inx=inx+(this.CI.charCodeAt(
inx)||0);ApT=ApT-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))O_=false;}var Al7=0;var Eo=0;if(
O_)Al7=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=(AE[2]-AE[0])-font.Ym(NA,0,Md);else
if(((Bu&0x2)===0x2))Eo=(((AE[2]-AE[0])/2)|0)-((font.Ym(NA,0,Md)/2)|0);var col=font.
BiA(NA,0,Md,(KY[0]-AE[0])-Eo,Al7);if(col<0)col=0;return[col,Bf];},Afc:function(AoF
){var B;if((this.String===A.jV)||!this.B6)return BD;if(!this.HX)this.XF(this);var
Kc=this.CI.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kg;var Bf=AoF[1];var col=
AoF[0];if(Bf>=Kc){Bf=Kc-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NA=this.ACU(
Bf);var Md=NA.length;var AE=this.Db();var O_=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kc-1)))O_=true;if((O_&&(NA.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NA.indexOf(String.fromCharCode(0xA0),0)<0))O_=false;if(O_){var inx=1;var
ApT=Bf;while(ApT>0){inx=inx+(this.CI.charCodeAt(inx)||0);ApT=ApT-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))O_=false;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Al7=0;var Eo=AE[0];if(O_)Al7=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=AE[2]-font.
Ym(NA,0,Md);else if(((Bu&0x2)===0x2))Eo=(Eo+(((AE[2]-AE[0])/2)|0))-((font.Ym(NA,
0,Md)/2)|0);var pos=font.Biw(NA,0,Md,col,Al7);if(pos<0)pos=0;return[Eo+pos,Dg];}
,AOI:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E6;if(!this.HX)
this.XF(this);var Kc=this.CI.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kc)&&(Ad>0)))return E6;var Bu=this.Kg;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Ja*2);if(((
Bu&0x80)===0x80)){if(this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N3>0)leading=(this.N3-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var Eo=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AAW=(this.CI.charCodeAt(inx)||0)-1;var Bfs=font.Ym(this.CI,inx+1,AAW);var A3B=font.
A6v(this.CI,inx+1,AAW);var ApV=Bfs;var AaH=font.Ascent+font.Descent;var AA_=(Kc*((
font.Ascent+font.Descent)+leading))-leading;if(!Kc)AA_=AaH;if((((this.CI.charCodeAt((
inx+AAW)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AAW)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var ApU=(inx+1)+AAW;var Ay8=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Ay9=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ay8>=0)&&(Ay8<ApU))||((Ay9>=0)&&(Ay9<ApU)))ApV=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(AA_>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(ApV>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Eo=width-ApV;else if(((Bu&0x2)===0x2))Eo=((width/2)|0)-((
ApV/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-AA_);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((AA_/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((AA_/2)|0);Eo=(Eo+A3B[0])+this.Ja;
ApV=(ApV+(A3B[2]-A3B[0]))-Bfs;var B3;{var BeU=[Bd[0]+Eo,Bd[1]+Dg];B3=[].concat(BeU
,A.abf(BeU,[ApV,AaH]));}return A.abh(B3,this.Br);},ACU:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XF(this);var Kc=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kc))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XG=inx;var AtD=inx+(this.CI.charCodeAt(
inx)||0);var Iw=0x00;do{XG=XG+1;Iw=this.CI.charCodeAt(XG)||0;}while(((Iw===0xFEFF
)||(Iw===0x0A))&&(XG<=AtD));do{AtD=AtD-1;Iw=this.CI.charCodeAt(AtD)||0;}while(((
Iw===0xFEFF)||(Iw===0x0A))&&(XG<=AtD));var NA=A.abW(this.CI,XG,(AtD-XG)+1);var Apm;
for(Apm=NA.indexOf(String.fromCharCode(0xFEFF),0);Apm>=0;Apm=NA.indexOf(String.fromCharCode(
0xFEFF),Apm+1)){var Xw=Apm+1;while((NA.charCodeAt(Xw)||0)===0xFEFF)Xw=Xw+1;NA=A.
ab1(NA,Apm,Xw-Apm);}return NA;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E6;if(!this.HX)this.XF(this);if(this.CI===A.jV)return E6;var leading=this.
B6.Leading;var AAU=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N3>0
){leading=(this.N3-this.B6.Ascent)-this.B6.Descent;AAU=this.N3;}if(A.aaX(this.Amc
,BD))this.Amc=[this.B6.A6k(this.CI),this.Amc[1]];this.Amc=[this.Amc[0],((this.CI.
charCodeAt(0)||0)*AAU)-leading];var Bu=this.Kg;var Bd=this.M;var AtX=this.Ja;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[AtX,0,width-AtX,height];var B3=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Amc));if(((Bu&0x80)===0x80)){if(
this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xx=
this.AcG;if(Xx<=0)Xx=width-(this.Ja*2);if(Xx<0)Xx=0;if(Xx>(B3[2]-B3[0]))B3=A.abL(
B3,Xx);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B3[3]-B3[1])>(Df[3]-Df[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B3[2]-B3[0])>(Df[
2]-Df[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B3[2]-B3[0])!==(Df[2]-Df[0]
)){if(((Bu&0x4)===0x4))B3=A.abM(B3,Df[2]-(B3[2]-B3[0]));else if(((Bu&0x2)===0x2)
)B3=A.abM(B3,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B3[2]-B3[0])/2)|0));}if((B3[3]-B3[
1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B3=A.abO(B3,Df[3]-(B3[3]-B3[1]));else
if(((Bu&0x100)===0x100))B3=A.abO(B3,((Df[1]+(((Df[3]-Df[1])/2)|0))-(((B3[3]-B3[1
])/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B3=
A.abO(B3,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B3[3]-B3[1])/2)|0));}B3=A.abh(B3,Bd.slice(
0,2));return A.abh(B3,this.Br);},_Init:function(aArg){A.Core.Et._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.La();this.__proto__=A.Core.Et;
A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuF={attrString:null,AttrSet:
null,String:A.jV,Kg:0x12,Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Ci=Ci+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CY.BhE(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ci*255)>>8,(Ci*255)>>8,(Ci*255)>>8,(Ci
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pb],this);}A.Core.Et.H.call(this,E);A.pe([this,this.AiP],this
);},AiP:function(G){},XF:function(G){var B;var ALs;ALs=(B=this.M)[2]-B[0];if(ALs<
0)ALs=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4O
,0);if(!!this.attrString)this.attrString.Bnk(this.AttrSet,this.String,ALs,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiP],this);
},Pb:function(G){A.pe([this,this.XF],this);},Bfl:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A5:function(E){var B;E&=~0x140;if(E===this.
Kg)return;this.Kg=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiP],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pb],this);},A8_:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bfl],this.AttrSet,0);A.z9([this,this.Pb
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bfl],this.AttrSet,0);A.zV([this,this.Pb],this.AttrSet,1);}A.pe([this,this.
Pb],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E6;
if(!this.attrString)this.XF(this);if(!this.attrString)return E6;var Bu=this.Kg;var
C3=this.attrString.BiB();var Df=A.aaT(this.M,BD);var B3=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C3));if(!C3[0]||!C3[1])return E6;if(((Bu&0x80)===0x80)){if(this.
attrString.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B3[2]-B3[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B3=A.abM(B3,Df[2]-(B3[2]-B3[0]));else if(((Bu&0x2
)===0x2))B3=A.abM(B3,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B3[2]-B3[0])/2)|0));}if((B3[
3]-B3[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B3=A.abO(B3,Df[3]-(B3[3]-B3[1])
);else if(((Bu&0x10)===0x10))B3=A.abO(B3,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B3[3]-
B3[1])/2)|0));}return B3;},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);
this.__proto__=C.AuF;this.U=0x3;},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.An5={AiC:
null,FG:null,Aip:0,Aio:0,U4:A.wf,Cj:A.abi(4,3,0,null),AGD:A.wf,Th:0,Apz:0,JS:function(
E){if(A.aaX(E,this.Kv))return;A.Core.Zx.JS.call(this,E);this.Cj.Set(3,0,E[0]);this.
Cj.Set(3,1,E[1]);this.Cj.Set(3,2,1);this.Th=0x45;this.FG=null;A.pe([this,this.Ai9
],this);},Ks:function(E){if(A.aaX(E,this.MC))return;A.Core.Zx.Ks.call(this,E);this.
Cj.Set(2,0,E[0]);this.Cj.Set(2,1,E[1]);this.Cj.Set(2,2,1);this.Th=0x45;this.FG=null;
A.pe([this,this.Ai9],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.Zx.
DC.call(this,E);this.Cj.Set(1,0,E[0]);this.Cj.Set(1,1,E[1]);this.Cj.Set(1,2,1);this.
Th=0x45;this.FG=null;A.pe([this,this.Ai9],this);},DM:function(E){if(A.aaX(E,this.
Es))return;A.Core.Zx.DM.call(this,E);this.Cj.Set(0,0,E[0]);this.Cj.Set(0,1,E[1]);
this.Cj.Set(0,2,1);this.Th=0x45;this.FG=null;A.pe([this,this.Ai9],this);},A05:function(
){return;},Ai9:function(G){var B;this.AiC=null;if(this.Th===0x00)return;if(this.
Th===0x45){var K2=A._NewObject(A.Graphics.AxR,0);K2=K2.ANE(this.Cj.Get(0,0),this.
Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),this.Cj.Get(2,1),
this.Cj.Get(3,0),this.Cj.Get(3,1));if(!!K2){K2.ABU(0,0);this.Cj.Set(0,2,K2.UM*240
);K2.ABU(1,0);this.Cj.Set(1,2,K2.UM*240);K2.ABU(1,1);this.Cj.Set(2,2,K2.UM*240);
K2.ABU(0,1);this.Cj.Set(3,2,K2.UM*240);}this.A05();}if((((this.Th===0x4D)&&!!this.
FG)&&!!this.U4[0])&&!!this.U4[1]){var Ai4=[].concat(BD,this.U4);var Ai3=this.AGD;
var Af3=Ai4[0]-Ai3[0];var Az=Ai4[2]-Ai3[0];var D8=Ai4[1]-Ai3[1];var Ru=Ai4[3]-Ai3[
1];this.FG.Ae9(Af3,D8);this.Cj.Set(0,0,this.FG.P1+this.Aio);this.Cj.Set(0,1,this.
FG.P2+this.Aip);this.Cj.Set(0,2,this.FG.UM);this.FG.Ae9(Az,D8);this.Cj.Set(1,0,this.
FG.P1+this.Aio);this.Cj.Set(1,1,this.FG.P2+this.Aip);this.Cj.Set(1,2,this.FG.UM);
this.FG.Ae9(Az,Ru);this.Cj.Set(2,0,this.FG.P1+this.Aio);this.Cj.Set(2,1,this.FG.
P2+this.Aip);this.Cj.Set(2,2,this.FG.UM);this.FG.Ae9(Af3,Ru);this.Cj.Set(3,0,this.
FG.P1+this.Aio);this.Cj.Set(3,1,this.FG.P2+this.Aip);this.Cj.Set(3,2,this.FG.UM);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Es=[(this.
Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.Get(1,0)+0.5)|0,(
this.Cj.Get(1,1)+0.5)|0];this.MC=[(this.Cj.Get(2,0)+0.5)|0,(this.Cj.Get(2,1)+0.5
)|0];this.Kv=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];this.A05();}this.
Apz=this.Th;this.Th=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},BmS:function(E){if(A.aaX(E,this.AGD))return;this.AGD=E;if((this.Apz!==0x45)&&(
this.Th===0x00)){this.Th=this.Apz;A.pe([this,this.Ai9],this);}},Arg:function(Fg){
var B;if(!!!this.AiC){this.AiC=A._NewObject(A.Graphics.A6T,0);this.AiC.ANE(this.
Cj.Get(0,0),this.Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),
this.Cj.Get(2,1),this.Cj.Get(3,0),this.Cj.Get(3,1));}if(!this.AiC.Ae9(Fg))return BD;
var Ap0=[].concat(BD,this.U4);var Eo=this.AiC.P1*(Ap0[2]-Ap0[0]);var Dg=this.AiC.
P2*(Ap0[3]-Ap0[1]);return A.abf([Eo|0,Dg|0],Ap0.slice(0,2));},A$s:function(Bbo,L6
){var B;this.AiC=null;if(!L6)throw new Error(IS);if(!this.FG)this.FG=A._NewObject(
A.Graphics.AxR,0);this.FG.BgJ(L6);this.Aio=Bbo[0];this.Aip=Bbo[1];this.Apz=0x4D;
this.Th=0x00;if(!this.U4[0]||!this.U4[1])return;var Ai4=[].concat(BD,this.U4);var
Ai3=this.AGD;var Af3=Ai4[0]-Ai3[0];var Az=Ai4[2]-Ai3[0];var D8=Ai4[1]-Ai3[1];var
Ru=Ai4[3]-Ai3[1];this.FG.Ae9(Af3,D8);this.Cj.Set(0,0,this.FG.P1+this.Aio);this.Cj.
Set(0,1,this.FG.P2+this.Aip);this.Cj.Set(0,2,this.FG.UM);this.FG.Ae9(Az,D8);this.
Cj.Set(1,0,this.FG.P1+this.Aio);this.Cj.Set(1,1,this.FG.P2+this.Aip);this.Cj.Set(
1,2,this.FG.UM);this.FG.Ae9(Az,Ru);this.Cj.Set(2,0,this.FG.P1+this.Aio);this.Cj.
Set(2,1,this.FG.P2+this.Aip);this.Cj.Set(2,2,this.FG.UM);this.FG.Ae9(Af3,Ru);this.
Cj.Set(3,0,this.FG.P1+this.Aio);this.Cj.Set(3,1,this.FG.P2+this.Aip);this.Cj.Set(
3,2,this.FG.UM);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Es=[(this.Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.
Get(1,0)+0.5)|0,(this.Cj.Get(1,1)+0.5)|0];this.MC=[(this.Cj.Get(2,0)+0.5)|0,(this.
Cj.Get(2,1)+0.5)|0];this.Kv=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A05();},_Init:
function(aArg){A.Core.Zx._Init.call(this,aArg);(this.Cj=[]).__proto__=C.An5.Cj;this.
__proto__=C.An5;this.U=0x3;},_Mark:function(D){var B;A.Core.Zx._Mark.call(this,D
);if((B=this.AiC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FG)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVm={Ft:null,bitmap:null
,P:null,G7:255,Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nu=aOffset[0];var Nv=aOffset[1];var AE=[].concat(BD,this.
U4);aBlend=aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;var BdO;var BdP;var BdQ;var BdR;
var Bzv=this.G7;BdO=BdP=BdQ=BdR=Bzv;var Alo=255|(255<<8)|(255<<16)|((((Ci*BdO)>>
8)&0xFF)<<24);var Alp=255|(255<<8)|(255<<16)|((((Ci*BdP)>>8)&0xFF)<<24);var BxQ=
255|(255<<8)|(255<<16)|((((Ci*BdQ)>>8)&0xFF)<<24);var BxR=255|(255<<8)|(255<<16)|((((
Ci*BdR)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E6,aOffset));CY.AhQ(aClip,this.bitmap
,0,this.Cj.Get(0,0)+Nu,this.Cj.Get(0,1)+Nv,this.Cj.Get(0,2),this.Cj.Get(1,0)+Nu,
this.Cj.Get(1,1)+Nv,this.Cj.Get(1,2),this.Cj.Get(2,0)+Nu,this.Cj.Get(2,1)+Nv,this.
Cj.Get(2,2),this.Cj.Get(3,0)+Nu,this.Cj.Get(3,1)+Nv,this.Cj.Get(3,2),AE,Alo,Alp,
BxQ,BxR,aBlend,true);},G2:function(CN){if(!this.P||!this.Ft)return null;var BN=(
A.Core.Ad$.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqA.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fv=BD;var BZ=this.Ft.Ab;while(!!BZ&&(BZ!==this.P)){
Fv=A.abe(Fv,BZ.M.slice(0,2));BZ=BZ.Ab;}var X=this.Ft;if(!!BN&&!BN.Down)this.Ft=null;
if(!!BN){BN.H0=A.abf(this.Arg(BN.H0),Fv);BN.NQ=A.abf(this.Arg(BN.NQ),Fv);return X.
G2(BN);}if(!!D4){var Bzz=A.abf(this.Arg(A.abe(D4.H0,D4.DG)),Fv);D4.H0=A.abf(this.
Arg(D4.H0),Fv);D4.NQ=A.abf(this.Arg(D4.NQ),Fv);D4.DG=A.abe(D4.H0,Bzz);return X.G2(
D4);}return C.An5.G2.call(this,CN);},Yc:function(Da,BF,Oc,Aad,Ac0,AcZ){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arg(pos
);var Ap0=[].concat(BD,this.U4);if(!A.wa(Ap0,pos))return null;var JC=this.P.Yc(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BF,Oc,Aad,null
,AcZ);if(!!JC)this.Ft=JC.Ch;else this.Ft=null;if(!!this.Ft)return A._NewObject(A.
Core.AuN,0).Initialize(this,BD);return null;},RF:function(G){var B;var BdS=this.
U4;if(!!this.P)this.bitmap=this.P.FD;else this.bitmap=null;if(!!this.bitmap)this.
U4=this.bitmap.FrameSize;else this.U4=BD;if(((A.aaX(BdS,this.U4)||((this.Apz===0x45
)&&(this.Th===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.Apz!==0x45)&&(this.Th===0x00))&&!A.aaX(BdS,this.U4)){this.Th=this.Apz;
A.pe([this,this.Ai9],this);}},Dj:function(E){var B;if(E===this.G7)return;this.G7=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},BlX:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Ir);if(!!this.P){A.
z9([this,this.RF],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RF
],E,0);this.bitmap=E.FD;}this.RF(this);},Awc:function(){return this.G7;},_Init:function(
aArg){C.An5._Init.call(this,aArg);this.__proto__=C.AVm;},_Mark:function(D){var B;
C.An5._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aek={Hy:null,AQ:0xFFFFFFFF,DG:A.wf
,AOp:false,La:function(){this.A1m();},Kl:function(CY,aClip,aOffset,Ci,aBlend){if(
!this.Hy)return;var DD;var DO;var DI;var DN;var B2=this.AQ;Ci=Ci+1;DD=DO=DI=DN=B2;
if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.
Aek(aClip,this.Hy,A.abh(this.M,aOffset),this.AOp,this.DG,DD,DO,DN,DI,true,true,0
);},A1m:function(){return;},Ai_:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Any:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},BlS:function(E){var B;if(E===this.AOp)return;this.
AOp=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Zr:function(
E){var B;if(E===this.Hy)return;if(!!this.Hy)A.z9([this,this.Ai_],this.Hy,0);this.
Hy=E;if(!!this.Hy)A.zV([this,this.Ai_],this.Hy,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.Aek;},
_Done:function(){this.La();this.__proto__=A.Core.Et;A.Core.Et._Done.call(this);}
,_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.Hy)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hn={Hy:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,La:function(){this.A1m();},Kl:function(CY,aClip,aOffset,Ci,aBlend
){if(!this.Hy)return;var DD;var DO;var DI;var DN;var B2=this.AQ;Ci=Ci+1;DD=DO=DI=
DN=B2;if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CY.Hn(aClip,this.Hy,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1m:function(){return;},Ai_:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.
M);},Any:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Ng:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},Zr:function(E){var B;if(E===this.Hy)return;if(!!this.
Hy)A.z9([this,this.Ai_],this.Hy,0);this.Hy=E;if(!!this.Hy)A.zV([this,this.Ai_],this.
Hy,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(
this,aArg);this.__proto__=C.Hn;},_Done:function(){this.La();this.__proto__=A.Core.
Et;A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.Hy)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BDH={A4v:0x1,A4u:0x2,A4w:0x4,A4z:0x8,A4y:0x10,A4x:0x20,BE0:0x40,BE1:0x80,BE$:
0x100};C.BFe={A4v:0x1,A4u:0x2,A4w:0x4,A4z:0x8,A4y:0x10,A4x:0x20,BCd:0x40,BCc:0x80
,BCi:0x100};C.BEk={Normal:0,BEU:1,BES:2,BET:3};
C._Init=function(){C.C4.__proto__=A.Core.Aka;C.AK.__proto__=A.Core.Et;C.BT.__proto__=
A.Core.Et;C.NO.__proto__=A.Core.Et;C.Ap.__proto__=A.Core.Et;C.Text.__proto__=A.Core.
Et;C.AuF.__proto__=A.Core.Et;C.An5.__proto__=A.Core.Zx;C.AVm.__proto__=C.An5;C.Aek.
__proto__=A.Core.Et;C.Hn.__proto__=A.Core.Et;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */