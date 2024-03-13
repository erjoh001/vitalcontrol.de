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
var Cc=[0,0];var BF=[0,0,0,0];var E4="The view does not belong to this group";var
Hm=[1000,740];var IQ="The dialog component is already presented";var Ip="The dialog component is actually not presented";
var O2="No fader to perform the fade-in/out operation";var P1="Trying to use the same fader twice";
var P2="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var E$="View is not in this group";var Lu="Sibling view does not belong to the group";
var P3="No view to remove";var JZ="No view to add";var N_="View already in a group";
var P4="Recursive invalidate during active update cycle.";var MF=[-8,-8,9,9];var
S4="No group to end the modal state.";var UO="The group is not modal.";var Z5="No group to obtain the modal state.";
var W1="The group serves already as the \'virtual keyboard\'.";var Iq="The group is already modal.";
var UP="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z6="The method SwitchToDialog() is not available in Core::VerticalList.";
var W2="The method DismissDialog() is not available in Core::VerticalList.";var Z7=
"The method PresentDialog() is not available in Core::VerticalList.";var W3="The method FadeGroup() is not available in Core::VerticalList.";
var Z8="The method RestackBehind() is not available in Core::VerticalList.";var Z9=
"The method RestackTop() is not available in Core::VerticalList.";var UQ="The method Restack() is not available in Core::VerticalList.";
var W4="The method Remove() is not available in Core::VerticalList.";var P5="The method AddBehind() is not available in Core::VerticalList.";
var Z_="The method Add() is not available in Core::VerticalList.";var O3="The Slide Touch Handler:";
var Ri="is already connected with a view.";var W5="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W6=[0,0,170,120];var W7="The method SwitchToDialog() is not available in Core::HorizontalList.";
var W8="The method DismissDialog() is not available in Core::HorizontalList.";var
Z$="The method PresentDialog() is not available in Core::HorizontalList.";var W9=
"The method FadeGroup() is not available in Core::HorizontalList.";var W_="The method RestackBehind() is not available in Core::HorizontalList.";
var S5="The method RestackTop() is not available in Core::HorizontalList.";var UR=
"The method Restack() is not available in Core::HorizontalList.";var US="The method Remove() is not available in Core::HorizontalList.";
var AcN="The method AddBehind() is not available in Core::HorizontalList.";var S6=
"The method Add() is not available in Core::HorizontalList.";var Aaa=[0,0,1,1];var
Afx="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aab="Trying to cancel a task not belonging to this queue!";var W$="Trying to enqueue a task twice!";
var Aac="12";var Aad="%";
C.Ch={Ah:null,AJ:null,Ab:null,Eu:null,U:0x103,JX:0,PH:0x14,AtQ:function(BJ,Ah5){}
,Ar3:function(E){if(this.JX===E)return;this.JX=E;if(!!this.Ab){var Ai4=this.Ah;var
G8=0;while(!!Ai4&&(E>Ai4.JX)){Ai4=Ai4.Ah;G8=G8+1;}Ai4=this.AJ;while(!!Ai4&&(E<Ai4.
JX)){Ai4=Ai4.AJ;G8=G8-1;}if(!!G8)this.Ab.JV(this,G8);}},AZ:function(E){var B;var
G8=E^this.PH;if(!G8)return;this.PH=E;if(!!this.Eu&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JF],this);this.Ab.Bi([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eu&&((this.U&0x400)===0x400)){this.Eu.Nz.U=this.Eu.
Nz.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},Ij:function(
){var B0=this.Ab;while(!!B0){var IA=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IA)return IA;
B0=B0.Ab;}return null;},Kk:function(CZ,aClip,aOffset,Ci,aBlend){},GetClipping:function(
){return this.GetExtent();},GY:function(CN){return null;},Yi:function(Da,BG,Oc,Aal
,Ac3,Ac2){return null;},AuB:function(Da){return Da;},AuL:function(BJ,MJ){return Cc;
},Ank:function(aOffset,Atn){},GetExtent:function(){return BF;},Cy:function(Rp,U1
){var B;if(((this.U&0x200)===0x200))Rp=Rp&~0x400;var A2F=(this.U&~U1)|Rp;var Xt=
A2F^this.U;this.U=A2F;if(!!this.Ab&&!!(Xt&0x14)){var BcV=((this.U&0x14)===0x14);
if(BcV&&!this.Ab.AV)this.Ab.Bb(this);if(!BcV&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACJ(this,0x14));}if(!!this.Ab&&!!(Xt&0x403))this.Ab.Bi(this.GetClipping());if(((
!!this.Eu&&!!this.Ab)&&((A2F&0x400)===0x400))&&((Xt&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}if(!!this.Ab&&((Xt&0x400
)===0x400)){this.Eu=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JF],this);}if(((((Xt&0x100000)===0x100000)&&((U1&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cy(0x0,0x10);if(((((
Xt&0x100000)===0x100000)&&((Rp&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cy(0x10,0x0);if(((((Xt&0x200000)===0x200000)&&((U1&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cy(
0x10,0x0);if((((((Xt&0x200000)===0x200000)&&((Rp&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G9.C1!==this)))
)this.Cy(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ch;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akg={EC:A.wf,Er:A.wf
,AtQ:function(BJ,Ah5){var At=A._NewObject(C.AD2,0);this.Eu=null;At.extent=this.getExtent(
);At.Bd=BJ;At.Nz=Ah5;At.AiQ=this.Er;At.AiR=this.EC;this.Eu=At;},AuL:function(BJ,
MJ){var B;var EW=this.PH;var At=(C.AD2.isPrototypeOf(B=this.Eu)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var J9=[BJ[
2]-BJ[0],BJ[3]-BJ[1]];var BY=x2-x1;var BL=y2-y1;var tmp;if(!MJ){var NC=[(B=At.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NC[0]!==J9[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(!HS&&(Qp||!HT))x1=((
x1*J9[0])/NC[0])|0;if(!HT&&(Qp||!HS)){x2=x2-At.Bd[0];x2=((x2*J9[0])/NC[0])|0;x2=
x2-J9[0];}else x2=x2-At.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!Qp){if(HS&&!HT)x2=x1+BY;
else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
At.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NC[1]!==J9[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(!HU&&(Qq||!HR))y1=((y1*J9[1])/NC[
1])|0;if(!HR&&(Qq||!HU)){y2=y2-At.Bd[1];y2=((y2*J9[1])/NC[1])|0;y2=y2-J9[1];}else
y2=y2-At.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!Qq){if(HU&&!HR)y2=y1+BL;else if(!HU&&
HR)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-At.Bd[3];y1=y1+
BJ[1];y2=y2+BJ[3];}}else{switch(MJ){case 3:{x1=BJ[0];x2=x1+BY;}break;case 4:{x2=
BJ[2];x1=x2-BY;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[3];y1=y2-BL;
}break;default:;}if((MJ===3)||(MJ===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qq=((EW&0x2)===0x2);if(Qq){y1=BJ[1];y2=BJ[3];}else if(HU&&!HR){y1=
BJ[1];y2=y1+BL;}else if(HR&&!HU){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1
])-BL)/2)|0);y2=y1+BL;}}if((MJ===1)||(MJ===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(Qp){x1=BJ[0];x2=BJ[2];}else if(HS&&!HT
){x1=BJ[0];x2=x1+BY;}else if(HT&&!HS){x2=BJ[2];x1=x2-BY;}else{x1=BJ[0]+((((BJ[2]-
BJ[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BL=y2-y1;if(
At.AiR[0]<At.AiQ[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.AiR[1]<At.AiQ[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Er=[x1,y1];this.EC=[x2,y2];}else{this.DL([x1,y1]);this.DC([x2,y2]);this.
Eu=At;}return[BY,BL];},Ank:function(aOffset,Atn){if(Atn){this.Er=A.abf(this.Er,aOffset
);this.EC=A.abf(this.EC,aOffset);}else{this.DL(A.abf(this.Er,aOffset));this.DC(A.
abf(this.EC,aOffset));}},GetExtent:function(){if(!!this.Eu&&this.Eu.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Er[0];var y1=this.Er[
1];var x2=this.EC[0];var y2=this.EC[1];var BY=x2-x1;var BL=y2-y1;var tmp;if(BY<0
)BY=-BY;if(BL<0)BL=-BL;if(BY>=BL){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BL>=BY){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.
Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},DL:function(
E){var B;if(A.aaX(E,this.Er))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Eu=null;this.Er=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JF],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.
Akg;},_className:"Core::LineView"};C.ZB={Ku:A.wf,Mz:A.wf,EC:A.wf,Er:A.wf,AtQ:function(
BJ,Ah5){var At=A._NewObject(C.AD3,0);this.Eu=null;At.extent=this.GetExtent();At.
Bd=BJ;At.Nz=Ah5;At.AiQ=this.Er;At.AiR=this.EC;At.AAN=this.Mz;At.AAO=this.Ku;this.
Eu=At;},AuL:function(BJ,MJ){var B;var EW=this.PH;var At=(C.AD3.isPrototypeOf(B=this.
Eu)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var J9=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BY=x2-x1;var BL=y2-y1;if(!MJ){var
NC=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NC[0]!==J9[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(!HS&&(
Qp||!HT))x1=((x1*J9[0])/NC[0])|0;if(!HT&&(Qp||!HS)){x2=x2-At.Bd[0];x2=((x2*J9[0]
)/NC[0])|0;x2=x2-J9[0];}else x2=x2-At.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!Qp){if(HS&&
!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-At.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NC[1]!==J9[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(!HU&&(Qq||!HR))y1=((
y1*J9[1])/NC[1])|0;if(!HR&&(Qq||!HU)){y2=y2-At.Bd[1];y2=((y2*J9[1])/NC[1])|0;y2=
y2-J9[1];}else y2=y2-At.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!Qq){if(HU&&!HR)y2=y1+BL;
else if(!HU&&HR)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-
At.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MJ){case 3:{x1=BJ[0];x2=x1+BY;}break;
case 4:{x2=BJ[2];x1=x2-BY;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[
3];y1=y2-BL;}break;default:;}if((MJ===3)||(MJ===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(Qq){y1=BJ[1];y2=BJ[3];}else if(
HU&&!HR){y1=BJ[1];y2=y1+BL;}else if(HR&&!HU){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((
BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MJ===1)||(MJ===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(Qp){x1=BJ[0];x2=BJ[2];}else if(
HS&&!HT){x1=BJ[0];x2=x1+BY;}else if(HT&&!HS){x2=BJ[2];x1=x2-BY;}else{x1=BJ[0]+((((
BJ[2]-BJ[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BL=(
y2-y1)-1;var Aiu=At.extent[0];var Aiw=At.extent[1];var AfW=(At.extent[2]-Aiu)-1;
var AfV=(At.extent[3]-Aiw)-1;if(!AfW)AfW=1;if(!AfV)AfV=1;if(((this.U&0x100)===0x100
)){this.Er=[x1+((((At.AiQ[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiQ[1]-Aiw)*BL)/AfV)|0)];
this.EC=[x1+((((At.AiR[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiR[1]-Aiw)*BL)/AfV)|0)];this.
Mz=[x1+((((At.AAN[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAN[1]-Aiw)*BL)/AfV)|0)];this.Ku=[
x1+((((At.AAO[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAO[1]-Aiw)*BL)/AfV)|0)];}else{this.
DL([x1+((((At.AiQ[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiQ[1]-Aiw)*BL)/AfV)|0)]);this.DC([
x1+((((At.AiR[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiR[1]-Aiw)*BL)/AfV)|0)]);this.Kr([x1+((((
At.AAN[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAN[1]-Aiw)*BL)/AfV)|0)]);this.JR([x1+((((At.
AAO[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAO[1]-Aiw)*BL)/AfV)|0)]);this.Eu=At;}return[BY+
1,BL+1];},Ank:function(aOffset,Atn){if(Atn){this.Er=A.abf(this.Er,aOffset);this.
EC=A.abf(this.EC,aOffset);this.Mz=A.abf(this.Mz,aOffset);this.Ku=A.abf(this.Ku,aOffset
);}else{this.DL(A.abf(this.Er,aOffset));this.DC(A.abf(this.EC,aOffset));this.Kr(
A.abf(this.Mz,aOffset));this.JR(A.abf(this.Ku,aOffset));}},GetExtent:function(){
if(!!this.Eu&&this.Eu.isEmpty)return BF;var x1=this.Er[0];var y1=this.Er[1];var x2=
this.Mz[0];var y2=this.Mz[1];if((((this.Ku[0]!==x1)||(this.EC[1]!==y1))||(this.EC[
0]!==x2))||(this.Ku[1]!==y2)){if(this.EC[0]<x1)x1=this.EC[0];if(this.Mz[0]<x1)x1=
this.Mz[0];if(this.Ku[0]<x1)x1=this.Ku[0];if(this.EC[1]<y1)y1=this.EC[1];if(this.
Mz[1]<y1)y1=this.Mz[1];if(this.Ku[1]<y1)y1=this.Ku[1];if(this.Er[0]>x2)x2=this.Er[
0];if(this.EC[0]>x2)x2=this.EC[0];if(this.Ku[0]>x2)x2=this.Ku[0];if(this.Er[1]>y2
)y2=this.Er[1];if(this.EC[1]>y2)y2=this.EC[1];if(this.Ku[1]>y2)y2=this.Ku[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JR:function(E){var B;if(A.aaX(E,this.Ku))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Eu=null;this.Ku=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},Kr:function(E){var B;if(A.aaX(E,
this.Mz))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping()
);this.Eu=null;this.Mz=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},DC:function(
E){var B;if(A.aaX(E,this.EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(
this.GetClipping());this.Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JF],this);}},DL:function(E){var B;if(A.aaX(E,this.Er))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());this.Eu=null;this.Er=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},AQ7:function(KZ){var Hy=A.abi(4,
A.wf,null);var O=0;var Ic=3;var A2b=false;var A2c=false;Hy.Set(0,this.Er);Hy.Set(
1,this.EC);Hy.Set(2,this.Mz);Hy.Set(3,this.Ku);while(O<4){var BgD=Hy.Get(O)[0];var
ALs=Hy.Get(O)[1];var BCn=Hy.Get(Ic)[0];var A4o=Hy.Get(Ic)[1];if(((ALs>KZ[1])!==(
A4o>KZ[1]))||((ALs<KZ[1])!==(A4o<KZ[1]))){var En=((((BCn-BgD)*(KZ[1]-ALs))/(A4o-
ALs))|0)+BgD;if(KZ[0]>En)A2b=!A2b;if(KZ[0]<En)A2c=!A2c;}Ic=O;O=O+1;}return A2b||
A2c;},Bi0:function(){return((((this.Er[0]===this.Ku[0])&&(this.EC[0]===this.Mz[0
]))&&(this.Er[1]===this.EC[1]))&&(this.Mz[1]===this.Ku[1]))||((((this.Er[0]===this.
EC[0])&&(this.Mz[0]===this.Ku[0]))&&(this.Er[1]===this.Ku[1]))&&(this.EC[1]===this.
Mz[1]));},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.ZB;},
_className:"Core::QuadView"};C.Es={M:A.wg,AtQ:function(BJ,Ah5){var At=A._NewObject(
C.Arh,0);At.extent=this.M;At.Bd=BJ;At.Nz=Ah5;this.Eu=At;},AuL:function(BJ,MJ){var
B;var EW=this.PH;var At=this.Eu;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var J9=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BY=x2-x1;var BL=
y2-y1;if(!MJ){var NC=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];
if(NC[0]!==J9[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1
)===0x1);if(!HS&&(Qp||!HT))x1=((x1*J9[0])/NC[0])|0;if(!HT&&(Qp||!HS)){x2=x2-At.Bd[
0];x2=((x2*J9[0])/NC[0])|0;x2=x2-J9[0];}else x2=x2-At.Bd[2];x1=x1+BJ[0];x2=x2+BJ[
2];if(!Qp){if(HS&&!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-At.Bd[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NC[1]!==J9[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(
!HU&&(Qq||!HR))y1=((y1*J9[1])/NC[1])|0;if(!HR&&(Qq||!HU)){y2=y2-At.Bd[1];y2=((y2
*J9[1])/NC[1])|0;y2=y2-J9[1];}else y2=y2-At.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!Qq
){if(HU&&!HR)y2=y1+BL;else if(!HU&&HR)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-At.Bd[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MJ){case 3:{x1=
BJ[0];x2=x1+BY;}break;case 4:{x2=BJ[2];x1=x2-BY;}break;case 1:{y1=BJ[1];y2=y1+BL;
}break;case 2:{y2=BJ[3];y1=y2-BL;}break;default:;}if((MJ===3)||(MJ===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(Qq){y1=BJ[
1];y2=BJ[3];}else if(HU&&!HR){y1=BJ[1];y2=y1+BL;}else if(HR&&!HU){y2=BJ[3];y1=y2-
BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MJ===1)||(MJ===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(Qp){x1=BJ[
0];x2=BJ[2];}else if(HS&&!HT){x1=BJ[0];x2=x1+BY;}else if(HT&&!HS){x2=BJ[2];x1=x2-
BY;}else{x1=BJ[0]+((((BJ[2]-BJ[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eu=At;}return[x2-x1,y2-y1];},Ank:function(aOffset,Atn){if(Atn)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.GetClipping());this.Eu=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JF],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.
__proto__=C.Es;},_className:"Core::RectView"};C.P={B9:null,B_:null,AKn:null,FA:null
,G9:null,Xu:null,ApQ:null,AV:null,G3:255,AzF:0,AzI:0,AzH:0,AzG:0,Init:function(aArg
){this.An();},Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;Ci=((Ci+1)*this.G3)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FA||(CZ.C1===this))this.BcK(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ci,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ci&0xFF)<<24);this.FA.Update();CZ.A5z(aClip,this.FA,0,A.abh(this.M,aOffset),Cc,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FA)return Az;
Az=[].concat(Az[0]-this.AzG,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzI);Az=A.abN(
Az,Az[2]+this.AzH);Az=[].concat(Az.slice(0,3),Az[3]+this.AzF);if(((this.U&0x80000
)===0x80000)){var Ap3=BF;var X;for(X=this.B9;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap3=
A.wC(Ap3,X.GetClipping());Az=A.wC(Az,A.abh(Ap3,this.M.slice(0,2)));}return Az;},
Yi:function(Da,BG,Oc,Aal,Ac3,Ac2){var B;var X=this.B_;var Apj=null;var AE=BF;var
J_=null;var A2v=!!this.Xu&&(!!this.Xu.FM||!!this.Xu.B9);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac3){X=Ac3;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J_){J_=X.
AJ;while(!!J_&&!((J_.U&0x200)===0x200))J_=J_.AJ;if(!!J_)AE=A.lb(Da,J_.GetExtent(
));else AE=BF;}if(J_===X){J_=null;AE=BF;}if((!!Aal&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.G9.C1===X)&&!A2v))
)){var extent=X.GetExtent();var AJP=Aal;var Ao6=null;if(AJP===X)AJP=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao6=X.Yi(AE
,BG,Oc,AJP,Ac3,Ac2);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aal===
X))Ao6=X.Yi(Da,BG,Oc,AJP,Ac3,Ac2);X=X.AJ;if(!!Ao6){if(!Apj||((Ao6.AuW<Apj.AuW)&&(
Ao6.AuW>=0)))Apj=Ao6;if(!Ao6.AuW)X=null;}}else X=X.AJ;Ac3=null;}return Apj;},AuB:
function(Da){var B;var F;var X=this.B9;var LB=BF;var AAH=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At2=(C.Y.isPrototypeOf(
X)?X:null);LB=A.lb(Da,At2.M);AAH=((At2.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAH){var AE=A.lb(X.GetClipping(),LB);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuB(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuB(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cy:function(Rp,U1){var B;
var Tk=this.U;if(((!!this.Ab&&!!!this.FA)&&((this.U&0x80001)===0x80001))&&((U1&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());C.Es.Cy.call(this,Rp,U1);if((((!!this.
Ab&&!!!this.FA)&&((this.U&0x1)===0x1))&&((Rp&0x80000)===0x80000))&&!((Tk&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());var Xt=this.U^Tk;if(!!this.AV&&((Xt&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cy(0x40,0x0);else this.AV.Cy(0x0
,0x40);}if(!!this.G9&&((Xt&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.G9.C1.
U&0x14)===0x14))this.G9.C1.Cy(0x40,0x0);else this.G9.C1.Cy(0x0,0x40);}if(((Xt&0x10
)===0x10)){var X;for(X=this.B9;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.G9.C1===X)))X.Cy(Rp&0x10,U1&
0x10);}if(!!Xt){this.U=this.U|0x8000;A.pe([this,this.ABl],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlX=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKv=[
E[2]-E[0],E[3]-E[1]];var ApZ=!A.aaX(AlX,AKv);if(ApZ&&!!this.FA){this.FA.ArO(AKv);
A.we(this,0);A.we(this.FA,0);}C.Es.H.call(this,E);if((ApZ&&(AlX[0]>0))&&(AlX[1]>
0)){var Bd=[].concat(Cc,AlX);var X=this.B9;while(!!X){if((!X.Eu&&(X.PH!==0x14))&&
!((X.U&0x400)===0x400))X.AtQ(Bd,null);X=X.Ah;}}if(ApZ){this.U=this.U|0x5000;A.pe([
this,this.ABl],this);}},A3C:function(CN){var BdF=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKn;if(!BdF)return null;while(!!D5&&(!D5.Bw||!D5.GY(BdF)))D5=D5.
Ah;return D5;},BB9:function(G){if(!!this.FA){this.FA.C1=this;var AE=A.abg(this.AuB(
A.abh(this.FA.QI,this.M.slice(0,2))),this.M.slice(0,2));this.FA.Ave(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BcK(this.FA,AE,Cc,255,true);this.FA.
C1=null;}},BcK:function(CZ,aClip,aOffset,Ci,aBlend){var B;var X=this.B9;var LB=BF;
var AAH=true;this.BhX(CZ,aClip,aOffset,Ci,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At2=(C.Y.isPrototypeOf(X)?X:null);AAH=((At2.U&0x1)===0x1);LB=aClip;if(!((
At2.U&0x80000)===0x80000))LB=A.lb(LB,A.abh(At2.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAH){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LB
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kk(CZ,AE,aOffset,Ci,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kk(CZ,AE,aOffset,Ci,aBlend);}}X=X.Ah;}this.Bh0(CZ,aClip,aOffset,Ci,aBlend);},BfC:
function(){var B;var A16=((this.U&0x1000)===0x1000);var AiC=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aav=false;var Adm=BF;var K1=BF;var Aaw=Cc;var AtM=0;var AtN=0;
var AtL=0;var Qi=0;var X=this.B_;var J_=null;var AlP=null;while(!!X){if(((X.U&0x800
)===0x800)){Aav=true;X.U=X.U&~0x800;}if(Aav&&((X.U&0x200)===0x200)){Aav=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgS)X.U=X.U|0x1000;}X=X.AJ;}Aav=false;X=this.B9;
if(A16){this.U=this.U&~0x1000;A16=!((AiC[0]>=AiC[2])||(AiC[1]>=AiC[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlP&&(AtL!==Qi)){var AdK=X;var AKR=0;var AA2=Adm[2]-
Adm[0];var Azf=Adm[3]-Adm[1];var AJE=0;var Ap_=Cc;do if(((AdK.U&0x200)===0x200))
AdK=null;else if(((AdK.U&0x401)===0x401)){Ap_=[(B=AdK.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qi===3)||(Qi===4))AA2=AA2-Ap_[0];if((Qi===1)||(Qi===2))Azf=Azf-Ap_[1];
if(!AlP||((AA2>=0)&&(Azf>=0))){AlP=AdK;AdK=AdK.Ah;if((Qi===3)||(Qi===4)){AA2=AA2-
AtM;if(Ap_[1]>AKR)AKR=Ap_[1];}if((Qi===1)||(Qi===2)){Azf=Azf-AtN;if(Ap_[0]>AJE)AJE=
Ap_[0];}}else AdK=null;}else AdK=AdK.Ah;while(!!AdK);if(!AlP)AlP=J_;K1=Adm;switch(
AtL){case 9:case 11:K1=[].concat(K1.slice(0,3),K1[1]+AKR);break;case 10:case 12:
K1=A.abP(K1,K1[3]-AKR);break;case 5:case 7:K1=A.abN(K1,K1[0]+AJE);break;case 6:case
8:K1=[].concat(K1[2]-AJE,K1.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eu&&(X.Eu.Nz!==J_))X.Eu=null;if((!X.Eu&&Aav)&&((X.PH!==0x14)||!!Qi))X.
AtQ(K1,J_);}if(!!X.Eu){if(A16&&!((X.U&0x400)===0x400))X.AuL(AiC,0);if(Aav&&((X.U&
0x400)===0x400)){var C3=X.AuL(A.abh(K1,Aaw),Qi);if(((X.U&0x1)===0x1)){var Bq=Cc;
switch(Qi){case 3:Bq=[C3[0]+AtM,Bq[1]];break;case 4:Bq=[-C3[0]-AtM,Bq[1]];break;
case 1:Bq=[Bq[0],C3[1]+AtN];break;case 2:Bq=[Bq[0],-C3[1]-AtN];break;default:;}Aaw=
A.abf(Aaw,Bq);}}}if(((X.U&0x200)===0x200)){if(Aav)A.pe(J_.El,J_);Aav=((X.U&0x1000
)===0x1000);J_=(C.Y.isPrototypeOf(X)?X:null);if(Aav){X.U=X.U&~0x1000;AtL=J_.AgS;
Qi=AtL;Adm=A.abh(J_.M,J_.Br);K1=Adm;Aaw=Cc;AtM=J_.Space+J_.AUO;AtN=J_.Space;Aav=
!((Adm[0]>=Adm[2])||(Adm[1]>=Adm[3]));AlP=null;switch(AtL){case 9:case 10:Qi=3;break;
case 11:case 12:Qi=4;break;case 5:case 6:Qi=1;break;case 7:case 8:Qi=2;break;default:;
}}if(Aav)this.Bi(J_.M);}if(X===AlP){switch(AtL){case 9:case 11:Aaw=[0,(Aaw[1]+(K1[
3]-K1[1]))+AtN];break;case 10:case 12:Aaw=[0,(Aaw[1]-(K1[3]-K1[1]))-AtN];break;case
5:case 7:Aaw=[(Aaw[0]+(K1[2]-K1[0]))+AtM,0];break;case 6:case 8:Aaw=[(Aaw[0]-(K1[
2]-K1[0]))-AtM,0];break;default:;}AlP=null;}X=X.Ah;}if(Aav)A.pe(J_.El,J_);this.U=
this.U&~0x2000;this.Bk([AiC[2]-AiC[0],AiC[3]-AiC[1]]);},JF:function(G){A.pe([this
,this.ABl],this);},ABl:function(G){var B;var BCf=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.BfC();}if(((this.U&0x8000)===
0x8000)||BCf){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E4);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cy(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cy(0x60,0x0);else E.Cy(0x20
,0x0);}},BaY:function(Aq){this.Bb(Aq);},ASj:function(){return!!this.FA;},ArH:function(
E){var B;if(!!this.FA===E)return;if(!E){this.FA.AEp=null;this.FA.ArO(Cc);this.FA=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(E){this.
FA=A._NewObject(A.Graphics.Canvas,0);this.FA.ArO([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FA.AEp=[this,this.BB9];}A.we(this,0);},A8p:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cy(0x100000,0x0);else this.Cy(0x0
,0x100000);},Dr:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G3)return;
this.G3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},AZ9:
function(Aq){this.Dr(Aq);},Aj:function(E){if(E)this.Cy(0x400,0x0);else this.Cy(0x0
,0x400);},Bls:function(E){if(E)this.Cy(0x2,0x0);else this.Cy(0x0,0x2);},Fk:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},ExtendClipping:function(AoG,AoH,AoI,AoF){var B;var Ay8=this.M;var Ru=
Ay8;if(AoG<0)AoG=0;if(AoG>255)AoG=255;if(AoH<0)AoH=0;if(AoH>255)AoH=255;if(AoI<0
)AoI=0;if(AoI>255)AoI=255;if(AoF<0)AoF=0;if(AoF>255)AoF=255;Ru=[].concat(Ru[0]-(
Math.max(AoG,this.AzG)&0xFF),Ru.slice(1,4));Ru=A.abN(Ru,Ru[2]+(Math.max(AoH,this.
AzH)&0xFF));Ru=A.abP(Ru,Ru[1]-(Math.max(AoI,this.AzI)&0xFF));Ru=[].concat(Ru.slice(
0,3),Ru[3]+(Math.max(AoF,this.AzF)&0xFF));if(AoG!==this.AzG){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FA)&&!((this.U&0x80000)===0x80000)){var Az=Ru;Az=A.abN(Az
,Ay8[0]);this.Ab.Bi(Az);}this.AzG=AoG&0xFF;}if(AoH!==this.AzH){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FA)&&!((this.U&0x80000)===0x80000)){var Az=Ru;Az=[].
concat(Ay8[2],Az.slice(1,4));this.Ab.Bi(Az);}this.AzH=AoH&0xFF;}if(AoI!==this.AzI
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FA)&&!((this.U&0x80000)===0x80000
)){var Az=Ru;Az=[].concat(Az.slice(0,3),Ay8[1]);this.Ab.Bi(Az);}this.AzI=AoI&0xFF;
}if(AoF!==this.AzF){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FA)&&!((this.
U&0x80000)===0x80000)){var Az=Ru;Az=A.abP(Az,Ay8[3]);this.Ab.Bi(Az);}this.AzF=AoF&
0xFF;}},Bh0:function(CZ,aClip,aOffset,Ci,aBlend){},BhX:function(CZ,aClip,aOffset
,Ci,aBlend){},GetMaximalSize:function(){return Hm;},GetMinimalSize:function(){return Cc;
},AUV:function(Ir,Ob,Xf,S9,S_,Ah6,O7,Ro,Lz,Lx,Ly){var B;if(!this.G9){this.AkL(Ir
,Ob,Xf,S9,S_,null,null,Lz,Lx,Ly);return;}var AlW=this.G9;var JC=AlW.Ah;if(((Ir.U&
0x10000)===0x10000)&&(this.G9.C1!==Ir))throw new Error(IQ);var Ads=A._NewObject(
C.ANU,0);var Rw=AlW.Rw;var RF=null;var Ma=null;if(!!JC){RF=JC.RF;Ma=JC.Ma;}if(!!
JC&&!!AlW.ApP)RF=AlW.ApP;if(!!JC&&!!O7)Ma=O7;if(!!Ah6)Rw=Ah6;if(!Ob)Ob=A._GetAutoObject(
A.acl.AsA);if(!Xf)Xf=Ob;if(!S_)S_=S9;if(!S9)S9=S_;Ads.Rw=Xf;Ads.Ma=S9;Ads.RF=S_;
Ads.ApP=Ro;Ads.C1=Ir;Ads.Ah=this.G9.Ah;this.G9.Ah=null;this.G9=Ads;if(this.AV===
Ir)this.Bb(null);AlW.C1.Cy(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ir.U&0x4)===
0x4))Ir.Cy(0x10040,0x0);else Ir.Cy(0x10000,0x0);if(!!Ma){this.NN(JC.C1,Ma.Ad$(),
null,null,Ly);this.NN(AlW.C1,Rw.R7(),null,null,true);this.NN(Ads.C1,Ob.R8(),Lz,Lx
,true);}else if(!!RF){this.NN(JC.C1,RF.Aea(),null,null,Ly);this.NN(AlW.C1,Rw.R7(
),null,null,true);this.NN(Ads.C1,Ob.R8(),Lz,Lx,true);}else if(!!Rw){this.NN(AlW.
C1,Rw.R7(),null,null,Ly);this.NN(Ads.C1,Ob.R8(),Lz,Lx,true);}else this.NN(Ads.C1
,Ob.R8(),Lz,Lx,Ly);},AqE:function(Ir,Ah6,O7,Ro,Lz,Lx,Ly){var B;if(!this.G9)return;
if(!Ir)return;var KB=this.G9;var JC=this.G9.Ah;var ApV=null;while((!!KB&&(KB.C1!==
Ir))&&!!KB.Ah){ApV=KB;KB=JC;JC=KB.Ah;}if(!KB||(KB.C1!==Ir))throw new Error(Ip);if(
!ApV){this.G9=JC;KB.Ah=null;}else{ApV.Ah=JC;KB.Ah=null;}KB.C1.Cy(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JC)&&!ApV)&&((JC.C1.U&0x200000)===0x200000))JC.C1.Cy(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JC)&&!ApV)&&((JC.C1.U&0x4)===0x4))JC.C1.Cy(
0x40,0x0);var Rw=KB.Rw;var RF=null;var Ma=null;if(!!JC)RF=JC.RF;if(!!JC&&!!KB.ApP
)RF=KB.ApP;if(!!JC&&!!Ro)RF=Ro;if(!!ApV&&!!JC)Ma=JC.Ma;if((!!ApV&&!!JC)&&!!O7)Ma=
O7;if(!!Ah6)Rw=Ah6;if(!!Ma){this.NN(JC.C1,Ma.Ad$(),null,null,Ly);this.NN(KB.C1,Rw.
R7(),Lz,Lx,true);}else if(!!RF){this.NN(JC.C1,RF.Aea(),null,null,Ly);this.NN(KB.
C1,Rw.R7(),Lz,Lx,true);}else this.NN(KB.C1,Rw.R7(),Lz,Lx,Ly);},AkL:function(Ir,Ob
,Xf,S9,S_,O7,Ro,Lz,Lx,Ly){var B;if(!Ir)return;if(!!this.G9&&(this.G9.C1===Ir)){this.
AUV(Ir,Ob,Xf,S9,S_,null,O7,Ro,Lz,Lx,Ly);return;}if(((Ir.U&0x10000)===0x10000))throw new
Error(IQ);var KB=A._NewObject(C.ANU,0);if(!!this.G9&&!this.G9.Ma){if(!Ro)Ro=O7;if(
!O7)O7=Ro;}var Ma=null;if(!!this.G9)Ma=this.G9.Ma;if(!!this.G9&&!!O7)Ma=O7;if(!Ob
)Ob=A._GetAutoObject(A.acl.AsA);if(!Xf)Xf=Ob;if(!S_)S_=S9;if(!S9)S9=S_;KB.Rw=Xf;
KB.Ma=S9;KB.RF=S_;KB.ApP=Ro;if(this.AV===Ir)this.Bb(null);if(!!this.G9&&((this.G9.
C1.U&0x200000)===0x200000))this.G9.C1.Cy(0x0,0x10);if(!!this.G9)this.G9.C1.Cy(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Ir.U&0x4)===0x4))Ir.Cy(0x10040,0x0);else Ir.
Cy(0x10000,0x0);KB.C1=Ir;KB.Ah=this.G9;this.G9=KB;if(!!Ma){this.NN(this.G9.Ah.C1
,Ma.Ad$(),null,null,Ly);this.NN(Ir,Ob.R8(),Lz,Lx,true);}else this.NN(Ir,Ob.R8(),
Lz,Lx,Ly);},A6O:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7q:function(
KZ){var tmp=this;while(!!tmp){KZ=A.abe(KZ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KZ;
},BiW:function(KZ){var tmp=this;while(!!tmp){KZ=A.abf(KZ,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KZ;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var Gz=null;var A2v=!!this.Xu&&(!!this.Xu.FM||!!this.Xu.B9);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.G9&&!A2v)Gz=this.G9.C1.DispatchEvent(CN);if(!Gz&&!!B0)
Gz=B0.DispatchEvent(CN);else if(!Gz&&!!X)Gz=X.GY(CN);if(!Gz)Gz=this.GY(CN);if(!Gz
)Gz=this.A3C(CN);return Gz;},BroadcastEventAtPosition:function(CN,Hw,aFilter){var
B;var X=this.B_;var Gz=null;while(!!X&&!Gz){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hw)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)Gz=B0.
BroadcastEventAtPosition(CN,A.abe(Hw,B0.M.slice(0,2)),aFilter);else Gz=X.GY(CN);
}X=X.AJ;}if(!Gz)Gz=this.GY(CN);return Gz;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B_;var Gz=null;while(!!X&&!Gz){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)Gz=B0.BroadcastEvent(CN,aFilter
);else Gz=X.GY(CN);}X=X.AJ;}if(!Gz)Gz=this.GY(CN);if(!Gz)Gz=this.A3C(CN);return Gz;
},Bk:function(aSize){},Ai:function(Ae){},Bjb:function(){this.U=this.U|0x4000;A.pe([
this,this.ABl],this);},An:function(){this.U=this.U|0x8000;A.pe([this,this.ABl],this
);},Bi:function(Da){var B;var B0=this;while(!!B0&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aas=B0.FA;if(!B0.Ab&&(B0!==this)){B0.Bi(Da);return;}if(!!Aas){var BzW=Aas.
QI;Aas.QI=A.wC(Aas.QI,Da);if(!A.aaY(BzW,Aas.QI)){A.we(B0,0);A.we(Aas,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Da=A.abh(Da,Az.slice(0,2));if(!!B0.FA||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FA){Az=[].concat(Az[0]-B0.AzG,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzI);Az=A.abN(Az,Az[2]+B0.AzH);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzF);}Da=A.lb(Da,Az);}B0=B0.Ab;}},QD:function(Ag,Gw,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agc=A.aaI(Ag.GetExtent());var X=Ag;var A1f=null;var
Bcn=0;var IV=0x10000;var AKN;if(((aFilter&0x10000)===0x10000))IV=0x0;var top=((Gw===
4)||(Gw===1))||(Gw===6);var bottom=((Gw===5)||(Gw===3))||(Gw===8);var left=((Gw===
2)||(Gw===1))||(Gw===3);var right=((Gw===7)||(Gw===6))||(Gw===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B_;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IV||!((B=IV)&&((X.U&B)===B
))))for(AKN=0;AKN<2;AKN++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKN){if((left&&(s[0]>s[1]))&&(Az[2]<Agc[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agc[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agc[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agc[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agc);var
Rr=Bq;if(Rr[0]<0)Rr=[-Rr[0],Rr[1]];if(Rr[1]<0)Rr=[Rr[0],-Rr[1]];if(((((!left||(Bq[
0]<=-Rr[1]))&&(!right||(Bq[0]>=Rr[1])))&&(!top||(Bq[1]<=-Rr[0])))&&(!bottom||(Bq[
1]>=Rr[0])))&&((Rr[0]>0)||(Rr[1]>0))){var Ry=Bq[0];var Rz=Bq[1];var Ji=Math.sqrt((
Ry*Ry)+(Rz*Rz));var AKm=0;if(!left&&!right)AKm=Ji/Rr[1];if(!top&&!bottom)AKm=Ji/
Rr[0];Ji=(Ji*AKm)*AKm;if((Ji<Bcn)||!A1f){Bcn=Ji;A1f=X;}}}}return A1f;},AqL:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;var IV=0x10000;
if(((aFilter&0x10000)===0x10000))IV=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TL:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;
var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACJ:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlU=Ag.Ah;var Al7=Ag.AJ;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;
while(!!AlU||!!Al7){if((!!AlU&&(!aFilter||((B=aFilter)&&((AlU.U&B)===B))))&&(!IV||
!((B=IV)&&((AlU.U&B)===B))))return AlU;if((!!Al7&&(!aFilter||((B=aFilter)&&((Al7.
U&B)===B))))&&(!IV||!((B=IV)&&((Al7.U&B)===B))))return Al7;if(!!AlU)AlU=AlU.Ah;if(
!!Al7)Al7=Al7.AJ;}return null;},Db:function(aFilter){var B;var X=this.B9;var AE=
BF;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IV||!((B=IV)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NN:function(KA,FK,Lz,Lx
,Ly){var B;if(!KA)return;if(!FK)throw new Error(O2);if((!!FK.P||!!FK.Ab)||!!FK.Pg
)throw new Error(P1);if(!!KA.Ab&&(KA.Ab!==this))throw new Error(P2);if(!this.Xu)
this.Xu=A._NewObject(C.AU0,0);FK.Ab=this;FK.P=KA;FK.AKx=Lx;FK.A2X=Lz;if(!!KA.ApQ
)KA.ApQ.Pg.Bn5(KA.ApQ);KA.ApQ=FK;KA.U=KA.U|0x20000;if((Ly&&!!this.Xu.B_)&&!this.
Xu.B_.AQ3())(A.acl.ACE.isPrototypeOf(B=this.Xu.B_)?B:null).A4D(FK);else{var Pg=A.
_NewObject(A.acl.ACE,0);Pg.A4D(FK);this.Xu.A_3(Pg,false);}},Ahw:function(Ag,J3){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(E$);if(!!J3&&(J3.
Ab!==this))throw new Error(Lu);if(Ag.Ah===J3)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B_=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;var Gy=
null;var It=this.B_;var LP=Ag.JX;if(!!J3){Gy=J3;It=J3.AJ;}if(!!Gy&&(LP>Gy.JX))LP=
Gy.JX;if(!!It&&(LP<It.JX))LP=It.JX;if(LP!==Ag.JX){Ag.Ab=null;Ag.Ar3(LP);Ag.Ab=this;
}if(!J3){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.B_;Ag.Ah=null;this.B_=Ag;}else{Ag.
Ah=J3;Ag.AJ=J3.AJ;J3.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B9===J3)this.B9=Ag;if(((
Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},ZE:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(E$);if(!Ag.Ah)return;var It=this.B_;var
LP=Ag.JX;while(!!It&&(It.JX>LP))It=It.AJ;if(((It===Ag)||!It)||(It.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=It;Ag.Ah=It.Ah;It.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping(
));},JV:function(Ag,P$){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(E$);var It=Ag;var Gy=Ag;var LP=Ag.JX;while(((P$>0)&&!!It.Ah)&&(It.Ah.JX<=LP
)){It=It.Ah;P$=P$-1;}while(((P$<0)&&!!Gy.AJ)&&(Gy.AJ.JX>=LP)){Gy=Gy.AJ;P$=P$+1;}
if((It===Ag)&&(Gy===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JF],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;if(It
!==Ag){Ag.Ah=It.Ah;Ag.AJ=It;It.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(Gy!==Ag){Ag.Ah=Gy;
Ag.AJ=Gy.AJ;Gy.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B_=Ag;if(!Ag.AJ)this.
B9=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},HN:function(Ag){var B;if(
!Ag)throw new Error(P3);if(Ag.Ab!==this)throw new Error(E$);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Eu){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JF],this);}Ag.Eu=null;if(this.AV===Ag)this.Bb(this.
ACJ(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag
)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cy(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},AL7:function(Ag,J3
){var B;if(!Ag)throw new Error(JZ);if(!!Ag.Ab)throw new Error(N_);if(!!J3&&(J3.Ab
!==this))throw new Error(Lu);var Gy=null;var It=this.B_;var LP=Ag.JX;if(!!J3){Gy=
J3;It=J3.AJ;}if(!!Gy&&(LP>Gy.JX))LP=Gy.JX;if(!!It&&(LP<It.JX))LP=It.JX;if(LP!==Ag.
JX){Ag.Ab=null;Ag.Ar3(LP);Ag.Ab=this;}if(!J3){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.
B_;this.B_=Ag;}else{Ag.Ah=J3;Ag.AJ=J3.AJ;J3.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B9===J3)this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AON()===Ag))Ag.Cy(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cy(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JF],this);}},J:function(Ag,P$){var B;if(!Ag)throw new Error(
JZ);if(!!Ag.Ab)throw new Error(N_);var Gy=null;var LP=Ag.JX;if(((P$<0)&&!!this.B_
)&&(this.B_.JX>=LP)){Gy=this.B_;P$=P$+1;}while((((P$<0)&&!!Gy)&&!!Gy.AJ)&&(Gy.AJ.
JX>=LP)){Gy=Gy.AJ;P$=P$+1;}if((!Gy&&!!this.B_)&&(this.B_.JX>LP))Gy=this.B_;while((
!!Gy&&!!Gy.AJ)&&(Gy.AJ.JX>LP))Gy=Gy.AJ;if(!Gy){Ag.Ab=this;Ag.AJ=this.B_;if(!!this.
B_)this.B_.Ah=Ag;if(!this.B9)this.B9=Ag;this.B_=Ag;}else{Ag.Ab=this;Ag.AJ=Gy.AJ;
Ag.Ah=Gy;Gy.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B9=Ag;}if(((Ag.U&0x1)===0x1))
this.Bi(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AON()===Ag))Ag.Cy(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cy(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}},A8r:function(){return this.
AV;},Awi:function(){return this.G3;},_Init:function(aArg){C.Es._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Es._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKn)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.G9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RC:null,JB:null,Fp:A.abi(10,null
,null),Atz:null,Aim:null,ABn:0,Ia:0,L8:A.abi(10,0,null),AJK:A.abi(10,A.wg,null),
Xs:A.abi(10,0,null),AfU:A.abi(10,A.wf,null),AtE:A.abi(10,0,null),Ail:A.abi(10,A.
wf,null),Xr:A.abi(10,A.wf,null),Rv:A.abi(10,A.wf,null),Add:A.abi(10,A.wf,null),EP:
0,AJ9:0,AJ8:0,Oq:A.abi(4,0,null),Kf:A.abi(4,A.wg,null),Kb:0,Az6:0,AtS:0,AzS:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ij:function(){return this;
},Kk:function(CZ,aClip,aOffset,Ci,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.Ave(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kk.call(this,CZ,aClip
,aOffset,Ci,aBlend);},Cy:function(Rp,U1){var B;C.P.Cy.call(this,Rp,U1);if(!this.
Ab&&(((Rp&0x1)===0x1)||((U1&0x1)===0x1)))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rp&0x2)===0x2)||((U1&0x2)===0x2)))this.Bi([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArH:
function(E){var B;var BzU=this.FA;C.P.ArH.call(this,E);if(((BzU!==this.FA)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Dr:function(
E){var B;var BR=this.G3;C.P.Dr.call(this,E);if(((BR!==this.G3)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvR=!!this.Ia;if(!!this.Ia)CN.Bs=this.Ia;}var Gz=null;if(!!this.
JB){Gz=this.JB.C1.DispatchEvent(CN);if(!Gz)Gz=this.GY(CN);if(!Gz)Gz=this.A3C(CN);
this.Ia=0;return Gz;}Gz=C.P.DispatchEvent.call(this,CN);this.Ia=0;return Gz;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvR=!!this.Ia;if(!!this.Ia)CN.Bs=this.Ia;}var Gz=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ia=0;return Gz;},Bi:function(Da){var
B;if(this.ABn>0)throw new Error(P4);if(!!this.FA&&!this.Ab){if(((B=this.FA.QI)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FA,0);}this.FA.QI=A.wC(this.FA.QI
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bi.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Kb;O=O+1)if(!(((B=A.lb(this.Kf.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Kf.Set(O,A.wC(this.Kf.Get(O),Da));this.Oq.Set(O,A.aaH(this.Kf.Get(O
)));return;}if(this.Kb<3){this.Kf.Set(this.Kb,Da);this.Oq.Set(this.Kb,A.aaH(Da));
this.Kb=this.Kb+1;return;}var Ic;var RB;var Az5=0;var Az8=0;var Bcm=2147483647;this.
Kf.Set(this.Kb,Da);this.Oq.Set(this.Kb,A.aaH(Da));for(Ic=0;Ic<=this.Kb;Ic=Ic+1)for(
RB=Ic+1;RB<=this.Kb;RB=RB+1){var ALf=A.aaH(A.wC(this.Kf.Get(Ic),this.Kf.Get(RB))
);var Bfc=((ALf<<8)/(this.Oq.Get(Ic)+this.Oq.Get(RB)))|0;if(Bfc<Bcm){Bcm=Bfc;Az5=
Ic;Az8=RB;}}this.Kf.Set(Az5,A.wC(this.Kf.Get(Az5),this.Kf.Get(Az8)));this.Oq.Set(
Az5,A.aaH(this.Kf.Get(Az5)));if(Az8!==this.Kb){this.Kf.Set(Az8,this.Kf.Get(this.
Kb));this.Oq.Set(Az8,this.Oq.Get(this.Kb));}},Byx:function(){var LJ=A._NewObject(
C.AqG,0);LJ.AvR=!!this.Ia;if(!!this.Ia)LJ.Bs=this.Ia;return LJ;},Ao4:function(){
var LJ=A._NewObject(C.Aec,0);LJ.AvR=!!this.Ia;if(!!this.Ia)LJ.Bs=this.Ia;return LJ;
},AtD:function(){var LJ=A._NewObject(C.AuT,0);LJ.AvR=!!this.Ia;if(!!this.Ia)LJ.Bs=
this.Ia;return LJ;},ByC:function(G){var O;var Apj=false;for(O=0;O<10;O=O+1)if(!!
this.Fp.Get(O)){var pos=this.Rv.Get(O);var B0=this.Fp.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fp.Get(O)!==this)){
var tmp=this.Fp.Get(O);this.EP=O;this.Fp.Set(O,null);tmp.GY(this.Ao4().InitializeUp(
O,this.Ail.Get(O),this.AfU.Get(O),this.Xs.Get(O),this.L8.Get(O)+1,this.Xr.Get(O)
,false,this.Rv.Get(O),this.Add.Get(O)));this.BroadcastEvent(this.AtD().InitializeUp(
O,this.L8.Get(O)+1,false,tmp,this.Rv.Get(O)),0x18);}else{this.Xs.Set(O,(this.Aim.
Bs-this.AtE.Get(O))|0);if(this.Xs.Get(O)<10)this.Xs.Set(O,10);this.EP=O;this.Fp.
Get(O).GY(this.Ao4().InitializeHold(O,pos,this.AfU.Get(O),this.Xs.Get(O),this.L8.
Get(O)+1,this.Xr.Get(O),this.Rv.Get(O),this.Add.Get(O)));Apj=true;}}if(!Apj)this.
Aim.Ar(false);},GetFPS:function(){var ticksCount=0;var Bc0=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ9&&(ticksCount>this.AJ9))Bc0=((this.AJ8*1000)/((
ticksCount-this.AJ9)|0))|0;this.AJ8=0;this.AJ9=ticksCount;return Bc0;},Update:function(
){var B;if(!this.Atz)this.Atz=A._NewObject(A.Graphics.Canvas,0);this.Atz.ArO([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Atz.Update();return this.UpdateGE20(this.Atz);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BF;var Agm=this.UpdateCanvas(
CZ,Cc);this.EndUpdate();return Agm;},EndUpdate:function(){if(this.Kb>0){this.AJ8=
this.AJ8+1;this.Kb=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Agm=BF;var Bye=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var O;var Ic=this.Kb;this.ABn=this.
ABn+1;CZ.C1=this;for(O=0;(O<Ic)&&(O<4);O=O+1)if(this.Oq.Get(O)>0){this.Kk(CZ,A.abg(
this.Kf.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agm=A.wC(Agm,A.lb(Bye
,this.Kf.Get(O)));}else Ic=Ic+1;CZ.C1=null;this.ABn=this.ABn-1;if(!((Agm[0]>=Agm[
2])||(Agm[1]>=Agm[3])))return A.abg(Agm,aOffset);else return Agm;},GetUpdateRegion:
function(AI6){var O;var Ic=this.Kb;if(AI6<0)return BF;for(O=0;(O<Ic)&&(O<4);O=O+
1)if(!this.Oq.Get(O)){Ic=Ic+1;AI6=AI6+1;}else if(O===AI6)return this.Kf.Get(O);return BF;
},BeginUpdate:function(){var B;var O;if(!!this.Kb&&!A.aaY(this.Kf.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bgg=A.abi(3,A.wg,null);var Bgf=this.Kb;for(O=0;
O<Bgf;O++)Bgg.Set(O,this.Kf.Get(O));for(O=0;O<Bgf;O++){var Bfx=A.abh(Bgg.Get(O),
this.M.slice(0,2));var Bfy=this.AuB(Bfx);if(!A.aaY(Bfx,Bfy))this.Bi(A.abg(Bfy,this.
M.slice(0,2)));}}var Ic;var RB;for(Ic=0;Ic<(this.Kb-1);Ic++)if(this.Oq.Get(Ic)>0
)for(RB=Ic+1;RB<this.Kb;RB++)if(this.Oq.Get(RB)>0){var ALf=A.aaH(A.wC(this.Kf.Get(
Ic),this.Kf.Get(RB)));if(((ALf-this.Oq.Get(Ic))-this.Oq.Get(RB))<0){this.Kf.Set(
Ic,A.wC(this.Kf.Get(Ic),this.Kf.Get(RB)));this.Oq.Set(Ic,ALf);this.Oq.Set(RB,0);
}}for(O=this.Kb-1;O>=0;O--)if(!this.Oq.Get(O))this.Kb=this.Kb-1;return this.Kb;}
,DoesNeedUpdate:function(){if(this.Kb>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.AzS)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bi(this.M);return this;},SetRootFocus:function(A0I){if(A0I===this.AzS
)return false;this.AzS=A0I;if(!A0I){if(!!this.JB)this.JB.C1.Cy(0x0,0x40);else this.
Cy(0x0,0x40);}else if(!!this.JB)this.JB.C1.Cy(0x40,0x0);else this.Cy(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qa){this.Ia=Qa;},DriveKeyboardHitting:function(
Kz,AyT,S8){var B;var A3D=!!this.RC;if(!!this.RC&&((!S8||(this.Az6!==Kz))||(this.
AtS!==AyT))){var LJ=null;var X=(C.Ch.isPrototypeOf(B=this.RC)?B:null);var D5=(C.
BN.isPrototypeOf(B=this.RC)?B:null);if(!!this.Az6)LJ=A._NewObject(C.KeyEvent,0).
Initialize(this.Az6,false);if(this.AtS!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtS,false);if(!!D5)D5.GY(LJ);else if(!!X)X.GY(LJ);this.Az6=0;this.AtS=0x00;
this.RC=null;}if(!!this.RC){var LJ=null;var X=(C.Ch.isPrototypeOf(B=this.RC)?B:null
);var D5=(C.BN.isPrototypeOf(B=this.RC)?B:null);if(!!Kz)LJ=A._NewObject(C.KeyEvent
,0).Initialize(Kz,true);if(this.AtS!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
AyT,true);if(!!D5)D5.GY(LJ);else if(!!X)X.GY(LJ);}if(!this.RC&&S8){if(!!Kz)this.
RC=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Kz,true));if(AyT!==0x00
)this.RC=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyT,true));if(
!(C.BN.isPrototypeOf(B=this.RC)?B:null)&&!(C.Ch.isPrototypeOf(B=this.RC)?B:null)
)this.RC=null;this.Az6=Kz;this.AtS=AyT;A3D=A3D||!!this.RC;}this.Ia=0;return A3D;
},DriveCursorMovement:function(Fb){return this.DriveMultiTouchMovement(this.EP,Fb
);},DriveMultiTouchMovement:function(BG,Fb){if((BG<0)||(BG>9)){this.Ia=0;return false;
}var Fr=A.abe(Fb,this.Rv.Get(BG));this.Rv.Set(BG,Fb);if(!this.Fp.Get(BG)||A.aaX(
Fr,Cc)){this.Ia=0;return false;}var pos=Fb;var B0=this.Fp.Get(BG).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fp.Get(BG)!==
this)){var tmp=this.Fp.Get(BG);this.EP=BG;this.Fp.Set(BG,null);tmp.GY(this.Ao4().
InitializeUp(BG,this.Ail.Get(BG),this.AfU.Get(BG),this.Xs.Get(BG),this.L8.Get(BG
)+1,this.Xr.Get(BG),false,this.Rv.Get(BG),this.Add.Get(BG)));this.BroadcastEvent(
this.AtD().InitializeUp(BG,this.L8.Get(BG)+1,false,tmp,Fb),0x18);}else{this.Ail.
Set(BG,pos);this.EP=BG;this.Fp.Get(BG).GY(this.Byx().Initialize(BG,pos,this.AfU.
Get(BG),Fr,this.Xs.Get(BG),this.L8.Get(BG)+1,this.Xr.Get(BG),Fb,this.Add.Get(BG)
));}this.Ia=0;return true;},DriveCursorHitting:function(S8,BG,Fb){return this.DriveMultiTouchHitting(
S8,BG,Fb);},DriveMultiTouchHitting:function(S8,BG,Fb){if((BG<0)||(BG>9)){this.Ia=
0;return false;}var ticksCount=this.Ia;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBp=this.Ia;this.DriveMultiTouchMovement(BG,Fb);Fb=this.Rv.Get(BG);
this.Ia=BBp;if(S8)this.Add.Set(BG,Fb);if(S8&&!this.Fp.Get(BG)){var JA;var pos=Fb;
if(A.wa(this.AJK.Get(BG),Fb)&&((ticksCount-this.AtE.Get(BG))<=250))this.L8.Set(BG
,this.L8.Get(BG)+1);else this.L8.Set(BG,0);this.AJK.Set(BG,A.abh(MF,Fb));this.AtE.
Set(BG,ticksCount);if(!!this.JB)JA=this.Yi(A.abh(MF,Fb),BG,this.L8.Get(BG)+1,this.
JB.C1,null,0x0);else JA=this.Yi(A.abh(MF,Fb),BG,this.L8.Get(BG)+1,null,null,0x0);
if(!!JA){this.BroadcastEvent(this.AtD().InitializeDown(BG,this.L8.Get(BG)+1,false
,JA.Ch,Fb),0x18);this.Fp.Set(BG,JA.Ch);this.Xr.Set(BG,JA.DG);}else{this.Fp.Set(BG
,null);this.Xr.Set(BG,Cc);this.Ia=0;return false;}var B0=JA.Ch.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfU.Set(BG,pos);this.Ail.
Set(BG,pos);this.Xs.Set(BG,0);this.Aim.Ar(true);this.EP=BG;this.Fp.Get(BG).GY(this.
Ao4().InitializeDown(BG,pos,this.L8.Get(BG)+1,this.Xr.Get(BG),false,Fb));this.Ia=
0;return true;}if(!S8&&!!this.Fp.Get(BG)){var pos=Fb;var B0=this.Fp.Get(BG).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Ail.
Get(BG);this.EP=BG;var tmp=this.Fp.Get(BG);this.Fp.Set(BG,null);tmp.GY(this.Ao4(
).InitializeUp(BG,pos,this.AfU.Get(BG),this.Xs.Get(BG),this.L8.Get(BG)+1,this.Xr.
Get(BG),false,Fb,this.Add.Get(BG)));this.BroadcastEvent(this.AtD().InitializeUp(
BG,this.L8.Get(BG)+1,false,tmp,Fb),0x18);this.Ia=0;return true;}this.Ia=0;return false;
},AUj:function(Aan,BbL,Ac3,Ac2){if(Aan===this)Aan=null;if(!!!Aan&&!!this.JB)Aan=
this.JB.C1;if(!this.Fp.Get(this.EP))return;var JA;JA=this.Yi(A.abh(MF,this.Rv.Get(
this.EP)),this.EP,1,Aan,Ac3,Ac2);if(!!JA&&(this.Fp.Get(this.EP)!==JA.Ch))this.ANK(
JA.Ch,JA.DG);if(!JA&&(this.Fp.Get(this.EP)!==BbL))this.ANK(BbL,Cc);},ANK:function(
Aan,Xg){if(!this.Fp.Get(this.EP)||(this.Fp.Get(this.EP)===Aan))return;var tmp=this.
Fp.Get(this.EP);this.Fp.Set(this.EP,null);tmp.GY(this.Ao4().InitializeUp(this.EP
,this.Ail.Get(this.EP),this.AfU.Get(this.EP),this.Xs.Get(this.EP),this.L8.Get(this.
EP)+1,this.Xr.Get(this.EP),true,this.Rv.Get(this.EP),this.Add.Get(this.EP)));this.
BroadcastEvent(this.AtD().InitializeUp(this.EP,this.L8.Get(this.EP)+1,true,tmp,this.
Rv.Get(this.EP)),0x18);var pos=this.Rv.Get(this.EP);var B0=null;if(!!Aan)B0=Aan.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aan
!==this)){this.Fp.Set(this.EP,null);return;}this.BroadcastEvent(this.AtD().InitializeDown(
this.EP,this.L8.Get(this.EP)+1,true,Aan,this.Rv.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fp.Set(this.EP,Aan);this.Xr.Set(
this.EP,Xg);this.AfU.Set(this.EP,pos);this.Ail.Set(this.EP,pos);this.L8.Set(this.
EP,0);this.Xs.Set(this.EP,0);this.AtE.Set(this.EP,ticksCount);this.Add.Set(this.
EP,this.Rv.Get(this.EP));this.Fp.Get(this.EP).GY(this.Ao4().InitializeDown(this.
EP,pos,this.L8.Get(this.EP)+1,this.Xr.Get(this.EP),true,this.Add.Get(this.EP)));
},AON:function(){if(!!this.JB)return this.JB.C1;return null;},ACB:function(KA){var
B;if(!KA)throw new Error(S4);if(!((KA.U&0x80)===0x80))throw new Error(UO);if(this.
JB.C1===KA)this.JB=this.JB.Ah;else{var AzR=this.JB;while(AzR.Ah.C1!==KA)AzR=AzR.
Ah;AzR.Ah=AzR.Ah.Ah;}KA.Cy(0x0,0xD0);if(this.AzS){if(!!this.JB)this.JB.C1.Cy(0x50
,0x0);else this.Cy(0x50,0x0);}},AMS:function(KA){var B;var At=A._NewObject(C.A7B
,0);if(!KA)throw new Error(Z5);if(KA===null)throw new Error(W1);if(((KA.U&0x80)===
0x80))throw new Error(Iq);if(!!this.JB)this.JB.C1.Cy(0x0,0x50);else this.Cy(0x0,
0x50);At.Ah=this.JB;At.C1=KA;this.JB=At;if(this.AzS)KA.Cy(0xD0,0x0);else KA.Cy(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Aim={
I:this},0);(this.Fp=[]).__proto__=C.Root.Fp;(this.L8=[]).__proto__=C.Root.L8;(this.
AJK=[]).__proto__=C.Root.AJK;(this.Xs=[]).__proto__=C.Root.Xs;(this.AfU=[]).__proto__=
C.Root.AfU;(this.AtE=[]).__proto__=C.Root.AtE;(this.Ail=[]).__proto__=C.Root.Ail;(
this.Xr=[]).__proto__=C.Root.Xr;(this.Rv=[]).__proto__=C.Root.Rv;(this.Add=[]).__proto__=
C.Root.Add;(this.Oq=[]).__proto__=C.Root.Oq;(this.Kf=[]).__proto__=C.Root.Kf;this.
__proto__=C.Root;this.U=0x10007F;this.Aim.PO(10);this.Aim.Mx=[this,this.ByC];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Aim._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Aim._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RC)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JB)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fp,D);if((B=this.
Atz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aim)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvR:false,Init:function(aArg){this.Bs=
this.Avn();},Avn:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DP:0,Down:false
,Initialize2:function(Kz,S8){this.CO=0;this.DP=Kz;this.Down=S8;if((Kz>=0x30)&&(Kz<=
0x39))this.CO=(10+Kz)-48;if((Kz>=0x41)&&(Kz<=0x5A))this.CO=(105+Kz)-65;if((Kz>=0x61
)&&(Kz<=0x7A))this.CO=(105+Kz)-97;if(Kz===0x20)this.CO=131;if(!this.CO)switch(Kz
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(Kz,S8){this.CO=Kz;this.
Down=S8;this.DP=0x00;var A1l=Kz-10;var Aty=Kz-105;if((A1l>=0)&&(A1l<=9))this.DP=(
48+A1l)&0xFFFF;if((Aty>=0)&&(Aty<=25))this.DP=(65+Aty)&0xFFFF;if(Kz===131)this.DP=
0x20;if(this.DP===0x00)switch(Kz){case 132:this.DP=0x2B;break;case 133:this.DP=0x2D;
break;case 134:this.DP=0x2A;break;case 135:this.DP=0x2F;break;case 136:this.DP=0x3D;
break;case 137:this.DP=0x2E;break;case 138:this.DP=0x2C;break;case 139:this.DP=0x3A;
break;case 140:this.DP=0x3B;break;default:;}return this;},Bjg:function(BbA){switch(
BbA){case 141:return((this.DP>=0x41)&&(this.DP<=0x5A))||((this.DP>=0x61)&&(this.
DP<=0x7A));case 142:return(((this.DP>=0x41)&&(this.DP<=0x5A))||((this.DP>=0x61)&&(
this.DP<=0x7A)))||((this.DP>=0x30)&&(this.DP<=0x39));case 143:return(this.DP>=0x30
)&&(this.DP<=0x39);case 144:return(((this.DP>=0x41)&&(this.DP<=0x46))||((this.DP>=
0x61)&&(this.DP<=0x66)))||((this.DP>=0x30)&&(this.DP<=0x39));case 145:return this.
DP!==0x00;case 146:return(this.DP===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DP!==0x00
)||!!this.CO;default:;}return BbA===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARj={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARj;},_className:
"Core::LanguageEvent"};C.AuT={AxH:null,LT:A.wf,N5:0,IF:0,Down:false,NF:false,InitializeUp:
function(BG,Oc,AoE,A0Z,Aam){this.Down=false;this.IF=BG;this.N5=Oc;this.LT=Aam;this.
AxH=A0Z;this.NF=AoE;return this;},InitializeDown:function(BG,Oc,AoE,A0Z,Aam){this.
Down=true;this.IF=BG;this.N5=Oc;this.LT=Aam;this.AxH=A0Z;this.NF=AoE;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuT;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxH)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aec={AgU:A.wf,LT:A.wf,N5:0,Jp:
0,NQ:A.wf,H0:A.wf,IF:0,Down:false,NF:false,InitializeHold:function(BG,Ali,AyW,AyX
,Oc,Xg,Aam,AyV){this.Down=true;this.IF=BG;this.H0=A.abf(Ali,Xg);this.NQ=A.abf(AyW
,Xg);this.Jp=AyX;this.N5=Oc;this.LT=Aam;this.AgU=AyV;return this;},InitializeUp:
function(BG,Ali,AyW,AyX,Oc,Xg,AoE,Aam,AyV){this.Down=false;this.IF=BG;this.H0=A.
abf(Ali,Xg);this.NQ=A.abf(AyW,Xg);this.Jp=AyX;this.N5=Oc;this.NF=AoE;this.LT=Aam;
this.AgU=AyV;return this;},InitializeDown:function(BG,Ali,Oc,Xg,AoE,Aam){this.Down=
true;this.IF=BG;this.H0=A.abf(Ali,Xg);this.NQ=A.abf(Ali,Xg);this.Jp=0;this.N5=Oc;
this.NF=AoE;this.LT=Aam;this.AgU=Aam;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aec;},_className:"Core::CursorEvent"};C.AqG={
AgU:A.wf,LT:A.wf,N5:0,Jp:0,DG:A.wf,NQ:A.wf,H0:A.wf,IF:0,Initialize:function(BG,Ali
,AyW,aOffset,AyX,BxB,Xg,Aam,AyV){this.IF=BG;this.H0=A.abf(Ali,Xg);this.NQ=A.abf(
AyW,Xg);this.DG=aOffset;this.Jp=AyX;this.N5=BxB;this.LT=Aam;this.AgU=AyV;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqG;},_className:
"Core::DragEvent"};C.Y={BX:null,Nx:null,El:null,Br:A.wf,AUO:0,Space:0,AgS:0,Kk:function(
CZ,aClip,aOffset,Ci,aBlend){},GetClipping:function(){var B;var Az=C.Es.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap3=BF;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap3=A.wC(Ap3,X.GetClipping());
Az=A.wC(Az,Ap3);}return Az;},Cy:function(Rp,U1){var B;var Tk=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U1&0x80000)===0x80000))this.Ab.Bi(this.GetClipping(
));C.Es.Cy.call(this,Rp,U1);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rp&0x80000)===
0x80000))&&!((Tk&0x80000)===0x80000))this.Ab.Bi(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlX=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKv=[
E[2]-E[0],E[3]-E[1]];var ApZ=!A.aaX(AlX,AKv);var Fr=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fr,Cc)&&!ApZ){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ank(Fr,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((ApZ&&(AlX[0]>0))&&(AlX[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eu&&(X.Eu.
Nz!==this))X.Eu=null;if(!X.Eu&&((X.PH!==0x14)||!!this.AgS))X.AtQ(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Es.H.call(this,E);if(!!this.Ab&&ApZ){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JF],this);}}},Bfr:function(){var B;if((!this.AgS||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1G=((this.U&0x1000)===0x1000);for(;!!X&&!A1G;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1G=true;if(((X.U&0x200)===
0x200))break;}if(A1G){this.U=this.U&~0x4000;this.Ab.BfC();}},ApJ:function(G){var
B;this.BX.Q=null;this.BX.Qo=null;this.BX=null;(B=this.Nx)?B[1].call(B[0],this):null;
},F_:function(E){var B;var Fr=A.abe(E,this.Br);if(A.aaX(Fr,Cc))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ank(Fr,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bi(this.M);A.pe(
this.El,this);},A_l:function(E){var B;if(E<0)E=0;if(E===this.AUO)return;this.AUO=
E;if(!!this.Ab&&!!this.AgS){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JF],this);}},Bne:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgS){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JF],this);}},JP:function(E){var B;if(E===this.AgS)return;
this.AgS=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JF],this);}},Vt:function(AcX,E5){var Aty=this.Db(0x1);var Rt=this.M;var
Vd=A.abe(Aty.slice(0,2),Rt.slice(0,2));var L_=A.abe(Aty.slice(2,4),Rt.slice(2,4)
);var Bq=Cc;if((Vd[0]>0)&&(L_[0]>Vd[0]))Bq=[Vd[0],Bq[1]];else if((Vd[0]>0)&&(L_[
0]>0))Bq=[L_[0],Bq[1]];if((L_[0]<0)&&(Vd[0]<L_[0]))Bq=[L_[0],Bq[1]];else if((L_[
0]<0)&&(Vd[0]<0))Bq=[Vd[0],Bq[1]];if((Vd[1]>0)&&(L_[1]>Vd[1]))Bq=[Bq[0],Vd[1]];else
if((Vd[1]>0)&&(L_[1]>0))Bq=[Bq[0],L_[1]];if((L_[1]<0)&&(Vd[1]<L_[1]))Bq=[Bq[0],L_[
1]];else if((L_[1]<0)&&(Vd[1]<0))Bq=[Bq[0],Vd[1]];if(A.aaX(Bq,Cc)){(E5)?E5[1].call(
E5[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qo=null;this.Nx=null;}this.BX=AcX;if(!this.BX){this.F_(A.abe(this.Br,Bq));(E5)?E5[
1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.
Anv,this.F_];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qo=[this,this.
ApJ];this.BX.Ae7(false);this.BX.Ar(true);this.Nx=E5;}},HD:function(Ag,Ac0,AcX,E5
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UP);this.Bfr();var Az=Ag.GetExtent();var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac0&&
!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac0&&A.aaY(LN,Az))){(E5)?E5[1].call(E5[0],this
):null;return;}var Bq=Cc;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qo=null;this.Nx=null;}this.BX=AcX;if(!this.BX){this.F_(A.abe(this.Br,Bq));(E5
)?E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anv,this.F_];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qo=[this
,this.ApJ];this.BX.Ae7(false);this.BX.Ar(true);this.Nx=E5;}},BiI:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CD=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CD=CD+1;Ag=Ag.AJ;}return CD;
},TL:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BF;var IV=0x10000;this.Bfr();if(((
aFilter&0x10000)===0x10000))IV=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IV||!((B=IV)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anv:function(){return this.Br;},_Init:
function(aArg){C.Es._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Es._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
Hx:null,BX:null,Ch:null,WK:null,Nx:null,El:null,Hg:null,Th:-1,Tg:0,Jl:-1,Ho:0,AiF:
8,Oj:0,Uu:0,AcK:A.wf,G0:-1,Br:0,Go:-1,OQ:0,GK:24,AY:0,Lj:null,NM:false,AtT:false
,AUV:function(Ir,Ob,Xf,S9,S_,Ah6,O7,Ro,Lz,Lx,Ly){throw new Error(Z6);},AqE:function(
Ir,Ah6,O7,Ro,Lz,Lx,Ly){throw new Error(W2);},AkL:function(Ir,Ob,Xf,S9,S_,O7,Ro,Lz
,Lx,Ly){throw new Error(Z7);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Go>=0)&&(this.Go<this.AY))&&!this.AV){this.G0=this.Go;this.Ch=(C.Ch.isPrototypeOf(
B=A._NewObject(this.Lj,0))?B:null);if(!!this.B_)this.B_.Ah=this.Ch;else this.B9=
this.Ch;this.Ch.AJ=this.B_;this.B_=this.Ch;this.Ch.Ab=this;this.AcK=[(B=this.M)[
2]-B[0],this.GK];(B=this.Hg)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Ch.GY(CN
);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B9=null;this.B_=this.Ch.AJ;this.Ch.
AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Lj){A.pe(this.El,this);return;
}this.AtT=true;var AAK=0;if(!this.NM)AAK=this.OQ;var FO=this.Al6(-AAK-this.Br,1);
var GT=this.Al6(((((B=this.M)[3]-B[1])-AAK)-this.Br)-1,2);var CD=GT-FO;if(CD<1)CD=
1;var Aif=(CD/2)|0;var Aig=(CD/3)|0;if(!Aif)Aif=1;if(!Aig)Aig=1;if(FO<this.Ho){FO=
FO-Aif;GT=GT+Aig;}else if(GT>this.Jl){FO=FO-Aig;GT=GT+Aif;}else{FO=this.Ho;GT=this.
Jl;}if(!this.NM){if(FO>=this.AY){FO=0;GT=-1;}else if(GT<0){FO=0;GT=-1;}if(GT>=this.
AY)GT=this.AY-1;if(FO<0)FO=0;}else if(this.AY<=0){FO=0;GT=-1;}var AiX=this.Ho;var
AiY=this.Jl;var Apw=0;var Apx=-1;if(FO>AiX)AiX=FO;if(GT<AiY)AiY=GT;if(AiX<=AiY){
while((this.Jl<GT)&&(this.Ho<AiX)){this.AdE();this.Azk();}while((this.Ho>FO)&&(this.
Jl>AiY)){this.AAX();this.Azj();}}else{this.Jl=(this.Jl-this.Ho)+FO;this.Ho=FO;Apw=
this.Ho;Apx=this.Jl;}while(this.Ho<FO)this.AdE();while(this.Jl>GT)this.AAX();while(
this.Ho>FO)this.Azj();while(this.Jl<GT)this.Azk();var Aa=this.B9;var inx=this.Ho;
var pos=[0,(AAK+this.Br)+this.Jj(inx,0)];var BL=(B=this.M)[3]-B[1];var AlF=null;
var Bgp=(B=this.M)[2]-B[0];while(!!Aa){var Ix=inx;if(this.NM){if(Ix<0)Ix=this.AY-(-
Ix%this.AY);if(Ix>0)Ix=Ix%this.AY;}var AdF=((Ix>=this.Tg)&&(Ix<=this.Th))||((inx>=
Apw)&&(inx<=Apx));var Apd=Aa.GetExtent();var Bq=A.abe(pos,Apd.slice(0,2));if(AdF
)this.Uu=this.GK;else this.Uu=Apd[3]-Apd[1];var A2k=pos[1];var A2l=pos[1]+this.Uu;
if(!A.aaX(Bq,Cc))Aa.Ank(Bq,true);if((AdF&&(A2k<BL))&&(A2l>0)){this.Ch=Aa;this.G0=
Ix;this.AcK=[Bgp,this.Uu];(B=this.Hg)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uu];}inx=this.Ho;Aa=this.B9;pos=[0,(AAK+this.Br)+this.Jj(
inx,0)];while(!!Aa){var Ix=inx;if(this.NM){if(Ix<0)Ix=this.AY-(-Ix%this.AY);if(Ix>
0)Ix=Ix%this.AY;}var AdF=((Ix>=this.Tg)&&(Ix<=this.Th))||((inx>=Apw)&&(inx<=Apx)
);if(AdF)this.Uu=this.GK;else this.Uu=(B=Aa.GetExtent())[3]-B[1];var A2k=pos[1];
var A2l=pos[1]+this.Uu;if(AdF&&!((A2k<BL)&&(A2l>0))){this.Ch=Aa;this.G0=Ix;this.
AcK=[Bgp,this.Uu];(B=this.Hg)?B[1].call(B[0],this):null;}if(((Ix===this.Go)&&this.
NM)&&!!AlF){var Rt=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rt))>A.aaH(A.lb(AlF.GetExtent(),Rt)))AlF=Aa;}else if(Ix===this.Go)AlF=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uu];}this.Tg=0;this.Th=-1;this.Ch=null;this.G0=-
1;this.Bb(AlF);this.AtT=false;A.pe(this.El,this);},QD:function(Ag,Gw,aFilter){return null;
},AqL:function(Ag,aFilter){return null;},TL:function(Ag,aFilter){return null;},ACJ:
function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
KA,FK,Lz,Lx,Ly){throw new Error(W3);},Ahw:function(Ag,J3){throw new Error(Z8);},
ZE:function(Ag){throw new Error(Z9);},JV:function(Ag,P$){throw new Error(UQ);},HN:
function(Ag){throw new Error(W4);},AL7:function(Ag,J3){throw new Error(P5);},J:function(
Ag,P$){throw new Error(Z_);},Jj:function(G6,A0z){return G6*this.GK;},Al6:function(
Fb,A0z){return(Fb/this.GK)|0;},AAX:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jl=this.Jl-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiF){if(!
!this.Hx)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oj++;}return Aa;},Azk:function(
){var B;var Aa=this.Hx;var Adp=this.Lj;var AdJ=++this.Jl;if(this.NM){if(AdJ<0)AdJ=
this.AY-(-AdJ%this.AY);if(AdJ>0)AdJ=AdJ%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adp,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.AiF++;
}this.Uu=this.GK;this.G0=AdJ;this.AcK=[(B=this.M)[2]-B[0],this.Uu];this.Ch=Aa;(B=
this.Hg)?B[1].call(B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B_)this.B_.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdJ===this.Go
)this.Bb(Aa);return Aa;},AdE:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ho=this.Ho+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiF){if(!!this.Hx
)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oj++;}return Aa;},Azj:function(){var
B;var Aa=this.Hx;var Adp=this.Lj;var MY=--this.Ho;if(this.NM){if(MY<0)MY=this.AY-(-
MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adp)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.Hx===
Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.isPrototypeOf(B=
A._NewObject(Adp,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.AiF++;}this.Uu=this.GK;
this.G0=MY;this.AcK=[(B=this.M)[2]-B[0],this.Uu];this.Ch=Aa;(B=this.Hg)?B[1].call(
B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B9)this.B9.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(MY===this.Go)this.Bb(Aa);return Aa;
},ApJ:function(G){var B;this.BX.Q=null;this.BX.Qo=null;this.BX=null;(B=this.Nx)?
B[1].call(B[0],this):null;},BAK:function(G){this.F_(this.WK.DG[1]);},BAL:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qo=null;this.BX=
null;}if(!this.NM){var AE=this.AqS(0,this.AY-1);var Agc=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OQ);if(AE[0]>Agc[0])AE=[].concat(Agc[0],AE.slice(1,4));if(AE[1]>Agc[
1])AE=A.abP(AE,Agc[1]);var Fr=AE[1]-this.M[1];var A2z=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2z>0)A2z=0;this.WK.DG=[0,this.Br];this.WK.Gk=[0,(this.Br+A2z)-Fr];this.
WK.FY=[0,this.Br-Fr];}else{var Fr=32000-(32000%this.GK);this.WK.DG=[0,this.Br];this.
WK.Gk=[0,this.Br-Fr];this.WK.FY=[0,this.Br+Fr];}},ASY:function(E){var B;if(this.
NM===E)return;this.NM=E;while(!!this.AdE());this.An();this.Bi([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw2:function(E){if(E===this.WK)return;if(!!E&&!!E.At6){A.ab5(
"%s%*%s",O3,E,Ri);throw new Error(W5);}if(!!this.WK){this.WK.AKH=null;this.WK.At6=
null;}this.WK=E;if(!!E){E.AKH=[this,this.BAL];E.At6=[this,this.BAK];}},F_:function(
E){var B;if(this.NM&&(this.AY>0)){var Hz=this.Jj(this.AY,3);if(E<0)E=Hz-(-E%Hz);
if(E>0)E=E%Hz;if(E>0)E=E-Hz;}if(E===this.Br)return;this.Br=E;this.An();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},G2:function(E){if(E<0)E=-1;if(E===this.Go)return;
this.Go=E;this.An();},A9_:function(E){var B;if(E<0)E=0;if(E===this.OQ)return;this.
OQ=E;if(!this.NM){this.An();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae4:function(
E){var B;if(E<1)E=1;if(E===this.GK)return;this.GK=E;while(!!this.AdE());this.An(
);this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ju:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OQ+this.Br)+this.Jj(E,3));AE=A.abP(AE
,(this.OQ+this.Br)+this.Jj(this.AY,3));}else{AE=A.abP(AE,(this.OQ+this.Br)+this.
Jj(E,3));AE=[].concat(AE.slice(0,3),(this.OQ+this.Br)+this.Jj(this.AY,3));}}else
while(!!this.AdE());this.AY=E;this.An();this.Bi(AE);},NZ:function(E){var B;if(E===
this.Lj)return;this.Lj=E;while(!!this.AdE());this.Hx=null;this.Oj=0;this.An();this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiV:function(G6){if(this.AtT)return null;
if((G6<0)||(G6>=this.AY))return null;if(!this.NM){if((G6<this.Ho)||(G6>this.Jl))
return null;var X=this.B9;while(G6>this.Ho){X=X.Ah;G6=G6-1;}return X;}else{var MY=
this.Ho;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B9;while(
!!X){if((MY%this.AY)===G6)return X;X=X.Ah;MY=MY+1;}return null;}},ABC:function(AcX
,E5){var B;if(this.NM){(E5)?E5[1].call(E5[0],this):null;return;}var AJ_=this.Br;
var Bc1=((((B=this.M)[3]-B[1])-this.Br)-this.OQ)-this.Jj(this.AY,3);var Bq=0;if(
AJ_>0)Bq=-AJ_;else if(Bc1>0)Bq=Bc1;if((Bq>0)&&(Bq>-AJ_))Bq=-AJ_;if(!Bq){(E5)?E5[
1].call(E5[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qo=null;this.Nx=null;}this.BX=AcX;if(!this.BX){this.F_(this.Br+Bq);(E5)?
E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anv,this.F_];this.BX.Cw=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qo=[this,this.
ApJ];this.BX.Ae7(false);this.BX.Ar(true);this.Nx=E5;}},HD:function(G6,Ac0,AcX,E5
){var B;if((G6<0)||(G6>=this.AY))return;var Az=this.AqS(G6,G6);var Bd=this.M;var
LN=A.lb(Az,Bd);if((!Ac0&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac0&&A.aaY(LN,Az))
){(E5)?E5[1].call(E5[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qo=null;this.Nx=null;}this.BX=AcX;if(!this.BX){this.F_(this.Br-Bq);(E5)?
E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anv,this.F_];this.BX.Cw=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qo=[this,this.
ApJ];this.BX.Ae7(false);this.BX.Ar(true);this.Nx=E5;}},BiN:function(){return BF;
},AOP:function(){if((this.OQ<=0)||this.NM)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OQ);return AE;},A6D:function(Fb
){if(((this.AY<=0)||(Fb[0]<this.M[0]))||(Fb[0]>=this.M[2]))return-1;Fb=A.abe(Fb,
this.M.slice(0,2));if(!this.NM){var Aa=(Fb[1]-this.Br)-this.OQ;if(Aa>0)Aa=this.Al6(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fb[1]-this.Br;if(Aa>0)
Aa=this.Al6(Aa,0);if(Aa<0)Aa=this.Al6(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqS:function(J1,L4){if(J1<0)J1=0;if(L4>=this.AY)L4=
this.AY-1;if(J1>L4)return BF;var AE=this.M;var Bq=this.Br;if(this.NM){var Hz=this.
Jj(this.AY,3);if(Bq<0)Bq=Hz-(-Bq%Hz);if(Bq>0)Bq=Bq%Hz;if(Bq>0)Bq=Bq-Hz;}else Bq=
Bq+this.OQ;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jj(L4+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jj(J1,0));return AE;},AbH:function(J1,L4){var B;if(J1<0)J1=0;if(J1>L4
)return;if(this.Tg>this.Th){this.Tg=J1;this.Th=L4;}else{if(J1<this.Tg)this.Tg=J1;
if(L4>this.Th)this.Th=L4;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){
AE=A.abP(AE,(this.OQ+this.Br)+this.Jj(J1,0));AE=[].concat(AE.slice(0,3),(this.OQ+
this.Br)+this.Jj(L4+1,0));}else if((this.Jj(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var Hz=this.Jj(this.AY,3);if(Bq<0)Bq=Hz-(-Bq%Hz);if(
Bq>0)Bq=Bq%Hz;if(Bq>0)Bq=Bq-Hz;AE=A.abP(AE,Bq+this.Jj(J1,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jj(L4+1,0));}this.An();this.Bi(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W6);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.Hx
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WK)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hg)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dy={Hx:null
,BX:null,Ch:null,Nx:null,Hg:null,Th:-1,Tg:0,Jl:-1,Ho:0,AiF:8,Oj:0,SF:0,AcK:A.wf,
G0:-1,Br:0,Go:-1,V_:24,AY:0,Lj:null,AtT:false,AUV:function(Ir,Ob,Xf,S9,S_,Ah6,O7
,Ro,Lz,Lx,Ly){throw new Error(W7);},AqE:function(Ir,Ah6,O7,Ro,Lz,Lx,Ly){throw new
Error(W8);},AkL:function(Ir,Ob,Xf,S9,S_,O7,Ro,Lz,Lx,Ly){throw new Error(Z$);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Go>=0)&&(this.Go<this.AY))&&!this.AV
){this.G0=this.Go;this.Ch=(C.Ch.isPrototypeOf(B=A._NewObject(this.Lj,0))?B:null);
if(!!this.B_)this.B_.Ah=this.Ch;else this.B9=this.Ch;this.Ch.AJ=this.B_;this.B_=
this.Ch;this.Ch.Ab=this;this.AcK=[this.SF,(B=this.M)[3]-B[1]];(B=this.Hg)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Ch.GY(CN);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B9=null;
this.B_=this.Ch.AJ;this.Ch.AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Lj
)return;this.AtT=true;var FO=this.Al6(0-this.Br,1);var GT=this.Al6((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CD=GT-FO;if(CD<1)CD=1;var Aif=(CD/2)|0;var Aig=(CD/3)|
0;if(!Aif)Aif=1;if(!Aig)Aig=1;if(FO<this.Ho){FO=FO-Aif;GT=GT+Aig;}else if(GT>this.
Jl){FO=FO-Aig;GT=GT+Aif;}else{FO=this.Ho;GT=this.Jl;}if(FO>=this.AY){FO=0;GT=-1;
}else if(GT<0){FO=0;GT=-1;}if(GT>=this.AY)GT=this.AY-1;if(FO<0)FO=0;var AiX=this.
Ho;var AiY=this.Jl;var Apw=0;var Apx=-1;if(FO>AiX)AiX=FO;if(GT<AiY)AiY=GT;if(AiX<=
AiY){while((this.Jl<GT)&&(this.Ho<AiX)){this.AdE();this.Azk();}while((this.Ho>FO
)&&(this.Jl>AiY)){this.AAX();this.Azj();}}else{this.Jl=(this.Jl-this.Ho)+FO;this.
Ho=FO;Apw=this.Ho;Apx=this.Jl;}while(this.Ho<FO)this.AdE();while(this.Jl>GT)this.
AAX();while(this.Ho>FO)this.Azj();while(this.Jl<GT)this.Azk();var Aa=this.B9;var
inx=this.Ho;var pos=[this.Br+this.Jj(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlF=
null;var Bgd=(B=this.M)[3]-B[1];while(!!Aa){var Ix=inx;var AdF=((Ix>=this.Tg)&&(
Ix<=this.Th))||((inx>=Apw)&&(inx<=Apx));var Apd=Aa.GetExtent();var Bq=A.abe(pos,
Apd.slice(0,2));if(AdF)this.SF=this.V_;else this.SF=Apd[2]-Apd[0];var A2i=pos[0];
var A2j=pos[0]+this.SF;if(!A.aaX(Bq,Cc))Aa.Ank(Bq,true);if((AdF&&(A2i<BY))&&(A2j>
0)){this.Ch=Aa;this.G0=Ix;this.AcK=[this.SF,Bgd];(B=this.Hg)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SF,pos[1]];}inx=this.Ho;Aa=this.B9;pos=[
this.Br+this.Jj(inx,0),0];while(!!Aa){var Ix=inx;var AdF=((Ix>=this.Tg)&&(Ix<=this.
Th))||((inx>=Apw)&&(inx<=Apx));if(AdF)this.SF=this.V_;else this.SF=(B=Aa.GetExtent(
))[2]-B[0];var A2i=pos[0];var A2j=pos[0]+this.SF;if(AdF&&!((A2i<BY)&&(A2j>0))){this.
Ch=Aa;this.G0=Ix;this.AcK=[this.SF,Bgd];(B=this.Hg)?B[1].call(B[0],this):null;}if(
Ix===this.Go)AlF=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SF,pos[1]];}this.Tg=0;this.
Th=-1;this.Ch=null;this.G0=-1;this.Bb(AlF);this.AtT=false;},QD:function(Ag,Gw,aFilter
){return null;},AqL:function(Ag,aFilter){return null;},TL:function(Ag,aFilter){return null;
},ACJ:function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
KA,FK,Lz,Lx,Ly){throw new Error(W9);},Ahw:function(Ag,J3){throw new Error(W_);},
ZE:function(Ag){throw new Error(S5);},JV:function(Ag,P$){throw new Error(UR);},HN:
function(Ag){throw new Error(US);},AL7:function(Ag,J3){throw new Error(AcN);},J:
function(Ag,P$){throw new Error(S6);},Jj:function(G6,A0z){return G6*this.V_;},Al6:
function(Fb,A0z){return(Fb/this.V_)|0;},AAX:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jl=this.Jl-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiF){if(!
!this.Hx)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oj++;}return Aa;},Azk:function(
){var B;var Aa=this.Hx;var Adp=this.Lj;var AdJ=++this.Jl;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{
Aa=(C.Ch.isPrototypeOf(B=A._NewObject(Adp,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.
AiF++;}this.SF=this.V_;this.G0=AdJ;this.AcK=[this.SF,(B=this.M)[3]-B[1]];this.Ch=
Aa;(B=this.Hg)?B[1].call(B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B_)this.
B_.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdJ===this.
Go)this.Bb(Aa);return Aa;},AdE:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ho=this.Ho+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiF){if(!!this.Hx
)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oj++;}return Aa;},Azj:function(){var
B;var Aa=this.Hx;var Adp=this.Lj;var MY=--this.Ho;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adp))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adp,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.AiF++;
}this.SF=this.V_;this.G0=MY;this.AcK=[this.SF,(B=this.M)[3]-B[1]];this.Ch=Aa;(B=
this.Hg)?B[1].call(B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B9)this.B9.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(MY===this.Go
)this.Bb(Aa);return Aa;},ApJ:function(G){var B;this.BX.Q=null;this.BX.Qo=null;this.
BX=null;(B=this.Nx)?B[1].call(B[0],this):null;},F_:function(E){var B;if(E===this.
Br)return;this.Br=E;this.An();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},G2:function(
E){if(E<0)E=-1;if(E===this.Go)return;this.Go=E;this.An();},AFf:function(E){var B;
if(E<1)E=1;if(E===this.V_)return;this.V_=E;while(!!this.AdE());this.An();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ju:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jj(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jj(E,3));}else{AE=
A.abN(AE,this.Br+this.Jj(this.AY,3));AE=[].concat(this.Br+this.Jj(E,3),AE.slice(
1,4));}this.AY=E;this.An();this.Bi(AE);},NZ:function(E){var B;if(E===this.Lj)return;
this.Lj=E;while(!!this.AdE());this.Hx=null;this.Oj=0;this.An();this.Bi([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BoN:function(BxC,BxD){if(!this.BX)return;if(BxC)this.F_(
this.BX.B2);var A4c=this.Nx;this.BX.Ar(false);this.BX.Q=null;this.BX.Qo=null;this.
Nx=null;this.BX=null;if(BxD)(A4c)?A4c[1].call(A4c[0],this):null;},Bjl:function(){
return!!this.BX;},HD:function(G6,Ac0,AcX,E5){var B;if((G6<0)||(G6>=this.AY))return;
var Az=this.AqS(G6,G6);var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac0&&!((LN[0]>=LN[2
])||(LN[1]>=LN[3])))||(Ac0&&A.aaY(LN,Az))){(E5)?E5[1].call(E5[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qo=null;this.Nx=null;}this.BX=
AcX;if(!this.BX){this.F_(this.Br-Bq);(E5)?E5[1].call(E5[0],this):null;}else{this.
BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.Anv,this.F_];this.BX.Cw=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qo=[this,this.ApJ];this.BX.Ae7(false);this.BX.Ar(true
);this.Nx=E5;}},AqS:function(J1,L4){if(J1<0)J1=0;if(L4>=this.AY)L4=this.AY-1;if(
J1>L4)return BF;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jj(L4+1
,0));AE=[].concat((AE[0]+Bq)+this.Jj(J1,0),AE.slice(1,4));return AE;},AbH:function(
J1,L4){var B;if(J1<0)J1=0;if(J1>L4)return;if(this.Tg>this.Th){this.Tg=J1;this.Th=
L4;}else{if(J1<this.Tg)this.Tg=J1;if(L4>this.Th)this.Th=L4;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jj(J1,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jj(L4+1,0));this.An();this.Bi(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dy;this.H(W6);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.Hx
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nx)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASb:null,AEF:null,Av5:null,D1:null,
Ln:null,BO:null,AK6:0,Bp:0,IF:0,Bs:0,N5:0,Jp:0,DG:A.wf,NQ:A.wf,H0:A.wf,Axq:8,Afc:
0,A7u:1,Down:false,YG:false,NF:false,A1N:false,AAf:0,Kk:function(CZ,aClip,aOffset
,Ci,aBlend){},GY:function(CN){var B;var BQ=(C.Aec.isPrototypeOf(CN)?CN:null);var
D4=(C.AqG.isPrototypeOf(CN)?CN:null);var AKk=this.YG;var AaK;var Va;var ABf;var MV;
var AzD;if(!BQ&&!D4)return null;AaK=(!!BQ&&BQ.Down)&&!BQ.Jp;Va=(!!BQ&&BQ.Down)&&(
BQ.Jp>0);ABf=(!!BQ&&BQ.Down)&&(BQ.Jp>this.AAf);MV=!!BQ&&!BQ.Down;AzD=!!D4;if(AaK
)this.AAf=((B=(BQ.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afc&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iv=(C.AuT.isPrototypeOf(CN)?CN:null);if(((
!!Iv&&Iv.Down)&&(Iv.AxH!==this))&&A.wa(this.GetExtent(),this.Ab.A7q(Iv.LT))){this.
AK6=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaK){var ApD=0;var Adk;this.Bp=
this.Bp|(1<<BQ.IF);for(Adk=this.Bp&4095;Adk>0;Adk=Adk>>1)if(!!(Adk&1))ApD=ApD+1;
if(ApD===1)this.Bp=(this.Bp|16777216)|(4096<<BQ.IF);}if(MV&&(this.Bp<16777216)){
var IA=this.Ij();var JA=null;if(!!IA){var A36=(!!this.AJ?this.AJ:this.Ab);var A1B=(
!!IA.JB?IA.JB.C1:null);JA=IA.Yi(A.abh(Aaa,BQ.LT),BQ.IF,BQ.N5,A1B,A36,0x0);}if(!!
JA){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ch.GY(A._NewObject(C.Aec,0).
InitializeDown(O,BQ.H0,BQ.N5,Cc,true,BQ.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JA.Ch.GY(A._NewObject(C.Aec,0).InitializeUp(O,BQ.H0,BQ.H0,0,BQ.N5,Cc,false,BQ.
LT,BQ.LT));}}if(MV)this.Bp=(this.Bp&~(1<<BQ.IF))|33554432;if(ABf&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(MV&&BQ.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&
4095))this.AK6=0x0;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Va&&(this.Bp>=67108864
)){var IA=this.Ij();if(!!IA)IA.AUj(null,null,this,this.AK6);}if((Va&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Va=false;MV=true;}if(!!BQ&&!(this.Bp&(4096<<BQ.
IF)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IF)))return this;if(MV&&!(this.Bp&
16777216))return this;if(((AaK||AzD)||Va)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(MV)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215))this.
Bp=0;if(!!BQ){this.Down=AaK||Va;this.YG=this.AQ7(BQ.H0);this.NQ=BQ.NQ;this.H0=BQ.
H0;this.DG=Cc;this.Jp=BQ.Jp;this.N5=BQ.N5;this.NF=BQ.NF;this.IF=BQ.IF;this.Bs=BQ.
Bs;if(BQ.Down&&!BQ.Jp)AKk=false;}if(!!D4){this.Down=true;this.YG=this.AQ7(D4.H0);
this.NQ=D4.NQ;this.H0=D4.H0;this.DG=D4.DG;this.Jp=D4.Jp;this.N5=D4.N5;this.IF=D4.
IF;this.NF=false;this.Bs=D4.Bs;}var A1H=this.Down;if(!!D4)(B=this.ASb)?B[1].call(
B[0],this):null;if((!!BQ&&this.Down)&&!this.Jp)(B=this.BO)?B[1].call(B[0],this):
null;if((!!BQ&&this.Down)&&(this.Jp>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YG)&&!AKk){this.A1N=true;(B=this.Av5)?B[1].call(B[0],this):null;
}if(this.A1N&&(((A1H&&!this.YG)&&AKk)||((!A1H&&this.YG)&&AKk))){this.A1N=false;(
B=this.AEF)?B[1].call(B[0],this):null;}if(!!BQ&&!A1H)(B=this.Ln)?B[1].call(B[0],
this):null;if(!!this.Afc){var AdD=0x0;if(((((this.Afc&0x10)===0x10)&&!!BQ)&&BQ.Down
)&&(BQ.Jp>=1000))AdD=0x10;if((((this.Afc&0x1)===0x1)&&!!D4)&&((D4.LT[1]-D4.AgU[1
])<=-this.Axq))AdD=0x1;if((((this.Afc&0x2)===0x2)&&!!D4)&&((D4.LT[1]-D4.AgU[1])>=
this.Axq))AdD=0x2;if((((this.Afc&0x4)===0x4)&&!!D4)&&((D4.LT[0]-D4.AgU[0])<=-this.
Axq))AdD=0x4;if((((this.Afc&0x8)===0x8)&&!!D4)&&((D4.LT[0]-D4.AgU[0])>=this.Axq)
)AdD=0x8;if(!!AdD){var IA=this.Ij();if(!!IA){this.AK6=AdD;IA.AUj(null,this,this,
AdD);}}}return this;},Yi:function(Da,BG,Oc,Aal,Ac3,Ac2){var B;if(!!Aal&&(Aal!==this
))return null;if((Oc<1)||(Oc>this.A7u))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;if(!!(Ac2&this.Afc))return null;
if(this.Bi0()){var Az=A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qc=A.aaI(Da);var Fr=Cc;if(Qc[0]<Az[0])Fr=[Az[0]-Qc[0],Fr[1]];if(Qc[0]>=
Az[2])Fr=[(Az[2]-Qc[0])-1,Fr[1]];if(Qc[1]<Az[1])Fr=[Fr[0],Az[1]-Qc[1]];if(Qc[1]>=
Az[3])Fr=[Fr[0],(Az[3]-Qc[1])-1];return A._NewObject(C.AuU,0).Initialize(this,Fr
);}}else{var Hy=A.abi(9,A.wf,null);var O;Hy.Set(0,A.aaI(Da));Hy.Set(1,Hy.Get(0));
Hy.Set(2,Hy.Get(0));Hy.Set(3,Hy.Get(0));Hy.Set(4,Hy.Get(0));Hy.Set(1,[Da[0],Hy.Get(
1)[1]]);Hy.Set(2,[Hy.Get(2)[0],Da[1]]);Hy.Set(3,[Da[2],Hy.Get(3)[1]]);Hy.Set(4,[
Hy.Get(4)[0],Da[3]]);Hy.Set(5,Da.slice(0,2));Hy.Set(6,[Da[2],Da[1]]);Hy.Set(7,[Da[
0],Da[3]]);Hy.Set(8,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.AQ7(Hy.Get(O)))return A.
_NewObject(C.AuU,0).Initialize(this,A.abe(Hy.Get(O),Hy.Get(0)));}return null;},Bm9:
function(E){if(E<1)E=1;this.Axq=E;},AFo:function(E){if(E<1)E=1;this.A7u=E;},Ar:function(
E){if(E)this.Cy(0x100000,0x0);else this.Cy(0x0,0x100000);},_Init:function(aArg){
C.ZB._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZB._Mark.call(this,D);if((B=this.ASb)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AEF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av5
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H7={timer:null,AKH:null,At6:null,AF1:null,Zo:null,SB:null,Bp:0,AJf:0,Adn:5000
,ApY:0,AKi:A.wf,Apa:0,AfK:0,EY:0,Amf:0,Aui:0,Ao$:0,AfJ:0,EX:0,Ame:0,Amc:0,NQ:A.wf
,A5I:A.wf,FY:A.wf,Gk:A.wf,DG:A.wf,WN:A.wf,A6q:0.5,A_0:true,AGI:true,ZM:false,XF:
false,XG:false,AoV:false,AAf:0,Kk:function(CZ,aClip,aOffset,Ci,aBlend){},GY:function(
CN){var B;var BQ=(C.Aec.isPrototypeOf(CN)?CN:null);var D4=(C.AqG.isPrototypeOf(CN
)?CN:null);var Iv=(C.AuT.isPrototypeOf(CN)?CN:null);var AaK;var Va;var ABf;var MV;
var AzD;AaK=(!!BQ&&BQ.Down)&&!BQ.Jp;Va=(!!BQ&&BQ.Down)&&(BQ.Jp>0);ABf=(!!BQ&&BQ.
Down)&&(BQ.Jp>this.AAf);MV=!!BQ&&!BQ.Down;AzD=!!D4;if(AaK)this.AAf=((B=(BQ.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaK){var ApD=0;var Adk;this.Bp=this.Bp|(1<<BQ.
IF);for(Adk=this.Bp&4095;Adk>0;Adk=Adk>>1)if(!!(Adk&1))ApD=ApD+1;if(ApD===1)this.
Bp=(this.Bp|16777216)|(4096<<BQ.IF);}if(MV&&(this.Bp<16777216)){var IA=this.Ij();
var JA=null;if(!!IA){var A36=(!!this.AJ?this.AJ:this.Ab);var A1B=(!!IA.JB?IA.JB.
C1:null);JA=IA.Yi(A.abh(Aaa,BQ.LT),BQ.IF,BQ.N5,A1B,A36,0x0);}if(!!JA){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ch.GY(A._NewObject(C.Aec,0).InitializeDown(
O,BQ.H0,BQ.N5,Cc,true,BQ.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ch.GY(A.
_NewObject(C.Aec,0).InitializeUp(O,BQ.H0,BQ.H0,0,BQ.N5,Cc,false,BQ.LT,BQ.LT));}}
if(MV)this.Bp=(this.Bp&~(1<<BQ.IF))|33554432;if(ABf&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MV&&BQ.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&16777215
))this.Bp=0;if(Va&&(this.Bp>=67108864)){var IA=this.Ij();if(!!IA)IA.AUj(null,null
,this,0x0);}if((Va&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Va=false;MV=true;
}if(!!BQ&&!(this.Bp&(4096<<BQ.IF)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IF))
)return this;if(MV&&!(this.Bp&16777216))return this;if(((AaK||AzD)||Va)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(MV)this.Bp=this.Bp&3758100479;
if(MV&&!(this.Bp&16777215))this.Bp=0;if(!!Iv&&(Iv.AxH===this))return null;if((!!
Iv&&Iv.Down)&&(this.AoV||!this.ZM))return null;if((!!Iv&&Iv.Down)&&!A.wa(this.M,
this.Ab.A7q(Iv.LT)))return null;if((!!Iv&&!Iv.Down)&&(!this.AoV||(this.AJf!==Iv.
IF)))return null;if((!BQ&&!D4)&&!Iv)return null;if(!!BQ){this.AoV=AaK||Va;this.AJf=
BQ.IF;this.NQ=BQ.NQ;}if(!!D4)this.AJf=D4.IF;if(!!Iv){this.AoV=Iv.Down;this.AJf=Iv.
IF;}if(!!Iv&&Iv.Down){this.A37();this.EX=(((Iv.Bs-this.Amc)*0.001)*this.AfJ)+this.
EX;this.EY=(((Iv.Bs-this.Aui)*0.001)*this.AfK)+this.EY;if(this.XF)this.EX=0;if(this.
XG)this.EY=0;this.AfJ=0;this.AfK=0;this.XF=false;this.XG=false;this.AKi=this.DG;
this.ApY=Iv.Bs;return this;}if(AaK){this.A37();this.EX=(((BQ.Bs-this.Amc)*0.001)
*this.AfJ)+this.EX;this.EY=(((BQ.Bs-this.Aui)*0.001)*this.AfK)+this.EY;if(this.XF||
!this.ZM)this.EX=0;if(this.XG||!this.ZM)this.EY=0;this.AfJ=0;this.AfK=0;this.XF=
false;this.XG=false;if(!this.ZM){this.ZM=true;(B=this.SB)?B[1].call(B[0],this):null;(
B=this.AKH)?B[1].call(B[0],this):null;}this.AKi=this.DG;this.ApY=BQ.Bs;}if(!!D4){
var G8=A.abe(D4.H0,D4.NQ);var CC=this.DG;if(this.AGI)CC=[this.AKi[0]+G8[0],CC[1]
];CC=[CC[0],this.AKi[1]+G8[1]];if(this.A_0){if(CC[0]<this.Gk[0])CC=[this.Gk[0]+(((
CC[0]-this.Gk[0])/2)|0),CC[1]];else if(CC[0]>this.FY[0])CC=[this.FY[0]+(((CC[0]-
this.FY[0])/2)|0),CC[1]];if(CC[1]<this.Gk[1])CC=[CC[0],this.Gk[1]+(((CC[1]-this.
Gk[1])/2)|0)];else if(CC[1]>this.FY[1])CC=[CC[0],this.FY[1]+(((CC[1]-this.FY[1])
/2)|0)];}else{if(CC[0]<this.Gk[0])CC=[this.Gk[0],CC[1]];else if(CC[0]>this.FY[0]
)CC=[this.FY[0],CC[1]];if(CC[1]<this.Gk[1])CC=[CC[0],this.Gk[1]];else if(CC[1]>this.
FY[1])CC=[CC[0],this.FY[1]];}if(!A.aaX(CC,this.DG)){this.A5I=A.abe(CC,this.DG);this.
DG=CC;(B=this.At6)?B[1].call(B[0],this):null;(B=this.AF1)?B[1].call(B[0],this):null;
}}if((!!Iv&&!Iv.Down)&&((Iv.Bs-this.ApY)>=200)){this.EX=0;this.EY=0;}if(Va&&((BQ.
Bs-this.ApY)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApY)){var G8=D4.DG;
var Bds=1000/(D4.Bs-this.ApY);var AiI=0;var AiJ;if(this.AGI)AiI=G8[0]*Bds;AiJ=G8[
1]*Bds;if((AiI*this.EX)<0)this.EX=0;if((AiJ*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiI)*0.5;this.EY=(this.EY+AiJ)*0.5;this.ApY=D4.Bs;}if(!MV&&!Iv)return this;if(!!
BQ&&BQ.NF){this.EX=0;this.EY=0;}if((this.DG[0]<=this.Gk[0])||(this.DG[0]>=this.FY[
0]))this.EX=0;else if(!this.EX){var ER=this.DG[0];var Fd=this.Gk[0];var EI=this.
FY[0];if(ER<Fd)EI=this.Gk[0];else if(ER>EI)Fd=this.FY[0];else if(this.WN[0]<=1){
Fd=ER;EI=ER;}else{var Adr=(EI-ER)%this.WN[0];EI=(ER-this.WN[0])+Adr;Fd=ER+Adr;if(
EI<this.Gk[0])EI=this.Gk[0];if(Fd>this.FY[0])Fd=this.FY[0];}if((Fd-ER)<=(ER-EI))
ER=Fd;else ER=EI;if(ER!==this.DG[0]){var Ji=ER-this.DG[0];if(Ji>0)this.EX=Math.sqrt((
Ji*2)*this.Adn)+20;if(Ji<0)this.EX=-Math.sqrt((-Ji*2)*this.Adn)-20;this.AfJ=(400-(
this.EX*this.EX))/(2*Ji);this.Ao$=ER;}}else{var BBL=this.EX*this.EX;var Ji=BBL/(
2*this.Adn);var ER=this.DG[0];if(this.EX>0)ER=ER+(Ji|0);if(this.EX<0)ER=ER-(Ji|0
);if(ER>this.FY[0])ER=this.FY[0];else if(ER<this.Gk[0])ER=this.Gk[0];var Bf_=ER;
var Fd=this.Gk[0];var EI=this.FY[0];if(ER<Fd)EI=this.Gk[0];else if(ER>EI)Fd=this.
FY[0];else if(this.WN[0]<=1){Fd=ER;EI=ER;}else{var Adr=(EI-ER)%this.WN[0];EI=(ER-
this.WN[0])+Adr;Fd=ER+Adr;if(EI<this.Gk[0])EI=this.Gk[0];if(Fd>this.FY[0])Fd=this.
FY[0];}if(this.EX>0){if(EI<=this.DG[0])ER=Fd;else if((ER-EI)<(Fd-ER))ER=EI;else ER=
Fd;}else if(Fd>=this.DG[0])ER=EI;else if((ER-EI)>(Fd-ER))ER=Fd;else ER=EI;if(ER!==
this.DG[0]){Ji=ER-this.DG[0];if(ER!==Bf_){var Ai6=ER-Bf_;if(Ai6>0)this.EX=this.EX+
Math.sqrt((Ai6*2)*this.Adn);if(Ai6<0)this.EX=this.EX-Math.sqrt((-Ai6*2)*this.Adn
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfJ=(400-(
this.EX*this.EX))/(2*Ji);this.Ao$=ER;}else this.EX=0;}if((this.DG[1]<=this.Gk[1]
)||(this.DG[1]>=this.FY[1]))this.EY=0;else if(!this.EY){var ES=this.DG[1];var Fd=
this.Gk[1];var EI=this.FY[1];if(ES<Fd)EI=this.Gk[1];else if(ES>EI)Fd=this.FY[1];
else if(this.WN[1]<=1){Fd=ES;EI=ES;}else{var Adr=(EI-ES)%this.WN[1];EI=(ES-this.
WN[1])+Adr;Fd=ES+Adr;if(EI<this.Gk[1])EI=this.Gk[1];if(Fd>this.FY[1])Fd=this.FY[
1];}if((Fd-ES)<=(ES-EI))ES=Fd;else ES=EI;if(ES!==this.DG[1]){var Ji=ES-this.DG[1
];if(Ji>0)this.EY=Math.sqrt((Ji*2)*this.Adn)+20;if(Ji<0)this.EY=-Math.sqrt((-Ji*
2)*this.Adn)-20;this.AfK=(400-(this.EY*this.EY))/(2*Ji);this.Apa=ES;}}else{var BBM=
this.EY*this.EY;var Ji=BBM/(2*this.Adn);var ES=this.DG[1];if(this.EY>0)ES=ES+(Ji|
0);if(this.EY<0)ES=ES-(Ji|0);if(ES>this.FY[1])ES=this.FY[1];else if(ES<this.Gk[1
])ES=this.Gk[1];var Bf$=ES;var Fd=this.Gk[1];var EI=this.FY[1];if(ES<Fd)EI=this.
Gk[1];else if(ES>EI)Fd=this.FY[1];else if(this.WN[1]<=1){Fd=ES;EI=ES;}else{var Adr=(
EI-ES)%this.WN[1];EI=(ES-this.WN[1])+Adr;Fd=ES+Adr;if(EI<this.Gk[1])EI=this.Gk[1
];if(Fd>this.FY[1])Fd=this.FY[1];}if(this.EY>0){if(EI<=this.DG[1])ES=Fd;else if((
ES-EI)<(Fd-ES))ES=EI;else ES=Fd;}else if(Fd>=this.DG[1])ES=EI;else if((ES-EI)>(Fd-
ES))ES=Fd;else ES=EI;if(ES!==this.DG[1]){Ji=ES-this.DG[1];if(ES!==Bf$){var Ai6=ES-
Bf$;if(Ai6>0)this.EY=this.EY+Math.sqrt((Ai6*2)*this.Adn);if(Ai6<0)this.EY=this.EY-
Math.sqrt((-Ai6*2)*this.Adn);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfK=(400-(this.EY*this.EY))/(2*Ji);this.Apa=ES;}else this.EY=
0;}if(!!BQ)this.Amc=BQ.Bs;if(!!Iv)this.Amc=Iv.Bs;this.Aui=this.Amc;this.Ame=this.
DG[0];this.Amf=this.DG[1];this.BBN();return this;},Yi:function(Da,BG,Oc,Aal,Ac3,
Ac2){var B;if(!!Aal&&(Aal!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;if(!this.AGI&&!!(Ac2&0xC))
return null;var Az=A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qc=
A.aaI(Da);var Fr=Cc;if(Qc[0]<Az[0])Fr=[Az[0]-Qc[0],Fr[1]];if(Qc[0]>=Az[2])Fr=[(Az[
2]-Qc[0])-1,Fr[1]];if(Qc[1]<Az[1])Fr=[Fr[0],Az[1]-Qc[1]];if(Qc[1]>=Az[3])Fr=[Fr[
0],(Az[3]-Qc[1])-1];return A._NewObject(C.AuU,0).Initialize(this,Fr);}return null;
},A37:function(){if(!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;
}},BBN:function(){this.timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Mc],this.
timer,0);},Mc:function(G){var B;if(!this.timer)return;var Aun=(this.timer.Bs-this.
Amc)*0.001;var Auo=(this.timer.Bs-this.Aui)*0.001;var BBX=Aun*Aun;var BBY=Auo*Auo;
var AiI=(this.AfJ*Aun)+this.EX;var AiJ=(this.AfK*Auo)+this.EY;var CC=[((((this.AfJ
*0.5)*BBX)+(this.EX*Aun))+this.Ame)|0,((((this.AfK*0.5)*BBY)+(this.EY*Auo))+this.
Amf)|0];if(this.XF&&(Aun>=0.5)){CC=[this.Ao$,CC[1]];this.EX=0;this.AfJ=0;this.Ame=
CC[0];this.XF=false;}else if(this.XF){var LK=1-Math.pow(1-(Aun/0.5),5);CC=[(this.
Ame+((this.Ao$-this.Ame)*LK))|0,CC[1]];}if(this.XG&&(Auo>=0.5)){CC=[CC[0],this.Apa
];this.EY=0;this.AfK=0;this.Amf=CC[1];this.XG=false;}else if(this.XG){var LK=1-Math.
pow(1-(Auo/0.5),5);CC=[CC[0],(this.Amf+((this.Apa-this.Amf)*LK))|0];}if(((this.EX>
0)&&(AiI<0))||((this.EX<0)&&(AiI>0))){AiI=0;CC=[this.DG[0],CC[1]];}if(((this.EY>
0)&&(AiJ<0))||((this.EY<0)&&(AiJ>0))){AiJ=0;CC=[CC[0],this.DG[1]];}if(!this.XF&&(
CC[0]<this.Gk[0])){this.Ame=CC[0];this.Ao$=this.Gk[0];this.Amc=this.timer.Bs;this.
XF=true;}else if(!this.XF&&(CC[0]>this.FY[0])){this.Ame=CC[0];this.Ao$=this.FY[0
];this.Amc=this.timer.Bs;this.XF=true;}if(!this.XG&&(CC[1]<this.Gk[1])){this.Amf=
CC[1];this.Apa=this.Gk[1];this.Aui=this.timer.Bs;this.XG=true;}else if(!this.XG&&(
CC[1]>this.FY[1])){this.Amf=CC[1];this.Apa=this.FY[1];this.Aui=this.timer.Bs;this.
XG=true;}if(((!this.XF&&!!this.EX)&&(AiI>-20))&&(AiI<20)){CC=[this.Ao$,CC[1]];this.
EX=0;this.AfJ=0;this.Ame=CC[0];}if(((!this.XG&&!!this.EY)&&(AiJ>-20))&&(AiJ<20)){
CC=[CC[0],this.Apa];this.EY=0;this.AfK=0;this.Amf=CC[1];}if(!A.aaX(CC,this.DG)){
this.A5I=A.abe(CC,this.DG);this.DG=CC;(B=this.At6)?B[1].call(B[0],this):null;(B=
this.AF1)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XF)&&!this.
XG){this.A37();this.ZM=false;(B=this.Zo)?B[1].call(B[0],this):null;}},ATt:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WN=E;},AS0:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6q)return;this.A6q=E;if(E<(1e-007))E=1e-007;this.Adn=
E*10000;},_Init:function(aArg){C.Es._Init.call(this,aArg);this.__proto__=C.H7;this.
U=0x10011B;},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKH)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF1
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zo)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BN={Ah:null,Ln:null,BO:null,D1:null,ApT:
0,Bs:0,A_V:0,Filter:148,CO:0,DP:0,Bw:true,Down:false,Acj:false,NH:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(Afx
);this.Ah=C1.AKn;C1.AKn=this;},GY:function(CN){var B;if(!!CN&&CN.Bjg(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DP=CN.DP;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_V=this.ApT;this.Acj=this.ApT>0;if(this.Acj)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BO)?B[1].call(B[0],this):null;if(!this.NH)this.ApT=this.
ApT+1;return!this.NH;}if(!CN.Down){this.Acj=this.ApT>1;this.A_V=this.ApT-1;this.
ApT=0;(B=this.Ln)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BN;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuU={Ch:null,AuW:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ch=Ag;this.DG=
aOffset;this.AuW=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuU;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ch)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7B={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A7B;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arh={Nz:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arh;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nz)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AD2={AiR:A.wf,AiQ:A.wf,_Init:function(aArg
){C.Arh._Init.call(this,aArg);this.__proto__=C.AD2;},_className:"Core::LayoutLineContext"
};C.AD3={AAO:A.wf,AAN:A.wf,AiR:A.wf,AiQ:A.wf,_Init:function(aArg){C.Arh._Init.call(
this,aArg);this.__proto__=C.AD3;},_className:"Core::LayoutQuadContext"};C.ANU={C1:
null,Ah:null,Rw:null,RF:null,Ma:null,ApP:null,_Init:function(aArg){this.__proto__=
C.ANU;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApP)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AU0={FM:null,B_:null,B9:null,Bdz:false,
Byq:function(){if(!this.FM)return;var Pg=this.FM;this.FM.Pb=null;this.FM=null;A.
pe([this,this.A3f],this);Pg.A73(this);},BAc:function(G){if(!!this.FM)return;if(!
this.B9)return;this.FM=this.B9;this.B9=this.B9.Ah;if(!!this.B9)this.B9.AJ=null;else
this.B_=null;this.FM.Ah=null;this.Bdz=true;this.FM.SB(this);this.Bdz=false;},BAy:
function(G){A.pe([this,this.BAc],this);},BAx:function(G){A.pe([this,this.BAy],this
);},A3f:function(G){A.pe([this,this.BAx],this);},Bhl:function(Je){if(!Je||!Je.Pb
)return;if(Je.Pb!==this)throw new Error(Aab);var BgE=false;if(this.FM===Je){this.
FM=null;BgE=true;A.pe([this,this.A3f],this);}else{if(!!Je.Ah)Je.Ah.AJ=Je.AJ;else
this.B_=Je.AJ;if(!!Je.AJ)Je.AJ.Ah=Je.Ah;else this.B9=Je.Ah;Je.AJ=null;Je.Ah=null;
}Je.Pb=null;if(BgE)Je.A72(this);},A_3:function(Je,A05){if(!Je)return;if(!!Je.Pb)
throw new Error(W$);Je.Pb=this;if(A05){Je.Ah=this.B9;if(!!this.B9)this.B9.AJ=Je;
else this.B_=Je;this.B9=Je;}else{Je.AJ=this.B_;if(!!this.B_)this.B_.Ah=Je;else this.
B9=Je;this.B_=Je;}if(!this.FM)A.pe([this,this.A3f],this);},_Init:function(aArg){
this.__proto__=C.AU0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkX={Pb:null,AJ:null,Ah:
null,A73:function(Atr){},A72:function(Atr){},SB:function(Atr){this.AmA();},Mk:function(
){if(!!this.Pb&&(this.Pb.FM===this))this.Pb.Byq();},AmA:function(){if(!!this.Pb)
this.Pb.Bhl(this);},AQ3:function(){return!!this.Pb&&(this.Pb.FM===this);},_Init:
function(aArg){this.__proto__=C.AkX;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pb)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUY={At:null,Auk:
null,SB:function(Atr){this.Auk.At=this.At;A.we(this.Auk,0);A.pe([this,this.Bz$],
this);},Bz$:function(G){this.Auk.At=null;this.Auk=null;this.At=null;this.Mk();},
_Init:function(aArg){C.AkX._Init.call(this,aArg);this.__proto__=C.AUY;},_Mark:function(
D){var B;C.AkX._Mark.call(this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxG={_Init:function(){C.AU0._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahv={resource:null,Lb:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahv;this.Init(aArg);A.h7++;},_Done:function(){this.Lb();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mx:null,timer:null,Bs:0,Period:1000,VB:0,Bw:false,Lb:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKP:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PO:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKP(this.VB,E);},Wx:function(E){if(E<0)E=0;if(E===
this.VB)return;this.VB=E;if(this.Bw)this.AKP(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKP(this.VB,this.Period);else this.AKP(0,
0);this.Bs=this.Avn();},Avn:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avn();if(!this.
Period)this.Ar(false);(B=this.Mx)?B[1].call(B[0],this):null;},AxE:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mx)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUs:0,AvZ:0
,AjT:0,GH:0,He:0,Year:0,Bc8:function(AfG,A0x){if(A0x)switch(AfG){case 1:return A.
aci.Bjp;case 2:return A.aci.Bih;case 3:return A.aci.BjI;case 4:return A.aci.Bg2;
case 5:return A.aci.BjM;case 6:return A.aci.Bjs;case 7:return A.aci.Bjr;case 8:return A.
aci.Bg4;case 9:return A.aci.Bol;case 10:return A.aci.Bj6;case 11:return A.aci.Bj5;
case 12:return A.aci.BhJ;default:return A.jV;}else switch(AfG){case 1:return A.aci.
ADW;case 2:return A.aci.ACG;case 3:return A.aci.AD8;case 4:return A.aci.ABH;case
5:return A.aci.AD$;case 6:return A.aci.ADY;case 7:return A.aci.ADX;case 8:return A.
aci.ABO;case 9:return A.aci.AGw;case 10:return A.aci.AEl;case 11:return A.aci.AEj;
case 12:return A.aci.ACr;default:return A.jV;}},Bc6:function(BbF,A0x){if(A0x)switch(
BbF){case 1:return A.aci.BjR;case 2:return A.aci.BpH;case 3:return A.aci.Bqn;case
4:return A.aci.Bps;case 5:return A.aci.Biu;case 6:return A.aci.Boe;case 0:return A.
aci.Bpf;default:return A.jV;}else switch(BbF){case 1:return A.aci.BjQ;case 2:return A.
aci.BpG;case 3:return A.aci.Bqm;case 4:return A.aci.Bpr;case 5:return A.aci.Bit;
case 6:return A.aci.Bod;case 0:return A.aci.Bpe;default:return A.jV;}},Bc5:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JO:function(){var d=this.GH;var K3=this.He;var Dg=this.Year-((
K3<=2)?1:0);var AzE=(((Dg>=0)?Dg:Dg-399)/400)|0;var Amm=Dg-(AzE*400);var U_=(((((
153*(K3+((K3>2)?-3:9)))+2)/5)|0)+d)-1;var Ao8=(((Amm*365)+((Amm/4)|0))-((Amm/100
)|0))+U_;var Qe=((AzE*146097)+Ao8)-719468;return(((Qe*86400)+(this.AjT*3600))+(this.
AvZ*60))+this.AUs;},AFJ:function(E){var B;E+=62162035200;if(E<0)E=0;var Vm=Math.
trunc(E/86400)|0;var AzE=(((Vm>=0)?Vm:Vm-146096)/146097)|0;var Ao8=Vm-(AzE*146097
);var Amm=((((Ao8-((Ao8/1460)|0))+((Ao8/36524)|0))-((Ao8/146096)|0))/365)|0;var Dg=
Amm+(AzE*400);var U_=Ao8-(((365*Amm)+((Amm/4)|0))-((Amm/100)|0));var A2C=(((5*U_
)+2)/153)|0;var d=(U_-((((153*A2C)+2)/5)|0))+1;var K3=A2C+((A2C<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K3<=2)?1:0);this.Um(K3);this.Lp(d);this.AnC(BL+((BL<0)?24:0));this.AnF(O+((O<0)?
60:0));this.AnI(s+((s<0)?60:0));},Zp:function(){if(this.He===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
He===4)||(this.He===6))||(this.He===9))||(this.He===11))return 30;else return 31;
},Blg:function(){var B;var U_=this.Ab1()-1;var AtH=(6+this.Av$())%7;var Ao_=((371+
AtH)-U_)%7;if(this.He===12){var d=this.GH;if((d===31)&&(AtH<3))return 0;if((d===
30)&&(AtH<2))return 0;if((d===29)&&(AtH<1))return 0;}if(Ao_<=3)U_+=Ao_;else U_-=(
7-Ao_);if(U_<0){var d=this.GH;var K3=this.He;this.Year--;this.Lp(31);this.Um(12);
U_=this.Ab1()-1;AtH=(6+this.Av$())%7;Ao_=((371+AtH)-U_)%7;if(Ao_<=3)U_+=Ao_;else
U_-=Ao_;this.Year++;this.Lp(d);this.Um(K3);}return(U_/7)|0;},Ab1:function(){var B;
var d=this.GH;var K3=this.He;var Dg=this.Year;var Af3=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K3){case 2:d+=31;break;case 3:d+=(59+Af3);break;case 4:
d+=(90+Af3);break;case 5:d+=(120+Af3);break;case 6:d+=(151+Af3);break;case 7:d+=(
181+Af3);break;case 8:d+=(212+Af3);break;case 9:d+=(243+Af3);break;case 10:d+=(273+
Af3);break;case 11:d+=(304+Af3);break;case 12:d+=(334+Af3);break;default:;}return d;
},Av$:function(){var B;var d=this.GH;var K3=this.He+((this.He>2)?-2:10);var Dg=this.
Year-((this.He<=2)?1:0);var B3=(Dg/100)|0;Dg%=100;d+=((((((((26*K3)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnI:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUs=E;},AnF:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvZ=E;},AnC:function(E){if(E<0)E=0;if(E>23)E=23;this.AjT=E;},Lp:function(
E){if(E<1)E=1;if(E>31)E=31;this.GH=E;},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.
He=E;},Format:function(Is){var result=A.jV;var inx=0;while(!!(Is.charCodeAt(inx)||
0))if((Is.charCodeAt(inx)||0)===0x25){var AaF=1;inx=inx+1;if((Is.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaF=0;}switch(Is.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GH,2*AaF,10);break;case 0x48:result=result+A.abl(this.AjT,2*AaF,10);break;
case 0x49:if(!(this.AjT%12))result=result+Aac;else result=result+A.abl(this.AjT%
12,2*AaF,10);break;case 0x6D:result=result+A.abl(this.He,2*AaF,10);break;case 0x4D:
result=result+A.abl(this.AvZ,2*AaF,10);break;case 0x70:if(this.AjT<12)result=result+
A.aci.BgK;else result=result+A.aci.BnD;break;case 0x53:result=result+A.abl(this.
AUs,2*AaF,10);break;case 0x77:result=result+A.abl(this.Av$(),AaF,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaF,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaF,10);break;case 0x25:result=result+Aad;break;case 0x6A:result=result+
A.abl(this.Ab1(),3*AaF,10);break;case 0x57:result=result+A.abl(this.Blg(),2*AaF,
10);break;case 0x61:result=result+this.Bc6(this.Av$(),true);break;case 0x41:result=
result+this.Bc6(this.Av$(),false);break;case 0x62:result=result+this.Bc8(this.He
,true);break;case 0x42:result=result+this.Bc8(this.He,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Is.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac4,AfG,BwI,BwZ,Bxe,Bxx){this.Year=Ac4;this.
Um(AfG);this.Lp(BwI);this.AnC(BwZ);this.AnF(Bxe);this.AnI(Bxx);return this;},Initialize:
function(Ah7){this.AFJ(Ah7);return this;},BhO:function(Ah7){if(!Ah7)return A._NewObject(
C.An7,0).Initialize(this.JO());return A._NewObject(C.An7,0).Initialize(this.JO()-
Ah7.JO());},BoR:function(AyY){if(!AyY)return this;return A._NewObject(C.Bs,0).Initialize(
this.JO()-AyY.JO());},J:function(AyY){if(!AyY)return this;return A._NewObject(C.
Bs,0).Initialize(this.JO()+AyY.JO());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An7={AGt:0,AEc:0,ADp:0,Ki:0,JO:function(
){return(((this.Ki*86400)+(this.ADp*3600))+(this.AEc*60))+this.AGt;},AFJ:function(
E){var AK3=1;this.Ki=Math.trunc(E/86400)|0;if(E<0){E=-E;AK3=-1;}this.ADp=AK3*(Math.
trunc(E/3600)%24|0);this.AEc=AK3*(Math.trunc(E/60)%60|0);this.AGt=AK3*(E%60|0);}
,Initialize2:function(BwJ,Bw0,Bxf,BxA){this.Ki=BwJ;this.ADp=Bw0;this.AEc=Bxf;this.
AGt=BxA;return this;},Initialize:function(Ah7){this.AFJ(Ah7);return this;},_Init:
function(aArg){this.__proto__=C.An7;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$p={At:null,Pb:null,Trigger:function(BwD,A05){var Pg=A._NewObject(C.AUY,0);
Pg.Auk=this;Pg.At=BwD;this.Pb.A_3(Pg,A05);},_Init:function(aArg){this.__proto__=
C.A$p;this.Pb=A._GetAutoObject(C.AxG);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$q={JJ:null,Event:null,ASc:null,AtZ:function(G){var B;if(
!this.Event)return;this.JJ=this.Event.At;(B=this.ASc)?B[1].call(B[0],this):null;
this.JJ=null;},BlV:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtZ],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtZ],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$q;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFX={Du:0x1,BCG:0x2,BDN:0x4,BFM:0x8,Bw:0x10,H6:0x20
,BDO:0x40,BEu:0x80,BDJ:0x100,BD_:0x200,BDx:0x400,BE8:0x800,Bk:0x1000,BFU:0x2000,
BER:0x4000,BES:0x8000,Abj:0x10000,BEQ:0x20000,BFh:0x40000,BDo:0x80000,BE0:0x100000
,BDi:0x200000};C.PH={BE9:0x1,BE_:0x2,BCC:0x4,BCD:0x8,BCE:0x10,BCB:0x20};C.AgS={None:
0,BFI:1,BCY:2,BEd:3,BFb:4,BFJ:5,BFK:6,BCZ:7,BC0:8,BEf:9,BEe:10,BFd:11,BFc:12};C.
AuY={None:0,BFG:1,Left:2,BCW:3,ZR:4,A5e:5,BFH:6,Right:7,BCX:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BE$={BF3:0x1,BF0:0x2,BF1:0x4,BF2:
0x8,BEh:0x10,BDQ:0x20};
C._Init=function(){C.Akg.__proto__=C.Ch;C.ZB.__proto__=C.Ch;C.Es.__proto__=C.Ch;C.
P.__proto__=C.Es;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARj.__proto__=
C.Event;C.AuT.__proto__=C.Event;C.Aec.__proto__=C.Event;C.AqG.__proto__=C.Event;
C.Y.__proto__=C.Es;C.CM.__proto__=C.P;C.Dy.__proto__=C.P;C.Bn.__proto__=C.ZB;C.H7.
__proto__=C.Es;C.AD2.__proto__=C.Arh;C.AD3.__proto__=C.Arh;C.AUY.__proto__=C.AkX;
};C._ReInit=function(){var B;if((B=C.AxG._this))B._ReInit(),C.AxG._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxG._this)&&(B._cycle!=D))B._Done(C.AxG._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */