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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var A=index;var C={};
var B9=[0,0];var BC=[0,0,0,0];var EU="The view does not belong to this group";var
Hc=[1000,740];var I7="The dialog component is already presented";var II="The dialog component is actually not presented";
var OH="No fader to perform the fade-in/out operation";var PM="Trying to use the same fader twice";
var PN="Trying to fade-in/out a group which belongs to another owner";var CI="No view to restack";
var E2="View is not in this group";var Li="Sibling view does not belong to the group";
var PO="No view to remove";var Km="No view to add";var NV="View already in a group";
var PP="Recursive invalidate during active update cycle.";var Mt=[-8,-8,9,9];var
SF="No group to end the modal state.";var Uj="The group is not modal.";var Zn="No group to obtain the modal state.";
var Wq="The group serves already as the \'virtual keyboard\'.";var IJ="The group is already modal.";
var Uk="View is not in the same group or it is not embedded within the Outline "+
"Box";var Zo="The method SwitchToDialog() is not available in Core::VerticalList.";
var Wr="The method DismissDialog() is not available in Core::VerticalList.";var Zp=
"The method PresentDialog() is not available in Core::VerticalList.";var Ul="The method FadeGroup() is not available in Core::VerticalList.";
var Zq="The method RestackBehind() is not available in Core::VerticalList.";var Zr=
"The method RestackTop() is not available in Core::VerticalList.";var Um="The method Restack() is not available in Core::VerticalList.";
var Ws="The method Remove() is not available in Core::VerticalList.";var QZ="The method AddBehind() is not available in Core::VerticalList.";
var Zs="The method Add() is not available in Core::VerticalList.";var OI="The Slide Touch Handler:";
var PQ="is already connected with a view.";var Wt="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Wu=[0,0,170,120];var Wv="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Zt="The method DismissDialog() is not available in Core::HorizontalList.";var
Zu="The method PresentDialog() is not available in Core::HorizontalList.";var Ww=
"The method FadeGroup() is not available in Core::HorizontalList.";var Wx="The method RestackBehind() is not available in Core::HorizontalList.";
var SG="The method RestackTop() is not available in Core::HorizontalList.";var Zv=
"The method Restack() is not available in Core::HorizontalList.";var Zw="The method Remove() is not available in Core::HorizontalList.";
var Ab7="The method AddBehind() is not available in Core::HorizontalList.";var Un=
"The method Add() is not available in Core::HorizontalList.";var Zx=[0,0,1,1];var
AeS="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Zy="Trying to cancel a task not belonging to this queue!";var Wy="Trying to enqueue a task twice!";
var Wz="12";var Zz="%";
C.Ca={Ag:null,AH:null,Ab:null,El:null,T:0x103,JL:0,Ps:0x14,AsN:function(BF,Ahp){}
,Aq3:function(E){if(this.JL===E)return;this.JL=E;if(!!this.Ab){var Aim=this.Ag;var
GY=0;while(!!Aim&&(E>Aim.JL)){Aim=Aim.Ag;GY=GY+1;}Aim=this.AH;while(!!Aim&&(E<Aim.
JL)){Aim=Aim.AH;GY=GY-1;}if(!!GY)this.Ab.Kh(this,GY);}},AV:function(E){var B;var
GY=E^this.Ps;if(!GY)return;this.Ps=E;if(!!this.El&&!((this.T&0x400)===0x400)){this.
Ab.T=this.Ab.T|0x5000;A.pe([B=this.Ab,B.Jx],this);this.Ab.Bd([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.El&&((this.T&0x400)===0x400)){this.El.Nm.T=this.El.
Nm.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jx],this);}},Ia:function(
){var BS=this.Ab;while(!!BS){var Iq=(C.Root.isPrototypeOf(BS)?BS:null);if(!!Iq)return Iq;
BS=BS.Ab;}return null;},J5:function(CT,aClip,aOffset,Cb,aBlend){},GetClipping:function(
){return this.GetExtent();},GL:function(CG){return null;},XL:function(C6,BD,NY,ZE
,Aco,Acn){return null;},Aty:function(C6){return C6;},AtI:function(BF,Mw){return B9;
},AmC:function(aOffset,Asn){},GetExtent:function(){return BC;},Cq:function(Q7,Ut
){var B;if(((this.T&0x200)===0x200))Q7=Q7&~0x400;var A0r=(this.T&~Ut)|Q7;var WY=
A0r^this.T;this.T=A0r;if(!!this.Ab&&!!(WY&0x14)){var Baf=((this.T&0x14)===0x14);
if(Baf&&!this.Ab.AY)this.Ab.Ba(this);if(!Baf&&(this.Ab.AY===this))this.Ab.Ba(this.
Ab.ABg(this,0x14));}if(!!this.Ab&&!!(WY&0x403))this.Ab.Bd(this.GetClipping());if(((
!!this.El&&!!this.Ab)&&((A0r&0x400)===0x400))&&((WY&0x1)===0x1)){this.T=this.T|0x800;
this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jx],this);}if(!!this.Ab&&((WY&0x400
)===0x400)){this.El=null;this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jx],this);}if(((((WY&0x100000)===0x100000)&&((Ut&0x100000)===0x100000)
)&&((this.T&0x10)===0x10))&&!((this.T&0x200080)===0x200080))this.Cq(0x0,0x10);if(((((
WY&0x100000)===0x100000)&&((Q7&0x100000)===0x100000))&&!((this.T&0x10)===0x10))&&(
!((this.T&0x200000)===0x200000)||((!((this.T&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
T&0x10)===0x10))))this.Cq(0x10,0x0);if(((((WY&0x200000)===0x200000)&&((Ut&0x200000
)===0x200000))&&!((this.T&0x10)===0x10))&&((this.T&0x100000)===0x100000))this.Cq(
0x10,0x0);if((((((WY&0x200000)===0x200000)&&((Q7&0x200000)===0x200000))&&((this.
T&0x100010)===0x100010))&&!((this.T&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.T&0x10
)===0x10))||((((this.T&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.GZ.CV!==this)))
)this.Cq(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ca;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.El)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.AjB={Es:A.wf,Ei:A.wf
,AsN:function(BF,Ahp){var At=A._NewObject(C.ACr,0);this.El=null;At.extent=this.getExtent(
);At.A9=BF;At.Nm=Ahp;At.Ah$=this.Ei;At.Aia=this.Es;this.El=At;},AtI:function(BF,
Mw){var B;var EK=this.Ps;var At=(C.ACr.isPrototypeOf(B=this.El)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var JU=[BF[
2]-BF[0],BF[3]-BF[1]];var BR=x2-x1;var BH=y2-y1;var tmp;if(!Mw){var Nq=[(B=At.A9
)[2]-B[0],B[3]-B[1]];x1=x1-At.A9[0];y1=y1-At.A9[1];if(Nq[0]!==JU[0]){var HK=((EK&
0x4)===0x4);var HL=((EK&0x8)===0x8);var P_=((EK&0x1)===0x1);if(!HK&&(P_||!HL))x1=((
x1*JU[0])/Nq[0])|0;if(!HL&&(P_||!HK)){x2=x2-At.A9[0];x2=((x2*JU[0])/Nq[0])|0;x2=
x2-JU[0];}else x2=x2-At.A9[2];x1=x1+BF[0];x2=x2+BF[2];if(!P_){if(HK&&!HL)x2=x1+BR;
else if(!HK&&HL)x1=x2-BR;else{x1=x1+((((x2-x1)-BR)/2)|0);x2=x1+BR;}}}else{x2=x2-
At.A9[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nq[1]!==JU[1]){var HM=((EK&0x10)===0x10);var
HJ=((EK&0x20)===0x20);var P$=((EK&0x2)===0x2);if(!HM&&(P$||!HJ))y1=((y1*JU[1])/Nq[
1])|0;if(!HJ&&(P$||!HM)){y2=y2-At.A9[1];y2=((y2*JU[1])/Nq[1])|0;y2=y2-JU[1];}else
y2=y2-At.A9[3];y1=y1+BF[1];y2=y2+BF[3];if(!P$){if(HM&&!HJ)y2=y1+BH;else if(!HM&&
HJ)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=y1+BH;}}}else{y2=y2-At.A9[3];y1=y1+
BF[1];y2=y2+BF[3];}}else{switch(Mw){case 3:{x1=BF[0];x2=x1+BR;}break;case 4:{x2=
BF[2];x1=x2-BR;}break;case 1:{y1=BF[1];y2=y1+BH;}break;case 2:{y2=BF[3];y1=y2-BH;
}break;default:;}if((Mw===3)||(Mw===4)){var HM=((EK&0x10)===0x10);var HJ=((EK&0x20
)===0x20);var P$=((EK&0x2)===0x2);if(P$){y1=BF[1];y2=BF[3];}else if(HM&&!HJ){y1=
BF[1];y2=y1+BH;}else if(HJ&&!HM){y2=BF[3];y1=y2-BH;}else{y1=BF[1]+((((BF[3]-BF[1
])-BH)/2)|0);y2=y1+BH;}}if((Mw===1)||(Mw===2)){var HK=((EK&0x4)===0x4);var HL=((
EK&0x8)===0x8);var P_=((EK&0x1)===0x1);if(P_){x1=BF[0];x2=BF[2];}else if(HK&&!HL
){x1=BF[0];x2=x1+BR;}else if(HL&&!HK){x2=BF[2];x1=x2-BR;}else{x1=BF[0]+((((BF[2]-
BF[0])-BR)/2)|0);x2=x1+BR;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BR=x2-x1;BH=y2-y1;if(
At.Aia[0]<At.Ah$[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.Aia[1]<At.Ah$[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.T&0x100)===0x100
)){this.Ei=[x1,y1];this.Es=[x2,y2];}else{this.DX([x1,y1]);this.DJ([x2,y2]);this.
El=At;}return[BR,BH];},AmC:function(aOffset,Asn){if(Asn){this.Ei=A.abf(this.Ei,aOffset
);this.Es=A.abf(this.Es,aOffset);}else{this.DX(A.abf(this.Ei,aOffset));this.DJ(A.
abf(this.Es,aOffset));}},GetExtent:function(){if(!!this.El&&this.El.isEmpty)return BC;
return this.getExtent();},getExtent:function(){var x1=this.Ei[0];var y1=this.Ei[
1];var x2=this.Es[0];var y2=this.Es[1];var BR=x2-x1;var BH=y2-y1;var tmp;if(BR<0
)BR=-BR;if(BH<0)BH=-BH;if(BR>=BH){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BH>=BR){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DJ:function(E){var B;if(A.aaX(E,this.
Es))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.
El=null;this.Es=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jx],this);}},DX:function(
E){var B;if(A.aaX(E,this.Ei))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.GetClipping());this.El=null;this.Ei=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jx],this);}},_Init:function(aArg){C.Ca._Init.call(this,aArg);this.__proto__=C.
AjB;},_className:"Core::LineView"};C.YX={Kg:A.wf,Mo:A.wf,Es:A.wf,Ei:A.wf,AsN:function(
BF,Ahp){var At=A._NewObject(C.ACs,0);this.El=null;At.extent=this.GetExtent();At.
A9=BF;At.Nm=Ahp;At.Ah$=this.Ei;At.Aia=this.Es;At.Azn=this.Mo;At.Azo=this.Kg;this.
El=At;},AtI:function(BF,Mw){var B;var EK=this.Ps;var At=(C.ACs.isPrototypeOf(B=this.
El)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var JU=[BF[2]-BF[0],BF[3]-BF[1]];var BR=x2-x1;var BH=y2-y1;if(!Mw){var
Nq=[(B=At.A9)[2]-B[0],B[3]-B[1]];x1=x1-At.A9[0];y1=y1-At.A9[1];if(Nq[0]!==JU[0]){
var HK=((EK&0x4)===0x4);var HL=((EK&0x8)===0x8);var P_=((EK&0x1)===0x1);if(!HK&&(
P_||!HL))x1=((x1*JU[0])/Nq[0])|0;if(!HL&&(P_||!HK)){x2=x2-At.A9[0];x2=((x2*JU[0]
)/Nq[0])|0;x2=x2-JU[0];}else x2=x2-At.A9[2];x1=x1+BF[0];x2=x2+BF[2];if(!P_){if(HK&&
!HL)x2=x1+BR;else if(!HK&&HL)x1=x2-BR;else{x1=x1+((((x2-x1)-BR)/2)|0);x2=x1+BR;}
}}else{x2=x2-At.A9[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nq[1]!==JU[1]){var HM=((EK&0x10
)===0x10);var HJ=((EK&0x20)===0x20);var P$=((EK&0x2)===0x2);if(!HM&&(P$||!HJ))y1=((
y1*JU[1])/Nq[1])|0;if(!HJ&&(P$||!HM)){y2=y2-At.A9[1];y2=((y2*JU[1])/Nq[1])|0;y2=
y2-JU[1];}else y2=y2-At.A9[3];y1=y1+BF[1];y2=y2+BF[3];if(!P$){if(HM&&!HJ)y2=y1+BH;
else if(!HM&&HJ)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=y1+BH;}}}else{y2=y2-
At.A9[3];y1=y1+BF[1];y2=y2+BF[3];}}else{switch(Mw){case 3:{x1=BF[0];x2=x1+BR;}break;
case 4:{x2=BF[2];x1=x2-BR;}break;case 1:{y1=BF[1];y2=y1+BH;}break;case 2:{y2=BF[
3];y1=y2-BH;}break;default:;}if((Mw===3)||(Mw===4)){var HM=((EK&0x10)===0x10);var
HJ=((EK&0x20)===0x20);var P$=((EK&0x2)===0x2);if(P$){y1=BF[1];y2=BF[3];}else if(
HM&&!HJ){y1=BF[1];y2=y1+BH;}else if(HJ&&!HM){y2=BF[3];y1=y2-BH;}else{y1=BF[1]+((((
BF[3]-BF[1])-BH)/2)|0);y2=y1+BH;}}if((Mw===1)||(Mw===2)){var HK=((EK&0x4)===0x4);
var HL=((EK&0x8)===0x8);var P_=((EK&0x1)===0x1);if(P_){x1=BF[0];x2=BF[2];}else if(
HK&&!HL){x1=BF[0];x2=x1+BR;}else if(HL&&!HK){x2=BF[2];x1=x2-BR;}else{x1=BF[0]+((((
BF[2]-BF[0])-BR)/2)|0);x2=x1+BR;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BR=(x2-x1)-1;BH=(
y2-y1)-1;var AhP=At.extent[0];var AhR=At.extent[1];var Aff=(At.extent[2]-AhP)-1;
var Afe=(At.extent[3]-AhR)-1;if(!Aff)Aff=1;if(!Afe)Afe=1;if(((this.T&0x100)===0x100
)){this.Ei=[x1+((((At.Ah$[0]-AhP)*BR)/Aff)|0),y1+((((At.Ah$[1]-AhR)*BH)/Afe)|0)];
this.Es=[x1+((((At.Aia[0]-AhP)*BR)/Aff)|0),y1+((((At.Aia[1]-AhR)*BH)/Afe)|0)];this.
Mo=[x1+((((At.Azn[0]-AhP)*BR)/Aff)|0),y1+((((At.Azn[1]-AhR)*BH)/Afe)|0)];this.Kg=[
x1+((((At.Azo[0]-AhP)*BR)/Aff)|0),y1+((((At.Azo[1]-AhR)*BH)/Afe)|0)];}else{this.
DX([x1+((((At.Ah$[0]-AhP)*BR)/Aff)|0),y1+((((At.Ah$[1]-AhR)*BH)/Afe)|0)]);this.DJ([
x1+((((At.Aia[0]-AhP)*BR)/Aff)|0),y1+((((At.Aia[1]-AhR)*BH)/Afe)|0)]);this.Kb([x1+((((
At.Azn[0]-AhP)*BR)/Aff)|0),y1+((((At.Azn[1]-AhR)*BH)/Afe)|0)]);this.Kc([x1+((((At.
Azo[0]-AhP)*BR)/Aff)|0),y1+((((At.Azo[1]-AhR)*BH)/Afe)|0)]);this.El=At;}return[BR+
1,BH+1];},AmC:function(aOffset,Asn){if(Asn){this.Ei=A.abf(this.Ei,aOffset);this.
Es=A.abf(this.Es,aOffset);this.Mo=A.abf(this.Mo,aOffset);this.Kg=A.abf(this.Kg,aOffset
);}else{this.DX(A.abf(this.Ei,aOffset));this.DJ(A.abf(this.Es,aOffset));this.Kb(
A.abf(this.Mo,aOffset));this.Kc(A.abf(this.Kg,aOffset));}},GetExtent:function(){
if(!!this.El&&this.El.isEmpty)return BC;var x1=this.Ei[0];var y1=this.Ei[1];var x2=
this.Mo[0];var y2=this.Mo[1];if((((this.Kg[0]!==x1)||(this.Es[1]!==y1))||(this.Es[
0]!==x2))||(this.Kg[1]!==y2)){if(this.Es[0]<x1)x1=this.Es[0];if(this.Mo[0]<x1)x1=
this.Mo[0];if(this.Kg[0]<x1)x1=this.Kg[0];if(this.Es[1]<y1)y1=this.Es[1];if(this.
Mo[1]<y1)y1=this.Mo[1];if(this.Kg[1]<y1)y1=this.Kg[1];if(this.Ei[0]>x2)x2=this.Ei[
0];if(this.Es[0]>x2)x2=this.Es[0];if(this.Kg[0]>x2)x2=this.Kg[0];if(this.Ei[1]>y2
)y2=this.Ei[1];if(this.Es[1]>y2)y2=this.Es[1];if(this.Kg[1]>y2)y2=this.Kg[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},Kc:function(E){var B;if(A.aaX(E,this.Kg))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.El=null;this.Kg=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jx],this);}},Kb:function(E){var B;if(A.aaX(E,
this.Mo))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping()
);this.El=null;this.Mo=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jx],this);}},DJ:function(
E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.GetClipping());this.El=null;this.Es=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jx],this);}},DX:function(E){var B;if(A.aaX(E,this.Ei))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.El=null;this.Ei=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jx],this);}},AO_:function(KM){var Ho=A.abi(4,
A.wf,null);var P=0;var H7=3;var AZZ=false;var AZ0=false;Ho.Set(0,this.Ei);Ho.Set(
1,this.Es);Ho.Set(2,this.Mo);Ho.Set(3,this.Kg);while(P<4){var BdL=Ho.Get(P)[0];var
AJC=Ho.Get(P)[1];var ByA=Ho.Get(H7)[0];var A13=Ho.Get(H7)[1];if(((AJC>KM[1])!==(
A13>KM[1]))||((AJC<KM[1])!==(A13<KM[1]))){var Ee=((((ByA-BdL)*(KM[1]-AJC))/(A13-
AJC))|0)+BdL;if(KM[0]>Ee)AZZ=!AZZ;if(KM[0]<Ee)AZ0=!AZ0;}H7=P;P=P+1;}return AZZ||
AZ0;},Bf3:function(){return((((this.Ei[0]===this.Kg[0])&&(this.Es[0]===this.Mo[0
]))&&(this.Ei[1]===this.Es[1]))&&(this.Mo[1]===this.Kg[1]))||((((this.Ei[0]===this.
Es[0])&&(this.Mo[0]===this.Kg[0]))&&(this.Ei[1]===this.Kg[1]))&&(this.Es[1]===this.
Mo[1]));},_Init:function(aArg){C.Ca._Init.call(this,aArg);this.__proto__=C.YX;},
_className:"Core::QuadView"};C.Ej={M:A.wg,AsN:function(BF,Ahp){var At=A._NewObject(
C.Aqk,0);At.extent=this.M;At.A9=BF;At.Nm=Ahp;this.El=At;},AtI:function(BF,Mw){var
B;var EK=this.Ps;var At=this.El;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var JU=[BF[2]-BF[0],BF[3]-BF[1]];var BR=x2-x1;var BH=
y2-y1;if(!Mw){var Nq=[(B=At.A9)[2]-B[0],B[3]-B[1]];x1=x1-At.A9[0];y1=y1-At.A9[1];
if(Nq[0]!==JU[0]){var HK=((EK&0x4)===0x4);var HL=((EK&0x8)===0x8);var P_=((EK&0x1
)===0x1);if(!HK&&(P_||!HL))x1=((x1*JU[0])/Nq[0])|0;if(!HL&&(P_||!HK)){x2=x2-At.A9[
0];x2=((x2*JU[0])/Nq[0])|0;x2=x2-JU[0];}else x2=x2-At.A9[2];x1=x1+BF[0];x2=x2+BF[
2];if(!P_){if(HK&&!HL)x2=x1+BR;else if(!HK&&HL)x1=x2-BR;else{x1=x1+((((x2-x1)-BR
)/2)|0);x2=x1+BR;}}}else{x2=x2-At.A9[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nq[1]!==JU[1
]){var HM=((EK&0x10)===0x10);var HJ=((EK&0x20)===0x20);var P$=((EK&0x2)===0x2);if(
!HM&&(P$||!HJ))y1=((y1*JU[1])/Nq[1])|0;if(!HJ&&(P$||!HM)){y2=y2-At.A9[1];y2=((y2
*JU[1])/Nq[1])|0;y2=y2-JU[1];}else y2=y2-At.A9[3];y1=y1+BF[1];y2=y2+BF[3];if(!P$
){if(HM&&!HJ)y2=y1+BH;else if(!HM&&HJ)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=
y1+BH;}}}else{y2=y2-At.A9[3];y1=y1+BF[1];y2=y2+BF[3];}}else{switch(Mw){case 3:{x1=
BF[0];x2=x1+BR;}break;case 4:{x2=BF[2];x1=x2-BR;}break;case 1:{y1=BF[1];y2=y1+BH;
}break;case 2:{y2=BF[3];y1=y2-BH;}break;default:;}if((Mw===3)||(Mw===4)){var HM=((
EK&0x10)===0x10);var HJ=((EK&0x20)===0x20);var P$=((EK&0x2)===0x2);if(P$){y1=BF[
1];y2=BF[3];}else if(HM&&!HJ){y1=BF[1];y2=y1+BH;}else if(HJ&&!HM){y2=BF[3];y1=y2-
BH;}else{y1=BF[1]+((((BF[3]-BF[1])-BH)/2)|0);y2=y1+BH;}}if((Mw===1)||(Mw===2)){var
HK=((EK&0x4)===0x4);var HL=((EK&0x8)===0x8);var P_=((EK&0x1)===0x1);if(P_){x1=BF[
0];x2=BF[2];}else if(HK&&!HL){x1=BF[0];x2=x1+BR;}else if(HL&&!HK){x2=BF[2];x1=x2-
BR;}else{x1=BF[0]+((((BF[2]-BF[0])-BR)/2)|0);x2=x1+BR;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.T&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.El=At;}return[x2-x1,y2-y1];},AmC:function(aOffset,Asn){if(Asn)this.M=A.abh(
this.M,aOffset);else this.G(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.GetClipping());this.El=null;this.M=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400
))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;
A.pe([B=this.Ab,B.Jx],this);}},_Init:function(aArg){C.Ca._Init.call(this,aArg);this.
__proto__=C.Ej;},_className:"Core::RectView"};C.O={B6:null,B7:null,AIF:null,Fp:null
,GZ:null,WZ:null,Ao5:null,AY:null,GS:255,Ayj:0,Aym:0,Ayl:0,Ayk:0,Init:function(aArg
){this.An();},J5:function(CT,aClip,aOffset,Cb,aBlend){var B;Cb=((Cb+1)*this.GS)>>
8;aBlend=aBlend&&((this.T&0x2)===0x2);if(!this.Fp||(CT.CV===this))this.A$8(CT,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cb,aBlend);else{var BX=255|(255<<8)|(255<<16)|((
Cb&0xFF)<<24);this.Fp.Update();CT.A3q(aClip,this.Fp,0,A.abh(this.M,aOffset),B9,BX
,BX,BX,BX,aBlend);}},GetClipping:function(){var B;var Av=this.M;if(!!this.Fp)return Av;
Av=[].concat(Av[0]-this.Ayk,Av.slice(1,4));Av=A.abP(Av,Av[1]-this.Aym);Av=A.abN(
Av,Av[2]+this.Ayl);Av=[].concat(Av.slice(0,3),Av[3]+this.Ayj);if(((this.T&0x80000
)===0x80000)){var Apf=BC;var W;for(W=this.B6;!!W;W=W.Ag)if(((W.T&0x1)===0x1))Apf=
A.wC(Apf,W.GetClipping());Av=A.wC(Av,A.abh(Apf,this.M.slice(0,2)));}return Av;},
XL:function(C6,BD,NY,ZE,Aco,Acn){var B;var W=this.B7;var Aow=null;var AE=BC;var JV=
null;var A0j=!!this.WZ&&(!!this.WZ.FD||!!this.WZ.B6);if(((B=A.lb(C6,this.M))[0]>=
B[2])||(B[1]>=B[3]))return null;C6=A.abg(C6,this.M.slice(0,2));if(!!Aco){W=Aco;while(
!!W&&(W.Ab!==this))W=W.Ab;}while(!!W){if(((W.T&0x400)===0x400)&&!JV){JV=W.AH;while(
!!JV&&!((JV.T&0x200)===0x200))JV=JV.AH;if(!!JV)AE=A.lb(C6,JV.GetExtent());else AE=
BC;}if(JV===W){JV=null;AE=BC;}if((!!ZE&&!!(C.O.isPrototypeOf(W)?W:null))||((((((
W.T&0x8)===0x8)&&((W.T&0x10)===0x10))&&!((W.T&0x40000)===0x40000))&&!((W.T&0x20000
)===0x20000))&&(!((W.T&0x10000)===0x10000)||((this.GZ.CV===W)&&!A0j)))){var extent=
W.GetExtent();var AH9=ZE;var Aog=null;if(AH9===W)AH9=null;if(((W.T&0x400)===0x400
)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Aog=W.XL(AE,BD,NY,AH9,Aco,
Acn);}else if(!(((B=A.lb(extent,C6))[0]>=B[2])||(B[1]>=B[3]))||(ZE===W))Aog=W.XL(
C6,BD,NY,AH9,Aco,Acn);W=W.AH;if(!!Aog){if(!Aow||((Aog.AtW<Aow.AtW)&&(Aog.AtW>=0)
))Aow=Aog;if(!Aog.AtW)W=null;}}else W=W.AH;Aco=null;}return Aow;},Aty:function(C6
){var B;var F;var W=this.B6;var Lo=BC;var Azh=true;var result=(C6=F=A.abg(C6,this.
M.slice(0,2)),F);while(!!W){if(((W.T&0x200)===0x200)){var AsZ=(C.Z.isPrototypeOf(
W)?W:null);Lo=A.lb(C6,AsZ.M);Azh=((AsZ.T&0x1)===0x1);}if(((W.T&0x1)===0x1)){if(((
W.T&0x400)===0x400)){if(Azh){var AE=A.lb(W.GetClipping(),Lo);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,W.Aty(AE));}}else{var AE=A.lb(W.GetClipping(),
C6);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,W.Aty(AE));}}W=W.Ag;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cq:function(Q7,Ut){var B;
var SY=this.T;if(((!!this.Ab&&!!!this.Fp)&&((this.T&0x80001)===0x80001))&&((Ut&0x80000
)===0x80000))this.Ab.Bd(this.GetClipping());C.Ej.Cq.call(this,Q7,Ut);if((((!!this.
Ab&&!!!this.Fp)&&((this.T&0x1)===0x1))&&((Q7&0x80000)===0x80000))&&!((SY&0x80000
)===0x80000))this.Ab.Bd(this.GetClipping());var WY=this.T^SY;if(!!this.AY&&((WY&
0x40)===0x40)){if(((this.T&0x40)===0x40))this.AY.Cq(0x40,0x0);else this.AY.Cq(0x0
,0x40);}if(!!this.GZ&&((WY&0x40)===0x40)){if(((this.T&0x40)===0x40)&&((this.GZ.CV.
T&0x14)===0x14))this.GZ.CV.Cq(0x40,0x0);else this.GZ.CV.Cq(0x0,0x40);}if(((WY&0x10
)===0x10)){var W;for(W=this.B6;!!W;W=W.Ag)if((((W.T&0x300000)===0x300000)&&!((W.
T&0x80)===0x80))&&(!((W.T&0x10000)===0x10000)||(this.GZ.CV===W)))W.Cq(Q7&0x10,Ut&
0x10);}if(!!WY){this.T=this.T|0x8000;A.pe([this,this.AzW],this);}},G:function(E){
var B;if(A.aaY(E,this.M))return;var Ale=[(B=this.M)[2]-B[0],B[3]-B[1]];var AIM=[
E[2]-E[0],E[3]-E[1]];var Apb=!A.aaX(Ale,AIM);if(Apb&&!!this.Fp){this.Fp.AqQ(AIM);
A.we(this,0);A.we(this.Fp,0);}C.Ej.G.call(this,E);if((Apb&&(Ale[0]>0))&&(Ale[1]>
0)){var A9=[].concat(B9,Ale);var W=this.B6;while(!!W){if((!W.El&&(W.Ps!==0x14))&&
!((W.T&0x400)===0x400))W.AsN(A9,null);W=W.Ag;}}if(Apb){this.T=this.T|0x5000;A.pe([
this,this.AzW],this);}},A1i:function(CG){var Ba1=(C.KeyEvent.isPrototypeOf(CG)?CG:
null);var DV=this.AIF;if(!Ba1)return null;while(!!DV&&(!DV.Bw||!DV.GL(Ba1)))DV=DV.
Ag;return DV;},Byl:function(H){if(!!this.Fp){this.Fp.CV=this;var AE=A.abg(this.Aty(
A.abh(this.Fp.Qq,this.M.slice(0,2))),this.M.slice(0,2));this.Fp.Aue(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.A$8(this.Fp,AE,B9,255,true);this.Fp.
CV=null;}},A$8:function(CT,aClip,aOffset,Cb,aBlend){var B;var W=this.B6;var Lo=BC;
var Azh=true;this.Be2(CT,aClip,aOffset,Cb,aBlend);while(!!W){if(((W.T&0x200)===0x200
)){var AsZ=(C.Z.isPrototypeOf(W)?W:null);Azh=((AsZ.T&0x1)===0x1);Lo=aClip;if(!((
AsZ.T&0x80000)===0x80000))Lo=A.lb(Lo,A.abh(AsZ.M,aOffset));}if(((W.T&0x1)===0x1)
){if(((W.T&0x400)===0x400)){if(Azh){var AE=A.lb(A.abh(W.GetClipping(),aOffset),Lo
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))W.J5(CT,AE,aOffset,Cb,aBlend);}}else{var AE=
A.lb(A.abh(W.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
W.J5(CT,AE,aOffset,Cb,aBlend);}}W=W.Ag;}this.Be5(CT,aClip,aOffset,Cb,aBlend);},BcO:
function(){var B;var AZP=((this.T&0x1000)===0x1000);var AhW=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var ZN=false;var AcG=BC;var KO=BC;var ZO=B9;var AsJ=0;var AsK=0;var
AsI=0;var P3=0;var W=this.B7;var JV=null;var Ak8=null;while(!!W){if(((W.T&0x800)===
0x800)){ZN=true;W.T=W.T&~0x800;}if(ZN&&((W.T&0x200)===0x200)){ZN=false;if(!!(C.Z.
isPrototypeOf(W)?W:null).Aga)W.T=W.T|0x1000;}W=W.AH;}ZN=false;W=this.B6;if(AZP){
this.T=this.T&~0x1000;AZP=!((AhW[0]>=AhW[2])||(AhW[1]>=AhW[3]));}this.T=this.T|0x2000;
while(!!W){if(!Ak8&&(AsI!==P3)){var Ac3=W;var AI9=0;var AzC=AcG[2]-AcG[0];var AxV=
AcG[3]-AcG[1];var AHX=0;var Apn=B9;do if(((Ac3.T&0x200)===0x200))Ac3=null;else if(((
Ac3.T&0x401)===0x401)){Apn=[(B=Ac3.GetExtent())[2]-B[0],B[3]-B[1]];if((P3===3)||(
P3===4))AzC=AzC-Apn[0];if((P3===1)||(P3===2))AxV=AxV-Apn[1];if(!Ak8||((AzC>=0)&&(
AxV>=0))){Ak8=Ac3;Ac3=Ac3.Ag;if((P3===3)||(P3===4)){AzC=AzC-AsJ;if(Apn[1]>AI9)AI9=
Apn[1];}if((P3===1)||(P3===2)){AxV=AxV-AsK;if(Apn[0]>AHX)AHX=Apn[0];}}else Ac3=null;
}else Ac3=Ac3.Ag;while(!!Ac3);if(!Ak8)Ak8=JV;KO=AcG;switch(AsI){case 9:case 11:KO=[
].concat(KO.slice(0,3),KO[1]+AI9);break;case 10:case 12:KO=A.abP(KO,KO[3]-AI9);break;
case 5:case 7:KO=A.abN(KO,KO[0]+AHX);break;case 6:case 8:KO=[].concat(KO[2]-AHX,
KO.slice(1,4));break;default:;}}if(((W.T&0x400)===0x400)){if(!!W.El&&(W.El.Nm!==
JV))W.El=null;if((!W.El&&ZN)&&((W.Ps!==0x14)||!!P3))W.AsN(KO,JV);}if(!!W.El){if(
AZP&&!((W.T&0x400)===0x400))W.AtI(AhW,0);if(ZN&&((W.T&0x400)===0x400)){var CX=W.
AtI(A.abh(KO,ZO),P3);if(((W.T&0x1)===0x1)){var Bo=B9;switch(P3){case 3:Bo=[CX[0]+
AsJ,Bo[1]];break;case 4:Bo=[-CX[0]-AsJ,Bo[1]];break;case 1:Bo=[Bo[0],CX[1]+AsK];
break;case 2:Bo=[Bo[0],-CX[1]-AsK];break;default:;}ZO=A.abf(ZO,Bo);}}}if(((W.T&0x200
)===0x200)){if(ZN)A.pe(JV.Eh,JV);ZN=((W.T&0x1000)===0x1000);JV=(C.Z.isPrototypeOf(
W)?W:null);if(ZN){W.T=W.T&~0x1000;AsI=JV.Aga;P3=AsI;AcG=A.abh(JV.M,JV.Bp);KO=AcG;
ZO=B9;AsJ=JV.Space+JV.ASz;AsK=JV.Space;ZN=!((AcG[0]>=AcG[2])||(AcG[1]>=AcG[3]));
Ak8=null;switch(AsI){case 9:case 10:P3=3;break;case 11:case 12:P3=4;break;case 5:
case 6:P3=1;break;case 7:case 8:P3=2;break;default:;}}if(ZN)this.Bd(JV.M);}if(W===
Ak8){switch(AsI){case 9:case 11:ZO=[0,(ZO[1]+(KO[3]-KO[1]))+AsK];break;case 10:case
12:ZO=[0,(ZO[1]-(KO[3]-KO[1]))-AsK];break;case 5:case 7:ZO=[(ZO[0]+(KO[2]-KO[0])
)+AsJ,0];break;case 6:case 8:ZO=[(ZO[0]-(KO[2]-KO[0]))-AsJ,0];break;default:;}Ak8=
null;}W=W.Ag;}if(ZN)A.pe(JV.Eh,JV);this.T=this.T&~0x2000;this.Bg([AhW[2]-AhW[0],
AhW[3]-AhW[1]]);},Jx:function(H){A.pe([this,this.AzW],this);},AzW:function(H){var
B;var Byt=((this.T&0x1000)===0x1000);if(((this.T&0x4000)===0x4000)){this.T=this.
T&~0x4000;this.BcO();}if(((this.T&0x8000)===0x8000)||Byt){this.T=this.T&~0x8000;
this.Ai(this.T);}},Ba:function(E){var B;if(!!E&&(E.Ab!==this))throw new Error(EU
);if(!!E&&!((E.T&0x14)===0x14))E=null;if(!!E&&((E.T&0x10000)===0x10000))E=null;if(
E===this.AY)return;if(!!this.AY)this.AY.Cq(0x0,0x60);this.AY=E;if(!!E){if(((this.
T&0x40)===0x40))E.Cq(0x60,0x0);else E.Cq(0x20,0x0);}},A_o:function(Ap){this.Ba(Ap
);},AQl:function(){return!!this.Fp;},AqL:function(E){var B;if(!!this.Fp===E)return;
if(!E){this.Fp.ACS=null;this.Fp.AqQ(B9);this.Fp=null;}if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Bd(this.GetClipping());if(E){this.Fp=A._NewObject(A.Graphics.Canvas
,0);this.Fp.AqQ([(B=this.M)[2]-B[0],B[3]-B[1]]);this.Fp.ACS=[this,this.Byl];}A.we(
this,0);},A6b:function(){var B;return((this.T&0x100000)===0x100000);},Ar:function(
E){if(E)this.Cq(0x100000,0x0);else this.Cq(0x0,0x100000);},Dy:function(E){var B;
if(E>255)E=255;if(E<0)E=0;if(E===this.GS)return;this.GS=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.GetClipping());},AXT:function(Ap){this.Dy(Ap);},Aj:function(
E){if(E)this.Cq(0x400,0x0);else this.Cq(0x0,0x400);},Biv:function(E){if(E)this.Cq(
0x2,0x0);else this.Cq(0x0,0x2);},Fc:function(){var B;return((this.T&0x1)===0x1);
},Y:function(E){if(E)this.Cq(0x1,0x0);else this.Cq(0x0,0x1);},ExtendClipping:function(
AnU,AnV,AnW,AnT){var B;var AxN=this.M;var Ra=AxN;if(AnU<0)AnU=0;if(AnU>255)AnU=255;
if(AnV<0)AnV=0;if(AnV>255)AnV=255;if(AnW<0)AnW=0;if(AnW>255)AnW=255;if(AnT<0)AnT=
0;if(AnT>255)AnT=255;Ra=[].concat(Ra[0]-(Math.max(AnU,this.Ayk)&0xFF),Ra.slice(1
,4));Ra=A.abN(Ra,Ra[2]+(Math.max(AnV,this.Ayl)&0xFF));Ra=A.abP(Ra,Ra[1]-(Math.max(
AnW,this.Aym)&0xFF));Ra=[].concat(Ra.slice(0,3),Ra[3]+(Math.max(AnT,this.Ayj)&0xFF
));if(AnU!==this.Ayk){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fp)&&!((this.
T&0x80000)===0x80000)){var Av=Ra;Av=A.abN(Av,AxN[0]);this.Ab.Bd(Av);}this.Ayk=AnU&
0xFF;}if(AnV!==this.Ayl){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fp)&&!((
this.T&0x80000)===0x80000)){var Av=Ra;Av=[].concat(AxN[2],Av.slice(1,4));this.Ab.
Bd(Av);}this.Ayl=AnV&0xFF;}if(AnW!==this.Aym){if(((!!this.Ab&&((this.T&0x1)===0x1
))&&!!!this.Fp)&&!((this.T&0x80000)===0x80000)){var Av=Ra;Av=[].concat(Av.slice(
0,3),AxN[1]);this.Ab.Bd(Av);}this.Aym=AnW&0xFF;}if(AnT!==this.Ayj){if(((!!this.Ab&&((
this.T&0x1)===0x1))&&!!!this.Fp)&&!((this.T&0x80000)===0x80000)){var Av=Ra;Av=A.
abP(Av,AxN[3]);this.Ab.Bd(Av);}this.Ayj=AnT&0xFF;}},Be5:function(CT,aClip,aOffset
,Cb,aBlend){},Be2:function(CT,aClip,aOffset,Cb,aBlend){},GetMaximalSize:function(
){return Hc;},GetMinimalSize:function(){return B9;},ASG:function(Ii,NX,WH,SN,SO,
Ahq,ON,Q6,Ln,Ll,Lm){var B;if(!this.GZ){this.Aj7(Ii,NX,WH,SN,SO,null,null,Ln,Ll,Lm
);return;}var Ald=this.GZ;var Jv=Ald.Ag;if(((Ii.T&0x10000)===0x10000)&&(this.GZ.
CV!==Ii))throw new Error(I7);var AcN=A._NewObject(C.ALW,0);var Rc=Ald.Rc;var Rl=
null;var L3=null;if(!!Jv){Rl=Jv.Rl;L3=Jv.L3;}if(!!Jv&&!!Ald.Ao4)Rl=Ald.Ao4;if(!!
Jv&&!!ON)L3=ON;if(!!Ahq)Rc=Ahq;if(!NX)NX=A._GetAutoObject(A.acl.ArE);if(!WH)WH=NX;
if(!SO)SO=SN;if(!SN)SN=SO;AcN.Rc=WH;AcN.L3=SN;AcN.Rl=SO;AcN.Ao4=Q6;AcN.CV=Ii;AcN.
Ag=this.GZ.Ag;this.GZ.Ag=null;this.GZ=AcN;if(this.AY===Ii)this.Ba(null);Ald.CV.Cq(
0x0,0x10040);if(((this.T&0x40)===0x40)&&((Ii.T&0x4)===0x4))Ii.Cq(0x10040,0x0);else
Ii.Cq(0x10000,0x0);if(!!L3){this.Nz(Jv.CV,L3.Adt(),null,null,Lm);this.Nz(Ald.CV,
Rc.RL(),null,null,true);this.Nz(AcN.CV,NX.RM(),Ln,Ll,true);}else if(!!Rl){this.Nz(
Jv.CV,Rl.Adu(),null,null,Lm);this.Nz(Ald.CV,Rc.RL(),null,null,true);this.Nz(AcN.
CV,NX.RM(),Ln,Ll,true);}else if(!!Rc){this.Nz(Ald.CV,Rc.RL(),null,null,Lm);this.
Nz(AcN.CV,NX.RM(),Ln,Ll,true);}else this.Nz(AcN.CV,NX.RM(),Ln,Ll,Lm);},ApK:function(
Ii,Ahq,ON,Q6,Ln,Ll,Lm){var B;if(!this.GZ)return;if(!Ii)return;var Kq=this.GZ;var
Jv=this.GZ.Ag;var Ao9=null;while((!!Kq&&(Kq.CV!==Ii))&&!!Kq.Ag){Ao9=Kq;Kq=Jv;Jv=
Kq.Ag;}if(!Kq||(Kq.CV!==Ii))throw new Error(II);if(!Ao9){this.GZ=Jv;Kq.Ag=null;}
else{Ao9.Ag=Jv;Kq.Ag=null;}Kq.CV.Cq(0x0,0x10040);if(((((this.T&0x10)===0x10)&&!!
Jv)&&!Ao9)&&((Jv.CV.T&0x200000)===0x200000))Jv.CV.Cq(0x10,0x0);if(((((this.T&0x40
)===0x40)&&!!Jv)&&!Ao9)&&((Jv.CV.T&0x4)===0x4))Jv.CV.Cq(0x40,0x0);var Rc=Kq.Rc;var
Rl=null;var L3=null;if(!!Jv)Rl=Jv.Rl;if(!!Jv&&!!Kq.Ao4)Rl=Kq.Ao4;if(!!Jv&&!!Q6)Rl=
Q6;if(!!Ao9&&!!Jv)L3=Jv.L3;if((!!Ao9&&!!Jv)&&!!ON)L3=ON;if(!!Ahq)Rc=Ahq;if(!!L3){
this.Nz(Jv.CV,L3.Adt(),null,null,Lm);this.Nz(Kq.CV,Rc.RL(),Ln,Ll,true);}else if(
!!Rl){this.Nz(Jv.CV,Rl.Adu(),null,null,Lm);this.Nz(Kq.CV,Rc.RL(),Ln,Ll,true);}else
this.Nz(Kq.CV,Rc.RL(),Ln,Ll,Lm);},Aj7:function(Ii,NX,WH,SN,SO,ON,Q6,Ln,Ll,Lm){var
B;if(!Ii)return;if(!!this.GZ&&(this.GZ.CV===Ii)){this.ASG(Ii,NX,WH,SN,SO,null,ON
,Q6,Ln,Ll,Lm);return;}if(((Ii.T&0x10000)===0x10000))throw new Error(I7);var Kq=A.
_NewObject(C.ALW,0);if(!!this.GZ&&!this.GZ.L3){if(!Q6)Q6=ON;if(!ON)ON=Q6;}var L3=
null;if(!!this.GZ)L3=this.GZ.L3;if(!!this.GZ&&!!ON)L3=ON;if(!NX)NX=A._GetAutoObject(
A.acl.ArE);if(!WH)WH=NX;if(!SO)SO=SN;if(!SN)SN=SO;Kq.Rc=WH;Kq.L3=SN;Kq.Rl=SO;Kq.
Ao4=Q6;if(this.AY===Ii)this.Ba(null);if(!!this.GZ&&((this.GZ.CV.T&0x200000)===0x200000
))this.GZ.CV.Cq(0x0,0x10);if(!!this.GZ)this.GZ.CV.Cq(0x0,0x40);if(((this.T&0x40)===
0x40)&&((Ii.T&0x4)===0x4))Ii.Cq(0x10040,0x0);else Ii.Cq(0x10000,0x0);Kq.CV=Ii;Kq.
Ag=this.GZ;this.GZ=Kq;if(!!L3){this.Nz(this.GZ.Ag.CV,L3.Adt(),null,null,Lm);this.
Nz(Ii,NX.RM(),Ln,Ll,true);}else this.Nz(Ii,NX.RM(),Ln,Ll,Lm);},A4z:function(Ae){
var B;return(B=Ae)&&((this.T&B)===B);},A5c:function(KM){var tmp=this;while(!!tmp
){KM=A.abe(KM,tmp.M.slice(0,2));tmp=tmp.Ab;}return KM;},BfZ:function(KM){var tmp=
this;while(!!tmp){KM=A.abf(KM,tmp.M.slice(0,2));tmp=tmp.Ab;}return KM;},DispatchEvent:
function(CG){var B;var W=this.AY;var BS=(C.O.isPrototypeOf(W)?W:null);var Gl=null;
var A0j=!!this.WZ&&(!!this.WZ.FD||!!this.WZ.B6);if(!!W&&((((W.T&0x10000)===0x10000
)||((W.T&0x40000)===0x40000))||((W.T&0x20000)===0x20000))){W=null;BS=null;}if(!!
this.GZ&&!A0j)Gl=this.GZ.CV.DispatchEvent(CG);if(!Gl&&!!BS)Gl=BS.DispatchEvent(CG
);else if(!Gl&&!!W)Gl=W.GL(CG);if(!Gl)Gl=this.GL(CG);if(!Gl)Gl=this.A1i(CG);return Gl;
},BroadcastEventAtPosition:function(CG,IK,aFilter){var B;var W=this.B7;var Gl=null;
while(!!W&&!Gl){if((!aFilter||((B=aFilter)&&((W.T&B)===B)))&&A.wa(W.GetExtent(),
IK)){var BS=(C.O.isPrototypeOf(W)?W:null);if(!!BS)Gl=BS.BroadcastEventAtPosition(
CG,A.abe(IK,BS.M.slice(0,2)),aFilter);else Gl=W.GL(CG);}W=W.AH;}if(!Gl)Gl=this.GL(
CG);return Gl;},BroadcastEvent:function(CG,aFilter){var B;var W=this.B7;var Gl=null;
while(!!W&&!Gl){if(!aFilter||((B=aFilter)&&((W.T&B)===B))){var BS=(C.O.isPrototypeOf(
W)?W:null);if(!!BS)Gl=BS.BroadcastEvent(CG,aFilter);else Gl=W.GL(CG);}W=W.AH;}if(
!Gl)Gl=this.GL(CG);if(!Gl)Gl=this.A1i(CG);return Gl;},Bg:function(aSize){},Ai:function(
Ae){},Bgd:function(){this.T=this.T|0x4000;A.pe([this,this.AzW],this);},An:function(
){this.T=this.T|0x8000;A.pe([this,this.AzW],this);},Bd:function(C6){var B;var BS=
this;while(!!BS&&!((C6[0]>=C6[2])||(C6[1]>=C6[3]))){var ZL=BS.Fp;if(!BS.Ab&&(BS!==
this)){BS.Bd(C6);return;}if(!!ZL){var Bwf=ZL.Qq;ZL.Qq=A.wC(ZL.Qq,C6);if(!A.aaY(Bwf
,ZL.Qq)){A.we(BS,0);A.we(ZL,0);}}if(!((BS.T&0x1)===0x1))return;var Av=BS.M;C6=A.
abh(C6,Av.slice(0,2));if(!!BS.Fp||!((BS.T&0x80000)===0x80000)){if(!!!BS.Fp){Av=[
].concat(Av[0]-BS.Ayk,Av.slice(1,4));Av=A.abP(Av,Av[1]-BS.Aym);Av=A.abN(Av,Av[2]+
BS.Ayl);Av=[].concat(Av.slice(0,3),Av[3]+BS.Ayj);}C6=A.lb(C6,Av);}BS=BS.Ab;}},RT:
function(Af,GF,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var Afw=A.aaI(Af.
GetExtent());var W=Af;var AY1=null;var A$K=0;var IP=0x10000;var AI5;if(((aFilter&
0x10000)===0x10000))IP=0x0;var top=((GF===4)||(GF===1))||(GF===6);var bottom=((GF===
5)||(GF===3))||(GF===8);var left=((GF===2)||(GF===1))||(GF===3);var right=((GF===
7)||(GF===6))||(GF===8);if(((!top&&!bottom)&&!left)&&!right)return null;while(!!
W){W=W.AH;if(!W)W=this.B7;if(W===Af)W=null;if((!!W&&(!aFilter||((B=aFilter)&&((W.
T&B)===B))))&&(!IP||!((B=IP)&&((W.T&B)===B))))for(AI5=0;AI5<2;AI5++){var Av=W.GetExtent(
);var s=[Av[2]-Av[0],Av[3]-Av[1]];if(!!!AI5){if((left&&(s[0]>s[1]))&&(Av[2]<Afw[
0]))Av=[].concat(Av[2]-s[1],Av.slice(1,4));if((right&&(s[0]>s[1]))&&(Av[0]>Afw[0
]))Av=A.abN(Av,Av[0]+s[1]);if((top&&(s[1]>s[0]))&&(Av[3]<Afw[1]))Av=A.abP(Av,Av[
3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Av[1]>Afw[1]))Av=[].concat(Av.slice(0,3),Av[
1]+s[0]);}var Bo=A.abe(A.aaI(Av),Afw);var Q9=Bo;if(Q9[0]<0)Q9=[-Q9[0],Q9[1]];if(
Q9[1]<0)Q9=[Q9[0],-Q9[1]];if(((((!left||(Bo[0]<=-Q9[1]))&&(!right||(Bo[0]>=Q9[1]
)))&&(!top||(Bo[1]<=-Q9[0])))&&(!bottom||(Bo[1]>=Q9[0])))&&((Q9[0]>0)||(Q9[1]>0)
)){var Re=Bo[0];var Rf=Bo[1];var I_=Math.sqrt((Re*Re)+(Rf*Rf));var AIE=0;if(!left&&
!right)AIE=I_/Q9[1];if(!top&&!bottom)AIE=I_/Q9[0];I_=(I_*AIE)*AIE;if((I_<A$K)||!
AY1){A$K=I_;AY1=W;}}}}return AY1;},ApQ:function(Af,aFilter){var B;if(!!Af&&(Af.Ab
!==this))return null;var W=this.B7;var IP=0x10000;if(((aFilter&0x10000)===0x10000
))IP=0x0;if(!!Af)W=Af.AH;while(!!W){if((!aFilter||((B=aFilter)&&((W.T&B)===B)))&&(
!IP||!((B=IP)&&((W.T&B)===B))))return W;W=W.AH;}return null;},Vi:function(Af,aFilter
){var B;if(!!Af&&(Af.Ab!==this))return null;var W=this.B6;var IP=0x10000;if(((aFilter&
0x10000)===0x10000))IP=0x0;if(!!Af)W=Af.Ag;while(!!W){if((!aFilter||((B=aFilter)&&((
W.T&B)===B)))&&(!IP||!((B=IP)&&((W.T&B)===B))))return W;W=W.Ag;}return null;},ABg:
function(Af,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var Alb=Af.Ag;var Alp=
Af.AH;var IP=0x10000;if(((aFilter&0x10000)===0x10000))IP=0x0;while(!!Alb||!!Alp){
if((!!Alb&&(!aFilter||((B=aFilter)&&((Alb.T&B)===B))))&&(!IP||!((B=IP)&&((Alb.T&
B)===B))))return Alb;if((!!Alp&&(!aFilter||((B=aFilter)&&((Alp.T&B)===B))))&&(!IP||
!((B=IP)&&((Alp.T&B)===B))))return Alp;if(!!Alb)Alb=Alb.Ag;if(!!Alp)Alp=Alp.AH;}
return null;},C_:function(aFilter){var B;var W=this.B6;var AE=BC;var IP=0x10000;
if(((aFilter&0x10000)===0x10000))IP=0x0;while(!!W){if((!((W.T&0x400)===0x400)&&(
!aFilter||((B=aFilter)&&((W.T&B)===B))))&&(!IP||!((B=IP)&&((W.T&B)===B))))AE=A.wC(
AE,W.GetExtent());W=W.Ag;}return AE;},Nz:function(Ko,FC,Ln,Ll,Lm){var B;if(!Ko)return;
if(!FC)throw new Error(OH);if((!!FC.O||!!FC.Ab)||!!FC.OZ)throw new Error(PM);if(
!!Ko.Ab&&(Ko.Ab!==this))throw new Error(PN);if(!this.WZ)this.WZ=A._NewObject(C.ASL
,0);FC.Ab=this;FC.O=Ko;FC.AIP=Ll;FC.A0I=Ln;if(!!Ko.Ao5)Ko.Ao5.OZ.Bk4(Ko.Ao5);Ko.
Ao5=FC;Ko.T=Ko.T|0x20000;if((Lm&&!!this.WZ.B7)&&!this.WZ.B7.AO7())(A.acl.ABb.isPrototypeOf(
B=this.WZ.B7)?B:null).A2j(FC);else{var OZ=A._NewObject(A.acl.ABb,0);OZ.A2j(FC);this.
WZ.A8w(OZ,false);}},AgV:function(Af,JQ){var B;if(!Af)throw new Error(CI);if(Af.Ab
!==this)throw new Error(E2);if(!!JQ&&(JQ.Ab!==this))throw new Error(Li);if(Af.Ag===
JQ)return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.El)Af.AH.T=Af.AH.T|0x800;Af.
T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jx],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.
pe([this,this.Jx],this);}if(!!Af.Ag)Af.Ag.AH=Af.AH;else this.B7=Af.AH;if(!!Af.AH
)Af.AH.Ag=Af.Ag;else this.B6=Af.Ag;var Gk=null;var Ik=this.B7;var LB=Af.JL;if(!!
JQ){Gk=JQ;Ik=JQ.AH;}if(!!Gk&&(LB>Gk.JL))LB=Gk.JL;if(!!Ik&&(LB<Ik.JL))LB=Ik.JL;if(
LB!==Af.JL){Af.Ab=null;Af.Aq3(LB);Af.Ab=this;}if(!JQ){if(!!this.B7)this.B7.Ag=Af;
Af.AH=this.B7;Af.Ag=null;this.B7=Af;}else{Af.Ag=JQ;Af.AH=JQ.AH;JQ.AH=Af;if(!!Af.
AH)Af.AH.Ag=Af;}if(this.B6===JQ)this.B6=Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping(
));},Y0:function(Af){var B;if(!Af)throw new Error(CI);if(Af.Ab!==this)throw new Error(
E2);if(!Af.Ag)return;var Ik=this.B7;var LB=Af.JL;while(!!Ik&&(Ik.JL>LB))Ik=Ik.AH;
if(((Ik===Af)||!Ik)||(Ik.Ag===Af))return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&
!!Af.El)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jx],this);}if(((Af.T&0x200)===0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.
T|0x4000;A.pe([this,this.Jx],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;else this.B6=Af.Ag;
Af.Ag.AH=Af.AH;Af.AH=Ik;Af.Ag=Ik.Ag;Ik.Ag=Af;if(!!Af.Ag)Af.Ag.AH=Af;else this.B7=
Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());},Kh:function(Af,PU){var B;if(
!Af)throw new Error(CI);if(Af.Ab!==this)throw new Error(E2);var Ik=Af;var Gk=Af;
var LB=Af.JL;while(((PU>0)&&!!Ik.Ag)&&(Ik.Ag.JL<=LB)){Ik=Ik.Ag;PU=PU-1;}while(((
PU<0)&&!!Gk.AH)&&(Gk.AH.JL>=LB)){Gk=Gk.AH;PU=PU+1;}if((Ik===Af)&&(Gk===Af))return;
if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.El)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;
this.T=this.T|0x4000;A.pe([this,this.Jx],this);}if(((Af.T&0x200)===0x200)){if(!!
Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jx],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B6===Af)this.
B6=Af.Ag;if(this.B7===Af)this.B7=Af.AH;if(Ik!==Af){Af.Ag=Ik.Ag;Af.AH=Ik;Ik.Ag=Af;
if(!!Af.Ag)Af.Ag.AH=Af;}if(Gk!==Af){Af.Ag=Gk;Af.AH=Gk.AH;Gk.AH=Af;if(!!Af.AH)Af.
AH.Ag=Af;}if(!Af.Ag)this.B7=Af;if(!Af.AH)this.B6=Af;if(((Af.T&0x1)===0x1))this.Bd(
Af.GetClipping());},HG:function(Af){var B;if(!Af)throw new Error(PO);if(Af.Ab!==
this)throw new Error(E2);if((((Af.T&0x401)===0x401)&&!!Af.AH)&&!!Af.El){Af.AH.T=
Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jx],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jx
],this);}Af.El=null;if(this.AY===Af)this.Ba(this.ABg(Af,0x14));if(!!Af.AH)Af.AH.
Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B6===Af)this.B6=Af.Ag;if(this.B7===Af
)this.B7=Af.AH;Af.Ab=null;Af.Ag=null;Af.AH=null;if((!((Af.T&0x10)===0x10)&&((Af.
T&0x100000)===0x100000))&&!((this.T&0x80)===0x80))Af.Cq(0x10,0x0);if(((Af.T&0x1)===
0x1))this.Bd(Af.GetClipping());},AKe:function(Af,JQ){var B;if(!Af)throw new Error(
Km);if(!!Af.Ab)throw new Error(NV);if(!!JQ&&(JQ.Ab!==this))throw new Error(Li);var
Gk=null;var Ik=this.B7;var LB=Af.JL;if(!!JQ){Gk=JQ;Ik=JQ.AH;}if(!!Gk&&(LB>Gk.JL)
)LB=Gk.JL;if(!!Ik&&(LB<Ik.JL))LB=Ik.JL;if(LB!==Af.JL){Af.Ab=null;Af.Aq3(LB);Af.Ab=
this;}if(!JQ){if(!!this.B7)this.B7.Ag=Af;Af.AH=this.B7;this.B7=Af;}else{Af.Ag=JQ;
Af.AH=JQ.AH;JQ.AH=Af;if(!!Af.AH)Af.AH.Ag=Af;}Af.Ab=this;if(this.B6===JQ)this.B6=
Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());if(((Af.T&0x80)===0x80)&&(A.aam(
).AMR()===Af))Af.Cq(0x10,0x0);else if(!((this.T&0x10)===0x10)&&((Af.T&0x200010)===
0x200010))Af.Cq(0x0,0x10);else if((((this.T&0x10)===0x10)&&!((Af.T&0x10)===0x10)
)&&((Af.T&0x100000)===0x100000))Af.Cq(0x10,0x0);if(((!this.AY&&((Af.T&0x4)===0x4
))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.Ba(Af);if(((Af.T&0x401
)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jx],this);}if(((
Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jx],this
);}},J:function(Af,PU){var B;if(!Af)throw new Error(Km);if(!!Af.Ab)throw new Error(
NV);var Gk=null;var LB=Af.JL;if(((PU<0)&&!!this.B7)&&(this.B7.JL>=LB)){Gk=this.B7;
PU=PU+1;}while((((PU<0)&&!!Gk)&&!!Gk.AH)&&(Gk.AH.JL>=LB)){Gk=Gk.AH;PU=PU+1;}if((
!Gk&&!!this.B7)&&(this.B7.JL>LB))Gk=this.B7;while((!!Gk&&!!Gk.AH)&&(Gk.AH.JL>LB)
)Gk=Gk.AH;if(!Gk){Af.Ab=this;Af.AH=this.B7;if(!!this.B7)this.B7.Ag=Af;if(!this.B6
)this.B6=Af;this.B7=Af;}else{Af.Ab=this;Af.AH=Gk.AH;Af.Ag=Gk;Gk.AH=Af;if(!!Af.AH
)Af.AH.Ag=Af;else this.B6=Af;}if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());if(((
Af.T&0x80)===0x80)&&(A.aam().AMR()===Af))Af.Cq(0x10,0x0);else if(!((this.T&0x10)===
0x10)&&((Af.T&0x200010)===0x200010))Af.Cq(0x0,0x10);else if((((this.T&0x10)===0x10
)&&!((Af.T&0x10)===0x10))&&((Af.T&0x100000)===0x100000))Af.Cq(0x10,0x0);if(((!this.
AY&&((Af.T&0x4)===0x4))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.
Ba(Af);if(((Af.T&0x401)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this
,this.Jx],this);}if(((Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;
A.pe([this,this.Jx],this);}},A6d:function(){return this.AY;},Ava:function(){return this.
GS;},_Init:function(aArg){C.Ej._Init.call(this,aArg);this.__proto__=C.O;this.T=0x10001F;
this.Init(aArg);},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.B6)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AIF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fp)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.GZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
WZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ao5)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Group"
};C.Root={Ri:null,Ju:null,Ff:A.abi(10,null,null),Asw:null,AhH:null,AzY:0,H5:0,LZ:
A.abi(10,0,null),AH3:A.abi(10,A.wg,null),WX:A.abi(10,0,null),Afd:A.abi(10,A.wf,null
),AsB:A.abi(10,0,null),AhG:A.abi(10,A.wf,null),WW:A.abi(10,A.wf,null),Rb:A.abi(10
,A.wf,null),Acx:A.abi(10,A.wf,null),ED:0,AIr:0,AIq:0,Ob:A.abi(4,0,null),J0:A.abi(
4,A.wg,null),JX:0,AyH:0,AsP:0,Ayw:true,Init:function(aArg){if(!!!this.I){var obj=
this;A.abD(obj);}},Ia:function(){return this;},J5:function(CT,aClip,aOffset,Cb,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(!fullScreenUpdate)CT.Aue(aClip
,A.abh(A.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);C.O.J5.call(this,CT,aClip,aOffset,Cb,aBlend);},Cq:function(Q7,
Ut){var B;C.O.Cq.call(this,Q7,Ut);if(!this.Ab&&(((Q7&0x1)===0x1)||((Ut&0x1)===0x1
)))this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ab&&(((Q7&0x2)===0x2)||((
Ut&0x2)===0x2)))this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ba:function(E){if((
E!==null)||!E)C.O.Ba.call(this,E);},AqL:function(E){var B;var Bwd=this.Fp;C.O.AqL.
call(this,E);if(((Bwd!==this.Fp)&&!this.Ab)&&((this.T&0x1)===0x1))this.Bd([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},Dy:function(E){var B;var BL=this.GS;C.O.Dy.call(
this,E);if(((BL!==this.GS)&&!this.Ab)&&((this.T&0x1)===0x1))this.Bd([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CG){if(!!CG){CG.AuP=!!this.H5;if(
!!this.H5)CG.Bt=this.H5;}var Gl=null;if(!!this.Ju){Gl=this.Ju.CV.DispatchEvent(CG
);if(!Gl)Gl=this.GL(CG);if(!Gl)Gl=this.A1i(CG);this.H5=0;return Gl;}Gl=C.O.DispatchEvent.
call(this,CG);this.H5=0;return Gl;},BroadcastEvent:function(CG,aFilter){if(!!CG){
CG.AuP=!!this.H5;if(!!this.H5)CG.Bt=this.H5;}var Gl=C.O.BroadcastEvent.call(this
,CG,aFilter);this.H5=0;return Gl;},Bd:function(C6){var B;if(this.AzY>0)throw new
Error(PP);if(!!this.Fp&&!this.Ab){if(((B=this.Fp.Qq)[0]>=B[2])||(B[1]>=B[3])){A.
we(this,0);A.we(this.Fp,0);}this.Fp.Qq=A.wC(this.Fp.Qq,C6);}var fullScreenUpdate=
false;fullScreenUpdate=A.m7;if(fullScreenUpdate)C6=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ab){C.O.Bd.call(this,C6);return;}C6=A.lb(A.abh(C6,this.M.slice(0
,2)),this.M);if((C6[0]>=C6[2])||(C6[1]>=C6[3]))return;var P;for(P=0;P<this.JX;P=
P+1)if(!(((B=A.lb(this.J0.Get(P),C6))[0]>=B[2])||(B[1]>=B[3]))){this.J0.Set(P,A.
wC(this.J0.Get(P),C6));this.Ob.Set(P,A.aaH(this.J0.Get(P)));return;}if(this.JX<3
){this.J0.Set(this.JX,C6);this.Ob.Set(this.JX,A.aaH(C6));this.JX=this.JX+1;return;
}var H7;var Rh;var AyG=0;var AyI=0;var A$J=2147483647;this.J0.Set(this.JX,C6);this.
Ob.Set(this.JX,A.aaH(C6));for(H7=0;H7<=this.JX;H7=H7+1)for(Rh=H7+1;Rh<=this.JX;Rh=
Rh+1){var AJt=A.aaH(A.wC(this.J0.Get(H7),this.J0.Get(Rh)));var Bcq=((AJt<<8)/(this.
Ob.Get(H7)+this.Ob.Get(Rh)))|0;if(Bcq<A$J){A$J=Bcq;AyG=H7;AyI=Rh;}}this.J0.Set(AyG
,A.wC(this.J0.Get(AyG),this.J0.Get(AyI)));this.Ob.Set(AyG,A.aaH(this.J0.Get(AyG)
));if(AyI!==this.JX){this.J0.Set(AyI,this.J0.Get(this.JX));this.Ob.Set(AyI,this.
Ob.Get(this.JX));}},BuW:function(){var Lu=A._NewObject(C.ApM,0);Lu.AuP=!!this.H5;
if(!!this.H5)Lu.Bt=this.H5;return Lu;},Aoe:function(){var Lu=A._NewObject(C.Adw,
0);Lu.AuP=!!this.H5;if(!!this.H5)Lu.Bt=this.H5;return Lu;},AsA:function(){var Lu=
A._NewObject(C.AtS,0);Lu.AuP=!!this.H5;if(!!this.H5)Lu.Bt=this.H5;return Lu;},Bu1:
function(H){var P;var Aow=false;for(P=0;P<10;P=P+1)if(!!this.Ff.Get(P)){var pos=
this.Rb.Get(P);var BS=this.Ff.Get(P).Ab;while(!!BS&&(BS!==this)){pos=A.abe(pos,BS.
M.slice(0,2));BS=BS.Ab;}if(!BS&&(this.Ff.Get(P)!==this)){var tmp=this.Ff.Get(P);
this.ED=P;this.Ff.Set(P,null);tmp.GL(this.Aoe().InitializeUp(P,this.AhG.Get(P),this.
Afd.Get(P),this.WX.Get(P),this.LZ.Get(P)+1,this.WW.Get(P),false,this.Rb.Get(P),this.
Acx.Get(P)));this.BroadcastEvent(this.AsA().InitializeUp(P,this.LZ.Get(P)+1,false
,tmp,this.Rb.Get(P)),0x18);}else{this.WX.Set(P,(this.AhH.Bt-this.AsB.Get(P))|0);
if(this.WX.Get(P)<10)this.WX.Set(P,10);this.ED=P;this.Ff.Get(P).GL(this.Aoe().InitializeHold(
P,pos,this.Afd.Get(P),this.WX.Get(P),this.LZ.Get(P)+1,this.WW.Get(P),this.Rb.Get(
P),this.Acx.Get(P)));Aow=true;}}if(!Aow)this.AhH.Ar(false);},GetFPS:function(){var
ticksCount=0;var Bak=0;ticksCount=((new Date).getTime()-A.v$)|0;if(!!this.AIr&&(
ticksCount>this.AIr))Bak=((this.AIq*1000)/((ticksCount-this.AIr)|0))|0;this.AIq=
0;this.AIr=ticksCount;return Bak;},Update:function(){var B;if(!this.Asw)this.Asw=
A._NewObject(A.Graphics.Canvas,0);this.Asw.AqQ([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Asw.Update();return this.UpdateGE20(this.Asw);},UpdateGE20:function(CT){if(!this.
BeginUpdate())return BC;var AfG=this.UpdateCanvas(CT,B9);this.EndUpdate();return AfG;
},EndUpdate:function(){if(this.JX>0){this.AIq=this.AIq+1;this.JX=0;}},UpdateCanvas:
function(CT,aOffset){var B;var AfG=BC;var BuE=[].concat(aOffset,A.abf(CT.FrameSize
,aOffset));var P;var H7=this.JX;this.AzY=this.AzY+1;CT.CV=this;for(P=0;(P<H7)&&(
P<4);P=P+1)if(this.Ob.Get(P)>0){this.J5(CT,A.abg(this.J0.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);AfG=A.wC(AfG,A.lb(BuE,this.J0.Get(P)));}else H7=H7+1;CT.
CV=null;this.AzY=this.AzY-1;if(!((AfG[0]>=AfG[2])||(AfG[1]>=AfG[3])))return A.abg(
AfG,aOffset);else return AfG;},GetUpdateRegion:function(AHq){var P;var H7=this.JX;
if(AHq<0)return BC;for(P=0;(P<H7)&&(P<4);P=P+1)if(!this.Ob.Get(P)){H7=H7+1;AHq=AHq+
1;}else if(P===AHq)return this.J0.Get(P);return BC;},BeginUpdate:function(){var B;
var P;if(!!this.JX&&!A.aaY(this.J0.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
Bdr=A.abi(3,A.wg,null);var Bdq=this.JX;for(P=0;P<Bdq;P++)Bdr.Set(P,this.J0.Get(P
));for(P=0;P<Bdq;P++){var BcJ=A.abh(Bdr.Get(P),this.M.slice(0,2));var BcK=this.Aty(
BcJ);if(!A.aaY(BcJ,BcK))this.Bd(A.abg(BcK,this.M.slice(0,2)));}}var H7;var Rh;for(
H7=0;H7<(this.JX-1);H7++)if(this.Ob.Get(H7)>0)for(Rh=H7+1;Rh<this.JX;Rh++)if(this.
Ob.Get(Rh)>0){var AJt=A.aaH(A.wC(this.J0.Get(H7),this.J0.Get(Rh)));if(((AJt-this.
Ob.Get(H7))-this.Ob.Get(Rh))<0){this.J0.Set(H7,A.wC(this.J0.Get(H7),this.J0.Get(
Rh)));this.Ob.Set(H7,AJt);this.Ob.Set(Rh,0);}}for(P=this.JX-1;P>=0;P--)if(!this.
Ob.Get(P))this.JX=this.JX-1;return this.JX;},DoesNeedUpdate:function(){if(this.JX>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B9,aSize
));if(this.Ayw)this.T=this.T|0x60;else this.T=this.T|0x20;this.Bd(this.M);return this;
},SetRootFocus:function(AYs){if(AYs===this.Ayw)return false;this.Ayw=AYs;if(!AYs
){if(!!this.Ju)this.Ju.CV.Cq(0x0,0x40);else this.Cq(0x0,0x40);}else if(!!this.Ju
)this.Ju.CV.Cq(0x40,0x0);else this.Cq(0x40,0x0);return true;},SetUserInputTimestamp:
function(PV){this.H5=PV;},DriveKeyboardHitting:function(Kn,AxA,SL){var B;var A1j=
!!this.Ri;if(!!this.Ri&&((!SL||(this.AyH!==Kn))||(this.AsP!==AxA))){var Lu=null;
var W=(C.Ca.isPrototypeOf(B=this.Ri)?B:null);var DV=(C.BO.isPrototypeOf(B=this.Ri
)?B:null);if(!!this.AyH)Lu=A._NewObject(C.KeyEvent,0).Initialize(this.AyH,false);
if(this.AsP!==0x00)Lu=A._NewObject(C.KeyEvent,0).Initialize2(this.AsP,false);if(
!!DV)DV.GL(Lu);else if(!!W)W.GL(Lu);this.AyH=0;this.AsP=0x00;this.Ri=null;}if(!!
this.Ri){var Lu=null;var W=(C.Ca.isPrototypeOf(B=this.Ri)?B:null);var DV=(C.BO.isPrototypeOf(
B=this.Ri)?B:null);if(!!Kn)Lu=A._NewObject(C.KeyEvent,0).Initialize(Kn,true);if(
this.AsP!==0x00)Lu=A._NewObject(C.KeyEvent,0).Initialize2(AxA,true);if(!!DV)DV.GL(
Lu);else if(!!W)W.GL(Lu);}if(!this.Ri&&SL){if(!!Kn)this.Ri=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kn,true));if(AxA!==0x00)this.Ri=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(AxA,true));if(!(C.BO.isPrototypeOf(B=this.
Ri)?B:null)&&!(C.Ca.isPrototypeOf(B=this.Ri)?B:null))this.Ri=null;this.AyH=Kn;this.
AsP=AxA;A1j=A1j||!!this.Ri;}this.H5=0;return A1j;},DriveCursorMovement:function(
E4){return this.DriveMultiTouchMovement(this.ED,E4);},DriveMultiTouchMovement:function(
BD,E4){if((BD<0)||(BD>9)){this.H5=0;return false;}var Fh=A.abe(E4,this.Rb.Get(BD
));this.Rb.Set(BD,E4);if(!this.Ff.Get(BD)||A.aaX(Fh,B9)){this.H5=0;return false;
}var pos=E4;var BS=this.Ff.Get(BD).Ab;while(!!BS&&(BS!==this)){pos=A.abe(pos,BS.
M.slice(0,2));BS=BS.Ab;}if(!BS&&(this.Ff.Get(BD)!==this)){var tmp=this.Ff.Get(BD
);this.ED=BD;this.Ff.Set(BD,null);tmp.GL(this.Aoe().InitializeUp(BD,this.AhG.Get(
BD),this.Afd.Get(BD),this.WX.Get(BD),this.LZ.Get(BD)+1,this.WW.Get(BD),false,this.
Rb.Get(BD),this.Acx.Get(BD)));this.BroadcastEvent(this.AsA().InitializeUp(BD,this.
LZ.Get(BD)+1,false,tmp,E4),0x18);}else{this.AhG.Set(BD,pos);this.ED=BD;this.Ff.Get(
BD).GL(this.BuW().Initialize(BD,pos,this.Afd.Get(BD),Fh,this.WX.Get(BD),this.LZ.
Get(BD)+1,this.WW.Get(BD),E4,this.Acx.Get(BD)));}this.H5=0;return true;},DriveCursorHitting:
function(SL,BD,E4){return this.DriveMultiTouchHitting(SL,BD,E4);},DriveMultiTouchHitting:
function(SL,BD,E4){if((BD<0)||(BD>9)){this.H5=0;return false;}var ticksCount=this.
H5;if(!ticksCount)ticksCount=((new Date).getTime()-A.v$)|0;var BxN=this.H5;this.
DriveMultiTouchMovement(BD,E4);E4=this.Rb.Get(BD);this.H5=BxN;if(SL)this.Acx.Set(
BD,E4);if(SL&&!this.Ff.Get(BD)){var Jt;var pos=E4;if(A.wa(this.AH3.Get(BD),E4)&&((
ticksCount-this.AsB.Get(BD))<=250))this.LZ.Set(BD,this.LZ.Get(BD)+1);else this.LZ.
Set(BD,0);this.AH3.Set(BD,A.abh(Mt,E4));this.AsB.Set(BD,ticksCount);if(!!this.Ju
)Jt=this.XL(A.abh(Mt,E4),BD,this.LZ.Get(BD)+1,this.Ju.CV,null,0x0);else Jt=this.
XL(A.abh(Mt,E4),BD,this.LZ.Get(BD)+1,null,null,0x0);if(!!Jt){this.BroadcastEvent(
this.AsA().InitializeDown(BD,this.LZ.Get(BD)+1,false,Jt.Ca,E4),0x18);this.Ff.Set(
BD,Jt.Ca);this.WW.Set(BD,Jt.Dv);}else{this.Ff.Set(BD,null);this.WW.Set(BD,B9);this.
H5=0;return false;}var BS=Jt.Ca.Ab;while(!!BS&&(BS!==this)){pos=A.abe(pos,BS.M.slice(
0,2));BS=BS.Ab;}this.Afd.Set(BD,pos);this.AhG.Set(BD,pos);this.WX.Set(BD,0);this.
AhH.Ar(true);this.ED=BD;this.Ff.Get(BD).GL(this.Aoe().InitializeDown(BD,pos,this.
LZ.Get(BD)+1,this.WW.Get(BD),false,E4));this.H5=0;return true;}if(!SL&&!!this.Ff.
Get(BD)){var pos=E4;var BS=this.Ff.Get(BD).Ab;while(!!BS&&(BS!==this)){pos=A.abe(
pos,BS.M.slice(0,2));BS=BS.Ab;}if(!BS)pos=this.AhG.Get(BD);this.ED=BD;var tmp=this.
Ff.Get(BD);this.Ff.Set(BD,null);tmp.GL(this.Aoe().InitializeUp(BD,pos,this.Afd.Get(
BD),this.WX.Get(BD),this.LZ.Get(BD)+1,this.WW.Get(BD),false,E4,this.Acx.Get(BD))
);this.BroadcastEvent(this.AsA().InitializeUp(BD,this.LZ.Get(BD)+1,false,tmp,E4)
,0x18);this.H5=0;return true;}this.H5=0;return false;},AR8:function(ZG,A_7,Aco,Acn
){if(ZG===this)ZG=null;if(!!!ZG&&!!this.Ju)ZG=this.Ju.CV;if(!this.Ff.Get(this.ED
))return;var Jt;Jt=this.XL(A.abh(Mt,this.Rb.Get(this.ED)),this.ED,1,ZG,Aco,Acn);
if(!!Jt&&(this.Ff.Get(this.ED)!==Jt.Ca))this.ALO(Jt.Ca,Jt.Dv);if(!Jt&&(this.Ff.Get(
this.ED)!==A_7))this.ALO(A_7,B9);},ALO:function(ZG,WI){if(!this.Ff.Get(this.ED)||(
this.Ff.Get(this.ED)===ZG))return;var tmp=this.Ff.Get(this.ED);this.Ff.Set(this.
ED,null);tmp.GL(this.Aoe().InitializeUp(this.ED,this.AhG.Get(this.ED),this.Afd.Get(
this.ED),this.WX.Get(this.ED),this.LZ.Get(this.ED)+1,this.WW.Get(this.ED),true,this.
Rb.Get(this.ED),this.Acx.Get(this.ED)));this.BroadcastEvent(this.AsA().InitializeUp(
this.ED,this.LZ.Get(this.ED)+1,true,tmp,this.Rb.Get(this.ED)),0x18);var pos=this.
Rb.Get(this.ED);var BS=null;if(!!ZG)BS=ZG.Ab;while(!!BS&&(BS!==this)){pos=A.abe(
pos,BS.M.slice(0,2));BS=BS.Ab;}if(!BS&&(ZG!==this)){this.Ff.Set(this.ED,null);return;
}this.BroadcastEvent(this.AsA().InitializeDown(this.ED,this.LZ.Get(this.ED)+1,true
,ZG,this.Rb.Get(this.ED)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;this.Ff.Set(this.ED,ZG);this.WW.Set(this.ED,WI);this.Afd.Set(this.ED,pos
);this.AhG.Set(this.ED,pos);this.LZ.Set(this.ED,0);this.WX.Set(this.ED,0);this.AsB.
Set(this.ED,ticksCount);this.Acx.Set(this.ED,this.Rb.Get(this.ED));this.Ff.Get(this.
ED).GL(this.Aoe().InitializeDown(this.ED,pos,this.LZ.Get(this.ED)+1,this.WW.Get(
this.ED),true,this.Acx.Get(this.ED)));},AMR:function(){if(!!this.Ju)return this.
Ju.CV;return null;},AA_:function(Ko){var B;if(!Ko)throw new Error(SF);if(!((Ko.T&
0x80)===0x80))throw new Error(Uj);if(this.Ju.CV===Ko)this.Ju=this.Ju.Ag;else{var
Ayv=this.Ju;while(Ayv.Ag.CV!==Ko)Ayv=Ayv.Ag;Ayv.Ag=Ayv.Ag.Ag;}Ko.Cq(0x0,0xD0);if(
this.Ayw){if(!!this.Ju)this.Ju.CV.Cq(0x50,0x0);else this.Cq(0x50,0x0);}},AKY:function(
Ko){var B;var At=A._NewObject(C.A5m,0);if(!Ko)throw new Error(Zn);if(Ko===null)throw new
Error(Wq);if(((Ko.T&0x80)===0x80))throw new Error(IJ);if(!!this.Ju)this.Ju.CV.Cq(
0x0,0x50);else this.Cq(0x0,0x50);At.Ag=this.Ju;At.CV=Ko;this.Ju=At;if(this.Ayw)Ko.
Cq(0xD0,0x0);else Ko.Cq(0x90,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.AhH={I:this},0);(this.Ff=[]).__proto__=C.Root.Ff;(this.
LZ=[]).__proto__=C.Root.LZ;(this.AH3=[]).__proto__=C.Root.AH3;(this.WX=[]).__proto__=
C.Root.WX;(this.Afd=[]).__proto__=C.Root.Afd;(this.AsB=[]).__proto__=C.Root.AsB;(
this.AhG=[]).__proto__=C.Root.AhG;(this.WW=[]).__proto__=C.Root.WW;(this.Rb=[]).
__proto__=C.Root.Rb;(this.Acx=[]).__proto__=C.Root.Acx;(this.Ob=[]).__proto__=C.
Root.Ob;(this.J0=[]).__proto__=C.Root.J0;this.__proto__=C.Root;this.T=0x10007F;this.
AhH.QJ(10);this.AhH.M6=[this,this.Bu1];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.AhH._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.AhH._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Ri)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ju)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.Ff,D);if((B=this.Asw)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bt:0,AuP:false,Init:function(aArg){this.Bt=this.Aun();},Aun:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CM:0,D2:0,Down:false,Initialize2:function(Kn,SL){this.CM=0;this.D2=
Kn;this.Down=SL;if((Kn>=0x30)&&(Kn<=0x39))this.CM=(10+Kn)-48;if((Kn>=0x41)&&(Kn<=
0x5A))this.CM=(105+Kn)-65;if((Kn>=0x61)&&(Kn<=0x7A))this.CM=(105+Kn)-97;if(Kn===
0x20)this.CM=131;if(!this.CM)switch(Kn){case 0x2B:this.CM=132;break;case 0x2D:this.
CM=133;break;case 0x2A:this.CM=134;break;case 0x2F:this.CM=135;break;case 0x3D:this.
CM=136;break;case 0x2E:this.CM=137;break;case 0x2C:this.CM=138;break;case 0x3A:this.
CM=139;break;case 0x3B:this.CM=140;break;default:;}return this;},Initialize:function(
Kn,SL){this.CM=Kn;this.Down=SL;this.D2=0x00;var AY7=Kn-10;var Asv=Kn-105;if((AY7>=
0)&&(AY7<=9))this.D2=(48+AY7)&0xFFFF;if((Asv>=0)&&(Asv<=25))this.D2=(65+Asv)&0xFFFF;
if(Kn===131)this.D2=0x20;if(this.D2===0x00)switch(Kn){case 132:this.D2=0x2B;break;
case 133:this.D2=0x2D;break;case 134:this.D2=0x2A;break;case 135:this.D2=0x2F;break;
case 136:this.D2=0x3D;break;case 137:this.D2=0x2E;break;case 138:this.D2=0x2C;break;
case 139:this.D2=0x3A;break;case 140:this.D2=0x3B;break;default:;}return this;},
Bgi:function(A_W){switch(A_W){case 141:return((this.D2>=0x41)&&(this.D2<=0x5A))||((
this.D2>=0x61)&&(this.D2<=0x7A));case 142:return(((this.D2>=0x41)&&(this.D2<=0x5A
))||((this.D2>=0x61)&&(this.D2<=0x7A)))||((this.D2>=0x30)&&(this.D2<=0x39));case
143:return(this.D2>=0x30)&&(this.D2<=0x39);case 144:return(((this.D2>=0x41)&&(this.
D2<=0x46))||((this.D2>=0x61)&&(this.D2<=0x66)))||((this.D2>=0x30)&&(this.D2<=0x39
));case 145:return this.D2!==0x00;case 146:return(this.D2===0x00)&&!!this.CM;case
147:return(((this.CM===6)||(this.CM===7))||(this.CM===4))||(this.CM===5);case 148:
return(this.D2!==0x00)||!!this.CM;default:;}return A_W===this.CM;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.APm={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.APm;
},_className:"Core::LanguageEvent"};C.AtS={Awp:null,LF:A.wf,NN:0,Iw:0,Down:false
,Nt:false,InitializeUp:function(BD,NY,AnS,AYI,ZF){this.Down=false;this.Iw=BD;this.
NN=NY;this.LF=ZF;this.Awp=AYI;this.Nt=AnS;return this;},InitializeDown:function(
BD,NY,AnS,AYI,ZF){this.Down=true;this.Iw=BD;this.NN=NY;this.LF=ZF;this.Awp=AYI;this.
Nt=AnS;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.AtS;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Awp)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Adw={Agc:A.wf,LF:
A.wf,NN:0,Jg:0,NB:A.wf,HS:A.wf,Iw:0,Down:false,Nt:false,InitializeHold:function(
BD,AkA,AxC,AxD,NY,WI,ZF,AxB){this.Down=true;this.Iw=BD;this.HS=A.abf(AkA,WI);this.
NB=A.abf(AxC,WI);this.Jg=AxD;this.NN=NY;this.LF=ZF;this.Agc=AxB;return this;},InitializeUp:
function(BD,AkA,AxC,AxD,NY,WI,AnS,ZF,AxB){this.Down=false;this.Iw=BD;this.HS=A.abf(
AkA,WI);this.NB=A.abf(AxC,WI);this.Jg=AxD;this.NN=NY;this.Nt=AnS;this.LF=ZF;this.
Agc=AxB;return this;},InitializeDown:function(BD,AkA,NY,WI,AnS,ZF){this.Down=true;
this.Iw=BD;this.HS=A.abf(AkA,WI);this.NB=A.abf(AkA,WI);this.Jg=0;this.NN=NY;this.
Nt=AnS;this.LF=ZF;this.Agc=ZF;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Adw;},_className:"Core::CursorEvent"};C.ApM={Agc:A.wf
,LF:A.wf,NN:0,Jg:0,Dv:A.wf,NB:A.wf,HS:A.wf,Iw:0,Initialize:function(BD,AkA,AxC,aOffset
,AxD,Bt3,WI,ZF,AxB){this.Iw=BD;this.HS=A.abf(AkA,WI);this.NB=A.abf(AxC,WI);this.
Dv=aOffset;this.Jg=AxD;this.NN=Bt3;this.LF=ZF;this.Agc=AxB;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ApM;},_className:"Core::DragEvent"
};C.Z={BQ:null,Nk:null,Eh:null,Bp:A.wf,ASz:0,Space:0,Aga:0,J5:function(CT,aClip,
aOffset,Cb,aBlend){},GetClipping:function(){var B;var Av=C.Ej.GetClipping.call(this
);if(((this.T&0x80000)===0x80000)){var Apf=BC;var W;for(W=this.Ag;!!W&&!((W.T&0x200
)===0x200);W=W.Ag)if(((W.T&0x1)===0x1))Apf=A.wC(Apf,W.GetClipping());Av=A.wC(Av,
Apf);}return Av;},Cq:function(Q7,Ut){var B;var SY=this.T;if((!!this.Ab&&((this.T&
0x80001)===0x80001))&&((Ut&0x80000)===0x80000))this.Ab.Bd(this.GetClipping());C.
Ej.Cq.call(this,Q7,Ut);if(((!!this.Ab&&((this.T&0x1)===0x1))&&((Q7&0x80000)===0x80000
))&&!((SY&0x80000)===0x80000))this.Ab.Bd(this.GetClipping());},G:function(E){var
B;if(A.aaY(E,this.M))return;var Ale=[(B=this.M)[2]-B[0],B[3]-B[1]];var AIM=[E[2]-
E[0],E[3]-E[1]];var Apb=!A.aaX(Ale,AIM);var Fh=A.abe(E.slice(0,2),this.M.slice(0
,2));if(!A.aaX(Fh,B9)&&!Apb){var W=this.Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((
W.T&0x400)===0x400)){var tmp=((W.T&0x100)===0x100);W.AmC(Fh,tmp);}W=W.Ag;}A.pe(this.
Eh,this);}if((Apb&&(Ale[0]>0))&&(Ale[1]>0)){var A9=A.abh(this.M,this.Bp);var W=this.
Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)){if(!!W.El&&(W.El.
Nm!==this))W.El=null;if(!W.El&&((W.Ps!==0x14)||!!this.Aga))W.AsN(A9,this);}W=W.Ag;
}A.pe(this.Eh,this);}C.Ej.G.call(this,E);if(!!this.Ab&&Apb){this.T=this.T|0x1000;
if(!((this.Ab.T&0x2000)===0x2000)){this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.
Jx],this);}}},BcE:function(){var B;if((!this.Aga||!!!this.Ab)||!((this.Ab.T&0x4000
)===0x4000))return;var W=this.Ag;var AZp=((this.T&0x1000)===0x1000);for(;!!W&&!AZp;
W=W.Ag){if(((W.T&0x400)===0x400)&&((W.T&0x800)===0x800))AZp=true;if(((W.T&0x200)===
0x200))break;}if(AZp){this.T=this.T&~0x4000;this.Ab.BcO();}},AoW:function(H){var
B;this.BQ.R=null;this.BQ.P9=null;this.BQ=null;(B=this.Nk)?B[1].call(B[0],this):null;
},Ga:function(E){var B;var Fh=A.abe(E,this.Bp);if(A.aaX(Fh,B9))return;this.Bp=E;
var W=this.Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)){var tmp=((
W.T&0x100)===0x100);W.AmC(Fh,tmp);}W=W.Ag;}if(!!this.Ab)this.Ab.Bd(this.M);A.pe(
this.Eh,this);},A7R:function(E){var B;if(E<0)E=0;if(E===this.ASz)return;this.ASz=
E;if(!!this.Ab&&!!this.Aga){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([
B=this.Ab,B.Jx],this);}},Bkg:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Aga){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|
0x4000;A.pe([B=this.Ab,B.Jx],this);}},J$:function(E){var B;if(E===this.Aga)return;
this.Aga=E;if(!!this.Ab){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jx],this);}},UX:function(Aci,EV){var Asv=this.C_(0x1);var Q$=this.M;var
UK=A.abe(Asv.slice(0,2),Q$.slice(0,2));var L1=A.abe(Asv.slice(2,4),Q$.slice(2,4)
);var Bo=B9;if((UK[0]>0)&&(L1[0]>UK[0]))Bo=[UK[0],Bo[1]];else if((UK[0]>0)&&(L1[
0]>0))Bo=[L1[0],Bo[1]];if((L1[0]<0)&&(UK[0]<L1[0]))Bo=[L1[0],Bo[1]];else if((L1[
0]<0)&&(UK[0]<0))Bo=[UK[0],Bo[1]];if((UK[1]>0)&&(L1[1]>UK[1]))Bo=[Bo[0],UK[1]];else
if((UK[1]>0)&&(L1[1]>0))Bo=[Bo[0],L1[1]];if((L1[1]<0)&&(UK[1]<L1[1]))Bo=[Bo[0],L1[
1]];else if((L1[1]<0)&&(UK[1]<0))Bo=[Bo[0],UK[1]];if(A.aaX(Bo,B9)){(EV)?EV[1].call(
EV[0],this):null;return;}if(!!this.BQ){this.BQ.Ar(false);this.BQ.R=null;this.BQ.
P9=null;this.Nk=null;}this.BQ=Aci;if(!this.BQ){this.Ga(A.abe(this.Bp,Bo));(EV)?EV[
1].call(EV[0],this):null;}else{this.BQ.Ar(false);this.BQ.ID(1);this.BQ.R=[this,this.
AmN,this.Ga];this.BQ.Ct=this.Bp;this.BQ.B1=A.abe(this.Bp,Bo);this.BQ.P9=[this,this.
AoW];this.BQ.Aej(false);this.BQ.Ar(true);this.Nk=EV;}},Hx:function(Af,Acl,Aci,EV
){var B;if(!Af)return;if((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400))throw new Error(
Uk);this.BcE();var Av=Af.GetExtent();var A9=this.M;var Ly=A.lb(Av,A9);if((!Acl&&
!((Ly[0]>=Ly[2])||(Ly[1]>=Ly[3])))||(Acl&&A.aaY(Ly,Av))){(EV)?EV[1].call(EV[0],this
):null;return;}var Bo=B9;if(Av[2]>A9[2])Bo=[Av[2]-A9[2],Bo[1]];if(Av[3]>A9[3])Bo=[
Bo[0],Av[3]-A9[3]];if(Bo[0]>(Av[0]-A9[0]))Bo=[Av[0]-A9[0],Bo[1]];if(Bo[1]>(Av[1]-
A9[1]))Bo=[Bo[0],Av[1]-A9[1]];if(!!this.BQ){this.BQ.Ar(false);this.BQ.R=null;this.
BQ.P9=null;this.Nk=null;}this.BQ=Aci;if(!this.BQ){this.Ga(A.abe(this.Bp,Bo));(EV
)?EV[1].call(EV[0],this):null;}else{this.BQ.Ar(false);this.BQ.ID(1);this.BQ.R=[this
,this.AmN,this.Ga];this.BQ.Ct=this.Bp;this.BQ.B1=A.abe(this.Bp,Bo);this.BQ.P9=[this
,this.AoW];this.BQ.Aej(false);this.BQ.Ar(true);this.Nk=EV;}},BfL:function(Af){var
B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400)))return-1;var CK=-1;while(
!!Af&&!((Af.T&0x200)===0x200)){if(((Af.T&0x400)===0x400))CK=CK+1;Af=Af.AH;}return CK;
},Vi:function(Af,aFilter){var B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400
)))return null;var W=this.Ag;var IP=0x10000;if(((aFilter&0x10000)===0x10000))IP=
0x0;if(!!Af)W=Af.Ag;aFilter=aFilter|0x400;while(!!W&&!((W.T&0x200)===0x200)){if(((
B=aFilter)&&((W.T&B)===B))&&(!IP||!((B=IP)&&((W.T&B)===B))))return W;W=W.Ag;}return null;
},C_:function(aFilter){var B;var W=this.Ag;var AE=BC;var IP=0x10000;this.BcE();if(((
aFilter&0x10000)===0x10000))IP=0x0;aFilter=aFilter|0x400;while(!!W&&!((W.T&0x200
)===0x200)){if(((B=aFilter)&&((W.T&B)===B))&&(!IP||!((B=IP)&&((W.T&B)===B))))AE=
A.wC(AE,W.GetExtent());W=W.Ag;}return AE;},AmN:function(){return this.Bp;},_Init:
function(aArg){C.Ej._Init.call(this,aArg);this.__proto__=C.Z;this.T=0x203;},_Mark:
function(D){var B;C.Ej._Mark.call(this,D);if((B=this.BQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Eh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CF={
Hn:null,BQ:null,Ca:null,Wc:null,Nk:null,Eh:null,G8:null,SV:-1,SU:0,Jd:-1,Hd:0,AhZ:
8,N7:0,TZ:0,Ab4:A.wf,GN:-1,Bp:0,Gb:-1,Ox:0,GP:24,AR:0,K9:null,Ny:false,AsQ:false
,ASG:function(Ii,NX,WH,SN,SO,Ahq,ON,Q6,Ln,Ll,Lm){throw new Error(Zo);},ApK:function(
Ii,Ahq,ON,Q6,Ln,Ll,Lm){throw new Error(Wr);},Aj7:function(Ii,NX,WH,SN,SO,ON,Q6,Ln
,Ll,Lm){throw new Error(Zp);},DispatchEvent:function(CG){var B;var result=null;if(((
this.Gb>=0)&&(this.Gb<this.AR))&&!this.AY){this.GN=this.Gb;this.Ca=(C.Ca.isPrototypeOf(
B=A._NewObject(this.K9,0))?B:null);if(!!this.B7)this.B7.Ag=this.Ca;else this.B6=
this.Ca;this.Ca.AH=this.B7;this.B7=this.Ca;this.Ca.Ab=this;this.Ab4=[(B=this.M)[
2]-B[0],this.GP];(B=this.G8)?B[1].call(B[0],this):null;var BS=(C.O.isPrototypeOf(
B=this.Ca)?B:null);if(!!BS)result=BS.DispatchEvent(CG);else result=this.Ca.GL(CG
);if(!!this.Ca.AH)this.Ca.AH.Ag=null;else this.B6=null;this.B7=this.Ca.AH;this.Ca.
AH=null;this.Ca.Ab=null;this.Ca=null;}if(!result)result=C.O.DispatchEvent.call(this
,CG);return result;},Ai:function(Ae){var B;if(!this.K9){A.pe(this.Eh,this);return;
}this.AsQ=true;var Azk=0;if(!this.Ny)Azk=this.Ox;var FF=this.Alo(-Azk-this.Bp,1);
var GI=this.Alo(((((B=this.M)[3]-B[1])-Azk)-this.Bp)-1,2);var CK=GI-FF;if(CK<1)CK=
1;var AhB=(CK/2)|0;var AhC=(CK/3)|0;if(!AhB)AhB=1;if(!AhC)AhC=1;if(FF<this.Hd){FF=
FF-AhB;GI=GI+AhC;}else if(GI>this.Jd){FF=FF-AhC;GI=GI+AhB;}else{FF=this.Hd;GI=this.
Jd;}if(!this.Ny){if(FF>=this.AR){FF=0;GI=-1;}else if(GI<0){FF=0;GI=-1;}if(GI>=this.
AR)GI=this.AR-1;if(FF<0)FF=0;}else if(this.AR<=0){FF=0;GI=-1;}var Aig=this.Hd;var
Aih=this.Jd;var AoJ=0;var AoK=-1;if(FF>Aig)Aig=FF;if(GI<Aih)Aih=GI;if(Aig<=Aih){
while((this.Jd<GI)&&(this.Hd<Aig)){this.AcX();this.Ax0();}while((this.Hd>FF)&&(this.
Jd>Aih)){this.Azy();this.AxZ();}}else{this.Jd=(this.Jd-this.Hd)+FF;this.Hd=FF;AoJ=
this.Hd;AoK=this.Jd;}while(this.Hd<FF)this.AcX();while(this.Jd>GI)this.Azy();while(
this.Hd>FF)this.AxZ();while(this.Jd<GI)this.Ax0();var Aa=this.B6;var inx=this.Hd;
var pos=[0,(Azk+this.Bp)+this.I$(inx,0)];var BH=(B=this.M)[3]-B[1];var AkY=null;
var Bdy=(B=this.M)[2]-B[0];while(!!Aa){var In=inx;if(this.Ny){if(In<0)In=this.AR-(-
In%this.AR);if(In>0)In=In%this.AR;}var AcY=((In>=this.SU)&&(In<=this.SV))||((inx>=
AoJ)&&(inx<=AoK));var Aoq=Aa.GetExtent();var Bo=A.abe(pos,Aoq.slice(0,2));if(AcY
)this.TZ=this.GP;else this.TZ=Aoq[3]-Aoq[1];var AZ_=pos[1];var AZ$=pos[1]+this.TZ;
if(!A.aaX(Bo,B9))Aa.AmC(Bo,true);if((AcY&&(AZ_<BH))&&(AZ$>0)){this.Ca=Aa;this.GN=
In;this.Ab4=[Bdy,this.TZ];(B=this.G8)?B[1].call(B[0],this):null;}Aa=Aa.Ag;inx+=1;
pos=[pos[0],pos[1]+this.TZ];}inx=this.Hd;Aa=this.B6;pos=[0,(Azk+this.Bp)+this.I$(
inx,0)];while(!!Aa){var In=inx;if(this.Ny){if(In<0)In=this.AR-(-In%this.AR);if(In>
0)In=In%this.AR;}var AcY=((In>=this.SU)&&(In<=this.SV))||((inx>=AoJ)&&(inx<=AoK)
);if(AcY)this.TZ=this.GP;else this.TZ=(B=Aa.GetExtent())[3]-B[1];var AZ_=pos[1];
var AZ$=pos[1]+this.TZ;if(AcY&&!((AZ_<BH)&&(AZ$>0))){this.Ca=Aa;this.GN=In;this.
Ab4=[Bdy,this.TZ];(B=this.G8)?B[1].call(B[0],this):null;}if(((In===this.Gb)&&this.
Ny)&&!!AkY){var Q$=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Q$))>A.aaH(A.lb(AkY.GetExtent(),Q$)))AkY=Aa;}else if(In===this.Gb)AkY=Aa;Aa=Aa.
Ag;inx+=1;pos=[pos[0],pos[1]+this.TZ];}this.SU=0;this.SV=-1;this.Ca=null;this.GN=-
1;this.Ba(AkY);this.AsQ=false;A.pe(this.Eh,this);},RT:function(Af,GF,aFilter){return null;
},ApQ:function(Af,aFilter){return null;},Vi:function(Af,aFilter){return null;},ABg:
function(Af,aFilter){return null;},C_:function(aFilter){return BC;},Nz:function(
Ko,FC,Ln,Ll,Lm){throw new Error(Ul);},AgV:function(Af,JQ){throw new Error(Zq);},
Y0:function(Af){throw new Error(Zr);},Kh:function(Af,PU){throw new Error(Um);},HG:
function(Af){throw new Error(Ws);},AKe:function(Af,JQ){throw new Error(QZ);},J:function(
Af,PU){throw new Error(Zs);},I$:function(GW,AYi){return GW*this.GP;},Alo:function(
E4,AYi){return(E4/this.GP)|0;},Azy:function(){var Aa=this.B7;if(!Aa)return null;
if(Aa===this.AY)this.Ba(null);this.Jd=this.Jd-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B6=null;this.B7=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.El=null;if(this.N7<this.AhZ){if(!
!this.Hn)this.Hn.AH=Aa;Aa.Ag=this.Hn;this.Hn=Aa;this.N7++;}return Aa;},Ax0:function(
){var B;var Aa=this.Hn;var AcK=this.K9;var Ac2=++this.Jd;if(this.Ny){if(Ac2<0)Ac2=
this.AR-(-Ac2%this.AR);if(Ac2>0)Ac2=Ac2%this.AR;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==AcK))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Hn===Aa)this.Hn=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N7--;}else{Aa=(C.Ca.
isPrototypeOf(B=A._NewObject(AcK,0))?B:null);Aa.AV(0x1D);if(!!this.N7)this.AhZ++;
}this.TZ=this.GP;this.GN=Ac2;this.Ab4=[(B=this.M)[2]-B[0],this.TZ];this.Ca=Aa;(B=
this.G8)?B[1].call(B[0],this):null;this.Ca=null;this.GN=-1;if(!!this.B7)this.B7.
Ag=Aa;Aa.Ab=this;Aa.AH=this.B7;this.B7=Aa;if(!this.B6)this.B6=Aa;if(Ac2===this.Gb
)this.Ba(Aa);return Aa;},AcX:function(){var Aa=this.B6;if(!Aa)return null;if(Aa===
this.AY)this.Ba(null);this.Hd=this.Hd+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B7=null;
this.B6=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.El=null;if(this.N7<this.AhZ){if(!!this.Hn
)this.Hn.AH=Aa;Aa.Ag=this.Hn;this.Hn=Aa;this.N7++;}return Aa;},AxZ:function(){var
B;var Aa=this.Hn;var AcK=this.K9;var ML=--this.Hd;if(this.Ny){if(ML<0)ML=this.AR-(-
ML%this.AR);if(ML>0)ML=ML%this.AR;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==AcK)
)Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.Ag;if(this.Hn===
Aa)this.Hn=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N7--;}else{Aa=(C.Ca.isPrototypeOf(B=
A._NewObject(AcK,0))?B:null);Aa.AV(0x1D);if(!!this.N7)this.AhZ++;}this.TZ=this.GP;
this.GN=ML;this.Ab4=[(B=this.M)[2]-B[0],this.TZ];this.Ca=Aa;(B=this.G8)?B[1].call(
B[0],this):null;this.Ca=null;this.GN=-1;if(!!this.B6)this.B6.AH=Aa;Aa.Ab=this;Aa.
Ag=this.B6;this.B6=Aa;if(!this.B7)this.B7=Aa;if(ML===this.Gb)this.Ba(Aa);return Aa;
},AoW:function(H){var B;this.BQ.R=null;this.BQ.P9=null;this.BQ=null;(B=this.Nk)?
B[1].call(B[0],this):null;},Bw5:function(H){this.Ga(this.Wc.Dv[1]);},Bw6:function(
H){var B;if(!!this.BQ){this.BQ.Ar(false);this.BQ.R=null;this.BQ.P9=null;this.BQ=
null;}if(!this.Ny){var AE=this.ApW(0,this.AR-1);var Afw=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.Ox);if(AE[0]>Afw[0])AE=[].concat(Afw[0],AE.slice(1,4));if(AE[1]>Afw[
1])AE=A.abP(AE,Afw[1]);var Fh=AE[1]-this.M[1];var A0m=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A0m>0)A0m=0;this.Wc.Dv=[0,this.Bp];this.Wc.F0=[0,(this.Bp+A0m)-Fh];this.
Wc.FN=[0,this.Bp-Fh];}else{var Fh=32000-(32000%this.GP);this.Wc.Dv=[0,this.Bp];this.
Wc.F0=[0,this.Bp-Fh];this.Wc.FN=[0,this.Bp+Fh];}},AQX:function(E){var B;if(this.
Ny===E)return;this.Ny=E;while(!!this.AcX());this.An();this.Bd([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},AvN:function(E){if(E===this.Wc)return;if(!!E&&!!E.As2){A.ab5(
"%s%*%s",OI,E,PQ);throw new Error(Wt);}if(!!this.Wc){this.Wc.AIZ=null;this.Wc.As2=
null;}this.Wc=E;if(!!E){E.AIZ=[this,this.Bw6];E.As2=[this,this.Bw5];}},Ga:function(
E){var B;if(this.Ny&&(this.AR>0)){var Hp=this.I$(this.AR,3);if(E<0)E=Hp-(-E%Hp);
if(E>0)E=E%Hp;if(E>0)E=E-Hp;}if(E===this.Bp)return;this.Bp=E;this.An();this.Bd([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GQ:function(E){if(E<0)E=-1;if(E===this.Gb)return;
this.Gb=E;this.An();},A7F:function(E){var B;if(E<0)E=0;if(E===this.Ox)return;this.
Ox=E;if(!this.Ny){this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Aeg:function(
E){var B;if(E<1)E=1;if(E===this.GP)return;this.GP=E;while(!!this.AcX());this.An(
);this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jm:function(E){var B;if(E<0)E=0;
if(E===this.AR)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.Ny){if(
E>this.AR){AE=[].concat(AE.slice(0,3),(this.Ox+this.Bp)+this.I$(E,3));AE=A.abP(AE
,(this.Ox+this.Bp)+this.I$(this.AR,3));}else{AE=A.abP(AE,(this.Ox+this.Bp)+this.
I$(E,3));AE=[].concat(AE.slice(0,3),(this.Ox+this.Bp)+this.I$(this.AR,3));}}else
while(!!this.AcX());this.AR=E;this.An();this.Bd(AE);},NI:function(E){var B;if(E===
this.K9)return;this.K9=E;while(!!this.AcX());this.Hn=null;this.N7=0;this.An();this.
Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BfY:function(GW){if(this.AsQ)return null;
if((GW<0)||(GW>=this.AR))return null;if(!this.Ny){if((GW<this.Hd)||(GW>this.Jd))
return null;var W=this.B6;while(GW>this.Hd){W=W.Ag;GW=GW-1;}return W;}else{var ML=
this.Hd;if(ML<0)ML=this.AR-(-ML%this.AR);if(ML>0)ML=ML%this.AR;var W=this.B6;while(
!!W){if((ML%this.AR)===GW)return W;W=W.Ag;ML=ML+1;}return null;}},AAb:function(Aci
,EV){var B;if(this.Ny){(EV)?EV[1].call(EV[0],this):null;return;}var AIs=this.Bp;
var Bal=((((B=this.M)[3]-B[1])-this.Bp)-this.Ox)-this.I$(this.AR,3);var Bo=0;if(
AIs>0)Bo=-AIs;else if(Bal>0)Bo=Bal;if((Bo>0)&&(Bo>-AIs))Bo=-AIs;if(!Bo){(EV)?EV[
1].call(EV[0],this):null;return;}if(!!this.BQ){this.BQ.Ar(false);this.BQ.R=null;
this.BQ.P9=null;this.Nk=null;}this.BQ=Aci;if(!this.BQ){this.Ga(this.Bp+Bo);(EV)?
EV[1].call(EV[0],this):null;}else{this.BQ.Ar(false);this.BQ.ID(1);this.BQ.R=[this
,this.AmN,this.Ga];this.BQ.Ct=this.Bp;this.BQ.B1=this.Bp+Bo;this.BQ.P9=[this,this.
AoW];this.BQ.Aej(false);this.BQ.Ar(true);this.Nk=EV;}},Hx:function(GW,Acl,Aci,EV
){var B;if((GW<0)||(GW>=this.AR))return;var Av=this.ApW(GW,GW);var A9=this.M;var
Ly=A.lb(Av,A9);if((!Acl&&!((Ly[0]>=Ly[2])||(Ly[1]>=Ly[3])))||(Acl&&A.aaY(Ly,Av))
){(EV)?EV[1].call(EV[0],this):null;return;}var Bo=0;if(Av[3]>A9[3])Bo=Av[3]-A9[3
];if(Bo>(Av[1]-A9[1]))Bo=Av[1]-A9[1];if(!!this.BQ){this.BQ.Ar(false);this.BQ.R=null;
this.BQ.P9=null;this.Nk=null;}this.BQ=Aci;if(!this.BQ){this.Ga(this.Bp-Bo);(EV)?
EV[1].call(EV[0],this):null;}else{this.BQ.Ar(false);this.BQ.ID(1);this.BQ.R=[this
,this.AmN,this.Ga];this.BQ.Ct=this.Bp;this.BQ.B1=this.Bp-Bo;this.BQ.P9=[this,this.
AoW];this.BQ.Aej(false);this.BQ.Ar(true);this.Nk=EV;}},BfQ:function(){return BC;
},AMU:function(){if((this.Ox<=0)||this.Ny)return BC;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bp);AE=[].concat(AE.slice(0,3),AE[1]+this.Ox);return AE;},A4o:function(E4
){if(((this.AR<=0)||(E4[0]<this.M[0]))||(E4[0]>=this.M[2]))return-1;E4=A.abe(E4,
this.M.slice(0,2));if(!this.Ny){var Aa=(E4[1]-this.Bp)-this.Ox;if(Aa>0)Aa=this.Alo(
Aa,0);if((Aa<0)||(Aa>=this.AR))return-1;return Aa;}var Aa=E4[1]-this.Bp;if(Aa>0)
Aa=this.Alo(Aa,0);if(Aa<0)Aa=this.Alo(Aa,0)-1;if(Aa<0)Aa=this.AR-(-Aa%this.AR);if(
Aa>0)Aa=Aa%this.AR;return Aa;},ApW:function(JP,LU){if(JP<0)JP=0;if(LU>=this.AR)LU=
this.AR-1;if(JP>LU)return BC;var AE=this.M;var Bo=this.Bp;if(this.Ny){var Hp=this.
I$(this.AR,3);if(Bo<0)Bo=Hp-(-Bo%Hp);if(Bo>0)Bo=Bo%Hp;if(Bo>0)Bo=Bo-Hp;}else Bo=
Bo+this.Ox;AE=[].concat(AE.slice(0,3),(AE[1]+Bo)+this.I$(LU+1,0));AE=A.abP(AE,(AE[
1]+Bo)+this.I$(JP,0));return AE;},AaY:function(JP,LU){var B;if(JP<0)JP=0;if(JP>LU
)return;if(this.SU>this.SV){this.SU=JP;this.SV=LU;}else{if(JP<this.SU)this.SU=JP;
if(LU>this.SV)this.SV=LU;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.Ny){
AE=A.abP(AE,(this.Ox+this.Bp)+this.I$(JP,0));AE=[].concat(AE.slice(0,3),(this.Ox+
this.Bp)+this.I$(LU+1,0));}else if((this.I$(this.AR-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bo=this.Bp;var Hp=this.I$(this.AR,3);if(Bo<0)Bo=Hp-(-Bo%Hp);if(
Bo>0)Bo=Bo%Hp;if(Bo>0)Bo=Bo-Hp;AE=A.abP(AE,Bo+this.I$(JP,0));AE=[].concat(AE.slice(
0,3),Bo+this.I$(LU+1,0));}this.An();this.Bd(AE);},AmN:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CF;this.G(Wu);
this.K9=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ca)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wc)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Eh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dn={Hn:null
,BQ:null,Ca:null,Nk:null,G8:null,SV:-1,SU:0,Jd:-1,Hd:0,AhZ:8,N7:0,Sj:0,Ab4:A.wf,
GN:-1,Bp:0,Gb:-1,VE:24,AR:0,K9:null,AsQ:false,ASG:function(Ii,NX,WH,SN,SO,Ahq,ON
,Q6,Ln,Ll,Lm){throw new Error(Wv);},ApK:function(Ii,Ahq,ON,Q6,Ln,Ll,Lm){throw new
Error(Zt);},Aj7:function(Ii,NX,WH,SN,SO,ON,Q6,Ln,Ll,Lm){throw new Error(Zu);},DispatchEvent:
function(CG){var B;var result=null;if(((this.Gb>=0)&&(this.Gb<this.AR))&&!this.AY
){this.GN=this.Gb;this.Ca=(C.Ca.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);
if(!!this.B7)this.B7.Ag=this.Ca;else this.B6=this.Ca;this.Ca.AH=this.B7;this.B7=
this.Ca;this.Ca.Ab=this;this.Ab4=[this.Sj,(B=this.M)[3]-B[1]];(B=this.G8)?B[1].call(
B[0],this):null;var BS=(C.O.isPrototypeOf(B=this.Ca)?B:null);if(!!BS)result=BS.DispatchEvent(
CG);else result=this.Ca.GL(CG);if(!!this.Ca.AH)this.Ca.AH.Ag=null;else this.B6=null;
this.B7=this.Ca.AH;this.Ca.AH=null;this.Ca.Ab=null;this.Ca=null;}if(!result)result=
C.O.DispatchEvent.call(this,CG);return result;},Ai:function(Ae){var B;if(!this.K9
)return;this.AsQ=true;var FF=this.Alo(0-this.Bp,1);var GI=this.Alo((((B=this.M)[
2]-B[0])-this.Bp)-1,2);var CK=GI-FF;if(CK<1)CK=1;var AhB=(CK/2)|0;var AhC=(CK/3)|
0;if(!AhB)AhB=1;if(!AhC)AhC=1;if(FF<this.Hd){FF=FF-AhB;GI=GI+AhC;}else if(GI>this.
Jd){FF=FF-AhC;GI=GI+AhB;}else{FF=this.Hd;GI=this.Jd;}if(FF>=this.AR){FF=0;GI=-1;
}else if(GI<0){FF=0;GI=-1;}if(GI>=this.AR)GI=this.AR-1;if(FF<0)FF=0;var Aig=this.
Hd;var Aih=this.Jd;var AoJ=0;var AoK=-1;if(FF>Aig)Aig=FF;if(GI<Aih)Aih=GI;if(Aig<=
Aih){while((this.Jd<GI)&&(this.Hd<Aig)){this.AcX();this.Ax0();}while((this.Hd>FF
)&&(this.Jd>Aih)){this.Azy();this.AxZ();}}else{this.Jd=(this.Jd-this.Hd)+FF;this.
Hd=FF;AoJ=this.Hd;AoK=this.Jd;}while(this.Hd<FF)this.AcX();while(this.Jd>GI)this.
Azy();while(this.Hd>FF)this.AxZ();while(this.Jd<GI)this.Ax0();var Aa=this.B6;var
inx=this.Hd;var pos=[this.Bp+this.I$(inx,0),0];var BR=(B=this.M)[2]-B[0];var AkY=
null;var Bdo=(B=this.M)[3]-B[1];while(!!Aa){var In=inx;var AcY=((In>=this.SU)&&(
In<=this.SV))||((inx>=AoJ)&&(inx<=AoK));var Aoq=Aa.GetExtent();var Bo=A.abe(pos,
Aoq.slice(0,2));if(AcY)this.Sj=this.VE;else this.Sj=Aoq[2]-Aoq[0];var AZ8=pos[0];
var AZ9=pos[0]+this.Sj;if(!A.aaX(Bo,B9))Aa.AmC(Bo,true);if((AcY&&(AZ8<BR))&&(AZ9>
0)){this.Ca=Aa;this.GN=In;this.Ab4=[this.Sj,Bdo];(B=this.G8)?B[1].call(B[0],this
):null;}Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.Sj,pos[1]];}inx=this.Hd;Aa=this.B6;pos=[
this.Bp+this.I$(inx,0),0];while(!!Aa){var In=inx;var AcY=((In>=this.SU)&&(In<=this.
SV))||((inx>=AoJ)&&(inx<=AoK));if(AcY)this.Sj=this.VE;else this.Sj=(B=Aa.GetExtent(
))[2]-B[0];var AZ8=pos[0];var AZ9=pos[0]+this.Sj;if(AcY&&!((AZ8<BR)&&(AZ9>0))){this.
Ca=Aa;this.GN=In;this.Ab4=[this.Sj,Bdo];(B=this.G8)?B[1].call(B[0],this):null;}if(
In===this.Gb)AkY=Aa;Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.Sj,pos[1]];}this.SU=0;this.
SV=-1;this.Ca=null;this.GN=-1;this.Ba(AkY);this.AsQ=false;},RT:function(Af,GF,aFilter
){return null;},ApQ:function(Af,aFilter){return null;},Vi:function(Af,aFilter){return null;
},ABg:function(Af,aFilter){return null;},C_:function(aFilter){return BC;},Nz:function(
Ko,FC,Ln,Ll,Lm){throw new Error(Ww);},AgV:function(Af,JQ){throw new Error(Wx);},
Y0:function(Af){throw new Error(SG);},Kh:function(Af,PU){throw new Error(Zv);},HG:
function(Af){throw new Error(Zw);},AKe:function(Af,JQ){throw new Error(Ab7);},J:
function(Af,PU){throw new Error(Un);},I$:function(GW,AYi){return GW*this.VE;},Alo:
function(E4,AYi){return(E4/this.VE)|0;},Azy:function(){var Aa=this.B7;if(!Aa)return null;
if(Aa===this.AY)this.Ba(null);this.Jd=this.Jd-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B6=null;this.B7=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.El=null;if(this.N7<this.AhZ){if(!
!this.Hn)this.Hn.AH=Aa;Aa.Ag=this.Hn;this.Hn=Aa;this.N7++;}return Aa;},Ax0:function(
){var B;var Aa=this.Hn;var AcK=this.K9;var Ac2=++this.Jd;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==AcK))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.
AH.Ag=Aa.Ag;if(this.Hn===Aa)this.Hn=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N7--;}else{
Aa=(C.Ca.isPrototypeOf(B=A._NewObject(AcK,0))?B:null);Aa.AV(0x1D);if(!!this.N7)this.
AhZ++;}this.Sj=this.VE;this.GN=Ac2;this.Ab4=[this.Sj,(B=this.M)[3]-B[1]];this.Ca=
Aa;(B=this.G8)?B[1].call(B[0],this):null;this.Ca=null;this.GN=-1;if(!!this.B7)this.
B7.Ag=Aa;Aa.Ab=this;Aa.AH=this.B7;this.B7=Aa;if(!this.B6)this.B6=Aa;if(Ac2===this.
Gb)this.Ba(Aa);return Aa;},AcX:function(){var Aa=this.B6;if(!Aa)return null;if(Aa===
this.AY)this.Ba(null);this.Hd=this.Hd+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B7=null;
this.B6=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.El=null;if(this.N7<this.AhZ){if(!!this.Hn
)this.Hn.AH=Aa;Aa.Ag=this.Hn;this.Hn=Aa;this.N7++;}return Aa;},AxZ:function(){var
B;var Aa=this.Hn;var AcK=this.K9;var ML=--this.Hd;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==AcK))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Hn===Aa)this.Hn=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N7--;}else{Aa=(C.Ca.
isPrototypeOf(B=A._NewObject(AcK,0))?B:null);Aa.AV(0x1D);if(!!this.N7)this.AhZ++;
}this.Sj=this.VE;this.GN=ML;this.Ab4=[this.Sj,(B=this.M)[3]-B[1]];this.Ca=Aa;(B=
this.G8)?B[1].call(B[0],this):null;this.Ca=null;this.GN=-1;if(!!this.B6)this.B6.
AH=Aa;Aa.Ab=this;Aa.Ag=this.B6;this.B6=Aa;if(!this.B7)this.B7=Aa;if(ML===this.Gb
)this.Ba(Aa);return Aa;},AoW:function(H){var B;this.BQ.R=null;this.BQ.P9=null;this.
BQ=null;(B=this.Nk)?B[1].call(B[0],this):null;},Ga:function(E){var B;if(E===this.
Bp)return;this.Bp=E;this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GQ:function(
E){if(E<0)E=-1;if(E===this.Gb)return;this.Gb=E;this.An();},ADC:function(E){var B;
if(E<1)E=1;if(E===this.VE)return;this.VE=E;while(!!this.AcX());this.An();this.Bd([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jm:function(E){var B;if(E<0)E=0;if(E===this.
AR)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AR){AE=[].concat(this.
Bp+this.I$(this.AR,3),AE.slice(1,4));AE=A.abN(AE,this.Bp+this.I$(E,3));}else{AE=
A.abN(AE,this.Bp+this.I$(this.AR,3));AE=[].concat(this.Bp+this.I$(E,3),AE.slice(
1,4));}this.AR=E;this.An();this.Bd(AE);},NI:function(E){var B;if(E===this.K9)return;
this.K9=E;while(!!this.AcX());this.Hn=null;this.N7=0;this.An();this.Bd([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BlJ:function(Bt4,Bt5){if(!this.BQ)return;if(Bt4)this.Ga(
this.BQ.B1);var A1P=this.Nk;this.BQ.Ar(false);this.BQ.R=null;this.BQ.P9=null;this.
Nk=null;this.BQ=null;if(Bt5)(A1P)?A1P[1].call(A1P[0],this):null;},Bgn:function(){
return!!this.BQ;},Hx:function(GW,Acl,Aci,EV){var B;if((GW<0)||(GW>=this.AR))return;
var Av=this.ApW(GW,GW);var A9=this.M;var Ly=A.lb(Av,A9);if((!Acl&&!((Ly[0]>=Ly[2
])||(Ly[1]>=Ly[3])))||(Acl&&A.aaY(Ly,Av))){(EV)?EV[1].call(EV[0],this):null;return;
}var Bo=0;if(Av[2]>A9[2])Bo=Av[2]-A9[2];if(Bo>(Av[0]-A9[0]))Bo=Av[0]-A9[0];if(!!
this.BQ){this.BQ.Ar(false);this.BQ.R=null;this.BQ.P9=null;this.Nk=null;}this.BQ=
Aci;if(!this.BQ){this.Ga(this.Bp-Bo);(EV)?EV[1].call(EV[0],this):null;}else{this.
BQ.Ar(false);this.BQ.ID(1);this.BQ.R=[this,this.AmN,this.Ga];this.BQ.Ct=this.Bp;
this.BQ.B1=this.Bp-Bo;this.BQ.P9=[this,this.AoW];this.BQ.Aej(false);this.BQ.Ar(true
);this.Nk=EV;}},ApW:function(JP,LU){if(JP<0)JP=0;if(LU>=this.AR)LU=this.AR-1;if(
JP>LU)return BC;var AE=this.M;var Bo=this.Bp;AE=A.abN(AE,(AE[0]+Bo)+this.I$(LU+1
,0));AE=[].concat((AE[0]+Bo)+this.I$(JP,0),AE.slice(1,4));return AE;},AaY:function(
JP,LU){var B;if(JP<0)JP=0;if(JP>LU)return;if(this.SU>this.SV){this.SU=JP;this.SV=
LU;}else{if(JP<this.SU)this.SU=JP;if(LU>this.SV)this.SV=LU;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bp+this.I$(JP,0),AE.slice(1,4));AE=A.abN(
AE,this.Bp+this.I$(LU+1,0));this.An();this.Bd(AE);},AmN:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Dn;this.G(Wu);
this.K9=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ca)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bi={AQd:null,AC6:null,AuY:null,DR:null,
Lb:null,BP:null,AJh:0,Bl:0,Iw:0,Bt:0,NN:0,Jg:0,Dv:A.wf,NB:A.wf,HS:A.wf,Av$:8,Aer:
0,A5g:1,Down:false,X7:false,Nt:false,AZw:false,AyR:0,J5:function(CT,aClip,aOffset
,Cb,aBlend){},GL:function(CG){var B;var BK=(C.Adw.isPrototypeOf(CG)?CG:null);var
DU=(C.ApM.isPrototypeOf(CG)?CG:null);var AID=this.X7;var Z1;var UG;var AzS;var MJ;
var Ayh;if(!BK&&!DU)return null;Z1=(!!BK&&BK.Down)&&!BK.Jg;UG=(!!BK&&BK.Down)&&(
BK.Jg>0);AzS=(!!BK&&BK.Down)&&(BK.Jg>this.AyR);MJ=!!BK&&!BK.Down;Ayh=!!DU;if(Z1)
this.AyR=((B=(BK.Nt?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aer&0x20)===0x20
)&&(this.Bl>0))&&(this.Bl<33554432)){var Im=(C.AtS.isPrototypeOf(CG)?CG:null);if(((
!!Im&&Im.Down)&&(Im.Awp!==this))&&A.wa(this.GetExtent(),this.Ab.A5c(Im.LF))){this.
AJh=0x20;this.Bl=this.Bl|67108864;return null;}}if(Z1){var AoQ=0;var AcE;this.Bl=
this.Bl|(1<<BK.Iw);for(AcE=this.Bl&4095;AcE>0;AcE=AcE>>1)if(!!(AcE&1))AoQ=AoQ+1;
if(AoQ===1)this.Bl=(this.Bl|16777216)|(4096<<BK.Iw);}if(MJ&&(this.Bl<16777216)){
var Iq=this.Ia();var Jt=null;if(!!Iq){var A1H=(!!this.AH?this.AH:this.Ab);var AZk=(
!!Iq.Ju?Iq.Ju.CV:null);Jt=Iq.XL(A.abh(Zx,BK.LF),BK.Iw,BK.NN,AZk,A1H,0x0);}if(!!Jt
){var P;for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Jt.Ca.GL(A._NewObject(C.Adw,0).InitializeDown(
P,BK.HS,BK.NN,B9,true,BK.LF));for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Jt.Ca.GL(A.
_NewObject(C.Adw,0).InitializeUp(P,BK.HS,BK.HS,0,BK.NN,B9,false,BK.LF,BK.LF));}}
if(MJ)this.Bl=(this.Bl&~(1<<BK.Iw))|33554432;if(AzS&&(this.Bl<16777216))this.Bl=
this.Bl|67108864;if(MJ&&BK.Nt)this.Bl=this.Bl|67108864;if(MJ&&!(this.Bl&4095))this.
AJh=0x0;if(MJ&&!(this.Bl&16777215))this.Bl=0;if(UG&&(this.Bl>=67108864)){var Iq=
this.Ia();if(!!Iq)Iq.AR8(null,null,this,this.AJh);}if((UG&&!!(this.Bl&16777216))&&
!!(this.Bl&33554432)){UG=false;MJ=true;}if(!!BK&&!(this.Bl&(4096<<BK.Iw)))return this;
if(!!DU&&!(this.Bl&(4096<<DU.Iw)))return this;if(MJ&&!(this.Bl&16777216))return this;
if(((Z1||Ayh)||UG)&&((this.Bl<16777216)||(this.Bl>=33554432)))return this;if(MJ)
this.Bl=this.Bl&3758100479;if(MJ&&!(this.Bl&16777215))this.Bl=0;if(!!BK){this.Down=
Z1||UG;this.X7=this.AO_(BK.HS);this.NB=BK.NB;this.HS=BK.HS;this.Dv=B9;this.Jg=BK.
Jg;this.NN=BK.NN;this.Nt=BK.Nt;this.Iw=BK.Iw;this.Bt=BK.Bt;if(BK.Down&&!BK.Jg)AID=
false;}if(!!DU){this.Down=true;this.X7=this.AO_(DU.HS);this.NB=DU.NB;this.HS=DU.
HS;this.Dv=DU.Dv;this.Jg=DU.Jg;this.NN=DU.NN;this.Iw=DU.Iw;this.Nt=false;this.Bt=
DU.Bt;}var AZq=this.Down;if(!!DU)(B=this.AQd)?B[1].call(B[0],this):null;if((!!BK&&
this.Down)&&!this.Jg)(B=this.BP)?B[1].call(B[0],this):null;if((!!BK&&this.Down)&&(
this.Jg>0))(B=this.DR)?B[1].call(B[0],this):null;if((this.Down&&this.X7)&&!AID){
this.AZw=true;(B=this.AuY)?B[1].call(B[0],this):null;}if(this.AZw&&(((AZq&&!this.
X7)&&AID)||((!AZq&&this.X7)&&AID))){this.AZw=false;(B=this.AC6)?B[1].call(B[0],this
):null;}if(!!BK&&!AZq)(B=this.Lb)?B[1].call(B[0],this):null;if(!!this.Aer){var AcW=
0x0;if(((((this.Aer&0x10)===0x10)&&!!BK)&&BK.Down)&&(BK.Jg>=1000))AcW=0x10;if((((
this.Aer&0x1)===0x1)&&!!DU)&&((DU.LF[1]-DU.Agc[1])<=-this.Av$))AcW=0x1;if((((this.
Aer&0x2)===0x2)&&!!DU)&&((DU.LF[1]-DU.Agc[1])>=this.Av$))AcW=0x2;if((((this.Aer&
0x4)===0x4)&&!!DU)&&((DU.LF[0]-DU.Agc[0])<=-this.Av$))AcW=0x4;if((((this.Aer&0x8
)===0x8)&&!!DU)&&((DU.LF[0]-DU.Agc[0])>=this.Av$))AcW=0x8;if(!!AcW){var Iq=this.
Ia();if(!!Iq){this.AJh=AcW;Iq.AR8(null,this,this,AcW);}}}return this;},XL:function(
C6,BD,NY,ZE,Aco,Acn){var B;if(!!ZE&&(ZE!==this))return null;if((NY<1)||(NY>this.
A5g))return null;if(this.Bl>=33554432)return null;if((this.Bl>=16777216)&&!(this.
Bl&(4096<<BD)))return null;if(!!(Acn&this.Aer))return null;if(this.Bf3()){var Av=
A.lb(C6,this.GetExtent());if(!((Av[0]>=Av[2])||(Av[1]>=Av[3]))){var PX=A.aaI(C6);
var Fh=B9;if(PX[0]<Av[0])Fh=[Av[0]-PX[0],Fh[1]];if(PX[0]>=Av[2])Fh=[(Av[2]-PX[0]
)-1,Fh[1]];if(PX[1]<Av[1])Fh=[Fh[0],Av[1]-PX[1]];if(PX[1]>=Av[3])Fh=[Fh[0],(Av[3
]-PX[1])-1];return A._NewObject(C.AtT,0).Initialize(this,Fh);}}else{var Ho=A.abi(
9,A.wf,null);var P;Ho.Set(0,A.aaI(C6));Ho.Set(1,Ho.Get(0));Ho.Set(2,Ho.Get(0));Ho.
Set(3,Ho.Get(0));Ho.Set(4,Ho.Get(0));Ho.Set(1,[C6[0],Ho.Get(1)[1]]);Ho.Set(2,[Ho.
Get(2)[0],C6[1]]);Ho.Set(3,[C6[2],Ho.Get(3)[1]]);Ho.Set(4,[Ho.Get(4)[0],C6[3]]);
Ho.Set(5,C6.slice(0,2));Ho.Set(6,[C6[2],C6[1]]);Ho.Set(7,[C6[0],C6[3]]);Ho.Set(8
,C6.slice(2,4));for(P=0;P<9;P=P+1)if(this.AO_(Ho.Get(P)))return A._NewObject(C.AtT
,0).Initialize(this,A.abe(Ho.Get(P),Ho.Get(0)));}return null;},Bj$:function(E){if(
E<1)E=1;this.Av$=E;},ADL:function(E){if(E<1)E=1;this.A5g=E;},Ar:function(E){if(E
)this.Cq(0x100000,0x0);else this.Cq(0x0,0x100000);},_Init:function(aArg){C.YX._Init.
call(this,aArg);this.__proto__=C.Bi;this.T=0x10011B;},_Mark:function(D){var B;C.
YX._Mark.call(this,D);if((B=this.AQd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AC6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuY)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Lb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.HZ={timer:null,AIZ:null,As2:null,AEo:null,YK:null,Sg:null,Bl:0,AHA:0,AcH:5000
,Apa:0,AIB:A.wf,Aon:0,Ae6:0,EN:0,Alz:0,Atf:0,Aom:0,Ae5:0,EM:0,Aly:0,Alw:0,NB:A.wf
,A3z:A.wf,FN:A.wf,F0:A.wf,Dv:A.wf,We:A.wf,A4e:0.5,A8t:true,AE3:true,Y7:false,W_:
false,W$:false,An8:false,AyR:0,J5:function(CT,aClip,aOffset,Cb,aBlend){},GL:function(
CG){var B;var BK=(C.Adw.isPrototypeOf(CG)?CG:null);var DU=(C.ApM.isPrototypeOf(CG
)?CG:null);var Im=(C.AtS.isPrototypeOf(CG)?CG:null);var Z1;var UG;var AzS;var MJ;
var Ayh;Z1=(!!BK&&BK.Down)&&!BK.Jg;UG=(!!BK&&BK.Down)&&(BK.Jg>0);AzS=(!!BK&&BK.Down
)&&(BK.Jg>this.AyR);MJ=!!BK&&!BK.Down;Ayh=!!DU;if(Z1)this.AyR=((B=(BK.Nt?0:50))&
0x80)?B|0xFFFFFF00:B&0xFF;if(Z1){var AoQ=0;var AcE;this.Bl=this.Bl|(1<<BK.Iw);for(
AcE=this.Bl&4095;AcE>0;AcE=AcE>>1)if(!!(AcE&1))AoQ=AoQ+1;if(AoQ===1)this.Bl=(this.
Bl|16777216)|(4096<<BK.Iw);}if(MJ&&(this.Bl<16777216)){var Iq=this.Ia();var Jt=null;
if(!!Iq){var A1H=(!!this.AH?this.AH:this.Ab);var AZk=(!!Iq.Ju?Iq.Ju.CV:null);Jt=
Iq.XL(A.abh(Zx,BK.LF),BK.Iw,BK.NN,AZk,A1H,0x0);}if(!!Jt){var P;for(P=0;P<10;P++)
if(!!(this.Bl&(1<<P)))Jt.Ca.GL(A._NewObject(C.Adw,0).InitializeDown(P,BK.HS,BK.NN
,B9,true,BK.LF));for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Jt.Ca.GL(A._NewObject(C.
Adw,0).InitializeUp(P,BK.HS,BK.HS,0,BK.NN,B9,false,BK.LF,BK.LF));}}if(MJ)this.Bl=(
this.Bl&~(1<<BK.Iw))|33554432;if(AzS&&(this.Bl<16777216))this.Bl=this.Bl|67108864;
if(MJ&&BK.Nt)this.Bl=this.Bl|67108864;if(MJ&&!(this.Bl&16777215))this.Bl=0;if(UG&&(
this.Bl>=67108864)){var Iq=this.Ia();if(!!Iq)Iq.AR8(null,null,this,0x0);}if((UG&&
!!(this.Bl&16777216))&&!!(this.Bl&33554432)){UG=false;MJ=true;}if(!!BK&&!(this.Bl&(
4096<<BK.Iw)))return this;if(!!DU&&!(this.Bl&(4096<<DU.Iw)))return this;if(MJ&&!(
this.Bl&16777216))return this;if(((Z1||Ayh)||UG)&&((this.Bl<16777216)||(this.Bl>=
33554432)))return this;if(MJ)this.Bl=this.Bl&3758100479;if(MJ&&!(this.Bl&16777215
))this.Bl=0;if(!!Im&&(Im.Awp===this))return null;if((!!Im&&Im.Down)&&(this.An8||
!this.Y7))return null;if((!!Im&&Im.Down)&&!A.wa(this.M,this.Ab.A5c(Im.LF)))return null;
if((!!Im&&!Im.Down)&&(!this.An8||(this.AHA!==Im.Iw)))return null;if((!BK&&!DU)&&
!Im)return null;if(!!BK){this.An8=Z1||UG;this.AHA=BK.Iw;this.NB=BK.NB;}if(!!DU)this.
AHA=DU.Iw;if(!!Im){this.An8=Im.Down;this.AHA=Im.Iw;}if(!!Im&&Im.Down){this.A1I();
this.EM=(((Im.Bt-this.Alw)*0.001)*this.Ae5)+this.EM;this.EN=(((Im.Bt-this.Atf)*0.001
)*this.Ae6)+this.EN;if(this.W_)this.EM=0;if(this.W$)this.EN=0;this.Ae5=0;this.Ae6=
0;this.W_=false;this.W$=false;this.AIB=this.Dv;this.Apa=Im.Bt;return this;}if(Z1
){this.A1I();this.EM=(((BK.Bt-this.Alw)*0.001)*this.Ae5)+this.EM;this.EN=(((BK.Bt-
this.Atf)*0.001)*this.Ae6)+this.EN;if(this.W_||!this.Y7)this.EM=0;if(this.W$||!this.
Y7)this.EN=0;this.Ae5=0;this.Ae6=0;this.W_=false;this.W$=false;if(!this.Y7){this.
Y7=true;(B=this.Sg)?B[1].call(B[0],this):null;(B=this.AIZ)?B[1].call(B[0],this):
null;}this.AIB=this.Dv;this.Apa=BK.Bt;}if(!!DU){var GY=A.abe(DU.HS,DU.NB);var Cx=
this.Dv;if(this.AE3)Cx=[this.AIB[0]+GY[0],Cx[1]];Cx=[Cx[0],this.AIB[1]+GY[1]];if(
this.A8t){if(Cx[0]<this.F0[0])Cx=[this.F0[0]+(((Cx[0]-this.F0[0])/2)|0),Cx[1]];else
if(Cx[0]>this.FN[0])Cx=[this.FN[0]+(((Cx[0]-this.FN[0])/2)|0),Cx[1]];if(Cx[1]<this.
F0[1])Cx=[Cx[0],this.F0[1]+(((Cx[1]-this.F0[1])/2)|0)];else if(Cx[1]>this.FN[1])
Cx=[Cx[0],this.FN[1]+(((Cx[1]-this.FN[1])/2)|0)];}else{if(Cx[0]<this.F0[0])Cx=[this.
F0[0],Cx[1]];else if(Cx[0]>this.FN[0])Cx=[this.FN[0],Cx[1]];if(Cx[1]<this.F0[1])
Cx=[Cx[0],this.F0[1]];else if(Cx[1]>this.FN[1])Cx=[Cx[0],this.FN[1]];}if(!A.aaX(
Cx,this.Dv)){this.A3z=A.abe(Cx,this.Dv);this.Dv=Cx;(B=this.As2)?B[1].call(B[0],this
):null;(B=this.AEo)?B[1].call(B[0],this):null;}}if((!!Im&&!Im.Down)&&((Im.Bt-this.
Apa)>=200)){this.EM=0;this.EN=0;}if(UG&&((BK.Bt-this.Apa)>=200)){this.EM=0;this.
EN=0;}if(!!DU&&(DU.Bt>this.Apa)){var GY=DU.Dv;var BaP=1000/(DU.Bt-this.Apa);var Ah2=
0;var Ah3;if(this.AE3)Ah2=GY[0]*BaP;Ah3=GY[1]*BaP;if((Ah2*this.EM)<0)this.EM=0;if((
Ah3*this.EN)<0)this.EN=0;this.EM=(this.EM+Ah2)*0.5;this.EN=(this.EN+Ah3)*0.5;this.
Apa=DU.Bt;}if(!MJ&&!Im)return this;if(!!BK&&BK.Nt){this.EM=0;this.EN=0;}if((this.
Dv[0]<=this.F0[0])||(this.Dv[0]>=this.FN[0]))this.EM=0;else if(!this.EM){var EF=
this.Dv[0];var E6=this.F0[0];var Ew=this.FN[0];if(EF<E6)Ew=this.F0[0];else if(EF>
Ew)E6=this.FN[0];else if(this.We[0]<=1){E6=EF;Ew=EF;}else{var AcM=(Ew-EF)%this.We[
0];Ew=(EF-this.We[0])+AcM;E6=EF+AcM;if(Ew<this.F0[0])Ew=this.F0[0];if(E6>this.FN[
0])E6=this.FN[0];}if((E6-EF)<=(EF-Ew))EF=E6;else EF=Ew;if(EF!==this.Dv[0]){var I_=
EF-this.Dv[0];if(I_>0)this.EM=Math.sqrt((I_*2)*this.AcH)+20;if(I_<0)this.EM=-Math.
sqrt((-I_*2)*this.AcH)-20;this.Ae5=(400-(this.EM*this.EM))/(2*I_);this.Aom=EF;}}
else{var Bx4=this.EM*this.EM;var I_=Bx4/(2*this.AcH);var EF=this.Dv[0];if(this.EM>
0)EF=EF+(I_|0);if(this.EM<0)EF=EF-(I_|0);if(EF>this.FN[0])EF=this.FN[0];else if(
EF<this.F0[0])EF=this.F0[0];var Bdj=EF;var E6=this.F0[0];var Ew=this.FN[0];if(EF<
E6)Ew=this.F0[0];else if(EF>Ew)E6=this.FN[0];else if(this.We[0]<=1){E6=EF;Ew=EF;
}else{var AcM=(Ew-EF)%this.We[0];Ew=(EF-this.We[0])+AcM;E6=EF+AcM;if(Ew<this.F0[
0])Ew=this.F0[0];if(E6>this.FN[0])E6=this.FN[0];}if(this.EM>0){if(Ew<=this.Dv[0]
)EF=E6;else if((EF-Ew)<(E6-EF))EF=Ew;else EF=E6;}else if(E6>=this.Dv[0])EF=Ew;else
if((EF-Ew)>(E6-EF))EF=E6;else EF=Ew;if(EF!==this.Dv[0]){I_=EF-this.Dv[0];if(EF!==
Bdj){var Aio=EF-Bdj;if(Aio>0)this.EM=this.EM+Math.sqrt((Aio*2)*this.AcH);if(Aio<
0)this.EM=this.EM-Math.sqrt((-Aio*2)*this.AcH);}if(this.EM>0)this.EM=this.EM+20;
if(this.EM<0)this.EM=this.EM-20;this.Ae5=(400-(this.EM*this.EM))/(2*I_);this.Aom=
EF;}else this.EM=0;}if((this.Dv[1]<=this.F0[1])||(this.Dv[1]>=this.FN[1]))this.EN=
0;else if(!this.EN){var EG=this.Dv[1];var E6=this.F0[1];var Ew=this.FN[1];if(EG<
E6)Ew=this.F0[1];else if(EG>Ew)E6=this.FN[1];else if(this.We[1]<=1){E6=EG;Ew=EG;
}else{var AcM=(Ew-EG)%this.We[1];Ew=(EG-this.We[1])+AcM;E6=EG+AcM;if(Ew<this.F0[
1])Ew=this.F0[1];if(E6>this.FN[1])E6=this.FN[1];}if((E6-EG)<=(EG-Ew))EG=E6;else EG=
Ew;if(EG!==this.Dv[1]){var I_=EG-this.Dv[1];if(I_>0)this.EN=Math.sqrt((I_*2)*this.
AcH)+20;if(I_<0)this.EN=-Math.sqrt((-I_*2)*this.AcH)-20;this.Ae6=(400-(this.EN*this.
EN))/(2*I_);this.Aon=EG;}}else{var Bx5=this.EN*this.EN;var I_=Bx5/(2*this.AcH);var
EG=this.Dv[1];if(this.EN>0)EG=EG+(I_|0);if(this.EN<0)EG=EG-(I_|0);if(EG>this.FN[
1])EG=this.FN[1];else if(EG<this.F0[1])EG=this.F0[1];var Bdk=EG;var E6=this.F0[1
];var Ew=this.FN[1];if(EG<E6)Ew=this.F0[1];else if(EG>Ew)E6=this.FN[1];else if(this.
We[1]<=1){E6=EG;Ew=EG;}else{var AcM=(Ew-EG)%this.We[1];Ew=(EG-this.We[1])+AcM;E6=
EG+AcM;if(Ew<this.F0[1])Ew=this.F0[1];if(E6>this.FN[1])E6=this.FN[1];}if(this.EN>
0){if(Ew<=this.Dv[1])EG=E6;else if((EG-Ew)<(E6-EG))EG=Ew;else EG=E6;}else if(E6>=
this.Dv[1])EG=Ew;else if((EG-Ew)>(E6-EG))EG=E6;else EG=Ew;if(EG!==this.Dv[1]){I_=
EG-this.Dv[1];if(EG!==Bdk){var Aio=EG-Bdk;if(Aio>0)this.EN=this.EN+Math.sqrt((Aio
*2)*this.AcH);if(Aio<0)this.EN=this.EN-Math.sqrt((-Aio*2)*this.AcH);}if(this.EN>
0)this.EN=this.EN+20;if(this.EN<0)this.EN=this.EN-20;this.Ae6=(400-(this.EN*this.
EN))/(2*I_);this.Aon=EG;}else this.EN=0;}if(!!BK)this.Alw=BK.Bt;if(!!Im)this.Alw=
Im.Bt;this.Atf=this.Alw;this.Aly=this.Dv[0];this.Alz=this.Dv[1];this.Bx6();return this;
},XL:function(C6,BD,NY,ZE,Aco,Acn){var B;if(!!ZE&&(ZE!==this))return null;if(this.
Bl>=33554432)return null;if((this.Bl>=16777216)&&!(this.Bl&(4096<<BD)))return null;
if(!this.AE3&&!!(Acn&0xC))return null;var Av=A.lb(C6,this.M);if(!((Av[0]>=Av[2])||(
Av[1]>=Av[3]))){var PX=A.aaI(C6);var Fh=B9;if(PX[0]<Av[0])Fh=[Av[0]-PX[0],Fh[1]];
if(PX[0]>=Av[2])Fh=[(Av[2]-PX[0])-1,Fh[1]];if(PX[1]<Av[1])Fh=[Fh[0],Av[1]-PX[1]];
if(PX[1]>=Av[3])Fh=[Fh[0],(Av[3]-PX[1])-1];return A._NewObject(C.AtT,0).Initialize(
this,Fh);}return null;},A1I:function(){if(!!this.timer){A.z9([this,this.L5],this.
timer,0);this.timer=null;}},Bx6:function(){this.timer=A._GetAutoObject(A.acl.AdA
);A.zV([this,this.L5],this.timer,0);},L5:function(H){var B;if(!this.timer)return;
var Atl=(this.timer.Bt-this.Alw)*0.001;var Atm=(this.timer.Bt-this.Atf)*0.001;var
Byc=Atl*Atl;var Byd=Atm*Atm;var Ah2=(this.Ae5*Atl)+this.EM;var Ah3=(this.Ae6*Atm
)+this.EN;var Cx=[((((this.Ae5*0.5)*Byc)+(this.EM*Atl))+this.Aly)|0,((((this.Ae6
*0.5)*Byd)+(this.EN*Atm))+this.Alz)|0];if(this.W_&&(Atl>=0.5)){Cx=[this.Aom,Cx[1
]];this.EM=0;this.Ae5=0;this.Aly=Cx[0];this.W_=false;}else if(this.W_){var Lv=1-
Math.pow(1-(Atl/0.5),5);Cx=[(this.Aly+((this.Aom-this.Aly)*Lv))|0,Cx[1]];}if(this.
W$&&(Atm>=0.5)){Cx=[Cx[0],this.Aon];this.EN=0;this.Ae6=0;this.Alz=Cx[1];this.W$=
false;}else if(this.W$){var Lv=1-Math.pow(1-(Atm/0.5),5);Cx=[Cx[0],(this.Alz+((this.
Aon-this.Alz)*Lv))|0];}if(((this.EM>0)&&(Ah2<0))||((this.EM<0)&&(Ah2>0))){Ah2=0;
Cx=[this.Dv[0],Cx[1]];}if(((this.EN>0)&&(Ah3<0))||((this.EN<0)&&(Ah3>0))){Ah3=0;
Cx=[Cx[0],this.Dv[1]];}if(!this.W_&&(Cx[0]<this.F0[0])){this.Aly=Cx[0];this.Aom=
this.F0[0];this.Alw=this.timer.Bt;this.W_=true;}else if(!this.W_&&(Cx[0]>this.FN[
0])){this.Aly=Cx[0];this.Aom=this.FN[0];this.Alw=this.timer.Bt;this.W_=true;}if(
!this.W$&&(Cx[1]<this.F0[1])){this.Alz=Cx[1];this.Aon=this.F0[1];this.Atf=this.timer.
Bt;this.W$=true;}else if(!this.W$&&(Cx[1]>this.FN[1])){this.Alz=Cx[1];this.Aon=this.
FN[1];this.Atf=this.timer.Bt;this.W$=true;}if(((!this.W_&&!!this.EM)&&(Ah2>-20))&&(
Ah2<20)){Cx=[this.Aom,Cx[1]];this.EM=0;this.Ae5=0;this.Aly=Cx[0];}if(((!this.W$&&
!!this.EN)&&(Ah3>-20))&&(Ah3<20)){Cx=[Cx[0],this.Aon];this.EN=0;this.Ae6=0;this.
Alz=Cx[1];}if(!A.aaX(Cx,this.Dv)){this.A3z=A.abe(Cx,this.Dv);this.Dv=Cx;(B=this.
As2)?B[1].call(B[0],this):null;(B=this.AEo)?B[1].call(B[0],this):null;}if(((!this.
EM&&!this.EN)&&!this.W_)&&!this.W$){this.A1I();this.Y7=false;(B=this.YK)?B[1].call(
B[0],this):null;}},ARk:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
We=E;},AQ0:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A4e)return;this.A4e=E;if(
E<(1e-007))E=1e-007;this.AcH=E*10000;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);this.__proto__=C.HZ;this.T=0x10011B;},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIZ
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.As2)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AEo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.YK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sg)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BO={
Ag:null,Lb:null,BP:null,DR:null,Ao7:0,Bt:0,A8p:0,Filter:148,CM:0,D2:0,Bw:true,Down:
false,AbG:false,O9:false,Init:function(aArg){var B;var CV=(C.O.isPrototypeOf(B=this.
I)?B:null);if(!CV)throw new Error(AeS);this.Ag=CV.AIF;CV.AIF=this;},GL:function(
CG){var B;if(!!CG&&CG.Bgi(this.Filter)){this.Down=CG.Down;this.CM=CG.CM;this.D2=
CG.D2;this.Bt=CG.Bt;this.O9=false;if(CG.Down){this.A8p=this.Ao7;this.AbG=this.Ao7>
0;if(this.AbG)(B=this.DR)?B[1].call(B[0],this):null;else(B=this.BP)?B[1].call(B[
0],this):null;if(!this.O9)this.Ao7=this.Ao7+1;return!this.O9;}if(!CG.Down){this.
AbG=this.Ao7>1;this.A8p=this.Ao7-1;this.Ao7=0;(B=this.Lb)?B[1].call(B[0],this):null;
return!this.O9;}}return false;},_Init:function(aArg){this.__proto__=C.BO;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Lb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BP)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};C.AtT={Ca:null,AtW:0,Dv:A.wf,Initialize:
function(Af,aOffset){this.Ca=Af;this.Dv=aOffset;this.AtW=(aOffset[0]*aOffset[0])+(
aOffset[1]*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=C.AtT;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ca)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::CursorHit"};C.A5m={Ag:null,CV:null,_Init:function(aArg){this.__proto__=C.
A5m;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.CV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::ModalContext"};C.
Aqk={Nm:null,extent:A.wg,A9:A.wg,isEmpty:false,_Init:function(aArg){this.__proto__=
C.Aqk;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Nm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.ACr={Aia:A.wf,Ah$:A.wf,_Init:function(aArg){C.Aqk._Init.
call(this,aArg);this.__proto__=C.ACr;},_className:"Core::LayoutLineContext"};C.ACs={
Azo:A.wf,Azn:A.wf,Aia:A.wf,Ah$:A.wf,_Init:function(aArg){C.Aqk._Init.call(this,aArg
);this.__proto__=C.ACs;},_className:"Core::LayoutQuadContext"};C.ALW={CV:null,Ag:
null,Rc:null,Rl:null,L3:null,Ao4:null,_Init:function(aArg){this.__proto__=C.ALW;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.CV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rc)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Rl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L3)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ao4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::DialogContext"};C.ASL={FD:null,B7:null,B6:null,BaV:false,BuP:function(){if(
!this.FD)return;var OZ=this.FD;this.FD.OU=null;this.FD=null;A.pe([this,this.A0Z]
,this);OZ.A5Q(this);},Bww:function(H){if(!!this.FD)return;if(!this.B6)return;this.
FD=this.B6;this.B6=this.B6.Ag;if(!!this.B6)this.B6.AH=null;else this.B7=null;this.
FD.Ag=null;this.BaV=true;this.FD.Sg(this);this.BaV=false;},BwT:function(H){A.pe([
this,this.Bww],this);},BwS:function(H){A.pe([this,this.BwT],this);},A0Z:function(
H){A.pe([this,this.BwS],this);},Ber:function(I8){if(!I8||!I8.OU)return;if(I8.OU!==
this)throw new Error(Zy);var BdM=false;if(this.FD===I8){this.FD=null;BdM=true;A.
pe([this,this.A0Z],this);}else{if(!!I8.Ag)I8.Ag.AH=I8.AH;else this.B7=I8.AH;if(!
!I8.AH)I8.AH.Ag=I8.Ag;else this.B6=I8.Ag;I8.AH=null;I8.Ag=null;}I8.OU=null;if(BdM
)I8.A5P(this);},A8w:function(I8,AYO){if(!I8)return;if(!!I8.OU)throw new Error(Wy
);I8.OU=this;if(AYO){I8.Ag=this.B6;if(!!this.B6)this.B6.AH=I8;else this.B7=I8;this.
B6=I8;}else{I8.AH=this.B7;if(!!this.B7)this.B7.Ag=I8;else this.B6=I8;this.B7=I8;
}if(!this.FD)A.pe([this,this.A0Z],this);},_Init:function(aArg){this.__proto__=C.
ASL;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};C.Akh={OU:null,AH:null,Ag:null,A5Q:function(Asp
){},A5P:function(Asp){},Sg:function(Asp){this.AlU();},Mb:function(){if(!!this.OU&&(
this.OU.FD===this))this.OU.BuP();},AlU:function(){if(!!this.OU)this.OU.Ber(this);
},AO7:function(){return!!this.OU&&(this.OU.FD===this);},_Init:function(aArg){this.
__proto__=C.Akh;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.OU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Task"};C.ASJ={At:null,Ath:null,Sg:function(Asp){this.Ath.
At=this.At;A.we(this.Ath,0);A.pe([this,this.Bwt],this);},Bwt:function(H){this.Ath.
At=null;this.Ath=null;this.At=null;this.Mb();},_Init:function(aArg){C.Akh._Init.
call(this,aArg);this.__proto__=C.ASJ;},_Mark:function(D){var B;C.Akh._Mark.call(
this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ath)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"};C.Awo={_Init:function(
){C.ASL._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AgU={resource:null,K2:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.AgU;this.Init(aArg
);A.h7++;},_Done:function(){this.K2();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={M6:null,timer:
null,Bt:0,Period:1000,U4:0,Bw:false,K2:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AI7:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},QJ:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bw)this.AI7(this.U4,E);},V1:function(E){if(E<0)E=0;if(E===this.U4)return;
this.U4=E;if(this.Bw)this.AI7(E,this.Period);},Ar:function(E){if(E===this.Bw)return;
this.Bw=E;if(E)this.AI7(this.U4,this.Period);else this.AI7(0,0);this.Bt=this.Aun(
);},Aun:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.v$)|0;return ticksCount;
},Trigger:function(){var B;this.Bt=this.Aun();if(!this.Period)this.Ar(false);(B=
this.M6)?B[1].call(B[0],this):null;},AE_:function(H){this.Ar(false);},StartTimer:
function(H){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.h7++;},_Done:function(){this.K2();this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M6)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bt={ASe:0,AuU:0,Ajh:0,Gv:0
,G6:0,Year:0,Bat:function(Ae2,AYg){if(AYg)switch(Ae2){case 1:return A.aci.Bgr;case
2:return A.aci.Bfl;case 3:return A.aci.BgL;case 4:return A.aci.Bd_;case 5:return A.
aci.BgP;case 6:return A.aci.Bgu;case 7:return A.aci.Bgt;case 8:return A.aci.Bea;
case 9:return A.aci.Blh;case 10:return A.aci.Bg$;case 11:return A.aci.Bg_;case 12:
return A.aci.BeO;default:return A.jV;}else switch(Ae2){case 1:return A.aci.ACl;case
2:return A.aci.ABd;case 3:return A.aci.ACx;case 4:return A.aci.AAg;case 5:return A.
aci.ACA;case 6:return A.aci.ACn;case 7:return A.aci.ACm;case 8:return A.aci.AAo;
case 9:return A.aci.AES;case 10:return A.aci.ACN;case 11:return A.aci.ACL;case 12:
return A.aci.AAZ;default:return A.jV;}},Bar:function(A_1,AYg){if(AYg)switch(A_1){
case 1:return A.aci.BgW;case 2:return A.aci.Bmz;case 3:return A.aci.Bna;case 4:return A.
aci.Bmm;case 5:return A.aci.Bfy;case 6:return A.aci.Blc;case 0:return A.aci.Bl$;
default:return A.jV;}else switch(A_1){case 1:return A.aci.BgV;case 2:return A.aci.
Bmy;case 3:return A.aci.Bm$;case 4:return A.aci.Bml;case 5:return A.aci.Bfx;case
6:return A.aci.Blb;case 0:return A.aci.Bl_;default:return A.jV;}},Baq:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JF:function(){var d=this.Gv;var KR=this.G6;var C9=this.Year-((
KR<=2)?1:0);var Ayi=(((C9>=0)?C9:C9-399)/400)|0;var AlF=C9-(Ayi*400);var UE=(((((
153*(KR+((KR>2)?-3:9)))+2)/5)|0)+d)-1;var Aoj=(((AlF*365)+((AlF/4)|0))-((AlF/100
)|0))+UE;var PZ=((Ayi*146097)+Aoj)-719468;return(((PZ*86400)+(this.Ajh*3600))+(this.
AuU*60))+this.ASe;},AD8:function(E){var B;E+=62162035200;if(E<0)E=0;var US=Math.
trunc(E/86400)|0;var Ayi=(((US>=0)?US:US-146096)/146097)|0;var Aoj=US-(Ayi*146097
);var AlF=((((Aoj-((Aoj/1460)|0))+((Aoj/36524)|0))-((Aoj/146096)|0))/365)|0;var C9=
AlF+(Ayi*400);var UE=Aoj-(((365*AlF)+((AlF/4)|0))-((AlF/100)|0));var A0p=(((5*UE
)+2)/153)|0;var d=(UE-((((153*A0p)+2)/5)|0))+1;var KR=A0p+((A0p<10)?3:-9);var BH=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=C9+((
KR<=2)?1:0);this.TS(KR);this.Ld(d);this.AmV(BH+((BH<0)?24:0));this.AmY(P+((P<0)?
60:0));this.Am1(s+((s<0)?60:0));},YL:function(){if(this.G6===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G6===4)||(this.G6===6))||(this.G6===9))||(this.G6===11))return 30;else return 31;
},Bij:function(){var B;var UE=this.Abi()-1;var AsE=(6+this.Au4())%7;var Aol=((371+
AsE)-UE)%7;if(this.G6===12){var d=this.Gv;if((d===31)&&(AsE<3))return 0;if((d===
30)&&(AsE<2))return 0;if((d===29)&&(AsE<1))return 0;}if(Aol<=3)UE+=Aol;else UE-=(
7-Aol);if(UE<0){var d=this.Gv;var KR=this.G6;this.Year--;this.Ld(31);this.TS(12);
UE=this.Abi()-1;AsE=(6+this.Au4())%7;Aol=((371+AsE)-UE)%7;if(Aol<=3)UE+=Aol;else
UE-=Aol;this.Year++;this.Ld(d);this.TS(KR);}return(UE/7)|0;},Abi:function(){var B;
var d=this.Gv;var KR=this.G6;var C9=this.Year;var Afl=((!!!(C9%4)&&(!!(C9%100)||
!!!(C9%400)))?1:0);switch(KR){case 2:d+=31;break;case 3:d+=(59+Afl);break;case 4:
d+=(90+Afl);break;case 5:d+=(120+Afl);break;case 6:d+=(151+Afl);break;case 7:d+=(
181+Afl);break;case 8:d+=(212+Afl);break;case 9:d+=(243+Afl);break;case 10:d+=(273+
Afl);break;case 11:d+=(304+Afl);break;case 12:d+=(334+Afl);break;default:;}return d;
},Au4:function(){var B;var d=this.Gv;var KR=this.G6+((this.G6>2)?-2:10);var C9=this.
Year-((this.G6<=2)?1:0);var BX=(C9/100)|0;C9%=100;d+=((((((((26*KR)-2)/10)|0)+C9
)+((C9/4)|0))+((BX/4)|0))-(2*BX));if(d>=0)return d%7;else return(7-(-d%7))%7;},Am1:
function(E){if(E<0)E=0;if(E>59)E=59;this.ASe=E;},AmY:function(E){if(E<0)E=0;if(E>
59)E=59;this.AuU=E;},AmV:function(E){if(E<0)E=0;if(E>23)E=23;this.Ajh=E;},Ld:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gv=E;},TS:function(E){if(E<1)E=1;if(E>12)E=12;this.
G6=E;},Format:function(Ij){var result=A.jV;var inx=0;while(!!(Ij.charCodeAt(inx)||
0))if((Ij.charCodeAt(inx)||0)===0x25){var ZW=1;inx=inx+1;if((Ij.charCodeAt(inx)||
0)===0x23){inx=inx+1;ZW=0;}switch(Ij.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.Gv,2*ZW,10);break;case 0x48:result=result+A.abl(this.Ajh,2*ZW,10);break;
case 0x49:if(!(this.Ajh%12))result=result+Wz;else result=result+A.abl(this.Ajh%12
,2*ZW,10);break;case 0x6D:result=result+A.abl(this.G6,2*ZW,10);break;case 0x4D:result=
result+A.abl(this.AuU,2*ZW,10);break;case 0x70:if(this.Ajh<12)result=result+A.aci.
BdS;else result=result+A.aci.BkE;break;case 0x53:result=result+A.abl(this.ASe,2*
ZW,10);break;case 0x77:result=result+A.abl(this.Au4(),ZW,10);break;case 0x79:result=
result+A.abl(this.Year%100,2*ZW,10);break;case 0x59:result=result+A.abl(this.Year
,4*ZW,10);break;case 0x25:result=result+Zz;break;case 0x6A:result=result+A.abl(this.
Abi(),3*ZW,10);break;case 0x57:result=result+A.abl(this.Bij(),2*ZW,10);break;case
0x61:result=result+this.Bar(this.Au4(),true);break;case 0x41:result=result+this.
Bar(this.Au4(),false);break;case 0x62:result=result+this.Bat(this.G6,true);break;
case 0x42:result=result+this.Bat(this.G6,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ij.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(Acp,Ae2,Bs$,Btp,BtG,BtZ){this.Year=Acp;this.TS(Ae2);this.
Ld(Bs$);this.AmV(Btp);this.AmY(BtG);this.Am1(BtZ);return this;},Initialize:function(
Ahr){this.AD8(Ahr);return this;},BeS:function(Ahr){if(!Ahr)return A._NewObject(C.
Anl,0).Initialize(this.JF());return A._NewObject(C.Anl,0).Initialize(this.JF()-Ahr.
JF());},BlN:function(AxE){if(!AxE)return this;return A._NewObject(C.Bt,0).Initialize(
this.JF()-AxE.JF());},J:function(AxE){if(!AxE)return this;return A._NewObject(C.
Bt,0).Initialize(this.JF()+AxE.JF());},_Init:function(aArg){this.__proto__=C.Bt;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.Anl={AEP:0,ACE:0,ABU:0,J3:0,JF:function(
){return(((this.J3*86400)+(this.ABU*3600))+(this.ACE*60))+this.AEP;},AD8:function(
E){var AJf=1;this.J3=Math.trunc(E/86400)|0;if(E<0){E=-E;AJf=-1;}this.ABU=AJf*(Math.
trunc(E/3600)%24|0);this.ACE=AJf*(Math.trunc(E/60)%60|0);this.AEP=AJf*(E%60|0);}
,Initialize2:function(Bta,Btq,BtH,Bt2){this.J3=Bta;this.ABU=Btq;this.ACE=BtH;this.
AEP=Bt2;return this;},Initialize:function(Ahr){this.AD8(Ahr);return this;},_Init:
function(aArg){this.__proto__=C.Anl;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A8U={At:null,OU:null,Trigger:function(Bs6,AYO){var OZ=A._NewObject(C.ASJ,0);
OZ.Ath=this;OZ.At=Bs6;this.OU.A8w(OZ,AYO);},_Init:function(aArg){this.__proto__=
C.A8U;this.OU=A._GetAutoObject(C.Awo);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.OU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A8V={JB:null,Event:null,AQe:null,AsW:function(H){var B;if(
!this.Event)return;this.JB=this.Event.At;(B=this.AQe)?B[1].call(B[0],this):null;
this.JB=null;},Bi3:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AsW],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AsW],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A8V;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AQe)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BB4={Dk:0x1,ByR:0x2,BzY:0x4,BBW:0x8,Bw:0x10,HY:0x20
,BzZ:0x40,BAF:0x80,BzU:0x100,BAj:0x200,BzI:0x400,BBg:0x800,Bg:0x1000,BB1:0x2000,
BA2:0x4000,BA3:0x8000,AaA:0x10000,BA1:0x20000,BBr:0x40000,Bzz:0x80000,BA$:0x100000
,Bzt:0x200000};C.Ps={BBh:0x1,BBi:0x2,ByN:0x4,ByO:0x8,ByP:0x10,ByM:0x20};C.Aga={None:
0,BBS:1,By9:2,BAo:3,BBl:4,BBT:5,BBU:6,By_:7,By$:8,BAq:9,BAp:10,BBn:11,BBm:12};C.
AtY={None:0,BBQ:1,Left:2,By7:3,Za:4,A26:5,BBR:6,Right:7,By8:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BBj={BB_:0x1,BB7:0x2,BB8:0x4,BB9:
0x8,BAs:0x10,Bz1:0x20};
C._Init=function(){C.AjB.__proto__=C.Ca;C.YX.__proto__=C.Ca;C.Ej.__proto__=C.Ca;C.
O.__proto__=C.Ej;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.APm.__proto__=
C.Event;C.AtS.__proto__=C.Event;C.Adw.__proto__=C.Event;C.ApM.__proto__=C.Event;
C.Z.__proto__=C.Ej;C.CF.__proto__=C.O;C.Dn.__proto__=C.O;C.Bi.__proto__=C.YX;C.HZ.
__proto__=C.Ej;C.ACr.__proto__=C.Aqk;C.ACs.__proto__=C.Aqk;C.ASJ.__proto__=C.Akh;
};C._ReInit=function(){var B;if((B=C.Awo._this))B._ReInit(),C.Awo._ReInit.call(B
);};C.Dz=function(D){var B;if((B=C.Awo._this)&&(B._cycle!=D))B._Done(C.Awo._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */