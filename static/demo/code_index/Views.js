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
var Cc=[1,1];var BD=[0,0];var E7=[0,0,0,0];var Hq="\uFEFF";var IU="No matrix to perform 3D transformation";
var Is="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C5={KH:null,Ak_:1,Ak9:1,AQ:0xFFFFFFFF,Kn:function(CY,aClip,aOffset,Cj,aBlend){var
B;var Agp=this.Ak9;var Agq=this.Ak_;var Ady=A.abf(this.Es,aOffset);var Adz=A.abf(
this.EC,aOffset);var Alv;var Alw;var B3=this.AQ;if(A.aaX(Ady,Adz))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;Alv=Alw=B3;if(Cj<256){Alv=(Alv&0x00FFFFFF)|((((
Cj*((Alv>>24)&0xFF))>>8)&0xFF)<<24);Alw=(Alw&0x00FFFFFF)|((((Cj*((Alw>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agp===1)&&(Agq===1))CY.Au1(aClip,Ady,Adz,Alv,Alw,aBlend);else
CY.Bie(aClip,Ady,Adz,Agp,Agq,Alv,Alw,aBlend);},GetExtent:function(){var Agp=this.
Ak9;var Agq=this.Ak_;var Ady=this.Es;var Adz=this.EC;if(((Agp===1)&&(Agq===1))||
A.aaX(Ady,Adz))return A.Core.Ake.GetExtent.call(this);var AiB=Agp/2;var AiC=Agq/
2;var Apj=Ady[0];var Apk=Ady[1];var Apl=Adz[0];var Apm=Adz[1];var J_=Apl-Apj;var
J$=Apm-Apk;var IY=Math.sqrt((J_*J_)+(J$*J$));J_=J_/IY;J$=J$/IY;var BcB=Apj+(J$*AiB
);var BcC=Apk-(J_*AiB);var AJv=Apl+(J$*AiC);var AJw=Apm-(J_*AiC);var AJx=Apl-(J$
*AiC);var AJy=Apm+(J_*AiC);var AJz=Apj-(J$*AiB);var AJA=Apk+(J_*AiB);var left=BcB;
var right=BcB;var top=BcC;var bottom=BcC;if(AJv<left)left=AJv;if(AJx<left)left=AJx;
if(AJz<left)left=AJz;if(AJv>right)right=AJv;if(AJx>right)right=AJx;if(AJz>right)
right=AJz;if(AJw<top)top=AJw;if(AJy<top)top=AJy;if(AJA<top)top=AJA;if(AJw>bottom
)bottom=AJw;if(AJy>bottom)bottom=AJy;if(AJA>bottom)bottom=AJA;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RI:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_E:function(E){var B;if(E<1)E=1;if(E===this.Ak_)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak_=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak9!==1))&&!this.KH){
this.KH=A.aaL(A.aci.AsU);if(this.KH.OL)A.zV([this,this.RI],this.KH,0);}if(((E===
1)&&(this.Ak9===1))&&!!this.KH){if(this.KH.OL)A.z9([this,this.RI],this.KH,0);this.
KH=null;}},A_D:function(E){var B;if(E<1)E=1;if(E===this.Ak9)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak9=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak_!==1))&&!this.
KH){this.KH=A.aaL(A.aci.AsU);if(this.KH.OL)A.zV([this,this.RI],this.KH,0);}if(((
E===1)&&(this.Ak_===1))&&!!this.KH){if(this.KH.OL)A.z9([this,this.RI],this.KH,0);
this.KH=null;}},Nh:function(E){var B;if(E<1)E=1;if((E===this.Ak9)&&(E===this.Ak_
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ak9=E;this.Ak_=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KH){this.KH=A.aaL(A.aci.AsU);if(this.KH.OL)A.zV([this,this.
RI],this.KH,0);}if((E===1)&&!!this.KH){if(this.KH.OL)A.z9([this,this.RI],this.KH
,0);this.KH=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(
aArg){A.Core.Ake._Init.call(this,aArg);this.__proto__=C.C5;},_Mark:function(D){var
B;A.Core.Ake._Mark.call(this,D);if((B=this.KH)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANj:0xFFFFFFFF,ANk:0xFFFFFFFF,ANo:0xFFFFFFFF
,ANn:0xFFFFFFFF,AQ:0xFFFFFFFF,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;var DD=
this.ANn;var DO=this.ANo;var DI=this.ANj;var DN=this.ANk;var B3=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Cj=Cj+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
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
)+1))>>8)&0xFF)<<16);}if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Cj*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CY.Ave(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awt:
function(E){var B;if(E===this.ANj)return;this.ANj=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awu:function(E){var B;if(E===this.ANk)return;this.ANk=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aww:function(E){var B;
if(E===this.ANo)return;this.ANo=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},Awv:function(E){var B;if(E===this.ANn)return;this.ANn=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fp:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kn:function(CY
,aClip,aOffset,Cj,aBlend){var B;var DD;var DO;var DI;var DN;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;DD=DO=DI=DN=B3;if(Cj<256){DD=(DD&0x00FFFFFF
)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.Bic(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Nh:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(
0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NP={timer:null,Al:null,MN:-1,AQ:0xFFFFFFFF,Au2:
0x1F,TQ:0,Dx:0,Anj:A.wf,Vz:false,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;var
Ns=this.TQ;if(this.MN>=0)Ns=this.MN;if(!this.Al||(Ns>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B3=this.AQ;var Kg=(((Cj+1)*255)>>
8)+1;var Oh=this.Au2;var Az=A.abh(this.M,aOffset);var AKY=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anj);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kg<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kg)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}if(((this.
Anj[0]>0)&&(AKY[0]>0))&&!((Oh&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKY[
0];if(((Oh&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oh=Oh|0x4;}else if(((Oh&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oh=Oh|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oh=Oh|0x5;}}if(((this.Anj[1]>0)&&(AKY[1]>0))&&!((Oh&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKY[1];if(((Oh&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oh=Oh|0x8;}else if(((Oh&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oh=Oh|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oh=Oh|
0xA;}}CY.Bib(aClip,this.Al,Ns,Az,Oh,DD,DO,DN,DI,aBlend);},RI:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(G){var B;var Ns=
this.MN;var Tm=0;if(!!this.Al)Tm=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MN<0))&&(Tm>0))this.Dx=this.timer.Bs-(this.TQ*this.Al.FrameDelay);if(
!!this.timer&&(Tm>0)){var Au=(this.timer.Bs-this.Dx)|0;Ns=(Au/this.Al.FrameDelay
)|0;if(Au>=Tm){Ns=Ns%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Au%Tm);}}if(((Ns!==
this.MN)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MN=Ns;if(!Tm&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zm:function(E){var B;if(this.Vz===E)return;this.Vz=E;this.MN=-1;if(
!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Me],this.timer,0);A.pe([this,this.
Me],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9P:function(
E){var B;if(E===this.Au2)return;this.Au2=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cw:function(E){var B;if(E<0)E=0;if((E===this.TQ)&&(this.MN===-1)
)return;this.TQ=E;if(!this.timer)this.MN=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OL)A.z9([this,this.RI],this.Al,0);this.Al=E;this.MN=-1;if(!!E&&E.OL)A.zV([this,this.
RI],E,0);if(this.Vz){this.Zm(false);this.Zm(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},A95:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anj))return;this.Anj=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au2&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.
__proto__=C.NP;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MN:0,AQ:0xFFFFFFFF
,Ki:0x12,TQ:0,G8:255,Vz:false,Aa2:false,Kn:function(CY,aClip,aOffset,Cj,aBlend){
var B;var Ns=this.TQ;if(this.MN>=0)Ns=this.MN;if(!this.Al||(Ns>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C4=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B3=this.AQ;var Kg=(((
Cj+1)*this.G8)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kg<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kg)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C4))CY.A5H(aClip,this.Al,Ns,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CY.BoA(aClip,this.Al,Ns
,A.abh(AE,aOffset),[].concat(BD,C4),DD,DO,DN,DI,aBlend,true);},RI:function(G){var
B;if(((this.Aa2&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(
G){var B;var Ns=this.MN;var Tm=0;if(!!this.Al)Tm=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MN<0))&&(Tm>0))this.Dx=this.timer.Bs-(this.TQ*this.Al.FrameDelay
);if(!!this.timer&&(Tm>0)){var Au=(this.timer.Bs-this.Dx)|0;Ns=(Au/this.Al.FrameDelay
)|0;if(Au>=Tm){Ns=Ns%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Au%Tm);}}if(((Ns!==
this.MN)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MN=Ns;if(!Tm&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},I$:function(E
){if(E===this.Aa2)return;this.Aa2=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zm:function(
E){var B;if(this.Vz===E)return;this.Vz=E;this.MN=-1;if(!E&&!!this.timer){A.z9([this
,this.Me],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aeg);A.zV([this,this.Me],this.timer,0);A.pe([this,this.Me],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Ki)return;
this.Ki=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cw:function(E){
var B;if(E<0)E=0;if((E===this.TQ)&&(this.MN===-1))return;this.TQ=E;if(!this.timer
)this.MN=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OL)A.z9([this,this.RI],this.
Al,0);this.Al=E;this.MN=-1;if(!!E&&E.OL)A.zV([this,this.RI],E,0);if(this.Vz){this.
Zm(false);this.Zm(true);}if(((this.Aa2&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
Dk:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G8)return;this.G8=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cr(
0x400,0x0);else this.Cr(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E7;var Bu=this.Ki;var C4=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C4[0]||!C4[1])return E7;var Df=[0,0
,width,height];var B4=Df;if(((Bu&0x40)===0x40)){var A31=((((Df[2]-Df[0])<<16)+((
C4[0]/2)|0))/C4[0])|0;var AA7=((((Df[3]-Df[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var Ai0=
A31;if(AA7>Ai0)Ai0=AA7;B4=A.abL(B4,((C4[0]*Ai0)+32768)>>16);B4=A.abI(B4,((C4[1]*
Ai0)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A31=((((Df[2]-Df[0])<<16)+((C4[
0]/2)|0))/C4[0])|0;var AA7=((((Df[3]-Df[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var Ai0=
A31;if(AA7<Ai0)Ai0=AA7;B4=A.abL(B4,((C4[0]*Ai0)+32768)>>16);B4=A.abI(B4,((C4[1]*
Ai0)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C4);if((B4[2]-B4[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},BkB:function(){return this.
AQ;},ASu:function(){return this.TQ;},_Init:function(aArg){A.Core.Et._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CI:
A.jV,String:A.jV,Of:null,Ami:A.wf,Jc:0,N4:0,AcJ:0,Br:A.wf,Ki:0x12,AQ:0xFFFFFFFF,
Afy:false,Aa2:false,Yi:false,AN9:false,HX:false,Lb:function(){if(!!this.Of){this.
A16(this.Of);this.Of=null;}},Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;if((this.
CI===A.jV)||!this.B6)return;var Bu=this.Ki;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kg=(((Cj+1)*255)>>8)+1;
var Kf=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kf<1)return;DD=DO=DI=DN=col;if(Kg<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kg)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj3())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kf===1)&&!((Bu&0x40)===
0x40)){CY.A59(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N4>0)leading=(this.N4-font.
Ascent)-font.Descent;var AaK=(font.Ascent+font.Descent)+leading;var ByB=aClip[1]-
AE[1];var ByC=aClip[3]-AE[1];var A1i=AE[2]-AE[0];var Dg=0;var O=1;var B3=this.CI.
charCodeAt(1)||0;while(((Dg+AaK)<ByB)&&(B3>0)){O=O+B3;Dg=Dg+AaK;B3=this.CI.charCodeAt(
O)||0;}while((Dg<ByC)&&(B3>0)){var Ma=A.abe(Bq,[0,Dg]);var Amb=0;var Pa=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B3)||0)!==0x00))Pa=true;if(Pa&&!!(Bu&0x6
)){var ApZ=O+B3;var Aze=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azf=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Aze<0)||(Aze>=ApZ))&&((Azf<0)||(Azf>=
ApZ)))Pa=false;}if(Pa)Amb=A1i;else if(((Bu&0x4)===0x4))Ma=[(Ma[0]-A1i)+font.Yn(this.
CI,O+1,B3-1),Ma[1]];else if(((Bu&0x2)===0x2))Ma=[(Ma[0]-((A1i/2)|0))+((font.Yn(this.
CI,O+1,B3-1)/2)|0),Ma[1]];CY.A59(aClip,font,this.CI,O+1,B3-1,Df,Ma,Amb,0,DD,DO,DN
,DI,true);O=O+B3;Dg=Dg+AaK;B3=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfV;BfV=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfV&&
!this.AcJ)&&this.Afy)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HX=false;A.pe([this,this.Pd],this);}if(((this.Yi&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pd],this);}A.Core.Et.H.call(this,E);A.pe([this
,this.AiT],this);},Byt:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bys:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A16:function(aBidi){if(!aBidi)return;A.rB(aBidi);},ByP:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiT:function(G){A.pe(this.El
,this);},Pd:function(G){A.pe([this,this.XG],this);},XG:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xy=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afy){
if(this.AcJ>0)Xy=this.AcJ;else if(!this.Aa2)Xy=width-(this.Jc*2);else Xy=width;if(
Xy<0)Xy=1;}if(!!this.Of){this.A16(this.Of);this.Of=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN9)this.Of=this.ByP(length
);this.CI=font.BnY(this.String,0,Xy,length,this.Of);if(!!this.Of&&!this.Bju()){this.
A16(this.Of);this.Of=null;}}else this.CI=A.jV;this.Ami=BD;if(((this.Yi&&(this.CI
!==A.jV))&&!this.Aa2)&&!!font){var Bu=this.Ki;var leading=font.Leading;var ID=this.
CI;var AKS=this.Aj3();if(((Bu&0x80)===0x80)){if(AKS)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AA2=(font.
Ascent+font.Descent)+leading;var Kf=ID.charCodeAt(0)||0;var AlT=((height+leading
)/AA2)|0;var A1w=false;var AJD=false;if(AlT<=0)AlT=1;if(Kf>AlT){var Bf=0;var AA3=
0;var AKQ=Kf-1;var K2;var Nt=ID.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AA3=Kf-AlT;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AA3=((Kf-AlT)/2)|0;AKQ=(AA3+AlT)-1;}else
AKQ=AlT-1;A1w=AA3>0;AJD=AKQ<(Kf-1);for(K2=1;Bf<AA3;Bf=Bf+1)K2=K2+(ID.charCodeAt(
K2)||0);if(AJD)for(Nt=K2;Bf<AKQ;Bf=Bf+1)Nt=Nt+(ID.charCodeAt(Nt)||0);if(A1w){var
IY=ID.charCodeAt(K2)||0;tmp=(Hq+A.abW(ID,K2,IY))+Hq;tmp=A.abQ(tmp,0,(IY+2)&0xFFFF
);K2=K2+IY;if((tmp.charCodeAt(IY)||0)===0x0A){tmp=A.abQ(tmp,IY,0xFEFF);tmp=A.abQ(
tmp,IY+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(ID,K2,Nt-K2);if(AJD&&(
Nt>=K2)){var IY=ID.charCodeAt(Nt)||0;var QA=(Hq+A.abW(ID,Nt,IY))+Hq;QA=A.abQ(QA,
0,(IY+2)&0xFFFF);QA=A.abQ(QA,1,0xFEFF);if((QA.charCodeAt(IY)||0)===0x0A){QA=A.abQ(
QA,IY,0xFEFF);QA=A.abQ(QA,IY+1,0x0A);}if((QA.charCodeAt(2)||0)===0x0A){QA=A.abQ(
QA,2,0xFEFF);QA=A.abQ(QA,1,0x0A);}else QA=A.abQ(QA,1,0xFEFF);tmp=tmp+QA;}ID=String.
fromCharCode(AlT&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKo=width-(this.Jc*2);if(this.
Afy&&(this.AcJ>0))AKo=this.AcJ;Kf=ID.charCodeAt(0)||0;for(;Bf<Kf;Bf=Bf+1){var Al_=
A1w&&!Bf;var Al$=AJD&&(Bf===(Kf-1));var Xo=false;var Xp=false;var Aue=AKS;if((AKS&&
Al_)&&!Al$){Al_=false;Al$=true;}else if((AKS&&Al$)&&!Al_){Al$=false;Al_=true;}var
XH=inx+1;var IY=ID.charCodeAt(inx)||0;var K2=XH;var Nt=(XH+IY)-2;var A2j=-1;var A2k=-
1;if(!this.Afy&&(font.Yn(ID,XH,IY-1)>AKo)){var AoV=Bu;if(((AoV&0x2)===0x2)&&!!(AoV&
0x5))AoV&=~0x2;if(((AoV&0x2)===0x2))AoV&=~0x5;if(((AoV&0x4)===0x4))Xo=true;else if(((
AoV&0x2)===0x2)){Xo=true;Xp=true;}else Xp=true;}if((ID.charCodeAt(K2)||0)===0x0A
)K2=K2+1;if((ID.charCodeAt(Nt)||0)===0x0A)Nt=Nt-1;while(Xo&&((ID.charCodeAt(K2)||
0)===0xFEFF))K2=K2+1;while(Xp&&((ID.charCodeAt(Nt)||0)===0xFEFF))Nt=Nt-1;Xo=Xo&&
!Al$;Xp=Xp&&!Al_;while((((Xo||Xp)||Al_)||Al$)&&(K2<Nt)){if((Xo&&(Aue||!Xp))||Al_
){if(A2j>0)ID=A.abQ(ID,A2j,0xFEFF);ID=A.abQ(ID,K2,0x2026);A2j=K2;K2=K2+1;Aue=!Aue;
Al_=false;if(font.Yn(ID,XH,IY-1)<=AKo){Xo=false;Xp=false;}else Xo=Xo||!Xp;}if((Xp&&(
!Aue||!Xo))||Al$){if(A2k>0)ID=A.abQ(ID,A2k,0xFEFF);ID=A.abQ(ID,Nt,0x2026);A2k=Nt;
Nt=Nt-1;Aue=!Aue;Al$=false;if(font.Yn(ID,XH,IY-1)<=AKo){Xo=false;Xp=false;}else Xp=
Xp||!Xo;}}inx=inx+IY;}this.Ami=[font.A6D(ID),((ID.charCodeAt(0)||0)*AA2)-leading
];this.CI=ID;}if(this.Aa2&&(this.CI!==A.jV)){var At2=[this.Jc,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),At2),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiT],this);},Bl5:function(
E){if(E===this.AN9)return;this.AN9=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pd],this);},Hm:function(E){if(E<0)E=0;if(this.Jc===E)return;this.Jc=E;this.CI=A.
jV;this.HX=false;A.pe([this,this.Pd],this);},Aw2:function(E){var B;if(E<0)E=0;if(
this.N4===E)return;this.N4=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yi){this.CI=A.jV;this.HX=false;A.pe([this,this.Pd],this);}if(this.Aa2&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiT],this);}
,Bl4:function(E){if(E===this.Yi)return;this.Yi=E;if(((this.Afy&&!!!this.AcJ)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pd],this);},Q5:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcJ&&this.Afy)||!!E)||this.Yi)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I$:function(E){if(E===this.Aa2)return;this.Aa2=E;if(E&&this.Yi){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pd],this);}if(E&&this.HX){var At2=[this.Jc,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),At2),this.Br));this.U=this.U&~
0x2000;}},BnF:function(E){if(E<0)E=0;if(E===this.AcJ)return;this.AcJ=E;if(this.Afy&&
this.HX){this.CI=A.jV;this.HX=false;A.pe([this,this.Pd],this);}if(((!!!E&&this.Afy
)||this.Yi)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KR:function(
E){if(E===this.Afy)return;this.Afy=E;if(this.HX){this.CI=A.jV;this.HX=false;A.pe([
this,this.Pd],this);}if(((E&&!!!this.AcJ)||this.Yi)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gb:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HX)A.pe([this
,this.AiT],this);},A6:function(E){var B;if(E===this.Ki)return;this.Ki=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yi){this.CI=A.jV;this.HX=false;
A.pe([this,this.Pd],this);}if(this.HX)A.pe([this,this.AiT],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pd],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pd],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Aj3:function(
){if(!this.HX)this.XG(this);if(!this.Of)return false;var result=false;var bidi=this.
Of;result=A.v2(bidi);return result;},Bju:function(){if(!this.HX)this.XG(this);if(
!this.Of)return false;var result=false;var bidi=this.Of;result=A.zZ(bidi);return result;
},AGO:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yi)return BD;if(
!this.HX)this.XG(this);if(aIndex<0)aIndex=0;var Bz0=(this.CI.charCodeAt(0)||0)-1;
var Md=this.CI.charCodeAt(1)||0;var inx=1;var Ai5=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<Bz0)&&((inx+Md)<=aIndex)){inx=inx+Md;Bf=Bf+1;Ai5=Ai5+1;
aIndex=aIndex+1;Md=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Md))aIndex=inx+Md;
if(!!this.Of)aIndex=(inx+this.Bys(this.Of,(inx+1)-Ai5,(inx+Md)-Ai5,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Ix=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Ix!==0xFEFF)&&(Ix!==0x0A);}return[col,Bf];},AnP:function(AoK){if(((this.String===
A.jV)||!this.B6)||this.Yi)return 0;if(!this.HX)this.XG(this);var Bf=AoK[1];var col=
AoK[0];var inx=1;var Ai5=2;var Kf=this.CI.charCodeAt(0)||0;var Md=this.CI.charCodeAt(
1)||0;if(Bf>=Kf){Bf=Kf-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Md>0)){inx=inx+Md;Bf=Bf-1;Ai5=Ai5+1;Md=this.CI.charCodeAt(inx)||0;
}var Xx=inx;var AKR=(inx-Ai5)+1;var ApZ=(AKR+Md)-1;var AAO=false;while((col>=0)&&(
Md>1)){var Ix=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Md=Md-1;AAO=(Ix===0xFEFF)||(
Ix===0x0A);if(!AAO){col=col-1;Xx=inx;}}if((!AAO&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAO=true;if(AAO)Xx=Xx+1;Xx=Xx-Ai5;if(!!this.Of)Xx=AKR+this.Byt(
this.Of,AKR,ApZ,Xx-AKR);return Xx;},ATV:function(KZ){var B;if((this.String===A.jV
)||!this.B6)return BD;if(!this.HX)this.XG(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B6;var Bu=this.Ki;var Kf=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(KZ[1]<AE[1])KZ=[KZ[0],AE[1]];if(KZ[1]>=AE[3])KZ=[
KZ[0],AE[3]-1];if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AaK=(
font.Ascent+font.Descent)+leading;var Bf=((KZ[1]-AE[1])/AaK)|0;var NB=this.AC2(Bf
);var Md=NB.length;var Pa=false;if(((Bu&0x80)===0x80)){if(this.Aj3())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kf-1)))Pa=true;if((Pa&&(
NB.indexOf(String.fromCharCode(0x20),0)<0))&&(NB.indexOf(String.fromCharCode(0xA0
),0)<0))Pa=false;if(Pa){var inx=1;var ApY=Bf;while(ApY>0){inx=inx+(this.CI.charCodeAt(
inx)||0);ApY=ApY-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pa=false;}var Amb=0;var Eo=0;if(
Pa)Amb=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=(AE[2]-AE[0])-font.Yn(NB,0,Md);else
if(((Bu&0x2)===0x2))Eo=(((AE[2]-AE[0])/2)|0)-((font.Yn(NB,0,Md)/2)|0);var col=font.
Bi7(NB,0,Md,(KZ[0]-AE[0])-Eo,Amb);if(col<0)col=0;return[col,Bf];},Aff:function(AoK
){var B;if((this.String===A.jV)||!this.B6)return BD;if(!this.HX)this.XG(this);var
Kf=this.CI.charCodeAt(0)||0;var font=this.B6;var Bu=this.Ki;var Bf=AoK[1];var col=
AoK[0];if(Bf>=Kf){Bf=Kf-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NB=this.AC2(
Bf);var Md=NB.length;var AE=this.Db();var Pa=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj3())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kf-1)))Pa=true;if((Pa&&(NB.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NB.indexOf(String.fromCharCode(0xA0),0)<0))Pa=false;if(Pa){var inx=1;var
ApY=Bf;while(ApY>0){inx=inx+(this.CI.charCodeAt(inx)||0);ApY=ApY-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pa=false;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Amb=0;var Eo=AE[0];if(Pa)Amb=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=AE[2]-font.
Yn(NB,0,Md);else if(((Bu&0x2)===0x2))Eo=(Eo+(((AE[2]-AE[0])/2)|0))-((font.Yn(NB,
0,Md)/2)|0);var pos=font.Bi3(NB,0,Md,col,Amb);if(pos<0)pos=0;return[Eo+pos,Dg];}
,AOP:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E7;if(!this.HX)
this.XG(this);var Kf=this.CI.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kf)&&(Ad>0)))return E7;var Bu=this.Ki;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jc*2);if(((
Bu&0x80)===0x80)){if(this.Aj3())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N4>0)leading=(this.N4-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var Eo=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AA4=(this.CI.charCodeAt(inx)||0)-1;var BfW=font.Yn(this.CI,inx+1,AA4);var A3X=font.
A6O(this.CI,inx+1,AA4);var Ap0=BfW;var AaK=font.Ascent+font.Descent;var ABg=(Kf*((
font.Ascent+font.Descent)+leading))-leading;if(!Kf)ABg=AaK;if((((this.CI.charCodeAt((
inx+AA4)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AA4)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var ApZ=(inx+1)+AA4;var Aze=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azf=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Aze>=0)&&(Aze<ApZ))||((Azf>=0)&&(Azf<ApZ)))Ap0=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABg>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap0>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Eo=width-Ap0;else if(((Bu&0x2)===0x2))Eo=((width/2)|0)-((
Ap0/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-ABg);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((ABg/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((ABg/2)|0);Eo=(Eo+A3X[0])+this.Jc;
Ap0=(Ap0+(A3X[2]-A3X[0]))-BfW;var B4;{var Bfm=[Bd[0]+Eo,Bd[1]+Dg];B4=[].concat(Bfm
,A.abf(Bfm,[Ap0,AaK]));}return A.abh(B4,this.Br);},AC2:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XG(this);var Kf=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kf))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XH=inx;var AtI=inx+(this.CI.charCodeAt(
inx)||0);var Ix=0x00;do{XH=XH+1;Ix=this.CI.charCodeAt(XH)||0;}while(((Ix===0xFEFF
)||(Ix===0x0A))&&(XH<=AtI));do{AtI=AtI-1;Ix=this.CI.charCodeAt(AtI)||0;}while(((
Ix===0xFEFF)||(Ix===0x0A))&&(XH<=AtI));var NB=A.abW(this.CI,XH,(AtI-XH)+1);var Apr;
for(Apr=NB.indexOf(String.fromCharCode(0xFEFF),0);Apr>=0;Apr=NB.indexOf(String.fromCharCode(
0xFEFF),Apr+1)){var Xx=Apr+1;while((NB.charCodeAt(Xx)||0)===0xFEFF)Xx=Xx+1;NB=A.
ab1(NB,Apr,Xx-Apr);}return NB;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E7;if(!this.HX)this.XG(this);if(this.CI===A.jV)return E7;var leading=this.
B6.Leading;var AA2=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N4>0
){leading=(this.N4-this.B6.Ascent)-this.B6.Descent;AA2=this.N4;}if(A.aaX(this.Ami
,BD))this.Ami=[this.B6.A6D(this.CI),this.Ami[1]];this.Ami=[this.Ami[0],((this.CI.
charCodeAt(0)||0)*AA2)-leading];var Bu=this.Ki;var Bd=this.M;var At2=this.Jc;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[At2,0,width-At2,height];var B4=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Ami));if(((Bu&0x80)===0x80)){if(
this.Aj3())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xy=
this.AcJ;if(Xy<=0)Xy=width-(this.Jc*2);if(Xy<0)Xy=0;if(Xy>(B4[2]-B4[0]))B4=A.abL(
B4,Xy);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B4[3]-B4[1])>(Df[3]-Df[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B4[2]-B4[0])>(Df[
2]-Df[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B4[2]-B4[0])!==(Df[2]-Df[0]
)){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2)===0x2)
)B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[3]-B4[
1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1]));else
if(((Bu&0x100)===0x100))B4=A.abO(B4,((Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-B4[1
])/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B4=
A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(
0,2));return A.abh(B4,this.Br);},_Init:function(aArg){A.Core.Et._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lb();this.__proto__=A.Core.Et;
A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuM={attrString:null,AttrSet:
null,String:A.jV,Ki:0x12,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Cj=Cj+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CY.Bh$(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cj*255)>>8,(Cj*255)>>8,(Cj*255)>>8,(Cj
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pd],this);}A.Core.Et.H.call(this,E);A.pe([this,this.AiT],this
);},AiT:function(G){},XG:function(G){var B;var ALz;ALz=(B=this.M)[2]-B[0];if(ALz<
0)ALz=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4_
,0);if(!!this.attrString)this.attrString.BnX(this.AttrSet,this.String,ALz,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiT],this);
},Pd:function(G){A.pe([this,this.XG],this);},BfP:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Ki)return;this.Ki=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiT],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pd],this);},A9s:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BfP],this.AttrSet,0);A.z9([this,this.Pd
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BfP],this.AttrSet,0);A.zV([this,this.Pd],this.AttrSet,1);}A.pe([this,this.
Pd],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E7;
if(!this.attrString)this.XG(this);if(!this.attrString)return E7;var Bu=this.Ki;var
C4=this.attrString.Bi8();var Df=A.aaT(this.M,BD);var B4=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C4));if(!C4[0]||!C4[1])return E7;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj3())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);
this.__proto__=C.AuM;this.U=0x3;},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.An$={AiG:
null,FJ:null,Ait:0,Ais:0,U7:A.wf,Ck:A.abi(4,3,0,null),AGK:A.wf,Tj:0,ApE:0,JU:function(
E){if(A.aaX(E,this.Kx))return;A.Core.Zy.JU.call(this,E);this.Ck.Set(3,0,E[0]);this.
Ck.Set(3,1,E[1]);this.Ck.Set(3,2,1);this.Tj=0x45;this.FJ=null;A.pe([this,this.Ajb
],this);},Ku:function(E){if(A.aaX(E,this.MD))return;A.Core.Zy.Ku.call(this,E);this.
Ck.Set(2,0,E[0]);this.Ck.Set(2,1,E[1]);this.Ck.Set(2,2,1);this.Tj=0x45;this.FJ=null;
A.pe([this,this.Ajb],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.Zy.
DC.call(this,E);this.Ck.Set(1,0,E[0]);this.Ck.Set(1,1,E[1]);this.Ck.Set(1,2,1);this.
Tj=0x45;this.FJ=null;A.pe([this,this.Ajb],this);},DM:function(E){if(A.aaX(E,this.
Es))return;A.Core.Zy.DM.call(this,E);this.Ck.Set(0,0,E[0]);this.Ck.Set(0,1,E[1]);
this.Ck.Set(0,2,1);this.Tj=0x45;this.FJ=null;A.pe([this,this.Ajb],this);},A1o:function(
){return;},Ajb:function(G){var B;this.AiG=null;if(this.Tj===0x00)return;if(this.
Tj===0x45){var K3=A._NewObject(A.Graphics.AxY,0);K3=K3.ANL(this.Ck.Get(0,0),this.
Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),this.Ck.Get(2,1),
this.Ck.Get(3,0),this.Ck.Get(3,1));if(!!K3){K3.AB2(0,0);this.Ck.Set(0,2,K3.UP*240
);K3.AB2(1,0);this.Ck.Set(1,2,K3.UP*240);K3.AB2(1,1);this.Ck.Set(2,2,K3.UP*240);
K3.AB2(0,1);this.Ck.Set(3,2,K3.UP*240);}this.A1o();}if((((this.Tj===0x4D)&&!!this.
FJ)&&!!this.U7[0])&&!!this.U7[1]){var Ai8=[].concat(BD,this.U7);var Ai7=this.AGK;
var Af4=Ai8[0]-Ai7[0];var Az=Ai8[2]-Ai7[0];var D8=Ai8[1]-Ai7[1];var Rx=Ai8[3]-Ai7[
1];this.FJ.Afa(Af4,D8);this.Ck.Set(0,0,this.FJ.P4+this.Ais);this.Ck.Set(0,1,this.
FJ.P5+this.Ait);this.Ck.Set(0,2,this.FJ.UP);this.FJ.Afa(Az,D8);this.Ck.Set(1,0,this.
FJ.P4+this.Ais);this.Ck.Set(1,1,this.FJ.P5+this.Ait);this.Ck.Set(1,2,this.FJ.UP);
this.FJ.Afa(Az,Rx);this.Ck.Set(2,0,this.FJ.P4+this.Ais);this.Ck.Set(2,1,this.FJ.
P5+this.Ait);this.Ck.Set(2,2,this.FJ.UP);this.FJ.Afa(Af4,Rx);this.Ck.Set(3,0,this.
FJ.P4+this.Ais);this.Ck.Set(3,1,this.FJ.P5+this.Ait);this.Ck.Set(3,2,this.FJ.UP);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Es=[(this.
Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.EC=[(this.Ck.Get(1,0)+0.5)|0,(
this.Ck.Get(1,1)+0.5)|0];this.MD=[(this.Ck.Get(2,0)+0.5)|0,(this.Ck.Get(2,1)+0.5
)|0];this.Kx=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];this.A1o();}this.
ApE=this.Tj;this.Tj=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bns:function(E){if(A.aaX(E,this.AGK))return;this.AGK=E;if((this.ApE!==0x45)&&(
this.Tj===0x00)){this.Tj=this.ApE;A.pe([this,this.Ajb],this);}},Arm:function(Fh){
var B;if(!!!this.AiG){this.AiG=A._NewObject(A.Graphics.A7a,0);this.AiG.ANL(this.
Ck.Get(0,0),this.Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),
this.Ck.Get(2,1),this.Ck.Get(3,0),this.Ck.Get(3,1));}if(!this.AiG.Afa(Fh))return BD;
var Ap5=[].concat(BD,this.U7);var Eo=this.AiG.P4*(Ap5[2]-Ap5[0]);var Dg=this.AiG.
P5*(Ap5[3]-Ap5[1]);return A.abf([Eo|0,Dg|0],Ap5.slice(0,2));},A$R:function(BbQ,L6
){var B;this.AiG=null;if(!L6)throw new Error(IU);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.AxY,0);this.FJ.Bha(L6);this.Ais=BbQ[0];this.Ait=BbQ[1];this.ApE=0x4D;
this.Tj=0x00;if(!this.U7[0]||!this.U7[1])return;var Ai8=[].concat(BD,this.U7);var
Ai7=this.AGK;var Af4=Ai8[0]-Ai7[0];var Az=Ai8[2]-Ai7[0];var D8=Ai8[1]-Ai7[1];var
Rx=Ai8[3]-Ai7[1];this.FJ.Afa(Af4,D8);this.Ck.Set(0,0,this.FJ.P4+this.Ais);this.Ck.
Set(0,1,this.FJ.P5+this.Ait);this.Ck.Set(0,2,this.FJ.UP);this.FJ.Afa(Az,D8);this.
Ck.Set(1,0,this.FJ.P4+this.Ais);this.Ck.Set(1,1,this.FJ.P5+this.Ait);this.Ck.Set(
1,2,this.FJ.UP);this.FJ.Afa(Az,Rx);this.Ck.Set(2,0,this.FJ.P4+this.Ais);this.Ck.
Set(2,1,this.FJ.P5+this.Ait);this.Ck.Set(2,2,this.FJ.UP);this.FJ.Afa(Af4,Rx);this.
Ck.Set(3,0,this.FJ.P4+this.Ais);this.Ck.Set(3,1,this.FJ.P5+this.Ait);this.Ck.Set(
3,2,this.FJ.UP);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Es=[(this.Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.EC=[(this.Ck.
Get(1,0)+0.5)|0,(this.Ck.Get(1,1)+0.5)|0];this.MD=[(this.Ck.Get(2,0)+0.5)|0,(this.
Ck.Get(2,1)+0.5)|0];this.Kx=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1o();},_Init:
function(aArg){A.Core.Zy._Init.call(this,aArg);(this.Ck=[]).__proto__=C.An$.Ck;this.
__proto__=C.An$;this.U=0x3;},_Mark:function(D){var B;A.Core.Zy._Mark.call(this,D
);if((B=this.AiG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVB={Fu:null,bitmap:null
,P:null,G8:255,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nv=aOffset[0];var Nw=aOffset[1];var AE=[].concat(BD,this.
U7);aBlend=aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;var Beh;var Bei;var Bej;var Bek;
var Bz$=this.G8;Beh=Bei=Bej=Bek=Bz$;var Alv=255|(255<<8)|(255<<16)|((((Cj*Beh)>>
8)&0xFF)<<24);var Alw=255|(255<<8)|(255<<16)|((((Cj*Bei)>>8)&0xFF)<<24);var Byu=
255|(255<<8)|(255<<16)|((((Cj*Bej)>>8)&0xFF)<<24);var Byv=255|(255<<8)|(255<<16)|((((
Cj*Bek)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E7,aOffset));CY.AhR(aClip,this.bitmap
,0,this.Ck.Get(0,0)+Nv,this.Ck.Get(0,1)+Nw,this.Ck.Get(0,2),this.Ck.Get(1,0)+Nv,
this.Ck.Get(1,1)+Nw,this.Ck.Get(1,2),this.Ck.Get(2,0)+Nv,this.Ck.Get(2,1)+Nw,this.
Ck.Get(2,2),this.Ck.Get(3,0)+Nv,this.Ck.Get(3,1)+Nw,this.Ck.Get(3,2),AE,Alv,Alw,
Byu,Byv,aBlend,true);},G3:function(CN){if(!this.P||!this.Fu)return null;var BN=(
A.Core.Aec.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqF.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fw=BD;var B0=this.Fu.Ab;while(!!B0&&(B0!==this.P)){
Fw=A.abe(Fw,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fu;if(!!BN&&!BN.Down)this.Fu=null;
if(!!BN){BN.H0=A.abf(this.Arm(BN.H0),Fw);BN.NR=A.abf(this.Arm(BN.NR),Fw);return X.
G3(BN);}if(!!D4){var BAd=A.abf(this.Arm(A.abe(D4.H0,D4.DG)),Fw);D4.H0=A.abf(this.
Arm(D4.H0),Fw);D4.NR=A.abf(this.Arm(D4.NR),Fw);D4.DG=A.abe(D4.H0,BAd);return X.G3(
D4);}return C.An$.G3.call(this,CN);},Yd:function(Da,BF,Od,Aag,Ac3,Ac2){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arm(pos
);var Ap5=[].concat(BD,this.U7);if(!A.wa(Ap5,pos))return null;var JE=this.P.Yd(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BF,Od,Aag,null
,Ac2);if(!!JE)this.Fu=JE.Ci;else this.Fu=null;if(!!this.Fu)return A._NewObject(A.
Core.AuU,0).Initialize(this,BD);return null;},RI:function(G){var B;var Bel=this.
U7;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
U7=this.bitmap.FrameSize;else this.U7=BD;if(((A.aaX(Bel,this.U7)||((this.ApE===0x45
)&&(this.Tj===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApE!==0x45)&&(this.Tj===0x00))&&!A.aaX(Bel,this.U7)){this.Tj=this.ApE;
A.pe([this,this.Ajb],this);}},Dk:function(E){var B;if(E===this.G8)return;this.G8=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bmx:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Is);if(!!this.P){A.
z9([this,this.RI],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RI
],E,0);this.bitmap=E.FG;}this.RI(this);},Awj:function(){return this.G8;},_Init:function(
aArg){C.An$._Init.call(this,aArg);this.__proto__=C.AVB;},_Mark:function(D){var B;
C.An$._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aen={Hy:null,AQ:0xFFFFFFFF,DG:A.wf
,AOw:false,Lb:function(){this.A1H();},Kn:function(CY,aClip,aOffset,Cj,aBlend){if(
!this.Hy)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Cj=Cj+1;DD=DO=DI=DN=B3;
if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.
Aen(aClip,this.Hy,A.abh(this.M,aOffset),this.AOw,this.DG,DD,DO,DN,DI,true,true,0
);},A1H:function(){return;},Ajc:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},AnD:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},Bms:function(E){var B;if(E===this.AOw)return;this.
AOw=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Zs:function(
E){var B;if(E===this.Hy)return;if(!!this.Hy)A.z9([this,this.Ajc],this.Hy,0);this.
Hy=E;if(!!this.Hy)A.zV([this,this.Ajc],this.Hy,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.Aen;},
_Done:function(){this.Lb();this.__proto__=A.Core.Et;A.Core.Et._Done.call(this);}
,_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.Hy)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Ho={Hy:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Lb:function(){this.A1H();},Kn:function(CY,aClip,aOffset,Cj,aBlend
){if(!this.Hy)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Cj=Cj+1;DD=DO=DI=
DN=B3;if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CY.Ho(aClip,this.Hy,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1H:function(){return;},Ajc:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.
M);},AnD:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Nh:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},Zs:function(E){var B;if(E===this.Hy)return;if(!!this.
Hy)A.z9([this,this.Ajc],this.Hy,0);this.Hy=E;if(!!this.Hy)A.zV([this,this.Ajc],this.
Hy,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(
this,aArg);this.__proto__=C.Ho;},_Done:function(){this.Lb();this.__proto__=A.Core.
Et;A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.Hy)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEn={A4R:0x1,A4Q:0x2,A4S:0x4,A4V:0x8,A4U:0x10,A4T:0x20,BFG:0x40,BFH:0x80,BFR:
0x100};C.BFW={A4R:0x1,A4Q:0x2,A4S:0x4,A4V:0x8,A4U:0x10,A4T:0x20,BCV:0x40,BCU:0x80
,BC0:0x100};C.BE2={Normal:0,BFA:1,BFy:2,BFz:3};
C._Init=function(){C.C5.__proto__=A.Core.Ake;C.AL.__proto__=A.Core.Et;C.BU.__proto__=
A.Core.Et;C.NP.__proto__=A.Core.Et;C.Ap.__proto__=A.Core.Et;C.Text.__proto__=A.Core.
Et;C.AuM.__proto__=A.Core.Et;C.An$.__proto__=A.Core.Zy;C.AVB.__proto__=C.An$;C.Aen.
__proto__=A.Core.Et;C.Ho.__proto__=A.Core.Et;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */