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
var Cd=[1,1];var BF=[0,0];var E4=[0,0,0,0];var Hm="\uFEFF";var IQ="No matrix to perform 3D transformation";
var Ip="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C5={KG:null,Ak_:1,Ak9:1,AQ:0xFFFFFFFF,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var
B;var Agj=this.Ak9;var Agk=this.Ak_;var Adv=A.abf(this.Er,aOffset);var Adw=A.abf(
this.EC,aOffset);var Alt;var Alu;var B3=this.AQ;if(A.aaX(Adv,Adw))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;Alt=Alu=B3;if(Ci<256){Alt=(Alt&0x00FFFFFF)|((((
Ci*((Alt>>24)&0xFF))>>8)&0xFF)<<24);Alu=(Alu&0x00FFFFFF)|((((Ci*((Alu>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agj===1)&&(Agk===1))CZ.AuX(aClip,Adv,Adw,Alt,Alu,aBlend);else
CZ.BhT(aClip,Adv,Adw,Agj,Agk,Alt,Alu,aBlend);},GetExtent:function(){var Agj=this.
Ak9;var Agk=this.Ak_;var Adv=this.Er;var Adw=this.EC;if(((Agj===1)&&(Agk===1))||
A.aaX(Adv,Adw))return A.Core.Akf.GetExtent.call(this);var Aiy=Agj/2;var Aiz=Agk/
2;var Apj=Adv[0];var Apk=Adv[1];var Apl=Adw[0];var Apm=Adw[1];var J6=Apl-Apj;var
J7=Apm-Apk;var IU=Math.sqrt((J6*J6)+(J7*J7));J6=J6/IU;J7=J7/IU;var Bcg=Apj+(J7*Aiy
);var Bch=Apk-(J6*Aiy);var AJv=Apl+(J7*Aiz);var AJw=Apm-(J6*Aiz);var AJx=Apl-(J7
*Aiz);var AJy=Apm+(J6*Aiz);var AJz=Apj-(J7*Aiy);var AJA=Apk+(J6*Aiy);var left=Bcg;
var right=Bcg;var top=Bch;var bottom=Bch;if(AJv<left)left=AJv;if(AJx<left)left=AJx;
if(AJz<left)left=AJz;if(AJv>right)right=AJv;if(AJx>right)right=AJx;if(AJz>right)
right=AJz;if(AJw<top)top=AJw;if(AJy<top)top=AJy;if(AJA<top)top=AJA;if(AJw>bottom
)bottom=AJw;if(AJy>bottom)bottom=AJy;if(AJA>bottom)bottom=AJA;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cd));return Az;
},RF:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},A_p:function(E){var B;if(E<1)E=1;if(E===this.Ak_)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak_=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak9!==1))&&!this.KG){
this.KG=A.aaL(A.aci.AsR);if(this.KG.OK)A.zV([this,this.RF],this.KG,0);}if(((E===
1)&&(this.Ak9===1))&&!!this.KG){if(this.KG.OK)A.z9([this,this.RF],this.KG,0);this.
KG=null;}},A_o:function(E){var B;if(E<1)E=1;if(E===this.Ak9)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Ak9=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(((E!==1)||(this.Ak_!==1))&&!this.
KG){this.KG=A.aaL(A.aci.AsR);if(this.KG.OK)A.zV([this,this.RF],this.KG,0);}if(((
E===1)&&(this.Ak_===1))&&!!this.KG){if(this.KG.OK)A.z9([this,this.RF],this.KG,0);
this.KG=null;}},Ng:function(E){var B;if(E<1)E=1;if((E===this.Ak9)&&(E===this.Ak_
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Ak9=E;this.Ak_=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((E!==1)&&!this.KG){this.KG=A.aaL(A.aci.AsR);if(this.KG.OK)A.zV([this,this.
RF],this.KG,0);}if((E===1)&&!!this.KG){if(this.KG.OK)A.z9([this,this.RF],this.KG
,0);this.KG=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fk:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(
aArg){A.Core.Akf._Init.call(this,aArg);this.__proto__=C.C5;},_Mark:function(D){var
B;A.Core.Akf._Mark.call(this,D);if((B=this.KG)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANj:0xFFFFFFFF,ANk:0xFFFFFFFF,ANo:0xFFFFFFFF
,ANn:0xFFFFFFFF,AQ:0xFFFFFFFF,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;var DD=
this.ANn;var DN=this.ANo;var DI=this.ANj;var DM=this.ANk;var B3=this.AQ;aBlend=aBlend&&((
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
))>>8)&0xFF)<<24);}CZ.Ava(aClip,A.abh(this.M,aOffset),DD,DN,DM,DI,aBlend);},Awo:
function(E){var B;if(E===this.ANj)return;this.ANj=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Awp:function(E){var B;if(E===this.ANk)return;this.ANk=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Awr:function(E){var B;
if(E===this.ANo)return;this.ANo=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.M);},Awq:function(E){var B;if(E===this.ANn)return;this.ANn=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Fk:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kk:function(CZ
,aClip,aOffset,Ci,aBlend){var B;var DD;var DN;var DI;var DM;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;DD=DN=DI=DM=B3;if(Ci<256){DD=(DD&0x00FFFFFF
)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ci*((DN>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF))>>8)&0xFF)<<24);DM=(
DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF))>>8)&0xFF)<<24);}CZ.BhR(aClip,A.abh(this.M
,aOffset),this.Width,DD,DN,DM,DI,aBlend);},Ng:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(
0x0,0x1);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NO={timer:null,Al:null,ML:-1,AQ:0xFFFFFFFF,AuY:
0x1F,TO:0,Dw:0,Anh:A.wf,Vw:false,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;var
Nr=this.TO;if(this.ML>=0)Nr=this.ML;if(!this.Al||(Nr>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DN;var DM;var DI;var B3=this.AQ;var Kd=(((Ci+1)*255)>>
8)+1;var Of=this.AuY;var Az=A.abh(this.M,aOffset);var AK0=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anh);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DN=DI=DM=B3;if(Kd<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((
DN>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((((DM>>24)&0xFF)*Kd)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(((this.
Anh[0]>0)&&(AK0[0]>0))&&!((Of&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK0[
0];if(((Of&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Of=Of|0x4;}else if(((Of&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Of=Of|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Of=Of|0x5;}}if(((this.Anh[1]>0)&&(AK0[1]>0))&&!((Of&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK0[1];if(((Of&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Of=Of|0x8;}else if(((Of&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Of=Of|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Of=Of|
0xA;}}CZ.BhQ(aClip,this.Al,Nr,Az,Of,DD,DN,DM,DI,aBlend);},RF:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Mc:function(G){var B;var Nr=
this.ML;var Tl=0;if(!!this.Al)Tl=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.ML<0))&&(Tl>0))this.Dw=this.timer.Bs-(this.TO*this.Al.FrameDelay);if(
!!this.timer&&(Tl>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tl){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tl);}}if(((Nr!==
this.ML)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.ML=Nr;if(!Tl&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bi(this.M);},Zr:function(E){var B;if(this.Vw===E)return;this.Vw=E;this.ML=-1;if(
!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aee);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.
Mc],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},A9D:function(
E){var B;if(E===this.AuY)return;this.AuY=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TO)&&(this.ML===-1)
)return;this.TO=E;if(!this.timer)this.ML=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OK)A.z9([this,this.RF],this.Al,0);this.Al=E;this.ML=-1;if(!!E&&E.OK)A.zV([this,this.
RF],E,0);if(this.Vw){this.Zr(false);this.Zr(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},A9T:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anh))return;this.Anh=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.AuY&0xF)===
0xF))this.Ab.Bi(this.M);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.
__proto__=C.NO;},_Mark:function(D){var B;A.Core.Es._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dw:0,ML:0,AQ:0xFFFFFFFF
,Kf:0x12,TO:0,G3:255,Vw:false,Aa3:false,Kk:function(CZ,aClip,aOffset,Ci,aBlend){
var B;var Nr=this.TO;if(this.ML>=0)Nr=this.ML;if(!this.Al||(Nr>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C3=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DN;var DM;var DI;var B3=this.AQ;var Kd=(((
Ci+1)*this.G3)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DN=DI=DM=B3;if(Kd<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((
DN>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((((DM>>24)&0xFF)*Kd)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C3))CZ.A5t(aClip,this.Al,Nr,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DN,DM,DI,aBlend);else CZ.Bn8(aClip,this.Al,Nr
,A.abh(AE,aOffset),[].concat(BF,C3),DD,DN,DM,DI,aBlend,true);},RF:function(G){var
B;if(((this.Aa3&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Mc:function(
G){var B;var Nr=this.ML;var Tl=0;if(!!this.Al)Tl=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.ML<0))&&(Tl>0))this.Dw=this.timer.Bs-(this.TO*this.Al.FrameDelay
);if(!!this.timer&&(Tl>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tl){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tl);}}if(((Nr!==
this.ML)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);this.ML=Nr;if(!Tl&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},I7:function(E
){if(E===this.Aa3)return;this.Aa3=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Zr:function(
E){var B;if(this.Vw===E)return;this.Vw=E;this.ML=-1;if(!E&&!!this.timer){A.z9([this
,this.Mc],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aee);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.Mc],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A6:function(E){var B;if(E===this.Kf)return;
this.Kf=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TO)&&(this.ML===-1))return;this.TO=E;if(!this.timer
)this.ML=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OK)A.z9([this,this.RF],this.
Al,0);this.Al=E;this.ML=-1;if(!!E&&E.OK)A.zV([this,this.RF],E,0);if(this.Vw){this.
Zr(false);this.Zr(true);}if(((this.Aa3&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},
Dr:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G3)return;this.G3=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aj:function(E){if(E)this.Cy(
0x400,0x0);else this.Cy(0x0,0x400);},Fk:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E4;var Bu=this.Kf;var C3=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C3[0]||!C3[1])return E4;var Df=[0,0
,width,height];var B4=Df;if(((Bu&0x40)===0x40)){var A3N=((((Df[2]-Df[0])<<16)+((
C3[0]/2)|0))/C3[0])|0;var AAZ=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var AiZ=
A3N;if(AAZ>AiZ)AiZ=AAZ;B4=A.abL(B4,((C3[0]*AiZ)+32768)>>16);B4=A.abI(B4,((C3[1]*
AiZ)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3N=((((Df[2]-Df[0])<<16)+((C3[
0]/2)|0))/C3[0])|0;var AAZ=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var AiZ=
A3N;if(AAZ<AiZ)AiZ=AAZ;B4=A.abL(B4,((C3[0]*AiZ)+32768)>>16);B4=A.abI(B4,((C3[1]*
AiZ)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C3);if((B4[2]-B4[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},Bkc:function(){return this.
AQ;},ASp:function(){return this.TO;},_Init:function(aArg){A.Core.Es._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Es._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,El:null,CJ:
A.jV,String:A.jV,Od:null,Amf:A.wf,I_:0,N4:0,AcK:0,Br:A.wf,Kf:0x12,AQ:0xFFFFFFFF,
Afu:false,Aa3:false,Ym:false,AN9:false,HX:false,Lb:function(){if(!!this.Od){this.
A1V(this.Od);this.Od=null;}},Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;if((this.
CJ===A.jV)||!this.B6)return;var Bu=this.Kf;var font=this.B6;var Df=A.abh(this.M,
aOffset);var DD;var DN;var DM;var DI;var col=this.AQ;var Kd=(((Ci+1)*255)>>8)+1;
var Kb=this.CJ.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kb<1)return;DD=DN=DI=DM=col;if(Kd<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*
Kd)>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((((DM>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj4())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kb===1)&&!((Bu&0x40)===
0x40)){CZ.A5Z(aClip,font,this.CJ,2,(this.CJ.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DN,
DM,DI,true);return;}var leading=font.Leading;if(this.N4>0)leading=(this.N4-font.
Ascent)-font.Descent;var AaN=(font.Ascent+font.Descent)+leading;var Bx7=aClip[1]-
AE[1];var Bx8=aClip[3]-AE[1];var A09=AE[2]-AE[0];var Dg=0;var O=1;var B3=this.CJ.
charCodeAt(1)||0;while(((Dg+AaN)<Bx7)&&(B3>0)){O=O+B3;Dg=Dg+AaN;B3=this.CJ.charCodeAt(
O)||0;}while((Dg<Bx8)&&(B3>0)){var L_=A.abe(Bq,[0,Dg]);var Al_=0;var O_=false;if(((((
Bu&0x40)===0x40)&&((this.CJ.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CJ.charCodeAt(
O+1)||0)!==0x0A))&&((this.CJ.charCodeAt(O+B3)||0)!==0x00))O_=true;if(O_&&!!(Bu&0x6
)){var Ap0=O+B3;var Ay8=this.CJ.indexOf(String.fromCharCode(0x20),O+1);var Ay9=this.
CJ.indexOf(String.fromCharCode(0xA0),O+1);if(((Ay8<0)||(Ay8>=Ap0))&&((Ay9<0)||(Ay9>=
Ap0)))O_=false;}if(O_)Al_=A09;else if(((Bu&0x4)===0x4))L_=[(L_[0]-A09)+font.Yr(this.
CJ,O+1,B3-1),L_[1]];else if(((Bu&0x2)===0x2))L_=[(L_[0]-((A09/2)|0))+((font.Yr(this.
CJ,O+1,B3-1)/2)|0),L_[1]];CZ.A5Z(aClip,font,this.CJ,O+1,B3-1,Df,L_,Al_,0,DD,DN,DM
,DI,true);O=O+B3;Dg=Dg+AaN;B3=this.CJ.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfB;BfB=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfB&&
!this.AcK)&&this.Afu)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CJ=A.jV;this.
HX=false;A.pe([this,this.Pa],this);}if(((this.Ym&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CJ=
A.jV;this.HX=false;A.pe([this,this.Pa],this);}A.Core.Es.H.call(this,E);A.pe([this
,this.AiS],this);},BxZ:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BxY:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1V:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Byj:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiS:function(G){A.pe(this.El
,this);},Pa:function(G){A.pe([this,this.XI],this);},XI:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xy=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afu){
if(this.AcK>0)Xy=this.AcK;else if(!this.Aa3)Xy=width-(this.I_*2);else Xy=width;if(
Xy<0)Xy=1;}if(!!this.Od){this.A1V(this.Od);this.Od=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN9)this.Od=this.Byj(length
);this.CJ=font.Bnw(this.String,0,Xy,length,this.Od);if(!!this.Od&&!this.Bi8()){this.
A1V(this.Od);this.Od=null;}}else this.CJ=A.jV;this.Amf=BF;if(((this.Ym&&(this.CJ
!==A.jV))&&!this.Aa3)&&!!font){var Bu=this.Kf;var leading=font.Leading;var Iz=this.
CJ;var AKU=this.Aj4();if(((Bu&0x80)===0x80)){if(AKU)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AAU=(font.
Ascent+font.Descent)+leading;var Kb=Iz.charCodeAt(0)||0;var AlR=((height+leading
)/AAU)|0;var A1l=false;var AJD=false;if(AlR<=0)AlR=1;if(Kb>AlR){var Bf=0;var AAV=
0;var AKS=Kb-1;var K2;var Ns=Iz.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AAV=Kb-AlR;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AAV=((Kb-AlR)/2)|0;AKS=(AAV+AlR)-1;}else
AKS=AlR-1;A1l=AAV>0;AJD=AKS<(Kb-1);for(K2=1;Bf<AAV;Bf=Bf+1)K2=K2+(Iz.charCodeAt(
K2)||0);if(AJD)for(Ns=K2;Bf<AKS;Bf=Bf+1)Ns=Ns+(Iz.charCodeAt(Ns)||0);if(A1l){var
IU=Iz.charCodeAt(K2)||0;tmp=(Hm+A.abW(Iz,K2,IU))+Hm;tmp=A.abQ(tmp,0,(IU+2)&0xFFFF
);K2=K2+IU;if((tmp.charCodeAt(IU)||0)===0x0A){tmp=A.abQ(tmp,IU,0xFEFF);tmp=A.abQ(
tmp,IU+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Iz,K2,Ns-K2);if(AJD&&(
Ns>=K2)){var IU=Iz.charCodeAt(Ns)||0;var Qv=(Hm+A.abW(Iz,Ns,IU))+Hm;Qv=A.abQ(Qv,
0,(IU+2)&0xFFFF);Qv=A.abQ(Qv,1,0xFEFF);if((Qv.charCodeAt(IU)||0)===0x0A){Qv=A.abQ(
Qv,IU,0xFEFF);Qv=A.abQ(Qv,IU+1,0x0A);}if((Qv.charCodeAt(2)||0)===0x0A){Qv=A.abQ(
Qv,2,0xFEFF);Qv=A.abQ(Qv,1,0x0A);}else Qv=A.abQ(Qv,1,0xFEFF);tmp=tmp+Qv;}Iz=String.
fromCharCode(AlR&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKr=width-(this.I_*2);if(this.
Afu&&(this.AcK>0))AKr=this.AcK;Kb=Iz.charCodeAt(0)||0;for(;Bf<Kb;Bf=Bf+1){var Al8=
A1l&&!Bf;var Al9=AJD&&(Bf===(Kb-1));var Xo=false;var Xp=false;var Auc=AKU;if((AKU&&
Al8)&&!Al9){Al8=false;Al9=true;}else if((AKU&&Al9)&&!Al8){Al9=false;Al8=true;}var
XJ=inx+1;var IU=Iz.charCodeAt(inx)||0;var K2=XJ;var Ns=(XJ+IU)-2;var A1_=-1;var A1$=-
1;if(!this.Afu&&(font.Yr(Iz,XJ,IU-1)>AKr)){var AoW=Bu;if(((AoW&0x2)===0x2)&&!!(AoW&
0x5))AoW&=~0x2;if(((AoW&0x2)===0x2))AoW&=~0x5;if(((AoW&0x4)===0x4))Xo=true;else if(((
AoW&0x2)===0x2)){Xo=true;Xp=true;}else Xp=true;}if((Iz.charCodeAt(K2)||0)===0x0A
)K2=K2+1;if((Iz.charCodeAt(Ns)||0)===0x0A)Ns=Ns-1;while(Xo&&((Iz.charCodeAt(K2)||
0)===0xFEFF))K2=K2+1;while(Xp&&((Iz.charCodeAt(Ns)||0)===0xFEFF))Ns=Ns-1;Xo=Xo&&
!Al9;Xp=Xp&&!Al8;while((((Xo||Xp)||Al8)||Al9)&&(K2<Ns)){if((Xo&&(Auc||!Xp))||Al8
){if(A1_>0)Iz=A.abQ(Iz,A1_,0xFEFF);Iz=A.abQ(Iz,K2,0x2026);A1_=K2;K2=K2+1;Auc=!Auc;
Al8=false;if(font.Yr(Iz,XJ,IU-1)<=AKr){Xo=false;Xp=false;}else Xo=Xo||!Xp;}if((Xp&&(
!Auc||!Xo))||Al9){if(A1$>0)Iz=A.abQ(Iz,A1$,0xFEFF);Iz=A.abQ(Iz,Ns,0x2026);A1$=Ns;
Ns=Ns-1;Auc=!Auc;Al9=false;if(font.Yr(Iz,XJ,IU-1)<=AKr){Xo=false;Xp=false;}else Xp=
Xp||!Xo;}}inx=inx+IU;}this.Amf=[font.A6t(Iz),((Iz.charCodeAt(0)||0)*AAU)-leading
];this.CJ=Iz;}if(this.Aa3&&(this.CJ!==A.jV)){var At0=[this.I_,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),At0),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiS],this);},BlE:function(
E){if(E===this.AN9)return;this.AN9=E;this.CJ=A.jV;this.HX=false;A.pe([this,this.
Pa],this);},Hh:function(E){if(E<0)E=0;if(this.I_===E)return;this.I_=E;this.CJ=A.
jV;this.HX=false;A.pe([this,this.Pa],this);},AwX:function(E){var B;if(E<0)E=0;if(
this.N4===E)return;this.N4=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.
M);if(this.Ym){this.CJ=A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(this.Aa3&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiS],this);}
,BlD:function(E){if(E===this.Ym)return;this.Ym=E;if(((this.Afu&&!!!this.AcK)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);},Q1:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcK&&this.Afu)||!!E)||this.Ym)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I7:function(E){if(E===this.Aa3)return;this.Aa3=E;if(E&&this.Ym){this.CJ=
A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(E&&this.HX){var At0=[this.I_,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),At0),this.Br));this.U=this.U&~
0x2000;}},Bne:function(E){if(E<0)E=0;if(E===this.AcK)return;this.AcK=E;if(this.Afu&&
this.HX){this.CJ=A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(((!!!E&&this.Afu
)||this.Ym)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KS:function(
E){if(E===this.Afu)return;this.Afu=E;if(this.HX){this.CJ=A.jV;this.HX=false;A.pe([
this,this.Pa],this);}if(((E&&!!!this.AcK)||this.Ym)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},F_:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.HX)A.pe([this
,this.AiS],this);},A6:function(E){var B;if(E===this.Kf)return;this.Kf=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);if(this.Ym){this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);}if(this.HX)A.pe([this,this.AiS],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CJ=A.jV;this.HX=false;A.pe([this,this.
Pa],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fk:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Aj4:function(
){if(!this.HX)this.XI(this);if(!this.Od)return false;var result=false;var bidi=this.
Od;result=A.v2(bidi);return result;},Bi8:function(){if(!this.HX)this.XI(this);if(
!this.Od)return false;var result=false;var bidi=this.Od;result=A.zZ(bidi);return result;
},AGK:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Ym)return BF;if(
!this.HX)this.XI(this);if(aIndex<0)aIndex=0;var Bzw=(this.CJ.charCodeAt(0)||0)-1;
var Mb=this.CJ.charCodeAt(1)||0;var inx=1;var Ai4=2;var Bf=0;var col=-1;var CD=true;
aIndex=aIndex+2;while((Bf<Bzw)&&((inx+Mb)<=aIndex)){inx=inx+Mb;Bf=Bf+1;Ai4=Ai4+1;
aIndex=aIndex+1;Mb=this.CJ.charCodeAt(inx)||0;}if(aIndex>(inx+Mb))aIndex=inx+Mb;
if(!!this.Od)aIndex=(inx+this.BxY(this.Od,(inx+1)-Ai4,(inx+Mb)-Ai4,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iu=this.CJ.charCodeAt(inx+1)||0;if(CD)col=col+
1;CD=(Iu!==0xFEFF)&&(Iu!==0x0A);}return[col,Bf];},AnO:function(AoL){if(((this.String===
A.jV)||!this.B6)||this.Ym)return 0;if(!this.HX)this.XI(this);var Bf=AoL[1];var col=
AoL[0];var inx=1;var Ai4=2;var Kb=this.CJ.charCodeAt(0)||0;var Mb=this.CJ.charCodeAt(
1)||0;if(Bf>=Kb){Bf=Kb-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mb>0)){inx=inx+Mb;Bf=Bf-1;Ai4=Ai4+1;Mb=this.CJ.charCodeAt(inx)||0;
}var Xx=inx;var AKT=(inx-Ai4)+1;var Ap0=(AKT+Mb)-1;var AAH=false;while((col>=0)&&(
Mb>1)){var Iu=this.CJ.charCodeAt(inx+1)||0;inx=inx+1;Mb=Mb-1;AAH=(Iu===0xFEFF)||(
Iu===0x0A);if(!AAH){col=col-1;Xx=inx;}}if((!AAH&&(col>=0))&&((this.CJ.charCodeAt(
inx+1)||0)===0x00))AAH=true;if(AAH)Xx=Xx+1;Xx=Xx-Ai4;if(!!this.Od)Xx=AKT+this.BxZ(
this.Od,AKT,Ap0,Xx-AKT);return Xx;},ATQ:function(KZ){var B;if((this.String===A.jV
)||!this.B6)return BF;if(!this.HX)this.XI(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B6;var Bu=this.Kf;var Kb=this.CJ.charCodeAt(
0)||0;var leading=font.Leading;if(KZ[1]<AE[1])KZ=[KZ[0],AE[1]];if(KZ[1]>=AE[3])KZ=[
KZ[0],AE[3]-1];if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AaN=(
font.Ascent+font.Descent)+leading;var Bf=((KZ[1]-AE[1])/AaN)|0;var NA=this.ACV(Bf
);var Mb=NA.length;var O_=false;if(((Bu&0x80)===0x80)){if(this.Aj4())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kb-1)))O_=true;if((O_&&(
NA.indexOf(String.fromCharCode(0x20),0)<0))&&(NA.indexOf(String.fromCharCode(0xA0
),0)<0))O_=false;if(O_){var inx=1;var ApZ=Bf;while(ApZ>0){inx=inx+(this.CJ.charCodeAt(
inx)||0);ApZ=ApZ-1;}if(((this.CJ.charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((
inx+(this.CJ.charCodeAt(inx)||0))-1)||0)===0x0A))O_=false;}var Al_=0;var En=0;if(
O_)Al_=AE[2]-AE[0];else if(((Bu&0x4)===0x4))En=(AE[2]-AE[0])-font.Yr(NA,0,Mb);else
if(((Bu&0x2)===0x2))En=(((AE[2]-AE[0])/2)|0)-((font.Yr(NA,0,Mb)/2)|0);var col=font.
BiK(NA,0,Mb,(KZ[0]-AE[0])-En,Al_);if(col<0)col=0;return[col,Bf];},Afb:function(AoL
){var B;if((this.String===A.jV)||!this.B6)return BF;if(!this.HX)this.XI(this);var
Kb=this.CJ.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kf;var Bf=AoL[1];var col=
AoL[0];if(Bf>=Kb){Bf=Kb-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}var NA=this.ACV(
Bf);var Mb=NA.length;var AE=this.Db();var O_=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj4())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kb-1)))O_=true;if((O_&&(NA.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NA.indexOf(String.fromCharCode(0xA0),0)<0))O_=false;if(O_){var inx=1;var
ApZ=Bf;while(ApZ>0){inx=inx+(this.CJ.charCodeAt(inx)||0);ApZ=ApZ-1;}if(((this.CJ.
charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((inx+(this.CJ.charCodeAt(inx
)||0))-1)||0)===0x0A))O_=false;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Al_=0;var En=AE[0];if(O_)Al_=AE[2]-AE[0];else if(((Bu&0x4)===0x4))En=AE[2]-font.
Yr(NA,0,Mb);else if(((Bu&0x2)===0x2))En=(En+(((AE[2]-AE[0])/2)|0))-((font.Yr(NA,
0,Mb)/2)|0);var pos=font.BiG(NA,0,Mb,col,Al_);if(pos<0)pos=0;return[En+pos,Dg];}
,AOQ:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E4;if(!this.HX)
this.XI(this);var Kb=this.CJ.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kb)&&(Ad>0)))return E4;var Bu=this.Kf;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.I_*2);if(((
Bu&0x80)===0x80)){if(this.Aj4())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N4>0)leading=(this.N4-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var En=0;while(Ad>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var
AAW=(this.CJ.charCodeAt(inx)||0)-1;var BfC=font.Yr(this.CJ,inx+1,AAW);var A3J=font.
A6D(this.CJ,inx+1,AAW);var Ap1=BfC;var AaN=font.Ascent+font.Descent;var AA_=(Kb*((
font.Ascent+font.Descent)+leading))-leading;if(!Kb)AA_=AaN;if((((this.CJ.charCodeAt((
inx+AAW)+1)||0)===0x00)||((this.CJ.charCodeAt(inx+AAW)||0)===0x0A))||((this.CJ.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap0=(inx+1)+AAW;var Ay8=
this.CJ.indexOf(String.fromCharCode(0x20),inx+1);var Ay9=this.CJ.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ay8>=0)&&(Ay8<Ap0))||((Ay9>=0)&&(Ay9<Ap0)))Ap1=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(AA_>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap1>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))En=width-Ap1;else if(((Bu&0x2)===0x2))En=((width/2)|0)-((
Ap1/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-AA_);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((AA_/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((AA_/2)|0);En=(En+A3J[0])+this.I_;
Ap1=(Ap1+(A3J[2]-A3J[0]))-BfC;var B4;{var Be4=[Bd[0]+En,Bd[1]+Dg];B4=[].concat(Be4
,A.abf(Be4,[Ap1,AaN]));}return A.abh(B4,this.Br);},ACV:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XI(this);var Kb=this.CJ.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kb))return A.jV;while(Ad>0){inx=inx+(
this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var XJ=inx;var AtG=inx+(this.CJ.charCodeAt(
inx)||0);var Iu=0x00;do{XJ=XJ+1;Iu=this.CJ.charCodeAt(XJ)||0;}while(((Iu===0xFEFF
)||(Iu===0x0A))&&(XJ<=AtG));do{AtG=AtG-1;Iu=this.CJ.charCodeAt(AtG)||0;}while(((
Iu===0xFEFF)||(Iu===0x0A))&&(XJ<=AtG));var NA=A.abW(this.CJ,XJ,(AtG-XJ)+1);var Apr;
for(Apr=NA.indexOf(String.fromCharCode(0xFEFF),0);Apr>=0;Apr=NA.indexOf(String.fromCharCode(
0xFEFF),Apr+1)){var Xx=Apr+1;while((NA.charCodeAt(Xx)||0)===0xFEFF)Xx=Xx+1;NA=A.
ab1(NA,Apr,Xx-Apr);}return NA;},Db:function(){var B;if((this.String===A.jV)||!this.
B6)return E4;if(!this.HX)this.XI(this);if(this.CJ===A.jV)return E4;var leading=this.
B6.Leading;var AAU=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N4>0
){leading=(this.N4-this.B6.Ascent)-this.B6.Descent;AAU=this.N4;}if(A.aaX(this.Amf
,BF))this.Amf=[this.B6.A6t(this.CJ),this.Amf[1]];this.Amf=[this.Amf[0],((this.CJ.
charCodeAt(0)||0)*AAU)-leading];var Bu=this.Kf;var Bd=this.M;var At0=this.I_;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[At0,0,width-At0,height];var B4=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Amf));if(((Bu&0x80)===0x80)){if(
this.Aj4())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xy=
this.AcK;if(Xy<=0)Xy=width-(this.I_*2);if(Xy<0)Xy=0;if(Xy>(B4[2]-B4[0]))B4=A.abL(
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
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuI={attrString:null,AttrSet:
null,String:A.jV,Kf:0x12,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Ci=Ci+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.BhO(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ci*255)>>8,(Ci*255)>>8,(Ci*255)>>8,(Ci
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pa],this);}A.Core.Es.H.call(this,E);A.pe([this,this.AiS],this
);},AiS:function(G){},XI:function(G){var B;var ALz;ALz=(B=this.M)[2]-B[0];if(ALz<
0)ALz=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4W
,0);if(!!this.attrString)this.attrString.Bnv(this.AttrSet,this.String,ALz,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([this,this.AiS],this);
},Pa:function(G){A.pe([this,this.XI],this);},Bfv:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kf)return;this.Kf=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);A.pe([
this,this.AiS],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pa],this);},A9h:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bfv],this.AttrSet,0);A.z9([this,this.Pa
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bfv],this.AttrSet,0);A.zV([this,this.Pa],this.AttrSet,1);}A.pe([this,this.
Pa],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E4;
if(!this.attrString)this.XI(this);if(!this.attrString)return E4;var Bu=this.Kf;var
C3=this.attrString.BiL();var Df=A.aaT(this.M,BF);var B4=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C3));if(!C3[0]||!C3[1])return E4;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj4())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Df[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Df[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);
this.__proto__=C.AuI;this.U=0x3;},_Mark:function(D){var B;A.Core.Es._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.An$={AiD:
null,FC:null,Aip:0,Aio:0,U4:A.wf,Cj:A.abi(4,3,0,null),AGG:A.wf,Ti:0,ApE:0,JQ:function(
E){if(A.aaX(E,this.Ku))return;A.Core.ZB.JQ.call(this,E);this.Cj.Set(3,0,E[0]);this.
Cj.Set(3,1,E[1]);this.Cj.Set(3,2,1);this.Ti=0x45;this.FC=null;A.pe([this,this.Aja
],this);},Kr:function(E){if(A.aaX(E,this.Mz))return;A.Core.ZB.Kr.call(this,E);this.
Cj.Set(2,0,E[0]);this.Cj.Set(2,1,E[1]);this.Cj.Set(2,2,1);this.Ti=0x45;this.FC=null;
A.pe([this,this.Aja],this);},DC:function(E){if(A.aaX(E,this.EC))return;A.Core.ZB.
DC.call(this,E);this.Cj.Set(1,0,E[0]);this.Cj.Set(1,1,E[1]);this.Cj.Set(1,2,1);this.
Ti=0x45;this.FC=null;A.pe([this,this.Aja],this);},DL:function(E){if(A.aaX(E,this.
Er))return;A.Core.ZB.DL.call(this,E);this.Cj.Set(0,0,E[0]);this.Cj.Set(0,1,E[1]);
this.Cj.Set(0,2,1);this.Ti=0x45;this.FC=null;A.pe([this,this.Aja],this);},A1d:function(
){return;},Aja:function(G){var B;this.AiD=null;if(this.Ti===0x00)return;if(this.
Ti===0x45){var K3=A._NewObject(A.Graphics.AxS,0);K3=K3.ANL(this.Cj.Get(0,0),this.
Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),this.Cj.Get(2,1),
this.Cj.Get(3,0),this.Cj.Get(3,1));if(!!K3){K3.ABU(0,0);this.Cj.Set(0,2,K3.UN*240
);K3.ABU(1,0);this.Cj.Set(1,2,K3.UN*240);K3.ABU(1,1);this.Cj.Set(2,2,K3.UN*240);
K3.ABU(0,1);this.Cj.Set(3,2,K3.UN*240);}this.A1d();}if((((this.Ti===0x4D)&&!!this.
FC)&&!!this.U4[0])&&!!this.U4[1]){var Ai7=[].concat(BF,this.U4);var Ai6=this.AGG;
var Af1=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D8=Ai7[1]-Ai6[1];var Ru=Ai7[3]-Ai6[
1];this.FC.Ae8(Af1,D8);this.Cj.Set(0,0,this.FC.PY+this.Aio);this.Cj.Set(0,1,this.
FC.PZ+this.Aip);this.Cj.Set(0,2,this.FC.UN);this.FC.Ae8(Az,D8);this.Cj.Set(1,0,this.
FC.PY+this.Aio);this.Cj.Set(1,1,this.FC.PZ+this.Aip);this.Cj.Set(1,2,this.FC.UN);
this.FC.Ae8(Az,Ru);this.Cj.Set(2,0,this.FC.PY+this.Aio);this.Cj.Set(2,1,this.FC.
PZ+this.Aip);this.Cj.Set(2,2,this.FC.UN);this.FC.Ae8(Af1,Ru);this.Cj.Set(3,0,this.
FC.PY+this.Aio);this.Cj.Set(3,1,this.FC.PZ+this.Aip);this.Cj.Set(3,2,this.FC.UN);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Er=[(this.
Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.Get(1,0)+0.5)|0,(
this.Cj.Get(1,1)+0.5)|0];this.Mz=[(this.Cj.Get(2,0)+0.5)|0,(this.Cj.Get(2,1)+0.5
)|0];this.Ku=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];this.A1d();}this.
ApE=this.Ti;this.Ti=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));},Bm3:function(E){if(A.aaX(E,this.AGG))return;this.AGG=E;if((this.ApE!==0x45)&&(
this.Ti===0x00)){this.Ti=this.ApE;A.pe([this,this.Aja],this);}},Arm:function(Fb){
var B;if(!!!this.AiD){this.AiD=A._NewObject(A.Graphics.A62,0);this.AiD.ANL(this.
Cj.Get(0,0),this.Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),
this.Cj.Get(2,1),this.Cj.Get(3,0),this.Cj.Get(3,1));}if(!this.AiD.Ae8(Fb))return BF;
var Ap6=[].concat(BF,this.U4);var En=this.AiD.PY*(Ap6[2]-Ap6[0]);var Dg=this.AiD.
PZ*(Ap6[3]-Ap6[1]);return A.abf([En|0,Dg|0],Ap6.slice(0,2));},A$B:function(Bby,L5
){var B;this.AiD=null;if(!L5)throw new Error(IQ);if(!this.FC)this.FC=A._NewObject(
A.Graphics.AxS,0);this.FC.BgT(L5);this.Aio=Bby[0];this.Aip=Bby[1];this.ApE=0x4D;
this.Ti=0x00;if(!this.U4[0]||!this.U4[1])return;var Ai7=[].concat(BF,this.U4);var
Ai6=this.AGG;var Af1=Ai7[0]-Ai6[0];var Az=Ai7[2]-Ai6[0];var D8=Ai7[1]-Ai6[1];var
Ru=Ai7[3]-Ai6[1];this.FC.Ae8(Af1,D8);this.Cj.Set(0,0,this.FC.PY+this.Aio);this.Cj.
Set(0,1,this.FC.PZ+this.Aip);this.Cj.Set(0,2,this.FC.UN);this.FC.Ae8(Az,D8);this.
Cj.Set(1,0,this.FC.PY+this.Aio);this.Cj.Set(1,1,this.FC.PZ+this.Aip);this.Cj.Set(
1,2,this.FC.UN);this.FC.Ae8(Az,Ru);this.Cj.Set(2,0,this.FC.PY+this.Aio);this.Cj.
Set(2,1,this.FC.PZ+this.Aip);this.Cj.Set(2,2,this.FC.UN);this.FC.Ae8(Af1,Ru);this.
Cj.Set(3,0,this.FC.PY+this.Aio);this.Cj.Set(3,1,this.FC.PZ+this.Aip);this.Cj.Set(
3,2,this.FC.UN);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Er=[(this.Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.EC=[(this.Cj.
Get(1,0)+0.5)|0,(this.Cj.Get(1,1)+0.5)|0];this.Mz=[(this.Cj.Get(2,0)+0.5)|0,(this.
Cj.Get(2,1)+0.5)|0];this.Ku=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.A1d();},_Init:
function(aArg){A.Core.ZB._Init.call(this,aArg);(this.Cj=[]).__proto__=C.An$.Cj;this.
__proto__=C.An$;this.U=0x3;},_Mark:function(D){var B;A.Core.ZB._Mark.call(this,D
);if((B=this.AiD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FC)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVw={Fp:null,bitmap:null
,P:null,G3:255,Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nu=aOffset[0];var Nv=aOffset[1];var AE=[].concat(BF,this.
U4);aBlend=aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;var BdY;var BdZ;var Bd0;var Bd1;
var BzG=this.G3;BdY=BdZ=Bd0=Bd1=BzG;var Alt=255|(255<<8)|(255<<16)|((((Ci*BdY)>>
8)&0xFF)<<24);var Alu=255|(255<<8)|(255<<16)|((((Ci*BdZ)>>8)&0xFF)<<24);var Bx0=
255|(255<<8)|(255<<16)|((((Ci*Bd0)>>8)&0xFF)<<24);var Bx1=255|(255<<8)|(255<<16)|((((
Ci*Bd1)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E4,aOffset));CZ.AhM(aClip,this.bitmap
,0,this.Cj.Get(0,0)+Nu,this.Cj.Get(0,1)+Nv,this.Cj.Get(0,2),this.Cj.Get(1,0)+Nu,
this.Cj.Get(1,1)+Nv,this.Cj.Get(1,2),this.Cj.Get(2,0)+Nu,this.Cj.Get(2,1)+Nv,this.
Cj.Get(2,2),this.Cj.Get(3,0)+Nu,this.Cj.Get(3,1)+Nv,this.Cj.Get(3,2),AE,Alt,Alu,
Bx0,Bx1,aBlend,true);},GY:function(CN){if(!this.P||!this.Fp)return null;var BP=(
A.Core.Aea.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqG.isPrototypeOf(CN)?CN:null
);if(!BP&&!D4)return null;var Fr=BF;var B0=this.Fp.Ab;while(!!B0&&(B0!==this.P)){
Fr=A.abe(Fr,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fp;if(!!BP&&!BP.Down)this.Fp=null;
if(!!BP){BP.H0=A.abf(this.Arm(BP.H0),Fr);BP.NQ=A.abf(this.Arm(BP.NQ),Fr);return X.
GY(BP);}if(!!D4){var BzK=A.abf(this.Arm(A.abe(D4.H0,D4.DG)),Fr);D4.H0=A.abf(this.
Arm(D4.H0),Fr);D4.NQ=A.abf(this.Arm(D4.NQ),Fr);D4.DG=A.abe(D4.H0,BzK);return X.GY(
D4);}return C.An$.GY.call(this,CN);},Yh:function(Da,BG,Ob,Aak,Ac1,Ac0){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Arm(pos
);var Ap6=[].concat(BF,this.U4);if(!A.wa(Ap6,pos))return null;var JA=this.P.Yh(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BG,Ob,Aak,null
,Ac0);if(!!JA)this.Fp=JA.Ch;else this.Fp=null;if(!!this.Fp)return A._NewObject(A.
Core.AuQ,0).Initialize(this,BF);return null;},RF:function(G){var B;var Bd2=this.
U4;if(!!this.P)this.bitmap=this.P.Fz;else this.bitmap=null;if(!!this.bitmap)this.
U4=this.bitmap.FrameSize;else this.U4=BF;if(((A.aaX(Bd2,this.U4)||((this.ApE===0x45
)&&(this.Ti===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if(((this.ApE!==0x45)&&(this.Ti===0x00))&&!A.aaX(Bd2,this.U4)){this.Ti=this.ApE;
A.pe([this,this.Aja],this);}},Dr:function(E){var B;if(E===this.G3)return;this.G3=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},Bl8:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Ip);if(!!this.P){A.
z9([this,this.RF],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RF
],E,0);this.bitmap=E.Fz;}this.RF(this);},Awe:function(){return this.G3;},_Init:function(
aArg){C.An$._Init.call(this,aArg);this.__proto__=C.AVw;},_Mark:function(D){var B;
C.An$._Mark.call(this,D);if((B=this.Fp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Ael={Hv:null,AQ:0xFFFFFFFF,DG:A.wf
,AOx:false,Lb:function(){this.A1x();},Kk:function(CZ,aClip,aOffset,Ci,aBlend){if(
!this.Hv)return;var DD;var DN;var DI;var DM;var B3=this.AQ;Ci=Ci+1;DD=DN=DI=DM=B3;
if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF
)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Ael(aClip,this.Hv,A.abh(this.M,aOffset),this.AOx,this.DG,DD,DN,DM,DI,true,true,0
);},A1x:function(){return;},Ajb:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.M);},AnC:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hv)this.Ab.Bi(this.M);},Bl3:function(E){var B;if(E===this.AOx)return;this.
AOx=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.M);},Zv:function(
E){var B;if(E===this.Hv)return;if(!!this.Hv)A.z9([this,this.Ajb],this.Hv,0);this.
Hv=E;if(!!this.Hv)A.zV([this,this.Ajb],this.Hv,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},_Init:function(aArg){A.Core.Es._Init.call(this,aArg);this.__proto__=C.Ael;},
_Done:function(){this.Lb();this.__proto__=A.Core.Es;A.Core.Es._Done.call(this);}
,_Mark:function(D){var B;A.Core.Es._Mark.call(this,D);if((B=this.Hv)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hk={Hv:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Lb:function(){this.A1x();},Kk:function(CZ,aClip,aOffset,Ci,aBlend
){if(!this.Hv)return;var DD;var DN;var DI;var DM;var B3=this.AQ;Ci=Ci+1;DD=DN=DI=
DM=B3;if(Ci<256){DD=(DD&0x00FFFFFF)|((((Ci*((DD>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&
0x00FFFFFF)|((((Ci*((DN>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ci*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((Ci*((DM>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hk(aClip,this.Hv,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DN,DM,DI,true,true);},A1x:function(){return;},Ajb:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.
M);},AnC:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bi(this.M);},Ng:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hv)this.Ab.Bi(this.M);},Zv:function(E){var B;if(E===this.Hv)return;if(!!this.
Hv)A.z9([this,this.Ajb],this.Hv,0);this.Hv=E;if(!!this.Hv)A.zV([this,this.Ajb],this.
Hv,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.M);},Z:function(E){if(E
)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(aArg){A.Core.Es._Init.call(
this,aArg);this.__proto__=C.Hk;},_Done:function(){this.Lb();this.__proto__=A.Core.
Es;A.Core.Es._Done.call(this);},_Mark:function(D){var B;A.Core.Es._Mark.call(this
,D);if((B=this.Hv)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BDU={A4D:0x1,A4C:0x2,A4E:0x4,A4H:0x8,A4G:0x10,A4F:0x20,BE_:0x40,BE$:0x80,BFj:
0x100};C.BFn={A4D:0x1,A4C:0x2,A4E:0x4,A4H:0x8,A4G:0x10,A4F:0x20,BCn:0x40,BCm:0x80
,BCs:0x100};C.BEx={Normal:0,BE5:1,BE3:2,BE4:3};
C._Init=function(){C.C5.__proto__=A.Core.Akf;C.AK.__proto__=A.Core.Es;C.BU.__proto__=
A.Core.Es;C.NO.__proto__=A.Core.Es;C.Ap.__proto__=A.Core.Es;C.Text.__proto__=A.Core.
Es;C.AuI.__proto__=A.Core.Es;C.An$.__proto__=A.Core.ZB;C.AVw.__proto__=C.An$;C.Ael.
__proto__=A.Core.Es;C.Hk.__proto__=A.Core.Es;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */