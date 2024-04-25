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
C.C7={KJ:null,Alb:1,Ala:1,AQ:0xFFFFFFFF,Ko:function(CY,aClip,aOffset,Ck,aBlend){var
B;var Agt=this.Ala;var Agu=this.Alb;var AdB=A.abf(this.Et,aOffset);var AdC=A.abf(
this.ED,aOffset);var Aly;var Alz;var B3=this.AQ;if(A.aaX(AdB,AdC))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;Aly=Alz=B3;if(Ck<256){Aly=(Aly&0x00FFFFFF)|((((
Ck*((Aly>>24)&0xFF))>>8)&0xFF)<<24);Alz=(Alz&0x00FFFFFF)|((((Ck*((Alz>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agt===1)&&(Agu===1))CY.Au9(aClip,AdB,AdC,Aly,Alz,aBlend);else
CY.BiK(aClip,AdB,AdC,Agt,Agu,Aly,Alz,aBlend);},GetExtent:function(){var Agt=this.
Ala;var Agu=this.Alb;var AdB=this.Et;var AdC=this.ED;if(((Agt===1)&&(Agu===1))||
A.aaX(AdB,AdC))return A.Core.Akh.GetExtent.call(this);var AiD=Agt/2;var AiE=Agu/
2;var Apl=AdB[0];var Apm=AdB[1];var Apn=AdC[0];var Apo=AdC[1];var Ka=Apn-Apl;var
Kb=Apo-Apm;var IZ=Math.sqrt((Ka*Ka)+(Kb*Kb));Ka=Ka/IZ;Kb=Kb/IZ;var Bc1=Apl+(Kb*AiD
);var Bc2=Apm-(Ka*AiD);var AJD=Apn+(Kb*AiE);var AJE=Apo-(Ka*AiE);var AJF=Apn-(Kb
*AiE);var AJG=Apo+(Ka*AiE);var AJH=Apl-(Kb*AiD);var AJI=Apm+(Ka*AiD);var left=Bc1;
var right=Bc1;var top=Bc2;var bottom=Bc2;if(AJD<left)left=AJD;if(AJF<left)left=AJF;
if(AJH<left)left=AJH;if(AJD>right)right=AJD;if(AJF>right)right=AJF;if(AJH>right)
right=AJH;if(AJE<top)top=AJE;if(AJG<top)top=AJG;if(AJI<top)top=AJI;if(AJE>bottom
)bottom=AJE;if(AJG>bottom)bottom=AJG;if(AJI>bottom)bottom=AJI;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Ce));return Az;
},RL:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A_Z:function(E){var B;if(E<1)E=1;if(E===this.Alb)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alb=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ala!==1))&&!this.KJ){
this.KJ=A.aaL(A.aci.AsW);if(this.KJ.N1)A.zV([this,this.RL],this.KJ,0);}if(((E===
1)&&(this.Ala===1))&&!!this.KJ){if(this.KJ.N1)A.z9([this,this.RL],this.KJ,0);this.
KJ=null;}},A_Y:function(E){var B;if(E<1)E=1;if(E===this.Ala)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ala=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alb!==1))&&!this.
KJ){this.KJ=A.aaL(A.aci.AsW);if(this.KJ.N1)A.zV([this,this.RL],this.KJ,0);}if(((
E===1)&&(this.Alb===1))&&!!this.KJ){if(this.KJ.N1)A.z9([this,this.RL],this.KJ,0);
this.KJ=null;}},Nm:function(E){var B;if(E<1)E=1;if((E===this.Ala)&&(E===this.Alb
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ala=E;this.Alb=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KJ){this.KJ=A.aaL(A.aci.AsW);if(this.KJ.N1)A.zV([this,this.
RL],this.KJ,0);}if((E===1)&&!!this.KJ){if(this.KJ.N1)A.z9([this,this.RL],this.KJ
,0);this.KJ=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.Akh._Init.call(this,aArg);this.__proto__=C.C7;},_Mark:function(D){var
B;A.Core.Akh._Mark.call(this,D);if((B=this.KJ)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANp:0xFFFFFFFF,ANq:0xFFFFFFFF,ANu:0xFFFFFFFF
,ANt:0xFFFFFFFF,AQ:0xFFFFFFFF,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;var DD=
this.ANt;var DO=this.ANu;var DI=this.ANp;var DN=this.ANq;var B3=this.AQ;aBlend=aBlend&&((
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
function(E){var B;if(E===this.ANp)return;this.ANp=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Awz:function(E){var B;if(E===this.ANq)return;this.ANq=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},AwB:function(E){var B;
if(E===this.ANu)return;this.ANu=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},AwA:function(E){var B;if(E===this.ANt)return;this.ANt=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fq:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BU={Width:1,AQ:0xFFFFFFFF,Ko:function(CY
,aClip,aOffset,Ck,aBlend){var B;var DD;var DO;var DI;var DN;var B3=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DD=DO=DI=DN=B3;if(Ck<256){DD=(DD&0x00FFFFFF
)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF
))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF))>>8)&0xFF)<<24);DN=(
DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.BiI(aClip,A.abh(this.M
,aOffset),this.Width,DD,DO,DN,DI,aBlend);},Nm:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BU;},_className:"Views::Border"};C.NT={timer:null,Al:null,MQ:-1,AQ:0xFFFFFFFF,Au_:
0x1F,TT:0,Dx:0,Anm:A.wf,VC:false,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;var
Nw=this.TT;if(this.MQ>=0)Nw=this.MQ;if(!this.Al||(Nw>=this.Al.NoOfFrames))return;
this.Al.Update();var DD;var DO;var DN;var DI;var B3=this.AQ;var Kh=(((Ck+1)*255)>>
8)+1;var Oj=this.Au_;var Az=A.abh(this.M,aOffset);var AK5=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anm);aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kh<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kh)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}if(((this.
Anm[0]>0)&&(AK5[0]>0))&&!((Oj&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AK5[
0];if(((Oj&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oj=Oj|0x4;}else if(((Oj&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oj=Oj|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oj=Oj|0x5;}}if(((this.Anm[1]>0)&&(AK5[1]>0))&&!((Oj&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AK5[1];if(((Oj&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oj=Oj|0x8;}else if(((Oj&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oj=Oj|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oj=Oj|
0xA;}}CY.BiH(aClip,this.Al,Nw,Az,Oj,DD,DO,DN,DI,aBlend);},RL:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mg:function(G){var B;var Nw=
this.MQ;var Tq=0;if(!!this.Al)Tq=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MQ<0))&&(Tq>0))this.Dx=this.timer.Bs-(this.TT*this.Al.FrameDelay);if(
!!this.timer&&(Tq>0)){var Av=(this.timer.Bs-this.Dx)|0;Nw=(Av/this.Al.FrameDelay
)|0;if(Av>=Tq){Nw=Nw%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tq);}}if(((Nw!==
this.MQ)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MQ=Nw;if(!Tq&&
!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zr:function(E){var B;if(this.VC===E)return;this.VC=E;this.MQ=-1;if(
!E&&!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mg],this.timer,0);A.pe([this,this.
Mg],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A9_:function(
E){var B;if(E===this.Au_)return;this.Au_=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TT)&&(this.MQ===-1)
)return;this.TT=E;if(!this.timer)this.MQ=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N1)A.z9([this,this.RL],this.Al,0);this.Al=E;this.MQ=-1;if(!!E&&E.N1)A.zV([this,this.
RL],E,0);if(this.VC){this.Zr(false);this.Zr(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A_o:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anm))return;this.Anm=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Au_&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NT;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MQ:0,AQ:0xFFFFFFFF
,Kj:0x12,TT:0,G9:255,VC:false,Aa4:false,Ko:function(CY,aClip,aOffset,Ck,aBlend){
var B;var Nw=this.TT;if(this.MQ>=0)Nw=this.MQ;if(!this.Al||(Nw>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dc();var C5=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DD;var DO;var DN;var DI;var B3=this.AQ;var Kh=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DD=DO=DI=DN=B3;if(Kh<256
){DD=(DD&0x00FFFFFF)|((((((DD>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((
DO>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kh)>>8)&
0xFF)<<24);DI=(DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C5))CY.A51(aClip,this.Al,Nw,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DD,DO,DN,DI,aBlend);else CY.Bo5(aClip,this.Al,Nw
,A.abh(AE,aOffset),[].concat(BD,C5),DD,DO,DN,DI,aBlend,true);},RL:function(G){var
B;if(((this.Aa4&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dc());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mg:function(
G){var B;var Nw=this.MQ;var Tq=0;if(!!this.Al)Tq=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MQ<0))&&(Tq>0))this.Dx=this.timer.Bs-(this.TT*this.Al.FrameDelay
);if(!!this.timer&&(Tq>0)){var Av=(this.timer.Bs-this.Dx)|0;Nw=(Av/this.Al.FrameDelay
)|0;if(Av>=Tq){Nw=Nw%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tq);}}if(((Nw!==
this.MQ)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MQ=Nw;if(!Tq&&
!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}},Ja:function(E
){if(E===this.Aa4)return;this.Aa4=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dc());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zr:function(
E){var B;if(this.VC===E)return;this.VC=E;this.MQ=-1;if(!E&&!!this.timer){A.z9([this
,this.Mg],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Aej);A.zV([this,this.Mg],this.timer,0);A.pe([this,this.Mg],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kj)return;
this.Kj=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TT)&&(this.MQ===-1))return;this.TT=E;if(!this.timer
)this.MQ=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N1)A.z9([this,this.RL],this.
Al,0);this.Al=E;this.MQ=-1;if(!!E&&E.N1)A.zV([this,this.RL],E,0);if(this.VC){this.
Zr(false);this.Zr(true);}if(((this.Aa4&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dc());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
C3:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Dc:function(){var
B;if(!this.Al)return E7;var Bu=this.Kj;var C5=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C5[0]||!C5[1])return E7;var Dg=[0,0
,width,height];var B4=Dg;if(((Bu&0x40)===0x40)){var A4h=((((Dg[2]-Dg[0])<<16)+((
C5[0]/2)|0))/C5[0])|0;var AA$=((((Dg[3]-Dg[1])<<16)+((C5[1]/2)|0))/C5[1])|0;var Ai2=
A4h;if(AA$>Ai2)Ai2=AA$;B4=A.abL(B4,((C5[0]*Ai2)+32768)>>16);B4=A.abI(B4,((C5[1]*
Ai2)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4h=((((Dg[2]-Dg[0])<<16)+((C5[
0]/2)|0))/C5[0])|0;var AA$=((((Dg[3]-Dg[1])<<16)+((C5[1]/2)|0))/C5[1])|0;var Ai2=
A4h;if(AA$<Ai2)Ai2=AA$;B4=A.abL(B4,((C5[0]*Ai2)+32768)>>16);B4=A.abI(B4,((C5[1]*
Ai2)+32768)>>16);}else if(!((Bu&0x100)===0x100))B4=A.abK(B4,C5);if((B4[2]-B4[0])
!==(Dg[2]-Dg[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Dg[2]-(B4[2]-B4[0]));else if(((
Bu&0x2)===0x2))B4=A.abM(B4,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B4[2]-B4[0])/2)|0));
}if((B4[3]-B4[1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Dg[3]-(B4[3
]-B4[1]));else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((
B4[3]-B4[1])/2)|0));}B4=A.abh(B4,Bd.slice(0,2));return B4;},Bk6:function(){return this.
AQ;},ASG:function(){return this.TT;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B6:null,Em:null,CI:
A.jV,String:A.jV,Oh:null,Aml:A.wf,Jd:0,N7:0,AcL:0,Br:A.wf,Kj:0x12,AQ:0xFFFFFFFF,
AfA:false,Aa4:false,Yo:false,AOc:false,HY:false,Lc:function(){if(!!this.Oh){this.
A2l(this.Oh);this.Oh=null;}},Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;if((this.
CI===A.jV)||!this.B6)return;var Bu=this.Kj;var font=this.B6;var Dg=A.abh(this.M,
aOffset);var DD;var DO;var DN;var DI;var col=this.AQ;var Kh=(((Ck+1)*255)>>8)+1;
var Kg=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Dc(),aOffset);var Bq=[Dg[0]-AE[
0],(Dg[1]-AE[1])-font.Ascent];if(Kg<1)return;DD=DO=DI=DN=col;if(Kh<256){DD=(DD&0x00FFFFFF
)|((((((DD>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*
Kh)>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((((DN>>24)&0xFF)*Kh)>>8)&0xFF)<<24);DI=(
DI&0x00FFFFFF)|((((((DI>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kg===1)&&!((Bu&0x40)===
0x40)){CY.A6p(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Dg,Bq,0,0,DD,DO,
DN,DI,true);return;}var leading=font.Leading;if(this.N7>0)leading=(this.N7-font.
Ascent)-font.Descent;var AaM=(font.Ascent+font.Descent)+leading;var By0=aClip[1]-
AE[1];var By1=aClip[3]-AE[1];var A1z=AE[2]-AE[0];var Dh=0;var O=1;var B3=this.CI.
charCodeAt(1)||0;while(((Dh+AaM)<By0)&&(B3>0)){O=O+B3;Dh=Dh+AaM;B3=this.CI.charCodeAt(
O)||0;}while((Dh<By1)&&(B3>0)){var Mc=A.abe(Bq,[0,Dh]);var Ame=0;var Pd=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B3)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B3)||0)!==0x00))Pd=true;if(Pd&&!!(Bu&0x6
)){var Ap1=O+B3;var Azh=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azi=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Azh<0)||(Azh>=Ap1))&&((Azi<0)||(Azi>=
Ap1)))Pd=false;}if(Pd)Ame=A1z;else if(((Bu&0x4)===0x4))Mc=[(Mc[0]-A1z)+font.Yt(this.
CI,O+1,B3-1),Mc[1]];else if(((Bu&0x2)===0x2))Mc=[(Mc[0]-((A1z/2)|0))+((font.Yt(this.
CI,O+1,B3-1)/2)|0),Mc[1]];CY.A6p(aClip,font,this.CI,O+1,B3-1,Dg,Mc,Ame,0,DD,DO,DN
,DI,true);O=O+B3;Dh=Dh+AaM;B3=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bgj;Bgj=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bgj&&
!this.AcL)&&this.AfA)&&this.HY)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
HY=false;A.pe([this,this.Pg],this);}if(((this.Yo&&this.HY)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.HY=false;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiV],this);},ByS:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},ByR:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2l:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzc:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiV:function(G){A.pe(this.Em
,this);},Pg:function(G){A.pe([this,this.XM],this);},XM:function(G){var B;if(this.
HY)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XE=-1;var
font=this.B6;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfA){
if(this.AcL>0)XE=this.AcL;else if(!this.Aa4)XE=width-(this.Jd*2);else XE=width;if(
XE<0)XE=1;}if(!!this.Oh){this.A2l(this.Oh);this.Oh=null;}this.HY=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOc)this.Oh=this.Bzc(length
);this.CI=font.Bor(this.String,0,XE,length,this.Oh);if(!!this.Oh&&!this.BjY()){this.
A2l(this.Oh);this.Oh=null;}}else this.CI=A.jV;this.Aml=BD;if(((this.Yo&&(this.CI
!==A.jV))&&!this.Aa4)&&!!font){var Bu=this.Kj;var leading=font.Leading;var IE=this.
CI;var AKZ=this.Aj6();if(((Bu&0x80)===0x80)){if(AKZ)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.N7>0)leading=(this.N7-font.Ascent)-font.Descent;var AA6=(font.
Ascent+font.Descent)+leading;var Kg=IE.charCodeAt(0)||0;var AlW=((height+leading
)/AA6)|0;var A1N=false;var AJL=false;if(AlW<=0)AlW=1;if(Kg>AlW){var Bf=0;var AA7=
0;var AKX=Kg-1;var K3;var Nx=IE.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))AA7=Kg-AlW;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){AA7=((Kg-AlW)/2)|0;AKX=(AA7+AlW)-1;}else
AKX=AlW-1;A1N=AA7>0;AJL=AKX<(Kg-1);for(K3=1;Bf<AA7;Bf=Bf+1)K3=K3+(IE.charCodeAt(
K3)||0);if(AJL)for(Nx=K3;Bf<AKX;Bf=Bf+1)Nx=Nx+(IE.charCodeAt(Nx)||0);if(A1N){var
IZ=IE.charCodeAt(K3)||0;tmp=(Hr+A.abW(IE,K3,IZ))+Hr;tmp=A.abQ(tmp,0,(IZ+2)&0xFFFF
);K3=K3+IZ;if((tmp.charCodeAt(IZ)||0)===0x0A){tmp=A.abQ(tmp,IZ,0xFEFF);tmp=A.abQ(
tmp,IZ+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IE,K3,Nx-K3);if(AJL&&(
Nx>=K3)){var IZ=IE.charCodeAt(Nx)||0;var QC=(Hr+A.abW(IE,Nx,IZ))+Hr;QC=A.abQ(QC,
0,(IZ+2)&0xFFFF);QC=A.abQ(QC,1,0xFEFF);if((QC.charCodeAt(IZ)||0)===0x0A){QC=A.abQ(
QC,IZ,0xFEFF);QC=A.abQ(QC,IZ+1,0x0A);}if((QC.charCodeAt(2)||0)===0x0A){QC=A.abQ(
QC,2,0xFEFF);QC=A.abQ(QC,1,0x0A);}else QC=A.abQ(QC,1,0xFEFF);tmp=tmp+QC;}IE=String.
fromCharCode(AlW&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKw=width-(this.Jd*2);if(this.
AfA&&(this.AcL>0))AKw=this.AcL;Kg=IE.charCodeAt(0)||0;for(;Bf<Kg;Bf=Bf+1){var Amb=
A1N&&!Bf;var Amc=AJL&&(Bf===(Kg-1));var Xu=false;var Xv=false;var Aun=AKZ;if((AKZ&&
Amb)&&!Amc){Amb=false;Amc=true;}else if((AKZ&&Amc)&&!Amb){Amc=false;Amb=true;}var
XN=inx+1;var IZ=IE.charCodeAt(inx)||0;var K3=XN;var Nx=(XN+IZ)-2;var A2A=-1;var A2B=-
1;if(!this.AfA&&(font.Yt(IE,XN,IZ-1)>AKw)){var AoX=Bu;if(((AoX&0x2)===0x2)&&!!(AoX&
0x5))AoX&=~0x2;if(((AoX&0x2)===0x2))AoX&=~0x5;if(((AoX&0x4)===0x4))Xu=true;else if(((
AoX&0x2)===0x2)){Xu=true;Xv=true;}else Xv=true;}if((IE.charCodeAt(K3)||0)===0x0A
)K3=K3+1;if((IE.charCodeAt(Nx)||0)===0x0A)Nx=Nx-1;while(Xu&&((IE.charCodeAt(K3)||
0)===0xFEFF))K3=K3+1;while(Xv&&((IE.charCodeAt(Nx)||0)===0xFEFF))Nx=Nx-1;Xu=Xu&&
!Amc;Xv=Xv&&!Amb;while((((Xu||Xv)||Amb)||Amc)&&(K3<Nx)){if((Xu&&(Aun||!Xv))||Amb
){if(A2A>0)IE=A.abQ(IE,A2A,0xFEFF);IE=A.abQ(IE,K3,0x2026);A2A=K3;K3=K3+1;Aun=!Aun;
Amb=false;if(font.Yt(IE,XN,IZ-1)<=AKw){Xu=false;Xv=false;}else Xu=Xu||!Xv;}if((Xv&&(
!Aun||!Xu))||Amc){if(A2B>0)IE=A.abQ(IE,A2B,0xFEFF);IE=A.abQ(IE,Nx,0x2026);A2B=Nx;
Nx=Nx-1;Aun=!Aun;Amc=false;if(font.Yt(IE,XN,IZ-1)<=AKw){Xu=false;Xv=false;}else Xv=
Xv||!Xu;}}inx=inx+IZ;}this.Aml=[font.A6W(IE),((IE.charCodeAt(0)||0)*AA6)-leading
];this.CI=IE;}if(this.Aa4&&(this.CI!==A.jV)){var At$=[this.Jd,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dc(),At$),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);},Bmy:function(
E){if(E===this.AOc)return;this.AOc=E;this.CI=A.jV;this.HY=false;A.pe([this,this.
Pg],this);},Hn:function(E){if(E<0)E=0;if(this.Jd===E)return;this.Jd=E;this.CI=A.
jV;this.HY=false;A.pe([this,this.Pg],this);},Aw7:function(E){var B;if(E<0)E=0;if(
this.N7===E)return;this.N7=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yo){this.CI=A.jV;this.HY=false;A.pe([this,this.Pg],this);}if(this.Aa4&&
this.HY)this.H(A.abg(this.Dc(),this.Br));if(this.HY)A.pe([this,this.AiV],this);}
,Bmx:function(E){if(E===this.Yo)return;this.Yo=E;if(((this.AfA&&!!!this.AcL)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.HY=false;
A.pe([this,this.Pg],this);},Q7:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcL&&this.AfA)||!!E)||this.Yo)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Ja:function(E){if(E===this.Aa4)return;this.Aa4=E;if(E&&this.Yo){this.CI=
A.jV;this.HY=false;A.pe([this,this.Pg],this);}if(E&&this.HY){var At$=[this.Jd,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dc(),At$),this.Br));this.U=this.U&~
0x2000;}},Bn_:function(E){if(E<0)E=0;if(E===this.AcL)return;this.AcL=E;if(this.AfA&&
this.HY){this.CI=A.jV;this.HY=false;A.pe([this,this.Pg],this);}if(((!!!E&&this.AfA
)||this.Yo)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},KS:function(
E){if(E===this.AfA)return;this.AfA=E;if(this.HY){this.CI=A.jV;this.HY=false;A.pe([
this,this.Pg],this);}if(((E&&!!!this.AcL)||this.Yo)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gb:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.HY)A.pe([this
,this.AiV],this);},A6:function(E){var B;if(E===this.Kj)return;this.Kj=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yo){this.CI=A.jV;this.HY=false;
A.pe([this,this.Pg],this);}if(this.HY)A.pe([this,this.AiV],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.HY=false;A.pe([this,this.
Pg],this);},S:function(E){if(E===this.B6)return;this.B6=E;this.CI=A.jV;this.HY=false;
A.pe([this,this.Pg],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj6:function(
){if(!this.HY)this.XM(this);if(!this.Oh)return false;var result=false;var bidi=this.
Oh;result=A.v2(bidi);return result;},BjY:function(){if(!this.HY)this.XM(this);if(
!this.Oh)return false;var result=false;var bidi=this.Oh;result=A.zZ(bidi);return result;
},AGX:function(aIndex){if(((this.String===A.jV)||!this.B6)||this.Yo)return BD;if(
!this.HY)this.XM(this);if(aIndex<0)aIndex=0;var BAp=(this.CI.charCodeAt(0)||0)-1;
var Mf=this.CI.charCodeAt(1)||0;var inx=1;var Ai7=2;var Bf=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bf<BAp)&&((inx+Mf)<=aIndex)){inx=inx+Mf;Bf=Bf+1;Ai7=Ai7+1;
aIndex=aIndex+1;Mf=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Mf))aIndex=inx+Mf;
if(!!this.Oh)aIndex=(inx+this.ByR(this.Oh,(inx+1)-Ai7,(inx+Mf)-Ai7,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Iy=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(Iy!==0xFEFF)&&(Iy!==0x0A);}return[col,Bf];},AnS:function(AoM){if(((this.String===
A.jV)||!this.B6)||this.Yo)return 0;if(!this.HY)this.XM(this);var Bf=AoM[1];var col=
AoM[0];var inx=1;var Ai7=2;var Kg=this.CI.charCodeAt(0)||0;var Mf=this.CI.charCodeAt(
1)||0;if(Bf>=Kg){Bf=Kg-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mf>0)){inx=inx+Mf;Bf=Bf-1;Ai7=Ai7+1;Mf=this.CI.charCodeAt(inx)||0;
}var XD=inx;var AKY=(inx-Ai7)+1;var Ap1=(AKY+Mf)-1;var AAS=false;while((col>=0)&&(
Mf>1)){var Iy=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Mf=Mf-1;AAS=(Iy===0xFEFF)||(
Iy===0x0A);if(!AAS){col=col-1;XD=inx;}}if((!AAS&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AAS=true;if(AAS)XD=XD+1;XD=XD-Ai7;if(!!this.Oh)XD=AKY+this.ByS(
this.Oh,AKY,Ap1,XD-AKY);return XD;},AT8:function(K0){var B;if((this.String===A.jV
)||!this.B6)return BD;if(!this.HY)this.XM(this);var AE=this.Dc();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B6;var Bu=this.Kj;var Kg=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(K0[1]<AE[1])K0=[K0[0],AE[1]];if(K0[1]>=AE[3])K0=[
K0[0],AE[3]-1];if(this.N7>0)leading=(this.N7-font.Ascent)-font.Descent;var AaM=(
font.Ascent+font.Descent)+leading;var Bf=((K0[1]-AE[1])/AaM)|0;var NF=this.AC9(Bf
);var Mf=NF.length;var Pd=false;if(((Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bf<(Kg-1)))Pd=true;if((Pd&&(
NF.indexOf(String.fromCharCode(0x20),0)<0))&&(NF.indexOf(String.fromCharCode(0xA0
),0)<0))Pd=false;if(Pd){var inx=1;var Ap0=Bf;while(Ap0>0){inx=inx+(this.CI.charCodeAt(
inx)||0);Ap0=Ap0-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pd=false;}var Ame=0;var Ep=0;if(
Pd)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.Yt(NF,0,Mf);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.Yt(NF,0,Mf)/2)|0);var col=font.
BjA(NF,0,Mf,(K0[0]-AE[0])-Ep,Ame);if(col<0)col=0;return[col,Bf];},Afh:function(AoM
){var B;if((this.String===A.jV)||!this.B6)return BD;if(!this.HY)this.XM(this);var
Kg=this.CI.charCodeAt(0)||0;var font=this.B6;var Bu=this.Kj;var Bf=AoM[1];var col=
AoM[0];if(Bf>=Kg){Bf=Kg-1;col=this.CI.length;}if(Bf<0){Bf=0;col=0;}var NF=this.AC9(
Bf);var Mf=NF.length;var AE=this.Dc();var Pd=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bf<(Kg-1)))Pd=true;if((Pd&&(NF.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NF.indexOf(String.fromCharCode(0xA0),0)<0))Pd=false;if(Pd){var inx=1;var
Ap0=Bf;while(Ap0>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ap0=Ap0-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pd=false;}if(this.N7>0)leading=(this.N7-font.Ascent)-font.
Descent;var Dh=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ame=0;var Ep=AE[0];if(Pd)Ame=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
Yt(NF,0,Mf);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.Yt(NF,
0,Mf)/2)|0);var pos=font.Bjw(NF,0,Mf,col,Ame);if(pos<0)pos=0;return[Ep+pos,Dh];}
,AOU:function(Ad){var B;if((this.String===A.jV)||!this.B6)return E7;if(!this.HY)
this.XM(this);var Kg=this.CI.charCodeAt(0)||0;var font=this.B6;if((Ad<0)||((Ad>=
Kg)&&(Ad>0)))return E7;var Bu=this.Kj;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.Jd*2);if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
N7>0)leading=(this.N7-font.Ascent)-font.Descent;var Dh=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
AA8=(this.CI.charCodeAt(inx)||0)-1;var Bgk=font.Yt(this.CI,inx+1,AA8);var A4d=font.
A67(this.CI,inx+1,AA8);var Ap2=Bgk;var AaM=font.Ascent+font.Descent;var ABk=(Kg*((
font.Ascent+font.Descent)+leading))-leading;if(!Kg)ABk=AaM;if((((this.CI.charCodeAt((
inx+AA8)+1)||0)===0x00)||((this.CI.charCodeAt(inx+AA8)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap1=(inx+1)+AA8;var Azh=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azi=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azh>=0)&&(Azh<Ap1))||((Azi>=0)&&(Azi<Ap1)))Ap2=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABk>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap2>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-Ap2;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
Ap2/2)|0);if(((Bu&0x20)===0x20))Dh=Dh+(height-ABk);else if(((Bu&0x100)===0x100))
Dh=((Dh+((height/2)|0))-((ABk/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Dh=(Dh+((height/2)|0))-((ABk/2)|0);Ep=(Ep+A4d[0])+this.Jd;
Ap2=(Ap2+(A4d[2]-A4d[0]))-Bgk;var B4;{var BfN=[Bd[0]+Ep,Bd[1]+Dh];B4=[].concat(BfN
,A.abf(BfN,[Ap2,AaM]));}return A.abh(B4,this.Br);},AC9:function(Ad){if((this.String===
A.jV)||!this.B6)return A.jV;if(!this.HY)this.XM(this);var Kg=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B6||(Ad<0))||(Ad>=Kg))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XN=inx;var AtR=inx+(this.CI.charCodeAt(
inx)||0);var Iy=0x00;do{XN=XN+1;Iy=this.CI.charCodeAt(XN)||0;}while(((Iy===0xFEFF
)||(Iy===0x0A))&&(XN<=AtR));do{AtR=AtR-1;Iy=this.CI.charCodeAt(AtR)||0;}while(((
Iy===0xFEFF)||(Iy===0x0A))&&(XN<=AtR));var NF=A.abW(this.CI,XN,(AtR-XN)+1);var Apt;
for(Apt=NF.indexOf(String.fromCharCode(0xFEFF),0);Apt>=0;Apt=NF.indexOf(String.fromCharCode(
0xFEFF),Apt+1)){var XD=Apt+1;while((NF.charCodeAt(XD)||0)===0xFEFF)XD=XD+1;NF=A.
ab1(NF,Apt,XD-Apt);}return NF;},Dc:function(){var B;if((this.String===A.jV)||!this.
B6)return E7;if(!this.HY)this.XM(this);if(this.CI===A.jV)return E7;var leading=this.
B6.Leading;var AA6=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.N7>0
){leading=(this.N7-this.B6.Ascent)-this.B6.Descent;AA6=this.N7;}if(A.aaX(this.Aml
,BD))this.Aml=[this.B6.A6W(this.CI),this.Aml[1]];this.Aml=[this.Aml[0],((this.CI.
charCodeAt(0)||0)*AA6)-leading];var Bu=this.Kj;var Bd=this.M;var At$=this.Jd;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dg=[At$,0,width-At$,height];var B4=[
].concat(Dg.slice(0,2),A.abf(Dg.slice(0,2),this.Aml));if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XE=
this.AcL;if(XE<=0)XE=width-(this.Jd*2);if(XE<0)XE=0;if(XE>(B4[2]-B4[0]))B4=A.abL(
B4,XE);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B4[3]-B4[1])>(Dg[3]-Dg[1])))Bu&=~0x110;
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
1]>=AE[3]))return;CY.BiF(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pg],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiV],this
);},AiV:function(G){},XM:function(G){var B;var ALE;ALE=(B=this.M)[2]-B[0];if(ALE<
0)ALE=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5s
,0);if(!!this.attrString)this.attrString.Boq(this.AttrSet,this.String,ALE,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiV],this);
},Pg:function(G){A.pe([this,this.XM],this);},Bge:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kj)return;this.Kj=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiV],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pg],this);},A9N:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bge],this.AttrSet,0);A.z9([this,this.Pg
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bge],this.AttrSet,0);A.zV([this,this.Pg],this.AttrSet,1);}A.pe([this,this.
Pg],this);},Dc:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E7;
if(!this.attrString)this.XM(this);if(!this.attrString)return E7;var Bu=this.Kj;var
C5=this.attrString.BjB();var Dg=A.aaT(this.M,BD);var B4=[].concat(Dg.slice(0,2),
A.abf(Dg.slice(0,2),C5));if(!C5[0]||!C5[1])return E7;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B4[2]-B4[0])!==(Dg[
2]-Dg[0])){if(((Bu&0x4)===0x4))B4=A.abM(B4,Dg[2]-(B4[2]-B4[0]));else if(((Bu&0x2
)===0x2))B4=A.abM(B4,(Dg[0]+(((Dg[2]-Dg[0])/2)|0))-(((B4[2]-B4[0])/2)|0));}if((B4[
3]-B4[1])!==(Dg[3]-Dg[1])){if(((Bu&0x20)===0x20))B4=A.abO(B4,Dg[3]-(B4[3]-B4[1])
);else if(((Bu&0x10)===0x10))B4=A.abO(B4,(Dg[1]+(((Dg[3]-Dg[1])/2)|0))-(((B4[3]-
B4[1])/2)|0));}return B4;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuU;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoc={AiI:
null,FJ:null,Aiv:0,Aiu:0,U_:A.wf,Cl:A.abi(4,3,0,null),AGT:A.wf,Tn:0,ApG:0,JX:function(
E){if(A.aaX(E,this.Kz))return;A.Core.ZD.JX.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tn=0x45;this.FJ=null;A.pe([this,this.Ajd
],this);},Kw:function(E){if(A.aaX(E,this.ME))return;A.Core.ZD.Kw.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tn=0x45;this.FJ=null;
A.pe([this,this.Ajd],this);},DC:function(E){if(A.aaX(E,this.ED))return;A.Core.ZD.
DC.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tn=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},DM:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZD.DM.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tn=0x45;this.FJ=null;A.pe([this,this.Ajd],this);},A1F:function(
){return;},Ajd:function(G){var B;this.AiI=null;if(this.Tn===0x00)return;if(this.
Tn===0x45){var K4=A._NewObject(A.Graphics.Ax3,0);K4=K4.ANR(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K4){K4.AB8(0,0);this.Cl.Set(0,2,K4.US*240
);K4.AB8(1,0);this.Cl.Set(1,2,K4.US*240);K4.AB8(1,1);this.Cl.Set(2,2,K4.US*240);
K4.AB8(0,1);this.Cl.Set(3,2,K4.US*240);}this.A1F();}if((((this.Tn===0x4D)&&!!this.
FJ)&&!!this.U_[0])&&!!this.U_[1]){var Ai_=[].concat(BD,this.U_);var Ai9=this.AGT;
var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var Rz=Ai_[3]-Ai9[
1];this.FJ.Afc(Af8,D8);this.Cl.Set(0,0,this.FJ.P7+this.Aiu);this.Cl.Set(0,1,this.
FJ.P8+this.Aiv);this.Cl.Set(0,2,this.FJ.US);this.FJ.Afc(Az,D8);this.Cl.Set(1,0,this.
FJ.P7+this.Aiu);this.Cl.Set(1,1,this.FJ.P8+this.Aiv);this.Cl.Set(1,2,this.FJ.US);
this.FJ.Afc(Az,Rz);this.Cl.Set(2,0,this.FJ.P7+this.Aiu);this.Cl.Set(2,1,this.FJ.
P8+this.Aiv);this.Cl.Set(2,2,this.FJ.US);this.FJ.Afc(Af8,Rz);this.Cl.Set(3,0,this.
FJ.P7+this.Aiu);this.Cl.Set(3,1,this.FJ.P8+this.Aiv);this.Cl.Set(3,2,this.FJ.US);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Et=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.ME=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.Kz=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A1F();}this.
ApG=this.Tn;this.Tn=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},BnX:function(E){if(A.aaX(E,this.AGT))return;this.AGT=E;if((this.ApG!==0x45)&&(
this.Tn===0x00)){this.Tn=this.ApG;A.pe([this,this.Ajd],this);}},Aro:function(Fh){
var B;if(!!!this.AiI){this.AiI=A._NewObject(A.Graphics.A7u,0);this.AiI.ANR(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiI.Afc(Fh))return BD;
var Ap7=[].concat(BD,this.U_);var Ep=this.AiI.P7*(Ap7[2]-Ap7[0]);var Dh=this.AiI.
P8*(Ap7[3]-Ap7[1]);return A.abf([Ep|0,Dh|0],Ap7.slice(0,2));},Baf:function(Bce,L8
){var B;this.AiI=null;if(!L8)throw new Error(IV);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.Ax3,0);this.FJ.BhB(L8);this.Aiu=Bce[0];this.Aiv=Bce[1];this.ApG=0x4D;
this.Tn=0x00;if(!this.U_[0]||!this.U_[1])return;var Ai_=[].concat(BD,this.U_);var
Ai9=this.AGT;var Af8=Ai_[0]-Ai9[0];var Az=Ai_[2]-Ai9[0];var D8=Ai_[1]-Ai9[1];var
Rz=Ai_[3]-Ai9[1];this.FJ.Afc(Af8,D8);this.Cl.Set(0,0,this.FJ.P7+this.Aiu);this.Cl.
Set(0,1,this.FJ.P8+this.Aiv);this.Cl.Set(0,2,this.FJ.US);this.FJ.Afc(Az,D8);this.
Cl.Set(1,0,this.FJ.P7+this.Aiu);this.Cl.Set(1,1,this.FJ.P8+this.Aiv);this.Cl.Set(
1,2,this.FJ.US);this.FJ.Afc(Az,Rz);this.Cl.Set(2,0,this.FJ.P7+this.Aiu);this.Cl.
Set(2,1,this.FJ.P8+this.Aiv);this.Cl.Set(2,2,this.FJ.US);this.FJ.Afc(Af8,Rz);this.
Cl.Set(3,0,this.FJ.P7+this.Aiu);this.Cl.Set(3,1,this.FJ.P8+this.Aiv);this.Cl.Set(
3,2,this.FJ.US);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Et=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.ME=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.Kz=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1F();},_Init:
function(aArg){A.Core.ZD._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aoc.Cl;this.
__proto__=C.Aoc;this.U=0x3;},_Mark:function(D){var B;A.Core.ZD._Mark.call(this,D
);if((B=this.AiI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVQ={Fv:null,bitmap:null
,P:null,G9:255,Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nz=aOffset[0];var NA=aOffset[1];var AE=[].concat(BD,this.
U_);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var BeI;var BeJ;var BeK;var BeL;
var BAA=this.G9;BeI=BeJ=BeK=BeL=BAA;var Aly=255|(255<<8)|(255<<16)|((((Ck*BeI)>>
8)&0xFF)<<24);var Alz=255|(255<<8)|(255<<16)|((((Ck*BeJ)>>8)&0xFF)<<24);var ByT=
255|(255<<8)|(255<<16)|((((Ck*BeK)>>8)&0xFF)<<24);var ByU=255|(255<<8)|(255<<16)|((((
Ck*BeL)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E7,aOffset));CY.AhV(aClip,this.bitmap
,0,this.Cl.Get(0,0)+Nz,this.Cl.Get(0,1)+NA,this.Cl.Get(0,2),this.Cl.Get(1,0)+Nz,
this.Cl.Get(1,1)+NA,this.Cl.Get(1,2),this.Cl.Get(2,0)+Nz,this.Cl.Get(2,1)+NA,this.
Cl.Get(2,2),this.Cl.Get(3,0)+Nz,this.Cl.Get(3,1)+NA,this.Cl.Get(3,2),AE,Aly,Alz,
ByT,ByU,aBlend,true);},G4:function(CN){if(!this.P||!this.Fv)return null;var BN=(
A.Core.Aef.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqH.isPrototypeOf(CN)?CN:null
);if(!BN&&!D4)return null;var Fx=BD;var B0=this.Fv.Ab;while(!!B0&&(B0!==this.P)){
Fx=A.abe(Fx,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fv;if(!!BN&&!BN.Down)this.Fv=null;
if(!!BN){BN.H1=A.abf(this.Aro(BN.H1),Fx);BN.NU=A.abf(this.Aro(BN.NU),Fx);return X.
G4(BN);}if(!!D4){var BAE=A.abf(this.Aro(A.abe(D4.H1,D4.DG)),Fx);D4.H1=A.abf(this.
Aro(D4.H1),Fx);D4.NU=A.abf(this.Aro(D4.NU),Fx);D4.DG=A.abe(D4.H1,BAE);return X.G4(
D4);}return C.Aoc.G4.call(this,CN);},Yj:function(Db,BF,Of,Aaj,Ac6,Ac5){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Db);pos=this.Aro(pos
);var Ap7=[].concat(BD,this.U_);if(!A.wa(Ap7,pos))return null;var JG=this.P.Yj(A.
abh(A.abh([0,0,Db[2]-Db[0],Db[3]-Db[1]],pos),this.P.M.slice(0,2)),BF,Of,Aaj,null
,Ac5);if(!!JG)this.Fv=JG.Cj;else this.Fv=null;if(!!this.Fv)return A._NewObject(A.
Core.Au2,0).Initialize(this,BD);return null;},RL:function(G){var B;var BeM=this.
U_;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
U_=this.bitmap.FrameSize;else this.U_=BD;if(((A.aaX(BeM,this.U_)||((this.ApG===0x45
)&&(this.Tn===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApG!==0x45)&&(this.Tn===0x00))&&!A.aaX(BeM,this.U_)){this.Tn=this.ApG;
A.pe([this,this.Ajd],this);}},C3:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bm2:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Is);if(!!this.P){A.
z9([this,this.RL],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RL
],E,0);this.bitmap=E.FG;}this.RL(this);},Awo:function(){return this.G9;},_Init:function(
aArg){C.Aoc._Init.call(this,aArg);this.__proto__=C.AVQ;},_Mark:function(D){var B;
C.Aoc._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aeq={Hz:null,AQ:0xFFFFFFFF,DG:A.wf
,AOB:false,Lc:function(){this.A1Y();},Ko:function(CY,aClip,aOffset,Ck,aBlend){if(
!this.Hz)return;var DD;var DO;var DI;var DN;var B3=this.AQ;Ck=Ck+1;DD=DO=DI=DN=B3;
if(Ck<256){DD=(DD&0x00FFFFFF)|((((Ck*((DD>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF
)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);DI=(DI&0x00FFFFFF)|((((Ck*((DI>>24)&0xFF
))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((Ck*((DN>>24)&0xFF))>>8)&0xFF)<<24);}CY.
Aeq(aClip,this.Hz,A.abh(this.M,aOffset),this.AOB,this.DG,DD,DO,DN,DI,true,true,0
);},A1Y:function(){return;},Aje:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},AnG:function(E){
var B;if(A.aaX(E,this.DG))return;this.DG=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hz)this.Ab.Bj(this.M);},BmX:function(E){var B;if(E===this.AOB)return;this.
AOB=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hz)this.Ab.Bj(this.M);},Zx:function(
E){var B;if(E===this.Hz)return;if(!!this.Hz)A.z9([this,this.Aje],this.Hz,0);this.
Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.Hz,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
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
!!this.Hz)this.Ab.Bj(this.M);},Zx:function(E){var B;if(E===this.Hz)return;if(!!this.
Hz)A.z9([this,this.Aje],this.Hz,0);this.Hz=E;if(!!this.Hz)A.zV([this,this.Aje],this.
Hz,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hp;},_Done:function(){this.Lc();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEN={A4$:0x1,A4_:0x2,A5a:0x4,A5d:0x8,A5c:0x10,A5b:0x20,BF6:0x40,BF7:0x80,BGf:
0x100};C.BGk={A4$:0x1,A4_:0x2,A5a:0x4,A5d:0x8,A5c:0x10,A5b:0x20,BDj:0x40,BDi:0x80
,BDo:0x100};C.BFq={Normal:0,BF0:1,BFY:2,BFZ:3};
C._Init=function(){C.C7.__proto__=A.Core.Akh;C.AL.__proto__=A.Core.Eu;C.BU.__proto__=
A.Core.Eu;C.NT.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuU.__proto__=A.Core.Eu;C.Aoc.__proto__=A.Core.ZD;C.AVQ.__proto__=C.Aoc;C.Aeq.
__proto__=A.Core.Eu;C.Hp.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DH=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */