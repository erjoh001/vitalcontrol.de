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
var B4=[0,0];var BI=[0,0,0,0];var EH="The view does not belong to this group";var
Gv="The dialog component is already presented";var I5="The dialog component is actually not presented";
var Iq="No fader to perform the fade-in/out operation";var Oe="Trying to use the same fader twice";
var Pc="Trying to fade-in/out a group which belongs to another owner";var Nq="No view to restack";
var Cw="View is not in this group";var FN="Sibling view does not belong to the group";
var Of="No view to remove";var Nr="No view to add";var Kc="View already in a group";
var Og="Recursive invalidate during active update cycle.";var ME=[-8,-8,9,9];var
Pd="No group to end the modal state.";var RO="The group is not modal.";var Tn="No group to obtain the modal state.";
var Vi="The group serves already as the \'virtual keyboard\'.";var Vj="The group is already modal.";
var JV="View is not in the same group or it is not embedded within the Outline "+
"Box";var RP="The method SwitchToDialog() is not available in Core::VerticalList.";
var Vk="The method DismissDialog() is not available in Core::VerticalList.";var Vl=
"The method PresentDialog() is not available in Core::VerticalList.";var Yb="The method FadeGroup() is not available in Core::VerticalList.";
var RQ="The method RestackBehind() is not available in Core::VerticalList.";var Yc=
"The method RestackTop() is not available in Core::VerticalList.";var Vm="The method Restack() is not available in Core::VerticalList.";
var To="The method Remove() is not available in Core::VerticalList.";var Vn="The method AddBehind() is not available in Core::VerticalList.";
var Qh="The method Add() is not available in Core::VerticalList.";var Vo="The Slide Touch Handler:";
var Ns="is already connected with a view.";var Pe="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Tp=[0,0,170,120];var Yd="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Vp="The method DismissDialog() is not available in Core::HorizontalList.";var
Ye="The method PresentDialog() is not available in Core::HorizontalList.";var Yf=
"The method FadeGroup() is not available in Core::HorizontalList.";var Vq="The method RestackBehind() is not available in Core::HorizontalList.";
var Vr="The method RestackTop() is not available in Core::HorizontalList.";var RR=
"The method Restack() is not available in Core::HorizontalList.";var Yg="The method Remove() is not available in Core::HorizontalList.";
var Yh="The method AddBehind() is not available in Core::HorizontalList.";var AaK=
"The method Add() is not available in Core::HorizontalList.";var Qi=[0,0,1,1];var
AaL="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var AdG="Trying to cancel a task not belonging to this queue!";var Yi="Trying to enqueue a task twice!";
var Vs="12";var Yj="%";
C.B5={Af:null,AG:null,Aa:null,Ec:null,S:0x103,Jq:0,OY:0x14,AqR:function(BC,Aqr){}
,A4d:function(E){if(this.Jq===E)return;this.Jq=E;if(!!this.Aa){var AgU=this.Af;var
Gx=0;while(!!AgU&&(E>AgU.Jq)){AgU=AgU.Af;Gx=Gx+1;}AgU=this.AG;while(!!AgU&&(E<AgU.
Jq)){AgU=AgU.AG;Gx=Gx-1;}if(!!Gx)this.Aa.Lh(this,Gx);}},AW:function(E){var B;var
Gx=E^this.OY;if(!Gx)return;this.OY=E;if(!!this.Ec&&!((this.S&0x400)===0x400)){this.
Aa.S=this.Aa.S|0x5000;A.ow([B=this.Aa,B.HN],this);this.Aa.Bc([0,0,(B=this.Aa.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Ec&&((this.S&0x400)===0x400)){this.Ec.MO.S=this.Ec.
MO.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);}},HQ:function(
){var B0=this.Aa;while(!!B0){var H7=(C.Root.isPrototypeOf(B0)?B0:null);if(!!H7)return H7;
B0=B0.Aa;}return null;},JJ:function(CL,aClip,aOffset,B6,aBlend){},Gl:function(Cx
){return null;},Wy:function(C0,Bz,Nw,AaV,Aa0,AaZ){return null;},ArF:function(C0){
return C0;},ArO:function(BC,L5){return B4;},Ak9:function(aOffset,Aqp){},GetExtent:
function(){return BI;},CS:function(Af_,Amf){var B;if(((this.S&0x200)===0x200))Af_=
Af_&~0x400;var AXh=(this.S&~Amf)|Af_;var Ajr=AXh^this.S;this.S=AXh;if(!!this.Aa&&
!!(Ajr&0x14)){var A8w=((this.S&0x14)===0x14);if(A8w&&!this.Aa.A6)this.Aa.A8(this
);if(!A8w&&(this.Aa.A6===this))this.Aa.A8(this.Aa.Aze(this,0x14));}if(!!this.Aa&&
!!(Ajr&0x403))this.Aa.Bc(this.GetExtent());if(((!!this.Ec&&!!this.Aa)&&((AXh&0x400
)===0x400))&&((Ajr&0x1)===0x1)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.
ow([B=this.Aa,B.HN],this);}if(!!this.Aa&&((Ajr&0x400)===0x400)){this.Ec=null;this.
S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);}},_Init:function(
aArg){this.__proto__=C.B5;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ec)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.Ah5={Ev:A.vw,EV:A.vw,AqR:function(BC,Aqr){var Ar=A._NewObject(
C.AAo,0);this.Ec=null;Ar.extent=this.getExtent();Ar.Ba=BC;Ar.MO=Aqr;Ar.AgK=this.
EV;Ar.AgL=this.Ev;this.Ec=Ar;},ArO:function(BC,L5){var B;var Ew=this.OY;var Ar=(
C.AAo.isPrototypeOf(B=this.Ec)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[1];var
x2=Ar.extent[2];var y2=Ar.extent[3];var Jz=[BC[2]-BC[0],BC[3]-BC[1]];var BP=x2-x1;
var BG=y2-y1;var tmp;if(!L5){var MR=[(B=Ar.Ba)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Ba[0];
y1=y1-Ar.Ba[1];if(MR[0]!==Jz[0]){var Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);
var Pu=((Ew&0x1)===0x1);if(!Hh&&(Pu||!Hi))x1=((x1*Jz[0])/MR[0])|0;if(!Hi&&(Pu||!
Hh)){x2=x2-Ar.Ba[0];x2=((x2*Jz[0])/MR[0])|0;x2=x2-Jz[0];}else x2=x2-Ar.Ba[2];x1=
x1+BC[0];x2=x2+BC[2];if(!Pu){if(Hh&&!Hi)x2=x1+BP;else if(!Hh&&Hi)x1=x2-BP;else{x1=
x1+((((x2-x1)-BP)/2)|0);x2=x1+BP;}}}else{x2=x2-Ar.Ba[2];x1=x1+BC[0];x2=x2+BC[2];
}if(MR[1]!==Jz[1]){var Hj=((Ew&0x10)===0x10);var Hg=((Ew&0x20)===0x20);var Pv=((
Ew&0x2)===0x2);if(!Hj&&(Pv||!Hg))y1=((y1*Jz[1])/MR[1])|0;if(!Hg&&(Pv||!Hj)){y2=y2-
Ar.Ba[1];y2=((y2*Jz[1])/MR[1])|0;y2=y2-Jz[1];}else y2=y2-Ar.Ba[3];y1=y1+BC[1];y2=
y2+BC[3];if(!Pv){if(Hj&&!Hg)y2=y1+BG;else if(!Hj&&Hg)y1=y2-BG;else{y1=y1+((((y2-
y1)-BG)/2)|0);y2=y1+BG;}}}else{y2=y2-Ar.Ba[3];y1=y1+BC[1];y2=y2+BC[3];}}else{switch(
L5){case 3:{x1=BC[0];x2=x1+BP;}break;case 4:{x2=BC[2];x1=x2-BP;}break;case 1:{y1=
BC[1];y2=y1+BG;}break;case 2:{y2=BC[3];y1=y2-BG;}break;default:;}if((L5===3)||(L5===
4)){var Hj=((Ew&0x10)===0x10);var Hg=((Ew&0x20)===0x20);var Pv=((Ew&0x2)===0x2);
if(Pv){y1=BC[1];y2=BC[3];}else if(Hj&&!Hg){y1=BC[1];y2=y1+BG;}else if(Hg&&!Hj){y2=
BC[3];y1=y2-BG;}else{y1=BC[1]+((((BC[3]-BC[1])-BG)/2)|0);y2=y1+BG;}}if((L5===1)||(
L5===2)){var Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);var Pu=((Ew&0x1)===0x1);
if(Pu){x1=BC[0];x2=BC[2];}else if(Hh&&!Hi){x1=BC[0];x2=x1+BP;}else if(Hi&&!Hh){x2=
BC[2];x1=x2-BP;}else{x1=BC[0]+((((BC[2]-BC[0])-BP)/2)|0);x2=x1+BP;}}}Ar.isEmpty=(
x1>=x2)||(y1>=y2);BP=x2-x1;BG=y2-y1;if(Ar.AgL[0]<Ar.AgK[0]){tmp=x1;x1=x2-1;x2=tmp-
1;}if(Ar.AgL[1]<Ar.AgK[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-
y1)===1)y2=y1;if(((this.S&0x100)===0x100)){this.EV=[x1,y1];this.Ev=[x2,y2];}else{
this.D5([x1,y1]);this.DL([x2,y2]);this.Ec=Ar;}return[BP,BG];},Ak9:function(aOffset
,Aqp){if(Aqp){this.EV=A.aak(this.EV,aOffset);this.Ev=A.aak(this.Ev,aOffset);}else{
this.D5(A.aak(this.EV,aOffset));this.DL(A.aak(this.Ev,aOffset));}},GetExtent:function(
){if(!!this.Ec&&this.Ec.isEmpty)return BI;return this.getExtent();},getExtent:function(
){var x1=this.EV[0];var y1=this.EV[1];var x2=this.Ev[0];var y2=this.Ev[1];var BP=
x2-x1;var BG=y2-y1;var tmp;if(BP<0)BP=-BP;if(BG<0)BG=-BG;if(BP>=BG){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(BG>=BP){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DL:function(
E){var B;if(A.z8(E,this.Ev))return;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());this.Ec=null;this.Ev=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000
)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN
],this);}},D5:function(E){var B;if(A.z8(E,this.EV))return;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.GetExtent());this.Ec=null;this.EV=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===
0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|
0x4000;A.ow([B=this.Aa,B.HN],this);}},_Init:function(aArg){C.B5._Init.call(this,
aArg);this.__proto__=C.Ah5;},_className:"Core::LineView"};C.XO={JR:A.vw,LZ:A.vw,
Ev:A.vw,EV:A.vw,AqR:function(BC,Aqr){var Ar=A._NewObject(C.AAp,0);this.Ec=null;Ar.
extent=this.GetExtent();Ar.Ba=BC;Ar.MO=Aqr;Ar.AgK=this.EV;Ar.AgL=this.Ev;Ar.Axl=
this.LZ;Ar.Axm=this.JR;this.Ec=Ar;},ArO:function(BC,L5){var B;var Ew=this.OY;var
Ar=(C.AAp.isPrototypeOf(B=this.Ec)?B:null);var x1=Ar.extent[0];var y1=Ar.extent[
1];var x2=Ar.extent[2];var y2=Ar.extent[3];var Jz=[BC[2]-BC[0],BC[3]-BC[1]];var BP=
x2-x1;var BG=y2-y1;if(!L5){var MR=[(B=Ar.Ba)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Ba[0];y1=
y1-Ar.Ba[1];if(MR[0]!==Jz[0]){var Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);var
Pu=((Ew&0x1)===0x1);if(!Hh&&(Pu||!Hi))x1=((x1*Jz[0])/MR[0])|0;if(!Hi&&(Pu||!Hh)){
x2=x2-Ar.Ba[0];x2=((x2*Jz[0])/MR[0])|0;x2=x2-Jz[0];}else x2=x2-Ar.Ba[2];x1=x1+BC[
0];x2=x2+BC[2];if(!Pu){if(Hh&&!Hi)x2=x1+BP;else if(!Hh&&Hi)x1=x2-BP;else{x1=x1+((((
x2-x1)-BP)/2)|0);x2=x1+BP;}}}else{x2=x2-Ar.Ba[2];x1=x1+BC[0];x2=x2+BC[2];}if(MR[
1]!==Jz[1]){var Hj=((Ew&0x10)===0x10);var Hg=((Ew&0x20)===0x20);var Pv=((Ew&0x2)===
0x2);if(!Hj&&(Pv||!Hg))y1=((y1*Jz[1])/MR[1])|0;if(!Hg&&(Pv||!Hj)){y2=y2-Ar.Ba[1];
y2=((y2*Jz[1])/MR[1])|0;y2=y2-Jz[1];}else y2=y2-Ar.Ba[3];y1=y1+BC[1];y2=y2+BC[3];
if(!Pv){if(Hj&&!Hg)y2=y1+BG;else if(!Hj&&Hg)y1=y2-BG;else{y1=y1+((((y2-y1)-BG)/2
)|0);y2=y1+BG;}}}else{y2=y2-Ar.Ba[3];y1=y1+BC[1];y2=y2+BC[3];}}else{switch(L5){case
3:{x1=BC[0];x2=x1+BP;}break;case 4:{x2=BC[2];x1=x2-BP;}break;case 1:{y1=BC[1];y2=
y1+BG;}break;case 2:{y2=BC[3];y1=y2-BG;}break;default:;}if((L5===3)||(L5===4)){var
Hj=((Ew&0x10)===0x10);var Hg=((Ew&0x20)===0x20);var Pv=((Ew&0x2)===0x2);if(Pv){y1=
BC[1];y2=BC[3];}else if(Hj&&!Hg){y1=BC[1];y2=y1+BG;}else if(Hg&&!Hj){y2=BC[3];y1=
y2-BG;}else{y1=BC[1]+((((BC[3]-BC[1])-BG)/2)|0);y2=y1+BG;}}if((L5===1)||(L5===2)
){var Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);var Pu=((Ew&0x1)===0x1);if(Pu){
x1=BC[0];x2=BC[2];}else if(Hh&&!Hi){x1=BC[0];x2=x1+BP;}else if(Hi&&!Hh){x2=BC[2];
x1=x2-BP;}else{x1=BC[0]+((((BC[2]-BC[0])-BP)/2)|0);x2=x1+BP;}}}Ar.isEmpty=(x1>=x2
)||(y1>=y2);BP=(x2-x1)-1;BG=(y2-y1)-1;var Agq=Ar.extent[0];var Ags=Ar.extent[1];
var Ad7=(Ar.extent[2]-Agq)-1;var Ad6=(Ar.extent[3]-Ags)-1;if(!Ad7)Ad7=1;if(!Ad6)
Ad6=1;if(((this.S&0x100)===0x100)){this.EV=[x1+((((Ar.AgK[0]-Agq)*BP)/Ad7)|0),y1+((((
Ar.AgK[1]-Ags)*BG)/Ad6)|0)];this.Ev=[x1+((((Ar.AgL[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.
AgL[1]-Ags)*BG)/Ad6)|0)];this.LZ=[x1+((((Ar.Axl[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.Axl[
1]-Ags)*BG)/Ad6)|0)];this.JR=[x1+((((Ar.Axm[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.Axm[1]-
Ags)*BG)/Ad6)|0)];}else{this.D5([x1+((((Ar.AgK[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.AgK[
1]-Ags)*BG)/Ad6)|0)]);this.DL([x1+((((Ar.AgL[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.AgL[1
]-Ags)*BG)/Ad6)|0)]);this.J_([x1+((((Ar.Axl[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.Axl[1]-
Ags)*BG)/Ad6)|0)]);this.J$([x1+((((Ar.Axm[0]-Agq)*BP)/Ad7)|0),y1+((((Ar.Axm[1]-Ags
)*BG)/Ad6)|0)]);this.Ec=Ar;}return[BP+1,BG+1];},Ak9:function(aOffset,Aqp){if(Aqp
){this.EV=A.aak(this.EV,aOffset);this.Ev=A.aak(this.Ev,aOffset);this.LZ=A.aak(this.
LZ,aOffset);this.JR=A.aak(this.JR,aOffset);}else{this.D5(A.aak(this.EV,aOffset));
this.DL(A.aak(this.Ev,aOffset));this.J_(A.aak(this.LZ,aOffset));this.J$(A.aak(this.
JR,aOffset));}},GetExtent:function(){if(!!this.Ec&&this.Ec.isEmpty)return BI;var
x1=this.EV[0];var y1=this.EV[1];var x2=this.LZ[0];var y2=this.LZ[1];if((((this.JR[
0]!==x1)||(this.Ev[1]!==y1))||(this.Ev[0]!==x2))||(this.JR[1]!==y2)){if(this.Ev[
0]<x1)x1=this.Ev[0];if(this.LZ[0]<x1)x1=this.LZ[0];if(this.JR[0]<x1)x1=this.JR[0
];if(this.Ev[1]<y1)y1=this.Ev[1];if(this.LZ[1]<y1)y1=this.LZ[1];if(this.JR[1]<y1
)y1=this.JR[1];if(this.EV[0]>x2)x2=this.EV[0];if(this.Ev[0]>x2)x2=this.Ev[0];if(
this.JR[0]>x2)x2=this.JR[0];if(this.EV[1]>y2)y2=this.EV[1];if(this.Ev[1]>y2)y2=this.
Ev[1];if(this.JR[1]>y2)y2=this.JR[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;
}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},J$:function(E){var B;
if(A.z8(E,this.JR))return;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));this.Ec=null;this.JR=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.
S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);}},J_:function(
E){var B;if(A.z8(E,this.LZ))return;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());this.Ec=null;this.LZ=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000
)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN
],this);}},DL:function(E){var B;if(A.z8(E,this.Ev))return;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.GetExtent());this.Ec=null;this.Ev=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===
0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|
0x4000;A.ow([B=this.Aa,B.HN],this);}},D5:function(E){var B;if(A.z8(E,this.EV))return;
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.Ec=null;this.
EV=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((!!this.
Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.S=this.S|0x800;
this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);}},AMO:function(Kg){var G5=
A.aan(4,A.vw,null);var P=0;var HL=3;var AWU=false;var AWV=false;G5.Set(0,this.EV
);G5.Set(1,this.Ev);G5.Set(2,this.LZ);G5.Set(3,this.JR);while(P<4){var A$V=G5.Get(
P)[0];var AHl=G5.Get(P)[1];var Bu5=G5.Get(HL)[0];var AYM=G5.Get(HL)[1];if(((AHl>
Kg[1])!==(AYM>Kg[1]))||((AHl<Kg[1])!==(AYM<Kg[1]))){var FA=((((Bu5-A$V)*(Kg[1]-AHl
))/(AYM-AHl))|0)+A$V;if(Kg[0]>FA)AWU=!AWU;if(Kg[0]<FA)AWV=!AWV;}HL=P;P=P+1;}return AWU||
AWV;},Bcj:function(){return((((this.EV[0]===this.JR[0])&&(this.Ev[0]===this.LZ[0
]))&&(this.EV[1]===this.Ev[1]))&&(this.LZ[1]===this.JR[1]))||((((this.EV[0]===this.
Ev[0])&&(this.LZ[0]===this.JR[0]))&&(this.EV[1]===this.JR[1]))&&(this.Ev[1]===this.
LZ[1]));},_Init:function(aArg){C.B5._Init.call(this,aArg);this.__proto__=C.XO;},
_className:"Core::QuadView"};C.Em={M:A.vx,AqR:function(BC,Aqr){var Ar=A._NewObject(
C.Aov,0);Ar.extent=this.M;Ar.Ba=BC;Ar.MO=Aqr;this.Ec=Ar;},ArO:function(BC,L5){var
B;var Ew=this.OY;var Ar=this.Ec;var x1=Ar.extent[0];var y1=Ar.extent[1];var x2=Ar.
extent[2];var y2=Ar.extent[3];var Jz=[BC[2]-BC[0],BC[3]-BC[1]];var BP=x2-x1;var BG=
y2-y1;if(!L5){var MR=[(B=Ar.Ba)[2]-B[0],B[3]-B[1]];x1=x1-Ar.Ba[0];y1=y1-Ar.Ba[1];
if(MR[0]!==Jz[0]){var Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);var Pu=((Ew&0x1
)===0x1);if(!Hh&&(Pu||!Hi))x1=((x1*Jz[0])/MR[0])|0;if(!Hi&&(Pu||!Hh)){x2=x2-Ar.Ba[
0];x2=((x2*Jz[0])/MR[0])|0;x2=x2-Jz[0];}else x2=x2-Ar.Ba[2];x1=x1+BC[0];x2=x2+BC[
2];if(!Pu){if(Hh&&!Hi)x2=x1+BP;else if(!Hh&&Hi)x1=x2-BP;else{x1=x1+((((x2-x1)-BP
)/2)|0);x2=x1+BP;}}}else{x2=x2-Ar.Ba[2];x1=x1+BC[0];x2=x2+BC[2];}if(MR[1]!==Jz[1
]){var Hj=((Ew&0x10)===0x10);var Hg=((Ew&0x20)===0x20);var Pv=((Ew&0x2)===0x2);if(
!Hj&&(Pv||!Hg))y1=((y1*Jz[1])/MR[1])|0;if(!Hg&&(Pv||!Hj)){y2=y2-Ar.Ba[1];y2=((y2
*Jz[1])/MR[1])|0;y2=y2-Jz[1];}else y2=y2-Ar.Ba[3];y1=y1+BC[1];y2=y2+BC[3];if(!Pv
){if(Hj&&!Hg)y2=y1+BG;else if(!Hj&&Hg)y1=y2-BG;else{y1=y1+((((y2-y1)-BG)/2)|0);y2=
y1+BG;}}}else{y2=y2-Ar.Ba[3];y1=y1+BC[1];y2=y2+BC[3];}}else{switch(L5){case 3:{x1=
BC[0];x2=x1+BP;}break;case 4:{x2=BC[2];x1=x2-BP;}break;case 1:{y1=BC[1];y2=y1+BG;
}break;case 2:{y2=BC[3];y1=y2-BG;}break;default:;}if((L5===3)||(L5===4)){var Hj=((
Ew&0x10)===0x10);var Hg=((Ew&0x20)===0x20);var Pv=((Ew&0x2)===0x2);if(Pv){y1=BC[
1];y2=BC[3];}else if(Hj&&!Hg){y1=BC[1];y2=y1+BG;}else if(Hg&&!Hj){y2=BC[3];y1=y2-
BG;}else{y1=BC[1]+((((BC[3]-BC[1])-BG)/2)|0);y2=y1+BG;}}if((L5===1)||(L5===2)){var
Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);var Pu=((Ew&0x1)===0x1);if(Pu){x1=BC[
0];x2=BC[2];}else if(Hh&&!Hi){x1=BC[0];x2=x1+BP;}else if(Hi&&!Hh){x2=BC[2];x1=x2-
BP;}else{x1=BC[0]+((((BC[2]-BC[0])-BP)/2)|0);x2=x1+BP;}}}Ar.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.S&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.Ec=Ar;}return[x2-x1,y2-y1];},Ak9:function(aOffset,Aqp){if(Aqp)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Aa&&((this.S&0x1)===0x1
))this.Aa.Bc(this.M);this.Ec=null;this.M=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.M);if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000)===0x2000
)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);}}
,_Init:function(aArg){C.B5._Init.call(this,aArg);this.__proto__=C.Em;},_className:
"Core::RectView"};C.O={BZ:null,BU:null,AGr:null,Hl:null,H2:null,VM:null,Anh:null
,A6:null,Gq:255,Init:function(aArg){this.Al();},JJ:function(CL,aClip,aOffset,B6,
aBlend){var B;B6=((B6+1)*this.Gq)>>8;aBlend=aBlend&&((this.S&0x2)===0x2);if(!this.
Hl||(CL.C7===this))this.A8l(CL,aClip,A.aak(aOffset,this.M.slice(0,2)),B6,aBlend);
else{var BF=255|(255<<8)|(255<<16)|((B6&0xFF)<<24);this.Hl.Update();CL.AZ4(aClip
,this.Hl,0,A.aam(this.M,aOffset),B4,BF,BF,BF,BF,aBlend);}},Wy:function(C0,Bz,Nw,
AaV,Aa0,AaZ){var B;var X=this.BU;var AmO=null;var Ay=BI;var JA=null;var AXa=!!this.
VM&&(!!this.VM.Fi||!!this.VM.BZ);if(((B=A.kz(C0,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;C0=A.aal(C0,this.M.slice(0,2));if(!!Aa0){X=Aa0;while(!!X&&(X.Aa!==this
))X=X.Aa;}while(!!X){if(((X.S&0x400)===0x400)&&!JA){JA=X.AG;while(!!JA&&!((JA.S&
0x200)===0x200))JA=JA.AG;if(!!JA)Ay=A.kz(C0,JA.GetExtent());else Ay=BI;}if(JA===
X){JA=null;Ay=BI;}if((((((X.S&0x8)===0x8)&&((X.S&0x10)===0x10))&&!((X.S&0x40000)===
0x40000))&&!((X.S&0x20000)===0x20000))&&(!((X.S&0x10000)===0x10000)||((this.H2.C7===
X)&&!AXa))){var extent=X.GetExtent();var AFX=AaV;var Amz=null;if(AFX===X)AFX=null;
if(((X.S&0x400)===0x400)){if(!(((B=A.kz(extent,Ay))[0]>=B[2])||(B[1]>=B[3])))Amz=
X.Wy(Ay,Bz,Nw,AFX,Aa0,AaZ);}else if(!(((B=A.kz(extent,C0))[0]>=B[2])||(B[1]>=B[3
]))||(AaV===X))Amz=X.Wy(C0,Bz,Nw,AFX,Aa0,AaZ);X=X.AG;if(!!Amz){if(!AmO||((Amz.ArY<
AmO.ArY)&&(Amz.ArY>=0)))AmO=Amz;if(!Amz.ArY)X=null;}}else X=X.AG;Aa0=null;}return AmO;
},ArF:function(C0){var B;var F;var X=this.BZ;var L8=BI;var Axg=true;var result=(
C0=F=A.aal(C0,this.M.slice(0,2)),F);while(!!X){if(((X.S&0x200)===0x200)){var Axf=(
C.Ac.isPrototypeOf(X)?X:null);L8=A.kz(C0,Axf.M);Axg=((Axf.S&0x1)===0x1);}if(((X.
S&0x1)===0x1)){if(((X.S&0x400)===0x400)){if(Axg){var Ay=A.kz(X.GetExtent(),L8);if(
!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))result=A.vS(result,X.ArF(Ay));}}else{var Ay=A.
kz(X.GetExtent(),C0);if(!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))result=A.vS(result,X.ArF(
Ay));}}X=X.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},CS:function(
Af_,Amf){var B;var YO=this.S;C.Em.CS.call(this,Af_,Amf);var Ajr=this.S^YO;if(!!this.
A6&&((Ajr&0x40)===0x40)){if(((this.S&0x40)===0x40))this.A6.CS(0x40,0x0);else this.
A6.CS(0x0,0x40);}if(!!this.H2&&((Ajr&0x40)===0x40)){if(((this.S&0x40)===0x40)&&((
this.H2.C7.S&0x14)===0x14))this.H2.C7.CS(0x40,0x0);else this.H2.C7.CS(0x0,0x40);
}if(!!Ajr){this.S=this.S|0x8000;A.ow([this,this.HN],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var AjP=[(B=this.M)[2]-B[0],B[3]-B[1]];var AGz=[E[2]-E[
0],E[3]-E[1]];var Ano=!A.z8(AjP,AGz);if(Ano&&!!this.Hl){this.Hl.Ao2(AGz);A.vv(this
,0);A.vv(this.Hl,0);}C.Em.G.call(this,E);if((Ano&&(AjP[0]>0))&&(AjP[1]>0)){var Ba=[
].concat(B4,AjP);var X=this.BZ;while(!!X){if((!X.Ec&&(X.OY!==0x14))&&!((X.S&0x400
)===0x400))X.AqR(Ba,null);X=X.Af;}}if(Ano){this.S=this.S|0x5000;A.ow([this,this.
HN],this);}},AX5:function(Cx){var A9d=(C.KeyEvent.isPrototypeOf(Cx)?Cx:null);var
DI=this.AGr;if(!A9d)return null;while(!!DI&&(!DI.Bw||!DI.Gl(A9d)))DI=DI.Af;return DI;
},BuO:function(H){if(!!this.Hl){this.Hl.C7=this;var Ay=A.aal(this.ArF(A.aam(this.
Hl.PL,this.M.slice(0,2))),this.M.slice(0,2));this.Hl.Asf(Ay,Ay,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A8l(this.Hl,Ay,B4,255,true);this.Hl.C7=null;}
},A8l:function(CL,aClip,aOffset,B6,aBlend){var B;var X=this.BZ;var L8=BI;var Axg=
true;this.Bbj(CL,aClip,aOffset,B6,aBlend);while(!!X){if(((X.S&0x200)===0x200)){var
Axf=(C.Ac.isPrototypeOf(X)?X:null);L8=A.kz(aClip,A.aam(Axf.M,aOffset));Axg=((Axf.
S&0x1)===0x1);}if(((X.S&0x1)===0x1)){if(((X.S&0x400)===0x400)){if(Axg){var Ay=A.
kz(A.aam(X.GetExtent(),aOffset),L8);if(!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))X.JJ(CL
,Ay,aOffset,B6,aBlend);}}else{var Ay=A.kz(A.aam(X.GetExtent(),aOffset),aClip);if(
!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))X.JJ(CL,Ay,aOffset,B6,aBlend);}}X=X.Af;}this.Bbm(
CL,aClip,aOffset,B6,aBlend);},A_0:function(){var B;var AWM=((this.S&0x1000)===0x1000
);var Agx=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var YA=false;var Abf=BI;var Ki=BI;var
YB=B4;var AqN=0;var AqO=0;var AqM=0;var Pp=0;var X=this.BU;var JA=null;var AjG=null;
while(!!X){if(((X.S&0x800)===0x800)){YA=true;X.S=X.S&~0x800;}if(YA&&((X.S&0x200)===
0x200)){YA=false;if(!!(C.Ac.isPrototypeOf(X)?X:null).Ae0)X.S=X.S|0x1000;}X=X.AG;
}YA=false;X=this.BZ;if(AWM){this.S=this.S&~0x1000;AWM=!((Agx[0]>=Agx[2])||(Agx[1
]>=Agx[3]));}this.S=this.S|0x2000;while(!!X){if(!AjG&&(AqM!==Pp)){var AbC=X;var AGW=
0;var Axz=Abf[2]-Abf[0];var Av1=Abf[3]-Abf[1];var AFN=0;var AnC=B4;do if(((AbC.S&
0x200)===0x200))AbC=null;else if(((AbC.S&0x401)===0x401)){AnC=[(B=AbC.GetExtent(
))[2]-B[0],B[3]-B[1]];if((Pp===3)||(Pp===4))Axz=Axz-AnC[0];if((Pp===1)||(Pp===2)
)Av1=Av1-AnC[1];if(!AjG||((Axz>=0)&&(Av1>=0))){AjG=AbC;AbC=AbC.Af;if((Pp===3)||(
Pp===4)){Axz=Axz-AqN;if(AnC[1]>AGW)AGW=AnC[1];}if((Pp===1)||(Pp===2)){Av1=Av1-AqO;
if(AnC[0]>AFN)AFN=AnC[0];}}else AbC=null;}else AbC=AbC.Af;while(!!AbC);if(!AjG)AjG=
JA;Ki=Abf;switch(AqM){case 9:case 11:Ki=[].concat(Ki.slice(0,3),Ki[1]+AGW);break;
case 10:case 12:Ki=A.aaS(Ki,Ki[3]-AGW);break;case 5:case 7:Ki=A.aaQ(Ki,Ki[0]+AFN
);break;case 6:case 8:Ki=[].concat(Ki[2]-AFN,Ki.slice(1,4));break;default:;}}if(((
X.S&0x400)===0x400)){if(!!X.Ec&&(X.Ec.MO!==JA))X.Ec=null;if((!X.Ec&&YA)&&((X.OY!==
0x14)||!!Pp))X.AqR(Ki,JA);}if(!!X.Ec){if(AWM&&!((X.S&0x400)===0x400))X.ArO(Agx,0
);if(YA&&((X.S&0x400)===0x400)){var CW=X.ArO(A.aam(Ki,YB),Pp);if(((X.S&0x1)===0x1
)){var Bj=B4;switch(Pp){case 3:Bj=[CW[0]+AqN,Bj[1]];break;case 4:Bj=[-CW[0]-AqN,
Bj[1]];break;case 1:Bj=[Bj[0],CW[1]+AqO];break;case 2:Bj=[Bj[0],-CW[1]-AqO];break;
default:;}YB=A.aak(YB,Bj);}}}if(((X.S&0x200)===0x200)){if(YA)A.ow(JA.Eu,JA);YA=((
X.S&0x1000)===0x1000);JA=(C.Ac.isPrototypeOf(X)?X:null);if(YA){X.S=X.S&~0x1000;AqM=
JA.Ae0;Pp=AqM;Abf=A.aam(JA.M,JA.Br);Ki=Abf;YB=B4;AqN=JA.Space+JA.APX;AqO=JA.Space;
YA=!((Abf[0]>=Abf[2])||(Abf[1]>=Abf[3]));AjG=null;switch(AqM){case 9:case 10:Pp=
3;break;case 11:case 12:Pp=4;break;case 5:case 6:Pp=1;break;case 7:case 8:Pp=2;break;
default:;}}if(YA)this.Bc(JA.M);}if(X===AjG){switch(AqM){case 9:case 11:YB=[0,(YB[
1]+(Ki[3]-Ki[1]))+AqO];break;case 10:case 12:YB=[0,(YB[1]-(Ki[3]-Ki[1]))-AqO];break;
case 5:case 7:YB=[(YB[0]+(Ki[2]-Ki[0]))+AqN,0];break;case 6:case 8:YB=[(YB[0]-(Ki[
2]-Ki[0]))-AqN,0];break;default:;}AjG=null;}X=X.Af;}if(YA)A.ow(JA.Eu,JA);this.S=
this.S&~0x2000;this.Bh([Agx[2]-Agx[0],Agx[3]-Agx[1]]);},HN:function(H){var B;var
BuX=((this.S&0x1000)===0x1000);if(((this.S&0x4000)===0x4000)){this.S=this.S&~0x4000;
this.A_0();}if(((this.S&0x8000)===0x8000)||BuX){this.S=this.S&~0x8000;this.Ah(this.
S);}},A8:function(E){var B;if(!!E&&(E.Aa!==this))throw new Error(EH);if(!!E&&!((
E.S&0x14)===0x14))E=null;if(!!E&&((E.S&0x10000)===0x10000))E=null;if(E===this.A6
)return;if(!!this.A6)this.A6.CS(0x0,0x60);this.A6=E;if(!!E){if(((this.S&0x40)===
0x40))E.CS(0x60,0x0);else E.CS(0x20,0x0);}},A6E:function(Ao){this.A8(Ao);},ANS:function(
){return!!this.Hl;},AoT:function(E){var B;if(!!this.Hl===E)return;if(E){this.Hl=
A._NewObject(A.Graphics.Canvas,0);this.Hl.Ao2([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Hl.AAL=[this,this.BuO];}else{this.Hl.AAL=null;this.Hl.Ao2(B4);this.Hl=null;}if(!
!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);A.vv(this,0);},A2y:function(){
var B;return((this.S&0x10)===0x10);},An:function(E){if(E)this.CS(0x10,0x0);else this.
CS(0x0,0x10);},DF:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.Gq)return;
this.Gq=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},AUS:function(Ao
){this.DF(Ao);},Aj:function(E){if(E)this.CS(0x400,0x0);else this.CS(0x0,0x400);}
,Be1:function(E){if(E)this.CS(0x2,0x0);else this.CS(0x0,0x2);},Fe:function(){var
B;return((this.S&0x1)===0x1);},W:function(E){if(E)this.CS(0x1,0x0);else this.CS(
0x0,0x1);},Bbm:function(CL,aClip,aOffset,B6,aBlend){},Bbj:function(CL,aClip,aOffset
,B6,aBlend){},GetMinimalSize:function(){return B4;},AP4:function(HZ,Nv,Vy,RY,RZ,
Af9,Oj,Qm,KS,KQ,KR){var B;if(!this.H2){this.Aiy(HZ,Nv,Vy,RY,RZ,null,null,KS,KQ,KR
);return;}var AjO=this.H2;var Kp=AjO.Af;if(((HZ.S&0x10000)===0x10000)&&(this.H2.
C7!==HZ))throw new Error(Gv);var Abm=A._NewObject(C.AJC,0);var Qt=AjO.Qt;var QD=
null;var Lv=null;if(!!Kp){QD=Kp.QD;Lv=Kp.Lv;}if(!!Kp&&!!AjO.Ang)QD=AjO.Ang;if(!!
Kp&&!!Oj)Lv=Oj;if(!!Af9)Qt=Af9;if(!Nv)Nv=A._GetAutoObject(A.abm.Aui);if(!Vy)Vy=Nv;
if(!RZ)RZ=RY;if(!RY)RY=RZ;Abm.Qt=Vy;Abm.Lv=RY;Abm.QD=RZ;Abm.Ang=Qm;Abm.C7=HZ;Abm.
Af=this.H2.Af;this.H2.Af=null;this.H2=Abm;if(this.A6===HZ)this.A8(null);AjO.C7.CS(
0x0,0x10040);if(((this.S&0x40)===0x40)&&((HZ.S&0x4)===0x4))HZ.CS(0x10040,0x0);else
HZ.CS(0x10000,0x0);if(!!Lv){this.M1(Kp.C7,Lv.Ab3(),null,null,KR);this.M1(AjO.C7,
Qt.QZ(),null,null,true);this.M1(Abm.C7,Nv.Q0(),KS,KQ,true);}else if(!!QD){this.M1(
Kp.C7,QD.Ab4(),null,null,KR);this.M1(AjO.C7,Qt.QZ(),null,null,true);this.M1(Abm.
C7,Nv.Q0(),KS,KQ,true);}else if(!!Qt){this.M1(AjO.C7,Qt.QZ(),null,null,KR);this.
M1(Abm.C7,Nv.Q0(),KS,KQ,true);}else this.M1(Abm.C7,Nv.Q0(),KS,KQ,KR);},AnY:function(
HZ,Af9,Oj,Qm,KS,KQ,KR){var B;if(!this.H2)return;if(!HZ)return;var J0=this.H2;var
Kp=this.H2.Af;var Aq9=null;while((!!J0&&(J0.C7!==HZ))&&!!J0.Af){Aq9=J0;J0=Kp;Kp=
J0.Af;}if(!J0||(J0.C7!==HZ))throw new Error(I5);if(!Aq9){this.H2=Kp;J0.Af=null;}
else{Aq9.Af=Kp;J0.Af=null;}J0.C7.CS(0x0,0x10040);if(((((this.S&0x40)===0x40)&&!!
Kp)&&!Aq9)&&((Kp.C7.S&0x4)===0x4))Kp.C7.CS(0x40,0x0);var Qt=J0.Qt;var QD=null;var
Lv=null;if(!!Kp)QD=Kp.QD;if(!!Kp&&!!J0.Ang)QD=J0.Ang;if(!!Kp&&!!Qm)QD=Qm;if(!!Aq9&&
!!Kp)Lv=Kp.Lv;if((!!Aq9&&!!Kp)&&!!Oj)Lv=Oj;if(!!Af9)Qt=Af9;if(!!Lv){this.M1(Kp.C7
,Lv.Ab3(),null,null,KR);this.M1(J0.C7,Qt.QZ(),KS,KQ,true);}else if(!!QD){this.M1(
Kp.C7,QD.Ab4(),null,null,KR);this.M1(J0.C7,Qt.QZ(),KS,KQ,true);}else this.M1(J0.
C7,Qt.QZ(),KS,KQ,KR);},Aiy:function(HZ,Nv,Vy,RY,RZ,Oj,Qm,KS,KQ,KR){var B;if(!HZ)
return;if(!!this.H2&&(this.H2.C7===HZ)){this.AP4(HZ,Nv,Vy,RY,RZ,null,Oj,Qm,KS,KQ
,KR);return;}if(((HZ.S&0x10000)===0x10000))throw new Error(Gv);var J0=A._NewObject(
C.AJC,0);if(!!this.H2&&!this.H2.Lv){if(!Qm)Qm=Oj;if(!Oj)Oj=Qm;}var Lv=null;if(!!
this.H2)Lv=this.H2.Lv;if(!!this.H2&&!!Oj)Lv=Oj;if(!Nv)Nv=A._GetAutoObject(A.abm.
Aui);if(!Vy)Vy=Nv;if(!RZ)RZ=RY;if(!RY)RY=RZ;J0.Qt=Vy;J0.Lv=RY;J0.QD=RZ;J0.Ang=Qm;
if(this.A6===HZ)this.A8(null);if(!!this.H2)this.H2.C7.CS(0x0,0x40);if(((this.S&0x40
)===0x40)&&((HZ.S&0x4)===0x4))HZ.CS(0x10040,0x0);else HZ.CS(0x10000,0x0);J0.C7=HZ;
J0.Af=this.H2;this.H2=J0;if(!!Lv){this.M1(this.H2.Af.C7,Lv.Ab3(),null,null,KR);this.
M1(HZ,Nv.Q0(),KS,KQ,true);}else this.M1(HZ,Nv.Q0(),KS,KQ,KR);},A09:function(Ae){
var B;return(B=Ae)&&((this.S&B)===B);},A1I:function(Kg){var tmp=this;while(!!tmp
){Kg=A.aaj(Kg,tmp.M.slice(0,2));tmp=tmp.Aa;}return Kg;},Bcf:function(Kg){var tmp=
this;while(!!tmp){Kg=A.aak(Kg,tmp.M.slice(0,2));tmp=tmp.Aa;}return Kg;},DispatchEvent:
function(Cx){var B;var X=this.A6;var B0=(C.O.isPrototypeOf(X)?X:null);var FU=null;
var AXa=!!this.VM&&(!!this.VM.Fi||!!this.VM.BZ);if(!!X&&((((X.S&0x10000)===0x10000
)||((X.S&0x40000)===0x40000))||((X.S&0x20000)===0x20000))){X=null;B0=null;}if(!!
this.H2&&!AXa)FU=this.H2.C7.DispatchEvent(Cx);if(!FU&&!!B0)FU=B0.DispatchEvent(Cx
);else if(!FU&&!!X)FU=X.Gl(Cx);if(!FU)FU=this.Gl(Cx);if(!FU)FU=this.AX5(Cx);return FU;
},BroadcastEventAtPosition:function(Cx,I6,aFilter){var B;var X=this.BU;var FU=null;
while(!!X&&!FU){if((!aFilter||((B=aFilter)&&((X.S&B)===B)))&&A.vt(X.GetExtent(),
I6)){var B0=(C.O.isPrototypeOf(X)?X:null);if(!!B0)FU=B0.BroadcastEventAtPosition(
Cx,A.aaj(I6,B0.M.slice(0,2)),aFilter);else FU=X.Gl(Cx);}X=X.AG;}if(!FU)FU=this.Gl(
Cx);return FU;},BroadcastEvent:function(Cx,aFilter){var B;var X=this.BU;var FU=null;
while(!!X&&!FU){if(!aFilter||((B=aFilter)&&((X.S&B)===B))){var B0=(C.O.isPrototypeOf(
X)?X:null);if(!!B0)FU=B0.BroadcastEvent(Cx,aFilter);else FU=X.Gl(Cx);}X=X.AG;}if(
!FU)FU=this.Gl(Cx);if(!FU)FU=this.AX5(Cx);return FU;},Bh:function(aSize){},Ah:function(
Ae){},Bcv:function(){this.S=this.S|0x4000;A.ow([this,this.HN],this);},Al:function(
){this.S=this.S|0x8000;A.ow([this,this.HN],this);},Bc:function(C0){var B;var B0=
this;while(!!B0&&!((C0[0]>=C0[2])||(C0[1]>=C0[3]))){var Yw=B0.Hl;if(!B0.Aa&&(B0!==
this)){B0.Bc(C0);return;}if(!!Yw){var BsN=Yw.PL;Yw.PL=A.vS(Yw.PL,C0);if(!A.z9(BsN
,Yw.PL)){A.vv(B0,0);A.vv(Yw,0);}}if(!((B0.S&0x1)===0x1))return;C0=A.kz(A.aam(C0,
B0.M.slice(0,2)),B0.M);B0=B0.Aa;}},Q8:function(Ag,Ge,aFilter){var B;if(!Ag||(Ag.
Aa!==this))return null;var Aeh=A.zT(Ag.GetExtent());var X=Ag;var AV0=null;var A7Y=
0;var Iu=0x10000;var AGR;if(((aFilter&0x10000)===0x10000))Iu=0x0;var top=((Ge===
4)||(Ge===1))||(Ge===6);var bottom=((Ge===5)||(Ge===3))||(Ge===8);var left=((Ge===
2)||(Ge===1))||(Ge===3);var right=((Ge===7)||(Ge===6))||(Ge===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AG;if(!X)X=this.BU;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.S&B)===B))))&&(!Iu||!((B=Iu)&&((X.S&B)===B
))))for(AGR=0;AGR<2;AGR++){var AL=X.GetExtent();var s=[AL[2]-AL[0],AL[3]-AL[1]];
if(!!!AGR){if((left&&(s[0]>s[1]))&&(AL[2]<Aeh[0]))AL=[].concat(AL[2]-s[1],AL.slice(
1,4));if((right&&(s[0]>s[1]))&&(AL[0]>Aeh[0]))AL=A.aaQ(AL,AL[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AL[3]<Aeh[1]))AL=A.aaS(AL,AL[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AL[
1]>Aeh[1]))AL=[].concat(AL.slice(0,3),AL[1]+s[0]);}var Bj=A.aaj(A.zT(AL),Aeh);var
Qo=Bj;if(Qo[0]<0)Qo=[-Qo[0],Qo[1]];if(Qo[1]<0)Qo=[Qo[0],-Qo[1]];if(((((!left||(Bj[
0]<=-Qo[1]))&&(!right||(Bj[0]>=Qo[1])))&&(!top||(Bj[1]<=-Qo[0])))&&(!bottom||(Bj[
1]>=Qo[0])))&&((Qo[0]>0)||(Qo[1]>0))){var Qv=Bj[0];var Qw=Bj[1];var IP=Math.sqrt((
Qv*Qv)+(Qw*Qw));var AGp=0;if(!left&&!right)AGp=IP/Qo[1];if(!top&&!bottom)AGp=IP/
Qo[0];IP=(IP*AGp)*AGp;if((IP<A7Y)||!AV0){A7Y=IP;AV0=X;}}}}return AV0;},An4:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Aa!==this))return null;var X=this.BU;var Iu=0x10000;
if(((aFilter&0x10000)===0x10000))Iu=0x0;if(!!Ag)X=Ag.AG;while(!!X){if((!aFilter||((
B=aFilter)&&((X.S&B)===B)))&&(!Iu||!((B=Iu)&&((X.S&B)===B))))return X;X=X.AG;}return null;
},Zw:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Aa!==this))return null;var X=this.BZ;
var Iu=0x10000;if(((aFilter&0x10000)===0x10000))Iu=0x0;if(!!Ag)X=Ag.Af;while(!!X
){if((!aFilter||((B=aFilter)&&((X.S&B)===B)))&&(!Iu||!((B=Iu)&&((X.S&B)===B))))return X;
X=X.Af;}return null;},Aze:function(Ag,aFilter){var B;if(!Ag||(Ag.Aa!==this))return null;
var AjM=Ag.Af;var Aj1=Ag.AG;var Iu=0x10000;if(((aFilter&0x10000)===0x10000))Iu=0x0;
while(!!AjM||!!Aj1){if((!!AjM&&(!aFilter||((B=aFilter)&&((AjM.S&B)===B))))&&(!Iu||
!((B=Iu)&&((AjM.S&B)===B))))return AjM;if((!!Aj1&&(!aFilter||((B=aFilter)&&((Aj1.
S&B)===B))))&&(!Iu||!((B=Iu)&&((Aj1.S&B)===B))))return Aj1;if(!!AjM)AjM=AjM.Af;if(
!!Aj1)Aj1=Aj1.AG;}return null;},Dh:function(aFilter){var B;var X=this.BZ;var Ay=
BI;var Iu=0x10000;if(((aFilter&0x10000)===0x10000))Iu=0x0;while(!!X){if((!((X.S&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.S&B)===B))))&&(!Iu||!((B=Iu)&&((X.
S&B)===B))))Ay=A.vS(Ay,X.GetExtent());X=X.Af;}return Ay;},M1:function(JY,Fh,KS,KQ
,KR){var B;if(!JY)return;if(!Fh)throw new Error(Iq);if((!!Fh.O||!!Fh.Aa)||!!Fh.Ow
)throw new Error(Oe);if(!!JY.Aa&&(JY.Aa!==this))throw new Error(Pc);if(!this.VM)
this.VM=A._NewObject(C.AP9,0);Fh.Aa=this;Fh.O=JY;Fh.AGC=KQ;Fh.AXx=KS;if(!!JY.Anh
)JY.Anh.Ow.BhB(JY.Anh);JY.Anh=Fh;JY.S=JY.S|0x20000;if((KR&&!!this.VM.BU)&&!this.
VM.BU.AML())(A.abm.Ay$.isPrototypeOf(B=this.VM.BU)?B:null).AY4(Fh);else{var Ow=A.
_NewObject(A.abm.Ay$,0);Ow.AY4(Fh);this.VM.A4P(Ow,false);}},AlD:function(Ag,Jv){
var B;if(!Ag)throw new Error(Nq);if(Ag.Aa!==this)throw new Error(Cw);if(!!Jv&&(Jv.
Aa!==this))throw new Error(FN);if(Ag.Af===Jv)return;if(((Ag.S&0x401)===0x401)){if(
!!Ag.AG&&!!Ag.Ec)Ag.AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([
this,this.HN],this);}if(((Ag.S&0x200)===0x200)){if(!!Ag.AG)Ag.AG.S=Ag.AG.S|0x800;
Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HN],this);}if(!!Ag.Af)Ag.Af.
AG=Ag.AG;else this.BU=Ag.AG;if(!!Ag.AG)Ag.AG.Af=Ag.Af;else this.BZ=Ag.Af;var FT=
null;var H1=this.BU;var K0=Ag.Jq;if(!!Jv){FT=Jv;H1=Jv.AG;}if(!!FT&&(K0>FT.Jq))K0=
FT.Jq;if(!!H1&&(K0<H1.Jq))K0=H1.Jq;if(K0!==Ag.Jq){Ag.Aa=null;Ag.A4d(K0);Ag.Aa=this;
}if(!Jv){if(!!this.BU)this.BU.Af=Ag;Ag.AG=this.BU;Ag.Af=null;this.BU=Ag;}else{Ag.
Af=Jv;Ag.AG=Jv.AG;Jv.AG=Ag;if(!!Ag.AG)Ag.AG.Af=Ag;}if(this.BZ===Jv)this.BZ=Ag;if(((
Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent());},S4:function(Ag){var B;if(!Ag)throw new
Error(Nq);if(Ag.Aa!==this)throw new Error(Cw);if(!Ag.Af)return;var H1=this.BU;var
K0=Ag.Jq;while(!!H1&&(H1.Jq>K0))H1=H1.AG;if(((H1===Ag)||!H1)||(H1.Af===Ag))return;
if(((Ag.S&0x401)===0x401)){if(!!Ag.AG&&!!Ag.Ec)Ag.AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;
this.S=this.S|0x4000;A.ow([this,this.HN],this);}if(((Ag.S&0x200)===0x200)){if(!!
Ag.AG)Ag.AG.S=Ag.AG.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HN],this);}if(!
!Ag.AG)Ag.AG.Af=Ag.Af;else this.BZ=Ag.Af;Ag.Af.AG=Ag.AG;Ag.AG=H1;Ag.Af=H1.Af;H1.
Af=Ag;if(!!Ag.Af)Ag.Af.AG=Ag;else this.BU=Ag;if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent(
));},Lh:function(Ag,Ph){var B;if(!Ag)throw new Error(Nq);if(Ag.Aa!==this)throw new
Error(Cw);var H1=Ag;var FT=Ag;var K0=Ag.Jq;while(((Ph>0)&&!!H1.Af)&&(H1.Af.Jq<=K0
)){H1=H1.Af;Ph=Ph-1;}while(((Ph<0)&&!!FT.AG)&&(FT.AG.Jq>=K0)){FT=FT.AG;Ph=Ph+1;}
if((H1===Ag)&&(FT===Ag))return;if(((Ag.S&0x401)===0x401)){if(!!Ag.AG&&!!Ag.Ec)Ag.
AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HN],this
);}if(((Ag.S&0x200)===0x200)){if(!!Ag.AG)Ag.AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;this.
S=this.S|0x4000;A.ow([this,this.HN],this);}if(!!Ag.AG)Ag.AG.Af=Ag.Af;if(!!Ag.Af)
Ag.Af.AG=Ag.AG;if(this.BZ===Ag)this.BZ=Ag.Af;if(this.BU===Ag)this.BU=Ag.AG;if(H1
!==Ag){Ag.Af=H1.Af;Ag.AG=H1;H1.Af=Ag;if(!!Ag.Af)Ag.Af.AG=Ag;}if(FT!==Ag){Ag.Af=FT;
Ag.AG=FT.AG;FT.AG=Ag;if(!!Ag.AG)Ag.AG.Af=Ag;}if(!Ag.Af)this.BU=Ag;if(!Ag.AG)this.
BZ=Ag;if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent());},HA:function(Ag){var B;if(!
Ag)throw new Error(Of);if(Ag.Aa!==this)throw new Error(Cw);if((((Ag.S&0x401)===0x401
)&&!!Ag.AG)&&!!Ag.Ec){Ag.AG.S=Ag.AG.S|0x800;this.S=this.S|0x4000;A.ow([this,this.
HN],this);}if(((Ag.S&0x200)===0x200)){if(!!Ag.AG)Ag.AG.S=Ag.AG.S|0x800;this.S=this.
S|0x4000;A.ow([this,this.HN],this);}Ag.Ec=null;if(this.A6===Ag)this.A8(this.Aze(
Ag,0x14));if(!!Ag.AG)Ag.AG.Af=Ag.Af;if(!!Ag.Af)Ag.Af.AG=Ag.AG;if(this.BZ===Ag)this.
BZ=Ag.Af;if(this.BU===Ag)this.BU=Ag.AG;Ag.Aa=null;Ag.Af=null;Ag.AG=null;if(((Ag.
S&0x1)===0x1))this.Bc(Ag.GetExtent());},AHY:function(Ag,Jv){var B;if(!Ag)throw new
Error(Nr);if(!!Ag.Aa)throw new Error(Kc);if(!!Jv&&(Jv.Aa!==this))throw new Error(
FN);var FT=null;var H1=this.BU;var K0=Ag.Jq;if(!!Jv){FT=Jv;H1=Jv.AG;}if(!!FT&&(K0>
FT.Jq))K0=FT.Jq;if(!!H1&&(K0<H1.Jq))K0=H1.Jq;if(K0!==Ag.Jq){Ag.Aa=null;Ag.A4d(K0
);Ag.Aa=this;}if(!Jv){if(!!this.BU)this.BU.Af=Ag;Ag.AG=this.BU;this.BU=Ag;}else{
Ag.Af=Jv;Ag.AG=Jv.AG;Jv.AG=Ag;if(!!Ag.AG)Ag.AG.Af=Ag;}Ag.Aa=this;if(this.BZ===Jv
)this.BZ=Ag;if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent());if(((!this.A6&&((Ag.S&
0x4)===0x4))&&((Ag.S&0x10)===0x10))&&!((Ag.S&0x10000)===0x10000))this.A8(Ag);if(((
Ag.S&0x401)===0x401)){Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HN],this
);}if(((Ag.S&0x200)===0x200)){Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.
HN],this);}},J:function(Ag,Ph){var B;if(!Ag)throw new Error(Nr);if(!!Ag.Aa)throw new
Error(Kc);var FT=null;var K0=Ag.Jq;if(((Ph<0)&&!!this.BU)&&(this.BU.Jq>=K0)){FT=
this.BU;Ph=Ph+1;}while((((Ph<0)&&!!FT)&&!!FT.AG)&&(FT.AG.Jq>=K0)){FT=FT.AG;Ph=Ph+
1;}if((!FT&&!!this.BU)&&(this.BU.Jq>K0))FT=this.BU;while((!!FT&&!!FT.AG)&&(FT.AG.
Jq>K0))FT=FT.AG;if(!FT){Ag.Aa=this;Ag.AG=this.BU;if(!!this.BU)this.BU.Af=Ag;if(!
this.BZ)this.BZ=Ag;this.BU=Ag;}else{Ag.Aa=this;Ag.AG=FT.AG;Ag.Af=FT;FT.AG=Ag;if(
!!Ag.AG)Ag.AG.Af=Ag;else this.BZ=Ag;}if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent(
));if(((!this.A6&&((Ag.S&0x4)===0x4))&&((Ag.S&0x10)===0x10))&&!((Ag.S&0x10000)===
0x10000))this.A8(Ag);if(((Ag.S&0x401)===0x401)){Ag.S=Ag.S|0x800;this.S=this.S|0x4000;
A.ow([this,this.HN],this);}if(((Ag.S&0x200)===0x200)){Ag.S=Ag.S|0x800;this.S=this.
S|0x4000;A.ow([this,this.HN],this);}},A2A:function(){return this.A6;},Atb:function(
){return this.Gq;},_Init:function(aArg){C.Em._Init.call(this,aArg);this.__proto__=
C.O;this.S=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.Em._Mark.call(this,D
);if((B=this.BZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AGr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Hl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.H2)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.VM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Anh)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Qz:null,Jb:null,EW:A.aan(10,null,null),AqA:null,Agi:null,
AxW:0,HI:0,Lq:A.aan(10,0,null),AFT:A.aan(10,A.vx,null),VL:A.aan(10,0,null),Ad5:A.
aan(10,A.vw,null),AqF:A.aan(10,0,null),Agh:A.aan(10,A.vw,null),VK:A.aan(10,A.vw,
null),Qs:A.aan(10,A.vw,null),Aa9:A.aan(10,A.vw,null),Eo:0,AGd:0,AGc:0,NN:A.aan(4
,0,null),JG:A.aan(4,A.vx,null),JC:0,AwL:0,AqU:0,AwA:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},HQ:function(){return this;},JJ:function(CL
,aClip,aOffset,B6,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CL.Asf(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.JJ.call(this,CL,aClip,aOffset,B6,aBlend);},CS:
function(Af_,Amf){var B;C.O.CS.call(this,Af_,Amf);if(!this.Aa&&(((Af_&0x1)===0x1
)||((Amf&0x1)===0x1)))this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Aa&&(((
Af_&0x2)===0x2)||((Amf&0x2)===0x2)))this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A8:function(E){if((E!==null)||!E)C.O.A8.call(this,E);},AoT:function(E){var B;var
BsL=this.Hl;C.O.AoT.call(this,E);if(((BsL!==this.Hl)&&!this.Aa)&&((this.S&0x1)===
0x1))this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DF:function(E){var B;var BR=this.
Gq;C.O.DF.call(this,E);if(((BR!==this.Gq)&&!this.Aa)&&((this.S&0x1)===0x1))this.
Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(Cx){if(!!Cx){Cx.
AsS=!!this.HI;if(!!this.HI)Cx.Bp=this.HI;}var FU=null;if(!!this.Jb){FU=this.Jb.C7.
DispatchEvent(Cx);if(!FU)FU=this.Gl(Cx);if(!FU)FU=this.AX5(Cx);this.HI=0;return FU;
}FU=C.O.DispatchEvent.call(this,Cx);this.HI=0;return FU;},BroadcastEvent:function(
Cx,aFilter){if(!!Cx){Cx.AsS=!!this.HI;if(!!this.HI)Cx.Bp=this.HI;}var FU=C.O.BroadcastEvent.
call(this,Cx,aFilter);this.HI=0;return FU;},Bc:function(C0){var B;if(this.AxW>0)
throw new Error(Og);if(!!this.Hl&&!this.Aa){if(((B=this.Hl.PL)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.Hl,0);}this.Hl.PL=A.vS(this.Hl.PL,C0);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)C0=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Aa){C.O.Bc.call(this,C0);return;}C0=A.kz(A.aam(C0,this.M.slice(0
,2)),this.M);if((C0[0]>=C0[2])||(C0[1]>=C0[3]))return;var P;for(P=0;P<this.JC;P=
P+1)if(!(((B=A.kz(this.JG.Get(P),C0))[0]>=B[2])||(B[1]>=B[3]))){this.JG.Set(P,A.
vS(this.JG.Get(P),C0));this.NN.Set(P,A.zS(this.JG.Get(P)));return;}if(this.JC<3){
this.JG.Set(this.JC,C0);this.NN.Set(this.JC,A.zS(C0));this.JC=this.JC+1;return;}
var HL;var Qy;var AwK=0;var AwM=0;var A7X=2147483647;this.JG.Set(this.JC,C0);this.
NN.Set(this.JC,A.zS(C0));for(HL=0;HL<=this.JC;HL=HL+1)for(Qy=HL+1;Qy<=this.JC;Qy=
Qy+1){var AHe=A.zS(A.vS(this.JG.Get(HL),this.JG.Get(Qy)));var A_B=((AHe<<8)/(this.
NN.Get(HL)+this.NN.Get(Qy)))|0;if(A_B<A7X){A7X=A_B;AwK=HL;AwM=Qy;}}this.JG.Set(AwK
,A.vS(this.JG.Get(AwK),this.JG.Get(AwM)));this.NN.Set(AwK,A.zS(this.JG.Get(AwK))
);if(AwM!==this.JC){this.JG.Set(AwM,this.JG.Get(this.JC));this.NN.Set(AwM,this.NN.
Get(this.JC));}},Bru:function(){var KX=A._NewObject(C.An0,0);KX.AsS=!!this.HI;if(
!!this.HI)KX.Bp=this.HI;return KX;},Amx:function(){var KX=A._NewObject(C.Ab6,0);
KX.AsS=!!this.HI;if(!!this.HI)KX.Bp=this.HI;return KX;},AqE:function(){var KX=A.
_NewObject(C.ArU,0);KX.AsS=!!this.HI;if(!!this.HI)KX.Bp=this.HI;return KX;},Brx:
function(H){var P;var AmO=false;for(P=0;P<10;P=P+1)if(!!this.EW.Get(P)){var pos=
this.Qs.Get(P);var B0=this.EW.Get(P).Aa;while(!!B0&&(B0!==this)){pos=A.aaj(pos,B0.
M.slice(0,2));B0=B0.Aa;}if(!B0&&(this.EW.Get(P)!==this)){var tmp=this.EW.Get(P);
this.Eo=P;this.EW.Set(P,null);tmp.Gl(this.Amx().InitializeUp(P,this.Agh.Get(P),this.
Ad5.Get(P),this.VL.Get(P),this.Lq.Get(P)+1,this.VK.Get(P),false,this.Qs.Get(P),this.
Aa9.Get(P)));this.BroadcastEvent(this.AqE().InitializeUp(P,this.Lq.Get(P)+1,false
,tmp,this.Qs.Get(P)),0x18);}else{this.VL.Set(P,(this.Agi.Bp-this.AqF.Get(P))|0);
if(this.VL.Get(P)<10)this.VL.Set(P,10);this.Eo=P;this.EW.Get(P).Gl(this.Amx().InitializeHold(
P,pos,this.Ad5.Get(P),this.VL.Get(P),this.Lq.Get(P)+1,this.VK.Get(P),this.Qs.Get(
P),this.Aa9.Get(P)));AmO=true;}}if(!AmO)this.Agi.An(false);},GetFPS:function(){var
ticksCount=0;var A8y=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AGd&&(
ticksCount>this.AGd))A8y=((this.AGc*1000)/((ticksCount-this.AGd)|0))|0;this.AGc=
0;this.AGd=ticksCount;return A8y;},Update:function(){var B;if(!this.AqA)this.AqA=
A._NewObject(A.Graphics.Canvas,0);this.AqA.Ao2([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
AqA.Update();return this.UpdateGE20(this.AqA);},UpdateGE20:function(CL){if(!this.
BeginUpdate())return BI;var Aer=this.UpdateCanvas(CL,B4);this.EndUpdate();return Aer;
},EndUpdate:function(){if(this.JC>0){this.AGc=this.AGc+1;this.JC=0;}},UpdateCanvas:
function(CL,aOffset){var B;var Aer=BI;var Brd=[].concat(aOffset,A.aak(CL.FrameSize
,aOffset));var P;var HL=this.JC;this.AxW=this.AxW+1;CL.C7=this;for(P=0;(P<HL)&&(
P<4);P=P+1)if(this.NN.Get(P)>0){this.JJ(CL,A.aal(this.JG.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);Aer=A.vS(Aer,A.kz(Brd,this.JG.Get(P)));}else HL=HL+1;CL.
C7=null;this.AxW=this.AxW-1;if(!((Aer[0]>=Aer[2])||(Aer[1]>=Aer[3])))return A.aal(
Aer,aOffset);else return Aer;},GetUpdateRegion:function(AFb){var P;var HL=this.JC;
if(AFb<0)return BI;for(P=0;(P<HL)&&(P<4);P=P+1)if(!this.NN.Get(P)){HL=HL+1;AFb=AFb+
1;}else if(P===AFb)return this.JG.Get(P);return BI;},BeginUpdate:function(){var B;
var P;if(!!this.JC&&!A.z9(this.JG.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
A$D=A.aan(3,A.vx,null);var A$C=this.JC;for(P=0;P<A$C;P++)A$D.Set(P,this.JG.Get(P
));for(P=0;P<A$C;P++){var A_V=A.aam(A$D.Get(P),this.M.slice(0,2));var A_W=this.ArF(
A_V);if(!A.z9(A_V,A_W))this.Bc(A.aal(A_W,this.M.slice(0,2)));}}var HL;var Qy;for(
HL=0;HL<(this.JC-1);HL++)if(this.NN.Get(HL)>0)for(Qy=HL+1;Qy<this.JC;Qy++)if(this.
NN.Get(Qy)>0){var AHe=A.zS(A.vS(this.JG.Get(HL),this.JG.Get(Qy)));if(((AHe-this.
NN.Get(HL))-this.NN.Get(Qy))<0){this.JG.Set(HL,A.vS(this.JG.Get(HL),this.JG.Get(
Qy)));this.NN.Set(HL,AHe);this.NN.Set(Qy,0);}}for(P=this.JC-1;P>=0;P--)if(!this.
NN.Get(P))this.JC=this.JC-1;return this.JC;},DoesNeedUpdate:function(){if(this.JC>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B4,aSize
));if(this.AwA)this.S=this.S|0x60;else this.S=this.S|0x20;this.Bc(this.M);return this;
},SetRootFocus:function(AVp){if(AVp===this.AwA)return false;this.AwA=AVp;if(!AVp
){if(!!this.Jb)this.Jb.C7.CS(0x0,0x40);else this.CS(0x0,0x40);}else if(!!this.Jb
)this.Jb.C7.CS(0x40,0x0);else this.CS(0x40,0x0);return true;},SetUserInputTimestamp:
function(Pi){this.HI=Pi;},DriveKeyboardHitting:function(JX,AvE,RW){var B;var AX6=
!!this.Qz;if(!!this.Qz&&((!RW||(this.AwL!==JX))||(this.AqU!==AvE))){var KX=null;
var X=(C.B5.isPrototypeOf(B=this.Qz)?B:null);var DI=(C.B1.isPrototypeOf(B=this.Qz
)?B:null);if(!!this.AwL)KX=A._NewObject(C.KeyEvent,0).Initialize(this.AwL,false);
if(this.AqU!==0x00)KX=A._NewObject(C.KeyEvent,0).Initialize2(this.AqU,false);if(
!!DI)DI.Gl(KX);else if(!!X)X.Gl(KX);this.AwL=0;this.AqU=0x00;this.Qz=null;}if(!!
this.Qz){var KX=null;var X=(C.B5.isPrototypeOf(B=this.Qz)?B:null);var DI=(C.B1.isPrototypeOf(
B=this.Qz)?B:null);if(!!JX)KX=A._NewObject(C.KeyEvent,0).Initialize(JX,true);if(
this.AqU!==0x00)KX=A._NewObject(C.KeyEvent,0).Initialize2(AvE,true);if(!!DI)DI.Gl(
KX);else if(!!X)X.Gl(KX);}if(!this.Qz&&RW){if(!!JX)this.Qz=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(JX,true));if(AvE!==0x00)this.Qz=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(AvE,true));if(!(C.B1.isPrototypeOf(B=this.
Qz)?B:null)&&!(C.B5.isPrototypeOf(B=this.Qz)?B:null))this.Qz=null;this.AwL=JX;this.
AqU=AvE;AX6=AX6||!!this.Qz;}this.HI=0;return AX6;},DriveCursorMovement:function(
E6){return this.DriveMultiTouchMovement(this.Eo,E6);},DriveMultiTouchMovement:function(
Bz,E6){if((Bz<0)||(Bz>9)){this.HI=0;return false;}var EX=A.aaj(E6,this.Qs.Get(Bz
));this.Qs.Set(Bz,E6);if(!this.EW.Get(Bz)||A.z8(EX,B4)){this.HI=0;return false;}
var pos=E6;var B0=this.EW.Get(Bz).Aa;while(!!B0&&(B0!==this)){pos=A.aaj(pos,B0.M.
slice(0,2));B0=B0.Aa;}if(!B0&&(this.EW.Get(Bz)!==this)){var tmp=this.EW.Get(Bz);
this.Eo=Bz;this.EW.Set(Bz,null);tmp.Gl(this.Amx().InitializeUp(Bz,this.Agh.Get(Bz
),this.Ad5.Get(Bz),this.VL.Get(Bz),this.Lq.Get(Bz)+1,this.VK.Get(Bz),false,this.
Qs.Get(Bz),this.Aa9.Get(Bz)));this.BroadcastEvent(this.AqE().InitializeUp(Bz,this.
Lq.Get(Bz)+1,false,tmp,E6),0x18);}else{this.Agh.Set(Bz,pos);this.Eo=Bz;this.EW.Get(
Bz).Gl(this.Bru().Initialize(Bz,pos,this.Ad5.Get(Bz),EX,this.VL.Get(Bz),this.Lq.
Get(Bz)+1,this.VK.Get(Bz),E6,this.Aa9.Get(Bz)));}this.HI=0;return true;},DriveCursorHitting:
function(RW,Bz,E6){return this.DriveMultiTouchHitting(RW,Bz,E6);},DriveMultiTouchHitting:
function(RW,Bz,E6){if((Bz<0)||(Bz>9)){this.HI=0;return false;}var ticksCount=this.
HI;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var Bug=this.HI;this.
DriveMultiTouchMovement(Bz,E6);E6=this.Qs.Get(Bz);this.HI=Bug;if(RW)this.Aa9.Set(
Bz,E6);if(RW&&!this.EW.Get(Bz)){var Ja;var pos=E6;if(A.vt(this.AFT.Get(Bz),E6)&&((
ticksCount-this.AqF.Get(Bz))<=250))this.Lq.Set(Bz,this.Lq.Get(Bz)+1);else this.Lq.
Set(Bz,0);this.AFT.Set(Bz,A.aam(ME,E6));this.AqF.Set(Bz,ticksCount);if(!!this.Jb
)Ja=this.Wy(A.aam(ME,E6),Bz,this.Lq.Get(Bz)+1,this.Jb.C7,null,0x0);else Ja=this.
Wy(A.aam(ME,E6),Bz,this.Lq.Get(Bz)+1,null,null,0x0);if(!!Ja){this.BroadcastEvent(
this.AqE().InitializeDown(Bz,this.Lq.Get(Bz)+1,false,Ja.B5,E6),0x18);this.EW.Set(
Bz,Ja.B5);this.VK.Set(Bz,Ja.Dp);}else{this.EW.Set(Bz,null);this.VK.Set(Bz,B4);this.
HI=0;return false;}var B0=Ja.B5.Aa;while(!!B0&&(B0!==this)){pos=A.aaj(pos,B0.M.slice(
0,2));B0=B0.Aa;}this.Ad5.Set(Bz,pos);this.Agh.Set(Bz,pos);this.VL.Set(Bz,0);this.
Agi.An(true);this.Eo=Bz;this.EW.Get(Bz).Gl(this.Amx().InitializeDown(Bz,pos,this.
Lq.Get(Bz)+1,this.VK.Get(Bz),false,E6));this.HI=0;return true;}if(!RW&&!!this.EW.
Get(Bz)){var pos=E6;var B0=this.EW.Get(Bz).Aa;while(!!B0&&(B0!==this)){pos=A.aaj(
pos,B0.M.slice(0,2));B0=B0.Aa;}if(!B0)pos=this.Agh.Get(Bz);this.Eo=Bz;var tmp=this.
EW.Get(Bz);this.EW.Set(Bz,null);tmp.Gl(this.Amx().InitializeUp(Bz,pos,this.Ad5.Get(
Bz),this.VL.Get(Bz),this.Lq.Get(Bz)+1,this.VK.Get(Bz),false,E6,this.Aa9.Get(Bz))
);this.BroadcastEvent(this.AqE().InitializeUp(Bz,this.Lq.Get(Bz)+1,false,tmp,E6)
,0x18);this.HI=0;return true;}this.HI=0;return false;},APx:function(Yr,A7l,Aa0,AaZ
){if(Yr===this)Yr=null;if(!!!Yr&&!!this.Jb)Yr=this.Jb.C7;if(!this.EW.Get(this.Eo
))return;var Ja;Ja=this.Wy(A.aam(ME,this.Qs.Get(this.Eo)),this.Eo,1,Yr,Aa0,AaZ);
if(!!Ja&&(this.EW.Get(this.Eo)!==Ja.B5))this.AJv(Ja.B5,Ja.Dp);if(!Ja&&(this.EW.Get(
this.Eo)!==A7l))this.AJv(A7l,B4);},AJv:function(Yr,Vz){if(!this.EW.Get(this.Eo)||(
this.EW.Get(this.Eo)===Yr))return;var tmp=this.EW.Get(this.Eo);this.EW.Set(this.
Eo,null);tmp.Gl(this.Amx().InitializeUp(this.Eo,this.Agh.Get(this.Eo),this.Ad5.Get(
this.Eo),this.VL.Get(this.Eo),this.Lq.Get(this.Eo)+1,this.VK.Get(this.Eo),true,this.
Qs.Get(this.Eo),this.Aa9.Get(this.Eo)));this.BroadcastEvent(this.AqE().InitializeUp(
this.Eo,this.Lq.Get(this.Eo)+1,true,tmp,this.Qs.Get(this.Eo)),0x18);var pos=this.
Qs.Get(this.Eo);var B0=null;if(!!Yr)B0=Yr.Aa;while(!!B0&&(B0!==this)){pos=A.aaj(
pos,B0.M.slice(0,2));B0=B0.Aa;}if(!B0&&(Yr!==this)){this.EW.Set(this.Eo,null);return;
}this.BroadcastEvent(this.AqE().InitializeDown(this.Eo,this.Lq.Get(this.Eo)+1,true
,Yr,this.Qs.Get(this.Eo)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.EW.Set(this.Eo,Yr);this.VK.Set(this.Eo,Vz);this.Ad5.Set(this.Eo,pos
);this.Agh.Set(this.Eo,pos);this.Lq.Set(this.Eo,0);this.VL.Set(this.Eo,0);this.AqF.
Set(this.Eo,ticksCount);this.Aa9.Set(this.Eo,this.Qs.Get(this.Eo));this.EW.Get(this.
Eo).Gl(this.Amx().InitializeDown(this.Eo,pos,this.Lq.Get(this.Eo)+1,this.VK.Get(
this.Eo),true,this.Aa9.Get(this.Eo)));},Bb7:function(){if(!!this.Jb)return this.
Jb.C7;return null;},Ay7:function(JY){var B;if(!JY)throw new Error(Pd);if(!((JY.S&
0x80)===0x80))throw new Error(RO);if(this.Jb.C7===JY)this.Jb=this.Jb.Af;else{var
Awz=this.Jb;while(Awz.Af.C7!==JY)Awz=Awz.Af;Awz.Af=Awz.Af.Af;}JY.CS(0x0,0xC0);if(
this.AwA){if(!!this.Jb)this.Jb.C7.CS(0x40,0x0);else this.CS(0x40,0x0);}},AIH:function(
JY){var B;var Ar=A._NewObject(C.A1R,0);if(!JY)throw new Error(Tn);if(JY===null)throw new
Error(Vi);if(((JY.S&0x80)===0x80))throw new Error(Vj);if(!!this.Jb)this.Jb.C7.CS(
0x0,0x40);else this.CS(0x0,0x40);Ar.Af=this.Jb;Ar.C7=JY;this.Jb=Ar;if(this.AwA)JY.
CS(0xC0,0x0);else JY.CS(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Agi={I:this},0);(this.EW=[]).__proto__=C.Root.EW;(this.
Lq=[]).__proto__=C.Root.Lq;(this.AFT=[]).__proto__=C.Root.AFT;(this.VL=[]).__proto__=
C.Root.VL;(this.Ad5=[]).__proto__=C.Root.Ad5;(this.AqF=[]).__proto__=C.Root.AqF;(
this.Agh=[]).__proto__=C.Root.Agh;(this.VK=[]).__proto__=C.Root.VK;(this.Qs=[]).
__proto__=C.Root.Qs;(this.Aa9=[]).__proto__=C.Root.Aa9;(this.NN=[]).__proto__=C.
Root.NN;(this.JG=[]).__proto__=C.Root.JG;this.__proto__=C.Root;this.S=0x7F;this.
Agi.P4(10);this.Agi.Mz=[this,this.Brx];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Agi._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Agi._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Qz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jb)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.EW,D);if((B=this.AqA)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Agi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bp:0,AsS:false,Init:function(aArg){this.Bp=this.Asn();},Asn:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CO:0,D8:0,Down:false,Initialize2:function(JX,RW){this.CO=0;this.D8=
JX;this.Down=RW;if((JX>=0x30)&&(JX<=0x39))this.CO=(10+JX)-48;if((JX>=0x41)&&(JX<=
0x5A))this.CO=(105+JX)-65;if((JX>=0x61)&&(JX<=0x7A))this.CO=(105+JX)-97;if(JX===
0x20)this.CO=131;if(!this.CO)switch(JX){case 0x2B:this.CO=132;break;case 0x2D:this.
CO=133;break;case 0x2A:this.CO=134;break;case 0x2F:this.CO=135;break;case 0x3D:this.
CO=136;break;case 0x2E:this.CO=137;break;case 0x2C:this.CO=138;break;case 0x3A:this.
CO=139;break;case 0x3B:this.CO=140;break;default:;}return this;},Initialize:function(
JX,RW){this.CO=JX;this.Down=RW;this.D8=0x00;var AV6=JX-10;var Aqz=JX-105;if((AV6>=
0)&&(AV6<=9))this.D8=(48+AV6)&0xFFFF;if((Aqz>=0)&&(Aqz<=25))this.D8=(65+Aqz)&0xFFFF;
if(JX===131)this.D8=0x20;if(this.D8===0x00)switch(JX){case 132:this.D8=0x2B;break;
case 133:this.D8=0x2D;break;case 134:this.D8=0x2A;break;case 135:this.D8=0x2F;break;
case 136:this.D8=0x3D;break;case 137:this.D8=0x2E;break;case 138:this.D8=0x2C;break;
case 139:this.D8=0x3A;break;case 140:this.D8=0x3B;break;default:;}return this;},
BcA:function(A7b){switch(A7b){case 141:return((this.D8>=0x41)&&(this.D8<=0x5A))||((
this.D8>=0x61)&&(this.D8<=0x7A));case 142:return(((this.D8>=0x41)&&(this.D8<=0x5A
))||((this.D8>=0x61)&&(this.D8<=0x7A)))||((this.D8>=0x30)&&(this.D8<=0x39));case
143:return(this.D8>=0x30)&&(this.D8<=0x39);case 144:return(((this.D8>=0x41)&&(this.
D8<=0x46))||((this.D8>=0x61)&&(this.D8<=0x66)))||((this.D8>=0x30)&&(this.D8<=0x39
));case 145:return this.D8!==0x00;case 146:return(this.D8===0x00)&&!!this.CO;case
147:return(((this.CO===6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:
return(this.D8!==0x00)||!!this.CO;default:;}return A7b===this.CO;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AM1={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AM1;
},_className:"Core::LanguageEvent"};C.ArU={Aut:null,K8:A.vw,Nj:0,Ie:0,Down:false
,MT:false,InitializeUp:function(Bz,Nw,Ame,AVF,Yq){this.Down=false;this.Ie=Bz;this.
Nj=Nw;this.K8=Yq;this.Aut=AVF;this.MT=Ame;return this;},InitializeDown:function(
Bz,Nw,Ame,AVF,Yq){this.Down=true;this.Ie=Bz;this.Nj=Nw;this.K8=Yq;this.Aut=AVF;this.
MT=Ame;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.ArU;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Aut)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Ab6={Ae2:A.vw,K8:
A.vw,Nj:0,IW:0,M3:A.vw,Hr:A.vw,Ie:0,Down:false,MT:false,InitializeHold:function(
Bz,Ai_,AvH,AvI,Nw,Vz,Yq,AvG){this.Down=true;this.Ie=Bz;this.Hr=A.aak(Ai_,Vz);this.
M3=A.aak(AvH,Vz);this.IW=AvI;this.Nj=Nw;this.K8=Yq;this.Ae2=AvG;return this;},InitializeUp:
function(Bz,Ai_,AvH,AvI,Nw,Vz,Ame,Yq,AvG){this.Down=false;this.Ie=Bz;this.Hr=A.aak(
Ai_,Vz);this.M3=A.aak(AvH,Vz);this.IW=AvI;this.Nj=Nw;this.MT=Ame;this.K8=Yq;this.
Ae2=AvG;return this;},InitializeDown:function(Bz,Ai_,Nw,Vz,Ame,Yq){this.Down=true;
this.Ie=Bz;this.Hr=A.aak(Ai_,Vz);this.M3=A.aak(Ai_,Vz);this.IW=0;this.Nj=Nw;this.
MT=Ame;this.K8=Yq;this.Ae2=Yq;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Ab6;},_className:"Core::CursorEvent"};C.An0={Ae2:A.vw
,K8:A.vw,Nj:0,IW:0,Dp:A.vw,M3:A.vw,Hr:A.vw,Ie:0,Initialize:function(Bz,Ai_,AvH,aOffset
,AvI,BqA,Vz,Yq,AvG){this.Ie=Bz;this.Hr=A.aak(Ai_,Vz);this.M3=A.aak(AvH,Vz);this.
Dp=aOffset;this.IW=AvI;this.Nj=BqA;this.K8=Yq;this.Ae2=AvG;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.An0;},_className:"Core::DragEvent"
};C.Ac={BO:null,MM:null,Eu:null,Br:A.vw,APX:0,Space:0,Ae0:0,JJ:function(CL,aClip
,aOffset,B6,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var AjP=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AGz=[E[2]-E[0],E[3]-E[1]];var Ano=!A.z8(AjP,AGz);var EX=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(EX,B4)&&!Ano){var X=this.Af;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){var tmp=((X.S&0x100)===0x100
);X.Ak9(EX,tmp);}X=X.Af;}A.ow(this.Eu,this);}if((Ano&&(AjP[0]>0))&&(AjP[1]>0)){var
Ba=A.aam(this.M,this.Br);var X=this.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((X.
S&0x400)===0x400)){if(!!X.Ec&&(X.Ec.MO!==this))X.Ec=null;if(!X.Ec&&((X.OY!==0x14
)||!!this.Ae0))X.AqR(Ba,this);}X=X.Af;}A.ow(this.Eu,this);}C.Em.G.call(this,E);if(
!!this.Aa&&Ano){this.S=this.S|0x1000;if(!((this.Aa.S&0x2000)===0x2000)){this.Aa.
S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);}}},Ana:function(H){var B;this.BO.
Q=null;this.BO.Pt=null;this.BO=null;(B=this.MM)?B[1].call(B[0],this):null;},Go:function(
E){var B;var EX=A.aaj(E,this.Br);if(A.z8(EX,B4))return;this.Br=E;var X=this.Af;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){var tmp=((X.S&0x100)===0x100
);X.Ak9(EX,tmp);}X=X.Af;}if(!!this.Aa)this.Aa.Bc(this.M);A.ow(this.Eu,this);},A4c:
function(E){var B;if(E<0)E=0;if(E===this.APX)return;this.APX=E;if(!!this.Aa&&!!this.
Ae0){this.S=this.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);
}},BgL:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Aa&&!!this.Ae0){this.S=this.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,
B.HN],this);}},Lf:function(E){var B;if(E===this.Ae0)return;this.Ae0=E;if(!!this.
Aa){this.S=this.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HN],this);
}},AbJ:function(AaT,EJ){var Aqz=this.Dh(0x1);var Qr=this.M;var TI=A.aaj(Aqz.slice(
0,2),Qr.slice(0,2));var Lt=A.aaj(Aqz.slice(2,4),Qr.slice(2,4));var Bj=B4;if((TI[
0]>0)&&(Lt[0]>TI[0]))Bj=[TI[0],Bj[1]];else if((TI[0]>0)&&(Lt[0]>0))Bj=[Lt[0],Bj[
1]];if((Lt[0]<0)&&(TI[0]<Lt[0]))Bj=[Lt[0],Bj[1]];else if((Lt[0]<0)&&(TI[0]<0))Bj=[
TI[0],Bj[1]];if((TI[1]>0)&&(Lt[1]>TI[1]))Bj=[Bj[0],TI[1]];else if((TI[1]>0)&&(Lt[
1]>0))Bj=[Bj[0],Lt[1]];if((Lt[1]<0)&&(TI[1]<Lt[1]))Bj=[Bj[0],Lt[1]];else if((Lt[
1]<0)&&(TI[1]<0))Bj=[Bj[0],TI[1]];if(A.z8(Bj,B4)){(EJ)?EJ[1].call(EJ[0],this):null;
return;}if(!!this.BO){this.BO.An(false);this.BO.Q=null;this.BO.Pt=null;this.MM=null;
}this.BO=AaT;if(!this.BO){this.Go(A.aaj(this.Br,Bj));(EJ)?EJ[1].call(EJ[0],this):
null;}else{this.BO.An(false);this.BO.IG(1);this.BO.Q=[this,this.Alf,this.Go];this.
BO.Ci=this.Br;this.BO.BX=A.aaj(this.Br,Bj);this.BO.Pt=[this,this.Ana];this.BO.Ac4(
false);this.BO.An(true);this.MM=EJ;}},IB:function(Ag,AaX,AaT,EJ){var B;if(!Ag)return;
if((Ag.Aa!==this.Aa)||!((Ag.S&0x400)===0x400))throw new Error(JV);this.A_P();var
AL=Ag.GetExtent();var Ba=this.M;var KZ=A.kz(AL,Ba);if((!AaX&&!((KZ[0]>=KZ[2])||(
KZ[1]>=KZ[3])))||(AaX&&A.z9(KZ,AL))){(EJ)?EJ[1].call(EJ[0],this):null;return;}var
Bj=B4;if(AL[2]>Ba[2])Bj=[AL[2]-Ba[2],Bj[1]];if(AL[3]>Ba[3])Bj=[Bj[0],AL[3]-Ba[3]
];if(Bj[0]>(AL[0]-Ba[0]))Bj=[AL[0]-Ba[0],Bj[1]];if(Bj[1]>(AL[1]-Ba[1]))Bj=[Bj[0]
,AL[1]-Ba[1]];if(!!this.BO){this.BO.An(false);this.BO.Q=null;this.BO.Pt=null;this.
MM=null;}this.BO=AaT;if(!this.BO){this.Go(A.aaj(this.Br,Bj));(EJ)?EJ[1].call(EJ[
0],this):null;}else{this.BO.An(false);this.BO.IG(1);this.BO.Q=[this,this.Alf,this.
Go];this.BO.Ci=this.Br;this.BO.BX=A.aaj(this.Br,Bj);this.BO.Pt=[this,this.Ana];this.
BO.Ac4(false);this.BO.An(true);this.MM=EJ;}},Bb2:function(Ag){var B;if(!!Ag&&((Ag.
Aa!==this.Aa)||!((Ag.S&0x400)===0x400)))return-1;var DZ=-1;while(!!Ag&&!((Ag.S&0x200
)===0x200)){if(((Ag.S&0x400)===0x400))DZ=DZ+1;Ag=Ag.AG;}return DZ;},Zw:function(
Ag,aFilter){var B;if(!!Ag&&((Ag.Aa!==this.Aa)||!((Ag.S&0x400)===0x400)))return null;
var X=this.Af;var Iu=0x10000;if(((aFilter&0x10000)===0x10000))Iu=0x0;if(!!Ag)X=Ag.
Af;aFilter=aFilter|0x400;while(!!X&&!((X.S&0x200)===0x200)){if(((B=aFilter)&&((X.
S&B)===B))&&(!Iu||!((B=Iu)&&((X.S&B)===B))))return X;X=X.Af;}return null;},Dh:function(
aFilter){var B;var X=this.Af;var Ay=BI;var Iu=0x10000;this.A_P();if(((aFilter&0x10000
)===0x10000))Iu=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.S&0x200)===0x200)){if(((
B=aFilter)&&((X.S&B)===B))&&(!Iu||!((B=Iu)&&((X.S&B)===B))))Ay=A.vS(Ay,X.GetExtent(
));X=X.Af;}return Ay;},A_P:function(){var B;if((!this.Ae0||!!!this.Aa)||!((this.
Aa.S&0x4000)===0x4000))return;var X=this.Af;var AWm=((this.S&0x1000)===0x1000);for(;
!!X&&!AWm;X=X.Af){if(((X.S&0x400)===0x400)&&((X.S&0x800)===0x800))AWm=true;if(((
X.S&0x200)===0x200))break;}if(AWm){this.S=this.S&~0x4000;this.Aa.A_0();}},Alf:function(
){return this.Br;},_Init:function(aArg){C.Em._Init.call(this,aArg);this.__proto__=
C.Ac;this.S=0x203;},_Mark:function(D){var B;C.Em._Mark.call(this,D);if((B=this.BO
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.Cv={G4:null,BO:null,B5:null,U1:null,MM:null,Eu:null,GH:null,R6:-
1,R5:0,IS:-1,GM:0,AgA:8,NG:0,S3:0,AaF:A.vw,IE:-1,Br:0,FM:-1,N8:0,Gn:24,AN:0,KD:null
,M0:false,AqV:false,AP4:function(HZ,Nv,Vy,RY,RZ,Af9,Oj,Qm,KS,KQ,KR){throw new Error(
RP);},AnY:function(HZ,Af9,Oj,Qm,KS,KQ,KR){throw new Error(Vk);},Aiy:function(HZ,
Nv,Vy,RY,RZ,Oj,Qm,KS,KQ,KR){throw new Error(Vl);},DispatchEvent:function(Cx){var
B;var result=null;if(((this.FM>=0)&&(this.FM<this.AN))&&!this.A6){this.IE=this.FM;
this.B5=(C.B5.isPrototypeOf(B=A._NewObject(this.KD,0))?B:null);if(!!this.BU)this.
BU.Af=this.B5;else this.BZ=this.B5;this.B5.AG=this.BU;this.BU=this.B5;this.B5.Aa=
this;this.AaF=[(B=this.M)[2]-B[0],this.Gn];(B=this.GH)?B[1].call(B[0],this):null;
var B0=(C.O.isPrototypeOf(B=this.B5)?B:null);if(!!B0)result=B0.DispatchEvent(Cx);
else result=this.B5.Gl(Cx);if(!!this.B5.AG)this.B5.AG.Af=null;else this.BZ=null;
this.BU=this.B5.AG;this.B5.AG=null;this.B5.Aa=null;this.B5=null;}if(!result)result=
C.O.DispatchEvent.call(this,Cx);return result;},Ah:function(Ae){var B;if(!this.KD
){A.ow(this.Eu,this);return;}this.AqV=true;var Axj=0;if(!this.M0)Axj=this.N8;var
Fj=this.Aj0(-Axj-this.Br,1);var Gg=this.Aj0(((((B=this.M)[3]-B[1])-Axj)-this.Br)-
1,2);var DZ=Gg-Fj;if(DZ<1)DZ=1;var Agd=(DZ/2)|0;var Age=(DZ/3)|0;if(!Agd)Agd=1;if(
!Age)Age=1;if(Fj<this.GM){Fj=Fj-Agd;Gg=Gg+Age;}else if(Gg>this.IS){Fj=Fj-Age;Gg=
Gg+Agd;}else{Fj=this.GM;Gg=this.IS;}if(!this.M0){if(Fj>=this.AN){Fj=0;Gg=-1;}else
if(Gg<0){Fj=0;Gg=-1;}if(Gg>=this.AN)Gg=this.AN-1;if(Fj<0)Fj=0;}else if(this.AN<=
0){Fj=0;Gg=-1;}var AgP=this.GM;var AgQ=this.IS;var Am0=0;var Am1=-1;if(Fj>AgP)AgP=
Fj;if(Gg<AgQ)AgQ=Gg;if(AgP<=AgQ){while((this.IS<Gg)&&(this.GM<AgP)){this.Abw();this.
Av6();}while((this.GM>Fj)&&(this.IS>AgQ)){this.Axv();this.Av5();}}else{this.IS=(
this.IS-this.GM)+Fj;this.GM=Fj;Am0=this.GM;Am1=this.IS;}while(this.GM<Fj)this.Abw(
);while(this.IS>Gg)this.Axv();while(this.GM>Fj)this.Av5();while(this.IS<Gg)this.
Av6();var Ab=this.BZ;var inx=this.GM;var pos=[0,(Axj+this.Br)+this.IQ(inx,0)];var
BG=(B=this.M)[3]-B[1];var Ajw=null;var A$I=(B=this.M)[2]-B[0];while(!!Ab){var H4=
inx;if(this.M0){if(H4<0)H4=this.AN-(-H4%this.AN);if(H4>0)H4=H4%this.AN;}var Abx=((
H4>=this.R5)&&(H4<=this.R6))||((inx>=Am0)&&(inx<=Am1));var AmJ=Ab.GetExtent();var
Bj=A.aaj(pos,AmJ.slice(0,2));if(Abx)this.S3=this.Gn;else this.S3=AmJ[3]-AmJ[1];var
AW2=pos[1];var AW3=pos[1]+this.S3;if(!A.z8(Bj,B4))Ab.Ak9(Bj,true);if((Abx&&(AW2<
BG))&&(AW3>0)){this.B5=Ab;this.IE=H4;this.AaF=[A$I,this.S3];(B=this.GH)?B[1].call(
B[0],this):null;}Ab=Ab.Af;inx+=1;pos=[pos[0],pos[1]+this.S3];}inx=this.GM;Ab=this.
BZ;pos=[0,(Axj+this.Br)+this.IQ(inx,0)];while(!!Ab){var H4=inx;if(this.M0){if(H4<
0)H4=this.AN-(-H4%this.AN);if(H4>0)H4=H4%this.AN;}var Abx=((H4>=this.R5)&&(H4<=this.
R6))||((inx>=Am0)&&(inx<=Am1));if(Abx)this.S3=this.Gn;else this.S3=(B=Ab.GetExtent(
))[3]-B[1];var AW2=pos[1];var AW3=pos[1]+this.S3;if(Abx&&!((AW2<BG)&&(AW3>0))){this.
B5=Ab;this.IE=H4;this.AaF=[A$I,this.S3];(B=this.GH)?B[1].call(B[0],this):null;}if(((
H4===this.FM)&&this.M0)&&!!Ajw){var Qr=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Ab.GetExtent(),Qr))>A.zS(A.kz(Ajw.GetExtent(),Qr)))Ajw=Ab;}else if(H4===this.
FM)Ajw=Ab;Ab=Ab.Af;inx+=1;pos=[pos[0],pos[1]+this.S3];}this.R5=0;this.R6=-1;this.
B5=null;this.IE=-1;this.A8(Ajw);this.AqV=false;A.ow(this.Eu,this);},Q8:function(
Ag,Ge,aFilter){return null;},An4:function(Ag,aFilter){return null;},Zw:function(
Ag,aFilter){return null;},Aze:function(Ag,aFilter){return null;},Dh:function(aFilter
){return BI;},M1:function(JY,Fh,KS,KQ,KR){throw new Error(Yb);},AlD:function(Ag,
Jv){throw new Error(RQ);},S4:function(Ag){throw new Error(Yc);},Lh:function(Ag,Ph
){throw new Error(Vm);},HA:function(Ag){throw new Error(To);},AHY:function(Ag,Jv
){throw new Error(Vn);},J:function(Ag,Ph){throw new Error(Qh);},IQ:function(HD,AVg
){return HD*this.Gn;},Aj0:function(E6,AVg){return(E6/this.Gn)|0;},Axv:function(){
var Ab=this.BU;if(!Ab)return null;if(Ab===this.A6)this.A8(null);this.IS=this.IS-
1;if(!!Ab.AG)Ab.AG.Af=null;else this.BZ=null;this.BU=Ab.AG;Ab.AG=null;Ab.Aa=null;
Ab.Ec=null;if(this.NG<this.AgA){if(!!this.G4)this.G4.AG=Ab;Ab.Af=this.G4;this.G4=
Ab;this.NG++;}return Ab;},Av6:function(){var B;var Ab=this.G4;var Abj=this.KD;var
AbB=++this.IS;if(this.M0){if(AbB<0)AbB=this.AN-(-AbB%this.AN);if(AbB>0)AbB=AbB%this.
AN;}while(!!Ab&&(((B=Ab)?B.__proto__:null)!==Abj))Ab=Ab.Af;if(!!Ab){if(!!Ab.Af)Ab.
Af.AG=Ab.AG;if(!!Ab.AG)Ab.AG.Af=Ab.Af;if(this.G4===Ab)this.G4=Ab.Af;Ab.Af=null;Ab.
AG=null;this.NG--;}else{Ab=(C.B5.isPrototypeOf(B=A._NewObject(Abj,0))?B:null);Ab.
AW(0x1D);if(!!this.NG)this.AgA++;}this.S3=this.Gn;this.IE=AbB;this.AaF=[(B=this.
M)[2]-B[0],this.S3];this.B5=Ab;(B=this.GH)?B[1].call(B[0],this):null;this.B5=null;
this.IE=-1;if(!!this.BU)this.BU.Af=Ab;Ab.Aa=this;Ab.AG=this.BU;this.BU=Ab;if(!this.
BZ)this.BZ=Ab;if(AbB===this.FM)this.A8(Ab);return Ab;},Abw:function(){var Ab=this.
BZ;if(!Ab)return null;if(Ab===this.A6)this.A8(null);this.GM=this.GM+1;if(!!Ab.Af
)Ab.Af.AG=null;else this.BU=null;this.BZ=Ab.Af;Ab.Af=null;Ab.Aa=null;Ab.Ec=null;
if(this.NG<this.AgA){if(!!this.G4)this.G4.AG=Ab;Ab.Af=this.G4;this.G4=Ab;this.NG++;
}return Ab;},Av5:function(){var B;var Ab=this.G4;var Abj=this.KD;var Mh=--this.GM;
if(this.M0){if(Mh<0)Mh=this.AN-(-Mh%this.AN);if(Mh>0)Mh=Mh%this.AN;}while(!!Ab&&(((
B=Ab)?B.__proto__:null)!==Abj))Ab=Ab.Af;if(!!Ab){if(!!Ab.Af)Ab.Af.AG=Ab.AG;if(!!
Ab.AG)Ab.AG.Af=Ab.Af;if(this.G4===Ab)this.G4=Ab.Af;Ab.Af=null;Ab.AG=null;this.NG--;
}else{Ab=(C.B5.isPrototypeOf(B=A._NewObject(Abj,0))?B:null);Ab.AW(0x1D);if(!!this.
NG)this.AgA++;}this.S3=this.Gn;this.IE=Mh;this.AaF=[(B=this.M)[2]-B[0],this.S3];
this.B5=Ab;(B=this.GH)?B[1].call(B[0],this):null;this.B5=null;this.IE=-1;if(!!this.
BZ)this.BZ.AG=Ab;Ab.Aa=this;Ab.Af=this.BZ;this.BZ=Ab;if(!this.BU)this.BU=Ab;if(Mh===
this.FM)this.A8(Ab);return Ab;},Ana:function(H){var B;this.BO.Q=null;this.BO.Pt=
null;this.BO=null;(B=this.MM)?B[1].call(B[0],this):null;},BtC:function(H){this.Go(
this.U1.Dp[1]);},BtD:function(H){var B;if(!!this.BO){this.BO.An(false);this.BO.Q=
null;this.BO.Pt=null;this.BO=null;}if(!this.M0){var Ay=this.An9(0,this.AN-1);var
Aeh=this.M.slice(0,2);Ay=A.aaS(Ay,Ay[1]-this.N8);if(Ay[0]>Aeh[0])Ay=[].concat(Aeh[
0],Ay.slice(1,4));if(Ay[1]>Aeh[1])Ay=A.aaS(Ay,Aeh[1]);var EX=Ay[1]-this.M[1];var
AXc=((B=this.M)[3]-B[1])-(Ay[3]-Ay[1]);if(AXc>0)AXc=0;this.U1.Dp=[0,this.Br];this.
U1.FH=[0,(this.Br+AXc)-EX];this.U1.Fr=[0,this.Br-EX];}else{var EX=32000-(32000%this.
Gn);this.U1.Dp=[0,this.Br];this.U1.FH=[0,this.Br-EX];this.U1.Fr=[0,this.Br+EX];}
},AOo:function(E){var B;if(this.M0===E)return;this.M0=E;while(!!this.Abw());this.
Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AtQ:function(E){if(E===this.U1
)return;if(!!E&&!!E.Aq_){A.aa8("%s%*%s",Vo,E,Ns);throw new Error(Pe);}if(!!this.
U1){this.U1.AGL=null;this.U1.Aq_=null;}this.U1=E;if(!!E){E.AGL=[this,this.BtD];E.
Aq_=[this,this.BtC];}},Go:function(E){var B;if(this.M0&&(this.AN>0)){var G6=this.
IQ(this.AN,3);if(E<0)E=G6-(-E%G6);if(E>0)E=E%G6;if(E>0)E=E-G6;}if(E===this.Br)return;
this.Br=E;this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Gp:function(E){
if(E<0)E=-1;if(E===this.FM)return;this.FM=E;this.Al();},A32:function(E){var B;if(
E<0)E=0;if(E===this.N8)return;this.N8=E;if(!this.M0){this.Al();this.Bc([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);}},Ac0:function(E){var B;if(E<1)E=1;if(E===this.Gn)return;
this.Gn=E;while(!!this.Abw());this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);},I1:function(E){var B;if(E<0)E=0;if(E===this.AN)return;var Ay=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(!this.M0){if(E>this.AN){Ay=[].concat(Ay.slice(0,3),(this.
N8+this.Br)+this.IQ(E,3));Ay=A.aaS(Ay,(this.N8+this.Br)+this.IQ(this.AN,3));}else{
Ay=A.aaS(Ay,(this.N8+this.Br)+this.IQ(E,3));Ay=[].concat(Ay.slice(0,3),(this.N8+
this.Br)+this.IQ(this.AN,3));}}else while(!!this.Abw());this.AN=E;this.Al();this.
Bc(Ay);},Ne:function(E){var B;if(E===this.KD)return;this.KD=E;while(!!this.Abw()
);this.G4=null;this.NG=0;this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}
,Bce:function(HD){if(this.AqV)return null;if((HD<0)||(HD>=this.AN))return null;if(
!this.M0){if((HD<this.GM)||(HD>this.IS))return null;var X=this.BZ;while(HD>this.
GM){X=X.Af;HD=HD-1;}return X;}else{var Mh=this.GM;if(Mh<0)Mh=this.AN-(-Mh%this.AN
);if(Mh>0)Mh=Mh%this.AN;var X=this.BZ;while(!!X){if((Mh%this.AN)===HD)return X;X=
X.Af;Mh=Mh+1;}return null;}},Aya:function(AaT,EJ){var B;if(this.M0){(EJ)?EJ[1].call(
EJ[0],this):null;return;}var AGe=this.Br;var A8z=((((B=this.M)[3]-B[1])-this.Br)-
this.N8)-this.IQ(this.AN,3);var Bj=0;if(AGe>0)Bj=-AGe;else if(A8z>0)Bj=A8z;if((Bj>
0)&&(Bj>-AGe))Bj=-AGe;if(!Bj){(EJ)?EJ[1].call(EJ[0],this):null;return;}if(!!this.
BO){this.BO.An(false);this.BO.Q=null;this.BO.Pt=null;this.MM=null;}this.BO=AaT;if(
!this.BO){this.Go(this.Br+Bj);(EJ)?EJ[1].call(EJ[0],this):null;}else{this.BO.An(
false);this.BO.IG(1);this.BO.Q=[this,this.Alf,this.Go];this.BO.Ci=this.Br;this.BO.
BX=this.Br+Bj;this.BO.Pt=[this,this.Ana];this.BO.Ac4(false);this.BO.An(true);this.
MM=EJ;}},IB:function(HD,AaX,AaT,EJ){var B;if((HD<0)||(HD>=this.AN))return;var AL=
this.An9(HD,HD);var Ba=this.M;var KZ=A.kz(AL,Ba);if((!AaX&&!((KZ[0]>=KZ[2])||(KZ[
1]>=KZ[3])))||(AaX&&A.z9(KZ,AL))){(EJ)?EJ[1].call(EJ[0],this):null;return;}var Bj=
0;if(AL[3]>Ba[3])Bj=AL[3]-Ba[3];if(Bj>(AL[1]-Ba[1]))Bj=AL[1]-Ba[1];if(!!this.BO){
this.BO.An(false);this.BO.Q=null;this.BO.Pt=null;this.MM=null;}this.BO=AaT;if(!this.
BO){this.Go(this.Br-Bj);(EJ)?EJ[1].call(EJ[0],this):null;}else{this.BO.An(false);
this.BO.IG(1);this.BO.Q=[this,this.Alf,this.Go];this.BO.Ci=this.Br;this.BO.BX=this.
Br-Bj;this.BO.Pt=[this,this.Ana];this.BO.Ac4(false);this.BO.An(true);this.MM=EJ;
}},Bb8:function(){return BI;},AKA:function(){if((this.N8<=0)||this.M0)return BI;
var Ay=this.M;Ay=A.aaS(Ay,Ay[1]+this.Br);Ay=[].concat(Ay.slice(0,3),Ay[1]+this.N8
);return Ay;},A0Z:function(E6){if(((this.AN<=0)||(E6[0]<this.M[0]))||(E6[0]>=this.
M[2]))return-1;E6=A.aaj(E6,this.M.slice(0,2));if(!this.M0){var Ab=(E6[1]-this.Br
)-this.N8;if(Ab>0)Ab=this.Aj0(Ab,0);if((Ab<0)||(Ab>=this.AN))return-1;return Ab;
}var Ab=E6[1]-this.Br;if(Ab>0)Ab=this.Aj0(Ab,0);if(Ab<0)Ab=this.Aj0(Ab,0)-1;if(Ab<
0)Ab=this.AN-(-Ab%this.AN);if(Ab>0)Ab=Ab%this.AN;return Ab;},An9:function(Ju,Lo){
if(Ju<0)Ju=0;if(Lo>=this.AN)Lo=this.AN-1;if(Ju>Lo)return BI;var Ay=this.M;var Bj=
this.Br;if(this.M0){var G6=this.IQ(this.AN,3);if(Bj<0)Bj=G6-(-Bj%G6);if(Bj>0)Bj=
Bj%G6;if(Bj>0)Bj=Bj-G6;}else Bj=Bj+this.N8;Ay=[].concat(Ay.slice(0,3),(Ay[1]+Bj)+
this.IQ(Lo+1,0));Ay=A.aaS(Ay,(Ay[1]+Bj)+this.IQ(Ju,0));return Ay;},ZL:function(Ju
,Lo){var B;if(Ju<0)Ju=0;if(Ju>Lo)return;if(this.R5>this.R6){this.R5=Ju;this.R6=Lo;
}else{if(Ju<this.R5)this.R5=Ju;if(Lo>this.R6)this.R6=Lo;}var Ay=[0,0,(B=this.M)[
2]-B[0],B[3]-B[1]];if(!this.M0){Ay=A.aaS(Ay,(this.N8+this.Br)+this.IQ(Ju,0));Ay=[
].concat(Ay.slice(0,3),(this.N8+this.Br)+this.IQ(Lo+1,0));}else if((this.IQ(this.
AN-1,3)>=(Ay[3]-Ay[1]))&&((Ay[3]-Ay[1])>0)){var Bj=this.Br;var G6=this.IQ(this.AN
,3);if(Bj<0)Bj=G6-(-Bj%G6);if(Bj>0)Bj=Bj%G6;if(Bj>0)Bj=Bj-G6;Ay=A.aaS(Ay,Bj+this.
IQ(Ju,0));Ay=[].concat(Ay.slice(0,3),Bj+this.IQ(Lo+1,0));}this.Al();this.Bc(Ay);
},Alf:function(){return this.Br;},_Init:function(aArg){C.O._Init.call(this,aArg);
this.__proto__=C.Cv;this.G(Tp);this.KD=A.abh.Text;},_Mark:function(D){var B;C.O.
_Mark.call(this,D);if((B=this.G4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.U1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MM)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.GH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"
};C.Di={G4:null,BO:null,B5:null,MM:null,GH:null,R6:-1,R5:0,IS:-1,GM:0,AgA:8,NG:0
,Ry:0,AaF:A.vw,IE:-1,Br:0,FM:-1,Ux:24,AN:0,KD:null,AqV:false,AP4:function(HZ,Nv,
Vy,RY,RZ,Af9,Oj,Qm,KS,KQ,KR){throw new Error(Yd);},AnY:function(HZ,Af9,Oj,Qm,KS,
KQ,KR){throw new Error(Vp);},Aiy:function(HZ,Nv,Vy,RY,RZ,Oj,Qm,KS,KQ,KR){throw new
Error(Ye);},DispatchEvent:function(Cx){var B;var result=null;if(((this.FM>=0)&&(
this.FM<this.AN))&&!this.A6){this.IE=this.FM;this.B5=(C.B5.isPrototypeOf(B=A._NewObject(
this.KD,0))?B:null);if(!!this.BU)this.BU.Af=this.B5;else this.BZ=this.B5;this.B5.
AG=this.BU;this.BU=this.B5;this.B5.Aa=this;this.AaF=[this.Ry,(B=this.M)[3]-B[1]];(
B=this.GH)?B[1].call(B[0],this):null;var B0=(C.O.isPrototypeOf(B=this.B5)?B:null
);if(!!B0)result=B0.DispatchEvent(Cx);else result=this.B5.Gl(Cx);if(!!this.B5.AG
)this.B5.AG.Af=null;else this.BZ=null;this.BU=this.B5.AG;this.B5.AG=null;this.B5.
Aa=null;this.B5=null;}if(!result)result=C.O.DispatchEvent.call(this,Cx);return result;
},Ah:function(Ae){var B;if(!this.KD)return;this.AqV=true;var Fj=this.Aj0(0-this.
Br,1);var Gg=this.Aj0((((B=this.M)[2]-B[0])-this.Br)-1,2);var DZ=Gg-Fj;if(DZ<1)DZ=
1;var Agd=(DZ/2)|0;var Age=(DZ/3)|0;if(!Agd)Agd=1;if(!Age)Age=1;if(Fj<this.GM){Fj=
Fj-Agd;Gg=Gg+Age;}else if(Gg>this.IS){Fj=Fj-Age;Gg=Gg+Agd;}else{Fj=this.GM;Gg=this.
IS;}if(Fj>=this.AN){Fj=0;Gg=-1;}else if(Gg<0){Fj=0;Gg=-1;}if(Gg>=this.AN)Gg=this.
AN-1;if(Fj<0)Fj=0;var AgP=this.GM;var AgQ=this.IS;var Am0=0;var Am1=-1;if(Fj>AgP
)AgP=Fj;if(Gg<AgQ)AgQ=Gg;if(AgP<=AgQ){while((this.IS<Gg)&&(this.GM<AgP)){this.Abw(
);this.Av6();}while((this.GM>Fj)&&(this.IS>AgQ)){this.Axv();this.Av5();}}else{this.
IS=(this.IS-this.GM)+Fj;this.GM=Fj;Am0=this.GM;Am1=this.IS;}while(this.GM<Fj)this.
Abw();while(this.IS>Gg)this.Axv();while(this.GM>Fj)this.Av5();while(this.IS<Gg)this.
Av6();var Ab=this.BZ;var inx=this.GM;var pos=[this.Br+this.IQ(inx,0),0];var BP=(
B=this.M)[2]-B[0];var Ajw=null;var A$A=(B=this.M)[3]-B[1];while(!!Ab){var H4=inx;
var Abx=((H4>=this.R5)&&(H4<=this.R6))||((inx>=Am0)&&(inx<=Am1));var AmJ=Ab.GetExtent(
);var Bj=A.aaj(pos,AmJ.slice(0,2));if(Abx)this.Ry=this.Ux;else this.Ry=AmJ[2]-AmJ[
0];var AW0=pos[0];var AW1=pos[0]+this.Ry;if(!A.z8(Bj,B4))Ab.Ak9(Bj,true);if((Abx&&(
AW0<BP))&&(AW1>0)){this.B5=Ab;this.IE=H4;this.AaF=[this.Ry,A$A];(B=this.GH)?B[1].
call(B[0],this):null;}Ab=Ab.Af;inx+=1;pos=[pos[0]+this.Ry,pos[1]];}inx=this.GM;Ab=
this.BZ;pos=[this.Br+this.IQ(inx,0),0];while(!!Ab){var H4=inx;var Abx=((H4>=this.
R5)&&(H4<=this.R6))||((inx>=Am0)&&(inx<=Am1));if(Abx)this.Ry=this.Ux;else this.Ry=(
B=Ab.GetExtent())[2]-B[0];var AW0=pos[0];var AW1=pos[0]+this.Ry;if(Abx&&!((AW0<BP
)&&(AW1>0))){this.B5=Ab;this.IE=H4;this.AaF=[this.Ry,A$A];(B=this.GH)?B[1].call(
B[0],this):null;}if(H4===this.FM)Ajw=Ab;Ab=Ab.Af;inx+=1;pos=[pos[0]+this.Ry,pos[
1]];}this.R5=0;this.R6=-1;this.B5=null;this.IE=-1;this.A8(Ajw);this.AqV=false;},
Q8:function(Ag,Ge,aFilter){return null;},An4:function(Ag,aFilter){return null;},
Zw:function(Ag,aFilter){return null;},Aze:function(Ag,aFilter){return null;},Dh:
function(aFilter){return BI;},M1:function(JY,Fh,KS,KQ,KR){throw new Error(Yf);},
AlD:function(Ag,Jv){throw new Error(Vq);},S4:function(Ag){throw new Error(Vr);},
Lh:function(Ag,Ph){throw new Error(RR);},HA:function(Ag){throw new Error(Yg);},AHY:
function(Ag,Jv){throw new Error(Yh);},J:function(Ag,Ph){throw new Error(AaK);},IQ:
function(HD,AVg){return HD*this.Ux;},Aj0:function(E6,AVg){return(E6/this.Ux)|0;}
,Axv:function(){var Ab=this.BU;if(!Ab)return null;if(Ab===this.A6)this.A8(null);
this.IS=this.IS-1;if(!!Ab.AG)Ab.AG.Af=null;else this.BZ=null;this.BU=Ab.AG;Ab.AG=
null;Ab.Aa=null;Ab.Ec=null;if(this.NG<this.AgA){if(!!this.G4)this.G4.AG=Ab;Ab.Af=
this.G4;this.G4=Ab;this.NG++;}return Ab;},Av6:function(){var B;var Ab=this.G4;var
Abj=this.KD;var AbB=++this.IS;while(!!Ab&&(((B=Ab)?B.__proto__:null)!==Abj))Ab=Ab.
Af;if(!!Ab){if(!!Ab.Af)Ab.Af.AG=Ab.AG;if(!!Ab.AG)Ab.AG.Af=Ab.Af;if(this.G4===Ab)
this.G4=Ab.Af;Ab.Af=null;Ab.AG=null;this.NG--;}else{Ab=(C.B5.isPrototypeOf(B=A._NewObject(
Abj,0))?B:null);Ab.AW(0x1D);if(!!this.NG)this.AgA++;}this.Ry=this.Ux;this.IE=AbB;
this.AaF=[this.Ry,(B=this.M)[3]-B[1]];this.B5=Ab;(B=this.GH)?B[1].call(B[0],this
):null;this.B5=null;this.IE=-1;if(!!this.BU)this.BU.Af=Ab;Ab.Aa=this;Ab.AG=this.
BU;this.BU=Ab;if(!this.BZ)this.BZ=Ab;if(AbB===this.FM)this.A8(Ab);return Ab;},Abw:
function(){var Ab=this.BZ;if(!Ab)return null;if(Ab===this.A6)this.A8(null);this.
GM=this.GM+1;if(!!Ab.Af)Ab.Af.AG=null;else this.BU=null;this.BZ=Ab.Af;Ab.Af=null;
Ab.Aa=null;Ab.Ec=null;if(this.NG<this.AgA){if(!!this.G4)this.G4.AG=Ab;Ab.Af=this.
G4;this.G4=Ab;this.NG++;}return Ab;},Av5:function(){var B;var Ab=this.G4;var Abj=
this.KD;var Mh=--this.GM;while(!!Ab&&(((B=Ab)?B.__proto__:null)!==Abj))Ab=Ab.Af;
if(!!Ab){if(!!Ab.Af)Ab.Af.AG=Ab.AG;if(!!Ab.AG)Ab.AG.Af=Ab.Af;if(this.G4===Ab)this.
G4=Ab.Af;Ab.Af=null;Ab.AG=null;this.NG--;}else{Ab=(C.B5.isPrototypeOf(B=A._NewObject(
Abj,0))?B:null);Ab.AW(0x1D);if(!!this.NG)this.AgA++;}this.Ry=this.Ux;this.IE=Mh;
this.AaF=[this.Ry,(B=this.M)[3]-B[1]];this.B5=Ab;(B=this.GH)?B[1].call(B[0],this
):null;this.B5=null;this.IE=-1;if(!!this.BZ)this.BZ.AG=Ab;Ab.Aa=this;Ab.Af=this.
BZ;this.BZ=Ab;if(!this.BU)this.BU=Ab;if(Mh===this.FM)this.A8(Ab);return Ab;},Ana:
function(H){var B;this.BO.Q=null;this.BO.Pt=null;this.BO=null;(B=this.MM)?B[1].call(
B[0],this):null;},Go:function(E){var B;if(E===this.Br)return;this.Br=E;this.Al();
this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Gp:function(E){if(E<0)E=-1;if(E===
this.FM)return;this.FM=E;this.Al();},ABt:function(E){var B;if(E<1)E=1;if(E===this.
Ux)return;this.Ux=E;while(!!this.Abw());this.Al();this.Bc([0,0,(B=this.M)[2]-B[0
],B[3]-B[1]]);},I1:function(E){var B;if(E<0)E=0;if(E===this.AN)return;var Ay=[0,
0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AN){Ay=[].concat(this.Br+this.IQ(this.
AN,3),Ay.slice(1,4));Ay=A.aaQ(Ay,this.Br+this.IQ(E,3));}else{Ay=A.aaQ(Ay,this.Br+
this.IQ(this.AN,3));Ay=[].concat(this.Br+this.IQ(E,3),Ay.slice(1,4));}this.AN=E;
this.Al();this.Bc(Ay);},Ne:function(E){var B;if(E===this.KD)return;this.KD=E;while(
!!this.Abw());this.G4=null;this.NG=0;this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[
3]-B[1]]);},Bih:function(BqB,BqC){if(!this.BO)return;if(BqB)this.Go(this.BO.BX);
var AYA=this.MM;this.BO.An(false);this.BO.Q=null;this.BO.Pt=null;this.MM=null;this.
BO=null;if(BqC)(AYA)?AYA[1].call(AYA[0],this):null;},BcE:function(){return!!this.
BO;},IB:function(HD,AaX,AaT,EJ){var B;if((HD<0)||(HD>=this.AN))return;var AL=this.
An9(HD,HD);var Ba=this.M;var KZ=A.kz(AL,Ba);if((!AaX&&!((KZ[0]>=KZ[2])||(KZ[1]>=
KZ[3])))||(AaX&&A.z9(KZ,AL))){(EJ)?EJ[1].call(EJ[0],this):null;return;}var Bj=0;
if(AL[2]>Ba[2])Bj=AL[2]-Ba[2];if(Bj>(AL[0]-Ba[0]))Bj=AL[0]-Ba[0];if(!!this.BO){this.
BO.An(false);this.BO.Q=null;this.BO.Pt=null;this.MM=null;}this.BO=AaT;if(!this.BO
){this.Go(this.Br-Bj);(EJ)?EJ[1].call(EJ[0],this):null;}else{this.BO.An(false);this.
BO.IG(1);this.BO.Q=[this,this.Alf,this.Go];this.BO.Ci=this.Br;this.BO.BX=this.Br-
Bj;this.BO.Pt=[this,this.Ana];this.BO.Ac4(false);this.BO.An(true);this.MM=EJ;}},
An9:function(Ju,Lo){if(Ju<0)Ju=0;if(Lo>=this.AN)Lo=this.AN-1;if(Ju>Lo)return BI;
var Ay=this.M;var Bj=this.Br;Ay=A.aaQ(Ay,(Ay[0]+Bj)+this.IQ(Lo+1,0));Ay=[].concat((
Ay[0]+Bj)+this.IQ(Ju,0),Ay.slice(1,4));return Ay;},ZL:function(Ju,Lo){var B;if(Ju<
0)Ju=0;if(Ju>Lo)return;if(this.R5>this.R6){this.R5=Ju;this.R6=Lo;}else{if(Ju<this.
R5)this.R5=Ju;if(Lo>this.R6)this.R6=Lo;}var Ay=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]
];Ay=[].concat(this.Br+this.IQ(Ju,0),Ay.slice(1,4));Ay=A.aaQ(Ay,this.Br+this.IQ(
Lo+1,0));this.Al();this.Bc(Ay);},Alf:function(){return this.Br;},_Init:function(
aArg){C.O._Init.call(this,aArg);this.__proto__=C.Di;this.G(Tp);this.KD=A.abh.Text;
},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.G4)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.BO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B5
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.GH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::HorizontalList"};C.Bd={ANK:null,AA0:null,As1:null,Ea:null,KF:null,B2:null
,AG5:0,Bl:0,Ie:0,Bp:0,Nj:0,IW:0,Dp:A.vw,M3:A.vw,Hr:A.vw,Aud:8,Adf:0,A1L:1,Down:false
,W0:false,MT:false,AWt:false,AwU:0,JJ:function(CL,aClip,aOffset,B6,aBlend){},Gl:
function(Cx){var B;var BK=(C.Ab6.isPrototypeOf(Cx)?Cx:null);var DH=(C.An0.isPrototypeOf(
Cx)?Cx:null);var AGo=this.W0;var YR;var TG;var AxP;var Mf;var Awn;if(!BK&&!DH)return null;
YR=(!!BK&&BK.Down)&&!BK.IW;TG=(!!BK&&BK.Down)&&(BK.IW>0);AxP=(!!BK&&BK.Down)&&(BK.
IW>this.AwU);Mf=!!BK&&!BK.Down;Awn=!!DH;if(YR)this.AwU=((B=(BK.MT?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if((((this.Adf&0x20)===0x20)&&(this.Bl>0))&&(this.Bl<33554432)
){var H3=(C.ArU.isPrototypeOf(Cx)?Cx:null);if(((!!H3&&H3.Down)&&(H3.Aut!==this))&&
A.vt(this.GetExtent(),this.Aa.A1I(H3.K8))){this.AG5=0x20;this.Bl=this.Bl|67108864;
return null;}}if(YR){var Am7=0;var Abd;this.Bl=this.Bl|(1<<BK.Ie);for(Abd=this.Bl&
4095;Abd>0;Abd=Abd>>1)if(!!(Abd&1))Am7=Am7+1;if(Am7===1)this.Bl=(this.Bl|16777216
)|(4096<<BK.Ie);}if(Mf&&(this.Bl<16777216)){var H7=this.HQ();var Ja=null;if(!!H7
){var AYs=(!!this.AG?this.AG:this.Aa);var AWh=(!!H7.Jb?H7.Jb.C7:null);Ja=H7.Wy(A.
aam(Qi,BK.K8),BK.Ie,BK.Nj,AWh,AYs,0x0);}if(!!Ja){var P;for(P=0;P<10;P++)if(!!(this.
Bl&(1<<P)))Ja.B5.Gl(A._NewObject(C.Ab6,0).InitializeDown(P,BK.Hr,BK.Nj,B4,true,BK.
K8));for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Ja.B5.Gl(A._NewObject(C.Ab6,0).InitializeUp(
P,BK.Hr,BK.Hr,0,BK.Nj,B4,false,BK.K8,BK.K8));}}if(Mf)this.Bl=(this.Bl&~(1<<BK.Ie
))|33554432;if(AxP&&(this.Bl<16777216))this.Bl=this.Bl|67108864;if(Mf&&BK.MT)this.
Bl=this.Bl|67108864;if(Mf&&!(this.Bl&4095))this.AG5=0x0;if(Mf&&!(this.Bl&16777215
))this.Bl=0;if(TG&&(this.Bl>=67108864)){var H7=this.HQ();if(!!H7)H7.APx(null,null
,this,this.AG5);}if((TG&&!!(this.Bl&16777216))&&!!(this.Bl&33554432)){TG=false;Mf=
true;}if(!!BK&&!(this.Bl&(4096<<BK.Ie)))return this;if(!!DH&&!(this.Bl&(4096<<DH.
Ie)))return this;if(Mf&&!(this.Bl&16777216))return this;if(((YR||Awn)||TG)&&((this.
Bl<16777216)||(this.Bl>=33554432)))return this;if(Mf)this.Bl=this.Bl&3758100479;
if(Mf&&!(this.Bl&16777215))this.Bl=0;if(!!BK){this.Down=YR||TG;this.W0=this.AMO(
BK.Hr);this.M3=BK.M3;this.Hr=BK.Hr;this.Dp=B4;this.IW=BK.IW;this.Nj=BK.Nj;this.MT=
BK.MT;this.Ie=BK.Ie;this.Bp=BK.Bp;if(BK.Down&&!BK.IW)AGo=false;}if(!!DH){this.Down=
true;this.W0=this.AMO(DH.Hr);this.M3=DH.M3;this.Hr=DH.Hr;this.Dp=DH.Dp;this.IW=DH.
IW;this.Nj=DH.Nj;this.Ie=DH.Ie;this.MT=false;this.Bp=DH.Bp;}var AWn=this.Down;if(
!!DH)(B=this.ANK)?B[1].call(B[0],this):null;if((!!BK&&this.Down)&&!this.IW)(B=this.
B2)?B[1].call(B[0],this):null;if((!!BK&&this.Down)&&(this.IW>0))(B=this.Ea)?B[1].
call(B[0],this):null;if((this.Down&&this.W0)&&!AGo){this.AWt=true;(B=this.As1)?B[
1].call(B[0],this):null;}if(this.AWt&&(((AWn&&!this.W0)&&AGo)||((!AWn&&this.W0)&&
AGo))){this.AWt=false;(B=this.AA0)?B[1].call(B[0],this):null;}if(!!BK&&!AWn)(B=this.
KF)?B[1].call(B[0],this):null;if(!!this.Adf){var Abv=0x0;if(((((this.Adf&0x10)===
0x10)&&!!BK)&&BK.Down)&&(BK.IW>=1000))Abv=0x10;if((((this.Adf&0x1)===0x1)&&!!DH)&&((
DH.K8[1]-DH.Ae2[1])<=-this.Aud))Abv=0x1;if((((this.Adf&0x2)===0x2)&&!!DH)&&((DH.
K8[1]-DH.Ae2[1])>=this.Aud))Abv=0x2;if((((this.Adf&0x4)===0x4)&&!!DH)&&((DH.K8[0
]-DH.Ae2[0])<=-this.Aud))Abv=0x4;if((((this.Adf&0x8)===0x8)&&!!DH)&&((DH.K8[0]-DH.
Ae2[0])>=this.Aud))Abv=0x8;if(!!Abv){var H7=this.HQ();if(!!H7){this.AG5=Abv;H7.APx(
null,this,this,Abv);}}}return this;},Wy:function(C0,Bz,Nw,AaV,Aa0,AaZ){var B;if(
!!AaV&&(AaV!==this))return null;if((Nw<1)||(Nw>this.A1L))return null;if(this.Bl>=
33554432)return null;if((this.Bl>=16777216)&&!(this.Bl&(4096<<Bz)))return null;if(
!!(AaZ&this.Adf))return null;if(this.Bcj()){var AL=A.kz(C0,this.GetExtent());if(
!((AL[0]>=AL[2])||(AL[1]>=AL[3]))){var Pk=A.zT(C0);var EX=B4;if(Pk[0]<AL[0])EX=[
AL[0]-Pk[0],EX[1]];if(Pk[0]>=AL[2])EX=[(AL[2]-Pk[0])-1,EX[1]];if(Pk[1]<AL[1])EX=[
EX[0],AL[1]-Pk[1]];if(Pk[1]>=AL[3])EX=[EX[0],(AL[3]-Pk[1])-1];return A._NewObject(
C.ArV,0).Initialize(this,EX);}}else{var G5=A.aan(9,A.vw,null);var P;G5.Set(0,A.zT(
C0));G5.Set(1,G5.Get(0));G5.Set(2,G5.Get(0));G5.Set(3,G5.Get(0));G5.Set(4,G5.Get(
0));G5.Set(1,[C0[0],G5.Get(1)[1]]);G5.Set(2,[G5.Get(2)[0],C0[1]]);G5.Set(3,[C0[2
],G5.Get(3)[1]]);G5.Set(4,[G5.Get(4)[0],C0[3]]);G5.Set(5,C0.slice(0,2));G5.Set(6
,[C0[2],C0[1]]);G5.Set(7,[C0[0],C0[3]]);G5.Set(8,C0.slice(2,4));for(P=0;P<9;P=P+
1)if(this.AMO(G5.Get(P)))return A._NewObject(C.ArV,0).Initialize(this,A.aaj(G5.Get(
P),G5.Get(0)));}return null;},BgE:function(E){if(E<1)E=1;this.Aud=E;},ABA:function(
E){if(E<1)E=1;this.A1L=E;},An:function(E){if(E)this.CS(0x10,0x0);else this.CS(0x0
,0x10);},_Init:function(aArg){C.XO._Init.call(this,aArg);this.__proto__=C.Bd;this.
S=0x11B;},_Mark:function(D){var B;C.XO._Mark.call(this,D);if((B=this.ANK)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AA0)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.As1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ea)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KF)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.B2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Core::SimpleTouchHandler"};C.HC={timer:null,AGL:null,Aq_:null,ACb:
null,Xz:null,Rv:null,Bl:0,AFr:0,Abg:5000,Ann:0,AGm:A.vw,AmG:0,AdX:0,Ez:0,Aka:0,Arm:
0,AmF:0,AdW:0,Ey:0,Aj$:0,Aj9:0,M3:A.vw,A0a:A.vw,Fr:A.vw,FH:A.vw,Dp:A.vw,U3:A.vw,
A0Q:0.5,A4N:true,ACR:true,XY:false,VY:false,VZ:false,Aqt:false,AwU:0,JJ:function(
CL,aClip,aOffset,B6,aBlend){},Gl:function(Cx){var B;var BK=(C.Ab6.isPrototypeOf(
Cx)?Cx:null);var DH=(C.An0.isPrototypeOf(Cx)?Cx:null);var H3=(C.ArU.isPrototypeOf(
Cx)?Cx:null);var YR;var TG;var AxP;var Mf;var Awn;YR=(!!BK&&BK.Down)&&!BK.IW;TG=(
!!BK&&BK.Down)&&(BK.IW>0);AxP=(!!BK&&BK.Down)&&(BK.IW>this.AwU);Mf=!!BK&&!BK.Down;
Awn=!!DH;if(YR)this.AwU=((B=(BK.MT?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if(YR){var Am7=
0;var Abd;this.Bl=this.Bl|(1<<BK.Ie);for(Abd=this.Bl&4095;Abd>0;Abd=Abd>>1)if(!!(
Abd&1))Am7=Am7+1;if(Am7===1)this.Bl=(this.Bl|16777216)|(4096<<BK.Ie);}if(Mf&&(this.
Bl<16777216)){var H7=this.HQ();var Ja=null;if(!!H7){var AYs=(!!this.AG?this.AG:this.
Aa);var AWh=(!!H7.Jb?H7.Jb.C7:null);Ja=H7.Wy(A.aam(Qi,BK.K8),BK.Ie,BK.Nj,AWh,AYs
,0x0);}if(!!Ja){var P;for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))Ja.B5.Gl(A._NewObject(
C.Ab6,0).InitializeDown(P,BK.Hr,BK.Nj,B4,true,BK.K8));for(P=0;P<10;P++)if(!!(this.
Bl&(1<<P)))Ja.B5.Gl(A._NewObject(C.Ab6,0).InitializeUp(P,BK.Hr,BK.Hr,0,BK.Nj,B4,
false,BK.K8,BK.K8));}}if(Mf)this.Bl=(this.Bl&~(1<<BK.Ie))|33554432;if(AxP&&(this.
Bl<16777216))this.Bl=this.Bl|67108864;if(Mf&&BK.MT)this.Bl=this.Bl|67108864;if(Mf&&
!(this.Bl&16777215))this.Bl=0;if(TG&&(this.Bl>=67108864)){var H7=this.HQ();if(!!
H7)H7.APx(null,null,this,0x0);}if((TG&&!!(this.Bl&16777216))&&!!(this.Bl&33554432
)){TG=false;Mf=true;}if(!!BK&&!(this.Bl&(4096<<BK.Ie)))return this;if(!!DH&&!(this.
Bl&(4096<<DH.Ie)))return this;if(Mf&&!(this.Bl&16777216))return this;if(((YR||Awn
)||TG)&&((this.Bl<16777216)||(this.Bl>=33554432)))return this;if(Mf)this.Bl=this.
Bl&3758100479;if(Mf&&!(this.Bl&16777215))this.Bl=0;if(!!H3&&(H3.Aut===this))return null;
if((!!H3&&H3.Down)&&(this.Aqt||!this.XY))return null;if((!!H3&&H3.Down)&&!A.vt(this.
M,this.Aa.A1I(H3.K8)))return null;if((!!H3&&!H3.Down)&&(!this.Aqt||(this.AFr!==H3.
Ie)))return null;if((!BK&&!DH)&&!H3)return null;if(!!BK){this.Aqt=YR||TG;this.AFr=
BK.Ie;this.M3=BK.M3;}if(!!DH)this.AFr=DH.Ie;if(!!H3){this.Aqt=H3.Down;this.AFr=H3.
Ie;}if(!!H3&&H3.Down){this.AYt();this.Ey=(((H3.Bp-this.Aj9)*0.001)*this.AdW)+this.
Ey;this.Ez=(((H3.Bp-this.Arm)*0.001)*this.AdX)+this.Ez;if(this.VY)this.Ey=0;if(this.
VZ)this.Ez=0;this.AdW=0;this.AdX=0;this.VY=false;this.VZ=false;this.AGm=this.Dp;
this.Ann=H3.Bp;return this;}if(YR){this.AYt();this.Ey=(((BK.Bp-this.Aj9)*0.001)*
this.AdW)+this.Ey;this.Ez=(((BK.Bp-this.Arm)*0.001)*this.AdX)+this.Ez;if(this.VY||
!this.XY)this.Ey=0;if(this.VZ||!this.XY)this.Ez=0;this.AdW=0;this.AdX=0;this.VY=
false;this.VZ=false;if(!this.XY){this.XY=true;(B=this.Rv)?B[1].call(B[0],this):null;(
B=this.AGL)?B[1].call(B[0],this):null;}this.AGm=this.Dp;this.Ann=BK.Bp;}if(!!DH){
var Gx=A.aaj(DH.Hr,DH.M3);var Cl=this.Dp;if(this.ACR)Cl=[this.AGm[0]+Gx[0],Cl[1]
];Cl=[Cl[0],this.AGm[1]+Gx[1]];if(this.A4N){if(Cl[0]<this.FH[0])Cl=[this.FH[0]+(((
Cl[0]-this.FH[0])/2)|0),Cl[1]];else if(Cl[0]>this.Fr[0])Cl=[this.Fr[0]+(((Cl[0]-
this.Fr[0])/2)|0),Cl[1]];if(Cl[1]<this.FH[1])Cl=[Cl[0],this.FH[1]+(((Cl[1]-this.
FH[1])/2)|0)];else if(Cl[1]>this.Fr[1])Cl=[Cl[0],this.Fr[1]+(((Cl[1]-this.Fr[1])
/2)|0)];}else{if(Cl[0]<this.FH[0])Cl=[this.FH[0],Cl[1]];else if(Cl[0]>this.Fr[0]
)Cl=[this.Fr[0],Cl[1]];if(Cl[1]<this.FH[1])Cl=[Cl[0],this.FH[1]];else if(Cl[1]>this.
Fr[1])Cl=[Cl[0],this.Fr[1]];}if(!A.z8(Cl,this.Dp)){this.A0a=A.aaj(Cl,this.Dp);this.
Dp=Cl;(B=this.Aq_)?B[1].call(B[0],this):null;(B=this.ACb)?B[1].call(B[0],this):null;
}}if((!!H3&&!H3.Down)&&((H3.Bp-this.Ann)>=200)){this.Ey=0;this.Ez=0;}if(TG&&((BK.
Bp-this.Ann)>=200)){this.Ey=0;this.Ez=0;}if(!!DH&&(DH.Bp>this.Ann)){var Gx=DH.Dp;
var A83=1000/(DH.Bp-this.Ann);var AgC=0;var AgD;if(this.ACR)AgC=Gx[0]*A83;AgD=Gx[
1]*A83;if((AgC*this.Ey)<0)this.Ey=0;if((AgD*this.Ez)<0)this.Ez=0;this.Ey=(this.Ey+
AgC)*0.5;this.Ez=(this.Ez+AgD)*0.5;this.Ann=DH.Bp;}if(!Mf&&!H3)return this;if(!!
BK&&BK.MT){this.Ey=0;this.Ez=0;}if((this.Dp[0]<=this.FH[0])||(this.Dp[0]>=this.Fr[
0]))this.Ey=0;else if(!this.Ey){var Eq=this.Dp[0];var ER=this.FH[0];var Ej=this.
Fr[0];if(Eq<ER)Ej=this.FH[0];else if(Eq>Ej)ER=this.Fr[0];else if(this.U3[0]<=1){
ER=Eq;Ej=Eq;}else{var Abl=(Ej-Eq)%this.U3[0];Ej=(Eq-this.U3[0])+Abl;ER=Eq+Abl;if(
Ej<this.FH[0])Ej=this.FH[0];if(ER>this.Fr[0])ER=this.Fr[0];}if((ER-Eq)<=(Eq-Ej))
Eq=ER;else Eq=Ej;if(Eq!==this.Dp[0]){var IP=Eq-this.Dp[0];if(IP>0)this.Ey=Math.sqrt((
IP*2)*this.Abg)+20;if(IP<0)this.Ey=-Math.sqrt((-IP*2)*this.Abg)-20;this.AdW=(400-(
this.Ey*this.Ey))/(2*IP);this.AmF=Eq;}}else{var Buw=this.Ey*this.Ey;var IP=Buw/(
2*this.Abg);var Eq=this.Dp[0];if(this.Ey>0)Eq=Eq+(IP|0);if(this.Ey<0)Eq=Eq-(IP|0
);if(Eq>this.Fr[0])Eq=this.Fr[0];else if(Eq<this.FH[0])Eq=this.FH[0];var A$v=Eq;
var ER=this.FH[0];var Ej=this.Fr[0];if(Eq<ER)Ej=this.FH[0];else if(Eq>Ej)ER=this.
Fr[0];else if(this.U3[0]<=1){ER=Eq;Ej=Eq;}else{var Abl=(Ej-Eq)%this.U3[0];Ej=(Eq-
this.U3[0])+Abl;ER=Eq+Abl;if(Ej<this.FH[0])Ej=this.FH[0];if(ER>this.Fr[0])ER=this.
Fr[0];}if(this.Ey>0){if(Ej<=this.Dp[0])Eq=ER;else if((Eq-Ej)<(ER-Eq))Eq=Ej;else Eq=
ER;}else if(ER>=this.Dp[0])Eq=Ej;else if((Eq-Ej)>(ER-Eq))Eq=ER;else Eq=Ej;if(Eq!==
this.Dp[0]){IP=Eq-this.Dp[0];if(Eq!==A$v){var AgW=Eq-A$v;if(AgW>0)this.Ey=this.Ey+
Math.sqrt((AgW*2)*this.Abg);if(AgW<0)this.Ey=this.Ey-Math.sqrt((-AgW*2)*this.Abg
);}if(this.Ey>0)this.Ey=this.Ey+20;if(this.Ey<0)this.Ey=this.Ey-20;this.AdW=(400-(
this.Ey*this.Ey))/(2*IP);this.AmF=Eq;}else this.Ey=0;}if((this.Dp[1]<=this.FH[1]
)||(this.Dp[1]>=this.Fr[1]))this.Ez=0;else if(!this.Ez){var Er=this.Dp[1];var ER=
this.FH[1];var Ej=this.Fr[1];if(Er<ER)Ej=this.FH[1];else if(Er>Ej)ER=this.Fr[1];
else if(this.U3[1]<=1){ER=Er;Ej=Er;}else{var Abl=(Ej-Er)%this.U3[1];Ej=(Er-this.
U3[1])+Abl;ER=Er+Abl;if(Ej<this.FH[1])Ej=this.FH[1];if(ER>this.Fr[1])ER=this.Fr[
1];}if((ER-Er)<=(Er-Ej))Er=ER;else Er=Ej;if(Er!==this.Dp[1]){var IP=Er-this.Dp[1
];if(IP>0)this.Ez=Math.sqrt((IP*2)*this.Abg)+20;if(IP<0)this.Ez=-Math.sqrt((-IP*
2)*this.Abg)-20;this.AdX=(400-(this.Ez*this.Ez))/(2*IP);this.AmG=Er;}}else{var Bux=
this.Ez*this.Ez;var IP=Bux/(2*this.Abg);var Er=this.Dp[1];if(this.Ez>0)Er=Er+(IP|
0);if(this.Ez<0)Er=Er-(IP|0);if(Er>this.Fr[1])Er=this.Fr[1];else if(Er<this.FH[1
])Er=this.FH[1];var A$w=Er;var ER=this.FH[1];var Ej=this.Fr[1];if(Er<ER)Ej=this.
FH[1];else if(Er>Ej)ER=this.Fr[1];else if(this.U3[1]<=1){ER=Er;Ej=Er;}else{var Abl=(
Ej-Er)%this.U3[1];Ej=(Er-this.U3[1])+Abl;ER=Er+Abl;if(Ej<this.FH[1])Ej=this.FH[1
];if(ER>this.Fr[1])ER=this.Fr[1];}if(this.Ez>0){if(Ej<=this.Dp[1])Er=ER;else if((
Er-Ej)<(ER-Er))Er=Ej;else Er=ER;}else if(ER>=this.Dp[1])Er=Ej;else if((Er-Ej)>(ER-
Er))Er=ER;else Er=Ej;if(Er!==this.Dp[1]){IP=Er-this.Dp[1];if(Er!==A$w){var AgW=Er-
A$w;if(AgW>0)this.Ez=this.Ez+Math.sqrt((AgW*2)*this.Abg);if(AgW<0)this.Ez=this.Ez-
Math.sqrt((-AgW*2)*this.Abg);}if(this.Ez>0)this.Ez=this.Ez+20;if(this.Ez<0)this.
Ez=this.Ez-20;this.AdX=(400-(this.Ez*this.Ez))/(2*IP);this.AmG=Er;}else this.Ez=
0;}if(!!BK)this.Aj9=BK.Bp;if(!!H3)this.Aj9=H3.Bp;this.Arm=this.Aj9;this.Aj$=this.
Dp[0];this.Aka=this.Dp[1];this.Buy();return this;},Wy:function(C0,Bz,Nw,AaV,Aa0,
AaZ){var B;if(!!AaV&&(AaV!==this))return null;if(this.Bl>=33554432)return null;if((
this.Bl>=16777216)&&!(this.Bl&(4096<<Bz)))return null;if(!this.ACR&&!!(AaZ&0xC))
return null;var AL=A.kz(C0,this.M);if(!((AL[0]>=AL[2])||(AL[1]>=AL[3]))){var Pk=
A.zT(C0);var EX=B4;if(Pk[0]<AL[0])EX=[AL[0]-Pk[0],EX[1]];if(Pk[0]>=AL[2])EX=[(AL[
2]-Pk[0])-1,EX[1]];if(Pk[1]<AL[1])EX=[EX[0],AL[1]-Pk[1]];if(Pk[1]>=AL[3])EX=[EX[
0],(AL[3]-Pk[1])-1];return A._NewObject(C.ArV,0).Initialize(this,EX);}return null;
},AYt:function(){if(!!this.timer){A.zl([this,this.Lz],this.timer,0);this.timer=null;
}},Buy:function(){this.timer=A._GetAutoObject(A.abm.AeU);A.y_([this,this.Lz],this.
timer,0);},Lz:function(H){var B;if(!this.timer)return;var Arr=(this.timer.Bp-this.
Aj9)*0.001;var Ars=(this.timer.Bp-this.Arm)*0.001;var BuG=Arr*Arr;var BuH=Ars*Ars;
var AgC=(this.AdW*Arr)+this.Ey;var AgD=(this.AdX*Ars)+this.Ez;var Cl=[((((this.AdW
*0.5)*BuG)+(this.Ey*Arr))+this.Aj$)|0,((((this.AdX*0.5)*BuH)+(this.Ez*Ars))+this.
Aka)|0];if(this.VY&&(Arr>=0.5)){Cl=[this.AmF,Cl[1]];this.Ey=0;this.AdW=0;this.Aj$=
Cl[0];this.VY=false;}else if(this.VY){var KY=1-Math.pow(1-(Arr/0.5),5);Cl=[(this.
Aj$+((this.AmF-this.Aj$)*KY))|0,Cl[1]];}if(this.VZ&&(Ars>=0.5)){Cl=[Cl[0],this.AmG
];this.Ez=0;this.AdX=0;this.Aka=Cl[1];this.VZ=false;}else if(this.VZ){var KY=1-Math.
pow(1-(Ars/0.5),5);Cl=[Cl[0],(this.Aka+((this.AmG-this.Aka)*KY))|0];}if(((this.Ey>
0)&&(AgC<0))||((this.Ey<0)&&(AgC>0))){AgC=0;Cl=[this.Dp[0],Cl[1]];}if(((this.Ez>
0)&&(AgD<0))||((this.Ez<0)&&(AgD>0))){AgD=0;Cl=[Cl[0],this.Dp[1]];}if(!this.VY&&(
Cl[0]<this.FH[0])){this.Aj$=Cl[0];this.AmF=this.FH[0];this.Aj9=this.timer.Bp;this.
VY=true;}else if(!this.VY&&(Cl[0]>this.Fr[0])){this.Aj$=Cl[0];this.AmF=this.Fr[0
];this.Aj9=this.timer.Bp;this.VY=true;}if(!this.VZ&&(Cl[1]<this.FH[1])){this.Aka=
Cl[1];this.AmG=this.FH[1];this.Arm=this.timer.Bp;this.VZ=true;}else if(!this.VZ&&(
Cl[1]>this.Fr[1])){this.Aka=Cl[1];this.AmG=this.Fr[1];this.Arm=this.timer.Bp;this.
VZ=true;}if(((!this.VY&&!!this.Ey)&&(AgC>-20))&&(AgC<20)){Cl=[this.AmF,Cl[1]];this.
Ey=0;this.AdW=0;this.Aj$=Cl[0];}if(((!this.VZ&&!!this.Ez)&&(AgD>-20))&&(AgD<20)){
Cl=[Cl[0],this.AmG];this.Ez=0;this.AdX=0;this.Aka=Cl[1];}if(!A.z8(Cl,this.Dp)){this.
A0a=A.aaj(Cl,this.Dp);this.Dp=Cl;(B=this.Aq_)?B[1].call(B[0],this):null;(B=this.
ACb)?B[1].call(B[0],this):null;}if(((!this.Ey&&!this.Ez)&&!this.VY)&&!this.VZ){this.
AYt();this.XY=false;(B=this.Xz)?B[1].call(B[0],this):null;}},AOO:function(E){if(
E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.U3=E;},AOs:function(E){if(E<0)E=0;if(
E>1)E=1;if(E===this.A0Q)return;this.A0Q=E;if(E<(1e-007))E=1e-007;this.Abg=E*10000;
},_Init:function(aArg){C.Em._Init.call(this,aArg);this.__proto__=C.HC;this.S=0x11B;
},_Mark:function(D){var B;C.Em._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AGL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aq_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACb)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Xz)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Rv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::SlideTouchHandler"};C.B1={Af:null,KF:null,B2:null,Ea:null,Anj:0,Bp:0,A4I:
0,Filter:148,CO:0,D8:0,Bw:true,Down:false,Aan:false,PF:false,Init:function(aArg){
var B;var C7=(C.O.isPrototypeOf(B=this.I)?B:null);if(!C7)throw new Error(AaL);this.
Af=C7.AGr;C7.AGr=this;},Gl:function(Cx){var B;if(!!Cx&&Cx.BcA(this.Filter)){this.
Down=Cx.Down;this.CO=Cx.CO;this.D8=Cx.D8;this.Bp=Cx.Bp;this.PF=false;if(Cx.Down){
this.A4I=this.Anj;this.Aan=this.Anj>0;if(this.Aan)(B=this.Ea)?B[1].call(B[0],this
):null;else(B=this.B2)?B[1].call(B[0],this):null;if(!this.PF)this.Anj=this.Anj+1;
return!this.PF;}if(!Cx.Down){this.Aan=this.Anj>1;this.A4I=this.Anj-1;this.Anj=0;(
B=this.KF)?B[1].call(B[0],this):null;return!this.PF;}}return false;},_Init:function(
aArg){this.__proto__=C.B1;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.KF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.B2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ea)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.ArV={
B5:null,ArY:0,Dp:A.vw,Initialize:function(Ag,aOffset){this.B5=Ag;this.Dp=aOffset;
this.ArY=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.ArV;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.B5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};C.A1R={Af:null,C7:null,_Init:function(aArg){this.
__proto__=C.A1R;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.C7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::ModalContext"};C.
Aov={MO:null,extent:A.vx,Ba:A.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
C.Aov;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.MO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.AAo={AgL:A.vw,AgK:A.vw,_Init:function(aArg){C.Aov._Init.
call(this,aArg);this.__proto__=C.AAo;},_className:"Core::LayoutLineContext"};C.AAp={
Axm:A.vw,Axl:A.vw,AgL:A.vw,AgK:A.vw,_Init:function(aArg){C.Aov._Init.call(this,aArg
);this.__proto__=C.AAp;},_className:"Core::LayoutQuadContext"};C.AJC={C7:null,Af:
null,Qt:null,QD:null,Lv:null,Ang:null,_Init:function(aArg){this.__proto__=C.AJC;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.C7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Qt)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.QD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lv)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ang)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::DialogContext"};C.AP9={Fi:null,BU:null,BZ:null,A8_:false,Brn:function(){if(
!this.Fi)return;var Ow=this.Fi;this.Fi.Os=null;this.Fi=null;A.ow([this,this.AXL]
,this);Ow.A2d(this);},Bs4:function(H){if(!!this.Fi)return;if(!this.BZ)return;this.
Fi=this.BZ;this.BZ=this.BZ.Af;if(!!this.BZ)this.BZ.AG=null;else this.BU=null;this.
Fi.Af=null;this.A8_=true;this.Fi.Rv(this);this.A8_=false;},Btq:function(H){A.ow([
this,this.Bs4],this);},Btp:function(H){A.ow([this,this.Btq],this);},AXL:function(
H){A.ow([this,this.Btp],this);},BaI:function(IM){if(!IM||!IM.Os)return;if(IM.Os!==
this)throw new Error(AdG);var A$W=false;if(this.Fi===IM){this.Fi=null;A$W=true;A.
ow([this,this.AXL],this);}else{if(!!IM.Af)IM.Af.AG=IM.AG;else this.BU=IM.AG;if(!
!IM.AG)IM.AG.Af=IM.Af;else this.BZ=IM.Af;IM.AG=null;IM.Af=null;}IM.Os=null;if(A$W
)IM.A2c(this);},A4P:function(IM,AVL){if(!IM)return;if(!!IM.Os)throw new Error(Yi
);IM.Os=this;if(AVL){IM.Af=this.BZ;if(!!this.BZ)this.BZ.AG=IM;else this.BU=IM;this.
BZ=IM;}else{IM.AG=this.BU;if(!!this.BU)this.BU.Af=IM;else this.BZ=IM;this.BU=IM;
}if(!this.Fi)A.ow([this,this.AXL],this);},_Init:function(aArg){this.__proto__=C.
AP9;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.Fi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.BU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};C.AiK={Os:null,AG:null,Af:null,A2d:function(Aqs
){},A2c:function(Aqs){},Rv:function(Aqs){this.AbZ();},LJ:function(){if(!!this.Os&&(
this.Os.Fi===this))this.Os.Brn();},AbZ:function(){if(!!this.Os)this.Os.BaI(this);
},AML:function(){return!!this.Os&&(this.Os.Fi===this);},_Init:function(aArg){this.
__proto__=C.AiK;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Os)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Task"};C.AP7={Ar:null,Arn:null,Rv:function(Aqs){this.Arn.
Ar=this.Ar;A.vv(this.Arn,0);A.ow([this,this.Bs1],this);},Bs1:function(H){this.Arn.
Ar=null;this.Arn=null;this.Ar=null;this.LJ();},_Init:function(aArg){C.AiK._Init.
call(this,aArg);this.__proto__=C.AP7;},_Mark:function(D){var B;C.AiK._Mark.call(
this,D);if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arn)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"};C.AC3={_Init:function(
){C.AP9._Init.call(this,0);},_variants:function(){return this;},_this:null};C.AfG={
resource:null,Kz:function(){this.resource=null;},Init:function(aArg){this.resource=
aArg;},_Init:function(aArg){this.__proto__=C.AfG;this.Init(aArg);A.hJ++;},_Done:
function(){this.Kz();this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Resource"};C.Timer={Mz:null,timer:null,Bp:0,Period:1000,T4:
0,Bw:false,Kz:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=
null;},AGU:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;
var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=A.zk(this,this.Trigger
);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=tmp;},P4:
function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.Bw)this.AGU(
this.T4,E);},UR:function(E){if(E<0)E=0;if(E===this.T4)return;this.T4=E;if(this.Bw
)this.AGU(E,this.Period);},An:function(E){if(E===this.Bw)return;this.Bw=E;if(E)this.
AGU(this.T4,this.Period);else this.AGU(0,0);this.Bp=this.Asn();},Asn:function(){
var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},Trigger:
function(){var B;this.Bp=this.Asn();if(!this.Period)this.An(false);(B=this.Mz)?B[
1].call(B[0],this):null;},AC0:function(H){this.An(false);},StartTimer:function(H
){if(this.Bw)this.An(false);this.An(true);},_Init:function(aArg){this.__proto__=
C.Timer;A.hJ++;},_Done:function(){this.Kz();this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Mz)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.Bp={APF:0,AsX:0,AhJ:0,GD:0,GF:0,Year:0,A8H:function(
AdT,AVe){if(AVe)switch(AdT){case 1:return A.abj.BcH;case 2:return A.abj.BbC;case
3:return A.abj.Bc4;case 4:return A.abj.Bah;case 5:return A.abj.Bc8;case 6:return A.
abj.BcK;case 7:return A.abj.BcJ;case 8:return A.abj.Baj;case 9:return A.abj.BhR;
case 10:return A.abj.BdB;case 11:return A.abj.BdA;case 12:return A.abj.Ba5;default:
return A.jm;}else switch(AdT){case 1:return A.abj.AAi;case 2:return A.abj.Azb;case
3:return A.abj.AAt;case 4:return A.abj.Ayh;case 5:return A.abj.AAv;case 6:return A.
abj.AAk;case 7:return A.abj.AAj;case 8:return A.abj.Ayo;case 9:return A.abj.ACF;
case 10:return A.abj.AAH;case 11:return A.abj.AAF;case 12:return A.abj.AyW;default:
return A.jm;}},A8F:function(A7g,AVe){if(AVe)switch(A7g){case 1:return A.abj.Bdd;
case 2:return A.abj.Bi4;case 3:return A.abj.BjF;case 4:return A.abj.BiR;case 5:return A.
abj.BbP;case 6:return A.abj.BhL;case 0:return A.abj.BiE;default:return A.jm;}else
switch(A7g){case 1:return A.abj.Bdc;case 2:return A.abj.Bi3;case 3:return A.abj.
BjE;case 4:return A.abj.BiQ;case 5:return A.abj.BbO;case 6:return A.abj.BhK;case
0:return A.abj.BiD;default:return A.jm;}},A8E:function(){var result=0;{var d=new
Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset()*60));}return result;
},JN:function(){var d=this.GD;var Kn=this.GF;var C9=this.Year-((Kn<=2)?1:0);var Awo=(((
C9>=0)?C9:C9-399)/400)|0;var Akg=C9-(Awo*400);var TE=(((((153*(Kn+((Kn>2)?-3:9))
)+2)/5)|0)+d)-1;var AmC=(((Akg*365)+((Akg/4)|0))-((Akg/100)|0))+TE;var Pm=((Awo*
146097)+AmC)-719468;return(((Pm*86400)+(this.AhJ*3600))+(this.AsX*60))+this.APF;
},ABU:function(E){var B;E+=62162035200;if(E<0)E=0;var TR=Math.trunc(E/86400)|0;var
Awo=(((TR>=0)?TR:TR-146096)/146097)|0;var AmC=TR-(Awo*146097);var Akg=((((AmC-((
AmC/1460)|0))+((AmC/36524)|0))-((AmC/146096)|0))/365)|0;var C9=Akg+(Awo*400);var
TE=AmC-(((365*Akg)+((Akg/4)|0))-((Akg/100)|0));var AXf=(((5*TE)+2)/153)|0;var d=(
TE-((((153*AXf)+2)/5)|0))+1;var Kn=AXf+((AXf<10)?3:-9);var BG=Math.trunc(E/3600)
%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=C9+((Kn<=2)?1:0);this.UT(
Kn);this.Le(d);this.All(BG+((BG<0)?24:0));this.Alp(P+((P<0)?60:0));this.Als(s+((
s<0)?60:0));},Z5:function(){if(this.GF===2){if(!(this.Year%4)&&(!!(this.Year%100
)||!(this.Year%400)))return 29;else return 28;}else if((((this.GF===4)||(this.GF===
6))||(this.GF===9))||(this.GF===11))return 30;else return 31;},BeP:function(){var
B;var TE=this.Z4()-1;var AqI=(6+this.As5())%7;var AmE=((371+AqI)-TE)%7;if(this.GF===
12){var d=this.GD;if((d===31)&&(AqI<3))return 0;if((d===30)&&(AqI<2))return 0;if((
d===29)&&(AqI<1))return 0;}if(AmE<=3)TE+=AmE;else TE-=(7-AmE);if(TE<0){var d=this.
GD;var Kn=this.GF;this.Year--;this.Le(31);this.UT(12);TE=this.Z4()-1;AqI=(6+this.
As5())%7;AmE=((371+AqI)-TE)%7;if(AmE<=3)TE+=AmE;else TE-=AmE;this.Year++;this.Le(
d);this.UT(Kn);}return(TE/7)|0;},Z4:function(){var B;var d=this.GD;var Kn=this.GF;
var C9=this.Year;var Ad_=((!!!(C9%4)&&(!!(C9%100)||!!!(C9%400)))?1:0);switch(Kn){
case 2:d+=31;break;case 3:d+=(59+Ad_);break;case 4:d+=(90+Ad_);break;case 5:d+=(
120+Ad_);break;case 6:d+=(151+Ad_);break;case 7:d+=(181+Ad_);break;case 8:d+=(212+
Ad_);break;case 9:d+=(243+Ad_);break;case 10:d+=(273+Ad_);break;case 11:d+=(304+
Ad_);break;case 12:d+=(334+Ad_);break;default:;}return d;},As5:function(){var B;
var d=this.GD;var Kn=this.GF+((this.GF>2)?-2:10);var C9=this.Year-((this.GF<=2)?
1:0);var BF=(C9/100)|0;C9%=100;d+=((((((((26*Kn)-2)/10)|0)+C9)+((C9/4)|0))+((BF/
4)|0))-(2*BF));if(d>=0)return d%7;else return(7-(-d%7))%7;},Als:function(E){if(E<
0)E=0;if(E>59)E=59;this.APF=E;},Alp:function(E){if(E<0)E=0;if(E>59)E=59;this.AsX=
E;},All:function(E){if(E<0)E=0;if(E>23)E=23;this.AhJ=E;},Le:function(E){if(E<1)E=
1;if(E>31)E=31;this.GD=E;},UT:function(E){if(E<1)E=1;if(E>12)E=12;this.GF=E;},Format:
function(H0){var result=A.jm;var inx=0;while(!!(H0.charCodeAt(inx)||0))if((H0.charCodeAt(
inx)||0)===0x25){var YJ=1;inx=inx+1;if((H0.charCodeAt(inx)||0)===0x23){inx=inx+1;
YJ=0;}switch(H0.charCodeAt(inx)||0){case 0x64:result=result+A.aaq(this.GD,2*YJ,10
);break;case 0x48:result=result+A.aaq(this.AhJ,2*YJ,10);break;case 0x49:if(!(this.
AhJ%12))result=result+Vs;else result=result+A.aaq(this.AhJ%12,2*YJ,10);break;case
0x6D:result=result+A.aaq(this.GF,2*YJ,10);break;case 0x4D:result=result+A.aaq(this.
AsX,2*YJ,10);break;case 0x70:if(this.AhJ<12)result=result+A.abj.A$2;else result=
result+A.abj.Bg$;break;case 0x53:result=result+A.aaq(this.APF,2*YJ,10);break;case
0x77:result=result+A.aaq(this.As5(),YJ,10);break;case 0x79:result=result+A.aaq(this.
Year%100,2*YJ,10);break;case 0x59:result=result+A.aaq(this.Year,4*YJ,10);break;case
0x25:result=result+Yj;break;case 0x6A:result=result+A.aaq(this.Z4(),3*YJ,10);break;
case 0x57:result=result+A.aaq(this.BeP(),2*YJ,10);break;case 0x61:result=result+
this.A8F(this.As5(),true);break;case 0x41:result=result+this.A8F(this.As5(),false
);break;case 0x62:result=result+this.A8H(this.GF,true);break;case 0x42:result=result+
this.A8H(this.GF,false);break;default:;}inx=inx+1;}else{result=result+String.fromCharCode(
H0.charCodeAt(inx)||0);inx=inx+1;}return result;},Initialize2:function(Aa1,AdT,BpH
,BpX,Bqc,Bqw){this.Year=Aa1;this.UT(AdT);this.Le(BpH);this.All(BpX);this.Alp(Bqc
);this.Als(Bqw);return this;},Initialize:function(Af$){this.ABU(Af$);return this;
},Bba:function(Af$){if(!Af$)return A._NewObject(C.AlN,0).Initialize(this.JN());return A.
_NewObject(C.AlN,0).Initialize(this.JN()-Af$.JN());},Bil:function(AvJ){if(!AvJ)return this;
return A._NewObject(C.Bp,0).Initialize(this.JN()-AvJ.JN());},J:function(AvJ){if(
!AvJ)return this;return A._NewObject(C.Bp,0).Initialize(this.JN()+AvJ.JN());},_Init:
function(aArg){this.__proto__=C.Bp;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Time"
};C.AlN={ACC:0,AAz:0,AzQ:0,Ky:0,JN:function(){return(((this.Ky*86400)+(this.AzQ*
3600))+(this.AAz*60))+this.ACC;},ABU:function(E){var AG3=1;this.Ky=Math.trunc(E/
86400)|0;if(E<0){E=-E;AG3=-1;}this.AzQ=AG3*(Math.trunc(E/3600)%24|0);this.AAz=AG3
*(Math.trunc(E/60)%60|0);this.ACC=AG3*(E%60|0);},Initialize2:function(BpI,BpY,Bqd
,Bqz){this.Ky=BpI;this.AzQ=BpY;this.AAz=Bqd;this.ACC=Bqz;return this;},Initialize:
function(Af$){this.ABU(Af$);return this;},_Init:function(aArg){this.__proto__=C.
AlN;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TimeSpan"};C.A5c={Ar:null,Os:null,Trigger:
function(BpC,AVL){var Ow=A._NewObject(C.AP7,0);Ow.Arn=this;Ow.Ar=BpC;this.Os.A4P(
Ow,AVL);},_Init:function(aArg){this.__proto__=C.A5c;this.Os=A._GetAutoObject(C.AC3
);A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ar)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Os
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::SystemEvent"};C.A5d={Jh:null
,Event:null,ANL:null,Aq4:function(H){var B;if(!this.Event)return;this.Jh=this.Event.
Ar;(B=this.ANL)?B[1].call(B[0],this):null;this.Jh=null;},Bfw:function(E){if(this.
Event===E)return;if(!!this.Event)A.zl([this,this.Aq4],this.Event,0);this.Event=E;
if(!!this.Event)A.y_([this,this.Aq4],this.Event,0);},_Init:function(aArg){this.__proto__=
C.A5d;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Jh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Event)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::SystemEventHandler"};C.Byk={Db:0x1,Bvi:
0x2,Bwn:0x4,Byc:0x8,Bw:0x10,HB:0x20,Bwo:0x40,Bw0:0x80,Bwj:0x100,BwE:0x200,Bv9:0x400
,Bxz:0x800,Bh:0x1000,Byh:0x2000,Bxk:0x4000,Bxl:0x8000,Zo:0x10000,Bxj:0x20000,BxK:
0x40000};C.OY={BxA:0x1,BxB:0x2,Bve:0x4,Bvf:0x8,Bvg:0x10,Bvd:0x20};C.Ae0={None:0,
Bx_:1,BvA:2,BwJ:3,BxE:4,Bx$:5,Bya:6,BvB:7,BvC:8,BwL:9,BwK:10,BxG:11,BxF:12};C.Ar0={
None:0,Bx8:1,Left:2,Bvy:3,X1:4,AZN:5,Bx9:6,Right:7,Bvz:8};C.KeyCode={NoKey:0,Ok:
1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:
12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:
22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33
,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:
41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49
,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:
58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:
68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76
,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:
86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:
95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:
103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:
112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:
121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:
130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:
138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BxC={Byq:0x1,Byn:0x2,Byo:0x4,Byp:
0x8,BwN:0x10,Bwq:0x20};
C._Init=function(){C.Ah5.__proto__=C.B5;C.XO.__proto__=C.B5;C.Em.__proto__=C.B5;C.
O.__proto__=C.Em;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AM1.__proto__=
C.Event;C.ArU.__proto__=C.Event;C.Ab6.__proto__=C.Event;C.An0.__proto__=C.Event;
C.Ac.__proto__=C.Em;C.Cv.__proto__=C.O;C.Di.__proto__=C.O;C.Bd.__proto__=C.XO;C.
HC.__proto__=C.Em;C.AAo.__proto__=C.Aov;C.AAp.__proto__=C.Aov;C.AP7.__proto__=C.
AiK;};C._ReInit=function(){var B;if((B=C.AC3._this))B._ReInit();};C.Dq=function(
D){var B;if((B=C.AC3._this)&&(B._cycle!=D))B._Done(C.AC3._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */