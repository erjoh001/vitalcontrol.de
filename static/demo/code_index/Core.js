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
var LW="No view to remove";var OL="No view to add";var KH="View already in a group";
var OM="Recursive invalidate during active update cycle.";var Ne=[-8,-8,9,9];var
ON="No group to end the modal state.";var Ss="The group is not modal.";var T$="No group to obtain the modal state.";
var Zf="The group serves already as the \'virtual keyboard\'.";var Wb="The group is already modal.";
var IM="View is not in the same group or it is not embedded within the Outline "+
"Box";var Ua="The method SwitchToDialog() is not available in Core::VerticalList.";
var Zg="The method DismissDialog() is not available in Core::VerticalList.";var Wc=
"The method PresentDialog() is not available in Core::VerticalList.";var Zh="The method FadeGroup() is not available in Core::VerticalList.";
var Ub="The method RestackBehind() is not available in Core::VerticalList.";var Zi=
"The method RestackTop() is not available in Core::VerticalList.";var Zj="The method Restack() is not available in Core::VerticalList.";
var Uc="The method Remove() is not available in Core::VerticalList.";var Wd="The method AddBehind() is not available in Core::VerticalList.";
var QV="The method Add() is not available in Core::VerticalList.";var Zk="The Slide Touch Handler:";
var OO="is already connected with a view.";var PK="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Ud=[0,0,170,120];var Zl="The method SwitchToDialog() is not available in Core::HorizontalList.";
var We="The method DismissDialog() is not available in Core::HorizontalList.";var
Zm="The method PresentDialog() is not available in Core::HorizontalList.";var Zn=
"The method FadeGroup() is not available in Core::HorizontalList.";var Wf="The method RestackBehind() is not available in Core::HorizontalList.";
var Wg="The method RestackTop() is not available in Core::HorizontalList.";var St=
"The method Restack() is not available in Core::HorizontalList.";var Zo="The method Remove() is not available in Core::HorizontalList.";
var Zp="The method AddBehind() is not available in Core::HorizontalList.";var AbO=
"The method Add() is not available in Core::HorizontalList.";var Su=[0,0,1,1];var
AbP="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var AeO="Trying to cancel a task not belonging to this queue!";var Zq="Trying to enqueue a task twice!";
var Wh="12";var Wi="%";
C.Cd={Af:null,AG:null,Ac:null,Em:null,U:0x103,JQ:0,Pu:0x14,Asn:function(BI,Ahn){}
,A7f:function(E){if(this.JQ===E)return;this.JQ=E;if(!!this.Ac){var Aib=this.Af;var
GX=0;while(!!Aib&&(E>Aib.JQ)){Aib=Aib.Af;GX=GX+1;}Aib=this.AG;while(!!Aib&&(E<Aib.
JQ)){Aib=Aib.AG;GX=GX-1;}if(!!GX)this.Ac.Ki(this,GX);}},AV:function(E){var B;var
GX=E^this.Pu;if(!GX)return;this.Pu=E;if(!!this.Em&&!((this.U&0x400)===0x400)){this.
Ac.U=this.Ac.U|0x5000;A.ow([B=this.Ac,B.H$],this);this.Ac.Bg([0,0,(B=this.Ac.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Em&&((this.U&0x400)===0x400)){this.Em.Nv.U=this.Em.
Nv.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},Ib:function(
){var B9=this.Ac;while(!!B9){var Iq=(C.Root.isPrototypeOf(B9)?B9:null);if(!!Iq)return Iq;
B9=B9.Ac;}return null;},J_:function(CW,aClip,aOffset,Ce,aBlend){},GI:function(CK
){return null;},Xu:function(Dc,BG,N4,Ab4,Ab9,Ab8){return null;},Atb:function(Dc){
return Dc;},Atl:function(BI,MD){return B$;},Amn:function(aOffset,ArZ){},GetExtent:
function(){return BH;},C4:function(Ahp,AnB){var B;if(((this.U&0x200)===0x200))Ahp=
Ahp&~0x400;var AZ$=(this.U&~AnB)|Ahp;var AkI=AZ$^this.U;this.U=AZ$;if(!!this.Ac&&
!!(AkI&0x14)){var A$D=((this.U&0x14)===0x14);if(A$D&&!this.Ac.AY)this.Ac.A$(this
);if(!A$D&&(this.Ac.AY===this))this.Ac.A$(this.Ac.AAX(this,0x14));}if(!!this.Ac&&
!!(AkI&0x403))this.Ac.Bg(this.GetExtent());if(((!!this.Em&&!!this.Ac)&&((AZ$&0x400
)===0x400))&&((AkI&0x1)===0x1)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.
ow([B=this.Ac,B.H$],this);}if(!!this.Ac&&((AkI&0x400)===0x400)){this.Em=null;this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},_Init:function(
aArg){this.__proto__=C.Cd;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Em)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.Ajp={Et:A.vw,Ek:A.vw,Asn:function(BI,Ahn){var Ar=A._NewObject(
C.AB9,0);this.Em=null;Ar.extent=this.getExtent();Ar.A8=BI;Ar.Nv=Ahn;Ar.Ah1=this.
Ek;Ar.Ah2=this.Et;this.Em=Ar;},Atl:function(BI,MD){var B;var EM=this.Pu;var Ar=(
C.AB9.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var
x2=Ar.extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=x2-x1;
var BL=y2-y1;var tmp;if(!MD){var Ny=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];
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
MD){case 3:{x1=BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=
BI[1];y2=y1+BL;}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MD===3)||(MD===
4)){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);
if(P4){y1=BI[1];y2=BI[3];}else if(HN&&!HK){y1=BI[1];y2=y1+BL;}else if(HK&&!HN){y2=
BI[3];y1=y2-BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MD===1)||(
MD===2)){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1)===0x1);
if(P3){x1=BI[0];x2=BI[2];}else if(HL&&!HM){x1=BI[0];x2=x1+BU;}else if(HM&&!HL){x2=
BI[2];x1=x2-BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(
x1>=x2)||(y1>=y2);BU=x2-x1;BL=y2-y1;if(Ar.Ah2[0]<Ar.Ah1[0]){tmp=x1;x1=x2-1;x2=tmp-
1;}if(Ar.Ah2[1]<Ar.Ah1[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-
y1)===1)y2=y1;if(((this.U&0x100)===0x100)){this.Ek=[x1,y1];this.Et=[x2,y2];}else{
this.D5([x1,y1]);this.DN([x2,y2]);this.Em=Ar;}return[BU,BL];},Amn:function(aOffset
,ArZ){if(ArZ){this.Ek=A.aak(this.Ek,aOffset);this.Et=A.aak(this.Et,aOffset);}else{
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
aArg);this.__proto__=C.Ajp;},_className:"Core::LineView"};C.YQ={Kh:A.vw,Mw:A.vw,
Et:A.vw,Ek:A.vw,Asn:function(BI,Ahn){var Ar=A._NewObject(C.AB_,0);this.Em=null;Ar.
extent=this.GetExtent();Ar.A8=BI;Ar.Nv=Ahn;Ar.Ah1=this.Ek;Ar.Ah2=this.Et;Ar.Ay0=
this.Mw;Ar.Ay1=this.Kh;this.Em=Ar;},Atl:function(BI,MD){var B;var EM=this.Pu;var
Ar=(C.AB_.isPrototypeOf(B=this.Em)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[
1];var x2=Ar.extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=
x2-x1;var BL=y2-y1;if(!MD){var Ny=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];y1=
y1-Ar.A8[1];if(Ny[0]!==J0[0]){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var
P3=((EM&0x1)===0x1);if(!HL&&(P3||!HM))x1=((x1*J0[0])/Ny[0])|0;if(!HM&&(P3||!HL)){
x2=x2-Ar.A8[0];x2=((x2*J0[0])/Ny[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=x1+BI[
0];x2=x2+BI[2];if(!P3){if(HL&&!HM)x2=x1+BU;else if(!HL&&HM)x1=x2-BU;else{x1=x1+((((
x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];}if(Ny[
1]!==J0[1]){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===
0x2);if(!HN&&(P4||!HK))y1=((y1*J0[1])/Ny[1])|0;if(!HK&&(P4||!HN)){y2=y2-Ar.A8[1];
y2=((y2*J0[1])/Ny[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];
if(!P4){if(HN&&!HK)y2=y1+BL;else if(!HN&&HK)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2
)|0);y2=y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MD){case
3:{x1=BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=BI[1];y2=
y1+BL;}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MD===3)||(MD===4)){var
HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);if(P4){y1=
BI[1];y2=BI[3];}else if(HN&&!HK){y1=BI[1];y2=y1+BL;}else if(HK&&!HN){y2=BI[3];y1=
y2-BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MD===1)||(MD===2)
){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1)===0x1);if(P3){
x1=BI[0];x2=BI[2];}else if(HL&&!HM){x1=BI[0];x2=x1+BU;}else if(HM&&!HL){x2=BI[2];
x1=x2-BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(x1>=x2
)||(y1>=y2);BU=(x2-x1)-1;BL=(y2-y1)-1;var AhH=Ar.extent[0];var AhJ=Ar.extent[1];
var Afc=(Ar.extent[2]-AhH)-1;var Afb=(Ar.extent[3]-AhJ)-1;if(!Afc)Afc=1;if(!Afb)
Afb=1;if(((this.U&0x100)===0x100)){this.Ek=[x1+((((Ar.Ah1[0]-AhH)*BU)/Afc)|0),y1+((((
Ar.Ah1[1]-AhJ)*BL)/Afb)|0)];this.Et=[x1+((((Ar.Ah2[0]-AhH)*BU)/Afc)|0),y1+((((Ar.
Ah2[1]-AhJ)*BL)/Afb)|0)];this.Mw=[x1+((((Ar.Ay0[0]-AhH)*BU)/Afc)|0),y1+((((Ar.Ay0[
1]-AhJ)*BL)/Afb)|0)];this.Kh=[x1+((((Ar.Ay1[0]-AhH)*BU)/Afc)|0),y1+((((Ar.Ay1[1]-
AhJ)*BL)/Afb)|0)];}else{this.D5([x1+((((Ar.Ah1[0]-AhH)*BU)/Afc)|0),y1+((((Ar.Ah1[
1]-AhJ)*BL)/Afb)|0)]);this.DN([x1+((((Ar.Ah2[0]-AhH)*BU)/Afc)|0),y1+((((Ar.Ah2[1
]-AhJ)*BL)/Afb)|0)]);this.KA([x1+((((Ar.Ay0[0]-AhH)*BU)/Afc)|0),y1+((((Ar.Ay0[1]-
AhJ)*BL)/Afb)|0)]);this.KB([x1+((((Ar.Ay1[0]-AhH)*BU)/Afc)|0),y1+((((Ar.Ay1[1]-AhJ
)*BL)/Afb)|0)]);this.Em=Ar;}return[BU+1,BL+1];},Amn:function(aOffset,ArZ){if(ArZ
){this.Ek=A.aak(this.Ek,aOffset);this.Et=A.aak(this.Et,aOffset);this.Mw=A.aak(this.
Mw,aOffset);this.Kh=A.aak(this.Kh,aOffset);}else{this.D5(A.aak(this.Ek,aOffset));
this.DN(A.aak(this.Et,aOffset));this.KA(A.aak(this.Mw,aOffset));this.KB(A.aak(this.
Kh,aOffset));}},GetExtent:function(){if(!!this.Em&&this.Em.isEmpty)return BH;var
x1=this.Ek[0];var y1=this.Ek[1];var x2=this.Mw[0];var y2=this.Mw[1];if((((this.Kh[
0]!==x1)||(this.Et[1]!==y1))||(this.Et[0]!==x2))||(this.Kh[1]!==y2)){if(this.Et[
0]<x1)x1=this.Et[0];if(this.Mw[0]<x1)x1=this.Mw[0];if(this.Kh[0]<x1)x1=this.Kh[0
];if(this.Et[1]<y1)y1=this.Et[1];if(this.Mw[1]<y1)y1=this.Mw[1];if(this.Kh[1]<y1
)y1=this.Kh[1];if(this.Ek[0]>x2)x2=this.Ek[0];if(this.Et[0]>x2)x2=this.Et[0];if(
this.Kh[0]>x2)x2=this.Kh[0];if(this.Ek[1]>y2)y2=this.Ek[1];if(this.Et[1]>y2)y2=this.
Et[1];if(this.Kh[1]>y2)y2=this.Kh[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;
}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},KB:function(E){var B;
if(A.z8(E,this.Kh))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));this.Em=null;this.Kh=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},KA:function(
E){var B;if(A.z8(E,this.Mw))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());this.Em=null;this.Mw=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
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
this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}},AOT:function(KK){var Ho=
A.aan(4,A.vw,null);var P=0;var H9=3;var AZJ=false;var AZK=false;Ho.Set(0,this.Ek
);Ho.Set(1,this.Et);Ho.Set(2,this.Mw);Ho.Set(3,this.Kh);while(P<4){var Bc9=Ho.Get(
P)[0];var AJn=Ho.Get(P)[1];var Byn=Ho.Get(H9)[0];var A1J=Ho.Get(H9)[1];if(((AJn>
KK[1])!==(A1J>KK[1]))||((AJn<KK[1])!==(A1J<KK[1]))){var FY=((((Byn-Bc9)*(KK[1]-AJn
))/(A1J-AJn))|0)+Bc9;if(KK[0]>FY)AZJ=!AZJ;if(KK[0]<FY)AZK=!AZK;}H9=P;P=P+1;}return AZJ||
AZK;},BfA:function(){return((((this.Ek[0]===this.Kh[0])&&(this.Et[0]===this.Mw[0
]))&&(this.Ek[1]===this.Et[1]))&&(this.Mw[1]===this.Kh[1]))||((((this.Ek[0]===this.
Et[0])&&(this.Mw[0]===this.Kh[0]))&&(this.Ek[1]===this.Kh[1]))&&(this.Et[1]===this.
Mw[1]));},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.YQ;},
_className:"Core::QuadView"};C.EC={M:A.vx,Asn:function(BI,Ahn){var Ar=A._NewObject(
C.ApZ,0);Ar.extent=this.M;Ar.A8=BI;Ar.Nv=Ahn;this.Em=Ar;},Atl:function(BI,MD){var
B;var EM=this.Pu;var Ar=this.Em;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var J0=[BI[2]-BI[0],BI[3]-BI[1]];var BU=x2-x1;var BL=
y2-y1;if(!MD){var Ny=[(B=Ar.A8)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A8[0];y1=y1-Ar.A8[1];
if(Ny[0]!==J0[0]){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1
)===0x1);if(!HL&&(P3||!HM))x1=((x1*J0[0])/Ny[0])|0;if(!HM&&(P3||!HL)){x2=x2-Ar.A8[
0];x2=((x2*J0[0])/Ny[0])|0;x2=x2-J0[0];}else x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[
2];if(!P3){if(HL&&!HM)x2=x1+BU;else if(!HL&&HM)x1=x2-BU;else{x1=x1+((((x2-x1)-BU
)/2)|0);x2=x1+BU;}}}else{x2=x2-Ar.A8[2];x1=x1+BI[0];x2=x2+BI[2];}if(Ny[1]!==J0[1
]){var HN=((EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);if(
!HN&&(P4||!HK))y1=((y1*J0[1])/Ny[1])|0;if(!HK&&(P4||!HN)){y2=y2-Ar.A8[1];y2=((y2
*J0[1])/Ny[1])|0;y2=y2-J0[1];}else y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];if(!P4
){if(HN&&!HK)y2=y1+BL;else if(!HN&&HK)y1=y2-BL;else{y1=y1+((((y2-y1)-BL)/2)|0);y2=
y1+BL;}}}else{y2=y2-Ar.A8[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MD){case 3:{x1=
BI[0];x2=x1+BU;}break;case 4:{x2=BI[2];x1=x2-BU;}break;case 1:{y1=BI[1];y2=y1+BL;
}break;case 2:{y2=BI[3];y1=y2-BL;}break;default:;}if((MD===3)||(MD===4)){var HN=((
EM&0x10)===0x10);var HK=((EM&0x20)===0x20);var P4=((EM&0x2)===0x2);if(P4){y1=BI[
1];y2=BI[3];}else if(HN&&!HK){y1=BI[1];y2=y1+BL;}else if(HK&&!HN){y2=BI[3];y1=y2-
BL;}else{y1=BI[1]+((((BI[3]-BI[1])-BL)/2)|0);y2=y1+BL;}}if((MD===1)||(MD===2)){var
HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var P3=((EM&0x1)===0x1);if(P3){x1=BI[
0];x2=BI[2];}else if(HL&&!HM){x1=BI[0];x2=x1+BU;}else if(HM&&!HL){x2=BI[2];x1=x2-
BU;}else{x1=BI[0]+((((BI[2]-BI[0])-BU)/2)|0);x2=x1+BU;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.Em=Ar;}return[x2-x1,y2-y1];},Amn:function(aOffset,ArZ){if(ArZ)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Ac&&((this.U&0x1)===0x1
))this.Ac.Bg(this.M);this.Em=null;this.M=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000
)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}
,_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.EC;},_className:
"Core::RectView"};C.O={B8:null,B5:null,AIs:null,HP:null,Im:null,WF:null,AoI:null
,AY:null,GN:255,Init:function(aArg){this.Am();},J_:function(CW,aClip,aOffset,Ce,
aBlend){var B;Ce=((Ce+1)*this.GN)>>8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.
HP||(CW.Dj===this))this.A$u(CW,aClip,A.aak(aOffset,this.M.slice(0,2)),Ce,aBlend);
else{var BK=255|(255<<8)|(255<<16)|((Ce&0xFF)<<24);this.HP.Update();CW.A22(aClip
,this.HP,0,A.aam(this.M,aOffset),B$,BK,BK,BK,BK,aBlend);}},Xu:function(Dc,BG,N4,
Ab4,Ab9,Ab8){var B;var W=this.B5;var An$=null;var AD=BH;var J1=null;var AZ3=!!this.
WF&&(!!this.WF.FG||!!this.WF.B8);if(((B=A.kz(Dc,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;Dc=A.aal(Dc,this.M.slice(0,2));if(!!Ab9){W=Ab9;while(!!W&&(W.Ac!==this
))W=W.Ac;}while(!!W){if(((W.U&0x400)===0x400)&&!J1){J1=W.AG;while(!!J1&&!((J1.U&
0x200)===0x200))J1=J1.AG;if(!!J1)AD=A.kz(Dc,J1.GetExtent());else AD=BH;}if(J1===
W){J1=null;AD=BH;}if((((((W.U&0x8)===0x8)&&((W.U&0x10)===0x10))&&!((W.U&0x40000)===
0x40000))&&!((W.U&0x20000)===0x20000))&&(!((W.U&0x10000)===0x10000)||((this.Im.Dj===
W)&&!AZ3))){var extent=W.GetExtent();var AHV=Ab4;var AnV=null;if(AHV===W)AHV=null;
if(((W.U&0x400)===0x400)){if(!(((B=A.kz(extent,AD))[0]>=B[2])||(B[1]>=B[3])))AnV=
W.Xu(AD,BG,N4,AHV,Ab9,Ab8);}else if(!(((B=A.kz(extent,Dc))[0]>=B[2])||(B[1]>=B[3
]))||(Ab4===W))AnV=W.Xu(Dc,BG,N4,AHV,Ab9,Ab8);W=W.AG;if(!!AnV){if(!An$||((AnV.Atv<
An$.Atv)&&(AnV.Atv>=0)))An$=AnV;if(!AnV.Atv)W=null;}}else W=W.AG;Ab9=null;}return An$;
},Atb:function(Dc){var B;var F;var W=this.B8;var MG=BH;var AyU=true;var result=(
Dc=F=A.aal(Dc,this.M.slice(0,2)),F);while(!!W){if(((W.U&0x200)===0x200)){var AyT=(
C.Y.isPrototypeOf(W)?W:null);MG=A.kz(Dc,AyT.M);AyU=((AyT.U&0x1)===0x1);}if(((W.U&
0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyU){var AD=A.kz(W.GetExtent(),MG);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atb(AD));}}else{var AD=A.
kz(W.GetExtent(),Dc);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.Atb(
AD));}}W=W.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},C4:function(
Ahp,AnB){var B;var ZP=this.U;C.EC.C4.call(this,Ahp,AnB);var AkI=this.U^ZP;if(!!this.
AY&&((AkI&0x40)===0x40)){if(((this.U&0x40)===0x40))this.AY.C4(0x40,0x0);else this.
AY.C4(0x0,0x40);}if(!!this.Im&&((AkI&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((
this.Im.Dj.U&0x14)===0x14))this.Im.Dj.C4(0x40,0x0);else this.Im.Dj.C4(0x0,0x40);
}if(!!AkI){this.U=this.U|0x8000;A.ow([this,this.H$],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var Ak5=[(B=this.M)[2]-B[0],B[3]-B[1]];var AIz=[E[2]-E[
0],E[3]-E[1]];var AoP=!A.z8(Ak5,AIz);if(AoP&&!!this.HP){this.HP.Aqs(AIz);A.vv(this
,0);A.vv(this.HP,0);}C.EC.G.call(this,E);if((AoP&&(Ak5[0]>0))&&(Ak5[1]>0)){var A8=[
].concat(B$,Ak5);var W=this.B8;while(!!W){if((!W.Em&&(W.Pu!==0x14))&&!((W.U&0x400
)===0x400))W.Asn(A8,null);W=W.Af;}}if(AoP){this.U=this.U|0x5000;A.ow([this,this.
H$],this);}},A0Z:function(CK){var Ban=(C.KeyEvent.isPrototypeOf(CK)?CK:null);var
DZ=this.AIs;if(!Ban)return null;while(!!DZ&&(!DZ.Bw||!DZ.GI(Ban)))DZ=DZ.Af;return DZ;
},Bx9:function(H){if(!!this.HP){this.HP.Dj=this;var AD=A.aal(this.Atb(A.aam(this.
HP.Qh,this.M.slice(0,2))),this.M.slice(0,2));this.HP.AtQ(AD,AD,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A$u(this.HP,AD,B$,255,true);this.HP.Dj=null;}
},A$u:function(CW,aClip,aOffset,Ce,aBlend){var B;var W=this.B8;var MG=BH;var AyU=
true;this.Bex(CW,aClip,aOffset,Ce,aBlend);while(!!W){if(((W.U&0x200)===0x200)){var
AyT=(C.Y.isPrototypeOf(W)?W:null);MG=A.kz(aClip,A.aam(AyT.M,aOffset));AyU=((AyT.
U&0x1)===0x1);}if(((W.U&0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyU){var AD=A.
kz(A.aam(W.GetExtent(),aOffset),MG);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW
,AD,aOffset,Ce,aBlend);}}else{var AD=A.kz(A.aam(W.GetExtent(),aOffset),aClip);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J_(CW,AD,aOffset,Ce,aBlend);}}W=W.Af;}this.BeA(
CW,aClip,aOffset,Ce,aBlend);},Bca:function(){var B;var AZz=((this.U&0x1000)===0x1000
);var AhO=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var ZD=false;var Acp=BH;var KM=BH;var
ZE=B$;var Asj=0;var Ask=0;var Asi=0;var PX=0;var W=this.B5;var J1=null;var AkX=null;
while(!!W){if(((W.U&0x800)===0x800)){ZD=true;W.U=W.U&~0x800;}if(ZD&&((W.U&0x200)===
0x200)){ZD=false;if(!!(C.Y.isPrototypeOf(W)?W:null).Af8)W.U=W.U|0x1000;}W=W.AG;}
ZD=false;W=this.B8;if(AZz){this.U=this.U&~0x1000;AZz=!((AhO[0]>=AhO[2])||(AhO[1]>=
AhO[3]));}this.U=this.U|0x2000;while(!!W){if(!AkX&&(Asi!==PX)){var AcM=W;var AIV=
0;var Azd=Acp[2]-Acp[0];var Axz=Acp[3]-Acp[1];var AHJ=0;var Ao1=B$;do if(((AcM.U&
0x200)===0x200))AcM=null;else if(((AcM.U&0x401)===0x401)){Ao1=[(B=AcM.GetExtent(
))[2]-B[0],B[3]-B[1]];if((PX===3)||(PX===4))Azd=Azd-Ao1[0];if((PX===1)||(PX===2)
)Axz=Axz-Ao1[1];if(!AkX||((Azd>=0)&&(Axz>=0))){AkX=AcM;AcM=AcM.Af;if((PX===3)||(
PX===4)){Azd=Azd-Asj;if(Ao1[1]>AIV)AIV=Ao1[1];}if((PX===1)||(PX===2)){Axz=Axz-Ask;
if(Ao1[0]>AHJ)AHJ=Ao1[0];}}else AcM=null;}else AcM=AcM.Af;while(!!AcM);if(!AkX)AkX=
J1;KM=Acp;switch(Asi){case 9:case 11:KM=[].concat(KM.slice(0,3),KM[1]+AIV);break;
case 10:case 12:KM=A.aaS(KM,KM[3]-AIV);break;case 5:case 7:KM=A.aaQ(KM,KM[0]+AHJ
);break;case 6:case 8:KM=[].concat(KM[2]-AHJ,KM.slice(1,4));break;default:;}}if(((
W.U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nv!==J1))W.Em=null;if((!W.Em&&ZD)&&((W.Pu!==
0x14)||!!PX))W.Asn(KM,J1);}if(!!W.Em){if(AZz&&!((W.U&0x400)===0x400))W.Atl(AhO,0
);if(ZD&&((W.U&0x400)===0x400)){var CZ=W.Atl(A.aam(KM,ZE),PX);if(((W.U&0x1)===0x1
)){var Bo=B$;switch(PX){case 3:Bo=[CZ[0]+Asj,Bo[1]];break;case 4:Bo=[-CZ[0]-Asj,
Bo[1]];break;case 1:Bo=[Bo[0],CZ[1]+Ask];break;case 2:Bo=[Bo[0],-CZ[1]-Ask];break;
default:;}ZE=A.aak(ZE,Bo);}}}if(((W.U&0x200)===0x200)){if(ZD)A.ow(J1.Ej,J1);ZD=((
W.U&0x1000)===0x1000);J1=(C.Y.isPrototypeOf(W)?W:null);if(ZD){W.U=W.U&~0x1000;Asi=
J1.Af8;PX=Asi;Acp=A.aam(J1.M,J1.Bp);KM=Acp;ZE=B$;Asj=J1.Space+J1.ASi;Ask=J1.Space;
ZD=!((Acp[0]>=Acp[2])||(Acp[1]>=Acp[3]));AkX=null;switch(Asi){case 9:case 10:PX=
3;break;case 11:case 12:PX=4;break;case 5:case 6:PX=1;break;case 7:case 8:PX=2;break;
default:;}}if(ZD)this.Bg(J1.M);}if(W===AkX){switch(Asi){case 9:case 11:ZE=[0,(ZE[
1]+(KM[3]-KM[1]))+Ask];break;case 10:case 12:ZE=[0,(ZE[1]-(KM[3]-KM[1]))-Ask];break;
case 5:case 7:ZE=[(ZE[0]+(KM[2]-KM[0]))+Asj,0];break;case 6:case 8:ZE=[(ZE[0]-(KM[
2]-KM[0]))-Asj,0];break;default:;}AkX=null;}W=W.Af;}if(ZD)A.ow(J1.Ej,J1);this.U=
this.U&~0x2000;this.Bf([AhO[2]-AhO[0],AhO[3]-AhO[1]]);},H$:function(H){var B;var
Byg=((this.U&0x1000)===0x1000);if(((this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;
this.Bca();}if(((this.U&0x8000)===0x8000)||Byg){this.U=this.U&~0x8000;this.Ag(this.
U);}},A$:function(E){var B;if(!!E&&(E.Ac!==this))throw new Error(EV);if(!!E&&!((
E.U&0x14)===0x14))E=null;if(!!E&&((E.U&0x10000)===0x10000))E=null;if(E===this.AY
)return;if(!!this.AY)this.AY.C4(0x0,0x60);this.AY=E;if(!!E){if(((this.U&0x40)===
0x40))E.C4(0x60,0x0);else E.C4(0x20,0x0);}},A9N:function(An){this.A$(An);},AP5:function(
){return!!this.HP;},Aqm:function(E){var B;if(!!this.HP===E)return;if(E){this.HP=
A._NewObject(A.Graphics.Canvas,0);this.HP.Aqs([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
HP.ACz=[this,this.Bx9];}else{this.HP.ACz=null;this.HP.Aqs(B$);this.HP=null;}if(!
!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.vv(this,0);},A5C:function(){
var B;return((this.U&0x10)===0x10);},Ap:function(E){if(E)this.C4(0x10,0x0);else this.
C4(0x0,0x10);},DD:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GN)return;
this.GN=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},AXB:function(An
){this.DD(An);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400);}
,Bie:function(E){if(E)this.C4(0x2,0x0);else this.C4(0x0,0x2);},E$:function(){var
B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(
0x0,0x1);},BeA:function(CW,aClip,aOffset,Ce,aBlend){},Bex:function(CW,aClip,aOffset
,Ce,aBlend){},GetMinimalSize:function(){return B$;},ASp:function(Ii,N3,Wp,SA,SB,
Aho,OT,Q2,Lm,Lk,Ll){var B;if(!this.Im){this.AjU(Ii,N3,Wp,SA,SB,null,null,Lm,Lk,Ll
);return;}var Ak4=this.Im;var KT=Ak4.Af;if(((Ii.U&0x10000)===0x10000)&&(this.Im.
Dj!==Ii))throw new Error(GT);var Acw=A._NewObject(C.ALG,0);var Q8=Ak4.Q8;var Rf=
null;var L_=null;if(!!KT){Rf=KT.Rf;L_=KT.L_;}if(!!KT&&!!Ak4.AoH)Rf=Ak4.AoH;if(!!
KT&&!!OT)L_=OT;if(!!Aho)Q8=Aho;if(!N3)N3=A._GetAutoObject(A.abm.AvV);if(!Wp)Wp=N3;
if(!SB)SB=SA;if(!SA)SA=SB;Acw.Q8=Wp;Acw.L_=SA;Acw.Rf=SB;Acw.AoH=Q2;Acw.Dj=Ii;Acw.
Af=this.Im.Af;this.Im.Af=null;this.Im=Acw;if(this.AY===Ii)this.A$(null);Ak4.Dj.C4(
0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ii.U&0x4)===0x4))Ii.C4(0x10040,0x0);else
Ii.C4(0x10000,0x0);if(!!L_){this.NH(KT.Dj,L_.Add(),null,null,Ll);this.NH(Ak4.Dj,
Q8.RE(),null,null,true);this.NH(Acw.Dj,N3.RF(),Lm,Lk,true);}else if(!!Rf){this.NH(
KT.Dj,Rf.Ade(),null,null,Ll);this.NH(Ak4.Dj,Q8.RE(),null,null,true);this.NH(Acw.
Dj,N3.RF(),Lm,Lk,true);}else if(!!Q8){this.NH(Ak4.Dj,Q8.RE(),null,null,Ll);this.
NH(Acw.Dj,N3.RF(),Lm,Lk,true);}else this.NH(Acw.Dj,N3.RF(),Lm,Lk,Ll);},Apn:function(
Ii,Aho,OT,Q2,Lm,Lk,Ll){var B;if(!this.Im)return;if(!Ii)return;var Ko=this.Im;var
KT=this.Im.Af;var AsE=null;while((!!Ko&&(Ko.Dj!==Ii))&&!!Ko.Af){AsE=Ko;Ko=KT;KT=
Ko.Af;}if(!Ko||(Ko.Dj!==Ii))throw new Error(Jt);if(!AsE){this.Im=KT;Ko.Af=null;}
else{AsE.Af=KT;Ko.Af=null;}Ko.Dj.C4(0x0,0x10040);if(((((this.U&0x40)===0x40)&&!!
KT)&&!AsE)&&((KT.Dj.U&0x4)===0x4))KT.Dj.C4(0x40,0x0);var Q8=Ko.Q8;var Rf=null;var
L_=null;if(!!KT)Rf=KT.Rf;if(!!KT&&!!Ko.AoH)Rf=Ko.AoH;if(!!KT&&!!Q2)Rf=Q2;if(!!AsE&&
!!KT)L_=KT.L_;if((!!AsE&&!!KT)&&!!OT)L_=OT;if(!!Aho)Q8=Aho;if(!!L_){this.NH(KT.Dj
,L_.Add(),null,null,Ll);this.NH(Ko.Dj,Q8.RE(),Lm,Lk,true);}else if(!!Rf){this.NH(
KT.Dj,Rf.Ade(),null,null,Ll);this.NH(Ko.Dj,Q8.RE(),Lm,Lk,true);}else this.NH(Ko.
Dj,Q8.RE(),Lm,Lk,Ll);},AjU:function(Ii,N3,Wp,SA,SB,OT,Q2,Lm,Lk,Ll){var B;if(!Ii)
return;if(!!this.Im&&(this.Im.Dj===Ii)){this.ASp(Ii,N3,Wp,SA,SB,null,OT,Q2,Lm,Lk
,Ll);return;}if(((Ii.U&0x10000)===0x10000))throw new Error(GT);var Ko=A._NewObject(
C.ALG,0);if(!!this.Im&&!this.Im.L_){if(!Q2)Q2=OT;if(!OT)OT=Q2;}var L_=null;if(!!
this.Im)L_=this.Im.L_;if(!!this.Im&&!!OT)L_=OT;if(!N3)N3=A._GetAutoObject(A.abm.
AvV);if(!Wp)Wp=N3;if(!SB)SB=SA;if(!SA)SA=SB;Ko.Q8=Wp;Ko.L_=SA;Ko.Rf=SB;Ko.AoH=Q2;
if(this.AY===Ii)this.A$(null);if(!!this.Im)this.Im.Dj.C4(0x0,0x40);if(((this.U&0x40
)===0x40)&&((Ii.U&0x4)===0x4))Ii.C4(0x10040,0x0);else Ii.C4(0x10000,0x0);Ko.Dj=Ii;
Ko.Af=this.Im;this.Im=Ko;if(!!L_){this.NH(this.Im.Af.Dj,L_.Add(),null,null,Ll);this.
NH(Ii,N3.RF(),Lm,Lk,true);}else this.NH(Ii,N3.RF(),Lm,Lk,Ll);},A3_:function(Ae){
var B;return(B=Ae)&&((this.U&B)===B);},A4K:function(KK){var tmp=this;while(!!tmp
){KK=A.aaj(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},Bfv:function(KK){var tmp=
this;while(!!tmp){KK=A.aak(KK,tmp.M.slice(0,2));tmp=tmp.Ac;}return KK;},DispatchEvent:
function(CK){var B;var W=this.AY;var B9=(C.O.isPrototypeOf(W)?W:null);var Gm=null;
var AZ3=!!this.WF&&(!!this.WF.FG||!!this.WF.B8);if(!!W&&((((W.U&0x10000)===0x10000
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
Ae){},BfM:function(){this.U=this.U|0x4000;A.ow([this,this.H$],this);},Am:function(
){this.U=this.U|0x8000;A.ow([this,this.H$],this);},Bg:function(Dc){var B;var B9=
this;while(!!B9&&!((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))){var ZB=B9.HP;if(!B9.Ac&&(B9!==
this)){B9.Bg(Dc);return;}if(!!ZB){var Bv4=ZB.Qh;ZB.Qh=A.vS(ZB.Qh,Dc);if(!A.z9(Bv4
,ZB.Qh)){A.vv(B9,0);A.vv(ZB,0);}}if(!((B9.U&0x1)===0x1))return;Dc=A.kz(A.aam(Dc,
B9.M.slice(0,2)),B9.M);B9=B9.Ac;}},RO:function(Ah,GD,aFilter){var B;if(!Ah||(Ah.
Ac!==this))return null;var Afs=A.zT(Ah.GetExtent());var W=Ah;var AYL=null;var A_8=
0;var IS=0x10000;var AIR;if(((aFilter&0x10000)===0x10000))IS=0x0;var top=((GD===
4)||(GD===1))||(GD===6);var bottom=((GD===5)||(GD===3))||(GD===8);var left=((GD===
2)||(GD===1))||(GD===3);var right=((GD===7)||(GD===6))||(GD===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!W){W=W.AG;if(!W)W=this.B5;if(W===Ah)W=null;
if((!!W&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IS||!((B=IS)&&((W.U&B)===B
))))for(AIR=0;AIR<2;AIR++){var AM=W.GetExtent();var s=[AM[2]-AM[0],AM[3]-AM[1]];
if(!!!AIR){if((left&&(s[0]>s[1]))&&(AM[2]<Afs[0]))AM=[].concat(AM[2]-s[1],AM.slice(
1,4));if((right&&(s[0]>s[1]))&&(AM[0]>Afs[0]))AM=A.aaQ(AM,AM[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AM[3]<Afs[1]))AM=A.aaS(AM,AM[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AM[
1]>Afs[1]))AM=[].concat(AM.slice(0,3),AM[1]+s[0]);}var Bo=A.aaj(A.zT(AM),Afs);var
Q4=Bo;if(Q4[0]<0)Q4=[-Q4[0],Q4[1]];if(Q4[1]<0)Q4=[Q4[0],-Q4[1]];if(((((!left||(Bo[
0]<=-Q4[1]))&&(!right||(Bo[0]>=Q4[1])))&&(!top||(Bo[1]<=-Q4[0])))&&(!bottom||(Bo[
1]>=Q4[0])))&&((Q4[0]>0)||(Q4[1]>0))){var Q_=Bo[0];var Q$=Bo[1];var Jc=Math.sqrt((
Q_*Q_)+(Q$*Q$));var AIq=0;if(!left&&!right)AIq=Jc/Q4[1];if(!top&&!bottom)AIq=Jc/
Q4[0];Jc=(Jc*AIq)*AIq;if((Jc<A_8)||!AYL){A_8=Jc;AYL=W;}}}}return AYL;},Apt:function(
Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B5;var IS=0x10000;
if(((aFilter&0x10000)===0x10000))IS=0x0;if(!!Ah)W=Ah.AG;while(!!W){if((!aFilter||((
B=aFilter)&&((W.U&B)===B)))&&(!IS||!((B=IS)&&((W.U&B)===B))))return W;W=W.AG;}return null;
},U9:function(Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B8;
var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;if(!!Ah)W=Ah.Af;while(!!W
){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&(!IS||!((B=IS)&&((W.U&B)===B))))return W;
W=W.Af;}return null;},AAX:function(Ah,aFilter){var B;if(!Ah||(Ah.Ac!==this))return null;
var Ak2=Ah.Af;var Ale=Ah.AG;var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;
while(!!Ak2||!!Ale){if((!!Ak2&&(!aFilter||((B=aFilter)&&((Ak2.U&B)===B))))&&(!IS||
!((B=IS)&&((Ak2.U&B)===B))))return Ak2;if((!!Ale&&(!aFilter||((B=aFilter)&&((Ale.
U&B)===B))))&&(!IS||!((B=IS)&&((Ale.U&B)===B))))return Ale;if(!!Ak2)Ak2=Ak2.Af;if(
!!Ale)Ale=Ale.AG;}return null;},C_:function(aFilter){var B;var W=this.B8;var AD=
BH;var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;while(!!W){if((!((W.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IS||!((B=IS)&&((W.
U&B)===B))))AD=A.vS(AD,W.GetExtent());W=W.Af;}return AD;},NH:function(Km,FE,Lm,Lk
,Ll){var B;if(!Km)return;if(!FE)throw new Error(IL);if((!!FE.O||!!FE.Ac)||!!FE.O4
)throw new Error(OK);if(!!Km.Ac&&(Km.Ac!==this))throw new Error(PJ);if(!this.WF)
this.WF=A._NewObject(C.ASu,0);FE.Ac=this;FE.O=Km;FE.AIC=Lk;FE.A0n=Lm;if(!!Km.AoI
)Km.AoI.O4.BkP(Km.AoI);Km.AoI=FE;Km.U=Km.U|0x20000;if((Ll&&!!this.WF.B5)&&!this.
WF.B5.AOQ())(A.abm.AAS.isPrototypeOf(B=this.WF.B5)?B:null).A11(FE);else{var O4=A.
_NewObject(A.abm.AAS,0);O4.A11(FE);this.WF.A7T(O4,false);}},AgR:function(Ah,JW){
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
Ah)throw new Error(LW);if(Ah.Ac!==this)throw new Error(CJ);if((((Ah.U&0x401)===0x401
)&&!!Ah.AG)&&!!Ah.Em){Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H$],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H$],this);}Ah.Em=null;if(this.AY===Ah)this.A$(this.AAX(
Ah,0x14));if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)Ah.Af.AG=Ah.AG;if(this.B8===Ah)this.
B8=Ah.Af;if(this.B5===Ah)this.B5=Ah.AG;Ah.Ac=null;Ah.Af=null;Ah.AG=null;if(((Ah.
U&0x1)===0x1))this.Bg(Ah.GetExtent());},AJ1:function(Ah,JW){var B;if(!Ah)throw new
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
U|0x4000;A.ow([this,this.H$],this);}},A5E:function(){return this.AY;},AuN:function(
){return this.GN;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.O;this.U=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.EC._Mark.call(this,D
);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B5)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
HP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AoI)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Rc:null,JA:null,Fc:A.aan(10,null,null),Ar8:null,Ahz:null,
Azy:0,H6:0,L4:A.aan(10,0,null),AHP:A.aan(10,A.vx,null),WE:A.aan(10,0,null),Afa:A.
aan(10,A.vw,null),Asb:A.aan(10,0,null),Ahy:A.aan(10,A.vw,null),WD:A.aan(10,A.vw,
null),Q7:A.aan(10,A.vw,null),Acg:A.aan(10,A.vw,null),EF:0,AId:0,AIc:0,Oi:A.aan(4
,0,null),J6:A.aan(4,A.vx,null),J3:0,Ayh:0,Asq:0,Ax8:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},Ib:function(){return this;},J_:function(CW
,aClip,aOffset,Ce,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CW.AtQ(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);},C4:
function(Ahp,AnB){var B;C.O.C4.call(this,Ahp,AnB);if(!this.Ac&&(((Ahp&0x1)===0x1
)||((AnB&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ac&&(((
Ahp&0x2)===0x2)||((AnB&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A$:function(E){if((E!==null)||!E)C.O.A$.call(this,E);},Aqm:function(E){var B;var
Bv2=this.HP;C.O.Aqm.call(this,E);if(((Bv2!==this.HP)&&!this.Ac)&&((this.U&0x1)===
0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DD:function(E){var B;var BP=this.
GN;C.O.DD.call(this,E);if(((BP!==this.GN)&&!this.Ac)&&((this.U&0x1)===0x1))this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CK){if(!!CK){CK.
Auo=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=null;if(!!this.JA){Gm=this.JA.Dj.
DispatchEvent(CK);if(!Gm)Gm=this.GI(CK);if(!Gm)Gm=this.A0Z(CK);this.H6=0;return Gm;
}Gm=C.O.DispatchEvent.call(this,CK);this.H6=0;return Gm;},BroadcastEvent:function(
CK,aFilter){if(!!CK){CK.Auo=!!this.H6;if(!!this.H6)CK.Bu=this.H6;}var Gm=C.O.BroadcastEvent.
call(this,CK,aFilter);this.H6=0;return Gm;},Bg:function(Dc){var B;if(this.Azy>0)
throw new Error(OM);if(!!this.HP&&!this.Ac){if(((B=this.HP.Qh)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.HP,0);}this.HP.Qh=A.vS(this.HP.Qh,Dc);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)Dc=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ac){C.O.Bg.call(this,Dc);return;}Dc=A.kz(A.aam(Dc,this.M.slice(0
,2)),this.M);if((Dc[0]>=Dc[2])||(Dc[1]>=Dc[3]))return;var P;for(P=0;P<this.J3;P=
P+1)if(!(((B=A.kz(this.J6.Get(P),Dc))[0]>=B[2])||(B[1]>=B[3]))){this.J6.Set(P,A.
vS(this.J6.Get(P),Dc));this.Oi.Set(P,A.zS(this.J6.Get(P)));return;}if(this.J3<3){
this.J6.Set(this.J3,Dc);this.Oi.Set(this.J3,A.zS(Dc));this.J3=this.J3+1;return;}
var H9;var Rb;var Ayg=0;var Ayi=0;var A_7=2147483647;this.J6.Set(this.J3,Dc);this.
Oi.Set(this.J3,A.zS(Dc));for(H9=0;H9<=this.J3;H9=H9+1)for(Rb=H9+1;Rb<=this.J3;Rb=
Rb+1){var AJf=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Rb)));var BbO=((AJf<<8)/(this.
Oi.Get(H9)+this.Oi.Get(Rb)))|0;if(BbO<A_7){A_7=BbO;Ayg=H9;Ayi=Rb;}}this.J6.Set(Ayg
,A.vS(this.J6.Get(Ayg),this.J6.Get(Ayi)));this.Oi.Set(Ayg,A.zS(this.J6.Get(Ayg))
);if(Ayi!==this.J3){this.J6.Set(Ayi,this.J6.Get(this.J3));this.Oi.Set(Ayi,this.Oi.
Get(this.J3));}},BuJ:function(){var Ls=A._NewObject(C.App,0);Ls.Auo=!!this.H6;if(
!!this.H6)Ls.Bu=this.H6;return Ls;},AnT:function(){var Ls=A._NewObject(C.Adg,0);
Ls.Auo=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},Asa:function(){var Ls=A.
_NewObject(C.Atr,0);Ls.Auo=!!this.H6;if(!!this.H6)Ls.Bu=this.H6;return Ls;},BuO:
function(H){var P;var An$=false;for(P=0;P<10;P=P+1)if(!!this.Fc.Get(P)){var pos=
this.Q7.Get(P);var B9=this.Fc.Get(P).Ac;while(!!B9&&(B9!==this)){pos=A.aaj(pos,B9.
M.slice(0,2));B9=B9.Ac;}if(!B9&&(this.Fc.Get(P)!==this)){var tmp=this.Fc.Get(P);
this.EF=P;this.Fc.Set(P,null);tmp.GI(this.AnT().InitializeUp(P,this.Ahy.Get(P),this.
Afa.Get(P),this.WE.Get(P),this.L4.Get(P)+1,this.WD.Get(P),false,this.Q7.Get(P),this.
Acg.Get(P)));this.BroadcastEvent(this.Asa().InitializeUp(P,this.L4.Get(P)+1,false
,tmp,this.Q7.Get(P)),0x18);}else{this.WE.Set(P,(this.Ahz.Bu-this.Asb.Get(P))|0);
if(this.WE.Get(P)<10)this.WE.Set(P,10);this.EF=P;this.Fc.Get(P).GI(this.AnT().InitializeHold(
P,pos,this.Afa.Get(P),this.WE.Get(P),this.L4.Get(P)+1,this.WD.Get(P),this.Q7.Get(
P),this.Acg.Get(P)));An$=true;}}if(!An$)this.Ahz.Ap(false);},GetFPS:function(){var
ticksCount=0;var A$I=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AId&&(
ticksCount>this.AId))A$I=((this.AIc*1000)/((ticksCount-this.AId)|0))|0;this.AIc=
0;this.AId=ticksCount;return A$I;},Update:function(){var B;if(!this.Ar8)this.Ar8=
A._NewObject(A.Graphics.Canvas,0);this.Ar8.Aqs([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Ar8.Update();return this.UpdateGE20(this.Ar8);},UpdateGE20:function(CW){if(!this.
BeginUpdate())return BH;var AfC=this.UpdateCanvas(CW,B$);this.EndUpdate();return AfC;
},EndUpdate:function(){if(this.J3>0){this.AIc=this.AIc+1;this.J3=0;}},UpdateCanvas:
function(CW,aOffset){var B;var AfC=BH;var Bur=[].concat(aOffset,A.aak(CW.FrameSize
,aOffset));var P;var H9=this.J3;this.Azy=this.Azy+1;CW.Dj=this;for(P=0;(P<H9)&&(
P<4);P=P+1)if(this.Oi.Get(P)>0){this.J_(CW,A.aal(this.J6.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);AfC=A.vS(AfC,A.kz(Bur,this.J6.Get(P)));}else H9=H9+1;CW.
Dj=null;this.Azy=this.Azy-1;if(!((AfC[0]>=AfC[2])||(AfC[1]>=AfC[3])))return A.aal(
AfC,aOffset);else return AfC;},GetUpdateRegion:function(AG8){var P;var H9=this.J3;
if(AG8<0)return BH;for(P=0;(P<H9)&&(P<4);P=P+1)if(!this.Oi.Get(P)){H9=H9+1;AG8=AG8+
1;}else if(P===AG8)return this.J6.Get(P);return BH;},BeginUpdate:function(){var B;
var P;if(!!this.J3&&!A.z9(this.J6.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
BcP=A.aan(3,A.vx,null);var BcO=this.J3;for(P=0;P<BcO;P++)BcP.Set(P,this.J6.Get(P
));for(P=0;P<BcO;P++){var Bb7=A.aam(BcP.Get(P),this.M.slice(0,2));var Bb8=this.Atb(
Bb7);if(!A.z9(Bb7,Bb8))this.Bg(A.aal(Bb8,this.M.slice(0,2)));}}var H9;var Rb;for(
H9=0;H9<(this.J3-1);H9++)if(this.Oi.Get(H9)>0)for(Rb=H9+1;Rb<this.J3;Rb++)if(this.
Oi.Get(Rb)>0){var AJf=A.zS(A.vS(this.J6.Get(H9),this.J6.Get(Rb)));if(((AJf-this.
Oi.Get(H9))-this.Oi.Get(Rb))<0){this.J6.Set(H9,A.vS(this.J6.Get(H9),this.J6.Get(
Rb)));this.Oi.Set(H9,AJf);this.Oi.Set(Rb,0);}}for(P=this.J3-1;P>=0;P--)if(!this.
Oi.Get(P))this.J3=this.J3-1;return this.J3;},DoesNeedUpdate:function(){if(this.J3>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B$,aSize
));if(this.Ax8)this.U=this.U|0x60;else this.U=this.U|0x20;this.Bg(this.M);return this;
},SetRootFocus:function(AYa){if(AYa===this.Ax8)return false;this.Ax8=AYa;if(!AYa
){if(!!this.JA)this.JA.Dj.C4(0x0,0x40);else this.C4(0x0,0x40);}else if(!!this.JA
)this.JA.Dj.C4(0x40,0x0);else this.C4(0x40,0x0);return true;},SetUserInputTimestamp:
function(PO){this.H6=PO;},DriveKeyboardHitting:function(Kl,Axf,Sy){var B;var A00=
!!this.Rc;if(!!this.Rc&&((!Sy||(this.Ayh!==Kl))||(this.Asq!==Axf))){var Ls=null;
var W=(C.Cd.isPrototypeOf(B=this.Rc)?B:null);var DZ=(C.BR.isPrototypeOf(B=this.Rc
)?B:null);if(!!this.Ayh)Ls=A._NewObject(C.KeyEvent,0).Initialize(this.Ayh,false);
if(this.Asq!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(this.Asq,false);if(
!!DZ)DZ.GI(Ls);else if(!!W)W.GI(Ls);this.Ayh=0;this.Asq=0x00;this.Rc=null;}if(!!
this.Rc){var Ls=null;var W=(C.Cd.isPrototypeOf(B=this.Rc)?B:null);var DZ=(C.BR.isPrototypeOf(
B=this.Rc)?B:null);if(!!Kl)Ls=A._NewObject(C.KeyEvent,0).Initialize(Kl,true);if(
this.Asq!==0x00)Ls=A._NewObject(C.KeyEvent,0).Initialize2(Axf,true);if(!!DZ)DZ.GI(
Ls);else if(!!W)W.GI(Ls);}if(!this.Rc&&Sy){if(!!Kl)this.Rc=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kl,true));if(Axf!==0x00)this.Rc=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Axf,true));if(!(C.BR.isPrototypeOf(B=this.
Rc)?B:null)&&!(C.Cd.isPrototypeOf(B=this.Rc)?B:null))this.Rc=null;this.Ayh=Kl;this.
Asq=Axf;A00=A00||!!this.Rc;}this.H6=0;return A00;},DriveCursorMovement:function(
Fo){return this.DriveMultiTouchMovement(this.EF,Fo);},DriveMultiTouchMovement:function(
BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var Ff=A.aaj(Fo,this.Q7.Get(BG
));this.Q7.Set(BG,Fo);if(!this.Fc.Get(BG)||A.z8(Ff,B$)){this.H6=0;return false;}
var pos=Fo;var B9=this.Fc.Get(BG).Ac;while(!!B9&&(B9!==this)){pos=A.aaj(pos,B9.M.
slice(0,2));B9=B9.Ac;}if(!B9&&(this.Fc.Get(BG)!==this)){var tmp=this.Fc.Get(BG);
this.EF=BG;this.Fc.Set(BG,null);tmp.GI(this.AnT().InitializeUp(BG,this.Ahy.Get(BG
),this.Afa.Get(BG),this.WE.Get(BG),this.L4.Get(BG)+1,this.WD.Get(BG),false,this.
Q7.Get(BG),this.Acg.Get(BG)));this.BroadcastEvent(this.Asa().InitializeUp(BG,this.
L4.Get(BG)+1,false,tmp,Fo),0x18);}else{this.Ahy.Set(BG,pos);this.EF=BG;this.Fc.Get(
BG).GI(this.BuJ().Initialize(BG,pos,this.Afa.Get(BG),Ff,this.WE.Get(BG),this.L4.
Get(BG)+1,this.WD.Get(BG),Fo,this.Acg.Get(BG)));}this.H6=0;return true;},DriveCursorHitting:
function(Sy,BG,Fo){return this.DriveMultiTouchHitting(Sy,BG,Fo);},DriveMultiTouchHitting:
function(Sy,BG,Fo){if((BG<0)||(BG>9)){this.H6=0;return false;}var ticksCount=this.
H6;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var Bxz=this.H6;this.
DriveMultiTouchMovement(BG,Fo);Fo=this.Q7.Get(BG);this.H6=Bxz;if(Sy)this.Acg.Set(
BG,Fo);if(Sy&&!this.Fc.Get(BG)){var Jz;var pos=Fo;if(A.vt(this.AHP.Get(BG),Fo)&&((
ticksCount-this.Asb.Get(BG))<=250))this.L4.Set(BG,this.L4.Get(BG)+1);else this.L4.
Set(BG,0);this.AHP.Set(BG,A.aam(Ne,Fo));this.Asb.Set(BG,ticksCount);if(!!this.JA
)Jz=this.Xu(A.aam(Ne,Fo),BG,this.L4.Get(BG)+1,this.JA.Dj,null,0x0);else Jz=this.
Xu(A.aam(Ne,Fo),BG,this.L4.Get(BG)+1,null,null,0x0);if(!!Jz){this.BroadcastEvent(
this.Asa().InitializeDown(BG,this.L4.Get(BG)+1,false,Jz.Cd,Fo),0x18);this.Fc.Set(
BG,Jz.Cd);this.WD.Set(BG,Jz.Dz);}else{this.Fc.Set(BG,null);this.WD.Set(BG,B$);this.
H6=0;return false;}var B9=Jz.Cd.Ac;while(!!B9&&(B9!==this)){pos=A.aaj(pos,B9.M.slice(
0,2));B9=B9.Ac;}this.Afa.Set(BG,pos);this.Ahy.Set(BG,pos);this.WE.Set(BG,0);this.
Ahz.Ap(true);this.EF=BG;this.Fc.Get(BG).GI(this.AnT().InitializeDown(BG,pos,this.
L4.Get(BG)+1,this.WD.Get(BG),false,Fo));this.H6=0;return true;}if(!Sy&&!!this.Fc.
Get(BG)){var pos=Fo;var B9=this.Fc.Get(BG).Ac;while(!!B9&&(B9!==this)){pos=A.aaj(
pos,B9.M.slice(0,2));B9=B9.Ac;}if(!B9)pos=this.Ahy.Get(BG);this.EF=BG;var tmp=this.
Fc.Get(BG);this.Fc.Set(BG,null);tmp.GI(this.AnT().InitializeUp(BG,pos,this.Afa.Get(
BG),this.WE.Get(BG),this.L4.Get(BG)+1,this.WD.Get(BG),false,Fo,this.Acg.Get(BG))
);this.BroadcastEvent(this.Asa().InitializeUp(BG,this.L4.Get(BG)+1,false,tmp,Fo)
,0x18);this.H6=0;return true;}this.H6=0;return false;},ARR:function(Zw,A_t,Ab9,Ab8
){if(Zw===this)Zw=null;if(!!!Zw&&!!this.JA)Zw=this.JA.Dj;if(!this.Fc.Get(this.EF
))return;var Jz;Jz=this.Xu(A.aam(Ne,this.Q7.Get(this.EF)),this.EF,1,Zw,Ab9,Ab8);
if(!!Jz&&(this.Fc.Get(this.EF)!==Jz.Cd))this.ALz(Jz.Cd,Jz.Dz);if(!Jz&&(this.Fc.Get(
this.EF)!==A_t))this.ALz(A_t,B$);},ALz:function(Zw,Wq){if(!this.Fc.Get(this.EF)||(
this.Fc.Get(this.EF)===Zw))return;var tmp=this.Fc.Get(this.EF);this.Fc.Set(this.
EF,null);tmp.GI(this.AnT().InitializeUp(this.EF,this.Ahy.Get(this.EF),this.Afa.Get(
this.EF),this.WE.Get(this.EF),this.L4.Get(this.EF)+1,this.WD.Get(this.EF),true,this.
Q7.Get(this.EF),this.Acg.Get(this.EF)));this.BroadcastEvent(this.Asa().InitializeUp(
this.EF,this.L4.Get(this.EF)+1,true,tmp,this.Q7.Get(this.EF)),0x18);var pos=this.
Q7.Get(this.EF);var B9=null;if(!!Zw)B9=Zw.Ac;while(!!B9&&(B9!==this)){pos=A.aaj(
pos,B9.M.slice(0,2));B9=B9.Ac;}if(!B9&&(Zw!==this)){this.Fc.Set(this.EF,null);return;
}this.BroadcastEvent(this.Asa().InitializeDown(this.EF,this.L4.Get(this.EF)+1,true
,Zw,this.Q7.Get(this.EF)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.Fc.Set(this.EF,Zw);this.WD.Set(this.EF,Wq);this.Afa.Set(this.EF,pos
);this.Ahy.Set(this.EF,pos);this.L4.Set(this.EF,0);this.WE.Set(this.EF,0);this.Asb.
Set(this.EF,ticksCount);this.Acg.Set(this.EF,this.Q7.Get(this.EF));this.Fc.Get(this.
EF).GI(this.AnT().InitializeDown(this.EF,pos,this.L4.Get(this.EF)+1,this.WD.Get(
this.EF),true,this.Acg.Get(this.EF)));},Bfl:function(){if(!!this.JA)return this.
JA.Dj;return null;},AAP:function(Km){var B;if(!Km)throw new Error(ON);if(!((Km.U&
0x80)===0x80))throw new Error(Ss);if(this.JA.Dj===Km)this.JA=this.JA.Af;else{var
Ax7=this.JA;while(Ax7.Af.Dj!==Km)Ax7=Ax7.Af;Ax7.Af=Ax7.Af.Af;}Km.C4(0x0,0xC0);if(
this.Ax8){if(!!this.JA)this.JA.Dj.C4(0x40,0x0);else this.C4(0x40,0x0);}},AKJ:function(
Km){var B;var Ar=A._NewObject(C.A4U,0);if(!Km)throw new Error(T$);if(Km===null)throw new
Error(Zf);if(((Km.U&0x80)===0x80))throw new Error(Wb);if(!!this.JA)this.JA.Dj.C4(
0x0,0x40);else this.C4(0x0,0x40);Ar.Af=this.JA;Ar.Dj=Km;this.JA=Ar;if(this.Ax8)Km.
C4(0xC0,0x0);else Km.C4(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Ahz={I:this},0);(this.Fc=[]).__proto__=C.Root.Fc;(this.
L4=[]).__proto__=C.Root.L4;(this.AHP=[]).__proto__=C.Root.AHP;(this.WE=[]).__proto__=
C.Root.WE;(this.Afa=[]).__proto__=C.Root.Afa;(this.Asb=[]).__proto__=C.Root.Asb;(
this.Ahy=[]).__proto__=C.Root.Ahy;(this.WD=[]).__proto__=C.Root.WD;(this.Q7=[]).
__proto__=C.Root.Q7;(this.Acg=[]).__proto__=C.Root.Acg;(this.Oi=[]).__proto__=C.
Root.Oi;(this.J6=[]).__proto__=C.Root.J6;this.__proto__=C.Root;this.U=0x7F;this.
Ahz.QB(10);this.Ahz.M$=[this,this.BuO];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Ahz._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Ahz._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JA)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Fc,D);if((B=this.Ar8)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ahz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
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
Kl,Sy){this.CP=Kl;this.Down=Sy;this.D4=0x00;var AYR=Kl-10;var Ar7=Kl-105;if((AYR>=
0)&&(AYR<=9))this.D4=(48+AYR)&0xFFFF;if((Ar7>=0)&&(Ar7<=25))this.D4=(65+Ar7)&0xFFFF;
if(Kl===131)this.D4=0x20;if(this.D4===0x00)switch(Kl){case 132:this.D4=0x2B;break;
case 133:this.D4=0x2D;break;case 134:this.D4=0x2A;break;case 135:this.D4=0x2F;break;
case 136:this.D4=0x3D;break;case 137:this.D4=0x2E;break;case 138:this.D4=0x2C;break;
case 139:this.D4=0x3A;break;case 140:this.D4=0x3B;break;default:;}return this;},
BfR:function(A_j){switch(A_j){case 141:return((this.D4>=0x41)&&(this.D4<=0x5A))||((
this.D4>=0x61)&&(this.D4<=0x7A));case 142:return(((this.D4>=0x41)&&(this.D4<=0x5A
))||((this.D4>=0x61)&&(this.D4<=0x7A)))||((this.D4>=0x30)&&(this.D4<=0x39));case
143:return(this.D4>=0x30)&&(this.D4<=0x39);case 144:return(((this.D4>=0x41)&&(this.
D4<=0x46))||((this.D4>=0x61)&&(this.D4<=0x66)))||((this.D4>=0x30)&&(this.D4<=0x39
));case 145:return this.D4!==0x00;case 146:return(this.D4===0x00)&&!!this.CP;case
147:return(((this.CP===6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:
return(this.D4!==0x00)||!!this.CP;default:;}return A_j===this.CP;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AO7={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AO7;
},_className:"Core::LanguageEvent"};C.Atr={Av5:null,LE:A.vw,NU:0,Iy:0,Down:false
,NB:false,InitializeUp:function(BG,N4,AnA,AYq,Zv){this.Down=false;this.Iy=BG;this.
NU=N4;this.LE=Zv;this.Av5=AYq;this.NB=AnA;return this;},InitializeDown:function(
BG,N4,AnA,AYq,Zv){this.Down=true;this.Iy=BG;this.NU=N4;this.LE=Zv;this.Av5=AYq;this.
NB=AnA;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Atr;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Av5)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Adg={Af_:A.vw,LE:
A.vw,NU:0,Jk:0,NJ:A.vw,HV:A.vw,Iy:0,Down:false,NB:false,InitializeHold:function(
BG,Ako,Axh,Axi,N4,Wq,Zv,Axg){this.Down=true;this.Iy=BG;this.HV=A.aak(Ako,Wq);this.
NJ=A.aak(Axh,Wq);this.Jk=Axi;this.NU=N4;this.LE=Zv;this.Af_=Axg;return this;},InitializeUp:
function(BG,Ako,Axh,Axi,N4,Wq,AnA,Zv,Axg){this.Down=false;this.Iy=BG;this.HV=A.aak(
Ako,Wq);this.NJ=A.aak(Axh,Wq);this.Jk=Axi;this.NU=N4;this.NB=AnA;this.LE=Zv;this.
Af_=Axg;return this;},InitializeDown:function(BG,Ako,N4,Wq,AnA,Zv){this.Down=true;
this.Iy=BG;this.HV=A.aak(Ako,Wq);this.NJ=A.aak(Ako,Wq);this.Jk=0;this.NU=N4;this.
NB=AnA;this.LE=Zv;this.Af_=Zv;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Adg;},_className:"Core::CursorEvent"};C.App={Af_:A.vw
,LE:A.vw,NU:0,Jk:0,Dz:A.vw,NJ:A.vw,HV:A.vw,Iy:0,Initialize:function(BG,Ako,Axh,aOffset
,Axi,BtQ,Wq,Zv,Axg){this.Iy=BG;this.HV=A.aak(Ako,Wq);this.NJ=A.aak(Axh,Wq);this.
Dz=aOffset;this.Jk=Axi;this.NU=BtQ;this.LE=Zv;this.Af_=Axg;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.App;},_className:"Core::DragEvent"
};C.Y={BT:null,Nt:null,Ej:null,Bp:A.vw,ASi:0,Space:0,Af8:0,J_:function(CW,aClip,
aOffset,Ce,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var Ak5=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AIz=[E[2]-E[0],E[3]-E[1]];var AoP=!A.z8(Ak5,AIz);var Ff=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(Ff,B$)&&!AoP){var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Amn(Ff,tmp);}W=W.Af;}A.ow(this.Ej,this);}if((AoP&&(Ak5[0]>0))&&(Ak5[1]>0)){var
A8=A.aam(this.M,this.Bp);var W=this.Af;while(!!W&&!((W.U&0x200)===0x200)){if(((W.
U&0x400)===0x400)){if(!!W.Em&&(W.Em.Nv!==this))W.Em=null;if(!W.Em&&((W.Pu!==0x14
)||!!this.Af8))W.Asn(A8,this);}W=W.Af;}A.ow(this.Ej,this);}C.EC.G.call(this,E);if(
!!this.Ac&&AoP){this.U=this.U|0x1000;if(!((this.Ac.U&0x2000)===0x2000)){this.Ac.
U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);}}},Aoz:function(H){var B;this.BT.
Q=null;this.BT.P2=null;this.BT=null;(B=this.Nt)?B[1].call(B[0],this):null;},Gk:function(
E){var B;var Ff=A.aaj(E,this.Bp);if(A.z8(Ff,B$))return;this.Bp=E;var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Amn(Ff,tmp);}W=W.Af;}if(!!this.Ac)this.Ac.Bg(this.M);A.ow(this.Ej,this);},A7e:
function(E){var B;if(E<0)E=0;if(E===this.ASi)return;this.ASi=E;if(!!this.Ac&&!!this.
Af8){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},Bj2:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Ac&&!!this.Af8){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,
B.H$],this);}},Kc:function(E){var B;if(E===this.Af8)return;this.Af8=E;if(!!this.
Ac){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H$],this);
}},UL:function(Ab2,EW){var Ar7=this.C_(0x1);var Q6=this.M;var Uy=A.aaj(Ar7.slice(
0,2),Q6.slice(0,2));var L6=A.aaj(Ar7.slice(2,4),Q6.slice(2,4));var Bo=B$;if((Uy[
0]>0)&&(L6[0]>Uy[0]))Bo=[Uy[0],Bo[1]];else if((Uy[0]>0)&&(L6[0]>0))Bo=[L6[0],Bo[
1]];if((L6[0]<0)&&(Uy[0]<L6[0]))Bo=[L6[0],Bo[1]];else if((L6[0]<0)&&(Uy[0]<0))Bo=[
Uy[0],Bo[1]];if((Uy[1]>0)&&(L6[1]>Uy[1]))Bo=[Bo[0],Uy[1]];else if((Uy[1]>0)&&(L6[
1]>0))Bo=[Bo[0],L6[1]];if((L6[1]<0)&&(Uy[1]<L6[1]))Bo=[Bo[0],L6[1]];else if((L6[
1]<0)&&(Uy[1]<0))Bo=[Bo[0],Uy[1]];if(A.z8(Bo,B$)){(EW)?EW[1].call(EW[0],this):null;
return;}if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;
}this.BT=Ab2;if(!this.BT){this.Gk(A.aaj(this.Bp,Bo));(EW)?EW[1].call(EW[0],this):
null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amy,this.Gk];this.
BT.Cv=this.Bp;this.BT.B1=A.aaj(this.Bp,Bo);this.BT.P2=[this,this.Aoz];this.BT.Ad8(
false);this.BT.Ap(true);this.Nt=EW;}},Hx:function(Ah,Ab6,Ab2,EW){var B;if(!Ah)return;
if((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400))throw new Error(IM);this.Bb2();var
AM=Ah.GetExtent();var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2])||(
Lu[1]>=Lu[3])))||(Ab6&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var
Bo=B$;if(AM[2]>A8[2])Bo=[AM[2]-A8[2],Bo[1]];if(AM[3]>A8[3])Bo=[Bo[0],AM[3]-A8[3]
];if(Bo[0]>(AM[0]-A8[0]))Bo=[AM[0]-A8[0],Bo[1]];if(Bo[1]>(AM[1]-A8[1]))Bo=[Bo[0]
,AM[1]-A8[1]];if(!!this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.
Nt=null;}this.BT=Ab2;if(!this.BT){this.Gk(A.aaj(this.Bp,Bo));(EW)?EW[1].call(EW[
0],this):null;}else{this.BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amy,this.
Gk];this.BT.Cv=this.Bp;this.BT.B1=A.aaj(this.Bp,Bo);this.BT.P2=[this,this.Aoz];this.
BT.Ad8(false);this.BT.Ap(true);this.Nt=EW;}},Bfg:function(Ah){var B;if(!!Ah&&((Ah.
Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return-1;var CO=-1;while(!!Ah&&!((Ah.U&0x200
)===0x200)){if(((Ah.U&0x400)===0x400))CO=CO+1;Ah=Ah.AG;}return CO;},U9:function(
Ah,aFilter){var B;if(!!Ah&&((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return null;
var W=this.Af;var IS=0x10000;if(((aFilter&0x10000)===0x10000))IS=0x0;if(!!Ah)W=Ah.
Af;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((B=aFilter)&&((W.
U&B)===B))&&(!IS||!((B=IS)&&((W.U&B)===B))))return W;W=W.Af;}return null;},C_:function(
aFilter){var B;var W=this.Af;var AD=BH;var IS=0x10000;this.Bb2();if(((aFilter&0x10000
)===0x10000))IS=0x0;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((
B=aFilter)&&((W.U&B)===B))&&(!IS||!((B=IS)&&((W.U&B)===B))))AD=A.vS(AD,W.GetExtent(
));W=W.Af;}return AD;},Bb2:function(){var B;if((!this.Af8||!!!this.Ac)||!((this.
Ac.U&0x4000)===0x4000))return;var W=this.Af;var AY$=((this.U&0x1000)===0x1000);for(;
!!W&&!AY$;W=W.Af){if(((W.U&0x400)===0x400)&&((W.U&0x800)===0x800))AY$=true;if(((
W.U&0x200)===0x200))break;}if(AY$){this.U=this.U&~0x4000;this.Ac.Bca();}},Amy:function(
){return this.Bp;},_Init:function(aArg){C.EC._Init.call(this,aArg);this.__proto__=
C.Y;this.U=0x203;},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.BT
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.CI={Hn:null,BT:null,Cd:null,VV:null,Nt:null,Ej:null,G8:null,SL:-
1,SK:0,Jh:-1,Hb:0,AhQ:8,Ob:0,TM:0,AbK:A.vw,GK:-1,Bp:0,Ge:-1,OC:0,GL:24,AR:0,K9:null
,NG:false,Asr:false,ASp:function(Ii,N3,Wp,SA,SB,Aho,OT,Q2,Lm,Lk,Ll){throw new Error(
Ua);},Apn:function(Ii,Aho,OT,Q2,Lm,Lk,Ll){throw new Error(Zg);},AjU:function(Ii,
N3,Wp,SA,SB,OT,Q2,Lm,Lk,Ll){throw new Error(Wc);},DispatchEvent:function(CK){var
B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY){this.GK=this.Ge;
this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);if(!!this.B5)this.
B5.Af=this.Cd;else this.B8=this.Cd;this.Cd.AG=this.B5;this.B5=this.Cd;this.Cd.Ac=
this;this.AbK=[(B=this.M)[2]-B[0],this.GL];(B=this.G8)?B[1].call(B[0],this):null;
var B9=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B9)result=B9.DispatchEvent(CK);
else result=this.Cd.GI(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B8=null;
this.B5=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
){A.ow(this.Ej,this);return;}this.Asr=true;var AyX=0;if(!this.NG)AyX=this.OC;var
FI=this.Ald(-AyX-this.Bp,1);var GG=this.Ald(((((B=this.M)[3]-B[1])-AyX)-this.Bp)-
1,2);var CO=GG-FI;if(CO<1)CO=1;var Ahu=(CO/2)|0;var Ahv=(CO/3)|0;if(!Ahu)Ahu=1;if(
!Ahv)Ahv=1;if(FI<this.Hb){FI=FI-Ahu;GG=GG+Ahv;}else if(GG>this.Jh){FI=FI-Ahv;GG=
GG+Ahu;}else{FI=this.Hb;GG=this.Jh;}if(!this.NG){if(FI>=this.AR){FI=0;GG=-1;}else
if(GG<0){FI=0;GG=-1;}if(GG>=this.AR)GG=this.AR-1;if(FI<0)FI=0;}else if(this.AR<=
0){FI=0;GG=-1;}var Ah7=this.Hb;var Ah8=this.Jh;var Aom=0;var Aon=-1;if(FI>Ah7)Ah7=
FI;if(GG<Ah8)Ah8=GG;if(Ah7<=Ah8){while((this.Jh<GG)&&(this.Hb<Ah7)){this.AcG();this.
AxE();}while((this.Hb>FI)&&(this.Jh>Ah8)){this.Ay$();this.AxD();}}else{this.Jh=(
this.Jh-this.Hb)+FI;this.Hb=FI;Aom=this.Hb;Aon=this.Jh;}while(this.Hb<FI)this.AcG(
);while(this.Jh>GG)this.Ay$();while(this.Hb>FI)this.AxD();while(this.Jh<GG)this.
AxE();var Z=this.B8;var inx=this.Hb;var pos=[0,(AyX+this.Bp)+this.Jd(inx,0)];var
BL=(B=this.M)[3]-B[1];var AkN=null;var BcW=(B=this.M)[2]-B[0];while(!!Z){var Io=
inx;if(this.NG){if(Io<0)Io=this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcH=((
Io>=this.SK)&&(Io<=this.SL))||((inx>=Aom)&&(inx<=Aon));var An5=Z.GetExtent();var
Bo=A.aaj(pos,An5.slice(0,2));if(AcH)this.TM=this.GL;else this.TM=An5[3]-An5[1];var
AZS=pos[1];var AZT=pos[1]+this.TM;if(!A.z8(Bo,B$))Z.Amn(Bo,true);if((AcH&&(AZS<BL
))&&(AZT>0)){this.Cd=Z;this.GK=Io;this.AbK=[BcW,this.TM];(B=this.G8)?B[1].call(B[
0],this):null;}Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TM];}inx=this.Hb;Z=this.B8;
pos=[0,(AyX+this.Bp)+this.Jd(inx,0)];while(!!Z){var Io=inx;if(this.NG){if(Io<0)Io=
this.AR-(-Io%this.AR);if(Io>0)Io=Io%this.AR;}var AcH=((Io>=this.SK)&&(Io<=this.SL
))||((inx>=Aom)&&(inx<=Aon));if(AcH)this.TM=this.GL;else this.TM=(B=Z.GetExtent(
))[3]-B[1];var AZS=pos[1];var AZT=pos[1]+this.TM;if(AcH&&!((AZS<BL)&&(AZT>0))){this.
Cd=Z;this.GK=Io;this.AbK=[BcW,this.TM];(B=this.G8)?B[1].call(B[0],this):null;}if(((
Io===this.Ge)&&this.NG)&&!!AkN){var Q6=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Z.GetExtent(),Q6))>A.zS(A.kz(AkN.GetExtent(),Q6)))AkN=Z;}else if(Io===this.
Ge)AkN=Z;Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TM];}this.SK=0;this.SL=-1;this.Cd=
null;this.GK=-1;this.A$(AkN);this.Asr=false;A.ow(this.Ej,this);},RO:function(Ah,
GD,aFilter){return null;},Apt:function(Ah,aFilter){return null;},U9:function(Ah,
aFilter){return null;},AAX:function(Ah,aFilter){return null;},C_:function(aFilter
){return BH;},NH:function(Km,FE,Lm,Lk,Ll){throw new Error(Zh);},AgR:function(Ah,
JW){throw new Error(Ub);},QI:function(Ah){throw new Error(Zi);},Ki:function(Ah,PN
){throw new Error(Zj);},HH:function(Ah){throw new Error(Uc);},AJ1:function(Ah,JW
){throw new Error(Wd);},J:function(Ah,PN){throw new Error(QV);},Jd:function(GU,AX2
){return GU*this.GL;},Ald:function(Fo,AX2){return(Fo/this.GL)|0;},Ay$:function(){
var Z=this.B5;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(
!!Z.AG)Z.AG.Af=null;else this.B8=null;this.B5=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhQ){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxE:function(){var B;var Z=this.Hn;var Act=this.K9;var AcL=++this.Jh;
if(this.NG){if(AcL<0)AcL=this.AR-(-AcL%this.AR);if(AcL>0)AcL=AcL%this.AR;}while(
!!Z&&(((B=Z)?B.__proto__:null)!==Act))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!
!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{
Z=(C.Cd.isPrototypeOf(B=A._NewObject(Act,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.
AhQ++;}this.TM=this.GL;this.GK=AcL;this.AbK=[(B=this.M)[2]-B[0],this.TM];this.Cd=
Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cd=null;this.GK=-1;if(!!this.B5)this.
B5.Af=Z;Z.Ac=this;Z.AG=this.B5;this.B5=Z;if(!this.B8)this.B8=Z;if(AcL===this.Ge)
this.A$(Z);return Z;},AcG:function(){var Z=this.B8;if(!Z)return null;if(Z===this.
AY)this.A$(null);this.Hb=this.Hb+1;if(!!Z.Af)Z.Af.AG=null;else this.B5=null;this.
B8=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhQ){if(!!this.Hn)this.Hn.
AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxD:function(){var B;var Z=this.
Hn;var Act=this.K9;var MQ=--this.Hb;if(this.NG){if(MQ<0)MQ=this.AR-(-MQ%this.AR);
if(MQ>0)MQ=MQ%this.AR;}while(!!Z&&(((B=Z)?B.__proto__:null)!==Act))Z=Z.Af;if(!!Z
){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=
null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Act,0))?B:null
);Z.AV(0x1D);if(!!this.Ob)this.AhQ++;}this.TM=this.GL;this.GK=MQ;this.AbK=[(B=this.
M)[2]-B[0],this.TM];this.Cd=Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cd=null;
this.GK=-1;if(!!this.B8)this.B8.AG=Z;Z.Ac=this;Z.Af=this.B8;this.B8=Z;if(!this.B5
)this.B5=Z;if(MQ===this.Ge)this.A$(Z);return Z;},Aoz:function(H){var B;this.BT.Q=
null;this.BT.P2=null;this.BT=null;(B=this.Nt)?B[1].call(B[0],this):null;},BwS:function(
H){this.Gk(this.VV.Dz[1]);},BwT:function(H){var B;if(!!this.BT){this.BT.Ap(false
);this.BT.Q=null;this.BT.P2=null;this.BT=null;}if(!this.NG){var AD=this.Apy(0,this.
AR-1);var Afs=this.M.slice(0,2);AD=A.aaS(AD,AD[1]-this.OC);if(AD[0]>Afs[0])AD=[].
concat(Afs[0],AD.slice(1,4));if(AD[1]>Afs[1])AD=A.aaS(AD,Afs[1]);var Ff=AD[1]-this.
M[1];var AZ6=((B=this.M)[3]-B[1])-(AD[3]-AD[1]);if(AZ6>0)AZ6=0;this.VV.Dz=[0,this.
Bp];this.VV.Gb=[0,(this.Bp+AZ6)-Ff];this.VV.FS=[0,this.Bp-Ff];}else{var Ff=32000-(
32000%this.GL);this.VV.Dz=[0,this.Bp];this.VV.Gb=[0,this.Bp-Ff];this.VV.FS=[0,this.
Bp+Ff];}},AQF:function(E){var B;if(this.NG===E)return;this.NG=E;while(!!this.AcG(
));this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Avq:function(E){if(E===
this.VV)return;if(!!E&&!!E.AsF){A.aa8("%s%*%s",Zk,E,OO);throw new Error(PK);}if(
!!this.VV){this.VV.AIL=null;this.VV.AsF=null;}this.VV=E;if(!!E){E.AIL=[this,this.
BwT];E.AsF=[this,this.BwS];}},Gk:function(E){var B;if(this.NG&&(this.AR>0)){var Hp=
this.Jd(this.AR,3);if(E<0)E=Hp-(-E%Hp);if(E>0)E=E%Hp;if(E>0)E=E-Hp;}if(E===this.
Bp)return;this.Bp=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GM:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},A64:function(E){var B;
if(E<0)E=0;if(E===this.OC)return;this.OC=E;if(!this.NG){this.Am();this.Bg([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);}},Ad6:function(E){var B;if(E<1)E=1;if(E===this.GL
)return;this.GL=E;while(!!this.AcG());this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.AR)return;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NG){if(E>this.AR){AD=[].concat(AD.slice(0,
3),(this.OC+this.Bp)+this.Jd(E,3));AD=A.aaS(AD,(this.OC+this.Bp)+this.Jd(this.AR
,3));}else{AD=A.aaS(AD,(this.OC+this.Bp)+this.Jd(E,3));AD=[].concat(AD.slice(0,3
),(this.OC+this.Bp)+this.Jd(this.AR,3));}}else while(!!this.AcG());this.AR=E;this.
Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;this.K9=E;while(!!
this.AcG());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3
]-B[1]]);},Bfu:function(GU){if(this.Asr)return null;if((GU<0)||(GU>=this.AR))return null;
if(!this.NG){if((GU<this.Hb)||(GU>this.Jh))return null;var W=this.B8;while(GU>this.
Hb){W=W.Af;GU=GU-1;}return W;}else{var MQ=this.Hb;if(MQ<0)MQ=this.AR-(-MQ%this.AR
);if(MQ>0)MQ=MQ%this.AR;var W=this.B8;while(!!W){if((MQ%this.AR)===GU)return W;W=
W.Af;MQ=MQ+1;}return null;}},AzP:function(Ab2,EW){var B;if(this.NG){(EW)?EW[1].call(
EW[0],this):null;return;}var AIe=this.Bp;var A$J=((((B=this.M)[3]-B[1])-this.Bp)-
this.OC)-this.Jd(this.AR,3);var Bo=0;if(AIe>0)Bo=-AIe;else if(A$J>0)Bo=A$J;if((Bo>
0)&&(Bo>-AIe))Bo=-AIe;if(!Bo){(EW)?EW[1].call(EW[0],this):null;return;}if(!!this.
BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;}this.BT=Ab2;if(
!this.BT){this.Gk(this.Bp+Bo);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(
false);this.BT.IF(1);this.BT.Q=[this,this.Amy,this.Gk];this.BT.Cv=this.Bp;this.BT.
B1=this.Bp+Bo;this.BT.P2=[this,this.Aoz];this.BT.Ad8(false);this.BT.Ap(true);this.
Nt=EW;}},Hx:function(GU,Ab6,Ab2,EW){var B;if((GU<0)||(GU>=this.AR))return;var AM=
this.Apy(GU,GU);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2])||(Lu[
1]>=Lu[3])))||(Ab6&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var Bo=
0;if(AM[3]>A8[3])Bo=AM[3]-A8[3];if(Bo>(AM[1]-A8[1]))Bo=AM[1]-A8[1];if(!!this.BT){
this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;}this.BT=Ab2;if(!this.
BT){this.Gk(this.Bp-Bo);(EW)?EW[1].call(EW[0],this):null;}else{this.BT.Ap(false);
this.BT.IF(1);this.BT.Q=[this,this.Amy,this.Gk];this.BT.Cv=this.Bp;this.BT.B1=this.
Bp-Bo;this.BT.P2=[this,this.Aoz];this.BT.Ad8(false);this.BT.Ap(true);this.Nt=EW;
}},Bfm:function(){return BH;},AMD:function(){if((this.OC<=0)||this.NG)return BH;
var AD=this.M;AD=A.aaS(AD,AD[1]+this.Bp);AD=[].concat(AD.slice(0,3),AD[1]+this.OC
);return AD;},A30:function(Fo){if(((this.AR<=0)||(Fo[0]<this.M[0]))||(Fo[0]>=this.
M[2]))return-1;Fo=A.aaj(Fo,this.M.slice(0,2));if(!this.NG){var Z=(Fo[1]-this.Bp)-
this.OC;if(Z>0)Z=this.Ald(Z,0);if((Z<0)||(Z>=this.AR))return-1;return Z;}var Z=Fo[
1]-this.Bp;if(Z>0)Z=this.Ald(Z,0);if(Z<0)Z=this.Ald(Z,0)-1;if(Z<0)Z=this.AR-(-Z%
this.AR);if(Z>0)Z=Z%this.AR;return Z;},Apy:function(JV,L0){if(JV<0)JV=0;if(L0>=this.
AR)L0=this.AR-1;if(JV>L0)return BH;var AD=this.M;var Bo=this.Bp;if(this.NG){var Hp=
this.Jd(this.AR,3);if(Bo<0)Bo=Hp-(-Bo%Hp);if(Bo>0)Bo=Bo%Hp;if(Bo>0)Bo=Bo-Hp;}else
Bo=Bo+this.OC;AD=[].concat(AD.slice(0,3),(AD[1]+Bo)+this.Jd(L0+1,0));AD=A.aaS(AD
,(AD[1]+Bo)+this.Jd(JV,0));return AD;},AaQ:function(JV,L0){var B;if(JV<0)JV=0;if(
JV>L0)return;if(this.SK>this.SL){this.SK=JV;this.SL=L0;}else{if(JV<this.SK)this.
SK=JV;if(L0>this.SL)this.SL=L0;}var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.
NG){AD=A.aaS(AD,(this.OC+this.Bp)+this.Jd(JV,0));AD=[].concat(AD.slice(0,3),(this.
OC+this.Bp)+this.Jd(L0+1,0));}else if((this.Jd(this.AR-1,3)>=(AD[3]-AD[1]))&&((AD[
3]-AD[1])>0)){var Bo=this.Bp;var Hp=this.Jd(this.AR,3);if(Bo<0)Bo=Hp-(-Bo%Hp);if(
Bo>0)Bo=Bo%Hp;if(Bo>0)Bo=Bo-Hp;AD=A.aaS(AD,Bo+this.Jd(JV,0));AD=[].concat(AD.slice(
0,3),Bo+this.Jd(L0+1,0));}this.Am();this.Bg(AD);},Amy:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CI;this.G(Ud);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VV)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hn:null
,BT:null,Cd:null,Nt:null,G8:null,SL:-1,SK:0,Jh:-1,Hb:0,AhQ:8,Ob:0,Sb:0,AbK:A.vw,
GK:-1,Bp:0,Ge:-1,Vr:24,AR:0,K9:null,Asr:false,ASp:function(Ii,N3,Wp,SA,SB,Aho,OT
,Q2,Lm,Lk,Ll){throw new Error(Zl);},Apn:function(Ii,Aho,OT,Q2,Lm,Lk,Ll){throw new
Error(We);},AjU:function(Ii,N3,Wp,SA,SB,OT,Q2,Lm,Lk,Ll){throw new Error(Zm);},DispatchEvent:
function(CK){var B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY
){this.GK=this.Ge;this.Cd=(C.Cd.isPrototypeOf(B=A._NewObject(this.K9,0))?B:null);
if(!!this.B5)this.B5.Af=this.Cd;else this.B8=this.Cd;this.Cd.AG=this.B5;this.B5=
this.Cd;this.Cd.Ac=this;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];(B=this.G8)?B[1].call(
B[0],this):null;var B9=(C.O.isPrototypeOf(B=this.Cd)?B:null);if(!!B9)result=B9.DispatchEvent(
CK);else result=this.Cd.GI(CK);if(!!this.Cd.AG)this.Cd.AG.Af=null;else this.B8=null;
this.B5=this.Cd.AG;this.Cd.AG=null;this.Cd.Ac=null;this.Cd=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K9
)return;this.Asr=true;var FI=this.Ald(0-this.Bp,1);var GG=this.Ald((((B=this.M)[
2]-B[0])-this.Bp)-1,2);var CO=GG-FI;if(CO<1)CO=1;var Ahu=(CO/2)|0;var Ahv=(CO/3)|
0;if(!Ahu)Ahu=1;if(!Ahv)Ahv=1;if(FI<this.Hb){FI=FI-Ahu;GG=GG+Ahv;}else if(GG>this.
Jh){FI=FI-Ahv;GG=GG+Ahu;}else{FI=this.Hb;GG=this.Jh;}if(FI>=this.AR){FI=0;GG=-1;
}else if(GG<0){FI=0;GG=-1;}if(GG>=this.AR)GG=this.AR-1;if(FI<0)FI=0;var Ah7=this.
Hb;var Ah8=this.Jh;var Aom=0;var Aon=-1;if(FI>Ah7)Ah7=FI;if(GG<Ah8)Ah8=GG;if(Ah7<=
Ah8){while((this.Jh<GG)&&(this.Hb<Ah7)){this.AcG();this.AxE();}while((this.Hb>FI
)&&(this.Jh>Ah8)){this.Ay$();this.AxD();}}else{this.Jh=(this.Jh-this.Hb)+FI;this.
Hb=FI;Aom=this.Hb;Aon=this.Jh;}while(this.Hb<FI)this.AcG();while(this.Jh>GG)this.
Ay$();while(this.Hb>FI)this.AxD();while(this.Jh<GG)this.AxE();var Z=this.B8;var inx=
this.Hb;var pos=[this.Bp+this.Jd(inx,0),0];var BU=(B=this.M)[2]-B[0];var AkN=null;
var BcM=(B=this.M)[3]-B[1];while(!!Z){var Io=inx;var AcH=((Io>=this.SK)&&(Io<=this.
SL))||((inx>=Aom)&&(inx<=Aon));var An5=Z.GetExtent();var Bo=A.aaj(pos,An5.slice(
0,2));if(AcH)this.Sb=this.Vr;else this.Sb=An5[2]-An5[0];var AZQ=pos[0];var AZR=pos[
0]+this.Sb;if(!A.z8(Bo,B$))Z.Amn(Bo,true);if((AcH&&(AZQ<BU))&&(AZR>0)){this.Cd=Z;
this.GK=Io;this.AbK=[this.Sb,BcM];(B=this.G8)?B[1].call(B[0],this):null;}Z=Z.Af;
inx+=1;pos=[pos[0]+this.Sb,pos[1]];}inx=this.Hb;Z=this.B8;pos=[this.Bp+this.Jd(inx
,0),0];while(!!Z){var Io=inx;var AcH=((Io>=this.SK)&&(Io<=this.SL))||((inx>=Aom)&&(
inx<=Aon));if(AcH)this.Sb=this.Vr;else this.Sb=(B=Z.GetExtent())[2]-B[0];var AZQ=
pos[0];var AZR=pos[0]+this.Sb;if(AcH&&!((AZQ<BU)&&(AZR>0))){this.Cd=Z;this.GK=Io;
this.AbK=[this.Sb,BcM];(B=this.G8)?B[1].call(B[0],this):null;}if(Io===this.Ge)AkN=
Z;Z=Z.Af;inx+=1;pos=[pos[0]+this.Sb,pos[1]];}this.SK=0;this.SL=-1;this.Cd=null;this.
GK=-1;this.A$(AkN);this.Asr=false;},RO:function(Ah,GD,aFilter){return null;},Apt:
function(Ah,aFilter){return null;},U9:function(Ah,aFilter){return null;},AAX:function(
Ah,aFilter){return null;},C_:function(aFilter){return BH;},NH:function(Km,FE,Lm,
Lk,Ll){throw new Error(Zn);},AgR:function(Ah,JW){throw new Error(Wf);},QI:function(
Ah){throw new Error(Wg);},Ki:function(Ah,PN){throw new Error(St);},HH:function(Ah
){throw new Error(Zo);},AJ1:function(Ah,JW){throw new Error(Zp);},J:function(Ah,
PN){throw new Error(AbO);},Jd:function(GU,AX2){return GU*this.Vr;},Ald:function(
Fo,AX2){return(Fo/this.Vr)|0;},Ay$:function(){var Z=this.B5;if(!Z)return null;if(
Z===this.AY)this.A$(null);this.Jh=this.Jh-1;if(!!Z.AG)Z.AG.Af=null;else this.B8=
null;this.B5=Z.AG;Z.AG=null;Z.Ac=null;Z.Em=null;if(this.Ob<this.AhQ){if(!!this.Hn
)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;}return Z;},AxE:function(){var B;
var Z=this.Hn;var Act=this.K9;var AcL=++this.Jh;while(!!Z&&(((B=Z)?B.__proto__:null
)!==Act))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===
Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(
Act,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.AhQ++;}this.Sb=this.Vr;this.GK=AcL;
this.AbK=[this.Sb,(B=this.M)[3]-B[1]];this.Cd=Z;(B=this.G8)?B[1].call(B[0],this):
null;this.Cd=null;this.GK=-1;if(!!this.B5)this.B5.Af=Z;Z.Ac=this;Z.AG=this.B5;this.
B5=Z;if(!this.B8)this.B8=Z;if(AcL===this.Ge)this.A$(Z);return Z;},AcG:function(){
var Z=this.B8;if(!Z)return null;if(Z===this.AY)this.A$(null);this.Hb=this.Hb+1;if(
!!Z.Af)Z.Af.AG=null;else this.B5=null;this.B8=Z.Af;Z.Af=null;Z.Ac=null;Z.Em=null;
if(this.Ob<this.AhQ){if(!!this.Hn)this.Hn.AG=Z;Z.Af=this.Hn;this.Hn=Z;this.Ob++;
}return Z;},AxD:function(){var B;var Z=this.Hn;var Act=this.K9;var MQ=--this.Hb;
while(!!Z&&(((B=Z)?B.__proto__:null)!==Act))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;
if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hn===Z)this.Hn=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;
}else{Z=(C.Cd.isPrototypeOf(B=A._NewObject(Act,0))?B:null);Z.AV(0x1D);if(!!this.
Ob)this.AhQ++;}this.Sb=this.Vr;this.GK=MQ;this.AbK=[this.Sb,(B=this.M)[3]-B[1]];
this.Cd=Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cd=null;this.GK=-1;if(!!this.
B8)this.B8.AG=Z;Z.Ac=this;Z.Af=this.B8;this.B8=Z;if(!this.B5)this.B5=Z;if(MQ===this.
Ge)this.A$(Z);return Z;},Aoz:function(H){var B;this.BT.Q=null;this.BT.P2=null;this.
BT=null;(B=this.Nt)?B[1].call(B[0],this):null;},Gk:function(E){var B;if(E===this.
Bp)return;this.Bp=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GM:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},ADg:function(E){var B;
if(E<1)E=1;if(E===this.Vr)return;this.Vr=E;while(!!this.AcG());this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jp:function(E){var B;if(E<0)E=0;if(E===this.
AR)return;var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AR){AD=[].concat(this.
Bp+this.Jd(this.AR,3),AD.slice(1,4));AD=A.aaQ(AD,this.Bp+this.Jd(E,3));}else{AD=
A.aaQ(AD,this.Bp+this.Jd(this.AR,3));AD=[].concat(this.Bp+this.Jd(E,3),AD.slice(
1,4));}this.AR=E;this.Am();this.Bg(AD);},NQ:function(E){var B;if(E===this.K9)return;
this.K9=E;while(!!this.AcG());this.Hn=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Blv:function(BtR,BtS){if(!this.BT)return;if(BtR)this.Gk(
this.BT.B1);var A1u=this.Nt;this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.
Nt=null;this.BT=null;if(BtS)(A1u)?A1u[1].call(A1u[0],this):null;},BfW:function(){
return!!this.BT;},Hx:function(GU,Ab6,Ab2,EW){var B;if((GU<0)||(GU>=this.AR))return;
var AM=this.Apy(GU,GU);var A8=this.M;var Lu=A.kz(AM,A8);if((!Ab6&&!((Lu[0]>=Lu[2
])||(Lu[1]>=Lu[3])))||(Ab6&&A.z9(Lu,AM))){(EW)?EW[1].call(EW[0],this):null;return;
}var Bo=0;if(AM[2]>A8[2])Bo=AM[2]-A8[2];if(Bo>(AM[0]-A8[0]))Bo=AM[0]-A8[0];if(!!
this.BT){this.BT.Ap(false);this.BT.Q=null;this.BT.P2=null;this.Nt=null;}this.BT=
Ab2;if(!this.BT){this.Gk(this.Bp-Bo);(EW)?EW[1].call(EW[0],this):null;}else{this.
BT.Ap(false);this.BT.IF(1);this.BT.Q=[this,this.Amy,this.Gk];this.BT.Cv=this.Bp;
this.BT.B1=this.Bp-Bo;this.BT.P2=[this,this.Aoz];this.BT.Ad8(false);this.BT.Ap(true
);this.Nt=EW;}},Apy:function(JV,L0){if(JV<0)JV=0;if(L0>=this.AR)L0=this.AR-1;if(
JV>L0)return BH;var AD=this.M;var Bo=this.Bp;AD=A.aaQ(AD,(AD[0]+Bo)+this.Jd(L0+1
,0));AD=[].concat((AD[0]+Bo)+this.Jd(JV,0),AD.slice(1,4));return AD;},AaQ:function(
JV,L0){var B;if(JV<0)JV=0;if(JV>L0)return;if(this.SK>this.SL){this.SK=JV;this.SL=
L0;}else{if(JV<this.SK)this.SK=JV;if(L0>this.SL)this.SL=L0;}var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AD=[].concat(this.Bp+this.Jd(JV,0),AD.slice(1,4));AD=A.aaQ(
AD,this.Bp+this.Jd(L0+1,0));this.Am();this.Bg(AD);},Amy:function(){return this.Bp;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.G(Ud);
this.K9=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hn
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bh={APX:null,ACM:null,Auy:null,DV:null,
K$:null,BS:null,AI5:0,Bk:0,Iy:0,Bu:0,NU:0,Jk:0,Dz:A.vw,NJ:A.vw,HV:A.vw,AvQ:8,Aei:
0,A4O:1,Down:false,XW:false,NB:false,AZg:false,Ayr:0,J_:function(CW,aClip,aOffset
,Ce,aBlend){},GI:function(CK){var B;var BO=(C.Adg.isPrototypeOf(CK)?CK:null);var
DY=(C.App.isPrototypeOf(CK)?CK:null);var AIp=this.XW;var ZS;var Uu;var Azt;var MO;
var AxX;if(!BO&&!DY)return null;ZS=(!!BO&&BO.Down)&&!BO.Jk;Uu=(!!BO&&BO.Down)&&(
BO.Jk>0);Azt=(!!BO&&BO.Down)&&(BO.Jk>this.Ayr);MO=!!BO&&!BO.Down;AxX=!!DY;if(ZS)
this.Ayr=((B=(BO.NB?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aei&0x20)===0x20
)&&(this.Bk>0))&&(this.Bk<33554432)){var In=(C.Atr.isPrototypeOf(CK)?CK:null);if(((
!!In&&In.Down)&&(In.Av5!==this))&&A.vt(this.GetExtent(),this.Ac.A4K(In.LE))){this.
AI5=0x20;this.Bk=this.Bk|67108864;return null;}}if(ZS){var Aot=0;var Acn;this.Bk=
this.Bk|(1<<BO.Iy);for(Acn=this.Bk&4095;Acn>0;Acn=Acn>>1)if(!!(Acn&1))Aot=Aot+1;
if(Aot===1)this.Bk=(this.Bk|16777216)|(4096<<BO.Iy);}if(MO&&(this.Bk<16777216)){
var Iq=this.Ib();var Jz=null;if(!!Iq){var A1m=(!!this.AG?this.AG:this.Ac);var AY6=(
!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xu(A.aam(Su,BO.LE),BO.Iy,BO.NU,AY6,A1m,0x0);}if(!!Jz
){var P;for(P=0;P<10;P++)if(!!(this.Bk&(1<<P)))Jz.Cd.GI(A._NewObject(C.Adg,0).InitializeDown(
P,BO.HV,BO.NU,B$,true,BO.LE));for(P=0;P<10;P++)if(!!(this.Bk&(1<<P)))Jz.Cd.GI(A.
_NewObject(C.Adg,0).InitializeUp(P,BO.HV,BO.HV,0,BO.NU,B$,false,BO.LE,BO.LE));}}
if(MO)this.Bk=(this.Bk&~(1<<BO.Iy))|33554432;if(Azt&&(this.Bk<16777216))this.Bk=
this.Bk|67108864;if(MO&&BO.NB)this.Bk=this.Bk|67108864;if(MO&&!(this.Bk&4095))this.
AI5=0x0;if(MO&&!(this.Bk&16777215))this.Bk=0;if(Uu&&(this.Bk>=67108864)){var Iq=
this.Ib();if(!!Iq)Iq.ARR(null,null,this,this.AI5);}if((Uu&&!!(this.Bk&16777216))&&
!!(this.Bk&33554432)){Uu=false;MO=true;}if(!!BO&&!(this.Bk&(4096<<BO.Iy)))return this;
if(!!DY&&!(this.Bk&(4096<<DY.Iy)))return this;if(MO&&!(this.Bk&16777216))return this;
if(((ZS||AxX)||Uu)&&((this.Bk<16777216)||(this.Bk>=33554432)))return this;if(MO)
this.Bk=this.Bk&3758100479;if(MO&&!(this.Bk&16777215))this.Bk=0;if(!!BO){this.Down=
ZS||Uu;this.XW=this.AOT(BO.HV);this.NJ=BO.NJ;this.HV=BO.HV;this.Dz=B$;this.Jk=BO.
Jk;this.NU=BO.NU;this.NB=BO.NB;this.Iy=BO.Iy;this.Bu=BO.Bu;if(BO.Down&&!BO.Jk)AIp=
false;}if(!!DY){this.Down=true;this.XW=this.AOT(DY.HV);this.NJ=DY.NJ;this.HV=DY.
HV;this.Dz=DY.Dz;this.Jk=DY.Jk;this.NU=DY.NU;this.Iy=DY.Iy;this.NB=false;this.Bu=
DY.Bu;}var AZa=this.Down;if(!!DY)(B=this.APX)?B[1].call(B[0],this):null;if((!!BO&&
this.Down)&&!this.Jk)(B=this.BS)?B[1].call(B[0],this):null;if((!!BO&&this.Down)&&(
this.Jk>0))(B=this.DV)?B[1].call(B[0],this):null;if((this.Down&&this.XW)&&!AIp){
this.AZg=true;(B=this.Auy)?B[1].call(B[0],this):null;}if(this.AZg&&(((AZa&&!this.
XW)&&AIp)||((!AZa&&this.XW)&&AIp))){this.AZg=false;(B=this.ACM)?B[1].call(B[0],this
):null;}if(!!BO&&!AZa)(B=this.K$)?B[1].call(B[0],this):null;if(!!this.Aei){var AcF=
0x0;if(((((this.Aei&0x10)===0x10)&&!!BO)&&BO.Down)&&(BO.Jk>=1000))AcF=0x10;if((((
this.Aei&0x1)===0x1)&&!!DY)&&((DY.LE[1]-DY.Af_[1])<=-this.AvQ))AcF=0x1;if((((this.
Aei&0x2)===0x2)&&!!DY)&&((DY.LE[1]-DY.Af_[1])>=this.AvQ))AcF=0x2;if((((this.Aei&
0x4)===0x4)&&!!DY)&&((DY.LE[0]-DY.Af_[0])<=-this.AvQ))AcF=0x4;if((((this.Aei&0x8
)===0x8)&&!!DY)&&((DY.LE[0]-DY.Af_[0])>=this.AvQ))AcF=0x8;if(!!AcF){var Iq=this.
Ib();if(!!Iq){this.AI5=AcF;Iq.ARR(null,this,this,AcF);}}}return this;},Xu:function(
Dc,BG,N4,Ab4,Ab9,Ab8){var B;if(!!Ab4&&(Ab4!==this))return null;if((N4<1)||(N4>this.
A4O))return null;if(this.Bk>=33554432)return null;if((this.Bk>=16777216)&&!(this.
Bk&(4096<<BG)))return null;if(!!(Ab8&this.Aei))return null;if(this.BfA()){var AM=
A.kz(Dc,this.GetExtent());if(!((AM[0]>=AM[2])||(AM[1]>=AM[3]))){var PQ=A.zT(Dc);
var Ff=B$;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0]
)-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3
]-PQ[1])-1];return A._NewObject(C.Ats,0).Initialize(this,Ff);}}else{var Ho=A.aan(
9,A.vw,null);var P;Ho.Set(0,A.zT(Dc));Ho.Set(1,Ho.Get(0));Ho.Set(2,Ho.Get(0));Ho.
Set(3,Ho.Get(0));Ho.Set(4,Ho.Get(0));Ho.Set(1,[Dc[0],Ho.Get(1)[1]]);Ho.Set(2,[Ho.
Get(2)[0],Dc[1]]);Ho.Set(3,[Dc[2],Ho.Get(3)[1]]);Ho.Set(4,[Ho.Get(4)[0],Dc[3]]);
Ho.Set(5,Dc.slice(0,2));Ho.Set(6,[Dc[2],Dc[1]]);Ho.Set(7,[Dc[0],Dc[3]]);Ho.Set(8
,Dc.slice(2,4));for(P=0;P<9;P=P+1)if(this.AOT(Ho.Get(P)))return A._NewObject(C.Ats
,0).Initialize(this,A.aaj(Ho.Get(P),Ho.Get(0)));}return null;},BjV:function(E){if(
E<1)E=1;this.AvQ=E;},ADp:function(E){if(E<1)E=1;this.A4O=E;},Ap:function(E){if(E
)this.C4(0x10,0x0);else this.C4(0x0,0x10);},_Init:function(aArg){C.YQ._Init.call(
this,aArg);this.__proto__=C.Bh;this.U=0x11B;},_Mark:function(D){var B;C.YQ._Mark.
call(this,D);if((B=this.APX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ACM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.K$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"};C.H2={
timer:null,AIL:null,AsF:null,AD5:null,Yz:null,R$:null,Bk:0,AHm:0,Acq:5000,AoO:0,
AIn:A.vw,An2:0,Ae3:0,EP:0,Alo:0,AsU:0,An1:0,Ae2:0,EO:0,Aln:0,All:0,NJ:A.vw,A2$:A.
vw,FS:A.vw,Gb:A.vw,Dz:A.vw,VY:A.vw,A3Q:0.5,A7R:true,AEI:true,Y0:false,WT:false,WU:
false,AnL:false,Ayr:0,J_:function(CW,aClip,aOffset,Ce,aBlend){},GI:function(CK){
var B;var BO=(C.Adg.isPrototypeOf(CK)?CK:null);var DY=(C.App.isPrototypeOf(CK)?CK:
null);var In=(C.Atr.isPrototypeOf(CK)?CK:null);var ZS;var Uu;var Azt;var MO;var AxX;
ZS=(!!BO&&BO.Down)&&!BO.Jk;Uu=(!!BO&&BO.Down)&&(BO.Jk>0);Azt=(!!BO&&BO.Down)&&(BO.
Jk>this.Ayr);MO=!!BO&&!BO.Down;AxX=!!DY;if(ZS)this.Ayr=((B=(BO.NB?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if(ZS){var Aot=0;var Acn;this.Bk=this.Bk|(1<<BO.Iy);for(Acn=this.
Bk&4095;Acn>0;Acn=Acn>>1)if(!!(Acn&1))Aot=Aot+1;if(Aot===1)this.Bk=(this.Bk|16777216
)|(4096<<BO.Iy);}if(MO&&(this.Bk<16777216)){var Iq=this.Ib();var Jz=null;if(!!Iq
){var A1m=(!!this.AG?this.AG:this.Ac);var AY6=(!!Iq.JA?Iq.JA.Dj:null);Jz=Iq.Xu(A.
aam(Su,BO.LE),BO.Iy,BO.NU,AY6,A1m,0x0);}if(!!Jz){var P;for(P=0;P<10;P++)if(!!(this.
Bk&(1<<P)))Jz.Cd.GI(A._NewObject(C.Adg,0).InitializeDown(P,BO.HV,BO.NU,B$,true,BO.
LE));for(P=0;P<10;P++)if(!!(this.Bk&(1<<P)))Jz.Cd.GI(A._NewObject(C.Adg,0).InitializeUp(
P,BO.HV,BO.HV,0,BO.NU,B$,false,BO.LE,BO.LE));}}if(MO)this.Bk=(this.Bk&~(1<<BO.Iy
))|33554432;if(Azt&&(this.Bk<16777216))this.Bk=this.Bk|67108864;if(MO&&BO.NB)this.
Bk=this.Bk|67108864;if(MO&&!(this.Bk&16777215))this.Bk=0;if(Uu&&(this.Bk>=67108864
)){var Iq=this.Ib();if(!!Iq)Iq.ARR(null,null,this,0x0);}if((Uu&&!!(this.Bk&16777216
))&&!!(this.Bk&33554432)){Uu=false;MO=true;}if(!!BO&&!(this.Bk&(4096<<BO.Iy)))return this;
if(!!DY&&!(this.Bk&(4096<<DY.Iy)))return this;if(MO&&!(this.Bk&16777216))return this;
if(((ZS||AxX)||Uu)&&((this.Bk<16777216)||(this.Bk>=33554432)))return this;if(MO)
this.Bk=this.Bk&3758100479;if(MO&&!(this.Bk&16777215))this.Bk=0;if(!!In&&(In.Av5===
this))return null;if((!!In&&In.Down)&&(this.AnL||!this.Y0))return null;if((!!In&&
In.Down)&&!A.vt(this.M,this.Ac.A4K(In.LE)))return null;if((!!In&&!In.Down)&&(!this.
AnL||(this.AHm!==In.Iy)))return null;if((!BO&&!DY)&&!In)return null;if(!!BO){this.
AnL=ZS||Uu;this.AHm=BO.Iy;this.NJ=BO.NJ;}if(!!DY)this.AHm=DY.Iy;if(!!In){this.AnL=
In.Down;this.AHm=In.Iy;}if(!!In&&In.Down){this.A1n();this.EO=(((In.Bu-this.All)*
0.001)*this.Ae2)+this.EO;this.EP=(((In.Bu-this.AsU)*0.001)*this.Ae3)+this.EP;if(
this.WT)this.EO=0;if(this.WU)this.EP=0;this.Ae2=0;this.Ae3=0;this.WT=false;this.
WU=false;this.AIn=this.Dz;this.AoO=In.Bu;return this;}if(ZS){this.A1n();this.EO=(((
BO.Bu-this.All)*0.001)*this.Ae2)+this.EO;this.EP=(((BO.Bu-this.AsU)*0.001)*this.
Ae3)+this.EP;if(this.WT||!this.Y0)this.EO=0;if(this.WU||!this.Y0)this.EP=0;this.
Ae2=0;this.Ae3=0;this.WT=false;this.WU=false;if(!this.Y0){this.Y0=true;(B=this.R$
)?B[1].call(B[0],this):null;(B=this.AIL)?B[1].call(B[0],this):null;}this.AIn=this.
Dz;this.AoO=BO.Bu;}if(!!DY){var GX=A.aaj(DY.HV,DY.NJ);var CB=this.Dz;if(this.AEI
)CB=[this.AIn[0]+GX[0],CB[1]];CB=[CB[0],this.AIn[1]+GX[1]];if(this.A7R){if(CB[0]<
this.Gb[0])CB=[this.Gb[0]+(((CB[0]-this.Gb[0])/2)|0),CB[1]];else if(CB[0]>this.FS[
0])CB=[this.FS[0]+(((CB[0]-this.FS[0])/2)|0),CB[1]];if(CB[1]<this.Gb[1])CB=[CB[0
],this.Gb[1]+(((CB[1]-this.Gb[1])/2)|0)];else if(CB[1]>this.FS[1])CB=[CB[0],this.
FS[1]+(((CB[1]-this.FS[1])/2)|0)];}else{if(CB[0]<this.Gb[0])CB=[this.Gb[0],CB[1]
];else if(CB[0]>this.FS[0])CB=[this.FS[0],CB[1]];if(CB[1]<this.Gb[1])CB=[CB[0],this.
Gb[1]];else if(CB[1]>this.FS[1])CB=[CB[0],this.FS[1]];}if(!A.z8(CB,this.Dz)){this.
A2$=A.aaj(CB,this.Dz);this.Dz=CB;(B=this.AsF)?B[1].call(B[0],this):null;(B=this.
AD5)?B[1].call(B[0],this):null;}}if((!!In&&!In.Down)&&((In.Bu-this.AoO)>=200)){this.
EO=0;this.EP=0;}if(Uu&&((BO.Bu-this.AoO)>=200)){this.EO=0;this.EP=0;}if(!!DY&&(DY.
Bu>this.AoO)){var GX=DY.Dz;var Bab=1000/(DY.Bu-this.AoO);var AhT=0;var AhU;if(this.
AEI)AhT=GX[0]*Bab;AhU=GX[1]*Bab;if((AhT*this.EO)<0)this.EO=0;if((AhU*this.EP)<0)
this.EP=0;this.EO=(this.EO+AhT)*0.5;this.EP=(this.EP+AhU)*0.5;this.AoO=DY.Bu;}if(
!MO&&!In)return this;if(!!BO&&BO.NB){this.EO=0;this.EP=0;}if((this.Dz[0]<=this.Gb[
0])||(this.Dz[0]>=this.FS[0]))this.EO=0;else if(!this.EO){var EH=this.Dz[0];var E3=
this.Gb[0];var Ey=this.FS[0];if(EH<E3)Ey=this.Gb[0];else if(EH>Ey)E3=this.FS[0];
else if(this.VY[0]<=1){E3=EH;Ey=EH;}else{var Acv=(Ey-EH)%this.VY[0];Ey=(EH-this.
VY[0])+Acv;E3=EH+Acv;if(Ey<this.Gb[0])Ey=this.Gb[0];if(E3>this.FS[0])E3=this.FS[
0];}if((E3-EH)<=(EH-Ey))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){var Jc=EH-this.Dz[0
];if(Jc>0)this.EO=Math.sqrt((Jc*2)*this.Acq)+20;if(Jc<0)this.EO=-Math.sqrt((-Jc*
2)*this.Acq)-20;this.Ae2=(400-(this.EO*this.EO))/(2*Jc);this.An1=EH;}}else{var BxQ=
this.EO*this.EO;var Jc=BxQ/(2*this.Acq);var EH=this.Dz[0];if(this.EO>0)EH=EH+(Jc|
0);if(this.EO<0)EH=EH-(Jc|0);if(EH>this.FS[0])EH=this.FS[0];else if(EH<this.Gb[0
])EH=this.Gb[0];var BcH=EH;var E3=this.Gb[0];var Ey=this.FS[0];if(EH<E3)Ey=this.
Gb[0];else if(EH>Ey)E3=this.FS[0];else if(this.VY[0]<=1){E3=EH;Ey=EH;}else{var Acv=(
Ey-EH)%this.VY[0];Ey=(EH-this.VY[0])+Acv;E3=EH+Acv;if(Ey<this.Gb[0])Ey=this.Gb[0
];if(E3>this.FS[0])E3=this.FS[0];}if(this.EO>0){if(Ey<=this.Dz[0])EH=E3;else if((
EH-Ey)<(E3-EH))EH=Ey;else EH=E3;}else if(E3>=this.Dz[0])EH=Ey;else if((EH-Ey)>(E3-
EH))EH=E3;else EH=Ey;if(EH!==this.Dz[0]){Jc=EH-this.Dz[0];if(EH!==BcH){var Aid=EH-
BcH;if(Aid>0)this.EO=this.EO+Math.sqrt((Aid*2)*this.Acq);if(Aid<0)this.EO=this.EO-
Math.sqrt((-Aid*2)*this.Acq);}if(this.EO>0)this.EO=this.EO+20;if(this.EO<0)this.
EO=this.EO-20;this.Ae2=(400-(this.EO*this.EO))/(2*Jc);this.An1=EH;}else this.EO=
0;}if((this.Dz[1]<=this.Gb[1])||(this.Dz[1]>=this.FS[1]))this.EP=0;else if(!this.
EP){var EI=this.Dz[1];var E3=this.Gb[1];var Ey=this.FS[1];if(EI<E3)Ey=this.Gb[1];
else if(EI>Ey)E3=this.FS[1];else if(this.VY[1]<=1){E3=EI;Ey=EI;}else{var Acv=(Ey-
EI)%this.VY[1];Ey=(EI-this.VY[1])+Acv;E3=EI+Acv;if(Ey<this.Gb[1])Ey=this.Gb[1];if(
E3>this.FS[1])E3=this.FS[1];}if((E3-EI)<=(EI-Ey))EI=E3;else EI=Ey;if(EI!==this.Dz[
1]){var Jc=EI-this.Dz[1];if(Jc>0)this.EP=Math.sqrt((Jc*2)*this.Acq)+20;if(Jc<0)this.
EP=-Math.sqrt((-Jc*2)*this.Acq)-20;this.Ae3=(400-(this.EP*this.EP))/(2*Jc);this.
An2=EI;}}else{var BxR=this.EP*this.EP;var Jc=BxR/(2*this.Acq);var EI=this.Dz[1];
if(this.EP>0)EI=EI+(Jc|0);if(this.EP<0)EI=EI-(Jc|0);if(EI>this.FS[1])EI=this.FS[
1];else if(EI<this.Gb[1])EI=this.Gb[1];var BcI=EI;var E3=this.Gb[1];var Ey=this.
FS[1];if(EI<E3)Ey=this.Gb[1];else if(EI>Ey)E3=this.FS[1];else if(this.VY[1]<=1){
E3=EI;Ey=EI;}else{var Acv=(Ey-EI)%this.VY[1];Ey=(EI-this.VY[1])+Acv;E3=EI+Acv;if(
Ey<this.Gb[1])Ey=this.Gb[1];if(E3>this.FS[1])E3=this.FS[1];}if(this.EP>0){if(Ey<=
this.Dz[1])EI=E3;else if((EI-Ey)<(E3-EI))EI=Ey;else EI=E3;}else if(E3>=this.Dz[1
])EI=Ey;else if((EI-Ey)>(E3-EI))EI=E3;else EI=Ey;if(EI!==this.Dz[1]){Jc=EI-this.
Dz[1];if(EI!==BcI){var Aid=EI-BcI;if(Aid>0)this.EP=this.EP+Math.sqrt((Aid*2)*this.
Acq);if(Aid<0)this.EP=this.EP-Math.sqrt((-Aid*2)*this.Acq);}if(this.EP>0)this.EP=
this.EP+20;if(this.EP<0)this.EP=this.EP-20;this.Ae3=(400-(this.EP*this.EP))/(2*Jc
);this.An2=EI;}else this.EP=0;}if(!!BO)this.All=BO.Bu;if(!!In)this.All=In.Bu;this.
AsU=this.All;this.Aln=this.Dz[0];this.Alo=this.Dz[1];this.BxS();return this;},Xu:
function(Dc,BG,N4,Ab4,Ab9,Ab8){var B;if(!!Ab4&&(Ab4!==this))return null;if(this.
Bk>=33554432)return null;if((this.Bk>=16777216)&&!(this.Bk&(4096<<BG)))return null;
if(!this.AEI&&!!(Ab8&0xC))return null;var AM=A.kz(Dc,this.M);if(!((AM[0]>=AM[2])||(
AM[1]>=AM[3]))){var PQ=A.zT(Dc);var Ff=B$;if(PQ[0]<AM[0])Ff=[AM[0]-PQ[0],Ff[1]];
if(PQ[0]>=AM[2])Ff=[(AM[2]-PQ[0])-1,Ff[1]];if(PQ[1]<AM[1])Ff=[Ff[0],AM[1]-PQ[1]];
if(PQ[1]>=AM[3])Ff=[Ff[0],(AM[3]-PQ[1])-1];return A._NewObject(C.Ats,0).Initialize(
this,Ff);}return null;},A1n:function(){if(!!this.timer){A.zl([this,this.Ma],this.
timer,0);this.timer=null;}},BxS:function(){this.timer=A._GetAutoObject(A.abm.Af1
);A.y_([this,this.Ma],this.timer,0);},Ma:function(H){var B;if(!this.timer)return;
var As0=(this.timer.Bu-this.All)*0.001;var As1=(this.timer.Bu-this.AsU)*0.001;var
Bx0=As0*As0;var Bx1=As1*As1;var AhT=(this.Ae2*As0)+this.EO;var AhU=(this.Ae3*As1
)+this.EP;var CB=[((((this.Ae2*0.5)*Bx0)+(this.EO*As0))+this.Aln)|0,((((this.Ae3
*0.5)*Bx1)+(this.EP*As1))+this.Alo)|0];if(this.WT&&(As0>=0.5)){CB=[this.An1,CB[1
]];this.EO=0;this.Ae2=0;this.Aln=CB[0];this.WT=false;}else if(this.WT){var Lt=1-
Math.pow(1-(As0/0.5),5);CB=[(this.Aln+((this.An1-this.Aln)*Lt))|0,CB[1]];}if(this.
WU&&(As1>=0.5)){CB=[CB[0],this.An2];this.EP=0;this.Ae3=0;this.Alo=CB[1];this.WU=
false;}else if(this.WU){var Lt=1-Math.pow(1-(As1/0.5),5);CB=[CB[0],(this.Alo+((this.
An2-this.Alo)*Lt))|0];}if(((this.EO>0)&&(AhT<0))||((this.EO<0)&&(AhT>0))){AhT=0;
CB=[this.Dz[0],CB[1]];}if(((this.EP>0)&&(AhU<0))||((this.EP<0)&&(AhU>0))){AhU=0;
CB=[CB[0],this.Dz[1]];}if(!this.WT&&(CB[0]<this.Gb[0])){this.Aln=CB[0];this.An1=
this.Gb[0];this.All=this.timer.Bu;this.WT=true;}else if(!this.WT&&(CB[0]>this.FS[
0])){this.Aln=CB[0];this.An1=this.FS[0];this.All=this.timer.Bu;this.WT=true;}if(
!this.WU&&(CB[1]<this.Gb[1])){this.Alo=CB[1];this.An2=this.Gb[1];this.AsU=this.timer.
Bu;this.WU=true;}else if(!this.WU&&(CB[1]>this.FS[1])){this.Alo=CB[1];this.An2=this.
FS[1];this.AsU=this.timer.Bu;this.WU=true;}if(((!this.WT&&!!this.EO)&&(AhT>-20))&&(
AhT<20)){CB=[this.An1,CB[1]];this.EO=0;this.Ae2=0;this.Aln=CB[0];}if(((!this.WU&&
!!this.EP)&&(AhU>-20))&&(AhU<20)){CB=[CB[0],this.An2];this.EP=0;this.Ae3=0;this.
Alo=CB[1];}if(!A.z8(CB,this.Dz)){this.A2$=A.aaj(CB,this.Dz);this.Dz=CB;(B=this.AsF
)?B[1].call(B[0],this):null;(B=this.AD5)?B[1].call(B[0],this):null;}if(((!this.EO&&
!this.EP)&&!this.WT)&&!this.WU){this.A1n();this.Y0=false;(B=this.Yz)?B[1].call(B[
0],this):null;}},AQ5:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
VY=E;},AQJ:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A3Q)return;this.A3Q=E;if(
E<(1e-007))E=1e-007;this.Acq=E*10000;},_Init:function(aArg){C.EC._Init.call(this
,aArg);this.__proto__=C.H2;this.U=0x11B;},_Mark:function(D){var B;C.EC._Mark.call(
this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIL)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AsF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AD5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Yz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.R$)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BR={Af:null,K$:
null,BS:null,DV:null,AoK:0,Bu:0,A7N:0,Filter:148,CP:0,D4:0,Bw:true,Down:false,Abs:
false,Pc:false,Init:function(aArg){var B;var Dj=(C.O.isPrototypeOf(B=this.I)?B:null
);if(!Dj)throw new Error(AbP);this.Af=Dj.AIs;Dj.AIs=this;},GI:function(CK){var B;
if(!!CK&&CK.BfR(this.Filter)){this.Down=CK.Down;this.CP=CK.CP;this.D4=CK.D4;this.
Bu=CK.Bu;this.Pc=false;if(CK.Down){this.A7N=this.AoK;this.Abs=this.AoK>0;if(this.
Abs)(B=this.DV)?B[1].call(B[0],this):null;else(B=this.BS)?B[1].call(B[0],this):null;
if(!this.Pc)this.AoK=this.AoK+1;return!this.Pc;}if(!CK.Down){this.Abs=this.AoK>1;
this.A7N=this.AoK-1;this.AoK=0;(B=this.K$)?B[1].call(B[0],this):null;return!this.
Pc;}}return false;},_Init:function(aArg){this.__proto__=C.BR;this.Init(aArg);A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
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
null,_className:"Core::ModalContext"};C.ApZ={Nv:null,extent:A.vx,A8:A.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.ApZ;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nv)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.AB9={Ah2:A.vw,Ah1:
A.vw,_Init:function(aArg){C.ApZ._Init.call(this,aArg);this.__proto__=C.AB9;},_className:
"Core::LayoutLineContext"};C.AB_={Ay1:A.vw,Ay0:A.vw,Ah2:A.vw,Ah1:A.vw,_Init:function(
aArg){C.ApZ._Init.call(this,aArg);this.__proto__=C.AB_;},_className:"Core::LayoutQuadContext"
};C.ALG={Dj:null,Af:null,Q8:null,Rf:null,L_:null,AoH:null,_Init:function(aArg){this.
__proto__=C.ALG;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Rf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L_)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AoH)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.ASu={FG:null,B5:null,B8:null,Bah:false,
BuC:function(){if(!this.FG)return;var O4=this.FG;this.FG.O0=null;this.FG=null;A.
ow([this,this.A0E],this);O4.A5f(this);},Bwj:function(H){if(!!this.FG)return;if(!
this.B8)return;this.FG=this.B8;this.B8=this.B8.Af;if(!!this.B8)this.B8.AG=null;else
this.B5=null;this.FG.Af=null;this.Bah=true;this.FG.R$(this);this.Bah=false;},BwG:
function(H){A.ow([this,this.Bwj],this);},BwF:function(H){A.ow([this,this.BwG],this
);},A0E:function(H){A.ow([this,this.BwF],this);},BdW:function(Ja){if(!Ja||!Ja.O0
)return;if(Ja.O0!==this)throw new Error(AeO);var Bc_=false;if(this.FG===Ja){this.
FG=null;Bc_=true;A.ow([this,this.A0E],this);}else{if(!!Ja.Af)Ja.Af.AG=Ja.AG;else
this.B5=Ja.AG;if(!!Ja.AG)Ja.AG.Af=Ja.Af;else this.B8=Ja.Af;Ja.AG=null;Ja.Af=null;
}Ja.O0=null;if(Bc_)Ja.A5e(this);},A7T:function(Ja,AYw){if(!Ja)return;if(!!Ja.O0)
throw new Error(Zq);Ja.O0=this;if(AYw){Ja.Af=this.B8;if(!!this.B8)this.B8.AG=Ja;
else this.B5=Ja;this.B8=Ja;}else{Ja.AG=this.B5;if(!!this.B5)this.B5.Af=Ja;else this.
B8=Ja;this.B5=Ja;}if(!this.FG)A.ow([this,this.A0E],this);},_Init:function(aArg){
this.__proto__=C.ASu;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Aj7={O0:null,AG:null,Af:
null,A5f:function(Ar1){},A5e:function(Ar1){},R$:function(Ar1){this.Ac_();},Mi:function(
){if(!!this.O0&&(this.O0.FG===this))this.O0.BuC();},Ac_:function(){if(!!this.O0)
this.O0.BdW(this);},AOQ:function(){return!!this.O0&&(this.O0.FG===this);},_Init:
function(aArg){this.__proto__=C.Aj7;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O0)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.ASs={Ar:null,AsW:
null,R$:function(Ar1){this.AsW.Ar=this.Ar;A.vv(this.AsW,0);A.ow([this,this.Bwg],
this);},Bwg:function(H){this.AsW.Ar=null;this.AsW=null;this.Ar=null;this.Mi();},
_Init:function(aArg){C.Aj7._Init.call(this,aArg);this.__proto__=C.ASs;},_Mark:function(
D){var B;C.Aj7._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AsW)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AEU={_Init:function(){C.ASu._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AgQ={resource:null,K3:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.AgQ;this.Init(aArg
);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={M$:null,timer:
null,Bu:0,Period:1000,US:0,Bw:false,K3:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AIT:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},QB:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bw)this.AIT(this.US,E);},VL:function(E){if(E<0)E=0;if(E===this.US)return;
this.US=E;if(this.Bw)this.AIT(E,this.Period);},Ap:function(E){if(E===this.Bw)return;
this.Bw=E;if(E)this.AIT(this.US,this.Period);else this.AIT(0,0);this.Bu=this.AtZ(
);},AtZ:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;
},Trigger:function(){var B;this.Bu=this.AtZ();if(!this.Period)this.Ap(false);(B=
this.M$)?B[1].call(B[0],this):null;},AER:function(H){this.Ap(false);},StartTimer:
function(H){if(this.Bw)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M$)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bu={ARZ:0,Auu:0,Ai7:0,Gu:0
,G6:0,Year:0,A$R:function(AeZ,AX0){if(AX0)switch(AeZ){case 1:return A.abj.Bf0;case
2:return A.abj.BeS;case 3:return A.abj.Bgk;case 4:return A.abj.Bdw;case 5:return A.
abj.Bgo;case 6:return A.abj.Bf3;case 7:return A.abj.Bf2;case 8:return A.abj.Bdy;
case 9:return A.abj.Bk5;case 10:return A.abj.BgT;case 11:return A.abj.BgS;case 12:
return A.abj.Bei;default:return A.jm;}else switch(AeZ){case 1:return A.abj.AB3;case
2:return A.abj.AAU;case 3:return A.abj.ACd;case 4:return A.abj.AzV;case 5:return A.
abj.ACg;case 6:return A.abj.AB5;case 7:return A.abj.AB4;case 8:return A.abj.Az3;
case 9:return A.abj.AEx;case 10:return A.abj.ACu;case 11:return A.abj.ACs;case 12:
return A.abj.AAE;default:return A.jm;}},A$P:function(A_o,AX0){if(AX0)switch(A_o){
case 1:return A.abj.Bgv;case 2:return A.abj.Bml;case 3:return A.abj.BmY;case 4:return A.
abj.Bl_;case 5:return A.abj.Be5;case 6:return A.abj.BkZ;case 0:return A.abj.BlX;
default:return A.jm;}else switch(A_o){case 1:return A.abj.Bgu;case 2:return A.abj.
Bmk;case 3:return A.abj.BmX;case 4:return A.abj.Bl9;case 5:return A.abj.Be4;case
6:return A.abj.BkY;case 0:return A.abj.BlW;default:return A.jm;}},A$O:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JL:function(){var d=this.Gu;var KR=this.G6;var Dl=this.Year-((
KR<=2)?1:0);var AxY=(((Dl>=0)?Dl:Dl-399)/400)|0;var Alu=Dl-(AxY*400);var Ut=(((((
153*(KR+((KR>2)?-3:9)))+2)/5)|0)+d)-1;var AnY=(((Alu*365)+((Alu/4)|0))-((Alu/100
)|0))+Ut;var PT=((AxY*146097)+AnY)-719468;return(((PT*86400)+(this.Ai7*3600))+(this.
Auu*60))+this.ARZ;},ADM:function(E){var B;E+=62162035200;if(E<0)E=0;var UG=Math.
trunc(E/86400)|0;var AxY=(((UG>=0)?UG:UG-146096)/146097)|0;var AnY=UG-(AxY*146097
);var Alu=((((AnY-((AnY/1460)|0))+((AnY/36524)|0))-((AnY/146096)|0))/365)|0;var Dl=
Alu+(AxY*400);var Ut=AnY-(((365*Alu)+((Alu/4)|0))-((Alu/100)|0));var AZ9=(((5*Ut
)+2)/153)|0;var d=(Ut-((((153*AZ9)+2)/5)|0))+1;var KR=AZ9+((AZ9<10)?3:-9);var BL=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dl+((
KR<=2)?1:0);this.TG(KR);this.Lb(d);this.AmF(BL+((BL<0)?24:0));this.AmI(P+((P<0)?
60:0));this.AmL(s+((s<0)?60:0));},YA:function(){if(this.G6===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G6===4)||(this.G6===6))||(this.G6===9))||(this.G6===11))return 30;else return 31;
},Bh4:function(){var B;var Ut=this.Aa9()-1;var Ase=(6+this.AuE())%7;var An0=((371+
Ase)-Ut)%7;if(this.G6===12){var d=this.Gu;if((d===31)&&(Ase<3))return 0;if((d===
30)&&(Ase<2))return 0;if((d===29)&&(Ase<1))return 0;}if(An0<=3)Ut+=An0;else Ut-=(
7-An0);if(Ut<0){var d=this.Gu;var KR=this.G6;this.Year--;this.Lb(31);this.TG(12);
Ut=this.Aa9()-1;Ase=(6+this.AuE())%7;An0=((371+Ase)-Ut)%7;if(An0<=3)Ut+=An0;else
Ut-=An0;this.Year++;this.Lb(d);this.TG(KR);}return(Ut/7)|0;},Aa9:function(){var B;
var d=this.Gu;var KR=this.G6;var Dl=this.Year;var Afh=((!!!(Dl%4)&&(!!(Dl%100)||
!!!(Dl%400)))?1:0);switch(KR){case 2:d+=31;break;case 3:d+=(59+Afh);break;case 4:
d+=(90+Afh);break;case 5:d+=(120+Afh);break;case 6:d+=(151+Afh);break;case 7:d+=(
181+Afh);break;case 8:d+=(212+Afh);break;case 9:d+=(243+Afh);break;case 10:d+=(273+
Afh);break;case 11:d+=(304+Afh);break;case 12:d+=(334+Afh);break;default:;}return d;
},AuE:function(){var B;var d=this.Gu;var KR=this.G6+((this.G6>2)?-2:10);var Dl=this.
Year-((this.G6<=2)?1:0);var BK=(Dl/100)|0;Dl%=100;d+=((((((((26*KR)-2)/10)|0)+Dl
)+((Dl/4)|0))+((BK/4)|0))-(2*BK));if(d>=0)return d%7;else return(7-(-d%7))%7;},AmL:
function(E){if(E<0)E=0;if(E>59)E=59;this.ARZ=E;},AmI:function(E){if(E<0)E=0;if(E>
59)E=59;this.Auu=E;},AmF:function(E){if(E<0)E=0;if(E>23)E=23;this.Ai7=E;},Lb:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gu=E;},TG:function(E){if(E<1)E=1;if(E>12)E=12;this.
G6=E;},Format:function(Ij){var result=A.jm;var inx=0;while(!!(Ij.charCodeAt(inx)||
0))if((Ij.charCodeAt(inx)||0)===0x25){var ZM=1;inx=inx+1;if((Ij.charCodeAt(inx)||
0)===0x23){inx=inx+1;ZM=0;}switch(Ij.charCodeAt(inx)||0){case 0x64:result=result+
A.aaq(this.Gu,2*ZM,10);break;case 0x48:result=result+A.aaq(this.Ai7,2*ZM,10);break;
case 0x49:if(!(this.Ai7%12))result=result+Wh;else result=result+A.aaq(this.Ai7%12
,2*ZM,10);break;case 0x6D:result=result+A.aaq(this.G6,2*ZM,10);break;case 0x4D:result=
result+A.aaq(this.Auu,2*ZM,10);break;case 0x70:if(this.Ai7<12)result=result+A.abj.
Bde;else result=result+A.abj.Bko;break;case 0x53:result=result+A.aaq(this.ARZ,2*
ZM,10);break;case 0x77:result=result+A.aaq(this.AuE(),ZM,10);break;case 0x79:result=
result+A.aaq(this.Year%100,2*ZM,10);break;case 0x59:result=result+A.aaq(this.Year
,4*ZM,10);break;case 0x25:result=result+Wi;break;case 0x6A:result=result+A.aaq(this.
Aa9(),3*ZM,10);break;case 0x57:result=result+A.aaq(this.Bh4(),2*ZM,10);break;case
0x61:result=result+this.A$P(this.AuE(),true);break;case 0x41:result=result+this.
A$P(this.AuE(),false);break;case 0x62:result=result+this.A$R(this.G6,true);break;
case 0x42:result=result+this.A$R(this.G6,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ij.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(Ab_,AeZ,BsY,Btc,Btt,BtM){this.Year=Ab_;this.TG(AeZ);this.
Lb(BsY);this.AmF(Btc);this.AmI(Btt);this.AmL(BtM);return this;},Initialize:function(
Ahq){this.ADM(Ahq);return this;},Ben:function(Ahq){if(!Ahq)return A._NewObject(C.
Am6,0).Initialize(this.JL());return A._NewObject(C.Am6,0).Initialize(this.JL()-Ahq.
JL());},Blz:function(Axj){if(!Axj)return this;return A._NewObject(C.Bu,0).Initialize(
this.JL()-Axj.JL());},J:function(Axj){if(!Axj)return this;return A._NewObject(C.
Bu,0).Initialize(this.JL()+Axj.JL());},_Init:function(aArg){this.__proto__=C.Bu;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.Am6={AEu:0,ACl:0,ABA:0,J9:0,JL:function(
){return(((this.J9*86400)+(this.ABA*3600))+(this.ACl*60))+this.AEu;},ADM:function(
E){var AI3=1;this.J9=Math.trunc(E/86400)|0;if(E<0){E=-E;AI3=-1;}this.ABA=AI3*(Math.
trunc(E/3600)%24|0);this.ACl=AI3*(Math.trunc(E/60)%60|0);this.AEu=AI3*(E%60|0);}
,Initialize2:function(BsZ,Btd,Btu,BtP){this.J9=BsZ;this.ABA=Btd;this.ACl=Btu;this.
AEu=BtP;return this;},Initialize:function(Ahq){this.ADM(Ahq);return this;},_Init:
function(aArg){this.__proto__=C.Am6;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A8f={Ar:null,O0:null,Trigger:function(BsT,AYw){var O4=A._NewObject(C.ASs,0);
O4.AsW=this;O4.Ar=BsT;this.O0.A7T(O4,AYw);},_Init:function(aArg){this.__proto__=
C.A8f;this.O0=A._GetAutoObject(C.AEU);A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A8g={JF:null,Event:null,APY:null,Asz:function(H){var B;if(
!this.Event)return;this.JF=this.Event.Ar;(B=this.APY)?B[1].call(B[0],this):null;
this.JF=null;},BiM:function(E){if(this.Event===E)return;if(!!this.Event)A.zl([this
,this.Asz],this.Event,0);this.Event=E;if(!!this.Event)A.y_([this,this.Asz],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A8g;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.APY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BBM={Dp:0x1,ByC:0x2,BzH:0x4,BBE:0x8,Bw:0x10,H1:0x20
,BzI:0x40,BAo:0x80,BzD:0x100,Bz4:0x200,Bzr:0x400,BA0:0x800,Bf:0x1000,BBJ:0x2000,
BAK:0x4000,BAL:0x8000,Aaq:0x10000,BAJ:0x20000,BA$:0x40000};C.Pu={BA1:0x1,BA2:0x2
,Byy:0x4,Byz:0x8,ByA:0x10,Byx:0x20};C.Af8={None:0,BBA:1,ByU:2,Bz9:3,BA5:4,BBB:5,
BBC:6,ByV:7,ByW:8,Bz$:9,Bz_:10,BA7:11,BA6:12};C.Atx={None:0,BBy:1,Left:2,ByS:3,Y4:
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
C._Init=function(){C.Ajp.__proto__=C.Cd;C.YQ.__proto__=C.Cd;C.EC.__proto__=C.Cd;C.
O.__proto__=C.EC;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AO7.__proto__=
C.Event;C.Atr.__proto__=C.Event;C.Adg.__proto__=C.Event;C.App.__proto__=C.Event;
C.Y.__proto__=C.EC;C.CI.__proto__=C.O;C.Ds.__proto__=C.O;C.Bh.__proto__=C.YQ;C.H2.
__proto__=C.EC;C.AB9.__proto__=C.ApZ;C.AB_.__proto__=C.ApZ;C.ASs.__proto__=C.Aj7;
};C._ReInit=function(){var B;if((B=C.AEU._this))B._ReInit();};C.DE=function(D){var
B;if((B=C.AEU._this)&&(B._cycle!=D))B._Done(C.AEU._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */