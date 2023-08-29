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
var B9=[0,0];var BG=[0,0,0,0];var EV="The view does not belong to this group";var
GS="The dialog component is already presented";var Js="The dialog component is actually not presented";
var IL="No fader to perform the fade-in/out operation";var OJ="Trying to use the same fader twice";
var PH="Trying to fade-in/out a group which belongs to another owner";var N0="No view to restack";
var CJ="View is not in this group";var Fn="Sibling view does not belong to the group";
var N1="No view to remove";var OK="No view to add";var KF="View already in a group";
var OL="Recursive invalidate during active update cycle.";var Nc=[-8,-8,9,9];var
OM="No group to end the modal state.";var Sr="The group is not modal.";var T8="No group to obtain the modal state.";
var V8="The group serves already as the \'virtual keyboard\'.";var V9="The group is already modal.";
var I_="View is not in the same group or it is not embedded within the Outline "+
"Box";var T9="The method SwitchToDialog() is not available in Core::VerticalList.";
var V_="The method DismissDialog() is not available in Core::VerticalList.";var V$=
"The method PresentDialog() is not available in Core::VerticalList.";var Y5="The method FadeGroup() is not available in Core::VerticalList.";
var Ss="The method RestackBehind() is not available in Core::VerticalList.";var Y6=
"The method RestackTop() is not available in Core::VerticalList.";var Wa="The method Restack() is not available in Core::VerticalList.";
var T_="The method Remove() is not available in Core::VerticalList.";var T$="The method AddBehind() is not available in Core::VerticalList.";
var QS="The method Add() is not available in Core::VerticalList.";var Wb="The Slide Touch Handler:";
var ON="is already connected with a view.";var PJ="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Ua=[0,0,170,120];var Y7="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Wc="The method DismissDialog() is not available in Core::HorizontalList.";var
Y8="The method PresentDialog() is not available in Core::HorizontalList.";var Y9=
"The method FadeGroup() is not available in Core::HorizontalList.";var Wd="The method RestackBehind() is not available in Core::HorizontalList.";
var We="The method RestackTop() is not available in Core::HorizontalList.";var St=
"The method Restack() is not available in Core::HorizontalList.";var Y_="The method Remove() is not available in Core::HorizontalList.";
var Y$="The method AddBehind() is not available in Core::HorizontalList.";var Abz=
"The method Add() is not available in Core::HorizontalList.";var Su=[0,0,1,1];var
AbA="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var AbB="Trying to cancel a task not belonging to this queue!";var Za="Trying to enqueue a task twice!";
var Wf="12";var Zb="%";
C.Cc={Af:null,AG:null,Ac:null,Eo:null,U:0x103,JQ:0,Pt:0x14,Ase:function(BH,Ahc){}
,A6R:function(E){if(this.JQ===E)return;this.JQ=E;if(!!this.Ac){var Ah1=this.Af;var
GW=0;while(!!Ah1&&(E>Ah1.JQ)){Ah1=Ah1.Af;GW=GW+1;}Ah1=this.AG;while(!!Ah1&&(E<Ah1.
JQ)){Ah1=Ah1.AG;GW=GW-1;}if(!!GW)this.Ac.Kh(this,GW);}},AV:function(E){var B;var
GW=E^this.Pt;if(!GW)return;this.Pt=E;if(!!this.Eo&&!((this.U&0x400)===0x400)){this.
Ac.U=this.Ac.U|0x5000;A.ow([B=this.Ac,B.H_],this);this.Ac.Bg([0,0,(B=this.Ac.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eo&&((this.U&0x400)===0x400)){this.Eo.Nt.U=this.Eo.
Nt.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);}},Ia:function(
){var B7=this.Ac;while(!!B7){var Ip=(C.Root.isPrototypeOf(B7)?B7:null);if(!!Ip)return Ip;
B7=B7.Ac;}return null;},J9:function(CV,aClip,aOffset,Cd,aBlend){},GH:function(CK
){return null;},Xm:function(Db,BF,N4,AbR,AbW,AbV){return null;},As4:function(Db){
return Db;},Atc:function(BH,MC){return B9;},Ame:function(aOffset,ArQ){},GetExtent:
function(){return BG;},C3:function(Ahe,Anm){var B;if(((this.U&0x200)===0x200))Ahe=
Ahe&~0x400;var AZJ=(this.U&~Anm)|Ahe;var Akx=AZJ^this.U;this.U=AZJ;if(!!this.Ac&&
!!(Akx&0x14)){var A$f=((this.U&0x14)===0x14);if(A$f&&!this.Ac.AY)this.Ac.A_(this
);if(!A$f&&(this.Ac.AY===this))this.Ac.A_(this.Ac.AAP(this,0x14));}if(!!this.Ac&&
!!(Akx&0x403))this.Ac.Bg(this.GetExtent());if(((!!this.Eo&&!!this.Ac)&&((AZJ&0x400
)===0x400))&&((Akx&0x1)===0x1)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.
ow([B=this.Ac,B.H_],this);}if(!!this.Ac&&((Akx&0x400)===0x400)){this.Eo=null;this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);}},_Init:function(
aArg){this.__proto__=C.Cc;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ac)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Eo)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.Ajd={Ev:A.vw,Em:A.vw,Ase:function(BH,Ahc){var Ar=A._NewObject(
C.AB1,0);this.Eo=null;Ar.extent=this.getExtent();Ar.A7=BH;Ar.Nt=Ahc;Ar.AhP=this.
Em;Ar.AhQ=this.Ev;this.Eo=Ar;},Atc:function(BH,MC){var B;var EL=this.Pt;var Ar=(
C.AB1.isPrototypeOf(B=this.Eo)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var
x2=Ar.extent[2];var y2=Ar.extent[3];var JZ=[BH[2]-BH[0],BH[3]-BH[1]];var BT=x2-x1;
var BK=y2-y1;var tmp;if(!MC){var Nw=[(B=Ar.A7)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A7[0];
y1=y1-Ar.A7[1];if(Nw[0]!==JZ[0]){var HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);
var P2=((EL&0x1)===0x1);if(!HI&&(P2||!HJ))x1=((x1*JZ[0])/Nw[0])|0;if(!HJ&&(P2||!
HI)){x2=x2-Ar.A7[0];x2=((x2*JZ[0])/Nw[0])|0;x2=x2-JZ[0];}else x2=x2-Ar.A7[2];x1=
x1+BH[0];x2=x2+BH[2];if(!P2){if(HI&&!HJ)x2=x1+BT;else if(!HI&&HJ)x1=x2-BT;else{x1=
x1+((((x2-x1)-BT)/2)|0);x2=x1+BT;}}}else{x2=x2-Ar.A7[2];x1=x1+BH[0];x2=x2+BH[2];
}if(Nw[1]!==JZ[1]){var HK=((EL&0x10)===0x10);var HH=((EL&0x20)===0x20);var P3=((
EL&0x2)===0x2);if(!HK&&(P3||!HH))y1=((y1*JZ[1])/Nw[1])|0;if(!HH&&(P3||!HK)){y2=y2-
Ar.A7[1];y2=((y2*JZ[1])/Nw[1])|0;y2=y2-JZ[1];}else y2=y2-Ar.A7[3];y1=y1+BH[1];y2=
y2+BH[3];if(!P3){if(HK&&!HH)y2=y1+BK;else if(!HK&&HH)y1=y2-BK;else{y1=y1+((((y2-
y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-Ar.A7[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(
MC){case 3:{x1=BH[0];x2=x1+BT;}break;case 4:{x2=BH[2];x1=x2-BT;}break;case 1:{y1=
BH[1];y2=y1+BK;}break;case 2:{y2=BH[3];y1=y2-BK;}break;default:;}if((MC===3)||(MC===
4)){var HK=((EL&0x10)===0x10);var HH=((EL&0x20)===0x20);var P3=((EL&0x2)===0x2);
if(P3){y1=BH[1];y2=BH[3];}else if(HK&&!HH){y1=BH[1];y2=y1+BK;}else if(HH&&!HK){y2=
BH[3];y1=y2-BK;}else{y1=BH[1]+((((BH[3]-BH[1])-BK)/2)|0);y2=y1+BK;}}if((MC===1)||(
MC===2)){var HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);var P2=((EL&0x1)===0x1);
if(P2){x1=BH[0];x2=BH[2];}else if(HI&&!HJ){x1=BH[0];x2=x1+BT;}else if(HJ&&!HI){x2=
BH[2];x1=x2-BT;}else{x1=BH[0]+((((BH[2]-BH[0])-BT)/2)|0);x2=x1+BT;}}}Ar.isEmpty=(
x1>=x2)||(y1>=y2);BT=x2-x1;BK=y2-y1;if(Ar.AhQ[0]<Ar.AhP[0]){tmp=x1;x1=x2-1;x2=tmp-
1;}if(Ar.AhQ[1]<Ar.AhP[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-
y1)===1)y2=y1;if(((this.U&0x100)===0x100)){this.Em=[x1,y1];this.Ev=[x2,y2];}else{
this.D6([x1,y1]);this.DN([x2,y2]);this.Eo=Ar;}return[BT,BK];},Ame:function(aOffset
,ArQ){if(ArQ){this.Em=A.aak(this.Em,aOffset);this.Ev=A.aak(this.Ev,aOffset);}else{
this.D6(A.aak(this.Em,aOffset));this.DN(A.aak(this.Ev,aOffset));}},GetExtent:function(
){if(!!this.Eo&&this.Eo.isEmpty)return BG;return this.getExtent();},getExtent:function(
){var x1=this.Em[0];var y1=this.Em[1];var x2=this.Ev[0];var y2=this.Ev[1];var BT=
x2-x1;var BK=y2-y1;var tmp;if(BT<0)BT=-BT;if(BK<0)BK=-BK;if(BT>=BK){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(BK>=BT){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DN:function(
E){var B;if(A.z8(E,this.Ev))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());this.Eo=null;this.Ev=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000
)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_
],this);}},D6:function(E){var B;if(A.z8(E,this.Em))return;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Eo=null;this.Em=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===
0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|
0x4000;A.ow([B=this.Ac,B.H_],this);}},_Init:function(aArg){C.Cc._Init.call(this,
aArg);this.__proto__=C.Ajd;},_className:"Core::LineView"};C.YE={Kg:A.vw,Mv:A.vw,
Ev:A.vw,Em:A.vw,Ase:function(BH,Ahc){var Ar=A._NewObject(C.AB2,0);this.Eo=null;Ar.
extent=this.GetExtent();Ar.A7=BH;Ar.Nt=Ahc;Ar.AhP=this.Em;Ar.AhQ=this.Ev;Ar.AyR=
this.Mv;Ar.AyS=this.Kg;this.Eo=Ar;},Atc:function(BH,MC){var B;var EL=this.Pt;var
Ar=(C.AB2.isPrototypeOf(B=this.Eo)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[
1];var x2=Ar.extent[2];var y2=Ar.extent[3];var JZ=[BH[2]-BH[0],BH[3]-BH[1]];var BT=
x2-x1;var BK=y2-y1;if(!MC){var Nw=[(B=Ar.A7)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A7[0];y1=
y1-Ar.A7[1];if(Nw[0]!==JZ[0]){var HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);var
P2=((EL&0x1)===0x1);if(!HI&&(P2||!HJ))x1=((x1*JZ[0])/Nw[0])|0;if(!HJ&&(P2||!HI)){
x2=x2-Ar.A7[0];x2=((x2*JZ[0])/Nw[0])|0;x2=x2-JZ[0];}else x2=x2-Ar.A7[2];x1=x1+BH[
0];x2=x2+BH[2];if(!P2){if(HI&&!HJ)x2=x1+BT;else if(!HI&&HJ)x1=x2-BT;else{x1=x1+((((
x2-x1)-BT)/2)|0);x2=x1+BT;}}}else{x2=x2-Ar.A7[2];x1=x1+BH[0];x2=x2+BH[2];}if(Nw[
1]!==JZ[1]){var HK=((EL&0x10)===0x10);var HH=((EL&0x20)===0x20);var P3=((EL&0x2)===
0x2);if(!HK&&(P3||!HH))y1=((y1*JZ[1])/Nw[1])|0;if(!HH&&(P3||!HK)){y2=y2-Ar.A7[1];
y2=((y2*JZ[1])/Nw[1])|0;y2=y2-JZ[1];}else y2=y2-Ar.A7[3];y1=y1+BH[1];y2=y2+BH[3];
if(!P3){if(HK&&!HH)y2=y1+BK;else if(!HK&&HH)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2
)|0);y2=y1+BK;}}}else{y2=y2-Ar.A7[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MC){case
3:{x1=BH[0];x2=x1+BT;}break;case 4:{x2=BH[2];x1=x2-BT;}break;case 1:{y1=BH[1];y2=
y1+BK;}break;case 2:{y2=BH[3];y1=y2-BK;}break;default:;}if((MC===3)||(MC===4)){var
HK=((EL&0x10)===0x10);var HH=((EL&0x20)===0x20);var P3=((EL&0x2)===0x2);if(P3){y1=
BH[1];y2=BH[3];}else if(HK&&!HH){y1=BH[1];y2=y1+BK;}else if(HH&&!HK){y2=BH[3];y1=
y2-BK;}else{y1=BH[1]+((((BH[3]-BH[1])-BK)/2)|0);y2=y1+BK;}}if((MC===1)||(MC===2)
){var HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);var P2=((EL&0x1)===0x1);if(P2){
x1=BH[0];x2=BH[2];}else if(HI&&!HJ){x1=BH[0];x2=x1+BT;}else if(HJ&&!HI){x2=BH[2];
x1=x2-BT;}else{x1=BH[0]+((((BH[2]-BH[0])-BT)/2)|0);x2=x1+BT;}}}Ar.isEmpty=(x1>=x2
)||(y1>=y2);BT=(x2-x1)-1;BK=(y2-y1)-1;var Ahw=Ar.extent[0];var Ahy=Ar.extent[1];
var Ae6=(Ar.extent[2]-Ahw)-1;var Ae5=(Ar.extent[3]-Ahy)-1;if(!Ae6)Ae6=1;if(!Ae5)
Ae5=1;if(((this.U&0x100)===0x100)){this.Em=[x1+((((Ar.AhP[0]-Ahw)*BT)/Ae6)|0),y1+((((
Ar.AhP[1]-Ahy)*BK)/Ae5)|0)];this.Ev=[x1+((((Ar.AhQ[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.
AhQ[1]-Ahy)*BK)/Ae5)|0)];this.Mv=[x1+((((Ar.AyR[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.AyR[
1]-Ahy)*BK)/Ae5)|0)];this.Kg=[x1+((((Ar.AyS[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.AyS[1]-
Ahy)*BK)/Ae5)|0)];}else{this.D6([x1+((((Ar.AhP[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.AhP[
1]-Ahy)*BK)/Ae5)|0)]);this.DN([x1+((((Ar.AhQ[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.AhQ[1
]-Ahy)*BK)/Ae5)|0)]);this.Ky([x1+((((Ar.AyR[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.AyR[1]-
Ahy)*BK)/Ae5)|0)]);this.Kz([x1+((((Ar.AyS[0]-Ahw)*BT)/Ae6)|0),y1+((((Ar.AyS[1]-Ahy
)*BK)/Ae5)|0)]);this.Eo=Ar;}return[BT+1,BK+1];},Ame:function(aOffset,ArQ){if(ArQ
){this.Em=A.aak(this.Em,aOffset);this.Ev=A.aak(this.Ev,aOffset);this.Mv=A.aak(this.
Mv,aOffset);this.Kg=A.aak(this.Kg,aOffset);}else{this.D6(A.aak(this.Em,aOffset));
this.DN(A.aak(this.Ev,aOffset));this.Ky(A.aak(this.Mv,aOffset));this.Kz(A.aak(this.
Kg,aOffset));}},GetExtent:function(){if(!!this.Eo&&this.Eo.isEmpty)return BG;var
x1=this.Em[0];var y1=this.Em[1];var x2=this.Mv[0];var y2=this.Mv[1];if((((this.Kg[
0]!==x1)||(this.Ev[1]!==y1))||(this.Ev[0]!==x2))||(this.Kg[1]!==y2)){if(this.Ev[
0]<x1)x1=this.Ev[0];if(this.Mv[0]<x1)x1=this.Mv[0];if(this.Kg[0]<x1)x1=this.Kg[0
];if(this.Ev[1]<y1)y1=this.Ev[1];if(this.Mv[1]<y1)y1=this.Mv[1];if(this.Kg[1]<y1
)y1=this.Kg[1];if(this.Em[0]>x2)x2=this.Em[0];if(this.Ev[0]>x2)x2=this.Ev[0];if(
this.Kg[0]>x2)x2=this.Kg[0];if(this.Em[1]>y2)y2=this.Em[1];if(this.Ev[1]>y2)y2=this.
Ev[1];if(this.Kg[1]>y2)y2=this.Kg[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;
}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Kz:function(E){var B;
if(A.z8(E,this.Kg))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));this.Eo=null;this.Kg=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);}},Ky:function(
E){var B;if(A.z8(E,this.Mv))return;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());this.Eo=null;this.Mv=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000
)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_
],this);}},DN:function(E){var B;if(A.z8(E,this.Ev))return;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Eo=null;this.Ev=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((!!this.Ac&&((this.U&0x400)===
0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|
0x4000;A.ow([B=this.Ac,B.H_],this);}},D6:function(E){var B;if(A.z8(E,this.Em))return;
if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Eo=null;this.
Em=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((!!this.
Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000)){this.U=this.U|0x800;
this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);}},AOJ:function(KI){var Hm=
A.aan(4,A.vw,null);var P=0;var H8=3;var AZi=false;var AZj=false;Hm.Set(0,this.Em
);Hm.Set(1,this.Ev);Hm.Set(2,this.Mv);Hm.Set(3,this.Kg);while(P<4){var BcO=Hm.Get(
P)[0];var AJb=Hm.Get(P)[1];var Bx5=Hm.Get(H8)[0];var A1h=Hm.Get(H8)[1];if(((AJb>
KI[1])!==(A1h>KI[1]))||((AJb<KI[1])!==(A1h<KI[1]))){var FY=((((Bx5-BcO)*(KI[1]-AJb
))/(A1h-AJb))|0)+BcO;if(KI[0]>FY)AZi=!AZi;if(KI[0]<FY)AZj=!AZj;}H8=P;P=P+1;}return AZi||
AZj;},Bfc:function(){return((((this.Em[0]===this.Kg[0])&&(this.Ev[0]===this.Mv[0
]))&&(this.Em[1]===this.Ev[1]))&&(this.Mv[1]===this.Kg[1]))||((((this.Em[0]===this.
Ev[0])&&(this.Mv[0]===this.Kg[0]))&&(this.Em[1]===this.Kg[1]))&&(this.Ev[1]===this.
Mv[1]));},_Init:function(aArg){C.Cc._Init.call(this,aArg);this.__proto__=C.YE;},
_className:"Core::QuadView"};C.ED={M:A.vx,Ase:function(BH,Ahc){var Ar=A._NewObject(
C.ApK,0);Ar.extent=this.M;Ar.A7=BH;Ar.Nt=Ahc;this.Eo=Ar;},Atc:function(BH,MC){var
B;var EL=this.Pt;var Ar=this.Eo;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var JZ=[BH[2]-BH[0],BH[3]-BH[1]];var BT=x2-x1;var BK=
y2-y1;if(!MC){var Nw=[(B=Ar.A7)[2]-B[0],B[3]-B[1]];x1=x1-Ar.A7[0];y1=y1-Ar.A7[1];
if(Nw[0]!==JZ[0]){var HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);var P2=((EL&0x1
)===0x1);if(!HI&&(P2||!HJ))x1=((x1*JZ[0])/Nw[0])|0;if(!HJ&&(P2||!HI)){x2=x2-Ar.A7[
0];x2=((x2*JZ[0])/Nw[0])|0;x2=x2-JZ[0];}else x2=x2-Ar.A7[2];x1=x1+BH[0];x2=x2+BH[
2];if(!P2){if(HI&&!HJ)x2=x1+BT;else if(!HI&&HJ)x1=x2-BT;else{x1=x1+((((x2-x1)-BT
)/2)|0);x2=x1+BT;}}}else{x2=x2-Ar.A7[2];x1=x1+BH[0];x2=x2+BH[2];}if(Nw[1]!==JZ[1
]){var HK=((EL&0x10)===0x10);var HH=((EL&0x20)===0x20);var P3=((EL&0x2)===0x2);if(
!HK&&(P3||!HH))y1=((y1*JZ[1])/Nw[1])|0;if(!HH&&(P3||!HK)){y2=y2-Ar.A7[1];y2=((y2
*JZ[1])/Nw[1])|0;y2=y2-JZ[1];}else y2=y2-Ar.A7[3];y1=y1+BH[1];y2=y2+BH[3];if(!P3
){if(HK&&!HH)y2=y1+BK;else if(!HK&&HH)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=
y1+BK;}}}else{y2=y2-Ar.A7[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MC){case 3:{x1=
BH[0];x2=x1+BT;}break;case 4:{x2=BH[2];x1=x2-BT;}break;case 1:{y1=BH[1];y2=y1+BK;
}break;case 2:{y2=BH[3];y1=y2-BK;}break;default:;}if((MC===3)||(MC===4)){var HK=((
EL&0x10)===0x10);var HH=((EL&0x20)===0x20);var P3=((EL&0x2)===0x2);if(P3){y1=BH[
1];y2=BH[3];}else if(HK&&!HH){y1=BH[1];y2=y1+BK;}else if(HH&&!HK){y2=BH[3];y1=y2-
BK;}else{y1=BH[1]+((((BH[3]-BH[1])-BK)/2)|0);y2=y1+BK;}}if((MC===1)||(MC===2)){var
HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);var P2=((EL&0x1)===0x1);if(P2){x1=BH[
0];x2=BH[2];}else if(HI&&!HJ){x1=BH[0];x2=x1+BT;}else if(HJ&&!HI){x2=BH[2];x1=x2-
BT;}else{x1=BH[0]+((((BH[2]-BH[0])-BT)/2)|0);x2=x1+BT;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.Eo=Ar;}return[x2-x1,y2-y1];},Ame:function(aOffset,ArQ){if(ArQ)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Ac&&((this.U&0x1)===0x1
))this.Ac.Bg(this.M);this.Eo=null;this.M=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if((!!this.Ac&&((this.U&0x400)===0x400))&&!((this.Ac.U&0x2000)===0x2000
)){this.U=this.U|0x800;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);}}
,_Init:function(aArg){C.Cc._Init.call(this,aArg);this.__proto__=C.ED;},_className:
"Core::RectView"};C.O={B6:null,B2:null,AIg:null,HM:null,Il:null,WA:null,Aos:null
,AY:null,GM:255,Init:function(aArg){this.Am();},J9:function(CV,aClip,aOffset,Cd,
aBlend){var B;Cd=((Cd+1)*this.GM)>>8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.
HM||(CV.Di===this))this.A_8(CV,aClip,A.aak(aOffset,this.M.slice(0,2)),Cd,aBlend);
else{var BJ=255|(255<<8)|(255<<16)|((Cd&0xFF)<<24);this.HM.Update();CV.A2z(aClip
,this.HM,0,A.aam(this.M,aOffset),B9,BJ,BJ,BJ,BJ,aBlend);}},Xm:function(Db,BF,N4,
AbR,AbW,AbV){var B;var W=this.B2;var AnW=null;var AD=BG;var J0=null;var AZB=!!this.
WA&&(!!this.WA.FE||!!this.WA.B6);if(((B=A.kz(Db,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;Db=A.aal(Db,this.M.slice(0,2));if(!!AbW){W=AbW;while(!!W&&(W.Ac!==this
))W=W.Ac;}while(!!W){if(((W.U&0x400)===0x400)&&!J0){J0=W.AG;while(!!J0&&!((J0.U&
0x200)===0x200))J0=J0.AG;if(!!J0)AD=A.kz(Db,J0.GetExtent());else AD=BG;}if(J0===
W){J0=null;AD=BG;}if((((((W.U&0x8)===0x8)&&((W.U&0x10)===0x10))&&!((W.U&0x40000)===
0x40000))&&!((W.U&0x20000)===0x20000))&&(!((W.U&0x10000)===0x10000)||((this.Il.Di===
W)&&!AZB))){var extent=W.GetExtent();var AHJ=AbR;var AnG=null;if(AHJ===W)AHJ=null;
if(((W.U&0x400)===0x400)){if(!(((B=A.kz(extent,AD))[0]>=B[2])||(B[1]>=B[3])))AnG=
W.Xm(AD,BF,N4,AHJ,AbW,AbV);}else if(!(((B=A.kz(extent,Db))[0]>=B[2])||(B[1]>=B[3
]))||(AbR===W))AnG=W.Xm(Db,BF,N4,AHJ,AbW,AbV);W=W.AG;if(!!AnG){if(!AnW||((AnG.Atm<
AnW.Atm)&&(AnG.Atm>=0)))AnW=AnG;if(!AnG.Atm)W=null;}}else W=W.AG;AbW=null;}return AnW;
},As4:function(Db){var B;var F;var W=this.B6;var MF=BG;var AyL=true;var result=(
Db=F=A.aal(Db,this.M.slice(0,2)),F);while(!!W){if(((W.U&0x200)===0x200)){var AyK=(
C.Y.isPrototypeOf(W)?W:null);MF=A.kz(Db,AyK.M);AyL=((AyK.U&0x1)===0x1);}if(((W.U&
0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyL){var AD=A.kz(W.GetExtent(),MF);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.As4(AD));}}else{var AD=A.
kz(W.GetExtent(),Db);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))result=A.vS(result,W.As4(
AD));}}W=W.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},C3:function(
Ahe,Anm){var B;var ZB=this.U;C.ED.C3.call(this,Ahe,Anm);var Akx=this.U^ZB;if(!!this.
AY&&((Akx&0x40)===0x40)){if(((this.U&0x40)===0x40))this.AY.C3(0x40,0x0);else this.
AY.C3(0x0,0x40);}if(!!this.Il&&((Akx&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((
this.Il.Di.U&0x14)===0x14))this.Il.Di.C3(0x40,0x0);else this.Il.Di.C3(0x0,0x40);
}if(!!Akx){this.U=this.U|0x8000;A.ow([this,this.H_],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var AkW=[(B=this.M)[2]-B[0],B[3]-B[1]];var AIn=[E[2]-E[
0],E[3]-E[1]];var Aoz=!A.z8(AkW,AIn);if(Aoz&&!!this.HM){this.HM.Aqd(AIn);A.vv(this
,0);A.vv(this.HM,0);}C.ED.G.call(this,E);if((Aoz&&(AkW[0]>0))&&(AkW[1]>0)){var A7=[
].concat(B9,AkW);var W=this.B6;while(!!W){if((!W.Eo&&(W.Pt!==0x14))&&!((W.U&0x400
)===0x400))W.Ase(A7,null);W=W.Af;}}if(Aoz){this.U=this.U|0x5000;A.ow([this,this.
H_],this);}},A0x:function(CK){var A$4=(C.KeyEvent.isPrototypeOf(CK)?CK:null);var
DX=this.AIg;if(!A$4)return null;while(!!DX&&(!DX.Bv||!DX.GH(A$4)))DX=DX.Af;return DX;
},BxP:function(H){if(!!this.HM){this.HM.Di=this;var AD=A.aal(this.As4(A.aam(this.
HM.Qf,this.M.slice(0,2))),this.M.slice(0,2));this.HM.AtG(AD,AD,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A_8(this.HM,AD,B9,255,true);this.HM.Di=null;}
},A_8:function(CV,aClip,aOffset,Cd,aBlend){var B;var W=this.B6;var MF=BG;var AyL=
true;this.Bea(CV,aClip,aOffset,Cd,aBlend);while(!!W){if(((W.U&0x200)===0x200)){var
AyK=(C.Y.isPrototypeOf(W)?W:null);MF=A.kz(aClip,A.aam(AyK.M,aOffset));AyL=((AyK.
U&0x1)===0x1);}if(((W.U&0x1)===0x1)){if(((W.U&0x400)===0x400)){if(AyL){var AD=A.
kz(A.aam(W.GetExtent(),aOffset),MF);if(!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J9(CV
,AD,aOffset,Cd,aBlend);}}else{var AD=A.kz(A.aam(W.GetExtent(),aOffset),aClip);if(
!((AD[0]>=AD[2])||(AD[1]>=AD[3])))W.J9(CV,AD,aOffset,Cd,aBlend);}}W=W.Af;}this.Bed(
CV,aClip,aOffset,Cd,aBlend);},BbR:function(){var B;var AY_=((this.U&0x1000)===0x1000
);var AhC=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var Zp=false;var Acd=BG;var KK=BG;var
Zq=B9;var Asa=0;var Asb=0;var Ar$=0;var PV=0;var W=this.B2;var J0=null;var AkO=null;
while(!!W){if(((W.U&0x800)===0x800)){Zp=true;W.U=W.U&~0x800;}if(Zp&&((W.U&0x200)===
0x200)){Zp=false;if(!!(C.Y.isPrototypeOf(W)?W:null).AfZ)W.U=W.U|0x1000;}W=W.AG;}
Zp=false;W=this.B6;if(AY_){this.U=this.U&~0x1000;AY_=!((AhC[0]>=AhC[2])||(AhC[1]>=
AhC[3]));}this.U=this.U|0x2000;while(!!W){if(!AkO&&(Ar$!==PV)){var AcA=W;var AIJ=
0;var Ay6=Acd[2]-Acd[0];var Axr=Acd[3]-Acd[1];var AHx=0;var AoL=B9;do if(((AcA.U&
0x200)===0x200))AcA=null;else if(((AcA.U&0x401)===0x401)){AoL=[(B=AcA.GetExtent(
))[2]-B[0],B[3]-B[1]];if((PV===3)||(PV===4))Ay6=Ay6-AoL[0];if((PV===1)||(PV===2)
)Axr=Axr-AoL[1];if(!AkO||((Ay6>=0)&&(Axr>=0))){AkO=AcA;AcA=AcA.Af;if((PV===3)||(
PV===4)){Ay6=Ay6-Asa;if(AoL[1]>AIJ)AIJ=AoL[1];}if((PV===1)||(PV===2)){Axr=Axr-Asb;
if(AoL[0]>AHx)AHx=AoL[0];}}else AcA=null;}else AcA=AcA.Af;while(!!AcA);if(!AkO)AkO=
J0;KK=Acd;switch(Ar$){case 9:case 11:KK=[].concat(KK.slice(0,3),KK[1]+AIJ);break;
case 10:case 12:KK=A.aaS(KK,KK[3]-AIJ);break;case 5:case 7:KK=A.aaQ(KK,KK[0]+AHx
);break;case 6:case 8:KK=[].concat(KK[2]-AHx,KK.slice(1,4));break;default:;}}if(((
W.U&0x400)===0x400)){if(!!W.Eo&&(W.Eo.Nt!==J0))W.Eo=null;if((!W.Eo&&Zp)&&((W.Pt!==
0x14)||!!PV))W.Ase(KK,J0);}if(!!W.Eo){if(AY_&&!((W.U&0x400)===0x400))W.Atc(AhC,0
);if(Zp&&((W.U&0x400)===0x400)){var CY=W.Atc(A.aam(KK,Zq),PV);if(((W.U&0x1)===0x1
)){var Bm=B9;switch(PV){case 3:Bm=[CY[0]+Asa,Bm[1]];break;case 4:Bm=[-CY[0]-Asa,
Bm[1]];break;case 1:Bm=[Bm[0],CY[1]+Asb];break;case 2:Bm=[Bm[0],-CY[1]-Asb];break;
default:;}Zq=A.aak(Zq,Bm);}}}if(((W.U&0x200)===0x200)){if(Zp)A.ow(J0.El,J0);Zp=((
W.U&0x1000)===0x1000);J0=(C.Y.isPrototypeOf(W)?W:null);if(Zp){W.U=W.U&~0x1000;Ar$=
J0.AfZ;PV=Ar$;Acd=A.aam(J0.M,J0.Bn);KK=Acd;Zq=B9;Asa=J0.Space+J0.AR$;Asb=J0.Space;
Zp=!((Acd[0]>=Acd[2])||(Acd[1]>=Acd[3]));AkO=null;switch(Ar$){case 9:case 10:PV=
3;break;case 11:case 12:PV=4;break;case 5:case 6:PV=1;break;case 7:case 8:PV=2;break;
default:;}}if(Zp)this.Bg(J0.M);}if(W===AkO){switch(Ar$){case 9:case 11:Zq=[0,(Zq[
1]+(KK[3]-KK[1]))+Asb];break;case 10:case 12:Zq=[0,(Zq[1]-(KK[3]-KK[1]))-Asb];break;
case 5:case 7:Zq=[(Zq[0]+(KK[2]-KK[0]))+Asa,0];break;case 6:case 8:Zq=[(Zq[0]-(KK[
2]-KK[0]))-Asa,0];break;default:;}AkO=null;}W=W.Af;}if(Zp)A.ow(J0.El,J0);this.U=
this.U&~0x2000;this.Bf([AhC[2]-AhC[0],AhC[3]-AhC[1]]);},H_:function(H){var B;var
BxY=((this.U&0x1000)===0x1000);if(((this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;
this.BbR();}if(((this.U&0x8000)===0x8000)||BxY){this.U=this.U&~0x8000;this.Ag(this.
U);}},A_:function(E){var B;if(!!E&&(E.Ac!==this))throw new Error(EV);if(!!E&&!((
E.U&0x14)===0x14))E=null;if(!!E&&((E.U&0x10000)===0x10000))E=null;if(E===this.AY
)return;if(!!this.AY)this.AY.C3(0x0,0x60);this.AY=E;if(!!E){if(((this.U&0x40)===
0x40))E.C3(0x60,0x0);else E.C3(0x20,0x0);}},A9o:function(An){this.A_(An);},APV:function(
){return!!this.HM;},Ap9:function(E){var B;if(!!this.HM===E)return;if(E){this.HM=
A._NewObject(A.Graphics.Canvas,0);this.HM.Aqd([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
HM.ACq=[this,this.BxP];}else{this.HM.ACq=null;this.HM.Aqd(B9);this.HM=null;}if(!
!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.vv(this,0);},A4$:function(){
var B;return((this.U&0x10)===0x10);},Ap:function(E){if(E)this.C3(0x10,0x0);else this.
C3(0x0,0x10);},DL:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.GM)return;
this.GM=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},AXa:function(An
){this.DL(An);},Ai:function(E){if(E)this.C3(0x400,0x0);else this.C3(0x0,0x400);}
,BhT:function(E){if(E)this.C3(0x2,0x0);else this.C3(0x0,0x2);},E$:function(){var
B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C3(0x1,0x0);else this.C3(
0x0,0x1);},Bed:function(CV,aClip,aOffset,Cd,aBlend){},Bea:function(CV,aClip,aOffset
,Cd,aBlend){},GetMinimalSize:function(){return B9;},ASg:function(Ih,N3,Wl,SA,SB,
Ahd,OS,Q0,Lk,Li,Lj){var B;if(!this.Il){this.AjH(Ih,N3,Wl,SA,SB,null,null,Lk,Li,Lj
);return;}var AkV=this.Il;var KR=AkV.Af;if(((Ih.U&0x10000)===0x10000)&&(this.Il.
Di!==Ih))throw new Error(GS);var Ack=A._NewObject(C.ALu,0);var Q6=AkV.Q6;var Re=
null;var L9=null;if(!!KR){Re=KR.Re;L9=KR.L9;}if(!!KR&&!!AkV.Aor)Re=AkV.Aor;if(!!
KR&&!!OS)L9=OS;if(!!Ahd)Q6=Ahd;if(!N3)N3=A._GetAutoObject(A.abm.AvK);if(!Wl)Wl=N3;
if(!SB)SB=SA;if(!SA)SA=SB;Ack.Q6=Wl;Ack.L9=SA;Ack.Re=SB;Ack.Aor=Q0;Ack.Di=Ih;Ack.
Af=this.Il.Af;this.Il.Af=null;this.Il=Ack;if(this.AY===Ih)this.A_(null);AkV.Di.C3(
0x0,0x10040);if(((this.U&0x40)===0x40)&&((Ih.U&0x4)===0x4))Ih.C3(0x10040,0x0);else
Ih.C3(0x10000,0x0);if(!!L9){this.NF(KR.Di,L9.Ac5(),null,null,Lj);this.NF(AkV.Di,
Q6.RD(),null,null,true);this.NF(Ack.Di,N3.RE(),Lk,Li,true);}else if(!!Re){this.NF(
KR.Di,Re.Ac6(),null,null,Lj);this.NF(AkV.Di,Q6.RD(),null,null,true);this.NF(Ack.
Di,N3.RE(),Lk,Li,true);}else if(!!Q6){this.NF(AkV.Di,Q6.RD(),null,null,Lj);this.
NF(Ack.Di,N3.RE(),Lk,Li,true);}else this.NF(Ack.Di,N3.RE(),Lk,Li,Lj);},Ao8:function(
Ih,Ahd,OS,Q0,Lk,Li,Lj){var B;if(!this.Il)return;if(!Ih)return;var Kn=this.Il;var
KR=this.Il.Af;var Asv=null;while((!!Kn&&(Kn.Di!==Ih))&&!!Kn.Af){Asv=Kn;Kn=KR;KR=
Kn.Af;}if(!Kn||(Kn.Di!==Ih))throw new Error(Js);if(!Asv){this.Il=KR;Kn.Af=null;}
else{Asv.Af=KR;Kn.Af=null;}Kn.Di.C3(0x0,0x10040);if(((((this.U&0x40)===0x40)&&!!
KR)&&!Asv)&&((KR.Di.U&0x4)===0x4))KR.Di.C3(0x40,0x0);var Q6=Kn.Q6;var Re=null;var
L9=null;if(!!KR)Re=KR.Re;if(!!KR&&!!Kn.Aor)Re=Kn.Aor;if(!!KR&&!!Q0)Re=Q0;if(!!Asv&&
!!KR)L9=KR.L9;if((!!Asv&&!!KR)&&!!OS)L9=OS;if(!!Ahd)Q6=Ahd;if(!!L9){this.NF(KR.Di
,L9.Ac5(),null,null,Lj);this.NF(Kn.Di,Q6.RD(),Lk,Li,true);}else if(!!Re){this.NF(
KR.Di,Re.Ac6(),null,null,Lj);this.NF(Kn.Di,Q6.RD(),Lk,Li,true);}else this.NF(Kn.
Di,Q6.RD(),Lk,Li,Lj);},AjH:function(Ih,N3,Wl,SA,SB,OS,Q0,Lk,Li,Lj){var B;if(!Ih)
return;if(!!this.Il&&(this.Il.Di===Ih)){this.ASg(Ih,N3,Wl,SA,SB,null,OS,Q0,Lk,Li
,Lj);return;}if(((Ih.U&0x10000)===0x10000))throw new Error(GS);var Kn=A._NewObject(
C.ALu,0);if(!!this.Il&&!this.Il.L9){if(!Q0)Q0=OS;if(!OS)OS=Q0;}var L9=null;if(!!
this.Il)L9=this.Il.L9;if(!!this.Il&&!!OS)L9=OS;if(!N3)N3=A._GetAutoObject(A.abm.
AvK);if(!Wl)Wl=N3;if(!SB)SB=SA;if(!SA)SA=SB;Kn.Q6=Wl;Kn.L9=SA;Kn.Re=SB;Kn.Aor=Q0;
if(this.AY===Ih)this.A_(null);if(!!this.Il)this.Il.Di.C3(0x0,0x40);if(((this.U&0x40
)===0x40)&&((Ih.U&0x4)===0x4))Ih.C3(0x10040,0x0);else Ih.C3(0x10000,0x0);Kn.Di=Ih;
Kn.Af=this.Il;this.Il=Kn;if(!!L9){this.NF(this.Il.Af.Di,L9.Ac5(),null,null,Lj);this.
NF(Ih,N3.RE(),Lk,Li,true);}else this.NF(Ih,N3.RE(),Lk,Li,Lj);},A3G:function(Ae){
var B;return(B=Ae)&&((this.U&B)===B);},A4f:function(KI){var tmp=this;while(!!tmp
){KI=A.aaj(KI,tmp.M.slice(0,2));tmp=tmp.Ac;}return KI;},Be_:function(KI){var tmp=
this;while(!!tmp){KI=A.aak(KI,tmp.M.slice(0,2));tmp=tmp.Ac;}return KI;},DispatchEvent:
function(CK){var B;var W=this.AY;var B7=(C.O.isPrototypeOf(W)?W:null);var Gn=null;
var AZB=!!this.WA&&(!!this.WA.FE||!!this.WA.B6);if(!!W&&((((W.U&0x10000)===0x10000
)||((W.U&0x40000)===0x40000))||((W.U&0x20000)===0x20000))){W=null;B7=null;}if(!!
this.Il&&!AZB)Gn=this.Il.Di.DispatchEvent(CK);if(!Gn&&!!B7)Gn=B7.DispatchEvent(CK
);else if(!Gn&&!!W)Gn=W.GH(CK);if(!Gn)Gn=this.GH(CK);if(!Gn)Gn=this.A0x(CK);return Gn;
},BroadcastEventAtPosition:function(CK,IM,aFilter){var B;var W=this.B2;var Gn=null;
while(!!W&&!Gn){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&A.vt(W.GetExtent(),
IM)){var B7=(C.O.isPrototypeOf(W)?W:null);if(!!B7)Gn=B7.BroadcastEventAtPosition(
CK,A.aaj(IM,B7.M.slice(0,2)),aFilter);else Gn=W.GH(CK);}W=W.AG;}if(!Gn)Gn=this.GH(
CK);return Gn;},BroadcastEvent:function(CK,aFilter){var B;var W=this.B2;var Gn=null;
while(!!W&&!Gn){if(!aFilter||((B=aFilter)&&((W.U&B)===B))){var B7=(C.O.isPrototypeOf(
W)?W:null);if(!!B7)Gn=B7.BroadcastEvent(CK,aFilter);else Gn=W.GH(CK);}W=W.AG;}if(
!Gn)Gn=this.GH(CK);if(!Gn)Gn=this.A0x(CK);return Gn;},Bf:function(aSize){},Ag:function(
Ae){},Bfo:function(){this.U=this.U|0x4000;A.ow([this,this.H_],this);},Am:function(
){this.U=this.U|0x8000;A.ow([this,this.H_],this);},Bg:function(Db){var B;var B7=
this;while(!!B7&&!((Db[0]>=Db[2])||(Db[1]>=Db[3]))){var Zn=B7.HM;if(!B7.Ac&&(B7!==
this)){B7.Bg(Db);return;}if(!!Zn){var BvK=Zn.Qf;Zn.Qf=A.vS(Zn.Qf,Db);if(!A.z9(BvK
,Zn.Qf)){A.vv(B7,0);A.vv(Zn,0);}}if(!((B7.U&0x1)===0x1))return;Db=A.kz(A.aam(Db,
B7.M.slice(0,2)),B7.M);B7=B7.Ac;}},RN:function(Ah,GC,aFilter){var B;if(!Ah||(Ah.
Ac!==this))return null;var Afj=A.zT(Ah.GetExtent());var W=Ah;var AYl=null;var A_K=
0;var IR=0x10000;var AIF;if(((aFilter&0x10000)===0x10000))IR=0x0;var top=((GC===
4)||(GC===1))||(GC===6);var bottom=((GC===5)||(GC===3))||(GC===8);var left=((GC===
2)||(GC===1))||(GC===3);var right=((GC===7)||(GC===6))||(GC===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!W){W=W.AG;if(!W)W=this.B2;if(W===Ah)W=null;
if((!!W&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IR||!((B=IR)&&((W.U&B)===B
))))for(AIF=0;AIF<2;AIF++){var AM=W.GetExtent();var s=[AM[2]-AM[0],AM[3]-AM[1]];
if(!!!AIF){if((left&&(s[0]>s[1]))&&(AM[2]<Afj[0]))AM=[].concat(AM[2]-s[1],AM.slice(
1,4));if((right&&(s[0]>s[1]))&&(AM[0]>Afj[0]))AM=A.aaQ(AM,AM[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AM[3]<Afj[1]))AM=A.aaS(AM,AM[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AM[
1]>Afj[1]))AM=[].concat(AM.slice(0,3),AM[1]+s[0]);}var Bm=A.aaj(A.zT(AM),Afj);var
Q2=Bm;if(Q2[0]<0)Q2=[-Q2[0],Q2[1]];if(Q2[1]<0)Q2=[Q2[0],-Q2[1]];if(((((!left||(Bm[
0]<=-Q2[1]))&&(!right||(Bm[0]>=Q2[1])))&&(!top||(Bm[1]<=-Q2[0])))&&(!bottom||(Bm[
1]>=Q2[0])))&&((Q2[0]>0)||(Q2[1]>0))){var Q8=Bm[0];var Q9=Bm[1];var Jb=Math.sqrt((
Q8*Q8)+(Q9*Q9));var AIe=0;if(!left&&!right)AIe=Jb/Q2[1];if(!top&&!bottom)AIe=Jb/
Q2[0];Jb=(Jb*AIe)*AIe;if((Jb<A_K)||!AYl){A_K=Jb;AYl=W;}}}}return AYl;},Apd:function(
Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B2;var IR=0x10000;
if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.AG;while(!!W){if((!aFilter||((
B=aFilter)&&((W.U&B)===B)))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;W=W.AG;}return null;
},U6:function(Ah,aFilter){var B;if(!!Ah&&(Ah.Ac!==this))return null;var W=this.B6;
var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.Af;while(!!W
){if((!aFilter||((B=aFilter)&&((W.U&B)===B)))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;
W=W.Af;}return null;},AAP:function(Ah,aFilter){var B;if(!Ah||(Ah.Ac!==this))return null;
var AkT=Ah.Af;var Ak7=Ah.AG;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;
while(!!AkT||!!Ak7){if((!!AkT&&(!aFilter||((B=aFilter)&&((AkT.U&B)===B))))&&(!IR||
!((B=IR)&&((AkT.U&B)===B))))return AkT;if((!!Ak7&&(!aFilter||((B=aFilter)&&((Ak7.
U&B)===B))))&&(!IR||!((B=IR)&&((Ak7.U&B)===B))))return Ak7;if(!!AkT)AkT=AkT.Af;if(
!!Ak7)Ak7=Ak7.AG;}return null;},C9:function(aFilter){var B;var W=this.B6;var AD=
BG;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;while(!!W){if((!((W.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((W.U&B)===B))))&&(!IR||!((B=IR)&&((W.
U&B)===B))))AD=A.vS(AD,W.GetExtent());W=W.Af;}return AD;},NF:function(Kl,FC,Lk,Li
,Lj){var B;if(!Kl)return;if(!FC)throw new Error(IL);if((!!FC.O||!!FC.Ac)||!!FC.O3
)throw new Error(OJ);if(!!Kl.Ac&&(Kl.Ac!==this))throw new Error(PH);if(!this.WA)
this.WA=A._NewObject(C.ASl,0);FC.Ac=this;FC.O=Kl;FC.AIq=Li;FC.AZX=Lk;if(!!Kl.Aos
)Kl.Aos.O3.Bkq(Kl.Aos);Kl.Aos=FC;Kl.U=Kl.U|0x20000;if((Lj&&!!this.WA.B2)&&!this.
WA.B2.AOG())(A.abm.AAK.isPrototypeOf(B=this.WA.B2)?B:null).A1z(FC);else{var O3=A.
_NewObject(A.abm.AAK,0);O3.A1z(FC);this.WA.A7t(O3,false);}},AgK:function(Ah,JV){
var B;if(!Ah)throw new Error(N0);if(Ah.Ac!==this)throw new Error(CJ);if(!!JV&&(JV.
Ac!==this))throw new Error(Fn);if(Ah.Af===JV)return;if(((Ah.U&0x401)===0x401)){if(
!!Ah.AG&&!!Ah.Eo)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([
this,this.H_],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;
Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H_],this);}if(!!Ah.Af)Ah.Af.
AG=Ah.AG;else this.B2=Ah.AG;if(!!Ah.AG)Ah.AG.Af=Ah.Af;else this.B6=Ah.Af;var Gm=
null;var Ij=this.B2;var Lv=Ah.JQ;if(!!JV){Gm=JV;Ij=JV.AG;}if(!!Gm&&(Lv>Gm.JQ))Lv=
Gm.JQ;if(!!Ij&&(Lv<Ij.JQ))Lv=Ij.JQ;if(Lv!==Ah.JQ){Ah.Ac=null;Ah.A6R(Lv);Ah.Ac=this;
}if(!JV){if(!!this.B2)this.B2.Af=Ah;Ah.AG=this.B2;Ah.Af=null;this.B2=Ah;}else{Ah.
Af=JV;Ah.AG=JV.AG;JV.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}if(this.B6===JV)this.B6=Ah;if(((
Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());},QF:function(Ah){var B;if(!Ah)throw new
Error(N0);if(Ah.Ac!==this)throw new Error(CJ);if(!Ah.Af)return;var Ij=this.B2;var
Lv=Ah.JQ;while(!!Ij&&(Ij.JQ>Lv))Ij=Ij.AG;if(((Ij===Ah)||!Ij)||(Ij.Af===Ah))return;
if(((Ah.U&0x401)===0x401)){if(!!Ah.AG&&!!Ah.Eo)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;
this.U=this.U|0x4000;A.ow([this,this.H_],this);}if(((Ah.U&0x200)===0x200)){if(!!
Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H_],this);}if(!
!Ah.AG)Ah.AG.Af=Ah.Af;else this.B6=Ah.Af;Ah.Af.AG=Ah.AG;Ah.AG=Ij;Ah.Af=Ij.Af;Ij.
Af=Ah;if(!!Ah.Af)Ah.Af.AG=Ah;else this.B2=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent(
));},Kh:function(Ah,PM){var B;if(!Ah)throw new Error(N0);if(Ah.Ac!==this)throw new
Error(CJ);var Ij=Ah;var Gm=Ah;var Lv=Ah.JQ;while(((PM>0)&&!!Ij.Af)&&(Ij.Af.JQ<=Lv
)){Ij=Ij.Af;PM=PM-1;}while(((PM<0)&&!!Gm.AG)&&(Gm.AG.JQ>=Lv)){Gm=Gm.AG;PM=PM+1;}
if((Ij===Ah)&&(Gm===Ah))return;if(((Ah.U&0x401)===0x401)){if(!!Ah.AG&&!!Ah.Eo)Ah.
AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H_],this
);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;Ah.U=Ah.U|0x800;this.
U=this.U|0x4000;A.ow([this,this.H_],this);}if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)
Ah.Af.AG=Ah.AG;if(this.B6===Ah)this.B6=Ah.Af;if(this.B2===Ah)this.B2=Ah.AG;if(Ij
!==Ah){Ah.Af=Ij.Af;Ah.AG=Ij;Ij.Af=Ah;if(!!Ah.Af)Ah.Af.AG=Ah;}if(Gm!==Ah){Ah.Af=Gm;
Ah.AG=Gm.AG;Gm.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}if(!Ah.Af)this.B2=Ah;if(!Ah.AG)this.
B6=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());},HD:function(Ah){var B;if(!
Ah)throw new Error(N1);if(Ah.Ac!==this)throw new Error(CJ);if((((Ah.U&0x401)===0x401
)&&!!Ah.AG)&&!!Ah.Eo){Ah.AG.U=Ah.AG.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H_],this);}if(((Ah.U&0x200)===0x200)){if(!!Ah.AG)Ah.AG.U=Ah.AG.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H_],this);}Ah.Eo=null;if(this.AY===Ah)this.A_(this.AAP(
Ah,0x14));if(!!Ah.AG)Ah.AG.Af=Ah.Af;if(!!Ah.Af)Ah.Af.AG=Ah.AG;if(this.B6===Ah)this.
B6=Ah.Af;if(this.B2===Ah)this.B2=Ah.AG;Ah.Ac=null;Ah.Af=null;Ah.AG=null;if(((Ah.
U&0x1)===0x1))this.Bg(Ah.GetExtent());},AJP:function(Ah,JV){var B;if(!Ah)throw new
Error(OK);if(!!Ah.Ac)throw new Error(KF);if(!!JV&&(JV.Ac!==this))throw new Error(
Fn);var Gm=null;var Ij=this.B2;var Lv=Ah.JQ;if(!!JV){Gm=JV;Ij=JV.AG;}if(!!Gm&&(Lv>
Gm.JQ))Lv=Gm.JQ;if(!!Ij&&(Lv<Ij.JQ))Lv=Ij.JQ;if(Lv!==Ah.JQ){Ah.Ac=null;Ah.A6R(Lv
);Ah.Ac=this;}if(!JV){if(!!this.B2)this.B2.Af=Ah;Ah.AG=this.B2;this.B2=Ah;}else{
Ah.Af=JV;Ah.AG=JV.AG;JV.AG=Ah;if(!!Ah.AG)Ah.AG.Af=Ah;}Ah.Ac=this;if(this.B6===JV
)this.B6=Ah;if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent());if(((!this.AY&&((Ah.U&
0x4)===0x4))&&((Ah.U&0x10)===0x10))&&!((Ah.U&0x10000)===0x10000))this.A_(Ah);if(((
Ah.U&0x401)===0x401)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.H_],this
);}if(((Ah.U&0x200)===0x200)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;A.ow([this,this.
H_],this);}},J:function(Ah,PM){var B;if(!Ah)throw new Error(OK);if(!!Ah.Ac)throw new
Error(KF);var Gm=null;var Lv=Ah.JQ;if(((PM<0)&&!!this.B2)&&(this.B2.JQ>=Lv)){Gm=
this.B2;PM=PM+1;}while((((PM<0)&&!!Gm)&&!!Gm.AG)&&(Gm.AG.JQ>=Lv)){Gm=Gm.AG;PM=PM+
1;}if((!Gm&&!!this.B2)&&(this.B2.JQ>Lv))Gm=this.B2;while((!!Gm&&!!Gm.AG)&&(Gm.AG.
JQ>Lv))Gm=Gm.AG;if(!Gm){Ah.Ac=this;Ah.AG=this.B2;if(!!this.B2)this.B2.Af=Ah;if(!
this.B6)this.B6=Ah;this.B2=Ah;}else{Ah.Ac=this;Ah.AG=Gm.AG;Ah.Af=Gm;Gm.AG=Ah;if(
!!Ah.AG)Ah.AG.Af=Ah;else this.B6=Ah;}if(((Ah.U&0x1)===0x1))this.Bg(Ah.GetExtent(
));if(((!this.AY&&((Ah.U&0x4)===0x4))&&((Ah.U&0x10)===0x10))&&!((Ah.U&0x10000)===
0x10000))this.A_(Ah);if(((Ah.U&0x401)===0x401)){Ah.U=Ah.U|0x800;this.U=this.U|0x4000;
A.ow([this,this.H_],this);}if(((Ah.U&0x200)===0x200)){Ah.U=Ah.U|0x800;this.U=this.
U|0x4000;A.ow([this,this.H_],this);}},A5b:function(){return this.AY;},AuD:function(
){return this.GM;},_Init:function(aArg){C.ED._Init.call(this,aArg);this.__proto__=
C.O;this.U=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.ED._Mark.call(this,D
);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B2)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AIg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
HM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Il)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aos)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Rb:null,Jz:null,Fc:A.aan(10,null,null),ArZ:null,Aho:null,
Azp:0,H5:0,L3:A.aan(10,0,null),AHD:A.aan(10,A.vx,null),Wz:A.aan(10,0,null),Ae4:A.
aan(10,A.vw,null),Ar4:A.aan(10,0,null),Ahn:A.aan(10,A.vw,null),Wy:A.aan(10,A.vw,
null),Q5:A.aan(10,A.vw,null),Ab6:A.aan(10,A.vw,null),EG:0,AH3:0,AH2:0,Oh:A.aan(4
,0,null),J5:A.aan(4,A.vx,null),J2:0,Ax_:0,Ash:0,AxZ:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},Ia:function(){return this;},J9:function(CV
,aClip,aOffset,Cd,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CV.AtG(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.J9.call(this,CV,aClip,aOffset,Cd,aBlend);},C3:
function(Ahe,Anm){var B;C.O.C3.call(this,Ahe,Anm);if(!this.Ac&&(((Ahe&0x1)===0x1
)||((Anm&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ac&&(((
Ahe&0x2)===0x2)||((Anm&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A_:function(E){if((E!==null)||!E)C.O.A_.call(this,E);},Ap9:function(E){var B;var
BvI=this.HM;C.O.Ap9.call(this,E);if(((BvI!==this.HM)&&!this.Ac)&&((this.U&0x1)===
0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DL:function(E){var B;var BO=this.
GM;C.O.DL.call(this,E);if(((BO!==this.GM)&&!this.Ac)&&((this.U&0x1)===0x1))this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CK){if(!!CK){CK.
Aue=!!this.H5;if(!!this.H5)CK.Bu=this.H5;}var Gn=null;if(!!this.Jz){Gn=this.Jz.Di.
DispatchEvent(CK);if(!Gn)Gn=this.GH(CK);if(!Gn)Gn=this.A0x(CK);this.H5=0;return Gn;
}Gn=C.O.DispatchEvent.call(this,CK);this.H5=0;return Gn;},BroadcastEvent:function(
CK,aFilter){if(!!CK){CK.Aue=!!this.H5;if(!!this.H5)CK.Bu=this.H5;}var Gn=C.O.BroadcastEvent.
call(this,CK,aFilter);this.H5=0;return Gn;},Bg:function(Db){var B;if(this.Azp>0)
throw new Error(OL);if(!!this.HM&&!this.Ac){if(((B=this.HM.Qf)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.HM,0);}this.HM.Qf=A.vS(this.HM.Qf,Db);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)Db=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ac){C.O.Bg.call(this,Db);return;}Db=A.kz(A.aam(Db,this.M.slice(0
,2)),this.M);if((Db[0]>=Db[2])||(Db[1]>=Db[3]))return;var P;for(P=0;P<this.J2;P=
P+1)if(!(((B=A.kz(this.J5.Get(P),Db))[0]>=B[2])||(B[1]>=B[3]))){this.J5.Set(P,A.
vS(this.J5.Get(P),Db));this.Oh.Set(P,A.zS(this.J5.Get(P)));return;}if(this.J2<3){
this.J5.Set(this.J2,Db);this.Oh.Set(this.J2,A.zS(Db));this.J2=this.J2+1;return;}
var H8;var Ra;var Ax9=0;var Ax$=0;var A_J=2147483647;this.J5.Set(this.J2,Db);this.
Oh.Set(this.J2,A.zS(Db));for(H8=0;H8<=this.J2;H8=H8+1)for(Ra=H8+1;Ra<=this.J2;Ra=
Ra+1){var AI5=A.zS(A.vS(this.J5.Get(H8),this.J5.Get(Ra)));var Bbt=((AI5<<8)/(this.
Oh.Get(H8)+this.Oh.Get(Ra)))|0;if(Bbt<A_J){A_J=Bbt;Ax9=H8;Ax$=Ra;}}this.J5.Set(Ax9
,A.vS(this.J5.Get(Ax9),this.J5.Get(Ax$)));this.Oh.Set(Ax9,A.zS(this.J5.Get(Ax9))
);if(Ax$!==this.J2){this.J5.Set(Ax$,this.J5.Get(this.J2));this.Oh.Set(Ax$,this.Oh.
Get(this.J2));}},Buu:function(){var Lq=A._NewObject(C.Ao_,0);Lq.Aue=!!this.H5;if(
!!this.H5)Lq.Bu=this.H5;return Lq;},AnE:function(){var Lq=A._NewObject(C.Ac8,0);
Lq.Aue=!!this.H5;if(!!this.H5)Lq.Bu=this.H5;return Lq;},Ar3:function(){var Lq=A.
_NewObject(C.Ati,0);Lq.Aue=!!this.H5;if(!!this.H5)Lq.Bu=this.H5;return Lq;},Buy:
function(H){var P;var AnW=false;for(P=0;P<10;P=P+1)if(!!this.Fc.Get(P)){var pos=
this.Q5.Get(P);var B7=this.Fc.Get(P).Ac;while(!!B7&&(B7!==this)){pos=A.aaj(pos,B7.
M.slice(0,2));B7=B7.Ac;}if(!B7&&(this.Fc.Get(P)!==this)){var tmp=this.Fc.Get(P);
this.EG=P;this.Fc.Set(P,null);tmp.GH(this.AnE().InitializeUp(P,this.Ahn.Get(P),this.
Ae4.Get(P),this.Wz.Get(P),this.L3.Get(P)+1,this.Wy.Get(P),false,this.Q5.Get(P),this.
Ab6.Get(P)));this.BroadcastEvent(this.Ar3().InitializeUp(P,this.L3.Get(P)+1,false
,tmp,this.Q5.Get(P)),0x18);}else{this.Wz.Set(P,(this.Aho.Bu-this.Ar4.Get(P))|0);
if(this.Wz.Get(P)<10)this.Wz.Set(P,10);this.EG=P;this.Fc.Get(P).GH(this.AnE().InitializeHold(
P,pos,this.Ae4.Get(P),this.Wz.Get(P),this.L3.Get(P)+1,this.Wy.Get(P),this.Q5.Get(
P),this.Ab6.Get(P)));AnW=true;}}if(!AnW)this.Aho.Ap(false);},GetFPS:function(){var
ticksCount=0;var A$n=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AH3&&(
ticksCount>this.AH3))A$n=((this.AH2*1000)/((ticksCount-this.AH3)|0))|0;this.AH2=
0;this.AH3=ticksCount;return A$n;},Update:function(){var B;if(!this.ArZ)this.ArZ=
A._NewObject(A.Graphics.Canvas,0);this.ArZ.Aqd([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
ArZ.Update();return this.UpdateGE20(this.ArZ);},UpdateGE20:function(CV){if(!this.
BeginUpdate())return BG;var Aft=this.UpdateCanvas(CV,B9);this.EndUpdate();return Aft;
},EndUpdate:function(){if(this.J2>0){this.AH2=this.AH2+1;this.J2=0;}},UpdateCanvas:
function(CV,aOffset){var B;var Aft=BG;var Buc=[].concat(aOffset,A.aak(CV.FrameSize
,aOffset));var P;var H8=this.J2;this.Azp=this.Azp+1;CV.Di=this;for(P=0;(P<H8)&&(
P<4);P=P+1)if(this.Oh.Get(P)>0){this.J9(CV,A.aal(this.J5.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);Aft=A.vS(Aft,A.kz(Buc,this.J5.Get(P)));}else H8=H8+1;CV.
Di=null;this.Azp=this.Azp-1;if(!((Aft[0]>=Aft[2])||(Aft[1]>=Aft[3])))return A.aal(
Aft,aOffset);else return Aft;},GetUpdateRegion:function(AGW){var P;var H8=this.J2;
if(AGW<0)return BG;for(P=0;(P<H8)&&(P<4);P=P+1)if(!this.Oh.Get(P)){H8=H8+1;AGW=AGW+
1;}else if(P===AGW)return this.J5.Get(P);return BG;},BeginUpdate:function(){var B;
var P;if(!!this.J2&&!A.z9(this.J5.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
Bcu=A.aan(3,A.vx,null);var Bct=this.J2;for(P=0;P<Bct;P++)Bcu.Set(P,this.J5.Get(P
));for(P=0;P<Bct;P++){var BbM=A.aam(Bcu.Get(P),this.M.slice(0,2));var BbN=this.As4(
BbM);if(!A.z9(BbM,BbN))this.Bg(A.aal(BbN,this.M.slice(0,2)));}}var H8;var Ra;for(
H8=0;H8<(this.J2-1);H8++)if(this.Oh.Get(H8)>0)for(Ra=H8+1;Ra<this.J2;Ra++)if(this.
Oh.Get(Ra)>0){var AI5=A.zS(A.vS(this.J5.Get(H8),this.J5.Get(Ra)));if(((AI5-this.
Oh.Get(H8))-this.Oh.Get(Ra))<0){this.J5.Set(H8,A.vS(this.J5.Get(H8),this.J5.Get(
Ra)));this.Oh.Set(H8,AI5);this.Oh.Set(Ra,0);}}for(P=this.J2-1;P>=0;P--)if(!this.
Oh.Get(P))this.J2=this.J2-1;return this.J2;},DoesNeedUpdate:function(){if(this.J2>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B9,aSize
));if(this.AxZ)this.U=this.U|0x60;else this.U=this.U|0x20;this.Bg(this.M);return this;
},SetRootFocus:function(AXM){if(AXM===this.AxZ)return false;this.AxZ=AXM;if(!AXM
){if(!!this.Jz)this.Jz.Di.C3(0x0,0x40);else this.C3(0x0,0x40);}else if(!!this.Jz
)this.Jz.Di.C3(0x40,0x0);else this.C3(0x40,0x0);return true;},SetUserInputTimestamp:
function(PN){this.H5=PN;},DriveKeyboardHitting:function(Kk,Aw9,Sy){var B;var A0y=
!!this.Rb;if(!!this.Rb&&((!Sy||(this.Ax_!==Kk))||(this.Ash!==Aw9))){var Lq=null;
var W=(C.Cc.isPrototypeOf(B=this.Rb)?B:null);var DX=(C.BQ.isPrototypeOf(B=this.Rb
)?B:null);if(!!this.Ax_)Lq=A._NewObject(C.KeyEvent,0).Initialize(this.Ax_,false);
if(this.Ash!==0x00)Lq=A._NewObject(C.KeyEvent,0).Initialize2(this.Ash,false);if(
!!DX)DX.GH(Lq);else if(!!W)W.GH(Lq);this.Ax_=0;this.Ash=0x00;this.Rb=null;}if(!!
this.Rb){var Lq=null;var W=(C.Cc.isPrototypeOf(B=this.Rb)?B:null);var DX=(C.BQ.isPrototypeOf(
B=this.Rb)?B:null);if(!!Kk)Lq=A._NewObject(C.KeyEvent,0).Initialize(Kk,true);if(
this.Ash!==0x00)Lq=A._NewObject(C.KeyEvent,0).Initialize2(Aw9,true);if(!!DX)DX.GH(
Lq);else if(!!W)W.GH(Lq);}if(!this.Rb&&Sy){if(!!Kk)this.Rb=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kk,true));if(Aw9!==0x00)this.Rb=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Aw9,true));if(!(C.BQ.isPrototypeOf(B=this.
Rb)?B:null)&&!(C.Cc.isPrototypeOf(B=this.Rb)?B:null))this.Rb=null;this.Ax_=Kk;this.
Ash=Aw9;A0y=A0y||!!this.Rb;}this.H5=0;return A0y;},DriveCursorMovement:function(
Fo){return this.DriveMultiTouchMovement(this.EG,Fo);},DriveMultiTouchMovement:function(
BF,Fo){if((BF<0)||(BF>9)){this.H5=0;return false;}var Ff=A.aaj(Fo,this.Q5.Get(BF
));this.Q5.Set(BF,Fo);if(!this.Fc.Get(BF)||A.z8(Ff,B9)){this.H5=0;return false;}
var pos=Fo;var B7=this.Fc.Get(BF).Ac;while(!!B7&&(B7!==this)){pos=A.aaj(pos,B7.M.
slice(0,2));B7=B7.Ac;}if(!B7&&(this.Fc.Get(BF)!==this)){var tmp=this.Fc.Get(BF);
this.EG=BF;this.Fc.Set(BF,null);tmp.GH(this.AnE().InitializeUp(BF,this.Ahn.Get(BF
),this.Ae4.Get(BF),this.Wz.Get(BF),this.L3.Get(BF)+1,this.Wy.Get(BF),false,this.
Q5.Get(BF),this.Ab6.Get(BF)));this.BroadcastEvent(this.Ar3().InitializeUp(BF,this.
L3.Get(BF)+1,false,tmp,Fo),0x18);}else{this.Ahn.Set(BF,pos);this.EG=BF;this.Fc.Get(
BF).GH(this.Buu().Initialize(BF,pos,this.Ae4.Get(BF),Ff,this.Wz.Get(BF),this.L3.
Get(BF)+1,this.Wy.Get(BF),Fo,this.Ab6.Get(BF)));}this.H5=0;return true;},DriveCursorHitting:
function(Sy,BF,Fo){return this.DriveMultiTouchHitting(Sy,BF,Fo);},DriveMultiTouchHitting:
function(Sy,BF,Fo){if((BF<0)||(BF>9)){this.H5=0;return false;}var ticksCount=this.
H5;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var Bxf=this.H5;this.
DriveMultiTouchMovement(BF,Fo);Fo=this.Q5.Get(BF);this.H5=Bxf;if(Sy)this.Ab6.Set(
BF,Fo);if(Sy&&!this.Fc.Get(BF)){var Jy;var pos=Fo;if(A.vt(this.AHD.Get(BF),Fo)&&((
ticksCount-this.Ar4.Get(BF))<=250))this.L3.Set(BF,this.L3.Get(BF)+1);else this.L3.
Set(BF,0);this.AHD.Set(BF,A.aam(Nc,Fo));this.Ar4.Set(BF,ticksCount);if(!!this.Jz
)Jy=this.Xm(A.aam(Nc,Fo),BF,this.L3.Get(BF)+1,this.Jz.Di,null,0x0);else Jy=this.
Xm(A.aam(Nc,Fo),BF,this.L3.Get(BF)+1,null,null,0x0);if(!!Jy){this.BroadcastEvent(
this.Ar3().InitializeDown(BF,this.L3.Get(BF)+1,false,Jy.Cc,Fo),0x18);this.Fc.Set(
BF,Jy.Cc);this.Wy.Set(BF,Jy.Dy);}else{this.Fc.Set(BF,null);this.Wy.Set(BF,B9);this.
H5=0;return false;}var B7=Jy.Cc.Ac;while(!!B7&&(B7!==this)){pos=A.aaj(pos,B7.M.slice(
0,2));B7=B7.Ac;}this.Ae4.Set(BF,pos);this.Ahn.Set(BF,pos);this.Wz.Set(BF,0);this.
Aho.Ap(true);this.EG=BF;this.Fc.Get(BF).GH(this.AnE().InitializeDown(BF,pos,this.
L3.Get(BF)+1,this.Wy.Get(BF),false,Fo));this.H5=0;return true;}if(!Sy&&!!this.Fc.
Get(BF)){var pos=Fo;var B7=this.Fc.Get(BF).Ac;while(!!B7&&(B7!==this)){pos=A.aaj(
pos,B7.M.slice(0,2));B7=B7.Ac;}if(!B7)pos=this.Ahn.Get(BF);this.EG=BF;var tmp=this.
Fc.Get(BF);this.Fc.Set(BF,null);tmp.GH(this.AnE().InitializeUp(BF,pos,this.Ae4.Get(
BF),this.Wz.Get(BF),this.L3.Get(BF)+1,this.Wy.Get(BF),false,Fo,this.Ab6.Get(BF))
);this.BroadcastEvent(this.Ar3().InitializeUp(BF,this.L3.Get(BF)+1,false,tmp,Fo)
,0x18);this.H5=0;return true;}this.H5=0;return false;},ARH:function(Zi,A97,AbW,AbV
){if(Zi===this)Zi=null;if(!!!Zi&&!!this.Jz)Zi=this.Jz.Di;if(!this.Fc.Get(this.EG
))return;var Jy;Jy=this.Xm(A.aam(Nc,this.Q5.Get(this.EG)),this.EG,1,Zi,AbW,AbV);
if(!!Jy&&(this.Fc.Get(this.EG)!==Jy.Cc))this.ALn(Jy.Cc,Jy.Dy);if(!Jy&&(this.Fc.Get(
this.EG)!==A97))this.ALn(A97,B9);},ALn:function(Zi,Wm){if(!this.Fc.Get(this.EG)||(
this.Fc.Get(this.EG)===Zi))return;var tmp=this.Fc.Get(this.EG);this.Fc.Set(this.
EG,null);tmp.GH(this.AnE().InitializeUp(this.EG,this.Ahn.Get(this.EG),this.Ae4.Get(
this.EG),this.Wz.Get(this.EG),this.L3.Get(this.EG)+1,this.Wy.Get(this.EG),true,this.
Q5.Get(this.EG),this.Ab6.Get(this.EG)));this.BroadcastEvent(this.Ar3().InitializeUp(
this.EG,this.L3.Get(this.EG)+1,true,tmp,this.Q5.Get(this.EG)),0x18);var pos=this.
Q5.Get(this.EG);var B7=null;if(!!Zi)B7=Zi.Ac;while(!!B7&&(B7!==this)){pos=A.aaj(
pos,B7.M.slice(0,2));B7=B7.Ac;}if(!B7&&(Zi!==this)){this.Fc.Set(this.EG,null);return;
}this.BroadcastEvent(this.Ar3().InitializeDown(this.EG,this.L3.Get(this.EG)+1,true
,Zi,this.Q5.Get(this.EG)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.Fc.Set(this.EG,Zi);this.Wy.Set(this.EG,Wm);this.Ae4.Set(this.EG,pos
);this.Ahn.Set(this.EG,pos);this.L3.Set(this.EG,0);this.Wz.Set(this.EG,0);this.Ar4.
Set(this.EG,ticksCount);this.Ab6.Set(this.EG,this.Q5.Get(this.EG));this.Fc.Get(this.
EG).GH(this.AnE().InitializeDown(this.EG,pos,this.L3.Get(this.EG)+1,this.Wy.Get(
this.EG),true,this.Ab6.Get(this.EG)));},Be0:function(){if(!!this.Jz)return this.
Jz.Di;return null;},AAG:function(Kl){var B;if(!Kl)throw new Error(OM);if(!((Kl.U&
0x80)===0x80))throw new Error(Sr);if(this.Jz.Di===Kl)this.Jz=this.Jz.Af;else{var
AxY=this.Jz;while(AxY.Af.Di!==Kl)AxY=AxY.Af;AxY.Af=AxY.Af.Af;}Kl.C3(0x0,0xC0);if(
this.AxZ){if(!!this.Jz)this.Jz.Di.C3(0x40,0x0);else this.C3(0x40,0x0);}},AKx:function(
Kl){var B;var Ar=A._NewObject(C.A4p,0);if(!Kl)throw new Error(T8);if(Kl===null)throw new
Error(V8);if(((Kl.U&0x80)===0x80))throw new Error(V9);if(!!this.Jz)this.Jz.Di.C3(
0x0,0x40);else this.C3(0x0,0x40);Ar.Af=this.Jz;Ar.Di=Kl;this.Jz=Ar;if(this.AxZ)Kl.
C3(0xC0,0x0);else Kl.C3(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Aho={I:this},0);(this.Fc=[]).__proto__=C.Root.Fc;(this.
L3=[]).__proto__=C.Root.L3;(this.AHD=[]).__proto__=C.Root.AHD;(this.Wz=[]).__proto__=
C.Root.Wz;(this.Ae4=[]).__proto__=C.Root.Ae4;(this.Ar4=[]).__proto__=C.Root.Ar4;(
this.Ahn=[]).__proto__=C.Root.Ahn;(this.Wy=[]).__proto__=C.Root.Wy;(this.Q5=[]).
__proto__=C.Root.Q5;(this.Ab6=[]).__proto__=C.Root.Ab6;(this.Oh=[]).__proto__=C.
Root.Oh;(this.J5=[]).__proto__=C.Root.J5;this.__proto__=C.Root;this.U=0x7F;this.
Aho.Qz(10);this.Aho.M9=[this,this.Buy];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Aho._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Aho._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jz)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Fc,D);if((B=this.ArZ)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aho)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bu:0,Aue:false,Init:function(aArg){this.Bu=this.AtP();},AtP:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CP:0,D4:0,Down:false,Initialize2:function(Kk,Sy){this.CP=0;this.D4=
Kk;this.Down=Sy;if((Kk>=0x30)&&(Kk<=0x39))this.CP=(10+Kk)-48;if((Kk>=0x41)&&(Kk<=
0x5A))this.CP=(105+Kk)-65;if((Kk>=0x61)&&(Kk<=0x7A))this.CP=(105+Kk)-97;if(Kk===
0x20)this.CP=131;if(!this.CP)switch(Kk){case 0x2B:this.CP=132;break;case 0x2D:this.
CP=133;break;case 0x2A:this.CP=134;break;case 0x2F:this.CP=135;break;case 0x3D:this.
CP=136;break;case 0x2E:this.CP=137;break;case 0x2C:this.CP=138;break;case 0x3A:this.
CP=139;break;case 0x3B:this.CP=140;break;default:;}return this;},Initialize:function(
Kk,Sy){this.CP=Kk;this.Down=Sy;this.D4=0x00;var AYr=Kk-10;var ArY=Kk-105;if((AYr>=
0)&&(AYr<=9))this.D4=(48+AYr)&0xFFFF;if((ArY>=0)&&(ArY<=25))this.D4=(65+ArY)&0xFFFF;
if(Kk===131)this.D4=0x20;if(this.D4===0x00)switch(Kk){case 132:this.D4=0x2B;break;
case 133:this.D4=0x2D;break;case 134:this.D4=0x2A;break;case 135:this.D4=0x2F;break;
case 136:this.D4=0x3D;break;case 137:this.D4=0x2E;break;case 138:this.D4=0x2C;break;
case 139:this.D4=0x3A;break;case 140:this.D4=0x3B;break;default:;}return this;},
Bft:function(A9X){switch(A9X){case 141:return((this.D4>=0x41)&&(this.D4<=0x5A))||((
this.D4>=0x61)&&(this.D4<=0x7A));case 142:return(((this.D4>=0x41)&&(this.D4<=0x5A
))||((this.D4>=0x61)&&(this.D4<=0x7A)))||((this.D4>=0x30)&&(this.D4<=0x39));case
143:return(this.D4>=0x30)&&(this.D4<=0x39);case 144:return(((this.D4>=0x41)&&(this.
D4<=0x46))||((this.D4>=0x61)&&(this.D4<=0x66)))||((this.D4>=0x30)&&(this.D4<=0x39
));case 145:return this.D4!==0x00;case 146:return(this.D4===0x00)&&!!this.CP;case
147:return(((this.CP===6)||(this.CP===7))||(this.CP===4))||(this.CP===5);case 148:
return(this.D4!==0x00)||!!this.CP;default:;}return A9X===this.CP;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AOX={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AOX;
},_className:"Core::LanguageEvent"};C.Ati={AvU:null,LC:A.vw,NT:0,Ix:0,Down:false
,Nz:false,InitializeUp:function(BF,N4,Anl,AX2,Zh){this.Down=false;this.Ix=BF;this.
NT=N4;this.LC=Zh;this.AvU=AX2;this.Nz=Anl;return this;},InitializeDown:function(
BF,N4,Anl,AX2,Zh){this.Down=true;this.Ix=BF;this.NT=N4;this.LC=Zh;this.AvU=AX2;this.
Nz=Anl;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Ati;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.AvU)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Ac8={Af1:A.vw,LC:
A.vw,NT:0,Jj:0,NH:A.vw,HS:A.vw,Ix:0,Down:false,Nz:false,InitializeHold:function(
BF,Akd,Aw$,Axa,N4,Wm,Zh,Aw_){this.Down=true;this.Ix=BF;this.HS=A.aak(Akd,Wm);this.
NH=A.aak(Aw$,Wm);this.Jj=Axa;this.NT=N4;this.LC=Zh;this.Af1=Aw_;return this;},InitializeUp:
function(BF,Akd,Aw$,Axa,N4,Wm,Anl,Zh,Aw_){this.Down=false;this.Ix=BF;this.HS=A.aak(
Akd,Wm);this.NH=A.aak(Aw$,Wm);this.Jj=Axa;this.NT=N4;this.Nz=Anl;this.LC=Zh;this.
Af1=Aw_;return this;},InitializeDown:function(BF,Akd,N4,Wm,Anl,Zh){this.Down=true;
this.Ix=BF;this.HS=A.aak(Akd,Wm);this.NH=A.aak(Akd,Wm);this.Jj=0;this.NT=N4;this.
Nz=Anl;this.LC=Zh;this.Af1=Zh;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Ac8;},_className:"Core::CursorEvent"};C.Ao_={Af1:A.vw
,LC:A.vw,NT:0,Jj:0,Dy:A.vw,NH:A.vw,HS:A.vw,Ix:0,Initialize:function(BF,Akd,Aw$,aOffset
,Axa,BtB,Wm,Zh,Aw_){this.Ix=BF;this.HS=A.aak(Akd,Wm);this.NH=A.aak(Aw$,Wm);this.
Dy=aOffset;this.Jj=Axa;this.NT=BtB;this.LC=Zh;this.Af1=Aw_;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Ao_;},_className:"Core::DragEvent"
};C.Y={BS:null,Nr:null,El:null,Bn:A.vw,AR$:0,Space:0,AfZ:0,J9:function(CV,aClip,
aOffset,Cd,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var AkW=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AIn=[E[2]-E[0],E[3]-E[1]];var Aoz=!A.z8(AkW,AIn);var Ff=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(Ff,B9)&&!Aoz){var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Ame(Ff,tmp);}W=W.Af;}A.ow(this.El,this);}if((Aoz&&(AkW[0]>0))&&(AkW[1]>0)){var
A7=A.aam(this.M,this.Bn);var W=this.Af;while(!!W&&!((W.U&0x200)===0x200)){if(((W.
U&0x400)===0x400)){if(!!W.Eo&&(W.Eo.Nt!==this))W.Eo=null;if(!W.Eo&&((W.Pt!==0x14
)||!!this.AfZ))W.Ase(A7,this);}W=W.Af;}A.ow(this.El,this);}C.ED.G.call(this,E);if(
!!this.Ac&&Aoz){this.U=this.U|0x1000;if(!((this.Ac.U&0x2000)===0x2000)){this.Ac.
U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);}}},Aok:function(H){var B;this.BS.
Q=null;this.BS.P1=null;this.BS=null;(B=this.Nr)?B[1].call(B[0],this):null;},Gk:function(
E){var B;var Ff=A.aaj(E,this.Bn);if(A.z8(Ff,B9))return;this.Bn=E;var W=this.Af;while(
!!W&&!((W.U&0x200)===0x200)){if(((W.U&0x400)===0x400)){var tmp=((W.U&0x100)===0x100
);W.Ame(Ff,tmp);}W=W.Af;}if(!!this.Ac)this.Ac.Bg(this.M);A.ow(this.El,this);},A6Q:
function(E){var B;if(E<0)E=0;if(E===this.AR$)return;this.AR$=E;if(!!this.Ac&&!!this.
AfZ){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);
}},BjD:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Ac&&!!this.AfZ){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,
B.H_],this);}},Kb:function(E){var B;if(E===this.AfZ)return;this.AfZ=E;if(!!this.
Ac){this.U=this.U|0x1000;this.Ac.U=this.Ac.U|0x4000;A.ow([B=this.Ac,B.H_],this);
}},UJ:function(AbP,EW){var ArY=this.C9(0x1);var Q4=this.M;var Uu=A.aaj(ArY.slice(
0,2),Q4.slice(0,2));var L5=A.aaj(ArY.slice(2,4),Q4.slice(2,4));var Bm=B9;if((Uu[
0]>0)&&(L5[0]>Uu[0]))Bm=[Uu[0],Bm[1]];else if((Uu[0]>0)&&(L5[0]>0))Bm=[L5[0],Bm[
1]];if((L5[0]<0)&&(Uu[0]<L5[0]))Bm=[L5[0],Bm[1]];else if((L5[0]<0)&&(Uu[0]<0))Bm=[
Uu[0],Bm[1]];if((Uu[1]>0)&&(L5[1]>Uu[1]))Bm=[Bm[0],Uu[1]];else if((Uu[1]>0)&&(L5[
1]>0))Bm=[Bm[0],L5[1]];if((L5[1]<0)&&(Uu[1]<L5[1]))Bm=[Bm[0],L5[1]];else if((L5[
1]<0)&&(Uu[1]<0))Bm=[Bm[0],Uu[1]];if(A.z8(Bm,B9)){(EW)?EW[1].call(EW[0],this):null;
return;}if(!!this.BS){this.BS.Ap(false);this.BS.Q=null;this.BS.P1=null;this.Nr=null;
}this.BS=AbP;if(!this.BS){this.Gk(A.aaj(this.Bn,Bm));(EW)?EW[1].call(EW[0],this):
null;}else{this.BS.Ap(false);this.BS.IF(1);this.BS.Q=[this,this.Amp,this.Gk];this.
BS.Cv=this.Bn;this.BS.BZ=A.aaj(this.Bn,Bm);this.BS.P1=[this,this.Aok];this.BS.Ad0(
false);this.BS.Ap(true);this.Nr=EW;}},Hv:function(Ah,AbT,AbP,EW){var B;if(!Ah)return;
if((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400))throw new Error(I_);this.BbH();var
AM=Ah.GetExtent();var A7=this.M;var Ls=A.kz(AM,A7);if((!AbT&&!((Ls[0]>=Ls[2])||(
Ls[1]>=Ls[3])))||(AbT&&A.z9(Ls,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var
Bm=B9;if(AM[2]>A7[2])Bm=[AM[2]-A7[2],Bm[1]];if(AM[3]>A7[3])Bm=[Bm[0],AM[3]-A7[3]
];if(Bm[0]>(AM[0]-A7[0]))Bm=[AM[0]-A7[0],Bm[1]];if(Bm[1]>(AM[1]-A7[1]))Bm=[Bm[0]
,AM[1]-A7[1]];if(!!this.BS){this.BS.Ap(false);this.BS.Q=null;this.BS.P1=null;this.
Nr=null;}this.BS=AbP;if(!this.BS){this.Gk(A.aaj(this.Bn,Bm));(EW)?EW[1].call(EW[
0],this):null;}else{this.BS.Ap(false);this.BS.IF(1);this.BS.Q=[this,this.Amp,this.
Gk];this.BS.Cv=this.Bn;this.BS.BZ=A.aaj(this.Bn,Bm);this.BS.P1=[this,this.Aok];this.
BS.Ad0(false);this.BS.Ap(true);this.Nr=EW;}},BeV:function(Ah){var B;if(!!Ah&&((Ah.
Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return-1;var CO=-1;while(!!Ah&&!((Ah.U&0x200
)===0x200)){if(((Ah.U&0x400)===0x400))CO=CO+1;Ah=Ah.AG;}return CO;},U6:function(
Ah,aFilter){var B;if(!!Ah&&((Ah.Ac!==this.Ac)||!((Ah.U&0x400)===0x400)))return null;
var W=this.Af;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ah)W=Ah.
Af;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((B=aFilter)&&((W.
U&B)===B))&&(!IR||!((B=IR)&&((W.U&B)===B))))return W;W=W.Af;}return null;},C9:function(
aFilter){var B;var W=this.Af;var AD=BG;var IR=0x10000;this.BbH();if(((aFilter&0x10000
)===0x10000))IR=0x0;aFilter=aFilter|0x400;while(!!W&&!((W.U&0x200)===0x200)){if(((
B=aFilter)&&((W.U&B)===B))&&(!IR||!((B=IR)&&((W.U&B)===B))))AD=A.vS(AD,W.GetExtent(
));W=W.Af;}return AD;},BbH:function(){var B;if((!this.AfZ||!!!this.Ac)||!((this.
Ac.U&0x4000)===0x4000))return;var W=this.Af;var AYK=((this.U&0x1000)===0x1000);for(;
!!W&&!AYK;W=W.Af){if(((W.U&0x400)===0x400)&&((W.U&0x800)===0x800))AYK=true;if(((
W.U&0x200)===0x200))break;}if(AYK){this.U=this.U&~0x4000;this.Ac.BbR();}},Amp:function(
){return this.Bn;},_Init:function(aArg){C.ED._Init.call(this,aArg);this.__proto__=
C.Y;this.U=0x203;},_Mark:function(D){var B;C.ED._Mark.call(this,D);if((B=this.BS
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.CI={Hl:null,BS:null,Cc:null,VP:null,Nr:null,El:null,G8:null,SK:-
1,SJ:0,Jg:-1,Hb:0,AhE:8,Ob:0,TJ:0,Abv:A.vw,GJ:-1,Bn:0,Ge:-1,OB:0,GK:24,AR:0,K7:null
,NE:false,Asi:false,ASg:function(Ih,N3,Wl,SA,SB,Ahd,OS,Q0,Lk,Li,Lj){throw new Error(
T9);},Ao8:function(Ih,Ahd,OS,Q0,Lk,Li,Lj){throw new Error(V_);},AjH:function(Ih,
N3,Wl,SA,SB,OS,Q0,Lk,Li,Lj){throw new Error(V$);},DispatchEvent:function(CK){var
B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY){this.GJ=this.Ge;
this.Cc=(C.Cc.isPrototypeOf(B=A._NewObject(this.K7,0))?B:null);if(!!this.B2)this.
B2.Af=this.Cc;else this.B6=this.Cc;this.Cc.AG=this.B2;this.B2=this.Cc;this.Cc.Ac=
this;this.Abv=[(B=this.M)[2]-B[0],this.GK];(B=this.G8)?B[1].call(B[0],this):null;
var B7=(C.O.isPrototypeOf(B=this.Cc)?B:null);if(!!B7)result=B7.DispatchEvent(CK);
else result=this.Cc.GH(CK);if(!!this.Cc.AG)this.Cc.AG.Af=null;else this.B6=null;
this.B2=this.Cc.AG;this.Cc.AG=null;this.Cc.Ac=null;this.Cc=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K7
){A.ow(this.El,this);return;}this.Asi=true;var AyO=0;if(!this.NE)AyO=this.OB;var
FG=this.Ak6(-AyO-this.Bn,1);var GF=this.Ak6(((((B=this.M)[3]-B[1])-AyO)-this.Bn)-
1,2);var CO=GF-FG;if(CO<1)CO=1;var Ahj=(CO/2)|0;var Ahk=(CO/3)|0;if(!Ahj)Ahj=1;if(
!Ahk)Ahk=1;if(FG<this.Hb){FG=FG-Ahj;GF=GF+Ahk;}else if(GF>this.Jg){FG=FG-Ahk;GF=
GF+Ahj;}else{FG=this.Hb;GF=this.Jg;}if(!this.NE){if(FG>=this.AR){FG=0;GF=-1;}else
if(GF<0){FG=0;GF=-1;}if(GF>=this.AR)GF=this.AR-1;if(FG<0)FG=0;}else if(this.AR<=
0){FG=0;GF=-1;}var AhV=this.Hb;var AhW=this.Jg;var An9=0;var An_=-1;if(FG>AhV)AhV=
FG;if(GF<AhW)AhW=GF;if(AhV<=AhW){while((this.Jg<GF)&&(this.Hb<AhV)){this.Acv();this.
Axw();}while((this.Hb>FG)&&(this.Jg>AhW)){this.Ay2();this.Axv();}}else{this.Jg=(
this.Jg-this.Hb)+FG;this.Hb=FG;An9=this.Hb;An_=this.Jg;}while(this.Hb<FG)this.Acv(
);while(this.Jg>GF)this.Ay2();while(this.Hb>FG)this.Axv();while(this.Jg<GF)this.
Axw();var Z=this.B6;var inx=this.Hb;var pos=[0,(AyO+this.Bn)+this.Jc(inx,0)];var
BK=(B=this.M)[3]-B[1];var AkD=null;var BcB=(B=this.M)[2]-B[0];while(!!Z){var In=
inx;if(this.NE){if(In<0)In=this.AR-(-In%this.AR);if(In>0)In=In%this.AR;}var Acw=((
In>=this.SJ)&&(In<=this.SK))||((inx>=An9)&&(inx<=An_));var AnQ=Z.GetExtent();var
Bm=A.aaj(pos,AnQ.slice(0,2));if(Acw)this.TJ=this.GK;else this.TJ=AnQ[3]-AnQ[1];var
AZr=pos[1];var AZs=pos[1]+this.TJ;if(!A.z8(Bm,B9))Z.Ame(Bm,true);if((Acw&&(AZr<BK
))&&(AZs>0)){this.Cc=Z;this.GJ=In;this.Abv=[BcB,this.TJ];(B=this.G8)?B[1].call(B[
0],this):null;}Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TJ];}inx=this.Hb;Z=this.B6;
pos=[0,(AyO+this.Bn)+this.Jc(inx,0)];while(!!Z){var In=inx;if(this.NE){if(In<0)In=
this.AR-(-In%this.AR);if(In>0)In=In%this.AR;}var Acw=((In>=this.SJ)&&(In<=this.SK
))||((inx>=An9)&&(inx<=An_));if(Acw)this.TJ=this.GK;else this.TJ=(B=Z.GetExtent(
))[3]-B[1];var AZr=pos[1];var AZs=pos[1]+this.TJ;if(Acw&&!((AZr<BK)&&(AZs>0))){this.
Cc=Z;this.GJ=In;this.Abv=[BcB,this.TJ];(B=this.G8)?B[1].call(B[0],this):null;}if(((
In===this.Ge)&&this.NE)&&!!AkD){var Q4=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Z.GetExtent(),Q4))>A.zS(A.kz(AkD.GetExtent(),Q4)))AkD=Z;}else if(In===this.
Ge)AkD=Z;Z=Z.Af;inx+=1;pos=[pos[0],pos[1]+this.TJ];}this.SJ=0;this.SK=-1;this.Cc=
null;this.GJ=-1;this.A_(AkD);this.Asi=false;A.ow(this.El,this);},RN:function(Ah,
GC,aFilter){return null;},Apd:function(Ah,aFilter){return null;},U6:function(Ah,
aFilter){return null;},AAP:function(Ah,aFilter){return null;},C9:function(aFilter
){return BG;},NF:function(Kl,FC,Lk,Li,Lj){throw new Error(Y5);},AgK:function(Ah,
JV){throw new Error(Ss);},QF:function(Ah){throw new Error(Y6);},Kh:function(Ah,PM
){throw new Error(Wa);},HD:function(Ah){throw new Error(T_);},AJP:function(Ah,JV
){throw new Error(T$);},J:function(Ah,PM){throw new Error(QS);},Jc:function(GT,AXC
){return GT*this.GK;},Ak6:function(Fo,AXC){return(Fo/this.GK)|0;},Ay2:function(){
var Z=this.B2;if(!Z)return null;if(Z===this.AY)this.A_(null);this.Jg=this.Jg-1;if(
!!Z.AG)Z.AG.Af=null;else this.B6=null;this.B2=Z.AG;Z.AG=null;Z.Ac=null;Z.Eo=null;
if(this.Ob<this.AhE){if(!!this.Hl)this.Hl.AG=Z;Z.Af=this.Hl;this.Hl=Z;this.Ob++;
}return Z;},Axw:function(){var B;var Z=this.Hl;var Ach=this.K7;var Acz=++this.Jg;
if(this.NE){if(Acz<0)Acz=this.AR-(-Acz%this.AR);if(Acz>0)Acz=Acz%this.AR;}while(
!!Z&&(((B=Z)?B.__proto__:null)!==Ach))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!
!Z.AG)Z.AG.Af=Z.Af;if(this.Hl===Z)this.Hl=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{
Z=(C.Cc.isPrototypeOf(B=A._NewObject(Ach,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.
AhE++;}this.TJ=this.GK;this.GJ=Acz;this.Abv=[(B=this.M)[2]-B[0],this.TJ];this.Cc=
Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cc=null;this.GJ=-1;if(!!this.B2)this.
B2.Af=Z;Z.Ac=this;Z.AG=this.B2;this.B2=Z;if(!this.B6)this.B6=Z;if(Acz===this.Ge)
this.A_(Z);return Z;},Acv:function(){var Z=this.B6;if(!Z)return null;if(Z===this.
AY)this.A_(null);this.Hb=this.Hb+1;if(!!Z.Af)Z.Af.AG=null;else this.B2=null;this.
B6=Z.Af;Z.Af=null;Z.Ac=null;Z.Eo=null;if(this.Ob<this.AhE){if(!!this.Hl)this.Hl.
AG=Z;Z.Af=this.Hl;this.Hl=Z;this.Ob++;}return Z;},Axv:function(){var B;var Z=this.
Hl;var Ach=this.K7;var MO=--this.Hb;if(this.NE){if(MO<0)MO=this.AR-(-MO%this.AR);
if(MO>0)MO=MO%this.AR;}while(!!Z&&(((B=Z)?B.__proto__:null)!==Ach))Z=Z.Af;if(!!Z
){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hl===Z)this.Hl=Z.Af;Z.Af=
null;Z.AG=null;this.Ob--;}else{Z=(C.Cc.isPrototypeOf(B=A._NewObject(Ach,0))?B:null
);Z.AV(0x1D);if(!!this.Ob)this.AhE++;}this.TJ=this.GK;this.GJ=MO;this.Abv=[(B=this.
M)[2]-B[0],this.TJ];this.Cc=Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cc=null;
this.GJ=-1;if(!!this.B6)this.B6.AG=Z;Z.Ac=this;Z.Af=this.B6;this.B6=Z;if(!this.B2
)this.B2=Z;if(MO===this.Ge)this.A_(Z);return Z;},Aok:function(H){var B;this.BS.Q=
null;this.BS.P1=null;this.BS=null;(B=this.Nr)?B[1].call(B[0],this):null;},Bwy:function(
H){this.Gk(this.VP.Dy[1]);},Bwz:function(H){var B;if(!!this.BS){this.BS.Ap(false
);this.BS.Q=null;this.BS.P1=null;this.BS=null;}if(!this.NE){var AD=this.Api(0,this.
AR-1);var Afj=this.M.slice(0,2);AD=A.aaS(AD,AD[1]-this.OB);if(AD[0]>Afj[0])AD=[].
concat(Afj[0],AD.slice(1,4));if(AD[1]>Afj[1])AD=A.aaS(AD,Afj[1]);var Ff=AD[1]-this.
M[1];var AZE=((B=this.M)[3]-B[1])-(AD[3]-AD[1]);if(AZE>0)AZE=0;this.VP.Dy=[0,this.
Bn];this.VP.Gb=[0,(this.Bn+AZE)-Ff];this.VP.FP=[0,this.Bn-Ff];}else{var Ff=32000-(
32000%this.GK);this.VP.Dy=[0,this.Bn];this.VP.Gb=[0,this.Bn-Ff];this.VP.FP=[0,this.
Bn+Ff];}},AQu:function(E){var B;if(this.NE===E)return;this.NE=E;while(!!this.Acv(
));this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Avf:function(E){if(E===
this.VP)return;if(!!E&&!!E.Asw){A.aa8("%s%*%s",Wb,E,ON);throw new Error(PJ);}if(
!!this.VP){this.VP.AIz=null;this.VP.Asw=null;}this.VP=E;if(!!E){E.AIz=[this,this.
Bwz];E.Asw=[this,this.Bwy];}},Gk:function(E){var B;if(this.NE&&(this.AR>0)){var Hn=
this.Jc(this.AR,3);if(E<0)E=Hn-(-E%Hn);if(E>0)E=E%Hn;if(E>0)E=E-Hn;}if(E===this.
Bn)return;this.Bn=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GL:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},A6D:function(E){var B;
if(E<0)E=0;if(E===this.OB)return;this.OB=E;if(!this.NE){this.Am();this.Bg([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);}},AdX:function(E){var B;if(E<1)E=1;if(E===this.GK
)return;this.GK=E;while(!!this.Acv());this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Jo:function(E){var B;if(E<0)E=0;if(E===this.AR)return;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NE){if(E>this.AR){AD=[].concat(AD.slice(0,
3),(this.OB+this.Bn)+this.Jc(E,3));AD=A.aaS(AD,(this.OB+this.Bn)+this.Jc(this.AR
,3));}else{AD=A.aaS(AD,(this.OB+this.Bn)+this.Jc(E,3));AD=[].concat(AD.slice(0,3
),(this.OB+this.Bn)+this.Jc(this.AR,3));}}else while(!!this.Acv());this.AR=E;this.
Am();this.Bg(AD);},NP:function(E){var B;if(E===this.K7)return;this.K7=E;while(!!
this.Acv());this.Hl=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3
]-B[1]]);},Be9:function(GT){if(this.Asi)return null;if((GT<0)||(GT>=this.AR))return null;
if(!this.NE){if((GT<this.Hb)||(GT>this.Jg))return null;var W=this.B6;while(GT>this.
Hb){W=W.Af;GT=GT-1;}return W;}else{var MO=this.Hb;if(MO<0)MO=this.AR-(-MO%this.AR
);if(MO>0)MO=MO%this.AR;var W=this.B6;while(!!W){if((MO%this.AR)===GT)return W;W=
W.Af;MO=MO+1;}return null;}},AzG:function(AbP,EW){var B;if(this.NE){(EW)?EW[1].call(
EW[0],this):null;return;}var AH4=this.Bn;var A$o=((((B=this.M)[3]-B[1])-this.Bn)-
this.OB)-this.Jc(this.AR,3);var Bm=0;if(AH4>0)Bm=-AH4;else if(A$o>0)Bm=A$o;if((Bm>
0)&&(Bm>-AH4))Bm=-AH4;if(!Bm){(EW)?EW[1].call(EW[0],this):null;return;}if(!!this.
BS){this.BS.Ap(false);this.BS.Q=null;this.BS.P1=null;this.Nr=null;}this.BS=AbP;if(
!this.BS){this.Gk(this.Bn+Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.BS.Ap(
false);this.BS.IF(1);this.BS.Q=[this,this.Amp,this.Gk];this.BS.Cv=this.Bn;this.BS.
BZ=this.Bn+Bm;this.BS.P1=[this,this.Aok];this.BS.Ad0(false);this.BS.Ap(true);this.
Nr=EW;}},Hv:function(GT,AbT,AbP,EW){var B;if((GT<0)||(GT>=this.AR))return;var AM=
this.Api(GT,GT);var A7=this.M;var Ls=A.kz(AM,A7);if((!AbT&&!((Ls[0]>=Ls[2])||(Ls[
1]>=Ls[3])))||(AbT&&A.z9(Ls,AM))){(EW)?EW[1].call(EW[0],this):null;return;}var Bm=
0;if(AM[3]>A7[3])Bm=AM[3]-A7[3];if(Bm>(AM[1]-A7[1]))Bm=AM[1]-A7[1];if(!!this.BS){
this.BS.Ap(false);this.BS.Q=null;this.BS.P1=null;this.Nr=null;}this.BS=AbP;if(!this.
BS){this.Gk(this.Bn-Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.BS.Ap(false);
this.BS.IF(1);this.BS.Q=[this,this.Amp,this.Gk];this.BS.Cv=this.Bn;this.BS.BZ=this.
Bn-Bm;this.BS.P1=[this,this.Aok];this.BS.Ad0(false);this.BS.Ap(true);this.Nr=EW;
}},Be1:function(){return BG;},AMr:function(){if((this.OB<=0)||this.NE)return BG;
var AD=this.M;AD=A.aaS(AD,AD[1]+this.Bn);AD=[].concat(AD.slice(0,3),AD[1]+this.OB
);return AD;},A3w:function(Fo){if(((this.AR<=0)||(Fo[0]<this.M[0]))||(Fo[0]>=this.
M[2]))return-1;Fo=A.aaj(Fo,this.M.slice(0,2));if(!this.NE){var Z=(Fo[1]-this.Bn)-
this.OB;if(Z>0)Z=this.Ak6(Z,0);if((Z<0)||(Z>=this.AR))return-1;return Z;}var Z=Fo[
1]-this.Bn;if(Z>0)Z=this.Ak6(Z,0);if(Z<0)Z=this.Ak6(Z,0)-1;if(Z<0)Z=this.AR-(-Z%
this.AR);if(Z>0)Z=Z%this.AR;return Z;},Api:function(JU,LZ){if(JU<0)JU=0;if(LZ>=this.
AR)LZ=this.AR-1;if(JU>LZ)return BG;var AD=this.M;var Bm=this.Bn;if(this.NE){var Hn=
this.Jc(this.AR,3);if(Bm<0)Bm=Hn-(-Bm%Hn);if(Bm>0)Bm=Bm%Hn;if(Bm>0)Bm=Bm-Hn;}else
Bm=Bm+this.OB;AD=[].concat(AD.slice(0,3),(AD[1]+Bm)+this.Jc(LZ+1,0));AD=A.aaS(AD
,(AD[1]+Bm)+this.Jc(JU,0));return AD;},AaB:function(JU,LZ){var B;if(JU<0)JU=0;if(
JU>LZ)return;if(this.SJ>this.SK){this.SJ=JU;this.SK=LZ;}else{if(JU<this.SJ)this.
SJ=JU;if(LZ>this.SK)this.SK=LZ;}var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.
NE){AD=A.aaS(AD,(this.OB+this.Bn)+this.Jc(JU,0));AD=[].concat(AD.slice(0,3),(this.
OB+this.Bn)+this.Jc(LZ+1,0));}else if((this.Jc(this.AR-1,3)>=(AD[3]-AD[1]))&&((AD[
3]-AD[1])>0)){var Bm=this.Bn;var Hn=this.Jc(this.AR,3);if(Bm<0)Bm=Hn-(-Bm%Hn);if(
Bm>0)Bm=Bm%Hn;if(Bm>0)Bm=Bm-Hn;AD=A.aaS(AD,Bm+this.Jc(JU,0));AD=[].concat(AD.slice(
0,3),Bm+this.Jc(LZ+1,0));}this.Am();this.Bg(AD);},Amp:function(){return this.Bn;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CI;this.G(Ua);
this.K7=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hl
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VP)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hl:null
,BS:null,Cc:null,Nr:null,G8:null,SK:-1,SJ:0,Jg:-1,Hb:0,AhE:8,Ob:0,Sa:0,Abv:A.vw,
GJ:-1,Bn:0,Ge:-1,Vn:24,AR:0,K7:null,Asi:false,ASg:function(Ih,N3,Wl,SA,SB,Ahd,OS
,Q0,Lk,Li,Lj){throw new Error(Y7);},Ao8:function(Ih,Ahd,OS,Q0,Lk,Li,Lj){throw new
Error(Wc);},AjH:function(Ih,N3,Wl,SA,SB,OS,Q0,Lk,Li,Lj){throw new Error(Y8);},DispatchEvent:
function(CK){var B;var result=null;if(((this.Ge>=0)&&(this.Ge<this.AR))&&!this.AY
){this.GJ=this.Ge;this.Cc=(C.Cc.isPrototypeOf(B=A._NewObject(this.K7,0))?B:null);
if(!!this.B2)this.B2.Af=this.Cc;else this.B6=this.Cc;this.Cc.AG=this.B2;this.B2=
this.Cc;this.Cc.Ac=this;this.Abv=[this.Sa,(B=this.M)[3]-B[1]];(B=this.G8)?B[1].call(
B[0],this):null;var B7=(C.O.isPrototypeOf(B=this.Cc)?B:null);if(!!B7)result=B7.DispatchEvent(
CK);else result=this.Cc.GH(CK);if(!!this.Cc.AG)this.Cc.AG.Af=null;else this.B6=null;
this.B2=this.Cc.AG;this.Cc.AG=null;this.Cc.Ac=null;this.Cc=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ag:function(Ae){var B;if(!this.K7
)return;this.Asi=true;var FG=this.Ak6(0-this.Bn,1);var GF=this.Ak6((((B=this.M)[
2]-B[0])-this.Bn)-1,2);var CO=GF-FG;if(CO<1)CO=1;var Ahj=(CO/2)|0;var Ahk=(CO/3)|
0;if(!Ahj)Ahj=1;if(!Ahk)Ahk=1;if(FG<this.Hb){FG=FG-Ahj;GF=GF+Ahk;}else if(GF>this.
Jg){FG=FG-Ahk;GF=GF+Ahj;}else{FG=this.Hb;GF=this.Jg;}if(FG>=this.AR){FG=0;GF=-1;
}else if(GF<0){FG=0;GF=-1;}if(GF>=this.AR)GF=this.AR-1;if(FG<0)FG=0;var AhV=this.
Hb;var AhW=this.Jg;var An9=0;var An_=-1;if(FG>AhV)AhV=FG;if(GF<AhW)AhW=GF;if(AhV<=
AhW){while((this.Jg<GF)&&(this.Hb<AhV)){this.Acv();this.Axw();}while((this.Hb>FG
)&&(this.Jg>AhW)){this.Ay2();this.Axv();}}else{this.Jg=(this.Jg-this.Hb)+FG;this.
Hb=FG;An9=this.Hb;An_=this.Jg;}while(this.Hb<FG)this.Acv();while(this.Jg>GF)this.
Ay2();while(this.Hb>FG)this.Axv();while(this.Jg<GF)this.Axw();var Z=this.B6;var inx=
this.Hb;var pos=[this.Bn+this.Jc(inx,0),0];var BT=(B=this.M)[2]-B[0];var AkD=null;
var Bcr=(B=this.M)[3]-B[1];while(!!Z){var In=inx;var Acw=((In>=this.SJ)&&(In<=this.
SK))||((inx>=An9)&&(inx<=An_));var AnQ=Z.GetExtent();var Bm=A.aaj(pos,AnQ.slice(
0,2));if(Acw)this.Sa=this.Vn;else this.Sa=AnQ[2]-AnQ[0];var AZp=pos[0];var AZq=pos[
0]+this.Sa;if(!A.z8(Bm,B9))Z.Ame(Bm,true);if((Acw&&(AZp<BT))&&(AZq>0)){this.Cc=Z;
this.GJ=In;this.Abv=[this.Sa,Bcr];(B=this.G8)?B[1].call(B[0],this):null;}Z=Z.Af;
inx+=1;pos=[pos[0]+this.Sa,pos[1]];}inx=this.Hb;Z=this.B6;pos=[this.Bn+this.Jc(inx
,0),0];while(!!Z){var In=inx;var Acw=((In>=this.SJ)&&(In<=this.SK))||((inx>=An9)&&(
inx<=An_));if(Acw)this.Sa=this.Vn;else this.Sa=(B=Z.GetExtent())[2]-B[0];var AZp=
pos[0];var AZq=pos[0]+this.Sa;if(Acw&&!((AZp<BT)&&(AZq>0))){this.Cc=Z;this.GJ=In;
this.Abv=[this.Sa,Bcr];(B=this.G8)?B[1].call(B[0],this):null;}if(In===this.Ge)AkD=
Z;Z=Z.Af;inx+=1;pos=[pos[0]+this.Sa,pos[1]];}this.SJ=0;this.SK=-1;this.Cc=null;this.
GJ=-1;this.A_(AkD);this.Asi=false;},RN:function(Ah,GC,aFilter){return null;},Apd:
function(Ah,aFilter){return null;},U6:function(Ah,aFilter){return null;},AAP:function(
Ah,aFilter){return null;},C9:function(aFilter){return BG;},NF:function(Kl,FC,Lk,
Li,Lj){throw new Error(Y9);},AgK:function(Ah,JV){throw new Error(Wd);},QF:function(
Ah){throw new Error(We);},Kh:function(Ah,PM){throw new Error(St);},HD:function(Ah
){throw new Error(Y_);},AJP:function(Ah,JV){throw new Error(Y$);},J:function(Ah,
PM){throw new Error(Abz);},Jc:function(GT,AXC){return GT*this.Vn;},Ak6:function(
Fo,AXC){return(Fo/this.Vn)|0;},Ay2:function(){var Z=this.B2;if(!Z)return null;if(
Z===this.AY)this.A_(null);this.Jg=this.Jg-1;if(!!Z.AG)Z.AG.Af=null;else this.B6=
null;this.B2=Z.AG;Z.AG=null;Z.Ac=null;Z.Eo=null;if(this.Ob<this.AhE){if(!!this.Hl
)this.Hl.AG=Z;Z.Af=this.Hl;this.Hl=Z;this.Ob++;}return Z;},Axw:function(){var B;
var Z=this.Hl;var Ach=this.K7;var Acz=++this.Jg;while(!!Z&&(((B=Z)?B.__proto__:null
)!==Ach))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hl===
Z)this.Hl=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;}else{Z=(C.Cc.isPrototypeOf(B=A._NewObject(
Ach,0))?B:null);Z.AV(0x1D);if(!!this.Ob)this.AhE++;}this.Sa=this.Vn;this.GJ=Acz;
this.Abv=[this.Sa,(B=this.M)[3]-B[1]];this.Cc=Z;(B=this.G8)?B[1].call(B[0],this):
null;this.Cc=null;this.GJ=-1;if(!!this.B2)this.B2.Af=Z;Z.Ac=this;Z.AG=this.B2;this.
B2=Z;if(!this.B6)this.B6=Z;if(Acz===this.Ge)this.A_(Z);return Z;},Acv:function(){
var Z=this.B6;if(!Z)return null;if(Z===this.AY)this.A_(null);this.Hb=this.Hb+1;if(
!!Z.Af)Z.Af.AG=null;else this.B2=null;this.B6=Z.Af;Z.Af=null;Z.Ac=null;Z.Eo=null;
if(this.Ob<this.AhE){if(!!this.Hl)this.Hl.AG=Z;Z.Af=this.Hl;this.Hl=Z;this.Ob++;
}return Z;},Axv:function(){var B;var Z=this.Hl;var Ach=this.K7;var MO=--this.Hb;
while(!!Z&&(((B=Z)?B.__proto__:null)!==Ach))Z=Z.Af;if(!!Z){if(!!Z.Af)Z.Af.AG=Z.AG;
if(!!Z.AG)Z.AG.Af=Z.Af;if(this.Hl===Z)this.Hl=Z.Af;Z.Af=null;Z.AG=null;this.Ob--;
}else{Z=(C.Cc.isPrototypeOf(B=A._NewObject(Ach,0))?B:null);Z.AV(0x1D);if(!!this.
Ob)this.AhE++;}this.Sa=this.Vn;this.GJ=MO;this.Abv=[this.Sa,(B=this.M)[3]-B[1]];
this.Cc=Z;(B=this.G8)?B[1].call(B[0],this):null;this.Cc=null;this.GJ=-1;if(!!this.
B6)this.B6.AG=Z;Z.Ac=this;Z.Af=this.B6;this.B6=Z;if(!this.B2)this.B2=Z;if(MO===this.
Ge)this.A_(Z);return Z;},Aok:function(H){var B;this.BS.Q=null;this.BS.P1=null;this.
BS=null;(B=this.Nr)?B[1].call(B[0],this):null;},Gk:function(E){var B;if(E===this.
Bn)return;this.Bn=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GL:function(
E){if(E<0)E=-1;if(E===this.Ge)return;this.Ge=E;this.Am();},AC8:function(E){var B;
if(E<1)E=1;if(E===this.Vn)return;this.Vn=E;while(!!this.Acv());this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jo:function(E){var B;if(E<0)E=0;if(E===this.
AR)return;var AD=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AR){AD=[].concat(this.
Bn+this.Jc(this.AR,3),AD.slice(1,4));AD=A.aaQ(AD,this.Bn+this.Jc(E,3));}else{AD=
A.aaQ(AD,this.Bn+this.Jc(this.AR,3));AD=[].concat(this.Bn+this.Jc(E,3),AD.slice(
1,4));}this.AR=E;this.Am();this.Bg(AD);},NP:function(E){var B;if(E===this.K7)return;
this.K7=E;while(!!this.Acv());this.Hl=null;this.Ob=0;this.Am();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bk7:function(BtC,BtD){if(!this.BS)return;if(BtC)this.Gk(
this.BS.BZ);var A04=this.Nr;this.BS.Ap(false);this.BS.Q=null;this.BS.P1=null;this.
Nr=null;this.BS=null;if(BtD)(A04)?A04[1].call(A04[0],this):null;},Bfy:function(){
return!!this.BS;},Hv:function(GT,AbT,AbP,EW){var B;if((GT<0)||(GT>=this.AR))return;
var AM=this.Api(GT,GT);var A7=this.M;var Ls=A.kz(AM,A7);if((!AbT&&!((Ls[0]>=Ls[2
])||(Ls[1]>=Ls[3])))||(AbT&&A.z9(Ls,AM))){(EW)?EW[1].call(EW[0],this):null;return;
}var Bm=0;if(AM[2]>A7[2])Bm=AM[2]-A7[2];if(Bm>(AM[0]-A7[0]))Bm=AM[0]-A7[0];if(!!
this.BS){this.BS.Ap(false);this.BS.Q=null;this.BS.P1=null;this.Nr=null;}this.BS=
AbP;if(!this.BS){this.Gk(this.Bn-Bm);(EW)?EW[1].call(EW[0],this):null;}else{this.
BS.Ap(false);this.BS.IF(1);this.BS.Q=[this,this.Amp,this.Gk];this.BS.Cv=this.Bn;
this.BS.BZ=this.Bn-Bm;this.BS.P1=[this,this.Aok];this.BS.Ad0(false);this.BS.Ap(true
);this.Nr=EW;}},Api:function(JU,LZ){if(JU<0)JU=0;if(LZ>=this.AR)LZ=this.AR-1;if(
JU>LZ)return BG;var AD=this.M;var Bm=this.Bn;AD=A.aaQ(AD,(AD[0]+Bm)+this.Jc(LZ+1
,0));AD=[].concat((AD[0]+Bm)+this.Jc(JU,0),AD.slice(1,4));return AD;},AaB:function(
JU,LZ){var B;if(JU<0)JU=0;if(JU>LZ)return;if(this.SJ>this.SK){this.SJ=JU;this.SK=
LZ;}else{if(JU<this.SJ)this.SJ=JU;if(LZ>this.SK)this.SK=LZ;}var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AD=[].concat(this.Bn+this.Jc(JU,0),AD.slice(1,4));AD=A.aaQ(
AD,this.Bn+this.Jc(LZ+1,0));this.Am();this.Bg(AD);},Amp:function(){return this.Bn;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.G(Ua);
this.K7=A.abh.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hl
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.G8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bh={APN:null,ACD:null,Auo:null,DT:null,
K9:null,BR:null,AIT:0,Bp:0,Ix:0,Bu:0,NT:0,Jj:0,Dy:A.vw,NH:A.vw,HS:A.vw,AvF:8,Aea:
0,A4j:1,Down:false,XO:false,Nz:false,AYR:false,Ayi:0,J9:function(CV,aClip,aOffset
,Cd,aBlend){},GH:function(CK){var B;var BN=(C.Ac8.isPrototypeOf(CK)?CK:null);var
DW=(C.Ao_.isPrototypeOf(CK)?CK:null);var AId=this.XO;var ZE;var Uq;var Azk;var MM;
var AxP;if(!BN&&!DW)return null;ZE=(!!BN&&BN.Down)&&!BN.Jj;Uq=(!!BN&&BN.Down)&&(
BN.Jj>0);Azk=(!!BN&&BN.Down)&&(BN.Jj>this.Ayi);MM=!!BN&&!BN.Down;AxP=!!DW;if(ZE)
this.Ayi=((B=(BN.Nz?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Aea&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Im=(C.Ati.isPrototypeOf(CK)?CK:null);if(((
!!Im&&Im.Down)&&(Im.AvU!==this))&&A.vt(this.GetExtent(),this.Ac.A4f(Im.LC))){this.
AIT=0x20;this.Bp=this.Bp|67108864;return null;}}if(ZE){var Aoe=0;var Acb;this.Bp=
this.Bp|(1<<BN.Ix);for(Acb=this.Bp&4095;Acb>0;Acb=Acb>>1)if(!!(Acb&1))Aoe=Aoe+1;
if(Aoe===1)this.Bp=(this.Bp|16777216)|(4096<<BN.Ix);}if(MM&&(this.Bp<16777216)){
var Ip=this.Ia();var Jy=null;if(!!Ip){var A0W=(!!this.AG?this.AG:this.Ac);var AYF=(
!!Ip.Jz?Ip.Jz.Di:null);Jy=Ip.Xm(A.aam(Su,BN.LC),BN.Ix,BN.NT,AYF,A0W,0x0);}if(!!Jy
){var P;for(P=0;P<10;P++)if(!!(this.Bp&(1<<P)))Jy.Cc.GH(A._NewObject(C.Ac8,0).InitializeDown(
P,BN.HS,BN.NT,B9,true,BN.LC));for(P=0;P<10;P++)if(!!(this.Bp&(1<<P)))Jy.Cc.GH(A.
_NewObject(C.Ac8,0).InitializeUp(P,BN.HS,BN.HS,0,BN.NT,B9,false,BN.LC,BN.LC));}}
if(MM)this.Bp=(this.Bp&~(1<<BN.Ix))|33554432;if(Azk&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MM&&BN.Nz)this.Bp=this.Bp|67108864;if(MM&&!(this.Bp&4095))this.
AIT=0x0;if(MM&&!(this.Bp&16777215))this.Bp=0;if(Uq&&(this.Bp>=67108864)){var Ip=
this.Ia();if(!!Ip)Ip.ARH(null,null,this,this.AIT);}if((Uq&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Uq=false;MM=true;}if(!!BN&&!(this.Bp&(4096<<BN.Ix)))return this;
if(!!DW&&!(this.Bp&(4096<<DW.Ix)))return this;if(MM&&!(this.Bp&16777216))return this;
if(((ZE||AxP)||Uq)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MM)
this.Bp=this.Bp&3758100479;if(MM&&!(this.Bp&16777215))this.Bp=0;if(!!BN){this.Down=
ZE||Uq;this.XO=this.AOJ(BN.HS);this.NH=BN.NH;this.HS=BN.HS;this.Dy=B9;this.Jj=BN.
Jj;this.NT=BN.NT;this.Nz=BN.Nz;this.Ix=BN.Ix;this.Bu=BN.Bu;if(BN.Down&&!BN.Jj)AId=
false;}if(!!DW){this.Down=true;this.XO=this.AOJ(DW.HS);this.NH=DW.NH;this.HS=DW.
HS;this.Dy=DW.Dy;this.Jj=DW.Jj;this.NT=DW.NT;this.Ix=DW.Ix;this.Nz=false;this.Bu=
DW.Bu;}var AYL=this.Down;if(!!DW)(B=this.APN)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Jj)(B=this.BR)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Jj>0))(B=this.DT)?B[1].call(B[0],this):null;if((this.Down&&this.XO)&&!AId){
this.AYR=true;(B=this.Auo)?B[1].call(B[0],this):null;}if(this.AYR&&(((AYL&&!this.
XO)&&AId)||((!AYL&&this.XO)&&AId))){this.AYR=false;(B=this.ACD)?B[1].call(B[0],this
):null;}if(!!BN&&!AYL)(B=this.K9)?B[1].call(B[0],this):null;if(!!this.Aea){var Acu=
0x0;if(((((this.Aea&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Jj>=1000))Acu=0x10;if((((
this.Aea&0x1)===0x1)&&!!DW)&&((DW.LC[1]-DW.Af1[1])<=-this.AvF))Acu=0x1;if((((this.
Aea&0x2)===0x2)&&!!DW)&&((DW.LC[1]-DW.Af1[1])>=this.AvF))Acu=0x2;if((((this.Aea&
0x4)===0x4)&&!!DW)&&((DW.LC[0]-DW.Af1[0])<=-this.AvF))Acu=0x4;if((((this.Aea&0x8
)===0x8)&&!!DW)&&((DW.LC[0]-DW.Af1[0])>=this.AvF))Acu=0x8;if(!!Acu){var Ip=this.
Ia();if(!!Ip){this.AIT=Acu;Ip.ARH(null,this,this,Acu);}}}return this;},Xm:function(
Db,BF,N4,AbR,AbW,AbV){var B;if(!!AbR&&(AbR!==this))return null;if((N4<1)||(N4>this.
A4j))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BF)))return null;if(!!(AbV&this.Aea))return null;if(this.Bfc()){var AM=
A.kz(Db,this.GetExtent());if(!((AM[0]>=AM[2])||(AM[1]>=AM[3]))){var PP=A.zT(Db);
var Ff=B9;if(PP[0]<AM[0])Ff=[AM[0]-PP[0],Ff[1]];if(PP[0]>=AM[2])Ff=[(AM[2]-PP[0]
)-1,Ff[1]];if(PP[1]<AM[1])Ff=[Ff[0],AM[1]-PP[1]];if(PP[1]>=AM[3])Ff=[Ff[0],(AM[3
]-PP[1])-1];return A._NewObject(C.Atj,0).Initialize(this,Ff);}}else{var Hm=A.aan(
9,A.vw,null);var P;Hm.Set(0,A.zT(Db));Hm.Set(1,Hm.Get(0));Hm.Set(2,Hm.Get(0));Hm.
Set(3,Hm.Get(0));Hm.Set(4,Hm.Get(0));Hm.Set(1,[Db[0],Hm.Get(1)[1]]);Hm.Set(2,[Hm.
Get(2)[0],Db[1]]);Hm.Set(3,[Db[2],Hm.Get(3)[1]]);Hm.Set(4,[Hm.Get(4)[0],Db[3]]);
Hm.Set(5,Db.slice(0,2));Hm.Set(6,[Db[2],Db[1]]);Hm.Set(7,[Db[0],Db[3]]);Hm.Set(8
,Db.slice(2,4));for(P=0;P<9;P=P+1)if(this.AOJ(Hm.Get(P)))return A._NewObject(C.Atj
,0).Initialize(this,A.aaj(Hm.Get(P),Hm.Get(0)));}return null;},Bjw:function(E){if(
E<1)E=1;this.AvF=E;},ADf:function(E){if(E<1)E=1;this.A4j=E;},Ap:function(E){if(E
)this.C3(0x10,0x0);else this.C3(0x0,0x10);},_Init:function(aArg){C.YE._Init.call(
this,aArg);this.__proto__=C.Bh;this.U=0x11B;},_Mark:function(D){var B;C.YE._Mark.
call(this,D);if((B=this.APN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ACD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auo)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.DT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.K9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BR)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"};C.H1={
timer:null,AIz:null,Asw:null,ADW:null,Yp:null,R_:null,Bp:0,AHa:0,Ace:5000,Aoy:0,
AIb:A.vw,AnN:0,AeV:0,EO:0,Alg:0,AsL:0,AnM:0,AeU:0,EN:0,Alf:0,Ald:0,NH:A.vw,A2H:A.
vw,FP:A.vw,Gb:A.vw,Dy:A.vw,VS:A.vw,A3m:0.5,A7r:true,AEx:true,YO:false,WM:false,WN:
false,Anw:false,Ayi:0,J9:function(CV,aClip,aOffset,Cd,aBlend){},GH:function(CK){
var B;var BN=(C.Ac8.isPrototypeOf(CK)?CK:null);var DW=(C.Ao_.isPrototypeOf(CK)?CK:
null);var Im=(C.Ati.isPrototypeOf(CK)?CK:null);var ZE;var Uq;var Azk;var MM;var AxP;
ZE=(!!BN&&BN.Down)&&!BN.Jj;Uq=(!!BN&&BN.Down)&&(BN.Jj>0);Azk=(!!BN&&BN.Down)&&(BN.
Jj>this.Ayi);MM=!!BN&&!BN.Down;AxP=!!DW;if(ZE)this.Ayi=((B=(BN.Nz?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if(ZE){var Aoe=0;var Acb;this.Bp=this.Bp|(1<<BN.Ix);for(Acb=this.
Bp&4095;Acb>0;Acb=Acb>>1)if(!!(Acb&1))Aoe=Aoe+1;if(Aoe===1)this.Bp=(this.Bp|16777216
)|(4096<<BN.Ix);}if(MM&&(this.Bp<16777216)){var Ip=this.Ia();var Jy=null;if(!!Ip
){var A0W=(!!this.AG?this.AG:this.Ac);var AYF=(!!Ip.Jz?Ip.Jz.Di:null);Jy=Ip.Xm(A.
aam(Su,BN.LC),BN.Ix,BN.NT,AYF,A0W,0x0);}if(!!Jy){var P;for(P=0;P<10;P++)if(!!(this.
Bp&(1<<P)))Jy.Cc.GH(A._NewObject(C.Ac8,0).InitializeDown(P,BN.HS,BN.NT,B9,true,BN.
LC));for(P=0;P<10;P++)if(!!(this.Bp&(1<<P)))Jy.Cc.GH(A._NewObject(C.Ac8,0).InitializeUp(
P,BN.HS,BN.HS,0,BN.NT,B9,false,BN.LC,BN.LC));}}if(MM)this.Bp=(this.Bp&~(1<<BN.Ix
))|33554432;if(Azk&&(this.Bp<16777216))this.Bp=this.Bp|67108864;if(MM&&BN.Nz)this.
Bp=this.Bp|67108864;if(MM&&!(this.Bp&16777215))this.Bp=0;if(Uq&&(this.Bp>=67108864
)){var Ip=this.Ia();if(!!Ip)Ip.ARH(null,null,this,0x0);}if((Uq&&!!(this.Bp&16777216
))&&!!(this.Bp&33554432)){Uq=false;MM=true;}if(!!BN&&!(this.Bp&(4096<<BN.Ix)))return this;
if(!!DW&&!(this.Bp&(4096<<DW.Ix)))return this;if(MM&&!(this.Bp&16777216))return this;
if(((ZE||AxP)||Uq)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MM)
this.Bp=this.Bp&3758100479;if(MM&&!(this.Bp&16777215))this.Bp=0;if(!!Im&&(Im.AvU===
this))return null;if((!!Im&&Im.Down)&&(this.Anw||!this.YO))return null;if((!!Im&&
Im.Down)&&!A.vt(this.M,this.Ac.A4f(Im.LC)))return null;if((!!Im&&!Im.Down)&&(!this.
Anw||(this.AHa!==Im.Ix)))return null;if((!BN&&!DW)&&!Im)return null;if(!!BN){this.
Anw=ZE||Uq;this.AHa=BN.Ix;this.NH=BN.NH;}if(!!DW)this.AHa=DW.Ix;if(!!Im){this.Anw=
Im.Down;this.AHa=Im.Ix;}if(!!Im&&Im.Down){this.A0X();this.EN=(((Im.Bu-this.Ald)*
0.001)*this.AeU)+this.EN;this.EO=(((Im.Bu-this.AsL)*0.001)*this.AeV)+this.EO;if(
this.WM)this.EN=0;if(this.WN)this.EO=0;this.AeU=0;this.AeV=0;this.WM=false;this.
WN=false;this.AIb=this.Dy;this.Aoy=Im.Bu;return this;}if(ZE){this.A0X();this.EN=(((
BN.Bu-this.Ald)*0.001)*this.AeU)+this.EN;this.EO=(((BN.Bu-this.AsL)*0.001)*this.
AeV)+this.EO;if(this.WM||!this.YO)this.EN=0;if(this.WN||!this.YO)this.EO=0;this.
AeU=0;this.AeV=0;this.WM=false;this.WN=false;if(!this.YO){this.YO=true;(B=this.R_
)?B[1].call(B[0],this):null;(B=this.AIz)?B[1].call(B[0],this):null;}this.AIb=this.
Dy;this.Aoy=BN.Bu;}if(!!DW){var GW=A.aaj(DW.HS,DW.NH);var Cz=this.Dy;if(this.AEx
)Cz=[this.AIb[0]+GW[0],Cz[1]];Cz=[Cz[0],this.AIb[1]+GW[1]];if(this.A7r){if(Cz[0]<
this.Gb[0])Cz=[this.Gb[0]+(((Cz[0]-this.Gb[0])/2)|0),Cz[1]];else if(Cz[0]>this.FP[
0])Cz=[this.FP[0]+(((Cz[0]-this.FP[0])/2)|0),Cz[1]];if(Cz[1]<this.Gb[1])Cz=[Cz[0
],this.Gb[1]+(((Cz[1]-this.Gb[1])/2)|0)];else if(Cz[1]>this.FP[1])Cz=[Cz[0],this.
FP[1]+(((Cz[1]-this.FP[1])/2)|0)];}else{if(Cz[0]<this.Gb[0])Cz=[this.Gb[0],Cz[1]
];else if(Cz[0]>this.FP[0])Cz=[this.FP[0],Cz[1]];if(Cz[1]<this.Gb[1])Cz=[Cz[0],this.
Gb[1]];else if(Cz[1]>this.FP[1])Cz=[Cz[0],this.FP[1]];}if(!A.z8(Cz,this.Dy)){this.
A2H=A.aaj(Cz,this.Dy);this.Dy=Cz;(B=this.Asw)?B[1].call(B[0],this):null;(B=this.
ADW)?B[1].call(B[0],this):null;}}if((!!Im&&!Im.Down)&&((Im.Bu-this.Aoy)>=200)){this.
EN=0;this.EO=0;}if(Uq&&((BN.Bu-this.Aoy)>=200)){this.EN=0;this.EO=0;}if(!!DW&&(DW.
Bu>this.Aoy)){var GW=DW.Dy;var A$S=1000/(DW.Bu-this.Aoy);var AhH=0;var AhI;if(this.
AEx)AhH=GW[0]*A$S;AhI=GW[1]*A$S;if((AhH*this.EN)<0)this.EN=0;if((AhI*this.EO)<0)
this.EO=0;this.EN=(this.EN+AhH)*0.5;this.EO=(this.EO+AhI)*0.5;this.Aoy=DW.Bu;}if(
!MM&&!Im)return this;if(!!BN&&BN.Nz){this.EN=0;this.EO=0;}if((this.Dy[0]<=this.Gb[
0])||(this.Dy[0]>=this.FP[0]))this.EN=0;else if(!this.EN){var EI=this.Dy[0];var E3=
this.Gb[0];var EA=this.FP[0];if(EI<E3)EA=this.Gb[0];else if(EI>EA)E3=this.FP[0];
else if(this.VS[0]<=1){E3=EI;EA=EI;}else{var Acj=(EA-EI)%this.VS[0];EA=(EI-this.
VS[0])+Acj;E3=EI+Acj;if(EA<this.Gb[0])EA=this.Gb[0];if(E3>this.FP[0])E3=this.FP[
0];}if((E3-EI)<=(EI-EA))EI=E3;else EI=EA;if(EI!==this.Dy[0]){var Jb=EI-this.Dy[0
];if(Jb>0)this.EN=Math.sqrt((Jb*2)*this.Ace)+20;if(Jb<0)this.EN=-Math.sqrt((-Jb*
2)*this.Ace)-20;this.AeU=(400-(this.EN*this.EN))/(2*Jb);this.AnM=EI;}}else{var Bxw=
this.EN*this.EN;var Jb=Bxw/(2*this.Ace);var EI=this.Dy[0];if(this.EN>0)EI=EI+(Jb|
0);if(this.EN<0)EI=EI-(Jb|0);if(EI>this.FP[0])EI=this.FP[0];else if(EI<this.Gb[0
])EI=this.Gb[0];var Bcm=EI;var E3=this.Gb[0];var EA=this.FP[0];if(EI<E3)EA=this.
Gb[0];else if(EI>EA)E3=this.FP[0];else if(this.VS[0]<=1){E3=EI;EA=EI;}else{var Acj=(
EA-EI)%this.VS[0];EA=(EI-this.VS[0])+Acj;E3=EI+Acj;if(EA<this.Gb[0])EA=this.Gb[0
];if(E3>this.FP[0])E3=this.FP[0];}if(this.EN>0){if(EA<=this.Dy[0])EI=E3;else if((
EI-EA)<(E3-EI))EI=EA;else EI=E3;}else if(E3>=this.Dy[0])EI=EA;else if((EI-EA)>(E3-
EI))EI=E3;else EI=EA;if(EI!==this.Dy[0]){Jb=EI-this.Dy[0];if(EI!==Bcm){var Ah3=EI-
Bcm;if(Ah3>0)this.EN=this.EN+Math.sqrt((Ah3*2)*this.Ace);if(Ah3<0)this.EN=this.EN-
Math.sqrt((-Ah3*2)*this.Ace);}if(this.EN>0)this.EN=this.EN+20;if(this.EN<0)this.
EN=this.EN-20;this.AeU=(400-(this.EN*this.EN))/(2*Jb);this.AnM=EI;}else this.EN=
0;}if((this.Dy[1]<=this.Gb[1])||(this.Dy[1]>=this.FP[1]))this.EO=0;else if(!this.
EO){var EJ=this.Dy[1];var E3=this.Gb[1];var EA=this.FP[1];if(EJ<E3)EA=this.Gb[1];
else if(EJ>EA)E3=this.FP[1];else if(this.VS[1]<=1){E3=EJ;EA=EJ;}else{var Acj=(EA-
EJ)%this.VS[1];EA=(EJ-this.VS[1])+Acj;E3=EJ+Acj;if(EA<this.Gb[1])EA=this.Gb[1];if(
E3>this.FP[1])E3=this.FP[1];}if((E3-EJ)<=(EJ-EA))EJ=E3;else EJ=EA;if(EJ!==this.Dy[
1]){var Jb=EJ-this.Dy[1];if(Jb>0)this.EO=Math.sqrt((Jb*2)*this.Ace)+20;if(Jb<0)this.
EO=-Math.sqrt((-Jb*2)*this.Ace)-20;this.AeV=(400-(this.EO*this.EO))/(2*Jb);this.
AnN=EJ;}}else{var Bxx=this.EO*this.EO;var Jb=Bxx/(2*this.Ace);var EJ=this.Dy[1];
if(this.EO>0)EJ=EJ+(Jb|0);if(this.EO<0)EJ=EJ-(Jb|0);if(EJ>this.FP[1])EJ=this.FP[
1];else if(EJ<this.Gb[1])EJ=this.Gb[1];var Bcn=EJ;var E3=this.Gb[1];var EA=this.
FP[1];if(EJ<E3)EA=this.Gb[1];else if(EJ>EA)E3=this.FP[1];else if(this.VS[1]<=1){
E3=EJ;EA=EJ;}else{var Acj=(EA-EJ)%this.VS[1];EA=(EJ-this.VS[1])+Acj;E3=EJ+Acj;if(
EA<this.Gb[1])EA=this.Gb[1];if(E3>this.FP[1])E3=this.FP[1];}if(this.EO>0){if(EA<=
this.Dy[1])EJ=E3;else if((EJ-EA)<(E3-EJ))EJ=EA;else EJ=E3;}else if(E3>=this.Dy[1
])EJ=EA;else if((EJ-EA)>(E3-EJ))EJ=E3;else EJ=EA;if(EJ!==this.Dy[1]){Jb=EJ-this.
Dy[1];if(EJ!==Bcn){var Ah3=EJ-Bcn;if(Ah3>0)this.EO=this.EO+Math.sqrt((Ah3*2)*this.
Ace);if(Ah3<0)this.EO=this.EO-Math.sqrt((-Ah3*2)*this.Ace);}if(this.EO>0)this.EO=
this.EO+20;if(this.EO<0)this.EO=this.EO-20;this.AeV=(400-(this.EO*this.EO))/(2*Jb
);this.AnN=EJ;}else this.EO=0;}if(!!BN)this.Ald=BN.Bu;if(!!Im)this.Ald=Im.Bu;this.
AsL=this.Ald;this.Alf=this.Dy[0];this.Alg=this.Dy[1];this.Bxy();return this;},Xm:
function(Db,BF,N4,AbR,AbW,AbV){var B;if(!!AbR&&(AbR!==this))return null;if(this.
Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.Bp&(4096<<BF)))return null;
if(!this.AEx&&!!(AbV&0xC))return null;var AM=A.kz(Db,this.M);if(!((AM[0]>=AM[2])||(
AM[1]>=AM[3]))){var PP=A.zT(Db);var Ff=B9;if(PP[0]<AM[0])Ff=[AM[0]-PP[0],Ff[1]];
if(PP[0]>=AM[2])Ff=[(AM[2]-PP[0])-1,Ff[1]];if(PP[1]<AM[1])Ff=[Ff[0],AM[1]-PP[1]];
if(PP[1]>=AM[3])Ff=[Ff[0],(AM[3]-PP[1])-1];return A._NewObject(C.Atj,0).Initialize(
this,Ff);}return null;},A0X:function(){if(!!this.timer){A.zl([this,this.L$],this.
timer,0);this.timer=null;}},Bxy:function(){this.timer=A._GetAutoObject(A.abm.AfS
);A.y_([this,this.L$],this.timer,0);},L$:function(H){var B;if(!this.timer)return;
var AsR=(this.timer.Bu-this.Ald)*0.001;var AsS=(this.timer.Bu-this.AsL)*0.001;var
BxG=AsR*AsR;var BxH=AsS*AsS;var AhH=(this.AeU*AsR)+this.EN;var AhI=(this.AeV*AsS
)+this.EO;var Cz=[((((this.AeU*0.5)*BxG)+(this.EN*AsR))+this.Alf)|0,((((this.AeV
*0.5)*BxH)+(this.EO*AsS))+this.Alg)|0];if(this.WM&&(AsR>=0.5)){Cz=[this.AnM,Cz[1
]];this.EN=0;this.AeU=0;this.Alf=Cz[0];this.WM=false;}else if(this.WM){var Lr=1-
Math.pow(1-(AsR/0.5),5);Cz=[(this.Alf+((this.AnM-this.Alf)*Lr))|0,Cz[1]];}if(this.
WN&&(AsS>=0.5)){Cz=[Cz[0],this.AnN];this.EO=0;this.AeV=0;this.Alg=Cz[1];this.WN=
false;}else if(this.WN){var Lr=1-Math.pow(1-(AsS/0.5),5);Cz=[Cz[0],(this.Alg+((this.
AnN-this.Alg)*Lr))|0];}if(((this.EN>0)&&(AhH<0))||((this.EN<0)&&(AhH>0))){AhH=0;
Cz=[this.Dy[0],Cz[1]];}if(((this.EO>0)&&(AhI<0))||((this.EO<0)&&(AhI>0))){AhI=0;
Cz=[Cz[0],this.Dy[1]];}if(!this.WM&&(Cz[0]<this.Gb[0])){this.Alf=Cz[0];this.AnM=
this.Gb[0];this.Ald=this.timer.Bu;this.WM=true;}else if(!this.WM&&(Cz[0]>this.FP[
0])){this.Alf=Cz[0];this.AnM=this.FP[0];this.Ald=this.timer.Bu;this.WM=true;}if(
!this.WN&&(Cz[1]<this.Gb[1])){this.Alg=Cz[1];this.AnN=this.Gb[1];this.AsL=this.timer.
Bu;this.WN=true;}else if(!this.WN&&(Cz[1]>this.FP[1])){this.Alg=Cz[1];this.AnN=this.
FP[1];this.AsL=this.timer.Bu;this.WN=true;}if(((!this.WM&&!!this.EN)&&(AhH>-20))&&(
AhH<20)){Cz=[this.AnM,Cz[1]];this.EN=0;this.AeU=0;this.Alf=Cz[0];}if(((!this.WN&&
!!this.EO)&&(AhI>-20))&&(AhI<20)){Cz=[Cz[0],this.AnN];this.EO=0;this.AeV=0;this.
Alg=Cz[1];}if(!A.z8(Cz,this.Dy)){this.A2H=A.aaj(Cz,this.Dy);this.Dy=Cz;(B=this.Asw
)?B[1].call(B[0],this):null;(B=this.ADW)?B[1].call(B[0],this):null;}if(((!this.EN&&
!this.EO)&&!this.WM)&&!this.WN){this.A0X();this.YO=false;(B=this.Yp)?B[1].call(B[
0],this):null;}},AQU:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.
VS=E;},AQy:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.A3m)return;this.A3m=E;if(
E<(1e-007))E=1e-007;this.Ace=E*10000;},_Init:function(aArg){C.ED._Init.call(this
,aArg);this.__proto__=C.H1;this.U=0x11B;},_Mark:function(D){var B;C.ED._Mark.call(
this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AIz)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Asw)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ADW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Yp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.R_)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Core::SlideTouchHandler"};C.BQ={Af:null,K9:
null,BR:null,DT:null,Aou:0,Bu:0,A7n:0,Filter:148,CP:0,D4:0,Bv:true,Down:false,Abd:
false,Pb:false,Init:function(aArg){var B;var Di=(C.O.isPrototypeOf(B=this.I)?B:null
);if(!Di)throw new Error(AbA);this.Af=Di.AIg;Di.AIg=this;},GH:function(CK){var B;
if(!!CK&&CK.Bft(this.Filter)){this.Down=CK.Down;this.CP=CK.CP;this.D4=CK.D4;this.
Bu=CK.Bu;this.Pb=false;if(CK.Down){this.A7n=this.Aou;this.Abd=this.Aou>0;if(this.
Abd)(B=this.DT)?B[1].call(B[0],this):null;else(B=this.BR)?B[1].call(B[0],this):null;
if(!this.Pb)this.Aou=this.Aou+1;return!this.Pb;}if(!CK.Down){this.Abd=this.Aou>1;
this.A7n=this.Aou-1;this.Aou=0;(B=this.K9)?B[1].call(B[0],this):null;return!this.
Pb;}}return false;},_Init:function(aArg){this.__proto__=C.BQ;this.Init(aArg);A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K9)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.Atj={Cc:null,Atm:0,Dy:A.vw,Initialize:function(Ah,aOffset
){this.Cc=Ah;this.Dy=aOffset;this.Atm=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.Atj;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Cc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A4p={
Af:null,Di:null,_Init:function(aArg){this.__proto__=C.A4p;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Di)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};C.ApK={Nt:null,extent:A.vx,A7:A.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=C.ApK;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nt)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.AB1={AhQ:A.vw,AhP:
A.vw,_Init:function(aArg){C.ApK._Init.call(this,aArg);this.__proto__=C.AB1;},_className:
"Core::LayoutLineContext"};C.AB2={AyS:A.vw,AyR:A.vw,AhQ:A.vw,AhP:A.vw,_Init:function(
aArg){C.ApK._Init.call(this,aArg);this.__proto__=C.AB2;},_className:"Core::LayoutQuadContext"
};C.ALu={Di:null,Af:null,Q6:null,Re:null,L9:null,Aor:null,_Init:function(aArg){this.
__proto__=C.ALu;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Di)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Re)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L9)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Aor)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.ASl={FE:null,B2:null,B6:null,A$Y:false,
Bun:function(){if(!this.FE)return;var O3=this.FE;this.FE.OZ=null;this.FE=null;A.
ow([this,this.A0c],this);O3.A4M(this);},Bv1:function(H){if(!!this.FE)return;if(!
this.B6)return;this.FE=this.B6;this.B6=this.B6.Af;if(!!this.B6)this.B6.AG=null;else
this.B2=null;this.FE.Af=null;this.A$Y=true;this.FE.R_(this);this.A$Y=false;},Bwm:
function(H){A.ow([this,this.Bv1],this);},Bwl:function(H){A.ow([this,this.Bwm],this
);},A0c:function(H){A.ow([this,this.Bwl],this);},BdB:function(I$){if(!I$||!I$.OZ
)return;if(I$.OZ!==this)throw new Error(AbB);var BcP=false;if(this.FE===I$){this.
FE=null;BcP=true;A.ow([this,this.A0c],this);}else{if(!!I$.Af)I$.Af.AG=I$.AG;else
this.B2=I$.AG;if(!!I$.AG)I$.AG.Af=I$.Af;else this.B6=I$.Af;I$.AG=null;I$.Af=null;
}I$.OZ=null;if(BcP)I$.A4L(this);},A7t:function(I$,AX8){if(!I$)return;if(!!I$.OZ)
throw new Error(Za);I$.OZ=this;if(AX8){I$.Af=this.B6;if(!!this.B6)this.B6.AG=I$;
else this.B2=I$;this.B6=I$;}else{I$.AG=this.B2;if(!!this.B2)this.B2.Af=I$;else this.
B6=I$;this.B2=I$;}if(!this.FE)A.ow([this,this.A0c],this);},_Init:function(aArg){
this.__proto__=C.ASl;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AjV={OZ:null,AG:null,Af:
null,A4M:function(ArS){},A4L:function(ArS){},R_:function(ArS){this.Ac0();},Mh:function(
){if(!!this.OZ&&(this.OZ.FE===this))this.OZ.Bun();},Ac0:function(){if(!!this.OZ)
this.OZ.BdB(this);},AOG:function(){return!!this.OZ&&(this.OZ.FE===this);},_Init:
function(aArg){this.__proto__=C.AjV;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.OZ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.ASj={Ar:null,AsN:
null,R_:function(ArS){this.AsN.Ar=this.Ar;A.vv(this.AsN,0);A.ow([this,this.BvY],
this);},BvY:function(H){this.AsN.Ar=null;this.AsN=null;this.Ar=null;this.Mh();},
_Init:function(aArg){C.AjV._Init.call(this,aArg);this.__proto__=C.ASj;},_Mark:function(
D){var B;C.AjV._Mark.call(this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AsN)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AEJ={_Init:function(){C.ASl._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.AgJ={resource:null,K1:function(){this.resource=null;},Init:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.AgJ;this.Init(aArg
);A.hJ++;},_Done:function(){this.K1();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={M9:null,timer:
null,Bu:0,Period:1000,UQ:0,Bv:false,K1:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},AIH:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
A.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},Qz:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.Bv)this.AIH(this.UQ,E);},VH:function(E){if(E<0)E=0;if(E===this.UQ)return;
this.UQ=E;if(this.Bv)this.AIH(E,this.Period);},Ap:function(E){if(E===this.Bv)return;
this.Bv=E;if(E)this.AIH(this.UQ,this.Period);else this.AIH(0,0);this.Bu=this.AtP(
);},AtP:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;
},Trigger:function(){var B;this.Bu=this.AtP();if(!this.Period)this.Ap(false);(B=
this.M9)?B[1].call(B[0],this):null;},AEG:function(H){this.Ap(false);},StartTimer:
function(H){if(this.Bv)this.Ap(false);this.Ap(true);},_Init:function(aArg){this.
__proto__=C.Timer;A.hJ++;},_Done:function(){this.K1();this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.M9)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bu={ARQ:0,Auk:0,AiU:0,Gu:0
,G6:0,Year:0,A$w:function(AeR,AXA){if(AXA)switch(AeR){case 1:return A.abj.BfC;case
2:return A.abj.Bev;case 3:return A.abj.BfZ;case 4:return A.abj.Bdb;case 5:return A.
abj.Bf3;case 6:return A.abj.BfF;case 7:return A.abj.BfE;case 8:return A.abj.Bdd;
case 9:return A.abj.BkG;case 10:return A.abj.Bgw;case 11:return A.abj.Bgv;case 12:
return A.abj.BdY;default:return A.jm;}else switch(AeR){case 1:return A.abj.ABV;case
2:return A.abj.AAM;case 3:return A.abj.AB6;case 4:return A.abj.AzM;case 5:return A.
abj.AB9;case 6:return A.abj.ABX;case 7:return A.abj.ABW;case 8:return A.abj.AzU;
case 9:return A.abj.AEm;case 10:return A.abj.ACl;case 11:return A.abj.ACj;case 12:
return A.abj.AAv;default:return A.jm;}},A$u:function(A92,AXA){if(AXA)switch(A92){
case 1:return A.abj.Bf_;case 2:return A.abj.BlW;case 3:return A.abj.Bmx;case 4:return A.
abj.BlJ;case 5:return A.abj.BeI;case 6:return A.abj.BkA;case 0:return A.abj.Blw;
default:return A.jm;}else switch(A92){case 1:return A.abj.Bf9;case 2:return A.abj.
BlV;case 3:return A.abj.Bmw;case 4:return A.abj.BlI;case 5:return A.abj.BeH;case
6:return A.abj.Bkz;case 0:return A.abj.Blv;default:return A.jm;}},A$t:function(){
var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JL:function(){var d=this.Gu;var KP=this.G6;var Dk=this.Year-((
KP<=2)?1:0);var AxQ=(((Dk>=0)?Dk:Dk-399)/400)|0;var Alm=Dk-(AxQ*400);var Uo=(((((
153*(KP+((KP>2)?-3:9)))+2)/5)|0)+d)-1;var AnJ=(((Alm*365)+((Alm/4)|0))-((Alm/100
)|0))+Uo;var PR=((AxQ*146097)+AnJ)-719468;return(((PR*86400)+(this.AiU*3600))+(this.
Auk*60))+this.ARQ;},ADD:function(E){var B;E+=62162035200;if(E<0)E=0;var UC=Math.
trunc(E/86400)|0;var AxQ=(((UC>=0)?UC:UC-146096)/146097)|0;var AnJ=UC-(AxQ*146097
);var Alm=((((AnJ-((AnJ/1460)|0))+((AnJ/36524)|0))-((AnJ/146096)|0))/365)|0;var Dk=
Alm+(AxQ*400);var Uo=AnJ-(((365*Alm)+((Alm/4)|0))-((Alm/100)|0));var AZH=(((5*Uo
)+2)/153)|0;var d=(Uo-((((153*AZH)+2)/5)|0))+1;var KP=AZH+((AZH<10)?3:-9);var BK=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dk+((
KP<=2)?1:0);this.TD(KP);this.K$(d);this.Amv(BK+((BK<0)?24:0));this.Amy(P+((P<0)?
60:0));this.AmB(s+((s<0)?60:0));},Yq:function(){if(this.G6===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
G6===4)||(this.G6===6))||(this.G6===9))||(this.G6===11))return 30;else return 31;
},BhH:function(){var B;var Uo=this.AaT()-1;var Ar7=(6+this.Auu())%7;var AnL=((371+
Ar7)-Uo)%7;if(this.G6===12){var d=this.Gu;if((d===31)&&(Ar7<3))return 0;if((d===
30)&&(Ar7<2))return 0;if((d===29)&&(Ar7<1))return 0;}if(AnL<=3)Uo+=AnL;else Uo-=(
7-AnL);if(Uo<0){var d=this.Gu;var KP=this.G6;this.Year--;this.K$(31);this.TD(12);
Uo=this.AaT()-1;Ar7=(6+this.Auu())%7;AnL=((371+Ar7)-Uo)%7;if(AnL<=3)Uo+=AnL;else
Uo-=AnL;this.Year++;this.K$(d);this.TD(KP);}return(Uo/7)|0;},AaT:function(){var B;
var d=this.Gu;var KP=this.G6;var Dk=this.Year;var Ae_=((!!!(Dk%4)&&(!!(Dk%100)||
!!!(Dk%400)))?1:0);switch(KP){case 2:d+=31;break;case 3:d+=(59+Ae_);break;case 4:
d+=(90+Ae_);break;case 5:d+=(120+Ae_);break;case 6:d+=(151+Ae_);break;case 7:d+=(
181+Ae_);break;case 8:d+=(212+Ae_);break;case 9:d+=(243+Ae_);break;case 10:d+=(273+
Ae_);break;case 11:d+=(304+Ae_);break;case 12:d+=(334+Ae_);break;default:;}return d;
},Auu:function(){var B;var d=this.Gu;var KP=this.G6+((this.G6>2)?-2:10);var Dk=this.
Year-((this.G6<=2)?1:0);var BJ=(Dk/100)|0;Dk%=100;d+=((((((((26*KP)-2)/10)|0)+Dk
)+((Dk/4)|0))+((BJ/4)|0))-(2*BJ));if(d>=0)return d%7;else return(7-(-d%7))%7;},AmB:
function(E){if(E<0)E=0;if(E>59)E=59;this.ARQ=E;},Amy:function(E){if(E<0)E=0;if(E>
59)E=59;this.Auk=E;},Amv:function(E){if(E<0)E=0;if(E>23)E=23;this.AiU=E;},K$:function(
E){if(E<1)E=1;if(E>31)E=31;this.Gu=E;},TD:function(E){if(E<1)E=1;if(E>12)E=12;this.
G6=E;},Format:function(Ii){var result=A.jm;var inx=0;while(!!(Ii.charCodeAt(inx)||
0))if((Ii.charCodeAt(inx)||0)===0x25){var Zy=1;inx=inx+1;if((Ii.charCodeAt(inx)||
0)===0x23){inx=inx+1;Zy=0;}switch(Ii.charCodeAt(inx)||0){case 0x64:result=result+
A.aaq(this.Gu,2*Zy,10);break;case 0x48:result=result+A.aaq(this.AiU,2*Zy,10);break;
case 0x49:if(!(this.AiU%12))result=result+Wf;else result=result+A.aaq(this.AiU%12
,2*Zy,10);break;case 0x6D:result=result+A.aaq(this.G6,2*Zy,10);break;case 0x4D:result=
result+A.aaq(this.Auk,2*Zy,10);break;case 0x70:if(this.AiU<12)result=result+A.abj.
BcV;else result=result+A.abj.Bj1;break;case 0x53:result=result+A.aaq(this.ARQ,2*
Zy,10);break;case 0x77:result=result+A.aaq(this.Auu(),Zy,10);break;case 0x79:result=
result+A.aaq(this.Year%100,2*Zy,10);break;case 0x59:result=result+A.aaq(this.Year
,4*Zy,10);break;case 0x25:result=result+Zb;break;case 0x6A:result=result+A.aaq(this.
AaT(),3*Zy,10);break;case 0x57:result=result+A.aaq(this.BhH(),2*Zy,10);break;case
0x61:result=result+this.A$u(this.Auu(),true);break;case 0x41:result=result+this.
A$u(this.Auu(),false);break;case 0x62:result=result+this.A$w(this.G6,true);break;
case 0x42:result=result+this.A$w(this.G6,false);break;default:;}inx=inx+1;}else{
result=result+String.fromCharCode(Ii.charCodeAt(inx)||0);inx=inx+1;}return result;
},Initialize2:function(AbX,AeR,BsJ,BsZ,Bte,Btx){this.Year=AbX;this.TD(AeR);this.
K$(BsJ);this.Amv(BsZ);this.Amy(Bte);this.AmB(Btx);return this;},Initialize:function(
Ahf){this.ADD(Ahf);return this;},Bd3:function(Ahf){if(!Ahf)return A._NewObject(C.
AmU,0).Initialize(this.JL());return A._NewObject(C.AmU,0).Initialize(this.JL()-Ahf.
JL());},Bk$:function(Axb){if(!Axb)return this;return A._NewObject(C.Bu,0).Initialize(
this.JL()-Axb.JL());},J:function(Axb){if(!Axb)return this;return A._NewObject(C.
Bu,0).Initialize(this.JL()+Axb.JL());},_Init:function(aArg){this.__proto__=C.Bu;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.AmU={AEj:0,ACc:0,ABs:0,J8:0,JL:function(
){return(((this.J8*86400)+(this.ABs*3600))+(this.ACc*60))+this.AEj;},ADD:function(
E){var AIR=1;this.J8=Math.trunc(E/86400)|0;if(E<0){E=-E;AIR=-1;}this.ABs=AIR*(Math.
trunc(E/3600)%24|0);this.ACc=AIR*(Math.trunc(E/60)%60|0);this.AEj=AIR*(E%60|0);}
,Initialize2:function(BsK,Bs0,Btf,BtA){this.J8=BsK;this.ABs=Bs0;this.ACc=Btf;this.
AEj=BtA;return this;},Initialize:function(Ahf){this.ADD(Ahf);return this;},_Init:
function(aArg){this.__proto__=C.AmU;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A7R={Ar:null,OZ:null,Trigger:function(BsE,AX8){var O3=A._NewObject(C.ASj,0);
O3.AsN=this;O3.Ar=BsE;this.OZ.A7t(O3,AX8);},_Init:function(aArg){this.__proto__=
C.A7R;this.OZ=A._GetAutoObject(C.AEJ);A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ar)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.OZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A7S={JE:null,Event:null,APO:null,Asq:function(H){var B;if(
!this.Event)return;this.JE=this.Event.Ar;(B=this.APO)?B[1].call(B[0],this):null;
this.JE=null;},Bio:function(E){if(this.Event===E)return;if(!!this.Event)A.zl([this
,this.Asq],this.Event,0);this.Event=E;if(!!this.Event)A.y_([this,this.Asq],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A7S;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.APO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BBm={Dp:0x1,Byi:0x2,Bzn:0x4,BBe:0x8,Bv:0x10,H0:0x20
,Bzo:0x40,Bz1:0x80,Bzj:0x100,BzF:0x200,By9:0x400,BAA:0x800,Bf:0x1000,BBj:0x2000,
BAl:0x4000,BAm:0x8000,Aab:0x10000,BAk:0x20000,BAL:0x40000};C.Pt={BAB:0x1,BAC:0x2
,Bye:0x4,Byf:0x8,Byg:0x10,Byd:0x20};C.AfZ={None:0,BBa:1,ByA:2,BzK:3,BAF:4,BBb:5,
BBc:6,ByB:7,ByC:8,BzM:9,BzL:10,BAH:11,BAG:12};C.Ato={None:0,BA_:1,Left:2,Byy:3,YS:
4,A2d:5,BA$:6,Right:7,Byz:8};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:
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
346};C.BAD={BBs:0x1,BBp:0x2,BBq:0x4,BBr:0x8,BzO:0x10,Bzq:0x20};
C._Init=function(){C.Ajd.__proto__=C.Cc;C.YE.__proto__=C.Cc;C.ED.__proto__=C.Cc;C.
O.__proto__=C.ED;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AOX.__proto__=
C.Event;C.Ati.__proto__=C.Event;C.Ac8.__proto__=C.Event;C.Ao_.__proto__=C.Event;
C.Y.__proto__=C.ED;C.CI.__proto__=C.O;C.Ds.__proto__=C.O;C.Bh.__proto__=C.YE;C.H1.
__proto__=C.ED;C.AB1.__proto__=C.ApK;C.AB2.__proto__=C.ApK;C.ASj.__proto__=C.AjV;
};C._ReInit=function(){var B;if((B=C.AEJ._this))B._ReInit();};C.DB=function(D){var
B;if((B=C.AEJ._this)&&(B._cycle!=D))B._Done(C.AEJ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */