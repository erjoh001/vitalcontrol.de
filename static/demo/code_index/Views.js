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
var Cc=[1,1];var BF=[0,0];var EZ=[0,0,0,0];var Hj="\uFEFF";var I$="No matrix to perform 3D transformation";
var Io="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DQ={KE:null,AkZ:1,AkY:1,AQ:0xFFFFFFFF,Kg:function(C0,aClip,aOffset,Ci,aBlend){var
B;var Agd=this.AkY;var Age=this.AkZ;var Ado=A.abf(this.Ep,aOffset);var Adp=A.abf(
this.Ey,aOffset);var All;var Alm;var B4=this.AQ;if(A.aaX(Ado,Adp))return;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;All=Alm=B4;if(Ci<256){All=(All&0x00FFFFFF)|((((
Ci*((All>>24)&0xFF))>>8)&0xFF)<<24);Alm=(Alm&0x00FFFFFF)|((((Ci*((Alm>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Agd===1)&&(Age===1))C0.AuT(aClip,Ado,Adp,All,Alm,aBlend);else
C0.Bh1(aClip,Ado,Adp,Agd,Age,All,Alm,aBlend);},GetExtent:function(){var Agd=this.
AkY;var Age=this.AkZ;var Ado=this.Ep;var Adp=this.Ey;if(((Agd===1)&&(Age===1))||
A.aaX(Ado,Adp))return A.Core.Aj8.GetExtent.call(this);var Air=Agd/2;var Ais=Age/
2;var Apa=Ado[0];var Apb=Ado[1];var Apc=Adp[0];var Apd=Adp[1];var J4=Apc-Apa;var
J5=Apd-Apb;var IQ=Math.sqrt((J4*J4)+(J5*J5));J4=J4/IQ;J5=J5/IQ;var Bcu=Apa+(J5*Air
);var Bcv=Apb-(J4*Air);var AJh=Apc+(J5*Ais);var AJi=Apd-(J4*Ais);var AJj=Apc-(J5
*Ais);var AJk=Apd+(J4*Ais);var AJl=Apa-(J5*Air);var AJm=Apb+(J4*Air);var left=Bcu;
var right=Bcu;var top=Bcv;var bottom=Bcv;if(AJh<left)left=AJh;if(AJj<left)left=AJj;
if(AJl<left)left=AJl;if(AJh>right)right=AJh;if(AJj>right)right=AJj;if(AJl>right)
right=AJl;if(AJi<top)top=AJi;if(AJk<top)top=AJk;if(AJm<top)top=AJm;if(AJi>bottom
)bottom=AJi;if(AJk>bottom)bottom=AJk;if(AJm>bottom)bottom=AJm;var Az=[left|0,top|
0,right|0,bottom|0];Az=[].concat(Az.slice(0,2),A.abf(Az.slice(2,4),Cc));return Az;
},RC:function(G){var B;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));},A_E:function(E){var B;if(E<1)E=1;if(E===this.AkZ)return;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.AkZ=E;if(!!this.Ab&&((this.U&0x1
)===0x1))this.Ab.Bg(this.GetClipping());if(((E!==1)||(this.AkY!==1))&&!this.KE){
this.KE=A.aaL(A.aci.AsC);if(this.KE.OJ)A.zV([this,this.RC],this.KE,0);}if(((E===
1)&&(this.AkY===1))&&!!this.KE){if(this.KE.OJ)A.z9([this,this.RC],this.KE,0);this.
KE=null;}},A_D:function(E){var B;if(E<1)E=1;if(E===this.AkY)return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.AkY=E;if(!!this.Ab&&((this.
U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if(((E!==1)||(this.AkZ!==1))&&!this.
KE){this.KE=A.aaL(A.aci.AsC);if(this.KE.OJ)A.zV([this,this.RC],this.KE,0);}if(((
E===1)&&(this.AkZ===1))&&!!this.KE){if(this.KE.OJ)A.z9([this,this.RC],this.KE,0);
this.KE=null;}},Ne:function(E){var B;if(E<1)E=1;if((E===this.AkY)&&(E===this.AkZ
))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.
AkY=E;this.AkZ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if((E!==1)&&!this.KE){this.KE=A.aaL(A.aci.AsC);if(this.KE.OJ)A.zV([this,this.
RC],this.KE,0);}if((E===1)&&!!this.KE){if(this.KE.OJ)A.z9([this,this.RC],this.KE
,0);this.KE=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fi:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(
aArg){A.Core.Aj8._Init.call(this,aArg);this.__proto__=C.DQ;},_Mark:function(D){var
B;A.Core.Aj8._Mark.call(this,D);if((B=this.KE)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AL={AM6:0xFFFFFFFF,AM7:0xFFFFFFFF,AM$:0xFFFFFFFF
,AM_:0xFFFFFFFF,AQ:0xFFFFFFFF,Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;var Dy=
this.AM_;var DK=this.AM$;var DG=this.AM6;var DJ=this.AM7;var B4=this.AQ;aBlend=aBlend&&((
this.U&0x2)===0x2);Ci=Ci+1;if((((Dy===DK)&&(DG===DJ))&&(Dy===DG))&&(Dy===0xFFFFFFFF
))Dy=DK=DG=DJ=B4;else if(B4!==0xFFFFFFFF){Dy=(Dy&0x00FFFFFF)|((((((Dy>>24)&0xFF)
*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);Dy=(Dy&0xFFFFFF00)|((((Dy&0xFF)*((B4&0xFF)+
1))>>8)&0xFF);Dy=(Dy&0xFFFF00FF)|((((((Dy>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dy=(Dy&0xFF00FFFF)|((((((Dy>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);
DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DK=(DK&
0xFFFFFF00)|((((DK&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DK=(DK&0xFFFF00FF)|((((((DK>>8
)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DK=(DK&0xFF00FFFF)|((((((DK>>16)&0xFF)
*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*(((B4>>
24)&0xFF)+1))>>8)&0xFF)<<24);DG=(DG&0xFFFFFF00)|((((DG&0xFF)*((B4&0xFF)+1))>>8)&
0xFF);DG=(DG&0xFFFF00FF)|((((((DG>>8)&0xFF)*(((B4>>8)&0xFF)+1))>>8)&0xFF)<<8);DG=(
DG&0xFF00FFFF)|((((((DG>>16)&0xFF)*(((B4>>16)&0xFF)+1))>>8)&0xFF)<<16);DJ=(DJ&0x00FFFFFF
)|((((((DJ>>24)&0xFF)*(((B4>>24)&0xFF)+1))>>8)&0xFF)<<24);DJ=(DJ&0xFFFFFF00)|((((
DJ&0xFF)*((B4&0xFF)+1))>>8)&0xFF);DJ=(DJ&0xFFFF00FF)|((((((DJ>>8)&0xFF)*(((B4>>8
)&0xFF)+1))>>8)&0xFF)<<8);DJ=(DJ&0xFF00FFFF)|((((((DJ>>16)&0xFF)*(((B4>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ci<256){Dy=(Dy&0x00FFFFFF)|((((Ci*((Dy>>24)&0xFF))>>8)&
0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ci*((DK>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF
)|((((Ci*((DG>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ci*((DJ>>24)&0xFF
))>>8)&0xFF)<<24);}C0.Au8(aClip,A.abh(this.M,aOffset),Dy,DK,DJ,DG,aBlend);},Awj:
function(E){var B;if(E===this.AM6)return;this.AM6=E;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},Awk:function(E){var B;if(E===this.AM7)return;this.AM7=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Awm:function(E){var B;
if(E===this.AM$)return;this.AM$=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(
this.M);},Awl:function(E){var B;if(E===this.AM_)return;this.AM_=E;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Fi:function(){
var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},_Init:function(aArg){A.Core.Eq._Init.call(this,aArg);this.__proto__=
C.AL;},_className:"Views::Rectangle"};C.Cf={Width:1,AQ:0xFFFFFFFF,Kg:function(C0
,aClip,aOffset,Ci,aBlend){var B;var Dy;var DK;var DG;var DJ;var B4=this.AQ;aBlend=
aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;Dy=DK=DG=DJ=B4;if(Ci<256){Dy=(Dy&0x00FFFFFF
)|((((Ci*((Dy>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((Ci*((DK>>24)&0xFF
))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Ci*((DG>>24)&0xFF))>>8)&0xFF)<<24);DJ=(
DJ&0x00FFFFFF)|((((Ci*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}C0.BhZ(aClip,A.abh(this.M
,aOffset),this.Width,Dy,DK,DJ,DG,aBlend);},Ne:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bg(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(
0x0,0x1);},_Init:function(aArg){A.Core.Eq._Init.call(this,aArg);this.__proto__=C.
Cf;},_className:"Views::Border"};C.NL={timer:null,Al:null,ML:-1,AQ:0xFFFFFFFF,AuU:
0x1F,TN:0,Du:0,Anc:A.wf,Vp:false,Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;var
Nn=this.TN;if(this.ML>=0)Nn=this.ML;if(!this.Al||(Nn>=this.Al.NoOfFrames))return;
this.Al.Update();var Dy;var DK;var DJ;var DG;var B4=this.AQ;var Ka=(((Ci+1)*255)>>
8)+1;var Og=this.AuU;var Az=A.abh(this.M,aOffset);var AKK=A.abe([Az[2]-Az[0],Az[
3]-Az[1]],this.Anc);aBlend=aBlend&&((this.U&0x2)===0x2);Dy=DK=DG=DJ=B4;if(Ka<256
){Dy=(Dy&0x00FFFFFF)|((((((Dy>>24)&0xFF)*Ka)>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((
DK>>24)&0xFF)*Ka)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Ka)>>8)&
0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*Ka)>>8)&0xFF)<<24);}if(((this.
Anc[0]>0)&&(AKK[0]>0))&&!((Og&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKK[
0];if(((Og&0x1)===0x1)){if(aClip[2]>Az[2])aClip=A.abN(aClip,Az[2]);if(d>0)Az=A.abN(
Az,Az[2]+d);Og=Og|0x4;}else if(((Og&0x4)===0x4)){if(aClip[0]<Az[0])aClip=[].concat(
Az[0],aClip.slice(1,4));if(d>0)Az=[].concat(Az[0]-d,Az.slice(1,4));Og=Og|0x1;}else{
if(aClip[0]<Az[0])aClip=[].concat(Az[0],aClip.slice(1,4));if(aClip[2]>Az[2])aClip=
A.abN(aClip,Az[2]);if(d>0){Az=[].concat(Az[0]-((d/2)|0),Az.slice(1,4));Az=A.abN(
Az,(Az[2]+d)-((d/2)|0));}Og=Og|0x5;}}if(((this.Anc[1]>0)&&(AKK[1]>0))&&!((Og&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKK[1];if(((Og&0x2)===0x2)){if(aClip[
3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0)Az=[].concat(Az.slice(0,
3),Az[3]+d);Og=Og|0x8;}else if(((Og&0x8)===0x8)){if(aClip[1]<Az[1])aClip=A.abP(aClip
,Az[1]);if(d>0)Az=A.abP(Az,Az[1]-d);Og=Og|0x2;}else{if(aClip[1]<Az[1])aClip=A.abP(
aClip,Az[1]);if(aClip[3]>Az[3])aClip=[].concat(aClip.slice(0,3),Az[3]);if(d>0){Az=
A.abP(Az,Az[1]-((d/2)|0));Az=[].concat(Az.slice(0,3),(Az[3]+d)-((d/2)|0));}Og=Og|
0xA;}}C0.BhY(aClip,this.Al,Nn,Az,Og,Dy,DK,DJ,DG,aBlend);},RC:function(G){var B;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Mc:function(G){var B;var Nn=
this.ML;var Tj=0;if(!!this.Al)Tj=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.ML<0))&&(Tj>0))this.Du=this.timer.Bu-(this.TN*this.Al.FrameDelay);if(
!!this.timer&&(Tj>0)){var Au=(this.timer.Bu-this.Du)|0;Nn=(Au/this.Al.FrameDelay
)|0;if(Au>=Tj){Nn=Nn%this.Al.NoOfFrames;this.Du=this.timer.Bu-(Au%Tj);}}if(((Nn!==
this.ML)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);this.ML=Nn;if(!Tj&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.
Bg(this.M);},Zh:function(E){var B;if(this.Vp===E)return;this.Vp=E;this.ML=-1;if(
!E&&!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.Ad7);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.
Mc],this);}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},A9S:function(
E){var B;if(E===this.AuU)return;this.AuU=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.M);},Cu:function(E){var B;if(E<0)E=0;if((E===this.TN)&&(this.ML===-1)
)return;this.TN=E;if(!this.timer)this.ML=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.M);},Aw:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OJ)A.z9([this,this.RC],this.Al,0);this.Al=E;this.ML=-1;if(!!E&&E.OJ)A.zV([this,this.
RC],E,0);if(this.Vp){this.Zh(false);this.Zh(true);}if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},A98:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
Anc))return;this.Anc=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!((this.AuU&0xF)===
0xF))this.Ab.Bg(this.M);},_Init:function(aArg){A.Core.Eq._Init.call(this,aArg);this.
__proto__=C.NL;},_Mark:function(D){var B;A.Core.Eq._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Am={timer:null,Al:null,Du:0,ML:0,AQ:0xFFFFFFFF
,Kc:0x12,TN:0,G1:255,Vp:false,AaS:false,Kg:function(C0,aClip,aOffset,Ci,aBlend){
var B;var Nn=this.TN;if(this.ML>=0)Nn=this.ML;if(!this.Al||(Nn>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Da();var C4=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var Dy;var DK;var DJ;var DG;var B4=this.AQ;var Ka=(((
Ci+1)*this.G1)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);Dy=DK=DG=DJ=B4;if(Ka<256
){Dy=(Dy&0x00FFFFFF)|((((((Dy>>24)&0xFF)*Ka)>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((
DK>>24)&0xFF)*Ka)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Ka)>>8)&
0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*Ka)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C4))C0.A5F(aClip,this.Al,Nn,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),Dy,DK,DJ,DG,aBlend);else C0.Boc(aClip,this.Al,Nn
,A.abh(AE,aOffset),[].concat(BF,C4),Dy,DK,DJ,DG,aBlend,true);},RC:function(G){var
B;if(((this.AaS&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Da());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Mc:function(
G){var B;var Nn=this.ML;var Tj=0;if(!!this.Al)Tj=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.ML<0))&&(Tj>0))this.Du=this.timer.Bu-(this.TN*this.Al.FrameDelay
);if(!!this.timer&&(Tj>0)){var Au=(this.timer.Bu-this.Du)|0;Nn=(Au/this.Al.FrameDelay
)|0;if(Au>=Tj){Nn=Nn%this.Al.NoOfFrames;this.Du=this.timer.Bu-(Au%Tj);}}if(((Nn!==
this.ML)&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);this.ML=Nn;if(!Tj&&
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},I3:function(E
){if(E===this.AaS)return;this.AaS=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Da());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Zh:function(
E){var B;if(this.Vp===E)return;this.Vp=E;this.ML=-1;if(!E&&!!this.timer){A.z9([this
,this.Mc],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
Ad7);A.zV([this,this.Mc],this.timer,0);A.pe([this,this.Mc],this);}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);},A8:function(E){var B;if(E===this.Kc)return;
this.Kc=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Cu:function(E){
var B;if(E<0)E=0;if((E===this.TN)&&(this.ML===-1))return;this.TN=E;if(!this.timer
)this.ML=-1;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Aw:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OJ)A.z9([this,this.RC],this.
Al,0);this.Al=E;this.ML=-1;if(!!E&&E.OJ)A.zV([this,this.RC],E,0);if(this.Vp){this.
Zh(false);this.Zh(true);}if(((this.AaS&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Da());if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},
Do:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G1)return;this.G1=E;if(
!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Aj:function(E){if(E)this.Cy(
0x400,0x0);else this.Cy(0x0,0x400);},Fi:function(){var B;return((this.U&0x1)===0x1
);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},Da:function(){var
B;if(!this.Al)return EZ;var Bw=this.Kc;var C4=this.Al.FrameSize;var Bd=this.M;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];if(!C4[0]||!C4[1])return EZ;var De=[0,0
,width,height];var B5=De;if(((Bw&0x40)===0x40)){var A3M=((((De[2]-De[0])<<16)+((
C4[0]/2)|0))/C4[0])|0;var AAU=((((De[3]-De[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var AiS=
A3M;if(AAU>AiS)AiS=AAU;B5=A.abL(B5,((C4[0]*AiS)+32768)>>16);B5=A.abI(B5,((C4[1]*
AiS)+32768)>>16);}else if(((Bw&0x80)===0x80)){var A3M=((((De[2]-De[0])<<16)+((C4[
0]/2)|0))/C4[0])|0;var AAU=((((De[3]-De[1])<<16)+((C4[1]/2)|0))/C4[1])|0;var AiS=
A3M;if(AAU<AiS)AiS=AAU;B5=A.abL(B5,((C4[0]*AiS)+32768)>>16);B5=A.abI(B5,((C4[1]*
AiS)+32768)>>16);}else if(!((Bw&0x100)===0x100))B5=A.abK(B5,C4);if((B5[2]-B5[0])
!==(De[2]-De[0])){if(((Bw&0x4)===0x4))B5=A.abM(B5,De[2]-(B5[2]-B5[0]));else if(((
Bw&0x2)===0x2))B5=A.abM(B5,(De[0]+(((De[2]-De[0])/2)|0))-(((B5[2]-B5[0])/2)|0));
}if((B5[3]-B5[1])!==(De[3]-De[1])){if(((Bw&0x20)===0x20))B5=A.abO(B5,De[3]-(B5[3
]-B5[1]));else if(((Bw&0x10)===0x10))B5=A.abO(B5,(De[1]+(((De[3]-De[1])/2)|0))-(((
B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(0,2));return B5;},Bkn:function(){return this.
AQ;},ASd:function(){return this.TN;},_Init:function(aArg){A.Core.Eq._Init.call(this
,aArg);this.__proto__=C.Am;},_Mark:function(D){var B;A.Core.Eq._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B7:null,Ej:null,CH:
A.jV,String:A.jV,Oe:null,Al9:A.wf,I4:0,N4:0,AcC:0,Bt:A.wf,Kc:0x12,AQ:0xFFFFFFFF,
Afo:false,AaS:false,Yg:false,ANX:false,HV:false,La:function(){if(!!this.Oe){this.
A1T(this.Oe);this.Oe=null;}},Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;if((this.
CH===A.jV)||!this.B7)return;var Bw=this.Kc;var font=this.B7;var De=A.abh(this.M,
aOffset);var Dy;var DK;var DJ;var DG;var col=this.AQ;var Ka=(((Ci+1)*255)>>8)+1;
var J_=this.CH.charCodeAt(0)||0;var AE=A.abh(this.Da(),aOffset);var Br=[De[0]-AE[
0],(De[1]-AE[1])-font.Ascent];if(J_<1)return;Dy=DK=DG=DJ=col;if(Ka<256){Dy=(Dy&0x00FFFFFF
)|((((((Dy>>24)&0xFF)*Ka)>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*
Ka)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)*Ka)>>8)&0xFF)<<24);DG=(
DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*Ka)>>8)&0xFF)<<24);}if(((Bw&0x80)===0x80)){if(
this.AjV())Bw=(Bw&~0x80)|0x4;else Bw=(Bw&~0x80)|0x1;}if((J_===1)&&!((Bw&0x40)===
0x40)){C0.A5$(aClip,font,this.CH,2,(this.CH.charCodeAt(1)||0)-1,De,Br,0,0,Dy,DK,
DJ,DG,true);return;}var leading=font.Leading;if(this.N4>0)leading=(this.N4-font.
Ascent)-font.Descent;var AaD=(font.Ascent+font.Descent)+leading;var Bx6=aClip[1]-
AE[1];var Bx7=aClip[3]-AE[1];var A06=AE[2]-AE[0];var Df=0;var P=1;var B4=this.CH.
charCodeAt(1)||0;while(((Df+AaD)<Bx6)&&(B4>0)){P=P+B4;Df=Df+AaD;B4=this.CH.charCodeAt(
P)||0;}while((Df<Bx7)&&(B4>0)){var L_=A.abe(Br,[0,Df]);var Al2=0;var O9=false;if(((((
Bw&0x40)===0x40)&&((this.CH.charCodeAt((P+B4)-1)||0)!==0x0A))&&((this.CH.charCodeAt(
P+1)||0)!==0x0A))&&((this.CH.charCodeAt(P+B4)||0)!==0x00))O9=true;if(O9&&!!(Bw&0x6
)){var ApS=P+B4;var Ay3=this.CH.indexOf(String.fromCharCode(0x20),P+1);var Ay4=this.
CH.indexOf(String.fromCharCode(0xA0),P+1);if(((Ay3<0)||(Ay3>=ApS))&&((Ay4<0)||(Ay4>=
ApS)))O9=false;}if(O9)Al2=A06;else if(((Bw&0x4)===0x4))L_=[(L_[0]-A06)+font.Yl(this.
CH,P+1,B4-1),L_[1]];else if(((Bw&0x2)===0x2))L_=[(L_[0]-((A06/2)|0))+((font.Yl(this.
CH,P+1,B4-1)/2)|0),L_[1]];C0.A5$(aClip,font,this.CH,P+1,B4-1,De,L_,Al2,0,Dy,DK,DJ
,DG,true);P=P+B4;Df=Df+AaD;B4=this.CH.charCodeAt(P)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BfN;BfN=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BfN&&
!this.AcC)&&this.Afo)&&this.HV)&&!((this.U&0x2000)===0x2000)){this.CH=A.jV;this.
HV=false;A.pe([this,this.O$],this);}if(((this.Yg&&this.HV)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.U&0x2000)===0x2000)){this.CH=
A.jV;this.HV=false;A.pe([this,this.O$],this);}A.Core.Eq.H.call(this,E);A.pe([this
,this.AiL],this);},BxY:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BxX:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1T:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Byi:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiL:function(G){A.pe(this.Ej
,this);},O$:function(G){A.pe([this,this.XB],this);},XB:function(G){var B;if(this.
HV)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xr=-1;var
font=this.B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afo){
if(this.AcC>0)Xr=this.AcC;else if(!this.AaS)Xr=width-(this.I4*2);else Xr=width;if(
Xr<0)Xr=1;}if(!!this.Oe){this.A1T(this.Oe);this.Oe=null;}this.HV=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.ANX)this.Oe=this.Byi(length
);this.CH=font.BnD(this.String,0,Xr,length,this.Oe);if(!!this.Oe&&!this.Bje()){this.
A1T(this.Oe);this.Oe=null;}}else this.CH=A.jV;this.Al9=BF;if(((this.Yg&&(this.CH
!==A.jV))&&!this.AaS)&&!!font){var Bw=this.Kc;var leading=font.Leading;var Ix=this.
CH;var AKF=this.AjV();if(((Bw&0x80)===0x80)){if(AKF)Bw=(Bw&~0x80)|0x4;else Bw=(Bw&
~0x80)|0x1;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AAP=(font.
Ascent+font.Descent)+leading;var J_=Ix.charCodeAt(0)||0;var AlJ=((height+leading
)/AAP)|0;var A1j=false;var AJp=false;if(AlJ<=0)AlJ=1;if(J_>AlJ){var Bf=0;var AAQ=
0;var AKD=J_-1;var K1;var Np=Ix.length;var tmp=A.jV;if(!!(Bw&0x110)&&!!(Bw&0x28)
)Bw&=~0x110;if(!!(Bw&0x110))Bw&=~0x28;if(((Bw&0x20)===0x20))AAQ=J_-AlJ;else if(((
Bw&0x10)===0x10)||((Bw&0x100)===0x100)){AAQ=((J_-AlJ)/2)|0;AKD=(AAQ+AlJ)-1;}else
AKD=AlJ-1;A1j=AAQ>0;AJp=AKD<(J_-1);for(K1=1;Bf<AAQ;Bf=Bf+1)K1=K1+(Ix.charCodeAt(
K1)||0);if(AJp)for(Np=K1;Bf<AKD;Bf=Bf+1)Np=Np+(Ix.charCodeAt(Np)||0);if(A1j){var
IQ=Ix.charCodeAt(K1)||0;tmp=(Hj+A.abW(Ix,K1,IQ))+Hj;tmp=A.abQ(tmp,0,(IQ+2)&0xFFFF
);K1=K1+IQ;if((tmp.charCodeAt(IQ)||0)===0x0A){tmp=A.abQ(tmp,IQ,0xFEFF);tmp=A.abQ(
tmp,IQ+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Ix,K1,Np-K1);if(AJp&&(
Np>=K1)){var IQ=Ix.charCodeAt(Np)||0;var Qt=(Hj+A.abW(Ix,Np,IQ))+Hj;Qt=A.abQ(Qt,
0,(IQ+2)&0xFFFF);Qt=A.abQ(Qt,1,0xFEFF);if((Qt.charCodeAt(IQ)||0)===0x0A){Qt=A.abQ(
Qt,IQ,0xFEFF);Qt=A.abQ(Qt,IQ+1,0x0A);}if((Qt.charCodeAt(2)||0)===0x0A){Qt=A.abQ(
Qt,2,0xFEFF);Qt=A.abQ(Qt,1,0x0A);}else Qt=A.abQ(Qt,1,0xFEFF);tmp=tmp+Qt;}Ix=String.
fromCharCode(AlJ&0xFFFF)+tmp;}var Bf=0;var inx=1;var AKd=width-(this.I4*2);if(this.
Afo&&(this.AcC>0))AKd=this.AcC;J_=Ix.charCodeAt(0)||0;for(;Bf<J_;Bf=Bf+1){var Al0=
A1j&&!Bf;var Al1=AJp&&(Bf===(J_-1));var Xh=false;var Xi=false;var At7=AKF;if((AKF&&
Al0)&&!Al1){Al0=false;Al1=true;}else if((AKF&&Al1)&&!Al0){Al1=false;Al0=true;}var
XC=inx+1;var IQ=Ix.charCodeAt(inx)||0;var K1=XC;var Np=(XC+IQ)-2;var A18=-1;var A19=-
1;if(!this.Afo&&(font.Yl(Ix,XC,IQ-1)>AKd)){var AoN=Bw;if(((AoN&0x2)===0x2)&&!!(AoN&
0x5))AoN&=~0x2;if(((AoN&0x2)===0x2))AoN&=~0x5;if(((AoN&0x4)===0x4))Xh=true;else if(((
AoN&0x2)===0x2)){Xh=true;Xi=true;}else Xi=true;}if((Ix.charCodeAt(K1)||0)===0x0A
)K1=K1+1;if((Ix.charCodeAt(Np)||0)===0x0A)Np=Np-1;while(Xh&&((Ix.charCodeAt(K1)||
0)===0xFEFF))K1=K1+1;while(Xi&&((Ix.charCodeAt(Np)||0)===0xFEFF))Np=Np-1;Xh=Xh&&
!Al1;Xi=Xi&&!Al0;while((((Xh||Xi)||Al0)||Al1)&&(K1<Np)){if((Xh&&(At7||!Xi))||Al0
){if(A18>0)Ix=A.abQ(Ix,A18,0xFEFF);Ix=A.abQ(Ix,K1,0x2026);A18=K1;K1=K1+1;At7=!At7;
Al0=false;if(font.Yl(Ix,XC,IQ-1)<=AKd){Xh=false;Xi=false;}else Xh=Xh||!Xi;}if((Xi&&(
!At7||!Xh))||Al1){if(A19>0)Ix=A.abQ(Ix,A19,0xFEFF);Ix=A.abQ(Ix,Np,0x2026);A19=Np;
Np=Np-1;At7=!At7;Al1=false;if(font.Yl(Ix,XC,IQ-1)<=AKd){Xh=false;Xi=false;}else Xi=
Xi||!Xh;}}inx=inx+IQ;}this.Al9=[font.A6F(Ix),((Ix.charCodeAt(0)||0)*AAP)-leading
];this.CH=Ix;}if(this.AaS&&(this.CH!==A.jV)){var AtT=[this.I4,0];this.U=this.U|0x2000;
this.H(A.abg(A.aaT(this.Da(),AtT),this.Bt));this.U=this.U&~0x2000;}if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);A.pe([this,this.AiL],this);},BlP:function(
E){if(E===this.ANX)return;this.ANX=E;this.CH=A.jV;this.HV=false;A.pe([this,this.
O$],this);},Hs:function(E){if(E<0)E=0;if(this.I4===E)return;this.I4=E;this.CH=A.
jV;this.HV=false;A.pe([this,this.O$],this);},AwS:function(E){var B;if(E<0)E=0;if(
this.N4===E)return;this.N4=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.
M);if(this.Yg){this.CH=A.jV;this.HV=false;A.pe([this,this.O$],this);}if(this.AaS&&
this.HV)this.H(A.abg(this.Da(),this.Bt));if(this.HV)A.pe([this,this.AiL],this);}
,BlO:function(E){if(E===this.Yg)return;this.Yg=E;if(((this.Afo&&!!!this.AcC)||E)||
!!this.Ej)this.U=this.U&~0x100;else this.U=this.U|0x100;this.CH=A.jV;this.HV=false;
A.pe([this,this.O$],this);},Q0:function(E){if(A.aa0(E,this.Ej))return;this.Ej=E;
if(((!!!this.AcC&&this.Afo)||!!E)||this.Yg)this.U=this.U&~0x100;else this.U=this.
U|0x100;},I3:function(E){if(E===this.AaS)return;this.AaS=E;if(E&&this.Yg){this.CH=
A.jV;this.HV=false;A.pe([this,this.O$],this);}if(E&&this.HV){var AtT=[this.I4,0];
this.U=this.U|0x2000;this.H(A.abg(A.aaT(this.Da(),AtT),this.Bt));this.U=this.U&~
0x2000;}},Bno:function(E){if(E<0)E=0;if(E===this.AcC)return;this.AcC=E;if(this.Afo&&
this.HV){this.CH=A.jV;this.HV=false;A.pe([this,this.O$],this);}if(((!!!E&&this.Afo
)||this.Yg)||!!this.Ej)this.U=this.U&~0x100;else this.U=this.U|0x100;},KR:function(
E){if(E===this.Afo)return;this.Afo=E;if(this.HV){this.CH=A.jV;this.HV=false;A.pe([
this,this.O$],this);}if(((E&&!!!this.AcC)||this.Yg)||!!this.Ej)this.U=this.U&~0x100;
else this.U=this.U|0x100;},FX:function(E){var B;if(A.aaX(E,this.Bt))return;this.
Bt=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);if(this.HV)A.pe([this
,this.AiL],this);},A8:function(E){var B;if(E===this.Kc)return;this.Kc=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);if(this.Yg){this.CH=A.jV;this.HV=false;
A.pe([this,this.O$],this);}if(this.HV)A.pe([this,this.AiL],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CH=A.jV;this.HV=false;A.pe([this,this.
O$],this);},S:function(E){if(E===this.B7)return;this.B7=E;this.CH=A.jV;this.HV=false;
A.pe([this,this.O$],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Aj:function(E){if(E)this.
Cy(0x400,0x0);else this.Cy(0x0,0x400);},Fi:function(){var B;return((this.U&0x1)===
0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},AjV:function(
){if(!this.HV)this.XB(this);if(!this.Oe)return false;var result=false;var bidi=this.
Oe;result=A.v2(bidi);return result;},Bje:function(){if(!this.HV)this.XB(this);if(
!this.Oe)return false;var result=false;var bidi=this.Oe;result=A.zZ(bidi);return result;
},AGG:function(aIndex){if(((this.String===A.jV)||!this.B7)||this.Yg)return BF;if(
!this.HV)this.XB(this);if(aIndex<0)aIndex=0;var Bzv=(this.CH.charCodeAt(0)||0)-1;
var Mb=this.CH.charCodeAt(1)||0;var inx=1;var AiX=2;var Bf=0;var col=-1;var CD=true;
aIndex=aIndex+2;while((Bf<Bzv)&&((inx+Mb)<=aIndex)){inx=inx+Mb;Bf=Bf+1;AiX=AiX+1;
aIndex=aIndex+1;Mb=this.CH.charCodeAt(inx)||0;}if(aIndex>(inx+Mb))aIndex=inx+Mb;
if(!!this.Oe)aIndex=(inx+this.BxX(this.Oe,(inx+1)-AiX,(inx+Mb)-AiX,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var It=this.CH.charCodeAt(inx+1)||0;if(CD)col=col+
1;CD=(It!==0xFEFF)&&(It!==0x0A);}return[col,Bf];},AnJ:function(AoC){if(((this.String===
A.jV)||!this.B7)||this.Yg)return 0;if(!this.HV)this.XB(this);var Bf=AoC[1];var col=
AoC[0];var inx=1;var AiX=2;var J_=this.CH.charCodeAt(0)||0;var Mb=this.CH.charCodeAt(
1)||0;if(Bf>=J_){Bf=J_-1;col=this.CH.length;}if(Bf<0){Bf=0;col=0;}if(col<0)col=0;
while((Bf>0)&&(Mb>0)){inx=inx+Mb;Bf=Bf-1;AiX=AiX+1;Mb=this.CH.charCodeAt(inx)||0;
}var Xq=inx;var AKE=(inx-AiX)+1;var ApS=(AKE+Mb)-1;var AAC=false;while((col>=0)&&(
Mb>1)){var It=this.CH.charCodeAt(inx+1)||0;inx=inx+1;Mb=Mb-1;AAC=(It===0xFEFF)||(
It===0x0A);if(!AAC){col=col-1;Xq=inx;}}if((!AAC&&(col>=0))&&((this.CH.charCodeAt(
inx+1)||0)===0x00))AAC=true;if(AAC)Xq=Xq+1;Xq=Xq-AiX;if(!!this.Oe)Xq=AKE+this.BxY(
this.Oe,AKE,ApS,Xq-AKE);return Xq;},ATF:function(KY){var B;if((this.String===A.jV
)||!this.B7)return BF;if(!this.HV)this.XB(this);var AE=this.Da();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BF;var font=this.B7;var Bw=this.Kc;var J_=this.CH.charCodeAt(
0)||0;var leading=font.Leading;if(KY[1]<AE[1])KY=[KY[0],AE[1]];if(KY[1]>=AE[3])KY=[
KY[0],AE[3]-1];if(this.N4>0)leading=(this.N4-font.Ascent)-font.Descent;var AaD=(
font.Ascent+font.Descent)+leading;var Bf=((KY[1]-AE[1])/AaD)|0;var Nx=this.ACP(Bf
);var Mb=Nx.length;var O9=false;if(((Bw&0x80)===0x80)){if(this.AjV())Bw=(Bw&~0x80
)|0x4;else Bw=(Bw&~0x80)|0x1;}if(((Bw&0x40)===0x40)&&(Bf<(J_-1)))O9=true;if((O9&&(
Nx.indexOf(String.fromCharCode(0x20),0)<0))&&(Nx.indexOf(String.fromCharCode(0xA0
),0)<0))O9=false;if(O9){var inx=1;var ApR=Bf;while(ApR>0){inx=inx+(this.CH.charCodeAt(
inx)||0);ApR=ApR-1;}if(((this.CH.charCodeAt(inx+1)||0)===0x0A)||((this.CH.charCodeAt((
inx+(this.CH.charCodeAt(inx)||0))-1)||0)===0x0A))O9=false;}var Al2=0;var El=0;if(
O9)Al2=AE[2]-AE[0];else if(((Bw&0x4)===0x4))El=(AE[2]-AE[0])-font.Yl(Nx,0,Mb);else
if(((Bw&0x2)===0x2))El=(((AE[2]-AE[0])/2)|0)-((font.Yl(Nx,0,Mb)/2)|0);var col=font.
BiR(Nx,0,Mb,(KY[0]-AE[0])-El,Al2);if(col<0)col=0;return[col,Bf];},Ae7:function(AoC
){var B;if((this.String===A.jV)||!this.B7)return BF;if(!this.HV)this.XB(this);var
J_=this.CH.charCodeAt(0)||0;var font=this.B7;var Bw=this.Kc;var Bf=AoC[1];var col=
AoC[0];if(Bf>=J_){Bf=J_-1;col=this.CH.length;}if(Bf<0){Bf=0;col=0;}var Nx=this.ACP(
Bf);var Mb=Nx.length;var AE=this.Da();var O9=false;var leading=font.Leading;if(((
Bw&0x80)===0x80)){if(this.AjV())Bw=(Bw&~0x80)|0x4;else Bw=(Bw&~0x80)|0x1;}if(((Bw&
0x40)===0x40)&&(Bf<(J_-1)))O9=true;if((O9&&(Nx.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nx.indexOf(String.fromCharCode(0xA0),0)<0))O9=false;if(O9){var inx=1;var
ApR=Bf;while(ApR>0){inx=inx+(this.CH.charCodeAt(inx)||0);ApR=ApR-1;}if(((this.CH.
charCodeAt(inx+1)||0)===0x0A)||((this.CH.charCodeAt((inx+(this.CH.charCodeAt(inx
)||0))-1)||0)===0x0A))O9=false;}if(this.N4>0)leading=(this.N4-font.Ascent)-font.
Descent;var Df=(AE[1]+(Bf*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Al2=0;var El=AE[0];if(O9)Al2=AE[2]-AE[0];else if(((Bw&0x4)===0x4))El=AE[2]-font.
Yl(Nx,0,Mb);else if(((Bw&0x2)===0x2))El=(El+(((AE[2]-AE[0])/2)|0))-((font.Yl(Nx,
0,Mb)/2)|0);var pos=font.BiN(Nx,0,Mb,col,Al2);if(pos<0)pos=0;return[El+pos,Df];}
,AOG:function(Ad){var B;if((this.String===A.jV)||!this.B7)return EZ;if(!this.HV)
this.XB(this);var J_=this.CH.charCodeAt(0)||0;var font=this.B7;if((Ad<0)||((Ad>=
J_)&&(Ad>0)))return EZ;var Bw=this.Kc;var inx=1;var leading=font.Leading;var Bd=
this.M;var width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];width=width-(this.I4*2);if(((
Bw&0x80)===0x80)){if(this.AjV())Bw=(Bw&~0x80)|0x4;else Bw=(Bw&~0x80)|0x1;}if(this.
N4>0)leading=(this.N4-font.Ascent)-font.Descent;var Df=Ad*((font.Ascent+font.Descent
)+leading);var El=0;while(Ad>0){inx=inx+(this.CH.charCodeAt(inx)||0);Ad=Ad-1;}var
AAR=(this.CH.charCodeAt(inx)||0)-1;var BfO=font.Yl(this.CH,inx+1,AAR);var A3I=font.
A6P(this.CH,inx+1,AAR);var ApT=BfO;var AaD=font.Ascent+font.Descent;var AA5=(J_*((
font.Ascent+font.Descent)+leading))-leading;if(!J_)AA5=AaD;if((((this.CH.charCodeAt((
inx+AAR)+1)||0)===0x00)||((this.CH.charCodeAt(inx+AAR)||0)===0x0A))||((this.CH.charCodeAt(
inx+1)||0)===0x0A))Bw=Bw&~0x40;if(((Bw&0x40)===0x40)){var ApS=(inx+1)+AAR;var Ay3=
this.CH.indexOf(String.fromCharCode(0x20),inx+1);var Ay4=this.CH.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ay3>=0)&&(Ay3<ApS))||((Ay4>=0)&&(Ay4<ApS)))ApT=width;
}if((!!(Bw&0x110)&&!!(Bw&0x28))&&(AA5>height))Bw&=~0x110;if(!!(Bw&0x110))Bw&=~0x28;
if((((Bw&0x2)===0x2)&&!!(Bw&0x5))&&(ApT>width))Bw&=~0x2;if(((Bw&0x2)===0x2))Bw&=
~0x5;if(((Bw&0x4)===0x4))El=width-ApT;else if(((Bw&0x2)===0x2))El=((width/2)|0)-((
ApT/2)|0);if(((Bw&0x20)===0x20))Df=Df+(height-AA5);else if(((Bw&0x100)===0x100))
Df=((Df+((height/2)|0))-((AA5/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0);else
if(((Bw&0x10)===0x10))Df=(Df+((height/2)|0))-((AA5/2)|0);El=(El+A3I[0])+this.I4;
ApT=(ApT+(A3I[2]-A3I[0]))-BfO;var B5;{var Bfe=[Bd[0]+El,Bd[1]+Df];B5=[].concat(Bfe
,A.abf(Bfe,[ApT,AaD]));}return A.abh(B5,this.Bt);},ACP:function(Ad){if((this.String===
A.jV)||!this.B7)return A.jV;if(!this.HV)this.XB(this);var J_=this.CH.charCodeAt(
0)||0;var inx=1;if((!this.B7||(Ad<0))||(Ad>=J_))return A.jV;while(Ad>0){inx=inx+(
this.CH.charCodeAt(inx)||0);Ad=Ad-1;}var XC=inx;var Atz=inx+(this.CH.charCodeAt(
inx)||0);var It=0x00;do{XC=XC+1;It=this.CH.charCodeAt(XC)||0;}while(((It===0xFEFF
)||(It===0x0A))&&(XC<=Atz));do{Atz=Atz-1;It=this.CH.charCodeAt(Atz)||0;}while(((
It===0xFEFF)||(It===0x0A))&&(XC<=Atz));var Nx=A.abW(this.CH,XC,(Atz-XC)+1);var Api;
for(Api=Nx.indexOf(String.fromCharCode(0xFEFF),0);Api>=0;Api=Nx.indexOf(String.fromCharCode(
0xFEFF),Api+1)){var Xq=Api+1;while((Nx.charCodeAt(Xq)||0)===0xFEFF)Xq=Xq+1;Nx=A.
ab1(Nx,Api,Xq-Api);}return Nx;},Da:function(){var B;if((this.String===A.jV)||!this.
B7)return EZ;if(!this.HV)this.XB(this);if(this.CH===A.jV)return EZ;var leading=this.
B7.Leading;var AAP=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;if(this.N4>0
){leading=(this.N4-this.B7.Ascent)-this.B7.Descent;AAP=this.N4;}if(A.aaX(this.Al9
,BF))this.Al9=[this.B7.A6F(this.CH),this.Al9[1]];this.Al9=[this.Al9[0],((this.CH.
charCodeAt(0)||0)*AAP)-leading];var Bw=this.Kc;var Bd=this.M;var AtT=this.I4;var
width=Bd[2]-Bd[0];var height=Bd[3]-Bd[1];var De=[AtT,0,width-AtT,height];var B5=[
].concat(De.slice(0,2),A.abf(De.slice(0,2),this.Al9));if(((Bw&0x80)===0x80)){if(
this.AjV())Bw=(Bw&~0x80)|0x4;else Bw=(Bw&~0x80)|0x1;}if(((Bw&0x40)===0x40)){var Xr=
this.AcC;if(Xr<=0)Xr=width-(this.I4*2);if(Xr<0)Xr=0;if(Xr>(B5[2]-B5[0]))B5=A.abL(
B5,Xr);}if((!!(Bw&0x110)&&!!(Bw&0x28))&&((B5[3]-B5[1])>(De[3]-De[1])))Bw&=~0x110;
if(!!(Bw&0x110))Bw&=~0x28;if((((Bw&0x2)===0x2)&&!!(Bw&0x5))&&((B5[2]-B5[0])>(De[
2]-De[0])))Bw&=~0x2;if(((Bw&0x2)===0x2))Bw&=~0x5;if((B5[2]-B5[0])!==(De[2]-De[0]
)){if(((Bw&0x4)===0x4))B5=A.abM(B5,De[2]-(B5[2]-B5[0]));else if(((Bw&0x2)===0x2)
)B5=A.abM(B5,(De[0]+(((De[2]-De[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[3]-B5[
1])!==(De[3]-De[1])){if(((Bw&0x20)===0x20))B5=A.abO(B5,De[3]-(B5[3]-B5[1]));else
if(((Bw&0x100)===0x100))B5=A.abO(B5,((De[1]+(((De[3]-De[1])/2)|0))-(((B5[3]-B5[1
])/2)|0))+(((this.B7.Descent-this.B7.Ascent)/2)|0));else if(((Bw&0x10)===0x10))B5=
A.abO(B5,(De[1]+(((De[3]-De[1])/2)|0))-(((B5[3]-B5[1])/2)|0));}B5=A.abh(B5,Bd.slice(
0,2));return A.abh(B5,this.Bt);},_Init:function(aArg){A.Core.Eq._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.La();this.__proto__=A.Core.Eq;
A.Core.Eq._Done.call(this);},_Mark:function(D){var B;A.Core.Eq._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AuD={attrString:null,AttrSet:
null,String:A.jV,Kc:0x12,Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Da();Ci=Ci+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;C0.BhW(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ci*255)>>8,(Ci*255)>>8,(Ci*255)>>8,(Ci
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.O$],this);}A.Core.Eq.H.call(this,E);A.pe([this,this.AiL],this
);},AiL:function(G){},XB:function(G){var B;var ALj;ALj=(B=this.M)[2]-B[0];if(ALj<
0)ALj=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4W
,0);if(!!this.attrString)this.attrString.BnC(this.AttrSet,this.String,ALj,false);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);A.pe([this,this.AiL],this);
},O$:function(G){A.pe([this,this.XB],this);},BfH:function(G){var B;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.M);},A8:function(E){var B;E&=~0x140;if(E===this.
Kc)return;this.Kc=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);A.pe([
this,this.AiL],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.O$],this);},A9w:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BfH],this.AttrSet,0);A.z9([this,this.O$
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BfH],this.AttrSet,0);A.zV([this,this.O$],this.AttrSet,1);}A.pe([this,this.
O$],this);},Da:function(){var B;if((this.String===A.jV)||!this.AttrSet)return EZ;
if(!this.attrString)this.XB(this);if(!this.attrString)return EZ;var Bw=this.Kc;var
C4=this.attrString.BiS();var De=A.aaT(this.M,BF);var B5=[].concat(De.slice(0,2),
A.abf(De.slice(0,2),C4));if(!C4[0]||!C4[1])return EZ;if(((Bw&0x80)===0x80)){if(this.
attrString.AjV())Bw=(Bw&~0x80)|0x4;else Bw=(Bw&~0x80)|0x1;}if((B5[2]-B5[0])!==(De[
2]-De[0])){if(((Bw&0x4)===0x4))B5=A.abM(B5,De[2]-(B5[2]-B5[0]));else if(((Bw&0x2
)===0x2))B5=A.abM(B5,(De[0]+(((De[2]-De[0])/2)|0))-(((B5[2]-B5[0])/2)|0));}if((B5[
3]-B5[1])!==(De[3]-De[1])){if(((Bw&0x20)===0x20))B5=A.abO(B5,De[3]-(B5[3]-B5[1])
);else if(((Bw&0x10)===0x10))B5=A.abO(B5,(De[1]+(((De[3]-De[1])/2)|0))-(((B5[3]-
B5[1])/2)|0));}return B5;},_Init:function(aArg){A.Core.Eq._Init.call(this,aArg);
this.__proto__=C.AuD;this.U=0x3;},_Mark:function(D){var B;A.Core.Eq._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.An6={Aiw:
null,Fz:null,Aii:0,Aih:0,UY:A.wf,Cj:A.abi(4,3,0,null),AGC:A.wf,Tg:0,Apv:0,JQ:function(
E){if(A.aaX(E,this.Kr))return;A.Core.Zq.JQ.call(this,E);this.Cj.Set(3,0,E[0]);this.
Cj.Set(3,1,E[1]);this.Cj.Set(3,2,1);this.Tg=0x45;this.Fz=null;A.pe([this,this.Ai5
],this);},Kn:function(E){if(A.aaX(E,this.Mz))return;A.Core.Zq.Kn.call(this,E);this.
Cj.Set(2,0,E[0]);this.Cj.Set(2,1,E[1]);this.Cj.Set(2,2,1);this.Tg=0x45;this.Fz=null;
A.pe([this,this.Ai5],this);},DE:function(E){if(A.aaX(E,this.Ey))return;A.Core.Zq.
DE.call(this,E);this.Cj.Set(1,0,E[0]);this.Cj.Set(1,1,E[1]);this.Cj.Set(1,2,1);this.
Tg=0x45;this.Fz=null;A.pe([this,this.Ai5],this);},DR:function(E){if(A.aaX(E,this.
Ep))return;A.Core.Zq.DR.call(this,E);this.Cj.Set(0,0,E[0]);this.Cj.Set(0,1,E[1]);
this.Cj.Set(0,2,1);this.Tg=0x45;this.Fz=null;A.pe([this,this.Ai5],this);},A1b:function(
){return;},Ai5:function(G){var B;this.Aiw=null;if(this.Tg===0x00)return;if(this.
Tg===0x45){var K2=A._NewObject(A.Graphics.AxL,0);K2=K2.ANy(this.Cj.Get(0,0),this.
Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),this.Cj.Get(2,1),
this.Cj.Get(3,0),this.Cj.Get(3,1));if(!!K2){K2.ABP(0,0);this.Cj.Set(0,2,K2.UL*240
);K2.ABP(1,0);this.Cj.Set(1,2,K2.UL*240);K2.ABP(1,1);this.Cj.Set(2,2,K2.UL*240);
K2.ABP(0,1);this.Cj.Set(3,2,K2.UL*240);}this.A1b();}if((((this.Tg===0x4D)&&!!this.
Fz)&&!!this.UY[0])&&!!this.UY[1]){var Ai0=[].concat(BF,this.UY);var AiZ=this.AGC;
var AfU=Ai0[0]-AiZ[0];var Az=Ai0[2]-AiZ[0];var D6=Ai0[1]-AiZ[1];var Rr=Ai0[3]-AiZ[
1];this.Fz.Ae2(AfU,D6);this.Cj.Set(0,0,this.Fz.PX+this.Aih);this.Cj.Set(0,1,this.
Fz.PY+this.Aii);this.Cj.Set(0,2,this.Fz.UL);this.Fz.Ae2(Az,D6);this.Cj.Set(1,0,this.
Fz.PX+this.Aih);this.Cj.Set(1,1,this.Fz.PY+this.Aii);this.Cj.Set(1,2,this.Fz.UL);
this.Fz.Ae2(Az,Rr);this.Cj.Set(2,0,this.Fz.PX+this.Aih);this.Cj.Set(2,1,this.Fz.
PY+this.Aii);this.Cj.Set(2,2,this.Fz.UL);this.Fz.Ae2(AfU,Rr);this.Cj.Set(3,0,this.
Fz.PX+this.Aih);this.Cj.Set(3,1,this.Fz.PY+this.Aii);this.Cj.Set(3,2,this.Fz.UL);
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.Ep=[(this.
Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.Ey=[(this.Cj.Get(1,0)+0.5)|0,(
this.Cj.Get(1,1)+0.5)|0];this.Mz=[(this.Cj.Get(2,0)+0.5)|0,(this.Cj.Get(2,1)+0.5
)|0];this.Kr=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];this.A1b();}this.
Apv=this.Tg;this.Tg=0x00;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));},Bnb:function(E){if(A.aaX(E,this.AGC))return;this.AGC=E;if((this.Apv!==0x45)&&(
this.Tg===0x00)){this.Tg=this.Apv;A.pe([this,this.Ai5],this);}},Aq_:function(E_){
var B;if(!!!this.Aiw){this.Aiw=A._NewObject(A.Graphics.A7c,0);this.Aiw.ANy(this.
Cj.Get(0,0),this.Cj.Get(0,1),this.Cj.Get(1,0),this.Cj.Get(1,1),this.Cj.Get(2,0),
this.Cj.Get(2,1),this.Cj.Get(3,0),this.Cj.Get(3,1));}if(!this.Aiw.Ae2(E_))return BF;
var ApY=[].concat(BF,this.UY);var El=this.Aiw.PX*(ApY[2]-ApY[0]);var Df=this.Aiw.
PY*(ApY[3]-ApY[1]);return A.abf([El|0,Df|0],ApY.slice(0,2));},A$Q:function(BbL,L5
){var B;this.Aiw=null;if(!L5)throw new Error(I$);if(!this.Fz)this.Fz=A._NewObject(
A.Graphics.AxL,0);this.Fz.Bg5(L5);this.Aih=BbL[0];this.Aii=BbL[1];this.Apv=0x4D;
this.Tg=0x00;if(!this.UY[0]||!this.UY[1])return;var Ai0=[].concat(BF,this.UY);var
AiZ=this.AGC;var AfU=Ai0[0]-AiZ[0];var Az=Ai0[2]-AiZ[0];var D6=Ai0[1]-AiZ[1];var
Rr=Ai0[3]-AiZ[1];this.Fz.Ae2(AfU,D6);this.Cj.Set(0,0,this.Fz.PX+this.Aih);this.Cj.
Set(0,1,this.Fz.PY+this.Aii);this.Cj.Set(0,2,this.Fz.UL);this.Fz.Ae2(Az,D6);this.
Cj.Set(1,0,this.Fz.PX+this.Aih);this.Cj.Set(1,1,this.Fz.PY+this.Aii);this.Cj.Set(
1,2,this.Fz.UL);this.Fz.Ae2(Az,Rr);this.Cj.Set(2,0,this.Fz.PX+this.Aih);this.Cj.
Set(2,1,this.Fz.PY+this.Aii);this.Cj.Set(2,2,this.Fz.UL);this.Fz.Ae2(AfU,Rr);this.
Cj.Set(3,0,this.Fz.PX+this.Aih);this.Cj.Set(3,1,this.Fz.PY+this.Aii);this.Cj.Set(
3,2,this.Fz.UL);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping()
);this.Ep=[(this.Cj.Get(0,0)+0.5)|0,(this.Cj.Get(0,1)+0.5)|0];this.Ey=[(this.Cj.
Get(1,0)+0.5)|0,(this.Cj.Get(1,1)+0.5)|0];this.Mz=[(this.Cj.Get(2,0)+0.5)|0,(this.
Cj.Get(2,1)+0.5)|0];this.Kr=[(this.Cj.Get(3,0)+0.5)|0,(this.Cj.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.A1b();},_Init:
function(aArg){A.Core.Zq._Init.call(this,aArg);(this.Cj=[]).__proto__=C.An6.Cj;this.
__proto__=C.An6;this.U=0x3;},_Mark:function(D){var B;A.Core.Zq._Mark.call(this,D
);if((B=this.Aiw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fz)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AVk={Fn:null,bitmap:null
,O:null,G1:255,Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nr=aOffset[0];var Ns=aOffset[1];var AE=[].concat(BF,this.
UY);aBlend=aBlend&&((this.U&0x2)===0x2);Ci=Ci+1;var Bea;var Beb;var Bec;var Bed;
var BzF=this.G1;Bea=Beb=Bec=Bed=BzF;var All=255|(255<<8)|(255<<16)|((((Ci*Bea)>>
8)&0xFF)<<24);var Alm=255|(255<<8)|(255<<16)|((((Ci*Beb)>>8)&0xFF)<<24);var BxZ=
255|(255<<8)|(255<<16)|((((Ci*Bec)>>8)&0xFF)<<24);var Bx0=255|(255<<8)|(255<<16)|((((
Ci*Bed)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(EZ,aOffset));C0.AhI(aClip,this.bitmap
,0,this.Cj.Get(0,0)+Nr,this.Cj.Get(0,1)+Ns,this.Cj.Get(0,2),this.Cj.Get(1,0)+Nr,
this.Cj.Get(1,1)+Ns,this.Cj.Get(1,2),this.Cj.Get(2,0)+Nr,this.Cj.Get(2,1)+Ns,this.
Cj.Get(2,2),this.Cj.Get(3,0)+Nr,this.Cj.Get(3,1)+Ns,this.Cj.Get(3,2),AE,All,Alm,
BxZ,Bx0,aBlend,true);},GW:function(CM){if(!this.O||!this.Fn)return null;var BQ=(
A.Core.Ad3.isPrototypeOf(CM)?CM:null);var D1=(A.Core.Aqt.isPrototypeOf(CM)?CM:null
);if(!BQ&&!D1)return null;var Fp=BF;var B0=this.Fn.Ab;while(!!B0&&(B0!==this.O)){
Fp=A.abe(Fp,B0.M.slice(0,2));B0=B0.Ab;}var X=this.Fn;if(!!BQ&&!BQ.Down)this.Fn=null;
if(!!BQ){BQ.HY=A.abf(this.Aq_(BQ.HY),Fp);BQ.NN=A.abf(this.Aq_(BQ.NN),Fp);return X.
GW(BQ);}if(!!D1){var BzJ=A.abf(this.Aq_(A.abe(D1.HY,D1.DC)),Fp);D1.HY=A.abf(this.
Aq_(D1.HY),Fp);D1.NN=A.abf(this.Aq_(D1.NN),Fp);D1.DC=A.abe(D1.HY,BzJ);return X.GW(
D1);}return C.An6.GW.call(this,CM);},Yb:function(C$,BG,Oc,Aaa,AcU,AcT){var B;if(
!this.O||!((this.O.U&0x18)===0x18))return null;var pos=A.aaI(C$);pos=this.Aq_(pos
);var ApY=[].concat(BF,this.UY);if(!A.wa(ApY,pos))return null;var Jx=this.O.Yb(A.
abh(A.abh([0,0,C$[2]-C$[0],C$[3]-C$[1]],pos),this.O.M.slice(0,2)),BG,Oc,Aaa,null
,AcT);if(!!Jx)this.Fn=Jx.Ch;else this.Fn=null;if(!!this.Fn)return A._NewObject(A.
Core.AuM,0).Initialize(this,BF);return null;},RC:function(G){var B;var Bee=this.
UY;if(!!this.O)this.bitmap=this.O.Fw;else this.bitmap=null;if(!!this.bitmap)this.
UY=this.bitmap.FrameSize;else this.UY=BF;if(((A.aaX(Bee,this.UY)||((this.Apv===0x45
)&&(this.Tg===0x00)))&&!!this.Ab)&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if(((this.Apv!==0x45)&&(this.Tg===0x00))&&!A.aaX(Bee,this.UY)){this.Tg=this.Apv;
A.pe([this,this.Ai5],this);}},Do:function(E){var B;if(E===this.G1)return;this.G1=
E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());},Bmh:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ab))throw new Error(Io);if(!!this.O){A.
z9([this,this.RC],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.zV([this,this.RC
],E,0);this.bitmap=E.Fw;}this.RC(this);},Av$:function(){return this.G1;},_Init:function(
aArg){C.An6._Init.call(this,aArg);this.__proto__=C.AVk;},_Mark:function(D){var B;
C.An6._Mark.call(this,D);if((B=this.Fn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Aec={Hu:null,AQ:0xFFFFFFFF,DC:A.wf
,AOl:false,La:function(){this.A1v();},Kg:function(C0,aClip,aOffset,Ci,aBlend){if(
!this.Hu)return;var Dy;var DK;var DG;var DJ;var B4=this.AQ;Ci=Ci+1;Dy=DK=DG=DJ=B4;
if(Ci<256){Dy=(Dy&0x00FFFFFF)|((((Ci*((Dy>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ci*((DK>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Ci*((DG>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ci*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}C0.
Aec(aClip,this.Hu,A.abh(this.M,aOffset),this.AOl,this.DC,Dy,DK,DJ,DG,true,true,0
);},A1v:function(){return;},Ai6:function(G){var B;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hu)this.Ab.Bg(this.M);},Anx:function(E){
var B;if(A.aaX(E,this.DC))return;this.DC=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hu)this.Ab.Bg(this.M);},Bmc:function(E){var B;if(E===this.AOl)return;this.
AOl=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hu)this.Ab.Bg(this.M);},Zk:function(
E){var B;if(E===this.Hu)return;if(!!this.Hu)A.z9([this,this.Ai6],this.Hu,0);this.
Hu=E;if(!!this.Hu)A.zV([this,this.Ai6],this.Hu,0);if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.M);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.Cy(0x0,0x1
);},_Init:function(aArg){A.Core.Eq._Init.call(this,aArg);this.__proto__=C.Aec;},
_Done:function(){this.La();this.__proto__=A.Core.Eq;A.Core.Eq._Done.call(this);}
,_Mark:function(D){var B;A.Core.Eq._Mark.call(this,D);if((B=this.Hu)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hh={Hu:null,AQ:0xFFFFFFFF
,DC:A.wf,Width:1,La:function(){this.A1v();},Kg:function(C0,aClip,aOffset,Ci,aBlend
){if(!this.Hu)return;var Dy;var DK;var DG;var DJ;var B4=this.AQ;Ci=Ci+1;Dy=DK=DG=
DJ=B4;if(Ci<256){Dy=(Dy&0x00FFFFFF)|((((Ci*((Dy>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&
0x00FFFFFF)|((((Ci*((DK>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Ci*((DG>>
24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ci*((DJ>>24)&0xFF))>>8)&0xFF)<<
24);}C0.Hh(aClip,this.Hu,A.abh(this.M,aOffset),false,this.DC,this.Width,0,0,0,3,
Dy,DK,DJ,DG,true,true);},A1v:function(){return;},Ai6:function(G){var B;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&!!this.Hu)this.Ab.Bg(this.
M);},Anx:function(E){var B;if(A.aaX(E,this.DC))return;this.DC=E;if((!!this.Ab&&((
this.U&0x1)===0x1))&&!!this.Hu)this.Ab.Bg(this.M);},Ne:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.U&0x1)===0x1))&&
!!this.Hu)this.Ab.Bg(this.M);},Zk:function(E){var B;if(E===this.Hu)return;if(!!this.
Hu)A.z9([this,this.Ai6],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zV([this,this.Ai6],this.
Hu,0);if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.M);},Z:function(E){if(E
)this.Cy(0x1,0x0);else this.Cy(0x0,0x1);},_Init:function(aArg){A.Core.Eq._Init.call(
this,aArg);this.__proto__=C.Hh;},_Done:function(){this.La();this.__proto__=A.Core.
Eq;A.Core.Eq._Done.call(this);},_Mark:function(D){var B;A.Core.Eq._Mark.call(this
,D);if((B=this.Hu)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BDS={A4F:0x1,A4E:0x2,A4G:0x4,A4J:0x8,A4I:0x10,A4H:0x20,BE8:0x40,BE9:0x80,BFi:
0x100};C.BFm={A4F:0x1,A4E:0x2,A4G:0x4,A4J:0x8,A4I:0x10,A4H:0x20,BCl:0x40,BCk:0x80
,BCq:0x100};C.BEv={Normal:0,BE3:1,BE1:2,BE2:3};
C._Init=function(){C.DQ.__proto__=A.Core.Aj8;C.AL.__proto__=A.Core.Eq;C.Cf.__proto__=
A.Core.Eq;C.NL.__proto__=A.Core.Eq;C.Am.__proto__=A.Core.Eq;C.Text.__proto__=A.Core.
Eq;C.AuD.__proto__=A.Core.Eq;C.An6.__proto__=A.Core.Zq;C.AVk.__proto__=C.An6;C.Aec.
__proto__=A.Core.Eq;C.Hh.__proto__=A.Core.Eq;};C._ReInit=function(){};C.DF=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */