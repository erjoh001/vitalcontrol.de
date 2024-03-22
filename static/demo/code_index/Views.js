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
var Cc=[1,1];var BF=[0,0];var E7=[0,0,0,0];var Hp="\uFEFF";var IS="No matrix to perform 3D transformation";
var Ir="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C5={KG:null,Ald:1,Alc:1,AQ:0xFFFFFFFF,Kl:function(CZ,aClip,aOffset,Ci,aBlend){var
B;var Agq=this.Alc;var Agr=this.Ald;var Ady=A.abf(this.Es,aOffset);var Adz=A.abf(
this.EC,aOffset);var Alz;var AlA;var B3=this.AQ;if(A.aaX(Ady,Adz))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;Alz=AlA=B3;if(Ci<256){Alz=(Alz&0x00FFFFFF)|((((
Ci*((Alz>>24)&0xFF))>>8)&0xFF)<<24);AlA=(AlA&0x00FFFFFF)|((((Ci*((AlA>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agq===1)&&(Agr===1))CZ.Au1(aClip,Ady,Adz,Alz,AlA,aBlend);else
CZ.BhX(aClip,Ady,Adz,Agq,Agr,Alz,AlA,aBlend);},GetExtent:function(){var Agq=this.
Alc;var Agr=this.Ald;var Ady=this.Es;var Adz=this.EC;if(((Agq===1)&&(Agr===1))||
A.aaX(Ady,Adz))return A.Core.Akk.GetExtent.call(this);var AiF=Agq/2;var AiG=Agr/
2;var Apn=Ady[0];var Apo=Ady[1];var App=Adz[0];var Apq=Adz[1];var J7=App-Apn;var
J8=Apq-Apo;var IW=Math.sqrt((J7*J7)+(J8*J8));J7=J7/IW;J8=J8/IW;var Bcj=Apn+(J8*AiF
);var Bck=Apo-(J7*AiF);var AJv=App+(J8*AiG);var AJw=Apq-(J7*AiG);var AJx=App-(J8
*AiG);var AJy=Apq+(J7*AiG);var AJz=Apn-(J8*AiF);var AJA=Apo+(J7*AiF);var left=Bcj;
var right=Bcj;var top=Bck;var bottom=Bck;if(AJv<left)left=AJv;if(AJx<left)left=AJx;
if(AJz<left)left=AJz;if(AJv>right)right=AJv;if(AJx>right)right=AJx;if(AJz>right)
right=AJz;if(AJw<top)top=AJw;if(AJy<top)top=AJy;if(AJA<top)top=AJA;if(AJw>bottom
)bottom=AJw;if(AJy>bottom)bottom=AJy;if(AJA>bottom)bottom=AJA;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RJ:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_t:function(E){var B;if(E<1)E=1;if(E===this.Ald)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ald=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alc!==1))&&!this.KG){
this.KG=A.aaL(A.aci.AsW);if(this.KG.OK)A.zV([this,this.RJ],this.KG,0);}if(((E===
1)&&(this.Alc===1))&&!!this.KG){if(this.KG.OK)A.z9([this,this.RJ],this.KG,0);this.
KG=null;}},A_s:function(E){var B;if(E<1)E=1;if(E===this.Alc)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alc=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ald!==1))&&!this.
KG){this.KG=A.aaL(A.aci.AsW);if(this.KG.OK)A.zV([this,this.RJ],this.KG,0);}if(((
E===1)&&(this.Ald===1))&&!!this.KG){if(this.KG.OK)A.z9([this,this.RJ],this.KG,0);
this.KG=null;}},Ng:function(E){var B;if(E<1)E=1;if((E===this.Alc)&&(E===this.Ald
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Alc=E;this.Ald=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KG){this.KG=A.aaL(A.aci.AsW);if(this.KG.OK)A.zV([this,this.
RJ],this.KG,0);}if((E===1)&&!!this.KG){if(this.KG.OK)A.z9([this,this.RJ],this.KG
,0);this.KG=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.Akk._Init.call(this,aArg);this.__proto__=C.C5;},_Mark:function(D){var
B;A.Core.Akk._Mark.call(this,D);if((B=this.KG)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANg:0xFFFFFFFF,ANh:0xFFFFFFFF,ANl:0xFFFFFFFF
,ANk:0xFFFFFFFF,AQ:0xFFFFFFFF,Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;var DD=
this.ANk;var DO=this.ANl;var DI=this.ANg;var DN=this.ANh;var B3=this.AQ;aBlend=aBlend&&((
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
))>>8)&0xFF)<<24);}CZ.Avd(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Aws:
function(E){var B;if(E===this.ANg)return;this.ANg=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awt:function(E){var B;if(E===this.ANh)return;this.ANh=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Awv:function(E){var B;
if(E===this.ANl)return;this.ANl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},Awu:function(E){var B;if(E===this.ANk)return;this.ANk=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fo:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kl:function(CZ
,aClip,aOffset,Ci,aBlend){var B;var DD;var DO;var DI;var DN;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;DD=DO=DI=DN=B3;if(Ci<256){DD=(DD&0x00FFFFFF
)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ci*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.BhV(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Ng:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NO={timer:null,Al:null,MM:-1,AQ:0xFFFFFFFF,Au2:
0x1F,TR:0,Dw:0,Ann:A.wf,VA:false,Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;var
Nr=this.TR;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B3=this.AQ;var Ke=(((Ci+1)*255)>>
8)+1;var Of=this.Au2;var Az=A.abh(this.M,aOffset);var AKX=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Ann);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Ke<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Ke)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(((this.
Ann[0]>0)&&(AKX[0]>0))&&!((Of&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKX[
0];if(((Of&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Of=Of|0x4;}else if(((Of&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Of=Of|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Of=Of|0x5;}}if(((this.Ann[1]>0)&&(AKX[1]>0))&&!((Of&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKX[1];if(((Of&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Of=Of|0x8;}else if(((Of&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Of=Of|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Of=Of|
0xA;}}CZ.BhU(aClip,this.Al,Nr,Az,Of,DD,DO,DN,DI,aBlend);},RJ:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(G){var B;var Nr=
this.MM;var To=0;if(!!this.Al)To=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MM<0))&&(To>0))this.Dw=this.timer.Bs-(this.TR*this.Al.FrameDelay);if(
!!this.timer&&(To>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=To){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%To);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!To&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zv:function(E){var B;if(this.VA===E)return;this.VA=E;this.MM=-1;if(
!E&&!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aeh);A.zV([this,this.Me],this.timer,0);A.pe([this,this.
Me],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9H:function(
E){var B;if(E===this.Au2)return;this.Au2=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cw:function(E){var B;if(E<0)E=0;if((E===this.TR)&&(this.MM===-1)
)return;this.TR=E;if(!this.timer)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OK)A.z9([this,this.RJ],this.Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OK)A.zV([this,this.
RJ],E,0);if(this.VA){this.Zv(false);this.Zv(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A9X:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Ann))return;this.Ann=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au2&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.
__proto__=C.NO;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dw:0,MM:0,AQ:0xFFFFFFFF
,Kg:0x12,TR:0,G7:255,VA:false,Aa6:false,Kl:function(CZ,aClip,aOffset,Ci,aBlend){
var B;var Nr=this.TR;if(this.MM>=0)Nr=this.MM;if(!this.Al||(Nr>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C3=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B3=this.AQ;var Ke=(((
Ci+1)*this.G7)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Ke<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Ke)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C3))CZ.A5x(aClip,this.Al,Nr,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CZ.Bob(aClip,this.Al,Nr
,A.abh(AE,aOffset),[].concat(BF,C3),DD,DO,DN,DI,aBlend,true);},RJ:function(G){var
B;if(((this.Aa6&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Me:function(
G){var B;var Nr=this.MM;var To=0;if(!!this.Al)To=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MM<0))&&(To>0))this.Dw=this.timer.Bs-(this.TR*this.Al.FrameDelay
);if(!!this.timer&&(To>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=To){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%To);}}if(((Nr!==
this.MM)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MM=Nr;if(!To&&
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},I9:function(E
){if(E===this.Aa6)return;this.Aa6=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zv:function(
E){var B;if(this.VA===E)return;this.VA=E;this.MM=-1;if(!E&&!!this.timer){A.z9([this
,this.Me],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aeh);A.zV([this,this.Me],this.timer,0);A.pe([this,this.Me],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kg)return;
this.Kg=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cw:function(E){
var B;if(E<0)E=0;if((E===this.TR)&&(this.MM===-1))return;this.TR=E;if(!this.timer
)this.MM=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OK)A.z9([this,this.RJ],this.
Al,0);this.Al=E;this.MM=-1;if(!!E&&E.OK)A.zV([this,this.RJ],E,0);if(this.VA){this.
Zv(false);this.Zv(true);}if(((this.Aa6&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
Ds:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G7)return;this.G7=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E7;var Bu=this.Kg;var C3=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C3[0]||!C3[1])return E7;var Df=[0,0
,width,height];var B4=Df;if(((Bu&0x40)===0x40)){var A3R=((((Df[2]-Df[0])<<16)+((
C3[0]/2)|0))/C3[0])|0;var AA5=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var Ai5=
A3R;if(AA5>Ai5)Ai5=AA5;B4=A.abL(B4,((C3[0]*Ai5)+32768)>>16);B4=A.abI(B4,((C3[1]*
Ai5)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3R=((((Df[2]-Df[0])<<16)+((C3[
0]/2)|0))/C3[0])|0;var AA5=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var Ai5=
A3R;if(AA5<Ai5)Ai5=AA5;B4=A.abL(B4,((C3[0]*Ai5)+32768)>>16);B4=A.abI(B4,((C3[1]*
Ai5)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C3);if((B4[2]-B4[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},Bkh:function(){return this.
AQ;},ASm:function(){return this.TR;},_Init:function(aArg){A.Core.Et._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CJ:
A.jV,String:A.jV,Od:null,Aml:A.wf,Ja:0,N3:0,AcP:0,Br:A.wf,Kg:0x12,AQ:0xFFFFFFFF,
Afy:false,Aa6:false,Yr:false,AN6:false,HZ:false,Lb:function(){if(!!this.Od){this.
A1Y(this.Od);this.Od=null;}},Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;if((this.
CJ===A.jV)||!this.B6)return;var Bu=this.Kg;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Ke=(((Ci+1)*255)>>8)+1;
var Kc=this.CJ.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kc<1)return;DD=DO=DI=DN=col;if(Ke<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj9())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kc===1)&&!((Bu&0x40)===
0x40)){CZ.A53(aClip,font,this.CJ,2,(this.CJ.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N3>0)leading=(this.N3-font.
Ascent)-font.Descent;var AaQ=(font.Ascent+font.Descent)+leading;var Bya=aClip[1]-
AE[1];var Byb=aClip[3]-AE[1];var A1a=AE[2]-AE[0];var Dg=0;var O=1;var B3=this.CJ.
charCodeAt(1)||0;while(((Dg+AaQ)<Bya)&&(B3>0)){O=O+B3;Dg=Dg+AaQ;B3=this.CJ.charCodeAt(
O)||0;}while((Dg<Byb)&&(B3>0)){var Ma=A.abe(Bq,[0,Dg]);var Ame=0;var O$=false;if(((((
Bu&0x40)===0x40)&&((this.CJ.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CJ.charCodeAt(
O+1)||0)!==0x0A))&&((this.CJ.charCodeAt(O+B3)||0)!==0x00))O$=true;if(O$&&!!(Bu&0x6
)){var Ap4=O+B3;var Aza=this.CJ.indexOf(String.fromCharCode(0x20),O+1);var Azb=this.
CJ.indexOf(String.fromCharCode(0xA0),O+1);if(((Aza<0)||(Aza>=Ap4))&&((Azb<0)||(Azb>=
Ap4)))O$=false;}if(O$)Ame=A1a;else if(((Bu&0x4)===0x4))Ma=[(Ma[0]-A1a)+font.Yw(this.
CJ,O+1,B3-1),Ma[1]];else if(((Bu&0x2)===0x2))Ma=[(Ma[0]-((A1a/2)|0))+((font.Yw(this.
CJ,O+1,B3-1)/2)|0),Ma[1]];CZ.A53(aClip,font,this.CJ,O+1,B3-1,Df,Ma,Ame,0,DD,DO,DN
,DI,true);O=O+B3;Dg=Dg+AaQ;B3=this.CJ.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfE;BfE=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfE&&
!this.AcP)&&this.Afy)&&this.HZ)&&!((this.U&0x2000)===0x2000)){this.CJ=A.jV;this.
HZ=false;A.pe([this,this.Pb],this);}if(((this.Yr&&this.HZ)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CJ=
A.jV;this.HZ=false;A.pe([this,this.Pb],this);}A.Core.Et.H.call(this,E);A.pe([this
,this.AiY],this);},Bx4:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bx3:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1Y:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Byo:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiY:function(G){A.pe(this.El
,this);},Pb:function(G){A.pe([this,this.XN],this);},XN:function(G){var B;if(this.
HZ)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XD=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afy){
if(this.AcP>0)XD=this.AcP;else if(!this.Aa6)XD=width-(this.Ja*2);else XD=width;if(
XD<0)XD=1;}if(!!this.Od){this.A1Y(this.Od);this.Od=null;}this.HZ=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN6)this.Od=this.Byo(length
);this.CJ=font.BnB(this.String,0,XD,length,this.Od);if(!!this.Od&&!this.Bjb()){this.
A1Y(this.Od);this.Od=null;}}else this.CJ=A.jV;this.Aml=BF;if(((this.Yr&&(this.CJ
!==A.jV))&&!this.Aa6)&&!!font){var Bu=this.Kg;var leading=font.Leading;var IB=this.
CJ;var AKR=this.Aj9();if(((Bu&0x80)===0x80)){if(AKR)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AA0=(font.
Ascent+font.Descent)+leading;var Kc=IB.charCodeAt(0)||0;var AlX=((height+leading
)/AA0)|0;var A1o=false;var AJD=false;if(AlX<=0)AlX=1;if(Kc>AlX){var Bf=0;var AA1=
0;var AKP=Kc-1;var K2;var Ns=IB.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AA1=Kc-AlX;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AA1=((Kc-AlX)/2)|0;AKP=(AA1+AlX)-1;}else
AKP=AlX-1;A1o=AA1>0;AJD=AKP<(Kc-1);for(K2=1;Bf<AA1;Bf=Bf+1)K2=K2+(IB.charCodeAt(
K2)||0);if(AJD)for(Ns=K2;Bf<AKP;Bf=Bf+1)Ns=Ns+(IB.charCodeAt(Ns)||0);if(A1o){var
IW=IB.charCodeAt(K2)||0;tmp=(Hp+A.abW(IB,K2,IW))+Hp;tmp=A.abQ(tmp,0,(IW+2)&0xFFFF
);K2=K2+IW;if((tmp.charCodeAt(IW)||0)===0x0A){tmp=A.abQ(tmp,IW,0xFEFF);tmp=A.abQ(
tmp,IW+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IB,K2,Ns-K2);if(AJD&&(
Ns>=K2)){var IW=IB.charCodeAt(Ns)||0;var Qx=(Hp+A.abW(IB,Ns,IW))+Hp;Qx=A.abQ(Qx,
0,(IW+2)&0xFFFF);Qx=A.abQ(Qx,1,0xFEFF);if((Qx.charCodeAt(IW)||0)===0x0A){Qx=A.abQ(
Qx,IW,0xFEFF);Qx=A.abQ(Qx,IW+1,0x0A);}if((Qx.charCodeAt(2)||0)===0x0A){Qx=A.abQ(
Qx,2,0xFEFF);Qx=A.abQ(Qx,1,0x0A);}else Qx=A.abQ(Qx,1,0xFEFF);tmp=tmp+Qx;}IB=String.
fromCharCode(AlX&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKo=width-(this.Ja*2);if(this.
Afy&&(this.AcP>0))AKo=this.AcP;Kc=IB.charCodeAt(0)||0;for(;Bf<Kc;Bf=Bf+1){var Amc=
A1o&&!Bf;var Amd=AJD&&(Bf===(Kc-1));var Xt=false;var Xu=false;var Aug=AKR;if((AKR&&
Amc)&&!Amd){Amc=false;Amd=true;}else if((AKR&&Amd)&&!Amc){Amd=false;Amc=true;}var
XO=inx+1;var IW=IB.charCodeAt(inx)||0;var K2=XO;var Ns=(XO+IW)-2;var A2b=-1;var A2c=-
1;if(!this.Afy&&(font.Yw(IB,XO,IW-1)>AKo)){var Ao0=Bu;if(((Ao0&0x2)===0x2)&&!!(Ao0&
0x5))Ao0&=~0x2;if(((Ao0&0x2)===0x2))Ao0&=~0x5;if(((Ao0&0x4)===0x4))Xt=true;else if(((
Ao0&0x2)===0x2)){Xt=true;Xu=true;}else Xu=true;}if((IB.charCodeAt(K2)||0)===0x0A
)K2=K2+1;if((IB.charCodeAt(Ns)||0)===0x0A)Ns=Ns-1;while(Xt&&((IB.charCodeAt(K2)||
0)===0xFEFF))K2=K2+1;while(Xu&&((IB.charCodeAt(Ns)||0)===0xFEFF))Ns=Ns-1;Xt=Xt&&
!Amd;Xu=Xu&&!Amc;while((((Xt||Xu)||Amc)||Amd)&&(K2<Ns)){if((Xt&&(Aug||!Xu))||Amc
){if(A2b>0)IB=A.abQ(IB,A2b,0xFEFF);IB=A.abQ(IB,K2,0x2026);A2b=K2;K2=K2+1;Aug=!Aug;
Amc=false;if(font.Yw(IB,XO,IW-1)<=AKo){Xt=false;Xu=false;}else Xt=Xt||!Xu;}if((Xu&&(
!Aug||!Xt))||Amd){if(A2c>0)IB=A.abQ(IB,A2c,0xFEFF);IB=A.abQ(IB,Ns,0x2026);A2c=Ns;
Ns=Ns-1;Aug=!Aug;Amd=false;if(font.Yw(IB,XO,IW-1)<=AKo){Xt=false;Xu=false;}else Xu=
Xu||!Xt;}}inx=inx+IW;}this.Aml=[font.A6x(IB),((IB.charCodeAt(0)||0)*AA0)-leading
];this.CJ=IB;}if(this.Aa6&&(this.CJ!==A.jV)){var At4=[this.Ja,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),At4),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiY],this);},BlJ:function(
E){if(E===this.AN6)return;this.AN6=E;this.CJ=A.jV;this.HZ=false;A.pe([this,this.
Pb],this);},Hl:function(E){if(E<0)E=0;if(this.Ja===E)return;this.Ja=E;this.CJ=A.
jV;this.HZ=false;A.pe([this,this.Pb],this);},Aw1:function(E){var B;if(E<0)E=0;if(
this.N3===E)return;this.N3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yr){this.CJ=A.jV;this.HZ=false;A.pe([this,this.Pb],this);}if(this.Aa6&&
this.HZ)this.H(A.abg(this.Db(),this.Br));if(this.HZ)A.pe([this,this.AiY],this);}
,BlI:function(E){if(E===this.Yr)return;this.Yr=E;if(((this.Afy&&!!!this.AcP)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CJ=A.jV;this.HZ=false;
A.pe([this,this.Pb],this);},Q4:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcP&&this.Afy)||!!E)||this.Yr)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I9:function(E){if(E===this.Aa6)return;this.Aa6=E;if(E&&this.Yr){this.CJ=
A.jV;this.HZ=false;A.pe([this,this.Pb],this);}if(E&&this.HZ){var At4=[this.Ja,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),At4),this.Br));this.U=this.U&~
0x2000;}},Bnj:function(E){if(E<0)E=0;if(E===this.AcP)return;this.AcP=E;if(this.Afy&&
this.HZ){this.CJ=A.jV;this.HZ=false;A.pe([this,this.Pb],this);}if(((!!!E&&this.Afy
)||this.Yr)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KS:function(
E){if(E===this.Afy)return;this.Afy=E;if(this.HZ){this.CJ=A.jV;this.HZ=false;A.pe([
this,this.Pb],this);}if(((E&&!!!this.AcP)||this.Yr)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gd:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HZ)A.pe([this
,this.AiY],this);},A6:function(E){var B;if(E===this.Kg)return;this.Kg=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yr){this.CJ=A.jV;this.HZ=false;
A.pe([this,this.Pb],this);}if(this.HZ)A.pe([this,this.AiY],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CJ=A.jV;this.HZ=false;A.pe([this,this.
Pb],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CJ=A.jV;this.HZ=false;
A.pe([this,this.Pb],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fo:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj9:function(
){if(!this.HZ)this.XN(this);if(!this.Od)return false;var result=false;var bidi=this.
Od;result=A.v2(bidi);return result;},Bjb:function(){if(!this.HZ)this.XN(this);if(
!this.Od)return false;var result=false;var bidi=this.Od;result=A.zZ(bidi);return result;
},AGN:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yr)return BF;if(
!this.HZ)this.XN(this);if(aIndex<0)aIndex=0;var BzB=(this.CJ.charCodeAt(0)||0)-1;
var Md=this.CJ.charCodeAt(1)||0;var inx=1;var Ai_=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<BzB)&&((inx+Md)<=aIndex)){inx=inx+Md;Bf=Bf+1;Ai_=Ai_+1;
aIndex=aIndex+1;Md=this.CJ.charCodeAt(inx)||0;}if(aIndex>(inx+Md))aIndex=inx+Md;
if(!!this.Od)aIndex=(inx+this.Bx3(this.Od,(inx+1)-Ai_,(inx+Md)-Ai_,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iw=this.CJ.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iw!==0xFEFF)&&(Iw!==0x0A);}return[col,Bf];},AnU:function(AoP){if(((this.String===
A.jV)||!this.B6)||this.Yr)return 0;if(!this.HZ)this.XN(this);var Bf=AoP[1];var col=
AoP[0];var inx=1;var Ai_=2;var Kc=this.CJ.charCodeAt(0)||0;var Md=this.CJ.charCodeAt(
1)||0;if(Bf>=Kc){Bf=Kc-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Md>0)){inx=inx+Md;Bf=Bf-1;Ai_=Ai_+1;Md=this.CJ.charCodeAt(inx)||0;
}var XC=inx;var AKQ=(inx-Ai_)+1;var Ap4=(AKQ+Md)-1;var AAM=false;while((col>=0)&&(
Md>1)){var Iw=this.CJ.charCodeAt(inx+1)||0;inx=inx+1;Md=Md-1;AAM=(Iw===0xFEFF)||(
Iw===0x0A);if(!AAM){col=col-1;XC=inx;}}if((!AAM&&(col>=0))&&((this.CJ.charCodeAt(
inx+1)||0)===0x00))AAM=true;if(AAM)XC=XC+1;XC=XC-Ai_;if(!!this.Od)XC=AKQ+this.Bx4(
this.Od,AKQ,Ap4,XC-AKQ);return XC;},ATN:function(KZ){var B;if((this.String===A.jV
)||!this.B6)return BF;if(!this.HZ)this.XN(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B6;var Bu=this.Kg;var Kc=this.CJ.charCodeAt(
0)||0;var leading=font.Leading;if(KZ[1]<AE[1])KZ=[KZ[0],AE[1]];if(KZ[1]>=AE[3])KZ=[
KZ[0],AE[3]-1];if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AaQ=(
font.Ascent+font.Descent)+leading;var Bf=((KZ[1]-AE[1])/AaQ)|0;var NA=this.AC0(Bf
);var Md=NA.length;var O$=false;if(((Bu&0x80)===0x80)){if(this.Aj9())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kc-1)))O$=true;if((O$&&(
NA.indexOf(String.fromCharCode(0x20),0)<0))&&(NA.indexOf(String.fromCharCode(0xA0
),0)<0))O$=false;if(O$){var inx=1;var Ap3=Bf;while(Ap3>0){inx=inx+(this.CJ.charCodeAt(
inx)||0);Ap3=Ap3-1;}if(((this.CJ.charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((
inx+(this.CJ.charCodeAt(inx)||0))-1)||0)===0x0A))O$=false;}var Ame=0;var Eo=0;if(
O$)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=(AE[2]-AE[0])-font.Yw(NA,0,Md);else
if(((Bu&0x2)===0x2))Eo=(((AE[2]-AE[0])/2)|0)-((font.Yw(NA,0,Md)/2)|0);var col=font.
BiO(NA,0,Md,(KZ[0]-AE[0])-Eo,Ame);if(col<0)col=0;return[col,Bf];},Aff:function(AoP
){var B;if((this.String===A.jV)||!this.B6)return BF;if(!this.HZ)this.XN(this);var
Kc=this.CJ.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kg;var Bf=AoP[1];var col=
AoP[0];if(Bf>=Kc){Bf=Kc-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}var NA=this.AC0(
Bf);var Md=NA.length;var AE=this.Db();var O$=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj9())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kc-1)))O$=true;if((O$&&(NA.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NA.indexOf(String.fromCharCode(0xA0),0)<0))O$=false;if(O$){var inx=1;var
Ap3=Bf;while(Ap3>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ap3=Ap3-1;}if(((this.CJ.
charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((inx+(this.CJ.charCodeAt(inx
)||0))-1)||0)===0x0A))O$=false;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ame=0;var Eo=AE[0];if(O$)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Eo=AE[2]-font.
Yw(NA,0,Md);else if(((Bu&0x2)===0x2))Eo=(Eo+(((AE[2]-AE[0])/2)|0))-((font.Yw(NA,
0,Md)/2)|0);var pos=font.BiK(NA,0,Md,col,Ame);if(pos<0)pos=0;return[Eo+pos,Dg];}
,AON:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E7;if(!this.HZ)
this.XN(this);var Kc=this.CJ.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kc)&&(Ad>0)))return E7;var Bu=this.Kg;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Ja*2);if(((
Bu&0x80)===0x80)){if(this.Aj9())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N3>0)leading=(this.N3-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var Eo=0;while(Ad>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var
AA2=(this.CJ.charCodeAt(inx)||0)-1;var BfF=font.Yw(this.CJ,inx+1,AA2);var A3N=font.
A6I(this.CJ,inx+1,AA2);var Ap5=BfF;var AaQ=font.Ascent+font.Descent;var ABe=(Kc*((
font.Ascent+font.Descent)+leading))-leading;if(!Kc)ABe=AaQ;if((((this.CJ.charCodeAt((
inx+AA2)+1)||0)===0x00)||((this.CJ.charCodeAt(inx+AA2)||0)===0x0A))||((this.CJ.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap4=(inx+1)+AA2;var Aza=
this.CJ.indexOf(String.fromCharCode(0x20),inx+1);var Azb=this.CJ.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Aza>=0)&&(Aza<Ap4))||((Azb>=0)&&(Azb<Ap4)))Ap5=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABe>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap5>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Eo=width-Ap5;else if(((Bu&0x2)===0x2))Eo=((width/2)|0)-((
Ap5/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-ABe);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((ABe/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((ABe/2)|0);Eo=(Eo+A3N[0])+this.Ja;
Ap5=(Ap5+(A3N[2]-A3N[0]))-BfF;var B4;{var Be7=[Bd[0]+Eo,Bd[1]+Dg];B4=[].concat(Be7
,A.abf(Be7,[Ap5,AaQ]));}return A.abh(B4,this.Br);},AC0:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HZ)this.XN(this);var Kc=this.CJ.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kc))return A.jV;while(Ad>0){inx=inx+(
this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var XO=inx;var AtK=inx+(this.CJ.charCodeAt(
inx)||0);var Iw=0x00;do{XO=XO+1;Iw=this.CJ.charCodeAt(XO)||0;}while(((Iw===0xFEFF
)||(Iw===0x0A))&&(XO<=AtK));do{AtK=AtK-1;Iw=this.CJ.charCodeAt(AtK)||0;}while(((
Iw===0xFEFF)||(Iw===0x0A))&&(XO<=AtK));var NA=A.abW(this.CJ,XO,(AtK-XO)+1);var Apv;
for(Apv=NA.indexOf(String.fromCharCode(0xFEFF),0);Apv>=0;Apv=NA.indexOf(String.fromCharCode(
0xFEFF),Apv+1)){var XC=Apv+1;while((NA.charCodeAt(XC)||0)===0xFEFF)XC=XC+1;NA=A.
ab1(NA,Apv,XC-Apv);}return NA;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E7;if(!this.HZ)this.XN(this);if(this.CJ===A.jV)return E7;var leading=this.
B6.Leading;var AA0=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N3>0
){leading=(this.N3-this.B6.Ascent)-this.B6.Descent;AA0=this.N3;}if(A.aaX(this.Aml
,BF))this.Aml=[this.B6.A6x(this.CJ),this.Aml[1]];this.Aml=[this.Aml[0],((this.CJ.
charCodeAt(0)||0)*AA0)-leading];var Bu=this.Kg;var Bd=this.M;var At4=this.Ja;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[At4,0,width-At4,height];var B4=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Aml));if(((Bu&0x80)===0x80)){if(
this.Aj9())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XD=
this.AcP;if(XD<=0)XD=width-(this.Ja*2);if(XD<0)XD=0;if(XD>(B4[2]-B4[0]))B4=A.abL(
B4,XD);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B4[3]-B4[1])>(Df[3]-Df[1])))Bu&=~0x110;
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
null,String:A.jV,Kg:0x12,Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Ci=Ci+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.BhS(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ci*255)>>8,(Ci*255)>>8,(Ci*255)>>8,(Ci
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pb],this);}A.Core.Et.H.call(this,E);A.pe([this,this.AiY],this
);},AiY:function(G){},XN:function(G){var B;var ALw;ALw=(B=this.M)[2]-B[0];if(ALw<
0)ALw=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A40
,0);if(!!this.attrString)this.attrString.BnA(this.AttrSet,this.String,ALw,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiY],this);
},Pb:function(G){A.pe([this,this.XN],this);},Bfy:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kg)return;this.Kg=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiY],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pb],this);},A9l:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bfy],this.AttrSet,0);A.z9([this,this.Pb
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bfy],this.AttrSet,0);A.zV([this,this.Pb],this.AttrSet,1);}A.pe([this,this.
Pb],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E7;
if(!this.attrString)this.XN(this);if(!this.attrString)return E7;var Bu=this.Kg;var
C3=this.attrString.BiP();var Df=A.aaT(this.M,BF);var B4=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C3));if(!C3[0]||!C3[1])return E7;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj9())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);
this.__proto__=C.AuM;this.U=0x3;},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aod={AiK:
null,FG:null,Aiw:0,Aiv:0,U8:A.wf,Ck:A.abi(4,3,0,null),AGJ:A.wf,Tl:0,ApI:0,JR:function(
E){if(A.aaX(E,this.Kv))return;A.Core.ZF.JR.call(this,E);this.Ck.Set(3,0,E[0]);this.
Ck.Set(3,1,E[1]);this.Ck.Set(3,2,1);this.Tl=0x45;this.FG=null;A.pe([this,this.Ajg
],this);},Ks:function(E){if(A.aaX(E,this.MC))return;A.Core.ZF.Ks.call(this,E);this.
Ck.Set(2,0,E[0]);this.Ck.Set(2,1,E[1]);this.Ck.Set(2,2,1);this.Tl=0x45;this.FG=null;
A.pe([this,this.Ajg],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.ZF.
DC.call(this,E);this.Ck.Set(1,0,E[0]);this.Ck.Set(1,1,E[1]);this.Ck.Set(1,2,1);this.
Tl=0x45;this.FG=null;A.pe([this,this.Ajg],this);},DM:function(E){if(A.aaX(E,this.
Es))return;A.Core.ZF.DM.call(this,E);this.Ck.Set(0,0,E[0]);this.Ck.Set(0,1,E[1]);
this.Ck.Set(0,2,1);this.Tl=0x45;this.FG=null;A.pe([this,this.Ajg],this);},A1g:function(
){return;},Ajg:function(G){var B;this.AiK=null;if(this.Tl===0x00)return;if(this.
Tl===0x45){var K3=A._NewObject(A.Graphics.AxY,0);K3=K3.ANI(this.Ck.Get(0,0),this.
Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),this.Ck.Get(2,1),
this.Ck.Get(3,0),this.Ck.Get(3,1));if(!!K3){K3.AB0(0,0);this.Ck.Set(0,2,K3.UR*240
);K3.AB0(1,0);this.Ck.Set(1,2,K3.UR*240);K3.AB0(1,1);this.Ck.Set(2,2,K3.UR*240);
K3.AB0(0,1);this.Ck.Set(3,2,K3.UR*240);}this.A1g();}if((((this.Tl===0x4D)&&!!this.
FG)&&!!this.U8[0])&&!!this.U8[1]){var Ajb=[].concat(BF,this.U8);var Aja=this.AGJ;
var Af6=Ajb[0]-Aja[0];var Az=Ajb[2]-Aja[0];var D8=Ajb[1]-Aja[1];var Ry=Ajb[3]-Aja[
1];this.FG.Afa(Af6,D8);this.Ck.Set(0,0,this.FG.P0+this.Aiv);this.Ck.Set(0,1,this.
FG.P1+this.Aiw);this.Ck.Set(0,2,this.FG.UR);this.FG.Afa(Az,D8);this.Ck.Set(1,0,this.
FG.P0+this.Aiv);this.Ck.Set(1,1,this.FG.P1+this.Aiw);this.Ck.Set(1,2,this.FG.UR);
this.FG.Afa(Az,Ry);this.Ck.Set(2,0,this.FG.P0+this.Aiv);this.Ck.Set(2,1,this.FG.
P1+this.Aiw);this.Ck.Set(2,2,this.FG.UR);this.FG.Afa(Af6,Ry);this.Ck.Set(3,0,this.
FG.P0+this.Aiv);this.Ck.Set(3,1,this.FG.P1+this.Aiw);this.Ck.Set(3,2,this.FG.UR);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Es=[(this.
Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.EC=[(this.Ck.Get(1,0)+0.5)|0,(
this.Ck.Get(1,1)+0.5)|0];this.MC=[(this.Ck.Get(2,0)+0.5)|0,(this.Ck.Get(2,1)+0.5
)|0];this.Kv=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];this.A1g();}this.
ApI=this.Tl;this.Tl=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bm8:function(E){if(A.aaX(E,this.AGJ))return;this.AGJ=E;if((this.ApI!==0x45)&&(
this.Tl===0x00)){this.Tl=this.ApI;A.pe([this,this.Ajg],this);}},Arr:function(Fg){
var B;if(!!!this.AiK){this.AiK=A._NewObject(A.Graphics.A66,0);this.AiK.ANI(this.
Ck.Get(0,0),this.Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),
this.Ck.Get(2,1),this.Ck.Get(3,0),this.Ck.Get(3,1));}if(!this.AiK.Afa(Fg))return BF;
var Ap_=[].concat(BF,this.U8);var Eo=this.AiK.P0*(Ap_[2]-Ap_[0]);var Dg=this.AiK.
P1*(Ap_[3]-Ap_[1]);return A.abf([Eo|0,Dg|0],Ap_.slice(0,2));},A$F:function(BbB,L6
){var B;this.AiK=null;if(!L6)throw new Error(IS);if(!this.FG)this.FG=A._NewObject(
A.Graphics.AxY,0);this.FG.BgW(L6);this.Aiv=BbB[0];this.Aiw=BbB[1];this.ApI=0x4D;
this.Tl=0x00;if(!this.U8[0]||!this.U8[1])return;var Ajb=[].concat(BF,this.U8);var
Aja=this.AGJ;var Af6=Ajb[0]-Aja[0];var Az=Ajb[2]-Aja[0];var D8=Ajb[1]-Aja[1];var
Ry=Ajb[3]-Aja[1];this.FG.Afa(Af6,D8);this.Ck.Set(0,0,this.FG.P0+this.Aiv);this.Ck.
Set(0,1,this.FG.P1+this.Aiw);this.Ck.Set(0,2,this.FG.UR);this.FG.Afa(Az,D8);this.
Ck.Set(1,0,this.FG.P0+this.Aiv);this.Ck.Set(1,1,this.FG.P1+this.Aiw);this.Ck.Set(
1,2,this.FG.UR);this.FG.Afa(Az,Ry);this.Ck.Set(2,0,this.FG.P0+this.Aiv);this.Ck.
Set(2,1,this.FG.P1+this.Aiw);this.Ck.Set(2,2,this.FG.UR);this.FG.Afa(Af6,Ry);this.
Ck.Set(3,0,this.FG.P0+this.Aiv);this.Ck.Set(3,1,this.FG.P1+this.Aiw);this.Ck.Set(
3,2,this.FG.UR);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Es=[(this.Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.EC=[(this.Ck.
Get(1,0)+0.5)|0,(this.Ck.Get(1,1)+0.5)|0];this.MC=[(this.Ck.Get(2,0)+0.5)|0,(this.
Ck.Get(2,1)+0.5)|0];this.Kv=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1g();},_Init:
function(aArg){A.Core.ZF._Init.call(this,aArg);(this.Ck=[]).__proto__=C.Aod.Ck;this.
__proto__=C.Aod;this.U=0x3;},_Mark:function(D){var B;A.Core.ZF._Mark.call(this,D
);if((B=this.AiK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FG)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVt={Ft:null,bitmap:null
,P:null,G7:255,Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nu=aOffset[0];var Nv=aOffset[1];var AE=[].concat(BF,this.
U8);aBlend=aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;var Bd1;var Bd2;var Bd3;var Bd4;
var BzM=this.G7;Bd1=Bd2=Bd3=Bd4=BzM;var Alz=255|(255<<8)|(255<<16)|((((Ci*Bd1)>>
8)&0xFF)<<24);var AlA=255|(255<<8)|(255<<16)|((((Ci*Bd2)>>8)&0xFF)<<24);var Bx5=
255|(255<<8)|(255<<16)|((((Ci*Bd3)>>8)&0xFF)<<24);var Bx6=255|(255<<8)|(255<<16)|((((
Ci*Bd4)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E7,aOffset));CZ.AhT(aClip,this.bitmap
,0,this.Ck.Get(0,0)+Nu,this.Ck.Get(0,1)+Nv,this.Ck.Get(0,2),this.Ck.Get(1,0)+Nu,
this.Ck.Get(1,1)+Nv,this.Ck.Get(1,2),this.Ck.Get(2,0)+Nu,this.Ck.Get(2,1)+Nv,this.
Ck.Get(2,2),this.Ck.Get(3,0)+Nu,this.Ck.Get(3,1)+Nv,this.Ck.Get(3,2),AE,Alz,AlA,
Bx5,Bx6,aBlend,true);},G2:function(CN){if(!this.P||!this.Ft)return null;var BP=(
A.Core.Aed.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqK.isPrototypeOf(CN)?CN:null
);if(!BP&&!D4)return null;var Fv=BF;var B0=this.Ft.Ab;while(!!B0&&(B0!==this.P)){
Fv=A.abe(Fv,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Ft;if(!!BP&&!BP.Down)this.Ft=null;
if(!!BP){BP.H2=A.abf(this.Arr(BP.H2),Fv);BP.NQ=A.abf(this.Arr(BP.NQ),Fv);return X.
G2(BP);}if(!!D4){var BzQ=A.abf(this.Arr(A.abe(D4.H2,D4.DG)),Fv);D4.H2=A.abf(this.
Arr(D4.H2),Fv);D4.NQ=A.abf(this.Arr(D4.NQ),Fv);D4.DG=A.abe(D4.H2,BzQ);return X.G2(
D4);}return C.Aod.G2.call(this,CN);},Ym:function(Da,BG,Ob,Aan,Ac5,Ac4){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arr(pos
);var Ap_=[].concat(BF,this.U8);if(!A.wa(Ap_,pos))return null;var JB=this.P.Ym(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BG,Ob,Aan,null
,Ac4);if(!!JB)this.Ft=JB.Ch;else this.Ft=null;if(!!this.Ft)return A._NewObject(A.
Core.AuU,0).Initialize(this,BF);return null;},RJ:function(G){var B;var Bd5=this.
U8;if(!!this.P)this.bitmap=this.P.FD;else this.bitmap=null;if(!!this.bitmap)this.
U8=this.bitmap.FrameSize;else this.U8=BF;if(((A.aaX(Bd5,this.U8)||((this.ApI===0x45
)&&(this.Tl===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApI!==0x45)&&(this.Tl===0x00))&&!A.aaX(Bd5,this.U8)){this.Tl=this.ApI;
A.pe([this,this.Ajg],this);}},Ds:function(E){var B;if(E===this.G7)return;this.G7=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bmb:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Ir);if(!!this.P){A.
z9([this,this.RJ],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RJ
],E,0);this.bitmap=E.FD;}this.RJ(this);},Awi:function(){return this.G7;},_Init:function(
aArg){C.Aod._Init.call(this,aArg);this.__proto__=C.AVt;},_Mark:function(D){var B;
C.Aod._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aeo={Hz:null,AQ:0xFFFFFFFF,DG:A.wf
,AOu:false,Lb:function(){this.A1A();},Kl:function(CZ,aClip,aOffset,Ci,aBlend){if(
!this.Hz)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ci=Ci+1;DD=DO=DI=DN=B3;
if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Aeo(aClip,this.Hz,A.abh(this.M,aOffset),this.AOu,this.DG,DD,DO,DN,DI,true,true,0
);},A1A:function(){return;},Ajh:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},AnH:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Bl8:function(E){var B;if(E===this.AOu)return;this.
AOu=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Zz:function(
E){var B;if(E===this.Hz)return;if(!!this.Hz)A.z9([this,this.Ajh],this.Hz,0);this.
Hz=E;if(!!this.Hz)A.zV([this,this.Ajh],this.Hz,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.Aeo;},
_Done:function(){this.Lb();this.__proto__=A.Core.Et;A.Core.Et._Done.call(this);}
,_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hn={Hz:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Lb:function(){this.A1A();},Kl:function(CZ,aClip,aOffset,Ci,aBlend
){if(!this.Hz)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ci=Ci+1;DD=DO=DI=
DN=B3;if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Ci*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hn(aClip,this.Hz,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1A:function(){return;},Ajh:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.
M);},AnH:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Ng:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Zz:function(E){var B;if(E===this.Hz)return;if(!!this.
Hz)A.z9([this,this.Ajh],this.Hz,0);this.Hz=E;if(!!this.Hz)A.zV([this,this.Ajh],this.
Hz,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(
this,aArg);this.__proto__=C.Hn;},_Done:function(){this.Lb();this.__proto__=A.Core.
Et;A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BD2={A4H:0x1,A4G:0x2,A4I:0x4,A4L:0x8,A4K:0x10,A4J:0x20,BFi:0x40,BFj:0x80,BFt:
0x100};C.BFy={A4H:0x1,A4G:0x2,A4I:0x4,A4L:0x8,A4K:0x10,A4J:0x20,BCu:0x40,BCt:0x80
,BCz:0x100};C.BEF={Normal:0,BFc:1,BFa:2,BFb:3};
C._Init=function(){C.C5.__proto__=A.Core.Akk;C.AK.__proto__=A.Core.Et;C.BU.__proto__=
A.Core.Et;C.NO.__proto__=A.Core.Et;C.Ap.__proto__=A.Core.Et;C.Text.__proto__=A.Core.
Et;C.AuM.__proto__=A.Core.Et;C.Aod.__proto__=A.Core.ZF;C.AVt.__proto__=C.Aod;C.Aeo.
__proto__=A.Core.Et;C.Hn.__proto__=A.Core.Et;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */