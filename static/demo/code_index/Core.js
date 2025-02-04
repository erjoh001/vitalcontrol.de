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
var O$="No fader to perform the fade-in/out operation";var Qc="Trying to use the same fader twice";
var Qd="Trying to fade-in/out a group which belongs to another owner";var CR="No view to restack";
var Ff="View is not in this group";var L9="Sibling view does not belong to the group";
var Qe="No view to remove";var J9="No view to add";var Oh="View already in a group";
var Qf="Recursive invalidate during active update cycle.";var MQ=[-8,-8,9,9];var
Te="No group to end the modal state.";var U0="The group is not modal.";var Aab="No group to obtain the modal state.";
var Xe="The group serves already as the \'virtual keyboard\'.";var Ix="The group is already modal.";
var U1="View is not in the same group or it is not embedded within the Outline "+
"Box";var Aac="The method SwitchToDialog() is not available in Core::VerticalList.";
var U2="The method DismissDialog() is not available in Core::VerticalList.";var Aad=
"The method PresentDialog() is not available in Core::VerticalList.";var Xf="The method FadeGroup() is not available in Core::VerticalList.";
var Aae="The method RestackBehind() is not available in Core::VerticalList.";var
Aaf="The method RestackTop() is not available in Core::VerticalList.";var U3="The method Restack() is not available in Core::VerticalList.";
var Xg="The method Remove() is not available in Core::VerticalList.";var Pa="The method AddBehind() is not available in Core::VerticalList.";
var Aag="The method Add() is not available in Core::VerticalList.";var Oi="The Slide Touch Handler:";
var Rq="is already connected with a view.";var Xh="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Xi=[0,0,170,120];var Tf="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xj="The method DismissDialog() is not available in Core::HorizontalList.";var
Aah="The method PresentDialog() is not available in Core::HorizontalList.";var Xk=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xl="The method RestackBehind() is not available in Core::HorizontalList.";
var Tg="The method RestackTop() is not available in Core::HorizontalList.";var Th=
"The method Restack() is not available in Core::HorizontalList.";var Ti="The method Remove() is not available in Core::HorizontalList.";
var Aai="The method AddBehind() is not available in Core::HorizontalList.";var Tj=
"The method Add() is not available in Core::HorizontalList.";var Aaj=[0,0,1,1];var
AfF="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aak="Trying to cancel a task not belonging to this queue!";var Xm="Trying to enqueue a task twice!";
var Aal="12";var Xn="%";
C.Cj={Ah:null,AJ:null,Ab:null,Ev:null,U:0x103,J7:0,PU:0x14,At4:function(BJ,Ah$){}
,Asd:function(E){if(this.J7===E)return;this.J7=E;if(!!this.Ab){var Ai8=this.Ah;var
Hc=0;while(!!Ai8&&(E>Ai8.J7)){Ai8=Ai8.Ah;Hc=Hc+1;}Ai8=this.AJ;while(!!Ai8&&(E<Ai8.
J7)){Ai8=Ai8.AJ;Hc=Hc-1;}if(!!Hc)this.Ab.J5(this,Hc);}},A1:function(E){var B;var
Hc=E^this.PU;if(!Hc)return;this.PU=E;if(!!this.Ev&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JP],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ev&&((this.U&0x400)===0x400)){this.Ev.NK.U=this.Ev.
NK.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},Iq:function(
){var B1=this.Ab;while(!!B1){var II=(C.Root.isPrototypeOf(B1)?B1:null);if(!!II)return II;
B1=B1.Ab;}return null;},Ks:function(C0,aClip,aOffset,Ck,aBlend){},GetClipping:function(
){return this.GetExtent();},G5:function(CN){return null;},Yq:function(Dc,BH,Om,Aas
,Ac8,Ac7){return null;},AuP:function(Dc){return Dc;},AuZ:function(BJ,MU){return Cf;
},Anp:function(aOffset,AtA){},GetExtent:function(){return BD;},Cs:function(Rx,Vc
){var B;if(((this.U&0x200)===0x200))Rx=Rx&~0x400;var A3p=(this.U&~Vc)|Rx;var XE=
A3p^this.U;this.U=A3p;if(!!this.Ab&&!!(XE&0x14)){var BdN=((this.U&0x14)===0x14);
if(BdN&&!this.Ab.AV)this.Ab.Bb(this);if(!BdN&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.AC8(this,0x14));}if(!!this.Ab&&!!(XE&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Ev&&!!this.Ab)&&((A3p&0x400)===0x400))&&((XE&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}if(!!this.Ab&&((XE&0x400
)===0x400)){this.Ev=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JP],this);}if(((((XE&0x100000)===0x100000)&&((Vc&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
XE&0x100000)===0x100000)&&((Rx&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((XE&0x200000)===0x200000)&&((Vc&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((XE&0x200000)===0x200000)&&((Rx&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hd.C2!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Aki={ED:A.wf,Et:A.wf
,At4:function(BJ,Ah$){var Ar=A._NewObject(C.AEq,0);this.Ev=null;Ar.extent=this.getExtent(
);Ar.Be=BJ;Ar.NK=Ah$;Ar.AiV=this.Et;Ar.AiW=this.ED;this.Ev=Ar;},AuZ:function(BJ,
MU){var B;var EW=this.PU;var Ar=(C.AEq.isPrototypeOf(B=this.Ev)?B:null);var x1=Ar.
extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.extent[3];var Kg=[BJ[
2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=y2-y1;var tmp;if(!MU){var NN=[(B=Ar.Be
)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Be[0];y1=y1-Ar.Be[1];if(NN[0]!==Kg[0]){var HW=((EW&
0x4)===0x4);var HX=((EW&0x8)===0x8);var QB=((EW&0x1)===0x1);if(!HW&&(QB||!HX))x1=((
x1*Kg[0])/NN[0])|0;if(!HX&&(QB||!HW)){x2=x2-Ar.Be[0];x2=((x2*Kg[0])/NN[0])|0;x2=
x2-Kg[0];}else x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!QB){if(HW&&!HX)x2=x1+BZ;
else if(!HW&&HX)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}}}else{x2=x2-
Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kg[1]){var HY=((EW&0x10)===0x10);var
HV=((EW&0x20)===0x20);var QC=((EW&0x2)===0x2);if(!HY&&(QC||!HV))y1=((y1*Kg[1])/NN[
1])|0;if(!HV&&(QC||!HY)){y2=y2-Ar.Be[1];y2=((y2*Kg[1])/NN[1])|0;y2=y2-Kg[1];}else
y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!QC){if(HY&&!HV)y2=y1+BL;else if(!HY&&
HV)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-Ar.Be[3];y1=y1+
BJ[1];y2=y2+BJ[3];}}else{switch(MU){case 3:{x1=BJ[0];x2=x1+BZ;}break;case 4:{x2=
BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[3];y1=y2-BL;
}break;default:;}if((MU===3)||(MU===4)){var HY=((EW&0x10)===0x10);var HV=((EW&0x20
)===0x20);var QC=((EW&0x2)===0x2);if(QC){y1=BJ[1];y2=BJ[3];}else if(HY&&!HV){y1=
BJ[1];y2=y1+BL;}else if(HV&&!HY){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1
])-BL)/2)|0);y2=y1+BL;}}if((MU===1)||(MU===2)){var HW=((EW&0x4)===0x4);var HX=((
EW&0x8)===0x8);var QB=((EW&0x1)===0x1);if(QB){x1=BJ[0];x2=BJ[2];}else if(HW&&!HX
){x1=BJ[0];x2=x1+BZ;}else if(HX&&!HW){x2=BJ[2];x1=x2-BZ;}else{x1=BJ[0]+((((BJ[2]-
BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);BZ=x2-x1;BL=y2-y1;if(
Ar.AiW[0]<Ar.AiV[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Ar.AiW[1]<Ar.AiV[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Et=[x1,y1];this.ED=[x2,y2];}else{this.DN([x1,y1]);this.DD([x2,y2]);this.
Ev=Ar;}return[BZ,BL];},Anp:function(aOffset,AtA){if(AtA){this.Et=A.abf(this.Et,aOffset
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
Aki;},_className:"Core::LineView"};C.ZJ={KD:A.wf,ML:A.wf,ED:A.wf,Et:A.wf,At4:function(
BJ,Ah$){var Ar=A._NewObject(C.AEr,0);this.Ev=null;Ar.extent=this.GetExtent();Ar.
Be=BJ;Ar.NK=Ah$;Ar.AiV=this.Et;Ar.AiW=this.ED;Ar.AA8=this.ML;Ar.AA9=this.KD;this.
Ev=Ar;},AuZ:function(BJ,MU){var B;var EW=this.PU;var Ar=(C.AEr.isPrototypeOf(B=this.
Ev)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.extent[2];var y2=Ar.
extent[3];var Kg=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=y2-y1;if(!MU){var
NN=[(B=Ar.Be)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Be[0];y1=y1-Ar.Be[1];if(NN[0]!==Kg[0]){
var HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8);var QB=((EW&0x1)===0x1);if(!HW&&(
QB||!HX))x1=((x1*Kg[0])/NN[0])|0;if(!HX&&(QB||!HW)){x2=x2-Ar.Be[0];x2=((x2*Kg[0]
)/NN[0])|0;x2=x2-Kg[0];}else x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];if(!QB){if(HW&&
!HX)x2=x1+BZ;else if(!HW&&HX)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ)/2)|0);x2=x1+BZ;}
}}else{x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kg[1]){var HY=((EW&0x10
)===0x10);var HV=((EW&0x20)===0x20);var QC=((EW&0x2)===0x2);if(!HY&&(QC||!HV))y1=((
y1*Kg[1])/NN[1])|0;if(!HV&&(QC||!HY)){y2=y2-Ar.Be[1];y2=((y2*Kg[1])/NN[1])|0;y2=
y2-Kg[1];}else y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!QC){if(HY&&!HV)y2=y1+BL;
else if(!HY&&HV)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-
Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MU){case 3:{x1=BJ[0];x2=x1+BZ;}break;
case 4:{x2=BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;}break;case 2:{y2=BJ[
3];y1=y2-BL;}break;default:;}if((MU===3)||(MU===4)){var HY=((EW&0x10)===0x10);var
HV=((EW&0x20)===0x20);var QC=((EW&0x2)===0x2);if(QC){y1=BJ[1];y2=BJ[3];}else if(
HY&&!HV){y1=BJ[1];y2=y1+BL;}else if(HV&&!HY){y2=BJ[3];y1=y2-BL;}else{y1=BJ[1]+((((
BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MU===1)||(MU===2)){var HW=((EW&0x4)===0x4);
var HX=((EW&0x8)===0x8);var QB=((EW&0x1)===0x1);if(QB){x1=BJ[0];x2=BJ[2];}else if(
HW&&!HX){x1=BJ[0];x2=x1+BZ;}else if(HX&&!HW){x2=BJ[2];x1=x2-BZ;}else{x1=BJ[0]+((((
BJ[2]-BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=y2);BZ=(x2-x1)-1;BL=(
y2-y1)-1;var AiB=Ar.extent[0];var AiD=Ar.extent[1];var Af6=(Ar.extent[2]-AiB)-1;
var Af5=(Ar.extent[3]-AiD)-1;if(!Af6)Af6=1;if(!Af5)Af5=1;if(((this.U&0x100)===0x100
)){this.Et=[x1+((((Ar.AiV[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AiV[1]-AiD)*BL)/Af5)|0)];
this.ED=[x1+((((Ar.AiW[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AiW[1]-AiD)*BL)/Af5)|0)];this.
ML=[x1+((((Ar.AA8[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AA8[1]-AiD)*BL)/Af5)|0)];this.KD=[
x1+((((Ar.AA9[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AA9[1]-AiD)*BL)/Af5)|0)];}else{this.
DN([x1+((((Ar.AiV[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AiV[1]-AiD)*BL)/Af5)|0)]);this.DD([
x1+((((Ar.AiW[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AiW[1]-AiD)*BL)/Af5)|0)]);this.KA([x1+((((
Ar.AA8[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AA8[1]-AiD)*BL)/Af5)|0)]);this.J1([x1+((((Ar.
AA9[0]-AiB)*BZ)/Af6)|0),y1+((((Ar.AA9[1]-AiD)*BL)/Af5)|0)]);this.Ev=Ar;}return[BZ+
1,BL+1];},Anp:function(aOffset,AtA){if(AtA){this.Et=A.abf(this.Et,aOffset);this.
ED=A.abf(this.ED,aOffset);this.ML=A.abf(this.ML,aOffset);this.KD=A.abf(this.KD,aOffset
);}else{this.DN(A.abf(this.Et,aOffset));this.DD(A.abf(this.ED,aOffset));this.KA(
A.abf(this.ML,aOffset));this.J1(A.abf(this.KD,aOffset));}},GetExtent:function(){
if(!!this.Ev&&this.Ev.isEmpty)return BD;var x1=this.Et[0];var y1=this.Et[1];var x2=
this.ML[0];var y2=this.ML[1];if((((this.KD[0]!==x1)||(this.ED[1]!==y1))||(this.ED[
0]!==x2))||(this.KD[1]!==y2)){if(this.ED[0]<x1)x1=this.ED[0];if(this.ML[0]<x1)x1=
this.ML[0];if(this.KD[0]<x1)x1=this.KD[0];if(this.ED[1]<y1)y1=this.ED[1];if(this.
ML[1]<y1)y1=this.ML[1];if(this.KD[1]<y1)y1=this.KD[1];if(this.Et[0]>x2)x2=this.Et[
0];if(this.ED[0]>x2)x2=this.ED[0];if(this.KD[0]>x2)x2=this.KD[0];if(this.Et[1]>y2
)y2=this.Et[1];if(this.ED[1]>y2)y2=this.ED[1];if(this.KD[1]>y2)y2=this.KD[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},J1:function(E){var B;if(A.aaX(E,this.KD))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.KD=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},KA:function(E){var B;if(A.aaX(E,
this.ML))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Ev=null;this.ML=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
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
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JP],this);}},ARz:function(K5){var HD=A.abi(4,
A.wf,null);var O=0;var Ik=3;var A2U=false;var A2V=false;HD.Set(0,this.Et);HD.Set(
1,this.ED);HD.Set(2,this.ML);HD.Set(3,this.KD);while(O<4){var Bhw=HD.Get(O)[0];var
ALK=HD.Get(O)[1];var BDh=HD.Get(Ik)[0];var A4$=HD.Get(Ik)[1];if(((ALK>K5[1])!==(
A4$>K5[1]))||((ALK<K5[1])!==(A4$<K5[1]))){var Ep=((((BDh-Bhw)*(K5[1]-ALK))/(A4$-
ALK))|0)+Bhw;if(K5[0]>Ep)A2U=!A2U;if(K5[0]<Ep)A2V=!A2V;}Ik=O;O=O+1;}return A2U||
A2V;},Bj0:function(){return((((this.Et[0]===this.KD[0])&&(this.ED[0]===this.ML[0
]))&&(this.Et[1]===this.ED[1]))&&(this.ML[1]===this.KD[1]))||((((this.Et[0]===this.
ED[0])&&(this.ML[0]===this.KD[0]))&&(this.Et[1]===this.KD[1]))&&(this.ED[1]===this.
ML[1]));},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.ZJ;},
_className:"Core::QuadView"};C.Eu={M:A.wg,At4:function(BJ,Ah$){var Ar=A._NewObject(
C.Aru,0);Ar.extent=this.M;Ar.Be=BJ;Ar.NK=Ah$;this.Ev=Ar;},AuZ:function(BJ,MU){var
B;var EW=this.PU;var Ar=this.Ev;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var Kg=[BJ[2]-BJ[0],BJ[3]-BJ[1]];var BZ=x2-x1;var BL=
y2-y1;if(!MU){var NN=[(B=Ar.Be)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Be[0];y1=y1-Ar.Be[1];
if(NN[0]!==Kg[0]){var HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8);var QB=((EW&0x1
)===0x1);if(!HW&&(QB||!HX))x1=((x1*Kg[0])/NN[0])|0;if(!HX&&(QB||!HW)){x2=x2-Ar.Be[
0];x2=((x2*Kg[0])/NN[0])|0;x2=x2-Kg[0];}else x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[
2];if(!QB){if(HW&&!HX)x2=x1+BZ;else if(!HW&&HX)x1=x2-BZ;else{x1=x1+((((x2-x1)-BZ
)/2)|0);x2=x1+BZ;}}}else{x2=x2-Ar.Be[2];x1=x1+BJ[0];x2=x2+BJ[2];}if(NN[1]!==Kg[1
]){var HY=((EW&0x10)===0x10);var HV=((EW&0x20)===0x20);var QC=((EW&0x2)===0x2);if(
!HY&&(QC||!HV))y1=((y1*Kg[1])/NN[1])|0;if(!HV&&(QC||!HY)){y2=y2-Ar.Be[1];y2=((y2
*Kg[1])/NN[1])|0;y2=y2-Kg[1];}else y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];if(!QC
){if(HY&&!HV)y2=y1+BL;else if(!HY&&HV)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-Ar.Be[3];y1=y1+BJ[1];y2=y2+BJ[3];}}else{switch(MU){case 3:{x1=
BJ[0];x2=x1+BZ;}break;case 4:{x2=BJ[2];x1=x2-BZ;}break;case 1:{y1=BJ[1];y2=y1+BL;
}break;case 2:{y2=BJ[3];y1=y2-BL;}break;default:;}if((MU===3)||(MU===4)){var HY=((
EW&0x10)===0x10);var HV=((EW&0x20)===0x20);var QC=((EW&0x2)===0x2);if(QC){y1=BJ[
1];y2=BJ[3];}else if(HY&&!HV){y1=BJ[1];y2=y1+BL;}else if(HV&&!HY){y2=BJ[3];y1=y2-
BL;}else{y1=BJ[1]+((((BJ[3]-BJ[1])-BL)/2)|0);y2=y1+BL;}}if((MU===1)||(MU===2)){var
HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8);var QB=((EW&0x1)===0x1);if(QB){x1=BJ[
0];x2=BJ[2];}else if(HW&&!HX){x1=BJ[0];x2=x1+BZ;}else if(HX&&!HW){x2=BJ[2];x1=x2-
BZ;}else{x1=BJ[0]+((((BJ[2]-BJ[0])-BZ)/2)|0);x2=x1+BZ;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Ev=Ar;}return[x2-x1,y2-y1];},Anp:function(aOffset,AtA){if(AtA)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Ev=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JP],this);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Eu;},_className:"Core::RectView"};C.P={B8:null,B9:null,AKE:null,FG:null
,Hd:null,XF:null,ApW:null,AV:null,G9:255,AzY:0,Az1:0,Az0:0,AzZ:0,Init:function(aArg
){this.Am();},Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;Ck=((Ck+1)*this.G9)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(C0.C2===this))this.BdC(C0,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ck,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Ck&0xFF)<<24);this.FG.Update();C0.A6k(aClip,this.FG,0,A.abh(this.M,aOffset),Cf,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzZ,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.Az1);Az=A.abN(
Az,Az[2]+this.Az0);Az=[].concat(Az.slice(0,3),Az[3]+this.AzY);if(((this.U&0x80000
)===0x80000)){var Ap9=BD;var X;for(X=this.B8;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap9=
A.wC(Ap9,X.GetClipping());Az=A.wC(Az,A.abh(Ap9,this.M.slice(0,2)));}return Az;},
Yq:function(Dc,BH,Om,Aas,Ac8,Ac7){var B;var X=this.B9;var Apq=null;var AE=BD;var
Kh=null;var A3e=!!this.XF&&(!!this.XF.FS||!!this.XF.B8);if(((B=A.lb(Dc,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Dc=A.abg(Dc,this.M.slice(0,2));if(!!Ac8){X=Ac8;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kh){Kh=X.
AJ;while(!!Kh&&!((Kh.U&0x200)===0x200))Kh=Kh.AJ;if(!!Kh)AE=A.lb(Dc,Kh.GetExtent(
));else AE=BD;}if(Kh===X){Kh=null;AE=BD;}if((!!Aas&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hd.C2===X)&&!A3e))
)){var extent=X.GetExtent();var AJ8=Aas;var Apa=null;if(AJ8===X)AJ8=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Apa=X.Yq(AE
,BH,Om,AJ8,Ac8,Ac7);}else if(!(((B=A.lb(extent,Dc))[0]>=B[2])||(B[1]>=B[3]))||(Aas===
X))Apa=X.Yq(Dc,BH,Om,AJ8,Ac8,Ac7);X=X.AJ;if(!!Apa){if(!Apq||((Apa.Au9<Apq.Au9)&&(
Apa.Au9>=0)))Apq=Apa;if(!Apa.Au9)X=null;}}else X=X.AJ;Ac8=null;}return Apq;},AuP:
function(Dc){var B;var F;var X=this.B8;var LI=BD;var AA2=true;var result=(Dc=F=A.
abg(Dc,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var Aue=(C.Y.isPrototypeOf(
X)?X:null);LI=A.lb(Dc,Aue.M);AA2=((Aue.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AA2){var AE=A.lb(X.GetClipping(),LI);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuP(AE));}}else{var AE=A.lb(X.GetClipping(),
Dc);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuP(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Rx,Vc){var B;
var Tw=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((Vc&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Eu.Cs.call(this,Rx,Vc);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rx&0x80000)===0x80000))&&!((Tw&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var XE=this.U^Tw;if(!!this.AV&&((XE&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.Hd&&((XE&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hd.C2.
U&0x14)===0x14))this.Hd.C2.Cs(0x40,0x0);else this.Hd.C2.Cs(0x0,0x40);}if(((XE&0x10
)===0x10)){var X;for(X=this.B8;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hd.C2===X)))X.Cs(Rx&0x10,Vc&
0x10);}if(!!XE){this.U=this.U|0x8000;A.pe([this,this.ABH],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al5=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKM=[
E[2]-E[0],E[3]-E[1]];var Ap5=!A.aaX(Al5,AKM);if(Ap5&&!!this.FG){this.FG.ArZ(AKM);
A.we(this,0);A.we(this.FG,0);}C.Eu.H.call(this,E);if((Ap5&&(Al5[0]>0))&&(Al5[1]>
0)){var Be=[].concat(Cf,Al5);var X=this.B8;while(!!X){if((!X.Ev&&(X.PU!==0x14))&&
!((X.U&0x400)===0x400))X.At4(Be,null);X=X.Ah;}}if(Ap5){this.U=this.U|0x5000;A.pe([
this,this.ABH],this);}},A4l:function(CN){var Bey=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKE;if(!Bey)return null;while(!!D5&&(!D5.Bw||!D5.G5(Bey)))D5=D5.
Ah;return D5;},BC3:function(G){if(!!this.FG){this.FG.C2=this;var AE=A.abg(this.AuP(
A.abh(this.FG.QR,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Avr(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BdC(this.FG,AE,Cf,255,true);this.FG.
C2=null;}},BdC:function(C0,aClip,aOffset,Ck,aBlend){var B;var X=this.B8;var LI=BD;
var AA2=true;this.BiZ(C0,aClip,aOffset,Ck,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var Aue=(C.Y.isPrototypeOf(X)?X:null);AA2=((Aue.U&0x1)===0x1);LI=aClip;if(!((
Aue.U&0x80000)===0x80000))LI=A.lb(LI,A.abh(Aue.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AA2){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LI
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Ks(C0,AE,aOffset,Ck,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Ks(C0,AE,aOffset,Ck,aBlend);}}X=X.Ah;}this.Bi2(C0,aClip,aOffset,Ck,aBlend);},Bgv:
function(){var B;var A2N=((this.U&0x1000)===0x1000);var AiI=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var AaB=false;var Adp=BD;var K7=BD;var AaC=Cf;var At0=0;var At1=0;
var AtZ=0;var Qu=0;var X=this.B9;var Kh=null;var AlX=null;while(!!X){if(((X.U&0x800
)===0x800)){AaB=true;X.U=X.U&~0x800;}if(AaB&&((X.U&0x200)===0x200)){AaB=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).Ag3)X.U=X.U|0x1000;}X=X.AJ;}AaB=false;X=this.B8;
if(A2N){this.U=this.U&~0x1000;A2N=!((AiI[0]>=AiI[2])||(AiI[1]>=AiI[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlX&&(AtZ!==Qu)){var AdN=X;var AK9=0;var ABm=Adp[2]-
Adp[0];var Azz=Adp[3]-Adp[1];var AJY=0;var Aqf=Cf;do if(((AdN.U&0x200)===0x200))
AdN=null;else if(((AdN.U&0x401)===0x401)){Aqf=[(B=AdN.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qu===3)||(Qu===4))ABm=ABm-Aqf[0];if((Qu===1)||(Qu===2))Azz=Azz-Aqf[1];
if(!AlX||((ABm>=0)&&(Azz>=0))){AlX=AdN;AdN=AdN.Ah;if((Qu===3)||(Qu===4)){ABm=ABm-
At0;if(Aqf[1]>AK9)AK9=Aqf[1];}if((Qu===1)||(Qu===2)){Azz=Azz-At1;if(Aqf[0]>AJY)AJY=
Aqf[0];}}else AdN=null;}else AdN=AdN.Ah;while(!!AdN);if(!AlX)AlX=Kh;K7=Adp;switch(
AtZ){case 9:case 11:K7=[].concat(K7.slice(0,3),K7[1]+AK9);break;case 10:case 12:
K7=A.abP(K7,K7[3]-AK9);break;case 5:case 7:K7=A.abN(K7,K7[0]+AJY);break;case 6:case
8:K7=[].concat(K7[2]-AJY,K7.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Ev&&(X.Ev.NK!==Kh))X.Ev=null;if((!X.Ev&&AaB)&&((X.PU!==0x14)||!!Qu))X.
At4(K7,Kh);}if(!!X.Ev){if(A2N&&!((X.U&0x400)===0x400))X.AuZ(AiI,0);if(AaB&&((X.U&
0x400)===0x400)){var C6=X.AuZ(A.abh(K7,AaC),Qu);if(((X.U&0x1)===0x1)){var Bq=Cf;
switch(Qu){case 3:Bq=[C6[0]+At0,Bq[1]];break;case 4:Bq=[-C6[0]-At0,Bq[1]];break;
case 1:Bq=[Bq[0],C6[1]+At1];break;case 2:Bq=[Bq[0],-C6[1]-At1];break;default:;}AaC=
A.abf(AaC,Bq);}}}if(((X.U&0x200)===0x200)){if(AaB)A.pe(Kh.Em,Kh);AaB=((X.U&0x1000
)===0x1000);Kh=(C.Y.isPrototypeOf(X)?X:null);if(AaB){X.U=X.U&~0x1000;AtZ=Kh.Ag3;
Qu=AtZ;Adp=A.abh(Kh.M,Kh.Br);K7=Adp;AaC=Cf;At0=Kh.Space+Kh.AVk;At1=Kh.Space;AaB=
!((Adp[0]>=Adp[2])||(Adp[1]>=Adp[3]));AlX=null;switch(AtZ){case 9:case 10:Qu=3;break;
case 11:case 12:Qu=4;break;case 5:case 6:Qu=1;break;case 7:case 8:Qu=2;break;default:;
}}if(AaB)this.Bj(Kh.M);}if(X===AlX){switch(AtZ){case 9:case 11:AaC=[0,(AaC[1]+(K7[
3]-K7[1]))+At1];break;case 10:case 12:AaC=[0,(AaC[1]-(K7[3]-K7[1]))-At1];break;case
5:case 7:AaC=[(AaC[0]+(K7[2]-K7[0]))+At0,0];break;case 6:case 8:AaC=[(AaC[0]-(K7[
2]-K7[0]))-At0,0];break;default:;}AlX=null;}X=X.Ah;}if(AaB)A.pe(Kh.Em,Kh);this.U=
this.U&~0x2000;this.Bl([AiI[2]-AiI[0],AiI[3]-AiI[1]]);},JP:function(G){A.pe([this
,this.ABH],this);},ABH:function(G){var B;var BC$=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bgv();}if(((this.U&0x8000)===
0x8000)||BC$){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E8);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},BbL:function(Aq){this.Bb(Aq);},ASO:function(){return!!this.FG;},ArT:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AEP=null;this.FG.ArZ(Cf);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArZ([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AEP=[this,this.BC3];}A.we(this,0);},A88:function(){var B;return((this.U&
0x100000)===0x100000);},As:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},CZ:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G9)return;
this.G9=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0O:
function(Aq){this.CZ(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bmt:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fq:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoM,AoN,AoO,AoL){var B;var Azq=this.M;var RE=
Azq;if(AoM<0)AoM=0;if(AoM>255)AoM=255;if(AoN<0)AoN=0;if(AoN>255)AoN=255;if(AoO<0
)AoO=0;if(AoO>255)AoO=255;if(AoL<0)AoL=0;if(AoL>255)AoL=255;RE=[].concat(RE[0]-(
Math.max(AoM,this.AzZ)&0xFF),RE.slice(1,4));RE=A.abN(RE,RE[2]+(Math.max(AoN,this.
Az0)&0xFF));RE=A.abP(RE,RE[1]-(Math.max(AoO,this.Az1)&0xFF));RE=[].concat(RE.slice(
0,3),RE[3]+(Math.max(AoL,this.AzY)&0xFF));if(AoM!==this.AzZ){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RE;Az=A.abN(Az
,Azq[0]);this.Ab.Bj(Az);}this.AzZ=AoM&0xFF;}if(AoN!==this.Az0){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=RE;Az=[].
concat(Azq[2],Az.slice(1,4));this.Ab.Bj(Az);}this.Az0=AoN&0xFF;}if(AoO!==this.Az1
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000
)){var Az=RE;Az=[].concat(Az.slice(0,3),Azq[1]);this.Ab.Bj(Az);}this.Az1=AoO&0xFF;
}if(AoL!==this.AzY){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.
U&0x80000)===0x80000)){var Az=RE;Az=A.abP(Az,Azq[3]);this.Ab.Bj(Az);}this.AzY=AoL&
0xFF;}},Bi2:function(C0,aClip,aOffset,Ck,aBlend){},BiZ:function(C0,aClip,aOffset
,Ck,aBlend){},GetMaximalSize:function(){return Hs;},GetMinimalSize:function(){return Cf;
},AVr:function(Iy,Ol,Xr,Tm,Tn,Aia,Pf,Rw,LE,LC,LD){var B;if(!this.Hd){this.AkO(Iy
,Ol,Xr,Tm,Tn,null,null,LE,LC,LD);return;}var Al4=this.Hd;var JM=Al4.Ah;if(((Iy.U&
0x10000)===0x10000)&&(this.Hd.C2!==Iy))throw new Error(I0);var Adv=A._NewObject(
C.AOa,0);var RH=Al4.RH;var RQ=null;var Mk=null;if(!!JM){RQ=JM.RQ;Mk=JM.Mk;}if(!!
JM&&!!Al4.ApV)RQ=Al4.ApV;if(!!JM&&!!Pf)Mk=Pf;if(!!Aia)RH=Aia;if(!Ol)Ol=A._GetAutoObject(
A.acl.AsN);if(!Xr)Xr=Ol;if(!Tn)Tn=Tm;if(!Tm)Tm=Tn;Adv.RH=Xr;Adv.Mk=Tm;Adv.RQ=Tn;
Adv.ApV=Rw;Adv.C2=Iy;Adv.Ah=this.Hd.Ah;this.Hd.Ah=null;this.Hd=Adv;if(this.AV===
Iy)this.Bb(null);Al4.C2.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iy.U&0x4)===
0x4))Iy.Cs(0x10040,0x0);else Iy.Cs(0x10000,0x0);if(!!Mk){this.NX(JM.C2,Mk.Aee(),
null,null,LD);this.NX(Al4.C2,RH.Sh(),null,null,true);this.NX(Adv.C2,Ol.Si(),LE,LC
,true);}else if(!!RQ){this.NX(JM.C2,RQ.Aef(),null,null,LD);this.NX(Al4.C2,RH.Sh(
),null,null,true);this.NX(Adv.C2,Ol.Si(),LE,LC,true);}else if(!!RH){this.NX(Al4.
C2,RH.Sh(),null,null,LD);this.NX(Adv.C2,Ol.Si(),LE,LC,true);}else this.NX(Adv.C2
,Ol.Si(),LE,LC,LD);},AqO:function(Iy,Aia,Pf,Rw,LE,LC,LD){var B;if(!this.Hd)return;
if(!Iy)return;var KI=this.Hd;var JM=this.Hd.Ah;var Ap1=null;while((!!KI&&(KI.C2!==
Iy))&&!!KI.Ah){Ap1=KI;KI=JM;JM=KI.Ah;}if(!KI||(KI.C2!==Iy))throw new Error(Iw);if(
!Ap1){this.Hd=JM;KI.Ah=null;}else{Ap1.Ah=JM;KI.Ah=null;}KI.C2.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JM)&&!Ap1)&&((JM.C2.U&0x200000)===0x200000))JM.C2.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JM)&&!Ap1)&&((JM.C2.U&0x4)===0x4))JM.C2.Cs(
0x40,0x0);var RH=KI.RH;var RQ=null;var Mk=null;if(!!JM)RQ=JM.RQ;if(!!JM&&!!KI.ApV
)RQ=KI.ApV;if(!!JM&&!!Rw)RQ=Rw;if(!!Ap1&&!!JM)Mk=JM.Mk;if((!!Ap1&&!!JM)&&!!Pf)Mk=
Pf;if(!!Aia)RH=Aia;if(!!Mk){this.NX(JM.C2,Mk.Aee(),null,null,LD);this.NX(KI.C2,RH.
Sh(),LE,LC,true);}else if(!!RQ){this.NX(JM.C2,RQ.Aef(),null,null,LD);this.NX(KI.
C2,RH.Sh(),LE,LC,true);}else this.NX(KI.C2,RH.Sh(),LE,LC,LD);},AkO:function(Iy,Ol
,Xr,Tm,Tn,Pf,Rw,LE,LC,LD){var B;if(!Iy)return;if(!!this.Hd&&(this.Hd.C2===Iy)){this.
AVr(Iy,Ol,Xr,Tm,Tn,null,Pf,Rw,LE,LC,LD);return;}if(((Iy.U&0x10000)===0x10000))throw new
Error(I0);var KI=A._NewObject(C.AOa,0);if(!!this.Hd&&!this.Hd.Mk){if(!Rw)Rw=Pf;if(
!Pf)Pf=Rw;}var Mk=null;if(!!this.Hd)Mk=this.Hd.Mk;if(!!this.Hd&&!!Pf)Mk=Pf;if(!Ol
)Ol=A._GetAutoObject(A.acl.AsN);if(!Xr)Xr=Ol;if(!Tn)Tn=Tm;if(!Tm)Tm=Tn;KI.RH=Xr;
KI.Mk=Tm;KI.RQ=Tn;KI.ApV=Rw;if(this.AV===Iy)this.Bb(null);if(!!this.Hd&&((this.Hd.
C2.U&0x200000)===0x200000))this.Hd.C2.Cs(0x0,0x10);if(!!this.Hd)this.Hd.C2.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iy.U&0x4)===0x4))Iy.Cs(0x10040,0x0);else Iy.
Cs(0x10000,0x0);KI.C2=Iy;KI.Ah=this.Hd;this.Hd=KI;if(!!Mk){this.NX(this.Hd.Ah.C2
,Mk.Aee(),null,null,LD);this.NX(Iy,Ol.Si(),LE,LC,true);}else this.NX(Iy,Ol.Si(),
LE,LC,LD);},A7u:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A78:function(
K5){var tmp=this;while(!!tmp){K5=A.abe(K5,tmp.M.slice(0,2));tmp=tmp.Ab;}return K5;
},BjX:function(K5){var tmp=this;while(!!tmp){K5=A.abf(K5,tmp.M.slice(0,2));tmp=tmp.
Ab;}return K5;},DispatchEvent:function(CN){var B;var X=this.AV;var B1=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A3e=!!this.XF&&(!!this.XF.FS||!!this.XF.B8);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B1=null;}if(!!this.Hd&&!A3e)GD=this.Hd.C2.DispatchEvent(CN);if(!GD&&!!B1)
GD=B1.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G5(CN);if(!GD)GD=this.G5(CN);if(!GD
)GD=this.A4l(CN);return GD;},BroadcastEventAtPosition:function(CN,HB,aFilter){var
B;var X=this.B9;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HB)){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GD=B1.
BroadcastEventAtPosition(CN,A.abe(HB,B1.M.slice(0,2)),aFilter);else GD=X.G5(CN);
}X=X.AJ;}if(!GD)GD=this.G5(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B9;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B1=(C.P.isPrototypeOf(X)?X:null);if(!!B1)GD=B1.BroadcastEvent(CN,aFilter
);else GD=X.G5(CN);}X=X.AJ;}if(!GD)GD=this.G5(CN);if(!GD)GD=this.A4l(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},Bkb:function(){this.U=this.U|0x4000;A.pe([
this,this.ABH],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABH],this
);},Bj:function(Dc){var B;var B1=this;while(!!B1&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3
]))){var Aay=B1.FG;if(!B1.Ab&&(B1!==this)){B1.Bj(Dc);return;}if(!!Aay){var BAO=Aay.
QR;Aay.QR=A.wC(Aay.QR,Dc);if(!A.aaY(BAO,Aay.QR)){A.we(B1,0);A.we(Aay,0);}}if(!((
B1.U&0x1)===0x1))return;var Az=B1.M;Dc=A.abh(Dc,Az.slice(0,2));if(!!B1.FG||!((B1.
U&0x80000)===0x80000)){if(!!!B1.FG){Az=[].concat(Az[0]-B1.AzZ,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B1.Az1);Az=A.abN(Az,Az[2]+B1.Az0);Az=[].concat(Az.slice(0,3),Az[3
]+B1.AzY);}Dc=A.lb(Dc,Az);}B1=B1.Ab;}},QM:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agn=A.aaI(Ag.GetExtent());var X=Ag;var A1Y=null;var
Bdf=0;var I6=0x10000;var AK5;if(((aFilter&0x10000)===0x10000))I6=0x0;var top=((GA===
4)||(GA===1))||(GA===6);var bottom=((GA===5)||(GA===3))||(GA===8);var left=((GA===
2)||(GA===1))||(GA===3);var right=((GA===7)||(GA===6))||(GA===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B9;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.U&B)===B
))))for(AK5=0;AK5<2;AK5++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AK5){if((left&&(s[0]>s[1]))&&(Az[2]<Agn[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agn[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agn[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agn[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agn);var
Rz=Bq;if(Rz[0]<0)Rz=[-Rz[0],Rz[1]];if(Rz[1]<0)Rz=[Rz[0],-Rz[1]];if(((((!left||(Bq[
0]<=-Rz[1]))&&(!right||(Bq[0]>=Rz[1])))&&(!top||(Bq[1]<=-Rz[0])))&&(!bottom||(Bq[
1]>=Rz[0])))&&((Rz[0]>0)||(Rz[1]>0))){var RJ=Bq[0];var RK=Bq[1];var Jq=Math.sqrt((
RJ*RJ)+(RK*RK));var AKD=0;if(!left&&!right)AKD=Jq/Rz[1];if(!top&&!bottom)AKD=Jq/
Rz[0];Jq=(Jq*AKD)*AKD;if((Jq<Bdf)||!A1Y){Bdf=Jq;A1Y=X;}}}}return A1Y;},AqV:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;var I6=0x10000;
if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TX:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;
var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},AC8:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var Al2=Ag.Ah;var Amd=Ag.AJ;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;
while(!!Al2||!!Amd){if((!!Al2&&(!aFilter||((B=aFilter)&&((Al2.U&B)===B))))&&(!I6||
!((B=I6)&&((Al2.U&B)===B))))return Al2;if((!!Amd&&(!aFilter||((B=aFilter)&&((Amd.
U&B)===B))))&&(!I6||!((B=I6)&&((Amd.U&B)===B))))return Amd;if(!!Al2)Al2=Al2.Ah;if(
!!Amd)Amd=Amd.AJ;}return null;},Dd:function(aFilter){var B;var X=this.B8;var AE=
BD;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!I6||!((B=I6)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NX:function(KH,FQ,LE,LC
,LD){var B;if(!KH)return;if(!FQ)throw new Error(O$);if((!!FQ.P||!!FQ.Ab)||!!FQ.Pr
)throw new Error(Qc);if(!!KH.Ab&&(KH.Ab!==this))throw new Error(Qd);if(!this.XF)
this.XF=A._NewObject(C.AVw,0);FQ.Ab=this;FQ.P=KH;FQ.AKP=LC;FQ.A3G=LE;if(!!KH.ApW
)KH.ApW.Pr.Bo9(KH.ApW);KH.ApW=FQ;KH.U=KH.U|0x20000;if((LD&&!!this.XF.B9)&&!this.
XF.B9.ARv())(A.acl.AC3.isPrototypeOf(B=this.XF.B9)?B:null).A5o(FQ);else{var Pr=A.
_NewObject(A.acl.AC3,0);Pr.A5o(FQ);this.XF.A$P(Pr,false);}},AhG:function(Ag,Kb){
var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new Error(Ff);if(!!Kb&&(Kb.
Ab!==this))throw new Error(L9);if(Ag.Ah===Kb)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B9=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;var GC=
null;var IB=this.B9;var LV=Ag.J7;if(!!Kb){GC=Kb;IB=Kb.AJ;}if(!!GC&&(LV>GC.J7))LV=
GC.J7;if(!!IB&&(LV<IB.J7))LV=IB.J7;if(LV!==Ag.J7){Ag.Ab=null;Ag.Asd(LV);Ag.Ab=this;
}if(!Kb){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.B9;Ag.Ah=null;this.B9=Ag;}else{Ag.
Ah=Kb;Ag.AJ=Kb.AJ;Kb.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B8===Kb)this.B8=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZL:function(Ag){var B;if(!Ag)throw new
Error(CR);if(Ag.Ab!==this)throw new Error(Ff);if(!Ag.Ah)return;var IB=this.B9;var
LV=Ag.J7;while(!!IB&&(IB.J7>LV))IB=IB.AJ;if(((IB===Ag)||!IB)||(IB.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=IB;Ag.Ah=IB.Ah;IB.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},J5:function(Ag,Ql){var B;if(!Ag)throw new Error(CR);if(Ag.Ab!==this)throw new
Error(Ff);var IB=Ag;var GC=Ag;var LV=Ag.J7;while(((Ql>0)&&!!IB.Ah)&&(IB.Ah.J7<=LV
)){IB=IB.Ah;Ql=Ql-1;}while(((Ql<0)&&!!GC.AJ)&&(GC.AJ.J7>=LV)){GC=GC.AJ;Ql=Ql+1;}
if((IB===Ag)&&(GC===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Ev)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JP],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;if(IB
!==Ag){Ag.Ah=IB.Ah;Ag.AJ=IB;IB.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GC!==Ag){Ag.Ah=GC;
Ag.AJ=GC.AJ;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B9=Ag;if(!Ag.AJ)this.
B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HR:function(Ag){var B;if(
!Ag)throw new Error(Qe);if(Ag.Ab!==this)throw new Error(Ff);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Ev){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JP],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JP],this);}Ag.Ev=null;if(this.AV===Ag)this.Bb(this.
AC8(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag
)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AMo:function(Ag,Kb
){var B;if(!Ag)throw new Error(J9);if(!!Ag.Ab)throw new Error(Oh);if(!!Kb&&(Kb.Ab
!==this))throw new Error(L9);var GC=null;var IB=this.B9;var LV=Ag.J7;if(!!Kb){GC=
Kb;IB=Kb.AJ;}if(!!GC&&(LV>GC.J7))LV=GC.J7;if(!!IB&&(LV<IB.J7))LV=IB.J7;if(LV!==Ag.
J7){Ag.Ab=null;Ag.Asd(LV);Ag.Ab=this;}if(!Kb){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.
B9;this.B9=Ag;}else{Ag.Ah=Kb;Ag.AJ=Kb.AJ;Kb.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B8===Kb)this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AO3()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JP],this);}},J:function(Ag,Ql){var B;if(!Ag)throw new Error(
J9);if(!!Ag.Ab)throw new Error(Oh);var GC=null;var LV=Ag.J7;if(((Ql<0)&&!!this.B9
)&&(this.B9.J7>=LV)){GC=this.B9;Ql=Ql+1;}while((((Ql<0)&&!!GC)&&!!GC.AJ)&&(GC.AJ.
J7>=LV)){GC=GC.AJ;Ql=Ql+1;}if((!GC&&!!this.B9)&&(this.B9.J7>LV))GC=this.B9;while((
!!GC&&!!GC.AJ)&&(GC.AJ.J7>LV))GC=GC.AJ;if(!GC){Ag.Ab=this;Ag.AJ=this.B9;if(!!this.
B9)this.B9.Ah=Ag;if(!this.B8)this.B8=Ag;this.B9=Ag;}else{Ag.Ab=this;Ag.AJ=GC.AJ;
Ag.Ah=GC;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B8=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AO3()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JP],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JP],this);}},A8_:function(){return this.
AV;},Awt:function(){return this.G9;},_Init:function(aArg){C.Eu._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eu._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKE)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RN:null,JL:null,Fv:A.abi(10,null
,null),AtM:null,Ait:null,ABJ:0,Ii:0,Mg:A.abi(10,0,null),AJ4:A.abi(10,A.wg,null),
XD:A.abi(10,0,null),Af4:A.abi(10,A.wf,null),AtR:A.abi(10,0,null),Ais:A.abi(10,A.
wf,null),XC:A.abi(10,A.wf,null),RG:A.abi(10,A.wf,null),Adg:A.abi(10,A.wf,null),EP:
0,AKq:0,AKp:0,Oy:A.abi(4,0,null),Km:A.abi(4,A.wg,null),Kj:0,AAn:0,At6:0,Az_:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Iq:function(){return this;
},Ks:function(C0,aClip,aOffset,Ck,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)C0.Avr(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Ks.call(this,C0,aClip
,aOffset,Ck,aBlend);},Cs:function(Rx,Vc){var B;C.P.Cs.call(this,Rx,Vc);if(!this.
Ab&&(((Rx&0x1)===0x1)||((Vc&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rx&0x2)===0x2)||((Vc&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArT:
function(E){var B;var BAM=this.FG;C.P.ArT.call(this,E);if(((BAM!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},CZ:function(
E){var B;var BP=this.G9;C.P.CZ.call(this,E);if(((BP!==this.G9)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.Av0=!!this.Ii;if(!!this.Ii)CN.Bs=this.Ii;}var GD=null;if(!!this.
JL){GD=this.JL.C2.DispatchEvent(CN);if(!GD)GD=this.G5(CN);if(!GD)GD=this.A4l(CN);
this.Ii=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ii=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.Av0=!!this.Ii;if(!!this.Ii)CN.Bs=this.Ii;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ii=0;return GD;},Bj:function(Dc){var
B;if(this.ABJ>0)throw new Error(Qf);if(!!this.FG&&!this.Ab){if(((B=this.FG.QR)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QR=A.wC(this.FG.QR
,Dc);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Dc=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Dc);return;}Dc=A.
lb(A.abh(Dc,this.M.slice(0,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;
var O;for(O=0;O<this.Kj;O=O+1)if(!(((B=A.lb(this.Km.Get(O),Dc))[0]>=B[2])||(B[1]>=
B[3]))){this.Km.Set(O,A.wC(this.Km.Get(O),Dc));this.Oy.Set(O,A.aaH(this.Km.Get(O
)));return;}if(this.Kj<3){this.Km.Set(this.Kj,Dc);this.Oy.Set(this.Kj,A.aaH(Dc));
this.Kj=this.Kj+1;return;}var Ik;var RM;var AAm=0;var AAp=0;var Bde=2147483647;this.
Km.Set(this.Kj,Dc);this.Oy.Set(this.Kj,A.aaH(Dc));for(Ik=0;Ik<=this.Kj;Ik=Ik+1)for(
RM=Ik+1;RM<=this.Kj;RM=RM+1){var ALx=A.aaH(A.wC(this.Km.Get(Ik),this.Km.Get(RM))
);var Bf6=((ALx<<8)/(this.Oy.Get(Ik)+this.Oy.Get(RM)))|0;if(Bf6<Bde){Bde=Bf6;AAm=
Ik;AAp=RM;}}this.Km.Set(AAm,A.wC(this.Km.Get(AAm),this.Km.Get(AAp)));this.Oy.Set(
AAm,A.aaH(this.Km.Get(AAm)));if(AAp!==this.Kj){this.Km.Set(AAp,this.Km.Get(this.
Kj));this.Oy.Set(AAp,this.Oy.Get(this.Kj));}},Bzo:function(){var LO=A._NewObject(
C.AqQ,0);LO.Av0=!!this.Ii;if(!!this.Ii)LO.Bs=this.Ii;return LO;},Ao_:function(){
var LO=A._NewObject(C.Aeh,0);LO.Av0=!!this.Ii;if(!!this.Ii)LO.Bs=this.Ii;return LO;
},AtQ:function(){var LO=A._NewObject(C.Au6,0);LO.Av0=!!this.Ii;if(!!this.Ii)LO.Bs=
this.Ii;return LO;},Bzs:function(G){var O;var Apq=false;for(O=0;O<10;O=O+1)if(!!
this.Fv.Get(O)){var pos=this.RG.Get(O);var B1=this.Fv.Get(O).Ab;while(!!B1&&(B1!==
this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Fv.Get(O)!==this)){
var tmp=this.Fv.Get(O);this.EP=O;this.Fv.Set(O,null);tmp.G5(this.Ao_().InitializeUp(
O,this.Ais.Get(O),this.Af4.Get(O),this.XD.Get(O),this.Mg.Get(O)+1,this.XC.Get(O)
,false,this.RG.Get(O),this.Adg.Get(O)));this.BroadcastEvent(this.AtQ().InitializeUp(
O,this.Mg.Get(O)+1,false,tmp,this.RG.Get(O)),0x18);}else{this.XD.Set(O,(this.Ait.
Bs-this.AtR.Get(O))|0);if(this.XD.Get(O)<10)this.XD.Set(O,10);this.EP=O;this.Fv.
Get(O).G5(this.Ao_().InitializeHold(O,pos,this.Af4.Get(O),this.XD.Get(O),this.Mg.
Get(O)+1,this.XC.Get(O),this.RG.Get(O),this.Adg.Get(O)));Apq=true;}}if(!Apq)this.
Ait.As(false);},GetFPS:function(){var ticksCount=0;var BdS=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AKq&&(ticksCount>this.AKq))BdS=((this.AKp*1000)/((
ticksCount-this.AKq)|0))|0;this.AKp=0;this.AKq=ticksCount;return BdS;},Update:function(
){var B;if(!this.AtM)this.AtM=A._NewObject(A.Graphics.Canvas,0);this.AtM.ArZ([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtM.Update();return this.UpdateGE20(this.AtM);}
,UpdateGE20:function(C0){if(!this.BeginUpdate())return BD;var Agy=this.UpdateCanvas(
C0,Cf);this.EndUpdate();return Agy;},EndUpdate:function(){if(this.Kj>0){this.AKp=
this.AKp+1;this.Kj=0;}},UpdateCanvas:function(C0,aOffset){var B;var Agy=BD;var By7=[
].concat(aOffset,A.abf(C0.FrameSize,aOffset));var O;var Ik=this.Kj;this.ABJ=this.
ABJ+1;C0.C2=this;for(O=0;(O<Ik)&&(O<4);O=O+1)if(this.Oy.Get(O)>0){this.Ks(C0,A.abg(
this.Km.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agy=A.wC(Agy,A.lb(By7
,this.Km.Get(O)));}else Ik=Ik+1;C0.C2=null;this.ABJ=this.ABJ-1;if(!((Agy[0]>=Agy[
2])||(Agy[1]>=Agy[3])))return A.abg(Agy,aOffset);else return Agy;},GetUpdateRegion:
function(AJo){var O;var Ik=this.Kj;if(AJo<0)return BD;for(O=0;(O<Ik)&&(O<4);O=O+
1)if(!this.Oy.Get(O)){Ik=Ik+1;AJo=AJo+1;}else if(O===AJo)return this.Km.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kj&&!A.aaY(this.Km.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bg$=A.abi(3,A.wg,null);var Bg_=this.Kj;for(O=0;
O<Bg_;O++)Bg$.Set(O,this.Km.Get(O));for(O=0;O<Bg_;O++){var Bgq=A.abh(Bg$.Get(O),
this.M.slice(0,2));var Bgr=this.AuP(Bgq);if(!A.aaY(Bgq,Bgr))this.Bj(A.abg(Bgr,this.
M.slice(0,2)));}}var Ik;var RM;for(Ik=0;Ik<(this.Kj-1);Ik++)if(this.Oy.Get(Ik)>0
)for(RM=Ik+1;RM<this.Kj;RM++)if(this.Oy.Get(RM)>0){var ALx=A.aaH(A.wC(this.Km.Get(
Ik),this.Km.Get(RM)));if(((ALx-this.Oy.Get(Ik))-this.Oy.Get(RM))<0){this.Km.Set(
Ik,A.wC(this.Km.Get(Ik),this.Km.Get(RM)));this.Oy.Set(Ik,ALx);this.Oy.Set(RM,0);
}}for(O=this.Kj-1;O>=0;O--)if(!this.Oy.Get(O))this.Kj=this.Kj-1;return this.Kj;}
,DoesNeedUpdate:function(){if(this.Kj>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cf,aSize));if(this.Az_)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A1o){if(A1o===this.Az_
)return false;this.Az_=A1o;if(!A1o){if(!!this.JL)this.JL.C2.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JL)this.JL.C2.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qm){this.Ii=Qm;},DriveKeyboardHitting:function(
KG,Aza,Tl){var B;var A4m=!!this.RN;if(!!this.RN&&((!Tl||(this.AAn!==KG))||(this.
At6!==Aza))){var LO=null;var X=(C.Cj.isPrototypeOf(B=this.RN)?B:null);var D5=(C.
BF.isPrototypeOf(B=this.RN)?B:null);if(!!this.AAn)LO=A._NewObject(C.KeyEvent,0).
Initialize(this.AAn,false);if(this.At6!==0x00)LO=A._NewObject(C.KeyEvent,0).Initialize2(
this.At6,false);if(!!D5)D5.G5(LO);else if(!!X)X.G5(LO);this.AAn=0;this.At6=0x00;
this.RN=null;}if(!!this.RN){var LO=null;var X=(C.Cj.isPrototypeOf(B=this.RN)?B:null
);var D5=(C.BF.isPrototypeOf(B=this.RN)?B:null);if(!!KG)LO=A._NewObject(C.KeyEvent
,0).Initialize(KG,true);if(this.At6!==0x00)LO=A._NewObject(C.KeyEvent,0).Initialize2(
Aza,true);if(!!D5)D5.G5(LO);else if(!!X)X.G5(LO);}if(!this.RN&&Tl){if(!!KG)this.
RN=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KG,true));if(Aza!==0x00
)this.RN=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Aza,true));if(
!(C.BF.isPrototypeOf(B=this.RN)?B:null)&&!(C.Cj.isPrototypeOf(B=this.RN)?B:null)
)this.RN=null;this.AAn=KG;this.At6=Aza;A4m=A4m||!!this.RN;}this.Ii=0;return A4m;
},DriveCursorMovement:function(Fh){return this.DriveMultiTouchMovement(this.EP,Fh
);},DriveMultiTouchMovement:function(BH,Fh){if((BH<0)||(BH>9)){this.Ii=0;return false;
}var Fx=A.abe(Fh,this.RG.Get(BH));this.RG.Set(BH,Fh);if(!this.Fv.Get(BH)||A.aaX(
Fx,Cf)){this.Ii=0;return false;}var pos=Fh;var B1=this.Fv.Get(BH).Ab;while(!!B1&&(
B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(this.Fv.Get(BH)!==
this)){var tmp=this.Fv.Get(BH);this.EP=BH;this.Fv.Set(BH,null);tmp.G5(this.Ao_().
InitializeUp(BH,this.Ais.Get(BH),this.Af4.Get(BH),this.XD.Get(BH),this.Mg.Get(BH
)+1,this.XC.Get(BH),false,this.RG.Get(BH),this.Adg.Get(BH)));this.BroadcastEvent(
this.AtQ().InitializeUp(BH,this.Mg.Get(BH)+1,false,tmp,Fh),0x18);}else{this.Ais.
Set(BH,pos);this.EP=BH;this.Fv.Get(BH).G5(this.Bzo().Initialize(BH,pos,this.Af4.
Get(BH),Fx,this.XD.Get(BH),this.Mg.Get(BH)+1,this.XC.Get(BH),Fh,this.Adg.Get(BH)
));}this.Ii=0;return true;},DriveCursorHitting:function(Tl,BH,Fh){return this.DriveMultiTouchHitting(
Tl,BH,Fh);},DriveMultiTouchHitting:function(Tl,BH,Fh){if((BH<0)||(BH>9)){this.Ii=
0;return false;}var ticksCount=this.Ii;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BCj=this.Ii;this.DriveMultiTouchMovement(BH,Fh);Fh=this.RG.Get(BH);
this.Ii=BCj;if(Tl)this.Adg.Set(BH,Fh);if(Tl&&!this.Fv.Get(BH)){var JK;var pos=Fh;
if(A.wa(this.AJ4.Get(BH),Fh)&&((ticksCount-this.AtR.Get(BH))<=250))this.Mg.Set(BH
,this.Mg.Get(BH)+1);else this.Mg.Set(BH,0);this.AJ4.Set(BH,A.abh(MQ,Fh));this.AtR.
Set(BH,ticksCount);if(!!this.JL)JK=this.Yq(A.abh(MQ,Fh),BH,this.Mg.Get(BH)+1,this.
JL.C2,null,0x0);else JK=this.Yq(A.abh(MQ,Fh),BH,this.Mg.Get(BH)+1,null,null,0x0);
if(!!JK){this.BroadcastEvent(this.AtQ().InitializeDown(BH,this.Mg.Get(BH)+1,false
,JK.Cj,Fh),0x18);this.Fv.Set(BH,JK.Cj);this.XC.Set(BH,JK.DH);}else{this.Fv.Set(BH
,null);this.XC.Set(BH,Cf);this.Ii=0;return false;}var B1=JK.Cj.Ab;while(!!B1&&(B1
!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}this.Af4.Set(BH,pos);this.Ais.
Set(BH,pos);this.XD.Set(BH,0);this.Ait.As(true);this.EP=BH;this.Fv.Get(BH).G5(this.
Ao_().InitializeDown(BH,pos,this.Mg.Get(BH)+1,this.XC.Get(BH),false,Fh));this.Ii=
0;return true;}if(!Tl&&!!this.Fv.Get(BH)){var pos=Fh;var B1=this.Fv.Get(BH).Ab;while(
!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1)pos=this.Ais.
Get(BH);this.EP=BH;var tmp=this.Fv.Get(BH);this.Fv.Set(BH,null);tmp.G5(this.Ao_(
).InitializeUp(BH,pos,this.Af4.Get(BH),this.XD.Get(BH),this.Mg.Get(BH)+1,this.XC.
Get(BH),false,Fh,this.Adg.Get(BH)));this.BroadcastEvent(this.AtQ().InitializeUp(
BH,this.Mg.Get(BH)+1,false,tmp,Fh),0x18);this.Ii=0;return true;}this.Ii=0;return false;
},AUP:function(Aau,BcA,Ac8,Ac7){if(Aau===this)Aau=null;if(!!!Aau&&!!this.JL)Aau=
this.JL.C2;if(!this.Fv.Get(this.EP))return;var JK;JK=this.Yq(A.abh(MQ,this.RG.Get(
this.EP)),this.EP,1,Aau,Ac8,Ac7);if(!!JK&&(this.Fv.Get(this.EP)!==JK.Cj))this.AN2(
JK.Cj,JK.DH);if(!JK&&(this.Fv.Get(this.EP)!==BcA))this.AN2(BcA,Cf);},AN2:function(
Aau,Xs){if(!this.Fv.Get(this.EP)||(this.Fv.Get(this.EP)===Aau))return;var tmp=this.
Fv.Get(this.EP);this.Fv.Set(this.EP,null);tmp.G5(this.Ao_().InitializeUp(this.EP
,this.Ais.Get(this.EP),this.Af4.Get(this.EP),this.XD.Get(this.EP),this.Mg.Get(this.
EP)+1,this.XC.Get(this.EP),true,this.RG.Get(this.EP),this.Adg.Get(this.EP)));this.
BroadcastEvent(this.AtQ().InitializeUp(this.EP,this.Mg.Get(this.EP)+1,true,tmp,this.
RG.Get(this.EP)),0x18);var pos=this.RG.Get(this.EP);var B1=null;if(!!Aau)B1=Aau.
Ab;while(!!B1&&(B1!==this)){pos=A.abe(pos,B1.M.slice(0,2));B1=B1.Ab;}if(!B1&&(Aau
!==this)){this.Fv.Set(this.EP,null);return;}this.BroadcastEvent(this.AtQ().InitializeDown(
this.EP,this.Mg.Get(this.EP)+1,true,Aau,this.RG.Get(this.EP)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fv.Set(this.EP,Aau);this.XC.Set(
this.EP,Xs);this.Af4.Set(this.EP,pos);this.Ais.Set(this.EP,pos);this.Mg.Set(this.
EP,0);this.XD.Set(this.EP,0);this.AtR.Set(this.EP,ticksCount);this.Adg.Set(this.
EP,this.RG.Get(this.EP));this.Fv.Get(this.EP).G5(this.Ao_().InitializeDown(this.
EP,pos,this.Mg.Get(this.EP)+1,this.XC.Get(this.EP),true,this.Adg.Get(this.EP)));
},AO3:function(){if(!!this.JL)return this.JL.C2;return null;},AC0:function(KH){var
B;if(!KH)throw new Error(Te);if(!((KH.U&0x80)===0x80))throw new Error(U0);if(this.
JL.C2===KH)this.JL=this.JL.Ah;else{var Az9=this.JL;while(Az9.Ah.C2!==KH)Az9=Az9.
Ah;Az9.Ah=Az9.Ah.Ah;}KH.Cs(0x0,0xD0);if(this.Az_){if(!!this.JL)this.JL.C2.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AM9:function(KH){var B;var Ar=A._NewObject(C.A8i
,0);if(!KH)throw new Error(Aab);if(KH===null)throw new Error(Xe);if(((KH.U&0x80)===
0x80))throw new Error(Ix);if(!!this.JL)this.JL.C2.Cs(0x0,0x50);else this.Cs(0x0,
0x50);Ar.Ah=this.JL;Ar.C2=KH;this.JL=Ar;if(this.Az_)KH.Cs(0xD0,0x0);else KH.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ait={
I:this},0);(this.Fv=[]).__proto__=C.Root.Fv;(this.Mg=[]).__proto__=C.Root.Mg;(this.
AJ4=[]).__proto__=C.Root.AJ4;(this.XD=[]).__proto__=C.Root.XD;(this.Af4=[]).__proto__=
C.Root.Af4;(this.AtR=[]).__proto__=C.Root.AtR;(this.Ais=[]).__proto__=C.Root.Ais;(
this.XC=[]).__proto__=C.Root.XC;(this.RG=[]).__proto__=C.Root.RG;(this.Adg=[]).__proto__=
C.Root.Adg;(this.Oy=[]).__proto__=C.Root.Oy;(this.Km=[]).__proto__=C.Root.Km;this.
__proto__=C.Root;this.U=0x10007F;this.Ait.P0(10);this.Ait.MJ=[this,this.Bzs];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ait._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ait._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RN)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JL)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fv,D);if((B=this.
AtM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ait)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,Av0:false,Init:function(aArg){this.Bs=
this.Avz();},Avz:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CP:0,Dy:0,Down:false
,Initialize2:function(KG,Tl){this.CP=0;this.Dy=KG;this.Down=Tl;if((KG>=0x30)&&(KG<=
0x39))this.CP=(10+KG)-48;if((KG>=0x41)&&(KG<=0x5A))this.CP=(105+KG)-65;if((KG>=0x61
)&&(KG<=0x7A))this.CP=(105+KG)-97;if(KG===0x20)this.CP=131;if(!this.CP)switch(KG
){case 0x2B:this.CP=132;break;case 0x2D:this.CP=133;break;case 0x2A:this.CP=134;
break;case 0x2F:this.CP=135;break;case 0x3D:this.CP=136;break;case 0x2E:this.CP=
137;break;case 0x2C:this.CP=138;break;case 0x3A:this.CP=139;break;case 0x3B:this.
CP=140;break;default:;}return this;},Initialize:function(KG,Tl){this.CP=KG;this.
Down=Tl;this.Dy=0x00;var A14=KG-10;var AtL=KG-105;if((A14>=0)&&(A14<=9))this.Dy=(
48+A14)&0xFFFF;if((AtL>=0)&&(AtL<=25))this.Dy=(65+AtL)&0xFFFF;if(KG===131)this.Dy=
0x20;if(this.Dy===0x00)switch(KG){case 132:this.Dy=0x2B;break;case 133:this.Dy=0x2D;
break;case 134:this.Dy=0x2A;break;case 135:this.Dy=0x2F;break;case 136:this.Dy=0x3D;
break;case 137:this.Dy=0x2E;break;case 138:this.Dy=0x2C;break;case 139:this.Dy=0x3A;
break;case 140:this.Dy=0x3B;break;default:;}return this;},Bkg:function(Bcp){switch(
Bcp){case 141:return((this.Dy>=0x41)&&(this.Dy<=0x5A))||((this.Dy>=0x61)&&(this.
Dy<=0x7A));case 142:return(((this.Dy>=0x41)&&(this.Dy<=0x5A))||((this.Dy>=0x61)&&(
this.Dy<=0x7A)))||((this.Dy>=0x30)&&(this.Dy<=0x39));case 143:return(this.Dy>=0x30
)&&(this.Dy<=0x39);case 144:return(((this.Dy>=0x41)&&(this.Dy<=0x46))||((this.Dy>=
0x61)&&(this.Dy<=0x66)))||((this.Dy>=0x30)&&(this.Dy<=0x39));case 145:return this.
Dy!==0x00;case 146:return(this.Dy===0x00)&&!!this.CP;case 147:return(((this.CP===
6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:return(this.Dy!==0x00
)||!!this.CP;default:;}return Bcp===this.CP;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARO={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARO;},_className:
"Core::LanguageEvent"};C.Au6={AxV:null,L0:A.wf,Oc:0,IO:0,Down:false,NQ:false,InitializeUp:
function(BH,Om,AoI,A1G,Aat){this.Down=false;this.IO=BH;this.Oc=Om;this.L0=Aat;this.
AxV=A1G;this.NQ=AoI;return this;},InitializeDown:function(BH,Om,AoI,A1G,Aat){this.
Down=true;this.IO=BH;this.Oc=Om;this.L0=Aat;this.AxV=A1G;this.NQ=AoI;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Au6;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aeh={Ag5:A.wf,L0:A.wf,Oc:0,Jy:
0,NZ:A.wf,H5:A.wf,IO:0,Down:false,NQ:false,InitializeHold:function(BH,Alq,Azd,Aze
,Om,Xs,Aat,Azc){this.Down=true;this.IO=BH;this.H5=A.abf(Alq,Xs);this.NZ=A.abf(Azd
,Xs);this.Jy=Aze;this.Oc=Om;this.L0=Aat;this.Ag5=Azc;return this;},InitializeUp:
function(BH,Alq,Azd,Aze,Om,Xs,AoI,Aat,Azc){this.Down=false;this.IO=BH;this.H5=A.
abf(Alq,Xs);this.NZ=A.abf(Azd,Xs);this.Jy=Aze;this.Oc=Om;this.NQ=AoI;this.L0=Aat;
this.Ag5=Azc;return this;},InitializeDown:function(BH,Alq,Om,Xs,AoI,Aat){this.Down=
true;this.IO=BH;this.H5=A.abf(Alq,Xs);this.NZ=A.abf(Alq,Xs);this.Jy=0;this.Oc=Om;
this.NQ=AoI;this.L0=Aat;this.Ag5=Aat;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aeh;},_className:"Core::CursorEvent"};C.AqQ={
Ag5:A.wf,L0:A.wf,Oc:0,Jy:0,DH:A.wf,NZ:A.wf,H5:A.wf,IO:0,Initialize:function(BH,Alq
,Azd,aOffset,Aze,Byr,Xs,Aat,Azc){this.IO=BH;this.H5=A.abf(Alq,Xs);this.NZ=A.abf(
Azd,Xs);this.DH=aOffset;this.Jy=Aze;this.Oc=Byr;this.L0=Aat;this.Ag5=Azc;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqQ;},_className:
"Core::DragEvent"};C.Y={BY:null,NI:null,Em:null,Br:A.wf,AVk:0,Space:0,Ag3:0,Ks:function(
C0,aClip,aOffset,Ck,aBlend){},GetClipping:function(){var B;var Az=C.Eu.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap9=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap9=A.wC(Ap9,X.GetClipping());
Az=A.wC(Az,Ap9);}return Az;},Cs:function(Rx,Vc){var B;var Tw=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((Vc&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Eu.Cs.call(this,Rx,Vc);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rx&0x80000)===
0x80000))&&!((Tw&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al5=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKM=[
E[2]-E[0],E[3]-E[1]];var Ap5=!A.aaX(Al5,AKM);var Fx=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fx,Cf)&&!Ap5){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anp(Fx,tmp);}X=X.Ah;}A.pe(this.
Em,this);}if((Ap5&&(Al5[0]>0))&&(Al5[1]>0)){var Be=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Ev&&(X.Ev.
NK!==this))X.Ev=null;if(!X.Ev&&((X.PU!==0x14)||!!this.Ag3))X.At4(Be,this);}X=X.Ah;
}A.pe(this.Em,this);}C.Eu.H.call(this,E);if(!!this.Ab&&Ap5){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JP],this);}}},Bgk:function(){var B;if((!this.Ag3||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A2m=((this.U&0x1000)===0x1000);for(;!!X&&!A2m;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A2m=true;if(((X.U&0x200)===
0x200))break;}if(A2m){this.U=this.U&~0x4000;this.Ab.Bgv();}},ApQ:function(G){var
B;this.BY.Q=null;this.BY.QA=null;this.BY=null;(B=this.NI)?B[1].call(B[0],this):null;
},Gc:function(E){var B;var Fx=A.abe(E,this.Br);if(A.aaX(Fx,Cf))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anp(Fx,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.Em,this);},A_7:function(E){var B;if(E<0)E=0;if(E===this.AVk)return;this.AVk=
E;if(!!this.Ab&&!!this.Ag3){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JP],this);}},Boe:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Ag3){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JP],this);}},JZ:function(E){var B;if(E===this.Ag3)return;
this.Ag3=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JP],this);}},VG:function(Ac1,E9){var AtL=this.Dd(0x1);var RD=this.M;var
Vq=A.abe(AtL.slice(0,2),RD.slice(0,2));var Mi=A.abe(AtL.slice(2,4),RD.slice(2,4)
);var Bq=Cf;if((Vq[0]>0)&&(Mi[0]>Vq[0]))Bq=[Vq[0],Bq[1]];else if((Vq[0]>0)&&(Mi[
0]>0))Bq=[Mi[0],Bq[1]];if((Mi[0]<0)&&(Vq[0]<Mi[0]))Bq=[Mi[0],Bq[1]];else if((Mi[
0]<0)&&(Vq[0]<0))Bq=[Vq[0],Bq[1]];if((Vq[1]>0)&&(Mi[1]>Vq[1]))Bq=[Bq[0],Vq[1]];else
if((Vq[1]>0)&&(Mi[1]>0))Bq=[Bq[0],Mi[1]];if((Mi[1]<0)&&(Vq[1]<Mi[1]))Bq=[Bq[0],Mi[
1]];else if((Mi[1]<0)&&(Vq[1]<0))Bq=[Bq[0],Vq[1]];if(A.aaX(Bq,Cf)){(E9)?E9[1].call(
E9[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.
QA=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(A.abe(this.Br,Bq));(E9)?E9[
1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this,this.
AnA,this.Gc];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.QA=[this,this.
ApQ];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},HK:function(Ag,Ac5,Ac1,E9
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
U1);this.Bgk();var Az=Ag.GetExtent();var Be=this.M;var LT=A.lb(Az,Be);if((!Ac5&&
!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac5&&A.aaY(LT,Az))){(E9)?E9[1].call(E9[0],this
):null;return;}var Bq=Cf;if(Az[2]>Be[2])Bq=[Az[2]-Be[2],Bq[1]];if(Az[3]>Be[3])Bq=[
Bq[0],Az[3]-Be[3]];if(Bq[0]>(Az[0]-Be[0]))Bq=[Az[0]-Be[0],Bq[1]];if(Bq[1]>(Az[1]-
Be[1]))Bq=[Bq[0],Az[1]-Be[1]];if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.
BY.QA=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(A.abe(this.Br,Bq));(E9
)?E9[1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this
,this.AnA,this.Gc];this.BY.Cx=this.Br;this.BY.B3=A.abe(this.Br,Bq);this.BY.QA=[this
,this.ApQ];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},BjJ:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TX:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var I6=0x10000;if(((aFilter&0x10000)===0x10000))I6=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Dd:function(aFilter){var B;var X=this.Ah;var AE=BD;var I6=0x10000;this.Bgk();if(((
aFilter&0x10000)===0x10000))I6=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!I6||!((B=I6)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},AnA:function(){return this.Br;},_Init:
function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eu._Mark.call(this,D);if((B=this.BY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HC:null,BY:null,Cj:null,W1:null,NI:null,Em:null,Hn:null,Tt:-1,Ts:0,Ju:-1,Hu:0,AiL:
8,Ot:0,UF:0,AcO:A.wf,G7:-1,Br:0,Gu:-1,OY:0,GP:24,AZ:0,Lo:null,NW:false,At7:false
,AVr:function(Iy,Ol,Xr,Tm,Tn,Aia,Pf,Rw,LE,LC,LD){throw new Error(Aac);},AqO:function(
Iy,Aia,Pf,Rw,LE,LC,LD){throw new Error(U2);},AkO:function(Iy,Ol,Xr,Tm,Tn,Pf,Rw,LE
,LC,LD){throw new Error(Aad);},DispatchEvent:function(CN){var B;var result=null;
if(((this.Gu>=0)&&(this.Gu<this.AZ))&&!this.AV){this.G7=this.Gu;this.Cj=(C.Cj.isPrototypeOf(
B=A._NewObject(this.Lo,0))?B:null);if(!!this.B9)this.B9.Ah=this.Cj;else this.B8=
this.Cj;this.Cj.AJ=this.B9;this.B9=this.Cj;this.Cj.Ab=this;this.AcO=[(B=this.M)[
2]-B[0],this.GP];(B=this.Hn)?B[1].call(B[0],this):null;var B1=(C.P.isPrototypeOf(
B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(CN);else result=this.Cj.G5(CN
);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B8=null;this.B9=this.Cj.AJ;this.Cj.
AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Lo){A.pe(this.Em,this);return;
}this.At7=true;var AA5=0;if(!this.NW)AA5=this.OY;var FU=this.Amc(-AA5-this.Br,1);
var G2=this.Amc(((((B=this.M)[3]-B[1])-AA5)-this.Br)-1,2);var CB=G2-FU;if(CB<1)CB=
1;var Ain=(CB/2)|0;var Aio=(CB/3)|0;if(!Ain)Ain=1;if(!Aio)Aio=1;if(FU<this.Hu){FU=
FU-Ain;G2=G2+Aio;}else if(G2>this.Ju){FU=FU-Aio;G2=G2+Ain;}else{FU=this.Hu;G2=this.
Ju;}if(!this.NW){if(FU>=this.AZ){FU=0;G2=-1;}else if(G2<0){FU=0;G2=-1;}if(G2>=this.
AZ)G2=this.AZ-1;if(FU<0)FU=0;}else if(this.AZ<=0){FU=0;G2=-1;}var Ai1=this.Hu;var
Ai2=this.Ju;var ApD=0;var ApE=-1;if(FU>Ai1)Ai1=FU;if(G2<Ai2)Ai2=G2;if(Ai1<=Ai2){
while((this.Ju<G2)&&(this.Hu<Ai1)){this.AdI();this.AzE();}while((this.Hu>FU)&&(this.
Ju>Ai2)){this.ABg();this.AzD();}}else{this.Ju=(this.Ju-this.Hu)+FU;this.Hu=FU;ApD=
this.Hu;ApE=this.Ju;}while(this.Hu<FU)this.AdI();while(this.Ju>G2)this.ABg();while(
this.Hu>FU)this.AzD();while(this.Ju<G2)this.AzE();var Aa=this.B8;var inx=this.Hu;
var pos=[0,(AA5+this.Br)+this.Jr(inx,0)];var BL=(B=this.M)[3]-B[1];var AlN=null;
var Bhj=(B=this.M)[2]-B[0];while(!!Aa){var IF=inx;if(this.NW){if(IF<0)IF=this.AZ-(-
IF%this.AZ);if(IF>0)IF=IF%this.AZ;}var AdJ=((IF>=this.Ts)&&(IF<=this.Tt))||((inx>=
ApD)&&(inx<=ApE));var Apj=Aa.GetExtent();var Bq=A.abe(pos,Apj.slice(0,2));if(AdJ
)this.UF=this.GP;else this.UF=Apj[3]-Apj[1];var A24=pos[1];var A25=pos[1]+this.UF;
if(!A.aaX(Bq,Cf))Aa.Anp(Bq,true);if((AdJ&&(A24<BL))&&(A25>0)){this.Cj=Aa;this.G7=
IF;this.AcO=[Bhj,this.UF];(B=this.Hn)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.UF];}inx=this.Hu;Aa=this.B8;pos=[0,(AA5+this.Br)+this.Jr(
inx,0)];while(!!Aa){var IF=inx;if(this.NW){if(IF<0)IF=this.AZ-(-IF%this.AZ);if(IF>
0)IF=IF%this.AZ;}var AdJ=((IF>=this.Ts)&&(IF<=this.Tt))||((inx>=ApD)&&(inx<=ApE)
);if(AdJ)this.UF=this.GP;else this.UF=(B=Aa.GetExtent())[3]-B[1];var A24=pos[1];
var A25=pos[1]+this.UF;if(AdJ&&!((A24<BL)&&(A25>0))){this.Cj=Aa;this.G7=IF;this.
AcO=[Bhj,this.UF];(B=this.Hn)?B[1].call(B[0],this):null;}if(((IF===this.Gu)&&this.
NW)&&!!AlN){var RD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),RD))>A.aaH(A.lb(AlN.GetExtent(),RD)))AlN=Aa;}else if(IF===this.Gu)AlN=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.UF];}this.Ts=0;this.Tt=-1;this.Cj=null;this.G7=-
1;this.Bb(AlN);this.At7=false;A.pe(this.Em,this);},QM:function(Ag,GA,aFilter){return null;
},AqV:function(Ag,aFilter){return null;},TX:function(Ag,aFilter){return null;},AC8:
function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NX:function(
KH,FQ,LE,LC,LD){throw new Error(Xf);},AhG:function(Ag,Kb){throw new Error(Aae);}
,ZL:function(Ag){throw new Error(Aaf);},J5:function(Ag,Ql){throw new Error(U3);}
,HR:function(Ag){throw new Error(Xg);},AMo:function(Ag,Kb){throw new Error(Pa);}
,J:function(Ag,Ql){throw new Error(Aag);},Jr:function(Ha,A1f){return Ha*this.GP;
},Amc:function(Fh,A1f){return(Fh/this.GP)|0;},ABg:function(){var Aa=this.B9;if(!
Aa)return null;if(Aa===this.AV)this.Bb(null);this.Ju=this.Ju-1;if(!!Aa.AJ)Aa.AJ.
Ah=null;else this.B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.
Ot<this.AiL){if(!!this.HC)this.HC.AJ=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;
},AzE:function(){var B;var Aa=this.HC;var Ads=this.Lo;var AdM=++this.Ju;if(this.
NW){if(AdM<0)AdM=this.AZ-(-AdM%this.AZ);if(AdM>0)AdM=AdM%this.AZ;}while(!!Aa&&(((
B=Aa)?B.__proto__:null)!==Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!
Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;
}else{Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.
Ot)this.AiL++;}this.UF=this.GP;this.G7=AdM;this.AcO=[(B=this.M)[2]-B[0],this.UF];
this.Cj=Aa;(B=this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G7=-1;if(!!this.
B9)this.B9.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(AdM===
this.Gu)this.Bb(Aa);return Aa;},AdI:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Hu=this.Hu+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.
B9=null;this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiL){if(!
!this.HC)this.HC.AJ=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;},AzD:function(
){var B;var Aa=this.HC;var Ads=this.Lo;var M9=--this.Hu;if(this.NW){if(M9<0)M9=this.
AZ-(-M9%this.AZ);if(M9>0)M9=M9%this.AZ;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==
Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.
HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;}else{Aa=(C.Cj.isPrototypeOf(
B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiL++;}this.UF=this.
GP;this.G7=M9;this.AcO=[(B=this.M)[2]-B[0],this.UF];this.Cj=Aa;(B=this.Hn)?B[1].
call(B[0],this):null;this.Cj=null;this.G7=-1;if(!!this.B8)this.B8.AJ=Aa;Aa.Ab=this;
Aa.Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(M9===this.Gu)this.Bb(Aa);return Aa;
},ApQ:function(G){var B;this.BY.Q=null;this.BY.QA=null;this.BY=null;(B=this.NI)?
B[1].call(B[0],this):null;},BBG:function(G){this.Gc(this.W1.DH[1]);},BBH:function(
G){var B;if(!!this.BY){this.BY.As(false);this.BY.Q=null;this.BY.QA=null;this.BY=
null;}if(!this.NW){var AE=this.Aq2(0,this.AZ-1);var Agn=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OY);if(AE[0]>Agn[0])AE=[].concat(Agn[0],AE.slice(1,4));if(AE[1]>Agn[
1])AE=A.abP(AE,Agn[1]);var Fx=AE[1]-this.M[1];var A3j=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A3j>0)A3j=0;this.W1.DH=[0,this.Br];this.W1.Gq=[0,(this.Br+A3j)-Fx];this.
W1.F$=[0,this.Br-Fx];}else{var Fx=32000-(32000%this.GP);this.W1.DH=[0,this.Br];this.
W1.Gq=[0,this.Br-Fx];this.W1.F$=[0,this.Br+Fx];}},ATs:function(E){var B;if(this.
NW===E)return;this.NW=E;while(!!this.AdI());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Axc:function(E){if(E===this.W1)return;if(!!E&&!!E.Aui){A.ab5(
"%s%*%s",Oi,E,Rq);throw new Error(Xh);}if(!!this.W1){this.W1.AKZ=null;this.W1.Aui=
null;}this.W1=E;if(!!E){E.AKZ=[this,this.BBH];E.Aui=[this,this.BBG];}},Gc:function(
E){var B;if(this.NW&&(this.AZ>0)){var HF=this.Jr(this.AZ,3);if(E<0)E=HF-(-E%HF);
if(E>0)E=E%HF;if(E>0)E=E-HF;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GW:function(E){if(E<0)E=-1;if(E===this.Gu)return;
this.Gu=E;this.Am();},A_U:function(E){var B;if(E<0)E=0;if(E===this.OY)return;this.
OY=E;if(!this.NW){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae_:function(
E){var B;if(E<1)E=1;if(E===this.GP)return;this.GP=E;while(!!this.AdI());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JD:function(E){var B;if(E<0)E=0;
if(E===this.AZ)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){if(
E>this.AZ){AE=[].concat(AE.slice(0,3),(this.OY+this.Br)+this.Jr(E,3));AE=A.abP(AE
,(this.OY+this.Br)+this.Jr(this.AZ,3));}else{AE=A.abP(AE,(this.OY+this.Br)+this.
Jr(E,3));AE=[].concat(AE.slice(0,3),(this.OY+this.Br)+this.Jr(this.AZ,3));}}else
while(!!this.AdI());this.AZ=E;this.Am();this.Bj(AE);},N8:function(E){var B;if(E===
this.Lo)return;this.Lo=E;while(!!this.AdI());this.HC=null;this.Ot=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjW:function(Ha){if(this.At7)return null;
if((Ha<0)||(Ha>=this.AZ))return null;if(!this.NW){if((Ha<this.Hu)||(Ha>this.Ju))
return null;var X=this.B8;while(Ha>this.Hu){X=X.Ah;Ha=Ha-1;}return X;}else{var M9=
this.Hu;if(M9<0)M9=this.AZ-(-M9%this.AZ);if(M9>0)M9=M9%this.AZ;var X=this.B8;while(
!!X){if((M9%this.AZ)===Ha)return X;X=X.Ah;M9=M9+1;}return null;}},AB0:function(Ac1
,E9){var B;if(this.NW){(E9)?E9[1].call(E9[0],this):null;return;}var AKr=this.Br;
var BdT=((((B=this.M)[3]-B[1])-this.Br)-this.OY)-this.Jr(this.AZ,3);var Bq=0;if(
AKr>0)Bq=-AKr;else if(BdT>0)Bq=BdT;if((Bq>0)&&(Bq>-AKr))Bq=-AKr;if(!Bq){(E9)?E9[
1].call(E9[0],this):null;return;}if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.QA=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(this.Br+Bq);(E9)?
E9[1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this
,this.AnA,this.Gc];this.BY.Cx=this.Br;this.BY.B3=this.Br+Bq;this.BY.QA=[this,this.
ApQ];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},HK:function(Ha,Ac5,Ac1,E9
){var B;if((Ha<0)||(Ha>=this.AZ))return;var Az=this.Aq2(Ha,Ha);var Be=this.M;var
LT=A.lb(Az,Be);if((!Ac5&&!((LT[0]>=LT[2])||(LT[1]>=LT[3])))||(Ac5&&A.aaY(LT,Az))
){(E9)?E9[1].call(E9[0],this):null;return;}var Bq=0;if(Az[3]>Be[3])Bq=Az[3]-Be[3
];if(Bq>(Az[1]-Be[1]))Bq=Az[1]-Be[1];if(!!this.BY){this.BY.As(false);this.BY.Q=null;
this.BY.QA=null;this.NI=null;}this.BY=Ac1;if(!this.BY){this.Gc(this.Br-Bq);(E9)?
E9[1].call(E9[0],this):null;}else{this.BY.As(false);this.BY.HQ(1);this.BY.Q=[this
,this.AnA,this.Gc];this.BY.Cx=this.Br;this.BY.B3=this.Br-Bq;this.BY.QA=[this,this.
ApQ];this.BY.Afb(false);this.BY.As(true);this.NI=E9;}},BjO:function(){return BD;
},AO5:function(){if((this.OY<=0)||this.NW)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OY);return AE;},A7i:function(Fh
){if(((this.AZ<=0)||(Fh[0]<this.M[0]))||(Fh[0]>=this.M[2]))return-1;Fh=A.abe(Fh,
this.M.slice(0,2));if(!this.NW){var Aa=(Fh[1]-this.Br)-this.OY;if(Aa>0)Aa=this.Amc(
Aa,0);if((Aa<0)||(Aa>=this.AZ))return-1;return Aa;}var Aa=Fh[1]-this.Br;if(Aa>0)
Aa=this.Amc(Aa,0);if(Aa<0)Aa=this.Amc(Aa,0)-1;if(Aa<0)Aa=this.AZ-(-Aa%this.AZ);if(
Aa>0)Aa=Aa%this.AZ;return Aa;},Aq2:function(J$,Mb){if(J$<0)J$=0;if(Mb>=this.AZ)Mb=
this.AZ-1;if(J$>Mb)return BD;var AE=this.M;var Bq=this.Br;if(this.NW){var HF=this.
Jr(this.AZ,3);if(Bq<0)Bq=HF-(-Bq%HF);if(Bq>0)Bq=Bq%HF;if(Bq>0)Bq=Bq-HF;}else Bq=
Bq+this.OY;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jr(Mb+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jr(J$,0));return AE;},AbN:function(J$,Mb){var B;if(J$<0)J$=0;if(J$>Mb
)return;if(this.Ts>this.Tt){this.Ts=J$;this.Tt=Mb;}else{if(J$<this.Ts)this.Ts=J$;
if(Mb>this.Tt)this.Tt=Mb;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NW){
AE=A.abP(AE,(this.OY+this.Br)+this.Jr(J$,0));AE=[].concat(AE.slice(0,3),(this.OY+
this.Br)+this.Jr(Mb+1,0));}else if((this.Jr(this.AZ-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HF=this.Jr(this.AZ,3);if(Bq<0)Bq=HF-(-Bq%HF);if(
Bq>0)Bq=Bq%HF;if(Bq>0)Bq=Bq-HF;AE=A.abP(AE,Bq+this.Jr(J$,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jr(Mb+1,0));}this.Am();this.Bj(AE);},AnA:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(Xi);
this.Lo=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HC
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.W1)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hn)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.DB={HC:null
,BY:null,Cj:null,NI:null,Hn:null,Tt:-1,Ts:0,Ju:-1,Hu:0,AiL:8,Ot:0,ST:0,AcO:A.wf,
G7:-1,Br:0,Gu:-1,Wl:24,AZ:0,Lo:null,At7:false,AVr:function(Iy,Ol,Xr,Tm,Tn,Aia,Pf
,Rw,LE,LC,LD){throw new Error(Tf);},AqO:function(Iy,Aia,Pf,Rw,LE,LC,LD){throw new
Error(Xj);},AkO:function(Iy,Ol,Xr,Tm,Tn,Pf,Rw,LE,LC,LD){throw new Error(Aah);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gu>=0)&&(this.Gu<this.AZ))&&!this.AV
){this.G7=this.Gu;this.Cj=(C.Cj.isPrototypeOf(B=A._NewObject(this.Lo,0))?B:null);
if(!!this.B9)this.B9.Ah=this.Cj;else this.B8=this.Cj;this.Cj.AJ=this.B9;this.B9=
this.Cj;this.Cj.Ab=this;this.AcO=[this.ST,(B=this.M)[3]-B[1]];(B=this.Hn)?B[1].call(
B[0],this):null;var B1=(C.P.isPrototypeOf(B=this.Cj)?B:null);if(!!B1)result=B1.DispatchEvent(
CN);else result=this.Cj.G5(CN);if(!!this.Cj.AJ)this.Cj.AJ.Ah=null;else this.B8=null;
this.B9=this.Cj.AJ;this.Cj.AJ=null;this.Cj.Ab=null;this.Cj=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Lo
)return;this.At7=true;var FU=this.Amc(0-this.Br,1);var G2=this.Amc((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=G2-FU;if(CB<1)CB=1;var Ain=(CB/2)|0;var Aio=(CB/3)|
0;if(!Ain)Ain=1;if(!Aio)Aio=1;if(FU<this.Hu){FU=FU-Ain;G2=G2+Aio;}else if(G2>this.
Ju){FU=FU-Aio;G2=G2+Ain;}else{FU=this.Hu;G2=this.Ju;}if(FU>=this.AZ){FU=0;G2=-1;
}else if(G2<0){FU=0;G2=-1;}if(G2>=this.AZ)G2=this.AZ-1;if(FU<0)FU=0;var Ai1=this.
Hu;var Ai2=this.Ju;var ApD=0;var ApE=-1;if(FU>Ai1)Ai1=FU;if(G2<Ai2)Ai2=G2;if(Ai1<=
Ai2){while((this.Ju<G2)&&(this.Hu<Ai1)){this.AdI();this.AzE();}while((this.Hu>FU
)&&(this.Ju>Ai2)){this.ABg();this.AzD();}}else{this.Ju=(this.Ju-this.Hu)+FU;this.
Hu=FU;ApD=this.Hu;ApE=this.Ju;}while(this.Hu<FU)this.AdI();while(this.Ju>G2)this.
ABg();while(this.Hu>FU)this.AzD();while(this.Ju<G2)this.AzE();var Aa=this.B8;var
inx=this.Hu;var pos=[this.Br+this.Jr(inx,0),0];var BZ=(B=this.M)[2]-B[0];var AlN=
null;var Bg8=(B=this.M)[3]-B[1];while(!!Aa){var IF=inx;var AdJ=((IF>=this.Ts)&&(
IF<=this.Tt))||((inx>=ApD)&&(inx<=ApE));var Apj=Aa.GetExtent();var Bq=A.abe(pos,
Apj.slice(0,2));if(AdJ)this.ST=this.Wl;else this.ST=Apj[2]-Apj[0];var A22=pos[0];
var A23=pos[0]+this.ST;if(!A.aaX(Bq,Cf))Aa.Anp(Bq,true);if((AdJ&&(A22<BZ))&&(A23>
0)){this.Cj=Aa;this.G7=IF;this.AcO=[this.ST,Bg8];(B=this.Hn)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.ST,pos[1]];}inx=this.Hu;Aa=this.B8;pos=[
this.Br+this.Jr(inx,0),0];while(!!Aa){var IF=inx;var AdJ=((IF>=this.Ts)&&(IF<=this.
Tt))||((inx>=ApD)&&(inx<=ApE));if(AdJ)this.ST=this.Wl;else this.ST=(B=Aa.GetExtent(
))[2]-B[0];var A22=pos[0];var A23=pos[0]+this.ST;if(AdJ&&!((A22<BZ)&&(A23>0))){this.
Cj=Aa;this.G7=IF;this.AcO=[this.ST,Bg8];(B=this.Hn)?B[1].call(B[0],this):null;}if(
IF===this.Gu)AlN=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.ST,pos[1]];}this.Ts=0;this.
Tt=-1;this.Cj=null;this.G7=-1;this.Bb(AlN);this.At7=false;},QM:function(Ag,GA,aFilter
){return null;},AqV:function(Ag,aFilter){return null;},TX:function(Ag,aFilter){return null;
},AC8:function(Ag,aFilter){return null;},Dd:function(aFilter){return BD;},NX:function(
KH,FQ,LE,LC,LD){throw new Error(Xk);},AhG:function(Ag,Kb){throw new Error(Xl);},
ZL:function(Ag){throw new Error(Tg);},J5:function(Ag,Ql){throw new Error(Th);},HR:
function(Ag){throw new Error(Ti);},AMo:function(Ag,Kb){throw new Error(Aai);},J:
function(Ag,Ql){throw new Error(Tj);},Jr:function(Ha,A1f){return Ha*this.Wl;},Amc:
function(Fh,A1f){return(Fh/this.Wl)|0;},ABg:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Ju=this.Ju-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiL){if(!
!this.HC)this.HC.AJ=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;},AzE:function(
){var B;var Aa=this.HC;var Ads=this.Lo;var AdM=++this.Ju;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;}else{
Aa=(C.Cj.isPrototypeOf(B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.
AiL++;}this.ST=this.Wl;this.G7=AdM;this.AcO=[this.ST,(B=this.M)[3]-B[1]];this.Cj=
Aa;(B=this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G7=-1;if(!!this.B9)this.
B9.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(AdM===this.
Gu)this.Bb(Aa);return Aa;},AdI:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hu=this.Hu+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Ev=null;if(this.Ot<this.AiL){if(!!this.HC
)this.HC.AJ=Aa;Aa.Ah=this.HC;this.HC=Aa;this.Ot++;}return Aa;},AzD:function(){var
B;var Aa=this.HC;var Ads=this.Lo;var M9=--this.Hu;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ads))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HC===Aa)this.HC=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ot--;}else{Aa=(C.Cj.
isPrototypeOf(B=A._NewObject(Ads,0))?B:null);Aa.A1(0x1D);if(!!this.Ot)this.AiL++;
}this.ST=this.Wl;this.G7=M9;this.AcO=[this.ST,(B=this.M)[3]-B[1]];this.Cj=Aa;(B=
this.Hn)?B[1].call(B[0],this):null;this.Cj=null;this.G7=-1;if(!!this.B8)this.B8.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(M9===this.Gu
)this.Bb(Aa);return Aa;},ApQ:function(G){var B;this.BY.Q=null;this.BY.QA=null;this.
BY=null;(B=this.NI)?B[1].call(B[0],this):null;},Gc:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GW:function(
E){if(E<0)E=-1;if(E===this.Gu)return;this.Gu=E;this.Am();},AFE:function(E){var B;
if(E<1)E=1;if(E===this.Wl)return;this.Wl=E;while(!!this.AdI());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},JD:function(E){var B;if(E<0)E=0;if(E===this.
AZ)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AZ){AE=[].concat(this.
Br+this.Jr(this.AZ,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jr(E,3));}else{AE=
A.abN(AE,this.Br+this.Jr(this.AZ,3));AE=[].concat(this.Br+this.Jr(E,3),AE.slice(
1,4));}this.AZ=E;this.Am();this.Bj(AE);},N8:function(E){var B;if(E===this.Lo)return;
this.Lo=E;while(!!this.AdI());this.HC=null;this.Ot=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BpS:function(Bys,Byt){if(!this.BY)return;if(Bys)this.Gc(
this.BY.B3);var A4Z=this.NI;this.BY.As(false);this.BY.Q=null;this.BY.QA=null;this.
NI=null;this.BY=null;if(Byt)(A4Z)?A4Z[1].call(A4Z[0],this):null;},Bkl:function(){
return!!this.BY;},HK:function(Ha,Ac5,Ac1,E9){var B;if((Ha<0)||(Ha>=this.AZ))return;
var Az=this.Aq2(Ha,Ha);var Be=this.M;var LT=A.lb(Az,Be);if((!Ac5&&!((LT[0]>=LT[2
])||(LT[1]>=LT[3])))||(Ac5&&A.aaY(LT,Az))){(E9)?E9[1].call(E9[0],this):null;return;
}var Bq=0;if(Az[2]>Be[2])Bq=Az[2]-Be[2];if(Bq>(Az[0]-Be[0]))Bq=Az[0]-Be[0];if(!!
this.BY){this.BY.As(false);this.BY.Q=null;this.BY.QA=null;this.NI=null;}this.BY=
Ac1;if(!this.BY){this.Gc(this.Br-Bq);(E9)?E9[1].call(E9[0],this):null;}else{this.
BY.As(false);this.BY.HQ(1);this.BY.Q=[this,this.AnA,this.Gc];this.BY.Cx=this.Br;
this.BY.B3=this.Br-Bq;this.BY.QA=[this,this.ApQ];this.BY.Afb(false);this.BY.As(true
);this.NI=E9;}},Aq2:function(J$,Mb){if(J$<0)J$=0;if(Mb>=this.AZ)Mb=this.AZ-1;if(
J$>Mb)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jr(Mb+1
,0));AE=[].concat((AE[0]+Bq)+this.Jr(J$,0),AE.slice(1,4));return AE;},AbN:function(
J$,Mb){var B;if(J$<0)J$=0;if(J$>Mb)return;if(this.Ts>this.Tt){this.Ts=J$;this.Tt=
Mb;}else{if(J$<this.Ts)this.Ts=J$;if(Mb>this.Tt)this.Tt=Mb;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jr(J$,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jr(Mb+1,0));this.Am();this.Bj(AE);},AnA:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.DB;this.H(Xi);
this.Lo=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HC
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASG:null,AE5:null,Awe:null,D1:null,
Lt:null,BG:null,ALm:0,Bp:0,IO:0,Bs:0,Oc:0,Jy:0,DH:A.wf,NZ:A.wf,H5:A.wf,AxD:8,Afi:
0,A8b:1,Down:false,YP:false,NQ:false,A2t:false,AAy:0,Ks:function(C0,aClip,aOffset
,Ck,aBlend){},G5:function(CN){var B;var BO=(C.Aeh.isPrototypeOf(CN)?CN:null);var
D4=(C.AqQ.isPrototypeOf(CN)?CN:null);var AKB=this.YP;var AaR;var Vn;var ABB;var M6;
var AzW;if(!BO&&!D4)return null;AaR=(!!BO&&BO.Down)&&!BO.Jy;Vn=(!!BO&&BO.Down)&&(
BO.Jy>0);ABB=(!!BO&&BO.Down)&&(BO.Jy>this.AAy);M6=!!BO&&!BO.Down;AzW=!!D4;if(AaR
)this.AAy=((B=(BO.NQ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afi&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var ID=(C.Au6.isPrototypeOf(CN)?CN:null);if(((
!!ID&&ID.Down)&&(ID.AxV!==this))&&A.wa(this.GetExtent(),this.Ab.A78(ID.L0))){this.
ALm=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaR){var ApK=0;var Adn;this.Bp=
this.Bp|(1<<BO.IO);for(Adn=this.Bp&4095;Adn>0;Adn=Adn>>1)if(!!(Adn&1))ApK=ApK+1;
if(ApK===1)this.Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M6&&(this.Bp<16777216)){
var II=this.Iq();var JK=null;if(!!II){var A4Q=(!!this.AJ?this.AJ:this.Ab);var A2h=(
!!II.JL?II.JL.C2:null);JK=II.Yq(A.abh(Aaj,BO.L0),BO.IO,BO.Oc,A2h,A4Q,0x0);}if(!!
JK){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Cj.G5(A._NewObject(C.Aeh,0).
InitializeDown(O,BO.H5,BO.Oc,Cf,true,BO.L0));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JK.Cj.G5(A._NewObject(C.Aeh,0).InitializeUp(O,BO.H5,BO.H5,0,BO.Oc,Cf,false,BO.
L0,BO.L0));}}if(M6)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABB&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(M6&&BO.NQ)this.Bp=this.Bp|67108864;if(M6&&!(this.Bp&
4095))this.ALm=0x0;if(M6&&!(this.Bp&16777215))this.Bp=0;if(Vn&&(this.Bp>=67108864
)){var II=this.Iq();if(!!II)II.AUP(null,null,this,this.ALm);}if((Vn&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Vn=false;M6=true;}if(!!BO&&!(this.Bp&(4096<<BO.
IO)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IO)))return this;if(M6&&!(this.Bp&
16777216))return this;if(((AaR||AzW)||Vn)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(M6)this.Bp=this.Bp&3758100479;if(M6&&!(this.Bp&16777215))this.
Bp=0;if(!!BO){this.Down=AaR||Vn;this.YP=this.ARz(BO.H5);this.NZ=BO.NZ;this.H5=BO.
H5;this.DH=Cf;this.Jy=BO.Jy;this.Oc=BO.Oc;this.NQ=BO.NQ;this.IO=BO.IO;this.Bs=BO.
Bs;if(BO.Down&&!BO.Jy)AKB=false;}if(!!D4){this.Down=true;this.YP=this.ARz(D4.H5);
this.NZ=D4.NZ;this.H5=D4.H5;this.DH=D4.DH;this.Jy=D4.Jy;this.Oc=D4.Oc;this.IO=D4.
IO;this.NQ=false;this.Bs=D4.Bs;}var A2n=this.Down;if(!!D4)(B=this.ASG)?B[1].call(
B[0],this):null;if((!!BO&&this.Down)&&!this.Jy)(B=this.BG)?B[1].call(B[0],this):
null;if((!!BO&&this.Down)&&(this.Jy>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YP)&&!AKB){this.A2t=true;(B=this.Awe)?B[1].call(B[0],this):null;
}if(this.A2t&&(((A2n&&!this.YP)&&AKB)||((!A2n&&this.YP)&&AKB))){this.A2t=false;(
B=this.AE5)?B[1].call(B[0],this):null;}if(!!BO&&!A2n)(B=this.Lt)?B[1].call(B[0],
this):null;if(!!this.Afi){var AdH=0x0;if(((((this.Afi&0x10)===0x10)&&!!BO)&&BO.Down
)&&(BO.Jy>=1000))AdH=0x10;if((((this.Afi&0x1)===0x1)&&!!D4)&&((D4.L0[1]-D4.Ag5[1
])<=-this.AxD))AdH=0x1;if((((this.Afi&0x2)===0x2)&&!!D4)&&((D4.L0[1]-D4.Ag5[1])>=
this.AxD))AdH=0x2;if((((this.Afi&0x4)===0x4)&&!!D4)&&((D4.L0[0]-D4.Ag5[0])<=-this.
AxD))AdH=0x4;if((((this.Afi&0x8)===0x8)&&!!D4)&&((D4.L0[0]-D4.Ag5[0])>=this.AxD)
)AdH=0x8;if(!!AdH){var II=this.Iq();if(!!II){this.ALm=AdH;II.AUP(null,this,this,
AdH);}}}return this;},Yq:function(Dc,BH,Om,Aas,Ac8,Ac7){var B;if(!!Aas&&(Aas!==this
))return null;if((Om<1)||(Om>this.A8b))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!!(Ac7&this.Afi))return null;
if(this.Bj0()){var Az=A.lb(Dc,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qo=A.aaI(Dc);var Fx=Cf;if(Qo[0]<Az[0])Fx=[Az[0]-Qo[0],Fx[1]];if(Qo[0]>=
Az[2])Fx=[(Az[2]-Qo[0])-1,Fx[1]];if(Qo[1]<Az[1])Fx=[Fx[0],Az[1]-Qo[1]];if(Qo[1]>=
Az[3])Fx=[Fx[0],(Az[3]-Qo[1])-1];return A._NewObject(C.Au7,0).Initialize(this,Fx
);}}else{var HD=A.abi(9,A.wf,null);var O;HD.Set(0,A.aaI(Dc));HD.Set(1,HD.Get(0));
HD.Set(2,HD.Get(0));HD.Set(3,HD.Get(0));HD.Set(4,HD.Get(0));HD.Set(1,[Dc[0],HD.Get(
1)[1]]);HD.Set(2,[HD.Get(2)[0],Dc[1]]);HD.Set(3,[Dc[2],HD.Get(3)[1]]);HD.Set(4,[
HD.Get(4)[0],Dc[3]]);HD.Set(5,Dc.slice(0,2));HD.Set(6,[Dc[2],Dc[1]]);HD.Set(7,[Dc[
0],Dc[3]]);HD.Set(8,Dc.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARz(HD.Get(O)))return A.
_NewObject(C.Au7,0).Initialize(this,A.abe(HD.Get(O),HD.Get(0)));}return null;},Bn8:
function(E){if(E<1)E=1;this.AxD=E;},AFN:function(E){if(E<1)E=1;this.A8b=E;},As:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZJ._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZJ._Mark.call(this,D);if((B=this.ASG)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AE5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Awe
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Ic={timer:null,AKZ:null,Aui:null,AGn:null,Zt:null,SQ:null,Bp:0,AJA:0,Adq:5000
,Ap4:0,AKA:A.wf,Apg:0,AfT:0,EY:0,Amo:0,Auw:0,Apf:0,AfS:0,EX:0,Amn:0,Aml:0,NZ:A.wf
,A6t:A.wf,F$:A.wf,Gq:A.wf,DH:A.wf,W3:A.wf,A67:0.5,A$M:true,AG4:true,ZU:false,XP:
false,XQ:false,Ao1:false,AAy:0,Ks:function(C0,aClip,aOffset,Ck,aBlend){},G5:function(
CN){var B;var BO=(C.Aeh.isPrototypeOf(CN)?CN:null);var D4=(C.AqQ.isPrototypeOf(CN
)?CN:null);var ID=(C.Au6.isPrototypeOf(CN)?CN:null);var AaR;var Vn;var ABB;var M6;
var AzW;AaR=(!!BO&&BO.Down)&&!BO.Jy;Vn=(!!BO&&BO.Down)&&(BO.Jy>0);ABB=(!!BO&&BO.
Down)&&(BO.Jy>this.AAy);M6=!!BO&&!BO.Down;AzW=!!D4;if(AaR)this.AAy=((B=(BO.NQ?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaR){var ApK=0;var Adn;this.Bp=this.Bp|(1<<BO.
IO);for(Adn=this.Bp&4095;Adn>0;Adn=Adn>>1)if(!!(Adn&1))ApK=ApK+1;if(ApK===1)this.
Bp=(this.Bp|16777216)|(4096<<BO.IO);}if(M6&&(this.Bp<16777216)){var II=this.Iq();
var JK=null;if(!!II){var A4Q=(!!this.AJ?this.AJ:this.Ab);var A2h=(!!II.JL?II.JL.
C2:null);JK=II.Yq(A.abh(Aaj,BO.L0),BO.IO,BO.Oc,A2h,A4Q,0x0);}if(!!JK){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Cj.G5(A._NewObject(C.Aeh,0).InitializeDown(
O,BO.H5,BO.Oc,Cf,true,BO.L0));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JK.Cj.G5(A.
_NewObject(C.Aeh,0).InitializeUp(O,BO.H5,BO.H5,0,BO.Oc,Cf,false,BO.L0,BO.L0));}}
if(M6)this.Bp=(this.Bp&~(1<<BO.IO))|33554432;if(ABB&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(M6&&BO.NQ)this.Bp=this.Bp|67108864;if(M6&&!(this.Bp&16777215
))this.Bp=0;if(Vn&&(this.Bp>=67108864)){var II=this.Iq();if(!!II)II.AUP(null,null
,this,0x0);}if((Vn&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vn=false;M6=true;
}if(!!BO&&!(this.Bp&(4096<<BO.IO)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IO))
)return this;if(M6&&!(this.Bp&16777216))return this;if(((AaR||AzW)||Vn)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(M6)this.Bp=this.Bp&3758100479;
if(M6&&!(this.Bp&16777215))this.Bp=0;if(!!ID&&(ID.AxV===this))return null;if((!!
ID&&ID.Down)&&(this.Ao1||!this.ZU))return null;if((!!ID&&ID.Down)&&!A.wa(this.M,
this.Ab.A78(ID.L0)))return null;if((!!ID&&!ID.Down)&&(!this.Ao1||(this.AJA!==ID.
IO)))return null;if((!BO&&!D4)&&!ID)return null;if(!!BO){this.Ao1=AaR||Vn;this.AJA=
BO.IO;this.NZ=BO.NZ;}if(!!D4)this.AJA=D4.IO;if(!!ID){this.Ao1=ID.Down;this.AJA=ID.
IO;}if(!!ID&&ID.Down){this.A4R();this.EX=(((ID.Bs-this.Aml)*0.001)*this.AfS)+this.
EX;this.EY=(((ID.Bs-this.Auw)*0.001)*this.AfT)+this.EY;if(this.XP)this.EX=0;if(this.
XQ)this.EY=0;this.AfS=0;this.AfT=0;this.XP=false;this.XQ=false;this.AKA=this.DH;
this.Ap4=ID.Bs;return this;}if(AaR){this.A4R();this.EX=(((BO.Bs-this.Aml)*0.001)
*this.AfS)+this.EX;this.EY=(((BO.Bs-this.Auw)*0.001)*this.AfT)+this.EY;if(this.XP||
!this.ZU)this.EX=0;if(this.XQ||!this.ZU)this.EY=0;this.AfS=0;this.AfT=0;this.XP=
false;this.XQ=false;if(!this.ZU){this.ZU=true;(B=this.SQ)?B[1].call(B[0],this):null;(
B=this.AKZ)?B[1].call(B[0],this):null;}this.AKA=this.DH;this.Ap4=BO.Bs;}if(!!D4){
var Hc=A.abe(D4.H5,D4.NZ);var CD=this.DH;if(this.AG4)CD=[this.AKA[0]+Hc[0],CD[1]
];CD=[CD[0],this.AKA[1]+Hc[1]];if(this.A$M){if(CD[0]<this.Gq[0])CD=[this.Gq[0]+(((
CD[0]-this.Gq[0])/2)|0),CD[1]];else if(CD[0]>this.F$[0])CD=[this.F$[0]+(((CD[0]-
this.F$[0])/2)|0),CD[1]];if(CD[1]<this.Gq[1])CD=[CD[0],this.Gq[1]+(((CD[1]-this.
Gq[1])/2)|0)];else if(CD[1]>this.F$[1])CD=[CD[0],this.F$[1]+(((CD[1]-this.F$[1])
/2)|0)];}else{if(CD[0]<this.Gq[0])CD=[this.Gq[0],CD[1]];else if(CD[0]>this.F$[0]
)CD=[this.F$[0],CD[1]];if(CD[1]<this.Gq[1])CD=[CD[0],this.Gq[1]];else if(CD[1]>this.
F$[1])CD=[CD[0],this.F$[1]];}if(!A.aaX(CD,this.DH)){this.A6t=A.abe(CD,this.DH);this.
DH=CD;(B=this.Aui)?B[1].call(B[0],this):null;(B=this.AGn)?B[1].call(B[0],this):null;
}}if((!!ID&&!ID.Down)&&((ID.Bs-this.Ap4)>=200)){this.EX=0;this.EY=0;}if(Vn&&((BO.
Bs-this.Ap4)>=200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.Ap4)){var Hc=D4.DH;
var Bek=1000/(D4.Bs-this.Ap4);var AiO=0;var AiP;if(this.AG4)AiO=Hc[0]*Bek;AiP=Hc[
1]*Bek;if((AiO*this.EX)<0)this.EX=0;if((AiP*this.EY)<0)this.EY=0;this.EX=(this.EX+
AiO)*0.5;this.EY=(this.EY+AiP)*0.5;this.Ap4=D4.Bs;}if(!M6&&!ID)return this;if(!!
BO&&BO.NQ){this.EX=0;this.EY=0;}if((this.DH[0]<=this.Gq[0])||(this.DH[0]>=this.F$[
0]))this.EX=0;else if(!this.EX){var ER=this.DH[0];var Fj=this.Gq[0];var EI=this.
F$[0];if(ER<Fj)EI=this.Gq[0];else if(ER>EI)Fj=this.F$[0];else if(this.W3[0]<=1){
Fj=ER;EI=ER;}else{var Adu=(EI-ER)%this.W3[0];EI=(ER-this.W3[0])+Adu;Fj=ER+Adu;if(
EI<this.Gq[0])EI=this.Gq[0];if(Fj>this.F$[0])Fj=this.F$[0];}if((Fj-ER)<=(ER-EI))
ER=Fj;else ER=EI;if(ER!==this.DH[0]){var Jq=ER-this.DH[0];if(Jq>0)this.EX=Math.sqrt((
Jq*2)*this.Adq)+20;if(Jq<0)this.EX=-Math.sqrt((-Jq*2)*this.Adq)-20;this.AfS=(400-(
this.EX*this.EX))/(2*Jq);this.Apf=ER;}}else{var BCE=this.EX*this.EX;var Jq=BCE/(
2*this.Adq);var ER=this.DH[0];if(this.EX>0)ER=ER+(Jq|0);if(this.EX<0)ER=ER-(Jq|0
);if(ER>this.F$[0])ER=this.F$[0];else if(ER<this.Gq[0])ER=this.Gq[0];var Bg3=ER;
var Fj=this.Gq[0];var EI=this.F$[0];if(ER<Fj)EI=this.Gq[0];else if(ER>EI)Fj=this.
F$[0];else if(this.W3[0]<=1){Fj=ER;EI=ER;}else{var Adu=(EI-ER)%this.W3[0];EI=(ER-
this.W3[0])+Adu;Fj=ER+Adu;if(EI<this.Gq[0])EI=this.Gq[0];if(Fj>this.F$[0])Fj=this.
F$[0];}if(this.EX>0){if(EI<=this.DH[0])ER=Fj;else if((ER-EI)<(Fj-ER))ER=EI;else ER=
Fj;}else if(Fj>=this.DH[0])ER=EI;else if((ER-EI)>(Fj-ER))ER=Fj;else ER=EI;if(ER!==
this.DH[0]){Jq=ER-this.DH[0];if(ER!==Bg3){var Ai_=ER-Bg3;if(Ai_>0)this.EX=this.EX+
Math.sqrt((Ai_*2)*this.Adq);if(Ai_<0)this.EX=this.EX-Math.sqrt((-Ai_*2)*this.Adq
);}if(this.EX>0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfS=(400-(
this.EX*this.EX))/(2*Jq);this.Apf=ER;}else this.EX=0;}if((this.DH[1]<=this.Gq[1]
)||(this.DH[1]>=this.F$[1]))this.EY=0;else if(!this.EY){var ES=this.DH[1];var Fj=
this.Gq[1];var EI=this.F$[1];if(ES<Fj)EI=this.Gq[1];else if(ES>EI)Fj=this.F$[1];
else if(this.W3[1]<=1){Fj=ES;EI=ES;}else{var Adu=(EI-ES)%this.W3[1];EI=(ES-this.
W3[1])+Adu;Fj=ES+Adu;if(EI<this.Gq[1])EI=this.Gq[1];if(Fj>this.F$[1])Fj=this.F$[
1];}if((Fj-ES)<=(ES-EI))ES=Fj;else ES=EI;if(ES!==this.DH[1]){var Jq=ES-this.DH[1
];if(Jq>0)this.EY=Math.sqrt((Jq*2)*this.Adq)+20;if(Jq<0)this.EY=-Math.sqrt((-Jq*
2)*this.Adq)-20;this.AfT=(400-(this.EY*this.EY))/(2*Jq);this.Apg=ES;}}else{var BCF=
this.EY*this.EY;var Jq=BCF/(2*this.Adq);var ES=this.DH[1];if(this.EY>0)ES=ES+(Jq|
0);if(this.EY<0)ES=ES-(Jq|0);if(ES>this.F$[1])ES=this.F$[1];else if(ES<this.Gq[1
])ES=this.Gq[1];var Bg4=ES;var Fj=this.Gq[1];var EI=this.F$[1];if(ES<Fj)EI=this.
Gq[1];else if(ES>EI)Fj=this.F$[1];else if(this.W3[1]<=1){Fj=ES;EI=ES;}else{var Adu=(
EI-ES)%this.W3[1];EI=(ES-this.W3[1])+Adu;Fj=ES+Adu;if(EI<this.Gq[1])EI=this.Gq[1
];if(Fj>this.F$[1])Fj=this.F$[1];}if(this.EY>0){if(EI<=this.DH[1])ES=Fj;else if((
ES-EI)<(Fj-ES))ES=EI;else ES=Fj;}else if(Fj>=this.DH[1])ES=EI;else if((ES-EI)>(Fj-
ES))ES=Fj;else ES=EI;if(ES!==this.DH[1]){Jq=ES-this.DH[1];if(ES!==Bg4){var Ai_=ES-
Bg4;if(Ai_>0)this.EY=this.EY+Math.sqrt((Ai_*2)*this.Adq);if(Ai_<0)this.EY=this.EY-
Math.sqrt((-Ai_*2)*this.Adq);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.
EY=this.EY-20;this.AfT=(400-(this.EY*this.EY))/(2*Jq);this.Apg=ES;}else this.EY=
0;}if(!!BO)this.Aml=BO.Bs;if(!!ID)this.Aml=ID.Bs;this.Auw=this.Aml;this.Amn=this.
DH[0];this.Amo=this.DH[1];this.BCG();return this;},Yq:function(Dc,BH,Om,Aas,Ac8,
Ac7){var B;if(!!Aas&&(Aas!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BH)))return null;if(!this.AG4&&!!(Ac7&0xC))
return null;var Az=A.lb(Dc,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qo=
A.aaI(Dc);var Fx=Cf;if(Qo[0]<Az[0])Fx=[Az[0]-Qo[0],Fx[1]];if(Qo[0]>=Az[2])Fx=[(Az[
2]-Qo[0])-1,Fx[1]];if(Qo[1]<Az[1])Fx=[Fx[0],Az[1]-Qo[1]];if(Qo[1]>=Az[3])Fx=[Fx[
0],(Az[3]-Qo[1])-1];return A._NewObject(C.Au7,0).Initialize(this,Fx);}return null;
},A4R:function(){if(!!this.timer){A.z9([this,this.Mm],this.timer,0);this.timer=null;
}},BCG:function(){this.timer=A._GetAutoObject(A.acl.Ael);A.zV([this,this.Mm],this.
timer,0);},Mm:function(G){var B;if(!this.timer)return;var AuB=(this.timer.Bs-this.
Aml)*0.001;var AuC=(this.timer.Bs-this.Auw)*0.001;var BCR=AuB*AuB;var BCS=AuC*AuC;
var AiO=(this.AfS*AuB)+this.EX;var AiP=(this.AfT*AuC)+this.EY;var CD=[((((this.AfS
*0.5)*BCR)+(this.EX*AuB))+this.Amn)|0,((((this.AfT*0.5)*BCS)+(this.EY*AuC))+this.
Amo)|0];if(this.XP&&(AuB>=0.5)){CD=[this.Apf,CD[1]];this.EX=0;this.AfS=0;this.Amn=
CD[0];this.XP=false;}else if(this.XP){var LP=1-Math.pow(1-(AuB/0.5),5);CD=[(this.
Amn+((this.Apf-this.Amn)*LP))|0,CD[1]];}if(this.XQ&&(AuC>=0.5)){CD=[CD[0],this.Apg
];this.EY=0;this.AfT=0;this.Amo=CD[1];this.XQ=false;}else if(this.XQ){var LP=1-Math.
pow(1-(AuC/0.5),5);CD=[CD[0],(this.Amo+((this.Apg-this.Amo)*LP))|0];}if(((this.EX>
0)&&(AiO<0))||((this.EX<0)&&(AiO>0))){AiO=0;CD=[this.DH[0],CD[1]];}if(((this.EY>
0)&&(AiP<0))||((this.EY<0)&&(AiP>0))){AiP=0;CD=[CD[0],this.DH[1]];}if(!this.XP&&(
CD[0]<this.Gq[0])){this.Amn=CD[0];this.Apf=this.Gq[0];this.Aml=this.timer.Bs;this.
XP=true;}else if(!this.XP&&(CD[0]>this.F$[0])){this.Amn=CD[0];this.Apf=this.F$[0
];this.Aml=this.timer.Bs;this.XP=true;}if(!this.XQ&&(CD[1]<this.Gq[1])){this.Amo=
CD[1];this.Apg=this.Gq[1];this.Auw=this.timer.Bs;this.XQ=true;}else if(!this.XQ&&(
CD[1]>this.F$[1])){this.Amo=CD[1];this.Apg=this.F$[1];this.Auw=this.timer.Bs;this.
XQ=true;}if(((!this.XP&&!!this.EX)&&(AiO>-20))&&(AiO<20)){CD=[this.Apf,CD[1]];this.
EX=0;this.AfS=0;this.Amn=CD[0];}if(((!this.XQ&&!!this.EY)&&(AiP>-20))&&(AiP<20)){
CD=[CD[0],this.Apg];this.EY=0;this.AfT=0;this.Amo=CD[1];}if(!A.aaX(CD,this.DH)){
this.A6t=A.abe(CD,this.DH);this.DH=CD;(B=this.Aui)?B[1].call(B[0],this):null;(B=
this.AGn)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XP)&&!this.
XQ){this.A4R();this.ZU=false;(B=this.Zt)?B[1].call(B[0],this):null;}},ATZ:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.W3=E;},ATu:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A67)return;this.A67=E;if(E<(1e-007))E=1e-007;this.Adq=
E*10000;},_Init:function(aArg){C.Eu._Init.call(this,aArg);this.__proto__=C.Ic;this.
U=0x10011B;},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKZ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aui)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AGn
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zt)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BF={Ah:null,Lt:null,BG:null,D1:null,ApZ:
0,Bs:0,A$H:0,Filter:148,CP:0,Dy:0,Bw:true,Down:false,Acp:false,Mw:false,Init:function(
aArg){var B;var C2=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C2)throw new Error(AfF
);this.Ah=C2.AKE;C2.AKE=this;},G5:function(CN){var B;if(!!CN&&CN.Bkg(this.Filter
)){this.Down=CN.Down;this.CP=CN.CP;this.Dy=CN.Dy;this.Bs=CN.Bs;this.Mw=false;if(
CN.Down){this.A$H=this.ApZ;this.Acp=this.ApZ>0;if(this.Acp)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BG)?B[1].call(B[0],this):null;if(!this.Mw)this.ApZ=this.
ApZ+1;return!this.Mw;}if(!CN.Down){this.Acp=this.ApZ>1;this.A$H=this.ApZ-1;this.
ApZ=0;(B=this.Lt)?B[1].call(B[0],this):null;return!this.Mw;}}return false;},_Init:
function(aArg){this.__proto__=C.BF;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lt)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Au7={Cj:null,Au9:0,DH:A.wf,Initialize:function(Ag,aOffset){this.Cj=Ag;this.DH=
aOffset;this.Au9=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Au7;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cj)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A8i={Ah:null,C2:null,_Init:
function(aArg){this.__proto__=C.A8i;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Aru={NK:null,extent:A.wg,Be:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Aru;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.NK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AEq={AiW:A.wf,AiV:A.wf,_Init:function(aArg
){C.Aru._Init.call(this,aArg);this.__proto__=C.AEq;},_className:"Core::LayoutLineContext"
};C.AEr={AA9:A.wf,AA8:A.wf,AiW:A.wf,AiV:A.wf,_Init:function(aArg){C.Aru._Init.call(
this,aArg);this.__proto__=C.AEr;},_className:"Core::LayoutQuadContext"};C.AOa={C2:
null,Ah:null,RH:null,RQ:null,Mk:null,ApV:null,_Init:function(aArg){this.__proto__=
C.AOa;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RH)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mk)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApV)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AVw={FS:null,B9:null,B8:null,Bes:false,
Bzh:function(){if(!this.FS)return;var Pr=this.FS;this.FS.Pm=null;this.FS=null;A.
pe([this,this.A3Z],this);Pr.A8J(this);},BA8:function(G){if(!!this.FS)return;if(!
this.B8)return;this.FS=this.B8;this.B8=this.B8.Ah;if(!!this.B8)this.B8.AJ=null;else
this.B9=null;this.FS.Ah=null;this.Bes=true;this.FS.SQ(this);this.Bes=false;},BBs:
function(G){A.pe([this,this.BA8],this);},BBr:function(G){A.pe([this,this.BBs],this
);},A3Z:function(G){A.pe([this,this.BBr],this);},Bid:function(Jn){if(!Jn||!Jn.Pm
)return;if(Jn.Pm!==this)throw new Error(Aak);var Bhx=false;if(this.FS===Jn){this.
FS=null;Bhx=true;A.pe([this,this.A3Z],this);}else{if(!!Jn.Ah)Jn.Ah.AJ=Jn.AJ;else
this.B9=Jn.AJ;if(!!Jn.AJ)Jn.AJ.Ah=Jn.Ah;else this.B8=Jn.Ah;Jn.AJ=null;Jn.Ah=null;
}Jn.Pm=null;if(Bhx)Jn.A8I(this);},A$P:function(Jn,A1M){if(!Jn)return;if(!!Jn.Pm)
throw new Error(Xm);Jn.Pm=this;if(A1M){Jn.Ah=this.B8;if(!!this.B8)this.B8.AJ=Jn;
else this.B9=Jn;this.B8=Jn;}else{Jn.AJ=this.B9;if(!!this.B9)this.B9.Ah=Jn;else this.
B8=Jn;this.B9=Jn;}if(!this.FS)A.pe([this,this.A3Z],this);},_Init:function(aArg){
this.__proto__=C.AVw;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Ak1={Pm:null,AJ:null,Ah:
null,A8J:function(AtE){},A8I:function(AtE){},SQ:function(AtE){this.AmH();},Mv:function(
){if(!!this.Pm&&(this.Pm.FS===this))this.Pm.Bzh();},AmH:function(){if(!!this.Pm)
this.Pm.Bid(this);},ARv:function(){return!!this.Pm&&(this.Pm.FS===this);},_Init:
function(aArg){this.__proto__=C.Ak1;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pm)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AVu={Ar:null,Auy:
null,SQ:function(AtE){this.Auy.Ar=this.Ar;A.we(this.Auy,0);A.pe([this,this.BA5],
this);},BA5:function(G){this.Auy.Ar=null;this.Auy=null;this.Ar=null;this.Mv();},
_Init:function(aArg){C.Ak1._Init.call(this,aArg);this.__proto__=C.AVu;},_Mark:function(
D){var B;C.Ak1._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auy)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxU={_Init:function(){C.AVw._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhF={resource:null,Lh:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhF;this.Init(aArg);A.h7++;},_Done:function(){this.Lh();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MJ:null,timer:null,Bs:0,Period:1000,VO:0,Bw:false,Lh:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AK7:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},P0:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AK7(this.VO,E);},WO:function(E){if(E<0)E=0;if(E===
this.VO)return;this.VO=E;if(this.Bw)this.AK7(E,this.Period);},As:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AK7(this.VO,this.Period);else this.AK7(0,
0);this.Bs=this.Avz();},Avz:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avz();if(!this.
Period)this.As(false);(B=this.MJ)?B[1].call(B[0],this):null;},AxS:function(G){this.
As(false);},StartTimer:function(G){if(this.Bw)this.As(false);this.As(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lh();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MJ)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUZ:0,Av9:0
,AjV:0,GL:0,Hl:0,Year:0,Bd0:function(AfP,A1d){if(A1d)switch(AfP){case 1:return A.
aci.Bkp;case 2:return A.aci.Bji;case 3:return A.aci.BkI;case 4:return A.aci.BhT;
case 5:return A.aci.BkM;case 6:return A.aci.Bks;case 7:return A.aci.Bkr;case 8:return A.
aci.BhV;case 9:return A.aci.Bps;case 10:return A.aci.Bk6;case 11:return A.aci.Bk5;
case 12:return A.aci.BiC;default:return A.jV;}else switch(AfP){case 1:return A.aci.
AEk;case 2:return A.aci.AC5;case 3:return A.aci.AEw;case 4:return A.aci.AB6;case
5:return A.aci.AEy;case 6:return A.aci.AEm;case 7:return A.aci.AEl;case 8:return A.
aci.ACb;case 9:return A.aci.AGS;case 10:return A.aci.AEL;case 11:return A.aci.AEJ;
case 12:return A.aci.ACQ;default:return A.jV;}},BdY:function(Bcu,A1d){if(A1d)switch(
Bcu){case 1:return A.aci.BkR;case 2:return A.aci.BqJ;case 3:return A.aci.Brq;case
4:return A.aci.Bqw;case 5:return A.aci.Bjv;case 6:return A.aci.Bpk;case 0:return A.
aci.Bqj;default:return A.jV;}else switch(Bcu){case 1:return A.aci.BkQ;case 2:return A.
aci.BqI;case 3:return A.aci.Brp;case 4:return A.aci.Bqv;case 5:return A.aci.Bju;
case 6:return A.aci.Bpj;case 0:return A.aci.Bqi;default:return A.jV;}},BdX:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JY:function(){var d=this.GL;var K9=this.Hl;var Di=this.Year-((
K9<=2)?1:0);var AzX=(((Di>=0)?Di:Di-399)/400)|0;var Amv=Di-(AzX*400);var Vl=(((((
153*(K9+((K9>2)?-3:9)))+2)/5)|0)+d)-1;var Apc=(((Amv*365)+((Amv/4)|0))-((Amv/100
)|0))+Vl;var Qq=((AzX*146097)+Apc)-719468;return(((Qq*86400)+(this.AjV*3600))+(this.
Av9*60))+this.AUZ;},AF8:function(E){var B;E+=62162035200;if(E<0)E=0;var Vz=Math.
trunc(E/86400)|0;var AzX=(((Vz>=0)?Vz:Vz-146096)/146097)|0;var Apc=Vz-(AzX*146097
);var Amv=((((Apc-((Apc/1460)|0))+((Apc/36524)|0))-((Apc/146096)|0))/365)|0;var Di=
Amv+(AzX*400);var Vl=Apc-(((365*Amv)+((Amv/4)|0))-((Amv/100)|0));var A3m=(((5*Vl
)+2)/153)|0;var d=(Vl-((((153*A3m)+2)/5)|0))+1;var K9=A3m+((A3m<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Di+((
K9<=2)?1:0);this.Uz(K9);this.Lv(d);this.AnH(BL+((BL<0)?24:0));this.AnK(O+((O<0)?
60:0));this.AnN(s+((s<0)?60:0));},Zu:function(){if(this.Hl===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hl===4)||(this.Hl===6))||(this.Hl===9))||(this.Hl===11))return 30;else return 31;
},Bmh:function(){var B;var Vl=this.Ab7()-1;var AtV=(6+this.Awk())%7;var Ape=((371+
AtV)-Vl)%7;if(this.Hl===12){var d=this.GL;if((d===31)&&(AtV<3))return 0;if((d===
30)&&(AtV<2))return 0;if((d===29)&&(AtV<1))return 0;}if(Ape<=3)Vl+=Ape;else Vl-=(
7-Ape);if(Vl<0){var d=this.GL;var K9=this.Hl;this.Year--;this.Lv(31);this.Uz(12);
Vl=this.Ab7()-1;AtV=(6+this.Awk())%7;Ape=((371+AtV)-Vl)%7;if(Ape<=3)Vl+=Ape;else
Vl-=Ape;this.Year++;this.Lv(d);this.Uz(K9);}return(Vl/7)|0;},Ab7:function(){var B;
var d=this.GL;var K9=this.Hl;var Di=this.Year;var Aga=((!!!(Di%4)&&(!!(Di%100)||
!!!(Di%400)))?1:0);switch(K9){case 2:d+=31;break;case 3:d+=(59+Aga);break;case 4:
d+=(90+Aga);break;case 5:d+=(120+Aga);break;case 6:d+=(151+Aga);break;case 7:d+=(
181+Aga);break;case 8:d+=(212+Aga);break;case 9:d+=(243+Aga);break;case 10:d+=(273+
Aga);break;case 11:d+=(304+Aga);break;case 12:d+=(334+Aga);break;default:;}return d;
},Awk:function(){var B;var d=this.GL;var K9=this.Hl+((this.Hl>2)?-2:10);var Di=this.
Year-((this.Hl<=2)?1:0);var B4=(Di/100)|0;Di%=100;d+=((((((((26*K9)-2)/10)|0)+Di
)+((Di/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnN:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUZ=E;},AnK:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av9=E;},AnH:function(E){if(E<0)E=0;if(E>23)E=23;this.AjV=E;},Lv:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},Uz:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hl=E;},Format:function(Iz){var result=A.jV;var inx=0;while(!!(Iz.charCodeAt(inx)||
0))if((Iz.charCodeAt(inx)||0)===0x25){var AaL=1;inx=inx+1;if((Iz.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaL=0;}switch(Iz.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaL,10);break;case 0x48:result=result+A.abl(this.AjV,2*AaL,10);break;
case 0x49:if(!(this.AjV%12))result=result+Aal;else result=result+A.abl(this.AjV%
12,2*AaL,10);break;case 0x6D:result=result+A.abl(this.Hl,2*AaL,10);break;case 0x4D:
result=result+A.abl(this.Av9,2*AaL,10);break;case 0x70:if(this.AjV<12)result=result+
A.aci.BhD;else result=result+A.aci.BoH;break;case 0x53:result=result+A.abl(this.
AUZ,2*AaL,10);break;case 0x77:result=result+A.abl(this.Awk(),AaL,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaL,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaL,10);break;case 0x25:result=result+Xn;break;case 0x6A:result=result+
A.abl(this.Ab7(),3*AaL,10);break;case 0x57:result=result+A.abl(this.Bmh(),2*AaL,
10);break;case 0x61:result=result+this.BdY(this.Awk(),true);break;case 0x41:result=
result+this.BdY(this.Awk(),false);break;case 0x62:result=result+this.Bd0(this.Hl
,true);break;case 0x42:result=result+this.Bd0(this.Hl,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iz.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac9,AfP,Bxz,BxQ,Bx7,Byn){this.Year=Ac9;this.
Uz(AfP);this.Lv(Bxz);this.AnH(BxQ);this.AnK(Bx7);this.AnN(Byn);return this;},Initialize:
function(Aib){this.AF8(Aib);return this;},BiH:function(Aib){if(!Aib)return A._NewObject(
C.An_,0).Initialize(this.JY());return A._NewObject(C.An_,0).Initialize(this.JY()-
Aib.JY());},BpW:function(Azg){if(!Azg)return this;return A._NewObject(C.Bs,0).Initialize(
this.JY()-Azg.JY());},J:function(Azg){if(!Azg)return this;return A._NewObject(C.
Bs,0).Initialize(this.JY()+Azg.JY());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An_={AGP:0,AEB:0,ADP:0,Kq:0,JY:function(
){return(((this.Kq*86400)+(this.ADP*3600))+(this.AEB*60))+this.AGP;},AF8:function(
E){var ALj=1;this.Kq=Math.trunc(E/86400)|0;if(E<0){E=-E;ALj=-1;}this.ADP=ALj*(Math.
trunc(E/3600)%24|0);this.AEB=ALj*(Math.trunc(E/60)%60|0);this.AGP=ALj*(E%60|0);}
,Initialize2:function(BxA,BxR,Bx8,Byq){this.Kq=BxA;this.ADP=BxR;this.AEB=Bx8;this.
AGP=Byq;return this;},Initialize:function(Aib){this.AF8(Aib);return this;},_Init:
function(aArg){this.__proto__=C.An_;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.Bad={Ar:null,Pm:null,Trigger:function(AoJ,A1M){var Pr=A._NewObject(C.AVu,0);
Pr.Auy=this;Pr.Ar=AoJ;this.Pm.A$P(Pr,A1M);},_Init:function(aArg){this.__proto__=
C.Bad;this.Pm=A._GetAutoObject(C.AxU);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.Bae={JS:null,Event:null,ASH:null,Aub:function(G){var B;if(
!this.Event)return;this.JS=this.Event.Ar;(B=this.ASH)?B[1].call(B[0],this):null;
this.JS=null;},BmU:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.Aub],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.Aub],this.
Event,0);},_Init:function(aArg){this.__proto__=C.Bae;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGS={Dt:0x1,BDA:0x2,BEJ:0x4,BGH:0x8,Bw:0x10,Ib:0x20
,BEK:0x40,BFl:0x80,BEF:0x100,BE1:0x200,BEt:0x400,BF0:0x800,Bl:0x1000,BGP:0x2000,
BFI:0x4000,BFJ:0x8000,Abr:0x10000,BFH:0x20000,BGb:0x40000,BEk:0x80000,BFR:0x100000
,BEe:0x200000};C.PU={BF2:0x1,BF3:0x2,BDw:0x4,BDx:0x8,BDy:0x10,BDv:0x20};C.Ag3={None:
0,BGD:1,BDT:2,BE6:3,BF6:4,BGE:5,BGF:6,BDU:7,BDV:8,BE8:9,BE7:10,BF8:11,BF7:12};C.
Au$={None:0,BGB:1,Left:2,BDR:3,ZZ:4,A51:5,BGC:6,Right:7,BDS:8};C.KeyCode={NoKey:
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
C._Init=function(){C.Aki.__proto__=C.Cj;C.ZJ.__proto__=C.Cj;C.Eu.__proto__=C.Cj;C.
P.__proto__=C.Eu;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARO.__proto__=
C.Event;C.Au6.__proto__=C.Event;C.Aeh.__proto__=C.Event;C.AqQ.__proto__=C.Event;
C.Y.__proto__=C.Eu;C.CM.__proto__=C.P;C.DB.__proto__=C.P;C.Bn.__proto__=C.ZJ;C.Ic.
__proto__=C.Eu;C.AEq.__proto__=C.Aru;C.AEr.__proto__=C.Aru;C.AVu.__proto__=C.Ak1;
};C._ReInit=function(){var B;if((B=C.AxU._this))B._ReInit(),C.AxU._ReInit.call(B
);};C.DI=function(D){var B;if((B=C.AxU._this)&&(B._cycle!=D))B._Done(C.AxU._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */