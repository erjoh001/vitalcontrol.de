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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var A=index;var C={};
var Ce=[0,0];var BD=[0,0,0,0];var E7="The view does not belong to this group";var
Hr=[1000,740];var IV="The dialog component is already presented";var Is="The dialog component is actually not presented";
var O6="No fader to perform the fade-in/out operation";var P_="Trying to use the same fader twice";
var P$="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Ff="View is not in this group";var L5="Sibling view does not belong to the group";
var Qa="No view to remove";var J6="No view to add";var Od="View already in a group";
var Qb="Recursive invalidate during active update cycle.";var ML=[-8,-8,9,9];var
S$="No group to end the modal state.";var UW="The group is not modal.";var Z5="No group to obtain the modal state.";
var W8="The group serves already as the \'virtual keyboard\'.";var It="The group is already modal.";
var UX="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z6="The method SwitchToDialog() is not available in Core::VerticalList.";
var W9="The method DismissDialog() is not available in Core::VerticalList.";var Z7=
"The method PresentDialog() is not available in Core::VerticalList.";var W_="The method FadeGroup() is not available in Core::VerticalList.";
var Z8="The method RestackBehind() is not available in Core::VerticalList.";var Z9=
"The method RestackTop() is not available in Core::VerticalList.";var UY="The method Restack() is not available in Core::VerticalList.";
var W$="The method Remove() is not available in Core::VerticalList.";var O7="The method AddBehind() is not available in Core::VerticalList.";
var Z_="The method Add() is not available in Core::VerticalList.";var Oe="The Slide Touch Handler:";
var Rn="is already connected with a view.";var Xa="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xb=[0,0,170,120];var Ta="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Z$="The method DismissDialog() is not available in Core::HorizontalList.";var
Aaa="The method PresentDialog() is not available in Core::HorizontalList.";var Xc=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xd="The method RestackBehind() is not available in Core::HorizontalList.";
var Tb="The method RestackTop() is not available in Core::HorizontalList.";var Tc=
"The method Restack() is not available in Core::HorizontalList.";var Td="The method Remove() is not available in Core::HorizontalList.";
var Aab="The method AddBehind() is not available in Core::HorizontalList.";var Te=
"The method Add() is not available in Core::HorizontalList.";var Aac=[0,0,1,1];var
AfB="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aad="Trying to cancel a task not belonging to this queue!";var Xe="Trying to enqueue a task twice!";
var Aae="12";var Xf="%";
C.Cj={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,J4:0,PO:0x14,At0:function(BG,Ah9){}
,Ar8:function(E){if(this.J4===E)return;this.J4=E;if(!!this.Ab){var Ai6=this.Ah;var
Hc=0;while(!!Ai6&&(E>Ai6.J4)){Ai6=Ai6.Ah;Hc=Hc+1;}Ai6=this.AJ;while(!!Ai6&&(E<Ai6.
J4)){Ai6=Ai6.AJ;Hc=Hc-1;}if(!!Hc)this.Ab.J2(this,Hc);}},A0:function(E){var B;var
Hc=E^this.PO;if(!Hc)return;this.PO=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JM],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.NE.U=this.Ev.
NE.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JM],this);}},Im:function(
){var B0=this.Ab;while(!!B0){var IF=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IF)return IF;
B0=B0.Ab;}return null;},Kq:function(CZ,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G4:function(CN){return null;},Yj:function(Dc,BF,Oh,Aak
,Ac6,Ac5){return null;},AuL:function(Dc){return Dc;},AuV:function(BG,MP){return Ce;
},Ank:function(aOffset,Atw){},GetExtent:function(){return BD;},Cs:function(Rt,U7
){var B;if(((this.U&0x200)===0x200))Rt=Rt&~0x400;var A3a=(this.U&~U7)|Rt;var Xz=
A3a^this.U;this.U=A3a;if(!!this.Ab&&!!(Xz&0x14)){var Bdz=((this.U&0x14)===0x14);
if(Bdz&&!this.Ab.AV)this.Ab.Bb(this);if(!Bdz&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACV(this,0x14));}if(!!this.Ab&&!!(Xz&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A3a&0x400)===0x400))&&((Xz&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JM],this);}if(!!this.Ab&&((Xz&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JM],this);}if(((((Xz&0x100000)===0x100000)&&((U7&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
Xz&0x100000)===0x100000)&&((Rt&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((Xz&0x200000)===0x200000)&&((U7&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((Xz&0x200000)===0x200000)&&((Rt&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C1!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akh={ED:A.wf,Et:A.wf
,At0:function(BG,Ah9){var As=A._NewObject(C.AEd,0);this.Ev=null;As.extent=this.getExtent(
);As.Bd=BG;As.NE=Ah9;As.AiT=this.Et;As.AiU=this.ED;this.Ev=As;},AuV:function(BG,
MP){var B;var EW=this.PO;var As=(C.AEd.isPrototypeOf(B=this.Ev)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var Kd=[BG[
2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;var tmp;if(!MP){var NH=[(B=As.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NH[0]!==Kd[0]){var HT=((EW&
0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HT&&(Qx||!HU))x1=((
x1*Kd[0])/NH[0])|0;if(!HU&&(Qx||!HT)){x2=x2-As.Bd[0];x2=((x2*Kd[0])/NH[0])|0;x2=
x2-Kd[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qx){if(HT&&!HU)x2=x1+BY;
else if(!HT&&HU)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NH[1]!==Kd[1]){var HV=((EW&0x10)===0x10);var
HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HV&&(Qy||!HS))y1=((y1*Kd[1])/NH[
1])|0;if(!HS&&(Qy||!HV)){y2=y2-As.Bd[1];y2=((y2*Kd[1])/NH[1])|0;y2=y2-Kd[1];}else
y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy){if(HV&&!HS)y2=y1+BI;else if(!HV&&
HS)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(MP){case 3:{x1=BG[0];x2=x1+BY;}break;case 4:{x2=
BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((MP===3)||(MP===4)){var HV=((EW&0x10)===0x10);var HS=((EW&0x20
)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[1];y2=BG[3];}else if(HV&&!HS){y1=
BG[1];y2=y1+BI;}else if(HS&&!HV){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((MP===1)||(MP===2)){var HT=((EW&0x4)===0x4);var HU=((
EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[0];x2=BG[2];}else if(HT&&!HU
){x1=BG[0];x2=x1+BY;}else if(HU&&!HT){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((BG[2]-
BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BI=y2-y1;if(
As.AiU[0]<As.AiT[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.AiU[1]<As.AiT[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Ev=As;}return[BY,BI];},Ank:function(aOffset,Atw){if(Atw){this.Et=A.abf(this.Et,aOffset
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
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JM],this);}},DM:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.Et=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JM],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.
Akh;},_className:"Core::LineView"};C.ZD={KB:A.wf,MG:A.wf,ED:A.wf,Et:A.wf,At0:function(
BG,Ah9){var As=A._NewObject(C.AEe,0);this.Ev=null;As.extent=this.GetExtent();As.
Bd=BG;As.NE=Ah9;As.AiT=this.Et;As.AiU=this.ED;As.AAW=this.MG;As.AAX=this.KB;this.
Ev=As;},AuV:function(BG,MP){var B;var EW=this.PO;var As=(C.AEe.isPrototypeOf(B=this.
Ev)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var Kd=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;if(!MP){var
NH=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NH[0]!==Kd[0]){
var HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HT&&(
Qx||!HU))x1=((x1*Kd[0])/NH[0])|0;if(!HU&&(Qx||!HT)){x2=x2-As.Bd[0];x2=((x2*Kd[0]
)/NH[0])|0;x2=x2-Kd[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qx){if(HT&&
!HU)x2=x1+BY;else if(!HT&&HU)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NH[1]!==Kd[1]){var HV=((EW&0x10
)===0x10);var HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HV&&(Qy||!HS))y1=((
y1*Kd[1])/NH[1])|0;if(!HS&&(Qy||!HV)){y2=y2-As.Bd[1];y2=((y2*Kd[1])/NH[1])|0;y2=
y2-Kd[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy){if(HV&&!HS)y2=y1+BI;
else if(!HV&&HS)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MP){case 3:{x1=BG[0];x2=x1+BY;}break;
case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((MP===3)||(MP===4)){var HV=((EW&0x10)===0x10);var
HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[1];y2=BG[3];}else if(
HV&&!HS){y1=BG[1];y2=y1+BI;}else if(HS&&!HV){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MP===1)||(MP===2)){var HT=((EW&0x4)===0x4);
var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[0];x2=BG[2];}else if(
HT&&!HU){x1=BG[0];x2=x1+BY;}else if(HU&&!HT){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((
BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BI=(
y2-y1)-1;var Aiz=As.extent[0];var AiB=As.extent[1];var Af2=(As.extent[2]-Aiz)-1;
var Af1=(As.extent[3]-AiB)-1;if(!Af2)Af2=1;if(!Af1)Af1=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((As.AiT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiT[1]-AiB)*BI)/Af1)|0)];
this.ED=[x1+((((As.AiU[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiU[1]-AiB)*BI)/Af1)|0)];this.
MG=[x1+((((As.AAW[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAW[1]-AiB)*BI)/Af1)|0)];this.KB=[
x1+((((As.AAX[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAX[1]-AiB)*BI)/Af1)|0)];}else{this.
DM([x1+((((As.AiT[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiT[1]-AiB)*BI)/Af1)|0)]);this.DC([
x1+((((As.AiU[0]-Aiz)*BY)/Af2)|0),y1+((((As.AiU[1]-AiB)*BI)/Af1)|0)]);this.Ky([x1+((((
As.AAW[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAW[1]-AiB)*BI)/Af1)|0)]);this.JY([x1+((((As.
AAX[0]-Aiz)*BY)/Af2)|0),y1+((((As.AAX[1]-AiB)*BI)/Af1)|0)]);this.Ev=As;}return[BY+
1,BI+1];},Ank:function(aOffset,Atw){if(Atw){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.MG=A.abf(this.MG,aOffset);this.KB=A.abf(this.KB,aOffset
);}else{this.DM(A.abf(this.Et,aOffset));this.DC(A.abf(this.ED,aOffset));this.Ky(
A.abf(this.MG,aOffset));this.JY(A.abf(this.KB,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.MG[0];var y2=this.MG[1];if((((this.KB[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.KB[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.MG[0]<x1)x1=
this.MG[0];if(this.KB[0]<x1)x1=this.KB[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
MG[1]<y1)y1=this.MG[1];if(this.KB[1]<y1)y1=this.KB[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.KB[0]>x2)x2=this.KB[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.KB[1]>y2)y2=this.KB[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JY:function(E){var B;if(A.aaX(E,this.KB))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.KB=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JM],this);}},Ky:function(E){var B;if(A.aaX(E,
this.MG))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Ev=null;this.MG=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JM],this);}},DC:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JM],this);}},DM:function(E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Et=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JM],this);}},ARq:function(K2){var HC=A.abi(4,
A.wf,null);var O=0;var Ig=3;var A2F=false;var A2G=false;HC.Set(0,this.Et);HC.Set(
1,this.ED);HC.Set(2,this.MG);HC.Set(3,this.KB);while(O<4){var Bhi=HC.Get(O)[0];var
ALA=HC.Get(O)[1];var BC8=HC.Get(Ig)[0];var A4X=HC.Get(Ig)[1];if(((ALA>K2[1])!==(
A4X>K2[1]))||((ALA<K2[1])!==(A4X<K2[1]))){var Ep=((((BC8-Bhi)*(K2[1]-ALA))/(A4X-
ALA))|0)+Bhi;if(K2[0]>Ep)A2F=!A2F;if(K2[0]<Ep)A2G=!A2G;}Ig=O;O=O+1;}return A2F||
A2G;},BjM:function(){return((((this.Et[0]===this.KB[0])&&(this.ED[0]===this.MG[0
]))&&(this.Et[1]===this.ED[1]))&&(this.MG[1]===this.KB[1]))||((((this.Et[0]===this.
ED[0])&&(this.MG[0]===this.KB[0]))&&(this.Et[1]===this.KB[1]))&&(this.ED[1]===this.
MG[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZD;},
_className:"Core::QuadView"};C.Eu={M:A.wg,At0:function(BG,Ah9){var As=A._NewObject(
C.Arm,0);As.extent=this.M;As.Bd=BG;As.NE=Ah9;this.Ev=As;},AuV:function(BG,MP){var
B;var EW=this.PO;var As=this.Ev;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var Kd=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=
y2-y1;if(!MP){var NH=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NH[0]!==Kd[0]){var HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1
)===0x1);if(!HT&&(Qx||!HU))x1=((x1*Kd[0])/NH[0])|0;if(!HU&&(Qx||!HT)){x2=x2-As.Bd[
0];x2=((x2*Kd[0])/NH[0])|0;x2=x2-Kd[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qx){if(HT&&!HU)x2=x1+BY;else if(!HT&&HU)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NH[1]!==Kd[1
]){var HV=((EW&0x10)===0x10);var HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(
!HV&&(Qy||!HS))y1=((y1*Kd[1])/NH[1])|0;if(!HS&&(Qy||!HV)){y2=y2-As.Bd[1];y2=((y2
*Kd[1])/NH[1])|0;y2=y2-Kd[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qy
){if(HV&&!HS)y2=y1+BI;else if(!HV&&HS)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MP){case 3:{x1=
BG[0];x2=x1+BY;}break;case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((MP===3)||(MP===4)){var HV=((
EW&0x10)===0x10);var HS=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BG[
1];y2=BG[3];}else if(HV&&!HS){y1=BG[1];y2=y1+BI;}else if(HS&&!HV){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MP===1)||(MP===2)){var
HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BG[
0];x2=BG[2];}else if(HT&&!HU){x1=BG[0];x2=x1+BY;}else if(HU&&!HT){x2=BG[2];x1=x2-
BY;}else{x1=BG[0]+((((BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=As;}return[x2-x1,y2-y1];},Ank:function(aOffset,Atw){if(Atw)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JM],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B8:null,B9:null,AKv:null,FG:null
,Hd:null,XA:null,ApS:null,AV:null,G9:255,AzN:0,AzQ:0,AzP:0,AzO:0,Init:function(aArg
){this.Am();},Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(CZ.C1===this))this.Bdo(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FG.Update();CZ.A58(aClip,this.FG,0,A.abh(this.M,aOffset),Ce,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzO,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzQ);Az=A.abN(
Az,Az[2]+this.AzP);Az=[].concat(Az.slice(0,3),Az[3]+this.AzN);if(((this.U&0x80000
)===0x80000)){var Ap5=BD;var X;for(X=this.B8;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap5=
A.wC(Ap5,X.GetClipping());Az=A.wC(Az,A.abh(Ap5,this.M.slice(0,2)));}return Az;},
Yj:function(Dc,BF,Oh,Aak,Ac6,Ac5){var B;var X=this.B9;var Apm=null;var AE=BD;var
Ke=null;var A21=!!this.XA&&(!!this.XA.FQ||!!this.XA.B8);if(((B=A.lb(Dc,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Dc=A.abg(Dc,this.M.slice(0,2));if(!!Ac6){X=Ac6;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Ke){Ke=X.
AJ;while(!!Ke&&!((Ke.U&0x200)===0x200))Ke=Ke.AJ;if(!!Ke)AE=A.lb(Dc,Ke.GetExtent(
));else AE=BD;}if(Ke===X){Ke=null;AE=BD;}if((!!Aak&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C1===X)&&!A21))
)){var extent=X.GetExtent();var AJZ=Aak;var Ao8=null;if(AJZ===X)AJZ=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao8=X.Yj(AE
,BF,Oh,AJZ,Ac6,Ac5);}else if(!(((B=A.lb(extent,Dc))[0]>=B[2])||(B[1]>=B[3]))||(Aak===
X))Ao8=X.Yj(Dc,BF,Oh,AJZ,Ac6,Ac5);X=X.AJ;if(!!Ao8){if(!Apm||((Ao8.Au6<Apm.Au6)&&(
Ao8.Au6>=0)))Apm=Ao8;if(!Ao8.Au6)X=null;}}else X=X.AJ;Ac6=null;}return Apm;},AuL:
function(Dc){var B;var F;var X=this.B8;var LD=BD;var AAQ=true;var result=(Dc=F=A.
abg(Dc,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var Aua=(C.Y.isPrototypeOf(
X)?X:null);LD=A.lb(Dc,Aua.M);AAQ=((Aua.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAQ){var AE=A.lb(X.GetClipping(),LD);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuL(AE));}}else{var AE=A.lb(X.GetClipping(),
Dc);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuL(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Rt,U7){var B;
var Ts=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((U7&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Eu.Cs.call(this,Rt,U7);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rt&0x80000)===0x80000))&&!((Ts&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xz=this.U^Ts;if(!!this.AV&&((Xz&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.Hd&&((Xz&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C1.
U&0x14)===0x14))this.Hd.C1.Cs(0x40,0x0);else this.Hd.C1.Cs(0x0,0x40);}if(((Xz&0x10
)===0x10)){var X;for(X=this.B8;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C1===X)))X.Cs(Rt&0x10,U7&
0x10);}if(!!Xz){this.U=this.U|0x8000;A.pe([this,this.ABv],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al0=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKD=[
E[2]-E[0],E[3]-E[1]];var Ap1=!A.aaX(Al0,AKD);if(Ap1&&!!this.FG){this.FG.ArS(AKD);
A.we(this,0);A.we(this.FG,0);}C.Eu.H.call(this,E);if((Ap1&&(Al0[0]>0))&&(Al0[1]>
0)){var Bd=[].concat(Ce,Al0);var X=this.B8;while(!!X){if((!X.Ev&&(X.PO!==0x14))&&
!((X.U&0x400)===0x400))X.At0(Bd,null);X=X.Ah;}}if(Ap1){this.U=this.U|0x5000;A.pe([
this,this.ABv],this);}},A39:function(CN){var Bek=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKv;if(!Bek)return null;while(!!D5&&(!D5.Bw||!D5.G4(Bek)))D5=D5.
Ah;return D5;},BCS:function(G){if(!!this.FG){this.FG.C1=this;var AE=A.abg(this.AuL(
A.abh(this.FG.QO,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Avo(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bdo(this.FG,AE,Ce,255,true);this.FG.
C1=null;}},Bdo:function(CZ,aClip,aOffset,Ck,aBlend){var B;var X=this.B8;var LD=BD;
var AAQ=true;this.BiL(CZ,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var Aua=(C.Y.isPrototypeOf(X)?X:null);AAQ=((Aua.U&0x1)===0x1);LD=aClip;if(!((
Aua.U&0x80000)===0x80000))LD=A.lb(LD,A.abh(Aua.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAQ){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LD
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kq(CZ,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kq(CZ,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.BiO(CZ,aClip,aOffset,Ck,aBlend);},Bgh:
function(){var B;var A2y=((this.U&0x1000)===0x1000);var AiG=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aat=false;var Adn=BD;var K4=BD;var Aau=Ce;var AtW=0;var AtX=0;
var AtV=0;var Qq=0;var X=this.B9;var Ke=null;var AlS=null;while(!!X){if(((X.U&0x800
)===0x800)){Aat=true;X.U=X.U&~0x800;}if(Aat&&((X.U&0x200)===0x200)){Aat=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag1)X.U=X.U|0x1000;}X=X.AJ;}Aat=false;X=this.B8;
if(A2y){this.U=this.U&~0x1000;A2y=!((AiG[0]>=AiG[2])||(AiG[1]>=AiG[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlS&&(AtV!==Qq)){var AdL=X;var AKZ=0;var ABa=Adn[2]-
Adn[0];var Azo=Adn[3]-Adn[1];var AJP=0;var Aqa=Ce;do if(((AdL.U&0x200)===0x200))
AdL=null;else if(((AdL.U&0x401)===0x401)){Aqa=[(B=AdL.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qq===3)||(Qq===4))ABa=ABa-Aqa[0];if((Qq===1)||(Qq===2))Azo=Azo-Aqa[1];
if(!AlS||((ABa>=0)&&(Azo>=0))){AlS=AdL;AdL=AdL.Ah;if((Qq===3)||(Qq===4)){ABa=ABa-
AtW;if(Aqa[1]>AKZ)AKZ=Aqa[1];}if((Qq===1)||(Qq===2)){Azo=Azo-AtX;if(Aqa[0]>AJP)AJP=
Aqa[0];}}else AdL=null;}else AdL=AdL.Ah;while(!!AdL);if(!AlS)AlS=Ke;K4=Adn;switch(
AtV){case 9:case 11:K4=[].concat(K4.slice(0,3),K4[1]+AKZ);break;case 10:case 12:
K4=A.abP(K4,K4[3]-AKZ);break;case 5:case 7:K4=A.abN(K4,K4[0]+AJP);break;case 6:case
8:K4=[].concat(K4[2]-AJP,K4.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.NE!==Ke))X.Ev=null;if((!X.Ev&&Aat)&&((X.PO!==0x14)||!!Qq))X.
At0(K4,Ke);}if(!!X.Ev){if(A2y&&!((X.U&0x400)===0x400))X.AuV(AiG,0);if(Aat&&((X.U&
0x400)===0x400)){var C6=X.AuV(A.abh(K4,Aau),Qq);if(((X.U&0x1)===0x1)){var Bq=Ce;
switch(Qq){case 3:Bq=[C6[0]+AtW,Bq[1]];break;case 4:Bq=[-C6[0]-AtW,Bq[1]];break;
case 1:Bq=[Bq[0],C6[1]+AtX];break;case 2:Bq=[Bq[0],-C6[1]-AtX];break;default:;}Aau=
A.abf(Aau,Bq);}}}if(((X.U&0x200)===0x200)){if(Aat)A.pe(Ke.Em,Ke);Aat=((X.U&0x1000
)===0x1000);Ke=(C.Y.isPrototypeOf(X)?X:null);if(Aat){X.U=X.U&~0x1000;AtV=Ke.Ag1;
Qq=AtV;Adn=A.abh(Ke.M,Ke.Br);K4=Adn;Aau=Ce;AtW=Ke.Space+Ke.AU7;AtX=Ke.Space;Aat=
!((Adn[0]>=Adn[2])||(Adn[1]>=Adn[3]));AlS=null;switch(AtV){case 9:case 10:Qq=3;break;
case 11:case 12:Qq=4;break;case 5:case 6:Qq=1;break;case 7:case 8:Qq=2;break;default:;
}}if(Aat)this.Bj(Ke.M);}if(X===AlS){switch(AtV){case 9:case 11:Aau=[0,(Aau[1]+(K4[
3]-K4[1]))+AtX];break;case 10:case 12:Aau=[0,(Aau[1]-(K4[3]-K4[1]))-AtX];break;case
5:case 7:Aau=[(Aau[0]+(K4[2]-K4[0]))+AtW,0];break;case 6:case 8:Aau=[(Aau[0]-(K4[
2]-K4[0]))-AtW,0];break;default:;}AlS=null;}X=X.Ah;}if(Aat)A.pe(Ke.Em,Ke);this.U=
this.U&~0x2000;this.Bl([AiG[2]-AiG[0],AiG[3]-AiG[1]]);},JM:function(G){A.pe([this
,this.ABv],this);},ABv:function(G){var B;var BC0=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bgh();}if(((this.U&0x8000)===
0x8000)||BC0){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E7);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},Bbx:function(Aq){this.Bb(Aq);},ASE:function(){return!!this.FG;},ArL:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AEC=null;this.FG.ArS(Ce);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArS([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AEC=[this,this.BCS];}A.we(this,0);},A8T:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},C4:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0z:
function(Aq){this.C4(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bmg:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fq:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoI,AoJ,AoK,AoH){var B;var Azf=this.M;var RA=
Azf;if(AoI<0)AoI=0;if(AoI>255)AoI=255;if(AoJ<0)AoJ=0;if(AoJ>255)AoJ=255;if(AoK<0
)AoK=0;if(AoK>255)AoK=255;if(AoH<0)AoH=0;if(AoH>255)AoH=255;RA=[].concat(RA[0]-(
Math.max(AoI,this.AzO)&0xFF),RA.slice(1,4));RA=A.abN(RA,RA[2]+(Math.max(AoJ,this.
AzP)&0xFF));RA=A.abP(RA,RA[1]-(Math.max(AoK,this.AzQ)&0xFF));RA=[].concat(RA.slice(
0,3),RA[3]+(Math.max(AoH,this.AzN)&0xFF));if(AoI!==this.AzO){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RA;Az=A.abN(Az
,Azf[0]);this.Ab.Bj(Az);}this.AzO=AoI&0xFF;}if(AoJ!==this.AzP){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RA;Az=[].
concat(Azf[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzP=AoJ&0xFF;}if(AoK!==this.AzQ
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000
)){var Az=RA;Az=[].concat(Az.slice(0,3),Azf[1]);this.Ab.Bj(Az);}this.AzQ=AoK&0xFF;
}if(AoH!==this.AzN){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.
U&0x80000)===0x80000)){var Az=RA;Az=A.abP(Az,Azf[3]);this.Ab.Bj(Az);}this.AzN=AoH&
0xFF;}},BiO:function(CZ,aClip,aOffset,Ck,aBlend){},BiL:function(CZ,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hr;},GetMinimalSize:function(){return Ce;
},AVc:function(Iu,Og,Xl,Th,Ti,Ah_,Pa,Rs,LB,Lz,LA){var B;if(!this.Hd){this.AkM(Iu
,Og,Xl,Th,Ti,null,null,LB,Lz,LA);return;}var AlZ=this.Hd;var JJ=AlZ.Ah;if(((Iu.U&
0x10000)===0x10000)&&(this.Hd.C1!==Iu))throw new Error(IV);var Adt=A._NewObject(
C.AN3,0);var RD=AlZ.RD;var RM=null;var Mg=null;if(!!JJ){RM=JJ.RM;Mg=JJ.Mg;}if(!!
JJ&&!!AlZ.ApR)RM=AlZ.ApR;if(!!JJ&&!!Pa)Mg=Pa;if(!!Ah_)RD=Ah_;if(!Og)Og=A._GetAutoObject(
A.acl.AsG);if(!Xl)Xl=Og;if(!Ti)Ti=Th;if(!Th)Th=Ti;Adt.RD=Xl;Adt.Mg=Th;Adt.RM=Ti;
Adt.ApR=Rs;Adt.C1=Iu;Adt.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Adt;if(this.AV===
Iu)this.Bb(null);AlZ.C1.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===
0x4))Iu.Cs(0x10040,0x0);else Iu.Cs(0x10000,0x0);if(!!Mg){this.NT(JJ.C1,Mg.Aec(),
null,null,LA);this.NT(AlZ.C1,RD.Sd(),null,null,true);this.NT(Adt.C1,Og.Se(),LB,Lz
,true);}else if(!!RM){this.NT(JJ.C1,RM.Aed(),null,null,LA);this.NT(AlZ.C1,RD.Sd(
),null,null,true);this.NT(Adt.C1,Og.Se(),LB,Lz,true);}else if(!!RD){this.NT(AlZ.
C1,RD.Sd(),null,null,LA);this.NT(Adt.C1,Og.Se(),LB,Lz,true);}else this.NT(Adt.C1
,Og.Se(),LB,Lz,LA);},AqH:function(Iu,Ah_,Pa,Rs,LB,Lz,LA){var B;if(!this.Hd)return;
if(!Iu)return;var KG=this.Hd;var JJ=this.Hd.Ah;var ApX=null;while((!!KG&&(KG.C1!==
Iu))&&!!KG.Ah){ApX=KG;KG=JJ;JJ=KG.Ah;}if(!KG||(KG.C1!==Iu))throw new Error(Is);if(
!ApX){this.Hd=JJ;KG.Ah=null;}else{ApX.Ah=JJ;KG.Ah=null;}KG.C1.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JJ)&&!ApX)&&((JJ.C1.U&0x200000)===0x200000))JJ.C1.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JJ)&&!ApX)&&((JJ.C1.U&0x4)===0x4))JJ.C1.Cs(
0x40,0x0);var RD=KG.RD;var RM=null;var Mg=null;if(!!JJ)RM=JJ.RM;if(!!JJ&&!!KG.ApR
)RM=KG.ApR;if(!!JJ&&!!Rs)RM=Rs;if(!!ApX&&!!JJ)Mg=JJ.Mg;if((!!ApX&&!!JJ)&&!!Pa)Mg=
Pa;if(!!Ah_)RD=Ah_;if(!!Mg){this.NT(JJ.C1,Mg.Aec(),null,null,LA);this.NT(KG.C1,RD.
Sd(),LB,Lz,true);}else if(!!RM){this.NT(JJ.C1,RM.Aed(),null,null,LA);this.NT(KG.
C1,RD.Sd(),LB,Lz,true);}else this.NT(KG.C1,RD.Sd(),LB,Lz,LA);},AkM:function(Iu,Og
,Xl,Th,Ti,Pa,Rs,LB,Lz,LA){var B;if(!Iu)return;if(!!this.Hd&&(this.Hd.C1===Iu)){this.
AVc(Iu,Og,Xl,Th,Ti,null,Pa,Rs,LB,Lz,LA);return;}if(((Iu.U&0x10000)===0x10000))throw new
Error(IV);var KG=A._NewObject(C.AN3,0);if(!!this.Hd&&!this.Hd.Mg){if(!Rs)Rs=Pa;if(
!Pa)Pa=Rs;}var Mg=null;if(!!this.Hd)Mg=this.Hd.Mg;if(!!this.Hd&&!!Pa)Mg=Pa;if(!Og
)Og=A._GetAutoObject(A.acl.AsG);if(!Xl)Xl=Og;if(!Ti)Ti=Th;if(!Th)Th=Ti;KG.RD=Xl;
KG.Mg=Th;KG.RM=Ti;KG.ApR=Rs;if(this.AV===Iu)this.Bb(null);if(!!this.Hd&&((this.Hd.
C1.U&0x200000)===0x200000))this.Hd.C1.Cs(0x0,0x10);if(!!this.Hd)this.Hd.C1.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===0x4))Iu.Cs(0x10040,0x0);else Iu.
Cs(0x10000,0x0);KG.C1=Iu;KG.Ah=this.Hd;this.Hd=KG;if(!!Mg){this.NT(this.Hd.Ah.C1
,Mg.Aec(),null,null,LA);this.NT(Iu,Og.Se(),LB,Lz,true);}else this.NT(Iu,Og.Se(),
LB,Lz,LA);},A7g:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7U:function(
K2){var tmp=this;while(!!tmp){K2=A.abe(K2,tmp.M.slice(0,2));tmp=tmp.Ab;}return K2;
},BjJ:function(K2){var tmp=this;while(!!tmp){K2=A.abf(K2,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K2;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A21=!!this.XA&&(!!this.XA.FQ||!!this.XA.B8);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.Hd&&!A21)GD=this.Hd.C1.DispatchEvent(CN);if(!GD&&!!B0)
GD=B0.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G4(CN);if(!GD)GD=this.G4(CN);if(!GD
)GD=this.A39(CN);return GD;},BroadcastEventAtPosition:function(CN,HA,aFilter){var
B;var X=this.B9;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HA)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.
BroadcastEventAtPosition(CN,A.abe(HA,B0.M.slice(0,2)),aFilter);else GD=X.G4(CN);
}X=X.AJ;}if(!GD)GD=this.G4(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B9;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.BroadcastEvent(CN,aFilter
);else GD=X.G4(CN);}X=X.AJ;}if(!GD)GD=this.G4(CN);if(!GD)GD=this.A39(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},BjZ:function(){this.U=this.U|0x4000;A.pe([
this,this.ABv],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABv],this
);},Bj:function(Dc){var B;var B0=this;while(!!B0&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3
]))){var Aaq=B0.FG;if(!B0.Ab&&(B0!==this)){B0.Bj(Dc);return;}if(!!Aaq){var BAD=Aaq.
QO;Aaq.QO=A.wC(Aaq.QO,Dc);if(!A.aaY(BAD,Aaq.QO)){A.we(B0,0);A.we(Aaq,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Dc=A.abh(Dc,Az.slice(0,2));if(!!B0.FG||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FG){Az=[].concat(Az[0]-B0.AzO,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzQ);Az=A.abN(Az,Az[2]+B0.AzP);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzN);}Dc=A.lb(Dc,Az);}B0=B0.Ab;}},QJ:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agk=A.aaI(Ag.GetExtent());var X=Ag;var A1J=null;var
Bc3=0;var I1=0x10000;var AKV;if(((aFilter&0x10000)===0x10000))I1=0x0;var top=((GA===
4)||(GA===1))||(GA===6);var bottom=((GA===5)||(GA===3))||(GA===8);var left=((GA===
2)||(GA===1))||(GA===3);var right=((GA===7)||(GA===6))||(GA===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B9;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I1||!((B=I1)&&((X.U&B)===B
))))for(AKV=0;AKV<2;AKV++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKV){if((left&&(s[0]>s[1]))&&(Az[2]<Agk[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agk[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agk[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agk[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agk);var
Rv=Bq;if(Rv[0]<0)Rv=[-Rv[0],Rv[1]];if(Rv[1]<0)Rv=[Rv[0],-Rv[1]];if(((((!left||(Bq[
0]<=-Rv[1]))&&(!right||(Bq[0]>=Rv[1])))&&(!top||(Bq[1]<=-Rv[0])))&&(!bottom||(Bq[
1]>=Rv[0])))&&((Rv[0]>0)||(Rv[1]>0))){var RF=Bq[0];var RG=Bq[1];var Jn=Math.sqrt((
RF*RF)+(RG*RG));var AKu=0;if(!left&&!right)AKu=Jn/Rv[1];if(!top&&!bottom)AKu=Jn/
Rv[0];Jn=(Jn*AKu)*AKu;if((Jn<Bc3)||!A1J){Bc3=Jn;A1J=X;}}}}return A1J;},AqO:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;var I1=0x10000;
if(((aFilter&0x10000)===0x10000))I1=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I1||!((B=I1)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TT:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;
var I1=0x10000;if(((aFilter&0x10000)===0x10000))I1=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I1||!((B=I1)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACV:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlX=Ag.Ah;var Al_=Ag.AJ;var I1=0x10000;if(((aFilter&0x10000)===0x10000))I1=0x0;
while(!!AlX||!!Al_){if((!!AlX&&(!aFilter||((B=aFilter)&&((AlX.U&B)===B))))&&(!I1||
!((B=I1)&&((AlX.U&B)===B))))return AlX;if((!!Al_&&(!aFilter||((B=aFilter)&&((Al_.
U&B)===B))))&&(!I1||!((B=I1)&&((Al_.U&B)===B))))return Al_;if(!!AlX)AlX=AlX.Ah;if(
!!Al_)Al_=Al_.AJ;}return null;},Dd:function(aFilter){var B;var X=this.B8;var AE=
BD;var I1=0x10000;if(((aFilter&0x10000)===0x10000))I1=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I1||!((B=I1)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NT:function(KF,FP,LB,Lz
,LA){var B;if(!KF)return;if(!FP)throw new Error(O6);if((!!FP.P||!!FP.Ab)||!!FP.Pm
)throw new Error(P_);if(!!KF.Ab&&(KF.Ab!==this))throw new Error(P$);if(!this.XA)
this.XA=A._NewObject(C.AVh,0);FP.Ab=this;FP.P=KF;FP.AKG=Lz;FP.A3r=LB;if(!!KF.ApS
)KF.ApS.Pm.BoW(KF.ApS);KF.ApS=FP;KF.U=KF.U|0x20000;if((LA&&!!this.XA.B9)&&!this.
XA.B9.ARm())(A.acl.ACQ.isPrototypeOf(B=this.XA.B9)?B:null).A5a(FP);else{var Pm=A.
_NewObject(A.acl.ACQ,0);Pm.A5a(FP);this.XA.A$B(Pm,false);}},AhE:function(Ag,J_){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Ff);if(!!J_&&(J_.
Ab!==this))throw new Error(L5);if(Ag.Ah===J_)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JM],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JM],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B9=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;var GC=
null;var Ix=this.B9;var LS=Ag.J4;if(!!J_){GC=J_;Ix=J_.AJ;}if(!!GC&&(LS>GC.J4))LS=
GC.J4;if(!!Ix&&(LS<Ix.J4))LS=Ix.J4;if(LS!==Ag.J4){Ag.Ab=null;Ag.Ar8(LS);Ag.Ab=this;
}if(!J_){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.B9;Ag.Ah=null;this.B9=Ag;}else{Ag.
Ah=J_;Ag.AJ=J_.AJ;J_.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B8===J_)this.B8=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZF:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Ff);if(!Ag.Ah)return;var Ix=this.B9;var
LS=Ag.J4;while(!!Ix&&(Ix.J4>LS))Ix=Ix.AJ;if(((Ix===Ag)||!Ix)||(Ix.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JM],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JM],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Ix;Ag.Ah=Ix.Ah;Ix.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},J2:function(Ag,Qh){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Ff);var Ix=Ag;var GC=Ag;var LS=Ag.J4;while(((Qh>0)&&!!Ix.Ah)&&(Ix.Ah.J4<=LS
)){Ix=Ix.Ah;Qh=Qh-1;}while(((Qh<0)&&!!GC.AJ)&&(GC.AJ.J4>=LS)){GC=GC.AJ;Qh=Qh+1;}
if((Ix===Ag)&&(GC===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JM],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JM],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;if(Ix
!==Ag){Ag.Ah=Ix.Ah;Ag.AJ=Ix;Ix.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GC!==Ag){Ag.Ah=GC;
Ag.AJ=GC.AJ;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B9=Ag;if(!Ag.AJ)this.
B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HP:function(Ag){var B;if(
!Ag)throw new Error(Qa);if(Ag.Ab!==this)throw new Error(Ff);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JM],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JM],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
ACV(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag
)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AMe:function(Ag,J_
){var B;if(!Ag)throw new Error(J6);if(!!Ag.Ab)throw new Error(Od);if(!!J_&&(J_.Ab
!==this))throw new Error(L5);var GC=null;var Ix=this.B9;var LS=Ag.J4;if(!!J_){GC=
J_;Ix=J_.AJ;}if(!!GC&&(LS>GC.J4))LS=GC.J4;if(!!Ix&&(LS<Ix.J4))LS=Ix.J4;if(LS!==Ag.
J4){Ag.Ab=null;Ag.Ar8(LS);Ag.Ab=this;}if(!J_){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.
B9;this.B9=Ag;}else{Ag.Ah=J_;Ag.AJ=J_.AJ;J_.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B8===J_)this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOU()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JM],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JM],this);}},J:function(Ag,Qh){var B;if(!Ag)throw new Error(
J6);if(!!Ag.Ab)throw new Error(Od);var GC=null;var LS=Ag.J4;if(((Qh<0)&&!!this.B9
)&&(this.B9.J4>=LS)){GC=this.B9;Qh=Qh+1;}while((((Qh<0)&&!!GC)&&!!GC.AJ)&&(GC.AJ.
J4>=LS)){GC=GC.AJ;Qh=Qh+1;}if((!GC&&!!this.B9)&&(this.B9.J4>LS))GC=this.B9;while((
!!GC&&!!GC.AJ)&&(GC.AJ.J4>LS))GC=GC.AJ;if(!GC){Ag.Ab=this;Ag.AJ=this.B9;if(!!this.
B9)this.B9.Ah=Ag;if(!this.B8)this.B8=Ag;this.B9=Ag;}else{Ag.Ab=this;Ag.AJ=GC.AJ;
Ag.Ah=GC;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B8=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOU()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JM],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JM],this);}},A8V:function(){return this.
AV;},Awq:function(){return this.G9;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKv)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RJ:null,JI:null,Fv:A.abi(10,null
,null),AtI:null,Air:null,ABx:0,Ie:0,Mc:A.abi(10,0,null),AJV:A.abi(10,A.wg,null),
Xy:A.abi(10,0,null),Af0:A.abi(10,A.wf,null),AtN:A.abi(10,0,null),Aiq:A.abi(10,A.
wf,null),Xx:A.abi(10,A.wf,null),RC:A.abi(10,A.wf,null),Ade:A.abi(10,A.wf,null),EP:
0,AKh:0,AKg:0,Ou:A.abi(4,0,null),Kk:A.abi(4,A.wg,null),Kh:0,AAc:0,At2:0,AzZ:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Im:function(){return this;
},Kq:function(CZ,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.Avo(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kq.call(this,CZ,aClip
,aOffset,Ck,aBlend);},Cs:function(Rt,U7){var B;C.P.Cs.call(this,Rt,U7);if(!this.
Ab&&(((Rt&0x1)===0x1)||((U7&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rt&0x2)===0x2)||((U7&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArL:
function(E){var B;var BAB=this.FG;C.P.ArL.call(this,E);if(((BAB!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},C4:function(
E){var B;var BO=this.G9;C.P.C4.call(this,E);if(((BO!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvY=!!this.Ie;if(!!this.Ie)CN.Bs=this.Ie;}var GD=null;if(!!this.
JI){GD=this.JI.C1.DispatchEvent(CN);if(!GD)GD=this.G4(CN);if(!GD)GD=this.A39(CN);
this.Ie=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ie=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvY=!!this.Ie;if(!!this.Ie)CN.Bs=this.Ie;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ie=0;return GD;},Bj:function(Dc){var
B;if(this.ABx>0)throw new Error(Qb);if(!!this.FG&&!this.Ab){if(((B=this.FG.QO)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QO=A.wC(this.FG.QO
,Dc);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Dc=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Dc);return;}Dc=A.
lb(A.abh(Dc,this.M.slice(0,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;
var O;for(O=0;O<this.Kh;O=O+1)if(!(((B=A.lb(this.Kk.Get(O),Dc))[0]>=B[2])||(B[1]>=
B[3]))){this.Kk.Set(O,A.wC(this.Kk.Get(O),Dc));this.Ou.Set(O,A.aaH(this.Kk.Get(O
)));return;}if(this.Kh<3){this.Kk.Set(this.Kh,Dc);this.Ou.Set(this.Kh,A.aaH(Dc));
this.Kh=this.Kh+1;return;}var Ig;var RI;var AAb=0;var AAe=0;var Bc2=2147483647;this.
Kk.Set(this.Kh,Dc);this.Ou.Set(this.Kh,A.aaH(Dc));for(Ig=0;Ig<=this.Kh;Ig=Ig+1)for(
RI=Ig+1;RI<=this.Kh;RI=RI+1){var ALn=A.aaH(A.wC(this.Kk.Get(Ig),this.Kk.Get(RI))
);var BfT=((ALn<<8)/(this.Ou.Get(Ig)+this.Ou.Get(RI)))|0;if(BfT<Bc2){Bc2=BfT;AAb=
Ig;AAe=RI;}}this.Kk.Set(AAb,A.wC(this.Kk.Get(AAb),this.Kk.Get(AAe)));this.Ou.Set(
AAb,A.aaH(this.Kk.Get(AAb)));if(AAe!==this.Kh){this.Kk.Set(AAe,this.Kk.Get(this.
Kh));this.Ou.Set(AAe,this.Ou.Get(this.Kh));}},Bzd:function(){var LL=A._NewObject(
C.AqJ,0);LL.AvY=!!this.Ie;if(!!this.Ie)LL.Bs=this.Ie;return LL;},Ao6:function(){
var LL=A._NewObject(C.Aef,0);LL.AvY=!!this.Ie;if(!!this.Ie)LL.Bs=this.Ie;return LL;
},AtM:function(){var LL=A._NewObject(C.Au3,0);LL.AvY=!!this.Ie;if(!!this.Ie)LL.Bs=
this.Ie;return LL;},Bzh:function(G){var O;var Apm=false;for(O=0;O<10;O=O+1)if(!!
this.Fv.Get(O)){var pos=this.RC.Get(O);var B0=this.Fv.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fv.Get(O)!==this)){
var tmp=this.Fv.Get(O);this.EP=O;this.Fv.Set(O,null);tmp.G4(this.Ao6().InitializeUp(
O,this.Aiq.Get(O),this.Af0.Get(O),this.Xy.Get(O),this.Mc.Get(O)+1,this.Xx.Get(O)
,false,this.RC.Get(O),this.Ade.Get(O)));this.BroadcastEvent(this.AtM().InitializeUp(
O,this.Mc.Get(O)+1,false,tmp,this.RC.Get(O)),0x18);}else{this.Xy.Set(O,(this.Air.
Bs-this.AtN.Get(O))|0);if(this.Xy.Get(O)<10)this.Xy.Set(O,10);this.EP=O;this.Fv.
Get(O).G4(this.Ao6().InitializeHold(O,pos,this.Af0.Get(O),this.Xy.Get(O),this.Mc.
Get(O)+1,this.Xx.Get(O),this.RC.Get(O),this.Ade.Get(O)));Apm=true;}}if(!Apm)this.
Air.Ar(false);},GetFPS:function(){var ticksCount=0;var BdE=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKh&&(ticksCount>this.AKh))BdE=((this.AKg*1000)/((
ticksCount-this.AKh)|0))|0;this.AKg=0;this.AKh=ticksCount;return BdE;},Update:function(
){var B;if(!this.AtI)this.AtI=A._NewObject(A.Graphics.Canvas,0);this.AtI.ArS([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtI.Update();return this.UpdateGE20(this.AtI);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BD;var Agv=this.UpdateCanvas(
CZ,Ce);this.EndUpdate();return Agv;},EndUpdate:function(){if(this.Kh>0){this.AKg=
this.AKg+1;this.Kh=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Agv=BD;var ByW=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var O;var Ig=this.Kh;this.ABx=this.
ABx+1;CZ.C1=this;for(O=0;(O<Ig)&&(O<4);O=O+1)if(this.Ou.Get(O)>0){this.Kq(CZ,A.abg(
this.Kk.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agv=A.wC(Agv,A.lb(ByW
,this.Kk.Get(O)));}else Ig=Ig+1;CZ.C1=null;this.ABx=this.ABx-1;if(!((Agv[0]>=Agv[
2])||(Agv[1]>=Agv[3])))return A.abg(Agv,aOffset);else return Agv;},GetUpdateRegion:
function(AJf){var O;var Ig=this.Kh;if(AJf<0)return BD;for(O=0;(O<Ig)&&(O<4);O=O+
1)if(!this.Ou.Get(O)){Ig=Ig+1;AJf=AJf+1;}else if(O===AJf)return this.Kk.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kh&&!A.aaY(this.Kk.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var BgX=A.abi(3,A.wg,null);var BgW=this.Kh;for(O=0;
O<BgW;O++)BgX.Set(O,this.Kk.Get(O));for(O=0;O<BgW;O++){var Bgc=A.abh(BgX.Get(O),
this.M.slice(0,2));var Bgd=this.AuL(Bgc);if(!A.aaY(Bgc,Bgd))this.Bj(A.abg(Bgd,this.
M.slice(0,2)));}}var Ig;var RI;for(Ig=0;Ig<(this.Kh-1);Ig++)if(this.Ou.Get(Ig)>0
)for(RI=Ig+1;RI<this.Kh;RI++)if(this.Ou.Get(RI)>0){var ALn=A.aaH(A.wC(this.Kk.Get(
Ig),this.Kk.Get(RI)));if(((ALn-this.Ou.Get(Ig))-this.Ou.Get(RI))<0){this.Kk.Set(
Ig,A.wC(this.Kk.Get(Ig),this.Kk.Get(RI)));this.Ou.Set(Ig,ALn);this.Ou.Set(RI,0);
}}for(O=this.Kh-1;O>=0;O--)if(!this.Ou.Get(O))this.Kh=this.Kh-1;return this.Kh;}
,DoesNeedUpdate:function(){if(this.Kh>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Ce,aSize));if(this.AzZ)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A0$){if(A0$===this.AzZ
)return false;this.AzZ=A0$;if(!A0$){if(!!this.JI)this.JI.C1.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JI)this.JI.C1.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qi){this.Ie=Qi;},DriveKeyboardHitting:function(
KE,Ay1,Tg){var B;var A3_=!!this.RJ;if(!!this.RJ&&((!Tg||(this.AAc!==KE))||(this.
At2!==Ay1))){var LL=null;var X=(C.Cj.isPrototypeOf(B=this.RJ)?B:null);var D5=(C.
BK.isPrototypeOf(B=this.RJ)?B:null);if(!!this.AAc)LL=A._NewObject(C.KeyEvent,0).
Initialize(this.AAc,false);if(this.At2!==0x00)LL=A._NewObject(C.KeyEvent,0).Initialize2(
this.At2,false);if(!!D5)D5.G4(LL);else if(!!X)X.G4(LL);this.AAc=0;this.At2=0x00;
this.RJ=null;}if(!!this.RJ){var LL=null;var X=(C.Cj.isPrototypeOf(B=this.RJ)?B:null
);var D5=(C.BK.isPrototypeOf(B=this.RJ)?B:null);if(!!KE)LL=A._NewObject(C.KeyEvent
,0).Initialize(KE,true);if(this.At2!==0x00)LL=A._NewObject(C.KeyEvent,0).Initialize2(
Ay1,true);if(!!D5)D5.G4(LL);else if(!!X)X.G4(LL);}if(!this.RJ&&Tg){if(!!KE)this.
RJ=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KE,true));if(Ay1!==0x00
)this.RJ=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ay1,true));if(
!(C.BK.isPrototypeOf(B=this.RJ)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RJ)?B:null)
)this.RJ=null;this.AAc=KE;this.At2=Ay1;A3_=A3_||!!this.RJ;}this.Ie=0;return A3_;
},DriveCursorMovement:function(Fh){return this.DriveMultiTouchMovement(this.EP,Fh
);},DriveMultiTouchMovement:function(BF,Fh){if((BF<0)||(BF>9)){this.Ie=0;return false;
}var Fx=A.abe(Fh,this.RC.Get(BF));this.RC.Set(BF,Fh);if(!this.Fv.Get(BF)||A.aaX(
Fx,Ce)){this.Ie=0;return false;}var pos=Fh;var B0=this.Fv.Get(BF).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fv.Get(BF)!==
this)){var tmp=this.Fv.Get(BF);this.EP=BF;this.Fv.Set(BF,null);tmp.G4(this.Ao6().
InitializeUp(BF,this.Aiq.Get(BF),this.Af0.Get(BF),this.Xy.Get(BF),this.Mc.Get(BF
)+1,this.Xx.Get(BF),false,this.RC.Get(BF),this.Ade.Get(BF)));this.BroadcastEvent(
this.AtM().InitializeUp(BF,this.Mc.Get(BF)+1,false,tmp,Fh),0x18);}else{this.Aiq.
Set(BF,pos);this.EP=BF;this.Fv.Get(BF).G4(this.Bzd().Initialize(BF,pos,this.Af0.
Get(BF),Fx,this.Xy.Get(BF),this.Mc.Get(BF)+1,this.Xx.Get(BF),Fh,this.Ade.Get(BF)
));}this.Ie=0;return true;},DriveCursorHitting:function(Tg,BF,Fh){return this.DriveMultiTouchHitting(
Tg,BF,Fh);},DriveMultiTouchHitting:function(Tg,BF,Fh){if((BF<0)||(BF>9)){this.Ie=
0;return false;}var ticksCount=this.Ie;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BB_=this.Ie;this.DriveMultiTouchMovement(BF,Fh);Fh=this.RC.Get(BF);
this.Ie=BB_;if(Tg)this.Ade.Set(BF,Fh);if(Tg&&!this.Fv.Get(BF)){var JH;var pos=Fh;
if(A.wa(this.AJV.Get(BF),Fh)&&((ticksCount-this.AtN.Get(BF))<=250))this.Mc.Set(BF
,this.Mc.Get(BF)+1);else this.Mc.Set(BF,0);this.AJV.Set(BF,A.abh(ML,Fh));this.AtN.
Set(BF,ticksCount);if(!!this.JI)JH=this.Yj(A.abh(ML,Fh),BF,this.Mc.Get(BF)+1,this.
JI.C1,null,0x0);else JH=this.Yj(A.abh(ML,Fh),BF,this.Mc.Get(BF)+1,null,null,0x0);
if(!!JH){this.BroadcastEvent(this.AtM().InitializeDown(BF,this.Mc.Get(BF)+1,false
,JH.Cj,Fh),0x18);this.Fv.Set(BF,JH.Cj);this.Xx.Set(BF,JH.DG);}else{this.Fv.Set(BF
,null);this.Xx.Set(BF,Ce);this.Ie=0;return false;}var B0=JH.Cj.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.Af0.Set(BF,pos);this.Aiq.
Set(BF,pos);this.Xy.Set(BF,0);this.Air.Ar(true);this.EP=BF;this.Fv.Get(BF).G4(this.
Ao6().InitializeDown(BF,pos,this.Mc.Get(BF)+1,this.Xx.Get(BF),false,Fh));this.Ie=
0;return true;}if(!Tg&&!!this.Fv.Get(BF)){var pos=Fh;var B0=this.Fv.Get(BF).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aiq.
Get(BF);this.EP=BF;var tmp=this.Fv.Get(BF);this.Fv.Set(BF,null);tmp.G4(this.Ao6(
).InitializeUp(BF,pos,this.Af0.Get(BF),this.Xy.Get(BF),this.Mc.Get(BF)+1,this.Xx.
Get(BF),false,Fh,this.Ade.Get(BF)));this.BroadcastEvent(this.AtM().InitializeUp(
BF,this.Mc.Get(BF)+1,false,tmp,Fh),0x18);this.Ie=0;return true;}this.Ie=0;return false;
},AUB:function(Aam,Bcm,Ac6,Ac5){if(Aam===this)Aam=null;if(!!!Aam&&!!this.JI)Aam=
this.JI.C1;if(!this.Fv.Get(this.EP))return;var JH;JH=this.Yj(A.abh(ML,this.RC.Get(
this.EP)),this.EP,1,Aam,Ac6,Ac5);if(!!JH&&(this.Fv.Get(this.EP)!==JH.Cj))this.ANT(
JH.Cj,JH.DG);if(!JH&&(this.Fv.Get(this.EP)!==Bcm))this.ANT(Bcm,Ce);},ANT:function(
Aam,Xm){if(!this.Fv.Get(this.EP)||(this.Fv.Get(this.EP)===Aam))return;var tmp=this.
Fv.Get(this.EP);this.Fv.Set(this.EP,null);tmp.G4(this.Ao6().InitializeUp(this.EP
,this.Aiq.Get(this.EP),this.Af0.Get(this.EP),this.Xy.Get(this.EP),this.Mc.Get(this.
EP)+1,this.Xx.Get(this.EP),true,this.RC.Get(this.EP),this.Ade.Get(this.EP)));this.
BroadcastEvent(this.AtM().InitializeUp(this.EP,this.Mc.Get(this.EP)+1,true,tmp,this.
RC.Get(this.EP)),0x18);var pos=this.RC.Get(this.EP);var B0=null;if(!!Aam)B0=Aam.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aam
!==this)){this.Fv.Set(this.EP,null);return;}this.BroadcastEvent(this.AtM().InitializeDown(
this.EP,this.Mc.Get(this.EP)+1,true,Aam,this.RC.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fv.Set(this.EP,Aam);this.Xx.Set(
this.EP,Xm);this.Af0.Set(this.EP,pos);this.Aiq.Set(this.EP,pos);this.Mc.Set(this.
EP,0);this.Xy.Set(this.EP,0);this.AtN.Set(this.EP,ticksCount);this.Ade.Set(this.
EP,this.RC.Get(this.EP));this.Fv.Get(this.EP).G4(this.Ao6().InitializeDown(this.
EP,pos,this.Mc.Get(this.EP)+1,this.Xx.Get(this.EP),true,this.Ade.Get(this.EP)));
},AOU:function(){if(!!this.JI)return this.JI.C1;return null;},ACN:function(KF){var
B;if(!KF)throw new Error(S$);if(!((KF.U&0x80)===0x80))throw new Error(UW);if(this.
JI.C1===KF)this.JI=this.JI.Ah;else{var AzY=this.JI;while(AzY.Ah.C1!==KF)AzY=AzY.
Ah;AzY.Ah=AzY.Ah.Ah;}KF.Cs(0x0,0xD0);if(this.AzZ){if(!!this.JI)this.JI.C1.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AM0:function(KF){var B;var As=A._NewObject(C.A76
,0);if(!KF)throw new Error(Z5);if(KF===null)throw new Error(W8);if(((KF.U&0x80)===
0x80))throw new Error(It);if(!!this.JI)this.JI.C1.Cs(0x0,0x50);else this.Cs(0x0,
0x50);As.Ah=this.JI;As.C1=KF;this.JI=As;if(this.AzZ)KF.Cs(0xD0,0x0);else KF.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Air={
I:this},0);(this.Fv=[]).__proto__=C.Root.Fv;(this.Mc=[]).__proto__=C.Root.Mc;(this.
AJV=[]).__proto__=C.Root.AJV;(this.Xy=[]).__proto__=C.Root.Xy;(this.Af0=[]).__proto__=
C.Root.Af0;(this.AtN=[]).__proto__=C.Root.AtN;(this.Aiq=[]).__proto__=C.Root.Aiq;(
this.Xx=[]).__proto__=C.Root.Xx;(this.RC=[]).__proto__=C.Root.RC;(this.Ade=[]).__proto__=
C.Root.Ade;(this.Ou=[]).__proto__=C.Root.Ou;(this.Kk=[]).__proto__=C.Root.Kk;this.
__proto__=C.Root;this.U=0x10007F;this.Air.PV(10);this.Air.ME=[this,this.Bzh];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Air._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Air._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RJ)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JI)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fv,D);if((B=this.
AtI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Air)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvY:false,Init:function(aArg){this.Bs=
this.Avw();},Avw:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(KE,Tg){this.CO=0;this.DQ=KE;this.Down=Tg;if((KE>=0x30)&&(KE<=
0x39))this.CO=(10+KE)-48;if((KE>=0x41)&&(KE<=0x5A))this.CO=(105+KE)-65;if((KE>=0x61
)&&(KE<=0x7A))this.CO=(105+KE)-97;if(KE===0x20)this.CO=131;if(!this.CO)switch(KE
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KE,Tg){this.CO=KE;this.
Down=Tg;this.DQ=0x00;var A1P=KE-10;var AtH=KE-105;if((A1P>=0)&&(A1P<=9))this.DQ=(
48+A1P)&0xFFFF;if((AtH>=0)&&(AtH<=25))this.DQ=(65+AtH)&0xFFFF;if(KE===131)this.DQ=
0x20;if(this.DQ===0x00)switch(KE){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bj4:function(Bcb){switch(
Bcb){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bcb===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARE={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARE;},_className:
"Core::LanguageEvent"};C.Au3={AxQ:null,LW:A.wf,N_:0,IK:0,Down:false,NK:false,InitializeUp:
function(BF,Oh,AoE,A1r,Aal){this.Down=false;this.IK=BF;this.N_=Oh;this.LW=Aal;this.
AxQ=A1r;this.NK=AoE;return this;},InitializeDown:function(BF,Oh,AoE,A1r,Aal){this.
Down=true;this.IK=BF;this.N_=Oh;this.LW=Aal;this.AxQ=A1r;this.NK=AoE;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au3;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aef={Ag3:A.wf,LW:A.wf,N_:0,Jv:
0,NV:A.wf,H1:A.wf,IK:0,Down:false,NK:false,InitializeHold:function(BF,All,Ay4,Ay5
,Oh,Xm,Aal,Ay3){this.Down=true;this.IK=BF;this.H1=A.abf(All,Xm);this.NV=A.abf(Ay4
,Xm);this.Jv=Ay5;this.N_=Oh;this.LW=Aal;this.Ag3=Ay3;return this;},InitializeUp:
function(BF,All,Ay4,Ay5,Oh,Xm,AoE,Aal,Ay3){this.Down=false;this.IK=BF;this.H1=A.
abf(All,Xm);this.NV=A.abf(Ay4,Xm);this.Jv=Ay5;this.N_=Oh;this.NK=AoE;this.LW=Aal;
this.Ag3=Ay3;return this;},InitializeDown:function(BF,All,Oh,Xm,AoE,Aal){this.Down=
true;this.IK=BF;this.H1=A.abf(All,Xm);this.NV=A.abf(All,Xm);this.Jv=0;this.N_=Oh;
this.NK=AoE;this.LW=Aal;this.Ag3=Aal;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Core::CursorEvent"};C.AqJ={
Ag3:A.wf,LW:A.wf,N_:0,Jv:0,DG:A.wf,NV:A.wf,H1:A.wf,IK:0,Initialize:function(BF,All
,Ay4,aOffset,Ay5,Byh,Xm,Aal,Ay3){this.IK=BF;this.H1=A.abf(All,Xm);this.NV=A.abf(
Ay4,Xm);this.DG=aOffset;this.Jv=Ay5;this.N_=Byh;this.LW=Aal;this.Ag3=Ay3;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqJ;},_className:
"Core::DragEvent"};C.Y={BX:null,NC:null,Em:null,Br:A.wf,AU7:0,Space:0,Ag1:0,Kq:function(
CZ,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap5=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap5=A.wC(Ap5,X.GetClipping());
Az=A.wC(Az,Ap5);}return Az;},Cs:function(Rt,U7){var B;var Ts=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U7&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Eu.Cs.call(this,Rt,U7);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rt&0x80000)===
0x80000))&&!((Ts&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al0=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKD=[
E[2]-E[0],E[3]-E[1]];var Ap1=!A.aaX(Al0,AKD);var Fx=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fx,Ce)&&!Ap1){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ank(Fx,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((Ap1&&(Al0[0]>0))&&(Al0[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
NE!==this))X.Ev=null;if(!X.Ev&&((X.PO!==0x14)||!!this.Ag1))X.At0(Bd,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&Ap1){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JM],this);}}},Bf8:function(){var B;if((!this.Ag1||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A19=((this.U&0x1000)===0x1000);for(;!!X&&!A19;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A19=true;if(((X.U&0x200)===
0x200))break;}if(A19){this.U=this.U&~0x4000;this.Ab.Bgh();}},ApM:function(G){var
B;this.BX.Q=null;this.BX.Qw=null;this.BX=null;(B=this.NC)?B[1].call(B[0],this):null;
},Gb:function(E){var B;var Fx=A.abe(E,this.Br);if(A.aaX(Fx,Ce))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ank(Fx,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.Em,this);},A_R:function(E){var B;if(E<0)E=0;if(E===this.AU7)return;this.AU7=
E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JM],this);}},Bn3:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JM],this);}},JW:function(E){var B;if(E===this.Ag1)return;
this.Ag1=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JM],this);}},Vz:function(AcZ,E8){var AtH=this.Dd(0x1);var Rz=this.M;var
Vj=A.abe(AtH.slice(0,2),Rz.slice(0,2));var Me=A.abe(AtH.slice(2,4),Rz.slice(2,4)
);var Bq=Ce;if((Vj[0]>0)&&(Me[0]>Vj[0]))Bq=[Vj[0],Bq[1]];else if((Vj[0]>0)&&(Me[
0]>0))Bq=[Me[0],Bq[1]];if((Me[0]<0)&&(Vj[0]<Me[0]))Bq=[Me[0],Bq[1]];else if((Me[
0]<0)&&(Vj[0]<0))Bq=[Vj[0],Bq[1]];if((Vj[1]>0)&&(Me[1]>Vj[1]))Bq=[Bq[0],Vj[1]];else
if((Vj[1]>0)&&(Me[1]>0))Bq=[Bq[0],Me[1]];if((Me[1]<0)&&(Vj[1]<Me[1]))Bq=[Bq[0],Me[
1]];else if((Me[1]<0)&&(Vj[1]<0))Bq=[Bq[0],Vj[1]];if(A.aaX(Bq,Ce)){(E8)?E8[1].call(
E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qw=null;this.NC=null;}this.BX=AcZ;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E8)?E8[
1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this,this.
Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qw=[this,this.
ApM];this.BX.Ae$(false);this.BX.Ar(true);this.NC=E8;}},HI:function(Ag,Ac3,AcZ,E8
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UX);this.Bf8();var Az=Ag.GetExtent();var Bd=this.M;var LP=A.lb(Az,Bd);if((!Ac3&&
!((LP[0]>=LP[2])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az))){(E8)?E8[1].call(E8[0],this
):null;return;}var Bq=Ce;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qw=null;this.NC=null;}this.BX=AcZ;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E8
)?E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qw=[this
,this.ApM];this.BX.Ae$(false);this.BX.Ar(true);this.NC=E8;}},Bjv:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TT:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I1=0x10000;if(((aFilter&0x10000)===0x10000))I1=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I1||!((B=I1)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dd:function(aFilter){var B;var X=this.Ah;var AE=BD;var I1=0x10000;this.Bf8();if(((
aFilter&0x10000)===0x10000))I1=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I1||!((B=I1)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anv:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HB:null,BX:null,Cj:null,WT:null,NC:null,Em:null,Hm:null,Tp:-1,To:0,Jr:-1,Ht:0,AiJ:
8,Op:0,UB:0,AcK:A.wf,G6:-1,Br:0,Gt:-1,OU:0,GO:24,AY:0,Ll:null,NS:false,At3:false
,AVc:function(Iu,Og,Xl,Th,Ti,Ah_,Pa,Rs,LB,Lz,LA){throw new Error(Z6);},AqH:function(
Iu,Ah_,Pa,Rs,LB,Lz,LA){throw new Error(W9);},AkM:function(Iu,Og,Xl,Th,Ti,Pa,Rs,LB
,Lz,LA){throw new Error(Z7);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Ll,0))?B:null);if(!!this.B9)this.B9.Ah=this.Cj;else this.B8=
this.Cj;this.Cj.AJ=this.B9;this.B9=this.Cj;this.Cj.Ab=this;this.AcK=[(B=this.M)[
2]-B[0],this.GO];(B=this.Hm)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Cj.G4(CN
);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B8=null;this.B9=this.Cj.AJ;this.Cj.
AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Ll){A.pe(this.Em,this);return;
}this.At3=true;var AAT=0;if(!this.NS)AAT=this.OU;var FT=this.Al9(-AAT-this.Br,1);
var G0=this.Al9(((((B=this.M)[3]-B[1])-AAT)-this.Br)-1,2);var CB=G0-FT;if(CB<1)CB=
1;var Ail=(CB/2)|0;var Aim=(CB/3)|0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FT<this.Ht){FT=
FT-Ail;G0=G0+Aim;}else if(G0>this.Jr){FT=FT-Aim;G0=G0+Ail;}else{FT=this.Ht;G0=this.
Jr;}if(!this.NS){if(FT>=this.AY){FT=0;G0=-1;}else if(G0<0){FT=0;G0=-1;}if(G0>=this.
AY)G0=this.AY-1;if(FT<0)FT=0;}else if(this.AY<=0){FT=0;G0=-1;}var AiZ=this.Ht;var
Ai0=this.Jr;var Apz=0;var ApA=-1;if(FT>AiZ)AiZ=FT;if(G0<Ai0)Ai0=G0;if(AiZ<=Ai0){
while((this.Jr<G0)&&(this.Ht<AiZ)){this.AdG();this.Azt();}while((this.Ht>FT)&&(this.
Jr>Ai0)){this.AA6();this.Azs();}}else{this.Jr=(this.Jr-this.Ht)+FT;this.Ht=FT;Apz=
this.Ht;ApA=this.Jr;}while(this.Ht<FT)this.AdG();while(this.Jr>G0)this.AA6();while(
this.Ht>FT)this.Azs();while(this.Jr<G0)this.Azt();var Aa=this.B8;var inx=this.Ht;
var pos=[0,(AAT+this.Br)+this.Jo(inx,0)];var BI=(B=this.M)[3]-B[1];var AlI=null;
var Bg7=(B=this.M)[2]-B[0];while(!!Aa){var IB=inx;if(this.NS){if(IB<0)IB=this.AY-(-
IB%this.AY);if(IB>0)IB=IB%this.AY;}var AdH=((IB>=this.To)&&(IB<=this.Tp))||((inx>=
Apz)&&(inx<=ApA));var Apf=Aa.GetExtent();var Bq=A.abe(pos,Apf.slice(0,2));if(AdH
)this.UB=this.GO;else this.UB=Apf[3]-Apf[1];var A2P=pos[1];var A2Q=pos[1]+this.UB;
if(!A.aaX(Bq,Ce))Aa.Ank(Bq,true);if((AdH&&(A2P<BI))&&(A2Q>0)){this.Cj=Aa;this.G6=
IB;this.AcK=[Bg7,this.UB];(B=this.Hm)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UB];}inx=this.Ht;Aa=this.B8;pos=[0,(AAT+this.Br)+this.Jo(
inx,0)];while(!!Aa){var IB=inx;if(this.NS){if(IB<0)IB=this.AY-(-IB%this.AY);if(IB>
0)IB=IB%this.AY;}var AdH=((IB>=this.To)&&(IB<=this.Tp))||((inx>=Apz)&&(inx<=ApA)
);if(AdH)this.UB=this.GO;else this.UB=(B=Aa.GetExtent())[3]-B[1];var A2P=pos[1];
var A2Q=pos[1]+this.UB;if(AdH&&!((A2P<BI)&&(A2Q>0))){this.Cj=Aa;this.G6=IB;this.
AcK=[Bg7,this.UB];(B=this.Hm)?B[1].call(B[0],this):null;}if(((IB===this.Gt)&&this.
NS)&&!!AlI){var Rz=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rz))>A.aaH(A.lb(AlI.GetExtent(),Rz)))AlI=Aa;}else if(IB===this.Gt)AlI=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UB];}this.To=0;this.Tp=-1;this.Cj=null;this.G6=-
1;this.Bb(AlI);this.At3=false;A.pe(this.Em,this);},QJ:function(Ag,GA,aFilter){return null;
},AqO:function(Ag,aFilter){return null;},TT:function(Ag,aFilter){return null;},ACV:
function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NT:function(
KF,FP,LB,Lz,LA){throw new Error(W_);},AhE:function(Ag,J_){throw new Error(Z8);},
ZF:function(Ag){throw new Error(Z9);},J2:function(Ag,Qh){throw new Error(UY);},HP:
function(Ag){throw new Error(W$);},AMe:function(Ag,J_){throw new Error(O7);},J:function(
Ag,Qh){throw new Error(Z_);},Jo:function(Ha,A02){return Ha*this.GO;},Al9:function(
Fh,A02){return(Fh/this.GO)|0;},AA6:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jr=this.Jr-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azt:function(
){var B;var Aa=this.HB;var Adq=this.Ll;var AdK=++this.Jr;if(this.NS){if(AdK<0)AdK=
this.AY-(-AdK%this.AY);if(AdK>0)AdK=AdK%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.AiJ++;
}this.UB=this.GO;this.G6=AdK;this.AcK=[(B=this.M)[2]-B[0],this.UB];this.Cj=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B9)this.B9.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(AdK===this.Gt
)this.Bb(Aa);return Aa;},AdG:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azs:function(){var
B;var Aa=this.HB;var Adq=this.Ll;var M4=--this.Ht;if(this.NS){if(M4<0)M4=this.AY-(-
M4%this.AY);if(M4>0)M4=M4%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adq)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HB===
Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{Aa=(C.Cj.isPrototypeOf(B=
A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.AiJ++;}this.UB=this.GO;
this.G6=M4;this.AcK=[(B=this.M)[2]-B[0],this.UB];this.Cj=Aa;(B=this.Hm)?B[1].call(
B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.B8.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(M4===this.Gt)this.Bb(Aa);return Aa;
},ApM:function(G){var B;this.BX.Q=null;this.BX.Qw=null;this.BX=null;(B=this.NC)?
B[1].call(B[0],this):null;},BBv:function(G){this.Gb(this.WT.DG[1]);},BBw:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.BX=
null;}if(!this.NS){var AE=this.AqV(0,this.AY-1);var Agk=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OU);if(AE[0]>Agk[0])AE=[].concat(Agk[0],AE.slice(1,4));if(AE[1]>Agk[
1])AE=A.abP(AE,Agk[1]);var Fx=AE[1]-this.M[1];var A26=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A26>0)A26=0;this.WT.DG=[0,this.Br];this.WT.Gp=[0,(this.Br+A26)-Fx];this.
WT.F_=[0,this.Br-Fx];}else{var Fx=32000-(32000%this.GO);this.WT.DG=[0,this.Br];this.
WT.Gp=[0,this.Br-Fx];this.WT.F_=[0,this.Br+Fx];}},ATh:function(E){var B;if(this.
NS===E)return;this.NS=E;while(!!this.AdG());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw_:function(E){if(E===this.WT)return;if(!!E&&!!E.Aue){A.ab5(
"%s%*%s",Oe,E,Rn);throw new Error(Xa);}if(!!this.WT){this.WT.AKP=null;this.WT.Aue=
null;}this.WT=E;if(!!E){E.AKP=[this,this.BBw];E.Aue=[this,this.BBv];}},Gb:function(
E){var B;if(this.NS&&(this.AY>0)){var HD=this.Jo(this.AY,3);if(E<0)E=HD-(-E%HD);
if(E>0)E=E%HD;if(E>0)E=E-HD;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(E){if(E<0)E=-1;if(E===this.Gt)return;
this.Gt=E;this.Am();},A_D:function(E){var B;if(E<0)E=0;if(E===this.OU)return;this.
OU=E;if(!this.NS){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae8:function(
E){var B;if(E<1)E=1;if(E===this.GO)return;this.GO=E;while(!!this.AdG());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JA:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NS){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OU+this.Br)+this.Jo(E,3));AE=A.abP(AE
,(this.OU+this.Br)+this.Jo(this.AY,3));}else{AE=A.abP(AE,(this.OU+this.Br)+this.
Jo(E,3));AE=[].concat(AE.slice(0,3),(this.OU+this.Br)+this.Jo(this.AY,3));}}else
while(!!this.AdG());this.AY=E;this.Am();this.Bj(AE);},N4:function(E){var B;if(E===
this.Ll)return;this.Ll=E;while(!!this.AdG());this.HB=null;this.Op=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjI:function(Ha){if(this.At3)return null;
if((Ha<0)||(Ha>=this.AY))return null;if(!this.NS){if((Ha<this.Ht)||(Ha>this.Jr))
return null;var X=this.B8;while(Ha>this.Ht){X=X.Ah;Ha=Ha-1;}return X;}else{var M4=
this.Ht;if(M4<0)M4=this.AY-(-M4%this.AY);if(M4>0)M4=M4%this.AY;var X=this.B8;while(
!!X){if((M4%this.AY)===Ha)return X;X=X.Ah;M4=M4+1;}return null;}},ABO:function(AcZ
,E8){var B;if(this.NS){(E8)?E8[1].call(E8[0],this):null;return;}var AKi=this.Br;
var BdF=((((B=this.M)[3]-B[1])-this.Br)-this.OU)-this.Jo(this.AY,3);var Bq=0;if(
AKi>0)Bq=-AKi;else if(BdF>0)Bq=BdF;if((Bq>0)&&(Bq>-AKi))Bq=-AKi;if(!Bq){(E8)?E8[
1].call(E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qw=null;this.NC=null;}this.BX=AcZ;if(!this.BX){this.Gb(this.Br+Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qw=[this,this.
ApM];this.BX.Ae$(false);this.BX.Ar(true);this.NC=E8;}},HI:function(Ha,Ac3,AcZ,E8
){var B;if((Ha<0)||(Ha>=this.AY))return;var Az=this.AqV(Ha,Ha);var Bd=this.M;var
LP=A.lb(Az,Bd);if((!Ac3&&!((LP[0]>=LP[2])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az))
){(E8)?E8[1].call(E8[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qw=null;this.NC=null;}this.BX=AcZ;if(!this.BX){this.Gb(this.Br-Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anv,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qw=[this,this.
ApM];this.BX.Ae$(false);this.BX.Ar(true);this.NC=E8;}},BjA:function(){return BD;
},AOW:function(){if((this.OU<=0)||this.NS)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OU);return AE;},A66:function(Fh
){if(((this.AY<=0)||(Fh[0]<this.M[0]))||(Fh[0]>=this.M[2]))return-1;Fh=A.abe(Fh,
this.M.slice(0,2));if(!this.NS){var Aa=(Fh[1]-this.Br)-this.OU;if(Aa>0)Aa=this.Al9(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fh[1]-this.Br;if(Aa>0)
Aa=this.Al9(Aa,0);if(Aa<0)Aa=this.Al9(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqV:function(J8,L9){if(J8<0)J8=0;if(L9>=this.AY)L9=
this.AY-1;if(J8>L9)return BD;var AE=this.M;var Bq=this.Br;if(this.NS){var HD=this.
Jo(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;}else Bq=
Bq+this.OU;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jo(L9+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jo(J8,0));return AE;},AbF:function(J8,L9){var B;if(J8<0)J8=0;if(J8>L9
)return;if(this.To>this.Tp){this.To=J8;this.Tp=L9;}else{if(J8<this.To)this.To=J8;
if(L9>this.Tp)this.Tp=L9;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NS){
AE=A.abP(AE,(this.OU+this.Br)+this.Jo(J8,0));AE=[].concat(AE.slice(0,3),(this.OU+
this.Br)+this.Jo(L9+1,0));}else if((this.Jo(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HD=this.Jo(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(
Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;AE=A.abP(AE,Bq+this.Jo(J8,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jo(L9+1,0));}this.Am();this.Bj(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(Xb);
this.Ll=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WT)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dz={HB:null
,BX:null,Cj:null,NC:null,Hm:null,Tp:-1,To:0,Jr:-1,Ht:0,AiJ:8,Op:0,SO:0,AcK:A.wf,
G6:-1,Br:0,Gt:-1,We:24,AY:0,Ll:null,At3:false,AVc:function(Iu,Og,Xl,Th,Ti,Ah_,Pa
,Rs,LB,Lz,LA){throw new Error(Ta);},AqH:function(Iu,Ah_,Pa,Rs,LB,Lz,LA){throw new
Error(Z$);},AkM:function(Iu,Og,Xl,Th,Ti,Pa,Rs,LB,Lz,LA){throw new Error(Aaa);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV
){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Ll,0))?B:null);
if(!!this.B9)this.B9.Ah=this.Cj;else this.B8=this.Cj;this.Cj.AJ=this.B9;this.B9=
this.Cj;this.Cj.Ab=this;this.AcK=[this.SO,(B=this.M)[3]-B[1]];(B=this.Hm)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Cj.G4(CN);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B8=null;
this.B9=this.Cj.AJ;this.Cj.AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Ll
)return;this.At3=true;var FT=this.Al9(0-this.Br,1);var G0=this.Al9((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=G0-FT;if(CB<1)CB=1;var Ail=(CB/2)|0;var Aim=(CB/3)|
0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FT<this.Ht){FT=FT-Ail;G0=G0+Aim;}else if(G0>this.
Jr){FT=FT-Aim;G0=G0+Ail;}else{FT=this.Ht;G0=this.Jr;}if(FT>=this.AY){FT=0;G0=-1;
}else if(G0<0){FT=0;G0=-1;}if(G0>=this.AY)G0=this.AY-1;if(FT<0)FT=0;var AiZ=this.
Ht;var Ai0=this.Jr;var Apz=0;var ApA=-1;if(FT>AiZ)AiZ=FT;if(G0<Ai0)Ai0=G0;if(AiZ<=
Ai0){while((this.Jr<G0)&&(this.Ht<AiZ)){this.AdG();this.Azt();}while((this.Ht>FT
)&&(this.Jr>Ai0)){this.AA6();this.Azs();}}else{this.Jr=(this.Jr-this.Ht)+FT;this.
Ht=FT;Apz=this.Ht;ApA=this.Jr;}while(this.Ht<FT)this.AdG();while(this.Jr>G0)this.
AA6();while(this.Ht>FT)this.Azs();while(this.Jr<G0)this.Azt();var Aa=this.B8;var
inx=this.Ht;var pos=[this.Br+this.Jo(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlI=
null;var BgU=(B=this.M)[3]-B[1];while(!!Aa){var IB=inx;var AdH=((IB>=this.To)&&(
IB<=this.Tp))||((inx>=Apz)&&(inx<=ApA));var Apf=Aa.GetExtent();var Bq=A.abe(pos,
Apf.slice(0,2));if(AdH)this.SO=this.We;else this.SO=Apf[2]-Apf[0];var A2N=pos[0];
var A2O=pos[0]+this.SO;if(!A.aaX(Bq,Ce))Aa.Ank(Bq,true);if((AdH&&(A2N<BY))&&(A2O>
0)){this.Cj=Aa;this.G6=IB;this.AcK=[this.SO,BgU];(B=this.Hm)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SO,pos[1]];}inx=this.Ht;Aa=this.B8;pos=[
this.Br+this.Jo(inx,0),0];while(!!Aa){var IB=inx;var AdH=((IB>=this.To)&&(IB<=this.
Tp))||((inx>=Apz)&&(inx<=ApA));if(AdH)this.SO=this.We;else this.SO=(B=Aa.GetExtent(
))[2]-B[0];var A2N=pos[0];var A2O=pos[0]+this.SO;if(AdH&&!((A2N<BY)&&(A2O>0))){this.
Cj=Aa;this.G6=IB;this.AcK=[this.SO,BgU];(B=this.Hm)?B[1].call(B[0],this):null;}if(
IB===this.Gt)AlI=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SO,pos[1]];}this.To=0;this.
Tp=-1;this.Cj=null;this.G6=-1;this.Bb(AlI);this.At3=false;},QJ:function(Ag,GA,aFilter
){return null;},AqO:function(Ag,aFilter){return null;},TT:function(Ag,aFilter){return null;
},ACV:function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NT:function(
KF,FP,LB,Lz,LA){throw new Error(Xc);},AhE:function(Ag,J_){throw new Error(Xd);},
ZF:function(Ag){throw new Error(Tb);},J2:function(Ag,Qh){throw new Error(Tc);},HP:
function(Ag){throw new Error(Td);},AMe:function(Ag,J_){throw new Error(Aab);},J:
function(Ag,Qh){throw new Error(Te);},Jo:function(Ha,A02){return Ha*this.We;},Al9:
function(Fh,A02){return(Fh/this.We)|0;},AA6:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jr=this.Jr-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azt:function(
){var B;var Aa=this.HB;var Adq=this.Ll;var AdK=++this.Jr;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.
AiJ++;}this.SO=this.We;this.G6=AdK;this.AcK=[this.SO,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B9)this.
B9.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(AdK===this.
Gt)this.Bb(Aa);return Aa;},AdG:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azs:function(){var
B;var Aa=this.HB;var Adq=this.Ll;var M4=--this.Ht;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.AiJ++;
}this.SO=this.We;this.G6=M4;this.AcK=[this.SO,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.B8.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(M4===this.Gt
)this.Bb(Aa);return Aa;},ApM:function(G){var B;this.BX.Q=null;this.BX.Qw=null;this.
BX=null;(B=this.NC)?B[1].call(B[0],this):null;},Gb:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(
E){if(E<0)E=-1;if(E===this.Gt)return;this.Gt=E;this.Am();},AFs:function(E){var B;
if(E<1)E=1;if(E===this.We)return;this.We=E;while(!!this.AdG());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JA:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jo(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jo(E,3));}else{AE=
A.abN(AE,this.Br+this.Jo(this.AY,3));AE=[].concat(this.Br+this.Jo(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},N4:function(E){var B;if(E===this.Ll)return;
this.Ll=E;while(!!this.AdG());this.HB=null;this.Op=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpH:function(Byi,Byj){if(!this.BX)return;if(Byi)this.Gb(
this.BX.B2);var A4L=this.NC;this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.
NC=null;this.BX=null;if(Byj)(A4L)?A4L[1].call(A4L[0],this):null;},Bj_:function(){
return!!this.BX;},HI:function(Ha,Ac3,AcZ,E8){var B;if((Ha<0)||(Ha>=this.AY))return;
var Az=this.AqV(Ha,Ha);var Bd=this.M;var LP=A.lb(Az,Bd);if((!Ac3&&!((LP[0]>=LP[2
])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az))){(E8)?E8[1].call(E8[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qw=null;this.NC=null;}this.BX=
AcZ;if(!this.BX){this.Gb(this.Br-Bq);(E8)?E8[1].call(E8[0],this):null;}else{this.
BX.Ar(false);this.BX.HO(1);this.BX.Q=[this,this.Anv,this.Gb];this.BX.Cx=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qw=[this,this.ApM];this.BX.Ae$(false);this.BX.Ar(true
);this.NC=E8;}},AqV:function(J8,L9){if(J8<0)J8=0;if(L9>=this.AY)L9=this.AY-1;if(
J8>L9)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jo(L9+1
,0));AE=[].concat((AE[0]+Bq)+this.Jo(J8,0),AE.slice(1,4));return AE;},AbF:function(
J8,L9){var B;if(J8<0)J8=0;if(J8>L9)return;if(this.To>this.Tp){this.To=J8;this.Tp=
L9;}else{if(J8<this.To)this.To=J8;if(L9>this.Tp)this.Tp=L9;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jo(J8,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jo(L9+1,0));this.Am();this.Bj(AE);},Anv:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dz;this.H(Xb);
this.Ll=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NC)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASw:null,AES:null,Awb:null,D1:null,
Lq:null,BL:null,ALc:0,Bp:0,IK:0,Bs:0,N_:0,Jv:0,DG:A.wf,NV:A.wf,H1:A.wf,Axy:8,Afg:
0,A7Z:1,Down:false,YI:false,NK:false,A2e:false,AAn:0,Kq:function(CZ,aClip,aOffset
,Ck,aBlend){},G4:function(CN){var B;var BN=(C.Aef.isPrototypeOf(CN)?CN:null);var
D4=(C.AqJ.isPrototypeOf(CN)?CN:null);var AKs=this.YI;var AaJ;var Vg;var ABp;var M1;
var AzL;if(!BN&&!D4)return null;AaJ=(!!BN&&BN.Down)&&!BN.Jv;Vg=(!!BN&&BN.Down)&&(
BN.Jv>0);ABp=(!!BN&&BN.Down)&&(BN.Jv>this.AAn);M1=!!BN&&!BN.Down;AzL=!!D4;if(AaJ
)this.AAn=((B=(BN.NK?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afg&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iz=(C.Au3.isPrototypeOf(CN)?CN:null);if(((
!!Iz&&Iz.Down)&&(Iz.AxQ!==this))&&A.wa(this.GetExtent(),this.Ab.A7U(Iz.LW))){this.
ALc=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaJ){var ApG=0;var Adl;this.Bp=
this.Bp|(1<<BN.IK);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApG=ApG+1;
if(ApG===1)this.Bp=(this.Bp|16777216)|(4096<<BN.IK);}if(M1&&(this.Bp<16777216)){
var IF=this.Im();var JH=null;if(!!IF){var A4C=(!!this.AJ?this.AJ:this.Ab);var A14=(
!!IF.JI?IF.JI.C1:null);JH=IF.Yj(A.abh(Aac,BN.LW),BN.IK,BN.N_,A14,A4C,0x0);}if(!!
JH){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JH.Cj.G4(A._NewObject(C.Aef,0).
InitializeDown(O,BN.H1,BN.N_,Ce,true,BN.LW));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JH.Cj.G4(A._NewObject(C.Aef,0).InitializeUp(O,BN.H1,BN.H1,0,BN.N_,Ce,false,BN.
LW,BN.LW));}}if(M1)this.Bp=(this.Bp&~(1<<BN.IK))|33554432;if(ABp&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M1&&BN.NK)this.Bp=this.Bp|67108864;if(M1&&!(this.Bp&
4095))this.ALc=0x0;if(M1&&!(this.Bp&16777215))this.Bp=0;if(Vg&&(this.Bp>=67108864
)){var IF=this.Im();if(!!IF)IF.AUB(null,null,this,this.ALc);}if((Vg&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vg=false;M1=true;}if(!!BN&&!(this.Bp&(4096<<BN.
IK)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IK)))return this;if(M1&&!(this.Bp&
16777216))return this;if(((AaJ||AzL)||Vg)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M1)this.Bp=this.Bp&3758100479;if(M1&&!(this.Bp&16777215))this.
Bp=0;if(!!BN){this.Down=AaJ||Vg;this.YI=this.ARq(BN.H1);this.NV=BN.NV;this.H1=BN.
H1;this.DG=Ce;this.Jv=BN.Jv;this.N_=BN.N_;this.NK=BN.NK;this.IK=BN.IK;this.Bs=BN.
Bs;if(BN.Down&&!BN.Jv)AKs=false;}if(!!D4){this.Down=true;this.YI=this.ARq(D4.H1);
this.NV=D4.NV;this.H1=D4.H1;this.DG=D4.DG;this.Jv=D4.Jv;this.N_=D4.N_;this.IK=D4.
IK;this.NK=false;this.Bs=D4.Bs;}var A1_=this.Down;if(!!D4)(B=this.ASw)?B[1].call(
B[0],this):null;if((!!BN&&this.Down)&&!this.Jv)(B=this.BL)?B[1].call(B[0],this):
null;if((!!BN&&this.Down)&&(this.Jv>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YI)&&!AKs){this.A2e=true;(B=this.Awb)?B[1].call(B[0],this):null;
}if(this.A2e&&(((A1_&&!this.YI)&&AKs)||((!A1_&&this.YI)&&AKs))){this.A2e=false;(
B=this.AES)?B[1].call(B[0],this):null;}if(!!BN&&!A1_)(B=this.Lq)?B[1].call(B[0],
this):null;if(!!this.Afg){var AdF=0x0;if(((((this.Afg&0x10)===0x10)&&!!BN)&&BN.Down
)&&(BN.Jv>=1000))AdF=0x10;if((((this.Afg&0x1)===0x1)&&!!D4)&&((D4.LW[1]-D4.Ag3[1
])<=-this.Axy))AdF=0x1;if((((this.Afg&0x2)===0x2)&&!!D4)&&((D4.LW[1]-D4.Ag3[1])>=
this.Axy))AdF=0x2;if((((this.Afg&0x4)===0x4)&&!!D4)&&((D4.LW[0]-D4.Ag3[0])<=-this.
Axy))AdF=0x4;if((((this.Afg&0x8)===0x8)&&!!D4)&&((D4.LW[0]-D4.Ag3[0])>=this.Axy)
)AdF=0x8;if(!!AdF){var IF=this.Im();if(!!IF){this.ALc=AdF;IF.AUB(null,this,this,
AdF);}}}return this;},Yj:function(Dc,BF,Oh,Aak,Ac6,Ac5){var B;if(!!Aak&&(Aak!==this
))return null;if((Oh<1)||(Oh>this.A7Z))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;if(!!(Ac5&this.Afg))return null;
if(this.BjM()){var Az=A.lb(Dc,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qk=A.aaI(Dc);var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=
Az[2])Fx=[(Az[2]-Qk[0])-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=
Az[3])Fx=[Fx[0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au4,0).Initialize(this,Fx
);}}else{var HC=A.abi(9,A.wf,null);var O;HC.Set(0,A.aaI(Dc));HC.Set(1,HC.Get(0));
HC.Set(2,HC.Get(0));HC.Set(3,HC.Get(0));HC.Set(4,HC.Get(0));HC.Set(1,[Dc[0],HC.Get(
1)[1]]);HC.Set(2,[HC.Get(2)[0],Dc[1]]);HC.Set(3,[Dc[2],HC.Get(3)[1]]);HC.Set(4,[
HC.Get(4)[0],Dc[3]]);HC.Set(5,Dc.slice(0,2));HC.Set(6,[Dc[2],Dc[1]]);HC.Set(7,[Dc[
0],Dc[3]]);HC.Set(8,Dc.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARq(HC.Get(O)))return A.
_NewObject(C.Au4,0).Initialize(this,A.abe(HC.Get(O),HC.Get(0)));}return null;},BnW:
function(E){if(E<1)E=1;this.Axy=E;},AFB:function(E){if(E<1)E=1;this.A7Z=E;},Ar:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZD._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZD._Mark.call(this,D);if((B=this.ASw)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AES)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Awb
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H_={timer:null,AKP:null,Aue:null,AGc:null,Zn:null,SL:null,Bp:0,AJr:0,Ado:5000
,Ap0:0,AKr:A.wf,Apc:0,AfP:0,EY:0,Amj:0,Aus:0,Apb:0,AfO:0,EX:0,Ami:0,Amg:0,NV:A.wf
,A6f:A.wf,F_:A.wf,Gp:A.wf,DG:A.wf,WV:A.wf,A6T:0.5,A$y:true,AGU:true,ZN:false,XJ:
false,XK:false,AoX:false,AAn:0,Kq:function(CZ,aClip,aOffset,Ck,aBlend){},G4:function(
CN){var B;var BN=(C.Aef.isPrototypeOf(CN)?CN:null);var D4=(C.AqJ.isPrototypeOf(CN
)?CN:null);var Iz=(C.Au3.isPrototypeOf(CN)?CN:null);var AaJ;var Vg;var ABp;var M1;
var AzL;AaJ=(!!BN&&BN.Down)&&!BN.Jv;Vg=(!!BN&&BN.Down)&&(BN.Jv>0);ABp=(!!BN&&BN.
Down)&&(BN.Jv>this.AAn);M1=!!BN&&!BN.Down;AzL=!!D4;if(AaJ)this.AAn=((B=(BN.NK?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaJ){var ApG=0;var Adl;this.Bp=this.Bp|(1<<BN.
IK);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApG=ApG+1;if(ApG===1)this.
Bp=(this.Bp|16777216)|(4096<<BN.IK);}if(M1&&(this.Bp<16777216)){var IF=this.Im();
var JH=null;if(!!IF){var A4C=(!!this.AJ?this.AJ:this.Ab);var A14=(!!IF.JI?IF.JI.
C1:null);JH=IF.Yj(A.abh(Aac,BN.LW),BN.IK,BN.N_,A14,A4C,0x0);}if(!!JH){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JH.Cj.G4(A._NewObject(C.Aef,0).InitializeDown(
O,BN.H1,BN.N_,Ce,true,BN.LW));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JH.Cj.G4(A.
_NewObject(C.Aef,0).InitializeUp(O,BN.H1,BN.H1,0,BN.N_,Ce,false,BN.LW,BN.LW));}}
if(M1)this.Bp=(this.Bp&~(1<<BN.IK))|33554432;if(ABp&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M1&&BN.NK)this.Bp=this.Bp|67108864;if(M1&&!(this.Bp&16777215
))this.Bp=0;if(Vg&&(this.Bp>=67108864)){var IF=this.Im();if(!!IF)IF.AUB(null,null
,this,0x0);}if((Vg&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vg=false;M1=true;
}if(!!BN&&!(this.Bp&(4096<<BN.IK)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IK))
)return this;if(M1&&!(this.Bp&16777216))return this;if(((AaJ||AzL)||Vg)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M1)this.Bp=this.Bp&3758100479;
if(M1&&!(this.Bp&16777215))this.Bp=0;if(!!Iz&&(Iz.AxQ===this))return null;if((!!
Iz&&Iz.Down)&&(this.AoX||!this.ZN))return null;if((!!Iz&&Iz.Down)&&!A.wa(this.M,
this.Ab.A7U(Iz.LW)))return null;if((!!Iz&&!Iz.Down)&&(!this.AoX||(this.AJr!==Iz.
IK)))return null;if((!BN&&!D4)&&!Iz)return null;if(!!BN){this.AoX=AaJ||Vg;this.AJr=
BN.IK;this.NV=BN.NV;}if(!!D4)this.AJr=D4.IK;if(!!Iz){this.AoX=Iz.Down;this.AJr=Iz.
IK;}if(!!Iz&&Iz.Down){this.A4D();this.EX=(((Iz.Bs-this.Amg)*0.001)*this.AfO)+this.
EX;this.EY=(((Iz.Bs-this.Aus)*0.001)*this.AfP)+this.EY;if(this.XJ)this.EX=0;if(this.
XK)this.EY=0;this.AfO=0;this.AfP=0;this.XJ=false;this.XK=false;this.AKr=this.DG;
this.Ap0=Iz.Bs;return this;}if(AaJ){this.A4D();this.EX=(((BN.Bs-this.Amg)*0.001)
*this.AfO)+this.EX;this.EY=(((BN.Bs-this.Aus)*0.001)*this.AfP)+this.EY;if(this.XJ||
!this.ZN)this.EX=0;if(this.XK||!this.ZN)this.EY=0;this.AfO=0;this.AfP=0;this.XJ=
false;this.XK=false;if(!this.ZN){this.ZN=true;(B=this.SL)?B[1].call(B[0],this):null;(
B=this.AKP)?B[1].call(B[0],this):null;}this.AKr=this.DG;this.Ap0=BN.Bs;}if(!!D4){
var Hc=A.abe(D4.H1,D4.NV);var CD=this.DG;if(this.AGU)CD=[this.AKr[0]+Hc[0],CD[1]
];CD=[CD[0],this.AKr[1]+Hc[1]];if(this.A$y){if(CD[0]<this.Gp[0])CD=[this.Gp[0]+(((
CD[0]-this.Gp[0])/2)|0),CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0]+(((CD[0]-
this.F_[0])/2)|0),CD[1]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]+(((CD[1]-this.
Gp[1])/2)|0)];else if(CD[1]>this.F_[1])CD=[CD[0],this.F_[1]+(((CD[1]-this.F_[1])
/2)|0)];}else{if(CD[0]<this.Gp[0])CD=[this.Gp[0],CD[1]];else if(CD[0]>this.F_[0]
)CD=[this.F_[0],CD[1]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]];else if(CD[1]>this.
F_[1])CD=[CD[0],this.F_[1]];}if(!A.aaX(CD,this.DG)){this.A6f=A.abe(CD,this.DG);this.
DG=CD;(B=this.Aue)?B[1].call(B[0],this):null;(B=this.AGc)?B[1].call(B[0],this):null;
}}if((!!Iz&&!Iz.Down)&&((Iz.Bs-this.Ap0)>=200)){this.EX=0;this.EY=0;}if(Vg&&((BN.
Bs-this.Ap0)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.Ap0)){var Hc=D4.DG;
var Bd8=1000/(D4.Bs-this.Ap0);var AiM=0;var AiN;if(this.AGU)AiM=Hc[0]*Bd8;AiN=Hc[
1]*Bd8;if((AiM*this.EX)<0)this.EX=0;if((AiN*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiM)*0.5;this.EY=(this.EY+AiN)*0.5;this.Ap0=D4.Bs;}if(!M1&&!Iz)return this;if(!!
BN&&BN.NK){this.EX=0;this.EY=0;}if((this.DG[0]<=this.Gp[0])||(this.DG[0]>=this.F_[
0]))this.EX=0;else if(!this.EX){var ER=this.DG[0];var Fj=this.Gp[0];var EI=this.
F_[0];if(ER<Fj)EI=this.Gp[0];else if(ER>EI)Fj=this.F_[0];else if(this.WV[0]<=1){
Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WV[0];EI=(ER-this.WV[0])+Ads;Fj=ER+Ads;if(
EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.F_[0];}if((Fj-ER)<=(ER-EI))
ER=Fj;else ER=EI;if(ER!==this.DG[0]){var Jn=ER-this.DG[0];if(Jn>0)this.EX=Math.sqrt((
Jn*2)*this.Ado)+20;if(Jn<0)this.EX=-Math.sqrt((-Jn*2)*this.Ado)-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jn);this.Apb=ER;}}else{var BCt=this.EX*this.EX;var Jn=BCt/(
2*this.Ado);var ER=this.DG[0];if(this.EX>0)ER=ER+(Jn|0);if(this.EX<0)ER=ER-(Jn|0
);if(ER>this.F_[0])ER=this.F_[0];else if(ER<this.Gp[0])ER=this.Gp[0];var BgP=ER;
var Fj=this.Gp[0];var EI=this.F_[0];if(ER<Fj)EI=this.Gp[0];else if(ER>EI)Fj=this.
F_[0];else if(this.WV[0]<=1){Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WV[0];EI=(ER-
this.WV[0])+Ads;Fj=ER+Ads;if(EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.
F_[0];}if(this.EX>0){if(EI<=this.DG[0])ER=Fj;else if((ER-EI)<(Fj-ER))ER=EI;else ER=
Fj;}else if(Fj>=this.DG[0])ER=EI;else if((ER-EI)>(Fj-ER))ER=Fj;else ER=EI;if(ER!==
this.DG[0]){Jn=ER-this.DG[0];if(ER!==BgP){var Ai8=ER-BgP;if(Ai8>0)this.EX=this.EX+
Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EX=this.EX-Math.sqrt((-Ai8*2)*this.Ado
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jn);this.Apb=ER;}else this.EX=0;}if((this.DG[1]<=this.Gp[1]
)||(this.DG[1]>=this.F_[1]))this.EY=0;else if(!this.EY){var ES=this.DG[1];var Fj=
this.Gp[1];var EI=this.F_[1];if(ES<Fj)EI=this.Gp[1];else if(ES>EI)Fj=this.F_[1];
else if(this.WV[1]<=1){Fj=ES;EI=ES;}else{var Ads=(EI-ES)%this.WV[1];EI=(ES-this.
WV[1])+Ads;Fj=ES+Ads;if(EI<this.Gp[1])EI=this.Gp[1];if(Fj>this.F_[1])Fj=this.F_[
1];}if((Fj-ES)<=(ES-EI))ES=Fj;else ES=EI;if(ES!==this.DG[1]){var Jn=ES-this.DG[1
];if(Jn>0)this.EY=Math.sqrt((Jn*2)*this.Ado)+20;if(Jn<0)this.EY=-Math.sqrt((-Jn*
2)*this.Ado)-20;this.AfP=(400-(this.EY*this.EY))/(2*Jn);this.Apc=ES;}}else{var BCu=
this.EY*this.EY;var Jn=BCu/(2*this.Ado);var ES=this.DG[1];if(this.EY>0)ES=ES+(Jn|
0);if(this.EY<0)ES=ES-(Jn|0);if(ES>this.F_[1])ES=this.F_[1];else if(ES<this.Gp[1
])ES=this.Gp[1];var BgQ=ES;var Fj=this.Gp[1];var EI=this.F_[1];if(ES<Fj)EI=this.
Gp[1];else if(ES>EI)Fj=this.F_[1];else if(this.WV[1]<=1){Fj=ES;EI=ES;}else{var Ads=(
EI-ES)%this.WV[1];EI=(ES-this.WV[1])+Ads;Fj=ES+Ads;if(EI<this.Gp[1])EI=this.Gp[1
];if(Fj>this.F_[1])Fj=this.F_[1];}if(this.EY>0){if(EI<=this.DG[1])ES=Fj;else if((
ES-EI)<(Fj-ES))ES=EI;else ES=Fj;}else if(Fj>=this.DG[1])ES=EI;else if((ES-EI)>(Fj-
ES))ES=Fj;else ES=EI;if(ES!==this.DG[1]){Jn=ES-this.DG[1];if(ES!==BgQ){var Ai8=ES-
BgQ;if(Ai8>0)this.EY=this.EY+Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EY=this.EY-
Math.sqrt((-Ai8*2)*this.Ado);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfP=(400-(this.EY*this.EY))/(2*Jn);this.Apc=ES;}else this.EY=
0;}if(!!BN)this.Amg=BN.Bs;if(!!Iz)this.Amg=Iz.Bs;this.Aus=this.Amg;this.Ami=this.
DG[0];this.Amj=this.DG[1];this.BCv();return this;},Yj:function(Dc,BF,Oh,Aak,Ac6,
Ac5){var B;if(!!Aak&&(Aak!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGU&&!!(Ac5&0xC))
return null;var Az=A.lb(Dc,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=
A.aaI(Dc);var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=Az[2])Fx=[(Az[
2]-Qk[0])-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fx=[Fx[
0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au4,0).Initialize(this,Fx);}return null;
},A4D:function(){if(!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;
}},BCv:function(){this.timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mi],this.
timer,0);},Mi:function(G){var B;if(!this.timer)return;var Aux=(this.timer.Bs-this.
Amg)*0.001;var Auy=(this.timer.Bs-this.Aus)*0.001;var BCG=Aux*Aux;var BCH=Auy*Auy;
var AiM=(this.AfO*Aux)+this.EX;var AiN=(this.AfP*Auy)+this.EY;var CD=[((((this.AfO
*0.5)*BCG)+(this.EX*Aux))+this.Ami)|0,((((this.AfP*0.5)*BCH)+(this.EY*Auy))+this.
Amj)|0];if(this.XJ&&(Aux>=0.5)){CD=[this.Apb,CD[1]];this.EX=0;this.AfO=0;this.Ami=
CD[0];this.XJ=false;}else if(this.XJ){var LM=1-Math.pow(1-(Aux/0.5),5);CD=[(this.
Ami+((this.Apb-this.Ami)*LM))|0,CD[1]];}if(this.XK&&(Auy>=0.5)){CD=[CD[0],this.Apc
];this.EY=0;this.AfP=0;this.Amj=CD[1];this.XK=false;}else if(this.XK){var LM=1-Math.
pow(1-(Auy/0.5),5);CD=[CD[0],(this.Amj+((this.Apc-this.Amj)*LM))|0];}if(((this.EX>
0)&&(AiM<0))||((this.EX<0)&&(AiM>0))){AiM=0;CD=[this.DG[0],CD[1]];}if(((this.EY>
0)&&(AiN<0))||((this.EY<0)&&(AiN>0))){AiN=0;CD=[CD[0],this.DG[1]];}if(!this.XJ&&(
CD[0]<this.Gp[0])){this.Ami=CD[0];this.Apb=this.Gp[0];this.Amg=this.timer.Bs;this.
XJ=true;}else if(!this.XJ&&(CD[0]>this.F_[0])){this.Ami=CD[0];this.Apb=this.F_[0
];this.Amg=this.timer.Bs;this.XJ=true;}if(!this.XK&&(CD[1]<this.Gp[1])){this.Amj=
CD[1];this.Apc=this.Gp[1];this.Aus=this.timer.Bs;this.XK=true;}else if(!this.XK&&(
CD[1]>this.F_[1])){this.Amj=CD[1];this.Apc=this.F_[1];this.Aus=this.timer.Bs;this.
XK=true;}if(((!this.XJ&&!!this.EX)&&(AiM>-20))&&(AiM<20)){CD=[this.Apb,CD[1]];this.
EX=0;this.AfO=0;this.Ami=CD[0];}if(((!this.XK&&!!this.EY)&&(AiN>-20))&&(AiN<20)){
CD=[CD[0],this.Apc];this.EY=0;this.AfP=0;this.Amj=CD[1];}if(!A.aaX(CD,this.DG)){
this.A6f=A.abe(CD,this.DG);this.DG=CD;(B=this.Aue)?B[1].call(B[0],this):null;(B=
this.AGc)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XJ)&&!this.
XK){this.A4D();this.ZN=false;(B=this.Zn)?B[1].call(B[0],this):null;}},ATN:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WV=E;},ATj:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6T)return;this.A6T=E;if(E<(1e-007))E=1e-007;this.Ado=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.H_;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKP)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aue)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGc
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zn)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ah:null,Lq:null,BL:null,D1:null,ApV:
0,Bs:0,A$t:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Aci:false,NM:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(AfB
);this.Ah=C1.AKv;C1.AKv=this;},G4:function(CN){var B;if(!!CN&&CN.Bj4(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NM=false;if(
CN.Down){this.A$t=this.ApV;this.Aci=this.ApV>0;if(this.Aci)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NM)this.ApV=this.
ApV+1;return!this.NM;}if(!CN.Down){this.Aci=this.ApV>1;this.A$t=this.ApV-1;this.
ApV=0;(B=this.Lq)?B[1].call(B[0],this):null;return!this.NM;}}return false;},_Init:
function(aArg){this.__proto__=C.BK;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lq)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au4={Cj:null,Au6:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DG=
aOffset;this.Au6=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au4;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A76={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A76;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arm={NE:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arm;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NE)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEd={AiU:A.wf,AiT:A.wf,_Init:function(aArg
){C.Arm._Init.call(this,aArg);this.__proto__=C.AEd;},_className:"Core::LayoutLineContext"
};C.AEe={AAX:A.wf,AAW:A.wf,AiU:A.wf,AiT:A.wf,_Init:function(aArg){C.Arm._Init.call(
this,aArg);this.__proto__=C.AEe;},_className:"Core::LayoutQuadContext"};C.AN3={C1:
null,Ah:null,RD:null,RM:null,Mg:null,ApR:null,_Init:function(aArg){this.__proto__=
C.AN3;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mg)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApR)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVh={FQ:null,B9:null,B8:null,Bee:false,
By8:function(){if(!this.FQ)return;var Pm=this.FQ;this.FQ.Ph=null;this.FQ=null;A.
pe([this,this.A3L],this);Pm.A8v(this);},BAW:function(G){if(!!this.FQ)return;if(!
this.B8)return;this.FQ=this.B8;this.B8=this.B8.Ah;if(!!this.B8)this.B8.AJ=null;else
this.B9=null;this.FQ.Ah=null;this.Bee=true;this.FQ.SL(this);this.Bee=false;},BBh:
function(G){A.pe([this,this.BAW],this);},BBg:function(G){A.pe([this,this.BBh],this
);},A3L:function(G){A.pe([this,this.BBg],this);},Bh1:function(Jk){if(!Jk||!Jk.Ph
)return;if(Jk.Ph!==this)throw new Error(Aad);var Bhj=false;if(this.FQ===Jk){this.
FQ=null;Bhj=true;A.pe([this,this.A3L],this);}else{if(!!Jk.Ah)Jk.Ah.AJ=Jk.AJ;else
this.B9=Jk.AJ;if(!!Jk.AJ)Jk.AJ.Ah=Jk.Ah;else this.B8=Jk.Ah;Jk.AJ=null;Jk.Ah=null;
}Jk.Ph=null;if(Bhj)Jk.A8u(this);},A$B:function(Jk,A1x){if(!Jk)return;if(!!Jk.Ph)
throw new Error(Xe);Jk.Ph=this;if(A1x){Jk.Ah=this.B8;if(!!this.B8)this.B8.AJ=Jk;
else this.B9=Jk;this.B8=Jk;}else{Jk.AJ=this.B9;if(!!this.B9)this.B9.Ah=Jk;else this.
B8=Jk;this.B9=Jk;}if(!this.FQ)A.pe([this,this.A3L],this);},_Init:function(aArg){
this.__proto__=C.AVh;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkZ={Ph:null,AJ:null,Ah:
null,A8v:function(AtA){},A8u:function(AtA){},SL:function(AtA){this.AmC();},Mr:function(
){if(!!this.Ph&&(this.Ph.FQ===this))this.Ph.By8();},AmC:function(){if(!!this.Ph)
this.Ph.Bh1(this);},ARm:function(){return!!this.Ph&&(this.Ph.FQ===this);},_Init:
function(aArg){this.__proto__=C.AkZ;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ph)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVf={As:null,Auu:
null,SL:function(AtA){this.Auu.As=this.As;A.we(this.Auu,0);A.pe([this,this.BAT],
this);},BAT:function(G){this.Auu.As=null;this.Auu=null;this.As=null;this.Mr();},
_Init:function(aArg){C.AkZ._Init.call(this,aArg);this.__proto__=C.AVf;},_Mark:function(
D){var B;C.AkZ._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auu)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxP={_Init:function(){C.AVh._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhD={resource:null,Le:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhD;this.Init(aArg);A.h7++;},_Done:function(){this.Le();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={ME:null,timer:null,Bs:0,Period:1000,VH:0,Bw:false,Le:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKX:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PV:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKX(this.VH,E);},WG:function(E){if(E<0)E=0;if(E===
this.VH)return;this.VH=E;if(this.Bw)this.AKX(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKX(this.VH,this.Period);else this.AKX(0,
0);this.Bs=this.Avw();},Avw:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avw();if(!this.
Period)this.Ar(false);(B=this.ME)?B[1].call(B[0],this):null;},AxN:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Le();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ME)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUK:0,Av7:0
,AjU:0,GL:0,Hk:0,Year:0,BdM:function(AfL,A00){if(A00)switch(AfL){case 1:return A.
aci.Bkc;case 2:return A.aci.Bi6;case 3:return A.aci.Bku;case 4:return A.aci.BhF;
case 5:return A.aci.Bky;case 6:return A.aci.Bkf;case 7:return A.aci.Bke;case 8:return A.
aci.BhH;case 9:return A.aci.Bpg;case 10:return A.aci.BkS;case 11:return A.aci.BkR;
case 12:return A.aci.Bio;default:return A.jV;}else switch(AfL){case 1:return A.aci.
AD9;case 2:return A.aci.ACS;case 3:return A.aci.AEj;case 4:return A.aci.ABU;case
5:return A.aci.AEl;case 6:return A.aci.AD$;case 7:return A.aci.AD_;case 8:return A.
aci.AB1;case 9:return A.aci.AGI;case 10:return A.aci.AEy;case 11:return A.aci.AEw;
case 12:return A.aci.ACD;default:return A.jV;}},BdK:function(Bcg,A00){if(A00)switch(
Bcg){case 1:return A.aci.BkD;case 2:return A.aci.Bqy;case 3:return A.aci.Bre;case
4:return A.aci.Bql;case 5:return A.aci.Bjh;case 6:return A.aci.Bo9;case 0:return A.
aci.Bp_;default:return A.jV;}else switch(Bcg){case 1:return A.aci.BkC;case 2:return A.
aci.Bqx;case 3:return A.aci.Brd;case 4:return A.aci.Bqk;case 5:return A.aci.Bjg;
case 6:return A.aci.Bo8;case 0:return A.aci.Bp9;default:return A.jV;}},BdJ:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JV:function(){var d=this.GL;var K6=this.Hk;var Di=this.Year-((
K6<=2)?1:0);var AzM=(((Di>=0)?Di:Di-399)/400)|0;var Amq=Di-(AzM*400);var Ve=(((((
153*(K6+((K6>2)?-3:9)))+2)/5)|0)+d)-1;var Ao_=(((Amq*365)+((Amq/4)|0))-((Amq/100
)|0))+Ve;var Qm=((AzM*146097)+Ao_)-719468;return(((Qm*86400)+(this.AjU*3600))+(this.
Av7*60))+this.AUK;},AFW:function(E){var B;E+=62162035200;if(E<0)E=0;var Vs=Math.
trunc(E/86400)|0;var AzM=(((Vs>=0)?Vs:Vs-146096)/146097)|0;var Ao_=Vs-(AzM*146097
);var Amq=((((Ao_-((Ao_/1460)|0))+((Ao_/36524)|0))-((Ao_/146096)|0))/365)|0;var Di=
Amq+(AzM*400);var Ve=Ao_-(((365*Amq)+((Amq/4)|0))-((Amq/100)|0));var A29=(((5*Ve
)+2)/153)|0;var d=(Ve-((((153*A29)+2)/5)|0))+1;var K6=A29+((A29<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Di+((
K6<=2)?1:0);this.Uv(K6);this.Ls(d);this.AnB(BI+((BI<0)?24:0));this.AnE(O+((O<0)?
60:0));this.AnH(s+((s<0)?60:0));},Zo:function(){if(this.Hk===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hk===4)||(this.Hk===6))||(this.Hk===9))||(this.Hk===11))return 30;else return 31;
},Bl6:function(){var B;var Ve=this.AbZ()-1;var AtR=(6+this.Awh())%7;var Apa=((371+
AtR)-Ve)%7;if(this.Hk===12){var d=this.GL;if((d===31)&&(AtR<3))return 0;if((d===
30)&&(AtR<2))return 0;if((d===29)&&(AtR<1))return 0;}if(Apa<=3)Ve+=Apa;else Ve-=(
7-Apa);if(Ve<0){var d=this.GL;var K6=this.Hk;this.Year--;this.Ls(31);this.Uv(12);
Ve=this.AbZ()-1;AtR=(6+this.Awh())%7;Apa=((371+AtR)-Ve)%7;if(Apa<=3)Ve+=Apa;else
Ve-=Apa;this.Year++;this.Ls(d);this.Uv(K6);}return(Ve/7)|0;},AbZ:function(){var B;
var d=this.GL;var K6=this.Hk;var Di=this.Year;var Af9=((!!!(Di%4)&&(!!(Di%100)||
!!!(Di%400)))?1:0);switch(K6){case 2:d+=31;break;case 3:d+=(59+Af9);break;case 4:
d+=(90+Af9);break;case 5:d+=(120+Af9);break;case 6:d+=(151+Af9);break;case 7:d+=(
181+Af9);break;case 8:d+=(212+Af9);break;case 9:d+=(243+Af9);break;case 10:d+=(273+
Af9);break;case 11:d+=(304+Af9);break;case 12:d+=(334+Af9);break;default:;}return d;
},Awh:function(){var B;var d=this.GL;var K6=this.Hk+((this.Hk>2)?-2:10);var Di=this.
Year-((this.Hk<=2)?1:0);var B3=(Di/100)|0;Di%=100;d+=((((((((26*K6)-2)/10)|0)+Di
)+((Di/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnH:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUK=E;},AnE:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av7=E;},AnB:function(E){if(E<0)E=0;if(E>23)E=23;this.AjU=E;},Ls:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},Uv:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hk=E;},Format:function(Iv){var result=A.jV;var inx=0;while(!!(Iv.charCodeAt(inx)||
0))if((Iv.charCodeAt(inx)||0)===0x25){var AaD=1;inx=inx+1;if((Iv.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaD=0;}switch(Iv.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaD,10);break;case 0x48:result=result+A.abl(this.AjU,2*AaD,10);break;
case 0x49:if(!(this.AjU%12))result=result+Aae;else result=result+A.abl(this.AjU%
12,2*AaD,10);break;case 0x6D:result=result+A.abl(this.Hk,2*AaD,10);break;case 0x4D:
result=result+A.abl(this.Av7,2*AaD,10);break;case 0x70:if(this.AjU<12)result=result+
A.aci.Bhp;else result=result+A.aci.Bou;break;case 0x53:result=result+A.abl(this.
AUK,2*AaD,10);break;case 0x77:result=result+A.abl(this.Awh(),AaD,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaD,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaD,10);break;case 0x25:result=result+Xf;break;case 0x6A:result=result+
A.abl(this.AbZ(),3*AaD,10);break;case 0x57:result=result+A.abl(this.Bl6(),2*AaD,
10);break;case 0x61:result=result+this.BdK(this.Awh(),true);break;case 0x41:result=
result+this.BdK(this.Awh(),false);break;case 0x62:result=result+this.BdM(this.Hk
,true);break;case 0x42:result=result+this.BdM(this.Hk,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iv.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac7,AfL,Bxp,BxG,BxX,Byd){this.Year=Ac7;this.
Uv(AfL);this.Ls(Bxp);this.AnB(BxG);this.AnE(BxX);this.AnH(Byd);return this;},Initialize:
function(Ah$){this.AFW(Ah$);return this;},Bit:function(Ah$){if(!Ah$)return A._NewObject(
C.An5,0).Initialize(this.JV());return A._NewObject(C.An5,0).Initialize(this.JV()-
Ah$.JV());},BpL:function(Ay7){if(!Ay7)return this;return A._NewObject(C.Bs,0).Initialize(
this.JV()-Ay7.JV());},J:function(Ay7){if(!Ay7)return this;return A._NewObject(C.
Bs,0).Initialize(this.JV()+Ay7.JV());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An5={AGF:0,AEo:0,ADC:0,Ko:0,JV:function(
){return(((this.Ko*86400)+(this.ADC*3600))+(this.AEo*60))+this.AGF;},AFW:function(
E){var AK$=1;this.Ko=Math.trunc(E/86400)|0;if(E<0){E=-E;AK$=-1;}this.ADC=AK$*(Math.
trunc(E/3600)%24|0);this.AEo=AK$*(Math.trunc(E/60)%60|0);this.AGF=AK$*(E%60|0);}
,Initialize2:function(Bxq,BxH,BxY,Byg){this.Ko=Bxq;this.ADC=BxH;this.AEo=BxY;this.
AGF=Byg;return this;},Initialize:function(Ah$){this.AFW(Ah$);return this;},_Init:
function(aArg){this.__proto__=C.An5;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$0={As:null,Ph:null,Trigger:function(AoF,A1x){var Pm=A._NewObject(C.AVf,0);
Pm.Auu=this;Pm.As=AoF;this.Ph.A$B(Pm,A1x);},_Init:function(aArg){this.__proto__=
C.A$0;this.Ph=A._GetAutoObject(C.AxP);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ph)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$1={JP:null,Event:null,ASx:null,At9:function(G){var B;if(
!this.Event)return;this.JP=this.Event.As;(B=this.ASx)?B[1].call(B[0],this):null;
this.JP=null;},BmI:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At9],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At9],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$1;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGH={Dt:0x1,BDp:0x2,BEy:0x4,BGv:0x8,Bw:0x10,H9:0x20
,BEz:0x40,BFa:0x80,BEu:0x100,BEQ:0x200,BEi:0x400,BFP:0x800,Bl:0x1000,BGE:0x2000,
BFx:0x4000,BFy:0x8000,Abj:0x10000,BFw:0x20000,BF2:0x40000,BD$:0x80000,BFG:0x100000
,BD5:0x200000};C.PO={BFR:0x1,BFS:0x2,BDl:0x4,BDm:0x8,BDn:0x10,BDk:0x20};C.Ag1={None:
0,BGr:1,BDI:2,BEV:3,BFV:4,BGs:5,BGt:6,BDJ:7,BDK:8,BEX:9,BEW:10,BFX:11,BFW:12};C.
Au8={None:0,BGp:1,Left:2,BDG:3,ZS:4,A5N:5,BGq:6,Right:7,BDH:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BFT={BGN:0x1,BGK:0x2,BGL:0x4,BGM:
0x8,BEZ:0x10,BEB:0x20};
C._Init=function(){C.Akh.__proto__=C.Cj;C.ZD.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARE.__proto__=
C.Event;C.Au3.__proto__=C.Event;C.Aef.__proto__=C.Event;C.AqJ.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CM.__proto__=C.P;C.Dz.__proto__=C.P;C.Bn.__proto__=C.ZD;C.H_.
__proto__=C.Eu;C.AEd.__proto__=C.Arm;C.AEe.__proto__=C.Arm;C.AVf.__proto__=C.AkZ;
};C._ReInit=function(){var B;if((B=C.AxP._this))B._ReInit(),C.AxP._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxP._this)&&(B._cycle!=D))B._Done(C.AxP._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */