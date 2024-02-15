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
var B9=[1,1];var BC=[0,0];var EW=[0,0,0,0];var He="\uFEFF";var I7="No matrix to perform 3D transformation";
var IH="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DR={Kx:null,AkF:1,AkE:1,AP:0xFFFFFFFF,J7:function(CU,aClip,aOffset,Ce,aBlend){var
B;var AfQ=this.AkE;var AfR=this.AkF;var Ac0=A.abf(this.Ej,aOffset);var Ac1=A.abf(
this.Et,aOffset);var Ak0;var Ak1;var BZ=this.AP;if(A.aaX(Ac0,Ac1))return;aBlend=
aBlend&&((this.T&0x2)===0x2);Ce=Ce+1;Ak0=Ak1=BZ;if(Ce<256){Ak0=(Ak0&0x00FFFFFF)|((((
Ce*((Ak0>>24)&0xFF))>>8)&0xFF)<<24);Ak1=(Ak1&0x00FFFFFF)|((((Ce*((Ak1>>24)&0xFF)
)>>8)&0xFF)<<24);}if((AfQ===1)&&(AfR===1))CU.Aun(aClip,Ac0,Ac1,Ak0,Ak1,aBlend);else
CU.BfM(aClip,Ac0,Ac1,AfQ,AfR,Ak0,Ak1,aBlend);},GetExtent:function(){var AfQ=this.
AkE;var AfR=this.AkF;var Ac0=this.Ej;var Ac1=this.Et;if(((AfQ===1)&&(AfR===1))||
A.aaX(Ac0,Ac1))return A.Core.AjL.GetExtent.call(this);var Ah2=AfQ/2;var Ah3=AfR/
2;var AoI=Ac0[0];var AoJ=Ac0[1];var AoK=Ac1[0];var AoL=Ac1[1];var JU=AoK-AoI;var
JV=AoL-AoJ;var IN=Math.sqrt((JU*JU)+(JV*JV));JU=JU/IN;JV=JV/IN;var Bar=AoI+(JV*Ah2
);var Bas=AoJ-(JU*Ah2);var AIe=AoK+(JV*Ah3);var AIf=AoL-(JU*Ah3);var AIg=AoK-(JV
*Ah3);var AIh=AoL+(JU*Ah3);var AIi=AoI-(JV*Ah2);var AIj=AoJ+(JU*Ah2);var left=Bar;
var right=Bar;var top=Bas;var bottom=Bas;if(AIe<left)left=AIe;if(AIg<left)left=AIg;
if(AIi<left)left=AIi;if(AIe>right)right=AIe;if(AIg>right)right=AIg;if(AIi>right)
right=AIi;if(AIf<top)top=AIf;if(AIh<top)top=AIh;if(AIj<top)top=AIj;if(AIf>bottom
)bottom=AIf;if(AIh>bottom)bottom=AIh;if(AIj>bottom)bottom=AIj;var Aw=[left|0,top|
0,right|0,bottom|0];Aw=[].concat(Aw.slice(0,2),A.abf(Aw.slice(2,4),B9));return Aw;
},Ro:function(G){var B;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));},A8J:function(E){var B;if(E<1)E=1;if(E===this.AkF)return;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.AkF=E;if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Bd(this.GetClipping());if(((E!==1)||(this.AkE!==1))&&!this.Kx){
this.Kx=A.aaL(A.aci.Ar$);if(this.Kx.Ox)A.zV([this,this.Ro],this.Kx,0);}if(((E===
1)&&(this.AkE===1))&&!!this.Kx){if(this.Kx.Ox)A.z9([this,this.Ro],this.Kx,0);this.
Kx=null;}},A8I:function(E){var B;if(E<1)E=1;if(E===this.AkE)return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.AkE=E;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if(((E!==1)||(this.AkF!==1))&&!this.
Kx){this.Kx=A.aaL(A.aci.Ar$);if(this.Kx.Ox)A.zV([this,this.Ro],this.Kx,0);}if(((
E===1)&&(this.AkF===1))&&!!this.Kx){if(this.Kx.Ox)A.z9([this,this.Ro],this.Kx,0);
this.Kx=null;}},NO:function(E){var B;if(E<1)E=1;if((E===this.AkE)&&(E===this.AkF
))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.
AkE=E;this.AkF=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((E!==1)&&!this.Kx){this.Kx=A.aaL(A.aci.Ar$);if(this.Kx.Ox)A.zV([this,this.
Ro],this.Kx,0);}if((E===1)&&!!this.Kx){if(this.Kx.Ox)A.z9([this,this.Ro],this.Kx
,0);this.Kx=null;}},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fe:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(
aArg){A.Core.AjL._Init.call(this,aArg);this.__proto__=C.DR;},_Mark:function(D){var
B;A.Core.AjL._Mark.call(this,D);if((B=this.Kx)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AI={ALX:0xFFFFFFFF,ALY:0xFFFFFFFF,AL2:0xFFFFFFFF
,AL1:0xFFFFFFFF,AP:0xFFFFFFFF,J7:function(CU,aClip,aOffset,Ce,aBlend){var B;var Dt=
this.AL1;var DH=this.AL2;var DC=this.ALX;var DG=this.ALY;var BZ=this.AP;aBlend=aBlend&&((
this.T&0x2)===0x2);Ce=Ce+1;if((((Dt===DH)&&(DC===DG))&&(Dt===DC))&&(Dt===0xFFFFFFFF
))Dt=DH=DC=DG=BZ;else if(BZ!==0xFFFFFFFF){Dt=(Dt&0x00FFFFFF)|((((((Dt>>24)&0xFF)
*(((BZ>>24)&0xFF)+1))>>8)&0xFF)<<24);Dt=(Dt&0xFFFFFF00)|((((Dt&0xFF)*((BZ&0xFF)+
1))>>8)&0xFF);Dt=(Dt&0xFFFF00FF)|((((((Dt>>8)&0xFF)*(((BZ>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dt=(Dt&0xFF00FFFF)|((((((Dt>>16)&0xFF)*(((BZ>>16)&0xFF)+1))>>8)&0xFF)<<16);
DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*(((BZ>>24)&0xFF)+1))>>8)&0xFF)<<24);DH=(DH&
0xFFFFFF00)|((((DH&0xFF)*((BZ&0xFF)+1))>>8)&0xFF);DH=(DH&0xFFFF00FF)|((((((DH>>8
)&0xFF)*(((BZ>>8)&0xFF)+1))>>8)&0xFF)<<8);DH=(DH&0xFF00FFFF)|((((((DH>>16)&0xFF)
*(((BZ>>16)&0xFF)+1))>>8)&0xFF)<<16);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*(((BZ>>
24)&0xFF)+1))>>8)&0xFF)<<24);DC=(DC&0xFFFFFF00)|((((DC&0xFF)*((BZ&0xFF)+1))>>8)&
0xFF);DC=(DC&0xFFFF00FF)|((((((DC>>8)&0xFF)*(((BZ>>8)&0xFF)+1))>>8)&0xFF)<<8);DC=(
DC&0xFF00FFFF)|((((((DC>>16)&0xFF)*(((BZ>>16)&0xFF)+1))>>8)&0xFF)<<16);DG=(DG&0x00FFFFFF
)|((((((DG>>24)&0xFF)*(((BZ>>24)&0xFF)+1))>>8)&0xFF)<<24);DG=(DG&0xFFFFFF00)|((((
DG&0xFF)*((BZ&0xFF)+1))>>8)&0xFF);DG=(DG&0xFFFF00FF)|((((((DG>>8)&0xFF)*(((BZ>>8
)&0xFF)+1))>>8)&0xFF)<<8);DG=(DG&0xFF00FFFF)|((((((DG>>16)&0xFF)*(((BZ>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Ce<256){Dt=(Dt&0x00FFFFFF)|((((Ce*((Dt>>24)&0xFF))>>8)&
0xFF)<<24);DH=(DH&0x00FFFFFF)|((((Ce*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF
)|((((Ce*((DC>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Ce*((DG>>24)&0xFF
))>>8)&0xFF)<<24);}CU.AuC(aClip,A.abh(this.M,aOffset),Dt,DH,DG,DC,aBlend);},AvI:
function(E){var B;if(E===this.ALX)return;this.ALX=E;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},AvJ:function(E){var B;if(E===this.ALY)return;this.ALY=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},AvL:function(E){var B;
if(E===this.AL2)return;this.AL2=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.M);},AvK:function(E){var B;if(E===this.AL1)return;this.AL1=E;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AP)return;
this.AP=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Fe:function(){
var B;return((this.T&0x1)===0x1);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},_Init:function(aArg){A.Core.Ek._Init.call(this,aArg);this.__proto__=
C.AI;},_className:"Views::Rectangle"};C.Cz={Width:1,AP:0xFFFFFFFF,J7:function(CU
,aClip,aOffset,Ce,aBlend){var B;var Dt;var DH;var DC;var DG;var BZ=this.AP;aBlend=
aBlend&&((this.T&0x2)===0x2);Ce=Ce+1;Dt=DH=DC=DG=BZ;if(Ce<256){Dt=(Dt&0x00FFFFFF
)|((((Ce*((Dt>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((Ce*((DH>>24)&0xFF
))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Ce*((DC>>24)&0xFF))>>8)&0xFF)<<24);DG=(
DG&0x00FFFFFF)|((((Ce*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CU.BfK(aClip,A.abh(this.M
,aOffset),this.Width,Dt,DH,DG,DC,aBlend);},NO:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.
M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(
0x0,0x1);},_Init:function(aArg){A.Core.Ek._Init.call(this,aArg);this.__proto__=C.
Cz;},_className:"Views::Border"};C.NF={timer:null,Al:null,MC:-1,AP:0xFFFFFFFF,Auo:
0x1F,Tx:0,Dm:0,AmR:A.wf,U9:false,J7:function(CU,aClip,aOffset,Ce,aBlend){var B;var
Ni=this.Tx;if(this.MC>=0)Ni=this.MC;if(!this.Al||(Ni>=this.Al.NoOfFrames))return;
this.Al.Update();var Dt;var DH;var DG;var DC;var BZ=this.AP;var J1=(((Ce+1)*255)>>
8)+1;var N5=this.Auo;var Aw=A.abh(this.M,aOffset);var AJG=A.abe([Aw[2]-Aw[0],Aw[
3]-Aw[1]],this.AmR);aBlend=aBlend&&((this.T&0x2)===0x2);Dt=DH=DC=DG=BZ;if(J1<256
){Dt=(Dt&0x00FFFFFF)|((((((Dt>>24)&0xFF)*J1)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((
DH>>24)&0xFF)*J1)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J1)>>8)&
0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J1)>>8)&0xFF)<<24);}if(((this.
AmR[0]>0)&&(AJG[0]>0))&&!((N5&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AJG[
0];if(((N5&0x1)===0x1)){if(aClip[2]>Aw[2])aClip=A.abN(aClip,Aw[2]);if(d>0)Aw=A.abN(
Aw,Aw[2]+d);N5=N5|0x4;}else if(((N5&0x4)===0x4)){if(aClip[0]<Aw[0])aClip=[].concat(
Aw[0],aClip.slice(1,4));if(d>0)Aw=[].concat(Aw[0]-d,Aw.slice(1,4));N5=N5|0x1;}else{
if(aClip[0]<Aw[0])aClip=[].concat(Aw[0],aClip.slice(1,4));if(aClip[2]>Aw[2])aClip=
A.abN(aClip,Aw[2]);if(d>0){Aw=[].concat(Aw[0]-((d/2)|0),Aw.slice(1,4));Aw=A.abN(
Aw,(Aw[2]+d)-((d/2)|0));}N5=N5|0x5;}}if(((this.AmR[1]>0)&&(AJG[1]>0))&&!((N5&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AJG[1];if(((N5&0x2)===0x2)){if(aClip[
3]>Aw[3])aClip=[].concat(aClip.slice(0,3),Aw[3]);if(d>0)Aw=[].concat(Aw.slice(0,
3),Aw[3]+d);N5=N5|0x8;}else if(((N5&0x8)===0x8)){if(aClip[1]<Aw[1])aClip=A.abP(aClip
,Aw[1]);if(d>0)Aw=A.abP(Aw,Aw[1]-d);N5=N5|0x2;}else{if(aClip[1]<Aw[1])aClip=A.abP(
aClip,Aw[1]);if(aClip[3]>Aw[3])aClip=[].concat(aClip.slice(0,3),Aw[3]);if(d>0){Aw=
A.abP(Aw,Aw[1]-((d/2)|0));Aw=[].concat(Aw.slice(0,3),(Aw[3]+d)-((d/2)|0));}N5=N5|
0xA;}}CU.BfJ(aClip,this.Al,Ni,Aw,N5,Dt,DH,DG,DC,aBlend);},Ro:function(G){var B;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L8:function(G){var B;var Ni=
this.MC;var S5=0;if(!!this.Al)S5=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MC<0))&&(S5>0))this.Dm=this.timer.Bt-(this.Tx*this.Al.FrameDelay);if(
!!this.timer&&(S5>0)){var At=(this.timer.Bt-this.Dm)|0;Ni=(At/this.Al.FrameDelay
)|0;if(At>=S5){Ni=Ni%this.Al.NoOfFrames;this.Dm=this.timer.Bt-(At%S5);}}if(((Ni!==
this.MC)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);this.MC=Ni;if(!S5&&
!!this.timer){A.z9([this,this.L8],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AP)return;this.AP=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.
Bd(this.M);},YU:function(E){var B;if(this.U9===E)return;this.U9=E;this.MC=-1;if(
!E&&!!this.timer){A.z9([this,this.L8],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.AdI);A.zV([this,this.L8],this.timer,0);A.pe([this,this.
L8],this);}if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},A7Y:function(
E){var B;if(E===this.Auo)return;this.Auo=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===this.Tx)&&(this.MC===-1)
)return;this.Tx=E;if(!this.timer)this.MC=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
Ox)A.z9([this,this.Ro],this.Al,0);this.Al=E;this.MC=-1;if(!!E&&E.Ox)A.zV([this,this.
Ro],E,0);if(this.U9){this.YU(false);this.YU(true);}if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},A8c:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
AmR))return;this.AmR=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!((this.Auo&0xF)===
0xF))this.Ab.Bd(this.M);},_Init:function(aArg){A.Core.Ek._Init.call(this,aArg);this.
__proto__=C.NF;},_Mark:function(D){var B;A.Core.Ek._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.Am={timer:null,Al:null,Dm:0,MC:0,AP:0xFFFFFFFF
,J3:0x12,Tx:0,GT:255,U9:false,Aaq:false,J7:function(CU,aClip,aOffset,Ce,aBlend){
var B;var Ni=this.Tx;if(this.MC>=0)Ni=this.MC;if(!this.Al||(Ni>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Da();var CY=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var Dt;var DH;var DG;var DC;var BZ=this.AP;var J1=(((
Ce+1)*this.GT)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);Dt=DH=DC=DG=BZ;if(J1<256
){Dt=(Dt&0x00FFFFFF)|((((((Dt>>24)&0xFF)*J1)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((
DH>>24)&0xFF)*J1)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J1)>>8)&
0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J1)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],CY))CU.A36(aClip,this.Al,Ni,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),Dt,DH,DG,DC,aBlend);else CU.BlX(aClip,this.Al,Ni
,A.abh(AE,aOffset),[].concat(BC,CY),Dt,DH,DG,DC,aBlend,true);},Ro:function(G){var
B;if(((this.Aaq&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Da());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L8:function(
G){var B;var Ni=this.MC;var S5=0;if(!!this.Al)S5=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MC<0))&&(S5>0))this.Dm=this.timer.Bt-(this.Tx*this.Al.FrameDelay
);if(!!this.timer&&(S5>0)){var At=(this.timer.Bt-this.Dm)|0;Ni=(At/this.Al.FrameDelay
)|0;if(At>=S5){Ni=Ni%this.Al.NoOfFrames;this.Dm=this.timer.Bt-(At%S5);}}if(((Ni!==
this.MC)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);this.MC=Ni;if(!S5&&
!!this.timer){A.z9([this,this.L8],this.timer,0);this.timer=null;}},IZ:function(E
){if(E===this.Aaq)return;this.Aaq=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Da());},L:function(E){var B;if(E===this.
AP)return;this.AP=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},YU:function(
E){var B;if(this.U9===E)return;this.U9=E;this.MC=-1;if(!E&&!!this.timer){A.z9([this
,this.L8],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
AdI);A.zV([this,this.L8],this.timer,0);A.pe([this,this.L8],this);}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},A2:function(E){var B;if(E===this.J3)return;
this.J3=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Ct:function(E){
var B;if(E<0)E=0;if((E===this.Tx)&&(this.MC===-1))return;this.Tx=E;if(!this.timer
)this.MC=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.Ox)A.z9([this,this.Ro],this.
Al,0);this.Al=E;this.MC=-1;if(!!E&&E.Ox)A.zV([this,this.Ro],E,0);if(this.U9){this.
YU(false);this.YU(true);}if(((this.Aaq&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Da());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},
Ds:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GT)return;this.GT=E;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Aj:function(E){if(E)this.Cs(
0x400,0x0);else this.Cs(0x0,0x400);},Fe:function(){var B;return((this.T&0x1)===0x1
);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Da:function(){var
B;if(!this.Al)return EW;var Br=this.J3;var CY=this.Al.FrameSize;var A_=this.M;var
width=A_[2]-A_[0];var height=A_[3]-A_[1];if(!CY[0]||!CY[1])return EW;var C_=[0,0
,width,height];var B0=C_;if(((Br&0x40)===0x40)){var A2c=((((C_[2]-C_[0])<<16)+((
CY[0]/2)|0))/CY[0])|0;var Az3=((((C_[3]-C_[1])<<16)+((CY[1]/2)|0))/CY[1])|0;var Ais=
A2c;if(Az3>Ais)Ais=Az3;B0=A.abL(B0,((CY[0]*Ais)+32768)>>16);B0=A.abI(B0,((CY[1]*
Ais)+32768)>>16);}else if(((Br&0x80)===0x80)){var A2c=((((C_[2]-C_[0])<<16)+((CY[
0]/2)|0))/CY[0])|0;var Az3=((((C_[3]-C_[1])<<16)+((CY[1]/2)|0))/CY[1])|0;var Ais=
A2c;if(Az3<Ais)Ais=Az3;B0=A.abL(B0,((CY[0]*Ais)+32768)>>16);B0=A.abI(B0,((CY[1]*
Ais)+32768)>>16);}else if(!((Br&0x100)===0x100))B0=A.abK(B0,CY);if((B0[2]-B0[0])
!==(C_[2]-C_[0])){if(((Br&0x4)===0x4))B0=A.abM(B0,C_[2]-(B0[2]-B0[0]));else if(((
Br&0x2)===0x2))B0=A.abM(B0,(C_[0]+(((C_[2]-C_[0])/2)|0))-(((B0[2]-B0[0])/2)|0));
}if((B0[3]-B0[1])!==(C_[3]-C_[1])){if(((Br&0x20)===0x20))B0=A.abO(B0,C_[3]-(B0[3
]-B0[1]));else if(((Br&0x10)===0x10))B0=A.abO(B0,(C_[1]+(((C_[3]-C_[1])/2)|0))-(((
B0[3]-B0[1])/2)|0));}B0=A.abh(B0,A_.slice(0,2));return B0;},Bh_:function(){return this.
AP;},AQ1:function(){return this.Tx;},_Init:function(aArg){A.Core.Ek._Init.call(this
,aArg);this.__proto__=C.Am;},_Mark:function(D){var B;A.Core.Ek._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B3:null,Ei:null,CD:
A.jV,String:A.jV,N3:null,AlN:A.wf,I0:0,So:0,Ace:0,Bp:A.wf,J3:0x12,AP:0xFFFFFFFF,
Ae1:false,Aaq:false,XW:false,AMI:false,HQ:false,K6:function(){if(!!this.N3){this.
A0n(this.N3);this.N3=null;}},J7:function(CU,aClip,aOffset,Ce,aBlend){var B;if((this.
CD===A.jV)||!this.B3)return;var Br=this.J3;var font=this.B3;var C_=A.abh(this.M,
aOffset);var Dt;var DH;var DG;var DC;var col=this.AP;var J1=(((Ce+1)*255)>>8)+1;
var J0=this.CD.charCodeAt(0)||0;var AE=A.abh(this.Da(),aOffset);var Bo=[C_[0]-AE[
0],(C_[1]-AE[1])-font.Ascent];if(J0<1)return;Dt=DH=DC=DG=col;if(J1<256){Dt=(Dt&0x00FFFFFF
)|((((((Dt>>24)&0xFF)*J1)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*
J1)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J1)>>8)&0xFF)<<24);DC=(
DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J1)>>8)&0xFF)<<24);}if(((Br&0x80)===0x80)){if(
this.Ajz())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((J0===1)&&!((Br&0x40)===
0x40)){CU.A4y(aClip,font,this.CD,2,(this.CD.charCodeAt(1)||0)-1,C_,Bo,0,0,Dt,DH,
DG,DC,true);return;}var leading=font.Leading;if(this.So>0)leading=(this.So-font.
Ascent)-font.Descent;var Aaa=(font.Ascent+font.Descent)+leading;var Bvx=aClip[1]-
AE[1];var Bvy=aClip[3]-AE[1];var AZB=AE[2]-AE[0];var C$=0;var P=1;var BZ=this.CD.
charCodeAt(1)||0;while(((C$+Aaa)<Bvx)&&(BZ>0)){P=P+BZ;C$=C$+Aaa;BZ=this.CD.charCodeAt(
P)||0;}while((C$<Bvy)&&(BZ>0)){var L4=A.abe(Bo,[0,C$]);var AlG=0;var OV=false;if(((((
Br&0x40)===0x40)&&((this.CD.charCodeAt((P+BZ)-1)||0)!==0x0A))&&((this.CD.charCodeAt(
P+1)||0)!==0x0A))&&((this.CD.charCodeAt(P+BZ)||0)!==0x00))OV=true;if(OV&&!!(Br&0x6
)){var Apo=P+BZ;var Ayb=this.CD.indexOf(String.fromCharCode(0x20),P+1);var Ayc=this.
CD.indexOf(String.fromCharCode(0xA0),P+1);if(((Ayb<0)||(Ayb>=Apo))&&((Ayc<0)||(Ayc>=
Apo)))OV=false;}if(OV)AlG=AZB;else if(((Br&0x4)===0x4))L4=[(L4[0]-AZB)+font.X2(this.
CD,P+1,BZ-1),L4[1]];else if(((Br&0x2)===0x2))L4=[(L4[0]-((AZB/2)|0))+((font.X2(this.
CD,P+1,BZ-1)/2)|0),L4[1]];CU.A4y(aClip,font,this.CD,P+1,BZ-1,C_,L4,AlG,0,Dt,DH,DG
,DC,true);P=P+BZ;C$=C$+Aaa;BZ=this.CD.charCodeAt(P)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Bdz;Bdz=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bdz&&
!this.Ace)&&this.Ae1)&&this.HQ)&&!((this.T&0x2000)===0x2000)){this.CD=A.jV;this.
HQ=false;A.pe([this,this.OY],this);}if(((this.XW&&this.HQ)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.T&0x2000)===0x2000)){this.CD=
A.jV;this.HQ=false;A.pe([this,this.OY],this);}A.Core.Ek.H.call(this,E);A.pe([this
,this.Ail],this);},Bvp:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bvo:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A0n:function(aBidi){if(!aBidi)return;A.rB(aBidi);},BvK:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},Ail:function(G){A.pe(this.Ei
,this);},OY:function(G){A.pe([this,this.Xh],this);},Xh:function(G){var B;if(this.
HQ)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var W_=-1;var
font=this.B3;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Ae1){
if(this.Ace>0)W_=this.Ace;else if(!this.Aaq)W_=width-(this.I0*2);else W_=width;if(
W_<0)W_=1;}if(!!this.N3){this.A0n(this.N3);this.N3=null;}this.HQ=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.AMI)this.N3=this.BvK(length
);this.CD=font.Blo(this.String,0,W_,length,this.N3);if(!!this.N3&&!this.BgZ()){this.
A0n(this.N3);this.N3=null;}}else this.CD=A.jV;this.AlN=BC;if(((this.XW&&(this.CD
!==A.jV))&&!this.Aaq)&&!!font){var Br=this.J3;var leading=font.Leading;var Iq=this.
CD;var AJC=this.Ajz();if(((Br&0x80)===0x80)){if(AJC)Br=(Br&~0x80)|0x4;else Br=(Br&
~0x80)|0x1;}if(this.So>0)leading=(this.So-font.Ascent)-font.Descent;var AzY=(font.
Ascent+font.Descent)+leading;var J0=Iq.charCodeAt(0)||0;var Alm=((height+leading
)/AzY)|0;var AZQ=false;var AIm=false;if(Alm<=0)Alm=1;if(J0>Alm){var A$=0;var AzZ=
0;var AJA=J0-1;var KU;var Nj=Iq.length;var tmp=A.jV;if(!!(Br&0x110)&&!!(Br&0x28)
)Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;if(((Br&0x20)===0x20))AzZ=J0-Alm;else if(((
Br&0x10)===0x10)||((Br&0x100)===0x100)){AzZ=((J0-Alm)/2)|0;AJA=(AzZ+Alm)-1;}else
AJA=Alm-1;AZQ=AzZ>0;AIm=AJA<(J0-1);for(KU=1;A$<AzZ;A$=A$+1)KU=KU+(Iq.charCodeAt(
KU)||0);if(AIm)for(Nj=KU;A$<AJA;A$=A$+1)Nj=Nj+(Iq.charCodeAt(Nj)||0);if(AZQ){var
IN=Iq.charCodeAt(KU)||0;tmp=(He+A.abW(Iq,KU,IN))+He;tmp=A.abQ(tmp,0,(IN+2)&0xFFFF
);KU=KU+IN;if((tmp.charCodeAt(IN)||0)===0x0A){tmp=A.abQ(tmp,IN,0xFEFF);tmp=A.abQ(
tmp,IN+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Iq,KU,Nj-KU);if(AIm&&(
Nj>=KU)){var IN=Iq.charCodeAt(Nj)||0;var Qj=(He+A.abW(Iq,Nj,IN))+He;Qj=A.abQ(Qj,
0,(IN+2)&0xFFFF);Qj=A.abQ(Qj,1,0xFEFF);if((Qj.charCodeAt(IN)||0)===0x0A){Qj=A.abQ(
Qj,IN,0xFEFF);Qj=A.abQ(Qj,IN+1,0x0A);}if((Qj.charCodeAt(2)||0)===0x0A){Qj=A.abQ(
Qj,2,0xFEFF);Qj=A.abQ(Qj,1,0x0A);}else Qj=A.abQ(Qj,1,0xFEFF);tmp=tmp+Qj;}Iq=String.
fromCharCode(Alm&0xFFFF)+tmp;}var A$=0;var inx=1;var AJa=width-(this.I0*2);if(this.
Ae1&&(this.Ace>0))AJa=this.Ace;J0=Iq.charCodeAt(0)||0;for(;A$<J0;A$=A$+1){var AlE=
AZQ&&!A$;var AlF=AIm&&(A$===(J0-1));var WZ=false;var W0=false;var AtA=AJC;if((AJC&&
AlE)&&!AlF){AlE=false;AlF=true;}else if((AJC&&AlF)&&!AlE){AlF=false;AlE=true;}var
Xi=inx+1;var IN=Iq.charCodeAt(inx)||0;var KU=Xi;var Nj=(Xi+IN)-2;var A0C=-1;var A0D=-
1;if(!this.Ae1&&(font.X2(Iq,Xi,IN-1)>AJa)){var Aoi=Br;if(((Aoi&0x2)===0x2)&&!!(Aoi&
0x5))Aoi&=~0x2;if(((Aoi&0x2)===0x2))Aoi&=~0x5;if(((Aoi&0x4)===0x4))WZ=true;else if(((
Aoi&0x2)===0x2)){WZ=true;W0=true;}else W0=true;}if((Iq.charCodeAt(KU)||0)===0x0A
)KU=KU+1;if((Iq.charCodeAt(Nj)||0)===0x0A)Nj=Nj-1;while(WZ&&((Iq.charCodeAt(KU)||
0)===0xFEFF))KU=KU+1;while(W0&&((Iq.charCodeAt(Nj)||0)===0xFEFF))Nj=Nj-1;WZ=WZ&&
!AlF;W0=W0&&!AlE;while((((WZ||W0)||AlE)||AlF)&&(KU<Nj)){if((WZ&&(AtA||!W0))||AlE
){if(A0C>0)Iq=A.abQ(Iq,A0C,0xFEFF);Iq=A.abQ(Iq,KU,0x2026);A0C=KU;KU=KU+1;AtA=!AtA;
AlE=false;if(font.X2(Iq,Xi,IN-1)<=AJa){WZ=false;W0=false;}else WZ=WZ||!W0;}if((W0&&(
!AtA||!WZ))||AlF){if(A0D>0)Iq=A.abQ(Iq,A0D,0xFEFF);Iq=A.abQ(Iq,Nj,0x2026);A0D=Nj;
Nj=Nj-1;AtA=!AtA;AlF=false;if(font.X2(Iq,Xi,IN-1)<=AJa){WZ=false;W0=false;}else W0=
W0||!WZ;}}inx=inx+IN;}this.AlN=[font.A41(Iq),((Iq.charCodeAt(0)||0)*AzY)-leading
];this.CD=Iq;}if(this.Aaq&&(this.CD!==A.jV)){var Atn=[this.I0,0];this.T=this.T|0x2000;
this.H(A.abg(A.aaT(this.Da(),Atn),this.Bp));this.T=this.T&~0x2000;}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([this,this.Ail],this);},BjG:function(
E){if(E===this.AMI)return;this.AMI=E;this.CD=A.jV;this.HQ=false;A.pe([this,this.
OY],this);},HG:function(E){if(E<0)E=0;if(this.I0===E)return;this.I0=E;this.CD=A.
jV;this.HQ=false;A.pe([this,this.OY],this);},BkU:function(E){var B;if(E<0)E=0;if(
this.So===E)return;this.So=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.
M);if(this.XW){this.CD=A.jV;this.HQ=false;A.pe([this,this.OY],this);}if(this.Aaq&&
this.HQ)this.H(A.abg(this.Da(),this.Bp));if(this.HQ)A.pe([this,this.Ail],this);}
,BjF:function(E){if(E===this.XW)return;this.XW=E;if(((this.Ae1&&!!!this.Ace)||E)||
!!this.Ei)this.T=this.T&~0x100;else this.T=this.T|0x100;this.CD=A.jV;this.HQ=false;
A.pe([this,this.OY],this);},QN:function(E){if(A.aa0(E,this.Ei))return;this.Ei=E;
if(((!!!this.Ace&&this.Ae1)||!!E)||this.XW)this.T=this.T&~0x100;else this.T=this.
T|0x100;},IZ:function(E){if(E===this.Aaq)return;this.Aaq=E;if(E&&this.XW){this.CD=
A.jV;this.HQ=false;A.pe([this,this.OY],this);}if(E&&this.HQ){var Atn=[this.I0,0];
this.T=this.T|0x2000;this.H(A.abg(A.aaT(this.Da(),Atn),this.Bp));this.T=this.T&~
0x2000;}},Bk$:function(E){if(E<0)E=0;if(E===this.Ace)return;this.Ace=E;if(this.Ae1&&
this.HQ){this.CD=A.jV;this.HQ=false;A.pe([this,this.OY],this);}if(((!!!E&&this.Ae1
)||this.XW)||!!this.Ei)this.T=this.T&~0x100;else this.T=this.T|0x100;},KI:function(
E){if(E===this.Ae1)return;this.Ae1=E;if(this.HQ){this.CD=A.jV;this.HQ=false;A.pe([
this,this.OY],this);}if(((E&&!!!this.Ace)||this.XW)||!!this.Ei)this.T=this.T&~0x100;
else this.T=this.T|0x100;},Gc:function(E){var B;if(A.aaX(E,this.Bp))return;this.
Bp=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);if(this.HQ)A.pe([this
,this.Ail],this);},A2:function(E){var B;if(E===this.J3)return;this.J3=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);if(this.XW){this.CD=A.jV;this.HQ=false;
A.pe([this,this.OY],this);}if(this.HQ)A.pe([this,this.Ail],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CD=A.jV;this.HQ=false;A.pe([this,this.
OY],this);},S:function(E){if(E===this.B3)return;this.B3=E;this.CD=A.jV;this.HQ=false;
A.pe([this,this.OY],this);},L:function(E){var B;if(E===this.AP)return;this.AP=E;
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Aj:function(E){if(E)this.
Cs(0x400,0x0);else this.Cs(0x0,0x400);},Fe:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},Ajz:function(
){if(!this.HQ)this.Xh(this);if(!this.N3)return false;var result=false;var bidi=this.
N3;result=A.v2(bidi);return result;},BgZ:function(){if(!this.HQ)this.Xh(this);if(
!this.N3)return false;var result=false;var bidi=this.N3;result=A.zZ(bidi);return result;
},AFA:function(aIndex){if(((this.String===A.jV)||!this.B3)||this.XW)return BC;if(
!this.HQ)this.Xh(this);if(aIndex<0)aIndex=0;var BwV=(this.CD.charCodeAt(0)||0)-1;
var L7=this.CD.charCodeAt(1)||0;var inx=1;var Aiw=2;var A$=0;var col=-1;var CM=true;
aIndex=aIndex+2;while((A$<BwV)&&((inx+L7)<=aIndex)){inx=inx+L7;A$=A$+1;Aiw=Aiw+1;
aIndex=aIndex+1;L7=this.CD.charCodeAt(inx)||0;}if(aIndex>(inx+L7))aIndex=inx+L7;
if(!!this.N3)aIndex=(inx+this.Bvo(this.N3,(inx+1)-Aiw,(inx+L7)-Aiw,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Im=this.CD.charCodeAt(inx+1)||0;if(CM)col=col+
1;CM=(Im!==0xFEFF)&&(Im!==0x0A);}return[col,A$];},Anm:function(An_){if(((this.String===
A.jV)||!this.B3)||this.XW)return 0;if(!this.HQ)this.Xh(this);var A$=An_[1];var col=
An_[0];var inx=1;var Aiw=2;var J0=this.CD.charCodeAt(0)||0;var L7=this.CD.charCodeAt(
1)||0;if(A$>=J0){A$=J0-1;col=this.CD.length;}if(A$<0){A$=0;col=0;}if(col<0)col=0;
while((A$>0)&&(L7>0)){inx=inx+L7;A$=A$-1;Aiw=Aiw+1;L7=this.CD.charCodeAt(inx)||0;
}var W8=inx;var AJB=(inx-Aiw)+1;var Apo=(AJB+L7)-1;var AzL=false;while((col>=0)&&(
L7>1)){var Im=this.CD.charCodeAt(inx+1)||0;inx=inx+1;L7=L7-1;AzL=(Im===0xFEFF)||(
Im===0x0A);if(!AzL){col=col-1;W8=inx;}}if((!AzL&&(col>=0))&&((this.CD.charCodeAt(
inx+1)||0)===0x00))AzL=true;if(AzL)W8=W8+1;W8=W8-Aiw;if(!!this.N3)W8=AJB+this.Bvp(
this.N3,AJB,Apo,W8-AJB);return W8;},ASk:function(KQ){var B;if((this.String===A.jV
)||!this.B3)return BC;if(!this.HQ)this.Xh(this);var AE=this.Da();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BC;var font=this.B3;var Br=this.J3;var J0=this.CD.charCodeAt(
0)||0;var leading=font.Leading;if(KQ[1]<AE[1])KQ=[KQ[0],AE[1]];if(KQ[1]>=AE[3])KQ=[
KQ[0],AE[3]-1];if(this.So>0)leading=(this.So-font.Ascent)-font.Descent;var Aaa=(
font.Ascent+font.Descent)+leading;var A$=((KQ[1]-AE[1])/Aaa)|0;var Ns=this.ABV(A$
);var L7=Ns.length;var OV=false;if(((Br&0x80)===0x80)){if(this.Ajz())Br=(Br&~0x80
)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)&&(A$<(J0-1)))OV=true;if((OV&&(
Ns.indexOf(String.fromCharCode(0x20),0)<0))&&(Ns.indexOf(String.fromCharCode(0xA0
),0)<0))OV=false;if(OV){var inx=1;var Apn=A$;while(Apn>0){inx=inx+(this.CD.charCodeAt(
inx)||0);Apn=Apn-1;}if(((this.CD.charCodeAt(inx+1)||0)===0x0A)||((this.CD.charCodeAt((
inx+(this.CD.charCodeAt(inx)||0))-1)||0)===0x0A))OV=false;}var AlG=0;var Ef=0;if(
OV)AlG=AE[2]-AE[0];else if(((Br&0x4)===0x4))Ef=(AE[2]-AE[0])-font.X2(Ns,0,L7);else
if(((Br&0x2)===0x2))Ef=(((AE[2]-AE[0])/2)|0)-((font.X2(Ns,0,L7)/2)|0);var col=font.
BgB(Ns,0,L7,(KQ[0]-AE[0])-Ef,AlG);if(col<0)col=0;return[col,A$];},AeD:function(An_
){var B;if((this.String===A.jV)||!this.B3)return BC;if(!this.HQ)this.Xh(this);var
J0=this.CD.charCodeAt(0)||0;var font=this.B3;var Br=this.J3;var A$=An_[1];var col=
An_[0];if(A$>=J0){A$=J0-1;col=this.CD.length;}if(A$<0){A$=0;col=0;}var Ns=this.ABV(
A$);var L7=Ns.length;var AE=this.Da();var OV=false;var leading=font.Leading;if(((
Br&0x80)===0x80)){if(this.Ajz())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&
0x40)===0x40)&&(A$<(J0-1)))OV=true;if((OV&&(Ns.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Ns.indexOf(String.fromCharCode(0xA0),0)<0))OV=false;if(OV){var inx=1;var
Apn=A$;while(Apn>0){inx=inx+(this.CD.charCodeAt(inx)||0);Apn=Apn-1;}if(((this.CD.
charCodeAt(inx+1)||0)===0x0A)||((this.CD.charCodeAt((inx+(this.CD.charCodeAt(inx
)||0))-1)||0)===0x0A))OV=false;}if(this.So>0)leading=(this.So-font.Ascent)-font.
Descent;var C$=(AE[1]+(A$*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
AlG=0;var Ef=AE[0];if(OV)AlG=AE[2]-AE[0];else if(((Br&0x4)===0x4))Ef=AE[2]-font.
X2(Ns,0,L7);else if(((Br&0x2)===0x2))Ef=(Ef+(((AE[2]-AE[0])/2)|0))-((font.X2(Ns,
0,L7)/2)|0);var pos=font.Bgx(Ns,0,L7,col,AlG);if(pos<0)pos=0;return[Ef+pos,C$];}
,ANs:function(Ac){var B;if((this.String===A.jV)||!this.B3)return EW;if(!this.HQ)
this.Xh(this);var J0=this.CD.charCodeAt(0)||0;var font=this.B3;if((Ac<0)||((Ac>=
J0)&&(Ac>0)))return EW;var Br=this.J3;var inx=1;var leading=font.Leading;var A_=
this.M;var width=A_[2]-A_[0];var height=A_[3]-A_[1];width=width-(this.I0*2);if(((
Br&0x80)===0x80)){if(this.Ajz())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.
So>0)leading=(this.So-font.Ascent)-font.Descent;var C$=Ac*((font.Ascent+font.Descent
)+leading);var Ef=0;while(Ac>0){inx=inx+(this.CD.charCodeAt(inx)||0);Ac=Ac-1;}var
Az0=(this.CD.charCodeAt(inx)||0)-1;var BdA=font.X2(this.CD,inx+1,Az0);var A1$=font.
A4_(this.CD,inx+1,Az0);var App=BdA;var Aaa=font.Ascent+font.Descent;var AAd=(J0*((
font.Ascent+font.Descent)+leading))-leading;if(!J0)AAd=Aaa;if((((this.CD.charCodeAt((
inx+Az0)+1)||0)===0x00)||((this.CD.charCodeAt(inx+Az0)||0)===0x0A))||((this.CD.charCodeAt(
inx+1)||0)===0x0A))Br=Br&~0x40;if(((Br&0x40)===0x40)){var Apo=(inx+1)+Az0;var Ayb=
this.CD.indexOf(String.fromCharCode(0x20),inx+1);var Ayc=this.CD.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ayb>=0)&&(Ayb<Apo))||((Ayc>=0)&&(Ayc<Apo)))App=width;
}if((!!(Br&0x110)&&!!(Br&0x28))&&(AAd>height))Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;
if((((Br&0x2)===0x2)&&!!(Br&0x5))&&(App>width))Br&=~0x2;if(((Br&0x2)===0x2))Br&=
~0x5;if(((Br&0x4)===0x4))Ef=width-App;else if(((Br&0x2)===0x2))Ef=((width/2)|0)-((
App/2)|0);if(((Br&0x20)===0x20))C$=C$+(height-AAd);else if(((Br&0x100)===0x100))
C$=((C$+((height/2)|0))-((AAd/2)|0))+(((this.B3.Descent-this.B3.Ascent)/2)|0);else
if(((Br&0x10)===0x10))C$=(C$+((height/2)|0))-((AAd/2)|0);Ef=(Ef+A1$[0])+this.I0;
App=(App+(A1$[2]-A1$[0]))-BdA;var B0;{var Bc5=[A_[0]+Ef,A_[1]+C$];B0=[].concat(Bc5
,A.abf(Bc5,[App,Aaa]));}return A.abh(B0,this.Bp);},ABV:function(Ac){if((this.String===
A.jV)||!this.B3)return A.jV;if(!this.HQ)this.Xh(this);var J0=this.CD.charCodeAt(
0)||0;var inx=1;if((!this.B3||(Ac<0))||(Ac>=J0))return A.jV;while(Ac>0){inx=inx+(
this.CD.charCodeAt(inx)||0);Ac=Ac-1;}var Xi=inx;var As5=inx+(this.CD.charCodeAt(
inx)||0);var Im=0x00;do{Xi=Xi+1;Im=this.CD.charCodeAt(Xi)||0;}while(((Im===0xFEFF
)||(Im===0x0A))&&(Xi<=As5));do{As5=As5-1;Im=this.CD.charCodeAt(As5)||0;}while(((
Im===0xFEFF)||(Im===0x0A))&&(Xi<=As5));var Ns=A.abW(this.CD,Xi,(As5-Xi)+1);var AoQ;
for(AoQ=Ns.indexOf(String.fromCharCode(0xFEFF),0);AoQ>=0;AoQ=Ns.indexOf(String.fromCharCode(
0xFEFF),AoQ+1)){var W8=AoQ+1;while((Ns.charCodeAt(W8)||0)===0xFEFF)W8=W8+1;Ns=A.
ab1(Ns,AoQ,W8-AoQ);}return Ns;},Da:function(){var B;if((this.String===A.jV)||!this.
B3)return EW;if(!this.HQ)this.Xh(this);if(this.CD===A.jV)return EW;var leading=this.
B3.Leading;var AzY=(this.B3.Ascent+this.B3.Descent)+this.B3.Leading;if(this.So>0
){leading=(this.So-this.B3.Ascent)-this.B3.Descent;AzY=this.So;}if(A.aaX(this.AlN
,BC))this.AlN=[this.B3.A41(this.CD),this.AlN[1]];this.AlN=[this.AlN[0],((this.CD.
charCodeAt(0)||0)*AzY)-leading];var Br=this.J3;var A_=this.M;var Atn=this.I0;var
width=A_[2]-A_[0];var height=A_[3]-A_[1];var C_=[Atn,0,width-Atn,height];var B0=[
].concat(C_.slice(0,2),A.abf(C_.slice(0,2),this.AlN));if(((Br&0x80)===0x80)){if(
this.Ajz())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)){var W_=
this.Ace;if(W_<=0)W_=width-(this.I0*2);if(W_<0)W_=0;if(W_>(B0[2]-B0[0]))B0=A.abL(
B0,W_);}if((!!(Br&0x110)&&!!(Br&0x28))&&((B0[3]-B0[1])>(C_[3]-C_[1])))Br&=~0x110;
if(!!(Br&0x110))Br&=~0x28;if((((Br&0x2)===0x2)&&!!(Br&0x5))&&((B0[2]-B0[0])>(C_[
2]-C_[0])))Br&=~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if((B0[2]-B0[0])!==(C_[2]-C_[0]
)){if(((Br&0x4)===0x4))B0=A.abM(B0,C_[2]-(B0[2]-B0[0]));else if(((Br&0x2)===0x2)
)B0=A.abM(B0,(C_[0]+(((C_[2]-C_[0])/2)|0))-(((B0[2]-B0[0])/2)|0));}if((B0[3]-B0[
1])!==(C_[3]-C_[1])){if(((Br&0x20)===0x20))B0=A.abO(B0,C_[3]-(B0[3]-B0[1]));else
if(((Br&0x100)===0x100))B0=A.abO(B0,((C_[1]+(((C_[3]-C_[1])/2)|0))-(((B0[3]-B0[1
])/2)|0))+(((this.B3.Descent-this.B3.Ascent)/2)|0));else if(((Br&0x10)===0x10))B0=
A.abO(B0,(C_[1]+(((C_[3]-C_[1])/2)|0))-(((B0[3]-B0[1])/2)|0));}B0=A.abh(B0,A_.slice(
0,2));return A.abh(B0,this.Bp);},_Init:function(aArg){A.Core.Ek._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.K6();this.__proto__=A.Core.Ek;
A.Core.Ek._Done.call(this);},_Mark:function(D){var B;A.Core.Ek._Mark.call(this,D
);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ei)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.At7={attrString:null,AttrSet:
null,String:A.jV,J3:0x12,J7:function(CU,aClip,aOffset,Ce,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Da();Ce=Ce+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CU.BfH(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,(Ce
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.T&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.OY],this);}A.Core.Ek.H.call(this,E);A.pe([this,this.Ail],this
);},Ail:function(G){},Xh:function(G){var B;var AKc;AKc=(B=this.M)[2]-B[0];if(AKc<
0)AKc=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A3l
,0);if(!!this.attrString)this.attrString.Bln(this.AttrSet,this.String,AKc,false);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([this,this.Ail],this);
},OY:function(G){A.pe([this,this.Xh],this);},Bdu:function(G){var B;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},A2:function(E){var B;E&=~0x140;if(E===this.
J3)return;this.J3=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([
this,this.Ail],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.OY],this);},A7I:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bdu],this.AttrSet,0);A.z9([this,this.OY
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bdu],this.AttrSet,0);A.zV([this,this.OY],this.AttrSet,1);}A.pe([this,this.
OY],this);},Da:function(){var B;if((this.String===A.jV)||!this.AttrSet)return EW;
if(!this.attrString)this.Xh(this);if(!this.attrString)return EW;var Br=this.J3;var
CY=this.attrString.BgC();var C_=A.aaT(this.M,BC);var B0=[].concat(C_.slice(0,2),
A.abf(C_.slice(0,2),CY));if(!CY[0]||!CY[1])return EW;if(((Br&0x80)===0x80)){if(this.
attrString.Ajz())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((B0[2]-B0[0])!==(C_[
2]-C_[0])){if(((Br&0x4)===0x4))B0=A.abM(B0,C_[2]-(B0[2]-B0[0]));else if(((Br&0x2
)===0x2))B0=A.abM(B0,(C_[0]+(((C_[2]-C_[0])/2)|0))-(((B0[2]-B0[0])/2)|0));}if((B0[
3]-B0[1])!==(C_[3]-C_[1])){if(((Br&0x20)===0x20))B0=A.abO(B0,C_[3]-(B0[3]-B0[1])
);else if(((Br&0x10)===0x10))B0=A.abO(B0,(C_[1]+(((C_[3]-C_[1])/2)|0))-(((B0[3]-
B0[1])/2)|0));}return B0;},_Init:function(aArg){A.Core.Ek._Init.call(this,aArg);
this.__proto__=C.At7;this.T=0x3;},_Mark:function(D){var B;A.Core.Ek._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.AnH={Ah7:
null,Ft:null,AhT:0,AhS:0,UI:A.wf,Cf:A.abi(4,3,0,null),AFw:A.wf,S2:0,Ao3:0,Ke:function(
E){if(A.aaX(E,this.Ki))return;A.Core.Y2.Ke.call(this,E);this.Cf.Set(3,0,E[0]);this.
Cf.Set(3,1,E[1]);this.Cf.Set(3,2,1);this.S2=0x45;this.Ft=null;A.pe([this,this.AiE
],this);},Kd:function(E){if(A.aaX(E,this.Mr))return;A.Core.Y2.Kd.call(this,E);this.
Cf.Set(2,0,E[0]);this.Cf.Set(2,1,E[1]);this.Cf.Set(2,2,1);this.S2=0x45;this.Ft=null;
A.pe([this,this.AiE],this);},DK:function(E){if(A.aaX(E,this.Et))return;A.Core.Y2.
DK.call(this,E);this.Cf.Set(1,0,E[0]);this.Cf.Set(1,1,E[1]);this.Cf.Set(1,2,1);this.
S2=0x45;this.Ft=null;A.pe([this,this.AiE],this);},DY:function(E){if(A.aaX(E,this.
Ej))return;A.Core.Y2.DY.call(this,E);this.Cf.Set(0,0,E[0]);this.Cf.Set(0,1,E[1]);
this.Cf.Set(0,2,1);this.S2=0x45;this.Ft=null;A.pe([this,this.AiE],this);},AZI:function(
){return;},AiE:function(G){var B;this.Ah7=null;if(this.S2===0x00)return;if(this.
S2===0x45){var KV=A._NewObject(A.Graphics.Aw0,0);KV=KV.AMl(this.Cf.Get(0,0),this.
Cf.Get(0,1),this.Cf.Get(1,0),this.Cf.Get(1,1),this.Cf.Get(2,0),this.Cf.Get(2,1),
this.Cf.Get(3,0),this.Cf.Get(3,1));if(!!KV){KV.AAY(0,0);this.Cf.Set(0,2,KV.Ut*240
);KV.AAY(1,0);this.Cf.Set(1,2,KV.Ut*240);KV.AAY(1,1);this.Cf.Set(2,2,KV.Ut*240);
KV.AAY(0,1);this.Cf.Set(3,2,KV.Ut*240);}this.AZI();}if((((this.S2===0x4D)&&!!this.
Ft)&&!!this.UI[0])&&!!this.UI[1]){var Aiz=[].concat(BC,this.UI);var Aiy=this.AFw;
var Afx=Aiz[0]-Aiy[0];var Aw=Aiz[2]-Aiy[0];var D1=Aiz[1]-Aiy[1];var Rd=Aiz[3]-Aiy[
1];this.Ft.Aey(Afx,D1);this.Cf.Set(0,0,this.Ft.PN+this.AhS);this.Cf.Set(0,1,this.
Ft.PO+this.AhT);this.Cf.Set(0,2,this.Ft.Ut);this.Ft.Aey(Aw,D1);this.Cf.Set(1,0,this.
Ft.PN+this.AhS);this.Cf.Set(1,1,this.Ft.PO+this.AhT);this.Cf.Set(1,2,this.Ft.Ut);
this.Ft.Aey(Aw,Rd);this.Cf.Set(2,0,this.Ft.PN+this.AhS);this.Cf.Set(2,1,this.Ft.
PO+this.AhT);this.Cf.Set(2,2,this.Ft.Ut);this.Ft.Aey(Afx,Rd);this.Cf.Set(3,0,this.
Ft.PN+this.AhS);this.Cf.Set(3,1,this.Ft.PO+this.AhT);this.Cf.Set(3,2,this.Ft.Ut);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Ej=[(this.
Cf.Get(0,0)+0.5)|0,(this.Cf.Get(0,1)+0.5)|0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(
this.Cf.Get(1,1)+0.5)|0];this.Mr=[(this.Cf.Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5
)|0];this.Ki=[(this.Cf.Get(3,0)+0.5)|0,(this.Cf.Get(3,1)+0.5)|0];this.AZI();}this.
Ao3=this.S2;this.S2=0x00;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));},BkZ:function(E){if(A.aaX(E,this.AFw))return;this.AFw=E;if((this.Ao3!==0x45)&&(
this.S2===0x00)){this.S2=this.Ao3;A.pe([this,this.AiE],this);}},AqD:function(E6){
var B;if(!!!this.Ah7){this.Ah7=A._NewObject(A.Graphics.A5x,0);this.Ah7.AMl(this.
Cf.Get(0,0),this.Cf.Get(0,1),this.Cf.Get(1,0),this.Cf.Get(1,1),this.Cf.Get(2,0),
this.Cf.Get(2,1),this.Cf.Get(3,0),this.Cf.Get(3,1));}if(!this.Ah7.Aey(E6))return BC;
var Apu=[].concat(BC,this.UI);var Ef=this.Ah7.PN*(Apu[2]-Apu[0]);var C$=this.Ah7.
PO*(Apu[3]-Apu[1]);return A.abf([Ef|0,C$|0],Apu.slice(0,2));},A9S:function(A$J,LZ
){var B;this.Ah7=null;if(!LZ)throw new Error(I7);if(!this.Ft)this.Ft=A._NewObject(
A.Graphics.Aw0,0);this.Ft.BeQ(LZ);this.AhS=A$J[0];this.AhT=A$J[1];this.Ao3=0x4D;
this.S2=0x00;if(!this.UI[0]||!this.UI[1])return;var Aiz=[].concat(BC,this.UI);var
Aiy=this.AFw;var Afx=Aiz[0]-Aiy[0];var Aw=Aiz[2]-Aiy[0];var D1=Aiz[1]-Aiy[1];var
Rd=Aiz[3]-Aiy[1];this.Ft.Aey(Afx,D1);this.Cf.Set(0,0,this.Ft.PN+this.AhS);this.Cf.
Set(0,1,this.Ft.PO+this.AhT);this.Cf.Set(0,2,this.Ft.Ut);this.Ft.Aey(Aw,D1);this.
Cf.Set(1,0,this.Ft.PN+this.AhS);this.Cf.Set(1,1,this.Ft.PO+this.AhT);this.Cf.Set(
1,2,this.Ft.Ut);this.Ft.Aey(Aw,Rd);this.Cf.Set(2,0,this.Ft.PN+this.AhS);this.Cf.
Set(2,1,this.Ft.PO+this.AhT);this.Cf.Set(2,2,this.Ft.Ut);this.Ft.Aey(Afx,Rd);this.
Cf.Set(3,0,this.Ft.PN+this.AhS);this.Cf.Set(3,1,this.Ft.PO+this.AhT);this.Cf.Set(
3,2,this.Ft.Ut);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping()
);this.Ej=[(this.Cf.Get(0,0)+0.5)|0,(this.Cf.Get(0,1)+0.5)|0];this.Et=[(this.Cf.
Get(1,0)+0.5)|0,(this.Cf.Get(1,1)+0.5)|0];this.Mr=[(this.Cf.Get(2,0)+0.5)|0,(this.
Cf.Get(2,1)+0.5)|0];this.Ki=[(this.Cf.Get(3,0)+0.5)|0,(this.Cf.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.AZI();},_Init:
function(aArg){A.Core.Y2._Init.call(this,aArg);(this.Cf=[]).__proto__=C.AnH.Cf;this.
__proto__=C.AnH;this.T=0x3;},_Mark:function(D){var B;A.Core.Y2._Mark.call(this,D
);if((B=this.Ah7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ft)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.ATU={Fh:null,bitmap:null
,O:null,GT:255,J7:function(CU,aClip,aOffset,Ce,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nl=aOffset[0];var Nm=aOffset[1];var AE=[].concat(BC,this.
UI);aBlend=aBlend&&((this.T&0x2)===0x2);Ce=Ce+1;var Bb5;var Bb6;var Bb7;var Bb8;
var Bw4=this.GT;Bb5=Bb6=Bb7=Bb8=Bw4;var Ak0=255|(255<<8)|(255<<16)|((((Ce*Bb5)>>
8)&0xFF)<<24);var Ak1=255|(255<<8)|(255<<16)|((((Ce*Bb6)>>8)&0xFF)<<24);var Bvq=
255|(255<<8)|(255<<16)|((((Ce*Bb7)>>8)&0xFF)<<24);var Bvr=255|(255<<8)|(255<<16)|((((
Ce*Bb8)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(EW,aOffset));CU.Ahi(aClip,this.bitmap
,0,this.Cf.Get(0,0)+Nl,this.Cf.Get(0,1)+Nm,this.Cf.Get(0,2),this.Cf.Get(1,0)+Nl,
this.Cf.Get(1,1)+Nm,this.Cf.Get(1,2),this.Cf.Get(2,0)+Nl,this.Cf.Get(2,1)+Nm,this.
Cf.Get(2,2),this.Cf.Get(3,0)+Nl,this.Cf.Get(3,1)+Nm,this.Cf.Get(3,2),AE,Ak0,Ak1,
Bvq,Bvr,aBlend,true);},GL:function(CH){if(!this.O||!this.Fh)return null;var BM=(
A.Core.AdE.isPrototypeOf(CH)?CH:null);var DV=(A.Core.Ap1.isPrototypeOf(CH)?CH:null
);if(!BM&&!DV)return null;var Fj=BC;var BS=this.Fh.Ab;while(!!BS&&(BS!==this.O)){
Fj=A.abe(Fj,BS.M.slice(0,2));BS=BS.Ab;}var X=this.Fh;if(!!BM&&!BM.Down)this.Fh=null;
if(!!BM){BM.HT=A.abf(this.AqD(BM.HT),Fj);BM.NG=A.abf(this.AqD(BM.NG),Fj);return X.
GL(BM);}if(!!DV){var Bw8=A.abf(this.AqD(A.abe(DV.HT,DV.Dx)),Fj);DV.HT=A.abf(this.
AqD(DV.HT),Fj);DV.NG=A.abf(this.AqD(DV.NG),Fj);DV.Dx=A.abe(DV.HT,Bw8);return X.GL(
DV);}return C.AnH.GL.call(this,CH);},XR:function(C8,BD,N1,ZK,Acw,Acv){var B;if(!
this.O||!((this.O.T&0x18)===0x18))return null;var pos=A.aaI(C8);pos=this.AqD(pos
);var Apu=[].concat(BC,this.UI);if(!A.wa(Apu,pos))return null;var Js=this.O.XR(A.
abh(A.abh([0,0,C8[2]-C8[0],C8[3]-C8[1]],pos),this.O.M.slice(0,2)),BD,N1,ZK,null,
Acv);if(!!Js)this.Fh=Js.Cd;else this.Fh=null;if(!!this.Fh)return A._NewObject(A.
Core.Auf,0).Initialize(this,BC);return null;},Ro:function(G){var B;var Bb9=this.
UI;if(!!this.O)this.bitmap=this.O.Fq;else this.bitmap=null;if(!!this.bitmap)this.
UI=this.bitmap.FrameSize;else this.UI=BC;if(((A.aaX(Bb9,this.UI)||((this.Ao3===0x45
)&&(this.S2===0x00)))&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if(((this.Ao3!==0x45)&&(this.S2===0x00))&&!A.aaX(Bb9,this.UI)){this.S2=this.Ao3;
A.pe([this,this.AiE],this);}},Ds:function(E){var B;if(E===this.GT)return;this.GT=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());},Bj_:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ab))throw new Error(IH);if(!!this.O){A.
z9([this,this.Ro],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.zV([this,this.Ro
],E,0);this.bitmap=E.Fq;}this.Ro(this);},Avy:function(){return this.GT;},_Init:function(
aArg){C.AnH._Init.call(this,aArg);this.__proto__=C.ATU;},_Mark:function(D){var B;
C.AnH._Mark.call(this,D);if((B=this.Fh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.AdP={Hn:null,AP:0xFFFFFFFF,Dx:A.wf
,AM8:false,K6:function(){this.AZ1();},J7:function(CU,aClip,aOffset,Ce,aBlend){if(
!this.Hn)return;var Dt;var DH;var DC;var DG;var BZ=this.AP;Ce=Ce+1;Dt=DH=DC=DG=BZ;
if(Ce<256){Dt=(Dt&0x00FFFFFF)|((((Ce*((Dt>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF
)|((((Ce*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Ce*((DC>>24)&0xFF
))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Ce*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CU.
AdP(aClip,this.Hn,A.abh(this.M,aOffset),this.AM8,this.Dx,Dt,DH,DG,DC,true,true,0
);},AZ1:function(){return;},AiF:function(G){var B;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if((
!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.M);},Anb:function(E){
var B;if(A.aaX(E,this.Dx))return;this.Dx=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hn)this.Ab.Bd(this.M);},Bj5:function(E){var B;if(E===this.AM8)return;this.
AM8=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.M);},YX:function(
E){var B;if(E===this.Hn)return;if(!!this.Hn)A.z9([this,this.AiF],this.Hn,0);this.
Hn=E;if(!!this.Hn)A.zV([this,this.AiF],this.Hn,0);if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1
);},_Init:function(aArg){A.Core.Ek._Init.call(this,aArg);this.__proto__=C.AdP;},
_Done:function(){this.K6();this.__proto__=A.Core.Ek;A.Core.Ek._Done.call(this);}
,_Mark:function(D){var B;A.Core.Ek._Mark.call(this,D);if((B=this.Hn)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hc={Hn:null,AP:0xFFFFFFFF
,Dx:A.wf,Width:1,K6:function(){this.AZ1();},J7:function(CU,aClip,aOffset,Ce,aBlend
){if(!this.Hn)return;var Dt;var DH;var DC;var DG;var BZ=this.AP;Ce=Ce+1;Dt=DH=DC=
DG=BZ;if(Ce<256){Dt=(Dt&0x00FFFFFF)|((((Ce*((Dt>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&
0x00FFFFFF)|((((Ce*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Ce*((DC>>
24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Ce*((DG>>24)&0xFF))>>8)&0xFF)<<
24);}CU.Hc(aClip,this.Hn,A.abh(this.M,aOffset),false,this.Dx,this.Width,0,0,0,3,
Dt,DH,DG,DC,true,true);},AZ1:function(){return;},AiF:function(G){var B;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.
M);},Anb:function(E){var B;if(A.aaX(E,this.Dx))return;this.Dx=E;if((!!this.Ab&&((
this.T&0x1)===0x1))&&!!this.Hn)this.Ab.Bd(this.M);},NO:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hn)this.Ab.Bd(this.M);},YX:function(E){var B;if(E===this.Hn)return;if(!!this.
Hn)A.z9([this,this.AiF],this.Hn,0);this.Hn=E;if(!!this.Hn)A.zV([this,this.AiF],this.
Hn,0);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Y:function(E){if(E
)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},_Init:function(aArg){A.Core.Ek._Init.call(
this,aArg);this.__proto__=C.Hc;},_Done:function(){this.K6();this.__proto__=A.Core.
Ek;A.Core.Ek._Done.call(this);},_Mark:function(D){var B;A.Core.Ek._Mark.call(this
,D);if((B=this.Hn)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BA8={A25:0x1,A24:0x2,A26:0x4,A29:0x8,A28:0x10,A27:0x20,BCk:0x40,BCl:0x80,BCw:
0x100};C.BCA={A25:0x1,A24:0x2,A26:0x4,A29:0x8,A28:0x10,A27:0x20,BzA:0x40,Bzz:0x80
,BzF:0x100};C.BBK={Normal:0,BCf:1,BCd:2,BCe:3};
C._Init=function(){C.DR.__proto__=A.Core.AjL;C.AI.__proto__=A.Core.Ek;C.Cz.__proto__=
A.Core.Ek;C.NF.__proto__=A.Core.Ek;C.Am.__proto__=A.Core.Ek;C.Text.__proto__=A.Core.
Ek;C.At7.__proto__=A.Core.Ek;C.AnH.__proto__=A.Core.Y2;C.ATU.__proto__=C.AnH;C.AdP.
__proto__=A.Core.Ek;C.Hc.__proto__=A.Core.Ek;};C._ReInit=function(){};C.DB=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */