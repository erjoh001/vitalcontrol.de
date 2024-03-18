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
var O1="No fader to perform the fade-in/out operation";var P2="Trying to use the same fader twice";
var P3="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Fb="View is not in this group";var Lt="Sibling view does not belong to the group";
var P4="No view to remove";var JY="No view to add";var N_="View already in a group";
var P5="Recursive invalidate during active update cycle.";var ME=[-8,-8,9,9];var
S5="No group to end the modal state.";var UP="The group is not modal.";var Z4="No group to obtain the modal state.";
var W2="The group serves already as the \'virtual keyboard\'.";var Iq="The group is already modal.";
var UQ="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z5="The method SwitchToDialog() is not available in Core::VerticalList.";
var W3="The method DismissDialog() is not available in Core::VerticalList.";var Z6=
"The method PresentDialog() is not available in Core::VerticalList.";var W4="The method FadeGroup() is not available in Core::VerticalList.";
var Z7="The method RestackBehind() is not available in Core::VerticalList.";var Z8=
"The method RestackTop() is not available in Core::VerticalList.";var UR="The method Restack() is not available in Core::VerticalList.";
var W5="The method Remove() is not available in Core::VerticalList.";var P6="The method AddBehind() is not available in Core::VerticalList.";
var Z9="The method Add() is not available in Core::VerticalList.";var O2="The Slide Touch Handler:";
var Ri="is already connected with a view.";var W6="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W7=[0,0,170,120];var W8="The method SwitchToDialog() is not available in Core::HorizontalList.";
var W9="The method DismissDialog() is not available in Core::HorizontalList.";var
Z_="The method PresentDialog() is not available in Core::HorizontalList.";var W_=
"The method FadeGroup() is not available in Core::HorizontalList.";var W$="The method RestackBehind() is not available in Core::HorizontalList.";
var S6="The method RestackTop() is not available in Core::HorizontalList.";var US=
"The method Restack() is not available in Core::HorizontalList.";var UT="The method Remove() is not available in Core::HorizontalList.";
var AcM="The method AddBehind() is not available in Core::HorizontalList.";var S7=
"The method Add() is not available in Core::HorizontalList.";var Z$=[0,0,1,1];var
Afw="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aaa="Trying to cancel a task not belonging to this queue!";var Xa="Trying to enqueue a task twice!";
var Aab="12";var Aac="%";
C.Ci={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,JW:0,PH:0x14,AtP:function(BI,Ah3){}
,Ar5:function(E){if(this.JW===E)return;this.JW=E;if(!!this.Ab){var Ai4=this.Ah;var
G8=0;while(!!Ai4&&(E>Ai4.JW)){Ai4=Ai4.Ah;G8=G8+1;}Ai4=this.AJ;while(!!Ai4&&(E<Ai4.
JW)){Ai4=Ai4.AJ;G8=G8-1;}if(!!G8)this.Ab.JU(this,G8);}},AZ:function(E){var B;var
G8=E^this.PH;if(!G8)return;this.PH=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JF],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.Ny.U=this.Ev.
Ny.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},Ij:function(
){var B0=this.Ab;while(!!B0){var IA=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IA)return IA;
B0=B0.Ab;}return null;},Kk:function(CZ,aClip,aOffset,Cj,aBlend){},GetClipping:function(
){return this.GetExtent();},GZ:function(CN){return null;},Yi:function(Da,BG,Ob,Aaj
,Ac1,Ac0){return null;},Auz:function(Da){return Da;},AuJ:function(BI,MI){return Cd;
},Ang:function(aOffset,Atm){},GetExtent:function(){return BF;},Cy:function(Rq,U2
){var B;if(((this.U&0x200)===0x200))Rq=Rq&~0x400;var A2B=(this.U&~U2)|Rq;var Xu=
A2B^this.U;this.U=A2B;if(!!this.Ab&&!!(Xu&0x14)){var BcK=((this.U&0x14)===0x14);
if(BcK&&!this.Ab.AV)this.Ab.Bb(this);if(!BcK&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACH(this,0x14));}if(!!this.Ab&&!!(Xu&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A2B&0x400)===0x400))&&((Xu&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}if(!!this.Ab&&((Xu&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JF],this);}if(((((Xu&0x100000)===0x100000)&&((U2&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cy(0x0,0x10);if(((((
Xu&0x100000)===0x100000)&&((Rq&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cy(0x10,0x0);if(((((Xu&0x200000)===0x200000)&&((U2&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cy(
0x10,0x0);if((((((Xu&0x200000)===0x200000)&&((Rq&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G9.C1!==this)))
)this.Cy(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ci;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akg={ED:A.wf,Es:A.wf
,AtP:function(BI,Ah3){var At=A._NewObject(C.AD1,0);this.Ev=null;At.extent=this.getExtent(
);At.Bd=BI;At.Ny=Ah3;At.AiQ=this.Es;At.AiR=this.ED;this.Ev=At;},AuJ:function(BI,
MI){var B;var EW=this.PH;var At=(C.AD1.isPrototypeOf(B=this.Ev)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var J8=[BI[
2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=y2-y1;var tmp;if(!MI){var NB=[(B=At.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NB[0]!==J8[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qq=((EW&0x1)===0x1);if(!HS&&(Qq||!HT))x1=((
x1*J8[0])/NB[0])|0;if(!HT&&(Qq||!HS)){x2=x2-At.Bd[0];x2=((x2*J8[0])/NB[0])|0;x2=
x2-J8[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];if(!Qq){if(HS&&!HT)x2=x1+BY;
else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J8[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qr=((EW&0x2)===0x2);if(!HU&&(Qr||!HR))y1=((y1*J8[1])/NB[
1])|0;if(!HR&&(Qr||!HU)){y2=y2-At.Bd[1];y2=((y2*J8[1])/NB[1])|0;y2=y2-J8[1];}else
y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qr){if(HU&&!HR)y2=y1+BK;else if(!HU&&
HR)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-At.Bd[3];y1=y1+
BI[1];y2=y2+BI[3];}}else{switch(MI){case 3:{x1=BI[0];x2=x1+BY;}break;case 4:{x2=
BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;}break;case 2:{y2=BI[3];y1=y2-BK;
}break;default:;}if((MI===3)||(MI===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qr=((EW&0x2)===0x2);if(Qr){y1=BI[1];y2=BI[3];}else if(HU&&!HR){y1=
BI[1];y2=y1+BK;}else if(HR&&!HU){y2=BI[3];y1=y2-BK;}else{y1=BI[1]+((((BI[3]-BI[1
])-BK)/2)|0);y2=y1+BK;}}if((MI===1)||(MI===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qq=((EW&0x1)===0x1);if(Qq){x1=BI[0];x2=BI[2];}else if(HS&&!HT
){x1=BI[0];x2=x1+BY;}else if(HT&&!HS){x2=BI[2];x1=x2-BY;}else{x1=BI[0]+((((BI[2]-
BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BK=y2-y1;if(
At.AiR[0]<At.AiQ[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.AiR[1]<At.AiQ[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Es=[x1,y1];this.ED=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Ev=At;}return[BY,BK];},Ang:function(aOffset,Atm){if(Atm){this.Es=A.abf(this.Es,aOffset
);this.ED=A.abf(this.ED,aOffset);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.
abf(this.ED,aOffset));}},GetExtent:function(){if(!!this.Ev&&this.Ev.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Es[0];var y1=this.Es[
1];var x2=this.ED[0];var y2=this.ED[1];var BY=x2-x1;var BK=y2-y1;var tmp;if(BY<0
)BY=-BY;if(BK<0)BK=-BK;if(BY>=BK){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BK>=BY){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},DM:function(
E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.Es=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JF],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.
Akg;},_className:"Core::LineView"};C.ZB={Ku:A.wf,Mz:A.wf,ED:A.wf,Es:A.wf,AtP:function(
BI,Ah3){var At=A._NewObject(C.AD2,0);this.Ev=null;At.extent=this.GetExtent();At.
Bd=BI;At.Ny=Ah3;At.AiQ=this.Es;At.AiR=this.ED;At.AAJ=this.Mz;At.AAK=this.Ku;this.
Ev=At;},AuJ:function(BI,MI){var B;var EW=this.PH;var At=(C.AD2.isPrototypeOf(B=this.
Ev)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var J8=[BI[2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=y2-y1;if(!MI){var
NB=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NB[0]!==J8[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qq=((EW&0x1)===0x1);if(!HS&&(
Qq||!HT))x1=((x1*J8[0])/NB[0])|0;if(!HT&&(Qq||!HS)){x2=x2-At.Bd[0];x2=((x2*J8[0]
)/NB[0])|0;x2=x2-J8[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];if(!Qq){if(HS&&
!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J8[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qr=((EW&0x2)===0x2);if(!HU&&(Qr||!HR))y1=((
y1*J8[1])/NB[1])|0;if(!HR&&(Qr||!HU)){y2=y2-At.Bd[1];y2=((y2*J8[1])/NB[1])|0;y2=
y2-J8[1];}else y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qr){if(HU&&!HR)y2=y1+BK;
else if(!HU&&HR)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-
At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MI){case 3:{x1=BI[0];x2=x1+BY;}break;
case 4:{x2=BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;}break;case 2:{y2=BI[
3];y1=y2-BK;}break;default:;}if((MI===3)||(MI===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qr=((EW&0x2)===0x2);if(Qr){y1=BI[1];y2=BI[3];}else if(
HU&&!HR){y1=BI[1];y2=y1+BK;}else if(HR&&!HU){y2=BI[3];y1=y2-BK;}else{y1=BI[1]+((((
BI[3]-BI[1])-BK)/2)|0);y2=y1+BK;}}if((MI===1)||(MI===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qq=((EW&0x1)===0x1);if(Qq){x1=BI[0];x2=BI[2];}else if(
HS&&!HT){x1=BI[0];x2=x1+BY;}else if(HT&&!HS){x2=BI[2];x1=x2-BY;}else{x1=BI[0]+((((
BI[2]-BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BK=(
y2-y1)-1;var Aiu=At.extent[0];var Aiw=At.extent[1];var AfW=(At.extent[2]-Aiu)-1;
var AfV=(At.extent[3]-Aiw)-1;if(!AfW)AfW=1;if(!AfV)AfV=1;if(((this.U&0x100)===0x100
)){this.Es=[x1+((((At.AiQ[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiQ[1]-Aiw)*BK)/AfV)|0)];
this.ED=[x1+((((At.AiR[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiR[1]-Aiw)*BK)/AfV)|0)];this.
Mz=[x1+((((At.AAJ[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAJ[1]-Aiw)*BK)/AfV)|0)];this.Ku=[
x1+((((At.AAK[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAK[1]-Aiw)*BK)/AfV)|0)];}else{this.
DM([x1+((((At.AiQ[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiQ[1]-Aiw)*BK)/AfV)|0)]);this.DC([
x1+((((At.AiR[0]-Aiu)*BY)/AfW)|0),y1+((((At.AiR[1]-Aiw)*BK)/AfV)|0)]);this.Kr([x1+((((
At.AAJ[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAJ[1]-Aiw)*BK)/AfV)|0)]);this.JQ([x1+((((At.
AAK[0]-Aiu)*BY)/AfW)|0),y1+((((At.AAK[1]-Aiw)*BK)/AfV)|0)]);this.Ev=At;}return[BY+
1,BK+1];},Ang:function(aOffset,Atm){if(Atm){this.Es=A.abf(this.Es,aOffset);this.
ED=A.abf(this.ED,aOffset);this.Mz=A.abf(this.Mz,aOffset);this.Ku=A.abf(this.Ku,aOffset
);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.abf(this.ED,aOffset));this.Kr(
A.abf(this.Mz,aOffset));this.JQ(A.abf(this.Ku,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BF;var x1=this.Es[0];var y1=this.Es[1];var x2=
this.Mz[0];var y2=this.Mz[1];if((((this.Ku[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.Ku[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.Mz[0]<x1)x1=
this.Mz[0];if(this.Ku[0]<x1)x1=this.Ku[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
Mz[1]<y1)y1=this.Mz[1];if(this.Ku[1]<y1)y1=this.Ku[1];if(this.Es[0]>x2)x2=this.Es[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.Ku[0]>x2)x2=this.Ku[0];if(this.Es[1]>y2
)y2=this.Es[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.Ku[1]>y2)y2=this.Ku[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JQ:function(E){var B;if(A.aaX(E,this.Ku))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Ku=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},Kr:function(E){var B;if(A.aaX(E,
this.Mz))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Ev=null;this.Mz=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},DC:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JF],this);}},DM:function(E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Es=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JF],this);}},AQ8:function(KY){var Hy=A.abi(4,
A.wf,null);var O=0;var Ic=3;var A19=false;var A1_=false;Hy.Set(0,this.Es);Hy.Set(
1,this.ED);Hy.Set(2,this.Mz);Hy.Set(3,this.Ku);while(O<4){var Bgt=Hy.Get(O)[0];var
ALt=Hy.Get(O)[1];var BB$=Hy.Get(Ic)[0];var A4i=Hy.Get(Ic)[1];if(((ALt>KY[1])!==(
A4i>KY[1]))||((ALt<KY[1])!==(A4i<KY[1]))){var En=((((BB$-Bgt)*(KY[1]-ALt))/(A4i-
ALt))|0)+Bgt;if(KY[0]>En)A19=!A19;if(KY[0]<En)A1_=!A1_;}Ic=O;O=O+1;}return A19||
A1_;},BiS:function(){return((((this.Es[0]===this.Ku[0])&&(this.ED[0]===this.Mz[0
]))&&(this.Es[1]===this.ED[1]))&&(this.Mz[1]===this.Ku[1]))||((((this.Es[0]===this.
ED[0])&&(this.Mz[0]===this.Ku[0]))&&(this.Es[1]===this.Ku[1]))&&(this.ED[1]===this.
Mz[1]));},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.ZB;},
_className:"Core::QuadView"};C.Et={M:A.wg,AtP:function(BI,Ah3){var At=A._NewObject(
C.Ark,0);At.extent=this.M;At.Bd=BI;At.Ny=Ah3;this.Ev=At;},AuJ:function(BI,MI){var
B;var EW=this.PH;var At=this.Ev;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var J8=[BI[2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=
y2-y1;if(!MI){var NB=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];
if(NB[0]!==J8[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qq=((EW&0x1
)===0x1);if(!HS&&(Qq||!HT))x1=((x1*J8[0])/NB[0])|0;if(!HT&&(Qq||!HS)){x2=x2-At.Bd[
0];x2=((x2*J8[0])/NB[0])|0;x2=x2-J8[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[
2];if(!Qq){if(HS&&!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J8[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qr=((EW&0x2)===0x2);if(
!HU&&(Qr||!HR))y1=((y1*J8[1])/NB[1])|0;if(!HR&&(Qr||!HU)){y2=y2-At.Bd[1];y2=((y2
*J8[1])/NB[1])|0;y2=y2-J8[1];}else y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qr
){if(HU&&!HR)y2=y1+BK;else if(!HU&&HR)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=
y1+BK;}}}else{y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MI){case 3:{x1=
BI[0];x2=x1+BY;}break;case 4:{x2=BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;
}break;case 2:{y2=BI[3];y1=y2-BK;}break;default:;}if((MI===3)||(MI===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qr=((EW&0x2)===0x2);if(Qr){y1=BI[
1];y2=BI[3];}else if(HU&&!HR){y1=BI[1];y2=y1+BK;}else if(HR&&!HU){y2=BI[3];y1=y2-
BK;}else{y1=BI[1]+((((BI[3]-BI[1])-BK)/2)|0);y2=y1+BK;}}if((MI===1)||(MI===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qq=((EW&0x1)===0x1);if(Qq){x1=BI[
0];x2=BI[2];}else if(HS&&!HT){x1=BI[0];x2=x1+BY;}else if(HT&&!HS){x2=BI[2];x1=x2-
BY;}else{x1=BI[0]+((((BI[2]-BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=At;}return[x2-x1,y2-y1];},Ang:function(aOffset,Atm){if(Atm)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JF],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.
__proto__=C.Et;},_className:"Core::RectView"};C.P={B_:null,B$:null,AKo:null,FA:null
,G9:null,Xv:null,ApR:null,AV:null,G3:255,AzB:0,AzE:0,AzD:0,AzC:0,Init:function(aArg
){this.An();},Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;Cj=((Cj+1)*this.G3)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FA||(CZ.C1===this))this.Bcz(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cj,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Cj&0xFF)<<24);this.FA.Update();CZ.A5t(aClip,this.FA,0,A.abh(this.M,aOffset),Cd,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FA)return Az;
Az=[].concat(Az[0]-this.AzC,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzE);Az=A.abN(
Az,Az[2]+this.AzD);Az=[].concat(Az.slice(0,3),Az[3]+this.AzB);if(((this.U&0x80000
)===0x80000)){var Ap4=BF;var X;for(X=this.B_;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap4=
A.wC(Ap4,X.GetClipping());Az=A.wC(Az,A.abh(Ap4,this.M.slice(0,2)));}return Az;},
Yi:function(Da,BG,Ob,Aaj,Ac1,Ac0){var B;var X=this.B$;var Apk=null;var AE=BF;var
J9=null;var A2r=!!this.Xv&&(!!this.Xv.FM||!!this.Xv.B_);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac1){X=Ac1;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J9){J9=X.
AJ;while(!!J9&&!((J9.U&0x200)===0x200))J9=J9.AJ;if(!!J9)AE=A.lb(Da,J9.GetExtent(
));else AE=BF;}if(J9===X){J9=null;AE=BF;}if((!!Aaj&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.G9.C1===X)&&!A2r))
)){var extent=X.GetExtent();var AJR=Aaj;var Ao7=null;if(AJR===X)AJR=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao7=X.Yi(AE
,BG,Ob,AJR,Ac1,Ac0);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aaj===
X))Ao7=X.Yi(Da,BG,Ob,AJR,Ac1,Ac0);X=X.AJ;if(!!Ao7){if(!Apk||((Ao7.AuU<Apk.AuU)&&(
Ao7.AuU>=0)))Apk=Ao7;if(!Ao7.AuU)X=null;}}else X=X.AJ;Ac1=null;}return Apk;},Auz:
function(Da){var B;var F;var X=this.B_;var LA=BF;var AAD=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At1=(C.Y.isPrototypeOf(
X)?X:null);LA=A.lb(Da,At1.M);AAD=((At1.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAD){var AE=A.lb(X.GetClipping(),LA);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.Auz(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.Auz(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cy:function(Rq,U2){var B;
var Tk=this.U;if(((!!this.Ab&&!!!this.FA)&&((this.U&0x80001)===0x80001))&&((U2&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Et.Cy.call(this,Rq,U2);if((((!!this.
Ab&&!!!this.FA)&&((this.U&0x1)===0x1))&&((Rq&0x80000)===0x80000))&&!((Tk&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xu=this.U^Tk;if(!!this.AV&&((Xu&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cy(0x40,0x0);else this.AV.Cy(0x0
,0x40);}if(!!this.G9&&((Xu&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.G9.C1.
U&0x14)===0x14))this.G9.C1.Cy(0x40,0x0);else this.G9.C1.Cy(0x0,0x40);}if(((Xu&0x10
)===0x10)){var X;for(X=this.B_;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.G9.C1===X)))X.Cy(Rq&0x10,U2&
0x10);}if(!!Xu){this.U=this.U|0x8000;A.pe([this,this.ABi],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlW=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKw=[
E[2]-E[0],E[3]-E[1]];var Ap0=!A.aaX(AlW,AKw);if(Ap0&&!!this.FA){this.FA.ArQ(AKw);
A.we(this,0);A.we(this.FA,0);}C.Et.H.call(this,E);if((Ap0&&(AlW[0]>0))&&(AlW[1]>
0)){var Bd=[].concat(Cd,AlW);var X=this.B_;while(!!X){if((!X.Ev&&(X.PH!==0x14))&&
!((X.U&0x400)===0x400))X.AtP(Bd,null);X=X.Ah;}}if(Ap0){this.U=this.U|0x5000;A.pe([
this,this.ABi],this);}},A3x:function(CN){var Bdu=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKo;if(!Bdu)return null;while(!!D5&&(!D5.Bw||!D5.GZ(Bdu)))D5=D5.
Ah;return D5;},BBV:function(G){if(!!this.FA){this.FA.C1=this;var AE=A.abg(this.Auz(
A.abh(this.FA.QJ,this.M.slice(0,2))),this.M.slice(0,2));this.FA.Avc(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bcz(this.FA,AE,Cd,255,true);this.FA.
C1=null;}},Bcz:function(CZ,aClip,aOffset,Cj,aBlend){var B;var X=this.B_;var LA=BF;
var AAD=true;this.BhO(CZ,aClip,aOffset,Cj,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At1=(C.Y.isPrototypeOf(X)?X:null);AAD=((At1.U&0x1)===0x1);LA=aClip;if(!((
At1.U&0x80000)===0x80000))LA=A.lb(LA,A.abh(At1.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAD){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LA
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kk(CZ,AE,aOffset,Cj,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kk(CZ,AE,aOffset,Cj,aBlend);}}X=X.Ah;}this.BhR(CZ,aClip,aOffset,Cj,aBlend);},Bfs:
function(){var B;var A12=((this.U&0x1000)===0x1000);var AiC=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aat=false;var Adi=BF;var K0=BF;var Aau=Cd;var AtL=0;var AtM=0;
var AtK=0;var Qj=0;var X=this.B$;var J9=null;var AlO=null;while(!!X){if(((X.U&0x800
)===0x800)){Aat=true;X.U=X.U&~0x800;}if(Aat&&((X.U&0x200)===0x200)){Aat=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgS)X.U=X.U|0x1000;}X=X.AJ;}Aat=false;X=this.B_;
if(A12){this.U=this.U&~0x1000;A12=!((AiC[0]>=AiC[2])||(AiC[1]>=AiC[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlO&&(AtK!==Qj)){var AdG=X;var AKS=0;var AAZ=Adi[2]-
Adi[0];var Azb=Adi[3]-Adi[1];var AJG=0;var Ap$=Cd;do if(((AdG.U&0x200)===0x200))
AdG=null;else if(((AdG.U&0x401)===0x401)){Ap$=[(B=AdG.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qj===3)||(Qj===4))AAZ=AAZ-Ap$[0];if((Qj===1)||(Qj===2))Azb=Azb-Ap$[1];
if(!AlO||((AAZ>=0)&&(Azb>=0))){AlO=AdG;AdG=AdG.Ah;if((Qj===3)||(Qj===4)){AAZ=AAZ-
AtL;if(Ap$[1]>AKS)AKS=Ap$[1];}if((Qj===1)||(Qj===2)){Azb=Azb-AtM;if(Ap$[0]>AJG)AJG=
Ap$[0];}}else AdG=null;}else AdG=AdG.Ah;while(!!AdG);if(!AlO)AlO=J9;K0=Adi;switch(
AtK){case 9:case 11:K0=[].concat(K0.slice(0,3),K0[1]+AKS);break;case 10:case 12:
K0=A.abP(K0,K0[3]-AKS);break;case 5:case 7:K0=A.abN(K0,K0[0]+AJG);break;case 6:case
8:K0=[].concat(K0[2]-AJG,K0.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.Ny!==J9))X.Ev=null;if((!X.Ev&&Aat)&&((X.PH!==0x14)||!!Qj))X.
AtP(K0,J9);}if(!!X.Ev){if(A12&&!((X.U&0x400)===0x400))X.AuJ(AiC,0);if(Aat&&((X.U&
0x400)===0x400)){var C3=X.AuJ(A.abh(K0,Aau),Qj);if(((X.U&0x1)===0x1)){var Bq=Cd;
switch(Qj){case 3:Bq=[C3[0]+AtL,Bq[1]];break;case 4:Bq=[-C3[0]-AtL,Bq[1]];break;
case 1:Bq=[Bq[0],C3[1]+AtM];break;case 2:Bq=[Bq[0],-C3[1]-AtM];break;default:;}Aau=
A.abf(Aau,Bq);}}}if(((X.U&0x200)===0x200)){if(Aat)A.pe(J9.El,J9);Aat=((X.U&0x1000
)===0x1000);J9=(C.Y.isPrototypeOf(X)?X:null);if(Aat){X.U=X.U&~0x1000;AtK=J9.AgS;
Qj=AtK;Adi=A.abh(J9.M,J9.Br);K0=Adi;Aau=Cd;AtL=J9.Space+J9.AUM;AtM=J9.Space;Aat=
!((Adi[0]>=Adi[2])||(Adi[1]>=Adi[3]));AlO=null;switch(AtK){case 9:case 10:Qj=3;break;
case 11:case 12:Qj=4;break;case 5:case 6:Qj=1;break;case 7:case 8:Qj=2;break;default:;
}}if(Aat)this.Bj(J9.M);}if(X===AlO){switch(AtK){case 9:case 11:Aau=[0,(Aau[1]+(K0[
3]-K0[1]))+AtM];break;case 10:case 12:Aau=[0,(Aau[1]-(K0[3]-K0[1]))-AtM];break;case
5:case 7:Aau=[(Aau[0]+(K0[2]-K0[0]))+AtL,0];break;case 6:case 8:Aau=[(Aau[0]-(K0[
2]-K0[0]))-AtL,0];break;default:;}AlO=null;}X=X.Ah;}if(Aat)A.pe(J9.El,J9);this.U=
this.U&~0x2000;this.Bk([AiC[2]-AiC[0],AiC[3]-AiC[1]]);},JF:function(G){A.pe([this
,this.ABi],this);},ABi:function(G){var B;var BB3=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bfs();}if(((this.U&0x8000)===
0x8000)||BB3){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E4);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cy(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cy(0x60,0x0);else E.Cy(0x20
,0x0);}},BaN:function(Aq){this.Bb(Aq);},ASk:function(){return!!this.FA;},ArJ:function(
E){var B;if(!!this.FA===E)return;if(!E){this.FA.AEo=null;this.FA.ArQ(Cd);this.FA=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FA=A._NewObject(A.Graphics.Canvas,0);this.FA.ArQ([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FA.AEo=[this,this.BBV];}A.we(this,0);},A8g:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cy(0x100000,0x0);else this.Cy(0x0
,0x100000);},Dr:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G3)return;
this.G3=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},AZ5:
function(Aq){this.Dr(Aq);},Aj:function(E){if(E)this.Cy(0x400,0x0);else this.Cy(0x0
,0x400);},Blg:function(E){if(E)this.Cy(0x2,0x0);else this.Cy(0x0,0x2);},Fl:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},ExtendClipping:function(AoH,AoI,AoJ,AoG){var B;var Ay4=this.M;var Rw=
Ay4;if(AoH<0)AoH=0;if(AoH>255)AoH=255;if(AoI<0)AoI=0;if(AoI>255)AoI=255;if(AoJ<0
)AoJ=0;if(AoJ>255)AoJ=255;if(AoG<0)AoG=0;if(AoG>255)AoG=255;Rw=[].concat(Rw[0]-(
Math.max(AoH,this.AzC)&0xFF),Rw.slice(1,4));Rw=A.abN(Rw,Rw[2]+(Math.max(AoI,this.
AzD)&0xFF));Rw=A.abP(Rw,Rw[1]-(Math.max(AoJ,this.AzE)&0xFF));Rw=[].concat(Rw.slice(
0,3),Rw[3]+(Math.max(AoG,this.AzB)&0xFF));if(AoH!==this.AzC){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FA)&&!((this.U&0x80000)===0x80000)){var Az=Rw;Az=A.abN(Az
,Ay4[0]);this.Ab.Bj(Az);}this.AzC=AoH&0xFF;}if(AoI!==this.AzD){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FA)&&!((this.U&0x80000)===0x80000)){var Az=Rw;Az=[].
concat(Ay4[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzD=AoI&0xFF;}if(AoJ!==this.AzE
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FA)&&!((this.U&0x80000)===0x80000
)){var Az=Rw;Az=[].concat(Az.slice(0,3),Ay4[1]);this.Ab.Bj(Az);}this.AzE=AoJ&0xFF;
}if(AoG!==this.AzB){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FA)&&!((this.
U&0x80000)===0x80000)){var Az=Rw;Az=A.abP(Az,Ay4[3]);this.Ab.Bj(Az);}this.AzB=AoG&
0xFF;}},BhR:function(CZ,aClip,aOffset,Cj,aBlend){},BhO:function(CZ,aClip,aOffset
,Cj,aBlend){},GetMaximalSize:function(){return Hm;},GetMinimalSize:function(){return Cd;
},AUT:function(Ir,Oa,Xg,S_,S$,Ah4,O7,Rp,Ly,Lw,Lx){var B;if(!this.G9){this.AkL(Ir
,Oa,Xg,S_,S$,null,null,Ly,Lw,Lx);return;}var AlV=this.G9;var JC=AlV.Ah;if(((Ir.U&
0x10000)===0x10000)&&(this.G9.C1!==Ir))throw new Error(IQ);var Ado=A._NewObject(
C.ANV,0);var Ry=AlV.Ry;var RH=null;var Ma=null;if(!!JC){RH=JC.RH;Ma=JC.Ma;}if(!!
JC&&!!AlV.ApQ)RH=AlV.ApQ;if(!!JC&&!!O7)Ma=O7;if(!!Ah4)Ry=Ah4;if(!Oa)Oa=A._GetAutoObject(
A.acl.AsC);if(!Xg)Xg=Oa;if(!S$)S$=S_;if(!S_)S_=S$;Ado.Ry=Xg;Ado.Ma=S_;Ado.RH=S$;
Ado.ApQ=Rp;Ado.C1=Ir;Ado.Ah=this.G9.Ah;this.G9.Ah=null;this.G9=Ado;if(this.AV===
Ir)this.Bb(null);AlV.C1.Cy(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ir.U&0x4)===
0x4))Ir.Cy(0x10040,0x0);else Ir.Cy(0x10000,0x0);if(!!Ma){this.NN(JC.C1,Ma.Ad9(),
null,null,Lx);this.NN(AlV.C1,Ry.R9(),null,null,true);this.NN(Ado.C1,Oa.R_(),Ly,Lw
,true);}else if(!!RH){this.NN(JC.C1,RH.Ad_(),null,null,Lx);this.NN(AlV.C1,Ry.R9(
),null,null,true);this.NN(Ado.C1,Oa.R_(),Ly,Lw,true);}else if(!!Ry){this.NN(AlV.
C1,Ry.R9(),null,null,Lx);this.NN(Ado.C1,Oa.R_(),Ly,Lw,true);}else this.NN(Ado.C1
,Oa.R_(),Ly,Lw,Lx);},AqG:function(Ir,Ah4,O7,Rp,Ly,Lw,Lx){var B;if(!this.G9)return;
if(!Ir)return;var KA=this.G9;var JC=this.G9.Ah;var ApW=null;while((!!KA&&(KA.C1!==
Ir))&&!!KA.Ah){ApW=KA;KA=JC;JC=KA.Ah;}if(!KA||(KA.C1!==Ir))throw new Error(Ip);if(
!ApW){this.G9=JC;KA.Ah=null;}else{ApW.Ah=JC;KA.Ah=null;}KA.C1.Cy(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JC)&&!ApW)&&((JC.C1.U&0x200000)===0x200000))JC.C1.Cy(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JC)&&!ApW)&&((JC.C1.U&0x4)===0x4))JC.C1.Cy(
0x40,0x0);var Ry=KA.Ry;var RH=null;var Ma=null;if(!!JC)RH=JC.RH;if(!!JC&&!!KA.ApQ
)RH=KA.ApQ;if(!!JC&&!!Rp)RH=Rp;if(!!ApW&&!!JC)Ma=JC.Ma;if((!!ApW&&!!JC)&&!!O7)Ma=
O7;if(!!Ah4)Ry=Ah4;if(!!Ma){this.NN(JC.C1,Ma.Ad9(),null,null,Lx);this.NN(KA.C1,Ry.
R9(),Ly,Lw,true);}else if(!!RH){this.NN(JC.C1,RH.Ad_(),null,null,Lx);this.NN(KA.
C1,Ry.R9(),Ly,Lw,true);}else this.NN(KA.C1,Ry.R9(),Ly,Lw,Lx);},AkL:function(Ir,Oa
,Xg,S_,S$,O7,Rp,Ly,Lw,Lx){var B;if(!Ir)return;if(!!this.G9&&(this.G9.C1===Ir)){this.
AUT(Ir,Oa,Xg,S_,S$,null,O7,Rp,Ly,Lw,Lx);return;}if(((Ir.U&0x10000)===0x10000))throw new
Error(IQ);var KA=A._NewObject(C.ANV,0);if(!!this.G9&&!this.G9.Ma){if(!Rp)Rp=O7;if(
!O7)O7=Rp;}var Ma=null;if(!!this.G9)Ma=this.G9.Ma;if(!!this.G9&&!!O7)Ma=O7;if(!Oa
)Oa=A._GetAutoObject(A.acl.AsC);if(!Xg)Xg=Oa;if(!S$)S$=S_;if(!S_)S_=S$;KA.Ry=Xg;
KA.Ma=S_;KA.RH=S$;KA.ApQ=Rp;if(this.AV===Ir)this.Bb(null);if(!!this.G9&&((this.G9.
C1.U&0x200000)===0x200000))this.G9.C1.Cy(0x0,0x10);if(!!this.G9)this.G9.C1.Cy(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Ir.U&0x4)===0x4))Ir.Cy(0x10040,0x0);else Ir.
Cy(0x10000,0x0);KA.C1=Ir;KA.Ah=this.G9;this.G9=KA;if(!!Ma){this.NN(this.G9.Ah.C1
,Ma.Ad9(),null,null,Lx);this.NN(Ir,Oa.R_(),Ly,Lw,true);}else this.NN(Ir,Oa.R_(),
Ly,Lw,Lx);},A6G:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7i:function(
KY){var tmp=this;while(!!tmp){KY=A.abe(KY,tmp.M.slice(0,2));tmp=tmp.Ab;}return KY;
},BiN:function(KY){var tmp=this;while(!!tmp){KY=A.abf(KY,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KY;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var Gz=null;var A2r=!!this.Xv&&(!!this.Xv.FM||!!this.Xv.B_);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.G9&&!A2r)Gz=this.G9.C1.DispatchEvent(CN);if(!Gz&&!!B0)
Gz=B0.DispatchEvent(CN);else if(!Gz&&!!X)Gz=X.GZ(CN);if(!Gz)Gz=this.GZ(CN);if(!Gz
)Gz=this.A3x(CN);return Gz;},BroadcastEventAtPosition:function(CN,Hw,aFilter){var
B;var X=this.B$;var Gz=null;while(!!X&&!Gz){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hw)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)Gz=B0.
BroadcastEventAtPosition(CN,A.abe(Hw,B0.M.slice(0,2)),aFilter);else Gz=X.GZ(CN);
}X=X.AJ;}if(!Gz)Gz=this.GZ(CN);return Gz;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B$;var Gz=null;while(!!X&&!Gz){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)Gz=B0.BroadcastEvent(CN,aFilter
);else Gz=X.GZ(CN);}X=X.AJ;}if(!Gz)Gz=this.GZ(CN);if(!Gz)Gz=this.A3x(CN);return Gz;
},Bk:function(aSize){},Ai:function(Ae){},Bi4:function(){this.U=this.U|0x4000;A.pe([
this,this.ABi],this);},An:function(){this.U=this.U|0x8000;A.pe([this,this.ABi],this
);},Bj:function(Da){var B;var B0=this;while(!!B0&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aaq=B0.FA;if(!B0.Ab&&(B0!==this)){B0.Bj(Da);return;}if(!!Aaq){var BzJ=Aaq.
QJ;Aaq.QJ=A.wC(Aaq.QJ,Da);if(!A.aaY(BzJ,Aaq.QJ)){A.we(B0,0);A.we(Aaq,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Da=A.abh(Da,Az.slice(0,2));if(!!B0.FA||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FA){Az=[].concat(Az[0]-B0.AzC,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzE);Az=A.abN(Az,Az[2]+B0.AzD);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzB);}Da=A.lb(Da,Az);}B0=B0.Ab;}},QE:function(Ag,Gw,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agd=A.aaI(Ag.GetExtent());var X=Ag;var A1b=null;var
Bcc=0;var IV=0x10000;var AKO;if(((aFilter&0x10000)===0x10000))IV=0x0;var top=((Gw===
4)||(Gw===1))||(Gw===6);var bottom=((Gw===5)||(Gw===3))||(Gw===8);var left=((Gw===
2)||(Gw===1))||(Gw===3);var right=((Gw===7)||(Gw===6))||(Gw===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B$;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IV||!((B=IV)&&((X.U&B)===B
))))for(AKO=0;AKO<2;AKO++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKO){if((left&&(s[0]>s[1]))&&(Az[2]<Agd[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agd[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agd[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agd[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agd);var
Rs=Bq;if(Rs[0]<0)Rs=[-Rs[0],Rs[1]];if(Rs[1]<0)Rs=[Rs[0],-Rs[1]];if(((((!left||(Bq[
0]<=-Rs[1]))&&(!right||(Bq[0]>=Rs[1])))&&(!top||(Bq[1]<=-Rs[0])))&&(!bottom||(Bq[
1]>=Rs[0])))&&((Rs[0]>0)||(Rs[1]>0))){var RA=Bq[0];var RB=Bq[1];var Ji=Math.sqrt((
RA*RA)+(RB*RB));var AKn=0;if(!left&&!right)AKn=Ji/Rs[1];if(!top&&!bottom)AKn=Ji/
Rs[0];Ji=(Ji*AKn)*AKn;if((Ji<Bcc)||!A1b){Bcc=Ji;A1b=X;}}}}return A1b;},AqN:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B$;var IV=0x10000;
if(((aFilter&0x10000)===0x10000))IV=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TL:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;
var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACH:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlT=Ag.Ah;var Al6=Ag.AJ;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;
while(!!AlT||!!Al6){if((!!AlT&&(!aFilter||((B=aFilter)&&((AlT.U&B)===B))))&&(!IV||
!((B=IV)&&((AlT.U&B)===B))))return AlT;if((!!Al6&&(!aFilter||((B=aFilter)&&((Al6.
U&B)===B))))&&(!IV||!((B=IV)&&((Al6.U&B)===B))))return Al6;if(!!AlT)AlT=AlT.Ah;if(
!!Al6)Al6=Al6.AJ;}return null;},Db:function(aFilter){var B;var X=this.B_;var AE=
BF;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IV||!((B=IV)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NN:function(Kz,FK,Ly,Lw
,Lx){var B;if(!Kz)return;if(!FK)throw new Error(O1);if((!!FK.P||!!FK.Ab)||!!FK.Pg
)throw new Error(P2);if(!!Kz.Ab&&(Kz.Ab!==this))throw new Error(P3);if(!this.Xv)
this.Xv=A._NewObject(C.AUY,0);FK.Ab=this;FK.P=Kz;FK.AKy=Lw;FK.A2S=Ly;if(!!Kz.ApR
)Kz.ApR.Pg.BnW(Kz.ApR);Kz.ApR=FK;Kz.U=Kz.U|0x20000;if((Lx&&!!this.Xv.B$)&&!this.
Xv.B$.AQ4())(A.acl.ACC.isPrototypeOf(B=this.Xv.B$)?B:null).A4x(FK);else{var Pg=A.
_NewObject(A.acl.ACC,0);Pg.A4x(FK);this.Xv.A_T(Pg,false);}},Ahv:function(Ag,J2){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Fb);if(!!J2&&(J2.
Ab!==this))throw new Error(Lt);if(Ag.Ah===J2)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B$=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B_=Ag.Ah;var Gy=
null;var It=this.B$;var LO=Ag.JW;if(!!J2){Gy=J2;It=J2.AJ;}if(!!Gy&&(LO>Gy.JW))LO=
Gy.JW;if(!!It&&(LO<It.JW))LO=It.JW;if(LO!==Ag.JW){Ag.Ab=null;Ag.Ar5(LO);Ag.Ab=this;
}if(!J2){if(!!this.B$)this.B$.Ah=Ag;Ag.AJ=this.B$;Ag.Ah=null;this.B$=Ag;}else{Ag.
Ah=J2;Ag.AJ=J2.AJ;J2.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B_===J2)this.B_=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZE:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Fb);if(!Ag.Ah)return;var It=this.B$;var
LO=Ag.JW;while(!!It&&(It.JW>LO))It=It.AJ;if(((It===Ag)||!It)||(It.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B_=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=It;Ag.Ah=It.Ah;It.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B$=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},JU:function(Ag,Qa){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Fb);var It=Ag;var Gy=Ag;var LO=Ag.JW;while(((Qa>0)&&!!It.Ah)&&(It.Ah.JW<=LO
)){It=It.Ah;Qa=Qa-1;}while(((Qa<0)&&!!Gy.AJ)&&(Gy.AJ.JW>=LO)){Gy=Gy.AJ;Qa=Qa+1;}
if((It===Ag)&&(Gy===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JF],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B_===Ag)this.B_=Ag.Ah;if(this.B$===Ag)this.B$=Ag.AJ;if(It
!==Ag){Ag.Ah=It.Ah;Ag.AJ=It;It.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(Gy!==Ag){Ag.Ah=Gy;
Ag.AJ=Gy.AJ;Gy.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B$=Ag;if(!Ag.AJ)this.
B_=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HN:function(Ag){var B;if(
!Ag)throw new Error(P4);if(Ag.Ab!==this)throw new Error(Fb);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JF],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JF],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
ACH(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B_===Ag
)this.B_=Ag.Ah;if(this.B$===Ag)this.B$=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cy(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AL8:function(Ag,J2
){var B;if(!Ag)throw new Error(JY);if(!!Ag.Ab)throw new Error(N_);if(!!J2&&(J2.Ab
!==this))throw new Error(Lt);var Gy=null;var It=this.B$;var LO=Ag.JW;if(!!J2){Gy=
J2;It=J2.AJ;}if(!!Gy&&(LO>Gy.JW))LO=Gy.JW;if(!!It&&(LO<It.JW))LO=It.JW;if(LO!==Ag.
JW){Ag.Ab=null;Ag.Ar5(LO);Ag.Ab=this;}if(!J2){if(!!this.B$)this.B$.Ah=Ag;Ag.AJ=this.
B$;this.B$=Ag;}else{Ag.Ah=J2;Ag.AJ=J2.AJ;J2.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B_===J2)this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOO()===Ag))Ag.Cy(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cy(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JF],this);}},J:function(Ag,Qa){var B;if(!Ag)throw new Error(
JY);if(!!Ag.Ab)throw new Error(N_);var Gy=null;var LO=Ag.JW;if(((Qa<0)&&!!this.B$
)&&(this.B$.JW>=LO)){Gy=this.B$;Qa=Qa+1;}while((((Qa<0)&&!!Gy)&&!!Gy.AJ)&&(Gy.AJ.
JW>=LO)){Gy=Gy.AJ;Qa=Qa+1;}if((!Gy&&!!this.B$)&&(this.B$.JW>LO))Gy=this.B$;while((
!!Gy&&!!Gy.AJ)&&(Gy.AJ.JW>LO))Gy=Gy.AJ;if(!Gy){Ag.Ab=this;Ag.AJ=this.B$;if(!!this.
B$)this.B$.Ah=Ag;if(!this.B_)this.B_=Ag;this.B$=Ag;}else{Ag.Ab=this;Ag.AJ=Gy.AJ;
Ag.Ah=Gy;Gy.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B_=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOO()===Ag))Ag.Cy(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cy(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JF],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JF],this);}},A8i:function(){return this.
AV;},Awf:function(){return this.G3;},_Init:function(aArg){C.Et._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Et._Mark.call(this,D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKo)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.G9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RE:null,JB:null,Fq:A.abi(10,null
,null),Aty:null,Aim:null,ABk:0,Ia:0,L8:A.abi(10,0,null),AJM:A.abi(10,A.wg,null),
Xt:A.abi(10,0,null),AfU:A.abi(10,A.wf,null),AtD:A.abi(10,0,null),Ail:A.abi(10,A.
wf,null),Xs:A.abi(10,A.wf,null),Rx:A.abi(10,A.wf,null),Ac$:A.abi(10,A.wf,null),EP:
0,AJ$:0,AJ_:0,Op:A.abi(4,0,null),Ke:A.abi(4,A.wg,null),Ka:0,Az2:0,AtR:0,AzO:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ij:function(){return this;
},Kk:function(CZ,aClip,aOffset,Cj,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.Avc(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kk.call(this,CZ,aClip
,aOffset,Cj,aBlend);},Cy:function(Rq,U2){var B;C.P.Cy.call(this,Rq,U2);if(!this.
Ab&&(((Rq&0x1)===0x1)||((U2&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rq&0x2)===0x2)||((U2&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArJ:
function(E){var B;var BzH=this.FA;C.P.ArJ.call(this,E);if(((BzH!==this.FA)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Dr:function(
E){var B;var BQ=this.G3;C.P.Dr.call(this,E);if(((BQ!==this.G3)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvO=!!this.Ia;if(!!this.Ia)CN.Bs=this.Ia;}var Gz=null;if(!!this.
JB){Gz=this.JB.C1.DispatchEvent(CN);if(!Gz)Gz=this.GZ(CN);if(!Gz)Gz=this.A3x(CN);
this.Ia=0;return Gz;}Gz=C.P.DispatchEvent.call(this,CN);this.Ia=0;return Gz;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvO=!!this.Ia;if(!!this.Ia)CN.Bs=this.Ia;}var Gz=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ia=0;return Gz;},Bj:function(Da){var
B;if(this.ABk>0)throw new Error(P5);if(!!this.FA&&!this.Ab){if(((B=this.FA.QJ)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FA,0);}this.FA.QJ=A.wC(this.FA.QJ
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Ka;O=O+1)if(!(((B=A.lb(this.Ke.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Ke.Set(O,A.wC(this.Ke.Get(O),Da));this.Op.Set(O,A.aaH(this.Ke.Get(O
)));return;}if(this.Ka<3){this.Ke.Set(this.Ka,Da);this.Op.Set(this.Ka,A.aaH(Da));
this.Ka=this.Ka+1;return;}var Ic;var RD;var Az1=0;var Az4=0;var Bcb=2147483647;this.
Ke.Set(this.Ka,Da);this.Op.Set(this.Ka,A.aaH(Da));for(Ic=0;Ic<=this.Ka;Ic=Ic+1)for(
RD=Ic+1;RD<=this.Ka;RD=RD+1){var ALg=A.aaH(A.wC(this.Ke.Get(Ic),this.Ke.Get(RD))
);var Be4=((ALg<<8)/(this.Op.Get(Ic)+this.Op.Get(RD)))|0;if(Be4<Bcb){Bcb=Be4;Az1=
Ic;Az4=RD;}}this.Ke.Set(Az1,A.wC(this.Ke.Get(Az1),this.Ke.Get(Az4)));this.Op.Set(
Az1,A.aaH(this.Ke.Get(Az1)));if(Az4!==this.Ka){this.Ke.Set(Az4,this.Ke.Get(this.
Ka));this.Op.Set(Az4,this.Op.Get(this.Ka));}},Byk:function(){var LI=A._NewObject(
C.AqI,0);LI.AvO=!!this.Ia;if(!!this.Ia)LI.Bs=this.Ia;return LI;},Ao5:function(){
var LI=A._NewObject(C.Aea,0);LI.AvO=!!this.Ia;if(!!this.Ia)LI.Bs=this.Ia;return LI;
},AtC:function(){var LI=A._NewObject(C.AuR,0);LI.AvO=!!this.Ia;if(!!this.Ia)LI.Bs=
this.Ia;return LI;},Byp:function(G){var O;var Apk=false;for(O=0;O<10;O=O+1)if(!!
this.Fq.Get(O)){var pos=this.Rx.Get(O);var B0=this.Fq.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fq.Get(O)!==this)){
var tmp=this.Fq.Get(O);this.EP=O;this.Fq.Set(O,null);tmp.GZ(this.Ao5().InitializeUp(
O,this.Ail.Get(O),this.AfU.Get(O),this.Xt.Get(O),this.L8.Get(O)+1,this.Xs.Get(O)
,false,this.Rx.Get(O),this.Ac$.Get(O)));this.BroadcastEvent(this.AtC().InitializeUp(
O,this.L8.Get(O)+1,false,tmp,this.Rx.Get(O)),0x18);}else{this.Xt.Set(O,(this.Aim.
Bs-this.AtD.Get(O))|0);if(this.Xt.Get(O)<10)this.Xt.Set(O,10);this.EP=O;this.Fq.
Get(O).GZ(this.Ao5().InitializeHold(O,pos,this.AfU.Get(O),this.Xt.Get(O),this.L8.
Get(O)+1,this.Xs.Get(O),this.Rx.Get(O),this.Ac$.Get(O)));Apk=true;}}if(!Apk)this.
Aim.Ar(false);},GetFPS:function(){var ticksCount=0;var BcP=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ$&&(ticksCount>this.AJ$))BcP=((this.AJ_*1000)/((
ticksCount-this.AJ$)|0))|0;this.AJ_=0;this.AJ$=ticksCount;return BcP;},Update:function(
){var B;if(!this.Aty)this.Aty=A._NewObject(A.Graphics.Canvas,0);this.Aty.ArQ([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Aty.Update();return this.UpdateGE20(this.Aty);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BF;var Agn=this.UpdateCanvas(
CZ,Cd);this.EndUpdate();return Agn;},EndUpdate:function(){if(this.Ka>0){this.AJ_=
this.AJ_+1;this.Ka=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Agn=BF;var Bx3=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var O;var Ic=this.Ka;this.ABk=this.
ABk+1;CZ.C1=this;for(O=0;(O<Ic)&&(O<4);O=O+1)if(this.Op.Get(O)>0){this.Kk(CZ,A.abg(
this.Ke.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agn=A.wC(Agn,A.lb(Bx3
,this.Ke.Get(O)));}else Ic=Ic+1;CZ.C1=null;this.ABk=this.ABk-1;if(!((Agn[0]>=Agn[
2])||(Agn[1]>=Agn[3])))return A.abg(Agn,aOffset);else return Agn;},GetUpdateRegion:
function(AI9){var O;var Ic=this.Ka;if(AI9<0)return BF;for(O=0;(O<Ic)&&(O<4);O=O+
1)if(!this.Op.Get(O)){Ic=Ic+1;AI9=AI9+1;}else if(O===AI9)return this.Ke.Get(O);return BF;
},BeginUpdate:function(){var B;var O;if(!!this.Ka&&!A.aaY(this.Ke.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bf8=A.abi(3,A.wg,null);var Bf7=this.Ka;for(O=0;
O<Bf7;O++)Bf8.Set(O,this.Ke.Get(O));for(O=0;O<Bf7;O++){var Bfn=A.abh(Bf8.Get(O),
this.M.slice(0,2));var Bfo=this.Auz(Bfn);if(!A.aaY(Bfn,Bfo))this.Bj(A.abg(Bfo,this.
M.slice(0,2)));}}var Ic;var RD;for(Ic=0;Ic<(this.Ka-1);Ic++)if(this.Op.Get(Ic)>0
)for(RD=Ic+1;RD<this.Ka;RD++)if(this.Op.Get(RD)>0){var ALg=A.aaH(A.wC(this.Ke.Get(
Ic),this.Ke.Get(RD)));if(((ALg-this.Op.Get(Ic))-this.Op.Get(RD))<0){this.Ke.Set(
Ic,A.wC(this.Ke.Get(Ic),this.Ke.Get(RD)));this.Op.Set(Ic,ALg);this.Op.Set(RD,0);
}}for(O=this.Ka-1;O>=0;O--)if(!this.Op.Get(O))this.Ka=this.Ka-1;return this.Ka;}
,DoesNeedUpdate:function(){if(this.Ka>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cd,aSize));if(this.AzO)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A0E){if(A0E===this.AzO
)return false;this.AzO=A0E;if(!A0E){if(!!this.JB)this.JB.C1.Cy(0x0,0x40);else this.
Cy(0x0,0x40);}else if(!!this.JB)this.JB.C1.Cy(0x40,0x0);else this.Cy(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qb){this.Ia=Qb;},DriveKeyboardHitting:function(
Ky,AyO,S9){var B;var A3y=!!this.RE;if(!!this.RE&&((!S9||(this.Az2!==Ky))||(this.
AtR!==AyO))){var LI=null;var X=(C.Ci.isPrototypeOf(B=this.RE)?B:null);var D5=(C.
BM.isPrototypeOf(B=this.RE)?B:null);if(!!this.Az2)LI=A._NewObject(C.KeyEvent,0).
Initialize(this.Az2,false);if(this.AtR!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtR,false);if(!!D5)D5.GZ(LI);else if(!!X)X.GZ(LI);this.Az2=0;this.AtR=0x00;
this.RE=null;}if(!!this.RE){var LI=null;var X=(C.Ci.isPrototypeOf(B=this.RE)?B:null
);var D5=(C.BM.isPrototypeOf(B=this.RE)?B:null);if(!!Ky)LI=A._NewObject(C.KeyEvent
,0).Initialize(Ky,true);if(this.AtR!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
AyO,true);if(!!D5)D5.GZ(LI);else if(!!X)X.GZ(LI);}if(!this.RE&&S9){if(!!Ky)this.
RE=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Ky,true));if(AyO!==0x00
)this.RE=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyO,true));if(
!(C.BM.isPrototypeOf(B=this.RE)?B:null)&&!(C.Ci.isPrototypeOf(B=this.RE)?B:null)
)this.RE=null;this.Az2=Ky;this.AtR=AyO;A3y=A3y||!!this.RE;}this.Ia=0;return A3y;
},DriveCursorMovement:function(Fd){return this.DriveMultiTouchMovement(this.EP,Fd
);},DriveMultiTouchMovement:function(BG,Fd){if((BG<0)||(BG>9)){this.Ia=0;return false;
}var Fs=A.abe(Fd,this.Rx.Get(BG));this.Rx.Set(BG,Fd);if(!this.Fq.Get(BG)||A.aaX(
Fs,Cd)){this.Ia=0;return false;}var pos=Fd;var B0=this.Fq.Get(BG).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fq.Get(BG)!==
this)){var tmp=this.Fq.Get(BG);this.EP=BG;this.Fq.Set(BG,null);tmp.GZ(this.Ao5().
InitializeUp(BG,this.Ail.Get(BG),this.AfU.Get(BG),this.Xt.Get(BG),this.L8.Get(BG
)+1,this.Xs.Get(BG),false,this.Rx.Get(BG),this.Ac$.Get(BG)));this.BroadcastEvent(
this.AtC().InitializeUp(BG,this.L8.Get(BG)+1,false,tmp,Fd),0x18);}else{this.Ail.
Set(BG,pos);this.EP=BG;this.Fq.Get(BG).GZ(this.Byk().Initialize(BG,pos,this.AfU.
Get(BG),Fs,this.Xt.Get(BG),this.L8.Get(BG)+1,this.Xs.Get(BG),Fd,this.Ac$.Get(BG)
));}this.Ia=0;return true;},DriveCursorHitting:function(S9,BG,Fd){return this.DriveMultiTouchHitting(
S9,BG,Fd);},DriveMultiTouchHitting:function(S9,BG,Fd){if((BG<0)||(BG>9)){this.Ia=
0;return false;}var ticksCount=this.Ia;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBb=this.Ia;this.DriveMultiTouchMovement(BG,Fd);Fd=this.Rx.Get(BG);
this.Ia=BBb;if(S9)this.Ac$.Set(BG,Fd);if(S9&&!this.Fq.Get(BG)){var JA;var pos=Fd;
if(A.wa(this.AJM.Get(BG),Fd)&&((ticksCount-this.AtD.Get(BG))<=250))this.L8.Set(BG
,this.L8.Get(BG)+1);else this.L8.Set(BG,0);this.AJM.Set(BG,A.abh(ME,Fd));this.AtD.
Set(BG,ticksCount);if(!!this.JB)JA=this.Yi(A.abh(ME,Fd),BG,this.L8.Get(BG)+1,this.
JB.C1,null,0x0);else JA=this.Yi(A.abh(ME,Fd),BG,this.L8.Get(BG)+1,null,null,0x0);
if(!!JA){this.BroadcastEvent(this.AtC().InitializeDown(BG,this.L8.Get(BG)+1,false
,JA.Ci,Fd),0x18);this.Fq.Set(BG,JA.Ci);this.Xs.Set(BG,JA.DG);}else{this.Fq.Set(BG
,null);this.Xs.Set(BG,Cd);this.Ia=0;return false;}var B0=JA.Ci.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfU.Set(BG,pos);this.Ail.
Set(BG,pos);this.Xt.Set(BG,0);this.Aim.Ar(true);this.EP=BG;this.Fq.Get(BG).GZ(this.
Ao5().InitializeDown(BG,pos,this.L8.Get(BG)+1,this.Xs.Get(BG),false,Fd));this.Ia=
0;return true;}if(!S9&&!!this.Fq.Get(BG)){var pos=Fd;var B0=this.Fq.Get(BG).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Ail.
Get(BG);this.EP=BG;var tmp=this.Fq.Get(BG);this.Fq.Set(BG,null);tmp.GZ(this.Ao5(
).InitializeUp(BG,pos,this.AfU.Get(BG),this.Xt.Get(BG),this.L8.Get(BG)+1,this.Xs.
Get(BG),false,Fd,this.Ac$.Get(BG)));this.BroadcastEvent(this.AtC().InitializeUp(
BG,this.L8.Get(BG)+1,false,tmp,Fd),0x18);this.Ia=0;return true;}this.Ia=0;return false;
},AUh:function(Aal,BbA,Ac1,Ac0){if(Aal===this)Aal=null;if(!!!Aal&&!!this.JB)Aal=
this.JB.C1;if(!this.Fq.Get(this.EP))return;var JA;JA=this.Yi(A.abh(ME,this.Rx.Get(
this.EP)),this.EP,1,Aal,Ac1,Ac0);if(!!JA&&(this.Fq.Get(this.EP)!==JA.Ci))this.ANL(
JA.Ci,JA.DG);if(!JA&&(this.Fq.Get(this.EP)!==BbA))this.ANL(BbA,Cd);},ANL:function(
Aal,Xh){if(!this.Fq.Get(this.EP)||(this.Fq.Get(this.EP)===Aal))return;var tmp=this.
Fq.Get(this.EP);this.Fq.Set(this.EP,null);tmp.GZ(this.Ao5().InitializeUp(this.EP
,this.Ail.Get(this.EP),this.AfU.Get(this.EP),this.Xt.Get(this.EP),this.L8.Get(this.
EP)+1,this.Xs.Get(this.EP),true,this.Rx.Get(this.EP),this.Ac$.Get(this.EP)));this.
BroadcastEvent(this.AtC().InitializeUp(this.EP,this.L8.Get(this.EP)+1,true,tmp,this.
Rx.Get(this.EP)),0x18);var pos=this.Rx.Get(this.EP);var B0=null;if(!!Aal)B0=Aal.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aal
!==this)){this.Fq.Set(this.EP,null);return;}this.BroadcastEvent(this.AtC().InitializeDown(
this.EP,this.L8.Get(this.EP)+1,true,Aal,this.Rx.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fq.Set(this.EP,Aal);this.Xs.Set(
this.EP,Xh);this.AfU.Set(this.EP,pos);this.Ail.Set(this.EP,pos);this.L8.Set(this.
EP,0);this.Xt.Set(this.EP,0);this.AtD.Set(this.EP,ticksCount);this.Ac$.Set(this.
EP,this.Rx.Get(this.EP));this.Fq.Get(this.EP).GZ(this.Ao5().InitializeDown(this.
EP,pos,this.L8.Get(this.EP)+1,this.Xs.Get(this.EP),true,this.Ac$.Get(this.EP)));
},AOO:function(){if(!!this.JB)return this.JB.C1;return null;},ACz:function(Kz){var
B;if(!Kz)throw new Error(S5);if(!((Kz.U&0x80)===0x80))throw new Error(UP);if(this.
JB.C1===Kz)this.JB=this.JB.Ah;else{var AzN=this.JB;while(AzN.Ah.C1!==Kz)AzN=AzN.
Ah;AzN.Ah=AzN.Ah.Ah;}Kz.Cy(0x0,0xD0);if(this.AzO){if(!!this.JB)this.JB.C1.Cy(0x50
,0x0);else this.Cy(0x50,0x0);}},AMT:function(Kz){var B;var At=A._NewObject(C.A7t
,0);if(!Kz)throw new Error(Z4);if(Kz===null)throw new Error(W2);if(((Kz.U&0x80)===
0x80))throw new Error(Iq);if(!!this.JB)this.JB.C1.Cy(0x0,0x50);else this.Cy(0x0,
0x50);At.Ah=this.JB;At.C1=Kz;this.JB=At;if(this.AzO)Kz.Cy(0xD0,0x0);else Kz.Cy(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Aim={
I:this},0);(this.Fq=[]).__proto__=C.Root.Fq;(this.L8=[]).__proto__=C.Root.L8;(this.
AJM=[]).__proto__=C.Root.AJM;(this.Xt=[]).__proto__=C.Root.Xt;(this.AfU=[]).__proto__=
C.Root.AfU;(this.AtD=[]).__proto__=C.Root.AtD;(this.Ail=[]).__proto__=C.Root.Ail;(
this.Xs=[]).__proto__=C.Root.Xs;(this.Rx=[]).__proto__=C.Root.Rx;(this.Ac$=[]).__proto__=
C.Root.Ac$;(this.Op=[]).__proto__=C.Root.Op;(this.Ke=[]).__proto__=C.Root.Ke;this.
__proto__=C.Root;this.U=0x10007F;this.Aim.PO(10);this.Aim.Mx=[this,this.Byp];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Aim._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Aim._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RE)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JB)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fq,D);if((B=this.
Aty)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aim)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvO:false,Init:function(aArg){this.Bs=
this.Avk();},Avk:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(Ky,S9){this.CO=0;this.DQ=Ky;this.Down=S9;if((Ky>=0x30)&&(Ky<=
0x39))this.CO=(10+Ky)-48;if((Ky>=0x41)&&(Ky<=0x5A))this.CO=(105+Ky)-65;if((Ky>=0x61
)&&(Ky<=0x7A))this.CO=(105+Ky)-97;if(Ky===0x20)this.CO=131;if(!this.CO)switch(Ky
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(Ky,S9){this.CO=Ky;this.
Down=S9;this.DQ=0x00;var A1h=Ky-10;var Atx=Ky-105;if((A1h>=0)&&(A1h<=9))this.DQ=(
48+A1h)&0xFFFF;if((Atx>=0)&&(Atx<=25))this.DQ=(65+Atx)&0xFFFF;if(Ky===131)this.DQ=
0x20;if(this.DQ===0x00)switch(Ky){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bi9:function(Bbp){switch(
Bbp){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bbp===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARk={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARk;},_className:
"Core::LanguageEvent"};C.AuR={AxE:null,LT:A.wf,N5:0,IF:0,Down:false,NF:false,InitializeUp:
function(BG,Ob,AoF,A0V,Aak){this.Down=false;this.IF=BG;this.N5=Ob;this.LT=Aak;this.
AxE=A0V;this.NF=AoF;return this;},InitializeDown:function(BG,Ob,AoF,A0V,Aak){this.
Down=true;this.IF=BG;this.N5=Ob;this.LT=Aak;this.AxE=A0V;this.NF=AoF;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuR;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxE)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aea={AgU:A.wf,LT:A.wf,N5:0,Jp:
0,NQ:A.wf,H0:A.wf,IF:0,Down:false,NF:false,InitializeHold:function(BG,Alh,AyR,AyS
,Ob,Xh,Aak,AyQ){this.Down=true;this.IF=BG;this.H0=A.abf(Alh,Xh);this.NQ=A.abf(AyR
,Xh);this.Jp=AyS;this.N5=Ob;this.LT=Aak;this.AgU=AyQ;return this;},InitializeUp:
function(BG,Alh,AyR,AyS,Ob,Xh,AoF,Aak,AyQ){this.Down=false;this.IF=BG;this.H0=A.
abf(Alh,Xh);this.NQ=A.abf(AyR,Xh);this.Jp=AyS;this.N5=Ob;this.NF=AoF;this.LT=Aak;
this.AgU=AyQ;return this;},InitializeDown:function(BG,Alh,Ob,Xh,AoF,Aak){this.Down=
true;this.IF=BG;this.H0=A.abf(Alh,Xh);this.NQ=A.abf(Alh,Xh);this.Jp=0;this.N5=Ob;
this.NF=AoF;this.LT=Aak;this.AgU=Aak;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aea;},_className:"Core::CursorEvent"};C.AqI={
AgU:A.wf,LT:A.wf,N5:0,Jp:0,DG:A.wf,NQ:A.wf,H0:A.wf,IF:0,Initialize:function(BG,Alh
,AyR,aOffset,AyS,Bxo,Xh,Aak,AyQ){this.IF=BG;this.H0=A.abf(Alh,Xh);this.NQ=A.abf(
AyR,Xh);this.DG=aOffset;this.Jp=AyS;this.N5=Bxo;this.LT=Aak;this.AgU=AyQ;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqI;},_className:
"Core::DragEvent"};C.Y={BX:null,Nw:null,El:null,Br:A.wf,AUM:0,Space:0,AgS:0,Kk:function(
CZ,aClip,aOffset,Cj,aBlend){},GetClipping:function(){var B;var Az=C.Et.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap4=BF;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap4=A.wC(Ap4,X.GetClipping());
Az=A.wC(Az,Ap4);}return Az;},Cy:function(Rq,U2){var B;var Tk=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U2&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Et.Cy.call(this,Rq,U2);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rq&0x80000)===
0x80000))&&!((Tk&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlW=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKw=[
E[2]-E[0],E[3]-E[1]];var Ap0=!A.aaX(AlW,AKw);var Fs=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fs,Cd)&&!Ap0){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ang(Fs,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((Ap0&&(AlW[0]>0))&&(AlW[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
Ny!==this))X.Ev=null;if(!X.Ev&&((X.PH!==0x14)||!!this.AgS))X.AtP(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Et.H.call(this,E);if(!!this.Ab&&Ap0){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JF],this);}}},Bfh:function(){var B;if((!this.AgS||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1C=((this.U&0x1000)===0x1000);for(;!!X&&!A1C;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1C=true;if(((X.U&0x200)===
0x200))break;}if(A1C){this.U=this.U&~0x4000;this.Ab.Bfs();}},ApK:function(G){var
B;this.BX.Q=null;this.BX.Qp=null;this.BX=null;(B=this.Nw)?B[1].call(B[0],this):null;
},F$:function(E){var B;var Fs=A.abe(E,this.Br);if(A.aaX(Fs,Cd))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ang(Fs,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.El,this);},A_b:function(E){var B;if(E<0)E=0;if(E===this.AUM)return;this.AUM=
E;if(!!this.Ab&&!!this.AgS){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JF],this);}},Bm4:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgS){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JF],this);}},JO:function(E){var B;if(E===this.AgS)return;
this.AgS=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JF],this);}},Vu:function(AcV,E5){var Atx=this.Db(0x1);var Rv=this.M;var
Ve=A.abe(Atx.slice(0,2),Rv.slice(0,2));var L_=A.abe(Atx.slice(2,4),Rv.slice(2,4)
);var Bq=Cd;if((Ve[0]>0)&&(L_[0]>Ve[0]))Bq=[Ve[0],Bq[1]];else if((Ve[0]>0)&&(L_[
0]>0))Bq=[L_[0],Bq[1]];if((L_[0]<0)&&(Ve[0]<L_[0]))Bq=[L_[0],Bq[1]];else if((L_[
0]<0)&&(Ve[0]<0))Bq=[Ve[0],Bq[1]];if((Ve[1]>0)&&(L_[1]>Ve[1]))Bq=[Bq[0],Ve[1]];else
if((Ve[1]>0)&&(L_[1]>0))Bq=[Bq[0],L_[1]];if((L_[1]<0)&&(Ve[1]<L_[1]))Bq=[Bq[0],L_[
1]];else if((L_[1]<0)&&(Ve[1]<0))Bq=[Bq[0],Ve[1]];if(A.aaX(Bq,Cd)){(E5)?E5[1].call(
E5[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qp=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F$(A.abe(this.Br,Bq));(E5)?E5[
1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.
Anr,this.F$];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qp=[this,this.
ApK];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E5;}},HD:function(Ag,AcY,AcV,E5
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UQ);this.Bfh();var Az=Ag.GetExtent();var Bd=this.M;var LM=A.lb(Az,Bd);if((!AcY&&
!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcY&&A.aaY(LM,Az))){(E5)?E5[1].call(E5[0],this
):null;return;}var Bq=Cd;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qp=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F$(A.abe(this.Br,Bq));(E5
)?E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anr,this.F$];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qp=[this
,this.ApK];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E5;}},Biz:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TL:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IV=0x10000;if(((aFilter&0x10000)===0x10000))IV=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IV||!((B=IV)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BF;var IV=0x10000;this.Bfh();if(((
aFilter&0x10000)===0x10000))IV=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IV||!((B=IV)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anr:function(){return this.Br;},_Init:
function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Et._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
Hx:null,BX:null,Ci:null,WM:null,Nw:null,El:null,Hg:null,Th:-1,Tg:0,Jl:-1,Ho:0,AiF:
8,Oi:0,Uu:0,AcJ:A.wf,G1:-1,Br:0,Gp:-1,OP:0,GK:24,AY:0,Lh:null,NM:false,AtS:false
,AUT:function(Ir,Oa,Xg,S_,S$,Ah4,O7,Rp,Ly,Lw,Lx){throw new Error(Z5);},AqG:function(
Ir,Ah4,O7,Rp,Ly,Lw,Lx){throw new Error(W3);},AkL:function(Ir,Oa,Xg,S_,S$,O7,Rp,Ly
,Lw,Lx){throw new Error(Z6);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gp>=0)&&(this.Gp<this.AY))&&!this.AV){this.G1=this.Gp;this.Ci=(C.Ci.isPrototypeOf(
B=A._NewObject(this.Lh,0))?B:null);if(!!this.B$)this.B$.Ah=this.Ci;else this.B_=
this.Ci;this.Ci.AJ=this.B$;this.B$=this.Ci;this.Ci.Ab=this;this.AcJ=[(B=this.M)[
2]-B[0],this.GK];(B=this.Hg)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Ci)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Ci.GZ(CN
);if(!!this.Ci.AJ)this.Ci.AJ.Ah=null;else this.B_=null;this.B$=this.Ci.AJ;this.Ci.
AJ=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Lh){A.pe(this.El,this);return;
}this.AtS=true;var AAG=0;if(!this.NM)AAG=this.OP;var FO=this.Al5(-AAG-this.Br,1);
var GU=this.Al5(((((B=this.M)[3]-B[1])-AAG)-this.Br)-1,2);var CB=GU-FO;if(CB<1)CB=
1;var Aif=(CB/2)|0;var Aig=(CB/3)|0;if(!Aif)Aif=1;if(!Aig)Aig=1;if(FO<this.Ho){FO=
FO-Aif;GU=GU+Aig;}else if(GU>this.Jl){FO=FO-Aig;GU=GU+Aif;}else{FO=this.Ho;GU=this.
Jl;}if(!this.NM){if(FO>=this.AY){FO=0;GU=-1;}else if(GU<0){FO=0;GU=-1;}if(GU>=this.
AY)GU=this.AY-1;if(FO<0)FO=0;}else if(this.AY<=0){FO=0;GU=-1;}var AiX=this.Ho;var
AiY=this.Jl;var Apx=0;var Apy=-1;if(FO>AiX)AiX=FO;if(GU<AiY)AiY=GU;if(AiX<=AiY){
while((this.Jl<GU)&&(this.Ho<AiX)){this.AdA();this.Azg();}while((this.Ho>FO)&&(this.
Jl>AiY)){this.AAT();this.Azf();}}else{this.Jl=(this.Jl-this.Ho)+FO;this.Ho=FO;Apx=
this.Ho;Apy=this.Jl;}while(this.Ho<FO)this.AdA();while(this.Jl>GU)this.AAT();while(
this.Ho>FO)this.Azf();while(this.Jl<GU)this.Azg();var Aa=this.B_;var inx=this.Ho;
var pos=[0,(AAG+this.Br)+this.Jj(inx,0)];var BK=(B=this.M)[3]-B[1];var AlE=null;
var Bgf=(B=this.M)[2]-B[0];while(!!Aa){var Ix=inx;if(this.NM){if(Ix<0)Ix=this.AY-(-
Ix%this.AY);if(Ix>0)Ix=Ix%this.AY;}var AdB=((Ix>=this.Tg)&&(Ix<=this.Th))||((inx>=
Apx)&&(inx<=Apy));var Ape=Aa.GetExtent();var Bq=A.abe(pos,Ape.slice(0,2));if(AdB
)this.Uu=this.GK;else this.Uu=Ape[3]-Ape[1];var A2g=pos[1];var A2h=pos[1]+this.Uu;
if(!A.aaX(Bq,Cd))Aa.Ang(Bq,true);if((AdB&&(A2g<BK))&&(A2h>0)){this.Ci=Aa;this.G1=
Ix;this.AcJ=[Bgf,this.Uu];(B=this.Hg)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uu];}inx=this.Ho;Aa=this.B_;pos=[0,(AAG+this.Br)+this.Jj(
inx,0)];while(!!Aa){var Ix=inx;if(this.NM){if(Ix<0)Ix=this.AY-(-Ix%this.AY);if(Ix>
0)Ix=Ix%this.AY;}var AdB=((Ix>=this.Tg)&&(Ix<=this.Th))||((inx>=Apx)&&(inx<=Apy)
);if(AdB)this.Uu=this.GK;else this.Uu=(B=Aa.GetExtent())[3]-B[1];var A2g=pos[1];
var A2h=pos[1]+this.Uu;if(AdB&&!((A2g<BK)&&(A2h>0))){this.Ci=Aa;this.G1=Ix;this.
AcJ=[Bgf,this.Uu];(B=this.Hg)?B[1].call(B[0],this):null;}if(((Ix===this.Gp)&&this.
NM)&&!!AlE){var Rv=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rv))>A.aaH(A.lb(AlE.GetExtent(),Rv)))AlE=Aa;}else if(Ix===this.Gp)AlE=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uu];}this.Tg=0;this.Th=-1;this.Ci=null;this.G1=-
1;this.Bb(AlE);this.AtS=false;A.pe(this.El,this);},QE:function(Ag,Gw,aFilter){return null;
},AqN:function(Ag,aFilter){return null;},TL:function(Ag,aFilter){return null;},ACH:
function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
Kz,FK,Ly,Lw,Lx){throw new Error(W4);},Ahv:function(Ag,J2){throw new Error(Z7);},
ZE:function(Ag){throw new Error(Z8);},JU:function(Ag,Qa){throw new Error(UR);},HN:
function(Ag){throw new Error(W5);},AL8:function(Ag,J2){throw new Error(P6);},J:function(
Ag,Qa){throw new Error(Z9);},Jj:function(G6,A0v){return G6*this.GK;},Al5:function(
Fd,A0v){return(Fd/this.GK)|0;},AAT:function(){var Aa=this.B$;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jl=this.Jl-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B_=null;this.B$=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Oi<this.AiF){if(!
!this.Hx)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Azg:function(
){var B;var Aa=this.Hx;var Adl=this.Lh;var AdF=++this.Jl;if(this.NM){if(AdF<0)AdF=
this.AY-(-AdF%this.AY);if(AdF>0)AdF=AdF%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adl))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiF++;
}this.Uu=this.GK;this.G1=AdF;this.AcJ=[(B=this.M)[2]-B[0],this.Uu];this.Ci=Aa;(B=
this.Hg)?B[1].call(B[0],this):null;this.Ci=null;this.G1=-1;if(!!this.B$)this.B$.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B$;this.B$=Aa;if(!this.B_)this.B_=Aa;if(AdF===this.Gp
)this.Bb(Aa);return Aa;},AdA:function(){var Aa=this.B_;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ho=this.Ho+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B$=null;
this.B_=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Oi<this.AiF){if(!!this.Hx
)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Azf:function(){var
B;var Aa=this.Hx;var Adl=this.Lh;var MX=--this.Ho;if(this.NM){if(MX<0)MX=this.AY-(-
MX%this.AY);if(MX>0)MX=MX%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adl)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.Hx===
Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ci.isPrototypeOf(B=
A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiF++;}this.Uu=this.GK;
this.G1=MX;this.AcJ=[(B=this.M)[2]-B[0],this.Uu];this.Ci=Aa;(B=this.Hg)?B[1].call(
B[0],this):null;this.Ci=null;this.G1=-1;if(!!this.B_)this.B_.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B_;this.B_=Aa;if(!this.B$)this.B$=Aa;if(MX===this.Gp)this.Bb(Aa);return Aa;
},ApK:function(G){var B;this.BX.Q=null;this.BX.Qp=null;this.BX=null;(B=this.Nw)?
B[1].call(B[0],this):null;},BAx:function(G){this.F$(this.WM.DG[1]);},BAy:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qp=null;this.BX=
null;}if(!this.NM){var AE=this.AqU(0,this.AY-1);var Agd=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OP);if(AE[0]>Agd[0])AE=[].concat(Agd[0],AE.slice(1,4));if(AE[1]>Agd[
1])AE=A.abP(AE,Agd[1]);var Fs=AE[1]-this.M[1];var A2v=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2v>0)A2v=0;this.WM.DG=[0,this.Br];this.WM.Gl=[0,(this.Br+A2v)-Fs];this.
WM.FZ=[0,this.Br-Fs];}else{var Fs=32000-(32000%this.GK);this.WM.DG=[0,this.Br];this.
WM.Gl=[0,this.Br-Fs];this.WM.FZ=[0,this.Br+Fs];}},ASZ:function(E){var B;if(this.
NM===E)return;this.NM=E;while(!!this.AdA());this.An();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},AwZ:function(E){if(E===this.WM)return;if(!!E&&!!E.At5){A.ab5(
"%s%*%s",O2,E,Ri);throw new Error(W6);}if(!!this.WM){this.WM.AKI=null;this.WM.At5=
null;}this.WM=E;if(!!E){E.AKI=[this,this.BAy];E.At5=[this,this.BAx];}},F$:function(
E){var B;if(this.NM&&(this.AY>0)){var Hz=this.Jj(this.AY,3);if(E<0)E=Hz-(-E%Hz);
if(E>0)E=E%Hz;if(E>0)E=E-Hz;}if(E===this.Br)return;this.Br=E;this.An();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GO:function(E){if(E<0)E=-1;if(E===this.Gp)return;
this.Gp=E;this.An();},A90:function(E){var B;if(E<0)E=0;if(E===this.OP)return;this.
OP=E;if(!this.NM){this.An();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae3:function(
E){var B;if(E<1)E=1;if(E===this.GK)return;this.GK=E;while(!!this.AdA());this.An(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ju:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jj(E,3));AE=A.abP(AE
,(this.OP+this.Br)+this.Jj(this.AY,3));}else{AE=A.abP(AE,(this.OP+this.Br)+this.
Jj(E,3));AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jj(this.AY,3));}}else
while(!!this.AdA());this.AY=E;this.An();this.Bj(AE);},NZ:function(E){var B;if(E===
this.Lh)return;this.Lh=E;while(!!this.AdA());this.Hx=null;this.Oi=0;this.An();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiM:function(G6){if(this.AtS)return null;
if((G6<0)||(G6>=this.AY))return null;if(!this.NM){if((G6<this.Ho)||(G6>this.Jl))
return null;var X=this.B_;while(G6>this.Ho){X=X.Ah;G6=G6-1;}return X;}else{var MX=
this.Ho;if(MX<0)MX=this.AY-(-MX%this.AY);if(MX>0)MX=MX%this.AY;var X=this.B_;while(
!!X){if((MX%this.AY)===G6)return X;X=X.Ah;MX=MX+1;}return null;}},ABA:function(AcV
,E5){var B;if(this.NM){(E5)?E5[1].call(E5[0],this):null;return;}var AKa=this.Br;
var BcQ=((((B=this.M)[3]-B[1])-this.Br)-this.OP)-this.Jj(this.AY,3);var Bq=0;if(
AKa>0)Bq=-AKa;else if(BcQ>0)Bq=BcQ;if((Bq>0)&&(Bq>-AKa))Bq=-AKa;if(!Bq){(E5)?E5[
1].call(E5[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qp=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F$(this.Br+Bq);(E5)?
E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anr,this.F$];this.BX.Cw=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qp=[this,this.
ApK];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E5;}},HD:function(G6,AcY,AcV,E5
){var B;if((G6<0)||(G6>=this.AY))return;var Az=this.AqU(G6,G6);var Bd=this.M;var
LM=A.lb(Az,Bd);if((!AcY&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcY&&A.aaY(LM,Az))
){(E5)?E5[1].call(E5[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qp=null;this.Nw=null;}this.BX=AcV;if(!this.BX){this.F$(this.Br-Bq);(E5)?
E5[1].call(E5[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Anr,this.F$];this.BX.Cw=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qp=[this,this.
ApK];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E5;}},BiE:function(){return BF;
},AOQ:function(){if((this.OP<=0)||this.NM)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OP);return AE;},A6w:function(Fd
){if(((this.AY<=0)||(Fd[0]<this.M[0]))||(Fd[0]>=this.M[2]))return-1;Fd=A.abe(Fd,
this.M.slice(0,2));if(!this.NM){var Aa=(Fd[1]-this.Br)-this.OP;if(Aa>0)Aa=this.Al5(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fd[1]-this.Br;if(Aa>0)
Aa=this.Al5(Aa,0);if(Aa<0)Aa=this.Al5(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqU:function(J0,L4){if(J0<0)J0=0;if(L4>=this.AY)L4=
this.AY-1;if(J0>L4)return BF;var AE=this.M;var Bq=this.Br;if(this.NM){var Hz=this.
Jj(this.AY,3);if(Bq<0)Bq=Hz-(-Bq%Hz);if(Bq>0)Bq=Bq%Hz;if(Bq>0)Bq=Bq-Hz;}else Bq=
Bq+this.OP;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jj(L4+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jj(J0,0));return AE;},AbF:function(J0,L4){var B;if(J0<0)J0=0;if(J0>L4
)return;if(this.Tg>this.Th){this.Tg=J0;this.Th=L4;}else{if(J0<this.Tg)this.Tg=J0;
if(L4>this.Th)this.Th=L4;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){
AE=A.abP(AE,(this.OP+this.Br)+this.Jj(J0,0));AE=[].concat(AE.slice(0,3),(this.OP+
this.Br)+this.Jj(L4+1,0));}else if((this.Jj(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var Hz=this.Jj(this.AY,3);if(Bq<0)Bq=Hz-(-Bq%Hz);if(
Bq>0)Bq=Bq%Hz;if(Bq>0)Bq=Bq-Hz;AE=A.abP(AE,Bq+this.Jj(J0,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jj(L4+1,0));}this.An();this.Bj(AE);},Anr:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W7);
this.Lh=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.Hx
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WM)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hg)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dy={Hx:null
,BX:null,Ci:null,Nw:null,Hg:null,Th:-1,Tg:0,Jl:-1,Ho:0,AiF:8,Oi:0,SI:0,AcJ:A.wf,
G1:-1,Br:0,Gp:-1,V$:24,AY:0,Lh:null,AtS:false,AUT:function(Ir,Oa,Xg,S_,S$,Ah4,O7
,Rp,Ly,Lw,Lx){throw new Error(W8);},AqG:function(Ir,Ah4,O7,Rp,Ly,Lw,Lx){throw new
Error(W9);},AkL:function(Ir,Oa,Xg,S_,S$,O7,Rp,Ly,Lw,Lx){throw new Error(Z_);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gp>=0)&&(this.Gp<this.AY))&&!this.AV
){this.G1=this.Gp;this.Ci=(C.Ci.isPrototypeOf(B=A._NewObject(this.Lh,0))?B:null);
if(!!this.B$)this.B$.Ah=this.Ci;else this.B_=this.Ci;this.Ci.AJ=this.B$;this.B$=
this.Ci;this.Ci.Ab=this;this.AcJ=[this.SI,(B=this.M)[3]-B[1]];(B=this.Hg)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Ci)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Ci.GZ(CN);if(!!this.Ci.AJ)this.Ci.AJ.Ah=null;else this.B_=null;
this.B$=this.Ci.AJ;this.Ci.AJ=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Lh
)return;this.AtS=true;var FO=this.Al5(0-this.Br,1);var GU=this.Al5((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=GU-FO;if(CB<1)CB=1;var Aif=(CB/2)|0;var Aig=(CB/3)|
0;if(!Aif)Aif=1;if(!Aig)Aig=1;if(FO<this.Ho){FO=FO-Aif;GU=GU+Aig;}else if(GU>this.
Jl){FO=FO-Aig;GU=GU+Aif;}else{FO=this.Ho;GU=this.Jl;}if(FO>=this.AY){FO=0;GU=-1;
}else if(GU<0){FO=0;GU=-1;}if(GU>=this.AY)GU=this.AY-1;if(FO<0)FO=0;var AiX=this.
Ho;var AiY=this.Jl;var Apx=0;var Apy=-1;if(FO>AiX)AiX=FO;if(GU<AiY)AiY=GU;if(AiX<=
AiY){while((this.Jl<GU)&&(this.Ho<AiX)){this.AdA();this.Azg();}while((this.Ho>FO
)&&(this.Jl>AiY)){this.AAT();this.Azf();}}else{this.Jl=(this.Jl-this.Ho)+FO;this.
Ho=FO;Apx=this.Ho;Apy=this.Jl;}while(this.Ho<FO)this.AdA();while(this.Jl>GU)this.
AAT();while(this.Ho>FO)this.Azf();while(this.Jl<GU)this.Azg();var Aa=this.B_;var
inx=this.Ho;var pos=[this.Br+this.Jj(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlE=
null;var Bf5=(B=this.M)[3]-B[1];while(!!Aa){var Ix=inx;var AdB=((Ix>=this.Tg)&&(
Ix<=this.Th))||((inx>=Apx)&&(inx<=Apy));var Ape=Aa.GetExtent();var Bq=A.abe(pos,
Ape.slice(0,2));if(AdB)this.SI=this.V$;else this.SI=Ape[2]-Ape[0];var A2e=pos[0];
var A2f=pos[0]+this.SI;if(!A.aaX(Bq,Cd))Aa.Ang(Bq,true);if((AdB&&(A2e<BY))&&(A2f>
0)){this.Ci=Aa;this.G1=Ix;this.AcJ=[this.SI,Bf5];(B=this.Hg)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SI,pos[1]];}inx=this.Ho;Aa=this.B_;pos=[
this.Br+this.Jj(inx,0),0];while(!!Aa){var Ix=inx;var AdB=((Ix>=this.Tg)&&(Ix<=this.
Th))||((inx>=Apx)&&(inx<=Apy));if(AdB)this.SI=this.V$;else this.SI=(B=Aa.GetExtent(
))[2]-B[0];var A2e=pos[0];var A2f=pos[0]+this.SI;if(AdB&&!((A2e<BY)&&(A2f>0))){this.
Ci=Aa;this.G1=Ix;this.AcJ=[this.SI,Bf5];(B=this.Hg)?B[1].call(B[0],this):null;}if(
Ix===this.Gp)AlE=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SI,pos[1]];}this.Tg=0;this.
Th=-1;this.Ci=null;this.G1=-1;this.Bb(AlE);this.AtS=false;},QE:function(Ag,Gw,aFilter
){return null;},AqN:function(Ag,aFilter){return null;},TL:function(Ag,aFilter){return null;
},ACH:function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
Kz,FK,Ly,Lw,Lx){throw new Error(W_);},Ahv:function(Ag,J2){throw new Error(W$);},
ZE:function(Ag){throw new Error(S6);},JU:function(Ag,Qa){throw new Error(US);},HN:
function(Ag){throw new Error(UT);},AL8:function(Ag,J2){throw new Error(AcM);},J:
function(Ag,Qa){throw new Error(S7);},Jj:function(G6,A0v){return G6*this.V$;},Al5:
function(Fd,A0v){return(Fd/this.V$)|0;},AAT:function(){var Aa=this.B$;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jl=this.Jl-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B_=null;this.B$=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Oi<this.AiF){if(!
!this.Hx)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Azg:function(
){var B;var Aa=this.Hx;var Adl=this.Lh;var AdF=++this.Jl;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adl))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{
Aa=(C.Ci.isPrototypeOf(B=A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.
AiF++;}this.SI=this.V$;this.G1=AdF;this.AcJ=[this.SI,(B=this.M)[3]-B[1]];this.Ci=
Aa;(B=this.Hg)?B[1].call(B[0],this):null;this.Ci=null;this.G1=-1;if(!!this.B$)this.
B$.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B$;this.B$=Aa;if(!this.B_)this.B_=Aa;if(AdF===this.
Gp)this.Bb(Aa);return Aa;},AdA:function(){var Aa=this.B_;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ho=this.Ho+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B$=null;
this.B_=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Oi<this.AiF){if(!!this.Hx
)this.Hx.AJ=Aa;Aa.Ah=this.Hx;this.Hx=Aa;this.Oi++;}return Aa;},Azf:function(){var
B;var Aa=this.Hx;var Adl=this.Lh;var MX=--this.Ho;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adl))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hx===Aa)this.Hx=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Adl,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiF++;
}this.SI=this.V$;this.G1=MX;this.AcJ=[this.SI,(B=this.M)[3]-B[1]];this.Ci=Aa;(B=
this.Hg)?B[1].call(B[0],this):null;this.Ci=null;this.G1=-1;if(!!this.B_)this.B_.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B_;this.B_=Aa;if(!this.B$)this.B$=Aa;if(MX===this.Gp
)this.Bb(Aa);return Aa;},ApK:function(G){var B;this.BX.Q=null;this.BX.Qp=null;this.
BX=null;(B=this.Nw)?B[1].call(B[0],this):null;},F$:function(E){var B;if(E===this.
Br)return;this.Br=E;this.An();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GO:function(
E){if(E<0)E=-1;if(E===this.Gp)return;this.Gp=E;this.An();},AFe:function(E){var B;
if(E<1)E=1;if(E===this.V$)return;this.V$=E;while(!!this.AdA());this.An();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ju:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jj(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jj(E,3));}else{AE=
A.abN(AE,this.Br+this.Jj(this.AY,3));AE=[].concat(this.Br+this.Jj(E,3),AE.slice(
1,4));}this.AY=E;this.An();this.Bj(AE);},NZ:function(E){var B;if(E===this.Lh)return;
this.Lh=E;while(!!this.AdA());this.Hx=null;this.Oi=0;this.An();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BoD:function(Bxp,Bxq){if(!this.BX)return;if(Bxp)this.F$(
this.BX.B2);var A38=this.Nw;this.BX.Ar(false);this.BX.Q=null;this.BX.Qp=null;this.
Nw=null;this.BX=null;if(Bxq)(A38)?A38[1].call(A38[0],this):null;},Bjc:function(){
return!!this.BX;},HD:function(G6,AcY,AcV,E5){var B;if((G6<0)||(G6>=this.AY))return;
var Az=this.AqU(G6,G6);var Bd=this.M;var LM=A.lb(Az,Bd);if((!AcY&&!((LM[0]>=LM[2
])||(LM[1]>=LM[3])))||(AcY&&A.aaY(LM,Az))){(E5)?E5[1].call(E5[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qp=null;this.Nw=null;}this.BX=
AcV;if(!this.BX){this.F$(this.Br-Bq);(E5)?E5[1].call(E5[0],this):null;}else{this.
BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.Anr,this.F$];this.BX.Cw=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qp=[this,this.ApK];this.BX.Ae6(false);this.BX.Ar(true
);this.Nw=E5;}},AqU:function(J0,L4){if(J0<0)J0=0;if(L4>=this.AY)L4=this.AY-1;if(
J0>L4)return BF;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jj(L4+1
,0));AE=[].concat((AE[0]+Bq)+this.Jj(J0,0),AE.slice(1,4));return AE;},AbF:function(
J0,L4){var B;if(J0<0)J0=0;if(J0>L4)return;if(this.Tg>this.Th){this.Tg=J0;this.Th=
L4;}else{if(J0<this.Tg)this.Tg=J0;if(L4>this.Th)this.Th=L4;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jj(J0,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jj(L4+1,0));this.An();this.Bj(AE);},Anr:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dy;this.H(W7);
this.Lh=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.Hx
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASc:null,AEE:null,Av2:null,D1:null,
Ll:null,BN:null,AK7:0,Bp:0,IF:0,Bs:0,N5:0,Jp:0,DG:A.wf,NQ:A.wf,H0:A.wf,Axn:8,Afb:
0,A7m:1,Down:false,YG:false,NF:false,A1J:false,AAb:0,Kk:function(CZ,aClip,aOffset
,Cj,aBlend){},GZ:function(CN){var B;var BP=(C.Aea.isPrototypeOf(CN)?CN:null);var
D4=(C.AqI.isPrototypeOf(CN)?CN:null);var AKl=this.YG;var AaI;var Vb;var ABc;var MU;
var Azz;if(!BP&&!D4)return null;AaI=(!!BP&&BP.Down)&&!BP.Jp;Vb=(!!BP&&BP.Down)&&(
BP.Jp>0);ABc=(!!BP&&BP.Down)&&(BP.Jp>this.AAb);MU=!!BP&&!BP.Down;Azz=!!D4;if(AaI
)this.AAb=((B=(BP.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afb&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iv=(C.AuR.isPrototypeOf(CN)?CN:null);if(((
!!Iv&&Iv.Down)&&(Iv.AxE!==this))&&A.wa(this.GetExtent(),this.Ab.A7i(Iv.LT))){this.
AK7=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaI){var ApE=0;var Adg;this.Bp=
this.Bp|(1<<BP.IF);for(Adg=this.Bp&4095;Adg>0;Adg=Adg>>1)if(!!(Adg&1))ApE=ApE+1;
if(ApE===1)this.Bp=(this.Bp|16777216)|(4096<<BP.IF);}if(MU&&(this.Bp<16777216)){
var IA=this.Ij();var JA=null;if(!!IA){var A30=(!!this.AJ?this.AJ:this.Ab);var A1x=(
!!IA.JB?IA.JB.C1:null);JA=IA.Yi(A.abh(Z$,BP.LT),BP.IF,BP.N5,A1x,A30,0x0);}if(!!JA
){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ci.GZ(A._NewObject(C.Aea,0).InitializeDown(
O,BP.H0,BP.N5,Cd,true,BP.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ci.GZ(A.
_NewObject(C.Aea,0).InitializeUp(O,BP.H0,BP.H0,0,BP.N5,Cd,false,BP.LT,BP.LT));}}
if(MU)this.Bp=(this.Bp&~(1<<BP.IF))|33554432;if(ABc&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MU&&BP.NF)this.Bp=this.Bp|67108864;if(MU&&!(this.Bp&4095))this.
AK7=0x0;if(MU&&!(this.Bp&16777215))this.Bp=0;if(Vb&&(this.Bp>=67108864)){var IA=
this.Ij();if(!!IA)IA.AUh(null,null,this,this.AK7);}if((Vb&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Vb=false;MU=true;}if(!!BP&&!(this.Bp&(4096<<BP.IF)))return this;
if(!!D4&&!(this.Bp&(4096<<D4.IF)))return this;if(MU&&!(this.Bp&16777216))return this;
if(((AaI||Azz)||Vb)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MU
)this.Bp=this.Bp&3758100479;if(MU&&!(this.Bp&16777215))this.Bp=0;if(!!BP){this.Down=
AaI||Vb;this.YG=this.AQ8(BP.H0);this.NQ=BP.NQ;this.H0=BP.H0;this.DG=Cd;this.Jp=BP.
Jp;this.N5=BP.N5;this.NF=BP.NF;this.IF=BP.IF;this.Bs=BP.Bs;if(BP.Down&&!BP.Jp)AKl=
false;}if(!!D4){this.Down=true;this.YG=this.AQ8(D4.H0);this.NQ=D4.NQ;this.H0=D4.
H0;this.DG=D4.DG;this.Jp=D4.Jp;this.N5=D4.N5;this.IF=D4.IF;this.NF=false;this.Bs=
D4.Bs;}var A1D=this.Down;if(!!D4)(B=this.ASc)?B[1].call(B[0],this):null;if((!!BP&&
this.Down)&&!this.Jp)(B=this.BN)?B[1].call(B[0],this):null;if((!!BP&&this.Down)&&(
this.Jp>0))(B=this.D1)?B[1].call(B[0],this):null;if((this.Down&&this.YG)&&!AKl){
this.A1J=true;(B=this.Av2)?B[1].call(B[0],this):null;}if(this.A1J&&(((A1D&&!this.
YG)&&AKl)||((!A1D&&this.YG)&&AKl))){this.A1J=false;(B=this.AEE)?B[1].call(B[0],this
):null;}if(!!BP&&!A1D)(B=this.Ll)?B[1].call(B[0],this):null;if(!!this.Afb){var Adz=
0x0;if(((((this.Afb&0x10)===0x10)&&!!BP)&&BP.Down)&&(BP.Jp>=1000))Adz=0x10;if((((
this.Afb&0x1)===0x1)&&!!D4)&&((D4.LT[1]-D4.AgU[1])<=-this.Axn))Adz=0x1;if((((this.
Afb&0x2)===0x2)&&!!D4)&&((D4.LT[1]-D4.AgU[1])>=this.Axn))Adz=0x2;if((((this.Afb&
0x4)===0x4)&&!!D4)&&((D4.LT[0]-D4.AgU[0])<=-this.Axn))Adz=0x4;if((((this.Afb&0x8
)===0x8)&&!!D4)&&((D4.LT[0]-D4.AgU[0])>=this.Axn))Adz=0x8;if(!!Adz){var IA=this.
Ij();if(!!IA){this.AK7=Adz;IA.AUh(null,this,this,Adz);}}}return this;},Yi:function(
Da,BG,Ob,Aaj,Ac1,Ac0){var B;if(!!Aaj&&(Aaj!==this))return null;if((Ob<1)||(Ob>this.
A7m))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BG)))return null;if(!!(Ac0&this.Afb))return null;if(this.BiS()){var Az=
A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qd=A.aaI(Da);
var Fs=Cd;if(Qd[0]<Az[0])Fs=[Az[0]-Qd[0],Fs[1]];if(Qd[0]>=Az[2])Fs=[(Az[2]-Qd[0]
)-1,Fs[1]];if(Qd[1]<Az[1])Fs=[Fs[0],Az[1]-Qd[1]];if(Qd[1]>=Az[3])Fs=[Fs[0],(Az[3
]-Qd[1])-1];return A._NewObject(C.AuS,0).Initialize(this,Fs);}}else{var Hy=A.abi(
9,A.wf,null);var O;Hy.Set(0,A.aaI(Da));Hy.Set(1,Hy.Get(0));Hy.Set(2,Hy.Get(0));Hy.
Set(3,Hy.Get(0));Hy.Set(4,Hy.Get(0));Hy.Set(1,[Da[0],Hy.Get(1)[1]]);Hy.Set(2,[Hy.
Get(2)[0],Da[1]]);Hy.Set(3,[Da[2],Hy.Get(3)[1]]);Hy.Set(4,[Hy.Get(4)[0],Da[3]]);
Hy.Set(5,Da.slice(0,2));Hy.Set(6,[Da[2],Da[1]]);Hy.Set(7,[Da[0],Da[3]]);Hy.Set(8
,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.AQ8(Hy.Get(O)))return A._NewObject(C.AuS
,0).Initialize(this,A.abe(Hy.Get(O),Hy.Get(0)));}return null;},BmX:function(E){if(
E<1)E=1;this.Axn=E;},AFn:function(E){if(E<1)E=1;this.A7m=E;},Ar:function(E){if(E
)this.Cy(0x100000,0x0);else this.Cy(0x0,0x100000);},_Init:function(aArg){C.ZB._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
ZB._Mark.call(this,D);if((B=this.ASc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AEE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av2)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ll)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H7={timer:null,AKI:null,At5:null,AF0:null,Zn:null,SE:null,Bp:0,AJi:0,Adj:5000
,ApZ:0,AKj:A.wf,Apb:0,AfK:0,EY:0,Ame:0,Auh:0,Apa:0,AfJ:0,EX:0,Amd:0,Amb:0,NQ:A.wf
,A5C:A.wf,FZ:A.wf,Gl:A.wf,DG:A.wf,WO:A.wf,A6j:0.5,A_Q:true,AGH:true,ZM:false,XG:
false,XH:false,AoW:false,AAb:0,Kk:function(CZ,aClip,aOffset,Cj,aBlend){},GZ:function(
CN){var B;var BP=(C.Aea.isPrototypeOf(CN)?CN:null);var D4=(C.AqI.isPrototypeOf(CN
)?CN:null);var Iv=(C.AuR.isPrototypeOf(CN)?CN:null);var AaI;var Vb;var ABc;var MU;
var Azz;AaI=(!!BP&&BP.Down)&&!BP.Jp;Vb=(!!BP&&BP.Down)&&(BP.Jp>0);ABc=(!!BP&&BP.
Down)&&(BP.Jp>this.AAb);MU=!!BP&&!BP.Down;Azz=!!D4;if(AaI)this.AAb=((B=(BP.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaI){var ApE=0;var Adg;this.Bp=this.Bp|(1<<BP.
IF);for(Adg=this.Bp&4095;Adg>0;Adg=Adg>>1)if(!!(Adg&1))ApE=ApE+1;if(ApE===1)this.
Bp=(this.Bp|16777216)|(4096<<BP.IF);}if(MU&&(this.Bp<16777216)){var IA=this.Ij();
var JA=null;if(!!IA){var A30=(!!this.AJ?this.AJ:this.Ab);var A1x=(!!IA.JB?IA.JB.
C1:null);JA=IA.Yi(A.abh(Z$,BP.LT),BP.IF,BP.N5,A1x,A30,0x0);}if(!!JA){var O;for(O=
0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ci.GZ(A._NewObject(C.Aea,0).InitializeDown(O
,BP.H0,BP.N5,Cd,true,BP.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JA.Ci.GZ(A._NewObject(
C.Aea,0).InitializeUp(O,BP.H0,BP.H0,0,BP.N5,Cd,false,BP.LT,BP.LT));}}if(MU)this.
Bp=(this.Bp&~(1<<BP.IF))|33554432;if(ABc&&(this.Bp<16777216))this.Bp=this.Bp|67108864;
if(MU&&BP.NF)this.Bp=this.Bp|67108864;if(MU&&!(this.Bp&16777215))this.Bp=0;if(Vb&&(
this.Bp>=67108864)){var IA=this.Ij();if(!!IA)IA.AUh(null,null,this,0x0);}if((Vb&&
!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vb=false;MU=true;}if(!!BP&&!(this.Bp&(
4096<<BP.IF)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IF)))return this;if(MU&&!(
this.Bp&16777216))return this;if(((AaI||Azz)||Vb)&&((this.Bp<16777216)||(this.Bp>=
33554432)))return this;if(MU)this.Bp=this.Bp&3758100479;if(MU&&!(this.Bp&16777215
))this.Bp=0;if(!!Iv&&(Iv.AxE===this))return null;if((!!Iv&&Iv.Down)&&(this.AoW||
!this.ZM))return null;if((!!Iv&&Iv.Down)&&!A.wa(this.M,this.Ab.A7i(Iv.LT)))return null;
if((!!Iv&&!Iv.Down)&&(!this.AoW||(this.AJi!==Iv.IF)))return null;if((!BP&&!D4)&&
!Iv)return null;if(!!BP){this.AoW=AaI||Vb;this.AJi=BP.IF;this.NQ=BP.NQ;}if(!!D4)
this.AJi=D4.IF;if(!!Iv){this.AoW=Iv.Down;this.AJi=Iv.IF;}if(!!Iv&&Iv.Down){this.
A31();this.EX=(((Iv.Bs-this.Amb)*0.001)*this.AfJ)+this.EX;this.EY=(((Iv.Bs-this.
Auh)*0.001)*this.AfK)+this.EY;if(this.XG)this.EX=0;if(this.XH)this.EY=0;this.AfJ=
0;this.AfK=0;this.XG=false;this.XH=false;this.AKj=this.DG;this.ApZ=Iv.Bs;return this;
}if(AaI){this.A31();this.EX=(((BP.Bs-this.Amb)*0.001)*this.AfJ)+this.EX;this.EY=(((
BP.Bs-this.Auh)*0.001)*this.AfK)+this.EY;if(this.XG||!this.ZM)this.EX=0;if(this.
XH||!this.ZM)this.EY=0;this.AfJ=0;this.AfK=0;this.XG=false;this.XH=false;if(!this.
ZM){this.ZM=true;(B=this.SE)?B[1].call(B[0],this):null;(B=this.AKI)?B[1].call(B[
0],this):null;}this.AKj=this.DG;this.ApZ=BP.Bs;}if(!!D4){var G8=A.abe(D4.H0,D4.NQ
);var CD=this.DG;if(this.AGH)CD=[this.AKj[0]+G8[0],CD[1]];CD=[CD[0],this.AKj[1]+
G8[1]];if(this.A_Q){if(CD[0]<this.Gl[0])CD=[this.Gl[0]+(((CD[0]-this.Gl[0])/2)|0
),CD[1]];else if(CD[0]>this.FZ[0])CD=[this.FZ[0]+(((CD[0]-this.FZ[0])/2)|0),CD[1
]];if(CD[1]<this.Gl[1])CD=[CD[0],this.Gl[1]+(((CD[1]-this.Gl[1])/2)|0)];else if(
CD[1]>this.FZ[1])CD=[CD[0],this.FZ[1]+(((CD[1]-this.FZ[1])/2)|0)];}else{if(CD[0]<
this.Gl[0])CD=[this.Gl[0],CD[1]];else if(CD[0]>this.FZ[0])CD=[this.FZ[0],CD[1]];
if(CD[1]<this.Gl[1])CD=[CD[0],this.Gl[1]];else if(CD[1]>this.FZ[1])CD=[CD[0],this.
FZ[1]];}if(!A.aaX(CD,this.DG)){this.A5C=A.abe(CD,this.DG);this.DG=CD;(B=this.At5
)?B[1].call(B[0],this):null;(B=this.AF0)?B[1].call(B[0],this):null;}}if((!!Iv&&!
Iv.Down)&&((Iv.Bs-this.ApZ)>=200)){this.EX=0;this.EY=0;}if(Vb&&((BP.Bs-this.ApZ)>=
200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApZ)){var G8=D4.DG;var Bdh=1000/(
D4.Bs-this.ApZ);var AiI=0;var AiJ;if(this.AGH)AiI=G8[0]*Bdh;AiJ=G8[1]*Bdh;if((AiI
*this.EX)<0)this.EX=0;if((AiJ*this.EY)<0)this.EY=0;this.EX=(this.EX+AiI)*0.5;this.
EY=(this.EY+AiJ)*0.5;this.ApZ=D4.Bs;}if(!MU&&!Iv)return this;if(!!BP&&BP.NF){this.
EX=0;this.EY=0;}if((this.DG[0]<=this.Gl[0])||(this.DG[0]>=this.FZ[0]))this.EX=0;
else if(!this.EX){var ER=this.DG[0];var Ff=this.Gl[0];var EJ=this.FZ[0];if(ER<Ff
)EJ=this.Gl[0];else if(ER>EJ)Ff=this.FZ[0];else if(this.WO[0]<=1){Ff=ER;EJ=ER;}else{
var Adn=(EJ-ER)%this.WO[0];EJ=(ER-this.WO[0])+Adn;Ff=ER+Adn;if(EJ<this.Gl[0])EJ=
this.Gl[0];if(Ff>this.FZ[0])Ff=this.FZ[0];}if((Ff-ER)<=(ER-EJ))ER=Ff;else ER=EJ;
if(ER!==this.DG[0]){var Ji=ER-this.DG[0];if(Ji>0)this.EX=Math.sqrt((Ji*2)*this.Adj
)+20;if(Ji<0)this.EX=-Math.sqrt((-Ji*2)*this.Adj)-20;this.AfJ=(400-(this.EX*this.
EX))/(2*Ji);this.Apa=ER;}}else{var BBx=this.EX*this.EX;var Ji=BBx/(2*this.Adj);var
ER=this.DG[0];if(this.EX>0)ER=ER+(Ji|0);if(this.EX<0)ER=ER-(Ji|0);if(ER>this.FZ[
0])ER=this.FZ[0];else if(ER<this.Gl[0])ER=this.Gl[0];var Bf0=ER;var Ff=this.Gl[0
];var EJ=this.FZ[0];if(ER<Ff)EJ=this.Gl[0];else if(ER>EJ)Ff=this.FZ[0];else if(this.
WO[0]<=1){Ff=ER;EJ=ER;}else{var Adn=(EJ-ER)%this.WO[0];EJ=(ER-this.WO[0])+Adn;Ff=
ER+Adn;if(EJ<this.Gl[0])EJ=this.Gl[0];if(Ff>this.FZ[0])Ff=this.FZ[0];}if(this.EX>
0){if(EJ<=this.DG[0])ER=Ff;else if((ER-EJ)<(Ff-ER))ER=EJ;else ER=Ff;}else if(Ff>=
this.DG[0])ER=EJ;else if((ER-EJ)>(Ff-ER))ER=Ff;else ER=EJ;if(ER!==this.DG[0]){Ji=
ER-this.DG[0];if(ER!==Bf0){var Ai6=ER-Bf0;if(Ai6>0)this.EX=this.EX+Math.sqrt((Ai6
*2)*this.Adj);if(Ai6<0)this.EX=this.EX-Math.sqrt((-Ai6*2)*this.Adj);}if(this.EX>
0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfJ=(400-(this.EX*this.
EX))/(2*Ji);this.Apa=ER;}else this.EX=0;}if((this.DG[1]<=this.Gl[1])||(this.DG[1
]>=this.FZ[1]))this.EY=0;else if(!this.EY){var ES=this.DG[1];var Ff=this.Gl[1];var
EJ=this.FZ[1];if(ES<Ff)EJ=this.Gl[1];else if(ES>EJ)Ff=this.FZ[1];else if(this.WO[
1]<=1){Ff=ES;EJ=ES;}else{var Adn=(EJ-ES)%this.WO[1];EJ=(ES-this.WO[1])+Adn;Ff=ES+
Adn;if(EJ<this.Gl[1])EJ=this.Gl[1];if(Ff>this.FZ[1])Ff=this.FZ[1];}if((Ff-ES)<=(
ES-EJ))ES=Ff;else ES=EJ;if(ES!==this.DG[1]){var Ji=ES-this.DG[1];if(Ji>0)this.EY=
Math.sqrt((Ji*2)*this.Adj)+20;if(Ji<0)this.EY=-Math.sqrt((-Ji*2)*this.Adj)-20;this.
AfK=(400-(this.EY*this.EY))/(2*Ji);this.Apb=ES;}}else{var BBy=this.EY*this.EY;var
Ji=BBy/(2*this.Adj);var ES=this.DG[1];if(this.EY>0)ES=ES+(Ji|0);if(this.EY<0)ES=
ES-(Ji|0);if(ES>this.FZ[1])ES=this.FZ[1];else if(ES<this.Gl[1])ES=this.Gl[1];var
Bf1=ES;var Ff=this.Gl[1];var EJ=this.FZ[1];if(ES<Ff)EJ=this.Gl[1];else if(ES>EJ)
Ff=this.FZ[1];else if(this.WO[1]<=1){Ff=ES;EJ=ES;}else{var Adn=(EJ-ES)%this.WO[1
];EJ=(ES-this.WO[1])+Adn;Ff=ES+Adn;if(EJ<this.Gl[1])EJ=this.Gl[1];if(Ff>this.FZ[
1])Ff=this.FZ[1];}if(this.EY>0){if(EJ<=this.DG[1])ES=Ff;else if((ES-EJ)<(Ff-ES))
ES=EJ;else ES=Ff;}else if(Ff>=this.DG[1])ES=EJ;else if((ES-EJ)>(Ff-ES))ES=Ff;else
ES=EJ;if(ES!==this.DG[1]){Ji=ES-this.DG[1];if(ES!==Bf1){var Ai6=ES-Bf1;if(Ai6>0)
this.EY=this.EY+Math.sqrt((Ai6*2)*this.Adj);if(Ai6<0)this.EY=this.EY-Math.sqrt((-
Ai6*2)*this.Adj);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.EY=this.EY-20;
this.AfK=(400-(this.EY*this.EY))/(2*Ji);this.Apb=ES;}else this.EY=0;}if(!!BP)this.
Amb=BP.Bs;if(!!Iv)this.Amb=Iv.Bs;this.Auh=this.Amb;this.Amd=this.DG[0];this.Ame=
this.DG[1];this.BBz();return this;},Yi:function(Da,BG,Ob,Aaj,Ac1,Ac0){var B;if(!
!Aaj&&(Aaj!==this))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216
)&&!(this.Bp&(4096<<BG)))return null;if(!this.AGH&&!!(Ac0&0xC))return null;var Az=
A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qd=A.aaI(Da);var Fs=Cd;
if(Qd[0]<Az[0])Fs=[Az[0]-Qd[0],Fs[1]];if(Qd[0]>=Az[2])Fs=[(Az[2]-Qd[0])-1,Fs[1]];
if(Qd[1]<Az[1])Fs=[Fs[0],Az[1]-Qd[1]];if(Qd[1]>=Az[3])Fs=[Fs[0],(Az[3]-Qd[1])-1];
return A._NewObject(C.AuS,0).Initialize(this,Fs);}return null;},A31:function(){if(
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},BBz:function(
){this.timer=A._GetAutoObject(A.acl.Aee);A.zV([this,this.Mc],this.timer,0);},Mc:
function(G){var B;if(!this.timer)return;var Aum=(this.timer.Bs-this.Amb)*0.001;var
Aun=(this.timer.Bs-this.Auh)*0.001;var BBJ=Aum*Aum;var BBK=Aun*Aun;var AiI=(this.
AfJ*Aum)+this.EX;var AiJ=(this.AfK*Aun)+this.EY;var CD=[((((this.AfJ*0.5)*BBJ)+(
this.EX*Aum))+this.Amd)|0,((((this.AfK*0.5)*BBK)+(this.EY*Aun))+this.Ame)|0];if(
this.XG&&(Aum>=0.5)){CD=[this.Apa,CD[1]];this.EX=0;this.AfJ=0;this.Amd=CD[0];this.
XG=false;}else if(this.XG){var LJ=1-Math.pow(1-(Aum/0.5),5);CD=[(this.Amd+((this.
Apa-this.Amd)*LJ))|0,CD[1]];}if(this.XH&&(Aun>=0.5)){CD=[CD[0],this.Apb];this.EY=
0;this.AfK=0;this.Ame=CD[1];this.XH=false;}else if(this.XH){var LJ=1-Math.pow(1-(
Aun/0.5),5);CD=[CD[0],(this.Ame+((this.Apb-this.Ame)*LJ))|0];}if(((this.EX>0)&&(
AiI<0))||((this.EX<0)&&(AiI>0))){AiI=0;CD=[this.DG[0],CD[1]];}if(((this.EY>0)&&(
AiJ<0))||((this.EY<0)&&(AiJ>0))){AiJ=0;CD=[CD[0],this.DG[1]];}if(!this.XG&&(CD[0
]<this.Gl[0])){this.Amd=CD[0];this.Apa=this.Gl[0];this.Amb=this.timer.Bs;this.XG=
true;}else if(!this.XG&&(CD[0]>this.FZ[0])){this.Amd=CD[0];this.Apa=this.FZ[0];this.
Amb=this.timer.Bs;this.XG=true;}if(!this.XH&&(CD[1]<this.Gl[1])){this.Ame=CD[1];
this.Apb=this.Gl[1];this.Auh=this.timer.Bs;this.XH=true;}else if(!this.XH&&(CD[1
]>this.FZ[1])){this.Ame=CD[1];this.Apb=this.FZ[1];this.Auh=this.timer.Bs;this.XH=
true;}if(((!this.XG&&!!this.EX)&&(AiI>-20))&&(AiI<20)){CD=[this.Apa,CD[1]];this.
EX=0;this.AfJ=0;this.Amd=CD[0];}if(((!this.XH&&!!this.EY)&&(AiJ>-20))&&(AiJ<20)){
CD=[CD[0],this.Apb];this.EY=0;this.AfK=0;this.Ame=CD[1];}if(!A.aaX(CD,this.DG)){
this.A5C=A.abe(CD,this.DG);this.DG=CD;(B=this.At5)?B[1].call(B[0],this):null;(B=
this.AF0)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XG)&&!this.
XH){this.A31();this.ZM=false;(B=this.Zn)?B[1].call(B[0],this):null;}},ATt:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WO=E;},AS1:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6j)return;this.A6j=E;if(E<(1e-007))E=1e-007;this.Adj=
E*10000;},_Init:function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.H7;this.
U=0x10011B;},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKI)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF0
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zn)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BM={Ah:null,Ll:null,BN:null,D1:null,ApU:
0,Bs:0,A_L:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Ach:false,NH:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(Afw
);this.Ah=C1.AKo;C1.AKo=this;},GZ:function(CN){var B;if(!!CN&&CN.Bi9(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_L=this.ApU;this.Ach=this.ApU>0;if(this.Ach)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BN)?B[1].call(B[0],this):null;if(!this.NH)this.ApU=this.
ApU+1;return!this.NH;}if(!CN.Down){this.Ach=this.ApU>1;this.A_L=this.ApU-1;this.
ApU=0;(B=this.Ll)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BM;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ll)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuS={Ci:null,AuU:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ci=Ag;this.DG=
aOffset;this.AuU=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuS;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ci)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7t={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A7t;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Ark={Ny:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Ark;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ny)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AD1={AiR:A.wf,AiQ:A.wf,_Init:function(aArg
){C.Ark._Init.call(this,aArg);this.__proto__=C.AD1;},_className:"Core::LayoutLineContext"
};C.AD2={AAK:A.wf,AAJ:A.wf,AiR:A.wf,AiQ:A.wf,_Init:function(aArg){C.Ark._Init.call(
this,aArg);this.__proto__=C.AD2;},_className:"Core::LayoutQuadContext"};C.ANV={C1:
null,Ah:null,Ry:null,RH:null,Ma:null,ApQ:null,_Init:function(aArg){this.__proto__=
C.ANV;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ry)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApQ)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUY={FM:null,B$:null,B_:null,Bdo:false,
Byd:function(){if(!this.FM)return;var Pg=this.FM;this.FM.Pb=null;this.FM=null;A.
pe([this,this.A3a],this);Pg.A7V(this);},Bz1:function(G){if(!!this.FM)return;if(!
this.B_)return;this.FM=this.B_;this.B_=this.B_.Ah;if(!!this.B_)this.B_.AJ=null;else
this.B$=null;this.FM.Ah=null;this.Bdo=true;this.FM.SE(this);this.Bdo=false;},BAl:
function(G){A.pe([this,this.Bz1],this);},BAk:function(G){A.pe([this,this.BAl],this
);},A3a:function(G){A.pe([this,this.BAk],this);},Bha:function(Je){if(!Je||!Je.Pb
)return;if(Je.Pb!==this)throw new Error(Aaa);var Bgu=false;if(this.FM===Je){this.
FM=null;Bgu=true;A.pe([this,this.A3a],this);}else{if(!!Je.Ah)Je.Ah.AJ=Je.AJ;else
this.B$=Je.AJ;if(!!Je.AJ)Je.AJ.Ah=Je.Ah;else this.B_=Je.Ah;Je.AJ=null;Je.Ah=null;
}Je.Pb=null;if(Bgu)Je.A7U(this);},A_T:function(Je,A01){if(!Je)return;if(!!Je.Pb)
throw new Error(Xa);Je.Pb=this;if(A01){Je.Ah=this.B_;if(!!this.B_)this.B_.AJ=Je;
else this.B$=Je;this.B_=Je;}else{Je.AJ=this.B$;if(!!this.B$)this.B$.Ah=Je;else this.
B_=Je;this.B$=Je;}if(!this.FM)A.pe([this,this.A3a],this);},_Init:function(aArg){
this.__proto__=C.AUY;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkX={Pb:null,AJ:null,Ah:
null,A7V:function(Atq){},A7U:function(Atq){},SE:function(Atq){this.Amx();},Mk:function(
){if(!!this.Pb&&(this.Pb.FM===this))this.Pb.Byd();},Amx:function(){if(!!this.Pb)
this.Pb.Bha(this);},AQ4:function(){return!!this.Pb&&(this.Pb.FM===this);},_Init:
function(aArg){this.__proto__=C.AkX;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pb)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUW={At:null,Auj:
null,SE:function(Atq){this.Auj.At=this.At;A.we(this.Auj,0);A.pe([this,this.BzY],
this);},BzY:function(G){this.Auj.At=null;this.Auj=null;this.At=null;this.Mk();},
_Init:function(aArg){C.AkX._Init.call(this,aArg);this.__proto__=C.AUW;},_Mark:function(
D){var B;C.AkX._Mark.call(this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxD={_Init:function(){C.AUY._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahu={resource:null,La:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahu;this.Init(aArg);A.h7++;},_Done:function(){this.La();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mx:null,timer:null,Bs:0,Period:1000,VC:0,Bw:false,La:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKQ:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PO:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKQ(this.VC,E);},Wy:function(E){if(E<0)E=0;if(E===
this.VC)return;this.VC=E;if(this.Bw)this.AKQ(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKQ(this.VC,this.Period);else this.AKQ(0,
0);this.Bs=this.Avk();},Avk:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avk();if(!this.
Period)this.Ar(false);(B=this.Mx)?B[1].call(B[0],this):null;},AxB:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.La();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mx)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUq:0,AvW:0
,AjT:0,GH:0,He:0,Year:0,BcX:function(AfG,A0t){if(A0t)switch(AfG){case 1:return A.
aci.Bjg;case 2:return A.aci.Bh_;case 3:return A.aci.Bjy;case 4:return A.aci.BgR;
case 5:return A.aci.BjC;case 6:return A.aci.Bjj;case 7:return A.aci.Bji;case 8:return A.
aci.BgT;case 9:return A.aci.Boc;case 10:return A.aci.BjW;case 11:return A.aci.BjV;
case 12:return A.aci.Bhy;default:return A.jV;}else switch(AfG){case 1:return A.aci.
ADV;case 2:return A.aci.ACE;case 3:return A.aci.AD7;case 4:return A.aci.ABF;case
5:return A.aci.AD_;case 6:return A.aci.ADX;case 7:return A.aci.ADW;case 8:return A.
aci.ABM;case 9:return A.aci.AGv;case 10:return A.aci.AEk;case 11:return A.aci.AEi;
case 12:return A.aci.ACp;default:return A.jV;}},BcV:function(Bbu,A0t){if(A0t)switch(
Bbu){case 1:return A.aci.BjH;case 2:return A.aci.Bpx;case 3:return A.aci.Bqd;case
4:return A.aci.Bpi;case 5:return A.aci.Bil;case 6:return A.aci.Bn7;case 0:return A.
aci.Bo7;default:return A.jV;}else switch(Bbu){case 1:return A.aci.BjG;case 2:return A.
aci.Bpw;case 3:return A.aci.Bqc;case 4:return A.aci.Bph;case 5:return A.aci.Bik;
case 6:return A.aci.Bn6;case 0:return A.aci.Bo6;default:return A.jV;}},BcU:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JN:function(){var d=this.GH;var K2=this.He;var Dg=this.Year-((
K2<=2)?1:0);var AzA=(((Dg>=0)?Dg:Dg-399)/400)|0;var Aml=Dg-(AzA*400);var U$=(((((
153*(K2+((K2>2)?-3:9)))+2)/5)|0)+d)-1;var Ao9=(((Aml*365)+((Aml/4)|0))-((Aml/100
)|0))+U$;var Qf=((AzA*146097)+Ao9)-719468;return(((Qf*86400)+(this.AjT*3600))+(this.
AvW*60))+this.AUq;},AFI:function(E){var B;E+=62162035200;if(E<0)E=0;var Vn=Math.
trunc(E/86400)|0;var AzA=(((Vn>=0)?Vn:Vn-146096)/146097)|0;var Ao9=Vn-(AzA*146097
);var Aml=((((Ao9-((Ao9/1460)|0))+((Ao9/36524)|0))-((Ao9/146096)|0))/365)|0;var Dg=
Aml+(AzA*400);var U$=Ao9-(((365*Aml)+((Aml/4)|0))-((Aml/100)|0));var A2y=(((5*U$
)+2)/153)|0;var d=(U$-((((153*A2y)+2)/5)|0))+1;var K2=A2y+((A2y<10)?3:-9);var BK=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K2<=2)?1:0);this.Um(K2);this.Ln(d);this.Any(BK+((BK<0)?24:0));this.AnB(O+((O<0)?
60:0));this.AnE(s+((s<0)?60:0));},Zo:function(){if(this.He===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
He===4)||(this.He===6))||(this.He===9))||(this.He===11))return 30;else return 31;
},Bk6:function(){var B;var U$=this.Ab0()-1;var AtG=(6+this.Av8())%7;var Ao$=((371+
AtG)-U$)%7;if(this.He===12){var d=this.GH;if((d===31)&&(AtG<3))return 0;if((d===
30)&&(AtG<2))return 0;if((d===29)&&(AtG<1))return 0;}if(Ao$<=3)U$+=Ao$;else U$-=(
7-Ao$);if(U$<0){var d=this.GH;var K2=this.He;this.Year--;this.Ln(31);this.Um(12);
U$=this.Ab0()-1;AtG=(6+this.Av8())%7;Ao$=((371+AtG)-U$)%7;if(Ao$<=3)U$+=Ao$;else
U$-=Ao$;this.Year++;this.Ln(d);this.Um(K2);}return(U$/7)|0;},Ab0:function(){var B;
var d=this.GH;var K2=this.He;var Dg=this.Year;var Af4=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K2){case 2:d+=31;break;case 3:d+=(59+Af4);break;case 4:
d+=(90+Af4);break;case 5:d+=(120+Af4);break;case 6:d+=(151+Af4);break;case 7:d+=(
181+Af4);break;case 8:d+=(212+Af4);break;case 9:d+=(243+Af4);break;case 10:d+=(273+
Af4);break;case 11:d+=(304+Af4);break;case 12:d+=(334+Af4);break;default:;}return d;
},Av8:function(){var B;var d=this.GH;var K2=this.He+((this.He>2)?-2:10);var Dg=this.
Year-((this.He<=2)?1:0);var B4=(Dg/100)|0;Dg%=100;d+=((((((((26*K2)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnE:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUq=E;},AnB:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvW=E;},Any:function(E){if(E<0)E=0;if(E>23)E=23;this.AjT=E;},Ln:function(
E){if(E<1)E=1;if(E>31)E=31;this.GH=E;},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.
He=E;},Format:function(Is){var result=A.jV;var inx=0;while(!!(Is.charCodeAt(inx)||
0))if((Is.charCodeAt(inx)||0)===0x25){var AaD=1;inx=inx+1;if((Is.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaD=0;}switch(Is.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GH,2*AaD,10);break;case 0x48:result=result+A.abl(this.AjT,2*AaD,10);break;
case 0x49:if(!(this.AjT%12))result=result+Aab;else result=result+A.abl(this.AjT%
12,2*AaD,10);break;case 0x6D:result=result+A.abl(this.He,2*AaD,10);break;case 0x4D:
result=result+A.abl(this.AvW,2*AaD,10);break;case 0x70:if(this.AjT<12)result=result+
A.aci.BgA;else result=result+A.aci.Bnu;break;case 0x53:result=result+A.abl(this.
AUq,2*AaD,10);break;case 0x77:result=result+A.abl(this.Av8(),AaD,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaD,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaD,10);break;case 0x25:result=result+Aac;break;case 0x6A:result=result+
A.abl(this.Ab0(),3*AaD,10);break;case 0x57:result=result+A.abl(this.Bk6(),2*AaD,
10);break;case 0x61:result=result+this.BcV(this.Av8(),true);break;case 0x41:result=
result+this.BcV(this.Av8(),false);break;case 0x62:result=result+this.BcX(this.He
,true);break;case 0x42:result=result+this.BcX(this.He,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Is.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac2,AfG,Bwv,BwM,Bw3,Bxk){this.Year=Ac2;this.
Um(AfG);this.Ln(Bwv);this.Any(BwM);this.AnB(Bw3);this.AnE(Bxk);return this;},Initialize:
function(Ah5){this.AFI(Ah5);return this;},BhD:function(Ah5){if(!Ah5)return A._NewObject(
C.An3,0).Initialize(this.JN());return A._NewObject(C.An3,0).Initialize(this.JN()-
Ah5.JN());},BoH:function(AyU){if(!AyU)return this;return A._NewObject(C.Bs,0).Initialize(
this.JN()-AyU.JN());},J:function(AyU){if(!AyU)return this;return A._NewObject(C.
Bs,0).Initialize(this.JN()+AyU.JN());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An3={AGs:0,AEb:0,ADo:0,Ki:0,JN:function(
){return(((this.Ki*86400)+(this.ADo*3600))+(this.AEb*60))+this.AGs;},AFI:function(
E){var AK4=1;this.Ki=Math.trunc(E/86400)|0;if(E<0){E=-E;AK4=-1;}this.ADo=AK4*(Math.
trunc(E/3600)%24|0);this.AEb=AK4*(Math.trunc(E/60)%60|0);this.AGs=AK4*(E%60|0);}
,Initialize2:function(Bww,BwN,Bw4,Bxn){this.Ki=Bww;this.ADo=BwN;this.AEb=Bw4;this.
AGs=Bxn;return this;},Initialize:function(Ah5){this.AFI(Ah5);return this;},_Init:
function(aArg){this.__proto__=C.An3;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$f={At:null,Pb:null,Trigger:function(Bwq,A01){var Pg=A._NewObject(C.AUW,0);
Pg.Auj=this;Pg.At=Bwq;this.Pb.A_T(Pg,A01);},_Init:function(aArg){this.__proto__=
C.A$f;this.Pb=A._GetAutoObject(C.AxD);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$g={JI:null,Event:null,ASd:null,AtY:function(G){var B;if(
!this.Event)return;this.JI=this.Event.At;(B=this.ASd)?B[1].call(B[0],this):null;
this.JI=null;},BlJ:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtY],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtY],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$g;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFI={Du:0x1,BCs:0x2,BDA:0x4,BFx:0x8,Bw:0x10,H6:0x20
,BDB:0x40,BEg:0x80,BDw:0x100,BDW:0x200,BDk:0x400,BEU:0x800,Bk:0x1000,BFF:0x2000,
BED:0x4000,BEE:0x8000,Abh:0x10000,BEC:0x20000,BE5:0x40000,BDb:0x80000,BEM:0x100000
,BC7:0x200000};C.PH={BEV:0x1,BEW:0x2,BCo:0x4,BCp:0x8,BCq:0x10,BCn:0x20};C.AgS={None:
0,BFt:1,BCL:2,BD1:3,BEZ:4,BFu:5,BFv:6,BCM:7,BCN:8,BD3:9,BD2:10,BE1:11,BE0:12};C.
AuW={None:0,BFr:1,Left:2,BCJ:3,ZR:4,A4_:5,BFs:6,Right:7,BCK:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BEX={BFO:0x1,BFL:0x2,BFM:0x4,BFN:
0x8,BD5:0x10,BDD:0x20};
C._Init=function(){C.Akg.__proto__=C.Ci;C.ZB.__proto__=C.Ci;C.Et.__proto__=C.Ci;C.
P.__proto__=C.Et;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARk.__proto__=
C.Event;C.AuR.__proto__=C.Event;C.Aea.__proto__=C.Event;C.AqI.__proto__=C.Event;
C.Y.__proto__=C.Et;C.CM.__proto__=C.P;C.Dy.__proto__=C.P;C.Bn.__proto__=C.ZB;C.H7.
__proto__=C.Et;C.AD1.__proto__=C.Ark;C.AD2.__proto__=C.Ark;C.AUW.__proto__=C.AkX;
};C._ReInit=function(){var B;if((B=C.AxD._this))B._ReInit(),C.AxD._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxD._this)&&(B._cycle!=D))B._Done(C.AxD._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */