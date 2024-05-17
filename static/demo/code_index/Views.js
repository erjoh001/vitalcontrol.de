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
var Ce=[1,1];var BD=[0,0];var E7=[0,0,0,0];var Hr="\uFEFF";var IW="No matrix to perform 3D transformation";
var It="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C8={KL:null,Alb:1,Ala:1,AQ:0xFFFFFFFF,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var
B;var Agt=this.Ala;var Agu=this.Alb;var AdB=A.abf(this.Et,aOffset);var AdC=A.abf(
this.ED,aOffset);var Alz;var AlA;var B4=this.AQ;if(A.aaX(AdB,AdC))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;Alz=AlA=B4;if(Ck<256){Alz=(Alz&0x00FFFFFF)|((((
Ck*((Alz>>24)&0xFF))>>8)&0xFF)<<24);AlA=(AlA&0x00FFFFFF)|((((Ck*((AlA>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agt===1)&&(Agu===1))CZ.Au_(aClip,AdB,AdC,Alz,AlA,aBlend);else
CZ.BiR(aClip,AdB,AdC,Agt,Agu,Alz,AlA,aBlend);},GetExtent:function(){var Agt=this.
Ala;var Agu=this.Alb;var AdB=this.Et;var AdC=this.ED;if(((Agt===1)&&(Agu===1))||
A.aaX(AdB,AdC))return A.Core.Akh.GetExtent.call(this);var AiD=Agt/2;var AiE=Agu/
2;var Apn=AdB[0];var Apo=AdB[1];var App=AdC[0];var Apq=AdC[1];var Kc=App-Apn;var
Kd=Apq-Apo;var I1=Math.sqrt((Kc*Kc)+(Kd*Kd));Kc=Kc/I1;Kd=Kd/I1;var Bc8=Apn+(Kd*AiD
);var Bc9=Apo-(Kc*AiD);var AJI=App+(Kd*AiE);var AJJ=Apq-(Kc*AiE);var AJK=App-(Kd
*AiE);var AJL=Apq+(Kc*AiE);var AJM=Apn-(Kd*AiD);var AJN=Apo+(Kc*AiD);var left=Bc8;
var right=Bc8;var top=Bc9;var bottom=Bc9;if(AJI<left)left=AJI;if(AJK<left)left=AJK;
if(AJM<left)left=AJM;if(AJI>right)right=AJI;if(AJK>right)right=AJK;if(AJM>right)
right=AJM;if(AJJ<top)top=AJJ;if(AJL<top)top=AJL;if(AJN<top)top=AJN;if(AJJ>bottom
)bottom=AJJ;if(AJL>bottom)bottom=AJL;if(AJN>bottom)bottom=AJN;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Ce));return Az;
},RL:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_8:function(E){var B;if(E<1)E=1;if(E===this.Alb)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alb=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ala!==1))&&!this.KL){
this.KL=A.aaL(A.aci.AsY);if(this.KL.N2)A.zV([this,this.RL],this.KL,0);}if(((E===
1)&&(this.Ala===1))&&!!this.KL){if(this.KL.N2)A.z9([this,this.RL],this.KL,0);this.
KL=null;}},A_7:function(E){var B;if(E<1)E=1;if(E===this.Ala)return;if(!!this.Ab&&((
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
);},_className:"Views::Line"};C.AL={ANu:0xFFFFFFFF,ANv:0xFFFFFFFF,ANz:0xFFFFFFFF
,ANy:0xFFFFFFFF,AQ:0xFFFFFFFF,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var DD=
this.ANy;var DO=this.ANz;var DI=this.ANu;var DN=this.ANv;var B4=this.AQ;aBlend=aBlend&&((
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
))>>8)&0xFF)<<24);}CZ.Avn(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awz:
function(E){var B;if(E===this.ANu)return;this.ANu=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},AwA:function(E){var B;if(E===this.ANv)return;this.ANv=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},AwC:function(E){var B;
if(E===this.ANz)return;this.ANz=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},AwB:function(E){var B;if(E===this.ANy)return;this.ANy=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fq:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BW={Width:1,AQ:0xFFFFFFFF,Kq:function(CZ
,aClip,aOffset,Ck,aBlend){var B;var DD;var DO;var DI;var DN;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DD=DO=DI=DN=B4;if(Ck<256){DD=(DD&0x00FFFFFF
)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.BiP(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Nn:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BW;},_className:"Views::Border"};C.NU={timer:null,Al:null,MR:-1,AQ:0xFFFFFFFF,Au$:
0x1F,TX:0,Dx:0,Ann:A.wf,VD:false,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var
Nx=this.TX;if(this.MR>=0)Nx=this.MR;if(!this.Al||(Nx>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B4=this.AQ;var Kj=(((Ck+1)*255)>>
8)+1;var Om=this.Au$;var Az=A.abh(this.M,aOffset);var AK_=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Ann);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B4;if(Kj<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kj)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}if(((this.
Ann[0]>0)&&(AK_[0]>0))&&!((Om&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK_[
0];if(((Om&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Om=Om|0x4;}else if(((Om&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Om=Om|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Om=Om|0x5;}}if(((this.Ann[1]>0)&&(AK_[1]>0))&&!((Om&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK_[1];if(((Om&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Om=Om|0x8;}else if(((Om&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Om=Om|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Om=Om|
0xA;}}CZ.BiO(aClip,this.Al,Nx,Az,Om,DD,DO,DN,DI,aBlend);},RL:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mi:function(G){var B;var Nx=
this.MR;var Tt=0;if(!!this.Al)Tt=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MR<0))&&(Tt>0))this.Dx=this.timer.Bs-(this.TX*this.Al.FrameDelay);if(
!!this.timer&&(Tt>0)){var Av=(this.timer.Bs-this.Dx)|0;Nx=(Av/this.Al.FrameDelay
)|0;if(Av>=Tt){Nx=Nx%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tt);}}if(((Nx!==
this.MR)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MR=Nx;if(!Tt&&
!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zs:function(E){var B;if(this.VD===E)return;this.VD=E;this.MR=-1;if(
!E&&!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mi],this.timer,0);A.pe([this,this.
Mi],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A_h:function(
E){var B;if(E===this.Au$)return;this.Au$=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TX)&&(this.MR===-1)
)return;this.TX=E;if(!this.timer)this.MR=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N2)A.z9([this,this.RL],this.Al,0);this.Al=E;this.MR=-1;if(!!E&&E.N2)A.zV([this,this.
RL],E,0);if(this.VD){this.Zs(false);this.Zs(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A_x:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Ann))return;this.Ann=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au$&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NU;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MR:0,AQ:0xFFFFFFFF
,Kl:0x12,TX:0,G9:255,VD:false,Aa5:false,Kq:function(CZ,aClip,aOffset,Ck,aBlend){
var B;var Nx=this.TX;if(this.MR>=0)Nx=this.MR;if(!this.Al||(Nx>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dd();var C6=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B4=this.AQ;var Kj=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B4;if(Kj<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kj)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C6))CZ.A5_(aClip,this.Al,Nx,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CZ.Bpa(aClip,this.Al,Nx
,A.abh(AE,aOffset),[].concat(BD,C6),DD,DO,DN,DI,aBlend,true);},RL:function(G){var
B;if(((this.Aa5&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mi:function(
G){var B;var Nx=this.MR;var Tt=0;if(!!this.Al)Tt=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MR<0))&&(Tt>0))this.Dx=this.timer.Bs-(this.TX*this.Al.FrameDelay
);if(!!this.timer&&(Tt>0)){var Av=(this.timer.Bs-this.Dx)|0;Nx=(Av/this.Al.FrameDelay
)|0;if(Av>=Tt){Nx=Nx%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tt);}}if(((Nx!==
this.MR)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MR=Nx;if(!Tt&&
!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;}},Jc:function(E
){if(E===this.Aa5)return;this.Aa5=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dd());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zs:function(
E){var B;if(this.VD===E)return;this.VD=E;this.MR=-1;if(!E&&!!this.timer){A.z9([this
,this.Mi],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aej);A.zV([this,this.Mi],this.timer,0);A.pe([this,this.Mi],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kl)return;
this.Kl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TX)&&(this.MR===-1))return;this.TX=E;if(!this.timer
)this.MR=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N2)A.z9([this,this.RL],this.
Al,0);this.Al=E;this.MR=-1;if(!!E&&E.N2)A.zV([this,this.RL],E,0);if(this.VD){this.
Zs(false);this.Zs(true);}if(((this.Aa5&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
C4:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Dd:function(){var
B;if(!this.Al)return E7;var Bu=this.Kl;var C6=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C6[0]||!C6[1])return E7;var Dh=[0,0
,width,height];var B5=Dh;if(((Bu&0x40)===0x40)){var A4q=((((Dh[2]-Dh[0])<<16)+((
C6[0]/2)|0))/C6[0])|0;var ABd=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai2=
A4q;if(ABd>Ai2)Ai2=ABd;B5=A.abL(B5,((C6[0]*Ai2)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai2)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4q=((((Dh[2]-Dh[0])<<16)+((C6[
0]/2)|0))/C6[0])|0;var ABd=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai2=
A4q;if(ABd<Ai2)Ai2=ABd;B5=A.abL(B5,((C6[0]*Ai2)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai2)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C6);if((B5[2]-B5[0])
!==(Dh[2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},Blb:function(){return this.
AQ;},ASL:function(){return this.TX;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,Em:null,CI:
A.jV,String:A.jV,Oj:null,Amm:A.wf,Jf:0,N8:0,AcM:0,Br:A.wf,Kl:0x12,AQ:0xFFFFFFFF,
AfA:false,Aa5:false,Yp:false,AOh:false,HZ:false,Le:function(){if(!!this.Oj){this.
A2u(this.Oj);this.Oj=null;}},Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;if((this.
CI===A.jV)||!this.B7)return;var Bu=this.Kl;var font=this.B7;var Dh=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kj=(((Ck+1)*255)>>8)+1;
var Ki=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Dd(),aOffset);var Bq=[Dh[0]-AE[
0],(Dh[1]-AE[1])-font.Ascent];if(Ki<1)return;DD=DO=DI=DN=col;if(Kj<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kj)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kj)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Ki===1)&&!((Bu&0x40)===
0x40)){CZ.A6y(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Dh,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N8>0)leading=(this.N8-font.
Ascent)-font.Descent;var AaN=(font.Ascent+font.Descent)+leading;var By0=aClip[1]-
AE[1];var By1=aClip[3]-AE[1];var A1I=AE[2]-AE[0];var Di=0;var O=1;var B4=this.CI.
charCodeAt(1)||0;while(((Di+AaN)<By0)&&(B4>0)){O=O+B4;Di=Di+AaN;B4=this.CI.charCodeAt(
O)||0;}while((Di<By1)&&(B4>0)){var Me=A.abe(Bq,[0,Di]);var Amf=0;var Pe=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B4)||0)!==0x00))Pe=true;if(Pe&&!!(Bu&0x6
)){var Ap3=O+B4;var Azl=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azm=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Azl<0)||(Azl>=Ap3))&&((Azm<0)||(Azm>=
Ap3)))Pe=false;}if(Pe)Amf=A1I;else if(((Bu&0x4)===0x4))Me=[(Me[0]-A1I)+font.Yu(this.
CI,O+1,B4-1),Me[1]];else if(((Bu&0x2)===0x2))Me=[(Me[0]-((A1I/2)|0))+((font.Yu(this.
CI,O+1,B4-1)/2)|0),Me[1]];CZ.A6y(aClip,font,this.CI,O+1,B4-1,Dh,Me,Amf,0,DD,DO,DN
,DI,true);O=O+B4;Di=Di+AaN;B4=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bgq;Bgq=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bgq&&
!this.AcM)&&this.AfA)&&this.HZ)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HZ=false;A.pe([this,this.Pg],this);}if(((this.Yp&&this.HZ)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HZ=false;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiV],this);},ByS:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},ByR:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2u:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzc:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiV:function(G){A.pe(this.Em
,this);},Pg:function(G){A.pe([this,this.XN],this);},XN:function(G){var B;if(this.
HZ)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XF=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfA){
if(this.AcM>0)XF=this.AcM;else if(!this.Aa5)XF=width-(this.Jf*2);else XF=width;if(
XF<0)XF=1;}if(!!this.Oj){this.A2u(this.Oj);this.Oj=null;}this.HZ=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOh)this.Oj=this.Bzc(length
);this.CI=font.Boy(this.String,0,XF,length,this.Oj);if(!!this.Oj&&!this.Bj5()){this.
A2u(this.Oj);this.Oj=null;}}else this.CI=A.jV;this.Amm=BD;if(((this.Yp&&(this.CI
!==A.jV))&&!this.Aa5)&&!!font){var Bu=this.Kl;var leading=font.Leading;var IF=this.
CI;var AK4=this.Aj6();if(((Bu&0x80)===0x80)){if(AK4)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N8>0)leading=(this.N8-font.Ascent)-font.Descent;var AA_=(font.
Ascent+font.Descent)+leading;var Ki=IF.charCodeAt(0)||0;var AlX=((height+leading
)/AA_)|0;var A1W=false;var AJQ=false;if(AlX<=0)AlX=1;if(Ki>AlX){var Bf=0;var AA$=
0;var AK2=Ki-1;var K5;var Ny=IF.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AA$=Ki-AlX;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AA$=((Ki-AlX)/2)|0;AK2=(AA$+AlX)-1;}else
AK2=AlX-1;A1W=AA$>0;AJQ=AK2<(Ki-1);for(K5=1;Bf<AA$;Bf=Bf+1)K5=K5+(IF.charCodeAt(
K5)||0);if(AJQ)for(Ny=K5;Bf<AK2;Bf=Bf+1)Ny=Ny+(IF.charCodeAt(Ny)||0);if(A1W){var
I1=IF.charCodeAt(K5)||0;tmp=(Hr+A.abW(IF,K5,I1))+Hr;tmp=A.abQ(tmp,0,(I1+2)&0xFFFF
);K5=K5+I1;if((tmp.charCodeAt(I1)||0)===0x0A){tmp=A.abQ(tmp,I1,0xFEFF);tmp=A.abQ(
tmp,I1+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IF,K5,Ny-K5);if(AJQ&&(
Ny>=K5)){var I1=IF.charCodeAt(Ny)||0;var QC=(Hr+A.abW(IF,Ny,I1))+Hr;QC=A.abQ(QC,
0,(I1+2)&0xFFFF);QC=A.abQ(QC,1,0xFEFF);if((QC.charCodeAt(I1)||0)===0x0A){QC=A.abQ(
QC,I1,0xFEFF);QC=A.abQ(QC,I1+1,0x0A);}if((QC.charCodeAt(2)||0)===0x0A){QC=A.abQ(
QC,2,0xFEFF);QC=A.abQ(QC,1,0x0A);}else QC=A.abQ(QC,1,0xFEFF);tmp=tmp+QC;}IF=String.
fromCharCode(AlX&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKB=width-(this.Jf*2);if(this.
AfA&&(this.AcM>0))AKB=this.AcM;Ki=IF.charCodeAt(0)||0;for(;Bf<Ki;Bf=Bf+1){var Amc=
A1W&&!Bf;var Amd=AJQ&&(Bf===(Ki-1));var Xv=false;var Xw=false;var Auo=AK4;if((AK4&&
Amc)&&!Amd){Amc=false;Amd=true;}else if((AK4&&Amd)&&!Amc){Amd=false;Amc=true;}var
XO=inx+1;var I1=IF.charCodeAt(inx)||0;var K5=XO;var Ny=(XO+I1)-2;var A2J=-1;var A2K=-
1;if(!this.AfA&&(font.Yu(IF,XO,I1-1)>AKB)){var AoZ=Bu;if(((AoZ&0x2)===0x2)&&!!(AoZ&
0x5))AoZ&=~0x2;if(((AoZ&0x2)===0x2))AoZ&=~0x5;if(((AoZ&0x4)===0x4))Xv=true;else if(((
AoZ&0x2)===0x2)){Xv=true;Xw=true;}else Xw=true;}if((IF.charCodeAt(K5)||0)===0x0A
)K5=K5+1;if((IF.charCodeAt(Ny)||0)===0x0A)Ny=Ny-1;while(Xv&&((IF.charCodeAt(K5)||
0)===0xFEFF))K5=K5+1;while(Xw&&((IF.charCodeAt(Ny)||0)===0xFEFF))Ny=Ny-1;Xv=Xv&&
!Amd;Xw=Xw&&!Amc;while((((Xv||Xw)||Amc)||Amd)&&(K5<Ny)){if((Xv&&(Auo||!Xw))||Amc
){if(A2J>0)IF=A.abQ(IF,A2J,0xFEFF);IF=A.abQ(IF,K5,0x2026);A2J=K5;K5=K5+1;Auo=!Auo;
Amc=false;if(font.Yu(IF,XO,I1-1)<=AKB){Xv=false;Xw=false;}else Xv=Xv||!Xw;}if((Xw&&(
!Auo||!Xv))||Amd){if(A2K>0)IF=A.abQ(IF,A2K,0xFEFF);IF=A.abQ(IF,Ny,0x2026);A2K=Ny;
Ny=Ny-1;Auo=!Auo;Amd=false;if(font.Yu(IF,XO,I1-1)<=AKB){Xv=false;Xw=false;}else Xw=
Xw||!Xv;}}inx=inx+I1;}this.Amm=[font.A65(IF),((IF.charCodeAt(0)||0)*AA_)-leading
];this.CI=IF;}if(this.Aa5&&(this.CI!==A.jV)){var Aua=[this.Jf,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dd(),Aua),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);},BmF:function(
E){if(E===this.AOh)return;this.AOh=E;this.CI=A.jV;this.HZ=false;A.pe([this,this.
Pg],this);},Hn:function(E){if(E<0)E=0;if(this.Jf===E)return;this.Jf=E;this.CI=A.
jV;this.HZ=false;A.pe([this,this.Pg],this);},Aw8:function(E){var B;if(E<0)E=0;if(
this.N8===E)return;this.N8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yp){this.CI=A.jV;this.HZ=false;A.pe([this,this.Pg],this);}if(this.Aa5&&
this.HZ)this.H(A.abg(this.Dd(),this.Br));if(this.HZ)A.pe([this,this.AiV],this);}
,BmE:function(E){if(E===this.Yp)return;this.Yp=E;if(((this.AfA&&!!!this.AcM)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HZ=false;
A.pe([this,this.Pg],this);},Q7:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcM&&this.AfA)||!!E)||this.Yp)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Jc:function(E){if(E===this.Aa5)return;this.Aa5=E;if(E&&this.Yp){this.CI=
A.jV;this.HZ=false;A.pe([this,this.Pg],this);}if(E&&this.HZ){var Aua=[this.Jf,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dd(),Aua),this.Br));this.U=this.U&~
0x2000;}},Bof:function(E){if(E<0)E=0;if(E===this.AcM)return;this.AcM=E;if(this.AfA&&
this.HZ){this.CI=A.jV;this.HZ=false;A.pe([this,this.Pg],this);}if(((!!!E&&this.AfA
)||this.Yp)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},KU:function(
E){if(E===this.AfA)return;this.AfA=E;if(this.HZ){this.CI=A.jV;this.HZ=false;A.pe([
this,this.Pg],this);}if(((E&&!!!this.AcM)||this.Yp)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gb:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HZ)A.pe([this
,this.AiV],this);},A6:function(E){var B;if(E===this.Kl)return;this.Kl=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yp){this.CI=A.jV;this.HZ=false;
A.pe([this,this.Pg],this);}if(this.HZ)A.pe([this,this.AiV],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HZ=false;A.pe([this,this.
Pg],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CI=A.jV;this.HZ=false;
A.pe([this,this.Pg],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj6:function(
){if(!this.HZ)this.XN(this);if(!this.Oj)return false;var result=false;var bidi=this.
Oj;result=A.v2(bidi);return result;},Bj5:function(){if(!this.HZ)this.XN(this);if(
!this.Oj)return false;var result=false;var bidi=this.Oj;result=A.zZ(bidi);return result;
},AG1:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Yp)return BD;if(
!this.HZ)this.XN(this);if(aIndex<0)aIndex=0;var BAp=(this.CI.charCodeAt(0)||0)-1;
var Mh=this.CI.charCodeAt(1)||0;var inx=1;var Ai7=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<BAp)&&((inx+Mh)<=aIndex)){inx=inx+Mh;Bf=Bf+1;Ai7=Ai7+1;
aIndex=aIndex+1;Mh=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Mh))aIndex=inx+Mh;
if(!!this.Oj)aIndex=(inx+this.ByR(this.Oj,(inx+1)-Ai7,(inx+Mh)-Ai7,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iz=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iz!==0xFEFF)&&(Iz!==0x0A);}return[col,Bf];},AnT:function(AoO){if(((this.String===
A.jV)||!this.B7)||this.Yp)return 0;if(!this.HZ)this.XN(this);var Bf=AoO[1];var col=
AoO[0];var inx=1;var Ai7=2;var Ki=this.CI.charCodeAt(0)||0;var Mh=this.CI.charCodeAt(
1)||0;if(Bf>=Ki){Bf=Ki-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mh>0)){inx=inx+Mh;Bf=Bf-1;Ai7=Ai7+1;Mh=this.CI.charCodeAt(inx)||0;
}var XE=inx;var AK3=(inx-Ai7)+1;var Ap3=(AK3+Mh)-1;var AAW=false;while((col>=0)&&(
Mh>1)){var Iz=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Mh=Mh-1;AAW=(Iz===0xFEFF)||(
Iz===0x0A);if(!AAW){col=col-1;XE=inx;}}if((!AAW&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAW=true;if(AAW)XE=XE+1;XE=XE-Ai7;if(!!this.Oj)XE=AK3+this.ByS(
this.Oj,AK3,Ap3,XE-AK3);return XE;},AUb:function(K2){var B;if((this.String===A.jV
)||!this.B7)return BD;if(!this.HZ)this.XN(this);var AE=this.Dd();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B7;var Bu=this.Kl;var Ki=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(K2[1]<AE[1])K2=[K2[0],AE[1]];if(K2[1]>=AE[3])K2=[
K2[0],AE[3]-1];if(this.N8>0)leading=(this.N8-font.Ascent)-font.Descent;var AaN=(
font.Ascent+font.Descent)+leading;var Bf=((K2[1]-AE[1])/AaN)|0;var NG=this.ADb(Bf
);var Mh=NG.length;var Pe=false;if(((Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Ki-1)))Pe=true;if((Pe&&(
NG.indexOf(String.fromCharCode(0x20),0)<0))&&(NG.indexOf(String.fromCharCode(0xA0
),0)<0))Pe=false;if(Pe){var inx=1;var Ap2=Bf;while(Ap2>0){inx=inx+(this.CI.charCodeAt(
inx)||0);Ap2=Ap2-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pe=false;}var Amf=0;var Ep=0;if(
Pe)Amf=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.Yu(NG,0,Mh);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.Yu(NG,0,Mh)/2)|0);var col=font.
BjH(NG,0,Mh,(K2[0]-AE[0])-Ep,Amf);if(col<0)col=0;return[col,Bf];},Afh:function(AoO
){var B;if((this.String===A.jV)||!this.B7)return BD;if(!this.HZ)this.XN(this);var
Ki=this.CI.charCodeAt(0)||0;var font=this.B7;var Bu=this.Kl;var Bf=AoO[1];var col=
AoO[0];if(Bf>=Ki){Bf=Ki-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NG=this.ADb(
Bf);var Mh=NG.length;var AE=this.Dd();var Pe=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Ki-1)))Pe=true;if((Pe&&(NG.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NG.indexOf(String.fromCharCode(0xA0),0)<0))Pe=false;if(Pe){var inx=1;var
Ap2=Bf;while(Ap2>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ap2=Ap2-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pe=false;}if(this.N8>0)leading=(this.N8-font.Ascent)-font.
Descent;var Di=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Amf=0;var Ep=AE[0];if(Pe)Amf=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
Yu(NG,0,Mh);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.Yu(NG,
0,Mh)/2)|0);var pos=font.BjD(NG,0,Mh,col,Amf);if(pos<0)pos=0;return[Ep+pos,Di];}
,AOZ:function(Ad){var B;if((this.String===A.jV)||!this.B7)return E7;if(!this.HZ)
this.XN(this);var Ki=this.CI.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
Ki)&&(Ad>0)))return E7;var Bu=this.Kl;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jf*2);if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N8>0)leading=(this.N8-font.Ascent)-font.Descent;var Di=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
ABa=(this.CI.charCodeAt(inx)||0)-1;var Bgr=font.Yu(this.CI,inx+1,ABa);var A4m=font.
A7e(this.CI,inx+1,ABa);var Ap4=Bgr;var AaN=font.Ascent+font.Descent;var ABo=(Ki*((
font.Ascent+font.Descent)+leading))-leading;if(!Ki)ABo=AaN;if((((this.CI.charCodeAt((
inx+ABa)+1)||0)===0x00)||((this.CI.charCodeAt(inx+ABa)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap3=(inx+1)+ABa;var Azl=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azm=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azl>=0)&&(Azl<Ap3))||((Azm>=0)&&(Azm<Ap3)))Ap4=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABo>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap4>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-Ap4;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
Ap4/2)|0);if(((Bu&0x20)===0x20))Di=Di+(height-ABo);else if(((Bu&0x100)===0x100))
Di=((Di+((height/2)|0))-((ABo/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Di=(Di+((height/2)|0))-((ABo/2)|0);Ep=(Ep+A4m[0])+this.Jf;
Ap4=(Ap4+(A4m[2]-A4m[0]))-Bgr;var B5;{var BfU=[Bd[0]+Ep,Bd[1]+Di];B5=[].concat(BfU
,A.abf(BfU,[Ap4,AaN]));}return A.abh(B5,this.Br);},ADb:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.HZ)this.XN(this);var Ki=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=Ki))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XO=inx;var AtS=inx+(this.CI.charCodeAt(
inx)||0);var Iz=0x00;do{XO=XO+1;Iz=this.CI.charCodeAt(XO)||0;}while(((Iz===0xFEFF
)||(Iz===0x0A))&&(XO<=AtS));do{AtS=AtS-1;Iz=this.CI.charCodeAt(AtS)||0;}while(((
Iz===0xFEFF)||(Iz===0x0A))&&(XO<=AtS));var NG=A.abW(this.CI,XO,(AtS-XO)+1);var Apv;
for(Apv=NG.indexOf(String.fromCharCode(0xFEFF),0);Apv>=0;Apv=NG.indexOf(String.fromCharCode(
0xFEFF),Apv+1)){var XE=Apv+1;while((NG.charCodeAt(XE)||0)===0xFEFF)XE=XE+1;NG=A.
ab1(NG,Apv,XE-Apv);}return NG;},Dd:function(){var B;if((this.String===A.jV)||!this.
B7)return E7;if(!this.HZ)this.XN(this);if(this.CI===A.jV)return E7;var leading=this.
B7.Leading;var AA_=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.N8>0
){leading=(this.N8-this.B7.Ascent)-this.B7.Descent;AA_=this.N8;}if(A.aaX(this.Amm
,BD))this.Amm=[this.B7.A65(this.CI),this.Amm[1]];this.Amm=[this.Amm[0],((this.CI.
charCodeAt(0)||0)*AA_)-leading];var Bu=this.Kl;var Bd=this.M;var Aua=this.Jf;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dh=[Aua,0,width-Aua,height];var B5=[
].concat(Dh.slice(0,2),A.abf(Dh.slice(0,2),this.Amm));if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XF=
this.AcM;if(XF<=0)XF=width-(this.Jf*2);if(XF<0)XF=0;if(XF>(B5[2]-B5[0]))B5=A.abL(
B5,XF);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Dh[3]-Dh[1])))Bu&=~0x110;
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
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuV={attrString:null,AttrSet:
null,String:A.jV,Kl:0x12,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dd();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.BiM(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiV],this
);},AiV:function(G){},XN:function(G){var B;var ALJ;ALJ=(B=this.M)[2]-B[0];if(ALJ<
0)ALJ=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5B
,0);if(!!this.attrString)this.attrString.Box(this.AttrSet,this.String,ALJ,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);
},Pg:function(G){A.pe([this,this.XN],this);},Bgl:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kl)return;this.Kl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiV],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pg],this);},A9W:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bgl],this.AttrSet,0);A.z9([this,this.Pg
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bgl],this.AttrSet,0);A.zV([this,this.Pg],this.AttrSet,1);}A.pe([this,this.
Pg],this);},Dd:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E7;
if(!this.attrString)this.XN(this);if(!this.attrString)return E7;var Bu=this.Kl;var
C6=this.attrString.BjI();var Dh=A.aaT(this.M,BD);var B5=[].concat(Dh.slice(0,2),
A.abf(Dh.slice(0,2),C6));if(!C6[0]||!C6[1])return E7;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dh[
2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuV;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aod={AiI:
null,FJ:null,Aiv:0,Aiu:0,U$:A.wf,Cl:A.abi(4,3,0,null),AGX:A.wf,Tq:0,ApI:0,JZ:function(
E){if(A.aaX(E,this.KB))return;A.Core.ZE.JZ.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tq=0x45;this.FJ=null;A.pe([this,this.Ajd
],this);},Ky:function(E){if(A.aaX(E,this.MG))return;A.Core.ZE.Ky.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tq=0x45;this.FJ=null;
A.pe([this,this.Ajd],this);},DC:function(E){if(A.aaX(E,this.ED))return;A.Core.ZE.
DC.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tq=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},DM:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZE.DM.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tq=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},A1O:function(
){return;},Ajd:function(G){var B;this.AiI=null;if(this.Tq===0x00)return;if(this.
Tq===0x45){var K6=A._NewObject(A.Graphics.Ax4,0);K6=K6.ANW(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K6){K6.ACa(0,0);this.Cl.Set(0,2,K6.UV*240
);K6.ACa(1,0);this.Cl.Set(1,2,K6.UV*240);K6.ACa(1,1);this.Cl.Set(2,2,K6.UV*240);
K6.ACa(0,1);this.Cl.Set(3,2,K6.UV*240);}this.A1O();}if((((this.Tq===0x4D)&&!!this.
FJ)&&!!this.U$[0])&&!!this.U$[1]){var Ai_=[].concat(BD,this.U$);var Ai9=this.AGX;
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
)|0];this.KB=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A1O();}this.
ApI=this.Tq;this.Tq=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bn4:function(E){if(A.aaX(E,this.AGX))return;this.AGX=E;if((this.ApI!==0x45)&&(
this.Tq===0x00)){this.Tq=this.ApI;A.pe([this,this.Ajd],this);}},Arq:function(Fh){
var B;if(!!!this.AiI){this.AiI=A._NewObject(A.Graphics.A7D,0);this.AiI.ANW(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiI.Afc(Fh))return BD;
var Ap9=[].concat(BD,this.U$);var Ep=this.AiI.P7*(Ap9[2]-Ap9[0]);var Di=this.AiI.
P8*(Ap9[3]-Ap9[1]);return A.abf([Ep|0,Di|0],Ap9.slice(0,2));},Bao:function(Bcl,L_
){var B;this.AiI=null;if(!L_)throw new Error(IW);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.Ax4,0);this.FJ.BhI(L_);this.Aiu=Bcl[0];this.Aiv=Bcl[1];this.ApI=0x4D;
this.Tq=0x00;if(!this.U$[0]||!this.U$[1])return;var Ai_=[].concat(BD,this.U$);var
Ai9=this.AGX;var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var
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
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1O();},_Init:
function(aArg){A.Core.ZE._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aod.Cl;this.
__proto__=C.Aod;this.U=0x3;},_Mark:function(D){var B;A.Core.ZE._Mark.call(this,D
);if((B=this.AiI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVV={Fv:null,bitmap:null
,P:null,G9:255,Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NA=aOffset[0];var NB=aOffset[1];var AE=[].concat(BD,this.
U$);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var BeP;var BeQ;var BeR;var BeS;
var BAA=this.G9;BeP=BeQ=BeR=BeS=BAA;var Alz=255|(255<<8)|(255<<16)|((((Ck*BeP)>>
8)&0xFF)<<24);var AlA=255|(255<<8)|(255<<16)|((((Ck*BeQ)>>8)&0xFF)<<24);var ByT=
255|(255<<8)|(255<<16)|((((Ck*BeR)>>8)&0xFF)<<24);var ByU=255|(255<<8)|(255<<16)|((((
Ck*BeS)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E7,aOffset));CZ.AhV(aClip,this.bitmap
,0,this.Cl.Get(0,0)+NA,this.Cl.Get(0,1)+NB,this.Cl.Get(0,2),this.Cl.Get(1,0)+NA,
this.Cl.Get(1,1)+NB,this.Cl.Get(1,2),this.Cl.Get(2,0)+NA,this.Cl.Get(2,1)+NB,this.
Cl.Get(2,2),this.Cl.Get(3,0)+NA,this.Cl.Get(3,1)+NB,this.Cl.Get(3,2),AE,Alz,AlA,
ByT,ByU,aBlend,true);},G4:function(CN){if(!this.P||!this.Fv)return null;var BO=(
A.Core.Aef.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqJ.isPrototypeOf(CN)?CN:null
);if(!BO&&!D4)return null;var Fx=BD;var B1=this.Fv.Ab;while(!!B1&&(B1!==this.P)){
Fx=A.abe(Fx,B1.M.slice(0,2));B1=B1.Ab;}var X=this.Fv;if(!!BO&&!BO.Down)this.Fv=null;
if(!!BO){BO.H2=A.abf(this.Arq(BO.H2),Fx);BO.NV=A.abf(this.Arq(BO.NV),Fx);return X.
G4(BO);}if(!!D4){var BAE=A.abf(this.Arq(A.abe(D4.H2,D4.DG)),Fx);D4.H2=A.abf(this.
Arq(D4.H2),Fx);D4.NV=A.abf(this.Arq(D4.NV),Fx);D4.DG=A.abe(D4.H2,BAE);return X.G4(
D4);}return C.Aod.G4.call(this,CN);},Yk:function(Dc,BF,Oh,Aak,Ac6,Ac5){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Dc);pos=this.Arq(pos
);var Ap9=[].concat(BD,this.U$);if(!A.wa(Ap9,pos))return null;var JI=this.P.Yk(A.
abh(A.abh([0,0,Dc[2]-Dc[0],Dc[3]-Dc[1]],pos),this.P.M.slice(0,2)),BF,Oh,Aak,null
,Ac5);if(!!JI)this.Fv=JI.Cj;else this.Fv=null;if(!!this.Fv)return A._NewObject(A.
Core.Au3,0).Initialize(this,BD);return null;},RL:function(G){var B;var BeT=this.
U$;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
U$=this.bitmap.FrameSize;else this.U$=BD;if(((A.aaX(BeT,this.U$)||((this.ApI===0x45
)&&(this.Tq===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApI!==0x45)&&(this.Tq===0x00))&&!A.aaX(BeT,this.U$)){this.Tq=this.ApI;
A.pe([this,this.Ajd],this);}},C4:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bm9:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(It);if(!!this.P){A.
z9([this,this.RL],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RL
],E,0);this.bitmap=E.FG;}this.RL(this);},Awp:function(){return this.G9;},_Init:function(
aArg){C.Aod._Init.call(this,aArg);this.__proto__=C.AVV;},_Mark:function(D){var B;
C.Aod._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aeq={Hz:null,AQ:0xFFFFFFFF,DG:A.wf
,AOG:false,Le:function(){this.A17();},Kq:function(CZ,aClip,aOffset,Ck,aBlend){if(
!this.Hz)return;var DD;var DO;var DI;var DN;var B4=this.AQ;Ck=Ck+1;DD=DO=DI=DN=B4;
if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Aeq(aClip,this.Hz,A.abh(this.M,aOffset),this.AOG,this.DG,DD,DO,DN,DI,true,true,0
);},A17:function(){return;},Aje:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},AnH:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Bm4:function(E){var B;if(E===this.AOG)return;this.
AOG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Zy:function(
E){var B;if(E===this.Hz)return;if(!!this.Hz)A.z9([this,this.Aje],this.Hz,0);this.
Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.Hz,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aeq;},
_Done:function(){this.Le();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hp={Hz:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Le:function(){this.A17();},Kq:function(CZ,aClip,aOffset,Ck,aBlend
){if(!this.Hz)return;var DD;var DO;var DI;var DN;var B4=this.AQ;Ck=Ck+1;DD=DO=DI=
DN=B4;if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hp(aClip,this.Hz,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A17:function(){return;},Aje:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.
M);},AnH:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Nn:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Zy:function(E){var B;if(E===this.Hz)return;if(!!this.
Hz)A.z9([this,this.Aje],this.Hz,0);this.Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.
Hz,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hp;},_Done:function(){this.Le();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEN={A5i:0x1,A5h:0x2,A5j:0x4,A5m:0x8,A5l:0x10,A5k:0x20,BF6:0x40,BF7:0x80,BGf:
0x100};C.BGk={A5i:0x1,A5h:0x2,A5j:0x4,A5m:0x8,A5l:0x10,A5k:0x20,BDj:0x40,BDi:0x80
,BDo:0x100};C.BFq={Normal:0,BF0:1,BFY:2,BFZ:3};
C._Init=function(){C.C8.__proto__=A.Core.Akh;C.AL.__proto__=A.Core.Eu;C.BW.__proto__=
A.Core.Eu;C.NU.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuV.__proto__=A.Core.Eu;C.Aod.__proto__=A.Core.ZE;C.AVV.__proto__=C.Aod;C.Aeq.
__proto__=A.Core.Eu;C.Hp.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */