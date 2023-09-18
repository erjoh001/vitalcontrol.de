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
var B$=[0,0];var BH=[0,0,0,0];var EV="The view does not belong to this group";var
GT="The dialog component is already presented";var Jt="The dialog component is actually not presented";
var IL="No fader to perform the fade-in/out operation";var OK="Trying to use the same fader twice";
var PJ="Trying to fade-in/out a group which belongs to another owner";var N1="No view to restack";
var CJ="View is not in this group";var Fn="Sibling view does not belong to the group";
var Nd="No view to remove";var OL="No view to add";var KH="View already in a group";
var OM="Recursive invalidate during active update cycle.";var Ne=[-8,-8,9,9];var
ON="No group to end the modal state.";var Ss="The group is not modal.";var T$="No group to obtain the modal state.";
var Ze="The group serves already as the \'virtual keyboard\'.";var Wb="The group is already modal.";
var IM="View is not in the same group or it is not embedded within the Outline "+
"Box";var Ua="The method SwitchToDialog() is not available in Core::VerticalList.";
var Zf="The method DismissDialog() is not available in Core::VerticalList.";var Wc=
"The method PresentDialog() is not available in Core::VerticalList.";var Zg="The method FadeGroup() is not available in Core::VerticalList.";
var Ub="The method RestackBehind() is not available in Core::VerticalList.";var Zh=
"The method RestackTop() is not available in Core::VerticalList.";var Zi="The method Restack() is not available in Core::VerticalList.";
var Uc="The method Remove() is not available in Core::VerticalList.";var Wd="The method AddBehind() is not available in Core::VerticalList.";
var QV="The method Add() is not available in Core::VerticalList.";var Zj="The Slide Touch Handler:";
var OO="is already connected with a view.";var PK="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Ud=[0,0,170,120];var Zk="The method SwitchToDialog() is not available in Core::HorizontalList.";
var We="The method DismissDialog() is not available in Core::HorizontalList.";var
Zl="The method PresentDialog() is not available in Core::HorizontalList.";var Zm=
"The method FadeGroup() is not available in Core::HorizontalList.";var Wf="The method RestackBehind() is not available in Core::HorizontalList.";
var Wg="The method RestackTop() is not available in Core::HorizontalList.";var St=
"The method Restack() is not available in Core::HorizontalList.";var Zn="The method Remove() is not available in Core::HorizontalList.";
var Zo="The method AddBehind() is not available in Core::HorizontalList.";var AbO=
"The method Add() is not available in Core::HorizontalList.";var Su=[0,0,1,1];var
AbP="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var AeN="Trying to cancel a task not belonging to this queue!";var Zp="Trying to enqueue a task twice!";
var Wh="12";var Wi="%";
C.Cd={Af:null,AG:null,Ac:null,Em:null,U:0x103,JQ:0,Pu:0x14,Asp:function(BI,Ahm){}
,A7f:function(E){if(this.JQ===E)return;this.JQ=E;if(!!this.Ac){var Aia=this.Af;var
GX=0;while(!!Aia&&(E>Aia.JQ)){Aia=Aia.Af;GX=GX+1;}Aia=this.AG;while(!!Aia&&(E<Aia.
JQ)){Aia=Aia.AG;GX=GX-1;}if(!!GX)this.Ac.Ki(this,GX);}},AV:function(E){var B;var
GX=E^this.Pu;if(!GX)return;this.Pu=E;if(!!this.Em&&!((this.U&0x400)===0x400)){this.
Ac.U=this.Ac.U|0x5000;A.ow([B=this.Ac,B.H$],this);this.Ac.Bg([0,0,(B=this.Ac.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Em&&((this.U&0x400)===0x400)){this.Em.Nv.U=this.Em.
Nv.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},Ib:function(
){var B9=this.Ac;while(!!B9){var Iq=(C.Root.isPrototypeOf(B9)?B9:null);if(!!Iq)return Iq;
B9=B9.Ac;}return null;},J_:function(CW,aClip,aOffset,Ce,aBlend){},GI:function(CK
){return null;},Xt:function(Dc,BG,N4,Ab3,Ab8,Ab7){return null;},Atd:function(Dc){
return Dc;},Atn:function(BI,MC){return B$;},Amp:function(aOffset,Ar1){},GetExtent:
function(){return BH;},C4:function(Aho,AnC){var B;if(((this.U&0x200)===0x200))Aho=
Aho&~0x400;var AZ$=(this.U&~AnC)|Aho;var AkK=AZ$^this.U;this.U=AZ$;if(!!this.Ac&&
!!(AkK&0x14)){var A$C=((this.U&0x14)===0x14);if(A$C&&!this.Ac.AY)this.Ac.A$(this
);if(!A$C&&(this.Ac.AY===this))this.Ac.A$(this.Ac.AAW(this,0x14));}if(!!this.Ac&&
!!(AkK&0x403))this.Ac.Bg(this.GetExtent());if(((!!this.Em&&!!this.Ac)&&((AZ$&0x400
)===0x400))&&((AkK&0x1)===0x1)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.
ow([B=this.Ac,B.H$],this);}if(!!this.Ac&&((AkK&0x400)===0x400)){this.Em=null;this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},_Init:function(
aArg){this.__proto__=C.Cd;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.Ajo={Et:A.vw,Ek:A.vw,Asp:function(BI,Ahm){var Ar=A._NewObject(
C.AB8,0);this.Em=null;Ar.extent=this.getExtent();Ar.A8=BI;Ar.Nv=Ahm;Ar.Ah0=this.
Ek;Ar.Ah1=this.Et;this.Em=Ar;},Atn:function(BI,MC){var B;var EM=this.Pu;var Ar=(
C.AB8.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var
x2=Ar.extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=x2-x1;
var BL=y2-y1;var tmp;if(!MC){var Ny=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];
y1=y1-Ar.A8[1];if(Ny[0]!==J0[0]){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);
var P3=((EM&0x1)===0x1);if(!HL&&(P3||!HM))x1=((x1*J0[0])/Ny[0])|0;if(!HM&&(P3||!
HL)){x2=x2-Ar.A8[0];x2=((x2*J0[0])/Ny[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=
x1+BI[0];x2=x2+BI[2];if(!P3){if(HL&&!HM)x2=x1+BU;else if(!HL&&HM)x1=x2-BU;else{x1=
x1+((((x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];
}if(Ny[1]!==J0[1]){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((
EM&0x2)===0x2);if(!HN&&(P4||!HK))y1=((y1*J0[1])/Ny[1])|0;if(!HK&&(P4||!HN)){y2=y2-
Ar.A8[1];y2=((y2*J0[1])/Ny[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=
y2+BI[3];if(!P4){if(HN&&!HK)y2=y1+BL;else if(!HN&&HK)y1=y2-BL;else{y1=y1+((((y2-
y1)-BL)/2)|0);y2=y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(
MC){case 3:{x1=BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=
BI[1];y2=y1+BL;}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MC===3)||(MC===
4)){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);
if(P4){y1=BI[1];y2=BI[3];}else if(HN&&!HK){y1=BI[1];y2=y1+BL;}else if(HK&&!HN){y2=
BI[3];y1=y2-BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MC===1)||(
MC===2)){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1)===0x1);
if(P3){x1=BI[0];x2=BI[2];}else if(HL&&!HM){x1=BI[0];x2=x1+BU;}else if(HM&&!HL){x2=
BI[2];x1=x2-BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(
x1>=x2)||(y1>=y2);BU=x2-x1;BL=y2-y1;if(Ar.Ah1[0]<Ar.Ah0[0]){tmp=x1;x1=x2-1;x2=tmp-
1;}if(Ar.Ah1[1]<Ar.Ah0[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-
y1)===1)y2=y1;if(((this.U&0x100)===0x100)){this.Ek=[x1,y1];this.Et=[x2,y2];}else{
this.D5([x1,y1]);this.DN([x2,y2]);this.Em=Ar;}return[BU,BL];},Amp:function(aOffset
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
aArg);this.__proto__=C.Ajo;},_className:"Core::LineView"};C.YP={Kh:A.vw,Mv:A.vw,
Et:A.vw,Ek:A.vw,Asp:function(BI,Ahm){var Ar=A._NewObject(C.AB9,0);this.Em=null;Ar.
extent=this.GetExtent();Ar.A8=BI;Ar.Nv=Ahm;Ar.Ah0=this.Ek;Ar.Ah1=this.Et;Ar.AyZ=
this.Mv;Ar.Ay0=this.Kh;this.Em=Ar;},Atn:function(BI,MC){var B;var EM=this.Pu;var
Ar=(C.AB9.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[
1];var x2=Ar.extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=
x2-x1;var BL=y2-y1;if(!MC){var Ny=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];y1=
y1-Ar.A8[1];if(Ny[0]!==J0[0]){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var
P3=((EM&0x1)===0x1);if(!HL&&(P3||!HM))x1=((x1*J0[0])/Ny[0])|0;if(!HM&&(P3||!HL)){
x2=x2-Ar.A8[0];x2=((x2*J0[0])/Ny[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=x1+BI[
0];x2=x2+BI[2];if(!P3){if(HL&&!HM)x2=x1+BU;else if(!HL&&HM)x1=x2-BU;else{x1=x1+((((
x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];}if(Ny[
1]!==J0[1]){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===
0x2);if(!HN&&(P4||!HK))y1=((y1*J0[1])/Ny[1])|0;if(!HK&&(P4||!HN)){y2=y2-Ar.A8[1];
y2=((y2*J0[1])/Ny[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];
if(!P4){if(HN&&!HK)y2=y1+BL;else if(!HN&&HK)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2
)|0);y2=y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MC){case
3:{x1=BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=BI[1];y2=
y1+BL;}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MC===3)||(MC===4)){var
HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);if(P4){y1=
BI[1];y2=BI[3];}else if(HN&&!HK){y1=BI[1];y2=y1+BL;}else if(HK&&!HN){y2=BI[3];y1=
y2-BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MC===1)||(MC===2)
){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1)===0x1);if(P3){
x1=BI[0];x2=BI[2];}else if(HL&&!HM){x1=BI[0];x2=x1+BU;}else if(HM&&!HL){x2=BI[2];
x1=x2-BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(x1>=x2
)||(y1>=y2);BU=(x2-x1)-1;BL=(y2-y1)-1;var AhG=Ar.extent[0];var AhI=Ar.extent[1];
var Afd=(Ar.extent[2]-AhG)-1;var Afc=(Ar.extent[3]-AhI)-1;if(!Afd)Afd=1;if(!Afc)
Afc=1;if(((this.U&0x100)===0x100)){this.Ek=[x1+((((Ar.Ah0[0]-AhG)*BU)/Afd)|0),y1+((((
Ar.Ah0[1]-AhI)*BL)/Afc)|0)];this.Et=[x1+((((Ar.Ah1[0]-AhG)*BU)/Afd)|0),y1+((((Ar.
Ah1[1]-AhI)*BL)/Afc)|0)];this.Mv=[x1+((((Ar.AyZ[0]-AhG)*BU)/Afd)|0),y1+((((Ar.AyZ[
1]-AhI)*BL)/Afc)|0)];this.Kh=[x1+((((Ar.Ay0[0]-AhG)*BU)/Afd)|0),y1+((((Ar.Ay0[1]-
AhI)*BL)/Afc)|0)];}else{this.D5([x1+((((Ar.Ah0[0]-AhG)*BU)/Afd)|0),y1+((((Ar.Ah0[
1]-AhI)*BL)/Afc)|0)]);this.DN([x1+((((Ar.Ah1[0]-AhG)*BU)/Afd)|0),y1+((((Ar.Ah1[1
]-AhI)*BL)/Afc)|0)]);this.KA([x1+((((Ar.AyZ[0]-AhG)*BU)/Afd)|0),y1+((((Ar.AyZ[1]-
AhI)*BL)/Afc)|0)]);this.KB([x1+((((Ar.Ay0[0]-AhG)*BU)/Afd)|0),y1+((((Ar.Ay0[1]-AhI
)*BL)/Afc)|0)]);this.Em=Ar;}return[BU+1,BL+1];},Amp:function(aOffset,Ar1){if(Ar1
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
this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},AOU:function(KK){var Ho=
A.aan(4,A.vw,null);var P=0;var H9=3;var AZJ=false;var AZK=false;Ho.Set(0,this.Ek
);Ho.Set(1,this.Et);Ho.Set(2,this.Mv);Ho.Set(3,this.Kh);while(P<4){var Bc8=Ho.Get(
P)[0];var AJo=Ho.Get(P)[1];var Byn=Ho.Get(H9)[0];var A1J=Ho.Get(H9)[1];if(((AJo>
KK[1])!==(A1J>KK[1]))||((AJo<KK[1])!==(A1J<KK[1]))){var FY=((((Byn-Bc8)*(KK[1]-AJo
))/(A1J-AJo))|0)+Bc8;if(KK[0]>FY)AZJ=!AZJ;if(KK[0]<FY)AZK=!AZK;}H9=P;P=P+1;}return AZJ||
AZK;},Bfz:function(){return((((this.Ek[0]===this.Kh[0])&&(this.Et[0]===this.Mv[0
]))&&(this.Ek[1]===this.Et[1]))&&(this.Mv[1]===this.Kh[1]))||((((this.Ek[0]===this.
Et[0])&&(this.Mv[0]===this.Kh[0]))&&(this.Ek[1]===this.Kh[1]))&&(this.Et[1]===this.
Mv[1]));},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.YP;},
_className:"Core::QuadView"};C.EC={M:A.vx,Asp:function(BI,Ahm){var Ar=A._NewObject(
C.Ap0,0);Ar.extent=this.M;Ar.A8=BI;Ar.Nv=Ahm;this.Em=Ar;},Atn:function(BI,MC){var
B;var EM=this.Pu;var Ar=this.Em;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=x2-x1;var BL=
y2-y1;if(!MC){var Ny=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];y1=y1-Ar.A8[1];
if(Ny[0]!==J0[0]){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1
)===0x1);if(!HL&&(P3||!HM))x1=((x1*J0[0])/Ny[0])|0;if(!HM&&(P3||!HL)){x2=x2-Ar.A8[
0];x2=((x2*J0[0])/Ny[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[
2];if(!P3){if(HL&&!HM)x2=x1+BU;else if(!HL&&HM)x1=x2-BU;else{x1=x1+((((x2-x1)-BU
)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];}if(Ny[1]!==J0[1
]){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);if(
!HN&&(P4||!HK))y1=((y1*J0[1])/Ny[1])|0;if(!HK&&(P4||!HN)){y2=y2-Ar.A8[1];y2=((y2
*J0[1])/Ny[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];if(!P4
){if(HN&&!HK)y2=y1+BL;else if(!HN&&HK)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MC){case 3:{x1=
BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=BI[1];y2=y1+BL;
}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MC===3)||(MC===4)){var HN=((
EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);if(P4){y1=BI[
1];y2=BI[3];}else if(HN&&!HK){y1=BI[1];y2=y1+BL;}else if(HK&&!HN){y2=BI[3];y1=y2-
BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MC===1)||(MC===2)){var
HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1)===0x1);if(P3){x1=BI[
0];x2=BI[2];}else if(HL&&!HM){x1=BI[0];x2=x1+BU;}else if(HM&&!HL){x2=BI[2];x1=x2-
BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.Em=Ar;}return[x2-x1,y2-y1];},Amp:function(aOffset,Ar1){if(Ar1)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Ac&&((this.U&0x1)===0x1
))this.Ac.Bg(this.M);this.Em=null;this.M=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000
)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}
,_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.EC;},_className:
"Core::RectView"};C.O={B8:null,B5:null,AIt:null,HP:null,Im:null,WE:null,AoJ:null
,AY:null,GN:255,Init:function(aArg){this.Am();},J_:function(CW,aClip,aOffset,Ce,
aBlend){var B;Ce=((Ce+1)*this.GN)>>8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.
HP||(CW.Dj===this))this.A$t(CW,aClip,A.aak(aOffset,this.M.slice(0,2)),Ce,aBlend);
else{var BK=255|(255<<8)|(255<<16)|((Ce&0xFF)<<24);this.HP.Update();CW.A22(aClip
,this.HP,0,A.aam(this.M,aOffset),B$,BK,BK,BK,BK,aBlend);}},Xt:function(Dc,BG,N4,
Ab3,Ab8,Ab7){var B;var W=this.B5;var Aoa=null;var AD=BH;var J1=null;var AZ3=!!this.
WE&&(!!this.WE.FG||!!this.WE.B8);if(((B=A.kz(Dc,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;Dc=A.aal(Dc,this.M.slice(0,2));if(!!Ab8){W=Ab8;while(!!W&&(W.Ac!==this
))W=W.Ac;}while(!!W){if(((W.U&0x400)===0x400)&&!J1){J1=W.AG;while(!!J1&&!((J1.U&
0x200)===0x200))J1=J1.AG;if(!!J1)AD=A.kz(Dc,J1.GetExtent());else AD=BH;}if(J1===
W){J1=null;AD=BH;}if((((((W.U&0x8)===0x8)&&((W.U&0x10)===0x10))&&!((W.U&0x40000)===
0x40000))&&!((W.U&0x20000)===0x20000))&&(!((W.U&0x10000)===0x10000)||((this.Im.Dj===
W)&&!AZ3))){var extent=W.GetExtent();var AHW=Ab3;var AnW=null;if(AHW===W)AHW=null;
if(((W.U&0x400)===0x400)){if(!(((B=A.kz(extent,AD))[0]>=B[2])||(B[1]>=B[3])))AnW=
W.Xt(AD,BG,N4,AHW,Ab8,Ab7);}else if(!(((B=A.kz(extent,Dc))[0]>=B[2])||(B[1]>=B[3
]))||(Ab3===W))AnW=W.Xt(Dc,BG,N4,AHW,Ab8,Ab7);W=W.AG;if(!!AnW){if(!Aoa||((AnW.Atx<
Aoa.Atx)&&(AnW.Atx>=0)))Aoa=AnW;if(!AnW.Atx)W=null;}}else W=W.AG;Ab8=null;}return Aoa;
},Atd:function(Dc){var B;var F;var W=this.B8;var MF=BH;var AyT=true;var result=(
Dc=F=A.aal(Dc,this.M.slice(0,2)),F);while(!!W){if(((W.U&0x200)===0x200)){var AyS=(
C.Y.isPrototypeOf(W)?W:null);MF=A.kz(Dc,AyS.M);AyT=((AyS.U&0x1)===0x1);}if(((W.U&
0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyT){var AD=A.kz(W.GetExtent(),MF);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atd(AD));}}else{var AD=A.
kz(W.GetExtent(),Dc);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atd(
AD));}}W=W.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},C4:function(
Aho,AnC){var B;var ZP=this.U;C.EC.C4.call(this,Aho,AnC);var AkK=this.U^ZP;if(!!this.
AY&&((AkK&0x40)===0x40)){if(((this.U&0x40)===0x40))this.AY.C4(0x40,0x0);else this.
AY.C4(0x0,0x40);}if(!!this.Im&&((AkK&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((
this.Im.Dj.U&0x14)===0x14))this.Im.Dj.C4(0x40,0x0);else this.Im.Dj.C4(0x0,0x40);
}if(!!AkK){this.U=this.U|0x8000;A.ow([this,this.H$],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var Ak7=[(B=this.M)[2]-B[0],B[3]-B[1]];var AIA=[E[2]-E[
0],E[3]-E[1]];var AoQ=!A.z8(Ak7,AIA);if(AoQ&&!!this.HP){this.HP.Aqt(AIA);A.vv(this
,0);A.vv(this.HP,0);}C.EC.G.call(this,E);if((AoQ&&(Ak7[0]>0))&&(Ak7[1]>0)){var A8=[
].concat(B$,Ak7);var W=this.B8;while(!!W){if((!W.Em&&(W.Pu!==0x14))&&!((W.U&0x400
)===0x400))W.Asp(A8,null);W=W.Af;}}if(AoQ){this.U=this.U|0x5000;A.ow([this,this.
H$],this);}},A0Z:function(CK){var Bam=(C.KeyEvent.isPrototypeOf(CK)?CK:null);var
DZ=this.AIt;if(!Bam)return null;while(!!DZ&&(!DZ.Bw||!DZ.GI(Bam)))DZ=DZ.Af;return DZ;
},Bx9:function(H){if(!!this.HP){this.HP.Dj=this;var AD=A.aal(this.Atd(A.aam(this.
HP.Qh,this.M.slice(0,2))),this.M.slice(0,2));this.HP.AtS(AD,AD,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A$t(this.HP,AD,B$,255,true);this.HP.Dj=null;}
},A$t:function(CW,aClip,aOffset,Ce,aBlend){var B;var W=this.B8;var MF=BH;var AyT=
true;this.Bew(CW,aClip,aOffset,Ce,aBlend);while(!!W){if(((W.U&0x200)===0x200)){var
AyS=(C.Y.isPrototypeOf(W)?W:null);MF=A.kz(aClip,A.aam(AyS.M,aOffset));AyT=((AyS.
U&0x1)===0x1);}if(((W.U&0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyT){var AD=A.
kz(A.aam(W.GetExtent(),aOffset),MF);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW
,AD,aOffset,Ce,aBlend);}}else{var AD=A.kz(A.aam(W.GetExtent(),aOffset),aClip);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW,AD,aOffset,Ce,aBlend);}}W=W.Af;}this.Bez(
CW,aClip,aOffset,Ce,aBlend);},Bb$:function(){var B;var AZz=((this.U&0x1000)===0x1000
);var AhN=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var ZD=false;var Aco=BH;var KM=BH;var
ZE=B$;var Asl=0;var Asm=0;var Ask=0;var PX=0;var W=this.B5;var J1=null;var AkZ=null;
while(!!W){if(((W.U&0x800)===0x800)){ZD=true;W.U=W.U&~0x800;}if(ZD&&((W.U&0x200)===
0x200)){ZD=false;if(!!(C.Y.isPrototypeOf(W)?W:null).Af9)W.U=W.U|0x1000;}W=W.AG;}
ZD=false;W=this.B8;if(AZz){this.U=this.U&~0x1000;AZz=!((AhN[0]>=AhN[2])||(AhN[1]>=
AhN[3]));}this.U=this.U|0x2000;while(!!W){if(!AkZ&&(Ask!==PX)){var AcL=W;var AIW=
0;var Azc=Aco[2]-Aco[0];var Axy=Aco[3]-Aco[1];var AHK=0;var Ao2=B$;do if(((AcL.U&
0x200)===0x200))AcL=null;else if(((AcL.U&0x401)===0x401)){Ao2=[(B=AcL.GetExtent(
))[2]-B[0],B[3]-B[1]];if((PX===3)||(PX===4))Azc=Azc-Ao2[0];if((PX===1)||(PX===2)
)Axy=Axy-Ao2[1];if(!AkZ||((Azc>=0)&&(Axy>=0))){AkZ=AcL;AcL=AcL.Af;if((PX===3)||(
PX===4)){Azc=Azc-Asl;if(Ao2[1]>AIW)AIW=Ao2[1];}if((PX===1)||(PX===2)){Axy=Axy-Asm;
if(Ao2[0]>AHK)AHK=Ao2[0];}}else AcL=null;}else AcL=AcL.Af;while(!!AcL);if(!AkZ)AkZ=
J1;KM=Aco;switch(Ask){case 9:case 11:KM=[].concat(KM.slice(0,3),KM[1]+AIW);break;
case 10:case 12:KM=A.aaS(KM,KM[3]-AIW);break;case 5:case 7:KM=A.aaQ(KM,KM[0]+AHK
);break;case 6:case 8:KM=[].concat(KM[2]-AHK,KM.slice(1,4));break;default:;}}if(((
W.U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nv!==J1))W.Em=null;if((!W.Em&&ZD)&&((W.Pu!==
0x14)||!!PX))W.Asp(KM,J1);}if(!!W.Em){if(AZz&&!((W.U&0x400)===0x400))W.Atn(AhN,0
);if(ZD&&((W.U&0x400)===0x400)){var CZ=W.Atn(A.aam(KM,ZE),PX);if(((W.U&0x1)===0x1
)){var Bo=B$;switch(PX){case 3:Bo=[CZ[0]+Asl,Bo[1]];break;case 4:Bo=[-CZ[0]-Asl,
Bo[1]];break;case 1:Bo=[Bo[0],CZ[1]+Asm];break;case 2:Bo=[Bo[0],-CZ[1]-Asm];break;
default:;}ZE=A.aak(ZE,Bo);}}}if(((W.U&0x200)===0x200)){if(ZD)A.ow(J1.Ej,J1);ZD=((
W.U&0x1000)===0x1000);J1=(C.Y.isPrototypeOf(W)?W:null);if(ZD){W.U=W.U&~0x1000;Ask=
J1.Af9;PX=Ask;Aco=A.aam(J1.M,J1.Bp);KM=Aco;ZE=B$;Asl=J1.Space+J1.ASj;Asm=J1.Space;
ZD=!((Aco[0]>=Aco[2])||(Aco[1]>=Aco[3]));AkZ=null;switch(Ask){case 9:case 10:PX=
3;break;case 11:case 12:PX=4;break;case 5:case 6:PX=1;break;case 7:case 8:PX=2;break;
default:;}}if(ZD)this.Bg(J1.M);}if(W===AkZ){switch(Ask){case 9:case 11:ZE=[0,(ZE[
1]+(KM[3]-KM[1]))+Asm];break;case 10:case 12:ZE=[0,(ZE[1]-(KM[3]-KM[1]))-Asm];break;
case 5:case 7:ZE=[(ZE[0]+(KM[2]-KM[0]))+Asl,0];break;case 6:case 8:ZE=[(ZE[0]-(KM[
2]-KM[0]))-Asl,0];break;default:;}AkZ=null;}W=W.Af;}if(ZD)A.ow(J1.Ej,J1);this.U=
this.U&~0x2000;this.Bf([AhN[2]-AhN[0],AhN[3]-AhN[1]]);},H$:function(H){var B;var
Byg=((this.U&0x1000)===0x1000);if(((this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;
this.Bb$();}if(((this.U&0x8000)===0x8000)||Byg){this.U=this.U&~0x8000;this.Ag(this.
U);}},A$:function(E){var B;if(!!E&&(E.Ac!==this))throw new Error(EV);if(!!E&&!((
E.U&0x14)===0x14))E=null;if(!!E&&((E.U&0x10000)===0x10000))E=null;if(E===this.AY
)return;if(!!this.AY)this.AY.C4(0x0,0x60);this.AY=E;if(!!E){if(((this.U&0x40)===
0x40))E.C4(0x60,0x0);else E.C4(0x20,0x0);}},A9M:function(An){this.A$(An);},AP6:function(
){return!!this.HP;},Aqn:function(E){var B;if(!!this.HP===E)return;if(E){this.HP=
A._NewObject(A.Graphics.Canvas,0);this.HP.Aqt([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
HP.ACy=[this,this.Bx9];}else{this.HP.ACy=null;this.HP.Aqt(B$);this.HP=null;}if(!
!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.vv(this,0);},A5C:function(){
var B;return((this.U&0x10)===0x10);},Ap:function(E){if(E)this.C4(0x10,0x0);else this.
C4(0x0,0x10);},DD:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GN)return;
this.GN=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},AXB:function(An
){this.DD(An);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400);}
,Bid:function(E){if(E)this.C4(0x2,0x0);else this.C4(0x0,0x2);},E$:function(){var
B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(
0x0,0x1);},Bez:function(CW,aClip,aOffset,Ce,aBlend){},Bew:function(CW,aClip,aOffset
,Ce,aBlend){},GetMinimalSize:function(){return B$;},ASq:function(Ii,N3,Wo,SA,SB,
Ahn,OT,Q2,Lm,Lk,Ll){var B;if(!this.Im){this.AjT(Ii,N3,Wo,SA,SB,null,null,Lm,Lk,Ll
);return;}var Ak6=this.Im;var KT=Ak6.Af;if(((Ii.U&0x10000)===0x10000)&&(this.Im.
Dj!==Ii))throw new Error(GT);var Acv=A._NewObject(C.ALH,0);var Q8=Ak6.Q8;var Rf=
null;var L9=null;if(!!KT){Rf=KT.Rf;L9=KT.L9;}if(!!KT&&!!Ak6.AoI)Rf=Ak6.AoI;if(!!
KT&&!!OT)L9=OT;if(!!Ahn)Q8=Ahn;if(!N3)N3=A._GetAutoObject(A.abm.AvX);if(!Wo)Wo=N3;
if(!SB)SB=SA;if(!SA)SA=SB;Acv.Q8=Wo;Acv.L9=SA;Acv.Rf=SB;Acv.AoI=Q2;Acv.Dj=Ii;Acv.
Af=this.Im.Af;this.Im.Af=null;this.Im=Acv;if(this.AY===Ii)this.A$(null);Ak6.Dj.C4(
0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ii.U&0x4)===0x4))Ii.C4(0x10040,0x0);else
Ii.C4(0x10000,0x0);if(!!L9){this.NH(KT.Dj,L9.Adc(),null,null,Ll);this.NH(Ak6.Dj,
Q8.RE(),null,null,true);this.NH(Acv.Dj,N3.RF(),Lm,Lk,true);}else if(!!Rf){this.NH(
KT.Dj,Rf.Add(),null,null,Ll);this.NH(Ak6.Dj,Q8.RE(),null,null,true);this.NH(Acv.
Dj,N3.RF(),Lm,Lk,true);}else if(!!Q8){this.NH(Ak6.Dj,Q8.RE(),null,null,Ll);this.
NH(Acv.Dj,N3.RF(),Lm,Lk,true);}else this.NH(Acv.Dj,N3.RF(),Lm,Lk,Ll);},Apo:function(
Ii,Ahn,OT,Q2,Lm,Lk,Ll){var B;if(!this.Im)return;if(!Ii)return;var Ko=this.Im;var
KT=this.Im.Af;var AsG=null;while((!!Ko&&(Ko.Dj!==Ii))&&!!Ko.Af){AsG=Ko;Ko=KT;KT=
Ko.Af;}if(!Ko||(Ko.Dj!==Ii))throw new Error(Jt);if(!AsG){this.Im=KT;Ko.Af=null;}
else{AsG.Af=KT;Ko.Af=null;}Ko.Dj.C4(0x0,0x10040);if(((((this.U&0x40)===0x40)&&!!
KT)&&!AsG)&&((KT.Dj.U&0x4)===0x4))KT.Dj.C4(0x40,0x0);var Q8=Ko.Q8;var Rf=null;var
L9=null;if(!!KT)Rf=KT.Rf;if(!!KT&&!!Ko.AoI)Rf=Ko.AoI;if(!!KT&&!!Q2)Rf=Q2;if(!!AsG&&
!!KT)L9=KT.L9;if((!!AsG&&!!KT)&&!!OT)L9=OT;if(!!Ahn)Q8=Ahn;if(!!L9){this.NH(KT.Dj
,L9.Adc(),null,null,Ll);this.NH(Ko.Dj,Q8.RE(),Lm,Lk,true);}else if(!!Rf){this.NH(
KT.Dj,Rf.Add(),null,null,Ll);this.NH(Ko.Dj,Q8.RE(),Lm,Lk,true);}else this.NH(Ko.
Dj,Q8.RE(),Lm,Lk,Ll);},AjT:function(Ii,N3,Wo,SA,SB,OT,Q2,Lm,Lk,Ll){var B;if(!Ii)
return;if(!!this.Im&&(this.Im.Dj===Ii)){this.ASq(Ii,N3,Wo,SA,SB,null,OT,Q2,Lm,Lk
,Ll);return;}if(((Ii.U&0x10000)===0x10000))throw new Error(GT);var Ko=A._NewObject(
C.ALH,0);if(!!this.Im&&!this.Im.L9){if(!Q2)Q2=OT;if(!OT)OT=Q2;}var L9=null;if(!!
this.Im)L9=this.Im.L9;if(!!this.Im&&!!OT)L9=OT;if(!N3)N3=A._GetAutoObject(A.abm.
AvX);if(!Wo)Wo=N3;if(!SB)SB=SA;if(!SA)SA=SB;Ko.Q8=Wo;Ko.L9=SA;Ko.Rf=SB;Ko.AoI=Q2;
if(this.AY===Ii)this.A$(null);if(!!this.Im)this.Im.Dj.C4(0x0,0x40);if(((this.U&0x40
)===0x40)&&((Ii.U&0x4)===0x4))Ii.C4(0x10040,0x0);else Ii.C4(0x10000,0x0);Ko.Dj=Ii;
Ko.Af=this.Im;this.Im=Ko;if(!!L9){this.NH(this.Im.Af.Dj,L9.Adc(),null,null,Ll);this.
NH(Ii,N3.RF(),Lm,Lk,true);}else this.NH(Ii,N3.RF(),Lm,Lk,Ll);},A3_:function(Ae){
var B;return(B=Ae)&&((this.U&B)===B);},A4K:function(KK){var tmp=this;while(!!tmp
){KK=A.aaj(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},Bfu:function(KK){var tmp=
this;while(!!tmp){KK=A.aak(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},DispatchEvent:
function(CK){var B;var W=this.AY;var B9=(C.O.isPrototypeOf(W)?W:null);var Gm=null;
var AZ3=!!this.WE&&(!!this.WE.FG||!!this.WE.B8);if(!!W&&((((W.U&0x10000)===0x10000
)||((W.U&0x40000)===0x40000))||((W.U&0x20000)===0x20000))){W=null;B9=null;}if(!!
this.Im&&!AZ3)Gm=this.Im.Dj.DispatchEvent(CK);if(!Gm&&!!B9)Gm=B9.DispatchEvent(CK
);else if(!Gm&&!!W)Gm=W.GI(CK);if(!Gm)Gm=this.GI(CK);if(!Gm)Gm=this.A0Z(CK);return Gm;
},BroadcastEventAtPosition:function(CK,IN,aFilter){var B;var W=this.B5;var Gm=null;
while(!!W&&!Gm){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&A.vt(W.GetExtent(),
IN)){var B9=(C.O.isPrototypeOf(W)?W:null);if(!!B9)Gm=B9.BroadcastEventAtPosition(
CK,A.aaj(IN,B9.M.slice(0,2)),aFilter);else Gm=W.GI(CK);}W=W.AG;}if(!Gm)Gm=this.GI(
CK);return Gm;},BroadcastEvent:function(CK,aFilter){var B;var W=this.B5;var Gm=null;
while(!!W&&!Gm){if(!aFilter||((B=aFilter)&&((W.U&B)===B))){var B9=(C.O.isPrototypeOf(
W)?W:null);if(!!B9)Gm=B9.BroadcastEvent(CK,aFilter);else Gm=W.GI(CK);}W=W.AG;}if(
!Gm)Gm=this.GI(CK);if(!Gm)Gm=this.A0Z(CK);return Gm;},Bf:function(aSize){},Ag:function(
Ae){},BfL:function(){this.U=this.U|0x4000;A.ow([this,this.H$],this);},Am:function(
){this.U=this.U|0x8000;A.ow([this,this.H$],this);},Bg:function(Dc){var B;var B9=
this;while(!!B9&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))){var ZB=B9.HP;if(!B9.Ac&&(B9!==
this)){B9.Bg(Dc);return;}if(!!ZB){var Bv4=ZB.Qh;ZB.Qh=A.vS(ZB.Qh,Dc);if(!A.z9(Bv4
,ZB.Qh)){A.vv(B9,0);A.vv(ZB,0);}}if(!((B9.U&0x1)===0x1))return;Dc=A.kz(A.aam(Dc,
B9.M.slice(0,2)),B9.M);B9=B9.Ac;}},RO:function(Ah,GD,aFilter){var B;if(!Ah||(Ah.
Ac!==this))return null;var Aft=A.zT(Ah.GetExtent());var W=Ah;var AYL=null;var A_7=
0;var IS=0x10000;var AIS;if(((aFilter&0x10000)===0x10000))IS=0x0;var top=((GD===
4)||(GD===1))||(GD===6);var bottom=((GD===5)||(GD===3))||(GD===8);var left=((GD===
2)||(GD===1))||(GD===3);var right=((GD===7)||(GD===6))||(GD===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!W){W=W.AG;if(!W)W=this.B5;if(W===Ah)W=null;
if((!!W&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IS||!((B=IS)&&((W.U&B)===B
))))for(AIS=0;AIS<2;AIS++){var AM=W.GetExtent();var s=[AM[2]-AM[0],AM[3]-AM[1]];
if(!!!AIS){if((left&&(s[0]>s[1]))&&(AM[2]<Aft[0]))AM=[].concat(AM[2]-s[1],AM.slice(
1,4));if((right&&(s[0]>s[1]))&&(AM[0]>Aft[0]))AM=A.aaQ(AM,AM[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AM[3]<Aft[1]))AM=A.aaS(AM,AM[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AM[
1]>Aft[1]))AM=[].concat(AM.slice(0,3),AM[1]+s[0]);}var Bo=A.aaj(A.zT(AM),Aft);var
Q4=Bo;if(Q4[0]<0)Q4=[-Q4[0],Q4[1]];if(Q4[1]<0)Q4=[Q4[0],-Q4[1]];if(((((!left||(Bo[
0]<=-Q4[1]))&&(!right||(Bo[0]>=Q4[1])))&&(!top||(Bo[1]<=-Q4[0])))&&(!bottom||(Bo[
1]>=Q4[0])))&&((Q4[0]>0)||(Q4[1]>0))){var Q_=Bo[0];var Q$=Bo[1];var Jc=Math.sqrt((
Q_*Q_)+(Q$*Q$));var AIr=0;if(!left&&!right)AIr=Jc/Q4[1];if(!top&&!bottom)AIr=Jc/
Q4[0];Jc=(Jc*AIr)*AIr;if((Jc<A_7)||!AYL){A_7=Jc;AYL=W;}}}}return AYL;},Apu:function(
Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B5;var IS=0x10000;
if(((aFilter&0x10000)===0x10000))IS=0x0;if(!!Ah)W=Ah.AG;while(!!W){if((!aFilter||((
B=aFilter)&&((W.U&B)===B)))&&(!IS||!((B=IS)&&((W.U&B)===B))))return W;W=W.AG;}return null;
},U9:function(Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B8;
var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;if(!!Ah)W=Ah.Af;while(!!W
){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&(!IS||!((B=IS)&&((W.U&B)===B))))return W;
W=W.Af;}return null;},AAW:function(Ah,aFilter){var B;if(!Ah||(Ah.Ac!==this))return null;
var Ak4=Ah.Af;var Alg=Ah.AG;var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;
while(!!Ak4||!!Alg){if((!!Ak4&&(!aFilter||((B=aFilter)&&((Ak4.U&B)===B))))&&(!IS||
!((B=IS)&&((Ak4.U&B)===B))))return Ak4;if((!!Alg&&(!aFilter||((B=aFilter)&&((Alg.
U&B)===B))))&&(!IS||!((B=IS)&&((Alg.U&B)===B))))return Alg;if(!!Ak4)Ak4=Ak4.Af;if(
!!Alg)Alg=Alg.AG;}return null;},C_:function(aFilter){var B;var W=this.B8;var AD=
BH;var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;while(!!W){if((!((W.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IS||!((B=IS)&&((W.
U&B)===B))))AD=A.vS(AD,W.GetExtent());W=W.Af;}return AD;},NH:function(Km,FE,Lm,Lk
,Ll){var B;if(!Km)return;if(!FE)throw new Error(IL);if((!!FE.O||!!FE.Ac)||!!FE.O4
)throw new Error(OK);if(!!Km.Ac&&(Km.Ac!==this))throw new Error(PJ);if(!this.WE)
this.WE=A._NewObject(C.ASv,0);FE.Ac=this;FE.O=Km;FE.AID=Lk;FE.A0n=Lm;if(!!Km.AoJ
)Km.AoJ.O4.BkO(Km.AoJ);Km.AoJ=FE;Km.U=Km.U|0x20000;if((Ll&&!!this.WE.B5)&&!this.
WE.B5.AOR())(A.abm.AAR.isPrototypeOf(B=this.WE.B5)?B:null).A11(FE);else{var O4=A.
_NewObject(A.abm.AAR,0);O4.A11(FE);this.WE.A7T(O4,false);}},AgS:function(Ah,JW){
var B;if(!Ah)throw new Error(N1);if(Ah.Ac!==this)throw new Error(CJ);if(!!JW&&(JW.
Ac!==this))throw new Error(Fn);if(Ah.Af===JW)return;if(((Ah.U&0x401)===0x401)){if(
!!Ah.AG&&!!Ah.Em)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([
this,this.H$],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;
Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(!!Ah.Af)Ah.Af.
AG=Ah.AG;else this.B5=Ah.AG;if(!!Ah.AG)Ah.AG.Af=Ah.Af;else this.B8=Ah.Af;var Gl=
null;var Ik=this.B5;var Lx=Ah.JQ;if(!!JW){Gl=JW;Ik=JW.AG;}if(!!Gl&&(Lx>Gl.JQ))Lx=
Gl.JQ;if(!!Ik&&(Lx<Ik.JQ))Lx=Ik.JQ;if(Lx!==Ah.JQ){Ah.Ac=null;Ah.A7f(Lx);Ah.Ac=this;
}if(!JW){if(!!this.B5)this.B5.Af=Ah;Ah.AG=this.B5;Ah.Af=null;this.B5=Ah;}else{Ah.
Af=JW;Ah.AG=JW.AG;JW.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}if(this.B8===JW)this.B8=Ah;if(((
Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());},QI:function(Ah){var B;if(!Ah)throw new
Error(N1);if(Ah.Ac!==this)throw new Error(CJ);if(!Ah.Af)return;var Ik=this.B5;var
Lx=Ah.JQ;while(!!Ik&&(Ik.JQ>Lx))Ik=Ik.AG;if(((Ik===Ah)||!Ik)||(Ik.Af===Ah))return;
if(((Ah.U&0x401)===0x401)){if(!!Ah.AG&&!!Ah.Em)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;
this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(((Ah.U&0x200)===0x200)){if(!!
Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this);}if(!
!Ah.AG)Ah.AG.Af=Ah.Af;else this.B8=Ah.Af;Ah.Af.AG=Ah.AG;Ah.AG=Ik;Ah.Af=Ik.Af;Ik.
Af=Ah;if(!!Ah.Af)Ah.Af.AG=Ah;else this.B5=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent(
));},Ki:function(Ah,PN){var B;if(!Ah)throw new Error(N1);if(Ah.Ac!==this)throw new
Error(CJ);var Ik=Ah;var Gl=Ah;var Lx=Ah.JQ;while(((PN>0)&&!!Ik.Af)&&(Ik.Af.JQ<=Lx
)){Ik=Ik.Af;PN=PN-1;}while(((PN<0)&&!!Gl.AG)&&(Gl.AG.JQ>=Lx)){Gl=Gl.AG;PN=PN+1;}
if((Ik===Ah)&&(Gl===Ah))return;if(((Ah.U&0x401)===0x401)){if(!!Ah.AG&&!!Ah.Em)Ah.
AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this
);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.
U=this.U|0x4000;A.ow([this,this.H$],this);}if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)
Ah.Af.AG=Ah.AG;if(this.B8===Ah)this.B8=Ah.Af;if(this.B5===Ah)this.B5=Ah.AG;if(Ik
!==Ah){Ah.Af=Ik.Af;Ah.AG=Ik;Ik.Af=Ah;if(!!Ah.Af)Ah.Af.AG=Ah;}if(Gl!==Ah){Ah.Af=Gl;
Ah.AG=Gl.AG;Gl.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}if(!Ah.Af)this.B5=Ah;if(!Ah.AG)this.
B8=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());},HH:function(Ah){var B;if(!
Ah)throw new Error(Nd);if(Ah.Ac!==this)throw new Error(CJ);if((((Ah.U&0x401)===0x401
)&&!!Ah.AG)&&!!Ah.Em){Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H$],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H$],this);}Ah.Em=null;if(this.AY===Ah)this.A$(this.AAW(
Ah,0x14));if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)Ah.Af.AG=Ah.AG;if(this.B8===Ah)this.
B8=Ah.Af;if(this.B5===Ah)this.B5=Ah.AG;Ah.Ac=null;Ah.Af=null;Ah.AG=null;if(((Ah.
U&0x1)===0x1))this.Bg(Ah.GetExtent());},AJ2:function(Ah,JW){var B;if(!Ah)throw new
Error(OL);if(!!Ah.Ac)throw new Error(KH);if(!!JW&&(JW.Ac!==this))throw new Error(
Fn);var Gl=null;var Ik=this.B5;var Lx=Ah.JQ;if(!!JW){Gl=JW;Ik=JW.AG;}if(!!Gl&&(Lx>
Gl.JQ))Lx=Gl.JQ;if(!!Ik&&(Lx<Ik.JQ))Lx=Ik.JQ;if(Lx!==Ah.JQ){Ah.Ac=null;Ah.A7f(Lx
);Ah.Ac=this;}if(!JW){if(!!this.B5)this.B5.Af=Ah;Ah.AG=this.B5;this.B5=Ah;}else{
Ah.Af=JW;Ah.AG=JW.AG;JW.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}Ah.Ac=this;if(this.B8===JW
)this.B8=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());if(((!this.AY&&((Ah.U&
0x4)===0x4))&&((Ah.U&0x10)===0x10))&&!((Ah.U&0x10000)===0x10000))this.A$(Ah);if(((
Ah.U&0x401)===0x401)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H$],this
);}if(((Ah.U&0x200)===0x200)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H$],this);}},J:function(Ah,PN){var B;if(!Ah)throw new Error(OL);if(!!Ah.Ac)throw new
Error(KH);var Gl=null;var Lx=Ah.JQ;if(((PN<0)&&!!this.B5)&&(this.B5.JQ>=Lx)){Gl=
this.B5;PN=PN+1;}while((((PN<0)&&!!Gl)&&!!Gl.AG)&&(Gl.AG.JQ>=Lx)){Gl=Gl.AG;PN=PN+
1;}if((!Gl&&!!this.B5)&&(this.B5.JQ>Lx))Gl=this.B5;while((!!Gl&&!!Gl.AG)&&(Gl.AG.
JQ>Lx))Gl=Gl.AG;if(!Gl){Ah.Ac=this;Ah.AG=this.B5;if(!!this.B5)this.B5.Af=Ah;if(!
this.B8)this.B8=Ah;this.B5=Ah;}else{Ah.Ac=this;Ah.AG=Gl.AG;Ah.Af=Gl;Gl.AG=Ah;if(
!!Ah.AG)Ah.AG.Af=Ah;else this.B8=Ah;}if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent(
));if(((!this.AY&&((Ah.U&0x4)===0x4))&&((Ah.U&0x10)===0x10))&&!((Ah.U&0x10000)===
0x10000))this.A$(Ah);if(((Ah.U&0x401)===0x401)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;
A.ow([this,this.H$],this);}if(((Ah.U&0x200)===0x200)){Ah.U=Ah.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H$],this);}},A5E:function(){return this.AY;},AuP:function(
){return this.GN;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.O;this.U=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.EC._Mark.call(this,D
);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B5)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
HP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AoJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Rc:null,JA:null,Fc:A.aan(10,null,null),Ar_:null,Ahy:null,
Azx:0,H6:0,L3:A.aan(10,0,null),AHQ:A.aan(10,A.vx,null),WD:A.aan(10,0,null),Afb:A.
aan(10,A.vw,null),Asd:A.aan(10,0,null),Ahx:A.aan(10,A.vw,null),WC:A.aan(10,A.vw,
null),Q7:A.aan(10,A.vw,null),Acf:A.aan(10,A.vw,null),EF:0,AIe:0,AId:0,Oi:A.aan(4
,0,null),J6:A.aan(4,A.vx,null),J3:0,Ayg:0,Ass:0,Ax7:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},Ib:function(){return this;},J_:function(CW
,aClip,aOffset,Ce,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CW.AtS(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);},C4:
function(Aho,AnC){var B;C.O.C4.call(this,Aho,AnC);if(!this.Ac&&(((Aho&0x1)===0x1
)||((AnC&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ac&&(((
Aho&0x2)===0x2)||((AnC&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A$:function(E){if((E!==null)||!E)C.O.A$.call(this,E);},Aqn:function(E){var B;var
Bv2=this.HP;C.O.Aqn.call(this,E);if(((Bv2!==this.HP)&&!this.Ac)&&((this.U&0x1)===
0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DD:function(E){var B;var BP=this.
GN;C.O.DD.call(this,E);if(((BP!==this.GN)&&!this.Ac)&&((this.U&0x1)===0x1))this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CK){if(!!CK){CK.
Auq=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=null;if(!!this.JA){Gm=this.JA.Dj.
DispatchEvent(CK);if(!Gm)Gm=this.GI(CK);if(!Gm)Gm=this.A0Z(CK);this.H6=0;return Gm;
}Gm=C.O.DispatchEvent.call(this,CK);this.H6=0;return Gm;},BroadcastEvent:function(
CK,aFilter){if(!!CK){CK.Auq=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=C.O.BroadcastEvent.
call(this,CK,aFilter);this.H6=0;return Gm;},Bg:function(Dc){var B;if(this.Azx>0)
throw new Error(OM);if(!!this.HP&&!this.Ac){if(((B=this.HP.Qh)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.HP,0);}this.HP.Qh=A.vS(this.HP.Qh,Dc);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)Dc=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ac){C.O.Bg.call(this,Dc);return;}Dc=A.kz(A.aam(Dc,this.M.slice(0
,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;var P;for(P=0;P<this.J3;P=
P+1)if(!(((B=A.kz(this.J6.Get(P),Dc))[0]>=B[2])||(B[1]>=B[3]))){this.J6.Set(P,A.
vS(this.J6.Get(P),Dc));this.Oi.Set(P,A.zS(this.J6.Get(P)));return;}if(this.J3<3){
this.J6.Set(this.J3,Dc);this.Oi.Set(this.J3,A.zS(Dc));this.J3=this.J3+1;return;}
var H9;var Rb;var Ayf=0;var Ayh=0;var A_6=2147483647;this.J6.Set(this.J3,Dc);this.
Oi.Set(this.J3,A.zS(Dc));for(H9=0;H9<=this.J3;H9=H9+1)for(Rb=H9+1;Rb<=this.J3;Rb=
Rb+1){var AJg=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Rb)));var BbN=((AJg<<8)/(this.
Oi.Get(H9)+this.Oi.Get(Rb)))|0;if(BbN<A_6){A_6=BbN;Ayf=H9;Ayh=Rb;}}this.J6.Set(Ayf
,A.vS(this.J6.Get(Ayf),this.J6.Get(Ayh)));this.Oi.Set(Ayf,A.zS(this.J6.Get(Ayf))
);if(Ayh!==this.J3){this.J6.Set(Ayh,this.J6.Get(this.J3));this.Oi.Set(Ayh,this.Oi.
Get(this.J3));}},BuJ:function(){var Ls=A._NewObject(C.Apq,0);Ls.Auq=!!this.H6;if(
!!this.H6)Ls.Bu=this.H6;return Ls;},AnU:function(){var Ls=A._NewObject(C.Adf,0);
Ls.Auq=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},Asc:function(){var Ls=A.
_NewObject(C.Att,0);Ls.Auq=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},BuO:
function(H){var P;var Aoa=false;for(P=0;P<10;P=P+1)if(!!this.Fc.Get(P)){var pos=
this.Q7.Get(P);var B9=this.Fc.Get(P).Ac;while(!!B9&&(B9!==this)){pos=A.aaj(pos,B9.
M.slice(0,2));B9=B9.Ac;}if(!B9&&(this.Fc.Get(P)!==this)){var tmp=this.Fc.Get(P);
this.EF=P;this.Fc.Set(P,null);tmp.GI(this.AnU().InitializeUp(P,this.Ahx.Get(P),this.
Afb.Get(P),this.WD.Get(P),this.L3.Get(P)+1,this.WC.Get(P),false,this.Q7.Get(P),this.
Acf.Get(P)));this.BroadcastEvent(this.Asc().InitializeUp(P,this.L3.Get(P)+1,false
,tmp,this.Q7.Get(P)),0x18);}else{this.WD.Set(P,(this.Ahy.Bu-this.Asd.Get(P))|0);
if(this.WD.Get(P)<10)this.WD.Set(P,10);this.EF=P;this.Fc.Get(P).GI(this.AnU().InitializeHold(
P,pos,this.Afb.Get(P),this.WD.Get(P),this.L3.Get(P)+1,this.WC.Get(P),this.Q7.Get(
P),this.Acf.Get(P)));Aoa=true;}}if(!Aoa)this.Ahy.Ap(false);},GetFPS:function(){var
ticksCount=0;var A$H=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AIe&&(
ticksCount>this.AIe))A$H=((this.AId*1000)/((ticksCount-this.AIe)|0))|0;this.AId=
0;this.AIe=ticksCount;return A$H;},Update:function(){var B;if(!this.Ar_)this.Ar_=
A._NewObject(A.Graphics.Canvas,0);this.Ar_.Aqt([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Ar_.Update();return this.UpdateGE20(this.Ar_);},UpdateGE20:function(CW){if(!this.
BeginUpdate())return BH;var AfD=this.UpdateCanvas(CW,B$);this.EndUpdate();return AfD;
},EndUpdate:function(){if(this.J3>0){this.AId=this.AId+1;this.J3=0;}},UpdateCanvas:
function(CW,aOffset){var B;var AfD=BH;var Bur=[].concat(aOffset,A.aak(CW.FrameSize
,aOffset));var P;var H9=this.J3;this.Azx=this.Azx+1;CW.Dj=this;for(P=0;(P<H9)&&(
P<4);P=P+1)if(this.Oi.Get(P)>0){this.J_(CW,A.aal(this.J6.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);AfD=A.vS(AfD,A.kz(Bur,this.J6.Get(P)));}else H9=H9+1;CW.
Dj=null;this.Azx=this.Azx-1;if(!((AfD[0]>=AfD[2])||(AfD[1]>=AfD[3])))return A.aal(
AfD,aOffset);else return AfD;},GetUpdateRegion:function(AG9){var P;var H9=this.J3;
if(AG9<0)return BH;for(P=0;(P<H9)&&(P<4);P=P+1)if(!this.Oi.Get(P)){H9=H9+1;AG9=AG9+
1;}else if(P===AG9)return this.J6.Get(P);return BH;},BeginUpdate:function(){var B;
var P;if(!!this.J3&&!A.z9(this.J6.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
BcO=A.aan(3,A.vx,null);var BcN=this.J3;for(P=0;P<BcN;P++)BcO.Set(P,this.J6.Get(P
));for(P=0;P<BcN;P++){var Bb6=A.aam(BcO.Get(P),this.M.slice(0,2));var Bb7=this.Atd(
Bb6);if(!A.z9(Bb6,Bb7))this.Bg(A.aal(Bb7,this.M.slice(0,2)));}}var H9;var Rb;for(
H9=0;H9<(this.J3-1);H9++)if(this.Oi.Get(H9)>0)for(Rb=H9+1;Rb<this.J3;Rb++)if(this.
Oi.Get(Rb)>0){var AJg=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Rb)));if(((AJg-this.
Oi.Get(H9))-this.Oi.Get(Rb))<0){this.J6.Set(H9,A.vS(this.J6.Get(H9),this.J6.Get(
Rb)));this.Oi.Set(H9,AJg);this.Oi.Set(Rb,0);}}for(P=this.J3-1;P>=0;P--)if(!this.
Oi.Get(P))this.J3=this.J3-1;return this.J3;},DoesNeedUpdate:function(){if(this.J3>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B$,aSize
));if(this.Ax7)this.U=this.U|0x60;else this.U=this.U|0x20;this.Bg(this.M);return this;
},SetRootFocus:function(AYa){if(AYa===this.Ax7)return false;this.Ax7=AYa;if(!AYa
){if(!!this.JA)this.JA.Dj.C4(0x0,0x40);else this.C4(0x0,0x40);}else if(!!this.JA
)this.JA.Dj.C4(0x40,0x0);else this.C4(0x40,0x0);return true;},SetUserInputTimestamp:
function(PO){this.H6=PO;},DriveKeyboardHitting:function(Kl,Axe,Sy){var B;var A00=
!!this.Rc;if(!!this.Rc&&((!Sy||(this.Ayg!==Kl))||(this.Ass!==Axe))){var Ls=null;
var W=(C.Cd.isPrototypeOf(B=this.Rc)?B:null);var DZ=(C.BR.isPrototypeOf(B=this.Rc
)?B:null);if(!!this.Ayg)Ls=A._NewObject(C.KeyEvent,0).Initialize(this.Ayg,false);
if(this.Ass!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(this.Ass,false);if(
!!DZ)DZ.GI(Ls);else if(!!W)W.GI(Ls);this.Ayg=0;this.Ass=0x00;this.Rc=null;}if(!!
this.Rc){var Ls=null;var W=(C.Cd.isPrototypeOf(B=this.Rc)?B:null);var DZ=(C.BR.isPrototypeOf(
B=this.Rc)?B:null);if(!!Kl)Ls=A._NewObject(C.KeyEvent,0).Initialize(Kl,true);if(
this.Ass!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(Axe,true);if(!!DZ)DZ.GI(
Ls);else if(!!W)W.GI(Ls);}if(!this.Rc&&Sy){if(!!Kl)this.Rc=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kl,true));if(Axe!==0x00)this.Rc=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Axe,true));if(!(C.BR.isPrototypeOf(B=this.
Rc)?B:null)&&!(C.Cd.isPrototypeOf(B=this.Rc)?B:null))this.Rc=null;this.Ayg=Kl;this.
Ass=Axe;A00=A00||!!this.Rc;}this.H6=0;return A00;},DriveCursorMovement:function(
Fo){return this.DriveMultiTouchMovement(this.EF,Fo);},DriveMultiTouchMovement:function(
BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var Ff=A.aaj(Fo,this.Q7.Get(BG
));this.Q7.Set(BG,Fo);if(!this.Fc.Get(BG)||A.z8(Ff,B$)){this.H6=0;return false;}
var pos=Fo;var B9=this.Fc.Get(BG).Ac;while(!!B9&&(B9!==this)){pos=A.aaj(pos,B9.M.
slice(0,2));B9=B9.Ac;}if(!B9&&(this.Fc.Get(BG)!==this)){var tmp=this.Fc.Get(BG);
this.EF=BG;this.Fc.Set(BG,null);tmp.GI(this.AnU().InitializeUp(BG,this.Ahx.Get(BG
),this.Afb.Get(BG),this.WD.Get(BG),this.L3.Get(BG)+1,this.WC.Get(BG),false,this.
Q7.Get(BG),this.Acf.Get(BG)));this.BroadcastEvent(this.Asc().InitializeUp(BG,this.
L3.Get(BG)+1,false,tmp,Fo),0x18);}else{this.Ahx.Set(BG,pos);this.EF=BG;this.Fc.Get(
BG).GI(this.BuJ().Initialize(BG,pos,this.Afb.Get(BG),Ff,this.WD.Get(BG),this.L3.
Get(BG)+1,this.WC.Get(BG),Fo,this.Acf.Get(BG)));}this.H6=0;return true;},DriveCursorHitting:
function(Sy,BG,Fo){return this.DriveMultiTouchHitting(Sy,BG,Fo);},DriveMultiTouchHitting:
function(Sy,BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var ticksCount=this.
H6;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var Bxz=this.H6;this.
DriveMultiTouchMovement(BG,Fo);Fo=this.Q7.Get(BG);this.H6=Bxz;if(Sy)this.Acf.Set(
BG,Fo);if(Sy&&!this.Fc.Get(BG)){var Jz;var pos=Fo;if(A.vt(this.AHQ.Get(BG),Fo)&&((
ticksCount-this.Asd.Get(BG))<=250))this.L3.Set(BG,this.L3.Get(BG)+1);else this.L3.
Set(BG,0);this.AHQ.Set(BG,A.aam(Ne,Fo));this.Asd.Set(BG,ticksCount);if(!!this.JA
)Jz=this.Xt(A.aam(Ne,Fo),BG,this.L3.Get(BG)+1,this.JA.Dj,null,0x0);else Jz=this.
Xt(A.aam(Ne,Fo),BG,this.L3.Get(BG)+1,null,null,0x0);if(!!Jz){this.BroadcastEvent(
this.Asc().InitializeDown(BG,this.L3.Get(BG)+1,false,Jz.Cd,Fo),0x18);this.Fc.Set(
BG,Jz.Cd);this.WC.Set(BG,Jz.Dz);}else{this.Fc.Set(BG,null);this.WC.Set(BG,B$);this.
H6=0;return false;}var B9=Jz.Cd.Ac;while(!!B9&&(B9!==this)){pos=A.aaj(pos,B9.M.slice(
0,2));B9=B9.Ac;}this.Afb.Set(BG,pos);this.Ahx.Set(BG,pos);this.WD.Set(BG,0);this.
Ahy.Ap(true);this.EF=BG;this.Fc.Get(BG).GI(this.AnU().InitializeDown(BG,pos,this.
L3.Get(BG)+1,this.WC.Get(BG),false,Fo));this.H6=0;return true;}if(!Sy&&!!this.Fc.
Get(BG)){var pos=Fo;var B9=this.Fc.Get(BG).Ac;while(!!B9&&(B9!==this)){pos=A.aaj(
pos,B9.M.slice(0,2));B9=B9.Ac;}if(!B9)pos=this.Ahx.Get(BG);this.EF=BG;var tmp=this.
Fc.Get(BG);this.Fc.Set(BG,null);tmp.GI(this.AnU().InitializeUp(BG,pos,this.Afb.Get(
BG),this.WD.Get(BG),this.L3.Get(BG)+1,this.WC.Get(BG),false,Fo,this.Acf.Get(BG))
);this.BroadcastEvent(this.Asc().InitializeUp(BG,this.L3.Get(BG)+1,false,tmp,Fo)
,0x18);this.H6=0;return true;}this.H6=0;return false;},ARS:function(Zw,A_s,Ab8,Ab7
){if(Zw===this)Zw=null;if(!!!Zw&&!!this.JA)Zw=this.JA.Dj;if(!this.Fc.Get(this.EF
))return;var Jz;Jz=this.Xt(A.aam(Ne,this.Q7.Get(this.EF)),this.EF,1,Zw,Ab8,Ab7);
if(!!Jz&&(this.Fc.Get(this.EF)!==Jz.Cd))this.ALA(Jz.Cd,Jz.Dz);if(!Jz&&(this.Fc.Get(
this.EF)!==A_s))this.ALA(A_s,B$);},ALA:function(Zw,Wp){if(!this.Fc.Get(this.EF)||(
this.Fc.Get(this.EF)===Zw))return;var tmp=this.Fc.Get(this.EF);this.Fc.Set(this.
EF,null);tmp.GI(this.AnU().InitializeUp(this.EF,this.Ahx.Get(this.EF),this.Afb.Get(
this.EF),this.WD.Get(this.EF),this.L3.Get(this.EF)+1,this.WC.Get(this.EF),true,this.
Q7.Get(this.EF),this.Acf.Get(this.EF)));this.BroadcastEvent(this.Asc().InitializeUp(
this.EF,this.L3.Get(this.EF)+1,true,tmp,this.Q7.Get(this.EF)),0x18);var pos=this.
Q7.Get(this.EF);var B9=null;if(!!Zw)B9=Zw.Ac;while(!!B9&&(B9!==this)){pos=A.aaj(
pos,B9.M.slice(0,2));B9=B9.Ac;}if(!B9&&(Zw!==this)){this.Fc.Set(this.EF,null);return;
}this.BroadcastEvent(this.Asc().InitializeDown(this.EF,this.L3.Get(this.EF)+1,true
,Zw,this.Q7.Get(this.EF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.Fc.Set(this.EF,Zw);this.WC.Set(this.EF,Wp);this.Afb.Set(this.EF,pos
);this.Ahx.Set(this.EF,pos);this.L3.Set(this.EF,0);this.WD.Set(this.EF,0);this.Asd.
Set(this.EF,ticksCount);this.Acf.Set(this.EF,this.Q7.Get(this.EF));this.Fc.Get(this.
EF).GI(this.AnU().InitializeDown(this.EF,pos,this.L3.Get(this.EF)+1,this.WC.Get(
this.EF),true,this.Acf.Get(this.EF)));},Bfk:function(){if(!!this.JA)return this.
JA.Dj;return null;},AAO:function(Km){var B;if(!Km)throw new Error(ON);if(!((Km.U&
0x80)===0x80))throw new Error(Ss);if(this.JA.Dj===Km)this.JA=this.JA.Af;else{var
Ax6=this.JA;while(Ax6.Af.Dj!==Km)Ax6=Ax6.Af;Ax6.Af=Ax6.Af.Af;}Km.C4(0x0,0xC0);if(
this.Ax7){if(!!this.JA)this.JA.Dj.C4(0x40,0x0);else this.C4(0x40,0x0);}},AKK:function(
Km){var B;var Ar=A._NewObject(C.A4U,0);if(!Km)throw new Error(T$);if(Km===null)throw new
Error(Ze);if(((Km.U&0x80)===0x80))throw new Error(Wb);if(!!this.JA)this.JA.Dj.C4(
0x0,0x40);else this.C4(0x0,0x40);Ar.Af=this.JA;Ar.Dj=Km;this.JA=Ar;if(this.Ax7)Km.
C4(0xC0,0x0);else Km.C4(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Ahy={I:this},0);(this.Fc=[]).__proto__=C.Root.Fc;(this.
L3=[]).__proto__=C.Root.L3;(this.AHQ=[]).__proto__=C.Root.AHQ;(this.WD=[]).__proto__=
C.Root.WD;(this.Afb=[]).__proto__=C.Root.Afb;(this.Asd=[]).__proto__=C.Root.Asd;(
this.Ahx=[]).__proto__=C.Root.Ahx;(this.WC=[]).__proto__=C.Root.WC;(this.Q7=[]).
__proto__=C.Root.Q7;(this.Acf=[]).__proto__=C.Root.Acf;(this.Oi=[]).__proto__=C.
Root.Oi;(this.J6=[]).__proto__=C.Root.J6;this.__proto__=C.Root;this.U=0x7F;this.
Ahy.QB(10);this.Ahy.M_=[this,this.BuO];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Ahy._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Ahy._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JA)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Fc,D);if((B=this.Ar_)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ahy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bu:0,Auq:false,Init:function(aArg){this.Bu=this.At1();},At1:function(){var ticksCount=
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
Kl,Sy){this.CP=Kl;this.Down=Sy;this.D4=0x00;var AYR=Kl-10;var Ar9=Kl-105;if((AYR>=
0)&&(AYR<=9))this.D4=(48+AYR)&0xFFFF;if((Ar9>=0)&&(Ar9<=25))this.D4=(65+Ar9)&0xFFFF;
if(Kl===131)this.D4=0x20;if(this.D4===0x00)switch(Kl){case 132:this.D4=0x2B;break;
case 133:this.D4=0x2D;break;case 134:this.D4=0x2A;break;case 135:this.D4=0x2F;break;
case 136:this.D4=0x3D;break;case 137:this.D4=0x2E;break;case 138:this.D4=0x2C;break;
case 139:this.D4=0x3A;break;case 140:this.D4=0x3B;break;default:;}return this;},
BfQ:function(A_i){switch(A_i){case 141:return((this.D4>=0x41)&&(this.D4<=0x5A))||((
this.D4>=0x61)&&(this.D4<=0x7A));case 142:return(((this.D4>=0x41)&&(this.D4<=0x5A
))||((this.D4>=0x61)&&(this.D4<=0x7A)))||((this.D4>=0x30)&&(this.D4<=0x39));case
143:return(this.D4>=0x30)&&(this.D4<=0x39);case 144:return(((this.D4>=0x41)&&(this.
D4<=0x46))||((this.D4>=0x61)&&(this.D4<=0x66)))||((this.D4>=0x30)&&(this.D4<=0x39
));case 145:return this.D4!==0x00;case 146:return(this.D4===0x00)&&!!this.CP;case
147:return(((this.CP===6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:
return(this.D4!==0x00)||!!this.CP;default:;}return A_i===this.CP;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AO8={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AO8;
},_className:"Core::LanguageEvent"};C.Att={Av7:null,LE:A.vw,NU:0,Iy:0,Down:false
,NB:false,InitializeUp:function(BG,N4,AnB,AYq,Zv){this.Down=false;this.Iy=BG;this.
NU=N4;this.LE=Zv;this.Av7=AYq;this.NB=AnB;return this;},InitializeDown:function(
BG,N4,AnB,AYq,Zv){this.Down=true;this.Iy=BG;this.NU=N4;this.LE=Zv;this.Av7=AYq;this.
NB=AnB;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Att;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Av7)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Adf={Af$:A.vw,LE:
A.vw,NU:0,Jk:0,NJ:A.vw,HV:A.vw,Iy:0,Down:false,NB:false,InitializeHold:function(
BG,Akq,Axg,Axh,N4,Wp,Zv,Axf){this.Down=true;this.Iy=BG;this.HV=A.aak(Akq,Wp);this.
NJ=A.aak(Axg,Wp);this.Jk=Axh;this.NU=N4;this.LE=Zv;this.Af$=Axf;return this;},InitializeUp:
function(BG,Akq,Axg,Axh,N4,Wp,AnB,Zv,Axf){this.Down=false;this.Iy=BG;this.HV=A.aak(
Akq,Wp);this.NJ=A.aak(Axg,Wp);this.Jk=Axh;this.NU=N4;this.NB=AnB;this.LE=Zv;this.
Af$=Axf;return this;},InitializeDown:function(BG,Akq,N4,Wp,AnB,Zv){this.Down=true;
this.Iy=BG;this.HV=A.aak(Akq,Wp);this.NJ=A.aak(Akq,Wp);this.Jk=0;this.NU=N4;this.
NB=AnB;this.LE=Zv;this.Af$=Zv;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Adf;},_className:"Core::CursorEvent"};C.Apq={Af$:A.vw
,LE:A.vw,NU:0,Jk:0,Dz:A.vw,NJ:A.vw,HV:A.vw,Iy:0,Initialize:function(BG,Akq,Axg,aOffset
,Axh,BtQ,Wp,Zv,Axf){this.Iy=BG;this.HV=A.aak(Akq,Wp);this.NJ=A.aak(Axg,Wp);this.
Dz=aOffset;this.Jk=Axh;this.NU=BtQ;this.LE=Zv;this.Af$=Axf;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Apq;},_className:"Core::DragEvent"
};C.Y={BT:null,Nt:null,Ej:null,Bp:A.vw,ASj:0,Space:0,Af9:0,J_:function(CW,aClip,
aOffset,Ce,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var Ak7=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AIA=[E[2]-E[0],E[3]-E[1]];var AoQ=!A.z8(Ak7,AIA);var Ff=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(Ff,B$)&&!AoQ){var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Amp(Ff,tmp);}W=W.Af;}A.ow(this.Ej,this);}if((AoQ&&(Ak7[0]>0))&&(Ak7[1]>0)){var
A8=A.aam(this.M,this.Bp);var W=this.Af;while(!!W&&!((W.U&0x200)===0x200)){if(((W.
U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nv!==this))W.Em=null;if(!W.Em&&((W.Pu!==0x14
)||!!this.Af9))W.Asp(A8,this);}W=W.Af;}A.ow(this.Ej,this);}C.EC.G.call(this,E);if(
!!this.Ac&&AoQ){this.U=this.U|0x1000;if(!((this.Ac.U&0x2000)===0x2000)){this.Ac.
U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}},AoA:function(H){var B;this.BT.
Q=null;this.BT.P2=null;this.BT=null;(B=this.Nt)?B[1].call(B[0],this):null;},Gk:function(
E){var B;var Ff=A.aaj(E,this.Bp);if(A.z8(Ff,B$))return;this.Bp=E;var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Amp(Ff,tmp);}W=W.Af;}if(!!this.Ac)this.Ac.Bg(this.M);A.ow(this.Ej,this);},A7e:
function(E){var B;if(E<0)E=0;if(E===this.ASj)return;this.ASj=E;if(!!this.Ac&&!!this.
Af9){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},Bj1:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Ac&&!!this.Af9){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,
B.H$],this);}},Kc:function(E){var B;if(E===this.Af9)return;this.Af9=E;if(!!this.
Ac){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},UL:function(Ab1,EW){var Ar9=this.C_(0x1);var Q6=this.M;var Uy=A.aaj(Ar9.slice(
0,2),Q6.slice(0,2));var L5=A.aaj(Ar9.slice(2,4),Q6.slice(2,4));var Bo=B$;if((Uy[
0]>0)&&(L5[0]>Uy[0]))Bo=[Uy[0],Bo[1]];else if((Uy[0]>0)&&(L5[0]>0))Bo=[L5[0],Bo[
1]];if((L5[0]<0)&&(Uy[0]<L5[0]))Bo=[L5[0],Bo[1]];else if((L5[0]<0)&&(Uy[0]<0))Bo=[
Uy[0],Bo[1]];if((Uy[1]>0)&&(L5[1]>Uy[1]))Bo=[Bo[0],Uy[1]];else if((Uy[1]>0)&&(L5[
1]>0))Bo=[Bo[0],L5[1]];if((L5[1]<0)&&(Uy[1]<L5[1]))Bo=[Bo[0],L5[1]];else if((L5[
1]<0)&&(Uy[1]<0))Bo=[Bo[0],Uy[1]];if(A.z8(Bo,B$)){(EW)?EW[1].call(EW[0],this):null;
return;}if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;
}this.BT=Ab1;if(!this.BT){this.Gk(A.aaj(this.Bp,Bo));(EW)?EW[1].call(EW[0],this):
null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.AmA,this.Gk];this.
BT.Cv=this.Bp;this.BT.B1=A.aaj(this.Bp,Bo);this.BT.P2=[this,this.AoA];this.BT.Ad7(
false);this.BT.Ap(true);this.Nt=EW;}},Hx:function(Ah,Ab5,Ab1,EW){var B;if(!Ah)return;
if((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400))throw new Error(IM);this.Bb1();var
AM=Ah.GetExtent();var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2])||(
Lu[1]>=Lu[3])))||(Ab5&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var
Bo=B$;if(AM[2]>A8[2])Bo=[AM[2]-A8[2],Bo[1]];if(AM[3]>A8[3])Bo=[Bo[0],AM[3]-A8[3]
];if(Bo[0]>(AM[0]-A8[0]))Bo=[AM[0]-A8[0],Bo[1]];if(Bo[1]>(AM[1]-A8[1]))Bo=[Bo[0]
,AM[1]-A8[1]];if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.
Nt=null;}this.BT=Ab1;if(!this.BT){this.Gk(A.aaj(this.Bp,Bo));(EW)?EW[1].call(EW[
0],this):null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.AmA,this.
Gk];this.BT.Cv=this.Bp;this.BT.B1=A.aaj(this.Bp,Bo);this.BT.P2=[this,this.AoA];this.
BT.Ad7(false);this.BT.Ap(true);this.Nt=EW;}},Bff:function(Ah){var B;if(!!Ah&&((Ah.
Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return-1;var CO=-1;while(!!Ah&&!((Ah.U&0x200
)===0x200)){if(((Ah.U&0x400)===0x400))CO=CO+1;Ah=Ah.AG;}return CO;},U9:function(
Ah,aFilter){var B;if(!!Ah&&((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return null;
var W=this.Af;var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;if(!!Ah)W=Ah.
Af;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((B=aFilter)&&((W.
U&B)===B))&&(!IS||!((B=IS)&&((W.U&B)===B))))return W;W=W.Af;}return null;},C_:function(
aFilter){var B;var W=this.Af;var AD=BH;var IS=0x10000;this.Bb1();if(((aFilter&0x10000
)===0x10000))IS=0x0;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((
B=aFilter)&&((W.U&B)===B))&&(!IS||!((B=IS)&&((W.U&B)===B))))AD=A.vS(AD,W.GetExtent(
));W=W.Af;}return AD;},Bb1:function(){var B;if((!this.Af9||!!!this.Ac)||!((this.
Ac.U&0x4000)===0x4000))return;var W=this.Af;var AY$=((this.U&0x1000)===0x1000);for(;
!!W&&!AY$;W=W.Af){if(((W.U&0x400)===0x400)&&((W.U&0x800)===0x800))AY$=true;if(((
W.U&0x200)===0x200))break;}if(AY$){this.U=this.U&~0x4000;this.Ac.Bb$();}},AmA:function(
){return this.Bp;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.Y;this.U=0x203;},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.BT
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.CI={Hn:null,BT:null,Cd:null,VV:null,Nt:null,Ej:null,G8:null,SL:-
1,SK:0,Jh:-1,Hb:0,AhP:8,Ob:0,TM:0,AbK:A.vw,GK:-1,Bp:0,Ge:-1,OC:0,GL:24,AR:0,K9:null
,NG:false,Ast:false,ASq:function(Ii,N3,Wo,SA,SB,Ahn,OT,Q2,Lm,Lk,Ll){throw new Error(
Ua);},Apo:function(Ii,Ahn,OT,Q2,Lm,Lk,Ll){throw new Error(Zf);},AjT:function(Ii,
N3,Wo,SA,SB,OT,Q2,Lm,Lk,Ll){throw new Error(Wc);},DispatchEvent:function(CK){var
B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY){this.GK=this.Ge;
this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);if(!!this.B5)this.
B5.Af=this.Cd;else this.B8=this.Cd;this.Cd.AG=this.B5;this.B5=this.Cd;this.Cd.Ac=
this;this.AbK=[(B=this.M)[2]-B[0],this.GL];(B=this.G8)?B[1].call(B[0],this):null;
var B9=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B9)result=B9.DispatchEvent(CK);
else result=this.Cd.GI(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B8=null;
this.B5=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
){A.ow(this.Ej,this);return;}this.Ast=true;var AyW=0;if(!this.NG)AyW=this.OC;var
FI=this.Alf(-AyW-this.Bp,1);var GG=this.Alf(((((B=this.M)[3]-B[1])-AyW)-this.Bp)-
1,2);var CO=GG-FI;if(CO<1)CO=1;var Aht=(CO/2)|0;var Ahu=(CO/3)|0;if(!Aht)Aht=1;if(
!Ahu)Ahu=1;if(FI<this.Hb){FI=FI-Aht;GG=GG+Ahu;}else if(GG>this.Jh){FI=FI-Ahu;GG=
GG+Aht;}else{FI=this.Hb;GG=this.Jh;}if(!this.NG){if(FI>=this.AR){FI=0;GG=-1;}else
if(GG<0){FI=0;GG=-1;}if(GG>=this.AR)GG=this.AR-1;if(FI<0)FI=0;}else if(this.AR<=
0){FI=0;GG=-1;}var Ah6=this.Hb;var Ah7=this.Jh;var Aon=0;var Aoo=-1;if(FI>Ah6)Ah6=
FI;if(GG<Ah7)Ah7=GG;if(Ah6<=Ah7){while((this.Jh<GG)&&(this.Hb<Ah6)){this.AcF();this.
AxD();}while((this.Hb>FI)&&(this.Jh>Ah7)){this.Ay_();this.AxC();}}else{this.Jh=(
this.Jh-this.Hb)+FI;this.Hb=FI;Aon=this.Hb;Aoo=this.Jh;}while(this.Hb<FI)this.AcF(
);while(this.Jh>GG)this.Ay_();while(this.Hb>FI)this.AxC();while(this.Jh<GG)this.
AxD();var Z=this.B8;var inx=this.Hb;var pos=[0,(AyW+this.Bp)+this.Jd(inx,0)];var
BL=(B=this.M)[3]-B[1];var AkP=null;var BcV=(B=this.M)[2]-B[0];while(!!Z){var Io=
inx;if(this.NG){if(Io<0)Io=this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcG=((
Io>=this.SK)&&(Io<=this.SL))||((inx>=Aon)&&(inx<=Aoo));var An6=Z.GetExtent();var
Bo=A.aaj(pos,An6.slice(0,2));if(AcG)this.TM=this.GL;else this.TM=An6[3]-An6[1];var
AZS=pos[1];var AZT=pos[1]+this.TM;if(!A.z8(Bo,B$))Z.Amp(Bo,true);if((AcG&&(AZS<BL
))&&(AZT>0)){this.Cd=Z;this.GK=Io;this.AbK=[BcV,this.TM];(B=this.G8)?B[1].call(B[
0],this):null;}Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TM];}inx=this.Hb;Z=this.B8;
pos=[0,(AyW+this.Bp)+this.Jd(inx,0)];while(!!Z){var Io=inx;if(this.NG){if(Io<0)Io=
this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcG=((Io>=this.SK)&&(Io<=this.SL
))||((inx>=Aon)&&(inx<=Aoo));if(AcG)this.TM=this.GL;else this.TM=(B=Z.GetExtent(
))[3]-B[1];var AZS=pos[1];var AZT=pos[1]+this.TM;if(AcG&&!((AZS<BL)&&(AZT>0))){this.
Cd=Z;this.GK=Io;this.AbK=[BcV,this.TM];(B=this.G8)?B[1].call(B[0],this):null;}if(((
Io===this.Ge)&&this.NG)&&!!AkP){var Q6=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Z.GetExtent(),Q6))>A.zS(A.kz(AkP.GetExtent(),Q6)))AkP=Z;}else if(Io===this.
Ge)AkP=Z;Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TM];}this.SK=0;this.SL=-1;this.Cd=
null;this.GK=-1;this.A$(AkP);this.Ast=false;A.ow(this.Ej,this);},RO:function(Ah,
GD,aFilter){return null;},Apu:function(Ah,aFilter){return null;},U9:function(Ah,
aFilter){return null;},AAW:function(Ah,aFilter){return null;},C_:function(aFilter
){return BH;},NH:function(Km,FE,Lm,Lk,Ll){throw new Error(Zg);},AgS:function(Ah,
JW){throw new Error(Ub);},QI:function(Ah){throw new Error(Zh);},Ki:function(Ah,PN
){throw new Error(Zi);},HH:function(Ah){throw new Error(Uc);},AJ2:function(Ah,JW
){throw new Error(Wd);},J:function(Ah,PN){throw new Error(QV);},Jd:function(GU,AX2
){return GU*this.GL;},Alf:function(Fo,AX2){return(Fo/this.GL)|0;},Ay_:function(){
var Z=this.B5;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(
!!Z.AG)Z.AG.Af=null;else this.B8=null;this.B5=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhP){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxD:function(){var B;var Z=this.Hn;var Acs=this.K9;var AcK=++this.Jh;
if(this.NG){if(AcK<0)AcK=this.AR-(-AcK%this.AR);if(AcK>0)AcK=AcK%this.AR;}while(
!!Z&&(((B=Z)?B.__proto__:null)!==Acs))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!
!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{
Z=(C.Cd.isPrototypeOf(B=A._NewObject(Acs,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.
AhP++;}this.TM=this.GL;this.GK=AcK;this.AbK=[(B=this.M)[2]-B[0],this.TM];this.Cd=
Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cd=null;this.GK=-1;if(!!this.B5)this.
B5.Af=Z;Z.Ac=this;Z.AG=this.B5;this.B5=Z;if(!this.B8)this.B8=Z;if(AcK===this.Ge)
this.A$(Z);return Z;},AcF:function(){var Z=this.B8;if(!Z)return null;if(Z===this.
AY)this.A$(null);this.Hb=this.Hb+1;if(!!Z.Af)Z.Af.AG=null;else this.B5=null;this.
B8=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhP){if(!!this.Hn)this.Hn.
AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxC:function(){var B;var Z=this.
Hn;var Acs=this.K9;var MP=--this.Hb;if(this.NG){if(MP<0)MP=this.AR-(-MP%this.AR);
if(MP>0)MP=MP%this.AR;}while(!!Z&&(((B=Z)?B.__proto__:null)!==Acs))Z=Z.Af;if(!!Z
){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=
null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Acs,0))?B:null
);Z.AV(0x1D);if(!!this.Ob)this.AhP++;}this.TM=this.GL;this.GK=MP;this.AbK=[(B=this.
M)[2]-B[0],this.TM];this.Cd=Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cd=null;
this.GK=-1;if(!!this.B8)this.B8.AG=Z;Z.Ac=this;Z.Af=this.B8;this.B8=Z;if(!this.B5
)this.B5=Z;if(MP===this.Ge)this.A$(Z);return Z;},AoA:function(H){var B;this.BT.Q=
null;this.BT.P2=null;this.BT=null;(B=this.Nt)?B[1].call(B[0],this):null;},BwS:function(
H){this.Gk(this.VV.Dz[1]);},BwT:function(H){var B;if(!!this.BT){this.BT.Ap(false
);this.BT.Q=null;this.BT.P2=null;this.BT=null;}if(!this.NG){var AD=this.Apz(0,this.
AR-1);var Aft=this.M.slice(0,2);AD=A.aaS(AD,AD[1]-this.OC);if(AD[0]>Aft[0])AD=[].
concat(Aft[0],AD.slice(1,4));if(AD[1]>Aft[1])AD=A.aaS(AD,Aft[1]);var Ff=AD[1]-this.
M[1];var AZ6=((B=this.M)[3]-B[1])-(AD[3]-AD[1]);if(AZ6>0)AZ6=0;this.VV.Dz=[0,this.
Bp];this.VV.Gb=[0,(this.Bp+AZ6)-Ff];this.VV.FS=[0,this.Bp-Ff];}else{var Ff=32000-(
32000%this.GL);this.VV.Dz=[0,this.Bp];this.VV.Gb=[0,this.Bp-Ff];this.VV.FS=[0,this.
Bp+Ff];}},AQG:function(E){var B;if(this.NG===E)return;this.NG=E;while(!!this.AcF(
));this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Avs:function(E){if(E===
this.VV)return;if(!!E&&!!E.AsH){A.aa8("%s%*%s",Zj,E,OO);throw new Error(PK);}if(
!!this.VV){this.VV.AIM=null;this.VV.AsH=null;}this.VV=E;if(!!E){E.AIM=[this,this.
BwT];E.AsH=[this,this.BwS];}},Gk:function(E){var B;if(this.NG&&(this.AR>0)){var Hp=
this.Jd(this.AR,3);if(E<0)E=Hp-(-E%Hp);if(E>0)E=E%Hp;if(E>0)E=E-Hp;}if(E===this.
Bp)return;this.Bp=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GM:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},A64:function(E){var B;
if(E<0)E=0;if(E===this.OC)return;this.OC=E;if(!this.NG){this.Am();this.Bg([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);}},Ad5:function(E){var B;if(E<1)E=1;if(E===this.GL
)return;this.GL=E;while(!!this.AcF());this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.AR)return;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NG){if(E>this.AR){AD=[].concat(AD.slice(0,
3),(this.OC+this.Bp)+this.Jd(E,3));AD=A.aaS(AD,(this.OC+this.Bp)+this.Jd(this.AR
,3));}else{AD=A.aaS(AD,(this.OC+this.Bp)+this.Jd(E,3));AD=[].concat(AD.slice(0,3
),(this.OC+this.Bp)+this.Jd(this.AR,3));}}else while(!!this.AcF());this.AR=E;this.
Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;this.K9=E;while(!!
this.AcF());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3
]-B[1]]);},Bft:function(GU){if(this.Ast)return null;if((GU<0)||(GU>=this.AR))return null;
if(!this.NG){if((GU<this.Hb)||(GU>this.Jh))return null;var W=this.B8;while(GU>this.
Hb){W=W.Af;GU=GU-1;}return W;}else{var MP=this.Hb;if(MP<0)MP=this.AR-(-MP%this.AR
);if(MP>0)MP=MP%this.AR;var W=this.B8;while(!!W){if((MP%this.AR)===GU)return W;W=
W.Af;MP=MP+1;}return null;}},AzO:function(Ab1,EW){var B;if(this.NG){(EW)?EW[1].call(
EW[0],this):null;return;}var AIf=this.Bp;var A$I=((((B=this.M)[3]-B[1])-this.Bp)-
this.OC)-this.Jd(this.AR,3);var Bo=0;if(AIf>0)Bo=-AIf;else if(A$I>0)Bo=A$I;if((Bo>
0)&&(Bo>-AIf))Bo=-AIf;if(!Bo){(EW)?EW[1].call(EW[0],this):null;return;}if(!!this.
BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;}this.BT=Ab1;if(
!this.BT){this.Gk(this.Bp+Bo);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(
false);this.BT.IF(1);this.BT.Q=[this,this.AmA,this.Gk];this.BT.Cv=this.Bp;this.BT.
B1=this.Bp+Bo;this.BT.P2=[this,this.AoA];this.BT.Ad7(false);this.BT.Ap(true);this.
Nt=EW;}},Hx:function(GU,Ab5,Ab1,EW){var B;if((GU<0)||(GU>=this.AR))return;var AM=
this.Apz(GU,GU);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2])||(Lu[
1]>=Lu[3])))||(Ab5&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var Bo=
0;if(AM[3]>A8[3])Bo=AM[3]-A8[3];if(Bo>(AM[1]-A8[1]))Bo=AM[1]-A8[1];if(!!this.BT){
this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;}this.BT=Ab1;if(!this.
BT){this.Gk(this.Bp-Bo);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(false);
this.BT.IF(1);this.BT.Q=[this,this.AmA,this.Gk];this.BT.Cv=this.Bp;this.BT.B1=this.
Bp-Bo;this.BT.P2=[this,this.AoA];this.BT.Ad7(false);this.BT.Ap(true);this.Nt=EW;
}},Bfl:function(){return BH;},AME:function(){if((this.OC<=0)||this.NG)return BH;
var AD=this.M;AD=A.aaS(AD,AD[1]+this.Bp);AD=[].concat(AD.slice(0,3),AD[1]+this.OC
);return AD;},A30:function(Fo){if(((this.AR<=0)||(Fo[0]<this.M[0]))||(Fo[0]>=this.
M[2]))return-1;Fo=A.aaj(Fo,this.M.slice(0,2));if(!this.NG){var Z=(Fo[1]-this.Bp)-
this.OC;if(Z>0)Z=this.Alf(Z,0);if((Z<0)||(Z>=this.AR))return-1;return Z;}var Z=Fo[
1]-this.Bp;if(Z>0)Z=this.Alf(Z,0);if(Z<0)Z=this.Alf(Z,0)-1;if(Z<0)Z=this.AR-(-Z%
this.AR);if(Z>0)Z=Z%this.AR;return Z;},Apz:function(JV,LZ){if(JV<0)JV=0;if(LZ>=this.
AR)LZ=this.AR-1;if(JV>LZ)return BH;var AD=this.M;var Bo=this.Bp;if(this.NG){var Hp=
this.Jd(this.AR,3);if(Bo<0)Bo=Hp-(-Bo%Hp);if(Bo>0)Bo=Bo%Hp;if(Bo>0)Bo=Bo-Hp;}else
Bo=Bo+this.OC;AD=[].concat(AD.slice(0,3),(AD[1]+Bo)+this.Jd(LZ+1,0));AD=A.aaS(AD
,(AD[1]+Bo)+this.Jd(JV,0));return AD;},AaQ:function(JV,LZ){var B;if(JV<0)JV=0;if(
JV>LZ)return;if(this.SK>this.SL){this.SK=JV;this.SL=LZ;}else{if(JV<this.SK)this.
SK=JV;if(LZ>this.SL)this.SL=LZ;}var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.
NG){AD=A.aaS(AD,(this.OC+this.Bp)+this.Jd(JV,0));AD=[].concat(AD.slice(0,3),(this.
OC+this.Bp)+this.Jd(LZ+1,0));}else if((this.Jd(this.AR-1,3)>=(AD[3]-AD[1]))&&((AD[
3]-AD[1])>0)){var Bo=this.Bp;var Hp=this.Jd(this.AR,3);if(Bo<0)Bo=Hp-(-Bo%Hp);if(
Bo>0)Bo=Bo%Hp;if(Bo>0)Bo=Bo-Hp;AD=A.aaS(AD,Bo+this.Jd(JV,0));AD=[].concat(AD.slice(
0,3),Bo+this.Jd(LZ+1,0));}this.Am();this.Bg(AD);},AmA:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CI;this.G(Ud);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VV)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hn:null
,BT:null,Cd:null,Nt:null,G8:null,SL:-1,SK:0,Jh:-1,Hb:0,AhP:8,Ob:0,Sb:0,AbK:A.vw,
GK:-1,Bp:0,Ge:-1,Vr:24,AR:0,K9:null,Ast:false,ASq:function(Ii,N3,Wo,SA,SB,Ahn,OT
,Q2,Lm,Lk,Ll){throw new Error(Zk);},Apo:function(Ii,Ahn,OT,Q2,Lm,Lk,Ll){throw new
Error(We);},AjT:function(Ii,N3,Wo,SA,SB,OT,Q2,Lm,Lk,Ll){throw new Error(Zl);},DispatchEvent:
function(CK){var B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY
){this.GK=this.Ge;this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);
if(!!this.B5)this.B5.Af=this.Cd;else this.B8=this.Cd;this.Cd.AG=this.B5;this.B5=
this.Cd;this.Cd.Ac=this;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];(B=this.G8)?B[1].call(
B[0],this):null;var B9=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B9)result=B9.DispatchEvent(
CK);else result=this.Cd.GI(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B8=null;
this.B5=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
)return;this.Ast=true;var FI=this.Alf(0-this.Bp,1);var GG=this.Alf((((B=this.M)[
2]-B[0])-this.Bp)-1,2);var CO=GG-FI;if(CO<1)CO=1;var Aht=(CO/2)|0;var Ahu=(CO/3)|
0;if(!Aht)Aht=1;if(!Ahu)Ahu=1;if(FI<this.Hb){FI=FI-Aht;GG=GG+Ahu;}else if(GG>this.
Jh){FI=FI-Ahu;GG=GG+Aht;}else{FI=this.Hb;GG=this.Jh;}if(FI>=this.AR){FI=0;GG=-1;
}else if(GG<0){FI=0;GG=-1;}if(GG>=this.AR)GG=this.AR-1;if(FI<0)FI=0;var Ah6=this.
Hb;var Ah7=this.Jh;var Aon=0;var Aoo=-1;if(FI>Ah6)Ah6=FI;if(GG<Ah7)Ah7=GG;if(Ah6<=
Ah7){while((this.Jh<GG)&&(this.Hb<Ah6)){this.AcF();this.AxD();}while((this.Hb>FI
)&&(this.Jh>Ah7)){this.Ay_();this.AxC();}}else{this.Jh=(this.Jh-this.Hb)+FI;this.
Hb=FI;Aon=this.Hb;Aoo=this.Jh;}while(this.Hb<FI)this.AcF();while(this.Jh>GG)this.
Ay_();while(this.Hb>FI)this.AxC();while(this.Jh<GG)this.AxD();var Z=this.B8;var inx=
this.Hb;var pos=[this.Bp+this.Jd(inx,0),0];var BU=(B=this.M)[2]-B[0];var AkP=null;
var BcL=(B=this.M)[3]-B[1];while(!!Z){var Io=inx;var AcG=((Io>=this.SK)&&(Io<=this.
SL))||((inx>=Aon)&&(inx<=Aoo));var An6=Z.GetExtent();var Bo=A.aaj(pos,An6.slice(
0,2));if(AcG)this.Sb=this.Vr;else this.Sb=An6[2]-An6[0];var AZQ=pos[0];var AZR=pos[
0]+this.Sb;if(!A.z8(Bo,B$))Z.Amp(Bo,true);if((AcG&&(AZQ<BU))&&(AZR>0)){this.Cd=Z;
this.GK=Io;this.AbK=[this.Sb,BcL];(B=this.G8)?B[1].call(B[0],this):null;}Z=Z.Af;
inx+=1;pos=[pos[0]+this.Sb,pos[1]];}inx=this.Hb;Z=this.B8;pos=[this.Bp+this.Jd(inx
,0),0];while(!!Z){var Io=inx;var AcG=((Io>=this.SK)&&(Io<=this.SL))||((inx>=Aon)&&(
inx<=Aoo));if(AcG)this.Sb=this.Vr;else this.Sb=(B=Z.GetExtent())[2]-B[0];var AZQ=
pos[0];var AZR=pos[0]+this.Sb;if(AcG&&!((AZQ<BU)&&(AZR>0))){this.Cd=Z;this.GK=Io;
this.AbK=[this.Sb,BcL];(B=this.G8)?B[1].call(B[0],this):null;}if(Io===this.Ge)AkP=
Z;Z=Z.Af;inx+=1;pos=[pos[0]+this.Sb,pos[1]];}this.SK=0;this.SL=-1;this.Cd=null;this.
GK=-1;this.A$(AkP);this.Ast=false;},RO:function(Ah,GD,aFilter){return null;},Apu:
function(Ah,aFilter){return null;},U9:function(Ah,aFilter){return null;},AAW:function(
Ah,aFilter){return null;},C_:function(aFilter){return BH;},NH:function(Km,FE,Lm,
Lk,Ll){throw new Error(Zm);},AgS:function(Ah,JW){throw new Error(Wf);},QI:function(
Ah){throw new Error(Wg);},Ki:function(Ah,PN){throw new Error(St);},HH:function(Ah
){throw new Error(Zn);},AJ2:function(Ah,JW){throw new Error(Zo);},J:function(Ah,
PN){throw new Error(AbO);},Jd:function(GU,AX2){return GU*this.Vr;},Alf:function(
Fo,AX2){return(Fo/this.Vr)|0;},Ay_:function(){var Z=this.B5;if(!Z)return null;if(
Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(!!Z.AG)Z.AG.Af=null;else this.B8=
null;this.B5=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhP){if(!!this.Hn
)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxD:function(){var B;
var Z=this.Hn;var Acs=this.K9;var AcK=++this.Jh;while(!!Z&&(((B=Z)?B.__proto__:null
)!==Acs))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===
Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(
Acs,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.AhP++;}this.Sb=this.Vr;this.GK=AcK;
this.AbK=[this.Sb,(B=this.M)[3]-B[1]];this.Cd=Z;(B=this.G8)?B[1].call(B[0],this):
null;this.Cd=null;this.GK=-1;if(!!this.B5)this.B5.Af=Z;Z.Ac=this;Z.AG=this.B5;this.
B5=Z;if(!this.B8)this.B8=Z;if(AcK===this.Ge)this.A$(Z);return Z;},AcF:function(){
var Z=this.B8;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Hb=this.Hb+1;if(
!!Z.Af)Z.Af.AG=null;else this.B5=null;this.B8=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhP){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxC:function(){var B;var Z=this.Hn;var Acs=this.K9;var MP=--this.Hb;
while(!!Z&&(((B=Z)?B.__proto__:null)!==Acs))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;
if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;
}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Acs,0))?B:null);Z.AV(0x1D);if(!!this.
Ob)this.AhP++;}this.Sb=this.Vr;this.GK=MP;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];
this.Cd=Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cd=null;this.GK=-1;if(!!this.
B8)this.B8.AG=Z;Z.Ac=this;Z.Af=this.B8;this.B8=Z;if(!this.B5)this.B5=Z;if(MP===this.
Ge)this.A$(Z);return Z;},AoA:function(H){var B;this.BT.Q=null;this.BT.P2=null;this.
BT=null;(B=this.Nt)?B[1].call(B[0],this):null;},Gk:function(E){var B;if(E===this.
Bp)return;this.Bp=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GM:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},ADf:function(E){var B;
if(E<1)E=1;if(E===this.Vr)return;this.Vr=E;while(!!this.AcF());this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.
AR)return;var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AR){AD=[].concat(this.
Bp+this.Jd(this.AR,3),AD.slice(1,4));AD=A.aaQ(AD,this.Bp+this.Jd(E,3));}else{AD=
A.aaQ(AD,this.Bp+this.Jd(this.AR,3));AD=[].concat(this.Bp+this.Jd(E,3),AD.slice(
1,4));}this.AR=E;this.Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;
this.K9=E;while(!!this.AcF());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Blu:function(BtR,BtS){if(!this.BT)return;if(BtR)this.Gk(
this.BT.B1);var A1u=this.Nt;this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.
Nt=null;this.BT=null;if(BtS)(A1u)?A1u[1].call(A1u[0],this):null;},BfV:function(){
return!!this.BT;},Hx:function(GU,Ab5,Ab1,EW){var B;if((GU<0)||(GU>=this.AR))return;
var AM=this.Apz(GU,GU);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab5&&!((Lu[0]>=Lu[2
])||(Lu[1]>=Lu[3])))||(Ab5&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;
}var Bo=0;if(AM[2]>A8[2])Bo=AM[2]-A8[2];if(Bo>(AM[0]-A8[0]))Bo=AM[0]-A8[0];if(!!
this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;}this.BT=
Ab1;if(!this.BT){this.Gk(this.Bp-Bo);(EW)?EW[1].call(EW[0],this):null;}else{this.
BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.AmA,this.Gk];this.BT.Cv=this.Bp;
this.BT.B1=this.Bp-Bo;this.BT.P2=[this,this.AoA];this.BT.Ad7(false);this.BT.Ap(true
);this.Nt=EW;}},Apz:function(JV,LZ){if(JV<0)JV=0;if(LZ>=this.AR)LZ=this.AR-1;if(
JV>LZ)return BH;var AD=this.M;var Bo=this.Bp;AD=A.aaQ(AD,(AD[0]+Bo)+this.Jd(LZ+1
,0));AD=[].concat((AD[0]+Bo)+this.Jd(JV,0),AD.slice(1,4));return AD;},AaQ:function(
JV,LZ){var B;if(JV<0)JV=0;if(JV>LZ)return;if(this.SK>this.SL){this.SK=JV;this.SL=
LZ;}else{if(JV<this.SK)this.SK=JV;if(LZ>this.SL)this.SL=LZ;}var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AD=[].concat(this.Bp+this.Jd(JV,0),AD.slice(1,4));AD=A.aaQ(
AD,this.Bp+this.Jd(LZ+1,0));this.Am();this.Bg(AD);},AmA:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.G(Ud);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bh={APY:null,ACL:null,AuA:null,DV:null,
K$:null,BS:null,AI6:0,Bk:0,Iy:0,Bu:0,NU:0,Jk:0,Dz:A.vw,NJ:A.vw,HV:A.vw,AvS:8,Aeh:
0,A4O:1,Down:false,XV:false,NB:false,AZg:false,Ayq:0,J_:function(CW,aClip,aOffset
,Ce,aBlend){},GI:function(CK){var B;var BO=(C.Adf.isPrototypeOf(CK)?CK:null);var
DY=(C.Apq.isPrototypeOf(CK)?CK:null);var AIq=this.XV;var ZS;var Uu;var Azs;var MN;
var AxW;if(!BO&&!DY)return null;ZS=(!!BO&&BO.Down)&&!BO.Jk;Uu=(!!BO&&BO.Down)&&(
BO.Jk>0);Azs=(!!BO&&BO.Down)&&(BO.Jk>this.Ayq);MN=!!BO&&!BO.Down;AxW=!!DY;if(ZS)
this.Ayq=((B=(BO.NB?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aeh&0x20)===0x20
)&&(this.Bk>0))&&(this.Bk<33554432)){var In=(C.Att.isPrototypeOf(CK)?CK:null);if(((
!!In&&In.Down)&&(In.Av7!==this))&&A.vt(this.GetExtent(),this.Ac.A4K(In.LE))){this.
AI6=0x20;this.Bk=this.Bk|67108864;return null;}}if(ZS){var Aou=0;var Acm;this.Bk=
this.Bk|(1<<BO.Iy);for(Acm=this.Bk&4095;Acm>0;Acm=Acm>>1)if(!!(Acm&1))Aou=Aou+1;
if(Aou===1)this.Bk=(this.Bk|16777216)|(4096<<BO.Iy);}if(MN&&(this.Bk<16777216)){
var Iq=this.Ib();var Jz=null;if(!!Iq){var A1m=(!!this.AG?this.AG:this.Ac);var AY6=(
!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xt(A.aam(Su,BO.LE),BO.Iy,BO.NU,AY6,A1m,0x0);}if(!!Jz
){var P;for(P=0;P<10;P++)if(!!(this.Bk&(1<<P)))Jz.Cd.GI(A._NewObject(C.Adf,0).InitializeDown(
P,BO.HV,BO.NU,B$,true,BO.LE));for(P=0;P<10;P++)if(!!(this.Bk&(1<<P)))Jz.Cd.GI(A.
_NewObject(C.Adf,0).InitializeUp(P,BO.HV,BO.HV,0,BO.NU,B$,false,BO.LE,BO.LE));}}
if(MN)this.Bk=(this.Bk&~(1<<BO.Iy))|33554432;if(Azs&&(this.Bk<16777216))this.Bk=
this.Bk|67108864;if(MN&&BO.NB)this.Bk=this.Bk|67108864;if(MN&&!(this.Bk&4095))this.
AI6=0x0;if(MN&&!(this.Bk&16777215))this.Bk=0;if(Uu&&(this.Bk>=67108864)){var Iq=
this.Ib();if(!!Iq)Iq.ARS(null,null,this,this.AI6);}if((Uu&&!!(this.Bk&16777216))&&
!!(this.Bk&33554432)){Uu=false;MN=true;}if(!!BO&&!(this.Bk&(4096<<BO.Iy)))return this;
if(!!DY&&!(this.Bk&(4096<<DY.Iy)))return this;if(MN&&!(this.Bk&16777216))return this;
if(((ZS||AxW)||Uu)&&((this.Bk<16777216)||(this.Bk>=33554432)))return this;if(MN)
this.Bk=this.Bk&3758100479;if(MN&&!(this.Bk&16777215))this.Bk=0;if(!!BO){this.Down=
ZS||Uu;this.XV=this.AOU(BO.HV);this.NJ=BO.NJ;this.HV=BO.HV;this.Dz=B$;this.Jk=BO.
Jk;this.NU=BO.NU;this.NB=BO.NB;this.Iy=BO.Iy;this.Bu=BO.Bu;if(BO.Down&&!BO.Jk)AIq=
false;}if(!!DY){this.Down=true;this.XV=this.AOU(DY.HV);this.NJ=DY.NJ;this.HV=DY.
HV;this.Dz=DY.Dz;this.Jk=DY.Jk;this.NU=DY.NU;this.Iy=DY.Iy;this.NB=false;this.Bu=
DY.Bu;}var AZa=this.Down;if(!!DY)(B=this.APY)?B[1].call(B[0],this):null;if((!!BO&&
this.Down)&&!this.Jk)(B=this.BS)?B[1].call(B[0],this):null;if((!!BO&&this.Down)&&(
this.Jk>0))(B=this.DV)?B[1].call(B[0],this):null;if((this.Down&&this.XV)&&!AIq){
this.AZg=true;(B=this.AuA)?B[1].call(B[0],this):null;}if(this.AZg&&(((AZa&&!this.
XV)&&AIq)||((!AZa&&this.XV)&&AIq))){this.AZg=false;(B=this.ACL)?B[1].call(B[0],this
):null;}if(!!BO&&!AZa)(B=this.K$)?B[1].call(B[0],this):null;if(!!this.Aeh){var AcE=
0x0;if(((((this.Aeh&0x10)===0x10)&&!!BO)&&BO.Down)&&(BO.Jk>=1000))AcE=0x10;if((((
this.Aeh&0x1)===0x1)&&!!DY)&&((DY.LE[1]-DY.Af$[1])<=-this.AvS))AcE=0x1;if((((this.
Aeh&0x2)===0x2)&&!!DY)&&((DY.LE[1]-DY.Af$[1])>=this.AvS))AcE=0x2;if((((this.Aeh&
0x4)===0x4)&&!!DY)&&((DY.LE[0]-DY.Af$[0])<=-this.AvS))AcE=0x4;if((((this.Aeh&0x8
)===0x8)&&!!DY)&&((DY.LE[0]-DY.Af$[0])>=this.AvS))AcE=0x8;if(!!AcE){var Iq=this.
Ib();if(!!Iq){this.AI6=AcE;Iq.ARS(null,this,this,AcE);}}}return this;},Xt:function(
Dc,BG,N4,Ab3,Ab8,Ab7){var B;if(!!Ab3&&(Ab3!==this))return null;if((N4<1)||(N4>this.
A4O))return null;if(this.Bk>=33554432)return null;if((this.Bk>=16777216)&&!(this.
Bk&(4096<<BG)))return null;if(!!(Ab7&this.Aeh))return null;if(this.Bfz()){var AM=
A.kz(Dc,this.GetExtent());if(!((AM[0]>=AM[2])||(AM[1]>=AM[3]))){var PQ=A.zT(Dc);
var Ff=B$;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0]
)-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3
]-PQ[1])-1];return A._NewObject(C.Atu,0).Initialize(this,Ff);}}else{var Ho=A.aan(
9,A.vw,null);var P;Ho.Set(0,A.zT(Dc));Ho.Set(1,Ho.Get(0));Ho.Set(2,Ho.Get(0));Ho.
Set(3,Ho.Get(0));Ho.Set(4,Ho.Get(0));Ho.Set(1,[Dc[0],Ho.Get(1)[1]]);Ho.Set(2,[Ho.
Get(2)[0],Dc[1]]);Ho.Set(3,[Dc[2],Ho.Get(3)[1]]);Ho.Set(4,[Ho.Get(4)[0],Dc[3]]);
Ho.Set(5,Dc.slice(0,2));Ho.Set(6,[Dc[2],Dc[1]]);Ho.Set(7,[Dc[0],Dc[3]]);Ho.Set(8
,Dc.slice(2,4));for(P=0;P<9;P=P+1)if(this.AOU(Ho.Get(P)))return A._NewObject(C.Atu
,0).Initialize(this,A.aaj(Ho.Get(P),Ho.Get(0)));}return null;},BjU:function(E){if(
E<1)E=1;this.AvS=E;},ADo:function(E){if(E<1)E=1;this.A4O=E;},Ap:function(E){if(E
)this.C4(0x10,0x0);else this.C4(0x0,0x10);},_Init:function(aArg){C.YP._Init.call(
this,aArg);this.__proto__=C.Bh;this.U=0x11B;},_Mark:function(D){var B;C.YP._Mark.
call(this,D);if((B=this.APY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ACL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.K$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"};C.H2={
timer:null,AIM:null,AsH:null,AD4:null,Yy:null,R$:null,Bk:0,AHn:0,Acp:5000,AoP:0,
AIo:A.vw,An3:0,Ae4:0,EP:0,Alq:0,AsW:0,An2:0,Ae3:0,EO:0,Alp:0,Aln:0,NJ:A.vw,A2$:A.
vw,FS:A.vw,Gb:A.vw,Dz:A.vw,VY:A.vw,A3Q:0.5,A7R:true,AEH:true,YZ:false,WS:false,WT:
false,AnM:false,Ayq:0,J_:function(CW,aClip,aOffset,Ce,aBlend){},GI:function(CK){
var B;var BO=(C.Adf.isPrototypeOf(CK)?CK:null);var DY=(C.Apq.isPrototypeOf(CK)?CK:
null);var In=(C.Att.isPrototypeOf(CK)?CK:null);var ZS;var Uu;var Azs;var MN;var AxW;
ZS=(!!BO&&BO.Down)&&!BO.Jk;Uu=(!!BO&&BO.Down)&&(BO.Jk>0);Azs=(!!BO&&BO.Down)&&(BO.
Jk>this.Ayq);MN=!!BO&&!BO.Down;AxW=!!DY;if(ZS)this.Ayq=((B=(BO.NB?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if(ZS){var Aou=0;var Acm;this.Bk=this.Bk|(1<<BO.Iy);for(Acm=this.
Bk&4095;Acm>0;Acm=Acm>>1)if(!!(Acm&1))Aou=Aou+1;if(Aou===1)this.Bk=(this.Bk|16777216
)|(4096<<BO.Iy);}if(MN&&(this.Bk<16777216)){var Iq=this.Ib();var Jz=null;if(!!Iq
){var A1m=(!!this.AG?this.AG:this.Ac);var AY6=(!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xt(A.
aam(Su,BO.LE),BO.Iy,BO.NU,AY6,A1m,0x0);}if(!!Jz){var P;for(P=0;P<10;P++)if(!!(this.
Bk&(1<<P)))Jz.Cd.GI(A._NewObject(C.Adf,0).InitializeDown(P,BO.HV,BO.NU,B$,true,BO.
LE));for(P=0;P<10;P++)if(!!(this.Bk&(1<<P)))Jz.Cd.GI(A._NewObject(C.Adf,0).InitializeUp(
P,BO.HV,BO.HV,0,BO.NU,B$,false,BO.LE,BO.LE));}}if(MN)this.Bk=(this.Bk&~(1<<BO.Iy
))|33554432;if(Azs&&(this.Bk<16777216))this.Bk=this.Bk|67108864;if(MN&&BO.NB)this.
Bk=this.Bk|67108864;if(MN&&!(this.Bk&16777215))this.Bk=0;if(Uu&&(this.Bk>=67108864
)){var Iq=this.Ib();if(!!Iq)Iq.ARS(null,null,this,0x0);}if((Uu&&!!(this.Bk&16777216
))&&!!(this.Bk&33554432)){Uu=false;MN=true;}if(!!BO&&!(this.Bk&(4096<<BO.Iy)))return this;
if(!!DY&&!(this.Bk&(4096<<DY.Iy)))return this;if(MN&&!(this.Bk&16777216))return this;
if(((ZS||AxW)||Uu)&&((this.Bk<16777216)||(this.Bk>=33554432)))return this;if(MN)
this.Bk=this.Bk&3758100479;if(MN&&!(this.Bk&16777215))this.Bk=0;if(!!In&&(In.Av7===
this))return null;if((!!In&&In.Down)&&(this.AnM||!this.YZ))return null;if((!!In&&
In.Down)&&!A.vt(this.M,this.Ac.A4K(In.LE)))return null;if((!!In&&!In.Down)&&(!this.
AnM||(this.AHn!==In.Iy)))return null;if((!BO&&!DY)&&!In)return null;if(!!BO){this.
AnM=ZS||Uu;this.AHn=BO.Iy;this.NJ=BO.NJ;}if(!!DY)this.AHn=DY.Iy;if(!!In){this.AnM=
In.Down;this.AHn=In.Iy;}if(!!In&&In.Down){this.A1n();this.EO=(((In.Bu-this.Aln)*
0.001)*this.Ae3)+this.EO;this.EP=(((In.Bu-this.AsW)*0.001)*this.Ae4)+this.EP;if(
this.WS)this.EO=0;if(this.WT)this.EP=0;this.Ae3=0;this.Ae4=0;this.WS=false;this.
WT=false;this.AIo=this.Dz;this.AoP=In.Bu;return this;}if(ZS){this.A1n();this.EO=(((
BO.Bu-this.Aln)*0.001)*this.Ae3)+this.EO;this.EP=(((BO.Bu-this.AsW)*0.001)*this.
Ae4)+this.EP;if(this.WS||!this.YZ)this.EO=0;if(this.WT||!this.YZ)this.EP=0;this.
Ae3=0;this.Ae4=0;this.WS=false;this.WT=false;if(!this.YZ){this.YZ=true;(B=this.R$
)?B[1].call(B[0],this):null;(B=this.AIM)?B[1].call(B[0],this):null;}this.AIo=this.
Dz;this.AoP=BO.Bu;}if(!!DY){var GX=A.aaj(DY.HV,DY.NJ);var CB=this.Dz;if(this.AEH
)CB=[this.AIo[0]+GX[0],CB[1]];CB=[CB[0],this.AIo[1]+GX[1]];if(this.A7R){if(CB[0]<
this.Gb[0])CB=[this.Gb[0]+(((CB[0]-this.Gb[0])/2)|0),CB[1]];else if(CB[0]>this.FS[
0])CB=[this.FS[0]+(((CB[0]-this.FS[0])/2)|0),CB[1]];if(CB[1]<this.Gb[1])CB=[CB[0
],this.Gb[1]+(((CB[1]-this.Gb[1])/2)|0)];else if(CB[1]>this.FS[1])CB=[CB[0],this.
FS[1]+(((CB[1]-this.FS[1])/2)|0)];}else{if(CB[0]<this.Gb[0])CB=[this.Gb[0],CB[1]
];else if(CB[0]>this.FS[0])CB=[this.FS[0],CB[1]];if(CB[1]<this.Gb[1])CB=[CB[0],this.
Gb[1]];else if(CB[1]>this.FS[1])CB=[CB[0],this.FS[1]];}if(!A.z8(CB,this.Dz)){this.
A2$=A.aaj(CB,this.Dz);this.Dz=CB;(B=this.AsH)?B[1].call(B[0],this):null;(B=this.
AD4)?B[1].call(B[0],this):null;}}if((!!In&&!In.Down)&&((In.Bu-this.AoP)>=200)){this.
EO=0;this.EP=0;}if(Uu&&((BO.Bu-this.AoP)>=200)){this.EO=0;this.EP=0;}if(!!DY&&(DY.
Bu>this.AoP)){var GX=DY.Dz;var Baa=1000/(DY.Bu-this.AoP);var AhS=0;var AhT;if(this.
AEH)AhS=GX[0]*Baa;AhT=GX[1]*Baa;if((AhS*this.EO)<0)this.EO=0;if((AhT*this.EP)<0)
this.EP=0;this.EO=(this.EO+AhS)*0.5;this.EP=(this.EP+AhT)*0.5;this.AoP=DY.Bu;}if(
!MN&&!In)return this;if(!!BO&&BO.NB){this.EO=0;this.EP=0;}if((this.Dz[0]<=this.Gb[
0])||(this.Dz[0]>=this.FS[0]))this.EO=0;else if(!this.EO){var EH=this.Dz[0];var E3=
this.Gb[0];var Ey=this.FS[0];if(EH<E3)Ey=this.Gb[0];else if(EH>Ey)E3=this.FS[0];
else if(this.VY[0]<=1){E3=EH;Ey=EH;}else{var Acu=(Ey-EH)%this.VY[0];Ey=(EH-this.
VY[0])+Acu;E3=EH+Acu;if(Ey<this.Gb[0])Ey=this.Gb[0];if(E3>this.FS[0])E3=this.FS[
0];}if((E3-EH)<=(EH-Ey))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){var Jc=EH-this.Dz[0
];if(Jc>0)this.EO=Math.sqrt((Jc*2)*this.Acp)+20;if(Jc<0)this.EO=-Math.sqrt((-Jc*
2)*this.Acp)-20;this.Ae3=(400-(this.EO*this.EO))/(2*Jc);this.An2=EH;}}else{var BxQ=
this.EO*this.EO;var Jc=BxQ/(2*this.Acp);var EH=this.Dz[0];if(this.EO>0)EH=EH+(Jc|
0);if(this.EO<0)EH=EH-(Jc|0);if(EH>this.FS[0])EH=this.FS[0];else if(EH<this.Gb[0
])EH=this.Gb[0];var BcG=EH;var E3=this.Gb[0];var Ey=this.FS[0];if(EH<E3)Ey=this.
Gb[0];else if(EH>Ey)E3=this.FS[0];else if(this.VY[0]<=1){E3=EH;Ey=EH;}else{var Acu=(
Ey-EH)%this.VY[0];Ey=(EH-this.VY[0])+Acu;E3=EH+Acu;if(Ey<this.Gb[0])Ey=this.Gb[0
];if(E3>this.FS[0])E3=this.FS[0];}if(this.EO>0){if(Ey<=this.Dz[0])EH=E3;else if((
EH-Ey)<(E3-EH))EH=Ey;else EH=E3;}else if(E3>=this.Dz[0])EH=Ey;else if((EH-Ey)>(E3-
EH))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){Jc=EH-this.Dz[0];if(EH!==BcG){var Aic=EH-
BcG;if(Aic>0)this.EO=this.EO+Math.sqrt((Aic*2)*this.Acp);if(Aic<0)this.EO=this.EO-
Math.sqrt((-Aic*2)*this.Acp);}if(this.EO>0)this.EO=this.EO+20;if(this.EO<0)this.
EO=this.EO-20;this.Ae3=(400-(this.EO*this.EO))/(2*Jc);this.An2=EH;}else this.EO=
0;}if((this.Dz[1]<=this.Gb[1])||(this.Dz[1]>=this.FS[1]))this.EP=0;else if(!this.
EP){var EI=this.Dz[1];var E3=this.Gb[1];var Ey=this.FS[1];if(EI<E3)Ey=this.Gb[1];
else if(EI>Ey)E3=this.FS[1];else if(this.VY[1]<=1){E3=EI;Ey=EI;}else{var Acu=(Ey-
EI)%this.VY[1];Ey=(EI-this.VY[1])+Acu;E3=EI+Acu;if(Ey<this.Gb[1])Ey=this.Gb[1];if(
E3>this.FS[1])E3=this.FS[1];}if((E3-EI)<=(EI-Ey))EI=E3;else EI=Ey;if(EI!==this.Dz[
1]){var Jc=EI-this.Dz[1];if(Jc>0)this.EP=Math.sqrt((Jc*2)*this.Acp)+20;if(Jc<0)this.
EP=-Math.sqrt((-Jc*2)*this.Acp)-20;this.Ae4=(400-(this.EP*this.EP))/(2*Jc);this.
An3=EI;}}else{var BxR=this.EP*this.EP;var Jc=BxR/(2*this.Acp);var EI=this.Dz[1];
if(this.EP>0)EI=EI+(Jc|0);if(this.EP<0)EI=EI-(Jc|0);if(EI>this.FS[1])EI=this.FS[
1];else if(EI<this.Gb[1])EI=this.Gb[1];var BcH=EI;var E3=this.Gb[1];var Ey=this.
FS[1];if(EI<E3)Ey=this.Gb[1];else if(EI>Ey)E3=this.FS[1];else if(this.VY[1]<=1){
E3=EI;Ey=EI;}else{var Acu=(Ey-EI)%this.VY[1];Ey=(EI-this.VY[1])+Acu;E3=EI+Acu;if(
Ey<this.Gb[1])Ey=this.Gb[1];if(E3>this.FS[1])E3=this.FS[1];}if(this.EP>0){if(Ey<=
this.Dz[1])EI=E3;else if((EI-Ey)<(E3-EI))EI=Ey;else EI=E3;}else if(E3>=this.Dz[1
])EI=Ey;else if((EI-Ey)>(E3-EI))EI=E3;else EI=Ey;if(EI!==this.Dz[1]){Jc=EI-this.
Dz[1];if(EI!==BcH){var Aic=EI-BcH;if(Aic>0)this.EP=this.EP+Math.sqrt((Aic*2)*this.
Acp);if(Aic<0)this.EP=this.EP-Math.sqrt((-Aic*2)*this.Acp);}if(this.EP>0)this.EP=
this.EP+20;if(this.EP<0)this.EP=this.EP-20;this.Ae4=(400-(this.EP*this.EP))/(2*Jc
);this.An3=EI;}else this.EP=0;}if(!!BO)this.Aln=BO.Bu;if(!!In)this.Aln=In.Bu;this.
AsW=this.Aln;this.Alp=this.Dz[0];this.Alq=this.Dz[1];this.BxS();return this;},Xt:
function(Dc,BG,N4,Ab3,Ab8,Ab7){var B;if(!!Ab3&&(Ab3!==this))return null;if(this.
Bk>=33554432)return null;if((this.Bk>=16777216)&&!(this.Bk&(4096<<BG)))return null;
if(!this.AEH&&!!(Ab7&0xC))return null;var AM=A.kz(Dc,this.M);if(!((AM[0]>=AM[2])||(
AM[1]>=AM[3]))){var PQ=A.zT(Dc);var Ff=B$;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];
if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0])-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];
if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3]-PQ[1])-1];return A._NewObject(C.Atu,0).Initialize(
this,Ff);}return null;},A1n:function(){if(!!this.timer){A.zl([this,this.L$],this.
timer,0);this.timer=null;}},BxS:function(){this.timer=A._GetAutoObject(A.abm.Af2
);A.y_([this,this.L$],this.timer,0);},L$:function(H){var B;if(!this.timer)return;
var As2=(this.timer.Bu-this.Aln)*0.001;var As3=(this.timer.Bu-this.AsW)*0.001;var
Bx0=As2*As2;var Bx1=As3*As3;var AhS=(this.Ae3*As2)+this.EO;var AhT=(this.Ae4*As3
)+this.EP;var CB=[((((this.Ae3*0.5)*Bx0)+(this.EO*As2))+this.Alp)|0,((((this.Ae4
*0.5)*Bx1)+(this.EP*As3))+this.Alq)|0];if(this.WS&&(As2>=0.5)){CB=[this.An2,CB[1
]];this.EO=0;this.Ae3=0;this.Alp=CB[0];this.WS=false;}else if(this.WS){var Lt=1-
Math.pow(1-(As2/0.5),5);CB=[(this.Alp+((this.An2-this.Alp)*Lt))|0,CB[1]];}if(this.
WT&&(As3>=0.5)){CB=[CB[0],this.An3];this.EP=0;this.Ae4=0;this.Alq=CB[1];this.WT=
false;}else if(this.WT){var Lt=1-Math.pow(1-(As3/0.5),5);CB=[CB[0],(this.Alq+((this.
An3-this.Alq)*Lt))|0];}if(((this.EO>0)&&(AhS<0))||((this.EO<0)&&(AhS>0))){AhS=0;
CB=[this.Dz[0],CB[1]];}if(((this.EP>0)&&(AhT<0))||((this.EP<0)&&(AhT>0))){AhT=0;
CB=[CB[0],this.Dz[1]];}if(!this.WS&&(CB[0]<this.Gb[0])){this.Alp=CB[0];this.An2=
this.Gb[0];this.Aln=this.timer.Bu;this.WS=true;}else if(!this.WS&&(CB[0]>this.FS[
0])){this.Alp=CB[0];this.An2=this.FS[0];this.Aln=this.timer.Bu;this.WS=true;}if(
!this.WT&&(CB[1]<this.Gb[1])){this.Alq=CB[1];this.An3=this.Gb[1];this.AsW=this.timer.
Bu;this.WT=true;}else if(!this.WT&&(CB[1]>this.FS[1])){this.Alq=CB[1];this.An3=this.
FS[1];this.AsW=this.timer.Bu;this.WT=true;}if(((!this.WS&&!!this.EO)&&(AhS>-20))&&(
AhS<20)){CB=[this.An2,CB[1]];this.EO=0;this.Ae3=0;this.Alp=CB[0];}if(((!this.WT&&
!!this.EP)&&(AhT>-20))&&(AhT<20)){CB=[CB[0],this.An3];this.EP=0;this.Ae4=0;this.
Alq=CB[1];}if(!A.z8(CB,this.Dz)){this.A2$=A.aaj(CB,this.Dz);this.Dz=CB;(B=this.AsH
)?B[1].call(B[0],this):null;(B=this.AD4)?B[1].call(B[0],this):null;}if(((!this.EO&&
!this.EP)&&!this.WS)&&!this.WT){this.A1n();this.YZ=false;(B=this.Yy)?B[1].call(B[
0],this):null;}},AQ6:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
VY=E;},AQK:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A3Q)return;this.A3Q=E;if(
E<(1e-007))E=1e-007;this.Acp=E*10000;},_Init:function(aArg){C.EC._Init.call(this
,aArg);this.__proto__=C.H2;this.U=0x11B;},_Mark:function(D){var B;C.EC._Mark.call(
this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIM)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AsH)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AD4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Yy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.R$)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BR={Af:null,K$:
null,BS:null,DV:null,AoL:0,Bu:0,A7N:0,Filter:148,CP:0,D4:0,Bw:true,Down:false,Abs:
false,Pc:false,Init:function(aArg){var B;var Dj=(C.O.isPrototypeOf(B=this.I)?B:null
);if(!Dj)throw new Error(AbP);this.Af=Dj.AIt;Dj.AIt=this;},GI:function(CK){var B;
if(!!CK&&CK.BfQ(this.Filter)){this.Down=CK.Down;this.CP=CK.CP;this.D4=CK.D4;this.
Bu=CK.Bu;this.Pc=false;if(CK.Down){this.A7N=this.AoL;this.Abs=this.AoL>0;if(this.
Abs)(B=this.DV)?B[1].call(B[0],this):null;else(B=this.BS)?B[1].call(B[0],this):null;
if(!this.Pc)this.AoL=this.AoL+1;return!this.Pc;}if(!CK.Down){this.Abs=this.AoL>1;
this.A7N=this.AoL-1;this.AoL=0;(B=this.K$)?B[1].call(B[0],this):null;return!this.
Pc;}}return false;},_Init:function(aArg){this.__proto__=C.BR;this.Init(aArg);A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.Atu={Cd:null,Atx:0,Dz:A.vw,Initialize:function(Ah,aOffset
){this.Cd=Ah;this.Dz=aOffset;this.Atx=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.Atu;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A4U={
Af:null,Dj:null,_Init:function(aArg){this.__proto__=C.A4U;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};C.Ap0={Nv:null,extent:A.vx,A8:A.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.Ap0;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nv)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.AB8={Ah1:A.vw,Ah0:
A.vw,_Init:function(aArg){C.Ap0._Init.call(this,aArg);this.__proto__=C.AB8;},_className:
"Core::LayoutLineContext"};C.AB9={Ay0:A.vw,AyZ:A.vw,Ah1:A.vw,Ah0:A.vw,_Init:function(
aArg){C.Ap0._Init.call(this,aArg);this.__proto__=C.AB9;},_className:"Core::LayoutQuadContext"
};C.ALH={Dj:null,Af:null,Q8:null,Rf:null,L9:null,AoI:null,_Init:function(aArg){this.
__proto__=C.ALH;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Rf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L9)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AoI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.ASv={FG:null,B5:null,B8:null,Bag:false,
BuC:function(){if(!this.FG)return;var O4=this.FG;this.FG.O0=null;this.FG=null;A.
ow([this,this.A0E],this);O4.A5f(this);},Bwj:function(H){if(!!this.FG)return;if(!
this.B8)return;this.FG=this.B8;this.B8=this.B8.Af;if(!!this.B8)this.B8.AG=null;else
this.B5=null;this.FG.Af=null;this.Bag=true;this.FG.R$(this);this.Bag=false;},BwG:
function(H){A.ow([this,this.Bwj],this);},BwF:function(H){A.ow([this,this.BwG],this
);},A0E:function(H){A.ow([this,this.BwF],this);},BdV:function(Ja){if(!Ja||!Ja.O0
)return;if(Ja.O0!==this)throw new Error(AeN);var Bc9=false;if(this.FG===Ja){this.
FG=null;Bc9=true;A.ow([this,this.A0E],this);}else{if(!!Ja.Af)Ja.Af.AG=Ja.AG;else
this.B5=Ja.AG;if(!!Ja.AG)Ja.AG.Af=Ja.Af;else this.B8=Ja.Af;Ja.AG=null;Ja.Af=null;
}Ja.O0=null;if(Bc9)Ja.A5e(this);},A7T:function(Ja,AYw){if(!Ja)return;if(!!Ja.O0)
throw new Error(Zp);Ja.O0=this;if(AYw){Ja.Af=this.B8;if(!!this.B8)this.B8.AG=Ja;
else this.B5=Ja;this.B8=Ja;}else{Ja.AG=this.B5;if(!!this.B5)this.B5.Af=Ja;else this.
B8=Ja;this.B5=Ja;}if(!this.FG)A.ow([this,this.A0E],this);},_Init:function(aArg){
this.__proto__=C.ASv;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Aj6={O0:null,AG:null,Af:
null,A5f:function(Ar3){},A5e:function(Ar3){},R$:function(Ar3){this.Ac9();},Mh:function(
){if(!!this.O0&&(this.O0.FG===this))this.O0.BuC();},Ac9:function(){if(!!this.O0)
this.O0.BdV(this);},AOR:function(){return!!this.O0&&(this.O0.FG===this);},_Init:
function(aArg){this.__proto__=C.Aj6;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O0)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.ASt={Ar:null,AsY:
null,R$:function(Ar3){this.AsY.Ar=this.Ar;A.vv(this.AsY,0);A.ow([this,this.Bwg],
this);},Bwg:function(H){this.AsY.Ar=null;this.AsY=null;this.Ar=null;this.Mh();},
_Init:function(aArg){C.Aj6._Init.call(this,aArg);this.__proto__=C.ASt;},_Mark:function(
D){var B;C.Aj6._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AsY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AET={_Init:function(){C.ASv._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AgR={resource:null,K3:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.AgR;this.Init(aArg
);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={M_:null,timer:
null,Bu:0,Period:1000,US:0,Bw:false,K3:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AIU:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},QB:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bw)this.AIU(this.US,E);},VL:function(E){if(E<0)E=0;if(E===this.US)return;
this.US=E;if(this.Bw)this.AIU(E,this.Period);},Ap:function(E){if(E===this.Bw)return;
this.Bw=E;if(E)this.AIU(this.US,this.Period);else this.AIU(0,0);this.Bu=this.At1(
);},At1:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;
},Trigger:function(){var B;this.Bu=this.At1();if(!this.Period)this.Ap(false);(B=
this.M_)?B[1].call(B[0],this):null;},AEQ:function(H){this.Ap(false);},StartTimer:
function(H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M_)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bu={AR0:0,Auw:0,Ai6:0,Gu:0
,G6:0,Year:0,A$Q:function(Ae0,AX0){if(AX0)switch(Ae0){case 1:return A.abj.BfZ;case
2:return A.abj.BeR;case 3:return A.abj.Bgj;case 4:return A.abj.Bdv;case 5:return A.
abj.Bgn;case 6:return A.abj.Bf2;case 7:return A.abj.Bf1;case 8:return A.abj.Bdx;
case 9:return A.abj.Bk4;case 10:return A.abj.BgS;case 11:return A.abj.BgR;case 12:
return A.abj.Beh;default:return A.jm;}else switch(Ae0){case 1:return A.abj.AB2;case
2:return A.abj.AAT;case 3:return A.abj.ACc;case 4:return A.abj.AzU;case 5:return A.
abj.ACf;case 6:return A.abj.AB4;case 7:return A.abj.AB3;case 8:return A.abj.Az2;
case 9:return A.abj.AEw;case 10:return A.abj.ACt;case 11:return A.abj.ACr;case 12:
return A.abj.AAD;default:return A.jm;}},A$O:function(A_n,AX0){if(AX0)switch(A_n){
case 1:return A.abj.Bgu;case 2:return A.abj.Bmk;case 3:return A.abj.BmX;case 4:return A.
abj.Bl9;case 5:return A.abj.Be4;case 6:return A.abj.BkY;case 0:return A.abj.BlW;
default:return A.jm;}else switch(A_n){case 1:return A.abj.Bgt;case 2:return A.abj.
Bmj;case 3:return A.abj.BmW;case 4:return A.abj.Bl8;case 5:return A.abj.Be3;case
6:return A.abj.BkX;case 0:return A.abj.BlV;default:return A.jm;}},A$N:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JL:function(){var d=this.Gu;var KR=this.G6;var Dl=this.Year-((
KR<=2)?1:0);var AxX=(((Dl>=0)?Dl:Dl-399)/400)|0;var Alw=Dl-(AxX*400);var Ut=(((((
153*(KR+((KR>2)?-3:9)))+2)/5)|0)+d)-1;var AnZ=(((Alw*365)+((Alw/4)|0))-((Alw/100
)|0))+Ut;var PT=((AxX*146097)+AnZ)-719468;return(((PT*86400)+(this.Ai6*3600))+(this.
Auw*60))+this.AR0;},ADL:function(E){var B;E+=62162035200;if(E<0)E=0;var UG=Math.
trunc(E/86400)|0;var AxX=(((UG>=0)?UG:UG-146096)/146097)|0;var AnZ=UG-(AxX*146097
);var Alw=((((AnZ-((AnZ/1460)|0))+((AnZ/36524)|0))-((AnZ/146096)|0))/365)|0;var Dl=
Alw+(AxX*400);var Ut=AnZ-(((365*Alw)+((Alw/4)|0))-((Alw/100)|0));var AZ9=(((5*Ut
)+2)/153)|0;var d=(Ut-((((153*AZ9)+2)/5)|0))+1;var KR=AZ9+((AZ9<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dl+((
KR<=2)?1:0);this.TG(KR);this.Lb(d);this.AmH(BL+((BL<0)?24:0));this.AmK(P+((P<0)?
60:0));this.AmN(s+((s<0)?60:0));},Yz:function(){if(this.G6===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G6===4)||(this.G6===6))||(this.G6===9))||(this.G6===11))return 30;else return 31;
},Bh3:function(){var B;var Ut=this.Aa9()-1;var Asg=(6+this.AuG())%7;var An1=((371+
Asg)-Ut)%7;if(this.G6===12){var d=this.Gu;if((d===31)&&(Asg<3))return 0;if((d===
30)&&(Asg<2))return 0;if((d===29)&&(Asg<1))return 0;}if(An1<=3)Ut+=An1;else Ut-=(
7-An1);if(Ut<0){var d=this.Gu;var KR=this.G6;this.Year--;this.Lb(31);this.TG(12);
Ut=this.Aa9()-1;Asg=(6+this.AuG())%7;An1=((371+Asg)-Ut)%7;if(An1<=3)Ut+=An1;else
Ut-=An1;this.Year++;this.Lb(d);this.TG(KR);}return(Ut/7)|0;},Aa9:function(){var B;
var d=this.Gu;var KR=this.G6;var Dl=this.Year;var Afi=((!!!(Dl%4)&&(!!(Dl%100)||
!!!(Dl%400)))?1:0);switch(KR){case 2:d+=31;break;case 3:d+=(59+Afi);break;case 4:
d+=(90+Afi);break;case 5:d+=(120+Afi);break;case 6:d+=(151+Afi);break;case 7:d+=(
181+Afi);break;case 8:d+=(212+Afi);break;case 9:d+=(243+Afi);break;case 10:d+=(273+
Afi);break;case 11:d+=(304+Afi);break;case 12:d+=(334+Afi);break;default:;}return d;
},AuG:function(){var B;var d=this.Gu;var KR=this.G6+((this.G6>2)?-2:10);var Dl=this.
Year-((this.G6<=2)?1:0);var BK=(Dl/100)|0;Dl%=100;d+=((((((((26*KR)-2)/10)|0)+Dl
)+((Dl/4)|0))+((BK/4)|0))-(2*BK));if(d>=0)return d%7;else return(7-(-d%7))%7;},AmN:
function(E){if(E<0)E=0;if(E>59)E=59;this.AR0=E;},AmK:function(E){if(E<0)E=0;if(E>
59)E=59;this.Auw=E;},AmH:function(E){if(E<0)E=0;if(E>23)E=23;this.Ai6=E;},Lb:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gu=E;},TG:function(E){if(E<1)E=1;if(E>12)E=12;this.
G6=E;},Format:function(Ij){var result=A.jm;var inx=0;while(!!(Ij.charCodeAt(inx)||
0))if((Ij.charCodeAt(inx)||0)===0x25){var ZM=1;inx=inx+1;if((Ij.charCodeAt(inx)||
0)===0x23){inx=inx+1;ZM=0;}switch(Ij.charCodeAt(inx)||0){case 0x64:result=result+
A.aaq(this.Gu,2*ZM,10);break;case 0x48:result=result+A.aaq(this.Ai6,2*ZM,10);break;
case 0x49:if(!(this.Ai6%12))result=result+Wh;else result=result+A.aaq(this.Ai6%12
,2*ZM,10);break;case 0x6D:result=result+A.aaq(this.G6,2*ZM,10);break;case 0x4D:result=
result+A.aaq(this.Auw,2*ZM,10);break;case 0x70:if(this.Ai6<12)result=result+A.abj.
Bdd;else result=result+A.abj.Bkn;break;case 0x53:result=result+A.aaq(this.AR0,2*
ZM,10);break;case 0x77:result=result+A.aaq(this.AuG(),ZM,10);break;case 0x79:result=
result+A.aaq(this.Year%100,2*ZM,10);break;case 0x59:result=result+A.aaq(this.Year
,4*ZM,10);break;case 0x25:result=result+Wi;break;case 0x6A:result=result+A.aaq(this.
Aa9(),3*ZM,10);break;case 0x57:result=result+A.aaq(this.Bh3(),2*ZM,10);break;case
0x61:result=result+this.A$O(this.AuG(),true);break;case 0x41:result=result+this.
A$O(this.AuG(),false);break;case 0x62:result=result+this.A$Q(this.G6,true);break;
case 0x42:result=result+this.A$Q(this.G6,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ij.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(Ab9,Ae0,BsY,Btc,Btt,BtM){this.Year=Ab9;this.TG(Ae0);this.
Lb(BsY);this.AmH(Btc);this.AmK(Btt);this.AmN(BtM);return this;},Initialize:function(
Ahp){this.ADL(Ahp);return this;},Bem:function(Ahp){if(!Ahp)return A._NewObject(C.
Am8,0).Initialize(this.JL());return A._NewObject(C.Am8,0).Initialize(this.JL()-Ahp.
JL());},Bly:function(Axi){if(!Axi)return this;return A._NewObject(C.Bu,0).Initialize(
this.JL()-Axi.JL());},J:function(Axi){if(!Axi)return this;return A._NewObject(C.
Bu,0).Initialize(this.JL()+Axi.JL());},_Init:function(aArg){this.__proto__=C.Bu;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.Am8={AEt:0,ACk:0,ABz:0,J9:0,JL:function(
){return(((this.J9*86400)+(this.ABz*3600))+(this.ACk*60))+this.AEt;},ADL:function(
E){var AI4=1;this.J9=Math.trunc(E/86400)|0;if(E<0){E=-E;AI4=-1;}this.ABz=AI4*(Math.
trunc(E/3600)%24|0);this.ACk=AI4*(Math.trunc(E/60)%60|0);this.AEt=AI4*(E%60|0);}
,Initialize2:function(BsZ,Btd,Btu,BtP){this.J9=BsZ;this.ABz=Btd;this.ACk=Btu;this.
AEt=BtP;return this;},Initialize:function(Ahp){this.ADL(Ahp);return this;},_Init:
function(aArg){this.__proto__=C.Am8;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A8f={Ar:null,O0:null,Trigger:function(BsT,AYw){var O4=A._NewObject(C.ASt,0);
O4.AsY=this;O4.Ar=BsT;this.O0.A7T(O4,AYw);},_Init:function(aArg){this.__proto__=
C.A8f;this.O0=A._GetAutoObject(C.AET);A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A8g={JF:null,Event:null,APZ:null,AsB:function(H){var B;if(
!this.Event)return;this.JF=this.Event.Ar;(B=this.APZ)?B[1].call(B[0],this):null;
this.JF=null;},BiL:function(E){if(this.Event===E)return;if(!!this.Event)A.zl([this
,this.AsB],this.Event,0);this.Event=E;if(!!this.Event)A.y_([this,this.AsB],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A8g;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.APZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BBM={Dp:0x1,ByC:0x2,BzH:0x4,BBE:0x8,Bw:0x10,H1:0x20
,BzI:0x40,BAo:0x80,BzD:0x100,Bz4:0x200,Bzr:0x400,BA0:0x800,Bf:0x1000,BBJ:0x2000,
BAK:0x4000,BAL:0x8000,Aaq:0x10000,BAJ:0x20000,BA$:0x40000};C.Pu={BA1:0x1,BA2:0x2
,Byy:0x4,Byz:0x8,ByA:0x10,Byx:0x20};C.Af9={None:0,BBA:1,ByU:2,Bz9:3,BA5:4,BBB:5,
BBC:6,ByV:7,ByW:8,Bz$:9,Bz_:10,BA7:11,BA6:12};C.Atz={None:0,BBy:1,Left:2,ByS:3,Y3:
4,A2F:5,BBz:6,Right:7,ByT:8};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:
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
346};C.BA3={BBS:0x1,BBP:0x2,BBQ:0x4,BBR:0x8,BAb:0x10,BzK:0x20};
C._Init=function(){C.Ajo.__proto__=C.Cd;C.YP.__proto__=C.Cd;C.EC.__proto__=C.Cd;C.
O.__proto__=C.EC;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AO8.__proto__=
C.Event;C.Att.__proto__=C.Event;C.Adf.__proto__=C.Event;C.Apq.__proto__=C.Event;
C.Y.__proto__=C.EC;C.CI.__proto__=C.O;C.Ds.__proto__=C.O;C.Bh.__proto__=C.YP;C.H2.
__proto__=C.EC;C.AB8.__proto__=C.Ap0;C.AB9.__proto__=C.Ap0;C.ASt.__proto__=C.Aj6;
};C._ReInit=function(){var B;if((B=C.AET._this))B._ReInit();};C.DE=function(D){var
B;if((B=C.AET._this)&&(B._cycle!=D))B._Done(C.AET._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */