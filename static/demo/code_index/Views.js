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
var Ce=[1,1];var BD=[0,0];var E6=[0,0,0,0];var Hr="\uFEFF";var IU="No matrix to perform 3D transformation";
var Is="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C7={KI:null,Alb:1,Ala:1,AQ:0xFFFFFFFF,Ko:function(CY,aClip,aOffset,Ck,aBlend){var
B;var Agt=this.Ala;var Agu=this.Alb;var AdB=A.abf(this.Et,aOffset);var AdC=A.abf(
this.ED,aOffset);var Aly;var Alz;var B3=this.AQ;if(A.aaX(AdB,AdC))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;Aly=Alz=B3;if(Ck<256){Aly=(Aly&0x00FFFFFF)|((((
Ck*((Aly>>24)&0xFF))>>8)&0xFF)<<24);Alz=(Alz&0x00FFFFFF)|((((Ck*((Alz>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agt===1)&&(Agu===1))CY.Au9(aClip,AdB,AdC,Aly,Alz,aBlend);else
CY.BiE(aClip,AdB,AdC,Agt,Agu,Aly,Alz,aBlend);},GetExtent:function(){var Agt=this.
Ala;var Agu=this.Alb;var AdB=this.Et;var AdC=this.ED;if(((Agt===1)&&(Agu===1))||
A.aaX(AdB,AdC))return A.Core.Akh.GetExtent.call(this);var AiD=Agt/2;var AiE=Agu/
2;var Apl=AdB[0];var Apm=AdB[1];var Apn=AdC[0];var Apo=AdC[1];var J$=Apn-Apl;var
Ka=Apo-Apm;var IY=Math.sqrt((J$*J$)+(Ka*Ka));J$=J$/IY;Ka=Ka/IY;var BcW=Apl+(Ka*AiD
);var BcX=Apm-(J$*AiD);var AJC=Apn+(Ka*AiE);var AJD=Apo-(J$*AiE);var AJE=Apn-(Ka
*AiE);var AJF=Apo+(J$*AiE);var AJG=Apl-(Ka*AiD);var AJH=Apm+(J$*AiD);var left=BcW;
var right=BcW;var top=BcX;var bottom=BcX;if(AJC<left)left=AJC;if(AJE<left)left=AJE;
if(AJG<left)left=AJG;if(AJC>right)right=AJC;if(AJE>right)right=AJE;if(AJG>right)
right=AJG;if(AJD<top)top=AJD;if(AJF<top)top=AJF;if(AJH<top)top=AJH;if(AJD>bottom
)bottom=AJD;if(AJF>bottom)bottom=AJF;if(AJH>bottom)bottom=AJH;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Ce));return Az;
},RK:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_W:function(E){var B;if(E<1)E=1;if(E===this.Alb)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alb=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ala!==1))&&!this.KI){
this.KI=A.aaL(A.aci.AsW);if(this.KI.ON)A.zV([this,this.RK],this.KI,0);}if(((E===
1)&&(this.Ala===1))&&!!this.KI){if(this.KI.ON)A.z9([this,this.RK],this.KI,0);this.
KI=null;}},A_V:function(E){var B;if(E<1)E=1;if(E===this.Ala)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ala=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alb!==1))&&!this.
KI){this.KI=A.aaL(A.aci.AsW);if(this.KI.ON)A.zV([this,this.RK],this.KI,0);}if(((
E===1)&&(this.Alb===1))&&!!this.KI){if(this.KI.ON)A.z9([this,this.RK],this.KI,0);
this.KI=null;}},Nm:function(E){var B;if(E<1)E=1;if((E===this.Ala)&&(E===this.Alb
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ala=E;this.Alb=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KI){this.KI=A.aaL(A.aci.AsW);if(this.KI.ON)A.zV([this,this.
RK],this.KI,0);}if((E===1)&&!!this.KI){if(this.KI.ON)A.z9([this,this.RK],this.KI
,0);this.KI=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(
aArg){A.Core.Akh._Init.call(this,aArg);this.__proto__=C.C7;},_Mark:function(D){var
B;A.Core.Akh._Mark.call(this,D);if((B=this.KI)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANq:0xFFFFFFFF,ANr:0xFFFFFFFF,ANv:0xFFFFFFFF
,ANu:0xFFFFFFFF,AQ:0xFFFFFFFF,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;var DD=
this.ANu;var DO=this.ANv;var DI=this.ANq;var DN=this.ANr;var B3=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ck=Ck+1;if((((DD===DO)&&(DI===DN))&&(DD===DI))&&(DD===0xFFFFFFFF
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
)+1))>>8)&0xFF)<<16);}if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&
0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF
)|((((Ck*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF
))>>8)&0xFF)<<24);}CY.Avm(aClip,A.abh(this.M,aOffset),DD,DO,DN,DI,aBlend);},Awy:
function(E){var B;if(E===this.ANq)return;this.ANq=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awz:function(E){var B;if(E===this.ANr)return;this.ANr=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},AwB:function(E){var B;
if(E===this.ANv)return;this.ANv=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},AwA:function(E){var B;if(E===this.ANu)return;this.ANu=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fq:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Ko:function(CY
,aClip,aOffset,Ck,aBlend){var B;var DD;var DO;var DI;var DN;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DD=DO=DI=DN=B3;if(Ck<256){DD=(DD&0x00FFFFFF
)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.BiC(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Nm:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NT={timer:null,Al:null,MQ:-1,AQ:0xFFFFFFFF,Au_:
0x1F,TS:0,Dx:0,Anm:A.wf,VB:false,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;var
Nw=this.TS;if(this.MQ>=0)Nw=this.MQ;if(!this.Al||(Nw>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B3=this.AQ;var Kh=(((Ck+1)*255)>>
8)+1;var Oi=this.Au_;var Az=A.abh(this.M,aOffset);var AK5=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anm);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kh<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kh)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}if(((this.
Anm[0]>0)&&(AK5[0]>0))&&!((Oi&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK5[
0];if(((Oi&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oi=Oi|0x4;}else if(((Oi&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oi=Oi|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oi=Oi|0x5;}}if(((this.Anm[1]>0)&&(AK5[1]>0))&&!((Oi&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK5[1];if(((Oi&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oi=Oi|0x8;}else if(((Oi&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oi=Oi|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oi=Oi|
0xA;}}CY.BiB(aClip,this.Al,Nw,Az,Oi,DD,DO,DN,DI,aBlend);},RK:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mg:function(G){var B;var Nw=
this.MQ;var Tp=0;if(!!this.Al)Tp=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MQ<0))&&(Tp>0))this.Dx=this.timer.Bs-(this.TS*this.Al.FrameDelay);if(
!!this.timer&&(Tp>0)){var Av=(this.timer.Bs-this.Dx)|0;Nw=(Av/this.Al.FrameDelay
)|0;if(Av>=Tp){Nw=Nw%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tp);}}if(((Nw!==
this.MQ)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MQ=Nw;if(!Tp&&
!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zp:function(E){var B;if(this.VB===E)return;this.VB=E;this.MQ=-1;if(
!E&&!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mg],this.timer,0);A.pe([this,this.
Mg],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A97:function(
E){var B;if(E===this.Au_)return;this.Au_=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TS)&&(this.MQ===-1)
)return;this.TS=E;if(!this.timer)this.MQ=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
ON)A.z9([this,this.RK],this.Al,0);this.Al=E;this.MQ=-1;if(!!E&&E.ON)A.zV([this,this.
RK],E,0);if(this.VB){this.Zp(false);this.Zp(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},A_l:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anm))return;this.Anm=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au_&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NT;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MQ:0,AQ:0xFFFFFFFF
,Kj:0x12,TS:0,G9:255,VB:false,Aa3:false,Ko:function(CY,aClip,aOffset,Ck,aBlend){
var B;var Nw=this.TS;if(this.MQ>=0)Nw=this.MQ;if(!this.Al||(Nw>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dc();var C5=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B3=this.AQ;var Kh=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kh<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kh)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C5))CY.A50(aClip,this.Al,Nw,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CY.Bo1(aClip,this.Al,Nw
,A.abh(AE,aOffset),[].concat(BD,C5),DD,DO,DN,DI,aBlend,true);},RK:function(G){var
B;if(((this.Aa3&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dc());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mg:function(
G){var B;var Nw=this.MQ;var Tp=0;if(!!this.Al)Tp=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MQ<0))&&(Tp>0))this.Dx=this.timer.Bs-(this.TS*this.Al.FrameDelay
);if(!!this.timer&&(Tp>0)){var Av=(this.timer.Bs-this.Dx)|0;Nw=(Av/this.Al.FrameDelay
)|0;if(Av>=Tp){Nw=Nw%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tp);}}if(((Nw!==
this.MQ)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MQ=Nw;if(!Tp&&
!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}},I$:function(E
){if(E===this.Aa3)return;this.Aa3=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dc());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zp:function(
E){var B;if(this.VB===E)return;this.VB=E;this.MQ=-1;if(!E&&!!this.timer){A.z9([this
,this.Mg],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aej);A.zV([this,this.Mg],this.timer,0);A.pe([this,this.Mg],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kj)return;
this.Kj=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TS)&&(this.MQ===-1))return;this.TS=E;if(!this.timer
)this.MQ=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.ON)A.z9([this,this.RK],this.
Al,0);this.Al=E;this.MQ=-1;if(!!E&&E.ON)A.zV([this,this.RK],E,0);if(this.VB){this.
Zp(false);this.Zp(true);}if(((this.Aa3&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dc());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
C3:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cr(
0x400,0x0);else this.Cr(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Dc:function(){var
B;if(!this.Al)return E6;var Bu=this.Kj;var C5=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C5[0]||!C5[1])return E6;var Dg=[0,0
,width,height];var B4=Dg;if(((Bu&0x40)===0x40)){var A4h=((((Dg[2]-Dg[0])<<16)+((
C5[0]/2)|0))/C5[0])|0;var AA_=((((Dg[3]-Dg[1])<<16)+((C5[1]/2)|0))/C5[1])|0;var Ai2=
A4h;if(AA_>Ai2)Ai2=AA_;B4=A.abL(B4,((C5[0]*Ai2)+32768)>>16);B4=A.abI(B4,((C5[1]*
Ai2)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4h=((((Dg[2]-Dg[0])<<16)+((C5[
0]/2)|0))/C5[0])|0;var AA_=((((Dg[3]-Dg[1])<<16)+((C5[1]/2)|0))/C5[1])|0;var Ai2=
A4h;if(AA_<Ai2)Ai2=AA_;B4=A.abL(B4,((C5[0]*Ai2)+32768)>>16);B4=A.abI(B4,((C5[1]*
Ai2)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C5);if((B4[2]-B4[0])
!==(Dg[2]-Dg[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Dg[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Dg[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},Bk2:function(){return this.
AQ;},ASH:function(){return this.TS;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,Em:null,CI:
A.jV,String:A.jV,Og:null,Aml:A.wf,Jc:0,N6:0,AcL:0,Br:A.wf,Kj:0x12,AQ:0xFFFFFFFF,
AfA:false,Aa3:false,Ym:false,AOd:false,HX:false,Lc:function(){if(!!this.Og){this.
A2l(this.Og);this.Og=null;}},Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;if((this.
CI===A.jV)||!this.B6)return;var Bu=this.Kj;var font=this.B6;var Dg=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kh=(((Ck+1)*255)>>8)+1;
var Kg=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Dc(),aOffset);var Bq=[Dg[0]-AE[
0],(Dg[1]-AE[1])-font.Ascent];if(Kg<1)return;DD=DO=DI=DN=col;if(Kh<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kh)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kg===1)&&!((Bu&0x40)===
0x40)){CY.A6o(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Dg,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N6>0)leading=(this.N6-font.
Ascent)-font.Descent;var AaK=(font.Ascent+font.Descent)+leading;var ByY=aClip[1]-
AE[1];var ByZ=aClip[3]-AE[1];var A1z=AE[2]-AE[0];var Dh=0;var O=1;var B3=this.CI.
charCodeAt(1)||0;while(((Dh+AaK)<ByY)&&(B3>0)){O=O+B3;Dh=Dh+AaK;B3=this.CI.charCodeAt(
O)||0;}while((Dh<ByZ)&&(B3>0)){var Mc=A.abe(Bq,[0,Dh]);var Ame=0;var Pd=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B3)||0)!==0x00))Pd=true;if(Pd&&!!(Bu&0x6
)){var Ap1=O+B3;var Azh=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azi=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Azh<0)||(Azh>=Ap1))&&((Azi<0)||(Azi>=
Ap1)))Pd=false;}if(Pd)Ame=A1z;else if(((Bu&0x4)===0x4))Mc=[(Mc[0]-A1z)+font.Yr(this.
CI,O+1,B3-1),Mc[1]];else if(((Bu&0x2)===0x2))Mc=[(Mc[0]-((A1z/2)|0))+((font.Yr(this.
CI,O+1,B3-1)/2)|0),Mc[1]];CY.A6o(aClip,font,this.CI,O+1,B3-1,Dg,Mc,Ame,0,DD,DO,DN
,DI,true);O=O+B3;Dh=Dh+AaK;B3=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bgd;Bgd=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bgd&&
!this.AcL)&&this.AfA)&&this.HX)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HX=false;A.pe([this,this.Pg],this);}if(((this.Ym&&this.HX)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiV],this);},ByQ:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},ByP:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2l:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bza:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiV:function(G){A.pe(this.Em
,this);},Pg:function(G){A.pe([this,this.XK],this);},XK:function(G){var B;if(this.
HX)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XC=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfA){
if(this.AcL>0)XC=this.AcL;else if(!this.Aa3)XC=width-(this.Jc*2);else XC=width;if(
XC<0)XC=1;}if(!!this.Og){this.A2l(this.Og);this.Og=null;}this.HX=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOd)this.Og=this.Bza(length
);this.CI=font.Bon(this.String,0,XC,length,this.Og);if(!!this.Og&&!this.BjU()){this.
A2l(this.Og);this.Og=null;}}else this.CI=A.jV;this.Aml=BD;if(((this.Ym&&(this.CI
!==A.jV))&&!this.Aa3)&&!!font){var Bu=this.Kj;var leading=font.Leading;var ID=this.
CI;var AKZ=this.Aj6();if(((Bu&0x80)===0x80)){if(AKZ)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N6>0)leading=(this.N6-font.Ascent)-font.Descent;var AA5=(font.
Ascent+font.Descent)+leading;var Kg=ID.charCodeAt(0)||0;var AlW=((height+leading
)/AA5)|0;var A1N=false;var AJK=false;if(AlW<=0)AlW=1;if(Kg>AlW){var Bf=0;var AA6=
0;var AKX=Kg-1;var K3;var Nx=ID.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AA6=Kg-AlW;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AA6=((Kg-AlW)/2)|0;AKX=(AA6+AlW)-1;}else
AKX=AlW-1;A1N=AA6>0;AJK=AKX<(Kg-1);for(K3=1;Bf<AA6;Bf=Bf+1)K3=K3+(ID.charCodeAt(
K3)||0);if(AJK)for(Nx=K3;Bf<AKX;Bf=Bf+1)Nx=Nx+(ID.charCodeAt(Nx)||0);if(A1N){var
IY=ID.charCodeAt(K3)||0;tmp=(Hr+A.abW(ID,K3,IY))+Hr;tmp=A.abQ(tmp,0,(IY+2)&0xFFFF
);K3=K3+IY;if((tmp.charCodeAt(IY)||0)===0x0A){tmp=A.abQ(tmp,IY,0xFEFF);tmp=A.abQ(
tmp,IY+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(ID,K3,Nx-K3);if(AJK&&(
Nx>=K3)){var IY=ID.charCodeAt(Nx)||0;var QC=(Hr+A.abW(ID,Nx,IY))+Hr;QC=A.abQ(QC,
0,(IY+2)&0xFFFF);QC=A.abQ(QC,1,0xFEFF);if((QC.charCodeAt(IY)||0)===0x0A){QC=A.abQ(
QC,IY,0xFEFF);QC=A.abQ(QC,IY+1,0x0A);}if((QC.charCodeAt(2)||0)===0x0A){QC=A.abQ(
QC,2,0xFEFF);QC=A.abQ(QC,1,0x0A);}else QC=A.abQ(QC,1,0xFEFF);tmp=tmp+QC;}ID=String.
fromCharCode(AlW&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKv=width-(this.Jc*2);if(this.
AfA&&(this.AcL>0))AKv=this.AcL;Kg=ID.charCodeAt(0)||0;for(;Bf<Kg;Bf=Bf+1){var Amb=
A1N&&!Bf;var Amc=AJK&&(Bf===(Kg-1));var Xs=false;var Xt=false;var Aun=AKZ;if((AKZ&&
Amb)&&!Amc){Amb=false;Amc=true;}else if((AKZ&&Amc)&&!Amb){Amc=false;Amb=true;}var
XL=inx+1;var IY=ID.charCodeAt(inx)||0;var K3=XL;var Nx=(XL+IY)-2;var A2A=-1;var A2B=-
1;if(!this.AfA&&(font.Yr(ID,XL,IY-1)>AKv)){var AoX=Bu;if(((AoX&0x2)===0x2)&&!!(AoX&
0x5))AoX&=~0x2;if(((AoX&0x2)===0x2))AoX&=~0x5;if(((AoX&0x4)===0x4))Xs=true;else if(((
AoX&0x2)===0x2)){Xs=true;Xt=true;}else Xt=true;}if((ID.charCodeAt(K3)||0)===0x0A
)K3=K3+1;if((ID.charCodeAt(Nx)||0)===0x0A)Nx=Nx-1;while(Xs&&((ID.charCodeAt(K3)||
0)===0xFEFF))K3=K3+1;while(Xt&&((ID.charCodeAt(Nx)||0)===0xFEFF))Nx=Nx-1;Xs=Xs&&
!Amc;Xt=Xt&&!Amb;while((((Xs||Xt)||Amb)||Amc)&&(K3<Nx)){if((Xs&&(Aun||!Xt))||Amb
){if(A2A>0)ID=A.abQ(ID,A2A,0xFEFF);ID=A.abQ(ID,K3,0x2026);A2A=K3;K3=K3+1;Aun=!Aun;
Amb=false;if(font.Yr(ID,XL,IY-1)<=AKv){Xs=false;Xt=false;}else Xs=Xs||!Xt;}if((Xt&&(
!Aun||!Xs))||Amc){if(A2B>0)ID=A.abQ(ID,A2B,0xFEFF);ID=A.abQ(ID,Nx,0x2026);A2B=Nx;
Nx=Nx-1;Aun=!Aun;Amc=false;if(font.Yr(ID,XL,IY-1)<=AKv){Xs=false;Xt=false;}else Xt=
Xt||!Xs;}}inx=inx+IY;}this.Aml=[font.A6U(ID),((ID.charCodeAt(0)||0)*AA5)-leading
];this.CI=ID;}if(this.Aa3&&(this.CI!==A.jV)){var At$=[this.Jc,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dc(),At$),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);},Bmu:function(
E){if(E===this.AOd)return;this.AOd=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pg],this);},Hn:function(E){if(E<0)E=0;if(this.Jc===E)return;this.Jc=E;this.CI=A.
jV;this.HX=false;A.pe([this,this.Pg],this);},Aw7:function(E){var B;if(E<0)E=0;if(
this.N6===E)return;this.N6=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Ym){this.CI=A.jV;this.HX=false;A.pe([this,this.Pg],this);}if(this.Aa3&&
this.HX)this.H(A.abg(this.Dc(),this.Br));if(this.HX)A.pe([this,this.AiV],this);}
,Bmt:function(E){if(E===this.Ym)return;this.Ym=E;if(((this.AfA&&!!!this.AcL)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pg],this);},Q7:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcL&&this.AfA)||!!E)||this.Ym)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I$:function(E){if(E===this.Aa3)return;this.Aa3=E;if(E&&this.Ym){this.CI=
A.jV;this.HX=false;A.pe([this,this.Pg],this);}if(E&&this.HX){var At$=[this.Jc,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dc(),At$),this.Br));this.U=this.U&~
0x2000;}},Bn6:function(E){if(E<0)E=0;if(E===this.AcL)return;this.AcL=E;if(this.AfA&&
this.HX){this.CI=A.jV;this.HX=false;A.pe([this,this.Pg],this);}if(((!!!E&&this.AfA
)||this.Ym)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},KS:function(
E){if(E===this.AfA)return;this.AfA=E;if(this.HX){this.CI=A.jV;this.HX=false;A.pe([
this,this.Pg],this);}if(((E&&!!!this.AcL)||this.Ym)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gb:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HX)A.pe([this
,this.AiV],this);},A6:function(E){var B;if(E===this.Kj)return;this.Kj=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Ym){this.CI=A.jV;this.HX=false;
A.pe([this,this.Pg],this);}if(this.HX)A.pe([this,this.AiV],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HX=false;A.pe([this,this.
Pg],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CI=A.jV;this.HX=false;
A.pe([this,this.Pg],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cr(0x400,0x0);else this.Cr(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},Aj6:function(
){if(!this.HX)this.XK(this);if(!this.Og)return false;var result=false;var bidi=this.
Og;result=A.v2(bidi);return result;},BjU:function(){if(!this.HX)this.XK(this);if(
!this.Og)return false;var result=false;var bidi=this.Og;result=A.zZ(bidi);return result;
},AGW:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Ym)return BD;if(
!this.HX)this.XK(this);if(aIndex<0)aIndex=0;var BAn=(this.CI.charCodeAt(0)||0)-1;
var Mf=this.CI.charCodeAt(1)||0;var inx=1;var Ai7=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<BAn)&&((inx+Mf)<=aIndex)){inx=inx+Mf;Bf=Bf+1;Ai7=Ai7+1;
aIndex=aIndex+1;Mf=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Mf))aIndex=inx+Mf;
if(!!this.Og)aIndex=(inx+this.ByP(this.Og,(inx+1)-Ai7,(inx+Mf)-Ai7,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Ix=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Ix!==0xFEFF)&&(Ix!==0x0A);}return[col,Bf];},AnS:function(AoM){if(((this.String===
A.jV)||!this.B6)||this.Ym)return 0;if(!this.HX)this.XK(this);var Bf=AoM[1];var col=
AoM[0];var inx=1;var Ai7=2;var Kg=this.CI.charCodeAt(0)||0;var Mf=this.CI.charCodeAt(
1)||0;if(Bf>=Kg){Bf=Kg-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mf>0)){inx=inx+Mf;Bf=Bf-1;Ai7=Ai7+1;Mf=this.CI.charCodeAt(inx)||0;
}var XB=inx;var AKY=(inx-Ai7)+1;var Ap1=(AKY+Mf)-1;var AAR=false;while((col>=0)&&(
Mf>1)){var Ix=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Mf=Mf-1;AAR=(Ix===0xFEFF)||(
Ix===0x0A);if(!AAR){col=col-1;XB=inx;}}if((!AAR&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAR=true;if(AAR)XB=XB+1;XB=XB-Ai7;if(!!this.Og)XB=AKY+this.ByQ(
this.Og,AKY,Ap1,XB-AKY);return XB;},AT9:function(K0){var B;if((this.String===A.jV
)||!this.B6)return BD;if(!this.HX)this.XK(this);var AE=this.Dc();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B6;var Bu=this.Kj;var Kg=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(K0[1]<AE[1])K0=[K0[0],AE[1]];if(K0[1]>=AE[3])K0=[
K0[0],AE[3]-1];if(this.N6>0)leading=(this.N6-font.Ascent)-font.Descent;var AaK=(
font.Ascent+font.Descent)+leading;var Bf=((K0[1]-AE[1])/AaK)|0;var NF=this.AC8(Bf
);var Mf=NF.length;var Pd=false;if(((Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kg-1)))Pd=true;if((Pd&&(
NF.indexOf(String.fromCharCode(0x20),0)<0))&&(NF.indexOf(String.fromCharCode(0xA0
),0)<0))Pd=false;if(Pd){var inx=1;var Ap0=Bf;while(Ap0>0){inx=inx+(this.CI.charCodeAt(
inx)||0);Ap0=Ap0-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pd=false;}var Ame=0;var Ep=0;if(
Pd)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.Yr(NF,0,Mf);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.Yr(NF,0,Mf)/2)|0);var col=font.
Bjv(NF,0,Mf,(K0[0]-AE[0])-Ep,Ame);if(col<0)col=0;return[col,Bf];},Afh:function(AoM
){var B;if((this.String===A.jV)||!this.B6)return BD;if(!this.HX)this.XK(this);var
Kg=this.CI.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kj;var Bf=AoM[1];var col=
AoM[0];if(Bf>=Kg){Bf=Kg-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NF=this.AC8(
Bf);var Mf=NF.length;var AE=this.Dc();var Pd=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kg-1)))Pd=true;if((Pd&&(NF.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NF.indexOf(String.fromCharCode(0xA0),0)<0))Pd=false;if(Pd){var inx=1;var
Ap0=Bf;while(Ap0>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ap0=Ap0-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pd=false;}if(this.N6>0)leading=(this.N6-font.Ascent)-font.
Descent;var Dh=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ame=0;var Ep=AE[0];if(Pd)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
Yr(NF,0,Mf);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.Yr(NF,
0,Mf)/2)|0);var pos=font.Bjr(NF,0,Mf,col,Ame);if(pos<0)pos=0;return[Ep+pos,Dh];}
,AOV:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E6;if(!this.HX)
this.XK(this);var Kg=this.CI.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kg)&&(Ad>0)))return E6;var Bu=this.Kj;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jc*2);if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N6>0)leading=(this.N6-font.Ascent)-font.Descent;var Dh=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AA7=(this.CI.charCodeAt(inx)||0)-1;var Bge=font.Yr(this.CI,inx+1,AA7);var A4d=font.
A65(this.CI,inx+1,AA7);var Ap2=Bge;var AaK=font.Ascent+font.Descent;var ABj=(Kg*((
font.Ascent+font.Descent)+leading))-leading;if(!Kg)ABj=AaK;if((((this.CI.charCodeAt((
inx+AA7)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AA7)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap1=(inx+1)+AA7;var Azh=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azi=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azh>=0)&&(Azh<Ap1))||((Azi>=0)&&(Azi<Ap1)))Ap2=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABj>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap2>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-Ap2;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
Ap2/2)|0);if(((Bu&0x20)===0x20))Dh=Dh+(height-ABj);else if(((Bu&0x100)===0x100))
Dh=((Dh+((height/2)|0))-((ABj/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dh=(Dh+((height/2)|0))-((ABj/2)|0);Ep=(Ep+A4d[0])+this.Jc;
Ap2=(Ap2+(A4d[2]-A4d[0]))-Bge;var B4;{var BfH=[Bd[0]+Ep,Bd[1]+Dh];B4=[].concat(BfH
,A.abf(BfH,[Ap2,AaK]));}return A.abh(B4,this.Br);},AC8:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HX)this.XK(this);var Kg=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kg))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XL=inx;var AtR=inx+(this.CI.charCodeAt(
inx)||0);var Ix=0x00;do{XL=XL+1;Ix=this.CI.charCodeAt(XL)||0;}while(((Ix===0xFEFF
)||(Ix===0x0A))&&(XL<=AtR));do{AtR=AtR-1;Ix=this.CI.charCodeAt(AtR)||0;}while(((
Ix===0xFEFF)||(Ix===0x0A))&&(XL<=AtR));var NF=A.abW(this.CI,XL,(AtR-XL)+1);var Apt;
for(Apt=NF.indexOf(String.fromCharCode(0xFEFF),0);Apt>=0;Apt=NF.indexOf(String.fromCharCode(
0xFEFF),Apt+1)){var XB=Apt+1;while((NF.charCodeAt(XB)||0)===0xFEFF)XB=XB+1;NF=A.
ab1(NF,Apt,XB-Apt);}return NF;},Dc:function(){var B;if((this.String===A.jV)||!this.
B6)return E6;if(!this.HX)this.XK(this);if(this.CI===A.jV)return E6;var leading=this.
B6.Leading;var AA5=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N6>0
){leading=(this.N6-this.B6.Ascent)-this.B6.Descent;AA5=this.N6;}if(A.aaX(this.Aml
,BD))this.Aml=[this.B6.A6U(this.CI),this.Aml[1]];this.Aml=[this.Aml[0],((this.CI.
charCodeAt(0)||0)*AA5)-leading];var Bu=this.Kj;var Bd=this.M;var At$=this.Jc;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dg=[At$,0,width-At$,height];var B4=[
].concat(Dg.slice(0,2),A.abf(Dg.slice(0,2),this.Aml));if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XC=
this.AcL;if(XC<=0)XC=width-(this.Jc*2);if(XC<0)XC=0;if(XC>(B4[2]-B4[0]))B4=A.abL(
B4,XC);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B4[3]-B4[1])>(Dg[3]-Dg[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B4[2]-B4[0])>(Dg[
2]-Dg[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B4[2]-B4[0])!==(Dg[2]-Dg[0]
)){if(((Bu&0x4)===0x4))B4=A.abM(B4,Dg[2]-(B4[2]-B4[0]));else if(((Bu&0x2)===0x2)
)B4=A.abM(B4,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[3]-B4[
1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Dg[3]-(B4[3]-B4[1]));else
if(((Bu&0x100)===0x100))B4=A.abO(B4,((Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B4[3]-B4[1
])/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B4=
A.abO(B4,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(
0,2));return A.abh(B4,this.Br);},_Init:function(aArg){A.Core.Eu._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lc();this.__proto__=A.Core.Eu;
A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuU={attrString:null,AttrSet:
null,String:A.jV,Kj:0x12,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dc();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CY.Biz(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiV],this
);},AiV:function(G){},XK:function(G){var B;var ALF;ALF=(B=this.M)[2]-B[0];if(ALF<
0)ALF=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5r
,0);if(!!this.attrString)this.attrString.Bom(this.AttrSet,this.String,ALF,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);
},Pg:function(G){A.pe([this,this.XK],this);},Bf_:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kj)return;this.Kj=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiV],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pg],this);},A9K:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bf_],this.AttrSet,0);A.z9([this,this.Pg
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bf_],this.AttrSet,0);A.zV([this,this.Pg],this.AttrSet,1);}A.pe([this,this.
Pg],this);},Dc:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E6;
if(!this.attrString)this.XK(this);if(!this.attrString)return E6;var Bu=this.Kj;var
C5=this.attrString.Bjw();var Dg=A.aaT(this.M,BD);var B4=[].concat(Dg.slice(0,2),
A.abf(Dg.slice(0,2),C5));if(!C5[0]||!C5[1])return E6;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Dg[
2]-Dg[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Dg[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Dg[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuU;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoc={AiI:
null,FJ:null,Aiv:0,Aiu:0,U9:A.wf,Cl:A.abi(4,3,0,null),AGS:A.wf,Tm:0,ApG:0,JV:function(
E){if(A.aaX(E,this.Ky))return;A.Core.ZB.JV.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tm=0x45;this.FJ=null;A.pe([this,this.Ajd
],this);},Kv:function(E){if(A.aaX(E,this.ME))return;A.Core.ZB.Kv.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tm=0x45;this.FJ=null;
A.pe([this,this.Ajd],this);},DC:function(E){if(A.aaX(E,this.ED))return;A.Core.ZB.
DC.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tm=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},DM:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZB.DM.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tm=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},A1F:function(
){return;},Ajd:function(G){var B;this.AiI=null;if(this.Tm===0x00)return;if(this.
Tm===0x45){var K4=A._NewObject(A.Graphics.Ax3,0);K4=K4.ANS(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K4){K4.AB7(0,0);this.Cl.Set(0,2,K4.UR*240
);K4.AB7(1,0);this.Cl.Set(1,2,K4.UR*240);K4.AB7(1,1);this.Cl.Set(2,2,K4.UR*240);
K4.AB7(0,1);this.Cl.Set(3,2,K4.UR*240);}this.A1F();}if((((this.Tm===0x4D)&&!!this.
FJ)&&!!this.U9[0])&&!!this.U9[1]){var Ai_=[].concat(BD,this.U9);var Ai9=this.AGS;
var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var Rz=Ai_[3]-Ai9[
1];this.FJ.Afc(Af8,D8);this.Cl.Set(0,0,this.FJ.P7+this.Aiu);this.Cl.Set(0,1,this.
FJ.P8+this.Aiv);this.Cl.Set(0,2,this.FJ.UR);this.FJ.Afc(Az,D8);this.Cl.Set(1,0,this.
FJ.P7+this.Aiu);this.Cl.Set(1,1,this.FJ.P8+this.Aiv);this.Cl.Set(1,2,this.FJ.UR);
this.FJ.Afc(Az,Rz);this.Cl.Set(2,0,this.FJ.P7+this.Aiu);this.Cl.Set(2,1,this.FJ.
P8+this.Aiv);this.Cl.Set(2,2,this.FJ.UR);this.FJ.Afc(Af8,Rz);this.Cl.Set(3,0,this.
FJ.P7+this.Aiu);this.Cl.Set(3,1,this.FJ.P8+this.Aiv);this.Cl.Set(3,2,this.FJ.UR);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Et=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.ME=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.Ky=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A1F();}this.
ApG=this.Tm;this.Tm=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},BnT:function(E){if(A.aaX(E,this.AGS))return;this.AGS=E;if((this.ApG!==0x45)&&(
this.Tm===0x00)){this.Tm=this.ApG;A.pe([this,this.Ajd],this);}},Aro:function(Fh){
var B;if(!!!this.AiI){this.AiI=A._NewObject(A.Graphics.A7r,0);this.AiI.ANS(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiI.Afc(Fh))return BD;
var Ap7=[].concat(BD,this.U9);var Ep=this.AiI.P7*(Ap7[2]-Ap7[0]);var Dh=this.AiI.
P8*(Ap7[3]-Ap7[1]);return A.abf([Ep|0,Dh|0],Ap7.slice(0,2));},Baa:function(Bb$,L8
){var B;this.AiI=null;if(!L8)throw new Error(IU);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.Ax3,0);this.FJ.Bhv(L8);this.Aiu=Bb$[0];this.Aiv=Bb$[1];this.ApG=0x4D;
this.Tm=0x00;if(!this.U9[0]||!this.U9[1])return;var Ai_=[].concat(BD,this.U9);var
Ai9=this.AGS;var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var
Rz=Ai_[3]-Ai9[1];this.FJ.Afc(Af8,D8);this.Cl.Set(0,0,this.FJ.P7+this.Aiu);this.Cl.
Set(0,1,this.FJ.P8+this.Aiv);this.Cl.Set(0,2,this.FJ.UR);this.FJ.Afc(Az,D8);this.
Cl.Set(1,0,this.FJ.P7+this.Aiu);this.Cl.Set(1,1,this.FJ.P8+this.Aiv);this.Cl.Set(
1,2,this.FJ.UR);this.FJ.Afc(Az,Rz);this.Cl.Set(2,0,this.FJ.P7+this.Aiu);this.Cl.
Set(2,1,this.FJ.P8+this.Aiv);this.Cl.Set(2,2,this.FJ.UR);this.FJ.Afc(Af8,Rz);this.
Cl.Set(3,0,this.FJ.P7+this.Aiu);this.Cl.Set(3,1,this.FJ.P8+this.Aiv);this.Cl.Set(
3,2,this.FJ.UR);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Et=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.ME=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.Ky=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1F();},_Init:
function(aArg){A.Core.ZB._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aoc.Cl;this.
__proto__=C.Aoc;this.U=0x3;},_Mark:function(D){var B;A.Core.ZB._Mark.call(this,D
);if((B=this.AiI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVQ={Fv:null,bitmap:null
,P:null,G9:255,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nz=aOffset[0];var NA=aOffset[1];var AE=[].concat(BD,this.
U9);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var BeC;var BeD;var BeE;var BeF;
var BAy=this.G9;BeC=BeD=BeE=BeF=BAy;var Aly=255|(255<<8)|(255<<16)|((((Ck*BeC)>>
8)&0xFF)<<24);var Alz=255|(255<<8)|(255<<16)|((((Ck*BeD)>>8)&0xFF)<<24);var ByR=
255|(255<<8)|(255<<16)|((((Ck*BeE)>>8)&0xFF)<<24);var ByS=255|(255<<8)|(255<<16)|((((
Ck*BeF)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E6,aOffset));CY.AhV(aClip,this.bitmap
,0,this.Cl.Get(0,0)+Nz,this.Cl.Get(0,1)+NA,this.Cl.Get(0,2),this.Cl.Get(1,0)+Nz,
this.Cl.Get(1,1)+NA,this.Cl.Get(1,2),this.Cl.Get(2,0)+Nz,this.Cl.Get(2,1)+NA,this.
Cl.Get(2,2),this.Cl.Get(3,0)+Nz,this.Cl.Get(3,1)+NA,this.Cl.Get(3,2),AE,Aly,Alz,
ByR,ByS,aBlend,true);},G4:function(CN){if(!this.P||!this.Fv)return null;var BN=(
A.Core.Aef.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqH.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fx=BD;var B0=this.Fv.Ab;while(!!B0&&(B0!==this.P)){
Fx=A.abe(Fx,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fv;if(!!BN&&!BN.Down)this.Fv=null;
if(!!BN){BN.H0=A.abf(this.Aro(BN.H0),Fx);BN.NU=A.abf(this.Aro(BN.NU),Fx);return X.
G4(BN);}if(!!D4){var BAC=A.abf(this.Aro(A.abe(D4.H0,D4.DG)),Fx);D4.H0=A.abf(this.
Aro(D4.H0),Fx);D4.NU=A.abf(this.Aro(D4.NU),Fx);D4.DG=A.abe(D4.H0,BAC);return X.G4(
D4);}return C.Aoc.G4.call(this,CN);},Yh:function(Db,BF,Oe,Aah,Ac6,Ac5){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Db);pos=this.Aro(pos
);var Ap7=[].concat(BD,this.U9);if(!A.wa(Ap7,pos))return null;var JE=this.P.Yh(A.
abh(A.abh([0,0,Db[2]-Db[0],Db[3]-Db[1]],pos),this.P.M.slice(0,2)),BF,Oe,Aah,null
,Ac5);if(!!JE)this.Fv=JE.Cj;else this.Fv=null;if(!!this.Fv)return A._NewObject(A.
Core.Au2,0).Initialize(this,BD);return null;},RK:function(G){var B;var BeG=this.
U9;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
U9=this.bitmap.FrameSize;else this.U9=BD;if(((A.aaX(BeG,this.U9)||((this.ApG===0x45
)&&(this.Tm===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApG!==0x45)&&(this.Tm===0x00))&&!A.aaX(BeG,this.U9)){this.Tm=this.ApG;
A.pe([this,this.Ajd],this);}},C3:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},BmY:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Is);if(!!this.P){A.
z9([this,this.RK],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RK
],E,0);this.bitmap=E.FG;}this.RK(this);},Awo:function(){return this.G9;},_Init:function(
aArg){C.Aoc._Init.call(this,aArg);this.__proto__=C.AVQ;},_Mark:function(D){var B;
C.Aoc._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aeq={Hz:null,AQ:0xFFFFFFFF,DG:A.wf
,AOC:false,Lc:function(){this.A1Y();},Ko:function(CY,aClip,aOffset,Ck,aBlend){if(
!this.Hz)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ck=Ck+1;DD=DO=DI=DN=B3;
if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.
Aeq(aClip,this.Hz,A.abh(this.M,aOffset),this.AOC,this.DG,DD,DO,DN,DI,true,true,0
);},A1Y:function(){return;},Aje:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},AnG:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},BmT:function(E){var B;if(E===this.AOC)return;this.
AOC=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Zv:function(
E){var B;if(E===this.Hz)return;if(!!this.Hz)A.z9([this,this.Aje],this.Hz,0);this.
Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.Hz,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.Cr(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aeq;},
_Done:function(){this.Lc();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hp={Hz:null,AQ:0xFFFFFFFF
,DG:A.wf,Width:1,Lc:function(){this.A1Y();},Ko:function(CY,aClip,aOffset,Ck,aBlend
){if(!this.Hz)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ck=Ck+1;DD=DO=DI=
DN=B3;if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&
0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>
24)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<
24);}CY.Hp(aClip,this.Hz,A.abh(this.M,aOffset),false,this.DG,this.Width,0,0,0,3,
DD,DO,DN,DI,true,true);},A1Y:function(){return;},Aje:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.
M);},AnG:function(E){var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Nm:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},Zv:function(E){var B;if(E===this.Hz)return;if(!!this.
Hz)A.z9([this,this.Aje],this.Hz,0);this.Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.
Hz,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cr(0x1,0x0);else this.Cr(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hp;},_Done:function(){this.Lc();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEL={A4_:0x1,A49:0x2,A4$:0x4,A5c:0x8,A5b:0x10,A5a:0x20,BF4:0x40,BF5:0x80,BGd:
0x100};C.BGi={A4_:0x1,A49:0x2,A4$:0x4,A5c:0x8,A5b:0x10,A5a:0x20,BDh:0x40,BDg:0x80
,BDm:0x100};C.BFo={Normal:0,BFY:1,BFW:2,BFX:3};
C._Init=function(){C.C7.__proto__=A.Core.Akh;C.AL.__proto__=A.Core.Eu;C.BU.__proto__=
A.Core.Eu;C.NT.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuU.__proto__=A.Core.Eu;C.Aoc.__proto__=A.Core.ZB;C.AVQ.__proto__=C.Aoc;C.Aeq.
__proto__=A.Core.Eu;C.Hp.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */