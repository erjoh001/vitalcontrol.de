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
var Cc=[1,1];var BD=[0,0];var E6=[0,0,0,0];var Hq="\uFEFF";var IT="No matrix to perform 3D transformation";
var Is="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C5={KH:null,Ak9:1,Ak8:1,AQ:0xFFFFFFFF,Kn:function(CY,aClip,aOffset,Cj,aBlend){var
B;var Agp=this.Ak8;var Agq=this.Ak9;var Ady=A.abf(this.Es,aOffset);var Adz=A.abf(
this.EC,aOffset);var Als;var Alt;var B2=this.AQ;if(A.aaX(Ady,Adz))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;Als=Alt=B2;if(Cj<256){Als=(Als&0x00FFFFFF)|((((
Cj*((Als>>24)&0xFF))>>8)&0xFF)<<24);Alt=(Alt&0x00FFFFFF)|((((Cj*((Alt>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agp===1)&&(Agq===1))CY.AuZ(aClip,Ady,Adz,Als,Alt,aBlend);else
CY.Bh1(aClip,Ady,Adz,Agp,Agq,Als,Alt,aBlend);},GetExtent:function(){var Agp=this.
Ak8;var Agq=this.Ak9;var Ady=this.Es;var Adz=this.EC;if(((Agp===1)&&(Agq===1))||
A.aaX(Ady,Adz))return A.Core.Akd.GetExtent.call(this);var AiA=Agp/2;var AiB=Agq/
2;var Aph=Ady[0];var Api=Ady[1];var Apj=Adz[0];var Apk=Adz[1];var J9=Apj-Aph;var
J_=Apk-Api;var IX=Math.sqrt((J9*J9)+(J_*J_));J9=J9/IX;J_=J_/IX;var Bcq=Aph+(J_*AiA
);var Bcr=Api-(J9*AiA);var AJs=Apj+(J_*AiB);var AJt=Apk-(J9*AiB);var AJu=Apj-(J_
*AiB);var AJv=Apk+(J9*AiB);var AJw=Aph-(J_*AiA);var AJx=Api+(J9*AiA);var left=Bcq;
var right=Bcq;var top=Bcr;var bottom=Bcr;if(AJs<left)left=AJs;if(AJu<left)left=AJu;
if(AJw<left)left=AJw;if(AJs>right)right=AJs;if(AJu>right)right=AJu;if(AJw>right)
right=AJw;if(AJt<top)top=AJt;if(AJv<top)top=AJv;if(AJx<top)top=AJx;if(AJt>bottom
)bottom=AJt;if(AJv>bottom)bottom=AJv;if(AJx>bottom)bottom=AJx;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RJ:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_u:function(E){var B;if(E<1)E=1;if(E===this.Ak9)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak9=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak8!==1))&&!this.KH){
this.KH=A.aaL(A.aci.AsS);if(this.KH.OL)A.zV([this,this.RJ],this.KH,0);}if(((E===
1)&&(this.Ak8===1))&&!!this.KH){if(this.KH.OL)A.z9([this,this.RJ],this.KH,0);this.
KH=null;}},A_t:function(E){var B;if(E<1)E=1;if(E===this.Ak8)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak8=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak9!==1))&&!this.
KH){this.KH=A.aaL(A.aci.AsS);if(this.KH.OL)A.zV([this,this.RJ],this.KH,0);}if(((
E===1)&&(this.Ak9===1))&&!!this.KH){if(this.KH.OL)A.z9([this,this.RJ],this.KH,0);
this.KH=null;}},Ng:function(E){var B;if(E<1)E=1;if((E===this.Ak8)&&(E===this.Ak9
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ak8=E;this.Ak9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KH){this.KH=A.aaL(A.aci.AsS);if(this.KH.OL)A.zV([this,this.
RJ],this.KH,0);}if((E===1)&&!!this.KH){if(this.KH.OL)A.z9([this,this.RJ],this.KH
,0);this.KH=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(
aArg){A.Core.Akd._Init.call(this,aArg);this.__proto__=C.C5;},_Mark:function(D){var
B;A.Core.Akd._Mark.call(this,D);if((B=this.KH)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANg:0xFFFFFFFF,ANh:0xFFFFFFFF,ANl:0xFFFFFFFF
,ANk:0xFFFFFFFF,AQ:0xFFFFFFFF,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;var DD=
this.ANk;var DO=this.ANl;var DI=this.ANg;var DN=this.ANh;var B2=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Cj=Cj+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
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
)+1))>>8)&0xFF)<<16);}if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Cj*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CY.Avc(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awr:
function(E){var B;if(E===this.ANg)return;this.ANg=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Aws:function(E){var B;if(E===this.ANh)return;this.ANh=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Awu:function(E){var B;
if(E===this.ANl)return;this.ANl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},Awt:function(E){var B;if(E===this.ANk)return;this.ANk=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fo:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BT={Width:1,AQ:0xFFFFFFFF,Kn:function(CY
,aClip,aOffset,Cj,aBlend){var B;var DD;var DO;var DI;var DN;var B2=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;DD=DO=DI=DN=B2;if(Cj<256){DD=(DD&0x00FFFFFF
)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.BhZ(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Ng:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(
0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.
BT;},_className:"Views::Border"};C.NP={timer:null,Al:null,MM:-1,AQ:0xFFFFFFFF,Au0:
0x1F,TQ:0,Dx:0,Anh:A.wf,Vz:false,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;var
Nr=this.TQ;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B2=this.AQ;var Kg=(((Cj+1)*255)>>
8)+1;var Oh=this.Au0;var Az=A.abh(this.M,aOffset);var AKV=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anh);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B2;if(Kg<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kg)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}if(((this.
Anh[0]>0)&&(AKV[0]>0))&&!((Oh&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKV[
0];if(((Oh&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oh=Oh|0x4;}else if(((Oh&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oh=Oh|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oh=Oh|0x5;}}if(((this.Anh[1]>0)&&(AKV[1]>0))&&!((Oh&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKV[1];if(((Oh&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oh=Oh|0x8;}else if(((Oh&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oh=Oh|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oh=Oh|
0xA;}}CY.BhY(aClip,this.Al,Nr,Az,Oh,DD,DO,DN,DI,aBlend);},RJ:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(G){var B;var Nr=
this.MM;var Tn=0;if(!!this.Al)Tn=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MM<0))&&(Tn>0))this.Dx=this.timer.Bs-(this.TQ*this.Al.FrameDelay);if(
!!this.timer&&(Tn>0)){var Au=(this.timer.Bs-this.Dx)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tn){Nr=Nr%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Au%Tn);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!Tn&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zm:function(E){var B;if(this.Vz===E)return;this.Vz=E;this.MM=-1;if(
!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Me],this.timer,0);A.pe([this,this.
Me],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9F:function(
E){var B;if(E===this.Au0)return;this.Au0=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TQ)&&(this.MM===-1)
)return;this.TQ=E;if(!this.timer)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OL)A.z9([this,this.RJ],this.Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OL)A.zV([this,this.
RJ],E,0);if(this.Vz){this.Zm(false);this.Zm(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},A9V:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anh))return;this.Anh=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au0&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.
__proto__=C.NP;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MM:0,AQ:0xFFFFFFFF
,Ki:0x12,TQ:0,G8:255,Vz:false,Aa1:false,Kn:function(CY,aClip,aOffset,Cj,aBlend){
var B;var Nr=this.TQ;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C4=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B2=this.AQ;var Kg=(((
Cj+1)*this.G8)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B2;if(Kg<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kg)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C4))CY.A5x(aClip,this.Al,Nr,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CY.Bok(aClip,this.Al,Nr
,A.abh(AE,aOffset),[].concat(BD,C4),DD,DO,DN,DI,aBlend,true);},RJ:function(G){var
B;if(((this.Aa1&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(
G){var B;var Nr=this.MM;var Tn=0;if(!!this.Al)Tn=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MM<0))&&(Tn>0))this.Dx=this.timer.Bs-(this.TQ*this.Al.FrameDelay
);if(!!this.timer&&(Tn>0)){var Au=(this.timer.Bs-this.Dx)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tn){Nr=Nr%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Au%Tn);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!Tn&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},I_:function(E
){if(E===this.Aa1)return;this.Aa1=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zm:function(
E){var B;if(this.Vz===E)return;this.Vz=E;this.MM=-1;if(!E&&!!this.timer){A.z9([this
,this.Me],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aeg);A.zV([this,this.Me],this.timer,0);A.pe([this,this.Me],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Ki)return;
this.Ki=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TQ)&&(this.MM===-1))return;this.TQ=E;if(!this.timer
)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OL)A.z9([this,this.RJ],this.
Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OL)A.zV([this,this.RJ],E,0);if(this.Vz){this.
Zm(false);this.Zm(true);}if(((this.Aa1&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
Dk:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G8)return;this.G8=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cr(
0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E6;var Bu=this.Ki;var C4=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C4[0]||!C4[1])return E6;var Df=[0,0
,width,height];var B3=Df;if(((Bu&0x40)===0x40)){var A3R=((((Df[2]-Df[0])<<16)+((
C4[0]/2)|0))/C4[0])|0;var AA2=((((Df[3]-Df[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var AiZ=
A3R;if(AA2>AiZ)AiZ=AA2;B3=A.abL(B3,((C4[0]*AiZ)+32768)>>16);B3=A.abI(B3,((C4[1]*
AiZ)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3R=((((Df[2]-Df[0])<<16)+((C4[
0]/2)|0))/C4[0])|0;var AA2=((((Df[3]-Df[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var AiZ=
A3R;if(AA2<AiZ)AiZ=AA2;B3=A.abL(B3,((C4[0]*AiZ)+32768)>>16);B3=A.abI(B3,((C4[1]*
AiZ)+32768)>>16);}else if(!((Bu&0x100)===0x100))B3=A.abK(B3,C4);if((B3[2]-B3[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B3=A.abM(B3,Df[2]-(B3[2]-B3[0]));else if(((
Bu&0x2)===0x2))B3=A.abM(B3,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B3[2]-B3[0])/2)|0));
}if((B3[3]-B3[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B3=A.abO(B3,Df[3]-(B3[3
]-B3[1]));else if(((Bu&0x10)===0x10))B3=A.abO(B3,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B3[3]-B3[1])/2)|0));}B3=A.abh(B3,Bd.slice(0,2));return B3;},Bkm:function(){return this.
AQ;},ASk:function(){return this.TQ;},_Init:function(aArg){A.Core.Et._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CI:
A.jV,String:A.jV,Of:null,Amf:A.wf,Jb:0,N4:0,AcJ:0,Br:A.wf,Ki:0x12,AQ:0xFFFFFFFF,
Afy:false,Aa1:false,Yi:false,AN6:false,HX:false,Lb:function(){if(!!this.Of){this.
A1W(this.Of);this.Of=null;}},Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;if((this.
CI===A.jV)||!this.B6)return;var Bu=this.Ki;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kg=(((Cj+1)*255)>>8)+1;
var Ke=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Ke<1)return;DD=DO=DI=DN=col;if(Kg<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kg)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kg)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Ke===1)&&!((Bu&0x40)===
0x40)){CY.A52(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N4>0)leading=(this.N4-font.
Ascent)-font.Descent;var AaJ=(font.Ascent+font.Descent)+leading;var Byi=aClip[1]-
AE[1];var Byj=aClip[3]-AE[1];var A0_=AE[2]-AE[0];var Dg=0;var O=1;var B2=this.CI.
charCodeAt(1)||0;while(((Dg+AaJ)<Byi)&&(B2>0)){O=O+B2;Dg=Dg+AaJ;B2=this.CI.charCodeAt(
O)||0;}while((Dg<Byj)&&(B2>0)){var Ma=A.abe(Bq,[0,Dg]);var Al_=0;var Pa=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B2)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B2)||0)!==0x00))Pa=true;if(Pa&&!!(Bu&0x6
)){var ApX=O+B2;var Ay$=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Aza=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Ay$<0)||(Ay$>=ApX))&&((Aza<0)||(Aza>=
ApX)))Pa=false;}if(Pa)Al_=A0_;else if(((Bu&0x4)===0x4))Ma=[(Ma[0]-A0_)+font.Yn(this.
CI,O+1,B2-1),Ma[1]];else if(((Bu&0x2)===0x2))Ma=[(Ma[0]-((A0_/2)|0))+((font.Yn(this.
CI,O+1,B2-1)/2)|0),Ma[1]];CY.A52(aClip,font,this.CI,O+1,B2-1,Df,Ma,Al_,0,DD,DO,DN
,DI,true);O=O+B2;Dg=Dg+AaJ;B2=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfK;BfK=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfK&&
!this.AcJ)&&this.Afy)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HX=false;A.pe([this,this.Pd],this);}if(((this.Yi&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pd],this);}A.Core.Et.H.call(this,E);A.pe([this
,this.AiS],this);},Bya:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bx$:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1W:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Byw:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiS:function(G){A.pe(this.El
,this);},Pd:function(G){A.pe([this,this.XG],this);},XG:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xy=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afy){
if(this.AcJ>0)Xy=this.AcJ;else if(!this.Aa1)Xy=width-(this.Jb*2);else Xy=width;if(
Xy<0)Xy=1;}if(!!this.Of){this.A1W(this.Of);this.Of=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN6)this.Of=this.Byw(length
);this.CI=font.BnJ(this.String,0,Xy,length,this.Of);if(!!this.Of&&!this.Bjf()){this.
A1W(this.Of);this.Of=null;}}else this.CI=A.jV;this.Amf=BD;if(((this.Yi&&(this.CI
!==A.jV))&&!this.Aa1)&&!!font){var Bu=this.Ki;var leading=font.Leading;var IC=this.
CI;var AKP=this.Aj2();if(((Bu&0x80)===0x80)){if(AKP)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AAX=(font.
Ascent+font.Descent)+leading;var Ke=IC.charCodeAt(0)||0;var AlQ=((height+leading
)/AAX)|0;var A1m=false;var AJA=false;if(AlQ<=0)AlQ=1;if(Ke>AlQ){var Bf=0;var AAY=
0;var AKN=Ke-1;var K2;var Ns=IC.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AAY=Ke-AlQ;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AAY=((Ke-AlQ)/2)|0;AKN=(AAY+AlQ)-1;}else
AKN=AlQ-1;A1m=AAY>0;AJA=AKN<(Ke-1);for(K2=1;Bf<AAY;Bf=Bf+1)K2=K2+(IC.charCodeAt(
K2)||0);if(AJA)for(Ns=K2;Bf<AKN;Bf=Bf+1)Ns=Ns+(IC.charCodeAt(Ns)||0);if(A1m){var
IX=IC.charCodeAt(K2)||0;tmp=(Hq+A.abW(IC,K2,IX))+Hq;tmp=A.abQ(tmp,0,(IX+2)&0xFFFF
);K2=K2+IX;if((tmp.charCodeAt(IX)||0)===0x0A){tmp=A.abQ(tmp,IX,0xFEFF);tmp=A.abQ(
tmp,IX+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IC,K2,Ns-K2);if(AJA&&(
Ns>=K2)){var IX=IC.charCodeAt(Ns)||0;var QA=(Hq+A.abW(IC,Ns,IX))+Hq;QA=A.abQ(QA,
0,(IX+2)&0xFFFF);QA=A.abQ(QA,1,0xFEFF);if((QA.charCodeAt(IX)||0)===0x0A){QA=A.abQ(
QA,IX,0xFEFF);QA=A.abQ(QA,IX+1,0x0A);}if((QA.charCodeAt(2)||0)===0x0A){QA=A.abQ(
QA,2,0xFEFF);QA=A.abQ(QA,1,0x0A);}else QA=A.abQ(QA,1,0xFEFF);tmp=tmp+QA;}IC=String.
fromCharCode(AlQ&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKl=width-(this.Jb*2);if(this.
Afy&&(this.AcJ>0))AKl=this.AcJ;Ke=IC.charCodeAt(0)||0;for(;Bf<Ke;Bf=Bf+1){var Al7=
A1m&&!Bf;var Al8=AJA&&(Bf===(Ke-1));var Xo=false;var Xp=false;var Aue=AKP;if((AKP&&
Al7)&&!Al8){Al7=false;Al8=true;}else if((AKP&&Al8)&&!Al7){Al8=false;Al7=true;}var
XH=inx+1;var IX=IC.charCodeAt(inx)||0;var K2=XH;var Ns=(XH+IX)-2;var A1$=-1;var A2a=-
1;if(!this.Afy&&(font.Yn(IC,XH,IX-1)>AKl)){var AoT=Bu;if(((AoT&0x2)===0x2)&&!!(AoT&
0x5))AoT&=~0x2;if(((AoT&0x2)===0x2))AoT&=~0x5;if(((AoT&0x4)===0x4))Xo=true;else if(((
AoT&0x2)===0x2)){Xo=true;Xp=true;}else Xp=true;}if((IC.charCodeAt(K2)||0)===0x0A
)K2=K2+1;if((IC.charCodeAt(Ns)||0)===0x0A)Ns=Ns-1;while(Xo&&((IC.charCodeAt(K2)||
0)===0xFEFF))K2=K2+1;while(Xp&&((IC.charCodeAt(Ns)||0)===0xFEFF))Ns=Ns-1;Xo=Xo&&
!Al8;Xp=Xp&&!Al7;while((((Xo||Xp)||Al7)||Al8)&&(K2<Ns)){if((Xo&&(Aue||!Xp))||Al7
){if(A1$>0)IC=A.abQ(IC,A1$,0xFEFF);IC=A.abQ(IC,K2,0x2026);A1$=K2;K2=K2+1;Aue=!Aue;
Al7=false;if(font.Yn(IC,XH,IX-1)<=AKl){Xo=false;Xp=false;}else Xo=Xo||!Xp;}if((Xp&&(
!Aue||!Xo))||Al8){if(A2a>0)IC=A.abQ(IC,A2a,0xFEFF);IC=A.abQ(IC,Ns,0x2026);A2a=Ns;
Ns=Ns-1;Aue=!Aue;Al8=false;if(font.Yn(IC,XH,IX-1)<=AKl){Xo=false;Xp=false;}else Xp=
Xp||!Xo;}}inx=inx+IX;}this.Amf=[font.A6w(IC),((IC.charCodeAt(0)||0)*AAX)-leading
];this.CI=IC;}if(this.Aa1&&(this.CI!==A.jV)){var At2=[this.Jb,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),At2),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiS],this);},BlQ:function(
E){if(E===this.AN6)return;this.AN6=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pd],this);},Hm:function(E){if(E<0)E=0;if(this.Jb===E)return;this.Jb=E;this.CI=A.
jV;this.HX=false;A.pe([this,this.Pd],this);},Aw0:function(E){var B;if(E<0)E=0;if(
this.N4===E)return;this.N4=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yi){this.CI=A.jV;this.HX=false;A.pe([this,this.Pd],this);}if(this.Aa1&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiS],this);}
,BlP:function(E){if(E===this.Yi)return;this.Yi=E;if(((this.Afy&&!!!this.AcJ)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pd],this);},Q5:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcJ&&this.Afy)||!!E)||this.Yi)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I_:function(E){if(E===this.Aa1)return;this.Aa1=E;if(E&&this.Yi){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pd],this);}if(E&&this.HX){var At2=[this.Jb,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),At2),this.Br));this.U=this.U&~
0x2000;}},Bnq:function(E){if(E<0)E=0;if(E===this.AcJ)return;this.AcJ=E;if(this.Afy&&
this.HX){this.CI=A.jV;this.HX=false;A.pe([this,this.Pd],this);}if(((!!!E&&this.Afy
)||this.Yi)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KR:function(
E){if(E===this.Afy)return;this.Afy=E;if(this.HX){this.CI=A.jV;this.HX=false;A.pe([
this,this.Pd],this);}if(((E&&!!!this.AcJ)||this.Yi)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Ga:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HX)A.pe([this
,this.AiS],this);},A6:function(E){var B;if(E===this.Ki)return;this.Ki=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yi){this.CI=A.jV;this.HX=false;
A.pe([this,this.Pd],this);}if(this.HX)A.pe([this,this.AiS],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pd],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pd],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Aj2:function(
){if(!this.HX)this.XG(this);if(!this.Of)return false;var result=false;var bidi=this.
Of;result=A.v2(bidi);return result;},Bjf:function(){if(!this.HX)this.XG(this);if(
!this.Of)return false;var result=false;var bidi=this.Of;result=A.zZ(bidi);return result;
},AGK:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yi)return BD;if(
!this.HX)this.XG(this);if(aIndex<0)aIndex=0;var BzH=(this.CI.charCodeAt(0)||0)-1;
var Md=this.CI.charCodeAt(1)||0;var inx=1;var Ai4=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<BzH)&&((inx+Md)<=aIndex)){inx=inx+Md;Bf=Bf+1;Ai4=Ai4+1;
aIndex=aIndex+1;Md=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Md))aIndex=inx+Md;
if(!!this.Of)aIndex=(inx+this.Bx$(this.Of,(inx+1)-Ai4,(inx+Md)-Ai4,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Ix=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Ix!==0xFEFF)&&(Ix!==0x0A);}return[col,Bf];},AnN:function(AoI){if(((this.String===
A.jV)||!this.B6)||this.Yi)return 0;if(!this.HX)this.XG(this);var Bf=AoI[1];var col=
AoI[0];var inx=1;var Ai4=2;var Ke=this.CI.charCodeAt(0)||0;var Md=this.CI.charCodeAt(
1)||0;if(Bf>=Ke){Bf=Ke-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Md>0)){inx=inx+Md;Bf=Bf-1;Ai4=Ai4+1;Md=this.CI.charCodeAt(inx)||0;
}var Xx=inx;var AKO=(inx-Ai4)+1;var ApX=(AKO+Md)-1;var AAJ=false;while((col>=0)&&(
Md>1)){var Ix=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Md=Md-1;AAJ=(Ix===0xFEFF)||(
Ix===0x0A);if(!AAJ){col=col-1;Xx=inx;}}if((!AAJ&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAJ=true;if(AAJ)Xx=Xx+1;Xx=Xx-Ai4;if(!!this.Of)Xx=AKO+this.Bya(
this.Of,AKO,ApX,Xx-AKO);return Xx;},ATL:function(KZ){var B;if((this.String===A.jV
)||!this.B6)return BD;if(!this.HX)this.XG(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B6;var Bu=this.Ki;var Ke=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(KZ[1]<AE[1])KZ=[KZ[0],AE[1]];if(KZ[1]>=AE[3])KZ=[
KZ[0],AE[3]-1];if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AaJ=(
font.Ascent+font.Descent)+leading;var Bf=((KZ[1]-AE[1])/AaJ)|0;var NA=this.ACX(Bf
);var Md=NA.length;var Pa=false;if(((Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Ke-1)))Pa=true;if((Pa&&(
NA.indexOf(String.fromCharCode(0x20),0)<0))&&(NA.indexOf(String.fromCharCode(0xA0
),0)<0))Pa=false;if(Pa){var inx=1;var ApW=Bf;while(ApW>0){inx=inx+(this.CI.charCodeAt(
inx)||0);ApW=ApW-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pa=false;}var Al_=0;var Eo=0;if(
Pa)Al_=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=(AE[2]-AE[0])-font.Yn(NA,0,Md);else
if(((Bu&0x2)===0x2))Eo=(((AE[2]-AE[0])/2)|0)-((font.Yn(NA,0,Md)/2)|0);var col=font.
BiS(NA,0,Md,(KZ[0]-AE[0])-Eo,Al_);if(col<0)col=0;return[col,Bf];},Aff:function(AoI
){var B;if((this.String===A.jV)||!this.B6)return BD;if(!this.HX)this.XG(this);var
Ke=this.CI.charCodeAt(0)||0;var font=this.B6;var Bu=this.Ki;var Bf=AoI[1];var col=
AoI[0];if(Bf>=Ke){Bf=Ke-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NA=this.ACX(
Bf);var Md=NA.length;var AE=this.Db();var Pa=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Ke-1)))Pa=true;if((Pa&&(NA.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NA.indexOf(String.fromCharCode(0xA0),0)<0))Pa=false;if(Pa){var inx=1;var
ApW=Bf;while(ApW>0){inx=inx+(this.CI.charCodeAt(inx)||0);ApW=ApW-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pa=false;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Al_=0;var Eo=AE[0];if(Pa)Al_=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=AE[2]-font.
Yn(NA,0,Md);else if(((Bu&0x2)===0x2))Eo=(Eo+(((AE[2]-AE[0])/2)|0))-((font.Yn(NA,
0,Md)/2)|0);var pos=font.BiO(NA,0,Md,col,Al_);if(pos<0)pos=0;return[Eo+pos,Dg];}
,AOM:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E6;if(!this.HX)
this.XG(this);var Ke=this.CI.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Ke)&&(Ad>0)))return E6;var Bu=this.Ki;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jb*2);if(((
Bu&0x80)===0x80)){if(this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N4>0)leading=(this.N4-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var Eo=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AAZ=(this.CI.charCodeAt(inx)||0)-1;var BfL=font.Yn(this.CI,inx+1,AAZ);var A3N=font.
A6H(this.CI,inx+1,AAZ);var ApY=BfL;var AaJ=font.Ascent+font.Descent;var ABb=(Ke*((
font.Ascent+font.Descent)+leading))-leading;if(!Ke)ABb=AaJ;if((((this.CI.charCodeAt((
inx+AAZ)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AAZ)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var ApX=(inx+1)+AAZ;var Ay$=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Aza=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ay$>=0)&&(Ay$<ApX))||((Aza>=0)&&(Aza<ApX)))ApY=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABb>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(ApY>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Eo=width-ApY;else if(((Bu&0x2)===0x2))Eo=((width/2)|0)-((
ApY/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-ABb);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((ABb/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((ABb/2)|0);Eo=(Eo+A3N[0])+this.Jb;
ApY=(ApY+(A3N[2]-A3N[0]))-BfL;var B3;{var Bfb=[Bd[0]+Eo,Bd[1]+Dg];B3=[].concat(Bfb
,A.abf(Bfb,[ApY,AaJ]));}return A.abh(B3,this.Br);},ACX:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XG(this);var Ke=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Ke))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XH=inx;var AtI=inx+(this.CI.charCodeAt(
inx)||0);var Ix=0x00;do{XH=XH+1;Ix=this.CI.charCodeAt(XH)||0;}while(((Ix===0xFEFF
)||(Ix===0x0A))&&(XH<=AtI));do{AtI=AtI-1;Ix=this.CI.charCodeAt(AtI)||0;}while(((
Ix===0xFEFF)||(Ix===0x0A))&&(XH<=AtI));var NA=A.abW(this.CI,XH,(AtI-XH)+1);var App;
for(App=NA.indexOf(String.fromCharCode(0xFEFF),0);App>=0;App=NA.indexOf(String.fromCharCode(
0xFEFF),App+1)){var Xx=App+1;while((NA.charCodeAt(Xx)||0)===0xFEFF)Xx=Xx+1;NA=A.
ab1(NA,App,Xx-App);}return NA;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E6;if(!this.HX)this.XG(this);if(this.CI===A.jV)return E6;var leading=this.
B6.Leading;var AAX=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N4>0
){leading=(this.N4-this.B6.Ascent)-this.B6.Descent;AAX=this.N4;}if(A.aaX(this.Amf
,BD))this.Amf=[this.B6.A6w(this.CI),this.Amf[1]];this.Amf=[this.Amf[0],((this.CI.
charCodeAt(0)||0)*AAX)-leading];var Bu=this.Ki;var Bd=this.M;var At2=this.Jb;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[At2,0,width-At2,height];var B3=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Amf));if(((Bu&0x80)===0x80)){if(
this.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xy=
this.AcJ;if(Xy<=0)Xy=width-(this.Jb*2);if(Xy<0)Xy=0;if(Xy>(B3[2]-B3[0]))B3=A.abL(
B3,Xy);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B3[3]-B3[1])>(Df[3]-Df[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B3[2]-B3[0])>(Df[
2]-Df[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B3[2]-B3[0])!==(Df[2]-Df[0]
)){if(((Bu&0x4)===0x4))B3=A.abM(B3,Df[2]-(B3[2]-B3[0]));else if(((Bu&0x2)===0x2)
)B3=A.abM(B3,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B3[2]-B3[0])/2)|0));}if((B3[3]-B3[
1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B3=A.abO(B3,Df[3]-(B3[3]-B3[1]));else
if(((Bu&0x100)===0x100))B3=A.abO(B3,((Df[1]+(((Df[3]-Df[1])/2)|0))-(((B3[3]-B3[1
])/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B3=
A.abO(B3,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B3[3]-B3[1])/2)|0));}B3=A.abh(B3,Bd.slice(
0,2));return A.abh(B3,this.Br);},_Init:function(aArg){A.Core.Et._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lb();this.__proto__=A.Core.Et;
A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuK={attrString:null,AttrSet:
null,String:A.jV,Ki:0x12,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Cj=Cj+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CY.BhW(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cj*255)>>8,(Cj*255)>>8,(Cj*255)>>8,(Cj
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pd],this);}A.Core.Et.H.call(this,E);A.pe([this,this.AiS],this
);},AiS:function(G){},XG:function(G){var B;var ALw;ALw=(B=this.M)[2]-B[0];if(ALw<
0)ALw=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A40
,0);if(!!this.attrString)this.attrString.BnI(this.AttrSet,this.String,ALw,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiS],this);
},Pd:function(G){A.pe([this,this.XG],this);},BfE:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Ki)return;this.Ki=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiS],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pd],this);},A9j:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BfE],this.AttrSet,0);A.z9([this,this.Pd
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BfE],this.AttrSet,0);A.zV([this,this.Pd],this.AttrSet,1);}A.pe([this,this.
Pd],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E6;
if(!this.attrString)this.XG(this);if(!this.attrString)return E6;var Bu=this.Ki;var
C4=this.attrString.BiT();var Df=A.aaT(this.M,BD);var B3=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C4));if(!C4[0]||!C4[1])return E6;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj2())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B3[2]-B3[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B3=A.abM(B3,Df[2]-(B3[2]-B3[0]));else if(((Bu&0x2
)===0x2))B3=A.abM(B3,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B3[2]-B3[0])/2)|0));}if((B3[
3]-B3[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B3=A.abO(B3,Df[3]-(B3[3]-B3[1])
);else if(((Bu&0x10)===0x10))B3=A.abO(B3,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B3[3]-
B3[1])/2)|0));}return B3;},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);
this.__proto__=C.AuK;this.U=0x3;},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.An9={AiF:
null,FH:null,Ais:0,Air:0,U7:A.wf,Ck:A.abi(4,3,0,null),AGG:A.wf,Tk:0,ApC:0,JT:function(
E){if(A.aaX(E,this.Kx))return;A.Core.Zy.JT.call(this,E);this.Ck.Set(3,0,E[0]);this.
Ck.Set(3,1,E[1]);this.Ck.Set(3,2,1);this.Tk=0x45;this.FH=null;A.pe([this,this.Aja
],this);},Ku:function(E){if(A.aaX(E,this.MC))return;A.Core.Zy.Ku.call(this,E);this.
Ck.Set(2,0,E[0]);this.Ck.Set(2,1,E[1]);this.Ck.Set(2,2,1);this.Tk=0x45;this.FH=null;
A.pe([this,this.Aja],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.Zy.
DC.call(this,E);this.Ck.Set(1,0,E[0]);this.Ck.Set(1,1,E[1]);this.Ck.Set(1,2,1);this.
Tk=0x45;this.FH=null;A.pe([this,this.Aja],this);},DM:function(E){if(A.aaX(E,this.
Es))return;A.Core.Zy.DM.call(this,E);this.Ck.Set(0,0,E[0]);this.Ck.Set(0,1,E[1]);
this.Ck.Set(0,2,1);this.Tk=0x45;this.FH=null;A.pe([this,this.Aja],this);},A1e:function(
){return;},Aja:function(G){var B;this.AiF=null;if(this.Tk===0x00)return;if(this.
Tk===0x45){var K3=A._NewObject(A.Graphics.AxW,0);K3=K3.ANI(this.Ck.Get(0,0),this.
Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),this.Ck.Get(2,1),
this.Ck.Get(3,0),this.Ck.Get(3,1));if(!!K3){K3.ABX(0,0);this.Ck.Set(0,2,K3.UP*240
);K3.ABX(1,0);this.Ck.Set(1,2,K3.UP*240);K3.ABX(1,1);this.Ck.Set(2,2,K3.UP*240);
K3.ABX(0,1);this.Ck.Set(3,2,K3.UP*240);}this.A1e();}if((((this.Tk===0x4D)&&!!this.
FH)&&!!this.U7[0])&&!!this.U7[1]){var Ai7=[].concat(BD,this.U7);var Ai6=this.AGG;
var Af4=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D8=Ai7[1]-Ai6[1];var Ry=Ai7[3]-Ai6[
1];this.FH.Afa(Af4,D8);this.Ck.Set(0,0,this.FH.P4+this.Air);this.Ck.Set(0,1,this.
FH.P5+this.Ais);this.Ck.Set(0,2,this.FH.UP);this.FH.Afa(Az,D8);this.Ck.Set(1,0,this.
FH.P4+this.Air);this.Ck.Set(1,1,this.FH.P5+this.Ais);this.Ck.Set(1,2,this.FH.UP);
this.FH.Afa(Az,Ry);this.Ck.Set(2,0,this.FH.P4+this.Air);this.Ck.Set(2,1,this.FH.
P5+this.Ais);this.Ck.Set(2,2,this.FH.UP);this.FH.Afa(Af4,Ry);this.Ck.Set(3,0,this.
FH.P4+this.Air);this.Ck.Set(3,1,this.FH.P5+this.Ais);this.Ck.Set(3,2,this.FH.UP);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Es=[(this.
Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.EC=[(this.Ck.Get(1,0)+0.5)|0,(
this.Ck.Get(1,1)+0.5)|0];this.MC=[(this.Ck.Get(2,0)+0.5)|0,(this.Ck.Get(2,1)+0.5
)|0];this.Kx=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];this.A1e();}this.
ApC=this.Tk;this.Tk=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bnd:function(E){if(A.aaX(E,this.AGG))return;this.AGG=E;if((this.ApC!==0x45)&&(
this.Tk===0x00)){this.Tk=this.ApC;A.pe([this,this.Aja],this);}},Arj:function(Fg){
var B;if(!!!this.AiF){this.AiF=A._NewObject(A.Graphics.A65,0);this.AiF.ANI(this.
Ck.Get(0,0),this.Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),
this.Ck.Get(2,1),this.Ck.Get(3,0),this.Ck.Get(3,1));}if(!this.AiF.Afa(Fg))return BD;
var Ap3=[].concat(BD,this.U7);var Eo=this.AiF.P4*(Ap3[2]-Ap3[0]);var Dg=this.AiF.
P5*(Ap3[3]-Ap3[1]);return A.abf([Eo|0,Dg|0],Ap3.slice(0,2));},A$H:function(BbF,L6
){var B;this.AiF=null;if(!L6)throw new Error(IT);if(!this.FH)this.FH=A._NewObject(
A.Graphics.AxW,0);this.FH.Bg1(L6);this.Air=BbF[0];this.Ais=BbF[1];this.ApC=0x4D;
this.Tk=0x00;if(!this.U7[0]||!this.U7[1])return;var Ai7=[].concat(BD,this.U7);var
Ai6=this.AGG;var Af4=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D8=Ai7[1]-Ai6[1];var
Ry=Ai7[3]-Ai6[1];this.FH.Afa(Af4,D8);this.Ck.Set(0,0,this.FH.P4+this.Air);this.Ck.
Set(0,1,this.FH.P5+this.Ais);this.Ck.Set(0,2,this.FH.UP);this.FH.Afa(Az,D8);this.
Ck.Set(1,0,this.FH.P4+this.Air);this.Ck.Set(1,1,this.FH.P5+this.Ais);this.Ck.Set(
1,2,this.FH.UP);this.FH.Afa(Az,Ry);this.Ck.Set(2,0,this.FH.P4+this.Air);this.Ck.
Set(2,1,this.FH.P5+this.Ais);this.Ck.Set(2,2,this.FH.UP);this.FH.Afa(Af4,Ry);this.
Ck.Set(3,0,this.FH.P4+this.Air);this.Ck.Set(3,1,this.FH.P5+this.Ais);this.Ck.Set(
3,2,this.FH.UP);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Es=[(this.Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.EC=[(this.Ck.
Get(1,0)+0.5)|0,(this.Ck.Get(1,1)+0.5)|0];this.MC=[(this.Ck.Get(2,0)+0.5)|0,(this.
Ck.Get(2,1)+0.5)|0];this.Kx=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1e();},_Init:
function(aArg){A.Core.Zy._Init.call(this,aArg);(this.Ck=[]).__proto__=C.An9.Ck;this.
__proto__=C.An9;this.U=0x3;},_Mark:function(D){var B;A.Core.Zy._Mark.call(this,D
);if((B=this.AiF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FH)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVq={Ft:null,bitmap:null
,P:null,G8:255,Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nu=aOffset[0];var Nv=aOffset[1];var AE=[].concat(BD,this.
U7);aBlend=aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;var Bd8;var Bd9;var Bd_;var Bd$;
var BzS=this.G8;Bd8=Bd9=Bd_=Bd$=BzS;var Als=255|(255<<8)|(255<<16)|((((Cj*Bd8)>>
8)&0xFF)<<24);var Alt=255|(255<<8)|(255<<16)|((((Cj*Bd9)>>8)&0xFF)<<24);var Byb=
255|(255<<8)|(255<<16)|((((Cj*Bd_)>>8)&0xFF)<<24);var Byc=255|(255<<8)|(255<<16)|((((
Cj*Bd$)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E6,aOffset));CY.AhQ(aClip,this.bitmap
,0,this.Ck.Get(0,0)+Nu,this.Ck.Get(0,1)+Nv,this.Ck.Get(0,2),this.Ck.Get(1,0)+Nu,
this.Ck.Get(1,1)+Nv,this.Ck.Get(1,2),this.Ck.Get(2,0)+Nu,this.Ck.Get(2,1)+Nv,this.
Ck.Get(2,2),this.Ck.Get(3,0)+Nu,this.Ck.Get(3,1)+Nv,this.Ck.Get(3,2),AE,Als,Alt,
Byb,Byc,aBlend,true);},G3:function(CN){if(!this.P||!this.Ft)return null;var BN=(
A.Core.Aec.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqD.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fv=BD;var BZ=this.Ft.Ab;while(!!BZ&&(BZ!==this.P)){
Fv=A.abe(Fv,BZ.M.slice(0,2));BZ=BZ.Ab;}var X=this.Ft;if(!!BN&&!BN.Down)this.Ft=null;
if(!!BN){BN.H0=A.abf(this.Arj(BN.H0),Fv);BN.NR=A.abf(this.Arj(BN.NR),Fv);return X.
G3(BN);}if(!!D4){var BzW=A.abf(this.Arj(A.abe(D4.H0,D4.DG)),Fv);D4.H0=A.abf(this.
Arj(D4.H0),Fv);D4.NR=A.abf(this.Arj(D4.NR),Fv);D4.DG=A.abe(D4.H0,BzW);return X.G3(
D4);}return C.An9.G3.call(this,CN);},Yd:function(Da,BF,Od,Aaf,Ac3,Ac2){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arj(pos
);var Ap3=[].concat(BD,this.U7);if(!A.wa(Ap3,pos))return null;var JD=this.P.Yd(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BF,Od,Aaf,null
,Ac2);if(!!JD)this.Ft=JD.Ci;else this.Ft=null;if(!!this.Ft)return A._NewObject(A.
Core.AuS,0).Initialize(this,BD);return null;},RJ:function(G){var B;var Bea=this.
U7;if(!!this.P)this.bitmap=this.P.FE;else this.bitmap=null;if(!!this.bitmap)this.
U7=this.bitmap.FrameSize;else this.U7=BD;if(((A.aaX(Bea,this.U7)||((this.ApC===0x45
)&&(this.Tk===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApC!==0x45)&&(this.Tk===0x00))&&!A.aaX(Bea,this.U7)){this.Tk=this.ApC;
A.pe([this,this.Aja],this);}},Dk:function(E){var B;if(E===this.G8)return;this.G8=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bmi:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Is);if(!!this.P){A.
z9([this,this.RJ],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RJ
],E,0);this.bitmap=E.FE;}this.RJ(this);},Awh:function(){return this.G8;},_Init:function(
aArg){C.An9._Init.call(this,aArg);this.__proto__=C.AVq;},_Mark:function(D){var B;
C.An9._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aen={Hy:null,AQ:0xFFFFFFFF,DG:A.wf
,AOt:false,Lb:function(){this.A1x();},Kn:function(CY,aClip,aOffset,Cj,aBlend){if(
!this.Hy)return;var DD;var DO;var DI;var DN;var B2=this.AQ;Cj=Cj+1;DD=DO=DI=DN=B2;
if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.
Aen(aClip,this.Hy,A.abh(this.M,aOffset),this.AOt,this.DG,DD,DO,DN,DI,true,true,0
);},A1x:function(){return;},Ajb:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},AnB:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},Bmd:function(E){var B;if(E===this.AOt)return;this.
AOt=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Zs:function(
E){var B;if(E===this.Hy)return;if(!!this.Hy)A.z9([this,this.Ajb],this.Hy,0);this.
Hy=E;if(!!this.Hy)A.zV([this,this.Ajb],this.Hy,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.Aen;},
_Done:function(){this.Lb();this.__proto__=A.Core.Et;A.Core.Et._Done.call(this);}
,_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.Hy)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Ho={Hy:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Lb:function(){this.A1x();},Kn:function(CY,aClip,aOffset,Cj,aBlend
){if(!this.Hy)return;var DD;var DO;var DI;var DN;var B2=this.AQ;Cj=Cj+1;DD=DO=DI=
DN=B2;if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CY.Ho(aClip,this.Hy,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1x:function(){return;},Ajb:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.
M);},AnB:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hy)this.Ab.Bj(this.M);},Ng:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hy)this.Ab.Bj(this.M);},Zs:function(E){var B;if(E===this.Hy)return;if(!!this.
Hy)A.z9([this,this.Ajb],this.Hy,0);this.Hy=E;if(!!this.Hy)A.zV([this,this.Ajb],this.
Hy,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(
this,aArg);this.__proto__=C.Ho;},_Done:function(){this.Lb();this.__proto__=A.Core.
Et;A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.Hy)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BD6={A4H:0x1,A4G:0x2,A4I:0x4,A4L:0x8,A4K:0x10,A4J:0x20,BFn:0x40,BFo:0x80,BFy:
0x100};C.BFD={A4H:0x1,A4G:0x2,A4I:0x4,A4L:0x8,A4K:0x10,A4J:0x20,BCC:0x40,BCB:0x80
,BCH:0x100};C.BEJ={Normal:0,BFh:1,BFf:2,BFg:3};
C._Init=function(){C.C5.__proto__=A.Core.Akd;C.AK.__proto__=A.Core.Et;C.BT.__proto__=
A.Core.Et;C.NP.__proto__=A.Core.Et;C.Ap.__proto__=A.Core.Et;C.Text.__proto__=A.Core.
Et;C.AuK.__proto__=A.Core.Et;C.An9.__proto__=A.Core.Zy;C.AVq.__proto__=C.An9;C.Aen.
__proto__=A.Core.Et;C.Ho.__proto__=A.Core.Et;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */