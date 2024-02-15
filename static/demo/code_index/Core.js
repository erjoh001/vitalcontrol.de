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
var B9=[0,0];var BC=[0,0,0,0];var EW="The view does not belong to this group";var
He=[1000,740];var I7="The dialog component is already presented";var IH="The dialog component is actually not presented";
var OM="No fader to perform the fade-in/out operation";var PQ="Trying to use the same fader twice";
var PR="Trying to fade-in/out a group which belongs to another owner";var CO="No view to restack";
var E4="View is not in this group";var Ln="Sibling view does not belong to the group";
var PT="No view to remove";var Ko="No view to add";var NY="View already in a group";
var PU="Recursive invalidate during active update cycle.";var Mw=[-8,-8,9,9];var
SL="No group to end the modal state.";var Uu="The group is not modal.";var Zs="No group to obtain the modal state.";
var Ww="The group serves already as the \'virtual keyboard\'.";var II="The group is already modal.";
var Uv="View is not in the same group or it is not embedded within the Outline "+
"Box";var Zt="The method SwitchToDialog() is not available in Core::VerticalList.";
var Wx="The method DismissDialog() is not available in Core::VerticalList.";var Zu=
"The method PresentDialog() is not available in Core::VerticalList.";var Uw="The method FadeGroup() is not available in Core::VerticalList.";
var Zv="The method RestackBehind() is not available in Core::VerticalList.";var Zw=
"The method RestackTop() is not available in Core::VerticalList.";var Ux="The method Restack() is not available in Core::VerticalList.";
var Wy="The method Remove() is not available in Core::VerticalList.";var Q4="The method AddBehind() is not available in Core::VerticalList.";
var Zx="The method Add() is not available in Core::VerticalList.";var ON="The Slide Touch Handler:";
var PV="is already connected with a view.";var Wz="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var WA=[0,0,170,120];var WC="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Zy="The method DismissDialog() is not available in Core::HorizontalList.";var
Zz="The method PresentDialog() is not available in Core::HorizontalList.";var WD=
"The method FadeGroup() is not available in Core::HorizontalList.";var WE="The method RestackBehind() is not available in Core::HorizontalList.";
var SM="The method RestackTop() is not available in Core::HorizontalList.";var ZA=
"The method Restack() is not available in Core::HorizontalList.";var ZB="The method Remove() is not available in Core::HorizontalList.";
var Acf="The method AddBehind() is not available in Core::HorizontalList.";var Uy=
"The method Add() is not available in Core::HorizontalList.";var ZC=[0,0,1,1];var
Ae2="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var ZD="Trying to cancel a task not belonging to this queue!";var WF="Trying to enqueue a task twice!";
var WG="12";var ZE="%";
C.Cd={Ag:null,AH:null,Ab:null,Em:null,T:0x103,JL:0,Pv:0x14,Ata:function(BF,Ahx){}
,Arh:function(E){if(this.JL===E)return;this.JL=E;if(!!this.Ab){var Aiv=this.Ag;var
GZ=0;while(!!Aiv&&(E>Aiv.JL)){Aiv=Aiv.Ag;GZ=GZ+1;}Aiv=this.AH;while(!!Aiv&&(E<Aiv.
JL)){Aiv=Aiv.AH;GZ=GZ-1;}if(!!GZ)this.Ab.Kj(this,GZ);}},AW:function(E){var B;var
GZ=E^this.Pv;if(!GZ)return;this.Pv=E;if(!!this.Em&&!((this.T&0x400)===0x400)){this.
Ab.T=this.Ab.T|0x5000;A.pe([B=this.Ab,B.Jw],this);this.Ab.Bd([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Em&&((this.T&0x400)===0x400)){this.Em.Nq.T=this.Em.
Nq.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jw],this);}},Ib:function(
){var BS=this.Ab;while(!!BS){var Ir=(C.Root.isPrototypeOf(BS)?BS:null);if(!!Ir)return Ir;
BS=BS.Ab;}return null;},J7:function(CU,aClip,aOffset,Ce,aBlend){},GetClipping:function(
){return this.GetExtent();},GL:function(CH){return null;},XR:function(C8,BD,N1,ZK
,Acw,Acv){return null;},AtW:function(C8){return C8;},At6:function(BF,Mz){return B9;
},AmP:function(aOffset,AsL){},GetExtent:function(){return BC;},Cs:function(Q$,UD
){var B;if(((this.T&0x200)===0x200))Q$=Q$&~0x400;var A04=(this.T&~UD)|Q$;var W4=
A04^this.T;this.T=A04;if(!!this.Ab&&!!(W4&0x14)){var BaV=((this.T&0x14)===0x14);
if(BaV&&!this.Ab.AR)this.Ab.A8(this);if(!BaV&&(this.Ab.AR===this))this.Ab.A8(this.
Ab.ABH(this,0x14));}if(!!this.Ab&&!!(W4&0x403))this.Ab.Bd(this.GetClipping());if(((
!!this.Em&&!!this.Ab)&&((A04&0x400)===0x400))&&((W4&0x1)===0x1)){this.T=this.T|0x800;
this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jw],this);}if(!!this.Ab&&((W4&0x400
)===0x400)){this.Em=null;this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jw],this);}if(((((W4&0x100000)===0x100000)&&((UD&0x100000)===0x100000)
)&&((this.T&0x10)===0x10))&&!((this.T&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
W4&0x100000)===0x100000)&&((Q$&0x100000)===0x100000))&&!((this.T&0x10)===0x10))&&(
!((this.T&0x200000)===0x200000)||((!((this.T&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
T&0x10)===0x10))))this.Cs(0x10,0x0);if(((((W4&0x200000)===0x200000)&&((UD&0x200000
)===0x200000))&&!((this.T&0x10)===0x10))&&((this.T&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((W4&0x200000)===0x200000)&&((Q$&0x200000)===0x200000))&&((this.
T&0x100010)===0x100010))&&!((this.T&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.T&0x10
)===0x10))||((((this.T&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G0.CW!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cd;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.AjL={Et:A.wf,Ej:A.wf
,Ata:function(BF,Ahx){var As=A._NewObject(C.ACT,0);this.Em=null;As.extent=this.getExtent(
);As.A_=BF;As.Nq=Ahx;As.Aii=this.Ej;As.Aij=this.Et;this.Em=As;},At6:function(BF,
Mz){var B;var EL=this.Pv;var As=(C.ACT.isPrototypeOf(B=this.Em)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var JW=[BF[
2]-BF[0],BF[3]-BF[1]];var BR=x2-x1;var BH=y2-y1;var tmp;if(!Mz){var Nt=[(B=As.A_
)[2]-B[0],B[3]-B[1]];x1=x1-As.A_[0];y1=y1-As.A_[1];if(Nt[0]!==JW[0]){var HL=((EL&
0x4)===0x4);var HM=((EL&0x8)===0x8);var Qd=((EL&0x1)===0x1);if(!HL&&(Qd||!HM))x1=((
x1*JW[0])/Nt[0])|0;if(!HM&&(Qd||!HL)){x2=x2-As.A_[0];x2=((x2*JW[0])/Nt[0])|0;x2=
x2-JW[0];}else x2=x2-As.A_[2];x1=x1+BF[0];x2=x2+BF[2];if(!Qd){if(HL&&!HM)x2=x1+BR;
else if(!HL&&HM)x1=x2-BR;else{x1=x1+((((x2-x1)-BR)/2)|0);x2=x1+BR;}}}else{x2=x2-
As.A_[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nt[1]!==JW[1]){var HN=((EL&0x10)===0x10);var
HK=((EL&0x20)===0x20);var Qe=((EL&0x2)===0x2);if(!HN&&(Qe||!HK))y1=((y1*JW[1])/Nt[
1])|0;if(!HK&&(Qe||!HN)){y2=y2-As.A_[1];y2=((y2*JW[1])/Nt[1])|0;y2=y2-JW[1];}else
y2=y2-As.A_[3];y1=y1+BF[1];y2=y2+BF[3];if(!Qe){if(HN&&!HK)y2=y1+BH;else if(!HN&&
HK)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=y1+BH;}}}else{y2=y2-As.A_[3];y1=y1+
BF[1];y2=y2+BF[3];}}else{switch(Mz){case 3:{x1=BF[0];x2=x1+BR;}break;case 4:{x2=
BF[2];x1=x2-BR;}break;case 1:{y1=BF[1];y2=y1+BH;}break;case 2:{y2=BF[3];y1=y2-BH;
}break;default:;}if((Mz===3)||(Mz===4)){var HN=((EL&0x10)===0x10);var HK=((EL&0x20
)===0x20);var Qe=((EL&0x2)===0x2);if(Qe){y1=BF[1];y2=BF[3];}else if(HN&&!HK){y1=
BF[1];y2=y1+BH;}else if(HK&&!HN){y2=BF[3];y1=y2-BH;}else{y1=BF[1]+((((BF[3]-BF[1
])-BH)/2)|0);y2=y1+BH;}}if((Mz===1)||(Mz===2)){var HL=((EL&0x4)===0x4);var HM=((
EL&0x8)===0x8);var Qd=((EL&0x1)===0x1);if(Qd){x1=BF[0];x2=BF[2];}else if(HL&&!HM
){x1=BF[0];x2=x1+BR;}else if(HM&&!HL){x2=BF[2];x1=x2-BR;}else{x1=BF[0]+((((BF[2]-
BF[0])-BR)/2)|0);x2=x1+BR;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BR=x2-x1;BH=y2-y1;if(
As.Aij[0]<As.Aii[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.Aij[1]<As.Aii[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.T&0x100)===0x100
)){this.Ej=[x1,y1];this.Et=[x2,y2];}else{this.DY([x1,y1]);this.DK([x2,y2]);this.
Em=As;}return[BR,BH];},AmP:function(aOffset,AsL){if(AsL){this.Ej=A.abf(this.Ej,aOffset
);this.Et=A.abf(this.Et,aOffset);}else{this.DY(A.abf(this.Ej,aOffset));this.DK(A.
abf(this.Et,aOffset));}},GetExtent:function(){if(!!this.Em&&this.Em.isEmpty)return BC;
return this.getExtent();},getExtent:function(){var x1=this.Ej[0];var y1=this.Ej[
1];var x2=this.Et[0];var y2=this.Et[1];var BR=x2-x1;var BH=y2-y1;var tmp;if(BR<0
)BR=-BR;if(BH<0)BH=-BH;if(BR>=BH){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BH>=BR){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DK:function(E){var B;if(A.aaX(E,this.
Et))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.
Em=null;this.Et=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jw],this);}},DY:function(
E){var B;if(A.aaX(E,this.Ej))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.GetClipping());this.Em=null;this.Ej=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jw],this);}},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.
AjL;},_className:"Core::LineView"};C.Y2={Ki:A.wf,Mr:A.wf,Et:A.wf,Ej:A.wf,Ata:function(
BF,Ahx){var As=A._NewObject(C.ACU,0);this.Em=null;As.extent=this.GetExtent();As.
A_=BF;As.Nq=Ahx;As.Aii=this.Ej;As.Aij=this.Et;As.AzM=this.Mr;As.AzN=this.Ki;this.
Em=As;},At6:function(BF,Mz){var B;var EL=this.Pv;var As=(C.ACU.isPrototypeOf(B=this.
Em)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var JW=[BF[2]-BF[0],BF[3]-BF[1]];var BR=x2-x1;var BH=y2-y1;if(!Mz){var
Nt=[(B=As.A_)[2]-B[0],B[3]-B[1]];x1=x1-As.A_[0];y1=y1-As.A_[1];if(Nt[0]!==JW[0]){
var HL=((EL&0x4)===0x4);var HM=((EL&0x8)===0x8);var Qd=((EL&0x1)===0x1);if(!HL&&(
Qd||!HM))x1=((x1*JW[0])/Nt[0])|0;if(!HM&&(Qd||!HL)){x2=x2-As.A_[0];x2=((x2*JW[0]
)/Nt[0])|0;x2=x2-JW[0];}else x2=x2-As.A_[2];x1=x1+BF[0];x2=x2+BF[2];if(!Qd){if(HL&&
!HM)x2=x1+BR;else if(!HL&&HM)x1=x2-BR;else{x1=x1+((((x2-x1)-BR)/2)|0);x2=x1+BR;}
}}else{x2=x2-As.A_[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nt[1]!==JW[1]){var HN=((EL&0x10
)===0x10);var HK=((EL&0x20)===0x20);var Qe=((EL&0x2)===0x2);if(!HN&&(Qe||!HK))y1=((
y1*JW[1])/Nt[1])|0;if(!HK&&(Qe||!HN)){y2=y2-As.A_[1];y2=((y2*JW[1])/Nt[1])|0;y2=
y2-JW[1];}else y2=y2-As.A_[3];y1=y1+BF[1];y2=y2+BF[3];if(!Qe){if(HN&&!HK)y2=y1+BH;
else if(!HN&&HK)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=y1+BH;}}}else{y2=y2-
As.A_[3];y1=y1+BF[1];y2=y2+BF[3];}}else{switch(Mz){case 3:{x1=BF[0];x2=x1+BR;}break;
case 4:{x2=BF[2];x1=x2-BR;}break;case 1:{y1=BF[1];y2=y1+BH;}break;case 2:{y2=BF[
3];y1=y2-BH;}break;default:;}if((Mz===3)||(Mz===4)){var HN=((EL&0x10)===0x10);var
HK=((EL&0x20)===0x20);var Qe=((EL&0x2)===0x2);if(Qe){y1=BF[1];y2=BF[3];}else if(
HN&&!HK){y1=BF[1];y2=y1+BH;}else if(HK&&!HN){y2=BF[3];y1=y2-BH;}else{y1=BF[1]+((((
BF[3]-BF[1])-BH)/2)|0);y2=y1+BH;}}if((Mz===1)||(Mz===2)){var HL=((EL&0x4)===0x4);
var HM=((EL&0x8)===0x8);var Qd=((EL&0x1)===0x1);if(Qd){x1=BF[0];x2=BF[2];}else if(
HL&&!HM){x1=BF[0];x2=x1+BR;}else if(HM&&!HL){x2=BF[2];x1=x2-BR;}else{x1=BF[0]+((((
BF[2]-BF[0])-BR)/2)|0);x2=x1+BR;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BR=(x2-x1)-1;BH=(
y2-y1)-1;var AhX=As.extent[0];var AhZ=As.extent[1];var Afr=(As.extent[2]-AhX)-1;
var Afq=(As.extent[3]-AhZ)-1;if(!Afr)Afr=1;if(!Afq)Afq=1;if(((this.T&0x100)===0x100
)){this.Ej=[x1+((((As.Aii[0]-AhX)*BR)/Afr)|0),y1+((((As.Aii[1]-AhZ)*BH)/Afq)|0)];
this.Et=[x1+((((As.Aij[0]-AhX)*BR)/Afr)|0),y1+((((As.Aij[1]-AhZ)*BH)/Afq)|0)];this.
Mr=[x1+((((As.AzM[0]-AhX)*BR)/Afr)|0),y1+((((As.AzM[1]-AhZ)*BH)/Afq)|0)];this.Ki=[
x1+((((As.AzN[0]-AhX)*BR)/Afr)|0),y1+((((As.AzN[1]-AhZ)*BH)/Afq)|0)];}else{this.
DY([x1+((((As.Aii[0]-AhX)*BR)/Afr)|0),y1+((((As.Aii[1]-AhZ)*BH)/Afq)|0)]);this.DK([
x1+((((As.Aij[0]-AhX)*BR)/Afr)|0),y1+((((As.Aij[1]-AhZ)*BH)/Afq)|0)]);this.Kd([x1+((((
As.AzM[0]-AhX)*BR)/Afr)|0),y1+((((As.AzM[1]-AhZ)*BH)/Afq)|0)]);this.Ke([x1+((((As.
AzN[0]-AhX)*BR)/Afr)|0),y1+((((As.AzN[1]-AhZ)*BH)/Afq)|0)]);this.Em=As;}return[BR+
1,BH+1];},AmP:function(aOffset,AsL){if(AsL){this.Ej=A.abf(this.Ej,aOffset);this.
Et=A.abf(this.Et,aOffset);this.Mr=A.abf(this.Mr,aOffset);this.Ki=A.abf(this.Ki,aOffset
);}else{this.DY(A.abf(this.Ej,aOffset));this.DK(A.abf(this.Et,aOffset));this.Kd(
A.abf(this.Mr,aOffset));this.Ke(A.abf(this.Ki,aOffset));}},GetExtent:function(){
if(!!this.Em&&this.Em.isEmpty)return BC;var x1=this.Ej[0];var y1=this.Ej[1];var x2=
this.Mr[0];var y2=this.Mr[1];if((((this.Ki[0]!==x1)||(this.Et[1]!==y1))||(this.Et[
0]!==x2))||(this.Ki[1]!==y2)){if(this.Et[0]<x1)x1=this.Et[0];if(this.Mr[0]<x1)x1=
this.Mr[0];if(this.Ki[0]<x1)x1=this.Ki[0];if(this.Et[1]<y1)y1=this.Et[1];if(this.
Mr[1]<y1)y1=this.Mr[1];if(this.Ki[1]<y1)y1=this.Ki[1];if(this.Ej[0]>x2)x2=this.Ej[
0];if(this.Et[0]>x2)x2=this.Et[0];if(this.Ki[0]>x2)x2=this.Ki[0];if(this.Ej[1]>y2
)y2=this.Ej[1];if(this.Et[1]>y2)y2=this.Et[1];if(this.Ki[1]>y2)y2=this.Ki[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},Ke:function(E){var B;if(A.aaX(E,this.Ki))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Em=null;this.Ki=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jw],this);}},Kd:function(E){var B;if(A.aaX(E,
this.Mr))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping()
);this.Em=null;this.Mr=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jw],this);}},DK:function(
E){var B;if(A.aaX(E,this.Et))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.GetClipping());this.Em=null;this.Et=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jw],this);}},DY:function(E){var B;if(A.aaX(E,this.Ej))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.Em=null;this.Ej=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jw],this);}},APG:function(KQ){var Hp=A.abi(4,
A.wf,null);var P=0;var H8=3;var A0A=false;var A0B=false;Hp.Set(0,this.Ej);Hp.Set(
1,this.Et);Hp.Set(2,this.Mr);Hp.Set(3,this.Ki);while(P<4){var Beq=Hp.Get(P)[0];var
AJ7=Hp.Get(P)[1];var Bzn=Hp.Get(H8)[0];var A2I=Hp.Get(H8)[1];if(((AJ7>KQ[1])!==(
A2I>KQ[1]))||((AJ7<KQ[1])!==(A2I<KQ[1]))){var Ef=((((Bzn-Beq)*(KQ[1]-AJ7))/(A2I-
AJ7))|0)+Beq;if(KQ[0]>Ef)A0A=!A0A;if(KQ[0]<Ef)A0B=!A0B;}H8=P;P=P+1;}return A0A||
A0B;},BgJ:function(){return((((this.Ej[0]===this.Ki[0])&&(this.Et[0]===this.Mr[0
]))&&(this.Ej[1]===this.Et[1]))&&(this.Mr[1]===this.Ki[1]))||((((this.Ej[0]===this.
Et[0])&&(this.Mr[0]===this.Ki[0]))&&(this.Ej[1]===this.Ki[1]))&&(this.Et[1]===this.
Mr[1]));},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.Y2;},
_className:"Core::QuadView"};C.Ek={M:A.wg,Ata:function(BF,Ahx){var As=A._NewObject(
C.Aqz,0);As.extent=this.M;As.A_=BF;As.Nq=Ahx;this.Em=As;},At6:function(BF,Mz){var
B;var EL=this.Pv;var As=this.Em;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var JW=[BF[2]-BF[0],BF[3]-BF[1]];var BR=x2-x1;var BH=
y2-y1;if(!Mz){var Nt=[(B=As.A_)[2]-B[0],B[3]-B[1]];x1=x1-As.A_[0];y1=y1-As.A_[1];
if(Nt[0]!==JW[0]){var HL=((EL&0x4)===0x4);var HM=((EL&0x8)===0x8);var Qd=((EL&0x1
)===0x1);if(!HL&&(Qd||!HM))x1=((x1*JW[0])/Nt[0])|0;if(!HM&&(Qd||!HL)){x2=x2-As.A_[
0];x2=((x2*JW[0])/Nt[0])|0;x2=x2-JW[0];}else x2=x2-As.A_[2];x1=x1+BF[0];x2=x2+BF[
2];if(!Qd){if(HL&&!HM)x2=x1+BR;else if(!HL&&HM)x1=x2-BR;else{x1=x1+((((x2-x1)-BR
)/2)|0);x2=x1+BR;}}}else{x2=x2-As.A_[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nt[1]!==JW[1
]){var HN=((EL&0x10)===0x10);var HK=((EL&0x20)===0x20);var Qe=((EL&0x2)===0x2);if(
!HN&&(Qe||!HK))y1=((y1*JW[1])/Nt[1])|0;if(!HK&&(Qe||!HN)){y2=y2-As.A_[1];y2=((y2
*JW[1])/Nt[1])|0;y2=y2-JW[1];}else y2=y2-As.A_[3];y1=y1+BF[1];y2=y2+BF[3];if(!Qe
){if(HN&&!HK)y2=y1+BH;else if(!HN&&HK)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=
y1+BH;}}}else{y2=y2-As.A_[3];y1=y1+BF[1];y2=y2+BF[3];}}else{switch(Mz){case 3:{x1=
BF[0];x2=x1+BR;}break;case 4:{x2=BF[2];x1=x2-BR;}break;case 1:{y1=BF[1];y2=y1+BH;
}break;case 2:{y2=BF[3];y1=y2-BH;}break;default:;}if((Mz===3)||(Mz===4)){var HN=((
EL&0x10)===0x10);var HK=((EL&0x20)===0x20);var Qe=((EL&0x2)===0x2);if(Qe){y1=BF[
1];y2=BF[3];}else if(HN&&!HK){y1=BF[1];y2=y1+BH;}else if(HK&&!HN){y2=BF[3];y1=y2-
BH;}else{y1=BF[1]+((((BF[3]-BF[1])-BH)/2)|0);y2=y1+BH;}}if((Mz===1)||(Mz===2)){var
HL=((EL&0x4)===0x4);var HM=((EL&0x8)===0x8);var Qd=((EL&0x1)===0x1);if(Qd){x1=BF[
0];x2=BF[2];}else if(HL&&!HM){x1=BF[0];x2=x1+BR;}else if(HM&&!HL){x2=BF[2];x1=x2-
BR;}else{x1=BF[0]+((((BF[2]-BF[0])-BR)/2)|0);x2=x1+BR;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.T&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Em=As;}return[x2-x1,y2-y1];},AmP:function(aOffset,AsL){if(AsL)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.GetClipping());this.Em=null;this.M=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400
))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;
A.pe([B=this.Ab,B.Jw],this);}},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.
__proto__=C.Ek;},_className:"Core::RectView"};C.O={B6:null,B7:null,AI8:null,Fq:null
,G0:null,W5:null,Ape:null,AR:null,GT:255,AyF:0,AyI:0,AyH:0,AyG:0,Init:function(aArg
){this.An();},J7:function(CU,aClip,aOffset,Ce,aBlend){var B;Ce=((Ce+1)*this.GT)>>
8;aBlend=aBlend&&((this.T&0x2)===0x2);if(!this.Fq||(CU.CW===this))this.BaL(CU,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ce,aBlend);else{var BZ=255|(255<<8)|(255<<16)|((
Ce&0xFF)<<24);this.Fq.Update();CU.A36(aClip,this.Fq,0,A.abh(this.M,aOffset),B9,BZ
,BZ,BZ,BZ,aBlend);}},GetClipping:function(){var B;var Aw=this.M;if(!!this.Fq)return Aw;
Aw=[].concat(Aw[0]-this.AyG,Aw.slice(1,4));Aw=A.abP(Aw,Aw[1]-this.AyI);Aw=A.abN(
Aw,Aw[2]+this.AyH);Aw=[].concat(Aw.slice(0,3),Aw[3]+this.AyF);if(((this.T&0x80000
)===0x80000)){var Apq=BC;var X;for(X=this.B6;!!X;X=X.Ag)if(((X.T&0x1)===0x1))Apq=
A.wC(Apq,X.GetClipping());Aw=A.wC(Aw,A.abh(Apq,this.M.slice(0,2)));}return Aw;},
XR:function(C8,BD,N1,ZK,Acw,Acv){var B;var X=this.B7;var AoH=null;var AE=BC;var JX=
null;var A0W=!!this.W5&&(!!this.W5.FD||!!this.W5.B6);if(((B=A.lb(C8,this.M))[0]>=
B[2])||(B[1]>=B[3]))return null;C8=A.abg(C8,this.M.slice(0,2));if(!!Acw){X=Acw;while(
!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.T&0x400)===0x400)&&!JX){JX=X.AH;while(
!!JX&&!((JX.T&0x200)===0x200))JX=JX.AH;if(!!JX)AE=A.lb(C8,JX.GetExtent());else AE=
BC;}if(JX===X){JX=null;AE=BC;}if((!!ZK&&!!(C.O.isPrototypeOf(X)?X:null))||((((((
X.T&0x8)===0x8)&&((X.T&0x10)===0x10))&&!((X.T&0x40000)===0x40000))&&!((X.T&0x20000
)===0x20000))&&(!((X.T&0x10000)===0x10000)||((this.G0.CW===X)&&!A0W)))){var extent=
X.GetExtent();var AIy=ZK;var Aor=null;if(AIy===X)AIy=null;if(((X.T&0x400)===0x400
)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Aor=X.XR(AE,BD,N1,AIy,Acw,
Acv);}else if(!(((B=A.lb(extent,C8))[0]>=B[2])||(B[1]>=B[3]))||(ZK===X))Aor=X.XR(
C8,BD,N1,AIy,Acw,Acv);X=X.AH;if(!!Aor){if(!AoH||((Aor.Aui<AoH.Aui)&&(Aor.Aui>=0)
))AoH=Aor;if(!Aor.Aui)X=null;}}else X=X.AH;Acw=null;}return AoH;},AtW:function(C8
){var B;var F;var X=this.B6;var Lt=BC;var AzG=true;var result=(C8=F=A.abg(C8,this.
M.slice(0,2)),F);while(!!X){if(((X.T&0x200)===0x200)){var Atm=(C.Z.isPrototypeOf(
X)?X:null);Lt=A.lb(C8,Atm.M);AzG=((Atm.T&0x1)===0x1);}if(((X.T&0x1)===0x1)){if(((
X.T&0x400)===0x400)){if(AzG){var AE=A.lb(X.GetClipping(),Lt);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AtW(AE));}}else{var AE=A.lb(X.GetClipping(),
C8);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AtW(AE));}}X=X.Ag;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Q$,UD){var B;
var S4=this.T;if(((!!this.Ab&&!!!this.Fq)&&((this.T&0x80001)===0x80001))&&((UD&0x80000
)===0x80000))this.Ab.Bd(this.GetClipping());C.Ek.Cs.call(this,Q$,UD);if((((!!this.
Ab&&!!!this.Fq)&&((this.T&0x1)===0x1))&&((Q$&0x80000)===0x80000))&&!((S4&0x80000
)===0x80000))this.Ab.Bd(this.GetClipping());var W4=this.T^S4;if(!!this.AR&&((W4&
0x40)===0x40)){if(((this.T&0x40)===0x40))this.AR.Cs(0x40,0x0);else this.AR.Cs(0x0
,0x40);}if(!!this.G0&&((W4&0x40)===0x40)){if(((this.T&0x40)===0x40)&&((this.G0.CW.
T&0x14)===0x14))this.G0.CW.Cs(0x40,0x0);else this.G0.CW.Cs(0x0,0x40);}if(((W4&0x10
)===0x10)){var X;for(X=this.B6;!!X;X=X.Ag)if((((X.T&0x300000)===0x300000)&&!((X.
T&0x80)===0x80))&&(!((X.T&0x10000)===0x10000)||(this.G0.CW===X)))X.Cs(Q$&0x10,UD&
0x10);}if(!!W4){this.T=this.T|0x8000;A.pe([this,this.AAj],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Alq=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJc=[
E[2]-E[0],E[3]-E[1]];var Apm=!A.aaX(Alq,AJc);if(Apm&&!!this.Fq){this.Fq.Aq6(AJc);
A.we(this,0);A.we(this.Fq,0);}C.Ek.H.call(this,E);if((Apm&&(Alq[0]>0))&&(Alq[1]>
0)){var A_=[].concat(B9,Alq);var X=this.B6;while(!!X){if((!X.Em&&(X.Pv!==0x14))&&
!((X.T&0x400)===0x400))X.Ata(A_,null);X=X.Ag;}}if(Apm){this.T=this.T|0x5000;A.pe([
this,this.AAj],this);}},A1X:function(CH){var BbE=(C.KeyEvent.isPrototypeOf(CH)?CH:
null);var DW=this.AI8;if(!BbE)return null;while(!!DW&&(!DW.Bv||!DW.GL(BbE)))DW=DW.
Ag;return DW;},By_:function(G){if(!!this.Fq){this.Fq.CW=this;var AE=A.abg(this.AtW(
A.abh(this.Fq.Qv,this.M.slice(0,2))),this.M.slice(0,2));this.Fq.AuC(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BaL(this.Fq,AE,B9,255,true);this.Fq.
CW=null;}},BaL:function(CU,aClip,aOffset,Ce,aBlend){var B;var X=this.B6;var Lt=BC;
var AzG=true;this.BfI(CU,aClip,aOffset,Ce,aBlend);while(!!X){if(((X.T&0x200)===0x200
)){var Atm=(C.Z.isPrototypeOf(X)?X:null);AzG=((Atm.T&0x1)===0x1);Lt=aClip;if(!((
Atm.T&0x80000)===0x80000))Lt=A.lb(Lt,A.abh(Atm.M,aOffset));}if(((X.T&0x1)===0x1)
){if(((X.T&0x400)===0x400)){if(AzG){var AE=A.lb(A.abh(X.GetClipping(),aOffset),Lt
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.J7(CU,AE,aOffset,Ce,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.J7(CU,AE,aOffset,Ce,aBlend);}}X=X.Ag;}this.BfL(CU,aClip,aOffset,Ce,aBlend);},Bds:
function(){var B;var A0t=((this.T&0x1000)===0x1000);var Ah5=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var ZU=false;var AcO=BC;var KS=BC;var ZV=B9;var As8=0;var As9=0;var
As7=0;var P8=0;var X=this.B7;var JX=null;var Ali=null;while(!!X){if(((X.T&0x800)===
0x800)){ZU=true;X.T=X.T&~0x800;}if(ZU&&((X.T&0x200)===0x200)){ZU=false;if(!!(C.Z.
isPrototypeOf(X)?X:null).Agl)X.T=X.T|0x1000;}X=X.AH;}ZU=false;X=this.B6;if(A0t){
this.T=this.T&~0x1000;A0t=!((Ah5[0]>=Ah5[2])||(Ah5[1]>=Ah5[3]));}this.T=this.T|0x2000;
while(!!X){if(!Ali&&(As7!==P8)){var Ac$=X;var AJz=0;var Az1=AcO[2]-AcO[0];var Ayf=
AcO[3]-AcO[1];var AIn=0;var Apy=B9;do if(((Ac$.T&0x200)===0x200))Ac$=null;else if(((
Ac$.T&0x401)===0x401)){Apy=[(B=Ac$.GetExtent())[2]-B[0],B[3]-B[1]];if((P8===3)||(
P8===4))Az1=Az1-Apy[0];if((P8===1)||(P8===2))Ayf=Ayf-Apy[1];if(!Ali||((Az1>=0)&&(
Ayf>=0))){Ali=Ac$;Ac$=Ac$.Ag;if((P8===3)||(P8===4)){Az1=Az1-As8;if(Apy[1]>AJz)AJz=
Apy[1];}if((P8===1)||(P8===2)){Ayf=Ayf-As9;if(Apy[0]>AIn)AIn=Apy[0];}}else Ac$=null;
}else Ac$=Ac$.Ag;while(!!Ac$);if(!Ali)Ali=JX;KS=AcO;switch(As7){case 9:case 11:KS=[
].concat(KS.slice(0,3),KS[1]+AJz);break;case 10:case 12:KS=A.abP(KS,KS[3]-AJz);break;
case 5:case 7:KS=A.abN(KS,KS[0]+AIn);break;case 6:case 8:KS=[].concat(KS[2]-AIn,
KS.slice(1,4));break;default:;}}if(((X.T&0x400)===0x400)){if(!!X.Em&&(X.Em.Nq!==
JX))X.Em=null;if((!X.Em&&ZU)&&((X.Pv!==0x14)||!!P8))X.Ata(KS,JX);}if(!!X.Em){if(
A0t&&!((X.T&0x400)===0x400))X.At6(Ah5,0);if(ZU&&((X.T&0x400)===0x400)){var CY=X.
At6(A.abh(KS,ZV),P8);if(((X.T&0x1)===0x1)){var Bo=B9;switch(P8){case 3:Bo=[CY[0]+
As8,Bo[1]];break;case 4:Bo=[-CY[0]-As8,Bo[1]];break;case 1:Bo=[Bo[0],CY[1]+As9];
break;case 2:Bo=[Bo[0],-CY[1]-As9];break;default:;}ZV=A.abf(ZV,Bo);}}}if(((X.T&0x200
)===0x200)){if(ZU)A.pe(JX.Ei,JX);ZU=((X.T&0x1000)===0x1000);JX=(C.Z.isPrototypeOf(
X)?X:null);if(ZU){X.T=X.T&~0x1000;As7=JX.Agl;P8=As7;AcO=A.abh(JX.M,JX.Bp);KS=AcO;
ZV=B9;As8=JX.Space+JX.ATa;As9=JX.Space;ZU=!((AcO[0]>=AcO[2])||(AcO[1]>=AcO[3]));
Ali=null;switch(As7){case 9:case 10:P8=3;break;case 11:case 12:P8=4;break;case 5:
case 6:P8=1;break;case 7:case 8:P8=2;break;default:;}}if(ZU)this.Bd(JX.M);}if(X===
Ali){switch(As7){case 9:case 11:ZV=[0,(ZV[1]+(KS[3]-KS[1]))+As9];break;case 10:case
12:ZV=[0,(ZV[1]-(KS[3]-KS[1]))-As9];break;case 5:case 7:ZV=[(ZV[0]+(KS[2]-KS[0])
)+As8,0];break;case 6:case 8:ZV=[(ZV[0]-(KS[2]-KS[0]))-As8,0];break;default:;}Ali=
null;}X=X.Ag;}if(ZU)A.pe(JX.Ei,JX);this.T=this.T&~0x2000;this.Bg([Ah5[2]-Ah5[0],
Ah5[3]-Ah5[1]]);},Jw:function(G){A.pe([this,this.AAj],this);},AAj:function(G){var
B;var Bzg=((this.T&0x1000)===0x1000);if(((this.T&0x4000)===0x4000)){this.T=this.
T&~0x4000;this.Bds();}if(((this.T&0x8000)===0x8000)||Bzg){this.T=this.T&~0x8000;
this.Ai(this.T);}},A8:function(E){var B;if(!!E&&(E.Ab!==this))throw new Error(EW
);if(!!E&&!((E.T&0x14)===0x14))E=null;if(!!E&&((E.T&0x10000)===0x10000))E=null;if(
E===this.AR)return;if(!!this.AR)this.AR.Cs(0x0,0x60);this.AR=E;if(!!E){if(((this.
T&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20,0x0);}},A_4:function(Ap){this.A8(Ap
);},AQV:function(){return!!this.Fq;},Aq0:function(E){var B;if(!!this.Fq===E)return;
if(!E){this.Fq.ADi=null;this.Fq.Aq6(B9);this.Fq=null;}if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Bd(this.GetClipping());if(E){this.Fq=A._NewObject(A.Graphics.Canvas
,0);this.Fq.Aq6([(B=this.M)[2]-B[0],B[3]-B[1]]);this.Fq.ADi=[this,this.By_];}A.we(
this,0);},A6R:function(){var B;return((this.T&0x100000)===0x100000);},Ar:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},Ds:function(E){var B;
if(E>255)E=255;if(E<0)E=0;if(E===this.GT)return;this.GT=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.GetClipping());},AYx:function(Ap){this.Ds(Ap);},Aj:function(
E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0,0x400);},Bjb:function(E){if(E)this.Cs(
0x2,0x0);else this.Cs(0x0,0x2);},Fe:function(){var B;return((this.T&0x1)===0x1);
},Y:function(E){if(E)this.Cs(0x1,0x0);else this.Cs(0x0,0x1);},ExtendClipping:function(
An5,An6,An7,An4){var B;var Ax8=this.M;var Re=Ax8;if(An5<0)An5=0;if(An5>255)An5=255;
if(An6<0)An6=0;if(An6>255)An6=255;if(An7<0)An7=0;if(An7>255)An7=255;if(An4<0)An4=
0;if(An4>255)An4=255;Re=[].concat(Re[0]-(Math.max(An5,this.AyG)&0xFF),Re.slice(1
,4));Re=A.abN(Re,Re[2]+(Math.max(An6,this.AyH)&0xFF));Re=A.abP(Re,Re[1]-(Math.max(
An7,this.AyI)&0xFF));Re=[].concat(Re.slice(0,3),Re[3]+(Math.max(An4,this.AyF)&0xFF
));if(An5!==this.AyG){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fq)&&!((this.
T&0x80000)===0x80000)){var Aw=Re;Aw=A.abN(Aw,Ax8[0]);this.Ab.Bd(Aw);}this.AyG=An5&
0xFF;}if(An6!==this.AyH){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fq)&&!((
this.T&0x80000)===0x80000)){var Aw=Re;Aw=[].concat(Ax8[2],Aw.slice(1,4));this.Ab.
Bd(Aw);}this.AyH=An6&0xFF;}if(An7!==this.AyI){if(((!!this.Ab&&((this.T&0x1)===0x1
))&&!!!this.Fq)&&!((this.T&0x80000)===0x80000)){var Aw=Re;Aw=[].concat(Aw.slice(
0,3),Ax8[1]);this.Ab.Bd(Aw);}this.AyI=An7&0xFF;}if(An4!==this.AyF){if(((!!this.Ab&&((
this.T&0x1)===0x1))&&!!!this.Fq)&&!((this.T&0x80000)===0x80000)){var Aw=Re;Aw=A.
abP(Aw,Ax8[3]);this.Ab.Bd(Aw);}this.AyF=An4&0xFF;}},BfL:function(CU,aClip,aOffset
,Ce,aBlend){},BfI:function(CU,aClip,aOffset,Ce,aBlend){},GetMaximalSize:function(
){return He;},GetMinimalSize:function(){return B9;},ATh:function(Ij,N0,WO,SS,ST,
Ahy,OS,Q_,Ls,Lq,Lr){var B;if(!this.G0){this.Akf(Ij,N0,WO,SS,ST,null,null,Ls,Lq,Lr
);return;}var Alp=this.G0;var Ju=Alp.Ag;if(((Ij.T&0x10000)===0x10000)&&(this.G0.
CW!==Ij))throw new Error(I7);var AcU=A._NewObject(C.AMs,0);var Rg=Alp.Rg;var Rp=
null;var L6=null;if(!!Ju){Rp=Ju.Rp;L6=Ju.L6;}if(!!Ju&&!!Alp.Apd)Rp=Alp.Apd;if(!!
Ju&&!!OS)L6=OS;if(!!Ahy)Rg=Ahy;if(!N0)N0=A._GetAutoObject(A.acl.ArU);if(!WO)WO=N0;
if(!ST)ST=SS;if(!SS)SS=ST;AcU.Rg=WO;AcU.L6=SS;AcU.Rp=ST;AcU.Apd=Q_;AcU.CW=Ij;AcU.
Ag=this.G0.Ag;this.G0.Ag=null;this.G0=AcU;if(this.AR===Ij)this.A8(null);Alp.CW.Cs(
0x0,0x10040);if(((this.T&0x40)===0x40)&&((Ij.T&0x4)===0x4))Ij.Cs(0x10040,0x0);else
Ij.Cs(0x10000,0x0);if(!!L6){this.NE(Ju.CW,L6.AdB(),null,null,Lr);this.NE(Alp.CW,
Rg.RP(),null,null,true);this.NE(AcU.CW,N0.RQ(),Ls,Lq,true);}else if(!!Rp){this.NE(
Ju.CW,Rp.AdC(),null,null,Lr);this.NE(Alp.CW,Rg.RP(),null,null,true);this.NE(AcU.
CW,N0.RQ(),Ls,Lq,true);}else if(!!Rg){this.NE(Alp.CW,Rg.RP(),null,null,Lr);this.
NE(AcU.CW,N0.RQ(),Ls,Lq,true);}else this.NE(AcU.CW,N0.RQ(),Ls,Lq,Lr);},ApZ:function(
Ij,Ahy,OS,Q_,Ls,Lq,Lr){var B;if(!this.G0)return;if(!Ij)return;var Ks=this.G0;var
Ju=this.G0.Ag;var Api=null;while((!!Ks&&(Ks.CW!==Ij))&&!!Ks.Ag){Api=Ks;Ks=Ju;Ju=
Ks.Ag;}if(!Ks||(Ks.CW!==Ij))throw new Error(IH);if(!Api){this.G0=Ju;Ks.Ag=null;}
else{Api.Ag=Ju;Ks.Ag=null;}Ks.CW.Cs(0x0,0x10040);if(((((this.T&0x10)===0x10)&&!!
Ju)&&!Api)&&((Ju.CW.T&0x200000)===0x200000))Ju.CW.Cs(0x10,0x0);if(((((this.T&0x40
)===0x40)&&!!Ju)&&!Api)&&((Ju.CW.T&0x4)===0x4))Ju.CW.Cs(0x40,0x0);var Rg=Ks.Rg;var
Rp=null;var L6=null;if(!!Ju)Rp=Ju.Rp;if(!!Ju&&!!Ks.Apd)Rp=Ks.Apd;if(!!Ju&&!!Q_)Rp=
Q_;if(!!Api&&!!Ju)L6=Ju.L6;if((!!Api&&!!Ju)&&!!OS)L6=OS;if(!!Ahy)Rg=Ahy;if(!!L6){
this.NE(Ju.CW,L6.AdB(),null,null,Lr);this.NE(Ks.CW,Rg.RP(),Ls,Lq,true);}else if(
!!Rp){this.NE(Ju.CW,Rp.AdC(),null,null,Lr);this.NE(Ks.CW,Rg.RP(),Ls,Lq,true);}else
this.NE(Ks.CW,Rg.RP(),Ls,Lq,Lr);},Akf:function(Ij,N0,WO,SS,ST,OS,Q_,Ls,Lq,Lr){var
B;if(!Ij)return;if(!!this.G0&&(this.G0.CW===Ij)){this.ATh(Ij,N0,WO,SS,ST,null,OS
,Q_,Ls,Lq,Lr);return;}if(((Ij.T&0x10000)===0x10000))throw new Error(I7);var Ks=A.
_NewObject(C.AMs,0);if(!!this.G0&&!this.G0.L6){if(!Q_)Q_=OS;if(!OS)OS=Q_;}var L6=
null;if(!!this.G0)L6=this.G0.L6;if(!!this.G0&&!!OS)L6=OS;if(!N0)N0=A._GetAutoObject(
A.acl.ArU);if(!WO)WO=N0;if(!ST)ST=SS;if(!SS)SS=ST;Ks.Rg=WO;Ks.L6=SS;Ks.Rp=ST;Ks.
Apd=Q_;if(this.AR===Ij)this.A8(null);if(!!this.G0&&((this.G0.CW.T&0x200000)===0x200000
))this.G0.CW.Cs(0x0,0x10);if(!!this.G0)this.G0.CW.Cs(0x0,0x40);if(((this.T&0x40)===
0x40)&&((Ij.T&0x4)===0x4))Ij.Cs(0x10040,0x0);else Ij.Cs(0x10000,0x0);Ks.CW=Ij;Ks.
Ag=this.G0;this.G0=Ks;if(!!L6){this.NE(this.G0.Ag.CW,L6.AdB(),null,null,Lr);this.
NE(Ij,N0.RQ(),Ls,Lq,true);}else this.NE(Ij,N0.RQ(),Ls,Lq,Lr);},A5c:function(Ae){
var B;return(B=Ae)&&((this.T&B)===B);},A5R:function(KQ){var tmp=this;while(!!tmp
){KQ=A.abe(KQ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KQ;},BgF:function(KQ){var tmp=
this;while(!!tmp){KQ=A.abf(KQ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KQ;},DispatchEvent:
function(CH){var B;var X=this.AR;var BS=(C.O.isPrototypeOf(X)?X:null);var Gp=null;
var A0W=!!this.W5&&(!!this.W5.FD||!!this.W5.B6);if(!!X&&((((X.T&0x10000)===0x10000
)||((X.T&0x40000)===0x40000))||((X.T&0x20000)===0x20000))){X=null;BS=null;}if(!!
this.G0&&!A0W)Gp=this.G0.CW.DispatchEvent(CH);if(!Gp&&!!BS)Gp=BS.DispatchEvent(CH
);else if(!Gp&&!!X)Gp=X.GL(CH);if(!Gp)Gp=this.GL(CH);if(!Gp)Gp=this.A1X(CH);return Gp;
},BroadcastEventAtPosition:function(CH,IJ,aFilter){var B;var X=this.B7;var Gp=null;
while(!!X&&!Gp){if((!aFilter||((B=aFilter)&&((X.T&B)===B)))&&A.wa(X.GetExtent(),
IJ)){var BS=(C.O.isPrototypeOf(X)?X:null);if(!!BS)Gp=BS.BroadcastEventAtPosition(
CH,A.abe(IJ,BS.M.slice(0,2)),aFilter);else Gp=X.GL(CH);}X=X.AH;}if(!Gp)Gp=this.GL(
CH);return Gp;},BroadcastEvent:function(CH,aFilter){var B;var X=this.B7;var Gp=null;
while(!!X&&!Gp){if(!aFilter||((B=aFilter)&&((X.T&B)===B))){var BS=(C.O.isPrototypeOf(
X)?X:null);if(!!BS)Gp=BS.BroadcastEvent(CH,aFilter);else Gp=X.GL(CH);}X=X.AH;}if(
!Gp)Gp=this.GL(CH);if(!Gp)Gp=this.A1X(CH);return Gp;},Bg:function(aSize){},Ai:function(
Ae){},BgV:function(){this.T=this.T|0x4000;A.pe([this,this.AAj],this);},An:function(
){this.T=this.T|0x8000;A.pe([this,this.AAj],this);},Bd:function(C8){var B;var BS=
this;while(!!BS&&!((C8[0]>=C8[2])||(C8[1]>=C8[3]))){var ZR=BS.Fq;if(!BS.Ab&&(BS!==
this)){BS.Bd(C8);return;}if(!!ZR){var Bw7=ZR.Qv;ZR.Qv=A.wC(ZR.Qv,C8);if(!A.aaY(Bw7
,ZR.Qv)){A.we(BS,0);A.we(ZR,0);}}if(!((BS.T&0x1)===0x1))return;var Aw=BS.M;C8=A.
abh(C8,Aw.slice(0,2));if(!!BS.Fq||!((BS.T&0x80000)===0x80000)){if(!!!BS.Fq){Aw=[
].concat(Aw[0]-BS.AyG,Aw.slice(1,4));Aw=A.abP(Aw,Aw[1]-BS.AyI);Aw=A.abN(Aw,Aw[2]+
BS.AyH);Aw=[].concat(Aw.slice(0,3),Aw[3]+BS.AyF);}C8=A.lb(C8,Aw);}BS=BS.Ab;}},RY:
function(Af,Gn,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var AfI=A.aaI(Af.
GetExtent());var X=Af;var AZF=null;var Bao=0;var IO=0x10000;var AJv;if(((aFilter&
0x10000)===0x10000))IO=0x0;var top=((Gn===4)||(Gn===1))||(Gn===6);var bottom=((Gn===
5)||(Gn===3))||(Gn===8);var left=((Gn===2)||(Gn===1))||(Gn===3);var right=((Gn===
7)||(Gn===6))||(Gn===8);if(((!top&&!bottom)&&!left)&&!right)return null;while(!!
X){X=X.AH;if(!X)X=this.B7;if(X===Af)X=null;if((!!X&&(!aFilter||((B=aFilter)&&((X.
T&B)===B))))&&(!IO||!((B=IO)&&((X.T&B)===B))))for(AJv=0;AJv<2;AJv++){var Aw=X.GetExtent(
);var s=[Aw[2]-Aw[0],Aw[3]-Aw[1]];if(!!!AJv){if((left&&(s[0]>s[1]))&&(Aw[2]<AfI[
0]))Aw=[].concat(Aw[2]-s[1],Aw.slice(1,4));if((right&&(s[0]>s[1]))&&(Aw[0]>AfI[0
]))Aw=A.abN(Aw,Aw[0]+s[1]);if((top&&(s[1]>s[0]))&&(Aw[3]<AfI[1]))Aw=A.abP(Aw,Aw[
3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Aw[1]>AfI[1]))Aw=[].concat(Aw.slice(0,3),Aw[
1]+s[0]);}var Bo=A.abe(A.aaI(Aw),AfI);var Rb=Bo;if(Rb[0]<0)Rb=[-Rb[0],Rb[1]];if(
Rb[1]<0)Rb=[Rb[0],-Rb[1]];if(((((!left||(Bo[0]<=-Rb[1]))&&(!right||(Bo[0]>=Rb[1]
)))&&(!top||(Bo[1]<=-Rb[0])))&&(!bottom||(Bo[1]>=Rb[0])))&&((Rb[0]>0)||(Rb[1]>0)
)){var Ri=Bo[0];var Rj=Bo[1];var I$=Math.sqrt((Ri*Ri)+(Rj*Rj));var AI7=0;if(!left&&
!right)AI7=I$/Rb[1];if(!top&&!bottom)AI7=I$/Rb[0];I$=(I$*AI7)*AI7;if((I$<Bao)||!
AZF){Bao=I$;AZF=X;}}}}return AZF;},Ap5:function(Af,aFilter){var B;if(!!Af&&(Af.Ab
!==this))return null;var X=this.B7;var IO=0x10000;if(((aFilter&0x10000)===0x10000
))IO=0x0;if(!!Af)X=Af.AH;while(!!X){if((!aFilter||((B=aFilter)&&((X.T&B)===B)))&&(
!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.AH;}return null;},Vp:function(Af,aFilter
){var B;if(!!Af&&(Af.Ab!==this))return null;var X=this.B6;var IO=0x10000;if(((aFilter&
0x10000)===0x10000))IO=0x0;if(!!Af)X=Af.Ag;while(!!X){if((!aFilter||((B=aFilter)&&((
X.T&B)===B)))&&(!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.Ag;}return null;},ABH:
function(Af,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var Aln=Af.Ag;var AlB=
Af.AH;var IO=0x10000;if(((aFilter&0x10000)===0x10000))IO=0x0;while(!!Aln||!!AlB){
if((!!Aln&&(!aFilter||((B=aFilter)&&((Aln.T&B)===B))))&&(!IO||!((B=IO)&&((Aln.T&
B)===B))))return Aln;if((!!AlB&&(!aFilter||((B=aFilter)&&((AlB.T&B)===B))))&&(!IO||
!((B=IO)&&((AlB.T&B)===B))))return AlB;if(!!Aln)Aln=Aln.Ag;if(!!AlB)AlB=AlB.AH;}
return null;},Da:function(aFilter){var B;var X=this.B6;var AE=BC;var IO=0x10000;
if(((aFilter&0x10000)===0x10000))IO=0x0;while(!!X){if((!((X.T&0x400)===0x400)&&(
!aFilter||((B=aFilter)&&((X.T&B)===B))))&&(!IO||!((B=IO)&&((X.T&B)===B))))AE=A.wC(
AE,X.GetExtent());X=X.Ag;}return AE;},NE:function(Kq,FC,Ls,Lq,Lr){var B;if(!Kq)return;
if(!FC)throw new Error(OM);if((!!FC.O||!!FC.Ab)||!!FC.O4)throw new Error(PQ);if(
!!Kq.Ab&&(Kq.Ab!==this))throw new Error(PR);if(!this.W5)this.W5=A._NewObject(C.ATm
,0);FC.Ab=this;FC.O=Kq;FC.AJf=Lq;FC.A1j=Ls;if(!!Kq.Ape)Kq.Ape.O4.BlM(Kq.Ape);Kq.
Ape=FC;Kq.T=Kq.T|0x20000;if((Lr&&!!this.W5.B7)&&!this.W5.B7.APD())(A.acl.ABC.isPrototypeOf(
B=this.W5.B7)?B:null).A2Z(FC);else{var O4=A._NewObject(A.acl.ABC,0);O4.A2Z(FC);this.
W5.A9b(O4,false);}},Ag5:function(Af,JQ){var B;if(!Af)throw new Error(CO);if(Af.Ab
!==this)throw new Error(E4);if(!!JQ&&(JQ.Ab!==this))throw new Error(Ln);if(Af.Ag===
JQ)return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.Em)Af.AH.T=Af.AH.T|0x800;Af.
T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jw],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.
pe([this,this.Jw],this);}if(!!Af.Ag)Af.Ag.AH=Af.AH;else this.B7=Af.AH;if(!!Af.AH
)Af.AH.Ag=Af.Ag;else this.B6=Af.Ag;var Go=null;var Il=this.B7;var LI=Af.JL;if(!!
JQ){Go=JQ;Il=JQ.AH;}if(!!Go&&(LI>Go.JL))LI=Go.JL;if(!!Il&&(LI<Il.JL))LI=Il.JL;if(
LI!==Af.JL){Af.Ab=null;Af.Arh(LI);Af.Ab=this;}if(!JQ){if(!!this.B7)this.B7.Ag=Af;
Af.AH=this.B7;Af.Ag=null;this.B7=Af;}else{Af.Ag=JQ;Af.AH=JQ.AH;JQ.AH=Af;if(!!Af.
AH)Af.AH.Ag=Af;}if(this.B6===JQ)this.B6=Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping(
));},Y5:function(Af){var B;if(!Af)throw new Error(CO);if(Af.Ab!==this)throw new Error(
E4);if(!Af.Ag)return;var Il=this.B7;var LI=Af.JL;while(!!Il&&(Il.JL>LI))Il=Il.AH;
if(((Il===Af)||!Il)||(Il.Ag===Af))return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&
!!Af.Em)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jw],this);}if(((Af.T&0x200)===0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.
T|0x4000;A.pe([this,this.Jw],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;else this.B6=Af.Ag;
Af.Ag.AH=Af.AH;Af.AH=Il;Af.Ag=Il.Ag;Il.Ag=Af;if(!!Af.Ag)Af.Ag.AH=Af;else this.B7=
Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());},Kj:function(Af,PZ){var B;if(
!Af)throw new Error(CO);if(Af.Ab!==this)throw new Error(E4);var Il=Af;var Go=Af;
var LI=Af.JL;while(((PZ>0)&&!!Il.Ag)&&(Il.Ag.JL<=LI)){Il=Il.Ag;PZ=PZ-1;}while(((
PZ<0)&&!!Go.AH)&&(Go.AH.JL>=LI)){Go=Go.AH;PZ=PZ+1;}if((Il===Af)&&(Go===Af))return;
if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.Em)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;
this.T=this.T|0x4000;A.pe([this,this.Jw],this);}if(((Af.T&0x200)===0x200)){if(!!
Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jw],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B6===Af)this.
B6=Af.Ag;if(this.B7===Af)this.B7=Af.AH;if(Il!==Af){Af.Ag=Il.Ag;Af.AH=Il;Il.Ag=Af;
if(!!Af.Ag)Af.Ag.AH=Af;}if(Go!==Af){Af.Ag=Go;Af.AH=Go.AH;Go.AH=Af;if(!!Af.AH)Af.
AH.Ag=Af;}if(!Af.Ag)this.B7=Af;if(!Af.AH)this.B6=Af;if(((Af.T&0x1)===0x1))this.Bd(
Af.GetClipping());},HH:function(Af){var B;if(!Af)throw new Error(PT);if(Af.Ab!==
this)throw new Error(E4);if((((Af.T&0x401)===0x401)&&!!Af.AH)&&!!Af.Em){Af.AH.T=
Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jw],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jw
],this);}Af.Em=null;if(this.AR===Af)this.A8(this.ABH(Af,0x14));if(!!Af.AH)Af.AH.
Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B6===Af)this.B6=Af.Ag;if(this.B7===Af
)this.B7=Af.AH;Af.Ab=null;Af.Ag=null;Af.AH=null;if((!((Af.T&0x10)===0x10)&&((Af.
T&0x100000)===0x100000))&&!((this.T&0x80)===0x80))Af.Cs(0x10,0x0);if(((Af.T&0x1)===
0x1))this.Bd(Af.GetClipping());},AKK:function(Af,JQ){var B;if(!Af)throw new Error(
Ko);if(!!Af.Ab)throw new Error(NY);if(!!JQ&&(JQ.Ab!==this))throw new Error(Ln);var
Go=null;var Il=this.B7;var LI=Af.JL;if(!!JQ){Go=JQ;Il=JQ.AH;}if(!!Go&&(LI>Go.JL)
)LI=Go.JL;if(!!Il&&(LI<Il.JL))LI=Il.JL;if(LI!==Af.JL){Af.Ab=null;Af.Arh(LI);Af.Ab=
this;}if(!JQ){if(!!this.B7)this.B7.Ag=Af;Af.AH=this.B7;this.B7=Af;}else{Af.Ag=JQ;
Af.AH=JQ.AH;JQ.AH=Af;if(!!Af.AH)Af.AH.Ag=Af;}Af.Ab=this;if(this.B6===JQ)this.B6=
Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());if(((Af.T&0x80)===0x80)&&(A.aam(
).ANn()===Af))Af.Cs(0x10,0x0);else if(!((this.T&0x10)===0x10)&&((Af.T&0x200010)===
0x200010))Af.Cs(0x0,0x10);else if((((this.T&0x10)===0x10)&&!((Af.T&0x10)===0x10)
)&&((Af.T&0x100000)===0x100000))Af.Cs(0x10,0x0);if(((!this.AR&&((Af.T&0x4)===0x4
))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.A8(Af);if(((Af.T&0x401
)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jw],this);}if(((
Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jw],this
);}},J:function(Af,PZ){var B;if(!Af)throw new Error(Ko);if(!!Af.Ab)throw new Error(
NY);var Go=null;var LI=Af.JL;if(((PZ<0)&&!!this.B7)&&(this.B7.JL>=LI)){Go=this.B7;
PZ=PZ+1;}while((((PZ<0)&&!!Go)&&!!Go.AH)&&(Go.AH.JL>=LI)){Go=Go.AH;PZ=PZ+1;}if((
!Go&&!!this.B7)&&(this.B7.JL>LI))Go=this.B7;while((!!Go&&!!Go.AH)&&(Go.AH.JL>LI)
)Go=Go.AH;if(!Go){Af.Ab=this;Af.AH=this.B7;if(!!this.B7)this.B7.Ag=Af;if(!this.B6
)this.B6=Af;this.B7=Af;}else{Af.Ab=this;Af.AH=Go.AH;Af.Ag=Go;Go.AH=Af;if(!!Af.AH
)Af.AH.Ag=Af;else this.B6=Af;}if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());if(((
Af.T&0x80)===0x80)&&(A.aam().ANn()===Af))Af.Cs(0x10,0x0);else if(!((this.T&0x10)===
0x10)&&((Af.T&0x200010)===0x200010))Af.Cs(0x0,0x10);else if((((this.T&0x10)===0x10
)&&!((Af.T&0x10)===0x10))&&((Af.T&0x100000)===0x100000))Af.Cs(0x10,0x0);if(((!this.
AR&&((Af.T&0x4)===0x4))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.
A8(Af);if(((Af.T&0x401)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this
,this.Jw],this);}if(((Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;
A.pe([this,this.Jw],this);}},A6T:function(){return this.AR;},Avy:function(){return this.
GT;},_Init:function(aArg){C.Ek._Init.call(this,aArg);this.__proto__=C.O;this.T=0x10001F;
this.Init(aArg);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.B6)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AI8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fq)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.G0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
W5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ape)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AR)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Group"
};C.Root={Rm:null,Jt:null,Fh:A.abi(10,null,null),AsV:null,AhP:null,AAl:0,H6:0,L2:
A.abi(10,0,null),AIt:A.abi(10,A.wg,null),W3:A.abi(10,0,null),Afp:A.abi(10,A.wf,null
),As0:A.abi(10,0,null),AhO:A.abi(10,A.wf,null),W2:A.abi(10,A.wf,null),Rf:A.abi(10
,A.wf,null),AcF:A.abi(10,A.wf,null),EE:0,AIS:0,AIR:0,Oc:A.abi(4,0,null),J2:A.abi(
4,A.wg,null),JZ:0,Ay5:0,Atc:0,AyS:true,Init:function(aArg){if(!!!this.I){var obj=
this;A.abD(obj);}},Ib:function(){return this;},J7:function(CU,aClip,aOffset,Ce,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(!fullScreenUpdate)CU.AuC(aClip
,A.abh(A.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);C.O.J7.call(this,CU,aClip,aOffset,Ce,aBlend);},Cs:function(Q$,
UD){var B;C.O.Cs.call(this,Q$,UD);if(!this.Ab&&(((Q$&0x1)===0x1)||((UD&0x1)===0x1
)))this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ab&&(((Q$&0x2)===0x2)||((
UD&0x2)===0x2)))this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},A8:function(E){if((
E!==null)||!E)C.O.A8.call(this,E);},Aq0:function(E){var B;var Bw5=this.Fq;C.O.Aq0.
call(this,E);if(((Bw5!==this.Fq)&&!this.Ab)&&((this.T&0x1)===0x1))this.Bd([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},Ds:function(E){var B;var BN=this.GT;C.O.Ds.call(
this,E);if(((BN!==this.GT)&&!this.Ab)&&((this.T&0x1)===0x1))this.Bd([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CH){if(!!CH){CH.Avb=!!this.H6;if(
!!this.H6)CH.Bt=this.H6;}var Gp=null;if(!!this.Jt){Gp=this.Jt.CW.DispatchEvent(CH
);if(!Gp)Gp=this.GL(CH);if(!Gp)Gp=this.A1X(CH);this.H6=0;return Gp;}Gp=C.O.DispatchEvent.
call(this,CH);this.H6=0;return Gp;},BroadcastEvent:function(CH,aFilter){if(!!CH){
CH.Avb=!!this.H6;if(!!this.H6)CH.Bt=this.H6;}var Gp=C.O.BroadcastEvent.call(this
,CH,aFilter);this.H6=0;return Gp;},Bd:function(C8){var B;if(this.AAl>0)throw new
Error(PU);if(!!this.Fq&&!this.Ab){if(((B=this.Fq.Qv)[0]>=B[2])||(B[1]>=B[3])){A.
we(this,0);A.we(this.Fq,0);}this.Fq.Qv=A.wC(this.Fq.Qv,C8);}var fullScreenUpdate=
false;fullScreenUpdate=A.m7;if(fullScreenUpdate)C8=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ab){C.O.Bd.call(this,C8);return;}C8=A.lb(A.abh(C8,this.M.slice(0
,2)),this.M);if((C8[0]>=C8[2])||(C8[1]>=C8[3]))return;var P;for(P=0;P<this.JZ;P=
P+1)if(!(((B=A.lb(this.J2.Get(P),C8))[0]>=B[2])||(B[1]>=B[3]))){this.J2.Set(P,A.
wC(this.J2.Get(P),C8));this.Oc.Set(P,A.aaH(this.J2.Get(P)));return;}if(this.JZ<3
){this.J2.Set(this.JZ,C8);this.Oc.Set(this.JZ,A.aaH(C8));this.JZ=this.JZ+1;return;
}var H8;var Rl;var Ay4=0;var Ay7=0;var Ban=2147483647;this.J2.Set(this.JZ,C8);this.
Oc.Set(this.JZ,A.aaH(C8));for(H8=0;H8<=this.JZ;H8=H8+1)for(Rl=H8+1;Rl<=this.JZ;Rl=
Rl+1){var AJX=A.aaH(A.wC(this.J2.Get(H8),this.J2.Get(Rl)));var Bc6=((AJX<<8)/(this.
Oc.Get(H8)+this.Oc.Get(Rl)))|0;if(Bc6<Ban){Ban=Bc6;Ay4=H8;Ay7=Rl;}}this.J2.Set(Ay4
,A.wC(this.J2.Get(Ay4),this.J2.Get(Ay7)));this.Oc.Set(Ay4,A.aaH(this.J2.Get(Ay4)
));if(Ay7!==this.JZ){this.J2.Set(Ay7,this.J2.Get(this.JZ));this.Oc.Set(Ay7,this.
Oc.Get(this.JZ));}},BvL:function(){var Lz=A._NewObject(C.Ap1,0);Lz.Avb=!!this.H6;
if(!!this.H6)Lz.Bt=this.H6;return Lz;},Aop:function(){var Lz=A._NewObject(C.AdE,
0);Lz.Avb=!!this.H6;if(!!this.H6)Lz.Bt=this.H6;return Lz;},AsZ:function(){var Lz=
A._NewObject(C.Aue,0);Lz.Avb=!!this.H6;if(!!this.H6)Lz.Bt=this.H6;return Lz;},BvQ:
function(G){var P;var AoH=false;for(P=0;P<10;P=P+1)if(!!this.Fh.Get(P)){var pos=
this.Rf.Get(P);var BS=this.Fh.Get(P).Ab;while(!!BS&&(BS!==this)){pos=A.abe(pos,BS.
M.slice(0,2));BS=BS.Ab;}if(!BS&&(this.Fh.Get(P)!==this)){var tmp=this.Fh.Get(P);
this.EE=P;this.Fh.Set(P,null);tmp.GL(this.Aop().InitializeUp(P,this.AhO.Get(P),this.
Afp.Get(P),this.W3.Get(P),this.L2.Get(P)+1,this.W2.Get(P),false,this.Rf.Get(P),this.
AcF.Get(P)));this.BroadcastEvent(this.AsZ().InitializeUp(P,this.L2.Get(P)+1,false
,tmp,this.Rf.Get(P)),0x18);}else{this.W3.Set(P,(this.AhP.Bt-this.As0.Get(P))|0);
if(this.W3.Get(P)<10)this.W3.Set(P,10);this.EE=P;this.Fh.Get(P).GL(this.Aop().InitializeHold(
P,pos,this.Afp.Get(P),this.W3.Get(P),this.L2.Get(P)+1,this.W2.Get(P),this.Rf.Get(
P),this.AcF.Get(P)));AoH=true;}}if(!AoH)this.AhP.Ar(false);},GetFPS:function(){var
ticksCount=0;var Ba0=0;ticksCount=((new Date).getTime()-A.v$)|0;if(!!this.AIS&&(
ticksCount>this.AIS))Ba0=((this.AIR*1000)/((ticksCount-this.AIS)|0))|0;this.AIR=
0;this.AIS=ticksCount;return Ba0;},Update:function(){var B;if(!this.AsV)this.AsV=
A._NewObject(A.Graphics.Canvas,0);this.AsV.Aq6([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
AsV.Update();return this.UpdateGE20(this.AsV);},UpdateGE20:function(CU){if(!this.
BeginUpdate())return BC;var AfS=this.UpdateCanvas(CU,B9);this.EndUpdate();return AfS;
},EndUpdate:function(){if(this.JZ>0){this.AIR=this.AIR+1;this.JZ=0;}},UpdateCanvas:
function(CU,aOffset){var B;var AfS=BC;var Bvt=[].concat(aOffset,A.abf(CU.FrameSize
,aOffset));var P;var H8=this.JZ;this.AAl=this.AAl+1;CU.CW=this;for(P=0;(P<H8)&&(
P<4);P=P+1)if(this.Oc.Get(P)>0){this.J7(CU,A.abg(this.J2.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);AfS=A.wC(AfS,A.lb(Bvt,this.J2.Get(P)));}else H8=H8+1;CU.
CW=null;this.AAl=this.AAl-1;if(!((AfS[0]>=AfS[2])||(AfS[1]>=AfS[3])))return A.abg(
AfS,aOffset);else return AfS;},GetUpdateRegion:function(AHR){var P;var H8=this.JZ;
if(AHR<0)return BC;for(P=0;(P<H8)&&(P<4);P=P+1)if(!this.Oc.Get(P)){H8=H8+1;AHR=AHR+
1;}else if(P===AHR)return this.J2.Get(P);return BC;},BeginUpdate:function(){var B;
var P;if(!!this.JZ&&!A.aaY(this.J2.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
Bd7=A.abi(3,A.wg,null);var Bd6=this.JZ;for(P=0;P<Bd6;P++)Bd7.Set(P,this.J2.Get(P
));for(P=0;P<Bd6;P++){var Bdn=A.abh(Bd7.Get(P),this.M.slice(0,2));var Bdo=this.AtW(
Bdn);if(!A.aaY(Bdn,Bdo))this.Bd(A.abg(Bdo,this.M.slice(0,2)));}}var H8;var Rl;for(
H8=0;H8<(this.JZ-1);H8++)if(this.Oc.Get(H8)>0)for(Rl=H8+1;Rl<this.JZ;Rl++)if(this.
Oc.Get(Rl)>0){var AJX=A.aaH(A.wC(this.J2.Get(H8),this.J2.Get(Rl)));if(((AJX-this.
Oc.Get(H8))-this.Oc.Get(Rl))<0){this.J2.Set(H8,A.wC(this.J2.Get(H8),this.J2.Get(
Rl)));this.Oc.Set(H8,AJX);this.Oc.Set(Rl,0);}}for(P=this.JZ-1;P>=0;P--)if(!this.
Oc.Get(P))this.JZ=this.JZ-1;return this.JZ;},DoesNeedUpdate:function(){if(this.JZ>
0)return true;return false;},Initialize:function(aSize){this.H([].concat(B9,aSize
));if(this.AyS)this.T=this.T|0x60;else this.T=this.T|0x20;this.Bd(this.M);return this;
},SetRootFocus:function(AY8){if(AY8===this.AyS)return false;this.AyS=AY8;if(!AY8
){if(!!this.Jt)this.Jt.CW.Cs(0x0,0x40);else this.Cs(0x0,0x40);}else if(!!this.Jt
)this.Jt.CW.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;},SetUserInputTimestamp:
function(P0){this.H6=P0;},DriveKeyboardHitting:function(Kp,AxV,SQ){var B;var A1Y=
!!this.Rm;if(!!this.Rm&&((!SQ||(this.Ay5!==Kp))||(this.Atc!==AxV))){var Lz=null;
var X=(C.Cd.isPrototypeOf(B=this.Rm)?B:null);var DW=(C.BJ.isPrototypeOf(B=this.Rm
)?B:null);if(!!this.Ay5)Lz=A._NewObject(C.KeyEvent,0).Initialize(this.Ay5,false);
if(this.Atc!==0x00)Lz=A._NewObject(C.KeyEvent,0).Initialize2(this.Atc,false);if(
!!DW)DW.GL(Lz);else if(!!X)X.GL(Lz);this.Ay5=0;this.Atc=0x00;this.Rm=null;}if(!!
this.Rm){var Lz=null;var X=(C.Cd.isPrototypeOf(B=this.Rm)?B:null);var DW=(C.BJ.isPrototypeOf(
B=this.Rm)?B:null);if(!!Kp)Lz=A._NewObject(C.KeyEvent,0).Initialize(Kp,true);if(
this.Atc!==0x00)Lz=A._NewObject(C.KeyEvent,0).Initialize2(AxV,true);if(!!DW)DW.GL(
Lz);else if(!!X)X.GL(Lz);}if(!this.Rm&&SQ){if(!!Kp)this.Rm=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kp,true));if(AxV!==0x00)this.Rm=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(AxV,true));if(!(C.BJ.isPrototypeOf(B=this.
Rm)?B:null)&&!(C.Cd.isPrototypeOf(B=this.Rm)?B:null))this.Rm=null;this.Ay5=Kp;this.
Atc=AxV;A1Y=A1Y||!!this.Rm;}this.H6=0;return A1Y;},DriveCursorMovement:function(
E6){return this.DriveMultiTouchMovement(this.EE,E6);},DriveMultiTouchMovement:function(
BD,E6){if((BD<0)||(BD>9)){this.H6=0;return false;}var Fj=A.abe(E6,this.Rf.Get(BD
));this.Rf.Set(BD,E6);if(!this.Fh.Get(BD)||A.aaX(Fj,B9)){this.H6=0;return false;
}var pos=E6;var BS=this.Fh.Get(BD).Ab;while(!!BS&&(BS!==this)){pos=A.abe(pos,BS.
M.slice(0,2));BS=BS.Ab;}if(!BS&&(this.Fh.Get(BD)!==this)){var tmp=this.Fh.Get(BD
);this.EE=BD;this.Fh.Set(BD,null);tmp.GL(this.Aop().InitializeUp(BD,this.AhO.Get(
BD),this.Afp.Get(BD),this.W3.Get(BD),this.L2.Get(BD)+1,this.W2.Get(BD),false,this.
Rf.Get(BD),this.AcF.Get(BD)));this.BroadcastEvent(this.AsZ().InitializeUp(BD,this.
L2.Get(BD)+1,false,tmp,E6),0x18);}else{this.AhO.Set(BD,pos);this.EE=BD;this.Fh.Get(
BD).GL(this.BvL().Initialize(BD,pos,this.Afp.Get(BD),Fj,this.W3.Get(BD),this.L2.
Get(BD)+1,this.W2.Get(BD),E6,this.AcF.Get(BD)));}this.H6=0;return true;},DriveCursorHitting:
function(SQ,BD,E6){return this.DriveMultiTouchHitting(SQ,BD,E6);},DriveMultiTouchHitting:
function(SQ,BD,E6){if((BD<0)||(BD>9)){this.H6=0;return false;}var ticksCount=this.
H6;if(!ticksCount)ticksCount=((new Date).getTime()-A.v$)|0;var ByA=this.H6;this.
DriveMultiTouchMovement(BD,E6);E6=this.Rf.Get(BD);this.H6=ByA;if(SQ)this.AcF.Set(
BD,E6);if(SQ&&!this.Fh.Get(BD)){var Js;var pos=E6;if(A.wa(this.AIt.Get(BD),E6)&&((
ticksCount-this.As0.Get(BD))<=250))this.L2.Set(BD,this.L2.Get(BD)+1);else this.L2.
Set(BD,0);this.AIt.Set(BD,A.abh(Mw,E6));this.As0.Set(BD,ticksCount);if(!!this.Jt
)Js=this.XR(A.abh(Mw,E6),BD,this.L2.Get(BD)+1,this.Jt.CW,null,0x0);else Js=this.
XR(A.abh(Mw,E6),BD,this.L2.Get(BD)+1,null,null,0x0);if(!!Js){this.BroadcastEvent(
this.AsZ().InitializeDown(BD,this.L2.Get(BD)+1,false,Js.Cd,E6),0x18);this.Fh.Set(
BD,Js.Cd);this.W2.Set(BD,Js.Dx);}else{this.Fh.Set(BD,null);this.W2.Set(BD,B9);this.
H6=0;return false;}var BS=Js.Cd.Ab;while(!!BS&&(BS!==this)){pos=A.abe(pos,BS.M.slice(
0,2));BS=BS.Ab;}this.Afp.Set(BD,pos);this.AhO.Set(BD,pos);this.W3.Set(BD,0);this.
AhP.Ar(true);this.EE=BD;this.Fh.Get(BD).GL(this.Aop().InitializeDown(BD,pos,this.
L2.Get(BD)+1,this.W2.Get(BD),false,E6));this.H6=0;return true;}if(!SQ&&!!this.Fh.
Get(BD)){var pos=E6;var BS=this.Fh.Get(BD).Ab;while(!!BS&&(BS!==this)){pos=A.abe(
pos,BS.M.slice(0,2));BS=BS.Ab;}if(!BS)pos=this.AhO.Get(BD);this.EE=BD;var tmp=this.
Fh.Get(BD);this.Fh.Set(BD,null);tmp.GL(this.Aop().InitializeUp(BD,pos,this.Afp.Get(
BD),this.W3.Get(BD),this.L2.Get(BD)+1,this.W2.Get(BD),false,E6,this.AcF.Get(BD))
);this.BroadcastEvent(this.AsZ().InitializeUp(BD,this.L2.Get(BD)+1,false,tmp,E6)
,0x18);this.H6=0;return true;}this.H6=0;return false;},ASJ:function(ZM,A$M,Acw,Acv
){if(ZM===this)ZM=null;if(!!!ZM&&!!this.Jt)ZM=this.Jt.CW;if(!this.Fh.Get(this.EE
))return;var Js;Js=this.XR(A.abh(Mw,this.Rf.Get(this.EE)),this.EE,1,ZM,Acw,Acv);
if(!!Js&&(this.Fh.Get(this.EE)!==Js.Cd))this.AMk(Js.Cd,Js.Dx);if(!Js&&(this.Fh.Get(
this.EE)!==A$M))this.AMk(A$M,B9);},AMk:function(ZM,WQ){if(!this.Fh.Get(this.EE)||(
this.Fh.Get(this.EE)===ZM))return;var tmp=this.Fh.Get(this.EE);this.Fh.Set(this.
EE,null);tmp.GL(this.Aop().InitializeUp(this.EE,this.AhO.Get(this.EE),this.Afp.Get(
this.EE),this.W3.Get(this.EE),this.L2.Get(this.EE)+1,this.W2.Get(this.EE),true,this.
Rf.Get(this.EE),this.AcF.Get(this.EE)));this.BroadcastEvent(this.AsZ().InitializeUp(
this.EE,this.L2.Get(this.EE)+1,true,tmp,this.Rf.Get(this.EE)),0x18);var pos=this.
Rf.Get(this.EE);var BS=null;if(!!ZM)BS=ZM.Ab;while(!!BS&&(BS!==this)){pos=A.abe(
pos,BS.M.slice(0,2));BS=BS.Ab;}if(!BS&&(ZM!==this)){this.Fh.Set(this.EE,null);return;
}this.BroadcastEvent(this.AsZ().InitializeDown(this.EE,this.L2.Get(this.EE)+1,true
,ZM,this.Rf.Get(this.EE)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;this.Fh.Set(this.EE,ZM);this.W2.Set(this.EE,WQ);this.Afp.Set(this.EE,pos
);this.AhO.Set(this.EE,pos);this.L2.Set(this.EE,0);this.W3.Set(this.EE,0);this.As0.
Set(this.EE,ticksCount);this.AcF.Set(this.EE,this.Rf.Get(this.EE));this.Fh.Get(this.
EE).GL(this.Aop().InitializeDown(this.EE,pos,this.L2.Get(this.EE)+1,this.W2.Get(
this.EE),true,this.AcF.Get(this.EE)));},ANn:function(){if(!!this.Jt)return this.
Jt.CW;return null;},ABz:function(Kq){var B;if(!Kq)throw new Error(SL);if(!((Kq.T&
0x80)===0x80))throw new Error(Uu);if(this.Jt.CW===Kq)this.Jt=this.Jt.Ag;else{var
AyR=this.Jt;while(AyR.Ag.CW!==Kq)AyR=AyR.Ag;AyR.Ag=AyR.Ag.Ag;}Kq.Cs(0x0,0xD0);if(
this.AyS){if(!!this.Jt)this.Jt.CW.Cs(0x50,0x0);else this.Cs(0x50,0x0);}},ALu:function(
Kq){var B;var As=A._NewObject(C.A52,0);if(!Kq)throw new Error(Zs);if(Kq===null)throw new
Error(Ww);if(((Kq.T&0x80)===0x80))throw new Error(II);if(!!this.Jt)this.Jt.CW.Cs(
0x0,0x50);else this.Cs(0x0,0x50);As.Ag=this.Jt;As.CW=Kq;this.Jt=As;if(this.AyS)Kq.
Cs(0xD0,0x0);else Kq.Cs(0x90,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.AhP={I:this},0);(this.Fh=[]).__proto__=C.Root.Fh;(this.
L2=[]).__proto__=C.Root.L2;(this.AIt=[]).__proto__=C.Root.AIt;(this.W3=[]).__proto__=
C.Root.W3;(this.Afp=[]).__proto__=C.Root.Afp;(this.As0=[]).__proto__=C.Root.As0;(
this.AhO=[]).__proto__=C.Root.AhO;(this.W2=[]).__proto__=C.Root.W2;(this.Rf=[]).
__proto__=C.Root.Rf;(this.AcF=[]).__proto__=C.Root.AcF;(this.Oc=[]).__proto__=C.
Root.Oc;(this.J2=[]).__proto__=C.Root.J2;this.__proto__=C.Root;this.T=0x10007F;this.
AhP.PC(10);this.AhP.Mp=[this,this.BvQ];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.AhP._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.AhP._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jt)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.Fh,D);if((B=this.AsV)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AhP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bt:0,Avb:false,Init:function(aArg){this.Bt=this.AuL();},AuL:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CI:0,DI:0,Down:false,Initialize2:function(Kp,SQ){this.CI=0;this.DI=
Kp;this.Down=SQ;if((Kp>=0x30)&&(Kp<=0x39))this.CI=(10+Kp)-48;if((Kp>=0x41)&&(Kp<=
0x5A))this.CI=(105+Kp)-65;if((Kp>=0x61)&&(Kp<=0x7A))this.CI=(105+Kp)-97;if(Kp===
0x20)this.CI=131;if(!this.CI)switch(Kp){case 0x2B:this.CI=132;break;case 0x2D:this.
CI=133;break;case 0x2A:this.CI=134;break;case 0x2F:this.CI=135;break;case 0x3D:this.
CI=136;break;case 0x2E:this.CI=137;break;case 0x2C:this.CI=138;break;case 0x3A:this.
CI=139;break;case 0x3B:this.CI=140;break;default:;}return this;},Initialize:function(
Kp,SQ){this.CI=Kp;this.Down=SQ;this.DI=0x00;var AZL=Kp-10;var AsU=Kp-105;if((AZL>=
0)&&(AZL<=9))this.DI=(48+AZL)&0xFFFF;if((AsU>=0)&&(AsU<=25))this.DI=(65+AsU)&0xFFFF;
if(Kp===131)this.DI=0x20;if(this.DI===0x00)switch(Kp){case 132:this.DI=0x2B;break;
case 133:this.DI=0x2D;break;case 134:this.DI=0x2A;break;case 135:this.DI=0x2F;break;
case 136:this.DI=0x3D;break;case 137:this.DI=0x2E;break;case 138:this.DI=0x2C;break;
case 139:this.DI=0x3A;break;case 140:this.DI=0x3B;break;default:;}return this;},
Bg0:function(A$B){switch(A$B){case 141:return((this.DI>=0x41)&&(this.DI<=0x5A))||((
this.DI>=0x61)&&(this.DI<=0x7A));case 142:return(((this.DI>=0x41)&&(this.DI<=0x5A
))||((this.DI>=0x61)&&(this.DI<=0x7A)))||((this.DI>=0x30)&&(this.DI<=0x39));case
143:return(this.DI>=0x30)&&(this.DI<=0x39);case 144:return(((this.DI>=0x41)&&(this.
DI<=0x46))||((this.DI>=0x61)&&(this.DI<=0x66)))||((this.DI>=0x30)&&(this.DI<=0x39
));case 145:return this.DI!==0x00;case 146:return(this.DI===0x00)&&!!this.CI;case
147:return(((this.CI===6)||(this.CI===7))||(this.CI===4))||(this.CI===5);case 148:
return(this.DI!==0x00)||!!this.CI;default:;}return A$B===this.CI;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.APU={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.APU;
},_className:"Core::LanguageEvent"};C.Aue={AwN:null,LM:A.wf,NS:0,Ix:0,Down:false
,Nw:false,InitializeUp:function(BD,N1,An3,AZm,ZL){this.Down=false;this.Ix=BD;this.
NS=N1;this.LM=ZL;this.AwN=AZm;this.Nw=An3;return this;},InitializeDown:function(
BD,N1,An3,AZm,ZL){this.Down=true;this.Ix=BD;this.NS=N1;this.LM=ZL;this.AwN=AZm;this.
Nw=An3;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Aue;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.AwN)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.AdE={Agn:A.wf,LM:
A.wf,NS:0,Jg:0,NG:A.wf,HT:A.wf,Ix:0,Down:false,Nw:false,InitializeHold:function(
BD,AkM,AxX,AxY,N1,WQ,ZL,AxW){this.Down=true;this.Ix=BD;this.HT=A.abf(AkM,WQ);this.
NG=A.abf(AxX,WQ);this.Jg=AxY;this.NS=N1;this.LM=ZL;this.Agn=AxW;return this;},InitializeUp:
function(BD,AkM,AxX,AxY,N1,WQ,An3,ZL,AxW){this.Down=false;this.Ix=BD;this.HT=A.abf(
AkM,WQ);this.NG=A.abf(AxX,WQ);this.Jg=AxY;this.NS=N1;this.Nw=An3;this.LM=ZL;this.
Agn=AxW;return this;},InitializeDown:function(BD,AkM,N1,WQ,An3,ZL){this.Down=true;
this.Ix=BD;this.HT=A.abf(AkM,WQ);this.NG=A.abf(AkM,WQ);this.Jg=0;this.NS=N1;this.
Nw=An3;this.LM=ZL;this.Agn=ZL;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.AdE;},_className:"Core::CursorEvent"};C.Ap1={Agn:A.wf
,LM:A.wf,NS:0,Jg:0,Dx:A.wf,NG:A.wf,HT:A.wf,Ix:0,Initialize:function(BD,AkM,AxX,aOffset
,AxY,BuT,WQ,ZL,AxW){this.Ix=BD;this.HT=A.abf(AkM,WQ);this.NG=A.abf(AxX,WQ);this.
Dx=aOffset;this.Jg=AxY;this.NS=BuT;this.LM=ZL;this.Agn=AxW;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Ap1;},_className:"Core::DragEvent"
};C.Z={BQ:null,Nn:null,Ei:null,Bp:A.wf,ATa:0,Space:0,Agl:0,J7:function(CU,aClip,
aOffset,Ce,aBlend){},GetClipping:function(){var B;var Aw=C.Ek.GetClipping.call(this
);if(((this.T&0x80000)===0x80000)){var Apq=BC;var X;for(X=this.Ag;!!X&&!((X.T&0x200
)===0x200);X=X.Ag)if(((X.T&0x1)===0x1))Apq=A.wC(Apq,X.GetClipping());Aw=A.wC(Aw,
Apq);}return Aw;},Cs:function(Q$,UD){var B;var S4=this.T;if((!!this.Ab&&((this.T&
0x80001)===0x80001))&&((UD&0x80000)===0x80000))this.Ab.Bd(this.GetClipping());C.
Ek.Cs.call(this,Q$,UD);if(((!!this.Ab&&((this.T&0x1)===0x1))&&((Q$&0x80000)===0x80000
))&&!((S4&0x80000)===0x80000))this.Ab.Bd(this.GetClipping());},H:function(E){var
B;if(A.aaY(E,this.M))return;var Alq=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJc=[E[2]-
E[0],E[3]-E[1]];var Apm=!A.aaX(Alq,AJc);var Fj=A.abe(E.slice(0,2),this.M.slice(0
,2));if(!A.aaX(Fj,B9)&&!Apm){var X=this.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var tmp=((X.T&0x100)===0x100);X.AmP(Fj,tmp);}X=X.Ag;}A.pe(this.
Ei,this);}if((Apm&&(Alq[0]>0))&&(Alq[1]>0)){var A_=A.abh(this.M,this.Bp);var X=this.
Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){if(!!X.Em&&(X.Em.
Nq!==this))X.Em=null;if(!X.Em&&((X.Pv!==0x14)||!!this.Agl))X.Ata(A_,this);}X=X.Ag;
}A.pe(this.Ei,this);}C.Ek.H.call(this,E);if(!!this.Ab&&Apm){this.T=this.T|0x1000;
if(!((this.Ab.T&0x2000)===0x2000)){this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.
Jw],this);}}},Bdi:function(){var B;if((!this.Agl||!!!this.Ab)||!((this.Ab.T&0x4000
)===0x4000))return;var X=this.Ag;var AZ5=((this.T&0x1000)===0x1000);for(;!!X&&!AZ5;
X=X.Ag){if(((X.T&0x400)===0x400)&&((X.T&0x800)===0x800))AZ5=true;if(((X.T&0x200)===
0x200))break;}if(AZ5){this.T=this.T&~0x4000;this.Ab.Bds();}},Ao7:function(G){var
B;this.BQ.Q=null;this.BQ.Qc=null;this.BQ=null;(B=this.Nn)?B[1].call(B[0],this):null;
},Gc:function(E){var B;var Fj=A.abe(E,this.Bp);if(A.aaX(Fj,B9))return;this.Bp=E;
var X=this.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var tmp=((
X.T&0x100)===0x100);X.AmP(Fj,tmp);}X=X.Ag;}if(!!this.Ab)this.Ab.Bd(this.M);A.pe(
this.Ei,this);},A8w:function(E){var B;if(E<0)E=0;if(E===this.ATa)return;this.ATa=
E;if(!!this.Ab&&!!this.Agl){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([
B=this.Ab,B.Jw],this);}},Bk0:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Agl){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|
0x4000;A.pe([B=this.Ab,B.Jw],this);}},Kb:function(E){var B;if(E===this.Agl)return;
this.Agl=E;if(!!this.Ab){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jw],this);}},U6:function(Acq,EX){var AsU=this.Da(0x1);var Rd=this.M;var
UT=A.abe(AsU.slice(0,2),Rd.slice(0,2));var L4=A.abe(AsU.slice(2,4),Rd.slice(2,4)
);var Bo=B9;if((UT[0]>0)&&(L4[0]>UT[0]))Bo=[UT[0],Bo[1]];else if((UT[0]>0)&&(L4[
0]>0))Bo=[L4[0],Bo[1]];if((L4[0]<0)&&(UT[0]<L4[0]))Bo=[L4[0],Bo[1]];else if((L4[
0]<0)&&(UT[0]<0))Bo=[UT[0],Bo[1]];if((UT[1]>0)&&(L4[1]>UT[1]))Bo=[Bo[0],UT[1]];else
if((UT[1]>0)&&(L4[1]>0))Bo=[Bo[0],L4[1]];if((L4[1]<0)&&(UT[1]<L4[1]))Bo=[Bo[0],L4[
1]];else if((L4[1]<0)&&(UT[1]<0))Bo=[Bo[0],UT[1]];if(A.aaX(Bo,B9)){(EX)?EX[1].call(
EX[0],this):null;return;}if(!!this.BQ){this.BQ.Ar(false);this.BQ.Q=null;this.BQ.
Qc=null;this.Nn=null;}this.BQ=Acq;if(!this.BQ){this.Gc(A.abe(this.Bp,Bo));(EX)?EX[
1].call(EX[0],this):null;}else{this.BQ.Ar(false);this.BQ.HF(1);this.BQ.Q=[this,this.
Am0,this.Gc];this.BQ.Cq=this.Bp;this.BQ.BY=A.abe(this.Bp,Bo);this.BQ.Qc=[this,this.
Ao7];this.BQ.Aeu(false);this.BQ.Ar(true);this.Nn=EX;}},Hx:function(Af,Act,Acq,EX
){var B;if(!Af)return;if((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400))throw new Error(
Uv);this.Bdi();var Aw=Af.GetExtent();var A_=this.M;var LD=A.lb(Aw,A_);if((!Act&&
!((LD[0]>=LD[2])||(LD[1]>=LD[3])))||(Act&&A.aaY(LD,Aw))){(EX)?EX[1].call(EX[0],this
):null;return;}var Bo=B9;if(Aw[2]>A_[2])Bo=[Aw[2]-A_[2],Bo[1]];if(Aw[3]>A_[3])Bo=[
Bo[0],Aw[3]-A_[3]];if(Bo[0]>(Aw[0]-A_[0]))Bo=[Aw[0]-A_[0],Bo[1]];if(Bo[1]>(Aw[1]-
A_[1]))Bo=[Bo[0],Aw[1]-A_[1]];if(!!this.BQ){this.BQ.Ar(false);this.BQ.Q=null;this.
BQ.Qc=null;this.Nn=null;}this.BQ=Acq;if(!this.BQ){this.Gc(A.abe(this.Bp,Bo));(EX
)?EX[1].call(EX[0],this):null;}else{this.BQ.Ar(false);this.BQ.HF(1);this.BQ.Q=[this
,this.Am0,this.Gc];this.BQ.Cq=this.Bp;this.BQ.BY=A.abe(this.Bp,Bo);this.BQ.Qc=[this
,this.Ao7];this.BQ.Aeu(false);this.BQ.Ar(true);this.Nn=EX;}},Bgr:function(Af){var
B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400)))return-1;var CM=-1;while(
!!Af&&!((Af.T&0x200)===0x200)){if(((Af.T&0x400)===0x400))CM=CM+1;Af=Af.AH;}return CM;
},Vp:function(Af,aFilter){var B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400
)))return null;var X=this.Ag;var IO=0x10000;if(((aFilter&0x10000)===0x10000))IO=
0x0;if(!!Af)X=Af.Ag;aFilter=aFilter|0x400;while(!!X&&!((X.T&0x200)===0x200)){if(((
B=aFilter)&&((X.T&B)===B))&&(!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.Ag;}return null;
},Da:function(aFilter){var B;var X=this.Ag;var AE=BC;var IO=0x10000;this.Bdi();if(((
aFilter&0x10000)===0x10000))IO=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.T&0x200
)===0x200)){if(((B=aFilter)&&((X.T&B)===B))&&(!IO||!((B=IO)&&((X.T&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ag;}return AE;},Am0:function(){return this.Bp;},_Init:
function(aArg){C.Ek._Init.call(this,aArg);this.__proto__=C.Z;this.T=0x203;},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.BQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ei)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CG={
Ho:null,BQ:null,Cd:null,Wi:null,Nn:null,Ei:null,G$:null,S1:-1,S0:0,Jd:-1,Hf:0,Ah8:
8,N8:0,T$:0,Acc:A.wf,GN:-1,Bp:0,Gd:-1,OB:0,GP:24,AV:0,Lc:null,ND:false,Atd:false
,ATh:function(Ij,N0,WO,SS,ST,Ahy,OS,Q_,Ls,Lq,Lr){throw new Error(Zt);},ApZ:function(
Ij,Ahy,OS,Q_,Ls,Lq,Lr){throw new Error(Wx);},Akf:function(Ij,N0,WO,SS,ST,OS,Q_,Ls
,Lq,Lr){throw new Error(Zu);},DispatchEvent:function(CH){var B;var result=null;if(((
this.Gd>=0)&&(this.Gd<this.AV))&&!this.AR){this.GN=this.Gd;this.Cd=(C.Cd.isPrototypeOf(
B=A._NewObject(this.Lc,0))?B:null);if(!!this.B7)this.B7.Ag=this.Cd;else this.B6=
this.Cd;this.Cd.AH=this.B7;this.B7=this.Cd;this.Cd.Ab=this;this.Acc=[(B=this.M)[
2]-B[0],this.GP];(B=this.G$)?B[1].call(B[0],this):null;var BS=(C.O.isPrototypeOf(
B=this.Cd)?B:null);if(!!BS)result=BS.DispatchEvent(CH);else result=this.Cd.GL(CH
);if(!!this.Cd.AH)this.Cd.AH.Ag=null;else this.B6=null;this.B7=this.Cd.AH;this.Cd.
AH=null;this.Cd.Ab=null;this.Cd=null;}if(!result)result=C.O.DispatchEvent.call(this
,CH);return result;},Ai:function(Ae){var B;if(!this.Lc){A.pe(this.Ei,this);return;
}this.Atd=true;var AzJ=0;if(!this.ND)AzJ=this.OB;var FF=this.AlA(-AzJ-this.Bp,1);
var GI=this.AlA(((((B=this.M)[3]-B[1])-AzJ)-this.Bp)-1,2);var CM=GI-FF;if(CM<1)CM=
1;var AhJ=(CM/2)|0;var AhK=(CM/3)|0;if(!AhJ)AhJ=1;if(!AhK)AhK=1;if(FF<this.Hf){FF=
FF-AhJ;GI=GI+AhK;}else if(GI>this.Jd){FF=FF-AhK;GI=GI+AhJ;}else{FF=this.Hf;GI=this.
Jd;}if(!this.ND){if(FF>=this.AV){FF=0;GI=-1;}else if(GI<0){FF=0;GI=-1;}if(GI>=this.
AV)GI=this.AV-1;if(FF<0)FF=0;}else if(this.AV<=0){FF=0;GI=-1;}var Aip=this.Hf;var
Aiq=this.Jd;var AoU=0;var AoV=-1;if(FF>Aip)Aip=FF;if(GI<Aiq)Aiq=GI;if(Aip<=Aiq){
while((this.Jd<GI)&&(this.Hf<Aip)){this.Ac5();this.Ayk();}while((this.Hf>FF)&&(this.
Jd>Aiq)){this.AzX();this.Ayj();}}else{this.Jd=(this.Jd-this.Hf)+FF;this.Hf=FF;AoU=
this.Hf;AoV=this.Jd;}while(this.Hf<FF)this.Ac5();while(this.Jd>GI)this.AzX();while(
this.Hf>FF)this.Ayj();while(this.Jd<GI)this.Ayk();var Aa=this.B6;var inx=this.Hf;
var pos=[0,(AzJ+this.Bp)+this.Ja(inx,0)];var BH=(B=this.M)[3]-B[1];var Ak_=null;
var Bec=(B=this.M)[2]-B[0];while(!!Aa){var Io=inx;if(this.ND){if(Io<0)Io=this.AV-(-
Io%this.AV);if(Io>0)Io=Io%this.AV;}var Ac6=((Io>=this.S0)&&(Io<=this.S1))||((inx>=
AoU)&&(inx<=AoV));var AoB=Aa.GetExtent();var Bo=A.abe(pos,AoB.slice(0,2));if(Ac6
)this.T$=this.GP;else this.T$=AoB[3]-AoB[1];var A0L=pos[1];var A0M=pos[1]+this.T$;
if(!A.aaX(Bo,B9))Aa.AmP(Bo,true);if((Ac6&&(A0L<BH))&&(A0M>0)){this.Cd=Aa;this.GN=
Io;this.Acc=[Bec,this.T$];(B=this.G$)?B[1].call(B[0],this):null;}Aa=Aa.Ag;inx+=1;
pos=[pos[0],pos[1]+this.T$];}inx=this.Hf;Aa=this.B6;pos=[0,(AzJ+this.Bp)+this.Ja(
inx,0)];while(!!Aa){var Io=inx;if(this.ND){if(Io<0)Io=this.AV-(-Io%this.AV);if(Io>
0)Io=Io%this.AV;}var Ac6=((Io>=this.S0)&&(Io<=this.S1))||((inx>=AoU)&&(inx<=AoV)
);if(Ac6)this.T$=this.GP;else this.T$=(B=Aa.GetExtent())[3]-B[1];var A0L=pos[1];
var A0M=pos[1]+this.T$;if(Ac6&&!((A0L<BH)&&(A0M>0))){this.Cd=Aa;this.GN=Io;this.
Acc=[Bec,this.T$];(B=this.G$)?B[1].call(B[0],this):null;}if(((Io===this.Gd)&&this.
ND)&&!!Ak_){var Rd=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rd))>A.aaH(A.lb(Ak_.GetExtent(),Rd)))Ak_=Aa;}else if(Io===this.Gd)Ak_=Aa;Aa=Aa.
Ag;inx+=1;pos=[pos[0],pos[1]+this.T$];}this.S0=0;this.S1=-1;this.Cd=null;this.GN=-
1;this.A8(Ak_);this.Atd=false;A.pe(this.Ei,this);},RY:function(Af,Gn,aFilter){return null;
},Ap5:function(Af,aFilter){return null;},Vp:function(Af,aFilter){return null;},ABH:
function(Af,aFilter){return null;},Da:function(aFilter){return BC;},NE:function(
Kq,FC,Ls,Lq,Lr){throw new Error(Uw);},Ag5:function(Af,JQ){throw new Error(Zv);},
Y5:function(Af){throw new Error(Zw);},Kj:function(Af,PZ){throw new Error(Ux);},HH:
function(Af){throw new Error(Wy);},AKK:function(Af,JQ){throw new Error(Q4);},J:function(
Af,PZ){throw new Error(Zx);},Ja:function(GX,AYY){return GX*this.GP;},AlA:function(
E6,AYY){return(E6/this.GP)|0;},AzX:function(){var Aa=this.B7;if(!Aa)return null;
if(Aa===this.AR)this.A8(null);this.Jd=this.Jd-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B6=null;this.B7=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.Em=null;if(this.N8<this.Ah8){if(!
!this.Ho)this.Ho.AH=Aa;Aa.Ag=this.Ho;this.Ho=Aa;this.N8++;}return Aa;},Ayk:function(
){var B;var Aa=this.Ho;var AcR=this.Lc;var Ac_=++this.Jd;if(this.ND){if(Ac_<0)Ac_=
this.AV-(-Ac_%this.AV);if(Ac_>0)Ac_=Ac_%this.AV;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==AcR))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Ho===Aa)this.Ho=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N8--;}else{Aa=(C.Cd.
isPrototypeOf(B=A._NewObject(AcR,0))?B:null);Aa.AW(0x1D);if(!!this.N8)this.Ah8++;
}this.T$=this.GP;this.GN=Ac_;this.Acc=[(B=this.M)[2]-B[0],this.T$];this.Cd=Aa;(B=
this.G$)?B[1].call(B[0],this):null;this.Cd=null;this.GN=-1;if(!!this.B7)this.B7.
Ag=Aa;Aa.Ab=this;Aa.AH=this.B7;this.B7=Aa;if(!this.B6)this.B6=Aa;if(Ac_===this.Gd
)this.A8(Aa);return Aa;},Ac5:function(){var Aa=this.B6;if(!Aa)return null;if(Aa===
this.AR)this.A8(null);this.Hf=this.Hf+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B7=null;
this.B6=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.Em=null;if(this.N8<this.Ah8){if(!!this.Ho
)this.Ho.AH=Aa;Aa.Ag=this.Ho;this.Ho=Aa;this.N8++;}return Aa;},Ayj:function(){var
B;var Aa=this.Ho;var AcR=this.Lc;var MQ=--this.Hf;if(this.ND){if(MQ<0)MQ=this.AV-(-
MQ%this.AV);if(MQ>0)MQ=MQ%this.AV;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==AcR)
)Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.Ag;if(this.Ho===
Aa)this.Ho=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N8--;}else{Aa=(C.Cd.isPrototypeOf(B=
A._NewObject(AcR,0))?B:null);Aa.AW(0x1D);if(!!this.N8)this.Ah8++;}this.T$=this.GP;
this.GN=MQ;this.Acc=[(B=this.M)[2]-B[0],this.T$];this.Cd=Aa;(B=this.G$)?B[1].call(
B[0],this):null;this.Cd=null;this.GN=-1;if(!!this.B6)this.B6.AH=Aa;Aa.Ab=this;Aa.
Ag=this.B6;this.B6=Aa;if(!this.B7)this.B7=Aa;if(MQ===this.Gd)this.A8(Aa);return Aa;
},Ao7:function(G){var B;this.BQ.Q=null;this.BQ.Qc=null;this.BQ=null;(B=this.Nn)?
B[1].call(B[0],this):null;},BxV:function(G){this.Gc(this.Wi.Dx[1]);},BxW:function(
G){var B;if(!!this.BQ){this.BQ.Ar(false);this.BQ.Q=null;this.BQ.Qc=null;this.BQ=
null;}if(!this.ND){var AE=this.Ap$(0,this.AV-1);var AfI=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OB);if(AE[0]>AfI[0])AE=[].concat(AfI[0],AE.slice(1,4));if(AE[1]>AfI[
1])AE=A.abP(AE,AfI[1]);var Fj=AE[1]-this.M[1];var A0Z=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A0Z>0)A0Z=0;this.Wi.Dx=[0,this.Bp];this.Wi.F$=[0,(this.Bp+A0Z)-Fj];this.
Wi.FO=[0,this.Bp-Fj];}else{var Fj=32000-(32000%this.GP);this.Wi.Dx=[0,this.Bp];this.
Wi.F$=[0,this.Bp-Fj];this.Wi.FO=[0,this.Bp+Fj];}},ARw:function(E){var B;if(this.
ND===E)return;this.ND=E;while(!!this.Ac5());this.An();this.Bd([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Av$:function(E){if(E===this.Wi)return;if(!!E&&!!E.Atp){A.ab5(
"%s%*%s",ON,E,PV);throw new Error(Wz);}if(!!this.Wi){this.Wi.AJp=null;this.Wi.Atp=
null;}this.Wi=E;if(!!E){E.AJp=[this,this.BxW];E.Atp=[this,this.BxV];}},Gc:function(
E){var B;if(this.ND&&(this.AV>0)){var Hq=this.Ja(this.AV,3);if(E<0)E=Hq-(-E%Hq);
if(E>0)E=E%Hq;if(E>0)E=E-Hq;}if(E===this.Bp)return;this.Bp=E;this.An();this.Bd([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(E){if(E<0)E=-1;if(E===this.Gd)return;
this.Gd=E;this.An();},A8k:function(E){var B;if(E<0)E=0;if(E===this.OB)return;this.
OB=E;if(!this.ND){this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Aer:function(
E){var B;if(E<1)E=1;if(E===this.GP)return;this.GP=E;while(!!this.Ac5());this.An(
);this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jm:function(E){var B;if(E<0)E=0;
if(E===this.AV)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.ND){if(
E>this.AV){AE=[].concat(AE.slice(0,3),(this.OB+this.Bp)+this.Ja(E,3));AE=A.abP(AE
,(this.OB+this.Bp)+this.Ja(this.AV,3));}else{AE=A.abP(AE,(this.OB+this.Bp)+this.
Ja(E,3));AE=[].concat(AE.slice(0,3),(this.OB+this.Bp)+this.Ja(this.AV,3));}}else
while(!!this.Ac5());this.AV=E;this.An();this.Bd(AE);},NN:function(E){var B;if(E===
this.Lc)return;this.Lc=E;while(!!this.Ac5());this.Ho=null;this.N8=0;this.An();this.
Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BgE:function(GX){if(this.Atd)return null;
if((GX<0)||(GX>=this.AV))return null;if(!this.ND){if((GX<this.Hf)||(GX>this.Jd))
return null;var X=this.B6;while(GX>this.Hf){X=X.Ag;GX=GX-1;}return X;}else{var MQ=
this.Hf;if(MQ<0)MQ=this.AV-(-MQ%this.AV);if(MQ>0)MQ=MQ%this.AV;var X=this.B6;while(
!!X){if((MQ%this.AV)===GX)return X;X=X.Ag;MQ=MQ+1;}return null;}},AAA:function(Acq
,EX){var B;if(this.ND){(EX)?EX[1].call(EX[0],this):null;return;}var AIT=this.Bp;
var Ba1=((((B=this.M)[3]-B[1])-this.Bp)-this.OB)-this.Ja(this.AV,3);var Bo=0;if(
AIT>0)Bo=-AIT;else if(Ba1>0)Bo=Ba1;if((Bo>0)&&(Bo>-AIT))Bo=-AIT;if(!Bo){(EX)?EX[
1].call(EX[0],this):null;return;}if(!!this.BQ){this.BQ.Ar(false);this.BQ.Q=null;
this.BQ.Qc=null;this.Nn=null;}this.BQ=Acq;if(!this.BQ){this.Gc(this.Bp+Bo);(EX)?
EX[1].call(EX[0],this):null;}else{this.BQ.Ar(false);this.BQ.HF(1);this.BQ.Q=[this
,this.Am0,this.Gc];this.BQ.Cq=this.Bp;this.BQ.BY=this.Bp+Bo;this.BQ.Qc=[this,this.
Ao7];this.BQ.Aeu(false);this.BQ.Ar(true);this.Nn=EX;}},Hx:function(GX,Act,Acq,EX
){var B;if((GX<0)||(GX>=this.AV))return;var Aw=this.Ap$(GX,GX);var A_=this.M;var
LD=A.lb(Aw,A_);if((!Act&&!((LD[0]>=LD[2])||(LD[1]>=LD[3])))||(Act&&A.aaY(LD,Aw))
){(EX)?EX[1].call(EX[0],this):null;return;}var Bo=0;if(Aw[3]>A_[3])Bo=Aw[3]-A_[3
];if(Bo>(Aw[1]-A_[1]))Bo=Aw[1]-A_[1];if(!!this.BQ){this.BQ.Ar(false);this.BQ.Q=null;
this.BQ.Qc=null;this.Nn=null;}this.BQ=Acq;if(!this.BQ){this.Gc(this.Bp-Bo);(EX)?
EX[1].call(EX[0],this):null;}else{this.BQ.Ar(false);this.BQ.HF(1);this.BQ.Q=[this
,this.Am0,this.Gc];this.BQ.Cq=this.Bp;this.BQ.BY=this.Bp-Bo;this.BQ.Qc=[this,this.
Ao7];this.BQ.Aeu(false);this.BQ.Ar(true);this.Nn=EX;}},Bgw:function(){return BC;
},ANq:function(){if((this.OB<=0)||this.ND)return BC;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bp);AE=[].concat(AE.slice(0,3),AE[1]+this.OB);return AE;},A43:function(E6
){if(((this.AV<=0)||(E6[0]<this.M[0]))||(E6[0]>=this.M[2]))return-1;E6=A.abe(E6,
this.M.slice(0,2));if(!this.ND){var Aa=(E6[1]-this.Bp)-this.OB;if(Aa>0)Aa=this.AlA(
Aa,0);if((Aa<0)||(Aa>=this.AV))return-1;return Aa;}var Aa=E6[1]-this.Bp;if(Aa>0)
Aa=this.AlA(Aa,0);if(Aa<0)Aa=this.AlA(Aa,0)-1;if(Aa<0)Aa=this.AV-(-Aa%this.AV);if(
Aa>0)Aa=Aa%this.AV;return Aa;},Ap$:function(JP,LY){if(JP<0)JP=0;if(LY>=this.AV)LY=
this.AV-1;if(JP>LY)return BC;var AE=this.M;var Bo=this.Bp;if(this.ND){var Hq=this.
Ja(this.AV,3);if(Bo<0)Bo=Hq-(-Bo%Hq);if(Bo>0)Bo=Bo%Hq;if(Bo>0)Bo=Bo-Hq;}else Bo=
Bo+this.OB;AE=[].concat(AE.slice(0,3),(AE[1]+Bo)+this.Ja(LY+1,0));AE=A.abP(AE,(AE[
1]+Bo)+this.Ja(JP,0));return AE;},Aa5:function(JP,LY){var B;if(JP<0)JP=0;if(JP>LY
)return;if(this.S0>this.S1){this.S0=JP;this.S1=LY;}else{if(JP<this.S0)this.S0=JP;
if(LY>this.S1)this.S1=LY;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.ND){
AE=A.abP(AE,(this.OB+this.Bp)+this.Ja(JP,0));AE=[].concat(AE.slice(0,3),(this.OB+
this.Bp)+this.Ja(LY+1,0));}else if((this.Ja(this.AV-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bo=this.Bp;var Hq=this.Ja(this.AV,3);if(Bo<0)Bo=Hq-(-Bo%Hq);if(
Bo>0)Bo=Bo%Hq;if(Bo>0)Bo=Bo-Hq;AE=A.abP(AE,Bo+this.Ja(JP,0));AE=[].concat(AE.slice(
0,3),Bo+this.Ja(LY+1,0));}this.An();this.Bd(AE);},Am0:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CG;this.H(WA);
this.Lc=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Ho
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wi)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ei)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G$)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dp={Ho:null
,BQ:null,Cd:null,Nn:null,G$:null,S1:-1,S0:0,Jd:-1,Hf:0,Ah8:8,N8:0,Sn:0,Acc:A.wf,
GN:-1,Bp:0,Gd:-1,VL:24,AV:0,Lc:null,Atd:false,ATh:function(Ij,N0,WO,SS,ST,Ahy,OS
,Q_,Ls,Lq,Lr){throw new Error(WC);},ApZ:function(Ij,Ahy,OS,Q_,Ls,Lq,Lr){throw new
Error(Zy);},Akf:function(Ij,N0,WO,SS,ST,OS,Q_,Ls,Lq,Lr){throw new Error(Zz);},DispatchEvent:
function(CH){var B;var result=null;if(((this.Gd>=0)&&(this.Gd<this.AV))&&!this.AR
){this.GN=this.Gd;this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.Lc,0))?B:null);
if(!!this.B7)this.B7.Ag=this.Cd;else this.B6=this.Cd;this.Cd.AH=this.B7;this.B7=
this.Cd;this.Cd.Ab=this;this.Acc=[this.Sn,(B=this.M)[3]-B[1]];(B=this.G$)?B[1].call(
B[0],this):null;var BS=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!BS)result=BS.DispatchEvent(
CH);else result=this.Cd.GL(CH);if(!!this.Cd.AH)this.Cd.AH.Ag=null;else this.B6=null;
this.B7=this.Cd.AH;this.Cd.AH=null;this.Cd.Ab=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CH);return result;},Ai:function(Ae){var B;if(!this.Lc
)return;this.Atd=true;var FF=this.AlA(0-this.Bp,1);var GI=this.AlA((((B=this.M)[
2]-B[0])-this.Bp)-1,2);var CM=GI-FF;if(CM<1)CM=1;var AhJ=(CM/2)|0;var AhK=(CM/3)|
0;if(!AhJ)AhJ=1;if(!AhK)AhK=1;if(FF<this.Hf){FF=FF-AhJ;GI=GI+AhK;}else if(GI>this.
Jd){FF=FF-AhK;GI=GI+AhJ;}else{FF=this.Hf;GI=this.Jd;}if(FF>=this.AV){FF=0;GI=-1;
}else if(GI<0){FF=0;GI=-1;}if(GI>=this.AV)GI=this.AV-1;if(FF<0)FF=0;var Aip=this.
Hf;var Aiq=this.Jd;var AoU=0;var AoV=-1;if(FF>Aip)Aip=FF;if(GI<Aiq)Aiq=GI;if(Aip<=
Aiq){while((this.Jd<GI)&&(this.Hf<Aip)){this.Ac5();this.Ayk();}while((this.Hf>FF
)&&(this.Jd>Aiq)){this.AzX();this.Ayj();}}else{this.Jd=(this.Jd-this.Hf)+FF;this.
Hf=FF;AoU=this.Hf;AoV=this.Jd;}while(this.Hf<FF)this.Ac5();while(this.Jd>GI)this.
AzX();while(this.Hf>FF)this.Ayj();while(this.Jd<GI)this.Ayk();var Aa=this.B6;var
inx=this.Hf;var pos=[this.Bp+this.Ja(inx,0),0];var BR=(B=this.M)[2]-B[0];var Ak_=
null;var Bd4=(B=this.M)[3]-B[1];while(!!Aa){var Io=inx;var Ac6=((Io>=this.S0)&&(
Io<=this.S1))||((inx>=AoU)&&(inx<=AoV));var AoB=Aa.GetExtent();var Bo=A.abe(pos,
AoB.slice(0,2));if(Ac6)this.Sn=this.VL;else this.Sn=AoB[2]-AoB[0];var A0J=pos[0];
var A0K=pos[0]+this.Sn;if(!A.aaX(Bo,B9))Aa.AmP(Bo,true);if((Ac6&&(A0J<BR))&&(A0K>
0)){this.Cd=Aa;this.GN=Io;this.Acc=[this.Sn,Bd4];(B=this.G$)?B[1].call(B[0],this
):null;}Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.Sn,pos[1]];}inx=this.Hf;Aa=this.B6;pos=[
this.Bp+this.Ja(inx,0),0];while(!!Aa){var Io=inx;var Ac6=((Io>=this.S0)&&(Io<=this.
S1))||((inx>=AoU)&&(inx<=AoV));if(Ac6)this.Sn=this.VL;else this.Sn=(B=Aa.GetExtent(
))[2]-B[0];var A0J=pos[0];var A0K=pos[0]+this.Sn;if(Ac6&&!((A0J<BR)&&(A0K>0))){this.
Cd=Aa;this.GN=Io;this.Acc=[this.Sn,Bd4];(B=this.G$)?B[1].call(B[0],this):null;}if(
Io===this.Gd)Ak_=Aa;Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.Sn,pos[1]];}this.S0=0;this.
S1=-1;this.Cd=null;this.GN=-1;this.A8(Ak_);this.Atd=false;},RY:function(Af,Gn,aFilter
){return null;},Ap5:function(Af,aFilter){return null;},Vp:function(Af,aFilter){return null;
},ABH:function(Af,aFilter){return null;},Da:function(aFilter){return BC;},NE:function(
Kq,FC,Ls,Lq,Lr){throw new Error(WD);},Ag5:function(Af,JQ){throw new Error(WE);},
Y5:function(Af){throw new Error(SM);},Kj:function(Af,PZ){throw new Error(ZA);},HH:
function(Af){throw new Error(ZB);},AKK:function(Af,JQ){throw new Error(Acf);},J:
function(Af,PZ){throw new Error(Uy);},Ja:function(GX,AYY){return GX*this.VL;},AlA:
function(E6,AYY){return(E6/this.VL)|0;},AzX:function(){var Aa=this.B7;if(!Aa)return null;
if(Aa===this.AR)this.A8(null);this.Jd=this.Jd-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B6=null;this.B7=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.Em=null;if(this.N8<this.Ah8){if(!
!this.Ho)this.Ho.AH=Aa;Aa.Ag=this.Ho;this.Ho=Aa;this.N8++;}return Aa;},Ayk:function(
){var B;var Aa=this.Ho;var AcR=this.Lc;var Ac_=++this.Jd;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==AcR))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.
AH.Ag=Aa.Ag;if(this.Ho===Aa)this.Ho=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N8--;}else{
Aa=(C.Cd.isPrototypeOf(B=A._NewObject(AcR,0))?B:null);Aa.AW(0x1D);if(!!this.N8)this.
Ah8++;}this.Sn=this.VL;this.GN=Ac_;this.Acc=[this.Sn,(B=this.M)[3]-B[1]];this.Cd=
Aa;(B=this.G$)?B[1].call(B[0],this):null;this.Cd=null;this.GN=-1;if(!!this.B7)this.
B7.Ag=Aa;Aa.Ab=this;Aa.AH=this.B7;this.B7=Aa;if(!this.B6)this.B6=Aa;if(Ac_===this.
Gd)this.A8(Aa);return Aa;},Ac5:function(){var Aa=this.B6;if(!Aa)return null;if(Aa===
this.AR)this.A8(null);this.Hf=this.Hf+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B7=null;
this.B6=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.Em=null;if(this.N8<this.Ah8){if(!!this.Ho
)this.Ho.AH=Aa;Aa.Ag=this.Ho;this.Ho=Aa;this.N8++;}return Aa;},Ayj:function(){var
B;var Aa=this.Ho;var AcR=this.Lc;var MQ=--this.Hf;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==AcR))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Ho===Aa)this.Ho=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.N8--;}else{Aa=(C.Cd.
isPrototypeOf(B=A._NewObject(AcR,0))?B:null);Aa.AW(0x1D);if(!!this.N8)this.Ah8++;
}this.Sn=this.VL;this.GN=MQ;this.Acc=[this.Sn,(B=this.M)[3]-B[1]];this.Cd=Aa;(B=
this.G$)?B[1].call(B[0],this):null;this.Cd=null;this.GN=-1;if(!!this.B6)this.B6.
AH=Aa;Aa.Ab=this;Aa.Ag=this.B6;this.B6=Aa;if(!this.B7)this.B7=Aa;if(MQ===this.Gd
)this.A8(Aa);return Aa;},Ao7:function(G){var B;this.BQ.Q=null;this.BQ.Qc=null;this.
BQ=null;(B=this.Nn)?B[1].call(B[0],this):null;},Gc:function(E){var B;if(E===this.
Bp)return;this.Bp=E;this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(
E){if(E<0)E=-1;if(E===this.Gd)return;this.Gd=E;this.An();},AD5:function(E){var B;
if(E<1)E=1;if(E===this.VL)return;this.VL=E;while(!!this.Ac5());this.An();this.Bd([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jm:function(E){var B;if(E<0)E=0;if(E===this.
AV)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AV){AE=[].concat(this.
Bp+this.Ja(this.AV,3),AE.slice(1,4));AE=A.abN(AE,this.Bp+this.Ja(E,3));}else{AE=
A.abN(AE,this.Bp+this.Ja(this.AV,3));AE=[].concat(this.Bp+this.Ja(E,3),AE.slice(
1,4));}this.AV=E;this.An();this.Bd(AE);},NN:function(E){var B;if(E===this.Lc)return;
this.Lc=E;while(!!this.Ac5());this.Ho=null;this.N8=0;this.An();this.Bd([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bmt:function(BuU,BuV){if(!this.BQ)return;if(BuU)this.Gc(
this.BQ.BY);var A2v=this.Nn;this.BQ.Ar(false);this.BQ.Q=null;this.BQ.Qc=null;this.
Nn=null;this.BQ=null;if(BuV)(A2v)?A2v[1].call(A2v[0],this):null;},Bg5:function(){
return!!this.BQ;},Hx:function(GX,Act,Acq,EX){var B;if((GX<0)||(GX>=this.AV))return;
var Aw=this.Ap$(GX,GX);var A_=this.M;var LD=A.lb(Aw,A_);if((!Act&&!((LD[0]>=LD[2
])||(LD[1]>=LD[3])))||(Act&&A.aaY(LD,Aw))){(EX)?EX[1].call(EX[0],this):null;return;
}var Bo=0;if(Aw[2]>A_[2])Bo=Aw[2]-A_[2];if(Bo>(Aw[0]-A_[0]))Bo=Aw[0]-A_[0];if(!!
this.BQ){this.BQ.Ar(false);this.BQ.Q=null;this.BQ.Qc=null;this.Nn=null;}this.BQ=
Acq;if(!this.BQ){this.Gc(this.Bp-Bo);(EX)?EX[1].call(EX[0],this):null;}else{this.
BQ.Ar(false);this.BQ.HF(1);this.BQ.Q=[this,this.Am0,this.Gc];this.BQ.Cq=this.Bp;
this.BQ.BY=this.Bp-Bo;this.BQ.Qc=[this,this.Ao7];this.BQ.Aeu(false);this.BQ.Ar(true
);this.Nn=EX;}},Ap$:function(JP,LY){if(JP<0)JP=0;if(LY>=this.AV)LY=this.AV-1;if(
JP>LY)return BC;var AE=this.M;var Bo=this.Bp;AE=A.abN(AE,(AE[0]+Bo)+this.Ja(LY+1
,0));AE=[].concat((AE[0]+Bo)+this.Ja(JP,0),AE.slice(1,4));return AE;},Aa5:function(
JP,LY){var B;if(JP<0)JP=0;if(JP>LY)return;if(this.S0>this.S1){this.S0=JP;this.S1=
LY;}else{if(JP<this.S0)this.S0=JP;if(LY>this.S1)this.S1=LY;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bp+this.Ja(JP,0),AE.slice(1,4));AE=A.abN(
AE,this.Bp+this.Ja(LY+1,0));this.An();this.Bd(AE);},Am0:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Dp;this.H(WA);
this.Lc=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Ho
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nn)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bi={AQM:null,ADw:null,Avk:null,DS:null,
Lg:null,BK:null,AJL:0,Bl:0,Ix:0,Bt:0,NS:0,Jg:0,Dx:A.wf,NG:A.wf,HT:A.wf,Awx:8,AeC:
0,A5V:1,Down:false,Yb:false,Nw:false,A0a:false,Aze:0,J7:function(CU,aClip,aOffset
,Ce,aBlend){},GL:function(CH){var B;var BM=(C.AdE.isPrototypeOf(CH)?CH:null);var
DV=(C.Ap1.isPrototypeOf(CH)?CH:null);var AI5=this.Yb;var Z8;var UQ;var AAf;var MO;
var AyD;if(!BM&&!DV)return null;Z8=(!!BM&&BM.Down)&&!BM.Jg;UQ=(!!BM&&BM.Down)&&(
BM.Jg>0);AAf=(!!BM&&BM.Down)&&(BM.Jg>this.Aze);MO=!!BM&&!BM.Down;AyD=!!DV;if(Z8)
this.Aze=((B=(BM.Nw?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.AeC&0x20)===0x20
)&&(this.Bl>0))&&(this.Bl<33554432)){var In=(C.Aue.isPrototypeOf(CH)?CH:null);if(((
!!In&&In.Down)&&(In.AwN!==this))&&A.wa(this.GetExtent(),this.Ab.A5R(In.LM))){this.
AJL=0x20;this.Bl=this.Bl|67108864;return null;}}if(Z8){var Ao1=0;var AcM;this.Bl=
this.Bl|(1<<BM.Ix);for(AcM=this.Bl&4095;AcM>0;AcM=AcM>>1)if(!!(AcM&1))Ao1=Ao1+1;
if(Ao1===1)this.Bl=(this.Bl|16777216)|(4096<<BM.Ix);}if(MO&&(this.Bl<16777216)){
var Ir=this.Ib();var Js=null;if(!!Ir){var A2n=(!!this.AH?this.AH:this.Ab);var AZ0=(
!!Ir.Jt?Ir.Jt.CW:null);Js=Ir.XR(A.abh(ZC,BM.LM),BM.Ix,BM.NS,AZ0,A2n,0x0);}if(!!Js
){var P;for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Js.Cd.GL(A._NewObject(C.AdE,0).InitializeDown(
P,BM.HT,BM.NS,B9,true,BM.LM));for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Js.Cd.GL(A.
_NewObject(C.AdE,0).InitializeUp(P,BM.HT,BM.HT,0,BM.NS,B9,false,BM.LM,BM.LM));}}
if(MO)this.Bl=(this.Bl&~(1<<BM.Ix))|33554432;if(AAf&&(this.Bl<16777216))this.Bl=
this.Bl|67108864;if(MO&&BM.Nw)this.Bl=this.Bl|67108864;if(MO&&!(this.Bl&4095))this.
AJL=0x0;if(MO&&!(this.Bl&16777215))this.Bl=0;if(UQ&&(this.Bl>=67108864)){var Ir=
this.Ib();if(!!Ir)Ir.ASJ(null,null,this,this.AJL);}if((UQ&&!!(this.Bl&16777216))&&
!!(this.Bl&33554432)){UQ=false;MO=true;}if(!!BM&&!(this.Bl&(4096<<BM.Ix)))return this;
if(!!DV&&!(this.Bl&(4096<<DV.Ix)))return this;if(MO&&!(this.Bl&16777216))return this;
if(((Z8||AyD)||UQ)&&((this.Bl<16777216)||(this.Bl>=33554432)))return this;if(MO)
this.Bl=this.Bl&3758100479;if(MO&&!(this.Bl&16777215))this.Bl=0;if(!!BM){this.Down=
Z8||UQ;this.Yb=this.APG(BM.HT);this.NG=BM.NG;this.HT=BM.HT;this.Dx=B9;this.Jg=BM.
Jg;this.NS=BM.NS;this.Nw=BM.Nw;this.Ix=BM.Ix;this.Bt=BM.Bt;if(BM.Down&&!BM.Jg)AI5=
false;}if(!!DV){this.Down=true;this.Yb=this.APG(DV.HT);this.NG=DV.NG;this.HT=DV.
HT;this.Dx=DV.Dx;this.Jg=DV.Jg;this.NS=DV.NS;this.Ix=DV.Ix;this.Nw=false;this.Bt=
DV.Bt;}var AZ6=this.Down;if(!!DV)(B=this.AQM)?B[1].call(B[0],this):null;if((!!BM&&
this.Down)&&!this.Jg)(B=this.BK)?B[1].call(B[0],this):null;if((!!BM&&this.Down)&&(
this.Jg>0))(B=this.DS)?B[1].call(B[0],this):null;if((this.Down&&this.Yb)&&!AI5){
this.A0a=true;(B=this.Avk)?B[1].call(B[0],this):null;}if(this.A0a&&(((AZ6&&!this.
Yb)&&AI5)||((!AZ6&&this.Yb)&&AI5))){this.A0a=false;(B=this.ADw)?B[1].call(B[0],this
):null;}if(!!BM&&!AZ6)(B=this.Lg)?B[1].call(B[0],this):null;if(!!this.AeC){var Ac4=
0x0;if(((((this.AeC&0x10)===0x10)&&!!BM)&&BM.Down)&&(BM.Jg>=1000))Ac4=0x10;if((((
this.AeC&0x1)===0x1)&&!!DV)&&((DV.LM[1]-DV.Agn[1])<=-this.Awx))Ac4=0x1;if((((this.
AeC&0x2)===0x2)&&!!DV)&&((DV.LM[1]-DV.Agn[1])>=this.Awx))Ac4=0x2;if((((this.AeC&
0x4)===0x4)&&!!DV)&&((DV.LM[0]-DV.Agn[0])<=-this.Awx))Ac4=0x4;if((((this.AeC&0x8
)===0x8)&&!!DV)&&((DV.LM[0]-DV.Agn[0])>=this.Awx))Ac4=0x8;if(!!Ac4){var Ir=this.
Ib();if(!!Ir){this.AJL=Ac4;Ir.ASJ(null,this,this,Ac4);}}}return this;},XR:function(
C8,BD,N1,ZK,Acw,Acv){var B;if(!!ZK&&(ZK!==this))return null;if((N1<1)||(N1>this.
A5V))return null;if(this.Bl>=33554432)return null;if((this.Bl>=16777216)&&!(this.
Bl&(4096<<BD)))return null;if(!!(Acv&this.AeC))return null;if(this.BgJ()){var Aw=
A.lb(C8,this.GetExtent());if(!((Aw[0]>=Aw[2])||(Aw[1]>=Aw[3]))){var P2=A.aaI(C8);
var Fj=B9;if(P2[0]<Aw[0])Fj=[Aw[0]-P2[0],Fj[1]];if(P2[0]>=Aw[2])Fj=[(Aw[2]-P2[0]
)-1,Fj[1]];if(P2[1]<Aw[1])Fj=[Fj[0],Aw[1]-P2[1]];if(P2[1]>=Aw[3])Fj=[Fj[0],(Aw[3
]-P2[1])-1];return A._NewObject(C.Auf,0).Initialize(this,Fj);}}else{var Hp=A.abi(
9,A.wf,null);var P;Hp.Set(0,A.aaI(C8));Hp.Set(1,Hp.Get(0));Hp.Set(2,Hp.Get(0));Hp.
Set(3,Hp.Get(0));Hp.Set(4,Hp.Get(0));Hp.Set(1,[C8[0],Hp.Get(1)[1]]);Hp.Set(2,[Hp.
Get(2)[0],C8[1]]);Hp.Set(3,[C8[2],Hp.Get(3)[1]]);Hp.Set(4,[Hp.Get(4)[0],C8[3]]);
Hp.Set(5,C8.slice(0,2));Hp.Set(6,[C8[2],C8[1]]);Hp.Set(7,[C8[0],C8[3]]);Hp.Set(8
,C8.slice(2,4));for(P=0;P<9;P=P+1)if(this.APG(Hp.Get(P)))return A._NewObject(C.Auf
,0).Initialize(this,A.abe(Hp.Get(P),Hp.Get(0)));}return null;},BkT:function(E){if(
E<1)E=1;this.Awx=E;},AEc:function(E){if(E<1)E=1;this.A5V=E;},Ar:function(E){if(E
)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){C.Y2._Init.
call(this,aArg);this.__proto__=C.Bi;this.T=0x10011B;},_Mark:function(D){var B;C.
Y2._Mark.call(this,D);if((B=this.AQM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.ADw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Lg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H0={timer:null,AJp:null,Atp:null,AER:null,YR:null,Sk:null,Bl:0,AH1:0,AcP:5000
,Apl:0,AI3:A.wf,Aoy:0,Afg:0,EO:0,AlL:0,AtE:0,Aox:0,Aff:0,EN:0,AlK:0,AlI:0,NG:A.wf
,A4d:A.wf,FO:A.wf,F$:A.wf,Dx:A.wf,Wk:A.wf,A4U:0.5,A8_:true,AFu:true,Za:false,Xe:
false,Xf:false,Aoh:false,Aze:0,J7:function(CU,aClip,aOffset,Ce,aBlend){},GL:function(
CH){var B;var BM=(C.AdE.isPrototypeOf(CH)?CH:null);var DV=(C.Ap1.isPrototypeOf(CH
)?CH:null);var In=(C.Aue.isPrototypeOf(CH)?CH:null);var Z8;var UQ;var AAf;var MO;
var AyD;Z8=(!!BM&&BM.Down)&&!BM.Jg;UQ=(!!BM&&BM.Down)&&(BM.Jg>0);AAf=(!!BM&&BM.Down
)&&(BM.Jg>this.Aze);MO=!!BM&&!BM.Down;AyD=!!DV;if(Z8)this.Aze=((B=(BM.Nw?0:50))&
0x80)?B|0xFFFFFF00:B&0xFF;if(Z8){var Ao1=0;var AcM;this.Bl=this.Bl|(1<<BM.Ix);for(
AcM=this.Bl&4095;AcM>0;AcM=AcM>>1)if(!!(AcM&1))Ao1=Ao1+1;if(Ao1===1)this.Bl=(this.
Bl|16777216)|(4096<<BM.Ix);}if(MO&&(this.Bl<16777216)){var Ir=this.Ib();var Js=null;
if(!!Ir){var A2n=(!!this.AH?this.AH:this.Ab);var AZ0=(!!Ir.Jt?Ir.Jt.CW:null);Js=
Ir.XR(A.abh(ZC,BM.LM),BM.Ix,BM.NS,AZ0,A2n,0x0);}if(!!Js){var P;for(P=0;P<10;P++)
if(!!(this.Bl&(1<<P)))Js.Cd.GL(A._NewObject(C.AdE,0).InitializeDown(P,BM.HT,BM.NS
,B9,true,BM.LM));for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Js.Cd.GL(A._NewObject(C.
AdE,0).InitializeUp(P,BM.HT,BM.HT,0,BM.NS,B9,false,BM.LM,BM.LM));}}if(MO)this.Bl=(
this.Bl&~(1<<BM.Ix))|33554432;if(AAf&&(this.Bl<16777216))this.Bl=this.Bl|67108864;
if(MO&&BM.Nw)this.Bl=this.Bl|67108864;if(MO&&!(this.Bl&16777215))this.Bl=0;if(UQ&&(
this.Bl>=67108864)){var Ir=this.Ib();if(!!Ir)Ir.ASJ(null,null,this,0x0);}if((UQ&&
!!(this.Bl&16777216))&&!!(this.Bl&33554432)){UQ=false;MO=true;}if(!!BM&&!(this.Bl&(
4096<<BM.Ix)))return this;if(!!DV&&!(this.Bl&(4096<<DV.Ix)))return this;if(MO&&!(
this.Bl&16777216))return this;if(((Z8||AyD)||UQ)&&((this.Bl<16777216)||(this.Bl>=
33554432)))return this;if(MO)this.Bl=this.Bl&3758100479;if(MO&&!(this.Bl&16777215
))this.Bl=0;if(!!In&&(In.AwN===this))return null;if((!!In&&In.Down)&&(this.Aoh||
!this.Za))return null;if((!!In&&In.Down)&&!A.wa(this.M,this.Ab.A5R(In.LM)))return null;
if((!!In&&!In.Down)&&(!this.Aoh||(this.AH1!==In.Ix)))return null;if((!BM&&!DV)&&
!In)return null;if(!!BM){this.Aoh=Z8||UQ;this.AH1=BM.Ix;this.NG=BM.NG;}if(!!DV)this.
AH1=DV.Ix;if(!!In){this.Aoh=In.Down;this.AH1=In.Ix;}if(!!In&&In.Down){this.A2o();
this.EN=(((In.Bt-this.AlI)*0.001)*this.Aff)+this.EN;this.EO=(((In.Bt-this.AtE)*0.001
)*this.Afg)+this.EO;if(this.Xe)this.EN=0;if(this.Xf)this.EO=0;this.Aff=0;this.Afg=
0;this.Xe=false;this.Xf=false;this.AI3=this.Dx;this.Apl=In.Bt;return this;}if(Z8
){this.A2o();this.EN=(((BM.Bt-this.AlI)*0.001)*this.Aff)+this.EN;this.EO=(((BM.Bt-
this.AtE)*0.001)*this.Afg)+this.EO;if(this.Xe||!this.Za)this.EN=0;if(this.Xf||!this.
Za)this.EO=0;this.Aff=0;this.Afg=0;this.Xe=false;this.Xf=false;if(!this.Za){this.
Za=true;(B=this.Sk)?B[1].call(B[0],this):null;(B=this.AJp)?B[1].call(B[0],this):
null;}this.AI3=this.Dx;this.Apl=BM.Bt;}if(!!DV){var GZ=A.abe(DV.HT,DV.NG);var Cy=
this.Dx;if(this.AFu)Cy=[this.AI3[0]+GZ[0],Cy[1]];Cy=[Cy[0],this.AI3[1]+GZ[1]];if(
this.A8_){if(Cy[0]<this.F$[0])Cy=[this.F$[0]+(((Cy[0]-this.F$[0])/2)|0),Cy[1]];else
if(Cy[0]>this.FO[0])Cy=[this.FO[0]+(((Cy[0]-this.FO[0])/2)|0),Cy[1]];if(Cy[1]<this.
F$[1])Cy=[Cy[0],this.F$[1]+(((Cy[1]-this.F$[1])/2)|0)];else if(Cy[1]>this.FO[1])
Cy=[Cy[0],this.FO[1]+(((Cy[1]-this.FO[1])/2)|0)];}else{if(Cy[0]<this.F$[0])Cy=[this.
F$[0],Cy[1]];else if(Cy[0]>this.FO[0])Cy=[this.FO[0],Cy[1]];if(Cy[1]<this.F$[1])
Cy=[Cy[0],this.F$[1]];else if(Cy[1]>this.FO[1])Cy=[Cy[0],this.FO[1]];}if(!A.aaX(
Cy,this.Dx)){this.A4d=A.abe(Cy,this.Dx);this.Dx=Cy;(B=this.Atp)?B[1].call(B[0],this
):null;(B=this.AER)?B[1].call(B[0],this):null;}}if((!!In&&!In.Down)&&((In.Bt-this.
Apl)>=200)){this.EN=0;this.EO=0;}if(UQ&&((BM.Bt-this.Apl)>=200)){this.EN=0;this.
EO=0;}if(!!DV&&(DV.Bt>this.Apl)){var GZ=DV.Dx;var Bbs=1000/(DV.Bt-this.Apl);var Ah$=
0;var Aia;if(this.AFu)Ah$=GZ[0]*Bbs;Aia=GZ[1]*Bbs;if((Ah$*this.EN)<0)this.EN=0;if((
Aia*this.EO)<0)this.EO=0;this.EN=(this.EN+Ah$)*0.5;this.EO=(this.EO+Aia)*0.5;this.
Apl=DV.Bt;}if(!MO&&!In)return this;if(!!BM&&BM.Nw){this.EN=0;this.EO=0;}if((this.
Dx[0]<=this.F$[0])||(this.Dx[0]>=this.FO[0]))this.EN=0;else if(!this.EN){var EG=
this.Dx[0];var E8=this.F$[0];var Ex=this.FO[0];if(EG<E8)Ex=this.F$[0];else if(EG>
Ex)E8=this.FO[0];else if(this.Wk[0]<=1){E8=EG;Ex=EG;}else{var AcT=(Ex-EG)%this.Wk[
0];Ex=(EG-this.Wk[0])+AcT;E8=EG+AcT;if(Ex<this.F$[0])Ex=this.F$[0];if(E8>this.FO[
0])E8=this.FO[0];}if((E8-EG)<=(EG-Ex))EG=E8;else EG=Ex;if(EG!==this.Dx[0]){var I$=
EG-this.Dx[0];if(I$>0)this.EN=Math.sqrt((I$*2)*this.AcP)+20;if(I$<0)this.EN=-Math.
sqrt((-I$*2)*this.AcP)-20;this.Aff=(400-(this.EN*this.EN))/(2*I$);this.Aox=EG;}}
else{var ByR=this.EN*this.EN;var I$=ByR/(2*this.AcP);var EG=this.Dx[0];if(this.EN>
0)EG=EG+(I$|0);if(this.EN<0)EG=EG-(I$|0);if(EG>this.FO[0])EG=this.FO[0];else if(
EG<this.F$[0])EG=this.F$[0];var BdZ=EG;var E8=this.F$[0];var Ex=this.FO[0];if(EG<
E8)Ex=this.F$[0];else if(EG>Ex)E8=this.FO[0];else if(this.Wk[0]<=1){E8=EG;Ex=EG;
}else{var AcT=(Ex-EG)%this.Wk[0];Ex=(EG-this.Wk[0])+AcT;E8=EG+AcT;if(Ex<this.F$[
0])Ex=this.F$[0];if(E8>this.FO[0])E8=this.FO[0];}if(this.EN>0){if(Ex<=this.Dx[0]
)EG=E8;else if((EG-Ex)<(E8-EG))EG=Ex;else EG=E8;}else if(E8>=this.Dx[0])EG=Ex;else
if((EG-Ex)>(E8-EG))EG=E8;else EG=Ex;if(EG!==this.Dx[0]){I$=EG-this.Dx[0];if(EG!==
BdZ){var Aix=EG-BdZ;if(Aix>0)this.EN=this.EN+Math.sqrt((Aix*2)*this.AcP);if(Aix<
0)this.EN=this.EN-Math.sqrt((-Aix*2)*this.AcP);}if(this.EN>0)this.EN=this.EN+20;
if(this.EN<0)this.EN=this.EN-20;this.Aff=(400-(this.EN*this.EN))/(2*I$);this.Aox=
EG;}else this.EN=0;}if((this.Dx[1]<=this.F$[1])||(this.Dx[1]>=this.FO[1]))this.EO=
0;else if(!this.EO){var EH=this.Dx[1];var E8=this.F$[1];var Ex=this.FO[1];if(EH<
E8)Ex=this.F$[1];else if(EH>Ex)E8=this.FO[1];else if(this.Wk[1]<=1){E8=EH;Ex=EH;
}else{var AcT=(Ex-EH)%this.Wk[1];Ex=(EH-this.Wk[1])+AcT;E8=EH+AcT;if(Ex<this.F$[
1])Ex=this.F$[1];if(E8>this.FO[1])E8=this.FO[1];}if((E8-EH)<=(EH-Ex))EH=E8;else EH=
Ex;if(EH!==this.Dx[1]){var I$=EH-this.Dx[1];if(I$>0)this.EO=Math.sqrt((I$*2)*this.
AcP)+20;if(I$<0)this.EO=-Math.sqrt((-I$*2)*this.AcP)-20;this.Afg=(400-(this.EO*this.
EO))/(2*I$);this.Aoy=EH;}}else{var ByS=this.EO*this.EO;var I$=ByS/(2*this.AcP);var
EH=this.Dx[1];if(this.EO>0)EH=EH+(I$|0);if(this.EO<0)EH=EH-(I$|0);if(EH>this.FO[
1])EH=this.FO[1];else if(EH<this.F$[1])EH=this.F$[1];var Bd0=EH;var E8=this.F$[1
];var Ex=this.FO[1];if(EH<E8)Ex=this.F$[1];else if(EH>Ex)E8=this.FO[1];else if(this.
Wk[1]<=1){E8=EH;Ex=EH;}else{var AcT=(Ex-EH)%this.Wk[1];Ex=(EH-this.Wk[1])+AcT;E8=
EH+AcT;if(Ex<this.F$[1])Ex=this.F$[1];if(E8>this.FO[1])E8=this.FO[1];}if(this.EO>
0){if(Ex<=this.Dx[1])EH=E8;else if((EH-Ex)<(E8-EH))EH=Ex;else EH=E8;}else if(E8>=
this.Dx[1])EH=Ex;else if((EH-Ex)>(E8-EH))EH=E8;else EH=Ex;if(EH!==this.Dx[1]){I$=
EH-this.Dx[1];if(EH!==Bd0){var Aix=EH-Bd0;if(Aix>0)this.EO=this.EO+Math.sqrt((Aix
*2)*this.AcP);if(Aix<0)this.EO=this.EO-Math.sqrt((-Aix*2)*this.AcP);}if(this.EO>
0)this.EO=this.EO+20;if(this.EO<0)this.EO=this.EO-20;this.Afg=(400-(this.EO*this.
EO))/(2*I$);this.Aoy=EH;}else this.EO=0;}if(!!BM)this.AlI=BM.Bt;if(!!In)this.AlI=
In.Bt;this.AtE=this.AlI;this.AlK=this.Dx[0];this.AlL=this.Dx[1];this.ByT();return this;
},XR:function(C8,BD,N1,ZK,Acw,Acv){var B;if(!!ZK&&(ZK!==this))return null;if(this.
Bl>=33554432)return null;if((this.Bl>=16777216)&&!(this.Bl&(4096<<BD)))return null;
if(!this.AFu&&!!(Acv&0xC))return null;var Aw=A.lb(C8,this.M);if(!((Aw[0]>=Aw[2])||(
Aw[1]>=Aw[3]))){var P2=A.aaI(C8);var Fj=B9;if(P2[0]<Aw[0])Fj=[Aw[0]-P2[0],Fj[1]];
if(P2[0]>=Aw[2])Fj=[(Aw[2]-P2[0])-1,Fj[1]];if(P2[1]<Aw[1])Fj=[Fj[0],Aw[1]-P2[1]];
if(P2[1]>=Aw[3])Fj=[Fj[0],(Aw[3]-P2[1])-1];return A._NewObject(C.Auf,0).Initialize(
this,Fj);}return null;},A2o:function(){if(!!this.timer){A.z9([this,this.L8],this.
timer,0);this.timer=null;}},ByT:function(){this.timer=A._GetAutoObject(A.acl.AdI
);A.zV([this,this.L8],this.timer,0);},L8:function(G){var B;if(!this.timer)return;
var AtK=(this.timer.Bt-this.AlI)*0.001;var AtL=(this.timer.Bt-this.AtE)*0.001;var
By1=AtK*AtK;var By2=AtL*AtL;var Ah$=(this.Aff*AtK)+this.EN;var Aia=(this.Afg*AtL
)+this.EO;var Cy=[((((this.Aff*0.5)*By1)+(this.EN*AtK))+this.AlK)|0,((((this.Afg
*0.5)*By2)+(this.EO*AtL))+this.AlL)|0];if(this.Xe&&(AtK>=0.5)){Cy=[this.Aox,Cy[1
]];this.EN=0;this.Aff=0;this.AlK=Cy[0];this.Xe=false;}else if(this.Xe){var LA=1-
Math.pow(1-(AtK/0.5),5);Cy=[(this.AlK+((this.Aox-this.AlK)*LA))|0,Cy[1]];}if(this.
Xf&&(AtL>=0.5)){Cy=[Cy[0],this.Aoy];this.EO=0;this.Afg=0;this.AlL=Cy[1];this.Xf=
false;}else if(this.Xf){var LA=1-Math.pow(1-(AtL/0.5),5);Cy=[Cy[0],(this.AlL+((this.
Aoy-this.AlL)*LA))|0];}if(((this.EN>0)&&(Ah$<0))||((this.EN<0)&&(Ah$>0))){Ah$=0;
Cy=[this.Dx[0],Cy[1]];}if(((this.EO>0)&&(Aia<0))||((this.EO<0)&&(Aia>0))){Aia=0;
Cy=[Cy[0],this.Dx[1]];}if(!this.Xe&&(Cy[0]<this.F$[0])){this.AlK=Cy[0];this.Aox=
this.F$[0];this.AlI=this.timer.Bt;this.Xe=true;}else if(!this.Xe&&(Cy[0]>this.FO[
0])){this.AlK=Cy[0];this.Aox=this.FO[0];this.AlI=this.timer.Bt;this.Xe=true;}if(
!this.Xf&&(Cy[1]<this.F$[1])){this.AlL=Cy[1];this.Aoy=this.F$[1];this.AtE=this.timer.
Bt;this.Xf=true;}else if(!this.Xf&&(Cy[1]>this.FO[1])){this.AlL=Cy[1];this.Aoy=this.
FO[1];this.AtE=this.timer.Bt;this.Xf=true;}if(((!this.Xe&&!!this.EN)&&(Ah$>-20))&&(
Ah$<20)){Cy=[this.Aox,Cy[1]];this.EN=0;this.Aff=0;this.AlK=Cy[0];}if(((!this.Xf&&
!!this.EO)&&(Aia>-20))&&(Aia<20)){Cy=[Cy[0],this.Aoy];this.EO=0;this.Afg=0;this.
AlL=Cy[1];}if(!A.aaX(Cy,this.Dx)){this.A4d=A.abe(Cy,this.Dx);this.Dx=Cy;(B=this.
Atp)?B[1].call(B[0],this):null;(B=this.AER)?B[1].call(B[0],this):null;}if(((!this.
EN&&!this.EO)&&!this.Xe)&&!this.Xf){this.A2o();this.Za=false;(B=this.YR)?B[1].call(
B[0],this):null;}},ARX:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
Wk=E;},ARz:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A4U)return;this.A4U=E;if(
E<(1e-007))E=1e-007;this.AcP=E*10000;},_Init:function(aArg){C.Ek._Init.call(this
,aArg);this.__proto__=C.H0;this.T=0x10011B;},_Mark:function(D){var B;C.Ek._Mark.
call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJp
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atp)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AER)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.YR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BJ={
Ag:null,Lg:null,BK:null,DS:null,Apg:0,Bt:0,A86:0,Filter:148,CI:0,DI:0,Bv:true,Down:
false,AbO:false,Ny:false,Init:function(aArg){var B;var CW=(C.O.isPrototypeOf(B=this.
I)?B:null);if(!CW)throw new Error(Ae2);this.Ag=CW.AI8;CW.AI8=this;},GL:function(
CH){var B;if(!!CH&&CH.Bg0(this.Filter)){this.Down=CH.Down;this.CI=CH.CI;this.DI=
CH.DI;this.Bt=CH.Bt;this.Ny=false;if(CH.Down){this.A86=this.Apg;this.AbO=this.Apg>
0;if(this.AbO)(B=this.DS)?B[1].call(B[0],this):null;else(B=this.BK)?B[1].call(B[
0],this):null;if(!this.Ny)this.Apg=this.Apg+1;return!this.Ny;}if(!CH.Down){this.
AbO=this.Apg>1;this.A86=this.Apg-1;this.Apg=0;(B=this.Lg)?B[1].call(B[0],this):null;
return!this.Ny;}}return false;},_Init:function(aArg){this.__proto__=C.BJ;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Lg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BK)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};C.Auf={Cd:null,Aui:0,Dx:A.wf,Initialize:
function(Af,aOffset){this.Cd=Af;this.Dx=aOffset;this.Aui=(aOffset[0]*aOffset[0])+(
aOffset[1]*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=C.Auf;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::CursorHit"};C.A52={Ag:null,CW:null,_Init:function(aArg){this.__proto__=C.
A52;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.CW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::ModalContext"};C.
Aqz={Nq:null,extent:A.wg,A_:A.wg,isEmpty:false,_Init:function(aArg){this.__proto__=
C.Aqz;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Nq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.ACT={Aij:A.wf,Aii:A.wf,_Init:function(aArg){C.Aqz._Init.
call(this,aArg);this.__proto__=C.ACT;},_className:"Core::LayoutLineContext"};C.ACU={
AzN:A.wf,AzM:A.wf,Aij:A.wf,Aii:A.wf,_Init:function(aArg){C.Aqz._Init.call(this,aArg
);this.__proto__=C.ACU;},_className:"Core::LayoutQuadContext"};C.AMs={CW:null,Ag:
null,Rg:null,Rp:null,L6:null,Apd:null,_Init:function(aArg){this.__proto__=C.AMs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.CW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rg)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Rp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L6)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Apd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::DialogContext"};C.ATm={FD:null,B7:null,B6:null,Bby:false,BvE:function(){if(
!this.FD)return;var O4=this.FD;this.FD.OZ=null;this.FD=null;A.pe([this,this.A1C]
,this);O4.A6u(this);},Bxm:function(G){if(!!this.FD)return;if(!this.B6)return;this.
FD=this.B6;this.B6=this.B6.Ag;if(!!this.B6)this.B6.AH=null;else this.B7=null;this.
FD.Ag=null;this.Bby=true;this.FD.Sk(this);this.Bby=false;},BxJ:function(G){A.pe([
this,this.Bxm],this);},BxI:function(G){A.pe([this,this.BxJ],this);},A1C:function(
G){A.pe([this,this.BxI],this);},Be9:function(I8){if(!I8||!I8.OZ)return;if(I8.OZ!==
this)throw new Error(ZD);var Ber=false;if(this.FD===I8){this.FD=null;Ber=true;A.
pe([this,this.A1C],this);}else{if(!!I8.Ag)I8.Ag.AH=I8.AH;else this.B7=I8.AH;if(!
!I8.AH)I8.AH.Ag=I8.Ag;else this.B6=I8.Ag;I8.AH=null;I8.Ag=null;}I8.OZ=null;if(Ber
)I8.A6t(this);},A9b:function(I8,AZs){if(!I8)return;if(!!I8.OZ)throw new Error(WF
);I8.OZ=this;if(AZs){I8.Ag=this.B6;if(!!this.B6)this.B6.AH=I8;else this.B7=I8;this.
B6=I8;}else{I8.AH=this.B7;if(!!this.B7)this.B7.Ag=I8;else this.B6=I8;this.B7=I8;
}if(!this.FD)A.pe([this,this.A1C],this);},_Init:function(aArg){this.__proto__=C.
ATm;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};C.Akr={OZ:null,AH:null,Ag:null,A6u:function(AsO
){},A6t:function(AsO){},Sk:function(AsO){this.Al7();},Me:function(){if(!!this.OZ&&(
this.OZ.FD===this))this.OZ.BvE();},Al7:function(){if(!!this.OZ)this.OZ.Be9(this);
},APD:function(){return!!this.OZ&&(this.OZ.FD===this);},_Init:function(aArg){this.
__proto__=C.Akr;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.OZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Task"};C.ATk={As:null,AtG:null,Sk:function(AsO){this.AtG.
As=this.As;A.we(this.AtG,0);A.pe([this,this.Bxj],this);},Bxj:function(G){this.AtG.
As=null;this.AtG=null;this.As=null;this.Me();},_Init:function(aArg){C.Akr._Init.
call(this,aArg);this.__proto__=C.ATk;},_Mark:function(D){var B;C.Akr._Mark.call(
this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtG)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"};C.AwM={_Init:function(
){C.ATm._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Ag4={resource:null,K6:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.Ag4;this.Init(aArg
);A.h7++;},_Done:function(){this.K6();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={Mp:null,timer:
null,Bt:0,Period:1000,Vb:0,Bv:false,K6:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AJx:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},PC:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bv)this.AJx(this.Vb,E);},V8:function(E){if(E<0)E=0;if(E===this.Vb)return;
this.Vb=E;if(this.Bv)this.AJx(E,this.Period);},Ar:function(E){if(E===this.Bv)return;
this.Bv=E;if(E)this.AJx(this.Vb,this.Period);else this.AJx(0,0);this.Bt=this.AuL(
);},AuL:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.v$)|0;return ticksCount;
},Trigger:function(){var B;this.Bt=this.AuL();if(!this.Period)this.Ar(false);(B=
this.Mp)?B[1].call(B[0],this):null;},AwK:function(G){this.Ar(false);},StartTimer:
function(G){if(this.Bv)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.h7++;},_Done:function(){this.K6();this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mp)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bt={ASR:0,Avg:0,Ajr:0,Gz:0
,G9:0,Year:0,Ba8:function(Afc,AYW){if(AYW)switch(Afc){case 1:return A.aci.Bg9;case
2:return A.aci.Bf3;case 3:return A.aci.Bhq;case 4:return A.aci.BeP;case 5:return A.
aci.Bhu;case 6:return A.aci.Bha;case 7:return A.aci.Bg$;case 8:return A.aci.BeR;
case 9:return A.aci.Bl3;case 10:return A.aci.BhQ;case 11:return A.aci.BhP;case 12:
return A.aci.Bfu;default:return A.jV;}else switch(Afc){case 1:return A.aci.ACN;case
2:return A.aci.ABE;case 3:return A.aci.ACZ;case 4:return A.aci.AAF;case 5:return A.
aci.AC2;case 6:return A.aci.ACP;case 7:return A.aci.ACO;case 8:return A.aci.AAN;
case 9:return A.aci.AFj;case 10:return A.aci.ADd;case 11:return A.aci.ADb;case 12:
return A.aci.ABo;default:return A.jV;}},Ba6:function(A$G,AYW){if(AYW)switch(A$G){
case 1:return A.aci.BhB;case 2:return A.aci.Bnm;case 3:return A.aci.Bn0;case 4:return A.
aci.Bm9;case 5:return A.aci.Bge;case 6:return A.aci.BlW;case 0:return A.aci.BmW;
default:return A.jV;}else switch(A$G){case 1:return A.aci.BhA;case 2:return A.aci.
Bnl;case 3:return A.aci.BnZ;case 4:return A.aci.Bm8;case 5:return A.aci.Bgd;case
6:return A.aci.BlV;case 0:return A.aci.BmV;default:return A.jV;}},Ba5:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JF:function(){var d=this.Gz;var KV=this.G9;var C$=this.Year-((
KV<=2)?1:0);var AyE=(((C$>=0)?C$:C$-399)/400)|0;var AlS=C$-(AyE*400);var UO=(((((
153*(KV+((KV>2)?-3:9)))+2)/5)|0)+d)-1;var Aou=(((AlS*365)+((AlS/4)|0))-((AlS/100
)|0))+UO;var P4=((AyE*146097)+Aou)-719468;return(((P4*86400)+(this.Ajr*3600))+(this.
Avg*60))+this.ASR;},AEz:function(E){var B;E+=62162035200;if(E<0)E=0;var U1=Math.
trunc(E/86400)|0;var AyE=(((U1>=0)?U1:U1-146096)/146097)|0;var Aou=U1-(AyE*146097
);var AlS=((((Aou-((Aou/1460)|0))+((Aou/36524)|0))-((Aou/146096)|0))/365)|0;var C$=
AlS+(AyE*400);var UO=Aou-(((365*AlS)+((AlS/4)|0))-((AlS/100)|0));var A02=(((5*UO
)+2)/153)|0;var d=(UO-((((153*A02)+2)/5)|0))+1;var KV=A02+((A02<10)?3:-9);var BH=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=C$+((
KV<=2)?1:0);this.T3(KV);this.Li(d);this.Am8(BH+((BH<0)?24:0));this.Am$(P+((P<0)?
60:0));this.Anc(s+((s<0)?60:0));},YS:function(){if(this.G9===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G9===4)||(this.G9===6))||(this.G9===9))||(this.G9===11))return 30;else return 31;
},Bi1:function(){var B;var UO=this.Abp()-1;var As3=(6+this.Avq())%7;var Aow=((371+
As3)-UO)%7;if(this.G9===12){var d=this.Gz;if((d===31)&&(As3<3))return 0;if((d===
30)&&(As3<2))return 0;if((d===29)&&(As3<1))return 0;}if(Aow<=3)UO+=Aow;else UO-=(
7-Aow);if(UO<0){var d=this.Gz;var KV=this.G9;this.Year--;this.Li(31);this.T3(12);
UO=this.Abp()-1;As3=(6+this.Avq())%7;Aow=((371+As3)-UO)%7;if(Aow<=3)UO+=Aow;else
UO-=Aow;this.Year++;this.Li(d);this.T3(KV);}return(UO/7)|0;},Abp:function(){var B;
var d=this.Gz;var KV=this.G9;var C$=this.Year;var Afy=((!!!(C$%4)&&(!!(C$%100)||
!!!(C$%400)))?1:0);switch(KV){case 2:d+=31;break;case 3:d+=(59+Afy);break;case 4:
d+=(90+Afy);break;case 5:d+=(120+Afy);break;case 6:d+=(151+Afy);break;case 7:d+=(
181+Afy);break;case 8:d+=(212+Afy);break;case 9:d+=(243+Afy);break;case 10:d+=(273+
Afy);break;case 11:d+=(304+Afy);break;case 12:d+=(334+Afy);break;default:;}return d;
},Avq:function(){var B;var d=this.Gz;var KV=this.G9+((this.G9>2)?-2:10);var C$=this.
Year-((this.G9<=2)?1:0);var BZ=(C$/100)|0;C$%=100;d+=((((((((26*KV)-2)/10)|0)+C$
)+((C$/4)|0))+((BZ/4)|0))-(2*BZ));if(d>=0)return d%7;else return(7-(-d%7))%7;},Anc:
function(E){if(E<0)E=0;if(E>59)E=59;this.ASR=E;},Am$:function(E){if(E<0)E=0;if(E>
59)E=59;this.Avg=E;},Am8:function(E){if(E<0)E=0;if(E>23)E=23;this.Ajr=E;},Li:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gz=E;},T3:function(E){if(E<1)E=1;if(E>12)E=12;this.
G9=E;},Format:function(Ik){var result=A.jV;var inx=0;while(!!(Ik.charCodeAt(inx)||
0))if((Ik.charCodeAt(inx)||0)===0x25){var Z3=1;inx=inx+1;if((Ik.charCodeAt(inx)||
0)===0x23){inx=inx+1;Z3=0;}switch(Ik.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.Gz,2*Z3,10);break;case 0x48:result=result+A.abl(this.Ajr,2*Z3,10);break;
case 0x49:if(!(this.Ajr%12))result=result+WG;else result=result+A.abl(this.Ajr%12
,2*Z3,10);break;case 0x6D:result=result+A.abl(this.G9,2*Z3,10);break;case 0x4D:result=
result+A.abl(this.Avg,2*Z3,10);break;case 0x70:if(this.Ajr<12)result=result+A.aci.
Bex;else result=result+A.aci.Blm;break;case 0x53:result=result+A.abl(this.ASR,2*
Z3,10);break;case 0x77:result=result+A.abl(this.Avq(),Z3,10);break;case 0x79:result=
result+A.abl(this.Year%100,2*Z3,10);break;case 0x59:result=result+A.abl(this.Year
,4*Z3,10);break;case 0x25:result=result+ZE;break;case 0x6A:result=result+A.abl(this.
Abp(),3*Z3,10);break;case 0x57:result=result+A.abl(this.Bi1(),2*Z3,10);break;case
0x61:result=result+this.Ba6(this.Avq(),true);break;case 0x41:result=result+this.
Ba6(this.Avq(),false);break;case 0x62:result=result+this.Ba8(this.G9,true);break;
case 0x42:result=result+this.Ba8(this.G9,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ik.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(Acx,Afc,Bt1,Buf,Buw,BuP){this.Year=Acx;this.T3(Afc);this.
Li(Bt1);this.Am8(Buf);this.Am$(Buw);this.Anc(BuP);return this;},Initialize:function(
Ahz){this.AEz(Ahz);return this;},Bfy:function(Ahz){if(!Ahz)return A._NewObject(C.
Anz,0).Initialize(this.JF());return A._NewObject(C.Anz,0).Initialize(this.JF()-Ahz.
JF());},Bmx:function(AxZ){if(!AxZ)return this;return A._NewObject(C.Bt,0).Initialize(
this.JF()-AxZ.JF());},J:function(AxZ){if(!AxZ)return this;return A._NewObject(C.
Bt,0).Initialize(this.JF()+AxZ.JF());},_Init:function(aArg){this.__proto__=C.Bt;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.Anz={AFg:0,AC6:0,ACk:0,J5:0,JF:function(
){return(((this.J5*86400)+(this.ACk*3600))+(this.AC6*60))+this.AFg;},AEz:function(
E){var AJJ=1;this.J5=Math.trunc(E/86400)|0;if(E<0){E=-E;AJJ=-1;}this.ACk=AJJ*(Math.
trunc(E/3600)%24|0);this.AC6=AJJ*(Math.trunc(E/60)%60|0);this.AFg=AJJ*(E%60|0);}
,Initialize2:function(Bt2,Bug,Bux,BuS){this.J5=Bt2;this.ACk=Bug;this.AC6=Bux;this.
AFg=BuS;return this;},Initialize:function(Ahz){this.AEz(Ahz);return this;},_Init:
function(aArg){this.__proto__=C.Anz;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A9z={As:null,OZ:null,Trigger:function(BtW,AZs){var O4=A._NewObject(C.ATk,0);
O4.AtG=this;O4.As=BtW;this.OZ.A9b(O4,AZs);},_Init:function(aArg){this.__proto__=
C.A9z;this.OZ=A._GetAutoObject(C.AwM);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.OZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A9A={JA:null,Event:null,AQN:null,Atj:function(G){var B;if(
!this.Event)return;this.JA=this.Event.As;(B=this.AQN)?B[1].call(B[0],this):null;
this.JA=null;},BjL:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.Atj],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.Atj],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A9A;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AQN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BCT={Dl:0x1,BzG:0x2,BAN:0x4,BCL:0x8,Bv:0x10,HZ:0x20
,BAO:0x40,BBv:0x80,BAJ:0x100,BA$:0x200,BAx:0x400,BB7:0x800,Bg:0x1000,BCQ:0x2000,
BBR:0x4000,BBS:0x8000,AaH:0x10000,BBQ:0x20000,BCg:0x40000,BAo:0x80000,BB0:0x100000
,BAi:0x200000};C.Pv={BB8:0x1,BB9:0x2,BzC:0x4,BzD:0x8,BzE:0x10,BzB:0x20};C.Agl={None:
0,BCH:1,BzY:2,BBe:3,BCa:4,BCI:5,BCJ:6,BzZ:7,Bz0:8,BBg:9,BBf:10,BCc:11,BCb:12};C.
Auk={None:0,BCF:1,Left:2,BzW:3,Zf:4,A3K:5,BCG:6,Right:7,BzX:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BB_={BCZ:0x1,BCW:0x2,BCX:0x4,BCY:
0x8,BBi:0x10,BAQ:0x20};
C._Init=function(){C.AjL.__proto__=C.Cd;C.Y2.__proto__=C.Cd;C.Ek.__proto__=C.Cd;C.
O.__proto__=C.Ek;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.APU.__proto__=
C.Event;C.Aue.__proto__=C.Event;C.AdE.__proto__=C.Event;C.Ap1.__proto__=C.Event;
C.Z.__proto__=C.Ek;C.CG.__proto__=C.O;C.Dp.__proto__=C.O;C.Bi.__proto__=C.Y2;C.H0.
__proto__=C.Ek;C.ACT.__proto__=C.Aqz;C.ACU.__proto__=C.Aqz;C.ATk.__proto__=C.Akr;
};C._ReInit=function(){var B;if((B=C.AwM._this))B._ReInit(),C.AwM._ReInit.call(B
);};C.DB=function(D){var B;if((B=C.AwM._this)&&(B._cycle!=D))B._Done(C.AwM._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */