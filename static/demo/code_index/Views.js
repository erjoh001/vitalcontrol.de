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
var Cc=[1,1];var BF=[0,0];var E4=[0,0,0,0];var Hm="\uFEFF";var IQ="No matrix to perform 3D transformation";
var Iq="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C5={KG:null,Ak$:1,Ak_:1,AQ:0xFFFFFFFF,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var
B;var Agk=this.Ak_;var Agl=this.Ak$;var Ady=A.abf(this.Er,aOffset);var Adz=A.abf(
this.EC,aOffset);var Alv;var Alw;var B3=this.AQ;if(A.aaX(Ady,Adz))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;Alv=Alw=B3;if(Ci<256){Alv=(Alv&0x00FFFFFF)|((((
Ci*((Alv>>24)&0xFF))>>8)&0xFF)<<24);Alw=(Alw&0x00FFFFFF)|((((Ci*((Alw>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agk===1)&&(Agl===1))CZ.Au1(aClip,Ady,Adz,Alv,Alw,aBlend);else
CZ.Bh0(aClip,Ady,Adz,Agk,Agl,Alv,Alw,aBlend);},GetExtent:function(){var Agk=this.
Ak_;var Agl=this.Ak$;var Ady=this.Er;var Adz=this.EC;if(((Agk===1)&&(Agl===1))||
A.aaX(Ady,Adz))return A.Core.Akg.GetExtent.call(this);var Aiz=Agk/2;var AiA=Agl/
2;var Apk=Ady[0];var Apl=Ady[1];var Apm=Adz[0];var Apn=Adz[1];var J7=Apm-Apk;var
J8=Apn-Apl;var IU=Math.sqrt((J7*J7)+(J8*J8));J7=J7/IU;J8=J8/IU;var Bcq=Apk+(J8*Aiz
);var Bcr=Apl-(J7*Aiz);var AJu=Apm+(J8*AiA);var AJv=Apn-(J7*AiA);var AJw=Apm-(J8
*AiA);var AJx=Apn+(J7*AiA);var AJy=Apk-(J8*Aiz);var AJz=Apl+(J7*Aiz);var left=Bcq;
var right=Bcq;var top=Bcr;var bottom=Bcr;if(AJu<left)left=AJu;if(AJw<left)left=AJw;
if(AJy<left)left=AJy;if(AJu>right)right=AJu;if(AJw>right)right=AJw;if(AJy>right)
right=AJy;if(AJv<top)top=AJv;if(AJx<top)top=AJx;if(AJz<top)top=AJz;if(AJv>bottom
)bottom=AJv;if(AJx>bottom)bottom=AJx;if(AJz>bottom)bottom=AJz;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RE:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},A_y:function(E){var B;if(E<1)E=1;if(E===this.Ak$)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak$=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak_!==1))&&!this.KG){
this.KG=A.aaL(A.aci.AsR);if(this.KG.OL)A.zV([this,this.RE],this.KG,0);}if(((E===
1)&&(this.Ak_===1))&&!!this.KG){if(this.KG.OL)A.z9([this,this.RE],this.KG,0);this.
KG=null;}},A_x:function(E){var B;if(E<1)E=1;if(E===this.Ak_)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak_=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak$!==1))&&!this.
KG){this.KG=A.aaL(A.aci.AsR);if(this.KG.OL)A.zV([this,this.RE],this.KG,0);}if(((
E===1)&&(this.Ak$===1))&&!!this.KG){if(this.KG.OL)A.z9([this,this.RE],this.KG,0);
this.KG=null;}},Nh:function(E){var B;if(E<1)E=1;if((E===this.Ak_)&&(E===this.Ak$
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ak_=E;this.Ak$=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((E!==1)&&!this.KG){this.KG=A.aaL(A.aci.AsR);if(this.KG.OL)A.zV([this,this.
RE],this.KG,0);}if((E===1)&&!!this.KG){if(this.KG.OL)A.z9([this,this.RE],this.KG
,0);this.KG=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fk:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(
aArg){A.Core.Akg._Init.call(this,aArg);this.__proto__=C.C5;},_Mark:function(D){var
B;A.Core.Akg._Mark.call(this,D);if((B=this.KG)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANg:0xFFFFFFFF,ANh:0xFFFFFFFF,ANl:0xFFFFFFFF
,ANk:0xFFFFFFFF,AQ:0xFFFFFFFF,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;var DD=
this.ANk;var DN=this.ANl;var DI=this.ANg;var DM=this.ANh;var B3=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ci=Ci+1;if((((DD===DN)&&(DI===DM))&&(DD===DI))&&(DD===0xFFFFFFFF
))DD=DN=DI=DM=B3;else if(B3!==0xFFFFFFFF){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)
*(((B3>>24)&0xFF)+1))>>8)&0xFF)<<24);DD=(DD&0xFFFFFF00)|((((DD&0xFF)*((B3&0xFF)+
1))>>8)&0xFF);DD=(DD&0xFFFF00FF)|((((((DD>>8)&0xFF)*(((B3>>8)&0xFF)+1))>>8)&0xFF
)<<8);DD=(DD&0xFF00FFFF)|((((((DD>>16)&0xFF)*(((B3>>16)&0xFF)+1))>>8)&0xFF)<<16);
DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*(((B3>>24)&0xFF)+1))>>8)&0xFF)<<24);DN=(DN&
0xFFFFFF00)|((((DN&0xFF)*((B3&0xFF)+1))>>8)&0xFF);DN=(DN&0xFFFF00FF)|((((((DN>>8
)&0xFF)*(((B3>>8)&0xFF)+1))>>8)&0xFF)<<8);DN=(DN&0xFF00FFFF)|((((((DN>>16)&0xFF)
*(((B3>>16)&0xFF)+1))>>8)&0xFF)<<16);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*(((B3>>
24)&0xFF)+1))>>8)&0xFF)<<24);DI=(DI&0xFFFFFF00)|((((DI&0xFF)*((B3&0xFF)+1))>>8)&
0xFF);DI=(DI&0xFFFF00FF)|((((((DI>>8)&0xFF)*(((B3>>8)&0xFF)+1))>>8)&0xFF)<<8);DI=(
DI&0xFF00FFFF)|((((((DI>>16)&0xFF)*(((B3>>16)&0xFF)+1))>>8)&0xFF)<<16);DM=(DM&0x00FFFFFF
)|((((((DM>>24)&0xFF)*(((B3>>24)&0xFF)+1))>>8)&0xFF)<<24);DM=(DM&0xFFFFFF00)|((((
DM&0xFF)*((B3&0xFF)+1))>>8)&0xFF);DM=(DM&0xFFFF00FF)|((((((DM>>8)&0xFF)*(((B3>>8
)&0xFF)+1))>>8)&0xFF)<<8);DM=(DM&0xFF00FFFF)|((((((DM>>16)&0xFF)*(((B3>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF
))>>8)&0xFF)<<24);}CZ.Ave(aClip,A.abh(this.M,aOffset),DD,DN,DM,DI,aBlend);},Aws:
function(E){var B;if(E===this.ANg)return;this.ANg=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Awt:function(E){var B;if(E===this.ANh)return;this.ANh=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Awv:function(E){var B;
if(E===this.ANl)return;this.ANl=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.M);},Awu:function(E){var B;if(E===this.ANk)return;this.ANk=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Fk:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kk:function(CZ
,aClip,aOffset,Ci,aBlend){var B;var DD;var DN;var DI;var DM;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;DD=DN=DI=DM=B3;if(Ci<256){DD=(DD&0x00FFFFFF
)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DM=(
DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF))>>8)&0xFF)<<24);}CZ.BhY(aClip,A.abh(this.M
,aOffset),this.Width,DD,DN,DM,DI,aBlend);},Nh:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(
0x0,0x1);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NO={timer:null,Al:null,ML:-1,AQ:0xFFFFFFFF,Au2:
0x1F,TO:0,Dw:0,Anm:A.wf,Vw:false,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;var
Ns=this.TO;if(this.ML>=0)Ns=this.ML;if(!this.Al||(Ns>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DN;var DM;var DI;var B3=this.AQ;var Ke=(((Ci+1)*255)>>
8)+1;var Og=this.Au2;var Az=A.abh(this.M,aOffset);var AKX=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anm);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DN=DI=DM=B3;if(Ke<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((
DN>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((((DM>>24)&0xFF)*Ke)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(((this.
Anm[0]>0)&&(AKX[0]>0))&&!((Og&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKX[
0];if(((Og&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Og=Og|0x4;}else if(((Og&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Og=Og|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Og=Og|0x5;}}if(((this.Anm[1]>0)&&(AKX[1]>0))&&!((Og&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKX[1];if(((Og&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Og=Og|0x8;}else if(((Og&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Og=Og|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Og=Og|
0xA;}}CZ.BhX(aClip,this.Al,Ns,Az,Og,DD,DN,DM,DI,aBlend);},RE:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Mc:function(G){var B;var Ns=
this.ML;var Tl=0;if(!!this.Al)Tl=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.ML<0))&&(Tl>0))this.Dw=this.timer.Bs-(this.TO*this.Al.FrameDelay);if(
!!this.timer&&(Tl>0)){var Au=(this.timer.Bs-this.Dw)|0;Ns=(Au/this.Al.FrameDelay
)|0;if(Au>=Tl){Ns=Ns%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tl);}}if(((Ns!==
this.ML)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.ML=Ns;if(!Tl&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bi(this.M);},Zq:function(E){var B;if(this.Vw===E)return;this.Vw=E;this.ML=-1;if(
!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aef);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.
Mc],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},A9M:function(
E){var B;if(E===this.Au2)return;this.Au2=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TO)&&(this.ML===-1)
)return;this.TO=E;if(!this.timer)this.ML=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OL)A.z9([this,this.RE],this.Al,0);this.Al=E;this.ML=-1;if(!!E&&E.OL)A.zV([this,this.
RE],E,0);if(this.Vw){this.Zq(false);this.Zq(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},A92:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anm))return;this.Anm=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au2&0xF)===
0xF))this.Ab.Bi(this.M);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.
__proto__=C.NO;},_Mark:function(D){var B;A.Core.Es._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dw:0,ML:0,AQ:0xFFFFFFFF
,Kg:0x12,TO:0,G3:255,Vw:false,Aa3:false,Kk:function(CZ,aClip,aOffset,Ci,aBlend){
var B;var Ns=this.TO;if(this.ML>=0)Ns=this.ML;if(!this.Al||(Ns>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C3=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DN;var DM;var DI;var B3=this.AQ;var Ke=(((
Ci+1)*this.G3)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DN=DI=DM=B3;if(Ke<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((
DN>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((((DM>>24)&0xFF)*Ke)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C3))CZ.A5z(aClip,this.Al,Ns,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DN,DM,DI,aBlend);else CZ.Bod(aClip,this.Al,Ns
,A.abh(AE,aOffset),[].concat(BF,C3),DD,DN,DM,DI,aBlend,true);},RE:function(G){var
B;if(((this.Aa3&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Mc:function(
G){var B;var Ns=this.ML;var Tl=0;if(!!this.Al)Tl=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.ML<0))&&(Tl>0))this.Dw=this.timer.Bs-(this.TO*this.Al.FrameDelay
);if(!!this.timer&&(Tl>0)){var Au=(this.timer.Bs-this.Dw)|0;Ns=(Au/this.Al.FrameDelay
)|0;if(Au>=Tl){Ns=Ns%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tl);}}if(((Ns!==
this.ML)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.ML=Ns;if(!Tl&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},I7:function(E
){if(E===this.Aa3)return;this.Aa3=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Zq:function(
E){var B;if(this.Vw===E)return;this.Vw=E;this.ML=-1;if(!E&&!!this.timer){A.z9([this
,this.Mc],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aef);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.Mc],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A6:function(E){var B;if(E===this.Kg)return;
this.Kg=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TO)&&(this.ML===-1))return;this.TO=E;if(!this.timer
)this.ML=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OL)A.z9([this,this.RE],this.
Al,0);this.Al=E;this.ML=-1;if(!!E&&E.OL)A.zV([this,this.RE],E,0);if(this.Vw){this.
Zq(false);this.Zq(true);}if(((this.Aa3&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},
Dr:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G3)return;this.G3=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aj:function(E){if(E)this.Cy(
0x400,0x0);else this.Cy(0x0,0x400);},Fk:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E4;var Bu=this.Kg;var C3=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C3[0]||!C3[1])return E4;var Df=[0,0
,width,height];var B4=Df;if(((Bu&0x40)===0x40)){var A3S=((((Df[2]-Df[0])<<16)+((
C3[0]/2)|0))/C3[0])|0;var AA3=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var Ai0=
A3S;if(AA3>Ai0)Ai0=AA3;B4=A.abL(B4,((C3[0]*Ai0)+32768)>>16);B4=A.abI(B4,((C3[1]*
Ai0)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3S=((((Df[2]-Df[0])<<16)+((C3[
0]/2)|0))/C3[0])|0;var AA3=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var Ai0=
A3S;if(AA3<Ai0)Ai0=AA3;B4=A.abL(B4,((C3[0]*Ai0)+32768)>>16);B4=A.abI(B4,((C3[1]*
Ai0)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C3);if((B4[2]-B4[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},Bkm:function(){return this.
AQ;},ASm:function(){return this.TO;},_Init:function(aArg){A.Core.Es._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Es._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CJ:
A.jV,String:A.jV,Oe:null,Amh:A.wf,I_:0,N4:0,AcL:0,Br:A.wf,Kg:0x12,AQ:0xFFFFFFFF,
Afw:false,Aa3:false,Yn:false,AN6:false,HX:false,Lb:function(){if(!!this.Oe){this.
A1Z(this.Oe);this.Oe=null;}},Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;if((this.
CJ===A.jV)||!this.B6)return;var Bu=this.Kg;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DN;var DM;var DI;var col=this.AQ;var Ke=(((Ci+1)*255)>>8)+1;
var Kc=this.CJ.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kc<1)return;DD=DN=DI=DM=col;if(Ke<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*
Ke)>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((((DM>>24)&0xFF)*Ke)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kc===1)&&!((Bu&0x40)===
0x40)){CZ.A56(aClip,font,this.CJ,2,(this.CJ.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DN,
DM,DI,true);return;}var leading=font.Leading;if(this.N4>0)leading=(this.N4-font.
Ascent)-font.Descent;var AaN=(font.Ascent+font.Descent)+leading;var Byf=aClip[1]-
AE[1];var Byg=aClip[3]-AE[1];var A1b=AE[2]-AE[0];var Dg=0;var O=1;var B3=this.CJ.
charCodeAt(1)||0;while(((Dg+AaN)<Byf)&&(B3>0)){O=O+B3;Dg=Dg+AaN;B3=this.CJ.charCodeAt(
O)||0;}while((Dg<Byg)&&(B3>0)){var L_=A.abe(Bq,[0,Dg]);var Ama=0;var O_=false;if(((((
Bu&0x40)===0x40)&&((this.CJ.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CJ.charCodeAt(
O+1)||0)!==0x0A))&&((this.CJ.charCodeAt(O+B3)||0)!==0x00))O_=true;if(O_&&!!(Bu&0x6
)){var Ap1=O+B3;var Aza=this.CJ.indexOf(String.fromCharCode(0x20),O+1);var Azb=this.
CJ.indexOf(String.fromCharCode(0xA0),O+1);if(((Aza<0)||(Aza>=Ap1))&&((Azb<0)||(Azb>=
Ap1)))O_=false;}if(O_)Ama=A1b;else if(((Bu&0x4)===0x4))L_=[(L_[0]-A1b)+font.Ys(this.
CJ,O+1,B3-1),L_[1]];else if(((Bu&0x2)===0x2))L_=[(L_[0]-((A1b/2)|0))+((font.Ys(this.
CJ,O+1,B3-1)/2)|0),L_[1]];CZ.A56(aClip,font,this.CJ,O+1,B3-1,Df,L_,Ama,0,DD,DN,DM
,DI,true);O=O+B3;Dg=Dg+AaN;B3=this.CJ.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfK;BfK=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfK&&
!this.AcL)&&this.Afw)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CJ=A.jV;this.
HX=false;A.pe([this,this.Pa],this);}if(((this.Yn&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CJ=
A.jV;this.HX=false;A.pe([this,this.Pa],this);}A.Core.Es.H.call(this,E);A.pe([this
,this.AiT],this);},Bx9:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bx8:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1Z:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Byt:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiT:function(G){A.pe(this.El
,this);},Pa:function(G){A.pe([this,this.XI],this);},XI:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xy=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afw){
if(this.AcL>0)Xy=this.AcL;else if(!this.Aa3)Xy=width-(this.I_*2);else Xy=width;if(
Xy<0)Xy=1;}if(!!this.Oe){this.A1Z(this.Oe);this.Oe=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN6)this.Oe=this.Byt(length
);this.CJ=font.BnD(this.String,0,Xy,length,this.Oe);if(!!this.Oe&&!this.Bjd()){this.
A1Z(this.Oe);this.Oe=null;}}else this.CJ=A.jV;this.Amh=BF;if(((this.Yn&&(this.CJ
!==A.jV))&&!this.Aa3)&&!!font){var Bu=this.Kg;var leading=font.Leading;var Iz=this.
CJ;var AKS=this.Aj5();if(((Bu&0x80)===0x80)){if(AKS)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AAY=(font.
Ascent+font.Descent)+leading;var Kc=Iz.charCodeAt(0)||0;var AlT=((height+leading
)/AAY)|0;var A1p=false;var AJC=false;if(AlT<=0)AlT=1;if(Kc>AlT){var Bf=0;var AAZ=
0;var AKQ=Kc-1;var K2;var Nt=Iz.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AAZ=Kc-AlT;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AAZ=((Kc-AlT)/2)|0;AKQ=(AAZ+AlT)-1;}else
AKQ=AlT-1;A1p=AAZ>0;AJC=AKQ<(Kc-1);for(K2=1;Bf<AAZ;Bf=Bf+1)K2=K2+(Iz.charCodeAt(
K2)||0);if(AJC)for(Nt=K2;Bf<AKQ;Bf=Bf+1)Nt=Nt+(Iz.charCodeAt(Nt)||0);if(A1p){var
IU=Iz.charCodeAt(K2)||0;tmp=(Hm+A.abW(Iz,K2,IU))+Hm;tmp=A.abQ(tmp,0,(IU+2)&0xFFFF
);K2=K2+IU;if((tmp.charCodeAt(IU)||0)===0x0A){tmp=A.abQ(tmp,IU,0xFEFF);tmp=A.abQ(
tmp,IU+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Iz,K2,Nt-K2);if(AJC&&(
Nt>=K2)){var IU=Iz.charCodeAt(Nt)||0;var Qv=(Hm+A.abW(Iz,Nt,IU))+Hm;Qv=A.abQ(Qv,
0,(IU+2)&0xFFFF);Qv=A.abQ(Qv,1,0xFEFF);if((Qv.charCodeAt(IU)||0)===0x0A){Qv=A.abQ(
Qv,IU,0xFEFF);Qv=A.abQ(Qv,IU+1,0x0A);}if((Qv.charCodeAt(2)||0)===0x0A){Qv=A.abQ(
Qv,2,0xFEFF);Qv=A.abQ(Qv,1,0x0A);}else Qv=A.abQ(Qv,1,0xFEFF);tmp=tmp+Qv;}Iz=String.
fromCharCode(AlT&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKq=width-(this.I_*2);if(this.
Afw&&(this.AcL>0))AKq=this.AcL;Kc=Iz.charCodeAt(0)||0;for(;Bf<Kc;Bf=Bf+1){var Al_=
A1p&&!Bf;var Al$=AJC&&(Bf===(Kc-1));var Xo=false;var Xp=false;var Auf=AKS;if((AKS&&
Al_)&&!Al$){Al_=false;Al$=true;}else if((AKS&&Al$)&&!Al_){Al$=false;Al_=true;}var
XJ=inx+1;var IU=Iz.charCodeAt(inx)||0;var K2=XJ;var Nt=(XJ+IU)-2;var A2c=-1;var A2d=-
1;if(!this.Afw&&(font.Ys(Iz,XJ,IU-1)>AKq)){var AoX=Bu;if(((AoX&0x2)===0x2)&&!!(AoX&
0x5))AoX&=~0x2;if(((AoX&0x2)===0x2))AoX&=~0x5;if(((AoX&0x4)===0x4))Xo=true;else if(((
AoX&0x2)===0x2)){Xo=true;Xp=true;}else Xp=true;}if((Iz.charCodeAt(K2)||0)===0x0A
)K2=K2+1;if((Iz.charCodeAt(Nt)||0)===0x0A)Nt=Nt-1;while(Xo&&((Iz.charCodeAt(K2)||
0)===0xFEFF))K2=K2+1;while(Xp&&((Iz.charCodeAt(Nt)||0)===0xFEFF))Nt=Nt-1;Xo=Xo&&
!Al$;Xp=Xp&&!Al_;while((((Xo||Xp)||Al_)||Al$)&&(K2<Nt)){if((Xo&&(Auf||!Xp))||Al_
){if(A2c>0)Iz=A.abQ(Iz,A2c,0xFEFF);Iz=A.abQ(Iz,K2,0x2026);A2c=K2;K2=K2+1;Auf=!Auf;
Al_=false;if(font.Ys(Iz,XJ,IU-1)<=AKq){Xo=false;Xp=false;}else Xo=Xo||!Xp;}if((Xp&&(
!Auf||!Xo))||Al$){if(A2d>0)Iz=A.abQ(Iz,A2d,0xFEFF);Iz=A.abQ(Iz,Nt,0x2026);A2d=Nt;
Nt=Nt-1;Auf=!Auf;Al$=false;if(font.Ys(Iz,XJ,IU-1)<=AKq){Xo=false;Xp=false;}else Xp=
Xp||!Xo;}}inx=inx+IU;}this.Amh=[font.A6A(Iz),((Iz.charCodeAt(0)||0)*AAY)-leading
];this.CJ=Iz;}if(this.Aa3&&(this.CJ!==A.jV)){var At3=[this.I_,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),At3),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiT],this);},BlO:function(
E){if(E===this.AN6)return;this.AN6=E;this.CJ=A.jV;this.HX=false;A.pe([this,this.
Pa],this);},Hh:function(E){if(E<0)E=0;if(this.I_===E)return;this.I_=E;this.CJ=A.
jV;this.HX=false;A.pe([this,this.Pa],this);},Aw1:function(E){var B;if(E<0)E=0;if(
this.N4===E)return;this.N4=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);if(this.Yn){this.CJ=A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(this.Aa3&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiT],this);}
,BlN:function(E){if(E===this.Yn)return;this.Yn=E;if(((this.Afw&&!!!this.AcL)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);},Q1:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcL&&this.Afw)||!!E)||this.Yn)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I7:function(E){if(E===this.Aa3)return;this.Aa3=E;if(E&&this.Yn){this.CJ=
A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(E&&this.HX){var At3=[this.I_,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),At3),this.Br));this.U=this.U&~
0x2000;}},Bno:function(E){if(E<0)E=0;if(E===this.AcL)return;this.AcL=E;if(this.Afw&&
this.HX){this.CJ=A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(((!!!E&&this.Afw
)||this.Yn)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KS:function(
E){if(E===this.Afw)return;this.Afw=E;if(this.HX){this.CJ=A.jV;this.HX=false;A.pe([
this,this.Pa],this);}if(((E&&!!!this.AcL)||this.Yn)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},F_:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.HX)A.pe([this
,this.AiT],this);},A6:function(E){var B;if(E===this.Kg)return;this.Kg=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.Yn){this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);}if(this.HX)A.pe([this,this.AiT],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CJ=A.jV;this.HX=false;A.pe([this,this.
Pa],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fk:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Aj5:function(
){if(!this.HX)this.XI(this);if(!this.Oe)return false;var result=false;var bidi=this.
Oe;result=A.v2(bidi);return result;},Bjd:function(){if(!this.HX)this.XI(this);if(
!this.Oe)return false;var result=false;var bidi=this.Oe;result=A.zZ(bidi);return result;
},AGN:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yn)return BF;if(
!this.HX)this.XI(this);if(aIndex<0)aIndex=0;var BzG=(this.CJ.charCodeAt(0)||0)-1;
var Mb=this.CJ.charCodeAt(1)||0;var inx=1;var Ai5=2;var Bf=0;var col=-1;var CD=true;
aIndex=aIndex+2;while((Bf<BzG)&&((inx+Mb)<=aIndex)){inx=inx+Mb;Bf=Bf+1;Ai5=Ai5+1;
aIndex=aIndex+1;Mb=this.CJ.charCodeAt(inx)||0;}if(aIndex>(inx+Mb))aIndex=inx+Mb;
if(!!this.Oe)aIndex=(inx+this.Bx8(this.Oe,(inx+1)-Ai5,(inx+Mb)-Ai5,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iv=this.CJ.charCodeAt(inx+1)||0;if(CD)col=col+
1;CD=(Iv!==0xFEFF)&&(Iv!==0x0A);}return[col,Bf];},AnT:function(AoM){if(((this.String===
A.jV)||!this.B6)||this.Yn)return 0;if(!this.HX)this.XI(this);var Bf=AoM[1];var col=
AoM[0];var inx=1;var Ai5=2;var Kc=this.CJ.charCodeAt(0)||0;var Mb=this.CJ.charCodeAt(
1)||0;if(Bf>=Kc){Bf=Kc-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mb>0)){inx=inx+Mb;Bf=Bf-1;Ai5=Ai5+1;Mb=this.CJ.charCodeAt(inx)||0;
}var Xx=inx;var AKR=(inx-Ai5)+1;var Ap1=(AKR+Mb)-1;var AAL=false;while((col>=0)&&(
Mb>1)){var Iv=this.CJ.charCodeAt(inx+1)||0;inx=inx+1;Mb=Mb-1;AAL=(Iv===0xFEFF)||(
Iv===0x0A);if(!AAL){col=col-1;Xx=inx;}}if((!AAL&&(col>=0))&&((this.CJ.charCodeAt(
inx+1)||0)===0x00))AAL=true;if(AAL)Xx=Xx+1;Xx=Xx-Ai5;if(!!this.Oe)Xx=AKR+this.Bx9(
this.Oe,AKR,Ap1,Xx-AKR);return Xx;},ATP:function(KZ){var B;if((this.String===A.jV
)||!this.B6)return BF;if(!this.HX)this.XI(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B6;var Bu=this.Kg;var Kc=this.CJ.charCodeAt(
0)||0;var leading=font.Leading;if(KZ[1]<AE[1])KZ=[KZ[0],AE[1]];if(KZ[1]>=AE[3])KZ=[
KZ[0],AE[3]-1];if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AaN=(
font.Ascent+font.Descent)+leading;var Bf=((KZ[1]-AE[1])/AaN)|0;var NB=this.ACY(Bf
);var Mb=NB.length;var O_=false;if(((Bu&0x80)===0x80)){if(this.Aj5())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kc-1)))O_=true;if((O_&&(
NB.indexOf(String.fromCharCode(0x20),0)<0))&&(NB.indexOf(String.fromCharCode(0xA0
),0)<0))O_=false;if(O_){var inx=1;var Ap0=Bf;while(Ap0>0){inx=inx+(this.CJ.charCodeAt(
inx)||0);Ap0=Ap0-1;}if(((this.CJ.charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((
inx+(this.CJ.charCodeAt(inx)||0))-1)||0)===0x0A))O_=false;}var Ama=0;var En=0;if(
O_)Ama=AE[2]-AE[0];else if(((Bu&0x4)===0x4))En=(AE[2]-AE[0])-font.Ys(NB,0,Mb);else
if(((Bu&0x2)===0x2))En=(((AE[2]-AE[0])/2)|0)-((font.Ys(NB,0,Mb)/2)|0);var col=font.
BiQ(NB,0,Mb,(KZ[0]-AE[0])-En,Ama);if(col<0)col=0;return[col,Bf];},Afd:function(AoM
){var B;if((this.String===A.jV)||!this.B6)return BF;if(!this.HX)this.XI(this);var
Kc=this.CJ.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kg;var Bf=AoM[1];var col=
AoM[0];if(Bf>=Kc){Bf=Kc-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}var NB=this.ACY(
Bf);var Mb=NB.length;var AE=this.Db();var O_=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kc-1)))O_=true;if((O_&&(NB.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NB.indexOf(String.fromCharCode(0xA0),0)<0))O_=false;if(O_){var inx=1;var
Ap0=Bf;while(Ap0>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ap0=Ap0-1;}if(((this.CJ.
charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((inx+(this.CJ.charCodeAt(inx
)||0))-1)||0)===0x0A))O_=false;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ama=0;var En=AE[0];if(O_)Ama=AE[2]-AE[0];else if(((Bu&0x4)===0x4))En=AE[2]-font.
Ys(NB,0,Mb);else if(((Bu&0x2)===0x2))En=(En+(((AE[2]-AE[0])/2)|0))-((font.Ys(NB,
0,Mb)/2)|0);var pos=font.BiM(NB,0,Mb,col,Ama);if(pos<0)pos=0;return[En+pos,Dg];}
,AON:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E4;if(!this.HX)
this.XI(this);var Kc=this.CJ.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kc)&&(Ad>0)))return E4;var Bu=this.Kg;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.I_*2);if(((
Bu&0x80)===0x80)){if(this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N4>0)leading=(this.N4-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var En=0;while(Ad>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var
AA0=(this.CJ.charCodeAt(inx)||0)-1;var BfL=font.Ys(this.CJ,inx+1,AA0);var A3O=font.
A6K(this.CJ,inx+1,AA0);var Ap2=BfL;var AaN=font.Ascent+font.Descent;var ABc=(Kc*((
font.Ascent+font.Descent)+leading))-leading;if(!Kc)ABc=AaN;if((((this.CJ.charCodeAt((
inx+AA0)+1)||0)===0x00)||((this.CJ.charCodeAt(inx+AA0)||0)===0x0A))||((this.CJ.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap1=(inx+1)+AA0;var Aza=
this.CJ.indexOf(String.fromCharCode(0x20),inx+1);var Azb=this.CJ.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Aza>=0)&&(Aza<Ap1))||((Azb>=0)&&(Azb<Ap1)))Ap2=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABc>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap2>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))En=width-Ap2;else if(((Bu&0x2)===0x2))En=((width/2)|0)-((
Ap2/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-ABc);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((ABc/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((ABc/2)|0);En=(En+A3O[0])+this.I_;
Ap2=(Ap2+(A3O[2]-A3O[0]))-BfL;var B4;{var Bfb=[Bd[0]+En,Bd[1]+Dg];B4=[].concat(Bfb
,A.abf(Bfb,[Ap2,AaN]));}return A.abh(B4,this.Br);},ACY:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XI(this);var Kc=this.CJ.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kc))return A.jV;while(Ad>0){inx=inx+(
this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var XJ=inx;var AtJ=inx+(this.CJ.charCodeAt(
inx)||0);var Iv=0x00;do{XJ=XJ+1;Iv=this.CJ.charCodeAt(XJ)||0;}while(((Iv===0xFEFF
)||(Iv===0x0A))&&(XJ<=AtJ));do{AtJ=AtJ-1;Iv=this.CJ.charCodeAt(AtJ)||0;}while(((
Iv===0xFEFF)||(Iv===0x0A))&&(XJ<=AtJ));var NB=A.abW(this.CJ,XJ,(AtJ-XJ)+1);var Aps;
for(Aps=NB.indexOf(String.fromCharCode(0xFEFF),0);Aps>=0;Aps=NB.indexOf(String.fromCharCode(
0xFEFF),Aps+1)){var Xx=Aps+1;while((NB.charCodeAt(Xx)||0)===0xFEFF)Xx=Xx+1;NB=A.
ab1(NB,Aps,Xx-Aps);}return NB;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E4;if(!this.HX)this.XI(this);if(this.CJ===A.jV)return E4;var leading=this.
B6.Leading;var AAY=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N4>0
){leading=(this.N4-this.B6.Ascent)-this.B6.Descent;AAY=this.N4;}if(A.aaX(this.Amh
,BF))this.Amh=[this.B6.A6A(this.CJ),this.Amh[1]];this.Amh=[this.Amh[0],((this.CJ.
charCodeAt(0)||0)*AAY)-leading];var Bu=this.Kg;var Bd=this.M;var At3=this.I_;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[At3,0,width-At3,height];var B4=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Amh));if(((Bu&0x80)===0x80)){if(
this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xy=
this.AcL;if(Xy<=0)Xy=width-(this.I_*2);if(Xy<0)Xy=0;if(Xy>(B4[2]-B4[0]))B4=A.abL(
B4,Xy);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B4[3]-B4[1])>(Df[3]-Df[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B4[2]-B4[0])>(Df[
2]-Df[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B4[2]-B4[0])!==(Df[2]-Df[0]
)){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2)===0x2)
)B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[3]-B4[
1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1]));else
if(((Bu&0x100)===0x100))B4=A.abO(B4,((Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-B4[1
])/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B4=
A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(
0,2));return A.abh(B4,this.Br);},_Init:function(aArg){A.Core.Es._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lb();this.__proto__=A.Core.Es;
A.Core.Es._Done.call(this);},_Mark:function(D){var B;A.Core.Es._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuM={attrString:null,AttrSet:
null,String:A.jV,Kg:0x12,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Ci=Ci+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.BhV(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ci*255)>>8,(Ci*255)>>8,(Ci*255)>>8,(Ci
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pa],this);}A.Core.Es.H.call(this,E);A.pe([this,this.AiT],this
);},AiT:function(G){},XI:function(G){var B;var ALw;ALw=(B=this.M)[2]-B[0];if(ALw<
0)ALw=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A42
,0);if(!!this.attrString)this.attrString.BnC(this.AttrSet,this.String,ALw,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiT],this);
},Pa:function(G){A.pe([this,this.XI],this);},BfE:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kg)return;this.Kg=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([
this,this.AiT],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pa],this);},A9q:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BfE],this.AttrSet,0);A.z9([this,this.Pa
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BfE],this.AttrSet,0);A.zV([this,this.Pa],this.AttrSet,1);}A.pe([this,this.
Pa],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E4;
if(!this.attrString)this.XI(this);if(!this.attrString)return E4;var Bu=this.Kg;var
C3=this.attrString.BiR();var Df=A.aaT(this.M,BF);var B4=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C3));if(!C3[0]||!C3[1])return E4;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);
this.__proto__=C.AuM;this.U=0x3;},_Mark:function(D){var B;A.Core.Es._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoe={AiE:
null,FD:null,Aiq:0,Aip:0,U4:A.wf,Cj:A.abi(4,3,0,null),AGJ:A.wf,Ti:0,ApF:0,JR:function(
E){if(A.aaX(E,this.Ku))return;A.Core.ZA.JR.call(this,E);this.Cj.Set(3,0,E[0]);this.
Cj.Set(3,1,E[1]);this.Cj.Set(3,2,1);this.Ti=0x45;this.FD=null;A.pe([this,this.Ajb
],this);},Kr:function(E){if(A.aaX(E,this.Mz))return;A.Core.ZA.Kr.call(this,E);this.
Cj.Set(2,0,E[0]);this.Cj.Set(2,1,E[1]);this.Cj.Set(2,2,1);this.Ti=0x45;this.FD=null;
A.pe([this,this.Ajb],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.ZA.
DC.call(this,E);this.Cj.Set(1,0,E[0]);this.Cj.Set(1,1,E[1]);this.Cj.Set(1,2,1);this.
Ti=0x45;this.FD=null;A.pe([this,this.Ajb],this);},DL:function(E){if(A.aaX(E,this.
Er))return;A.Core.ZA.DL.call(this,E);this.Cj.Set(0,0,E[0]);this.Cj.Set(0,1,E[1]);
this.Cj.Set(0,2,1);this.Ti=0x45;this.FD=null;A.pe([this,this.Ajb],this);},A1h:function(
){return;},Ajb:function(G){var B;this.AiE=null;if(this.Ti===0x00)return;if(this.
Ti===0x45){var K3=A._NewObject(A.Graphics.AxV,0);K3=K3.ANI(this.Cj.Get(0,0),this.
Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),this.Cj.Get(2,1),
this.Cj.Get(3,0),this.Cj.Get(3,1));if(!!K3){K3.ABX(0,0);this.Cj.Set(0,2,K3.UN*240
);K3.ABX(1,0);this.Cj.Set(1,2,K3.UN*240);K3.ABX(1,1);this.Cj.Set(2,2,K3.UN*240);
K3.ABX(0,1);this.Cj.Set(3,2,K3.UN*240);}this.A1h();}if((((this.Ti===0x4D)&&!!this.
FD)&&!!this.U4[0])&&!!this.U4[1]){var Ai8=[].concat(BF,this.U4);var Ai7=this.AGJ;
var Af2=Ai8[0]-Ai7[0];var Az=Ai8[2]-Ai7[0];var D8=Ai8[1]-Ai7[1];var Rt=Ai8[3]-Ai7[
1];this.FD.Ae_(Af2,D8);this.Cj.Set(0,0,this.FD.PY+this.Aip);this.Cj.Set(0,1,this.
FD.PZ+this.Aiq);this.Cj.Set(0,2,this.FD.UN);this.FD.Ae_(Az,D8);this.Cj.Set(1,0,this.
FD.PY+this.Aip);this.Cj.Set(1,1,this.FD.PZ+this.Aiq);this.Cj.Set(1,2,this.FD.UN);
this.FD.Ae_(Az,Rt);this.Cj.Set(2,0,this.FD.PY+this.Aip);this.Cj.Set(2,1,this.FD.
PZ+this.Aiq);this.Cj.Set(2,2,this.FD.UN);this.FD.Ae_(Af2,Rt);this.Cj.Set(3,0,this.
FD.PY+this.Aip);this.Cj.Set(3,1,this.FD.PZ+this.Aiq);this.Cj.Set(3,2,this.FD.UN);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Er=[(this.
Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.Get(1,0)+0.5)|0,(
this.Cj.Get(1,1)+0.5)|0];this.Mz=[(this.Cj.Get(2,0)+0.5)|0,(this.Cj.Get(2,1)+0.5
)|0];this.Ku=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];this.A1h();}this.
ApF=this.Ti;this.Ti=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},Bnb:function(E){if(A.aaX(E,this.AGJ))return;this.AGJ=E;if((this.ApF!==0x45)&&(
this.Ti===0x00)){this.Ti=this.ApF;A.pe([this,this.Ajb],this);}},Arl:function(Fb){
var B;if(!!!this.AiE){this.AiE=A._NewObject(A.Graphics.A69,0);this.AiE.ANI(this.
Cj.Get(0,0),this.Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),
this.Cj.Get(2,1),this.Cj.Get(3,0),this.Cj.Get(3,1));}if(!this.AiE.Ae_(Fb))return BF;
var Ap7=[].concat(BF,this.U4);var En=this.AiE.PY*(Ap7[2]-Ap7[0]);var Dg=this.AiE.
PZ*(Ap7[3]-Ap7[1]);return A.abf([En|0,Dg|0],Ap7.slice(0,2));},A$K:function(BbI,L5
){var B;this.AiE=null;if(!L5)throw new Error(IQ);if(!this.FD)this.FD=A._NewObject(
A.Graphics.AxV,0);this.FD.Bg3(L5);this.Aip=BbI[0];this.Aiq=BbI[1];this.ApF=0x4D;
this.Ti=0x00;if(!this.U4[0]||!this.U4[1])return;var Ai8=[].concat(BF,this.U4);var
Ai7=this.AGJ;var Af2=Ai8[0]-Ai7[0];var Az=Ai8[2]-Ai7[0];var D8=Ai8[1]-Ai7[1];var
Rt=Ai8[3]-Ai7[1];this.FD.Ae_(Af2,D8);this.Cj.Set(0,0,this.FD.PY+this.Aip);this.Cj.
Set(0,1,this.FD.PZ+this.Aiq);this.Cj.Set(0,2,this.FD.UN);this.FD.Ae_(Az,D8);this.
Cj.Set(1,0,this.FD.PY+this.Aip);this.Cj.Set(1,1,this.FD.PZ+this.Aiq);this.Cj.Set(
1,2,this.FD.UN);this.FD.Ae_(Az,Rt);this.Cj.Set(2,0,this.FD.PY+this.Aip);this.Cj.
Set(2,1,this.FD.PZ+this.Aiq);this.Cj.Set(2,2,this.FD.UN);this.FD.Ae_(Af2,Rt);this.
Cj.Set(3,0,this.FD.PY+this.Aip);this.Cj.Set(3,1,this.FD.PZ+this.Aiq);this.Cj.Set(
3,2,this.FD.UN);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Er=[(this.Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.
Get(1,0)+0.5)|0,(this.Cj.Get(1,1)+0.5)|0];this.Mz=[(this.Cj.Get(2,0)+0.5)|0,(this.
Cj.Get(2,1)+0.5)|0];this.Ku=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.A1h();},_Init:
function(aArg){A.Core.ZA._Init.call(this,aArg);(this.Cj=[]).__proto__=C.Aoe.Cj;this.
__proto__=C.Aoe;this.U=0x3;},_Mark:function(D){var B;A.Core.ZA._Mark.call(this,D
);if((B=this.AiE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FD)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVw={Fp:null,bitmap:null
,P:null,G3:255,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nv=aOffset[0];var Nw=aOffset[1];var AE=[].concat(BF,this.
U4);aBlend=aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;var Bd8;var Bd9;var Bd_;var Bd$;
var BzQ=this.G3;Bd8=Bd9=Bd_=Bd$=BzQ;var Alv=255|(255<<8)|(255<<16)|((((Ci*Bd8)>>
8)&0xFF)<<24);var Alw=255|(255<<8)|(255<<16)|((((Ci*Bd9)>>8)&0xFF)<<24);var Bx_=
255|(255<<8)|(255<<16)|((((Ci*Bd_)>>8)&0xFF)<<24);var Bx$=255|(255<<8)|(255<<16)|((((
Ci*Bd$)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E4,aOffset));CZ.AhO(aClip,this.bitmap
,0,this.Cj.Get(0,0)+Nv,this.Cj.Get(0,1)+Nw,this.Cj.Get(0,2),this.Cj.Get(1,0)+Nv,
this.Cj.Get(1,1)+Nw,this.Cj.Get(1,2),this.Cj.Get(2,0)+Nv,this.Cj.Get(2,1)+Nw,this.
Cj.Get(2,2),this.Cj.Get(3,0)+Nv,this.Cj.Get(3,1)+Nw,this.Cj.Get(3,2),AE,Alv,Alw,
Bx_,Bx$,aBlend,true);},GY:function(CN){if(!this.P||!this.Fp)return null;var BQ=(
A.Core.Aeb.isPrototypeOf(CN)?CN:null);var D3=(A.Core.AqG.isPrototypeOf(CN)?CN:null
);if(!BQ&&!D3)return null;var Fr=BF;var B0=this.Fp.Ab;while(!!B0&&(B0!==this.P)){
Fr=A.abe(Fr,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fp;if(!!BQ&&!BQ.Down)this.Fp=null;
if(!!BQ){BQ.H0=A.abf(this.Arl(BQ.H0),Fr);BQ.NQ=A.abf(this.Arl(BQ.NQ),Fr);return X.
GY(BQ);}if(!!D3){var BzU=A.abf(this.Arl(A.abe(D3.H0,D3.DG)),Fr);D3.H0=A.abf(this.
Arl(D3.H0),Fr);D3.NQ=A.abf(this.Arl(D3.NQ),Fr);D3.DG=A.abe(D3.H0,BzU);return X.GY(
D3);}return C.Aoe.GY.call(this,CN);},Yi:function(Da,BG,Oc,Aak,Ac2,Ac1){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arl(pos
);var Ap7=[].concat(BF,this.U4);if(!A.wa(Ap7,pos))return null;var JA=this.P.Yi(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BG,Oc,Aak,null
,Ac1);if(!!JA)this.Fp=JA.Ch;else this.Fp=null;if(!!this.Fp)return A._NewObject(A.
Core.AuU,0).Initialize(this,BF);return null;},RE:function(G){var B;var Bea=this.
U4;if(!!this.P)this.bitmap=this.P.FA;else this.bitmap=null;if(!!this.bitmap)this.
U4=this.bitmap.FrameSize;else this.U4=BF;if(((A.aaX(Bea,this.U4)||((this.ApF===0x45
)&&(this.Ti===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if(((this.ApF!==0x45)&&(this.Ti===0x00))&&!A.aaX(Bea,this.U4)){this.Ti=this.ApF;
A.pe([this,this.Ajb],this);}},Dr:function(E){var B;if(E===this.G3)return;this.G3=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Bmg:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Iq);if(!!this.P){A.
z9([this,this.RE],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RE
],E,0);this.bitmap=E.FA;}this.RE(this);},Awi:function(){return this.G3;},_Init:function(
aArg){C.Aoe._Init.call(this,aArg);this.__proto__=C.AVw;},_Mark:function(D){var B;
C.Aoe._Mark.call(this,D);if((B=this.Fp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aem={Hv:null,AQ:0xFFFFFFFF,DG:A.wf
,AOu:false,Lb:function(){this.A1B();},Kk:function(CZ,aClip,aOffset,Ci,aBlend){if(
!this.Hv)return;var DD;var DN;var DI;var DM;var B3=this.AQ;Ci=Ci+1;DD=DN=DI=DM=B3;
if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF
)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Aem(aClip,this.Hv,A.abh(this.M,aOffset),this.AOu,this.DG,DD,DN,DM,DI,true,true,0
);},A1B:function(){return;},Ajc:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.M);},AnH:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hv)this.Ab.Bi(this.M);},Bmb:function(E){var B;if(E===this.AOu)return;this.
AOu=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.M);},Zu:function(
E){var B;if(E===this.Hv)return;if(!!this.Hv)A.z9([this,this.Ajc],this.Hv,0);this.
Hv=E;if(!!this.Hv)A.zV([this,this.Ajc],this.Hv,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.__proto__=C.Aem;},
_Done:function(){this.Lb();this.__proto__=A.Core.Es;A.Core.Es._Done.call(this);}
,_Mark:function(D){var B;A.Core.Es._Mark.call(this,D);if((B=this.Hv)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hk={Hv:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Lb:function(){this.A1B();},Kk:function(CZ,aClip,aOffset,Ci,aBlend
){if(!this.Hv)return;var DD;var DN;var DI;var DM;var B3=this.AQ;Ci=Ci+1;DD=DN=DI=
DM=B3;if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&
0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hk(aClip,this.Hv,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DN,DM,DI,true,true);},A1B:function(){return;},Ajc:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.
M);},AnH:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.M);},Nh:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hv)this.Ab.Bi(this.M);},Zu:function(E){var B;if(E===this.Hv)return;if(!!this.
Hv)A.z9([this,this.Ajc],this.Hv,0);this.Hv=E;if(!!this.Hv)A.zV([this,this.Ajc],this.
Hv,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E
)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(aArg){A.Core.Es._Init.call(
this,aArg);this.__proto__=C.Hk;},_Done:function(){this.Lb();this.__proto__=A.Core.
Es;A.Core.Es._Done.call(this);},_Mark:function(D){var B;A.Core.Es._Mark.call(this
,D);if((B=this.Hv)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BD4={A4K:0x1,A4J:0x2,A4L:0x4,A4O:0x8,A4N:0x10,A4M:0x20,BFi:0x40,BFj:0x80,BFu:
0x100};C.BFy={A4K:0x1,A4J:0x2,A4L:0x4,A4O:0x8,A4N:0x10,A4M:0x20,BCx:0x40,BCw:0x80
,BCC:0x100};C.BEH={Normal:0,BFd:1,BFb:2,BFc:3};
C._Init=function(){C.C5.__proto__=A.Core.Akg;C.AL.__proto__=A.Core.Es;C.BU.__proto__=
A.Core.Es;C.NO.__proto__=A.Core.Es;C.Ap.__proto__=A.Core.Es;C.Text.__proto__=A.Core.
Es;C.AuM.__proto__=A.Core.Es;C.Aoe.__proto__=A.Core.ZA;C.AVw.__proto__=C.Aoe;C.Aem.
__proto__=A.Core.Es;C.Hk.__proto__=A.Core.Es;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */