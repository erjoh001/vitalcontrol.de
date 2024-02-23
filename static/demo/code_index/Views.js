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
var Ca=[1,1];var BD=[0,0];var EW=[0,0,0,0];var Hh="\uFEFF";var I8="No matrix to perform 3D transformation";
var IJ="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DR={Kz:null,AkM:1,AkL:1,AQ:0xFFFFFFFF,J9:function(CV,aClip,aOffset,Cg,aBlend){var
B;var Af0=this.AkL;var Af1=this.AkM;var Adb=A.abf(this.Ek,aOffset);var Adc=A.abf(
this.Ev,aOffset);var Ak5;var Ak6;var B1=this.AQ;if(A.aaX(Adb,Adc))return;aBlend=
aBlend&&((this.T&0x2)===0x2);Cg=Cg+1;Ak5=Ak6=B1;if(Cg<256){Ak5=(Ak5&0x00FFFFFF)|((((
Cg*((Ak5>>24)&0xFF))>>8)&0xFF)<<24);Ak6=(Ak6&0x00FFFFFF)|((((Cg*((Ak6>>24)&0xFF)
)>>8)&0xFF)<<24);}if((Af0===1)&&(Af1===1))CV.Aut(aClip,Adb,Adc,Ak5,Ak6,aBlend);else
CV.BgA(aClip,Adb,Adc,Af0,Af1,Ak5,Ak6,aBlend);},GetExtent:function(){var Af0=this.
AkL;var Af1=this.AkM;var Adb=this.Ek;var Adc=this.Ev;if(((Af0===1)&&(Af1===1))||
A.aaX(Adb,Adc))return A.Core.AjU.GetExtent.call(this);var Aic=Af0/2;var Aid=Af1/
2;var AoT=Adb[0];var AoU=Adb[1];var AoV=Adc[0];var AoW=Adc[1];var JW=AoV-AoT;var
JX=AoW-AoU;var IN=Math.sqrt((JW*JW)+(JX*JX));JW=JW/IN;JX=JX/IN;var Bbg=AoT+(JX*Aic
);var Bbh=AoU-(JW*Aic);var AIL=AoV+(JX*Aid);var AIM=AoW-(JW*Aid);var AIN=AoV-(JX
*Aid);var AIO=AoW+(JW*Aid);var AIP=AoT-(JX*Aic);var AIQ=AoU+(JW*Aic);var left=Bbg;
var right=Bbg;var top=Bbh;var bottom=Bbh;if(AIL<left)left=AIL;if(AIN<left)left=AIN;
if(AIP<left)left=AIP;if(AIL>right)right=AIL;if(AIN>right)right=AIN;if(AIP>right)
right=AIP;if(AIM<top)top=AIM;if(AIO<top)top=AIO;if(AIQ<top)top=AIQ;if(AIM>bottom
)bottom=AIM;if(AIO>bottom)bottom=AIO;if(AIQ>bottom)bottom=AIQ;var Ax=[left|0,top|
0,right|0,bottom|0];Ax=[].concat(Ax.slice(0,2),A.abf(Ax.slice(2,4),Ca));return Ax;
},Rt:function(G){var B;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));},A9s:function(E){var B;if(E<1)E=1;if(E===this.AkM)return;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.AkM=E;if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Bd(this.GetClipping());if(((E!==1)||(this.AkL!==1))&&!this.Kz){
this.Kz=A.aaL(A.aci.Asg);if(this.Kz.OE)A.zV([this,this.Rt],this.Kz,0);}if(((E===
1)&&(this.AkL===1))&&!!this.Kz){if(this.Kz.OE)A.z9([this,this.Rt],this.Kz,0);this.
Kz=null;}},A9r:function(E){var B;if(E<1)E=1;if(E===this.AkL)return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.AkL=E;if(!!this.Ab&&((this.
T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if(((E!==1)||(this.AkM!==1))&&!this.
Kz){this.Kz=A.aaL(A.aci.Asg);if(this.Kz.OE)A.zV([this,this.Rt],this.Kz,0);}if(((
E===1)&&(this.AkM===1))&&!!this.Kz){if(this.Kz.OE)A.z9([this,this.Rt],this.Kz,0);
this.Kz=null;}},NV:function(E){var B;if(E<1)E=1;if((E===this.AkL)&&(E===this.AkM
))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.
AkL=E;this.AkM=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((E!==1)&&!this.Kz){this.Kz=A.aaL(A.aci.Asg);if(this.Kz.OE)A.zV([this,this.
Rt],this.Kz,0);}if((E===1)&&!!this.Kz){if(this.Kz.OE)A.z9([this,this.Rt],this.Kz
,0);this.Kz=null;}},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());},Aj:function(E){if(E)this.
Cu(0x400,0x0);else this.Cu(0x0,0x400);},Fd:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(0x0,0x1);},_Init:function(
aArg){A.Core.AjU._Init.call(this,aArg);this.__proto__=C.DR;},_Mark:function(D){var
B;A.Core.AjU._Mark.call(this,D);if((B=this.Kz)&&(B._cycle!=D))B._Mark(B._cycle=D
);},_className:"Views::Line"};C.AJ={AMx:0xFFFFFFFF,AMy:0xFFFFFFFF,AMC:0xFFFFFFFF
,AMB:0xFFFFFFFF,AQ:0xFFFFFFFF,J9:function(CV,aClip,aOffset,Cg,aBlend){var B;var Du=
this.AMB;var DH=this.AMC;var DB=this.AMx;var DG=this.AMy;var B1=this.AQ;aBlend=aBlend&&((
this.T&0x2)===0x2);Cg=Cg+1;if((((Du===DH)&&(DB===DG))&&(Du===DB))&&(Du===0xFFFFFFFF
))Du=DH=DB=DG=B1;else if(B1!==0xFFFFFFFF){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)
*(((B1>>24)&0xFF)+1))>>8)&0xFF)<<24);Du=(Du&0xFFFFFF00)|((((Du&0xFF)*((B1&0xFF)+
1))>>8)&0xFF);Du=(Du&0xFFFF00FF)|((((((Du>>8)&0xFF)*(((B1>>8)&0xFF)+1))>>8)&0xFF
)<<8);Du=(Du&0xFF00FFFF)|((((((Du>>16)&0xFF)*(((B1>>16)&0xFF)+1))>>8)&0xFF)<<16);
DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*(((B1>>24)&0xFF)+1))>>8)&0xFF)<<24);DH=(DH&
0xFFFFFF00)|((((DH&0xFF)*((B1&0xFF)+1))>>8)&0xFF);DH=(DH&0xFFFF00FF)|((((((DH>>8
)&0xFF)*(((B1>>8)&0xFF)+1))>>8)&0xFF)<<8);DH=(DH&0xFF00FFFF)|((((((DH>>16)&0xFF)
*(((B1>>16)&0xFF)+1))>>8)&0xFF)<<16);DB=(DB&0x00FFFFFF)|((((((DB>>24)&0xFF)*(((B1>>
24)&0xFF)+1))>>8)&0xFF)<<24);DB=(DB&0xFFFFFF00)|((((DB&0xFF)*((B1&0xFF)+1))>>8)&
0xFF);DB=(DB&0xFFFF00FF)|((((((DB>>8)&0xFF)*(((B1>>8)&0xFF)+1))>>8)&0xFF)<<8);DB=(
DB&0xFF00FFFF)|((((((DB>>16)&0xFF)*(((B1>>16)&0xFF)+1))>>8)&0xFF)<<16);DG=(DG&0x00FFFFFF
)|((((((DG>>24)&0xFF)*(((B1>>24)&0xFF)+1))>>8)&0xFF)<<24);DG=(DG&0xFFFFFF00)|((((
DG&0xFF)*((B1&0xFF)+1))>>8)&0xFF);DG=(DG&0xFFFF00FF)|((((((DG>>8)&0xFF)*(((B1>>8
)&0xFF)+1))>>8)&0xFF)<<8);DG=(DG&0xFF00FFFF)|((((((DG>>16)&0xFF)*(((B1>>16)&0xFF
)+1))>>8)&0xFF)<<16);}if(Cg<256){Du=(Du&0x00FFFFFF)|((((Cg*((Du>>24)&0xFF))>>8)&
0xFF)<<24);DH=(DH&0x00FFFFFF)|((((Cg*((DH>>24)&0xFF))>>8)&0xFF)<<24);DB=(DB&0x00FFFFFF
)|((((Cg*((DB>>24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cg*((DG>>24)&0xFF
))>>8)&0xFF)<<24);}CV.AuI(aClip,A.abh(this.M,aOffset),Du,DH,DG,DB,aBlend);},AvR:
function(E){var B;if(E===this.AMx)return;this.AMx=E;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},AvS:function(E){var B;if(E===this.AMy)return;this.AMy=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},AvU:function(E){var B;
if(E===this.AMC)return;this.AMC=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.M);},AvT:function(E){var B;if(E===this.AMB)return;this.AMB=E;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AQ)return;
this.AQ=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Fd:function(){
var B;return((this.T&0x1)===0x1);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.
Cu(0x0,0x1);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.__proto__=
C.AJ;},_className:"Views::Rectangle"};C.CA={Width:1,AQ:0xFFFFFFFF,J9:function(CV
,aClip,aOffset,Cg,aBlend){var B;var Du;var DH;var DB;var DG;var B1=this.AQ;aBlend=
aBlend&&((this.T&0x2)===0x2);Cg=Cg+1;Du=DH=DB=DG=B1;if(Cg<256){Du=(Du&0x00FFFFFF
)|((((Cg*((Du>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((Cg*((DH>>24)&0xFF
))>>8)&0xFF)<<24);DB=(DB&0x00FFFFFF)|((((Cg*((DB>>24)&0xFF))>>8)&0xFF)<<24);DG=(
DG&0x00FFFFFF)|((((Cg*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CV.Bgy(aClip,A.abh(this.M
,aOffset),this.Width,Du,DH,DG,DB,aBlend);},NV:function(E){var B;if(E<0)E=0;if(E===
this.Width)return;this.Width=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.
M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(
0x0,0x1);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.__proto__=C.
CA;},_className:"Views::Border"};C.NJ={timer:null,Al:null,MI:-1,AQ:0xFFFFFFFF,Auu:
0x1F,TG:0,Dq:0,AmW:A.wf,Vf:false,J9:function(CV,aClip,aOffset,Cg,aBlend){var B;var
Nl=this.TG;if(this.MI>=0)Nl=this.MI;if(!this.Al||(Nl>=this.Al.NoOfFrames))return;
this.Al.Update();var Du;var DH;var DG;var DB;var B1=this.AQ;var J3=(((Cg+1)*255)>>
8)+1;var Ob=this.Auu;var Ax=A.abh(this.M,aOffset);var AKb=A.abe([Ax[2]-Ax[0],Ax[
3]-Ax[1]],this.AmW);aBlend=aBlend&&((this.T&0x2)===0x2);Du=DH=DB=DG=B1;if(J3<256
){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J3)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((
DH>>24)&0xFF)*J3)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J3)>>8)&
0xFF)<<24);DB=(DB&0x00FFFFFF)|((((((DB>>24)&0xFF)*J3)>>8)&0xFF)<<24);}if(((this.
AmW[0]>0)&&(AKb[0]>0))&&!((Ob&0x5)===0x5)){var d=((this.Al.FrameSize[0]/3)|0)-AKb[
0];if(((Ob&0x1)===0x1)){if(aClip[2]>Ax[2])aClip=A.abN(aClip,Ax[2]);if(d>0)Ax=A.abN(
Ax,Ax[2]+d);Ob=Ob|0x4;}else if(((Ob&0x4)===0x4)){if(aClip[0]<Ax[0])aClip=[].concat(
Ax[0],aClip.slice(1,4));if(d>0)Ax=[].concat(Ax[0]-d,Ax.slice(1,4));Ob=Ob|0x1;}else{
if(aClip[0]<Ax[0])aClip=[].concat(Ax[0],aClip.slice(1,4));if(aClip[2]>Ax[2])aClip=
A.abN(aClip,Ax[2]);if(d>0){Ax=[].concat(Ax[0]-((d/2)|0),Ax.slice(1,4));Ax=A.abN(
Ax,(Ax[2]+d)-((d/2)|0));}Ob=Ob|0x5;}}if(((this.AmW[1]>0)&&(AKb[1]>0))&&!((Ob&0xA
)===0xA)){var d=((this.Al.FrameSize[1]/3)|0)-AKb[1];if(((Ob&0x2)===0x2)){if(aClip[
3]>Ax[3])aClip=[].concat(aClip.slice(0,3),Ax[3]);if(d>0)Ax=[].concat(Ax.slice(0,
3),Ax[3]+d);Ob=Ob|0x8;}else if(((Ob&0x8)===0x8)){if(aClip[1]<Ax[1])aClip=A.abP(aClip
,Ax[1]);if(d>0)Ax=A.abP(Ax,Ax[1]-d);Ob=Ob|0x2;}else{if(aClip[1]<Ax[1])aClip=A.abP(
aClip,Ax[1]);if(aClip[3]>Ax[3])aClip=[].concat(aClip.slice(0,3),Ax[3]);if(d>0){Ax=
A.abP(Ax,Ax[1]-((d/2)|0));Ax=[].concat(Ax.slice(0,3),(Ax[3]+d)-((d/2)|0));}Ob=Ob|
0xA;}}CV.Bgx(aClip,this.Al,Nl,Ax,Ob,Du,DH,DG,DB,aBlend);},Rt:function(G){var B;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L_:function(G){var B;var Nl=
this.MI;var Td=0;if(!!this.Al)Td=this.Al.NoOfFrames*this.Al.FrameDelay;if((!!this.
timer&&(this.MI<0))&&(Td>0))this.Dq=this.timer.Bt-(this.TG*this.Al.FrameDelay);if(
!!this.timer&&(Td>0)){var Au=(this.timer.Bt-this.Dq)|0;Nl=(Au/this.Al.FrameDelay
)|0;if(Au>=Td){Nl=Nl%this.Al.NoOfFrames;this.Dq=this.timer.Bt-(Au%Td);}}if(((Nl!==
this.MI)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);this.MI=Nl;if(!Td&&
!!this.timer){A.z9([this,this.L_],this.timer,0);this.timer=null;}},L:function(E){
var B;if(E===this.AQ)return;this.AQ=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.
Bd(this.M);},Y5:function(E){var B;if(this.Vf===E)return;this.Vf=E;this.MI=-1;if(
!E&&!!this.timer){A.z9([this,this.L_],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(A.acl.AdT);A.zV([this,this.L_],this.timer,0);A.pe([this,this.
L_],this);}if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},A8G:function(
E){var B;if(E===this.Auu)return;this.Auu=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.M);},Cv:function(E){var B;if(E<0)E=0;if((E===this.TG)&&(this.MI===-1)
)return;this.TG=E;if(!this.timer)this.MI=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.M);},Ay:function(E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.
OE)A.z9([this,this.Rt],this.Al,0);this.Al=E;this.MI=-1;if(!!E&&E.OE)A.zV([this,this.
Rt],E,0);if(this.Vf){this.Y5(false);this.Y5(true);}if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(0x0,0x1
);},A8W:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(E,this.
AmW))return;this.AmW=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!((this.Auu&0xF)===
0xF))this.Ab.Bd(this.M);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.
__proto__=C.NJ;},_Mark:function(D){var B;A.Core.El._Mark.call(this,D);if((B=this.
timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::Frame"};C.An={timer:null,Al:null,Dq:0,MI:0,AQ:0xFFFFFFFF
,J5:0x12,TG:0,GY:255,Vf:false,AaD:false,J9:function(CV,aClip,aOffset,Cg,aBlend){
var B;var Nl=this.TG;if(this.MI>=0)Nl=this.MI;if(!this.Al||(Nl>=this.Al.NoOfFrames
))return;this.Al.Update();var AE=this.Db();var C0=this.Al.FrameSize;if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var Du;var DH;var DG;var DB;var B1=this.AQ;var J3=(((
Cg+1)*this.GY)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);Du=DH=DB=DG=B1;if(J3<256
){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J3)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((
DH>>24)&0xFF)*J3)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J3)>>8)&
0xFF)<<24);DB=(DB&0x00FFFFFF)|((((((DB>>24)&0xFF)*J3)>>8)&0xFF)<<24);}if(A.aaX([
AE[2]-AE[0],AE[3]-AE[1]],C0))CV.A4K(aClip,this.Al,Nl,A.abh(this.M,aOffset),A.abe(
this.M.slice(0,2),AE.slice(0,2)),Du,DH,DG,DB,aBlend);else CV.BmQ(aClip,this.Al,Nl
,A.abh(AE,aOffset),[].concat(BD,C0),Du,DH,DG,DB,aBlend,true);},Rt:function(G){var
B;if(((this.AaD&&!!this.Al)&&(this.Al.FrameSize[0]>0))&&(this.Al.FrameSize[1]>0)
)this.H(this.Db());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L_:function(
G){var B;var Nl=this.MI;var Td=0;if(!!this.Al)Td=this.Al.NoOfFrames*this.Al.FrameDelay;
if((!!this.timer&&(this.MI<0))&&(Td>0))this.Dq=this.timer.Bt-(this.TG*this.Al.FrameDelay
);if(!!this.timer&&(Td>0)){var Au=(this.timer.Bt-this.Dq)|0;Nl=(Au/this.Al.FrameDelay
)|0;if(Au>=Td){Nl=Nl%this.Al.NoOfFrames;this.Dq=this.timer.Bt-(Au%Td);}}if(((Nl!==
this.MI)&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);this.MI=Nl;if(!Td&&
!!this.timer){A.z9([this,this.L_],this.timer,0);this.timer=null;}},I0:function(E
){if(E===this.AaD)return;this.AaD=E;if(((E&&!!this.Al)&&(this.Al.FrameSize[0]>0)
)&&(this.Al.FrameSize[1]>0))this.H(this.Db());},L:function(E){var B;if(E===this.
AQ)return;this.AQ=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Y5:function(
E){var B;if(this.Vf===E)return;this.Vf=E;this.MI=-1;if(!E&&!!this.timer){A.z9([this
,this.L_],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.acl.
AdT);A.zV([this,this.L_],this.timer,0);A.pe([this,this.L_],this);}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},A3:function(E){var B;if(E===this.J5)return;
this.J5=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Cv:function(E){
var B;if(E<0)E=0;if((E===this.TG)&&(this.MI===-1))return;this.TG=E;if(!this.timer
)this.MI=-1;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Ay:function(
E){var B;if(E===this.Al)return;if(!!this.Al&&this.Al.OE)A.z9([this,this.Rt],this.
Al,0);this.Al=E;this.MI=-1;if(!!E&&E.OE)A.zV([this,this.Rt],E,0);if(this.Vf){this.
Y5(false);this.Y5(true);}if(((this.AaD&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[
1]>0))this.H(this.Db());if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},
Dm:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GY)return;this.GY=E;if(
!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Aj:function(E){if(E)this.Cu(
0x400,0x0);else this.Cu(0x0,0x400);},Fd:function(){var B;return((this.T&0x1)===0x1
);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(0x0,0x1);},Db:function(){var
B;if(!this.Al)return EW;var Bs=this.J5;var C0=this.Al.FrameSize;var A_=this.M;var
width=A_[2]-A_[0];var height=A_[3]-A_[1];if(!C0[0]||!C0[1])return EW;var C$=[0,0
,width,height];var B2=C$;if(((Bs&0x40)===0x40)){var A2S=((((C$[2]-C$[0])<<16)+((
C0[0]/2)|0))/C0[0])|0;var AAo=((((C$[3]-C$[1])<<16)+((C0[1]/2)|0))/C0[1])|0;var AiE=
A2S;if(AAo>AiE)AiE=AAo;B2=A.abL(B2,((C0[0]*AiE)+32768)>>16);B2=A.abI(B2,((C0[1]*
AiE)+32768)>>16);}else if(((Bs&0x80)===0x80)){var A2S=((((C$[2]-C$[0])<<16)+((C0[
0]/2)|0))/C0[0])|0;var AAo=((((C$[3]-C$[1])<<16)+((C0[1]/2)|0))/C0[1])|0;var AiE=
A2S;if(AAo<AiE)AiE=AAo;B2=A.abL(B2,((C0[0]*AiE)+32768)>>16);B2=A.abI(B2,((C0[1]*
AiE)+32768)>>16);}else if(!((Bs&0x100)===0x100))B2=A.abK(B2,C0);if((B2[2]-B2[0])
!==(C$[2]-C$[0])){if(((Bs&0x4)===0x4))B2=A.abM(B2,C$[2]-(B2[2]-B2[0]));else if(((
Bs&0x2)===0x2))B2=A.abM(B2,(C$[0]+(((C$[2]-C$[0])/2)|0))-(((B2[2]-B2[0])/2)|0));
}if((B2[3]-B2[1])!==(C$[3]-C$[1])){if(((Bs&0x20)===0x20))B2=A.abO(B2,C$[3]-(B2[3
]-B2[1]));else if(((Bs&0x10)===0x10))B2=A.abO(B2,(C$[1]+(((C$[3]-C$[1])/2)|0))-(((
B2[3]-B2[1])/2)|0));}B2=A.abh(B2,A_.slice(0,2));return B2;},BiZ:function(){return this.
AQ;},ARF:function(){return this.TG;},_Init:function(aArg){A.Core.El._Init.call(this
,aArg);this.__proto__=C.An;},_Mark:function(D){var B;A.Core.El._Mark.call(this,D
);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Image"};C.Text={B4:null,Ej:null,CF:
A.jV,String:A.jV,N$:null,AlR:A.wf,I1:0,Sw:0,Aco:0,Bq:A.wf,J5:0x12,AQ:0xFFFFFFFF,
Afa:false,AaD:false,X6:false,ANm:false,HS:false,K8:function(){if(!!this.N$){this.
A01(this.N$);this.N$=null;}},J9:function(CV,aClip,aOffset,Cg,aBlend){var B;if((this.
CF===A.jV)||!this.B4)return;var Bs=this.J5;var font=this.B4;var C$=A.abh(this.M,
aOffset);var Du;var DH;var DG;var DB;var col=this.AQ;var J3=(((Cg+1)*255)>>8)+1;
var J2=this.CF.charCodeAt(0)||0;var AE=A.abh(this.Db(),aOffset);var Bo=[C$[0]-AE[
0],(C$[1]-AE[1])-font.Ascent];if(J2<1)return;Du=DH=DB=DG=col;if(J3<256){Du=(Du&0x00FFFFFF
)|((((((Du>>24)&0xFF)*J3)>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF)|((((((DH>>24)&0xFF)*
J3)>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((((DG>>24)&0xFF)*J3)>>8)&0xFF)<<24);DB=(
DB&0x00FFFFFF)|((((((DB>>24)&0xFF)*J3)>>8)&0xFF)<<24);}if(((Bs&0x80)===0x80)){if(
this.AjI())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if((J2===1)&&!((Bs&0x40)===
0x40)){CV.A5d(aClip,font,this.CF,2,(this.CF.charCodeAt(1)||0)-1,C$,Bo,0,0,Du,DH,
DG,DB,true);return;}var leading=font.Leading;if(this.Sw>0)leading=(this.Sw-font.
Ascent)-font.Descent;var Aan=(font.Ascent+font.Descent)+leading;var BwC=aClip[1]-
AE[1];var BwD=aClip[3]-AE[1];var A0e=AE[2]-AE[0];var Da=0;var P=1;var B1=this.CF.
charCodeAt(1)||0;while(((Da+Aan)<BwC)&&(B1>0)){P=P+B1;Da=Da+Aan;B1=this.CF.charCodeAt(
P)||0;}while((Da<BwD)&&(B1>0)){var L5=A.abe(Bo,[0,Da]);var AlK=0;var O2=false;if(((((
Bs&0x40)===0x40)&&((this.CF.charCodeAt((P+B1)-1)||0)!==0x0A))&&((this.CF.charCodeAt(
P+1)||0)!==0x0A))&&((this.CF.charCodeAt(P+B1)||0)!==0x00))O2=true;if(O2&&!!(Bs&0x6
)){var Apy=P+B1;var Ayx=this.CF.indexOf(String.fromCharCode(0x20),P+1);var Ayy=this.
CF.indexOf(String.fromCharCode(0xA0),P+1);if(((Ayx<0)||(Ayx>=Apy))&&((Ayy<0)||(Ayy>=
Apy)))O2=false;}if(O2)AlK=A0e;else if(((Bs&0x4)===0x4))L5=[(L5[0]-A0e)+font.X$(this.
CF,P+1,B1-1),L5[1]];else if(((Bs&0x2)===0x2))L5=[(L5[0]-((A0e/2)|0))+((font.X$(this.
CF,P+1,B1-1)/2)|0),L5[1]];CV.A5d(aClip,font,this.CF,P+1,B1-1,C$,L5,AlK,0,Du,DH,DG
,DB,true);P=P+B1;Da=Da+Aan;B1=this.CF.charCodeAt(P)||0;}},H:function(E){var B;if(
A.aaY(E,this.M))return;var Beq;Beq=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Beq&&
!this.Aco)&&this.Afa)&&this.HS)&&!((this.T&0x2000)===0x2000)){this.CF=A.jV;this.
HS=false;A.pe([this,this.O4],this);}if(((this.X6&&this.HS)&&!A.aaX([(B=this.M)[2
]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.T&0x2000)===0x2000)){this.CF=
A.jV;this.HS=false;A.pe([this,this.O4],this);}A.Core.El.H.call(this,E);A.pe([this
,this.Aix],this);},Bwu:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=A.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Bwt:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},A01:function(aBidi){if(!aBidi)return;A.rB(aBidi);},BwP:function(
aSize){var bidi=null;bidi=A.v3(aSize);return bidi;},Aix:function(G){A.pe(this.Ej
,this);},O4:function(G){A.pe([this,this.Xq],this);},Xq:function(G){var B;if(this.
HS)return;var width=(B=this.M)[2]-B[0];var height=(B=this.M)[3]-B[1];var Xg=-1;var
font=this.B4;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Afa){
if(this.Aco>0)Xg=this.Aco;else if(!this.AaD)Xg=width-(this.I1*2);else Xg=width;if(
Xg<0)Xg=1;}if(!!this.N$){this.A01(this.N$);this.N$=null;}this.HS=true;if((this.String
!==A.jV)&&!!font){var length=this.String.length;if(this.ANm)this.N$=this.BwP(length
);this.CF=font.Bmf(this.String,0,Xg,length,this.N$);if(!!this.N$&&!this.BhP()){this.
A01(this.N$);this.N$=null;}}else this.CF=A.jV;this.AlR=BD;if(((this.X6&&(this.CF
!==A.jV))&&!this.AaD)&&!!font){var Bs=this.J5;var leading=font.Leading;var Is=this.
CF;var AJ9=this.AjI();if(((Bs&0x80)===0x80)){if(AJ9)Bs=(Bs&~0x80)|0x4;else Bs=(Bs&
~0x80)|0x1;}if(this.Sw>0)leading=(this.Sw-font.Ascent)-font.Descent;var AAj=(font.
Ascent+font.Descent)+leading;var J2=Is.charCodeAt(0)||0;var Alr=((height+leading
)/AAj)|0;var A0s=false;var AIT=false;if(Alr<=0)Alr=1;if(J2>Alr){var Ba=0;var AAk=
0;var AJ7=J2-1;var KW;var Nm=Is.length;var tmp=A.jV;if(!!(Bs&0x110)&&!!(Bs&0x28)
)Bs&=~0x110;if(!!(Bs&0x110))Bs&=~0x28;if(((Bs&0x20)===0x20))AAk=J2-Alr;else if(((
Bs&0x10)===0x10)||((Bs&0x100)===0x100)){AAk=((J2-Alr)/2)|0;AJ7=(AAk+Alr)-1;}else
AJ7=Alr-1;A0s=AAk>0;AIT=AJ7<(J2-1);for(KW=1;Ba<AAk;Ba=Ba+1)KW=KW+(Is.charCodeAt(
KW)||0);if(AIT)for(Nm=KW;Ba<AJ7;Ba=Ba+1)Nm=Nm+(Is.charCodeAt(Nm)||0);if(A0s){var
IN=Is.charCodeAt(KW)||0;tmp=(Hh+A.abW(Is,KW,IN))+Hh;tmp=A.abQ(tmp,0,(IN+2)&0xFFFF
);KW=KW+IN;if((tmp.charCodeAt(IN)||0)===0x0A){tmp=A.abQ(tmp,IN,0xFEFF);tmp=A.abQ(
tmp,IN+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.abQ(tmp,2,0xFEFF);tmp=A.
abQ(tmp,1,0x0A);}else tmp=A.abQ(tmp,1,0xFEFF);}tmp=tmp+A.abW(Is,KW,Nm-KW);if(AIT&&(
Nm>=KW)){var IN=Is.charCodeAt(Nm)||0;var Qp=(Hh+A.abW(Is,Nm,IN))+Hh;Qp=A.abQ(Qp,
0,(IN+2)&0xFFFF);Qp=A.abQ(Qp,1,0xFEFF);if((Qp.charCodeAt(IN)||0)===0x0A){Qp=A.abQ(
Qp,IN,0xFEFF);Qp=A.abQ(Qp,IN+1,0x0A);}if((Qp.charCodeAt(2)||0)===0x0A){Qp=A.abQ(
Qp,2,0xFEFF);Qp=A.abQ(Qp,1,0x0A);}else Qp=A.abQ(Qp,1,0xFEFF);tmp=tmp+Qp;}Is=String.
fromCharCode(Alr&0xFFFF)+tmp;}var Ba=0;var inx=1;var AJH=width-(this.I1*2);if(this.
Afa&&(this.Aco>0))AJH=this.Aco;J2=Is.charCodeAt(0)||0;for(;Ba<J2;Ba=Ba+1){var AlI=
A0s&&!Ba;var AlJ=AIT&&(Ba===(J2-1));var W8=false;var W9=false;var AtF=AJ9;if((AJ9&&
AlI)&&!AlJ){AlI=false;AlJ=true;}else if((AJ9&&AlJ)&&!AlI){AlJ=false;AlI=true;}var
Xr=inx+1;var IN=Is.charCodeAt(inx)||0;var KW=Xr;var Nm=(Xr+IN)-2;var A1e=-1;var A1f=-
1;if(!this.Afa&&(font.X$(Is,Xr,IN-1)>AJH)){var Aot=Bs;if(((Aot&0x2)===0x2)&&!!(Aot&
0x5))Aot&=~0x2;if(((Aot&0x2)===0x2))Aot&=~0x5;if(((Aot&0x4)===0x4))W8=true;else if(((
Aot&0x2)===0x2)){W8=true;W9=true;}else W9=true;}if((Is.charCodeAt(KW)||0)===0x0A
)KW=KW+1;if((Is.charCodeAt(Nm)||0)===0x0A)Nm=Nm-1;while(W8&&((Is.charCodeAt(KW)||
0)===0xFEFF))KW=KW+1;while(W9&&((Is.charCodeAt(Nm)||0)===0xFEFF))Nm=Nm-1;W8=W8&&
!AlJ;W9=W9&&!AlI;while((((W8||W9)||AlI)||AlJ)&&(KW<Nm)){if((W8&&(AtF||!W9))||AlI
){if(A1e>0)Is=A.abQ(Is,A1e,0xFEFF);Is=A.abQ(Is,KW,0x2026);A1e=KW;KW=KW+1;AtF=!AtF;
AlI=false;if(font.X$(Is,Xr,IN-1)<=AJH){W8=false;W9=false;}else W8=W8||!W9;}if((W9&&(
!AtF||!W8))||AlJ){if(A1f>0)Is=A.abQ(Is,A1f,0xFEFF);Is=A.abQ(Is,Nm,0x2026);A1f=Nm;
Nm=Nm-1;AtF=!AtF;AlJ=false;if(font.X$(Is,Xr,IN-1)<=AJH){W8=false;W9=false;}else W9=
W9||!W8;}}inx=inx+IN;}this.AlR=[font.A5J(Is),((Is.charCodeAt(0)||0)*AAj)-leading
];this.CF=Is;}if(this.AaD&&(this.CF!==A.jV)){var Atr=[this.I1,0];this.T=this.T|0x2000;
this.H(A.abg(A.aaT(this.Db(),Atr),this.Bq));this.T=this.T&~0x2000;}if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([this,this.Aix],this);},Bkv:function(
E){if(E===this.ANm)return;this.ANm=E;this.CF=A.jV;this.HS=false;A.pe([this,this.
O4],this);},HH:function(E){if(E<0)E=0;if(this.I1===E)return;this.I1=E;this.CF=A.
jV;this.HS=false;A.pe([this,this.O4],this);},BlL:function(E){var B;if(E<0)E=0;if(
this.Sw===E)return;this.Sw=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.
M);if(this.X6){this.CF=A.jV;this.HS=false;A.pe([this,this.O4],this);}if(this.AaD&&
this.HS)this.H(A.abg(this.Db(),this.Bq));if(this.HS)A.pe([this,this.Aix],this);}
,Bku:function(E){if(E===this.X6)return;this.X6=E;if(((this.Afa&&!!!this.Aco)||E)||
!!this.Ej)this.T=this.T&~0x100;else this.T=this.T|0x100;this.CF=A.jV;this.HS=false;
A.pe([this,this.O4],this);},QT:function(E){if(A.aa0(E,this.Ej))return;this.Ej=E;
if(((!!!this.Aco&&this.Afa)||!!E)||this.X6)this.T=this.T&~0x100;else this.T=this.
T|0x100;},I0:function(E){if(E===this.AaD)return;this.AaD=E;if(E&&this.X6){this.CF=
A.jV;this.HS=false;A.pe([this,this.O4],this);}if(E&&this.HS){var Atr=[this.I1,0];
this.T=this.T|0x2000;this.H(A.abg(A.aaT(this.Db(),Atr),this.Bq));this.T=this.T&~
0x2000;}},Bl2:function(E){if(E<0)E=0;if(E===this.Aco)return;this.Aco=E;if(this.Afa&&
this.HS){this.CF=A.jV;this.HS=false;A.pe([this,this.O4],this);}if(((!!!E&&this.Afa
)||this.X6)||!!this.Ej)this.T=this.T&~0x100;else this.T=this.T|0x100;},KL:function(
E){if(E===this.Afa)return;this.Afa=E;if(this.HS){this.CF=A.jV;this.HS=false;A.pe([
this,this.O4],this);}if(((E&&!!!this.Aco)||this.X6)||!!this.Ej)this.T=this.T&~0x100;
else this.T=this.T|0x100;},Gh:function(E){var B;if(A.aaX(E,this.Bq))return;this.
Bq=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);if(this.HS)A.pe([this
,this.Aix],this);},A3:function(E){var B;if(E===this.J5)return;this.J5=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);if(this.X6){this.CF=A.jV;this.HS=false;
A.pe([this,this.O4],this);}if(this.HS)A.pe([this,this.Aix],this);},R:function(E){
if(E===this.String)return;this.String=E;this.CF=A.jV;this.HS=false;A.pe([this,this.
O4],this);},S:function(E){if(E===this.B4)return;this.B4=E;this.CF=A.jV;this.HS=false;
A.pe([this,this.O4],this);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Aj:function(E){if(E)this.
Cu(0x400,0x0);else this.Cu(0x0,0x400);},Fd:function(){var B;return((this.T&0x1)===
0x1);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(0x0,0x1);},AjI:function(
){if(!this.HS)this.Xq(this);if(!this.N$)return false;var result=false;var bidi=this.
N$;result=A.v2(bidi);return result;},BhP:function(){if(!this.HS)this.Xq(this);if(
!this.N$)return false;var result=false;var bidi=this.N$;result=A.zZ(bidi);return result;
},AF3:function(aIndex){if(((this.String===A.jV)||!this.B4)||this.X6)return BD;if(
!this.HS)this.Xq(this);if(aIndex<0)aIndex=0;var Bx0=(this.CF.charCodeAt(0)||0)-1;
var L9=this.CF.charCodeAt(1)||0;var inx=1;var AiI=2;var Ba=0;var col=-1;var CC=true;
aIndex=aIndex+2;while((Ba<Bx0)&&((inx+L9)<=aIndex)){inx=inx+L9;Ba=Ba+1;AiI=AiI+1;
aIndex=aIndex+1;L9=this.CF.charCodeAt(inx)||0;}if(aIndex>(inx+L9))aIndex=inx+L9;
if(!!this.N$)aIndex=(inx+this.Bwt(this.N$,(inx+1)-AiI,(inx+L9)-AiI,(aIndex-inx)-
1))+1;for(;aIndex>inx;inx=inx+1){var Io=this.CF.charCodeAt(inx+1)||0;if(CC)col=col+
1;CC=(Io!==0xFEFF)&&(Io!==0x0A);}return[col,Ba];},Anq:function(Aoj){if(((this.String===
A.jV)||!this.B4)||this.X6)return 0;if(!this.HS)this.Xq(this);var Ba=Aoj[1];var col=
Aoj[0];var inx=1;var AiI=2;var J2=this.CF.charCodeAt(0)||0;var L9=this.CF.charCodeAt(
1)||0;if(Ba>=J2){Ba=J2-1;col=this.CF.length;}if(Ba<0){Ba=0;col=0;}if(col<0)col=0;
while((Ba>0)&&(L9>0)){inx=inx+L9;Ba=Ba-1;AiI=AiI+1;L9=this.CF.charCodeAt(inx)||0;
}var Xf=inx;var AJ8=(inx-AiI)+1;var Apy=(AJ8+L9)-1;var Az8=false;while((col>=0)&&(
L9>1)){var Io=this.CF.charCodeAt(inx+1)||0;inx=inx+1;L9=L9-1;Az8=(Io===0xFEFF)||(
Io===0x0A);if(!Az8){col=col-1;Xf=inx;}}if((!Az8&&(col>=0))&&((this.CF.charCodeAt(
inx+1)||0)===0x00))Az8=true;if(Az8)Xf=Xf+1;Xf=Xf-AiI;if(!!this.N$)Xf=AJ8+this.Bwu(
this.N$,AJ8,Apy,Xf-AJ8);return Xf;},AS0:function(KS){var B;if((this.String===A.jV
)||!this.B4)return BD;if(!this.HS)this.Xq(this);var AE=this.Db();if((AE[0]>=AE[2
])||(AE[1]>=AE[3]))return BD;var font=this.B4;var Bs=this.J5;var J2=this.CF.charCodeAt(
0)||0;var leading=font.Leading;if(KS[1]<AE[1])KS=[KS[0],AE[1]];if(KS[1]>=AE[3])KS=[
KS[0],AE[3]-1];if(this.Sw>0)leading=(this.Sw-font.Ascent)-font.Descent;var Aan=(
font.Ascent+font.Descent)+leading;var Ba=((KS[1]-AE[1])/Aan)|0;var Nv=this.ACj(Ba
);var L9=Nv.length;var O2=false;if(((Bs&0x80)===0x80)){if(this.AjI())Bs=(Bs&~0x80
)|0x4;else Bs=(Bs&~0x80)|0x1;}if(((Bs&0x40)===0x40)&&(Ba<(J2-1)))O2=true;if((O2&&(
Nv.indexOf(String.fromCharCode(0x20),0)<0))&&(Nv.indexOf(String.fromCharCode(0xA0
),0)<0))O2=false;if(O2){var inx=1;var Apx=Ba;while(Apx>0){inx=inx+(this.CF.charCodeAt(
inx)||0);Apx=Apx-1;}if(((this.CF.charCodeAt(inx+1)||0)===0x0A)||((this.CF.charCodeAt((
inx+(this.CF.charCodeAt(inx)||0))-1)||0)===0x0A))O2=false;}var AlK=0;var Eg=0;if(
O2)AlK=AE[2]-AE[0];else if(((Bs&0x4)===0x4))Eg=(AE[2]-AE[0])-font.X$(Nv,0,L9);else
if(((Bs&0x2)===0x2))Eg=(((AE[2]-AE[0])/2)|0)-((font.X$(Nv,0,L9)/2)|0);var col=font.
Bhq(Nv,0,L9,(KS[0]-AE[0])-Eg,AlK);if(col<0)col=0;return[col,Ba];},AeP:function(Aoj
){var B;if((this.String===A.jV)||!this.B4)return BD;if(!this.HS)this.Xq(this);var
J2=this.CF.charCodeAt(0)||0;var font=this.B4;var Bs=this.J5;var Ba=Aoj[1];var col=
Aoj[0];if(Ba>=J2){Ba=J2-1;col=this.CF.length;}if(Ba<0){Ba=0;col=0;}var Nv=this.ACj(
Ba);var L9=Nv.length;var AE=this.Db();var O2=false;var leading=font.Leading;if(((
Bs&0x80)===0x80)){if(this.AjI())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if(((Bs&
0x40)===0x40)&&(Ba<(J2-1)))O2=true;if((O2&&(Nv.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nv.indexOf(String.fromCharCode(0xA0),0)<0))O2=false;if(O2){var inx=1;var
Apx=Ba;while(Apx>0){inx=inx+(this.CF.charCodeAt(inx)||0);Apx=Apx-1;}if(((this.CF.
charCodeAt(inx+1)||0)===0x0A)||((this.CF.charCodeAt((inx+(this.CF.charCodeAt(inx
)||0))-1)||0)===0x0A))O2=false;}if(this.Sw>0)leading=(this.Sw-font.Ascent)-font.
Descent;var Da=(AE[1]+(Ba*((font.Ascent+font.Descent)+leading)))+font.Ascent;var
AlK=0;var Eg=AE[0];if(O2)AlK=AE[2]-AE[0];else if(((Bs&0x4)===0x4))Eg=AE[2]-font.
X$(Nv,0,L9);else if(((Bs&0x2)===0x2))Eg=(Eg+(((AE[2]-AE[0])/2)|0))-((font.X$(Nv,
0,L9)/2)|0);var pos=font.Bhm(Nv,0,L9,col,AlK);if(pos<0)pos=0;return[Eg+pos,Da];}
,AN7:function(Ac){var B;if((this.String===A.jV)||!this.B4)return EW;if(!this.HS)
this.Xq(this);var J2=this.CF.charCodeAt(0)||0;var font=this.B4;if((Ac<0)||((Ac>=
J2)&&(Ac>0)))return EW;var Bs=this.J5;var inx=1;var leading=font.Leading;var A_=
this.M;var width=A_[2]-A_[0];var height=A_[3]-A_[1];width=width-(this.I1*2);if(((
Bs&0x80)===0x80)){if(this.AjI())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if(this.
Sw>0)leading=(this.Sw-font.Ascent)-font.Descent;var Da=Ac*((font.Ascent+font.Descent
)+leading);var Eg=0;while(Ac>0){inx=inx+(this.CF.charCodeAt(inx)||0);Ac=Ac-1;}var
AAl=(this.CF.charCodeAt(inx)||0)-1;var Ber=font.X$(this.CF,inx+1,AAl);var A2O=font.
A5S(this.CF,inx+1,AAl);var Apz=Ber;var Aan=font.Ascent+font.Descent;var AAB=(J2*((
font.Ascent+font.Descent)+leading))-leading;if(!J2)AAB=Aan;if((((this.CF.charCodeAt((
inx+AAl)+1)||0)===0x00)||((this.CF.charCodeAt(inx+AAl)||0)===0x0A))||((this.CF.charCodeAt(
inx+1)||0)===0x0A))Bs=Bs&~0x40;if(((Bs&0x40)===0x40)){var Apy=(inx+1)+AAl;var Ayx=
this.CF.indexOf(String.fromCharCode(0x20),inx+1);var Ayy=this.CF.indexOf(String.
fromCharCode(0xA0),inx+1);if(((Ayx>=0)&&(Ayx<Apy))||((Ayy>=0)&&(Ayy<Apy)))Apz=width;
}if((!!(Bs&0x110)&&!!(Bs&0x28))&&(AAB>height))Bs&=~0x110;if(!!(Bs&0x110))Bs&=~0x28;
if((((Bs&0x2)===0x2)&&!!(Bs&0x5))&&(Apz>width))Bs&=~0x2;if(((Bs&0x2)===0x2))Bs&=
~0x5;if(((Bs&0x4)===0x4))Eg=width-Apz;else if(((Bs&0x2)===0x2))Eg=((width/2)|0)-((
Apz/2)|0);if(((Bs&0x20)===0x20))Da=Da+(height-AAB);else if(((Bs&0x100)===0x100))
Da=((Da+((height/2)|0))-((AAB/2)|0))+(((this.B4.Descent-this.B4.Ascent)/2)|0);else
if(((Bs&0x10)===0x10))Da=(Da+((height/2)|0))-((AAB/2)|0);Eg=(Eg+A2O[0])+this.I1;
Apz=(Apz+(A2O[2]-A2O[0]))-Ber;var B2;{var BdW=[A_[0]+Eg,A_[1]+Da];B2=[].concat(BdW
,A.abf(BdW,[Apz,Aan]));}return A.abh(B2,this.Bq);},ACj:function(Ac){if((this.String===
A.jV)||!this.B4)return A.jV;if(!this.HS)this.Xq(this);var J2=this.CF.charCodeAt(
0)||0;var inx=1;if((!this.B4||(Ac<0))||(Ac>=J2))return A.jV;while(Ac>0){inx=inx+(
this.CF.charCodeAt(inx)||0);Ac=Ac-1;}var Xr=inx;var As9=inx+(this.CF.charCodeAt(
inx)||0);var Io=0x00;do{Xr=Xr+1;Io=this.CF.charCodeAt(Xr)||0;}while(((Io===0xFEFF
)||(Io===0x0A))&&(Xr<=As9));do{As9=As9-1;Io=this.CF.charCodeAt(As9)||0;}while(((
Io===0xFEFF)||(Io===0x0A))&&(Xr<=As9));var Nv=A.abW(this.CF,Xr,(As9-Xr)+1);var Ao1;
for(Ao1=Nv.indexOf(String.fromCharCode(0xFEFF),0);Ao1>=0;Ao1=Nv.indexOf(String.fromCharCode(
0xFEFF),Ao1+1)){var Xf=Ao1+1;while((Nv.charCodeAt(Xf)||0)===0xFEFF)Xf=Xf+1;Nv=A.
ab1(Nv,Ao1,Xf-Ao1);}return Nv;},Db:function(){var B;if((this.String===A.jV)||!this.
B4)return EW;if(!this.HS)this.Xq(this);if(this.CF===A.jV)return EW;var leading=this.
B4.Leading;var AAj=(this.B4.Ascent+this.B4.Descent)+this.B4.Leading;if(this.Sw>0
){leading=(this.Sw-this.B4.Ascent)-this.B4.Descent;AAj=this.Sw;}if(A.aaX(this.AlR
,BD))this.AlR=[this.B4.A5J(this.CF),this.AlR[1]];this.AlR=[this.AlR[0],((this.CF.
charCodeAt(0)||0)*AAj)-leading];var Bs=this.J5;var A_=this.M;var Atr=this.I1;var
width=A_[2]-A_[0];var height=A_[3]-A_[1];var C$=[Atr,0,width-Atr,height];var B2=[
].concat(C$.slice(0,2),A.abf(C$.slice(0,2),this.AlR));if(((Bs&0x80)===0x80)){if(
this.AjI())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if(((Bs&0x40)===0x40)){var Xg=
this.Aco;if(Xg<=0)Xg=width-(this.I1*2);if(Xg<0)Xg=0;if(Xg>(B2[2]-B2[0]))B2=A.abL(
B2,Xg);}if((!!(Bs&0x110)&&!!(Bs&0x28))&&((B2[3]-B2[1])>(C$[3]-C$[1])))Bs&=~0x110;
if(!!(Bs&0x110))Bs&=~0x28;if((((Bs&0x2)===0x2)&&!!(Bs&0x5))&&((B2[2]-B2[0])>(C$[
2]-C$[0])))Bs&=~0x2;if(((Bs&0x2)===0x2))Bs&=~0x5;if((B2[2]-B2[0])!==(C$[2]-C$[0]
)){if(((Bs&0x4)===0x4))B2=A.abM(B2,C$[2]-(B2[2]-B2[0]));else if(((Bs&0x2)===0x2)
)B2=A.abM(B2,(C$[0]+(((C$[2]-C$[0])/2)|0))-(((B2[2]-B2[0])/2)|0));}if((B2[3]-B2[
1])!==(C$[3]-C$[1])){if(((Bs&0x20)===0x20))B2=A.abO(B2,C$[3]-(B2[3]-B2[1]));else
if(((Bs&0x100)===0x100))B2=A.abO(B2,((C$[1]+(((C$[3]-C$[1])/2)|0))-(((B2[3]-B2[1
])/2)|0))+(((this.B4.Descent-this.B4.Ascent)/2)|0));else if(((Bs&0x10)===0x10))B2=
A.abO(B2,(C$[1]+(((C$[3]-C$[1])/2)|0))-(((B2[3]-B2[1])/2)|0));}B2=A.abh(B2,A_.slice(
0,2));return A.abh(B2,this.Bq);},_Init:function(aArg){A.Core.El._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.K8();this.__proto__=A.Core.El;
A.Core.El._Done.call(this);},_Mark:function(D){var B;A.Core.El._Mark.call(this,D
);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::Text"};C.Auc={attrString:null,AttrSet:
null,String:A.jV,J5:0x12,J9:function(CV,aClip,aOffset,Cg,aBlend){var B;if(!this.
attrString||!this.AttrSet)return;var AE=this.Db();Cg=Cg+1;if((AE[0]>=AE[2])||(AE[
1]>=AE[3]))return;CV.Bgv(aClip,this.AttrSet,this.attrString,A.abh(this.M,aOffset
),A.abe(this.M.slice(0,2),AE.slice(0,2)),(Cg*255)>>8,(Cg*255)>>8,(Cg*255)>>8,(Cg
*255)>>8,true);},H:function(E){var B;if(A.aaY(E,this.M))return;if(((((B=this.M)[
2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.T&0x2000)===0x2000)){this.attrString=
null;A.pe([this,this.O4],this);}A.Core.El.H.call(this,E);A.pe([this,this.Aix],this
);},Aix:function(G){},Xq:function(G){var B;var AKL;AKL=(B=this.M)[2]-B[0];if(AKL<
0)AKL=1;if((this.String===A.jV)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(
this.String!==A.jV))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A32
,0);if(!!this.attrString)this.attrString.Bme(this.AttrSet,this.String,AKL,false);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([this,this.Aix],this);
},O4:function(G){A.pe([this,this.Xq],this);},Bel:function(G){var B;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.M);},A3:function(E){var B;E&=~0x140;if(E===this.
J5)return;this.J5=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);A.pe([
this,this.Aix],this);},R:function(E){if(this.String===E)return;this.String=E;this.
attrString=null;A.pe([this,this.O4],this);},A8q:function(E){if(this.AttrSet===E)
return;if(!!this.AttrSet){A.z9([this,this.Bel],this.AttrSet,0);A.z9([this,this.O4
],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.zV([
this,this.Bel],this.AttrSet,0);A.zV([this,this.O4],this.AttrSet,1);}A.pe([this,this.
O4],this);},Db:function(){var B;if((this.String===A.jV)||!this.AttrSet)return EW;
if(!this.attrString)this.Xq(this);if(!this.attrString)return EW;var Bs=this.J5;var
C0=this.attrString.Bhr();var C$=A.aaT(this.M,BD);var B2=[].concat(C$.slice(0,2),
A.abf(C$.slice(0,2),C0));if(!C0[0]||!C0[1])return EW;if(((Bs&0x80)===0x80)){if(this.
attrString.AjI())Bs=(Bs&~0x80)|0x4;else Bs=(Bs&~0x80)|0x1;}if((B2[2]-B2[0])!==(C$[
2]-C$[0])){if(((Bs&0x4)===0x4))B2=A.abM(B2,C$[2]-(B2[2]-B2[0]));else if(((Bs&0x2
)===0x2))B2=A.abM(B2,(C$[0]+(((C$[2]-C$[0])/2)|0))-(((B2[2]-B2[0])/2)|0));}if((B2[
3]-B2[1])!==(C$[3]-C$[1])){if(((Bs&0x20)===0x20))B2=A.abO(B2,C$[3]-(B2[3]-B2[1])
);else if(((Bs&0x10)===0x10))B2=A.abO(B2,(C$[1]+(((C$[3]-C$[1])/2)|0))-(((B2[3]-
B2[1])/2)|0));}return B2;},_Init:function(aArg){A.Core.El._Init.call(this,aArg);
this.__proto__=C.Auc;this.T=0x3;},_Mark:function(D){var B;A.Core.El._Mark.call(this
,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"};C.AnM={Aih:
null,Ft:null,Ah6:0,Ah5:0,UO:A.wf,Ch:A.abi(4,3,0,null),AFZ:A.wf,Ta:0,Apc:0,Kg:function(
E){if(A.aaX(E,this.Kk))return;A.Core.Zb.Kg.call(this,E);this.Ch.Set(3,0,E[0]);this.
Ch.Set(3,1,E[1]);this.Ch.Set(3,2,1);this.Ta=0x45;this.Ft=null;A.pe([this,this.AiQ
],this);},Kf:function(E){if(A.aaX(E,this.Mv))return;A.Core.Zb.Kf.call(this,E);this.
Ch.Set(2,0,E[0]);this.Ch.Set(2,1,E[1]);this.Ch.Set(2,2,1);this.Ta=0x45;this.Ft=null;
A.pe([this,this.AiQ],this);},DM:function(E){if(A.aaX(E,this.Ev))return;A.Core.Zb.
DM.call(this,E);this.Ch.Set(1,0,E[0]);this.Ch.Set(1,1,E[1]);this.Ch.Set(1,2,1);this.
Ta=0x45;this.Ft=null;A.pe([this,this.AiQ],this);},DY:function(E){if(A.aaX(E,this.
Ek))return;A.Core.Zb.DY.call(this,E);this.Ch.Set(0,0,E[0]);this.Ch.Set(0,1,E[1]);
this.Ch.Set(0,2,1);this.Ta=0x45;this.Ft=null;A.pe([this,this.AiQ],this);},A0k:function(
){return;},AiQ:function(G){var B;this.Aih=null;if(this.Ta===0x00)return;if(this.
Ta===0x45){var KX=A._NewObject(A.Graphics.Axh,0);KX=KX.AMZ(this.Ch.Get(0,0),this.
Ch.Get(0,1),this.Ch.Get(1,0),this.Ch.Get(1,1),this.Ch.Get(2,0),this.Ch.Get(2,1),
this.Ch.Get(3,0),this.Ch.Get(3,1));if(!!KX){KX.ABk(0,0);this.Ch.Set(0,2,KX.UD*240
);KX.ABk(1,0);this.Ch.Set(1,2,KX.UD*240);KX.ABk(1,1);this.Ch.Set(2,2,KX.UD*240);
KX.ABk(0,1);this.Ch.Set(3,2,KX.UD*240);}this.A0k();}if((((this.Ta===0x4D)&&!!this.
Ft)&&!!this.UO[0])&&!!this.UO[1]){var AiL=[].concat(BD,this.UO);var AiK=this.AFZ;
var AfH=AiL[0]-AiK[0];var Ax=AiL[2]-AiK[0];var D1=AiL[1]-AiK[1];var Ri=AiL[3]-AiK[
1];this.Ft.AeK(AfH,D1);this.Ch.Set(0,0,this.Ft.PR+this.Ah5);this.Ch.Set(0,1,this.
Ft.PT+this.Ah6);this.Ch.Set(0,2,this.Ft.UD);this.Ft.AeK(Ax,D1);this.Ch.Set(1,0,this.
Ft.PR+this.Ah5);this.Ch.Set(1,1,this.Ft.PT+this.Ah6);this.Ch.Set(1,2,this.Ft.UD);
this.Ft.AeK(Ax,Ri);this.Ch.Set(2,0,this.Ft.PR+this.Ah5);this.Ch.Set(2,1,this.Ft.
PT+this.Ah6);this.Ch.Set(2,2,this.Ft.UD);this.Ft.AeK(AfH,Ri);this.Ch.Set(3,0,this.
Ft.PR+this.Ah5);this.Ch.Set(3,1,this.Ft.PT+this.Ah6);this.Ch.Set(3,2,this.Ft.UD);
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Ek=[(this.
Ch.Get(0,0)+0.5)|0,(this.Ch.Get(0,1)+0.5)|0];this.Ev=[(this.Ch.Get(1,0)+0.5)|0,(
this.Ch.Get(1,1)+0.5)|0];this.Mv=[(this.Ch.Get(2,0)+0.5)|0,(this.Ch.Get(2,1)+0.5
)|0];this.Kk=[(this.Ch.Get(3,0)+0.5)|0,(this.Ch.Get(3,1)+0.5)|0];this.A0k();}this.
Apc=this.Ta;this.Ta=0x00;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));},BlP:function(E){if(A.aaX(E,this.AFZ))return;this.AFZ=E;if((this.Apc!==0x45)&&(
this.Ta===0x00)){this.Ta=this.Apc;A.pe([this,this.AiQ],this);}},AqN:function(E6){
var B;if(!!!this.Aih){this.Aih=A._NewObject(A.Graphics.A6f,0);this.Aih.AMZ(this.
Ch.Get(0,0),this.Ch.Get(0,1),this.Ch.Get(1,0),this.Ch.Get(1,1),this.Ch.Get(2,0),
this.Ch.Get(2,1),this.Ch.Get(3,0),this.Ch.Get(3,1));}if(!this.Aih.AeK(E6))return BD;
var ApE=[].concat(BD,this.UO);var Eg=this.Aih.PR*(ApE[2]-ApE[0]);var Da=this.Aih.
PT*(ApE[3]-ApE[1]);return A.abf([Eg|0,Da|0],ApE.slice(0,2));},A_E:function(Bay,L0
){var B;this.Aih=null;if(!L0)throw new Error(I8);if(!this.Ft)this.Ft=A._NewObject(
A.Graphics.Axh,0);this.Ft.BfF(L0);this.Ah5=Bay[0];this.Ah6=Bay[1];this.Apc=0x4D;
this.Ta=0x00;if(!this.UO[0]||!this.UO[1])return;var AiL=[].concat(BD,this.UO);var
AiK=this.AFZ;var AfH=AiL[0]-AiK[0];var Ax=AiL[2]-AiK[0];var D1=AiL[1]-AiK[1];var
Ri=AiL[3]-AiK[1];this.Ft.AeK(AfH,D1);this.Ch.Set(0,0,this.Ft.PR+this.Ah5);this.Ch.
Set(0,1,this.Ft.PT+this.Ah6);this.Ch.Set(0,2,this.Ft.UD);this.Ft.AeK(Ax,D1);this.
Ch.Set(1,0,this.Ft.PR+this.Ah5);this.Ch.Set(1,1,this.Ft.PT+this.Ah6);this.Ch.Set(
1,2,this.Ft.UD);this.Ft.AeK(Ax,Ri);this.Ch.Set(2,0,this.Ft.PR+this.Ah5);this.Ch.
Set(2,1,this.Ft.PT+this.Ah6);this.Ch.Set(2,2,this.Ft.UD);this.Ft.AeK(AfH,Ri);this.
Ch.Set(3,0,this.Ft.PR+this.Ah5);this.Ch.Set(3,1,this.Ft.PT+this.Ah6);this.Ch.Set(
3,2,this.Ft.UD);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping()
);this.Ek=[(this.Ch.Get(0,0)+0.5)|0,(this.Ch.Get(0,1)+0.5)|0];this.Ev=[(this.Ch.
Get(1,0)+0.5)|0,(this.Ch.Get(1,1)+0.5)|0];this.Mv=[(this.Ch.Get(2,0)+0.5)|0,(this.
Ch.Get(2,1)+0.5)|0];this.Kk=[(this.Ch.Get(3,0)+0.5)|0,(this.Ch.Get(3,1)+0.5)|0];
if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.A0k();},_Init:
function(aArg){A.Core.Zb._Init.call(this,aArg);(this.Ch=[]).__proto__=C.AnM.Ch;this.
__proto__=C.AnM;this.T=0x3;},_Mark:function(D){var B;A.Core.Zb._Mark.call(this,D
);if((B=this.Aih)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ft)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AUz={Fg:null,bitmap:null
,O:null,GY:255,J9:function(CV,aClip,aOffset,Cg,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Np=aOffset[0];var Nq=aOffset[1];var AE=[].concat(BD,this.
UO);aBlend=aBlend&&((this.T&0x2)===0x2);Cg=Cg+1;var BcV;var BcW;var BcX;var BcY;
var Bx_=this.GY;BcV=BcW=BcX=BcY=Bx_;var Ak5=255|(255<<8)|(255<<16)|((((Cg*BcV)>>
8)&0xFF)<<24);var Ak6=255|(255<<8)|(255<<16)|((((Cg*BcW)>>8)&0xFF)<<24);var Bwv=
255|(255<<8)|(255<<16)|((((Cg*BcX)>>8)&0xFF)<<24);var Bww=255|(255<<8)|(255<<16)|((((
Cg*BcY)>>8)&0xFF)<<24);aClip=A.aaV(aClip,A.abh(EW,aOffset));CV.Ahu(aClip,this.bitmap
,0,this.Ch.Get(0,0)+Np,this.Ch.Get(0,1)+Nq,this.Ch.Get(0,2),this.Ch.Get(1,0)+Np,
this.Ch.Get(1,1)+Nq,this.Ch.Get(1,2),this.Ch.Get(2,0)+Np,this.Ch.Get(2,1)+Nq,this.
Ch.Get(2,2),this.Ch.Get(3,0)+Np,this.Ch.Get(3,1)+Nq,this.Ch.Get(3,2),AE,Ak5,Ak6,
Bwv,Bww,aBlend,true);},GQ:function(CK){if(!this.O||!this.Fg)return null;var BN=(
A.Core.AdP.isPrototypeOf(CK)?CK:null);var DV=(A.Core.Ap$.isPrototypeOf(CK)?CK:null
);if(!BN&&!DV)return null;var Fi=BD;var BX=this.Fg.Ab;while(!!BX&&(BX!==this.O)){
Fi=A.abe(Fi,BX.M.slice(0,2));BX=BX.Ab;}var X=this.Fg;if(!!BN&&!BN.Down)this.Fg=null;
if(!!BN){BN.HV=A.abf(this.AqN(BN.HV),Fi);BN.NK=A.abf(this.AqN(BN.NK),Fi);return X.
GQ(BN);}if(!!DV){var Byc=A.abf(this.AqN(A.abe(DV.HV,DV.Dx)),Fi);DV.HV=A.abf(this.
AqN(DV.HV),Fi);DV.NK=A.abf(this.AqN(DV.NK),Fi);DV.Dx=A.abe(DV.HV,Byc);return X.GQ(
DV);}return C.AnM.GQ.call(this,CK);},X1:function(C_,BF,N9,ZW,AcI,AcH){var B;if(!
this.O||!((this.O.T&0x18)===0x18))return null;var pos=A.aaI(C_);pos=this.AqN(pos
);var ApE=[].concat(BD,this.UO);if(!A.wa(ApE,pos))return null;var Jt=this.O.X1(A.
abh(A.abh([0,0,C_[2]-C_[0],C_[3]-C_[1]],pos),this.O.M.slice(0,2)),BF,N9,ZW,null,
AcH);if(!!Jt)this.Fg=Jt.Cf;else this.Fg=null;if(!!this.Fg)return A._NewObject(A.
Core.Aul,0).Initialize(this,BD);return null;},Rt:function(G){var B;var BcZ=this.
UO;if(!!this.O)this.bitmap=this.O.Fq;else this.bitmap=null;if(!!this.bitmap)this.
UO=this.bitmap.FrameSize;else this.UO=BD;if(((A.aaX(BcZ,this.UO)||((this.Apc===0x45
)&&(this.Ta===0x00)))&&!!this.Ab)&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if(((this.Apc!==0x45)&&(this.Ta===0x00))&&!A.aaX(BcZ,this.UO)){this.Ta=this.Apc;
A.pe([this,this.AiQ],this);}},Dm:function(E){var B;if(E===this.GY)return;this.GY=
E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());},BkZ:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ab))throw new Error(IJ);if(!!this.O){A.
z9([this,this.Rt],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.zV([this,this.Rt
],E,0);this.bitmap=E.Fq;}this.Rt(this);},AvH:function(){return this.GY;},_Init:function(
aArg){C.AnM._Init.call(this,aArg);this.__proto__=C.AUz;},_Mark:function(D){var B;
C.AnM._Mark.call(this,D);if((B=this.Fg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Ad0={Hp:null,AQ:0xFFFFFFFF,Dx:A.wf
,ANM:false,K8:function(){this.A0D();},J9:function(CV,aClip,aOffset,Cg,aBlend){if(
!this.Hp)return;var Du;var DH;var DB;var DG;var B1=this.AQ;Cg=Cg+1;Du=DH=DB=DG=B1;
if(Cg<256){Du=(Du&0x00FFFFFF)|((((Cg*((Du>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&0x00FFFFFF
)|((((Cg*((DH>>24)&0xFF))>>8)&0xFF)<<24);DB=(DB&0x00FFFFFF)|((((Cg*((DB>>24)&0xFF
))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cg*((DG>>24)&0xFF))>>8)&0xFF)<<24);}CV.
Ad0(aClip,this.Hp,A.abh(this.M,aOffset),this.ANM,this.Dx,Du,DH,DG,DB,true,true,0
);},A0D:function(){return;},AiR:function(G){var B;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AQ)return;this.AQ=E;if((
!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Bd(this.M);},Anf:function(E){
var B;if(A.aaX(E,this.Dx))return;this.Dx=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hp)this.Ab.Bd(this.M);},BkU:function(E){var B;if(E===this.ANM)return;this.
ANM=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Bd(this.M);},Y8:function(
E){var B;if(E===this.Hp)return;if(!!this.Hp)A.z9([this,this.AiR],this.Hp,0);this.
Hp=E;if(!!this.Hp)A.zV([this,this.AiR],this.Hp,0);if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.M);},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(0x0,0x1
);},_Init:function(aArg){A.Core.El._Init.call(this,aArg);this.__proto__=C.Ad0;},
_Done:function(){this.K8();this.__proto__=A.Core.El;A.Core.El._Done.call(this);}
,_Mark:function(D){var B;A.Core.El._Mark.call(this,D);if((B=this.Hp)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Hf={Hp:null,AQ:0xFFFFFFFF
,Dx:A.wf,Width:1,K8:function(){this.A0D();},J9:function(CV,aClip,aOffset,Cg,aBlend
){if(!this.Hp)return;var Du;var DH;var DB;var DG;var B1=this.AQ;Cg=Cg+1;Du=DH=DB=
DG=B1;if(Cg<256){Du=(Du&0x00FFFFFF)|((((Cg*((Du>>24)&0xFF))>>8)&0xFF)<<24);DH=(DH&
0x00FFFFFF)|((((Cg*((DH>>24)&0xFF))>>8)&0xFF)<<24);DB=(DB&0x00FFFFFF)|((((Cg*((DB>>
24)&0xFF))>>8)&0xFF)<<24);DG=(DG&0x00FFFFFF)|((((Cg*((DG>>24)&0xFF))>>8)&0xFF)<<
24);}CV.Hf(aClip,this.Hp,A.abh(this.M,aOffset),false,this.Dx,this.Width,0,0,0,3,
Du,DH,DG,DB,true,true);},A0D:function(){return;},AiR:function(G){var B;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},L:function(E){var B;if(E===this.AQ
)return;this.AQ=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Bd(this.
M);},Anf:function(E){var B;if(A.aaX(E,this.Dx))return;this.Dx=E;if((!!this.Ab&&((
this.T&0x1)===0x1))&&!!this.Hp)this.Ab.Bd(this.M);},NV:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ab&&((this.T&0x1)===0x1))&&
!!this.Hp)this.Ab.Bd(this.M);},Y8:function(E){var B;if(E===this.Hp)return;if(!!this.
Hp)A.z9([this,this.AiR],this.Hp,0);this.Hp=E;if(!!this.Hp)A.zV([this,this.AiR],this.
Hp,0);if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.M);},Y:function(E){if(E
)this.Cu(0x1,0x0);else this.Cu(0x0,0x1);},_Init:function(aArg){A.Core.El._Init.call(
this,aArg);this.__proto__=C.Hf;},_Done:function(){this.K8();this.__proto__=A.Core.
El;A.Core.El._Done.call(this);},_Mark:function(D){var B;A.Core.El._Mark.call(this
,D);if((B=this.Hp)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BCk={A3L:0x1,A3K:0x2,A3M:0x4,A3P:0x8,A3O:0x10,A3N:0x20,BDz:0x40,BDA:0x80,BDL:
0x100};C.BDP={A3L:0x1,A3K:0x2,A3M:0x4,A3P:0x8,A3O:0x10,A3N:0x20,BAO:0x40,BAN:0x80
,BAT:0x100};C.BCZ={Normal:0,BDu:1,BDs:2,BDt:3};
C._Init=function(){C.DR.__proto__=A.Core.AjU;C.AJ.__proto__=A.Core.El;C.CA.__proto__=
A.Core.El;C.NJ.__proto__=A.Core.El;C.An.__proto__=A.Core.El;C.Text.__proto__=A.Core.
El;C.Auc.__proto__=A.Core.El;C.AnM.__proto__=A.Core.Zb;C.AUz.__proto__=C.AnM;C.Ad0.
__proto__=A.Core.El;C.Hf.__proto__=A.Core.El;};C._ReInit=function(){};C.Dz=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */