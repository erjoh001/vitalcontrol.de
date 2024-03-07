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
var Cc=[1,1];var BF=[0,0];var EY=[0,0,0,0];var Hi="\uFEFF";var I7="No matrix to perform 3D transformation";
var Ik="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DR={KC:null,AkS:1,AkR:1,AQ:0xFFFFFFFF,Ka:function(CZ,aClip,aOffset,Ch,aBlend){var
B;var Af$=this.AkR;var Aga=this.AkS;var Adh=A.abf(this.Eo,aOffset);var Adi=A.abf(
this.Ex,aOffset);var Ala;var Alb;var B4=this.AQ;if(A.aaX(Adh,Adi))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ch=Ch+1;Ala=Alb=B4;if(Ch<256){Ala=(Ala&0x00FFFFFF)|((((
Ch*((Ala>>24)&0xFF))>>8)&0xFF)<<24);Alb=(Alb&0x00FFFFFF)|((((Ch*((Alb>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Af$===1)&&(Aga===1))CZ.AuE(aClip,Adh,Adi,Ala,Alb,aBlend);else
CZ.Bhs(aClip,Adh,Adi,Af$,Aga,Ala,Alb,aBlend);},GetExtent:function(){var Af$=this.
AkR;var Aga=this.AkS;var Adh=this.Eo;var Adi=this.Ex;if(((Af$===1)&&(Aga===1))||
A.aaX(Adh,Adi))return A.Core.Aj2.GetExtent.call(this);var Aim=Af$/2;var Ain=Aga/
2;var Ao2=Adh[0];var Ao3=Adh[1];var Ao4=Adi[0];var Ao5=Adi[1];var JY=Ao4-Ao2;var
JZ=Ao5-Ao3;var IM=Math.sqrt((JY*JY)+(JZ*JZ));JY=JY/IM;JZ=JZ/IM;var Bb5=Ao2+(JZ*Aim
);var Bb6=Ao3-(JY*Aim);var AI3=Ao4+(JZ*Ain);var AI4=Ao5-(JY*Ain);var AI5=Ao4-(JZ
*Ain);var AI6=Ao5+(JY*Ain);var AI7=Ao2-(JZ*Aim);var AI8=Ao3+(JY*Aim);var left=Bb5;
var right=Bb5;var top=Bb6;var bottom=Bb6;if(AI3<left)left=AI3;if(AI5<left)left=AI5;
if(AI7<left)left=AI7;if(AI3>right)right=AI3;if(AI5>right)right=AI5;if(AI7>right)
right=AI7;if(AI4<top)top=AI4;if(AI6<top)top=AI6;if(AI8<top)top=AI8;if(AI4>bottom
)bottom=AI4;if(AI6>bottom)bottom=AI6;if(AI8>bottom)bottom=AI8;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},Rz:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));},A_e:function(E){var B;if(E<1)E=1;if(E===this.AkS)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.AkS=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bg(this.GetClipping());if(((E!==1)||(this.AkR!==1))&&!this.KC){
this.KC=A.aaL(A.aci.Asp);if(this.KC.OK)A.zV([this,this.Rz],this.KC,0);}if(((E===
1)&&(this.AkR===1))&&!!this.KC){if(this.KC.OK)A.z9([this,this.Rz],this.KC,0);this.
KC=null;}},A_d:function(E){var B;if(E<1)E=1;if(E===this.AkR)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.AkR=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if(((E!==1)||(this.AkS!==1))&&!this.
KC){this.KC=A.aaL(A.aci.Asp);if(this.KC.OK)A.zV([this,this.Rz],this.KC,0);}if(((
E===1)&&(this.AkS===1))&&!!this.KC){if(this.KC.OK)A.z9([this,this.Rz],this.KC,0);
this.KC=null;}},NY:function(E){var B;if(E<1)E=1;if((E===this.AkR)&&(E===this.AkS
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.
AkR=E;this.AkS=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if((E!==1)&&!this.KC){this.KC=A.aaL(A.aci.Asp);if(this.KC.OK)A.zV([this,this.
Rz],this.KC,0);}if((E===1)&&!!this.KC){if(this.KC.OK)A.z9([this,this.Rz],this.KC
,0);this.KC=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());},Aj:function(E){if(E)this.
Cw(0x400,0x0);else this.Cw(0x0,0x400);},Fh:function(){var B;return((this.U&0x1)===
0x1);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.Cw(0x0,0x1);},_Init:function(
aArg){A.Core.Aj2._Init.call(this,aArg);this.__proto__=C.DR;},_Mark:function(D){var
B;A.Core.Aj2._Mark.call(this,D);if((B=this.KC)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={AMQ:0xFFFFFFFF,AMR:0xFFFFFFFF,AMV:0xFFFFFFFF
,AMU:0xFFFFFFFF,AQ:0xFFFFFFFF,Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;var Dy=
this.AMU;var DK=this.AMV;var DF=this.AMQ;var DJ=this.AMR;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ch=Ch+1;if((((Dy===DK)&&(DF===DJ))&&(Dy===DF))&&(Dy===0xFFFFFFFF
))Dy=DK=DF=DJ=B4;else if(B4!==0xFFFFFFFF){Dy=(Dy&0x00FFFFFF)|((((((Dy>>24)&0xFF)
*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);Dy=(Dy&0xFFFFFF00)|((((Dy&0xFF)*((B4&0xFF)+
1))>>8)&0xFF);Dy=(Dy&0xFFFF00FF)|((((((Dy>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dy=(Dy&0xFF00FFFF)|((((((Dy>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);
DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DK=(DK&
0xFFFFFF00)|((((DK&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DK=(DK&0xFFFF00FF)|((((((DK>>8
)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DK=(DK&0xFF00FFFF)|((((((DK>>16)&0xFF)
*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*(((B4>>
24)&0xFF)+1))>>8)&0xFF)<<24);DF=(DF&0xFFFFFF00)|((((DF&0xFF)*((B4&0xFF)+1))>>8)&
0xFF);DF=(DF&0xFFFF00FF)|((((((DF>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DF=(
DF&0xFF00FFFF)|((((((DF>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DJ=(DJ&0x00FFFFFF
)|((((((DJ>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DJ=(DJ&0xFFFFFF00)|((((
DJ&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DJ=(DJ&0xFFFF00FF)|((((((DJ>>8)&0xFF)*(((B4>>8
)&0xFF)+1))>>8)&0xFF)<<8);DJ=(DJ&0xFF00FFFF)|((((((DJ>>16)&0xFF)*(((B4>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ch<256){Dy=(Dy&0x00FFFFFF)|((((Ch*((Dy>>24)&0xFF))>>8)&
0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ch*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF
)|((((Ch*((DF>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ch*((DJ>>24)&0xFF
))>>8)&0xFF)<<24);}CZ.AuT(aClip,A.abh(this.M,aOffset),Dy,DK,DJ,DF,aBlend);},Av3:
function(E){var B;if(E===this.AMQ)return;this.AMQ=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},Av4:function(E){var B;if(E===this.AMR)return;this.AMR=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Av6:function(E){var B;
if(E===this.AMV)return;this.AMV=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(
this.M);},Av5:function(E){var B;if(E===this.AMU)return;this.AMU=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Fh:function(){
var B;return((this.U&0x1)===0x1);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.
Cw(0x0,0x1);},_Init:function(aArg){A.Core.Ep._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.CC={Width:1,AQ:0xFFFFFFFF,Ka:function(CZ
,aClip,aOffset,Ch,aBlend){var B;var Dy;var DK;var DF;var DJ;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ch=Ch+1;Dy=DK=DF=DJ=B4;if(Ch<256){Dy=(Dy&0x00FFFFFF
)|((((Ch*((Dy>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ch*((DK>>24)&0xFF
))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ch*((DF>>24)&0xFF))>>8)&0xFF)<<24);DJ=(
DJ&0x00FFFFFF)|((((Ch*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}CZ.Bhq(aClip,A.abh(this.M
,aOffset),this.Width,Dy,DK,DJ,DF,aBlend);},NY:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bg(this.M);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.Cw(
0x0,0x1);},_Init:function(aArg){A.Core.Ep._Init.call(this,aArg);this.__proto__=C.
CC;},_className:"Views::Border"};C.NJ={timer:null,Al:null,MK:-1,AQ:0xFFFFFFFF,AuF:
0x1F,TK:0,Dt:0,Am5:A.wf,Vl:false,Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;var
Nl=this.TK;if(this.MK>=0)Nl=this.MK;if(!this.Al||(Nl>=this.Al.NoOfFrames))return;
this.Al.Update();var Dy;var DK;var DJ;var DF;var B4=this.AQ;var J6=(((Ch+1)*255)>>
8)+1;var Oh=this.AuF;var Az=A.abh(this.M,aOffset);var AKu=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Am5);aBlend=aBlend&&((this.U&0x2)===0x2);Dy=DK=DF=DJ=B4;if(J6<256
){Dy=(Dy&0x00FFFFFF)|((((((Dy>>24)&0xFF)*J6)>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((
DK>>24)&0xFF)*J6)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*J6)>>8)&
0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J6)>>8)&0xFF)<<24);}if(((this.
Am5[0]>0)&&(AKu[0]>0))&&!((Oh&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKu[
0];if(((Oh&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oh=Oh|0x4;}else if(((Oh&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oh=Oh|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oh=Oh|0x5;}}if(((this.Am5[1]>0)&&(AKu[1]>0))&&!((Oh&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKu[1];if(((Oh&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oh=Oh|0x8;}else if(((Oh&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oh=Oh|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oh=Oh|
0xA;}}CZ.Bhp(aClip,this.Al,Nl,Az,Oh,Dy,DK,DJ,DF,aBlend);},Rz:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},L$:function(G){var B;var Nl=
this.MK;var Tg=0;if(!!this.Al)Tg=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MK<0))&&(Tg>0))this.Dt=this.timer.Bw-(this.TK*this.Al.FrameDelay);if(
!!this.timer&&(Tg>0)){var Av=(this.timer.Bw-this.Dt)|0;Nl=(Av/this.Al.FrameDelay
)|0;if(Av>=Tg){Nl=Nl%this.Al.NoOfFrames;this.Dt=this.timer.Bw-(Av%Tg);}}if(((Nl!==
this.MK)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);this.MK=Nl;if(!Tg&&
!!this.timer){A.z9([this,this.L$],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bg(this.M);},Y$:function(E){var B;if(this.Vl===E)return;this.Vl=E;this.MK=-1;if(
!E&&!!this.timer){A.z9([this,this.L$],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.AdZ);A.zV([this,this.L$],this.timer,0);A.pe([this,this.
L$],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},A9t:function(
E){var B;if(E===this.AuF)return;this.AuF=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.M);},Cx:function(E){var B;if(E<0)E=0;if((E===this.TK)&&(this.MK===-1)
)return;this.TK=E;if(!this.timer)this.MK=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OK)A.z9([this,this.Rz],this.Al,0);this.Al=E;this.MK=-1;if(!!E&&E.OK)A.zV([this,this.
Rz],E,0);if(this.Vl){this.Y$(false);this.Y$(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.Cw(0x0,0x1
);},A9J:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Am5))return;this.Am5=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.AuF&0xF)===
0xF))this.Ab.Bg(this.M);},_Init:function(aArg){A.Core.Ep._Init.call(this,aArg);this.
__proto__=C.NJ;},_Mark:function(D){var B;A.Core.Ep._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Am={timer:null,Al:null,Dt:0,MK:0,AQ:0xFFFFFFFF
,J8:0x12,TK:0,G0:255,Vl:false,AaL:false,Ka:function(CZ,aClip,aOffset,Ch,aBlend){
var B;var Nl=this.TK;if(this.MK>=0)Nl=this.MK;if(!this.Al||(Nl>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Df();var C4=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var Dy;var DK;var DJ;var DF;var B4=this.AQ;var J6=(((
Ch+1)*this.G0)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);Dy=DK=DF=DJ=B4;if(J6<256
){Dy=(Dy&0x00FFFFFF)|((((((Dy>>24)&0xFF)*J6)>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((
DK>>24)&0xFF)*J6)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*J6)>>8)&
0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J6)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C4))CZ.A5m(aClip,this.Al,Nl,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),Dy,DK,DJ,DF,aBlend);else CZ.BnJ(aClip,this.Al,Nl
,A.abh(AE,aOffset),[].concat(BF,C4),Dy,DK,DJ,DF,aBlend,true);},Rz:function(G){var
B;if(((this.AaL&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Df());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},L$:function(
G){var B;var Nl=this.MK;var Tg=0;if(!!this.Al)Tg=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MK<0))&&(Tg>0))this.Dt=this.timer.Bw-(this.TK*this.Al.FrameDelay
);if(!!this.timer&&(Tg>0)){var Av=(this.timer.Bw-this.Dt)|0;Nl=(Av/this.Al.FrameDelay
)|0;if(Av>=Tg){Nl=Nl%this.Al.NoOfFrames;this.Dt=this.timer.Bw-(Av%Tg);}}if(((Nl!==
this.MK)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);this.MK=Nl;if(!Tg&&
!!this.timer){A.z9([this,this.L$],this.timer,0);this.timer=null;}},IZ:function(E
){if(E===this.AaL)return;this.AaL=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Df());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Y$:function(
E){var B;if(this.Vl===E)return;this.Vl=E;this.MK=-1;if(!E&&!!this.timer){A.z9([this
,this.L$],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
AdZ);A.zV([this,this.L$],this.timer,0);A.pe([this,this.L$],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);},A7:function(E){var B;if(E===this.J8)return;
this.J8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Cx:function(E){
var B;if(E<0)E=0;if((E===this.TK)&&(this.MK===-1))return;this.TK=E;if(!this.timer
)this.MK=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OK)A.z9([this,this.Rz],this.
Al,0);this.Al=E;this.MK=-1;if(!!E&&E.OK)A.zV([this,this.Rz],E,0);if(this.Vl){this.
Y$(false);this.Y$(true);}if(((this.AaL&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Df());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},
Do:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G0)return;this.G0=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Aj:function(E){if(E)this.Cw(
0x400,0x0);else this.Cw(0x0,0x400);},Fh:function(){var B;return((this.U&0x1)===0x1
);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.Cw(0x0,0x1);},Df:function(){var
B;if(!this.Al)return EY;var Bv=this.J8;var C4=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C4[0]||!C4[1])return EY;var Dd=[0,0
,width,height];var B5=Dd;if(((Bv&0x40)===0x40)){var A3v=((((Dd[2]-Dd[0])<<16)+((
C4[0]/2)|0))/C4[0])|0;var AAA=((((Dd[3]-Dd[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var AiO=
A3v;if(AAA>AiO)AiO=AAA;B5=A.abL(B5,((C4[0]*AiO)+32768)>>16);B5=A.abI(B5,((C4[1]*
AiO)+32768)>>16);}else if(((Bv&0x80)===0x80)){var A3v=((((Dd[2]-Dd[0])<<16)+((C4[
0]/2)|0))/C4[0])|0;var AAA=((((Dd[3]-Dd[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var AiO=
A3v;if(AAA<AiO)AiO=AAA;B5=A.abL(B5,((C4[0]*AiO)+32768)>>16);B5=A.abI(B5,((C4[1]*
AiO)+32768)>>16);}else if(!((Bv&0x100)===0x100))B5=A.abK(B5,C4);if((B5[2]-B5[0])
!==(Dd[2]-Dd[0])){if(((Bv&0x4)===0x4))B5=A.abM(B5,Dd[2]-(B5[2]-B5[0]));else if(((
Bv&0x2)===0x2))B5=A.abM(B5,(Dd[0]+(((Dd[2]-Dd[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dd[3]-Dd[1])){if(((Bv&0x20)===0x20))B5=A.abO(B5,Dd[3]-(B5[3
]-B5[1]));else if(((Bv&0x10)===0x10))B5=A.abO(B5,(Dd[1]+(((Dd[3]-Dd[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},BjQ:function(){return this.
AQ;},ARY:function(){return this.TK;},_Init:function(aArg){A.Core.Ep._Init.call(this
,aArg);this.__proto__=C.Am;},_Mark:function(D){var B;A.Core.Ep._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,En:null,CH:
A.jV,String:A.jV,Of:null,AlY:A.wf,I0:0,N4:0,Act:0,Bt:A.wf,J8:0x12,AQ:0xFFFFFFFF,
Afj:false,AaL:false,X$:false,ANF:false,HT:false,K$:function(){if(!!this.Of){this.
A1C(this.Of);this.Of=null;}},Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;if((this.
CH===A.jV)||!this.B7)return;var Bv=this.J8;var font=this.B7;var Dd=A.abh(this.M,
aOffset);var Dy;var DK;var DJ;var DF;var col=this.AQ;var J6=(((Ch+1)*255)>>8)+1;
var J4=this.CH.charCodeAt(0)||0;var AE=A.abh(this.Df(),aOffset);var Br=[Dd[0]-AE[
0],(Dd[1]-AE[1])-font.Ascent];if(J4<1)return;Dy=DK=DF=DJ=col;if(J6<256){Dy=(Dy&0x00FFFFFF
)|((((((Dy>>24)&0xFF)*J6)>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*
J6)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*J6)>>8)&0xFF)<<24);DF=(
DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J6)>>8)&0xFF)<<24);}if(((Bv&0x80)===0x80)){if(
this.AjQ())Bv=(Bv&~0x80)|0x4;else Bv=(Bv&~0x80)|0x1;}if((J4===1)&&!((Bv&0x40)===
0x40)){CZ.A5S(aClip,font,this.CH,2,(this.CH.charCodeAt(1)||0)-1,Dd,Br,0,0,Dy,DK,
DJ,DF,true);return;}var leading=font.Leading;if(this.N4>0)leading=(this.N4-font.
Ascent)-font.Descent;var Aav=(font.Ascent+font.Descent)+leading;var BxA=aClip[1]-
AE[1];var BxB=aClip[3]-AE[1];var A0R=AE[2]-AE[0];var De=0;var P=1;var B4=this.CH.
charCodeAt(1)||0;while(((De+Aav)<BxA)&&(B4>0)){P=P+B4;De=De+Aav;B4=this.CH.charCodeAt(
P)||0;}while((De<BxB)&&(B4>0)){var L7=A.abe(Br,[0,De]);var AlR=0;var O8=false;if(((((
Bv&0x40)===0x40)&&((this.CH.charCodeAt((P+B4)-1)||0)!==0x0A))&&((this.CH.charCodeAt(
P+1)||0)!==0x0A))&&((this.CH.charCodeAt(P+B4)||0)!==0x00))O8=true;if(O8&&!!(Bv&0x6
)){var ApI=P+B4;var AyJ=this.CH.indexOf(String.fromCharCode(0x20),P+1);var AyK=this.
CH.indexOf(String.fromCharCode(0xA0),P+1);if(((AyJ<0)||(AyJ>=ApI))&&((AyK<0)||(AyK>=
ApI)))O8=false;}if(O8)AlR=A0R;else if(((Bv&0x4)===0x4))L7=[(L7[0]-A0R)+font.Ye(this.
CH,P+1,B4-1),L7[1]];else if(((Bv&0x2)===0x2))L7=[(L7[0]-((A0R/2)|0))+((font.Ye(this.
CH,P+1,B4-1)/2)|0),L7[1]];CZ.A5S(aClip,font,this.CH,P+1,B4-1,Dd,L7,AlR,0,Dy,DK,DJ
,DF,true);P=P+B4;De=De+Aav;B4=this.CH.charCodeAt(P)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bfg;Bfg=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bfg&&
!this.Act)&&this.Afj)&&this.HT)&&!((this.U&0x2000)===0x2000)){this.CH=A.jV;this.
HT=false;A.pe([this,this.O_],this);}if(((this.X$&&this.HT)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CH=
A.jV;this.HT=false;A.pe([this,this.O_],this);}A.Core.Ep.H.call(this,E);A.pe([this
,this.AiH],this);},Bxs:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bxr:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1C:function(aBidi){if(!aBidi)return;A.rB(aBidi);},BxO:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiH:function(G){A.pe(this.En
,this);},O_:function(G){A.pe([this,this.Xv],this);},Xv:function(G){var B;if(this.
HT)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xl=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afj){
if(this.Act>0)Xl=this.Act;else if(!this.AaL)Xl=width-(this.I0*2);else Xl=width;if(
Xl<0)Xl=1;}if(!!this.Of){this.A1C(this.Of);this.Of=null;}this.HT=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.ANF)this.Of=this.BxO(length
);this.CH=font.Bm_(this.String,0,Xl,length,this.Of);if(!!this.Of&&!this.BiH()){this.
A1C(this.Of);this.Of=null;}}else this.CH=A.jV;this.AlY=BF;if(((this.X$&&(this.CH
!==A.jV))&&!this.AaL)&&!!font){var Bv=this.J8;var leading=font.Leading;var Is=this.
CH;var AKp=this.AjQ();if(((Bv&0x80)===0x80)){if(AKp)Bv=(Bv&~0x80)|0x4;else Bv=(Bv&
~0x80)|0x1;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AAv=(font.
Ascent+font.Descent)+leading;var J4=Is.charCodeAt(0)||0;var Aly=((height+leading
)/AAv)|0;var A05=false;var AI$=false;if(Aly<=0)Aly=1;if(J4>Aly){var Bf=0;var AAw=
0;var AKn=J4-1;var KZ;var Nm=Is.length;var tmp=A.jV;if(!!(Bv&0x110)&&!!(Bv&0x28)
)Bv&=~0x110;if(!!(Bv&0x110))Bv&=~0x28;if(((Bv&0x20)===0x20))AAw=J4-Aly;else if(((
Bv&0x10)===0x10)||((Bv&0x100)===0x100)){AAw=((J4-Aly)/2)|0;AKn=(AAw+Aly)-1;}else
AKn=Aly-1;A05=AAw>0;AI$=AKn<(J4-1);for(KZ=1;Bf<AAw;Bf=Bf+1)KZ=KZ+(Is.charCodeAt(
KZ)||0);if(AI$)for(Nm=KZ;Bf<AKn;Bf=Bf+1)Nm=Nm+(Is.charCodeAt(Nm)||0);if(A05){var
IM=Is.charCodeAt(KZ)||0;tmp=(Hi+A.abW(Is,KZ,IM))+Hi;tmp=A.abQ(tmp,0,(IM+2)&0xFFFF
);KZ=KZ+IM;if((tmp.charCodeAt(IM)||0)===0x0A){tmp=A.abQ(tmp,IM,0xFEFF);tmp=A.abQ(
tmp,IM+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Is,KZ,Nm-KZ);if(AI$&&(
Nm>=KZ)){var IM=Is.charCodeAt(Nm)||0;var Qs=(Hi+A.abW(Is,Nm,IM))+Hi;Qs=A.abQ(Qs,
0,(IM+2)&0xFFFF);Qs=A.abQ(Qs,1,0xFEFF);if((Qs.charCodeAt(IM)||0)===0x0A){Qs=A.abQ(
Qs,IM,0xFEFF);Qs=A.abQ(Qs,IM+1,0x0A);}if((Qs.charCodeAt(2)||0)===0x0A){Qs=A.abQ(
Qs,2,0xFEFF);Qs=A.abQ(Qs,1,0x0A);}else Qs=A.abQ(Qs,1,0xFEFF);tmp=tmp+Qs;}Is=String.
fromCharCode(Aly&0xFFFF)+tmp;}var Bf=0;var inx=1;var AJZ=width-(this.I0*2);if(this.
Afj&&(this.Act>0))AJZ=this.Act;J4=Is.charCodeAt(0)||0;for(;Bf<J4;Bf=Bf+1){var AlP=
A05&&!Bf;var AlQ=AI$&&(Bf===(J4-1));var Xb=false;var Xc=false;var AtS=AKp;if((AKp&&
AlP)&&!AlQ){AlP=false;AlQ=true;}else if((AKp&&AlQ)&&!AlP){AlQ=false;AlP=true;}var
Xw=inx+1;var IM=Is.charCodeAt(inx)||0;var KZ=Xw;var Nm=(Xw+IM)-2;var A1R=-1;var A1S=-
1;if(!this.Afj&&(font.Ye(Is,Xw,IM-1)>AJZ)){var AoC=Bv;if(((AoC&0x2)===0x2)&&!!(AoC&
0x5))AoC&=~0x2;if(((AoC&0x2)===0x2))AoC&=~0x5;if(((AoC&0x4)===0x4))Xb=true;else if(((
AoC&0x2)===0x2)){Xb=true;Xc=true;}else Xc=true;}if((Is.charCodeAt(KZ)||0)===0x0A
)KZ=KZ+1;if((Is.charCodeAt(Nm)||0)===0x0A)Nm=Nm-1;while(Xb&&((Is.charCodeAt(KZ)||
0)===0xFEFF))KZ=KZ+1;while(Xc&&((Is.charCodeAt(Nm)||0)===0xFEFF))Nm=Nm-1;Xb=Xb&&
!AlQ;Xc=Xc&&!AlP;while((((Xb||Xc)||AlP)||AlQ)&&(KZ<Nm)){if((Xb&&(AtS||!Xc))||AlP
){if(A1R>0)Is=A.abQ(Is,A1R,0xFEFF);Is=A.abQ(Is,KZ,0x2026);A1R=KZ;KZ=KZ+1;AtS=!AtS;
AlP=false;if(font.Ye(Is,Xw,IM-1)<=AJZ){Xb=false;Xc=false;}else Xb=Xb||!Xc;}if((Xc&&(
!AtS||!Xb))||AlQ){if(A1S>0)Is=A.abQ(Is,A1S,0xFEFF);Is=A.abQ(Is,Nm,0x2026);A1S=Nm;
Nm=Nm-1;AtS=!AtS;AlQ=false;if(font.Ye(Is,Xw,IM-1)<=AJZ){Xb=false;Xc=false;}else Xc=
Xc||!Xb;}}inx=inx+IM;}this.AlY=[font.A6m(Is),((Is.charCodeAt(0)||0)*AAv)-leading
];this.CH=Is;}if(this.AaL&&(this.CH!==A.jV)){var AtE=[this.I0,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Df(),AtE),this.Bt));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);A.pe([this,this.AiH],this);},Bll:function(
E){if(E===this.ANF)return;this.ANF=E;this.CH=A.jV;this.HT=false;A.pe([this,this.
O_],this);},Hq:function(E){if(E<0)E=0;if(this.I0===E)return;this.I0=E;this.CH=A.
jV;this.HT=false;A.pe([this,this.O_],this);},AwA:function(E){var B;if(E<0)E=0;if(
this.N4===E)return;this.N4=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.
M);if(this.X$){this.CH=A.jV;this.HT=false;A.pe([this,this.O_],this);}if(this.AaL&&
this.HT)this.H(A.abg(this.Df(),this.Bt));if(this.HT)A.pe([this,this.AiH],this);}
,Blk:function(E){if(E===this.X$)return;this.X$=E;if(((this.Afj&&!!!this.Act)||E)||
!!this.En)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CH=A.jV;this.HT=false;
A.pe([this,this.O_],this);},QZ:function(E){if(A.aa0(E,this.En))return;this.En=E;
if(((!!!this.Act&&this.Afj)||!!E)||this.X$)this.U=this.U&~0x100;else this.U=this.
U|0x100;},IZ:function(E){if(E===this.AaL)return;this.AaL=E;if(E&&this.X$){this.CH=
A.jV;this.HT=false;A.pe([this,this.O_],this);}if(E&&this.HT){var AtE=[this.I0,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Df(),AtE),this.Bt));this.U=this.U&~
0x2000;}},BmV:function(E){if(E<0)E=0;if(E===this.Act)return;this.Act=E;if(this.Afj&&
this.HT){this.CH=A.jV;this.HT=false;A.pe([this,this.O_],this);}if(((!!!E&&this.Afj
)||this.X$)||!!this.En)this.U=this.U&~0x100;else this.U=this.U|0x100;},KP:function(
E){if(E===this.Afj)return;this.Afj=E;if(this.HT){this.CH=A.jV;this.HT=false;A.pe([
this,this.O_],this);}if(((E&&!!!this.Act)||this.X$)||!!this.En)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gj:function(E){var B;if(A.aaX(E,this.Bt))return;this.
Bt=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);if(this.HT)A.pe([this
,this.AiH],this);},A7:function(E){var B;if(E===this.J8)return;this.J8=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);if(this.X$){this.CH=A.jV;this.HT=false;
A.pe([this,this.O_],this);}if(this.HT)A.pe([this,this.AiH],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CH=A.jV;this.HT=false;A.pe([this,this.
O_],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CH=A.jV;this.HT=false;
A.pe([this,this.O_],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Aj:function(E){if(E)this.
Cw(0x400,0x0);else this.Cw(0x0,0x400);},Fh:function(){var B;return((this.U&0x1)===
0x1);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.Cw(0x0,0x1);},AjQ:function(
){if(!this.HT)this.Xv(this);if(!this.Of)return false;var result=false;var bidi=this.
Of;result=A.v2(bidi);return result;},BiH:function(){if(!this.HT)this.Xv(this);if(
!this.Of)return false;var result=false;var bidi=this.Of;result=A.zZ(bidi);return result;
},AGm:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.X$)return BF;if(
!this.HT)this.Xv(this);if(aIndex<0)aIndex=0;var By1=(this.CH.charCodeAt(0)||0)-1;
var L_=this.CH.charCodeAt(1)||0;var inx=1;var AiT=2;var Bf=0;var col=-1;var CD=true;
aIndex=aIndex+2;while((Bf<By1)&&((inx+L_)<=aIndex)){inx=inx+L_;Bf=Bf+1;AiT=AiT+1;
aIndex=aIndex+1;L_=this.CH.charCodeAt(inx)||0;}if(aIndex>(inx+L_))aIndex=inx+L_;
if(!!this.Of)aIndex=(inx+this.Bxr(this.Of,(inx+1)-AiT,(inx+L_)-AiT,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Io=this.CH.charCodeAt(inx+1)||0;if(CD)col=col+
1;CD=(Io!==0xFEFF)&&(Io!==0x0A);}return[col,Bf];},Anz:function(Aor){if(((this.String===
A.jV)||!this.B7)||this.X$)return 0;if(!this.HT)this.Xv(this);var Bf=Aor[1];var col=
Aor[0];var inx=1;var AiT=2;var J4=this.CH.charCodeAt(0)||0;var L_=this.CH.charCodeAt(
1)||0;if(Bf>=J4){Bf=J4-1;col=this.CH.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(L_>0)){inx=inx+L_;Bf=Bf-1;AiT=AiT+1;L_=this.CH.charCodeAt(inx)||0;
}var Xk=inx;var AKo=(inx-AiT)+1;var ApI=(AKo+L_)-1;var AAi=false;while((col>=0)&&(
L_>1)){var Io=this.CH.charCodeAt(inx+1)||0;inx=inx+1;L_=L_-1;AAi=(Io===0xFEFF)||(
Io===0x0A);if(!AAi){col=col-1;Xk=inx;}}if((!AAi&&(col>=0))&&((this.CH.charCodeAt(
inx+1)||0)===0x00))AAi=true;if(AAi)Xk=Xk+1;Xk=Xk-AiT;if(!!this.Of)Xk=AKo+this.Bxs(
this.Of,AKo,ApI,Xk-AKo);return Xk;},ATn:function(KW){var B;if((this.String===A.jV
)||!this.B7)return BF;if(!this.HT)this.Xv(this);var AE=this.Df();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B7;var Bv=this.J8;var J4=this.CH.charCodeAt(
0)||0;var leading=font.Leading;if(KW[1]<AE[1])KW=[KW[0],AE[1]];if(KW[1]>=AE[3])KW=[
KW[0],AE[3]-1];if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var Aav=(
font.Ascent+font.Descent)+leading;var Bf=((KW[1]-AE[1])/Aav)|0;var Nv=this.ACw(Bf
);var L_=Nv.length;var O8=false;if(((Bv&0x80)===0x80)){if(this.AjQ())Bv=(Bv&~0x80
)|0x4;else Bv=(Bv&~0x80)|0x1;}if(((Bv&0x40)===0x40)&&(Bf<(J4-1)))O8=true;if((O8&&(
Nv.indexOf(String.fromCharCode(0x20),0)<0))&&(Nv.indexOf(String.fromCharCode(0xA0
),0)<0))O8=false;if(O8){var inx=1;var ApH=Bf;while(ApH>0){inx=inx+(this.CH.charCodeAt(
inx)||0);ApH=ApH-1;}if(((this.CH.charCodeAt(inx+1)||0)===0x0A)||((this.CH.charCodeAt((
inx+(this.CH.charCodeAt(inx)||0))-1)||0)===0x0A))O8=false;}var AlR=0;var Ej=0;if(
O8)AlR=AE[2]-AE[0];else if(((Bv&0x4)===0x4))Ej=(AE[2]-AE[0])-font.Ye(Nv,0,L_);else
if(((Bv&0x2)===0x2))Ej=(((AE[2]-AE[0])/2)|0)-((font.Ye(Nv,0,L_)/2)|0);var col=font.
Bii(Nv,0,L_,(KW[0]-AE[0])-Ej,AlR);if(col<0)col=0;return[col,Bf];},AeY:function(Aor
){var B;if((this.String===A.jV)||!this.B7)return BF;if(!this.HT)this.Xv(this);var
J4=this.CH.charCodeAt(0)||0;var font=this.B7;var Bv=this.J8;var Bf=Aor[1];var col=
Aor[0];if(Bf>=J4){Bf=J4-1;col=this.CH.length;}if(Bf<0){Bf=0;col=0;}var Nv=this.ACw(
Bf);var L_=Nv.length;var AE=this.Df();var O8=false;var leading=font.Leading;if(((
Bv&0x80)===0x80)){if(this.AjQ())Bv=(Bv&~0x80)|0x4;else Bv=(Bv&~0x80)|0x1;}if(((Bv&
0x40)===0x40)&&(Bf<(J4-1)))O8=true;if((O8&&(Nv.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nv.indexOf(String.fromCharCode(0xA0),0)<0))O8=false;if(O8){var inx=1;var
ApH=Bf;while(ApH>0){inx=inx+(this.CH.charCodeAt(inx)||0);ApH=ApH-1;}if(((this.CH.
charCodeAt(inx+1)||0)===0x0A)||((this.CH.charCodeAt((inx+(this.CH.charCodeAt(inx
)||0))-1)||0)===0x0A))O8=false;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.
Descent;var De=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
AlR=0;var Ej=AE[0];if(O8)AlR=AE[2]-AE[0];else if(((Bv&0x4)===0x4))Ej=AE[2]-font.
Ye(Nv,0,L_);else if(((Bv&0x2)===0x2))Ej=(Ej+(((AE[2]-AE[0])/2)|0))-((font.Ye(Nv,
0,L_)/2)|0);var pos=font.Bie(Nv,0,L_,col,AlR);if(pos<0)pos=0;return[Ej+pos,De];}
,AOo:function(Ad){var B;if((this.String===A.jV)||!this.B7)return EY;if(!this.HT)
this.Xv(this);var J4=this.CH.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
J4)&&(Ad>0)))return EY;var Bv=this.J8;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.I0*2);if(((
Bv&0x80)===0x80)){if(this.AjQ())Bv=(Bv&~0x80)|0x4;else Bv=(Bv&~0x80)|0x1;}if(this.
N4>0)leading=(this.N4-font.Ascent)-font.Descent;var De=Ad*((font.Ascent+font.Descent
)+leading);var Ej=0;while(Ad>0){inx=inx+(this.CH.charCodeAt(inx)||0);Ad=Ad-1;}var
AAx=(this.CH.charCodeAt(inx)||0)-1;var Bfh=font.Ye(this.CH,inx+1,AAx);var A3r=font.
A6w(this.CH,inx+1,AAx);var ApJ=Bfh;var Aav=font.Ascent+font.Descent;var AAM=(J4*((
font.Ascent+font.Descent)+leading))-leading;if(!J4)AAM=Aav;if((((this.CH.charCodeAt((
inx+AAx)+1)||0)===0x00)||((this.CH.charCodeAt(inx+AAx)||0)===0x0A))||((this.CH.charCodeAt(
inx+1)||0)===0x0A))Bv=Bv&~0x40;if(((Bv&0x40)===0x40)){var ApI=(inx+1)+AAx;var AyJ=
this.CH.indexOf(String.fromCharCode(0x20),inx+1);var AyK=this.CH.indexOf(String.
fromCharCode(0xA0),inx+1);if(((AyJ>=0)&&(AyJ<ApI))||((AyK>=0)&&(AyK<ApI)))ApJ=width;
}if((!!(Bv&0x110)&&!!(Bv&0x28))&&(AAM>height))Bv&=~0x110;if(!!(Bv&0x110))Bv&=~0x28;
if((((Bv&0x2)===0x2)&&!!(Bv&0x5))&&(ApJ>width))Bv&=~0x2;if(((Bv&0x2)===0x2))Bv&=
~0x5;if(((Bv&0x4)===0x4))Ej=width-ApJ;else if(((Bv&0x2)===0x2))Ej=((width/2)|0)-((
ApJ/2)|0);if(((Bv&0x20)===0x20))De=De+(height-AAM);else if(((Bv&0x100)===0x100))
De=((De+((height/2)|0))-((AAM/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bv&0x10)===0x10))De=(De+((height/2)|0))-((AAM/2)|0);Ej=(Ej+A3r[0])+this.I0;
ApJ=(ApJ+(A3r[2]-A3r[0]))-Bfh;var B5;{var BeL=[Bd[0]+Ej,Bd[1]+De];B5=[].concat(BeL
,A.abf(BeL,[ApJ,Aav]));}return A.abh(B5,this.Bt);},ACw:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.HT)this.Xv(this);var J4=this.CH.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=J4))return A.jV;while(Ad>0){inx=inx+(
this.CH.charCodeAt(inx)||0);Ad=Ad-1;}var Xw=inx;var Atk=inx+(this.CH.charCodeAt(
inx)||0);var Io=0x00;do{Xw=Xw+1;Io=this.CH.charCodeAt(Xw)||0;}while(((Io===0xFEFF
)||(Io===0x0A))&&(Xw<=Atk));do{Atk=Atk-1;Io=this.CH.charCodeAt(Atk)||0;}while(((
Io===0xFEFF)||(Io===0x0A))&&(Xw<=Atk));var Nv=A.abW(this.CH,Xw,(Atk-Xw)+1);var Ao_;
for(Ao_=Nv.indexOf(String.fromCharCode(0xFEFF),0);Ao_>=0;Ao_=Nv.indexOf(String.fromCharCode(
0xFEFF),Ao_+1)){var Xk=Ao_+1;while((Nv.charCodeAt(Xk)||0)===0xFEFF)Xk=Xk+1;Nv=A.
ab1(Nv,Ao_,Xk-Ao_);}return Nv;},Df:function(){var B;if((this.String===A.jV)||!this.
B7)return EY;if(!this.HT)this.Xv(this);if(this.CH===A.jV)return EY;var leading=this.
B7.Leading;var AAv=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.N4>0
){leading=(this.N4-this.B7.Ascent)-this.B7.Descent;AAv=this.N4;}if(A.aaX(this.AlY
,BF))this.AlY=[this.B7.A6m(this.CH),this.AlY[1]];this.AlY=[this.AlY[0],((this.CH.
charCodeAt(0)||0)*AAv)-leading];var Bv=this.J8;var Bd=this.M;var AtE=this.I0;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var Dd=[AtE,0,width-AtE,height];var B5=[
].concat(Dd.slice(0,2),A.abf(Dd.slice(0,2),this.AlY));if(((Bv&0x80)===0x80)){if(
this.AjQ())Bv=(Bv&~0x80)|0x4;else Bv=(Bv&~0x80)|0x1;}if(((Bv&0x40)===0x40)){var Xl=
this.Act;if(Xl<=0)Xl=width-(this.I0*2);if(Xl<0)Xl=0;if(Xl>(B5[2]-B5[0]))B5=A.abL(
B5,Xl);}if((!!(Bv&0x110)&&!!(Bv&0x28))&&((B5[3]-B5[1])>(Dd[3]-Dd[1])))Bv&=~0x110;
if(!!(Bv&0x110))Bv&=~0x28;if((((Bv&0x2)===0x2)&&!!(Bv&0x5))&&((B5[2]-B5[0])>(Dd[
2]-Dd[0])))Bv&=~0x2;if(((Bv&0x2)===0x2))Bv&=~0x5;if((B5[2]-B5[0])!==(Dd[2]-Dd[0]
)){if(((Bv&0x4)===0x4))B5=A.abM(B5,Dd[2]-(B5[2]-B5[0]));else if(((Bv&0x2)===0x2)
)B5=A.abM(B5,(Dd[0]+(((Dd[2]-Dd[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Dd[3]-Dd[1])){if(((Bv&0x20)===0x20))B5=A.abO(B5,Dd[3]-(B5[3]-B5[1]));else
if(((Bv&0x100)===0x100))B5=A.abO(B5,((Dd[1]+(((Dd[3]-Dd[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bv&0x10)===0x10))B5=
A.abO(B5,(Dd[1]+(((Dd[3]-Dd[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(
0,2));return A.abh(B5,this.Bt);},_Init:function(aArg){A.Core.Ep._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.K$();this.__proto__=A.Core.Ep;
A.Core.Ep._Done.call(this);},_Mark:function(D){var B;A.Core.Ep._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.En)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.Auo={attrString:null,AttrSet:
null,String:A.jV,J8:0x12,Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Df();Ch=Ch+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CZ.Bhn(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ch*255)>>8,(Ch*255)>>8,(Ch*255)>>8,(Ch
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.O_],this);}A.Core.Ep.H.call(this,E);A.pe([this,this.AiH],this
);},AiH:function(G){},Xv:function(G){var B;var AK5;AK5=(B=this.M)[2]-B[0];if(AK5<
0)AK5=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4E
,0);if(!!this.attrString)this.attrString.Bm9(this.AttrSet,this.String,AK5,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);A.pe([this,this.AiH],this);
},O_:function(G){A.pe([this,this.Xv],this);},Bfa:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);},A7:function(E){var B;E&=~0x140;if(E===this.
J8)return;this.J8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);A.pe([
this,this.AiH],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.O_],this);},A9d:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bfa],this.AttrSet,0);A.z9([this,this.O_
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bfa],this.AttrSet,0);A.zV([this,this.O_],this.AttrSet,1);}A.pe([this,this.
O_],this);},Df:function(){var B;if((this.String===A.jV)||!this.AttrSet)return EY;
if(!this.attrString)this.Xv(this);if(!this.attrString)return EY;var Bv=this.J8;var
C4=this.attrString.Bij();var Dd=A.aaT(this.M,BF);var B5=[].concat(Dd.slice(0,2),
A.abf(Dd.slice(0,2),C4));if(!C4[0]||!C4[1])return EY;if(((Bv&0x80)===0x80)){if(this.
attrString.AjQ())Bv=(Bv&~0x80)|0x4;else Bv=(Bv&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dd[
2]-Dd[0])){if(((Bv&0x4)===0x4))B5=A.abM(B5,Dd[2]-(B5[2]-B5[0]));else if(((Bv&0x2
)===0x2))B5=A.abM(B5,(Dd[0]+(((Dd[2]-Dd[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dd[3]-Dd[1])){if(((Bv&0x20)===0x20))B5=A.abO(B5,Dd[3]-(B5[3]-B5[1])
);else if(((Bv&0x10)===0x10))B5=A.abO(B5,(Dd[1]+(((Dd[3]-Dd[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Ep._Init.call(this,aArg);
this.__proto__=C.Auo;this.U=0x3;},_Mark:function(D){var B;A.Core.Ep._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.AnW={Air:
null,Fy:null,Aid:0,Aic:0,UU:A.wf,Ci:A.abi(4,3,0,null),AGi:A.wf,Td:0,Apl:0,Kj:function(
E){if(A.aaX(E,this.Kn))return;A.Core.Zi.Kj.call(this,E);this.Ci.Set(3,0,E[0]);this.
Ci.Set(3,1,E[1]);this.Ci.Set(3,2,1);this.Td=0x45;this.Fy=null;A.pe([this,this.Ai1
],this);},Ki:function(E){if(A.aaX(E,this.Mx))return;A.Core.Zi.Ki.call(this,E);this.
Ci.Set(2,0,E[0]);this.Ci.Set(2,1,E[1]);this.Ci.Set(2,2,1);this.Td=0x45;this.Fy=null;
A.pe([this,this.Ai1],this);},DI:function(E){if(A.aaX(E,this.Ex))return;A.Core.Zi.
DI.call(this,E);this.Ci.Set(1,0,E[0]);this.Ci.Set(1,1,E[1]);this.Ci.Set(1,2,1);this.
Td=0x45;this.Fy=null;A.pe([this,this.Ai1],this);},DY:function(E){if(A.aaX(E,this.
Eo))return;A.Core.Zi.DY.call(this,E);this.Ci.Set(0,0,E[0]);this.Ci.Set(0,1,E[1]);
this.Ci.Set(0,2,1);this.Td=0x45;this.Fy=null;A.pe([this,this.Ai1],this);},A0X:function(
){return;},Ai1:function(G){var B;this.Air=null;if(this.Td===0x00)return;if(this.
Td===0x45){var K0=A._NewObject(A.Graphics.Axt,0);K0=K0.ANg(this.Ci.Get(0,0),this.
Ci.Get(0,1),this.Ci.Get(1,0),this.Ci.Get(1,1),this.Ci.Get(2,0),this.Ci.Get(2,1),
this.Ci.Get(3,0),this.Ci.Get(3,1));if(!!K0){K0.ABv(0,0);this.Ci.Set(0,2,K0.UI*240
);K0.ABv(1,0);this.Ci.Set(1,2,K0.UI*240);K0.ABv(1,1);this.Ci.Set(2,2,K0.UI*240);
K0.ABv(0,1);this.Ci.Set(3,2,K0.UI*240);}this.A0X();}if((((this.Td===0x4D)&&!!this.
Fy)&&!!this.UU[0])&&!!this.UU[1]){var AiW=[].concat(BF,this.UU);var AiV=this.AGi;
var AfQ=AiW[0]-AiV[0];var Az=AiW[2]-AiV[0];var D4=AiW[1]-AiV[1];var Ro=AiW[3]-AiV[
1];this.Fy.AeT(AfQ,D4);this.Ci.Set(0,0,this.Fy.PW+this.Aic);this.Ci.Set(0,1,this.
Fy.PX+this.Aid);this.Ci.Set(0,2,this.Fy.UI);this.Fy.AeT(Az,D4);this.Ci.Set(1,0,this.
Fy.PW+this.Aic);this.Ci.Set(1,1,this.Fy.PX+this.Aid);this.Ci.Set(1,2,this.Fy.UI);
this.Fy.AeT(Az,Ro);this.Ci.Set(2,0,this.Fy.PW+this.Aic);this.Ci.Set(2,1,this.Fy.
PX+this.Aid);this.Ci.Set(2,2,this.Fy.UI);this.Fy.AeT(AfQ,Ro);this.Ci.Set(3,0,this.
Fy.PW+this.Aic);this.Ci.Set(3,1,this.Fy.PX+this.Aid);this.Ci.Set(3,2,this.Fy.UI);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.Eo=[(this.
Ci.Get(0,0)+0.5)|0,(this.Ci.Get(0,1)+0.5)|0];this.Ex=[(this.Ci.Get(1,0)+0.5)|0,(
this.Ci.Get(1,1)+0.5)|0];this.Mx=[(this.Ci.Get(2,0)+0.5)|0,(this.Ci.Get(2,1)+0.5
)|0];this.Kn=[(this.Ci.Get(3,0)+0.5)|0,(this.Ci.Get(3,1)+0.5)|0];this.A0X();}this.
Apl=this.Td;this.Td=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));},BmI:function(E){if(A.aaX(E,this.AGi))return;this.AGi=E;if((this.Apl!==0x45)&&(
this.Td===0x00)){this.Td=this.Apl;A.pe([this,this.Ai1],this);}},AqZ:function(E9){
var B;if(!!!this.Air){this.Air=A._NewObject(A.Graphics.A6V,0);this.Air.ANg(this.
Ci.Get(0,0),this.Ci.Get(0,1),this.Ci.Get(1,0),this.Ci.Get(1,1),this.Ci.Get(2,0),
this.Ci.Get(2,1),this.Ci.Get(3,0),this.Ci.Get(3,1));}if(!this.Air.AeT(E9))return BF;
var ApO=[].concat(BF,this.UU);var Ej=this.Air.PW*(ApO[2]-ApO[0]);var De=this.Air.
PX*(ApO[3]-ApO[1]);return A.abf([Ej|0,De|0],ApO.slice(0,2));},A$q:function(Bbk,L2
){var B;this.Air=null;if(!L2)throw new Error(I7);if(!this.Fy)this.Fy=A._NewObject(
A.Graphics.Axt,0);this.Fy.Bgw(L2);this.Aic=Bbk[0];this.Aid=Bbk[1];this.Apl=0x4D;
this.Td=0x00;if(!this.UU[0]||!this.UU[1])return;var AiW=[].concat(BF,this.UU);var
AiV=this.AGi;var AfQ=AiW[0]-AiV[0];var Az=AiW[2]-AiV[0];var D4=AiW[1]-AiV[1];var
Ro=AiW[3]-AiV[1];this.Fy.AeT(AfQ,D4);this.Ci.Set(0,0,this.Fy.PW+this.Aic);this.Ci.
Set(0,1,this.Fy.PX+this.Aid);this.Ci.Set(0,2,this.Fy.UI);this.Fy.AeT(Az,D4);this.
Ci.Set(1,0,this.Fy.PW+this.Aic);this.Ci.Set(1,1,this.Fy.PX+this.Aid);this.Ci.Set(
1,2,this.Fy.UI);this.Fy.AeT(Az,Ro);this.Ci.Set(2,0,this.Fy.PW+this.Aic);this.Ci.
Set(2,1,this.Fy.PX+this.Aid);this.Ci.Set(2,2,this.Fy.UI);this.Fy.AeT(AfQ,Ro);this.
Ci.Set(3,0,this.Fy.PW+this.Aic);this.Ci.Set(3,1,this.Fy.PX+this.Aid);this.Ci.Set(
3,2,this.Fy.UI);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping()
);this.Eo=[(this.Ci.Get(0,0)+0.5)|0,(this.Ci.Get(0,1)+0.5)|0];this.Ex=[(this.Ci.
Get(1,0)+0.5)|0,(this.Ci.Get(1,1)+0.5)|0];this.Mx=[(this.Ci.Get(2,0)+0.5)|0,(this.
Ci.Get(2,1)+0.5)|0];this.Kn=[(this.Ci.Get(3,0)+0.5)|0,(this.Ci.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.A0X();},_Init:
function(aArg){A.Core.Zi._Init.call(this,aArg);(this.Ci=[]).__proto__=C.AnW.Ci;this.
__proto__=C.AnW;this.U=0x3;},_Mark:function(D){var B;A.Core.Zi._Mark.call(this,D
);if((B=this.Air)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AU4={Fm:null,bitmap:null
,O:null,G0:255,Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Np=aOffset[0];var Nq=aOffset[1];var AE=[].concat(BF,this.
UU);aBlend=aBlend&&((this.U&0x2)===0x2);Ch=Ch+1;var BdK;var BdL;var BdM;var BdN;
var By$=this.G0;BdK=BdL=BdM=BdN=By$;var Ala=255|(255<<8)|(255<<16)|((((Ch*BdK)>>
8)&0xFF)<<24);var Alb=255|(255<<8)|(255<<16)|((((Ch*BdL)>>8)&0xFF)<<24);var Bxt=
255|(255<<8)|(255<<16)|((((Ch*BdM)>>8)&0xFF)<<24);var Bxu=255|(255<<8)|(255<<16)|((((
Ch*BdN)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(EY,aOffset));CZ.AhD(aClip,this.bitmap
,0,this.Ci.Get(0,0)+Np,this.Ci.Get(0,1)+Nq,this.Ci.Get(0,2),this.Ci.Get(1,0)+Np,
this.Ci.Get(1,1)+Nq,this.Ci.Get(1,2),this.Ci.Get(2,0)+Np,this.Ci.Get(2,1)+Nq,this.
Ci.Get(2,2),this.Ci.Get(3,0)+Np,this.Ci.Get(3,1)+Nq,this.Ci.Get(3,2),AE,Ala,Alb,
Bxt,Bxu,aBlend,true);},GT:function(CM){if(!this.O||!this.Fm)return null;var BP=(
A.Core.AdW.isPrototypeOf(CM)?CM:null);var D0=(A.Core.Aqj.isPrototypeOf(CM)?CM:null
);if(!BP&&!D0)return null;var Fo=BF;var B0=this.Fm.Ab;while(!!B0&&(B0!==this.O)){
Fo=A.abe(Fo,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fm;if(!!BP&&!BP.Down)this.Fm=null;
if(!!BP){BP.HW=A.abf(this.AqZ(BP.HW),Fo);BP.NL=A.abf(this.AqZ(BP.NL),Fo);return X.
GT(BP);}if(!!D0){var Bzd=A.abf(this.AqZ(A.abe(D0.HW,D0.DC)),Fo);D0.HW=A.abf(this.
AqZ(D0.HW),Fo);D0.NL=A.abf(this.AqZ(D0.NL),Fo);D0.DC=A.abe(D0.HW,Bzd);return X.GT(
D0);}return C.AnW.GT.call(this,CM);},X6:function(C$,BG,Od,Z4,AcN,AcM){var B;if(!
this.O||!((this.O.U&0x18)===0x18))return null;var pos=A.aaI(C$);pos=this.AqZ(pos
);var ApO=[].concat(BF,this.UU);if(!A.wa(ApO,pos))return null;var Js=this.O.X6(A.
abh(A.abh([0,0,C$[2]-C$[0],C$[3]-C$[1]],pos),this.O.M.slice(0,2)),BG,Od,Z4,null,
AcM);if(!!Js)this.Fm=Js.Cg;else this.Fm=null;if(!!this.Fm)return A._NewObject(A.
Core.Aux,0).Initialize(this,BF);return null;},Rz:function(G){var B;var BdO=this.
UU;if(!!this.O)this.bitmap=this.O.Fv;else this.bitmap=null;if(!!this.bitmap)this.
UU=this.bitmap.FrameSize;else this.UU=BF;if(((A.aaX(BdO,this.UU)||((this.Apl===0x45
)&&(this.Td===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if(((this.Apl!==0x45)&&(this.Td===0x00))&&!A.aaX(BdO,this.UU)){this.Td=this.Apl;
A.pe([this,this.Ai1],this);}},Do:function(E){var B;if(E===this.G0)return;this.G0=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());},BlP:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ab))throw new Error(Ik);if(!!this.O){A.
z9([this,this.Rz],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.zV([this,this.Rz
],E,0);this.bitmap=E.Fv;}this.Rz(this);},AvT:function(){return this.G0;},_Init:function(
aArg){C.AnW._Init.call(this,aArg);this.__proto__=C.AU4;},_Mark:function(D){var B;
C.AnW._Mark.call(this,D);if((B=this.Fm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Ad6={Hs:null,AQ:0xFFFFFFFF,DC:A.wf
,AN5:false,K$:function(){this.A1e();},Ka:function(CZ,aClip,aOffset,Ch,aBlend){if(
!this.Hs)return;var Dy;var DK;var DF;var DJ;var B4=this.AQ;Ch=Ch+1;Dy=DK=DF=DJ=B4;
if(Ch<256){Dy=(Dy&0x00FFFFFF)|((((Ch*((Dy>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ch*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ch*((DF>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ch*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}CZ.
Ad6(aClip,this.Hs,A.abh(this.M,aOffset),this.AN5,this.DC,Dy,DK,DJ,DF,true,true,0
);},A1e:function(){return;},Ai2:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hs)this.Ab.Bg(this.M);},Ano:function(E){
var B;if(A.aaX(E,this.DC))return;this.DC=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hs)this.Ab.Bg(this.M);},BlK:function(E){var B;if(E===this.AN5)return;this.
AN5=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hs)this.Ab.Bg(this.M);},Zc:function(
E){var B;if(E===this.Hs)return;if(!!this.Hs)A.z9([this,this.Ai2],this.Hs,0);this.
Hs=E;if(!!this.Hs)A.zV([this,this.Ai2],this.Hs,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.Cw(0x0,0x1
);},_Init:function(aArg){A.Core.Ep._Init.call(this,aArg);this.__proto__=C.Ad6;},
_Done:function(){this.K$();this.__proto__=A.Core.Ep;A.Core.Ep._Done.call(this);}
,_Mark:function(D){var B;A.Core.Ep._Mark.call(this,D);if((B=this.Hs)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hg={Hs:null,AQ:0xFFFFFFFF
,DC:A.wf,Width:1,K$:function(){this.A1e();},Ka:function(CZ,aClip,aOffset,Ch,aBlend
){if(!this.Hs)return;var Dy;var DK;var DF;var DJ;var B4=this.AQ;Ch=Ch+1;Dy=DK=DF=
DJ=B4;if(Ch<256){Dy=(Dy&0x00FFFFFF)|((((Ch*((Dy>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&
0x00FFFFFF)|((((Ch*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ch*((DF>>
24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ch*((DJ>>24)&0xFF))>>8)&0xFF)<<
24);}CZ.Hg(aClip,this.Hs,A.abh(this.M,aOffset),false,this.DC,this.Width,0,0,0,3,
Dy,DK,DJ,DF,true,true);},A1e:function(){return;},Ai2:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hs)this.Ab.Bg(this.
M);},Ano:function(E){var B;if(A.aaX(E,this.DC))return;this.DC=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hs)this.Ab.Bg(this.M);},NY:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hs)this.Ab.Bg(this.M);},Zc:function(E){var B;if(E===this.Hs)return;if(!!this.
Hs)A.z9([this,this.Ai2],this.Hs,0);this.Hs=E;if(!!this.Hs)A.zV([this,this.Ai2],this.
Hs,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Y:function(E){if(E
)this.Cw(0x1,0x0);else this.Cw(0x0,0x1);},_Init:function(aArg){A.Core.Ep._Init.call(
this,aArg);this.__proto__=C.Hg;},_Done:function(){this.K$();this.__proto__=A.Core.
Ep;A.Core.Ep._Done.call(this);},_Mark:function(D){var B;A.Core.Ep._Mark.call(this
,D);if((B=this.Hs)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BDl={A4n:0x1,A4m:0x2,A4o:0x4,A4r:0x8,A4q:0x10,A4p:0x20,BEB:0x40,BEC:0x80,BEN:
0x100};C.BER={A4n:0x1,A4m:0x2,A4o:0x4,A4r:0x8,A4q:0x10,A4p:0x20,BBQ:0x40,BBP:0x80
,BBV:0x100};C.BD0={Normal:0,BEw:1,BEu:2,BEv:3};
C._Init=function(){C.DR.__proto__=A.Core.Aj2;C.AL.__proto__=A.Core.Ep;C.CC.__proto__=
A.Core.Ep;C.NJ.__proto__=A.Core.Ep;C.Am.__proto__=A.Core.Ep;C.Text.__proto__=A.Core.
Ep;C.Auo.__proto__=A.Core.Ep;C.AnW.__proto__=A.Core.Zi;C.AU4.__proto__=C.AnW;C.Ad6.
__proto__=A.Core.Ep;C.Hg.__proto__=A.Core.Ep;};C._ReInit=function(){};C.DE=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */