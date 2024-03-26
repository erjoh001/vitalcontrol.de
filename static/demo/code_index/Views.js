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
C.C4={KF:null,Ak6:1,Ak5:1,AQ:0xFFFFFFFF,Kk:function(CY,aClip,aOffset,Ci,aBlend){var
B;var Agn=this.Ak5;var Ago=this.Ak6;var Adv=A.abf(this.Es,aOffset);var Adw=A.abf(
this.EC,aOffset);var Alo;var Alp;var B3=this.AQ;if(A.aaX(Adv,Adw))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;Alo=Alp=B3;if(Ci<256){Alo=(Alo&0x00FFFFFF)|((((
Ci*((Alo>>24)&0xFF))>>8)&0xFF)<<24);Alp=(Alp&0x00FFFFFF)|((((Ci*((Alp>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agn===1)&&(Ago===1))CY.AuT(aClip,Adv,Adw,Alo,Alp,aBlend);else
CY.BhK(aClip,Adv,Adw,Agn,Ago,Alo,Alp,aBlend);},GetExtent:function(){var Agn=this.
Ak5;var Ago=this.Ak6;var Adv=this.Es;var Adw=this.EC;if(((Agn===1)&&(Ago===1))||
A.aaX(Adv,Adw))return A.Core.Aka.GetExtent.call(this);var Aix=Agn/2;var Aiy=Ago/
2;var Ape=Adv[0];var Apf=Adv[1];var Apg=Adw[0];var Aph=Adw[1];var J6=Apg-Ape;var
J7=Aph-Apf;var IW=Math.sqrt((J6*J6)+(J7*J7));J6=J6/IW;J7=J7/IW;var Bb9=Ape+(J7*Aix
);var Bb_=Apf-(J6*Aix);var AJr=Apg+(J7*Aiy);var AJs=Aph-(J6*Aiy);var AJt=Apg-(J7
*Aiy);var AJu=Aph+(J6*Aiy);var AJv=Ape-(J7*Aix);var AJw=Apf+(J6*Aix);var left=Bb9;
var right=Bb9;var top=Bb_;var bottom=Bb_;if(AJr<left)left=AJr;if(AJt<left)left=AJt;
if(AJv<left)left=AJv;if(AJr>right)right=AJr;if(AJt>right)right=AJt;if(AJv>right)
right=AJv;if(AJs<top)top=AJs;if(AJu<top)top=AJu;if(AJw<top)top=AJw;if(AJs>bottom
)bottom=AJs;if(AJu>bottom)bottom=AJu;if(AJw>bottom)bottom=AJw;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RG:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_h:function(E){var B;if(E<1)E=1;if(E===this.Ak6)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak6=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak5!==1))&&!this.KF){
this.KF=A.aaL(A.aci.AsM);if(this.KF.OK)A.zV([this,this.RG],this.KF,0);}if(((E===
1)&&(this.Ak5===1))&&!!this.KF){if(this.KF.OK)A.z9([this,this.RG],this.KF,0);this.
KF=null;}},A_g:function(E){var B;if(E<1)E=1;if(E===this.Ak5)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak5=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak6!==1))&&!this.
KF){this.KF=A.aaL(A.aci.AsM);if(this.KF.OK)A.zV([this,this.RG],this.KF,0);}if(((
E===1)&&(this.Ak6===1))&&!!this.KF){if(this.KF.OK)A.z9([this,this.RG],this.KF,0);
this.KF=null;}},Ng:function(E){var B;if(E<1)E=1;if((E===this.Ak5)&&(E===this.Ak6
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ak5=E;this.Ak6=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KF){this.KF=A.aaL(A.aci.AsM);if(this.KF.OK)A.zV([this,this.
RG],this.KF,0);}if((E===1)&&!!this.KF){if(this.KF.OK)A.z9([this,this.RG],this.KF
,0);this.KF=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(
aArg){A.Core.Aka._Init.call(this,aArg);this.__proto__=C.C4;},_Mark:function(D){var
B;A.Core.Aka._Mark.call(this,D);if((B=this.KF)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANc:0xFFFFFFFF,ANd:0xFFFFFFFF,ANh:0xFFFFFFFF
,ANg:0xFFFFFFFF,AQ:0xFFFFFFFF,Kk:function(CY,aClip,aOffset,Ci,aBlend){var B;var DD=
this.ANg;var DO=this.ANh;var DI=this.ANc;var DN=this.ANd;var B3=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ci=Ci+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
))DD=DO=DI=DN=B3;else if(B3!==0xFFFFFFFF){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)
*(((B3>>24)&0xFF)+1))>>8)&0xFF)<<24);DD=(DD&0xFFFFFF00)|((((DD&0xFF)*((B3&0xFF)+
1))>>8)&0xFF);DD=(DD&0xFFFF00FF)|((((((DD>>8)&0xFF)*(((B3>>8)&0xFF)+1))>>8)&0xFF
)<<8);DD=(DD&0xFF00FFFF)|((((((DD>>16)&0xFF)*(((B3>>16)&0xFF)+1))>>8)&0xFF)<<16);
DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*(((B3>>24)&0xFF)+1))>>8)&0xFF)<<24);DO=(DO&
0xFFFFFF00)|((((DO&0xFF)*((B3&0xFF)+1))>>8)&0xFF);DO=(DO&0xFFFF00FF)|((((((DO>>8
)&0xFF)*(((B3>>8)&0xFF)+1))>>8)&0xFF)<<8);DO=(DO&0xFF00FFFF)|((((((DO>>16)&0xFF)
*(((B3>>16)&0xFF)+1))>>8)&0xFF)<<16);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*(((B3>>
24)&0xFF)+1))>>8)&0xFF)<<24);DI=(DI&0xFFFFFF00)|((((DI&0xFF)*((B3&0xFF)+1))>>8)&
0xFF);DI=(DI&0xFFFF00FF)|((((((DI>>8)&0xFF)*(((B3>>8)&0xFF)+1))>>8)&0xFF)<<8);DI=(
DI&0xFF00FFFF)|((((((DI>>16)&0xFF)*(((B3>>16)&0xFF)+1))>>8)&0xFF)<<16);DN=(DN&0x00FFFFFF
)|((((((DN>>24)&0xFF)*(((B3>>24)&0xFF)+1))>>8)&0xFF)<<24);DN=(DN&0xFFFFFF00)|((((
DN&0xFF)*((B3&0xFF)+1))>>8)&0xFF);DN=(DN&0xFFFF00FF)|((((((DN>>8)&0xFF)*(((B3>>8
)&0xFF)+1))>>8)&0xFF)<<8);DN=(DN&0xFF00FFFF)|((((((DN>>16)&0xFF)*(((B3>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CY.Au8(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awl:
function(E){var B;if(E===this.ANc)return;this.ANc=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awm:function(E){var B;if(E===this.ANd)return;this.ANd=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Awo:function(E){var B;
if(E===this.ANh)return;this.ANh=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},Awn:function(E){var B;if(E===this.ANg)return;this.ANg=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fo:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kk:function(CY
,aClip,aOffset,Ci,aBlend){var B;var DD;var DO;var DI;var DN;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;DD=DO=DI=DN=B3;if(Ci<256){DD=(DD&0x00FFFFFF
)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ci*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.BhI(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Ng:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(
0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NO={timer:null,Al:null,MM:-1,AQ:0xFFFFFFFF,AuU:
0x1F,TM:0,Dw:0,Ane:A.wf,Vw:false,Kk:function(CY,aClip,aOffset,Ci,aBlend){var B;var
Nr=this.TM;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B3=this.AQ;var Kd=(((Ci+1)*255)>>
8)+1;var Og=this.AuU;var Az=A.abh(this.M,aOffset);var AKT=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Ane);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kd<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kd)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(((this.
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
0xA;}}CY.BhH(aClip,this.Al,Nr,Az,Og,DD,DO,DN,DI,aBlend);},RG:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(G){var B;var Nr=
this.MM;var Tk=0;if(!!this.Al)Tk=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MM<0))&&(Tk>0))this.Dw=this.timer.Bs-(this.TM*this.Al.FrameDelay);if(
!!this.timer&&(Tk>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tk){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tk);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!Tk&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zl:function(E){var B;if(this.Vw===E)return;this.Vw=E;this.MM=-1;if(
!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aed);A.zV([this,this.Me],this.timer,0);A.pe([this,this.
Me],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9v:function(
E){var B;if(E===this.AuU)return;this.AuU=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cu:function(E){var B;if(E<0)E=0;if((E===this.TM)&&(this.MM===-1)
)return;this.TM=E;if(!this.timer)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OK)A.z9([this,this.RG],this.Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OK)A.zV([this,this.
RG],E,0);if(this.Vw){this.Zl(false);this.Zl(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},A9L:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Ane))return;this.Ane=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.AuU&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.
__proto__=C.NO;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dw:0,MM:0,AQ:0xFFFFFFFF
,Kf:0x12,TM:0,G7:255,Vw:false,AaZ:false,Kk:function(CY,aClip,aOffset,Ci,aBlend){
var B;var Nr=this.TM;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C3=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B3=this.AQ;var Kd=(((
Ci+1)*this.G7)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kd<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kd)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C3))CY.A5m(aClip,this.Al,Nr,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CY.BnY(aClip,this.Al,Nr
,A.abh(AE,aOffset),[].concat(BD,C3),DD,DO,DN,DI,aBlend,true);},RG:function(G){var
B;if(((this.AaZ&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(
G){var B;var Nr=this.MM;var Tk=0;if(!!this.Al)Tk=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MM<0))&&(Tk>0))this.Dw=this.timer.Bs-(this.TM*this.Al.FrameDelay
);if(!!this.timer&&(Tk>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tk){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tk);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!Tk&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},I9:function(E
){if(E===this.AaZ)return;this.AaZ=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zl:function(
E){var B;if(this.Vw===E)return;this.Vw=E;this.MM=-1;if(!E&&!!this.timer){A.z9([this
,this.Me],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aed);A.zV([this,this.Me],this.timer,0);A.pe([this,this.Me],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A5:function(E){var B;if(E===this.Kf)return;
this.Kf=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cu:function(E){
var B;if(E<0)E=0;if((E===this.TM)&&(this.MM===-1))return;this.TM=E;if(!this.timer
)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OK)A.z9([this,this.RG],this.
Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OK)A.zV([this,this.RG],E,0);if(this.Vw){this.
Zl(false);this.Zl(true);}if(((this.AaZ&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
Dq:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G7)return;this.G7=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cr(
0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E6;var Bu=this.Kf;var C3=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C3[0]||!C3[1])return E6;var Df=[0,0
,width,height];var B4=Df;if(((Bu&0x40)===0x40)){var A3G=((((Df[2]-Df[0])<<16)+((
C3[0]/2)|0))/C3[0])|0;var AAZ=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var AiW=
A3G;if(AAZ>AiW)AiW=AAZ;B4=A.abL(B4,((C3[0]*AiW)+32768)>>16);B4=A.abI(B4,((C3[1]*
AiW)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3G=((((Df[2]-Df[0])<<16)+((C3[
0]/2)|0))/C3[0])|0;var AAZ=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var AiW=
A3G;if(AAZ<AiW)AiW=AAZ;B4=A.abL(B4,((C3[0]*AiW)+32768)>>16);B4=A.abI(B4,((C3[1]*
AiW)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C3);if((B4[2]-B4[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},Bj5:function(){return this.
AQ;},ASh:function(){return this.TM;},_Init:function(aArg){A.Core.Et._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CI:
A.jV,String:A.jV,Oe:null,Amc:A.wf,Ja:0,N3:0,AcG:0,Br:A.wf,Kf:0x12,AQ:0xFFFFFFFF,
Afv:false,AaZ:false,Yh:false,AN2:false,HX:false,La:function(){if(!!this.Oe){this.
A1M(this.Oe);this.Oe=null;}},Kk:function(CY,aClip,aOffset,Ci,aBlend){var B;if((this.
CI===A.jV)||!this.B6)return;var Bu=this.Kf;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kd=(((Ci+1)*255)>>8)+1;
var Kb=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kb<1)return;DD=DO=DI=DN=col;if(Kd<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kb===1)&&!((Bu&0x40)===
0x40)){CY.A5R(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N3>0)leading=(this.N3-font.
Ascent)-font.Descent;var AaI=(font.Ascent+font.Descent)+leading;var BxX=aClip[1]-
AE[1];var BxY=aClip[3]-AE[1];var A00=AE[2]-AE[0];var Dg=0;var O=1;var B3=this.CI.
charCodeAt(1)||0;while(((Dg+AaI)<BxX)&&(B3>0)){O=O+B3;Dg=Dg+AaI;B3=this.CI.charCodeAt(
O)||0;}while((Dg<BxY)&&(B3>0)){var Ma=A.abe(Bq,[0,Dg]);var Al7=0;var O_=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B3)||0)!==0x00))O_=true;if(O_&&!!(Bu&0x6
)){var ApU=O+B3;var Ay7=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Ay8=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Ay7<0)||(Ay7>=ApU))&&((Ay8<0)||(Ay8>=
ApU)))O_=false;}if(O_)Al7=A00;else if(((Bu&0x4)===0x4))Ma=[(Ma[0]-A00)+font.Ym(this.
CI,O+1,B3-1),Ma[1]];else if(((Bu&0x2)===0x2))Ma=[(Ma[0]-((A00/2)|0))+((font.Ym(this.
CI,O+1,B3-1)/2)|0),Ma[1]];CY.A5R(aClip,font,this.CI,O+1,B3-1,Df,Ma,Al7,0,DD,DO,DN
,DI,true);O=O+B3;Dg=Dg+AaI;B3=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bfs;Bfs=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bfs&&
!this.AcG)&&this.Afv)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HX=false;A.pe([this,this.Pb],this);}if(((this.Yh&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pb],this);}A.Core.Et.H.call(this,E);A.pe([this
,this.AiP],this);},BxP:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BxO:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1M:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bx$:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiP:function(G){A.pe(this.El
,this);},Pb:function(G){A.pe([this,this.XE],this);},XE:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xw=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afv){
if(this.AcG>0)Xw=this.AcG;else if(!this.AaZ)Xw=width-(this.Ja*2);else Xw=width;if(
Xw<0)Xw=1;}if(!!this.Oe){this.A1M(this.Oe);this.Oe=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN2)this.Oe=this.Bx$(length
);this.CI=font.Bnm(this.String,0,Xw,length,this.Oe);if(!!this.Oe&&!this.BiZ()){this.
A1M(this.Oe);this.Oe=null;}}else this.CI=A.jV;this.Amc=BD;if(((this.Yh&&(this.CI
!==A.jV))&&!this.AaZ)&&!!font){var Bu=this.Kf;var leading=font.Leading;var IB=this.
CI;var AKN=this.AjZ();if(((Bu&0x80)===0x80)){if(AKN)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AAU=(font.
Ascent+font.Descent)+leading;var Kb=IB.charCodeAt(0)||0;var AlM=((height+leading
)/AAU)|0;var A1c=false;var AJz=false;if(AlM<=0)AlM=1;if(Kb>AlM){var Bf=0;var AAV=
0;var AKL=Kb-1;var K1;var Ns=IB.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AAV=Kb-AlM;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AAV=((Kb-AlM)/2)|0;AKL=(AAV+AlM)-1;}else
AKL=AlM-1;A1c=AAV>0;AJz=AKL<(Kb-1);for(K1=1;Bf<AAV;Bf=Bf+1)K1=K1+(IB.charCodeAt(
K1)||0);if(AJz)for(Ns=K1;Bf<AKL;Bf=Bf+1)Ns=Ns+(IB.charCodeAt(Ns)||0);if(A1c){var
IW=IB.charCodeAt(K1)||0;tmp=(Hp+A.abW(IB,K1,IW))+Hp;tmp=A.abQ(tmp,0,(IW+2)&0xFFFF
);K1=K1+IW;if((tmp.charCodeAt(IW)||0)===0x0A){tmp=A.abQ(tmp,IW,0xFEFF);tmp=A.abQ(
tmp,IW+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IB,K1,Ns-K1);if(AJz&&(
Ns>=K1)){var IW=IB.charCodeAt(Ns)||0;var Qx=(Hp+A.abW(IB,Ns,IW))+Hp;Qx=A.abQ(Qx,
0,(IW+2)&0xFFFF);Qx=A.abQ(Qx,1,0xFEFF);if((Qx.charCodeAt(IW)||0)===0x0A){Qx=A.abQ(
Qx,IW,0xFEFF);Qx=A.abQ(Qx,IW+1,0x0A);}if((Qx.charCodeAt(2)||0)===0x0A){Qx=A.abQ(
Qx,2,0xFEFF);Qx=A.abQ(Qx,1,0x0A);}else Qx=A.abQ(Qx,1,0xFEFF);tmp=tmp+Qx;}IB=String.
fromCharCode(AlM&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKk=width-(this.Ja*2);if(this.
Afv&&(this.AcG>0))AKk=this.AcG;Kb=IB.charCodeAt(0)||0;for(;Bf<Kb;Bf=Bf+1){var Al4=
A1c&&!Bf;var Al5=AJz&&(Bf===(Kb-1));var Xm=false;var Xn=false;var At_=AKN;if((AKN&&
Al4)&&!Al5){Al4=false;Al5=true;}else if((AKN&&Al5)&&!Al4){Al5=false;Al4=true;}var
XF=inx+1;var IW=IB.charCodeAt(inx)||0;var K1=XF;var Ns=(XF+IW)-2;var A11=-1;var A12=-
1;if(!this.Afv&&(font.Ym(IB,XF,IW-1)>AKk)){var AoQ=Bu;if(((AoQ&0x2)===0x2)&&!!(AoQ&
0x5))AoQ&=~0x2;if(((AoQ&0x2)===0x2))AoQ&=~0x5;if(((AoQ&0x4)===0x4))Xm=true;else if(((
AoQ&0x2)===0x2)){Xm=true;Xn=true;}else Xn=true;}if((IB.charCodeAt(K1)||0)===0x0A
)K1=K1+1;if((IB.charCodeAt(Ns)||0)===0x0A)Ns=Ns-1;while(Xm&&((IB.charCodeAt(K1)||
0)===0xFEFF))K1=K1+1;while(Xn&&((IB.charCodeAt(Ns)||0)===0xFEFF))Ns=Ns-1;Xm=Xm&&
!Al5;Xn=Xn&&!Al4;while((((Xm||Xn)||Al4)||Al5)&&(K1<Ns)){if((Xm&&(At_||!Xn))||Al4
){if(A11>0)IB=A.abQ(IB,A11,0xFEFF);IB=A.abQ(IB,K1,0x2026);A11=K1;K1=K1+1;At_=!At_;
Al4=false;if(font.Ym(IB,XF,IW-1)<=AKk){Xm=false;Xn=false;}else Xm=Xm||!Xn;}if((Xn&&(
!At_||!Xm))||Al5){if(A12>0)IB=A.abQ(IB,A12,0xFEFF);IB=A.abQ(IB,Ns,0x2026);A12=Ns;
Ns=Ns-1;At_=!At_;Al5=false;if(font.Ym(IB,XF,IW-1)<=AKk){Xm=false;Xn=false;}else Xn=
Xn||!Xm;}}inx=inx+IW;}this.Amc=[font.A6l(IB),((IB.charCodeAt(0)||0)*AAU)-leading
];this.CI=IB;}if(this.AaZ&&(this.CI!==A.jV)){var AtW=[this.Ja,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),AtW),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiP],this);},Blu:function(
E){if(E===this.AN2)return;this.AN2=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pb],this);},Hl:function(E){if(E<0)E=0;if(this.Ja===E)return;this.Ja=E;this.CI=A.
jV;this.HX=false;A.pe([this,this.Pb],this);},AwU:function(E){var B;if(E<0)E=0;if(
this.N3===E)return;this.N3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yh){this.CI=A.jV;this.HX=false;A.pe([this,this.Pb],this);}if(this.AaZ&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiP],this);}
,Blt:function(E){if(E===this.Yh)return;this.Yh=E;if(((this.Afv&&!!!this.AcG)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pb],this);},Q3:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcG&&this.Afv)||!!E)||this.Yh)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I9:function(E){if(E===this.AaZ)return;this.AaZ=E;if(E&&this.Yh){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pb],this);}if(E&&this.HX){var AtW=[this.Ja,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),AtW),this.Br));this.U=this.U&~
0x2000;}},Bm6:function(E){if(E<0)E=0;if(E===this.AcG)return;this.AcG=E;if(this.Afv&&
this.HX){this.CI=A.jV;this.HX=false;A.pe([this,this.Pb],this);}if(((!!!E&&this.Afv
)||this.Yh)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KQ:function(
E){if(E===this.Afv)return;this.Afv=E;if(this.HX){this.CI=A.jV;this.HX=false;A.pe([
this,this.Pb],this);}if(((E&&!!!this.AcG)||this.Yh)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gb:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HX)A.pe([this
,this.AiP],this);},A5:function(E){var B;if(E===this.Kf)return;this.Kf=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yh){this.CI=A.jV;this.HX=false;
A.pe([this,this.Pb],this);}if(this.HX)A.pe([this,this.AiP],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pb],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pb],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},AjZ:function(
){if(!this.HX)this.XE(this);if(!this.Oe)return false;var result=false;var bidi=this.
Oe;result=A.v2(bidi);return result;},BiZ:function(){if(!this.HX)this.XE(this);if(
!this.Oe)return false;var result=false;var bidi=this.Oe;result=A.zZ(bidi);return result;
},AGH:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yh)return BD;if(
!this.HX)this.XE(this);if(aIndex<0)aIndex=0;var Bzk=(this.CI.charCodeAt(0)||0)-1;
var Md=this.CI.charCodeAt(1)||0;var inx=1;var Ai1=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<Bzk)&&((inx+Md)<=aIndex)){inx=inx+Md;Bf=Bf+1;Ai1=Ai1+1;
aIndex=aIndex+1;Md=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Md))aIndex=inx+Md;
if(!!this.Oe)aIndex=(inx+this.BxO(this.Oe,(inx+1)-Ai1,(inx+Md)-Ai1,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iw=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iw!==0xFEFF)&&(Iw!==0x0A);}return[col,Bf];},AnK:function(AoF){if(((this.String===
A.jV)||!this.B6)||this.Yh)return 0;if(!this.HX)this.XE(this);var Bf=AoF[1];var col=
AoF[0];var inx=1;var Ai1=2;var Kb=this.CI.charCodeAt(0)||0;var Md=this.CI.charCodeAt(
1)||0;if(Bf>=Kb){Bf=Kb-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Md>0)){inx=inx+Md;Bf=Bf-1;Ai1=Ai1+1;Md=this.CI.charCodeAt(inx)||0;
}var Xv=inx;var AKM=(inx-Ai1)+1;var ApU=(AKM+Md)-1;var AAG=false;while((col>=0)&&(
Md>1)){var Iw=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Md=Md-1;AAG=(Iw===0xFEFF)||(
Iw===0x0A);if(!AAG){col=col-1;Xv=inx;}}if((!AAG&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAG=true;if(AAG)Xv=Xv+1;Xv=Xv-Ai1;if(!!this.Oe)Xv=AKM+this.BxP(
this.Oe,AKM,ApU,Xv-AKM);return Xv;},ATI:function(KY){var B;if((this.String===A.jV
)||!this.B6)return BD;if(!this.HX)this.XE(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B6;var Bu=this.Kf;var Kb=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(KY[1]<AE[1])KY=[KY[0],AE[1]];if(KY[1]>=AE[3])KY=[
KY[0],AE[3]-1];if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AaI=(
font.Ascent+font.Descent)+leading;var Bf=((KY[1]-AE[1])/AaI)|0;var NA=this.ACU(Bf
);var Md=NA.length;var O_=false;if(((Bu&0x80)===0x80)){if(this.AjZ())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kb-1)))O_=true;if((O_&&(
NA.indexOf(String.fromCharCode(0x20),0)<0))&&(NA.indexOf(String.fromCharCode(0xA0
),0)<0))O_=false;if(O_){var inx=1;var ApT=Bf;while(ApT>0){inx=inx+(this.CI.charCodeAt(
inx)||0);ApT=ApT-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))O_=false;}var Al7=0;var Eo=0;if(
O_)Al7=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=(AE[2]-AE[0])-font.Ym(NA,0,Md);else
if(((Bu&0x2)===0x2))Eo=(((AE[2]-AE[0])/2)|0)-((font.Ym(NA,0,Md)/2)|0);var col=font.
BiB(NA,0,Md,(KY[0]-AE[0])-Eo,Al7);if(col<0)col=0;return[col,Bf];},Afc:function(AoF
){var B;if((this.String===A.jV)||!this.B6)return BD;if(!this.HX)this.XE(this);var
Kb=this.CI.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kf;var Bf=AoF[1];var col=
AoF[0];if(Bf>=Kb){Bf=Kb-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NA=this.ACU(
Bf);var Md=NA.length;var AE=this.Db();var O_=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kb-1)))O_=true;if((O_&&(NA.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NA.indexOf(String.fromCharCode(0xA0),0)<0))O_=false;if(O_){var inx=1;var
ApT=Bf;while(ApT>0){inx=inx+(this.CI.charCodeAt(inx)||0);ApT=ApT-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))O_=false;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Al7=0;var Eo=AE[0];if(O_)Al7=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=AE[2]-font.
Ym(NA,0,Md);else if(((Bu&0x2)===0x2))Eo=(Eo+(((AE[2]-AE[0])/2)|0))-((font.Ym(NA,
0,Md)/2)|0);var pos=font.Bix(NA,0,Md,col,Al7);if(pos<0)pos=0;return[Eo+pos,Dg];}
,AOJ:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E6;if(!this.HX)
this.XE(this);var Kb=this.CI.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kb)&&(Ad>0)))return E6;var Bu=this.Kf;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Ja*2);if(((
Bu&0x80)===0x80)){if(this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N3>0)leading=(this.N3-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var Eo=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AAW=(this.CI.charCodeAt(inx)||0)-1;var Bft=font.Ym(this.CI,inx+1,AAW);var A3C=font.
A6w(this.CI,inx+1,AAW);var ApV=Bft;var AaI=font.Ascent+font.Descent;var AA_=(Kb*((
font.Ascent+font.Descent)+leading))-leading;if(!Kb)AA_=AaI;if((((this.CI.charCodeAt((
inx+AAW)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AAW)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var ApU=(inx+1)+AAW;var Ay7=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Ay8=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ay7>=0)&&(Ay7<ApU))||((Ay8>=0)&&(Ay8<ApU)))ApV=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(AA_>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(ApV>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Eo=width-ApV;else if(((Bu&0x2)===0x2))Eo=((width/2)|0)-((
ApV/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-AA_);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((AA_/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((AA_/2)|0);Eo=(Eo+A3C[0])+this.Ja;
ApV=(ApV+(A3C[2]-A3C[0]))-Bft;var B4;{var BeV=[Bd[0]+Eo,Bd[1]+Dg];B4=[].concat(BeV
,A.abf(BeV,[ApV,AaI]));}return A.abh(B4,this.Br);},ACU:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XE(this);var Kb=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kb))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XF=inx;var AtC=inx+(this.CI.charCodeAt(
inx)||0);var Iw=0x00;do{XF=XF+1;Iw=this.CI.charCodeAt(XF)||0;}while(((Iw===0xFEFF
)||(Iw===0x0A))&&(XF<=AtC));do{AtC=AtC-1;Iw=this.CI.charCodeAt(AtC)||0;}while(((
Iw===0xFEFF)||(Iw===0x0A))&&(XF<=AtC));var NA=A.abW(this.CI,XF,(AtC-XF)+1);var Apm;
for(Apm=NA.indexOf(String.fromCharCode(0xFEFF),0);Apm>=0;Apm=NA.indexOf(String.fromCharCode(
0xFEFF),Apm+1)){var Xv=Apm+1;while((NA.charCodeAt(Xv)||0)===0xFEFF)Xv=Xv+1;NA=A.
ab1(NA,Apm,Xv-Apm);}return NA;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E6;if(!this.HX)this.XE(this);if(this.CI===A.jV)return E6;var leading=this.
B6.Leading;var AAU=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N3>0
){leading=(this.N3-this.B6.Ascent)-this.B6.Descent;AAU=this.N3;}if(A.aaX(this.Amc
,BD))this.Amc=[this.B6.A6l(this.CI),this.Amc[1]];this.Amc=[this.Amc[0],((this.CI.
charCodeAt(0)||0)*AAU)-leading];var Bu=this.Kf;var Bd=this.M;var AtW=this.Ja;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[AtW,0,width-AtW,height];var B4=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Amc));if(((Bu&0x80)===0x80)){if(
this.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xw=
this.AcG;if(Xw<=0)Xw=width-(this.Ja*2);if(Xw<0)Xw=0;if(Xw>(B4[2]-B4[0]))B4=A.abL(
B4,Xw);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B4[3]-B4[1])>(Df[3]-Df[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B4[2]-B4[0])>(Df[
2]-Df[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B4[2]-B4[0])!==(Df[2]-Df[0]
)){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2)===0x2)
)B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[3]-B4[
1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1]));else
if(((Bu&0x100)===0x100))B4=A.abO(B4,((Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-B4[1
])/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B4=
A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(
0,2));return A.abh(B4,this.Br);},_Init:function(aArg){A.Core.Et._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.La();this.__proto__=A.Core.Et;
A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuE={attrString:null,AttrSet:
null,String:A.jV,Kf:0x12,Kk:function(CY,aClip,aOffset,Ci,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Ci=Ci+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CY.BhF(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ci*255)>>8,(Ci*255)>>8,(Ci*255)>>8,(Ci
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pb],this);}A.Core.Et.H.call(this,E);A.pe([this,this.AiP],this
);},AiP:function(G){},XE:function(G){var B;var ALs;ALs=(B=this.M)[2]-B[0];if(ALs<
0)ALs=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4P
,0);if(!!this.attrString)this.attrString.Bnl(this.AttrSet,this.String,ALs,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiP],this);
},Pb:function(G){A.pe([this,this.XE],this);},Bfm:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A5:function(E){var B;E&=~0x140;if(E===this.
Kf)return;this.Kf=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiP],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pb],this);},A8$:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bfm],this.AttrSet,0);A.z9([this,this.Pb
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bfm],this.AttrSet,0);A.zV([this,this.Pb],this.AttrSet,1);}A.pe([this,this.
Pb],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E6;
if(!this.attrString)this.XE(this);if(!this.attrString)return E6;var Bu=this.Kf;var
C3=this.attrString.BiC();var Df=A.aaT(this.M,BD);var B4=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C3));if(!C3[0]||!C3[1])return E6;if(((Bu&0x80)===0x80)){if(this.
attrString.AjZ())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);
this.__proto__=C.AuE;this.U=0x3;},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.An5={AiC:
null,FG:null,Aip:0,Aio:0,U4:A.wf,Cj:A.abi(4,3,0,null),AGD:A.wf,Th:0,Apz:0,JR:function(
E){if(A.aaX(E,this.Ku))return;A.Core.Zx.JR.call(this,E);this.Cj.Set(3,0,E[0]);this.
Cj.Set(3,1,E[1]);this.Cj.Set(3,2,1);this.Th=0x45;this.FG=null;A.pe([this,this.Ai9
],this);},Kr:function(E){if(A.aaX(E,this.MC))return;A.Core.Zx.Kr.call(this,E);this.
Cj.Set(2,0,E[0]);this.Cj.Set(2,1,E[1]);this.Cj.Set(2,2,1);this.Th=0x45;this.FG=null;
A.pe([this,this.Ai9],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.Zx.
DC.call(this,E);this.Cj.Set(1,0,E[0]);this.Cj.Set(1,1,E[1]);this.Cj.Set(1,2,1);this.
Th=0x45;this.FG=null;A.pe([this,this.Ai9],this);},DM:function(E){if(A.aaX(E,this.
Es))return;A.Core.Zx.DM.call(this,E);this.Cj.Set(0,0,E[0]);this.Cj.Set(0,1,E[1]);
this.Cj.Set(0,2,1);this.Th=0x45;this.FG=null;A.pe([this,this.Ai9],this);},A06:function(
){return;},Ai9:function(G){var B;this.AiC=null;if(this.Th===0x00)return;if(this.
Th===0x45){var K2=A._NewObject(A.Graphics.AxQ,0);K2=K2.ANE(this.Cj.Get(0,0),this.
Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),this.Cj.Get(2,1),
this.Cj.Get(3,0),this.Cj.Get(3,1));if(!!K2){K2.ABU(0,0);this.Cj.Set(0,2,K2.UM*240
);K2.ABU(1,0);this.Cj.Set(1,2,K2.UM*240);K2.ABU(1,1);this.Cj.Set(2,2,K2.UM*240);
K2.ABU(0,1);this.Cj.Set(3,2,K2.UM*240);}this.A06();}if((((this.Th===0x4D)&&!!this.
FG)&&!!this.U4[0])&&!!this.U4[1]){var Ai4=[].concat(BD,this.U4);var Ai3=this.AGD;
var Af3=Ai4[0]-Ai3[0];var Az=Ai4[2]-Ai3[0];var D8=Ai4[1]-Ai3[1];var Rv=Ai4[3]-Ai3[
1];this.FG.Ae9(Af3,D8);this.Cj.Set(0,0,this.FG.P0+this.Aio);this.Cj.Set(0,1,this.
FG.P1+this.Aip);this.Cj.Set(0,2,this.FG.UM);this.FG.Ae9(Az,D8);this.Cj.Set(1,0,this.
FG.P0+this.Aio);this.Cj.Set(1,1,this.FG.P1+this.Aip);this.Cj.Set(1,2,this.FG.UM);
this.FG.Ae9(Az,Rv);this.Cj.Set(2,0,this.FG.P0+this.Aio);this.Cj.Set(2,1,this.FG.
P1+this.Aip);this.Cj.Set(2,2,this.FG.UM);this.FG.Ae9(Af3,Rv);this.Cj.Set(3,0,this.
FG.P0+this.Aio);this.Cj.Set(3,1,this.FG.P1+this.Aip);this.Cj.Set(3,2,this.FG.UM);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Es=[(this.
Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.Get(1,0)+0.5)|0,(
this.Cj.Get(1,1)+0.5)|0];this.MC=[(this.Cj.Get(2,0)+0.5)|0,(this.Cj.Get(2,1)+0.5
)|0];this.Ku=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];this.A06();}this.
Apz=this.Th;this.Th=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},BmT:function(E){if(A.aaX(E,this.AGD))return;this.AGD=E;if((this.Apz!==0x45)&&(
this.Th===0x00)){this.Th=this.Apz;A.pe([this,this.Ai9],this);}},Arg:function(Fg){
var B;if(!!!this.AiC){this.AiC=A._NewObject(A.Graphics.A6U,0);this.AiC.ANE(this.
Cj.Get(0,0),this.Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),
this.Cj.Get(2,1),this.Cj.Get(3,0),this.Cj.Get(3,1));}if(!this.AiC.Ae9(Fg))return BD;
var Ap0=[].concat(BD,this.U4);var Eo=this.AiC.P0*(Ap0[2]-Ap0[0]);var Dg=this.AiC.
P1*(Ap0[3]-Ap0[1]);return A.abf([Eo|0,Dg|0],Ap0.slice(0,2));},A$t:function(Bbp,L6
){var B;this.AiC=null;if(!L6)throw new Error(IS);if(!this.FG)this.FG=A._NewObject(
A.Graphics.AxQ,0);this.FG.BgK(L6);this.Aio=Bbp[0];this.Aip=Bbp[1];this.Apz=0x4D;
this.Th=0x00;if(!this.U4[0]||!this.U4[1])return;var Ai4=[].concat(BD,this.U4);var
Ai3=this.AGD;var Af3=Ai4[0]-Ai3[0];var Az=Ai4[2]-Ai3[0];var D8=Ai4[1]-Ai3[1];var
Rv=Ai4[3]-Ai3[1];this.FG.Ae9(Af3,D8);this.Cj.Set(0,0,this.FG.P0+this.Aio);this.Cj.
Set(0,1,this.FG.P1+this.Aip);this.Cj.Set(0,2,this.FG.UM);this.FG.Ae9(Az,D8);this.
Cj.Set(1,0,this.FG.P0+this.Aio);this.Cj.Set(1,1,this.FG.P1+this.Aip);this.Cj.Set(
1,2,this.FG.UM);this.FG.Ae9(Az,Rv);this.Cj.Set(2,0,this.FG.P0+this.Aio);this.Cj.
Set(2,1,this.FG.P1+this.Aip);this.Cj.Set(2,2,this.FG.UM);this.FG.Ae9(Af3,Rv);this.
Cj.Set(3,0,this.FG.P0+this.Aio);this.Cj.Set(3,1,this.FG.P1+this.Aip);this.Cj.Set(
3,2,this.FG.UM);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Es=[(this.Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.
Get(1,0)+0.5)|0,(this.Cj.Get(1,1)+0.5)|0];this.MC=[(this.Cj.Get(2,0)+0.5)|0,(this.
Cj.Get(2,1)+0.5)|0];this.Ku=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A06();},_Init:
function(aArg){A.Core.Zx._Init.call(this,aArg);(this.Cj=[]).__proto__=C.An5.Cj;this.
__proto__=C.An5;this.U=0x3;},_Mark:function(D){var B;A.Core.Zx._Mark.call(this,D
);if((B=this.AiC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FG)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVn={Ft:null,bitmap:null
,P:null,G7:255,Kk:function(CY,aClip,aOffset,Ci,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nu=aOffset[0];var Nv=aOffset[1];var AE=[].concat(BD,this.
U4);aBlend=aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;var BdP;var BdQ;var BdR;var BdS;
var Bzv=this.G7;BdP=BdQ=BdR=BdS=Bzv;var Alo=255|(255<<8)|(255<<16)|((((Ci*BdP)>>
8)&0xFF)<<24);var Alp=255|(255<<8)|(255<<16)|((((Ci*BdQ)>>8)&0xFF)<<24);var BxQ=
255|(255<<8)|(255<<16)|((((Ci*BdR)>>8)&0xFF)<<24);var BxR=255|(255<<8)|(255<<16)|((((
Ci*BdS)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E6,aOffset));CY.AhQ(aClip,this.bitmap
,0,this.Cj.Get(0,0)+Nu,this.Cj.Get(0,1)+Nv,this.Cj.Get(0,2),this.Cj.Get(1,0)+Nu,
this.Cj.Get(1,1)+Nv,this.Cj.Get(1,2),this.Cj.Get(2,0)+Nu,this.Cj.Get(2,1)+Nv,this.
Cj.Get(2,2),this.Cj.Get(3,0)+Nu,this.Cj.Get(3,1)+Nv,this.Cj.Get(3,2),AE,Alo,Alp,
BxQ,BxR,aBlend,true);},G2:function(CN){if(!this.P||!this.Ft)return null;var BN=(
A.Core.Ad$.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqA.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fv=BD;var B0=this.Ft.Ab;while(!!B0&&(B0!==this.P)){
Fv=A.abe(Fv,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Ft;if(!!BN&&!BN.Down)this.Ft=null;
if(!!BN){BN.H0=A.abf(this.Arg(BN.H0),Fv);BN.NQ=A.abf(this.Arg(BN.NQ),Fv);return X.
G2(BN);}if(!!D4){var Bzz=A.abf(this.Arg(A.abe(D4.H0,D4.DG)),Fv);D4.H0=A.abf(this.
Arg(D4.H0),Fv);D4.NQ=A.abf(this.Arg(D4.NQ),Fv);D4.DG=A.abe(D4.H0,Bzz);return X.G2(
D4);}return C.An5.G2.call(this,CN);},Yc:function(Da,BF,Oc,Aae,Ac0,AcZ){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arg(pos
);var Ap0=[].concat(BD,this.U4);if(!A.wa(Ap0,pos))return null;var JB=this.P.Yc(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BF,Oc,Aae,null
,AcZ);if(!!JB)this.Ft=JB.Ch;else this.Ft=null;if(!!this.Ft)return A._NewObject(A.
Core.AuM,0).Initialize(this,BD);return null;},RG:function(G){var B;var BdT=this.
U4;if(!!this.P)this.bitmap=this.P.FD;else this.bitmap=null;if(!!this.bitmap)this.
U4=this.bitmap.FrameSize;else this.U4=BD;if(((A.aaX(BdT,this.U4)||((this.Apz===0x45
)&&(this.Th===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.Apz!==0x45)&&(this.Th===0x00))&&!A.aaX(BdT,this.U4)){this.Th=this.Apz;
A.pe([this,this.Ai9],this);}},Dq:function(E){var B;if(E===this.G7)return;this.G7=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},BlY:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Ir);if(!!this.P){A.
z9([this,this.RG],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RG
],E,0);this.bitmap=E.FD;}this.RG(this);},Awb:function(){return this.G7;},_Init:function(
aArg){C.An5._Init.call(this,aArg);this.__proto__=C.AVn;},_Mark:function(D){var B;
C.An5._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aek={Hy:null,AQ:0xFFFFFFFF,DG:A.wf
,AOq:false,La:function(){this.A1n();},Kk:function(CY,aClip,aOffset,Ci,aBlend){if(
!this.Hy)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ci=Ci+1;DD=DO=DI=DN=B3;
if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.
Aek(aClip,this.Hy,A.abh(this.M,aOffset),this.AOq,this.DG,DD,DO,DN,DI,true,true,0
);},A1n:function(){return;},Ai_:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Any:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},BlT:function(E){var B;if(E===this.AOq)return;this.
AOq=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Zr:function(
E){var B;if(E===this.Hy)return;if(!!this.Hy)A.z9([this,this.Ai_],this.Hy,0);this.
Hy=E;if(!!this.Hy)A.zV([this,this.Ai_],this.Hy,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.Aek;},
_Done:function(){this.La();this.__proto__=A.Core.Et;A.Core.Et._Done.call(this);}
,_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.Hy)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hn={Hy:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,La:function(){this.A1n();},Kk:function(CY,aClip,aOffset,Ci,aBlend
){if(!this.Hy)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ci=Ci+1;DD=DO=DI=
DN=B3;if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CY.Hn(aClip,this.Hy,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1n:function(){return;},Ai_:function(G){var B;if(!!this.
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
};C.BDH={A4w:0x1,A4v:0x2,A4x:0x4,A4A:0x8,A4z:0x10,A4y:0x20,BE0:0x40,BE1:0x80,BE$:
0x100};C.BFe={A4w:0x1,A4v:0x2,A4x:0x4,A4A:0x8,A4z:0x10,A4y:0x20,BCd:0x40,BCc:0x80
,BCi:0x100};C.BEk={Normal:0,BEU:1,BES:2,BET:3};
C._Init=function(){C.C4.__proto__=A.Core.Aka;C.AK.__proto__=A.Core.Et;C.BU.__proto__=
A.Core.Et;C.NO.__proto__=A.Core.Et;C.Ap.__proto__=A.Core.Et;C.Text.__proto__=A.Core.
Et;C.AuE.__proto__=A.Core.Et;C.An5.__proto__=A.Core.Zx;C.AVn.__proto__=C.An5;C.Aek.
__proto__=A.Core.Et;C.Hn.__proto__=A.Core.Et;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */