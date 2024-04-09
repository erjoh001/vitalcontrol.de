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
var Ce=[0,0];var BD=[0,0,0,0];var E6="The view does not belong to this group";var
Hr=[1000,740];var IU="The dialog component is already presented";var Is="The dialog component is actually not presented";
var O4="No fader to perform the fade-in/out operation";var P_="Trying to use the same fader twice";
var P$="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Ff="View is not in this group";var L3="Sibling view does not belong to the group";
var Qa="No view to remove";var J3="No view to add";var Ob="View already in a group";
var Qb="Recursive invalidate during active update cycle.";var MJ=[-8,-8,9,9];var
S_="No group to end the modal state.";var US="The group is not modal.";var Z3="No group to obtain the modal state.";
var W5="The group serves already as the \'virtual keyboard\'.";var It="The group is already modal.";
var UT="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z4="The method SwitchToDialog() is not available in Core::VerticalList.";
var W6="The method DismissDialog() is not available in Core::VerticalList.";var Z5=
"The method PresentDialog() is not available in Core::VerticalList.";var W7="The method FadeGroup() is not available in Core::VerticalList.";
var Z6="The method RestackBehind() is not available in Core::VerticalList.";var Z7=
"The method RestackTop() is not available in Core::VerticalList.";var UU="The method Restack() is not available in Core::VerticalList.";
var W8="The method Remove() is not available in Core::VerticalList.";var O5="The method AddBehind() is not available in Core::VerticalList.";
var Z8="The method Add() is not available in Core::VerticalList.";var O6="The Slide Touch Handler:";
var Rn="is already connected with a view.";var W9="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W_=[0,0,170,120];var UV="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Z9="The method DismissDialog() is not available in Core::HorizontalList.";var
Z_="The method PresentDialog() is not available in Core::HorizontalList.";var W$=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xa="The method RestackBehind() is not available in Core::HorizontalList.";
var S$="The method RestackTop() is not available in Core::HorizontalList.";var UW=
"The method Restack() is not available in Core::HorizontalList.";var UX="The method Remove() is not available in Core::HorizontalList.";
var AcM="The method AddBehind() is not available in Core::HorizontalList.";var Ta=
"The method Add() is not available in Core::HorizontalList.";var Z$=[0,0,1,1];var
AfB="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aaa="Trying to cancel a task not belonging to this queue!";var Xb="Trying to enqueue a task twice!";
var Aab="12";var Xc="%";
C.Cj={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,J1:0,PO:0x14,AtY:function(BG,Ah9){}
,Ar6:function(E){if(this.J1===E)return;this.J1=E;if(!!this.Ab){var Ai6=this.Ah;var
Hc=0;while(!!Ai6&&(E>Ai6.J1)){Ai6=Ai6.Ah;Hc=Hc+1;}Ai6=this.AJ;while(!!Ai6&&(E<Ai6.
J1)){Ai6=Ai6.AJ;Hc=Hc-1;}if(!!Hc)this.Ab.JZ(this,Hc);}},AZ:function(E){var B;var
Hc=E^this.PO;if(!Hc)return;this.PO=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JJ],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.ND.U=this.Ev.
ND.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},Im:function(
){var B0=this.Ab;while(!!B0){var IE=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IE)return IE;
B0=B0.Ab;}return null;},Ko:function(CY,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G4:function(CN){return null;},Yh:function(Db,BF,Oe,Aah
,Ac6,Ac5){return null;},AuJ:function(Db){return Db;},AuT:function(BG,MO){return Ce;
},Ank:function(aOffset,Atu){},GetExtent:function(){return BD;},Cr:function(Rt,U6
){var B;if(((this.U&0x200)===0x200))Rt=Rt&~0x400;var A25=(this.U&~U6)|Rt;var Xx=
A25^this.U;this.U=A25;if(!!this.Ab&&!!(Xx&0x14)){var Bdp=((this.U&0x14)===0x14);
if(Bdp&&!this.Ab.AV)this.Ab.Bb(this);if(!Bdp&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACR(this,0x14));}if(!!this.Ab&&!!(Xx&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A25&0x400)===0x400))&&((Xx&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}if(!!this.Ab&&((Xx&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JJ],this);}if(((((Xx&0x100000)===0x100000)&&((U6&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cr(0x0,0x10);if(((((
Xx&0x100000)===0x100000)&&((Rt&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cr(0x10,0x0);if(((((Xx&0x200000)===0x200000)&&((U6&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cr(
0x10,0x0);if((((((Xx&0x200000)===0x200000)&&((Rt&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C0!==this)))
)this.Cr(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
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
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NG[0]!==Kb[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HS&&(Qx||!HT))x1=((
x1*Kb[0])/NG[0])|0;if(!HT&&(Qx||!HS)){x2=x2-As.Bd[0];x2=((x2*Kb[0])/NG[0])|0;x2=
x2-Kb[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qx){if(HS&&!HT)x2=x1+BY;
else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NG[1]!==Kb[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HU&&(Qy||!HR))y1=((y1*Kb[1])/NG[
1])|0;if(!HR&&(Qy||!HU)){y2=y2-As.Bd[1];y2=((y2*Kb[1])/NG[1])|0;y2=y2-Kb[1];}else
y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy){if(HU&&!HR)y2=y1+BI;else if(!HU&&
HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(MO){case 3:{x1=BG[0];x2=x1+BY;}break;case 4:{x2=
BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((MO===3)||(MO===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[1];y2=BG[3];}else if(HU&&!HR){y1=
BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((MO===1)||(MO===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[0];x2=BG[2];}else if(HS&&!HT
){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((BG[2]-
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
Akh;},_className:"Core::LineView"};C.ZB={Ky:A.wf,ME:A.wf,ED:A.wf,Et:A.wf,AtY:function(
BG,Ah9){var As=A._NewObject(C.AEa,0);this.Ev=null;As.extent=this.GetExtent();As.
Bd=BG;As.ND=Ah9;As.AiT=this.Et;As.AiU=this.ED;As.AAS=this.ME;As.AAT=this.Ky;this.
Ev=As;},AuT:function(BG,MO){var B;var EW=this.PO;var As=(C.AEa.isPrototypeOf(B=this.
Ev)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var Kb=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;if(!MO){var
NG=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NG[0]!==Kb[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HS&&(
Qx||!HT))x1=((x1*Kb[0])/NG[0])|0;if(!HT&&(Qx||!HS)){x2=x2-As.Bd[0];x2=((x2*Kb[0]
)/NG[0])|0;x2=x2-Kb[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qx){if(HS&&
!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NG[1]!==Kb[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HU&&(Qy||!HR))y1=((
y1*Kb[1])/NG[1])|0;if(!HR&&(Qy||!HU)){y2=y2-As.Bd[1];y2=((y2*Kb[1])/NG[1])|0;y2=
y2-Kb[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy){if(HU&&!HR)y2=y1+BI;
else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MO){case 3:{x1=BG[0];x2=x1+BY;}break;
case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((MO===3)||(MO===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[1];y2=BG[3];}else if(
HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MO===1)||(MO===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[0];x2=BG[2];}else if(
HS&&!HT){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((
BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BI=(
y2-y1)-1;var Aiz=As.extent[0];var AiB=As.extent[1];var Af2=(As.extent[2]-Aiz)-1;
var Af1=(As.extent[3]-AiB)-1;if(!Af2)Af2=1;if(!Af1)Af1=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((As.AiT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiT[1]-AiB)*BI)/Af1)|0)];
this.ED=[x1+((((As.AiU[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiU[1]-AiB)*BI)/Af1)|0)];this.
ME=[x1+((((As.AAS[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAS[1]-AiB)*BI)/Af1)|0)];this.Ky=[
x1+((((As.AAT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAT[1]-AiB)*BI)/Af1)|0)];}else{this.
DM([x1+((((As.AiT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiT[1]-AiB)*BI)/Af1)|0)]);this.DC([
x1+((((As.AiU[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiU[1]-AiB)*BI)/Af1)|0)]);this.Kv([x1+((((
As.AAS[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAS[1]-AiB)*BI)/Af1)|0)]);this.JV([x1+((((As.
AAT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAT[1]-AiB)*BI)/Af1)|0)]);this.Ev=As;}return[BY+
1,BI+1];},Ank:function(aOffset,Atu){if(Atu){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.ME=A.abf(this.ME,aOffset);this.Ky=A.abf(this.Ky,aOffset
);}else{this.DM(A.abf(this.Et,aOffset));this.DC(A.abf(this.ED,aOffset));this.Kv(
A.abf(this.ME,aOffset));this.JV(A.abf(this.Ky,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.ME[0];var y2=this.ME[1];if((((this.Ky[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.Ky[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.ME[0]<x1)x1=
this.ME[0];if(this.Ky[0]<x1)x1=this.Ky[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
ME[1]<y1)y1=this.ME[1];if(this.Ky[1]<y1)y1=this.Ky[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.Ky[0]>x2)x2=this.Ky[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.Ky[1]>y2)y2=this.Ky[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JV:function(E){var B;if(A.aaX(E,this.Ky))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Ky=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},Kv:function(E){var B;if(A.aaX(E,
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
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},ARo:function(K0){var HC=A.abi(4,
A.wf,null);var O=0;var If=3;var A2y=false;var A2z=false;HC.Set(0,this.Et);HC.Set(
1,this.ED);HC.Set(2,this.ME);HC.Set(3,this.Ky);while(O<4){var Bg9=HC.Get(O)[0];var
ALy=HC.Get(O)[1];var BC6=HC.Get(If)[0];var A4P=HC.Get(If)[1];if(((ALy>K0[1])!==(
A4P>K0[1]))||((ALy<K0[1])!==(A4P<K0[1]))){var Ep=((((BC6-Bg9)*(K0[1]-ALy))/(A4P-
ALy))|0)+Bg9;if(K0[0]>Ep)A2y=!A2y;if(K0[0]<Ep)A2z=!A2z;}If=O;O=O+1;}return A2y||
A2z;},BjD:function(){return((((this.Et[0]===this.Ky[0])&&(this.ED[0]===this.ME[0
]))&&(this.Et[1]===this.ED[1]))&&(this.ME[1]===this.Ky[1]))||((((this.Et[0]===this.
ED[0])&&(this.ME[0]===this.Ky[0]))&&(this.Et[1]===this.Ky[1]))&&(this.ED[1]===this.
ME[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZB;},
_className:"Core::QuadView"};C.Eu={M:A.wg,AtY:function(BG,Ah9){var As=A._NewObject(
C.Ark,0);As.extent=this.M;As.Bd=BG;As.ND=Ah9;this.Ev=As;},AuT:function(BG,MO){var
B;var EW=this.PO;var As=this.Ev;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var Kb=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=
y2-y1;if(!MO){var NG=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NG[0]!==Kb[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qx=((EW&0x1
)===0x1);if(!HS&&(Qx||!HT))x1=((x1*Kb[0])/NG[0])|0;if(!HT&&(Qx||!HS)){x2=x2-As.Bd[
0];x2=((x2*Kb[0])/NG[0])|0;x2=x2-Kb[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qx){if(HS&&!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NG[1]!==Kb[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(
!HU&&(Qy||!HR))y1=((y1*Kb[1])/NG[1])|0;if(!HR&&(Qy||!HU)){y2=y2-As.Bd[1];y2=((y2
*Kb[1])/NG[1])|0;y2=y2-Kb[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy
){if(HU&&!HR)y2=y1+BI;else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MO){case 3:{x1=
BG[0];x2=x1+BY;}break;case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((MO===3)||(MO===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[
1];y2=BG[3];}else if(HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MO===1)||(MO===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[
0];x2=BG[2];}else if(HS&&!HT){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-
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
,Hd:null,Xy:null,ApQ:null,AV:null,G9:255,AzK:0,AzN:0,AzM:0,AzL:0,Init:function(aArg
){this.Am();},Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(CY.C0===this))this.Bde(CY,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FG.Update();CY.A50(aClip,this.FG,0,A.abh(this.M,aOffset),Ce,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzL,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzN);Az=A.abN(
Az,Az[2]+this.AzM);Az=[].concat(Az.slice(0,3),Az[3]+this.AzK);if(((this.U&0x80000
)===0x80000)){var Ap3=BD;var X;for(X=this.B7;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap3=
A.wC(Ap3,X.GetClipping());Az=A.wC(Az,A.abh(Ap3,this.M.slice(0,2)));}return Az;},
Yh:function(Db,BF,Oe,Aah,Ac6,Ac5){var B;var X=this.B8;var Apk=null;var AE=BD;var
Kc=null;var A2U=!!this.Xy&&(!!this.Xy.FQ||!!this.Xy.B7);if(((B=A.lb(Db,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Db=A.abg(Db,this.M.slice(0,2));if(!!Ac6){X=Ac6;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kc){Kc=X.
AJ;while(!!Kc&&!((Kc.U&0x200)===0x200))Kc=Kc.AJ;if(!!Kc)AE=A.lb(Db,Kc.GetExtent(
));else AE=BD;}if(Kc===X){Kc=null;AE=BD;}if((!!Aah&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C0===X)&&!A2U))
)){var extent=X.GetExtent();var AJV=Aah;var Ao6=null;if(AJV===X)AJV=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao6=X.Yh(AE
,BF,Oe,AJV,Ac6,Ac5);}else if(!(((B=A.lb(extent,Db))[0]>=B[2])||(B[1]>=B[3]))||(Aah===
X))Ao6=X.Yh(Db,BF,Oe,AJV,Ac6,Ac5);X=X.AJ;if(!!Ao6){if(!Apk||((Ao6.Au4<Apk.Au4)&&(
Ao6.Au4>=0)))Apk=Ao6;if(!Ao6.Au4)X=null;}}else X=X.AJ;Ac6=null;}return Apk;},AuJ:
function(Db){var B;var F;var X=this.B7;var LB=BD;var AAM=true;var result=(Db=F=A.
abg(Db,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At_=(C.Y.isPrototypeOf(
X)?X:null);LB=A.lb(Db,At_.M);AAM=((At_.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAM){var AE=A.lb(X.GetClipping(),LB);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuJ(AE));}}else{var AE=A.lb(X.GetClipping(),
Db);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuJ(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cr:function(Rt,U6){var B;
var To=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((U6&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Eu.Cr.call(this,Rt,U6);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rt&0x80000)===0x80000))&&!((To&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xx=this.U^To;if(!!this.AV&&((Xx&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cr(0x40,0x0);else this.AV.Cr(0x0
,0x40);}if(!!this.Hd&&((Xx&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C0.
U&0x14)===0x14))this.Hd.C0.Cr(0x40,0x0);else this.Hd.C0.Cr(0x0,0x40);}if(((Xx&0x10
)===0x10)){var X;for(X=this.B7;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C0===X)))X.Cr(Rt&0x10,U6&
0x10);}if(!!Xx){this.U=this.U|0x8000;A.pe([this,this.ABr],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al0=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKz=[
E[2]-E[0],E[3]-E[1]];var ApZ=!A.aaX(Al0,AKz);if(ApZ&&!!this.FG){this.FG.ArQ(AKz);
A.we(this,0);A.we(this.FG,0);}C.Eu.H.call(this,E);if((ApZ&&(Al0[0]>0))&&(Al0[1]>
0)){var Bd=[].concat(Ce,Al0);var X=this.B7;while(!!X){if((!X.Ev&&(X.PO!==0x14))&&
!((X.U&0x400)===0x400))X.AtY(Bd,null);X=X.Ah;}}if(ApZ){this.U=this.U|0x5000;A.pe([
this,this.ABr],this);}},A32:function(CN){var Bd$=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKr;if(!Bd$)return null;while(!!D5&&(!D5.Bw||!D5.G4(Bd$)))D5=D5.
Ah;return D5;},BCQ:function(G){if(!!this.FG){this.FG.C0=this;var AE=A.abg(this.AuJ(
A.abh(this.FG.QO,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Avm(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bde(this.FG,AE,Ce,255,true);this.FG.
C0=null;}},Bde:function(CY,aClip,aOffset,Ck,aBlend){var B;var X=this.B7;var LB=BD;
var AAM=true;this.BiA(CY,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At_=(C.Y.isPrototypeOf(X)?X:null);AAM=((At_.U&0x1)===0x1);LB=aClip;if(!((
At_.U&0x80000)===0x80000))LB=A.lb(LB,A.abh(At_.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAM){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LB
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Ko(CY,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Ko(CY,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.BiD(CY,aClip,aOffset,Ck,aBlend);},Bf8:
function(){var B;var A2r=((this.U&0x1000)===0x1000);var AiG=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aaq=false;var Adn=BD;var K2=BD;var Aar=Ce;var AtU=0;var AtV=0;
var AtT=0;var Qq=0;var X=this.B8;var Kc=null;var AlS=null;while(!!X){if(((X.U&0x800
)===0x800)){Aaq=true;X.U=X.U&~0x800;}if(Aaq&&((X.U&0x200)===0x200)){Aaq=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag1)X.U=X.U|0x1000;}X=X.AJ;}Aaq=false;X=this.B7;
if(A2r){this.U=this.U&~0x1000;A2r=!((AiG[0]>=AiG[2])||(AiG[1]>=AiG[3]));}this.U=
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
)){if(!!X.Ev&&(X.Ev.ND!==Kc))X.Ev=null;if((!X.Ev&&Aaq)&&((X.PO!==0x14)||!!Qq))X.
AtY(K2,Kc);}if(!!X.Ev){if(A2r&&!((X.U&0x400)===0x400))X.AuT(AiG,0);if(Aaq&&((X.U&
0x400)===0x400)){var C5=X.AuT(A.abh(K2,Aar),Qq);if(((X.U&0x1)===0x1)){var Bq=Ce;
switch(Qq){case 3:Bq=[C5[0]+AtU,Bq[1]];break;case 4:Bq=[-C5[0]-AtU,Bq[1]];break;
case 1:Bq=[Bq[0],C5[1]+AtV];break;case 2:Bq=[Bq[0],-C5[1]-AtV];break;default:;}Aar=
A.abf(Aar,Bq);}}}if(((X.U&0x200)===0x200)){if(Aaq)A.pe(Kc.Em,Kc);Aaq=((X.U&0x1000
)===0x1000);Kc=(C.Y.isPrototypeOf(X)?X:null);if(Aaq){X.U=X.U&~0x1000;AtT=Kc.Ag1;
Qq=AtT;Adn=A.abh(Kc.M,Kc.Br);K2=Adn;Aar=Ce;AtU=Kc.Space+Kc.AU5;AtV=Kc.Space;Aaq=
!((Adn[0]>=Adn[2])||(Adn[1]>=Adn[3]));AlS=null;switch(AtT){case 9:case 10:Qq=3;break;
case 11:case 12:Qq=4;break;case 5:case 6:Qq=1;break;case 7:case 8:Qq=2;break;default:;
}}if(Aaq)this.Bj(Kc.M);}if(X===AlS){switch(AtT){case 9:case 11:Aar=[0,(Aar[1]+(K2[
3]-K2[1]))+AtV];break;case 10:case 12:Aar=[0,(Aar[1]-(K2[3]-K2[1]))-AtV];break;case
5:case 7:Aar=[(Aar[0]+(K2[2]-K2[0]))+AtU,0];break;case 6:case 8:Aar=[(Aar[0]-(K2[
2]-K2[0]))-AtU,0];break;default:;}AlS=null;}X=X.Ah;}if(Aaq)A.pe(Kc.Em,Kc);this.U=
this.U&~0x2000;this.Bl([AiG[2]-AiG[0],AiG[3]-AiG[1]]);},JJ:function(G){A.pe([this
,this.ABr],this);},ABr:function(G){var B;var BCY=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bf8();}if(((this.U&0x8000)===
0x8000)||BCY){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E6);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cr(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cr(0x60,0x0);else E.Cr(0x20
,0x0);}},Bbn:function(Aq){this.Bb(Aq);},ASC:function(){return!!this.FG;},ArJ:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AEy=null;this.FG.ArQ(Ce);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArQ([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AEy=[this,this.BCQ];}A.we(this,0);},A8J:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cr(0x100000,0x0);else this.Cr(0x0
,0x100000);},C3:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0s:
function(Aq){this.C3(Aq);},Aj:function(E){if(E)this.Cr(0x400,0x0);else this.Cr(0x0
,0x400);},Bl9:function(E){if(E)this.Cr(0x2,0x0);else this.Cr(0x0,0x2);},Fq:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},ExtendClipping:function(AoG,AoH,AoI,AoF){var B;var Azc=this.M;var RA=
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
0xFF;}},BiD:function(CY,aClip,aOffset,Ck,aBlend){},BiA:function(CY,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hr;},GetMinimalSize:function(){return Ce;
},AVa:function(Iu,Od,Xi,Td,Te,Ah_,O$,Rs,Lz,Lx,Ly){var B;if(!this.Hd){this.AkM(Iu
,Od,Xi,Td,Te,null,null,Lz,Lx,Ly);return;}var AlZ=this.Hd;var JG=AlZ.Ah;if(((Iu.U&
0x10000)===0x10000)&&(this.Hd.C0!==Iu))throw new Error(IU);var Adt=A._NewObject(
C.AN1,0);var RC=AlZ.RC;var RL=null;var Me=null;if(!!JG){RL=JG.RL;Me=JG.Me;}if(!!
JG&&!!AlZ.ApP)RL=AlZ.ApP;if(!!JG&&!!O$)Me=O$;if(!!Ah_)RC=Ah_;if(!Od)Od=A._GetAutoObject(
A.acl.AsE);if(!Xi)Xi=Od;if(!Te)Te=Td;if(!Td)Td=Te;Adt.RC=Xi;Adt.Me=Td;Adt.RL=Te;
Adt.ApP=Rs;Adt.C0=Iu;Adt.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Adt;if(this.AV===
Iu)this.Bb(null);AlZ.C0.Cr(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===
0x4))Iu.Cr(0x10040,0x0);else Iu.Cr(0x10000,0x0);if(!!Me){this.NS(JG.C0,Me.Aec(),
null,null,Ly);this.NS(AlZ.C0,RC.Sb(),null,null,true);this.NS(Adt.C0,Od.Sc(),Lz,Lx
,true);}else if(!!RL){this.NS(JG.C0,RL.Aed(),null,null,Ly);this.NS(AlZ.C0,RC.Sb(
),null,null,true);this.NS(Adt.C0,Od.Sc(),Lz,Lx,true);}else if(!!RC){this.NS(AlZ.
C0,RC.Sb(),null,null,Ly);this.NS(Adt.C0,Od.Sc(),Lz,Lx,true);}else this.NS(Adt.C0
,Od.Sc(),Lz,Lx,Ly);},AqF:function(Iu,Ah_,O$,Rs,Lz,Lx,Ly){var B;if(!this.Hd)return;
if(!Iu)return;var KD=this.Hd;var JG=this.Hd.Ah;var ApV=null;while((!!KD&&(KD.C0!==
Iu))&&!!KD.Ah){ApV=KD;KD=JG;JG=KD.Ah;}if(!KD||(KD.C0!==Iu))throw new Error(Is);if(
!ApV){this.Hd=JG;KD.Ah=null;}else{ApV.Ah=JG;KD.Ah=null;}KD.C0.Cr(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JG)&&!ApV)&&((JG.C0.U&0x200000)===0x200000))JG.C0.Cr(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JG)&&!ApV)&&((JG.C0.U&0x4)===0x4))JG.C0.Cr(
0x40,0x0);var RC=KD.RC;var RL=null;var Me=null;if(!!JG)RL=JG.RL;if(!!JG&&!!KD.ApP
)RL=KD.ApP;if(!!JG&&!!Rs)RL=Rs;if(!!ApV&&!!JG)Me=JG.Me;if((!!ApV&&!!JG)&&!!O$)Me=
O$;if(!!Ah_)RC=Ah_;if(!!Me){this.NS(JG.C0,Me.Aec(),null,null,Ly);this.NS(KD.C0,RC.
Sb(),Lz,Lx,true);}else if(!!RL){this.NS(JG.C0,RL.Aed(),null,null,Ly);this.NS(KD.
C0,RC.Sb(),Lz,Lx,true);}else this.NS(KD.C0,RC.Sb(),Lz,Lx,Ly);},AkM:function(Iu,Od
,Xi,Td,Te,O$,Rs,Lz,Lx,Ly){var B;if(!Iu)return;if(!!this.Hd&&(this.Hd.C0===Iu)){this.
AVa(Iu,Od,Xi,Td,Te,null,O$,Rs,Lz,Lx,Ly);return;}if(((Iu.U&0x10000)===0x10000))throw new
Error(IU);var KD=A._NewObject(C.AN1,0);if(!!this.Hd&&!this.Hd.Me){if(!Rs)Rs=O$;if(
!O$)O$=Rs;}var Me=null;if(!!this.Hd)Me=this.Hd.Me;if(!!this.Hd&&!!O$)Me=O$;if(!Od
)Od=A._GetAutoObject(A.acl.AsE);if(!Xi)Xi=Od;if(!Te)Te=Td;if(!Td)Td=Te;KD.RC=Xi;
KD.Me=Td;KD.RL=Te;KD.ApP=Rs;if(this.AV===Iu)this.Bb(null);if(!!this.Hd&&((this.Hd.
C0.U&0x200000)===0x200000))this.Hd.C0.Cr(0x0,0x10);if(!!this.Hd)this.Hd.C0.Cr(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===0x4))Iu.Cr(0x10040,0x0);else Iu.
Cr(0x10000,0x0);KD.C0=Iu;KD.Ah=this.Hd;this.Hd=KD;if(!!Me){this.NS(this.Hd.Ah.C0
,Me.Aec(),null,null,Ly);this.NS(Iu,Od.Sc(),Lz,Lx,true);}else this.NS(Iu,Od.Sc(),
Lz,Lx,Ly);},A68:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7K:function(
K0){var tmp=this;while(!!tmp){K0=A.abe(K0,tmp.M.slice(0,2));tmp=tmp.Ab;}return K0;
},Bjz:function(K0){var tmp=this;while(!!tmp){K0=A.abf(K0,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K0;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A2U=!!this.Xy&&(!!this.Xy.FQ||!!this.Xy.B7);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.Hd&&!A2U)GD=this.Hd.C0.DispatchEvent(CN);if(!GD&&!!B0)
GD=B0.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G4(CN);if(!GD)GD=this.G4(CN);if(!GD
)GD=this.A32(CN);return GD;},BroadcastEventAtPosition:function(CN,HA,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HA)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.
BroadcastEventAtPosition(CN,A.abe(HA,B0.M.slice(0,2)),aFilter);else GD=X.G4(CN);
}X=X.AJ;}if(!GD)GD=this.G4(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.BroadcastEvent(CN,aFilter
);else GD=X.G4(CN);}X=X.AJ;}if(!GD)GD=this.G4(CN);if(!GD)GD=this.A32(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},BjQ:function(){this.U=this.U|0x4000;A.pe([
this,this.ABr],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABr],this
);},Bj:function(Db){var B;var B0=this;while(!!B0&&!((Db[0]>=Db[2])||(Db[1]>=Db[3
]))){var Aan=B0.FG;if(!B0.Ab&&(B0!==this)){B0.Bj(Db);return;}if(!!Aan){var BAB=Aan.
QO;Aan.QO=A.wC(Aan.QO,Db);if(!A.aaY(BAB,Aan.QO)){A.we(B0,0);A.we(Aan,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Db=A.abh(Db,Az.slice(0,2));if(!!B0.FG||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FG){Az=[].concat(Az[0]-B0.AzL,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzN);Az=A.abN(Az,Az[2]+B0.AzM);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzK);}Db=A.lb(Db,Az);}B0=B0.Ab;}},QJ:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agk=A.aaI(Ag.GetExtent());var X=Ag;var A1C=null;var
BcT=0;var IZ=0x10000;var AKS;if(((aFilter&0x10000)===0x10000))IZ=0x0;var top=((GA===
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
Rv[0];Jm=(Jm*AKq)*AKq;if((Jm<BcT)||!A1C){BcT=Jm;A1C=X;}}}}return A1C;},AqM:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;var IZ=0x10000;
if(((aFilter&0x10000)===0x10000))IZ=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TP:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B7;
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
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NS:function(KC,FP,Lz,Lx
,Ly){var B;if(!KC)return;if(!FP)throw new Error(O4);if((!!FP.P||!!FP.Ab)||!!FP.Pm
)throw new Error(P_);if(!!KC.Ab&&(KC.Ab!==this))throw new Error(P$);if(!this.Xy)
this.Xy=A._NewObject(C.AVf,0);FP.Ab=this;FP.P=KC;FP.AKC=Lx;FP.A3k=Lz;if(!!KC.ApQ
)KC.ApQ.Pm.BoN(KC.ApQ);KC.ApQ=FP;KC.U=KC.U|0x20000;if((Ly&&!!this.Xy.B8)&&!this.
Xy.B8.ARk())(A.acl.ACM.isPrototypeOf(B=this.Xy.B8)?B:null).A44(FP);else{var Pm=A.
_NewObject(A.acl.ACM,0);Pm.A44(FP);this.Xy.A$r(Pm,false);}},AhE:function(Ag,J7){
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
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZD:function(Ag){var B;if(!Ag)throw new
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
B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HO:function(Ag){var B;if(
!Ag)throw new Error(Qa);if(Ag.Ab!==this)throw new Error(Ff);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JJ],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
ACR(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag
)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cr(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AMc:function(Ag,J7
){var B;if(!Ag)throw new Error(J3);if(!!Ag.Ab)throw new Error(Ob);if(!!J7&&(J7.Ab
!==this))throw new Error(L3);var GC=null;var Iw=this.B8;var LP=Ag.J1;if(!!J7){GC=
J7;Iw=J7.AJ;}if(!!GC&&(LP>GC.J1))LP=GC.J1;if(!!Iw&&(LP<Iw.J1))LP=Iw.J1;if(LP!==Ag.
J1){Ag.Ab=null;Ag.Ar6(LP);Ag.Ab=this;}if(!J7){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.
B8;this.B8=Ag;}else{Ag.Ah=J7;Ag.AJ=J7.AJ;J7.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B7===J7)this.B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOS()===Ag))Ag.Cr(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cr(0x10,0x0);
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
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOS()===Ag))Ag.Cr(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cr(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}},A8L:function(){return this.
AV;},Awo:function(){return this.G9;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKr)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RI:null,JF:null,Fv:A.abi(10,null
,null),AtG:null,Air:null,ABt:0,Ic:0,Ma:A.abi(10,0,null),AJR:A.abi(10,A.wg,null),
Xw:A.abi(10,0,null),Af0:A.abi(10,A.wf,null),AtL:A.abi(10,0,null),Aiq:A.abi(10,A.
wf,null),Xv:A.abi(10,A.wf,null),RB:A.abi(10,A.wf,null),Ade:A.abi(10,A.wf,null),EO:
0,AKd:0,AKc:0,Or:A.abi(4,0,null),Ki:A.abi(4,A.wg,null),Kf:0,Az$:0,At0:0,AzW:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Im:function(){return this;
},Ko:function(CY,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CY.Avm(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Ko.call(this,CY,aClip
,aOffset,Ck,aBlend);},Cr:function(Rt,U6){var B;C.P.Cr.call(this,Rt,U6);if(!this.
Ab&&(((Rt&0x1)===0x1)||((U6&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rt&0x2)===0x2)||((U6&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArJ:
function(E){var B;var BAz=this.FG;C.P.ArJ.call(this,E);if(((BAz!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},C3:function(
E){var B;var BO=this.G9;C.P.C3.call(this,E);if(((BO!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvW=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=null;if(!!this.
JF){GD=this.JF.C0.DispatchEvent(CN);if(!GD)GD=this.G4(CN);if(!GD)GD=this.A32(CN);
this.Ic=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ic=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvW=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ic=0;return GD;},Bj:function(Db){var
B;if(this.ABt>0)throw new Error(Qb);if(!!this.FG&&!this.Ab){if(((B=this.FG.QO)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QO=A.wC(this.FG.QO
,Db);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Db=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Db);return;}Db=A.
lb(A.abh(Db,this.M.slice(0,2)),this.M);if((Db[0]>=Db[2])||(Db[1]>=Db[3]))return;
var O;for(O=0;O<this.Kf;O=O+1)if(!(((B=A.lb(this.Ki.Get(O),Db))[0]>=B[2])||(B[1]>=
B[3]))){this.Ki.Set(O,A.wC(this.Ki.Get(O),Db));this.Or.Set(O,A.aaH(this.Ki.Get(O
)));return;}if(this.Kf<3){this.Ki.Set(this.Kf,Db);this.Or.Set(this.Kf,A.aaH(Db));
this.Kf=this.Kf+1;return;}var If;var RH;var Az_=0;var AAb=0;var BcS=2147483647;this.
Ki.Set(this.Kf,Db);this.Or.Set(this.Kf,A.aaH(Db));for(If=0;If<=this.Kf;If=If+1)for(
RH=If+1;RH<=this.Kf;RH=RH+1){var ALl=A.aaH(A.wC(this.Ki.Get(If),this.Ki.Get(RH))
);var BfI=((ALl<<8)/(this.Or.Get(If)+this.Or.Get(RH)))|0;if(BfI<BcS){BcS=BfI;Az_=
If;AAb=RH;}}this.Ki.Set(Az_,A.wC(this.Ki.Get(Az_),this.Ki.Get(AAb)));this.Or.Set(
Az_,A.aaH(this.Ki.Get(Az_)));if(AAb!==this.Kf){this.Ki.Set(AAb,this.Ki.Get(this.
Kf));this.Or.Set(AAb,this.Or.Get(this.Kf));}},Bzb:function(){var LJ=A._NewObject(
C.AqH,0);LJ.AvW=!!this.Ic;if(!!this.Ic)LJ.Bs=this.Ic;return LJ;},Ao4:function(){
var LJ=A._NewObject(C.Aef,0);LJ.AvW=!!this.Ic;if(!!this.Ic)LJ.Bs=this.Ic;return LJ;
},AtK:function(){var LJ=A._NewObject(C.Au1,0);LJ.AvW=!!this.Ic;if(!!this.Ic)LJ.Bs=
this.Ic;return LJ;},Bzf:function(G){var O;var Apk=false;for(O=0;O<10;O=O+1)if(!!
this.Fv.Get(O)){var pos=this.RB.Get(O);var B0=this.Fv.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fv.Get(O)!==this)){
var tmp=this.Fv.Get(O);this.EO=O;this.Fv.Set(O,null);tmp.G4(this.Ao4().InitializeUp(
O,this.Aiq.Get(O),this.Af0.Get(O),this.Xw.Get(O),this.Ma.Get(O)+1,this.Xv.Get(O)
,false,this.RB.Get(O),this.Ade.Get(O)));this.BroadcastEvent(this.AtK().InitializeUp(
O,this.Ma.Get(O)+1,false,tmp,this.RB.Get(O)),0x18);}else{this.Xw.Set(O,(this.Air.
Bs-this.AtL.Get(O))|0);if(this.Xw.Get(O)<10)this.Xw.Set(O,10);this.EO=O;this.Fv.
Get(O).G4(this.Ao4().InitializeHold(O,pos,this.Af0.Get(O),this.Xw.Get(O),this.Ma.
Get(O)+1,this.Xv.Get(O),this.RB.Get(O),this.Ade.Get(O)));Apk=true;}}if(!Apk)this.
Air.Ar(false);},GetFPS:function(){var ticksCount=0;var Bdu=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKd&&(ticksCount>this.AKd))Bdu=((this.AKc*1000)/((
ticksCount-this.AKd)|0))|0;this.AKc=0;this.AKd=ticksCount;return Bdu;},Update:function(
){var B;if(!this.AtG)this.AtG=A._NewObject(A.Graphics.Canvas,0);this.AtG.ArQ([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtG.Update();return this.UpdateGE20(this.AtG);}
,UpdateGE20:function(CY){if(!this.BeginUpdate())return BD;var Agv=this.UpdateCanvas(
CY,Ce);this.EndUpdate();return Agv;},EndUpdate:function(){if(this.Kf>0){this.AKc=
this.AKc+1;this.Kf=0;}},UpdateCanvas:function(CY,aOffset){var B;var Agv=BD;var ByU=[
].concat(aOffset,A.abf(CY.FrameSize,aOffset));var O;var If=this.Kf;this.ABt=this.
ABt+1;CY.C0=this;for(O=0;(O<If)&&(O<4);O=O+1)if(this.Or.Get(O)>0){this.Ko(CY,A.abg(
this.Ki.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agv=A.wC(Agv,A.lb(ByU
,this.Ki.Get(O)));}else If=If+1;CY.C0=null;this.ABt=this.ABt-1;if(!((Agv[0]>=Agv[
2])||(Agv[1]>=Agv[3])))return A.abg(Agv,aOffset);else return Agv;},GetUpdateRegion:
function(AJb){var O;var If=this.Kf;if(AJb<0)return BD;for(O=0;(O<If)&&(O<4);O=O+
1)if(!this.Or.Get(O)){If=If+1;AJb=AJb+1;}else if(O===AJb)return this.Ki.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kf&&!A.aaY(this.Ki.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var BgM=A.abi(3,A.wg,null);var BgL=this.Kf;for(O=0;
O<BgL;O++)BgM.Set(O,this.Ki.Get(O));for(O=0;O<BgL;O++){var Bf3=A.abh(BgM.Get(O),
this.M.slice(0,2));var Bf4=this.AuJ(Bf3);if(!A.aaY(Bf3,Bf4))this.Bj(A.abg(Bf4,this.
M.slice(0,2)));}}var If;var RH;for(If=0;If<(this.Kf-1);If++)if(this.Or.Get(If)>0
)for(RH=If+1;RH<this.Kf;RH++)if(this.Or.Get(RH)>0){var ALl=A.aaH(A.wC(this.Ki.Get(
If),this.Ki.Get(RH)));if(((ALl-this.Or.Get(If))-this.Or.Get(RH))<0){this.Ki.Set(
If,A.wC(this.Ki.Get(If),this.Ki.Get(RH)));this.Or.Set(If,ALl);this.Or.Set(RH,0);
}}for(O=this.Kf-1;O>=0;O--)if(!this.Or.Get(O))this.Kf=this.Kf-1;return this.Kf;}
,DoesNeedUpdate:function(){if(this.Kf>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Ce,aSize));if(this.AzW)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A04){if(A04===this.AzW
)return false;this.AzW=A04;if(!A04){if(!!this.JF)this.JF.C0.Cr(0x0,0x40);else this.
Cr(0x0,0x40);}else if(!!this.JF)this.JF.C0.Cr(0x40,0x0);else this.Cr(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qi){this.Ic=Qi;},DriveKeyboardHitting:function(
KB,AyY,Tc){var B;var A33=!!this.RI;if(!!this.RI&&((!Tc||(this.Az$!==KB))||(this.
At0!==AyY))){var LJ=null;var X=(C.Cj.isPrototypeOf(B=this.RI)?B:null);var D5=(C.
BK.isPrototypeOf(B=this.RI)?B:null);if(!!this.Az$)LJ=A._NewObject(C.KeyEvent,0).
Initialize(this.Az$,false);if(this.At0!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
this.At0,false);if(!!D5)D5.G4(LJ);else if(!!X)X.G4(LJ);this.Az$=0;this.At0=0x00;
this.RI=null;}if(!!this.RI){var LJ=null;var X=(C.Cj.isPrototypeOf(B=this.RI)?B:null
);var D5=(C.BK.isPrototypeOf(B=this.RI)?B:null);if(!!KB)LJ=A._NewObject(C.KeyEvent
,0).Initialize(KB,true);if(this.At0!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
AyY,true);if(!!D5)D5.G4(LJ);else if(!!X)X.G4(LJ);}if(!this.RI&&Tc){if(!!KB)this.
RI=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KB,true));if(AyY!==0x00
)this.RI=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyY,true));if(
!(C.BK.isPrototypeOf(B=this.RI)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RI)?B:null)
)this.RI=null;this.Az$=KB;this.At0=AyY;A33=A33||!!this.RI;}this.Ic=0;return A33;
},DriveCursorMovement:function(Fh){return this.DriveMultiTouchMovement(this.EO,Fh
);},DriveMultiTouchMovement:function(BF,Fh){if((BF<0)||(BF>9)){this.Ic=0;return false;
}var Fx=A.abe(Fh,this.RB.Get(BF));this.RB.Set(BF,Fh);if(!this.Fv.Get(BF)||A.aaX(
Fx,Ce)){this.Ic=0;return false;}var pos=Fh;var B0=this.Fv.Get(BF).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fv.Get(BF)!==
this)){var tmp=this.Fv.Get(BF);this.EO=BF;this.Fv.Set(BF,null);tmp.G4(this.Ao4().
InitializeUp(BF,this.Aiq.Get(BF),this.Af0.Get(BF),this.Xw.Get(BF),this.Ma.Get(BF
)+1,this.Xv.Get(BF),false,this.RB.Get(BF),this.Ade.Get(BF)));this.BroadcastEvent(
this.AtK().InitializeUp(BF,this.Ma.Get(BF)+1,false,tmp,Fh),0x18);}else{this.Aiq.
Set(BF,pos);this.EO=BF;this.Fv.Get(BF).G4(this.Bzb().Initialize(BF,pos,this.Af0.
Get(BF),Fx,this.Xw.Get(BF),this.Ma.Get(BF)+1,this.Xv.Get(BF),Fh,this.Ade.Get(BF)
));}this.Ic=0;return true;},DriveCursorHitting:function(Tc,BF,Fh){return this.DriveMultiTouchHitting(
Tc,BF,Fh);},DriveMultiTouchHitting:function(Tc,BF,Fh){if((BF<0)||(BF>9)){this.Ic=
0;return false;}var ticksCount=this.Ic;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BB8=this.Ic;this.DriveMultiTouchMovement(BF,Fh);Fh=this.RB.Get(BF);
this.Ic=BB8;if(Tc)this.Ade.Set(BF,Fh);if(Tc&&!this.Fv.Get(BF)){var JE;var pos=Fh;
if(A.wa(this.AJR.Get(BF),Fh)&&((ticksCount-this.AtL.Get(BF))<=250))this.Ma.Set(BF
,this.Ma.Get(BF)+1);else this.Ma.Set(BF,0);this.AJR.Set(BF,A.abh(MJ,Fh));this.AtL.
Set(BF,ticksCount);if(!!this.JF)JE=this.Yh(A.abh(MJ,Fh),BF,this.Ma.Get(BF)+1,this.
JF.C0,null,0x0);else JE=this.Yh(A.abh(MJ,Fh),BF,this.Ma.Get(BF)+1,null,null,0x0);
if(!!JE){this.BroadcastEvent(this.AtK().InitializeDown(BF,this.Ma.Get(BF)+1,false
,JE.Cj,Fh),0x18);this.Fv.Set(BF,JE.Cj);this.Xv.Set(BF,JE.DG);}else{this.Fv.Set(BF
,null);this.Xv.Set(BF,Ce);this.Ic=0;return false;}var B0=JE.Cj.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.Af0.Set(BF,pos);this.Aiq.
Set(BF,pos);this.Xw.Set(BF,0);this.Air.Ar(true);this.EO=BF;this.Fv.Get(BF).G4(this.
Ao4().InitializeDown(BF,pos,this.Ma.Get(BF)+1,this.Xv.Get(BF),false,Fh));this.Ic=
0;return true;}if(!Tc&&!!this.Fv.Get(BF)){var pos=Fh;var B0=this.Fv.Get(BF).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aiq.
Get(BF);this.EO=BF;var tmp=this.Fv.Get(BF);this.Fv.Set(BF,null);tmp.G4(this.Ao4(
).InitializeUp(BF,pos,this.Af0.Get(BF),this.Xw.Get(BF),this.Ma.Get(BF)+1,this.Xv.
Get(BF),false,Fh,this.Ade.Get(BF)));this.BroadcastEvent(this.AtK().InitializeUp(
BF,this.Ma.Get(BF)+1,false,tmp,Fh),0x18);this.Ic=0;return true;}this.Ic=0;return false;
},AUz:function(Aaj,Bcc,Ac6,Ac5){if(Aaj===this)Aaj=null;if(!!!Aaj&&!!this.JF)Aaj=
this.JF.C0;if(!this.Fv.Get(this.EO))return;var JE;JE=this.Yh(A.abh(MJ,this.RB.Get(
this.EO)),this.EO,1,Aaj,Ac6,Ac5);if(!!JE&&(this.Fv.Get(this.EO)!==JE.Cj))this.ANR(
JE.Cj,JE.DG);if(!JE&&(this.Fv.Get(this.EO)!==Bcc))this.ANR(Bcc,Ce);},ANR:function(
Aaj,Xj){if(!this.Fv.Get(this.EO)||(this.Fv.Get(this.EO)===Aaj))return;var tmp=this.
Fv.Get(this.EO);this.Fv.Set(this.EO,null);tmp.G4(this.Ao4().InitializeUp(this.EO
,this.Aiq.Get(this.EO),this.Af0.Get(this.EO),this.Xw.Get(this.EO),this.Ma.Get(this.
EO)+1,this.Xv.Get(this.EO),true,this.RB.Get(this.EO),this.Ade.Get(this.EO)));this.
BroadcastEvent(this.AtK().InitializeUp(this.EO,this.Ma.Get(this.EO)+1,true,tmp,this.
RB.Get(this.EO)),0x18);var pos=this.RB.Get(this.EO);var B0=null;if(!!Aaj)B0=Aaj.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aaj
!==this)){this.Fv.Set(this.EO,null);return;}this.BroadcastEvent(this.AtK().InitializeDown(
this.EO,this.Ma.Get(this.EO)+1,true,Aaj,this.RB.Get(this.EO)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fv.Set(this.EO,Aaj);this.Xv.Set(
this.EO,Xj);this.Af0.Set(this.EO,pos);this.Aiq.Set(this.EO,pos);this.Ma.Set(this.
EO,0);this.Xw.Set(this.EO,0);this.AtL.Set(this.EO,ticksCount);this.Ade.Set(this.
EO,this.RB.Get(this.EO));this.Fv.Get(this.EO).G4(this.Ao4().InitializeDown(this.
EO,pos,this.Ma.Get(this.EO)+1,this.Xv.Get(this.EO),true,this.Ade.Get(this.EO)));
},AOS:function(){if(!!this.JF)return this.JF.C0;return null;},ACJ:function(KC){var
B;if(!KC)throw new Error(S_);if(!((KC.U&0x80)===0x80))throw new Error(US);if(this.
JF.C0===KC)this.JF=this.JF.Ah;else{var AzV=this.JF;while(AzV.Ah.C0!==KC)AzV=AzV.
Ah;AzV.Ah=AzV.Ah.Ah;}KC.Cr(0x0,0xD0);if(this.AzW){if(!!this.JF)this.JF.C0.Cr(0x50
,0x0);else this.Cr(0x50,0x0);}},AMY:function(KC){var B;var As=A._NewObject(C.A7W
,0);if(!KC)throw new Error(Z3);if(KC===null)throw new Error(W5);if(((KC.U&0x80)===
0x80))throw new Error(It);if(!!this.JF)this.JF.C0.Cr(0x0,0x50);else this.Cr(0x0,
0x50);As.Ah=this.JF;As.C0=KC;this.JF=As;if(this.AzW)KC.Cr(0xD0,0x0);else KC.Cr(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Air={
I:this},0);(this.Fv=[]).__proto__=C.Root.Fv;(this.Ma=[]).__proto__=C.Root.Ma;(this.
AJR=[]).__proto__=C.Root.AJR;(this.Xw=[]).__proto__=C.Root.Xw;(this.Af0=[]).__proto__=
C.Root.Af0;(this.AtL=[]).__proto__=C.Root.AtL;(this.Aiq=[]).__proto__=C.Root.Aiq;(
this.Xv=[]).__proto__=C.Root.Xv;(this.RB=[]).__proto__=C.Root.RB;(this.Ade=[]).__proto__=
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
,Initialize2:function(KB,Tc){this.CO=0;this.DQ=KB;this.Down=Tc;if((KB>=0x30)&&(KB<=
0x39))this.CO=(10+KB)-48;if((KB>=0x41)&&(KB<=0x5A))this.CO=(105+KB)-65;if((KB>=0x61
)&&(KB<=0x7A))this.CO=(105+KB)-97;if(KB===0x20)this.CO=131;if(!this.CO)switch(KB
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KB,Tc){this.CO=KB;this.
Down=Tc;this.DQ=0x00;var A1I=KB-10;var AtF=KB-105;if((A1I>=0)&&(A1I<=9))this.DQ=(
48+A1I)&0xFFFF;if((AtF>=0)&&(AtF<=25))this.DQ=(65+AtF)&0xFFFF;if(KB===131)this.DQ=
0x20;if(this.DQ===0x00)switch(KB){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},BjV:function(Bb3){switch(
Bb3){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bb3===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARC={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARC;},_className:
"Core::LanguageEvent"};C.Au1={AxO:null,LU:A.wf,N8:0,IJ:0,Down:false,NJ:false,InitializeUp:
function(BF,Oe,AoC,A1k,Aai){this.Down=false;this.IJ=BF;this.N8=Oe;this.LU=Aai;this.
AxO=A1k;this.NJ=AoC;return this;},InitializeDown:function(BF,Oe,AoC,A1k,Aai){this.
Down=true;this.IJ=BF;this.N8=Oe;this.LU=Aai;this.AxO=A1k;this.NJ=AoC;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au1;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxO)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aef={Ag3:A.wf,LU:A.wf,N8:0,Jt:
0,NU:A.wf,H0:A.wf,IJ:0,Down:false,NJ:false,InitializeHold:function(BF,All,Ay1,Ay2
,Oe,Xj,Aai,Ay0){this.Down=true;this.IJ=BF;this.H0=A.abf(All,Xj);this.NU=A.abf(Ay1
,Xj);this.Jt=Ay2;this.N8=Oe;this.LU=Aai;this.Ag3=Ay0;return this;},InitializeUp:
function(BF,All,Ay1,Ay2,Oe,Xj,AoC,Aai,Ay0){this.Down=false;this.IJ=BF;this.H0=A.
abf(All,Xj);this.NU=A.abf(Ay1,Xj);this.Jt=Ay2;this.N8=Oe;this.NJ=AoC;this.LU=Aai;
this.Ag3=Ay0;return this;},InitializeDown:function(BF,All,Oe,Xj,AoC,Aai){this.Down=
true;this.IJ=BF;this.H0=A.abf(All,Xj);this.NU=A.abf(All,Xj);this.Jt=0;this.N8=Oe;
this.NJ=AoC;this.LU=Aai;this.Ag3=Aai;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Core::CursorEvent"};C.AqH={
Ag3:A.wf,LU:A.wf,N8:0,Jt:0,DG:A.wf,NU:A.wf,H0:A.wf,IJ:0,Initialize:function(BF,All
,Ay1,aOffset,Ay2,Byf,Xj,Aai,Ay0){this.IJ=BF;this.H0=A.abf(All,Xj);this.NU=A.abf(
Ay1,Xj);this.DG=aOffset;this.Jt=Ay2;this.N8=Byf;this.LU=Aai;this.Ag3=Ay0;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqH;},_className:
"Core::DragEvent"};C.Y={BX:null,NB:null,Em:null,Br:A.wf,AU5:0,Space:0,Ag1:0,Ko:function(
CY,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap3=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap3=A.wC(Ap3,X.GetClipping());
Az=A.wC(Az,Ap3);}return Az;},Cr:function(Rt,U6){var B;var To=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U6&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Eu.Cr.call(this,Rt,U6);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rt&0x80000)===
0x80000))&&!((To&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al0=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKz=[
E[2]-E[0],E[3]-E[1]];var ApZ=!A.aaX(Al0,AKz);var Fx=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fx,Ce)&&!ApZ){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ank(Fx,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((ApZ&&(Al0[0]>0))&&(Al0[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
ND!==this))X.Ev=null;if(!X.Ev&&((X.PO!==0x14)||!!this.Ag1))X.AtY(Bd,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&ApZ){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JJ],this);}}},BfX:function(){var B;if((!this.Ag1||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A12=((this.U&0x1000)===0x1000);for(;!!X&&!A12;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A12=true;if(((X.U&0x200)===
0x200))break;}if(A12){this.U=this.U&~0x4000;this.Ab.Bf8();}},ApK:function(G){var
B;this.BX.Q=null;this.BX.Qw=null;this.BX=null;(B=this.NB)?B[1].call(B[0],this):null;
},Gb:function(E){var B;var Fx=A.abe(E,this.Br);if(A.aaX(Fx,Ce))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ank(Fx,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.Em,this);},A_H:function(E){var B;if(E<0)E=0;if(E===this.AU5)return;this.AU5=
E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JJ],this);}},BnU:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JJ],this);}},JT:function(E){var B;if(E===this.Ag1)return;
this.Ag1=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JJ],this);}},Vy:function(AcZ,E7){var AtF=this.Dc(0x1);var Rz=this.M;var
Vi=A.abe(AtF.slice(0,2),Rz.slice(0,2));var Mc=A.abe(AtF.slice(2,4),Rz.slice(2,4)
);var Bq=Ce;if((Vi[0]>0)&&(Mc[0]>Vi[0]))Bq=[Vi[0],Bq[1]];else if((Vi[0]>0)&&(Mc[
0]>0))Bq=[Mc[0],Bq[1]];if((Mc[0]<0)&&(Vi[0]<Mc[0]))Bq=[Mc[0],Bq[1]];else if((Mc[
0]<0)&&(Vi[0]<0))Bq=[Vi[0],Bq[1]];if((Vi[1]>0)&&(Mc[1]>Vi[1]))Bq=[Bq[0],Vi[1]];else
if((Vi[1]>0)&&(Mc[1]>0))Bq=[Bq[0],Mc[1]];if((Mc[1]<0)&&(Vi[1]<Mc[1]))Bq=[Bq[0],Mc[
1]];else if((Mc[1]<0)&&(Vi[1]<0))Bq=[Bq[0],Vi[1]];if(A.aaX(Bq,Ce)){(E7)?E7[1].call(
E7[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E7)?E7[
1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HN(1);this.BX.Q=[this,this.
Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qw=[this,this.
ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E7;}},HI:function(Ag,Ac3,AcZ,E7
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UT);this.BfX();var Az=Ag.GetExtent();var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac3&&
!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az))){(E7)?E7[1].call(E7[0],this
):null;return;}var Bq=Ce;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E7
)?E7[1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HN(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qw=[this
,this.ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E7;}},Bjl:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TP:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dc:function(aFilter){var B;var X=this.Ah;var AE=BD;var IZ=0x10000;this.BfX();if(((
aFilter&0x10000)===0x10000))IZ=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anv:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HB:null,BX:null,Cj:null,WQ:null,NB:null,Em:null,Hm:null,Tl:-1,Tk:0,Jp:-1,Ht:0,AiJ:
8,Om:0,Ux:0,AcJ:A.wf,G6:-1,Br:0,Gt:-1,OS:0,GO:24,AY:0,Lj:null,NR:false,At1:false
,AVa:function(Iu,Od,Xi,Td,Te,Ah_,O$,Rs,Lz,Lx,Ly){throw new Error(Z4);},AqF:function(
Iu,Ah_,O$,Rs,Lz,Lx,Ly){throw new Error(W6);},AkM:function(Iu,Od,Xi,Td,Te,O$,Rs,Lz
,Lx,Ly){throw new Error(Z5);},DispatchEvent:function(CN){var B;var result=null;if(((
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
var BgW=(B=this.M)[2]-B[0];while(!!Aa){var IA=inx;if(this.NR){if(IA<0)IA=this.AY-(-
IA%this.AY);if(IA>0)IA=IA%this.AY;}var AdH=((IA>=this.Tk)&&(IA<=this.Tl))||((inx>=
Apx)&&(inx<=Apy));var Apd=Aa.GetExtent();var Bq=A.abe(pos,Apd.slice(0,2));if(AdH
)this.Ux=this.GO;else this.Ux=Apd[3]-Apd[1];var A2I=pos[1];var A2J=pos[1]+this.Ux;
if(!A.aaX(Bq,Ce))Aa.Ank(Bq,true);if((AdH&&(A2I<BI))&&(A2J>0)){this.Cj=Aa;this.G6=
IA;this.AcJ=[BgW,this.Ux];(B=this.Hm)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Ux];}inx=this.Ht;Aa=this.B7;pos=[0,(AAP+this.Br)+this.Jn(
inx,0)];while(!!Aa){var IA=inx;if(this.NR){if(IA<0)IA=this.AY-(-IA%this.AY);if(IA>
0)IA=IA%this.AY;}var AdH=((IA>=this.Tk)&&(IA<=this.Tl))||((inx>=Apx)&&(inx<=Apy)
);if(AdH)this.Ux=this.GO;else this.Ux=(B=Aa.GetExtent())[3]-B[1];var A2I=pos[1];
var A2J=pos[1]+this.Ux;if(AdH&&!((A2I<BI)&&(A2J>0))){this.Cj=Aa;this.G6=IA;this.
AcJ=[BgW,this.Ux];(B=this.Hm)?B[1].call(B[0],this):null;}if(((IA===this.Gt)&&this.
NR)&&!!AlI){var Rz=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rz))>A.aaH(A.lb(AlI.GetExtent(),Rz)))AlI=Aa;}else if(IA===this.Gt)AlI=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Ux];}this.Tk=0;this.Tl=-1;this.Cj=null;this.G6=-
1;this.Bb(AlI);this.At1=false;A.pe(this.Em,this);},QJ:function(Ag,GA,aFilter){return null;
},AqM:function(Ag,aFilter){return null;},TP:function(Ag,aFilter){return null;},ACR:
function(Ag,aFilter){return null;},Dc:function(aFilter){return BD;},NS:function(
KC,FP,Lz,Lx,Ly){throw new Error(W7);},AhE:function(Ag,J7){throw new Error(Z6);},
ZD:function(Ag){throw new Error(Z7);},JZ:function(Ag,Qh){throw new Error(UU);},HO:
function(Ag){throw new Error(W8);},AMc:function(Ag,J7){throw new Error(O5);},J:function(
Ag,Qh){throw new Error(Z8);},Jn:function(Ha,A0V){return Ha*this.GO;},Al9:function(
Fh,A0V){return(Fh/this.GO)|0;},AA2:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jp=this.Jp-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azq:function(
){var B;var Aa=this.HB;var Adq=this.Lj;var AdK=++this.Jp;if(this.NR){if(AdK<0)AdK=
this.AY-(-AdK%this.AY);if(AdK>0)AdK=AdK%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.AZ(0x1D);if(!!this.Om)this.AiJ++;
}this.Ux=this.GO;this.G6=AdK;this.AcJ=[(B=this.M)[2]-B[0],this.Ux];this.Cj=Aa;(B=
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
A._NewObject(Adq,0))?B:null);Aa.AZ(0x1D);if(!!this.Om)this.AiJ++;}this.Ux=this.GO;
this.G6=M3;this.AcJ=[(B=this.M)[2]-B[0],this.Ux];this.Cj=Aa;(B=this.Hm)?B[1].call(
B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B7)this.B7.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(M3===this.Gt)this.Bb(Aa);return Aa;
},ApK:function(G){var B;this.BX.Q=null;this.BX.Qw=null;this.BX=null;(B=this.NB)?
B[1].call(B[0],this):null;},BBt:function(G){this.Gb(this.WQ.DG[1]);},BBu:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.BX=
null;}if(!this.NR){var AE=this.AqT(0,this.AY-1);var Agk=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OS);if(AE[0]>Agk[0])AE=[].concat(Agk[0],AE.slice(1,4));if(AE[1]>Agk[
1])AE=A.abP(AE,Agk[1]);var Fx=AE[1]-this.M[1];var A2Z=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2Z>0)A2Z=0;this.WQ.DG=[0,this.Br];this.WQ.Gp=[0,(this.Br+A2Z)-Fx];this.
WQ.F_=[0,this.Br-Fx];}else{var Fx=32000-(32000%this.GO);this.WQ.DG=[0,this.Br];this.
WQ.Gp=[0,this.Br-Fx];this.WQ.F_=[0,this.Br+Fx];}},ATf:function(E){var B;if(this.
NR===E)return;this.NR=E;while(!!this.AdG());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw8:function(E){if(E===this.WQ)return;if(!!E&&!!E.Auc){A.ab5(
"%s%*%s",O6,E,Rn);throw new Error(W9);}if(!!this.WQ){this.WQ.AKM=null;this.WQ.Auc=
null;}this.WQ=E;if(!!E){E.AKM=[this,this.BBu];E.Auc=[this,this.BBt];}},Gb:function(
E){var B;if(this.NR&&(this.AY>0)){var HD=this.Jn(this.AY,3);if(E<0)E=HD-(-E%HD);
if(E>0)E=E%HD;if(E>0)E=E-HD;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(E){if(E<0)E=-1;if(E===this.Gt)return;
this.Gt=E;this.Am();},A_t:function(E){var B;if(E<0)E=0;if(E===this.OS)return;this.
OS=E;if(!this.NR){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae8:function(
E){var B;if(E<1)E=1;if(E===this.GO)return;this.GO=E;while(!!this.AdG());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jy:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NR){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OS+this.Br)+this.Jn(E,3));AE=A.abP(AE
,(this.OS+this.Br)+this.Jn(this.AY,3));}else{AE=A.abP(AE,(this.OS+this.Br)+this.
Jn(E,3));AE=[].concat(AE.slice(0,3),(this.OS+this.Br)+this.Jn(this.AY,3));}}else
while(!!this.AdG());this.AY=E;this.Am();this.Bj(AE);},N2:function(E){var B;if(E===
this.Lj)return;this.Lj=E;while(!!this.AdG());this.HB=null;this.Om=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bjy:function(Ha){if(this.At1)return null;
if((Ha<0)||(Ha>=this.AY))return null;if(!this.NR){if((Ha<this.Ht)||(Ha>this.Jp))
return null;var X=this.B7;while(Ha>this.Ht){X=X.Ah;Ha=Ha-1;}return X;}else{var M3=
this.Ht;if(M3<0)M3=this.AY-(-M3%this.AY);if(M3>0)M3=M3%this.AY;var X=this.B7;while(
!!X){if((M3%this.AY)===Ha)return X;X=X.Ah;M3=M3+1;}return null;}},ABK:function(AcZ
,E7){var B;if(this.NR){(E7)?E7[1].call(E7[0],this):null;return;}var AKe=this.Br;
var Bdv=((((B=this.M)[3]-B[1])-this.Br)-this.OS)-this.Jn(this.AY,3);var Bq=0;if(
AKe>0)Bq=-AKe;else if(Bdv>0)Bq=Bdv;if((Bq>0)&&(Bq>-AKe))Bq=-AKe;if(!Bq){(E7)?E7[
1].call(E7[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(this.Br+Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HN(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qw=[this,this.
ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E7;}},HI:function(Ha,Ac3,AcZ,E7
){var B;if((Ha<0)||(Ha>=this.AY))return;var Az=this.AqT(Ha,Ha);var Bd=this.M;var
LN=A.lb(Az,Bd);if((!Ac3&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az))
){(E7)?E7[1].call(E7[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qw=null;this.NB=null;}this.BX=AcZ;if(!this.BX){this.Gb(this.Br-Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HN(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qw=[this,this.
ApK];this.BX.Ae$(false);this.BX.Ar(true);this.NB=E7;}},Bjq:function(){return BD;
},AOU:function(){if((this.OS<=0)||this.NR)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OS);return AE;},A6X:function(Fh
){if(((this.AY<=0)||(Fh[0]<this.M[0]))||(Fh[0]>=this.M[2]))return-1;Fh=A.abe(Fh,
this.M.slice(0,2));if(!this.NR){var Aa=(Fh[1]-this.Br)-this.OS;if(Aa>0)Aa=this.Al9(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fh[1]-this.Br;if(Aa>0)
Aa=this.Al9(Aa,0);if(Aa<0)Aa=this.Al9(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqT:function(J5,L7){if(J5<0)J5=0;if(L7>=this.AY)L7=
this.AY-1;if(J5>L7)return BD;var AE=this.M;var Bq=this.Br;if(this.NR){var HD=this.
Jn(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;}else Bq=
Bq+this.OS;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jn(L7+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jn(J5,0));return AE;},AbD:function(J5,L7){var B;if(J5<0)J5=0;if(J5>L7
)return;if(this.Tk>this.Tl){this.Tk=J5;this.Tl=L7;}else{if(J5<this.Tk)this.Tk=J5;
if(L7>this.Tl)this.Tl=L7;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NR){
AE=A.abP(AE,(this.OS+this.Br)+this.Jn(J5,0));AE=[].concat(AE.slice(0,3),(this.OS+
this.Br)+this.Jn(L7+1,0));}else if((this.Jn(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HD=this.Jn(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(
Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;AE=A.abP(AE,Bq+this.Jn(J5,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jn(L7+1,0));}this.Am();this.Bj(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W_);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WQ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dz={HB:null
,BX:null,Cj:null,NB:null,Hm:null,Tl:-1,Tk:0,Jp:-1,Ht:0,AiJ:8,Om:0,SN:0,AcJ:A.wf,
G6:-1,Br:0,Gt:-1,Wc:24,AY:0,Lj:null,At1:false,AVa:function(Iu,Od,Xi,Td,Te,Ah_,O$
,Rs,Lz,Lx,Ly){throw new Error(UV);},AqF:function(Iu,Ah_,O$,Rs,Lz,Lx,Ly){throw new
Error(Z9);},AkM:function(Iu,Od,Xi,Td,Te,O$,Rs,Lz,Lx,Ly){throw new Error(Z_);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV
){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Lj,0))?B:null);
if(!!this.B8)this.B8.Ah=this.Cj;else this.B7=this.Cj;this.Cj.AJ=this.B8;this.B8=
this.Cj;this.Cj.Ab=this;this.AcJ=[this.SN,(B=this.M)[3]-B[1]];(B=this.Hm)?B[1].call(
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
null;var BgJ=(B=this.M)[3]-B[1];while(!!Aa){var IA=inx;var AdH=((IA>=this.Tk)&&(
IA<=this.Tl))||((inx>=Apx)&&(inx<=Apy));var Apd=Aa.GetExtent();var Bq=A.abe(pos,
Apd.slice(0,2));if(AdH)this.SN=this.Wc;else this.SN=Apd[2]-Apd[0];var A2G=pos[0];
var A2H=pos[0]+this.SN;if(!A.aaX(Bq,Ce))Aa.Ank(Bq,true);if((AdH&&(A2G<BY))&&(A2H>
0)){this.Cj=Aa;this.G6=IA;this.AcJ=[this.SN,BgJ];(B=this.Hm)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SN,pos[1]];}inx=this.Ht;Aa=this.B7;pos=[
this.Br+this.Jn(inx,0),0];while(!!Aa){var IA=inx;var AdH=((IA>=this.Tk)&&(IA<=this.
Tl))||((inx>=Apx)&&(inx<=Apy));if(AdH)this.SN=this.Wc;else this.SN=(B=Aa.GetExtent(
))[2]-B[0];var A2G=pos[0];var A2H=pos[0]+this.SN;if(AdH&&!((A2G<BY)&&(A2H>0))){this.
Cj=Aa;this.G6=IA;this.AcJ=[this.SN,BgJ];(B=this.Hm)?B[1].call(B[0],this):null;}if(
IA===this.Gt)AlI=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SN,pos[1]];}this.Tk=0;this.
Tl=-1;this.Cj=null;this.G6=-1;this.Bb(AlI);this.At1=false;},QJ:function(Ag,GA,aFilter
){return null;},AqM:function(Ag,aFilter){return null;},TP:function(Ag,aFilter){return null;
},ACR:function(Ag,aFilter){return null;},Dc:function(aFilter){return BD;},NS:function(
KC,FP,Lz,Lx,Ly){throw new Error(W$);},AhE:function(Ag,J7){throw new Error(Xa);},
ZD:function(Ag){throw new Error(S$);},JZ:function(Ag,Qh){throw new Error(UW);},HO:
function(Ag){throw new Error(UX);},AMc:function(Ag,J7){throw new Error(AcM);},J:
function(Ag,Qh){throw new Error(Ta);},Jn:function(Ha,A0V){return Ha*this.Wc;},Al9:
function(Fh,A0V){return(Fh/this.Wc)|0;},AA2:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jp=this.Jp-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azq:function(
){var B;var Aa=this.HB;var Adq=this.Lj;var AdK=++this.Jp;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.AZ(0x1D);if(!!this.Om)this.
AiJ++;}this.SN=this.Wc;this.G6=AdK;this.AcJ=[this.SN,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.
B8.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdK===this.
Gt)this.Bb(Aa);return Aa;},AdG:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Om<this.AiJ){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Om++;}return Aa;},Azp:function(){var
B;var Aa=this.HB;var Adq=this.Lj;var M3=--this.Ht;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Om--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.AZ(0x1D);if(!!this.Om)this.AiJ++;
}this.SN=this.Wc;this.G6=M3;this.AcJ=[this.SN,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B7)this.B7.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(M3===this.Gt
)this.Bb(Aa);return Aa;},ApK:function(G){var B;this.BX.Q=null;this.BX.Qw=null;this.
BX=null;(B=this.NB)?B[1].call(B[0],this):null;},Gb:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(
E){if(E<0)E=-1;if(E===this.Gt)return;this.Gt=E;this.Am();},AFo:function(E){var B;
if(E<1)E=1;if(E===this.Wc)return;this.Wc=E;while(!!this.AdG());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jy:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jn(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jn(E,3));}else{AE=
A.abN(AE,this.Br+this.Jn(this.AY,3));AE=[].concat(this.Br+this.Jn(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},N2:function(E){var B;if(E===this.Lj)return;
this.Lj=E;while(!!this.AdG());this.HB=null;this.Om=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bpy:function(Byg,Byh){if(!this.BX)return;if(Byg)this.Gb(
this.BX.B2);var A4D=this.NB;this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.
NB=null;this.BX=null;if(Byh)(A4D)?A4D[1].call(A4D[0],this):null;},Bj1:function(){
return!!this.BX;},HI:function(Ha,Ac3,AcZ,E7){var B;if((Ha<0)||(Ha>=this.AY))return;
var Az=this.AqT(Ha,Ha);var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac3&&!((LN[0]>=LN[2
])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az))){(E7)?E7[1].call(E7[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.NB=null;}this.BX=
AcZ;if(!this.BX){this.Gb(this.Br-Bq);(E7)?E7[1].call(E7[0],this):null;}else{this.
BX.Ar(false);this.BX.HN(1);this.BX.Q=[this,this.Anv,this.Gb];this.BX.Cx=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qw=[this,this.ApK];this.BX.Ae$(false);this.BX.Ar(true
);this.NB=E7;}},AqT:function(J5,L7){if(J5<0)J5=0;if(L7>=this.AY)L7=this.AY-1;if(
J5>L7)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jn(L7+1
,0));AE=[].concat((AE[0]+Bq)+this.Jn(J5,0),AE.slice(1,4));return AE;},AbD:function(
J5,L7){var B;if(J5<0)J5=0;if(J5>L7)return;if(this.Tk>this.Tl){this.Tk=J5;this.Tl=
L7;}else{if(J5<this.Tk)this.Tk=J5;if(L7>this.Tl)this.Tl=L7;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jn(J5,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jn(L7+1,0));this.Am();this.Bj(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dz;this.H(W_);
this.Lj=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASu:null,AEO:null,Av$:null,D1:null,
Lo:null,BL:null,AK$:0,Bp:0,IJ:0,Bs:0,N8:0,Jt:0,DG:A.wf,NU:A.wf,H0:A.wf,Axw:8,Afg:
0,A7P:1,Down:false,YG:false,NJ:false,A19:false,AAk:0,Ko:function(CY,aClip,aOffset
,Ck,aBlend){},G4:function(CN){var B;var BN=(C.Aef.isPrototypeOf(CN)?CN:null);var
D4=(C.AqH.isPrototypeOf(CN)?CN:null);var AKo=this.YG;var AaG;var Vf;var ABl;var M0;
var AzI;if(!BN&&!D4)return null;AaG=(!!BN&&BN.Down)&&!BN.Jt;Vf=(!!BN&&BN.Down)&&(
BN.Jt>0);ABl=(!!BN&&BN.Down)&&(BN.Jt>this.AAk);M0=!!BN&&!BN.Down;AzI=!!D4;if(AaG
)this.AAk=((B=(BN.NJ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afg&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iy=(C.Au1.isPrototypeOf(CN)?CN:null);if(((
!!Iy&&Iy.Down)&&(Iy.AxO!==this))&&A.wa(this.GetExtent(),this.Ab.A7K(Iy.LU))){this.
AK$=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaG){var ApE=0;var Adl;this.Bp=
this.Bp|(1<<BN.IJ);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApE=ApE+1;
if(ApE===1)this.Bp=(this.Bp|16777216)|(4096<<BN.IJ);}if(M0&&(this.Bp<16777216)){
var IE=this.Im();var JE=null;if(!!IE){var A4v=(!!this.AJ?this.AJ:this.Ab);var A1X=(
!!IE.JF?IE.JF.C0:null);JE=IE.Yh(A.abh(Z$,BN.LU),BN.IJ,BN.N8,A1X,A4v,0x0);}if(!!JE
){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A._NewObject(C.Aef,0).InitializeDown(
O,BN.H0,BN.N8,Ce,true,BN.LU));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A.
_NewObject(C.Aef,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N8,Ce,false,BN.LU,BN.LU));}}
if(M0)this.Bp=(this.Bp&~(1<<BN.IJ))|33554432;if(ABl&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M0&&BN.NJ)this.Bp=this.Bp|67108864;if(M0&&!(this.Bp&4095))this.
AK$=0x0;if(M0&&!(this.Bp&16777215))this.Bp=0;if(Vf&&(this.Bp>=67108864)){var IE=
this.Im();if(!!IE)IE.AUz(null,null,this,this.AK$);}if((Vf&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Vf=false;M0=true;}if(!!BN&&!(this.Bp&(4096<<BN.IJ)))return this;
if(!!D4&&!(this.Bp&(4096<<D4.IJ)))return this;if(M0&&!(this.Bp&16777216))return this;
if(((AaG||AzI)||Vf)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(M0
)this.Bp=this.Bp&3758100479;if(M0&&!(this.Bp&16777215))this.Bp=0;if(!!BN){this.Down=
AaG||Vf;this.YG=this.ARo(BN.H0);this.NU=BN.NU;this.H0=BN.H0;this.DG=Ce;this.Jt=BN.
Jt;this.N8=BN.N8;this.NJ=BN.NJ;this.IJ=BN.IJ;this.Bs=BN.Bs;if(BN.Down&&!BN.Jt)AKo=
false;}if(!!D4){this.Down=true;this.YG=this.ARo(D4.H0);this.NU=D4.NU;this.H0=D4.
H0;this.DG=D4.DG;this.Jt=D4.Jt;this.N8=D4.N8;this.IJ=D4.IJ;this.NJ=false;this.Bs=
D4.Bs;}var A13=this.Down;if(!!D4)(B=this.ASu)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Jt)(B=this.BL)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Jt>0))(B=this.D1)?B[1].call(B[0],this):null;if((this.Down&&this.YG)&&!AKo){
this.A19=true;(B=this.Av$)?B[1].call(B[0],this):null;}if(this.A19&&(((A13&&!this.
YG)&&AKo)||((!A13&&this.YG)&&AKo))){this.A19=false;(B=this.AEO)?B[1].call(B[0],this
):null;}if(!!BN&&!A13)(B=this.Lo)?B[1].call(B[0],this):null;if(!!this.Afg){var AdF=
0x0;if(((((this.Afg&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Jt>=1000))AdF=0x10;if((((
this.Afg&0x1)===0x1)&&!!D4)&&((D4.LU[1]-D4.Ag3[1])<=-this.Axw))AdF=0x1;if((((this.
Afg&0x2)===0x2)&&!!D4)&&((D4.LU[1]-D4.Ag3[1])>=this.Axw))AdF=0x2;if((((this.Afg&
0x4)===0x4)&&!!D4)&&((D4.LU[0]-D4.Ag3[0])<=-this.Axw))AdF=0x4;if((((this.Afg&0x8
)===0x8)&&!!D4)&&((D4.LU[0]-D4.Ag3[0])>=this.Axw))AdF=0x8;if(!!AdF){var IE=this.
Im();if(!!IE){this.AK$=AdF;IE.AUz(null,this,this,AdF);}}}return this;},Yh:function(
Db,BF,Oe,Aah,Ac6,Ac5){var B;if(!!Aah&&(Aah!==this))return null;if((Oe<1)||(Oe>this.
A7P))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BF)))return null;if(!!(Ac5&this.Afg))return null;if(this.BjD()){var Az=
A.lb(Db,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=A.aaI(Db);
var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=Az[2])Fx=[(Az[2]-Qk[0]
)-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fx=[Fx[0],(Az[3
]-Qk[1])-1];return A._NewObject(C.Au2,0).Initialize(this,Fx);}}else{var HC=A.abi(
9,A.wf,null);var O;HC.Set(0,A.aaI(Db));HC.Set(1,HC.Get(0));HC.Set(2,HC.Get(0));HC.
Set(3,HC.Get(0));HC.Set(4,HC.Get(0));HC.Set(1,[Db[0],HC.Get(1)[1]]);HC.Set(2,[HC.
Get(2)[0],Db[1]]);HC.Set(3,[Db[2],HC.Get(3)[1]]);HC.Set(4,[HC.Get(4)[0],Db[3]]);
HC.Set(5,Db.slice(0,2));HC.Set(6,[Db[2],Db[1]]);HC.Set(7,[Db[0],Db[3]]);HC.Set(8
,Db.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARo(HC.Get(O)))return A._NewObject(C.Au2
,0).Initialize(this,A.abe(HC.Get(O),HC.Get(0)));}return null;},BnN:function(E){if(
E<1)E=1;this.Axw=E;},AFx:function(E){if(E<1)E=1;this.A7P=E;},Ar:function(E){if(E
)this.Cr(0x100000,0x0);else this.Cr(0x0,0x100000);},_Init:function(aArg){C.ZB._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
ZB._Mark.call(this,D);if((B=this.ASu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AEO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av$)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Lo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H9={timer:null,AKM:null,Auc:null,AF_:null,Zl:null,SK:null,Bp:0,AJn:0,Ado:5000
,ApY:0,AKn:A.wf,Apa:0,AfP:0,EY:0,Amj:0,Auq:0,Ao$:0,AfO:0,EX:0,Ami:0,Amg:0,NU:A.wf
,A59:A.wf,F_:A.wf,Gp:A.wf,DG:A.wf,WS:A.wf,A6K:0.5,A$o:true,AGQ:true,ZL:false,XH:
false,XI:false,AoV:false,AAk:0,Ko:function(CY,aClip,aOffset,Ck,aBlend){},G4:function(
CN){var B;var BN=(C.Aef.isPrototypeOf(CN)?CN:null);var D4=(C.AqH.isPrototypeOf(CN
)?CN:null);var Iy=(C.Au1.isPrototypeOf(CN)?CN:null);var AaG;var Vf;var ABl;var M0;
var AzI;AaG=(!!BN&&BN.Down)&&!BN.Jt;Vf=(!!BN&&BN.Down)&&(BN.Jt>0);ABl=(!!BN&&BN.
Down)&&(BN.Jt>this.AAk);M0=!!BN&&!BN.Down;AzI=!!D4;if(AaG)this.AAk=((B=(BN.NJ?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaG){var ApE=0;var Adl;this.Bp=this.Bp|(1<<BN.
IJ);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApE=ApE+1;if(ApE===1)this.
Bp=(this.Bp|16777216)|(4096<<BN.IJ);}if(M0&&(this.Bp<16777216)){var IE=this.Im();
var JE=null;if(!!IE){var A4v=(!!this.AJ?this.AJ:this.Ab);var A1X=(!!IE.JF?IE.JF.
C0:null);JE=IE.Yh(A.abh(Z$,BN.LU),BN.IJ,BN.N8,A1X,A4v,0x0);}if(!!JE){var O;for(O=
0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A._NewObject(C.Aef,0).InitializeDown(O
,BN.H0,BN.N8,Ce,true,BN.LU));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Cj.G4(A._NewObject(
C.Aef,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N8,Ce,false,BN.LU,BN.LU));}}if(M0)this.
Bp=(this.Bp&~(1<<BN.IJ))|33554432;if(ABl&&(this.Bp<16777216))this.Bp=this.Bp|67108864;
if(M0&&BN.NJ)this.Bp=this.Bp|67108864;if(M0&&!(this.Bp&16777215))this.Bp=0;if(Vf&&(
this.Bp>=67108864)){var IE=this.Im();if(!!IE)IE.AUz(null,null,this,0x0);}if((Vf&&
!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vf=false;M0=true;}if(!!BN&&!(this.Bp&(
4096<<BN.IJ)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IJ)))return this;if(M0&&!(
this.Bp&16777216))return this;if(((AaG||AzI)||Vf)&&((this.Bp<16777216)||(this.Bp>=
33554432)))return this;if(M0)this.Bp=this.Bp&3758100479;if(M0&&!(this.Bp&16777215
))this.Bp=0;if(!!Iy&&(Iy.AxO===this))return null;if((!!Iy&&Iy.Down)&&(this.AoV||
!this.ZL))return null;if((!!Iy&&Iy.Down)&&!A.wa(this.M,this.Ab.A7K(Iy.LU)))return null;
if((!!Iy&&!Iy.Down)&&(!this.AoV||(this.AJn!==Iy.IJ)))return null;if((!BN&&!D4)&&
!Iy)return null;if(!!BN){this.AoV=AaG||Vf;this.AJn=BN.IJ;this.NU=BN.NU;}if(!!D4)
this.AJn=D4.IJ;if(!!Iy){this.AoV=Iy.Down;this.AJn=Iy.IJ;}if(!!Iy&&Iy.Down){this.
A4w();this.EX=(((Iy.Bs-this.Amg)*0.001)*this.AfO)+this.EX;this.EY=(((Iy.Bs-this.
Auq)*0.001)*this.AfP)+this.EY;if(this.XH)this.EX=0;if(this.XI)this.EY=0;this.AfO=
0;this.AfP=0;this.XH=false;this.XI=false;this.AKn=this.DG;this.ApY=Iy.Bs;return this;
}if(AaG){this.A4w();this.EX=(((BN.Bs-this.Amg)*0.001)*this.AfO)+this.EX;this.EY=(((
BN.Bs-this.Auq)*0.001)*this.AfP)+this.EY;if(this.XH||!this.ZL)this.EX=0;if(this.
XI||!this.ZL)this.EY=0;this.AfO=0;this.AfP=0;this.XH=false;this.XI=false;if(!this.
ZL){this.ZL=true;(B=this.SK)?B[1].call(B[0],this):null;(B=this.AKM)?B[1].call(B[
0],this):null;}this.AKn=this.DG;this.ApY=BN.Bs;}if(!!D4){var Hc=A.abe(D4.H0,D4.NU
);var CD=this.DG;if(this.AGQ)CD=[this.AKn[0]+Hc[0],CD[1]];CD=[CD[0],this.AKn[1]+
Hc[1]];if(this.A$o){if(CD[0]<this.Gp[0])CD=[this.Gp[0]+(((CD[0]-this.Gp[0])/2)|0
),CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0]+(((CD[0]-this.F_[0])/2)|0),CD[1
]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]+(((CD[1]-this.Gp[1])/2)|0)];else if(
CD[1]>this.F_[1])CD=[CD[0],this.F_[1]+(((CD[1]-this.F_[1])/2)|0)];}else{if(CD[0]<
this.Gp[0])CD=[this.Gp[0],CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0],CD[1]];
if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]];else if(CD[1]>this.F_[1])CD=[CD[0],this.
F_[1]];}if(!A.aaX(CD,this.DG)){this.A59=A.abe(CD,this.DG);this.DG=CD;(B=this.Auc
)?B[1].call(B[0],this):null;(B=this.AF_)?B[1].call(B[0],this):null;}}if((!!Iy&&!
Iy.Down)&&((Iy.Bs-this.ApY)>=200)){this.EX=0;this.EY=0;}if(Vf&&((BN.Bs-this.ApY)>=
200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApY)){var Hc=D4.DG;var BdY=1000/(
D4.Bs-this.ApY);var AiM=0;var AiN;if(this.AGQ)AiM=Hc[0]*BdY;AiN=Hc[1]*BdY;if((AiM
*this.EX)<0)this.EX=0;if((AiN*this.EY)<0)this.EY=0;this.EX=(this.EX+AiM)*0.5;this.
EY=(this.EY+AiN)*0.5;this.ApY=D4.Bs;}if(!M0&&!Iy)return this;if(!!BN&&BN.NJ){this.
EX=0;this.EY=0;}if((this.DG[0]<=this.Gp[0])||(this.DG[0]>=this.F_[0]))this.EX=0;
else if(!this.EX){var EQ=this.DG[0];var Fj=this.Gp[0];var EI=this.F_[0];if(EQ<Fj
)EI=this.Gp[0];else if(EQ>EI)Fj=this.F_[0];else if(this.WS[0]<=1){Fj=EQ;EI=EQ;}else{
var Ads=(EI-EQ)%this.WS[0];EI=(EQ-this.WS[0])+Ads;Fj=EQ+Ads;if(EI<this.Gp[0])EI=
this.Gp[0];if(Fj>this.F_[0])Fj=this.F_[0];}if((Fj-EQ)<=(EQ-EI))EQ=Fj;else EQ=EI;
if(EQ!==this.DG[0]){var Jm=EQ-this.DG[0];if(Jm>0)this.EX=Math.sqrt((Jm*2)*this.Ado
)+20;if(Jm<0)this.EX=-Math.sqrt((-Jm*2)*this.Ado)-20;this.AfO=(400-(this.EX*this.
EX))/(2*Jm);this.Ao$=EQ;}}else{var BCr=this.EX*this.EX;var Jm=BCr/(2*this.Ado);var
EQ=this.DG[0];if(this.EX>0)EQ=EQ+(Jm|0);if(this.EX<0)EQ=EQ-(Jm|0);if(EQ>this.F_[
0])EQ=this.F_[0];else if(EQ<this.Gp[0])EQ=this.Gp[0];var BgE=EQ;var Fj=this.Gp[0
];var EI=this.F_[0];if(EQ<Fj)EI=this.Gp[0];else if(EQ>EI)Fj=this.F_[0];else if(this.
WS[0]<=1){Fj=EQ;EI=EQ;}else{var Ads=(EI-EQ)%this.WS[0];EI=(EQ-this.WS[0])+Ads;Fj=
EQ+Ads;if(EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.F_[0];}if(this.EX>
0){if(EI<=this.DG[0])EQ=Fj;else if((EQ-EI)<(Fj-EQ))EQ=EI;else EQ=Fj;}else if(Fj>=
this.DG[0])EQ=EI;else if((EQ-EI)>(Fj-EQ))EQ=Fj;else EQ=EI;if(EQ!==this.DG[0]){Jm=
EQ-this.DG[0];if(EQ!==BgE){var Ai8=EQ-BgE;if(Ai8>0)this.EX=this.EX+Math.sqrt((Ai8
*2)*this.Ado);if(Ai8<0)this.EX=this.EX-Math.sqrt((-Ai8*2)*this.Ado);}if(this.EX>
0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfO=(400-(this.EX*this.
EX))/(2*Jm);this.Ao$=EQ;}else this.EX=0;}if((this.DG[1]<=this.Gp[1])||(this.DG[1
]>=this.F_[1]))this.EY=0;else if(!this.EY){var ER=this.DG[1];var Fj=this.Gp[1];var
EI=this.F_[1];if(ER<Fj)EI=this.Gp[1];else if(ER>EI)Fj=this.F_[1];else if(this.WS[
1]<=1){Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WS[1];EI=(ER-this.WS[1])+Ads;Fj=ER+
Ads;if(EI<this.Gp[1])EI=this.Gp[1];if(Fj>this.F_[1])Fj=this.F_[1];}if((Fj-ER)<=(
ER-EI))ER=Fj;else ER=EI;if(ER!==this.DG[1]){var Jm=ER-this.DG[1];if(Jm>0)this.EY=
Math.sqrt((Jm*2)*this.Ado)+20;if(Jm<0)this.EY=-Math.sqrt((-Jm*2)*this.Ado)-20;this.
AfP=(400-(this.EY*this.EY))/(2*Jm);this.Apa=ER;}}else{var BCs=this.EY*this.EY;var
Jm=BCs/(2*this.Ado);var ER=this.DG[1];if(this.EY>0)ER=ER+(Jm|0);if(this.EY<0)ER=
ER-(Jm|0);if(ER>this.F_[1])ER=this.F_[1];else if(ER<this.Gp[1])ER=this.Gp[1];var
BgF=ER;var Fj=this.Gp[1];var EI=this.F_[1];if(ER<Fj)EI=this.Gp[1];else if(ER>EI)
Fj=this.F_[1];else if(this.WS[1]<=1){Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WS[1
];EI=(ER-this.WS[1])+Ads;Fj=ER+Ads;if(EI<this.Gp[1])EI=this.Gp[1];if(Fj>this.F_[
1])Fj=this.F_[1];}if(this.EY>0){if(EI<=this.DG[1])ER=Fj;else if((ER-EI)<(Fj-ER))
ER=EI;else ER=Fj;}else if(Fj>=this.DG[1])ER=EI;else if((ER-EI)>(Fj-ER))ER=Fj;else
ER=EI;if(ER!==this.DG[1]){Jm=ER-this.DG[1];if(ER!==BgF){var Ai8=ER-BgF;if(Ai8>0)
this.EY=this.EY+Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EY=this.EY-Math.sqrt((-
Ai8*2)*this.Ado);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.EY=this.EY-20;
this.AfP=(400-(this.EY*this.EY))/(2*Jm);this.Apa=ER;}else this.EY=0;}if(!!BN)this.
Amg=BN.Bs;if(!!Iy)this.Amg=Iy.Bs;this.Auq=this.Amg;this.Ami=this.DG[0];this.Amj=
this.DG[1];this.BCt();return this;},Yh:function(Db,BF,Oe,Aah,Ac6,Ac5){var B;if(!
!Aah&&(Aah!==this))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216
)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGQ&&!!(Ac5&0xC))return null;var Az=
A.lb(Db,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=A.aaI(Db);var Fx=Ce;
if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=Az[2])Fx=[(Az[2]-Qk[0])-1,Fx[1]];
if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fx=[Fx[0],(Az[3]-Qk[1])-1];
return A._NewObject(C.Au2,0).Initialize(this,Fx);}return null;},A4w:function(){if(
!!this.timer){A.z9([this,this.Mg],this.timer,0);this.timer=null;}},BCt:function(
){this.timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mg],this.timer,0);},Mg:
function(G){var B;if(!this.timer)return;var Auv=(this.timer.Bs-this.Amg)*0.001;var
Auw=(this.timer.Bs-this.Auq)*0.001;var BCE=Auv*Auv;var BCF=Auw*Auw;var AiM=(this.
AfO*Auv)+this.EX;var AiN=(this.AfP*Auw)+this.EY;var CD=[((((this.AfO*0.5)*BCE)+(
this.EX*Auv))+this.Ami)|0,((((this.AfP*0.5)*BCF)+(this.EY*Auw))+this.Amj)|0];if(
this.XH&&(Auv>=0.5)){CD=[this.Ao$,CD[1]];this.EX=0;this.AfO=0;this.Ami=CD[0];this.
XH=false;}else if(this.XH){var LK=1-Math.pow(1-(Auv/0.5),5);CD=[(this.Ami+((this.
Ao$-this.Ami)*LK))|0,CD[1]];}if(this.XI&&(Auw>=0.5)){CD=[CD[0],this.Apa];this.EY=
0;this.AfP=0;this.Amj=CD[1];this.XI=false;}else if(this.XI){var LK=1-Math.pow(1-(
Auw/0.5),5);CD=[CD[0],(this.Amj+((this.Apa-this.Amj)*LK))|0];}if(((this.EX>0)&&(
AiM<0))||((this.EX<0)&&(AiM>0))){AiM=0;CD=[this.DG[0],CD[1]];}if(((this.EY>0)&&(
AiN<0))||((this.EY<0)&&(AiN>0))){AiN=0;CD=[CD[0],this.DG[1]];}if(!this.XH&&(CD[0
]<this.Gp[0])){this.Ami=CD[0];this.Ao$=this.Gp[0];this.Amg=this.timer.Bs;this.XH=
true;}else if(!this.XH&&(CD[0]>this.F_[0])){this.Ami=CD[0];this.Ao$=this.F_[0];this.
Amg=this.timer.Bs;this.XH=true;}if(!this.XI&&(CD[1]<this.Gp[1])){this.Amj=CD[1];
this.Apa=this.Gp[1];this.Auq=this.timer.Bs;this.XI=true;}else if(!this.XI&&(CD[1
]>this.F_[1])){this.Amj=CD[1];this.Apa=this.F_[1];this.Auq=this.timer.Bs;this.XI=
true;}if(((!this.XH&&!!this.EX)&&(AiM>-20))&&(AiM<20)){CD=[this.Ao$,CD[1]];this.
EX=0;this.AfO=0;this.Ami=CD[0];}if(((!this.XI&&!!this.EY)&&(AiN>-20))&&(AiN<20)){
CD=[CD[0],this.Apa];this.EY=0;this.AfP=0;this.Amj=CD[1];}if(!A.aaX(CD,this.DG)){
this.A59=A.abe(CD,this.DG);this.DG=CD;(B=this.Auc)?B[1].call(B[0],this):null;(B=
this.AF_)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XH)&&!this.
XI){this.A4w();this.ZL=false;(B=this.Zl)?B[1].call(B[0],this):null;}},ATL:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WS=E;},ATh:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6K)return;this.A6K=E;if(E<(1e-007))E=1e-007;this.Ado=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.H9;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKM)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Auc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF_
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zl)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ah:null,Lo:null,BL:null,D1:null,ApT:
0,Bs:0,A$j:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Ach:false,NL:false,Init:function(
aArg){var B;var C0=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C0)throw new Error(AfB
);this.Ah=C0.AKr;C0.AKr=this;},G4:function(CN){var B;if(!!CN&&CN.BjV(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NL=false;if(
CN.Down){this.A$j=this.ApT;this.Ach=this.ApT>0;if(this.Ach)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NL)this.ApT=this.
ApT+1;return!this.NL;}if(!CN.Down){this.Ach=this.ApT>1;this.A$j=this.ApT-1;this.
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
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7W={Ah:null,C0:null,_Init:
function(aArg){this.__proto__=C.A7W;A.h7++;},_Done:function(){this.__proto__=null;
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
this,aArg);this.__proto__=C.AEa;},_className:"Core::LayoutQuadContext"};C.AN1={C0:
null,Ah:null,RC:null,RL:null,Me:null,ApP:null,_Init:function(aArg){this.__proto__=
C.AN1;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RC)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Me)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApP)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVf={FQ:null,B8:null,B7:null,Bd5:false,
By6:function(){if(!this.FQ)return;var Pm=this.FQ;this.FQ.Ph=null;this.FQ=null;A.
pe([this,this.A3E],this);Pm.A8l(this);},BAU:function(G){if(!!this.FQ)return;if(!
this.B7)return;this.FQ=this.B7;this.B7=this.B7.Ah;if(!!this.B7)this.B7.AJ=null;else
this.B8=null;this.FQ.Ah=null;this.Bd5=true;this.FQ.SK(this);this.Bd5=false;},BBf:
function(G){A.pe([this,this.BAU],this);},BBe:function(G){A.pe([this,this.BBf],this
);},A3E:function(G){A.pe([this,this.BBe],this);},BhQ:function(Ji){if(!Ji||!Ji.Ph
)return;if(Ji.Ph!==this)throw new Error(Aaa);var Bg_=false;if(this.FQ===Ji){this.
FQ=null;Bg_=true;A.pe([this,this.A3E],this);}else{if(!!Ji.Ah)Ji.Ah.AJ=Ji.AJ;else
this.B8=Ji.AJ;if(!!Ji.AJ)Ji.AJ.Ah=Ji.Ah;else this.B7=Ji.Ah;Ji.AJ=null;Ji.Ah=null;
}Ji.Ph=null;if(Bg_)Ji.A8k(this);},A$r:function(Ji,A1q){if(!Ji)return;if(!!Ji.Ph)
throw new Error(Xb);Ji.Ph=this;if(A1q){Ji.Ah=this.B7;if(!!this.B7)this.B7.AJ=Ji;
else this.B8=Ji;this.B7=Ji;}else{Ji.AJ=this.B8;if(!!this.B8)this.B8.Ah=Ji;else this.
B7=Ji;this.B8=Ji;}if(!this.FQ)A.pe([this,this.A3E],this);},_Init:function(aArg){
this.__proto__=C.AVf;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkZ={Ph:null,AJ:null,Ah:
null,A8l:function(Aty){},A8k:function(Aty){},SK:function(Aty){this.AmC();},Mp:function(
){if(!!this.Ph&&(this.Ph.FQ===this))this.Ph.By6();},AmC:function(){if(!!this.Ph)
this.Ph.BhQ(this);},ARk:function(){return!!this.Ph&&(this.Ph.FQ===this);},_Init:
function(aArg){this.__proto__=C.AkZ;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ph)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVd={As:null,Aus:
null,SK:function(Aty){this.Aus.As=this.As;A.we(this.Aus,0);A.pe([this,this.BAR],
this);},BAR:function(G){this.Aus.As=null;this.Aus=null;this.As=null;this.Mp();},
_Init:function(aArg){C.AkZ._Init.call(this,aArg);this.__proto__=C.AVd;},_Mark:function(
D){var B;C.AkZ._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aus)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxN={_Init:function(){C.AVf._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhD={resource:null,Lc:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhD;this.Init(aArg);A.h7++;},_Done:function(){this.Lc();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MC:null,timer:null,Bs:0,Period:1000,VG:0,Bw:false,Lc:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKU:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PV:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKU(this.VG,E);},WD:function(E){if(E<0)E=0;if(E===
this.VG)return;this.VG=E;if(this.Bw)this.AKU(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKU(this.VG,this.Period);else this.AKU(0,
0);this.Bs=this.Avu();},Avu:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avu();if(!this.
Period)this.Ar(false);(B=this.MC)?B[1].call(B[0],this):null;},AxL:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lc();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MC)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUI:0,Av5:0
,AjU:0,GL:0,Hk:0,Year:0,BdC:function(AfL,A0T){if(A0T)switch(AfL){case 1:return A.
aci.Bj5;case 2:return A.aci.BiW;case 3:return A.aci.Bkl;case 4:return A.aci.Bhu;
case 5:return A.aci.Bkp;case 6:return A.aci.Bj8;case 7:return A.aci.Bj7;case 8:return A.
aci.Bhw;case 9:return A.aci.Bo9;case 10:return A.aci.BkJ;case 11:return A.aci.BkI;
case 12:return A.aci.Bid;default:return A.jV;}else switch(AfL){case 1:return A.aci.
AD5;case 2:return A.aci.ACO;case 3:return A.aci.AEf;case 4:return A.aci.ABQ;case
5:return A.aci.AEh;case 6:return A.aci.AD7;case 7:return A.aci.AD6;case 8:return A.
aci.ABX;case 9:return A.aci.AGE;case 10:return A.aci.AEu;case 11:return A.aci.AEs;
case 12:return A.aci.ACz;default:return A.jV;}},BdA:function(Bb8,A0T){if(A0T)switch(
Bb8){case 1:return A.aci.Bku;case 2:return A.aci.Bqr;case 3:return A.aci.Bq9;case
4:return A.aci.Bqc;case 5:return A.aci.Bi9;case 6:return A.aci.Bo0;case 0:return A.
aci.Bp1;default:return A.jV;}else switch(Bb8){case 1:return A.aci.Bkt;case 2:return A.
aci.Bqq;case 3:return A.aci.Bq8;case 4:return A.aci.Bqb;case 5:return A.aci.Bi8;
case 6:return A.aci.BoZ;case 0:return A.aci.Bp0;default:return A.jV;}},Bdz:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JS:function(){var d=this.GL;var K4=this.Hk;var Dh=this.Year-((
K4<=2)?1:0);var AzJ=(((Dh>=0)?Dh:Dh-399)/400)|0;var Amq=Dh-(AzJ*400);var Vd=(((((
153*(K4+((K4>2)?-3:9)))+2)/5)|0)+d)-1;var Ao8=(((Amq*365)+((Amq/4)|0))-((Amq/100
)|0))+Vd;var Qm=((AzJ*146097)+Ao8)-719468;return(((Qm*86400)+(this.AjU*3600))+(this.
Av5*60))+this.AUI;},AFS:function(E){var B;E+=62162035200;if(E<0)E=0;var Vr=Math.
trunc(E/86400)|0;var AzJ=(((Vr>=0)?Vr:Vr-146096)/146097)|0;var Ao8=Vr-(AzJ*146097
);var Amq=((((Ao8-((Ao8/1460)|0))+((Ao8/36524)|0))-((Ao8/146096)|0))/365)|0;var Dh=
Amq+(AzJ*400);var Vd=Ao8-(((365*Amq)+((Amq/4)|0))-((Amq/100)|0));var A22=(((5*Vd
)+2)/153)|0;var d=(Vd-((((153*A22)+2)/5)|0))+1;var K4=A22+((A22<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dh+((
K4<=2)?1:0);this.Ur(K4);this.Lq(d);this.AnB(BI+((BI<0)?24:0));this.AnE(O+((O<0)?
60:0));this.AnH(s+((s<0)?60:0));},Zm:function(){if(this.Hk===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hk===4)||(this.Hk===6))||(this.Hk===9))||(this.Hk===11))return 30;else return 31;
},BlX:function(){var B;var Vd=this.AbY()-1;var AtP=(6+this.Awf())%7;var Ao_=((371+
AtP)-Vd)%7;if(this.Hk===12){var d=this.GL;if((d===31)&&(AtP<3))return 0;if((d===
30)&&(AtP<2))return 0;if((d===29)&&(AtP<1))return 0;}if(Ao_<=3)Vd+=Ao_;else Vd-=(
7-Ao_);if(Vd<0){var d=this.GL;var K4=this.Hk;this.Year--;this.Lq(31);this.Ur(12);
Vd=this.AbY()-1;AtP=(6+this.Awf())%7;Ao_=((371+AtP)-Vd)%7;if(Ao_<=3)Vd+=Ao_;else
Vd-=Ao_;this.Year++;this.Lq(d);this.Ur(K4);}return(Vd/7)|0;},AbY:function(){var B;
var d=this.GL;var K4=this.Hk;var Dh=this.Year;var Af9=((!!!(Dh%4)&&(!!(Dh%100)||
!!!(Dh%400)))?1:0);switch(K4){case 2:d+=31;break;case 3:d+=(59+Af9);break;case 4:
d+=(90+Af9);break;case 5:d+=(120+Af9);break;case 6:d+=(151+Af9);break;case 7:d+=(
181+Af9);break;case 8:d+=(212+Af9);break;case 9:d+=(243+Af9);break;case 10:d+=(273+
Af9);break;case 11:d+=(304+Af9);break;case 12:d+=(334+Af9);break;default:;}return d;
},Awf:function(){var B;var d=this.GL;var K4=this.Hk+((this.Hk>2)?-2:10);var Dh=this.
Year-((this.Hk<=2)?1:0);var B3=(Dh/100)|0;Dh%=100;d+=((((((((26*K4)-2)/10)|0)+Dh
)+((Dh/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnH:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUI=E;},AnE:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av5=E;},AnB:function(E){if(E<0)E=0;if(E>23)E=23;this.AjU=E;},Lq:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},Ur:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hk=E;},Format:function(Iv){var result=A.jV;var inx=0;while(!!(Iv.charCodeAt(inx)||
0))if((Iv.charCodeAt(inx)||0)===0x25){var AaA=1;inx=inx+1;if((Iv.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaA=0;}switch(Iv.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaA,10);break;case 0x48:result=result+A.abl(this.AjU,2*AaA,10);break;
case 0x49:if(!(this.AjU%12))result=result+Aab;else result=result+A.abl(this.AjU%
12,2*AaA,10);break;case 0x6D:result=result+A.abl(this.Hk,2*AaA,10);break;case 0x4D:
result=result+A.abl(this.Av5,2*AaA,10);break;case 0x70:if(this.AjU<12)result=result+
A.aci.Bhe;else result=result+A.aci.Bol;break;case 0x53:result=result+A.abl(this.
AUI,2*AaA,10);break;case 0x77:result=result+A.abl(this.Awf(),AaA,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaA,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaA,10);break;case 0x25:result=result+Xc;break;case 0x6A:result=result+
A.abl(this.AbY(),3*AaA,10);break;case 0x57:result=result+A.abl(this.BlX(),2*AaA,
10);break;case 0x61:result=result+this.BdA(this.Awf(),true);break;case 0x41:result=
result+this.BdA(this.Awf(),false);break;case 0x62:result=result+this.BdC(this.Hk
,true);break;case 0x42:result=result+this.BdC(this.Hk,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iv.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac7,AfL,Bxn,BxE,BxV,Byb){this.Year=Ac7;this.
Ur(AfL);this.Lq(Bxn);this.AnB(BxE);this.AnE(BxV);this.AnH(Byb);return this;},Initialize:
function(Ah$){this.AFS(Ah$);return this;},Bii:function(Ah$){if(!Ah$)return A._NewObject(
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
};C.A$Q={As:null,Ph:null,Trigger:function(AoD,A1q){var Pm=A._NewObject(C.AVd,0);
Pm.Aus=this;Pm.As=AoD;this.Ph.A$r(Pm,A1q);},_Init:function(aArg){this.__proto__=
C.A$Q;this.Ph=A._GetAutoObject(C.AxN);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ph)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$R={JM:null,Event:null,ASv:null,At7:function(G){var B;if(
!this.Event)return;this.JM=this.Event.As;(B=this.ASv)?B[1].call(B[0],this):null;
this.JM=null;},Bmz:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At7],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At7],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$R;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGF={Dt:0x1,BDn:0x2,BEw:0x4,BGt:0x8,Bw:0x10,H8:0x20
,BEx:0x40,BE_:0x80,BEs:0x100,BEO:0x200,BEg:0x400,BFN:0x800,Bl:0x1000,BGC:0x2000,
BFv:0x4000,BFw:0x8000,Abh:0x10000,BFu:0x20000,BF0:0x40000,BD9:0x80000,BFE:0x100000
,BD3:0x200000};C.PO={BFP:0x1,BFQ:0x2,BDj:0x4,BDk:0x8,BDl:0x10,BDi:0x20};C.Ag1={None:
0,BGp:1,BDG:2,BET:3,BFT:4,BGq:5,BGr:6,BDH:7,BDI:8,BEV:9,BEU:10,BFV:11,BFU:12};C.
Au6={None:0,BGn:1,Left:2,BDE:3,ZQ:4,A5F:5,BGo:6,Right:7,BDF:8};C.KeyCode={NoKey:
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
C._Init=function(){C.Akh.__proto__=C.Cj;C.ZB.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARC.__proto__=
C.Event;C.Au1.__proto__=C.Event;C.Aef.__proto__=C.Event;C.AqH.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CM.__proto__=C.P;C.Dz.__proto__=C.P;C.Bn.__proto__=C.ZB;C.H9.
__proto__=C.Eu;C.AD$.__proto__=C.Ark;C.AEa.__proto__=C.Ark;C.AVd.__proto__=C.AkZ;
};C._ReInit=function(){var B;if((B=C.AxN._this))B._ReInit(),C.AxN._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxN._this)&&(B._cycle!=D))B._Done(C.AxN._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */