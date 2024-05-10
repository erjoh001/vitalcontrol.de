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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acg)throw new Error("The unit file 'Views.js' included twice!");index.
acg=(function(){var A=index;var C={};
var Ce=[1,1];var BD=[0,0];var E7=[0,0,0,0];var Hr="\uFEFF";var IV="No matrix to perform 3D transformation";
var Is="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C8={KL:null,Alb:1,Ala:1,AQ:0xFFFFFFFF,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var
B;var Agt=this.Ala;var Agu=this.Alb;var AdB=A.abf(this.Et,aOffset);var AdC=A.abf(
this.ED,aOffset);var Aly;var Alz;var B4=this.AQ;if(A.aaX(AdB,AdC))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;Aly=Alz=B4;if(Ck<256){Aly=(Aly&0x00FFFFFF)|((((
Ck*((Aly>>24)&0xFF))>>8)&0xFF)<<24);Alz=(Alz&0x00FFFFFF)|((((Ck*((Alz>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agt===1)&&(Agu===1))CZ.Au$(aClip,AdB,AdC,Aly,Alz,aBlend);else
CZ.BiP(aClip,AdB,AdC,Agt,Agu,Aly,Alz,aBlend);},GetExtent:function(){var Agt=this.
Ala;var Agu=this.Alb;var AdB=this.Et;var AdC=this.ED;if(((Agt===1)&&(Agu===1))||
A.aaX(AdB,AdC))return A.Core.Akh.GetExtent.call(this);var AiD=Agt/2;var AiE=Agu/
2;var Apn=AdB[0];var Apo=AdB[1];var App=AdC[0];var Apq=AdC[1];var Kb=App-Apn;var
Kc=Apq-Apo;var I0=Math.sqrt((Kb*Kb)+(Kc*Kc));Kb=Kb/I0;Kc=Kc/I0;var Bc6=Apn+(Kc*AiD
);var Bc7=Apo-(Kb*AiD);var AJG=App+(Kc*AiE);var AJH=Apq-(Kb*AiE);var AJI=App-(Kc
*AiE);var AJJ=Apq+(Kb*AiE);var AJK=Apn-(Kc*AiD);var AJL=Apo+(Kb*AiD);var left=Bc6;
var right=Bc6;var top=Bc7;var bottom=Bc7;if(AJG<left)left=AJG;if(AJI<left)left=AJI;
if(AJK<left)left=AJK;if(AJG>right)right=AJG;if(AJI>right)right=AJI;if(AJK>right)
right=AJK;if(AJH<top)top=AJH;if(AJJ<top)top=AJJ;if(AJL<top)top=AJL;if(AJH>bottom
)bottom=AJH;if(AJJ>bottom)bottom=AJJ;if(AJL>bottom)bottom=AJL;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Ce));return Az;
},RL:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_6:function(E){var B;if(E<1)E=1;if(E===this.Alb)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alb=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ala!==1))&&!this.KL){
this.KL=A.aaL(A.aci.AsY);if(this.KL.N2)A.zV([this,this.RL],this.KL,0);}if(((E===
1)&&(this.Ala===1))&&!!this.KL){if(this.KL.N2)A.z9([this,this.RL],this.KL,0);this.
KL=null;}},A_5:function(E){var B;if(E<1)E=1;if(E===this.Ala)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ala=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alb!==1))&&!this.
KL){this.KL=A.aaL(A.aci.AsY);if(this.KL.N2)A.zV([this,this.RL],this.KL,0);}if(((
E===1)&&(this.Alb===1))&&!!this.KL){if(this.KL.N2)A.z9([this,this.RL],this.KL,0);
this.KL=null;}},Nn:function(E){var B;if(E<1)E=1;if((E===this.Ala)&&(E===this.Alb
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ala=E;this.Alb=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KL){this.KL=A.aaL(A.aci.AsY);if(this.KL.N2)A.zV([this,this.
RL],this.KL,0);}if((E===1)&&!!this.KL){if(this.KL.N2)A.z9([this,this.RL],this.KL
,0);this.KL=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.Akh._Init.call(this,aArg);this.__proto__=C.C8;},_Mark:function(D){var
B;A.Core.Akh._Mark.call(this,D);if((B=this.KL)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANs:0xFFFFFFFF,ANt:0xFFFFFFFF,ANx:0xFFFFFFFF
,ANw:0xFFFFFFFF,AQ:0xFFFFFFFF,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var DD=
this.ANw;var DO=this.ANx;var DI=this.ANs;var DN=this.ANt;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ck=Ck+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
))DD=DO=DI=DN=B4;else if(B4!==0xFFFFFFFF){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)
*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DD=(DD&0xFFFFFF00)|((((DD&0xFF)*((B4&0xFF)+
1))>>8)&0xFF);DD=(DD&0xFFFF00FF)|((((((DD>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF
)<<8);DD=(DD&0xFF00FFFF)|((((((DD>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);
DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DO=(DO&
0xFFFFFF00)|((((DO&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DO=(DO&0xFFFF00FF)|((((((DO>>8
)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DO=(DO&0xFF00FFFF)|((((((DO>>16)&0xFF)
*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*(((B4>>
24)&0xFF)+1))>>8)&0xFF)<<24);DI=(DI&0xFFFFFF00)|((((DI&0xFF)*((B4&0xFF)+1))>>8)&
0xFF);DI=(DI&0xFFFF00FF)|((((((DI>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DI=(
DI&0xFF00FFFF)|((((((DI>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DN=(DN&0x00FFFFFF
)|((((((DN>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DN=(DN&0xFFFFFF00)|((((
DN&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DN=(DN&0xFFFF00FF)|((((((DN>>8)&0xFF)*(((B4>>8
)&0xFF)+1))>>8)&0xFF)<<8);DN=(DN&0xFF00FFFF)|((((((DN>>16)&0xFF)*(((B4>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Ck*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CZ.Avo(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},AwA:
function(E){var B;if(E===this.ANs)return;this.ANs=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},AwB:function(E){var B;if(E===this.ANt)return;this.ANt=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},AwD:function(E){var B;
if(E===this.ANx)return;this.ANx=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},AwC:function(E){var B;if(E===this.ANw)return;this.ANw=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fq:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kq:function(CZ
,aClip,aOffset,Ck,aBlend){var B;var DD;var DO;var DI;var DN;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DD=DO=DI=DN=B4;if(Ck<256){DD=(DD&0x00FFFFFF
)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.BiN(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Nn:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NU={timer:null,Al:null,MR:-1,AQ:0xFFFFFFFF,Ava:
0x1F,TX:0,Dx:0,Anm:A.wf,VC:false,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var
Nx=this.TX;if(this.MR>=0)Nx=this.MR;if(!this.Al||(Nx>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B4=this.AQ;var Kj=(((Ck+1)*255)>>
8)+1;var Om=this.Ava;var Az=A.abh(this.M,aOffset);var AK8=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anm);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B4;if(Kj<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kj)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}if(((this.
Anm[0]>0)&&(AK8[0]>0))&&!((Om&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK8[
0];if(((Om&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Om=Om|0x4;}else if(((Om&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Om=Om|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Om=Om|0x5;}}if(((this.Anm[1]>0)&&(AK8[1]>0))&&!((Om&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK8[1];if(((Om&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Om=Om|0x8;}else if(((Om&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Om=Om|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Om=Om|
0xA;}}CZ.BiM(aClip,this.Al,Nx,Az,Om,DD,DO,DN,DI,aBlend);},RL:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mi:function(G){var B;var Nx=
this.MR;var Tt=0;if(!!this.Al)Tt=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MR<0))&&(Tt>0))this.Dx=this.timer.Bs-(this.TX*this.Al.FrameDelay);if(
!!this.timer&&(Tt>0)){var Av=(this.timer.Bs-this.Dx)|0;Nx=(Av/this.Al.FrameDelay
)|0;if(Av>=Tt){Nx=Nx%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tt);}}if(((Nx!==
this.MR)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MR=Nx;if(!Tt&&
!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zr:function(E){var B;if(this.VC===E)return;this.VC=E;this.MR=-1;if(
!E&&!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mi],this.timer,0);A.pe([this,this.
Mi],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A_f:function(
E){var B;if(E===this.Ava)return;this.Ava=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TX)&&(this.MR===-1)
)return;this.TX=E;if(!this.timer)this.MR=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N2)A.z9([this,this.RL],this.Al,0);this.Al=E;this.MR=-1;if(!!E&&E.N2)A.zV([this,this.
RL],E,0);if(this.VC){this.Zr(false);this.Zr(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A_v:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anm))return;this.Anm=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Ava&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NU;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MR:0,AQ:0xFFFFFFFF
,Kl:0x12,TX:0,G9:255,VC:false,Aa5:false,Kq:function(CZ,aClip,aOffset,Ck,aBlend){
var B;var Nx=this.TX;if(this.MR>=0)Nx=this.MR;if(!this.Al||(Nx>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dd();var C6=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B4=this.AQ;var Kj=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B4;if(Kj<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kj)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C6))CZ.A58(aClip,this.Al,Nx,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CZ.Bo_(aClip,this.Al,Nx
,A.abh(AE,aOffset),[].concat(BD,C6),DD,DO,DN,DI,aBlend,true);},RL:function(G){var
B;if(((this.Aa5&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mi:function(
G){var B;var Nx=this.MR;var Tt=0;if(!!this.Al)Tt=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MR<0))&&(Tt>0))this.Dx=this.timer.Bs-(this.TX*this.Al.FrameDelay
);if(!!this.timer&&(Tt>0)){var Av=(this.timer.Bs-this.Dx)|0;Nx=(Av/this.Al.FrameDelay
)|0;if(Av>=Tt){Nx=Nx%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tt);}}if(((Nx!==
this.MR)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MR=Nx;if(!Tt&&
!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;}},Jb:function(E
){if(E===this.Aa5)return;this.Aa5=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dd());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zr:function(
E){var B;if(this.VC===E)return;this.VC=E;this.MR=-1;if(!E&&!!this.timer){A.z9([this
,this.Mi],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aej);A.zV([this,this.Mi],this.timer,0);A.pe([this,this.Mi],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kl)return;
this.Kl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TX)&&(this.MR===-1))return;this.TX=E;if(!this.timer
)this.MR=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N2)A.z9([this,this.RL],this.
Al,0);this.Al=E;this.MR=-1;if(!!E&&E.N2)A.zV([this,this.RL],E,0);if(this.VC){this.
Zr(false);this.Zr(true);}if(((this.Aa5&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
C4:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Dd:function(){var
B;if(!this.Al)return E7;var Bu=this.Kl;var C6=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C6[0]||!C6[1])return E7;var Dh=[0,0
,width,height];var B5=Dh;if(((Bu&0x40)===0x40)){var A4o=((((Dh[2]-Dh[0])<<16)+((
C6[0]/2)|0))/C6[0])|0;var ABc=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai2=
A4o;if(ABc>Ai2)Ai2=ABc;B5=A.abL(B5,((C6[0]*Ai2)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai2)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4o=((((Dh[2]-Dh[0])<<16)+((C6[
0]/2)|0))/C6[0])|0;var ABc=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai2=
A4o;if(ABc<Ai2)Ai2=ABc;B5=A.abL(B5,((C6[0]*Ai2)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai2)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C6);if((B5[2]-B5[0])
!==(Dh[2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},Bk$:function(){return this.
AQ;},ASJ:function(){return this.TX;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,Em:null,CI:
A.jV,String:A.jV,Oj:null,Aml:A.wf,Je:0,N8:0,AcM:0,Br:A.wf,Kl:0x12,AQ:0xFFFFFFFF,
AfA:false,Aa5:false,Yo:false,AOf:false,HY:false,Le:function(){if(!!this.Oj){this.
A2s(this.Oj);this.Oj=null;}},Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;if((this.
CI===A.jV)||!this.B7)return;var Bu=this.Kl;var font=this.B7;var Dh=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kj=(((Ck+1)*255)>>8)+1;
var Ki=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Dd(),aOffset);var Bq=[Dh[0]-AE[
0],(Dh[1]-AE[1])-font.Ascent];if(Ki<1)return;DD=DO=DI=DN=col;if(Kj<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kj)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Ki===1)&&!((Bu&0x40)===
0x40)){CZ.A6w(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Dh,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N8>0)leading=(this.N8-font.
Ascent)-font.Descent;var AaN=(font.Ascent+font.Descent)+leading;var By0=aClip[1]-
AE[1];var By1=aClip[3]-AE[1];var A1G=AE[2]-AE[0];var Di=0;var O=1;var B4=this.CI.
charCodeAt(1)||0;while(((Di+AaN)<By0)&&(B4>0)){O=O+B4;Di=Di+AaN;B4=this.CI.charCodeAt(
O)||0;}while((Di<By1)&&(B4>0)){var Me=A.abe(Bq,[0,Di]);var Ame=0;var Pe=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B4)||0)!==0x00))Pe=true;if(Pe&&!!(Bu&0x6
)){var Ap3=O+B4;var Azk=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azl=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Azk<0)||(Azk>=Ap3))&&((Azl<0)||(Azl>=
Ap3)))Pe=false;}if(Pe)Ame=A1G;else if(((Bu&0x4)===0x4))Me=[(Me[0]-A1G)+font.Yt(this.
CI,O+1,B4-1),Me[1]];else if(((Bu&0x2)===0x2))Me=[(Me[0]-((A1G/2)|0))+((font.Yt(this.
CI,O+1,B4-1)/2)|0),Me[1]];CZ.A6w(aClip,font,this.CI,O+1,B4-1,Dh,Me,Ame,0,DD,DO,DN
,DI,true);O=O+B4;Di=Di+AaN;B4=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bgo;Bgo=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bgo&&
!this.AcM)&&this.AfA)&&this.HY)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HY=false;A.pe([this,this.Pg],this);}if(((this.Yo&&this.HY)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HY=false;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiV],this);},ByS:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},ByR:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2s:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzc:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiV:function(G){A.pe(this.Em
,this);},Pg:function(G){A.pe([this,this.XM],this);},XM:function(G){var B;if(this.
HY)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XE=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfA){
if(this.AcM>0)XE=this.AcM;else if(!this.Aa5)XE=width-(this.Je*2);else XE=width;if(
XE<0)XE=1;}if(!!this.Oj){this.A2s(this.Oj);this.Oj=null;}this.HY=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOf)this.Oj=this.Bzc(length
);this.CI=font.Bow(this.String,0,XE,length,this.Oj);if(!!this.Oj&&!this.Bj3()){this.
A2s(this.Oj);this.Oj=null;}}else this.CI=A.jV;this.Aml=BD;if(((this.Yo&&(this.CI
!==A.jV))&&!this.Aa5)&&!!font){var Bu=this.Kl;var leading=font.Leading;var IE=this.
CI;var AK2=this.Aj6();if(((Bu&0x80)===0x80)){if(AK2)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N8>0)leading=(this.N8-font.Ascent)-font.Descent;var AA9=(font.
Ascent+font.Descent)+leading;var Ki=IE.charCodeAt(0)||0;var AlW=((height+leading
)/AA9)|0;var A1U=false;var AJO=false;if(AlW<=0)AlW=1;if(Ki>AlW){var Bf=0;var AA_=
0;var AK0=Ki-1;var K5;var Ny=IE.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AA_=Ki-AlW;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AA_=((Ki-AlW)/2)|0;AK0=(AA_+AlW)-1;}else
AK0=AlW-1;A1U=AA_>0;AJO=AK0<(Ki-1);for(K5=1;Bf<AA_;Bf=Bf+1)K5=K5+(IE.charCodeAt(
K5)||0);if(AJO)for(Ny=K5;Bf<AK0;Bf=Bf+1)Ny=Ny+(IE.charCodeAt(Ny)||0);if(A1U){var
I0=IE.charCodeAt(K5)||0;tmp=(Hr+A.abW(IE,K5,I0))+Hr;tmp=A.abQ(tmp,0,(I0+2)&0xFFFF
);K5=K5+I0;if((tmp.charCodeAt(I0)||0)===0x0A){tmp=A.abQ(tmp,I0,0xFEFF);tmp=A.abQ(
tmp,I0+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IE,K5,Ny-K5);if(AJO&&(
Ny>=K5)){var I0=IE.charCodeAt(Ny)||0;var QC=(Hr+A.abW(IE,Ny,I0))+Hr;QC=A.abQ(QC,
0,(I0+2)&0xFFFF);QC=A.abQ(QC,1,0xFEFF);if((QC.charCodeAt(I0)||0)===0x0A){QC=A.abQ(
QC,I0,0xFEFF);QC=A.abQ(QC,I0+1,0x0A);}if((QC.charCodeAt(2)||0)===0x0A){QC=A.abQ(
QC,2,0xFEFF);QC=A.abQ(QC,1,0x0A);}else QC=A.abQ(QC,1,0xFEFF);tmp=tmp+QC;}IE=String.
fromCharCode(AlW&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKz=width-(this.Je*2);if(this.
AfA&&(this.AcM>0))AKz=this.AcM;Ki=IE.charCodeAt(0)||0;for(;Bf<Ki;Bf=Bf+1){var Amb=
A1U&&!Bf;var Amc=AJO&&(Bf===(Ki-1));var Xu=false;var Xv=false;var Aup=AK2;if((AK2&&
Amb)&&!Amc){Amb=false;Amc=true;}else if((AK2&&Amc)&&!Amb){Amc=false;Amb=true;}var
XN=inx+1;var I0=IE.charCodeAt(inx)||0;var K5=XN;var Ny=(XN+I0)-2;var A2H=-1;var A2I=-
1;if(!this.AfA&&(font.Yt(IE,XN,I0-1)>AKz)){var AoZ=Bu;if(((AoZ&0x2)===0x2)&&!!(AoZ&
0x5))AoZ&=~0x2;if(((AoZ&0x2)===0x2))AoZ&=~0x5;if(((AoZ&0x4)===0x4))Xu=true;else if(((
AoZ&0x2)===0x2)){Xu=true;Xv=true;}else Xv=true;}if((IE.charCodeAt(K5)||0)===0x0A
)K5=K5+1;if((IE.charCodeAt(Ny)||0)===0x0A)Ny=Ny-1;while(Xu&&((IE.charCodeAt(K5)||
0)===0xFEFF))K5=K5+1;while(Xv&&((IE.charCodeAt(Ny)||0)===0xFEFF))Ny=Ny-1;Xu=Xu&&
!Amc;Xv=Xv&&!Amb;while((((Xu||Xv)||Amb)||Amc)&&(K5<Ny)){if((Xu&&(Aup||!Xv))||Amb
){if(A2H>0)IE=A.abQ(IE,A2H,0xFEFF);IE=A.abQ(IE,K5,0x2026);A2H=K5;K5=K5+1;Aup=!Aup;
Amb=false;if(font.Yt(IE,XN,I0-1)<=AKz){Xu=false;Xv=false;}else Xu=Xu||!Xv;}if((Xv&&(
!Aup||!Xu))||Amc){if(A2I>0)IE=A.abQ(IE,A2I,0xFEFF);IE=A.abQ(IE,Ny,0x2026);A2I=Ny;
Ny=Ny-1;Aup=!Aup;Amc=false;if(font.Yt(IE,XN,I0-1)<=AKz){Xu=false;Xv=false;}else Xv=
Xv||!Xu;}}inx=inx+I0;}this.Aml=[font.A63(IE),((IE.charCodeAt(0)||0)*AA9)-leading
];this.CI=IE;}if(this.Aa5&&(this.CI!==A.jV)){var Aub=[this.Je,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dd(),Aub),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);},BmD:function(
E){if(E===this.AOf)return;this.AOf=E;this.CI=A.jV;this.HY=false;A.pe([this,this.
Pg],this);},Hn:function(E){if(E<0)E=0;if(this.Je===E)return;this.Je=E;this.CI=A.
jV;this.HY=false;A.pe([this,this.Pg],this);},Aw9:function(E){var B;if(E<0)E=0;if(
this.N8===E)return;this.N8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yo){this.CI=A.jV;this.HY=false;A.pe([this,this.Pg],this);}if(this.Aa5&&
this.HY)this.H(A.abg(this.Dd(),this.Br));if(this.HY)A.pe([this,this.AiV],this);}
,BmC:function(E){if(E===this.Yo)return;this.Yo=E;if(((this.AfA&&!!!this.AcM)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HY=false;
A.pe([this,this.Pg],this);},Q7:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcM&&this.AfA)||!!E)||this.Yo)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Jb:function(E){if(E===this.Aa5)return;this.Aa5=E;if(E&&this.Yo){this.CI=
A.jV;this.HY=false;A.pe([this,this.Pg],this);}if(E&&this.HY){var Aub=[this.Je,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dd(),Aub),this.Br));this.U=this.U&~
0x2000;}},Bod:function(E){if(E<0)E=0;if(E===this.AcM)return;this.AcM=E;if(this.AfA&&
this.HY){this.CI=A.jV;this.HY=false;A.pe([this,this.Pg],this);}if(((!!!E&&this.AfA
)||this.Yo)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},KU:function(
E){if(E===this.AfA)return;this.AfA=E;if(this.HY){this.CI=A.jV;this.HY=false;A.pe([
this,this.Pg],this);}if(((E&&!!!this.AcM)||this.Yo)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gb:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HY)A.pe([this
,this.AiV],this);},A6:function(E){var B;if(E===this.Kl)return;this.Kl=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yo){this.CI=A.jV;this.HY=false;
A.pe([this,this.Pg],this);}if(this.HY)A.pe([this,this.AiV],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HY=false;A.pe([this,this.
Pg],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CI=A.jV;this.HY=false;
A.pe([this,this.Pg],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj6:function(
){if(!this.HY)this.XM(this);if(!this.Oj)return false;var result=false;var bidi=this.
Oj;result=A.v2(bidi);return result;},Bj3:function(){if(!this.HY)this.XM(this);if(
!this.Oj)return false;var result=false;var bidi=this.Oj;result=A.zZ(bidi);return result;
},AG0:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Yo)return BD;if(
!this.HY)this.XM(this);if(aIndex<0)aIndex=0;var BAp=(this.CI.charCodeAt(0)||0)-1;
var Mh=this.CI.charCodeAt(1)||0;var inx=1;var Ai7=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<BAp)&&((inx+Mh)<=aIndex)){inx=inx+Mh;Bf=Bf+1;Ai7=Ai7+1;
aIndex=aIndex+1;Mh=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Mh))aIndex=inx+Mh;
if(!!this.Oj)aIndex=(inx+this.ByR(this.Oj,(inx+1)-Ai7,(inx+Mh)-Ai7,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iy=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iy!==0xFEFF)&&(Iy!==0x0A);}return[col,Bf];},AnS:function(AoO){if(((this.String===
A.jV)||!this.B7)||this.Yo)return 0;if(!this.HY)this.XM(this);var Bf=AoO[1];var col=
AoO[0];var inx=1;var Ai7=2;var Ki=this.CI.charCodeAt(0)||0;var Mh=this.CI.charCodeAt(
1)||0;if(Bf>=Ki){Bf=Ki-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mh>0)){inx=inx+Mh;Bf=Bf-1;Ai7=Ai7+1;Mh=this.CI.charCodeAt(inx)||0;
}var XD=inx;var AK1=(inx-Ai7)+1;var Ap3=(AK1+Mh)-1;var AAV=false;while((col>=0)&&(
Mh>1)){var Iy=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Mh=Mh-1;AAV=(Iy===0xFEFF)||(
Iy===0x0A);if(!AAV){col=col-1;XD=inx;}}if((!AAV&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAV=true;if(AAV)XD=XD+1;XD=XD-Ai7;if(!!this.Oj)XD=AK1+this.ByS(
this.Oj,AK1,Ap3,XD-AK1);return XD;},AT$:function(K2){var B;if((this.String===A.jV
)||!this.B7)return BD;if(!this.HY)this.XM(this);var AE=this.Dd();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B7;var Bu=this.Kl;var Ki=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(K2[1]<AE[1])K2=[K2[0],AE[1]];if(K2[1]>=AE[3])K2=[
K2[0],AE[3]-1];if(this.N8>0)leading=(this.N8-font.Ascent)-font.Descent;var AaN=(
font.Ascent+font.Descent)+leading;var Bf=((K2[1]-AE[1])/AaN)|0;var NG=this.ADa(Bf
);var Mh=NG.length;var Pe=false;if(((Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Ki-1)))Pe=true;if((Pe&&(
NG.indexOf(String.fromCharCode(0x20),0)<0))&&(NG.indexOf(String.fromCharCode(0xA0
),0)<0))Pe=false;if(Pe){var inx=1;var Ap2=Bf;while(Ap2>0){inx=inx+(this.CI.charCodeAt(
inx)||0);Ap2=Ap2-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pe=false;}var Ame=0;var Ep=0;if(
Pe)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.Yt(NG,0,Mh);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.Yt(NG,0,Mh)/2)|0);var col=font.
BjF(NG,0,Mh,(K2[0]-AE[0])-Ep,Ame);if(col<0)col=0;return[col,Bf];},Afh:function(AoO
){var B;if((this.String===A.jV)||!this.B7)return BD;if(!this.HY)this.XM(this);var
Ki=this.CI.charCodeAt(0)||0;var font=this.B7;var Bu=this.Kl;var Bf=AoO[1];var col=
AoO[0];if(Bf>=Ki){Bf=Ki-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NG=this.ADa(
Bf);var Mh=NG.length;var AE=this.Dd();var Pe=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Ki-1)))Pe=true;if((Pe&&(NG.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NG.indexOf(String.fromCharCode(0xA0),0)<0))Pe=false;if(Pe){var inx=1;var
Ap2=Bf;while(Ap2>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ap2=Ap2-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pe=false;}if(this.N8>0)leading=(this.N8-font.Ascent)-font.
Descent;var Di=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ame=0;var Ep=AE[0];if(Pe)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
Yt(NG,0,Mh);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.Yt(NG,
0,Mh)/2)|0);var pos=font.BjB(NG,0,Mh,col,Ame);if(pos<0)pos=0;return[Ep+pos,Di];}
,AOX:function(Ad){var B;if((this.String===A.jV)||!this.B7)return E7;if(!this.HY)
this.XM(this);var Ki=this.CI.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
Ki)&&(Ad>0)))return E7;var Bu=this.Kl;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Je*2);if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N8>0)leading=(this.N8-font.Ascent)-font.Descent;var Di=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AA$=(this.CI.charCodeAt(inx)||0)-1;var Bgp=font.Yt(this.CI,inx+1,AA$);var A4k=font.
A7c(this.CI,inx+1,AA$);var Ap4=Bgp;var AaN=font.Ascent+font.Descent;var ABn=(Ki*((
font.Ascent+font.Descent)+leading))-leading;if(!Ki)ABn=AaN;if((((this.CI.charCodeAt((
inx+AA$)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AA$)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap3=(inx+1)+AA$;var Azk=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azl=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azk>=0)&&(Azk<Ap3))||((Azl>=0)&&(Azl<Ap3)))Ap4=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABn>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap4>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-Ap4;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
Ap4/2)|0);if(((Bu&0x20)===0x20))Di=Di+(height-ABn);else if(((Bu&0x100)===0x100))
Di=((Di+((height/2)|0))-((ABn/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Di=(Di+((height/2)|0))-((ABn/2)|0);Ep=(Ep+A4k[0])+this.Je;
Ap4=(Ap4+(A4k[2]-A4k[0]))-Bgp;var B5;{var BfS=[Bd[0]+Ep,Bd[1]+Di];B5=[].concat(BfS
,A.abf(BfS,[Ap4,AaN]));}return A.abh(B5,this.Br);},ADa:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.HY)this.XM(this);var Ki=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=Ki))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XN=inx;var AtT=inx+(this.CI.charCodeAt(
inx)||0);var Iy=0x00;do{XN=XN+1;Iy=this.CI.charCodeAt(XN)||0;}while(((Iy===0xFEFF
)||(Iy===0x0A))&&(XN<=AtT));do{AtT=AtT-1;Iy=this.CI.charCodeAt(AtT)||0;}while(((
Iy===0xFEFF)||(Iy===0x0A))&&(XN<=AtT));var NG=A.abW(this.CI,XN,(AtT-XN)+1);var Apv;
for(Apv=NG.indexOf(String.fromCharCode(0xFEFF),0);Apv>=0;Apv=NG.indexOf(String.fromCharCode(
0xFEFF),Apv+1)){var XD=Apv+1;while((NG.charCodeAt(XD)||0)===0xFEFF)XD=XD+1;NG=A.
ab1(NG,Apv,XD-Apv);}return NG;},Dd:function(){var B;if((this.String===A.jV)||!this.
B7)return E7;if(!this.HY)this.XM(this);if(this.CI===A.jV)return E7;var leading=this.
B7.Leading;var AA9=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.N8>0
){leading=(this.N8-this.B7.Ascent)-this.B7.Descent;AA9=this.N8;}if(A.aaX(this.Aml
,BD))this.Aml=[this.B7.A63(this.CI),this.Aml[1]];this.Aml=[this.Aml[0],((this.CI.
charCodeAt(0)||0)*AA9)-leading];var Bu=this.Kl;var Bd=this.M;var Aub=this.Je;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dh=[Aub,0,width-Aub,height];var B5=[
].concat(Dh.slice(0,2),A.abf(Dh.slice(0,2),this.Aml));if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XE=
this.AcM;if(XE<=0)XE=width-(this.Je*2);if(XE<0)XE=0;if(XE>(B5[2]-B5[0]))B5=A.abL(
B5,XE);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Dh[3]-Dh[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B5[2]-B5[0])>(Dh[
2]-Dh[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B5[2]-B5[0])!==(Dh[2]-Dh[0]
)){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2)===0x2)
)B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1]));else
if(((Bu&0x100)===0x100))B5=A.abO(B5,((Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B5=
A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(
0,2));return A.abh(B5,this.Br);},_Init:function(aArg){A.Core.Eu._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Le();this.__proto__=A.Core.Eu;
A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuW={attrString:null,AttrSet:
null,String:A.jV,Kl:0x12,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dd();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.BiK(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiV],this
);},AiV:function(G){},XM:function(G){var B;var ALH;ALH=(B=this.M)[2]-B[0];if(ALH<
0)ALH=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5z
,0);if(!!this.attrString)this.attrString.Bov(this.AttrSet,this.String,ALH,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);
},Pg:function(G){A.pe([this,this.XM],this);},Bgj:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kl)return;this.Kl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiV],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pg],this);},A9U:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bgj],this.AttrSet,0);A.z9([this,this.Pg
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bgj],this.AttrSet,0);A.zV([this,this.Pg],this.AttrSet,1);}A.pe([this,this.
Pg],this);},Dd:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E7;
if(!this.attrString)this.XM(this);if(!this.attrString)return E7;var Bu=this.Kl;var
C6=this.attrString.BjG();var Dh=A.aaT(this.M,BD);var B5=[].concat(Dh.slice(0,2),
A.abf(Dh.slice(0,2),C6));if(!C6[0]||!C6[1])return E7;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dh[
2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuW;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoc={AiI:
null,FJ:null,Aiv:0,Aiu:0,U_:A.wf,Cl:A.abi(4,3,0,null),AGW:A.wf,Tq:0,ApI:0,JY:function(
E){if(A.aaX(E,this.KB))return;A.Core.ZD.JY.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tq=0x45;this.FJ=null;A.pe([this,this.Ajd
],this);},Ky:function(E){if(A.aaX(E,this.MG))return;A.Core.ZD.Ky.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tq=0x45;this.FJ=null;
A.pe([this,this.Ajd],this);},DC:function(E){if(A.aaX(E,this.ED))return;A.Core.ZD.
DC.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tq=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},DM:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZD.DM.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tq=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},A1M:function(
){return;},Ajd:function(G){var B;this.AiI=null;if(this.Tq===0x00)return;if(this.
Tq===0x45){var K6=A._NewObject(A.Graphics.Ax5,0);K6=K6.ANU(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K6){K6.AB$(0,0);this.Cl.Set(0,2,K6.UV*240
);K6.AB$(1,0);this.Cl.Set(1,2,K6.UV*240);K6.AB$(1,1);this.Cl.Set(2,2,K6.UV*240);
K6.AB$(0,1);this.Cl.Set(3,2,K6.UV*240);}this.A1M();}if((((this.Tq===0x4D)&&!!this.
FJ)&&!!this.U_[0])&&!!this.U_[1]){var Ai_=[].concat(BD,this.U_);var Ai9=this.AGW;
var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var Rz=Ai_[3]-Ai9[
1];this.FJ.Afc(Af8,D8);this.Cl.Set(0,0,this.FJ.P7+this.Aiu);this.Cl.Set(0,1,this.
FJ.P8+this.Aiv);this.Cl.Set(0,2,this.FJ.UV);this.FJ.Afc(Az,D8);this.Cl.Set(1,0,this.
FJ.P7+this.Aiu);this.Cl.Set(1,1,this.FJ.P8+this.Aiv);this.Cl.Set(1,2,this.FJ.UV);
this.FJ.Afc(Az,Rz);this.Cl.Set(2,0,this.FJ.P7+this.Aiu);this.Cl.Set(2,1,this.FJ.
P8+this.Aiv);this.Cl.Set(2,2,this.FJ.UV);this.FJ.Afc(Af8,Rz);this.Cl.Set(3,0,this.
FJ.P7+this.Aiu);this.Cl.Set(3,1,this.FJ.P8+this.Aiv);this.Cl.Set(3,2,this.FJ.UV);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Et=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.MG=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.KB=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A1M();}this.
ApI=this.Tq;this.Tq=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bn2:function(E){if(A.aaX(E,this.AGW))return;this.AGW=E;if((this.ApI!==0x45)&&(
this.Tq===0x00)){this.Tq=this.ApI;A.pe([this,this.Ajd],this);}},Arq:function(Fh){
var B;if(!!!this.AiI){this.AiI=A._NewObject(A.Graphics.A7B,0);this.AiI.ANU(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiI.Afc(Fh))return BD;
var Ap9=[].concat(BD,this.U_);var Ep=this.AiI.P7*(Ap9[2]-Ap9[0]);var Di=this.AiI.
P8*(Ap9[3]-Ap9[1]);return A.abf([Ep|0,Di|0],Ap9.slice(0,2));},Bam:function(Bcj,L_
){var B;this.AiI=null;if(!L_)throw new Error(IV);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.Ax5,0);this.FJ.BhG(L_);this.Aiu=Bcj[0];this.Aiv=Bcj[1];this.ApI=0x4D;
this.Tq=0x00;if(!this.U_[0]||!this.U_[1])return;var Ai_=[].concat(BD,this.U_);var
Ai9=this.AGW;var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var
Rz=Ai_[3]-Ai9[1];this.FJ.Afc(Af8,D8);this.Cl.Set(0,0,this.FJ.P7+this.Aiu);this.Cl.
Set(0,1,this.FJ.P8+this.Aiv);this.Cl.Set(0,2,this.FJ.UV);this.FJ.Afc(Az,D8);this.
Cl.Set(1,0,this.FJ.P7+this.Aiu);this.Cl.Set(1,1,this.FJ.P8+this.Aiv);this.Cl.Set(
1,2,this.FJ.UV);this.FJ.Afc(Az,Rz);this.Cl.Set(2,0,this.FJ.P7+this.Aiu);this.Cl.
Set(2,1,this.FJ.P8+this.Aiv);this.Cl.Set(2,2,this.FJ.UV);this.FJ.Afc(Af8,Rz);this.
Cl.Set(3,0,this.FJ.P7+this.Aiu);this.Cl.Set(3,1,this.FJ.P8+this.Aiv);this.Cl.Set(
3,2,this.FJ.UV);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Et=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.MG=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.KB=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1M();},_Init:
function(aArg){A.Core.ZD._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aoc.Cl;this.
__proto__=C.Aoc;this.U=0x3;},_Mark:function(D){var B;A.Core.ZD._Mark.call(this,D
);if((B=this.AiI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVT={Fv:null,bitmap:null
,P:null,G9:255,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NA=aOffset[0];var NB=aOffset[1];var AE=[].concat(BD,this.
U_);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var BeN;var BeO;var BeP;var BeQ;
var BAA=this.G9;BeN=BeO=BeP=BeQ=BAA;var Aly=255|(255<<8)|(255<<16)|((((Ck*BeN)>>
8)&0xFF)<<24);var Alz=255|(255<<8)|(255<<16)|((((Ck*BeO)>>8)&0xFF)<<24);var ByT=
255|(255<<8)|(255<<16)|((((Ck*BeP)>>8)&0xFF)<<24);var ByU=255|(255<<8)|(255<<16)|((((
Ck*BeQ)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E7,aOffset));CZ.AhV(aClip,this.bitmap
,0,this.Cl.Get(0,0)+NA,this.Cl.Get(0,1)+NB,this.Cl.Get(0,2),this.Cl.Get(1,0)+NA,
this.Cl.Get(1,1)+NB,this.Cl.Get(1,2),this.Cl.Get(2,0)+NA,this.Cl.Get(2,1)+NB,this.
Cl.Get(2,2),this.Cl.Get(3,0)+NA,this.Cl.Get(3,1)+NB,this.Cl.Get(3,2),AE,Aly,Alz,
ByT,ByU,aBlend,true);},G4:function(CN){if(!this.P||!this.Fv)return null;var BN=(
A.Core.Aef.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqJ.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fx=BD;var B1=this.Fv.Ab;while(!!B1&&(B1!==this.P)){
Fx=A.abe(Fx,B1.M.slice(0,2));B1=B1.Ab;}var X=this.Fv;if(!!BN&&!BN.Down)this.Fv=null;
if(!!BN){BN.H1=A.abf(this.Arq(BN.H1),Fx);BN.NV=A.abf(this.Arq(BN.NV),Fx);return X.
G4(BN);}if(!!D4){var BAE=A.abf(this.Arq(A.abe(D4.H1,D4.DG)),Fx);D4.H1=A.abf(this.
Arq(D4.H1),Fx);D4.NV=A.abf(this.Arq(D4.NV),Fx);D4.DG=A.abe(D4.H1,BAE);return X.G4(
D4);}return C.Aoc.G4.call(this,CN);},Yj:function(Dc,BF,Oh,Aak,Ac6,Ac5){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Dc);pos=this.Arq(pos
);var Ap9=[].concat(BD,this.U_);if(!A.wa(Ap9,pos))return null;var JH=this.P.Yj(A.
abh(A.abh([0,0,Dc[2]-Dc[0],Dc[3]-Dc[1]],pos),this.P.M.slice(0,2)),BF,Oh,Aak,null
,Ac5);if(!!JH)this.Fv=JH.Cj;else this.Fv=null;if(!!this.Fv)return A._NewObject(A.
Core.Au4,0).Initialize(this,BD);return null;},RL:function(G){var B;var BeR=this.
U_;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
U_=this.bitmap.FrameSize;else this.U_=BD;if(((A.aaX(BeR,this.U_)||((this.ApI===0x45
)&&(this.Tq===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApI!==0x45)&&(this.Tq===0x00))&&!A.aaX(BeR,this.U_)){this.Tq=this.ApI;
A.pe([this,this.Ajd],this);}},C4:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bm7:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Is);if(!!this.P){A.
z9([this,this.RL],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RL
],E,0);this.bitmap=E.FG;}this.RL(this);},Awq:function(){return this.G9;},_Init:function(
aArg){C.Aoc._Init.call(this,aArg);this.__proto__=C.AVT;},_Mark:function(D){var B;
C.Aoc._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aeq={Hz:null,AQ:0xFFFFFFFF,DG:A.wf
,AOE:false,Le:function(){this.A15();},Kq:function(CZ,aClip,aOffset,Ck,aBlend){if(
!this.Hz)return;var DD;var DO;var DI;var DN;var B4=this.AQ;Ck=Ck+1;DD=DO=DI=DN=B4;
if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Aeq(aClip,this.Hz,A.abh(this.M,aOffset),this.AOE,this.DG,DD,DO,DN,DI,true,true,0
);},A15:function(){return;},Aje:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},AnG:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Bm2:function(E){var B;if(E===this.AOE)return;this.
AOE=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Zx:function(
E){var B;if(E===this.Hz)return;if(!!this.Hz)A.z9([this,this.Aje],this.Hz,0);this.
Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.Hz,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aeq;},
_Done:function(){this.Le();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hp={Hz:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Le:function(){this.A15();},Kq:function(CZ,aClip,aOffset,Ck,aBlend
){if(!this.Hz)return;var DD;var DO;var DI;var DN;var B4=this.AQ;Ck=Ck+1;DD=DO=DI=
DN=B4;if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hp(aClip,this.Hz,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A15:function(){return;},Aje:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.
M);},AnG:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Nn:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Zx:function(E){var B;if(E===this.Hz)return;if(!!this.
Hz)A.z9([this,this.Aje],this.Hz,0);this.Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.
Hz,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hp;},_Done:function(){this.Le();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEN={A5g:0x1,A5f:0x2,A5h:0x4,A5k:0x8,A5j:0x10,A5i:0x20,BF6:0x40,BF7:0x80,BGf:
0x100};C.BGk={A5g:0x1,A5f:0x2,A5h:0x4,A5k:0x8,A5j:0x10,A5i:0x20,BDj:0x40,BDi:0x80
,BDo:0x100};C.BFq={Normal:0,BF0:1,BFY:2,BFZ:3};
C._Init=function(){C.C8.__proto__=A.Core.Akh;C.AL.__proto__=A.Core.Eu;C.BU.__proto__=
A.Core.Eu;C.NU.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuW.__proto__=A.Core.Eu;C.Aoc.__proto__=A.Core.ZD;C.AVT.__proto__=C.Aoc;C.Aeq.
__proto__=A.Core.Eu;C.Hp.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */