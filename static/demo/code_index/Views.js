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
C.C5={KF:null,Ak$:1,Ak_:1,AQ:0xFFFFFFFF,Kk:function(CZ,aClip,aOffset,Cj,aBlend){var
B;var Agl=this.Ak_;var Agm=this.Ak$;var Adv=A.abf(this.Es,aOffset);var Adw=A.abf(
this.ED,aOffset);var Alu;var Alv;var B4=this.AQ;if(A.aaX(Adv,Adw))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;Alu=Alv=B4;if(Cj<256){Alu=(Alu&0x00FFFFFF)|((((
Cj*((Alu>>24)&0xFF))>>8)&0xFF)<<24);Alv=(Alv&0x00FFFFFF)|((((Cj*((Alv>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agl===1)&&(Agm===1))CZ.AuZ(aClip,Adv,Adw,Alu,Alv,aBlend);else
CZ.BhS(aClip,Adv,Adw,Agl,Agm,Alu,Alv,aBlend);},GetExtent:function(){var Agl=this.
Ak_;var Agm=this.Ak$;var Adv=this.Es;var Adw=this.ED;if(((Agl===1)&&(Agm===1))||
A.aaX(Adv,Adw))return A.Core.Akg.GetExtent.call(this);var Aiz=Agl/2;var AiA=Agm/
2;var Apl=Adv[0];var Apm=Adv[1];var Apn=Adw[0];var Apo=Adw[1];var J6=Apn-Apl;var
J7=Apo-Apm;var IU=Math.sqrt((J6*J6)+(J7*J7));J6=J6/IU;J7=J7/IU;var Bcf=Apl+(J7*Aiz
);var Bcg=Apm-(J6*Aiz);var AJx=Apn+(J7*AiA);var AJy=Apo-(J6*AiA);var AJz=Apn-(J7
*AiA);var AJA=Apo+(J6*AiA);var AJB=Apl-(J7*Aiz);var AJC=Apm+(J6*Aiz);var left=Bcf;
var right=Bcf;var top=Bcg;var bottom=Bcg;if(AJx<left)left=AJx;if(AJz<left)left=AJz;
if(AJB<left)left=AJB;if(AJx>right)right=AJx;if(AJz>right)right=AJz;if(AJB>right)
right=AJB;if(AJy<top)top=AJy;if(AJA<top)top=AJA;if(AJC<top)top=AJC;if(AJy>bottom
)bottom=AJy;if(AJA>bottom)bottom=AJA;if(AJC>bottom)bottom=AJC;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cd));return Az;
},RG:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_o:function(E){var B;if(E<1)E=1;if(E===this.Ak$)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak$=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak_!==1))&&!this.KF){
this.KF=A.aaL(A.aci.AsT);if(this.KF.OK)A.zV([this,this.RG],this.KF,0);}if(((E===
1)&&(this.Ak_===1))&&!!this.KF){if(this.KF.OK)A.z9([this,this.RG],this.KF,0);this.
KF=null;}},A_n:function(E){var B;if(E<1)E=1;if(E===this.Ak_)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ak_=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ak$!==1))&&!this.
KF){this.KF=A.aaL(A.aci.AsT);if(this.KF.OK)A.zV([this,this.RG],this.KF,0);}if(((
E===1)&&(this.Ak$===1))&&!!this.KF){if(this.KF.OK)A.z9([this,this.RG],this.KF,0);
this.KF=null;}},Nf:function(E){var B;if(E<1)E=1;if((E===this.Ak_)&&(E===this.Ak$
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ak_=E;this.Ak$=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KF){this.KF=A.aaL(A.aci.AsT);if(this.KF.OK)A.zV([this,this.
RG],this.KF,0);}if((E===1)&&!!this.KF){if(this.KF.OK)A.z9([this,this.RG],this.KF
,0);this.KF=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fl:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(
aArg){A.Core.Akg._Init.call(this,aArg);this.__proto__=C.C5;},_Mark:function(D){var
B;A.Core.Akg._Mark.call(this,D);if((B=this.KF)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AK={ANk:0xFFFFFFFF,ANl:0xFFFFFFFF,ANp:0xFFFFFFFF
,ANo:0xFFFFFFFF,AQ:0xFFFFFFFF,Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;var DD=
this.ANo;var DO=this.ANp;var DI=this.ANk;var DN=this.ANl;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Cj=Cj+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
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
)+1))>>8)&0xFF)<<16);}if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Cj*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CZ.Avc(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awp:
function(E){var B;if(E===this.ANk)return;this.ANk=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awq:function(E){var B;if(E===this.ANl)return;this.ANl=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aws:function(E){var B;
if(E===this.ANp)return;this.ANp=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},Awr:function(E){var B;if(E===this.ANo)return;this.ANo=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fl:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=
C.AK;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Kk:function(CZ
,aClip,aOffset,Cj,aBlend){var B;var DD;var DO;var DI;var DN;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;DD=DO=DI=DN=B4;if(Cj<256){DD=(DD&0x00FFFFFF
)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Cj*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.BhQ(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Nf:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(
0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NO={timer:null,Al:null,MK:-1,AQ:0xFFFFFFFF,Au0:
0x1F,TO:0,Dw:0,Ani:A.wf,Vx:false,Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;var
Nr=this.TO;if(this.MK>=0)Nr=this.MK;if(!this.Al||(Nr>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B4=this.AQ;var Kd=(((Cj+1)*255)>>
8)+1;var Of=this.Au0;var Az=A.abh(this.M,aOffset);var AK1=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Ani);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B4;if(Kd<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kd)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(((this.
Ani[0]>0)&&(AK1[0]>0))&&!((Of&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK1[
0];if(((Of&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Of=Of|0x4;}else if(((Of&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Of=Of|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Of=Of|0x5;}}if(((this.Ani[1]>0)&&(AK1[1]>0))&&!((Of&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK1[1];if(((Of&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Of=Of|0x8;}else if(((Of&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Of=Of|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Of=Of|
0xA;}}CZ.BhP(aClip,this.Al,Nr,Az,Of,DD,DO,DN,DI,aBlend);},RG:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mc:function(G){var B;var Nr=
this.MK;var Tl=0;if(!!this.Al)Tl=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MK<0))&&(Tl>0))this.Dw=this.timer.Bs-(this.TO*this.Al.FrameDelay);if(
!!this.timer&&(Tl>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tl){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tl);}}if(((Nr!==
this.MK)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MK=Nr;if(!Tl&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zr:function(E){var B;if(this.Vx===E)return;this.Vx=E;this.MK=-1;if(
!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aee);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.
Mc],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9C:function(
E){var B;if(E===this.Au0)return;this.Au0=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TO)&&(this.MK===-1)
)return;this.TO=E;if(!this.timer)this.MK=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OK)A.z9([this,this.RG],this.Al,0);this.Al=E;this.MK=-1;if(!!E&&E.OK)A.zV([this,this.
RG],E,0);if(this.Vx){this.Zr(false);this.Zr(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},A9S:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Ani))return;this.Ani=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au0&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.
__proto__=C.NO;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dw:0,MK:0,AQ:0xFFFFFFFF
,Kf:0x12,TO:0,G3:255,Vx:false,Aa2:false,Kk:function(CZ,aClip,aOffset,Cj,aBlend){
var B;var Nr=this.TO;if(this.MK>=0)Nr=this.MK;if(!this.Al||(Nr>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C3=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B4=this.AQ;var Kd=(((
Cj+1)*this.G3)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B4;if(Kd<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kd)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C3))CZ.A5t(aClip,this.Al,Nr,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CZ.Bn8(aClip,this.Al,Nr
,A.abh(AE,aOffset),[].concat(BF,C3),DD,DO,DN,DI,aBlend,true);},RG:function(G){var
B;if(((this.Aa2&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mc:function(
G){var B;var Nr=this.MK;var Tl=0;if(!!this.Al)Tl=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MK<0))&&(Tl>0))this.Dw=this.timer.Bs-(this.TO*this.Al.FrameDelay
);if(!!this.timer&&(Tl>0)){var Au=(this.timer.Bs-this.Dw)|0;Nr=(Au/this.Al.FrameDelay
)|0;if(Au>=Tl){Nr=Nr%this.Al.NoOfFrames;this.Dw=this.timer.Bs-(Au%Tl);}}if(((Nr!==
this.MK)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MK=Nr;if(!Tl&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},I7:function(E
){if(E===this.Aa2)return;this.Aa2=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zr:function(
E){var B;if(this.Vx===E)return;this.Vx=E;this.MK=-1;if(!E&&!!this.timer){A.z9([this
,this.Mc],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aee);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.Mc],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kf)return;
this.Kf=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TO)&&(this.MK===-1))return;this.TO=E;if(!this.timer
)this.MK=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OK)A.z9([this,this.RG],this.
Al,0);this.Al=E;this.MK=-1;if(!!E&&E.OK)A.zV([this,this.RG],E,0);if(this.Vx){this.
Zr(false);this.Zr(true);}if(((this.Aa2&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
Dr:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G3)return;this.G3=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cy(
0x400,0x0);else this.Cy(0x0,0x400);},Fl:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Db:function(){var
B;if(!this.Al)return E4;var Bu=this.Kf;var C3=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C3[0]||!C3[1])return E4;var Df=[0,0
,width,height];var B5=Df;if(((Bu&0x40)===0x40)){var A3N=((((Df[2]-Df[0])<<16)+((
C3[0]/2)|0))/C3[0])|0;var AA1=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var Ai0=
A3N;if(AA1>Ai0)Ai0=AA1;B5=A.abL(B5,((C3[0]*Ai0)+32768)>>16);B5=A.abI(B5,((C3[1]*
Ai0)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A3N=((((Df[2]-Df[0])<<16)+((C3[
0]/2)|0))/C3[0])|0;var AA1=((((Df[3]-Df[1])<<16)+((C3[1]/2)|0))/C3[1])|0;var Ai0=
A3N;if(AA1<Ai0)Ai0=AA1;B5=A.abL(B5,((C3[0]*Ai0)+32768)>>16);B5=A.abI(B5,((C3[1]*
Ai0)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C3);if((B5[2]-B5[0])
!==(Df[2]-Df[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Df[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Df[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},Bkc:function(){return this.
AQ;},ASq:function(){return this.TO;},_Init:function(aArg){A.Core.Et._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,El:null,CJ:
A.jV,String:A.jV,Od:null,Amg:A.wf,I_:0,N3:0,AcL:0,Br:A.wf,Kf:0x12,AQ:0xFFFFFFFF,
Afv:false,Aa2:false,Yn:false,AN_:false,HX:false,La:function(){if(!!this.Od){this.
A1W(this.Od);this.Od=null;}},Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;if((this.
CJ===A.jV)||!this.B7)return;var Bu=this.Kf;var font=this.B7;var Df=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kd=(((Cj+1)*255)>>8)+1;
var Kb=this.CJ.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bq=[Df[0]-AE[
0],(Df[1]-AE[1])-font.Ascent];if(Kb<1)return;DD=DO=DI=DN=col;if(Kd<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kd)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kd)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kb===1)&&!((Bu&0x40)===
0x40)){CZ.A5Z(aClip,font,this.CJ,2,(this.CJ.charCodeAt(1)||0)-1,Df,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N3>0)leading=(this.N3-font.
Ascent)-font.Descent;var AaM=(font.Ascent+font.Descent)+leading;var Bx7=aClip[1]-
AE[1];var Bx8=aClip[3]-AE[1];var A0_=AE[2]-AE[0];var Dg=0;var O=1;var B4=this.CJ.
charCodeAt(1)||0;while(((Dg+AaM)<Bx7)&&(B4>0)){O=O+B4;Dg=Dg+AaM;B4=this.CJ.charCodeAt(
O)||0;}while((Dg<Bx8)&&(B4>0)){var L_=A.abe(Bq,[0,Dg]);var Al$=0;var O_=false;if(((((
Bu&0x40)===0x40)&&((this.CJ.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CJ.charCodeAt(
O+1)||0)!==0x0A))&&((this.CJ.charCodeAt(O+B4)||0)!==0x00))O_=true;if(O_&&!!(Bu&0x6
)){var Ap2=O+B4;var Ay9=this.CJ.indexOf(String.fromCharCode(0x20),O+1);var Ay_=this.
CJ.indexOf(String.fromCharCode(0xA0),O+1);if(((Ay9<0)||(Ay9>=Ap2))&&((Ay_<0)||(Ay_>=
Ap2)))O_=false;}if(O_)Al$=A0_;else if(((Bu&0x4)===0x4))L_=[(L_[0]-A0_)+font.Ys(this.
CJ,O+1,B4-1),L_[1]];else if(((Bu&0x2)===0x2))L_=[(L_[0]-((A0_/2)|0))+((font.Ys(this.
CJ,O+1,B4-1)/2)|0),L_[1]];CZ.A5Z(aClip,font,this.CJ,O+1,B4-1,Df,L_,Al$,0,DD,DO,DN
,DI,true);O=O+B4;Dg=Dg+AaM;B4=this.CJ.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfA;BfA=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfA&&
!this.AcL)&&this.Afv)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CJ=A.jV;this.
HX=false;A.pe([this,this.Pa],this);}if(((this.Yn&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CJ=
A.jV;this.HX=false;A.pe([this,this.Pa],this);}A.Core.Et.H.call(this,E);A.pe([this
,this.AiT],this);},BxZ:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BxY:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1W:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Byj:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiT:function(G){A.pe(this.El
,this);},Pa:function(G){A.pe([this,this.XJ],this);},XJ:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xz=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afv){
if(this.AcL>0)Xz=this.AcL;else if(!this.Aa2)Xz=width-(this.I_*2);else Xz=width;if(
Xz<0)Xz=1;}if(!!this.Od){this.A1W(this.Od);this.Od=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AN_)this.Od=this.Byj(length
);this.CJ=font.Bnw(this.String,0,Xz,length,this.Od);if(!!this.Od&&!this.Bi8()){this.
A1W(this.Od);this.Od=null;}}else this.CJ=A.jV;this.Amg=BF;if(((this.Yn&&(this.CJ
!==A.jV))&&!this.Aa2)&&!!font){var Bu=this.Kf;var leading=font.Leading;var Iz=this.
CJ;var AKV=this.Aj5();if(((Bu&0x80)===0x80)){if(AKV)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AAW=(font.
Ascent+font.Descent)+leading;var Kb=Iz.charCodeAt(0)||0;var AlS=((height+leading
)/AAW)|0;var A1m=false;var AJF=false;if(AlS<=0)AlS=1;if(Kb>AlS){var Bf=0;var AAX=
0;var AKT=Kb-1;var K1;var Ns=Iz.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AAX=Kb-AlS;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AAX=((Kb-AlS)/2)|0;AKT=(AAX+AlS)-1;}else
AKT=AlS-1;A1m=AAX>0;AJF=AKT<(Kb-1);for(K1=1;Bf<AAX;Bf=Bf+1)K1=K1+(Iz.charCodeAt(
K1)||0);if(AJF)for(Ns=K1;Bf<AKT;Bf=Bf+1)Ns=Ns+(Iz.charCodeAt(Ns)||0);if(A1m){var
IU=Iz.charCodeAt(K1)||0;tmp=(Hm+A.abW(Iz,K1,IU))+Hm;tmp=A.abQ(tmp,0,(IU+2)&0xFFFF
);K1=K1+IU;if((tmp.charCodeAt(IU)||0)===0x0A){tmp=A.abQ(tmp,IU,0xFEFF);tmp=A.abQ(
tmp,IU+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Iz,K1,Ns-K1);if(AJF&&(
Ns>=K1)){var IU=Iz.charCodeAt(Ns)||0;var Qw=(Hm+A.abW(Iz,Ns,IU))+Hm;Qw=A.abQ(Qw,
0,(IU+2)&0xFFFF);Qw=A.abQ(Qw,1,0xFEFF);if((Qw.charCodeAt(IU)||0)===0x0A){Qw=A.abQ(
Qw,IU,0xFEFF);Qw=A.abQ(Qw,IU+1,0x0A);}if((Qw.charCodeAt(2)||0)===0x0A){Qw=A.abQ(
Qw,2,0xFEFF);Qw=A.abQ(Qw,1,0x0A);}else Qw=A.abQ(Qw,1,0xFEFF);tmp=tmp+Qw;}Iz=String.
fromCharCode(AlS&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKs=width-(this.I_*2);if(this.
Afv&&(this.AcL>0))AKs=this.AcL;Kb=Iz.charCodeAt(0)||0;for(;Bf<Kb;Bf=Bf+1){var Al9=
A1m&&!Bf;var Al_=AJF&&(Bf===(Kb-1));var Xp=false;var Xq=false;var Aue=AKV;if((AKV&&
Al9)&&!Al_){Al9=false;Al_=true;}else if((AKV&&Al_)&&!Al9){Al_=false;Al9=true;}var
XK=inx+1;var IU=Iz.charCodeAt(inx)||0;var K1=XK;var Ns=(XK+IU)-2;var A1$=-1;var A2a=-
1;if(!this.Afv&&(font.Ys(Iz,XK,IU-1)>AKs)){var AoY=Bu;if(((AoY&0x2)===0x2)&&!!(AoY&
0x5))AoY&=~0x2;if(((AoY&0x2)===0x2))AoY&=~0x5;if(((AoY&0x4)===0x4))Xp=true;else if(((
AoY&0x2)===0x2)){Xp=true;Xq=true;}else Xq=true;}if((Iz.charCodeAt(K1)||0)===0x0A
)K1=K1+1;if((Iz.charCodeAt(Ns)||0)===0x0A)Ns=Ns-1;while(Xp&&((Iz.charCodeAt(K1)||
0)===0xFEFF))K1=K1+1;while(Xq&&((Iz.charCodeAt(Ns)||0)===0xFEFF))Ns=Ns-1;Xp=Xp&&
!Al_;Xq=Xq&&!Al9;while((((Xp||Xq)||Al9)||Al_)&&(K1<Ns)){if((Xp&&(Aue||!Xq))||Al9
){if(A1$>0)Iz=A.abQ(Iz,A1$,0xFEFF);Iz=A.abQ(Iz,K1,0x2026);A1$=K1;K1=K1+1;Aue=!Aue;
Al9=false;if(font.Ys(Iz,XK,IU-1)<=AKs){Xp=false;Xq=false;}else Xp=Xp||!Xq;}if((Xq&&(
!Aue||!Xp))||Al_){if(A2a>0)Iz=A.abQ(Iz,A2a,0xFEFF);Iz=A.abQ(Iz,Ns,0x2026);A2a=Ns;
Ns=Ns-1;Aue=!Aue;Al_=false;if(font.Ys(Iz,XK,IU-1)<=AKs){Xp=false;Xq=false;}else Xq=
Xq||!Xp;}}inx=inx+IU;}this.Amg=[font.A6t(Iz),((Iz.charCodeAt(0)||0)*AAW)-leading
];this.CJ=Iz;}if(this.Aa2&&(this.CJ!==A.jV)){var At2=[this.I_,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Db(),At2),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiT],this);},BlE:function(
E){if(E===this.AN_)return;this.AN_=E;this.CJ=A.jV;this.HX=false;A.pe([this,this.
Pa],this);},Hh:function(E){if(E<0)E=0;if(this.I_===E)return;this.I_=E;this.CJ=A.
jV;this.HX=false;A.pe([this,this.Pa],this);},AwY:function(E){var B;if(E<0)E=0;if(
this.N3===E)return;this.N3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yn){this.CJ=A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(this.Aa2&&
this.HX)this.H(A.abg(this.Db(),this.Br));if(this.HX)A.pe([this,this.AiT],this);}
,BlD:function(E){if(E===this.Yn)return;this.Yn=E;if(((this.Afv&&!!!this.AcL)||E)||
!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);},Q2:function(E){if(A.aa0(E,this.El))return;this.El=E;
if(((!!!this.AcL&&this.Afv)||!!E)||this.Yn)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I7:function(E){if(E===this.Aa2)return;this.Aa2=E;if(E&&this.Yn){this.CJ=
A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(E&&this.HX){var At2=[this.I_,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Db(),At2),this.Br));this.U=this.U&~
0x2000;}},Bne:function(E){if(E<0)E=0;if(E===this.AcL)return;this.AcL=E;if(this.Afv&&
this.HX){this.CJ=A.jV;this.HX=false;A.pe([this,this.Pa],this);}if(((!!!E&&this.Afv
)||this.Yn)||!!this.El)this.U=this.U&~0x100;else this.U=this.U|0x100;},KR:function(
E){if(E===this.Afv)return;this.Afv=E;if(this.HX){this.CJ=A.jV;this.HX=false;A.pe([
this,this.Pa],this);}if(((E&&!!!this.AcL)||this.Yn)||!!this.El)this.U=this.U&~0x100;
else this.U=this.U|0x100;},F$:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HX)A.pe([this
,this.AiT],this);},A6:function(E){var B;if(E===this.Kf)return;this.Kf=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yn){this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);}if(this.HX)A.pe([this,this.AiT],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CJ=A.jV;this.HX=false;A.pe([this,this.
Pa],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CJ=A.jV;this.HX=false;
A.pe([this,this.Pa],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fl:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Aj5:function(
){if(!this.HX)this.XJ(this);if(!this.Od)return false;var result=false;var bidi=this.
Od;result=A.v2(bidi);return result;},Bi8:function(){if(!this.HX)this.XJ(this);if(
!this.Od)return false;var result=false;var bidi=this.Od;result=A.zZ(bidi);return result;
},AGN:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Yn)return BF;if(
!this.HX)this.XJ(this);if(aIndex<0)aIndex=0;var Bzw=(this.CJ.charCodeAt(0)||0)-1;
var Mb=this.CJ.charCodeAt(1)||0;var inx=1;var Ai5=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<Bzw)&&((inx+Mb)<=aIndex)){inx=inx+Mb;Bf=Bf+1;Ai5=Ai5+1;
aIndex=aIndex+1;Mb=this.CJ.charCodeAt(inx)||0;}if(aIndex>(inx+Mb))aIndex=inx+Mb;
if(!!this.Od)aIndex=(inx+this.BxY(this.Od,(inx+1)-Ai5,(inx+Mb)-Ai5,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iu=this.CJ.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iu!==0xFEFF)&&(Iu!==0x0A);}return[col,Bf];},AnP:function(AoN){if(((this.String===
A.jV)||!this.B7)||this.Yn)return 0;if(!this.HX)this.XJ(this);var Bf=AoN[1];var col=
AoN[0];var inx=1;var Ai5=2;var Kb=this.CJ.charCodeAt(0)||0;var Mb=this.CJ.charCodeAt(
1)||0;if(Bf>=Kb){Bf=Kb-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mb>0)){inx=inx+Mb;Bf=Bf-1;Ai5=Ai5+1;Mb=this.CJ.charCodeAt(inx)||0;
}var Xy=inx;var AKU=(inx-Ai5)+1;var Ap2=(AKU+Mb)-1;var AAI=false;while((col>=0)&&(
Mb>1)){var Iu=this.CJ.charCodeAt(inx+1)||0;inx=inx+1;Mb=Mb-1;AAI=(Iu===0xFEFF)||(
Iu===0x0A);if(!AAI){col=col-1;Xy=inx;}}if((!AAI&&(col>=0))&&((this.CJ.charCodeAt(
inx+1)||0)===0x00))AAI=true;if(AAI)Xy=Xy+1;Xy=Xy-Ai5;if(!!this.Od)Xy=AKU+this.BxZ(
this.Od,AKU,Ap2,Xy-AKU);return Xy;},ATR:function(KY){var B;if((this.String===A.jV
)||!this.B7)return BF;if(!this.HX)this.XJ(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B7;var Bu=this.Kf;var Kb=this.CJ.charCodeAt(
0)||0;var leading=font.Leading;if(KY[1]<AE[1])KY=[KY[0],AE[1]];if(KY[1]>=AE[3])KY=[
KY[0],AE[3]-1];if(this.N3>0)leading=(this.N3-font.Ascent)-font.Descent;var AaM=(
font.Ascent+font.Descent)+leading;var Bf=((KY[1]-AE[1])/AaM)|0;var NA=this.ACY(Bf
);var Mb=NA.length;var O_=false;if(((Bu&0x80)===0x80)){if(this.Aj5())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kb-1)))O_=true;if((O_&&(
NA.indexOf(String.fromCharCode(0x20),0)<0))&&(NA.indexOf(String.fromCharCode(0xA0
),0)<0))O_=false;if(O_){var inx=1;var Ap1=Bf;while(Ap1>0){inx=inx+(this.CJ.charCodeAt(
inx)||0);Ap1=Ap1-1;}if(((this.CJ.charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((
inx+(this.CJ.charCodeAt(inx)||0))-1)||0)===0x0A))O_=false;}var Al$=0;var En=0;if(
O_)Al$=AE[2]-AE[0];else if(((Bu&0x4)===0x4))En=(AE[2]-AE[0])-font.Ys(NA,0,Mb);else
if(((Bu&0x2)===0x2))En=(((AE[2]-AE[0])/2)|0)-((font.Ys(NA,0,Mb)/2)|0);var col=font.
BiJ(NA,0,Mb,(KY[0]-AE[0])-En,Al$);if(col<0)col=0;return[col,Bf];},Afc:function(AoN
){var B;if((this.String===A.jV)||!this.B7)return BF;if(!this.HX)this.XJ(this);var
Kb=this.CJ.charCodeAt(0)||0;var font=this.B7;var Bu=this.Kf;var Bf=AoN[1];var col=
AoN[0];if(Bf>=Kb){Bf=Kb-1;col=this.CJ.length;}if(Bf<0){Bf=0;col=0;}var NA=this.ACY(
Bf);var Mb=NA.length;var AE=this.Db();var O_=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kb-1)))O_=true;if((O_&&(NA.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NA.indexOf(String.fromCharCode(0xA0),0)<0))O_=false;if(O_){var inx=1;var
Ap1=Bf;while(Ap1>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ap1=Ap1-1;}if(((this.CJ.
charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((inx+(this.CJ.charCodeAt(inx
)||0))-1)||0)===0x0A))O_=false;}if(this.N3>0)leading=(this.N3-font.Ascent)-font.
Descent;var Dg=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Al$=0;var En=AE[0];if(O_)Al$=AE[2]-AE[0];else if(((Bu&0x4)===0x4))En=AE[2]-font.
Ys(NA,0,Mb);else if(((Bu&0x2)===0x2))En=(En+(((AE[2]-AE[0])/2)|0))-((font.Ys(NA,
0,Mb)/2)|0);var pos=font.BiF(NA,0,Mb,col,Al$);if(pos<0)pos=0;return[En+pos,Dg];}
,AOR:function(Ad){var B;if((this.String===A.jV)||!this.B7)return E4;if(!this.HX)
this.XJ(this);var Kb=this.CJ.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
Kb)&&(Ad>0)))return E4;var Bu=this.Kf;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.I_*2);if(((
Bu&0x80)===0x80)){if(this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N3>0)leading=(this.N3-font.Ascent)-font.Descent;var Dg=Ad*((font.Ascent+font.Descent
)+leading);var En=0;while(Ad>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var
AAY=(this.CJ.charCodeAt(inx)||0)-1;var BfB=font.Ys(this.CJ,inx+1,AAY);var A3J=font.
A6D(this.CJ,inx+1,AAY);var Ap3=BfB;var AaM=font.Ascent+font.Descent;var ABa=(Kb*((
font.Ascent+font.Descent)+leading))-leading;if(!Kb)ABa=AaM;if((((this.CJ.charCodeAt((
inx+AAY)+1)||0)===0x00)||((this.CJ.charCodeAt(inx+AAY)||0)===0x0A))||((this.CJ.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap2=(inx+1)+AAY;var Ay9=
this.CJ.indexOf(String.fromCharCode(0x20),inx+1);var Ay_=this.CJ.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ay9>=0)&&(Ay9<Ap2))||((Ay_>=0)&&(Ay_<Ap2)))Ap3=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABa>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap3>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))En=width-Ap3;else if(((Bu&0x2)===0x2))En=((width/2)|0)-((
Ap3/2)|0);if(((Bu&0x20)===0x20))Dg=Dg+(height-ABa);else if(((Bu&0x100)===0x100))
Dg=((Dg+((height/2)|0))-((ABa/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dg=(Dg+((height/2)|0))-((ABa/2)|0);En=(En+A3J[0])+this.I_;
Ap3=(Ap3+(A3J[2]-A3J[0]))-BfB;var B5;{var Be3=[Bd[0]+En,Bd[1]+Dg];B5=[].concat(Be3
,A.abf(Be3,[Ap3,AaM]));}return A.abh(B5,this.Br);},ACY:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.HX)this.XJ(this);var Kb=this.CJ.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=Kb))return A.jV;while(Ad>0){inx=inx+(
this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var XK=inx;var AtI=inx+(this.CJ.charCodeAt(
inx)||0);var Iu=0x00;do{XK=XK+1;Iu=this.CJ.charCodeAt(XK)||0;}while(((Iu===0xFEFF
)||(Iu===0x0A))&&(XK<=AtI));do{AtI=AtI-1;Iu=this.CJ.charCodeAt(AtI)||0;}while(((
Iu===0xFEFF)||(Iu===0x0A))&&(XK<=AtI));var NA=A.abW(this.CJ,XK,(AtI-XK)+1);var Apt;
for(Apt=NA.indexOf(String.fromCharCode(0xFEFF),0);Apt>=0;Apt=NA.indexOf(String.fromCharCode(
0xFEFF),Apt+1)){var Xy=Apt+1;while((NA.charCodeAt(Xy)||0)===0xFEFF)Xy=Xy+1;NA=A.
ab1(NA,Apt,Xy-Apt);}return NA;},Db:function(){var B;if((this.String===A.jV)||!this.
B7)return E4;if(!this.HX)this.XJ(this);if(this.CJ===A.jV)return E4;var leading=this.
B7.Leading;var AAW=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.N3>0
){leading=(this.N3-this.B7.Ascent)-this.B7.Descent;AAW=this.N3;}if(A.aaX(this.Amg
,BF))this.Amg=[this.B7.A6t(this.CJ),this.Amg[1]];this.Amg=[this.Amg[0],((this.CJ.
charCodeAt(0)||0)*AAW)-leading];var Bu=this.Kf;var Bd=this.M;var At2=this.I_;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Df=[At2,0,width-At2,height];var B5=[
].concat(Df.slice(0,2),A.abf(Df.slice(0,2),this.Amg));if(((Bu&0x80)===0x80)){if(
this.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var Xz=
this.AcL;if(Xz<=0)Xz=width-(this.I_*2);if(Xz<0)Xz=0;if(Xz>(B5[2]-B5[0]))B5=A.abL(
B5,Xz);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Df[3]-Df[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B5[2]-B5[0])>(Df[
2]-Df[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B5[2]-B5[0])!==(Df[2]-Df[0]
)){if(((Bu&0x4)===0x4))B5=A.abM(B5,Df[2]-(B5[2]-B5[0]));else if(((Bu&0x2)===0x2)
)B5=A.abM(B5,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Df[3]-(B5[3]-B5[1]));else
if(((Bu&0x100)===0x100))B5=A.abO(B5,((Df[1]+(((Df[3]-Df[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B5=
A.abO(B5,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(
0,2));return A.abh(B5,this.Br);},_Init:function(aArg){A.Core.Et._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.La();this.__proto__=A.Core.Et;
A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuK={attrString:null,AttrSet:
null,String:A.jV,Kf:0x12,Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Cj=Cj+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.BhN(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cj*255)>>8,(Cj*255)>>8,(Cj*255)>>8,(Cj
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pa],this);}A.Core.Et.H.call(this,E);A.pe([this,this.AiT],this
);},AiT:function(G){},XJ:function(G){var B;var ALA;ALA=(B=this.M)[2]-B[0];if(ALA<
0)ALA=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4W
,0);if(!!this.attrString)this.attrString.Bnv(this.AttrSet,this.String,ALA,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiT],this);
},Pa:function(G){A.pe([this,this.XJ],this);},Bfu:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kf)return;this.Kf=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiT],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pa],this);},A9g:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bfu],this.AttrSet,0);A.z9([this,this.Pa
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bfu],this.AttrSet,0);A.zV([this,this.Pa],this.AttrSet,1);}A.pe([this,this.
Pa],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E4;
if(!this.attrString)this.XJ(this);if(!this.attrString)return E4;var Bu=this.Kf;var
C3=this.attrString.BiK();var Df=A.aaT(this.M,BF);var B5=[].concat(Df.slice(0,2),
A.abf(Df.slice(0,2),C3));if(!C3[0]||!C3[1])return E4;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj5())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Df[
2]-Df[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Df[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Df[0]+(((Df[2]-Df[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Df[3]-Df[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Df[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Df[1]+(((Df[3]-Df[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);
this.__proto__=C.AuK;this.U=0x3;},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoa={AiE:
null,FD:null,Aiq:0,Aip:0,U5:A.wf,Ck:A.abi(4,3,0,null),AGJ:A.wf,Ti:0,ApG:0,JQ:function(
E){if(A.aaX(E,this.Ku))return;A.Core.ZB.JQ.call(this,E);this.Ck.Set(3,0,E[0]);this.
Ck.Set(3,1,E[1]);this.Ck.Set(3,2,1);this.Ti=0x45;this.FD=null;A.pe([this,this.Ajb
],this);},Kr:function(E){if(A.aaX(E,this.Mz))return;A.Core.ZB.Kr.call(this,E);this.
Ck.Set(2,0,E[0]);this.Ck.Set(2,1,E[1]);this.Ck.Set(2,2,1);this.Ti=0x45;this.FD=null;
A.pe([this,this.Ajb],this);},DC:function(E){if(A.aaX(E,this.ED))return;A.Core.ZB.
DC.call(this,E);this.Ck.Set(1,0,E[0]);this.Ck.Set(1,1,E[1]);this.Ck.Set(1,2,1);this.
Ti=0x45;this.FD=null;A.pe([this,this.Ajb],this);},DM:function(E){if(A.aaX(E,this.
Es))return;A.Core.ZB.DM.call(this,E);this.Ck.Set(0,0,E[0]);this.Ck.Set(0,1,E[1]);
this.Ck.Set(0,2,1);this.Ti=0x45;this.FD=null;A.pe([this,this.Ajb],this);},A1e:function(
){return;},Ajb:function(G){var B;this.AiE=null;if(this.Ti===0x00)return;if(this.
Ti===0x45){var K2=A._NewObject(A.Graphics.AxT,0);K2=K2.ANM(this.Ck.Get(0,0),this.
Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),this.Ck.Get(2,1),
this.Ck.Get(3,0),this.Ck.Get(3,1));if(!!K2){K2.ABW(0,0);this.Ck.Set(0,2,K2.UO*240
);K2.ABW(1,0);this.Ck.Set(1,2,K2.UO*240);K2.ABW(1,1);this.Ck.Set(2,2,K2.UO*240);
K2.ABW(0,1);this.Ck.Set(3,2,K2.UO*240);}this.A1e();}if((((this.Ti===0x4D)&&!!this.
FD)&&!!this.U5[0])&&!!this.U5[1]){var Ai8=[].concat(BF,this.U5);var Ai7=this.AGJ;
var Af3=Ai8[0]-Ai7[0];var Az=Ai8[2]-Ai7[0];var D8=Ai8[1]-Ai7[1];var Rv=Ai8[3]-Ai7[
1];this.FD.Ae9(Af3,D8);this.Ck.Set(0,0,this.FD.PZ+this.Aip);this.Ck.Set(0,1,this.
FD.P0+this.Aiq);this.Ck.Set(0,2,this.FD.UO);this.FD.Ae9(Az,D8);this.Ck.Set(1,0,this.
FD.PZ+this.Aip);this.Ck.Set(1,1,this.FD.P0+this.Aiq);this.Ck.Set(1,2,this.FD.UO);
this.FD.Ae9(Az,Rv);this.Ck.Set(2,0,this.FD.PZ+this.Aip);this.Ck.Set(2,1,this.FD.
P0+this.Aiq);this.Ck.Set(2,2,this.FD.UO);this.FD.Ae9(Af3,Rv);this.Ck.Set(3,0,this.
FD.PZ+this.Aip);this.Ck.Set(3,1,this.FD.P0+this.Aiq);this.Ck.Set(3,2,this.FD.UO);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Es=[(this.
Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.ED=[(this.Ck.Get(1,0)+0.5)|0,(
this.Ck.Get(1,1)+0.5)|0];this.Mz=[(this.Ck.Get(2,0)+0.5)|0,(this.Ck.Get(2,1)+0.5
)|0];this.Ku=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];this.A1e();}this.
ApG=this.Ti;this.Ti=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bm3:function(E){if(A.aaX(E,this.AGJ))return;this.AGJ=E;if((this.ApG!==0x45)&&(
this.Ti===0x00)){this.Ti=this.ApG;A.pe([this,this.Ajb],this);}},Aro:function(Fd){
var B;if(!!!this.AiE){this.AiE=A._NewObject(A.Graphics.A61,0);this.AiE.ANM(this.
Ck.Get(0,0),this.Ck.Get(0,1),this.Ck.Get(1,0),this.Ck.Get(1,1),this.Ck.Get(2,0),
this.Ck.Get(2,1),this.Ck.Get(3,0),this.Ck.Get(3,1));}if(!this.AiE.Ae9(Fd))return BF;
var Ap8=[].concat(BF,this.U5);var En=this.AiE.PZ*(Ap8[2]-Ap8[0]);var Dg=this.AiE.
P0*(Ap8[3]-Ap8[1]);return A.abf([En|0,Dg|0],Ap8.slice(0,2));},A$A:function(Bbx,L5
){var B;this.AiE=null;if(!L5)throw new Error(IQ);if(!this.FD)this.FD=A._NewObject(
A.Graphics.AxT,0);this.FD.BgS(L5);this.Aip=Bbx[0];this.Aiq=Bbx[1];this.ApG=0x4D;
this.Ti=0x00;if(!this.U5[0]||!this.U5[1])return;var Ai8=[].concat(BF,this.U5);var
Ai7=this.AGJ;var Af3=Ai8[0]-Ai7[0];var Az=Ai8[2]-Ai7[0];var D8=Ai8[1]-Ai7[1];var
Rv=Ai8[3]-Ai7[1];this.FD.Ae9(Af3,D8);this.Ck.Set(0,0,this.FD.PZ+this.Aip);this.Ck.
Set(0,1,this.FD.P0+this.Aiq);this.Ck.Set(0,2,this.FD.UO);this.FD.Ae9(Az,D8);this.
Ck.Set(1,0,this.FD.PZ+this.Aip);this.Ck.Set(1,1,this.FD.P0+this.Aiq);this.Ck.Set(
1,2,this.FD.UO);this.FD.Ae9(Az,Rv);this.Ck.Set(2,0,this.FD.PZ+this.Aip);this.Ck.
Set(2,1,this.FD.P0+this.Aiq);this.Ck.Set(2,2,this.FD.UO);this.FD.Ae9(Af3,Rv);this.
Ck.Set(3,0,this.FD.PZ+this.Aip);this.Ck.Set(3,1,this.FD.P0+this.Aiq);this.Ck.Set(
3,2,this.FD.UO);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Es=[(this.Ck.Get(0,0)+0.5)|0,(this.Ck.Get(0,1)+0.5)|0];this.ED=[(this.Ck.
Get(1,0)+0.5)|0,(this.Ck.Get(1,1)+0.5)|0];this.Mz=[(this.Ck.Get(2,0)+0.5)|0,(this.
Ck.Get(2,1)+0.5)|0];this.Ku=[(this.Ck.Get(3,0)+0.5)|0,(this.Ck.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1e();},_Init:
function(aArg){A.Core.ZB._Init.call(this,aArg);(this.Ck=[]).__proto__=C.Aoa.Ck;this.
__proto__=C.Aoa;this.U=0x3;},_Mark:function(D){var B;A.Core.ZB._Mark.call(this,D
);if((B=this.AiE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FD)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVx={Fq:null,bitmap:null
,P:null,G3:255,Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nu=aOffset[0];var Nv=aOffset[1];var AE=[].concat(BF,this.
U5);aBlend=aBlend&&((this.U&0x2)===0x2);Cj=Cj+1;var BdX;var BdY;var BdZ;var Bd0;
var BzG=this.G3;BdX=BdY=BdZ=Bd0=BzG;var Alu=255|(255<<8)|(255<<16)|((((Cj*BdX)>>
8)&0xFF)<<24);var Alv=255|(255<<8)|(255<<16)|((((Cj*BdY)>>8)&0xFF)<<24);var Bx0=
255|(255<<8)|(255<<16)|((((Cj*BdZ)>>8)&0xFF)<<24);var Bx1=255|(255<<8)|(255<<16)|((((
Cj*Bd0)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E4,aOffset));CZ.AhN(aClip,this.bitmap
,0,this.Ck.Get(0,0)+Nu,this.Ck.Get(0,1)+Nv,this.Ck.Get(0,2),this.Ck.Get(1,0)+Nu,
this.Ck.Get(1,1)+Nv,this.Ck.Get(1,2),this.Ck.Get(2,0)+Nu,this.Ck.Get(2,1)+Nv,this.
Ck.Get(2,2),this.Ck.Get(3,0)+Nu,this.Ck.Get(3,1)+Nv,this.Ck.Get(3,2),AE,Alu,Alv,
Bx0,Bx1,aBlend,true);},GZ:function(CN){if(!this.P||!this.Fq)return null;var BP=(
A.Core.Aea.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqI.isPrototypeOf(CN)?CN:null
);if(!BP&&!D4)return null;var Fs=BF;var B0=this.Fq.Ab;while(!!B0&&(B0!==this.P)){
Fs=A.abe(Fs,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fq;if(!!BP&&!BP.Down)this.Fq=null;
if(!!BP){BP.H0=A.abf(this.Aro(BP.H0),Fs);BP.NQ=A.abf(this.Aro(BP.NQ),Fs);return X.
GZ(BP);}if(!!D4){var BzK=A.abf(this.Aro(A.abe(D4.H0,D4.DG)),Fs);D4.H0=A.abf(this.
Aro(D4.H0),Fs);D4.NQ=A.abf(this.Aro(D4.NQ),Fs);D4.DG=A.abe(D4.H0,BzK);return X.GZ(
D4);}return C.Aoa.GZ.call(this,CN);},Yi:function(Da,BG,Ob,Aaj,Ac1,Ac0){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Da);pos=this.Aro(pos
);var Ap8=[].concat(BF,this.U5);if(!A.wa(Ap8,pos))return null;var JA=this.P.Yi(A.
abh(A.abh([0,0,Da[2]-Da[0],Da[3]-Da[1]],pos),this.P.M.slice(0,2)),BG,Ob,Aaj,null
,Ac0);if(!!JA)this.Fq=JA.Ci;else this.Fq=null;if(!!this.Fq)return A._NewObject(A.
Core.AuS,0).Initialize(this,BF);return null;},RG:function(G){var B;var Bd1=this.
U5;if(!!this.P)this.bitmap=this.P.FA;else this.bitmap=null;if(!!this.bitmap)this.
U5=this.bitmap.FrameSize;else this.U5=BF;if(((A.aaX(Bd1,this.U5)||((this.ApG===0x45
)&&(this.Ti===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApG!==0x45)&&(this.Ti===0x00))&&!A.aaX(Bd1,this.U5)){this.Ti=this.ApG;
A.pe([this,this.Ajb],this);}},Dr:function(E){var B;if(E===this.G3)return;this.G3=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bl8:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Ip);if(!!this.P){A.
z9([this,this.RG],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RG
],E,0);this.bitmap=E.FA;}this.RG(this);},Awf:function(){return this.G3;},_Init:function(
aArg){C.Aoa._Init.call(this,aArg);this.__proto__=C.AVx;},_Mark:function(D){var B;
C.Aoa._Mark.call(this,D);if((B=this.Fq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Ael={Hv:null,AQ:0xFFFFFFFF,DG:A.wf
,AOy:false,La:function(){this.A1y();},Kk:function(CZ,aClip,aOffset,Cj,aBlend){if(
!this.Hv)return;var DD;var DO;var DI;var DN;var B4=this.AQ;Cj=Cj+1;DD=DO=DI=DN=B4;
if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Ael(aClip,this.Hv,A.abh(this.M,aOffset),this.AOy,this.DG,DD,DO,DN,DI,true,true,0
);},A1y:function(){return;},Ajc:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bj(this.M);},AnD:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hv)this.Ab.Bj(this.M);},Bl3:function(E){var B;if(E===this.AOy)return;this.
AOy=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bj(this.M);},Zv:function(
E){var B;if(E===this.Hv)return;if(!!this.Hv)A.z9([this,this.Ajc],this.Hv,0);this.
Hv=E;if(!!this.Hv)A.zV([this,this.Ajc],this.Hv,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},_Init:function(aArg){A.Core.Et._Init.call(this,aArg);this.__proto__=C.Ael;},
_Done:function(){this.La();this.__proto__=A.Core.Et;A.Core.Et._Done.call(this);}
,_Mark:function(D){var B;A.Core.Et._Mark.call(this,D);if((B=this.Hv)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hk={Hv:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,La:function(){this.A1y();},Kk:function(CZ,aClip,aOffset,Cj,aBlend
){if(!this.Hv)return;var DD;var DO;var DI;var DN;var B4=this.AQ;Cj=Cj+1;DD=DO=DI=
DN=B4;if(Cj<256){DD=(DD&0x00FFFFFF)|((((Cj*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Cj*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Cj*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Cj*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hk(aClip,this.Hv,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1y:function(){return;},Ajc:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bj(this.
M);},AnD:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hv)this.Ab.Bj(this.M);},Nf:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hv)this.Ab.Bj(this.M);},Zv:function(E){var B;if(E===this.Hv)return;if(!!this.
Hv)A.z9([this,this.Ajc],this.Hv,0);this.Hv=E;if(!!this.Hv)A.zV([this,this.Ajc],this.
Hv,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(aArg){A.Core.Et._Init.call(
this,aArg);this.__proto__=C.Hk;},_Done:function(){this.La();this.__proto__=A.Core.
Et;A.Core.Et._Done.call(this);},_Mark:function(D){var B;A.Core.Et._Mark.call(this
,D);if((B=this.Hv)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BDT={A4D:0x1,A4C:0x2,A4E:0x4,A4H:0x8,A4G:0x10,A4F:0x20,BE9:0x40,BE_:0x80,BFi:
0x100};C.BFm={A4D:0x1,A4C:0x2,A4E:0x4,A4H:0x8,A4G:0x10,A4F:0x20,BCm:0x40,BCl:0x80
,BCr:0x100};C.BEw={Normal:0,BE4:1,BE2:2,BE3:3};
C._Init=function(){C.C5.__proto__=A.Core.Akg;C.AK.__proto__=A.Core.Et;C.BU.__proto__=
A.Core.Et;C.NO.__proto__=A.Core.Et;C.Ap.__proto__=A.Core.Et;C.Text.__proto__=A.Core.
Et;C.AuK.__proto__=A.Core.Et;C.Aoa.__proto__=A.Core.ZB;C.AVx.__proto__=C.Aoa;C.Ael.
__proto__=A.Core.Et;C.Hk.__proto__=A.Core.Et;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */