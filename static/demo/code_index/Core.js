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
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var A=index;var C={};
var Cc=[0,0];var BD=[0,0,0,0];var E6="The view does not belong to this group";var
Hq=[1000,740];var IT="The dialog component is already presented";var Is="The dialog component is actually not presented";
var O2="No fader to perform the fade-in/out operation";var P7="Trying to use the same fader twice";
var P8="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Fe="View is not in this group";var L1="Sibling view does not belong to the group";
var P9="No view to remove";var J1="No view to add";var N$="View already in a group";
var P_="Recursive invalidate during active update cycle.";var MG=[-8,-8,9,9];var
S9="No group to end the modal state.";var UQ="The group is not modal.";var Z1="No group to obtain the modal state.";
var W1="The group serves already as the \'virtual keyboard\'.";var It="The group is already modal.";
var UR="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z2="The method SwitchToDialog() is not available in Core::VerticalList.";
var W2="The method DismissDialog() is not available in Core::VerticalList.";var Z3=
"The method PresentDialog() is not available in Core::VerticalList.";var W3="The method FadeGroup() is not available in Core::VerticalList.";
var Z4="The method RestackBehind() is not available in Core::VerticalList.";var Z5=
"The method RestackTop() is not available in Core::VerticalList.";var US="The method Restack() is not available in Core::VerticalList.";
var W4="The method Remove() is not available in Core::VerticalList.";var O3="The method AddBehind() is not available in Core::VerticalList.";
var Z6="The method Add() is not available in Core::VerticalList.";var O4="The Slide Touch Handler:";
var Rl="is already connected with a view.";var W5="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W6=[0,0,170,120];var UT="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Z7="The method DismissDialog() is not available in Core::HorizontalList.";var
Z8="The method PresentDialog() is not available in Core::HorizontalList.";var W7=
"The method FadeGroup() is not available in Core::HorizontalList.";var W8="The method RestackBehind() is not available in Core::HorizontalList.";
var S_="The method RestackTop() is not available in Core::HorizontalList.";var UU=
"The method Restack() is not available in Core::HorizontalList.";var UV="The method Remove() is not available in Core::HorizontalList.";
var AcK="The method AddBehind() is not available in Core::HorizontalList.";var S$=
"The method Add() is not available in Core::HorizontalList.";var Z9=[0,0,1,1];var
Afz="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Z_="Trying to cancel a task not belonging to this queue!";var W9="Trying to enqueue a task twice!";
var Z$="12";var W_="%";
C.Ci={Ah:null,AJ:null,Ab:null,Eu:null,U:0x103,JZ:0,PL:0x14,AtP:function(BG,Ah6){}
,Ar1:function(E){if(this.JZ===E)return;this.JZ=E;if(!!this.Ab){var Ai3=this.Ah;var
Hb=0;while(!!Ai3&&(E>Ai3.JZ)){Ai3=Ai3.Ah;Hb=Hb+1;}Ai3=this.AJ;while(!!Ai3&&(E<Ai3.
JZ)){Ai3=Ai3.AJ;Hb=Hb-1;}if(!!Hb)this.Ab.JX(this,Hb);}},AZ:function(E){var B;var
Hb=E^this.PL;if(!Hb)return;this.PL=E;if(!!this.Eu&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JI],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eu&&((this.U&0x400)===0x400)){this.Eu.Ny.U=this.Eu.
Ny.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JI],this);}},Im:function(
){var BZ=this.Ab;while(!!BZ){var ID=(C.Root.isPrototypeOf(BZ)?BZ:null);if(!!ID)return ID;
BZ=BZ.Ab;}return null;},Kn:function(CY,aClip,aOffset,Cj,aBlend){},GetClipping:function(
){return this.GetExtent();},G3:function(CN){return null;},Yd:function(Da,BF,Od,Aaf
,Ac3,Ac2){return null;},Auz:function(Da){return Da;},AuJ:function(BG,MK){return Cc;
},Anf:function(aOffset,Atl){},GetExtent:function(){return BD;},Cr:function(Rt,U4
){var B;if(((this.U&0x200)===0x200))Rt=Rt&~0x400;var A2E=(this.U&~U4)|Rt;var Xt=
A2E^this.U;this.U=A2E;if(!!this.Ab&&!!(Xt&0x14)){var BcV=((this.U&0x14)===0x14);
if(BcV&&!this.Ab.AV)this.Ab.Bb(this);if(!BcV&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACH(this,0x14));}if(!!this.Ab&&!!(Xt&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Eu&&!!this.Ab)&&((A2E&0x400)===0x400))&&((Xt&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JI],this);}if(!!this.Ab&&((Xt&0x400
)===0x400)){this.Eu=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JI],this);}if(((((Xt&0x100000)===0x100000)&&((U4&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cr(0x0,0x10);if(((((
Xt&0x100000)===0x100000)&&((Rt&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cr(0x10,0x0);if(((((Xt&0x200000)===0x200000)&&((U4&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cr(
0x10,0x0);if((((((Xt&0x200000)===0x200000)&&((Rt&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hc.C0!==this)))
)this.Cr(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ci;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akd={EC:A.wf,Es:A.wf
,AtP:function(BG,Ah6){var As=A._NewObject(C.AD0,0);this.Eu=null;As.extent=this.getExtent(
);As.Bd=BG;As.Ny=Ah6;As.AiQ=this.Es;As.AiR=this.EC;this.Eu=As;},AuJ:function(BG,
MK){var B;var EW=this.PL;var As=(C.AD0.isPrototypeOf(B=this.Eu)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var J$=[BG[
2]-BG[0],BG[3]-BG[1]];var BX=x2-x1;var BI=y2-y1;var tmp;if(!MK){var NB=[(B=As.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NB[0]!==J$[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(!HS&&(Qu||!HT))x1=((
x1*J$[0])/NB[0])|0;if(!HT&&(Qu||!HS)){x2=x2-As.Bd[0];x2=((x2*J$[0])/NB[0])|0;x2=
x2-J$[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qu){if(HS&&!HT)x2=x1+BX;
else if(!HS&&HT)x1=x2-BX;else{x1=x1+((((x2-x1)-BX)/2)|0);x2=x1+BX;}}}else{x2=x2-
As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NB[1]!==J$[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(!HU&&(Qv||!HR))y1=((y1*J$[1])/NB[
1])|0;if(!HR&&(Qv||!HU)){y2=y2-As.Bd[1];y2=((y2*J$[1])/NB[1])|0;y2=y2-J$[1];}else
y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qv){if(HU&&!HR)y2=y1+BI;else if(!HU&&
HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(MK){case 3:{x1=BG[0];x2=x1+BX;}break;case 4:{x2=
BG[2];x1=x2-BX;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((MK===3)||(MK===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qv=((EW&0x2)===0x2);if(Qv){y1=BG[1];y2=BG[3];}else if(HU&&!HR){y1=
BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((MK===1)||(MK===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(Qu){x1=BG[0];x2=BG[2];}else if(HS&&!HT
){x1=BG[0];x2=x1+BX;}else if(HT&&!HS){x2=BG[2];x1=x2-BX;}else{x1=BG[0]+((((BG[2]-
BG[0])-BX)/2)|0);x2=x1+BX;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BX=x2-x1;BI=y2-y1;if(
As.AiR[0]<As.AiQ[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.AiR[1]<As.AiQ[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Es=[x1,y1];this.EC=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Eu=As;}return[BX,BI];},Anf:function(aOffset,Atl){if(Atl){this.Es=A.abf(this.Es,aOffset
);this.EC=A.abf(this.EC,aOffset);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.
abf(this.EC,aOffset));}},GetExtent:function(){if(!!this.Eu&&this.Eu.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Es[0];var y1=this.Es[
1];var x2=this.EC[0];var y2=this.EC[1];var BX=x2-x1;var BI=y2-y1;var tmp;if(BX<0
)BX=-BX;if(BI<0)BI=-BI;if(BX>=BI){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BI>=BX){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JI],this);}},DM:function(
E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.Es=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JI],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.
Akd;},_className:"Core::LineView"};C.Zy={Kx:A.wf,MC:A.wf,EC:A.wf,Es:A.wf,AtP:function(
BG,Ah6){var As=A._NewObject(C.AD1,0);this.Eu=null;As.extent=this.GetExtent();As.
Bd=BG;As.Ny=Ah6;As.AiQ=this.Es;As.AiR=this.EC;As.AAK=this.MC;As.AAL=this.Kx;this.
Eu=As;},AuJ:function(BG,MK){var B;var EW=this.PL;var As=(C.AD1.isPrototypeOf(B=this.
Eu)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var J$=[BG[2]-BG[0],BG[3]-BG[1]];var BX=x2-x1;var BI=y2-y1;if(!MK){var
NB=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NB[0]!==J$[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(!HS&&(
Qu||!HT))x1=((x1*J$[0])/NB[0])|0;if(!HT&&(Qu||!HS)){x2=x2-As.Bd[0];x2=((x2*J$[0]
)/NB[0])|0;x2=x2-J$[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qu){if(HS&&
!HT)x2=x1+BX;else if(!HS&&HT)x1=x2-BX;else{x1=x1+((((x2-x1)-BX)/2)|0);x2=x1+BX;}
}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NB[1]!==J$[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(!HU&&(Qv||!HR))y1=((
y1*J$[1])/NB[1])|0;if(!HR&&(Qv||!HU)){y2=y2-As.Bd[1];y2=((y2*J$[1])/NB[1])|0;y2=
y2-J$[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qv){if(HU&&!HR)y2=y1+BI;
else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MK){case 3:{x1=BG[0];x2=x1+BX;}break;
case 4:{x2=BG[2];x1=x2-BX;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((MK===3)||(MK===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(Qv){y1=BG[1];y2=BG[3];}else if(
HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MK===1)||(MK===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(Qu){x1=BG[0];x2=BG[2];}else if(
HS&&!HT){x1=BG[0];x2=x1+BX;}else if(HT&&!HS){x2=BG[2];x1=x2-BX;}else{x1=BG[0]+((((
BG[2]-BG[0])-BX)/2)|0);x2=x1+BX;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BX=(x2-x1)-1;BI=(
y2-y1)-1;var Aiw=As.extent[0];var Aiy=As.extent[1];var AfY=(As.extent[2]-Aiw)-1;
var AfX=(As.extent[3]-Aiy)-1;if(!AfY)AfY=1;if(!AfX)AfX=1;if(((this.U&0x100)===0x100
)){this.Es=[x1+((((As.AiQ[0]-Aiw)*BX)/AfY)|0),y1+((((As.AiQ[1]-Aiy)*BI)/AfX)|0)];
this.EC=[x1+((((As.AiR[0]-Aiw)*BX)/AfY)|0),y1+((((As.AiR[1]-Aiy)*BI)/AfX)|0)];this.
MC=[x1+((((As.AAK[0]-Aiw)*BX)/AfY)|0),y1+((((As.AAK[1]-Aiy)*BI)/AfX)|0)];this.Kx=[
x1+((((As.AAL[0]-Aiw)*BX)/AfY)|0),y1+((((As.AAL[1]-Aiy)*BI)/AfX)|0)];}else{this.
DM([x1+((((As.AiQ[0]-Aiw)*BX)/AfY)|0),y1+((((As.AiQ[1]-Aiy)*BI)/AfX)|0)]);this.DC([
x1+((((As.AiR[0]-Aiw)*BX)/AfY)|0),y1+((((As.AiR[1]-Aiy)*BI)/AfX)|0)]);this.Ku([x1+((((
As.AAK[0]-Aiw)*BX)/AfY)|0),y1+((((As.AAK[1]-Aiy)*BI)/AfX)|0)]);this.JT([x1+((((As.
AAL[0]-Aiw)*BX)/AfY)|0),y1+((((As.AAL[1]-Aiy)*BI)/AfX)|0)]);this.Eu=As;}return[BX+
1,BI+1];},Anf:function(aOffset,Atl){if(Atl){this.Es=A.abf(this.Es,aOffset);this.
EC=A.abf(this.EC,aOffset);this.MC=A.abf(this.MC,aOffset);this.Kx=A.abf(this.Kx,aOffset
);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.abf(this.EC,aOffset));this.Ku(
A.abf(this.MC,aOffset));this.JT(A.abf(this.Kx,aOffset));}},GetExtent:function(){
if(!!this.Eu&&this.Eu.isEmpty)return BD;var x1=this.Es[0];var y1=this.Es[1];var x2=
this.MC[0];var y2=this.MC[1];if((((this.Kx[0]!==x1)||(this.EC[1]!==y1))||(this.EC[
0]!==x2))||(this.Kx[1]!==y2)){if(this.EC[0]<x1)x1=this.EC[0];if(this.MC[0]<x1)x1=
this.MC[0];if(this.Kx[0]<x1)x1=this.Kx[0];if(this.EC[1]<y1)y1=this.EC[1];if(this.
MC[1]<y1)y1=this.MC[1];if(this.Kx[1]<y1)y1=this.Kx[1];if(this.Es[0]>x2)x2=this.Es[
0];if(this.EC[0]>x2)x2=this.EC[0];if(this.Kx[0]>x2)x2=this.Kx[0];if(this.Es[1]>y2
)y2=this.Es[1];if(this.EC[1]>y2)y2=this.EC[1];if(this.Kx[1]>y2)y2=this.Kx[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JT:function(E){var B;if(A.aaX(E,this.Kx))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Kx=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JI],this);}},Ku:function(E){var B;if(A.aaX(E,
this.MC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Eu=null;this.MC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JI],this);}},DC:function(
E){var B;if(A.aaX(E,this.EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JI],this);}},DM:function(E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Es=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JI],this);}},AQ3:function(KZ){var HB=A.abi(4,
A.wf,null);var O=0;var If=3;var A19=false;var A1_=false;HB.Set(0,this.Es);HB.Set(
1,this.EC);HB.Set(2,this.MC);HB.Set(3,this.Kx);while(O<4){var BgC=HB.Get(O)[0];var
ALp=HB.Get(O)[1];var BCp=HB.Get(If)[0];var A4m=HB.Get(If)[1];if(((ALp>KZ[1])!==(
A4m>KZ[1]))||((ALp<KZ[1])!==(A4m<KZ[1]))){var Eo=((((BCp-BgC)*(KZ[1]-ALp))/(A4m-
ALp))|0)+BgC;if(KZ[0]>Eo)A19=!A19;if(KZ[0]<Eo)A1_=!A1_;}If=O;O=O+1;}return A19||
A1_;},Bi0:function(){return((((this.Es[0]===this.Kx[0])&&(this.EC[0]===this.MC[0
]))&&(this.Es[1]===this.EC[1]))&&(this.MC[1]===this.Kx[1]))||((((this.Es[0]===this.
EC[0])&&(this.MC[0]===this.Kx[0]))&&(this.Es[1]===this.Kx[1]))&&(this.EC[1]===this.
MC[1]));},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.Zy;},
_className:"Core::QuadView"};C.Et={M:A.wg,AtP:function(BG,Ah6){var As=A._NewObject(
C.Arf,0);As.extent=this.M;As.Bd=BG;As.Ny=Ah6;this.Eu=As;},AuJ:function(BG,MK){var
B;var EW=this.PL;var As=this.Eu;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var J$=[BG[2]-BG[0],BG[3]-BG[1]];var BX=x2-x1;var BI=
y2-y1;if(!MK){var NB=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NB[0]!==J$[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1
)===0x1);if(!HS&&(Qu||!HT))x1=((x1*J$[0])/NB[0])|0;if(!HT&&(Qu||!HS)){x2=x2-As.Bd[
0];x2=((x2*J$[0])/NB[0])|0;x2=x2-J$[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qu){if(HS&&!HT)x2=x1+BX;else if(!HS&&HT)x1=x2-BX;else{x1=x1+((((x2-x1)-BX
)/2)|0);x2=x1+BX;}}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NB[1]!==J$[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(
!HU&&(Qv||!HR))y1=((y1*J$[1])/NB[1])|0;if(!HR&&(Qv||!HU)){y2=y2-As.Bd[1];y2=((y2
*J$[1])/NB[1])|0;y2=y2-J$[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qv
){if(HU&&!HR)y2=y1+BI;else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MK){case 3:{x1=
BG[0];x2=x1+BX;}break;case 4:{x2=BG[2];x1=x2-BX;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((MK===3)||(MK===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(Qv){y1=BG[
1];y2=BG[3];}else if(HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MK===1)||(MK===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(Qu){x1=BG[
0];x2=BG[2];}else if(HS&&!HT){x1=BG[0];x2=x1+BX;}else if(HT&&!HS){x2=BG[2];x1=x2-
BX;}else{x1=BG[0]+((((BG[2]-BG[0])-BX)/2)|0);x2=x1+BX;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eu=As;}return[x2-x1,y2-y1];},Anf:function(aOffset,Atl){if(Atl)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JI],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.
__proto__=C.Et;},_className:"Core::RectView"};C.P={B7:null,B8:null,AKh:null,FE:null
,Hc:null,Xu:null,ApM:null,AV:null,G8:255,AzC:0,AzF:0,AzE:0,AzD:0,Init:function(aArg
){this.Am();},Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;Cj=((Cj+1)*this.G8)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FE||(CY.C0===this))this.BcK(CY,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cj,aBlend);else{var B2=255|(255<<8)|(255<<16)|((
Cj&0xFF)<<24);this.FE.Update();CY.A5x(aClip,this.FE,0,A.abh(this.M,aOffset),Cc,B2
,B2,B2,B2,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FE)return Az;
Az=[].concat(Az[0]-this.AzD,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzF);Az=A.abN(
Az,Az[2]+this.AzE);Az=[].concat(Az.slice(0,3),Az[3]+this.AzC);if(((this.U&0x80000
)===0x80000)){var ApZ=BD;var X;for(X=this.B7;!!X;X=X.Ah)if(((X.U&0x1)===0x1))ApZ=
A.wC(ApZ,X.GetClipping());Az=A.wC(Az,A.abh(ApZ,this.M.slice(0,2)));}return Az;},
Yd:function(Da,BF,Od,Aaf,Ac3,Ac2){var B;var X=this.B8;var Apg=null;var AE=BD;var
Ka=null;var A2t=!!this.Xu&&(!!this.Xu.FP||!!this.Xu.B7);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac3){X=Ac3;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Ka){Ka=X.
AJ;while(!!Ka&&!((Ka.U&0x200)===0x200))Ka=Ka.AJ;if(!!Ka)AE=A.lb(Da,Ka.GetExtent(
));else AE=BD;}if(Ka===X){Ka=null;AE=BD;}if((!!Aaf&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hc.C0===X)&&!A2t))
)){var extent=X.GetExtent();var AJL=Aaf;var Ao2=null;if(AJL===X)AJL=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao2=X.Yd(AE
,BF,Od,AJL,Ac3,Ac2);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aaf===
X))Ao2=X.Yd(Da,BF,Od,AJL,Ac3,Ac2);X=X.AJ;if(!!Ao2){if(!Apg||((Ao2.AuU<Apg.AuU)&&(
Ao2.AuU>=0)))Apg=Ao2;if(!Ao2.AuU)X=null;}}else X=X.AJ;Ac3=null;}return Apg;},Auz:
function(Da){var B;var F;var X=this.B7;var LA=BD;var AAE=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At1=(C.Y.isPrototypeOf(
X)?X:null);LA=A.lb(Da,At1.M);AAE=((At1.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAE){var AE=A.lb(X.GetClipping(),LA);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.Auz(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.Auz(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cr:function(Rt,U4){var B;
var Tm=this.U;if(((!!this.Ab&&!!!this.FE)&&((this.U&0x80001)===0x80001))&&((U4&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Et.Cr.call(this,Rt,U4);if((((!!this.
Ab&&!!!this.FE)&&((this.U&0x1)===0x1))&&((Rt&0x80000)===0x80000))&&!((Tm&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xt=this.U^Tm;if(!!this.AV&&((Xt&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cr(0x40,0x0);else this.AV.Cr(0x0
,0x40);}if(!!this.Hc&&((Xt&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hc.C0.
U&0x14)===0x14))this.Hc.C0.Cr(0x40,0x0);else this.Hc.C0.Cr(0x0,0x40);}if(((Xt&0x10
)===0x10)){var X;for(X=this.B7;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hc.C0===X)))X.Cr(Rt&0x10,U4&
0x10);}if(!!Xt){this.U=this.U|0x8000;A.pe([this,this.ABj],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlU=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKp=[
E[2]-E[0],E[3]-E[1]];var ApV=!A.aaX(AlU,AKp);if(ApV&&!!this.FE){this.FE.ArL(AKp);
A.we(this,0);A.we(this.FE,0);}C.Et.H.call(this,E);if((ApV&&(AlU[0]>0))&&(AlU[1]>
0)){var Bd=[].concat(Cc,AlU);var X=this.B7;while(!!X){if((!X.Eu&&(X.PL!==0x14))&&
!((X.U&0x400)===0x400))X.AtP(Bd,null);X=X.Ah;}}if(ApV){this.U=this.U|0x5000;A.pe([
this,this.ABj],this);}},A3B:function(CN){var BdF=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKh;if(!BdF)return null;while(!!D5&&(!D5.Bw||!D5.G3(BdF)))D5=D5.
Ah;return D5;},BB$:function(G){if(!!this.FE){this.FE.C0=this;var AE=A.abg(this.Auz(
A.abh(this.FE.QM,this.M.slice(0,2))),this.M.slice(0,2));this.FE.Avc(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BcK(this.FE,AE,Cc,255,true);this.FE.
C0=null;}},BcK:function(CY,aClip,aOffset,Cj,aBlend){var B;var X=this.B7;var LA=BD;
var AAE=true;this.BhX(CY,aClip,aOffset,Cj,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At1=(C.Y.isPrototypeOf(X)?X:null);AAE=((At1.U&0x1)===0x1);LA=aClip;if(!((
At1.U&0x80000)===0x80000))LA=A.lb(LA,A.abh(At1.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAE){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LA
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kn(CY,AE,aOffset,Cj,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kn(CY,AE,aOffset,Cj,aBlend);}}X=X.Ah;}this.Bh0(CY,aClip,aOffset,Cj,aBlend);},BfC:
function(){var B;var A12=((this.U&0x1000)===0x1000);var AiD=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aap=false;var Adk=BD;var K1=BD;var Aaq=Cc;var AtL=0;var AtM=0;
var AtK=0;var Qn=0;var X=this.B8;var Ka=null;var AlM=null;while(!!X){if(((X.U&0x800
)===0x800)){Aap=true;X.U=X.U&~0x800;}if(Aap&&((X.U&0x200)===0x200)){Aap=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgX)X.U=X.U|0x1000;}X=X.AJ;}Aap=false;X=this.B7;
if(A12){this.U=this.U&~0x1000;A12=!((AiD[0]>=AiD[2])||(AiD[1]>=AiD[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlM&&(AtK!==Qn)){var AdI=X;var AKM=0;var AA0=Adk[2]-
Adk[0];var Azd=Adk[3]-Adk[1];var AJB=0;var Ap6=Cc;do if(((AdI.U&0x200)===0x200))
AdI=null;else if(((AdI.U&0x401)===0x401)){Ap6=[(B=AdI.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qn===3)||(Qn===4))AA0=AA0-Ap6[0];if((Qn===1)||(Qn===2))Azd=Azd-Ap6[1];
if(!AlM||((AA0>=0)&&(Azd>=0))){AlM=AdI;AdI=AdI.Ah;if((Qn===3)||(Qn===4)){AA0=AA0-
AtL;if(Ap6[1]>AKM)AKM=Ap6[1];}if((Qn===1)||(Qn===2)){Azd=Azd-AtM;if(Ap6[0]>AJB)AJB=
Ap6[0];}}else AdI=null;}else AdI=AdI.Ah;while(!!AdI);if(!AlM)AlM=Ka;K1=Adk;switch(
AtK){case 9:case 11:K1=[].concat(K1.slice(0,3),K1[1]+AKM);break;case 10:case 12:
K1=A.abP(K1,K1[3]-AKM);break;case 5:case 7:K1=A.abN(K1,K1[0]+AJB);break;case 6:case
8:K1=[].concat(K1[2]-AJB,K1.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eu&&(X.Eu.Ny!==Ka))X.Eu=null;if((!X.Eu&&Aap)&&((X.PL!==0x14)||!!Qn))X.
AtP(K1,Ka);}if(!!X.Eu){if(A12&&!((X.U&0x400)===0x400))X.AuJ(AiD,0);if(Aap&&((X.U&
0x400)===0x400)){var C4=X.AuJ(A.abh(K1,Aaq),Qn);if(((X.U&0x1)===0x1)){var Bq=Cc;
switch(Qn){case 3:Bq=[C4[0]+AtL,Bq[1]];break;case 4:Bq=[-C4[0]-AtL,Bq[1]];break;
case 1:Bq=[Bq[0],C4[1]+AtM];break;case 2:Bq=[Bq[0],-C4[1]-AtM];break;default:;}Aaq=
A.abf(Aaq,Bq);}}}if(((X.U&0x200)===0x200)){if(Aap)A.pe(Ka.El,Ka);Aap=((X.U&0x1000
)===0x1000);Ka=(C.Y.isPrototypeOf(X)?X:null);if(Aap){X.U=X.U&~0x1000;AtK=Ka.AgX;
Qn=AtK;Adk=A.abh(Ka.M,Ka.Br);K1=Adk;Aaq=Cc;AtL=Ka.Space+Ka.AUF;AtM=Ka.Space;Aap=
!((Adk[0]>=Adk[2])||(Adk[1]>=Adk[3]));AlM=null;switch(AtK){case 9:case 10:Qn=3;break;
case 11:case 12:Qn=4;break;case 5:case 6:Qn=1;break;case 7:case 8:Qn=2;break;default:;
}}if(Aap)this.Bj(Ka.M);}if(X===AlM){switch(AtK){case 9:case 11:Aaq=[0,(Aaq[1]+(K1[
3]-K1[1]))+AtM];break;case 10:case 12:Aaq=[0,(Aaq[1]-(K1[3]-K1[1]))-AtM];break;case
5:case 7:Aaq=[(Aaq[0]+(K1[2]-K1[0]))+AtL,0];break;case 6:case 8:Aaq=[(Aaq[0]-(K1[
2]-K1[0]))-AtL,0];break;default:;}AlM=null;}X=X.Ah;}if(Aap)A.pe(Ka.El,Ka);this.U=
this.U&~0x2000;this.Bl([AiD[2]-AiD[0],AiD[3]-AiD[1]]);},JI:function(G){A.pe([this
,this.ABj],this);},ABj:function(G){var B;var BCh=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.BfC();}if(((this.U&0x8000)===
0x8000)||BCh){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E6);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cr(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cr(0x60,0x0);else E.Cr(0x20
,0x0);}},BaU:function(Aq){this.Bb(Aq);},ASf:function(){return!!this.FE;},ArE:function(
E){var B;if(!!this.FE===E)return;if(!E){this.FE.AEn=null;this.FE.ArL(Cc);this.FE=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FE=A._NewObject(A.Graphics.Canvas,0);this.FE.ArL([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FE.AEn=[this,this.BB$];}A.we(this,0);},A8j:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cr(0x100000,0x0);else this.Cr(0x0
,0x100000);},Dk:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G8)return;
this.G8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},AZ3:
function(Aq){this.Dk(Aq);},Aj:function(E){if(E)this.Cr(0x400,0x0);else this.Cr(0x0
,0x400);},Blt:function(E){if(E)this.Cr(0x2,0x0);else this.Cr(0x0,0x2);},Fo:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},ExtendClipping:function(AoC,AoD,AoE,AoB){var B;var Ay6=this.M;var Rz=
Ay6;if(AoC<0)AoC=0;if(AoC>255)AoC=255;if(AoD<0)AoD=0;if(AoD>255)AoD=255;if(AoE<0
)AoE=0;if(AoE>255)AoE=255;if(AoB<0)AoB=0;if(AoB>255)AoB=255;Rz=[].concat(Rz[0]-(
Math.max(AoC,this.AzD)&0xFF),Rz.slice(1,4));Rz=A.abN(Rz,Rz[2]+(Math.max(AoD,this.
AzE)&0xFF));Rz=A.abP(Rz,Rz[1]-(Math.max(AoE,this.AzF)&0xFF));Rz=[].concat(Rz.slice(
0,3),Rz[3]+(Math.max(AoB,this.AzC)&0xFF));if(AoC!==this.AzD){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FE)&&!((this.U&0x80000)===0x80000)){var Az=Rz;Az=A.abN(Az
,Ay6[0]);this.Ab.Bj(Az);}this.AzD=AoC&0xFF;}if(AoD!==this.AzE){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FE)&&!((this.U&0x80000)===0x80000)){var Az=Rz;Az=[].
concat(Ay6[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzE=AoD&0xFF;}if(AoE!==this.AzF
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FE)&&!((this.U&0x80000)===0x80000
)){var Az=Rz;Az=[].concat(Az.slice(0,3),Ay6[1]);this.Ab.Bj(Az);}this.AzF=AoE&0xFF;
}if(AoB!==this.AzC){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FE)&&!((this.
U&0x80000)===0x80000)){var Az=Rz;Az=A.abP(Az,Ay6[3]);this.Ab.Bj(Az);}this.AzC=AoB&
0xFF;}},Bh0:function(CY,aClip,aOffset,Cj,aBlend){},BhX:function(CY,aClip,aOffset
,Cj,aBlend){},GetMaximalSize:function(){return Hq;},GetMinimalSize:function(){return Cc;
},AUM:function(Iu,Oc,Xe,Tc,Td,Ah7,O8,Rs,Ly,Lw,Lx){var B;if(!this.Hc){this.AkI(Iu
,Oc,Xe,Tc,Td,null,null,Ly,Lw,Lx);return;}var AlT=this.Hc;var JF=AlT.Ah;if(((Iu.U&
0x10000)===0x10000)&&(this.Hc.C0!==Iu))throw new Error(IT);var Adq=A._NewObject(
C.ANR,0);var RB=AlT.RB;var RK=null;var Mc=null;if(!!JF){RK=JF.RK;Mc=JF.Mc;}if(!!
JF&&!!AlT.ApL)RK=AlT.ApL;if(!!JF&&!!O8)Mc=O8;if(!!Ah7)RB=Ah7;if(!Oc)Oc=A._GetAutoObject(
A.acl.AsA);if(!Xe)Xe=Oc;if(!Td)Td=Tc;if(!Tc)Tc=Td;Adq.RB=Xe;Adq.Mc=Tc;Adq.RK=Td;
Adq.ApL=Rs;Adq.C0=Iu;Adq.Ah=this.Hc.Ah;this.Hc.Ah=null;this.Hc=Adq;if(this.AV===
Iu)this.Bb(null);AlT.C0.Cr(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===
0x4))Iu.Cr(0x10040,0x0);else Iu.Cr(0x10000,0x0);if(!!Mc){this.NO(JF.C0,Mc.Ad$(),
null,null,Lx);this.NO(AlT.C0,RB.Sa(),null,null,true);this.NO(Adq.C0,Oc.Sb(),Ly,Lw
,true);}else if(!!RK){this.NO(JF.C0,RK.Aea(),null,null,Lx);this.NO(AlT.C0,RB.Sa(
),null,null,true);this.NO(Adq.C0,Oc.Sb(),Ly,Lw,true);}else if(!!RB){this.NO(AlT.
C0,RB.Sa(),null,null,Lx);this.NO(Adq.C0,Oc.Sb(),Ly,Lw,true);}else this.NO(Adq.C0
,Oc.Sb(),Ly,Lw,Lx);},AqB:function(Iu,Ah7,O8,Rs,Ly,Lw,Lx){var B;if(!this.Hc)return;
if(!Iu)return;var KC=this.Hc;var JF=this.Hc.Ah;var ApR=null;while((!!KC&&(KC.C0!==
Iu))&&!!KC.Ah){ApR=KC;KC=JF;JF=KC.Ah;}if(!KC||(KC.C0!==Iu))throw new Error(Is);if(
!ApR){this.Hc=JF;KC.Ah=null;}else{ApR.Ah=JF;KC.Ah=null;}KC.C0.Cr(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JF)&&!ApR)&&((JF.C0.U&0x200000)===0x200000))JF.C0.Cr(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JF)&&!ApR)&&((JF.C0.U&0x4)===0x4))JF.C0.Cr(
0x40,0x0);var RB=KC.RB;var RK=null;var Mc=null;if(!!JF)RK=JF.RK;if(!!JF&&!!KC.ApL
)RK=KC.ApL;if(!!JF&&!!Rs)RK=Rs;if(!!ApR&&!!JF)Mc=JF.Mc;if((!!ApR&&!!JF)&&!!O8)Mc=
O8;if(!!Ah7)RB=Ah7;if(!!Mc){this.NO(JF.C0,Mc.Ad$(),null,null,Lx);this.NO(KC.C0,RB.
Sa(),Ly,Lw,true);}else if(!!RK){this.NO(JF.C0,RK.Aea(),null,null,Lx);this.NO(KC.
C0,RB.Sa(),Ly,Lw,true);}else this.NO(KC.C0,RB.Sa(),Ly,Lw,Lx);},AkI:function(Iu,Oc
,Xe,Tc,Td,O8,Rs,Ly,Lw,Lx){var B;if(!Iu)return;if(!!this.Hc&&(this.Hc.C0===Iu)){this.
AUM(Iu,Oc,Xe,Tc,Td,null,O8,Rs,Ly,Lw,Lx);return;}if(((Iu.U&0x10000)===0x10000))throw new
Error(IT);var KC=A._NewObject(C.ANR,0);if(!!this.Hc&&!this.Hc.Mc){if(!Rs)Rs=O8;if(
!O8)O8=Rs;}var Mc=null;if(!!this.Hc)Mc=this.Hc.Mc;if(!!this.Hc&&!!O8)Mc=O8;if(!Oc
)Oc=A._GetAutoObject(A.acl.AsA);if(!Xe)Xe=Oc;if(!Td)Td=Tc;if(!Tc)Tc=Td;KC.RB=Xe;
KC.Mc=Tc;KC.RK=Td;KC.ApL=Rs;if(this.AV===Iu)this.Bb(null);if(!!this.Hc&&((this.Hc.
C0.U&0x200000)===0x200000))this.Hc.C0.Cr(0x0,0x10);if(!!this.Hc)this.Hc.C0.Cr(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===0x4))Iu.Cr(0x10040,0x0);else Iu.
Cr(0x10000,0x0);KC.C0=Iu;KC.Ah=this.Hc;this.Hc=KC;if(!!Mc){this.NO(this.Hc.Ah.C0
,Mc.Ad$(),null,null,Lx);this.NO(Iu,Oc.Sb(),Ly,Lw,true);}else this.NO(Iu,Oc.Sb(),
Ly,Lw,Lx);},A6K:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7m:function(
KZ){var tmp=this;while(!!tmp){KZ=A.abe(KZ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KZ;
},BiW:function(KZ){var tmp=this;while(!!tmp){KZ=A.abf(KZ,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KZ;},DispatchEvent:function(CN){var B;var X=this.AV;var BZ=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A2t=!!this.Xu&&(!!this.Xu.FP||!!this.Xu.B7);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;BZ=null;}if(!!this.Hc&&!A2t)GD=this.Hc.C0.DispatchEvent(CN);if(!GD&&!!BZ)
GD=BZ.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G3(CN);if(!GD)GD=this.G3(CN);if(!GD
)GD=this.A3B(CN);return GD;},BroadcastEventAtPosition:function(CN,Hz,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hz)){var BZ=(C.P.isPrototypeOf(X)?X:null);if(!!BZ)GD=BZ.
BroadcastEventAtPosition(CN,A.abe(Hz,BZ.M.slice(0,2)),aFilter);else GD=X.G3(CN);
}X=X.AJ;}if(!GD)GD=this.G3(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var BZ=(C.P.isPrototypeOf(X)?X:null);if(!!BZ)GD=BZ.BroadcastEvent(CN,aFilter
);else GD=X.G3(CN);}X=X.AJ;}if(!GD)GD=this.G3(CN);if(!GD)GD=this.A3B(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},Bjb:function(){this.U=this.U|0x4000;A.pe([
this,this.ABj],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABj],this
);},Bj:function(Da){var B;var BZ=this;while(!!BZ&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aam=BZ.FE;if(!BZ.Ab&&(BZ!==this)){BZ.Bj(Da);return;}if(!!Aam){var BzV=Aam.
QM;Aam.QM=A.wC(Aam.QM,Da);if(!A.aaY(BzV,Aam.QM)){A.we(BZ,0);A.we(Aam,0);}}if(!((
BZ.U&0x1)===0x1))return;var Az=BZ.M;Da=A.abh(Da,Az.slice(0,2));if(!!BZ.FE||!((BZ.
U&0x80000)===0x80000)){if(!!!BZ.FE){Az=[].concat(Az[0]-BZ.AzD,Az.slice(1,4));Az=
A.abP(Az,Az[1]-BZ.AzF);Az=A.abN(Az,Az[2]+BZ.AzE);Az=[].concat(Az.slice(0,3),Az[3
]+BZ.AzC);}Da=A.lb(Da,Az);}BZ=BZ.Ab;}},QH:function(Ag,Gz,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agg=A.aaI(Ag.GetExtent());var X=Ag;var A1b=null;var
Bcn=0;var IY=0x10000;var AKI;if(((aFilter&0x10000)===0x10000))IY=0x0;var top=((Gz===
4)||(Gz===1))||(Gz===6);var bottom=((Gz===5)||(Gz===3))||(Gz===8);var left=((Gz===
2)||(Gz===1))||(Gz===3);var right=((Gz===7)||(Gz===6))||(Gz===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B8;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IY||!((B=IY)&&((X.U&B)===B
))))for(AKI=0;AKI<2;AKI++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKI){if((left&&(s[0]>s[1]))&&(Az[2]<Agg[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agg[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agg[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agg[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agg);var
Rv=Bq;if(Rv[0]<0)Rv=[-Rv[0],Rv[1]];if(Rv[1]<0)Rv=[Rv[0],-Rv[1]];if(((((!left||(Bq[
0]<=-Rv[1]))&&(!right||(Bq[0]>=Rv[1])))&&(!top||(Bq[1]<=-Rv[0])))&&(!bottom||(Bq[
1]>=Rv[0])))&&((Rv[0]>0)||(Rv[1]>0))){var RD=Bq[0];var RE=Bq[1];var Jl=Math.sqrt((
RD*RD)+(RE*RE));var AKg=0;if(!left&&!right)AKg=Jl/Rv[1];if(!top&&!bottom)AKg=Jl/
Rv[0];Jl=(Jl*AKg)*AKg;if((Jl<Bcn)||!A1b){Bcn=Jl;A1b=X;}}}}return A1b;},AqI:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;var IY=0x10000;
if(((aFilter&0x10000)===0x10000))IY=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IY||!((B=IY)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TN:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B7;
var IY=0x10000;if(((aFilter&0x10000)===0x10000))IY=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IY||!((B=IY)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACH:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlR=Ag.Ah;var Al4=Ag.AJ;var IY=0x10000;if(((aFilter&0x10000)===0x10000))IY=0x0;
while(!!AlR||!!Al4){if((!!AlR&&(!aFilter||((B=aFilter)&&((AlR.U&B)===B))))&&(!IY||
!((B=IY)&&((AlR.U&B)===B))))return AlR;if((!!Al4&&(!aFilter||((B=aFilter)&&((Al4.
U&B)===B))))&&(!IY||!((B=IY)&&((Al4.U&B)===B))))return Al4;if(!!AlR)AlR=AlR.Ah;if(
!!Al4)Al4=Al4.AJ;}return null;},Db:function(aFilter){var B;var X=this.B7;var AE=
BD;var IY=0x10000;if(((aFilter&0x10000)===0x10000))IY=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IY||!((B=IY)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NO:function(KB,FO,Ly,Lw
,Lx){var B;if(!KB)return;if(!FO)throw new Error(O2);if((!!FO.P||!!FO.Ab)||!!FO.Pj
)throw new Error(P7);if(!!KB.Ab&&(KB.Ab!==this))throw new Error(P8);if(!this.Xu)
this.Xu=A._NewObject(C.AUR,0);FO.Ab=this;FO.P=KB;FO.AKs=Lw;FO.A2V=Ly;if(!!KB.ApM
)KB.ApM.Pj.Bn_(KB.ApM);KB.ApM=FO;KB.U=KB.U|0x20000;if((Lx&&!!this.Xu.B8)&&!this.
Xu.B8.AQZ())(A.acl.ACC.isPrototypeOf(B=this.Xu.B8)?B:null).A4B(FO);else{var Pj=A.
_NewObject(A.acl.ACC,0);Pj.A4B(FO);this.Xu.A_0(Pj,false);}},Ahz:function(Ag,J5){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Fe);if(!!J5&&(J5.
Ab!==this))throw new Error(L1);if(Ag.Ah===J5)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JI],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JI],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B8=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;var GB=
null;var Iw=this.B8;var LO=Ag.JZ;if(!!J5){GB=J5;Iw=J5.AJ;}if(!!GB&&(LO>GB.JZ))LO=
GB.JZ;if(!!Iw&&(LO<Iw.JZ))LO=Iw.JZ;if(LO!==Ag.JZ){Ag.Ab=null;Ag.Ar1(LO);Ag.Ab=this;
}if(!J5){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.B8;Ag.Ah=null;this.B8=Ag;}else{Ag.
Ah=J5;Ag.AJ=J5.AJ;J5.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B7===J5)this.B7=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZB:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Fe);if(!Ag.Ah)return;var Iw=this.B8;var
LO=Ag.JZ;while(!!Iw&&(Iw.JZ>LO))Iw=Iw.AJ;if(((Iw===Ag)||!Iw)||(Iw.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JI],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JI],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Iw;Ag.Ah=Iw.Ah;Iw.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},JX:function(Ag,Qe){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Fe);var Iw=Ag;var GB=Ag;var LO=Ag.JZ;while(((Qe>0)&&!!Iw.Ah)&&(Iw.Ah.JZ<=LO
)){Iw=Iw.Ah;Qe=Qe-1;}while(((Qe<0)&&!!GB.AJ)&&(GB.AJ.JZ>=LO)){GB=GB.AJ;Qe=Qe+1;}
if((Iw===Ag)&&(GB===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JI],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JI],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;if(Iw
!==Ag){Ag.Ah=Iw.Ah;Ag.AJ=Iw;Iw.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GB!==Ag){Ag.Ah=GB;
Ag.AJ=GB.AJ;GB.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B8=Ag;if(!Ag.AJ)this.
B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HN:function(Ag){var B;if(
!Ag)throw new Error(P9);if(Ag.Ab!==this)throw new Error(Fe);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Eu){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JI],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JI],this);}Ag.Eu=null;if(this.AV===Ag)this.Bb(this.
ACH(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag
)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cr(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AL4:function(Ag,J5
){var B;if(!Ag)throw new Error(J1);if(!!Ag.Ab)throw new Error(N$);if(!!J5&&(J5.Ab
!==this))throw new Error(L1);var GB=null;var Iw=this.B8;var LO=Ag.JZ;if(!!J5){GB=
J5;Iw=J5.AJ;}if(!!GB&&(LO>GB.JZ))LO=GB.JZ;if(!!Iw&&(LO<Iw.JZ))LO=Iw.JZ;if(LO!==Ag.
JZ){Ag.Ab=null;Ag.Ar1(LO);Ag.Ab=this;}if(!J5){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.
B8;this.B8=Ag;}else{Ag.Ah=J5;Ag.AJ=J5.AJ;J5.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B7===J5)this.B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOJ()===Ag))Ag.Cr(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cr(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JI],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JI],this);}},J:function(Ag,Qe){var B;if(!Ag)throw new Error(
J1);if(!!Ag.Ab)throw new Error(N$);var GB=null;var LO=Ag.JZ;if(((Qe<0)&&!!this.B8
)&&(this.B8.JZ>=LO)){GB=this.B8;Qe=Qe+1;}while((((Qe<0)&&!!GB)&&!!GB.AJ)&&(GB.AJ.
JZ>=LO)){GB=GB.AJ;Qe=Qe+1;}if((!GB&&!!this.B8)&&(this.B8.JZ>LO))GB=this.B8;while((
!!GB&&!!GB.AJ)&&(GB.AJ.JZ>LO))GB=GB.AJ;if(!GB){Ag.Ab=this;Ag.AJ=this.B8;if(!!this.
B8)this.B8.Ah=Ag;if(!this.B7)this.B7=Ag;this.B8=Ag;}else{Ag.Ab=this;Ag.AJ=GB.AJ;
Ag.Ah=GB;GB.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B7=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOJ()===Ag))Ag.Cr(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cr(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JI],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JI],this);}},A8l:function(){return this.
AV;},Awh:function(){return this.G8;},_Init:function(aArg){C.Et._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Et._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKh)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RH:null,JE:null,Ft:A.abi(10,null
,null),Atx:null,Aio:null,ABl:0,Ic:0,L_:A.abi(10,0,null),AJH:A.abi(10,A.wg,null),
Xs:A.abi(10,0,null),AfW:A.abi(10,A.wf,null),AtC:A.abi(10,0,null),Ain:A.abi(10,A.
wf,null),Xr:A.abi(10,A.wf,null),RA:A.abi(10,A.wf,null),Adb:A.abi(10,A.wf,null),EO:
0,AJ5:0,AJ4:0,Oq:A.abi(4,0,null),Kh:A.abi(4,A.wg,null),Kd:0,Az3:0,AtR:0,AzO:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Im:function(){return this;
},Kn:function(CY,aClip,aOffset,Cj,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CY.Avc(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kn.call(this,CY,aClip
,aOffset,Cj,aBlend);},Cr:function(Rt,U4){var B;C.P.Cr.call(this,Rt,U4);if(!this.
Ab&&(((Rt&0x1)===0x1)||((U4&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rt&0x2)===0x2)||((U4&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArE:
function(E){var B;var BzT=this.FE;C.P.ArE.call(this,E);if(((BzT!==this.FE)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Dk:function(
E){var B;var BO=this.G8;C.P.Dk.call(this,E);if(((BO!==this.G8)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvP=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=null;if(!!this.
JE){GD=this.JE.C0.DispatchEvent(CN);if(!GD)GD=this.G3(CN);if(!GD)GD=this.A3B(CN);
this.Ic=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ic=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvP=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ic=0;return GD;},Bj:function(Da){var
B;if(this.ABl>0)throw new Error(P_);if(!!this.FE&&!this.Ab){if(((B=this.FE.QM)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FE,0);}this.FE.QM=A.wC(this.FE.QM
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Kd;O=O+1)if(!(((B=A.lb(this.Kh.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Kh.Set(O,A.wC(this.Kh.Get(O),Da));this.Oq.Set(O,A.aaH(this.Kh.Get(O
)));return;}if(this.Kd<3){this.Kh.Set(this.Kd,Da);this.Oq.Set(this.Kd,A.aaH(Da));
this.Kd=this.Kd+1;return;}var If;var RG;var Az2=0;var Az5=0;var Bcm=2147483647;this.
Kh.Set(this.Kd,Da);this.Oq.Set(this.Kd,A.aaH(Da));for(If=0;If<=this.Kd;If=If+1)for(
RG=If+1;RG<=this.Kd;RG=RG+1){var ALb=A.aaH(A.wC(this.Kh.Get(If),this.Kh.Get(RG))
);var Bfc=((ALb<<8)/(this.Oq.Get(If)+this.Oq.Get(RG)))|0;if(Bfc<Bcm){Bcm=Bfc;Az2=
If;Az5=RG;}}this.Kh.Set(Az2,A.wC(this.Kh.Get(Az2),this.Kh.Get(Az5)));this.Oq.Set(
Az2,A.aaH(this.Kh.Get(Az2)));if(Az5!==this.Kd){this.Kh.Set(Az5,this.Kh.Get(this.
Kd));this.Oq.Set(Az5,this.Oq.Get(this.Kd));}},Byx:function(){var LI=A._NewObject(
C.AqD,0);LI.AvP=!!this.Ic;if(!!this.Ic)LI.Bs=this.Ic;return LI;},Ao0:function(){
var LI=A._NewObject(C.Aec,0);LI.AvP=!!this.Ic;if(!!this.Ic)LI.Bs=this.Ic;return LI;
},AtB:function(){var LI=A._NewObject(C.AuR,0);LI.AvP=!!this.Ic;if(!!this.Ic)LI.Bs=
this.Ic;return LI;},ByB:function(G){var O;var Apg=false;for(O=0;O<10;O=O+1)if(!!
this.Ft.Get(O)){var pos=this.RA.Get(O);var BZ=this.Ft.Get(O).Ab;while(!!BZ&&(BZ!==
this)){pos=A.abe(pos,BZ.M.slice(0,2));BZ=BZ.Ab;}if(!BZ&&(this.Ft.Get(O)!==this)){
var tmp=this.Ft.Get(O);this.EO=O;this.Ft.Set(O,null);tmp.G3(this.Ao0().InitializeUp(
O,this.Ain.Get(O),this.AfW.Get(O),this.Xs.Get(O),this.L_.Get(O)+1,this.Xr.Get(O)
,false,this.RA.Get(O),this.Adb.Get(O)));this.BroadcastEvent(this.AtB().InitializeUp(
O,this.L_.Get(O)+1,false,tmp,this.RA.Get(O)),0x18);}else{this.Xs.Set(O,(this.Aio.
Bs-this.AtC.Get(O))|0);if(this.Xs.Get(O)<10)this.Xs.Set(O,10);this.EO=O;this.Ft.
Get(O).G3(this.Ao0().InitializeHold(O,pos,this.AfW.Get(O),this.Xs.Get(O),this.L_.
Get(O)+1,this.Xr.Get(O),this.RA.Get(O),this.Adb.Get(O)));Apg=true;}}if(!Apg)this.
Aio.Ar(false);},GetFPS:function(){var ticksCount=0;var Bc0=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ5&&(ticksCount>this.AJ5))Bc0=((this.AJ4*1000)/((
ticksCount-this.AJ5)|0))|0;this.AJ4=0;this.AJ5=ticksCount;return Bc0;},Update:function(
){var B;if(!this.Atx)this.Atx=A._NewObject(A.Graphics.Canvas,0);this.Atx.ArL([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Atx.Update();return this.UpdateGE20(this.Atx);}
,UpdateGE20:function(CY){if(!this.BeginUpdate())return BD;var Agr=this.UpdateCanvas(
CY,Cc);this.EndUpdate();return Agr;},EndUpdate:function(){if(this.Kd>0){this.AJ4=
this.AJ4+1;this.Kd=0;}},UpdateCanvas:function(CY,aOffset){var B;var Agr=BD;var Bye=[
].concat(aOffset,A.abf(CY.FrameSize,aOffset));var O;var If=this.Kd;this.ABl=this.
ABl+1;CY.C0=this;for(O=0;(O<If)&&(O<4);O=O+1)if(this.Oq.Get(O)>0){this.Kn(CY,A.abg(
this.Kh.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agr=A.wC(Agr,A.lb(Bye
,this.Kh.Get(O)));}else If=If+1;CY.C0=null;this.ABl=this.ABl-1;if(!((Agr[0]>=Agr[
2])||(Agr[1]>=Agr[3])))return A.abg(Agr,aOffset);else return Agr;},GetUpdateRegion:
function(AI4){var O;var If=this.Kd;if(AI4<0)return BD;for(O=0;(O<If)&&(O<4);O=O+
1)if(!this.Oq.Get(O)){If=If+1;AI4=AI4+1;}else if(O===AI4)return this.Kh.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kd&&!A.aaY(this.Kh.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bgg=A.abi(3,A.wg,null);var Bgf=this.Kd;for(O=0;
O<Bgf;O++)Bgg.Set(O,this.Kh.Get(O));for(O=0;O<Bgf;O++){var Bfx=A.abh(Bgg.Get(O),
this.M.slice(0,2));var Bfy=this.Auz(Bfx);if(!A.aaY(Bfx,Bfy))this.Bj(A.abg(Bfy,this.
M.slice(0,2)));}}var If;var RG;for(If=0;If<(this.Kd-1);If++)if(this.Oq.Get(If)>0
)for(RG=If+1;RG<this.Kd;RG++)if(this.Oq.Get(RG)>0){var ALb=A.aaH(A.wC(this.Kh.Get(
If),this.Kh.Get(RG)));if(((ALb-this.Oq.Get(If))-this.Oq.Get(RG))<0){this.Kh.Set(
If,A.wC(this.Kh.Get(If),this.Kh.Get(RG)));this.Oq.Set(If,ALb);this.Oq.Set(RG,0);
}}for(O=this.Kd-1;O>=0;O--)if(!this.Oq.Get(O))this.Kd=this.Kd-1;return this.Kd;}
,DoesNeedUpdate:function(){if(this.Kd>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.AzO)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A0D){if(A0D===this.AzO
)return false;this.AzO=A0D;if(!A0D){if(!!this.JE)this.JE.C0.Cr(0x0,0x40);else this.
Cr(0x0,0x40);}else if(!!this.JE)this.JE.C0.Cr(0x40,0x0);else this.Cr(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qf){this.Ic=Qf;},DriveKeyboardHitting:function(
KA,AyQ,Tb){var B;var A3C=!!this.RH;if(!!this.RH&&((!Tb||(this.Az3!==KA))||(this.
AtR!==AyQ))){var LI=null;var X=(C.Ci.isPrototypeOf(B=this.RH)?B:null);var D5=(C.
BK.isPrototypeOf(B=this.RH)?B:null);if(!!this.Az3)LI=A._NewObject(C.KeyEvent,0).
Initialize(this.Az3,false);if(this.AtR!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtR,false);if(!!D5)D5.G3(LI);else if(!!X)X.G3(LI);this.Az3=0;this.AtR=0x00;
this.RH=null;}if(!!this.RH){var LI=null;var X=(C.Ci.isPrototypeOf(B=this.RH)?B:null
);var D5=(C.BK.isPrototypeOf(B=this.RH)?B:null);if(!!KA)LI=A._NewObject(C.KeyEvent
,0).Initialize(KA,true);if(this.AtR!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
AyQ,true);if(!!D5)D5.G3(LI);else if(!!X)X.G3(LI);}if(!this.RH&&Tb){if(!!KA)this.
RH=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KA,true));if(AyQ!==0x00
)this.RH=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyQ,true));if(
!(C.BK.isPrototypeOf(B=this.RH)?B:null)&&!(C.Ci.isPrototypeOf(B=this.RH)?B:null)
)this.RH=null;this.Az3=KA;this.AtR=AyQ;A3C=A3C||!!this.RH;}this.Ic=0;return A3C;
},DriveCursorMovement:function(Fg){return this.DriveMultiTouchMovement(this.EO,Fg
);},DriveMultiTouchMovement:function(BF,Fg){if((BF<0)||(BF>9)){this.Ic=0;return false;
}var Fv=A.abe(Fg,this.RA.Get(BF));this.RA.Set(BF,Fg);if(!this.Ft.Get(BF)||A.aaX(
Fv,Cc)){this.Ic=0;return false;}var pos=Fg;var BZ=this.Ft.Get(BF).Ab;while(!!BZ&&(
BZ!==this)){pos=A.abe(pos,BZ.M.slice(0,2));BZ=BZ.Ab;}if(!BZ&&(this.Ft.Get(BF)!==
this)){var tmp=this.Ft.Get(BF);this.EO=BF;this.Ft.Set(BF,null);tmp.G3(this.Ao0().
InitializeUp(BF,this.Ain.Get(BF),this.AfW.Get(BF),this.Xs.Get(BF),this.L_.Get(BF
)+1,this.Xr.Get(BF),false,this.RA.Get(BF),this.Adb.Get(BF)));this.BroadcastEvent(
this.AtB().InitializeUp(BF,this.L_.Get(BF)+1,false,tmp,Fg),0x18);}else{this.Ain.
Set(BF,pos);this.EO=BF;this.Ft.Get(BF).G3(this.Byx().Initialize(BF,pos,this.AfW.
Get(BF),Fv,this.Xs.Get(BF),this.L_.Get(BF)+1,this.Xr.Get(BF),Fg,this.Adb.Get(BF)
));}this.Ic=0;return true;},DriveCursorHitting:function(Tb,BF,Fg){return this.DriveMultiTouchHitting(
Tb,BF,Fg);},DriveMultiTouchHitting:function(Tb,BF,Fg){if((BF<0)||(BF>9)){this.Ic=
0;return false;}var ticksCount=this.Ic;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBq=this.Ic;this.DriveMultiTouchMovement(BF,Fg);Fg=this.RA.Get(BF);
this.Ic=BBq;if(Tb)this.Adb.Set(BF,Fg);if(Tb&&!this.Ft.Get(BF)){var JD;var pos=Fg;
if(A.wa(this.AJH.Get(BF),Fg)&&((ticksCount-this.AtC.Get(BF))<=250))this.L_.Set(BF
,this.L_.Get(BF)+1);else this.L_.Set(BF,0);this.AJH.Set(BF,A.abh(MG,Fg));this.AtC.
Set(BF,ticksCount);if(!!this.JE)JD=this.Yd(A.abh(MG,Fg),BF,this.L_.Get(BF)+1,this.
JE.C0,null,0x0);else JD=this.Yd(A.abh(MG,Fg),BF,this.L_.Get(BF)+1,null,null,0x0);
if(!!JD){this.BroadcastEvent(this.AtB().InitializeDown(BF,this.L_.Get(BF)+1,false
,JD.Ci,Fg),0x18);this.Ft.Set(BF,JD.Ci);this.Xr.Set(BF,JD.DG);}else{this.Ft.Set(BF
,null);this.Xr.Set(BF,Cc);this.Ic=0;return false;}var BZ=JD.Ci.Ab;while(!!BZ&&(BZ
!==this)){pos=A.abe(pos,BZ.M.slice(0,2));BZ=BZ.Ab;}this.AfW.Set(BF,pos);this.Ain.
Set(BF,pos);this.Xs.Set(BF,0);this.Aio.Ar(true);this.EO=BF;this.Ft.Get(BF).G3(this.
Ao0().InitializeDown(BF,pos,this.L_.Get(BF)+1,this.Xr.Get(BF),false,Fg));this.Ic=
0;return true;}if(!Tb&&!!this.Ft.Get(BF)){var pos=Fg;var BZ=this.Ft.Get(BF).Ab;while(
!!BZ&&(BZ!==this)){pos=A.abe(pos,BZ.M.slice(0,2));BZ=BZ.Ab;}if(!BZ)pos=this.Ain.
Get(BF);this.EO=BF;var tmp=this.Ft.Get(BF);this.Ft.Set(BF,null);tmp.G3(this.Ao0(
).InitializeUp(BF,pos,this.AfW.Get(BF),this.Xs.Get(BF),this.L_.Get(BF)+1,this.Xr.
Get(BF),false,Fg,this.Adb.Get(BF)));this.BroadcastEvent(this.AtB().InitializeUp(
BF,this.L_.Get(BF)+1,false,tmp,Fg),0x18);this.Ic=0;return true;}this.Ic=0;return false;
},AUa:function(Aah,BbI,Ac3,Ac2){if(Aah===this)Aah=null;if(!!!Aah&&!!this.JE)Aah=
this.JE.C0;if(!this.Ft.Get(this.EO))return;var JD;JD=this.Yd(A.abh(MG,this.RA.Get(
this.EO)),this.EO,1,Aah,Ac3,Ac2);if(!!JD&&(this.Ft.Get(this.EO)!==JD.Ci))this.ANH(
JD.Ci,JD.DG);if(!JD&&(this.Ft.Get(this.EO)!==BbI))this.ANH(BbI,Cc);},ANH:function(
Aah,Xf){if(!this.Ft.Get(this.EO)||(this.Ft.Get(this.EO)===Aah))return;var tmp=this.
Ft.Get(this.EO);this.Ft.Set(this.EO,null);tmp.G3(this.Ao0().InitializeUp(this.EO
,this.Ain.Get(this.EO),this.AfW.Get(this.EO),this.Xs.Get(this.EO),this.L_.Get(this.
EO)+1,this.Xr.Get(this.EO),true,this.RA.Get(this.EO),this.Adb.Get(this.EO)));this.
BroadcastEvent(this.AtB().InitializeUp(this.EO,this.L_.Get(this.EO)+1,true,tmp,this.
RA.Get(this.EO)),0x18);var pos=this.RA.Get(this.EO);var BZ=null;if(!!Aah)BZ=Aah.
Ab;while(!!BZ&&(BZ!==this)){pos=A.abe(pos,BZ.M.slice(0,2));BZ=BZ.Ab;}if(!BZ&&(Aah
!==this)){this.Ft.Set(this.EO,null);return;}this.BroadcastEvent(this.AtB().InitializeDown(
this.EO,this.L_.Get(this.EO)+1,true,Aah,this.RA.Get(this.EO)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Ft.Set(this.EO,Aah);this.Xr.Set(
this.EO,Xf);this.AfW.Set(this.EO,pos);this.Ain.Set(this.EO,pos);this.L_.Set(this.
EO,0);this.Xs.Set(this.EO,0);this.AtC.Set(this.EO,ticksCount);this.Adb.Set(this.
EO,this.RA.Get(this.EO));this.Ft.Get(this.EO).G3(this.Ao0().InitializeDown(this.
EO,pos,this.L_.Get(this.EO)+1,this.Xr.Get(this.EO),true,this.Adb.Get(this.EO)));
},AOJ:function(){if(!!this.JE)return this.JE.C0;return null;},ACz:function(KB){var
B;if(!KB)throw new Error(S9);if(!((KB.U&0x80)===0x80))throw new Error(UQ);if(this.
JE.C0===KB)this.JE=this.JE.Ah;else{var AzN=this.JE;while(AzN.Ah.C0!==KB)AzN=AzN.
Ah;AzN.Ah=AzN.Ah.Ah;}KB.Cr(0x0,0xD0);if(this.AzO){if(!!this.JE)this.JE.C0.Cr(0x50
,0x0);else this.Cr(0x50,0x0);}},AMP:function(KB){var B;var As=A._NewObject(C.A7x
,0);if(!KB)throw new Error(Z1);if(KB===null)throw new Error(W1);if(((KB.U&0x80)===
0x80))throw new Error(It);if(!!this.JE)this.JE.C0.Cr(0x0,0x50);else this.Cr(0x0,
0x50);As.Ah=this.JE;As.C0=KB;this.JE=As;if(this.AzO)KB.Cr(0xD0,0x0);else KB.Cr(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Aio={
I:this},0);(this.Ft=[]).__proto__=C.Root.Ft;(this.L_=[]).__proto__=C.Root.L_;(this.
AJH=[]).__proto__=C.Root.AJH;(this.Xs=[]).__proto__=C.Root.Xs;(this.AfW=[]).__proto__=
C.Root.AfW;(this.AtC=[]).__proto__=C.Root.AtC;(this.Ain=[]).__proto__=C.Root.Ain;(
this.Xr=[]).__proto__=C.Root.Xr;(this.RA=[]).__proto__=C.Root.RA;(this.Adb=[]).__proto__=
C.Root.Adb;(this.Oq=[]).__proto__=C.Root.Oq;(this.Kh=[]).__proto__=C.Root.Kh;this.
__proto__=C.Root;this.U=0x10007F;this.Aio.PR(10);this.Aio.Mz=[this,this.ByB];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Aio._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Aio._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RH)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JE)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ft,D);if((B=this.
Atx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aio)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvP:false,Init:function(aArg){this.Bs=
this.Avk();},Avk:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(KA,Tb){this.CO=0;this.DQ=KA;this.Down=Tb;if((KA>=0x30)&&(KA<=
0x39))this.CO=(10+KA)-48;if((KA>=0x41)&&(KA<=0x5A))this.CO=(105+KA)-65;if((KA>=0x61
)&&(KA<=0x7A))this.CO=(105+KA)-97;if(KA===0x20)this.CO=131;if(!this.CO)switch(KA
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KA,Tb){this.CO=KA;this.
Down=Tb;this.DQ=0x00;var A1h=KA-10;var Atw=KA-105;if((A1h>=0)&&(A1h<=9))this.DQ=(
48+A1h)&0xFFFF;if((Atw>=0)&&(Atw<=25))this.DQ=(65+Atw)&0xFFFF;if(KA===131)this.DQ=
0x20;if(this.DQ===0x00)switch(KA){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bjg:function(Bbx){switch(
Bbx){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bbx===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARf={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARf;},_className:
"Core::LanguageEvent"};C.AuR={AxH:null,LT:A.wf,N6:0,II:0,Down:false,NF:false,InitializeUp:
function(BF,Od,Aoz,A0V,Aag){this.Down=false;this.II=BF;this.N6=Od;this.LT=Aag;this.
AxH=A0V;this.NF=Aoz;return this;},InitializeDown:function(BF,Od,Aoz,A0V,Aag){this.
Down=true;this.II=BF;this.N6=Od;this.LT=Aag;this.AxH=A0V;this.NF=Aoz;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuR;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxH)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aec={AgZ:A.wf,LT:A.wf,N6:0,Js:
0,NR:A.wf,H0:A.wf,II:0,Down:false,NF:false,InitializeHold:function(BF,Alf,AyT,AyU
,Od,Xf,Aag,AyS){this.Down=true;this.II=BF;this.H0=A.abf(Alf,Xf);this.NR=A.abf(AyT
,Xf);this.Js=AyU;this.N6=Od;this.LT=Aag;this.AgZ=AyS;return this;},InitializeUp:
function(BF,Alf,AyT,AyU,Od,Xf,Aoz,Aag,AyS){this.Down=false;this.II=BF;this.H0=A.
abf(Alf,Xf);this.NR=A.abf(AyT,Xf);this.Js=AyU;this.N6=Od;this.NF=Aoz;this.LT=Aag;
this.AgZ=AyS;return this;},InitializeDown:function(BF,Alf,Od,Xf,Aoz,Aag){this.Down=
true;this.II=BF;this.H0=A.abf(Alf,Xf);this.NR=A.abf(Alf,Xf);this.Js=0;this.N6=Od;
this.NF=Aoz;this.LT=Aag;this.AgZ=Aag;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aec;},_className:"Core::CursorEvent"};C.AqD={
AgZ:A.wf,LT:A.wf,N6:0,Js:0,DG:A.wf,NR:A.wf,H0:A.wf,II:0,Initialize:function(BF,Alf
,AyT,aOffset,AyU,BxB,Xf,Aag,AyS){this.II=BF;this.H0=A.abf(Alf,Xf);this.NR=A.abf(
AyT,Xf);this.DG=aOffset;this.Js=AyU;this.N6=BxB;this.LT=Aag;this.AgZ=AyS;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqD;},_className:
"Core::DragEvent"};C.Y={BW:null,Nw:null,El:null,Br:A.wf,AUF:0,Space:0,AgX:0,Kn:function(
CY,aClip,aOffset,Cj,aBlend){},GetClipping:function(){var B;var Az=C.Et.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var ApZ=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))ApZ=A.wC(ApZ,X.GetClipping());
Az=A.wC(Az,ApZ);}return Az;},Cr:function(Rt,U4){var B;var Tm=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U4&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Et.Cr.call(this,Rt,U4);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rt&0x80000)===
0x80000))&&!((Tm&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlU=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKp=[
E[2]-E[0],E[3]-E[1]];var ApV=!A.aaX(AlU,AKp);var Fv=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fv,Cc)&&!ApV){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anf(Fv,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((ApV&&(AlU[0]>0))&&(AlU[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eu&&(X.Eu.
Ny!==this))X.Eu=null;if(!X.Eu&&((X.PL!==0x14)||!!this.AgX))X.AtP(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Et.H.call(this,E);if(!!this.Ab&&ApV){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JI],this);}}},Bfr:function(){var B;if((!this.AgX||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1B=((this.U&0x1000)===0x1000);for(;!!X&&!A1B;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1B=true;if(((X.U&0x200)===
0x200))break;}if(A1B){this.U=this.U&~0x4000;this.Ab.BfC();}},ApG:function(G){var
B;this.BW.Q=null;this.BW.Qt=null;this.BW=null;(B=this.Nw)?B[1].call(B[0],this):null;
},Ga:function(E){var B;var Fv=A.abe(E,this.Br);if(A.aaX(Fv,Cc))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anf(Fv,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.El,this);},A_f:function(E){var B;if(E<0)E=0;if(E===this.AUF)return;this.AUF=
E;if(!!this.Ab&&!!this.AgX){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JI],this);}},Bne:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgX){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JI],this);}},JR:function(E){var B;if(E===this.AgX)return;
this.AgX=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JI],this);}},Vw:function(AcW,E7){var Atw=this.Db(0x1);var Ry=this.M;var
Vg=A.abe(Atw.slice(0,2),Ry.slice(0,2));var Ma=A.abe(Atw.slice(2,4),Ry.slice(2,4)
);var Bq=Cc;if((Vg[0]>0)&&(Ma[0]>Vg[0]))Bq=[Vg[0],Bq[1]];else if((Vg[0]>0)&&(Ma[
0]>0))Bq=[Ma[0],Bq[1]];if((Ma[0]<0)&&(Vg[0]<Ma[0]))Bq=[Ma[0],Bq[1]];else if((Ma[
0]<0)&&(Vg[0]<0))Bq=[Vg[0],Bq[1]];if((Vg[1]>0)&&(Ma[1]>Vg[1]))Bq=[Bq[0],Vg[1]];else
if((Vg[1]>0)&&(Ma[1]>0))Bq=[Bq[0],Ma[1]];if((Ma[1]<0)&&(Vg[1]<Ma[1]))Bq=[Bq[0],Ma[
1]];else if((Ma[1]<0)&&(Vg[1]<0))Bq=[Bq[0],Vg[1]];if(A.aaX(Bq,Cc)){(E7)?E7[1].call(
E7[0],this):null;return;}if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.
Qt=null;this.Nw=null;}this.BW=AcW;if(!this.BW){this.Ga(A.abe(this.Br,Bq));(E7)?E7[
1].call(E7[0],this):null;}else{this.BW.Ar(false);this.BW.HM(1);this.BW.Q=[this,this.
Anq,this.Ga];this.BW.Cw=this.Br;this.BW.B1=A.abe(this.Br,Bq);this.BW.Qt=[this,this.
ApG];this.BW.Ae9(false);this.BW.Ar(true);this.Nw=E7;}},HH:function(Ag,Ac0,AcW,E7
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UR);this.Bfr();var Az=Ag.GetExtent();var Bd=this.M;var LM=A.lb(Az,Bd);if((!Ac0&&
!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az))){(E7)?E7[1].call(E7[0],this
):null;return;}var Bq=Cc;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.
BW.Qt=null;this.Nw=null;}this.BW=AcW;if(!this.BW){this.Ga(A.abe(this.Br,Bq));(E7
)?E7[1].call(E7[0],this):null;}else{this.BW.Ar(false);this.BW.HM(1);this.BW.Q=[this
,this.Anq,this.Ga];this.BW.Cw=this.Br;this.BW.B1=A.abe(this.Br,Bq);this.BW.Qt=[this
,this.ApG];this.BW.Ae9(false);this.BW.Ar(true);this.Nw=E7;}},BiI:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TN:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IY=0x10000;if(((aFilter&0x10000)===0x10000))IY=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IY||!((B=IY)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BD;var IY=0x10000;this.Bfr();if(((
aFilter&0x10000)===0x10000))IY=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IY||!((B=IY)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anq:function(){return this.Br;},_Init:
function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Et._Mark.call(this,D);if((B=this.BW)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HA:null,BW:null,Ci:null,WK:null,Nw:null,El:null,Hl:null,Tj:-1,Ti:0,Jo:-1,Hs:0,AiG:
8,Ol:0,Uv:0,AcH:A.wf,G5:-1,Br:0,Gr:-1,OQ:0,GN:24,AY:0,Li:null,NN:false,AtS:false
,AUM:function(Iu,Oc,Xe,Tc,Td,Ah7,O8,Rs,Ly,Lw,Lx){throw new Error(Z2);},AqB:function(
Iu,Ah7,O8,Rs,Ly,Lw,Lx){throw new Error(W2);},AkI:function(Iu,Oc,Xe,Tc,Td,O8,Rs,Ly
,Lw,Lx){throw new Error(Z3);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gr>=0)&&(this.Gr<this.AY))&&!this.AV){this.G5=this.Gr;this.Ci=(C.Ci.isPrototypeOf(
B=A._NewObject(this.Li,0))?B:null);if(!!this.B8)this.B8.Ah=this.Ci;else this.B7=
this.Ci;this.Ci.AJ=this.B8;this.B8=this.Ci;this.Ci.Ab=this;this.AcH=[(B=this.M)[
2]-B[0],this.GN];(B=this.Hl)?B[1].call(B[0],this):null;var BZ=(C.P.isPrototypeOf(
B=this.Ci)?B:null);if(!!BZ)result=BZ.DispatchEvent(CN);else result=this.Ci.G3(CN
);if(!!this.Ci.AJ)this.Ci.AJ.Ah=null;else this.B7=null;this.B8=this.Ci.AJ;this.Ci.
AJ=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Li){A.pe(this.El,this);return;
}this.AtS=true;var AAH=0;if(!this.NN)AAH=this.OQ;var FS=this.Al3(-AAH-this.Br,1);
var GY=this.Al3(((((B=this.M)[3]-B[1])-AAH)-this.Br)-1,2);var CB=GY-FS;if(CB<1)CB=
1;var Aii=(CB/2)|0;var Aij=(CB/3)|0;if(!Aii)Aii=1;if(!Aij)Aij=1;if(FS<this.Hs){FS=
FS-Aii;GY=GY+Aij;}else if(GY>this.Jo){FS=FS-Aij;GY=GY+Aii;}else{FS=this.Hs;GY=this.
Jo;}if(!this.NN){if(FS>=this.AY){FS=0;GY=-1;}else if(GY<0){FS=0;GY=-1;}if(GY>=this.
AY)GY=this.AY-1;if(FS<0)FS=0;}else if(this.AY<=0){FS=0;GY=-1;}var AiW=this.Hs;var
AiX=this.Jo;var Apt=0;var Apu=-1;if(FS>AiW)AiW=FS;if(GY<AiX)AiX=GY;if(AiW<=AiX){
while((this.Jo<GY)&&(this.Hs<AiW)){this.AdD();this.Azi();}while((this.Hs>FS)&&(this.
Jo>AiX)){this.AAU();this.Azh();}}else{this.Jo=(this.Jo-this.Hs)+FS;this.Hs=FS;Apt=
this.Hs;Apu=this.Jo;}while(this.Hs<FS)this.AdD();while(this.Jo>GY)this.AAU();while(
this.Hs>FS)this.Azh();while(this.Jo<GY)this.Azi();var Aa=this.B7;var inx=this.Hs;
var pos=[0,(AAH+this.Br)+this.Jm(inx,0)];var BI=(B=this.M)[3]-B[1];var AlC=null;
var Bgp=(B=this.M)[2]-B[0];while(!!Aa){var IA=inx;if(this.NN){if(IA<0)IA=this.AY-(-
IA%this.AY);if(IA>0)IA=IA%this.AY;}var AdE=((IA>=this.Ti)&&(IA<=this.Tj))||((inx>=
Apt)&&(inx<=Apu));var Ao$=Aa.GetExtent();var Bq=A.abe(pos,Ao$.slice(0,2));if(AdE
)this.Uv=this.GN;else this.Uv=Ao$[3]-Ao$[1];var A2h=pos[1];var A2i=pos[1]+this.Uv;
if(!A.aaX(Bq,Cc))Aa.Anf(Bq,true);if((AdE&&(A2h<BI))&&(A2i>0)){this.Ci=Aa;this.G5=
IA;this.AcH=[Bgp,this.Uv];(B=this.Hl)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uv];}inx=this.Hs;Aa=this.B7;pos=[0,(AAH+this.Br)+this.Jm(
inx,0)];while(!!Aa){var IA=inx;if(this.NN){if(IA<0)IA=this.AY-(-IA%this.AY);if(IA>
0)IA=IA%this.AY;}var AdE=((IA>=this.Ti)&&(IA<=this.Tj))||((inx>=Apt)&&(inx<=Apu)
);if(AdE)this.Uv=this.GN;else this.Uv=(B=Aa.GetExtent())[3]-B[1];var A2h=pos[1];
var A2i=pos[1]+this.Uv;if(AdE&&!((A2h<BI)&&(A2i>0))){this.Ci=Aa;this.G5=IA;this.
AcH=[Bgp,this.Uv];(B=this.Hl)?B[1].call(B[0],this):null;}if(((IA===this.Gr)&&this.
NN)&&!!AlC){var Ry=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Ry))>A.aaH(A.lb(AlC.GetExtent(),Ry)))AlC=Aa;}else if(IA===this.Gr)AlC=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uv];}this.Ti=0;this.Tj=-1;this.Ci=null;this.G5=-
1;this.Bb(AlC);this.AtS=false;A.pe(this.El,this);},QH:function(Ag,Gz,aFilter){return null;
},AqI:function(Ag,aFilter){return null;},TN:function(Ag,aFilter){return null;},ACH:
function(Ag,aFilter){return null;},Db:function(aFilter){return BD;},NO:function(
KB,FO,Ly,Lw,Lx){throw new Error(W3);},Ahz:function(Ag,J5){throw new Error(Z4);},
ZB:function(Ag){throw new Error(Z5);},JX:function(Ag,Qe){throw new Error(US);},HN:
function(Ag){throw new Error(W4);},AL4:function(Ag,J5){throw new Error(O3);},J:function(
Ag,Qe){throw new Error(Z6);},Jm:function(G$,A0u){return G$*this.GN;},Al3:function(
Fg,A0u){return(Fg/this.GN)|0;},AAU:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jo=this.Jo-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiG){if(!
!this.HA)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azi:function(
){var B;var Aa=this.HA;var Adn=this.Li;var AdH=++this.Jo;if(this.NN){if(AdH<0)AdH=
this.AY-(-AdH%this.AY);if(AdH>0)AdH=AdH%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adn))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.AiG++;
}this.Uv=this.GN;this.G5=AdH;this.AcH=[(B=this.M)[2]-B[0],this.Uv];this.Ci=Aa;(B=
this.Hl)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B8)this.B8.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdH===this.Gr
)this.Bb(Aa);return Aa;},AdD:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hs=this.Hs+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiG){if(!!this.HA
)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azh:function(){var
B;var Aa=this.HA;var Adn=this.Li;var MY=--this.Hs;if(this.NN){if(MY<0)MY=this.AY-(-
MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adn)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HA===
Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Ci.isPrototypeOf(B=
A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.AiG++;}this.Uv=this.GN;
this.G5=MY;this.AcH=[(B=this.M)[2]-B[0],this.Uv];this.Ci=Aa;(B=this.Hl)?B[1].call(
B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B7)this.B7.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MY===this.Gr)this.Bb(Aa);return Aa;
},ApG:function(G){var B;this.BW.Q=null;this.BW.Qt=null;this.BW=null;(B=this.Nw)?
B[1].call(B[0],this):null;},BAM:function(G){this.Ga(this.WK.DG[1]);},BAN:function(
G){var B;if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.Qt=null;this.BW=
null;}if(!this.NN){var AE=this.AqP(0,this.AY-1);var Agg=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OQ);if(AE[0]>Agg[0])AE=[].concat(Agg[0],AE.slice(1,4));if(AE[1]>Agg[
1])AE=A.abP(AE,Agg[1]);var Fv=AE[1]-this.M[1];var A2y=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2y>0)A2y=0;this.WK.DG=[0,this.Br];this.WK.Gn=[0,(this.Br+A2y)-Fv];this.
WK.F0=[0,this.Br-Fv];}else{var Fv=32000-(32000%this.GN);this.WK.DG=[0,this.Br];this.
WK.Gn=[0,this.Br-Fv];this.WK.F0=[0,this.Br+Fv];}},AST:function(E){var B;if(this.
NN===E)return;this.NN=E;while(!!this.AdD());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw1:function(E){if(E===this.WK)return;if(!!E&&!!E.At5){A.ab5(
"%s%*%s",O4,E,Rl);throw new Error(W5);}if(!!this.WK){this.WK.AKC=null;this.WK.At5=
null;}this.WK=E;if(!!E){E.AKC=[this,this.BAN];E.At5=[this,this.BAM];}},Ga:function(
E){var B;if(this.NN&&(this.AY>0)){var HC=this.Jm(this.AY,3);if(E<0)E=HC-(-E%HC);
if(E>0)E=E%HC;if(E>0)E=E-HC;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(E){if(E<0)E=-1;if(E===this.Gr)return;
this.Gr=E;this.Am();},A93:function(E){var B;if(E<0)E=0;if(E===this.OQ)return;this.
OQ=E;if(!this.NN){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae6:function(
E){var B;if(E<1)E=1;if(E===this.GN)return;this.GN=E;while(!!this.AdD());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jx:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NN){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OQ+this.Br)+this.Jm(E,3));AE=A.abP(AE
,(this.OQ+this.Br)+this.Jm(this.AY,3));}else{AE=A.abP(AE,(this.OQ+this.Br)+this.
Jm(E,3));AE=[].concat(AE.slice(0,3),(this.OQ+this.Br)+this.Jm(this.AY,3));}}else
while(!!this.AdD());this.AY=E;this.Am();this.Bj(AE);},N0:function(E){var B;if(E===
this.Li)return;this.Li=E;while(!!this.AdD());this.HA=null;this.Ol=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiV:function(G$){if(this.AtS)return null;
if((G$<0)||(G$>=this.AY))return null;if(!this.NN){if((G$<this.Hs)||(G$>this.Jo))
return null;var X=this.B7;while(G$>this.Hs){X=X.Ah;G$=G$-1;}return X;}else{var MY=
this.Hs;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B7;while(
!!X){if((MY%this.AY)===G$)return X;X=X.Ah;MY=MY+1;}return null;}},ABB:function(AcW
,E7){var B;if(this.NN){(E7)?E7[1].call(E7[0],this):null;return;}var AJ6=this.Br;
var Bc1=((((B=this.M)[3]-B[1])-this.Br)-this.OQ)-this.Jm(this.AY,3);var Bq=0;if(
AJ6>0)Bq=-AJ6;else if(Bc1>0)Bq=Bc1;if((Bq>0)&&(Bq>-AJ6))Bq=-AJ6;if(!Bq){(E7)?E7[
1].call(E7[0],this):null;return;}if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;
this.BW.Qt=null;this.Nw=null;}this.BW=AcW;if(!this.BW){this.Ga(this.Br+Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BW.Ar(false);this.BW.HM(1);this.BW.Q=[this
,this.Anq,this.Ga];this.BW.Cw=this.Br;this.BW.B1=this.Br+Bq;this.BW.Qt=[this,this.
ApG];this.BW.Ae9(false);this.BW.Ar(true);this.Nw=E7;}},HH:function(G$,Ac0,AcW,E7
){var B;if((G$<0)||(G$>=this.AY))return;var Az=this.AqP(G$,G$);var Bd=this.M;var
LM=A.lb(Az,Bd);if((!Ac0&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az))
){(E7)?E7[1].call(E7[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;
this.BW.Qt=null;this.Nw=null;}this.BW=AcW;if(!this.BW){this.Ga(this.Br-Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BW.Ar(false);this.BW.HM(1);this.BW.Q=[this
,this.Anq,this.Ga];this.BW.Cw=this.Br;this.BW.B1=this.Br-Bq;this.BW.Qt=[this,this.
ApG];this.BW.Ae9(false);this.BW.Ar(true);this.Nw=E7;}},BiN:function(){return BD;
},AOL:function(){if((this.OQ<=0)||this.NN)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OQ);return AE;},A6z:function(Fg
){if(((this.AY<=0)||(Fg[0]<this.M[0]))||(Fg[0]>=this.M[2]))return-1;Fg=A.abe(Fg,
this.M.slice(0,2));if(!this.NN){var Aa=(Fg[1]-this.Br)-this.OQ;if(Aa>0)Aa=this.Al3(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fg[1]-this.Br;if(Aa>0)
Aa=this.Al3(Aa,0);if(Aa<0)Aa=this.Al3(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqP:function(J3,L5){if(J3<0)J3=0;if(L5>=this.AY)L5=
this.AY-1;if(J3>L5)return BD;var AE=this.M;var Bq=this.Br;if(this.NN){var HC=this.
Jm(this.AY,3);if(Bq<0)Bq=HC-(-Bq%HC);if(Bq>0)Bq=Bq%HC;if(Bq>0)Bq=Bq-HC;}else Bq=
Bq+this.OQ;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jm(L5+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jm(J3,0));return AE;},AbC:function(J3,L5){var B;if(J3<0)J3=0;if(J3>L5
)return;if(this.Ti>this.Tj){this.Ti=J3;this.Tj=L5;}else{if(J3<this.Ti)this.Ti=J3;
if(L5>this.Tj)this.Tj=L5;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NN){
AE=A.abP(AE,(this.OQ+this.Br)+this.Jm(J3,0));AE=[].concat(AE.slice(0,3),(this.OQ+
this.Br)+this.Jm(L5+1,0));}else if((this.Jm(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HC=this.Jm(this.AY,3);if(Bq<0)Bq=HC-(-Bq%HC);if(
Bq>0)Bq=Bq%HC;if(Bq>0)Bq=Bq-HC;AE=A.abP(AE,Bq+this.Jm(J3,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jm(L5+1,0));}this.Am();this.Bj(AE);},Anq:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W6);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HA
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WK)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hl)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dz={HA:null
,BW:null,Ci:null,Nw:null,Hl:null,Tj:-1,Ti:0,Jo:-1,Hs:0,AiG:8,Ol:0,SM:0,AcH:A.wf,
G5:-1,Br:0,Gr:-1,Wa:24,AY:0,Li:null,AtS:false,AUM:function(Iu,Oc,Xe,Tc,Td,Ah7,O8
,Rs,Ly,Lw,Lx){throw new Error(UT);},AqB:function(Iu,Ah7,O8,Rs,Ly,Lw,Lx){throw new
Error(Z7);},AkI:function(Iu,Oc,Xe,Tc,Td,O8,Rs,Ly,Lw,Lx){throw new Error(Z8);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gr>=0)&&(this.Gr<this.AY))&&!this.AV
){this.G5=this.Gr;this.Ci=(C.Ci.isPrototypeOf(B=A._NewObject(this.Li,0))?B:null);
if(!!this.B8)this.B8.Ah=this.Ci;else this.B7=this.Ci;this.Ci.AJ=this.B8;this.B8=
this.Ci;this.Ci.Ab=this;this.AcH=[this.SM,(B=this.M)[3]-B[1]];(B=this.Hl)?B[1].call(
B[0],this):null;var BZ=(C.P.isPrototypeOf(B=this.Ci)?B:null);if(!!BZ)result=BZ.DispatchEvent(
CN);else result=this.Ci.G3(CN);if(!!this.Ci.AJ)this.Ci.AJ.Ah=null;else this.B7=null;
this.B8=this.Ci.AJ;this.Ci.AJ=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Li
)return;this.AtS=true;var FS=this.Al3(0-this.Br,1);var GY=this.Al3((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=GY-FS;if(CB<1)CB=1;var Aii=(CB/2)|0;var Aij=(CB/3)|
0;if(!Aii)Aii=1;if(!Aij)Aij=1;if(FS<this.Hs){FS=FS-Aii;GY=GY+Aij;}else if(GY>this.
Jo){FS=FS-Aij;GY=GY+Aii;}else{FS=this.Hs;GY=this.Jo;}if(FS>=this.AY){FS=0;GY=-1;
}else if(GY<0){FS=0;GY=-1;}if(GY>=this.AY)GY=this.AY-1;if(FS<0)FS=0;var AiW=this.
Hs;var AiX=this.Jo;var Apt=0;var Apu=-1;if(FS>AiW)AiW=FS;if(GY<AiX)AiX=GY;if(AiW<=
AiX){while((this.Jo<GY)&&(this.Hs<AiW)){this.AdD();this.Azi();}while((this.Hs>FS
)&&(this.Jo>AiX)){this.AAU();this.Azh();}}else{this.Jo=(this.Jo-this.Hs)+FS;this.
Hs=FS;Apt=this.Hs;Apu=this.Jo;}while(this.Hs<FS)this.AdD();while(this.Jo>GY)this.
AAU();while(this.Hs>FS)this.Azh();while(this.Jo<GY)this.Azi();var Aa=this.B7;var
inx=this.Hs;var pos=[this.Br+this.Jm(inx,0),0];var BX=(B=this.M)[2]-B[0];var AlC=
null;var Bgd=(B=this.M)[3]-B[1];while(!!Aa){var IA=inx;var AdE=((IA>=this.Ti)&&(
IA<=this.Tj))||((inx>=Apt)&&(inx<=Apu));var Ao$=Aa.GetExtent();var Bq=A.abe(pos,
Ao$.slice(0,2));if(AdE)this.SM=this.Wa;else this.SM=Ao$[2]-Ao$[0];var A2f=pos[0];
var A2g=pos[0]+this.SM;if(!A.aaX(Bq,Cc))Aa.Anf(Bq,true);if((AdE&&(A2f<BX))&&(A2g>
0)){this.Ci=Aa;this.G5=IA;this.AcH=[this.SM,Bgd];(B=this.Hl)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SM,pos[1]];}inx=this.Hs;Aa=this.B7;pos=[
this.Br+this.Jm(inx,0),0];while(!!Aa){var IA=inx;var AdE=((IA>=this.Ti)&&(IA<=this.
Tj))||((inx>=Apt)&&(inx<=Apu));if(AdE)this.SM=this.Wa;else this.SM=(B=Aa.GetExtent(
))[2]-B[0];var A2f=pos[0];var A2g=pos[0]+this.SM;if(AdE&&!((A2f<BX)&&(A2g>0))){this.
Ci=Aa;this.G5=IA;this.AcH=[this.SM,Bgd];(B=this.Hl)?B[1].call(B[0],this):null;}if(
IA===this.Gr)AlC=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SM,pos[1]];}this.Ti=0;this.
Tj=-1;this.Ci=null;this.G5=-1;this.Bb(AlC);this.AtS=false;},QH:function(Ag,Gz,aFilter
){return null;},AqI:function(Ag,aFilter){return null;},TN:function(Ag,aFilter){return null;
},ACH:function(Ag,aFilter){return null;},Db:function(aFilter){return BD;},NO:function(
KB,FO,Ly,Lw,Lx){throw new Error(W7);},Ahz:function(Ag,J5){throw new Error(W8);},
ZB:function(Ag){throw new Error(S_);},JX:function(Ag,Qe){throw new Error(UU);},HN:
function(Ag){throw new Error(UV);},AL4:function(Ag,J5){throw new Error(AcK);},J:
function(Ag,Qe){throw new Error(S$);},Jm:function(G$,A0u){return G$*this.Wa;},Al3:
function(Fg,A0u){return(Fg/this.Wa)|0;},AAU:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jo=this.Jo-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiG){if(!
!this.HA)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azi:function(
){var B;var Aa=this.HA;var Adn=this.Li;var AdH=++this.Jo;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adn))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{
Aa=(C.Ci.isPrototypeOf(B=A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.
AiG++;}this.SM=this.Wa;this.G5=AdH;this.AcH=[this.SM,(B=this.M)[3]-B[1]];this.Ci=
Aa;(B=this.Hl)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B8)this.
B8.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdH===this.
Gr)this.Bb(Aa);return Aa;},AdD:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hs=this.Hs+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiG){if(!!this.HA
)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azh:function(){var
B;var Aa=this.HA;var Adn=this.Li;var MY=--this.Hs;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adn))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.AiG++;
}this.SM=this.Wa;this.G5=MY;this.AcH=[this.SM,(B=this.M)[3]-B[1]];this.Ci=Aa;(B=
this.Hl)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B7)this.B7.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MY===this.Gr
)this.Bb(Aa);return Aa;},ApG:function(G){var B;this.BW.Q=null;this.BW.Qt=null;this.
BW=null;(B=this.Nw)?B[1].call(B[0],this):null;},Ga:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(
E){if(E<0)E=-1;if(E===this.Gr)return;this.Gr=E;this.Am();},AFc:function(E){var B;
if(E<1)E=1;if(E===this.Wa)return;this.Wa=E;while(!!this.AdD());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jx:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jm(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jm(E,3));}else{AE=
A.abN(AE,this.Br+this.Jm(this.AY,3));AE=[].concat(this.Br+this.Jm(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},N0:function(E){var B;if(E===this.Li)return;
this.Li=E;while(!!this.AdD());this.HA=null;this.Ol=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BoT:function(BxC,BxD){if(!this.BW)return;if(BxC)this.Ga(
this.BW.B1);var A4a=this.Nw;this.BW.Ar(false);this.BW.Q=null;this.BW.Qt=null;this.
Nw=null;this.BW=null;if(BxD)(A4a)?A4a[1].call(A4a[0],this):null;},Bjm:function(){
return!!this.BW;},HH:function(G$,Ac0,AcW,E7){var B;if((G$<0)||(G$>=this.AY))return;
var Az=this.AqP(G$,G$);var Bd=this.M;var LM=A.lb(Az,Bd);if((!Ac0&&!((LM[0]>=LM[2
])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az))){(E7)?E7[1].call(E7[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.Qt=null;this.Nw=null;}this.BW=
AcW;if(!this.BW){this.Ga(this.Br-Bq);(E7)?E7[1].call(E7[0],this):null;}else{this.
BW.Ar(false);this.BW.HM(1);this.BW.Q=[this,this.Anq,this.Ga];this.BW.Cw=this.Br;
this.BW.B1=this.Br-Bq;this.BW.Qt=[this,this.ApG];this.BW.Ae9(false);this.BW.Ar(true
);this.Nw=E7;}},AqP:function(J3,L5){if(J3<0)J3=0;if(L5>=this.AY)L5=this.AY-1;if(
J3>L5)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jm(L5+1
,0));AE=[].concat((AE[0]+Bq)+this.Jm(J3,0),AE.slice(1,4));return AE;},AbC:function(
J3,L5){var B;if(J3<0)J3=0;if(J3>L5)return;if(this.Ti>this.Tj){this.Ti=J3;this.Tj=
L5;}else{if(J3<this.Ti)this.Ti=J3;if(L5>this.Tj)this.Tj=L5;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jm(J3,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jm(L5+1,0));this.Am();this.Bj(AE);},Anq:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dz;this.H(W6);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HA
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={AR9:null,AED:null,Av4:null,D1:null,
Ln:null,BL:null,AK1:0,Bp:0,II:0,Bs:0,N6:0,Js:0,DG:A.wf,NR:A.wf,H0:A.wf,Axp:8,Afe:
0,A7q:1,Down:false,YC:false,NF:false,A1I:false,AAc:0,Kn:function(CY,aClip,aOffset
,Cj,aBlend){},G3:function(CN){var B;var BN=(C.Aec.isPrototypeOf(CN)?CN:null);var
D4=(C.AqD.isPrototypeOf(CN)?CN:null);var AKe=this.YC;var AaF;var Vd;var ABd;var MV;
var AzA;if(!BN&&!D4)return null;AaF=(!!BN&&BN.Down)&&!BN.Js;Vd=(!!BN&&BN.Down)&&(
BN.Js>0);ABd=(!!BN&&BN.Down)&&(BN.Js>this.AAc);MV=!!BN&&!BN.Down;AzA=!!D4;if(AaF
)this.AAc=((B=(BN.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afe&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iy=(C.AuR.isPrototypeOf(CN)?CN:null);if(((
!!Iy&&Iy.Down)&&(Iy.AxH!==this))&&A.wa(this.GetExtent(),this.Ab.A7m(Iy.LT))){this.
AK1=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaF){var ApA=0;var Adi;this.Bp=
this.Bp|(1<<BN.II);for(Adi=this.Bp&4095;Adi>0;Adi=Adi>>1)if(!!(Adi&1))ApA=ApA+1;
if(ApA===1)this.Bp=(this.Bp|16777216)|(4096<<BN.II);}if(MV&&(this.Bp<16777216)){
var ID=this.Im();var JD=null;if(!!ID){var A34=(!!this.AJ?this.AJ:this.Ab);var A1w=(
!!ID.JE?ID.JE.C0:null);JD=ID.Yd(A.abh(Z9,BN.LT),BN.II,BN.N6,A1w,A34,0x0);}if(!!JD
){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JD.Ci.G3(A._NewObject(C.Aec,0).InitializeDown(
O,BN.H0,BN.N6,Cc,true,BN.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JD.Ci.G3(A.
_NewObject(C.Aec,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N6,Cc,false,BN.LT,BN.LT));}}
if(MV)this.Bp=(this.Bp&~(1<<BN.II))|33554432;if(ABd&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MV&&BN.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&4095))this.
AK1=0x0;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Vd&&(this.Bp>=67108864)){var ID=
this.Im();if(!!ID)ID.AUa(null,null,this,this.AK1);}if((Vd&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Vd=false;MV=true;}if(!!BN&&!(this.Bp&(4096<<BN.II)))return this;
if(!!D4&&!(this.Bp&(4096<<D4.II)))return this;if(MV&&!(this.Bp&16777216))return this;
if(((AaF||AzA)||Vd)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MV
)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215))this.Bp=0;if(!!BN){this.Down=
AaF||Vd;this.YC=this.AQ3(BN.H0);this.NR=BN.NR;this.H0=BN.H0;this.DG=Cc;this.Js=BN.
Js;this.N6=BN.N6;this.NF=BN.NF;this.II=BN.II;this.Bs=BN.Bs;if(BN.Down&&!BN.Js)AKe=
false;}if(!!D4){this.Down=true;this.YC=this.AQ3(D4.H0);this.NR=D4.NR;this.H0=D4.
H0;this.DG=D4.DG;this.Js=D4.Js;this.N6=D4.N6;this.II=D4.II;this.NF=false;this.Bs=
D4.Bs;}var A1C=this.Down;if(!!D4)(B=this.AR9)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Js)(B=this.BL)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Js>0))(B=this.D1)?B[1].call(B[0],this):null;if((this.Down&&this.YC)&&!AKe){
this.A1I=true;(B=this.Av4)?B[1].call(B[0],this):null;}if(this.A1I&&(((A1C&&!this.
YC)&&AKe)||((!A1C&&this.YC)&&AKe))){this.A1I=false;(B=this.AED)?B[1].call(B[0],this
):null;}if(!!BN&&!A1C)(B=this.Ln)?B[1].call(B[0],this):null;if(!!this.Afe){var AdC=
0x0;if(((((this.Afe&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Js>=1000))AdC=0x10;if((((
this.Afe&0x1)===0x1)&&!!D4)&&((D4.LT[1]-D4.AgZ[1])<=-this.Axp))AdC=0x1;if((((this.
Afe&0x2)===0x2)&&!!D4)&&((D4.LT[1]-D4.AgZ[1])>=this.Axp))AdC=0x2;if((((this.Afe&
0x4)===0x4)&&!!D4)&&((D4.LT[0]-D4.AgZ[0])<=-this.Axp))AdC=0x4;if((((this.Afe&0x8
)===0x8)&&!!D4)&&((D4.LT[0]-D4.AgZ[0])>=this.Axp))AdC=0x8;if(!!AdC){var ID=this.
Im();if(!!ID){this.AK1=AdC;ID.AUa(null,this,this,AdC);}}}return this;},Yd:function(
Da,BF,Od,Aaf,Ac3,Ac2){var B;if(!!Aaf&&(Aaf!==this))return null;if((Od<1)||(Od>this.
A7q))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BF)))return null;if(!!(Ac2&this.Afe))return null;if(this.Bi0()){var Az=
A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qh=A.aaI(Da);
var Fv=Cc;if(Qh[0]<Az[0])Fv=[Az[0]-Qh[0],Fv[1]];if(Qh[0]>=Az[2])Fv=[(Az[2]-Qh[0]
)-1,Fv[1]];if(Qh[1]<Az[1])Fv=[Fv[0],Az[1]-Qh[1]];if(Qh[1]>=Az[3])Fv=[Fv[0],(Az[3
]-Qh[1])-1];return A._NewObject(C.AuS,0).Initialize(this,Fv);}}else{var HB=A.abi(
9,A.wf,null);var O;HB.Set(0,A.aaI(Da));HB.Set(1,HB.Get(0));HB.Set(2,HB.Get(0));HB.
Set(3,HB.Get(0));HB.Set(4,HB.Get(0));HB.Set(1,[Da[0],HB.Get(1)[1]]);HB.Set(2,[HB.
Get(2)[0],Da[1]]);HB.Set(3,[Da[2],HB.Get(3)[1]]);HB.Set(4,[HB.Get(4)[0],Da[3]]);
HB.Set(5,Da.slice(0,2));HB.Set(6,[Da[2],Da[1]]);HB.Set(7,[Da[0],Da[3]]);HB.Set(8
,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.AQ3(HB.Get(O)))return A._NewObject(C.AuS
,0).Initialize(this,A.abe(HB.Get(O),HB.Get(0)));}return null;},Bm9:function(E){if(
E<1)E=1;this.Axp=E;},AFl:function(E){if(E<1)E=1;this.A7q=E;},Ar:function(E){if(E
)this.Cr(0x100000,0x0);else this.Cr(0x0,0x100000);},_Init:function(aArg){C.Zy._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
Zy._Mark.call(this,D);if((B=this.AR9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AED)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av4)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H9={timer:null,AKC:null,At5:null,AFX:null,Zi:null,SJ:null,Bp:0,AJd:0,Adl:5000
,ApU:0,AKd:A.wf,Ao8:0,AfL:0,EY:0,Amd:0,Auh:0,Ao7:0,AfK:0,EX:0,Amc:0,Ama:0,NR:A.wf
,A5F:A.wf,F0:A.wf,Gn:A.wf,DG:A.wf,WN:A.wf,A6m:0.5,A_X:true,AGE:true,ZJ:false,XD:
false,XE:false,AoR:false,AAc:0,Kn:function(CY,aClip,aOffset,Cj,aBlend){},G3:function(
CN){var B;var BN=(C.Aec.isPrototypeOf(CN)?CN:null);var D4=(C.AqD.isPrototypeOf(CN
)?CN:null);var Iy=(C.AuR.isPrototypeOf(CN)?CN:null);var AaF;var Vd;var ABd;var MV;
var AzA;AaF=(!!BN&&BN.Down)&&!BN.Js;Vd=(!!BN&&BN.Down)&&(BN.Js>0);ABd=(!!BN&&BN.
Down)&&(BN.Js>this.AAc);MV=!!BN&&!BN.Down;AzA=!!D4;if(AaF)this.AAc=((B=(BN.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaF){var ApA=0;var Adi;this.Bp=this.Bp|(1<<BN.
II);for(Adi=this.Bp&4095;Adi>0;Adi=Adi>>1)if(!!(Adi&1))ApA=ApA+1;if(ApA===1)this.
Bp=(this.Bp|16777216)|(4096<<BN.II);}if(MV&&(this.Bp<16777216)){var ID=this.Im();
var JD=null;if(!!ID){var A34=(!!this.AJ?this.AJ:this.Ab);var A1w=(!!ID.JE?ID.JE.
C0:null);JD=ID.Yd(A.abh(Z9,BN.LT),BN.II,BN.N6,A1w,A34,0x0);}if(!!JD){var O;for(O=
0;O<10;O++)if(!!(this.Bp&(1<<O)))JD.Ci.G3(A._NewObject(C.Aec,0).InitializeDown(O
,BN.H0,BN.N6,Cc,true,BN.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JD.Ci.G3(A._NewObject(
C.Aec,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N6,Cc,false,BN.LT,BN.LT));}}if(MV)this.
Bp=(this.Bp&~(1<<BN.II))|33554432;if(ABd&&(this.Bp<16777216))this.Bp=this.Bp|67108864;
if(MV&&BN.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Vd&&(
this.Bp>=67108864)){var ID=this.Im();if(!!ID)ID.AUa(null,null,this,0x0);}if((Vd&&
!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vd=false;MV=true;}if(!!BN&&!(this.Bp&(
4096<<BN.II)))return this;if(!!D4&&!(this.Bp&(4096<<D4.II)))return this;if(MV&&!(
this.Bp&16777216))return this;if(((AaF||AzA)||Vd)&&((this.Bp<16777216)||(this.Bp>=
33554432)))return this;if(MV)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215
))this.Bp=0;if(!!Iy&&(Iy.AxH===this))return null;if((!!Iy&&Iy.Down)&&(this.AoR||
!this.ZJ))return null;if((!!Iy&&Iy.Down)&&!A.wa(this.M,this.Ab.A7m(Iy.LT)))return null;
if((!!Iy&&!Iy.Down)&&(!this.AoR||(this.AJd!==Iy.II)))return null;if((!BN&&!D4)&&
!Iy)return null;if(!!BN){this.AoR=AaF||Vd;this.AJd=BN.II;this.NR=BN.NR;}if(!!D4)
this.AJd=D4.II;if(!!Iy){this.AoR=Iy.Down;this.AJd=Iy.II;}if(!!Iy&&Iy.Down){this.
A35();this.EX=(((Iy.Bs-this.Ama)*0.001)*this.AfK)+this.EX;this.EY=(((Iy.Bs-this.
Auh)*0.001)*this.AfL)+this.EY;if(this.XD)this.EX=0;if(this.XE)this.EY=0;this.AfK=
0;this.AfL=0;this.XD=false;this.XE=false;this.AKd=this.DG;this.ApU=Iy.Bs;return this;
}if(AaF){this.A35();this.EX=(((BN.Bs-this.Ama)*0.001)*this.AfK)+this.EX;this.EY=(((
BN.Bs-this.Auh)*0.001)*this.AfL)+this.EY;if(this.XD||!this.ZJ)this.EX=0;if(this.
XE||!this.ZJ)this.EY=0;this.AfK=0;this.AfL=0;this.XD=false;this.XE=false;if(!this.
ZJ){this.ZJ=true;(B=this.SJ)?B[1].call(B[0],this):null;(B=this.AKC)?B[1].call(B[
0],this):null;}this.AKd=this.DG;this.ApU=BN.Bs;}if(!!D4){var Hb=A.abe(D4.H0,D4.NR
);var CD=this.DG;if(this.AGE)CD=[this.AKd[0]+Hb[0],CD[1]];CD=[CD[0],this.AKd[1]+
Hb[1]];if(this.A_X){if(CD[0]<this.Gn[0])CD=[this.Gn[0]+(((CD[0]-this.Gn[0])/2)|0
),CD[1]];else if(CD[0]>this.F0[0])CD=[this.F0[0]+(((CD[0]-this.F0[0])/2)|0),CD[1
]];if(CD[1]<this.Gn[1])CD=[CD[0],this.Gn[1]+(((CD[1]-this.Gn[1])/2)|0)];else if(
CD[1]>this.F0[1])CD=[CD[0],this.F0[1]+(((CD[1]-this.F0[1])/2)|0)];}else{if(CD[0]<
this.Gn[0])CD=[this.Gn[0],CD[1]];else if(CD[0]>this.F0[0])CD=[this.F0[0],CD[1]];
if(CD[1]<this.Gn[1])CD=[CD[0],this.Gn[1]];else if(CD[1]>this.F0[1])CD=[CD[0],this.
F0[1]];}if(!A.aaX(CD,this.DG)){this.A5F=A.abe(CD,this.DG);this.DG=CD;(B=this.At5
)?B[1].call(B[0],this):null;(B=this.AFX)?B[1].call(B[0],this):null;}}if((!!Iy&&!
Iy.Down)&&((Iy.Bs-this.ApU)>=200)){this.EX=0;this.EY=0;}if(Vd&&((BN.Bs-this.ApU)>=
200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApU)){var Hb=D4.DG;var Bds=1000/(
D4.Bs-this.ApU);var AiJ=0;var AiK;if(this.AGE)AiJ=Hb[0]*Bds;AiK=Hb[1]*Bds;if((AiJ
*this.EX)<0)this.EX=0;if((AiK*this.EY)<0)this.EY=0;this.EX=(this.EX+AiJ)*0.5;this.
EY=(this.EY+AiK)*0.5;this.ApU=D4.Bs;}if(!MV&&!Iy)return this;if(!!BN&&BN.NF){this.
EX=0;this.EY=0;}if((this.DG[0]<=this.Gn[0])||(this.DG[0]>=this.F0[0]))this.EX=0;
else if(!this.EX){var EQ=this.DG[0];var Fi=this.Gn[0];var EI=this.F0[0];if(EQ<Fi
)EI=this.Gn[0];else if(EQ>EI)Fi=this.F0[0];else if(this.WN[0]<=1){Fi=EQ;EI=EQ;}else{
var Adp=(EI-EQ)%this.WN[0];EI=(EQ-this.WN[0])+Adp;Fi=EQ+Adp;if(EI<this.Gn[0])EI=
this.Gn[0];if(Fi>this.F0[0])Fi=this.F0[0];}if((Fi-EQ)<=(EQ-EI))EQ=Fi;else EQ=EI;
if(EQ!==this.DG[0]){var Jl=EQ-this.DG[0];if(Jl>0)this.EX=Math.sqrt((Jl*2)*this.Adl
)+20;if(Jl<0)this.EX=-Math.sqrt((-Jl*2)*this.Adl)-20;this.AfK=(400-(this.EX*this.
EX))/(2*Jl);this.Ao7=EQ;}}else{var BBM=this.EX*this.EX;var Jl=BBM/(2*this.Adl);var
EQ=this.DG[0];if(this.EX>0)EQ=EQ+(Jl|0);if(this.EX<0)EQ=EQ-(Jl|0);if(EQ>this.F0[
0])EQ=this.F0[0];else if(EQ<this.Gn[0])EQ=this.Gn[0];var Bf_=EQ;var Fi=this.Gn[0
];var EI=this.F0[0];if(EQ<Fi)EI=this.Gn[0];else if(EQ>EI)Fi=this.F0[0];else if(this.
WN[0]<=1){Fi=EQ;EI=EQ;}else{var Adp=(EI-EQ)%this.WN[0];EI=(EQ-this.WN[0])+Adp;Fi=
EQ+Adp;if(EI<this.Gn[0])EI=this.Gn[0];if(Fi>this.F0[0])Fi=this.F0[0];}if(this.EX>
0){if(EI<=this.DG[0])EQ=Fi;else if((EQ-EI)<(Fi-EQ))EQ=EI;else EQ=Fi;}else if(Fi>=
this.DG[0])EQ=EI;else if((EQ-EI)>(Fi-EQ))EQ=Fi;else EQ=EI;if(EQ!==this.DG[0]){Jl=
EQ-this.DG[0];if(EQ!==Bf_){var Ai5=EQ-Bf_;if(Ai5>0)this.EX=this.EX+Math.sqrt((Ai5
*2)*this.Adl);if(Ai5<0)this.EX=this.EX-Math.sqrt((-Ai5*2)*this.Adl);}if(this.EX>
0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfK=(400-(this.EX*this.
EX))/(2*Jl);this.Ao7=EQ;}else this.EX=0;}if((this.DG[1]<=this.Gn[1])||(this.DG[1
]>=this.F0[1]))this.EY=0;else if(!this.EY){var ER=this.DG[1];var Fi=this.Gn[1];var
EI=this.F0[1];if(ER<Fi)EI=this.Gn[1];else if(ER>EI)Fi=this.F0[1];else if(this.WN[
1]<=1){Fi=ER;EI=ER;}else{var Adp=(EI-ER)%this.WN[1];EI=(ER-this.WN[1])+Adp;Fi=ER+
Adp;if(EI<this.Gn[1])EI=this.Gn[1];if(Fi>this.F0[1])Fi=this.F0[1];}if((Fi-ER)<=(
ER-EI))ER=Fi;else ER=EI;if(ER!==this.DG[1]){var Jl=ER-this.DG[1];if(Jl>0)this.EY=
Math.sqrt((Jl*2)*this.Adl)+20;if(Jl<0)this.EY=-Math.sqrt((-Jl*2)*this.Adl)-20;this.
AfL=(400-(this.EY*this.EY))/(2*Jl);this.Ao8=ER;}}else{var BBN=this.EY*this.EY;var
Jl=BBN/(2*this.Adl);var ER=this.DG[1];if(this.EY>0)ER=ER+(Jl|0);if(this.EY<0)ER=
ER-(Jl|0);if(ER>this.F0[1])ER=this.F0[1];else if(ER<this.Gn[1])ER=this.Gn[1];var
Bf$=ER;var Fi=this.Gn[1];var EI=this.F0[1];if(ER<Fi)EI=this.Gn[1];else if(ER>EI)
Fi=this.F0[1];else if(this.WN[1]<=1){Fi=ER;EI=ER;}else{var Adp=(EI-ER)%this.WN[1
];EI=(ER-this.WN[1])+Adp;Fi=ER+Adp;if(EI<this.Gn[1])EI=this.Gn[1];if(Fi>this.F0[
1])Fi=this.F0[1];}if(this.EY>0){if(EI<=this.DG[1])ER=Fi;else if((ER-EI)<(Fi-ER))
ER=EI;else ER=Fi;}else if(Fi>=this.DG[1])ER=EI;else if((ER-EI)>(Fi-ER))ER=Fi;else
ER=EI;if(ER!==this.DG[1]){Jl=ER-this.DG[1];if(ER!==Bf$){var Ai5=ER-Bf$;if(Ai5>0)
this.EY=this.EY+Math.sqrt((Ai5*2)*this.Adl);if(Ai5<0)this.EY=this.EY-Math.sqrt((-
Ai5*2)*this.Adl);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.EY=this.EY-20;
this.AfL=(400-(this.EY*this.EY))/(2*Jl);this.Ao8=ER;}else this.EY=0;}if(!!BN)this.
Ama=BN.Bs;if(!!Iy)this.Ama=Iy.Bs;this.Auh=this.Ama;this.Amc=this.DG[0];this.Amd=
this.DG[1];this.BBO();return this;},Yd:function(Da,BF,Od,Aaf,Ac3,Ac2){var B;if(!
!Aaf&&(Aaf!==this))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216
)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGE&&!!(Ac2&0xC))return null;var Az=
A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qh=A.aaI(Da);var Fv=Cc;
if(Qh[0]<Az[0])Fv=[Az[0]-Qh[0],Fv[1]];if(Qh[0]>=Az[2])Fv=[(Az[2]-Qh[0])-1,Fv[1]];
if(Qh[1]<Az[1])Fv=[Fv[0],Az[1]-Qh[1]];if(Qh[1]>=Az[3])Fv=[Fv[0],(Az[3]-Qh[1])-1];
return A._NewObject(C.AuS,0).Initialize(this,Fv);}return null;},A35:function(){if(
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},BBO:function(
){this.timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Me],this.timer,0);},Me:
function(G){var B;if(!this.timer)return;var Aum=(this.timer.Bs-this.Ama)*0.001;var
Aun=(this.timer.Bs-this.Auh)*0.001;var BBZ=Aum*Aum;var BB0=Aun*Aun;var AiJ=(this.
AfK*Aum)+this.EX;var AiK=(this.AfL*Aun)+this.EY;var CD=[((((this.AfK*0.5)*BBZ)+(
this.EX*Aum))+this.Amc)|0,((((this.AfL*0.5)*BB0)+(this.EY*Aun))+this.Amd)|0];if(
this.XD&&(Aum>=0.5)){CD=[this.Ao7,CD[1]];this.EX=0;this.AfK=0;this.Amc=CD[0];this.
XD=false;}else if(this.XD){var LJ=1-Math.pow(1-(Aum/0.5),5);CD=[(this.Amc+((this.
Ao7-this.Amc)*LJ))|0,CD[1]];}if(this.XE&&(Aun>=0.5)){CD=[CD[0],this.Ao8];this.EY=
0;this.AfL=0;this.Amd=CD[1];this.XE=false;}else if(this.XE){var LJ=1-Math.pow(1-(
Aun/0.5),5);CD=[CD[0],(this.Amd+((this.Ao8-this.Amd)*LJ))|0];}if(((this.EX>0)&&(
AiJ<0))||((this.EX<0)&&(AiJ>0))){AiJ=0;CD=[this.DG[0],CD[1]];}if(((this.EY>0)&&(
AiK<0))||((this.EY<0)&&(AiK>0))){AiK=0;CD=[CD[0],this.DG[1]];}if(!this.XD&&(CD[0
]<this.Gn[0])){this.Amc=CD[0];this.Ao7=this.Gn[0];this.Ama=this.timer.Bs;this.XD=
true;}else if(!this.XD&&(CD[0]>this.F0[0])){this.Amc=CD[0];this.Ao7=this.F0[0];this.
Ama=this.timer.Bs;this.XD=true;}if(!this.XE&&(CD[1]<this.Gn[1])){this.Amd=CD[1];
this.Ao8=this.Gn[1];this.Auh=this.timer.Bs;this.XE=true;}else if(!this.XE&&(CD[1
]>this.F0[1])){this.Amd=CD[1];this.Ao8=this.F0[1];this.Auh=this.timer.Bs;this.XE=
true;}if(((!this.XD&&!!this.EX)&&(AiJ>-20))&&(AiJ<20)){CD=[this.Ao7,CD[1]];this.
EX=0;this.AfK=0;this.Amc=CD[0];}if(((!this.XE&&!!this.EY)&&(AiK>-20))&&(AiK<20)){
CD=[CD[0],this.Ao8];this.EY=0;this.AfL=0;this.Amd=CD[1];}if(!A.aaX(CD,this.DG)){
this.A5F=A.abe(CD,this.DG);this.DG=CD;(B=this.At5)?B[1].call(B[0],this):null;(B=
this.AFX)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XD)&&!this.
XE){this.A35();this.ZJ=false;(B=this.Zi)?B[1].call(B[0],this):null;}},ATn:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WN=E;},ASV:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6m)return;this.A6m=E;if(E<(1e-007))E=1e-007;this.Adl=
E*10000;},_Init:function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.H9;this.
U=0x10011B;},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKC)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFX
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zi)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ah:null,Ln:null,BL:null,D1:null,ApP:
0,Bs:0,A_S:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Acf:false,NH:false,Init:function(
aArg){var B;var C0=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C0)throw new Error(Afz
);this.Ah=C0.AKh;C0.AKh=this;},G3:function(CN){var B;if(!!CN&&CN.Bjg(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_S=this.ApP;this.Acf=this.ApP>0;if(this.Acf)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NH)this.ApP=this.
ApP+1;return!this.NH;}if(!CN.Down){this.Acf=this.ApP>1;this.A_S=this.ApP-1;this.
ApP=0;(B=this.Ln)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BK;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuS={Ci:null,AuU:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ci=Ag;this.DG=
aOffset;this.AuU=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuS;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ci)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7x={Ah:null,C0:null,_Init:
function(aArg){this.__proto__=C.A7x;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arf={Ny:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arf;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ny)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AD0={AiR:A.wf,AiQ:A.wf,_Init:function(aArg
){C.Arf._Init.call(this,aArg);this.__proto__=C.AD0;},_className:"Core::LayoutLineContext"
};C.AD1={AAL:A.wf,AAK:A.wf,AiR:A.wf,AiQ:A.wf,_Init:function(aArg){C.Arf._Init.call(
this,aArg);this.__proto__=C.AD1;},_className:"Core::LayoutQuadContext"};C.ANR={C0:
null,Ah:null,RB:null,RK:null,Mc:null,ApL:null,_Init:function(aArg){this.__proto__=
C.ANR;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mc)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApL)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUR={FP:null,B8:null,B7:null,Bdz:false,
Byq:function(){if(!this.FP)return;var Pj=this.FP;this.FP.Pe=null;this.FP=null;A.
pe([this,this.A3d],this);Pj.A7Y(this);},BAc:function(G){if(!!this.FP)return;if(!
this.B7)return;this.FP=this.B7;this.B7=this.B7.Ah;if(!!this.B7)this.B7.AJ=null;else
this.B8=null;this.FP.Ah=null;this.Bdz=true;this.FP.SJ(this);this.Bdz=false;},BAy:
function(G){A.pe([this,this.BAc],this);},BAx:function(G){A.pe([this,this.BAy],this
);},A3d:function(G){A.pe([this,this.BAx],this);},Bhk:function(Jh){if(!Jh||!Jh.Pe
)return;if(Jh.Pe!==this)throw new Error(Z_);var BgD=false;if(this.FP===Jh){this.
FP=null;BgD=true;A.pe([this,this.A3d],this);}else{if(!!Jh.Ah)Jh.Ah.AJ=Jh.AJ;else
this.B8=Jh.AJ;if(!!Jh.AJ)Jh.AJ.Ah=Jh.Ah;else this.B7=Jh.Ah;Jh.AJ=null;Jh.Ah=null;
}Jh.Pe=null;if(BgD)Jh.A7X(this);},A_0:function(Jh,A01){if(!Jh)return;if(!!Jh.Pe)
throw new Error(W9);Jh.Pe=this;if(A01){Jh.Ah=this.B7;if(!!this.B7)this.B7.AJ=Jh;
else this.B8=Jh;this.B7=Jh;}else{Jh.AJ=this.B8;if(!!this.B8)this.B8.Ah=Jh;else this.
B7=Jh;this.B8=Jh;}if(!this.FP)A.pe([this,this.A3d],this);},_Init:function(aArg){
this.__proto__=C.AUR;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkV={Pe:null,AJ:null,Ah:
null,A7Y:function(Atp){},A7X:function(Atp){},SJ:function(Atp){this.Amw();},Mm:function(
){if(!!this.Pe&&(this.Pe.FP===this))this.Pe.Byq();},Amw:function(){if(!!this.Pe)
this.Pe.Bhk(this);},AQZ:function(){return!!this.Pe&&(this.Pe.FP===this);},_Init:
function(aArg){this.__proto__=C.AkV;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pe)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUP={As:null,Auj:
null,SJ:function(Atp){this.Auj.As=this.As;A.we(this.Auj,0);A.pe([this,this.Bz$],
this);},Bz$:function(G){this.Auj.As=null;this.Auj=null;this.As=null;this.Mm();},
_Init:function(aArg){C.AkV._Init.call(this,aArg);this.__proto__=C.AUP;},_Mark:function(
D){var B;C.AkV._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxG={_Init:function(){C.AUR._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahy={resource:null,Lb:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahy;this.Init(aArg);A.h7++;},_Done:function(){this.Lb();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mz:null,timer:null,Bs:0,Period:1000,VE:0,Bw:false,Lb:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKK:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PR:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKK(this.VE,E);},Wz:function(E){if(E<0)E=0;if(E===
this.VE)return;this.VE=E;if(this.Bw)this.AKK(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKK(this.VE,this.Period);else this.AKK(0,
0);this.Bs=this.Avk();},Avk:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avk();if(!this.
Period)this.Ar(false);(B=this.Mz)?B[1].call(B[0],this):null;},AxE:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mz)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUj:0,AvY:0
,AjQ:0,GK:0,Hj:0,Year:0,Bc8:function(AfH,A0s){if(A0s)switch(AfH){case 1:return A.
aci.Bjq;case 2:return A.aci.Bih;case 3:return A.aci.BjI;case 4:return A.aci.Bg0;
case 5:return A.aci.BjM;case 6:return A.aci.Bjt;case 7:return A.aci.Bjs;case 8:return A.
aci.Bg2;case 9:return A.aci.Bos;case 10:return A.aci.Bj6;case 11:return A.aci.Bj5;
case 12:return A.aci.BhH;default:return A.jV;}else switch(AfH){case 1:return A.aci.
ADU;case 2:return A.aci.ACE;case 3:return A.aci.AD6;case 4:return A.aci.ABG;case
5:return A.aci.AD8;case 6:return A.aci.ADW;case 7:return A.aci.ADV;case 8:return A.
aci.ABN;case 9:return A.aci.AGs;case 10:return A.aci.AEj;case 11:return A.aci.AEh;
case 12:return A.aci.ACp;default:return A.jV;}},Bc6:function(BbC,A0s){if(A0s)switch(
BbC){case 1:return A.aci.BjR;case 2:return A.aci.BpN;case 3:return A.aci.Bqt;case
4:return A.aci.Bpy;case 5:return A.aci.Biu;case 6:return A.aci.Boj;case 0:return A.
aci.Bpl;default:return A.jV;}else switch(BbC){case 1:return A.aci.BjQ;case 2:return A.
aci.BpM;case 3:return A.aci.Bqs;case 4:return A.aci.Bpx;case 5:return A.aci.Bit;
case 6:return A.aci.Boi;case 0:return A.aci.Bpk;default:return A.jV;}},Bc5:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JQ:function(){var d=this.GK;var K3=this.Hj;var Dg=this.Year-((
K3<=2)?1:0);var AzB=(((Dg>=0)?Dg:Dg-399)/400)|0;var Amk=Dg-(AzB*400);var Vb=(((((
153*(K3+((K3>2)?-3:9)))+2)/5)|0)+d)-1;var Ao4=(((Amk*365)+((Amk/4)|0))-((Amk/100
)|0))+Vb;var Qj=((AzB*146097)+Ao4)-719468;return(((Qj*86400)+(this.AjQ*3600))+(this.
AvY*60))+this.AUj;},AFF:function(E){var B;E+=62162035200;if(E<0)E=0;var Vp=Math.
trunc(E/86400)|0;var AzB=(((Vp>=0)?Vp:Vp-146096)/146097)|0;var Ao4=Vp-(AzB*146097
);var Amk=((((Ao4-((Ao4/1460)|0))+((Ao4/36524)|0))-((Ao4/146096)|0))/365)|0;var Dg=
Amk+(AzB*400);var Vb=Ao4-(((365*Amk)+((Amk/4)|0))-((Amk/100)|0));var A2B=(((5*Vb
)+2)/153)|0;var d=(Vb-((((153*A2B)+2)/5)|0))+1;var K3=A2B+((A2B<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K3<=2)?1:0);this.Uo(K3);this.Lp(d);this.Anw(BI+((BI<0)?24:0));this.Anz(O+((O<0)?
60:0));this.AnC(s+((s<0)?60:0));},Zj:function(){if(this.Hj===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hj===4)||(this.Hj===6))||(this.Hj===9))||(this.Hj===11))return 30;else return 31;
},Blh:function(){var B;var Vb=this.AbX()-1;var AtG=(6+this.Av_())%7;var Ao6=((371+
AtG)-Vb)%7;if(this.Hj===12){var d=this.GK;if((d===31)&&(AtG<3))return 0;if((d===
30)&&(AtG<2))return 0;if((d===29)&&(AtG<1))return 0;}if(Ao6<=3)Vb+=Ao6;else Vb-=(
7-Ao6);if(Vb<0){var d=this.GK;var K3=this.Hj;this.Year--;this.Lp(31);this.Uo(12);
Vb=this.AbX()-1;AtG=(6+this.Av_())%7;Ao6=((371+AtG)-Vb)%7;if(Ao6<=3)Vb+=Ao6;else
Vb-=Ao6;this.Year++;this.Lp(d);this.Uo(K3);}return(Vb/7)|0;},AbX:function(){var B;
var d=this.GK;var K3=this.Hj;var Dg=this.Year;var Af5=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K3){case 2:d+=31;break;case 3:d+=(59+Af5);break;case 4:
d+=(90+Af5);break;case 5:d+=(120+Af5);break;case 6:d+=(151+Af5);break;case 7:d+=(
181+Af5);break;case 8:d+=(212+Af5);break;case 9:d+=(243+Af5);break;case 10:d+=(273+
Af5);break;case 11:d+=(304+Af5);break;case 12:d+=(334+Af5);break;default:;}return d;
},Av_:function(){var B;var d=this.GK;var K3=this.Hj+((this.Hj>2)?-2:10);var Dg=this.
Year-((this.Hj<=2)?1:0);var B2=(Dg/100)|0;Dg%=100;d+=((((((((26*K3)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B2/4)|0))-(2*B2));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnC:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUj=E;},Anz:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvY=E;},Anw:function(E){if(E<0)E=0;if(E>23)E=23;this.AjQ=E;},Lp:function(
E){if(E<1)E=1;if(E>31)E=31;this.GK=E;},Uo:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hj=E;},Format:function(Iv){var result=A.jV;var inx=0;while(!!(Iv.charCodeAt(inx)||
0))if((Iv.charCodeAt(inx)||0)===0x25){var Aaz=1;inx=inx+1;if((Iv.charCodeAt(inx)||
0)===0x23){inx=inx+1;Aaz=0;}switch(Iv.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GK,2*Aaz,10);break;case 0x48:result=result+A.abl(this.AjQ,2*Aaz,10);break;
case 0x49:if(!(this.AjQ%12))result=result+Z$;else result=result+A.abl(this.AjQ%12
,2*Aaz,10);break;case 0x6D:result=result+A.abl(this.Hj,2*Aaz,10);break;case 0x4D:
result=result+A.abl(this.AvY,2*Aaz,10);break;case 0x70:if(this.AjQ<12)result=result+
A.aci.BgJ;else result=result+A.aci.BnH;break;case 0x53:result=result+A.abl(this.
AUj,2*Aaz,10);break;case 0x77:result=result+A.abl(this.Av_(),Aaz,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*Aaz,10);break;case 0x59:result=result+A.abl(
this.Year,4*Aaz,10);break;case 0x25:result=result+W_;break;case 0x6A:result=result+
A.abl(this.AbX(),3*Aaz,10);break;case 0x57:result=result+A.abl(this.Blh(),2*Aaz,
10);break;case 0x61:result=result+this.Bc6(this.Av_(),true);break;case 0x41:result=
result+this.Bc6(this.Av_(),false);break;case 0x62:result=result+this.Bc8(this.Hj
,true);break;case 0x42:result=result+this.Bc8(this.Hj,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iv.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac4,AfH,BwJ,Bw0,Bxf,Bxx){this.Year=Ac4;this.
Uo(AfH);this.Lp(BwJ);this.Anw(Bw0);this.Anz(Bxf);this.AnC(Bxx);return this;},Initialize:
function(Ah8){this.AFF(Ah8);return this;},BhM:function(Ah8){if(!Ah8)return A._NewObject(
C.An0,0).Initialize(this.JQ());return A._NewObject(C.An0,0).Initialize(this.JQ()-
Ah8.JQ());},BoX:function(AyW){if(!AyW)return this;return A._NewObject(C.Bs,0).Initialize(
this.JQ()-AyW.JQ());},J:function(AyW){if(!AyW)return this;return A._NewObject(C.
Bs,0).Initialize(this.JQ()+AyW.JQ());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An0={AGp:0,AD$:0,ADn:0,Kl:0,JQ:function(
){return(((this.Kl*86400)+(this.ADn*3600))+(this.AD$*60))+this.AGp;},AFF:function(
E){var AKY=1;this.Kl=Math.trunc(E/86400)|0;if(E<0){E=-E;AKY=-1;}this.ADn=AKY*(Math.
trunc(E/3600)%24|0);this.AD$=AKY*(Math.trunc(E/60)%60|0);this.AGp=AKY*(E%60|0);}
,Initialize2:function(BwK,Bw1,Bxg,BxA){this.Kl=BwK;this.ADn=Bw1;this.AD$=Bxg;this.
AGp=BxA;return this;},Initialize:function(Ah8){this.AFF(Ah8);return this;},_Init:
function(aArg){this.__proto__=C.An0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$l={As:null,Pe:null,Trigger:function(BwE,A01){var Pj=A._NewObject(C.AUP,0);
Pj.Auj=this;Pj.As=BwE;this.Pe.A_0(Pj,A01);},_Init:function(aArg){this.__proto__=
C.A$l;this.Pe=A._GetAutoObject(C.AxG);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$m={JL:null,Event:null,AR_:null,AtY:function(G){var B;if(
!this.Event)return;this.JL=this.Event.As;(B=this.AR_)?B[1].call(B[0],this):null;
this.JL=null;},BlV:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtY],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtY],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$m;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFZ={Dt:0x1,BCI:0x2,BDR:0x4,BFO:0x8,Bw:0x10,H8:0x20
,BDS:0x40,BEt:0x80,BDN:0x100,BD9:0x200,BDB:0x400,BE8:0x800,Bl:0x1000,BFW:0x2000,
BEQ:0x4000,BER:0x8000,Abf:0x10000,BEP:0x20000,BFj:0x40000,BDs:0x80000,BEZ:0x100000
,BDm:0x200000};C.PL={BE_:0x1,BE$:0x2,BCE:0x4,BCF:0x8,BCG:0x10,BCD:0x20};C.AgX={None:
0,BFK:1,BC1:2,BEc:3,BFc:4,BFL:5,BFM:6,BC2:7,BC3:8,BEe:9,BEd:10,BFe:11,BFd:12};C.
AuW={None:0,BFI:1,Left:2,BCZ:3,ZO:4,A5c:5,BFJ:6,Right:7,BC0:8};C.KeyCode={NoKey:
0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:
11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:
21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:
32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:
40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48
,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,
SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BFa={BF5:0x1,BF2:0x2,BF3:0x4,BF4:
0x8,BEg:0x10,BDU:0x20};
C._Init=function(){C.Akd.__proto__=C.Ci;C.Zy.__proto__=C.Ci;C.Et.__proto__=C.Ci;C.
P.__proto__=C.Et;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARf.__proto__=
C.Event;C.AuR.__proto__=C.Event;C.Aec.__proto__=C.Event;C.AqD.__proto__=C.Event;
C.Y.__proto__=C.Et;C.CM.__proto__=C.P;C.Dz.__proto__=C.P;C.Bn.__proto__=C.Zy;C.H9.
__proto__=C.Et;C.AD0.__proto__=C.Arf;C.AD1.__proto__=C.Arf;C.AUP.__proto__=C.AkV;
};C._ReInit=function(){var B;if((B=C.AxG._this))B._ReInit(),C.AxG._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxG._this)&&(B._cycle!=D))B._Done(C.AxG._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */