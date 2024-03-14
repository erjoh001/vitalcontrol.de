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
var Cd=[0,0];var BF=[0,0,0,0];var E4="The view does not belong to this group";var
Hm=[1000,740];var IQ="The dialog component is already presented";var Ip="The dialog component is actually not presented";
var O1="No fader to perform the fade-in/out operation";var P1="Trying to use the same fader twice";
var P2="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var E$="View is not in this group";var Lu="Sibling view does not belong to the group";
var P3="No view to remove";var JY="No view to add";var N_="View already in a group";
var P4="Recursive invalidate during active update cycle.";var MF=[-8,-8,9,9];var
S5="No group to end the modal state.";var UO="The group is not modal.";var Z5="No group to obtain the modal state.";
var W1="The group serves already as the \'virtual keyboard\'.";var Iq="The group is already modal.";
var UP="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z6="The method SwitchToDialog() is not available in Core::VerticalList.";
var W2="The method DismissDialog() is not available in Core::VerticalList.";var Z7=
"The method PresentDialog() is not available in Core::VerticalList.";var W3="The method FadeGroup() is not available in Core::VerticalList.";
var Z8="The method RestackBehind() is not available in Core::VerticalList.";var Z9=
"The method RestackTop() is not available in Core::VerticalList.";var UQ="The method Restack() is not available in Core::VerticalList.";
var W4="The method Remove() is not available in Core::VerticalList.";var P5="The method AddBehind() is not available in Core::VerticalList.";
var Z_="The method Add() is not available in Core::VerticalList.";var O2="The Slide Touch Handler:";
var Ri="is already connected with a view.";var W5="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W6=[0,0,170,120];var W7="The method SwitchToDialog() is not available in Core::HorizontalList.";
var W8="The method DismissDialog() is not available in Core::HorizontalList.";var
Z$="The method PresentDialog() is not available in Core::HorizontalList.";var W9=
"The method FadeGroup() is not available in Core::HorizontalList.";var W_="The method RestackBehind() is not available in Core::HorizontalList.";
var S6="The method RestackTop() is not available in Core::HorizontalList.";var UR=
"The method Restack() is not available in Core::HorizontalList.";var US="The method Remove() is not available in Core::HorizontalList.";
var AcL="The method AddBehind() is not available in Core::HorizontalList.";var S7=
"The method Add() is not available in Core::HorizontalList.";var Aaa=[0,0,1,1];var
Afv="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aab="Trying to cancel a task not belonging to this queue!";var W$="Trying to enqueue a task twice!";
var Aac="12";var Aad="%";
C.Ch={Ah:null,AJ:null,Ab:null,Eu:null,U:0x103,JW:0,PH:0x14,AtN:function(BI,Ah2){}
,Ar3:function(E){if(this.JW===E)return;this.JW=E;if(!!this.Ab){var Ai3=this.Ah;var
G8=0;while(!!Ai3&&(E>Ai3.JW)){Ai3=Ai3.Ah;G8=G8+1;}Ai3=this.AJ;while(!!Ai3&&(E<Ai3.
JW)){Ai3=Ai3.AJ;G8=G8-1;}if(!!G8)this.Ab.JU(this,G8);}},AZ:function(E){var B;var
G8=E^this.PH;if(!G8)return;this.PH=E;if(!!this.Eu&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JF],this);this.Ab.Bi([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eu&&((this.U&0x400)===0x400)){this.Eu.Ny.U=this.Eu.
Ny.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},Ij:function(
){var B0=this.Ab;while(!!B0){var IA=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IA)return IA;
B0=B0.Ab;}return null;},Kk:function(CZ,aClip,aOffset,Ci,aBlend){},GetClipping:function(
){return this.GetExtent();},GY:function(CN){return null;},Yh:function(Da,BG,Ob,Aak
,Ac1,Ac0){return null;},Aux:function(Da){return Da;},AuH:function(BI,MJ){return Cd;
},Anf:function(aOffset,Atk){},GetExtent:function(){return BF;},Cy:function(Rp,U1
){var B;if(((this.U&0x200)===0x200))Rp=Rp&~0x400;var A2A=(this.U&~U1)|Rp;var Xt=
A2A^this.U;this.U=A2A;if(!!this.Ab&&!!(Xt&0x14)){var BcL=((this.U&0x14)===0x14);
if(BcL&&!this.Ab.AV)this.Ab.Bb(this);if(!BcL&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACF(this,0x14));}if(!!this.Ab&&!!(Xt&0x403))this.Ab.Bi(this.GetClipping());if(((
!!this.Eu&&!!this.Ab)&&((A2A&0x400)===0x400))&&((Xt&0x1)===0x1)){this.U=this.U|0x800;
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
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akf={EC:A.wf,Er:A.wf
,AtN:function(BI,Ah2){var At=A._NewObject(C.ADY,0);this.Eu=null;At.extent=this.getExtent(
);At.Bd=BI;At.Ny=Ah2;At.AiP=this.Er;At.AiQ=this.EC;this.Eu=At;},AuH:function(BI,
MJ){var B;var EW=this.PH;var At=(C.ADY.isPrototypeOf(B=this.Eu)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var J8=[BI[
2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=y2-y1;var tmp;if(!MJ){var NB=[(B=At.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NB[0]!==J8[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(!HS&&(Qp||!HT))x1=((
x1*J8[0])/NB[0])|0;if(!HT&&(Qp||!HS)){x2=x2-At.Bd[0];x2=((x2*J8[0])/NB[0])|0;x2=
x2-J8[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];if(!Qp){if(HS&&!HT)x2=x1+BY;
else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J8[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(!HU&&(Qq||!HR))y1=((y1*J8[1])/NB[
1])|0;if(!HR&&(Qq||!HU)){y2=y2-At.Bd[1];y2=((y2*J8[1])/NB[1])|0;y2=y2-J8[1];}else
y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qq){if(HU&&!HR)y2=y1+BK;else if(!HU&&
HR)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-At.Bd[3];y1=y1+
BI[1];y2=y2+BI[3];}}else{switch(MJ){case 3:{x1=BI[0];x2=x1+BY;}break;case 4:{x2=
BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;}break;case 2:{y2=BI[3];y1=y2-BK;
}break;default:;}if((MJ===3)||(MJ===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qq=((EW&0x2)===0x2);if(Qq){y1=BI[1];y2=BI[3];}else if(HU&&!HR){y1=
BI[1];y2=y1+BK;}else if(HR&&!HU){y2=BI[3];y1=y2-BK;}else{y1=BI[1]+((((BI[3]-BI[1
])-BK)/2)|0);y2=y1+BK;}}if((MJ===1)||(MJ===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(Qp){x1=BI[0];x2=BI[2];}else if(HS&&!HT
){x1=BI[0];x2=x1+BY;}else if(HT&&!HS){x2=BI[2];x1=x2-BY;}else{x1=BI[0]+((((BI[2]-
BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BK=y2-y1;if(
At.AiQ[0]<At.AiP[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.AiQ[1]<At.AiP[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Er=[x1,y1];this.EC=[x2,y2];}else{this.DL([x1,y1]);this.DC([x2,y2]);this.
Eu=At;}return[BY,BK];},Anf:function(aOffset,Atk){if(Atk){this.Er=A.abf(this.Er,aOffset
);this.EC=A.abf(this.EC,aOffset);}else{this.DL(A.abf(this.Er,aOffset));this.DC(A.
abf(this.EC,aOffset));}},GetExtent:function(){if(!!this.Eu&&this.Eu.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Er[0];var y1=this.Er[
1];var x2=this.EC[0];var y2=this.EC[1];var BY=x2-x1;var BK=y2-y1;var tmp;if(BY<0
)BY=-BY;if(BK<0)BK=-BK;if(BY>=BK){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BK>=BY){
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
Akf;},_className:"Core::LineView"};C.ZB={Ku:A.wf,Mz:A.wf,EC:A.wf,Er:A.wf,AtN:function(
BI,Ah2){var At=A._NewObject(C.ADZ,0);this.Eu=null;At.extent=this.GetExtent();At.
Bd=BI;At.Ny=Ah2;At.AiP=this.Er;At.AiQ=this.EC;At.AAI=this.Mz;At.AAJ=this.Ku;this.
Eu=At;},AuH:function(BI,MJ){var B;var EW=this.PH;var At=(C.ADZ.isPrototypeOf(B=this.
Eu)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var J8=[BI[2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=y2-y1;if(!MJ){var
NB=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NB[0]!==J8[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(!HS&&(
Qp||!HT))x1=((x1*J8[0])/NB[0])|0;if(!HT&&(Qp||!HS)){x2=x2-At.Bd[0];x2=((x2*J8[0]
)/NB[0])|0;x2=x2-J8[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];if(!Qp){if(HS&&
!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J8[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(!HU&&(Qq||!HR))y1=((
y1*J8[1])/NB[1])|0;if(!HR&&(Qq||!HU)){y2=y2-At.Bd[1];y2=((y2*J8[1])/NB[1])|0;y2=
y2-J8[1];}else y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qq){if(HU&&!HR)y2=y1+BK;
else if(!HU&&HR)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-
At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MJ){case 3:{x1=BI[0];x2=x1+BY;}break;
case 4:{x2=BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;}break;case 2:{y2=BI[
3];y1=y2-BK;}break;default:;}if((MJ===3)||(MJ===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(Qq){y1=BI[1];y2=BI[3];}else if(
HU&&!HR){y1=BI[1];y2=y1+BK;}else if(HR&&!HU){y2=BI[3];y1=y2-BK;}else{y1=BI[1]+((((
BI[3]-BI[1])-BK)/2)|0);y2=y1+BK;}}if((MJ===1)||(MJ===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(Qp){x1=BI[0];x2=BI[2];}else if(
HS&&!HT){x1=BI[0];x2=x1+BY;}else if(HT&&!HS){x2=BI[2];x1=x2-BY;}else{x1=BI[0]+((((
BI[2]-BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BK=(
y2-y1)-1;var Ait=At.extent[0];var Aiv=At.extent[1];var AfV=(At.extent[2]-Ait)-1;
var AfU=(At.extent[3]-Aiv)-1;if(!AfV)AfV=1;if(!AfU)AfU=1;if(((this.U&0x100)===0x100
)){this.Er=[x1+((((At.AiP[0]-Ait)*BY)/AfV)|0),y1+((((At.AiP[1]-Aiv)*BK)/AfU)|0)];
this.EC=[x1+((((At.AiQ[0]-Ait)*BY)/AfV)|0),y1+((((At.AiQ[1]-Aiv)*BK)/AfU)|0)];this.
Mz=[x1+((((At.AAI[0]-Ait)*BY)/AfV)|0),y1+((((At.AAI[1]-Aiv)*BK)/AfU)|0)];this.Ku=[
x1+((((At.AAJ[0]-Ait)*BY)/AfV)|0),y1+((((At.AAJ[1]-Aiv)*BK)/AfU)|0)];}else{this.
DL([x1+((((At.AiP[0]-Ait)*BY)/AfV)|0),y1+((((At.AiP[1]-Aiv)*BK)/AfU)|0)]);this.DC([
x1+((((At.AiQ[0]-Ait)*BY)/AfV)|0),y1+((((At.AiQ[1]-Aiv)*BK)/AfU)|0)]);this.Kr([x1+((((
At.AAI[0]-Ait)*BY)/AfV)|0),y1+((((At.AAI[1]-Aiv)*BK)/AfU)|0)]);this.JQ([x1+((((At.
AAJ[0]-Ait)*BY)/AfV)|0),y1+((((At.AAJ[1]-Aiv)*BK)/AfU)|0)]);this.Eu=At;}return[BY+
1,BK+1];},Anf:function(aOffset,Atk){if(Atk){this.Er=A.abf(this.Er,aOffset);this.
EC=A.abf(this.EC,aOffset);this.Mz=A.abf(this.Mz,aOffset);this.Ku=A.abf(this.Ku,aOffset
);}else{this.DL(A.abf(this.Er,aOffset));this.DC(A.abf(this.EC,aOffset));this.Kr(
A.abf(this.Mz,aOffset));this.JQ(A.abf(this.Ku,aOffset));}},GetExtent:function(){
if(!!this.Eu&&this.Eu.isEmpty)return BF;var x1=this.Er[0];var y1=this.Er[1];var x2=
this.Mz[0];var y2=this.Mz[1];if((((this.Ku[0]!==x1)||(this.EC[1]!==y1))||(this.EC[
0]!==x2))||(this.Ku[1]!==y2)){if(this.EC[0]<x1)x1=this.EC[0];if(this.Mz[0]<x1)x1=
this.Mz[0];if(this.Ku[0]<x1)x1=this.Ku[0];if(this.EC[1]<y1)y1=this.EC[1];if(this.
Mz[1]<y1)y1=this.Mz[1];if(this.Ku[1]<y1)y1=this.Ku[1];if(this.Er[0]>x2)x2=this.Er[
0];if(this.EC[0]>x2)x2=this.EC[0];if(this.Ku[0]>x2)x2=this.Ku[0];if(this.Er[1]>y2
)y2=this.Er[1];if(this.EC[1]>y2)y2=this.EC[1];if(this.Ku[1]>y2)y2=this.Ku[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JQ:function(E){var B;if(A.aaX(E,this.Ku))return;if(!!this.Ab&&((
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
A.wf,null);var O=0;var Ic=3;var A18=false;var A19=false;Hy.Set(0,this.Er);Hy.Set(
1,this.EC);Hy.Set(2,this.Mz);Hy.Set(3,this.Ku);while(O<4){var Bgu=Hy.Get(O)[0];var
ALs=Hy.Get(O)[1];var BCa=Hy.Get(Ic)[0];var A4i=Hy.Get(Ic)[1];if(((ALs>KZ[1])!==(
A4i>KZ[1]))||((ALs<KZ[1])!==(A4i<KZ[1]))){var En=((((BCa-Bgu)*(KZ[1]-ALs))/(A4i-
ALs))|0)+Bgu;if(KZ[0]>En)A18=!A18;if(KZ[0]<En)A19=!A19;}Ic=O;O=O+1;}return A18||
A19;},BiS:function(){return((((this.Er[0]===this.Ku[0])&&(this.EC[0]===this.Mz[0
]))&&(this.Er[1]===this.EC[1]))&&(this.Mz[1]===this.Ku[1]))||((((this.Er[0]===this.
EC[0])&&(this.Mz[0]===this.Ku[0]))&&(this.Er[1]===this.Ku[1]))&&(this.EC[1]===this.
Mz[1]));},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.ZB;},
_className:"Core::QuadView"};C.Es={M:A.wg,AtN:function(BI,Ah2){var At=A._NewObject(
C.Ari,0);At.extent=this.M;At.Bd=BI;At.Ny=Ah2;this.Eu=At;},AuH:function(BI,MJ){var
B;var EW=this.PH;var At=this.Eu;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var J8=[BI[2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=
y2-y1;if(!MJ){var NB=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];
if(NB[0]!==J8[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1
)===0x1);if(!HS&&(Qp||!HT))x1=((x1*J8[0])/NB[0])|0;if(!HT&&(Qp||!HS)){x2=x2-At.Bd[
0];x2=((x2*J8[0])/NB[0])|0;x2=x2-J8[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[
2];if(!Qp){if(HS&&!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J8[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(
!HU&&(Qq||!HR))y1=((y1*J8[1])/NB[1])|0;if(!HR&&(Qq||!HU)){y2=y2-At.Bd[1];y2=((y2
*J8[1])/NB[1])|0;y2=y2-J8[1];}else y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qq
){if(HU&&!HR)y2=y1+BK;else if(!HU&&HR)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=
y1+BK;}}}else{y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MJ){case 3:{x1=
BI[0];x2=x1+BY;}break;case 4:{x2=BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;
}break;case 2:{y2=BI[3];y1=y2-BK;}break;default:;}if((MJ===3)||(MJ===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qq=((EW&0x2)===0x2);if(Qq){y1=BI[
1];y2=BI[3];}else if(HU&&!HR){y1=BI[1];y2=y1+BK;}else if(HR&&!HU){y2=BI[3];y1=y2-
BK;}else{y1=BI[1]+((((BI[3]-BI[1])-BK)/2)|0);y2=y1+BK;}}if((MJ===1)||(MJ===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qp=((EW&0x1)===0x1);if(Qp){x1=BI[
0];x2=BI[2];}else if(HS&&!HT){x1=BI[0];x2=x1+BY;}else if(HT&&!HS){x2=BI[2];x1=x2-
BY;}else{x1=BI[0]+((((BI[2]-BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eu=At;}return[x2-x1,y2-y1];},Anf:function(aOffset,Atk){if(Atk)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bi(this.GetClipping());this.Eu=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bi(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JF],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.
__proto__=C.Es;},_className:"Core::RectView"};C.P={B9:null,B_:null,AKn:null,Fz:null
,G9:null,Xu:null,ApP:null,AV:null,G3:255,AzA:0,AzD:0,AzC:0,AzB:0,Init:function(aArg
){this.An();},Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;Ci=((Ci+1)*this.G3)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.Fz||(CZ.C1===this))this.BcA(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ci,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ci&0xFF)<<24);this.Fz.Update();CZ.A5t(aClip,this.Fz,0,A.abh(this.M,aOffset),Cd,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.Fz)return Az;
Az=[].concat(Az[0]-this.AzB,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzD);Az=A.abN(
Az,Az[2]+this.AzC);Az=[].concat(Az.slice(0,3),Az[3]+this.AzA);if(((this.U&0x80000
)===0x80000)){var Ap2=BF;var X;for(X=this.B9;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap2=
A.wC(Ap2,X.GetClipping());Az=A.wC(Az,A.abh(Ap2,this.M.slice(0,2)));}return Az;},
Yh:function(Da,BG,Ob,Aak,Ac1,Ac0){var B;var X=this.B_;var Api=null;var AE=BF;var
J9=null;var A2q=!!this.Xu&&(!!this.Xu.FK||!!this.Xu.B9);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac1){X=Ac1;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J9){J9=X.
AJ;while(!!J9&&!((J9.U&0x200)===0x200))J9=J9.AJ;if(!!J9)AE=A.lb(Da,J9.GetExtent(
));else AE=BF;}if(J9===X){J9=null;AE=BF;}if((!!Aak&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.G9.C1===X)&&!A2q))
)){var extent=X.GetExtent();var AJP=Aak;var Ao5=null;if(AJP===X)AJP=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao5=X.Yh(AE
,BG,Ob,AJP,Ac1,Ac0);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aak===
X))Ao5=X.Yh(Da,BG,Ob,AJP,Ac1,Ac0);X=X.AJ;if(!!Ao5){if(!Api||((Ao5.AuS<Api.AuS)&&(
Ao5.AuS>=0)))Api=Ao5;if(!Ao5.AuS)X=null;}}else X=X.AJ;Ac1=null;}return Api;},Aux:
function(Da){var B;var F;var X=this.B9;var LB=BF;var AAC=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var AtZ=(C.Y.isPrototypeOf(
X)?X:null);LB=A.lb(Da,AtZ.M);AAC=((AtZ.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAC){var AE=A.lb(X.GetClipping(),LB);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.Aux(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.Aux(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cy:function(Rp,U1){var B;
var Tk=this.U;if(((!!this.Ab&&!!!this.Fz)&&((this.U&0x80001)===0x80001))&&((U1&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());C.Es.Cy.call(this,Rp,U1);if((((!!this.
Ab&&!!!this.Fz)&&((this.U&0x1)===0x1))&&((Rp&0x80000)===0x80000))&&!((Tk&0x80000
)===0x80000))this.Ab.Bi(this.GetClipping());var Xt=this.U^Tk;if(!!this.AV&&((Xt&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cy(0x40,0x0);else this.AV.Cy(0x0
,0x40);}if(!!this.G9&&((Xt&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.G9.C1.
U&0x14)===0x14))this.G9.C1.Cy(0x40,0x0);else this.G9.C1.Cy(0x0,0x40);}if(((Xt&0x10
)===0x10)){var X;for(X=this.B9;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.G9.C1===X)))X.Cy(Rp&0x10,U1&
0x10);}if(!!Xt){this.U=this.U|0x8000;A.pe([this,this.ABg],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlV=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKv=[
E[2]-E[0],E[3]-E[1]];var ApY=!A.aaX(AlV,AKv);if(ApY&&!!this.Fz){this.Fz.ArO(AKv);
A.we(this,0);A.we(this.Fz,0);}C.Es.H.call(this,E);if((ApY&&(AlV[0]>0))&&(AlV[1]>
0)){var Bd=[].concat(Cd,AlV);var X=this.B9;while(!!X){if((!X.Eu&&(X.PH!==0x14))&&
!((X.U&0x400)===0x400))X.AtN(Bd,null);X=X.Ah;}}if(ApY){this.U=this.U|0x5000;A.pe([
this,this.ABg],this);}},A3w:function(CN){var Bdv=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKn;if(!Bdv)return null;while(!!D5&&(!D5.Bw||!D5.GY(Bdv)))D5=D5.
Ah;return D5;},BBW:function(G){if(!!this.Fz){this.Fz.C1=this;var AE=A.abg(this.Aux(
A.abh(this.Fz.QI,this.M.slice(0,2))),this.M.slice(0,2));this.Fz.Ava(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BcA(this.Fz,AE,Cd,255,true);this.Fz.
C1=null;}},BcA:function(CZ,aClip,aOffset,Ci,aBlend){var B;var X=this.B9;var LB=BF;
var AAC=true;this.BhP(CZ,aClip,aOffset,Ci,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var AtZ=(C.Y.isPrototypeOf(X)?X:null);AAC=((AtZ.U&0x1)===0x1);LB=aClip;if(!((
AtZ.U&0x80000)===0x80000))LB=A.lb(LB,A.abh(AtZ.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAC){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LB
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kk(CZ,AE,aOffset,Ci,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kk(CZ,AE,aOffset,Ci,aBlend);}}X=X.Ah;}this.BhS(CZ,aClip,aOffset,Ci,aBlend);},Bft:
function(){var B;var A11=((this.U&0x1000)===0x1000);var AiB=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aau=false;var Adi=BF;var K1=BF;var Aav=Cd;var AtJ=0;var AtK=0;
var AtI=0;var Qi=0;var X=this.B_;var J9=null;var AlN=null;while(!!X){if(((X.U&0x800
)===0x800)){Aau=true;X.U=X.U&~0x800;}if(Aau&&((X.U&0x200)===0x200)){Aau=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgQ)X.U=X.U|0x1000;}X=X.AJ;}Aau=false;X=this.B9;
if(A11){this.U=this.U&~0x1000;A11=!((AiB[0]>=AiB[2])||(AiB[1]>=AiB[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlN&&(AtI!==Qi)){var AdG=X;var AKR=0;var AAX=Adi[2]-
Adi[0];var Aza=Adi[3]-Adi[1];var AJE=0;var Ap9=Cd;do if(((AdG.U&0x200)===0x200))
AdG=null;else if(((AdG.U&0x401)===0x401)){Ap9=[(B=AdG.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qi===3)||(Qi===4))AAX=AAX-Ap9[0];if((Qi===1)||(Qi===2))Aza=Aza-Ap9[1];
if(!AlN||((AAX>=0)&&(Aza>=0))){AlN=AdG;AdG=AdG.Ah;if((Qi===3)||(Qi===4)){AAX=AAX-
AtJ;if(Ap9[1]>AKR)AKR=Ap9[1];}if((Qi===1)||(Qi===2)){Aza=Aza-AtK;if(Ap9[0]>AJE)AJE=
Ap9[0];}}else AdG=null;}else AdG=AdG.Ah;while(!!AdG);if(!AlN)AlN=J9;K1=Adi;switch(
AtI){case 9:case 11:K1=[].concat(K1.slice(0,3),K1[1]+AKR);break;case 10:case 12:
K1=A.abP(K1,K1[3]-AKR);break;case 5:case 7:K1=A.abN(K1,K1[0]+AJE);break;case 6:case
8:K1=[].concat(K1[2]-AJE,K1.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eu&&(X.Eu.Ny!==J9))X.Eu=null;if((!X.Eu&&Aau)&&((X.PH!==0x14)||!!Qi))X.
AtN(K1,J9);}if(!!X.Eu){if(A11&&!((X.U&0x400)===0x400))X.AuH(AiB,0);if(Aau&&((X.U&
0x400)===0x400)){var C3=X.AuH(A.abh(K1,Aav),Qi);if(((X.U&0x1)===0x1)){var Bq=Cd;
switch(Qi){case 3:Bq=[C3[0]+AtJ,Bq[1]];break;case 4:Bq=[-C3[0]-AtJ,Bq[1]];break;
case 1:Bq=[Bq[0],C3[1]+AtK];break;case 2:Bq=[Bq[0],-C3[1]-AtK];break;default:;}Aav=
A.abf(Aav,Bq);}}}if(((X.U&0x200)===0x200)){if(Aau)A.pe(J9.El,J9);Aau=((X.U&0x1000
)===0x1000);J9=(C.Y.isPrototypeOf(X)?X:null);if(Aau){X.U=X.U&~0x1000;AtI=J9.AgQ;
Qi=AtI;Adi=A.abh(J9.M,J9.Br);K1=Adi;Aav=Cd;AtJ=J9.Space+J9.AUL;AtK=J9.Space;Aau=
!((Adi[0]>=Adi[2])||(Adi[1]>=Adi[3]));AlN=null;switch(AtI){case 9:case 10:Qi=3;break;
case 11:case 12:Qi=4;break;case 5:case 6:Qi=1;break;case 7:case 8:Qi=2;break;default:;
}}if(Aau)this.Bi(J9.M);}if(X===AlN){switch(AtI){case 9:case 11:Aav=[0,(Aav[1]+(K1[
3]-K1[1]))+AtK];break;case 10:case 12:Aav=[0,(Aav[1]-(K1[3]-K1[1]))-AtK];break;case
5:case 7:Aav=[(Aav[0]+(K1[2]-K1[0]))+AtJ,0];break;case 6:case 8:Aav=[(Aav[0]-(K1[
2]-K1[0]))-AtJ,0];break;default:;}AlN=null;}X=X.Ah;}if(Aau)A.pe(J9.El,J9);this.U=
this.U&~0x2000;this.Bk([AiB[2]-AiB[0],AiB[3]-AiB[1]]);},JF:function(G){A.pe([this
,this.ABg],this);},ABg:function(G){var B;var BB4=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bft();}if(((this.U&0x8000)===
0x8000)||BB4){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E4);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cy(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cy(0x60,0x0);else E.Cy(0x20
,0x0);}},BaO:function(Aq){this.Bb(Aq);},ASj:function(){return!!this.Fz;},ArH:function(
E){var B;if(!!this.Fz===E)return;if(!E){this.Fz.AEl=null;this.Fz.ArO(Cd);this.Fz=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());if(E){this.
Fz=A._NewObject(A.Graphics.Canvas,0);this.Fz.ArO([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.Fz.AEl=[this,this.BBW];}A.we(this,0);},A8h:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cy(0x100000,0x0);else this.Cy(0x0
,0x100000);},Dr:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G3)return;
this.G3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bi(this.GetClipping());},AZ4:
function(Aq){this.Dr(Aq);},Aj:function(E){if(E)this.Cy(0x400,0x0);else this.Cy(0x0
,0x400);},Blg:function(E){if(E)this.Cy(0x2,0x0);else this.Cy(0x0,0x2);},Fk:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},ExtendClipping:function(AoF,AoG,AoH,AoE){var B;var Ay3=this.M;var Rv=
Ay3;if(AoF<0)AoF=0;if(AoF>255)AoF=255;if(AoG<0)AoG=0;if(AoG>255)AoG=255;if(AoH<0
)AoH=0;if(AoH>255)AoH=255;if(AoE<0)AoE=0;if(AoE>255)AoE=255;Rv=[].concat(Rv[0]-(
Math.max(AoF,this.AzB)&0xFF),Rv.slice(1,4));Rv=A.abN(Rv,Rv[2]+(Math.max(AoG,this.
AzC)&0xFF));Rv=A.abP(Rv,Rv[1]-(Math.max(AoH,this.AzD)&0xFF));Rv=[].concat(Rv.slice(
0,3),Rv[3]+(Math.max(AoE,this.AzA)&0xFF));if(AoF!==this.AzB){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.Fz)&&!((this.U&0x80000)===0x80000)){var Az=Rv;Az=A.abN(Az
,Ay3[0]);this.Ab.Bi(Az);}this.AzB=AoF&0xFF;}if(AoG!==this.AzC){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.Fz)&&!((this.U&0x80000)===0x80000)){var Az=Rv;Az=[].
concat(Ay3[2],Az.slice(1,4));this.Ab.Bi(Az);}this.AzC=AoG&0xFF;}if(AoH!==this.AzD
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.Fz)&&!((this.U&0x80000)===0x80000
)){var Az=Rv;Az=[].concat(Az.slice(0,3),Ay3[1]);this.Ab.Bi(Az);}this.AzD=AoH&0xFF;
}if(AoE!==this.AzA){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.Fz)&&!((this.
U&0x80000)===0x80000)){var Az=Rv;Az=A.abP(Az,Ay3[3]);this.Ab.Bi(Az);}this.AzA=AoE&
0xFF;}},BhS:function(CZ,aClip,aOffset,Ci,aBlend){},BhP:function(CZ,aClip,aOffset
,Ci,aBlend){},GetMaximalSize:function(){return Hm;},GetMinimalSize:function(){return Cd;
},AUS:function(Ir,Oa,Xf,S_,S$,Ah3,O7,Ro,Lz,Lx,Ly){var B;if(!this.G9){this.AkK(Ir
,Oa,Xf,S_,S$,null,null,Lz,Lx,Ly);return;}var AlU=this.G9;var JC=AlU.Ah;if(((Ir.U&
0x10000)===0x10000)&&(this.G9.C1!==Ir))throw new Error(IQ);var Ado=A._NewObject(
C.ANU,0);var Rx=AlU.Rx;var RG=null;var Ma=null;if(!!JC){RG=JC.RG;Ma=JC.Ma;}if(!!
JC&&!!AlU.ApO)RG=AlU.ApO;if(!!JC&&!!O7)Ma=O7;if(!!Ah3)Rx=Ah3;if(!Oa)Oa=A._GetAutoObject(
A.acl.AsA);if(!Xf)Xf=Oa;if(!S$)S$=S_;if(!S_)S_=S$;Ado.Rx=Xf;Ado.Ma=S_;Ado.RG=S$;
Ado.ApO=Ro;Ado.C1=Ir;Ado.Ah=this.G9.Ah;this.G9.Ah=null;this.G9=Ado;if(this.AV===
Ir)this.Bb(null);AlU.C1.Cy(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ir.U&0x4)===
0x4))Ir.Cy(0x10040,0x0);else Ir.Cy(0x10000,0x0);if(!!Ma){this.NN(JC.C1,Ma.Ad9(),
null,null,Ly);this.NN(AlU.C1,Rx.R8(),null,null,true);this.NN(Ado.C1,Oa.R9(),Lz,Lx
,true);}else if(!!RG){this.NN(JC.C1,RG.Ad_(),null,null,Ly);this.NN(AlU.C1,Rx.R8(
),null,null,true);this.NN(Ado.C1,Oa.R9(),Lz,Lx,true);}else if(!!Rx){this.NN(AlU.
C1,Rx.R8(),null,null,Ly);this.NN(Ado.C1,Oa.R9(),Lz,Lx,true);}else this.NN(Ado.C1
,Oa.R9(),Lz,Lx,Ly);},AqE:function(Ir,Ah3,O7,Ro,Lz,Lx,Ly){var B;if(!this.G9)return;
if(!Ir)return;var KB=this.G9;var JC=this.G9.Ah;var ApU=null;while((!!KB&&(KB.C1!==
Ir))&&!!KB.Ah){ApU=KB;KB=JC;JC=KB.Ah;}if(!KB||(KB.C1!==Ir))throw new Error(Ip);if(
!ApU){this.G9=JC;KB.Ah=null;}else{ApU.Ah=JC;KB.Ah=null;}KB.C1.Cy(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JC)&&!ApU)&&((JC.C1.U&0x200000)===0x200000))JC.C1.Cy(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JC)&&!ApU)&&((JC.C1.U&0x4)===0x4))JC.C1.Cy(
0x40,0x0);var Rx=KB.Rx;var RG=null;var Ma=null;if(!!JC)RG=JC.RG;if(!!JC&&!!KB.ApO
)RG=KB.ApO;if(!!JC&&!!Ro)RG=Ro;if(!!ApU&&!!JC)Ma=JC.Ma;if((!!ApU&&!!JC)&&!!O7)Ma=
O7;if(!!Ah3)Rx=Ah3;if(!!Ma){this.NN(JC.C1,Ma.Ad9(),null,null,Ly);this.NN(KB.C1,Rx.
R8(),Lz,Lx,true);}else if(!!RG){this.NN(JC.C1,RG.Ad_(),null,null,Ly);this.NN(KB.
C1,Rx.R8(),Lz,Lx,true);}else this.NN(KB.C1,Rx.R8(),Lz,Lx,Ly);},AkK:function(Ir,Oa
,Xf,S_,S$,O7,Ro,Lz,Lx,Ly){var B;if(!Ir)return;if(!!this.G9&&(this.G9.C1===Ir)){this.
AUS(Ir,Oa,Xf,S_,S$,null,O7,Ro,Lz,Lx,Ly);return;}if(((Ir.U&0x10000)===0x10000))throw new
Error(IQ);var KB=A._NewObject(C.ANU,0);if(!!this.G9&&!this.G9.Ma){if(!Ro)Ro=O7;if(
!O7)O7=Ro;}var Ma=null;if(!!this.G9)Ma=this.G9.Ma;if(!!this.G9&&!!O7)Ma=O7;if(!Oa
)Oa=A._GetAutoObject(A.acl.AsA);if(!Xf)Xf=Oa;if(!S$)S$=S_;if(!S_)S_=S$;KB.Rx=Xf;
KB.Ma=S_;KB.RG=S$;KB.ApO=Ro;if(this.AV===Ir)this.Bb(null);if(!!this.G9&&((this.G9.
C1.U&0x200000)===0x200000))this.G9.C1.Cy(0x0,0x10);if(!!this.G9)this.G9.C1.Cy(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Ir.U&0x4)===0x4))Ir.Cy(0x10040,0x0);else Ir.
Cy(0x10000,0x0);KB.C1=Ir;KB.Ah=this.G9;this.G9=KB;if(!!Ma){this.NN(this.G9.Ah.C1
,Ma.Ad9(),null,null,Ly);this.NN(Ir,Oa.R9(),Lz,Lx,true);}else this.NN(Ir,Oa.R9(),
Lz,Lx,Ly);},A6H:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7j:function(
KZ){var tmp=this;while(!!tmp){KZ=A.abe(KZ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KZ;
},BiO:function(KZ){var tmp=this;while(!!tmp){KZ=A.abf(KZ,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KZ;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var Gz=null;var A2q=!!this.Xu&&(!!this.Xu.FK||!!this.Xu.B9);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.G9&&!A2q)Gz=this.G9.C1.DispatchEvent(CN);if(!Gz&&!!B0)
Gz=B0.DispatchEvent(CN);else if(!Gz&&!!X)Gz=X.GY(CN);if(!Gz)Gz=this.GY(CN);if(!Gz
)Gz=this.A3w(CN);return Gz;},BroadcastEventAtPosition:function(CN,Hw,aFilter){var
B;var X=this.B_;var Gz=null;while(!!X&&!Gz){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hw)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)Gz=B0.
BroadcastEventAtPosition(CN,A.abe(Hw,B0.M.slice(0,2)),aFilter);else Gz=X.GY(CN);
}X=X.AJ;}if(!Gz)Gz=this.GY(CN);return Gz;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B_;var Gz=null;while(!!X&&!Gz){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)Gz=B0.BroadcastEvent(CN,aFilter
);else Gz=X.GY(CN);}X=X.AJ;}if(!Gz)Gz=this.GY(CN);if(!Gz)Gz=this.A3w(CN);return Gz;
},Bk:function(aSize){},Ai:function(Ae){},Bi4:function(){this.U=this.U|0x4000;A.pe([
this,this.ABg],this);},An:function(){this.U=this.U|0x8000;A.pe([this,this.ABg],this
);},Bi:function(Da){var B;var B0=this;while(!!B0&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aar=B0.Fz;if(!B0.Ab&&(B0!==this)){B0.Bi(Da);return;}if(!!Aar){var BzJ=Aar.
QI;Aar.QI=A.wC(Aar.QI,Da);if(!A.aaY(BzJ,Aar.QI)){A.we(B0,0);A.we(Aar,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Da=A.abh(Da,Az.slice(0,2));if(!!B0.Fz||!((B0.
U&0x80000)===0x80000)){if(!!!B0.Fz){Az=[].concat(Az[0]-B0.AzB,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzD);Az=A.abN(Az,Az[2]+B0.AzC);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzA);}Da=A.lb(Da,Az);}B0=B0.Ab;}},QD:function(Ag,Gw,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agb=A.aaI(Ag.GetExtent());var X=Ag;var A1a=null;var
Bcd=0;var IV=0x10000;var AKN;if(((aFilter&0x10000)===0x10000))IV=0x0;var top=((Gw===
4)||(Gw===1))||(Gw===6);var bottom=((Gw===5)||(Gw===3))||(Gw===8);var left=((Gw===
2)||(Gw===1))||(Gw===3);var right=((Gw===7)||(Gw===6))||(Gw===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B_;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IV||!((B=IV)&&((X.U&B)===B
))))for(AKN=0;AKN<2;AKN++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKN){if((left&&(s[0]>s[1]))&&(Az[2]<Agb[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agb[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agb[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agb[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agb);var
Rr=Bq;if(Rr[0]<0)Rr=[-Rr[0],Rr[1]];if(Rr[1]<0)Rr=[Rr[0],-Rr[1]];if(((((!left||(Bq[
0]<=-Rr[1]))&&(!right||(Bq[0]>=Rr[1])))&&(!top||(Bq[1]<=-Rr[0])))&&(!bottom||(Bq[
1]>=Rr[0])))&&((Rr[0]>0)||(Rr[1]>0))){var Rz=Bq[0];var RA=Bq[1];var Ji=Math.sqrt((
Rz*Rz)+(RA*RA));var AKm=0;if(!left&&!right)AKm=Ji/Rr[1];if(!top&&!bottom)AKm=Ji/
Rr[0];Ji=(Ji*AKm)*AKm;if((Ji<Bcd)||!A1a){Bcd=Ji;A1a=X;}}}}return A1a;},AqL:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;var IV=0x10000;
if(((aFilter&0x10000)===0x10000))IV=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TL:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;
var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACF:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlS=Ag.Ah;var Al5=Ag.AJ;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;
while(!!AlS||!!Al5){if((!!AlS&&(!aFilter||((B=aFilter)&&((AlS.U&B)===B))))&&(!IV||
!((B=IV)&&((AlS.U&B)===B))))return AlS;if((!!Al5&&(!aFilter||((B=aFilter)&&((Al5.
U&B)===B))))&&(!IV||!((B=IV)&&((Al5.U&B)===B))))return Al5;if(!!AlS)AlS=AlS.Ah;if(
!!Al5)Al5=Al5.AJ;}return null;},Db:function(aFilter){var B;var X=this.B9;var AE=
BF;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IV||!((B=IV)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NN:function(KA,FJ,Lz,Lx
,Ly){var B;if(!KA)return;if(!FJ)throw new Error(O1);if((!!FJ.P||!!FJ.Ab)||!!FJ.Pg
)throw new Error(P1);if(!!KA.Ab&&(KA.Ab!==this))throw new Error(P2);if(!this.Xu)
this.Xu=A._NewObject(C.AUX,0);FJ.Ab=this;FJ.P=KA;FJ.AKx=Lx;FJ.A2R=Lz;if(!!KA.ApP
)KA.ApP.Pg.BnW(KA.ApP);KA.ApP=FJ;KA.U=KA.U|0x20000;if((Ly&&!!this.Xu.B_)&&!this.
Xu.B_.AQ3())(A.acl.ACA.isPrototypeOf(B=this.Xu.B_)?B:null).A4x(FJ);else{var Pg=A.
_NewObject(A.acl.ACA,0);Pg.A4x(FJ);this.Xu.A_U(Pg,false);}},Ahu:function(Ag,J2){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(E$);if(!!J2&&(J2.
Ab!==this))throw new Error(Lu);if(Ag.Ah===J2)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B_=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;var Gy=
null;var It=this.B_;var LP=Ag.JW;if(!!J2){Gy=J2;It=J2.AJ;}if(!!Gy&&(LP>Gy.JW))LP=
Gy.JW;if(!!It&&(LP<It.JW))LP=It.JW;if(LP!==Ag.JW){Ag.Ab=null;Ag.Ar3(LP);Ag.Ab=this;
}if(!J2){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.B_;Ag.Ah=null;this.B_=Ag;}else{Ag.
Ah=J2;Ag.AJ=J2.AJ;J2.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B9===J2)this.B9=Ag;if(((
Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},ZE:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(E$);if(!Ag.Ah)return;var It=this.B_;var
LP=Ag.JW;while(!!It&&(It.JW>LP))It=It.AJ;if(((It===Ag)||!It)||(It.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=It;Ag.Ah=It.Ah;It.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping(
));},JU:function(Ag,P$){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(E$);var It=Ag;var Gy=Ag;var LP=Ag.JW;while(((P$>0)&&!!It.Ah)&&(It.Ah.JW<=LP
)){It=It.Ah;P$=P$-1;}while(((P$<0)&&!!Gy.AJ)&&(Gy.AJ.JW>=LP)){Gy=Gy.AJ;P$=P$+1;}
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
ACF(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag
)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cy(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());},AL7:function(Ag,J2
){var B;if(!Ag)throw new Error(JY);if(!!Ag.Ab)throw new Error(N_);if(!!J2&&(J2.Ab
!==this))throw new Error(Lu);var Gy=null;var It=this.B_;var LP=Ag.JW;if(!!J2){Gy=
J2;It=J2.AJ;}if(!!Gy&&(LP>Gy.JW))LP=Gy.JW;if(!!It&&(LP<It.JW))LP=It.JW;if(LP!==Ag.
JW){Ag.Ab=null;Ag.Ar3(LP);Ag.Ab=this;}if(!J2){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.
B_;this.B_=Ag;}else{Ag.Ah=J2;Ag.AJ=J2.AJ;J2.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B9===J2)this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bi(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AON()===Ag))Ag.Cy(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cy(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JF],this);}},J:function(Ag,P$){var B;if(!Ag)throw new Error(
JY);if(!!Ag.Ab)throw new Error(N_);var Gy=null;var LP=Ag.JW;if(((P$<0)&&!!this.B_
)&&(this.B_.JW>=LP)){Gy=this.B_;P$=P$+1;}while((((P$<0)&&!!Gy)&&!!Gy.AJ)&&(Gy.AJ.
JW>=LP)){Gy=Gy.AJ;P$=P$+1;}if((!Gy&&!!this.B_)&&(this.B_.JW>LP))Gy=this.B_;while((
!!Gy&&!!Gy.AJ)&&(Gy.AJ.JW>LP))Gy=Gy.AJ;if(!Gy){Ag.Ab=this;Ag.AJ=this.B_;if(!!this.
B_)this.B_.Ah=Ag;if(!this.B9)this.B9=Ag;this.B_=Ag;}else{Ag.Ab=this;Ag.AJ=Gy.AJ;
Ag.Ah=Gy;Gy.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B9=Ag;}if(((Ag.U&0x1)===0x1))
this.Bi(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AON()===Ag))Ag.Cy(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cy(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}},A8j:function(){return this.
AV;},Awe:function(){return this.G3;},_Init:function(aArg){C.Es._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Es._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKn)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.G9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RD:null,JB:null,Fp:A.abi(10,null
,null),Atw:null,Ail:null,ABi:0,Ia:0,L8:A.abi(10,0,null),AJK:A.abi(10,A.wg,null),
Xs:A.abi(10,0,null),AfT:A.abi(10,A.wf,null),AtB:A.abi(10,0,null),Aik:A.abi(10,A.
wf,null),Xr:A.abi(10,A.wf,null),Rw:A.abi(10,A.wf,null),Ac$:A.abi(10,A.wf,null),EP:
0,AJ9:0,AJ8:0,Op:A.abi(4,0,null),Ke:A.abi(4,A.wg,null),Ka:0,Az1:0,AtP:0,AzN:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ij:function(){return this;
},Kk:function(CZ,aClip,aOffset,Ci,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.Ava(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kk.call(this,CZ,aClip
,aOffset,Ci,aBlend);},Cy:function(Rp,U1){var B;C.P.Cy.call(this,Rp,U1);if(!this.
Ab&&(((Rp&0x1)===0x1)||((U1&0x1)===0x1)))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rp&0x2)===0x2)||((U1&0x2)===0x2)))this.Bi([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArH:
function(E){var B;var BzH=this.Fz;C.P.ArH.call(this,E);if(((BzH!==this.Fz)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Dr:function(
E){var B;var BQ=this.G3;C.P.Dr.call(this,E);if(((BQ!==this.G3)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvN=!!this.Ia;if(!!this.Ia)CN.Bs=this.Ia;}var Gz=null;if(!!this.
JB){Gz=this.JB.C1.DispatchEvent(CN);if(!Gz)Gz=this.GY(CN);if(!Gz)Gz=this.A3w(CN);
this.Ia=0;return Gz;}Gz=C.P.DispatchEvent.call(this,CN);this.Ia=0;return Gz;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvN=!!this.Ia;if(!!this.Ia)CN.Bs=this.Ia;}var Gz=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ia=0;return Gz;},Bi:function(Da){var
B;if(this.ABi>0)throw new Error(P4);if(!!this.Fz&&!this.Ab){if(((B=this.Fz.QI)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.Fz,0);}this.Fz.QI=A.wC(this.Fz.QI
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bi.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Ka;O=O+1)if(!(((B=A.lb(this.Ke.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Ke.Set(O,A.wC(this.Ke.Get(O),Da));this.Op.Set(O,A.aaH(this.Ke.Get(O
)));return;}if(this.Ka<3){this.Ke.Set(this.Ka,Da);this.Op.Set(this.Ka,A.aaH(Da));
this.Ka=this.Ka+1;return;}var Ic;var RC;var Az0=0;var Az3=0;var Bcc=2147483647;this.
Ke.Set(this.Ka,Da);this.Op.Set(this.Ka,A.aaH(Da));for(Ic=0;Ic<=this.Ka;Ic=Ic+1)for(
RC=Ic+1;RC<=this.Ka;RC=RC+1){var ALf=A.aaH(A.wC(this.Ke.Get(Ic),this.Ke.Get(RC))
);var Be5=((ALf<<8)/(this.Op.Get(Ic)+this.Op.Get(RC)))|0;if(Be5<Bcc){Bcc=Be5;Az0=
Ic;Az3=RC;}}this.Ke.Set(Az0,A.wC(this.Ke.Get(Az0),this.Ke.Get(Az3)));this.Op.Set(
Az0,A.aaH(this.Ke.Get(Az0)));if(Az3!==this.Ka){this.Ke.Set(Az3,this.Ke.Get(this.
Ka));this.Op.Set(Az3,this.Op.Get(this.Ka));}},Byk:function(){var LJ=A._NewObject(
C.AqG,0);LJ.AvN=!!this.Ia;if(!!this.Ia)LJ.Bs=this.Ia;return LJ;},Ao3:function(){
var LJ=A._NewObject(C.Aea,0);LJ.AvN=!!this.Ia;if(!!this.Ia)LJ.Bs=this.Ia;return LJ;
},AtA:function(){var LJ=A._NewObject(C.AuP,0);LJ.AvN=!!this.Ia;if(!!this.Ia)LJ.Bs=
this.Ia;return LJ;},Byp:function(G){var O;var Api=false;for(O=0;O<10;O=O+1)if(!!
this.Fp.Get(O)){var pos=this.Rw.Get(O);var B0=this.Fp.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fp.Get(O)!==this)){
var tmp=this.Fp.Get(O);this.EP=O;this.Fp.Set(O,null);tmp.GY(this.Ao3().InitializeUp(
O,this.Aik.Get(O),this.AfT.Get(O),this.Xs.Get(O),this.L8.Get(O)+1,this.Xr.Get(O)
,false,this.Rw.Get(O),this.Ac$.Get(O)));this.BroadcastEvent(this.AtA().InitializeUp(
O,this.L8.Get(O)+1,false,tmp,this.Rw.Get(O)),0x18);}else{this.Xs.Set(O,(this.Ail.
Bs-this.AtB.Get(O))|0);if(this.Xs.Get(O)<10)this.Xs.Set(O,10);this.EP=O;this.Fp.
Get(O).GY(this.Ao3().InitializeHold(O,pos,this.AfT.Get(O),this.Xs.Get(O),this.L8.
Get(O)+1,this.Xr.Get(O),this.Rw.Get(O),this.Ac$.Get(O)));Api=true;}}if(!Api)this.
Ail.Ar(false);},GetFPS:function(){var ticksCount=0;var BcQ=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ9&&(ticksCount>this.AJ9))BcQ=((this.AJ8*1000)/((
ticksCount-this.AJ9)|0))|0;this.AJ8=0;this.AJ9=ticksCount;return BcQ;},Update:function(
){var B;if(!this.Atw)this.Atw=A._NewObject(A.Graphics.Canvas,0);this.Atw.ArO([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Atw.Update();return this.UpdateGE20(this.Atw);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BF;var Agl=this.UpdateCanvas(
CZ,Cd);this.EndUpdate();return Agl;},EndUpdate:function(){if(this.Ka>0){this.AJ8=
this.AJ8+1;this.Ka=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Agl=BF;var Bx3=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var O;var Ic=this.Ka;this.ABi=this.
ABi+1;CZ.C1=this;for(O=0;(O<Ic)&&(O<4);O=O+1)if(this.Op.Get(O)>0){this.Kk(CZ,A.abg(
this.Ke.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agl=A.wC(Agl,A.lb(Bx3
,this.Ke.Get(O)));}else Ic=Ic+1;CZ.C1=null;this.ABi=this.ABi-1;if(!((Agl[0]>=Agl[
2])||(Agl[1]>=Agl[3])))return A.abg(Agl,aOffset);else return Agl;},GetUpdateRegion:
function(AI6){var O;var Ic=this.Ka;if(AI6<0)return BF;for(O=0;(O<Ic)&&(O<4);O=O+
1)if(!this.Op.Get(O)){Ic=Ic+1;AI6=AI6+1;}else if(O===AI6)return this.Ke.Get(O);return BF;
},BeginUpdate:function(){var B;var O;if(!!this.Ka&&!A.aaY(this.Ke.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bf9=A.abi(3,A.wg,null);var Bf8=this.Ka;for(O=0;
O<Bf8;O++)Bf9.Set(O,this.Ke.Get(O));for(O=0;O<Bf8;O++){var Bfo=A.abh(Bf9.Get(O),
this.M.slice(0,2));var Bfp=this.Aux(Bfo);if(!A.aaY(Bfo,Bfp))this.Bi(A.abg(Bfp,this.
M.slice(0,2)));}}var Ic;var RC;for(Ic=0;Ic<(this.Ka-1);Ic++)if(this.Op.Get(Ic)>0
)for(RC=Ic+1;RC<this.Ka;RC++)if(this.Op.Get(RC)>0){var ALf=A.aaH(A.wC(this.Ke.Get(
Ic),this.Ke.Get(RC)));if(((ALf-this.Op.Get(Ic))-this.Op.Get(RC))<0){this.Ke.Set(
Ic,A.wC(this.Ke.Get(Ic),this.Ke.Get(RC)));this.Op.Set(Ic,ALf);this.Op.Set(RC,0);
}}for(O=this.Ka-1;O>=0;O--)if(!this.Op.Get(O))this.Ka=this.Ka-1;return this.Ka;}
,DoesNeedUpdate:function(){if(this.Ka>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cd,aSize));if(this.AzN)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bi(this.M);return this;},SetRootFocus:function(A0D){if(A0D===this.AzN
)return false;this.AzN=A0D;if(!A0D){if(!!this.JB)this.JB.C1.Cy(0x0,0x40);else this.
Cy(0x0,0x40);}else if(!!this.JB)this.JB.C1.Cy(0x40,0x0);else this.Cy(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qa){this.Ia=Qa;},DriveKeyboardHitting:function(
Kz,AyO,S9){var B;var A3x=!!this.RD;if(!!this.RD&&((!S9||(this.Az1!==Kz))||(this.
AtP!==AyO))){var LJ=null;var X=(C.Ch.isPrototypeOf(B=this.RD)?B:null);var D5=(C.
BM.isPrototypeOf(B=this.RD)?B:null);if(!!this.Az1)LJ=A._NewObject(C.KeyEvent,0).
Initialize(this.Az1,false);if(this.AtP!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtP,false);if(!!D5)D5.GY(LJ);else if(!!X)X.GY(LJ);this.Az1=0;this.AtP=0x00;
this.RD=null;}if(!!this.RD){var LJ=null;var X=(C.Ch.isPrototypeOf(B=this.RD)?B:null
);var D5=(C.BM.isPrototypeOf(B=this.RD)?B:null);if(!!Kz)LJ=A._NewObject(C.KeyEvent
,0).Initialize(Kz,true);if(this.AtP!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
AyO,true);if(!!D5)D5.GY(LJ);else if(!!X)X.GY(LJ);}if(!this.RD&&S9){if(!!Kz)this.
RD=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Kz,true));if(AyO!==0x00
)this.RD=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyO,true));if(
!(C.BM.isPrototypeOf(B=this.RD)?B:null)&&!(C.Ch.isPrototypeOf(B=this.RD)?B:null)
)this.RD=null;this.Az1=Kz;this.AtP=AyO;A3x=A3x||!!this.RD;}this.Ia=0;return A3x;
},DriveCursorMovement:function(Fb){return this.DriveMultiTouchMovement(this.EP,Fb
);},DriveMultiTouchMovement:function(BG,Fb){if((BG<0)||(BG>9)){this.Ia=0;return false;
}var Fr=A.abe(Fb,this.Rw.Get(BG));this.Rw.Set(BG,Fb);if(!this.Fp.Get(BG)||A.aaX(
Fr,Cd)){this.Ia=0;return false;}var pos=Fb;var B0=this.Fp.Get(BG).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fp.Get(BG)!==
this)){var tmp=this.Fp.Get(BG);this.EP=BG;this.Fp.Set(BG,null);tmp.GY(this.Ao3().
InitializeUp(BG,this.Aik.Get(BG),this.AfT.Get(BG),this.Xs.Get(BG),this.L8.Get(BG
)+1,this.Xr.Get(BG),false,this.Rw.Get(BG),this.Ac$.Get(BG)));this.BroadcastEvent(
this.AtA().InitializeUp(BG,this.L8.Get(BG)+1,false,tmp,Fb),0x18);}else{this.Aik.
Set(BG,pos);this.EP=BG;this.Fp.Get(BG).GY(this.Byk().Initialize(BG,pos,this.AfT.
Get(BG),Fr,this.Xs.Get(BG),this.L8.Get(BG)+1,this.Xr.Get(BG),Fb,this.Ac$.Get(BG)
));}this.Ia=0;return true;},DriveCursorHitting:function(S9,BG,Fb){return this.DriveMultiTouchHitting(
S9,BG,Fb);},DriveMultiTouchHitting:function(S9,BG,Fb){if((BG<0)||(BG>9)){this.Ia=
0;return false;}var ticksCount=this.Ia;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBc=this.Ia;this.DriveMultiTouchMovement(BG,Fb);Fb=this.Rw.Get(BG);
this.Ia=BBc;if(S9)this.Ac$.Set(BG,Fb);if(S9&&!this.Fp.Get(BG)){var JA;var pos=Fb;
if(A.wa(this.AJK.Get(BG),Fb)&&((ticksCount-this.AtB.Get(BG))<=250))this.L8.Set(BG
,this.L8.Get(BG)+1);else this.L8.Set(BG,0);this.AJK.Set(BG,A.abh(MF,Fb));this.AtB.
Set(BG,ticksCount);if(!!this.JB)JA=this.Yh(A.abh(MF,Fb),BG,this.L8.Get(BG)+1,this.
JB.C1,null,0x0);else JA=this.Yh(A.abh(MF,Fb),BG,this.L8.Get(BG)+1,null,null,0x0);
if(!!JA){this.BroadcastEvent(this.AtA().InitializeDown(BG,this.L8.Get(BG)+1,false
,JA.Ch,Fb),0x18);this.Fp.Set(BG,JA.Ch);this.Xr.Set(BG,JA.DG);}else{this.Fp.Set(BG
,null);this.Xr.Set(BG,Cd);this.Ia=0;return false;}var B0=JA.Ch.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfT.Set(BG,pos);this.Aik.
Set(BG,pos);this.Xs.Set(BG,0);this.Ail.Ar(true);this.EP=BG;this.Fp.Get(BG).GY(this.
Ao3().InitializeDown(BG,pos,this.L8.Get(BG)+1,this.Xr.Get(BG),false,Fb));this.Ia=
0;return true;}if(!S9&&!!this.Fp.Get(BG)){var pos=Fb;var B0=this.Fp.Get(BG).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aik.
Get(BG);this.EP=BG;var tmp=this.Fp.Get(BG);this.Fp.Set(BG,null);tmp.GY(this.Ao3(
).InitializeUp(BG,pos,this.AfT.Get(BG),this.Xs.Get(BG),this.L8.Get(BG)+1,this.Xr.
Get(BG),false,Fb,this.Ac$.Get(BG)));this.BroadcastEvent(this.AtA().InitializeUp(
BG,this.L8.Get(BG)+1,false,tmp,Fb),0x18);this.Ia=0;return true;}this.Ia=0;return false;
},AUg:function(Aam,BbB,Ac1,Ac0){if(Aam===this)Aam=null;if(!!!Aam&&!!this.JB)Aam=
this.JB.C1;if(!this.Fp.Get(this.EP))return;var JA;JA=this.Yh(A.abh(MF,this.Rw.Get(
this.EP)),this.EP,1,Aam,Ac1,Ac0);if(!!JA&&(this.Fp.Get(this.EP)!==JA.Ch))this.ANK(
JA.Ch,JA.DG);if(!JA&&(this.Fp.Get(this.EP)!==BbB))this.ANK(BbB,Cd);},ANK:function(
Aam,Xg){if(!this.Fp.Get(this.EP)||(this.Fp.Get(this.EP)===Aam))return;var tmp=this.
Fp.Get(this.EP);this.Fp.Set(this.EP,null);tmp.GY(this.Ao3().InitializeUp(this.EP
,this.Aik.Get(this.EP),this.AfT.Get(this.EP),this.Xs.Get(this.EP),this.L8.Get(this.
EP)+1,this.Xr.Get(this.EP),true,this.Rw.Get(this.EP),this.Ac$.Get(this.EP)));this.
BroadcastEvent(this.AtA().InitializeUp(this.EP,this.L8.Get(this.EP)+1,true,tmp,this.
Rw.Get(this.EP)),0x18);var pos=this.Rw.Get(this.EP);var B0=null;if(!!Aam)B0=Aam.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aam
!==this)){this.Fp.Set(this.EP,null);return;}this.BroadcastEvent(this.AtA().InitializeDown(
this.EP,this.L8.Get(this.EP)+1,true,Aam,this.Rw.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fp.Set(this.EP,Aam);this.Xr.Set(
this.EP,Xg);this.AfT.Set(this.EP,pos);this.Aik.Set(this.EP,pos);this.L8.Set(this.
EP,0);this.Xs.Set(this.EP,0);this.AtB.Set(this.EP,ticksCount);this.Ac$.Set(this.
EP,this.Rw.Get(this.EP));this.Fp.Get(this.EP).GY(this.Ao3().InitializeDown(this.
EP,pos,this.L8.Get(this.EP)+1,this.Xr.Get(this.EP),true,this.Ac$.Get(this.EP)));
},AON:function(){if(!!this.JB)return this.JB.C1;return null;},ACx:function(KA){var
B;if(!KA)throw new Error(S5);if(!((KA.U&0x80)===0x80))throw new Error(UO);if(this.
JB.C1===KA)this.JB=this.JB.Ah;else{var AzM=this.JB;while(AzM.Ah.C1!==KA)AzM=AzM.
Ah;AzM.Ah=AzM.Ah.Ah;}KA.Cy(0x0,0xD0);if(this.AzN){if(!!this.JB)this.JB.C1.Cy(0x50
,0x0);else this.Cy(0x50,0x0);}},AMS:function(KA){var B;var At=A._NewObject(C.A7u
,0);if(!KA)throw new Error(Z5);if(KA===null)throw new Error(W1);if(((KA.U&0x80)===
0x80))throw new Error(Iq);if(!!this.JB)this.JB.C1.Cy(0x0,0x50);else this.Cy(0x0,
0x50);At.Ah=this.JB;At.C1=KA;this.JB=At;if(this.AzN)KA.Cy(0xD0,0x0);else KA.Cy(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ail={
I:this},0);(this.Fp=[]).__proto__=C.Root.Fp;(this.L8=[]).__proto__=C.Root.L8;(this.
AJK=[]).__proto__=C.Root.AJK;(this.Xs=[]).__proto__=C.Root.Xs;(this.AfT=[]).__proto__=
C.Root.AfT;(this.AtB=[]).__proto__=C.Root.AtB;(this.Aik=[]).__proto__=C.Root.Aik;(
this.Xr=[]).__proto__=C.Root.Xr;(this.Rw=[]).__proto__=C.Root.Rw;(this.Ac$=[]).__proto__=
C.Root.Ac$;(this.Op=[]).__proto__=C.Root.Op;(this.Ke=[]).__proto__=C.Root.Ke;this.
__proto__=C.Root;this.U=0x10007F;this.Ail.PO(10);this.Ail.Mx=[this,this.Byp];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ail._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ail._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RD)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JB)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fp,D);if((B=this.
Atw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ail)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvN:false,Init:function(aArg){this.Bs=
this.Avj();},Avj:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DP:0,Down:false
,Initialize2:function(Kz,S9){this.CO=0;this.DP=Kz;this.Down=S9;if((Kz>=0x30)&&(Kz<=
0x39))this.CO=(10+Kz)-48;if((Kz>=0x41)&&(Kz<=0x5A))this.CO=(105+Kz)-65;if((Kz>=0x61
)&&(Kz<=0x7A))this.CO=(105+Kz)-97;if(Kz===0x20)this.CO=131;if(!this.CO)switch(Kz
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(Kz,S9){this.CO=Kz;this.
Down=S9;this.DP=0x00;var A1g=Kz-10;var Atv=Kz-105;if((A1g>=0)&&(A1g<=9))this.DP=(
48+A1g)&0xFFFF;if((Atv>=0)&&(Atv<=25))this.DP=(65+Atv)&0xFFFF;if(Kz===131)this.DP=
0x20;if(this.DP===0x00)switch(Kz){case 132:this.DP=0x2B;break;case 133:this.DP=0x2D;
break;case 134:this.DP=0x2A;break;case 135:this.DP=0x2F;break;case 136:this.DP=0x3D;
break;case 137:this.DP=0x2E;break;case 138:this.DP=0x2C;break;case 139:this.DP=0x3A;
break;case 140:this.DP=0x3B;break;default:;}return this;},Bi9:function(Bbq){switch(
Bbq){case 141:return((this.DP>=0x41)&&(this.DP<=0x5A))||((this.DP>=0x61)&&(this.
DP<=0x7A));case 142:return(((this.DP>=0x41)&&(this.DP<=0x5A))||((this.DP>=0x61)&&(
this.DP<=0x7A)))||((this.DP>=0x30)&&(this.DP<=0x39));case 143:return(this.DP>=0x30
)&&(this.DP<=0x39);case 144:return(((this.DP>=0x41)&&(this.DP<=0x46))||((this.DP>=
0x61)&&(this.DP<=0x66)))||((this.DP>=0x30)&&(this.DP<=0x39));case 145:return this.
DP!==0x00;case 146:return(this.DP===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DP!==0x00
)||!!this.CO;default:;}return Bbq===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARj={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARj;},_className:
"Core::LanguageEvent"};C.AuP={AxD:null,LT:A.wf,N5:0,IF:0,Down:false,NF:false,InitializeUp:
function(BG,Ob,AoD,A0U,Aal){this.Down=false;this.IF=BG;this.N5=Ob;this.LT=Aal;this.
AxD=A0U;this.NF=AoD;return this;},InitializeDown:function(BG,Ob,AoD,A0U,Aal){this.
Down=true;this.IF=BG;this.N5=Ob;this.LT=Aal;this.AxD=A0U;this.NF=AoD;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuP;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxD)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aea={AgS:A.wf,LT:A.wf,N5:0,Jp:
0,NQ:A.wf,H0:A.wf,IF:0,Down:false,NF:false,InitializeHold:function(BG,Alg,AyR,AyS
,Ob,Xg,Aal,AyQ){this.Down=true;this.IF=BG;this.H0=A.abf(Alg,Xg);this.NQ=A.abf(AyR
,Xg);this.Jp=AyS;this.N5=Ob;this.LT=Aal;this.AgS=AyQ;return this;},InitializeUp:
function(BG,Alg,AyR,AyS,Ob,Xg,AoD,Aal,AyQ){this.Down=false;this.IF=BG;this.H0=A.
abf(Alg,Xg);this.NQ=A.abf(AyR,Xg);this.Jp=AyS;this.N5=Ob;this.NF=AoD;this.LT=Aal;
this.AgS=AyQ;return this;},InitializeDown:function(BG,Alg,Ob,Xg,AoD,Aal){this.Down=
true;this.IF=BG;this.H0=A.abf(Alg,Xg);this.NQ=A.abf(Alg,Xg);this.Jp=0;this.N5=Ob;
this.NF=AoD;this.LT=Aal;this.AgS=Aal;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aea;},_className:"Core::CursorEvent"};C.AqG={
AgS:A.wf,LT:A.wf,N5:0,Jp:0,DG:A.wf,NQ:A.wf,H0:A.wf,IF:0,Initialize:function(BG,Alg
,AyR,aOffset,AyS,Bxo,Xg,Aal,AyQ){this.IF=BG;this.H0=A.abf(Alg,Xg);this.NQ=A.abf(
AyR,Xg);this.DG=aOffset;this.Jp=AyS;this.N5=Bxo;this.LT=Aal;this.AgS=AyQ;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqG;},_className:
"Core::DragEvent"};C.Y={BX:null,Nw:null,El:null,Br:A.wf,AUL:0,Space:0,AgQ:0,Kk:function(
CZ,aClip,aOffset,Ci,aBlend){},GetClipping:function(){var B;var Az=C.Es.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap2=BF;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap2=A.wC(Ap2,X.GetClipping());
Az=A.wC(Az,Ap2);}return Az;},Cy:function(Rp,U1){var B;var Tk=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U1&0x80000)===0x80000))this.Ab.Bi(this.GetClipping(
));C.Es.Cy.call(this,Rp,U1);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rp&0x80000)===
0x80000))&&!((Tk&0x80000)===0x80000))this.Ab.Bi(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlV=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKv=[
E[2]-E[0],E[3]-E[1]];var ApY=!A.aaX(AlV,AKv);var Fr=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fr,Cd)&&!ApY){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anf(Fr,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((ApY&&(AlV[0]>0))&&(AlV[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eu&&(X.Eu.
Ny!==this))X.Eu=null;if(!X.Eu&&((X.PH!==0x14)||!!this.AgQ))X.AtN(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Es.H.call(this,E);if(!!this.Ab&&ApY){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JF],this);}}},Bfi:function(){var B;if((!this.AgQ||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1B=((this.U&0x1000)===0x1000);for(;!!X&&!A1B;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1B=true;if(((X.U&0x200)===
0x200))break;}if(A1B){this.U=this.U&~0x4000;this.Ab.Bft();}},ApI:function(G){var
B;this.BX.Q=null;this.BX.Qo=null;this.BX=null;(B=this.Nw)?B[1].call(B[0],this):null;
},F_:function(E){var B;var Fr=A.abe(E,this.Br);if(A.aaX(Fr,Cd))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anf(Fr,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bi(this.M);A.pe(
this.El,this);},A_c:function(E){var B;if(E<0)E=0;if(E===this.AUL)return;this.AUL=
E;if(!!this.Ab&&!!this.AgQ){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JF],this);}},Bm4:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgQ){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JF],this);}},JO:function(E){var B;if(E===this.AgQ)return;
this.AgQ=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JF],this);}},Vt:function(AcV,E5){var Atv=this.Db(0x1);var Ru=this.M;var
Vd=A.abe(Atv.slice(0,2),Ru.slice(0,2));var L_=A.abe(Atv.slice(2,4),Ru.slice(2,4)
);var Bq=Cd;if((Vd[0]>0)&&(L_[0]>Vd[0]))Bq=[Vd[0],Bq[1]];else if((Vd[0]>0)&&(L_[
0]>0))Bq=[L_[0],Bq[1]];if((L_[0]<0)&&(Vd[0]<L_[0]))Bq=[L_[0],Bq[1]];else if((L_[
0]<0)&&(Vd[0]<0))Bq=[Vd[0],Bq[1]];if((Vd[1]>0)&&(L_[1]>Vd[1]))Bq=[Bq[0],Vd[1]];else
if((Vd[1]>0)&&(L_[1]>0))Bq=[Bq[0],L_[1]];if((L_[1]<0)&&(Vd[1]<L_[1]))Bq=[Bq[0],L_[
1]];else if((L_[1]<0)&&(Vd[1]<0))Bq=[Bq[0],Vd[1]];if(A.aaX(Bq,Cd)){(E5)?E5[1].call(
E5[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qo=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F_(A.abe(this.Br,Bq));(E5)?E5[
1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.
Anq,this.F_];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qo=[this,this.
ApI];this.BX.Ae5(false);this.BX.Ar(true);this.Nw=E5;}},HD:function(Ag,AcY,AcV,E5
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UP);this.Bfi();var Az=Ag.GetExtent();var Bd=this.M;var LN=A.lb(Az,Bd);if((!AcY&&
!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(AcY&&A.aaY(LN,Az))){(E5)?E5[1].call(E5[0],this
):null;return;}var Bq=Cd;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qo=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F_(A.abe(this.Br,Bq));(E5
)?E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anq,this.F_];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qo=[this
,this.ApI];this.BX.Ae5(false);this.BX.Ar(true);this.Nw=E5;}},BiA:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CD=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CD=CD+1;Ag=Ag.AJ;}return CD;
},TL:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BF;var IV=0x10000;this.Bfi();if(((
aFilter&0x10000)===0x10000))IV=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IV||!((B=IV)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anq:function(){return this.Br;},_Init:
function(aArg){C.Es._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Es._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
Hx:null,BX:null,Ch:null,WK:null,Nw:null,El:null,Hg:null,Th:-1,Tg:0,Jl:-1,Ho:0,AiE:
8,Oi:0,Uu:0,AcI:A.wf,G0:-1,Br:0,Go:-1,OP:0,GK:24,AY:0,Lj:null,NM:false,AtQ:false
,AUS:function(Ir,Oa,Xf,S_,S$,Ah3,O7,Ro,Lz,Lx,Ly){throw new Error(Z6);},AqE:function(
Ir,Ah3,O7,Ro,Lz,Lx,Ly){throw new Error(W2);},AkK:function(Ir,Oa,Xf,S_,S$,O7,Ro,Lz
,Lx,Ly){throw new Error(Z7);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Go>=0)&&(this.Go<this.AY))&&!this.AV){this.G0=this.Go;this.Ch=(C.Ch.isPrototypeOf(
B=A._NewObject(this.Lj,0))?B:null);if(!!this.B_)this.B_.Ah=this.Ch;else this.B9=
this.Ch;this.Ch.AJ=this.B_;this.B_=this.Ch;this.Ch.Ab=this;this.AcI=[(B=this.M)[
2]-B[0],this.GK];(B=this.Hg)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Ch.GY(CN
);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B9=null;this.B_=this.Ch.AJ;this.Ch.
AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Lj){A.pe(this.El,this);return;
}this.AtQ=true;var AAF=0;if(!this.NM)AAF=this.OP;var FN=this.Al4(-AAF-this.Br,1);
var GT=this.Al4(((((B=this.M)[3]-B[1])-AAF)-this.Br)-1,2);var CD=GT-FN;if(CD<1)CD=
1;var Aie=(CD/2)|0;var Aif=(CD/3)|0;if(!Aie)Aie=1;if(!Aif)Aif=1;if(FN<this.Ho){FN=
FN-Aie;GT=GT+Aif;}else if(GT>this.Jl){FN=FN-Aif;GT=GT+Aie;}else{FN=this.Ho;GT=this.
Jl;}if(!this.NM){if(FN>=this.AY){FN=0;GT=-1;}else if(GT<0){FN=0;GT=-1;}if(GT>=this.
AY)GT=this.AY-1;if(FN<0)FN=0;}else if(this.AY<=0){FN=0;GT=-1;}var AiW=this.Ho;var
AiX=this.Jl;var Apv=0;var Apw=-1;if(FN>AiW)AiW=FN;if(GT<AiX)AiX=GT;if(AiW<=AiX){
while((this.Jl<GT)&&(this.Ho<AiW)){this.AdA();this.Azf();}while((this.Ho>FN)&&(this.
Jl>AiX)){this.AAS();this.Aze();}}else{this.Jl=(this.Jl-this.Ho)+FN;this.Ho=FN;Apv=
this.Ho;Apw=this.Jl;}while(this.Ho<FN)this.AdA();while(this.Jl>GT)this.AAS();while(
this.Ho>FN)this.Aze();while(this.Jl<GT)this.Azf();var Aa=this.B9;var inx=this.Ho;
var pos=[0,(AAF+this.Br)+this.Jj(inx,0)];var BK=(B=this.M)[3]-B[1];var AlD=null;
var Bgg=(B=this.M)[2]-B[0];while(!!Aa){var Ix=inx;if(this.NM){if(Ix<0)Ix=this.AY-(-
Ix%this.AY);if(Ix>0)Ix=Ix%this.AY;}var AdB=((Ix>=this.Tg)&&(Ix<=this.Th))||((inx>=
Apv)&&(inx<=Apw));var Apc=Aa.GetExtent();var Bq=A.abe(pos,Apc.slice(0,2));if(AdB
)this.Uu=this.GK;else this.Uu=Apc[3]-Apc[1];var A2f=pos[1];var A2g=pos[1]+this.Uu;
if(!A.aaX(Bq,Cd))Aa.Anf(Bq,true);if((AdB&&(A2f<BK))&&(A2g>0)){this.Ch=Aa;this.G0=
Ix;this.AcI=[Bgg,this.Uu];(B=this.Hg)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uu];}inx=this.Ho;Aa=this.B9;pos=[0,(AAF+this.Br)+this.Jj(
inx,0)];while(!!Aa){var Ix=inx;if(this.NM){if(Ix<0)Ix=this.AY-(-Ix%this.AY);if(Ix>
0)Ix=Ix%this.AY;}var AdB=((Ix>=this.Tg)&&(Ix<=this.Th))||((inx>=Apv)&&(inx<=Apw)
);if(AdB)this.Uu=this.GK;else this.Uu=(B=Aa.GetExtent())[3]-B[1];var A2f=pos[1];
var A2g=pos[1]+this.Uu;if(AdB&&!((A2f<BK)&&(A2g>0))){this.Ch=Aa;this.G0=Ix;this.
AcI=[Bgg,this.Uu];(B=this.Hg)?B[1].call(B[0],this):null;}if(((Ix===this.Go)&&this.
NM)&&!!AlD){var Ru=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Ru))>A.aaH(A.lb(AlD.GetExtent(),Ru)))AlD=Aa;}else if(Ix===this.Go)AlD=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uu];}this.Tg=0;this.Th=-1;this.Ch=null;this.G0=-
1;this.Bb(AlD);this.AtQ=false;A.pe(this.El,this);},QD:function(Ag,Gw,aFilter){return null;
},AqL:function(Ag,aFilter){return null;},TL:function(Ag,aFilter){return null;},ACF:
function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
KA,FJ,Lz,Lx,Ly){throw new Error(W3);},Ahu:function(Ag,J2){throw new Error(Z8);},
ZE:function(Ag){throw new Error(Z9);},JU:function(Ag,P$){throw new Error(UQ);},HN:
function(Ag){throw new Error(W4);},AL7:function(Ag,J2){throw new Error(P5);},J:function(
Ag,P$){throw new Error(Z_);},Jj:function(G6,A0u){return G6*this.GK;},Al4:function(
Fb,A0u){return(Fb/this.GK)|0;},AAS:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jl=this.Jl-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiE){if(!
!this.Hx)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Azf:function(
){var B;var Aa=this.Hx;var Adl=this.Lj;var AdF=++this.Jl;if(this.NM){if(AdF<0)AdF=
this.AY-(-AdF%this.AY);if(AdF>0)AdF=AdF%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adl))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiE++;
}this.Uu=this.GK;this.G0=AdF;this.AcI=[(B=this.M)[2]-B[0],this.Uu];this.Ch=Aa;(B=
this.Hg)?B[1].call(B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B_)this.B_.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdF===this.Go
)this.Bb(Aa);return Aa;},AdA:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ho=this.Ho+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiE){if(!!this.Hx
)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Aze:function(){var
B;var Aa=this.Hx;var Adl=this.Lj;var MY=--this.Ho;if(this.NM){if(MY<0)MY=this.AY-(-
MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adl)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.Hx===
Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ch.isPrototypeOf(B=
A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiE++;}this.Uu=this.GK;
this.G0=MY;this.AcI=[(B=this.M)[2]-B[0],this.Uu];this.Ch=Aa;(B=this.Hg)?B[1].call(
B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B9)this.B9.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(MY===this.Go)this.Bb(Aa);return Aa;
},ApI:function(G){var B;this.BX.Q=null;this.BX.Qo=null;this.BX=null;(B=this.Nw)?
B[1].call(B[0],this):null;},BAx:function(G){this.F_(this.WK.DG[1]);},BAy:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qo=null;this.BX=
null;}if(!this.NM){var AE=this.AqS(0,this.AY-1);var Agb=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OP);if(AE[0]>Agb[0])AE=[].concat(Agb[0],AE.slice(1,4));if(AE[1]>Agb[
1])AE=A.abP(AE,Agb[1]);var Fr=AE[1]-this.M[1];var A2u=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2u>0)A2u=0;this.WK.DG=[0,this.Br];this.WK.Gk=[0,(this.Br+A2u)-Fr];this.
WK.FY=[0,this.Br-Fr];}else{var Fr=32000-(32000%this.GK);this.WK.DG=[0,this.Br];this.
WK.Gk=[0,this.Br-Fr];this.WK.FY=[0,this.Br+Fr];}},ASY:function(E){var B;if(this.
NM===E)return;this.NM=E;while(!!this.AdA());this.An();this.Bi([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},AwY:function(E){if(E===this.WK)return;if(!!E&&!!E.At3){A.ab5(
"%s%*%s",O2,E,Ri);throw new Error(W5);}if(!!this.WK){this.WK.AKH=null;this.WK.At3=
null;}this.WK=E;if(!!E){E.AKH=[this,this.BAy];E.At3=[this,this.BAx];}},F_:function(
E){var B;if(this.NM&&(this.AY>0)){var Hz=this.Jj(this.AY,3);if(E<0)E=Hz-(-E%Hz);
if(E>0)E=E%Hz;if(E>0)E=E-Hz;}if(E===this.Br)return;this.Br=E;this.An();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},G2:function(E){if(E<0)E=-1;if(E===this.Go)return;
this.Go=E;this.An();},A91:function(E){var B;if(E<0)E=0;if(E===this.OP)return;this.
OP=E;if(!this.NM){this.An();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae2:function(
E){var B;if(E<1)E=1;if(E===this.GK)return;this.GK=E;while(!!this.AdA());this.An(
);this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ju:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jj(E,3));AE=A.abP(AE
,(this.OP+this.Br)+this.Jj(this.AY,3));}else{AE=A.abP(AE,(this.OP+this.Br)+this.
Jj(E,3));AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jj(this.AY,3));}}else
while(!!this.AdA());this.AY=E;this.An();this.Bi(AE);},NZ:function(E){var B;if(E===
this.Lj)return;this.Lj=E;while(!!this.AdA());this.Hx=null;this.Oi=0;this.An();this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiN:function(G6){if(this.AtQ)return null;
if((G6<0)||(G6>=this.AY))return null;if(!this.NM){if((G6<this.Ho)||(G6>this.Jl))
return null;var X=this.B9;while(G6>this.Ho){X=X.Ah;G6=G6-1;}return X;}else{var MY=
this.Ho;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B9;while(
!!X){if((MY%this.AY)===G6)return X;X=X.Ah;MY=MY+1;}return null;}},ABy:function(AcV
,E5){var B;if(this.NM){(E5)?E5[1].call(E5[0],this):null;return;}var AJ_=this.Br;
var BcR=((((B=this.M)[3]-B[1])-this.Br)-this.OP)-this.Jj(this.AY,3);var Bq=0;if(
AJ_>0)Bq=-AJ_;else if(BcR>0)Bq=BcR;if((Bq>0)&&(Bq>-AJ_))Bq=-AJ_;if(!Bq){(E5)?E5[
1].call(E5[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qo=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F_(this.Br+Bq);(E5)?
E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anq,this.F_];this.BX.Cw=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qo=[this,this.
ApI];this.BX.Ae5(false);this.BX.Ar(true);this.Nw=E5;}},HD:function(G6,AcY,AcV,E5
){var B;if((G6<0)||(G6>=this.AY))return;var Az=this.AqS(G6,G6);var Bd=this.M;var
LN=A.lb(Az,Bd);if((!AcY&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(AcY&&A.aaY(LN,Az))
){(E5)?E5[1].call(E5[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qo=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F_(this.Br-Bq);(E5)?
E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anq,this.F_];this.BX.Cw=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qo=[this,this.
ApI];this.BX.Ae5(false);this.BX.Ar(true);this.Nw=E5;}},BiF:function(){return BF;
},AOP:function(){if((this.OP<=0)||this.NM)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OP);return AE;},A6w:function(Fb
){if(((this.AY<=0)||(Fb[0]<this.M[0]))||(Fb[0]>=this.M[2]))return-1;Fb=A.abe(Fb,
this.M.slice(0,2));if(!this.NM){var Aa=(Fb[1]-this.Br)-this.OP;if(Aa>0)Aa=this.Al4(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fb[1]-this.Br;if(Aa>0)
Aa=this.Al4(Aa,0);if(Aa<0)Aa=this.Al4(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqS:function(J0,L4){if(J0<0)J0=0;if(L4>=this.AY)L4=
this.AY-1;if(J0>L4)return BF;var AE=this.M;var Bq=this.Br;if(this.NM){var Hz=this.
Jj(this.AY,3);if(Bq<0)Bq=Hz-(-Bq%Hz);if(Bq>0)Bq=Bq%Hz;if(Bq>0)Bq=Bq-Hz;}else Bq=
Bq+this.OP;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jj(L4+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jj(J0,0));return AE;},AbG:function(J0,L4){var B;if(J0<0)J0=0;if(J0>L4
)return;if(this.Tg>this.Th){this.Tg=J0;this.Th=L4;}else{if(J0<this.Tg)this.Tg=J0;
if(L4>this.Th)this.Th=L4;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){
AE=A.abP(AE,(this.OP+this.Br)+this.Jj(J0,0));AE=[].concat(AE.slice(0,3),(this.OP+
this.Br)+this.Jj(L4+1,0));}else if((this.Jj(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var Hz=this.Jj(this.AY,3);if(Bq<0)Bq=Hz-(-Bq%Hz);if(
Bq>0)Bq=Bq%Hz;if(Bq>0)Bq=Bq-Hz;AE=A.abP(AE,Bq+this.Jj(J0,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jj(L4+1,0));}this.An();this.Bi(AE);},Anq:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W6);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.Hx
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WK)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hg)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dy={Hx:null
,BX:null,Ch:null,Nw:null,Hg:null,Th:-1,Tg:0,Jl:-1,Ho:0,AiE:8,Oi:0,SG:0,AcI:A.wf,
G0:-1,Br:0,Go:-1,V_:24,AY:0,Lj:null,AtQ:false,AUS:function(Ir,Oa,Xf,S_,S$,Ah3,O7
,Ro,Lz,Lx,Ly){throw new Error(W7);},AqE:function(Ir,Ah3,O7,Ro,Lz,Lx,Ly){throw new
Error(W8);},AkK:function(Ir,Oa,Xf,S_,S$,O7,Ro,Lz,Lx,Ly){throw new Error(Z$);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Go>=0)&&(this.Go<this.AY))&&!this.AV
){this.G0=this.Go;this.Ch=(C.Ch.isPrototypeOf(B=A._NewObject(this.Lj,0))?B:null);
if(!!this.B_)this.B_.Ah=this.Ch;else this.B9=this.Ch;this.Ch.AJ=this.B_;this.B_=
this.Ch;this.Ch.Ab=this;this.AcI=[this.SG,(B=this.M)[3]-B[1]];(B=this.Hg)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Ch.GY(CN);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B9=null;
this.B_=this.Ch.AJ;this.Ch.AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Lj
)return;this.AtQ=true;var FN=this.Al4(0-this.Br,1);var GT=this.Al4((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CD=GT-FN;if(CD<1)CD=1;var Aie=(CD/2)|0;var Aif=(CD/3)|
0;if(!Aie)Aie=1;if(!Aif)Aif=1;if(FN<this.Ho){FN=FN-Aie;GT=GT+Aif;}else if(GT>this.
Jl){FN=FN-Aif;GT=GT+Aie;}else{FN=this.Ho;GT=this.Jl;}if(FN>=this.AY){FN=0;GT=-1;
}else if(GT<0){FN=0;GT=-1;}if(GT>=this.AY)GT=this.AY-1;if(FN<0)FN=0;var AiW=this.
Ho;var AiX=this.Jl;var Apv=0;var Apw=-1;if(FN>AiW)AiW=FN;if(GT<AiX)AiX=GT;if(AiW<=
AiX){while((this.Jl<GT)&&(this.Ho<AiW)){this.AdA();this.Azf();}while((this.Ho>FN
)&&(this.Jl>AiX)){this.AAS();this.Aze();}}else{this.Jl=(this.Jl-this.Ho)+FN;this.
Ho=FN;Apv=this.Ho;Apw=this.Jl;}while(this.Ho<FN)this.AdA();while(this.Jl>GT)this.
AAS();while(this.Ho>FN)this.Aze();while(this.Jl<GT)this.Azf();var Aa=this.B9;var
inx=this.Ho;var pos=[this.Br+this.Jj(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlD=
null;var Bf6=(B=this.M)[3]-B[1];while(!!Aa){var Ix=inx;var AdB=((Ix>=this.Tg)&&(
Ix<=this.Th))||((inx>=Apv)&&(inx<=Apw));var Apc=Aa.GetExtent();var Bq=A.abe(pos,
Apc.slice(0,2));if(AdB)this.SG=this.V_;else this.SG=Apc[2]-Apc[0];var A2d=pos[0];
var A2e=pos[0]+this.SG;if(!A.aaX(Bq,Cd))Aa.Anf(Bq,true);if((AdB&&(A2d<BY))&&(A2e>
0)){this.Ch=Aa;this.G0=Ix;this.AcI=[this.SG,Bf6];(B=this.Hg)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SG,pos[1]];}inx=this.Ho;Aa=this.B9;pos=[
this.Br+this.Jj(inx,0),0];while(!!Aa){var Ix=inx;var AdB=((Ix>=this.Tg)&&(Ix<=this.
Th))||((inx>=Apv)&&(inx<=Apw));if(AdB)this.SG=this.V_;else this.SG=(B=Aa.GetExtent(
))[2]-B[0];var A2d=pos[0];var A2e=pos[0]+this.SG;if(AdB&&!((A2d<BY)&&(A2e>0))){this.
Ch=Aa;this.G0=Ix;this.AcI=[this.SG,Bf6];(B=this.Hg)?B[1].call(B[0],this):null;}if(
Ix===this.Go)AlD=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SG,pos[1]];}this.Tg=0;this.
Th=-1;this.Ch=null;this.G0=-1;this.Bb(AlD);this.AtQ=false;},QD:function(Ag,Gw,aFilter
){return null;},AqL:function(Ag,aFilter){return null;},TL:function(Ag,aFilter){return null;
},ACF:function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
KA,FJ,Lz,Lx,Ly){throw new Error(W9);},Ahu:function(Ag,J2){throw new Error(W_);},
ZE:function(Ag){throw new Error(S6);},JU:function(Ag,P$){throw new Error(UR);},HN:
function(Ag){throw new Error(US);},AL7:function(Ag,J2){throw new Error(AcL);},J:
function(Ag,P$){throw new Error(S7);},Jj:function(G6,A0u){return G6*this.V_;},Al4:
function(Fb,A0u){return(Fb/this.V_)|0;},AAS:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jl=this.Jl-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiE){if(!
!this.Hx)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Azf:function(
){var B;var Aa=this.Hx;var Adl=this.Lj;var AdF=++this.Jl;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adl))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{
Aa=(C.Ch.isPrototypeOf(B=A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.
AiE++;}this.SG=this.V_;this.G0=AdF;this.AcI=[this.SG,(B=this.M)[3]-B[1]];this.Ch=
Aa;(B=this.Hg)?B[1].call(B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B_)this.
B_.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdF===this.
Go)this.Bb(Aa);return Aa;},AdA:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ho=this.Ho+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiE){if(!!this.Hx
)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Aze:function(){var
B;var Aa=this.Hx;var Adl=this.Lj;var MY=--this.Ho;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adl))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiE++;
}this.SG=this.V_;this.G0=MY;this.AcI=[this.SG,(B=this.M)[3]-B[1]];this.Ch=Aa;(B=
this.Hg)?B[1].call(B[0],this):null;this.Ch=null;this.G0=-1;if(!!this.B9)this.B9.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(MY===this.Go
)this.Bb(Aa);return Aa;},ApI:function(G){var B;this.BX.Q=null;this.BX.Qo=null;this.
BX=null;(B=this.Nw)?B[1].call(B[0],this):null;},F_:function(E){var B;if(E===this.
Br)return;this.Br=E;this.An();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},G2:function(
E){if(E<0)E=-1;if(E===this.Go)return;this.Go=E;this.An();},AFb:function(E){var B;
if(E<1)E=1;if(E===this.V_)return;this.V_=E;while(!!this.AdA());this.An();this.Bi([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ju:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jj(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jj(E,3));}else{AE=
A.abN(AE,this.Br+this.Jj(this.AY,3));AE=[].concat(this.Br+this.Jj(E,3),AE.slice(
1,4));}this.AY=E;this.An();this.Bi(AE);},NZ:function(E){var B;if(E===this.Lj)return;
this.Lj=E;while(!!this.AdA());this.Hx=null;this.Oi=0;this.An();this.Bi([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BoD:function(Bxp,Bxq){if(!this.BX)return;if(Bxp)this.F_(
this.BX.B2);var A38=this.Nw;this.BX.Ar(false);this.BX.Q=null;this.BX.Qo=null;this.
Nw=null;this.BX=null;if(Bxq)(A38)?A38[1].call(A38[0],this):null;},Bjc:function(){
return!!this.BX;},HD:function(G6,AcY,AcV,E5){var B;if((G6<0)||(G6>=this.AY))return;
var Az=this.AqS(G6,G6);var Bd=this.M;var LN=A.lb(Az,Bd);if((!AcY&&!((LN[0]>=LN[2
])||(LN[1]>=LN[3])))||(AcY&&A.aaY(LN,Az))){(E5)?E5[1].call(E5[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qo=null;this.Nw=null;}this.BX=
AcV;if(!this.BX){this.F_(this.Br-Bq);(E5)?E5[1].call(E5[0],this):null;}else{this.
BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.Anq,this.F_];this.BX.Cw=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qo=[this,this.ApI];this.BX.Ae5(false);this.BX.Ar(true
);this.Nw=E5;}},AqS:function(J0,L4){if(J0<0)J0=0;if(L4>=this.AY)L4=this.AY-1;if(
J0>L4)return BF;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jj(L4+1
,0));AE=[].concat((AE[0]+Bq)+this.Jj(J0,0),AE.slice(1,4));return AE;},AbG:function(
J0,L4){var B;if(J0<0)J0=0;if(J0>L4)return;if(this.Tg>this.Th){this.Tg=J0;this.Th=
L4;}else{if(J0<this.Tg)this.Tg=J0;if(L4>this.Th)this.Th=L4;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jj(J0,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jj(L4+1,0));this.An();this.Bi(AE);},Anq:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dy;this.H(W6);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.Hx
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASb:null,AEB:null,Av1:null,D1:null,
Ln:null,BN:null,AK6:0,Bp:0,IF:0,Bs:0,N5:0,Jp:0,DG:A.wf,NQ:A.wf,H0:A.wf,Axm:8,Afa:
0,A7n:1,Down:false,YF:false,NF:false,A1I:false,AAa:0,Kk:function(CZ,aClip,aOffset
,Ci,aBlend){},GY:function(CN){var B;var BP=(C.Aea.isPrototypeOf(CN)?CN:null);var
D4=(C.AqG.isPrototypeOf(CN)?CN:null);var AKk=this.YF;var AaJ;var Va;var ABa;var MV;
var Azy;if(!BP&&!D4)return null;AaJ=(!!BP&&BP.Down)&&!BP.Jp;Va=(!!BP&&BP.Down)&&(
BP.Jp>0);ABa=(!!BP&&BP.Down)&&(BP.Jp>this.AAa);MV=!!BP&&!BP.Down;Azy=!!D4;if(AaJ
)this.AAa=((B=(BP.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afa&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iv=(C.AuP.isPrototypeOf(CN)?CN:null);if(((
!!Iv&&Iv.Down)&&(Iv.AxD!==this))&&A.wa(this.GetExtent(),this.Ab.A7j(Iv.LT))){this.
AK6=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaJ){var ApC=0;var Adg;this.Bp=
this.Bp|(1<<BP.IF);for(Adg=this.Bp&4095;Adg>0;Adg=Adg>>1)if(!!(Adg&1))ApC=ApC+1;
if(ApC===1)this.Bp=(this.Bp|16777216)|(4096<<BP.IF);}if(MV&&(this.Bp<16777216)){
var IA=this.Ij();var JA=null;if(!!IA){var A30=(!!this.AJ?this.AJ:this.Ab);var A1w=(
!!IA.JB?IA.JB.C1:null);JA=IA.Yh(A.abh(Aaa,BP.LT),BP.IF,BP.N5,A1w,A30,0x0);}if(!!
JA){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ch.GY(A._NewObject(C.Aea,0).
InitializeDown(O,BP.H0,BP.N5,Cd,true,BP.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JA.Ch.GY(A._NewObject(C.Aea,0).InitializeUp(O,BP.H0,BP.H0,0,BP.N5,Cd,false,BP.
LT,BP.LT));}}if(MV)this.Bp=(this.Bp&~(1<<BP.IF))|33554432;if(ABa&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(MV&&BP.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&
4095))this.AK6=0x0;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Va&&(this.Bp>=67108864
)){var IA=this.Ij();if(!!IA)IA.AUg(null,null,this,this.AK6);}if((Va&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Va=false;MV=true;}if(!!BP&&!(this.Bp&(4096<<BP.
IF)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IF)))return this;if(MV&&!(this.Bp&
16777216))return this;if(((AaJ||Azy)||Va)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(MV)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215))this.
Bp=0;if(!!BP){this.Down=AaJ||Va;this.YF=this.AQ7(BP.H0);this.NQ=BP.NQ;this.H0=BP.
H0;this.DG=Cd;this.Jp=BP.Jp;this.N5=BP.N5;this.NF=BP.NF;this.IF=BP.IF;this.Bs=BP.
Bs;if(BP.Down&&!BP.Jp)AKk=false;}if(!!D4){this.Down=true;this.YF=this.AQ7(D4.H0);
this.NQ=D4.NQ;this.H0=D4.H0;this.DG=D4.DG;this.Jp=D4.Jp;this.N5=D4.N5;this.IF=D4.
IF;this.NF=false;this.Bs=D4.Bs;}var A1C=this.Down;if(!!D4)(B=this.ASb)?B[1].call(
B[0],this):null;if((!!BP&&this.Down)&&!this.Jp)(B=this.BN)?B[1].call(B[0],this):
null;if((!!BP&&this.Down)&&(this.Jp>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YF)&&!AKk){this.A1I=true;(B=this.Av1)?B[1].call(B[0],this):null;
}if(this.A1I&&(((A1C&&!this.YF)&&AKk)||((!A1C&&this.YF)&&AKk))){this.A1I=false;(
B=this.AEB)?B[1].call(B[0],this):null;}if(!!BP&&!A1C)(B=this.Ln)?B[1].call(B[0],
this):null;if(!!this.Afa){var Adz=0x0;if(((((this.Afa&0x10)===0x10)&&!!BP)&&BP.Down
)&&(BP.Jp>=1000))Adz=0x10;if((((this.Afa&0x1)===0x1)&&!!D4)&&((D4.LT[1]-D4.AgS[1
])<=-this.Axm))Adz=0x1;if((((this.Afa&0x2)===0x2)&&!!D4)&&((D4.LT[1]-D4.AgS[1])>=
this.Axm))Adz=0x2;if((((this.Afa&0x4)===0x4)&&!!D4)&&((D4.LT[0]-D4.AgS[0])<=-this.
Axm))Adz=0x4;if((((this.Afa&0x8)===0x8)&&!!D4)&&((D4.LT[0]-D4.AgS[0])>=this.Axm)
)Adz=0x8;if(!!Adz){var IA=this.Ij();if(!!IA){this.AK6=Adz;IA.AUg(null,this,this,
Adz);}}}return this;},Yh:function(Da,BG,Ob,Aak,Ac1,Ac0){var B;if(!!Aak&&(Aak!==this
))return null;if((Ob<1)||(Ob>this.A7n))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;if(!!(Ac0&this.Afa))return null;
if(this.BiS()){var Az=A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qc=A.aaI(Da);var Fr=Cd;if(Qc[0]<Az[0])Fr=[Az[0]-Qc[0],Fr[1]];if(Qc[0]>=
Az[2])Fr=[(Az[2]-Qc[0])-1,Fr[1]];if(Qc[1]<Az[1])Fr=[Fr[0],Az[1]-Qc[1]];if(Qc[1]>=
Az[3])Fr=[Fr[0],(Az[3]-Qc[1])-1];return A._NewObject(C.AuQ,0).Initialize(this,Fr
);}}else{var Hy=A.abi(9,A.wf,null);var O;Hy.Set(0,A.aaI(Da));Hy.Set(1,Hy.Get(0));
Hy.Set(2,Hy.Get(0));Hy.Set(3,Hy.Get(0));Hy.Set(4,Hy.Get(0));Hy.Set(1,[Da[0],Hy.Get(
1)[1]]);Hy.Set(2,[Hy.Get(2)[0],Da[1]]);Hy.Set(3,[Da[2],Hy.Get(3)[1]]);Hy.Set(4,[
Hy.Get(4)[0],Da[3]]);Hy.Set(5,Da.slice(0,2));Hy.Set(6,[Da[2],Da[1]]);Hy.Set(7,[Da[
0],Da[3]]);Hy.Set(8,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.AQ7(Hy.Get(O)))return A.
_NewObject(C.AuQ,0).Initialize(this,A.abe(Hy.Get(O),Hy.Get(0)));}return null;},BmX:
function(E){if(E<1)E=1;this.Axm=E;},AFk:function(E){if(E<1)E=1;this.A7n=E;},Ar:function(
E){if(E)this.Cy(0x100000,0x0);else this.Cy(0x0,0x100000);},_Init:function(aArg){
C.ZB._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZB._Mark.call(this,D);if((B=this.ASb)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AEB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av1
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H7={timer:null,AKH:null,At3:null,AFX:null,Zn:null,SC:null,Bp:0,AJf:0,Adj:5000
,ApX:0,AKi:A.wf,Ao$:0,AfJ:0,EY:0,Amd:0,Auf:0,Ao_:0,AfI:0,EX:0,Amc:0,Ama:0,NQ:A.wf
,A5C:A.wf,FY:A.wf,Gk:A.wf,DG:A.wf,WN:A.wf,A6j:0.5,A_R:true,AGE:true,ZM:false,XF:
false,XG:false,AoU:false,AAa:0,Kk:function(CZ,aClip,aOffset,Ci,aBlend){},GY:function(
CN){var B;var BP=(C.Aea.isPrototypeOf(CN)?CN:null);var D4=(C.AqG.isPrototypeOf(CN
)?CN:null);var Iv=(C.AuP.isPrototypeOf(CN)?CN:null);var AaJ;var Va;var ABa;var MV;
var Azy;AaJ=(!!BP&&BP.Down)&&!BP.Jp;Va=(!!BP&&BP.Down)&&(BP.Jp>0);ABa=(!!BP&&BP.
Down)&&(BP.Jp>this.AAa);MV=!!BP&&!BP.Down;Azy=!!D4;if(AaJ)this.AAa=((B=(BP.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaJ){var ApC=0;var Adg;this.Bp=this.Bp|(1<<BP.
IF);for(Adg=this.Bp&4095;Adg>0;Adg=Adg>>1)if(!!(Adg&1))ApC=ApC+1;if(ApC===1)this.
Bp=(this.Bp|16777216)|(4096<<BP.IF);}if(MV&&(this.Bp<16777216)){var IA=this.Ij();
var JA=null;if(!!IA){var A30=(!!this.AJ?this.AJ:this.Ab);var A1w=(!!IA.JB?IA.JB.
C1:null);JA=IA.Yh(A.abh(Aaa,BP.LT),BP.IF,BP.N5,A1w,A30,0x0);}if(!!JA){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ch.GY(A._NewObject(C.Aea,0).InitializeDown(
O,BP.H0,BP.N5,Cd,true,BP.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ch.GY(A.
_NewObject(C.Aea,0).InitializeUp(O,BP.H0,BP.H0,0,BP.N5,Cd,false,BP.LT,BP.LT));}}
if(MV)this.Bp=(this.Bp&~(1<<BP.IF))|33554432;if(ABa&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MV&&BP.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&16777215
))this.Bp=0;if(Va&&(this.Bp>=67108864)){var IA=this.Ij();if(!!IA)IA.AUg(null,null
,this,0x0);}if((Va&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Va=false;MV=true;
}if(!!BP&&!(this.Bp&(4096<<BP.IF)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IF))
)return this;if(MV&&!(this.Bp&16777216))return this;if(((AaJ||Azy)||Va)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(MV)this.Bp=this.Bp&3758100479;
if(MV&&!(this.Bp&16777215))this.Bp=0;if(!!Iv&&(Iv.AxD===this))return null;if((!!
Iv&&Iv.Down)&&(this.AoU||!this.ZM))return null;if((!!Iv&&Iv.Down)&&!A.wa(this.M,
this.Ab.A7j(Iv.LT)))return null;if((!!Iv&&!Iv.Down)&&(!this.AoU||(this.AJf!==Iv.
IF)))return null;if((!BP&&!D4)&&!Iv)return null;if(!!BP){this.AoU=AaJ||Va;this.AJf=
BP.IF;this.NQ=BP.NQ;}if(!!D4)this.AJf=D4.IF;if(!!Iv){this.AoU=Iv.Down;this.AJf=Iv.
IF;}if(!!Iv&&Iv.Down){this.A31();this.EX=(((Iv.Bs-this.Ama)*0.001)*this.AfI)+this.
EX;this.EY=(((Iv.Bs-this.Auf)*0.001)*this.AfJ)+this.EY;if(this.XF)this.EX=0;if(this.
XG)this.EY=0;this.AfI=0;this.AfJ=0;this.XF=false;this.XG=false;this.AKi=this.DG;
this.ApX=Iv.Bs;return this;}if(AaJ){this.A31();this.EX=(((BP.Bs-this.Ama)*0.001)
*this.AfI)+this.EX;this.EY=(((BP.Bs-this.Auf)*0.001)*this.AfJ)+this.EY;if(this.XF||
!this.ZM)this.EX=0;if(this.XG||!this.ZM)this.EY=0;this.AfI=0;this.AfJ=0;this.XF=
false;this.XG=false;if(!this.ZM){this.ZM=true;(B=this.SC)?B[1].call(B[0],this):null;(
B=this.AKH)?B[1].call(B[0],this):null;}this.AKi=this.DG;this.ApX=BP.Bs;}if(!!D4){
var G8=A.abe(D4.H0,D4.NQ);var CC=this.DG;if(this.AGE)CC=[this.AKi[0]+G8[0],CC[1]
];CC=[CC[0],this.AKi[1]+G8[1]];if(this.A_R){if(CC[0]<this.Gk[0])CC=[this.Gk[0]+(((
CC[0]-this.Gk[0])/2)|0),CC[1]];else if(CC[0]>this.FY[0])CC=[this.FY[0]+(((CC[0]-
this.FY[0])/2)|0),CC[1]];if(CC[1]<this.Gk[1])CC=[CC[0],this.Gk[1]+(((CC[1]-this.
Gk[1])/2)|0)];else if(CC[1]>this.FY[1])CC=[CC[0],this.FY[1]+(((CC[1]-this.FY[1])
/2)|0)];}else{if(CC[0]<this.Gk[0])CC=[this.Gk[0],CC[1]];else if(CC[0]>this.FY[0]
)CC=[this.FY[0],CC[1]];if(CC[1]<this.Gk[1])CC=[CC[0],this.Gk[1]];else if(CC[1]>this.
FY[1])CC=[CC[0],this.FY[1]];}if(!A.aaX(CC,this.DG)){this.A5C=A.abe(CC,this.DG);this.
DG=CC;(B=this.At3)?B[1].call(B[0],this):null;(B=this.AFX)?B[1].call(B[0],this):null;
}}if((!!Iv&&!Iv.Down)&&((Iv.Bs-this.ApX)>=200)){this.EX=0;this.EY=0;}if(Va&&((BP.
Bs-this.ApX)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApX)){var G8=D4.DG;
var Bdi=1000/(D4.Bs-this.ApX);var AiH=0;var AiI;if(this.AGE)AiH=G8[0]*Bdi;AiI=G8[
1]*Bdi;if((AiH*this.EX)<0)this.EX=0;if((AiI*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiH)*0.5;this.EY=(this.EY+AiI)*0.5;this.ApX=D4.Bs;}if(!MV&&!Iv)return this;if(!!
BP&&BP.NF){this.EX=0;this.EY=0;}if((this.DG[0]<=this.Gk[0])||(this.DG[0]>=this.FY[
0]))this.EX=0;else if(!this.EX){var ER=this.DG[0];var Fd=this.Gk[0];var EI=this.
FY[0];if(ER<Fd)EI=this.Gk[0];else if(ER>EI)Fd=this.FY[0];else if(this.WN[0]<=1){
Fd=ER;EI=ER;}else{var Adn=(EI-ER)%this.WN[0];EI=(ER-this.WN[0])+Adn;Fd=ER+Adn;if(
EI<this.Gk[0])EI=this.Gk[0];if(Fd>this.FY[0])Fd=this.FY[0];}if((Fd-ER)<=(ER-EI))
ER=Fd;else ER=EI;if(ER!==this.DG[0]){var Ji=ER-this.DG[0];if(Ji>0)this.EX=Math.sqrt((
Ji*2)*this.Adj)+20;if(Ji<0)this.EX=-Math.sqrt((-Ji*2)*this.Adj)-20;this.AfI=(400-(
this.EX*this.EX))/(2*Ji);this.Ao_=ER;}}else{var BBy=this.EX*this.EX;var Ji=BBy/(
2*this.Adj);var ER=this.DG[0];if(this.EX>0)ER=ER+(Ji|0);if(this.EX<0)ER=ER-(Ji|0
);if(ER>this.FY[0])ER=this.FY[0];else if(ER<this.Gk[0])ER=this.Gk[0];var Bf1=ER;
var Fd=this.Gk[0];var EI=this.FY[0];if(ER<Fd)EI=this.Gk[0];else if(ER>EI)Fd=this.
FY[0];else if(this.WN[0]<=1){Fd=ER;EI=ER;}else{var Adn=(EI-ER)%this.WN[0];EI=(ER-
this.WN[0])+Adn;Fd=ER+Adn;if(EI<this.Gk[0])EI=this.Gk[0];if(Fd>this.FY[0])Fd=this.
FY[0];}if(this.EX>0){if(EI<=this.DG[0])ER=Fd;else if((ER-EI)<(Fd-ER))ER=EI;else ER=
Fd;}else if(Fd>=this.DG[0])ER=EI;else if((ER-EI)>(Fd-ER))ER=Fd;else ER=EI;if(ER!==
this.DG[0]){Ji=ER-this.DG[0];if(ER!==Bf1){var Ai5=ER-Bf1;if(Ai5>0)this.EX=this.EX+
Math.sqrt((Ai5*2)*this.Adj);if(Ai5<0)this.EX=this.EX-Math.sqrt((-Ai5*2)*this.Adj
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfI=(400-(
this.EX*this.EX))/(2*Ji);this.Ao_=ER;}else this.EX=0;}if((this.DG[1]<=this.Gk[1]
)||(this.DG[1]>=this.FY[1]))this.EY=0;else if(!this.EY){var ES=this.DG[1];var Fd=
this.Gk[1];var EI=this.FY[1];if(ES<Fd)EI=this.Gk[1];else if(ES>EI)Fd=this.FY[1];
else if(this.WN[1]<=1){Fd=ES;EI=ES;}else{var Adn=(EI-ES)%this.WN[1];EI=(ES-this.
WN[1])+Adn;Fd=ES+Adn;if(EI<this.Gk[1])EI=this.Gk[1];if(Fd>this.FY[1])Fd=this.FY[
1];}if((Fd-ES)<=(ES-EI))ES=Fd;else ES=EI;if(ES!==this.DG[1]){var Ji=ES-this.DG[1
];if(Ji>0)this.EY=Math.sqrt((Ji*2)*this.Adj)+20;if(Ji<0)this.EY=-Math.sqrt((-Ji*
2)*this.Adj)-20;this.AfJ=(400-(this.EY*this.EY))/(2*Ji);this.Ao$=ES;}}else{var BBz=
this.EY*this.EY;var Ji=BBz/(2*this.Adj);var ES=this.DG[1];if(this.EY>0)ES=ES+(Ji|
0);if(this.EY<0)ES=ES-(Ji|0);if(ES>this.FY[1])ES=this.FY[1];else if(ES<this.Gk[1
])ES=this.Gk[1];var Bf2=ES;var Fd=this.Gk[1];var EI=this.FY[1];if(ES<Fd)EI=this.
Gk[1];else if(ES>EI)Fd=this.FY[1];else if(this.WN[1]<=1){Fd=ES;EI=ES;}else{var Adn=(
EI-ES)%this.WN[1];EI=(ES-this.WN[1])+Adn;Fd=ES+Adn;if(EI<this.Gk[1])EI=this.Gk[1
];if(Fd>this.FY[1])Fd=this.FY[1];}if(this.EY>0){if(EI<=this.DG[1])ES=Fd;else if((
ES-EI)<(Fd-ES))ES=EI;else ES=Fd;}else if(Fd>=this.DG[1])ES=EI;else if((ES-EI)>(Fd-
ES))ES=Fd;else ES=EI;if(ES!==this.DG[1]){Ji=ES-this.DG[1];if(ES!==Bf2){var Ai5=ES-
Bf2;if(Ai5>0)this.EY=this.EY+Math.sqrt((Ai5*2)*this.Adj);if(Ai5<0)this.EY=this.EY-
Math.sqrt((-Ai5*2)*this.Adj);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfJ=(400-(this.EY*this.EY))/(2*Ji);this.Ao$=ES;}else this.EY=
0;}if(!!BP)this.Ama=BP.Bs;if(!!Iv)this.Ama=Iv.Bs;this.Auf=this.Ama;this.Amc=this.
DG[0];this.Amd=this.DG[1];this.BBA();return this;},Yh:function(Da,BG,Ob,Aak,Ac1,
Ac0){var B;if(!!Aak&&(Aak!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;if(!this.AGE&&!!(Ac0&0xC))
return null;var Az=A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qc=
A.aaI(Da);var Fr=Cd;if(Qc[0]<Az[0])Fr=[Az[0]-Qc[0],Fr[1]];if(Qc[0]>=Az[2])Fr=[(Az[
2]-Qc[0])-1,Fr[1]];if(Qc[1]<Az[1])Fr=[Fr[0],Az[1]-Qc[1]];if(Qc[1]>=Az[3])Fr=[Fr[
0],(Az[3]-Qc[1])-1];return A._NewObject(C.AuQ,0).Initialize(this,Fr);}return null;
},A31:function(){if(!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;
}},BBA:function(){this.timer=A._GetAutoObject(A.acl.Aee);A.zV([this,this.Mc],this.
timer,0);},Mc:function(G){var B;if(!this.timer)return;var Auk=(this.timer.Bs-this.
Ama)*0.001;var Aul=(this.timer.Bs-this.Auf)*0.001;var BBK=Auk*Auk;var BBL=Aul*Aul;
var AiH=(this.AfI*Auk)+this.EX;var AiI=(this.AfJ*Aul)+this.EY;var CC=[((((this.AfI
*0.5)*BBK)+(this.EX*Auk))+this.Amc)|0,((((this.AfJ*0.5)*BBL)+(this.EY*Aul))+this.
Amd)|0];if(this.XF&&(Auk>=0.5)){CC=[this.Ao_,CC[1]];this.EX=0;this.AfI=0;this.Amc=
CC[0];this.XF=false;}else if(this.XF){var LK=1-Math.pow(1-(Auk/0.5),5);CC=[(this.
Amc+((this.Ao_-this.Amc)*LK))|0,CC[1]];}if(this.XG&&(Aul>=0.5)){CC=[CC[0],this.Ao$
];this.EY=0;this.AfJ=0;this.Amd=CC[1];this.XG=false;}else if(this.XG){var LK=1-Math.
pow(1-(Aul/0.5),5);CC=[CC[0],(this.Amd+((this.Ao$-this.Amd)*LK))|0];}if(((this.EX>
0)&&(AiH<0))||((this.EX<0)&&(AiH>0))){AiH=0;CC=[this.DG[0],CC[1]];}if(((this.EY>
0)&&(AiI<0))||((this.EY<0)&&(AiI>0))){AiI=0;CC=[CC[0],this.DG[1]];}if(!this.XF&&(
CC[0]<this.Gk[0])){this.Amc=CC[0];this.Ao_=this.Gk[0];this.Ama=this.timer.Bs;this.
XF=true;}else if(!this.XF&&(CC[0]>this.FY[0])){this.Amc=CC[0];this.Ao_=this.FY[0
];this.Ama=this.timer.Bs;this.XF=true;}if(!this.XG&&(CC[1]<this.Gk[1])){this.Amd=
CC[1];this.Ao$=this.Gk[1];this.Auf=this.timer.Bs;this.XG=true;}else if(!this.XG&&(
CC[1]>this.FY[1])){this.Amd=CC[1];this.Ao$=this.FY[1];this.Auf=this.timer.Bs;this.
XG=true;}if(((!this.XF&&!!this.EX)&&(AiH>-20))&&(AiH<20)){CC=[this.Ao_,CC[1]];this.
EX=0;this.AfI=0;this.Amc=CC[0];}if(((!this.XG&&!!this.EY)&&(AiI>-20))&&(AiI<20)){
CC=[CC[0],this.Ao$];this.EY=0;this.AfJ=0;this.Amd=CC[1];}if(!A.aaX(CC,this.DG)){
this.A5C=A.abe(CC,this.DG);this.DG=CC;(B=this.At3)?B[1].call(B[0],this):null;(B=
this.AFX)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XF)&&!this.
XG){this.A31();this.ZM=false;(B=this.Zn)?B[1].call(B[0],this):null;}},ATs:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WN=E;},AS0:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6j)return;this.A6j=E;if(E<(1e-007))E=1e-007;this.Adj=
E*10000;},_Init:function(aArg){C.Es._Init.call(this,aArg);this.__proto__=C.H7;this.
U=0x10011B;},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKH)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFX
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zn)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BM={Ah:null,Ln:null,BN:null,D1:null,ApS:
0,Bs:0,A_M:0,Filter:148,CO:0,DP:0,Bw:true,Down:false,Ach:false,NH:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(Afv
);this.Ah=C1.AKn;C1.AKn=this;},GY:function(CN){var B;if(!!CN&&CN.Bi9(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DP=CN.DP;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_M=this.ApS;this.Ach=this.ApS>0;if(this.Ach)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BN)?B[1].call(B[0],this):null;if(!this.NH)this.ApS=this.
ApS+1;return!this.NH;}if(!CN.Down){this.Ach=this.ApS>1;this.A_M=this.ApS-1;this.
ApS=0;(B=this.Ln)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BM;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuQ={Ch:null,AuS:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ch=Ag;this.DG=
aOffset;this.AuS=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuQ;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ch)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7u={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A7u;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Ari={Ny:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Ari;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ny)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.ADY={AiQ:A.wf,AiP:A.wf,_Init:function(aArg
){C.Ari._Init.call(this,aArg);this.__proto__=C.ADY;},_className:"Core::LayoutLineContext"
};C.ADZ={AAJ:A.wf,AAI:A.wf,AiQ:A.wf,AiP:A.wf,_Init:function(aArg){C.Ari._Init.call(
this,aArg);this.__proto__=C.ADZ;},_className:"Core::LayoutQuadContext"};C.ANU={C1:
null,Ah:null,Rx:null,RG:null,Ma:null,ApO:null,_Init:function(aArg){this.__proto__=
C.ANU;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rx)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApO)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUX={FK:null,B_:null,B9:null,Bdp:false,
Byd:function(){if(!this.FK)return;var Pg=this.FK;this.FK.Pb=null;this.FK=null;A.
pe([this,this.A2$],this);Pg.A7W(this);},Bz1:function(G){if(!!this.FK)return;if(!
this.B9)return;this.FK=this.B9;this.B9=this.B9.Ah;if(!!this.B9)this.B9.AJ=null;else
this.B_=null;this.FK.Ah=null;this.Bdp=true;this.FK.SC(this);this.Bdp=false;},BAl:
function(G){A.pe([this,this.Bz1],this);},BAk:function(G){A.pe([this,this.BAl],this
);},A2$:function(G){A.pe([this,this.BAk],this);},Bhb:function(Je){if(!Je||!Je.Pb
)return;if(Je.Pb!==this)throw new Error(Aab);var Bgv=false;if(this.FK===Je){this.
FK=null;Bgv=true;A.pe([this,this.A2$],this);}else{if(!!Je.Ah)Je.Ah.AJ=Je.AJ;else
this.B_=Je.AJ;if(!!Je.AJ)Je.AJ.Ah=Je.Ah;else this.B9=Je.Ah;Je.AJ=null;Je.Ah=null;
}Je.Pb=null;if(Bgv)Je.A7V(this);},A_U:function(Je,A00){if(!Je)return;if(!!Je.Pb)
throw new Error(W$);Je.Pb=this;if(A00){Je.Ah=this.B9;if(!!this.B9)this.B9.AJ=Je;
else this.B_=Je;this.B9=Je;}else{Je.AJ=this.B_;if(!!this.B_)this.B_.Ah=Je;else this.
B9=Je;this.B_=Je;}if(!this.FK)A.pe([this,this.A2$],this);},_Init:function(aArg){
this.__proto__=C.AUX;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkW={Pb:null,AJ:null,Ah:
null,A7W:function(Ato){},A7V:function(Ato){},SC:function(Ato){this.Amw();},Mk:function(
){if(!!this.Pb&&(this.Pb.FK===this))this.Pb.Byd();},Amw:function(){if(!!this.Pb)
this.Pb.Bhb(this);},AQ3:function(){return!!this.Pb&&(this.Pb.FK===this);},_Init:
function(aArg){this.__proto__=C.AkW;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pb)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUV={At:null,Auh:
null,SC:function(Ato){this.Auh.At=this.At;A.we(this.Auh,0);A.pe([this,this.BzY],
this);},BzY:function(G){this.Auh.At=null;this.Auh=null;this.At=null;this.Mk();},
_Init:function(aArg){C.AkW._Init.call(this,aArg);this.__proto__=C.AUV;},_Mark:function(
D){var B;C.AkW._Mark.call(this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxC={_Init:function(){C.AUX._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aht={resource:null,Lb:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Aht;this.Init(aArg);A.h7++;},_Done:function(){this.Lb();this.__proto__=null;A.
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
0);this.Bs=this.Avj();},Avj:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avj();if(!this.
Period)this.Ar(false);(B=this.Mx)?B[1].call(B[0],this):null;},AxA:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mx)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUp:0,AvV:0
,AjS:0,GH:0,He:0,Year:0,BcY:function(AfF,A0s){if(A0s)switch(AfF){case 1:return A.
aci.Bjg;case 2:return A.aci.Bh$;case 3:return A.aci.Bjy;case 4:return A.aci.BgS;
case 5:return A.aci.BjC;case 6:return A.aci.Bjj;case 7:return A.aci.Bji;case 8:return A.
aci.BgU;case 9:return A.aci.Boc;case 10:return A.aci.BjW;case 11:return A.aci.BjV;
case 12:return A.aci.Bhz;default:return A.jV;}else switch(AfF){case 1:return A.aci.
ADS;case 2:return A.aci.ACC;case 3:return A.aci.AD4;case 4:return A.aci.ABD;case
5:return A.aci.AD7;case 6:return A.aci.ADU;case 7:return A.aci.ADT;case 8:return A.
aci.ABK;case 9:return A.aci.AGs;case 10:return A.aci.AEh;case 11:return A.aci.AEf;
case 12:return A.aci.ACn;default:return A.jV;}},BcW:function(Bbv,A0s){if(A0s)switch(
Bbv){case 1:return A.aci.BjH;case 2:return A.aci.Bpx;case 3:return A.aci.Bqd;case
4:return A.aci.Bpi;case 5:return A.aci.Bim;case 6:return A.aci.Bn7;case 0:return A.
aci.Bo7;default:return A.jV;}else switch(Bbv){case 1:return A.aci.BjG;case 2:return A.
aci.Bpw;case 3:return A.aci.Bqc;case 4:return A.aci.Bph;case 5:return A.aci.Bil;
case 6:return A.aci.Bn6;case 0:return A.aci.Bo6;default:return A.jV;}},BcV:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JN:function(){var d=this.GH;var K3=this.He;var Dg=this.Year-((
K3<=2)?1:0);var Azz=(((Dg>=0)?Dg:Dg-399)/400)|0;var Amk=Dg-(Azz*400);var U_=(((((
153*(K3+((K3>2)?-3:9)))+2)/5)|0)+d)-1;var Ao7=(((Amk*365)+((Amk/4)|0))-((Amk/100
)|0))+U_;var Qe=((Azz*146097)+Ao7)-719468;return(((Qe*86400)+(this.AjS*3600))+(this.
AvV*60))+this.AUp;},AFF:function(E){var B;E+=62162035200;if(E<0)E=0;var Vm=Math.
trunc(E/86400)|0;var Azz=(((Vm>=0)?Vm:Vm-146096)/146097)|0;var Ao7=Vm-(Azz*146097
);var Amk=((((Ao7-((Ao7/1460)|0))+((Ao7/36524)|0))-((Ao7/146096)|0))/365)|0;var Dg=
Amk+(Azz*400);var U_=Ao7-(((365*Amk)+((Amk/4)|0))-((Amk/100)|0));var A2x=(((5*U_
)+2)/153)|0;var d=(U_-((((153*A2x)+2)/5)|0))+1;var K3=A2x+((A2x<10)?3:-9);var BK=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K3<=2)?1:0);this.Um(K3);this.Lp(d);this.Anx(BK+((BK<0)?24:0));this.AnA(O+((O<0)?
60:0));this.AnD(s+((s<0)?60:0));},Zo:function(){if(this.He===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
He===4)||(this.He===6))||(this.He===9))||(this.He===11))return 30;else return 31;
},Bk6:function(){var B;var U_=this.Ab0()-1;var AtE=(6+this.Av7())%7;var Ao9=((371+
AtE)-U_)%7;if(this.He===12){var d=this.GH;if((d===31)&&(AtE<3))return 0;if((d===
30)&&(AtE<2))return 0;if((d===29)&&(AtE<1))return 0;}if(Ao9<=3)U_+=Ao9;else U_-=(
7-Ao9);if(U_<0){var d=this.GH;var K3=this.He;this.Year--;this.Lp(31);this.Um(12);
U_=this.Ab0()-1;AtE=(6+this.Av7())%7;Ao9=((371+AtE)-U_)%7;if(Ao9<=3)U_+=Ao9;else
U_-=Ao9;this.Year++;this.Lp(d);this.Um(K3);}return(U_/7)|0;},Ab0:function(){var B;
var d=this.GH;var K3=this.He;var Dg=this.Year;var Af2=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K3){case 2:d+=31;break;case 3:d+=(59+Af2);break;case 4:
d+=(90+Af2);break;case 5:d+=(120+Af2);break;case 6:d+=(151+Af2);break;case 7:d+=(
181+Af2);break;case 8:d+=(212+Af2);break;case 9:d+=(243+Af2);break;case 10:d+=(273+
Af2);break;case 11:d+=(304+Af2);break;case 12:d+=(334+Af2);break;default:;}return d;
},Av7:function(){var B;var d=this.GH;var K3=this.He+((this.He>2)?-2:10);var Dg=this.
Year-((this.He<=2)?1:0);var B3=(Dg/100)|0;Dg%=100;d+=((((((((26*K3)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnD:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUp=E;},AnA:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvV=E;},Anx:function(E){if(E<0)E=0;if(E>23)E=23;this.AjS=E;},Lp:function(
E){if(E<1)E=1;if(E>31)E=31;this.GH=E;},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.
He=E;},Format:function(Is){var result=A.jV;var inx=0;while(!!(Is.charCodeAt(inx)||
0))if((Is.charCodeAt(inx)||0)===0x25){var AaE=1;inx=inx+1;if((Is.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaE=0;}switch(Is.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GH,2*AaE,10);break;case 0x48:result=result+A.abl(this.AjS,2*AaE,10);break;
case 0x49:if(!(this.AjS%12))result=result+Aac;else result=result+A.abl(this.AjS%
12,2*AaE,10);break;case 0x6D:result=result+A.abl(this.He,2*AaE,10);break;case 0x4D:
result=result+A.abl(this.AvV,2*AaE,10);break;case 0x70:if(this.AjS<12)result=result+
A.aci.BgB;else result=result+A.aci.Bnu;break;case 0x53:result=result+A.abl(this.
AUp,2*AaE,10);break;case 0x77:result=result+A.abl(this.Av7(),AaE,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaE,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaE,10);break;case 0x25:result=result+Aad;break;case 0x6A:result=result+
A.abl(this.Ab0(),3*AaE,10);break;case 0x57:result=result+A.abl(this.Bk6(),2*AaE,
10);break;case 0x61:result=result+this.BcW(this.Av7(),true);break;case 0x41:result=
result+this.BcW(this.Av7(),false);break;case 0x62:result=result+this.BcY(this.He
,true);break;case 0x42:result=result+this.BcY(this.He,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Is.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac2,AfF,Bwv,BwM,Bw3,Bxk){this.Year=Ac2;this.
Um(AfF);this.Lp(Bwv);this.Anx(BwM);this.AnA(Bw3);this.AnD(Bxk);return this;},Initialize:
function(Ah4){this.AFF(Ah4);return this;},BhE:function(Ah4){if(!Ah4)return A._NewObject(
C.An2,0).Initialize(this.JN());return A._NewObject(C.An2,0).Initialize(this.JN()-
Ah4.JN());},BoH:function(AyT){if(!AyT)return this;return A._NewObject(C.Bs,0).Initialize(
this.JN()-AyT.JN());},J:function(AyT){if(!AyT)return this;return A._NewObject(C.
Bs,0).Initialize(this.JN()+AyT.JN());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An2={AGp:0,AD_:0,ADl:0,Ki:0,JN:function(
){return(((this.Ki*86400)+(this.ADl*3600))+(this.AD_*60))+this.AGp;},AFF:function(
E){var AK3=1;this.Ki=Math.trunc(E/86400)|0;if(E<0){E=-E;AK3=-1;}this.ADl=AK3*(Math.
trunc(E/3600)%24|0);this.AD_=AK3*(Math.trunc(E/60)%60|0);this.AGp=AK3*(E%60|0);}
,Initialize2:function(Bww,BwN,Bw4,Bxn){this.Ki=Bww;this.ADl=BwN;this.AD_=Bw4;this.
AGp=Bxn;return this;},Initialize:function(Ah4){this.AFF(Ah4);return this;},_Init:
function(aArg){this.__proto__=C.An2;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$g={At:null,Pb:null,Trigger:function(Bwq,A00){var Pg=A._NewObject(C.AUV,0);
Pg.Auh=this;Pg.At=Bwq;this.Pb.A_U(Pg,A00);},_Init:function(aArg){this.__proto__=
C.A$g;this.Pb=A._GetAutoObject(C.AxC);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$h={JI:null,Event:null,ASc:null,AtW:function(G){var B;if(
!this.Event)return;this.JI=this.Event.At;(B=this.ASc)?B[1].call(B[0],this):null;
this.JI=null;},BlJ:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtW],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtW],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$h;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFJ={Du:0x1,BCt:0x2,BDB:0x4,BFy:0x8,Bw:0x10,H6:0x20
,BDC:0x40,BEh:0x80,BDx:0x100,BDX:0x200,BDl:0x400,BEV:0x800,Bk:0x1000,BFG:0x2000,
BEE:0x4000,BEF:0x8000,Abi:0x10000,BED:0x20000,BE6:0x40000,BDc:0x80000,BEN:0x100000
,BC8:0x200000};C.PH={BEW:0x1,BEX:0x2,BCp:0x4,BCq:0x8,BCr:0x10,BCo:0x20};C.AgQ={None:
0,BFu:1,BCM:2,BD2:3,BE0:4,BFv:5,BFw:6,BCN:7,BCO:8,BD4:9,BD3:10,BE2:11,BE1:12};C.
AuU={None:0,BFs:1,Left:2,BCK:3,ZR:4,A4_:5,BFt:6,Right:7,BCL:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BEY={BFP:0x1,BFM:0x2,BFN:0x4,BFO:
0x8,BD6:0x10,BDE:0x20};
C._Init=function(){C.Akf.__proto__=C.Ch;C.ZB.__proto__=C.Ch;C.Es.__proto__=C.Ch;C.
P.__proto__=C.Es;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARj.__proto__=
C.Event;C.AuP.__proto__=C.Event;C.Aea.__proto__=C.Event;C.AqG.__proto__=C.Event;
C.Y.__proto__=C.Es;C.CM.__proto__=C.P;C.Dy.__proto__=C.P;C.Bn.__proto__=C.ZB;C.H7.
__proto__=C.Es;C.ADY.__proto__=C.Ari;C.ADZ.__proto__=C.Ari;C.AUV.__proto__=C.AkW;
};C._ReInit=function(){var B;if((B=C.AxC._this))B._ReInit(),C.AxC._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxC._this)&&(B._cycle!=D))B._Done(C.AxC._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */