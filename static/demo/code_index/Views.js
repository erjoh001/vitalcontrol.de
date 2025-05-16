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
C.C8={KO:null,Alc:1,Alb:1,AQ:0xFFFFFFFF,Ks:function(C0,aClip,aOffset,Ck,aBlend){var
B;var Agv=this.Alb;var Agw=this.Alc;var AdD=A.abf(this.Et,aOffset);var AdE=A.abf(
this.ED,aOffset);var AlC;var AlD;var B4=this.AQ;if(A.aaX(AdD,AdE))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;AlC=AlD=B4;if(Ck<256){AlC=(AlC&0x00FFFFFF)|((((
Ck*((AlC>>24)&0xFF))>>8)&0xFF)<<24);AlD=(AlD&0x00FFFFFF)|((((Ck*((AlD>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agv===1)&&(Agw===1))C0.Avb(aClip,AdD,AdE,AlC,AlD,aBlend);else
C0.Bi2(aClip,AdD,AdE,Agv,Agw,AlC,AlD,aBlend);},GetExtent:function(){var Agv=this.
Alb;var Agw=this.Alc;var AdD=this.Et;var AdE=this.ED;if(((Agv===1)&&(Agw===1))||
A.aaX(AdD,AdE))return A.Core.Akh.GetExtent.call(this);var AiE=Agv/2;var AiF=Agw/
2;var Apq=AdD[0];var Apr=AdD[1];var Aps=AdE[0];var Apt=AdE[1];var Ke=Aps-Apq;var
Kf=Apt-Apr;var I5=Math.sqrt((Ke*Ke)+(Kf*Kf));Ke=Ke/I5;Kf=Kf/I5;var Bdg=Apq+(Kf*AiE
);var Bdh=Apr-(Ke*AiE);var AJN=Aps+(Kf*AiF);var AJO=Apt-(Ke*AiF);var AJP=Aps-(Kf
*AiF);var AJQ=Apt+(Ke*AiF);var AJR=Apq-(Kf*AiE);var AJS=Apr+(Ke*AiE);var left=Bdg;
var right=Bdg;var top=Bdh;var bottom=Bdh;if(AJN<left)left=AJN;if(AJP<left)left=AJP;
if(AJR<left)left=AJR;if(AJN>right)right=AJN;if(AJP>right)right=AJP;if(AJR>right)
right=AJR;if(AJO<top)top=AJO;if(AJQ<top)top=AJQ;if(AJS<top)top=AJS;if(AJO>bottom
)bottom=AJO;if(AJQ>bottom)bottom=AJQ;if(AJS>bottom)bottom=AJS;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cf));return Az;
},RO:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},A$g:function(E){var B;if(E<1)E=1;if(E===this.Alc)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alc=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alb!==1))&&!this.KO){
this.KO=A.aaL(A.aci.As4);if(this.KO.N6)A.zV([this,this.RO],this.KO,0);}if(((E===
1)&&(this.Alb===1))&&!!this.KO){if(this.KO.N6)A.z9([this,this.RO],this.KO,0);this.
KO=null;}},A$f:function(E){var B;if(E<1)E=1;if(E===this.Alb)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Alb=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(((E!==1)||(this.Alc!==1))&&!this.
KO){this.KO=A.aaL(A.aci.As4);if(this.KO.N6)A.zV([this,this.RO],this.KO,0);}if(((
E===1)&&(this.Alc===1))&&!!this.KO){if(this.KO.N6)A.z9([this,this.RO],this.KO,0);
this.KO=null;}},Nu:function(E){var B;if(E<1)E=1;if((E===this.Alb)&&(E===this.Alc
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Alb=E;this.Alc=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((E!==1)&&!this.KO){this.KO=A.aaL(A.aci.As4);if(this.KO.N6)A.zV([this,this.
RO],this.KO,0);}if((E===1)&&!!this.KO){if(this.KO.N6)A.z9([this,this.RO],this.KO
,0);this.KO=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.Akh._Init.call(this,aArg);this.__proto__=C.C8;},_Mark:function(D){var
B;A.Core.Akh._Mark.call(this,D);if((B=this.KO)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={ANz:0xFFFFFFFF,ANA:0xFFFFFFFF,ANE:0xFFFFFFFF
,AND:0xFFFFFFFF,AQ:0xFFFFFFFF,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;var DE=
this.AND;var DP=this.ANE;var DJ=this.ANz;var DO=this.ANA;var B4=this.AQ;aBlend=aBlend&&((
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
))>>8)&0xFF)<<24);}C0.Avq(aClip,A.abh(this.M,aOffset),DE,DP,DO,DJ,aBlend);},AwD:
function(E){var B;if(E===this.ANz)return;this.ANz=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},AwE:function(E){var B;if(E===this.ANA)return;this.ANA=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},AwG:function(E){var B;
if(E===this.ANE)return;this.ANE=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.M);},AwF:function(E){var B;if(E===this.AND)return;this.AND=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Fp:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.BW={Width:1,AQ:0xFFFFFFFF,Ks:function(C0
,aClip,aOffset,Ck,aBlend){var B;var DE;var DP;var DJ;var DO;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;DE=DP=DJ=DO=B4;if(Ck<256){DE=(DE&0x00FFFFFF
)|((((Ck*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((Ck*((DP>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ck*((DJ>>24)&0xFF))>>8)&0xFF)<<24);DO=(
DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);}C0.Bi0(aClip,A.abh(this.M
,aOffset),this.Width,DE,DP,DO,DJ,aBlend);},Nu:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.
BW;},_className:"Views::Border"};C.NY={timer:null,Al:null,MY:-1,AQ:0xFFFFFFFF,Avc:
0x1F,T1:0,Dx:0,Anq:A.wf,VK:false,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;var
ND=this.T1;if(this.MY>=0)ND=this.MY;if(!this.Al||(ND>=this.Al.NoOfFrames))return;
this.Al.Update();var DE;var DP;var DO;var DJ;var B4=this.AQ;var Kl=(((Ck+1)*255)>>
8)+1;var Oq=this.Avc;var Az=A.abh(this.M,aOffset);var ALe=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anq);aBlend=aBlend&&((this.U&0x2)===0x2);DE=DP=DJ=DO=B4;if(Kl<256
){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((
DP>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kl)>>8)&
0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(((this.
Anq[0]>0)&&(ALe[0]>0))&&!((Oq&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-ALe[
0];if(((Oq&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Oq=Oq|0x4;}else if(((Oq&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Oq=Oq|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Oq=Oq|0x5;}}if(((this.Anq[1]>0)&&(ALe[1]>0))&&!((Oq&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-ALe[1];if(((Oq&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Oq=Oq|0x8;}else if(((Oq&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Oq=Oq|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Oq=Oq|
0xA;}}C0.BiZ(aClip,this.Al,ND,Az,Oq,DE,DP,DO,DJ,aBlend);},RO:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mm:function(G){var B;var ND=
this.MY;var Ty=0;if(!!this.Al)Ty=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MY<0))&&(Ty>0))this.Dx=this.timer.Bs-(this.T1*this.Al.FrameDelay);if(
!!this.timer&&(Ty>0)){var Av=(this.timer.Bs-this.Dx)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Ty){ND=ND%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Ty);}}if(((ND!==
this.MY)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MY=ND;if(!Ty&&
!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bj(this.M);},Zx:function(E){var B;if(this.VK===E)return;this.VK=E;this.MY=-1;if(
!E&&!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Ael);A.zV([this,this.Mm],this.timer,0);A.pe([this,this.
Mm],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},A_t:function(
E){var B;if(E===this.Avc)return;this.Avc=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Cw:function(E){var B;if(E<0)E=0;if((E===this.T1)&&(this.MY===-1)
)return;this.T1=E;if(!this.timer)this.MY=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
N6)A.z9([this,this.RO],this.Al,0);this.Al=E;this.MY=-1;if(!!E&&E.N6)A.zV([this,this.
RO],E,0);if(this.VK){this.Zx(false);this.Zx(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A_K:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anq))return;this.Anq=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.Avc&0xF)===
0xF))this.Ab.Bj(this.M);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.
__proto__=C.NY;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Ap={timer:null,Al:null,Dx:0,MY:0,AQ:0xFFFFFFFF
,Kn:0x12,T1:0,G_:255,VK:false,Abc:false,Ks:function(C0,aClip,aOffset,Ck,aBlend){
var B;var ND=this.T1;if(this.MY>=0)ND=this.MY;if(!this.Al||(ND>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Dd();var C6=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var DE;var DP;var DO;var DJ;var B4=this.AQ;var Kl=(((
Ck+1)*this.G_)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);DE=DP=DJ=DO=B4;if(Kl<256
){DE=(DE&0x00FFFFFF)|((((((DE>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((
DP>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kl)>>8)&
0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C6))C0.A6i(aClip,this.Al,ND,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),DE,DP,DO,DJ,aBlend);else C0.Bpk(aClip,this.Al,ND
,A.abh(AE,aOffset),[].concat(BD,C6),DE,DP,DO,DJ,aBlend,true);},RO:function(G){var
B;if(((this.Abc&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Mm:function(
G){var B;var ND=this.MY;var Ty=0;if(!!this.Al)Ty=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MY<0))&&(Ty>0))this.Dx=this.timer.Bs-(this.T1*this.Al.FrameDelay
);if(!!this.timer&&(Ty>0)){var Av=(this.timer.Bs-this.Dx)|0;ND=(Av/this.Al.FrameDelay
)|0;if(Av>=Ty){ND=ND%this.Al.NoOfFrames;this.Dx=this.timer.Bs-(Av%Ty);}}if(((ND!==
this.MY)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);this.MY=ND;if(!Ty&&
!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;}},Je:function(E
){if(E===this.Abc)return;this.Abc=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Dd());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Zx:function(
E){var B;if(this.VK===E)return;this.VK=E;this.MY=-1;if(!E&&!!this.timer){A.z9([this
,this.Mm],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Ael);A.zV([this,this.Mm],this.timer,0);A.pe([this,this.Mm],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;if(E===this.Kn)return;
this.Kn=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Cw:function(E){
var B;if(E<0)E=0;if((E===this.T1)&&(this.MY===-1))return;this.T1=E;if(!this.timer
)this.MY=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.N6)A.z9([this,this.RO],this.
Al,0);this.Al=E;this.MY=-1;if(!!E&&E.N6)A.zV([this,this.RO],E,0);if(this.VK){this.
Zx(false);this.Zx(true);}if(((this.Abc&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Dd());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},
CZ:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G_)return;this.G_=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Dd:function(){var
B;if(!this.Al)return E8;var Bu=this.Kn;var C6=this.Al.FrameSize;var Be=this.M;var
width=Be[2]-Be[0];var height=Be[3]-Be[1];if(!C6[0]||!C6[1])return E8;var Dh=[0,0
,width,height];var B5=Dh;if(((Bu&0x40)===0x40)){var A4A=((((Dh[2]-Dh[0])<<16)+((
C6[0]/2)|0))/C6[0])|0;var ABm=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai3=
A4A;if(ABm>Ai3)Ai3=ABm;B5=A.abL(B5,((C6[0]*Ai3)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai3)+32768)>>16);}else if(((Bu&0x80)===0x80)){var A4A=((((Dh[2]-Dh[0])<<16)+((C6[
0]/2)|0))/C6[0])|0;var ABm=((((Dh[3]-Dh[1])<<16)+((C6[1]/2)|0))/C6[1])|0;var Ai3=
A4A;if(ABm<Ai3)Ai3=ABm;B5=A.abL(B5,((C6[0]*Ai3)+32768)>>16);B5=A.abI(B5,((C6[1]*
Ai3)+32768)>>16);}else if(!((Bu&0x100)===0x100))B5=A.abK(B5,C6);if((B5[2]-B5[0])
!==(Dh[2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((
Bu&0x2)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3
]-B5[1]));else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Be.slice(0,2));return B5;},Blm:function(){return this.
AQ;},ASR:function(){return this.T1;},_Init:function(aArg){A.Core.Eu._Init.call(this
,aArg);this.__proto__=C.Ap;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,Em:null,CJ:
A.jV,String:A.jV,Oo:null,Amp:A.wf,Jh:0,Oa:0,AcQ:0,Br:A.wf,Kn:0x12,AQ:0xFFFFFFFF,
AfE:false,Abc:false,Yw:false,AOm:false,H2:false,Lg:function(){if(!!this.Oo){this.
A2F(this.Oo);this.Oo=null;}},Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;if((this.
CJ===A.jV)||!this.B7)return;var Bu=this.Kn;var font=this.B7;var Dh=A.abh(this.M,
aOffset);var DE;var DP;var DO;var DJ;var col=this.AQ;var Kl=(((Ck+1)*255)>>8)+1;
var Kk=this.CJ.charCodeAt(0)||0;var AE=A.abh(this.Dd(),aOffset);var Bq=[Dh[0]-AE[
0],(Dh[1]-AE[1])-font.Ascent];if(Kk<1)return;DE=DP=DJ=DO=col;if(Kl<256){DE=(DE&0x00FFFFFF
)|((((((DE>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF)|((((((DP>>24)&0xFF)*
Kl)>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((((DO>>24)&0xFF)*Kl)>>8)&0xFF)<<24);DJ=(
DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((Kk===1)&&!((Bu&0x40)===
0x40)){C0.A6I(aClip,font,this.CJ,2,(this.CJ.charCodeAt(1)||0)-1,Dh,Bq,0,0,DE,DP,
DO,DJ,true);return;}var leading=font.Leading;if(this.Oa>0)leading=(this.Oa-font.
Ascent)-font.Descent;var AaW=(font.Ascent+font.Descent)+leading;var By$=aClip[1]-
AE[1];var Bza=aClip[3]-AE[1];var A1T=AE[2]-AE[0];var Di=0;var O=1;var B4=this.CJ.
charCodeAt(1)||0;while(((Di+AaW)<By$)&&(B4>0)){O=O+B4;Di=Di+AaW;B4=this.CJ.charCodeAt(
O)||0;}while((Di<Bza)&&(B4>0)){var Mi=A.abe(Bq,[0,Di]);var Ami=0;var Pj=false;if(((((
Bu&0x40)===0x40)&&((this.CJ.charCodeAt((O+B4)-1)||0)!==0x0A))&&((this.CJ.charCodeAt(
O+1)||0)!==0x0A))&&((this.CJ.charCodeAt(O+B4)||0)!==0x00))Pj=true;if(Pj&&!!(Bu&0x6
)){var Ap6=O+B4;var Azu=this.CJ.indexOf(String.fromCharCode(0x20),O+1);var Azv=this.
CJ.indexOf(String.fromCharCode(0xA0),O+1);if(((Azu<0)||(Azu>=Ap6))&&((Azv<0)||(Azv>=
Ap6)))Pj=false;}if(Pj)Ami=A1T;else if(((Bu&0x4)===0x4))Mi=[(Mi[0]-A1T)+font.YB(this.
CJ,O+1,B4-1),Mi[1]];else if(((Bu&0x2)===0x2))Mi=[(Mi[0]-((A1T/2)|0))+((font.YB(this.
CJ,O+1,B4-1)/2)|0),Mi[1]];C0.A6I(aClip,font,this.CJ,O+1,B4-1,Dh,Mi,Ami,0,DE,DP,DO
,DJ,true);O=O+B4;Di=Di+AaW;B4=this.CJ.charCodeAt(O)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BgA;BgA=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BgA&&
!this.AcQ)&&this.AfE)&&this.H2)&&!((this.U&0x2000)===0x2000)){this.CJ=A.jV;this.
H2=false;A.pe([this,this.Pl],this);}if(((this.Yw&&this.H2)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CJ=
A.jV;this.H2=false;A.pe([this,this.Pl],this);}A.Core.Eu.H.call(this,E);A.pe([this
,this.AiW],this);},By3:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},By2:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A2F:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bzn:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiW:function(G){A.pe(this.Em
,this);},Pl:function(G){A.pe([this,this.XT],this);},XT:function(G){var B;if(this.
H2)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var XL=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AfE){
if(this.AcQ>0)XL=this.AcQ;else if(!this.Abc)XL=width-(this.Jh*2);else XL=width;if(
XL<0)XL=1;}if(!!this.Oo){this.A2F(this.Oo);this.Oo=null;}this.H2=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AOm)this.Oo=this.Bzn(length
);this.CJ=font.BoI(this.String,0,XL,length,this.Oo);if(!!this.Oo&&!this.Bke()){this.
A2F(this.Oo);this.Oo=null;}}else this.CJ=A.jV;this.Amp=BD;if(((this.Yw&&(this.CJ
!==A.jV))&&!this.Abc)&&!!font){var Bu=this.Kn;var leading=font.Leading;var IH=this.
CJ;var AK_=this.Aj6();if(((Bu&0x80)===0x80)){if(AK_)Bu=(Bu&~0x80)|0x4;else Bu=(Bu&
~0x80)|0x1;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var ABh=(font.
Ascent+font.Descent)+leading;var Kk=IH.charCodeAt(0)||0;var Al0=((height+leading
)/ABh)|0;var A17=false;var AJV=false;if(Al0<=0)Al0=1;if(Kk>Al0){var Bd=0;var ABi=
0;var AK8=Kk-1;var K7;var NE=IH.length;var tmp=A.jV;if(!!(Bu&0x110)&&!!(Bu&0x28)
)Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;if(((Bu&0x20)===0x20))ABi=Kk-Al0;else if(((
Bu&0x10)===0x10)||((Bu&0x100)===0x100)){ABi=((Kk-Al0)/2)|0;AK8=(ABi+Al0)-1;}else
AK8=Al0-1;A17=ABi>0;AJV=AK8<(Kk-1);for(K7=1;Bd<ABi;Bd=Bd+1)K7=K7+(IH.charCodeAt(
K7)||0);if(AJV)for(NE=K7;Bd<AK8;Bd=Bd+1)NE=NE+(IH.charCodeAt(NE)||0);if(A17){var
I5=IH.charCodeAt(K7)||0;tmp=(Hs+A.abW(IH,K7,I5))+Hs;tmp=A.abQ(tmp,0,(I5+2)&0xFFFF
);K7=K7+I5;if((tmp.charCodeAt(I5)||0)===0x0A){tmp=A.abQ(tmp,I5,0xFEFF);tmp=A.abQ(
tmp,I5+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(IH,K7,NE-K7);if(AJV&&(
NE>=K7)){var I5=IH.charCodeAt(NE)||0;var QF=(Hs+A.abW(IH,NE,I5))+Hs;QF=A.abQ(QF,
0,(I5+2)&0xFFFF);QF=A.abQ(QF,1,0xFEFF);if((QF.charCodeAt(I5)||0)===0x0A){QF=A.abQ(
QF,I5,0xFEFF);QF=A.abQ(QF,I5+1,0x0A);}if((QF.charCodeAt(2)||0)===0x0A){QF=A.abQ(
QF,2,0xFEFF);QF=A.abQ(QF,1,0x0A);}else QF=A.abQ(QF,1,0xFEFF);tmp=tmp+QF;}IH=String.
fromCharCode(Al0&0xFFFF)+tmp;}var Bd=0;var inx=1;var AKG=width-(this.Jh*2);if(this.
AfE&&(this.AcQ>0))AKG=this.AcQ;Kk=IH.charCodeAt(0)||0;for(;Bd<Kk;Bd=Bd+1){var Amf=
A17&&!Bd;var Amg=AJV&&(Bd===(Kk-1));var XA=false;var XB=false;var Aus=AK_;if((AK_&&
Amf)&&!Amg){Amf=false;Amg=true;}else if((AK_&&Amg)&&!Amf){Amg=false;Amf=true;}var
XU=inx+1;var I5=IH.charCodeAt(inx)||0;var K7=XU;var NE=(XU+I5)-2;var A2U=-1;var A2V=-
1;if(!this.AfE&&(font.YB(IH,XU,I5-1)>AKG)){var Ao2=Bu;if(((Ao2&0x2)===0x2)&&!!(Ao2&
0x5))Ao2&=~0x2;if(((Ao2&0x2)===0x2))Ao2&=~0x5;if(((Ao2&0x4)===0x4))XA=true;else if(((
Ao2&0x2)===0x2)){XA=true;XB=true;}else XB=true;}if((IH.charCodeAt(K7)||0)===0x0A
)K7=K7+1;if((IH.charCodeAt(NE)||0)===0x0A)NE=NE-1;while(XA&&((IH.charCodeAt(K7)||
0)===0xFEFF))K7=K7+1;while(XB&&((IH.charCodeAt(NE)||0)===0xFEFF))NE=NE-1;XA=XA&&
!Amg;XB=XB&&!Amf;while((((XA||XB)||Amf)||Amg)&&(K7<NE)){if((XA&&(Aus||!XB))||Amf
){if(A2U>0)IH=A.abQ(IH,A2U,0xFEFF);IH=A.abQ(IH,K7,0x2026);A2U=K7;K7=K7+1;Aus=!Aus;
Amf=false;if(font.YB(IH,XU,I5-1)<=AKG){XA=false;XB=false;}else XA=XA||!XB;}if((XB&&(
!Aus||!XA))||Amg){if(A2V>0)IH=A.abQ(IH,A2V,0xFEFF);IH=A.abQ(IH,NE,0x2026);A2V=NE;
NE=NE-1;Aus=!Aus;Amg=false;if(font.YB(IH,XU,I5-1)<=AKG){XA=false;XB=false;}else XB=
XB||!XA;}}inx=inx+I5;}this.Amp=[font.A7d(IH),((IH.charCodeAt(0)||0)*ABh)-leading
];this.CJ=IH;}if(this.Abc&&(this.CJ!==A.jV)){var Aue=[this.Jh,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Dd(),Aue),this.Br));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiW],this);},BmO:function(
E){if(E===this.AOm)return;this.AOm=E;this.CJ=A.jV;this.H2=false;A.pe([this,this.
Pl],this);},Hp:function(E){if(E<0)E=0;if(this.Jh===E)return;this.Jh=E;this.CJ=A.
jV;this.H2=false;A.pe([this,this.Pl],this);},Axa:function(E){var B;if(E<0)E=0;if(
this.Oa===E)return;this.Oa=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.
M);if(this.Yw){this.CJ=A.jV;this.H2=false;A.pe([this,this.Pl],this);}if(this.Abc&&
this.H2)this.H(A.abg(this.Dd(),this.Br));if(this.H2)A.pe([this,this.AiW],this);}
,BmN:function(E){if(E===this.Yw)return;this.Yw=E;if(((this.AfE&&!!!this.AcQ)||E)||
!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CJ=A.jV;this.H2=false;
A.pe([this,this.Pl],this);},Q9:function(E){if(A.aa0(E,this.Em))return;this.Em=E;
if(((!!!this.AcQ&&this.AfE)||!!E)||this.Yw)this.U=this.U&~0x100;else this.U=this.
U|0x100;},Je:function(E){if(E===this.Abc)return;this.Abc=E;if(E&&this.Yw){this.CJ=
A.jV;this.H2=false;A.pe([this,this.Pl],this);}if(E&&this.H2){var Aue=[this.Jh,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Dd(),Aue),this.Br));this.U=this.U&~
0x2000;}},Bop:function(E){if(E<0)E=0;if(E===this.AcQ)return;this.AcQ=E;if(this.AfE&&
this.H2){this.CJ=A.jV;this.H2=false;A.pe([this,this.Pl],this);}if(((!!!E&&this.AfE
)||this.Yw)||!!this.Em)this.U=this.U&~0x100;else this.U=this.U|0x100;},Lv:function(
E){if(E===this.AfE)return;this.AfE=E;if(this.H2){this.CJ=A.jV;this.H2=false;A.pe([
this,this.Pl],this);}if(((E&&!!!this.AcQ)||this.Yw)||!!this.Em)this.U=this.U&~0x100;
else this.U=this.U|0x100;},Gc:function(E){var B;if(A.aaX(E,this.Br))return;this.
Br=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.H2)A.pe([this
,this.AiW],this);},A6:function(E){var B;if(E===this.Kn)return;this.Kn=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);if(this.Yw){this.CJ=A.jV;this.H2=false;
A.pe([this,this.Pl],this);}if(this.H2)A.pe([this,this.AiW],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CJ=A.jV;this.H2=false;A.pe([this,this.
Pl],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CJ=A.jV;this.H2=false;
A.pe([this,this.Pl],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fp:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Aj6:function(
){if(!this.H2)this.XT(this);if(!this.Oo)return false;var result=false;var bidi=this.
Oo;result=A.v2(bidi);return result;},Bke:function(){if(!this.H2)this.XT(this);if(
!this.Oo)return false;var result=false;var bidi=this.Oo;result=A.zZ(bidi);return result;
},AG8:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Yw)return BD;if(
!this.H2)this.XT(this);if(aIndex<0)aIndex=0;var BAA=(this.CJ.charCodeAt(0)||0)-1;
var Ml=this.CJ.charCodeAt(1)||0;var inx=1;var Ai8=2;var Bd=0;var col=-1;var CB=true;
aIndex=aIndex+2;while((Bd<BAA)&&((inx+Ml)<=aIndex)){inx=inx+Ml;Bd=Bd+1;Ai8=Ai8+1;
aIndex=aIndex+1;Ml=this.CJ.charCodeAt(inx)||0;}if(aIndex>(inx+Ml))aIndex=inx+Ml;
if(!!this.Oo)aIndex=(inx+this.By2(this.Oo,(inx+1)-Ai8,(inx+Ml)-Ai8,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var IC=this.CJ.charCodeAt(inx+1)||0;if(CB)col=col+
1;CB=(IC!==0xFEFF)&&(IC!==0x0A);}return[col,Bd];},AnW:function(AoR){if(((this.String===
A.jV)||!this.B7)||this.Yw)return 0;if(!this.H2)this.XT(this);var Bd=AoR[1];var col=
AoR[0];var inx=1;var Ai8=2;var Kk=this.CJ.charCodeAt(0)||0;var Ml=this.CJ.charCodeAt(
1)||0;if(Bd>=Kk){Bd=Kk-1;col=this.CJ.length;}if(Bd<0){Bd=0;col=0;}if(col<0)col=0;
while((Bd>0)&&(Ml>0)){inx=inx+Ml;Bd=Bd-1;Ai8=Ai8+1;Ml=this.CJ.charCodeAt(inx)||0;
}var XJ=inx;var AK9=(inx-Ai8)+1;var Ap6=(AK9+Ml)-1;var AA5=false;while((col>=0)&&(
Ml>1)){var IC=this.CJ.charCodeAt(inx+1)||0;inx=inx+1;Ml=Ml-1;AA5=(IC===0xFEFF)||(
IC===0x0A);if(!AA5){col=col-1;XJ=inx;}}if((!AA5&&(col>=0))&&((this.CJ.charCodeAt(
inx+1)||0)===0x00))AA5=true;if(AA5)XJ=XJ+1;XJ=XJ-Ai8;if(!!this.Oo)XJ=AK9+this.By3(
this.Oo,AK9,Ap6,XJ-AK9);return XJ;},AUl:function(K4){var B;if((this.String===A.jV
)||!this.B7)return BD;if(!this.H2)this.XT(this);var AE=this.Dd();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B7;var Bu=this.Kn;var Kk=this.CJ.charCodeAt(
0)||0;var leading=font.Leading;if(K4[1]<AE[1])K4=[K4[0],AE[1]];if(K4[1]>=AE[3])K4=[
K4[0],AE[3]-1];if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var AaW=(
font.Ascent+font.Descent)+leading;var Bd=((K4[1]-AE[1])/AaW)|0;var NM=this.ADl(Bd
);var Ml=NM.length;var Pj=false;if(((Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80
)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)&&(Bd<(Kk-1)))Pj=true;if((Pj&&(
NM.indexOf(String.fromCharCode(0x20),0)<0))&&(NM.indexOf(String.fromCharCode(0xA0
),0)<0))Pj=false;if(Pj){var inx=1;var Ap5=Bd;while(Ap5>0){inx=inx+(this.CJ.charCodeAt(
inx)||0);Ap5=Ap5-1;}if(((this.CJ.charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((
inx+(this.CJ.charCodeAt(inx)||0))-1)||0)===0x0A))Pj=false;}var Ami=0;var Ep=0;if(
Pj)Ami=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=(AE[2]-AE[0])-font.YB(NM,0,Ml);else
if(((Bu&0x2)===0x2))Ep=(((AE[2]-AE[0])/2)|0)-((font.YB(NM,0,Ml)/2)|0);var col=font.
BjS(NM,0,Ml,(K4[0]-AE[0])-Ep,Ami);if(col<0)col=0;return[col,Bd];},Afj:function(AoR
){var B;if((this.String===A.jV)||!this.B7)return BD;if(!this.H2)this.XT(this);var
Kk=this.CJ.charCodeAt(0)||0;var font=this.B7;var Bu=this.Kn;var Bd=AoR[1];var col=
AoR[0];if(Bd>=Kk){Bd=Kk-1;col=this.CJ.length;}if(Bd<0){Bd=0;col=0;}var NM=this.ADl(
Bd);var Ml=NM.length;var AE=this.Dd();var Pj=false;var leading=font.Leading;if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&
0x40)===0x40)&&(Bd<(Kk-1)))Pj=true;if((Pj&&(NM.indexOf(String.fromCharCode(0x20)
,0)<0))&&(NM.indexOf(String.fromCharCode(0xA0),0)<0))Pj=false;if(Pj){var inx=1;var
Ap5=Bd;while(Ap5>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ap5=Ap5-1;}if(((this.CJ.
charCodeAt(inx+1)||0)===0x0A)||((this.CJ.charCodeAt((inx+(this.CJ.charCodeAt(inx
)||0))-1)||0)===0x0A))Pj=false;}if(this.Oa>0)leading=(this.Oa-font.Ascent)-font.
Descent;var Di=(AE[1]+(Bd*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Ami=0;var Ep=AE[0];if(Pj)Ami=AE[2]-AE[0];else if(((Bu&0x4)===0x4))Ep=AE[2]-font.
YB(NM,0,Ml);else if(((Bu&0x2)===0x2))Ep=(Ep+(((AE[2]-AE[0])/2)|0))-((font.YB(NM,
0,Ml)/2)|0);var pos=font.BjO(NM,0,Ml,col,Ami);if(pos<0)pos=0;return[Ep+pos,Di];}
,AO4:function(Ad){var B;if((this.String===A.jV)||!this.B7)return E8;if(!this.H2)
this.XT(this);var Kk=this.CJ.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
Kk)&&(Ad>0)))return E8;var Bu=this.Kn;var inx=1;var leading=font.Leading;var Be=
this.M;var width=Be[2]-Be[0];var height=Be[3]-Be[1];width=width-(this.Jh*2);if(((
Bu&0x80)===0x80)){if(this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(this.
Oa>0)leading=(this.Oa-font.Ascent)-font.Descent;var Di=Ad*((font.Ascent+font.Descent
)+leading);var Ep=0;while(Ad>0){inx=inx+(this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var
ABj=(this.CJ.charCodeAt(inx)||0)-1;var BgB=font.YB(this.CJ,inx+1,ABj);var A4w=font.
A7o(this.CJ,inx+1,ABj);var Ap7=BgB;var AaW=font.Ascent+font.Descent;var ABx=(Kk*((
font.Ascent+font.Descent)+leading))-leading;if(!Kk)ABx=AaW;if((((this.CJ.charCodeAt((
inx+ABj)+1)||0)===0x00)||((this.CJ.charCodeAt(inx+ABj)||0)===0x0A))||((this.CJ.charCodeAt(
inx+1)||0)===0x0A))Bu=Bu&~0x40;if(((Bu&0x40)===0x40)){var Ap6=(inx+1)+ABj;var Azu=
this.CJ.indexOf(String.fromCharCode(0x20),inx+1);var Azv=this.CJ.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Azu>=0)&&(Azu<Ap6))||((Azv>=0)&&(Azv<Ap6)))Ap7=width;
}if((!!(Bu&0x110)&&!!(Bu&0x28))&&(ABx>height))Bu&=~0x110;if(!!(Bu&0x110))Bu&=~0x28;
if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&(Ap7>width))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=
~0x5;if(((Bu&0x4)===0x4))Ep=width-Ap7;else if(((Bu&0x2)===0x2))Ep=((width/2)|0)-((
Ap7/2)|0);if(((Bu&0x20)===0x20))Di=Di+(height-ABx);else if(((Bu&0x100)===0x100))
Di=((Di+((height/2)|0))-((ABx/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bu&0x10)===0x10))Di=(Di+((height/2)|0))-((ABx/2)|0);Ep=(Ep+A4w[0])+this.Jh;
Ap7=(Ap7+(A4w[2]-A4w[0]))-BgB;var B5;{var Bf3=[Be[0]+Ep,Be[1]+Di];B5=[].concat(Bf3
,A.abf(Bf3,[Ap7,AaW]));}return A.abh(B5,this.Br);},ADl:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.H2)this.XT(this);var Kk=this.CJ.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=Kk))return A.jV;while(Ad>0){inx=inx+(
this.CJ.charCodeAt(inx)||0);Ad=Ad-1;}var XU=inx;var AtW=inx+(this.CJ.charCodeAt(
inx)||0);var IC=0x00;do{XU=XU+1;IC=this.CJ.charCodeAt(XU)||0;}while(((IC===0xFEFF
)||(IC===0x0A))&&(XU<=AtW));do{AtW=AtW-1;IC=this.CJ.charCodeAt(AtW)||0;}while(((
IC===0xFEFF)||(IC===0x0A))&&(XU<=AtW));var NM=A.abW(this.CJ,XU,(AtW-XU)+1);var Apy;
for(Apy=NM.indexOf(String.fromCharCode(0xFEFF),0);Apy>=0;Apy=NM.indexOf(String.fromCharCode(
0xFEFF),Apy+1)){var XJ=Apy+1;while((NM.charCodeAt(XJ)||0)===0xFEFF)XJ=XJ+1;NM=A.
ab1(NM,Apy,XJ-Apy);}return NM;},Dd:function(){var B;if((this.String===A.jV)||!this.
B7)return E8;if(!this.H2)this.XT(this);if(this.CJ===A.jV)return E8;var leading=this.
B7.Leading;var ABh=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.Oa>0
){leading=(this.Oa-this.B7.Ascent)-this.B7.Descent;ABh=this.Oa;}if(A.aaX(this.Amp
,BD))this.Amp=[this.B7.A7d(this.CJ),this.Amp[1]];this.Amp=[this.Amp[0],((this.CJ.
charCodeAt(0)||0)*ABh)-leading];var Bu=this.Kn;var Be=this.M;var Aue=this.Jh;var
width=Be[2]-Be[0];var height=Be[3]-Be[1];var Dh=[Aue,0,width-Aue,height];var B5=[
].concat(Dh.slice(0,2),A.abf(Dh.slice(0,2),this.Amp));if(((Bu&0x80)===0x80)){if(
this.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if(((Bu&0x40)===0x40)){var XL=
this.AcQ;if(XL<=0)XL=width-(this.Jh*2);if(XL<0)XL=0;if(XL>(B5[2]-B5[0]))B5=A.abL(
B5,XL);}if((!!(Bu&0x110)&&!!(Bu&0x28))&&((B5[3]-B5[1])>(Dh[3]-Dh[1])))Bu&=~0x110;
if(!!(Bu&0x110))Bu&=~0x28;if((((Bu&0x2)===0x2)&&!!(Bu&0x5))&&((B5[2]-B5[0])>(Dh[
2]-Dh[0])))Bu&=~0x2;if(((Bu&0x2)===0x2))Bu&=~0x5;if((B5[2]-B5[0])!==(Dh[2]-Dh[0]
)){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2)===0x2)
)B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1]));else
if(((Bu&0x100)===0x100))B5=A.abO(B5,((Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bu&0x10)===0x10))B5=
A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Be.slice(
0,2));return A.abh(B5,this.Br);},_Init:function(aArg){A.Core.Eu._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.Lg();this.__proto__=A.Core.Eu;
A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuZ={attrString:null,AttrSet:
null,String:A.jV,Kn:0x12,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Dd();Ck=Ck+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;C0.BiX(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ck*255)>>8,(Ck*255)>>8,(Ck*255)>>8,(Ck
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.Pl],this);}A.Core.Eu.H.call(this,E);A.pe([this,this.AiW],this
);},AiW:function(G){},XT:function(G){var B;var ALP;ALP=(B=this.M)[2]-B[0];if(ALP<
0)ALP=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A5L
,0);if(!!this.attrString)this.attrString.BoH(this.AttrSet,this.String,ALP,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([this,this.AiW],this);
},Pl:function(G){A.pe([this,this.XT],this);},Bgv:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.M);},A6:function(E){var B;E&=~0x140;if(E===this.
Kn)return;this.Kn=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);A.pe([
this,this.AiW],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.Pl],this);},A97:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bgv],this.AttrSet,0);A.z9([this,this.Pl
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bgv],this.AttrSet,0);A.zV([this,this.Pl],this.AttrSet,1);}A.pe([this,this.
Pl],this);},Dd:function(){var B;if((this.String===A.jV)||!this.AttrSet)return E8;
if(!this.attrString)this.XT(this);if(!this.attrString)return E8;var Bu=this.Kn;var
C6=this.attrString.BjT();var Dh=A.aaT(this.M,BD);var B5=[].concat(Dh.slice(0,2),
A.abf(Dh.slice(0,2),C6));if(!C6[0]||!C6[1])return E8;if(((Bu&0x80)===0x80)){if(this.
attrString.Aj6())Bu=(Bu&~0x80)|0x4;else Bu=(Bu&~0x80)|0x1;}if((B5[2]-B5[0])!==(Dh[
2]-Dh[0])){if(((Bu&0x4)===0x4))B5=A.abM(B5,Dh[2]-(B5[2]-B5[0]));else if(((Bu&0x2
)===0x2))B5=A.abM(B5,(Dh[0]+(((Dh[2]-Dh[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(Dh[3]-Dh[1])){if(((Bu&0x20)===0x20))B5=A.abO(B5,Dh[3]-(B5[3]-B5[1])
);else if(((Bu&0x10)===0x10))B5=A.abO(B5,(Dh[1]+(((Dh[3]-Dh[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);
this.__proto__=C.AuZ;this.U=0x3;},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Aog={AiJ:
null,FJ:null,Aiw:0,Aiv:0,Vg:A.wf,Cl:A.abi(4,3,0,null),AG4:A.wf,Tv:0,ApL:0,J1:function(
E){if(A.aaX(E,this.KD))return;A.Core.ZJ.J1.call(this,E);this.Cl.Set(3,0,E[0]);this.
Cl.Set(3,1,E[1]);this.Cl.Set(3,2,1);this.Tv=0x45;this.FJ=null;A.pe([this,this.Aje
],this);},KA:function(E){if(A.aaX(E,this.MM))return;A.Core.ZJ.KA.call(this,E);this.
Cl.Set(2,0,E[0]);this.Cl.Set(2,1,E[1]);this.Cl.Set(2,2,1);this.Tv=0x45;this.FJ=null;
A.pe([this,this.Aje],this);},DD:function(E){if(A.aaX(E,this.ED))return;A.Core.ZJ.
DD.call(this,E);this.Cl.Set(1,0,E[0]);this.Cl.Set(1,1,E[1]);this.Cl.Set(1,2,1);this.
Tv=0x45;this.FJ=null;A.pe([this,this.Aje],this);},DN:function(E){if(A.aaX(E,this.
Et))return;A.Core.ZJ.DN.call(this,E);this.Cl.Set(0,0,E[0]);this.Cl.Set(0,1,E[1]);
this.Cl.Set(0,2,1);this.Tv=0x45;this.FJ=null;A.pe([this,this.Aje],this);},A1Z:function(
){return;},Aje:function(G){var B;this.AiJ=null;if(this.Tv===0x00)return;if(this.
Tv===0x45){var K8=A._NewObject(A.Graphics.Ax9,0);K8=K8.AN1(this.Cl.Get(0,0),this.
Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),this.Cl.Get(2,1),
this.Cl.Get(3,0),this.Cl.Get(3,1));if(!!K8){K8.ACk(0,0);this.Cl.Set(0,2,K8.U0*240
);K8.ACk(1,0);this.Cl.Set(1,2,K8.U0*240);K8.ACk(1,1);this.Cl.Set(2,2,K8.U0*240);
K8.ACk(0,1);this.Cl.Set(3,2,K8.U0*240);}this.A1Z();}if((((this.Tv===0x4D)&&!!this.
FJ)&&!!this.Vg[0])&&!!this.Vg[1]){var Ai$=[].concat(BD,this.Vg);var Ai_=this.AG4;
var Af$=Ai$[0]-Ai_[0];var Az=Ai$[2]-Ai_[0];var D8=Ai$[1]-Ai_[1];var RC=Ai$[3]-Ai_[
1];this.FJ.Afe(Af$,D8);this.Cl.Set(0,0,this.FJ.P_+this.Aiv);this.Cl.Set(0,1,this.
FJ.P$+this.Aiw);this.Cl.Set(0,2,this.FJ.U0);this.FJ.Afe(Az,D8);this.Cl.Set(1,0,this.
FJ.P_+this.Aiv);this.Cl.Set(1,1,this.FJ.P$+this.Aiw);this.Cl.Set(1,2,this.FJ.U0);
this.FJ.Afe(Az,RC);this.Cl.Set(2,0,this.FJ.P_+this.Aiv);this.Cl.Set(2,1,this.FJ.
P$+this.Aiw);this.Cl.Set(2,2,this.FJ.U0);this.FJ.Afe(Af$,RC);this.Cl.Set(3,0,this.
FJ.P_+this.Aiv);this.Cl.Set(3,1,this.FJ.P$+this.Aiw);this.Cl.Set(3,2,this.FJ.U0);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Et=[(this.
Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.Get(1,0)+0.5)|0,(
this.Cl.Get(1,1)+0.5)|0];this.MM=[(this.Cl.Get(2,0)+0.5)|0,(this.Cl.Get(2,1)+0.5
)|0];this.KD=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];this.A1Z();}this.
ApL=this.Tv;this.Tv=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));},Boc:function(E){if(A.aaX(E,this.AG4))return;this.AG4=E;if((this.ApL!==0x45)&&(
this.Tv===0x00)){this.Tv=this.ApL;A.pe([this,this.Aje],this);}},Arx:function(Fg){
var B;if(!!!this.AiJ){this.AiJ=A._NewObject(A.Graphics.A7N,0);this.AiJ.AN1(this.
Cl.Get(0,0),this.Cl.Get(0,1),this.Cl.Get(1,0),this.Cl.Get(1,1),this.Cl.Get(2,0),
this.Cl.Get(2,1),this.Cl.Get(3,0),this.Cl.Get(3,1));}if(!this.AiJ.Afe(Fg))return BD;
var Aqa=[].concat(BD,this.Vg);var Ep=this.AiJ.P_*(Aqa[2]-Aqa[0]);var Di=this.AiJ.
P$*(Aqa[3]-Aqa[1]);return A.abf([Ep|0,Di|0],Aqa.slice(0,2));},Bay:function(Bcv,Mc
){var B;this.AiJ=null;if(!Mc)throw new Error(I0);if(!this.FJ)this.FJ=A._NewObject(
A.Graphics.Ax9,0);this.FJ.BhT(Mc);this.Aiv=Bcv[0];this.Aiw=Bcv[1];this.ApL=0x4D;
this.Tv=0x00;if(!this.Vg[0]||!this.Vg[1])return;var Ai$=[].concat(BD,this.Vg);var
Ai_=this.AG4;var Af$=Ai$[0]-Ai_[0];var Az=Ai$[2]-Ai_[0];var D8=Ai$[1]-Ai_[1];var
RC=Ai$[3]-Ai_[1];this.FJ.Afe(Af$,D8);this.Cl.Set(0,0,this.FJ.P_+this.Aiv);this.Cl.
Set(0,1,this.FJ.P$+this.Aiw);this.Cl.Set(0,2,this.FJ.U0);this.FJ.Afe(Az,D8);this.
Cl.Set(1,0,this.FJ.P_+this.Aiv);this.Cl.Set(1,1,this.FJ.P$+this.Aiw);this.Cl.Set(
1,2,this.FJ.U0);this.FJ.Afe(Az,RC);this.Cl.Set(2,0,this.FJ.P_+this.Aiv);this.Cl.
Set(2,1,this.FJ.P$+this.Aiw);this.Cl.Set(2,2,this.FJ.U0);this.FJ.Afe(Af$,RC);this.
Cl.Set(3,0,this.FJ.P_+this.Aiv);this.Cl.Set(3,1,this.FJ.P$+this.Aiw);this.Cl.Set(
3,2,this.FJ.U0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Et=[(this.Cl.Get(0,0)+0.5)|0,(this.Cl.Get(0,1)+0.5)|0];this.ED=[(this.Cl.
Get(1,0)+0.5)|0,(this.Cl.Get(1,1)+0.5)|0];this.MM=[(this.Cl.Get(2,0)+0.5)|0,(this.
Cl.Get(2,1)+0.5)|0];this.KD=[(this.Cl.Get(3,0)+0.5)|0,(this.Cl.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.A1Z();},_Init:
function(aArg){A.Core.ZJ._Init.call(this,aArg);(this.Cl=[]).__proto__=C.Aog.Cl;this.
__proto__=C.Aog;this.U=0x3;},_Mark:function(D){var B;A.Core.ZJ._Mark.call(this,D
);if((B=this.AiJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AV6={Fu:null,bitmap:null
,P:null,G_:255,Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var NG=aOffset[0];var NH=aOffset[1];var AE=[].concat(BD,this.
Vg);aBlend=aBlend&&((this.U&0x2)===0x2);Ck=Ck+1;var BeZ;var Be0;var Be1;var Be2;
var BAL=this.G_;BeZ=Be0=Be1=Be2=BAL;var AlC=255|(255<<8)|(255<<16)|((((Ck*BeZ)>>
8)&0xFF)<<24);var AlD=255|(255<<8)|(255<<16)|((((Ck*Be0)>>8)&0xFF)<<24);var By4=
255|(255<<8)|(255<<16)|((((Ck*Be1)>>8)&0xFF)<<24);var By5=255|(255<<8)|(255<<16)|((((
Ck*Be2)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(E8,aOffset));C0.AhV(aClip,this.bitmap
,0,this.Cl.Get(0,0)+NG,this.Cl.Get(0,1)+NH,this.Cl.Get(0,2),this.Cl.Get(1,0)+NG,
this.Cl.Get(1,1)+NH,this.Cl.Get(1,2),this.Cl.Get(2,0)+NG,this.Cl.Get(2,1)+NH,this.
Cl.Get(2,2),this.Cl.Get(3,0)+NG,this.Cl.Get(3,1)+NH,this.Cl.Get(3,2),AE,AlC,AlD,
By4,By5,aBlend,true);},G6:function(CN){if(!this.P||!this.Fu)return null;var BO=(
A.Core.Aeh.isPrototypeOf(CN)?CN:null);var D4=(A.Core.AqP.isPrototypeOf(CN)?CN:null
);if(!BO&&!D4)return null;var Fw=BD;var B1=this.Fu.Ab;while(!!B1&&(B1!==this.P)){
Fw=A.abe(Fw,B1.M.slice(0,2));B1=B1.Ab;}var X=this.Fu;if(!!BO&&!BO.Down)this.Fu=null;
if(!!BO){BO.H5=A.abf(this.Arx(BO.H5),Fw);BO.NZ=A.abf(this.Arx(BO.NZ),Fw);return X.
G6(BO);}if(!!D4){var BAP=A.abf(this.Arx(A.abe(D4.H5,D4.DH)),Fw);D4.H5=A.abf(this.
Arx(D4.H5),Fw);D4.NZ=A.abf(this.Arx(D4.NZ),Fw);D4.DH=A.abe(D4.H5,BAP);return X.G6(
D4);}return C.Aog.G6.call(this,CN);},Yr:function(Dc,BH,Om,Aas,Ac8,Ac7){var B;if(
!this.P||!((this.P.U&0x18)===0x18))return null;var pos=A.aaI(Dc);pos=this.Arx(pos
);var Aqa=[].concat(BD,this.Vg);if(!A.wa(Aqa,pos))return null;var JK=this.P.Yr(A.
abh(A.abh([0,0,Dc[2]-Dc[0],Dc[3]-Dc[1]],pos),this.P.M.slice(0,2)),BH,Om,Aas,null
,Ac7);if(!!JK)this.Fu=JK.Cj;else this.Fu=null;if(!!this.Fu)return A._NewObject(A.
Core.Au6,0).Initialize(this,BD);return null;},RO:function(G){var B;var Be3=this.
Vg;if(!!this.P)this.bitmap=this.P.FG;else this.bitmap=null;if(!!this.bitmap)this.
Vg=this.bitmap.FrameSize;else this.Vg=BD;if(((A.aaX(Be3,this.Vg)||((this.ApL===0x45
)&&(this.Tv===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if(((this.ApL!==0x45)&&(this.Tv===0x00))&&!A.aaX(Be3,this.Vg)){this.Tv=this.ApL;
A.pe([this,this.Aje],this);}},CZ:function(E){var B;if(E===this.G_)return;this.G_=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},Bng:function(
E){if(E===this.P)return;if(!!E&&(E===this.Ab))throw new Error(Iw);if(!!this.P){A.
z9([this,this.RO],this.P,0);this.bitmap=null;}this.P=E;if(!!E){A.zV([this,this.RO
],E,0);this.bitmap=E.FG;}this.RO(this);},Aws:function(){return this.G_;},_Init:function(
aArg){C.Aog._Init.call(this,aArg);this.__proto__=C.AV6;},_Mark:function(D){var B;
C.Aog._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aes={HA:null,AQ:0xFFFFFFFF,DH:A.wf
,AOL:false,Lg:function(){this.A2g();},Ks:function(C0,aClip,aOffset,Ck,aBlend){if(
!this.HA)return;var DE;var DP;var DJ;var DO;var B4=this.AQ;Ck=Ck+1;DE=DP=DJ=DO=B4;
if(Ck<256){DE=(DE&0x00FFFFFF)|((((Ck*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&0x00FFFFFF
)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ck*((DJ>>24)&0xFF
))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<24);}C0.
Aes(aClip,this.HA,A.abh(this.M,aOffset),this.AOL,this.DH,DE,DP,DO,DJ,true,true,0
);},A2g:function(){return;},Ajf:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.M);},AnL:function(E){
var B;if(A.aaX(E,this.DH))return;this.DH=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bj(this.M);},Bnb:function(E){var B;if(E===this.AOL)return;this.
AOL=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.M);},ZD:function(
E){var B;if(E===this.HA)return;if(!!this.HA)A.z9([this,this.Ajf],this.HA,0);this.
HA=E;if(!!this.HA)A.zV([this,this.Ajf],this.HA,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.M);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Eu._Init.call(this,aArg);this.__proto__=C.Aes;},
_Done:function(){this.Lg();this.__proto__=A.Core.Eu;A.Core.Eu._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eu._Mark.call(this,D);if((B=this.HA)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hq={HA:null,AQ:0xFFFFFFFF
,DH:A.wf,Width:1,Lg:function(){this.A2g();},Ks:function(C0,aClip,aOffset,Ck,aBlend
){if(!this.HA)return;var DE;var DP;var DJ;var DO;var B4=this.AQ;Ck=Ck+1;DE=DP=DJ=
DO=B4;if(Ck<256){DE=(DE&0x00FFFFFF)|((((Ck*((DE>>24)&0xFF))>>8)&0xFF)<<24);DP=(DP&
0x00FFFFFF)|((((Ck*((DP>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ck*((DJ>>
24)&0xFF))>>8)&0xFF)<<24);DO=(DO&0x00FFFFFF)|((((Ck*((DO>>24)&0xFF))>>8)&0xFF)<<
24);}C0.Hq(aClip,this.HA,A.abh(this.M,aOffset),false,this.DH,this.Width,0,0,0,3,
DE,DP,DO,DJ,true,true);},A2g:function(){return;},Ajf:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.
M);},AnL:function(E){var B;if(A.aaX(E,this.DH))return;this.DH=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.HA)this.Ab.Bj(this.M);},Nu:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.HA)this.Ab.Bj(this.M);},ZD:function(E){var B;if(E===this.HA)return;if(!!this.
HA)A.z9([this,this.Ajf],this.HA,0);this.HA=E;if(!!this.HA)A.zV([this,this.Ajf],this.
HA,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.M);},Z:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Eu._Init.call(
this,aArg);this.__proto__=C.Hq;},_Done:function(){this.Lg();this.__proto__=A.Core.
Eu;A.Core.Eu._Done.call(this);},_Mark:function(D){var B;A.Core.Eu._Mark.call(this
,D);if((B=this.HA)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BEY={A5s:0x1,A5r:0x2,A5t:0x4,A5w:0x8,A5v:0x10,A5u:0x20,BGf:0x40,BGg:0x80,BGq:
0x100};C.BGv={A5s:0x1,A5r:0x2,A5t:0x4,A5w:0x8,A5v:0x10,A5u:0x20,BDu:0x40,BDt:0x80
,BDz:0x100};C.BFB={Normal:0,BF$:1,BF9:2,BF_:3};
C._Init=function(){C.C8.__proto__=A.Core.Akh;C.AL.__proto__=A.Core.Eu;C.BW.__proto__=
A.Core.Eu;C.NY.__proto__=A.Core.Eu;C.Ap.__proto__=A.Core.Eu;C.Text.__proto__=A.Core.
Eu;C.AuZ.__proto__=A.Core.Eu;C.Aog.__proto__=A.Core.ZJ;C.AV6.__proto__=C.Aog;C.Aes.
__proto__=A.Core.Eu;C.Hq.__proto__=A.Core.Eu;};C._ReInit=function(){};C.DI=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */