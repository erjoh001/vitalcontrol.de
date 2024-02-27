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
var Ca=[1,1];var BC=[0,0];var EW=[0,0,0,0];var Hh="\uFEFF";var I8="No matrix to perform 3D transformation";
var IJ="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DR={KA:null,AkN:1,AkM:1,AQ:0xFFFFFFFF,J_:function(CU,aClip,aOffset,Cf,aBlend){var
B;var Af4=this.AkM;var Af5=this.AkN;var Add=A.abf(this.Ek,aOffset);var Ade=A.abf(
this.Eu,aOffset);var Ak7;var Ak8;var B2=this.AQ;if(A.aaX(Add,Ade))return;aBlend=
aBlend&&((this.T&0x2)===0x2);Cf=Cf+1;Ak7=Ak8=B2;if(Cf<256){Ak7=(Ak7&0x00FFFFFF)|((((
Cf*((Ak7>>24)&0xFF))>>8)&0xFF)<<24);Ak8=(Ak8&0x00FFFFFF)|((((Cf*((Ak8>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Af4===1)&&(Af5===1))CU.Aut(aClip,Add,Ade,Ak7,Ak8,aBlend);else
CU.Bg4(aClip,Add,Ade,Af4,Af5,Ak7,Ak8,aBlend);},GetExtent:function(){var Af4=this.
AkM;var Af5=this.AkN;var Add=this.Ek;var Ade=this.Eu;if(((Af4===1)&&(Af5===1))||
A.aaX(Add,Ade))return A.Core.AjV.GetExtent.call(this);var Aig=Af4/2;var Aih=Af5/
2;var AoW=Add[0];var AoX=Add[1];var AoY=Ade[0];var AoZ=Ade[1];var JW=AoY-AoW;var
JX=AoZ-AoX;var IN=Math.sqrt((JW*JW)+(JX*JX));JW=JW/IN;JX=JX/IN;var BbH=AoW+(JX*Aig
);var BbI=AoX-(JW*Aig);var AIV=AoY+(JX*Aih);var AIW=AoZ-(JW*Aih);var AIX=AoY-(JX
*Aih);var AIY=AoZ+(JW*Aih);var AIZ=AoW-(JX*Aig);var AI0=AoX+(JW*Aig);var left=BbH;
var right=BbH;var top=BbI;var bottom=BbI;if(AIV<left)left=AIV;if(AIX<left)left=AIX;
if(AIZ<left)left=AIZ;if(AIV>right)right=AIV;if(AIX>right)right=AIX;if(AIZ>right)
right=AIZ;if(AIW<top)top=AIW;if(AIY<top)top=AIY;if(AI0<top)top=AI0;if(AIW>bottom
)bottom=AIW;if(AIY>bottom)bottom=AIY;if(AI0>bottom)bottom=AI0;var Ay=[left|0,top|
0,right|0,bottom|0];Ay=[].concat(Ay.slice(0,2),A.abf(Ay.slice(2,4),Ca));return Ay;
},Rt:function(G){var B;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping(
));},A9S:function(E){var B;if(E<1)E=1;if(E===this.AkN)return;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.AkN=E;if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Be(this.GetClipping());if(((E!==1)||(this.AkM!==1))&&!this.KA){
this.KA=A.aaL(A.aci.Asi);if(this.KA.OH)A.zV([this,this.Rt],this.KA,0);}if(((E===
1)&&(this.AkM===1))&&!!this.KA){if(this.KA.OH)A.z9([this,this.Rt],this.KA,0);this.
KA=null;}},A9R:function(E){var B;if(E<1)E=1;if(E===this.AkM)return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.AkM=E;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Be(this.GetClipping());if(((E!==1)||(this.AkN!==1))&&!this.
KA){this.KA=A.aaL(A.aci.Asi);if(this.KA.OH)A.zV([this,this.Rt],this.KA,0);}if(((
E===1)&&(this.AkN===1))&&!!this.KA){if(this.KA.OH)A.z9([this,this.Rt],this.KA,0);
this.KA=null;}},NX:function(E){var B;if(E<1)E=1;if((E===this.AkM)&&(E===this.AkN
))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.
AkM=E;this.AkN=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping(
));if((E!==1)&&!this.KA){this.KA=A.aaL(A.aci.Asi);if(this.KA.OH)A.zV([this,this.
Rt],this.KA,0);}if((E===1)&&!!this.KA){if(this.KA.OH)A.z9([this,this.Rt],this.KA
,0);this.KA=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());},Aj:function(E){if(E)this.
Ct(0x400,0x0);else this.Ct(0x0,0x400);},Fd:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},_Init:function(
aArg){A.Core.AjV._Init.call(this,aArg);this.__proto__=C.DR;},_Mark:function(D){var
B;A.Core.AjV._Mark.call(this,D);if((B=this.KA)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AJ={AMG:0xFFFFFFFF,AMH:0xFFFFFFFF,AML:0xFFFFFFFF
,AMK:0xFFFFFFFF,AQ:0xFFFFFFFF,J_:function(CU,aClip,aOffset,Cf,aBlend){var B;var Dv=
this.AMK;var DH=this.AML;var DC=this.AMG;var DG=this.AMH;var B2=this.AQ;aBlend=aBlend&&((
this.T&0x2)===0x2);Cf=Cf+1;if((((Dv===DH)&&(DC===DG))&&(Dv===DC))&&(Dv===0xFFFFFFFF
))Dv=DH=DC=DG=B2;else if(B2!==0xFFFFFFFF){Dv=(Dv&0x00FFFFFF)|((((((Dv>>24)&0xFF)
*(((B2>>24)&0xFF)+1))>>8)&0xFF)<<24);Dv=(Dv&0xFFFFFF00)|((((Dv&0xFF)*((B2&0xFF)+
1))>>8)&0xFF);Dv=(Dv&0xFFFF00FF)|((((((Dv>>8)&0xFF)*(((B2>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dv=(Dv&0xFF00FFFF)|((((((Dv>>16)&0xFF)*(((B2>>16)&0xFF)+1))>>8)&0xFF)<<16);
DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*(((B2>>24)&0xFF)+1))>>8)&0xFF)<<24);DH=(DH&
0xFFFFFF00)|((((DH&0xFF)*((B2&0xFF)+1))>>8)&0xFF);DH=(DH&0xFFFF00FF)|((((((DH>>8
)&0xFF)*(((B2>>8)&0xFF)+1))>>8)&0xFF)<<8);DH=(DH&0xFF00FFFF)|((((((DH>>16)&0xFF)
*(((B2>>16)&0xFF)+1))>>8)&0xFF)<<16);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*(((B2>>
24)&0xFF)+1))>>8)&0xFF)<<24);DC=(DC&0xFFFFFF00)|((((DC&0xFF)*((B2&0xFF)+1))>>8)&
0xFF);DC=(DC&0xFFFF00FF)|((((((DC>>8)&0xFF)*(((B2>>8)&0xFF)+1))>>8)&0xFF)<<8);DC=(
DC&0xFF00FFFF)|((((((DC>>16)&0xFF)*(((B2>>16)&0xFF)+1))>>8)&0xFF)<<16);DG=(DG&0x00FFFFFF
)|((((((DG>>24)&0xFF)*(((B2>>24)&0xFF)+1))>>8)&0xFF)<<24);DG=(DG&0xFFFFFF00)|((((
DG&0xFF)*((B2&0xFF)+1))>>8)&0xFF);DG=(DG&0xFFFF00FF)|((((((DG>>8)&0xFF)*(((B2>>8
)&0xFF)+1))>>8)&0xFF)<<8);DG=(DG&0xFF00FFFF)|((((((DG>>16)&0xFF)*(((B2>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Cf<256){Dv=(Dv&0x00FFFFFF)|((((Cf*((Dv>>24)&0xFF))>>8)&
0xFF)<<24);DH=(DH&0x00FFFFFF)|((((Cf*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF
)|((((Cf*((DC>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cf*((DG>>24)&0xFF
))>>8)&0xFF)<<24);}CU.AuI(aClip,A.abh(this.M,aOffset),Dv,DH,DG,DC,aBlend);},AvR:
function(E){var B;if(E===this.AMG)return;this.AMG=E;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Be(this.M);},AvS:function(E){var B;if(E===this.AMH)return;this.AMH=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},AvU:function(E){var B;
if(E===this.AML)return;this.AML=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(
this.M);},AvT:function(E){var B;if(E===this.AMK)return;this.AMK=E;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Fd:function(){
var B;return((this.T&0x1)===0x1);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.
Ct(0x0,0x1);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.__proto__=
C.AJ;},_className:"Views::Rectangle"};C.Cz={Width:1,AQ:0xFFFFFFFF,J_:function(CU
,aClip,aOffset,Cf,aBlend){var B;var Dv;var DH;var DC;var DG;var B2=this.AQ;aBlend=
aBlend&&((this.T&0x2)===0x2);Cf=Cf+1;Dv=DH=DC=DG=B2;if(Cf<256){Dv=(Dv&0x00FFFFFF
)|((((Cf*((Dv>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((Cf*((DH>>24)&0xFF
))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cf*((DC>>24)&0xFF))>>8)&0xFF)<<24);DG=(
DG&0x00FFFFFF)|((((Cf*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CU.Bg2(aClip,A.abh(this.M
,aOffset),this.Width,Dv,DH,DG,DC,aBlend);},NX:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Be(this.M);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(
0x0,0x1);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.__proto__=C.
Cz;},_className:"Views::Border"};C.NI={timer:null,Al:null,MH:-1,AQ:0xFFFFFFFF,Auu:
0x1F,TE:0,Dq:0,AmY:A.wf,Ve:false,J_:function(CU,aClip,aOffset,Cf,aBlend){var B;var
Nk=this.TE;if(this.MH>=0)Nk=this.MH;if(!this.Al||(Nk>=this.Al.NoOfFrames))return;
this.Al.Update();var Dv;var DH;var DG;var DC;var B2=this.AQ;var J4=(((Cf+1)*255)>>
8)+1;var Od=this.Auu;var Ay=A.abh(this.M,aOffset);var AKl=A.abe([Ay[2]-Ay[0],Ay[
3]-Ay[1]],this.AmY);aBlend=aBlend&&((this.T&0x2)===0x2);Dv=DH=DC=DG=B2;if(J4<256
){Dv=(Dv&0x00FFFFFF)|((((((Dv>>24)&0xFF)*J4)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((
DH>>24)&0xFF)*J4)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J4)>>8)&
0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J4)>>8)&0xFF)<<24);}if(((this.
AmY[0]>0)&&(AKl[0]>0))&&!((Od&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKl[
0];if(((Od&0x1)===0x1)){if(aClip[2]>Ay[2])aClip=A.abN(aClip,Ay[2]);if(d>0)Ay=A.abN(
Ay,Ay[2]+d);Od=Od|0x4;}else if(((Od&0x4)===0x4)){if(aClip[0]<Ay[0])aClip=[].concat(
Ay[0],aClip.slice(1,4));if(d>0)Ay=[].concat(Ay[0]-d,Ay.slice(1,4));Od=Od|0x1;}else{
if(aClip[0]<Ay[0])aClip=[].concat(Ay[0],aClip.slice(1,4));if(aClip[2]>Ay[2])aClip=
A.abN(aClip,Ay[2]);if(d>0){Ay=[].concat(Ay[0]-((d/2)|0),Ay.slice(1,4));Ay=A.abN(
Ay,(Ay[2]+d)-((d/2)|0));}Od=Od|0x5;}}if(((this.AmY[1]>0)&&(AKl[1]>0))&&!((Od&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKl[1];if(((Od&0x2)===0x2)){if(aClip[
3]>Ay[3])aClip=[].concat(aClip.slice(0,3),Ay[3]);if(d>0)Ay=[].concat(Ay.slice(0,
3),Ay[3]+d);Od=Od|0x8;}else if(((Od&0x8)===0x8)){if(aClip[1]<Ay[1])aClip=A.abP(aClip
,Ay[1]);if(d>0)Ay=A.abP(Ay,Ay[1]-d);Od=Od|0x2;}else{if(aClip[1]<Ay[1])aClip=A.abP(
aClip,Ay[1]);if(aClip[3]>Ay[3])aClip=[].concat(aClip.slice(0,3),Ay[3]);if(d>0){Ay=
A.abP(Ay,Ay[1]-((d/2)|0));Ay=[].concat(Ay.slice(0,3),(Ay[3]+d)-((d/2)|0));}Od=Od|
0xA;}}CU.Bg1(aClip,this.Al,Nk,Ay,Od,Dv,DH,DG,DC,aBlend);},Rt:function(G){var B;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},L9:function(G){var B;var Nk=
this.MH;var Tb=0;if(!!this.Al)Tb=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MH<0))&&(Tb>0))this.Dq=this.timer.Bt-(this.TE*this.Al.FrameDelay);if(
!!this.timer&&(Tb>0)){var Au=(this.timer.Bt-this.Dq)|0;Nk=(Au/this.Al.FrameDelay
)|0;if(Au>=Tb){Nk=Nk%this.Al.NoOfFrames;this.Dq=this.timer.Bt-(Au%Tb);}}if(((Nk!==
this.MH)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Be(this.M);this.MH=Nk;if(!Tb&&
!!this.timer){A.z9([this,this.L9],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.
Be(this.M);},Y5:function(E){var B;if(this.Ve===E)return;this.Ve=E;this.MH=-1;if(
!E&&!!this.timer){A.z9([this,this.L9],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.AdW);A.zV([this,this.L9],this.timer,0);A.pe([this,this.
L9],this);}if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},A87:function(
E){var B;if(E===this.Auu)return;this.Auu=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Be(this.M);},Cu:function(E){var B;if(E<0)E=0;if((E===this.TE)&&(this.MH===-1)
)return;this.TE=E;if(!this.timer)this.MH=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Be(this.M);},Ax:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OH)A.z9([this,this.Rt],this.Al,0);this.Al=E;this.MH=-1;if(!!E&&E.OH)A.zV([this,this.
Rt],E,0);if(this.Ve){this.Y5(false);this.Y5(true);}if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Be(this.M);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1
);},A9l:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
AmY))return;this.AmY=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!((this.Auu&0xF)===
0xF))this.Ab.Be(this.M);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.
__proto__=C.NI;},_Mark:function(D){var B;A.Core.El._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.An={timer:null,Al:null,Dq:0,MH:0,AQ:0xFFFFFFFF
,J6:0x12,TE:0,GY:255,Ve:false,AaE:false,J_:function(CU,aClip,aOffset,Cf,aBlend){
var B;var Nk=this.TE;if(this.MH>=0)Nk=this.MH;if(!this.Al||(Nk>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var CZ=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var Dv;var DH;var DG;var DC;var B2=this.AQ;var J4=(((
Cf+1)*this.GY)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);Dv=DH=DC=DG=B2;if(J4<256
){Dv=(Dv&0x00FFFFFF)|((((((Dv>>24)&0xFF)*J4)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((
DH>>24)&0xFF)*J4)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J4)>>8)&
0xFF)<<24);DC=(DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J4)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],CZ))CU.A41(aClip,this.Al,Nk,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),Dv,DH,DG,DC,aBlend);else CU.Bnh(aClip,this.Al,Nk
,A.abh(AE,aOffset),[].concat(BC,CZ),Dv,DH,DG,DC,aBlend,true);},Rt:function(G){var
B;if(((this.AaE&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},L9:function(
G){var B;var Nk=this.MH;var Tb=0;if(!!this.Al)Tb=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MH<0))&&(Tb>0))this.Dq=this.timer.Bt-(this.TE*this.Al.FrameDelay
);if(!!this.timer&&(Tb>0)){var Au=(this.timer.Bt-this.Dq)|0;Nk=(Au/this.Al.FrameDelay
)|0;if(Au>=Tb){Nk=Nk%this.Al.NoOfFrames;this.Dq=this.timer.Bt-(Au%Tb);}}if(((Nk!==
this.MH)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Be(this.M);this.MH=Nk;if(!Tb&&
!!this.timer){A.z9([this,this.L9],this.timer,0);this.timer=null;}},I0:function(E
){if(E===this.AaE)return;this.AaE=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Y5:function(
E){var B;if(this.Ve===E)return;this.Ve=E;this.MH=-1;if(!E&&!!this.timer){A.z9([this
,this.L9],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
AdW);A.zV([this,this.L9],this.timer,0);A.pe([this,this.L9],this);}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.M);},A4:function(E){var B;if(E===this.J6)return;
this.J6=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Cu:function(E){
var B;if(E<0)E=0;if((E===this.TE)&&(this.MH===-1))return;this.TE=E;if(!this.timer
)this.MH=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Ax:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OH)A.z9([this,this.Rt],this.
Al,0);this.Al=E;this.MH=-1;if(!!E&&E.OH)A.zV([this,this.Rt],E,0);if(this.Ve){this.
Y5(false);this.Y5(true);}if(((this.AaE&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},
Dl:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GY)return;this.GY=E;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Aj:function(E){if(E)this.Ct(
0x400,0x0);else this.Ct(0x0,0x400);},Fd:function(){var B;return((this.T&0x1)===0x1
);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},Db:function(){var
B;if(!this.Al)return EW;var Bs=this.J6;var CZ=this.Al.FrameSize;var A$=this.M;var
width=A$[2]-A$[0];var height=A$[3]-A$[1];if(!CZ[0]||!CZ[1])return EW;var C$=[0,0
,width,height];var B3=C$;if(((Bs&0x40)===0x40)){var A2_=((((C$[2]-C$[0])<<16)+((
CZ[0]/2)|0))/CZ[0])|0;var AAl=((((C$[3]-C$[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var AiI=
A2_;if(AAl>AiI)AiI=AAl;B3=A.abL(B3,((CZ[0]*AiI)+32768)>>16);B3=A.abI(B3,((CZ[1]*
AiI)+32768)>>16);}else if(((Bs&0x80)===0x80)){var A2_=((((C$[2]-C$[0])<<16)+((CZ[
0]/2)|0))/CZ[0])|0;var AAl=((((C$[3]-C$[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var AiI=
A2_;if(AAl<AiI)AiI=AAl;B3=A.abL(B3,((CZ[0]*AiI)+32768)>>16);B3=A.abI(B3,((CZ[1]*
AiI)+32768)>>16);}else if(!((Bs&0x100)===0x100))B3=A.abK(B3,CZ);if((B3[2]-B3[0])
!==(C$[2]-C$[0])){if(((Bs&0x4)===0x4))B3=A.abM(B3,C$[2]-(B3[2]-B3[0]));else if(((
Bs&0x2)===0x2))B3=A.abM(B3,(C$[0]+(((C$[2]-C$[0])/2)|0))-(((B3[2]-B3[0])/2)|0));
}if((B3[3]-B3[1])!==(C$[3]-C$[1])){if(((Bs&0x20)===0x20))B3=A.abO(B3,C$[3]-(B3[3
]-B3[1]));else if(((Bs&0x10)===0x10))B3=A.abO(B3,(C$[1]+(((C$[3]-C$[1])/2)|0))-(((
B3[3]-B3[1])/2)|0));}B3=A.abh(B3,A$.slice(0,2));return B3;},Bjq:function(){return this.
AQ;},ARM:function(){return this.TE;},_Init:function(aArg){A.Core.El._Init.call(this
,aArg);this.__proto__=C.An;},_Mark:function(D){var B;A.Core.El._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B5:null,Ej:null,CE:
A.jV,String:A.jV,Ob:null,AlT:A.wf,I1:0,Su:0,Acp:0,Bq:A.wf,J6:0x12,AQ:0xFFFFFFFF,
Afd:false,AaE:false,X5:false,ANv:false,HS:false,K9:function(){if(!!this.Ob){this.
A1g(this.Ob);this.Ob=null;}},J_:function(CU,aClip,aOffset,Cf,aBlend){var B;if((this.
CE===A.jV)||!this.B5)return;var Bs=this.J6;var font=this.B5;var C$=A.abh(this.M,
aOffset);var Dv;var DH;var DG;var DC;var col=this.AQ;var J4=(((Cf+1)*255)>>8)+1;
var J2=this.CE.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bo=[C$[0]-AE[
0],(C$[1]-AE[1])-font.Ascent];if(J2<1)return;Dv=DH=DC=DG=col;if(J4<256){Dv=(Dv&0x00FFFFFF
)|((((((Dv>>24)&0xFF)*J4)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*
J4)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J4)>>8)&0xFF)<<24);DC=(
DC&0x00FFFFFF)|((((((DC>>24)&0xFF)*J4)>>8)&0xFF)<<24);}if(((Bs&0x80)===0x80)){if(
this.AjJ())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if((J2===1)&&!((Bs&0x40)===
0x40)){CU.A5u(aClip,font,this.CE,2,(this.CE.charCodeAt(1)||0)-1,C$,Bo,0,0,Dv,DH,
DG,DC,true);return;}var leading=font.Leading;if(this.Su>0)leading=(this.Su-font.
Ascent)-font.Descent;var Aao=(font.Ascent+font.Descent)+leading;var Bw3=aClip[1]-
AE[1];var Bw4=aClip[3]-AE[1];var A0v=AE[2]-AE[0];var Da=0;var P=1;var B2=this.CE.
charCodeAt(1)||0;while(((Da+Aao)<Bw3)&&(B2>0)){P=P+B2;Da=Da+Aao;B2=this.CE.charCodeAt(
P)||0;}while((Da<Bw4)&&(B2>0)){var L5=A.abe(Bo,[0,Da]);var AlM=0;var O5=false;if(((((
Bs&0x40)===0x40)&&((this.CE.charCodeAt((P+B2)-1)||0)!==0x0A))&&((this.CE.charCodeAt(
P+1)||0)!==0x0A))&&((this.CE.charCodeAt(P+B2)||0)!==0x00))O5=true;if(O5&&!!(Bs&0x6
)){var ApB=P+B2;var Ayu=this.CE.indexOf(String.fromCharCode(0x20),P+1);var Ayv=this.
CE.indexOf(String.fromCharCode(0xA0),P+1);if(((Ayu<0)||(Ayu>=ApB))&&((Ayv<0)||(Ayv>=
ApB)))O5=false;}if(O5)AlM=A0v;else if(((Bs&0x4)===0x4))L5=[(L5[0]-A0v)+font.X_(this.
CE,P+1,B2-1),L5[1]];else if(((Bs&0x2)===0x2))L5=[(L5[0]-((A0v/2)|0))+((font.X_(this.
CE,P+1,B2-1)/2)|0),L5[1]];CU.A5u(aClip,font,this.CE,P+1,B2-1,C$,L5,AlM,0,Dv,DH,DG
,DC,true);P=P+B2;Da=Da+Aao;B2=this.CE.charCodeAt(P)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var BeS;BeS=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((BeS&&
!this.Acp)&&this.Afd)&&this.HS)&&!((this.T&0x2000)===0x2000)){this.CE=A.jV;this.
HS=false;A.pe([this,this.O7],this);}if(((this.X5&&this.HS)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.T&0x2000)===0x2000)){this.CE=
A.jV;this.HS=false;A.pe([this,this.O7],this);}A.Core.El.H.call(this,E);A.pe([this
,this.AiB],this);},BwV:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},BwU:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A1g:function(aBidi){if(!aBidi)return;A.rB(aBidi);},Bxe:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},AiB:function(G){A.pe(this.Ej
,this);},O7:function(G){A.pe([this,this.Xp],this);},Xp:function(G){var B;if(this.
HS)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xf=-1;var
font=this.B5;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afd){
if(this.Acp>0)Xf=this.Acp;else if(!this.AaE)Xf=width-(this.I1*2);else Xf=width;if(
Xf<0)Xf=1;}if(!!this.Ob){this.A1g(this.Ob);this.Ob=null;}this.HS=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.ANv)this.Ob=this.Bxe(length
);this.CE=font.BmI(this.String,0,Xf,length,this.Ob);if(!!this.Ob&&!this.Bih()){this.
A1g(this.Ob);this.Ob=null;}}else this.CE=A.jV;this.AlT=BC;if(((this.X5&&(this.CE
!==A.jV))&&!this.AaE)&&!!font){var Bs=this.J6;var leading=font.Leading;var Is=this.
CE;var AKh=this.AjJ();if(((Bs&0x80)===0x80)){if(AKh)Bs=(Bs&~0x80)|0x4;else Bs=(Bs&
~0x80)|0x1;}if(this.Su>0)leading=(this.Su-font.Ascent)-font.Descent;var AAg=(font.
Ascent+font.Descent)+leading;var J2=Is.charCodeAt(0)||0;var Alt=((height+leading
)/AAg)|0;var A0J=false;var AI3=false;if(Alt<=0)Alt=1;if(J2>Alt){var Bb=0;var AAh=
0;var AKf=J2-1;var KX;var Nl=Is.length;var tmp=A.jV;if(!!(Bs&0x110)&&!!(Bs&0x28)
)Bs&=~0x110;if(!!(Bs&0x110))Bs&=~0x28;if(((Bs&0x20)===0x20))AAh=J2-Alt;else if(((
Bs&0x10)===0x10)||((Bs&0x100)===0x100)){AAh=((J2-Alt)/2)|0;AKf=(AAh+Alt)-1;}else
AKf=Alt-1;A0J=AAh>0;AI3=AKf<(J2-1);for(KX=1;Bb<AAh;Bb=Bb+1)KX=KX+(Is.charCodeAt(
KX)||0);if(AI3)for(Nl=KX;Bb<AKf;Bb=Bb+1)Nl=Nl+(Is.charCodeAt(Nl)||0);if(A0J){var
IN=Is.charCodeAt(KX)||0;tmp=(Hh+A.abW(Is,KX,IN))+Hh;tmp=A.abQ(tmp,0,(IN+2)&0xFFFF
);KX=KX+IN;if((tmp.charCodeAt(IN)||0)===0x0A){tmp=A.abQ(tmp,IN,0xFEFF);tmp=A.abQ(
tmp,IN+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Is,KX,Nl-KX);if(AI3&&(
Nl>=KX)){var IN=Is.charCodeAt(Nl)||0;var Qo=(Hh+A.abW(Is,Nl,IN))+Hh;Qo=A.abQ(Qo,
0,(IN+2)&0xFFFF);Qo=A.abQ(Qo,1,0xFEFF);if((Qo.charCodeAt(IN)||0)===0x0A){Qo=A.abQ(
Qo,IN,0xFEFF);Qo=A.abQ(Qo,IN+1,0x0A);}if((Qo.charCodeAt(2)||0)===0x0A){Qo=A.abQ(
Qo,2,0xFEFF);Qo=A.abQ(Qo,1,0x0A);}else Qo=A.abQ(Qo,1,0xFEFF);tmp=tmp+Qo;}Is=String.
fromCharCode(Alt&0xFFFF)+tmp;}var Bb=0;var inx=1;var AJR=width-(this.I1*2);if(this.
Afd&&(this.Acp>0))AJR=this.Acp;J2=Is.charCodeAt(0)||0;for(;Bb<J2;Bb=Bb+1){var AlK=
A0J&&!Bb;var AlL=AI3&&(Bb===(J2-1));var W7=false;var W8=false;var AtG=AKh;if((AKh&&
AlK)&&!AlL){AlK=false;AlL=true;}else if((AKh&&AlL)&&!AlK){AlL=false;AlK=true;}var
Xq=inx+1;var IN=Is.charCodeAt(inx)||0;var KX=Xq;var Nl=(Xq+IN)-2;var A1v=-1;var A1w=-
1;if(!this.Afd&&(font.X_(Is,Xq,IN-1)>AJR)){var Aow=Bs;if(((Aow&0x2)===0x2)&&!!(Aow&
0x5))Aow&=~0x2;if(((Aow&0x2)===0x2))Aow&=~0x5;if(((Aow&0x4)===0x4))W7=true;else if(((
Aow&0x2)===0x2)){W7=true;W8=true;}else W8=true;}if((Is.charCodeAt(KX)||0)===0x0A
)KX=KX+1;if((Is.charCodeAt(Nl)||0)===0x0A)Nl=Nl-1;while(W7&&((Is.charCodeAt(KX)||
0)===0xFEFF))KX=KX+1;while(W8&&((Is.charCodeAt(Nl)||0)===0xFEFF))Nl=Nl-1;W7=W7&&
!AlL;W8=W8&&!AlK;while((((W7||W8)||AlK)||AlL)&&(KX<Nl)){if((W7&&(AtG||!W8))||AlK
){if(A1v>0)Is=A.abQ(Is,A1v,0xFEFF);Is=A.abQ(Is,KX,0x2026);A1v=KX;KX=KX+1;AtG=!AtG;
AlK=false;if(font.X_(Is,Xq,IN-1)<=AJR){W7=false;W8=false;}else W7=W7||!W8;}if((W8&&(
!AtG||!W7))||AlL){if(A1w>0)Is=A.abQ(Is,A1w,0xFEFF);Is=A.abQ(Is,Nl,0x2026);A1w=Nl;
Nl=Nl-1;AtG=!AtG;AlL=false;if(font.X_(Is,Xq,IN-1)<=AJR){W7=false;W8=false;}else W8=
W8||!W7;}}inx=inx+IN;}this.AlT=[font.A50(Is),((Is.charCodeAt(0)||0)*AAg)-leading
];this.CE=Is;}if(this.AaE&&(this.CE!==A.jV)){var Ats=[this.I1,0];this.T=this.T|0x2000;
this.H(A.abg(A.aaT(this.Db(),Ats),this.Bq));this.T=this.T&~0x2000;}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.M);A.pe([this,this.AiB],this);},BkX:function(
E){if(E===this.ANv)return;this.ANv=E;this.CE=A.jV;this.HS=false;A.pe([this,this.
O7],this);},HH:function(E){if(E<0)E=0;if(this.I1===E)return;this.I1=E;this.CE=A.
jV;this.HS=false;A.pe([this,this.O7],this);},Bmc:function(E){var B;if(E<0)E=0;if(
this.Su===E)return;this.Su=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.
M);if(this.X5){this.CE=A.jV;this.HS=false;A.pe([this,this.O7],this);}if(this.AaE&&
this.HS)this.H(A.abg(this.Db(),this.Bq));if(this.HS)A.pe([this,this.AiB],this);}
,BkW:function(E){if(E===this.X5)return;this.X5=E;if(((this.Afd&&!!!this.Acp)||E)||
!!this.Ej)this.T=this.T&~0x100;else this.T=this.T|0x100;this.CE=A.jV;this.HS=false;
A.pe([this,this.O7],this);},QT:function(E){if(A.aa0(E,this.Ej))return;this.Ej=E;
if(((!!!this.Acp&&this.Afd)||!!E)||this.X5)this.T=this.T&~0x100;else this.T=this.
T|0x100;},I0:function(E){if(E===this.AaE)return;this.AaE=E;if(E&&this.X5){this.CE=
A.jV;this.HS=false;A.pe([this,this.O7],this);}if(E&&this.HS){var Ats=[this.I1,0];
this.T=this.T|0x2000;this.H(A.abg(A.aaT(this.Db(),Ats),this.Bq));this.T=this.T&~
0x2000;}},Bmt:function(E){if(E<0)E=0;if(E===this.Acp)return;this.Acp=E;if(this.Afd&&
this.HS){this.CE=A.jV;this.HS=false;A.pe([this,this.O7],this);}if(((!!!E&&this.Afd
)||this.X5)||!!this.Ej)this.T=this.T&~0x100;else this.T=this.T|0x100;},KM:function(
E){if(E===this.Afd)return;this.Afd=E;if(this.HS){this.CE=A.jV;this.HS=false;A.pe([
this,this.O7],this);}if(((E&&!!!this.Acp)||this.X5)||!!this.Ej)this.T=this.T&~0x100;
else this.T=this.T|0x100;},Gh:function(E){var B;if(A.aaX(E,this.Bq))return;this.
Bq=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);if(this.HS)A.pe([this
,this.AiB],this);},A4:function(E){var B;if(E===this.J6)return;this.J6=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);if(this.X5){this.CE=A.jV;this.HS=false;
A.pe([this,this.O7],this);}if(this.HS)A.pe([this,this.AiB],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CE=A.jV;this.HS=false;A.pe([this,this.
O7],this);},S:function(E){if(E===this.B5)return;this.B5=E;this.CE=A.jV;this.HS=false;
A.pe([this,this.O7],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Aj:function(E){if(E)this.
Ct(0x400,0x0);else this.Ct(0x0,0x400);},Fd:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},AjJ:function(
){if(!this.HS)this.Xp(this);if(!this.Ob)return false;var result=false;var bidi=this.
Ob;result=A.v2(bidi);return result;},Bih:function(){if(!this.HS)this.Xp(this);if(
!this.Ob)return false;var result=false;var bidi=this.Ob;result=A.zZ(bidi);return result;
},AF_:function(aIndex){if(((this.String===A.jV)||!this.B5)||this.X5)return BC;if(
!this.HS)this.Xp(this);if(aIndex<0)aIndex=0;var Byr=(this.CE.charCodeAt(0)||0)-1;
var L8=this.CE.charCodeAt(1)||0;var inx=1;var AiM=2;var Bb=0;var col=-1;var CA=true;
aIndex=aIndex+2;while((Bb<Byr)&&((inx+L8)<=aIndex)){inx=inx+L8;Bb=Bb+1;AiM=AiM+1;
aIndex=aIndex+1;L8=this.CE.charCodeAt(inx)||0;}if(aIndex>(inx+L8))aIndex=inx+L8;
if(!!this.Ob)aIndex=(inx+this.BwU(this.Ob,(inx+1)-AiM,(inx+L8)-AiM,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Io=this.CE.charCodeAt(inx+1)||0;if(CA)col=col+
1;CA=(Io!==0xFEFF)&&(Io!==0x0A);}return[col,Bb];},Ans:function(Aol){if(((this.String===
A.jV)||!this.B5)||this.X5)return 0;if(!this.HS)this.Xp(this);var Bb=Aol[1];var col=
Aol[0];var inx=1;var AiM=2;var J2=this.CE.charCodeAt(0)||0;var L8=this.CE.charCodeAt(
1)||0;if(Bb>=J2){Bb=J2-1;col=this.CE.length;}if(Bb<0){Bb=0;col=0;}if(col<0)col=0;
while((Bb>0)&&(L8>0)){inx=inx+L8;Bb=Bb-1;AiM=AiM+1;L8=this.CE.charCodeAt(inx)||0;
}var Xe=inx;var AKg=(inx-AiM)+1;var ApB=(AKg+L8)-1;var Az5=false;while((col>=0)&&(
L8>1)){var Io=this.CE.charCodeAt(inx+1)||0;inx=inx+1;L8=L8-1;Az5=(Io===0xFEFF)||(
Io===0x0A);if(!Az5){col=col-1;Xe=inx;}}if((!Az5&&(col>=0))&&((this.CE.charCodeAt(
inx+1)||0)===0x00))Az5=true;if(Az5)Xe=Xe+1;Xe=Xe-AiM;if(!!this.Ob)Xe=AKg+this.BwV(
this.Ob,AKg,ApB,Xe-AKg);return Xe;},ATa:function(KT){var B;if((this.String===A.jV
)||!this.B5)return BC;if(!this.HS)this.Xp(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BC;var font=this.B5;var Bs=this.J6;var J2=this.CE.charCodeAt(
0)||0;var leading=font.Leading;if(KT[1]<AE[1])KT=[KT[0],AE[1]];if(KT[1]>=AE[3])KT=[
KT[0],AE[3]-1];if(this.Su>0)leading=(this.Su-font.Ascent)-font.Descent;var Aao=(
font.Ascent+font.Descent)+leading;var Bb=((KT[1]-AE[1])/Aao)|0;var Nu=this.ACh(Bb
);var L8=Nu.length;var O5=false;if(((Bs&0x80)===0x80)){if(this.AjJ())Bs=(Bs&~0x80
)|0x4;else Bs=(Bs&~0x80)|0x1;}if(((Bs&0x40)===0x40)&&(Bb<(J2-1)))O5=true;if((O5&&(
Nu.indexOf(String.fromCharCode(0x20),0)<0))&&(Nu.indexOf(String.fromCharCode(0xA0
),0)<0))O5=false;if(O5){var inx=1;var ApA=Bb;while(ApA>0){inx=inx+(this.CE.charCodeAt(
inx)||0);ApA=ApA-1;}if(((this.CE.charCodeAt(inx+1)||0)===0x0A)||((this.CE.charCodeAt((
inx+(this.CE.charCodeAt(inx)||0))-1)||0)===0x0A))O5=false;}var AlM=0;var Eg=0;if(
O5)AlM=AE[2]-AE[0];else if(((Bs&0x4)===0x4))Eg=(AE[2]-AE[0])-font.X_(Nu,0,L8);else
if(((Bs&0x2)===0x2))Eg=(((AE[2]-AE[0])/2)|0)-((font.X_(Nu,0,L8)/2)|0);var col=font.
BhU(Nu,0,L8,(KT[0]-AE[0])-Eg,AlM);if(col<0)col=0;return[col,Bb];},AeS:function(Aol
){var B;if((this.String===A.jV)||!this.B5)return BC;if(!this.HS)this.Xp(this);var
J2=this.CE.charCodeAt(0)||0;var font=this.B5;var Bs=this.J6;var Bb=Aol[1];var col=
Aol[0];if(Bb>=J2){Bb=J2-1;col=this.CE.length;}if(Bb<0){Bb=0;col=0;}var Nu=this.ACh(
Bb);var L8=Nu.length;var AE=this.Db();var O5=false;var leading=font.Leading;if(((
Bs&0x80)===0x80)){if(this.AjJ())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if(((Bs&
0x40)===0x40)&&(Bb<(J2-1)))O5=true;if((O5&&(Nu.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nu.indexOf(String.fromCharCode(0xA0),0)<0))O5=false;if(O5){var inx=1;var
ApA=Bb;while(ApA>0){inx=inx+(this.CE.charCodeAt(inx)||0);ApA=ApA-1;}if(((this.CE.
charCodeAt(inx+1)||0)===0x0A)||((this.CE.charCodeAt((inx+(this.CE.charCodeAt(inx
)||0))-1)||0)===0x0A))O5=false;}if(this.Su>0)leading=(this.Su-font.Ascent)-font.
Descent;var Da=(AE[1]+(Bb*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
AlM=0;var Eg=AE[0];if(O5)AlM=AE[2]-AE[0];else if(((Bs&0x4)===0x4))Eg=AE[2]-font.
X_(Nu,0,L8);else if(((Bs&0x2)===0x2))Eg=(Eg+(((AE[2]-AE[0])/2)|0))-((font.X_(Nu,
0,L8)/2)|0);var pos=font.BhQ(Nu,0,L8,col,AlM);if(pos<0)pos=0;return[Eg+pos,Da];}
,AOe:function(Ad){var B;if((this.String===A.jV)||!this.B5)return EW;if(!this.HS)
this.Xp(this);var J2=this.CE.charCodeAt(0)||0;var font=this.B5;if((Ad<0)||((Ad>=
J2)&&(Ad>0)))return EW;var Bs=this.J6;var inx=1;var leading=font.Leading;var A$=
this.M;var width=A$[2]-A$[0];var height=A$[3]-A$[1];width=width-(this.I1*2);if(((
Bs&0x80)===0x80)){if(this.AjJ())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if(this.
Su>0)leading=(this.Su-font.Ascent)-font.Descent;var Da=Ad*((font.Ascent+font.Descent
)+leading);var Eg=0;while(Ad>0){inx=inx+(this.CE.charCodeAt(inx)||0);Ad=Ad-1;}var
AAi=(this.CE.charCodeAt(inx)||0)-1;var BeT=font.X_(this.CE,inx+1,AAi);var A26=font.
A59(this.CE,inx+1,AAi);var ApC=BeT;var Aao=font.Ascent+font.Descent;var AAy=(J2*((
font.Ascent+font.Descent)+leading))-leading;if(!J2)AAy=Aao;if((((this.CE.charCodeAt((
inx+AAi)+1)||0)===0x00)||((this.CE.charCodeAt(inx+AAi)||0)===0x0A))||((this.CE.charCodeAt(
inx+1)||0)===0x0A))Bs=Bs&~0x40;if(((Bs&0x40)===0x40)){var ApB=(inx+1)+AAi;var Ayu=
this.CE.indexOf(String.fromCharCode(0x20),inx+1);var Ayv=this.CE.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ayu>=0)&&(Ayu<ApB))||((Ayv>=0)&&(Ayv<ApB)))ApC=width;
}if((!!(Bs&0x110)&&!!(Bs&0x28))&&(AAy>height))Bs&=~0x110;if(!!(Bs&0x110))Bs&=~0x28;
if((((Bs&0x2)===0x2)&&!!(Bs&0x5))&&(ApC>width))Bs&=~0x2;if(((Bs&0x2)===0x2))Bs&=
~0x5;if(((Bs&0x4)===0x4))Eg=width-ApC;else if(((Bs&0x2)===0x2))Eg=((width/2)|0)-((
ApC/2)|0);if(((Bs&0x20)===0x20))Da=Da+(height-AAy);else if(((Bs&0x100)===0x100))
Da=((Da+((height/2)|0))-((AAy/2)|0))+(((this.B5.Descent-this.B5.Ascent)/2)|0);else
if(((Bs&0x10)===0x10))Da=(Da+((height/2)|0))-((AAy/2)|0);Eg=(Eg+A26[0])+this.I1;
ApC=(ApC+(A26[2]-A26[0]))-BeT;var B3;{var Bem=[A$[0]+Eg,A$[1]+Da];B3=[].concat(Bem
,A.abf(Bem,[ApC,Aao]));}return A.abh(B3,this.Bq);},ACh:function(Ad){if((this.String===
A.jV)||!this.B5)return A.jV;if(!this.HS)this.Xp(this);var J2=this.CE.charCodeAt(
0)||0;var inx=1;if((!this.B5||(Ad<0))||(Ad>=J2))return A.jV;while(Ad>0){inx=inx+(
this.CE.charCodeAt(inx)||0);Ad=Ad-1;}var Xq=inx;var As_=inx+(this.CE.charCodeAt(
inx)||0);var Io=0x00;do{Xq=Xq+1;Io=this.CE.charCodeAt(Xq)||0;}while(((Io===0xFEFF
)||(Io===0x0A))&&(Xq<=As_));do{As_=As_-1;Io=this.CE.charCodeAt(As_)||0;}while(((
Io===0xFEFF)||(Io===0x0A))&&(Xq<=As_));var Nu=A.abW(this.CE,Xq,(As_-Xq)+1);var Ao4;
for(Ao4=Nu.indexOf(String.fromCharCode(0xFEFF),0);Ao4>=0;Ao4=Nu.indexOf(String.fromCharCode(
0xFEFF),Ao4+1)){var Xe=Ao4+1;while((Nu.charCodeAt(Xe)||0)===0xFEFF)Xe=Xe+1;Nu=A.
ab1(Nu,Ao4,Xe-Ao4);}return Nu;},Db:function(){var B;if((this.String===A.jV)||!this.
B5)return EW;if(!this.HS)this.Xp(this);if(this.CE===A.jV)return EW;var leading=this.
B5.Leading;var AAg=(this.B5.Ascent+this.B5.Descent)+this.B5.Leading;if(this.Su>0
){leading=(this.Su-this.B5.Ascent)-this.B5.Descent;AAg=this.Su;}if(A.aaX(this.AlT
,BC))this.AlT=[this.B5.A50(this.CE),this.AlT[1]];this.AlT=[this.AlT[0],((this.CE.
charCodeAt(0)||0)*AAg)-leading];var Bs=this.J6;var A$=this.M;var Ats=this.I1;var
width=A$[2]-A$[0];var height=A$[3]-A$[1];var C$=[Ats,0,width-Ats,height];var B3=[
].concat(C$.slice(0,2),A.abf(C$.slice(0,2),this.AlT));if(((Bs&0x80)===0x80)){if(
this.AjJ())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if(((Bs&0x40)===0x40)){var Xf=
this.Acp;if(Xf<=0)Xf=width-(this.I1*2);if(Xf<0)Xf=0;if(Xf>(B3[2]-B3[0]))B3=A.abL(
B3,Xf);}if((!!(Bs&0x110)&&!!(Bs&0x28))&&((B3[3]-B3[1])>(C$[3]-C$[1])))Bs&=~0x110;
if(!!(Bs&0x110))Bs&=~0x28;if((((Bs&0x2)===0x2)&&!!(Bs&0x5))&&((B3[2]-B3[0])>(C$[
2]-C$[0])))Bs&=~0x2;if(((Bs&0x2)===0x2))Bs&=~0x5;if((B3[2]-B3[0])!==(C$[2]-C$[0]
)){if(((Bs&0x4)===0x4))B3=A.abM(B3,C$[2]-(B3[2]-B3[0]));else if(((Bs&0x2)===0x2)
)B3=A.abM(B3,(C$[0]+(((C$[2]-C$[0])/2)|0))-(((B3[2]-B3[0])/2)|0));}if((B3[3]-B3[
1])!==(C$[3]-C$[1])){if(((Bs&0x20)===0x20))B3=A.abO(B3,C$[3]-(B3[3]-B3[1]));else
if(((Bs&0x100)===0x100))B3=A.abO(B3,((C$[1]+(((C$[3]-C$[1])/2)|0))-(((B3[3]-B3[1
])/2)|0))+(((this.B5.Descent-this.B5.Ascent)/2)|0));else if(((Bs&0x10)===0x10))B3=
A.abO(B3,(C$[1]+(((C$[3]-C$[1])/2)|0))-(((B3[3]-B3[1])/2)|0));}B3=A.abh(B3,A$.slice(
0,2));return A.abh(B3,this.Bq);},_Init:function(aArg){A.Core.El._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.K9();this.__proto__=A.Core.El;
A.Core.El._Done.call(this);},_Mark:function(D){var B;A.Core.El._Mark.call(this,D
);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.Aud={attrString:null,AttrSet:
null,String:A.jV,J6:0x12,J_:function(CU,aClip,aOffset,Cf,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Cf=Cf+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CU.BgZ(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cf*255)>>8,(Cf*255)>>8,(Cf*255)>>8,(Cf
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.T&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.O7],this);}A.Core.El.H.call(this,E);A.pe([this,this.AiB],this
);},AiB:function(G){},Xp:function(G){var B;var AKV;AKV=(B=this.M)[2]-B[0];if(AKV<
0)AKV=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A4h
,0);if(!!this.attrString)this.attrString.BmH(this.AttrSet,this.String,AKV,false);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);A.pe([this,this.AiB],this);
},O7:function(G){A.pe([this,this.Xp],this);},BeN:function(G){var B;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.M);},A4:function(E){var B;E&=~0x140;if(E===this.
J6)return;this.J6=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);A.pe([
this,this.AiB],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.O7],this);},A8R:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.BeN],this.AttrSet,0);A.z9([this,this.O7
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.BeN],this.AttrSet,0);A.zV([this,this.O7],this.AttrSet,1);}A.pe([this,this.
O7],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return EW;
if(!this.attrString)this.Xp(this);if(!this.attrString)return EW;var Bs=this.J6;var
CZ=this.attrString.BhV();var C$=A.aaT(this.M,BC);var B3=[].concat(C$.slice(0,2),
A.abf(C$.slice(0,2),CZ));if(!CZ[0]||!CZ[1])return EW;if(((Bs&0x80)===0x80)){if(this.
attrString.AjJ())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if((B3[2]-B3[0])!==(C$[
2]-C$[0])){if(((Bs&0x4)===0x4))B3=A.abM(B3,C$[2]-(B3[2]-B3[0]));else if(((Bs&0x2
)===0x2))B3=A.abM(B3,(C$[0]+(((C$[2]-C$[0])/2)|0))-(((B3[2]-B3[0])/2)|0));}if((B3[
3]-B3[1])!==(C$[3]-C$[1])){if(((Bs&0x20)===0x20))B3=A.abO(B3,C$[3]-(B3[3]-B3[1])
);else if(((Bs&0x10)===0x10))B3=A.abO(B3,(C$[1]+(((C$[3]-C$[1])/2)|0))-(((B3[3]-
B3[1])/2)|0));}return B3;},_Init:function(aArg){A.Core.El._Init.call(this,aArg);
this.__proto__=C.Aud;this.T=0x3;},_Mark:function(D){var B;A.Core.El._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.AnO={Ail:
null,Fs:null,Ah9:0,Ah8:0,UN:A.wf,Cg:A.abi(4,3,0,null),AF6:A.wf,S_:0,Apf:0,Ki:function(
E){if(A.aaX(E,this.Km))return;A.Core.Zc.Ki.call(this,E);this.Cg.Set(3,0,E[0]);this.
Cg.Set(3,1,E[1]);this.Cg.Set(3,2,1);this.S_=0x45;this.Fs=null;A.pe([this,this.AiU
],this);},Kh:function(E){if(A.aaX(E,this.Mu))return;A.Core.Zc.Kh.call(this,E);this.
Cg.Set(2,0,E[0]);this.Cg.Set(2,1,E[1]);this.Cg.Set(2,2,1);this.S_=0x45;this.Fs=null;
A.pe([this,this.AiU],this);},DM:function(E){if(A.aaX(E,this.Eu))return;A.Core.Zc.
DM.call(this,E);this.Cg.Set(1,0,E[0]);this.Cg.Set(1,1,E[1]);this.Cg.Set(1,2,1);this.
S_=0x45;this.Fs=null;A.pe([this,this.AiU],this);},DY:function(E){if(A.aaX(E,this.
Ek))return;A.Core.Zc.DY.call(this,E);this.Cg.Set(0,0,E[0]);this.Cg.Set(0,1,E[1]);
this.Cg.Set(0,2,1);this.S_=0x45;this.Fs=null;A.pe([this,this.AiU],this);},A0B:function(
){return;},AiU:function(G){var B;this.Ail=null;if(this.S_===0x00)return;if(this.
S_===0x45){var KY=A._NewObject(A.Graphics.Axf,0);KY=KY.AM8(this.Cg.Get(0,0),this.
Cg.Get(0,1),this.Cg.Get(1,0),this.Cg.Get(1,1),this.Cg.Get(2,0),this.Cg.Get(2,1),
this.Cg.Get(3,0),this.Cg.Get(3,1));if(!!KY){KY.ABh(0,0);this.Cg.Set(0,2,KY.UB*240
);KY.ABh(1,0);this.Cg.Set(1,2,KY.UB*240);KY.ABh(1,1);this.Cg.Set(2,2,KY.UB*240);
KY.ABh(0,1);this.Cg.Set(3,2,KY.UB*240);}this.A0B();}if((((this.S_===0x4D)&&!!this.
Fs)&&!!this.UN[0])&&!!this.UN[1]){var AiP=[].concat(BC,this.UN);var AiO=this.AF6;
var AfK=AiP[0]-AiO[0];var Ay=AiP[2]-AiO[0];var D1=AiP[1]-AiO[1];var Ri=AiP[3]-AiO[
1];this.Fs.AeN(AfK,D1);this.Cg.Set(0,0,this.Fs.PT+this.Ah8);this.Cg.Set(0,1,this.
Fs.PU+this.Ah9);this.Cg.Set(0,2,this.Fs.UB);this.Fs.AeN(Ay,D1);this.Cg.Set(1,0,this.
Fs.PT+this.Ah8);this.Cg.Set(1,1,this.Fs.PU+this.Ah9);this.Cg.Set(1,2,this.Fs.UB);
this.Fs.AeN(Ay,Ri);this.Cg.Set(2,0,this.Fs.PT+this.Ah8);this.Cg.Set(2,1,this.Fs.
PU+this.Ah9);this.Cg.Set(2,2,this.Fs.UB);this.Fs.AeN(AfK,Ri);this.Cg.Set(3,0,this.
Fs.PT+this.Ah8);this.Cg.Set(3,1,this.Fs.PU+this.Ah9);this.Cg.Set(3,2,this.Fs.UB);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.Ek=[(this.
Cg.Get(0,0)+0.5)|0,(this.Cg.Get(0,1)+0.5)|0];this.Eu=[(this.Cg.Get(1,0)+0.5)|0,(
this.Cg.Get(1,1)+0.5)|0];this.Mu=[(this.Cg.Get(2,0)+0.5)|0,(this.Cg.Get(2,1)+0.5
)|0];this.Km=[(this.Cg.Get(3,0)+0.5)|0,(this.Cg.Get(3,1)+0.5)|0];this.A0B();}this.
Apf=this.S_;this.S_=0x00;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping(
));},Bmg:function(E){if(A.aaX(E,this.AF6))return;this.AF6=E;if((this.Apf!==0x45)&&(
this.S_===0x00)){this.S_=this.Apf;A.pe([this,this.AiU],this);}},AqS:function(E6){
var B;if(!!!this.Ail){this.Ail=A._NewObject(A.Graphics.A6w,0);this.Ail.AM8(this.
Cg.Get(0,0),this.Cg.Get(0,1),this.Cg.Get(1,0),this.Cg.Get(1,1),this.Cg.Get(2,0),
this.Cg.Get(2,1),this.Cg.Get(3,0),this.Cg.Get(3,1));}if(!this.Ail.AeN(E6))return BC;
var ApH=[].concat(BC,this.UN);var Eg=this.Ail.PT*(ApH[2]-ApH[0]);var Da=this.Ail.
PU*(ApH[3]-ApH[1]);return A.abf([Eg|0,Da|0],ApH.slice(0,2));},A_3:function(BaZ,L0
){var B;this.Ail=null;if(!L0)throw new Error(I8);if(!this.Fs)this.Fs=A._NewObject(
A.Graphics.Axf,0);this.Fs.Bf8(L0);this.Ah8=BaZ[0];this.Ah9=BaZ[1];this.Apf=0x4D;
this.S_=0x00;if(!this.UN[0]||!this.UN[1])return;var AiP=[].concat(BC,this.UN);var
AiO=this.AF6;var AfK=AiP[0]-AiO[0];var Ay=AiP[2]-AiO[0];var D1=AiP[1]-AiO[1];var
Ri=AiP[3]-AiO[1];this.Fs.AeN(AfK,D1);this.Cg.Set(0,0,this.Fs.PT+this.Ah8);this.Cg.
Set(0,1,this.Fs.PU+this.Ah9);this.Cg.Set(0,2,this.Fs.UB);this.Fs.AeN(Ay,D1);this.
Cg.Set(1,0,this.Fs.PT+this.Ah8);this.Cg.Set(1,1,this.Fs.PU+this.Ah9);this.Cg.Set(
1,2,this.Fs.UB);this.Fs.AeN(Ay,Ri);this.Cg.Set(2,0,this.Fs.PT+this.Ah8);this.Cg.
Set(2,1,this.Fs.PU+this.Ah9);this.Cg.Set(2,2,this.Fs.UB);this.Fs.AeN(AfK,Ri);this.
Cg.Set(3,0,this.Fs.PT+this.Ah8);this.Cg.Set(3,1,this.Fs.PU+this.Ah9);this.Cg.Set(
3,2,this.Fs.UB);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping()
);this.Ek=[(this.Cg.Get(0,0)+0.5)|0,(this.Cg.Get(0,1)+0.5)|0];this.Eu=[(this.Cg.
Get(1,0)+0.5)|0,(this.Cg.Get(1,1)+0.5)|0];this.Mu=[(this.Cg.Get(2,0)+0.5)|0,(this.
Cg.Get(2,1)+0.5)|0];this.Km=[(this.Cg.Get(3,0)+0.5)|0,(this.Cg.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.A0B();},_Init:
function(aArg){A.Core.Zc._Init.call(this,aArg);(this.Cg=[]).__proto__=C.AnO.Cg;this.
__proto__=C.AnO;this.T=0x3;},_Mark:function(D){var B;A.Core.Zc._Mark.call(this,D
);if((B=this.Ail)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fs)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AUQ={Fg:null,bitmap:null
,O:null,GY:255,J_:function(CU,aClip,aOffset,Cf,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Nn=aOffset[0];var Np=aOffset[1];var AE=[].concat(BC,this.
UN);aBlend=aBlend&&((this.T&0x2)===0x2);Cf=Cf+1;var Bdk;var Bdl;var Bdm;var Bdn;
var ByB=this.GY;Bdk=Bdl=Bdm=Bdn=ByB;var Ak7=255|(255<<8)|(255<<16)|((((Cf*Bdk)>>
8)&0xFF)<<24);var Ak8=255|(255<<8)|(255<<16)|((((Cf*Bdl)>>8)&0xFF)<<24);var BwW=
255|(255<<8)|(255<<16)|((((Cf*Bdm)>>8)&0xFF)<<24);var BwX=255|(255<<8)|(255<<16)|((((
Cf*Bdn)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(EW,aOffset));CU.Ahx(aClip,this.bitmap
,0,this.Cg.Get(0,0)+Nn,this.Cg.Get(0,1)+Np,this.Cg.Get(0,2),this.Cg.Get(1,0)+Nn,
this.Cg.Get(1,1)+Np,this.Cg.Get(1,2),this.Cg.Get(2,0)+Nn,this.Cg.Get(2,1)+Np,this.
Cg.Get(2,2),this.Cg.Get(3,0)+Nn,this.Cg.Get(3,1)+Np,this.Cg.Get(3,2),AE,Ak7,Ak8,
BwW,BwX,aBlend,true);},GQ:function(CJ){if(!this.O||!this.Fg)return null;var BN=(
A.Core.AdS.isPrototypeOf(CJ)?CJ:null);var DV=(A.Core.Aqc.isPrototypeOf(CJ)?CJ:null
);if(!BN&&!DV)return null;var Fi=BC;var BY=this.Fg.Ab;while(!!BY&&(BY!==this.O)){
Fi=A.abe(Fi,BY.M.slice(0,2));BY=BY.Ab;}var X=this.Fg;if(!!BN&&!BN.Down)this.Fg=null;
if(!!BN){BN.HV=A.abf(this.AqS(BN.HV),Fi);BN.NK=A.abf(this.AqS(BN.NK),Fi);return X.
GQ(BN);}if(!!DV){var ByF=A.abf(this.AqS(A.abe(DV.HV,DV.Dy)),Fi);DV.HV=A.abf(this.
AqS(DV.HV),Fi);DV.NK=A.abf(this.AqS(DV.NK),Fi);DV.Dy=A.abe(DV.HV,ByF);return X.GQ(
DV);}return C.AnO.GQ.call(this,CJ);},X0:function(C9,BD,N$,ZX,AcJ,AcI){var B;if(!
this.O||!((this.O.T&0x18)===0x18))return null;var pos=A.aaI(C9);pos=this.AqS(pos
);var ApH=[].concat(BC,this.UN);if(!A.wa(ApH,pos))return null;var Jt=this.O.X0(A.
abh(A.abh([0,0,C9[2]-C9[0],C9[3]-C9[1]],pos),this.O.M.slice(0,2)),BD,N$,ZX,null,
AcI);if(!!Jt)this.Fg=Jt.Ce;else this.Fg=null;if(!!this.Fg)return A._NewObject(A.
Core.Aum,0).Initialize(this,BC);return null;},Rt:function(G){var B;var Bdo=this.
UN;if(!!this.O)this.bitmap=this.O.Fp;else this.bitmap=null;if(!!this.bitmap)this.
UN=this.bitmap.FrameSize;else this.UN=BC;if(((A.aaX(Bdo,this.UN)||((this.Apf===0x45
)&&(this.S_===0x00)))&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping(
));if(((this.Apf!==0x45)&&(this.S_===0x00))&&!A.aaX(Bdo,this.UN)){this.S_=this.Apf;
A.pe([this,this.AiU],this);}},Dl:function(E){var B;if(E===this.GY)return;this.GY=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());},Blp:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ab))throw new Error(IJ);if(!!this.O){A.
z9([this,this.Rt],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.zV([this,this.Rt
],E,0);this.bitmap=E.Fp;}this.Rt(this);},AvH:function(){return this.GY;},_Init:function(
aArg){C.AnO._Init.call(this,aArg);this.__proto__=C.AUQ;},_Mark:function(D){var B;
C.AnO._Mark.call(this,D);if((B=this.Fg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Ad3={Hp:null,AQ:0xFFFFFFFF,Dy:A.wf
,ANV:false,K9:function(){this.A0U();},J_:function(CU,aClip,aOffset,Cf,aBlend){if(
!this.Hp)return;var Dv;var DH;var DC;var DG;var B2=this.AQ;Cf=Cf+1;Dv=DH=DC=DG=B2;
if(Cf<256){Dv=(Dv&0x00FFFFFF)|((((Cf*((Dv>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF
)|((((Cf*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cf*((DC>>24)&0xFF
))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cf*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CU.
Ad3(aClip,this.Hp,A.abh(this.M,aOffset),this.ANV,this.Dy,Dv,DH,DG,DC,true,true,0
);},A0U:function(){return;},AiV:function(G){var B;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Be(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Be(this.M);},Anh:function(E){
var B;if(A.aaX(E,this.Dy))return;this.Dy=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hp)this.Ab.Be(this.M);},Blk:function(E){var B;if(E===this.ANV)return;this.
ANV=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Be(this.M);},Y8:function(
E){var B;if(E===this.Hp)return;if(!!this.Hp)A.z9([this,this.AiV],this.Hp,0);this.
Hp=E;if(!!this.Hp)A.zV([this,this.AiV],this.Hp,0);if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Be(this.M);},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1
);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.__proto__=C.Ad3;},
_Done:function(){this.K9();this.__proto__=A.Core.El;A.Core.El._Done.call(this);}
,_Mark:function(D){var B;A.Core.El._Mark.call(this,D);if((B=this.Hp)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hf={Hp:null,AQ:0xFFFFFFFF
,Dy:A.wf,Width:1,K9:function(){this.A0U();},J_:function(CU,aClip,aOffset,Cf,aBlend
){if(!this.Hp)return;var Dv;var DH;var DC;var DG;var B2=this.AQ;Cf=Cf+1;Dv=DH=DC=
DG=B2;if(Cf<256){Dv=(Dv&0x00FFFFFF)|((((Cf*((Dv>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&
0x00FFFFFF)|((((Cf*((DH>>24)&0xFF))>>8)&0xFF)<<24);DC=(DC&0x00FFFFFF)|((((Cf*((DC>>
24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cf*((DG>>24)&0xFF))>>8)&0xFF)<<
24);}CU.Hf(aClip,this.Hp,A.abh(this.M,aOffset),false,this.Dy,this.Width,0,0,0,3,
Dv,DH,DG,DC,true,true);},A0U:function(){return;},AiV:function(G){var B;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Be(this.
M);},Anh:function(E){var B;if(A.aaX(E,this.Dy))return;this.Dy=E;if((!!this.Ab&&((
this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Be(this.M);},NX:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hp)this.Ab.Be(this.M);},Y8:function(E){var B;if(E===this.Hp)return;if(!!this.
Hp)A.z9([this,this.AiV],this.Hp,0);this.Hp=E;if(!!this.Hp)A.zV([this,this.AiV],this.
Hp,0);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.M);},Y:function(E){if(E
)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},_Init:function(aArg){A.Core.El._Init.call(
this,aArg);this.__proto__=C.Hf;},_Done:function(){this.K9();this.__proto__=A.Core.
El;A.Core.El._Done.call(this);},_Mark:function(D){var B;A.Core.El._Mark.call(this
,D);if((B=this.Hp)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BCN={A32:0x1,A31:0x2,A33:0x4,A36:0x8,A35:0x10,A34:0x20,BD3:0x40,BD4:0x80,BEd:
0x100};C.BEh={A32:0x1,A31:0x2,A33:0x4,A36:0x8,A35:0x10,A34:0x20,BBg:0x40,BBf:0x80
,BBl:0x100};C.BDq={Normal:0,BDY:1,BDW:2,BDX:3};
C._Init=function(){C.DR.__proto__=A.Core.AjV;C.AJ.__proto__=A.Core.El;C.Cz.__proto__=
A.Core.El;C.NI.__proto__=A.Core.El;C.An.__proto__=A.Core.El;C.Text.__proto__=A.Core.
El;C.Aud.__proto__=A.Core.El;C.AnO.__proto__=A.Core.Zc;C.AUQ.__proto__=C.AnO;C.Ad3.
__proto__=A.Core.El;C.Hf.__proto__=A.Core.El;};C._ReInit=function(){};C.DB=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */