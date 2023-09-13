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
ON="No group to end the modal state.";var Ss="The group is not modal.";var T9="No group to obtain the modal state.";
var Zc="The group serves already as the \'virtual keyboard\'.";var Wa="The group is already modal.";
var I$="View is not in the same group or it is not embedded within the Outline "+
"Box";var T_="The method SwitchToDialog() is not available in Core::VerticalList.";
var Zd="The method DismissDialog() is not available in Core::VerticalList.";var Wb=
"The method PresentDialog() is not available in Core::VerticalList.";var Ze="The method FadeGroup() is not available in Core::VerticalList.";
var T$="The method RestackBehind() is not available in Core::VerticalList.";var Zf=
"The method RestackTop() is not available in Core::VerticalList.";var Zg="The method Restack() is not available in Core::VerticalList.";
var Ua="The method Remove() is not available in Core::VerticalList.";var Wc="The method AddBehind() is not available in Core::VerticalList.";
var QT="The method Add() is not available in Core::VerticalList.";var Zh="The Slide Touch Handler:";
var OO="is already connected with a view.";var PK="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Ub=[0,0,170,120];var Zi="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Wd="The method DismissDialog() is not available in Core::HorizontalList.";var
Zj="The method PresentDialog() is not available in Core::HorizontalList.";var Zk=
"The method FadeGroup() is not available in Core::HorizontalList.";var We="The method RestackBehind() is not available in Core::HorizontalList.";
var Wf="The method RestackTop() is not available in Core::HorizontalList.";var St=
"The method Restack() is not available in Core::HorizontalList.";var Zl="The method Remove() is not available in Core::HorizontalList.";
var Zm="The method AddBehind() is not available in Core::HorizontalList.";var AbO=
"The method Add() is not available in Core::HorizontalList.";var Su=[0,0,1,1];var
AbP="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var AeN="Trying to cancel a task not belonging to this queue!";var Zn="Trying to enqueue a task twice!";
var Wg="12";var Wh="%";
C.Cd={Af:null,AG:null,Ac:null,Em:null,U:0x103,JQ:0,Pu:0x14,Aso:function(BI,Ahl){}
,A7f:function(E){if(this.JQ===E)return;this.JQ=E;if(!!this.Ac){var Ah$=this.Af;var
GW=0;while(!!Ah$&&(E>Ah$.JQ)){Ah$=Ah$.Af;GW=GW+1;}Ah$=this.AG;while(!!Ah$&&(E<Ah$.
JQ)){Ah$=Ah$.AG;GW=GW-1;}if(!!GW)this.Ac.Ki(this,GW);}},AV:function(E){var B;var
GW=E^this.Pu;if(!GW)return;this.Pu=E;if(!!this.Em&&!((this.U&0x400)===0x400)){this.
Ac.U=this.Ac.U|0x5000;A.ow([B=this.Ac,B.H$],this);this.Ac.Bg([0,0,(B=this.Ac.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Em&&((this.U&0x400)===0x400)){this.Em.Nu.U=this.Em.
Nu.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},Ib:function(
){var B8=this.Ac;while(!!B8){var Iq=(C.Root.isPrototypeOf(B8)?B8:null);if(!!Iq)return Iq;
B8=B8.Ac;}return null;},J_:function(CW,aClip,aOffset,Ce,aBlend){},GH:function(CK
){return null;},Xr:function(Dc,BG,N4,Ab3,Ab8,Ab7){return null;},Atb:function(Dc){
return Dc;},Atl:function(BI,MC){return B_;},Amo:function(aOffset,Ar0){},GetExtent:
function(){return BH;},C4:function(Ahn,AnC){var B;if(((this.U&0x200)===0x200))Ahn=
Ahn&~0x400;var AZ$=(this.U&~AnC)|Ahn;var AkJ=AZ$^this.U;this.U=AZ$;if(!!this.Ac&&
!!(AkJ&0x14)){var A$C=((this.U&0x14)===0x14);if(A$C&&!this.Ac.AY)this.Ac.A$(this
);if(!A$C&&(this.Ac.AY===this))this.Ac.A$(this.Ac.AAV(this,0x14));}if(!!this.Ac&&
!!(AkJ&0x403))this.Ac.Bg(this.GetExtent());if(((!!this.Em&&!!this.Ac)&&((AZ$&0x400
)===0x400))&&((AkJ&0x1)===0x1)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.
ow([B=this.Ac,B.H$],this);}if(!!this.Ac&&((AkJ&0x400)===0x400)){this.Em=null;this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},_Init:function(
aArg){this.__proto__=C.Cd;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.Ajn={Et:A.vw,Ek:A.vw,Aso:function(BI,Ahl){var Ar=A._NewObject(
C.AB7,0);this.Em=null;Ar.extent=this.getExtent();Ar.A8=BI;Ar.Nu=Ahl;Ar.AhZ=this.
Ek;Ar.Ah0=this.Et;this.Em=Ar;},Atl:function(BI,MC){var B;var EM=this.Pu;var Ar=(
C.AB7.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var
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
this.D5([x1,y1]);this.DN([x2,y2]);this.Em=Ar;}return[BU,BL];},Amo:function(aOffset
,Ar0){if(Ar0){this.Ek=A.aak(this.Ek,aOffset);this.Et=A.aak(this.Et,aOffset);}else{
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
aArg);this.__proto__=C.Ajn;},_className:"Core::LineView"};C.YN={Kh:A.vw,Mv:A.vw,
Et:A.vw,Ek:A.vw,Aso:function(BI,Ahl){var Ar=A._NewObject(C.AB8,0);this.Em=null;Ar.
extent=this.GetExtent();Ar.A8=BI;Ar.Nu=Ahl;Ar.AhZ=this.Ek;Ar.Ah0=this.Et;Ar.AyY=
this.Mv;Ar.AyZ=this.Kh;this.Em=Ar;},Atl:function(BI,MC){var B;var EM=this.Pu;var
Ar=(C.AB8.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[
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
var Afd=(Ar.extent[2]-AhF)-1;var Afc=(Ar.extent[3]-AhH)-1;if(!Afd)Afd=1;if(!Afc)
Afc=1;if(((this.U&0x100)===0x100)){this.Ek=[x1+((((Ar.AhZ[0]-AhF)*BU)/Afd)|0),y1+((((
Ar.AhZ[1]-AhH)*BL)/Afc)|0)];this.Et=[x1+((((Ar.Ah0[0]-AhF)*BU)/Afd)|0),y1+((((Ar.
Ah0[1]-AhH)*BL)/Afc)|0)];this.Mv=[x1+((((Ar.AyY[0]-AhF)*BU)/Afd)|0),y1+((((Ar.AyY[
1]-AhH)*BL)/Afc)|0)];this.Kh=[x1+((((Ar.AyZ[0]-AhF)*BU)/Afd)|0),y1+((((Ar.AyZ[1]-
AhH)*BL)/Afc)|0)];}else{this.D5([x1+((((Ar.AhZ[0]-AhF)*BU)/Afd)|0),y1+((((Ar.AhZ[
1]-AhH)*BL)/Afc)|0)]);this.DN([x1+((((Ar.Ah0[0]-AhF)*BU)/Afd)|0),y1+((((Ar.Ah0[1
]-AhH)*BL)/Afc)|0)]);this.KA([x1+((((Ar.AyY[0]-AhF)*BU)/Afd)|0),y1+((((Ar.AyY[1]-
AhH)*BL)/Afc)|0)]);this.KB([x1+((((Ar.AyZ[0]-AhF)*BU)/Afd)|0),y1+((((Ar.AyZ[1]-AhH
)*BL)/Afc)|0)]);this.Em=Ar;}return[BU+1,BL+1];},Amo:function(aOffset,Ar0){if(Ar0
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
this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},AOX:function(KK){var Ho=
A.aan(4,A.vw,null);var P=0;var H9=3;var AZJ=false;var AZK=false;Ho.Set(0,this.Ek
);Ho.Set(1,this.Et);Ho.Set(2,this.Mv);Ho.Set(3,this.Kh);while(P<4){var Bc8=Ho.Get(
P)[0];var AJr=Ho.Get(P)[1];var Byj=Ho.Get(H9)[0];var A1J=Ho.Get(H9)[1];if(((AJr>
KK[1])!==(A1J>KK[1]))||((AJr<KK[1])!==(A1J<KK[1]))){var FY=((((Byj-Bc8)*(KK[1]-AJr
))/(A1J-AJr))|0)+Bc8;if(KK[0]>FY)AZJ=!AZJ;if(KK[0]<FY)AZK=!AZK;}H9=P;P=P+1;}return AZJ||
AZK;},Bfy:function(){return((((this.Ek[0]===this.Kh[0])&&(this.Et[0]===this.Mv[0
]))&&(this.Ek[1]===this.Et[1]))&&(this.Mv[1]===this.Kh[1]))||((((this.Ek[0]===this.
Et[0])&&(this.Mv[0]===this.Kh[0]))&&(this.Ek[1]===this.Kh[1]))&&(this.Et[1]===this.
Mv[1]));},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.YN;},
_className:"Core::QuadView"};C.EC={M:A.vx,Aso:function(BI,Ahl){var Ar=A._NewObject(
C.Ap0,0);Ar.extent=this.M;Ar.A8=BI;Ar.Nu=Ahl;this.Em=Ar;},Atl:function(BI,MC){var
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
this.Em=Ar;}return[x2-x1,y2-y1];},Amo:function(aOffset,Ar0){if(Ar0)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Ac&&((this.U&0x1)===0x1
))this.Ac.Bg(this.M);this.Em=null;this.M=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000
)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}
,_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.EC;},_className:
"Core::RectView"};C.O={B7:null,B4:null,AIw:null,HO:null,Im:null,WD:null,AoJ:null
,AY:null,GM:255,Init:function(aArg){this.Am();},J_:function(CW,aClip,aOffset,Ce,
aBlend){var B;Ce=((Ce+1)*this.GM)>>8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.
HO||(CW.Dj===this))this.A$t(CW,aClip,A.aak(aOffset,this.M.slice(0,2)),Ce,aBlend);
else{var BK=255|(255<<8)|(255<<16)|((Ce&0xFF)<<24);this.HO.Update();CW.A22(aClip
,this.HO,0,A.aam(this.M,aOffset),B_,BK,BK,BK,BK,aBlend);}},Xr:function(Dc,BG,N4,
Ab3,Ab8,Ab7){var B;var W=this.B4;var Aoa=null;var AD=BH;var J1=null;var AZ3=!!this.
WD&&(!!this.WD.FF||!!this.WD.B7);if(((B=A.kz(Dc,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;Dc=A.aal(Dc,this.M.slice(0,2));if(!!Ab8){W=Ab8;while(!!W&&(W.Ac!==this
))W=W.Ac;}while(!!W){if(((W.U&0x400)===0x400)&&!J1){J1=W.AG;while(!!J1&&!((J1.U&
0x200)===0x200))J1=J1.AG;if(!!J1)AD=A.kz(Dc,J1.GetExtent());else AD=BH;}if(J1===
W){J1=null;AD=BH;}if((((((W.U&0x8)===0x8)&&((W.U&0x10)===0x10))&&!((W.U&0x40000)===
0x40000))&&!((W.U&0x20000)===0x20000))&&(!((W.U&0x10000)===0x10000)||((this.Im.Dj===
W)&&!AZ3))){var extent=W.GetExtent();var AHZ=Ab3;var AnW=null;if(AHZ===W)AHZ=null;
if(((W.U&0x400)===0x400)){if(!(((B=A.kz(extent,AD))[0]>=B[2])||(B[1]>=B[3])))AnW=
W.Xr(AD,BG,N4,AHZ,Ab8,Ab7);}else if(!(((B=A.kz(extent,Dc))[0]>=B[2])||(B[1]>=B[3
]))||(Ab3===W))AnW=W.Xr(Dc,BG,N4,AHZ,Ab8,Ab7);W=W.AG;if(!!AnW){if(!Aoa||((AnW.Atv<
Aoa.Atv)&&(AnW.Atv>=0)))Aoa=AnW;if(!AnW.Atv)W=null;}}else W=W.AG;Ab8=null;}return Aoa;
},Atb:function(Dc){var B;var F;var W=this.B7;var MF=BH;var AyS=true;var result=(
Dc=F=A.aal(Dc,this.M.slice(0,2)),F);while(!!W){if(((W.U&0x200)===0x200)){var AyR=(
C.Y.isPrototypeOf(W)?W:null);MF=A.kz(Dc,AyR.M);AyS=((AyR.U&0x1)===0x1);}if(((W.U&
0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyS){var AD=A.kz(W.GetExtent(),MF);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atb(AD));}}else{var AD=A.
kz(W.GetExtent(),Dc);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atb(
AD));}}W=W.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},C4:function(
Ahn,AnC){var B;var ZN=this.U;C.EC.C4.call(this,Ahn,AnC);var AkJ=this.U^ZN;if(!!this.
AY&&((AkJ&0x40)===0x40)){if(((this.U&0x40)===0x40))this.AY.C4(0x40,0x0);else this.
AY.C4(0x0,0x40);}if(!!this.Im&&((AkJ&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((
this.Im.Dj.U&0x14)===0x14))this.Im.Dj.C4(0x40,0x0);else this.Im.Dj.C4(0x0,0x40);
}if(!!AkJ){this.U=this.U|0x8000;A.ow([this,this.H$],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var Ak6=[(B=this.M)[2]-B[0],B[3]-B[1]];var AID=[E[2]-E[
0],E[3]-E[1]];var AoQ=!A.z8(Ak6,AID);if(AoQ&&!!this.HO){this.HO.Aqt(AID);A.vv(this
,0);A.vv(this.HO,0);}C.EC.G.call(this,E);if((AoQ&&(Ak6[0]>0))&&(Ak6[1]>0)){var A8=[
].concat(B_,Ak6);var W=this.B7;while(!!W){if((!W.Em&&(W.Pu!==0x14))&&!((W.U&0x400
)===0x400))W.Aso(A8,null);W=W.Af;}}if(AoQ){this.U=this.U|0x5000;A.ow([this,this.
H$],this);}},A0Z:function(CK){var Bam=(C.KeyEvent.isPrototypeOf(CK)?CK:null);var
DY=this.AIw;if(!Bam)return null;while(!!DY&&(!DY.Bw||!DY.GH(Bam)))DY=DY.Af;return DY;
},Bx5:function(H){if(!!this.HO){this.HO.Dj=this;var AD=A.aal(this.Atb(A.aam(this.
HO.Qf,this.M.slice(0,2))),this.M.slice(0,2));this.HO.AtQ(AD,AD,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A$t(this.HO,AD,B_,255,true);this.HO.Dj=null;}
},A$t:function(CW,aClip,aOffset,Ce,aBlend){var B;var W=this.B7;var MF=BH;var AyS=
true;this.Bev(CW,aClip,aOffset,Ce,aBlend);while(!!W){if(((W.U&0x200)===0x200)){var
AyR=(C.Y.isPrototypeOf(W)?W:null);MF=A.kz(aClip,A.aam(AyR.M,aOffset));AyS=((AyR.
U&0x1)===0x1);}if(((W.U&0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyS){var AD=A.
kz(A.aam(W.GetExtent(),aOffset),MF);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW
,AD,aOffset,Ce,aBlend);}}else{var AD=A.kz(A.aam(W.GetExtent(),aOffset),aClip);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW,AD,aOffset,Ce,aBlend);}}W=W.Af;}this.Bey(
CW,aClip,aOffset,Ce,aBlend);},Bb$:function(){var B;var AZz=((this.U&0x1000)===0x1000
);var AhM=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var ZB=false;var Aco=BH;var KM=BH;var
ZC=B_;var Ask=0;var Asl=0;var Asj=0;var PW=0;var W=this.B4;var J1=null;var AkY=null;
while(!!W){if(((W.U&0x800)===0x800)){ZB=true;W.U=W.U&~0x800;}if(ZB&&((W.U&0x200)===
0x200)){ZB=false;if(!!(C.Y.isPrototypeOf(W)?W:null).Af9)W.U=W.U|0x1000;}W=W.AG;}
ZB=false;W=this.B7;if(AZz){this.U=this.U&~0x1000;AZz=!((AhM[0]>=AhM[2])||(AhM[1]>=
AhM[3]));}this.U=this.U|0x2000;while(!!W){if(!AkY&&(Asj!==PW)){var AcL=W;var AIZ=
0;var Azb=Aco[2]-Aco[0];var Axw=Aco[3]-Aco[1];var AHN=0;var Ao2=B_;do if(((AcL.U&
0x200)===0x200))AcL=null;else if(((AcL.U&0x401)===0x401)){Ao2=[(B=AcL.GetExtent(
))[2]-B[0],B[3]-B[1]];if((PW===3)||(PW===4))Azb=Azb-Ao2[0];if((PW===1)||(PW===2)
)Axw=Axw-Ao2[1];if(!AkY||((Azb>=0)&&(Axw>=0))){AkY=AcL;AcL=AcL.Af;if((PW===3)||(
PW===4)){Azb=Azb-Ask;if(Ao2[1]>AIZ)AIZ=Ao2[1];}if((PW===1)||(PW===2)){Axw=Axw-Asl;
if(Ao2[0]>AHN)AHN=Ao2[0];}}else AcL=null;}else AcL=AcL.Af;while(!!AcL);if(!AkY)AkY=
J1;KM=Aco;switch(Asj){case 9:case 11:KM=[].concat(KM.slice(0,3),KM[1]+AIZ);break;
case 10:case 12:KM=A.aaS(KM,KM[3]-AIZ);break;case 5:case 7:KM=A.aaQ(KM,KM[0]+AHN
);break;case 6:case 8:KM=[].concat(KM[2]-AHN,KM.slice(1,4));break;default:;}}if(((
W.U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nu!==J1))W.Em=null;if((!W.Em&&ZB)&&((W.Pu!==
0x14)||!!PW))W.Aso(KM,J1);}if(!!W.Em){if(AZz&&!((W.U&0x400)===0x400))W.Atl(AhM,0
);if(ZB&&((W.U&0x400)===0x400)){var CZ=W.Atl(A.aam(KM,ZC),PW);if(((W.U&0x1)===0x1
)){var Bm=B_;switch(PW){case 3:Bm=[CZ[0]+Ask,Bm[1]];break;case 4:Bm=[-CZ[0]-Ask,
Bm[1]];break;case 1:Bm=[Bm[0],CZ[1]+Asl];break;case 2:Bm=[Bm[0],-CZ[1]-Asl];break;
default:;}ZC=A.aak(ZC,Bm);}}}if(((W.U&0x200)===0x200)){if(ZB)A.ow(J1.Ej,J1);ZB=((
W.U&0x1000)===0x1000);J1=(C.Y.isPrototypeOf(W)?W:null);if(ZB){W.U=W.U&~0x1000;Asj=
J1.Af9;PW=Asj;Aco=A.aam(J1.M,J1.Bo);KM=Aco;ZC=B_;Ask=J1.Space+J1.ASm;Asl=J1.Space;
ZB=!((Aco[0]>=Aco[2])||(Aco[1]>=Aco[3]));AkY=null;switch(Asj){case 9:case 10:PW=
3;break;case 11:case 12:PW=4;break;case 5:case 6:PW=1;break;case 7:case 8:PW=2;break;
default:;}}if(ZB)this.Bg(J1.M);}if(W===AkY){switch(Asj){case 9:case 11:ZC=[0,(ZC[
1]+(KM[3]-KM[1]))+Asl];break;case 10:case 12:ZC=[0,(ZC[1]-(KM[3]-KM[1]))-Asl];break;
case 5:case 7:ZC=[(ZC[0]+(KM[2]-KM[0]))+Ask,0];break;case 6:case 8:ZC=[(ZC[0]-(KM[
2]-KM[0]))-Ask,0];break;default:;}AkY=null;}W=W.Af;}if(ZB)A.ow(J1.Ej,J1);this.U=
this.U&~0x2000;this.Bf([AhM[2]-AhM[0],AhM[3]-AhM[1]]);},H$:function(H){var B;var
Byc=((this.U&0x1000)===0x1000);if(((this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;
this.Bb$();}if(((this.U&0x8000)===0x8000)||Byc){this.U=this.U&~0x8000;this.Ag(this.
U);}},A$:function(E){var B;if(!!E&&(E.Ac!==this))throw new Error(EV);if(!!E&&!((
E.U&0x14)===0x14))E=null;if(!!E&&((E.U&0x10000)===0x10000))E=null;if(E===this.AY
)return;if(!!this.AY)this.AY.C4(0x0,0x60);this.AY=E;if(!!E){if(((this.U&0x40)===
0x40))E.C4(0x60,0x0);else E.C4(0x20,0x0);}},A9M:function(An){this.A$(An);},AP9:function(
){return!!this.HO;},Aqn:function(E){var B;if(!!this.HO===E)return;if(E){this.HO=
A._NewObject(A.Graphics.Canvas,0);this.HO.Aqt([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
HO.ACx=[this,this.Bx5];}else{this.HO.ACx=null;this.HO.Aqt(B_);this.HO=null;}if(!
!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.vv(this,0);},A5C:function(){
var B;return((this.U&0x10)===0x10);},Ap:function(E){if(E)this.C4(0x10,0x0);else this.
C4(0x0,0x10);},DD:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GM)return;
this.GM=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},AXB:function(An
){this.DD(An);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400);}
,Bic:function(E){if(E)this.C4(0x2,0x0);else this.C4(0x0,0x2);},E$:function(){var
B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(
0x0,0x1);},Bey:function(CW,aClip,aOffset,Ce,aBlend){},Bev:function(CW,aClip,aOffset
,Ce,aBlend){},GetMinimalSize:function(){return B_;},ASt:function(Ii,N3,Wn,SA,SB,
Ahm,OT,Q0,Lm,Lk,Ll){var B;if(!this.Im){this.AjS(Ii,N3,Wn,SA,SB,null,null,Lm,Lk,Ll
);return;}var Ak5=this.Im;var KT=Ak5.Af;if(((Ii.U&0x10000)===0x10000)&&(this.Im.
Dj!==Ii))throw new Error(GS);var Acv=A._NewObject(C.ALK,0);var Q6=Ak5.Q6;var Re=
null;var L9=null;if(!!KT){Re=KT.Re;L9=KT.L9;}if(!!KT&&!!Ak5.AoI)Re=Ak5.AoI;if(!!
KT&&!!OT)L9=OT;if(!!Ahm)Q6=Ahm;if(!N3)N3=A._GetAutoObject(A.abm.AvU);if(!Wn)Wn=N3;
if(!SB)SB=SA;if(!SA)SA=SB;Acv.Q6=Wn;Acv.L9=SA;Acv.Re=SB;Acv.AoI=Q0;Acv.Dj=Ii;Acv.
Af=this.Im.Af;this.Im.Af=null;this.Im=Acv;if(this.AY===Ii)this.A$(null);Ak5.Dj.C4(
0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ii.U&0x4)===0x4))Ii.C4(0x10040,0x0);else
Ii.C4(0x10000,0x0);if(!!L9){this.NG(KT.Dj,L9.Adc(),null,null,Ll);this.NG(Ak5.Dj,
Q6.RE(),null,null,true);this.NG(Acv.Dj,N3.RF(),Lm,Lk,true);}else if(!!Re){this.NG(
KT.Dj,Re.Add(),null,null,Ll);this.NG(Ak5.Dj,Q6.RE(),null,null,true);this.NG(Acv.
Dj,N3.RF(),Lm,Lk,true);}else if(!!Q6){this.NG(Ak5.Dj,Q6.RE(),null,null,Ll);this.
NG(Acv.Dj,N3.RF(),Lm,Lk,true);}else this.NG(Acv.Dj,N3.RF(),Lm,Lk,Ll);},Apo:function(
Ii,Ahm,OT,Q0,Lm,Lk,Ll){var B;if(!this.Im)return;if(!Ii)return;var Ko=this.Im;var
KT=this.Im.Af;var AsE=null;while((!!Ko&&(Ko.Dj!==Ii))&&!!Ko.Af){AsE=Ko;Ko=KT;KT=
Ko.Af;}if(!Ko||(Ko.Dj!==Ii))throw new Error(Jt);if(!AsE){this.Im=KT;Ko.Af=null;}
else{AsE.Af=KT;Ko.Af=null;}Ko.Dj.C4(0x0,0x10040);if(((((this.U&0x40)===0x40)&&!!
KT)&&!AsE)&&((KT.Dj.U&0x4)===0x4))KT.Dj.C4(0x40,0x0);var Q6=Ko.Q6;var Re=null;var
L9=null;if(!!KT)Re=KT.Re;if(!!KT&&!!Ko.AoI)Re=Ko.AoI;if(!!KT&&!!Q0)Re=Q0;if(!!AsE&&
!!KT)L9=KT.L9;if((!!AsE&&!!KT)&&!!OT)L9=OT;if(!!Ahm)Q6=Ahm;if(!!L9){this.NG(KT.Dj
,L9.Adc(),null,null,Ll);this.NG(Ko.Dj,Q6.RE(),Lm,Lk,true);}else if(!!Re){this.NG(
KT.Dj,Re.Add(),null,null,Ll);this.NG(Ko.Dj,Q6.RE(),Lm,Lk,true);}else this.NG(Ko.
Dj,Q6.RE(),Lm,Lk,Ll);},AjS:function(Ii,N3,Wn,SA,SB,OT,Q0,Lm,Lk,Ll){var B;if(!Ii)
return;if(!!this.Im&&(this.Im.Dj===Ii)){this.ASt(Ii,N3,Wn,SA,SB,null,OT,Q0,Lm,Lk
,Ll);return;}if(((Ii.U&0x10000)===0x10000))throw new Error(GS);var Ko=A._NewObject(
C.ALK,0);if(!!this.Im&&!this.Im.L9){if(!Q0)Q0=OT;if(!OT)OT=Q0;}var L9=null;if(!!
this.Im)L9=this.Im.L9;if(!!this.Im&&!!OT)L9=OT;if(!N3)N3=A._GetAutoObject(A.abm.
AvU);if(!Wn)Wn=N3;if(!SB)SB=SA;if(!SA)SA=SB;Ko.Q6=Wn;Ko.L9=SA;Ko.Re=SB;Ko.AoI=Q0;
if(this.AY===Ii)this.A$(null);if(!!this.Im)this.Im.Dj.C4(0x0,0x40);if(((this.U&0x40
)===0x40)&&((Ii.U&0x4)===0x4))Ii.C4(0x10040,0x0);else Ii.C4(0x10000,0x0);Ko.Dj=Ii;
Ko.Af=this.Im;this.Im=Ko;if(!!L9){this.NG(this.Im.Af.Dj,L9.Adc(),null,null,Ll);this.
NG(Ii,N3.RF(),Lm,Lk,true);}else this.NG(Ii,N3.RF(),Lm,Lk,Ll);},A3_:function(Ae){
var B;return(B=Ae)&&((this.U&B)===B);},A4K:function(KK){var tmp=this;while(!!tmp
){KK=A.aaj(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},Bft:function(KK){var tmp=
this;while(!!tmp){KK=A.aak(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},DispatchEvent:
function(CK){var B;var W=this.AY;var B8=(C.O.isPrototypeOf(W)?W:null);var Gm=null;
var AZ3=!!this.WD&&(!!this.WD.FF||!!this.WD.B7);if(!!W&&((((W.U&0x10000)===0x10000
)||((W.U&0x40000)===0x40000))||((W.U&0x20000)===0x20000))){W=null;B8=null;}if(!!
this.Im&&!AZ3)Gm=this.Im.Dj.DispatchEvent(CK);if(!Gm&&!!B8)Gm=B8.DispatchEvent(CK
);else if(!Gm&&!!W)Gm=W.GH(CK);if(!Gm)Gm=this.GH(CK);if(!Gm)Gm=this.A0Z(CK);return Gm;
},BroadcastEventAtPosition:function(CK,IM,aFilter){var B;var W=this.B4;var Gm=null;
while(!!W&&!Gm){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&A.vt(W.GetExtent(),
IM)){var B8=(C.O.isPrototypeOf(W)?W:null);if(!!B8)Gm=B8.BroadcastEventAtPosition(
CK,A.aaj(IM,B8.M.slice(0,2)),aFilter);else Gm=W.GH(CK);}W=W.AG;}if(!Gm)Gm=this.GH(
CK);return Gm;},BroadcastEvent:function(CK,aFilter){var B;var W=this.B4;var Gm=null;
while(!!W&&!Gm){if(!aFilter||((B=aFilter)&&((W.U&B)===B))){var B8=(C.O.isPrototypeOf(
W)?W:null);if(!!B8)Gm=B8.BroadcastEvent(CK,aFilter);else Gm=W.GH(CK);}W=W.AG;}if(
!Gm)Gm=this.GH(CK);if(!Gm)Gm=this.A0Z(CK);return Gm;},Bf:function(aSize){},Ag:function(
Ae){},BfK:function(){this.U=this.U|0x4000;A.ow([this,this.H$],this);},Am:function(
){this.U=this.U|0x8000;A.ow([this,this.H$],this);},Bg:function(Dc){var B;var B8=
this;while(!!B8&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))){var Zz=B8.HO;if(!B8.Ac&&(B8!==
this)){B8.Bg(Dc);return;}if(!!Zz){var Bv0=Zz.Qf;Zz.Qf=A.vS(Zz.Qf,Dc);if(!A.z9(Bv0
,Zz.Qf)){A.vv(B8,0);A.vv(Zz,0);}}if(!((B8.U&0x1)===0x1))return;Dc=A.kz(A.aam(Dc,
B8.M.slice(0,2)),B8.M);B8=B8.Ac;}},RO:function(Ah,GC,aFilter){var B;if(!Ah||(Ah.
Ac!==this))return null;var Aft=A.zT(Ah.GetExtent());var W=Ah;var AYL=null;var A_7=
0;var IR=0x10000;var AIV;if(((aFilter&0x10000)===0x10000))IR=0x0;var top=((GC===
4)||(GC===1))||(GC===6);var bottom=((GC===5)||(GC===3))||(GC===8);var left=((GC===
2)||(GC===1))||(GC===3);var right=((GC===7)||(GC===6))||(GC===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!W){W=W.AG;if(!W)W=this.B4;if(W===Ah)W=null;
if((!!W&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IR||!((B=IR)&&((W.U&B)===B
))))for(AIV=0;AIV<2;AIV++){var AM=W.GetExtent();var s=[AM[2]-AM[0],AM[3]-AM[1]];
if(!!!AIV){if((left&&(s[0]>s[1]))&&(AM[2]<Aft[0]))AM=[].concat(AM[2]-s[1],AM.slice(
1,4));if((right&&(s[0]>s[1]))&&(AM[0]>Aft[0]))AM=A.aaQ(AM,AM[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AM[3]<Aft[1]))AM=A.aaS(AM,AM[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AM[
1]>Aft[1]))AM=[].concat(AM.slice(0,3),AM[1]+s[0]);}var Bm=A.aaj(A.zT(AM),Aft);var
Q2=Bm;if(Q2[0]<0)Q2=[-Q2[0],Q2[1]];if(Q2[1]<0)Q2=[Q2[0],-Q2[1]];if(((((!left||(Bm[
0]<=-Q2[1]))&&(!right||(Bm[0]>=Q2[1])))&&(!top||(Bm[1]<=-Q2[0])))&&(!bottom||(Bm[
1]>=Q2[0])))&&((Q2[0]>0)||(Q2[1]>0))){var Q8=Bm[0];var Q9=Bm[1];var Jc=Math.sqrt((
Q8*Q8)+(Q9*Q9));var AIu=0;if(!left&&!right)AIu=Jc/Q2[1];if(!top&&!bottom)AIu=Jc/
Q2[0];Jc=(Jc*AIu)*AIu;if((Jc<A_7)||!AYL){A_7=Jc;AYL=W;}}}}return AYL;},Apu:function(
Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B4;var IR=0x10000;
if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.AG;while(!!W){if((!aFilter||((
B=aFilter)&&((W.U&B)===B)))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;W=W.AG;}return null;
},U9:function(Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B7;
var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.Af;while(!!W
){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;
W=W.Af;}return null;},AAV:function(Ah,aFilter){var B;if(!Ah||(Ah.Ac!==this))return null;
var Ak3=Ah.Af;var Alf=Ah.AG;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;
while(!!Ak3||!!Alf){if((!!Ak3&&(!aFilter||((B=aFilter)&&((Ak3.U&B)===B))))&&(!IR||
!((B=IR)&&((Ak3.U&B)===B))))return Ak3;if((!!Alf&&(!aFilter||((B=aFilter)&&((Alf.
U&B)===B))))&&(!IR||!((B=IR)&&((Alf.U&B)===B))))return Alf;if(!!Ak3)Ak3=Ak3.Af;if(
!!Alf)Alf=Alf.AG;}return null;},C_:function(aFilter){var B;var W=this.B7;var AD=
BH;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;while(!!W){if((!((W.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IR||!((B=IR)&&((W.
U&B)===B))))AD=A.vS(AD,W.GetExtent());W=W.Af;}return AD;},NG:function(Km,FD,Lm,Lk
,Ll){var B;if(!Km)return;if(!FD)throw new Error(IL);if((!!FD.O||!!FD.Ac)||!!FD.O4
)throw new Error(OK);if(!!Km.Ac&&(Km.Ac!==this))throw new Error(PJ);if(!this.WD)
this.WD=A._NewObject(C.ASy,0);FD.Ac=this;FD.O=Km;FD.AIG=Lk;FD.A0n=Lm;if(!!Km.AoJ
)Km.AoJ.O4.BkM(Km.AoJ);Km.AoJ=FD;Km.U=Km.U|0x20000;if((Ll&&!!this.WD.B4)&&!this.
WD.B4.AOU())(A.abm.AAQ.isPrototypeOf(B=this.WD.B4)?B:null).A11(FD);else{var O4=A.
_NewObject(A.abm.AAQ,0);O4.A11(FD);this.WD.A7T(O4,false);}},AgS:function(Ah,JW){
var B;if(!Ah)throw new Error(N1);if(Ah.Ac!==this)throw new Error(CJ);if(!!JW&&(JW.
Ac!==this))throw new Error(Fn);if(Ah.Af===JW)return;if(((Ah.U&0x401)===0x401)){if(
!!Ah.AG&&!!Ah.Em)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([
this,this.H$],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;
Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(!!Ah.Af)Ah.Af.
AG=Ah.AG;else this.B4=Ah.AG;if(!!Ah.AG)Ah.AG.Af=Ah.Af;else this.B7=Ah.Af;var Gl=
null;var Ik=this.B4;var Lx=Ah.JQ;if(!!JW){Gl=JW;Ik=JW.AG;}if(!!Gl&&(Lx>Gl.JQ))Lx=
Gl.JQ;if(!!Ik&&(Lx<Ik.JQ))Lx=Ik.JQ;if(Lx!==Ah.JQ){Ah.Ac=null;Ah.A7f(Lx);Ah.Ac=this;
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
U|0x4000;A.ow([this,this.H$],this);}Ah.Em=null;if(this.AY===Ah)this.A$(this.AAV(
Ah,0x14));if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)Ah.Af.AG=Ah.AG;if(this.B7===Ah)this.
B7=Ah.Af;if(this.B4===Ah)this.B4=Ah.AG;Ah.Ac=null;Ah.Af=null;Ah.AG=null;if(((Ah.
U&0x1)===0x1))this.Bg(Ah.GetExtent());},AJ5:function(Ah,JW){var B;if(!Ah)throw new
Error(OL);if(!!Ah.Ac)throw new Error(KH);if(!!JW&&(JW.Ac!==this))throw new Error(
Fn);var Gl=null;var Ik=this.B4;var Lx=Ah.JQ;if(!!JW){Gl=JW;Ik=JW.AG;}if(!!Gl&&(Lx>
Gl.JQ))Lx=Gl.JQ;if(!!Ik&&(Lx<Ik.JQ))Lx=Ik.JQ;if(Lx!==Ah.JQ){Ah.Ac=null;Ah.A7f(Lx
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
U|0x4000;A.ow([this,this.H$],this);}},A5E:function(){return this.AY;},AuN:function(
){return this.GM;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.O;this.U=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.EC._Mark.call(this,D
);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B4)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
HO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AoJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Rb:null,JA:null,Fc:A.aan(10,null,null),Ar9:null,Ahx:null,
Azw:0,H6:0,L3:A.aan(10,0,null),AHT:A.aan(10,A.vx,null),WC:A.aan(10,0,null),Afb:A.
aan(10,A.vw,null),Asc:A.aan(10,0,null),Ahw:A.aan(10,A.vw,null),WA:A.aan(10,A.vw,
null),Q5:A.aan(10,A.vw,null),Acf:A.aan(10,A.vw,null),EF:0,AIh:0,AIg:0,Oi:A.aan(4
,0,null),J6:A.aan(4,A.vx,null),J3:0,Aye:0,Asr:0,Ax5:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},Ib:function(){return this;},J_:function(CW
,aClip,aOffset,Ce,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CW.AtQ(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);},C4:
function(Ahn,AnC){var B;C.O.C4.call(this,Ahn,AnC);if(!this.Ac&&(((Ahn&0x1)===0x1
)||((AnC&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ac&&(((
Ahn&0x2)===0x2)||((AnC&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A$:function(E){if((E!==null)||!E)C.O.A$.call(this,E);},Aqn:function(E){var B;var
BvY=this.HO;C.O.Aqn.call(this,E);if(((BvY!==this.HO)&&!this.Ac)&&((this.U&0x1)===
0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DD:function(E){var B;var BP=this.
GM;C.O.DD.call(this,E);if(((BP!==this.GM)&&!this.Ac)&&((this.U&0x1)===0x1))this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CK){if(!!CK){CK.
Auo=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=null;if(!!this.JA){Gm=this.JA.Dj.
DispatchEvent(CK);if(!Gm)Gm=this.GH(CK);if(!Gm)Gm=this.A0Z(CK);this.H6=0;return Gm;
}Gm=C.O.DispatchEvent.call(this,CK);this.H6=0;return Gm;},BroadcastEvent:function(
CK,aFilter){if(!!CK){CK.Auo=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=C.O.BroadcastEvent.
call(this,CK,aFilter);this.H6=0;return Gm;},Bg:function(Dc){var B;if(this.Azw>0)
throw new Error(OM);if(!!this.HO&&!this.Ac){if(((B=this.HO.Qf)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.HO,0);}this.HO.Qf=A.vS(this.HO.Qf,Dc);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)Dc=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ac){C.O.Bg.call(this,Dc);return;}Dc=A.kz(A.aam(Dc,this.M.slice(0
,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;var P;for(P=0;P<this.J3;P=
P+1)if(!(((B=A.kz(this.J6.Get(P),Dc))[0]>=B[2])||(B[1]>=B[3]))){this.J6.Set(P,A.
vS(this.J6.Get(P),Dc));this.Oi.Set(P,A.zS(this.J6.Get(P)));return;}if(this.J3<3){
this.J6.Set(this.J3,Dc);this.Oi.Set(this.J3,A.zS(Dc));this.J3=this.J3+1;return;}
var H9;var Ra;var Ayd=0;var Ayf=0;var A_6=2147483647;this.J6.Set(this.J3,Dc);this.
Oi.Set(this.J3,A.zS(Dc));for(H9=0;H9<=this.J3;H9=H9+1)for(Ra=H9+1;Ra<=this.J3;Ra=
Ra+1){var AJj=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Ra)));var BbN=((AJj<<8)/(this.
Oi.Get(H9)+this.Oi.Get(Ra)))|0;if(BbN<A_6){A_6=BbN;Ayd=H9;Ayf=Ra;}}this.J6.Set(Ayd
,A.vS(this.J6.Get(Ayd),this.J6.Get(Ayf)));this.Oi.Set(Ayd,A.zS(this.J6.Get(Ayd))
);if(Ayf!==this.J3){this.J6.Set(Ayf,this.J6.Get(this.J3));this.Oi.Set(Ayf,this.Oi.
Get(this.J3));}},BuF:function(){var Ls=A._NewObject(C.Apq,0);Ls.Auo=!!this.H6;if(
!!this.H6)Ls.Bu=this.H6;return Ls;},AnU:function(){var Ls=A._NewObject(C.Adf,0);
Ls.Auo=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},Asb:function(){var Ls=A.
_NewObject(C.Atr,0);Ls.Auo=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},BuK:
function(H){var P;var Aoa=false;for(P=0;P<10;P=P+1)if(!!this.Fc.Get(P)){var pos=
this.Q5.Get(P);var B8=this.Fc.Get(P).Ac;while(!!B8&&(B8!==this)){pos=A.aaj(pos,B8.
M.slice(0,2));B8=B8.Ac;}if(!B8&&(this.Fc.Get(P)!==this)){var tmp=this.Fc.Get(P);
this.EF=P;this.Fc.Set(P,null);tmp.GH(this.AnU().InitializeUp(P,this.Ahw.Get(P),this.
Afb.Get(P),this.WC.Get(P),this.L3.Get(P)+1,this.WA.Get(P),false,this.Q5.Get(P),this.
Acf.Get(P)));this.BroadcastEvent(this.Asb().InitializeUp(P,this.L3.Get(P)+1,false
,tmp,this.Q5.Get(P)),0x18);}else{this.WC.Set(P,(this.Ahx.Bu-this.Asc.Get(P))|0);
if(this.WC.Get(P)<10)this.WC.Set(P,10);this.EF=P;this.Fc.Get(P).GH(this.AnU().InitializeHold(
P,pos,this.Afb.Get(P),this.WC.Get(P),this.L3.Get(P)+1,this.WA.Get(P),this.Q5.Get(
P),this.Acf.Get(P)));Aoa=true;}}if(!Aoa)this.Ahx.Ap(false);},GetFPS:function(){var
ticksCount=0;var A$H=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AIh&&(
ticksCount>this.AIh))A$H=((this.AIg*1000)/((ticksCount-this.AIh)|0))|0;this.AIg=
0;this.AIh=ticksCount;return A$H;},Update:function(){var B;if(!this.Ar9)this.Ar9=
A._NewObject(A.Graphics.Canvas,0);this.Ar9.Aqt([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Ar9.Update();return this.UpdateGE20(this.Ar9);},UpdateGE20:function(CW){if(!this.
BeginUpdate())return BH;var AfD=this.UpdateCanvas(CW,B_);this.EndUpdate();return AfD;
},EndUpdate:function(){if(this.J3>0){this.AIg=this.AIg+1;this.J3=0;}},UpdateCanvas:
function(CW,aOffset){var B;var AfD=BH;var Bun=[].concat(aOffset,A.aak(CW.FrameSize
,aOffset));var P;var H9=this.J3;this.Azw=this.Azw+1;CW.Dj=this;for(P=0;(P<H9)&&(
P<4);P=P+1)if(this.Oi.Get(P)>0){this.J_(CW,A.aal(this.J6.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);AfD=A.vS(AfD,A.kz(Bun,this.J6.Get(P)));}else H9=H9+1;CW.
Dj=null;this.Azw=this.Azw-1;if(!((AfD[0]>=AfD[2])||(AfD[1]>=AfD[3])))return A.aal(
AfD,aOffset);else return AfD;},GetUpdateRegion:function(AHa){var P;var H9=this.J3;
if(AHa<0)return BH;for(P=0;(P<H9)&&(P<4);P=P+1)if(!this.Oi.Get(P)){H9=H9+1;AHa=AHa+
1;}else if(P===AHa)return this.J6.Get(P);return BH;},BeginUpdate:function(){var B;
var P;if(!!this.J3&&!A.z9(this.J6.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
BcO=A.aan(3,A.vx,null);var BcN=this.J3;for(P=0;P<BcN;P++)BcO.Set(P,this.J6.Get(P
));for(P=0;P<BcN;P++){var Bb6=A.aam(BcO.Get(P),this.M.slice(0,2));var Bb7=this.Atb(
Bb6);if(!A.z9(Bb6,Bb7))this.Bg(A.aal(Bb7,this.M.slice(0,2)));}}var H9;var Ra;for(
H9=0;H9<(this.J3-1);H9++)if(this.Oi.Get(H9)>0)for(Ra=H9+1;Ra<this.J3;Ra++)if(this.
Oi.Get(Ra)>0){var AJj=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Ra)));if(((AJj-this.
Oi.Get(H9))-this.Oi.Get(Ra))<0){this.J6.Set(H9,A.vS(this.J6.Get(H9),this.J6.Get(
Ra)));this.Oi.Set(H9,AJj);this.Oi.Set(Ra,0);}}for(P=this.J3-1;P>=0;P--)if(!this.
Oi.Get(P))this.J3=this.J3-1;return this.J3;},DoesNeedUpdate:function(){if(this.J3>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B_,aSize
));if(this.Ax5)this.U=this.U|0x60;else this.U=this.U|0x20;this.Bg(this.M);return this;
},SetRootFocus:function(AYa){if(AYa===this.Ax5)return false;this.Ax5=AYa;if(!AYa
){if(!!this.JA)this.JA.Dj.C4(0x0,0x40);else this.C4(0x0,0x40);}else if(!!this.JA
)this.JA.Dj.C4(0x40,0x0);else this.C4(0x40,0x0);return true;},SetUserInputTimestamp:
function(PO){this.H6=PO;},DriveKeyboardHitting:function(Kl,Axc,Sy){var B;var A00=
!!this.Rb;if(!!this.Rb&&((!Sy||(this.Aye!==Kl))||(this.Asr!==Axc))){var Ls=null;
var W=(C.Cd.isPrototypeOf(B=this.Rb)?B:null);var DY=(C.BR.isPrototypeOf(B=this.Rb
)?B:null);if(!!this.Aye)Ls=A._NewObject(C.KeyEvent,0).Initialize(this.Aye,false);
if(this.Asr!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(this.Asr,false);if(
!!DY)DY.GH(Ls);else if(!!W)W.GH(Ls);this.Aye=0;this.Asr=0x00;this.Rb=null;}if(!!
this.Rb){var Ls=null;var W=(C.Cd.isPrototypeOf(B=this.Rb)?B:null);var DY=(C.BR.isPrototypeOf(
B=this.Rb)?B:null);if(!!Kl)Ls=A._NewObject(C.KeyEvent,0).Initialize(Kl,true);if(
this.Asr!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(Axc,true);if(!!DY)DY.GH(
Ls);else if(!!W)W.GH(Ls);}if(!this.Rb&&Sy){if(!!Kl)this.Rb=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kl,true));if(Axc!==0x00)this.Rb=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Axc,true));if(!(C.BR.isPrototypeOf(B=this.
Rb)?B:null)&&!(C.Cd.isPrototypeOf(B=this.Rb)?B:null))this.Rb=null;this.Aye=Kl;this.
Asr=Axc;A00=A00||!!this.Rb;}this.H6=0;return A00;},DriveCursorMovement:function(
Fo){return this.DriveMultiTouchMovement(this.EF,Fo);},DriveMultiTouchMovement:function(
BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var Ff=A.aaj(Fo,this.Q5.Get(BG
));this.Q5.Set(BG,Fo);if(!this.Fc.Get(BG)||A.z8(Ff,B_)){this.H6=0;return false;}
var pos=Fo;var B8=this.Fc.Get(BG).Ac;while(!!B8&&(B8!==this)){pos=A.aaj(pos,B8.M.
slice(0,2));B8=B8.Ac;}if(!B8&&(this.Fc.Get(BG)!==this)){var tmp=this.Fc.Get(BG);
this.EF=BG;this.Fc.Set(BG,null);tmp.GH(this.AnU().InitializeUp(BG,this.Ahw.Get(BG
),this.Afb.Get(BG),this.WC.Get(BG),this.L3.Get(BG)+1,this.WA.Get(BG),false,this.
Q5.Get(BG),this.Acf.Get(BG)));this.BroadcastEvent(this.Asb().InitializeUp(BG,this.
L3.Get(BG)+1,false,tmp,Fo),0x18);}else{this.Ahw.Set(BG,pos);this.EF=BG;this.Fc.Get(
BG).GH(this.BuF().Initialize(BG,pos,this.Afb.Get(BG),Ff,this.WC.Get(BG),this.L3.
Get(BG)+1,this.WA.Get(BG),Fo,this.Acf.Get(BG)));}this.H6=0;return true;},DriveCursorHitting:
function(Sy,BG,Fo){return this.DriveMultiTouchHitting(Sy,BG,Fo);},DriveMultiTouchHitting:
function(Sy,BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var ticksCount=this.
H6;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var Bxv=this.H6;this.
DriveMultiTouchMovement(BG,Fo);Fo=this.Q5.Get(BG);this.H6=Bxv;if(Sy)this.Acf.Set(
BG,Fo);if(Sy&&!this.Fc.Get(BG)){var Jz;var pos=Fo;if(A.vt(this.AHT.Get(BG),Fo)&&((
ticksCount-this.Asc.Get(BG))<=250))this.L3.Set(BG,this.L3.Get(BG)+1);else this.L3.
Set(BG,0);this.AHT.Set(BG,A.aam(Nc,Fo));this.Asc.Set(BG,ticksCount);if(!!this.JA
)Jz=this.Xr(A.aam(Nc,Fo),BG,this.L3.Get(BG)+1,this.JA.Dj,null,0x0);else Jz=this.
Xr(A.aam(Nc,Fo),BG,this.L3.Get(BG)+1,null,null,0x0);if(!!Jz){this.BroadcastEvent(
this.Asb().InitializeDown(BG,this.L3.Get(BG)+1,false,Jz.Cd,Fo),0x18);this.Fc.Set(
BG,Jz.Cd);this.WA.Set(BG,Jz.Dz);}else{this.Fc.Set(BG,null);this.WA.Set(BG,B_);this.
H6=0;return false;}var B8=Jz.Cd.Ac;while(!!B8&&(B8!==this)){pos=A.aaj(pos,B8.M.slice(
0,2));B8=B8.Ac;}this.Afb.Set(BG,pos);this.Ahw.Set(BG,pos);this.WC.Set(BG,0);this.
Ahx.Ap(true);this.EF=BG;this.Fc.Get(BG).GH(this.AnU().InitializeDown(BG,pos,this.
L3.Get(BG)+1,this.WA.Get(BG),false,Fo));this.H6=0;return true;}if(!Sy&&!!this.Fc.
Get(BG)){var pos=Fo;var B8=this.Fc.Get(BG).Ac;while(!!B8&&(B8!==this)){pos=A.aaj(
pos,B8.M.slice(0,2));B8=B8.Ac;}if(!B8)pos=this.Ahw.Get(BG);this.EF=BG;var tmp=this.
Fc.Get(BG);this.Fc.Set(BG,null);tmp.GH(this.AnU().InitializeUp(BG,pos,this.Afb.Get(
BG),this.WC.Get(BG),this.L3.Get(BG)+1,this.WA.Get(BG),false,Fo,this.Acf.Get(BG))
);this.BroadcastEvent(this.Asb().InitializeUp(BG,this.L3.Get(BG)+1,false,tmp,Fo)
,0x18);this.H6=0;return true;}this.H6=0;return false;},ARV:function(Zu,A_s,Ab8,Ab7
){if(Zu===this)Zu=null;if(!!!Zu&&!!this.JA)Zu=this.JA.Dj;if(!this.Fc.Get(this.EF
))return;var Jz;Jz=this.Xr(A.aam(Nc,this.Q5.Get(this.EF)),this.EF,1,Zu,Ab8,Ab7);
if(!!Jz&&(this.Fc.Get(this.EF)!==Jz.Cd))this.ALD(Jz.Cd,Jz.Dz);if(!Jz&&(this.Fc.Get(
this.EF)!==A_s))this.ALD(A_s,B_);},ALD:function(Zu,Wo){if(!this.Fc.Get(this.EF)||(
this.Fc.Get(this.EF)===Zu))return;var tmp=this.Fc.Get(this.EF);this.Fc.Set(this.
EF,null);tmp.GH(this.AnU().InitializeUp(this.EF,this.Ahw.Get(this.EF),this.Afb.Get(
this.EF),this.WC.Get(this.EF),this.L3.Get(this.EF)+1,this.WA.Get(this.EF),true,this.
Q5.Get(this.EF),this.Acf.Get(this.EF)));this.BroadcastEvent(this.Asb().InitializeUp(
this.EF,this.L3.Get(this.EF)+1,true,tmp,this.Q5.Get(this.EF)),0x18);var pos=this.
Q5.Get(this.EF);var B8=null;if(!!Zu)B8=Zu.Ac;while(!!B8&&(B8!==this)){pos=A.aaj(
pos,B8.M.slice(0,2));B8=B8.Ac;}if(!B8&&(Zu!==this)){this.Fc.Set(this.EF,null);return;
}this.BroadcastEvent(this.Asb().InitializeDown(this.EF,this.L3.Get(this.EF)+1,true
,Zu,this.Q5.Get(this.EF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.Fc.Set(this.EF,Zu);this.WA.Set(this.EF,Wo);this.Afb.Set(this.EF,pos
);this.Ahw.Set(this.EF,pos);this.L3.Set(this.EF,0);this.WC.Set(this.EF,0);this.Asc.
Set(this.EF,ticksCount);this.Acf.Set(this.EF,this.Q5.Get(this.EF));this.Fc.Get(this.
EF).GH(this.AnU().InitializeDown(this.EF,pos,this.L3.Get(this.EF)+1,this.WA.Get(
this.EF),true,this.Acf.Get(this.EF)));},Bfj:function(){if(!!this.JA)return this.
JA.Dj;return null;},AAN:function(Km){var B;if(!Km)throw new Error(ON);if(!((Km.U&
0x80)===0x80))throw new Error(Ss);if(this.JA.Dj===Km)this.JA=this.JA.Af;else{var
Ax4=this.JA;while(Ax4.Af.Dj!==Km)Ax4=Ax4.Af;Ax4.Af=Ax4.Af.Af;}Km.C4(0x0,0xC0);if(
this.Ax5){if(!!this.JA)this.JA.Dj.C4(0x40,0x0);else this.C4(0x40,0x0);}},AKN:function(
Km){var B;var Ar=A._NewObject(C.A4U,0);if(!Km)throw new Error(T9);if(Km===null)throw new
Error(Zc);if(((Km.U&0x80)===0x80))throw new Error(Wa);if(!!this.JA)this.JA.Dj.C4(
0x0,0x40);else this.C4(0x0,0x40);Ar.Af=this.JA;Ar.Dj=Km;this.JA=Ar;if(this.Ax5)Km.
C4(0xC0,0x0);else Km.C4(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Ahx={I:this},0);(this.Fc=[]).__proto__=C.Root.Fc;(this.
L3=[]).__proto__=C.Root.L3;(this.AHT=[]).__proto__=C.Root.AHT;(this.WC=[]).__proto__=
C.Root.WC;(this.Afb=[]).__proto__=C.Root.Afb;(this.Asc=[]).__proto__=C.Root.Asc;(
this.Ahw=[]).__proto__=C.Root.Ahw;(this.WA=[]).__proto__=C.Root.WA;(this.Q5=[]).
__proto__=C.Root.Q5;(this.Acf=[]).__proto__=C.Root.Acf;(this.Oi=[]).__proto__=C.
Root.Oi;(this.J6=[]).__proto__=C.Root.J6;this.__proto__=C.Root;this.U=0x7F;this.
Ahx.Qz(10);this.Ahx.M8=[this,this.BuK];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Ahx._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Ahx._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JA)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Fc,D);if((B=this.Ar9)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ahx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bu:0,Auo:false,Init:function(aArg){this.Bu=this.AtZ();},AtZ:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CP:0,D4:0,Down:false,Initialize2:function(Kl,Sy){this.CP=0;this.D4=
Kl;this.Down=Sy;if((Kl>=0x30)&&(Kl<=0x39))this.CP=(10+Kl)-48;if((Kl>=0x41)&&(Kl<=
0x5A))this.CP=(105+Kl)-65;if((Kl>=0x61)&&(Kl<=0x7A))this.CP=(105+Kl)-97;if(Kl===
0x20)this.CP=131;if(!this.CP)switch(Kl){case 0x2B:this.CP=132;break;case 0x2D:this.
CP=133;break;case 0x2A:this.CP=134;break;case 0x2F:this.CP=135;break;case 0x3D:this.
CP=136;break;case 0x2E:this.CP=137;break;case 0x2C:this.CP=138;break;case 0x3A:this.
CP=139;break;case 0x3B:this.CP=140;break;default:;}return this;},Initialize:function(
Kl,Sy){this.CP=Kl;this.Down=Sy;this.D4=0x00;var AYR=Kl-10;var Ar8=Kl-105;if((AYR>=
0)&&(AYR<=9))this.D4=(48+AYR)&0xFFFF;if((Ar8>=0)&&(Ar8<=25))this.D4=(65+Ar8)&0xFFFF;
if(Kl===131)this.D4=0x20;if(this.D4===0x00)switch(Kl){case 132:this.D4=0x2B;break;
case 133:this.D4=0x2D;break;case 134:this.D4=0x2A;break;case 135:this.D4=0x2F;break;
case 136:this.D4=0x3D;break;case 137:this.D4=0x2E;break;case 138:this.D4=0x2C;break;
case 139:this.D4=0x3A;break;case 140:this.D4=0x3B;break;default:;}return this;},
BfP:function(A_i){switch(A_i){case 141:return((this.D4>=0x41)&&(this.D4<=0x5A))||((
this.D4>=0x61)&&(this.D4<=0x7A));case 142:return(((this.D4>=0x41)&&(this.D4<=0x5A
))||((this.D4>=0x61)&&(this.D4<=0x7A)))||((this.D4>=0x30)&&(this.D4<=0x39));case
143:return(this.D4>=0x30)&&(this.D4<=0x39);case 144:return(((this.D4>=0x41)&&(this.
D4<=0x46))||((this.D4>=0x61)&&(this.D4<=0x66)))||((this.D4>=0x30)&&(this.D4<=0x39
));case 145:return this.D4!==0x00;case 146:return(this.D4===0x00)&&!!this.CP;case
147:return(((this.CP===6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:
return(this.D4!==0x00)||!!this.CP;default:;}return A_i===this.CP;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AO$={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AO$;
},_className:"Core::LanguageEvent"};C.Atr={Av4:null,LE:A.vw,NU:0,Iy:0,Down:false
,NA:false,InitializeUp:function(BG,N4,AnB,AYq,Zt){this.Down=false;this.Iy=BG;this.
NU=N4;this.LE=Zt;this.Av4=AYq;this.NA=AnB;return this;},InitializeDown:function(
BG,N4,AnB,AYq,Zt){this.Down=true;this.Iy=BG;this.NU=N4;this.LE=Zt;this.Av4=AYq;this.
NA=AnB;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Atr;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Av4)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Adf={Af$:A.vw,LE:
A.vw,NU:0,Jk:0,NI:A.vw,HU:A.vw,Iy:0,Down:false,NA:false,InitializeHold:function(
BG,Akp,Axe,Axf,N4,Wo,Zt,Axd){this.Down=true;this.Iy=BG;this.HU=A.aak(Akp,Wo);this.
NI=A.aak(Axe,Wo);this.Jk=Axf;this.NU=N4;this.LE=Zt;this.Af$=Axd;return this;},InitializeUp:
function(BG,Akp,Axe,Axf,N4,Wo,AnB,Zt,Axd){this.Down=false;this.Iy=BG;this.HU=A.aak(
Akp,Wo);this.NI=A.aak(Axe,Wo);this.Jk=Axf;this.NU=N4;this.NA=AnB;this.LE=Zt;this.
Af$=Axd;return this;},InitializeDown:function(BG,Akp,N4,Wo,AnB,Zt){this.Down=true;
this.Iy=BG;this.HU=A.aak(Akp,Wo);this.NI=A.aak(Akp,Wo);this.Jk=0;this.NU=N4;this.
NA=AnB;this.LE=Zt;this.Af$=Zt;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Adf;},_className:"Core::CursorEvent"};C.Apq={Af$:A.vw
,LE:A.vw,NU:0,Jk:0,Dz:A.vw,NI:A.vw,HU:A.vw,Iy:0,Initialize:function(BG,Akp,Axe,aOffset
,Axf,BtM,Wo,Zt,Axd){this.Iy=BG;this.HU=A.aak(Akp,Wo);this.NI=A.aak(Axe,Wo);this.
Dz=aOffset;this.Jk=Axf;this.NU=BtM;this.LE=Zt;this.Af$=Axd;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Apq;},_className:"Core::DragEvent"
};C.Y={BT:null,Ns:null,Ej:null,Bo:A.vw,ASm:0,Space:0,Af9:0,J_:function(CW,aClip,
aOffset,Ce,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var Ak6=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AID=[E[2]-E[0],E[3]-E[1]];var AoQ=!A.z8(Ak6,AID);var Ff=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(Ff,B_)&&!AoQ){var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Amo(Ff,tmp);}W=W.Af;}A.ow(this.Ej,this);}if((AoQ&&(Ak6[0]>0))&&(Ak6[1]>0)){var
A8=A.aam(this.M,this.Bo);var W=this.Af;while(!!W&&!((W.U&0x200)===0x200)){if(((W.
U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nu!==this))W.Em=null;if(!W.Em&&((W.Pu!==0x14
)||!!this.Af9))W.Aso(A8,this);}W=W.Af;}A.ow(this.Ej,this);}C.EC.G.call(this,E);if(
!!this.Ac&&AoQ){this.U=this.U|0x1000;if(!((this.Ac.U&0x2000)===0x2000)){this.Ac.
U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}},AoA:function(H){var B;this.BT.
Q=null;this.BT.P1=null;this.BT=null;(B=this.Ns)?B[1].call(B[0],this):null;},Gk:function(
E){var B;var Ff=A.aaj(E,this.Bo);if(A.z8(Ff,B_))return;this.Bo=E;var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Amo(Ff,tmp);}W=W.Af;}if(!!this.Ac)this.Ac.Bg(this.M);A.ow(this.Ej,this);},A7e:
function(E){var B;if(E<0)E=0;if(E===this.ASm)return;this.ASm=E;if(!!this.Ac&&!!this.
Af9){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},Bj0:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Ac&&!!this.Af9){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,
B.H$],this);}},Kc:function(E){var B;if(E===this.Af9)return;this.Af9=E;if(!!this.
Ac){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},UL:function(Ab1,EW){var Ar8=this.C_(0x1);var Q4=this.M;var Uw=A.aaj(Ar8.slice(
0,2),Q4.slice(0,2));var L5=A.aaj(Ar8.slice(2,4),Q4.slice(2,4));var Bm=B_;if((Uw[
0]>0)&&(L5[0]>Uw[0]))Bm=[Uw[0],Bm[1]];else if((Uw[0]>0)&&(L5[0]>0))Bm=[L5[0],Bm[
1]];if((L5[0]<0)&&(Uw[0]<L5[0]))Bm=[L5[0],Bm[1]];else if((L5[0]<0)&&(Uw[0]<0))Bm=[
Uw[0],Bm[1]];if((Uw[1]>0)&&(L5[1]>Uw[1]))Bm=[Bm[0],Uw[1]];else if((Uw[1]>0)&&(L5[
1]>0))Bm=[Bm[0],L5[1]];if((L5[1]<0)&&(Uw[1]<L5[1]))Bm=[Bm[0],L5[1]];else if((L5[
1]<0)&&(Uw[1]<0))Bm=[Bm[0],Uw[1]];if(A.z8(Bm,B_)){(EW)?EW[1].call(EW[0],this):null;
return;}if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;
}this.BT=Ab1;if(!this.BT){this.Gk(A.aaj(this.Bo,Bm));(EW)?EW[1].call(EW[0],this):
null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amz,this.Gk];this.
BT.Cv=this.Bo;this.BT.B0=A.aaj(this.Bo,Bm);this.BT.P1=[this,this.AoA];this.BT.Ad7(
false);this.BT.Ap(true);this.Ns=EW;}},Hx:function(Ah,Ab5,Ab1,EW){var B;if(!Ah)return;
if((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400))throw new Error(I$);this.Bb1();var
AM=Ah.GetExtent();var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2])||(
Lu[1]>=Lu[3])))||(Ab5&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var
Bm=B_;if(AM[2]>A8[2])Bm=[AM[2]-A8[2],Bm[1]];if(AM[3]>A8[3])Bm=[Bm[0],AM[3]-A8[3]
];if(Bm[0]>(AM[0]-A8[0]))Bm=[AM[0]-A8[0],Bm[1]];if(Bm[1]>(AM[1]-A8[1]))Bm=[Bm[0]
,AM[1]-A8[1]];if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.
Ns=null;}this.BT=Ab1;if(!this.BT){this.Gk(A.aaj(this.Bo,Bm));(EW)?EW[1].call(EW[
0],this):null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amz,this.
Gk];this.BT.Cv=this.Bo;this.BT.B0=A.aaj(this.Bo,Bm);this.BT.P1=[this,this.AoA];this.
BT.Ad7(false);this.BT.Ap(true);this.Ns=EW;}},Bfe:function(Ah){var B;if(!!Ah&&((Ah.
Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return-1;var CO=-1;while(!!Ah&&!((Ah.U&0x200
)===0x200)){if(((Ah.U&0x400)===0x400))CO=CO+1;Ah=Ah.AG;}return CO;},U9:function(
Ah,aFilter){var B;if(!!Ah&&((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return null;
var W=this.Af;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.
Af;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((B=aFilter)&&((W.
U&B)===B))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;W=W.Af;}return null;},C_:function(
aFilter){var B;var W=this.Af;var AD=BH;var IR=0x10000;this.Bb1();if(((aFilter&0x10000
)===0x10000))IR=0x0;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((
B=aFilter)&&((W.U&B)===B))&&(!IR||!((B=IR)&&((W.U&B)===B))))AD=A.vS(AD,W.GetExtent(
));W=W.Af;}return AD;},Bb1:function(){var B;if((!this.Af9||!!!this.Ac)||!((this.
Ac.U&0x4000)===0x4000))return;var W=this.Af;var AY$=((this.U&0x1000)===0x1000);for(;
!!W&&!AY$;W=W.Af){if(((W.U&0x400)===0x400)&&((W.U&0x800)===0x800))AY$=true;if(((
W.U&0x200)===0x200))break;}if(AY$){this.U=this.U&~0x4000;this.Ac.Bb$();}},Amz:function(
){return this.Bo;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.Y;this.U=0x203;},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.BT
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ns)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.CI={Hn:null,BT:null,Cd:null,VU:null,Ns:null,Ej:null,G7:null,SL:-
1,SK:0,Jh:-1,Ha:0,AhO:8,Ob:0,TK:0,AbK:A.vw,GJ:-1,Bo:0,Ge:-1,OC:0,GK:24,AR:0,K9:null
,NF:false,Ass:false,ASt:function(Ii,N3,Wn,SA,SB,Ahm,OT,Q0,Lm,Lk,Ll){throw new Error(
T_);},Apo:function(Ii,Ahm,OT,Q0,Lm,Lk,Ll){throw new Error(Zd);},AjS:function(Ii,
N3,Wn,SA,SB,OT,Q0,Lm,Lk,Ll){throw new Error(Wb);},DispatchEvent:function(CK){var
B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY){this.GJ=this.Ge;
this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);if(!!this.B4)this.
B4.Af=this.Cd;else this.B7=this.Cd;this.Cd.AG=this.B4;this.B4=this.Cd;this.Cd.Ac=
this;this.AbK=[(B=this.M)[2]-B[0],this.GK];(B=this.G7)?B[1].call(B[0],this):null;
var B8=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B8)result=B8.DispatchEvent(CK);
else result=this.Cd.GH(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B7=null;
this.B4=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
){A.ow(this.Ej,this);return;}this.Ass=true;var AyV=0;if(!this.NF)AyV=this.OC;var
FH=this.Ale(-AyV-this.Bo,1);var GF=this.Ale(((((B=this.M)[3]-B[1])-AyV)-this.Bo)-
1,2);var CO=GF-FH;if(CO<1)CO=1;var Ahs=(CO/2)|0;var Aht=(CO/3)|0;if(!Ahs)Ahs=1;if(
!Aht)Aht=1;if(FH<this.Ha){FH=FH-Ahs;GF=GF+Aht;}else if(GF>this.Jh){FH=FH-Aht;GF=
GF+Ahs;}else{FH=this.Ha;GF=this.Jh;}if(!this.NF){if(FH>=this.AR){FH=0;GF=-1;}else
if(GF<0){FH=0;GF=-1;}if(GF>=this.AR)GF=this.AR-1;if(FH<0)FH=0;}else if(this.AR<=
0){FH=0;GF=-1;}var Ah5=this.Ha;var Ah6=this.Jh;var Aon=0;var Aoo=-1;if(FH>Ah5)Ah5=
FH;if(GF<Ah6)Ah6=GF;if(Ah5<=Ah6){while((this.Jh<GF)&&(this.Ha<Ah5)){this.AcF();this.
AxB();}while((this.Ha>FH)&&(this.Jh>Ah6)){this.Ay9();this.AxA();}}else{this.Jh=(
this.Jh-this.Ha)+FH;this.Ha=FH;Aon=this.Ha;Aoo=this.Jh;}while(this.Ha<FH)this.AcF(
);while(this.Jh>GF)this.Ay9();while(this.Ha>FH)this.AxA();while(this.Jh<GF)this.
AxB();var Z=this.B7;var inx=this.Ha;var pos=[0,(AyV+this.Bo)+this.Jd(inx,0)];var
BL=(B=this.M)[3]-B[1];var AkO=null;var BcV=(B=this.M)[2]-B[0];while(!!Z){var Io=
inx;if(this.NF){if(Io<0)Io=this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcG=((
Io>=this.SK)&&(Io<=this.SL))||((inx>=Aon)&&(inx<=Aoo));var An6=Z.GetExtent();var
Bm=A.aaj(pos,An6.slice(0,2));if(AcG)this.TK=this.GK;else this.TK=An6[3]-An6[1];var
AZS=pos[1];var AZT=pos[1]+this.TK;if(!A.z8(Bm,B_))Z.Amo(Bm,true);if((AcG&&(AZS<BL
))&&(AZT>0)){this.Cd=Z;this.GJ=Io;this.AbK=[BcV,this.TK];(B=this.G7)?B[1].call(B[
0],this):null;}Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TK];}inx=this.Ha;Z=this.B7;
pos=[0,(AyV+this.Bo)+this.Jd(inx,0)];while(!!Z){var Io=inx;if(this.NF){if(Io<0)Io=
this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcG=((Io>=this.SK)&&(Io<=this.SL
))||((inx>=Aon)&&(inx<=Aoo));if(AcG)this.TK=this.GK;else this.TK=(B=Z.GetExtent(
))[3]-B[1];var AZS=pos[1];var AZT=pos[1]+this.TK;if(AcG&&!((AZS<BL)&&(AZT>0))){this.
Cd=Z;this.GJ=Io;this.AbK=[BcV,this.TK];(B=this.G7)?B[1].call(B[0],this):null;}if(((
Io===this.Ge)&&this.NF)&&!!AkO){var Q4=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Z.GetExtent(),Q4))>A.zS(A.kz(AkO.GetExtent(),Q4)))AkO=Z;}else if(Io===this.
Ge)AkO=Z;Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TK];}this.SK=0;this.SL=-1;this.Cd=
null;this.GJ=-1;this.A$(AkO);this.Ass=false;A.ow(this.Ej,this);},RO:function(Ah,
GC,aFilter){return null;},Apu:function(Ah,aFilter){return null;},U9:function(Ah,
aFilter){return null;},AAV:function(Ah,aFilter){return null;},C_:function(aFilter
){return BH;},NG:function(Km,FD,Lm,Lk,Ll){throw new Error(Ze);},AgS:function(Ah,
JW){throw new Error(T$);},QG:function(Ah){throw new Error(Zf);},Ki:function(Ah,PN
){throw new Error(Zg);},HG:function(Ah){throw new Error(Ua);},AJ5:function(Ah,JW
){throw new Error(Wc);},J:function(Ah,PN){throw new Error(QT);},Jd:function(GT,AX2
){return GT*this.GK;},Ale:function(Fo,AX2){return(Fo/this.GK)|0;},Ay9:function(){
var Z=this.B4;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(
!!Z.AG)Z.AG.Af=null;else this.B7=null;this.B4=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhO){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxB:function(){var B;var Z=this.Hn;var Acs=this.K9;var AcK=++this.Jh;
if(this.NF){if(AcK<0)AcK=this.AR-(-AcK%this.AR);if(AcK>0)AcK=AcK%this.AR;}while(
!!Z&&(((B=Z)?B.__proto__:null)!==Acs))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!
!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{
Z=(C.Cd.isPrototypeOf(B=A._NewObject(Acs,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.
AhO++;}this.TK=this.GK;this.GJ=AcK;this.AbK=[(B=this.M)[2]-B[0],this.TK];this.Cd=
Z;(B=this.G7)?B[1].call(B[0],this):null;this.Cd=null;this.GJ=-1;if(!!this.B4)this.
B4.Af=Z;Z.Ac=this;Z.AG=this.B4;this.B4=Z;if(!this.B7)this.B7=Z;if(AcK===this.Ge)
this.A$(Z);return Z;},AcF:function(){var Z=this.B7;if(!Z)return null;if(Z===this.
AY)this.A$(null);this.Ha=this.Ha+1;if(!!Z.Af)Z.Af.AG=null;else this.B4=null;this.
B7=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhO){if(!!this.Hn)this.Hn.
AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxA:function(){var B;var Z=this.
Hn;var Acs=this.K9;var MO=--this.Ha;if(this.NF){if(MO<0)MO=this.AR-(-MO%this.AR);
if(MO>0)MO=MO%this.AR;}while(!!Z&&(((B=Z)?B.__proto__:null)!==Acs))Z=Z.Af;if(!!Z
){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=
null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Acs,0))?B:null
);Z.AV(0x1D);if(!!this.Ob)this.AhO++;}this.TK=this.GK;this.GJ=MO;this.AbK=[(B=this.
M)[2]-B[0],this.TK];this.Cd=Z;(B=this.G7)?B[1].call(B[0],this):null;this.Cd=null;
this.GJ=-1;if(!!this.B7)this.B7.AG=Z;Z.Ac=this;Z.Af=this.B7;this.B7=Z;if(!this.B4
)this.B4=Z;if(MO===this.Ge)this.A$(Z);return Z;},AoA:function(H){var B;this.BT.Q=
null;this.BT.P1=null;this.BT=null;(B=this.Ns)?B[1].call(B[0],this):null;},BwO:function(
H){this.Gk(this.VU.Dz[1]);},BwP:function(H){var B;if(!!this.BT){this.BT.Ap(false
);this.BT.Q=null;this.BT.P1=null;this.BT=null;}if(!this.NF){var AD=this.Apz(0,this.
AR-1);var Aft=this.M.slice(0,2);AD=A.aaS(AD,AD[1]-this.OC);if(AD[0]>Aft[0])AD=[].
concat(Aft[0],AD.slice(1,4));if(AD[1]>Aft[1])AD=A.aaS(AD,Aft[1]);var Ff=AD[1]-this.
M[1];var AZ6=((B=this.M)[3]-B[1])-(AD[3]-AD[1]);if(AZ6>0)AZ6=0;this.VU.Dz=[0,this.
Bo];this.VU.Gb=[0,(this.Bo+AZ6)-Ff];this.VU.FQ=[0,this.Bo-Ff];}else{var Ff=32000-(
32000%this.GK);this.VU.Dz=[0,this.Bo];this.VU.Gb=[0,this.Bo-Ff];this.VU.FQ=[0,this.
Bo+Ff];}},AQJ:function(E){var B;if(this.NF===E)return;this.NF=E;while(!!this.AcF(
));this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Avp:function(E){if(E===
this.VU)return;if(!!E&&!!E.AsF){A.aa8("%s%*%s",Zh,E,OO);throw new Error(PK);}if(
!!this.VU){this.VU.AIP=null;this.VU.AsF=null;}this.VU=E;if(!!E){E.AIP=[this,this.
BwP];E.AsF=[this,this.BwO];}},Gk:function(E){var B;if(this.NF&&(this.AR>0)){var Hp=
this.Jd(this.AR,3);if(E<0)E=Hp-(-E%Hp);if(E>0)E=E%Hp;if(E>0)E=E-Hp;}if(E===this.
Bo)return;this.Bo=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GL:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},A64:function(E){var B;
if(E<0)E=0;if(E===this.OC)return;this.OC=E;if(!this.NF){this.Am();this.Bg([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);}},Ad5:function(E){var B;if(E<1)E=1;if(E===this.GK
)return;this.GK=E;while(!!this.AcF());this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.AR)return;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NF){if(E>this.AR){AD=[].concat(AD.slice(0,
3),(this.OC+this.Bo)+this.Jd(E,3));AD=A.aaS(AD,(this.OC+this.Bo)+this.Jd(this.AR
,3));}else{AD=A.aaS(AD,(this.OC+this.Bo)+this.Jd(E,3));AD=[].concat(AD.slice(0,3
),(this.OC+this.Bo)+this.Jd(this.AR,3));}}else while(!!this.AcF());this.AR=E;this.
Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;this.K9=E;while(!!
this.AcF());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3
]-B[1]]);},Bfs:function(GT){if(this.Ass)return null;if((GT<0)||(GT>=this.AR))return null;
if(!this.NF){if((GT<this.Ha)||(GT>this.Jh))return null;var W=this.B7;while(GT>this.
Ha){W=W.Af;GT=GT-1;}return W;}else{var MO=this.Ha;if(MO<0)MO=this.AR-(-MO%this.AR
);if(MO>0)MO=MO%this.AR;var W=this.B7;while(!!W){if((MO%this.AR)===GT)return W;W=
W.Af;MO=MO+1;}return null;}},AzN:function(Ab1,EW){var B;if(this.NF){(EW)?EW[1].call(
EW[0],this):null;return;}var AIi=this.Bo;var A$I=((((B=this.M)[3]-B[1])-this.Bo)-
this.OC)-this.Jd(this.AR,3);var Bm=0;if(AIi>0)Bm=-AIi;else if(A$I>0)Bm=A$I;if((Bm>
0)&&(Bm>-AIi))Bm=-AIi;if(!Bm){(EW)?EW[1].call(EW[0],this):null;return;}if(!!this.
BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;}this.BT=Ab1;if(
!this.BT){this.Gk(this.Bo+Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(
false);this.BT.IF(1);this.BT.Q=[this,this.Amz,this.Gk];this.BT.Cv=this.Bo;this.BT.
B0=this.Bo+Bm;this.BT.P1=[this,this.AoA];this.BT.Ad7(false);this.BT.Ap(true);this.
Ns=EW;}},Hx:function(GT,Ab5,Ab1,EW){var B;if((GT<0)||(GT>=this.AR))return;var AM=
this.Apz(GT,GT);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2])||(Lu[
1]>=Lu[3])))||(Ab5&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var Bm=
0;if(AM[3]>A8[3])Bm=AM[3]-A8[3];if(Bm>(AM[1]-A8[1]))Bm=AM[1]-A8[1];if(!!this.BT){
this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;}this.BT=Ab1;if(!this.
BT){this.Gk(this.Bo-Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(false);
this.BT.IF(1);this.BT.Q=[this,this.Amz,this.Gk];this.BT.Cv=this.Bo;this.BT.B0=this.
Bo-Bm;this.BT.P1=[this,this.AoA];this.BT.Ad7(false);this.BT.Ap(true);this.Ns=EW;
}},Bfk:function(){return BH;},AMH:function(){if((this.OC<=0)||this.NF)return BH;
var AD=this.M;AD=A.aaS(AD,AD[1]+this.Bo);AD=[].concat(AD.slice(0,3),AD[1]+this.OC
);return AD;},A30:function(Fo){if(((this.AR<=0)||(Fo[0]<this.M[0]))||(Fo[0]>=this.
M[2]))return-1;Fo=A.aaj(Fo,this.M.slice(0,2));if(!this.NF){var Z=(Fo[1]-this.Bo)-
this.OC;if(Z>0)Z=this.Ale(Z,0);if((Z<0)||(Z>=this.AR))return-1;return Z;}var Z=Fo[
1]-this.Bo;if(Z>0)Z=this.Ale(Z,0);if(Z<0)Z=this.Ale(Z,0)-1;if(Z<0)Z=this.AR-(-Z%
this.AR);if(Z>0)Z=Z%this.AR;return Z;},Apz:function(JV,LZ){if(JV<0)JV=0;if(LZ>=this.
AR)LZ=this.AR-1;if(JV>LZ)return BH;var AD=this.M;var Bm=this.Bo;if(this.NF){var Hp=
this.Jd(this.AR,3);if(Bm<0)Bm=Hp-(-Bm%Hp);if(Bm>0)Bm=Bm%Hp;if(Bm>0)Bm=Bm-Hp;}else
Bm=Bm+this.OC;AD=[].concat(AD.slice(0,3),(AD[1]+Bm)+this.Jd(LZ+1,0));AD=A.aaS(AD
,(AD[1]+Bm)+this.Jd(JV,0));return AD;},AaP:function(JV,LZ){var B;if(JV<0)JV=0;if(
JV>LZ)return;if(this.SK>this.SL){this.SK=JV;this.SL=LZ;}else{if(JV<this.SK)this.
SK=JV;if(LZ>this.SL)this.SL=LZ;}var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.
NF){AD=A.aaS(AD,(this.OC+this.Bo)+this.Jd(JV,0));AD=[].concat(AD.slice(0,3),(this.
OC+this.Bo)+this.Jd(LZ+1,0));}else if((this.Jd(this.AR-1,3)>=(AD[3]-AD[1]))&&((AD[
3]-AD[1])>0)){var Bm=this.Bo;var Hp=this.Jd(this.AR,3);if(Bm<0)Bm=Hp-(-Bm%Hp);if(
Bm>0)Bm=Bm%Hp;if(Bm>0)Bm=Bm-Hp;AD=A.aaS(AD,Bm+this.Jd(JV,0));AD=[].concat(AD.slice(
0,3),Bm+this.Jd(LZ+1,0));}this.Am();this.Bg(AD);},Amz:function(){return this.Bo;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CI;this.G(Ub);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VU)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ns)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G7)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hn:null
,BT:null,Cd:null,Ns:null,G7:null,SL:-1,SK:0,Jh:-1,Ha:0,AhO:8,Ob:0,Sb:0,AbK:A.vw,
GJ:-1,Bo:0,Ge:-1,Vr:24,AR:0,K9:null,Ass:false,ASt:function(Ii,N3,Wn,SA,SB,Ahm,OT
,Q0,Lm,Lk,Ll){throw new Error(Zi);},Apo:function(Ii,Ahm,OT,Q0,Lm,Lk,Ll){throw new
Error(Wd);},AjS:function(Ii,N3,Wn,SA,SB,OT,Q0,Lm,Lk,Ll){throw new Error(Zj);},DispatchEvent:
function(CK){var B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY
){this.GJ=this.Ge;this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);
if(!!this.B4)this.B4.Af=this.Cd;else this.B7=this.Cd;this.Cd.AG=this.B4;this.B4=
this.Cd;this.Cd.Ac=this;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];(B=this.G7)?B[1].call(
B[0],this):null;var B8=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B8)result=B8.DispatchEvent(
CK);else result=this.Cd.GH(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B7=null;
this.B4=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
)return;this.Ass=true;var FH=this.Ale(0-this.Bo,1);var GF=this.Ale((((B=this.M)[
2]-B[0])-this.Bo)-1,2);var CO=GF-FH;if(CO<1)CO=1;var Ahs=(CO/2)|0;var Aht=(CO/3)|
0;if(!Ahs)Ahs=1;if(!Aht)Aht=1;if(FH<this.Ha){FH=FH-Ahs;GF=GF+Aht;}else if(GF>this.
Jh){FH=FH-Aht;GF=GF+Ahs;}else{FH=this.Ha;GF=this.Jh;}if(FH>=this.AR){FH=0;GF=-1;
}else if(GF<0){FH=0;GF=-1;}if(GF>=this.AR)GF=this.AR-1;if(FH<0)FH=0;var Ah5=this.
Ha;var Ah6=this.Jh;var Aon=0;var Aoo=-1;if(FH>Ah5)Ah5=FH;if(GF<Ah6)Ah6=GF;if(Ah5<=
Ah6){while((this.Jh<GF)&&(this.Ha<Ah5)){this.AcF();this.AxB();}while((this.Ha>FH
)&&(this.Jh>Ah6)){this.Ay9();this.AxA();}}else{this.Jh=(this.Jh-this.Ha)+FH;this.
Ha=FH;Aon=this.Ha;Aoo=this.Jh;}while(this.Ha<FH)this.AcF();while(this.Jh>GF)this.
Ay9();while(this.Ha>FH)this.AxA();while(this.Jh<GF)this.AxB();var Z=this.B7;var inx=
this.Ha;var pos=[this.Bo+this.Jd(inx,0),0];var BU=(B=this.M)[2]-B[0];var AkO=null;
var BcL=(B=this.M)[3]-B[1];while(!!Z){var Io=inx;var AcG=((Io>=this.SK)&&(Io<=this.
SL))||((inx>=Aon)&&(inx<=Aoo));var An6=Z.GetExtent();var Bm=A.aaj(pos,An6.slice(
0,2));if(AcG)this.Sb=this.Vr;else this.Sb=An6[2]-An6[0];var AZQ=pos[0];var AZR=pos[
0]+this.Sb;if(!A.z8(Bm,B_))Z.Amo(Bm,true);if((AcG&&(AZQ<BU))&&(AZR>0)){this.Cd=Z;
this.GJ=Io;this.AbK=[this.Sb,BcL];(B=this.G7)?B[1].call(B[0],this):null;}Z=Z.Af;
inx+=1;pos=[pos[0]+this.Sb,pos[1]];}inx=this.Ha;Z=this.B7;pos=[this.Bo+this.Jd(inx
,0),0];while(!!Z){var Io=inx;var AcG=((Io>=this.SK)&&(Io<=this.SL))||((inx>=Aon)&&(
inx<=Aoo));if(AcG)this.Sb=this.Vr;else this.Sb=(B=Z.GetExtent())[2]-B[0];var AZQ=
pos[0];var AZR=pos[0]+this.Sb;if(AcG&&!((AZQ<BU)&&(AZR>0))){this.Cd=Z;this.GJ=Io;
this.AbK=[this.Sb,BcL];(B=this.G7)?B[1].call(B[0],this):null;}if(Io===this.Ge)AkO=
Z;Z=Z.Af;inx+=1;pos=[pos[0]+this.Sb,pos[1]];}this.SK=0;this.SL=-1;this.Cd=null;this.
GJ=-1;this.A$(AkO);this.Ass=false;},RO:function(Ah,GC,aFilter){return null;},Apu:
function(Ah,aFilter){return null;},U9:function(Ah,aFilter){return null;},AAV:function(
Ah,aFilter){return null;},C_:function(aFilter){return BH;},NG:function(Km,FD,Lm,
Lk,Ll){throw new Error(Zk);},AgS:function(Ah,JW){throw new Error(We);},QG:function(
Ah){throw new Error(Wf);},Ki:function(Ah,PN){throw new Error(St);},HG:function(Ah
){throw new Error(Zl);},AJ5:function(Ah,JW){throw new Error(Zm);},J:function(Ah,
PN){throw new Error(AbO);},Jd:function(GT,AX2){return GT*this.Vr;},Ale:function(
Fo,AX2){return(Fo/this.Vr)|0;},Ay9:function(){var Z=this.B4;if(!Z)return null;if(
Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(!!Z.AG)Z.AG.Af=null;else this.B7=
null;this.B4=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhO){if(!!this.Hn
)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxB:function(){var B;
var Z=this.Hn;var Acs=this.K9;var AcK=++this.Jh;while(!!Z&&(((B=Z)?B.__proto__:null
)!==Acs))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===
Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(
Acs,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.AhO++;}this.Sb=this.Vr;this.GJ=AcK;
this.AbK=[this.Sb,(B=this.M)[3]-B[1]];this.Cd=Z;(B=this.G7)?B[1].call(B[0],this):
null;this.Cd=null;this.GJ=-1;if(!!this.B4)this.B4.Af=Z;Z.Ac=this;Z.AG=this.B4;this.
B4=Z;if(!this.B7)this.B7=Z;if(AcK===this.Ge)this.A$(Z);return Z;},AcF:function(){
var Z=this.B7;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Ha=this.Ha+1;if(
!!Z.Af)Z.Af.AG=null;else this.B4=null;this.B7=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhO){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxA:function(){var B;var Z=this.Hn;var Acs=this.K9;var MO=--this.Ha;
while(!!Z&&(((B=Z)?B.__proto__:null)!==Acs))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;
if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;
}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Acs,0))?B:null);Z.AV(0x1D);if(!!this.
Ob)this.AhO++;}this.Sb=this.Vr;this.GJ=MO;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];
this.Cd=Z;(B=this.G7)?B[1].call(B[0],this):null;this.Cd=null;this.GJ=-1;if(!!this.
B7)this.B7.AG=Z;Z.Ac=this;Z.Af=this.B7;this.B7=Z;if(!this.B4)this.B4=Z;if(MO===this.
Ge)this.A$(Z);return Z;},AoA:function(H){var B;this.BT.Q=null;this.BT.P1=null;this.
BT=null;(B=this.Ns)?B[1].call(B[0],this):null;},Gk:function(E){var B;if(E===this.
Bo)return;this.Bo=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GL:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},ADf:function(E){var B;
if(E<1)E=1;if(E===this.Vr)return;this.Vr=E;while(!!this.AcF());this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.
AR)return;var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AR){AD=[].concat(this.
Bo+this.Jd(this.AR,3),AD.slice(1,4));AD=A.aaQ(AD,this.Bo+this.Jd(E,3));}else{AD=
A.aaQ(AD,this.Bo+this.Jd(this.AR,3));AD=[].concat(this.Bo+this.Jd(E,3),AD.slice(
1,4));}this.AR=E;this.Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;
this.K9=E;while(!!this.AcF());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Blr:function(BtN,BtO){if(!this.BT)return;if(BtN)this.Gk(
this.BT.B0);var A1u=this.Ns;this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.
Ns=null;this.BT=null;if(BtO)(A1u)?A1u[1].call(A1u[0],this):null;},BfU:function(){
return!!this.BT;},Hx:function(GT,Ab5,Ab1,EW){var B;if((GT<0)||(GT>=this.AR))return;
var AM=this.Apz(GT,GT);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2
])||(Lu[1]>=Lu[3])))||(Ab5&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;
}var Bm=0;if(AM[2]>A8[2])Bm=AM[2]-A8[2];if(Bm>(AM[0]-A8[0]))Bm=AM[0]-A8[0];if(!!
this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P1=null;this.Ns=null;}this.BT=
Ab1;if(!this.BT){this.Gk(this.Bo-Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.
BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amz,this.Gk];this.BT.Cv=this.Bo;
this.BT.B0=this.Bo-Bm;this.BT.P1=[this,this.AoA];this.BT.Ad7(false);this.BT.Ap(true
);this.Ns=EW;}},Apz:function(JV,LZ){if(JV<0)JV=0;if(LZ>=this.AR)LZ=this.AR-1;if(
JV>LZ)return BH;var AD=this.M;var Bm=this.Bo;AD=A.aaQ(AD,(AD[0]+Bm)+this.Jd(LZ+1
,0));AD=[].concat((AD[0]+Bm)+this.Jd(JV,0),AD.slice(1,4));return AD;},AaP:function(
JV,LZ){var B;if(JV<0)JV=0;if(JV>LZ)return;if(this.SK>this.SL){this.SK=JV;this.SL=
LZ;}else{if(JV<this.SK)this.SK=JV;if(LZ>this.SL)this.SL=LZ;}var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AD=[].concat(this.Bo+this.Jd(JV,0),AD.slice(1,4));AD=A.aaQ(
AD,this.Bo+this.Jd(LZ+1,0));this.Am();this.Bg(AD);},Amz:function(){return this.Bo;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.G(Ub);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ns)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bh={AP1:null,ACL:null,Auy:null,DU:null,
K$:null,BS:null,AI9:0,Bn:0,Iy:0,Bu:0,NU:0,Jk:0,Dz:A.vw,NI:A.vw,HU:A.vw,AvP:8,Aeh:
0,A4O:1,Down:false,XT:false,NA:false,AZg:false,Ayo:0,J_:function(CW,aClip,aOffset
,Ce,aBlend){},GH:function(CK){var B;var BO=(C.Adf.isPrototypeOf(CK)?CK:null);var
DX=(C.Apq.isPrototypeOf(CK)?CK:null);var AIt=this.XT;var ZQ;var Us;var Azr;var MM;
var AxU;if(!BO&&!DX)return null;ZQ=(!!BO&&BO.Down)&&!BO.Jk;Us=(!!BO&&BO.Down)&&(
BO.Jk>0);Azr=(!!BO&&BO.Down)&&(BO.Jk>this.Ayo);MM=!!BO&&!BO.Down;AxU=!!DX;if(ZQ)
this.Ayo=((B=(BO.NA?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aeh&0x20)===0x20
)&&(this.Bn>0))&&(this.Bn<33554432)){var In=(C.Atr.isPrototypeOf(CK)?CK:null);if(((
!!In&&In.Down)&&(In.Av4!==this))&&A.vt(this.GetExtent(),this.Ac.A4K(In.LE))){this.
AI9=0x20;this.Bn=this.Bn|67108864;return null;}}if(ZQ){var Aou=0;var Acm;this.Bn=
this.Bn|(1<<BO.Iy);for(Acm=this.Bn&4095;Acm>0;Acm=Acm>>1)if(!!(Acm&1))Aou=Aou+1;
if(Aou===1)this.Bn=(this.Bn|16777216)|(4096<<BO.Iy);}if(MM&&(this.Bn<16777216)){
var Iq=this.Ib();var Jz=null;if(!!Iq){var A1m=(!!this.AG?this.AG:this.Ac);var AY6=(
!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xr(A.aam(Su,BO.LE),BO.Iy,BO.NU,AY6,A1m,0x0);}if(!!Jz
){var P;for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jz.Cd.GH(A._NewObject(C.Adf,0).InitializeDown(
P,BO.HU,BO.NU,B_,true,BO.LE));for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jz.Cd.GH(A.
_NewObject(C.Adf,0).InitializeUp(P,BO.HU,BO.HU,0,BO.NU,B_,false,BO.LE,BO.LE));}}
if(MM)this.Bn=(this.Bn&~(1<<BO.Iy))|33554432;if(Azr&&(this.Bn<16777216))this.Bn=
this.Bn|67108864;if(MM&&BO.NA)this.Bn=this.Bn|67108864;if(MM&&!(this.Bn&4095))this.
AI9=0x0;if(MM&&!(this.Bn&16777215))this.Bn=0;if(Us&&(this.Bn>=67108864)){var Iq=
this.Ib();if(!!Iq)Iq.ARV(null,null,this,this.AI9);}if((Us&&!!(this.Bn&16777216))&&
!!(this.Bn&33554432)){Us=false;MM=true;}if(!!BO&&!(this.Bn&(4096<<BO.Iy)))return this;
if(!!DX&&!(this.Bn&(4096<<DX.Iy)))return this;if(MM&&!(this.Bn&16777216))return this;
if(((ZQ||AxU)||Us)&&((this.Bn<16777216)||(this.Bn>=33554432)))return this;if(MM)
this.Bn=this.Bn&3758100479;if(MM&&!(this.Bn&16777215))this.Bn=0;if(!!BO){this.Down=
ZQ||Us;this.XT=this.AOX(BO.HU);this.NI=BO.NI;this.HU=BO.HU;this.Dz=B_;this.Jk=BO.
Jk;this.NU=BO.NU;this.NA=BO.NA;this.Iy=BO.Iy;this.Bu=BO.Bu;if(BO.Down&&!BO.Jk)AIt=
false;}if(!!DX){this.Down=true;this.XT=this.AOX(DX.HU);this.NI=DX.NI;this.HU=DX.
HU;this.Dz=DX.Dz;this.Jk=DX.Jk;this.NU=DX.NU;this.Iy=DX.Iy;this.NA=false;this.Bu=
DX.Bu;}var AZa=this.Down;if(!!DX)(B=this.AP1)?B[1].call(B[0],this):null;if((!!BO&&
this.Down)&&!this.Jk)(B=this.BS)?B[1].call(B[0],this):null;if((!!BO&&this.Down)&&(
this.Jk>0))(B=this.DU)?B[1].call(B[0],this):null;if((this.Down&&this.XT)&&!AIt){
this.AZg=true;(B=this.Auy)?B[1].call(B[0],this):null;}if(this.AZg&&(((AZa&&!this.
XT)&&AIt)||((!AZa&&this.XT)&&AIt))){this.AZg=false;(B=this.ACL)?B[1].call(B[0],this
):null;}if(!!BO&&!AZa)(B=this.K$)?B[1].call(B[0],this):null;if(!!this.Aeh){var AcE=
0x0;if(((((this.Aeh&0x10)===0x10)&&!!BO)&&BO.Down)&&(BO.Jk>=1000))AcE=0x10;if((((
this.Aeh&0x1)===0x1)&&!!DX)&&((DX.LE[1]-DX.Af$[1])<=-this.AvP))AcE=0x1;if((((this.
Aeh&0x2)===0x2)&&!!DX)&&((DX.LE[1]-DX.Af$[1])>=this.AvP))AcE=0x2;if((((this.Aeh&
0x4)===0x4)&&!!DX)&&((DX.LE[0]-DX.Af$[0])<=-this.AvP))AcE=0x4;if((((this.Aeh&0x8
)===0x8)&&!!DX)&&((DX.LE[0]-DX.Af$[0])>=this.AvP))AcE=0x8;if(!!AcE){var Iq=this.
Ib();if(!!Iq){this.AI9=AcE;Iq.ARV(null,this,this,AcE);}}}return this;},Xr:function(
Dc,BG,N4,Ab3,Ab8,Ab7){var B;if(!!Ab3&&(Ab3!==this))return null;if((N4<1)||(N4>this.
A4O))return null;if(this.Bn>=33554432)return null;if((this.Bn>=16777216)&&!(this.
Bn&(4096<<BG)))return null;if(!!(Ab7&this.Aeh))return null;if(this.Bfy()){var AM=
A.kz(Dc,this.GetExtent());if(!((AM[0]>=AM[2])||(AM[1]>=AM[3]))){var PQ=A.zT(Dc);
var Ff=B_;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0]
)-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3
]-PQ[1])-1];return A._NewObject(C.Ats,0).Initialize(this,Ff);}}else{var Ho=A.aan(
9,A.vw,null);var P;Ho.Set(0,A.zT(Dc));Ho.Set(1,Ho.Get(0));Ho.Set(2,Ho.Get(0));Ho.
Set(3,Ho.Get(0));Ho.Set(4,Ho.Get(0));Ho.Set(1,[Dc[0],Ho.Get(1)[1]]);Ho.Set(2,[Ho.
Get(2)[0],Dc[1]]);Ho.Set(3,[Dc[2],Ho.Get(3)[1]]);Ho.Set(4,[Ho.Get(4)[0],Dc[3]]);
Ho.Set(5,Dc.slice(0,2));Ho.Set(6,[Dc[2],Dc[1]]);Ho.Set(7,[Dc[0],Dc[3]]);Ho.Set(8
,Dc.slice(2,4));for(P=0;P<9;P=P+1)if(this.AOX(Ho.Get(P)))return A._NewObject(C.Ats
,0).Initialize(this,A.aaj(Ho.Get(P),Ho.Get(0)));}return null;},BjT:function(E){if(
E<1)E=1;this.AvP=E;},ADo:function(E){if(E<1)E=1;this.A4O=E;},Ap:function(E){if(E
)this.C4(0x10,0x0);else this.C4(0x0,0x10);},_Init:function(aArg){C.YN._Init.call(
this,aArg);this.__proto__=C.Bh;this.U=0x11B;},_Mark:function(D){var B;C.YN._Mark.
call(this,D);if((B=this.AP1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ACL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.K$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"};C.H2={
timer:null,AIP:null,AsF:null,AD4:null,Yw:null,R$:null,Bn:0,AHq:0,Acp:5000,AoP:0,
AIr:A.vw,An3:0,Ae4:0,EP:0,Alp:0,AsU:0,An2:0,Ae3:0,EO:0,Alo:0,Alm:0,NI:A.vw,A2$:A.
vw,FQ:A.vw,Gb:A.vw,Dz:A.vw,VX:A.vw,A3Q:0.5,A7R:true,AEH:true,YX:false,WR:false,WS:
false,AnM:false,Ayo:0,J_:function(CW,aClip,aOffset,Ce,aBlend){},GH:function(CK){
var B;var BO=(C.Adf.isPrototypeOf(CK)?CK:null);var DX=(C.Apq.isPrototypeOf(CK)?CK:
null);var In=(C.Atr.isPrototypeOf(CK)?CK:null);var ZQ;var Us;var Azr;var MM;var AxU;
ZQ=(!!BO&&BO.Down)&&!BO.Jk;Us=(!!BO&&BO.Down)&&(BO.Jk>0);Azr=(!!BO&&BO.Down)&&(BO.
Jk>this.Ayo);MM=!!BO&&!BO.Down;AxU=!!DX;if(ZQ)this.Ayo=((B=(BO.NA?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if(ZQ){var Aou=0;var Acm;this.Bn=this.Bn|(1<<BO.Iy);for(Acm=this.
Bn&4095;Acm>0;Acm=Acm>>1)if(!!(Acm&1))Aou=Aou+1;if(Aou===1)this.Bn=(this.Bn|16777216
)|(4096<<BO.Iy);}if(MM&&(this.Bn<16777216)){var Iq=this.Ib();var Jz=null;if(!!Iq
){var A1m=(!!this.AG?this.AG:this.Ac);var AY6=(!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xr(A.
aam(Su,BO.LE),BO.Iy,BO.NU,AY6,A1m,0x0);}if(!!Jz){var P;for(P=0;P<10;P++)if(!!(this.
Bn&(1<<P)))Jz.Cd.GH(A._NewObject(C.Adf,0).InitializeDown(P,BO.HU,BO.NU,B_,true,BO.
LE));for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jz.Cd.GH(A._NewObject(C.Adf,0).InitializeUp(
P,BO.HU,BO.HU,0,BO.NU,B_,false,BO.LE,BO.LE));}}if(MM)this.Bn=(this.Bn&~(1<<BO.Iy
))|33554432;if(Azr&&(this.Bn<16777216))this.Bn=this.Bn|67108864;if(MM&&BO.NA)this.
Bn=this.Bn|67108864;if(MM&&!(this.Bn&16777215))this.Bn=0;if(Us&&(this.Bn>=67108864
)){var Iq=this.Ib();if(!!Iq)Iq.ARV(null,null,this,0x0);}if((Us&&!!(this.Bn&16777216
))&&!!(this.Bn&33554432)){Us=false;MM=true;}if(!!BO&&!(this.Bn&(4096<<BO.Iy)))return this;
if(!!DX&&!(this.Bn&(4096<<DX.Iy)))return this;if(MM&&!(this.Bn&16777216))return this;
if(((ZQ||AxU)||Us)&&((this.Bn<16777216)||(this.Bn>=33554432)))return this;if(MM)
this.Bn=this.Bn&3758100479;if(MM&&!(this.Bn&16777215))this.Bn=0;if(!!In&&(In.Av4===
this))return null;if((!!In&&In.Down)&&(this.AnM||!this.YX))return null;if((!!In&&
In.Down)&&!A.vt(this.M,this.Ac.A4K(In.LE)))return null;if((!!In&&!In.Down)&&(!this.
AnM||(this.AHq!==In.Iy)))return null;if((!BO&&!DX)&&!In)return null;if(!!BO){this.
AnM=ZQ||Us;this.AHq=BO.Iy;this.NI=BO.NI;}if(!!DX)this.AHq=DX.Iy;if(!!In){this.AnM=
In.Down;this.AHq=In.Iy;}if(!!In&&In.Down){this.A1n();this.EO=(((In.Bu-this.Alm)*
0.001)*this.Ae3)+this.EO;this.EP=(((In.Bu-this.AsU)*0.001)*this.Ae4)+this.EP;if(
this.WR)this.EO=0;if(this.WS)this.EP=0;this.Ae3=0;this.Ae4=0;this.WR=false;this.
WS=false;this.AIr=this.Dz;this.AoP=In.Bu;return this;}if(ZQ){this.A1n();this.EO=(((
BO.Bu-this.Alm)*0.001)*this.Ae3)+this.EO;this.EP=(((BO.Bu-this.AsU)*0.001)*this.
Ae4)+this.EP;if(this.WR||!this.YX)this.EO=0;if(this.WS||!this.YX)this.EP=0;this.
Ae3=0;this.Ae4=0;this.WR=false;this.WS=false;if(!this.YX){this.YX=true;(B=this.R$
)?B[1].call(B[0],this):null;(B=this.AIP)?B[1].call(B[0],this):null;}this.AIr=this.
Dz;this.AoP=BO.Bu;}if(!!DX){var GW=A.aaj(DX.HU,DX.NI);var CA=this.Dz;if(this.AEH
)CA=[this.AIr[0]+GW[0],CA[1]];CA=[CA[0],this.AIr[1]+GW[1]];if(this.A7R){if(CA[0]<
this.Gb[0])CA=[this.Gb[0]+(((CA[0]-this.Gb[0])/2)|0),CA[1]];else if(CA[0]>this.FQ[
0])CA=[this.FQ[0]+(((CA[0]-this.FQ[0])/2)|0),CA[1]];if(CA[1]<this.Gb[1])CA=[CA[0
],this.Gb[1]+(((CA[1]-this.Gb[1])/2)|0)];else if(CA[1]>this.FQ[1])CA=[CA[0],this.
FQ[1]+(((CA[1]-this.FQ[1])/2)|0)];}else{if(CA[0]<this.Gb[0])CA=[this.Gb[0],CA[1]
];else if(CA[0]>this.FQ[0])CA=[this.FQ[0],CA[1]];if(CA[1]<this.Gb[1])CA=[CA[0],this.
Gb[1]];else if(CA[1]>this.FQ[1])CA=[CA[0],this.FQ[1]];}if(!A.z8(CA,this.Dz)){this.
A2$=A.aaj(CA,this.Dz);this.Dz=CA;(B=this.AsF)?B[1].call(B[0],this):null;(B=this.
AD4)?B[1].call(B[0],this):null;}}if((!!In&&!In.Down)&&((In.Bu-this.AoP)>=200)){this.
EO=0;this.EP=0;}if(Us&&((BO.Bu-this.AoP)>=200)){this.EO=0;this.EP=0;}if(!!DX&&(DX.
Bu>this.AoP)){var GW=DX.Dz;var Baa=1000/(DX.Bu-this.AoP);var AhR=0;var AhS;if(this.
AEH)AhR=GW[0]*Baa;AhS=GW[1]*Baa;if((AhR*this.EO)<0)this.EO=0;if((AhS*this.EP)<0)
this.EP=0;this.EO=(this.EO+AhR)*0.5;this.EP=(this.EP+AhS)*0.5;this.AoP=DX.Bu;}if(
!MM&&!In)return this;if(!!BO&&BO.NA){this.EO=0;this.EP=0;}if((this.Dz[0]<=this.Gb[
0])||(this.Dz[0]>=this.FQ[0]))this.EO=0;else if(!this.EO){var EH=this.Dz[0];var E3=
this.Gb[0];var Ey=this.FQ[0];if(EH<E3)Ey=this.Gb[0];else if(EH>Ey)E3=this.FQ[0];
else if(this.VX[0]<=1){E3=EH;Ey=EH;}else{var Acu=(Ey-EH)%this.VX[0];Ey=(EH-this.
VX[0])+Acu;E3=EH+Acu;if(Ey<this.Gb[0])Ey=this.Gb[0];if(E3>this.FQ[0])E3=this.FQ[
0];}if((E3-EH)<=(EH-Ey))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){var Jc=EH-this.Dz[0
];if(Jc>0)this.EO=Math.sqrt((Jc*2)*this.Acp)+20;if(Jc<0)this.EO=-Math.sqrt((-Jc*
2)*this.Acp)-20;this.Ae3=(400-(this.EO*this.EO))/(2*Jc);this.An2=EH;}}else{var BxM=
this.EO*this.EO;var Jc=BxM/(2*this.Acp);var EH=this.Dz[0];if(this.EO>0)EH=EH+(Jc|
0);if(this.EO<0)EH=EH-(Jc|0);if(EH>this.FQ[0])EH=this.FQ[0];else if(EH<this.Gb[0
])EH=this.Gb[0];var BcG=EH;var E3=this.Gb[0];var Ey=this.FQ[0];if(EH<E3)Ey=this.
Gb[0];else if(EH>Ey)E3=this.FQ[0];else if(this.VX[0]<=1){E3=EH;Ey=EH;}else{var Acu=(
Ey-EH)%this.VX[0];Ey=(EH-this.VX[0])+Acu;E3=EH+Acu;if(Ey<this.Gb[0])Ey=this.Gb[0
];if(E3>this.FQ[0])E3=this.FQ[0];}if(this.EO>0){if(Ey<=this.Dz[0])EH=E3;else if((
EH-Ey)<(E3-EH))EH=Ey;else EH=E3;}else if(E3>=this.Dz[0])EH=Ey;else if((EH-Ey)>(E3-
EH))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){Jc=EH-this.Dz[0];if(EH!==BcG){var Aib=EH-
BcG;if(Aib>0)this.EO=this.EO+Math.sqrt((Aib*2)*this.Acp);if(Aib<0)this.EO=this.EO-
Math.sqrt((-Aib*2)*this.Acp);}if(this.EO>0)this.EO=this.EO+20;if(this.EO<0)this.
EO=this.EO-20;this.Ae3=(400-(this.EO*this.EO))/(2*Jc);this.An2=EH;}else this.EO=
0;}if((this.Dz[1]<=this.Gb[1])||(this.Dz[1]>=this.FQ[1]))this.EP=0;else if(!this.
EP){var EI=this.Dz[1];var E3=this.Gb[1];var Ey=this.FQ[1];if(EI<E3)Ey=this.Gb[1];
else if(EI>Ey)E3=this.FQ[1];else if(this.VX[1]<=1){E3=EI;Ey=EI;}else{var Acu=(Ey-
EI)%this.VX[1];Ey=(EI-this.VX[1])+Acu;E3=EI+Acu;if(Ey<this.Gb[1])Ey=this.Gb[1];if(
E3>this.FQ[1])E3=this.FQ[1];}if((E3-EI)<=(EI-Ey))EI=E3;else EI=Ey;if(EI!==this.Dz[
1]){var Jc=EI-this.Dz[1];if(Jc>0)this.EP=Math.sqrt((Jc*2)*this.Acp)+20;if(Jc<0)this.
EP=-Math.sqrt((-Jc*2)*this.Acp)-20;this.Ae4=(400-(this.EP*this.EP))/(2*Jc);this.
An3=EI;}}else{var BxN=this.EP*this.EP;var Jc=BxN/(2*this.Acp);var EI=this.Dz[1];
if(this.EP>0)EI=EI+(Jc|0);if(this.EP<0)EI=EI-(Jc|0);if(EI>this.FQ[1])EI=this.FQ[
1];else if(EI<this.Gb[1])EI=this.Gb[1];var BcH=EI;var E3=this.Gb[1];var Ey=this.
FQ[1];if(EI<E3)Ey=this.Gb[1];else if(EI>Ey)E3=this.FQ[1];else if(this.VX[1]<=1){
E3=EI;Ey=EI;}else{var Acu=(Ey-EI)%this.VX[1];Ey=(EI-this.VX[1])+Acu;E3=EI+Acu;if(
Ey<this.Gb[1])Ey=this.Gb[1];if(E3>this.FQ[1])E3=this.FQ[1];}if(this.EP>0){if(Ey<=
this.Dz[1])EI=E3;else if((EI-Ey)<(E3-EI))EI=Ey;else EI=E3;}else if(E3>=this.Dz[1
])EI=Ey;else if((EI-Ey)>(E3-EI))EI=E3;else EI=Ey;if(EI!==this.Dz[1]){Jc=EI-this.
Dz[1];if(EI!==BcH){var Aib=EI-BcH;if(Aib>0)this.EP=this.EP+Math.sqrt((Aib*2)*this.
Acp);if(Aib<0)this.EP=this.EP-Math.sqrt((-Aib*2)*this.Acp);}if(this.EP>0)this.EP=
this.EP+20;if(this.EP<0)this.EP=this.EP-20;this.Ae4=(400-(this.EP*this.EP))/(2*Jc
);this.An3=EI;}else this.EP=0;}if(!!BO)this.Alm=BO.Bu;if(!!In)this.Alm=In.Bu;this.
AsU=this.Alm;this.Alo=this.Dz[0];this.Alp=this.Dz[1];this.BxO();return this;},Xr:
function(Dc,BG,N4,Ab3,Ab8,Ab7){var B;if(!!Ab3&&(Ab3!==this))return null;if(this.
Bn>=33554432)return null;if((this.Bn>=16777216)&&!(this.Bn&(4096<<BG)))return null;
if(!this.AEH&&!!(Ab7&0xC))return null;var AM=A.kz(Dc,this.M);if(!((AM[0]>=AM[2])||(
AM[1]>=AM[3]))){var PQ=A.zT(Dc);var Ff=B_;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];
if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0])-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];
if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3]-PQ[1])-1];return A._NewObject(C.Ats,0).Initialize(
this,Ff);}return null;},A1n:function(){if(!!this.timer){A.zl([this,this.L$],this.
timer,0);this.timer=null;}},BxO:function(){this.timer=A._GetAutoObject(A.abm.Af2
);A.y_([this,this.L$],this.timer,0);},L$:function(H){var B;if(!this.timer)return;
var As0=(this.timer.Bu-this.Alm)*0.001;var As1=(this.timer.Bu-this.AsU)*0.001;var
BxW=As0*As0;var BxX=As1*As1;var AhR=(this.Ae3*As0)+this.EO;var AhS=(this.Ae4*As1
)+this.EP;var CA=[((((this.Ae3*0.5)*BxW)+(this.EO*As0))+this.Alo)|0,((((this.Ae4
*0.5)*BxX)+(this.EP*As1))+this.Alp)|0];if(this.WR&&(As0>=0.5)){CA=[this.An2,CA[1
]];this.EO=0;this.Ae3=0;this.Alo=CA[0];this.WR=false;}else if(this.WR){var Lt=1-
Math.pow(1-(As0/0.5),5);CA=[(this.Alo+((this.An2-this.Alo)*Lt))|0,CA[1]];}if(this.
WS&&(As1>=0.5)){CA=[CA[0],this.An3];this.EP=0;this.Ae4=0;this.Alp=CA[1];this.WS=
false;}else if(this.WS){var Lt=1-Math.pow(1-(As1/0.5),5);CA=[CA[0],(this.Alp+((this.
An3-this.Alp)*Lt))|0];}if(((this.EO>0)&&(AhR<0))||((this.EO<0)&&(AhR>0))){AhR=0;
CA=[this.Dz[0],CA[1]];}if(((this.EP>0)&&(AhS<0))||((this.EP<0)&&(AhS>0))){AhS=0;
CA=[CA[0],this.Dz[1]];}if(!this.WR&&(CA[0]<this.Gb[0])){this.Alo=CA[0];this.An2=
this.Gb[0];this.Alm=this.timer.Bu;this.WR=true;}else if(!this.WR&&(CA[0]>this.FQ[
0])){this.Alo=CA[0];this.An2=this.FQ[0];this.Alm=this.timer.Bu;this.WR=true;}if(
!this.WS&&(CA[1]<this.Gb[1])){this.Alp=CA[1];this.An3=this.Gb[1];this.AsU=this.timer.
Bu;this.WS=true;}else if(!this.WS&&(CA[1]>this.FQ[1])){this.Alp=CA[1];this.An3=this.
FQ[1];this.AsU=this.timer.Bu;this.WS=true;}if(((!this.WR&&!!this.EO)&&(AhR>-20))&&(
AhR<20)){CA=[this.An2,CA[1]];this.EO=0;this.Ae3=0;this.Alo=CA[0];}if(((!this.WS&&
!!this.EP)&&(AhS>-20))&&(AhS<20)){CA=[CA[0],this.An3];this.EP=0;this.Ae4=0;this.
Alp=CA[1];}if(!A.z8(CA,this.Dz)){this.A2$=A.aaj(CA,this.Dz);this.Dz=CA;(B=this.AsF
)?B[1].call(B[0],this):null;(B=this.AD4)?B[1].call(B[0],this):null;}if(((!this.EO&&
!this.EP)&&!this.WR)&&!this.WS){this.A1n();this.YX=false;(B=this.Yw)?B[1].call(B[
0],this):null;}},AQ9:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
VX=E;},AQN:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A3Q)return;this.A3Q=E;if(
E<(1e-007))E=1e-007;this.Acp=E*10000;},_Init:function(aArg){C.EC._Init.call(this
,aArg);this.__proto__=C.H2;this.U=0x11B;},_Mark:function(D){var B;C.EC._Mark.call(
this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIP)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AsF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AD4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Yw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.R$)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BR={Af:null,K$:
null,BS:null,DU:null,AoL:0,Bu:0,A7N:0,Filter:148,CP:0,D4:0,Bw:true,Down:false,Abs:
false,Pc:false,Init:function(aArg){var B;var Dj=(C.O.isPrototypeOf(B=this.I)?B:null
);if(!Dj)throw new Error(AbP);this.Af=Dj.AIw;Dj.AIw=this;},GH:function(CK){var B;
if(!!CK&&CK.BfP(this.Filter)){this.Down=CK.Down;this.CP=CK.CP;this.D4=CK.D4;this.
Bu=CK.Bu;this.Pc=false;if(CK.Down){this.A7N=this.AoL;this.Abs=this.AoL>0;if(this.
Abs)(B=this.DU)?B[1].call(B[0],this):null;else(B=this.BS)?B[1].call(B[0],this):null;
if(!this.Pc)this.AoL=this.AoL+1;return!this.Pc;}if(!CK.Down){this.Abs=this.AoL>1;
this.A7N=this.AoL-1;this.AoL=0;(B=this.K$)?B[1].call(B[0],this):null;return!this.
Pc;}}return false;},_Init:function(aArg){this.__proto__=C.BR;this.Init(aArg);A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.Ats={Cd:null,Atv:0,Dz:A.vw,Initialize:function(Ah,aOffset
){this.Cd=Ah;this.Dz=aOffset;this.Atv=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.Ats;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A4U={
Af:null,Dj:null,_Init:function(aArg){this.__proto__=C.A4U;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};C.Ap0={Nu:null,extent:A.vx,A8:A.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.Ap0;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nu)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.AB7={Ah0:A.vw,AhZ:
A.vw,_Init:function(aArg){C.Ap0._Init.call(this,aArg);this.__proto__=C.AB7;},_className:
"Core::LayoutLineContext"};C.AB8={AyZ:A.vw,AyY:A.vw,Ah0:A.vw,AhZ:A.vw,_Init:function(
aArg){C.Ap0._Init.call(this,aArg);this.__proto__=C.AB8;},_className:"Core::LayoutQuadContext"
};C.ALK={Dj:null,Af:null,Q6:null,Re:null,L9:null,AoI:null,_Init:function(aArg){this.
__proto__=C.ALK;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Re)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L9)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AoI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.ASy={FF:null,B4:null,B7:null,Bag:false,
Buy:function(){if(!this.FF)return;var O4=this.FF;this.FF.O0=null;this.FF=null;A.
ow([this,this.A0E],this);O4.A5f(this);},Bwf:function(H){if(!!this.FF)return;if(!
this.B7)return;this.FF=this.B7;this.B7=this.B7.Af;if(!!this.B7)this.B7.AG=null;else
this.B4=null;this.FF.Af=null;this.Bag=true;this.FF.R$(this);this.Bag=false;},BwC:
function(H){A.ow([this,this.Bwf],this);},BwB:function(H){A.ow([this,this.BwC],this
);},A0E:function(H){A.ow([this,this.BwB],this);},BdV:function(Ja){if(!Ja||!Ja.O0
)return;if(Ja.O0!==this)throw new Error(AeN);var Bc9=false;if(this.FF===Ja){this.
FF=null;Bc9=true;A.ow([this,this.A0E],this);}else{if(!!Ja.Af)Ja.Af.AG=Ja.AG;else
this.B4=Ja.AG;if(!!Ja.AG)Ja.AG.Af=Ja.Af;else this.B7=Ja.Af;Ja.AG=null;Ja.Af=null;
}Ja.O0=null;if(Bc9)Ja.A5e(this);},A7T:function(Ja,AYw){if(!Ja)return;if(!!Ja.O0)
throw new Error(Zn);Ja.O0=this;if(AYw){Ja.Af=this.B7;if(!!this.B7)this.B7.AG=Ja;
else this.B4=Ja;this.B7=Ja;}else{Ja.AG=this.B4;if(!!this.B4)this.B4.Af=Ja;else this.
B7=Ja;this.B4=Ja;}if(!this.FF)A.ow([this,this.A0E],this);},_Init:function(aArg){
this.__proto__=C.ASy;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Aj5={O0:null,AG:null,Af:
null,A5f:function(Ar2){},A5e:function(Ar2){},R$:function(Ar2){this.Ac9();},Mh:function(
){if(!!this.O0&&(this.O0.FF===this))this.O0.Buy();},Ac9:function(){if(!!this.O0)
this.O0.BdV(this);},AOU:function(){return!!this.O0&&(this.O0.FF===this);},_Init:
function(aArg){this.__proto__=C.Aj5;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O0)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.ASw={Ar:null,AsW:
null,R$:function(Ar2){this.AsW.Ar=this.Ar;A.vv(this.AsW,0);A.ow([this,this.Bwc],
this);},Bwc:function(H){this.AsW.Ar=null;this.AsW=null;this.Ar=null;this.Mh();},
_Init:function(aArg){C.Aj5._Init.call(this,aArg);this.__proto__=C.ASw;},_Mark:function(
D){var B;C.Aj5._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AsW)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AET={_Init:function(){C.ASy._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AgR={resource:null,K3:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.AgR;this.Init(aArg
);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={M8:null,timer:
null,Bu:0,Period:1000,US:0,Bw:false,K3:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AIX:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},Qz:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bw)this.AIX(this.US,E);},VL:function(E){if(E<0)E=0;if(E===this.US)return;
this.US=E;if(this.Bw)this.AIX(E,this.Period);},Ap:function(E){if(E===this.Bw)return;
this.Bw=E;if(E)this.AIX(this.US,this.Period);else this.AIX(0,0);this.Bu=this.AtZ(
);},AtZ:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;
},Trigger:function(){var B;this.Bu=this.AtZ();if(!this.Period)this.Ap(false);(B=
this.M8)?B[1].call(B[0],this):null;},AEQ:function(H){this.Ap(false);},StartTimer:
function(H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M8)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bu={AR3:0,Auu:0,Ai5:0,Gt:0
,G5:0,Year:0,A$Q:function(Ae0,AX0){if(AX0)switch(Ae0){case 1:return A.abj.BfY;case
2:return A.abj.BeQ;case 3:return A.abj.Bgi;case 4:return A.abj.Bdv;case 5:return A.
abj.Bgm;case 6:return A.abj.Bf1;case 7:return A.abj.Bf0;case 8:return A.abj.Bdx;
case 9:return A.abj.Bk2;case 10:return A.abj.BgR;case 11:return A.abj.BgQ;case 12:
return A.abj.Beh;default:return A.jm;}else switch(Ae0){case 1:return A.abj.AB1;case
2:return A.abj.AAS;case 3:return A.abj.ACb;case 4:return A.abj.AzT;case 5:return A.
abj.ACe;case 6:return A.abj.AB3;case 7:return A.abj.AB2;case 8:return A.abj.Az1;
case 9:return A.abj.AEw;case 10:return A.abj.ACs;case 11:return A.abj.ACq;case 12:
return A.abj.AAC;default:return A.jm;}},A$O:function(A_n,AX0){if(AX0)switch(A_n){
case 1:return A.abj.Bgt;case 2:return A.abj.Bmg;case 3:return A.abj.BmT;case 4:return A.
abj.Bl5;case 5:return A.abj.Be3;case 6:return A.abj.BkW;case 0:return A.abj.BlS;
default:return A.jm;}else switch(A_n){case 1:return A.abj.Bgs;case 2:return A.abj.
Bmf;case 3:return A.abj.BmS;case 4:return A.abj.Bl4;case 5:return A.abj.Be2;case
6:return A.abj.BkV;case 0:return A.abj.BlR;default:return A.jm;}},A$N:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JL:function(){var d=this.Gt;var KR=this.G5;var Dl=this.Year-((
KR<=2)?1:0);var AxV=(((Dl>=0)?Dl:Dl-399)/400)|0;var Alv=Dl-(AxV*400);var Ur=(((((
153*(KR+((KR>2)?-3:9)))+2)/5)|0)+d)-1;var AnZ=(((Alv*365)+((Alv/4)|0))-((Alv/100
)|0))+Ur;var PT=((AxV*146097)+AnZ)-719468;return(((PT*86400)+(this.Ai5*3600))+(this.
Auu*60))+this.AR3;},ADL:function(E){var B;E+=62162035200;if(E<0)E=0;var UE=Math.
trunc(E/86400)|0;var AxV=(((UE>=0)?UE:UE-146096)/146097)|0;var AnZ=UE-(AxV*146097
);var Alv=((((AnZ-((AnZ/1460)|0))+((AnZ/36524)|0))-((AnZ/146096)|0))/365)|0;var Dl=
Alv+(AxV*400);var Ur=AnZ-(((365*Alv)+((Alv/4)|0))-((Alv/100)|0));var AZ9=(((5*Ur
)+2)/153)|0;var d=(Ur-((((153*AZ9)+2)/5)|0))+1;var KR=AZ9+((AZ9<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dl+((
KR<=2)?1:0);this.TE(KR);this.Lb(d);this.AmG(BL+((BL<0)?24:0));this.AmJ(P+((P<0)?
60:0));this.AmM(s+((s<0)?60:0));},Yx:function(){if(this.G5===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G5===4)||(this.G5===6))||(this.G5===9))||(this.G5===11))return 30;else return 31;
},Bh2:function(){var B;var Ur=this.Aa8()-1;var Asf=(6+this.AuE())%7;var An1=((371+
Asf)-Ur)%7;if(this.G5===12){var d=this.Gt;if((d===31)&&(Asf<3))return 0;if((d===
30)&&(Asf<2))return 0;if((d===29)&&(Asf<1))return 0;}if(An1<=3)Ur+=An1;else Ur-=(
7-An1);if(Ur<0){var d=this.Gt;var KR=this.G5;this.Year--;this.Lb(31);this.TE(12);
Ur=this.Aa8()-1;Asf=(6+this.AuE())%7;An1=((371+Asf)-Ur)%7;if(An1<=3)Ur+=An1;else
Ur-=An1;this.Year++;this.Lb(d);this.TE(KR);}return(Ur/7)|0;},Aa8:function(){var B;
var d=this.Gt;var KR=this.G5;var Dl=this.Year;var Afi=((!!!(Dl%4)&&(!!(Dl%100)||
!!!(Dl%400)))?1:0);switch(KR){case 2:d+=31;break;case 3:d+=(59+Afi);break;case 4:
d+=(90+Afi);break;case 5:d+=(120+Afi);break;case 6:d+=(151+Afi);break;case 7:d+=(
181+Afi);break;case 8:d+=(212+Afi);break;case 9:d+=(243+Afi);break;case 10:d+=(273+
Afi);break;case 11:d+=(304+Afi);break;case 12:d+=(334+Afi);break;default:;}return d;
},AuE:function(){var B;var d=this.Gt;var KR=this.G5+((this.G5>2)?-2:10);var Dl=this.
Year-((this.G5<=2)?1:0);var BK=(Dl/100)|0;Dl%=100;d+=((((((((26*KR)-2)/10)|0)+Dl
)+((Dl/4)|0))+((BK/4)|0))-(2*BK));if(d>=0)return d%7;else return(7-(-d%7))%7;},AmM:
function(E){if(E<0)E=0;if(E>59)E=59;this.AR3=E;},AmJ:function(E){if(E<0)E=0;if(E>
59)E=59;this.Auu=E;},AmG:function(E){if(E<0)E=0;if(E>23)E=23;this.Ai5=E;},Lb:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gt=E;},TE:function(E){if(E<1)E=1;if(E>12)E=12;this.
G5=E;},Format:function(Ij){var result=A.jm;var inx=0;while(!!(Ij.charCodeAt(inx)||
0))if((Ij.charCodeAt(inx)||0)===0x25){var ZK=1;inx=inx+1;if((Ij.charCodeAt(inx)||
0)===0x23){inx=inx+1;ZK=0;}switch(Ij.charCodeAt(inx)||0){case 0x64:result=result+
A.aaq(this.Gt,2*ZK,10);break;case 0x48:result=result+A.aaq(this.Ai5,2*ZK,10);break;
case 0x49:if(!(this.Ai5%12))result=result+Wg;else result=result+A.aaq(this.Ai5%12
,2*ZK,10);break;case 0x6D:result=result+A.aaq(this.G5,2*ZK,10);break;case 0x4D:result=
result+A.aaq(this.Auu,2*ZK,10);break;case 0x70:if(this.Ai5<12)result=result+A.abj.
Bdd;else result=result+A.abj.Bkl;break;case 0x53:result=result+A.aaq(this.AR3,2*
ZK,10);break;case 0x77:result=result+A.aaq(this.AuE(),ZK,10);break;case 0x79:result=
result+A.aaq(this.Year%100,2*ZK,10);break;case 0x59:result=result+A.aaq(this.Year
,4*ZK,10);break;case 0x25:result=result+Wh;break;case 0x6A:result=result+A.aaq(this.
Aa8(),3*ZK,10);break;case 0x57:result=result+A.aaq(this.Bh2(),2*ZK,10);break;case
0x61:result=result+this.A$O(this.AuE(),true);break;case 0x41:result=result+this.
A$O(this.AuE(),false);break;case 0x62:result=result+this.A$Q(this.G5,true);break;
case 0x42:result=result+this.A$Q(this.G5,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ij.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(Ab9,Ae0,BsU,Bs_,Btp,BtI){this.Year=Ab9;this.TE(Ae0);this.
Lb(BsU);this.AmG(Bs_);this.AmJ(Btp);this.AmM(BtI);return this;},Initialize:function(
Aho){this.ADL(Aho);return this;},Bem:function(Aho){if(!Aho)return A._NewObject(C.
Am7,0).Initialize(this.JL());return A._NewObject(C.Am7,0).Initialize(this.JL()-Aho.
JL());},Blv:function(Axg){if(!Axg)return this;return A._NewObject(C.Bu,0).Initialize(
this.JL()-Axg.JL());},J:function(Axg){if(!Axg)return this;return A._NewObject(C.
Bu,0).Initialize(this.JL()+Axg.JL());},_Init:function(aArg){this.__proto__=C.Bu;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.Am7={AEt:0,ACj:0,ABy:0,J9:0,JL:function(
){return(((this.J9*86400)+(this.ABy*3600))+(this.ACj*60))+this.AEt;},ADL:function(
E){var AI7=1;this.J9=Math.trunc(E/86400)|0;if(E<0){E=-E;AI7=-1;}this.ABy=AI7*(Math.
trunc(E/3600)%24|0);this.ACj=AI7*(Math.trunc(E/60)%60|0);this.AEt=AI7*(E%60|0);}
,Initialize2:function(BsV,Bs$,Btq,BtL){this.J9=BsV;this.ABy=Bs$;this.ACj=Btq;this.
AEt=BtL;return this;},Initialize:function(Aho){this.ADL(Aho);return this;},_Init:
function(aArg){this.__proto__=C.Am7;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A8f={Ar:null,O0:null,Trigger:function(BsP,AYw){var O4=A._NewObject(C.ASw,0);
O4.AsW=this;O4.Ar=BsP;this.O0.A7T(O4,AYw);},_Init:function(aArg){this.__proto__=
C.A8f;this.O0=A._GetAutoObject(C.AET);A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A8g={JF:null,Event:null,AP2:null,AsA:function(H){var B;if(
!this.Event)return;this.JF=this.Event.Ar;(B=this.AP2)?B[1].call(B[0],this):null;
this.JF=null;},BiK:function(E){if(this.Event===E)return;if(!!this.Event)A.zl([this
,this.AsA],this.Event,0);this.Event=E;if(!!this.Event)A.y_([this,this.AsA],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A8g;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AP2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BBH={Dp:0x1,Byy:0x2,BzD:0x4,BBz:0x8,Bw:0x10,H1:0x20
,BzE:0x40,BAj:0x80,Bzz:0x100,BzZ:0x200,Bzn:0x400,BAU:0x800,Bf:0x1000,BBE:0x2000,
BAF:0x4000,BAG:0x8000,Aap:0x10000,BAE:0x20000,BA6:0x40000};C.Pu={BAV:0x1,BAW:0x2
,Byu:0x4,Byv:0x8,Byw:0x10,Byt:0x20};C.Af9={None:0,BBv:1,ByQ:2,Bz4:3,BA0:4,BBw:5,
BBx:6,ByR:7,ByS:8,Bz6:9,Bz5:10,BA2:11,BA1:12};C.Atx={None:0,BBt:1,Left:2,ByO:3,Y1:
4,A2F:5,BBu:6,Right:7,ByP:8};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:
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
346};C.BAX={BBN:0x1,BBK:0x2,BBL:0x4,BBM:0x8,Bz8:0x10,BzG:0x20};
C._Init=function(){C.Ajn.__proto__=C.Cd;C.YN.__proto__=C.Cd;C.EC.__proto__=C.Cd;C.
O.__proto__=C.EC;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AO$.__proto__=
C.Event;C.Atr.__proto__=C.Event;C.Adf.__proto__=C.Event;C.Apq.__proto__=C.Event;
C.Y.__proto__=C.EC;C.CI.__proto__=C.O;C.Ds.__proto__=C.O;C.Bh.__proto__=C.YN;C.H2.
__proto__=C.EC;C.AB7.__proto__=C.Ap0;C.AB8.__proto__=C.Ap0;C.ASw.__proto__=C.Aj5;
};C._ReInit=function(){var B;if((B=C.AET._this))B._ReInit();};C.DE=function(D){var
B;if((B=C.AET._this)&&(B._cycle!=D))B._Done(C.AET._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */