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
var Cf=[1,1];var BD=[0,0];var E8=[0,0,0,0];var Hs="\uFEFF";var I0="No matrix to perform 3D transformation";
var Iw="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.C8={KO:null,Ald:1,Alc:1,AQ:0xFFFFFFFF,Ks:function(C0,aClip,aOffset,Ck,aBlend){var
B;var Agw=this.Alc;var Agx=this.Ald;var AdD=A.abf(this.Et,aOffset);var AdE=A.abf(
this.ED,aOffset);var AlD;var AlE;var B4=this.AQ;if(A.aaX(AdD,AdE))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;AlD=AlE=B4;if(Ck<256){AlD=(AlD&0x00FFFFFF)|((((
Ck*((AlD>>24)&0xFF))>>8)&0xFF)<<24);AlE=(AlE&0x00FFFFFF)|((((Ck*((AlE>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agw===1)&&(Agx===1))C0.Avc(aClip,AdD,AdE,AlD,AlE,aBlend);else
C0.Bi3(aClip,AdD,AdE,Agw,Agx,AlD,AlE,aBlend);},GetExtent:function(){var Agw=this.
Alc;var Agx=this.Ald;var AdD=this.Et;var AdE=this.ED;if(((Agw===1)&&(Agx===1))||
A.aaX(AdD,AdE))return A.Core.Aki.GetExtent.call(this);var AiF=Agw/2;var AiG=Agx/
2;var Apr=AdD[0];var Aps=AdD[1];var Apt=AdE[0];var Apu=AdE[1];var Ke=Apt-Apr;var
Kf=Apu-Aps;var I5=Math.sqrt((Ke*Ke)+(Kf*Kf));Ke=Ke/I5;Kf=Kf/I5;var Bdi=Apr+(Kf*AiF
);var Bdj=Aps-(Ke*AiF);var AJP=Apt+(Kf*AiG);var AJQ=Apu-(Ke*AiG);var AJR=Apt-(Kf
*AiG);var AJS=Apu+(Ke*AiG);var AJT=Apr-(Kf*AiF);var AJU=Aps+(Ke*AiF);var left=Bdi;
var right=Bdi;var top=Bdj;var bottom=Bdj;if(AJP<left)left=AJP;if(AJR<left)left=AJR;
if(AJT<left)left=AJT;if(AJP>right)right=AJP;if(AJR>right)right=AJR;if(AJT>right)
right=AJT;if(AJQ<top)top=AJQ;if(AJS<top)top=AJS;if(AJU<top)top=AJU;if(AJQ>bottom
)bottom=AJQ;if(AJS>bottom)bottom=AJS;if(AJU>bottom)bottom=AJU;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cf));return Az;
},RP:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A$i:function(E){var B;if(E<1)E=1;if(E===this.Ald)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ald=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alc!==1))&&!this.KO){
this.KO=A.aaL(A.aci.As5);if(this.KO.N6)A.zV([this,this.RP],this.KO,0);}if(((E===
1)&&(this.Alc===1))&&!!this.KO){if(this.KO.N6)A.z9([this,this.RP],this.KO,0);this.
KO=null;}},A$h:function(E){var B;if(E<1)E=1;if(E===this.Alc)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alc=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Ald!==1))&&!this.
KO){this.KO=A.aaL(A.aci.As5);if(this.KO.N6)A.zV([this,this.RP],this.KO,0);}if(((
E===1)&&(this.Ald===1))&&!!this.KO){if(this.KO.N6)A.z9([this,this.RP],this.KO,0);
this.KO=null;}},Nu:function(E){var B;if(E<1)E=1;if((E===this.Alc)&&(E===this.Ald
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Alc=E;this.Ald=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KO){this.KO=A.aaL(A.aci.As5);if(this.KO.N6)A.zV([this,this.
RP],this.KO,0);}if((E===1)&&!!this.KO){if(this.KO.N6)A.z9([this,this.RP],this.KO
,0);this.KO=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.Aki._Init.call(this,aArg);this.__proto__=C.C8;},_Mark:function(D){var
B;A.Core.Aki._Mark.call(this,D);if((B=this.KO)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANB:0xFFFFFFFF,ANC:0xFFFFFFFF,ANG:0xFFFFFFFF
,ANF:0xFFFFFFFF,AQ:0xFFFFFFFF,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;var DE=
this.ANF;var DP=this.ANG;var DJ=this.ANB;var DO=this.ANC;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ck=Ck+1;if((((DE===DP)&&(DJ===DO))&&(DE===DJ))&&(DE===0xFFFFFFFF
))DE=DP=DJ=DO=B4;else if(B4!==0xFFFFFFFF){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)
*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DE=(DE&0xFFFFFF00)|((((DE&0xFF)*((B4&0xFF)+
1))>>8)&0xFF);DE=(DE&0xFFFF00FF)|((((((DE>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF
)<<8);DE=(DE&0xFF00FFFF)|((((((DE>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);
DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DP=(DP&
0xFFFFFF00)|((((DP&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DP=(DP&0xFFFF00FF)|((((((DP>>8
)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DP=(DP&0xFF00FFFF)|((((((DP>>16)&0xFF)
*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*(((B4>>
24)&0xFF)+1))>>8)&0xFF)<<24);DJ=(DJ&0xFFFFFF00)|((((DJ&0xFF)*((B4&0xFF)+1))>>8)&
0xFF);DJ=(DJ&0xFFFF00FF)|((((((DJ>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DJ=(
DJ&0xFF00FFFF)|((((((DJ>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DO=(DO&0x00FFFFFF
)|((((((DO>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DO=(DO&0xFFFFFF00)|((((
DO&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DO=(DO&0xFFFF00FF)|((((((DO>>8)&0xFF)*(((B4>>8
)&0xFF)+1))>>8)&0xFF)<<8);DO=(DO&0xFF00FFFF)|((((((DO>>16)&0xFF)*(((B4>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ck<256){DE=(DE&0x00FFFFFF)|((((Ck*((DE>>24)&0xFF))>>8)&
0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF
)|((((Ck*((DJ>>24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF
))>>8)&0xFF)<<24);}C0.Avr(aClip,A.abh(this.M,aOffset),DE,DP,DO,DJ,aBlend);},AwE:
function(E){var B;if(E===this.ANB)return;this.ANB=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},AwF:function(E){var B;if(E===this.ANC)return;this.ANC=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},AwH:function(E){var B;
if(E===this.ANG)return;this.ANG=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},AwG:function(E){var B;if(E===this.ANF)return;this.ANF=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fq:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BW={Width:1,AQ:0xFFFFFFFF,Ks:function(C0
,aClip,aOffset,Ck,aBlend){var B;var DE;var DP;var DJ;var DO;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DE=DP=DJ=DO=B4;if(Ck<256){DE=(DE&0x00FFFFFF
)|((((Ck*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ck*((DJ>>24)&0xFF))>>8)&0xFF)<<24);DO=(
DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);}C0.Bi1(aClip,A.abh(this.M
,aOffset),this.Width,DE,DP,DO,DJ,aBlend);},Nu:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BW;},_className:"Views::Border"};C.NY={timer:null,Al:null,MX:-1,AQ:0xFFFFFFFF,Avd:
0x1F,T0:0,Dx:0,Anr:A.wf,VJ:false,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;var
ND=this.T0;if(this.MX>=0)ND=this.MX;if(!this.Al||(ND>=this.Al.NoOfFrames))return;
this.Al.Update();var DE;var DP;var DO;var DJ;var B4=this.AQ;var Kl=(((Ck+1)*255)>>
8)+1;var Oq=this.Avd;var Az=A.abh(this.M,aOffset);var ALg=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anr);aBlend=aBlend&&((this.U&0x2)===0x2);DE=DP=DJ=DO=B4;if(Kl<256
){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((
DP>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kl)>>8)&
0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(((this.
Anr[0]>0)&&(ALg[0]>0))&&!((Oq&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-ALg[
0];if(((Oq&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oq=Oq|0x4;}else if(((Oq&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oq=Oq|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oq=Oq|0x5;}}if(((this.Anr[1]>0)&&(ALg[1]>0))&&!((Oq&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-ALg[1];if(((Oq&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oq=Oq|0x8;}else if(((Oq&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oq=Oq|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oq=Oq|
0xA;}}C0.Bi0(aClip,this.Al,ND,Az,Oq,DE,DP,DO,DJ,aBlend);},RP:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mm:function(G){var B;var ND=
this.MX;var Tx=0;if(!!this.Al)Tx=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MX<0))&&(Tx>0))this.Dx=this.timer.Bs-(this.T0*this.Al.FrameDelay);if(
!!this.timer&&(Tx>0)){var Av=(this.timer.Bs-this.Dx)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Tx){ND=ND%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tx);}}if(((ND!==
this.MX)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MX=ND;if(!Tx&&
!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zx:function(E){var B;if(this.VJ===E)return;this.VJ=E;this.MX=-1;if(
!E&&!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Ael);A.zV([this,this.Mm],this.timer,0);A.pe([this,this.
Mm],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A_v:function(
E){var B;if(E===this.Avd)return;this.Avd=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cw:function(E){var B;if(E<0)E=0;if((E===this.T0)&&(this.MX===-1)
)return;this.T0=E;if(!this.timer)this.MX=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N6)A.z9([this,this.RP],this.Al,0);this.Al=E;this.MX=-1;if(!!E&&E.N6)A.zV([this,this.
RP],E,0);if(this.VJ){this.Zx(false);this.Zx(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A_M:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anr))return;this.Anr=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Avd&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NY;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MX:0,AQ:0xFFFFFFFF
,Kn:0x12,T0:0,G9:255,VJ:false,Abb:false,Ks:function(C0,aClip,aOffset,Ck,aBlend){
var B;var ND=this.T0;if(this.MX>=0)ND=this.MX;if(!this.Al||(ND>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dd();var C6=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DE;var DP;var DO;var DJ;var B4=this.AQ;var Kl=(((
Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DE=DP=DJ=DO=B4;if(Kl<256
){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((
DP>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kl)>>8)&
0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C6))C0.A6k(aClip,this.Al,ND,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DE,DP,DO,DJ,aBlend);else C0.Bpl(aClip,this.Al,ND
,A.abh(AE,aOffset),[].concat(BD,C6),DE,DP,DO,DJ,aBlend,true);},RP:function(G){var
B;if(((this.Abb&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mm:function(
G){var B;var ND=this.MX;var Tx=0;if(!!this.Al)Tx=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MX<0))&&(Tx>0))this.Dx=this.timer.Bs-(this.T0*this.Al.FrameDelay
);if(!!this.timer&&(Tx>0)){var Av=(this.timer.Bs-this.Dx)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Tx){ND=ND%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Tx);}}if(((ND!==
this.MX)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MX=ND;if(!Tx&&
!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;}},Je:function(E
){if(E===this.Abb)return;this.Abb=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dd());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zx:function(
E){var B;if(this.VJ===E)return;this.VJ=E;this.MX=-1;if(!E&&!!this.timer){A.z9([this
,this.Mm],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Ael);A.zV([this,this.Mm],this.timer,0);A.pe([this,this.Mm],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kn)return;
this.Kn=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cw:function(E){
var B;if(E<0)E=0;if((E===this.T0)&&(this.MX===-1))return;this.T0=E;if(!this.timer
)this.MX=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N6)A.z9([this,this.RP],this.
Al,0);this.Al=E;this.MX=-1;if(!!E&&E.N6)A.zV([this,this.RP],E,0);if(this.VJ){this.
Zx(false);this.Zx(true);}if(((this.Abb&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
CZ:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;this.G9=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Dd:function(){var
B;if(!this.Al)return E8;var Bu=this.Kn;var C6=this.Al.FrameSize;var Be=this.M;var
width=Be[2]-Be[0];var height=Be[3]-Be[1];if(!C6[0]||!C6[1])return E8;var Dh=[0,0
,width,height];var B5=Dh;if(((Bu&0x40)===0x40)){var A4C=((((Dh[2]-Dh[0])<<16)+((
C6[0]/2)|0))/C6[0])|0;var ABo=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai4=
A4C;if(ABo>Ai4)Ai4=ABo;B5=A.abL(B5,((C6[0]*Ai4)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai4)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4C=((((Dh[2]-Dh[0])<<16)+((C6[
0]/2)|0))/C6[0])|0;var ABo=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai4=
A4C;if(ABo<Ai4)Ai4=ABo;B5=A.abL(B5,((C6[0]*Ai4)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai4)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C6);if((B5[2]-B5[0])
!==(Dh[2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Be.slice(0,2));return B5;},Bln:function(){return this.
AQ;},AST:function(){return this.T0;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,Em:null,CI:
A.jV,String:A.jV,Oo:null,Amq:A.wf,Jh:0,Oa:0,AcQ:0,Br:A.wf,Kn:0x12,AQ:0xFFFFFFFF,
AfE:false,Abb:false,Yv:false,AOo:false,H2:false,Lh:function(){if(!!this.Oo){this.
A2H(this.Oo);this.Oo=null;}},Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;if((this.
CI===A.jV)||!this.B7)return;var Bu=this.Kn;var font=this.B7;var Dh=A.abh(this.M,
aOffset);var DE;var DP;var DO;var DJ;var col=this.AQ;var Kl=(((Ck+1)*255)>>8)+1;
var Kk=this.CI.charCodeAt(0)||0;var AE=A.abh(this.Dd(),aOffset);var Bq=[Dh[0]-AE[
0],(Dh[1]-AE[1])-font.Ascent];if(Kk<1)return;DE=DP=DJ=DO=col;if(Kl<256){DE=(DE&0x00FFFFFF
)|((((((DE>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*
Kl)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DJ=(
DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj7())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kk===1)&&!((Bu&0x40)===
0x40)){C0.A6K(aClip,font,this.CI,2,(this.CI.charCodeAt(1)||0)-1,Dh,Bq,0,0,DE,DP,
DO,DJ,true);return;}var leading=font.Leading;if(this.Oa>0)leading=(this.Oa-font.
Ascent)-font.Descent;var AaV=(font.Ascent+font.Descent)+leading;var By$=aClip[1]-
AE[1];var Bza=aClip[3]-AE[1];var A1V=AE[2]-AE[0];var Di=0;var O=1;var B4=this.CI.
charCodeAt(1)||0;while(((Di+AaV)<By$)&&(B4>0)){O=O+B4;Di=Di+AaV;B4=this.CI.charCodeAt(
O)||0;}while((Di<Bza)&&(B4>0)){var Mi=A.abe(Bq,[0,Di]);var Amj=0;var Pj=false;if(((((
Bu&0x40)===0x40)&&((this.CI.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CI.charCodeAt(
O+1)||0)!==0x0A))&&((this.CI.charCodeAt(O+B4)||0)!==0x00))Pj=true;if(Pj&&!!(Bu&0x6
)){var Ap7=O+B4;var Azv=this.CI.indexOf(String.fromCharCode(0x20),O+1);var Azw=this.
CI.indexOf(String.fromCharCode(0xA0),O+1);if(((Azv<0)||(Azv>=Ap7))&&((Azw<0)||(Azw>=
Ap7)))Pj=false;}if(Pj)Amj=A1V;else if(((Bu&0x4)===0x4))Mi=[(Mi[0]-A1V)+font.YA(this.
CI,O+1,B4-1),Mi[1]];else if(((Bu&0x2)===0x2))Mi=[(Mi[0]-((A1V/2)|0))+((font.YA(this.
CI,O+1,B4-1)/2)|0),Mi[1]];C0.A6K(aClip,font,this.CI,O+1,B4-1,Dh,Mi,Amj,0,DE,DP,DO
,DJ,true);O=O+B4;Di=Di+AaV;B4=this.CI.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BgC;BgC=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BgC&&
!this.AcQ)&&this.AfE)&&this.H2)&&!((this.U&0x2000)===0x2000)){this.CI=A.jV;this.
H2=false;A.pe([this,this.Pl],this);}if(((this.Yv&&this.H2)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CI=
A.jV;this.H2=false;A.pe([this,this.Pl],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiX],this);},By3:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},By2:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2H:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzn:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiX:function(G){A.pe(this.Em
,this);},Pl:function(G){A.pe([this,this.XS],this);},XS:function(G){var B;if(this.
H2)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XK=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfE){
if(this.AcQ>0)XK=this.AcQ;else if(!this.Abb)XK=width-(this.Jh*2);else XK=width;if(
XK<0)XK=1;}if(!!this.Oo){this.A2H(this.Oo);this.Oo=null;}this.H2=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOo)this.Oo=this.Bzn(length
);this.CI=font.BoJ(this.String,0,XK,length,this.Oo);if(!!this.Oo&&!this.Bkf()){this.
A2H(this.Oo);this.Oo=null;}}else this.CI=A.jV;this.Amq=BD;if(((this.Yv&&(this.CI
!==A.jV))&&!this.Abb)&&!!font){var Bu=this.Kn;var leading=font.Leading;var IH=this.
CI;var ALa=this.Aj7();if(((Bu&0x80)===0x80)){if(ALa)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var ABj=(font.
Ascent+font.Descent)+leading;var Kk=IH.charCodeAt(0)||0;var Al1=((height+leading
)/ABj)|0;var A19=false;var AJX=false;if(Al1<=0)Al1=1;if(Kk>Al1){var Bd=0;var ABk=
0;var AK_=Kk-1;var K8;var NE=IH.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))ABk=Kk-Al1;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){ABk=((Kk-Al1)/2)|0;AK_=(ABk+Al1)-1;}else
AK_=Al1-1;A19=ABk>0;AJX=AK_<(Kk-1);for(K8=1;Bd<ABk;Bd=Bd+1)K8=K8+(IH.charCodeAt(
K8)||0);if(AJX)for(NE=K8;Bd<AK_;Bd=Bd+1)NE=NE+(IH.charCodeAt(NE)||0);if(A19){var
I5=IH.charCodeAt(K8)||0;tmp=(Hs+A.abW(IH,K8,I5))+Hs;tmp=A.abQ(tmp,0,(I5+2)&0xFFFF
);K8=K8+I5;if((tmp.charCodeAt(I5)||0)===0x0A){tmp=A.abQ(tmp,I5,0xFEFF);tmp=A.abQ(
tmp,I5+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IH,K8,NE-K8);if(AJX&&(
NE>=K8)){var I5=IH.charCodeAt(NE)||0;var QG=(Hs+A.abW(IH,NE,I5))+Hs;QG=A.abQ(QG,
0,(I5+2)&0xFFFF);QG=A.abQ(QG,1,0xFEFF);if((QG.charCodeAt(I5)||0)===0x0A){QG=A.abQ(
QG,I5,0xFEFF);QG=A.abQ(QG,I5+1,0x0A);}if((QG.charCodeAt(2)||0)===0x0A){QG=A.abQ(
QG,2,0xFEFF);QG=A.abQ(QG,1,0x0A);}else QG=A.abQ(QG,1,0xFEFF);tmp=tmp+QG;}IH=String.
fromCharCode(Al1&0xFFFF)+tmp;}var Bd=0;var inx=1;var AKI=width-(this.Jh*2);if(this.
AfE&&(this.AcQ>0))AKI=this.AcQ;Kk=IH.charCodeAt(0)||0;for(;Bd<Kk;Bd=Bd+1){var Amg=
A19&&!Bd;var Amh=AJX&&(Bd===(Kk-1));var Xz=false;var XA=false;var Aut=ALa;if((ALa&&
Amg)&&!Amh){Amg=false;Amh=true;}else if((ALa&&Amh)&&!Amg){Amh=false;Amg=true;}var
XT=inx+1;var I5=IH.charCodeAt(inx)||0;var K8=XT;var NE=(XT+I5)-2;var A2W=-1;var A2X=-
1;if(!this.AfE&&(font.YA(IH,XT,I5-1)>AKI)){var Ao3=Bu;if(((Ao3&0x2)===0x2)&&!!(Ao3&
0x5))Ao3&=~0x2;if(((Ao3&0x2)===0x2))Ao3&=~0x5;if(((Ao3&0x4)===0x4))Xz=true;else if(((
Ao3&0x2)===0x2)){Xz=true;XA=true;}else XA=true;}if((IH.charCodeAt(K8)||0)===0x0A
)K8=K8+1;if((IH.charCodeAt(NE)||0)===0x0A)NE=NE-1;while(Xz&&((IH.charCodeAt(K8)||
0)===0xFEFF))K8=K8+1;while(XA&&((IH.charCodeAt(NE)||0)===0xFEFF))NE=NE-1;Xz=Xz&&
!Amh;XA=XA&&!Amg;while((((Xz||XA)||Amg)||Amh)&&(K8<NE)){if((Xz&&(Aut||!XA))||Amg
){if(A2W>0)IH=A.abQ(IH,A2W,0xFEFF);IH=A.abQ(IH,K8,0x2026);A2W=K8;K8=K8+1;Aut=!Aut;
Amg=false;if(font.YA(IH,XT,I5-1)<=AKI){Xz=false;XA=false;}else Xz=Xz||!XA;}if((XA&&(
!Aut||!Xz))||Amh){if(A2X>0)IH=A.abQ(IH,A2X,0xFEFF);IH=A.abQ(IH,NE,0x2026);A2X=NE;
NE=NE-1;Aut=!Aut;Amh=false;if(font.YA(IH,XT,I5-1)<=AKI){Xz=false;XA=false;}else XA=
XA||!Xz;}}inx=inx+I5;}this.Amq=[font.A7f(IH),((IH.charCodeAt(0)||0)*ABj)-leading
];this.CI=IH;}if(this.Abb&&(this.CI!==A.jV)){var Auf=[this.Jh,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dd(),Auf),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiX],this);},BmP:function(
E){if(E===this.AOo)return;this.AOo=E;this.CI=A.jV;this.H2=false;A.pe([this,this.
Pl],this);},Ho:function(E){if(E<0)E=0;if(this.Jh===E)return;this.Jh=E;this.CI=A.
jV;this.H2=false;A.pe([this,this.Pl],this);},Axb:function(E){var B;if(E<0)E=0;if(
this.Oa===E)return;this.Oa=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yv){this.CI=A.jV;this.H2=false;A.pe([this,this.Pl],this);}if(this.Abb&&
this.H2)this.H(A.abg(this.Dd(),this.Br));if(this.H2)A.pe([this,this.AiX],this);}
,BmO:function(E){if(E===this.Yv)return;this.Yv=E;if(((this.AfE&&!!!this.AcQ)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CI=A.jV;this.H2=false;
A.pe([this,this.Pl],this);},Q_:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcQ&&this.AfE)||!!E)||this.Yv)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Je:function(E){if(E===this.Abb)return;this.Abb=E;if(E&&this.Yv){this.CI=
A.jV;this.H2=false;A.pe([this,this.Pl],this);}if(E&&this.H2){var Auf=[this.Jh,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dd(),Auf),this.Br));this.U=this.U&~
0x2000;}},Boq:function(E){if(E<0)E=0;if(E===this.AcQ)return;this.AcQ=E;if(this.AfE&&
this.H2){this.CI=A.jV;this.H2=false;A.pe([this,this.Pl],this);}if(((!!!E&&this.AfE
)||this.Yv)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},KX:function(
E){if(E===this.AfE)return;this.AfE=E;if(this.H2){this.CI=A.jV;this.H2=false;A.pe([
this,this.Pl],this);}if(((E&&!!!this.AcQ)||this.Yv)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gc:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.H2)A.pe([this
,this.AiX],this);},A6:function(E){var B;if(E===this.Kn)return;this.Kn=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yv){this.CI=A.jV;this.H2=false;
A.pe([this,this.Pl],this);}if(this.H2)A.pe([this,this.AiX],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CI=A.jV;this.H2=false;A.pe([this,this.
Pl],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CI=A.jV;this.H2=false;
A.pe([this,this.Pl],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fq:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj7:function(
){if(!this.H2)this.XS(this);if(!this.Oo)return false;var result=false;var bidi=this.
Oo;result=A.v2(bidi);return result;},Bkf:function(){if(!this.H2)this.XS(this);if(
!this.Oo)return false;var result=false;var bidi=this.Oo;result=A.zZ(bidi);return result;
},AG_:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Yv)return BD;if(
!this.H2)this.XS(this);if(aIndex<0)aIndex=0;var BAA=(this.CI.charCodeAt(0)||0)-1;
var Ml=this.CI.charCodeAt(1)||0;var inx=1;var Ai9=2;var Bd=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bd<BAA)&&((inx+Ml)<=aIndex)){inx=inx+Ml;Bd=Bd+1;Ai9=Ai9+1;
aIndex=aIndex+1;Ml=this.CI.charCodeAt(inx)||0;}if(aIndex>(inx+Ml))aIndex=inx+Ml;
if(!!this.Oo)aIndex=(inx+this.By2(this.Oo,(inx+1)-Ai9,(inx+Ml)-Ai9,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var IC=this.CI.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(IC!==0xFEFF)&&(IC!==0x0A);}return[col,Bd];},AnX:function(AoS){if(((this.String===
A.jV)||!this.B7)||this.Yv)return 0;if(!this.H2)this.XS(this);var Bd=AoS[1];var col=
AoS[0];var inx=1;var Ai9=2;var Kk=this.CI.charCodeAt(0)||0;var Ml=this.CI.charCodeAt(
1)||0;if(Bd>=Kk){Bd=Kk-1;col=this.CI.length;}if(Bd<0){Bd=0;col=0;}if(col<0)col=0;
while((Bd>0)&&(Ml>0)){inx=inx+Ml;Bd=Bd-1;Ai9=Ai9+1;Ml=this.CI.charCodeAt(inx)||0;
}var XI=inx;var AK$=(inx-Ai9)+1;var Ap7=(AK$+Ml)-1;var AA7=false;while((col>=0)&&(
Ml>1)){var IC=this.CI.charCodeAt(inx+1)||0;inx=inx+1;Ml=Ml-1;AA7=(IC===0xFEFF)||(
IC===0x0A);if(!AA7){col=col-1;XI=inx;}}if((!AA7&&(col>=0))&&((this.CI.charCodeAt(
inx+1)||0)===0x00))AA7=true;if(AA7)XI=XI+1;XI=XI-Ai9;if(!!this.Oo)XI=AK$+this.By3(
this.Oo,AK$,Ap7,XI-AK$);return XI;},AUn:function(K5){var B;if((this.String===A.jV
)||!this.B7)return BD;if(!this.H2)this.XS(this);var AE=this.Dd();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B7;var Bu=this.Kn;var Kk=this.CI.charCodeAt(
0)||0;var leading=font.Leading;if(K5[1]<AE[1])K5=[K5[0],AE[1]];if(K5[1]>=AE[3])K5=[
K5[0],AE[3]-1];if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var AaV=(
font.Ascent+font.Descent)+leading;var Bd=((K5[1]-AE[1])/AaV)|0;var NM=this.ADn(Bd
);var Ml=NM.length;var Pj=false;if(((Bu&0x80)===0x80)){if(this.Aj7())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bd<(Kk-1)))Pj=true;if((Pj&&(
NM.indexOf(String.fromCharCode(0x20),0)<0))&&(NM.indexOf(String.fromCharCode(0xA0
),0)<0))Pj=false;if(Pj){var inx=1;var Ap6=Bd;while(Ap6>0){inx=inx+(this.CI.charCodeAt(
inx)||0);Ap6=Ap6-1;}if(((this.CI.charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((
inx+(this.CI.charCodeAt(inx)||0))-1)||0)===0x0A))Pj=false;}var Amj=0;var Ep=0;if(
Pj)Amj=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.YA(NM,0,Ml);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.YA(NM,0,Ml)/2)|0);var col=font.
BjT(NM,0,Ml,(K5[0]-AE[0])-Ep,Amj);if(col<0)col=0;return[col,Bd];},Afj:function(AoS
){var B;if((this.String===A.jV)||!this.B7)return BD;if(!this.H2)this.XS(this);var
Kk=this.CI.charCodeAt(0)||0;var font=this.B7;var Bu=this.Kn;var Bd=AoS[1];var col=
AoS[0];if(Bd>=Kk){Bd=Kk-1;col=this.CI.length;}if(Bd<0){Bd=0;col=0;}var NM=this.ADn(
Bd);var Ml=NM.length;var AE=this.Dd();var Pj=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj7())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bd<(Kk-1)))Pj=true;if((Pj&&(NM.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NM.indexOf(String.fromCharCode(0xA0),0)<0))Pj=false;if(Pj){var inx=1;var
Ap6=Bd;while(Ap6>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ap6=Ap6-1;}if(((this.CI.
charCodeAt(inx+1)||0)===0x0A)||((this.CI.charCodeAt((inx+(this.CI.charCodeAt(inx
)||0))-1)||0)===0x0A))Pj=false;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.
Descent;var Di=(AE[1]+(Bd*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Amj=0;var Ep=AE[0];if(Pj)Amj=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
YA(NM,0,Ml);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.YA(NM,
0,Ml)/2)|0);var pos=font.BjP(NM,0,Ml,col,Amj);if(pos<0)pos=0;return[Ep+pos,Di];}
,AO6:function(Ad){var B;if((this.String===A.jV)||!this.B7)return E8;if(!this.H2)
this.XS(this);var Kk=this.CI.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
Kk)&&(Ad>0)))return E8;var Bu=this.Kn;var inx=1;var leading=font.Leading;var Be=
this.M;var width=Be[2]-Be[0];var height=Be[3]-Be[1];width=width-(this.Jh*2);if(((
Bu&0x80)===0x80)){if(this.Aj7())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var Di=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var
ABl=(this.CI.charCodeAt(inx)||0)-1;var BgD=font.YA(this.CI,inx+1,ABl);var A4y=font.
A7q(this.CI,inx+1,ABl);var Ap8=BgD;var AaV=font.Ascent+font.Descent;var ABz=(Kk*((
font.Ascent+font.Descent)+leading))-leading;if(!Kk)ABz=AaV;if((((this.CI.charCodeAt((
inx+ABl)+1)||0)===0x00)||((this.CI.charCodeAt(inx+ABl)||0)===0x0A))||((this.CI.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap7=(inx+1)+ABl;var Azv=
this.CI.indexOf(String.fromCharCode(0x20),inx+1);var Azw=this.CI.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azv>=0)&&(Azv<Ap7))||((Azw>=0)&&(Azw<Ap7)))Ap8=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABz>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap8>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-Ap8;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
Ap8/2)|0);if(((Bu&0x20)===0x20))Di=Di+(height-ABz);else if(((Bu&0x100)===0x100))
Di=((Di+((height/2)|0))-((ABz/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Di=(Di+((height/2)|0))-((ABz/2)|0);Ep=(Ep+A4y[0])+this.Jh;
Ap8=(Ap8+(A4y[2]-A4y[0]))-BgD;var B5;{var Bf5=[Be[0]+Ep,Be[1]+Di];B5=[].concat(Bf5
,A.abf(Bf5,[Ap8,AaV]));}return A.abh(B5,this.Br);},ADn:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.H2)this.XS(this);var Kk=this.CI.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=Kk))return A.jV;while(Ad>0){inx=inx+(
this.CI.charCodeAt(inx)||0);Ad=Ad-1;}var XT=inx;var AtX=inx+(this.CI.charCodeAt(
inx)||0);var IC=0x00;do{XT=XT+1;IC=this.CI.charCodeAt(XT)||0;}while(((IC===0xFEFF
)||(IC===0x0A))&&(XT<=AtX));do{AtX=AtX-1;IC=this.CI.charCodeAt(AtX)||0;}while(((
IC===0xFEFF)||(IC===0x0A))&&(XT<=AtX));var NM=A.abW(this.CI,XT,(AtX-XT)+1);var Apz;
for(Apz=NM.indexOf(String.fromCharCode(0xFEFF),0);Apz>=0;Apz=NM.indexOf(String.fromCharCode(
0xFEFF),Apz+1)){var XI=Apz+1;while((NM.charCodeAt(XI)||0)===0xFEFF)XI=XI+1;NM=A.
ab1(NM,Apz,XI-Apz);}return NM;},Dd:function(){var B;if((this.String===A.jV)||!this.
B7)return E8;if(!this.H2)this.XS(this);if(this.CI===A.jV)return E8;var leading=this.
B7.Leading;var ABj=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.Oa>0
){leading=(this.Oa-this.B7.Ascent)-this.B7.Descent;ABj=this.Oa;}if(A.aaX(this.Amq
,BD))this.Amq=[this.B7.A7f(this.CI),this.Amq[1]];this.Amq=[this.Amq[0],((this.CI.
charCodeAt(0)||0)*ABj)-leading];var Bu=this.Kn;var Be=this.M;var Auf=this.Jh;var
width=Be[2]-Be[0];var height=Be[3]-Be[1];var Dh=[Auf,0,width-Auf,height];var B5=[
].concat(Dh.slice(0,2),A.abf(Dh.slice(0,2),this.Amq));if(((Bu&0x80)===0x80)){if(
this.Aj7())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XK=
this.AcQ;if(XK<=0)XK=width-(this.Jh*2);if(XK<0)XK=0;if(XK>(B5[2]-B5[0]))B5=A.abL(
B5,XK);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Dh[3]-Dh[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B5[2]-B5[0])>(Dh[
2]-Dh[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B5[2]-B5[0])!==(Dh[2]-Dh[0]
)){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2)===0x2)
)B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1]));else
if(((Bu&0x100)===0x100))B5=A.abO(B5,((Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B5=
A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Be.slice(
0,2));return A.abh(B5,this.Br);},_Init:function(aArg){A.Core.Eu._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lh();this.__proto__=A.Core.Eu;
A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.Au0={attrString:null,AttrSet:
null,String:A.jV,Kn:0x12,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dd();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;C0.BiY(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pl],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiX],this
);},AiX:function(G){},XS:function(G){var B;var ALR;ALR=(B=this.M)[2]-B[0];if(ALR<
0)ALR=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5N
,0);if(!!this.attrString)this.attrString.BoI(this.AttrSet,this.String,ALR,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiX],this);
},Pl:function(G){A.pe([this,this.XS],this);},Bgx:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kn)return;this.Kn=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiX],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pl],this);},A99:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bgx],this.AttrSet,0);A.z9([this,this.Pl
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bgx],this.AttrSet,0);A.zV([this,this.Pl],this.AttrSet,1);}A.pe([this,this.
Pl],this);},Dd:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E8;
if(!this.attrString)this.XS(this);if(!this.attrString)return E8;var Bu=this.Kn;var
C6=this.attrString.BjU();var Dh=A.aaT(this.M,BD);var B5=[].concat(Dh.slice(0,2),
A.abf(Dh.slice(0,2),C6));if(!C6[0]||!C6[1])return E8;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj7())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dh[
2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.Au0;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aoh={AiK:
null,FJ:null,Aix:0,Aiw:0,Vf:A.wf,Cl:A.abi(4,3,0,null),AG6:A.wf,Tu:0,ApM:0,J1:function(
E){if(A.aaX(E,this.KD))return;A.Core.ZJ.J1.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tu=0x45;this.FJ=null;A.pe([this,this.Ajf
],this);},KA:function(E){if(A.aaX(E,this.ML))return;A.Core.ZJ.KA.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tu=0x45;this.FJ=null;
A.pe([this,this.Ajf],this);},DD:function(E){if(A.aaX(E,this.ED))return;A.Core.ZJ.
DD.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tu=0x45;this.FJ=null;A.pe([this,this.Ajf],this);},DN:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZJ.DN.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tu=0x45;this.FJ=null;A.pe([this,this.Ajf],this);},A11:function(
){return;},Ajf:function(G){var B;this.AiK=null;if(this.Tu===0x00)return;if(this.
Tu===0x45){var K9=A._NewObject(A.Graphics.Ax_,0);K9=K9.AN3(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K9){K9.ACm(0,0);this.Cl.Set(0,2,K9.UZ*240
);K9.ACm(1,0);this.Cl.Set(1,2,K9.UZ*240);K9.ACm(1,1);this.Cl.Set(2,2,K9.UZ*240);
K9.ACm(0,1);this.Cl.Set(3,2,K9.UZ*240);}this.A11();}if((((this.Tu===0x4D)&&!!this.
FJ)&&!!this.Vf[0])&&!!this.Vf[1]){var Aja=[].concat(BD,this.Vf);var Ai$=this.AG6;
var Af$=Aja[0]-Ai$[0];var Az=Aja[2]-Ai$[0];var D8=Aja[1]-Ai$[1];var RD=Aja[3]-Ai$[
1];this.FJ.Afe(Af$,D8);this.Cl.Set(0,0,this.FJ.P$+this.Aiw);this.Cl.Set(0,1,this.
FJ.Qa+this.Aix);this.Cl.Set(0,2,this.FJ.UZ);this.FJ.Afe(Az,D8);this.Cl.Set(1,0,this.
FJ.P$+this.Aiw);this.Cl.Set(1,1,this.FJ.Qa+this.Aix);this.Cl.Set(1,2,this.FJ.UZ);
this.FJ.Afe(Az,RD);this.Cl.Set(2,0,this.FJ.P$+this.Aiw);this.Cl.Set(2,1,this.FJ.
Qa+this.Aix);this.Cl.Set(2,2,this.FJ.UZ);this.FJ.Afe(Af$,RD);this.Cl.Set(3,0,this.
FJ.P$+this.Aiw);this.Cl.Set(3,1,this.FJ.Qa+this.Aix);this.Cl.Set(3,2,this.FJ.UZ);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Et=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.ML=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.KD=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A11();}this.
ApM=this.Tu;this.Tu=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Bod:function(E){if(A.aaX(E,this.AG6))return;this.AG6=E;if((this.ApM!==0x45)&&(
this.Tu===0x00)){this.Tu=this.ApM;A.pe([this,this.Ajf],this);}},Ary:function(Fh){
var B;if(!!!this.AiK){this.AiK=A._NewObject(A.Graphics.A7P,0);this.AiK.AN3(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiK.Afe(Fh))return BD;
var Aqb=[].concat(BD,this.Vf);var Ep=this.AiK.P$*(Aqb[2]-Aqb[0]);var Di=this.AiK.
Qa*(Aqb[3]-Aqb[1]);return A.abf([Ep|0,Di|0],Aqb.slice(0,2));},BaA:function(Bcx,Mc
){var B;this.AiK=null;if(!Mc)throw new Error(I0);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.Ax_,0);this.FJ.BhU(Mc);this.Aiw=Bcx[0];this.Aix=Bcx[1];this.ApM=0x4D;
this.Tu=0x00;if(!this.Vf[0]||!this.Vf[1])return;var Aja=[].concat(BD,this.Vf);var
Ai$=this.AG6;var Af$=Aja[0]-Ai$[0];var Az=Aja[2]-Ai$[0];var D8=Aja[1]-Ai$[1];var
RD=Aja[3]-Ai$[1];this.FJ.Afe(Af$,D8);this.Cl.Set(0,0,this.FJ.P$+this.Aiw);this.Cl.
Set(0,1,this.FJ.Qa+this.Aix);this.Cl.Set(0,2,this.FJ.UZ);this.FJ.Afe(Az,D8);this.
Cl.Set(1,0,this.FJ.P$+this.Aiw);this.Cl.Set(1,1,this.FJ.Qa+this.Aix);this.Cl.Set(
1,2,this.FJ.UZ);this.FJ.Afe(Az,RD);this.Cl.Set(2,0,this.FJ.P$+this.Aiw);this.Cl.
Set(2,1,this.FJ.Qa+this.Aix);this.Cl.Set(2,2,this.FJ.UZ);this.FJ.Afe(Af$,RD);this.
Cl.Set(3,0,this.FJ.P$+this.Aiw);this.Cl.Set(3,1,this.FJ.Qa+this.Aix);this.Cl.Set(
3,2,this.FJ.UZ);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Et=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.ML=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.KD=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A11();},_Init:
function(aArg){A.Core.ZJ._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aoh.Cl;this.
__proto__=C.Aoh;this.U=0x3;},_Mark:function(D){var B;A.Core.ZJ._Mark.call(this,D
);if((B=this.AiK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AV8={Fv:null,bitmap:null
,P:null,G9:255,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NG=aOffset[0];var NH=aOffset[1];var AE=[].concat(BD,this.
Vf);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var Be1;var Be2;var Be3;var Be4;
var BAL=this.G9;Be1=Be2=Be3=Be4=BAL;var AlD=255|(255<<8)|(255<<16)|((((Ck*Be1)>>
8)&0xFF)<<24);var AlE=255|(255<<8)|(255<<16)|((((Ck*Be2)>>8)&0xFF)<<24);var By4=
255|(255<<8)|(255<<16)|((((Ck*Be3)>>8)&0xFF)<<24);var By5=255|(255<<8)|(255<<16)|((((
Ck*Be4)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E8,aOffset));C0.AhW(aClip,this.bitmap
,0,this.Cl.Get(0,0)+NG,this.Cl.Get(0,1)+NH,this.Cl.Get(0,2),this.Cl.Get(1,0)+NG,
this.Cl.Get(1,1)+NH,this.Cl.Get(1,2),this.Cl.Get(2,0)+NG,this.Cl.Get(2,1)+NH,this.
Cl.Get(2,2),this.Cl.Get(3,0)+NG,this.Cl.Get(3,1)+NH,this.Cl.Get(3,2),AE,AlD,AlE,
By4,By5,aBlend,true);},G5:function(CN){if(!this.P||!this.Fv)return null;var BO=(
A.Core.Aeh.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqQ.isPrototypeOf(CN)?CN:null
);if(!BO&&!D4)return null;var Fx=BD;var B1=this.Fv.Ab;while(!!B1&&(B1!==this.P)){
Fx=A.abe(Fx,B1.M.slice(0,2));B1=B1.Ab;}var X=this.Fv;if(!!BO&&!BO.Down)this.Fv=null;
if(!!BO){BO.H5=A.abf(this.Ary(BO.H5),Fx);BO.NZ=A.abf(this.Ary(BO.NZ),Fx);return X.
G5(BO);}if(!!D4){var BAP=A.abf(this.Ary(A.abe(D4.H5,D4.DH)),Fx);D4.H5=A.abf(this.
Ary(D4.H5),Fx);D4.NZ=A.abf(this.Ary(D4.NZ),Fx);D4.DH=A.abe(D4.H5,BAP);return X.G5(
D4);}return C.Aoh.G5.call(this,CN);},Yq:function(Dc,BH,Om,Aas,Ac8,Ac7){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Dc);pos=this.Ary(pos
);var Aqb=[].concat(BD,this.Vf);if(!A.wa(Aqb,pos))return null;var JK=this.P.Yq(A.
abh(A.abh([0,0,Dc[2]-Dc[0],Dc[3]-Dc[1]],pos),this.P.M.slice(0,2)),BH,Om,Aas,null
,Ac7);if(!!JK)this.Fv=JK.Cj;else this.Fv=null;if(!!this.Fv)return A._NewObject(A.
Core.Au7,0).Initialize(this,BD);return null;},RP:function(G){var B;var Be5=this.
Vf;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
Vf=this.bitmap.FrameSize;else this.Vf=BD;if(((A.aaX(Be5,this.Vf)||((this.ApM===0x45
)&&(this.Tu===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApM!==0x45)&&(this.Tu===0x00))&&!A.aaX(Be5,this.Vf)){this.Tu=this.ApM;
A.pe([this,this.Ajf],this);}},CZ:function(E){var B;if(E===this.G9)return;this.G9=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bnh:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Iw);if(!!this.P){A.
z9([this,this.RP],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RP
],E,0);this.bitmap=E.FG;}this.RP(this);},Awt:function(){return this.G9;},_Init:function(
aArg){C.Aoh._Init.call(this,aArg);this.__proto__=C.AV8;},_Mark:function(D){var B;
C.Aoh._Mark.call(this,D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aes={HA:null,AQ:0xFFFFFFFF,DH:A.wf
,AON:false,Lh:function(){this.A2i();},Ks:function(C0,aClip,aOffset,Ck,aBlend){if(
!this.HA)return;var DE;var DP;var DJ;var DO;var B4=this.AQ;Ck=Ck+1;DE=DP=DJ=DO=B4;
if(Ck<256){DE=(DE&0x00FFFFFF)|((((Ck*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF
)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ck*((DJ>>24)&0xFF
))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);}C0.
Aes(aClip,this.HA,A.abh(this.M,aOffset),this.AON,this.DH,DE,DP,DO,DJ,true,true,0
);},A2i:function(){return;},Ajg:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.M);},AnM:function(E){
var B;if(A.aaX(E,this.DH))return;this.DH=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bj(this.M);},Bnc:function(E){var B;if(E===this.AON)return;this.
AON=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.M);},ZD:function(
E){var B;if(E===this.HA)return;if(!!this.HA)A.z9([this,this.Ajg],this.HA,0);this.
HA=E;if(!!this.HA)A.zV([this,this.Ajg],this.HA,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aes;},
_Done:function(){this.Lh();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.HA)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hq={HA:null,AQ:0xFFFFFFFF
,DH:A.wf,Width:1,Lh:function(){this.A2i();},Ks:function(C0,aClip,aOffset,Ck,aBlend
){if(!this.HA)return;var DE;var DP;var DJ;var DO;var B4=this.AQ;Ck=Ck+1;DE=DP=DJ=
DO=B4;if(Ck<256){DE=(DE&0x00FFFFFF)|((((Ck*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&
0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ck*((DJ>>
24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<
24);}C0.Hq(aClip,this.HA,A.abh(this.M,aOffset),false,this.DH,this.Width,0,0,0,3,
DE,DP,DO,DJ,true,true);},A2i:function(){return;},Ajg:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.
M);},AnM:function(E){var B;if(A.aaX(E,this.DH))return;this.DH=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.M);},Nu:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bj(this.M);},ZD:function(E){var B;if(E===this.HA)return;if(!!this.
HA)A.z9([this,this.Ajg],this.HA,0);this.HA=E;if(!!this.HA)A.zV([this,this.Ajg],this.
HA,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hq;},_Done:function(){this.Lh();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.HA)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEY={A5u:0x1,A5t:0x2,A5v:0x4,A5y:0x8,A5x:0x10,A5w:0x20,BGf:0x40,BGg:0x80,BGq:
0x100};C.BGv={A5u:0x1,A5t:0x2,A5v:0x4,A5y:0x8,A5x:0x10,A5w:0x20,BDu:0x40,BDt:0x80
,BDz:0x100};C.BFB={Normal:0,BF$:1,BF9:2,BF_:3};
C._Init=function(){C.C8.__proto__=A.Core.Aki;C.AL.__proto__=A.Core.Eu;C.BW.__proto__=
A.Core.Eu;C.NY.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.Au0.__proto__=A.Core.Eu;C.Aoh.__proto__=A.Core.ZJ;C.AV8.__proto__=C.Aoh;C.Aes.
__proto__=A.Core.Eu;C.Hq.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DI=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */