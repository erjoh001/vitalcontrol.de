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
var Ce=[0,0];var BD=[0,0,0,0];var E7="The view does not belong to this group";var
Hr=[1000,740];var IU="The dialog component is already presented";var Is="The dialog component is actually not presented";
var O4="No fader to perform the fade-in/out operation";var P_="Trying to use the same fader twice";
var P$="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Ff="View is not in this group";var L3="Sibling view does not belong to the group";
var Qa="No view to remove";var J3="No view to add";var Ob="View already in a group";
var Qb="Recursive invalidate during active update cycle.";var MJ=[-8,-8,9,9];var
S$="No group to end the modal state.";var UT="The group is not modal.";var Z5="No group to obtain the modal state.";
var W7="The group serves already as the \'virtual keyboard\'.";var It="The group is already modal.";
var UU="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z6="The method SwitchToDialog() is not available in Core::VerticalList.";
var W8="The method DismissDialog() is not available in Core::VerticalList.";var Z7=
"The method PresentDialog() is not available in Core::VerticalList.";var W9="The method FadeGroup() is not available in Core::VerticalList.";
var Z8="The method RestackBehind() is not available in Core::VerticalList.";var Z9=
"The method RestackTop() is not available in Core::VerticalList.";var UV="The method Restack() is not available in Core::VerticalList.";
var W_="The method Remove() is not available in Core::VerticalList.";var O5="The method AddBehind() is not available in Core::VerticalList.";
var Z_="The method Add() is not available in Core::VerticalList.";var O6="The Slide Touch Handler:";
var Rn="is already connected with a view.";var W$="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xa=[0,0,170,120];var UW="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Z$="The method DismissDialog() is not available in Core::HorizontalList.";var
Aaa="The method PresentDialog() is not available in Core::HorizontalList.";var Xb=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xc="The method RestackBehind() is not available in Core::HorizontalList.";
var Ta="The method RestackTop() is not available in Core::HorizontalList.";var UX=
"The method Restack() is not available in Core::HorizontalList.";var UY="The method Remove() is not available in Core::HorizontalList.";
var AcM="The method AddBehind() is not available in Core::HorizontalList.";var Tb=
"The method Add() is not available in Core::HorizontalList.";var Aab=[0,0,1,1];var
AfB="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aac="Trying to cancel a task not belonging to this queue!";var Xd="Trying to enqueue a task twice!";
var Aad="12";var Xe="%";
C.Cj={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,J1:0,PO:0x14,AtY:function(BG,Ah9){}
,Ar6:function(E){if(this.J1===E)return;this.J1=E;if(!!this.Ab){var Ai6=this.Ah;var
Hc=0;while(!!Ai6&&(E>Ai6.J1)){Ai6=Ai6.Ah;Hc=Hc+1;}Ai6=this.AJ;while(!!Ai6&&(E<Ai6.
J1)){Ai6=Ai6.AJ;Hc=Hc-1;}if(!!Hc)this.Ab.JZ(this,Hc);}},A0:function(E){var B;var
Hc=E^this.PO;if(!Hc)return;this.PO=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JJ],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.ND.U=this.Ev.
ND.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},Im:function(
){var B0=this.Ab;while(!!B0){var IE=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IE)return IE;
B0=B0.Ab;}return null;},Ko:function(CY,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G4:function(CN){return null;},Yj:function(Db,BF,Oe,Aaj
,Ac6,Ac5){return null;},AuJ:function(Db){return Db;},AuT:function(BG,MO){return Ce;
},Ank:function(aOffset,Atu){},GetExtent:function(){return BD;},Cs:function(Rt,U7
){var B;if(((this.U&0x200)===0x200))Rt=Rt&~0x400;var A24=(this.U&~U7)|Rt;var Xz=
A24^this.U;this.U=A24;if(!!this.Ab&&!!(Xz&0x14)){var Bdq=((this.U&0x14)===0x14);
if(Bdq&&!this.Ab.AV)this.Ab.Bb(this);if(!Bdq&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACR(this,0x14));}if(!!this.Ab&&!!(Xz&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A24&0x400)===0x400))&&((Xz&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}if(!!this.Ab&&((Xz&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JJ],this);}if(((((Xz&0x100000)===0x100000)&&((U7&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
Xz&0x100000)===0x100000)&&((Rt&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((Xz&0x200000)===0x200000)&&((U7&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((Xz&0x200000)===0x200000)&&((Rt&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C0!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akh={ED:A.wf,Et:A.wf
,AtY:function(BG,Ah9){var As=A._NewObject(C.AD$,0);this.Ev=null;As.extent=this.getExtent(
);As.Bd=BG;As.ND=Ah9;As.AiT=this.Et;As.AiU=this.ED;this.Ev=As;},AuT:function(BG,
MO){var B;var EW=this.PO;var As=(C.AD$.isPrototypeOf(B=this.Ev)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var Kb=[BG[
2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;var tmp;if(!MO){var NG=[(B=As.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NG[0]!==Kb[0]){var HT=((EW&
0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HT&&(Qx||!HU))x1=((
x1*Kb[0])/NG[0])|0;if(!HU&&(Qx||!HT)){x2=x2-As.Bd[0];x2=((x2*Kb[0])/NG[0])|0;x2=
x2-Kb[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qx){if(HT&&!HU)x2=x1+BY;
else if(!HT&&HU)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NG[1]!==Kb[1]){var HV=((EW&0x10)===0x10);var
HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HV&&(Qy||!HS))y1=((y1*Kb[1])/NG[
1])|0;if(!HS&&(Qy||!HV)){y2=y2-As.Bd[1];y2=((y2*Kb[1])/NG[1])|0;y2=y2-Kb[1];}else
y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy){if(HV&&!HS)y2=y1+BI;else if(!HV&&
HS)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(MO){case 3:{x1=BG[0];x2=x1+BY;}break;case 4:{x2=
BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((MO===3)||(MO===4)){var HV=((EW&0x10)===0x10);var HS=((EW&0x20
)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[1];y2=BG[3];}else if(HV&&!HS){y1=
BG[1];y2=y1+BI;}else if(HS&&!HV){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((MO===1)||(MO===2)){var HT=((EW&0x4)===0x4);var HU=((
EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[0];x2=BG[2];}else if(HT&&!HU
){x1=BG[0];x2=x1+BY;}else if(HU&&!HT){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((BG[2]-
BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BI=y2-y1;if(
As.AiU[0]<As.AiT[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.AiU[1]<As.AiT[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Ev=As;}return[BY,BI];},Ank:function(aOffset,Atu){if(Atu){this.Et=A.abf(this.Et,aOffset
);this.ED=A.abf(this.ED,aOffset);}else{this.DM(A.abf(this.Et,aOffset));this.DC(A.
abf(this.ED,aOffset));}},GetExtent:function(){if(!!this.Ev&&this.Ev.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Et[0];var y1=this.Et[
1];var x2=this.ED[0];var y2=this.ED[1];var BY=x2-x1;var BI=y2-y1;var tmp;if(BY<0
)BY=-BY;if(BI<0)BI=-BI;if(BY>=BI){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BI>=BY){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},DM:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.Et=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JJ],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.
Akh;},_className:"Core::LineView"};C.ZD={Kz:A.wf,ME:A.wf,ED:A.wf,Et:A.wf,AtY:function(
BG,Ah9){var As=A._NewObject(C.AEa,0);this.Ev=null;As.extent=this.GetExtent();As.
Bd=BG;As.ND=Ah9;As.AiT=this.Et;As.AiU=this.ED;As.AAS=this.ME;As.AAT=this.Kz;this.
Ev=As;},AuT:function(BG,MO){var B;var EW=this.PO;var As=(C.AEa.isPrototypeOf(B=this.
Ev)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var Kb=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;if(!MO){var
NG=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NG[0]!==Kb[0]){
var HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HT&&(
Qx||!HU))x1=((x1*Kb[0])/NG[0])|0;if(!HU&&(Qx||!HT)){x2=x2-As.Bd[0];x2=((x2*Kb[0]
)/NG[0])|0;x2=x2-Kb[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qx){if(HT&&
!HU)x2=x1+BY;else if(!HT&&HU)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NG[1]!==Kb[1]){var HV=((EW&0x10
)===0x10);var HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HV&&(Qy||!HS))y1=((
y1*Kb[1])/NG[1])|0;if(!HS&&(Qy||!HV)){y2=y2-As.Bd[1];y2=((y2*Kb[1])/NG[1])|0;y2=
y2-Kb[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy){if(HV&&!HS)y2=y1+BI;
else if(!HV&&HS)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MO){case 3:{x1=BG[0];x2=x1+BY;}break;
case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((MO===3)||(MO===4)){var HV=((EW&0x10)===0x10);var
HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[1];y2=BG[3];}else if(
HV&&!HS){y1=BG[1];y2=y1+BI;}else if(HS&&!HV){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MO===1)||(MO===2)){var HT=((EW&0x4)===0x4);
var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[0];x2=BG[2];}else if(
HT&&!HU){x1=BG[0];x2=x1+BY;}else if(HU&&!HT){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((
BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BI=(
y2-y1)-1;var Aiz=As.extent[0];var AiB=As.extent[1];var Af2=(As.extent[2]-Aiz)-1;
var Af1=(As.extent[3]-AiB)-1;if(!Af2)Af2=1;if(!Af1)Af1=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((As.AiT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiT[1]-AiB)*BI)/Af1)|0)];
this.ED=[x1+((((As.AiU[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiU[1]-AiB)*BI)/Af1)|0)];this.
ME=[x1+((((As.AAS[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAS[1]-AiB)*BI)/Af1)|0)];this.Kz=[
x1+((((As.AAT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAT[1]-AiB)*BI)/Af1)|0)];}else{this.
DM([x1+((((As.AiT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiT[1]-AiB)*BI)/Af1)|0)]);this.DC([
x1+((((As.AiU[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiU[1]-AiB)*BI)/Af1)|0)]);this.Kw([x1+((((
As.AAS[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAS[1]-AiB)*BI)/Af1)|0)]);this.JV([x1+((((As.
AAT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAT[1]-AiB)*BI)/Af1)|0)]);this.Ev=As;}return[BY+
1,BI+1];},Ank:function(aOffset,Atu){if(Atu){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.ME=A.abf(this.ME,aOffset);this.Kz=A.abf(this.Kz,aOffset
);}else{this.DM(A.abf(this.Et,aOffset));this.DC(A.abf(this.ED,aOffset));this.Kw(
A.abf(this.ME,aOffset));this.JV(A.abf(this.Kz,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.ME[0];var y2=this.ME[1];if((((this.Kz[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.Kz[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.ME[0]<x1)x1=
this.ME[0];if(this.Kz[0]<x1)x1=this.Kz[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
ME[1]<y1)y1=this.ME[1];if(this.Kz[1]<y1)y1=this.Kz[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.Kz[0]>x2)x2=this.Kz[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.Kz[1]>y2)y2=this.Kz[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JV:function(E){var B;if(A.aaX(E,this.Kz))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Kz=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},Kw:function(E){var B;if(A.aaX(E,
this.ME))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Ev=null;this.ME=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},DC:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JJ],this);}},DM:function(E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Et=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},ARn:function(K0){var HC=A.abi(4,
A.wf,null);var O=0;var Ig=3;var A2x=false;var A2y=false;HC.Set(0,this.Et);HC.Set(
1,this.ED);HC.Set(2,this.ME);HC.Set(3,this.Kz);while(O<4){var Bg_=HC.Get(O)[0];var
ALx=HC.Get(O)[1];var BC6=HC.Get(Ig)[0];var A4P=HC.Get(Ig)[1];if(((ALx>K0[1])!==(
A4P>K0[1]))||((ALx<K0[1])!==(A4P<K0[1]))){var Ep=((((BC6-Bg_)*(K0[1]-ALx))/(A4P-
ALx))|0)+Bg_;if(K0[0]>Ep)A2x=!A2x;if(K0[0]<Ep)A2y=!A2y;}Ig=O;O=O+1;}return A2x||
A2y;},BjD:function(){return((((this.Et[0]===this.Kz[0])&&(this.ED[0]===this.ME[0
]))&&(this.Et[1]===this.ED[1]))&&(this.ME[1]===this.Kz[1]))||((((this.Et[0]===this.
ED[0])&&(this.ME[0]===this.Kz[0]))&&(this.Et[1]===this.Kz[1]))&&(this.ED[1]===this.
ME[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZD;},
_className:"Core::QuadView"};C.Eu={M:A.wg,AtY:function(BG,Ah9){var As=A._NewObject(
C.Ark,0);As.extent=this.M;As.Bd=BG;As.ND=Ah9;this.Ev=As;},AuT:function(BG,MO){var
B;var EW=this.PO;var As=this.Ev;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var Kb=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=
y2-y1;if(!MO){var NG=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NG[0]!==Kb[0]){var HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1
)===0x1);if(!HT&&(Qx||!HU))x1=((x1*Kb[0])/NG[0])|0;if(!HU&&(Qx||!HT)){x2=x2-As.Bd[
0];x2=((x2*Kb[0])/NG[0])|0;x2=x2-Kb[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qx){if(HT&&!HU)x2=x1+BY;else if(!HT&&HU)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NG[1]!==Kb[1
]){var HV=((EW&0x10)===0x10);var HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(
!HV&&(Qy||!HS))y1=((y1*Kb[1])/NG[1])|0;if(!HS&&(Qy||!HV)){y2=y2-As.Bd[1];y2=((y2
*Kb[1])/NG[1])|0;y2=y2-Kb[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy
){if(HV&&!HS)y2=y1+BI;else if(!HV&&HS)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MO){case 3:{x1=
BG[0];x2=x1+BY;}break;case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((MO===3)||(MO===4)){var HV=((
EW&0x10)===0x10);var HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[
1];y2=BG[3];}else if(HV&&!HS){y1=BG[1];y2=y1+BI;}else if(HS&&!HV){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MO===1)||(MO===2)){var
HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[
0];x2=BG[2];}else if(HT&&!HU){x1=BG[0];x2=x1+BY;}else if(HU&&!HT){x2=BG[2];x1=x2-
BY;}else{x1=BG[0]+((((BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=As;}return[x2-x1,y2-y1];},Ank:function(aOffset,Atu){if(Atu)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JJ],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B7:null,B8:null,AKr:null,FG:null
,Hd:null,XA:null,ApQ:null,AV:null,G9:255,AzK:0,AzN:0,AzM:0,AzL:0,Init:function(aArg
){this.Am();},Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(CY.C0===this))this.Bdf(CY,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FG.Update();CY.A50(aClip,this.FG,0,A.abh(this.M,aOffset),Ce,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzL,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzN);Az=A.abN(
Az,Az[2]+this.AzM);Az=[].concat(Az.slice(0,3),Az[3]+this.AzK);if(((this.U&0x80000
)===0x80000)){var Ap3=BD;var X;for(X=this.B7;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap3=
A.wC(Ap3,X.GetClipping());Az=A.wC(Az,A.abh(Ap3,this.M.slice(0,2)));}return Az;},
Yj:function(Db,BF,Oe,Aaj,Ac6,Ac5){var B;var X=this.B8;var Apk=null;var AE=BD;var
Kc=null;var A2T=!!this.XA&&(!!this.XA.FQ||!!this.XA.B7);if(((B=A.lb(Db,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Db=A.abg(Db,this.M.slice(0,2));if(!!Ac6){X=Ac6;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kc){Kc=X.
AJ;while(!!Kc&&!((Kc.U&0x200)===0x200))Kc=Kc.AJ;if(!!Kc)AE=A.lb(Db,Kc.GetExtent(
));else AE=BD;}if(Kc===X){Kc=null;AE=BD;}if((!!Aaj&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C0===X)&&!A2T))
)){var extent=X.GetExtent();var AJV=Aaj;var Ao6=null;if(AJV===X)AJV=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao6=X.Yj(AE
,BF,Oe,AJV,Ac6,Ac5);}else if(!(((B=A.lb(extent,Db))[0]>=B[2])||(B[1]>=B[3]))||(Aaj===
X))Ao6=X.Yj(Db,BF,Oe,AJV,Ac6,Ac5);X=X.AJ;if(!!Ao6){if(!Apk||((Ao6.Au4<Apk.Au4)&&(
Ao6.Au4>=0)))Apk=Ao6;if(!Ao6.Au4)X=null;}}else X=X.AJ;Ac6=null;}return Apk;},AuJ:
function(Db){var B;var F;var X=this.B7;var LB=BD;var AAM=true;var result=(Db=F=A.
abg(Db,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At_=(C.Y.isPrototypeOf(
X)?X:null);LB=A.lb(Db,At_.M);AAM=((At_.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAM){var AE=A.lb(X.GetClipping(),LB);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuJ(AE));}}else{var AE=A.lb(X.GetClipping(),
Db);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuJ(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Rt,U7){var B;
var Tp=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((U7&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Eu.Cs.call(this,Rt,U7);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rt&0x80000)===0x80000))&&!((Tp&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xz=this.U^Tp;if(!!this.AV&&((Xz&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.Hd&&((Xz&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C0.
U&0x14)===0x14))this.Hd.C0.Cs(0x40,0x0);else this.Hd.C0.Cs(0x0,0x40);}if(((Xz&0x10
)===0x10)){var X;for(X=this.B7;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C0===X)))X.Cs(Rt&0x10,U7&
0x10);}if(!!Xz){this.U=this.U|0x8000;A.pe([this,this.ABr],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al0=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKz=[
E[2]-E[0],E[3]-E[1]];var ApZ=!A.aaX(Al0,AKz);if(ApZ&&!!this.FG){this.FG.ArQ(AKz);
A.we(this,0);A.we(this.FG,0);}C.Eu.H.call(this,E);if((ApZ&&(Al0[0]>0))&&(Al0[1]>
0)){var Bd=[].concat(Ce,Al0);var X=this.B7;while(!!X){if((!X.Ev&&(X.PO!==0x14))&&
!((X.U&0x400)===0x400))X.AtY(Bd,null);X=X.Ah;}}if(ApZ){this.U=this.U|0x5000;A.pe([
this,this.ABr],this);}},A31:function(CN){var Bea=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKr;if(!Bea)return null;while(!!D5&&(!D5.Bw||!D5.G4(Bea)))D5=D5.
Ah;return D5;},BCQ:function(G){if(!!this.FG){this.FG.C0=this;var AE=A.abg(this.AuJ(
A.abh(this.FG.QO,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Avm(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bdf(this.FG,AE,Ce,255,true);this.FG.
C0=null;}},Bdf:function(CY,aClip,aOffset,Ck,aBlend){var B;var X=this.B7;var LB=BD;
var AAM=true;this.BiB(CY,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At_=(C.Y.isPrototypeOf(X)?X:null);AAM=((At_.U&0x1)===0x1);LB=aClip;if(!((
At_.U&0x80000)===0x80000))LB=A.lb(LB,A.abh(At_.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAM){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LB
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Ko(CY,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Ko(CY,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.BiE(CY,aClip,aOffset,Ck,aBlend);},Bf9:
function(){var B;var A2q=((this.U&0x1000)===0x1000);var AiG=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aas=false;var Adn=BD;var K2=BD;var Aat=Ce;var AtU=0;var AtV=0;
var AtT=0;var Qq=0;var X=this.B8;var Kc=null;var AlS=null;while(!!X){if(((X.U&0x800
)===0x800)){Aas=true;X.U=X.U&~0x800;}if(Aas&&((X.U&0x200)===0x200)){Aas=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag1)X.U=X.U|0x1000;}X=X.AJ;}Aas=false;X=this.B7;
if(A2q){this.U=this.U&~0x1000;A2q=!((AiG[0]>=AiG[2])||(AiG[1]>=AiG[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlS&&(AtT!==Qq)){var AdL=X;var AKW=0;var AA8=Adn[2]-
Adn[0];var Azl=Adn[3]-Adn[1];var AJL=0;var Ap_=Ce;do if(((AdL.U&0x200)===0x200))
AdL=null;else if(((AdL.U&0x401)===0x401)){Ap_=[(B=AdL.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qq===3)||(Qq===4))AA8=AA8-Ap_[0];if((Qq===1)||(Qq===2))Azl=Azl-Ap_[1];
if(!AlS||((AA8>=0)&&(Azl>=0))){AlS=AdL;AdL=AdL.Ah;if((Qq===3)||(Qq===4)){AA8=AA8-
AtU;if(Ap_[1]>AKW)AKW=Ap_[1];}if((Qq===1)||(Qq===2)){Azl=Azl-AtV;if(Ap_[0]>AJL)AJL=
Ap_[0];}}else AdL=null;}else AdL=AdL.Ah;while(!!AdL);if(!AlS)AlS=Kc;K2=Adn;switch(
AtT){case 9:case 11:K2=[].concat(K2.slice(0,3),K2[1]+AKW);break;case 10:case 12:
K2=A.abP(K2,K2[3]-AKW);break;case 5:case 7:K2=A.abN(K2,K2[0]+AJL);break;case 6:case
8:K2=[].concat(K2[2]-AJL,K2.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.ND!==Kc))X.Ev=null;if((!X.Ev&&Aas)&&((X.PO!==0x14)||!!Qq))X.
AtY(K2,Kc);}if(!!X.Ev){if(A2q&&!((X.U&0x400)===0x400))X.AuT(AiG,0);if(Aas&&((X.U&
0x400)===0x400)){var C5=X.AuT(A.abh(K2,Aat),Qq);if(((X.U&0x1)===0x1)){var Bq=Ce;
switch(Qq){case 3:Bq=[C5[0]+AtU,Bq[1]];break;case 4:Bq=[-C5[0]-AtU,Bq[1]];break;
case 1:Bq=[Bq[0],C5[1]+AtV];break;case 2:Bq=[Bq[0],-C5[1]-AtV];break;default:;}Aat=
A.abf(Aat,Bq);}}}if(((X.U&0x200)===0x200)){if(Aas)A.pe(Kc.Em,Kc);Aas=((X.U&0x1000
)===0x1000);Kc=(C.Y.isPrototypeOf(X)?X:null);if(Aas){X.U=X.U&~0x1000;AtT=Kc.Ag1;
Qq=AtT;Adn=A.abh(Kc.M,Kc.Br);K2=Adn;Aat=Ce;AtU=Kc.Space+Kc.AU4;AtV=Kc.Space;Aas=
!((Adn[0]>=Adn[2])||(Adn[1]>=Adn[3]));AlS=null;switch(AtT){case 9:case 10:Qq=3;break;
case 11:case 12:Qq=4;break;case 5:case 6:Qq=1;break;case 7:case 8:Qq=2;break;default:;
}}if(Aas)this.Bj(Kc.M);}if(X===AlS){switch(AtT){case 9:case 11:Aat=[0,(Aat[1]+(K2[
3]-K2[1]))+AtV];break;case 10:case 12:Aat=[0,(Aat[1]-(K2[3]-K2[1]))-AtV];break;case
5:case 7:Aat=[(Aat[0]+(K2[2]-K2[0]))+AtU,0];break;case 6:case 8:Aat=[(Aat[0]-(K2[
2]-K2[0]))-AtU,0];break;default:;}AlS=null;}X=X.Ah;}if(Aas)A.pe(Kc.Em,Kc);this.U=
this.U&~0x2000;this.Bl([AiG[2]-AiG[0],AiG[3]-AiG[1]]);},JJ:function(G){A.pe([this
,this.ABr],this);},ABr:function(G){var B;var BCY=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bf9();}if(((this.U&0x8000)===
0x8000)||BCY){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E7);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},Bbo:function(Aq){this.Bb(Aq);},ASB:function(){return!!this.FG;},ArJ:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AEy=null;this.FG.ArQ(Ce);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArQ([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AEy=[this,this.BCQ];}A.we(this,0);},A8K:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},C3:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0r:
function(Aq){this.C3(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bl9:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fq:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoG,AoH,AoI,AoF){var B;var Azc=this.M;var RA=
Azc;if(AoG<0)AoG=0;if(AoG>255)AoG=255;if(AoH<0)AoH=0;if(AoH>255)AoH=255;if(AoI<0
)AoI=0;if(AoI>255)AoI=255;if(AoF<0)AoF=0;if(AoF>255)AoF=255;RA=[].concat(RA[0]-(
Math.max(AoG,this.AzL)&0xFF),RA.slice(1,4));RA=A.abN(RA,RA[2]+(Math.max(AoH,this.
AzM)&0xFF));RA=A.abP(RA,RA[1]-(Math.max(AoI,this.AzN)&0xFF));RA=[].concat(RA.slice(
0,3),RA[3]+(Math.max(AoF,this.AzK)&0xFF));if(AoG!==this.AzL){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RA;Az=A.abN(Az
,Azc[0]);this.Ab.Bj(Az);}this.AzL=AoG&0xFF;}if(AoH!==this.AzM){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RA;Az=[].
concat(Azc[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzM=AoH&0xFF;}if(AoI!==this.AzN
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000
)){var Az=RA;Az=[].concat(Az.slice(0,3),Azc[1]);this.Ab.Bj(Az);}this.AzN=AoI&0xFF;
}if(AoF!==this.AzK){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.
U&0x80000)===0x80000)){var Az=RA;Az=A.abP(Az,Azc[3]);this.Ab.Bj(Az);}this.AzK=AoF&
0xFF;}},BiE:function(CY,aClip,aOffset,Ck,aBlend){},BiB:function(CY,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hr;},GetMinimalSize:function(){return Ce;
},AU$:function(Iu,Od,Xk,Te,Tf,Ah_,O$,Rs,Lz,Lx,Ly){var B;if(!this.Hd){this.AkM(Iu
,Od,Xk,Te,Tf,null,null,Lz,Lx,Ly);return;}var AlZ=this.Hd;var JG=AlZ.Ah;if(((Iu.U&
0x10000)===0x10000)&&(this.Hd.C0!==Iu))throw new Error(IU);var Adt=A._NewObject(
C.AN0,0);var RC=AlZ.RC;var RL=null;var Me=null;if(!!JG){RL=JG.RL;Me=JG.Me;}if(!!
JG&&!!AlZ.ApP)RL=AlZ.ApP;if(!!JG&&!!O$)Me=O$;if(!!Ah_)RC=Ah_;if(!Od)Od=A._GetAutoObject(
A.acl.AsE);if(!Xk)Xk=Od;if(!Tf)Tf=Te;if(!Te)Te=Tf;Adt.RC=Xk;Adt.Me=Te;Adt.RL=Tf;
Adt.ApP=Rs;Adt.C0=Iu;Adt.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Adt;if(this.AV===
Iu)this.Bb(null);AlZ.C0.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===
0x4))Iu.Cs(0x10040,0x0);else Iu.Cs(0x10000,0x0);if(!!Me){this.NS(JG.C0,Me.Aec(),
null,null,Ly);this.NS(AlZ.C0,RC.Sc(),null,null,true);this.NS(Adt.C0,Od.Sd(),Lz,Lx
,true);}else if(!!RL){this.NS(JG.C0,RL.Aed(),null,null,Ly);this.NS(AlZ.C0,RC.Sc(
),null,null,true);this.NS(Adt.C0,Od.Sd(),Lz,Lx,true);}else if(!!RC){this.NS(AlZ.
C0,RC.Sc(),null,null,Ly);this.NS(Adt.C0,Od.Sd(),Lz,Lx,true);}else this.NS(Adt.C0
,Od.Sd(),Lz,Lx,Ly);},AqF:function(Iu,Ah_,O$,Rs,Lz,Lx,Ly){var B;if(!this.Hd)return;
if(!Iu)return;var KE=this.Hd;var JG=this.Hd.Ah;var ApV=null;while((!!KE&&(KE.C0!==
Iu))&&!!KE.Ah){ApV=KE;KE=JG;JG=KE.Ah;}if(!KE||(KE.C0!==Iu))throw new Error(Is);if(
!ApV){this.Hd=JG;KE.Ah=null;}else{ApV.Ah=JG;KE.Ah=null;}KE.C0.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JG)&&!ApV)&&((JG.C0.U&0x200000)===0x200000))JG.C0.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JG)&&!ApV)&&((JG.C0.U&0x4)===0x4))JG.C0.Cs(
0x40,0x0);var RC=KE.RC;var RL=null;var Me=null;if(!!JG)RL=JG.RL;if(!!JG&&!!KE.ApP
)RL=KE.ApP;if(!!JG&&!!Rs)RL=Rs;if(!!ApV&&!!JG)Me=JG.Me;if((!!ApV&&!!JG)&&!!O$)Me=
O$;if(!!Ah_)RC=Ah_;if(!!Me){this.NS(JG.C0,Me.Aec(),null,null,Ly);this.NS(KE.C0,RC.
Sc(),Lz,Lx,true);}else if(!!RL){this.NS(JG.C0,RL.Aed(),null,null,Ly);this.NS(KE.
C0,RC.Sc(),Lz,Lx,true);}else this.NS(KE.C0,RC.Sc(),Lz,Lx,Ly);},AkM:function(Iu,Od
,Xk,Te,Tf,O$,Rs,Lz,Lx,Ly){var B;if(!Iu)return;if(!!this.Hd&&(this.Hd.C0===Iu)){this.
AU$(Iu,Od,Xk,Te,Tf,null,O$,Rs,Lz,Lx,Ly);return;}if(((Iu.U&0x10000)===0x10000))throw new
Error(IU);var KE=A._NewObject(C.AN0,0);if(!!this.Hd&&!this.Hd.Me){if(!Rs)Rs=O$;if(
!O$)O$=Rs;}var Me=null;if(!!this.Hd)Me=this.Hd.Me;if(!!this.Hd&&!!O$)Me=O$;if(!Od
)Od=A._GetAutoObject(A.acl.AsE);if(!Xk)Xk=Od;if(!Tf)Tf=Te;if(!Te)Te=Tf;KE.RC=Xk;
KE.Me=Te;KE.RL=Tf;KE.ApP=Rs;if(this.AV===Iu)this.Bb(null);if(!!this.Hd&&((this.Hd.
C0.U&0x200000)===0x200000))this.Hd.C0.Cs(0x0,0x10);if(!!this.Hd)this.Hd.C0.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===0x4))Iu.Cs(0x10040,0x0);else Iu.
Cs(0x10000,0x0);KE.C0=Iu;KE.Ah=this.Hd;this.Hd=KE;if(!!Me){this.NS(this.Hd.Ah.C0
,Me.Aec(),null,null,Ly);this.NS(Iu,Od.Sd(),Lz,Lx,true);}else this.NS(Iu,Od.Sd(),
Lz,Lx,Ly);},A69:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7L:function(
K0){var tmp=this;while(!!tmp){K0=A.abe(K0,tmp.M.slice(0,2));tmp=tmp.Ab;}return K0;
},BjA:function(K0){var tmp=this;while(!!tmp){K0=A.abf(K0,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K0;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A2T=!!this.XA&&(!!this.XA.FQ||!!this.XA.B7);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.Hd&&!A2T)GD=this.Hd.C0.DispatchEvent(CN);if(!GD&&!!B0)
GD=B0.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G4(CN);if(!GD)GD=this.G4(CN);if(!GD
)GD=this.A31(CN);return GD;},BroadcastEventAtPosition:function(CN,HA,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HA)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.
BroadcastEventAtPosition(CN,A.abe(HA,B0.M.slice(0,2)),aFilter);else GD=X.G4(CN);
}X=X.AJ;}if(!GD)GD=this.G4(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.BroadcastEvent(CN,aFilter
);else GD=X.G4(CN);}X=X.AJ;}if(!GD)GD=this.G4(CN);if(!GD)GD=this.A31(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},BjQ:function(){this.U=this.U|0x4000;A.pe([
this,this.ABr],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABr],this
);},Bj:function(Db){var B;var B0=this;while(!!B0&&!((Db[0]>=Db[2])||(Db[1]>=Db[3
]))){var Aap=B0.FG;if(!B0.Ab&&(B0!==this)){B0.Bj(Db);return;}if(!!Aap){var BAB=Aap.
QO;Aap.QO=A.wC(Aap.QO,Db);if(!A.aaY(BAB,Aap.QO)){A.we(B0,0);A.we(Aap,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Db=A.abh(Db,Az.slice(0,2));if(!!B0.FG||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FG){Az=[].concat(Az[0]-B0.AzL,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzN);Az=A.abN(Az,Az[2]+B0.AzM);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzK);}Db=A.lb(Db,Az);}B0=B0.Ab;}},QJ:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agk=A.aaI(Ag.GetExtent());var X=Ag;var A1B=null;var
BcU=0;var IZ=0x10000;var AKS;if(((aFilter&0x10000)===0x10000))IZ=0x0;var top=((GA===
4)||(GA===1))||(GA===6);var bottom=((GA===5)||(GA===3))||(GA===8);var left=((GA===
2)||(GA===1))||(GA===3);var right=((GA===7)||(GA===6))||(GA===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B8;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IZ||!((B=IZ)&&((X.U&B)===B
))))for(AKS=0;AKS<2;AKS++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKS){if((left&&(s[0]>s[1]))&&(Az[2]<Agk[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agk[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agk[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agk[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agk);var
Rv=Bq;if(Rv[0]<0)Rv=[-Rv[0],Rv[1]];if(Rv[1]<0)Rv=[Rv[0],-Rv[1]];if(((((!left||(Bq[
0]<=-Rv[1]))&&(!right||(Bq[0]>=Rv[1])))&&(!top||(Bq[1]<=-Rv[0])))&&(!bottom||(Bq[
1]>=Rv[0])))&&((Rv[0]>0)||(Rv[1]>0))){var RE=Bq[0];var RF=Bq[1];var Jm=Math.sqrt((
RE*RE)+(RF*RF));var AKq=0;if(!left&&!right)AKq=Jm/Rv[1];if(!top&&!bottom)AKq=Jm/
Rv[0];Jm=(Jm*AKq)*AKq;if((Jm<BcU)||!A1B){BcU=Jm;A1B=X;}}}}return A1B;},AqM:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;var IZ=0x10000;
if(((aFilter&0x10000)===0x10000))IZ=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TQ:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B7;
var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACR:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlX=Ag.Ah;var Al_=Ag.AJ;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=0x0;
while(!!AlX||!!Al_){if((!!AlX&&(!aFilter||((B=aFilter)&&((AlX.U&B)===B))))&&(!IZ||
!((B=IZ)&&((AlX.U&B)===B))))return AlX;if((!!Al_&&(!aFilter||((B=aFilter)&&((Al_.
U&B)===B))))&&(!IZ||!((B=IZ)&&((Al_.U&B)===B))))return Al_;if(!!AlX)AlX=AlX.Ah;if(
!!Al_)Al_=Al_.AJ;}return null;},Dc:function(aFilter){var B;var X=this.B7;var AE=
BD;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IZ||!((B=IZ)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NS:function(KD,FP,Lz,Lx
,Ly){var B;if(!KD)return;if(!FP)throw new Error(O4);if((!!FP.P||!!FP.Ab)||!!FP.Pm
)throw new Error(P_);if(!!KD.Ab&&(KD.Ab!==this))throw new Error(P$);if(!this.XA)
this.XA=A._NewObject(C.AVe,0);FP.Ab=this;FP.P=KD;FP.AKC=Lx;FP.A3j=Lz;if(!!KD.ApQ
)KD.ApQ.Pm.BoN(KD.ApQ);KD.ApQ=FP;KD.U=KD.U|0x20000;if((Ly&&!!this.XA.B8)&&!this.
XA.B8.ARj())(A.acl.ACM.isPrototypeOf(B=this.XA.B8)?B:null).A44(FP);else{var Pm=A.
_NewObject(A.acl.ACM,0);Pm.A44(FP);this.XA.A$s(Pm,false);}},AhE:function(Ag,J7){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Ff);if(!!J7&&(J7.
Ab!==this))throw new Error(L3);if(Ag.Ah===J7)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B8=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;var GC=
null;var Iw=this.B8;var LP=Ag.J1;if(!!J7){GC=J7;Iw=J7.AJ;}if(!!GC&&(LP>GC.J1))LP=
GC.J1;if(!!Iw&&(LP<Iw.J1))LP=Iw.J1;if(LP!==Ag.J1){Ag.Ab=null;Ag.Ar6(LP);Ag.Ab=this;
}if(!J7){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.B8;Ag.Ah=null;this.B8=Ag;}else{Ag.
Ah=J7;Ag.AJ=J7.AJ;J7.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B7===J7)this.B7=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZF:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Ff);if(!Ag.Ah)return;var Iw=this.B8;var
LP=Ag.J1;while(!!Iw&&(Iw.J1>LP))Iw=Iw.AJ;if(((Iw===Ag)||!Iw)||(Iw.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Iw;Ag.Ah=Iw.Ah;Iw.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},JZ:function(Ag,Qh){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Ff);var Iw=Ag;var GC=Ag;var LP=Ag.J1;while(((Qh>0)&&!!Iw.Ah)&&(Iw.Ah.J1<=LP
)){Iw=Iw.Ah;Qh=Qh-1;}while(((Qh<0)&&!!GC.AJ)&&(GC.AJ.J1>=LP)){GC=GC.AJ;Qh=Qh+1;}
if((Iw===Ag)&&(GC===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JJ],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;if(Iw
!==Ag){Ag.Ah=Iw.Ah;Ag.AJ=Iw;Iw.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GC!==Ag){Ag.Ah=GC;
Ag.AJ=GC.AJ;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B8=Ag;if(!Ag.AJ)this.
B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HP:function(Ag){var B;if(
!Ag)throw new Error(Qa);if(Ag.Ab!==this)throw new Error(Ff);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JJ],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
ACR(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag
)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AMb:function(Ag,J7
){var B;if(!Ag)throw new Error(J3);if(!!Ag.Ab)throw new Error(Ob);if(!!J7&&(J7.Ab
!==this))throw new Error(L3);var GC=null;var Iw=this.B8;var LP=Ag.J1;if(!!J7){GC=
J7;Iw=J7.AJ;}if(!!GC&&(LP>GC.J1))LP=GC.J1;if(!!Iw&&(LP<Iw.J1))LP=Iw.J1;if(LP!==Ag.
J1){Ag.Ab=null;Ag.Ar6(LP);Ag.Ab=this;}if(!J7){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.
B8;this.B8=Ag;}else{Ag.Ah=J7;Ag.AJ=J7.AJ;J7.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B7===J7)this.B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOR()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JJ],this);}},J:function(Ag,Qh){var B;if(!Ag)throw new Error(
J3);if(!!Ag.Ab)throw new Error(Ob);var GC=null;var LP=Ag.J1;if(((Qh<0)&&!!this.B8
)&&(this.B8.J1>=LP)){GC=this.B8;Qh=Qh+1;}while((((Qh<0)&&!!GC)&&!!GC.AJ)&&(GC.AJ.
J1>=LP)){GC=GC.AJ;Qh=Qh+1;}if((!GC&&!!this.B8)&&(this.B8.J1>LP))GC=this.B8;while((
!!GC&&!!GC.AJ)&&(GC.AJ.J1>LP))GC=GC.AJ;if(!GC){Ag.Ab=this;Ag.AJ=this.B8;if(!!this.
B8)this.B8.Ah=Ag;if(!this.B7)this.B7=Ag;this.B8=Ag;}else{Ag.Ab=this;Ag.AJ=GC.AJ;
Ag.Ah=GC;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B7=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOR()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}},A8M:function(){return this.
AV;},Awo:function(){return this.G9;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKr)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RI:null,JF:null,Fv:A.abi(10,null
,null),AtG:null,Air:null,ABt:0,Ie:0,Ma:A.abi(10,0,null),AJR:A.abi(10,A.wg,null),
Xy:A.abi(10,0,null),Af0:A.abi(10,A.wf,null),AtL:A.abi(10,0,null),Aiq:A.abi(10,A.
wf,null),Xx:A.abi(10,A.wf,null),RB:A.abi(10,A.wf,null),Ade:A.abi(10,A.wf,null),EP:
0,AKd:0,AKc:0,Or:A.abi(4,0,null),Ki:A.abi(4,A.wg,null),Kf:0,Az$:0,At0:0,AzW:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Im:function(){return this;
},Ko:function(CY,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CY.Avm(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Ko.call(this,CY,aClip
,aOffset,Ck,aBlend);},Cs:function(Rt,U7){var B;C.P.Cs.call(this,Rt,U7);if(!this.
Ab&&(((Rt&0x1)===0x1)||((U7&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rt&0x2)===0x2)||((U7&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArJ:
function(E){var B;var BAz=this.FG;C.P.ArJ.call(this,E);if(((BAz!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},C3:function(
E){var B;var BO=this.G9;C.P.C3.call(this,E);if(((BO!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvW=!!this.Ie;if(!!this.Ie)CN.Bs=this.Ie;}var GD=null;if(!!this.
JF){GD=this.JF.C0.DispatchEvent(CN);if(!GD)GD=this.G4(CN);if(!GD)GD=this.A31(CN);
this.Ie=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ie=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvW=!!this.Ie;if(!!this.Ie)CN.Bs=this.Ie;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ie=0;return GD;},Bj:function(Db){var
B;if(this.ABt>0)throw new Error(Qb);if(!!this.FG&&!this.Ab){if(((B=this.FG.QO)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QO=A.wC(this.FG.QO
,Db);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Db=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Db);return;}Db=A.
lb(A.abh(Db,this.M.slice(0,2)),this.M);if((Db[0]>=Db[2])||(Db[1]>=Db[3]))return;
var O;for(O=0;O<this.Kf;O=O+1)if(!(((B=A.lb(this.Ki.Get(O),Db))[0]>=B[2])||(B[1]>=
B[3]))){this.Ki.Set(O,A.wC(this.Ki.Get(O),Db));this.Or.Set(O,A.aaH(this.Ki.Get(O
)));return;}if(this.Kf<3){this.Ki.Set(this.Kf,Db);this.Or.Set(this.Kf,A.aaH(Db));
this.Kf=this.Kf+1;return;}var Ig;var RH;var Az_=0;var AAb=0;var BcT=2147483647;this.
Ki.Set(this.Kf,Db);this.Or.Set(this.Kf,A.aaH(Db));for(Ig=0;Ig<=this.Kf;Ig=Ig+1)for(
RH=Ig+1;RH<=this.Kf;RH=RH+1){var ALk=A.aaH(A.wC(this.Ki.Get(Ig),this.Ki.Get(RH))
);var BfJ=((ALk<<8)/(this.Or.Get(Ig)+this.Or.Get(RH)))|0;if(BfJ<BcT){BcT=BfJ;Az_=
Ig;AAb=RH;}}this.Ki.Set(Az_,A.wC(this.Ki.Get(Az_),this.Ki.Get(AAb)));this.Or.Set(
Az_,A.aaH(this.Ki.Get(Az_)));if(AAb!==this.Kf){this.Ki.Set(AAb,this.Ki.Get(this.
Kf));this.Or.Set(AAb,this.Or.Get(this.Kf));}},Bzb:function(){var LJ=A._NewObject(
C.AqH,0);LJ.AvW=!!this.Ie;if(!!this.Ie)LJ.Bs=this.Ie;return LJ;},Ao4:function(){
var LJ=A._NewObject(C.Aef,0);LJ.AvW=!!this.Ie;if(!!this.Ie)LJ.Bs=this.Ie;return LJ;
},AtK:function(){var LJ=A._NewObject(C.Au1,0);LJ.AvW=!!this.Ie;if(!!this.Ie)LJ.Bs=
this.Ie;return LJ;},Bzf:function(G){var O;var Apk=false;for(O=0;O<10;O=O+1)if(!!
this.Fv.Get(O)){var pos=this.RB.Get(O);var B0=this.Fv.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fv.Get(O)!==this)){
var tmp=this.Fv.Get(O);this.EP=O;this.Fv.Set(O,null);tmp.G4(this.Ao4().InitializeUp(
O,this.Aiq.Get(O),this.Af0.Get(O),this.Xy.Get(O),this.Ma.Get(O)+1,this.Xx.Get(O)
,false,this.RB.Get(O),this.Ade.Get(O)));this.BroadcastEvent(this.AtK().InitializeUp(
O,this.Ma.Get(O)+1,false,tmp,this.RB.Get(O)),0x18);}else{this.Xy.Set(O,(this.Air.
Bs-this.AtL.Get(O))|0);if(this.Xy.Get(O)<10)this.Xy.Set(O,10);this.EP=O;this.Fv.
Get(O).G4(this.Ao4().InitializeHold(O,pos,this.Af0.Get(O),this.Xy.Get(O),this.Ma.
Get(O)+1,this.Xx.Get(O),this.RB.Get(O),this.Ade.Get(O)));Apk=true;}}if(!Apk)this.
Air.Ar(false);},GetFPS:function(){var ticksCount=0;var Bdv=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKd&&(ticksCount>this.AKd))Bdv=((this.AKc*1000)/((
ticksCount-this.AKd)|0))|0;this.AKc=0;this.AKd=ticksCount;return Bdv;},Update:function(
){var B;if(!this.AtG)this.AtG=A._NewObject(A.Graphics.Canvas,0);this.AtG.ArQ([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtG.Update();return this.UpdateGE20(this.AtG);}
,UpdateGE20:function(CY){if(!this.BeginUpdate())return BD;var Agv=this.UpdateCanvas(
CY,Ce);this.EndUpdate();return Agv;},EndUpdate:function(){if(this.Kf>0){this.AKc=
this.AKc+1;this.Kf=0;}},UpdateCanvas:function(CY,aOffset){var B;var Agv=BD;var ByU=[
].concat(aOffset,A.abf(CY.FrameSize,aOffset));var O;var Ig=this.Kf;this.ABt=this.
ABt+1;CY.C0=this;for(O=0;(O<Ig)&&(O<4);O=O+1)if(this.Or.Get(O)>0){this.Ko(CY,A.abg(
this.Ki.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agv=A.wC(Agv,A.lb(ByU
,this.Ki.Get(O)));}else Ig=Ig+1;CY.C0=null;this.ABt=this.ABt-1;if(!((Agv[0]>=Agv[
2])||(Agv[1]>=Agv[3])))return A.abg(Agv,aOffset);else return Agv;},GetUpdateRegion:
function(AJb){var O;var Ig=this.Kf;if(AJb<0)return BD;for(O=0;(O<Ig)&&(O<4);O=O+
1)if(!this.Or.Get(O)){Ig=Ig+1;AJb=AJb+1;}else if(O===AJb)return this.Ki.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kf&&!A.aaY(this.Ki.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var BgN=A.abi(3,A.wg,null);var BgM=this.Kf;for(O=0;
O<BgM;O++)BgN.Set(O,this.Ki.Get(O));for(O=0;O<BgM;O++){var Bf4=A.abh(BgN.Get(O),
this.M.slice(0,2));var Bf5=this.AuJ(Bf4);if(!A.aaY(Bf4,Bf5))this.Bj(A.abg(Bf5,this.
M.slice(0,2)));}}var Ig;var RH;for(Ig=0;Ig<(this.Kf-1);Ig++)if(this.Or.Get(Ig)>0
)for(RH=Ig+1;RH<this.Kf;RH++)if(this.Or.Get(RH)>0){var ALk=A.aaH(A.wC(this.Ki.Get(
Ig),this.Ki.Get(RH)));if(((ALk-this.Or.Get(Ig))-this.Or.Get(RH))<0){this.Ki.Set(
Ig,A.wC(this.Ki.Get(Ig),this.Ki.Get(RH)));this.Or.Set(Ig,ALk);this.Or.Set(RH,0);
}}for(O=this.Kf-1;O>=0;O--)if(!this.Or.Get(O))this.Kf=this.Kf-1;return this.Kf;}
,DoesNeedUpdate:function(){if(this.Kf>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Ce,aSize));if(this.AzW)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A03){if(A03===this.AzW
)return false;this.AzW=A03;if(!A03){if(!!this.JF)this.JF.C0.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JF)this.JF.C0.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qi){this.Ie=Qi;},DriveKeyboardHitting:function(
KC,AyY,Td){var B;var A32=!!this.RI;if(!!this.RI&&((!Td||(this.Az$!==KC))||(this.
At0!==AyY))){var LJ=null;var X=(C.Cj.isPrototypeOf(B=this.RI)?B:null);var D5=(C.
BK.isPrototypeOf(B=this.RI)?B:null);if(!!this.Az$)LJ=A._NewObject(C.KeyEvent,0).
Initialize(this.Az$,false);if(this.At0!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
this.At0,false);if(!!D5)D5.G4(LJ);else if(!!X)X.G4(LJ);this.Az$=0;this.At0=0x00;
this.RI=null;}if(!!this.RI){var LJ=null;var X=(C.Cj.isPrototypeOf(B=this.RI)?B:null
);var D5=(C.BK.isPrototypeOf(B=this.RI)?B:null);if(!!KC)LJ=A._NewObject(C.KeyEvent
,0).Initialize(KC,true);if(this.At0!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
AyY,true);if(!!D5)D5.G4(LJ);else if(!!X)X.G4(LJ);}if(!this.RI&&Td){if(!!KC)this.
RI=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KC,true));if(AyY!==0x00
)this.RI=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyY,true));if(
!(C.BK.isPrototypeOf(B=this.RI)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RI)?B:null)
)this.RI=null;this.Az$=KC;this.At0=AyY;A32=A32||!!this.RI;}this.Ie=0;return A32;
},DriveCursorMovement:function(Fh){return this.DriveMultiTouchMovement(this.EP,Fh
);},DriveMultiTouchMovement:function(BF,Fh){if((BF<0)||(BF>9)){this.Ie=0;return false;
}var Fx=A.abe(Fh,this.RB.Get(BF));this.RB.Set(BF,Fh);if(!this.Fv.Get(BF)||A.aaX(
Fx,Ce)){this.Ie=0;return false;}var pos=Fh;var B0=this.Fv.Get(BF).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fv.Get(BF)!==
this)){var tmp=this.Fv.Get(BF);this.EP=BF;this.Fv.Set(BF,null);tmp.G4(this.Ao4().
InitializeUp(BF,this.Aiq.Get(BF),this.Af0.Get(BF),this.Xy.Get(BF),this.Ma.Get(BF
)+1,this.Xx.Get(BF),false,this.RB.Get(BF),this.Ade.Get(BF)));this.BroadcastEvent(
this.AtK().InitializeUp(BF,this.Ma.Get(BF)+1,false,tmp,Fh),0x18);}else{this.Aiq.
Set(BF,pos);this.EP=BF;this.Fv.Get(BF).G4(this.Bzb().Initialize(BF,pos,this.Af0.
Get(BF),Fx,this.Xy.Get(BF),this.Ma.Get(BF)+1,this.Xx.Get(BF),Fh,this.Ade.Get(BF)
));}this.Ie=0;return true;},DriveCursorHitting:function(Td,BF,Fh){return this.DriveMultiTouchHitting(
Td,BF,Fh);},DriveMultiTouchHitting:function(Td,BF,Fh){if((BF<0)||(BF>9)){this.Ie=
0;return false;}var ticksCount=this.Ie;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BB8=this.Ie;this.DriveMultiTouchMovement(BF,Fh);Fh=this.RB.Get(BF);
this.Ie=BB8;if(Td)this.Ade.Set(BF,Fh);if(Td&&!this.Fv.Get(BF)){var JE;var pos=Fh;
if(A.wa(this.AJR.Get(BF),Fh)&&((ticksCount-this.AtL.Get(BF))<=250))this.Ma.Set(BF
,this.Ma.Get(BF)+1);else this.Ma.Set(BF,0);this.AJR.Set(BF,A.abh(MJ,Fh));this.AtL.
Set(BF,ticksCount);if(!!this.JF)JE=this.Yj(A.abh(MJ,Fh),BF,this.Ma.Get(BF)+1,this.
JF.C0,null,0x0);else JE=this.Yj(A.abh(MJ,Fh),BF,this.Ma.Get(BF)+1,null,null,0x0);
if(!!JE){this.BroadcastEvent(this.AtK().InitializeDown(BF,this.Ma.Get(BF)+1,false
,JE.Cj,Fh),0x18);this.Fv.Set(BF,JE.Cj);this.Xx.Set(BF,JE.DG);}else{this.Fv.Set(BF
,null);this.Xx.Set(BF,Ce);this.Ie=0;return false;}var B0=JE.Cj.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.Af0.Set(BF,pos);this.Aiq.
Set(BF,pos);this.Xy.Set(BF,0);this.Air.Ar(true);this.EP=BF;this.Fv.Get(BF).G4(this.
Ao4().InitializeDown(BF,pos,this.Ma.Get(BF)+1,this.Xx.Get(BF),false,Fh));this.Ie=
0;return true;}if(!Td&&!!this.Fv.Get(BF)){var pos=Fh;var B0=this.Fv.Get(BF).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aiq.
Get(BF);this.EP=BF;var tmp=this.Fv.Get(BF);this.Fv.Set(BF,null);tmp.G4(this.Ao4(
).InitializeUp(BF,pos,this.Af0.Get(BF),this.Xy.Get(BF),this.Ma.Get(BF)+1,this.Xx.
Get(BF),false,Fh,this.Ade.Get(BF)));this.BroadcastEvent(this.AtK().InitializeUp(
BF,this.Ma.Get(BF)+1,false,tmp,Fh),0x18);this.Ie=0;return true;}this.Ie=0;return false;
},AUy:function(Aal,Bcd,Ac6,Ac5){if(Aal===this)Aal=null;if(!!!Aal&&!!this.JF)Aal=
this.JF.C0;if(!this.Fv.Get(this.EP))return;var JE;JE=this.Yj(A.abh(MJ,this.RB.Get(
this.EP)),this.EP,1,Aal,Ac6,Ac5);if(!!JE&&(this.Fv.Get(this.EP)!==JE.Cj))this.ANQ(
JE.Cj,JE.DG);if(!JE&&(this.Fv.Get(this.EP)!==Bcd))this.ANQ(Bcd,Ce);},ANQ:function(
Aal,Xl){if(!this.Fv.Get(this.EP)||(this.Fv.Get(this.EP)===Aal))return;var tmp=this.
Fv.Get(this.EP);this.Fv.Set(this.EP,null);tmp.G4(this.Ao4().InitializeUp(this.EP
,this.Aiq.Get(this.EP),this.Af0.Get(this.EP),this.Xy.Get(this.EP),this.Ma.Get(this.
EP)+1,this.Xx.Get(this.EP),true,this.RB.Get(this.EP),this.Ade.Get(this.EP)));this.
BroadcastEvent(this.AtK().InitializeUp(this.EP,this.Ma.Get(this.EP)+1,true,tmp,this.
RB.Get(this.EP)),0x18);var pos=this.RB.Get(this.EP);var B0=null;if(!!Aal)B0=Aal.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aal
!==this)){this.Fv.Set(this.EP,null);return;}this.BroadcastEvent(this.AtK().InitializeDown(
this.EP,this.Ma.Get(this.EP)+1,true,Aal,this.RB.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fv.Set(this.EP,Aal);this.Xx.Set(
this.EP,Xl);this.Af0.Set(this.EP,pos);this.Aiq.Set(this.EP,pos);this.Ma.Set(this.
EP,0);this.Xy.Set(this.EP,0);this.AtL.Set(this.EP,ticksCount);this.Ade.Set(this.
EP,this.RB.Get(this.EP));this.Fv.Get(this.EP).G4(this.Ao4().InitializeDown(this.
EP,pos,this.Ma.Get(this.EP)+1,this.Xx.Get(this.EP),true,this.Ade.Get(this.EP)));
},AOR:function(){if(!!this.JF)return this.JF.C0;return null;},ACJ:function(KD){var
B;if(!KD)throw new Error(S$);if(!((KD.U&0x80)===0x80))throw new Error(UT);if(this.
JF.C0===KD)this.JF=this.JF.Ah;else{var AzV=this.JF;while(AzV.Ah.C0!==KD)AzV=AzV.
Ah;AzV.Ah=AzV.Ah.Ah;}KD.Cs(0x0,0xD0);if(this.AzW){if(!!this.JF)this.JF.C0.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AMX:function(KD){var B;var As=A._NewObject(C.A7X
,0);if(!KD)throw new Error(Z5);if(KD===null)throw new Error(W7);if(((KD.U&0x80)===
0x80))throw new Error(It);if(!!this.JF)this.JF.C0.Cs(0x0,0x50);else this.Cs(0x0,
0x50);As.Ah=this.JF;As.C0=KD;this.JF=As;if(this.AzW)KD.Cs(0xD0,0x0);else KD.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Air={
I:this},0);(this.Fv=[]).__proto__=C.Root.Fv;(this.Ma=[]).__proto__=C.Root.Ma;(this.
AJR=[]).__proto__=C.Root.AJR;(this.Xy=[]).__proto__=C.Root.Xy;(this.Af0=[]).__proto__=
C.Root.Af0;(this.AtL=[]).__proto__=C.Root.AtL;(this.Aiq=[]).__proto__=C.Root.Aiq;(
this.Xx=[]).__proto__=C.Root.Xx;(this.RB=[]).__proto__=C.Root.RB;(this.Ade=[]).__proto__=
C.Root.Ade;(this.Or=[]).__proto__=C.Root.Or;(this.Ki=[]).__proto__=C.Root.Ki;this.
__proto__=C.Root;this.U=0x10007F;this.Air.PV(10);this.Air.MC=[this,this.Bzf];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Air._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Air._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JF)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fv,D);if((B=this.
AtG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Air)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvW:false,Init:function(aArg){this.Bs=
this.Avu();},Avu:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(KC,Td){this.CO=0;this.DQ=KC;this.Down=Td;if((KC>=0x30)&&(KC<=
0x39))this.CO=(10+KC)-48;if((KC>=0x41)&&(KC<=0x5A))this.CO=(105+KC)-65;if((KC>=0x61
)&&(KC<=0x7A))this.CO=(105+KC)-97;if(KC===0x20)this.CO=131;if(!this.CO)switch(KC
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KC,Td){this.CO=KC;this.
Down=Td;this.DQ=0x00;var A1H=KC-10;var AtF=KC-105;if((A1H>=0)&&(A1H<=9))this.DQ=(
48+A1H)&0xFFFF;if((AtF>=0)&&(AtF<=25))this.DQ=(65+AtF)&0xFFFF;if(KC===131)this.DQ=
0x20;if(this.DQ===0x00)switch(KC){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},BjV:function(Bb4){switch(
Bb4){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bb4===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARB={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARB;},_className:
"Core::LanguageEvent"};C.Au1={AxO:null,LU:A.wf,N8:0,IJ:0,Down:false,NJ:false,InitializeUp:
function(BF,Oe,AoC,A1j,Aak){this.Down=false;this.IJ=BF;this.N8=Oe;this.LU=Aak;this.
AxO=A1j;this.NJ=AoC;return this;},InitializeDown:function(BF,Oe,AoC,A1j,Aak){this.
Down=true;this.IJ=BF;this.N8=Oe;this.LU=Aak;this.AxO=A1j;this.NJ=AoC;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au1;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxO)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aef={Ag3:A.wf,LU:A.wf,N8:0,Jt:
0,NU:A.wf,H1:A.wf,IJ:0,Down:false,NJ:false,InitializeHold:function(BF,All,Ay1,Ay2
,Oe,Xl,Aak,Ay0){this.Down=true;this.IJ=BF;this.H1=A.abf(All,Xl);this.NU=A.abf(Ay1
,Xl);this.Jt=Ay2;this.N8=Oe;this.LU=Aak;this.Ag3=Ay0;return this;},InitializeUp:
function(BF,All,Ay1,Ay2,Oe,Xl,AoC,Aak,Ay0){this.Down=false;this.IJ=BF;this.H1=A.
abf(All,Xl);this.NU=A.abf(Ay1,Xl);this.Jt=Ay2;this.N8=Oe;this.NJ=AoC;this.LU=Aak;
this.Ag3=Ay0;return this;},InitializeDown:function(BF,All,Oe,Xl,AoC,Aak){this.Down=
true;this.IJ=BF;this.H1=A.abf(All,Xl);this.NU=A.abf(All,Xl);this.Jt=0;this.N8=Oe;
this.NJ=AoC;this.LU=Aak;this.Ag3=Aak;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Core::CursorEvent"};C.AqH={
Ag3:A.wf,LU:A.wf,N8:0,Jt:0,DG:A.wf,NU:A.wf,H1:A.wf,IJ:0,Initialize:function(BF,All
,Ay1,aOffset,Ay2,Byf,Xl,Aak,Ay0){this.IJ=BF;this.H1=A.abf(All,Xl);this.NU=A.abf(
Ay1,Xl);this.DG=aOffset;this.Jt=Ay2;this.N8=Byf;this.LU=Aak;this.Ag3=Ay0;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqH;},_className:
"Core::DragEvent"};C.Y={BX:null,NB:null,Em:null,Br:A.wf,AU4:0,Space:0,Ag1:0,Ko:function(
CY,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap3=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap3=A.wC(Ap3,X.GetClipping());
Az=A.wC(Az,Ap3);}return Az;},Cs:function(Rt,U7){var B;var Tp=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U7&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Eu.Cs.call(this,Rt,U7);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rt&0x80000)===
0x80000))&&!((Tp&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al0=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKz=[
E[2]-E[0],E[3]-E[1]];var ApZ=!A.aaX(Al0,AKz);var Fx=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fx,Ce)&&!ApZ){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ank(Fx,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((ApZ&&(Al0[0]>0))&&(Al0[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
ND!==this))X.Ev=null;if(!X.Ev&&((X.PO!==0x14)||!!this.Ag1))X.AtY(Bd,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&ApZ){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JJ],this);}}},BfY:function(){var B;if((!this.Ag1||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A11=((this.U&0x1000)===0x1000);for(;!!X&&!A11;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A11=true;if(((X.U&0x200)===
0x200))break;}if(A11){this.U=this.U&~0x4000;this.Ab.Bf9();}},ApK:function(G){var
B;this.BX.Q=null;this.BX.Qw=null;this.BX=null;(B=this.NB)?B[1].call(B[0],this):null;
},Gb:function(E){var B;var Fx=A.abe(E,this.Br);if(A.aaX(Fx,Ce))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ank(Fx,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.Em,this);},A_I:function(E){var B;if(E<0)E=0;if(E===this.AU4)return;this.AU4=
E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JJ],this);}},BnU:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JJ],this);}},JT:function(E){var B;if(E===this.Ag1)return;
this.Ag1=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JJ],this);}},Vz:function(AcZ,E8){var AtF=this.Dc(0x1);var Rz=this.M;var
Vj=A.abe(AtF.slice(0,2),Rz.slice(0,2));var Mc=A.abe(AtF.slice(2,4),Rz.slice(2,4)
);var Bq=Ce;if((Vj[0]>0)&&(Mc[0]>Vj[0]))Bq=[Vj[0],Bq[1]];else if((Vj[0]>0)&&(Mc[
0]>0))Bq=[Mc[0],Bq[1]];if((Mc[0]<0)&&(Vj[0]<Mc[0]))Bq=[Mc[0],Bq[1]];else if((Mc[
0]<0)&&(Vj[0]<0))Bq=[Vj[0],Bq[1]];if((Vj[1]>0)&&(Mc[1]>Vj[1]))Bq=[Bq[0],Vj[1]];else
if((Vj[1]>0)&&(Mc[1]>0))Bq=[Bq[0],Mc[1]];if((Mc[1]<0)&&(Vj[1]<Mc[1]))Bq=[Bq[0],Mc[
1]];else if((Mc[1]<0)&&(Vj[1]<0))Bq=[Bq[0],Vj[1]];if(A.aaX(Bq,Ce)){(E8)?E8[1].call(
E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E8)?E8[
1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this,this.
Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qw=[this,this.
ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E8;}},HI:function(Ag,Ac3,AcZ,E8
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UU);this.BfY();var Az=Ag.GetExtent();var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac3&&
!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az))){(E8)?E8[1].call(E8[0],this
):null;return;}var Bq=Ce;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E8
)?E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qw=[this
,this.ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E8;}},Bjm:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TQ:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dc:function(aFilter){var B;var X=this.Ah;var AE=BD;var IZ=0x10000;this.BfY();if(((
aFilter&0x10000)===0x10000))IZ=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anv:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HB:null,BX:null,Cj:null,WS:null,NB:null,Em:null,Hm:null,Tm:-1,Tl:0,Jp:-1,Ht:0,AiJ:
8,Om:0,Uy:0,AcJ:A.wf,G6:-1,Br:0,Gt:-1,OS:0,GO:24,AY:0,Lj:null,NR:false,At1:false
,AU$:function(Iu,Od,Xk,Te,Tf,Ah_,O$,Rs,Lz,Lx,Ly){throw new Error(Z6);},AqF:function(
Iu,Ah_,O$,Rs,Lz,Lx,Ly){throw new Error(W8);},AkM:function(Iu,Od,Xk,Te,Tf,O$,Rs,Lz
,Lx,Ly){throw new Error(Z7);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Lj,0))?B:null);if(!!this.B8)this.B8.Ah=this.Cj;else this.B7=
this.Cj;this.Cj.AJ=this.B8;this.B8=this.Cj;this.Cj.Ab=this;this.AcJ=[(B=this.M)[
2]-B[0],this.GO];(B=this.Hm)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Cj.G4(CN
);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B7=null;this.B8=this.Cj.AJ;this.Cj.
AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Lj){A.pe(this.Em,this);return;
}this.At1=true;var AAP=0;if(!this.NR)AAP=this.OS;var FT=this.Al9(-AAP-this.Br,1);
var G0=this.Al9(((((B=this.M)[3]-B[1])-AAP)-this.Br)-1,2);var CB=G0-FT;if(CB<1)CB=
1;var Ail=(CB/2)|0;var Aim=(CB/3)|0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FT<this.Ht){FT=
FT-Ail;G0=G0+Aim;}else if(G0>this.Jp){FT=FT-Aim;G0=G0+Ail;}else{FT=this.Ht;G0=this.
Jp;}if(!this.NR){if(FT>=this.AY){FT=0;G0=-1;}else if(G0<0){FT=0;G0=-1;}if(G0>=this.
AY)G0=this.AY-1;if(FT<0)FT=0;}else if(this.AY<=0){FT=0;G0=-1;}var AiZ=this.Ht;var
Ai0=this.Jp;var Apx=0;var Apy=-1;if(FT>AiZ)AiZ=FT;if(G0<Ai0)Ai0=G0;if(AiZ<=Ai0){
while((this.Jp<G0)&&(this.Ht<AiZ)){this.AdG();this.Azq();}while((this.Ht>FT)&&(this.
Jp>Ai0)){this.AA2();this.Azp();}}else{this.Jp=(this.Jp-this.Ht)+FT;this.Ht=FT;Apx=
this.Ht;Apy=this.Jp;}while(this.Ht<FT)this.AdG();while(this.Jp>G0)this.AA2();while(
this.Ht>FT)this.Azp();while(this.Jp<G0)this.Azq();var Aa=this.B7;var inx=this.Ht;
var pos=[0,(AAP+this.Br)+this.Jn(inx,0)];var BI=(B=this.M)[3]-B[1];var AlI=null;
var BgX=(B=this.M)[2]-B[0];while(!!Aa){var IA=inx;if(this.NR){if(IA<0)IA=this.AY-(-
IA%this.AY);if(IA>0)IA=IA%this.AY;}var AdH=((IA>=this.Tl)&&(IA<=this.Tm))||((inx>=
Apx)&&(inx<=Apy));var Apd=Aa.GetExtent();var Bq=A.abe(pos,Apd.slice(0,2));if(AdH
)this.Uy=this.GO;else this.Uy=Apd[3]-Apd[1];var A2H=pos[1];var A2I=pos[1]+this.Uy;
if(!A.aaX(Bq,Ce))Aa.Ank(Bq,true);if((AdH&&(A2H<BI))&&(A2I>0)){this.Cj=Aa;this.G6=
IA;this.AcJ=[BgX,this.Uy];(B=this.Hm)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uy];}inx=this.Ht;Aa=this.B7;pos=[0,(AAP+this.Br)+this.Jn(
inx,0)];while(!!Aa){var IA=inx;if(this.NR){if(IA<0)IA=this.AY-(-IA%this.AY);if(IA>
0)IA=IA%this.AY;}var AdH=((IA>=this.Tl)&&(IA<=this.Tm))||((inx>=Apx)&&(inx<=Apy)
);if(AdH)this.Uy=this.GO;else this.Uy=(B=Aa.GetExtent())[3]-B[1];var A2H=pos[1];
var A2I=pos[1]+this.Uy;if(AdH&&!((A2H<BI)&&(A2I>0))){this.Cj=Aa;this.G6=IA;this.
AcJ=[BgX,this.Uy];(B=this.Hm)?B[1].call(B[0],this):null;}if(((IA===this.Gt)&&this.
NR)&&!!AlI){var Rz=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rz))>A.aaH(A.lb(AlI.GetExtent(),Rz)))AlI=Aa;}else if(IA===this.Gt)AlI=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uy];}this.Tl=0;this.Tm=-1;this.Cj=null;this.G6=-
1;this.Bb(AlI);this.At1=false;A.pe(this.Em,this);},QJ:function(Ag,GA,aFilter){return null;
},AqM:function(Ag,aFilter){return null;},TQ:function(Ag,aFilter){return null;},ACR:
function(Ag,aFilter){return null;},Dc:function(aFilter){return BD;},NS:function(
KD,FP,Lz,Lx,Ly){throw new Error(W9);},AhE:function(Ag,J7){throw new Error(Z8);},
ZF:function(Ag){throw new Error(Z9);},JZ:function(Ag,Qh){throw new Error(UV);},HP:
function(Ag){throw new Error(W_);},AMb:function(Ag,J7){throw new Error(O5);},J:function(
Ag,Qh){throw new Error(Z_);},Jn:function(Ha,A0U){return Ha*this.GO;},Al9:function(
Fh,A0U){return(Fh/this.GO)|0;},AA2:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jp=this.Jp-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azq:function(
){var B;var Aa=this.HB;var Adq=this.Lj;var AdK=++this.Jp;if(this.NR){if(AdK<0)AdK=
this.AY-(-AdK%this.AY);if(AdK>0)AdK=AdK%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Om)this.AiJ++;
}this.Uy=this.GO;this.G6=AdK;this.AcJ=[(B=this.M)[2]-B[0],this.Uy];this.Cj=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.B8.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdK===this.Gt
)this.Bb(Aa);return Aa;},AdG:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azp:function(){var
B;var Aa=this.HB;var Adq=this.Lj;var M3=--this.Ht;if(this.NR){if(M3<0)M3=this.AY-(-
M3%this.AY);if(M3>0)M3=M3%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adq)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HB===
Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{Aa=(C.Cj.isPrototypeOf(B=
A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Om)this.AiJ++;}this.Uy=this.GO;
this.G6=M3;this.AcJ=[(B=this.M)[2]-B[0],this.Uy];this.Cj=Aa;(B=this.Hm)?B[1].call(
B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B7)this.B7.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(M3===this.Gt)this.Bb(Aa);return Aa;
},ApK:function(G){var B;this.BX.Q=null;this.BX.Qw=null;this.BX=null;(B=this.NB)?
B[1].call(B[0],this):null;},BBt:function(G){this.Gb(this.WS.DG[1]);},BBu:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.BX=
null;}if(!this.NR){var AE=this.AqT(0,this.AY-1);var Agk=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OS);if(AE[0]>Agk[0])AE=[].concat(Agk[0],AE.slice(1,4));if(AE[1]>Agk[
1])AE=A.abP(AE,Agk[1]);var Fx=AE[1]-this.M[1];var A2Y=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2Y>0)A2Y=0;this.WS.DG=[0,this.Br];this.WS.Gp=[0,(this.Br+A2Y)-Fx];this.
WS.F_=[0,this.Br-Fx];}else{var Fx=32000-(32000%this.GO);this.WS.DG=[0,this.Br];this.
WS.Gp=[0,this.Br-Fx];this.WS.F_=[0,this.Br+Fx];}},ATe:function(E){var B;if(this.
NR===E)return;this.NR=E;while(!!this.AdG());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw8:function(E){if(E===this.WS)return;if(!!E&&!!E.Auc){A.ab5(
"%s%*%s",O6,E,Rn);throw new Error(W$);}if(!!this.WS){this.WS.AKM=null;this.WS.Auc=
null;}this.WS=E;if(!!E){E.AKM=[this,this.BBu];E.Auc=[this,this.BBt];}},Gb:function(
E){var B;if(this.NR&&(this.AY>0)){var HD=this.Jn(this.AY,3);if(E<0)E=HD-(-E%HD);
if(E>0)E=E%HD;if(E>0)E=E-HD;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(E){if(E<0)E=-1;if(E===this.Gt)return;
this.Gt=E;this.Am();},A_u:function(E){var B;if(E<0)E=0;if(E===this.OS)return;this.
OS=E;if(!this.NR){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae8:function(
E){var B;if(E<1)E=1;if(E===this.GO)return;this.GO=E;while(!!this.AdG());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jy:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NR){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OS+this.Br)+this.Jn(E,3));AE=A.abP(AE
,(this.OS+this.Br)+this.Jn(this.AY,3));}else{AE=A.abP(AE,(this.OS+this.Br)+this.
Jn(E,3));AE=[].concat(AE.slice(0,3),(this.OS+this.Br)+this.Jn(this.AY,3));}}else
while(!!this.AdG());this.AY=E;this.Am();this.Bj(AE);},N2:function(E){var B;if(E===
this.Lj)return;this.Lj=E;while(!!this.AdG());this.HB=null;this.Om=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bjz:function(Ha){if(this.At1)return null;
if((Ha<0)||(Ha>=this.AY))return null;if(!this.NR){if((Ha<this.Ht)||(Ha>this.Jp))
return null;var X=this.B7;while(Ha>this.Ht){X=X.Ah;Ha=Ha-1;}return X;}else{var M3=
this.Ht;if(M3<0)M3=this.AY-(-M3%this.AY);if(M3>0)M3=M3%this.AY;var X=this.B7;while(
!!X){if((M3%this.AY)===Ha)return X;X=X.Ah;M3=M3+1;}return null;}},ABK:function(AcZ
,E8){var B;if(this.NR){(E8)?E8[1].call(E8[0],this):null;return;}var AKe=this.Br;
var Bdw=((((B=this.M)[3]-B[1])-this.Br)-this.OS)-this.Jn(this.AY,3);var Bq=0;if(
AKe>0)Bq=-AKe;else if(Bdw>0)Bq=Bdw;if((Bq>0)&&(Bq>-AKe))Bq=-AKe;if(!Bq){(E8)?E8[
1].call(E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(this.Br+Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qw=[this,this.
ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E8;}},HI:function(Ha,Ac3,AcZ,E8
){var B;if((Ha<0)||(Ha>=this.AY))return;var Az=this.AqT(Ha,Ha);var Bd=this.M;var
LN=A.lb(Az,Bd);if((!Ac3&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az))
){(E8)?E8[1].call(E8[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(this.Br-Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qw=[this,this.
ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E8;}},Bjr:function(){return BD;
},AOT:function(){if((this.OS<=0)||this.NR)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OS);return AE;},A6X:function(Fh
){if(((this.AY<=0)||(Fh[0]<this.M[0]))||(Fh[0]>=this.M[2]))return-1;Fh=A.abe(Fh,
this.M.slice(0,2));if(!this.NR){var Aa=(Fh[1]-this.Br)-this.OS;if(Aa>0)Aa=this.Al9(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fh[1]-this.Br;if(Aa>0)
Aa=this.Al9(Aa,0);if(Aa<0)Aa=this.Al9(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqT:function(J5,L7){if(J5<0)J5=0;if(L7>=this.AY)L7=
this.AY-1;if(J5>L7)return BD;var AE=this.M;var Bq=this.Br;if(this.NR){var HD=this.
Jn(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;}else Bq=
Bq+this.OS;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jn(L7+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jn(J5,0));return AE;},AbE:function(J5,L7){var B;if(J5<0)J5=0;if(J5>L7
)return;if(this.Tl>this.Tm){this.Tl=J5;this.Tm=L7;}else{if(J5<this.Tl)this.Tl=J5;
if(L7>this.Tm)this.Tm=L7;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NR){
AE=A.abP(AE,(this.OS+this.Br)+this.Jn(J5,0));AE=[].concat(AE.slice(0,3),(this.OS+
this.Br)+this.Jn(L7+1,0));}else if((this.Jn(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HD=this.Jn(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(
Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;AE=A.abP(AE,Bq+this.Jn(J5,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jn(L7+1,0));}this.Am();this.Bj(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(Xa);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WS)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dz={HB:null
,BX:null,Cj:null,NB:null,Hm:null,Tm:-1,Tl:0,Jp:-1,Ht:0,AiJ:8,Om:0,SO:0,AcJ:A.wf,
G6:-1,Br:0,Gt:-1,Wd:24,AY:0,Lj:null,At1:false,AU$:function(Iu,Od,Xk,Te,Tf,Ah_,O$
,Rs,Lz,Lx,Ly){throw new Error(UW);},AqF:function(Iu,Ah_,O$,Rs,Lz,Lx,Ly){throw new
Error(Z$);},AkM:function(Iu,Od,Xk,Te,Tf,O$,Rs,Lz,Lx,Ly){throw new Error(Aaa);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV
){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Lj,0))?B:null);
if(!!this.B8)this.B8.Ah=this.Cj;else this.B7=this.Cj;this.Cj.AJ=this.B8;this.B8=
this.Cj;this.Cj.Ab=this;this.AcJ=[this.SO,(B=this.M)[3]-B[1]];(B=this.Hm)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Cj.G4(CN);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B7=null;
this.B8=this.Cj.AJ;this.Cj.AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Lj
)return;this.At1=true;var FT=this.Al9(0-this.Br,1);var G0=this.Al9((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=G0-FT;if(CB<1)CB=1;var Ail=(CB/2)|0;var Aim=(CB/3)|
0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FT<this.Ht){FT=FT-Ail;G0=G0+Aim;}else if(G0>this.
Jp){FT=FT-Aim;G0=G0+Ail;}else{FT=this.Ht;G0=this.Jp;}if(FT>=this.AY){FT=0;G0=-1;
}else if(G0<0){FT=0;G0=-1;}if(G0>=this.AY)G0=this.AY-1;if(FT<0)FT=0;var AiZ=this.
Ht;var Ai0=this.Jp;var Apx=0;var Apy=-1;if(FT>AiZ)AiZ=FT;if(G0<Ai0)Ai0=G0;if(AiZ<=
Ai0){while((this.Jp<G0)&&(this.Ht<AiZ)){this.AdG();this.Azq();}while((this.Ht>FT
)&&(this.Jp>Ai0)){this.AA2();this.Azp();}}else{this.Jp=(this.Jp-this.Ht)+FT;this.
Ht=FT;Apx=this.Ht;Apy=this.Jp;}while(this.Ht<FT)this.AdG();while(this.Jp>G0)this.
AA2();while(this.Ht>FT)this.Azp();while(this.Jp<G0)this.Azq();var Aa=this.B7;var
inx=this.Ht;var pos=[this.Br+this.Jn(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlI=
null;var BgK=(B=this.M)[3]-B[1];while(!!Aa){var IA=inx;var AdH=((IA>=this.Tl)&&(
IA<=this.Tm))||((inx>=Apx)&&(inx<=Apy));var Apd=Aa.GetExtent();var Bq=A.abe(pos,
Apd.slice(0,2));if(AdH)this.SO=this.Wd;else this.SO=Apd[2]-Apd[0];var A2F=pos[0];
var A2G=pos[0]+this.SO;if(!A.aaX(Bq,Ce))Aa.Ank(Bq,true);if((AdH&&(A2F<BY))&&(A2G>
0)){this.Cj=Aa;this.G6=IA;this.AcJ=[this.SO,BgK];(B=this.Hm)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SO,pos[1]];}inx=this.Ht;Aa=this.B7;pos=[
this.Br+this.Jn(inx,0),0];while(!!Aa){var IA=inx;var AdH=((IA>=this.Tl)&&(IA<=this.
Tm))||((inx>=Apx)&&(inx<=Apy));if(AdH)this.SO=this.Wd;else this.SO=(B=Aa.GetExtent(
))[2]-B[0];var A2F=pos[0];var A2G=pos[0]+this.SO;if(AdH&&!((A2F<BY)&&(A2G>0))){this.
Cj=Aa;this.G6=IA;this.AcJ=[this.SO,BgK];(B=this.Hm)?B[1].call(B[0],this):null;}if(
IA===this.Gt)AlI=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SO,pos[1]];}this.Tl=0;this.
Tm=-1;this.Cj=null;this.G6=-1;this.Bb(AlI);this.At1=false;},QJ:function(Ag,GA,aFilter
){return null;},AqM:function(Ag,aFilter){return null;},TQ:function(Ag,aFilter){return null;
},ACR:function(Ag,aFilter){return null;},Dc:function(aFilter){return BD;},NS:function(
KD,FP,Lz,Lx,Ly){throw new Error(Xb);},AhE:function(Ag,J7){throw new Error(Xc);},
ZF:function(Ag){throw new Error(Ta);},JZ:function(Ag,Qh){throw new Error(UX);},HP:
function(Ag){throw new Error(UY);},AMb:function(Ag,J7){throw new Error(AcM);},J:
function(Ag,Qh){throw new Error(Tb);},Jn:function(Ha,A0U){return Ha*this.Wd;},Al9:
function(Fh,A0U){return(Fh/this.Wd)|0;},AA2:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jp=this.Jp-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azq:function(
){var B;var Aa=this.HB;var Adq=this.Lj;var AdK=++this.Jp;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Om)this.
AiJ++;}this.SO=this.Wd;this.G6=AdK;this.AcJ=[this.SO,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.
B8.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdK===this.
Gt)this.Bb(Aa);return Aa;},AdG:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azp:function(){var
B;var Aa=this.HB;var Adq=this.Lj;var M3=--this.Ht;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Om)this.AiJ++;
}this.SO=this.Wd;this.G6=M3;this.AcJ=[this.SO,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B7)this.B7.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(M3===this.Gt
)this.Bb(Aa);return Aa;},ApK:function(G){var B;this.BX.Q=null;this.BX.Qw=null;this.
BX=null;(B=this.NB)?B[1].call(B[0],this):null;},Gb:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(
E){if(E<0)E=-1;if(E===this.Gt)return;this.Gt=E;this.Am();},AFo:function(E){var B;
if(E<1)E=1;if(E===this.Wd)return;this.Wd=E;while(!!this.AdG());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jy:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jn(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jn(E,3));}else{AE=
A.abN(AE,this.Br+this.Jn(this.AY,3));AE=[].concat(this.Br+this.Jn(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},N2:function(E){var B;if(E===this.Lj)return;
this.Lj=E;while(!!this.AdG());this.HB=null;this.Om=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bpy:function(Byg,Byh){if(!this.BX)return;if(Byg)this.Gb(
this.BX.B2);var A4D=this.NB;this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.
NB=null;this.BX=null;if(Byh)(A4D)?A4D[1].call(A4D[0],this):null;},Bj1:function(){
return!!this.BX;},HI:function(Ha,Ac3,AcZ,E8){var B;if((Ha<0)||(Ha>=this.AY))return;
var Az=this.AqT(Ha,Ha);var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac3&&!((LN[0]>=LN[2
])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az))){(E8)?E8[1].call(E8[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.NB=null;}this.BX=
AcZ;if(!this.BX){this.Gb(this.Br-Bq);(E8)?E8[1].call(E8[0],this):null;}else{this.
BX.Ar(false);this.BX.HO(1);this.BX.Q=[this,this.Anv,this.Gb];this.BX.Cx=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qw=[this,this.ApK];this.BX.Ae$(false);this.BX.Ar(true
);this.NB=E8;}},AqT:function(J5,L7){if(J5<0)J5=0;if(L7>=this.AY)L7=this.AY-1;if(
J5>L7)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jn(L7+1
,0));AE=[].concat((AE[0]+Bq)+this.Jn(J5,0),AE.slice(1,4));return AE;},AbE:function(
J5,L7){var B;if(J5<0)J5=0;if(J5>L7)return;if(this.Tl>this.Tm){this.Tl=J5;this.Tm=
L7;}else{if(J5<this.Tl)this.Tl=J5;if(L7>this.Tm)this.Tm=L7;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jn(J5,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jn(L7+1,0));this.Am();this.Bj(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dz;this.H(Xa);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASt:null,AEO:null,Av$:null,D1:null,
Lo:null,BL:null,AK$:0,Bp:0,IJ:0,Bs:0,N8:0,Jt:0,DG:A.wf,NU:A.wf,H1:A.wf,Axw:8,Afg:
0,A7Q:1,Down:false,YI:false,NJ:false,A18:false,AAk:0,Ko:function(CY,aClip,aOffset
,Ck,aBlend){},G4:function(CN){var B;var BN=(C.Aef.isPrototypeOf(CN)?CN:null);var
D4=(C.AqH.isPrototypeOf(CN)?CN:null);var AKo=this.YI;var AaI;var Vg;var ABl;var M0;
var AzI;if(!BN&&!D4)return null;AaI=(!!BN&&BN.Down)&&!BN.Jt;Vg=(!!BN&&BN.Down)&&(
BN.Jt>0);ABl=(!!BN&&BN.Down)&&(BN.Jt>this.AAk);M0=!!BN&&!BN.Down;AzI=!!D4;if(AaI
)this.AAk=((B=(BN.NJ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afg&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iy=(C.Au1.isPrototypeOf(CN)?CN:null);if(((
!!Iy&&Iy.Down)&&(Iy.AxO!==this))&&A.wa(this.GetExtent(),this.Ab.A7L(Iy.LU))){this.
AK$=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaI){var ApE=0;var Adl;this.Bp=
this.Bp|(1<<BN.IJ);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApE=ApE+1;
if(ApE===1)this.Bp=(this.Bp|16777216)|(4096<<BN.IJ);}if(M0&&(this.Bp<16777216)){
var IE=this.Im();var JE=null;if(!!IE){var A4u=(!!this.AJ?this.AJ:this.Ab);var A1W=(
!!IE.JF?IE.JF.C0:null);JE=IE.Yj(A.abh(Aab,BN.LU),BN.IJ,BN.N8,A1W,A4u,0x0);}if(!!
JE){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A._NewObject(C.Aef,0).
InitializeDown(O,BN.H1,BN.N8,Ce,true,BN.LU));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JE.Cj.G4(A._NewObject(C.Aef,0).InitializeUp(O,BN.H1,BN.H1,0,BN.N8,Ce,false,BN.
LU,BN.LU));}}if(M0)this.Bp=(this.Bp&~(1<<BN.IJ))|33554432;if(ABl&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M0&&BN.NJ)this.Bp=this.Bp|67108864;if(M0&&!(this.Bp&
4095))this.AK$=0x0;if(M0&&!(this.Bp&16777215))this.Bp=0;if(Vg&&(this.Bp>=67108864
)){var IE=this.Im();if(!!IE)IE.AUy(null,null,this,this.AK$);}if((Vg&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vg=false;M0=true;}if(!!BN&&!(this.Bp&(4096<<BN.
IJ)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IJ)))return this;if(M0&&!(this.Bp&
16777216))return this;if(((AaI||AzI)||Vg)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M0)this.Bp=this.Bp&3758100479;if(M0&&!(this.Bp&16777215))this.
Bp=0;if(!!BN){this.Down=AaI||Vg;this.YI=this.ARn(BN.H1);this.NU=BN.NU;this.H1=BN.
H1;this.DG=Ce;this.Jt=BN.Jt;this.N8=BN.N8;this.NJ=BN.NJ;this.IJ=BN.IJ;this.Bs=BN.
Bs;if(BN.Down&&!BN.Jt)AKo=false;}if(!!D4){this.Down=true;this.YI=this.ARn(D4.H1);
this.NU=D4.NU;this.H1=D4.H1;this.DG=D4.DG;this.Jt=D4.Jt;this.N8=D4.N8;this.IJ=D4.
IJ;this.NJ=false;this.Bs=D4.Bs;}var A12=this.Down;if(!!D4)(B=this.ASt)?B[1].call(
B[0],this):null;if((!!BN&&this.Down)&&!this.Jt)(B=this.BL)?B[1].call(B[0],this):
null;if((!!BN&&this.Down)&&(this.Jt>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YI)&&!AKo){this.A18=true;(B=this.Av$)?B[1].call(B[0],this):null;
}if(this.A18&&(((A12&&!this.YI)&&AKo)||((!A12&&this.YI)&&AKo))){this.A18=false;(
B=this.AEO)?B[1].call(B[0],this):null;}if(!!BN&&!A12)(B=this.Lo)?B[1].call(B[0],
this):null;if(!!this.Afg){var AdF=0x0;if(((((this.Afg&0x10)===0x10)&&!!BN)&&BN.Down
)&&(BN.Jt>=1000))AdF=0x10;if((((this.Afg&0x1)===0x1)&&!!D4)&&((D4.LU[1]-D4.Ag3[1
])<=-this.Axw))AdF=0x1;if((((this.Afg&0x2)===0x2)&&!!D4)&&((D4.LU[1]-D4.Ag3[1])>=
this.Axw))AdF=0x2;if((((this.Afg&0x4)===0x4)&&!!D4)&&((D4.LU[0]-D4.Ag3[0])<=-this.
Axw))AdF=0x4;if((((this.Afg&0x8)===0x8)&&!!D4)&&((D4.LU[0]-D4.Ag3[0])>=this.Axw)
)AdF=0x8;if(!!AdF){var IE=this.Im();if(!!IE){this.AK$=AdF;IE.AUy(null,this,this,
AdF);}}}return this;},Yj:function(Db,BF,Oe,Aaj,Ac6,Ac5){var B;if(!!Aaj&&(Aaj!==this
))return null;if((Oe<1)||(Oe>this.A7Q))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;if(!!(Ac5&this.Afg))return null;
if(this.BjD()){var Az=A.lb(Db,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qk=A.aaI(Db);var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=
Az[2])Fx=[(Az[2]-Qk[0])-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=
Az[3])Fx=[Fx[0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au2,0).Initialize(this,Fx
);}}else{var HC=A.abi(9,A.wf,null);var O;HC.Set(0,A.aaI(Db));HC.Set(1,HC.Get(0));
HC.Set(2,HC.Get(0));HC.Set(3,HC.Get(0));HC.Set(4,HC.Get(0));HC.Set(1,[Db[0],HC.Get(
1)[1]]);HC.Set(2,[HC.Get(2)[0],Db[1]]);HC.Set(3,[Db[2],HC.Get(3)[1]]);HC.Set(4,[
HC.Get(4)[0],Db[3]]);HC.Set(5,Db.slice(0,2));HC.Set(6,[Db[2],Db[1]]);HC.Set(7,[Db[
0],Db[3]]);HC.Set(8,Db.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARn(HC.Get(O)))return A.
_NewObject(C.Au2,0).Initialize(this,A.abe(HC.Get(O),HC.Get(0)));}return null;},BnN:
function(E){if(E<1)E=1;this.Axw=E;},AFx:function(E){if(E<1)E=1;this.A7Q=E;},Ar:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZD._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZD._Mark.call(this,D);if((B=this.ASt)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AEO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av$
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H_={timer:null,AKM:null,Auc:null,AF_:null,Zn:null,SL:null,Bp:0,AJn:0,Ado:5000
,ApY:0,AKn:A.wf,Apa:0,AfP:0,EY:0,Amj:0,Auq:0,Ao$:0,AfO:0,EX:0,Ami:0,Amg:0,NU:A.wf
,A59:A.wf,F_:A.wf,Gp:A.wf,DG:A.wf,WU:A.wf,A6K:0.5,A$p:true,AGQ:true,ZN:false,XJ:
false,XK:false,AoV:false,AAk:0,Ko:function(CY,aClip,aOffset,Ck,aBlend){},G4:function(
CN){var B;var BN=(C.Aef.isPrototypeOf(CN)?CN:null);var D4=(C.AqH.isPrototypeOf(CN
)?CN:null);var Iy=(C.Au1.isPrototypeOf(CN)?CN:null);var AaI;var Vg;var ABl;var M0;
var AzI;AaI=(!!BN&&BN.Down)&&!BN.Jt;Vg=(!!BN&&BN.Down)&&(BN.Jt>0);ABl=(!!BN&&BN.
Down)&&(BN.Jt>this.AAk);M0=!!BN&&!BN.Down;AzI=!!D4;if(AaI)this.AAk=((B=(BN.NJ?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaI){var ApE=0;var Adl;this.Bp=this.Bp|(1<<BN.
IJ);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApE=ApE+1;if(ApE===1)this.
Bp=(this.Bp|16777216)|(4096<<BN.IJ);}if(M0&&(this.Bp<16777216)){var IE=this.Im();
var JE=null;if(!!IE){var A4u=(!!this.AJ?this.AJ:this.Ab);var A1W=(!!IE.JF?IE.JF.
C0:null);JE=IE.Yj(A.abh(Aab,BN.LU),BN.IJ,BN.N8,A1W,A4u,0x0);}if(!!JE){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A._NewObject(C.Aef,0).InitializeDown(
O,BN.H1,BN.N8,Ce,true,BN.LU));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A.
_NewObject(C.Aef,0).InitializeUp(O,BN.H1,BN.H1,0,BN.N8,Ce,false,BN.LU,BN.LU));}}
if(M0)this.Bp=(this.Bp&~(1<<BN.IJ))|33554432;if(ABl&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M0&&BN.NJ)this.Bp=this.Bp|67108864;if(M0&&!(this.Bp&16777215
))this.Bp=0;if(Vg&&(this.Bp>=67108864)){var IE=this.Im();if(!!IE)IE.AUy(null,null
,this,0x0);}if((Vg&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vg=false;M0=true;
}if(!!BN&&!(this.Bp&(4096<<BN.IJ)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IJ))
)return this;if(M0&&!(this.Bp&16777216))return this;if(((AaI||AzI)||Vg)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M0)this.Bp=this.Bp&3758100479;
if(M0&&!(this.Bp&16777215))this.Bp=0;if(!!Iy&&(Iy.AxO===this))return null;if((!!
Iy&&Iy.Down)&&(this.AoV||!this.ZN))return null;if((!!Iy&&Iy.Down)&&!A.wa(this.M,
this.Ab.A7L(Iy.LU)))return null;if((!!Iy&&!Iy.Down)&&(!this.AoV||(this.AJn!==Iy.
IJ)))return null;if((!BN&&!D4)&&!Iy)return null;if(!!BN){this.AoV=AaI||Vg;this.AJn=
BN.IJ;this.NU=BN.NU;}if(!!D4)this.AJn=D4.IJ;if(!!Iy){this.AoV=Iy.Down;this.AJn=Iy.
IJ;}if(!!Iy&&Iy.Down){this.A4v();this.EX=(((Iy.Bs-this.Amg)*0.001)*this.AfO)+this.
EX;this.EY=(((Iy.Bs-this.Auq)*0.001)*this.AfP)+this.EY;if(this.XJ)this.EX=0;if(this.
XK)this.EY=0;this.AfO=0;this.AfP=0;this.XJ=false;this.XK=false;this.AKn=this.DG;
this.ApY=Iy.Bs;return this;}if(AaI){this.A4v();this.EX=(((BN.Bs-this.Amg)*0.001)
*this.AfO)+this.EX;this.EY=(((BN.Bs-this.Auq)*0.001)*this.AfP)+this.EY;if(this.XJ||
!this.ZN)this.EX=0;if(this.XK||!this.ZN)this.EY=0;this.AfO=0;this.AfP=0;this.XJ=
false;this.XK=false;if(!this.ZN){this.ZN=true;(B=this.SL)?B[1].call(B[0],this):null;(
B=this.AKM)?B[1].call(B[0],this):null;}this.AKn=this.DG;this.ApY=BN.Bs;}if(!!D4){
var Hc=A.abe(D4.H1,D4.NU);var CD=this.DG;if(this.AGQ)CD=[this.AKn[0]+Hc[0],CD[1]
];CD=[CD[0],this.AKn[1]+Hc[1]];if(this.A$p){if(CD[0]<this.Gp[0])CD=[this.Gp[0]+(((
CD[0]-this.Gp[0])/2)|0),CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0]+(((CD[0]-
this.F_[0])/2)|0),CD[1]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]+(((CD[1]-this.
Gp[1])/2)|0)];else if(CD[1]>this.F_[1])CD=[CD[0],this.F_[1]+(((CD[1]-this.F_[1])
/2)|0)];}else{if(CD[0]<this.Gp[0])CD=[this.Gp[0],CD[1]];else if(CD[0]>this.F_[0]
)CD=[this.F_[0],CD[1]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]];else if(CD[1]>this.
F_[1])CD=[CD[0],this.F_[1]];}if(!A.aaX(CD,this.DG)){this.A59=A.abe(CD,this.DG);this.
DG=CD;(B=this.Auc)?B[1].call(B[0],this):null;(B=this.AF_)?B[1].call(B[0],this):null;
}}if((!!Iy&&!Iy.Down)&&((Iy.Bs-this.ApY)>=200)){this.EX=0;this.EY=0;}if(Vg&&((BN.
Bs-this.ApY)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApY)){var Hc=D4.DG;
var BdZ=1000/(D4.Bs-this.ApY);var AiM=0;var AiN;if(this.AGQ)AiM=Hc[0]*BdZ;AiN=Hc[
1]*BdZ;if((AiM*this.EX)<0)this.EX=0;if((AiN*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiM)*0.5;this.EY=(this.EY+AiN)*0.5;this.ApY=D4.Bs;}if(!M0&&!Iy)return this;if(!!
BN&&BN.NJ){this.EX=0;this.EY=0;}if((this.DG[0]<=this.Gp[0])||(this.DG[0]>=this.F_[
0]))this.EX=0;else if(!this.EX){var ER=this.DG[0];var Fj=this.Gp[0];var EI=this.
F_[0];if(ER<Fj)EI=this.Gp[0];else if(ER>EI)Fj=this.F_[0];else if(this.WU[0]<=1){
Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WU[0];EI=(ER-this.WU[0])+Ads;Fj=ER+Ads;if(
EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.F_[0];}if((Fj-ER)<=(ER-EI))
ER=Fj;else ER=EI;if(ER!==this.DG[0]){var Jm=ER-this.DG[0];if(Jm>0)this.EX=Math.sqrt((
Jm*2)*this.Ado)+20;if(Jm<0)this.EX=-Math.sqrt((-Jm*2)*this.Ado)-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jm);this.Ao$=ER;}}else{var BCr=this.EX*this.EX;var Jm=BCr/(
2*this.Ado);var ER=this.DG[0];if(this.EX>0)ER=ER+(Jm|0);if(this.EX<0)ER=ER-(Jm|0
);if(ER>this.F_[0])ER=this.F_[0];else if(ER<this.Gp[0])ER=this.Gp[0];var BgF=ER;
var Fj=this.Gp[0];var EI=this.F_[0];if(ER<Fj)EI=this.Gp[0];else if(ER>EI)Fj=this.
F_[0];else if(this.WU[0]<=1){Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WU[0];EI=(ER-
this.WU[0])+Ads;Fj=ER+Ads;if(EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.
F_[0];}if(this.EX>0){if(EI<=this.DG[0])ER=Fj;else if((ER-EI)<(Fj-ER))ER=EI;else ER=
Fj;}else if(Fj>=this.DG[0])ER=EI;else if((ER-EI)>(Fj-ER))ER=Fj;else ER=EI;if(ER!==
this.DG[0]){Jm=ER-this.DG[0];if(ER!==BgF){var Ai8=ER-BgF;if(Ai8>0)this.EX=this.EX+
Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EX=this.EX-Math.sqrt((-Ai8*2)*this.Ado
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jm);this.Ao$=ER;}else this.EX=0;}if((this.DG[1]<=this.Gp[1]
)||(this.DG[1]>=this.F_[1]))this.EY=0;else if(!this.EY){var ES=this.DG[1];var Fj=
this.Gp[1];var EI=this.F_[1];if(ES<Fj)EI=this.Gp[1];else if(ES>EI)Fj=this.F_[1];
else if(this.WU[1]<=1){Fj=ES;EI=ES;}else{var Ads=(EI-ES)%this.WU[1];EI=(ES-this.
WU[1])+Ads;Fj=ES+Ads;if(EI<this.Gp[1])EI=this.Gp[1];if(Fj>this.F_[1])Fj=this.F_[
1];}if((Fj-ES)<=(ES-EI))ES=Fj;else ES=EI;if(ES!==this.DG[1]){var Jm=ES-this.DG[1
];if(Jm>0)this.EY=Math.sqrt((Jm*2)*this.Ado)+20;if(Jm<0)this.EY=-Math.sqrt((-Jm*
2)*this.Ado)-20;this.AfP=(400-(this.EY*this.EY))/(2*Jm);this.Apa=ES;}}else{var BCs=
this.EY*this.EY;var Jm=BCs/(2*this.Ado);var ES=this.DG[1];if(this.EY>0)ES=ES+(Jm|
0);if(this.EY<0)ES=ES-(Jm|0);if(ES>this.F_[1])ES=this.F_[1];else if(ES<this.Gp[1
])ES=this.Gp[1];var BgG=ES;var Fj=this.Gp[1];var EI=this.F_[1];if(ES<Fj)EI=this.
Gp[1];else if(ES>EI)Fj=this.F_[1];else if(this.WU[1]<=1){Fj=ES;EI=ES;}else{var Ads=(
EI-ES)%this.WU[1];EI=(ES-this.WU[1])+Ads;Fj=ES+Ads;if(EI<this.Gp[1])EI=this.Gp[1
];if(Fj>this.F_[1])Fj=this.F_[1];}if(this.EY>0){if(EI<=this.DG[1])ES=Fj;else if((
ES-EI)<(Fj-ES))ES=EI;else ES=Fj;}else if(Fj>=this.DG[1])ES=EI;else if((ES-EI)>(Fj-
ES))ES=Fj;else ES=EI;if(ES!==this.DG[1]){Jm=ES-this.DG[1];if(ES!==BgG){var Ai8=ES-
BgG;if(Ai8>0)this.EY=this.EY+Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EY=this.EY-
Math.sqrt((-Ai8*2)*this.Ado);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfP=(400-(this.EY*this.EY))/(2*Jm);this.Apa=ES;}else this.EY=
0;}if(!!BN)this.Amg=BN.Bs;if(!!Iy)this.Amg=Iy.Bs;this.Auq=this.Amg;this.Ami=this.
DG[0];this.Amj=this.DG[1];this.BCt();return this;},Yj:function(Db,BF,Oe,Aaj,Ac6,
Ac5){var B;if(!!Aaj&&(Aaj!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGQ&&!!(Ac5&0xC))
return null;var Az=A.lb(Db,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=
A.aaI(Db);var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=Az[2])Fx=[(Az[
2]-Qk[0])-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fx=[Fx[
0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au2,0).Initialize(this,Fx);}return null;
},A4v:function(){if(!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;
}},BCt:function(){this.timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mg],this.
timer,0);},Mg:function(G){var B;if(!this.timer)return;var Auv=(this.timer.Bs-this.
Amg)*0.001;var Auw=(this.timer.Bs-this.Auq)*0.001;var BCE=Auv*Auv;var BCF=Auw*Auw;
var AiM=(this.AfO*Auv)+this.EX;var AiN=(this.AfP*Auw)+this.EY;var CD=[((((this.AfO
*0.5)*BCE)+(this.EX*Auv))+this.Ami)|0,((((this.AfP*0.5)*BCF)+(this.EY*Auw))+this.
Amj)|0];if(this.XJ&&(Auv>=0.5)){CD=[this.Ao$,CD[1]];this.EX=0;this.AfO=0;this.Ami=
CD[0];this.XJ=false;}else if(this.XJ){var LK=1-Math.pow(1-(Auv/0.5),5);CD=[(this.
Ami+((this.Ao$-this.Ami)*LK))|0,CD[1]];}if(this.XK&&(Auw>=0.5)){CD=[CD[0],this.Apa
];this.EY=0;this.AfP=0;this.Amj=CD[1];this.XK=false;}else if(this.XK){var LK=1-Math.
pow(1-(Auw/0.5),5);CD=[CD[0],(this.Amj+((this.Apa-this.Amj)*LK))|0];}if(((this.EX>
0)&&(AiM<0))||((this.EX<0)&&(AiM>0))){AiM=0;CD=[this.DG[0],CD[1]];}if(((this.EY>
0)&&(AiN<0))||((this.EY<0)&&(AiN>0))){AiN=0;CD=[CD[0],this.DG[1]];}if(!this.XJ&&(
CD[0]<this.Gp[0])){this.Ami=CD[0];this.Ao$=this.Gp[0];this.Amg=this.timer.Bs;this.
XJ=true;}else if(!this.XJ&&(CD[0]>this.F_[0])){this.Ami=CD[0];this.Ao$=this.F_[0
];this.Amg=this.timer.Bs;this.XJ=true;}if(!this.XK&&(CD[1]<this.Gp[1])){this.Amj=
CD[1];this.Apa=this.Gp[1];this.Auq=this.timer.Bs;this.XK=true;}else if(!this.XK&&(
CD[1]>this.F_[1])){this.Amj=CD[1];this.Apa=this.F_[1];this.Auq=this.timer.Bs;this.
XK=true;}if(((!this.XJ&&!!this.EX)&&(AiM>-20))&&(AiM<20)){CD=[this.Ao$,CD[1]];this.
EX=0;this.AfO=0;this.Ami=CD[0];}if(((!this.XK&&!!this.EY)&&(AiN>-20))&&(AiN<20)){
CD=[CD[0],this.Apa];this.EY=0;this.AfP=0;this.Amj=CD[1];}if(!A.aaX(CD,this.DG)){
this.A59=A.abe(CD,this.DG);this.DG=CD;(B=this.Auc)?B[1].call(B[0],this):null;(B=
this.AF_)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XJ)&&!this.
XK){this.A4v();this.ZN=false;(B=this.Zn)?B[1].call(B[0],this):null;}},ATK:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WU=E;},ATg:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6K)return;this.A6K=E;if(E<(1e-007))E=1e-007;this.Ado=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.H_;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKM)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Auc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF_
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zn)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ah:null,Lo:null,BL:null,D1:null,ApT:
0,Bs:0,A$k:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Ach:false,NL:false,Init:function(
aArg){var B;var C0=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C0)throw new Error(AfB
);this.Ah=C0.AKr;C0.AKr=this;},G4:function(CN){var B;if(!!CN&&CN.BjV(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NL=false;if(
CN.Down){this.A$k=this.ApT;this.Ach=this.ApT>0;if(this.Ach)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NL)this.ApT=this.
ApT+1;return!this.NL;}if(!CN.Down){this.Ach=this.ApT>1;this.A$k=this.ApT-1;this.
ApT=0;(B=this.Lo)?B[1].call(B[0],this):null;return!this.NL;}}return false;},_Init:
function(aArg){this.__proto__=C.BK;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lo)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au2={Cj:null,Au4:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DG=
aOffset;this.Au4=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au2;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7X={Ah:null,C0:null,_Init:
function(aArg){this.__proto__=C.A7X;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Ark={ND:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Ark;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ND)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AD$={AiU:A.wf,AiT:A.wf,_Init:function(aArg
){C.Ark._Init.call(this,aArg);this.__proto__=C.AD$;},_className:"Core::LayoutLineContext"
};C.AEa={AAT:A.wf,AAS:A.wf,AiU:A.wf,AiT:A.wf,_Init:function(aArg){C.Ark._Init.call(
this,aArg);this.__proto__=C.AEa;},_className:"Core::LayoutQuadContext"};C.AN0={C0:
null,Ah:null,RC:null,RL:null,Me:null,ApP:null,_Init:function(aArg){this.__proto__=
C.AN0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RC)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Me)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApP)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVe={FQ:null,B8:null,B7:null,Bd6:false,
By6:function(){if(!this.FQ)return;var Pm=this.FQ;this.FQ.Ph=null;this.FQ=null;A.
pe([this,this.A3D],this);Pm.A8m(this);},BAU:function(G){if(!!this.FQ)return;if(!
this.B7)return;this.FQ=this.B7;this.B7=this.B7.Ah;if(!!this.B7)this.B7.AJ=null;else
this.B8=null;this.FQ.Ah=null;this.Bd6=true;this.FQ.SL(this);this.Bd6=false;},BBf:
function(G){A.pe([this,this.BAU],this);},BBe:function(G){A.pe([this,this.BBf],this
);},A3D:function(G){A.pe([this,this.BBe],this);},BhR:function(Ji){if(!Ji||!Ji.Ph
)return;if(Ji.Ph!==this)throw new Error(Aac);var Bg$=false;if(this.FQ===Ji){this.
FQ=null;Bg$=true;A.pe([this,this.A3D],this);}else{if(!!Ji.Ah)Ji.Ah.AJ=Ji.AJ;else
this.B8=Ji.AJ;if(!!Ji.AJ)Ji.AJ.Ah=Ji.Ah;else this.B7=Ji.Ah;Ji.AJ=null;Ji.Ah=null;
}Ji.Ph=null;if(Bg$)Ji.A8l(this);},A$s:function(Ji,A1p){if(!Ji)return;if(!!Ji.Ph)
throw new Error(Xd);Ji.Ph=this;if(A1p){Ji.Ah=this.B7;if(!!this.B7)this.B7.AJ=Ji;
else this.B8=Ji;this.B7=Ji;}else{Ji.AJ=this.B8;if(!!this.B8)this.B8.Ah=Ji;else this.
B7=Ji;this.B8=Ji;}if(!this.FQ)A.pe([this,this.A3D],this);},_Init:function(aArg){
this.__proto__=C.AVe;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkZ={Ph:null,AJ:null,Ah:
null,A8m:function(Aty){},A8l:function(Aty){},SL:function(Aty){this.AmC();},Mp:function(
){if(!!this.Ph&&(this.Ph.FQ===this))this.Ph.By6();},AmC:function(){if(!!this.Ph)
this.Ph.BhR(this);},ARj:function(){return!!this.Ph&&(this.Ph.FQ===this);},_Init:
function(aArg){this.__proto__=C.AkZ;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ph)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVc={As:null,Aus:
null,SL:function(Aty){this.Aus.As=this.As;A.we(this.Aus,0);A.pe([this,this.BAR],
this);},BAR:function(G){this.Aus.As=null;this.Aus=null;this.As=null;this.Mp();},
_Init:function(aArg){C.AkZ._Init.call(this,aArg);this.__proto__=C.AVc;},_Mark:function(
D){var B;C.AkZ._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aus)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxN={_Init:function(){C.AVe._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhD={resource:null,Lc:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhD;this.Init(aArg);A.h7++;},_Done:function(){this.Lc();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MC:null,timer:null,Bs:0,Period:1000,VH:0,Bw:false,Lc:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKU:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PV:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKU(this.VH,E);},WF:function(E){if(E<0)E=0;if(E===
this.VH)return;this.VH=E;if(this.Bw)this.AKU(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKU(this.VH,this.Period);else this.AKU(0,
0);this.Bs=this.Avu();},Avu:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avu();if(!this.
Period)this.Ar(false);(B=this.MC)?B[1].call(B[0],this):null;},AxL:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lc();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MC)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUH:0,Av5:0
,AjU:0,GL:0,Hk:0,Year:0,BdD:function(AfL,A0S){if(A0S)switch(AfL){case 1:return A.
aci.Bj5;case 2:return A.aci.BiX;case 3:return A.aci.Bkl;case 4:return A.aci.Bhv;
case 5:return A.aci.Bkp;case 6:return A.aci.Bj8;case 7:return A.aci.Bj7;case 8:return A.
aci.Bhx;case 9:return A.aci.Bo9;case 10:return A.aci.BkJ;case 11:return A.aci.BkI;
case 12:return A.aci.Bie;default:return A.jV;}else switch(AfL){case 1:return A.aci.
AD5;case 2:return A.aci.ACO;case 3:return A.aci.AEf;case 4:return A.aci.ABQ;case
5:return A.aci.AEh;case 6:return A.aci.AD7;case 7:return A.aci.AD6;case 8:return A.
aci.ABX;case 9:return A.aci.AGE;case 10:return A.aci.AEu;case 11:return A.aci.AEs;
case 12:return A.aci.ACz;default:return A.jV;}},BdB:function(Bb9,A0S){if(A0S)switch(
Bb9){case 1:return A.aci.Bku;case 2:return A.aci.Bqr;case 3:return A.aci.Bq9;case
4:return A.aci.Bqc;case 5:return A.aci.Bi_;case 6:return A.aci.Bo0;case 0:return A.
aci.Bp1;default:return A.jV;}else switch(Bb9){case 1:return A.aci.Bkt;case 2:return A.
aci.Bqq;case 3:return A.aci.Bq8;case 4:return A.aci.Bqb;case 5:return A.aci.Bi9;
case 6:return A.aci.BoZ;case 0:return A.aci.Bp0;default:return A.jV;}},BdA:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JS:function(){var d=this.GL;var K4=this.Hk;var Dh=this.Year-((
K4<=2)?1:0);var AzJ=(((Dh>=0)?Dh:Dh-399)/400)|0;var Amq=Dh-(AzJ*400);var Ve=(((((
153*(K4+((K4>2)?-3:9)))+2)/5)|0)+d)-1;var Ao8=(((Amq*365)+((Amq/4)|0))-((Amq/100
)|0))+Ve;var Qm=((AzJ*146097)+Ao8)-719468;return(((Qm*86400)+(this.AjU*3600))+(this.
Av5*60))+this.AUH;},AFS:function(E){var B;E+=62162035200;if(E<0)E=0;var Vs=Math.
trunc(E/86400)|0;var AzJ=(((Vs>=0)?Vs:Vs-146096)/146097)|0;var Ao8=Vs-(AzJ*146097
);var Amq=((((Ao8-((Ao8/1460)|0))+((Ao8/36524)|0))-((Ao8/146096)|0))/365)|0;var Dh=
Amq+(AzJ*400);var Ve=Ao8-(((365*Amq)+((Amq/4)|0))-((Amq/100)|0));var A21=(((5*Ve
)+2)/153)|0;var d=(Ve-((((153*A21)+2)/5)|0))+1;var K4=A21+((A21<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dh+((
K4<=2)?1:0);this.Us(K4);this.Lq(d);this.AnB(BI+((BI<0)?24:0));this.AnE(O+((O<0)?
60:0));this.AnH(s+((s<0)?60:0));},Zo:function(){if(this.Hk===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hk===4)||(this.Hk===6))||(this.Hk===9))||(this.Hk===11))return 30;else return 31;
},BlX:function(){var B;var Ve=this.AbY()-1;var AtP=(6+this.Awf())%7;var Ao_=((371+
AtP)-Ve)%7;if(this.Hk===12){var d=this.GL;if((d===31)&&(AtP<3))return 0;if((d===
30)&&(AtP<2))return 0;if((d===29)&&(AtP<1))return 0;}if(Ao_<=3)Ve+=Ao_;else Ve-=(
7-Ao_);if(Ve<0){var d=this.GL;var K4=this.Hk;this.Year--;this.Lq(31);this.Us(12);
Ve=this.AbY()-1;AtP=(6+this.Awf())%7;Ao_=((371+AtP)-Ve)%7;if(Ao_<=3)Ve+=Ao_;else
Ve-=Ao_;this.Year++;this.Lq(d);this.Us(K4);}return(Ve/7)|0;},AbY:function(){var B;
var d=this.GL;var K4=this.Hk;var Dh=this.Year;var Af9=((!!!(Dh%4)&&(!!(Dh%100)||
!!!(Dh%400)))?1:0);switch(K4){case 2:d+=31;break;case 3:d+=(59+Af9);break;case 4:
d+=(90+Af9);break;case 5:d+=(120+Af9);break;case 6:d+=(151+Af9);break;case 7:d+=(
181+Af9);break;case 8:d+=(212+Af9);break;case 9:d+=(243+Af9);break;case 10:d+=(273+
Af9);break;case 11:d+=(304+Af9);break;case 12:d+=(334+Af9);break;default:;}return d;
},Awf:function(){var B;var d=this.GL;var K4=this.Hk+((this.Hk>2)?-2:10);var Dh=this.
Year-((this.Hk<=2)?1:0);var B3=(Dh/100)|0;Dh%=100;d+=((((((((26*K4)-2)/10)|0)+Dh
)+((Dh/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnH:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUH=E;},AnE:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av5=E;},AnB:function(E){if(E<0)E=0;if(E>23)E=23;this.AjU=E;},Lq:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},Us:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hk=E;},Format:function(Iv){var result=A.jV;var inx=0;while(!!(Iv.charCodeAt(inx)||
0))if((Iv.charCodeAt(inx)||0)===0x25){var AaC=1;inx=inx+1;if((Iv.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaC=0;}switch(Iv.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaC,10);break;case 0x48:result=result+A.abl(this.AjU,2*AaC,10);break;
case 0x49:if(!(this.AjU%12))result=result+Aad;else result=result+A.abl(this.AjU%
12,2*AaC,10);break;case 0x6D:result=result+A.abl(this.Hk,2*AaC,10);break;case 0x4D:
result=result+A.abl(this.Av5,2*AaC,10);break;case 0x70:if(this.AjU<12)result=result+
A.aci.Bhf;else result=result+A.aci.Bol;break;case 0x53:result=result+A.abl(this.
AUH,2*AaC,10);break;case 0x77:result=result+A.abl(this.Awf(),AaC,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaC,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaC,10);break;case 0x25:result=result+Xe;break;case 0x6A:result=result+
A.abl(this.AbY(),3*AaC,10);break;case 0x57:result=result+A.abl(this.BlX(),2*AaC,
10);break;case 0x61:result=result+this.BdB(this.Awf(),true);break;case 0x41:result=
result+this.BdB(this.Awf(),false);break;case 0x62:result=result+this.BdD(this.Hk
,true);break;case 0x42:result=result+this.BdD(this.Hk,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iv.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac7,AfL,Bxn,BxE,BxV,Byb){this.Year=Ac7;this.
Us(AfL);this.Lq(Bxn);this.AnB(BxE);this.AnE(BxV);this.AnH(Byb);return this;},Initialize:
function(Ah$){this.AFS(Ah$);return this;},Bij:function(Ah$){if(!Ah$)return A._NewObject(
C.An5,0).Initialize(this.JS());return A._NewObject(C.An5,0).Initialize(this.JS()-
Ah$.JS());},BpC:function(Ay4){if(!Ay4)return this;return A._NewObject(C.Bs,0).Initialize(
this.JS()-Ay4.JS());},J:function(Ay4){if(!Ay4)return this;return A._NewObject(C.
Bs,0).Initialize(this.JS()+Ay4.JS());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An5={AGB:0,AEk:0,ADy:0,Km:0,JS:function(
){return(((this.Km*86400)+(this.ADy*3600))+(this.AEk*60))+this.AGB;},AFS:function(
E){var AK8=1;this.Km=Math.trunc(E/86400)|0;if(E<0){E=-E;AK8=-1;}this.ADy=AK8*(Math.
trunc(E/3600)%24|0);this.AEk=AK8*(Math.trunc(E/60)%60|0);this.AGB=AK8*(E%60|0);}
,Initialize2:function(Bxo,BxF,BxW,Bye){this.Km=Bxo;this.ADy=BxF;this.AEk=BxW;this.
AGB=Bye;return this;},Initialize:function(Ah$){this.AFS(Ah$);return this;},_Init:
function(aArg){this.__proto__=C.An5;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$R={As:null,Ph:null,Trigger:function(AoD,A1p){var Pm=A._NewObject(C.AVc,0);
Pm.Aus=this;Pm.As=AoD;this.Ph.A$s(Pm,A1p);},_Init:function(aArg){this.__proto__=
C.A$R;this.Ph=A._GetAutoObject(C.AxN);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ph)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$S={JM:null,Event:null,ASu:null,At7:function(G){var B;if(
!this.Event)return;this.JM=this.Event.As;(B=this.ASu)?B[1].call(B[0],this):null;
this.JM=null;},Bmz:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At7],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At7],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$S;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGF={Dt:0x1,BDn:0x2,BEw:0x4,BGt:0x8,Bw:0x10,H9:0x20
,BEx:0x40,BE_:0x80,BEs:0x100,BEO:0x200,BEg:0x400,BFN:0x800,Bl:0x1000,BGC:0x2000,
BFv:0x4000,BFw:0x8000,Abi:0x10000,BFu:0x20000,BF0:0x40000,BD9:0x80000,BFE:0x100000
,BD3:0x200000};C.PO={BFP:0x1,BFQ:0x2,BDj:0x4,BDk:0x8,BDl:0x10,BDi:0x20};C.Ag1={None:
0,BGp:1,BDG:2,BET:3,BFT:4,BGq:5,BGr:6,BDH:7,BDI:8,BEV:9,BEU:10,BFV:11,BFU:12};C.
Au6={None:0,BGn:1,Left:2,BDE:3,ZS:4,A5F:5,BGo:6,Right:7,BDF:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BFR={BGL:0x1,BGI:0x2,BGJ:0x4,BGK:
0x8,BEX:0x10,BEz:0x20};
C._Init=function(){C.Akh.__proto__=C.Cj;C.ZD.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARB.__proto__=
C.Event;C.Au1.__proto__=C.Event;C.Aef.__proto__=C.Event;C.AqH.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CM.__proto__=C.P;C.Dz.__proto__=C.P;C.Bn.__proto__=C.ZD;C.H_.
__proto__=C.Eu;C.AD$.__proto__=C.Ark;C.AEa.__proto__=C.Ark;C.AVc.__proto__=C.AkZ;
};C._ReInit=function(){var B;if((B=C.AxN._this))B._ReInit(),C.AxN._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxN._this)&&(B._cycle!=D))B._Done(C.AxN._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */