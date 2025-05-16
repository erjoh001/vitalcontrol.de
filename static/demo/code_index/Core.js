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
var Cf=[0,0];var BD=[0,0,0,0];var E8="The view does not belong to this group";var
Hs=[1000,740];var I0="The dialog component is already presented";var Iw="The dialog component is actually not presented";
var O$="No fader to perform the fade-in/out operation";var Qb="Trying to use the same fader twice";
var Qc="Trying to fade-in/out a group which belongs to another owner";var CR="No view to restack";
var Fe="View is not in this group";var L9="Sibling view does not belong to the group";
var Qd="No view to remove";var J9="No view to add";var Oh="View already in a group";
var Qe="Recursive invalidate during active update cycle.";var MR=[-8,-8,9,9];var
Tf="No group to end the modal state.";var U1="The group is not modal.";var Aab="No group to obtain the modal state.";
var Xf="The group serves already as the \'virtual keyboard\'.";var Ix="The group is already modal.";
var U2="View is not in the same group or it is not embedded within the Outline "+
"Box";var Aac="The method SwitchToDialog() is not available in Core::VerticalList.";
var U3="The method DismissDialog() is not available in Core::VerticalList.";var Aad=
"The method PresentDialog() is not available in Core::VerticalList.";var Xg="The method FadeGroup() is not available in Core::VerticalList.";
var Aae="The method RestackBehind() is not available in Core::VerticalList.";var
Aaf="The method RestackTop() is not available in Core::VerticalList.";var U4="The method Restack() is not available in Core::VerticalList.";
var Xh="The method Remove() is not available in Core::VerticalList.";var Pa="The method AddBehind() is not available in Core::VerticalList.";
var Aag="The method Add() is not available in Core::VerticalList.";var Oi="The Slide Touch Handler:";
var Rp="is already connected with a view.";var Xi="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xj=[0,0,170,120];var Tg="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xk="The method DismissDialog() is not available in Core::HorizontalList.";var
Aah="The method PresentDialog() is not available in Core::HorizontalList.";var Xl=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xm="The method RestackBehind() is not available in Core::HorizontalList.";
var Th="The method RestackTop() is not available in Core::HorizontalList.";var Ti=
"The method Restack() is not available in Core::HorizontalList.";var Tj="The method Remove() is not available in Core::HorizontalList.";
var Aai="The method AddBehind() is not available in Core::HorizontalList.";var Tk=
"The method Add() is not available in Core::HorizontalList.";var Aaj=[0,0,1,1];var
AfF="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aak="Trying to cancel a task not belonging to this queue!";var Xn="Trying to enqueue a task twice!";
var Aal="12";var Xo="%";
C.Cj={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,J7:0,PT:0x14,At3:function(BJ,Ah_){}
,Asc:function(E){if(this.J7===E)return;this.J7=E;if(!!this.Ab){var Ai7=this.Ah;var
Hd=0;while(!!Ai7&&(E>Ai7.J7)){Ai7=Ai7.Ah;Hd=Hd+1;}Ai7=this.AJ;while(!!Ai7&&(E<Ai7.
J7)){Ai7=Ai7.AJ;Hd=Hd-1;}if(!!Hd)this.Ab.J5(this,Hd);}},A1:function(E){var B;var
Hd=E^this.PT;if(!Hd)return;this.PT=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JP],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.NK.U=this.Ev.
NK.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},Iq:function(
){var B1=this.Ab;while(!!B1){var II=(C.Root.isPrototypeOf(B1)?B1:null);if(!!II)return II;
B1=B1.Ab;}return null;},Ks:function(C0,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G6:function(CN){return null;},Yr:function(Dc,BH,Om,Aas
,Ac8,Ac7){return null;},AuO:function(Dc){return Dc;},AuY:function(BJ,MV){return Cf;
},Ano:function(aOffset,Atz){},GetExtent:function(){return BD;},Cs:function(Rw,Vd
){var B;if(((this.U&0x200)===0x200))Rw=Rw&~0x400;var A3n=(this.U&~Vd)|Rw;var XF=
A3n^this.U;this.U=A3n;if(!!this.Ab&&!!(XF&0x14)){var BdL=((this.U&0x14)===0x14);
if(BdL&&!this.Ab.AV)this.Ab.Bb(this);if(!BdL&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.AC6(this,0x14));}if(!!this.Ab&&!!(XF&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A3n&0x400)===0x400))&&((XF&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}if(!!this.Ab&&((XF&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JP],this);}if(((((XF&0x100000)===0x100000)&&((Vd&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
XF&0x100000)===0x100000)&&((Rw&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((XF&0x200000)===0x200000)&&((Vd&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((XF&0x200000)===0x200000)&&((Rw&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.He.C2!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akh={ED:A.wf,Et:A.wf
,At3:function(BJ,Ah_){var Ar=A._NewObject(C.AEo,0);this.Ev=null;Ar.extent=this.getExtent(
);Ar.Be=BJ;Ar.NK=Ah_;Ar.AiU=this.Et;Ar.AiV=this.ED;this.Ev=Ar;},AuY:function(BJ,
MV){var B;var EW=this.PT;var Ar=(C.AEo.isPrototypeOf(B=this.Ev)?B:null);var x1=Ar.
extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.extent[3];var Kg=[BJ[
2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=y2-y1;var tmp;if(!MV){var NN=[(B=Ar.Be
)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Be[0];y1=y1-Ar.Be[1];if(NN[0]!==Kg[0]){var HW=((EW&
0x4)===0x4);var HX=((EW&0x8)===0x8);var QA=((EW&0x1)===0x1);if(!HW&&(QA||!HX))x1=((
x1*Kg[0])/NN[0])|0;if(!HX&&(QA||!HW)){x2=x2-Ar.Be[0];x2=((x2*Kg[0])/NN[0])|0;x2=
x2-Kg[0];}else x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!QA){if(HW&&!HX)x2=x1+BZ;
else if(!HW&&HX)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}}}else{x2=x2-
Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kg[1]){var HY=((EW&0x10)===0x10);var
HV=((EW&0x20)===0x20);var QB=((EW&0x2)===0x2);if(!HY&&(QB||!HV))y1=((y1*Kg[1])/NN[
1])|0;if(!HV&&(QB||!HY)){y2=y2-Ar.Be[1];y2=((y2*Kg[1])/NN[1])|0;y2=y2-Kg[1];}else
y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!QB){if(HY&&!HV)y2=y1+BL;else if(!HY&&
HV)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-Ar.Be[3];y1=y1+
BJ[1];y2=y2+BJ[3];}}else{switch(MV){case 3:{x1=BJ[0];x2=x1+BZ;}break;case 4:{x2=
BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[3];y1=y2-BL;
}break;default:;}if((MV===3)||(MV===4)){var HY=((EW&0x10)===0x10);var HV=((EW&0x20
)===0x20);var QB=((EW&0x2)===0x2);if(QB){y1=BJ[1];y2=BJ[3];}else if(HY&&!HV){y1=
BJ[1];y2=y1+BL;}else if(HV&&!HY){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1
])-BL)/2)|0);y2=y1+BL;}}if((MV===1)||(MV===2)){var HW=((EW&0x4)===0x4);var HX=((
EW&0x8)===0x8);var QA=((EW&0x1)===0x1);if(QA){x1=BJ[0];x2=BJ[2];}else if(HW&&!HX
){x1=BJ[0];x2=x1+BZ;}else if(HX&&!HW){x2=BJ[2];x1=x2-BZ;}else{x1=BJ[0]+((((BJ[2]-
BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);BZ=x2-x1;BL=y2-y1;if(
Ar.AiV[0]<Ar.AiU[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Ar.AiV[1]<Ar.AiU[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DN([x1,y1]);this.DD([x2,y2]);this.
Ev=Ar;}return[BZ,BL];},Ano:function(aOffset,Atz){if(Atz){this.Et=A.abf(this.Et,aOffset
);this.ED=A.abf(this.ED,aOffset);}else{this.DN(A.abf(this.Et,aOffset));this.DD(A.
abf(this.ED,aOffset));}},GetExtent:function(){if(!!this.Ev&&this.Ev.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Et[0];var y1=this.Et[
1];var x2=this.ED[0];var y2=this.ED[1];var BZ=x2-x1;var BL=y2-y1;var tmp;if(BZ<0
)BZ=-BZ;if(BL<0)BL=-BL;if(BZ>=BL){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BL>=BZ){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DD:function(E){var B;if(A.aaX(E,this.
ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},DN:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.Et=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JP],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.
Akh;},_className:"Core::LineView"};C.ZJ={KD:A.wf,MM:A.wf,ED:A.wf,Et:A.wf,At3:function(
BJ,Ah_){var Ar=A._NewObject(C.AEp,0);this.Ev=null;Ar.extent=this.GetExtent();Ar.
Be=BJ;Ar.NK=Ah_;Ar.AiU=this.Et;Ar.AiV=this.ED;Ar.AA6=this.MM;Ar.AA7=this.KD;this.
Ev=Ar;},AuY:function(BJ,MV){var B;var EW=this.PT;var Ar=(C.AEp.isPrototypeOf(B=this.
Ev)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.
extent[3];var Kg=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=y2-y1;if(!MV){var
NN=[(B=Ar.Be)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Be[0];y1=y1-Ar.Be[1];if(NN[0]!==Kg[0]){
var HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8);var QA=((EW&0x1)===0x1);if(!HW&&(
QA||!HX))x1=((x1*Kg[0])/NN[0])|0;if(!HX&&(QA||!HW)){x2=x2-Ar.Be[0];x2=((x2*Kg[0]
)/NN[0])|0;x2=x2-Kg[0];}else x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!QA){if(HW&&
!HX)x2=x1+BZ;else if(!HW&&HX)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}
}}else{x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kg[1]){var HY=((EW&0x10
)===0x10);var HV=((EW&0x20)===0x20);var QB=((EW&0x2)===0x2);if(!HY&&(QB||!HV))y1=((
y1*Kg[1])/NN[1])|0;if(!HV&&(QB||!HY)){y2=y2-Ar.Be[1];y2=((y2*Kg[1])/NN[1])|0;y2=
y2-Kg[1];}else y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!QB){if(HY&&!HV)y2=y1+BL;
else if(!HY&&HV)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-
Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MV){case 3:{x1=BJ[0];x2=x1+BZ;}break;
case 4:{x2=BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[
3];y1=y2-BL;}break;default:;}if((MV===3)||(MV===4)){var HY=((EW&0x10)===0x10);var
HV=((EW&0x20)===0x20);var QB=((EW&0x2)===0x2);if(QB){y1=BJ[1];y2=BJ[3];}else if(
HY&&!HV){y1=BJ[1];y2=y1+BL;}else if(HV&&!HY){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((
BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MV===1)||(MV===2)){var HW=((EW&0x4)===0x4);
var HX=((EW&0x8)===0x8);var QA=((EW&0x1)===0x1);if(QA){x1=BJ[0];x2=BJ[2];}else if(
HW&&!HX){x1=BJ[0];x2=x1+BZ;}else if(HX&&!HW){x2=BJ[2];x1=x2-BZ;}else{x1=BJ[0]+((((
BJ[2]-BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);BZ=(x2-x1)-1;BL=(
y2-y1)-1;var AiA=Ar.extent[0];var AiC=Ar.extent[1];var Af6=(Ar.extent[2]-AiA)-1;
var Af5=(Ar.extent[3]-AiC)-1;if(!Af6)Af6=1;if(!Af5)Af5=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((Ar.AiU[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AiU[1]-AiC)*BL)/Af5)|0)];
this.ED=[x1+((((Ar.AiV[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AiV[1]-AiC)*BL)/Af5)|0)];this.
MM=[x1+((((Ar.AA6[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AA6[1]-AiC)*BL)/Af5)|0)];this.KD=[
x1+((((Ar.AA7[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AA7[1]-AiC)*BL)/Af5)|0)];}else{this.
DN([x1+((((Ar.AiU[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AiU[1]-AiC)*BL)/Af5)|0)]);this.DD([
x1+((((Ar.AiV[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AiV[1]-AiC)*BL)/Af5)|0)]);this.KA([x1+((((
Ar.AA6[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AA6[1]-AiC)*BL)/Af5)|0)]);this.J1([x1+((((Ar.
AA7[0]-AiA)*BZ)/Af6)|0),y1+((((Ar.AA7[1]-AiC)*BL)/Af5)|0)]);this.Ev=Ar;}return[BZ+
1,BL+1];},Ano:function(aOffset,Atz){if(Atz){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.MM=A.abf(this.MM,aOffset);this.KD=A.abf(this.KD,aOffset
);}else{this.DN(A.abf(this.Et,aOffset));this.DD(A.abf(this.ED,aOffset));this.KA(
A.abf(this.MM,aOffset));this.J1(A.abf(this.KD,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.MM[0];var y2=this.MM[1];if((((this.KD[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.KD[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.MM[0]<x1)x1=
this.MM[0];if(this.KD[0]<x1)x1=this.KD[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
MM[1]<y1)y1=this.MM[1];if(this.KD[1]<y1)y1=this.KD[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.KD[0]>x2)x2=this.KD[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.KD[1]>y2)y2=this.KD[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},J1:function(E){var B;if(A.aaX(E,this.KD))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.KD=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},KA:function(E){var B;if(A.aaX(E,
this.MM))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Ev=null;this.MM=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},DD:function(
E){var B;if(A.aaX(E,this.ED))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Ev=null;this.ED=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JP],this);}},DN:function(E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.Et=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},ARx:function(K4){var HF=A.abi(4,
A.wf,null);var O=0;var Ik=3;var A2S=false;var A2T=false;HF.Set(0,this.Et);HF.Set(
1,this.ED);HF.Set(2,this.MM);HF.Set(3,this.KD);while(O<4){var Bhv=HF.Get(O)[0];var
ALI=HF.Get(O)[1];var BDh=HF.Get(Ik)[0];var A49=HF.Get(Ik)[1];if(((ALI>K4[1])!==(
A49>K4[1]))||((ALI<K4[1])!==(A49<K4[1]))){var Ep=((((BDh-Bhv)*(K4[1]-ALI))/(A49-
ALI))|0)+Bhv;if(K4[0]>Ep)A2S=!A2S;if(K4[0]<Ep)A2T=!A2T;}Ik=O;O=O+1;}return A2S||
A2T;},BjZ:function(){return((((this.Et[0]===this.KD[0])&&(this.ED[0]===this.MM[0
]))&&(this.Et[1]===this.ED[1]))&&(this.MM[1]===this.KD[1]))||((((this.Et[0]===this.
ED[0])&&(this.MM[0]===this.KD[0]))&&(this.Et[1]===this.KD[1]))&&(this.ED[1]===this.
MM[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZJ;},
_className:"Core::QuadView"};C.Eu={M:A.wg,At3:function(BJ,Ah_){var Ar=A._NewObject(
C.Art,0);Ar.extent=this.M;Ar.Be=BJ;Ar.NK=Ah_;this.Ev=Ar;},AuY:function(BJ,MV){var
B;var EW=this.PT;var Ar=this.Ev;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var Kg=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=
y2-y1;if(!MV){var NN=[(B=Ar.Be)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Be[0];y1=y1-Ar.Be[1];
if(NN[0]!==Kg[0]){var HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8);var QA=((EW&0x1
)===0x1);if(!HW&&(QA||!HX))x1=((x1*Kg[0])/NN[0])|0;if(!HX&&(QA||!HW)){x2=x2-Ar.Be[
0];x2=((x2*Kg[0])/NN[0])|0;x2=x2-Kg[0];}else x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[
2];if(!QA){if(HW&&!HX)x2=x1+BZ;else if(!HW&&HX)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ
)/2)|0);x2=x1+BZ;}}}else{x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kg[1
]){var HY=((EW&0x10)===0x10);var HV=((EW&0x20)===0x20);var QB=((EW&0x2)===0x2);if(
!HY&&(QB||!HV))y1=((y1*Kg[1])/NN[1])|0;if(!HV&&(QB||!HY)){y2=y2-Ar.Be[1];y2=((y2
*Kg[1])/NN[1])|0;y2=y2-Kg[1];}else y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!QB
){if(HY&&!HV)y2=y1+BL;else if(!HY&&HV)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MV){case 3:{x1=
BJ[0];x2=x1+BZ;}break;case 4:{x2=BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;
}break;case 2:{y2=BJ[3];y1=y2-BL;}break;default:;}if((MV===3)||(MV===4)){var HY=((
EW&0x10)===0x10);var HV=((EW&0x20)===0x20);var QB=((EW&0x2)===0x2);if(QB){y1=BJ[
1];y2=BJ[3];}else if(HY&&!HV){y1=BJ[1];y2=y1+BL;}else if(HV&&!HY){y2=BJ[3];y1=y2-
BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MV===1)||(MV===2)){var
HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8);var QA=((EW&0x1)===0x1);if(QA){x1=BJ[
0];x2=BJ[2];}else if(HW&&!HX){x1=BJ[0];x2=x1+BZ;}else if(HX&&!HW){x2=BJ[2];x1=x2-
BZ;}else{x1=BJ[0]+((((BJ[2]-BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=Ar;}return[x2-x1,y2-y1];},Ano:function(aOffset,Atz){if(Atz)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JP],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B9:null,B_:null,AKC:null,FG:null
,He:null,XG:null,ApV:null,AV:null,G_:255,AzX:0,Az0:0,AzZ:0,AzY:0,Init:function(aArg
){this.Am();},Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G_)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(C0.C2===this))this.BdA(C0,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FG.Update();C0.A6i(aClip,this.FG,0,A.abh(this.M,aOffset),Cf,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzY,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.Az0);Az=A.abN(
Az,Az[2]+this.AzZ);Az=[].concat(Az.slice(0,3),Az[3]+this.AzX);if(((this.U&0x80000
)===0x80000)){var Ap8=BD;var X;for(X=this.B9;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap8=
A.wC(Ap8,X.GetClipping());Az=A.wC(Az,A.abh(Ap8,this.M.slice(0,2)));}return Az;},
Yr:function(Dc,BH,Om,Aas,Ac8,Ac7){var B;var X=this.B_;var App=null;var AE=BD;var
Kh=null;var A3c=!!this.XG&&(!!this.XG.FS||!!this.XG.B9);if(((B=A.lb(Dc,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Dc=A.abg(Dc,this.M.slice(0,2));if(!!Ac8){X=Ac8;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kh){Kh=X.
AJ;while(!!Kh&&!((Kh.U&0x200)===0x200))Kh=Kh.AJ;if(!!Kh)AE=A.lb(Dc,Kh.GetExtent(
));else AE=BD;}if(Kh===X){Kh=null;AE=BD;}if((!!Aas&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.He.C2===X)&&!A3c))
)){var extent=X.GetExtent();var AJ6=Aas;var Ao$=null;if(AJ6===X)AJ6=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao$=X.Yr(AE
,BH,Om,AJ6,Ac8,Ac7);}else if(!(((B=A.lb(extent,Dc))[0]>=B[2])||(B[1]>=B[3]))||(Aas===
X))Ao$=X.Yr(Dc,BH,Om,AJ6,Ac8,Ac7);X=X.AJ;if(!!Ao$){if(!App||((Ao$.Au8<App.Au8)&&(
Ao$.Au8>=0)))App=Ao$;if(!Ao$.Au8)X=null;}}else X=X.AJ;Ac8=null;}return App;},AuO:
function(Dc){var B;var F;var X=this.B9;var LI=BD;var AA0=true;var result=(Dc=F=A.
abg(Dc,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var Aud=(C.Y.isPrototypeOf(
X)?X:null);LI=A.lb(Dc,Aud.M);AA0=((Aud.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AA0){var AE=A.lb(X.GetClipping(),LI);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuO(AE));}}else{var AE=A.lb(X.GetClipping(),
Dc);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuO(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Rw,Vd){var B;
var Tx=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((Vd&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Eu.Cs.call(this,Rw,Vd);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rw&0x80000)===0x80000))&&!((Tx&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var XF=this.U^Tx;if(!!this.AV&&((XF&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.He&&((XF&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.He.C2.
U&0x14)===0x14))this.He.C2.Cs(0x40,0x0);else this.He.C2.Cs(0x0,0x40);}if(((XF&0x10
)===0x10)){var X;for(X=this.B9;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.He.C2===X)))X.Cs(Rw&0x10,Vd&
0x10);}if(!!XF){this.U=this.U|0x8000;A.pe([this,this.ABF],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al4=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKK=[
E[2]-E[0],E[3]-E[1]];var Ap4=!A.aaX(Al4,AKK);if(Ap4&&!!this.FG){this.FG.ArY(AKK);
A.we(this,0);A.we(this.FG,0);}C.Eu.H.call(this,E);if((Ap4&&(Al4[0]>0))&&(Al4[1]>
0)){var Be=[].concat(Cf,Al4);var X=this.B9;while(!!X){if((!X.Ev&&(X.PT!==0x14))&&
!((X.U&0x400)===0x400))X.At3(Be,null);X=X.Ah;}}if(Ap4){this.U=this.U|0x5000;A.pe([
this,this.ABF],this);}},A4j:function(CN){var Bew=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKC;if(!Bew)return null;while(!!D5&&(!D5.Bw||!D5.G6(Bew)))D5=D5.
Ah;return D5;},BC3:function(G){if(!!this.FG){this.FG.C2=this;var AE=A.abg(this.AuO(
A.abh(this.FG.QQ,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Avq(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BdA(this.FG,AE,Cf,255,true);this.FG.
C2=null;}},BdA:function(C0,aClip,aOffset,Ck,aBlend){var B;var X=this.B9;var LI=BD;
var AA0=true;this.BiY(C0,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var Aud=(C.Y.isPrototypeOf(X)?X:null);AA0=((Aud.U&0x1)===0x1);LI=aClip;if(!((
Aud.U&0x80000)===0x80000))LI=A.lb(LI,A.abh(Aud.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AA0){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LI
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Ks(C0,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Ks(C0,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.Bi1(C0,aClip,aOffset,Ck,aBlend);},Bgt:
function(){var B;var A2L=((this.U&0x1000)===0x1000);var AiH=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var AaB=false;var Adp=BD;var K6=BD;var AaC=Cf;var AtZ=0;var At0=0;
var AtY=0;var Qt=0;var X=this.B_;var Kh=null;var AlW=null;while(!!X){if(((X.U&0x800
)===0x800)){AaB=true;X.U=X.U&~0x800;}if(AaB&&((X.U&0x200)===0x200)){AaB=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag2)X.U=X.U|0x1000;}X=X.AJ;}AaB=false;X=this.B9;
if(A2L){this.U=this.U&~0x1000;A2L=!((AiH[0]>=AiH[2])||(AiH[1]>=AiH[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlW&&(AtY!==Qt)){var AdN=X;var AK7=0;var ABk=Adp[2]-
Adp[0];var Azy=Adp[3]-Adp[1];var AJW=0;var Aqe=Cf;do if(((AdN.U&0x200)===0x200))
AdN=null;else if(((AdN.U&0x401)===0x401)){Aqe=[(B=AdN.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qt===3)||(Qt===4))ABk=ABk-Aqe[0];if((Qt===1)||(Qt===2))Azy=Azy-Aqe[1];
if(!AlW||((ABk>=0)&&(Azy>=0))){AlW=AdN;AdN=AdN.Ah;if((Qt===3)||(Qt===4)){ABk=ABk-
AtZ;if(Aqe[1]>AK7)AK7=Aqe[1];}if((Qt===1)||(Qt===2)){Azy=Azy-At0;if(Aqe[0]>AJW)AJW=
Aqe[0];}}else AdN=null;}else AdN=AdN.Ah;while(!!AdN);if(!AlW)AlW=Kh;K6=Adp;switch(
AtY){case 9:case 11:K6=[].concat(K6.slice(0,3),K6[1]+AK7);break;case 10:case 12:
K6=A.abP(K6,K6[3]-AK7);break;case 5:case 7:K6=A.abN(K6,K6[0]+AJW);break;case 6:case
8:K6=[].concat(K6[2]-AJW,K6.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.NK!==Kh))X.Ev=null;if((!X.Ev&&AaB)&&((X.PT!==0x14)||!!Qt))X.
At3(K6,Kh);}if(!!X.Ev){if(A2L&&!((X.U&0x400)===0x400))X.AuY(AiH,0);if(AaB&&((X.U&
0x400)===0x400)){var C6=X.AuY(A.abh(K6,AaC),Qt);if(((X.U&0x1)===0x1)){var Bq=Cf;
switch(Qt){case 3:Bq=[C6[0]+AtZ,Bq[1]];break;case 4:Bq=[-C6[0]-AtZ,Bq[1]];break;
case 1:Bq=[Bq[0],C6[1]+At0];break;case 2:Bq=[Bq[0],-C6[1]-At0];break;default:;}AaC=
A.abf(AaC,Bq);}}}if(((X.U&0x200)===0x200)){if(AaB)A.pe(Kh.Em,Kh);AaB=((X.U&0x1000
)===0x1000);Kh=(C.Y.isPrototypeOf(X)?X:null);if(AaB){X.U=X.U&~0x1000;AtY=Kh.Ag2;
Qt=AtY;Adp=A.abh(Kh.M,Kh.Br);K6=Adp;AaC=Cf;AtZ=Kh.Space+Kh.AVi;At0=Kh.Space;AaB=
!((Adp[0]>=Adp[2])||(Adp[1]>=Adp[3]));AlW=null;switch(AtY){case 9:case 10:Qt=3;break;
case 11:case 12:Qt=4;break;case 5:case 6:Qt=1;break;case 7:case 8:Qt=2;break;default:;
}}if(AaB)this.Bj(Kh.M);}if(X===AlW){switch(AtY){case 9:case 11:AaC=[0,(AaC[1]+(K6[
3]-K6[1]))+At0];break;case 10:case 12:AaC=[0,(AaC[1]-(K6[3]-K6[1]))-At0];break;case
5:case 7:AaC=[(AaC[0]+(K6[2]-K6[0]))+AtZ,0];break;case 6:case 8:AaC=[(AaC[0]-(K6[
2]-K6[0]))-AtZ,0];break;default:;}AlW=null;}X=X.Ah;}if(AaB)A.pe(Kh.Em,Kh);this.U=
this.U&~0x2000;this.Bl([AiH[2]-AiH[0],AiH[3]-AiH[1]]);},JP:function(G){A.pe([this
,this.ABF],this);},ABF:function(G){var B;var BC$=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bgt();}if(((this.U&0x8000)===
0x8000)||BC$){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E8);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},BbJ:function(Aq){this.Bb(Aq);},ASM:function(){return!!this.FG;},ArS:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AEN=null;this.FG.ArY(Cf);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArY([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AEN=[this,this.BC3];}A.we(this,0);},A86:function(){var B;return((this.U&
0x100000)===0x100000);},As:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},CZ:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G_)return;
this.G_=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0M:
function(Aq){this.CZ(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bms:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fp:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoL,AoM,AoN,AoK){var B;var Azp=this.M;var RD=
Azp;if(AoL<0)AoL=0;if(AoL>255)AoL=255;if(AoM<0)AoM=0;if(AoM>255)AoM=255;if(AoN<0
)AoN=0;if(AoN>255)AoN=255;if(AoK<0)AoK=0;if(AoK>255)AoK=255;RD=[].concat(RD[0]-(
Math.max(AoL,this.AzY)&0xFF),RD.slice(1,4));RD=A.abN(RD,RD[2]+(Math.max(AoM,this.
AzZ)&0xFF));RD=A.abP(RD,RD[1]-(Math.max(AoN,this.Az0)&0xFF));RD=[].concat(RD.slice(
0,3),RD[3]+(Math.max(AoK,this.AzX)&0xFF));if(AoL!==this.AzY){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RD;Az=A.abN(Az
,Azp[0]);this.Ab.Bj(Az);}this.AzY=AoL&0xFF;}if(AoM!==this.AzZ){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RD;Az=[].
concat(Azp[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzZ=AoM&0xFF;}if(AoN!==this.Az0
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000
)){var Az=RD;Az=[].concat(Az.slice(0,3),Azp[1]);this.Ab.Bj(Az);}this.Az0=AoN&0xFF;
}if(AoK!==this.AzX){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.
U&0x80000)===0x80000)){var Az=RD;Az=A.abP(Az,Azp[3]);this.Ab.Bj(Az);}this.AzX=AoK&
0xFF;}},Bi1:function(C0,aClip,aOffset,Ck,aBlend){},BiY:function(C0,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hs;},GetMinimalSize:function(){return Cf;
},AVp:function(Iy,Ol,Xs,Tn,To,Ah$,Pf,Rv,LE,LC,LD){var B;if(!this.He){this.AkN(Iy
,Ol,Xs,Tn,To,null,null,LE,LC,LD);return;}var Al3=this.He;var JM=Al3.Ah;if(((Iy.U&
0x10000)===0x10000)&&(this.He.C2!==Iy))throw new Error(I0);var Adv=A._NewObject(
C.AN_,0);var RG=Al3.RG;var RP=null;var Mk=null;if(!!JM){RP=JM.RP;Mk=JM.Mk;}if(!!
JM&&!!Al3.ApU)RP=Al3.ApU;if(!!JM&&!!Pf)Mk=Pf;if(!!Ah$)RG=Ah$;if(!Ol)Ol=A._GetAutoObject(
A.acl.AsM);if(!Xs)Xs=Ol;if(!To)To=Tn;if(!Tn)Tn=To;Adv.RG=Xs;Adv.Mk=Tn;Adv.RP=To;
Adv.ApU=Rv;Adv.C2=Iy;Adv.Ah=this.He.Ah;this.He.Ah=null;this.He=Adv;if(this.AV===
Iy)this.Bb(null);Al3.C2.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iy.U&0x4)===
0x4))Iy.Cs(0x10040,0x0);else Iy.Cs(0x10000,0x0);if(!!Mk){this.NX(JM.C2,Mk.Aee(),
null,null,LD);this.NX(Al3.C2,RG.Sh(),null,null,true);this.NX(Adv.C2,Ol.Si(),LE,LC
,true);}else if(!!RP){this.NX(JM.C2,RP.Aef(),null,null,LD);this.NX(Al3.C2,RG.Sh(
),null,null,true);this.NX(Adv.C2,Ol.Si(),LE,LC,true);}else if(!!RG){this.NX(Al3.
C2,RG.Sh(),null,null,LD);this.NX(Adv.C2,Ol.Si(),LE,LC,true);}else this.NX(Adv.C2
,Ol.Si(),LE,LC,LD);},AqN:function(Iy,Ah$,Pf,Rv,LE,LC,LD){var B;if(!this.He)return;
if(!Iy)return;var KI=this.He;var JM=this.He.Ah;var Ap0=null;while((!!KI&&(KI.C2!==
Iy))&&!!KI.Ah){Ap0=KI;KI=JM;JM=KI.Ah;}if(!KI||(KI.C2!==Iy))throw new Error(Iw);if(
!Ap0){this.He=JM;KI.Ah=null;}else{Ap0.Ah=JM;KI.Ah=null;}KI.C2.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JM)&&!Ap0)&&((JM.C2.U&0x200000)===0x200000))JM.C2.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JM)&&!Ap0)&&((JM.C2.U&0x4)===0x4))JM.C2.Cs(
0x40,0x0);var RG=KI.RG;var RP=null;var Mk=null;if(!!JM)RP=JM.RP;if(!!JM&&!!KI.ApU
)RP=KI.ApU;if(!!JM&&!!Rv)RP=Rv;if(!!Ap0&&!!JM)Mk=JM.Mk;if((!!Ap0&&!!JM)&&!!Pf)Mk=
Pf;if(!!Ah$)RG=Ah$;if(!!Mk){this.NX(JM.C2,Mk.Aee(),null,null,LD);this.NX(KI.C2,RG.
Sh(),LE,LC,true);}else if(!!RP){this.NX(JM.C2,RP.Aef(),null,null,LD);this.NX(KI.
C2,RG.Sh(),LE,LC,true);}else this.NX(KI.C2,RG.Sh(),LE,LC,LD);},AkN:function(Iy,Ol
,Xs,Tn,To,Pf,Rv,LE,LC,LD){var B;if(!Iy)return;if(!!this.He&&(this.He.C2===Iy)){this.
AVp(Iy,Ol,Xs,Tn,To,null,Pf,Rv,LE,LC,LD);return;}if(((Iy.U&0x10000)===0x10000))throw new
Error(I0);var KI=A._NewObject(C.AN_,0);if(!!this.He&&!this.He.Mk){if(!Rv)Rv=Pf;if(
!Pf)Pf=Rv;}var Mk=null;if(!!this.He)Mk=this.He.Mk;if(!!this.He&&!!Pf)Mk=Pf;if(!Ol
)Ol=A._GetAutoObject(A.acl.AsM);if(!Xs)Xs=Ol;if(!To)To=Tn;if(!Tn)Tn=To;KI.RG=Xs;
KI.Mk=Tn;KI.RP=To;KI.ApU=Rv;if(this.AV===Iy)this.Bb(null);if(!!this.He&&((this.He.
C2.U&0x200000)===0x200000))this.He.C2.Cs(0x0,0x10);if(!!this.He)this.He.C2.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iy.U&0x4)===0x4))Iy.Cs(0x10040,0x0);else Iy.
Cs(0x10000,0x0);KI.C2=Iy;KI.Ah=this.He;this.He=KI;if(!!Mk){this.NX(this.He.Ah.C2
,Mk.Aee(),null,null,LD);this.NX(Iy,Ol.Si(),LE,LC,true);}else this.NX(Iy,Ol.Si(),
LE,LC,LD);},A7s:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A76:function(
K4){var tmp=this;while(!!tmp){K4=A.abe(K4,tmp.M.slice(0,2));tmp=tmp.Ab;}return K4;
},BjW:function(K4){var tmp=this;while(!!tmp){K4=A.abf(K4,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K4;},DispatchEvent:function(CN){var B;var X=this.AV;var B1=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A3c=!!this.XG&&(!!this.XG.FS||!!this.XG.B9);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B1=null;}if(!!this.He&&!A3c)GD=this.He.C2.DispatchEvent(CN);if(!GD&&!!B1)
GD=B1.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G6(CN);if(!GD)GD=this.G6(CN);if(!GD
)GD=this.A4j(CN);return GD;},BroadcastEventAtPosition:function(CN,HC,aFilter){var
B;var X=this.B_;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HC)){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GD=B1.
BroadcastEventAtPosition(CN,A.abe(HC,B1.M.slice(0,2)),aFilter);else GD=X.G6(CN);
}X=X.AJ;}if(!GD)GD=this.G6(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B_;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GD=B1.BroadcastEvent(CN,aFilter
);else GD=X.G6(CN);}X=X.AJ;}if(!GD)GD=this.G6(CN);if(!GD)GD=this.A4j(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},Bka:function(){this.U=this.U|0x4000;A.pe([
this,this.ABF],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABF],this
);},Bj:function(Dc){var B;var B1=this;while(!!B1&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3
]))){var Aay=B1.FG;if(!B1.Ab&&(B1!==this)){B1.Bj(Dc);return;}if(!!Aay){var BAO=Aay.
QQ;Aay.QQ=A.wC(Aay.QQ,Dc);if(!A.aaY(BAO,Aay.QQ)){A.we(B1,0);A.we(Aay,0);}}if(!((
B1.U&0x1)===0x1))return;var Az=B1.M;Dc=A.abh(Dc,Az.slice(0,2));if(!!B1.FG||!((B1.
U&0x80000)===0x80000)){if(!!!B1.FG){Az=[].concat(Az[0]-B1.AzY,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B1.Az0);Az=A.abN(Az,Az[2]+B1.AzZ);Az=[].concat(Az.slice(0,3),Az[3
]+B1.AzX);}Dc=A.lb(Dc,Az);}B1=B1.Ab;}},QL:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agm=A.aaI(Ag.GetExtent());var X=Ag;var A1W=null;var
Bdd=0;var I6=0x10000;var AK3;if(((aFilter&0x10000)===0x10000))I6=0x0;var top=((GA===
4)||(GA===1))||(GA===6);var bottom=((GA===5)||(GA===3))||(GA===8);var left=((GA===
2)||(GA===1))||(GA===3);var right=((GA===7)||(GA===6))||(GA===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B_;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.U&B)===B
))))for(AK3=0;AK3<2;AK3++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AK3){if((left&&(s[0]>s[1]))&&(Az[2]<Agm[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agm[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agm[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agm[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agm);var
Ry=Bq;if(Ry[0]<0)Ry=[-Ry[0],Ry[1]];if(Ry[1]<0)Ry=[Ry[0],-Ry[1]];if(((((!left||(Bq[
0]<=-Ry[1]))&&(!right||(Bq[0]>=Ry[1])))&&(!top||(Bq[1]<=-Ry[0])))&&(!bottom||(Bq[
1]>=Ry[0])))&&((Ry[0]>0)||(Ry[1]>0))){var RI=Bq[0];var RJ=Bq[1];var Jq=Math.sqrt((
RI*RI)+(RJ*RJ));var AKB=0;if(!left&&!right)AKB=Jq/Ry[1];if(!top&&!bottom)AKB=Jq/
Ry[0];Jq=(Jq*AKB)*AKB;if((Jq<Bdd)||!A1W){Bdd=Jq;A1W=X;}}}}return A1W;},AqU:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;var I6=0x10000;
if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TY:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;
var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},AC6:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var Al1=Ag.Ah;var Amc=Ag.AJ;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;
while(!!Al1||!!Amc){if((!!Al1&&(!aFilter||((B=aFilter)&&((Al1.U&B)===B))))&&(!I6||
!((B=I6)&&((Al1.U&B)===B))))return Al1;if((!!Amc&&(!aFilter||((B=aFilter)&&((Amc.
U&B)===B))))&&(!I6||!((B=I6)&&((Amc.U&B)===B))))return Amc;if(!!Al1)Al1=Al1.Ah;if(
!!Amc)Amc=Amc.AJ;}return null;},Dd:function(aFilter){var B;var X=this.B9;var AE=
BD;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NX:function(KH,FQ,LE,LC
,LD){var B;if(!KH)return;if(!FQ)throw new Error(O$);if((!!FQ.P||!!FQ.Ab)||!!FQ.Pq
)throw new Error(Qb);if(!!KH.Ab&&(KH.Ab!==this))throw new Error(Qc);if(!this.XG)
this.XG=A._NewObject(C.AVu,0);FQ.Ab=this;FQ.P=KH;FQ.AKN=LC;FQ.A3E=LE;if(!!KH.ApV
)KH.ApV.Pq.Bo8(KH.ApV);KH.ApV=FQ;KH.U=KH.U|0x20000;if((LD&&!!this.XG.B_)&&!this.
XG.B_.ARt())(A.acl.AC1.isPrototypeOf(B=this.XG.B_)?B:null).A5m(FQ);else{var Pq=A.
_NewObject(A.acl.AC1,0);Pq.A5m(FQ);this.XG.A$N(Pq,false);}},AhF:function(Ag,Kb){
var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new Error(Fe);if(!!Kb&&(Kb.
Ab!==this))throw new Error(L9);if(Ag.Ah===Kb)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B_=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;var GC=
null;var IB=this.B_;var LV=Ag.J7;if(!!Kb){GC=Kb;IB=Kb.AJ;}if(!!GC&&(LV>GC.J7))LV=
GC.J7;if(!!IB&&(LV<IB.J7))LV=IB.J7;if(LV!==Ag.J7){Ag.Ab=null;Ag.Asc(LV);Ag.Ab=this;
}if(!Kb){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.B_;Ag.Ah=null;this.B_=Ag;}else{Ag.
Ah=Kb;Ag.AJ=Kb.AJ;Kb.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B9===Kb)this.B9=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZL:function(Ag){var B;if(!Ag)throw new
Error(CR);if(Ag.Ab!==this)throw new Error(Fe);if(!Ag.Ah)return;var IB=this.B_;var
LV=Ag.J7;while(!!IB&&(IB.J7>LV))IB=IB.AJ;if(((IB===Ag)||!IB)||(IB.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=IB;Ag.Ah=IB.Ah;IB.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},J5:function(Ag,Qk){var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new
Error(Fe);var IB=Ag;var GC=Ag;var LV=Ag.J7;while(((Qk>0)&&!!IB.Ah)&&(IB.Ah.J7<=LV
)){IB=IB.Ah;Qk=Qk-1;}while(((Qk<0)&&!!GC.AJ)&&(GC.AJ.J7>=LV)){GC=GC.AJ;Qk=Qk+1;}
if((IB===Ag)&&(GC===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JP],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;if(IB
!==Ag){Ag.Ah=IB.Ah;Ag.AJ=IB;IB.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GC!==Ag){Ag.Ah=GC;
Ag.AJ=GC.AJ;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B_=Ag;if(!Ag.AJ)this.
B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HR:function(Ag){var B;if(
!Ag)throw new Error(Qd);if(Ag.Ab!==this)throw new Error(Fe);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JP],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
AC6(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag
)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AMm:function(Ag,Kb
){var B;if(!Ag)throw new Error(J9);if(!!Ag.Ab)throw new Error(Oh);if(!!Kb&&(Kb.Ab
!==this))throw new Error(L9);var GC=null;var IB=this.B_;var LV=Ag.J7;if(!!Kb){GC=
Kb;IB=Kb.AJ;}if(!!GC&&(LV>GC.J7))LV=GC.J7;if(!!IB&&(LV<IB.J7))LV=IB.J7;if(LV!==Ag.
J7){Ag.Ab=null;Ag.Asc(LV);Ag.Ab=this;}if(!Kb){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.
B_;this.B_=Ag;}else{Ag.Ah=Kb;Ag.AJ=Kb.AJ;Kb.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B9===Kb)this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AO1()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JP],this);}},J:function(Ag,Qk){var B;if(!Ag)throw new Error(
J9);if(!!Ag.Ab)throw new Error(Oh);var GC=null;var LV=Ag.J7;if(((Qk<0)&&!!this.B_
)&&(this.B_.J7>=LV)){GC=this.B_;Qk=Qk+1;}while((((Qk<0)&&!!GC)&&!!GC.AJ)&&(GC.AJ.
J7>=LV)){GC=GC.AJ;Qk=Qk+1;}if((!GC&&!!this.B_)&&(this.B_.J7>LV))GC=this.B_;while((
!!GC&&!!GC.AJ)&&(GC.AJ.J7>LV))GC=GC.AJ;if(!GC){Ag.Ab=this;Ag.AJ=this.B_;if(!!this.
B_)this.B_.Ah=Ag;if(!this.B9)this.B9=Ag;this.B_=Ag;}else{Ag.Ab=this;Ag.AJ=GC.AJ;
Ag.Ah=GC;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B9=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AO1()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}},A88:function(){return this.
AV;},Aws:function(){return this.G_;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKC)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.He)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RM:null,JL:null,Fu:A.abi(10,null
,null),AtL:null,Ais:null,ABH:0,Ii:0,Mg:A.abi(10,0,null),AJ2:A.abi(10,A.wg,null),
XE:A.abi(10,0,null),Af4:A.abi(10,A.wf,null),AtQ:A.abi(10,0,null),Air:A.abi(10,A.
wf,null),XD:A.abi(10,A.wf,null),RF:A.abi(10,A.wf,null),Adg:A.abi(10,A.wf,null),EP:
0,AKo:0,AKn:0,Oy:A.abi(4,0,null),Km:A.abi(4,A.wg,null),Kj:0,AAm:0,At5:0,Az9:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Iq:function(){return this;
},Ks:function(C0,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)C0.Avq(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Ks.call(this,C0,aClip
,aOffset,Ck,aBlend);},Cs:function(Rw,Vd){var B;C.P.Cs.call(this,Rw,Vd);if(!this.
Ab&&(((Rw&0x1)===0x1)||((Vd&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rw&0x2)===0x2)||((Vd&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArS:
function(E){var B;var BAM=this.FG;C.P.ArS.call(this,E);if(((BAM!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},CZ:function(
E){var B;var BP=this.G_;C.P.CZ.call(this,E);if(((BP!==this.G_)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvZ=!!this.Ii;if(!!this.Ii)CN.Bs=this.Ii;}var GD=null;if(!!this.
JL){GD=this.JL.C2.DispatchEvent(CN);if(!GD)GD=this.G6(CN);if(!GD)GD=this.A4j(CN);
this.Ii=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ii=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvZ=!!this.Ii;if(!!this.Ii)CN.Bs=this.Ii;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ii=0;return GD;},Bj:function(Dc){var
B;if(this.ABH>0)throw new Error(Qe);if(!!this.FG&&!this.Ab){if(((B=this.FG.QQ)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QQ=A.wC(this.FG.QQ
,Dc);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Dc=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Dc);return;}Dc=A.
lb(A.abh(Dc,this.M.slice(0,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;
var O;for(O=0;O<this.Kj;O=O+1)if(!(((B=A.lb(this.Km.Get(O),Dc))[0]>=B[2])||(B[1]>=
B[3]))){this.Km.Set(O,A.wC(this.Km.Get(O),Dc));this.Oy.Set(O,A.aaH(this.Km.Get(O
)));return;}if(this.Kj<3){this.Km.Set(this.Kj,Dc);this.Oy.Set(this.Kj,A.aaH(Dc));
this.Kj=this.Kj+1;return;}var Ik;var RL;var AAl=0;var AAo=0;var Bdc=2147483647;this.
Km.Set(this.Kj,Dc);this.Oy.Set(this.Kj,A.aaH(Dc));for(Ik=0;Ik<=this.Kj;Ik=Ik+1)for(
RL=Ik+1;RL<=this.Kj;RL=RL+1){var ALv=A.aaH(A.wC(this.Km.Get(Ik),this.Km.Get(RL))
);var Bf4=((ALv<<8)/(this.Oy.Get(Ik)+this.Oy.Get(RL)))|0;if(Bf4<Bdc){Bdc=Bf4;AAl=
Ik;AAo=RL;}}this.Km.Set(AAl,A.wC(this.Km.Get(AAl),this.Km.Get(AAo)));this.Oy.Set(
AAl,A.aaH(this.Km.Get(AAl)));if(AAo!==this.Kj){this.Km.Set(AAo,this.Km.Get(this.
Kj));this.Oy.Set(AAo,this.Oy.Get(this.Kj));}},Bzo:function(){var LO=A._NewObject(
C.AqP,0);LO.AvZ=!!this.Ii;if(!!this.Ii)LO.Bs=this.Ii;return LO;},Ao9:function(){
var LO=A._NewObject(C.Aeh,0);LO.AvZ=!!this.Ii;if(!!this.Ii)LO.Bs=this.Ii;return LO;
},AtP:function(){var LO=A._NewObject(C.Au5,0);LO.AvZ=!!this.Ii;if(!!this.Ii)LO.Bs=
this.Ii;return LO;},Bzs:function(G){var O;var App=false;for(O=0;O<10;O=O+1)if(!!
this.Fu.Get(O)){var pos=this.RF.Get(O);var B1=this.Fu.Get(O).Ab;while(!!B1&&(B1!==
this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Fu.Get(O)!==this)){
var tmp=this.Fu.Get(O);this.EP=O;this.Fu.Set(O,null);tmp.G6(this.Ao9().InitializeUp(
O,this.Air.Get(O),this.Af4.Get(O),this.XE.Get(O),this.Mg.Get(O)+1,this.XD.Get(O)
,false,this.RF.Get(O),this.Adg.Get(O)));this.BroadcastEvent(this.AtP().InitializeUp(
O,this.Mg.Get(O)+1,false,tmp,this.RF.Get(O)),0x18);}else{this.XE.Set(O,(this.Ais.
Bs-this.AtQ.Get(O))|0);if(this.XE.Get(O)<10)this.XE.Set(O,10);this.EP=O;this.Fu.
Get(O).G6(this.Ao9().InitializeHold(O,pos,this.Af4.Get(O),this.XE.Get(O),this.Mg.
Get(O)+1,this.XD.Get(O),this.RF.Get(O),this.Adg.Get(O)));App=true;}}if(!App)this.
Ais.As(false);},GetFPS:function(){var ticksCount=0;var BdQ=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKo&&(ticksCount>this.AKo))BdQ=((this.AKn*1000)/((
ticksCount-this.AKo)|0))|0;this.AKn=0;this.AKo=ticksCount;return BdQ;},Update:function(
){var B;if(!this.AtL)this.AtL=A._NewObject(A.Graphics.Canvas,0);this.AtL.ArY([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtL.Update();return this.UpdateGE20(this.AtL);}
,UpdateGE20:function(C0){if(!this.BeginUpdate())return BD;var Agx=this.UpdateCanvas(
C0,Cf);this.EndUpdate();return Agx;},EndUpdate:function(){if(this.Kj>0){this.AKn=
this.AKn+1;this.Kj=0;}},UpdateCanvas:function(C0,aOffset){var B;var Agx=BD;var By7=[
].concat(aOffset,A.abf(C0.FrameSize,aOffset));var O;var Ik=this.Kj;this.ABH=this.
ABH+1;C0.C2=this;for(O=0;(O<Ik)&&(O<4);O=O+1)if(this.Oy.Get(O)>0){this.Ks(C0,A.abg(
this.Km.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agx=A.wC(Agx,A.lb(By7
,this.Km.Get(O)));}else Ik=Ik+1;C0.C2=null;this.ABH=this.ABH-1;if(!((Agx[0]>=Agx[
2])||(Agx[1]>=Agx[3])))return A.abg(Agx,aOffset);else return Agx;},GetUpdateRegion:
function(AJm){var O;var Ik=this.Kj;if(AJm<0)return BD;for(O=0;(O<Ik)&&(O<4);O=O+
1)if(!this.Oy.Get(O)){Ik=Ik+1;AJm=AJm+1;}else if(O===AJm)return this.Km.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kj&&!A.aaY(this.Km.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bg9=A.abi(3,A.wg,null);var Bg8=this.Kj;for(O=0;
O<Bg8;O++)Bg9.Set(O,this.Km.Get(O));for(O=0;O<Bg8;O++){var Bgo=A.abh(Bg9.Get(O),
this.M.slice(0,2));var Bgp=this.AuO(Bgo);if(!A.aaY(Bgo,Bgp))this.Bj(A.abg(Bgp,this.
M.slice(0,2)));}}var Ik;var RL;for(Ik=0;Ik<(this.Kj-1);Ik++)if(this.Oy.Get(Ik)>0
)for(RL=Ik+1;RL<this.Kj;RL++)if(this.Oy.Get(RL)>0){var ALv=A.aaH(A.wC(this.Km.Get(
Ik),this.Km.Get(RL)));if(((ALv-this.Oy.Get(Ik))-this.Oy.Get(RL))<0){this.Km.Set(
Ik,A.wC(this.Km.Get(Ik),this.Km.Get(RL)));this.Oy.Set(Ik,ALv);this.Oy.Set(RL,0);
}}for(O=this.Kj-1;O>=0;O--)if(!this.Oy.Get(O))this.Kj=this.Kj-1;return this.Kj;}
,DoesNeedUpdate:function(){if(this.Kj>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cf,aSize));if(this.Az9)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A1m){if(A1m===this.Az9
)return false;this.Az9=A1m;if(!A1m){if(!!this.JL)this.JL.C2.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JL)this.JL.C2.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Ql){this.Ii=Ql;},DriveKeyboardHitting:function(
KG,Ay$,Tm){var B;var A4k=!!this.RM;if(!!this.RM&&((!Tm||(this.AAm!==KG))||(this.
At5!==Ay$))){var LO=null;var X=(C.Cj.isPrototypeOf(B=this.RM)?B:null);var D5=(C.
BF.isPrototypeOf(B=this.RM)?B:null);if(!!this.AAm)LO=A._NewObject(C.KeyEvent,0).
Initialize(this.AAm,false);if(this.At5!==0x00)LO=A._NewObject(C.KeyEvent,0).Initialize2(
this.At5,false);if(!!D5)D5.G6(LO);else if(!!X)X.G6(LO);this.AAm=0;this.At5=0x00;
this.RM=null;}if(!!this.RM){var LO=null;var X=(C.Cj.isPrototypeOf(B=this.RM)?B:null
);var D5=(C.BF.isPrototypeOf(B=this.RM)?B:null);if(!!KG)LO=A._NewObject(C.KeyEvent
,0).Initialize(KG,true);if(this.At5!==0x00)LO=A._NewObject(C.KeyEvent,0).Initialize2(
Ay$,true);if(!!D5)D5.G6(LO);else if(!!X)X.G6(LO);}if(!this.RM&&Tm){if(!!KG)this.
RM=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KG,true));if(Ay$!==0x00
)this.RM=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ay$,true));if(
!(C.BF.isPrototypeOf(B=this.RM)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RM)?B:null)
)this.RM=null;this.AAm=KG;this.At5=Ay$;A4k=A4k||!!this.RM;}this.Ii=0;return A4k;
},DriveCursorMovement:function(Fg){return this.DriveMultiTouchMovement(this.EP,Fg
);},DriveMultiTouchMovement:function(BH,Fg){if((BH<0)||(BH>9)){this.Ii=0;return false;
}var Fw=A.abe(Fg,this.RF.Get(BH));this.RF.Set(BH,Fg);if(!this.Fu.Get(BH)||A.aaX(
Fw,Cf)){this.Ii=0;return false;}var pos=Fg;var B1=this.Fu.Get(BH).Ab;while(!!B1&&(
B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Fu.Get(BH)!==
this)){var tmp=this.Fu.Get(BH);this.EP=BH;this.Fu.Set(BH,null);tmp.G6(this.Ao9().
InitializeUp(BH,this.Air.Get(BH),this.Af4.Get(BH),this.XE.Get(BH),this.Mg.Get(BH
)+1,this.XD.Get(BH),false,this.RF.Get(BH),this.Adg.Get(BH)));this.BroadcastEvent(
this.AtP().InitializeUp(BH,this.Mg.Get(BH)+1,false,tmp,Fg),0x18);}else{this.Air.
Set(BH,pos);this.EP=BH;this.Fu.Get(BH).G6(this.Bzo().Initialize(BH,pos,this.Af4.
Get(BH),Fw,this.XE.Get(BH),this.Mg.Get(BH)+1,this.XD.Get(BH),Fg,this.Adg.Get(BH)
));}this.Ii=0;return true;},DriveCursorHitting:function(Tm,BH,Fg){return this.DriveMultiTouchHitting(
Tm,BH,Fg);},DriveMultiTouchHitting:function(Tm,BH,Fg){if((BH<0)||(BH>9)){this.Ii=
0;return false;}var ticksCount=this.Ii;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BCj=this.Ii;this.DriveMultiTouchMovement(BH,Fg);Fg=this.RF.Get(BH);
this.Ii=BCj;if(Tm)this.Adg.Set(BH,Fg);if(Tm&&!this.Fu.Get(BH)){var JK;var pos=Fg;
if(A.wa(this.AJ2.Get(BH),Fg)&&((ticksCount-this.AtQ.Get(BH))<=250))this.Mg.Set(BH
,this.Mg.Get(BH)+1);else this.Mg.Set(BH,0);this.AJ2.Set(BH,A.abh(MR,Fg));this.AtQ.
Set(BH,ticksCount);if(!!this.JL)JK=this.Yr(A.abh(MR,Fg),BH,this.Mg.Get(BH)+1,this.
JL.C2,null,0x0);else JK=this.Yr(A.abh(MR,Fg),BH,this.Mg.Get(BH)+1,null,null,0x0);
if(!!JK){this.BroadcastEvent(this.AtP().InitializeDown(BH,this.Mg.Get(BH)+1,false
,JK.Cj,Fg),0x18);this.Fu.Set(BH,JK.Cj);this.XD.Set(BH,JK.DH);}else{this.Fu.Set(BH
,null);this.XD.Set(BH,Cf);this.Ii=0;return false;}var B1=JK.Cj.Ab;while(!!B1&&(B1
!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}this.Af4.Set(BH,pos);this.Air.
Set(BH,pos);this.XE.Set(BH,0);this.Ais.As(true);this.EP=BH;this.Fu.Get(BH).G6(this.
Ao9().InitializeDown(BH,pos,this.Mg.Get(BH)+1,this.XD.Get(BH),false,Fg));this.Ii=
0;return true;}if(!Tm&&!!this.Fu.Get(BH)){var pos=Fg;var B1=this.Fu.Get(BH).Ab;while(
!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1)pos=this.Air.
Get(BH);this.EP=BH;var tmp=this.Fu.Get(BH);this.Fu.Set(BH,null);tmp.G6(this.Ao9(
).InitializeUp(BH,pos,this.Af4.Get(BH),this.XE.Get(BH),this.Mg.Get(BH)+1,this.XD.
Get(BH),false,Fg,this.Adg.Get(BH)));this.BroadcastEvent(this.AtP().InitializeUp(
BH,this.Mg.Get(BH)+1,false,tmp,Fg),0x18);this.Ii=0;return true;}this.Ii=0;return false;
},AUN:function(Aau,Bcy,Ac8,Ac7){if(Aau===this)Aau=null;if(!!!Aau&&!!this.JL)Aau=
this.JL.C2;if(!this.Fu.Get(this.EP))return;var JK;JK=this.Yr(A.abh(MR,this.RF.Get(
this.EP)),this.EP,1,Aau,Ac8,Ac7);if(!!JK&&(this.Fu.Get(this.EP)!==JK.Cj))this.AN0(
JK.Cj,JK.DH);if(!JK&&(this.Fu.Get(this.EP)!==Bcy))this.AN0(Bcy,Cf);},AN0:function(
Aau,Xt){if(!this.Fu.Get(this.EP)||(this.Fu.Get(this.EP)===Aau))return;var tmp=this.
Fu.Get(this.EP);this.Fu.Set(this.EP,null);tmp.G6(this.Ao9().InitializeUp(this.EP
,this.Air.Get(this.EP),this.Af4.Get(this.EP),this.XE.Get(this.EP),this.Mg.Get(this.
EP)+1,this.XD.Get(this.EP),true,this.RF.Get(this.EP),this.Adg.Get(this.EP)));this.
BroadcastEvent(this.AtP().InitializeUp(this.EP,this.Mg.Get(this.EP)+1,true,tmp,this.
RF.Get(this.EP)),0x18);var pos=this.RF.Get(this.EP);var B1=null;if(!!Aau)B1=Aau.
Ab;while(!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(Aau
!==this)){this.Fu.Set(this.EP,null);return;}this.BroadcastEvent(this.AtP().InitializeDown(
this.EP,this.Mg.Get(this.EP)+1,true,Aau,this.RF.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fu.Set(this.EP,Aau);this.XD.Set(
this.EP,Xt);this.Af4.Set(this.EP,pos);this.Air.Set(this.EP,pos);this.Mg.Set(this.
EP,0);this.XE.Set(this.EP,0);this.AtQ.Set(this.EP,ticksCount);this.Adg.Set(this.
EP,this.RF.Get(this.EP));this.Fu.Get(this.EP).G6(this.Ao9().InitializeDown(this.
EP,pos,this.Mg.Get(this.EP)+1,this.XD.Get(this.EP),true,this.Adg.Get(this.EP)));
},AO1:function(){if(!!this.JL)return this.JL.C2;return null;},ACY:function(KH){var
B;if(!KH)throw new Error(Tf);if(!((KH.U&0x80)===0x80))throw new Error(U1);if(this.
JL.C2===KH)this.JL=this.JL.Ah;else{var Az8=this.JL;while(Az8.Ah.C2!==KH)Az8=Az8.
Ah;Az8.Ah=Az8.Ah.Ah;}KH.Cs(0x0,0xD0);if(this.Az9){if(!!this.JL)this.JL.C2.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AM7:function(KH){var B;var Ar=A._NewObject(C.A8g
,0);if(!KH)throw new Error(Aab);if(KH===null)throw new Error(Xf);if(((KH.U&0x80)===
0x80))throw new Error(Ix);if(!!this.JL)this.JL.C2.Cs(0x0,0x50);else this.Cs(0x0,
0x50);Ar.Ah=this.JL;Ar.C2=KH;this.JL=Ar;if(this.Az9)KH.Cs(0xD0,0x0);else KH.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ais={
I:this},0);(this.Fu=[]).__proto__=C.Root.Fu;(this.Mg=[]).__proto__=C.Root.Mg;(this.
AJ2=[]).__proto__=C.Root.AJ2;(this.XE=[]).__proto__=C.Root.XE;(this.Af4=[]).__proto__=
C.Root.Af4;(this.AtQ=[]).__proto__=C.Root.AtQ;(this.Air=[]).__proto__=C.Root.Air;(
this.XD=[]).__proto__=C.Root.XD;(this.RF=[]).__proto__=C.Root.RF;(this.Adg=[]).__proto__=
C.Root.Adg;(this.Oy=[]).__proto__=C.Root.Oy;(this.Km=[]).__proto__=C.Root.Km;this.
__proto__=C.Root;this.U=0x10007F;this.Ais.PZ(10);this.Ais.MK=[this,this.Bzs];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ais._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ais._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RM)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JL)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fu,D);if((B=this.
AtL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ais)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvZ:false,Init:function(aArg){this.Bs=
this.Avy();},Avy:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CP:0,Dy:0,Down:false
,Initialize2:function(KG,Tm){this.CP=0;this.Dy=KG;this.Down=Tm;if((KG>=0x30)&&(KG<=
0x39))this.CP=(10+KG)-48;if((KG>=0x41)&&(KG<=0x5A))this.CP=(105+KG)-65;if((KG>=0x61
)&&(KG<=0x7A))this.CP=(105+KG)-97;if(KG===0x20)this.CP=131;if(!this.CP)switch(KG
){case 0x2B:this.CP=132;break;case 0x2D:this.CP=133;break;case 0x2A:this.CP=134;
break;case 0x2F:this.CP=135;break;case 0x3D:this.CP=136;break;case 0x2E:this.CP=
137;break;case 0x2C:this.CP=138;break;case 0x3A:this.CP=139;break;case 0x3B:this.
CP=140;break;default:;}return this;},Initialize:function(KG,Tm){this.CP=KG;this.
Down=Tm;this.Dy=0x00;var A12=KG-10;var AtK=KG-105;if((A12>=0)&&(A12<=9))this.Dy=(
48+A12)&0xFFFF;if((AtK>=0)&&(AtK<=25))this.Dy=(65+AtK)&0xFFFF;if(KG===131)this.Dy=
0x20;if(this.Dy===0x00)switch(KG){case 132:this.Dy=0x2B;break;case 133:this.Dy=0x2D;
break;case 134:this.Dy=0x2A;break;case 135:this.Dy=0x2F;break;case 136:this.Dy=0x3D;
break;case 137:this.Dy=0x2E;break;case 138:this.Dy=0x2C;break;case 139:this.Dy=0x3A;
break;case 140:this.Dy=0x3B;break;default:;}return this;},Bkf:function(Bcn){switch(
Bcn){case 141:return((this.Dy>=0x41)&&(this.Dy<=0x5A))||((this.Dy>=0x61)&&(this.
Dy<=0x7A));case 142:return(((this.Dy>=0x41)&&(this.Dy<=0x5A))||((this.Dy>=0x61)&&(
this.Dy<=0x7A)))||((this.Dy>=0x30)&&(this.Dy<=0x39));case 143:return(this.Dy>=0x30
)&&(this.Dy<=0x39);case 144:return(((this.Dy>=0x41)&&(this.Dy<=0x46))||((this.Dy>=
0x61)&&(this.Dy<=0x66)))||((this.Dy>=0x30)&&(this.Dy<=0x39));case 145:return this.
Dy!==0x00;case 146:return(this.Dy===0x00)&&!!this.CP;case 147:return(((this.CP===
6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:return(this.Dy!==0x00
)||!!this.CP;default:;}return Bcn===this.CP;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARM={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARM;},_className:
"Core::LanguageEvent"};C.Au5={AxU:null,L0:A.wf,Oc:0,IO:0,Down:false,NQ:false,InitializeUp:
function(BH,Om,AoH,A1E,Aat){this.Down=false;this.IO=BH;this.Oc=Om;this.L0=Aat;this.
AxU=A1E;this.NQ=AoH;return this;},InitializeDown:function(BH,Om,AoH,A1E,Aat){this.
Down=true;this.IO=BH;this.Oc=Om;this.L0=Aat;this.AxU=A1E;this.NQ=AoH;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au5;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxU)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aeh={Ag4:A.wf,L0:A.wf,Oc:0,Jy:
0,NZ:A.wf,H5:A.wf,IO:0,Down:false,NQ:false,InitializeHold:function(BH,Alp,Azc,Azd
,Om,Xt,Aat,Azb){this.Down=true;this.IO=BH;this.H5=A.abf(Alp,Xt);this.NZ=A.abf(Azc
,Xt);this.Jy=Azd;this.Oc=Om;this.L0=Aat;this.Ag4=Azb;return this;},InitializeUp:
function(BH,Alp,Azc,Azd,Om,Xt,AoH,Aat,Azb){this.Down=false;this.IO=BH;this.H5=A.
abf(Alp,Xt);this.NZ=A.abf(Azc,Xt);this.Jy=Azd;this.Oc=Om;this.NQ=AoH;this.L0=Aat;
this.Ag4=Azb;return this;},InitializeDown:function(BH,Alp,Om,Xt,AoH,Aat){this.Down=
true;this.IO=BH;this.H5=A.abf(Alp,Xt);this.NZ=A.abf(Alp,Xt);this.Jy=0;this.Oc=Om;
this.NQ=AoH;this.L0=Aat;this.Ag4=Aat;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aeh;},_className:"Core::CursorEvent"};C.AqP={
Ag4:A.wf,L0:A.wf,Oc:0,Jy:0,DH:A.wf,NZ:A.wf,H5:A.wf,IO:0,Initialize:function(BH,Alp
,Azc,aOffset,Azd,Byr,Xt,Aat,Azb){this.IO=BH;this.H5=A.abf(Alp,Xt);this.NZ=A.abf(
Azc,Xt);this.DH=aOffset;this.Jy=Azd;this.Oc=Byr;this.L0=Aat;this.Ag4=Azb;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqP;},_className:
"Core::DragEvent"};C.Y={BY:null,NI:null,Em:null,Br:A.wf,AVi:0,Space:0,Ag2:0,Ks:function(
C0,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap8=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap8=A.wC(Ap8,X.GetClipping());
Az=A.wC(Az,Ap8);}return Az;},Cs:function(Rw,Vd){var B;var Tx=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((Vd&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Eu.Cs.call(this,Rw,Vd);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rw&0x80000)===
0x80000))&&!((Tx&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al4=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKK=[
E[2]-E[0],E[3]-E[1]];var Ap4=!A.aaX(Al4,AKK);var Fw=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fw,Cf)&&!Ap4){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ano(Fw,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((Ap4&&(Al4[0]>0))&&(Al4[1]>0)){var Be=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
NK!==this))X.Ev=null;if(!X.Ev&&((X.PT!==0x14)||!!this.Ag2))X.At3(Be,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&Ap4){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JP],this);}}},Bgi:function(){var B;if((!this.Ag2||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A2k=((this.U&0x1000)===0x1000);for(;!!X&&!A2k;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A2k=true;if(((X.U&0x200)===
0x200))break;}if(A2k){this.U=this.U&~0x4000;this.Ab.Bgt();}},ApP:function(G){var
B;this.BY.Q=null;this.BY.Qz=null;this.BY=null;(B=this.NI)?B[1].call(B[0],this):null;
},Gc:function(E){var B;var Fw=A.abe(E,this.Br);if(A.aaX(Fw,Cf))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ano(Fw,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.Em,this);},A_5:function(E){var B;if(E<0)E=0;if(E===this.AVi)return;this.AVi=
E;if(!!this.Ab&&!!this.Ag2){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JP],this);}},Bod:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag2){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JP],this);}},JZ:function(E){var B;if(E===this.Ag2)return;
this.Ag2=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JP],this);}},VH:function(Ac1,E9){var AtK=this.Dd(0x1);var RC=this.M;var
Vr=A.abe(AtK.slice(0,2),RC.slice(0,2));var Mi=A.abe(AtK.slice(2,4),RC.slice(2,4)
);var Bq=Cf;if((Vr[0]>0)&&(Mi[0]>Vr[0]))Bq=[Vr[0],Bq[1]];else if((Vr[0]>0)&&(Mi[
0]>0))Bq=[Mi[0],Bq[1]];if((Mi[0]<0)&&(Vr[0]<Mi[0]))Bq=[Mi[0],Bq[1]];else if((Mi[
0]<0)&&(Vr[0]<0))Bq=[Vr[0],Bq[1]];if((Vr[1]>0)&&(Mi[1]>Vr[1]))Bq=[Bq[0],Vr[1]];else
if((Vr[1]>0)&&(Mi[1]>0))Bq=[Bq[0],Mi[1]];if((Mi[1]<0)&&(Vr[1]<Mi[1]))Bq=[Bq[0],Mi[
1]];else if((Mi[1]<0)&&(Vr[1]<0))Bq=[Bq[0],Vr[1]];if(A.aaX(Bq,Cf)){(E9)?E9[1].call(
E9[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.
Qz=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(A.abe(this.Br,Bq));(E9)?E9[
1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this,this.
Anz,this.Gc];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.Qz=[this,this.
ApP];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},HK:function(Ag,Ac5,Ac1,E9
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
U2);this.Bgi();var Az=Ag.GetExtent();var Be=this.M;var LT=A.lb(Az,Be);if((!Ac5&&
!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac5&&A.aaY(LT,Az))){(E9)?E9[1].call(E9[0],this
):null;return;}var Bq=Cf;if(Az[2]>Be[2])Bq=[Az[2]-Be[2],Bq[1]];if(Az[3]>Be[3])Bq=[
Bq[0],Az[3]-Be[3]];if(Bq[0]>(Az[0]-Be[0]))Bq=[Az[0]-Be[0],Bq[1]];if(Bq[1]>(Az[1]-
Be[1]))Bq=[Bq[0],Az[1]-Be[1]];if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.
BY.Qz=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(A.abe(this.Br,Bq));(E9
)?E9[1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this
,this.Anz,this.Gc];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.Qz=[this
,this.ApP];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},BjI:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TY:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dd:function(aFilter){var B;var X=this.Ah;var AE=BD;var I6=0x10000;this.Bgi();if(((
aFilter&0x10000)===0x10000))I6=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anz:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HD:null,BY:null,Cj:null,W2:null,NI:null,Em:null,Ho:null,Tu:-1,Tt:0,Ju:-1,Hu:0,AiK:
8,Ot:0,UG:0,AcO:A.wf,G8:-1,Br:0,Gu:-1,OY:0,GO:24,A0:0,Ln:null,NW:false,At6:false
,AVp:function(Iy,Ol,Xs,Tn,To,Ah$,Pf,Rv,LE,LC,LD){throw new Error(Aac);},AqN:function(
Iy,Ah$,Pf,Rv,LE,LC,LD){throw new Error(U3);},AkN:function(Iy,Ol,Xs,Tn,To,Pf,Rv,LE
,LC,LD){throw new Error(Aad);},DispatchEvent:function(CN){var B;var result=null;
if(((this.Gu>=0)&&(this.Gu<this.A0))&&!this.AV){this.G8=this.Gu;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Ln,0))?B:null);if(!!this.B_)this.B_.Ah=this.Cj;else this.B9=
this.Cj;this.Cj.AJ=this.B_;this.B_=this.Cj;this.Cj.Ab=this;this.AcO=[(B=this.M)[
2]-B[0],this.GO];(B=this.Ho)?B[1].call(B[0],this):null;var B1=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(CN);else result=this.Cj.G6(CN
);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B9=null;this.B_=this.Cj.AJ;this.Cj.
AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Ln){A.pe(this.Em,this);return;
}this.At6=true;var AA3=0;if(!this.NW)AA3=this.OY;var FU=this.Amb(-AA3-this.Br,1);
var G2=this.Amb(((((B=this.M)[3]-B[1])-AA3)-this.Br)-1,2);var CB=G2-FU;if(CB<1)CB=
1;var Aim=(CB/2)|0;var Ain=(CB/3)|0;if(!Aim)Aim=1;if(!Ain)Ain=1;if(FU<this.Hu){FU=
FU-Aim;G2=G2+Ain;}else if(G2>this.Ju){FU=FU-Ain;G2=G2+Aim;}else{FU=this.Hu;G2=this.
Ju;}if(!this.NW){if(FU>=this.A0){FU=0;G2=-1;}else if(G2<0){FU=0;G2=-1;}if(G2>=this.
A0)G2=this.A0-1;if(FU<0)FU=0;}else if(this.A0<=0){FU=0;G2=-1;}var Ai0=this.Hu;var
Ai1=this.Ju;var ApC=0;var ApD=-1;if(FU>Ai0)Ai0=FU;if(G2<Ai1)Ai1=G2;if(Ai0<=Ai1){
while((this.Ju<G2)&&(this.Hu<Ai0)){this.AdI();this.AzD();}while((this.Hu>FU)&&(this.
Ju>Ai1)){this.ABe();this.AzC();}}else{this.Ju=(this.Ju-this.Hu)+FU;this.Hu=FU;ApC=
this.Hu;ApD=this.Ju;}while(this.Hu<FU)this.AdI();while(this.Ju>G2)this.ABe();while(
this.Hu>FU)this.AzC();while(this.Ju<G2)this.AzD();var Aa=this.B9;var inx=this.Hu;
var pos=[0,(AA3+this.Br)+this.Jr(inx,0)];var BL=(B=this.M)[3]-B[1];var AlM=null;
var Bhh=(B=this.M)[2]-B[0];while(!!Aa){var IF=inx;if(this.NW){if(IF<0)IF=this.A0-(-
IF%this.A0);if(IF>0)IF=IF%this.A0;}var AdJ=((IF>=this.Tt)&&(IF<=this.Tu))||((inx>=
ApC)&&(inx<=ApD));var Api=Aa.GetExtent();var Bq=A.abe(pos,Api.slice(0,2));if(AdJ
)this.UG=this.GO;else this.UG=Api[3]-Api[1];var A22=pos[1];var A23=pos[1]+this.UG;
if(!A.aaX(Bq,Cf))Aa.Ano(Bq,true);if((AdJ&&(A22<BL))&&(A23>0)){this.Cj=Aa;this.G8=
IF;this.AcO=[Bhh,this.UG];(B=this.Ho)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UG];}inx=this.Hu;Aa=this.B9;pos=[0,(AA3+this.Br)+this.Jr(
inx,0)];while(!!Aa){var IF=inx;if(this.NW){if(IF<0)IF=this.A0-(-IF%this.A0);if(IF>
0)IF=IF%this.A0;}var AdJ=((IF>=this.Tt)&&(IF<=this.Tu))||((inx>=ApC)&&(inx<=ApD)
);if(AdJ)this.UG=this.GO;else this.UG=(B=Aa.GetExtent())[3]-B[1];var A22=pos[1];
var A23=pos[1]+this.UG;if(AdJ&&!((A22<BL)&&(A23>0))){this.Cj=Aa;this.G8=IF;this.
AcO=[Bhh,this.UG];(B=this.Ho)?B[1].call(B[0],this):null;}if(((IF===this.Gu)&&this.
NW)&&!!AlM){var RC=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),RC))>A.aaH(A.lb(AlM.GetExtent(),RC)))AlM=Aa;}else if(IF===this.Gu)AlM=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UG];}this.Tt=0;this.Tu=-1;this.Cj=null;this.G8=-
1;this.Bb(AlM);this.At6=false;A.pe(this.Em,this);},QL:function(Ag,GA,aFilter){return null;
},AqU:function(Ag,aFilter){return null;},TY:function(Ag,aFilter){return null;},AC6:
function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NX:function(
KH,FQ,LE,LC,LD){throw new Error(Xg);},AhF:function(Ag,Kb){throw new Error(Aae);}
,ZL:function(Ag){throw new Error(Aaf);},J5:function(Ag,Qk){throw new Error(U4);}
,HR:function(Ag){throw new Error(Xh);},AMm:function(Ag,Kb){throw new Error(Pa);}
,J:function(Ag,Qk){throw new Error(Aag);},Jr:function(Hb,A1d){return Hb*this.GO;
},Amb:function(Fg,A1d){return(Fg/this.GO)|0;},ABe:function(){var Aa=this.B_;if(!
Aa)return null;if(Aa===this.AV)this.Bb(null);this.Ju=this.Ju-1;if(!!Aa.AJ)Aa.AJ.
Ah=null;else this.B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.
Ot<this.AiK){if(!!this.HD)this.HD.AJ=Aa;Aa.Ah=this.HD;this.HD=Aa;this.Ot++;}return Aa;
},AzD:function(){var B;var Aa=this.HD;var Ads=this.Ln;var AdM=++this.Ju;if(this.
NW){if(AdM<0)AdM=this.A0-(-AdM%this.A0);if(AdM>0)AdM=AdM%this.A0;}while(!!Aa&&(((
B=Aa)?B.__proto__:null)!==Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!
Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HD===Aa)this.HD=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;
}else{Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.
Ot)this.AiK++;}this.UG=this.GO;this.G8=AdM;this.AcO=[(B=this.M)[2]-B[0],this.UG];
this.Cj=Aa;(B=this.Ho)?B[1].call(B[0],this):null;this.Cj=null;this.G8=-1;if(!!this.
B_)this.B_.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdM===
this.Gu)this.Bb(Aa);return Aa;},AdI:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Hu=this.Hu+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.
B_=null;this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiK){if(!
!this.HD)this.HD.AJ=Aa;Aa.Ah=this.HD;this.HD=Aa;this.Ot++;}return Aa;},AzC:function(
){var B;var Aa=this.HD;var Ads=this.Ln;var M_=--this.Hu;if(this.NW){if(M_<0)M_=this.
A0-(-M_%this.A0);if(M_>0)M_=M_%this.A0;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==
Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.
HD===Aa)this.HD=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;}else{Aa=(C.Cj.isPrototypeOf(
B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiK++;}this.UG=this.
GO;this.G8=M_;this.AcO=[(B=this.M)[2]-B[0],this.UG];this.Cj=Aa;(B=this.Ho)?B[1].
call(B[0],this):null;this.Cj=null;this.G8=-1;if(!!this.B9)this.B9.AJ=Aa;Aa.Ab=this;
Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(M_===this.Gu)this.Bb(Aa);return Aa;
},ApP:function(G){var B;this.BY.Q=null;this.BY.Qz=null;this.BY=null;(B=this.NI)?
B[1].call(B[0],this):null;},BBG:function(G){this.Gc(this.W2.DH[1]);},BBH:function(
G){var B;if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.Qz=null;this.BY=
null;}if(!this.NW){var AE=this.Aq1(0,this.A0-1);var Agm=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OY);if(AE[0]>Agm[0])AE=[].concat(Agm[0],AE.slice(1,4));if(AE[1]>Agm[
1])AE=A.abP(AE,Agm[1]);var Fw=AE[1]-this.M[1];var A3h=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A3h>0)A3h=0;this.W2.DH=[0,this.Br];this.W2.Gq=[0,(this.Br+A3h)-Fw];this.
W2.F$=[0,this.Br-Fw];}else{var Fw=32000-(32000%this.GO);this.W2.DH=[0,this.Br];this.
W2.Gq=[0,this.Br-Fw];this.W2.F$=[0,this.Br+Fw];}},ATq:function(E){var B;if(this.
NW===E)return;this.NW=E;while(!!this.AdI());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Axb:function(E){if(E===this.W2)return;if(!!E&&!!E.Auh){A.ab5(
"%s%*%s",Oi,E,Rp);throw new Error(Xi);}if(!!this.W2){this.W2.AKX=null;this.W2.Auh=
null;}this.W2=E;if(!!E){E.AKX=[this,this.BBH];E.Auh=[this,this.BBG];}},Gc:function(
E){var B;if(this.NW&&(this.A0>0)){var HG=this.Jr(this.A0,3);if(E<0)E=HG-(-E%HG);
if(E>0)E=E%HG;if(E>0)E=E-HG;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GU:function(E){if(E<0)E=-1;if(E===this.Gu)return;
this.Gu=E;this.Am();},A_S:function(E){var B;if(E<0)E=0;if(E===this.OY)return;this.
OY=E;if(!this.NW){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae_:function(
E){var B;if(E<1)E=1;if(E===this.GO)return;this.GO=E;while(!!this.AdI());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JD:function(E){var B;if(E<0)E=0;
if(E===this.A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){if(
E>this.A0){AE=[].concat(AE.slice(0,3),(this.OY+this.Br)+this.Jr(E,3));AE=A.abP(AE
,(this.OY+this.Br)+this.Jr(this.A0,3));}else{AE=A.abP(AE,(this.OY+this.Br)+this.
Jr(E,3));AE=[].concat(AE.slice(0,3),(this.OY+this.Br)+this.Jr(this.A0,3));}}else
while(!!this.AdI());this.A0=E;this.Am();this.Bj(AE);},N8:function(E){var B;if(E===
this.Ln)return;this.Ln=E;while(!!this.AdI());this.HD=null;this.Ot=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjV:function(Hb){if(this.At6)return null;
if((Hb<0)||(Hb>=this.A0))return null;if(!this.NW){if((Hb<this.Hu)||(Hb>this.Ju))
return null;var X=this.B9;while(Hb>this.Hu){X=X.Ah;Hb=Hb-1;}return X;}else{var M_=
this.Hu;if(M_<0)M_=this.A0-(-M_%this.A0);if(M_>0)M_=M_%this.A0;var X=this.B9;while(
!!X){if((M_%this.A0)===Hb)return X;X=X.Ah;M_=M_+1;}return null;}},ABY:function(Ac1
,E9){var B;if(this.NW){(E9)?E9[1].call(E9[0],this):null;return;}var AKp=this.Br;
var BdR=((((B=this.M)[3]-B[1])-this.Br)-this.OY)-this.Jr(this.A0,3);var Bq=0;if(
AKp>0)Bq=-AKp;else if(BdR>0)Bq=BdR;if((Bq>0)&&(Bq>-AKp))Bq=-AKp;if(!Bq){(E9)?E9[
1].call(E9[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.Qz=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(this.Br+Bq);(E9)?
E9[1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this
,this.Anz,this.Gc];this.BY.Cx=this.Br;this.BY.B3=this.Br+Bq;this.BY.Qz=[this,this.
ApP];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},HK:function(Hb,Ac5,Ac1,E9
){var B;if((Hb<0)||(Hb>=this.A0))return;var Az=this.Aq1(Hb,Hb);var Be=this.M;var
LT=A.lb(Az,Be);if((!Ac5&&!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac5&&A.aaY(LT,Az))
){(E9)?E9[1].call(E9[0],this):null;return;}var Bq=0;if(Az[3]>Be[3])Bq=Az[3]-Be[3
];if(Bq>(Az[1]-Be[1]))Bq=Az[1]-Be[1];if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.Qz=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(this.Br-Bq);(E9)?
E9[1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this
,this.Anz,this.Gc];this.BY.Cx=this.Br;this.BY.B3=this.Br-Bq;this.BY.Qz=[this,this.
ApP];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},BjN:function(){return BD;
},AO3:function(){if((this.OY<=0)||this.NW)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OY);return AE;},A7g:function(Fg
){if(((this.A0<=0)||(Fg[0]<this.M[0]))||(Fg[0]>=this.M[2]))return-1;Fg=A.abe(Fg,
this.M.slice(0,2));if(!this.NW){var Aa=(Fg[1]-this.Br)-this.OY;if(Aa>0)Aa=this.Amb(
Aa,0);if((Aa<0)||(Aa>=this.A0))return-1;return Aa;}var Aa=Fg[1]-this.Br;if(Aa>0)
Aa=this.Amb(Aa,0);if(Aa<0)Aa=this.Amb(Aa,0)-1;if(Aa<0)Aa=this.A0-(-Aa%this.A0);if(
Aa>0)Aa=Aa%this.A0;return Aa;},Aq1:function(J$,Mb){if(J$<0)J$=0;if(Mb>=this.A0)Mb=
this.A0-1;if(J$>Mb)return BD;var AE=this.M;var Bq=this.Br;if(this.NW){var HG=this.
Jr(this.A0,3);if(Bq<0)Bq=HG-(-Bq%HG);if(Bq>0)Bq=Bq%HG;if(Bq>0)Bq=Bq-HG;}else Bq=
Bq+this.OY;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jr(Mb+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jr(J$,0));return AE;},AbN:function(J$,Mb){var B;if(J$<0)J$=0;if(J$>Mb
)return;if(this.Tt>this.Tu){this.Tt=J$;this.Tu=Mb;}else{if(J$<this.Tt)this.Tt=J$;
if(Mb>this.Tu)this.Tu=Mb;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){
AE=A.abP(AE,(this.OY+this.Br)+this.Jr(J$,0));AE=[].concat(AE.slice(0,3),(this.OY+
this.Br)+this.Jr(Mb+1,0));}else if((this.Jr(this.A0-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HG=this.Jr(this.A0,3);if(Bq<0)Bq=HG-(-Bq%HG);if(
Bq>0)Bq=Bq%HG;if(Bq>0)Bq=Bq-HG;AE=A.abP(AE,Bq+this.Jr(J$,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jr(Mb+1,0));}this.Am();this.Bj(AE);},Anz:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(Xj);
this.Ln=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HD
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W2)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ho)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.DB={HD:null
,BY:null,Cj:null,NI:null,Ho:null,Tu:-1,Tt:0,Ju:-1,Hu:0,AiK:8,Ot:0,SU:0,AcO:A.wf,
G8:-1,Br:0,Gu:-1,Wm:24,A0:0,Ln:null,At6:false,AVp:function(Iy,Ol,Xs,Tn,To,Ah$,Pf
,Rv,LE,LC,LD){throw new Error(Tg);},AqN:function(Iy,Ah$,Pf,Rv,LE,LC,LD){throw new
Error(Xk);},AkN:function(Iy,Ol,Xs,Tn,To,Pf,Rv,LE,LC,LD){throw new Error(Aah);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gu>=0)&&(this.Gu<this.A0))&&!this.AV
){this.G8=this.Gu;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Ln,0))?B:null);
if(!!this.B_)this.B_.Ah=this.Cj;else this.B9=this.Cj;this.Cj.AJ=this.B_;this.B_=
this.Cj;this.Cj.Ab=this;this.AcO=[this.SU,(B=this.M)[3]-B[1]];(B=this.Ho)?B[1].call(
B[0],this):null;var B1=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(
CN);else result=this.Cj.G6(CN);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B9=null;
this.B_=this.Cj.AJ;this.Cj.AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Ln
)return;this.At6=true;var FU=this.Amb(0-this.Br,1);var G2=this.Amb((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=G2-FU;if(CB<1)CB=1;var Aim=(CB/2)|0;var Ain=(CB/3)|
0;if(!Aim)Aim=1;if(!Ain)Ain=1;if(FU<this.Hu){FU=FU-Aim;G2=G2+Ain;}else if(G2>this.
Ju){FU=FU-Ain;G2=G2+Aim;}else{FU=this.Hu;G2=this.Ju;}if(FU>=this.A0){FU=0;G2=-1;
}else if(G2<0){FU=0;G2=-1;}if(G2>=this.A0)G2=this.A0-1;if(FU<0)FU=0;var Ai0=this.
Hu;var Ai1=this.Ju;var ApC=0;var ApD=-1;if(FU>Ai0)Ai0=FU;if(G2<Ai1)Ai1=G2;if(Ai0<=
Ai1){while((this.Ju<G2)&&(this.Hu<Ai0)){this.AdI();this.AzD();}while((this.Hu>FU
)&&(this.Ju>Ai1)){this.ABe();this.AzC();}}else{this.Ju=(this.Ju-this.Hu)+FU;this.
Hu=FU;ApC=this.Hu;ApD=this.Ju;}while(this.Hu<FU)this.AdI();while(this.Ju>G2)this.
ABe();while(this.Hu>FU)this.AzC();while(this.Ju<G2)this.AzD();var Aa=this.B9;var
inx=this.Hu;var pos=[this.Br+this.Jr(inx,0),0];var BZ=(B=this.M)[2]-B[0];var AlM=
null;var Bg6=(B=this.M)[3]-B[1];while(!!Aa){var IF=inx;var AdJ=((IF>=this.Tt)&&(
IF<=this.Tu))||((inx>=ApC)&&(inx<=ApD));var Api=Aa.GetExtent();var Bq=A.abe(pos,
Api.slice(0,2));if(AdJ)this.SU=this.Wm;else this.SU=Api[2]-Api[0];var A20=pos[0];
var A21=pos[0]+this.SU;if(!A.aaX(Bq,Cf))Aa.Ano(Bq,true);if((AdJ&&(A20<BZ))&&(A21>
0)){this.Cj=Aa;this.G8=IF;this.AcO=[this.SU,Bg6];(B=this.Ho)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SU,pos[1]];}inx=this.Hu;Aa=this.B9;pos=[
this.Br+this.Jr(inx,0),0];while(!!Aa){var IF=inx;var AdJ=((IF>=this.Tt)&&(IF<=this.
Tu))||((inx>=ApC)&&(inx<=ApD));if(AdJ)this.SU=this.Wm;else this.SU=(B=Aa.GetExtent(
))[2]-B[0];var A20=pos[0];var A21=pos[0]+this.SU;if(AdJ&&!((A20<BZ)&&(A21>0))){this.
Cj=Aa;this.G8=IF;this.AcO=[this.SU,Bg6];(B=this.Ho)?B[1].call(B[0],this):null;}if(
IF===this.Gu)AlM=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SU,pos[1]];}this.Tt=0;this.
Tu=-1;this.Cj=null;this.G8=-1;this.Bb(AlM);this.At6=false;},QL:function(Ag,GA,aFilter
){return null;},AqU:function(Ag,aFilter){return null;},TY:function(Ag,aFilter){return null;
},AC6:function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NX:function(
KH,FQ,LE,LC,LD){throw new Error(Xl);},AhF:function(Ag,Kb){throw new Error(Xm);},
ZL:function(Ag){throw new Error(Th);},J5:function(Ag,Qk){throw new Error(Ti);},HR:
function(Ag){throw new Error(Tj);},AMm:function(Ag,Kb){throw new Error(Aai);},J:
function(Ag,Qk){throw new Error(Tk);},Jr:function(Hb,A1d){return Hb*this.Wm;},Amb:
function(Fg,A1d){return(Fg/this.Wm)|0;},ABe:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Ju=this.Ju-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiK){if(!
!this.HD)this.HD.AJ=Aa;Aa.Ah=this.HD;this.HD=Aa;this.Ot++;}return Aa;},AzD:function(
){var B;var Aa=this.HD;var Ads=this.Ln;var AdM=++this.Ju;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HD===Aa)this.HD=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.
AiK++;}this.SU=this.Wm;this.G8=AdM;this.AcO=[this.SU,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Ho)?B[1].call(B[0],this):null;this.Cj=null;this.G8=-1;if(!!this.B_)this.
B_.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdM===this.
Gu)this.Bb(Aa);return Aa;},AdI:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hu=this.Hu+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiK){if(!!this.HD
)this.HD.AJ=Aa;Aa.Ah=this.HD;this.HD=Aa;this.Ot++;}return Aa;},AzC:function(){var
B;var Aa=this.HD;var Ads=this.Ln;var M_=--this.Hu;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HD===Aa)this.HD=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiK++;
}this.SU=this.Wm;this.G8=M_;this.AcO=[this.SU,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Ho)?B[1].call(B[0],this):null;this.Cj=null;this.G8=-1;if(!!this.B9)this.B9.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(M_===this.Gu
)this.Bb(Aa);return Aa;},ApP:function(G){var B;this.BY.Q=null;this.BY.Qz=null;this.
BY=null;(B=this.NI)?B[1].call(B[0],this):null;},Gc:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GU:function(
E){if(E<0)E=-1;if(E===this.Gu)return;this.Gu=E;this.Am();},AFC:function(E){var B;
if(E<1)E=1;if(E===this.Wm)return;this.Wm=E;while(!!this.AdI());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JD:function(E){var B;if(E<0)E=0;if(E===this.
A0)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.A0){AE=[].concat(this.
Br+this.Jr(this.A0,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jr(E,3));}else{AE=
A.abN(AE,this.Br+this.Jr(this.A0,3));AE=[].concat(this.Br+this.Jr(E,3),AE.slice(
1,4));}this.A0=E;this.Am();this.Bj(AE);},N8:function(E){var B;if(E===this.Ln)return;
this.Ln=E;while(!!this.AdI());this.HD=null;this.Ot=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpR:function(Bys,Byt){if(!this.BY)return;if(Bys)this.Gc(
this.BY.B3);var A4X=this.NI;this.BY.As(false);this.BY.Q=null;this.BY.Qz=null;this.
NI=null;this.BY=null;if(Byt)(A4X)?A4X[1].call(A4X[0],this):null;},Bkk:function(){
return!!this.BY;},HK:function(Hb,Ac5,Ac1,E9){var B;if((Hb<0)||(Hb>=this.A0))return;
var Az=this.Aq1(Hb,Hb);var Be=this.M;var LT=A.lb(Az,Be);if((!Ac5&&!((LT[0]>=LT[2
])||(LT[1]>=LT[3])))||(Ac5&&A.aaY(LT,Az))){(E9)?E9[1].call(E9[0],this):null;return;
}var Bq=0;if(Az[2]>Be[2])Bq=Az[2]-Be[2];if(Bq>(Az[0]-Be[0]))Bq=Az[0]-Be[0];if(!!
this.BY){this.BY.As(false);this.BY.Q=null;this.BY.Qz=null;this.NI=null;}this.BY=
Ac1;if(!this.BY){this.Gc(this.Br-Bq);(E9)?E9[1].call(E9[0],this):null;}else{this.
BY.As(false);this.BY.HQ(1);this.BY.Q=[this,this.Anz,this.Gc];this.BY.Cx=this.Br;
this.BY.B3=this.Br-Bq;this.BY.Qz=[this,this.ApP];this.BY.Afb(false);this.BY.As(true
);this.NI=E9;}},Aq1:function(J$,Mb){if(J$<0)J$=0;if(Mb>=this.A0)Mb=this.A0-1;if(
J$>Mb)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jr(Mb+1
,0));AE=[].concat((AE[0]+Bq)+this.Jr(J$,0),AE.slice(1,4));return AE;},AbN:function(
J$,Mb){var B;if(J$<0)J$=0;if(J$>Mb)return;if(this.Tt>this.Tu){this.Tt=J$;this.Tu=
Mb;}else{if(J$<this.Tt)this.Tt=J$;if(Mb>this.Tu)this.Tu=Mb;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jr(J$,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jr(Mb+1,0));this.Am();this.Bj(AE);},Anz:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.DB;this.H(Xj);
this.Ln=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HD
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ho)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASE:null,AE3:null,Awd:null,D1:null,
Ls:null,BG:null,ALk:0,Bp:0,IO:0,Bs:0,Oc:0,Jy:0,DH:A.wf,NZ:A.wf,H5:A.wf,AxC:8,Afi:
0,A7$:1,Down:false,YQ:false,NQ:false,A2r:false,AAw:0,Ks:function(C0,aClip,aOffset
,Ck,aBlend){},G6:function(CN){var B;var BO=(C.Aeh.isPrototypeOf(CN)?CN:null);var
D4=(C.AqP.isPrototypeOf(CN)?CN:null);var AKz=this.YQ;var AaS;var Vo;var ABz;var M7;
var AzV;if(!BO&&!D4)return null;AaS=(!!BO&&BO.Down)&&!BO.Jy;Vo=(!!BO&&BO.Down)&&(
BO.Jy>0);ABz=(!!BO&&BO.Down)&&(BO.Jy>this.AAw);M7=!!BO&&!BO.Down;AzV=!!D4;if(AaS
)this.AAw=((B=(BO.NQ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afi&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var ID=(C.Au5.isPrototypeOf(CN)?CN:null);if(((
!!ID&&ID.Down)&&(ID.AxU!==this))&&A.wa(this.GetExtent(),this.Ab.A76(ID.L0))){this.
ALk=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaS){var ApJ=0;var Adn;this.Bp=
this.Bp|(1<<BO.IO);for(Adn=this.Bp&4095;Adn>0;Adn=Adn>>1)if(!!(Adn&1))ApJ=ApJ+1;
if(ApJ===1)this.Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M7&&(this.Bp<16777216)){
var II=this.Iq();var JK=null;if(!!II){var A4O=(!!this.AJ?this.AJ:this.Ab);var A2f=(
!!II.JL?II.JL.C2:null);JK=II.Yr(A.abh(Aaj,BO.L0),BO.IO,BO.Oc,A2f,A4O,0x0);}if(!!
JK){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Cj.G6(A._NewObject(C.Aeh,0).
InitializeDown(O,BO.H5,BO.Oc,Cf,true,BO.L0));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JK.Cj.G6(A._NewObject(C.Aeh,0).InitializeUp(O,BO.H5,BO.H5,0,BO.Oc,Cf,false,BO.
L0,BO.L0));}}if(M7)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABz&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M7&&BO.NQ)this.Bp=this.Bp|67108864;if(M7&&!(this.Bp&
4095))this.ALk=0x0;if(M7&&!(this.Bp&16777215))this.Bp=0;if(Vo&&(this.Bp>=67108864
)){var II=this.Iq();if(!!II)II.AUN(null,null,this,this.ALk);}if((Vo&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vo=false;M7=true;}if(!!BO&&!(this.Bp&(4096<<BO.
IO)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IO)))return this;if(M7&&!(this.Bp&
16777216))return this;if(((AaS||AzV)||Vo)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M7)this.Bp=this.Bp&3758100479;if(M7&&!(this.Bp&16777215))this.
Bp=0;if(!!BO){this.Down=AaS||Vo;this.YQ=this.ARx(BO.H5);this.NZ=BO.NZ;this.H5=BO.
H5;this.DH=Cf;this.Jy=BO.Jy;this.Oc=BO.Oc;this.NQ=BO.NQ;this.IO=BO.IO;this.Bs=BO.
Bs;if(BO.Down&&!BO.Jy)AKz=false;}if(!!D4){this.Down=true;this.YQ=this.ARx(D4.H5);
this.NZ=D4.NZ;this.H5=D4.H5;this.DH=D4.DH;this.Jy=D4.Jy;this.Oc=D4.Oc;this.IO=D4.
IO;this.NQ=false;this.Bs=D4.Bs;}var A2l=this.Down;if(!!D4)(B=this.ASE)?B[1].call(
B[0],this):null;if((!!BO&&this.Down)&&!this.Jy)(B=this.BG)?B[1].call(B[0],this):
null;if((!!BO&&this.Down)&&(this.Jy>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YQ)&&!AKz){this.A2r=true;(B=this.Awd)?B[1].call(B[0],this):null;
}if(this.A2r&&(((A2l&&!this.YQ)&&AKz)||((!A2l&&this.YQ)&&AKz))){this.A2r=false;(
B=this.AE3)?B[1].call(B[0],this):null;}if(!!BO&&!A2l)(B=this.Ls)?B[1].call(B[0],
this):null;if(!!this.Afi){var AdH=0x0;if(((((this.Afi&0x10)===0x10)&&!!BO)&&BO.Down
)&&(BO.Jy>=1000))AdH=0x10;if((((this.Afi&0x1)===0x1)&&!!D4)&&((D4.L0[1]-D4.Ag4[1
])<=-this.AxC))AdH=0x1;if((((this.Afi&0x2)===0x2)&&!!D4)&&((D4.L0[1]-D4.Ag4[1])>=
this.AxC))AdH=0x2;if((((this.Afi&0x4)===0x4)&&!!D4)&&((D4.L0[0]-D4.Ag4[0])<=-this.
AxC))AdH=0x4;if((((this.Afi&0x8)===0x8)&&!!D4)&&((D4.L0[0]-D4.Ag4[0])>=this.AxC)
)AdH=0x8;if(!!AdH){var II=this.Iq();if(!!II){this.ALk=AdH;II.AUN(null,this,this,
AdH);}}}return this;},Yr:function(Dc,BH,Om,Aas,Ac8,Ac7){var B;if(!!Aas&&(Aas!==this
))return null;if((Om<1)||(Om>this.A7$))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!!(Ac7&this.Afi))return null;
if(this.BjZ()){var Az=A.lb(Dc,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qn=A.aaI(Dc);var Fw=Cf;if(Qn[0]<Az[0])Fw=[Az[0]-Qn[0],Fw[1]];if(Qn[0]>=
Az[2])Fw=[(Az[2]-Qn[0])-1,Fw[1]];if(Qn[1]<Az[1])Fw=[Fw[0],Az[1]-Qn[1]];if(Qn[1]>=
Az[3])Fw=[Fw[0],(Az[3]-Qn[1])-1];return A._NewObject(C.Au6,0).Initialize(this,Fw
);}}else{var HF=A.abi(9,A.wf,null);var O;HF.Set(0,A.aaI(Dc));HF.Set(1,HF.Get(0));
HF.Set(2,HF.Get(0));HF.Set(3,HF.Get(0));HF.Set(4,HF.Get(0));HF.Set(1,[Dc[0],HF.Get(
1)[1]]);HF.Set(2,[HF.Get(2)[0],Dc[1]]);HF.Set(3,[Dc[2],HF.Get(3)[1]]);HF.Set(4,[
HF.Get(4)[0],Dc[3]]);HF.Set(5,Dc.slice(0,2));HF.Set(6,[Dc[2],Dc[1]]);HF.Set(7,[Dc[
0],Dc[3]]);HF.Set(8,Dc.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARx(HF.Get(O)))return A.
_NewObject(C.Au6,0).Initialize(this,A.abe(HF.Get(O),HF.Get(0)));}return null;},Bn7:
function(E){if(E<1)E=1;this.AxC=E;},AFL:function(E){if(E<1)E=1;this.A7$=E;},As:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZJ._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZJ._Mark.call(this,D);if((B=this.ASE)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AE3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Awd
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Ls)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Ic={timer:null,AKX:null,Auh:null,AGl:null,Zt:null,SR:null,Bp:0,AJy:0,Adq:5000
,Ap3:0,AKy:A.wf,Apf:0,AfT:0,EY:0,Amn:0,Auv:0,Ape:0,AfS:0,EX:0,Amm:0,Amk:0,NZ:A.wf
,A6r:A.wf,F$:A.wf,Gq:A.wf,DH:A.wf,W4:A.wf,A65:0.5,A$K:true,AG2:true,ZU:false,XQ:
false,XR:false,Ao0:false,AAw:0,Ks:function(C0,aClip,aOffset,Ck,aBlend){},G6:function(
CN){var B;var BO=(C.Aeh.isPrototypeOf(CN)?CN:null);var D4=(C.AqP.isPrototypeOf(CN
)?CN:null);var ID=(C.Au5.isPrototypeOf(CN)?CN:null);var AaS;var Vo;var ABz;var M7;
var AzV;AaS=(!!BO&&BO.Down)&&!BO.Jy;Vo=(!!BO&&BO.Down)&&(BO.Jy>0);ABz=(!!BO&&BO.
Down)&&(BO.Jy>this.AAw);M7=!!BO&&!BO.Down;AzV=!!D4;if(AaS)this.AAw=((B=(BO.NQ?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaS){var ApJ=0;var Adn;this.Bp=this.Bp|(1<<BO.
IO);for(Adn=this.Bp&4095;Adn>0;Adn=Adn>>1)if(!!(Adn&1))ApJ=ApJ+1;if(ApJ===1)this.
Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M7&&(this.Bp<16777216)){var II=this.Iq();
var JK=null;if(!!II){var A4O=(!!this.AJ?this.AJ:this.Ab);var A2f=(!!II.JL?II.JL.
C2:null);JK=II.Yr(A.abh(Aaj,BO.L0),BO.IO,BO.Oc,A2f,A4O,0x0);}if(!!JK){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Cj.G6(A._NewObject(C.Aeh,0).InitializeDown(
O,BO.H5,BO.Oc,Cf,true,BO.L0));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Cj.G6(A.
_NewObject(C.Aeh,0).InitializeUp(O,BO.H5,BO.H5,0,BO.Oc,Cf,false,BO.L0,BO.L0));}}
if(M7)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABz&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M7&&BO.NQ)this.Bp=this.Bp|67108864;if(M7&&!(this.Bp&16777215
))this.Bp=0;if(Vo&&(this.Bp>=67108864)){var II=this.Iq();if(!!II)II.AUN(null,null
,this,0x0);}if((Vo&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vo=false;M7=true;
}if(!!BO&&!(this.Bp&(4096<<BO.IO)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IO))
)return this;if(M7&&!(this.Bp&16777216))return this;if(((AaS||AzV)||Vo)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M7)this.Bp=this.Bp&3758100479;
if(M7&&!(this.Bp&16777215))this.Bp=0;if(!!ID&&(ID.AxU===this))return null;if((!!
ID&&ID.Down)&&(this.Ao0||!this.ZU))return null;if((!!ID&&ID.Down)&&!A.wa(this.M,
this.Ab.A76(ID.L0)))return null;if((!!ID&&!ID.Down)&&(!this.Ao0||(this.AJy!==ID.
IO)))return null;if((!BO&&!D4)&&!ID)return null;if(!!BO){this.Ao0=AaS||Vo;this.AJy=
BO.IO;this.NZ=BO.NZ;}if(!!D4)this.AJy=D4.IO;if(!!ID){this.Ao0=ID.Down;this.AJy=ID.
IO;}if(!!ID&&ID.Down){this.A4P();this.EX=(((ID.Bs-this.Amk)*0.001)*this.AfS)+this.
EX;this.EY=(((ID.Bs-this.Auv)*0.001)*this.AfT)+this.EY;if(this.XQ)this.EX=0;if(this.
XR)this.EY=0;this.AfS=0;this.AfT=0;this.XQ=false;this.XR=false;this.AKy=this.DH;
this.Ap3=ID.Bs;return this;}if(AaS){this.A4P();this.EX=(((BO.Bs-this.Amk)*0.001)
*this.AfS)+this.EX;this.EY=(((BO.Bs-this.Auv)*0.001)*this.AfT)+this.EY;if(this.XQ||
!this.ZU)this.EX=0;if(this.XR||!this.ZU)this.EY=0;this.AfS=0;this.AfT=0;this.XQ=
false;this.XR=false;if(!this.ZU){this.ZU=true;(B=this.SR)?B[1].call(B[0],this):null;(
B=this.AKX)?B[1].call(B[0],this):null;}this.AKy=this.DH;this.Ap3=BO.Bs;}if(!!D4){
var Hd=A.abe(D4.H5,D4.NZ);var CE=this.DH;if(this.AG2)CE=[this.AKy[0]+Hd[0],CE[1]
];CE=[CE[0],this.AKy[1]+Hd[1]];if(this.A$K){if(CE[0]<this.Gq[0])CE=[this.Gq[0]+(((
CE[0]-this.Gq[0])/2)|0),CE[1]];else if(CE[0]>this.F$[0])CE=[this.F$[0]+(((CE[0]-
this.F$[0])/2)|0),CE[1]];if(CE[1]<this.Gq[1])CE=[CE[0],this.Gq[1]+(((CE[1]-this.
Gq[1])/2)|0)];else if(CE[1]>this.F$[1])CE=[CE[0],this.F$[1]+(((CE[1]-this.F$[1])
/2)|0)];}else{if(CE[0]<this.Gq[0])CE=[this.Gq[0],CE[1]];else if(CE[0]>this.F$[0]
)CE=[this.F$[0],CE[1]];if(CE[1]<this.Gq[1])CE=[CE[0],this.Gq[1]];else if(CE[1]>this.
F$[1])CE=[CE[0],this.F$[1]];}if(!A.aaX(CE,this.DH)){this.A6r=A.abe(CE,this.DH);this.
DH=CE;(B=this.Auh)?B[1].call(B[0],this):null;(B=this.AGl)?B[1].call(B[0],this):null;
}}if((!!ID&&!ID.Down)&&((ID.Bs-this.Ap3)>=200)){this.EX=0;this.EY=0;}if(Vo&&((BO.
Bs-this.Ap3)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.Ap3)){var Hd=D4.DH;
var Bei=1000/(D4.Bs-this.Ap3);var AiN=0;var AiO;if(this.AG2)AiN=Hd[0]*Bei;AiO=Hd[
1]*Bei;if((AiN*this.EX)<0)this.EX=0;if((AiO*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiN)*0.5;this.EY=(this.EY+AiO)*0.5;this.Ap3=D4.Bs;}if(!M7&&!ID)return this;if(!!
BO&&BO.NQ){this.EX=0;this.EY=0;}if((this.DH[0]<=this.Gq[0])||(this.DH[0]>=this.F$[
0]))this.EX=0;else if(!this.EX){var ER=this.DH[0];var Fi=this.Gq[0];var EI=this.
F$[0];if(ER<Fi)EI=this.Gq[0];else if(ER>EI)Fi=this.F$[0];else if(this.W4[0]<=1){
Fi=ER;EI=ER;}else{var Adu=(EI-ER)%this.W4[0];EI=(ER-this.W4[0])+Adu;Fi=ER+Adu;if(
EI<this.Gq[0])EI=this.Gq[0];if(Fi>this.F$[0])Fi=this.F$[0];}if((Fi-ER)<=(ER-EI))
ER=Fi;else ER=EI;if(ER!==this.DH[0]){var Jq=ER-this.DH[0];if(Jq>0)this.EX=Math.sqrt((
Jq*2)*this.Adq)+20;if(Jq<0)this.EX=-Math.sqrt((-Jq*2)*this.Adq)-20;this.AfS=(400-(
this.EX*this.EX))/(2*Jq);this.Ape=ER;}}else{var BCE=this.EX*this.EX;var Jq=BCE/(
2*this.Adq);var ER=this.DH[0];if(this.EX>0)ER=ER+(Jq|0);if(this.EX<0)ER=ER-(Jq|0
);if(ER>this.F$[0])ER=this.F$[0];else if(ER<this.Gq[0])ER=this.Gq[0];var Bg1=ER;
var Fi=this.Gq[0];var EI=this.F$[0];if(ER<Fi)EI=this.Gq[0];else if(ER>EI)Fi=this.
F$[0];else if(this.W4[0]<=1){Fi=ER;EI=ER;}else{var Adu=(EI-ER)%this.W4[0];EI=(ER-
this.W4[0])+Adu;Fi=ER+Adu;if(EI<this.Gq[0])EI=this.Gq[0];if(Fi>this.F$[0])Fi=this.
F$[0];}if(this.EX>0){if(EI<=this.DH[0])ER=Fi;else if((ER-EI)<(Fi-ER))ER=EI;else ER=
Fi;}else if(Fi>=this.DH[0])ER=EI;else if((ER-EI)>(Fi-ER))ER=Fi;else ER=EI;if(ER!==
this.DH[0]){Jq=ER-this.DH[0];if(ER!==Bg1){var Ai9=ER-Bg1;if(Ai9>0)this.EX=this.EX+
Math.sqrt((Ai9*2)*this.Adq);if(Ai9<0)this.EX=this.EX-Math.sqrt((-Ai9*2)*this.Adq
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfS=(400-(
this.EX*this.EX))/(2*Jq);this.Ape=ER;}else this.EX=0;}if((this.DH[1]<=this.Gq[1]
)||(this.DH[1]>=this.F$[1]))this.EY=0;else if(!this.EY){var ES=this.DH[1];var Fi=
this.Gq[1];var EI=this.F$[1];if(ES<Fi)EI=this.Gq[1];else if(ES>EI)Fi=this.F$[1];
else if(this.W4[1]<=1){Fi=ES;EI=ES;}else{var Adu=(EI-ES)%this.W4[1];EI=(ES-this.
W4[1])+Adu;Fi=ES+Adu;if(EI<this.Gq[1])EI=this.Gq[1];if(Fi>this.F$[1])Fi=this.F$[
1];}if((Fi-ES)<=(ES-EI))ES=Fi;else ES=EI;if(ES!==this.DH[1]){var Jq=ES-this.DH[1
];if(Jq>0)this.EY=Math.sqrt((Jq*2)*this.Adq)+20;if(Jq<0)this.EY=-Math.sqrt((-Jq*
2)*this.Adq)-20;this.AfT=(400-(this.EY*this.EY))/(2*Jq);this.Apf=ES;}}else{var BCF=
this.EY*this.EY;var Jq=BCF/(2*this.Adq);var ES=this.DH[1];if(this.EY>0)ES=ES+(Jq|
0);if(this.EY<0)ES=ES-(Jq|0);if(ES>this.F$[1])ES=this.F$[1];else if(ES<this.Gq[1
])ES=this.Gq[1];var Bg2=ES;var Fi=this.Gq[1];var EI=this.F$[1];if(ES<Fi)EI=this.
Gq[1];else if(ES>EI)Fi=this.F$[1];else if(this.W4[1]<=1){Fi=ES;EI=ES;}else{var Adu=(
EI-ES)%this.W4[1];EI=(ES-this.W4[1])+Adu;Fi=ES+Adu;if(EI<this.Gq[1])EI=this.Gq[1
];if(Fi>this.F$[1])Fi=this.F$[1];}if(this.EY>0){if(EI<=this.DH[1])ES=Fi;else if((
ES-EI)<(Fi-ES))ES=EI;else ES=Fi;}else if(Fi>=this.DH[1])ES=EI;else if((ES-EI)>(Fi-
ES))ES=Fi;else ES=EI;if(ES!==this.DH[1]){Jq=ES-this.DH[1];if(ES!==Bg2){var Ai9=ES-
Bg2;if(Ai9>0)this.EY=this.EY+Math.sqrt((Ai9*2)*this.Adq);if(Ai9<0)this.EY=this.EY-
Math.sqrt((-Ai9*2)*this.Adq);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfT=(400-(this.EY*this.EY))/(2*Jq);this.Apf=ES;}else this.EY=
0;}if(!!BO)this.Amk=BO.Bs;if(!!ID)this.Amk=ID.Bs;this.Auv=this.Amk;this.Amm=this.
DH[0];this.Amn=this.DH[1];this.BCG();return this;},Yr:function(Dc,BH,Om,Aas,Ac8,
Ac7){var B;if(!!Aas&&(Aas!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!this.AG2&&!!(Ac7&0xC))
return null;var Az=A.lb(Dc,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qn=
A.aaI(Dc);var Fw=Cf;if(Qn[0]<Az[0])Fw=[Az[0]-Qn[0],Fw[1]];if(Qn[0]>=Az[2])Fw=[(Az[
2]-Qn[0])-1,Fw[1]];if(Qn[1]<Az[1])Fw=[Fw[0],Az[1]-Qn[1]];if(Qn[1]>=Az[3])Fw=[Fw[
0],(Az[3]-Qn[1])-1];return A._NewObject(C.Au6,0).Initialize(this,Fw);}return null;
},A4P:function(){if(!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;
}},BCG:function(){this.timer=A._GetAutoObject(A.acl.Ael);A.zV([this,this.Mm],this.
timer,0);},Mm:function(G){var B;if(!this.timer)return;var AuA=(this.timer.Bs-this.
Amk)*0.001;var AuB=(this.timer.Bs-this.Auv)*0.001;var BCR=AuA*AuA;var BCS=AuB*AuB;
var AiN=(this.AfS*AuA)+this.EX;var AiO=(this.AfT*AuB)+this.EY;var CE=[((((this.AfS
*0.5)*BCR)+(this.EX*AuA))+this.Amm)|0,((((this.AfT*0.5)*BCS)+(this.EY*AuB))+this.
Amn)|0];if(this.XQ&&(AuA>=0.5)){CE=[this.Ape,CE[1]];this.EX=0;this.AfS=0;this.Amm=
CE[0];this.XQ=false;}else if(this.XQ){var LP=1-Math.pow(1-(AuA/0.5),5);CE=[(this.
Amm+((this.Ape-this.Amm)*LP))|0,CE[1]];}if(this.XR&&(AuB>=0.5)){CE=[CE[0],this.Apf
];this.EY=0;this.AfT=0;this.Amn=CE[1];this.XR=false;}else if(this.XR){var LP=1-Math.
pow(1-(AuB/0.5),5);CE=[CE[0],(this.Amn+((this.Apf-this.Amn)*LP))|0];}if(((this.EX>
0)&&(AiN<0))||((this.EX<0)&&(AiN>0))){AiN=0;CE=[this.DH[0],CE[1]];}if(((this.EY>
0)&&(AiO<0))||((this.EY<0)&&(AiO>0))){AiO=0;CE=[CE[0],this.DH[1]];}if(!this.XQ&&(
CE[0]<this.Gq[0])){this.Amm=CE[0];this.Ape=this.Gq[0];this.Amk=this.timer.Bs;this.
XQ=true;}else if(!this.XQ&&(CE[0]>this.F$[0])){this.Amm=CE[0];this.Ape=this.F$[0
];this.Amk=this.timer.Bs;this.XQ=true;}if(!this.XR&&(CE[1]<this.Gq[1])){this.Amn=
CE[1];this.Apf=this.Gq[1];this.Auv=this.timer.Bs;this.XR=true;}else if(!this.XR&&(
CE[1]>this.F$[1])){this.Amn=CE[1];this.Apf=this.F$[1];this.Auv=this.timer.Bs;this.
XR=true;}if(((!this.XQ&&!!this.EX)&&(AiN>-20))&&(AiN<20)){CE=[this.Ape,CE[1]];this.
EX=0;this.AfS=0;this.Amm=CE[0];}if(((!this.XR&&!!this.EY)&&(AiO>-20))&&(AiO<20)){
CE=[CE[0],this.Apf];this.EY=0;this.AfT=0;this.Amn=CE[1];}if(!A.aaX(CE,this.DH)){
this.A6r=A.abe(CE,this.DH);this.DH=CE;(B=this.Auh)?B[1].call(B[0],this):null;(B=
this.AGl)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XQ)&&!this.
XR){this.A4P();this.ZU=false;(B=this.Zt)?B[1].call(B[0],this):null;}},ATX:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.W4=E;},ATs:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A65)return;this.A65=E;if(E<(1e-007))E=1e-007;this.Adq=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Ic;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKX)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Auh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGl
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zt)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BF={Ah:null,Ls:null,BG:null,D1:null,ApY:
0,Bs:0,A$F:0,Filter:148,CP:0,Dy:0,Bw:true,Down:false,Acp:false,Mx:false,Init:function(
aArg){var B;var C2=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C2)throw new Error(AfF
);this.Ah=C2.AKC;C2.AKC=this;},G6:function(CN){var B;if(!!CN&&CN.Bkf(this.Filter
)){this.Down=CN.Down;this.CP=CN.CP;this.Dy=CN.Dy;this.Bs=CN.Bs;this.Mx=false;if(
CN.Down){this.A$F=this.ApY;this.Acp=this.ApY>0;if(this.Acp)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BG)?B[1].call(B[0],this):null;if(!this.Mx)this.ApY=this.
ApY+1;return!this.Mx;}if(!CN.Down){this.Acp=this.ApY>1;this.A$F=this.ApY-1;this.
ApY=0;(B=this.Ls)?B[1].call(B[0],this):null;return!this.Mx;}}return false;},_Init:
function(aArg){this.__proto__=C.BF;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ls)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au6={Cj:null,Au8:0,DH:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DH=
aOffset;this.Au8=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au6;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A8g={Ah:null,C2:null,_Init:
function(aArg){this.__proto__=C.A8g;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Art={NK:null,extent:A.wg,Be:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Art;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEo={AiV:A.wf,AiU:A.wf,_Init:function(aArg
){C.Art._Init.call(this,aArg);this.__proto__=C.AEo;},_className:"Core::LayoutLineContext"
};C.AEp={AA7:A.wf,AA6:A.wf,AiV:A.wf,AiU:A.wf,_Init:function(aArg){C.Art._Init.call(
this,aArg);this.__proto__=C.AEp;},_className:"Core::LayoutQuadContext"};C.AN_={C2:
null,Ah:null,RG:null,RP:null,Mk:null,ApU:null,_Init:function(aArg){this.__proto__=
C.AN_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RG)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mk)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApU)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVu={FS:null,B_:null,B9:null,Beq:false,
Bzh:function(){if(!this.FS)return;var Pq=this.FS;this.FS.Pm=null;this.FS=null;A.
pe([this,this.A3X],this);Pq.A8H(this);},BA8:function(G){if(!!this.FS)return;if(!
this.B9)return;this.FS=this.B9;this.B9=this.B9.Ah;if(!!this.B9)this.B9.AJ=null;else
this.B_=null;this.FS.Ah=null;this.Beq=true;this.FS.SR(this);this.Beq=false;},BBs:
function(G){A.pe([this,this.BA8],this);},BBr:function(G){A.pe([this,this.BBs],this
);},A3X:function(G){A.pe([this,this.BBr],this);},Bic:function(Jn){if(!Jn||!Jn.Pm
)return;if(Jn.Pm!==this)throw new Error(Aak);var Bhw=false;if(this.FS===Jn){this.
FS=null;Bhw=true;A.pe([this,this.A3X],this);}else{if(!!Jn.Ah)Jn.Ah.AJ=Jn.AJ;else
this.B_=Jn.AJ;if(!!Jn.AJ)Jn.AJ.Ah=Jn.Ah;else this.B9=Jn.Ah;Jn.AJ=null;Jn.Ah=null;
}Jn.Pm=null;if(Bhw)Jn.A8G(this);},A$N:function(Jn,A1K){if(!Jn)return;if(!!Jn.Pm)
throw new Error(Xn);Jn.Pm=this;if(A1K){Jn.Ah=this.B9;if(!!this.B9)this.B9.AJ=Jn;
else this.B_=Jn;this.B9=Jn;}else{Jn.AJ=this.B_;if(!!this.B_)this.B_.Ah=Jn;else this.
B9=Jn;this.B_=Jn;}if(!this.FS)A.pe([this,this.A3X],this);},_Init:function(aArg){
this.__proto__=C.AVu;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Ak0={Pm:null,AJ:null,Ah:
null,A8H:function(AtD){},A8G:function(AtD){},SR:function(AtD){this.AmG();},Mw:function(
){if(!!this.Pm&&(this.Pm.FS===this))this.Pm.Bzh();},AmG:function(){if(!!this.Pm)
this.Pm.Bic(this);},ARt:function(){return!!this.Pm&&(this.Pm.FS===this);},_Init:
function(aArg){this.__proto__=C.Ak0;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pm)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVs={Ar:null,Aux:
null,SR:function(AtD){this.Aux.Ar=this.Ar;A.we(this.Aux,0);A.pe([this,this.BA5],
this);},BA5:function(G){this.Aux.Ar=null;this.Aux=null;this.Ar=null;this.Mw();},
_Init:function(aArg){C.Ak0._Init.call(this,aArg);this.__proto__=C.AVs;},_Mark:function(
D){var B;C.Ak0._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aux)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxT={_Init:function(){C.AVu._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhE={resource:null,Lg:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhE;this.Init(aArg);A.h7++;},_Done:function(){this.Lg();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MK:null,timer:null,Bs:0,Period:1000,VP:0,Bw:false,Lg:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AK5:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PZ:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AK5(this.VP,E);},WQ:function(E){if(E<0)E=0;if(E===
this.VP)return;this.VP=E;if(this.Bw)this.AK5(E,this.Period);},As:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AK5(this.VP,this.Period);else this.AK5(0,
0);this.Bs=this.Avy();},Avy:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avy();if(!this.
Period)this.As(false);(B=this.MK)?B[1].call(B[0],this):null;},AxR:function(G){this.
As(false);},StartTimer:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lg();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MK)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUX:0,Av8:0
,AjU:0,GL:0,Hm:0,Year:0,BdY:function(AfP,A1b){if(A1b)switch(AfP){case 1:return A.
aci.Bko;case 2:return A.aci.Bjh;case 3:return A.aci.BkH;case 4:return A.aci.BhS;
case 5:return A.aci.BkL;case 6:return A.aci.Bkr;case 7:return A.aci.Bkq;case 8:return A.
aci.BhU;case 9:return A.aci.Bpr;case 10:return A.aci.Bk5;case 11:return A.aci.Bk4;
case 12:return A.aci.BiB;default:return A.jV;}else switch(AfP){case 1:return A.aci.
AEi;case 2:return A.aci.AC3;case 3:return A.aci.AEu;case 4:return A.aci.AB4;case
5:return A.aci.AEw;case 6:return A.aci.AEk;case 7:return A.aci.AEj;case 8:return A.
aci.AB$;case 9:return A.aci.AGQ;case 10:return A.aci.AEJ;case 11:return A.aci.AEH;
case 12:return A.aci.ACO;default:return A.jV;}},BdW:function(Bcs,A1b){if(A1b)switch(
Bcs){case 1:return A.aci.BkQ;case 2:return A.aci.BqI;case 3:return A.aci.Brp;case
4:return A.aci.Bqv;case 5:return A.aci.Bju;case 6:return A.aci.Bpj;case 0:return A.
aci.Bqi;default:return A.jV;}else switch(Bcs){case 1:return A.aci.BkP;case 2:return A.
aci.BqH;case 3:return A.aci.Bro;case 4:return A.aci.Bqu;case 5:return A.aci.Bjt;
case 6:return A.aci.Bpi;case 0:return A.aci.Bqh;default:return A.jV;}},BdV:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JY:function(){var d=this.GL;var K8=this.Hm;var Di=this.Year-((
K8<=2)?1:0);var AzW=(((Di>=0)?Di:Di-399)/400)|0;var Amu=Di-(AzW*400);var Vm=(((((
153*(K8+((K8>2)?-3:9)))+2)/5)|0)+d)-1;var Apb=(((Amu*365)+((Amu/4)|0))-((Amu/100
)|0))+Vm;var Qp=((AzW*146097)+Apb)-719468;return(((Qp*86400)+(this.AjU*3600))+(this.
Av8*60))+this.AUX;},AF6:function(E){var B;E+=62162035200;if(E<0)E=0;var VA=Math.
trunc(E/86400)|0;var AzW=(((VA>=0)?VA:VA-146096)/146097)|0;var Apb=VA-(AzW*146097
);var Amu=((((Apb-((Apb/1460)|0))+((Apb/36524)|0))-((Apb/146096)|0))/365)|0;var Di=
Amu+(AzW*400);var Vm=Apb-(((365*Amu)+((Amu/4)|0))-((Amu/100)|0));var A3k=(((5*Vm
)+2)/153)|0;var d=(Vm-((((153*A3k)+2)/5)|0))+1;var K8=A3k+((A3k<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Di+((
K8<=2)?1:0);this.UA(K8);this.Lu(d);this.AnG(BL+((BL<0)?24:0));this.AnJ(O+((O<0)?
60:0));this.AnM(s+((s<0)?60:0));},Zu:function(){if(this.Hm===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hm===4)||(this.Hm===6))||(this.Hm===9))||(this.Hm===11))return 30;else return 31;
},Bmg:function(){var B;var Vm=this.Ab7()-1;var AtU=(6+this.Awj())%7;var Apd=((371+
AtU)-Vm)%7;if(this.Hm===12){var d=this.GL;if((d===31)&&(AtU<3))return 0;if((d===
30)&&(AtU<2))return 0;if((d===29)&&(AtU<1))return 0;}if(Apd<=3)Vm+=Apd;else Vm-=(
7-Apd);if(Vm<0){var d=this.GL;var K8=this.Hm;this.Year--;this.Lu(31);this.UA(12);
Vm=this.Ab7()-1;AtU=(6+this.Awj())%7;Apd=((371+AtU)-Vm)%7;if(Apd<=3)Vm+=Apd;else
Vm-=Apd;this.Year++;this.Lu(d);this.UA(K8);}return(Vm/7)|0;},Ab7:function(){var B;
var d=this.GL;var K8=this.Hm;var Di=this.Year;var Aga=((!!!(Di%4)&&(!!(Di%100)||
!!!(Di%400)))?1:0);switch(K8){case 2:d+=31;break;case 3:d+=(59+Aga);break;case 4:
d+=(90+Aga);break;case 5:d+=(120+Aga);break;case 6:d+=(151+Aga);break;case 7:d+=(
181+Aga);break;case 8:d+=(212+Aga);break;case 9:d+=(243+Aga);break;case 10:d+=(273+
Aga);break;case 11:d+=(304+Aga);break;case 12:d+=(334+Aga);break;default:;}return d;
},Awj:function(){var B;var d=this.GL;var K8=this.Hm+((this.Hm>2)?-2:10);var Di=this.
Year-((this.Hm<=2)?1:0);var B4=(Di/100)|0;Di%=100;d+=((((((((26*K8)-2)/10)|0)+Di
)+((Di/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnM:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUX=E;},AnJ:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av8=E;},AnG:function(E){if(E<0)E=0;if(E>23)E=23;this.AjU=E;},Lu:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},UA:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hm=E;},Format:function(Iz){var result=A.jV;var inx=0;while(!!(Iz.charCodeAt(inx)||
0))if((Iz.charCodeAt(inx)||0)===0x25){var AaL=1;inx=inx+1;if((Iz.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaL=0;}switch(Iz.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaL,10);break;case 0x48:result=result+A.abl(this.AjU,2*AaL,10);break;
case 0x49:if(!(this.AjU%12))result=result+Aal;else result=result+A.abl(this.AjU%
12,2*AaL,10);break;case 0x6D:result=result+A.abl(this.Hm,2*AaL,10);break;case 0x4D:
result=result+A.abl(this.Av8,2*AaL,10);break;case 0x70:if(this.AjU<12)result=result+
A.aci.BhC;else result=result+A.aci.BoG;break;case 0x53:result=result+A.abl(this.
AUX,2*AaL,10);break;case 0x77:result=result+A.abl(this.Awj(),AaL,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaL,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaL,10);break;case 0x25:result=result+Xo;break;case 0x6A:result=result+
A.abl(this.Ab7(),3*AaL,10);break;case 0x57:result=result+A.abl(this.Bmg(),2*AaL,
10);break;case 0x61:result=result+this.BdW(this.Awj(),true);break;case 0x41:result=
result+this.BdW(this.Awj(),false);break;case 0x62:result=result+this.BdY(this.Hm
,true);break;case 0x42:result=result+this.BdY(this.Hm,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iz.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac9,AfP,Bxz,BxQ,Bx7,Byn){this.Year=Ac9;this.
UA(AfP);this.Lu(Bxz);this.AnG(BxQ);this.AnJ(Bx7);this.AnM(Byn);return this;},Initialize:
function(Aia){this.AF6(Aia);return this;},BiG:function(Aia){if(!Aia)return A._NewObject(
C.An9,0).Initialize(this.JY());return A._NewObject(C.An9,0).Initialize(this.JY()-
Aia.JY());},BpV:function(Azf){if(!Azf)return this;return A._NewObject(C.Bs,0).Initialize(
this.JY()-Azf.JY());},J:function(Azf){if(!Azf)return this;return A._NewObject(C.
Bs,0).Initialize(this.JY()+Azf.JY());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An9={AGN:0,AEz:0,ADN:0,Kq:0,JY:function(
){return(((this.Kq*86400)+(this.ADN*3600))+(this.AEz*60))+this.AGN;},AF6:function(
E){var ALh=1;this.Kq=Math.trunc(E/86400)|0;if(E<0){E=-E;ALh=-1;}this.ADN=ALh*(Math.
trunc(E/3600)%24|0);this.AEz=ALh*(Math.trunc(E/60)%60|0);this.AGN=ALh*(E%60|0);}
,Initialize2:function(BxA,BxR,Bx8,Byq){this.Kq=BxA;this.ADN=BxR;this.AEz=Bx8;this.
AGN=Byq;return this;},Initialize:function(Aia){this.AF6(Aia);return this;},_Init:
function(aArg){this.__proto__=C.An9;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.Bab={Ar:null,Pm:null,Trigger:function(AoI,A1K){var Pq=A._NewObject(C.AVs,0);
Pq.Aux=this;Pq.Ar=AoI;this.Pm.A$N(Pq,A1K);},_Init:function(aArg){this.__proto__=
C.Bab;this.Pm=A._GetAutoObject(C.AxT);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.Bac={JS:null,Event:null,ASF:null,Aua:function(G){var B;if(
!this.Event)return;this.JS=this.Event.Ar;(B=this.ASF)?B[1].call(B[0],this):null;
this.JS=null;},BmT:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.Aua],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.Aua],this.
Event,0);},_Init:function(aArg){this.__proto__=C.Bac;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGS={Dt:0x1,BDA:0x2,BEJ:0x4,BGH:0x8,Bw:0x10,Ib:0x20
,BEK:0x40,BFl:0x80,BEF:0x100,BE1:0x200,BEt:0x400,BF0:0x800,Bl:0x1000,BGP:0x2000,
BFI:0x4000,BFJ:0x8000,Abs:0x10000,BFH:0x20000,BGb:0x40000,BEk:0x80000,BFR:0x100000
,BEe:0x200000};C.PT={BF2:0x1,BF3:0x2,BDw:0x4,BDx:0x8,BDy:0x10,BDv:0x20};C.Ag2={None:
0,BGD:1,BDT:2,BE6:3,BF6:4,BGE:5,BGF:6,BDU:7,BDV:8,BE8:9,BE7:10,BF8:11,BF7:12};C.
Au_={None:0,BGB:1,Left:2,BDR:3,ZZ:4,A5Z:5,BGC:6,Right:7,BDS:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BF4={BGY:0x1,BGV:0x2,BGW:0x4,BGX:
0x8,BE_:0x10,BEM:0x20};
C._Init=function(){C.Akh.__proto__=C.Cj;C.ZJ.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARM.__proto__=
C.Event;C.Au5.__proto__=C.Event;C.Aeh.__proto__=C.Event;C.AqP.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CM.__proto__=C.P;C.DB.__proto__=C.P;C.Bn.__proto__=C.ZJ;C.Ic.
__proto__=C.Eu;C.AEo.__proto__=C.Art;C.AEp.__proto__=C.Art;C.AVs.__proto__=C.Ak0;
};C._ReInit=function(){var B;if((B=C.AxT._this))B._ReInit(),C.AxT._ReInit.call(B
);};C.DI=function(D){var B;if((B=C.AxT._this)&&(B._cycle!=D))B._Done(C.AxT._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */