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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var A=index;var C={};
var B_=[0,0];var BH=[0,0,0,0];var EV="The view does not belong to this group";var
GS="The dialog component is already presented";var Jt="The dialog component is actually not presented";
var IL="No fader to perform the fade-in/out operation";var OK="Trying to use the same fader twice";
var PJ="Trying to fade-in/out a group which belongs to another owner";var N1="No view to restack";
var CJ="View is not in this group";var Fn="Sibling view does not belong to the group";
var Nb="No view to remove";var OL="No view to add";var KH="View already in a group";
var OM="Recursive invalidate during active update cycle.";var Nc=[-8,-8,9,9];var
ON="No group to end the modal state.";var Ss="The group is not modal.";var T_="No group to obtain the modal state.";
var Wa="The group serves already as the \'virtual keyboard\'.";var Wb="The group is already modal.";
var I$="View is not in the same group or it is not embedded within the Outline "+
"Box";var T$="The method SwitchToDialog() is not available in Core::VerticalList.";
var Wc="The method DismissDialog() is not available in Core::VerticalList.";var Wd=
"The method PresentDialog() is not available in Core::VerticalList.";var Zg="The method FadeGroup() is not available in Core::VerticalList.";
var St="The method RestackBehind() is not available in Core::VerticalList.";var Zh=
"The method RestackTop() is not available in Core::VerticalList.";var We="The method Restack() is not available in Core::VerticalList.";
var Ua="The method Remove() is not available in Core::VerticalList.";var Wf="The method AddBehind() is not available in Core::VerticalList.";
var QT="The method Add() is not available in Core::VerticalList.";var Wg="The Slide Touch Handler:";
var OO="is already connected with a view.";var PK="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Ub=[0,0,170,120];var Zi="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Wh="The method DismissDialog() is not available in Core::HorizontalList.";var
Zj="The method PresentDialog() is not available in Core::HorizontalList.";var Zk=
"The method FadeGroup() is not available in Core::HorizontalList.";var Wi="The method RestackBehind() is not available in Core::HorizontalList.";
var Wj="The method RestackTop() is not available in Core::HorizontalList.";var Su=
"The method Restack() is not available in Core::HorizontalList.";var Zl="The method Remove() is not available in Core::HorizontalList.";
var Zm="The method AddBehind() is not available in Core::HorizontalList.";var AbO=
"The method Add() is not available in Core::HorizontalList.";var Sv=[0,0,1,1];var
AbP="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var AeN="Trying to cancel a task not belonging to this queue!";var Zn="Trying to enqueue a task twice!";
var Wk="12";var Wl="%";
C.Cd={Af:null,AG:null,Ac:null,Em:null,U:0x103,JQ:0,Pu:0x14,Asp:function(BI,Ahl){}
,A69:function(E){if(this.JQ===E)return;this.JQ=E;if(!!this.Ac){var Ah$=this.Af;var
GW=0;while(!!Ah$&&(E>Ah$.JQ)){Ah$=Ah$.Af;GW=GW+1;}Ah$=this.AG;while(!!Ah$&&(E<Ah$.
JQ)){Ah$=Ah$.AG;GW=GW-1;}if(!!GW)this.Ac.Ki(this,GW);}},AV:function(E){var B;var
GW=E^this.Pu;if(!GW)return;this.Pu=E;if(!!this.Em&&!((this.U&0x400)===0x400)){this.
Ac.U=this.Ac.U|0x5000;A.ow([B=this.Ac,B.H$],this);this.Ac.Bg([0,0,(B=this.Ac.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Em&&((this.U&0x400)===0x400)){this.Em.Nu.U=this.Em.
Nu.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},Ib:function(
){var B8=this.Ac;while(!!B8){var Iq=(C.Root.isPrototypeOf(B8)?B8:null);if(!!Iq)return Iq;
B8=B8.Ac;}return null;},J_:function(CW,aClip,aOffset,Ce,aBlend){},GH:function(CK
){return null;},Xv:function(Dc,BG,N4,Ab4,Ab9,Ab8){return null;},Atc:function(Dc){
return Dc;},Atm:function(BI,MC){return B_;},Aml:function(aOffset,Ar1){},GetExtent:
function(){return BH;},C3:function(Ahn,Any){var B;if(((this.U&0x200)===0x200))Ahn=
Ahn&~0x400;var AZ4=(this.U&~Any)|Ahn;var AkH=AZ4^this.U;this.U=AZ4;if(!!this.Ac&&
!!(AkH&0x14)){var A$v=((this.U&0x14)===0x14);if(A$v&&!this.Ac.AY)this.Ac.A$(this
);if(!A$v&&(this.Ac.AY===this))this.Ac.A$(this.Ac.AAW(this,0x14));}if(!!this.Ac&&
!!(AkH&0x403))this.Ac.Bg(this.GetExtent());if(((!!this.Em&&!!this.Ac)&&((AZ4&0x400
)===0x400))&&((AkH&0x1)===0x1)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.
ow([B=this.Ac,B.H$],this);}if(!!this.Ac&&((AkH&0x400)===0x400)){this.Em=null;this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},_Init:function(
aArg){this.__proto__=C.Cd;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.Ajn={Et:A.vw,Ek:A.vw,Asp:function(BI,Ahl){var Ar=A._NewObject(
C.AB8,0);this.Em=null;Ar.extent=this.getExtent();Ar.A8=BI;Ar.Nu=Ahl;Ar.AhZ=this.
Ek;Ar.Ah0=this.Et;this.Em=Ar;},Atm:function(BI,MC){var B;var EM=this.Pu;var Ar=(
C.AB8.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var
x2=Ar.extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=x2-x1;
var BL=y2-y1;var tmp;if(!MC){var Nx=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];
y1=y1-Ar.A8[1];if(Nx[0]!==J0[0]){var HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);
var P2=((EM&0x1)===0x1);if(!HK&&(P2||!HL))x1=((x1*J0[0])/Nx[0])|0;if(!HL&&(P2||!
HK)){x2=x2-Ar.A8[0];x2=((x2*J0[0])/Nx[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=
x1+BI[0];x2=x2+BI[2];if(!P2){if(HK&&!HL)x2=x1+BU;else if(!HK&&HL)x1=x2-BU;else{x1=
x1+((((x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];
}if(Nx[1]!==J0[1]){var HM=((EM&0x10)===0x10);var HJ=((EM&0x20)===0x20);var P3=((
EM&0x2)===0x2);if(!HM&&(P3||!HJ))y1=((y1*J0[1])/Nx[1])|0;if(!HJ&&(P3||!HM)){y2=y2-
Ar.A8[1];y2=((y2*J0[1])/Nx[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=
y2+BI[3];if(!P3){if(HM&&!HJ)y2=y1+BL;else if(!HM&&HJ)y1=y2-BL;else{y1=y1+((((y2-
y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(
MC){case 3:{x1=BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=
BI[1];y2=y1+BL;}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MC===3)||(MC===
4)){var HM=((EM&0x10)===0x10);var HJ=((EM&0x20)===0x20);var P3=((EM&0x2)===0x2);
if(P3){y1=BI[1];y2=BI[3];}else if(HM&&!HJ){y1=BI[1];y2=y1+BL;}else if(HJ&&!HM){y2=
BI[3];y1=y2-BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MC===1)||(
MC===2)){var HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);var P2=((EM&0x1)===0x1);
if(P2){x1=BI[0];x2=BI[2];}else if(HK&&!HL){x1=BI[0];x2=x1+BU;}else if(HL&&!HK){x2=
BI[2];x1=x2-BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(
x1>=x2)||(y1>=y2);BU=x2-x1;BL=y2-y1;if(Ar.Ah0[0]<Ar.AhZ[0]){tmp=x1;x1=x2-1;x2=tmp-
1;}if(Ar.Ah0[1]<Ar.AhZ[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-
y1)===1)y2=y1;if(((this.U&0x100)===0x100)){this.Ek=[x1,y1];this.Et=[x2,y2];}else{
this.D5([x1,y1]);this.DN([x2,y2]);this.Em=Ar;}return[BU,BL];},Aml:function(aOffset
,Ar1){if(Ar1){this.Ek=A.aak(this.Ek,aOffset);this.Et=A.aak(this.Et,aOffset);}else{
this.D5(A.aak(this.Ek,aOffset));this.DN(A.aak(this.Et,aOffset));}},GetExtent:function(
){if(!!this.Em&&this.Em.isEmpty)return BH;return this.getExtent();},getExtent:function(
){var x1=this.Ek[0];var y1=this.Ek[1];var x2=this.Et[0];var y2=this.Et[1];var BU=
x2-x1;var BL=y2-y1;var tmp;if(BU<0)BU=-BU;if(BL<0)BL=-BL;if(BU>=BL){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(BL>=BU){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DN:function(
E){var B;if(A.z8(E,this.Et))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());this.Em=null;this.Et=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000
)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$
],this);}},D5:function(E){var B;if(A.z8(E,this.Ek))return;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Em=null;this.Ek=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===
0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|
0x4000;A.ow([B=this.Ac,B.H$],this);}},_Init:function(aArg){C.Cd._Init.call(this,
aArg);this.__proto__=C.Ajn;},_className:"Core::LineView"};C.YR={Kh:A.vw,Mv:A.vw,
Et:A.vw,Ek:A.vw,Asp:function(BI,Ahl){var Ar=A._NewObject(C.AB9,0);this.Em=null;Ar.
extent=this.GetExtent();Ar.A8=BI;Ar.Nu=Ahl;Ar.AhZ=this.Ek;Ar.Ah0=this.Et;Ar.AyZ=
this.Mv;Ar.Ay0=this.Kh;this.Em=Ar;},Atm:function(BI,MC){var B;var EM=this.Pu;var
Ar=(C.AB9.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[
1];var x2=Ar.extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=
x2-x1;var BL=y2-y1;if(!MC){var Nx=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];y1=
y1-Ar.A8[1];if(Nx[0]!==J0[0]){var HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);var
P2=((EM&0x1)===0x1);if(!HK&&(P2||!HL))x1=((x1*J0[0])/Nx[0])|0;if(!HL&&(P2||!HK)){
x2=x2-Ar.A8[0];x2=((x2*J0[0])/Nx[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=x1+BI[
0];x2=x2+BI[2];if(!P2){if(HK&&!HL)x2=x1+BU;else if(!HK&&HL)x1=x2-BU;else{x1=x1+((((
x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];}if(Nx[
1]!==J0[1]){var HM=((EM&0x10)===0x10);var HJ=((EM&0x20)===0x20);var P3=((EM&0x2)===
0x2);if(!HM&&(P3||!HJ))y1=((y1*J0[1])/Nx[1])|0;if(!HJ&&(P3||!HM)){y2=y2-Ar.A8[1];
y2=((y2*J0[1])/Nx[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];
if(!P3){if(HM&&!HJ)y2=y1+BL;else if(!HM&&HJ)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2
)|0);y2=y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MC){case
3:{x1=BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=BI[1];y2=
y1+BL;}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MC===3)||(MC===4)){var
HM=((EM&0x10)===0x10);var HJ=((EM&0x20)===0x20);var P3=((EM&0x2)===0x2);if(P3){y1=
BI[1];y2=BI[3];}else if(HM&&!HJ){y1=BI[1];y2=y1+BL;}else if(HJ&&!HM){y2=BI[3];y1=
y2-BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MC===1)||(MC===2)
){var HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);var P2=((EM&0x1)===0x1);if(P2){
x1=BI[0];x2=BI[2];}else if(HK&&!HL){x1=BI[0];x2=x1+BU;}else if(HL&&!HK){x2=BI[2];
x1=x2-BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(x1>=x2
)||(y1>=y2);BU=(x2-x1)-1;BL=(y2-y1)-1;var AhF=Ar.extent[0];var AhH=Ar.extent[1];
var Afc=(Ar.extent[2]-AhF)-1;var Afb=(Ar.extent[3]-AhH)-1;if(!Afc)Afc=1;if(!Afb)
Afb=1;if(((this.U&0x100)===0x100)){this.Ek=[x1+((((Ar.AhZ[0]-AhF)*BU)/Afc)|0),y1+((((
Ar.AhZ[1]-AhH)*BL)/Afb)|0)];this.Et=[x1+((((Ar.Ah0[0]-AhF)*BU)/Afc)|0),y1+((((Ar.
Ah0[1]-AhH)*BL)/Afb)|0)];this.Mv=[x1+((((Ar.AyZ[0]-AhF)*BU)/Afc)|0),y1+((((Ar.AyZ[
1]-AhH)*BL)/Afb)|0)];this.Kh=[x1+((((Ar.Ay0[0]-AhF)*BU)/Afc)|0),y1+((((Ar.Ay0[1]-
AhH)*BL)/Afb)|0)];}else{this.D5([x1+((((Ar.AhZ[0]-AhF)*BU)/Afc)|0),y1+((((Ar.AhZ[
1]-AhH)*BL)/Afb)|0)]);this.DN([x1+((((Ar.Ah0[0]-AhF)*BU)/Afc)|0),y1+((((Ar.Ah0[1
]-AhH)*BL)/Afb)|0)]);this.KA([x1+((((Ar.AyZ[0]-AhF)*BU)/Afc)|0),y1+((((Ar.AyZ[1]-
AhH)*BL)/Afb)|0)]);this.KB([x1+((((Ar.Ay0[0]-AhF)*BU)/Afc)|0),y1+((((Ar.Ay0[1]-AhH
)*BL)/Afb)|0)]);this.Em=Ar;}return[BU+1,BL+1];},Aml:function(aOffset,Ar1){if(Ar1
){this.Ek=A.aak(this.Ek,aOffset);this.Et=A.aak(this.Et,aOffset);this.Mv=A.aak(this.
Mv,aOffset);this.Kh=A.aak(this.Kh,aOffset);}else{this.D5(A.aak(this.Ek,aOffset));
this.DN(A.aak(this.Et,aOffset));this.KA(A.aak(this.Mv,aOffset));this.KB(A.aak(this.
Kh,aOffset));}},GetExtent:function(){if(!!this.Em&&this.Em.isEmpty)return BH;var
x1=this.Ek[0];var y1=this.Ek[1];var x2=this.Mv[0];var y2=this.Mv[1];if((((this.Kh[
0]!==x1)||(this.Et[1]!==y1))||(this.Et[0]!==x2))||(this.Kh[1]!==y2)){if(this.Et[
0]<x1)x1=this.Et[0];if(this.Mv[0]<x1)x1=this.Mv[0];if(this.Kh[0]<x1)x1=this.Kh[0
];if(this.Et[1]<y1)y1=this.Et[1];if(this.Mv[1]<y1)y1=this.Mv[1];if(this.Kh[1]<y1
)y1=this.Kh[1];if(this.Ek[0]>x2)x2=this.Ek[0];if(this.Et[0]>x2)x2=this.Et[0];if(
this.Kh[0]>x2)x2=this.Kh[0];if(this.Ek[1]>y2)y2=this.Ek[1];if(this.Et[1]>y2)y2=this.
Et[1];if(this.Kh[1]>y2)y2=this.Kh[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;
}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},KB:function(E){var B;
if(A.z8(E,this.Kh))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));this.Em=null;this.Kh=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},KA:function(
E){var B;if(A.z8(E,this.Mv))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());this.Em=null;this.Mv=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000
)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$
],this);}},DN:function(E){var B;if(A.z8(E,this.Et))return;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Em=null;this.Et=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===
0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|
0x4000;A.ow([B=this.Ac,B.H$],this);}},D5:function(E){var B;if(A.z8(E,this.Ek))return;
if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Em=null;this.
Ek=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((!!this.
Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.U=this.U|0x800;
this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},AOY:function(KK){var Ho=
A.aan(4,A.vw,null);var P=0;var H9=3;var AZC=false;var AZD=false;Ho.Set(0,this.Ek
);Ho.Set(1,this.Et);Ho.Set(2,this.Mv);Ho.Set(3,this.Kh);while(P<4){var Bc1=Ho.Get(
P)[0];var AJs=Ho.Get(P)[1];var Byj=Ho.Get(H9)[0];var A1C=Ho.Get(H9)[1];if(((AJs>
KK[1])!==(A1C>KK[1]))||((AJs<KK[1])!==(A1C<KK[1]))){var FY=((((Byj-Bc1)*(KK[1]-AJs
))/(A1C-AJs))|0)+Bc1;if(KK[0]>FY)AZC=!AZC;if(KK[0]<FY)AZD=!AZD;}H9=P;P=P+1;}return AZC||
AZD;},Bfr:function(){return((((this.Ek[0]===this.Kh[0])&&(this.Et[0]===this.Mv[0
]))&&(this.Ek[1]===this.Et[1]))&&(this.Mv[1]===this.Kh[1]))||((((this.Ek[0]===this.
Et[0])&&(this.Mv[0]===this.Kh[0]))&&(this.Ek[1]===this.Kh[1]))&&(this.Et[1]===this.
Mv[1]));},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.YR;},
_className:"Core::QuadView"};C.EC={M:A.vx,Asp:function(BI,Ahl){var Ar=A._NewObject(
C.ApX,0);Ar.extent=this.M;Ar.A8=BI;Ar.Nu=Ahl;this.Em=Ar;},Atm:function(BI,MC){var
B;var EM=this.Pu;var Ar=this.Em;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=x2-x1;var BL=
y2-y1;if(!MC){var Nx=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];y1=y1-Ar.A8[1];
if(Nx[0]!==J0[0]){var HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);var P2=((EM&0x1
)===0x1);if(!HK&&(P2||!HL))x1=((x1*J0[0])/Nx[0])|0;if(!HL&&(P2||!HK)){x2=x2-Ar.A8[
0];x2=((x2*J0[0])/Nx[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[
2];if(!P2){if(HK&&!HL)x2=x1+BU;else if(!HK&&HL)x1=x2-BU;else{x1=x1+((((x2-x1)-BU
)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];}if(Nx[1]!==J0[1
]){var HM=((EM&0x10)===0x10);var HJ=((EM&0x20)===0x20);var P3=((EM&0x2)===0x2);if(
!HM&&(P3||!HJ))y1=((y1*J0[1])/Nx[1])|0;if(!HJ&&(P3||!HM)){y2=y2-Ar.A8[1];y2=((y2
*J0[1])/Nx[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];if(!P3
){if(HM&&!HJ)y2=y1+BL;else if(!HM&&HJ)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MC){case 3:{x1=
BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=BI[1];y2=y1+BL;
}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MC===3)||(MC===4)){var HM=((
EM&0x10)===0x10);var HJ=((EM&0x20)===0x20);var P3=((EM&0x2)===0x2);if(P3){y1=BI[
1];y2=BI[3];}else if(HM&&!HJ){y1=BI[1];y2=y1+BL;}else if(HJ&&!HM){y2=BI[3];y1=y2-
BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MC===1)||(MC===2)){var
HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);var P2=((EM&0x1)===0x1);if(P2){x1=BI[
0];x2=BI[2];}else if(HK&&!HL){x1=BI[0];x2=x1+BU;}else if(HL&&!HK){x2=BI[2];x1=x2-
BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.Em=Ar;}return[x2-x1,y2-y1];},Aml:function(aOffset,Ar1){if(Ar1)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Ac&&((this.U&0x1)===0x1
))this.Ac.Bg(this.M);this.Em=null;this.M=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000
)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}
,_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.EC;},_className:
"Core::RectView"};C.O={B7:null,B4:null,AIx:null,HO:null,Im:null,WH:null,AoF:null
,AY:null,GM:255,Init:function(aArg){this.Am();},J_:function(CW,aClip,aOffset,Ce,
aBlend){var B;Ce=((Ce+1)*this.GM)>>8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.
HO||(CW.Dj===this))this.A$m(CW,aClip,A.aak(aOffset,this.M.slice(0,2)),Ce,aBlend);
else{var BK=255|(255<<8)|(255<<16)|((Ce&0xFF)<<24);this.HO.Update();CW.A2V(aClip
,this.HO,0,A.aam(this.M,aOffset),B_,BK,BK,BK,BK,aBlend);}},Xv:function(Dc,BG,N4,
Ab4,Ab9,Ab8){var B;var W=this.B4;var An8=null;var AD=BH;var J1=null;var AZW=!!this.
WH&&(!!this.WH.FF||!!this.WH.B7);if(((B=A.kz(Dc,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;Dc=A.aal(Dc,this.M.slice(0,2));if(!!Ab9){W=Ab9;while(!!W&&(W.Ac!==this
))W=W.Ac;}while(!!W){if(((W.U&0x400)===0x400)&&!J1){J1=W.AG;while(!!J1&&!((J1.U&
0x200)===0x200))J1=J1.AG;if(!!J1)AD=A.kz(Dc,J1.GetExtent());else AD=BH;}if(J1===
W){J1=null;AD=BH;}if((((((W.U&0x8)===0x8)&&((W.U&0x10)===0x10))&&!((W.U&0x40000)===
0x40000))&&!((W.U&0x20000)===0x20000))&&(!((W.U&0x10000)===0x10000)||((this.Im.Dj===
W)&&!AZW))){var extent=W.GetExtent();var AH0=Ab4;var AnS=null;if(AH0===W)AH0=null;
if(((W.U&0x400)===0x400)){if(!(((B=A.kz(extent,AD))[0]>=B[2])||(B[1]>=B[3])))AnS=
W.Xv(AD,BG,N4,AH0,Ab9,Ab8);}else if(!(((B=A.kz(extent,Dc))[0]>=B[2])||(B[1]>=B[3
]))||(Ab4===W))AnS=W.Xv(Dc,BG,N4,AH0,Ab9,Ab8);W=W.AG;if(!!AnS){if(!An8||((AnS.Atw<
An8.Atw)&&(AnS.Atw>=0)))An8=AnS;if(!AnS.Atw)W=null;}}else W=W.AG;Ab9=null;}return An8;
},Atc:function(Dc){var B;var F;var W=this.B7;var MF=BH;var AyT=true;var result=(
Dc=F=A.aal(Dc,this.M.slice(0,2)),F);while(!!W){if(((W.U&0x200)===0x200)){var AyS=(
C.Y.isPrototypeOf(W)?W:null);MF=A.kz(Dc,AyS.M);AyT=((AyS.U&0x1)===0x1);}if(((W.U&
0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyT){var AD=A.kz(W.GetExtent(),MF);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atc(AD));}}else{var AD=A.
kz(W.GetExtent(),Dc);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atc(
AD));}}W=W.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},C3:function(
Ahn,Any){var B;var ZN=this.U;C.EC.C3.call(this,Ahn,Any);var AkH=this.U^ZN;if(!!this.
AY&&((AkH&0x40)===0x40)){if(((this.U&0x40)===0x40))this.AY.C3(0x40,0x0);else this.
AY.C3(0x0,0x40);}if(!!this.Im&&((AkH&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((
this.Im.Dj.U&0x14)===0x14))this.Im.Dj.C3(0x40,0x0);else this.Im.Dj.C3(0x0,0x40);
}if(!!AkH){this.U=this.U|0x8000;A.ow([this,this.H$],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var Ak4=[(B=this.M)[2]-B[0],B[3]-B[1]];var AIE=[E[2]-E[
0],E[3]-E[1]];var AoM=!A.z8(Ak4,AIE);if(AoM&&!!this.HO){this.HO.Aqq(AIE);A.vv(this
,0);A.vv(this.HO,0);}C.EC.G.call(this,E);if((AoM&&(Ak4[0]>0))&&(Ak4[1]>0)){var A8=[
].concat(B_,Ak4);var W=this.B7;while(!!W){if((!W.Em&&(W.Pu!==0x14))&&!((W.U&0x400
)===0x400))W.Asp(A8,null);W=W.Af;}}if(AoM){this.U=this.U|0x5000;A.ow([this,this.
H$],this);}},A0S:function(CK){var Baf=(C.KeyEvent.isPrototypeOf(CK)?CK:null);var
DY=this.AIx;if(!Baf)return null;while(!!DY&&(!DY.Bw||!DY.GH(Baf)))DY=DY.Af;return DY;
},Bx5:function(H){if(!!this.HO){this.HO.Dj=this;var AD=A.aal(this.Atc(A.aam(this.
HO.Qf,this.M.slice(0,2))),this.M.slice(0,2));this.HO.AtR(AD,AD,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A$m(this.HO,AD,B_,255,true);this.HO.Dj=null;}
},A$m:function(CW,aClip,aOffset,Ce,aBlend){var B;var W=this.B7;var MF=BH;var AyT=
true;this.Beo(CW,aClip,aOffset,Ce,aBlend);while(!!W){if(((W.U&0x200)===0x200)){var
AyS=(C.Y.isPrototypeOf(W)?W:null);MF=A.kz(aClip,A.aam(AyS.M,aOffset));AyT=((AyS.
U&0x1)===0x1);}if(((W.U&0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyT){var AD=A.
kz(A.aam(W.GetExtent(),aOffset),MF);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW
,AD,aOffset,Ce,aBlend);}}else{var AD=A.kz(A.aam(W.GetExtent(),aOffset),aClip);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW,AD,aOffset,Ce,aBlend);}}W=W.Af;}this.Ber(
CW,aClip,aOffset,Ce,aBlend);},Bb4:function(){var B;var AZs=((this.U&0x1000)===0x1000
);var AhM=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var ZB=false;var Acp=BH;var KM=BH;var
ZC=B_;var Asl=0;var Asm=0;var Ask=0;var PW=0;var W=this.B4;var J1=null;var AkW=null;
while(!!W){if(((W.U&0x800)===0x800)){ZB=true;W.U=W.U&~0x800;}if(ZB&&((W.U&0x200)===
0x200)){ZB=false;if(!!(C.Y.isPrototypeOf(W)?W:null).Af8)W.U=W.U|0x1000;}W=W.AG;}
ZB=false;W=this.B7;if(AZs){this.U=this.U&~0x1000;AZs=!((AhM[0]>=AhM[2])||(AhM[1]>=
AhM[3]));}this.U=this.U|0x2000;while(!!W){if(!AkW&&(Ask!==PW)){var AcM=W;var AI0=
0;var Azc=Acp[2]-Acp[0];var Axx=Acp[3]-Acp[1];var AHO=0;var AoY=B_;do if(((AcM.U&
0x200)===0x200))AcM=null;else if(((AcM.U&0x401)===0x401)){AoY=[(B=AcM.GetExtent(
))[2]-B[0],B[3]-B[1]];if((PW===3)||(PW===4))Azc=Azc-AoY[0];if((PW===1)||(PW===2)
)Axx=Axx-AoY[1];if(!AkW||((Azc>=0)&&(Axx>=0))){AkW=AcM;AcM=AcM.Af;if((PW===3)||(
PW===4)){Azc=Azc-Asl;if(AoY[1]>AI0)AI0=AoY[1];}if((PW===1)||(PW===2)){Axx=Axx-Asm;
if(AoY[0]>AHO)AHO=AoY[0];}}else AcM=null;}else AcM=AcM.Af;while(!!AcM);if(!AkW)AkW=
J1;KM=Acp;switch(Ask){case 9:case 11:KM=[].concat(KM.slice(0,3),KM[1]+AI0);break;
case 10:case 12:KM=A.aaS(KM,KM[3]-AI0);break;case 5:case 7:KM=A.aaQ(KM,KM[0]+AHO
);break;case 6:case 8:KM=[].concat(KM[2]-AHO,KM.slice(1,4));break;default:;}}if(((
W.U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nu!==J1))W.Em=null;if((!W.Em&&ZB)&&((W.Pu!==
0x14)||!!PW))W.Asp(KM,J1);}if(!!W.Em){if(AZs&&!((W.U&0x400)===0x400))W.Atm(AhM,0
);if(ZB&&((W.U&0x400)===0x400)){var CZ=W.Atm(A.aam(KM,ZC),PW);if(((W.U&0x1)===0x1
)){var Bm=B_;switch(PW){case 3:Bm=[CZ[0]+Asl,Bm[1]];break;case 4:Bm=[-CZ[0]-Asl,
Bm[1]];break;case 1:Bm=[Bm[0],CZ[1]+Asm];break;case 2:Bm=[Bm[0],-CZ[1]-Asm];break;
default:;}ZC=A.aak(ZC,Bm);}}}if(((W.U&0x200)===0x200)){if(ZB)A.ow(J1.Ej,J1);ZB=((
W.U&0x1000)===0x1000);J1=(C.Y.isPrototypeOf(W)?W:null);if(ZB){W.U=W.U&~0x1000;Ask=
J1.Af8;PW=Ask;Acp=A.aam(J1.M,J1.Bn);KM=Acp;ZC=B_;Asl=J1.Space+J1.ASo;Asm=J1.Space;
ZB=!((Acp[0]>=Acp[2])||(Acp[1]>=Acp[3]));AkW=null;switch(Ask){case 9:case 10:PW=
3;break;case 11:case 12:PW=4;break;case 5:case 6:PW=1;break;case 7:case 8:PW=2;break;
default:;}}if(ZB)this.Bg(J1.M);}if(W===AkW){switch(Ask){case 9:case 11:ZC=[0,(ZC[
1]+(KM[3]-KM[1]))+Asm];break;case 10:case 12:ZC=[0,(ZC[1]-(KM[3]-KM[1]))-Asm];break;
case 5:case 7:ZC=[(ZC[0]+(KM[2]-KM[0]))+Asl,0];break;case 6:case 8:ZC=[(ZC[0]-(KM[
2]-KM[0]))-Asl,0];break;default:;}AkW=null;}W=W.Af;}if(ZB)A.ow(J1.Ej,J1);this.U=
this.U&~0x2000;this.Bf([AhM[2]-AhM[0],AhM[3]-AhM[1]]);},H$:function(H){var B;var
Byc=((this.U&0x1000)===0x1000);if(((this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;
this.Bb4();}if(((this.U&0x8000)===0x8000)||Byc){this.U=this.U&~0x8000;this.Ag(this.
U);}},A$:function(E){var B;if(!!E&&(E.Ac!==this))throw new Error(EV);if(!!E&&!((
E.U&0x14)===0x14))E=null;if(!!E&&((E.U&0x10000)===0x10000))E=null;if(E===this.AY
)return;if(!!this.AY)this.AY.C3(0x0,0x60);this.AY=E;if(!!E){if(((this.U&0x40)===
0x40))E.C3(0x60,0x0);else E.C3(0x20,0x0);}},A9F:function(An){this.A$(An);},AP_:function(
){return!!this.HO;},Aqk:function(E){var B;if(!!this.HO===E)return;if(E){this.HO=
A._NewObject(A.Graphics.Canvas,0);this.HO.Aqq([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
HO.ACy=[this,this.Bx5];}else{this.HO.ACy=null;this.HO.Aqq(B_);this.HO=null;}if(!
!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.vv(this,0);},A5u:function(){
var B;return((this.U&0x10)===0x10);},Ap:function(E){if(E)this.C3(0x10,0x0);else this.
C3(0x0,0x10);},DD:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GM)return;
this.GM=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},AXu:function(An
){this.DD(An);},Ai:function(E){if(E)this.C3(0x400,0x0);else this.C3(0x0,0x400);}
,Bh8:function(E){if(E)this.C3(0x2,0x0);else this.C3(0x0,0x2);},E$:function(){var
B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C3(0x1,0x0);else this.C3(
0x0,0x1);},Ber:function(CW,aClip,aOffset,Ce,aBlend){},Beo:function(CW,aClip,aOffset
,Ce,aBlend){},GetMinimalSize:function(){return B_;},ASv:function(Ii,N3,Wr,SB,SC,
Ahm,OT,Q0,Lm,Lk,Ll){var B;if(!this.Im){this.AjS(Ii,N3,Wr,SB,SC,null,null,Lm,Lk,Ll
);return;}var Ak3=this.Im;var KT=Ak3.Af;if(((Ii.U&0x10000)===0x10000)&&(this.Im.
Dj!==Ii))throw new Error(GS);var Acw=A._NewObject(C.ALL,0);var Q6=Ak3.Q6;var Re=
null;var L9=null;if(!!KT){Re=KT.Re;L9=KT.L9;}if(!!KT&&!!Ak3.AoE)Re=Ak3.AoE;if(!!
KT&&!!OT)L9=OT;if(!!Ahm)Q6=Ahm;if(!N3)N3=A._GetAutoObject(A.abm.AvV);if(!Wr)Wr=N3;
if(!SC)SC=SB;if(!SB)SB=SC;Acw.Q6=Wr;Acw.L9=SB;Acw.Re=SC;Acw.AoE=Q0;Acw.Dj=Ii;Acw.
Af=this.Im.Af;this.Im.Af=null;this.Im=Acw;if(this.AY===Ii)this.A$(null);Ak3.Dj.C3(
0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ii.U&0x4)===0x4))Ii.C3(0x10040,0x0);else
Ii.C3(0x10000,0x0);if(!!L9){this.NG(KT.Dj,L9.Add(),null,null,Ll);this.NG(Ak3.Dj,
Q6.RE(),null,null,true);this.NG(Acw.Dj,N3.RF(),Lm,Lk,true);}else if(!!Re){this.NG(
KT.Dj,Re.Ade(),null,null,Ll);this.NG(Ak3.Dj,Q6.RE(),null,null,true);this.NG(Acw.
Dj,N3.RF(),Lm,Lk,true);}else if(!!Q6){this.NG(Ak3.Dj,Q6.RE(),null,null,Ll);this.
NG(Acw.Dj,N3.RF(),Lm,Lk,true);}else this.NG(Acw.Dj,N3.RF(),Lm,Lk,Ll);},Apk:function(
Ii,Ahm,OT,Q0,Lm,Lk,Ll){var B;if(!this.Im)return;if(!Ii)return;var Ko=this.Im;var
KT=this.Im.Af;var AsF=null;while((!!Ko&&(Ko.Dj!==Ii))&&!!Ko.Af){AsF=Ko;Ko=KT;KT=
Ko.Af;}if(!Ko||(Ko.Dj!==Ii))throw new Error(Jt);if(!AsF){this.Im=KT;Ko.Af=null;}
else{AsF.Af=KT;Ko.Af=null;}Ko.Dj.C3(0x0,0x10040);if(((((this.U&0x40)===0x40)&&!!
KT)&&!AsF)&&((KT.Dj.U&0x4)===0x4))KT.Dj.C3(0x40,0x0);var Q6=Ko.Q6;var Re=null;var
L9=null;if(!!KT)Re=KT.Re;if(!!KT&&!!Ko.AoE)Re=Ko.AoE;if(!!KT&&!!Q0)Re=Q0;if(!!AsF&&
!!KT)L9=KT.L9;if((!!AsF&&!!KT)&&!!OT)L9=OT;if(!!Ahm)Q6=Ahm;if(!!L9){this.NG(KT.Dj
,L9.Add(),null,null,Ll);this.NG(Ko.Dj,Q6.RE(),Lm,Lk,true);}else if(!!Re){this.NG(
KT.Dj,Re.Ade(),null,null,Ll);this.NG(Ko.Dj,Q6.RE(),Lm,Lk,true);}else this.NG(Ko.
Dj,Q6.RE(),Lm,Lk,Ll);},AjS:function(Ii,N3,Wr,SB,SC,OT,Q0,Lm,Lk,Ll){var B;if(!Ii)
return;if(!!this.Im&&(this.Im.Dj===Ii)){this.ASv(Ii,N3,Wr,SB,SC,null,OT,Q0,Lm,Lk
,Ll);return;}if(((Ii.U&0x10000)===0x10000))throw new Error(GS);var Ko=A._NewObject(
C.ALL,0);if(!!this.Im&&!this.Im.L9){if(!Q0)Q0=OT;if(!OT)OT=Q0;}var L9=null;if(!!
this.Im)L9=this.Im.L9;if(!!this.Im&&!!OT)L9=OT;if(!N3)N3=A._GetAutoObject(A.abm.
AvV);if(!Wr)Wr=N3;if(!SC)SC=SB;if(!SB)SB=SC;Ko.Q6=Wr;Ko.L9=SB;Ko.Re=SC;Ko.AoE=Q0;
if(this.AY===Ii)this.A$(null);if(!!this.Im)this.Im.Dj.C3(0x0,0x40);if(((this.U&0x40
)===0x40)&&((Ii.U&0x4)===0x4))Ii.C3(0x10040,0x0);else Ii.C3(0x10000,0x0);Ko.Dj=Ii;
Ko.Af=this.Im;this.Im=Ko;if(!!L9){this.NG(this.Im.Af.Dj,L9.Add(),null,null,Ll);this.
NG(Ii,N3.RF(),Lm,Lk,true);}else this.NG(Ii,N3.RF(),Lm,Lk,Ll);},A33:function(Ae){
var B;return(B=Ae)&&((this.U&B)===B);},A4C:function(KK){var tmp=this;while(!!tmp
){KK=A.aaj(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},Bfm:function(KK){var tmp=
this;while(!!tmp){KK=A.aak(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},DispatchEvent:
function(CK){var B;var W=this.AY;var B8=(C.O.isPrototypeOf(W)?W:null);var Gm=null;
var AZW=!!this.WH&&(!!this.WH.FF||!!this.WH.B7);if(!!W&&((((W.U&0x10000)===0x10000
)||((W.U&0x40000)===0x40000))||((W.U&0x20000)===0x20000))){W=null;B8=null;}if(!!
this.Im&&!AZW)Gm=this.Im.Dj.DispatchEvent(CK);if(!Gm&&!!B8)Gm=B8.DispatchEvent(CK
);else if(!Gm&&!!W)Gm=W.GH(CK);if(!Gm)Gm=this.GH(CK);if(!Gm)Gm=this.A0S(CK);return Gm;
},BroadcastEventAtPosition:function(CK,IM,aFilter){var B;var W=this.B4;var Gm=null;
while(!!W&&!Gm){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&A.vt(W.GetExtent(),
IM)){var B8=(C.O.isPrototypeOf(W)?W:null);if(!!B8)Gm=B8.BroadcastEventAtPosition(
CK,A.aaj(IM,B8.M.slice(0,2)),aFilter);else Gm=W.GH(CK);}W=W.AG;}if(!Gm)Gm=this.GH(
CK);return Gm;},BroadcastEvent:function(CK,aFilter){var B;var W=this.B4;var Gm=null;
while(!!W&&!Gm){if(!aFilter||((B=aFilter)&&((W.U&B)===B))){var B8=(C.O.isPrototypeOf(
W)?W:null);if(!!B8)Gm=B8.BroadcastEvent(CK,aFilter);else Gm=W.GH(CK);}W=W.AG;}if(
!Gm)Gm=this.GH(CK);if(!Gm)Gm=this.A0S(CK);return Gm;},Bf:function(aSize){},Ag:function(
Ae){},BfD:function(){this.U=this.U|0x4000;A.ow([this,this.H$],this);},Am:function(
){this.U=this.U|0x8000;A.ow([this,this.H$],this);},Bg:function(Dc){var B;var B8=
this;while(!!B8&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))){var Zz=B8.HO;if(!B8.Ac&&(B8!==
this)){B8.Bg(Dc);return;}if(!!Zz){var Bv0=Zz.Qf;Zz.Qf=A.vS(Zz.Qf,Dc);if(!A.z9(Bv0
,Zz.Qf)){A.vv(B8,0);A.vv(Zz,0);}}if(!((B8.U&0x1)===0x1))return;Dc=A.kz(A.aam(Dc,
B8.M.slice(0,2)),B8.M);B8=B8.Ac;}},RO:function(Ah,GC,aFilter){var B;if(!Ah||(Ah.
Ac!==this))return null;var Afs=A.zT(Ah.GetExtent());var W=Ah;var AYE=null;var A_0=
0;var IR=0x10000;var AIW;if(((aFilter&0x10000)===0x10000))IR=0x0;var top=((GC===
4)||(GC===1))||(GC===6);var bottom=((GC===5)||(GC===3))||(GC===8);var left=((GC===
2)||(GC===1))||(GC===3);var right=((GC===7)||(GC===6))||(GC===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!W){W=W.AG;if(!W)W=this.B4;if(W===Ah)W=null;
if((!!W&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IR||!((B=IR)&&((W.U&B)===B
))))for(AIW=0;AIW<2;AIW++){var AM=W.GetExtent();var s=[AM[2]-AM[0],AM[3]-AM[1]];
if(!!!AIW){if((left&&(s[0]>s[1]))&&(AM[2]<Afs[0]))AM=[].concat(AM[2]-s[1],AM.slice(
1,4));if((right&&(s[0]>s[1]))&&(AM[0]>Afs[0]))AM=A.aaQ(AM,AM[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AM[3]<Afs[1]))AM=A.aaS(AM,AM[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AM[
1]>Afs[1]))AM=[].concat(AM.slice(0,3),AM[1]+s[0]);}var Bm=A.aaj(A.zT(AM),Afs);var
Q2=Bm;if(Q2[0]<0)Q2=[-Q2[0],Q2[1]];if(Q2[1]<0)Q2=[Q2[0],-Q2[1]];if(((((!left||(Bm[
0]<=-Q2[1]))&&(!right||(Bm[0]>=Q2[1])))&&(!top||(Bm[1]<=-Q2[0])))&&(!bottom||(Bm[
1]>=Q2[0])))&&((Q2[0]>0)||(Q2[1]>0))){var Q8=Bm[0];var Q9=Bm[1];var Jc=Math.sqrt((
Q8*Q8)+(Q9*Q9));var AIv=0;if(!left&&!right)AIv=Jc/Q2[1];if(!top&&!bottom)AIv=Jc/
Q2[0];Jc=(Jc*AIv)*AIv;if((Jc<A_0)||!AYE){A_0=Jc;AYE=W;}}}}return AYE;},Apq:function(
Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B4;var IR=0x10000;
if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.AG;while(!!W){if((!aFilter||((
B=aFilter)&&((W.U&B)===B)))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;W=W.AG;}return null;
},U9:function(Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B7;
var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.Af;while(!!W
){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;
W=W.Af;}return null;},AAW:function(Ah,aFilter){var B;if(!Ah||(Ah.Ac!==this))return null;
var Ak1=Ah.Af;var Ald=Ah.AG;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;
while(!!Ak1||!!Ald){if((!!Ak1&&(!aFilter||((B=aFilter)&&((Ak1.U&B)===B))))&&(!IR||
!((B=IR)&&((Ak1.U&B)===B))))return Ak1;if((!!Ald&&(!aFilter||((B=aFilter)&&((Ald.
U&B)===B))))&&(!IR||!((B=IR)&&((Ald.U&B)===B))))return Ald;if(!!Ak1)Ak1=Ak1.Af;if(
!!Ald)Ald=Ald.AG;}return null;},C_:function(aFilter){var B;var W=this.B7;var AD=
BH;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;while(!!W){if((!((W.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IR||!((B=IR)&&((W.
U&B)===B))))AD=A.vS(AD,W.GetExtent());W=W.Af;}return AD;},NG:function(Km,FD,Lm,Lk
,Ll){var B;if(!Km)return;if(!FD)throw new Error(IL);if((!!FD.O||!!FD.Ac)||!!FD.O4
)throw new Error(OK);if(!!Km.Ac&&(Km.Ac!==this))throw new Error(PJ);if(!this.WH)
this.WH=A._NewObject(C.ASA,0);FD.Ac=this;FD.O=Km;FD.AIH=Lk;FD.A0g=Lm;if(!!Km.AoF
)Km.AoF.O4.BkG(Km.AoF);Km.AoF=FD;Km.U=Km.U|0x20000;if((Ll&&!!this.WH.B4)&&!this.
WH.B4.AOV())(A.abm.AAR.isPrototypeOf(B=this.WH.B4)?B:null).A1U(FD);else{var O4=A.
_NewObject(A.abm.AAR,0);O4.A1U(FD);this.WH.A7L(O4,false);}},AgS:function(Ah,JW){
var B;if(!Ah)throw new Error(N1);if(Ah.Ac!==this)throw new Error(CJ);if(!!JW&&(JW.
Ac!==this))throw new Error(Fn);if(Ah.Af===JW)return;if(((Ah.U&0x401)===0x401)){if(
!!Ah.AG&&!!Ah.Em)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([
this,this.H$],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;
Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(!!Ah.Af)Ah.Af.
AG=Ah.AG;else this.B4=Ah.AG;if(!!Ah.AG)Ah.AG.Af=Ah.Af;else this.B7=Ah.Af;var Gl=
null;var Ik=this.B4;var Lx=Ah.JQ;if(!!JW){Gl=JW;Ik=JW.AG;}if(!!Gl&&(Lx>Gl.JQ))Lx=
Gl.JQ;if(!!Ik&&(Lx<Ik.JQ))Lx=Ik.JQ;if(Lx!==Ah.JQ){Ah.Ac=null;Ah.A69(Lx);Ah.Ac=this;
}if(!JW){if(!!this.B4)this.B4.Af=Ah;Ah.AG=this.B4;Ah.Af=null;this.B4=Ah;}else{Ah.
Af=JW;Ah.AG=JW.AG;JW.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}if(this.B7===JW)this.B7=Ah;if(((
Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());},QG:function(Ah){var B;if(!Ah)throw new
Error(N1);if(Ah.Ac!==this)throw new Error(CJ);if(!Ah.Af)return;var Ik=this.B4;var
Lx=Ah.JQ;while(!!Ik&&(Ik.JQ>Lx))Ik=Ik.AG;if(((Ik===Ah)||!Ik)||(Ik.Af===Ah))return;
if(((Ah.U&0x401)===0x401)){if(!!Ah.AG&&!!Ah.Em)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;
this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(((Ah.U&0x200)===0x200)){if(!!
Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(!
!Ah.AG)Ah.AG.Af=Ah.Af;else this.B7=Ah.Af;Ah.Af.AG=Ah.AG;Ah.AG=Ik;Ah.Af=Ik.Af;Ik.
Af=Ah;if(!!Ah.Af)Ah.Af.AG=Ah;else this.B4=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent(
));},Ki:function(Ah,PN){var B;if(!Ah)throw new Error(N1);if(Ah.Ac!==this)throw new
Error(CJ);var Ik=Ah;var Gl=Ah;var Lx=Ah.JQ;while(((PN>0)&&!!Ik.Af)&&(Ik.Af.JQ<=Lx
)){Ik=Ik.Af;PN=PN-1;}while(((PN<0)&&!!Gl.AG)&&(Gl.AG.JQ>=Lx)){Gl=Gl.AG;PN=PN+1;}
if((Ik===Ah)&&(Gl===Ah))return;if(((Ah.U&0x401)===0x401)){if(!!Ah.AG&&!!Ah.Em)Ah.
AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this
);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.
U=this.U|0x4000;A.ow([this,this.H$],this);}if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)
Ah.Af.AG=Ah.AG;if(this.B7===Ah)this.B7=Ah.Af;if(this.B4===Ah)this.B4=Ah.AG;if(Ik
!==Ah){Ah.Af=Ik.Af;Ah.AG=Ik;Ik.Af=Ah;if(!!Ah.Af)Ah.Af.AG=Ah;}if(Gl!==Ah){Ah.Af=Gl;
Ah.AG=Gl.AG;Gl.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}if(!Ah.Af)this.B4=Ah;if(!Ah.AG)this.
B7=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());},HG:function(Ah){var B;if(!
Ah)throw new Error(Nb);if(Ah.Ac!==this)throw new Error(CJ);if((((Ah.U&0x401)===0x401
)&&!!Ah.AG)&&!!Ah.Em){Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H$],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H$],this);}Ah.Em=null;if(this.AY===Ah)this.A$(this.AAW(
Ah,0x14));if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)Ah.Af.AG=Ah.AG;if(this.B7===Ah)this.
B7=Ah.Af;if(this.B4===Ah)this.B4=Ah.AG;Ah.Ac=null;Ah.Af=null;Ah.AG=null;if(((Ah.
U&0x1)===0x1))this.Bg(Ah.GetExtent());},AJ6:function(Ah,JW){var B;if(!Ah)throw new
Error(OL);if(!!Ah.Ac)throw new Error(KH);if(!!JW&&(JW.Ac!==this))throw new Error(
Fn);var Gl=null;var Ik=this.B4;var Lx=Ah.JQ;if(!!JW){Gl=JW;Ik=JW.AG;}if(!!Gl&&(Lx>
Gl.JQ))Lx=Gl.JQ;if(!!Ik&&(Lx<Ik.JQ))Lx=Ik.JQ;if(Lx!==Ah.JQ){Ah.Ac=null;Ah.A69(Lx
);Ah.Ac=this;}if(!JW){if(!!this.B4)this.B4.Af=Ah;Ah.AG=this.B4;this.B4=Ah;}else{
Ah.Af=JW;Ah.AG=JW.AG;JW.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}Ah.Ac=this;if(this.B7===JW
)this.B7=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());if(((!this.AY&&((Ah.U&
0x4)===0x4))&&((Ah.U&0x10)===0x10))&&!((Ah.U&0x10000)===0x10000))this.A$(Ah);if(((
Ah.U&0x401)===0x401)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this
);}if(((Ah.U&0x200)===0x200)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H$],this);}},J:function(Ah,PN){var B;if(!Ah)throw new Error(OL);if(!!Ah.Ac)throw new
Error(KH);var Gl=null;var Lx=Ah.JQ;if(((PN<0)&&!!this.B4)&&(this.B4.JQ>=Lx)){Gl=
this.B4;PN=PN+1;}while((((PN<0)&&!!Gl)&&!!Gl.AG)&&(Gl.AG.JQ>=Lx)){Gl=Gl.AG;PN=PN+
1;}if((!Gl&&!!this.B4)&&(this.B4.JQ>Lx))Gl=this.B4;while((!!Gl&&!!Gl.AG)&&(Gl.AG.
JQ>Lx))Gl=Gl.AG;if(!Gl){Ah.Ac=this;Ah.AG=this.B4;if(!!this.B4)this.B4.Af=Ah;if(!
this.B7)this.B7=Ah;this.B4=Ah;}else{Ah.Ac=this;Ah.AG=Gl.AG;Ah.Af=Gl;Gl.AG=Ah;if(
!!Ah.AG)Ah.AG.Af=Ah;else this.B7=Ah;}if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent(
));if(((!this.AY&&((Ah.U&0x4)===0x4))&&((Ah.U&0x10)===0x10))&&!((Ah.U&0x10000)===
0x10000))this.A$(Ah);if(((Ah.U&0x401)===0x401)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;
A.ow([this,this.H$],this);}if(((Ah.U&0x200)===0x200)){Ah.U=Ah.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H$],this);}},A5w:function(){return this.AY;},AuO:function(
){return this.GM;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.O;this.U=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.EC._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B4)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
HO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AoF)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Rb:null,JA:null,Fc:A.aan(10,null,null),Ar_:null,Ahx:null,
Azx:0,H6:0,L3:A.aan(10,0,null),AHU:A.aan(10,A.vx,null),WG:A.aan(10,0,null),Afa:A.
aan(10,A.vw,null),Asd:A.aan(10,0,null),Ahw:A.aan(10,A.vw,null),WF:A.aan(10,A.vw,
null),Q5:A.aan(10,A.vw,null),Acg:A.aan(10,A.vw,null),EF:0,AIi:0,AIh:0,Oi:A.aan(4
,0,null),J6:A.aan(4,A.vx,null),J3:0,Ayf:0,Ass:0,Ax6:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},Ib:function(){return this;},J_:function(CW
,aClip,aOffset,Ce,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CW.AtR(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);},C3:
function(Ahn,Any){var B;C.O.C3.call(this,Ahn,Any);if(!this.Ac&&(((Ahn&0x1)===0x1
)||((Any&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ac&&(((
Ahn&0x2)===0x2)||((Any&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A$:function(E){if((E!==null)||!E)C.O.A$.call(this,E);},Aqk:function(E){var B;var
BvY=this.HO;C.O.Aqk.call(this,E);if(((BvY!==this.HO)&&!this.Ac)&&((this.U&0x1)===
0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DD:function(E){var B;var BP=this.
GM;C.O.DD.call(this,E);if(((BP!==this.GM)&&!this.Ac)&&((this.U&0x1)===0x1))this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CK){if(!!CK){CK.
Aup=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=null;if(!!this.JA){Gm=this.JA.Dj.
DispatchEvent(CK);if(!Gm)Gm=this.GH(CK);if(!Gm)Gm=this.A0S(CK);this.H6=0;return Gm;
}Gm=C.O.DispatchEvent.call(this,CK);this.H6=0;return Gm;},BroadcastEvent:function(
CK,aFilter){if(!!CK){CK.Aup=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=C.O.BroadcastEvent.
call(this,CK,aFilter);this.H6=0;return Gm;},Bg:function(Dc){var B;if(this.Azx>0)
throw new Error(OM);if(!!this.HO&&!this.Ac){if(((B=this.HO.Qf)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.HO,0);}this.HO.Qf=A.vS(this.HO.Qf,Dc);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)Dc=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ac){C.O.Bg.call(this,Dc);return;}Dc=A.kz(A.aam(Dc,this.M.slice(0
,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;var P;for(P=0;P<this.J3;P=
P+1)if(!(((B=A.kz(this.J6.Get(P),Dc))[0]>=B[2])||(B[1]>=B[3]))){this.J6.Set(P,A.
vS(this.J6.Get(P),Dc));this.Oi.Set(P,A.zS(this.J6.Get(P)));return;}if(this.J3<3){
this.J6.Set(this.J3,Dc);this.Oi.Set(this.J3,A.zS(Dc));this.J3=this.J3+1;return;}
var H9;var Ra;var Aye=0;var Ayg=0;var A_Z=2147483647;this.J6.Set(this.J3,Dc);this.
Oi.Set(this.J3,A.zS(Dc));for(H9=0;H9<=this.J3;H9=H9+1)for(Ra=H9+1;Ra<=this.J3;Ra=
Ra+1){var AJk=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Ra)));var BbG=((AJk<<8)/(this.
Oi.Get(H9)+this.Oi.Get(Ra)))|0;if(BbG<A_Z){A_Z=BbG;Aye=H9;Ayg=Ra;}}this.J6.Set(Aye
,A.vS(this.J6.Get(Aye),this.J6.Get(Ayg)));this.Oi.Set(Aye,A.zS(this.J6.Get(Aye))
);if(Ayg!==this.J3){this.J6.Set(Ayg,this.J6.Get(this.J3));this.Oi.Set(Ayg,this.Oi.
Get(this.J3));}},BuF:function(){var Ls=A._NewObject(C.Apm,0);Ls.Aup=!!this.H6;if(
!!this.H6)Ls.Bu=this.H6;return Ls;},AnQ:function(){var Ls=A._NewObject(C.Adg,0);
Ls.Aup=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},Asc:function(){var Ls=A.
_NewObject(C.Ats,0);Ls.Aup=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},BuK:
function(H){var P;var An8=false;for(P=0;P<10;P=P+1)if(!!this.Fc.Get(P)){var pos=
this.Q5.Get(P);var B8=this.Fc.Get(P).Ac;while(!!B8&&(B8!==this)){pos=A.aaj(pos,B8.
M.slice(0,2));B8=B8.Ac;}if(!B8&&(this.Fc.Get(P)!==this)){var tmp=this.Fc.Get(P);
this.EF=P;this.Fc.Set(P,null);tmp.GH(this.AnQ().InitializeUp(P,this.Ahw.Get(P),this.
Afa.Get(P),this.WG.Get(P),this.L3.Get(P)+1,this.WF.Get(P),false,this.Q5.Get(P),this.
Acg.Get(P)));this.BroadcastEvent(this.Asc().InitializeUp(P,this.L3.Get(P)+1,false
,tmp,this.Q5.Get(P)),0x18);}else{this.WG.Set(P,(this.Ahx.Bu-this.Asd.Get(P))|0);
if(this.WG.Get(P)<10)this.WG.Set(P,10);this.EF=P;this.Fc.Get(P).GH(this.AnQ().InitializeHold(
P,pos,this.Afa.Get(P),this.WG.Get(P),this.L3.Get(P)+1,this.WF.Get(P),this.Q5.Get(
P),this.Acg.Get(P)));An8=true;}}if(!An8)this.Ahx.Ap(false);},GetFPS:function(){var
ticksCount=0;var A$A=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AIi&&(
ticksCount>this.AIi))A$A=((this.AIh*1000)/((ticksCount-this.AIi)|0))|0;this.AIh=
0;this.AIi=ticksCount;return A$A;},Update:function(){var B;if(!this.Ar_)this.Ar_=
A._NewObject(A.Graphics.Canvas,0);this.Ar_.Aqq([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Ar_.Update();return this.UpdateGE20(this.Ar_);},UpdateGE20:function(CW){if(!this.
BeginUpdate())return BH;var AfC=this.UpdateCanvas(CW,B_);this.EndUpdate();return AfC;
},EndUpdate:function(){if(this.J3>0){this.AIh=this.AIh+1;this.J3=0;}},UpdateCanvas:
function(CW,aOffset){var B;var AfC=BH;var Bun=[].concat(aOffset,A.aak(CW.FrameSize
,aOffset));var P;var H9=this.J3;this.Azx=this.Azx+1;CW.Dj=this;for(P=0;(P<H9)&&(
P<4);P=P+1)if(this.Oi.Get(P)>0){this.J_(CW,A.aal(this.J6.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);AfC=A.vS(AfC,A.kz(Bun,this.J6.Get(P)));}else H9=H9+1;CW.
Dj=null;this.Azx=this.Azx-1;if(!((AfC[0]>=AfC[2])||(AfC[1]>=AfC[3])))return A.aal(
AfC,aOffset);else return AfC;},GetUpdateRegion:function(AHb){var P;var H9=this.J3;
if(AHb<0)return BH;for(P=0;(P<H9)&&(P<4);P=P+1)if(!this.Oi.Get(P)){H9=H9+1;AHb=AHb+
1;}else if(P===AHb)return this.J6.Get(P);return BH;},BeginUpdate:function(){var B;
var P;if(!!this.J3&&!A.z9(this.J6.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
BcH=A.aan(3,A.vx,null);var BcG=this.J3;for(P=0;P<BcG;P++)BcH.Set(P,this.J6.Get(P
));for(P=0;P<BcG;P++){var BbZ=A.aam(BcH.Get(P),this.M.slice(0,2));var Bb0=this.Atc(
BbZ);if(!A.z9(BbZ,Bb0))this.Bg(A.aal(Bb0,this.M.slice(0,2)));}}var H9;var Ra;for(
H9=0;H9<(this.J3-1);H9++)if(this.Oi.Get(H9)>0)for(Ra=H9+1;Ra<this.J3;Ra++)if(this.
Oi.Get(Ra)>0){var AJk=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Ra)));if(((AJk-this.
Oi.Get(H9))-this.Oi.Get(Ra))<0){this.J6.Set(H9,A.vS(this.J6.Get(H9),this.J6.Get(
Ra)));this.Oi.Set(H9,AJk);this.Oi.Set(Ra,0);}}for(P=this.J3-1;P>=0;P--)if(!this.
Oi.Get(P))this.J3=this.J3-1;return this.J3;},DoesNeedUpdate:function(){if(this.J3>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B_,aSize
));if(this.Ax6)this.U=this.U|0x60;else this.U=this.U|0x20;this.Bg(this.M);return this;
},SetRootFocus:function(AX5){if(AX5===this.Ax6)return false;this.Ax6=AX5;if(!AX5
){if(!!this.JA)this.JA.Dj.C3(0x0,0x40);else this.C3(0x0,0x40);}else if(!!this.JA
)this.JA.Dj.C3(0x40,0x0);else this.C3(0x40,0x0);return true;},SetUserInputTimestamp:
function(PO){this.H6=PO;},DriveKeyboardHitting:function(Kl,Axd,Sz){var B;var A0T=
!!this.Rb;if(!!this.Rb&&((!Sz||(this.Ayf!==Kl))||(this.Ass!==Axd))){var Ls=null;
var W=(C.Cd.isPrototypeOf(B=this.Rb)?B:null);var DY=(C.BR.isPrototypeOf(B=this.Rb
)?B:null);if(!!this.Ayf)Ls=A._NewObject(C.KeyEvent,0).Initialize(this.Ayf,false);
if(this.Ass!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(this.Ass,false);if(
!!DY)DY.GH(Ls);else if(!!W)W.GH(Ls);this.Ayf=0;this.Ass=0x00;this.Rb=null;}if(!!
this.Rb){var Ls=null;var W=(C.Cd.isPrototypeOf(B=this.Rb)?B:null);var DY=(C.BR.isPrototypeOf(
B=this.Rb)?B:null);if(!!Kl)Ls=A._NewObject(C.KeyEvent,0).Initialize(Kl,true);if(
this.Ass!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(Axd,true);if(!!DY)DY.GH(
Ls);else if(!!W)W.GH(Ls);}if(!this.Rb&&Sz){if(!!Kl)this.Rb=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kl,true));if(Axd!==0x00)this.Rb=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Axd,true));if(!(C.BR.isPrototypeOf(B=this.
Rb)?B:null)&&!(C.Cd.isPrototypeOf(B=this.Rb)?B:null))this.Rb=null;this.Ayf=Kl;this.
Ass=Axd;A0T=A0T||!!this.Rb;}this.H6=0;return A0T;},DriveCursorMovement:function(
Fo){return this.DriveMultiTouchMovement(this.EF,Fo);},DriveMultiTouchMovement:function(
BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var Ff=A.aaj(Fo,this.Q5.Get(BG
));this.Q5.Set(BG,Fo);if(!this.Fc.Get(BG)||A.z8(Ff,B_)){this.H6=0;return false;}
var pos=Fo;var B8=this.Fc.Get(BG).Ac;while(!!B8&&(B8!==this)){pos=A.aaj(pos,B8.M.
slice(0,2));B8=B8.Ac;}if(!B8&&(this.Fc.Get(BG)!==this)){var tmp=this.Fc.Get(BG);
this.EF=BG;this.Fc.Set(BG,null);tmp.GH(this.AnQ().InitializeUp(BG,this.Ahw.Get(BG
),this.Afa.Get(BG),this.WG.Get(BG),this.L3.Get(BG)+1,this.WF.Get(BG),false,this.
Q5.Get(BG),this.Acg.Get(BG)));this.BroadcastEvent(this.Asc().InitializeUp(BG,this.
L3.Get(BG)+1,false,tmp,Fo),0x18);}else{this.Ahw.Set(BG,pos);this.EF=BG;this.Fc.Get(
BG).GH(this.BuF().Initialize(BG,pos,this.Afa.Get(BG),Ff,this.WG.Get(BG),this.L3.
Get(BG)+1,this.WF.Get(BG),Fo,this.Acg.Get(BG)));}this.H6=0;return true;},DriveCursorHitting:
function(Sz,BG,Fo){return this.DriveMultiTouchHitting(Sz,BG,Fo);},DriveMultiTouchHitting:
function(Sz,BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var ticksCount=this.
H6;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var Bxv=this.H6;this.
DriveMultiTouchMovement(BG,Fo);Fo=this.Q5.Get(BG);this.H6=Bxv;if(Sz)this.Acg.Set(
BG,Fo);if(Sz&&!this.Fc.Get(BG)){var Jz;var pos=Fo;if(A.vt(this.AHU.Get(BG),Fo)&&((
ticksCount-this.Asd.Get(BG))<=250))this.L3.Set(BG,this.L3.Get(BG)+1);else this.L3.
Set(BG,0);this.AHU.Set(BG,A.aam(Nc,Fo));this.Asd.Set(BG,ticksCount);if(!!this.JA
)Jz=this.Xv(A.aam(Nc,Fo),BG,this.L3.Get(BG)+1,this.JA.Dj,null,0x0);else Jz=this.
Xv(A.aam(Nc,Fo),BG,this.L3.Get(BG)+1,null,null,0x0);if(!!Jz){this.BroadcastEvent(
this.Asc().InitializeDown(BG,this.L3.Get(BG)+1,false,Jz.Cd,Fo),0x18);this.Fc.Set(
BG,Jz.Cd);this.WF.Set(BG,Jz.Dz);}else{this.Fc.Set(BG,null);this.WF.Set(BG,B_);this.
H6=0;return false;}var B8=Jz.Cd.Ac;while(!!B8&&(B8!==this)){pos=A.aaj(pos,B8.M.slice(
0,2));B8=B8.Ac;}this.Afa.Set(BG,pos);this.Ahw.Set(BG,pos);this.WG.Set(BG,0);this.
Ahx.Ap(true);this.EF=BG;this.Fc.Get(BG).GH(this.AnQ().InitializeDown(BG,pos,this.
L3.Get(BG)+1,this.WF.Get(BG),false,Fo));this.H6=0;return true;}if(!Sz&&!!this.Fc.
Get(BG)){var pos=Fo;var B8=this.Fc.Get(BG).Ac;while(!!B8&&(B8!==this)){pos=A.aaj(
pos,B8.M.slice(0,2));B8=B8.Ac;}if(!B8)pos=this.Ahw.Get(BG);this.EF=BG;var tmp=this.
Fc.Get(BG);this.Fc.Set(BG,null);tmp.GH(this.AnQ().InitializeUp(BG,pos,this.Afa.Get(
BG),this.WG.Get(BG),this.L3.Get(BG)+1,this.WF.Get(BG),false,Fo,this.Acg.Get(BG))
);this.BroadcastEvent(this.Asc().InitializeUp(BG,this.L3.Get(BG)+1,false,tmp,Fo)
,0x18);this.H6=0;return true;}this.H6=0;return false;},ARX:function(Zu,A_l,Ab9,Ab8
){if(Zu===this)Zu=null;if(!!!Zu&&!!this.JA)Zu=this.JA.Dj;if(!this.Fc.Get(this.EF
))return;var Jz;Jz=this.Xv(A.aam(Nc,this.Q5.Get(this.EF)),this.EF,1,Zu,Ab9,Ab8);
if(!!Jz&&(this.Fc.Get(this.EF)!==Jz.Cd))this.ALE(Jz.Cd,Jz.Dz);if(!Jz&&(this.Fc.Get(
this.EF)!==A_l))this.ALE(A_l,B_);},ALE:function(Zu,Ws){if(!this.Fc.Get(this.EF)||(
this.Fc.Get(this.EF)===Zu))return;var tmp=this.Fc.Get(this.EF);this.Fc.Set(this.
EF,null);tmp.GH(this.AnQ().InitializeUp(this.EF,this.Ahw.Get(this.EF),this.Afa.Get(
this.EF),this.WG.Get(this.EF),this.L3.Get(this.EF)+1,this.WF.Get(this.EF),true,this.
Q5.Get(this.EF),this.Acg.Get(this.EF)));this.BroadcastEvent(this.Asc().InitializeUp(
this.EF,this.L3.Get(this.EF)+1,true,tmp,this.Q5.Get(this.EF)),0x18);var pos=this.
Q5.Get(this.EF);var B8=null;if(!!Zu)B8=Zu.Ac;while(!!B8&&(B8!==this)){pos=A.aaj(
pos,B8.M.slice(0,2));B8=B8.Ac;}if(!B8&&(Zu!==this)){this.Fc.Set(this.EF,null);return;
}this.BroadcastEvent(this.Asc().InitializeDown(this.EF,this.L3.Get(this.EF)+1,true
,Zu,this.Q5.Get(this.EF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.Fc.Set(this.EF,Zu);this.WF.Set(this.EF,Ws);this.Afa.Set(this.EF,pos
);this.Ahw.Set(this.EF,pos);this.L3.Set(this.EF,0);this.WG.Set(this.EF,0);this.Asd.
Set(this.EF,ticksCount);this.Acg.Set(this.EF,this.Q5.Get(this.EF));this.Fc.Get(this.
EF).GH(this.AnQ().InitializeDown(this.EF,pos,this.L3.Get(this.EF)+1,this.WF.Get(
this.EF),true,this.Acg.Get(this.EF)));},Bfc:function(){if(!!this.JA)return this.
JA.Dj;return null;},AAO:function(Km){var B;if(!Km)throw new Error(ON);if(!((Km.U&
0x80)===0x80))throw new Error(Ss);if(this.JA.Dj===Km)this.JA=this.JA.Af;else{var
Ax5=this.JA;while(Ax5.Af.Dj!==Km)Ax5=Ax5.Af;Ax5.Af=Ax5.Af.Af;}Km.C3(0x0,0xC0);if(
this.Ax6){if(!!this.JA)this.JA.Dj.C3(0x40,0x0);else this.C3(0x40,0x0);}},AKO:function(
Km){var B;var Ar=A._NewObject(C.A4M,0);if(!Km)throw new Error(T_);if(Km===null)throw new
Error(Wa);if(((Km.U&0x80)===0x80))throw new Error(Wb);if(!!this.JA)this.JA.Dj.C3(
0x0,0x40);else this.C3(0x0,0x40);Ar.Af=this.JA;Ar.Dj=Km;this.JA=Ar;if(this.Ax6)Km.
C3(0xC0,0x0);else Km.C3(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Ahx={I:this},0);(this.Fc=[]).__proto__=C.Root.Fc;(this.
L3=[]).__proto__=C.Root.L3;(this.AHU=[]).__proto__=C.Root.AHU;(this.WG=[]).__proto__=
C.Root.WG;(this.Afa=[]).__proto__=C.Root.Afa;(this.Asd=[]).__proto__=C.Root.Asd;(
this.Ahw=[]).__proto__=C.Root.Ahw;(this.WF=[]).__proto__=C.Root.WF;(this.Q5=[]).
__proto__=C.Root.Q5;(this.Acg=[]).__proto__=C.Root.Acg;(this.Oi=[]).__proto__=C.
Root.Oi;(this.J6=[]).__proto__=C.Root.J6;this.__proto__=C.Root;this.U=0x7F;this.
Ahx.Qz(10);this.Ahx.M8=[this,this.BuK];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Ahx._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Ahx._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JA)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Fc,D);if((B=this.Ar_)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ahx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bu:0,Aup:false,Init:function(aArg){this.Bu=this.At0();},At0:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CP:0,D4:0,Down:false,Initialize2:function(Kl,Sz){this.CP=0;this.D4=
Kl;this.Down=Sz;if((Kl>=0x30)&&(Kl<=0x39))this.CP=(10+Kl)-48;if((Kl>=0x41)&&(Kl<=
0x5A))this.CP=(105+Kl)-65;if((Kl>=0x61)&&(Kl<=0x7A))this.CP=(105+Kl)-97;if(Kl===
0x20)this.CP=131;if(!this.CP)switch(Kl){case 0x2B:this.CP=132;break;case 0x2D:this.
CP=133;break;case 0x2A:this.CP=134;break;case 0x2F:this.CP=135;break;case 0x3D:this.
CP=136;break;case 0x2E:this.CP=137;break;case 0x2C:this.CP=138;break;case 0x3A:this.
CP=139;break;case 0x3B:this.CP=140;break;default:;}return this;},Initialize:function(
Kl,Sz){this.CP=Kl;this.Down=Sz;this.D4=0x00;var AYK=Kl-10;var Ar9=Kl-105;if((AYK>=
0)&&(AYK<=9))this.D4=(48+AYK)&0xFFFF;if((Ar9>=0)&&(Ar9<=25))this.D4=(65+Ar9)&0xFFFF;
if(Kl===131)this.D4=0x20;if(this.D4===0x00)switch(Kl){case 132:this.D4=0x2B;break;
case 133:this.D4=0x2D;break;case 134:this.D4=0x2A;break;case 135:this.D4=0x2F;break;
case 136:this.D4=0x3D;break;case 137:this.D4=0x2E;break;case 138:this.D4=0x2C;break;
case 139:this.D4=0x3A;break;case 140:this.D4=0x3B;break;default:;}return this;},
BfI:function(A_b){switch(A_b){case 141:return((this.D4>=0x41)&&(this.D4<=0x5A))||((
this.D4>=0x61)&&(this.D4<=0x7A));case 142:return(((this.D4>=0x41)&&(this.D4<=0x5A
))||((this.D4>=0x61)&&(this.D4<=0x7A)))||((this.D4>=0x30)&&(this.D4<=0x39));case
143:return(this.D4>=0x30)&&(this.D4<=0x39);case 144:return(((this.D4>=0x41)&&(this.
D4<=0x46))||((this.D4>=0x61)&&(this.D4<=0x66)))||((this.D4>=0x30)&&(this.D4<=0x39
));case 145:return this.D4!==0x00;case 146:return(this.D4===0x00)&&!!this.CP;case
147:return(((this.CP===6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:
return(this.D4!==0x00)||!!this.CP;default:;}return A_b===this.CP;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.APa={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.APa;
},_className:"Core::LanguageEvent"};C.Ats={Av5:null,LE:A.vw,NU:0,Iy:0,Down:false
,NA:false,InitializeUp:function(BG,N4,Anx,AYj,Zt){this.Down=false;this.Iy=BG;this.
NU=N4;this.LE=Zt;this.Av5=AYj;this.NA=Anx;return this;},InitializeDown:function(
BG,N4,Anx,AYj,Zt){this.Down=true;this.Iy=BG;this.NU=N4;this.LE=Zt;this.Av5=AYj;this.
NA=Anx;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Ats;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Av5)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Adg={Af_:A.vw,LE:
A.vw,NU:0,Jk:0,NI:A.vw,HU:A.vw,Iy:0,Down:false,NA:false,InitializeHold:function(
BG,Akn,Axf,Axg,N4,Ws,Zt,Axe){this.Down=true;this.Iy=BG;this.HU=A.aak(Akn,Ws);this.
NI=A.aak(Axf,Ws);this.Jk=Axg;this.NU=N4;this.LE=Zt;this.Af_=Axe;return this;},InitializeUp:
function(BG,Akn,Axf,Axg,N4,Ws,Anx,Zt,Axe){this.Down=false;this.Iy=BG;this.HU=A.aak(
Akn,Ws);this.NI=A.aak(Axf,Ws);this.Jk=Axg;this.NU=N4;this.NA=Anx;this.LE=Zt;this.
Af_=Axe;return this;},InitializeDown:function(BG,Akn,N4,Ws,Anx,Zt){this.Down=true;
this.Iy=BG;this.HU=A.aak(Akn,Ws);this.NI=A.aak(Akn,Ws);this.Jk=0;this.NU=N4;this.
NA=Anx;this.LE=Zt;this.Af_=Zt;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Adg;},_className:"Core::CursorEvent"};C.Apm={Af_:A.vw
,LE:A.vw,NU:0,Jk:0,Dz:A.vw,NI:A.vw,HU:A.vw,Iy:0,Initialize:function(BG,Akn,Axf,aOffset
,Axg,BtM,Ws,Zt,Axe){this.Iy=BG;this.HU=A.aak(Akn,Ws);this.NI=A.aak(Axf,Ws);this.
Dz=aOffset;this.Jk=Axg;this.NU=BtM;this.LE=Zt;this.Af_=Axe;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Apm;},_className:"Core::DragEvent"
};C.Y={BT:null,Ns:null,Ej:null,Bn:A.vw,ASo:0,Space:0,Af8:0,J_:function(CW,aClip,
aOffset,Ce,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var Ak4=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AIE=[E[2]-E[0],E[3]-E[1]];var AoM=!A.z8(Ak4,AIE);var Ff=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(Ff,B_)&&!AoM){var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Aml(Ff,tmp);}W=W.Af;}A.ow(this.Ej,this);}if((AoM&&(Ak4[0]>0))&&(Ak4[1]>0)){var
A8=A.aam(this.M,this.Bn);var W=this.Af;while(!!W&&!((W.U&0x200)===0x200)){if(((W.
U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nu!==this))W.Em=null;if(!W.Em&&((W.Pu!==0x14
)||!!this.Af8))W.Asp(A8,this);}W=W.Af;}A.ow(this.Ej,this);}C.EC.G.call(this,E);if(
!!this.Ac&&AoM){this.U=this.U|0x1000;if(!((this.Ac.U&0x2000)===0x2000)){this.Ac.
U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}},Aow:function(H){var B;this.BT.
Q=null;this.BT.P1=null;this.BT=null;(B=this.Ns)?B[1].call(B[0],this):null;},Gj:function(
E){var B;var Ff=A.aaj(E,this.Bn);if(A.z8(Ff,B_))return;this.Bn=E;var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Aml(Ff,tmp);}W=W.Af;}if(!!this.Ac)this.Ac.Bg(this.M);A.ow(this.Ej,this);},A68:
function(E){var B;if(E<0)E=0;if(E===this.ASo)return;this.ASo=E;if(!!this.Ac&&!!this.
Af8){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},BjU:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Ac&&!!this.Af8){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,
B.H$],this);}},Kc:function(E){var B;if(E===this.Af8)return;this.Af8=E;if(!!this.
Ac){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},UL:function(Ab2,EW){var Ar9=this.C_(0x1);var Q4=this.M;var Uw=A.aaj(Ar9.slice(
0,2),Q4.slice(0,2));var L5=A.aaj(Ar9.slice(2,4),Q4.slice(2,4));var Bm=B_;if((Uw[
0]>0)&&(L5[0]>Uw[0]))Bm=[Uw[0],Bm[1]];else if((Uw[0]>0)&&(L5[0]>0))Bm=[L5[0],Bm[
1]];if((L5[0]<0)&&(Uw[0]<L5[0]))Bm=[L5[0],Bm[1]];else if((L5[0]<0)&&(Uw[0]<0))Bm=[
Uw[0],Bm[1]];if((Uw[1]>0)&&(L5[1]>Uw[1]))Bm=[Bm[0],Uw[1]];else if((Uw[1]>0)&&(L5[
1]>0))Bm=[Bm[0],L5[1]];if((L5[1]<0)&&(Uw[1]<L5[1]))Bm=[Bm[0],L5[1]];else if((L5[
1]<0)&&(Uw[1]<0))Bm=[Bm[0],Uw[1]];if(A.z8(Bm,B_)){(EW)?EW[1].call(EW[0],this):null;
return;}if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;
}this.BT=Ab2;if(!this.BT){this.Gj(A.aaj(this.Bn,Bm));(EW)?EW[1].call(EW[0],this):
null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amw,this.Gj];this.
BT.Cv=this.Bn;this.BT.B0=A.aaj(this.Bn,Bm);this.BT.P1=[this,this.Aow];this.BT.Ad7(
false);this.BT.Ap(true);this.Ns=EW;}},Hx:function(Ah,Ab6,Ab2,EW){var B;if(!Ah)return;
if((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400))throw new Error(I$);this.BbU();var
AM=Ah.GetExtent();var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2])||(
Lu[1]>=Lu[3])))||(Ab6&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var
Bm=B_;if(AM[2]>A8[2])Bm=[AM[2]-A8[2],Bm[1]];if(AM[3]>A8[3])Bm=[Bm[0],AM[3]-A8[3]
];if(Bm[0]>(AM[0]-A8[0]))Bm=[AM[0]-A8[0],Bm[1]];if(Bm[1]>(AM[1]-A8[1]))Bm=[Bm[0]
,AM[1]-A8[1]];if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.
Ns=null;}this.BT=Ab2;if(!this.BT){this.Gj(A.aaj(this.Bn,Bm));(EW)?EW[1].call(EW[
0],this):null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amw,this.
Gj];this.BT.Cv=this.Bn;this.BT.B0=A.aaj(this.Bn,Bm);this.BT.P1=[this,this.Aow];this.
BT.Ad7(false);this.BT.Ap(true);this.Ns=EW;}},Be9:function(Ah){var B;if(!!Ah&&((Ah.
Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return-1;var CO=-1;while(!!Ah&&!((Ah.U&0x200
)===0x200)){if(((Ah.U&0x400)===0x400))CO=CO+1;Ah=Ah.AG;}return CO;},U9:function(
Ah,aFilter){var B;if(!!Ah&&((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return null;
var W=this.Af;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.
Af;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((B=aFilter)&&((W.
U&B)===B))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;W=W.Af;}return null;},C_:function(
aFilter){var B;var W=this.Af;var AD=BH;var IR=0x10000;this.BbU();if(((aFilter&0x10000
)===0x10000))IR=0x0;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((
B=aFilter)&&((W.U&B)===B))&&(!IR||!((B=IR)&&((W.U&B)===B))))AD=A.vS(AD,W.GetExtent(
));W=W.Af;}return AD;},BbU:function(){var B;if((!this.Af8||!!!this.Ac)||!((this.
Ac.U&0x4000)===0x4000))return;var W=this.Af;var AY4=((this.U&0x1000)===0x1000);for(;
!!W&&!AY4;W=W.Af){if(((W.U&0x400)===0x400)&&((W.U&0x800)===0x800))AY4=true;if(((
W.U&0x200)===0x200))break;}if(AY4){this.U=this.U&~0x4000;this.Ac.Bb4();}},Amw:function(
){return this.Bn;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.Y;this.U=0x203;},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.BT
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ns)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.CI={Hn:null,BT:null,Cd:null,VU:null,Ns:null,Ej:null,G7:null,SM:-
1,SL:0,Jh:-1,Ha:0,AhO:8,Ob:0,TL:0,AbK:A.vw,GJ:-1,Bn:0,Ge:-1,OC:0,GK:24,AR:0,K9:null
,NF:false,Ast:false,ASv:function(Ii,N3,Wr,SB,SC,Ahm,OT,Q0,Lm,Lk,Ll){throw new Error(
T$);},Apk:function(Ii,Ahm,OT,Q0,Lm,Lk,Ll){throw new Error(Wc);},AjS:function(Ii,
N3,Wr,SB,SC,OT,Q0,Lm,Lk,Ll){throw new Error(Wd);},DispatchEvent:function(CK){var
B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY){this.GJ=this.Ge;
this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);if(!!this.B4)this.
B4.Af=this.Cd;else this.B7=this.Cd;this.Cd.AG=this.B4;this.B4=this.Cd;this.Cd.Ac=
this;this.AbK=[(B=this.M)[2]-B[0],this.GK];(B=this.G7)?B[1].call(B[0],this):null;
var B8=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B8)result=B8.DispatchEvent(CK);
else result=this.Cd.GH(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B7=null;
this.B4=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
){A.ow(this.Ej,this);return;}this.Ast=true;var AyW=0;if(!this.NF)AyW=this.OC;var
FH=this.Alc(-AyW-this.Bn,1);var GF=this.Alc(((((B=this.M)[3]-B[1])-AyW)-this.Bn)-
1,2);var CO=GF-FH;if(CO<1)CO=1;var Ahs=(CO/2)|0;var Aht=(CO/3)|0;if(!Ahs)Ahs=1;if(
!Aht)Aht=1;if(FH<this.Ha){FH=FH-Ahs;GF=GF+Aht;}else if(GF>this.Jh){FH=FH-Aht;GF=
GF+Ahs;}else{FH=this.Ha;GF=this.Jh;}if(!this.NF){if(FH>=this.AR){FH=0;GF=-1;}else
if(GF<0){FH=0;GF=-1;}if(GF>=this.AR)GF=this.AR-1;if(FH<0)FH=0;}else if(this.AR<=
0){FH=0;GF=-1;}var Ah5=this.Ha;var Ah6=this.Jh;var Aoj=0;var Aok=-1;if(FH>Ah5)Ah5=
FH;if(GF<Ah6)Ah6=GF;if(Ah5<=Ah6){while((this.Jh<GF)&&(this.Ha<Ah5)){this.AcG();this.
AxC();}while((this.Ha>FH)&&(this.Jh>Ah6)){this.Ay_();this.AxB();}}else{this.Jh=(
this.Jh-this.Ha)+FH;this.Ha=FH;Aoj=this.Ha;Aok=this.Jh;}while(this.Ha<FH)this.AcG(
);while(this.Jh>GF)this.Ay_();while(this.Ha>FH)this.AxB();while(this.Jh<GF)this.
AxC();var Z=this.B7;var inx=this.Ha;var pos=[0,(AyW+this.Bn)+this.Jd(inx,0)];var
BL=(B=this.M)[3]-B[1];var AkM=null;var BcO=(B=this.M)[2]-B[0];while(!!Z){var Io=
inx;if(this.NF){if(Io<0)Io=this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcH=((
Io>=this.SL)&&(Io<=this.SM))||((inx>=Aoj)&&(inx<=Aok));var An2=Z.GetExtent();var
Bm=A.aaj(pos,An2.slice(0,2));if(AcH)this.TL=this.GK;else this.TL=An2[3]-An2[1];var
AZL=pos[1];var AZM=pos[1]+this.TL;if(!A.z8(Bm,B_))Z.Aml(Bm,true);if((AcH&&(AZL<BL
))&&(AZM>0)){this.Cd=Z;this.GJ=Io;this.AbK=[BcO,this.TL];(B=this.G7)?B[1].call(B[
0],this):null;}Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TL];}inx=this.Ha;Z=this.B7;
pos=[0,(AyW+this.Bn)+this.Jd(inx,0)];while(!!Z){var Io=inx;if(this.NF){if(Io<0)Io=
this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcH=((Io>=this.SL)&&(Io<=this.SM
))||((inx>=Aoj)&&(inx<=Aok));if(AcH)this.TL=this.GK;else this.TL=(B=Z.GetExtent(
))[3]-B[1];var AZL=pos[1];var AZM=pos[1]+this.TL;if(AcH&&!((AZL<BL)&&(AZM>0))){this.
Cd=Z;this.GJ=Io;this.AbK=[BcO,this.TL];(B=this.G7)?B[1].call(B[0],this):null;}if(((
Io===this.Ge)&&this.NF)&&!!AkM){var Q4=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Z.GetExtent(),Q4))>A.zS(A.kz(AkM.GetExtent(),Q4)))AkM=Z;}else if(Io===this.
Ge)AkM=Z;Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TL];}this.SL=0;this.SM=-1;this.Cd=
null;this.GJ=-1;this.A$(AkM);this.Ast=false;A.ow(this.Ej,this);},RO:function(Ah,
GC,aFilter){return null;},Apq:function(Ah,aFilter){return null;},U9:function(Ah,
aFilter){return null;},AAW:function(Ah,aFilter){return null;},C_:function(aFilter
){return BH;},NG:function(Km,FD,Lm,Lk,Ll){throw new Error(Zg);},AgS:function(Ah,
JW){throw new Error(St);},QG:function(Ah){throw new Error(Zh);},Ki:function(Ah,PN
){throw new Error(We);},HG:function(Ah){throw new Error(Ua);},AJ6:function(Ah,JW
){throw new Error(Wf);},J:function(Ah,PN){throw new Error(QT);},Jd:function(GT,AXV
){return GT*this.GK;},Alc:function(Fo,AXV){return(Fo/this.GK)|0;},Ay_:function(){
var Z=this.B4;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(
!!Z.AG)Z.AG.Af=null;else this.B7=null;this.B4=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhO){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxC:function(){var B;var Z=this.Hn;var Act=this.K9;var AcL=++this.Jh;
if(this.NF){if(AcL<0)AcL=this.AR-(-AcL%this.AR);if(AcL>0)AcL=AcL%this.AR;}while(
!!Z&&(((B=Z)?B.__proto__:null)!==Act))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!
!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{
Z=(C.Cd.isPrototypeOf(B=A._NewObject(Act,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.
AhO++;}this.TL=this.GK;this.GJ=AcL;this.AbK=[(B=this.M)[2]-B[0],this.TL];this.Cd=
Z;(B=this.G7)?B[1].call(B[0],this):null;this.Cd=null;this.GJ=-1;if(!!this.B4)this.
B4.Af=Z;Z.Ac=this;Z.AG=this.B4;this.B4=Z;if(!this.B7)this.B7=Z;if(AcL===this.Ge)
this.A$(Z);return Z;},AcG:function(){var Z=this.B7;if(!Z)return null;if(Z===this.
AY)this.A$(null);this.Ha=this.Ha+1;if(!!Z.Af)Z.Af.AG=null;else this.B4=null;this.
B7=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhO){if(!!this.Hn)this.Hn.
AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxB:function(){var B;var Z=this.
Hn;var Act=this.K9;var MO=--this.Ha;if(this.NF){if(MO<0)MO=this.AR-(-MO%this.AR);
if(MO>0)MO=MO%this.AR;}while(!!Z&&(((B=Z)?B.__proto__:null)!==Act))Z=Z.Af;if(!!Z
){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=
null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Act,0))?B:null
);Z.AV(0x1D);if(!!this.Ob)this.AhO++;}this.TL=this.GK;this.GJ=MO;this.AbK=[(B=this.
M)[2]-B[0],this.TL];this.Cd=Z;(B=this.G7)?B[1].call(B[0],this):null;this.Cd=null;
this.GJ=-1;if(!!this.B7)this.B7.AG=Z;Z.Ac=this;Z.Af=this.B7;this.B7=Z;if(!this.B4
)this.B4=Z;if(MO===this.Ge)this.A$(Z);return Z;},Aow:function(H){var B;this.BT.Q=
null;this.BT.P1=null;this.BT=null;(B=this.Ns)?B[1].call(B[0],this):null;},BwO:function(
H){this.Gj(this.VU.Dz[1]);},BwP:function(H){var B;if(!!this.BT){this.BT.Ap(false
);this.BT.Q=null;this.BT.P1=null;this.BT=null;}if(!this.NF){var AD=this.Apv(0,this.
AR-1);var Afs=this.M.slice(0,2);AD=A.aaS(AD,AD[1]-this.OC);if(AD[0]>Afs[0])AD=[].
concat(Afs[0],AD.slice(1,4));if(AD[1]>Afs[1])AD=A.aaS(AD,Afs[1]);var Ff=AD[1]-this.
M[1];var AZZ=((B=this.M)[3]-B[1])-(AD[3]-AD[1]);if(AZZ>0)AZZ=0;this.VU.Dz=[0,this.
Bn];this.VU.Gb=[0,(this.Bn+AZZ)-Ff];this.VU.FQ=[0,this.Bn-Ff];}else{var Ff=32000-(
32000%this.GK);this.VU.Dz=[0,this.Bn];this.VU.Gb=[0,this.Bn-Ff];this.VU.FQ=[0,this.
Bn+Ff];}},AQK:function(E){var B;if(this.NF===E)return;this.NF=E;while(!!this.AcG(
));this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Avq:function(E){if(E===
this.VU)return;if(!!E&&!!E.AsG){A.aa8("%s%*%s",Wg,E,OO);throw new Error(PK);}if(
!!this.VU){this.VU.AIQ=null;this.VU.AsG=null;}this.VU=E;if(!!E){E.AIQ=[this,this.
BwP];E.AsG=[this,this.BwO];}},Gj:function(E){var B;if(this.NF&&(this.AR>0)){var Hp=
this.Jd(this.AR,3);if(E<0)E=Hp-(-E%Hp);if(E>0)E=E%Hp;if(E>0)E=E-Hp;}if(E===this.
Bn)return;this.Bn=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GL:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},A6W:function(E){var B;
if(E<0)E=0;if(E===this.OC)return;this.OC=E;if(!this.NF){this.Am();this.Bg([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);}},Ad5:function(E){var B;if(E<1)E=1;if(E===this.GK
)return;this.GK=E;while(!!this.AcG());this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.AR)return;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NF){if(E>this.AR){AD=[].concat(AD.slice(0,
3),(this.OC+this.Bn)+this.Jd(E,3));AD=A.aaS(AD,(this.OC+this.Bn)+this.Jd(this.AR
,3));}else{AD=A.aaS(AD,(this.OC+this.Bn)+this.Jd(E,3));AD=[].concat(AD.slice(0,3
),(this.OC+this.Bn)+this.Jd(this.AR,3));}}else while(!!this.AcG());this.AR=E;this.
Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;this.K9=E;while(!!
this.AcG());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3
]-B[1]]);},Bfl:function(GT){if(this.Ast)return null;if((GT<0)||(GT>=this.AR))return null;
if(!this.NF){if((GT<this.Ha)||(GT>this.Jh))return null;var W=this.B7;while(GT>this.
Ha){W=W.Af;GT=GT-1;}return W;}else{var MO=this.Ha;if(MO<0)MO=this.AR-(-MO%this.AR
);if(MO>0)MO=MO%this.AR;var W=this.B7;while(!!W){if((MO%this.AR)===GT)return W;W=
W.Af;MO=MO+1;}return null;}},AzO:function(Ab2,EW){var B;if(this.NF){(EW)?EW[1].call(
EW[0],this):null;return;}var AIj=this.Bn;var A$B=((((B=this.M)[3]-B[1])-this.Bn)-
this.OC)-this.Jd(this.AR,3);var Bm=0;if(AIj>0)Bm=-AIj;else if(A$B>0)Bm=A$B;if((Bm>
0)&&(Bm>-AIj))Bm=-AIj;if(!Bm){(EW)?EW[1].call(EW[0],this):null;return;}if(!!this.
BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;}this.BT=Ab2;if(
!this.BT){this.Gj(this.Bn+Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(
false);this.BT.IF(1);this.BT.Q=[this,this.Amw,this.Gj];this.BT.Cv=this.Bn;this.BT.
B0=this.Bn+Bm;this.BT.P1=[this,this.Aow];this.BT.Ad7(false);this.BT.Ap(true);this.
Ns=EW;}},Hx:function(GT,Ab6,Ab2,EW){var B;if((GT<0)||(GT>=this.AR))return;var AM=
this.Apv(GT,GT);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2])||(Lu[
1]>=Lu[3])))||(Ab6&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var Bm=
0;if(AM[3]>A8[3])Bm=AM[3]-A8[3];if(Bm>(AM[1]-A8[1]))Bm=AM[1]-A8[1];if(!!this.BT){
this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;}this.BT=Ab2;if(!this.
BT){this.Gj(this.Bn-Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(false);
this.BT.IF(1);this.BT.Q=[this,this.Amw,this.Gj];this.BT.Cv=this.Bn;this.BT.B0=this.
Bn-Bm;this.BT.P1=[this,this.Aow];this.BT.Ad7(false);this.BT.Ap(true);this.Ns=EW;
}},Bfd:function(){return BH;},AMI:function(){if((this.OC<=0)||this.NF)return BH;
var AD=this.M;AD=A.aaS(AD,AD[1]+this.Bn);AD=[].concat(AD.slice(0,3),AD[1]+this.OC
);return AD;},A3T:function(Fo){if(((this.AR<=0)||(Fo[0]<this.M[0]))||(Fo[0]>=this.
M[2]))return-1;Fo=A.aaj(Fo,this.M.slice(0,2));if(!this.NF){var Z=(Fo[1]-this.Bn)-
this.OC;if(Z>0)Z=this.Alc(Z,0);if((Z<0)||(Z>=this.AR))return-1;return Z;}var Z=Fo[
1]-this.Bn;if(Z>0)Z=this.Alc(Z,0);if(Z<0)Z=this.Alc(Z,0)-1;if(Z<0)Z=this.AR-(-Z%
this.AR);if(Z>0)Z=Z%this.AR;return Z;},Apv:function(JV,LZ){if(JV<0)JV=0;if(LZ>=this.
AR)LZ=this.AR-1;if(JV>LZ)return BH;var AD=this.M;var Bm=this.Bn;if(this.NF){var Hp=
this.Jd(this.AR,3);if(Bm<0)Bm=Hp-(-Bm%Hp);if(Bm>0)Bm=Bm%Hp;if(Bm>0)Bm=Bm-Hp;}else
Bm=Bm+this.OC;AD=[].concat(AD.slice(0,3),(AD[1]+Bm)+this.Jd(LZ+1,0));AD=A.aaS(AD
,(AD[1]+Bm)+this.Jd(JV,0));return AD;},AaP:function(JV,LZ){var B;if(JV<0)JV=0;if(
JV>LZ)return;if(this.SL>this.SM){this.SL=JV;this.SM=LZ;}else{if(JV<this.SL)this.
SL=JV;if(LZ>this.SM)this.SM=LZ;}var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.
NF){AD=A.aaS(AD,(this.OC+this.Bn)+this.Jd(JV,0));AD=[].concat(AD.slice(0,3),(this.
OC+this.Bn)+this.Jd(LZ+1,0));}else if((this.Jd(this.AR-1,3)>=(AD[3]-AD[1]))&&((AD[
3]-AD[1])>0)){var Bm=this.Bn;var Hp=this.Jd(this.AR,3);if(Bm<0)Bm=Hp-(-Bm%Hp);if(
Bm>0)Bm=Bm%Hp;if(Bm>0)Bm=Bm-Hp;AD=A.aaS(AD,Bm+this.Jd(JV,0));AD=[].concat(AD.slice(
0,3),Bm+this.Jd(LZ+1,0));}this.Am();this.Bg(AD);},Amw:function(){return this.Bn;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CI;this.G(Ub);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VU)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ns)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G7)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hn:null
,BT:null,Cd:null,Ns:null,G7:null,SM:-1,SL:0,Jh:-1,Ha:0,AhO:8,Ob:0,Sb:0,AbK:A.vw,
GJ:-1,Bn:0,Ge:-1,Vr:24,AR:0,K9:null,Ast:false,ASv:function(Ii,N3,Wr,SB,SC,Ahm,OT
,Q0,Lm,Lk,Ll){throw new Error(Zi);},Apk:function(Ii,Ahm,OT,Q0,Lm,Lk,Ll){throw new
Error(Wh);},AjS:function(Ii,N3,Wr,SB,SC,OT,Q0,Lm,Lk,Ll){throw new Error(Zj);},DispatchEvent:
function(CK){var B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY
){this.GJ=this.Ge;this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);
if(!!this.B4)this.B4.Af=this.Cd;else this.B7=this.Cd;this.Cd.AG=this.B4;this.B4=
this.Cd;this.Cd.Ac=this;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];(B=this.G7)?B[1].call(
B[0],this):null;var B8=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B8)result=B8.DispatchEvent(
CK);else result=this.Cd.GH(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B7=null;
this.B4=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
)return;this.Ast=true;var FH=this.Alc(0-this.Bn,1);var GF=this.Alc((((B=this.M)[
2]-B[0])-this.Bn)-1,2);var CO=GF-FH;if(CO<1)CO=1;var Ahs=(CO/2)|0;var Aht=(CO/3)|
0;if(!Ahs)Ahs=1;if(!Aht)Aht=1;if(FH<this.Ha){FH=FH-Ahs;GF=GF+Aht;}else if(GF>this.
Jh){FH=FH-Aht;GF=GF+Ahs;}else{FH=this.Ha;GF=this.Jh;}if(FH>=this.AR){FH=0;GF=-1;
}else if(GF<0){FH=0;GF=-1;}if(GF>=this.AR)GF=this.AR-1;if(FH<0)FH=0;var Ah5=this.
Ha;var Ah6=this.Jh;var Aoj=0;var Aok=-1;if(FH>Ah5)Ah5=FH;if(GF<Ah6)Ah6=GF;if(Ah5<=
Ah6){while((this.Jh<GF)&&(this.Ha<Ah5)){this.AcG();this.AxC();}while((this.Ha>FH
)&&(this.Jh>Ah6)){this.Ay_();this.AxB();}}else{this.Jh=(this.Jh-this.Ha)+FH;this.
Ha=FH;Aoj=this.Ha;Aok=this.Jh;}while(this.Ha<FH)this.AcG();while(this.Jh>GF)this.
Ay_();while(this.Ha>FH)this.AxB();while(this.Jh<GF)this.AxC();var Z=this.B7;var inx=
this.Ha;var pos=[this.Bn+this.Jd(inx,0),0];var BU=(B=this.M)[2]-B[0];var AkM=null;
var BcE=(B=this.M)[3]-B[1];while(!!Z){var Io=inx;var AcH=((Io>=this.SL)&&(Io<=this.
SM))||((inx>=Aoj)&&(inx<=Aok));var An2=Z.GetExtent();var Bm=A.aaj(pos,An2.slice(
0,2));if(AcH)this.Sb=this.Vr;else this.Sb=An2[2]-An2[0];var AZJ=pos[0];var AZK=pos[
0]+this.Sb;if(!A.z8(Bm,B_))Z.Aml(Bm,true);if((AcH&&(AZJ<BU))&&(AZK>0)){this.Cd=Z;
this.GJ=Io;this.AbK=[this.Sb,BcE];(B=this.G7)?B[1].call(B[0],this):null;}Z=Z.Af;
inx+=1;pos=[pos[0]+this.Sb,pos[1]];}inx=this.Ha;Z=this.B7;pos=[this.Bn+this.Jd(inx
,0),0];while(!!Z){var Io=inx;var AcH=((Io>=this.SL)&&(Io<=this.SM))||((inx>=Aoj)&&(
inx<=Aok));if(AcH)this.Sb=this.Vr;else this.Sb=(B=Z.GetExtent())[2]-B[0];var AZJ=
pos[0];var AZK=pos[0]+this.Sb;if(AcH&&!((AZJ<BU)&&(AZK>0))){this.Cd=Z;this.GJ=Io;
this.AbK=[this.Sb,BcE];(B=this.G7)?B[1].call(B[0],this):null;}if(Io===this.Ge)AkM=
Z;Z=Z.Af;inx+=1;pos=[pos[0]+this.Sb,pos[1]];}this.SL=0;this.SM=-1;this.Cd=null;this.
GJ=-1;this.A$(AkM);this.Ast=false;},RO:function(Ah,GC,aFilter){return null;},Apq:
function(Ah,aFilter){return null;},U9:function(Ah,aFilter){return null;},AAW:function(
Ah,aFilter){return null;},C_:function(aFilter){return BH;},NG:function(Km,FD,Lm,
Lk,Ll){throw new Error(Zk);},AgS:function(Ah,JW){throw new Error(Wi);},QG:function(
Ah){throw new Error(Wj);},Ki:function(Ah,PN){throw new Error(Su);},HG:function(Ah
){throw new Error(Zl);},AJ6:function(Ah,JW){throw new Error(Zm);},J:function(Ah,
PN){throw new Error(AbO);},Jd:function(GT,AXV){return GT*this.Vr;},Alc:function(
Fo,AXV){return(Fo/this.Vr)|0;},Ay_:function(){var Z=this.B4;if(!Z)return null;if(
Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(!!Z.AG)Z.AG.Af=null;else this.B7=
null;this.B4=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhO){if(!!this.Hn
)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxC:function(){var B;
var Z=this.Hn;var Act=this.K9;var AcL=++this.Jh;while(!!Z&&(((B=Z)?B.__proto__:null
)!==Act))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===
Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(
Act,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.AhO++;}this.Sb=this.Vr;this.GJ=AcL;
this.AbK=[this.Sb,(B=this.M)[3]-B[1]];this.Cd=Z;(B=this.G7)?B[1].call(B[0],this):
null;this.Cd=null;this.GJ=-1;if(!!this.B4)this.B4.Af=Z;Z.Ac=this;Z.AG=this.B4;this.
B4=Z;if(!this.B7)this.B7=Z;if(AcL===this.Ge)this.A$(Z);return Z;},AcG:function(){
var Z=this.B7;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Ha=this.Ha+1;if(
!!Z.Af)Z.Af.AG=null;else this.B4=null;this.B7=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhO){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxB:function(){var B;var Z=this.Hn;var Act=this.K9;var MO=--this.Ha;
while(!!Z&&(((B=Z)?B.__proto__:null)!==Act))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;
if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;
}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Act,0))?B:null);Z.AV(0x1D);if(!!this.
Ob)this.AhO++;}this.Sb=this.Vr;this.GJ=MO;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];
this.Cd=Z;(B=this.G7)?B[1].call(B[0],this):null;this.Cd=null;this.GJ=-1;if(!!this.
B7)this.B7.AG=Z;Z.Ac=this;Z.Af=this.B7;this.B7=Z;if(!this.B4)this.B4=Z;if(MO===this.
Ge)this.A$(Z);return Z;},Aow:function(H){var B;this.BT.Q=null;this.BT.P1=null;this.
BT=null;(B=this.Ns)?B[1].call(B[0],this):null;},Gj:function(E){var B;if(E===this.
Bn)return;this.Bn=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GL:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},ADg:function(E){var B;
if(E<1)E=1;if(E===this.Vr)return;this.Vr=E;while(!!this.AcG());this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.
AR)return;var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AR){AD=[].concat(this.
Bn+this.Jd(this.AR,3),AD.slice(1,4));AD=A.aaQ(AD,this.Bn+this.Jd(E,3));}else{AD=
A.aaQ(AD,this.Bn+this.Jd(this.AR,3));AD=[].concat(this.Bn+this.Jd(E,3),AD.slice(
1,4));}this.AR=E;this.Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;
this.K9=E;while(!!this.AcG());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bll:function(BtN,BtO){if(!this.BT)return;if(BtN)this.Gj(
this.BT.B0);var A1n=this.Ns;this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.
Ns=null;this.BT=null;if(BtO)(A1n)?A1n[1].call(A1n[0],this):null;},BfN:function(){
return!!this.BT;},Hx:function(GT,Ab6,Ab2,EW){var B;if((GT<0)||(GT>=this.AR))return;
var AM=this.Apv(GT,GT);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2
])||(Lu[1]>=Lu[3])))||(Ab6&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;
}var Bm=0;if(AM[2]>A8[2])Bm=AM[2]-A8[2];if(Bm>(AM[0]-A8[0]))Bm=AM[0]-A8[0];if(!!
this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;}this.BT=
Ab2;if(!this.BT){this.Gj(this.Bn-Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.
BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amw,this.Gj];this.BT.Cv=this.Bn;
this.BT.B0=this.Bn-Bm;this.BT.P1=[this,this.Aow];this.BT.Ad7(false);this.BT.Ap(true
);this.Ns=EW;}},Apv:function(JV,LZ){if(JV<0)JV=0;if(LZ>=this.AR)LZ=this.AR-1;if(
JV>LZ)return BH;var AD=this.M;var Bm=this.Bn;AD=A.aaQ(AD,(AD[0]+Bm)+this.Jd(LZ+1
,0));AD=[].concat((AD[0]+Bm)+this.Jd(JV,0),AD.slice(1,4));return AD;},AaP:function(
JV,LZ){var B;if(JV<0)JV=0;if(JV>LZ)return;if(this.SL>this.SM){this.SL=JV;this.SM=
LZ;}else{if(JV<this.SL)this.SL=JV;if(LZ>this.SM)this.SM=LZ;}var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AD=[].concat(this.Bn+this.Jd(JV,0),AD.slice(1,4));AD=A.aaQ(
AD,this.Bn+this.Jd(LZ+1,0));this.Am();this.Bg(AD);},Amw:function(){return this.Bn;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.G(Ub);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ns)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bh={AP2:null,ACM:null,Auz:null,DU:null,
K$:null,BS:null,AI_:0,Bp:0,Iy:0,Bu:0,NU:0,Jk:0,Dz:A.vw,NI:A.vw,HU:A.vw,AvQ:8,Aeh:
0,A4G:1,Down:false,XX:false,NA:false,AY$:false,Ayp:0,J_:function(CW,aClip,aOffset
,Ce,aBlend){},GH:function(CK){var B;var BO=(C.Adg.isPrototypeOf(CK)?CK:null);var
DX=(C.Apm.isPrototypeOf(CK)?CK:null);var AIu=this.XX;var ZQ;var Us;var Azs;var MM;
var AxV;if(!BO&&!DX)return null;ZQ=(!!BO&&BO.Down)&&!BO.Jk;Us=(!!BO&&BO.Down)&&(
BO.Jk>0);Azs=(!!BO&&BO.Down)&&(BO.Jk>this.Ayp);MM=!!BO&&!BO.Down;AxV=!!DX;if(ZQ)
this.Ayp=((B=(BO.NA?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aeh&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var In=(C.Ats.isPrototypeOf(CK)?CK:null);if(((
!!In&&In.Down)&&(In.Av5!==this))&&A.vt(this.GetExtent(),this.Ac.A4C(In.LE))){this.
AI_=0x20;this.Bp=this.Bp|67108864;return null;}}if(ZQ){var Aoq=0;var Acn;this.Bp=
this.Bp|(1<<BO.Iy);for(Acn=this.Bp&4095;Acn>0;Acn=Acn>>1)if(!!(Acn&1))Aoq=Aoq+1;
if(Aoq===1)this.Bp=(this.Bp|16777216)|(4096<<BO.Iy);}if(MM&&(this.Bp<16777216)){
var Iq=this.Ib();var Jz=null;if(!!Iq){var A1f=(!!this.AG?this.AG:this.Ac);var AYZ=(
!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xv(A.aam(Sv,BO.LE),BO.Iy,BO.NU,AYZ,A1f,0x0);}if(!!Jz
){var P;for(P=0;P<10;P++)if(!!(this.Bp&(1<<P)))Jz.Cd.GH(A._NewObject(C.Adg,0).InitializeDown(
P,BO.HU,BO.NU,B_,true,BO.LE));for(P=0;P<10;P++)if(!!(this.Bp&(1<<P)))Jz.Cd.GH(A.
_NewObject(C.Adg,0).InitializeUp(P,BO.HU,BO.HU,0,BO.NU,B_,false,BO.LE,BO.LE));}}
if(MM)this.Bp=(this.Bp&~(1<<BO.Iy))|33554432;if(Azs&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MM&&BO.NA)this.Bp=this.Bp|67108864;if(MM&&!(this.Bp&4095))this.
AI_=0x0;if(MM&&!(this.Bp&16777215))this.Bp=0;if(Us&&(this.Bp>=67108864)){var Iq=
this.Ib();if(!!Iq)Iq.ARX(null,null,this,this.AI_);}if((Us&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Us=false;MM=true;}if(!!BO&&!(this.Bp&(4096<<BO.Iy)))return this;
if(!!DX&&!(this.Bp&(4096<<DX.Iy)))return this;if(MM&&!(this.Bp&16777216))return this;
if(((ZQ||AxV)||Us)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MM)
this.Bp=this.Bp&3758100479;if(MM&&!(this.Bp&16777215))this.Bp=0;if(!!BO){this.Down=
ZQ||Us;this.XX=this.AOY(BO.HU);this.NI=BO.NI;this.HU=BO.HU;this.Dz=B_;this.Jk=BO.
Jk;this.NU=BO.NU;this.NA=BO.NA;this.Iy=BO.Iy;this.Bu=BO.Bu;if(BO.Down&&!BO.Jk)AIu=
false;}if(!!DX){this.Down=true;this.XX=this.AOY(DX.HU);this.NI=DX.NI;this.HU=DX.
HU;this.Dz=DX.Dz;this.Jk=DX.Jk;this.NU=DX.NU;this.Iy=DX.Iy;this.NA=false;this.Bu=
DX.Bu;}var AY5=this.Down;if(!!DX)(B=this.AP2)?B[1].call(B[0],this):null;if((!!BO&&
this.Down)&&!this.Jk)(B=this.BS)?B[1].call(B[0],this):null;if((!!BO&&this.Down)&&(
this.Jk>0))(B=this.DU)?B[1].call(B[0],this):null;if((this.Down&&this.XX)&&!AIu){
this.AY$=true;(B=this.Auz)?B[1].call(B[0],this):null;}if(this.AY$&&(((AY5&&!this.
XX)&&AIu)||((!AY5&&this.XX)&&AIu))){this.AY$=false;(B=this.ACM)?B[1].call(B[0],this
):null;}if(!!BO&&!AY5)(B=this.K$)?B[1].call(B[0],this):null;if(!!this.Aeh){var AcF=
0x0;if(((((this.Aeh&0x10)===0x10)&&!!BO)&&BO.Down)&&(BO.Jk>=1000))AcF=0x10;if((((
this.Aeh&0x1)===0x1)&&!!DX)&&((DX.LE[1]-DX.Af_[1])<=-this.AvQ))AcF=0x1;if((((this.
Aeh&0x2)===0x2)&&!!DX)&&((DX.LE[1]-DX.Af_[1])>=this.AvQ))AcF=0x2;if((((this.Aeh&
0x4)===0x4)&&!!DX)&&((DX.LE[0]-DX.Af_[0])<=-this.AvQ))AcF=0x4;if((((this.Aeh&0x8
)===0x8)&&!!DX)&&((DX.LE[0]-DX.Af_[0])>=this.AvQ))AcF=0x8;if(!!AcF){var Iq=this.
Ib();if(!!Iq){this.AI_=AcF;Iq.ARX(null,this,this,AcF);}}}return this;},Xv:function(
Dc,BG,N4,Ab4,Ab9,Ab8){var B;if(!!Ab4&&(Ab4!==this))return null;if((N4<1)||(N4>this.
A4G))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BG)))return null;if(!!(Ab8&this.Aeh))return null;if(this.Bfr()){var AM=
A.kz(Dc,this.GetExtent());if(!((AM[0]>=AM[2])||(AM[1]>=AM[3]))){var PQ=A.zT(Dc);
var Ff=B_;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0]
)-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3
]-PQ[1])-1];return A._NewObject(C.Att,0).Initialize(this,Ff);}}else{var Ho=A.aan(
9,A.vw,null);var P;Ho.Set(0,A.zT(Dc));Ho.Set(1,Ho.Get(0));Ho.Set(2,Ho.Get(0));Ho.
Set(3,Ho.Get(0));Ho.Set(4,Ho.Get(0));Ho.Set(1,[Dc[0],Ho.Get(1)[1]]);Ho.Set(2,[Ho.
Get(2)[0],Dc[1]]);Ho.Set(3,[Dc[2],Ho.Get(3)[1]]);Ho.Set(4,[Ho.Get(4)[0],Dc[3]]);
Ho.Set(5,Dc.slice(0,2));Ho.Set(6,[Dc[2],Dc[1]]);Ho.Set(7,[Dc[0],Dc[3]]);Ho.Set(8
,Dc.slice(2,4));for(P=0;P<9;P=P+1)if(this.AOY(Ho.Get(P)))return A._NewObject(C.Att
,0).Initialize(this,A.aaj(Ho.Get(P),Ho.Get(0)));}return null;},BjN:function(E){if(
E<1)E=1;this.AvQ=E;},ADp:function(E){if(E<1)E=1;this.A4G=E;},Ap:function(E){if(E
)this.C3(0x10,0x0);else this.C3(0x0,0x10);},_Init:function(aArg){C.YR._Init.call(
this,aArg);this.__proto__=C.Bh;this.U=0x11B;},_Mark:function(D){var B;C.YR._Mark.
call(this,D);if((B=this.AP2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ACM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auz)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.K$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"};C.H2={
timer:null,AIQ:null,AsG:null,AD5:null,YA:null,R$:null,Bp:0,AHr:0,Acq:5000,AoL:0,
AIs:A.vw,AnZ:0,Ae3:0,EP:0,Aln:0,AsV:0,AnY:0,Ae2:0,EO:0,Alm:0,Alk:0,NI:A.vw,A24:A.
vw,FQ:A.vw,Gb:A.vw,Dz:A.vw,VX:A.vw,A3J:0.5,A7J:true,AEH:true,Y1:false,WV:false,WW:
false,AnI:false,Ayp:0,J_:function(CW,aClip,aOffset,Ce,aBlend){},GH:function(CK){
var B;var BO=(C.Adg.isPrototypeOf(CK)?CK:null);var DX=(C.Apm.isPrototypeOf(CK)?CK:
null);var In=(C.Ats.isPrototypeOf(CK)?CK:null);var ZQ;var Us;var Azs;var MM;var AxV;
ZQ=(!!BO&&BO.Down)&&!BO.Jk;Us=(!!BO&&BO.Down)&&(BO.Jk>0);Azs=(!!BO&&BO.Down)&&(BO.
Jk>this.Ayp);MM=!!BO&&!BO.Down;AxV=!!DX;if(ZQ)this.Ayp=((B=(BO.NA?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if(ZQ){var Aoq=0;var Acn;this.Bp=this.Bp|(1<<BO.Iy);for(Acn=this.
Bp&4095;Acn>0;Acn=Acn>>1)if(!!(Acn&1))Aoq=Aoq+1;if(Aoq===1)this.Bp=(this.Bp|16777216
)|(4096<<BO.Iy);}if(MM&&(this.Bp<16777216)){var Iq=this.Ib();var Jz=null;if(!!Iq
){var A1f=(!!this.AG?this.AG:this.Ac);var AYZ=(!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xv(A.
aam(Sv,BO.LE),BO.Iy,BO.NU,AYZ,A1f,0x0);}if(!!Jz){var P;for(P=0;P<10;P++)if(!!(this.
Bp&(1<<P)))Jz.Cd.GH(A._NewObject(C.Adg,0).InitializeDown(P,BO.HU,BO.NU,B_,true,BO.
LE));for(P=0;P<10;P++)if(!!(this.Bp&(1<<P)))Jz.Cd.GH(A._NewObject(C.Adg,0).InitializeUp(
P,BO.HU,BO.HU,0,BO.NU,B_,false,BO.LE,BO.LE));}}if(MM)this.Bp=(this.Bp&~(1<<BO.Iy
))|33554432;if(Azs&&(this.Bp<16777216))this.Bp=this.Bp|67108864;if(MM&&BO.NA)this.
Bp=this.Bp|67108864;if(MM&&!(this.Bp&16777215))this.Bp=0;if(Us&&(this.Bp>=67108864
)){var Iq=this.Ib();if(!!Iq)Iq.ARX(null,null,this,0x0);}if((Us&&!!(this.Bp&16777216
))&&!!(this.Bp&33554432)){Us=false;MM=true;}if(!!BO&&!(this.Bp&(4096<<BO.Iy)))return this;
if(!!DX&&!(this.Bp&(4096<<DX.Iy)))return this;if(MM&&!(this.Bp&16777216))return this;
if(((ZQ||AxV)||Us)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MM)
this.Bp=this.Bp&3758100479;if(MM&&!(this.Bp&16777215))this.Bp=0;if(!!In&&(In.Av5===
this))return null;if((!!In&&In.Down)&&(this.AnI||!this.Y1))return null;if((!!In&&
In.Down)&&!A.vt(this.M,this.Ac.A4C(In.LE)))return null;if((!!In&&!In.Down)&&(!this.
AnI||(this.AHr!==In.Iy)))return null;if((!BO&&!DX)&&!In)return null;if(!!BO){this.
AnI=ZQ||Us;this.AHr=BO.Iy;this.NI=BO.NI;}if(!!DX)this.AHr=DX.Iy;if(!!In){this.AnI=
In.Down;this.AHr=In.Iy;}if(!!In&&In.Down){this.A1g();this.EO=(((In.Bu-this.Alk)*
0.001)*this.Ae2)+this.EO;this.EP=(((In.Bu-this.AsV)*0.001)*this.Ae3)+this.EP;if(
this.WV)this.EO=0;if(this.WW)this.EP=0;this.Ae2=0;this.Ae3=0;this.WV=false;this.
WW=false;this.AIs=this.Dz;this.AoL=In.Bu;return this;}if(ZQ){this.A1g();this.EO=(((
BO.Bu-this.Alk)*0.001)*this.Ae2)+this.EO;this.EP=(((BO.Bu-this.AsV)*0.001)*this.
Ae3)+this.EP;if(this.WV||!this.Y1)this.EO=0;if(this.WW||!this.Y1)this.EP=0;this.
Ae2=0;this.Ae3=0;this.WV=false;this.WW=false;if(!this.Y1){this.Y1=true;(B=this.R$
)?B[1].call(B[0],this):null;(B=this.AIQ)?B[1].call(B[0],this):null;}this.AIs=this.
Dz;this.AoL=BO.Bu;}if(!!DX){var GW=A.aaj(DX.HU,DX.NI);var CA=this.Dz;if(this.AEH
)CA=[this.AIs[0]+GW[0],CA[1]];CA=[CA[0],this.AIs[1]+GW[1]];if(this.A7J){if(CA[0]<
this.Gb[0])CA=[this.Gb[0]+(((CA[0]-this.Gb[0])/2)|0),CA[1]];else if(CA[0]>this.FQ[
0])CA=[this.FQ[0]+(((CA[0]-this.FQ[0])/2)|0),CA[1]];if(CA[1]<this.Gb[1])CA=[CA[0
],this.Gb[1]+(((CA[1]-this.Gb[1])/2)|0)];else if(CA[1]>this.FQ[1])CA=[CA[0],this.
FQ[1]+(((CA[1]-this.FQ[1])/2)|0)];}else{if(CA[0]<this.Gb[0])CA=[this.Gb[0],CA[1]
];else if(CA[0]>this.FQ[0])CA=[this.FQ[0],CA[1]];if(CA[1]<this.Gb[1])CA=[CA[0],this.
Gb[1]];else if(CA[1]>this.FQ[1])CA=[CA[0],this.FQ[1]];}if(!A.z8(CA,this.Dz)){this.
A24=A.aaj(CA,this.Dz);this.Dz=CA;(B=this.AsG)?B[1].call(B[0],this):null;(B=this.
AD5)?B[1].call(B[0],this):null;}}if((!!In&&!In.Down)&&((In.Bu-this.AoL)>=200)){this.
EO=0;this.EP=0;}if(Us&&((BO.Bu-this.AoL)>=200)){this.EO=0;this.EP=0;}if(!!DX&&(DX.
Bu>this.AoL)){var GW=DX.Dz;var A$5=1000/(DX.Bu-this.AoL);var AhR=0;var AhS;if(this.
AEH)AhR=GW[0]*A$5;AhS=GW[1]*A$5;if((AhR*this.EO)<0)this.EO=0;if((AhS*this.EP)<0)
this.EP=0;this.EO=(this.EO+AhR)*0.5;this.EP=(this.EP+AhS)*0.5;this.AoL=DX.Bu;}if(
!MM&&!In)return this;if(!!BO&&BO.NA){this.EO=0;this.EP=0;}if((this.Dz[0]<=this.Gb[
0])||(this.Dz[0]>=this.FQ[0]))this.EO=0;else if(!this.EO){var EH=this.Dz[0];var E3=
this.Gb[0];var Ey=this.FQ[0];if(EH<E3)Ey=this.Gb[0];else if(EH>Ey)E3=this.FQ[0];
else if(this.VX[0]<=1){E3=EH;Ey=EH;}else{var Acv=(Ey-EH)%this.VX[0];Ey=(EH-this.
VX[0])+Acv;E3=EH+Acv;if(Ey<this.Gb[0])Ey=this.Gb[0];if(E3>this.FQ[0])E3=this.FQ[
0];}if((E3-EH)<=(EH-Ey))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){var Jc=EH-this.Dz[0
];if(Jc>0)this.EO=Math.sqrt((Jc*2)*this.Acq)+20;if(Jc<0)this.EO=-Math.sqrt((-Jc*
2)*this.Acq)-20;this.Ae2=(400-(this.EO*this.EO))/(2*Jc);this.AnY=EH;}}else{var BxM=
this.EO*this.EO;var Jc=BxM/(2*this.Acq);var EH=this.Dz[0];if(this.EO>0)EH=EH+(Jc|
0);if(this.EO<0)EH=EH-(Jc|0);if(EH>this.FQ[0])EH=this.FQ[0];else if(EH<this.Gb[0
])EH=this.Gb[0];var Bcz=EH;var E3=this.Gb[0];var Ey=this.FQ[0];if(EH<E3)Ey=this.
Gb[0];else if(EH>Ey)E3=this.FQ[0];else if(this.VX[0]<=1){E3=EH;Ey=EH;}else{var Acv=(
Ey-EH)%this.VX[0];Ey=(EH-this.VX[0])+Acv;E3=EH+Acv;if(Ey<this.Gb[0])Ey=this.Gb[0
];if(E3>this.FQ[0])E3=this.FQ[0];}if(this.EO>0){if(Ey<=this.Dz[0])EH=E3;else if((
EH-Ey)<(E3-EH))EH=Ey;else EH=E3;}else if(E3>=this.Dz[0])EH=Ey;else if((EH-Ey)>(E3-
EH))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){Jc=EH-this.Dz[0];if(EH!==Bcz){var Aib=EH-
Bcz;if(Aib>0)this.EO=this.EO+Math.sqrt((Aib*2)*this.Acq);if(Aib<0)this.EO=this.EO-
Math.sqrt((-Aib*2)*this.Acq);}if(this.EO>0)this.EO=this.EO+20;if(this.EO<0)this.
EO=this.EO-20;this.Ae2=(400-(this.EO*this.EO))/(2*Jc);this.AnY=EH;}else this.EO=
0;}if((this.Dz[1]<=this.Gb[1])||(this.Dz[1]>=this.FQ[1]))this.EP=0;else if(!this.
EP){var EI=this.Dz[1];var E3=this.Gb[1];var Ey=this.FQ[1];if(EI<E3)Ey=this.Gb[1];
else if(EI>Ey)E3=this.FQ[1];else if(this.VX[1]<=1){E3=EI;Ey=EI;}else{var Acv=(Ey-
EI)%this.VX[1];Ey=(EI-this.VX[1])+Acv;E3=EI+Acv;if(Ey<this.Gb[1])Ey=this.Gb[1];if(
E3>this.FQ[1])E3=this.FQ[1];}if((E3-EI)<=(EI-Ey))EI=E3;else EI=Ey;if(EI!==this.Dz[
1]){var Jc=EI-this.Dz[1];if(Jc>0)this.EP=Math.sqrt((Jc*2)*this.Acq)+20;if(Jc<0)this.
EP=-Math.sqrt((-Jc*2)*this.Acq)-20;this.Ae3=(400-(this.EP*this.EP))/(2*Jc);this.
AnZ=EI;}}else{var BxN=this.EP*this.EP;var Jc=BxN/(2*this.Acq);var EI=this.Dz[1];
if(this.EP>0)EI=EI+(Jc|0);if(this.EP<0)EI=EI-(Jc|0);if(EI>this.FQ[1])EI=this.FQ[
1];else if(EI<this.Gb[1])EI=this.Gb[1];var BcA=EI;var E3=this.Gb[1];var Ey=this.
FQ[1];if(EI<E3)Ey=this.Gb[1];else if(EI>Ey)E3=this.FQ[1];else if(this.VX[1]<=1){
E3=EI;Ey=EI;}else{var Acv=(Ey-EI)%this.VX[1];Ey=(EI-this.VX[1])+Acv;E3=EI+Acv;if(
Ey<this.Gb[1])Ey=this.Gb[1];if(E3>this.FQ[1])E3=this.FQ[1];}if(this.EP>0){if(Ey<=
this.Dz[1])EI=E3;else if((EI-Ey)<(E3-EI))EI=Ey;else EI=E3;}else if(E3>=this.Dz[1
])EI=Ey;else if((EI-Ey)>(E3-EI))EI=E3;else EI=Ey;if(EI!==this.Dz[1]){Jc=EI-this.
Dz[1];if(EI!==BcA){var Aib=EI-BcA;if(Aib>0)this.EP=this.EP+Math.sqrt((Aib*2)*this.
Acq);if(Aib<0)this.EP=this.EP-Math.sqrt((-Aib*2)*this.Acq);}if(this.EP>0)this.EP=
this.EP+20;if(this.EP<0)this.EP=this.EP-20;this.Ae3=(400-(this.EP*this.EP))/(2*Jc
);this.AnZ=EI;}else this.EP=0;}if(!!BO)this.Alk=BO.Bu;if(!!In)this.Alk=In.Bu;this.
AsV=this.Alk;this.Alm=this.Dz[0];this.Aln=this.Dz[1];this.BxO();return this;},Xv:
function(Dc,BG,N4,Ab4,Ab9,Ab8){var B;if(!!Ab4&&(Ab4!==this))return null;if(this.
Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;
if(!this.AEH&&!!(Ab8&0xC))return null;var AM=A.kz(Dc,this.M);if(!((AM[0]>=AM[2])||(
AM[1]>=AM[3]))){var PQ=A.zT(Dc);var Ff=B_;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];
if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0])-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];
if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3]-PQ[1])-1];return A._NewObject(C.Att,0).Initialize(
this,Ff);}return null;},A1g:function(){if(!!this.timer){A.zl([this,this.L$],this.
timer,0);this.timer=null;}},BxO:function(){this.timer=A._GetAutoObject(A.abm.Af1
);A.y_([this,this.L$],this.timer,0);},L$:function(H){var B;if(!this.timer)return;
var As1=(this.timer.Bu-this.Alk)*0.001;var As2=(this.timer.Bu-this.AsV)*0.001;var
BxW=As1*As1;var BxX=As2*As2;var AhR=(this.Ae2*As1)+this.EO;var AhS=(this.Ae3*As2
)+this.EP;var CA=[((((this.Ae2*0.5)*BxW)+(this.EO*As1))+this.Alm)|0,((((this.Ae3
*0.5)*BxX)+(this.EP*As2))+this.Aln)|0];if(this.WV&&(As1>=0.5)){CA=[this.AnY,CA[1
]];this.EO=0;this.Ae2=0;this.Alm=CA[0];this.WV=false;}else if(this.WV){var Lt=1-
Math.pow(1-(As1/0.5),5);CA=[(this.Alm+((this.AnY-this.Alm)*Lt))|0,CA[1]];}if(this.
WW&&(As2>=0.5)){CA=[CA[0],this.AnZ];this.EP=0;this.Ae3=0;this.Aln=CA[1];this.WW=
false;}else if(this.WW){var Lt=1-Math.pow(1-(As2/0.5),5);CA=[CA[0],(this.Aln+((this.
AnZ-this.Aln)*Lt))|0];}if(((this.EO>0)&&(AhR<0))||((this.EO<0)&&(AhR>0))){AhR=0;
CA=[this.Dz[0],CA[1]];}if(((this.EP>0)&&(AhS<0))||((this.EP<0)&&(AhS>0))){AhS=0;
CA=[CA[0],this.Dz[1]];}if(!this.WV&&(CA[0]<this.Gb[0])){this.Alm=CA[0];this.AnY=
this.Gb[0];this.Alk=this.timer.Bu;this.WV=true;}else if(!this.WV&&(CA[0]>this.FQ[
0])){this.Alm=CA[0];this.AnY=this.FQ[0];this.Alk=this.timer.Bu;this.WV=true;}if(
!this.WW&&(CA[1]<this.Gb[1])){this.Aln=CA[1];this.AnZ=this.Gb[1];this.AsV=this.timer.
Bu;this.WW=true;}else if(!this.WW&&(CA[1]>this.FQ[1])){this.Aln=CA[1];this.AnZ=this.
FQ[1];this.AsV=this.timer.Bu;this.WW=true;}if(((!this.WV&&!!this.EO)&&(AhR>-20))&&(
AhR<20)){CA=[this.AnY,CA[1]];this.EO=0;this.Ae2=0;this.Alm=CA[0];}if(((!this.WW&&
!!this.EP)&&(AhS>-20))&&(AhS<20)){CA=[CA[0],this.AnZ];this.EP=0;this.Ae3=0;this.
Aln=CA[1];}if(!A.z8(CA,this.Dz)){this.A24=A.aaj(CA,this.Dz);this.Dz=CA;(B=this.AsG
)?B[1].call(B[0],this):null;(B=this.AD5)?B[1].call(B[0],this):null;}if(((!this.EO&&
!this.EP)&&!this.WV)&&!this.WW){this.A1g();this.Y1=false;(B=this.YA)?B[1].call(B[
0],this):null;}},AQ_:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
VX=E;},AQO:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A3J)return;this.A3J=E;if(
E<(1e-007))E=1e-007;this.Acq=E*10000;},_Init:function(aArg){C.EC._Init.call(this
,aArg);this.__proto__=C.H2;this.U=0x11B;},_Mark:function(D){var B;C.EC._Mark.call(
this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIQ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AsG)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AD5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
YA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.R$)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BR={Af:null,K$:
null,BS:null,DU:null,AoH:0,Bu:0,A7F:0,Filter:148,CP:0,D4:0,Bw:true,Down:false,Abs:
false,Pc:false,Init:function(aArg){var B;var Dj=(C.O.isPrototypeOf(B=this.I)?B:null
);if(!Dj)throw new Error(AbP);this.Af=Dj.AIx;Dj.AIx=this;},GH:function(CK){var B;
if(!!CK&&CK.BfI(this.Filter)){this.Down=CK.Down;this.CP=CK.CP;this.D4=CK.D4;this.
Bu=CK.Bu;this.Pc=false;if(CK.Down){this.A7F=this.AoH;this.Abs=this.AoH>0;if(this.
Abs)(B=this.DU)?B[1].call(B[0],this):null;else(B=this.BS)?B[1].call(B[0],this):null;
if(!this.Pc)this.AoH=this.AoH+1;return!this.Pc;}if(!CK.Down){this.Abs=this.AoH>1;
this.A7F=this.AoH-1;this.AoH=0;(B=this.K$)?B[1].call(B[0],this):null;return!this.
Pc;}}return false;},_Init:function(aArg){this.__proto__=C.BR;this.Init(aArg);A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.Att={Cd:null,Atw:0,Dz:A.vw,Initialize:function(Ah,aOffset
){this.Cd=Ah;this.Dz=aOffset;this.Atw=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.Att;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A4M={
Af:null,Dj:null,_Init:function(aArg){this.__proto__=C.A4M;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};C.ApX={Nu:null,extent:A.vx,A8:A.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.ApX;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nu)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.AB8={Ah0:A.vw,AhZ:
A.vw,_Init:function(aArg){C.ApX._Init.call(this,aArg);this.__proto__=C.AB8;},_className:
"Core::LayoutLineContext"};C.AB9={Ay0:A.vw,AyZ:A.vw,Ah0:A.vw,AhZ:A.vw,_Init:function(
aArg){C.ApX._Init.call(this,aArg);this.__proto__=C.AB9;},_className:"Core::LayoutQuadContext"
};C.ALL={Dj:null,Af:null,Q6:null,Re:null,L9:null,AoE:null,_Init:function(aArg){this.
__proto__=C.ALL;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Re)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L9)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AoE)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.ASA={FF:null,B4:null,B7:null,A$$:false,
Buy:function(){if(!this.FF)return;var O4=this.FF;this.FF.O0=null;this.FF=null;A.
ow([this,this.A0x],this);O4.A49(this);},Bwf:function(H){if(!!this.FF)return;if(!
this.B7)return;this.FF=this.B7;this.B7=this.B7.Af;if(!!this.B7)this.B7.AG=null;else
this.B4=null;this.FF.Af=null;this.A$$=true;this.FF.R$(this);this.A$$=false;},BwC:
function(H){A.ow([this,this.Bwf],this);},BwB:function(H){A.ow([this,this.BwC],this
);},A0x:function(H){A.ow([this,this.BwB],this);},BdO:function(Ja){if(!Ja||!Ja.O0
)return;if(Ja.O0!==this)throw new Error(AeN);var Bc2=false;if(this.FF===Ja){this.
FF=null;Bc2=true;A.ow([this,this.A0x],this);}else{if(!!Ja.Af)Ja.Af.AG=Ja.AG;else
this.B4=Ja.AG;if(!!Ja.AG)Ja.AG.Af=Ja.Af;else this.B7=Ja.Af;Ja.AG=null;Ja.Af=null;
}Ja.O0=null;if(Bc2)Ja.A48(this);},A7L:function(Ja,AYp){if(!Ja)return;if(!!Ja.O0)
throw new Error(Zn);Ja.O0=this;if(AYp){Ja.Af=this.B7;if(!!this.B7)this.B7.AG=Ja;
else this.B4=Ja;this.B7=Ja;}else{Ja.AG=this.B4;if(!!this.B4)this.B4.Af=Ja;else this.
B7=Ja;this.B4=Ja;}if(!this.FF)A.ow([this,this.A0x],this);},_Init:function(aArg){
this.__proto__=C.ASA;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Aj5={O0:null,AG:null,Af:
null,A49:function(Ar3){},A48:function(Ar3){},R$:function(Ar3){this.Ac_();},Mh:function(
){if(!!this.O0&&(this.O0.FF===this))this.O0.Buy();},Ac_:function(){if(!!this.O0)
this.O0.BdO(this);},AOV:function(){return!!this.O0&&(this.O0.FF===this);},_Init:
function(aArg){this.__proto__=C.Aj5;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O0)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.ASy={Ar:null,AsX:
null,R$:function(Ar3){this.AsX.Ar=this.Ar;A.vv(this.AsX,0);A.ow([this,this.Bwc],
this);},Bwc:function(H){this.AsX.Ar=null;this.AsX=null;this.Ar=null;this.Mh();},
_Init:function(aArg){C.Aj5._Init.call(this,aArg);this.__proto__=C.ASy;},_Mark:function(
D){var B;C.Aj5._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AsX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AET={_Init:function(){C.ASA._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AgR={resource:null,K3:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.AgR;this.Init(aArg
);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={M8:null,timer:
null,Bu:0,Period:1000,US:0,Bw:false,K3:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AIY:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},Qz:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bw)this.AIY(this.US,E);},VL:function(E){if(E<0)E=0;if(E===this.US)return;
this.US=E;if(this.Bw)this.AIY(E,this.Period);},Ap:function(E){if(E===this.Bw)return;
this.Bw=E;if(E)this.AIY(this.US,this.Period);else this.AIY(0,0);this.Bu=this.At0(
);},At0:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;
},Trigger:function(){var B;this.Bu=this.At0();if(!this.Period)this.Ap(false);(B=
this.M8)?B[1].call(B[0],this):null;},AEQ:function(H){this.Ap(false);},StartTimer:
function(H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M8)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bu={AR5:0,Auv:0,Ai5:0,Gt:0
,G5:0,Year:0,A$J:function(AeZ,AXT){if(AXT)switch(AeZ){case 1:return A.abj.BfR;case
2:return A.abj.BeJ;case 3:return A.abj.Bgc;case 4:return A.abj.Bdo;case 5:return A.
abj.Bgg;case 6:return A.abj.BfU;case 7:return A.abj.BfT;case 8:return A.abj.Bdq;
case 9:return A.abj.BkW;case 10:return A.abj.BgL;case 11:return A.abj.BgK;case 12:
return A.abj.Bea;default:return A.jm;}else switch(AeZ){case 1:return A.abj.AB2;case
2:return A.abj.AAT;case 3:return A.abj.ACc;case 4:return A.abj.AzU;case 5:return A.
abj.ACf;case 6:return A.abj.AB4;case 7:return A.abj.AB3;case 8:return A.abj.Az2;
case 9:return A.abj.AEw;case 10:return A.abj.ACt;case 11:return A.abj.ACr;case 12:
return A.abj.AAD;default:return A.jm;}},A$H:function(A_g,AXT){if(AXT)switch(A_g){
case 1:return A.abj.Bgn;case 2:return A.abj.Bma;case 3:return A.abj.BmN;case 4:return A.
abj.BlZ;case 5:return A.abj.BeW;case 6:return A.abj.BkQ;case 0:return A.abj.BlM;
default:return A.jm;}else switch(A_g){case 1:return A.abj.Bgm;case 2:return A.abj.
Bl$;case 3:return A.abj.BmM;case 4:return A.abj.BlY;case 5:return A.abj.BeV;case
6:return A.abj.BkP;case 0:return A.abj.BlL;default:return A.jm;}},A$G:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JL:function(){var d=this.Gt;var KR=this.G5;var Dl=this.Year-((
KR<=2)?1:0);var AxW=(((Dl>=0)?Dl:Dl-399)/400)|0;var Alt=Dl-(AxW*400);var Ur=(((((
153*(KR+((KR>2)?-3:9)))+2)/5)|0)+d)-1;var AnV=(((Alt*365)+((Alt/4)|0))-((Alt/100
)|0))+Ur;var PT=((AxW*146097)+AnV)-719468;return(((PT*86400)+(this.Ai5*3600))+(this.
Auv*60))+this.AR5;},ADM:function(E){var B;E+=62162035200;if(E<0)E=0;var UE=Math.
trunc(E/86400)|0;var AxW=(((UE>=0)?UE:UE-146096)/146097)|0;var AnV=UE-(AxW*146097
);var Alt=((((AnV-((AnV/1460)|0))+((AnV/36524)|0))-((AnV/146096)|0))/365)|0;var Dl=
Alt+(AxW*400);var Ur=AnV-(((365*Alt)+((Alt/4)|0))-((Alt/100)|0));var AZ2=(((5*Ur
)+2)/153)|0;var d=(Ur-((((153*AZ2)+2)/5)|0))+1;var KR=AZ2+((AZ2<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dl+((
KR<=2)?1:0);this.TF(KR);this.Lb(d);this.AmD(BL+((BL<0)?24:0));this.AmG(P+((P<0)?
60:0));this.AmJ(s+((s<0)?60:0));},YB:function(){if(this.G5===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G5===4)||(this.G5===6))||(this.G5===9))||(this.G5===11))return 30;else return 31;
},BhW:function(){var B;var Ur=this.Aa8()-1;var Asg=(6+this.AuF())%7;var AnX=((371+
Asg)-Ur)%7;if(this.G5===12){var d=this.Gt;if((d===31)&&(Asg<3))return 0;if((d===
30)&&(Asg<2))return 0;if((d===29)&&(Asg<1))return 0;}if(AnX<=3)Ur+=AnX;else Ur-=(
7-AnX);if(Ur<0){var d=this.Gt;var KR=this.G5;this.Year--;this.Lb(31);this.TF(12);
Ur=this.Aa8()-1;Asg=(6+this.AuF())%7;AnX=((371+Asg)-Ur)%7;if(AnX<=3)Ur+=AnX;else
Ur-=AnX;this.Year++;this.Lb(d);this.TF(KR);}return(Ur/7)|0;},Aa8:function(){var B;
var d=this.Gt;var KR=this.G5;var Dl=this.Year;var Afh=((!!!(Dl%4)&&(!!(Dl%100)||
!!!(Dl%400)))?1:0);switch(KR){case 2:d+=31;break;case 3:d+=(59+Afh);break;case 4:
d+=(90+Afh);break;case 5:d+=(120+Afh);break;case 6:d+=(151+Afh);break;case 7:d+=(
181+Afh);break;case 8:d+=(212+Afh);break;case 9:d+=(243+Afh);break;case 10:d+=(273+
Afh);break;case 11:d+=(304+Afh);break;case 12:d+=(334+Afh);break;default:;}return d;
},AuF:function(){var B;var d=this.Gt;var KR=this.G5+((this.G5>2)?-2:10);var Dl=this.
Year-((this.G5<=2)?1:0);var BK=(Dl/100)|0;Dl%=100;d+=((((((((26*KR)-2)/10)|0)+Dl
)+((Dl/4)|0))+((BK/4)|0))-(2*BK));if(d>=0)return d%7;else return(7-(-d%7))%7;},AmJ:
function(E){if(E<0)E=0;if(E>59)E=59;this.AR5=E;},AmG:function(E){if(E<0)E=0;if(E>
59)E=59;this.Auv=E;},AmD:function(E){if(E<0)E=0;if(E>23)E=23;this.Ai5=E;},Lb:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gt=E;},TF:function(E){if(E<1)E=1;if(E>12)E=12;this.
G5=E;},Format:function(Ij){var result=A.jm;var inx=0;while(!!(Ij.charCodeAt(inx)||
0))if((Ij.charCodeAt(inx)||0)===0x25){var ZK=1;inx=inx+1;if((Ij.charCodeAt(inx)||
0)===0x23){inx=inx+1;ZK=0;}switch(Ij.charCodeAt(inx)||0){case 0x64:result=result+
A.aaq(this.Gt,2*ZK,10);break;case 0x48:result=result+A.aaq(this.Ai5,2*ZK,10);break;
case 0x49:if(!(this.Ai5%12))result=result+Wk;else result=result+A.aaq(this.Ai5%12
,2*ZK,10);break;case 0x6D:result=result+A.aaq(this.G5,2*ZK,10);break;case 0x4D:result=
result+A.aaq(this.Auv,2*ZK,10);break;case 0x70:if(this.Ai5<12)result=result+A.abj.
Bc8;else result=result+A.abj.Bkf;break;case 0x53:result=result+A.aaq(this.AR5,2*
ZK,10);break;case 0x77:result=result+A.aaq(this.AuF(),ZK,10);break;case 0x79:result=
result+A.aaq(this.Year%100,2*ZK,10);break;case 0x59:result=result+A.aaq(this.Year
,4*ZK,10);break;case 0x25:result=result+Wl;break;case 0x6A:result=result+A.aaq(this.
Aa8(),3*ZK,10);break;case 0x57:result=result+A.aaq(this.BhW(),2*ZK,10);break;case
0x61:result=result+this.A$H(this.AuF(),true);break;case 0x41:result=result+this.
A$H(this.AuF(),false);break;case 0x62:result=result+this.A$J(this.G5,true);break;
case 0x42:result=result+this.A$J(this.G5,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ij.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(Ab_,AeZ,BsU,Bs_,Btp,BtI){this.Year=Ab_;this.TF(AeZ);this.
Lb(BsU);this.AmD(Bs_);this.AmG(Btp);this.AmJ(BtI);return this;},Initialize:function(
Aho){this.ADM(Aho);return this;},Bef:function(Aho){if(!Aho)return A._NewObject(C.
Am4,0).Initialize(this.JL());return A._NewObject(C.Am4,0).Initialize(this.JL()-Aho.
JL());},Blp:function(Axh){if(!Axh)return this;return A._NewObject(C.Bu,0).Initialize(
this.JL()-Axh.JL());},J:function(Axh){if(!Axh)return this;return A._NewObject(C.
Bu,0).Initialize(this.JL()+Axh.JL());},_Init:function(aArg){this.__proto__=C.Bu;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.Am4={AEt:0,ACk:0,ABz:0,J9:0,JL:function(
){return(((this.J9*86400)+(this.ABz*3600))+(this.ACk*60))+this.AEt;},ADM:function(
E){var AI8=1;this.J9=Math.trunc(E/86400)|0;if(E<0){E=-E;AI8=-1;}this.ABz=AI8*(Math.
trunc(E/3600)%24|0);this.ACk=AI8*(Math.trunc(E/60)%60|0);this.AEt=AI8*(E%60|0);}
,Initialize2:function(BsV,Bs$,Btq,BtL){this.J9=BsV;this.ABz=Bs$;this.ACk=Btq;this.
AEt=BtL;return this;},Initialize:function(Aho){this.ADM(Aho);return this;},_Init:
function(aArg){this.__proto__=C.Am4;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A79={Ar:null,O0:null,Trigger:function(BsP,AYp){var O4=A._NewObject(C.ASy,0);
O4.AsX=this;O4.Ar=BsP;this.O0.A7L(O4,AYp);},_Init:function(aArg){this.__proto__=
C.A79;this.O0=A._GetAutoObject(C.AET);A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A7_={JF:null,Event:null,AP3:null,AsB:function(H){var B;if(
!this.Event)return;this.JF=this.Event.Ar;(B=this.AP3)?B[1].call(B[0],this):null;
this.JF=null;},BiE:function(E){if(this.Event===E)return;if(!!this.Event)A.zl([this
,this.AsB],this.Event,0);this.Event=E;if(!!this.Event)A.y_([this,this.AsB],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A7_;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AP3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BBG={Dp:0x1,Byy:0x2,BzD:0x4,BBy:0x8,Bw:0x10,H1:0x20
,BzE:0x40,BAi:0x80,Bzz:0x100,BzY:0x200,Bzn:0x400,BAT:0x800,Bf:0x1000,BBD:0x2000,
BAE:0x4000,BAF:0x8000,Aap:0x10000,BAD:0x20000,BA5:0x40000};C.Pu={BAU:0x1,BAV:0x2
,Byu:0x4,Byv:0x8,Byw:0x10,Byt:0x20};C.Af8={None:0,BBu:1,ByQ:2,Bz3:3,BAY:4,BBv:5,
BBw:6,ByR:7,ByS:8,Bz5:9,Bz4:10,BA1:11,BA0:12};C.Aty={None:0,BBs:1,Left:2,ByO:3,Y5:
4,A2y:5,BBt:6,Right:7,ByP:8};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:
6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:
16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:25
,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:
37,Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45
,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:
54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62
,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:
73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};C.BAW={BBM:0x1,BBJ:0x2,BBK:0x4,BBL:0x8,Bz7:0x10,BzG:0x20};
C._Init=function(){C.Ajn.__proto__=C.Cd;C.YR.__proto__=C.Cd;C.EC.__proto__=C.Cd;C.
O.__proto__=C.EC;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.APa.__proto__=
C.Event;C.Ats.__proto__=C.Event;C.Adg.__proto__=C.Event;C.Apm.__proto__=C.Event;
C.Y.__proto__=C.EC;C.CI.__proto__=C.O;C.Ds.__proto__=C.O;C.Bh.__proto__=C.YR;C.H2.
__proto__=C.EC;C.AB8.__proto__=C.ApX;C.AB9.__proto__=C.ApX;C.ASy.__proto__=C.Aj5;
};C._ReInit=function(){var B;if((B=C.AET._this))B._ReInit();};C.DE=function(D){var
B;if((B=C.AET._this)&&(B._cycle!=D))B._Done(C.AET._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */