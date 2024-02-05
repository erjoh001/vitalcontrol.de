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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acg)throw new Error("The unit file 'Views.js' included twice!");index.
acg=(function(){var A=index;var C={};
var B9=[1,1];var BC=[0,0];var EU=[0,0,0,0];var Hd="\uFEFF";var I7="No matrix to perform 3D transformation";
var II="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DQ={Ku:null,Aku:1,Akt:1,AP:0xFFFFFFFF,J5:function(CU,aClip,aOffset,Cb,aBlend){var
B;var AfE=this.Akt;var AfF=this.Aku;var AcS=A.abf(this.Ei,aOffset);var AcT=A.abf(
this.Es,aOffset);var AkO;var AkP;var BX=this.AP;if(A.aaX(AcS,AcT))return;aBlend=
aBlend&&((this.T&0x2)===0x2);Cb=Cb+1;AkO=AkP=BX;if(Cb<256){AkO=(AkO&0x00FFFFFF)|((((
Cb*((AkO>>24)&0xFF))>>8)&0xFF)<<24);AkP=(AkP&0x00FFFFFF)|((((Cb*((AkP>>24)&0xFF)
)>>8)&0xFF)<<24);}if((AfE===1)&&(AfF===1))CU.At1(aClip,AcS,AcT,AkO,AkP,aBlend);else
CU.Be_(aClip,AcS,AcT,AfE,AfF,AkO,AkP,aBlend);},GetExtent:function(){var AfE=this.
Akt;var AfF=this.Aku;var AcS=this.Ei;var AcT=this.Es;if(((AfE===1)&&(AfF===1))||
A.aaX(AcS,AcT))return A.Core.AjB.GetExtent.call(this);var AhU=AfE/2;var AhV=AfF/
2;var Aox=AcS[0];var Aoy=AcS[1];var Aoz=AcT[0];var AoA=AcT[1];var JS=Aoz-Aox;var
JT=AoA-Aoy;var IO=Math.sqrt((JS*JS)+(JT*JT));JS=JS/IO;JT=JT/IO;var A$O=Aox+(JT*AhU
);var A$P=Aoy-(JS*AhU);var AHO=Aoz+(JT*AhV);var AHP=AoA-(JS*AhV);var AHQ=Aoz-(JT
*AhV);var AHR=AoA+(JS*AhV);var AHS=Aox-(JT*AhU);var AHT=Aoy+(JS*AhU);var left=A$O;
var right=A$O;var top=A$P;var bottom=A$P;if(AHO<left)left=AHO;if(AHQ<left)left=AHQ;
if(AHS<left)left=AHS;if(AHO>right)right=AHO;if(AHQ>right)right=AHQ;if(AHS>right)
right=AHS;if(AHP<top)top=AHP;if(AHR<top)top=AHR;if(AHT<top)top=AHT;if(AHP>bottom
)bottom=AHP;if(AHR>bottom)bottom=AHR;if(AHT>bottom)bottom=AHT;var Aw=[left|0,top|
0,right|0,bottom|0];Aw=[].concat(Aw.slice(0,2),A.abf(Aw.slice(2,4),B9));return Aw;
},Rk:function(H){var B;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));},A74:function(E){var B;if(E<1)E=1;if(E===this.Aku)return;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Aku=E;if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Bd(this.GetClipping());if(((E!==1)||(this.Akt!==1))&&!this.Ku){
this.Ku=A.aaL(A.aci.ArV);if(this.Ku.Ou)A.zV([this,this.Rk],this.Ku,0);}if(((E===
1)&&(this.Akt===1))&&!!this.Ku){if(this.Ku.Ou)A.z9([this,this.Rk],this.Ku,0);this.
Ku=null;}},A73:function(E){var B;if(E<1)E=1;if(E===this.Akt)return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Akt=E;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if(((E!==1)||(this.Aku!==1))&&!this.
Ku){this.Ku=A.aaL(A.aci.ArV);if(this.Ku.Ou)A.zV([this,this.Rk],this.Ku,0);}if(((
E===1)&&(this.Aku===1))&&!!this.Ku){if(this.Ku.Ou)A.z9([this,this.Rk],this.Ku,0);
this.Ku=null;}},NJ:function(E){var B;if(E<1)E=1;if((E===this.Akt)&&(E===this.Aku
))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.
Akt=E;this.Aku=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((E!==1)&&!this.Ku){this.Ku=A.aaL(A.aci.ArV);if(this.Ku.Ou)A.zV([this,this.
Rk],this.Ku,0);}if((E===1)&&!!this.Ku){if(this.Ku.Ou)A.z9([this,this.Rk],this.Ku
,0);this.Ku=null;}},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());},Aj:function(E){if(E)this.
Cq(0x400,0x0);else this.Cq(0x0,0x400);},Fc:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(0x0,0x1);},_Init:function(
aArg){A.Core.AjB._Init.call(this,aArg);this.__proto__=C.DQ;},_Mark:function(D){var
B;A.Core.AjB._Mark.call(this,D);if((B=this.Ku)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AI={ALp:0xFFFFFFFF,ALq:0xFFFFFFFF,ALu:0xFFFFFFFF
,ALt:0xFFFFFFFF,AP:0xFFFFFFFF,J5:function(CU,aClip,aOffset,Cb,aBlend){var B;var Dq=
this.ALt;var DG=this.ALu;var DC=this.ALp;var DF=this.ALq;var BX=this.AP;aBlend=aBlend&&((
this.T&0x2)===0x2);Cb=Cb+1;if((((Dq===DG)&&(DC===DF))&&(Dq===DC))&&(Dq===0xFFFFFFFF
))Dq=DG=DC=DF=BX;else if(BX!==0xFFFFFFFF){Dq=(Dq&0x00FFFFFF)|((((((Dq>>24)&0xFF)
*(((BX>>24)&0xFF)+1))>>8)&0xFF)<<24);Dq=(Dq&0xFFFFFF00)|((((Dq&0xFF)*((BX&0xFF)+
1))>>8)&0xFF);Dq=(Dq&0xFFFF00FF)|((((((Dq>>8)&0xFF)*(((BX>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dq=(Dq&0xFF00FFFF)|((((((Dq>>16)&0xFF)*(((BX>>16)&0xFF)+1))>>8)&0xFF)<<16);
DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*(((BX>>24)&0xFF)+1))>>8)&0xFF)<<24);DG=(DG&
0xFFFFFF00)|((((DG&0xFF)*((BX&0xFF)+1))>>8)&0xFF);DG=(DG&0xFFFF00FF)|((((((DG>>8
)&0xFF)*(((BX>>8)&0xFF)+1))>>8)&0xFF)<<8);DG=(DG&0xFF00FFFF)|((((((DG>>16)&0xFF)
*(((BX>>16)&0xFF)+1))>>8)&0xFF)<<16);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*(((BX>>
24)&0xFF)+1))>>8)&0xFF)<<24);DC=(DC&0xFFFFFF00)|((((DC&0xFF)*((BX&0xFF)+1))>>8)&
0xFF);DC=(DC&0xFFFF00FF)|((((((DC>>8)&0xFF)*(((BX>>8)&0xFF)+1))>>8)&0xFF)<<8);DC=(
DC&0xFF00FFFF)|((((((DC>>16)&0xFF)*(((BX>>16)&0xFF)+1))>>8)&0xFF)<<16);DF=(DF&0x00FFFFFF
)|((((((DF>>24)&0xFF)*(((BX>>24)&0xFF)+1))>>8)&0xFF)<<24);DF=(DF&0xFFFFFF00)|((((
DF&0xFF)*((BX&0xFF)+1))>>8)&0xFF);DF=(DF&0xFFFF00FF)|((((((DF>>8)&0xFF)*(((BX>>8
)&0xFF)+1))>>8)&0xFF)<<8);DF=(DF&0xFF00FFFF)|((((((DF>>16)&0xFF)*(((BX>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Cb<256){Dq=(Dq&0x00FFFFFF)|((((Cb*((Dq>>24)&0xFF))>>8)&
0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cb*((DG>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF
)|((((Cb*((DC>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Cb*((DF>>24)&0xFF
))>>8)&0xFF)<<24);}CU.Aue(aClip,A.abh(this.M,aOffset),Dq,DG,DF,DC,aBlend);},Avk:
function(E){var B;if(E===this.ALp)return;this.ALp=E;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Avl:function(E){var B;if(E===this.ALq)return;this.ALq=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Avo:function(E){var B;
if(E===this.ALu)return;this.ALu=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.M);},Avn:function(E){var B;if(E===this.ALt)return;this.ALt=E;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AP)return;
this.AP=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Fc:function(){
var B;return((this.T&0x1)===0x1);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.
Cq(0x0,0x1);},_Init:function(aArg){A.Core.Ej._Init.call(this,aArg);this.__proto__=
C.AI;},_className:"Views::Rectangle"};C.Cy={Width:1,AP:0xFFFFFFFF,J5:function(CU
,aClip,aOffset,Cb,aBlend){var B;var Dq;var DG;var DC;var DF;var BX=this.AP;aBlend=
aBlend&&((this.T&0x2)===0x2);Cb=Cb+1;Dq=DG=DC=DF=BX;if(Cb<256){Dq=(Dq&0x00FFFFFF
)|((((Cb*((Dq>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cb*((DG>>24)&0xFF
))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cb*((DC>>24)&0xFF))>>8)&0xFF)<<24);DF=(
DF&0x00FFFFFF)|((((Cb*((DF>>24)&0xFF))>>8)&0xFF)<<24);}CU.Be8(aClip,A.abh(this.M
,aOffset),this.Width,Dq,DG,DF,DC,aBlend);},NJ:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.
M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(
0x0,0x1);},_Init:function(aArg){A.Core.Ej._Init.call(this,aArg);this.__proto__=C.
Cy;},_className:"Views::Border"};C.NA={timer:null,Al:null,Mx:-1,AP:0xFFFFFFFF,At2:
0x1F,Tp:0,Dl:0,AmE:A.wf,U1:false,J5:function(CU,aClip,aOffset,Cb,aBlend){var B;var
Ne=this.Tp;if(this.Mx>=0)Ne=this.Mx;if(!this.Al||(Ne>=this.Al.NoOfFrames))return;
this.Al.Update();var Dq;var DG;var DF;var DC;var BX=this.AP;var JZ=(((Cb+1)*255)>>
8)+1;var N4=this.At2;var Aw=A.abh(this.M,aOffset);var AJc=A.abe([Aw[2]-Aw[0],Aw[
3]-Aw[1]],this.AmE);aBlend=aBlend&&((this.T&0x2)===0x2);Dq=DG=DC=DF=BX;if(JZ<256
){Dq=(Dq&0x00FFFFFF)|((((((Dq>>24)&0xFF)*JZ)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((
DG>>24)&0xFF)*JZ)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*JZ)>>8)&
0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*JZ)>>8)&0xFF)<<24);}if(((this.
AmE[0]>0)&&(AJc[0]>0))&&!((N4&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AJc[
0];if(((N4&0x1)===0x1)){if(aClip[2]>Aw[2])aClip=A.abN(aClip,Aw[2]);if(d>0)Aw=A.abN(
Aw,Aw[2]+d);N4=N4|0x4;}else if(((N4&0x4)===0x4)){if(aClip[0]<Aw[0])aClip=[].concat(
Aw[0],aClip.slice(1,4));if(d>0)Aw=[].concat(Aw[0]-d,Aw.slice(1,4));N4=N4|0x1;}else{
if(aClip[0]<Aw[0])aClip=[].concat(Aw[0],aClip.slice(1,4));if(aClip[2]>Aw[2])aClip=
A.abN(aClip,Aw[2]);if(d>0){Aw=[].concat(Aw[0]-((d/2)|0),Aw.slice(1,4));Aw=A.abN(
Aw,(Aw[2]+d)-((d/2)|0));}N4=N4|0x5;}}if(((this.AmE[1]>0)&&(AJc[1]>0))&&!((N4&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AJc[1];if(((N4&0x2)===0x2)){if(aClip[
3]>Aw[3])aClip=[].concat(aClip.slice(0,3),Aw[3]);if(d>0)Aw=[].concat(Aw.slice(0,
3),Aw[3]+d);N4=N4|0x8;}else if(((N4&0x8)===0x8)){if(aClip[1]<Aw[1])aClip=A.abP(aClip
,Aw[1]);if(d>0)Aw=A.abP(Aw,Aw[1]-d);N4=N4|0x2;}else{if(aClip[1]<Aw[1])aClip=A.abP(
aClip,Aw[1]);if(aClip[3]>Aw[3])aClip=[].concat(aClip.slice(0,3),Aw[3]);if(d>0){Aw=
A.abP(Aw,Aw[1]-((d/2)|0));Aw=[].concat(Aw.slice(0,3),(Aw[3]+d)-((d/2)|0));}N4=N4|
0xA;}}CU.Be7(aClip,this.Al,Ne,Aw,N4,Dq,DG,DF,DC,aBlend);},Rk:function(H){var B;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L5:function(H){var B;var Ne=
this.Mx;var SZ=0;if(!!this.Al)SZ=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.Mx<0))&&(SZ>0))this.Dl=this.timer.Bt-(this.Tp*this.Al.FrameDelay);if(
!!this.timer&&(SZ>0)){var As=(this.timer.Bt-this.Dl)|0;Ne=(As/this.Al.FrameDelay
)|0;if(As>=SZ){Ne=Ne%this.Al.NoOfFrames;this.Dl=this.timer.Bt-(As%SZ);}}if(((Ne!==
this.Mx)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);this.Mx=Ne;if(!SZ&&
!!this.timer){A.z9([this,this.L5],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AP)return;this.AP=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.
Bd(this.M);},YO:function(E){var B;if(this.U1===E)return;this.U1=E;this.Mx=-1;if(
!E&&!!this.timer){A.z9([this,this.L5],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.AdA);A.zV([this,this.L5],this.timer,0);A.pe([this,this.
L5],this);}if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},A7h:function(
E){var B;if(E===this.At2)return;this.At2=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.M);},Cr:function(E){var B;if(E<0)E=0;if((E===this.Tp)&&(this.Mx===-1)
)return;this.Tp=E;if(!this.timer)this.Mx=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
Ou)A.z9([this,this.Rk],this.Al,0);this.Al=E;this.Mx=-1;if(!!E&&E.Ou)A.zV([this,this.
Rk],E,0);if(this.U1){this.YO(false);this.YO(true);}if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(0x0,0x1
);},A7x:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
AmE))return;this.AmE=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!((this.At2&0xF)===
0xF))this.Ab.Bd(this.M);},_Init:function(aArg){A.Core.Ej._Init.call(this,aArg);this.
__proto__=C.NA;},_Mark:function(D){var B;A.Core.Ej._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Am={timer:null,Al:null,Dl:0,Mx:0,AP:0xFFFFFFFF
,J1:0x12,Tp:0,GS:255,U1:false,Aaj:false,J5:function(CU,aClip,aOffset,Cb,aBlend){
var B;var Ne=this.Tp;if(this.Mx>=0)Ne=this.Mx;if(!this.Al||(Ne>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.C_();var CY=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var Dq;var DG;var DF;var DC;var BX=this.AP;var JZ=(((
Cb+1)*this.GS)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);Dq=DG=DC=DF=BX;if(JZ<256
){Dq=(Dq&0x00FFFFFF)|((((((Dq>>24)&0xFF)*JZ)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((
DG>>24)&0xFF)*JZ)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*JZ)>>8)&
0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*JZ)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],CY))CU.A3q(aClip,this.Al,Ne,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),Dq,DG,DF,DC,aBlend);else CU.Blh(aClip,this.Al,Ne
,A.abh(AE,aOffset),[].concat(BC,CY),Dq,DG,DF,DC,aBlend,true);},Rk:function(H){var
B;if(((this.Aaj&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.G(this.C_());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L5:function(
H){var B;var Ne=this.Mx;var SZ=0;if(!!this.Al)SZ=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.Mx<0))&&(SZ>0))this.Dl=this.timer.Bt-(this.Tp*this.Al.FrameDelay
);if(!!this.timer&&(SZ>0)){var As=(this.timer.Bt-this.Dl)|0;Ne=(As/this.Al.FrameDelay
)|0;if(As>=SZ){Ne=Ne%this.Al.NoOfFrames;this.Dl=this.timer.Bt-(As%SZ);}}if(((Ne!==
this.Mx)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);this.Mx=Ne;if(!SZ&&
!!this.timer){A.z9([this,this.L5],this.timer,0);this.timer=null;}},IZ:function(E
){if(E===this.Aaj)return;this.Aaj=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.G(this.C_());},L:function(E){var B;if(E===this.
AP)return;this.AP=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},YO:function(
E){var B;if(this.U1===E)return;this.U1=E;this.Mx=-1;if(!E&&!!this.timer){A.z9([this
,this.L5],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
AdA);A.zV([this,this.L5],this.timer,0);A.pe([this,this.L5],this);}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},A2:function(E){var B;if(E===this.J1)return;
this.J1=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Cr:function(E){
var B;if(E<0)E=0;if((E===this.Tp)&&(this.Mx===-1))return;this.Tp=E;if(!this.timer
)this.Mx=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.Ou)A.z9([this,this.Rk],this.
Al,0);this.Al=E;this.Mx=-1;if(!!E&&E.Ou)A.zV([this,this.Rk],E,0);if(this.U1){this.
YO(false);this.YO(true);}if(((this.Aaj&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.G(this.C_());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},
Dz:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GS)return;this.GS=E;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Aj:function(E){if(E)this.Cq(
0x400,0x0);else this.Cq(0x0,0x400);},Fc:function(){var B;return((this.T&0x1)===0x1
);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(0x0,0x1);},C_:function(){var
B;if(!this.Al)return EU;var Br=this.J1;var CY=this.Al.FrameSize;var A9=this.M;var
width=A9[2]-A9[0];var height=A9[3]-A9[1];if(!CY[0]||!CY[1])return EU;var C8=[0,0
,width,height];var BY=C8;if(((Br&0x40)===0x40)){var A1w=((((C8[2]-C8[0])<<16)+((
CY[0]/2)|0))/CY[0])|0;var AzE=((((C8[3]-C8[1])<<16)+((CY[1]/2)|0))/CY[1])|0;var Aij=
A1w;if(AzE>Aij)Aij=AzE;BY=A.abL(BY,((CY[0]*Aij)+32768)>>16);BY=A.abI(BY,((CY[1]*
Aij)+32768)>>16);}else if(((Br&0x80)===0x80)){var A1w=((((C8[2]-C8[0])<<16)+((CY[
0]/2)|0))/CY[0])|0;var AzE=((((C8[3]-C8[1])<<16)+((CY[1]/2)|0))/CY[1])|0;var Aij=
A1w;if(AzE<Aij)Aij=AzE;BY=A.abL(BY,((CY[0]*Aij)+32768)>>16);BY=A.abI(BY,((CY[1]*
Aij)+32768)>>16);}else if(!((Br&0x100)===0x100))BY=A.abK(BY,CY);if((BY[2]-BY[0])
!==(C8[2]-C8[0])){if(((Br&0x4)===0x4))BY=A.abM(BY,C8[2]-(BY[2]-BY[0]));else if(((
Br&0x2)===0x2))BY=A.abM(BY,(C8[0]+(((C8[2]-C8[0])/2)|0))-(((BY[2]-BY[0])/2)|0));
}if((BY[3]-BY[1])!==(C8[3]-C8[1])){if(((Br&0x20)===0x20))BY=A.abO(BY,C8[3]-(BY[3
]-BY[1]));else if(((Br&0x10)===0x10))BY=A.abO(BY,(C8[1]+(((C8[3]-C8[1])/2)|0))-(((
BY[3]-BY[1])/2)|0));}BY=A.abh(BY,A9.slice(0,2));return BY;},Bhw:function(){return this.
AP;},AQr:function(){return this.Tp;},_Init:function(aArg){A.Core.Ej._Init.call(this
,aArg);this.__proto__=C.Am;},_Mark:function(D){var B;A.Core.Ej._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B3:null,Eh:null,CD:
A.jV,String:A.jV,N1:null,AlA:A.wf,I0:0,Sk:0,Ab6:0,Bp:A.wf,J1:0x12,AP:0xFFFFFFFF,
AeR:false,Aaj:false,XR:false,AMa:false,HP:false,K2:function(){if(!!this.N1){this.
AZJ(this.N1);this.N1=null;}},J5:function(CU,aClip,aOffset,Cb,aBlend){var B;if((this.
CD===A.jV)||!this.B3)return;var Br=this.J1;var font=this.B3;var C8=A.abh(this.M,
aOffset);var Dq;var DG;var DF;var DC;var col=this.AP;var JZ=(((Cb+1)*255)>>8)+1;
var JY=this.CD.charCodeAt(0)||0;var AE=A.abh(this.C_(),aOffset);var Bo=[C8[0]-AE[
0],(C8[1]-AE[1])-font.Ascent];if(JY<1)return;Dq=DG=DC=DF=col;if(JZ<256){Dq=(Dq&0x00FFFFFF
)|((((((Dq>>24)&0xFF)*JZ)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*
JZ)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*JZ)>>8)&0xFF)<<24);DC=(
DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*JZ)>>8)&0xFF)<<24);}if(((Br&0x80)===0x80)){if(
this.Ajp())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((JY===1)&&!((Br&0x40)===
0x40)){CU.A3U(aClip,font,this.CD,2,(this.CD.charCodeAt(1)||0)-1,C8,Bo,0,0,Dq,DG,
DF,DC,true);return;}var leading=font.Leading;if(this.Sk>0)leading=(this.Sk-font.
Ascent)-font.Descent;var Z5=(font.Ascent+font.Descent)+leading;var BuM=aClip[1]-
AE[1];var BuN=aClip[3]-AE[1];var AYX=AE[2]-AE[0];var C9=0;var P=1;var BX=this.CD.
charCodeAt(1)||0;while(((C9+Z5)<BuM)&&(BX>0)){P=P+BX;C9=C9+Z5;BX=this.CD.charCodeAt(
P)||0;}while((C9<BuN)&&(BX>0)){var L1=A.abe(Bo,[0,C9]);var Alu=0;var OR=false;if(((((
Br&0x40)===0x40)&&((this.CD.charCodeAt((P+BX)-1)||0)!==0x0A))&&((this.CD.charCodeAt(
P+1)||0)!==0x0A))&&((this.CD.charCodeAt(P+BX)||0)!==0x00))OR=true;if(OR&&!!(Br&0x6
)){var Apd=P+BX;var AxR=this.CD.indexOf(String.fromCharCode(0x20),P+1);var AxS=this.
CD.indexOf(String.fromCharCode(0xA0),P+1);if(((AxR<0)||(AxR>=Apd))&&((AxS<0)||(AxS>=
Apd)))OR=false;}if(OR)Alu=AYX;else if(((Br&0x4)===0x4))L1=[(L1[0]-AYX)+font.XX(this.
CD,P+1,BX-1),L1[1]];else if(((Br&0x2)===0x2))L1=[(L1[0]-((AYX/2)|0))+((font.XX(this.
CD,P+1,BX-1)/2)|0),L1[1]];CU.A3U(aClip,font,this.CD,P+1,BX-1,C8,L1,Alu,0,Dq,DG,DF
,DC,true);P=P+BX;C9=C9+Z5;BX=this.CD.charCodeAt(P)||0;}},G:function(E){var B;if(
A.aaY(E,this.M))return;var BcV;BcV=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BcV&&
!this.Ab6)&&this.AeR)&&this.HP)&&!((this.T&0x2000)===0x2000)){this.CD=A.jV;this.
HP=false;A.pe([this,this.OU],this);}if(((this.XR&&this.HP)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.T&0x2000)===0x2000)){this.CD=
A.jV;this.HP=false;A.pe([this,this.OU],this);}A.Core.Ej.G.call(this,E);A.pe([this
,this.Aic],this);},BuE:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BuD:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},AZJ:function(aBidi){if(!aBidi)return;A.rB(aBidi);},BuZ:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},Aic:function(H){A.pe(this.Eh
,this);},OU:function(H){A.pe([this,this.Xc],this);},Xc:function(H){var B;if(this.
HP)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var W5=-1;var
font=this.B3;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.AeR){
if(this.Ab6>0)W5=this.Ab6;else if(!this.Aaj)W5=width-(this.I0*2);else W5=width;if(
W5<0)W5=1;}if(!!this.N1){this.AZJ(this.N1);this.N1=null;}this.HP=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AMa)this.N1=this.BuZ(length
);this.CD=font.BkK(this.String,0,W5,length,this.N1);if(!!this.N1&&!this.Bgl()){this.
AZJ(this.N1);this.N1=null;}}else this.CD=A.jV;this.AlA=BC;if(((this.XR&&(this.CD
!==A.jV))&&!this.Aaj)&&!!font){var Br=this.J1;var leading=font.Leading;var Ip=this.
CD;var AJa=this.Ajp();if(((Br&0x80)===0x80)){if(AJa)Br=(Br&~0x80)|0x4;else Br=(Br&
~0x80)|0x1;}if(this.Sk>0)leading=(this.Sk-font.Ascent)-font.Descent;var Azz=(font.
Ascent+font.Descent)+leading;var JY=Ip.charCodeAt(0)||0;var Ala=((height+leading
)/Azz)|0;var AZa=false;var AHW=false;if(Ala<=0)Ala=1;if(JY>Ala){var A_=0;var AzA=
0;var AI_=JY-1;var KQ;var Nf=Ip.length;var tmp=A.jV;if(!!(Br&0x110)&&!!(Br&0x28)
)Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;if(((Br&0x20)===0x20))AzA=JY-Ala;else if(((
Br&0x10)===0x10)||((Br&0x100)===0x100)){AzA=((JY-Ala)/2)|0;AI_=(AzA+Ala)-1;}else
AI_=Ala-1;AZa=AzA>0;AHW=AI_<(JY-1);for(KQ=1;A_<AzA;A_=A_+1)KQ=KQ+(Ip.charCodeAt(
KQ)||0);if(AHW)for(Nf=KQ;A_<AI_;A_=A_+1)Nf=Nf+(Ip.charCodeAt(Nf)||0);if(AZa){var
IO=Ip.charCodeAt(KQ)||0;tmp=(Hd+A.abW(Ip,KQ,IO))+Hd;tmp=A.abQ(tmp,0,(IO+2)&0xFFFF
);KQ=KQ+IO;if((tmp.charCodeAt(IO)||0)===0x0A){tmp=A.abQ(tmp,IO,0xFEFF);tmp=A.abQ(
tmp,IO+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Ip,KQ,Nf-KQ);if(AHW&&(
Nf>=KQ)){var IO=Ip.charCodeAt(Nf)||0;var Qe=(Hd+A.abW(Ip,Nf,IO))+Hd;Qe=A.abQ(Qe,
0,(IO+2)&0xFFFF);Qe=A.abQ(Qe,1,0xFEFF);if((Qe.charCodeAt(IO)||0)===0x0A){Qe=A.abQ(
Qe,IO,0xFEFF);Qe=A.abQ(Qe,IO+1,0x0A);}if((Qe.charCodeAt(2)||0)===0x0A){Qe=A.abQ(
Qe,2,0xFEFF);Qe=A.abQ(Qe,1,0x0A);}else Qe=A.abQ(Qe,1,0xFEFF);tmp=tmp+Qe;}Ip=String.
fromCharCode(Ala&0xFFFF)+tmp;}var A_=0;var inx=1;var AIK=width-(this.I0*2);if(this.
AeR&&(this.Ab6>0))AIK=this.Ab6;JY=Ip.charCodeAt(0)||0;for(;A_<JY;A_=A_+1){var Als=
AZa&&!A_;var Alt=AHW&&(A_===(JY-1));var WU=false;var WV=false;var Atb=AJa;if((AJa&&
Als)&&!Alt){Als=false;Alt=true;}else if((AJa&&Alt)&&!Als){Alt=false;Als=true;}var
Xd=inx+1;var IO=Ip.charCodeAt(inx)||0;var KQ=Xd;var Nf=(Xd+IO)-2;var AZ1=-1;var AZ2=-
1;if(!this.AeR&&(font.XX(Ip,Xd,IO-1)>AIK)){var An9=Br;if(((An9&0x2)===0x2)&&!!(An9&
0x5))An9&=~0x2;if(((An9&0x2)===0x2))An9&=~0x5;if(((An9&0x4)===0x4))WU=true;else if(((
An9&0x2)===0x2)){WU=true;WV=true;}else WV=true;}if((Ip.charCodeAt(KQ)||0)===0x0A
)KQ=KQ+1;if((Ip.charCodeAt(Nf)||0)===0x0A)Nf=Nf-1;while(WU&&((Ip.charCodeAt(KQ)||
0)===0xFEFF))KQ=KQ+1;while(WV&&((Ip.charCodeAt(Nf)||0)===0xFEFF))Nf=Nf-1;WU=WU&&
!Alt;WV=WV&&!Als;while((((WU||WV)||Als)||Alt)&&(KQ<Nf)){if((WU&&(Atb||!WV))||Als
){if(AZ1>0)Ip=A.abQ(Ip,AZ1,0xFEFF);Ip=A.abQ(Ip,KQ,0x2026);AZ1=KQ;KQ=KQ+1;Atb=!Atb;
Als=false;if(font.XX(Ip,Xd,IO-1)<=AIK){WU=false;WV=false;}else WU=WU||!WV;}if((WV&&(
!Atb||!WU))||Alt){if(AZ2>0)Ip=A.abQ(Ip,AZ2,0xFEFF);Ip=A.abQ(Ip,Nf,0x2026);AZ2=Nf;
Nf=Nf-1;Atb=!Atb;Alt=false;if(font.XX(Ip,Xd,IO-1)<=AIK){WU=false;WV=false;}else WV=
WV||!WU;}}inx=inx+IO;}this.AlA=[font.A4m(Ip),((Ip.charCodeAt(0)||0)*Azz)-leading
];this.CD=Ip;}if(this.Aaj&&(this.CD!==A.jV)){var As0=[this.I0,0];this.T=this.T|0x2000;
this.G(A.abg(A.aaT(this.C_(),As0),this.Bp));this.T=this.T&~0x2000;}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([this,this.Aic],this);},Bi2:function(
E){if(E===this.AMa)return;this.AMa=E;this.CD=A.jV;this.HP=false;A.pe([this,this.
OU],this);},HF:function(E){if(E<0)E=0;if(this.I0===E)return;this.I0=E;this.CD=A.
jV;this.HP=false;A.pe([this,this.OU],this);},Bke:function(E){var B;if(E<0)E=0;if(
this.Sk===E)return;this.Sk=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.
M);if(this.XR){this.CD=A.jV;this.HP=false;A.pe([this,this.OU],this);}if(this.Aaj&&
this.HP)this.G(A.abg(this.C_(),this.Bp));if(this.HP)A.pe([this,this.Aic],this);}
,Bi1:function(E){if(E===this.XR)return;this.XR=E;if(((this.AeR&&!!!this.Ab6)||E)||
!!this.Eh)this.T=this.T&~0x100;else this.T=this.T|0x100;this.CD=A.jV;this.HP=false;
A.pe([this,this.OU],this);},QI:function(E){if(A.aa0(E,this.Eh))return;this.Eh=E;
if(((!!!this.Ab6&&this.AeR)||!!E)||this.XR)this.T=this.T&~0x100;else this.T=this.
T|0x100;},IZ:function(E){if(E===this.Aaj)return;this.Aaj=E;if(E&&this.XR){this.CD=
A.jV;this.HP=false;A.pe([this,this.OU],this);}if(E&&this.HP){var As0=[this.I0,0];
this.T=this.T|0x2000;this.G(A.abg(A.aaT(this.C_(),As0),this.Bp));this.T=this.T&~
0x2000;}},Bkv:function(E){if(E<0)E=0;if(E===this.Ab6)return;this.Ab6=E;if(this.AeR&&
this.HP){this.CD=A.jV;this.HP=false;A.pe([this,this.OU],this);}if(((!!!E&&this.AeR
)||this.XR)||!!this.Eh)this.T=this.T&~0x100;else this.T=this.T|0x100;},KF:function(
E){if(E===this.AeR)return;this.AeR=E;if(this.HP){this.CD=A.jV;this.HP=false;A.pe([
this,this.OU],this);}if(((E&&!!!this.Ab6)||this.XR)||!!this.Eh)this.T=this.T&~0x100;
else this.T=this.T|0x100;},Ga:function(E){var B;if(A.aaX(E,this.Bp))return;this.
Bp=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);if(this.HP)A.pe([this
,this.Aic],this);},A2:function(E){var B;if(E===this.J1)return;this.J1=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);if(this.XR){this.CD=A.jV;this.HP=false;
A.pe([this,this.OU],this);}if(this.HP)A.pe([this,this.Aic],this);},Q:function(E){
if(E===this.String)return;this.String=E;this.CD=A.jV;this.HP=false;A.pe([this,this.
OU],this);},S:function(E){if(E===this.B3)return;this.B3=E;this.CD=A.jV;this.HP=false;
A.pe([this,this.OU],this);},L:function(E){var B;if(E===this.AP)return;this.AP=E;
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Aj:function(E){if(E)this.
Cq(0x400,0x0);else this.Cq(0x0,0x400);},Fc:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(0x0,0x1);},Ajp:function(
){if(!this.HP)this.Xc(this);if(!this.N1)return false;var result=false;var bidi=this.
N1;result=A.v2(bidi);return result;},Bgl:function(){if(!this.HP)this.Xc(this);if(
!this.N1)return false;var result=false;var bidi=this.N1;result=A.zZ(bidi);return result;
},AE$:function(aIndex){if(((this.String===A.jV)||!this.B3)||this.XR)return BC;if(
!this.HP)this.Xc(this);if(aIndex<0)aIndex=0;var Bv9=(this.CD.charCodeAt(0)||0)-1;
var L4=this.CD.charCodeAt(1)||0;var inx=1;var Ain=2;var A_=0;var col=-1;var CL=true;
aIndex=aIndex+2;while((A_<Bv9)&&((inx+L4)<=aIndex)){inx=inx+L4;A_=A_+1;Ain=Ain+1;
aIndex=aIndex+1;L4=this.CD.charCodeAt(inx)||0;}if(aIndex>(inx+L4))aIndex=inx+L4;
if(!!this.N1)aIndex=(inx+this.BuD(this.N1,(inx+1)-Ain,(inx+L4)-Ain,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Il=this.CD.charCodeAt(inx+1)||0;if(CL)col=col+
1;CL=(Il!==0xFEFF)&&(Il!==0x0A);}return[col,A_];},Am$:function(AnZ){if(((this.String===
A.jV)||!this.B3)||this.XR)return 0;if(!this.HP)this.Xc(this);var A_=AnZ[1];var col=
AnZ[0];var inx=1;var Ain=2;var JY=this.CD.charCodeAt(0)||0;var L4=this.CD.charCodeAt(
1)||0;if(A_>=JY){A_=JY-1;col=this.CD.length;}if(A_<0){A_=0;col=0;}if(col<0)col=0;
while((A_>0)&&(L4>0)){inx=inx+L4;A_=A_-1;Ain=Ain+1;L4=this.CD.charCodeAt(inx)||0;
}var W3=inx;var AI$=(inx-Ain)+1;var Apd=(AI$+L4)-1;var Azm=false;while((col>=0)&&(
L4>1)){var Il=this.CD.charCodeAt(inx+1)||0;inx=inx+1;L4=L4-1;Azm=(Il===0xFEFF)||(
Il===0x0A);if(!Azm){col=col-1;W3=inx;}}if((!Azm&&(col>=0))&&((this.CD.charCodeAt(
inx+1)||0)===0x00))Azm=true;if(Azm)W3=W3+1;W3=W3-Ain;if(!!this.N1)W3=AI$+this.BuE(
this.N1,AI$,Apd,W3-AI$);return W3;},ARJ:function(KM){var B;if((this.String===A.jV
)||!this.B3)return BC;if(!this.HP)this.Xc(this);var AE=this.C_();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BC;var font=this.B3;var Br=this.J1;var JY=this.CD.charCodeAt(
0)||0;var leading=font.Leading;if(KM[1]<AE[1])KM=[KM[0],AE[1]];if(KM[1]>=AE[3])KM=[
KM[0],AE[3]-1];if(this.Sk>0)leading=(this.Sk-font.Ascent)-font.Descent;var Z5=(font.
Ascent+font.Descent)+leading;var A_=((KM[1]-AE[1])/Z5)|0;var Np=this.ABt(A_);var
L4=Np.length;var OR=false;if(((Br&0x80)===0x80)){if(this.Ajp())Br=(Br&~0x80)|0x4;
else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)&&(A_<(JY-1)))OR=true;if((OR&&(Np.indexOf(
String.fromCharCode(0x20),0)<0))&&(Np.indexOf(String.fromCharCode(0xA0),0)<0))OR=
false;if(OR){var inx=1;var Apc=A_;while(Apc>0){inx=inx+(this.CD.charCodeAt(inx)||
0);Apc=Apc-1;}if(((this.CD.charCodeAt(inx+1)||0)===0x0A)||((this.CD.charCodeAt((
inx+(this.CD.charCodeAt(inx)||0))-1)||0)===0x0A))OR=false;}var Alu=0;var Ee=0;if(
OR)Alu=AE[2]-AE[0];else if(((Br&0x4)===0x4))Ee=(AE[2]-AE[0])-font.XX(Np,0,L4);else
if(((Br&0x2)===0x2))Ee=(((AE[2]-AE[0])/2)|0)-((font.XX(Np,0,L4)/2)|0);var col=font.
BfZ(Np,0,L4,(KM[0]-AE[0])-Ee,Alu);if(col<0)col=0;return[col,A_];},Aes:function(AnZ
){var B;if((this.String===A.jV)||!this.B3)return BC;if(!this.HP)this.Xc(this);var
JY=this.CD.charCodeAt(0)||0;var font=this.B3;var Br=this.J1;var A_=AnZ[1];var col=
AnZ[0];if(A_>=JY){A_=JY-1;col=this.CD.length;}if(A_<0){A_=0;col=0;}var Np=this.ABt(
A_);var L4=Np.length;var AE=this.C_();var OR=false;var leading=font.Leading;if(((
Br&0x80)===0x80)){if(this.Ajp())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&
0x40)===0x40)&&(A_<(JY-1)))OR=true;if((OR&&(Np.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Np.indexOf(String.fromCharCode(0xA0),0)<0))OR=false;if(OR){var inx=1;var
Apc=A_;while(Apc>0){inx=inx+(this.CD.charCodeAt(inx)||0);Apc=Apc-1;}if(((this.CD.
charCodeAt(inx+1)||0)===0x0A)||((this.CD.charCodeAt((inx+(this.CD.charCodeAt(inx
)||0))-1)||0)===0x0A))OR=false;}if(this.Sk>0)leading=(this.Sk-font.Ascent)-font.
Descent;var C9=(AE[1]+(A_*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
Alu=0;var Ee=AE[0];if(OR)Alu=AE[2]-AE[0];else if(((Br&0x4)===0x4))Ee=AE[2]-font.
XX(Np,0,L4);else if(((Br&0x2)===0x2))Ee=(Ee+(((AE[2]-AE[0])/2)|0))-((font.XX(Np,
0,L4)/2)|0);var pos=font.BfV(Np,0,L4,col,Alu);if(pos<0)pos=0;return[Ee+pos,C9];}
,AMW:function(Ac){var B;if((this.String===A.jV)||!this.B3)return EU;if(!this.HP)
this.Xc(this);var JY=this.CD.charCodeAt(0)||0;var font=this.B3;if((Ac<0)||((Ac>=
JY)&&(Ac>0)))return EU;var Br=this.J1;var inx=1;var leading=font.Leading;var A9=
this.M;var width=A9[2]-A9[0];var height=A9[3]-A9[1];width=width-(this.I0*2);if(((
Br&0x80)===0x80)){if(this.Ajp())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.
Sk>0)leading=(this.Sk-font.Ascent)-font.Descent;var C9=Ac*((font.Ascent+font.Descent
)+leading);var Ee=0;while(Ac>0){inx=inx+(this.CD.charCodeAt(inx)||0);Ac=Ac-1;}var
AzB=(this.CD.charCodeAt(inx)||0)-1;var BcW=font.XX(this.CD,inx+1,AzB);var A1v=font.
A4v(this.CD,inx+1,AzB);var Ape=BcW;var Z5=font.Ascent+font.Descent;var AzQ=(JY*((
font.Ascent+font.Descent)+leading))-leading;if(!JY)AzQ=Z5;if((((this.CD.charCodeAt((
inx+AzB)+1)||0)===0x00)||((this.CD.charCodeAt(inx+AzB)||0)===0x0A))||((this.CD.charCodeAt(
inx+1)||0)===0x0A))Br=Br&~0x40;if(((Br&0x40)===0x40)){var Apd=(inx+1)+AzB;var AxR=
this.CD.indexOf(String.fromCharCode(0x20),inx+1);var AxS=this.CD.indexOf(String.
fromCharCode(0xA0),inx+1);if(((AxR>=0)&&(AxR<Apd))||((AxS>=0)&&(AxS<Apd)))Ape=width;
}if((!!(Br&0x110)&&!!(Br&0x28))&&(AzQ>height))Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;
if((((Br&0x2)===0x2)&&!!(Br&0x5))&&(Ape>width))Br&=~0x2;if(((Br&0x2)===0x2))Br&=
~0x5;if(((Br&0x4)===0x4))Ee=width-Ape;else if(((Br&0x2)===0x2))Ee=((width/2)|0)-((
Ape/2)|0);if(((Br&0x20)===0x20))C9=C9+(height-AzQ);else if(((Br&0x100)===0x100))
C9=((C9+((height/2)|0))-((AzQ/2)|0))+(((this.B3.Descent-this.B3.Ascent)/2)|0);else
if(((Br&0x10)===0x10))C9=(C9+((height/2)|0))-((AzQ/2)|0);Ee=(Ee+A1v[0])+this.I0;
Ape=(Ape+(A1v[2]-A1v[0]))-BcW;var BY;{var Bcp=[A9[0]+Ee,A9[1]+C9];BY=[].concat(Bcp
,A.abf(Bcp,[Ape,Z5]));}return A.abh(BY,this.Bp);},ABt:function(Ac){if((this.String===
A.jV)||!this.B3)return A.jV;if(!this.HP)this.Xc(this);var JY=this.CD.charCodeAt(
0)||0;var inx=1;if((!this.B3||(Ac<0))||(Ac>=JY))return A.jV;while(Ac>0){inx=inx+(
this.CD.charCodeAt(inx)||0);Ac=Ac-1;}var Xd=inx;var AsG=inx+(this.CD.charCodeAt(
inx)||0);var Il=0x00;do{Xd=Xd+1;Il=this.CD.charCodeAt(Xd)||0;}while(((Il===0xFEFF
)||(Il===0x0A))&&(Xd<=AsG));do{AsG=AsG-1;Il=this.CD.charCodeAt(AsG)||0;}while(((
Il===0xFEFF)||(Il===0x0A))&&(Xd<=AsG));var Np=A.abW(this.CD,Xd,(AsG-Xd)+1);var AoF;
for(AoF=Np.indexOf(String.fromCharCode(0xFEFF),0);AoF>=0;AoF=Np.indexOf(String.fromCharCode(
0xFEFF),AoF+1)){var W3=AoF+1;while((Np.charCodeAt(W3)||0)===0xFEFF)W3=W3+1;Np=A.
ab1(Np,AoF,W3-AoF);}return Np;},C_:function(){var B;if((this.String===A.jV)||!this.
B3)return EU;if(!this.HP)this.Xc(this);if(this.CD===A.jV)return EU;var leading=this.
B3.Leading;var Azz=(this.B3.Ascent+this.B3.Descent)+this.B3.Leading;if(this.Sk>0
){leading=(this.Sk-this.B3.Ascent)-this.B3.Descent;Azz=this.Sk;}if(A.aaX(this.AlA
,BC))this.AlA=[this.B3.A4m(this.CD),this.AlA[1]];this.AlA=[this.AlA[0],((this.CD.
charCodeAt(0)||0)*Azz)-leading];var Br=this.J1;var A9=this.M;var As0=this.I0;var
width=A9[2]-A9[0];var height=A9[3]-A9[1];var C8=[As0,0,width-As0,height];var BY=[
].concat(C8.slice(0,2),A.abf(C8.slice(0,2),this.AlA));if(((Br&0x80)===0x80)){if(
this.Ajp())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)){var W5=
this.Ab6;if(W5<=0)W5=width-(this.I0*2);if(W5<0)W5=0;if(W5>(BY[2]-BY[0]))BY=A.abL(
BY,W5);}if((!!(Br&0x110)&&!!(Br&0x28))&&((BY[3]-BY[1])>(C8[3]-C8[1])))Br&=~0x110;
if(!!(Br&0x110))Br&=~0x28;if((((Br&0x2)===0x2)&&!!(Br&0x5))&&((BY[2]-BY[0])>(C8[
2]-C8[0])))Br&=~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if((BY[2]-BY[0])!==(C8[2]-C8[0]
)){if(((Br&0x4)===0x4))BY=A.abM(BY,C8[2]-(BY[2]-BY[0]));else if(((Br&0x2)===0x2)
)BY=A.abM(BY,(C8[0]+(((C8[2]-C8[0])/2)|0))-(((BY[2]-BY[0])/2)|0));}if((BY[3]-BY[
1])!==(C8[3]-C8[1])){if(((Br&0x20)===0x20))BY=A.abO(BY,C8[3]-(BY[3]-BY[1]));else
if(((Br&0x100)===0x100))BY=A.abO(BY,((C8[1]+(((C8[3]-C8[1])/2)|0))-(((BY[3]-BY[1
])/2)|0))+(((this.B3.Descent-this.B3.Ascent)/2)|0));else if(((Br&0x10)===0x10))BY=
A.abO(BY,(C8[1]+(((C8[3]-C8[1])/2)|0))-(((BY[3]-BY[1])/2)|0));}BY=A.abh(BY,A9.slice(
0,2));return A.abh(BY,this.Bp);},_Init:function(aArg){A.Core.Ej._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.K2();this.__proto__=A.Core.Ej;
A.Core.Ej._Done.call(this);},_Mark:function(D){var B;A.Core.Ej._Mark.call(this,D
);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eh)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.AtJ={attrString:null,AttrSet:
null,String:A.jV,J1:0x12,J5:function(CU,aClip,aOffset,Cb,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.C_();Cb=Cb+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CU.Be5(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cb*255)>>8,(Cb*255)>>8,(Cb*255)>>8,(Cb
*255)>>8,true);},G:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.T&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.OU],this);}A.Core.Ej.G.call(this,E);A.pe([this,this.Aic],this
);},Aic:function(H){},Xc:function(H){var B;var AJI;AJI=(B=this.M)[2]-B[0];if(AJI<
0)AJI=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A2H
,0);if(!!this.attrString)this.attrString.BkJ(this.AttrSet,this.String,AJI,false);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([this,this.Aic],this);
},OU:function(H){A.pe([this,this.Xc],this);},BcQ:function(H){var B;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},A2:function(E){var B;E&=~0x140;if(E===this.
J1)return;this.J1=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([
this,this.Aic],this);},Q:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.OU],this);},A63:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BcQ],this.AttrSet,0);A.z9([this,this.OU
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BcQ],this.AttrSet,0);A.zV([this,this.OU],this.AttrSet,1);}A.pe([this,this.
OU],this);},C_:function(){var B;if((this.String===A.jV)||!this.AttrSet)return EU;
if(!this.attrString)this.Xc(this);if(!this.attrString)return EU;var Br=this.J1;var
CY=this.attrString.Bf0();var C8=A.aaT(this.M,BC);var BY=[].concat(C8.slice(0,2),
A.abf(C8.slice(0,2),CY));if(!CY[0]||!CY[1])return EU;if(((Br&0x80)===0x80)){if(this.
attrString.Ajp())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((BY[2]-BY[0])!==(C8[
2]-C8[0])){if(((Br&0x4)===0x4))BY=A.abM(BY,C8[2]-(BY[2]-BY[0]));else if(((Br&0x2
)===0x2))BY=A.abM(BY,(C8[0]+(((C8[2]-C8[0])/2)|0))-(((BY[2]-BY[0])/2)|0));}if((BY[
3]-BY[1])!==(C8[3]-C8[1])){if(((Br&0x20)===0x20))BY=A.abO(BY,C8[3]-(BY[3]-BY[1])
);else if(((Br&0x10)===0x10))BY=A.abO(BY,(C8[1]+(((C8[3]-C8[1])/2)|0))-(((BY[3]-
BY[1])/2)|0));}return BY;},_Init:function(aArg){A.Core.Ej._Init.call(this,aArg);
this.__proto__=C.AtJ;this.T=0x3;},_Mark:function(D){var B;A.Core.Ej._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.Ant={AhY:
null,Fs:null,AhL:0,AhK:0,Uz:A.wf,Cc:A.abi(4,3,0,null),AE5:A.wf,SW:0,AoS:0,Kc:function(
E){if(A.aaX(E,this.Kg))return;A.Core.YX.Kc.call(this,E);this.Cc.Set(3,0,E[0]);this.
Cc.Set(3,1,E[1]);this.Cc.Set(3,2,1);this.SW=0x45;this.Fs=null;A.pe([this,this.Aiv
],this);},Kb:function(E){if(A.aaX(E,this.Mo))return;A.Core.YX.Kb.call(this,E);this.
Cc.Set(2,0,E[0]);this.Cc.Set(2,1,E[1]);this.Cc.Set(2,2,1);this.SW=0x45;this.Fs=null;
A.pe([this,this.Aiv],this);},DJ:function(E){if(A.aaX(E,this.Es))return;A.Core.YX.
DJ.call(this,E);this.Cc.Set(1,0,E[0]);this.Cc.Set(1,1,E[1]);this.Cc.Set(1,2,1);this.
SW=0x45;this.Fs=null;A.pe([this,this.Aiv],this);},DX:function(E){if(A.aaX(E,this.
Ei))return;A.Core.YX.DX.call(this,E);this.Cc.Set(0,0,E[0]);this.Cc.Set(0,1,E[1]);
this.Cc.Set(0,2,1);this.SW=0x45;this.Fs=null;A.pe([this,this.Aiv],this);},AY4:function(
){return;},Aiv:function(H){var B;this.AhY=null;if(this.SW===0x00)return;if(this.
SW===0x45){var KR=A._NewObject(A.Graphics.AwC,0);KR=KR.ALP(this.Cc.Get(0,0),this.
Cc.Get(0,1),this.Cc.Get(1,0),this.Cc.Get(1,1),this.Cc.Get(2,0),this.Cc.Get(2,1),
this.Cc.Get(3,0),this.Cc.Get(3,1));if(!!KR){KR.AAz(0,0);this.Cc.Set(0,2,KR.Uj*240
);KR.AAz(1,0);this.Cc.Set(1,2,KR.Uj*240);KR.AAz(1,1);this.Cc.Set(2,2,KR.Uj*240);
KR.AAz(0,1);this.Cc.Set(3,2,KR.Uj*240);}this.AY4();}if((((this.SW===0x4D)&&!!this.
Fs)&&!!this.Uz[0])&&!!this.Uz[1]){var Aiq=[].concat(BC,this.Uz);var Aip=this.AE5;
var Afk=Aiq[0]-Aip[0];var Aw=Aiq[2]-Aip[0];var D0=Aiq[1]-Aip[1];var Q$=Aiq[3]-Aip[
1];this.Fs.Aen(Afk,D0);this.Cc.Set(0,0,this.Fs.PJ+this.AhK);this.Cc.Set(0,1,this.
Fs.PK+this.AhL);this.Cc.Set(0,2,this.Fs.Uj);this.Fs.Aen(Aw,D0);this.Cc.Set(1,0,this.
Fs.PJ+this.AhK);this.Cc.Set(1,1,this.Fs.PK+this.AhL);this.Cc.Set(1,2,this.Fs.Uj);
this.Fs.Aen(Aw,Q$);this.Cc.Set(2,0,this.Fs.PJ+this.AhK);this.Cc.Set(2,1,this.Fs.
PK+this.AhL);this.Cc.Set(2,2,this.Fs.Uj);this.Fs.Aen(Afk,Q$);this.Cc.Set(3,0,this.
Fs.PJ+this.AhK);this.Cc.Set(3,1,this.Fs.PK+this.AhL);this.Cc.Set(3,2,this.Fs.Uj);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Ei=[(this.
Cc.Get(0,0)+0.5)|0,(this.Cc.Get(0,1)+0.5)|0];this.Es=[(this.Cc.Get(1,0)+0.5)|0,(
this.Cc.Get(1,1)+0.5)|0];this.Mo=[(this.Cc.Get(2,0)+0.5)|0,(this.Cc.Get(2,1)+0.5
)|0];this.Kg=[(this.Cc.Get(3,0)+0.5)|0,(this.Cc.Get(3,1)+0.5)|0];this.AY4();}this.
AoS=this.SW;this.SW=0x00;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));},Bkj:function(E){if(A.aaX(E,this.AE5))return;this.AE5=E;if((this.AoS!==0x45)&&(
this.SW===0x00)){this.SW=this.AoS;A.pe([this,this.Aiv],this);}},Aqo:function(E4){
var B;if(!!!this.AhY){this.AhY=A._NewObject(A.Graphics.A4U,0);this.AhY.ALP(this.
Cc.Get(0,0),this.Cc.Get(0,1),this.Cc.Get(1,0),this.Cc.Get(1,1),this.Cc.Get(2,0),
this.Cc.Get(2,1),this.Cc.Get(3,0),this.Cc.Get(3,1));}if(!this.AhY.Aen(E4))return BC;
var Apj=[].concat(BC,this.Uz);var Ee=this.AhY.PJ*(Apj[2]-Apj[0]);var C9=this.AhY.
PK*(Apj[3]-Apj[1]);return A.abf([Ee|0,C9|0],Apj.slice(0,2));},A9b:function(A_4,LV
){var B;this.AhY=null;if(!LV)throw new Error(I7);if(!this.Fs)this.Fs=A._NewObject(
A.Graphics.AwC,0);this.Fs.Bd$(LV);this.AhK=A_4[0];this.AhL=A_4[1];this.AoS=0x4D;
this.SW=0x00;if(!this.Uz[0]||!this.Uz[1])return;var Aiq=[].concat(BC,this.Uz);var
Aip=this.AE5;var Afk=Aiq[0]-Aip[0];var Aw=Aiq[2]-Aip[0];var D0=Aiq[1]-Aip[1];var
Q$=Aiq[3]-Aip[1];this.Fs.Aen(Afk,D0);this.Cc.Set(0,0,this.Fs.PJ+this.AhK);this.Cc.
Set(0,1,this.Fs.PK+this.AhL);this.Cc.Set(0,2,this.Fs.Uj);this.Fs.Aen(Aw,D0);this.
Cc.Set(1,0,this.Fs.PJ+this.AhK);this.Cc.Set(1,1,this.Fs.PK+this.AhL);this.Cc.Set(
1,2,this.Fs.Uj);this.Fs.Aen(Aw,Q$);this.Cc.Set(2,0,this.Fs.PJ+this.AhK);this.Cc.
Set(2,1,this.Fs.PK+this.AhL);this.Cc.Set(2,2,this.Fs.Uj);this.Fs.Aen(Afk,Q$);this.
Cc.Set(3,0,this.Fs.PJ+this.AhK);this.Cc.Set(3,1,this.Fs.PK+this.AhL);this.Cc.Set(
3,2,this.Fs.Uj);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping()
);this.Ei=[(this.Cc.Get(0,0)+0.5)|0,(this.Cc.Get(0,1)+0.5)|0];this.Es=[(this.Cc.
Get(1,0)+0.5)|0,(this.Cc.Get(1,1)+0.5)|0];this.Mo=[(this.Cc.Get(2,0)+0.5)|0,(this.
Cc.Get(2,1)+0.5)|0];this.Kg=[(this.Cc.Get(3,0)+0.5)|0,(this.Cc.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.AY4();},_Init:
function(aArg){A.Core.YX._Init.call(this,aArg);(this.Cc=[]).__proto__=C.Ant.Cc;this.
__proto__=C.Ant;this.T=0x3;},_Mark:function(D){var B;A.Core.YX._Mark.call(this,D
);if((B=this.AhY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fs)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.ATg={Ff:null,bitmap:null
,O:null,GS:255,J5:function(CU,aClip,aOffset,Cb,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Ni=aOffset[0];var Nj=aOffset[1];var AE=[].concat(BC,this.
Uz);aBlend=aBlend&&((this.T&0x2)===0x2);Cb=Cb+1;var Bbp;var Bbq;var Bbr;var Bbs;
var Bwg=this.GS;Bbp=Bbq=Bbr=Bbs=Bwg;var AkO=255|(255<<8)|(255<<16)|((((Cb*Bbp)>>
8)&0xFF)<<24);var AkP=255|(255<<8)|(255<<16)|((((Cb*Bbq)>>8)&0xFF)<<24);var BuF=
255|(255<<8)|(255<<16)|((((Cb*Bbr)>>8)&0xFF)<<24);var BuG=255|(255<<8)|(255<<16)|((((
Cb*Bbs)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(EU,aOffset));CU.Ag_(aClip,this.bitmap
,0,this.Cc.Get(0,0)+Ni,this.Cc.Get(0,1)+Nj,this.Cc.Get(0,2),this.Cc.Get(1,0)+Ni,
this.Cc.Get(1,1)+Nj,this.Cc.Get(1,2),this.Cc.Get(2,0)+Ni,this.Cc.Get(2,1)+Nj,this.
Cc.Get(2,2),this.Cc.Get(3,0)+Ni,this.Cc.Get(3,1)+Nj,this.Cc.Get(3,2),AE,AkO,AkP,
BuF,BuG,aBlend,true);},GL:function(CG){if(!this.O||!this.Ff)return null;var BK=(
A.Core.Adw.isPrototypeOf(CG)?CG:null);var DU=(A.Core.ApM.isPrototypeOf(CG)?CG:null
);if(!BK&&!DU)return null;var Fh=BC;var BS=this.Ff.Ab;while(!!BS&&(BS!==this.O)){
Fh=A.abe(Fh,BS.M.slice(0,2));BS=BS.Ab;}var W=this.Ff;if(!!BK&&!BK.Down)this.Ff=null;
if(!!BK){BK.HS=A.abf(this.Aqo(BK.HS),Fh);BK.NB=A.abf(this.Aqo(BK.NB),Fh);return W.
GL(BK);}if(!!DU){var Bwk=A.abf(this.Aqo(A.abe(DU.HS,DU.Dw)),Fh);DU.HS=A.abf(this.
Aqo(DU.HS),Fh);DU.NB=A.abf(this.Aqo(DU.NB),Fh);DU.Dw=A.abe(DU.HS,Bwk);return W.GL(
DU);}return C.Ant.GL.call(this,CG);},XM:function(C6,BD,NY,ZE,Aco,Acn){var B;if(!
this.O||!((this.O.T&0x18)===0x18))return null;var pos=A.aaI(C6);pos=this.Aqo(pos
);var Apj=[].concat(BC,this.Uz);if(!A.wa(Apj,pos))return null;var Jt=this.O.XM(A.
abh(A.abh([0,0,C6[2]-C6[0],C6[3]-C6[1]],pos),this.O.M.slice(0,2)),BD,NY,ZE,null,
Acn);if(!!Jt)this.Ff=Jt.Ca;else this.Ff=null;if(!!this.Ff)return A._NewObject(A.
Core.AtT,0).Initialize(this,BC);return null;},Rk:function(H){var B;var Bbt=this.
Uz;if(!!this.O)this.bitmap=this.O.Fp;else this.bitmap=null;if(!!this.bitmap)this.
Uz=this.bitmap.FrameSize;else this.Uz=BC;if(((A.aaX(Bbt,this.Uz)||((this.AoS===0x45
)&&(this.SW===0x00)))&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if(((this.AoS!==0x45)&&(this.SW===0x00))&&!A.aaX(Bbt,this.Uz)){this.SW=this.AoS;
A.pe([this,this.Aiv],this);}},Dz:function(E){var B;if(E===this.GS)return;this.GS=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());},Bju:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ab))throw new Error(II);if(!!this.O){A.
z9([this,this.Rk],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.zV([this,this.Rk
],E,0);this.bitmap=E.Fp;}this.Rk(this);},Ava:function(){return this.GS;},_Init:function(
aArg){C.Ant._Init.call(this,aArg);this.__proto__=C.ATg;},_Mark:function(D){var B;
C.Ant._Mark.call(this,D);if((B=this.Ff)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.AdG={Hn:null,AP:0xFFFFFFFF,Dw:A.wf
,AMA:false,K2:function(){this.AZl();},J5:function(CU,aClip,aOffset,Cb,aBlend){if(
!this.Hn)return;var Dq;var DG;var DC;var DF;var BX=this.AP;Cb=Cb+1;Dq=DG=DC=DF=BX;
if(Cb<256){Dq=(Dq&0x00FFFFFF)|((((Cb*((Dq>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF
)|((((Cb*((DG>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cb*((DC>>24)&0xFF
))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Cb*((DF>>24)&0xFF))>>8)&0xFF)<<24);}CU.
AdG(aClip,this.Hn,A.abh(this.M,aOffset),this.AMA,this.Dw,Dq,DG,DF,DC,true,true,0
);},AZl:function(){return;},Aiw:function(H){var B;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if((
!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.M);},Am0:function(E){
var B;if(A.aaX(E,this.Dw))return;this.Dw=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hn)this.Ab.Bd(this.M);},Bjp:function(E){var B;if(E===this.AMA)return;this.
AMA=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.M);},YR:function(
E){var B;if(E===this.Hn)return;if(!!this.Hn)A.z9([this,this.Aiw],this.Hn,0);this.
Hn=E;if(!!this.Hn)A.zV([this,this.Aiw],this.Hn,0);if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(0x0,0x1
);},_Init:function(aArg){A.Core.Ej._Init.call(this,aArg);this.__proto__=C.AdG;},
_Done:function(){this.K2();this.__proto__=A.Core.Ej;A.Core.Ej._Done.call(this);}
,_Mark:function(D){var B;A.Core.Ej._Mark.call(this,D);if((B=this.Hn)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hb={Hn:null,AP:0xFFFFFFFF
,Dw:A.wf,Width:1,K2:function(){this.AZl();},J5:function(CU,aClip,aOffset,Cb,aBlend
){if(!this.Hn)return;var Dq;var DG;var DC;var DF;var BX=this.AP;Cb=Cb+1;Dq=DG=DC=
DF=BX;if(Cb<256){Dq=(Dq&0x00FFFFFF)|((((Cb*((Dq>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&
0x00FFFFFF)|((((Cb*((DG>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cb*((DC>>
24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Cb*((DF>>24)&0xFF))>>8)&0xFF)<<
24);}CU.Hb(aClip,this.Hn,A.abh(this.M,aOffset),false,this.Dw,this.Width,0,0,0,3,
Dq,DG,DF,DC,true,true);},AZl:function(){return;},Aiw:function(H){var B;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.
M);},Am0:function(E){var B;if(A.aaX(E,this.Dw))return;this.Dw=E;if((!!this.Ab&&((
this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.M);},NJ:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hn)this.Ab.Bd(this.M);},YR:function(E){var B;if(E===this.Hn)return;if(!!this.
Hn)A.z9([this,this.Aiw],this.Hn,0);this.Hn=E;if(!!this.Hn)A.zV([this,this.Aiw],this.
Hn,0);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Y:function(E){if(E
)this.Cq(0x1,0x0);else this.Cq(0x0,0x1);},_Init:function(aArg){A.Core.Ej._Init.call(
this,aArg);this.__proto__=C.Hb;},_Done:function(){this.K2();this.__proto__=A.Core.
Ej;A.Core.Ej._Done.call(this);},_Mark:function(D){var B;A.Core.Ej._Mark.call(this
,D);if((B=this.Hn)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BAk={A2p:0x1,A2o:0x2,A2q:0x4,A2t:0x8,A2s:0x10,A2r:0x20,BBz:0x40,BBA:0x80,BBL:
0x100};C.BBP={A2p:0x1,A2o:0x2,A2q:0x4,A2t:0x8,A2s:0x10,A2r:0x20,ByP:0x40,ByO:0x80
,ByU:0x100};C.BAY={Normal:0,BBu:1,BBs:2,BBt:3};
C._Init=function(){C.DQ.__proto__=A.Core.AjB;C.AI.__proto__=A.Core.Ej;C.Cy.__proto__=
A.Core.Ej;C.NA.__proto__=A.Core.Ej;C.Am.__proto__=A.Core.Ej;C.Text.__proto__=A.Core.
Ej;C.AtJ.__proto__=A.Core.Ej;C.Ant.__proto__=A.Core.YX;C.ATg.__proto__=C.Ant;C.AdG.
__proto__=A.Core.Ej;C.Hb.__proto__=A.Core.Ej;};C._ReInit=function(){};C.DB=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */