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
Hr=[1000,740];var IW="The dialog component is already presented";var It="The dialog component is actually not presented";
var O6="No fader to perform the fade-in/out operation";var P_="Trying to use the same fader twice";
var P$="Trying to fade-in/out a group which belongs to another owner";var CR="No view to restack";
var Ff="View is not in this group";var L5="Sibling view does not belong to the group";
var Qa="No view to remove";var J7="No view to add";var Od="View already in a group";
var Qb="Recursive invalidate during active update cycle.";var ML=[-8,-8,9,9];var
S$="No group to end the modal state.";var UW="The group is not modal.";var Z6="No group to obtain the modal state.";
var W9="The group serves already as the \'virtual keyboard\'.";var Iu="The group is already modal.";
var UX="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z7="The method SwitchToDialog() is not available in Core::VerticalList.";
var UY="The method DismissDialog() is not available in Core::VerticalList.";var Z8=
"The method PresentDialog() is not available in Core::VerticalList.";var W_="The method FadeGroup() is not available in Core::VerticalList.";
var Z9="The method RestackBehind() is not available in Core::VerticalList.";var Z_=
"The method RestackTop() is not available in Core::VerticalList.";var UZ="The method Restack() is not available in Core::VerticalList.";
var W$="The method Remove() is not available in Core::VerticalList.";var O7="The method AddBehind() is not available in Core::VerticalList.";
var Z$="The method Add() is not available in Core::VerticalList.";var Oe="The Slide Touch Handler:";
var Rn="is already connected with a view.";var Xa="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xb=[0,0,170,120];var Ta="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xc="The method DismissDialog() is not available in Core::HorizontalList.";var
Aaa="The method PresentDialog() is not available in Core::HorizontalList.";var Xd=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xe="The method RestackBehind() is not available in Core::HorizontalList.";
var Tb="The method RestackTop() is not available in Core::HorizontalList.";var Tc=
"The method Restack() is not available in Core::HorizontalList.";var Td="The method Remove() is not available in Core::HorizontalList.";
var Aab="The method AddBehind() is not available in Core::HorizontalList.";var Te=
"The method Add() is not available in Core::HorizontalList.";var Aac=[0,0,1,1];var
AfB="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aad="Trying to cancel a task not belonging to this queue!";var Xf="Trying to enqueue a task twice!";
var Aae="12";var Xg="%";
C.Cj={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,J5:0,PO:0x14,AtZ:function(BH,Ah9){}
,Ar8:function(E){if(this.J5===E)return;this.J5=E;if(!!this.Ab){var Ai6=this.Ah;var
Hc=0;while(!!Ai6&&(E>Ai6.J5)){Ai6=Ai6.Ah;Hc=Hc+1;}Ai6=this.AJ;while(!!Ai6&&(E<Ai6.
J5)){Ai6=Ai6.AJ;Hc=Hc-1;}if(!!Hc)this.Ab.J3(this,Hc);}},A0:function(E){var B;var
Hc=E^this.PO;if(!Hc)return;this.PO=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JN],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.NE.U=this.Ev.
NE.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JN],this);}},In:function(
){var B1=this.Ab;while(!!B1){var IG=(C.Root.isPrototypeOf(B1)?B1:null);if(!!IG)return IG;
B1=B1.Ab;}return null;},Kq:function(CZ,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G4:function(CN){return null;},Yk:function(Dc,BF,Oh,Aak
,Ac6,Ac5){return null;},AuK:function(Dc){return Dc;},AuU:function(BH,MP){return Ce;
},Anl:function(aOffset,Atv){},GetExtent:function(){return BD;},Cs:function(Rt,U8
){var B;if(((this.U&0x200)===0x200))Rt=Rt&~0x400;var A3c=(this.U&~U8)|Rt;var XA=
A3c^this.U;this.U=A3c;if(!!this.Ab&&!!(XA&0x14)){var BdB=((this.U&0x14)===0x14);
if(BdB&&!this.Ab.AV)this.Ab.Bb(this);if(!BdB&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACW(this,0x14));}if(!!this.Ab&&!!(XA&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A3c&0x400)===0x400))&&((XA&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JN],this);}if(!!this.Ab&&((XA&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JN],this);}if(((((XA&0x100000)===0x100000)&&((U8&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
XA&0x100000)===0x100000)&&((Rt&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((XA&0x200000)===0x200000)&&((U8&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((XA&0x200000)===0x200000)&&((Rt&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C1!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akh={ED:A.wf,Et:A.wf
,AtZ:function(BH,Ah9){var As=A._NewObject(C.AEe,0);this.Ev=null;As.extent=this.getExtent(
);As.Bd=BH;As.NE=Ah9;As.AiT=this.Et;As.AiU=this.ED;this.Ev=As;},AuU:function(BH,
MP){var B;var EW=this.PO;var As=(C.AEe.isPrototypeOf(B=this.Ev)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var Ke=[BH[
2]-BH[0],BH[3]-BH[1]];var BZ=x2-x1;var BJ=y2-y1;var tmp;if(!MP){var NH=[(B=As.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NH[0]!==Ke[0]){var HU=((EW&
0x4)===0x4);var HV=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HU&&(Qx||!HV))x1=((
x1*Ke[0])/NH[0])|0;if(!HV&&(Qx||!HU)){x2=x2-As.Bd[0];x2=((x2*Ke[0])/NH[0])|0;x2=
x2-Ke[0];}else x2=x2-As.Bd[2];x1=x1+BH[0];x2=x2+BH[2];if(!Qx){if(HU&&!HV)x2=x1+BZ;
else if(!HU&&HV)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}}}else{x2=x2-
As.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(NH[1]!==Ke[1]){var HW=((EW&0x10)===0x10);var
HT=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HW&&(Qy||!HT))y1=((y1*Ke[1])/NH[
1])|0;if(!HT&&(Qy||!HW)){y2=y2-As.Bd[1];y2=((y2*Ke[1])/NH[1])|0;y2=y2-Ke[1];}else
y2=y2-As.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qy){if(HW&&!HT)y2=y1+BJ;else if(!HW&&
HT)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=y1+BJ;}}}else{y2=y2-As.Bd[3];y1=y1+
BH[1];y2=y2+BH[3];}}else{switch(MP){case 3:{x1=BH[0];x2=x1+BZ;}break;case 4:{x2=
BH[2];x1=x2-BZ;}break;case 1:{y1=BH[1];y2=y1+BJ;}break;case 2:{y2=BH[3];y1=y2-BJ;
}break;default:;}if((MP===3)||(MP===4)){var HW=((EW&0x10)===0x10);var HT=((EW&0x20
)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BH[1];y2=BH[3];}else if(HW&&!HT){y1=
BH[1];y2=y1+BJ;}else if(HT&&!HW){y2=BH[3];y1=y2-BJ;}else{y1=BH[1]+((((BH[3]-BH[1
])-BJ)/2)|0);y2=y1+BJ;}}if((MP===1)||(MP===2)){var HU=((EW&0x4)===0x4);var HV=((
EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BH[0];x2=BH[2];}else if(HU&&!HV
){x1=BH[0];x2=x1+BZ;}else if(HV&&!HU){x2=BH[2];x1=x2-BZ;}else{x1=BH[0]+((((BH[2]-
BH[0])-BZ)/2)|0);x2=x1+BZ;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BZ=x2-x1;BJ=y2-y1;if(
As.AiU[0]<As.AiT[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.AiU[1]<As.AiT[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Ev=As;}return[BZ,BJ];},Anl:function(aOffset,Atv){if(Atv){this.Et=A.abf(this.Et,aOffset
);this.ED=A.abf(this.ED,aOffset);}else{this.DM(A.abf(this.Et,aOffset));this.DC(A.
abf(this.ED,aOffset));}},GetExtent:function(){if(!!this.Ev&&this.Ev.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Et[0];var y1=this.Et[
1];var x2=this.ED[0];var y2=this.ED[1];var BZ=x2-x1;var BJ=y2-y1;var tmp;if(BZ<0
)BZ=-BZ;if(BJ<0)BJ=-BJ;if(BZ>=BJ){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BJ>=BZ){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JN],this);}},DM:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.Et=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JN],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.
Akh;},_className:"Core::LineView"};C.ZE={KB:A.wf,MG:A.wf,ED:A.wf,Et:A.wf,AtZ:function(
BH,Ah9){var As=A._NewObject(C.AEf,0);this.Ev=null;As.extent=this.GetExtent();As.
Bd=BH;As.NE=Ah9;As.AiT=this.Et;As.AiU=this.ED;As.AAX=this.MG;As.AAY=this.KB;this.
Ev=As;},AuU:function(BH,MP){var B;var EW=this.PO;var As=(C.AEf.isPrototypeOf(B=this.
Ev)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var Ke=[BH[2]-BH[0],BH[3]-BH[1]];var BZ=x2-x1;var BJ=y2-y1;if(!MP){var
NH=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NH[0]!==Ke[0]){
var HU=((EW&0x4)===0x4);var HV=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(!HU&&(
Qx||!HV))x1=((x1*Ke[0])/NH[0])|0;if(!HV&&(Qx||!HU)){x2=x2-As.Bd[0];x2=((x2*Ke[0]
)/NH[0])|0;x2=x2-Ke[0];}else x2=x2-As.Bd[2];x1=x1+BH[0];x2=x2+BH[2];if(!Qx){if(HU&&
!HV)x2=x1+BZ;else if(!HU&&HV)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}
}}else{x2=x2-As.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(NH[1]!==Ke[1]){var HW=((EW&0x10
)===0x10);var HT=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(!HW&&(Qy||!HT))y1=((
y1*Ke[1])/NH[1])|0;if(!HT&&(Qy||!HW)){y2=y2-As.Bd[1];y2=((y2*Ke[1])/NH[1])|0;y2=
y2-Ke[1];}else y2=y2-As.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qy){if(HW&&!HT)y2=y1+BJ;
else if(!HW&&HT)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=y1+BJ;}}}else{y2=y2-
As.Bd[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MP){case 3:{x1=BH[0];x2=x1+BZ;}break;
case 4:{x2=BH[2];x1=x2-BZ;}break;case 1:{y1=BH[1];y2=y1+BJ;}break;case 2:{y2=BH[
3];y1=y2-BJ;}break;default:;}if((MP===3)||(MP===4)){var HW=((EW&0x10)===0x10);var
HT=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BH[1];y2=BH[3];}else if(
HW&&!HT){y1=BH[1];y2=y1+BJ;}else if(HT&&!HW){y2=BH[3];y1=y2-BJ;}else{y1=BH[1]+((((
BH[3]-BH[1])-BJ)/2)|0);y2=y1+BJ;}}if((MP===1)||(MP===2)){var HU=((EW&0x4)===0x4);
var HV=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BH[0];x2=BH[2];}else if(
HU&&!HV){x1=BH[0];x2=x1+BZ;}else if(HV&&!HU){x2=BH[2];x1=x2-BZ;}else{x1=BH[0]+((((
BH[2]-BH[0])-BZ)/2)|0);x2=x1+BZ;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BZ=(x2-x1)-1;BJ=(
y2-y1)-1;var Aiz=As.extent[0];var AiB=As.extent[1];var Af2=(As.extent[2]-Aiz)-1;
var Af1=(As.extent[3]-AiB)-1;if(!Af2)Af2=1;if(!Af1)Af1=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((As.AiT[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AiT[1]-AiB)*BJ)/Af1)|0)];
this.ED=[x1+((((As.AiU[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AiU[1]-AiB)*BJ)/Af1)|0)];this.
MG=[x1+((((As.AAX[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AAX[1]-AiB)*BJ)/Af1)|0)];this.KB=[
x1+((((As.AAY[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AAY[1]-AiB)*BJ)/Af1)|0)];}else{this.
DM([x1+((((As.AiT[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AiT[1]-AiB)*BJ)/Af1)|0)]);this.DC([
x1+((((As.AiU[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AiU[1]-AiB)*BJ)/Af1)|0)]);this.Ky([x1+((((
As.AAX[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AAX[1]-AiB)*BJ)/Af1)|0)]);this.JZ([x1+((((As.
AAY[0]-Aiz)*BZ)/Af2)|0),y1+((((As.AAY[1]-AiB)*BJ)/Af1)|0)]);this.Ev=As;}return[BZ+
1,BJ+1];},Anl:function(aOffset,Atv){if(Atv){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.MG=A.abf(this.MG,aOffset);this.KB=A.abf(this.KB,aOffset
);}else{this.DM(A.abf(this.Et,aOffset));this.DC(A.abf(this.ED,aOffset));this.Ky(
A.abf(this.MG,aOffset));this.JZ(A.abf(this.KB,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.MG[0];var y2=this.MG[1];if((((this.KB[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.KB[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.MG[0]<x1)x1=
this.MG[0];if(this.KB[0]<x1)x1=this.KB[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
MG[1]<y1)y1=this.MG[1];if(this.KB[1]<y1)y1=this.KB[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.KB[0]>x2)x2=this.KB[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.KB[1]>y2)y2=this.KB[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JZ:function(E){var B;if(A.aaX(E,this.KB))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.KB=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JN],this);}},Ky:function(E){var B;if(A.aaX(E,
this.MG))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Ev=null;this.MG=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JN],this);}},DC:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JN],this);}},DM:function(E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Et=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JN],this);}},ARs:function(K2){var HC=A.abi(4,
A.wf,null);var O=0;var Ih=3;var A2H=false;var A2I=false;HC.Set(0,this.Et);HC.Set(
1,this.ED);HC.Set(2,this.MG);HC.Set(3,this.KB);while(O<4){var Bhk=HC.Get(O)[0];var
ALC=HC.Get(O)[1];var BC8=HC.Get(Ih)[0];var A4Z=HC.Get(Ih)[1];if(((ALC>K2[1])!==(
A4Z>K2[1]))||((ALC<K2[1])!==(A4Z<K2[1]))){var Ep=((((BC8-Bhk)*(K2[1]-ALC))/(A4Z-
ALC))|0)+Bhk;if(K2[0]>Ep)A2H=!A2H;if(K2[0]<Ep)A2I=!A2I;}Ih=O;O=O+1;}return A2H||
A2I;},BjO:function(){return((((this.Et[0]===this.KB[0])&&(this.ED[0]===this.MG[0
]))&&(this.Et[1]===this.ED[1]))&&(this.MG[1]===this.KB[1]))||((((this.Et[0]===this.
ED[0])&&(this.MG[0]===this.KB[0]))&&(this.Et[1]===this.KB[1]))&&(this.ED[1]===this.
MG[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZE;},
_className:"Core::QuadView"};C.Eu={M:A.wg,AtZ:function(BH,Ah9){var As=A._NewObject(
C.Arm,0);As.extent=this.M;As.Bd=BH;As.NE=Ah9;this.Ev=As;},AuU:function(BH,MP){var
B;var EW=this.PO;var As=this.Ev;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var Ke=[BH[2]-BH[0],BH[3]-BH[1]];var BZ=x2-x1;var BJ=
y2-y1;if(!MP){var NH=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NH[0]!==Ke[0]){var HU=((EW&0x4)===0x4);var HV=((EW&0x8)===0x8);var Qx=((EW&0x1
)===0x1);if(!HU&&(Qx||!HV))x1=((x1*Ke[0])/NH[0])|0;if(!HV&&(Qx||!HU)){x2=x2-As.Bd[
0];x2=((x2*Ke[0])/NH[0])|0;x2=x2-Ke[0];}else x2=x2-As.Bd[2];x1=x1+BH[0];x2=x2+BH[
2];if(!Qx){if(HU&&!HV)x2=x1+BZ;else if(!HU&&HV)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ
)/2)|0);x2=x1+BZ;}}}else{x2=x2-As.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(NH[1]!==Ke[1
]){var HW=((EW&0x10)===0x10);var HT=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(
!HW&&(Qy||!HT))y1=((y1*Ke[1])/NH[1])|0;if(!HT&&(Qy||!HW)){y2=y2-As.Bd[1];y2=((y2
*Ke[1])/NH[1])|0;y2=y2-Ke[1];}else y2=y2-As.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qy
){if(HW&&!HT)y2=y1+BJ;else if(!HW&&HT)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=
y1+BJ;}}}else{y2=y2-As.Bd[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MP){case 3:{x1=
BH[0];x2=x1+BZ;}break;case 4:{x2=BH[2];x1=x2-BZ;}break;case 1:{y1=BH[1];y2=y1+BJ;
}break;case 2:{y2=BH[3];y1=y2-BJ;}break;default:;}if((MP===3)||(MP===4)){var HW=((
EW&0x10)===0x10);var HT=((EW&0x20)===0x20);var Qy=((EW&0x2)===0x2);if(Qy){y1=BH[
1];y2=BH[3];}else if(HW&&!HT){y1=BH[1];y2=y1+BJ;}else if(HT&&!HW){y2=BH[3];y1=y2-
BJ;}else{y1=BH[1]+((((BH[3]-BH[1])-BJ)/2)|0);y2=y1+BJ;}}if((MP===1)||(MP===2)){var
HU=((EW&0x4)===0x4);var HV=((EW&0x8)===0x8);var Qx=((EW&0x1)===0x1);if(Qx){x1=BH[
0];x2=BH[2];}else if(HU&&!HV){x1=BH[0];x2=x1+BZ;}else if(HV&&!HU){x2=BH[2];x1=x2-
BZ;}else{x1=BH[0]+((((BH[2]-BH[0])-BZ)/2)|0);x2=x1+BZ;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=As;}return[x2-x1,y2-y1];},Anl:function(aOffset,Atv){if(Atv)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JN],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B8:null,B9:null,AKx:null,FG:null
,Hd:null,XB:null,ApS:null,AV:null,G9:255,AzO:0,AzR:0,AzQ:0,AzP:0,Init:function(aArg
){this.Am();},Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(CZ.C1===this))this.Bdq(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FG.Update();CZ.A5_(aClip,this.FG,0,A.abh(this.M,aOffset),Ce,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzP,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzR);Az=A.abN(
Az,Az[2]+this.AzQ);Az=[].concat(Az.slice(0,3),Az[3]+this.AzO);if(((this.U&0x80000
)===0x80000)){var Ap5=BD;var X;for(X=this.B8;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap5=
A.wC(Ap5,X.GetClipping());Az=A.wC(Az,A.abh(Ap5,this.M.slice(0,2)));}return Az;},
Yk:function(Dc,BF,Oh,Aak,Ac6,Ac5){var B;var X=this.B9;var Apm=null;var AE=BD;var
Kf=null;var A23=!!this.XB&&(!!this.XB.FQ||!!this.XB.B8);if(((B=A.lb(Dc,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Dc=A.abg(Dc,this.M.slice(0,2));if(!!Ac6){X=Ac6;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kf){Kf=X.
AJ;while(!!Kf&&!((Kf.U&0x200)===0x200))Kf=Kf.AJ;if(!!Kf)AE=A.lb(Dc,Kf.GetExtent(
));else AE=BD;}if(Kf===X){Kf=null;AE=BD;}if((!!Aak&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C1===X)&&!A23))
)){var extent=X.GetExtent();var AJ1=Aak;var Ao8=null;if(AJ1===X)AJ1=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao8=X.Yk(AE
,BF,Oh,AJ1,Ac6,Ac5);}else if(!(((B=A.lb(extent,Dc))[0]>=B[2])||(B[1]>=B[3]))||(Aak===
X))Ao8=X.Yk(Dc,BF,Oh,AJ1,Ac6,Ac5);X=X.AJ;if(!!Ao8){if(!Apm||((Ao8.Au5<Apm.Au5)&&(
Ao8.Au5>=0)))Apm=Ao8;if(!Ao8.Au5)X=null;}}else X=X.AJ;Ac6=null;}return Apm;},AuK:
function(Dc){var B;var F;var X=this.B8;var LD=BD;var AAR=true;var result=(Dc=F=A.
abg(Dc,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At$=(C.Y.isPrototypeOf(
X)?X:null);LD=A.lb(Dc,At$.M);AAR=((At$.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAR){var AE=A.lb(X.GetClipping(),LD);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuK(AE));}}else{var AE=A.lb(X.GetClipping(),
Dc);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuK(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Rt,U8){var B;
var Ts=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((U8&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Eu.Cs.call(this,Rt,U8);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rt&0x80000)===0x80000))&&!((Ts&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var XA=this.U^Ts;if(!!this.AV&&((XA&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.Hd&&((XA&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C1.
U&0x14)===0x14))this.Hd.C1.Cs(0x40,0x0);else this.Hd.C1.Cs(0x0,0x40);}if(((XA&0x10
)===0x10)){var X;for(X=this.B8;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C1===X)))X.Cs(Rt&0x10,U8&
0x10);}if(!!XA){this.U=this.U|0x8000;A.pe([this,this.ABw],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al1=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKF=[
E[2]-E[0],E[3]-E[1]];var Ap1=!A.aaX(Al1,AKF);if(Ap1&&!!this.FG){this.FG.ArS(AKF);
A.we(this,0);A.we(this.FG,0);}C.Eu.H.call(this,E);if((Ap1&&(Al1[0]>0))&&(Al1[1]>
0)){var Bd=[].concat(Ce,Al1);var X=this.B8;while(!!X){if((!X.Ev&&(X.PO!==0x14))&&
!((X.U&0x400)===0x400))X.AtZ(Bd,null);X=X.Ah;}}if(Ap1){this.U=this.U|0x5000;A.pe([
this,this.ABw],this);}},A3$:function(CN){var Bem=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKx;if(!Bem)return null;while(!!D5&&(!D5.Bw||!D5.G4(Bem)))D5=D5.
Ah;return D5;},BCS:function(G){if(!!this.FG){this.FG.C1=this;var AE=A.abg(this.AuK(
A.abh(this.FG.QO,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Avn(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bdq(this.FG,AE,Ce,255,true);this.FG.
C1=null;}},Bdq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var X=this.B8;var LD=BD;
var AAR=true;this.BiN(CZ,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At$=(C.Y.isPrototypeOf(X)?X:null);AAR=((At$.U&0x1)===0x1);LD=aClip;if(!((
At$.U&0x80000)===0x80000))LD=A.lb(LD,A.abh(At$.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAR){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LD
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kq(CZ,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kq(CZ,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.BiQ(CZ,aClip,aOffset,Ck,aBlend);},Bgj:
function(){var B;var A2A=((this.U&0x1000)===0x1000);var AiG=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aat=false;var Adn=BD;var K4=BD;var Aau=Ce;var AtV=0;var AtW=0;
var AtU=0;var Qq=0;var X=this.B9;var Kf=null;var AlT=null;while(!!X){if(((X.U&0x800
)===0x800)){Aat=true;X.U=X.U&~0x800;}if(Aat&&((X.U&0x200)===0x200)){Aat=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag1)X.U=X.U|0x1000;}X=X.AJ;}Aat=false;X=this.B8;
if(A2A){this.U=this.U&~0x1000;A2A=!((AiG[0]>=AiG[2])||(AiG[1]>=AiG[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlT&&(AtU!==Qq)){var AdL=X;var AK1=0;var ABb=Adn[2]-
Adn[0];var Azp=Adn[3]-Adn[1];var AJR=0;var Aqa=Ce;do if(((AdL.U&0x200)===0x200))
AdL=null;else if(((AdL.U&0x401)===0x401)){Aqa=[(B=AdL.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qq===3)||(Qq===4))ABb=ABb-Aqa[0];if((Qq===1)||(Qq===2))Azp=Azp-Aqa[1];
if(!AlT||((ABb>=0)&&(Azp>=0))){AlT=AdL;AdL=AdL.Ah;if((Qq===3)||(Qq===4)){ABb=ABb-
AtV;if(Aqa[1]>AK1)AK1=Aqa[1];}if((Qq===1)||(Qq===2)){Azp=Azp-AtW;if(Aqa[0]>AJR)AJR=
Aqa[0];}}else AdL=null;}else AdL=AdL.Ah;while(!!AdL);if(!AlT)AlT=Kf;K4=Adn;switch(
AtU){case 9:case 11:K4=[].concat(K4.slice(0,3),K4[1]+AK1);break;case 10:case 12:
K4=A.abP(K4,K4[3]-AK1);break;case 5:case 7:K4=A.abN(K4,K4[0]+AJR);break;case 6:case
8:K4=[].concat(K4[2]-AJR,K4.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.NE!==Kf))X.Ev=null;if((!X.Ev&&Aat)&&((X.PO!==0x14)||!!Qq))X.
AtZ(K4,Kf);}if(!!X.Ev){if(A2A&&!((X.U&0x400)===0x400))X.AuU(AiG,0);if(Aat&&((X.U&
0x400)===0x400)){var C6=X.AuU(A.abh(K4,Aau),Qq);if(((X.U&0x1)===0x1)){var Bq=Ce;
switch(Qq){case 3:Bq=[C6[0]+AtV,Bq[1]];break;case 4:Bq=[-C6[0]-AtV,Bq[1]];break;
case 1:Bq=[Bq[0],C6[1]+AtW];break;case 2:Bq=[Bq[0],-C6[1]-AtW];break;default:;}Aau=
A.abf(Aau,Bq);}}}if(((X.U&0x200)===0x200)){if(Aat)A.pe(Kf.Em,Kf);Aat=((X.U&0x1000
)===0x1000);Kf=(C.Y.isPrototypeOf(X)?X:null);if(Aat){X.U=X.U&~0x1000;AtU=Kf.Ag1;
Qq=AtU;Adn=A.abh(Kf.M,Kf.Br);K4=Adn;Aau=Ce;AtV=Kf.Space+Kf.AU9;AtW=Kf.Space;Aat=
!((Adn[0]>=Adn[2])||(Adn[1]>=Adn[3]));AlT=null;switch(AtU){case 9:case 10:Qq=3;break;
case 11:case 12:Qq=4;break;case 5:case 6:Qq=1;break;case 7:case 8:Qq=2;break;default:;
}}if(Aat)this.Bj(Kf.M);}if(X===AlT){switch(AtU){case 9:case 11:Aau=[0,(Aau[1]+(K4[
3]-K4[1]))+AtW];break;case 10:case 12:Aau=[0,(Aau[1]-(K4[3]-K4[1]))-AtW];break;case
5:case 7:Aau=[(Aau[0]+(K4[2]-K4[0]))+AtV,0];break;case 6:case 8:Aau=[(Aau[0]-(K4[
2]-K4[0]))-AtV,0];break;default:;}AlT=null;}X=X.Ah;}if(Aat)A.pe(Kf.Em,Kf);this.U=
this.U&~0x2000;this.Bl([AiG[2]-AiG[0],AiG[3]-AiG[1]]);},JN:function(G){A.pe([this
,this.ABw],this);},ABw:function(G){var B;var BC0=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bgj();}if(((this.U&0x8000)===
0x8000)||BC0){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E7);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},Bbz:function(Aq){this.Bb(Aq);},ASG:function(){return!!this.FG;},ArL:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AED=null;this.FG.ArS(Ce);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArS([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AED=[this,this.BCS];}A.we(this,0);},A8V:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},C4:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0B:
function(Aq){this.C4(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bmi:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fq:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoI,AoJ,AoK,AoH){var B;var Azg=this.M;var RA=
Azg;if(AoI<0)AoI=0;if(AoI>255)AoI=255;if(AoJ<0)AoJ=0;if(AoJ>255)AoJ=255;if(AoK<0
)AoK=0;if(AoK>255)AoK=255;if(AoH<0)AoH=0;if(AoH>255)AoH=255;RA=[].concat(RA[0]-(
Math.max(AoI,this.AzP)&0xFF),RA.slice(1,4));RA=A.abN(RA,RA[2]+(Math.max(AoJ,this.
AzQ)&0xFF));RA=A.abP(RA,RA[1]-(Math.max(AoK,this.AzR)&0xFF));RA=[].concat(RA.slice(
0,3),RA[3]+(Math.max(AoH,this.AzO)&0xFF));if(AoI!==this.AzP){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RA;Az=A.abN(Az
,Azg[0]);this.Ab.Bj(Az);}this.AzP=AoI&0xFF;}if(AoJ!==this.AzQ){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RA;Az=[].
concat(Azg[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzQ=AoJ&0xFF;}if(AoK!==this.AzR
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000
)){var Az=RA;Az=[].concat(Az.slice(0,3),Azg[1]);this.Ab.Bj(Az);}this.AzR=AoK&0xFF;
}if(AoH!==this.AzO){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.
U&0x80000)===0x80000)){var Az=RA;Az=A.abP(Az,Azg[3]);this.Ab.Bj(Az);}this.AzO=AoH&
0xFF;}},BiQ:function(CZ,aClip,aOffset,Ck,aBlend){},BiN:function(CZ,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hr;},GetMinimalSize:function(){return Ce;
},AVe:function(Iv,Og,Xm,Th,Ti,Ah_,Pa,Rs,LB,Lz,LA){var B;if(!this.Hd){this.AkM(Iv
,Og,Xm,Th,Ti,null,null,LB,Lz,LA);return;}var Al0=this.Hd;var JK=Al0.Ah;if(((Iv.U&
0x10000)===0x10000)&&(this.Hd.C1!==Iv))throw new Error(IW);var Adt=A._NewObject(
C.AN5,0);var RD=Al0.RD;var RM=null;var Mg=null;if(!!JK){RM=JK.RM;Mg=JK.Mg;}if(!!
JK&&!!Al0.ApR)RM=Al0.ApR;if(!!JK&&!!Pa)Mg=Pa;if(!!Ah_)RD=Ah_;if(!Og)Og=A._GetAutoObject(
A.acl.AsG);if(!Xm)Xm=Og;if(!Ti)Ti=Th;if(!Th)Th=Ti;Adt.RD=Xm;Adt.Mg=Th;Adt.RM=Ti;
Adt.ApR=Rs;Adt.C1=Iv;Adt.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Adt;if(this.AV===
Iv)this.Bb(null);Al0.C1.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iv.U&0x4)===
0x4))Iv.Cs(0x10040,0x0);else Iv.Cs(0x10000,0x0);if(!!Mg){this.NT(JK.C1,Mg.Aec(),
null,null,LA);this.NT(Al0.C1,RD.Sd(),null,null,true);this.NT(Adt.C1,Og.Se(),LB,Lz
,true);}else if(!!RM){this.NT(JK.C1,RM.Aed(),null,null,LA);this.NT(Al0.C1,RD.Sd(
),null,null,true);this.NT(Adt.C1,Og.Se(),LB,Lz,true);}else if(!!RD){this.NT(Al0.
C1,RD.Sd(),null,null,LA);this.NT(Adt.C1,Og.Se(),LB,Lz,true);}else this.NT(Adt.C1
,Og.Se(),LB,Lz,LA);},AqH:function(Iv,Ah_,Pa,Rs,LB,Lz,LA){var B;if(!this.Hd)return;
if(!Iv)return;var KG=this.Hd;var JK=this.Hd.Ah;var ApX=null;while((!!KG&&(KG.C1!==
Iv))&&!!KG.Ah){ApX=KG;KG=JK;JK=KG.Ah;}if(!KG||(KG.C1!==Iv))throw new Error(It);if(
!ApX){this.Hd=JK;KG.Ah=null;}else{ApX.Ah=JK;KG.Ah=null;}KG.C1.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JK)&&!ApX)&&((JK.C1.U&0x200000)===0x200000))JK.C1.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JK)&&!ApX)&&((JK.C1.U&0x4)===0x4))JK.C1.Cs(
0x40,0x0);var RD=KG.RD;var RM=null;var Mg=null;if(!!JK)RM=JK.RM;if(!!JK&&!!KG.ApR
)RM=KG.ApR;if(!!JK&&!!Rs)RM=Rs;if(!!ApX&&!!JK)Mg=JK.Mg;if((!!ApX&&!!JK)&&!!Pa)Mg=
Pa;if(!!Ah_)RD=Ah_;if(!!Mg){this.NT(JK.C1,Mg.Aec(),null,null,LA);this.NT(KG.C1,RD.
Sd(),LB,Lz,true);}else if(!!RM){this.NT(JK.C1,RM.Aed(),null,null,LA);this.NT(KG.
C1,RD.Sd(),LB,Lz,true);}else this.NT(KG.C1,RD.Sd(),LB,Lz,LA);},AkM:function(Iv,Og
,Xm,Th,Ti,Pa,Rs,LB,Lz,LA){var B;if(!Iv)return;if(!!this.Hd&&(this.Hd.C1===Iv)){this.
AVe(Iv,Og,Xm,Th,Ti,null,Pa,Rs,LB,Lz,LA);return;}if(((Iv.U&0x10000)===0x10000))throw new
Error(IW);var KG=A._NewObject(C.AN5,0);if(!!this.Hd&&!this.Hd.Mg){if(!Rs)Rs=Pa;if(
!Pa)Pa=Rs;}var Mg=null;if(!!this.Hd)Mg=this.Hd.Mg;if(!!this.Hd&&!!Pa)Mg=Pa;if(!Og
)Og=A._GetAutoObject(A.acl.AsG);if(!Xm)Xm=Og;if(!Ti)Ti=Th;if(!Th)Th=Ti;KG.RD=Xm;
KG.Mg=Th;KG.RM=Ti;KG.ApR=Rs;if(this.AV===Iv)this.Bb(null);if(!!this.Hd&&((this.Hd.
C1.U&0x200000)===0x200000))this.Hd.C1.Cs(0x0,0x10);if(!!this.Hd)this.Hd.C1.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iv.U&0x4)===0x4))Iv.Cs(0x10040,0x0);else Iv.
Cs(0x10000,0x0);KG.C1=Iv;KG.Ah=this.Hd;this.Hd=KG;if(!!Mg){this.NT(this.Hd.Ah.C1
,Mg.Aec(),null,null,LA);this.NT(Iv,Og.Se(),LB,Lz,true);}else this.NT(Iv,Og.Se(),
LB,Lz,LA);},A7i:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7W:function(
K2){var tmp=this;while(!!tmp){K2=A.abe(K2,tmp.M.slice(0,2));tmp=tmp.Ab;}return K2;
},BjL:function(K2){var tmp=this;while(!!tmp){K2=A.abf(K2,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K2;},DispatchEvent:function(CN){var B;var X=this.AV;var B1=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A23=!!this.XB&&(!!this.XB.FQ||!!this.XB.B8);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B1=null;}if(!!this.Hd&&!A23)GD=this.Hd.C1.DispatchEvent(CN);if(!GD&&!!B1)
GD=B1.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G4(CN);if(!GD)GD=this.G4(CN);if(!GD
)GD=this.A3$(CN);return GD;},BroadcastEventAtPosition:function(CN,HA,aFilter){var
B;var X=this.B9;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HA)){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GD=B1.
BroadcastEventAtPosition(CN,A.abe(HA,B1.M.slice(0,2)),aFilter);else GD=X.G4(CN);
}X=X.AJ;}if(!GD)GD=this.G4(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B9;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GD=B1.BroadcastEvent(CN,aFilter
);else GD=X.G4(CN);}X=X.AJ;}if(!GD)GD=this.G4(CN);if(!GD)GD=this.A3$(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},Bj1:function(){this.U=this.U|0x4000;A.pe([
this,this.ABw],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABw],this
);},Bj:function(Dc){var B;var B1=this;while(!!B1&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3
]))){var Aaq=B1.FG;if(!B1.Ab&&(B1!==this)){B1.Bj(Dc);return;}if(!!Aaq){var BAD=Aaq.
QO;Aaq.QO=A.wC(Aaq.QO,Dc);if(!A.aaY(BAD,Aaq.QO)){A.we(B1,0);A.we(Aaq,0);}}if(!((
B1.U&0x1)===0x1))return;var Az=B1.M;Dc=A.abh(Dc,Az.slice(0,2));if(!!B1.FG||!((B1.
U&0x80000)===0x80000)){if(!!!B1.FG){Az=[].concat(Az[0]-B1.AzP,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B1.AzR);Az=A.abN(Az,Az[2]+B1.AzQ);Az=[].concat(Az.slice(0,3),Az[3
]+B1.AzO);}Dc=A.lb(Dc,Az);}B1=B1.Ab;}},QJ:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agk=A.aaI(Ag.GetExtent());var X=Ag;var A1L=null;var
Bc5=0;var I2=0x10000;var AKX;if(((aFilter&0x10000)===0x10000))I2=0x0;var top=((GA===
4)||(GA===1))||(GA===6);var bottom=((GA===5)||(GA===3))||(GA===8);var left=((GA===
2)||(GA===1))||(GA===3);var right=((GA===7)||(GA===6))||(GA===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B9;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I2||!((B=I2)&&((X.U&B)===B
))))for(AKX=0;AKX<2;AKX++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKX){if((left&&(s[0]>s[1]))&&(Az[2]<Agk[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agk[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agk[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agk[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agk);var
Rv=Bq;if(Rv[0]<0)Rv=[-Rv[0],Rv[1]];if(Rv[1]<0)Rv=[Rv[0],-Rv[1]];if(((((!left||(Bq[
0]<=-Rv[1]))&&(!right||(Bq[0]>=Rv[1])))&&(!top||(Bq[1]<=-Rv[0])))&&(!bottom||(Bq[
1]>=Rv[0])))&&((Rv[0]>0)||(Rv[1]>0))){var RF=Bq[0];var RG=Bq[1];var Jo=Math.sqrt((
RF*RF)+(RG*RG));var AKw=0;if(!left&&!right)AKw=Jo/Rv[1];if(!top&&!bottom)AKw=Jo/
Rv[0];Jo=(Jo*AKw)*AKw;if((Jo<Bc5)||!A1L){Bc5=Jo;A1L=X;}}}}return A1L;},AqO:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;var I2=0x10000;
if(((aFilter&0x10000)===0x10000))I2=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I2||!((B=I2)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TT:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;
var I2=0x10000;if(((aFilter&0x10000)===0x10000))I2=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I2||!((B=I2)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACW:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlY=Ag.Ah;var Al$=Ag.AJ;var I2=0x10000;if(((aFilter&0x10000)===0x10000))I2=0x0;
while(!!AlY||!!Al$){if((!!AlY&&(!aFilter||((B=aFilter)&&((AlY.U&B)===B))))&&(!I2||
!((B=I2)&&((AlY.U&B)===B))))return AlY;if((!!Al$&&(!aFilter||((B=aFilter)&&((Al$.
U&B)===B))))&&(!I2||!((B=I2)&&((Al$.U&B)===B))))return Al$;if(!!AlY)AlY=AlY.Ah;if(
!!Al$)Al$=Al$.AJ;}return null;},Dd:function(aFilter){var B;var X=this.B8;var AE=
BD;var I2=0x10000;if(((aFilter&0x10000)===0x10000))I2=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I2||!((B=I2)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NT:function(KF,FP,LB,Lz
,LA){var B;if(!KF)return;if(!FP)throw new Error(O6);if((!!FP.P||!!FP.Ab)||!!FP.Pm
)throw new Error(P_);if(!!KF.Ab&&(KF.Ab!==this))throw new Error(P$);if(!this.XB)
this.XB=A._NewObject(C.AVj,0);FP.Ab=this;FP.P=KF;FP.AKI=Lz;FP.A3t=LB;if(!!KF.ApS
)KF.ApS.Pm.BoY(KF.ApS);KF.ApS=FP;KF.U=KF.U|0x20000;if((LA&&!!this.XB.B9)&&!this.
XB.B9.ARo())(A.acl.ACR.isPrototypeOf(B=this.XB.B9)?B:null).A5c(FP);else{var Pm=A.
_NewObject(A.acl.ACR,0);Pm.A5c(FP);this.XB.A$D(Pm,false);}},AhE:function(Ag,J$){
var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new Error(Ff);if(!!J$&&(J$.
Ab!==this))throw new Error(L5);if(Ag.Ah===J$)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JN],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JN],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B9=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;var GC=
null;var Iy=this.B9;var LS=Ag.J5;if(!!J$){GC=J$;Iy=J$.AJ;}if(!!GC&&(LS>GC.J5))LS=
GC.J5;if(!!Iy&&(LS<Iy.J5))LS=Iy.J5;if(LS!==Ag.J5){Ag.Ab=null;Ag.Ar8(LS);Ag.Ab=this;
}if(!J$){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.B9;Ag.Ah=null;this.B9=Ag;}else{Ag.
Ah=J$;Ag.AJ=J$.AJ;J$.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B8===J$)this.B8=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZG:function(Ag){var B;if(!Ag)throw new
Error(CR);if(Ag.Ab!==this)throw new Error(Ff);if(!Ag.Ah)return;var Iy=this.B9;var
LS=Ag.J5;while(!!Iy&&(Iy.J5>LS))Iy=Iy.AJ;if(((Iy===Ag)||!Iy)||(Iy.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JN],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JN],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Iy;Ag.Ah=Iy.Ah;Iy.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},J3:function(Ag,Qh){var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new
Error(Ff);var Iy=Ag;var GC=Ag;var LS=Ag.J5;while(((Qh>0)&&!!Iy.Ah)&&(Iy.Ah.J5<=LS
)){Iy=Iy.Ah;Qh=Qh-1;}while(((Qh<0)&&!!GC.AJ)&&(GC.AJ.J5>=LS)){GC=GC.AJ;Qh=Qh+1;}
if((Iy===Ag)&&(GC===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JN],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JN],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;if(Iy
!==Ag){Ag.Ah=Iy.Ah;Ag.AJ=Iy;Iy.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GC!==Ag){Ag.Ah=GC;
Ag.AJ=GC.AJ;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B9=Ag;if(!Ag.AJ)this.
B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HP:function(Ag){var B;if(
!Ag)throw new Error(Qa);if(Ag.Ab!==this)throw new Error(Ff);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JN],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JN],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
ACW(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag
)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AMg:function(Ag,J$
){var B;if(!Ag)throw new Error(J7);if(!!Ag.Ab)throw new Error(Od);if(!!J$&&(J$.Ab
!==this))throw new Error(L5);var GC=null;var Iy=this.B9;var LS=Ag.J5;if(!!J$){GC=
J$;Iy=J$.AJ;}if(!!GC&&(LS>GC.J5))LS=GC.J5;if(!!Iy&&(LS<Iy.J5))LS=Iy.J5;if(LS!==Ag.
J5){Ag.Ab=null;Ag.Ar8(LS);Ag.Ab=this;}if(!J$){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.
B9;this.B9=Ag;}else{Ag.Ah=J$;Ag.AJ=J$.AJ;J$.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B8===J$)this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOW()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JN],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JN],this);}},J:function(Ag,Qh){var B;if(!Ag)throw new Error(
J7);if(!!Ag.Ab)throw new Error(Od);var GC=null;var LS=Ag.J5;if(((Qh<0)&&!!this.B9
)&&(this.B9.J5>=LS)){GC=this.B9;Qh=Qh+1;}while((((Qh<0)&&!!GC)&&!!GC.AJ)&&(GC.AJ.
J5>=LS)){GC=GC.AJ;Qh=Qh+1;}if((!GC&&!!this.B9)&&(this.B9.J5>LS))GC=this.B9;while((
!!GC&&!!GC.AJ)&&(GC.AJ.J5>LS))GC=GC.AJ;if(!GC){Ag.Ab=this;Ag.AJ=this.B9;if(!!this.
B9)this.B9.Ah=Ag;if(!this.B8)this.B8=Ag;this.B9=Ag;}else{Ag.Ab=this;Ag.AJ=GC.AJ;
Ag.Ah=GC;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B8=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOW()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JN],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JN],this);}},A8X:function(){return this.
AV;},Awp:function(){return this.G9;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKx)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RJ:null,JJ:null,Fv:A.abi(10,null
,null),AtH:null,Air:null,ABy:0,If:0,Mc:A.abi(10,0,null),AJX:A.abi(10,A.wg,null),
Xz:A.abi(10,0,null),Af0:A.abi(10,A.wf,null),AtM:A.abi(10,0,null),Aiq:A.abi(10,A.
wf,null),Xy:A.abi(10,A.wf,null),RC:A.abi(10,A.wf,null),Ade:A.abi(10,A.wf,null),EP:
0,AKj:0,AKi:0,Ou:A.abi(4,0,null),Kk:A.abi(4,A.wg,null),Kh:0,AAd:0,At1:0,Az0:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},In:function(){return this;
},Kq:function(CZ,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.Avn(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kq.call(this,CZ,aClip
,aOffset,Ck,aBlend);},Cs:function(Rt,U8){var B;C.P.Cs.call(this,Rt,U8);if(!this.
Ab&&(((Rt&0x1)===0x1)||((U8&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rt&0x2)===0x2)||((U8&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArL:
function(E){var B;var BAB=this.FG;C.P.ArL.call(this,E);if(((BAB!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},C4:function(
E){var B;var BP=this.G9;C.P.C4.call(this,E);if(((BP!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvX=!!this.If;if(!!this.If)CN.Bs=this.If;}var GD=null;if(!!this.
JJ){GD=this.JJ.C1.DispatchEvent(CN);if(!GD)GD=this.G4(CN);if(!GD)GD=this.A3$(CN);
this.If=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.If=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvX=!!this.If;if(!!this.If)CN.Bs=this.If;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.If=0;return GD;},Bj:function(Dc){var
B;if(this.ABy>0)throw new Error(Qb);if(!!this.FG&&!this.Ab){if(((B=this.FG.QO)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QO=A.wC(this.FG.QO
,Dc);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Dc=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Dc);return;}Dc=A.
lb(A.abh(Dc,this.M.slice(0,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;
var O;for(O=0;O<this.Kh;O=O+1)if(!(((B=A.lb(this.Kk.Get(O),Dc))[0]>=B[2])||(B[1]>=
B[3]))){this.Kk.Set(O,A.wC(this.Kk.Get(O),Dc));this.Ou.Set(O,A.aaH(this.Kk.Get(O
)));return;}if(this.Kh<3){this.Kk.Set(this.Kh,Dc);this.Ou.Set(this.Kh,A.aaH(Dc));
this.Kh=this.Kh+1;return;}var Ih;var RI;var AAc=0;var AAf=0;var Bc4=2147483647;this.
Kk.Set(this.Kh,Dc);this.Ou.Set(this.Kh,A.aaH(Dc));for(Ih=0;Ih<=this.Kh;Ih=Ih+1)for(
RI=Ih+1;RI<=this.Kh;RI=RI+1){var ALp=A.aaH(A.wC(this.Kk.Get(Ih),this.Kk.Get(RI))
);var BfV=((ALp<<8)/(this.Ou.Get(Ih)+this.Ou.Get(RI)))|0;if(BfV<Bc4){Bc4=BfV;AAc=
Ih;AAf=RI;}}this.Kk.Set(AAc,A.wC(this.Kk.Get(AAc),this.Kk.Get(AAf)));this.Ou.Set(
AAc,A.aaH(this.Kk.Get(AAc)));if(AAf!==this.Kh){this.Kk.Set(AAf,this.Kk.Get(this.
Kh));this.Ou.Set(AAf,this.Ou.Get(this.Kh));}},Bzd:function(){var LL=A._NewObject(
C.AqJ,0);LL.AvX=!!this.If;if(!!this.If)LL.Bs=this.If;return LL;},Ao6:function(){
var LL=A._NewObject(C.Aef,0);LL.AvX=!!this.If;if(!!this.If)LL.Bs=this.If;return LL;
},AtL:function(){var LL=A._NewObject(C.Au2,0);LL.AvX=!!this.If;if(!!this.If)LL.Bs=
this.If;return LL;},Bzh:function(G){var O;var Apm=false;for(O=0;O<10;O=O+1)if(!!
this.Fv.Get(O)){var pos=this.RC.Get(O);var B1=this.Fv.Get(O).Ab;while(!!B1&&(B1!==
this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Fv.Get(O)!==this)){
var tmp=this.Fv.Get(O);this.EP=O;this.Fv.Set(O,null);tmp.G4(this.Ao6().InitializeUp(
O,this.Aiq.Get(O),this.Af0.Get(O),this.Xz.Get(O),this.Mc.Get(O)+1,this.Xy.Get(O)
,false,this.RC.Get(O),this.Ade.Get(O)));this.BroadcastEvent(this.AtL().InitializeUp(
O,this.Mc.Get(O)+1,false,tmp,this.RC.Get(O)),0x18);}else{this.Xz.Set(O,(this.Air.
Bs-this.AtM.Get(O))|0);if(this.Xz.Get(O)<10)this.Xz.Set(O,10);this.EP=O;this.Fv.
Get(O).G4(this.Ao6().InitializeHold(O,pos,this.Af0.Get(O),this.Xz.Get(O),this.Mc.
Get(O)+1,this.Xy.Get(O),this.RC.Get(O),this.Ade.Get(O)));Apm=true;}}if(!Apm)this.
Air.Ar(false);},GetFPS:function(){var ticksCount=0;var BdG=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKj&&(ticksCount>this.AKj))BdG=((this.AKi*1000)/((
ticksCount-this.AKj)|0))|0;this.AKi=0;this.AKj=ticksCount;return BdG;},Update:function(
){var B;if(!this.AtH)this.AtH=A._NewObject(A.Graphics.Canvas,0);this.AtH.ArS([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtH.Update();return this.UpdateGE20(this.AtH);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BD;var Agv=this.UpdateCanvas(
CZ,Ce);this.EndUpdate();return Agv;},EndUpdate:function(){if(this.Kh>0){this.AKi=
this.AKi+1;this.Kh=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Agv=BD;var ByW=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var O;var Ih=this.Kh;this.ABy=this.
ABy+1;CZ.C1=this;for(O=0;(O<Ih)&&(O<4);O=O+1)if(this.Ou.Get(O)>0){this.Kq(CZ,A.abg(
this.Kk.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agv=A.wC(Agv,A.lb(ByW
,this.Kk.Get(O)));}else Ih=Ih+1;CZ.C1=null;this.ABy=this.ABy-1;if(!((Agv[0]>=Agv[
2])||(Agv[1]>=Agv[3])))return A.abg(Agv,aOffset);else return Agv;},GetUpdateRegion:
function(AJh){var O;var Ih=this.Kh;if(AJh<0)return BD;for(O=0;(O<Ih)&&(O<4);O=O+
1)if(!this.Ou.Get(O)){Ih=Ih+1;AJh=AJh+1;}else if(O===AJh)return this.Kk.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kh&&!A.aaY(this.Kk.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var BgZ=A.abi(3,A.wg,null);var BgY=this.Kh;for(O=0;
O<BgY;O++)BgZ.Set(O,this.Kk.Get(O));for(O=0;O<BgY;O++){var Bge=A.abh(BgZ.Get(O),
this.M.slice(0,2));var Bgf=this.AuK(Bge);if(!A.aaY(Bge,Bgf))this.Bj(A.abg(Bgf,this.
M.slice(0,2)));}}var Ih;var RI;for(Ih=0;Ih<(this.Kh-1);Ih++)if(this.Ou.Get(Ih)>0
)for(RI=Ih+1;RI<this.Kh;RI++)if(this.Ou.Get(RI)>0){var ALp=A.aaH(A.wC(this.Kk.Get(
Ih),this.Kk.Get(RI)));if(((ALp-this.Ou.Get(Ih))-this.Ou.Get(RI))<0){this.Kk.Set(
Ih,A.wC(this.Kk.Get(Ih),this.Kk.Get(RI)));this.Ou.Set(Ih,ALp);this.Ou.Set(RI,0);
}}for(O=this.Kh-1;O>=0;O--)if(!this.Ou.Get(O))this.Kh=this.Kh-1;return this.Kh;}
,DoesNeedUpdate:function(){if(this.Kh>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Ce,aSize));if(this.Az0)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A1b){if(A1b===this.Az0
)return false;this.Az0=A1b;if(!A1b){if(!!this.JJ)this.JJ.C1.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JJ)this.JJ.C1.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qi){this.If=Qi;},DriveKeyboardHitting:function(
KE,Ay2,Tg){var B;var A4a=!!this.RJ;if(!!this.RJ&&((!Tg||(this.AAd!==KE))||(this.
At1!==Ay2))){var LL=null;var X=(C.Cj.isPrototypeOf(B=this.RJ)?B:null);var D5=(C.
BL.isPrototypeOf(B=this.RJ)?B:null);if(!!this.AAd)LL=A._NewObject(C.KeyEvent,0).
Initialize(this.AAd,false);if(this.At1!==0x00)LL=A._NewObject(C.KeyEvent,0).Initialize2(
this.At1,false);if(!!D5)D5.G4(LL);else if(!!X)X.G4(LL);this.AAd=0;this.At1=0x00;
this.RJ=null;}if(!!this.RJ){var LL=null;var X=(C.Cj.isPrototypeOf(B=this.RJ)?B:null
);var D5=(C.BL.isPrototypeOf(B=this.RJ)?B:null);if(!!KE)LL=A._NewObject(C.KeyEvent
,0).Initialize(KE,true);if(this.At1!==0x00)LL=A._NewObject(C.KeyEvent,0).Initialize2(
Ay2,true);if(!!D5)D5.G4(LL);else if(!!X)X.G4(LL);}if(!this.RJ&&Tg){if(!!KE)this.
RJ=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KE,true));if(Ay2!==0x00
)this.RJ=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ay2,true));if(
!(C.BL.isPrototypeOf(B=this.RJ)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RJ)?B:null)
)this.RJ=null;this.AAd=KE;this.At1=Ay2;A4a=A4a||!!this.RJ;}this.If=0;return A4a;
},DriveCursorMovement:function(Fh){return this.DriveMultiTouchMovement(this.EP,Fh
);},DriveMultiTouchMovement:function(BF,Fh){if((BF<0)||(BF>9)){this.If=0;return false;
}var Fx=A.abe(Fh,this.RC.Get(BF));this.RC.Set(BF,Fh);if(!this.Fv.Get(BF)||A.aaX(
Fx,Ce)){this.If=0;return false;}var pos=Fh;var B1=this.Fv.Get(BF).Ab;while(!!B1&&(
B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Fv.Get(BF)!==
this)){var tmp=this.Fv.Get(BF);this.EP=BF;this.Fv.Set(BF,null);tmp.G4(this.Ao6().
InitializeUp(BF,this.Aiq.Get(BF),this.Af0.Get(BF),this.Xz.Get(BF),this.Mc.Get(BF
)+1,this.Xy.Get(BF),false,this.RC.Get(BF),this.Ade.Get(BF)));this.BroadcastEvent(
this.AtL().InitializeUp(BF,this.Mc.Get(BF)+1,false,tmp,Fh),0x18);}else{this.Aiq.
Set(BF,pos);this.EP=BF;this.Fv.Get(BF).G4(this.Bzd().Initialize(BF,pos,this.Af0.
Get(BF),Fx,this.Xz.Get(BF),this.Mc.Get(BF)+1,this.Xy.Get(BF),Fh,this.Ade.Get(BF)
));}this.If=0;return true;},DriveCursorHitting:function(Tg,BF,Fh){return this.DriveMultiTouchHitting(
Tg,BF,Fh);},DriveMultiTouchHitting:function(Tg,BF,Fh){if((BF<0)||(BF>9)){this.If=
0;return false;}var ticksCount=this.If;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BB_=this.If;this.DriveMultiTouchMovement(BF,Fh);Fh=this.RC.Get(BF);
this.If=BB_;if(Tg)this.Ade.Set(BF,Fh);if(Tg&&!this.Fv.Get(BF)){var JI;var pos=Fh;
if(A.wa(this.AJX.Get(BF),Fh)&&((ticksCount-this.AtM.Get(BF))<=250))this.Mc.Set(BF
,this.Mc.Get(BF)+1);else this.Mc.Set(BF,0);this.AJX.Set(BF,A.abh(ML,Fh));this.AtM.
Set(BF,ticksCount);if(!!this.JJ)JI=this.Yk(A.abh(ML,Fh),BF,this.Mc.Get(BF)+1,this.
JJ.C1,null,0x0);else JI=this.Yk(A.abh(ML,Fh),BF,this.Mc.Get(BF)+1,null,null,0x0);
if(!!JI){this.BroadcastEvent(this.AtL().InitializeDown(BF,this.Mc.Get(BF)+1,false
,JI.Cj,Fh),0x18);this.Fv.Set(BF,JI.Cj);this.Xy.Set(BF,JI.DG);}else{this.Fv.Set(BF
,null);this.Xy.Set(BF,Ce);this.If=0;return false;}var B1=JI.Cj.Ab;while(!!B1&&(B1
!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}this.Af0.Set(BF,pos);this.Aiq.
Set(BF,pos);this.Xz.Set(BF,0);this.Air.Ar(true);this.EP=BF;this.Fv.Get(BF).G4(this.
Ao6().InitializeDown(BF,pos,this.Mc.Get(BF)+1,this.Xy.Get(BF),false,Fh));this.If=
0;return true;}if(!Tg&&!!this.Fv.Get(BF)){var pos=Fh;var B1=this.Fv.Get(BF).Ab;while(
!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1)pos=this.Aiq.
Get(BF);this.EP=BF;var tmp=this.Fv.Get(BF);this.Fv.Set(BF,null);tmp.G4(this.Ao6(
).InitializeUp(BF,pos,this.Af0.Get(BF),this.Xz.Get(BF),this.Mc.Get(BF)+1,this.Xy.
Get(BF),false,Fh,this.Ade.Get(BF)));this.BroadcastEvent(this.AtL().InitializeUp(
BF,this.Mc.Get(BF)+1,false,tmp,Fh),0x18);this.If=0;return true;}this.If=0;return false;
},AUD:function(Aam,Bco,Ac6,Ac5){if(Aam===this)Aam=null;if(!!!Aam&&!!this.JJ)Aam=
this.JJ.C1;if(!this.Fv.Get(this.EP))return;var JI;JI=this.Yk(A.abh(ML,this.RC.Get(
this.EP)),this.EP,1,Aam,Ac6,Ac5);if(!!JI&&(this.Fv.Get(this.EP)!==JI.Cj))this.ANV(
JI.Cj,JI.DG);if(!JI&&(this.Fv.Get(this.EP)!==Bco))this.ANV(Bco,Ce);},ANV:function(
Aam,Xn){if(!this.Fv.Get(this.EP)||(this.Fv.Get(this.EP)===Aam))return;var tmp=this.
Fv.Get(this.EP);this.Fv.Set(this.EP,null);tmp.G4(this.Ao6().InitializeUp(this.EP
,this.Aiq.Get(this.EP),this.Af0.Get(this.EP),this.Xz.Get(this.EP),this.Mc.Get(this.
EP)+1,this.Xy.Get(this.EP),true,this.RC.Get(this.EP),this.Ade.Get(this.EP)));this.
BroadcastEvent(this.AtL().InitializeUp(this.EP,this.Mc.Get(this.EP)+1,true,tmp,this.
RC.Get(this.EP)),0x18);var pos=this.RC.Get(this.EP);var B1=null;if(!!Aam)B1=Aam.
Ab;while(!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(Aam
!==this)){this.Fv.Set(this.EP,null);return;}this.BroadcastEvent(this.AtL().InitializeDown(
this.EP,this.Mc.Get(this.EP)+1,true,Aam,this.RC.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fv.Set(this.EP,Aam);this.Xy.Set(
this.EP,Xn);this.Af0.Set(this.EP,pos);this.Aiq.Set(this.EP,pos);this.Mc.Set(this.
EP,0);this.Xz.Set(this.EP,0);this.AtM.Set(this.EP,ticksCount);this.Ade.Set(this.
EP,this.RC.Get(this.EP));this.Fv.Get(this.EP).G4(this.Ao6().InitializeDown(this.
EP,pos,this.Mc.Get(this.EP)+1,this.Xy.Get(this.EP),true,this.Ade.Get(this.EP)));
},AOW:function(){if(!!this.JJ)return this.JJ.C1;return null;},ACO:function(KF){var
B;if(!KF)throw new Error(S$);if(!((KF.U&0x80)===0x80))throw new Error(UW);if(this.
JJ.C1===KF)this.JJ=this.JJ.Ah;else{var AzZ=this.JJ;while(AzZ.Ah.C1!==KF)AzZ=AzZ.
Ah;AzZ.Ah=AzZ.Ah.Ah;}KF.Cs(0x0,0xD0);if(this.Az0){if(!!this.JJ)this.JJ.C1.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AM2:function(KF){var B;var As=A._NewObject(C.A78
,0);if(!KF)throw new Error(Z6);if(KF===null)throw new Error(W9);if(((KF.U&0x80)===
0x80))throw new Error(Iu);if(!!this.JJ)this.JJ.C1.Cs(0x0,0x50);else this.Cs(0x0,
0x50);As.Ah=this.JJ;As.C1=KF;this.JJ=As;if(this.Az0)KF.Cs(0xD0,0x0);else KF.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Air={
I:this},0);(this.Fv=[]).__proto__=C.Root.Fv;(this.Mc=[]).__proto__=C.Root.Mc;(this.
AJX=[]).__proto__=C.Root.AJX;(this.Xz=[]).__proto__=C.Root.Xz;(this.Af0=[]).__proto__=
C.Root.Af0;(this.AtM=[]).__proto__=C.Root.AtM;(this.Aiq=[]).__proto__=C.Root.Aiq;(
this.Xy=[]).__proto__=C.Root.Xy;(this.RC=[]).__proto__=C.Root.RC;(this.Ade=[]).__proto__=
C.Root.Ade;(this.Ou=[]).__proto__=C.Root.Ou;(this.Kk=[]).__proto__=C.Root.Kk;this.
__proto__=C.Root;this.U=0x10007F;this.Air.PV(10);this.Air.ME=[this,this.Bzh];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Air._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Air._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RJ)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JJ)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fv,D);if((B=this.
AtH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Air)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvX:false,Init:function(aArg){this.Bs=
this.Avv();},Avv:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CP:0,DQ:0,Down:false
,Initialize2:function(KE,Tg){this.CP=0;this.DQ=KE;this.Down=Tg;if((KE>=0x30)&&(KE<=
0x39))this.CP=(10+KE)-48;if((KE>=0x41)&&(KE<=0x5A))this.CP=(105+KE)-65;if((KE>=0x61
)&&(KE<=0x7A))this.CP=(105+KE)-97;if(KE===0x20)this.CP=131;if(!this.CP)switch(KE
){case 0x2B:this.CP=132;break;case 0x2D:this.CP=133;break;case 0x2A:this.CP=134;
break;case 0x2F:this.CP=135;break;case 0x3D:this.CP=136;break;case 0x2E:this.CP=
137;break;case 0x2C:this.CP=138;break;case 0x3A:this.CP=139;break;case 0x3B:this.
CP=140;break;default:;}return this;},Initialize:function(KE,Tg){this.CP=KE;this.
Down=Tg;this.DQ=0x00;var A1R=KE-10;var AtG=KE-105;if((A1R>=0)&&(A1R<=9))this.DQ=(
48+A1R)&0xFFFF;if((AtG>=0)&&(AtG<=25))this.DQ=(65+AtG)&0xFFFF;if(KE===131)this.DQ=
0x20;if(this.DQ===0x00)switch(KE){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bj6:function(Bcd){switch(
Bcd){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CP;case 147:return(((this.CP===
6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:return(this.DQ!==0x00
)||!!this.CP;default:;}return Bcd===this.CP;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARG={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARG;},_className:
"Core::LanguageEvent"};C.Au2={AxP:null,LW:A.wf,N_:0,IL:0,Down:false,NK:false,InitializeUp:
function(BF,Oh,AoE,A1t,Aal){this.Down=false;this.IL=BF;this.N_=Oh;this.LW=Aal;this.
AxP=A1t;this.NK=AoE;return this;},InitializeDown:function(BF,Oh,AoE,A1t,Aal){this.
Down=true;this.IL=BF;this.N_=Oh;this.LW=Aal;this.AxP=A1t;this.NK=AoE;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au2;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxP)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aef={Ag3:A.wf,LW:A.wf,N_:0,Jw:
0,NV:A.wf,H2:A.wf,IL:0,Down:false,NK:false,InitializeHold:function(BF,Alm,Ay5,Ay6
,Oh,Xn,Aal,Ay4){this.Down=true;this.IL=BF;this.H2=A.abf(Alm,Xn);this.NV=A.abf(Ay5
,Xn);this.Jw=Ay6;this.N_=Oh;this.LW=Aal;this.Ag3=Ay4;return this;},InitializeUp:
function(BF,Alm,Ay5,Ay6,Oh,Xn,AoE,Aal,Ay4){this.Down=false;this.IL=BF;this.H2=A.
abf(Alm,Xn);this.NV=A.abf(Ay5,Xn);this.Jw=Ay6;this.N_=Oh;this.NK=AoE;this.LW=Aal;
this.Ag3=Ay4;return this;},InitializeDown:function(BF,Alm,Oh,Xn,AoE,Aal){this.Down=
true;this.IL=BF;this.H2=A.abf(Alm,Xn);this.NV=A.abf(Alm,Xn);this.Jw=0;this.N_=Oh;
this.NK=AoE;this.LW=Aal;this.Ag3=Aal;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aef;},_className:"Core::CursorEvent"};C.AqJ={
Ag3:A.wf,LW:A.wf,N_:0,Jw:0,DG:A.wf,NV:A.wf,H2:A.wf,IL:0,Initialize:function(BF,Alm
,Ay5,aOffset,Ay6,Byh,Xn,Aal,Ay4){this.IL=BF;this.H2=A.abf(Alm,Xn);this.NV=A.abf(
Ay5,Xn);this.DG=aOffset;this.Jw=Ay6;this.N_=Byh;this.LW=Aal;this.Ag3=Ay4;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqJ;},_className:
"Core::DragEvent"};C.Y={BY:null,NC:null,Em:null,Br:A.wf,AU9:0,Space:0,Ag1:0,Kq:function(
CZ,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap5=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap5=A.wC(Ap5,X.GetClipping());
Az=A.wC(Az,Ap5);}return Az;},Cs:function(Rt,U8){var B;var Ts=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U8&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Eu.Cs.call(this,Rt,U8);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rt&0x80000)===
0x80000))&&!((Ts&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al1=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKF=[
E[2]-E[0],E[3]-E[1]];var Ap1=!A.aaX(Al1,AKF);var Fx=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fx,Ce)&&!Ap1){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anl(Fx,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((Ap1&&(Al1[0]>0))&&(Al1[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
NE!==this))X.Ev=null;if(!X.Ev&&((X.PO!==0x14)||!!this.Ag1))X.AtZ(Bd,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&Ap1){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JN],this);}}},Bf_:function(){var B;if((!this.Ag1||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1$=((this.U&0x1000)===0x1000);for(;!!X&&!A1$;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1$=true;if(((X.U&0x200)===
0x200))break;}if(A1$){this.U=this.U&~0x4000;this.Ab.Bgj();}},ApM:function(G){var
B;this.BY.Q=null;this.BY.Qw=null;this.BY=null;(B=this.NC)?B[1].call(B[0],this):null;
},Gb:function(E){var B;var Fx=A.abe(E,this.Br);if(A.aaX(Fx,Ce))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anl(Fx,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.Em,this);},A_T:function(E){var B;if(E<0)E=0;if(E===this.AU9)return;this.AU9=
E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JN],this);}},Bn5:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag1){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JN],this);}},JX:function(E){var B;if(E===this.Ag1)return;
this.Ag1=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JN],this);}},VA:function(AcZ,E8){var AtG=this.Dd(0x1);var Rz=this.M;var
Vk=A.abe(AtG.slice(0,2),Rz.slice(0,2));var Me=A.abe(AtG.slice(2,4),Rz.slice(2,4)
);var Bq=Ce;if((Vk[0]>0)&&(Me[0]>Vk[0]))Bq=[Vk[0],Bq[1]];else if((Vk[0]>0)&&(Me[
0]>0))Bq=[Me[0],Bq[1]];if((Me[0]<0)&&(Vk[0]<Me[0]))Bq=[Me[0],Bq[1]];else if((Me[
0]<0)&&(Vk[0]<0))Bq=[Vk[0],Bq[1]];if((Vk[1]>0)&&(Me[1]>Vk[1]))Bq=[Bq[0],Vk[1]];else
if((Vk[1]>0)&&(Me[1]>0))Bq=[Bq[0],Me[1]];if((Me[1]<0)&&(Vk[1]<Me[1]))Bq=[Bq[0],Me[
1]];else if((Me[1]<0)&&(Vk[1]<0))Bq=[Bq[0],Vk[1]];if(A.aaX(Bq,Ce)){(E8)?E8[1].call(
E8[0],this):null;return;}if(!!this.BY){this.BY.Ar(false);this.BY.Q=null;this.BY.
Qw=null;this.NC=null;}this.BY=AcZ;if(!this.BY){this.Gb(A.abe(this.Br,Bq));(E8)?E8[
1].call(E8[0],this):null;}else{this.BY.Ar(false);this.BY.HO(1);this.BY.Q=[this,this.
Anw,this.Gb];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.Qw=[this,this.
ApM];this.BY.Ae$(false);this.BY.Ar(true);this.NC=E8;}},HI:function(Ag,Ac3,AcZ,E8
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UX);this.Bf_();var Az=Ag.GetExtent();var Bd=this.M;var LP=A.lb(Az,Bd);if((!Ac3&&
!((LP[0]>=LP[2])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az))){(E8)?E8[1].call(E8[0],this
):null;return;}var Bq=Ce;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BY){this.BY.Ar(false);this.BY.Q=null;this.
BY.Qw=null;this.NC=null;}this.BY=AcZ;if(!this.BY){this.Gb(A.abe(this.Br,Bq));(E8
)?E8[1].call(E8[0],this):null;}else{this.BY.Ar(false);this.BY.HO(1);this.BY.Q=[this
,this.Anw,this.Gb];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.Qw=[this
,this.ApM];this.BY.Ae$(false);this.BY.Ar(true);this.NC=E8;}},Bjx:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TT:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I2=0x10000;if(((aFilter&0x10000)===0x10000))I2=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I2||!((B=I2)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dd:function(aFilter){var B;var X=this.Ah;var AE=BD;var I2=0x10000;this.Bf_();if(((
aFilter&0x10000)===0x10000))I2=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I2||!((B=I2)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anw:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HB:null,BY:null,Cj:null,WU:null,NC:null,Em:null,Hm:null,Tp:-1,To:0,Js:-1,Ht:0,AiJ:
8,Op:0,UB:0,AcK:A.wf,G6:-1,Br:0,Gt:-1,OU:0,GO:24,AY:0,Ll:null,NS:false,At2:false
,AVe:function(Iv,Og,Xm,Th,Ti,Ah_,Pa,Rs,LB,Lz,LA){throw new Error(Z7);},AqH:function(
Iv,Ah_,Pa,Rs,LB,Lz,LA){throw new Error(UY);},AkM:function(Iv,Og,Xm,Th,Ti,Pa,Rs,LB
,Lz,LA){throw new Error(Z8);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Ll,0))?B:null);if(!!this.B9)this.B9.Ah=this.Cj;else this.B8=
this.Cj;this.Cj.AJ=this.B9;this.B9=this.Cj;this.Cj.Ab=this;this.AcK=[(B=this.M)[
2]-B[0],this.GO];(B=this.Hm)?B[1].call(B[0],this):null;var B1=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(CN);else result=this.Cj.G4(CN
);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B8=null;this.B9=this.Cj.AJ;this.Cj.
AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Ll){A.pe(this.Em,this);return;
}this.At2=true;var AAU=0;if(!this.NS)AAU=this.OU;var FT=this.Al_(-AAU-this.Br,1);
var G0=this.Al_(((((B=this.M)[3]-B[1])-AAU)-this.Br)-1,2);var CB=G0-FT;if(CB<1)CB=
1;var Ail=(CB/2)|0;var Aim=(CB/3)|0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FT<this.Ht){FT=
FT-Ail;G0=G0+Aim;}else if(G0>this.Js){FT=FT-Aim;G0=G0+Ail;}else{FT=this.Ht;G0=this.
Js;}if(!this.NS){if(FT>=this.AY){FT=0;G0=-1;}else if(G0<0){FT=0;G0=-1;}if(G0>=this.
AY)G0=this.AY-1;if(FT<0)FT=0;}else if(this.AY<=0){FT=0;G0=-1;}var AiZ=this.Ht;var
Ai0=this.Js;var Apz=0;var ApA=-1;if(FT>AiZ)AiZ=FT;if(G0<Ai0)Ai0=G0;if(AiZ<=Ai0){
while((this.Js<G0)&&(this.Ht<AiZ)){this.AdG();this.Azu();}while((this.Ht>FT)&&(this.
Js>Ai0)){this.AA7();this.Azt();}}else{this.Js=(this.Js-this.Ht)+FT;this.Ht=FT;Apz=
this.Ht;ApA=this.Js;}while(this.Ht<FT)this.AdG();while(this.Js>G0)this.AA7();while(
this.Ht>FT)this.Azt();while(this.Js<G0)this.Azu();var Aa=this.B8;var inx=this.Ht;
var pos=[0,(AAU+this.Br)+this.Jp(inx,0)];var BJ=(B=this.M)[3]-B[1];var AlJ=null;
var Bg9=(B=this.M)[2]-B[0];while(!!Aa){var IC=inx;if(this.NS){if(IC<0)IC=this.AY-(-
IC%this.AY);if(IC>0)IC=IC%this.AY;}var AdH=((IC>=this.To)&&(IC<=this.Tp))||((inx>=
Apz)&&(inx<=ApA));var Apf=Aa.GetExtent();var Bq=A.abe(pos,Apf.slice(0,2));if(AdH
)this.UB=this.GO;else this.UB=Apf[3]-Apf[1];var A2R=pos[1];var A2S=pos[1]+this.UB;
if(!A.aaX(Bq,Ce))Aa.Anl(Bq,true);if((AdH&&(A2R<BJ))&&(A2S>0)){this.Cj=Aa;this.G6=
IC;this.AcK=[Bg9,this.UB];(B=this.Hm)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UB];}inx=this.Ht;Aa=this.B8;pos=[0,(AAU+this.Br)+this.Jp(
inx,0)];while(!!Aa){var IC=inx;if(this.NS){if(IC<0)IC=this.AY-(-IC%this.AY);if(IC>
0)IC=IC%this.AY;}var AdH=((IC>=this.To)&&(IC<=this.Tp))||((inx>=Apz)&&(inx<=ApA)
);if(AdH)this.UB=this.GO;else this.UB=(B=Aa.GetExtent())[3]-B[1];var A2R=pos[1];
var A2S=pos[1]+this.UB;if(AdH&&!((A2R<BJ)&&(A2S>0))){this.Cj=Aa;this.G6=IC;this.
AcK=[Bg9,this.UB];(B=this.Hm)?B[1].call(B[0],this):null;}if(((IC===this.Gt)&&this.
NS)&&!!AlJ){var Rz=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rz))>A.aaH(A.lb(AlJ.GetExtent(),Rz)))AlJ=Aa;}else if(IC===this.Gt)AlJ=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UB];}this.To=0;this.Tp=-1;this.Cj=null;this.G6=-
1;this.Bb(AlJ);this.At2=false;A.pe(this.Em,this);},QJ:function(Ag,GA,aFilter){return null;
},AqO:function(Ag,aFilter){return null;},TT:function(Ag,aFilter){return null;},ACW:
function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NT:function(
KF,FP,LB,Lz,LA){throw new Error(W_);},AhE:function(Ag,J$){throw new Error(Z9);},
ZG:function(Ag){throw new Error(Z_);},J3:function(Ag,Qh){throw new Error(UZ);},HP:
function(Ag){throw new Error(W$);},AMg:function(Ag,J$){throw new Error(O7);},J:function(
Ag,Qh){throw new Error(Z$);},Jp:function(Ha,A04){return Ha*this.GO;},Al_:function(
Fh,A04){return(Fh/this.GO)|0;},AA7:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Js=this.Js-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azu:function(
){var B;var Aa=this.HB;var Adq=this.Ll;var AdK=++this.Js;if(this.NS){if(AdK<0)AdK=
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
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azt:function(){var
B;var Aa=this.HB;var Adq=this.Ll;var M4=--this.Ht;if(this.NS){if(M4<0)M4=this.AY-(-
M4%this.AY);if(M4>0)M4=M4%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adq)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HB===
Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{Aa=(C.Cj.isPrototypeOf(B=
A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.AiJ++;}this.UB=this.GO;
this.G6=M4;this.AcK=[(B=this.M)[2]-B[0],this.UB];this.Cj=Aa;(B=this.Hm)?B[1].call(
B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.B8.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(M4===this.Gt)this.Bb(Aa);return Aa;
},ApM:function(G){var B;this.BY.Q=null;this.BY.Qw=null;this.BY=null;(B=this.NC)?
B[1].call(B[0],this):null;},BBv:function(G){this.Gb(this.WU.DG[1]);},BBw:function(
G){var B;if(!!this.BY){this.BY.Ar(false);this.BY.Q=null;this.BY.Qw=null;this.BY=
null;}if(!this.NS){var AE=this.AqV(0,this.AY-1);var Agk=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OU);if(AE[0]>Agk[0])AE=[].concat(Agk[0],AE.slice(1,4));if(AE[1]>Agk[
1])AE=A.abP(AE,Agk[1]);var Fx=AE[1]-this.M[1];var A28=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A28>0)A28=0;this.WU.DG=[0,this.Br];this.WU.Gp=[0,(this.Br+A28)-Fx];this.
WU.F_=[0,this.Br-Fx];}else{var Fx=32000-(32000%this.GO);this.WU.DG=[0,this.Br];this.
WU.Gp=[0,this.Br-Fx];this.WU.F_=[0,this.Br+Fx];}},ATj:function(E){var B;if(this.
NS===E)return;this.NS=E;while(!!this.AdG());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw9:function(E){if(E===this.WU)return;if(!!E&&!!E.Aud){A.ab5(
"%s%*%s",Oe,E,Rn);throw new Error(Xa);}if(!!this.WU){this.WU.AKR=null;this.WU.Aud=
null;}this.WU=E;if(!!E){E.AKR=[this,this.BBw];E.Aud=[this,this.BBv];}},Gb:function(
E){var B;if(this.NS&&(this.AY>0)){var HD=this.Jp(this.AY,3);if(E<0)E=HD-(-E%HD);
if(E>0)E=E%HD;if(E>0)E=E-HD;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(E){if(E<0)E=-1;if(E===this.Gt)return;
this.Gt=E;this.Am();},A_F:function(E){var B;if(E<0)E=0;if(E===this.OU)return;this.
OU=E;if(!this.NS){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae8:function(
E){var B;if(E<1)E=1;if(E===this.GO)return;this.GO=E;while(!!this.AdG());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JB:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NS){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OU+this.Br)+this.Jp(E,3));AE=A.abP(AE
,(this.OU+this.Br)+this.Jp(this.AY,3));}else{AE=A.abP(AE,(this.OU+this.Br)+this.
Jp(E,3));AE=[].concat(AE.slice(0,3),(this.OU+this.Br)+this.Jp(this.AY,3));}}else
while(!!this.AdG());this.AY=E;this.Am();this.Bj(AE);},N4:function(E){var B;if(E===
this.Ll)return;this.Ll=E;while(!!this.AdG());this.HB=null;this.Op=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjK:function(Ha){if(this.At2)return null;
if((Ha<0)||(Ha>=this.AY))return null;if(!this.NS){if((Ha<this.Ht)||(Ha>this.Js))
return null;var X=this.B8;while(Ha>this.Ht){X=X.Ah;Ha=Ha-1;}return X;}else{var M4=
this.Ht;if(M4<0)M4=this.AY-(-M4%this.AY);if(M4>0)M4=M4%this.AY;var X=this.B8;while(
!!X){if((M4%this.AY)===Ha)return X;X=X.Ah;M4=M4+1;}return null;}},ABP:function(AcZ
,E8){var B;if(this.NS){(E8)?E8[1].call(E8[0],this):null;return;}var AKk=this.Br;
var BdH=((((B=this.M)[3]-B[1])-this.Br)-this.OU)-this.Jp(this.AY,3);var Bq=0;if(
AKk>0)Bq=-AKk;else if(BdH>0)Bq=BdH;if((Bq>0)&&(Bq>-AKk))Bq=-AKk;if(!Bq){(E8)?E8[
1].call(E8[0],this):null;return;}if(!!this.BY){this.BY.Ar(false);this.BY.Q=null;
this.BY.Qw=null;this.NC=null;}this.BY=AcZ;if(!this.BY){this.Gb(this.Br+Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BY.Ar(false);this.BY.HO(1);this.BY.Q=[this
,this.Anw,this.Gb];this.BY.Cx=this.Br;this.BY.B3=this.Br+Bq;this.BY.Qw=[this,this.
ApM];this.BY.Ae$(false);this.BY.Ar(true);this.NC=E8;}},HI:function(Ha,Ac3,AcZ,E8
){var B;if((Ha<0)||(Ha>=this.AY))return;var Az=this.AqV(Ha,Ha);var Bd=this.M;var
LP=A.lb(Az,Bd);if((!Ac3&&!((LP[0]>=LP[2])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az))
){(E8)?E8[1].call(E8[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BY){this.BY.Ar(false);this.BY.Q=null;
this.BY.Qw=null;this.NC=null;}this.BY=AcZ;if(!this.BY){this.Gb(this.Br-Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BY.Ar(false);this.BY.HO(1);this.BY.Q=[this
,this.Anw,this.Gb];this.BY.Cx=this.Br;this.BY.B3=this.Br-Bq;this.BY.Qw=[this,this.
ApM];this.BY.Ae$(false);this.BY.Ar(true);this.NC=E8;}},BjC:function(){return BD;
},AOY:function(){if((this.OU<=0)||this.NS)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OU);return AE;},A68:function(Fh
){if(((this.AY<=0)||(Fh[0]<this.M[0]))||(Fh[0]>=this.M[2]))return-1;Fh=A.abe(Fh,
this.M.slice(0,2));if(!this.NS){var Aa=(Fh[1]-this.Br)-this.OU;if(Aa>0)Aa=this.Al_(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fh[1]-this.Br;if(Aa>0)
Aa=this.Al_(Aa,0);if(Aa<0)Aa=this.Al_(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqV:function(J9,L9){if(J9<0)J9=0;if(L9>=this.AY)L9=
this.AY-1;if(J9>L9)return BD;var AE=this.M;var Bq=this.Br;if(this.NS){var HD=this.
Jp(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;}else Bq=
Bq+this.OU;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jp(L9+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jp(J9,0));return AE;},AbF:function(J9,L9){var B;if(J9<0)J9=0;if(J9>L9
)return;if(this.To>this.Tp){this.To=J9;this.Tp=L9;}else{if(J9<this.To)this.To=J9;
if(L9>this.Tp)this.Tp=L9;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NS){
AE=A.abP(AE,(this.OU+this.Br)+this.Jp(J9,0));AE=[].concat(AE.slice(0,3),(this.OU+
this.Br)+this.Jp(L9+1,0));}else if((this.Jp(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HD=this.Jp(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(
Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;AE=A.abP(AE,Bq+this.Jp(J9,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jp(L9+1,0));}this.Am();this.Bj(AE);},Anw:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(Xb);
this.Ll=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WU)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dz={HB:null
,BY:null,Cj:null,NC:null,Hm:null,Tp:-1,To:0,Js:-1,Ht:0,AiJ:8,Op:0,SO:0,AcK:A.wf,
G6:-1,Br:0,Gt:-1,Wf:24,AY:0,Ll:null,At2:false,AVe:function(Iv,Og,Xm,Th,Ti,Ah_,Pa
,Rs,LB,Lz,LA){throw new Error(Ta);},AqH:function(Iv,Ah_,Pa,Rs,LB,Lz,LA){throw new
Error(Xc);},AkM:function(Iv,Og,Xm,Th,Ti,Pa,Rs,LB,Lz,LA){throw new Error(Aaa);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV
){this.G6=this.Gt;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Ll,0))?B:null);
if(!!this.B9)this.B9.Ah=this.Cj;else this.B8=this.Cj;this.Cj.AJ=this.B9;this.B9=
this.Cj;this.Cj.Ab=this;this.AcK=[this.SO,(B=this.M)[3]-B[1]];(B=this.Hm)?B[1].call(
B[0],this):null;var B1=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(
CN);else result=this.Cj.G4(CN);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B8=null;
this.B9=this.Cj.AJ;this.Cj.AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Ll
)return;this.At2=true;var FT=this.Al_(0-this.Br,1);var G0=this.Al_((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=G0-FT;if(CB<1)CB=1;var Ail=(CB/2)|0;var Aim=(CB/3)|
0;if(!Ail)Ail=1;if(!Aim)Aim=1;if(FT<this.Ht){FT=FT-Ail;G0=G0+Aim;}else if(G0>this.
Js){FT=FT-Aim;G0=G0+Ail;}else{FT=this.Ht;G0=this.Js;}if(FT>=this.AY){FT=0;G0=-1;
}else if(G0<0){FT=0;G0=-1;}if(G0>=this.AY)G0=this.AY-1;if(FT<0)FT=0;var AiZ=this.
Ht;var Ai0=this.Js;var Apz=0;var ApA=-1;if(FT>AiZ)AiZ=FT;if(G0<Ai0)Ai0=G0;if(AiZ<=
Ai0){while((this.Js<G0)&&(this.Ht<AiZ)){this.AdG();this.Azu();}while((this.Ht>FT
)&&(this.Js>Ai0)){this.AA7();this.Azt();}}else{this.Js=(this.Js-this.Ht)+FT;this.
Ht=FT;Apz=this.Ht;ApA=this.Js;}while(this.Ht<FT)this.AdG();while(this.Js>G0)this.
AA7();while(this.Ht>FT)this.Azt();while(this.Js<G0)this.Azu();var Aa=this.B8;var
inx=this.Ht;var pos=[this.Br+this.Jp(inx,0),0];var BZ=(B=this.M)[2]-B[0];var AlJ=
null;var BgW=(B=this.M)[3]-B[1];while(!!Aa){var IC=inx;var AdH=((IC>=this.To)&&(
IC<=this.Tp))||((inx>=Apz)&&(inx<=ApA));var Apf=Aa.GetExtent();var Bq=A.abe(pos,
Apf.slice(0,2));if(AdH)this.SO=this.Wf;else this.SO=Apf[2]-Apf[0];var A2P=pos[0];
var A2Q=pos[0]+this.SO;if(!A.aaX(Bq,Ce))Aa.Anl(Bq,true);if((AdH&&(A2P<BZ))&&(A2Q>
0)){this.Cj=Aa;this.G6=IC;this.AcK=[this.SO,BgW];(B=this.Hm)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SO,pos[1]];}inx=this.Ht;Aa=this.B8;pos=[
this.Br+this.Jp(inx,0),0];while(!!Aa){var IC=inx;var AdH=((IC>=this.To)&&(IC<=this.
Tp))||((inx>=Apz)&&(inx<=ApA));if(AdH)this.SO=this.Wf;else this.SO=(B=Aa.GetExtent(
))[2]-B[0];var A2P=pos[0];var A2Q=pos[0]+this.SO;if(AdH&&!((A2P<BZ)&&(A2Q>0))){this.
Cj=Aa;this.G6=IC;this.AcK=[this.SO,BgW];(B=this.Hm)?B[1].call(B[0],this):null;}if(
IC===this.Gt)AlJ=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SO,pos[1]];}this.To=0;this.
Tp=-1;this.Cj=null;this.G6=-1;this.Bb(AlJ);this.At2=false;},QJ:function(Ag,GA,aFilter
){return null;},AqO:function(Ag,aFilter){return null;},TT:function(Ag,aFilter){return null;
},ACW:function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NT:function(
KF,FP,LB,Lz,LA){throw new Error(Xd);},AhE:function(Ag,J$){throw new Error(Xe);},
ZG:function(Ag){throw new Error(Tb);},J3:function(Ag,Qh){throw new Error(Tc);},HP:
function(Ag){throw new Error(Td);},AMg:function(Ag,J$){throw new Error(Aab);},J:
function(Ag,Qh){throw new Error(Te);},Jp:function(Ha,A04){return Ha*this.Wf;},Al_:
function(Fh,A04){return(Fh/this.Wf)|0;},AA7:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Js=this.Js-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azu:function(
){var B;var Aa=this.HB;var Adq=this.Ll;var AdK=++this.Js;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.
AiJ++;}this.SO=this.Wf;this.G6=AdK;this.AcK=[this.SO,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B9)this.
B9.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(AdK===this.
Gt)this.Bb(Aa);return Aa;},AdG:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Ht=this.Ht+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Op<this.AiJ){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Op++;}return Aa;},Azt:function(){var
B;var Aa=this.HB;var Adq=this.Ll;var M4=--this.Ht;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adq))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Op--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Adq,0))?B:null);Aa.A0(0x1D);if(!!this.Op)this.AiJ++;
}this.SO=this.Wf;this.G6=M4;this.AcK=[this.SO,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hm)?B[1].call(B[0],this):null;this.Cj=null;this.G6=-1;if(!!this.B8)this.B8.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(M4===this.Gt
)this.Bb(Aa);return Aa;},ApM:function(G){var B;this.BY.Q=null;this.BY.Qw=null;this.
BY=null;(B=this.NC)?B[1].call(B[0],this):null;},Gb:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(
E){if(E<0)E=-1;if(E===this.Gt)return;this.Gt=E;this.Am();},AFt:function(E){var B;
if(E<1)E=1;if(E===this.Wf)return;this.Wf=E;while(!!this.AdG());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JB:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jp(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jp(E,3));}else{AE=
A.abN(AE,this.Br+this.Jp(this.AY,3));AE=[].concat(this.Br+this.Jp(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},N4:function(E){var B;if(E===this.Ll)return;
this.Ll=E;while(!!this.AdG());this.HB=null;this.Op=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpJ:function(Byi,Byj){if(!this.BY)return;if(Byi)this.Gb(
this.BY.B3);var A4N=this.NC;this.BY.Ar(false);this.BY.Q=null;this.BY.Qw=null;this.
NC=null;this.BY=null;if(Byj)(A4N)?A4N[1].call(A4N[0],this):null;},Bka:function(){
return!!this.BY;},HI:function(Ha,Ac3,AcZ,E8){var B;if((Ha<0)||(Ha>=this.AY))return;
var Az=this.AqV(Ha,Ha);var Bd=this.M;var LP=A.lb(Az,Bd);if((!Ac3&&!((LP[0]>=LP[2
])||(LP[1]>=LP[3])))||(Ac3&&A.aaY(LP,Az))){(E8)?E8[1].call(E8[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BY){this.BY.Ar(false);this.BY.Q=null;this.BY.Qw=null;this.NC=null;}this.BY=
AcZ;if(!this.BY){this.Gb(this.Br-Bq);(E8)?E8[1].call(E8[0],this):null;}else{this.
BY.Ar(false);this.BY.HO(1);this.BY.Q=[this,this.Anw,this.Gb];this.BY.Cx=this.Br;
this.BY.B3=this.Br-Bq;this.BY.Qw=[this,this.ApM];this.BY.Ae$(false);this.BY.Ar(true
);this.NC=E8;}},AqV:function(J9,L9){if(J9<0)J9=0;if(L9>=this.AY)L9=this.AY-1;if(
J9>L9)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jp(L9+1
,0));AE=[].concat((AE[0]+Bq)+this.Jp(J9,0),AE.slice(1,4));return AE;},AbF:function(
J9,L9){var B;if(J9<0)J9=0;if(J9>L9)return;if(this.To>this.Tp){this.To=J9;this.Tp=
L9;}else{if(J9<this.To)this.To=J9;if(L9>this.Tp)this.Tp=L9;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jp(J9,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jp(L9+1,0));this.Am();this.Bj(AE);},Anw:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dz;this.H(Xb);
this.Ll=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NC)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASy:null,AET:null,Awa:null,D1:null,
Lq:null,BM:null,ALe:0,Bp:0,IL:0,Bs:0,N_:0,Jw:0,DG:A.wf,NV:A.wf,H2:A.wf,Axx:8,Afg:
0,A71:1,Down:false,YJ:false,NK:false,A2g:false,AAo:0,Kq:function(CZ,aClip,aOffset
,Ck,aBlend){},G4:function(CN){var B;var BO=(C.Aef.isPrototypeOf(CN)?CN:null);var
D4=(C.AqJ.isPrototypeOf(CN)?CN:null);var AKu=this.YJ;var AaJ;var Vh;var ABq;var M1;
var AzM;if(!BO&&!D4)return null;AaJ=(!!BO&&BO.Down)&&!BO.Jw;Vh=(!!BO&&BO.Down)&&(
BO.Jw>0);ABq=(!!BO&&BO.Down)&&(BO.Jw>this.AAo);M1=!!BO&&!BO.Down;AzM=!!D4;if(AaJ
)this.AAo=((B=(BO.NK?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afg&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var IA=(C.Au2.isPrototypeOf(CN)?CN:null);if(((
!!IA&&IA.Down)&&(IA.AxP!==this))&&A.wa(this.GetExtent(),this.Ab.A7W(IA.LW))){this.
ALe=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaJ){var ApG=0;var Adl;this.Bp=
this.Bp|(1<<BO.IL);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApG=ApG+1;
if(ApG===1)this.Bp=(this.Bp|16777216)|(4096<<BO.IL);}if(M1&&(this.Bp<16777216)){
var IG=this.In();var JI=null;if(!!IG){var A4E=(!!this.AJ?this.AJ:this.Ab);var A16=(
!!IG.JJ?IG.JJ.C1:null);JI=IG.Yk(A.abh(Aac,BO.LW),BO.IL,BO.N_,A16,A4E,0x0);}if(!!
JI){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JI.Cj.G4(A._NewObject(C.Aef,0).
InitializeDown(O,BO.H2,BO.N_,Ce,true,BO.LW));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JI.Cj.G4(A._NewObject(C.Aef,0).InitializeUp(O,BO.H2,BO.H2,0,BO.N_,Ce,false,BO.
LW,BO.LW));}}if(M1)this.Bp=(this.Bp&~(1<<BO.IL))|33554432;if(ABq&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M1&&BO.NK)this.Bp=this.Bp|67108864;if(M1&&!(this.Bp&
4095))this.ALe=0x0;if(M1&&!(this.Bp&16777215))this.Bp=0;if(Vh&&(this.Bp>=67108864
)){var IG=this.In();if(!!IG)IG.AUD(null,null,this,this.ALe);}if((Vh&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vh=false;M1=true;}if(!!BO&&!(this.Bp&(4096<<BO.
IL)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IL)))return this;if(M1&&!(this.Bp&
16777216))return this;if(((AaJ||AzM)||Vh)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M1)this.Bp=this.Bp&3758100479;if(M1&&!(this.Bp&16777215))this.
Bp=0;if(!!BO){this.Down=AaJ||Vh;this.YJ=this.ARs(BO.H2);this.NV=BO.NV;this.H2=BO.
H2;this.DG=Ce;this.Jw=BO.Jw;this.N_=BO.N_;this.NK=BO.NK;this.IL=BO.IL;this.Bs=BO.
Bs;if(BO.Down&&!BO.Jw)AKu=false;}if(!!D4){this.Down=true;this.YJ=this.ARs(D4.H2);
this.NV=D4.NV;this.H2=D4.H2;this.DG=D4.DG;this.Jw=D4.Jw;this.N_=D4.N_;this.IL=D4.
IL;this.NK=false;this.Bs=D4.Bs;}var A2a=this.Down;if(!!D4)(B=this.ASy)?B[1].call(
B[0],this):null;if((!!BO&&this.Down)&&!this.Jw)(B=this.BM)?B[1].call(B[0],this):
null;if((!!BO&&this.Down)&&(this.Jw>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YJ)&&!AKu){this.A2g=true;(B=this.Awa)?B[1].call(B[0],this):null;
}if(this.A2g&&(((A2a&&!this.YJ)&&AKu)||((!A2a&&this.YJ)&&AKu))){this.A2g=false;(
B=this.AET)?B[1].call(B[0],this):null;}if(!!BO&&!A2a)(B=this.Lq)?B[1].call(B[0],
this):null;if(!!this.Afg){var AdF=0x0;if(((((this.Afg&0x10)===0x10)&&!!BO)&&BO.Down
)&&(BO.Jw>=1000))AdF=0x10;if((((this.Afg&0x1)===0x1)&&!!D4)&&((D4.LW[1]-D4.Ag3[1
])<=-this.Axx))AdF=0x1;if((((this.Afg&0x2)===0x2)&&!!D4)&&((D4.LW[1]-D4.Ag3[1])>=
this.Axx))AdF=0x2;if((((this.Afg&0x4)===0x4)&&!!D4)&&((D4.LW[0]-D4.Ag3[0])<=-this.
Axx))AdF=0x4;if((((this.Afg&0x8)===0x8)&&!!D4)&&((D4.LW[0]-D4.Ag3[0])>=this.Axx)
)AdF=0x8;if(!!AdF){var IG=this.In();if(!!IG){this.ALe=AdF;IG.AUD(null,this,this,
AdF);}}}return this;},Yk:function(Dc,BF,Oh,Aak,Ac6,Ac5){var B;if(!!Aak&&(Aak!==this
))return null;if((Oh<1)||(Oh>this.A71))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;if(!!(Ac5&this.Afg))return null;
if(this.BjO()){var Az=A.lb(Dc,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qk=A.aaI(Dc);var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=
Az[2])Fx=[(Az[2]-Qk[0])-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=
Az[3])Fx=[Fx[0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au3,0).Initialize(this,Fx
);}}else{var HC=A.abi(9,A.wf,null);var O;HC.Set(0,A.aaI(Dc));HC.Set(1,HC.Get(0));
HC.Set(2,HC.Get(0));HC.Set(3,HC.Get(0));HC.Set(4,HC.Get(0));HC.Set(1,[Dc[0],HC.Get(
1)[1]]);HC.Set(2,[HC.Get(2)[0],Dc[1]]);HC.Set(3,[Dc[2],HC.Get(3)[1]]);HC.Set(4,[
HC.Get(4)[0],Dc[3]]);HC.Set(5,Dc.slice(0,2));HC.Set(6,[Dc[2],Dc[1]]);HC.Set(7,[Dc[
0],Dc[3]]);HC.Set(8,Dc.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARs(HC.Get(O)))return A.
_NewObject(C.Au3,0).Initialize(this,A.abe(HC.Get(O),HC.Get(0)));}return null;},BnY:
function(E){if(E<1)E=1;this.Axx=E;},AFC:function(E){if(E<1)E=1;this.A71=E;},Ar:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZE._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZE._Mark.call(this,D);if((B=this.ASy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AET)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Awa
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H$={timer:null,AKR:null,Aud:null,AGd:null,Zo:null,SL:null,Bp:0,AJt:0,Ado:5000
,Ap0:0,AKt:A.wf,Apc:0,AfP:0,EY:0,Amk:0,Aur:0,Apb:0,AfO:0,EX:0,Amj:0,Amh:0,NV:A.wf
,A6h:A.wf,F_:A.wf,Gp:A.wf,DG:A.wf,WW:A.wf,A6V:0.5,A$A:true,AGV:true,ZO:false,XK:
false,XL:false,AoX:false,AAo:0,Kq:function(CZ,aClip,aOffset,Ck,aBlend){},G4:function(
CN){var B;var BO=(C.Aef.isPrototypeOf(CN)?CN:null);var D4=(C.AqJ.isPrototypeOf(CN
)?CN:null);var IA=(C.Au2.isPrototypeOf(CN)?CN:null);var AaJ;var Vh;var ABq;var M1;
var AzM;AaJ=(!!BO&&BO.Down)&&!BO.Jw;Vh=(!!BO&&BO.Down)&&(BO.Jw>0);ABq=(!!BO&&BO.
Down)&&(BO.Jw>this.AAo);M1=!!BO&&!BO.Down;AzM=!!D4;if(AaJ)this.AAo=((B=(BO.NK?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaJ){var ApG=0;var Adl;this.Bp=this.Bp|(1<<BO.
IL);for(Adl=this.Bp&4095;Adl>0;Adl=Adl>>1)if(!!(Adl&1))ApG=ApG+1;if(ApG===1)this.
Bp=(this.Bp|16777216)|(4096<<BO.IL);}if(M1&&(this.Bp<16777216)){var IG=this.In();
var JI=null;if(!!IG){var A4E=(!!this.AJ?this.AJ:this.Ab);var A16=(!!IG.JJ?IG.JJ.
C1:null);JI=IG.Yk(A.abh(Aac,BO.LW),BO.IL,BO.N_,A16,A4E,0x0);}if(!!JI){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JI.Cj.G4(A._NewObject(C.Aef,0).InitializeDown(
O,BO.H2,BO.N_,Ce,true,BO.LW));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JI.Cj.G4(A.
_NewObject(C.Aef,0).InitializeUp(O,BO.H2,BO.H2,0,BO.N_,Ce,false,BO.LW,BO.LW));}}
if(M1)this.Bp=(this.Bp&~(1<<BO.IL))|33554432;if(ABq&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M1&&BO.NK)this.Bp=this.Bp|67108864;if(M1&&!(this.Bp&16777215
))this.Bp=0;if(Vh&&(this.Bp>=67108864)){var IG=this.In();if(!!IG)IG.AUD(null,null
,this,0x0);}if((Vh&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vh=false;M1=true;
}if(!!BO&&!(this.Bp&(4096<<BO.IL)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IL))
)return this;if(M1&&!(this.Bp&16777216))return this;if(((AaJ||AzM)||Vh)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M1)this.Bp=this.Bp&3758100479;
if(M1&&!(this.Bp&16777215))this.Bp=0;if(!!IA&&(IA.AxP===this))return null;if((!!
IA&&IA.Down)&&(this.AoX||!this.ZO))return null;if((!!IA&&IA.Down)&&!A.wa(this.M,
this.Ab.A7W(IA.LW)))return null;if((!!IA&&!IA.Down)&&(!this.AoX||(this.AJt!==IA.
IL)))return null;if((!BO&&!D4)&&!IA)return null;if(!!BO){this.AoX=AaJ||Vh;this.AJt=
BO.IL;this.NV=BO.NV;}if(!!D4)this.AJt=D4.IL;if(!!IA){this.AoX=IA.Down;this.AJt=IA.
IL;}if(!!IA&&IA.Down){this.A4F();this.EX=(((IA.Bs-this.Amh)*0.001)*this.AfO)+this.
EX;this.EY=(((IA.Bs-this.Aur)*0.001)*this.AfP)+this.EY;if(this.XK)this.EX=0;if(this.
XL)this.EY=0;this.AfO=0;this.AfP=0;this.XK=false;this.XL=false;this.AKt=this.DG;
this.Ap0=IA.Bs;return this;}if(AaJ){this.A4F();this.EX=(((BO.Bs-this.Amh)*0.001)
*this.AfO)+this.EX;this.EY=(((BO.Bs-this.Aur)*0.001)*this.AfP)+this.EY;if(this.XK||
!this.ZO)this.EX=0;if(this.XL||!this.ZO)this.EY=0;this.AfO=0;this.AfP=0;this.XK=
false;this.XL=false;if(!this.ZO){this.ZO=true;(B=this.SL)?B[1].call(B[0],this):null;(
B=this.AKR)?B[1].call(B[0],this):null;}this.AKt=this.DG;this.Ap0=BO.Bs;}if(!!D4){
var Hc=A.abe(D4.H2,D4.NV);var CD=this.DG;if(this.AGV)CD=[this.AKt[0]+Hc[0],CD[1]
];CD=[CD[0],this.AKt[1]+Hc[1]];if(this.A$A){if(CD[0]<this.Gp[0])CD=[this.Gp[0]+(((
CD[0]-this.Gp[0])/2)|0),CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0]+(((CD[0]-
this.F_[0])/2)|0),CD[1]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]+(((CD[1]-this.
Gp[1])/2)|0)];else if(CD[1]>this.F_[1])CD=[CD[0],this.F_[1]+(((CD[1]-this.F_[1])
/2)|0)];}else{if(CD[0]<this.Gp[0])CD=[this.Gp[0],CD[1]];else if(CD[0]>this.F_[0]
)CD=[this.F_[0],CD[1]];if(CD[1]<this.Gp[1])CD=[CD[0],this.Gp[1]];else if(CD[1]>this.
F_[1])CD=[CD[0],this.F_[1]];}if(!A.aaX(CD,this.DG)){this.A6h=A.abe(CD,this.DG);this.
DG=CD;(B=this.Aud)?B[1].call(B[0],this):null;(B=this.AGd)?B[1].call(B[0],this):null;
}}if((!!IA&&!IA.Down)&&((IA.Bs-this.Ap0)>=200)){this.EX=0;this.EY=0;}if(Vh&&((BO.
Bs-this.Ap0)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.Ap0)){var Hc=D4.DG;
var Bd_=1000/(D4.Bs-this.Ap0);var AiM=0;var AiN;if(this.AGV)AiM=Hc[0]*Bd_;AiN=Hc[
1]*Bd_;if((AiM*this.EX)<0)this.EX=0;if((AiN*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiM)*0.5;this.EY=(this.EY+AiN)*0.5;this.Ap0=D4.Bs;}if(!M1&&!IA)return this;if(!!
BO&&BO.NK){this.EX=0;this.EY=0;}if((this.DG[0]<=this.Gp[0])||(this.DG[0]>=this.F_[
0]))this.EX=0;else if(!this.EX){var ER=this.DG[0];var Fj=this.Gp[0];var EI=this.
F_[0];if(ER<Fj)EI=this.Gp[0];else if(ER>EI)Fj=this.F_[0];else if(this.WW[0]<=1){
Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WW[0];EI=(ER-this.WW[0])+Ads;Fj=ER+Ads;if(
EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.F_[0];}if((Fj-ER)<=(ER-EI))
ER=Fj;else ER=EI;if(ER!==this.DG[0]){var Jo=ER-this.DG[0];if(Jo>0)this.EX=Math.sqrt((
Jo*2)*this.Ado)+20;if(Jo<0)this.EX=-Math.sqrt((-Jo*2)*this.Ado)-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jo);this.Apb=ER;}}else{var BCt=this.EX*this.EX;var Jo=BCt/(
2*this.Ado);var ER=this.DG[0];if(this.EX>0)ER=ER+(Jo|0);if(this.EX<0)ER=ER-(Jo|0
);if(ER>this.F_[0])ER=this.F_[0];else if(ER<this.Gp[0])ER=this.Gp[0];var BgR=ER;
var Fj=this.Gp[0];var EI=this.F_[0];if(ER<Fj)EI=this.Gp[0];else if(ER>EI)Fj=this.
F_[0];else if(this.WW[0]<=1){Fj=ER;EI=ER;}else{var Ads=(EI-ER)%this.WW[0];EI=(ER-
this.WW[0])+Ads;Fj=ER+Ads;if(EI<this.Gp[0])EI=this.Gp[0];if(Fj>this.F_[0])Fj=this.
F_[0];}if(this.EX>0){if(EI<=this.DG[0])ER=Fj;else if((ER-EI)<(Fj-ER))ER=EI;else ER=
Fj;}else if(Fj>=this.DG[0])ER=EI;else if((ER-EI)>(Fj-ER))ER=Fj;else ER=EI;if(ER!==
this.DG[0]){Jo=ER-this.DG[0];if(ER!==BgR){var Ai8=ER-BgR;if(Ai8>0)this.EX=this.EX+
Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EX=this.EX-Math.sqrt((-Ai8*2)*this.Ado
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfO=(400-(
this.EX*this.EX))/(2*Jo);this.Apb=ER;}else this.EX=0;}if((this.DG[1]<=this.Gp[1]
)||(this.DG[1]>=this.F_[1]))this.EY=0;else if(!this.EY){var ES=this.DG[1];var Fj=
this.Gp[1];var EI=this.F_[1];if(ES<Fj)EI=this.Gp[1];else if(ES>EI)Fj=this.F_[1];
else if(this.WW[1]<=1){Fj=ES;EI=ES;}else{var Ads=(EI-ES)%this.WW[1];EI=(ES-this.
WW[1])+Ads;Fj=ES+Ads;if(EI<this.Gp[1])EI=this.Gp[1];if(Fj>this.F_[1])Fj=this.F_[
1];}if((Fj-ES)<=(ES-EI))ES=Fj;else ES=EI;if(ES!==this.DG[1]){var Jo=ES-this.DG[1
];if(Jo>0)this.EY=Math.sqrt((Jo*2)*this.Ado)+20;if(Jo<0)this.EY=-Math.sqrt((-Jo*
2)*this.Ado)-20;this.AfP=(400-(this.EY*this.EY))/(2*Jo);this.Apc=ES;}}else{var BCu=
this.EY*this.EY;var Jo=BCu/(2*this.Ado);var ES=this.DG[1];if(this.EY>0)ES=ES+(Jo|
0);if(this.EY<0)ES=ES-(Jo|0);if(ES>this.F_[1])ES=this.F_[1];else if(ES<this.Gp[1
])ES=this.Gp[1];var BgS=ES;var Fj=this.Gp[1];var EI=this.F_[1];if(ES<Fj)EI=this.
Gp[1];else if(ES>EI)Fj=this.F_[1];else if(this.WW[1]<=1){Fj=ES;EI=ES;}else{var Ads=(
EI-ES)%this.WW[1];EI=(ES-this.WW[1])+Ads;Fj=ES+Ads;if(EI<this.Gp[1])EI=this.Gp[1
];if(Fj>this.F_[1])Fj=this.F_[1];}if(this.EY>0){if(EI<=this.DG[1])ES=Fj;else if((
ES-EI)<(Fj-ES))ES=EI;else ES=Fj;}else if(Fj>=this.DG[1])ES=EI;else if((ES-EI)>(Fj-
ES))ES=Fj;else ES=EI;if(ES!==this.DG[1]){Jo=ES-this.DG[1];if(ES!==BgS){var Ai8=ES-
BgS;if(Ai8>0)this.EY=this.EY+Math.sqrt((Ai8*2)*this.Ado);if(Ai8<0)this.EY=this.EY-
Math.sqrt((-Ai8*2)*this.Ado);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfP=(400-(this.EY*this.EY))/(2*Jo);this.Apc=ES;}else this.EY=
0;}if(!!BO)this.Amh=BO.Bs;if(!!IA)this.Amh=IA.Bs;this.Aur=this.Amh;this.Amj=this.
DG[0];this.Amk=this.DG[1];this.BCv();return this;},Yk:function(Dc,BF,Oh,Aak,Ac6,
Ac5){var B;if(!!Aak&&(Aak!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGV&&!!(Ac5&0xC))
return null;var Az=A.lb(Dc,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qk=
A.aaI(Dc);var Fx=Ce;if(Qk[0]<Az[0])Fx=[Az[0]-Qk[0],Fx[1]];if(Qk[0]>=Az[2])Fx=[(Az[
2]-Qk[0])-1,Fx[1]];if(Qk[1]<Az[1])Fx=[Fx[0],Az[1]-Qk[1]];if(Qk[1]>=Az[3])Fx=[Fx[
0],(Az[3]-Qk[1])-1];return A._NewObject(C.Au3,0).Initialize(this,Fx);}return null;
},A4F:function(){if(!!this.timer){A.z9([this,this.Mi],this.timer,0);this.timer=null;
}},BCv:function(){this.timer=A._GetAutoObject(A.acl.Aej);A.zV([this,this.Mi],this.
timer,0);},Mi:function(G){var B;if(!this.timer)return;var Auw=(this.timer.Bs-this.
Amh)*0.001;var Aux=(this.timer.Bs-this.Aur)*0.001;var BCG=Auw*Auw;var BCH=Aux*Aux;
var AiM=(this.AfO*Auw)+this.EX;var AiN=(this.AfP*Aux)+this.EY;var CD=[((((this.AfO
*0.5)*BCG)+(this.EX*Auw))+this.Amj)|0,((((this.AfP*0.5)*BCH)+(this.EY*Aux))+this.
Amk)|0];if(this.XK&&(Auw>=0.5)){CD=[this.Apb,CD[1]];this.EX=0;this.AfO=0;this.Amj=
CD[0];this.XK=false;}else if(this.XK){var LM=1-Math.pow(1-(Auw/0.5),5);CD=[(this.
Amj+((this.Apb-this.Amj)*LM))|0,CD[1]];}if(this.XL&&(Aux>=0.5)){CD=[CD[0],this.Apc
];this.EY=0;this.AfP=0;this.Amk=CD[1];this.XL=false;}else if(this.XL){var LM=1-Math.
pow(1-(Aux/0.5),5);CD=[CD[0],(this.Amk+((this.Apc-this.Amk)*LM))|0];}if(((this.EX>
0)&&(AiM<0))||((this.EX<0)&&(AiM>0))){AiM=0;CD=[this.DG[0],CD[1]];}if(((this.EY>
0)&&(AiN<0))||((this.EY<0)&&(AiN>0))){AiN=0;CD=[CD[0],this.DG[1]];}if(!this.XK&&(
CD[0]<this.Gp[0])){this.Amj=CD[0];this.Apb=this.Gp[0];this.Amh=this.timer.Bs;this.
XK=true;}else if(!this.XK&&(CD[0]>this.F_[0])){this.Amj=CD[0];this.Apb=this.F_[0
];this.Amh=this.timer.Bs;this.XK=true;}if(!this.XL&&(CD[1]<this.Gp[1])){this.Amk=
CD[1];this.Apc=this.Gp[1];this.Aur=this.timer.Bs;this.XL=true;}else if(!this.XL&&(
CD[1]>this.F_[1])){this.Amk=CD[1];this.Apc=this.F_[1];this.Aur=this.timer.Bs;this.
XL=true;}if(((!this.XK&&!!this.EX)&&(AiM>-20))&&(AiM<20)){CD=[this.Apb,CD[1]];this.
EX=0;this.AfO=0;this.Amj=CD[0];}if(((!this.XL&&!!this.EY)&&(AiN>-20))&&(AiN<20)){
CD=[CD[0],this.Apc];this.EY=0;this.AfP=0;this.Amk=CD[1];}if(!A.aaX(CD,this.DG)){
this.A6h=A.abe(CD,this.DG);this.DG=CD;(B=this.Aud)?B[1].call(B[0],this):null;(B=
this.AGd)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XK)&&!this.
XL){this.A4F();this.ZO=false;(B=this.Zo)?B[1].call(B[0],this):null;}},ATP:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WW=E;},ATl:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6V)return;this.A6V=E;if(E<(1e-007))E=1e-007;this.Ado=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.H$;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aud)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGd
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zo)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BL={Ah:null,Lq:null,BM:null,D1:null,ApV:
0,Bs:0,A$v:0,Filter:148,CP:0,DQ:0,Bw:true,Down:false,Aci:false,NM:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(AfB
);this.Ah=C1.AKx;C1.AKx=this;},G4:function(CN){var B;if(!!CN&&CN.Bj6(this.Filter
)){this.Down=CN.Down;this.CP=CN.CP;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NM=false;if(
CN.Down){this.A$v=this.ApV;this.Aci=this.ApV>0;if(this.Aci)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BM)?B[1].call(B[0],this):null;if(!this.NM)this.ApV=this.
ApV+1;return!this.NM;}if(!CN.Down){this.Aci=this.ApV>1;this.A$v=this.ApV-1;this.
ApV=0;(B=this.Lq)?B[1].call(B[0],this):null;return!this.NM;}}return false;},_Init:
function(aArg){this.__proto__=C.BL;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lq)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au3={Cj:null,Au5:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DG=
aOffset;this.Au5=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au3;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A78={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A78;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arm={NE:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arm;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NE)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEe={AiU:A.wf,AiT:A.wf,_Init:function(aArg
){C.Arm._Init.call(this,aArg);this.__proto__=C.AEe;},_className:"Core::LayoutLineContext"
};C.AEf={AAY:A.wf,AAX:A.wf,AiU:A.wf,AiT:A.wf,_Init:function(aArg){C.Arm._Init.call(
this,aArg);this.__proto__=C.AEf;},_className:"Core::LayoutQuadContext"};C.AN5={C1:
null,Ah:null,RD:null,RM:null,Mg:null,ApR:null,_Init:function(aArg){this.__proto__=
C.AN5;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RD)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mg)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApR)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVj={FQ:null,B9:null,B8:null,Beg:false,
By8:function(){if(!this.FQ)return;var Pm=this.FQ;this.FQ.Ph=null;this.FQ=null;A.
pe([this,this.A3N],this);Pm.A8x(this);},BAW:function(G){if(!!this.FQ)return;if(!
this.B8)return;this.FQ=this.B8;this.B8=this.B8.Ah;if(!!this.B8)this.B8.AJ=null;else
this.B9=null;this.FQ.Ah=null;this.Beg=true;this.FQ.SL(this);this.Beg=false;},BBh:
function(G){A.pe([this,this.BAW],this);},BBg:function(G){A.pe([this,this.BBh],this
);},A3N:function(G){A.pe([this,this.BBg],this);},Bh3:function(Jl){if(!Jl||!Jl.Ph
)return;if(Jl.Ph!==this)throw new Error(Aad);var Bhl=false;if(this.FQ===Jl){this.
FQ=null;Bhl=true;A.pe([this,this.A3N],this);}else{if(!!Jl.Ah)Jl.Ah.AJ=Jl.AJ;else
this.B9=Jl.AJ;if(!!Jl.AJ)Jl.AJ.Ah=Jl.Ah;else this.B8=Jl.Ah;Jl.AJ=null;Jl.Ah=null;
}Jl.Ph=null;if(Bhl)Jl.A8w(this);},A$D:function(Jl,A1z){if(!Jl)return;if(!!Jl.Ph)
throw new Error(Xf);Jl.Ph=this;if(A1z){Jl.Ah=this.B8;if(!!this.B8)this.B8.AJ=Jl;
else this.B9=Jl;this.B8=Jl;}else{Jl.AJ=this.B9;if(!!this.B9)this.B9.Ah=Jl;else this.
B8=Jl;this.B9=Jl;}if(!this.FQ)A.pe([this,this.A3N],this);},_Init:function(aArg){
this.__proto__=C.AVj;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkZ={Ph:null,AJ:null,Ah:
null,A8x:function(Atz){},A8w:function(Atz){},SL:function(Atz){this.AmD();},Mr:function(
){if(!!this.Ph&&(this.Ph.FQ===this))this.Ph.By8();},AmD:function(){if(!!this.Ph)
this.Ph.Bh3(this);},ARo:function(){return!!this.Ph&&(this.Ph.FQ===this);},_Init:
function(aArg){this.__proto__=C.AkZ;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ph)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVh={As:null,Aut:
null,SL:function(Atz){this.Aut.As=this.As;A.we(this.Aut,0);A.pe([this,this.BAT],
this);},BAT:function(G){this.Aut.As=null;this.Aut=null;this.As=null;this.Mr();},
_Init:function(aArg){C.AkZ._Init.call(this,aArg);this.__proto__=C.AVh;},_Mark:function(
D){var B;C.AkZ._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aut)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxO={_Init:function(){C.AVj._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhD={resource:null,Le:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhD;this.Init(aArg);A.h7++;},_Done:function(){this.Le();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={ME:null,timer:null,Bs:0,Period:1000,VI:0,Bw:false,Le:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKZ:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PV:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKZ(this.VI,E);},WH:function(E){if(E<0)E=0;if(E===
this.VI)return;this.VI=E;if(this.Bw)this.AKZ(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKZ(this.VI,this.Period);else this.AKZ(0,
0);this.Bs=this.Avv();},Avv:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avv();if(!this.
Period)this.Ar(false);(B=this.ME)?B[1].call(B[0],this):null;},AxM:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Le();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ME)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUM:0,Av6:0
,AjU:0,GL:0,Hk:0,Year:0,BdO:function(AfL,A02){if(A02)switch(AfL){case 1:return A.
aci.Bke;case 2:return A.aci.Bi8;case 3:return A.aci.Bkw;case 4:return A.aci.BhH;
case 5:return A.aci.BkA;case 6:return A.aci.Bkh;case 7:return A.aci.Bkg;case 8:return A.
aci.BhJ;case 9:return A.aci.Bpi;case 10:return A.aci.BkU;case 11:return A.aci.BkT;
case 12:return A.aci.Biq;default:return A.jV;}else switch(AfL){case 1:return A.aci.
AD_;case 2:return A.aci.ACT;case 3:return A.aci.AEk;case 4:return A.aci.ABV;case
5:return A.aci.AEm;case 6:return A.aci.AEa;case 7:return A.aci.AD$;case 8:return A.
aci.AB2;case 9:return A.aci.AGJ;case 10:return A.aci.AEz;case 11:return A.aci.AEx;
case 12:return A.aci.ACE;default:return A.jV;}},BdM:function(Bci,A02){if(A02)switch(
Bci){case 1:return A.aci.BkF;case 2:return A.aci.BqA;case 3:return A.aci.Brg;case
4:return A.aci.Bqn;case 5:return A.aci.Bjj;case 6:return A.aci.Bo$;case 0:return A.
aci.Bqa;default:return A.jV;}else switch(Bci){case 1:return A.aci.BkE;case 2:return A.
aci.Bqz;case 3:return A.aci.Brf;case 4:return A.aci.Bqm;case 5:return A.aci.Bji;
case 6:return A.aci.Bo_;case 0:return A.aci.Bp$;default:return A.jV;}},BdL:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JW:function(){var d=this.GL;var K6=this.Hk;var Di=this.Year-((
K6<=2)?1:0);var AzN=(((Di>=0)?Di:Di-399)/400)|0;var Amr=Di-(AzN*400);var Vf=(((((
153*(K6+((K6>2)?-3:9)))+2)/5)|0)+d)-1;var Ao_=(((Amr*365)+((Amr/4)|0))-((Amr/100
)|0))+Vf;var Qm=((AzN*146097)+Ao_)-719468;return(((Qm*86400)+(this.AjU*3600))+(this.
Av6*60))+this.AUM;},AFX:function(E){var B;E+=62162035200;if(E<0)E=0;var Vt=Math.
trunc(E/86400)|0;var AzN=(((Vt>=0)?Vt:Vt-146096)/146097)|0;var Ao_=Vt-(AzN*146097
);var Amr=((((Ao_-((Ao_/1460)|0))+((Ao_/36524)|0))-((Ao_/146096)|0))/365)|0;var Di=
Amr+(AzN*400);var Vf=Ao_-(((365*Amr)+((Amr/4)|0))-((Amr/100)|0));var A2$=(((5*Vf
)+2)/153)|0;var d=(Vf-((((153*A2$)+2)/5)|0))+1;var K6=A2$+((A2$<10)?3:-9);var BJ=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Di+((
K6<=2)?1:0);this.Uv(K6);this.Ls(d);this.AnC(BJ+((BJ<0)?24:0));this.AnF(O+((O<0)?
60:0));this.AnI(s+((s<0)?60:0));},Zp:function(){if(this.Hk===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hk===4)||(this.Hk===6))||(this.Hk===9))||(this.Hk===11))return 30;else return 31;
},Bl8:function(){var B;var Vf=this.AbZ()-1;var AtQ=(6+this.Awg())%7;var Apa=((371+
AtQ)-Vf)%7;if(this.Hk===12){var d=this.GL;if((d===31)&&(AtQ<3))return 0;if((d===
30)&&(AtQ<2))return 0;if((d===29)&&(AtQ<1))return 0;}if(Apa<=3)Vf+=Apa;else Vf-=(
7-Apa);if(Vf<0){var d=this.GL;var K6=this.Hk;this.Year--;this.Ls(31);this.Uv(12);
Vf=this.AbZ()-1;AtQ=(6+this.Awg())%7;Apa=((371+AtQ)-Vf)%7;if(Apa<=3)Vf+=Apa;else
Vf-=Apa;this.Year++;this.Ls(d);this.Uv(K6);}return(Vf/7)|0;},AbZ:function(){var B;
var d=this.GL;var K6=this.Hk;var Di=this.Year;var Af9=((!!!(Di%4)&&(!!(Di%100)||
!!!(Di%400)))?1:0);switch(K6){case 2:d+=31;break;case 3:d+=(59+Af9);break;case 4:
d+=(90+Af9);break;case 5:d+=(120+Af9);break;case 6:d+=(151+Af9);break;case 7:d+=(
181+Af9);break;case 8:d+=(212+Af9);break;case 9:d+=(243+Af9);break;case 10:d+=(273+
Af9);break;case 11:d+=(304+Af9);break;case 12:d+=(334+Af9);break;default:;}return d;
},Awg:function(){var B;var d=this.GL;var K6=this.Hk+((this.Hk>2)?-2:10);var Di=this.
Year-((this.Hk<=2)?1:0);var B4=(Di/100)|0;Di%=100;d+=((((((((26*K6)-2)/10)|0)+Di
)+((Di/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnI:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUM=E;},AnF:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av6=E;},AnC:function(E){if(E<0)E=0;if(E>23)E=23;this.AjU=E;},Ls:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},Uv:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hk=E;},Format:function(Iw){var result=A.jV;var inx=0;while(!!(Iw.charCodeAt(inx)||
0))if((Iw.charCodeAt(inx)||0)===0x25){var AaD=1;inx=inx+1;if((Iw.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaD=0;}switch(Iw.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaD,10);break;case 0x48:result=result+A.abl(this.AjU,2*AaD,10);break;
case 0x49:if(!(this.AjU%12))result=result+Aae;else result=result+A.abl(this.AjU%
12,2*AaD,10);break;case 0x6D:result=result+A.abl(this.Hk,2*AaD,10);break;case 0x4D:
result=result+A.abl(this.Av6,2*AaD,10);break;case 0x70:if(this.AjU<12)result=result+
A.aci.Bhr;else result=result+A.aci.Bow;break;case 0x53:result=result+A.abl(this.
AUM,2*AaD,10);break;case 0x77:result=result+A.abl(this.Awg(),AaD,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaD,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaD,10);break;case 0x25:result=result+Xg;break;case 0x6A:result=result+
A.abl(this.AbZ(),3*AaD,10);break;case 0x57:result=result+A.abl(this.Bl8(),2*AaD,
10);break;case 0x61:result=result+this.BdM(this.Awg(),true);break;case 0x41:result=
result+this.BdM(this.Awg(),false);break;case 0x62:result=result+this.BdO(this.Hk
,true);break;case 0x42:result=result+this.BdO(this.Hk,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iw.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac7,AfL,Bxp,BxG,BxX,Byd){this.Year=Ac7;this.
Uv(AfL);this.Ls(Bxp);this.AnC(BxG);this.AnF(BxX);this.AnI(Byd);return this;},Initialize:
function(Ah$){this.AFX(Ah$);return this;},Biv:function(Ah$){if(!Ah$)return A._NewObject(
C.An6,0).Initialize(this.JW());return A._NewObject(C.An6,0).Initialize(this.JW()-
Ah$.JW());},BpN:function(Ay8){if(!Ay8)return this;return A._NewObject(C.Bs,0).Initialize(
this.JW()-Ay8.JW());},J:function(Ay8){if(!Ay8)return this;return A._NewObject(C.
Bs,0).Initialize(this.JW()+Ay8.JW());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An6={AGG:0,AEp:0,ADD:0,Ko:0,JW:function(
){return(((this.Ko*86400)+(this.ADD*3600))+(this.AEp*60))+this.AGG;},AFX:function(
E){var ALb=1;this.Ko=Math.trunc(E/86400)|0;if(E<0){E=-E;ALb=-1;}this.ADD=ALb*(Math.
trunc(E/3600)%24|0);this.AEp=ALb*(Math.trunc(E/60)%60|0);this.AGG=ALb*(E%60|0);}
,Initialize2:function(Bxq,BxH,BxY,Byg){this.Ko=Bxq;this.ADD=BxH;this.AEp=BxY;this.
AGG=Byg;return this;},Initialize:function(Ah$){this.AFX(Ah$);return this;},_Init:
function(aArg){this.__proto__=C.An6;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$2={As:null,Ph:null,Trigger:function(AoF,A1z){var Pm=A._NewObject(C.AVh,0);
Pm.Aut=this;Pm.As=AoF;this.Ph.A$D(Pm,A1z);},_Init:function(aArg){this.__proto__=
C.A$2;this.Ph=A._GetAutoObject(C.AxO);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ph)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$3={JQ:null,Event:null,ASz:null,At8:function(G){var B;if(
!this.Event)return;this.JQ=this.Event.As;(B=this.ASz)?B[1].call(B[0],this):null;
this.JQ=null;},BmK:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At8],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At8],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$3;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGH={Dt:0x1,BDp:0x2,BEy:0x4,BGv:0x8,Bw:0x10,H_:0x20
,BEz:0x40,BFa:0x80,BEu:0x100,BEQ:0x200,BEi:0x400,BFP:0x800,Bl:0x1000,BGE:0x2000,
BFx:0x4000,BFy:0x8000,Abj:0x10000,BFw:0x20000,BF2:0x40000,BD$:0x80000,BFG:0x100000
,BD5:0x200000};C.PO={BFR:0x1,BFS:0x2,BDl:0x4,BDm:0x8,BDn:0x10,BDk:0x20};C.Ag1={None:
0,BGr:1,BDI:2,BEV:3,BFV:4,BGs:5,BGt:6,BDJ:7,BDK:8,BEX:9,BEW:10,BFX:11,BFW:12};C.
Au7={None:0,BGp:1,Left:2,BDG:3,ZT:4,A5P:5,BGq:6,Right:7,BDH:8};C.KeyCode={NoKey:
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
C._Init=function(){C.Akh.__proto__=C.Cj;C.ZE.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARG.__proto__=
C.Event;C.Au2.__proto__=C.Event;C.Aef.__proto__=C.Event;C.AqJ.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CM.__proto__=C.P;C.Dz.__proto__=C.P;C.Bn.__proto__=C.ZE;C.H$.
__proto__=C.Eu;C.AEe.__proto__=C.Arm;C.AEf.__proto__=C.Arm;C.AVh.__proto__=C.AkZ;
};C._ReInit=function(){var B;if((B=C.AxO._this))B._ReInit(),C.AxO._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxO._this)&&(B._cycle!=D))B._Done(C.AxO._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */