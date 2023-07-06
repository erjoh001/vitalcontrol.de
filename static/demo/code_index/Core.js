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
var B3=[0,0];var BI=[0,0,0,0];var EG="The view does not belong to this group";var
Gr="The dialog component is already presented";var I4="The dialog component is actually not presented";
var Ip="No fader to perform the fade-in/out operation";var Oc="Trying to use the same fader twice";
var Pb="Trying to fade-in/out a group which belongs to another owner";var Nm="No view to restack";
var Cv="View is not in this group";var FK="Sibling view does not belong to the group";
var Od="No view to remove";var Nn="No view to add";var Ka="View already in a group";
var Oe="Recursive invalidate during active update cycle.";var MB=[-8,-8,9,9];var
Pc="No group to end the modal state.";var RL="The group is not modal.";var Ti="No group to obtain the modal state.";
var Ve="The group serves already as the \'virtual keyboard\'.";var Vf="The group is already modal.";
var JT="View is not in the same group or it is not embedded within the Outline "+
"Box";var RM="The method SwitchToDialog() is not available in Core::VerticalList.";
var Vg="The method DismissDialog() is not available in Core::VerticalList.";var Vh=
"The method PresentDialog() is not available in Core::VerticalList.";var X7="The method FadeGroup() is not available in Core::VerticalList.";
var RN="The method RestackBehind() is not available in Core::VerticalList.";var X8=
"The method RestackTop() is not available in Core::VerticalList.";var Vi="The method Restack() is not available in Core::VerticalList.";
var Tj="The method Remove() is not available in Core::VerticalList.";var Vj="The method AddBehind() is not available in Core::VerticalList.";
var Qg="The method Add() is not available in Core::VerticalList.";var Vk="The Slide Touch Handler:";
var Np="is already connected with a view.";var Pd="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Tk=[0,0,170,120];var X9="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Vl="The method DismissDialog() is not available in Core::HorizontalList.";var
X_="The method PresentDialog() is not available in Core::HorizontalList.";var X$=
"The method FadeGroup() is not available in Core::HorizontalList.";var Vm="The method RestackBehind() is not available in Core::HorizontalList.";
var Vn="The method RestackTop() is not available in Core::HorizontalList.";var RO=
"The method Restack() is not available in Core::HorizontalList.";var Ya="The method Remove() is not available in Core::HorizontalList.";
var Yb="The method AddBehind() is not available in Core::HorizontalList.";var AaC=
"The method Add() is not available in Core::HorizontalList.";var Qh=[0,0,1,1];var
AaD="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Adz="Trying to cancel a task not belonging to this queue!";var Yc="Trying to enqueue a task twice!";
var Vo="12";var Yd="%";
C.B4={Af:null,AG:null,Aa:null,Eb:null,S:0x103,Jo:0,OX:0x14,AqM:function(BC,Aqn){}
,A33:function(E){if(this.Jo===E)return;this.Jo=E;if(!!this.Aa){var AgM=this.Af;var
Gt=0;while(!!AgM&&(E>AgM.Jo)){AgM=AgM.Af;Gt=Gt+1;}AgM=this.AG;while(!!AgM&&(E<AgM.
Jo)){AgM=AgM.AG;Gt=Gt-1;}if(!!Gt)this.Aa.Lg(this,Gt);}},AW:function(E){var B;var
Gt=E^this.OX;if(!Gt)return;this.OX=E;if(!!this.Eb&&!((this.S&0x400)===0x400)){this.
Aa.S=this.Aa.S|0x5000;A.ow([B=this.Aa,B.HL],this);this.Aa.Bc([0,0,(B=this.Aa.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eb&&((this.S&0x400)===0x400)){this.Eb.ML.S=this.Eb.
ML.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);}},HO:function(
){var BZ=this.Aa;while(!!BZ){var H6=(C.Root.isPrototypeOf(BZ)?BZ:null);if(!!H6)return H6;
BZ=BZ.Aa;}return null;},JH:function(CJ,aClip,aOffset,B5,aBlend){},Gh:function(Cw
){return null;},Wu:function(CX,By,Nt,AaN,AaS,AaR){return null;},ArA:function(CX){
return CX;},ArJ:function(BC,L4){return B3;},Ak3:function(aOffset,Aql){},GetExtent:
function(){return BI;},CQ:function(Af2,Ama){var B;if(((this.S&0x200)===0x200))Af2=
Af2&~0x400;var AW_=(this.S&~Ama)|Af2;var Ajl=AW_^this.S;this.S=AW_;if(!!this.Aa&&
!!(Ajl&0x14)){var A8g=((this.S&0x14)===0x14);if(A8g&&!this.Aa.A6)this.Aa.A8(this
);if(!A8g&&(this.Aa.A6===this))this.Aa.A8(this.Aa.Ay_(this,0x14));}if(!!this.Aa&&
!!(Ajl&0x403))this.Aa.Bc(this.GetExtent());if(((!!this.Eb&&!!this.Aa)&&((AW_&0x400
)===0x400))&&((Ajl&0x1)===0x1)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.
ow([B=this.Aa,B.HL],this);}if(!!this.Aa&&((Ajl&0x400)===0x400)){this.Eb=null;this.
S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);}},_Init:function(
aArg){this.__proto__=C.B4;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Eb)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::View"};C.AhX={EN:A.vw,EV:A.vw,AqM:function(BC,Aqn){var As=A._NewObject(
C.AAh,0);this.Eb=null;As.extent=this.getExtent();As.Ba=BC;As.ML=Aqn;As.AgC=this.
EV;As.AgD=this.EN;this.Eb=As;},ArJ:function(BC,L4){var B;var Ev=this.OX;var As=(
C.AAh.isPrototypeOf(B=this.Eb)?B:null);var x1=As.extent[0];var y1=As.extent[1];var
x2=As.extent[2];var y2=As.extent[3];var Jx=[BC[2]-BC[0],BC[3]-BC[1]];var BP=x2-x1;
var BG=y2-y1;var tmp;if(!L4){var MO=[(B=As.Ba)[2]-B[0],B[3]-B[1]];x1=x1-As.Ba[0];
y1=y1-As.Ba[1];if(MO[0]!==Jx[0]){var He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);
var Pt=((Ev&0x1)===0x1);if(!He&&(Pt||!Hf))x1=((x1*Jx[0])/MO[0])|0;if(!Hf&&(Pt||!
He)){x2=x2-As.Ba[0];x2=((x2*Jx[0])/MO[0])|0;x2=x2-Jx[0];}else x2=x2-As.Ba[2];x1=
x1+BC[0];x2=x2+BC[2];if(!Pt){if(He&&!Hf)x2=x1+BP;else if(!He&&Hf)x1=x2-BP;else{x1=
x1+((((x2-x1)-BP)/2)|0);x2=x1+BP;}}}else{x2=x2-As.Ba[2];x1=x1+BC[0];x2=x2+BC[2];
}if(MO[1]!==Jx[1]){var Hg=((Ev&0x10)===0x10);var Hd=((Ev&0x20)===0x20);var Pu=((
Ev&0x2)===0x2);if(!Hg&&(Pu||!Hd))y1=((y1*Jx[1])/MO[1])|0;if(!Hd&&(Pu||!Hg)){y2=y2-
As.Ba[1];y2=((y2*Jx[1])/MO[1])|0;y2=y2-Jx[1];}else y2=y2-As.Ba[3];y1=y1+BC[1];y2=
y2+BC[3];if(!Pu){if(Hg&&!Hd)y2=y1+BG;else if(!Hg&&Hd)y1=y2-BG;else{y1=y1+((((y2-
y1)-BG)/2)|0);y2=y1+BG;}}}else{y2=y2-As.Ba[3];y1=y1+BC[1];y2=y2+BC[3];}}else{switch(
L4){case 3:{x1=BC[0];x2=x1+BP;}break;case 4:{x2=BC[2];x1=x2-BP;}break;case 1:{y1=
BC[1];y2=y1+BG;}break;case 2:{y2=BC[3];y1=y2-BG;}break;default:;}if((L4===3)||(L4===
4)){var Hg=((Ev&0x10)===0x10);var Hd=((Ev&0x20)===0x20);var Pu=((Ev&0x2)===0x2);
if(Pu){y1=BC[1];y2=BC[3];}else if(Hg&&!Hd){y1=BC[1];y2=y1+BG;}else if(Hd&&!Hg){y2=
BC[3];y1=y2-BG;}else{y1=BC[1]+((((BC[3]-BC[1])-BG)/2)|0);y2=y1+BG;}}if((L4===1)||(
L4===2)){var He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);var Pt=((Ev&0x1)===0x1);
if(Pt){x1=BC[0];x2=BC[2];}else if(He&&!Hf){x1=BC[0];x2=x1+BP;}else if(Hf&&!He){x2=
BC[2];x1=x2-BP;}else{x1=BC[0]+((((BC[2]-BC[0])-BP)/2)|0);x2=x1+BP;}}}As.isEmpty=(
x1>=x2)||(y1>=y2);BP=x2-x1;BG=y2-y1;if(As.AgD[0]<As.AgC[0]){tmp=x1;x1=x2-1;x2=tmp-
1;}if(As.AgD[1]<As.AgC[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-
y1)===1)y2=y1;if(((this.S&0x100)===0x100)){this.EV=[x1,y1];this.EN=[x2,y2];}else{
this.Eg([x1,y1]);this.D$([x2,y2]);this.Eb=As;}return[BP,BG];},Ak3:function(aOffset
,Aql){if(Aql){this.EV=A.aak(this.EV,aOffset);this.EN=A.aak(this.EN,aOffset);}else{
this.Eg(A.aak(this.EV,aOffset));this.D$(A.aak(this.EN,aOffset));}},GetExtent:function(
){if(!!this.Eb&&this.Eb.isEmpty)return BI;return this.getExtent();},getExtent:function(
){var x1=this.EV[0];var y1=this.EV[1];var x2=this.EN[0];var y2=this.EN[1];var BP=
x2-x1;var BG=y2-y1;var tmp;if(BP<0)BP=-BP;if(BG<0)BG=-BG;if(BP>=BG){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(BG>=BP){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},D$:function(
E){var B;if(A.z8(E,this.EN))return;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());this.Eb=null;this.EN=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000
)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL
],this);}},Eg:function(E){var B;if(A.z8(E,this.EV))return;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.GetExtent());this.Eb=null;this.EV=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===
0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|
0x4000;A.ow([B=this.Aa,B.HL],this);}},_Init:function(aArg){C.B4._Init.call(this,
aArg);this.__proto__=C.AhX;},_className:"Core::LineView"};C.XI={JP:A.vw,LY:A.vw,
EN:A.vw,EV:A.vw,AqM:function(BC,Aqn){var As=A._NewObject(C.AAi,0);this.Eb=null;As.
extent=this.GetExtent();As.Ba=BC;As.ML=Aqn;As.AgC=this.EV;As.AgD=this.EN;As.Axg=
this.LY;As.Axh=this.JP;this.Eb=As;},ArJ:function(BC,L4){var B;var Ev=this.OX;var
As=(C.AAi.isPrototypeOf(B=this.Eb)?B:null);var x1=As.extent[0];var y1=As.extent[
1];var x2=As.extent[2];var y2=As.extent[3];var Jx=[BC[2]-BC[0],BC[3]-BC[1]];var BP=
x2-x1;var BG=y2-y1;if(!L4){var MO=[(B=As.Ba)[2]-B[0],B[3]-B[1]];x1=x1-As.Ba[0];y1=
y1-As.Ba[1];if(MO[0]!==Jx[0]){var He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);var
Pt=((Ev&0x1)===0x1);if(!He&&(Pt||!Hf))x1=((x1*Jx[0])/MO[0])|0;if(!Hf&&(Pt||!He)){
x2=x2-As.Ba[0];x2=((x2*Jx[0])/MO[0])|0;x2=x2-Jx[0];}else x2=x2-As.Ba[2];x1=x1+BC[
0];x2=x2+BC[2];if(!Pt){if(He&&!Hf)x2=x1+BP;else if(!He&&Hf)x1=x2-BP;else{x1=x1+((((
x2-x1)-BP)/2)|0);x2=x1+BP;}}}else{x2=x2-As.Ba[2];x1=x1+BC[0];x2=x2+BC[2];}if(MO[
1]!==Jx[1]){var Hg=((Ev&0x10)===0x10);var Hd=((Ev&0x20)===0x20);var Pu=((Ev&0x2)===
0x2);if(!Hg&&(Pu||!Hd))y1=((y1*Jx[1])/MO[1])|0;if(!Hd&&(Pu||!Hg)){y2=y2-As.Ba[1];
y2=((y2*Jx[1])/MO[1])|0;y2=y2-Jx[1];}else y2=y2-As.Ba[3];y1=y1+BC[1];y2=y2+BC[3];
if(!Pu){if(Hg&&!Hd)y2=y1+BG;else if(!Hg&&Hd)y1=y2-BG;else{y1=y1+((((y2-y1)-BG)/2
)|0);y2=y1+BG;}}}else{y2=y2-As.Ba[3];y1=y1+BC[1];y2=y2+BC[3];}}else{switch(L4){case
3:{x1=BC[0];x2=x1+BP;}break;case 4:{x2=BC[2];x1=x2-BP;}break;case 1:{y1=BC[1];y2=
y1+BG;}break;case 2:{y2=BC[3];y1=y2-BG;}break;default:;}if((L4===3)||(L4===4)){var
Hg=((Ev&0x10)===0x10);var Hd=((Ev&0x20)===0x20);var Pu=((Ev&0x2)===0x2);if(Pu){y1=
BC[1];y2=BC[3];}else if(Hg&&!Hd){y1=BC[1];y2=y1+BG;}else if(Hd&&!Hg){y2=BC[3];y1=
y2-BG;}else{y1=BC[1]+((((BC[3]-BC[1])-BG)/2)|0);y2=y1+BG;}}if((L4===1)||(L4===2)
){var He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);var Pt=((Ev&0x1)===0x1);if(Pt){
x1=BC[0];x2=BC[2];}else if(He&&!Hf){x1=BC[0];x2=x1+BP;}else if(Hf&&!He){x2=BC[2];
x1=x2-BP;}else{x1=BC[0]+((((BC[2]-BC[0])-BP)/2)|0);x2=x1+BP;}}}As.isEmpty=(x1>=x2
)||(y1>=y2);BP=(x2-x1)-1;BG=(y2-y1)-1;var Agi=As.extent[0];var Agk=As.extent[1];
var Ad0=(As.extent[2]-Agi)-1;var AdZ=(As.extent[3]-Agk)-1;if(!Ad0)Ad0=1;if(!AdZ)
AdZ=1;if(((this.S&0x100)===0x100)){this.EV=[x1+((((As.AgC[0]-Agi)*BP)/Ad0)|0),y1+((((
As.AgC[1]-Agk)*BG)/AdZ)|0)];this.EN=[x1+((((As.AgD[0]-Agi)*BP)/Ad0)|0),y1+((((As.
AgD[1]-Agk)*BG)/AdZ)|0)];this.LY=[x1+((((As.Axg[0]-Agi)*BP)/Ad0)|0),y1+((((As.Axg[
1]-Agk)*BG)/AdZ)|0)];this.JP=[x1+((((As.Axh[0]-Agi)*BP)/Ad0)|0),y1+((((As.Axh[1]-
Agk)*BG)/AdZ)|0)];}else{this.Eg([x1+((((As.AgC[0]-Agi)*BP)/Ad0)|0),y1+((((As.AgC[
1]-Agk)*BG)/AdZ)|0)]);this.D$([x1+((((As.AgD[0]-Agi)*BP)/Ad0)|0),y1+((((As.AgD[1
]-Agk)*BG)/AdZ)|0)]);this.J8([x1+((((As.Axg[0]-Agi)*BP)/Ad0)|0),y1+((((As.Axg[1]-
Agk)*BG)/AdZ)|0)]);this.J9([x1+((((As.Axh[0]-Agi)*BP)/Ad0)|0),y1+((((As.Axh[1]-Agk
)*BG)/AdZ)|0)]);this.Eb=As;}return[BP+1,BG+1];},Ak3:function(aOffset,Aql){if(Aql
){this.EV=A.aak(this.EV,aOffset);this.EN=A.aak(this.EN,aOffset);this.LY=A.aak(this.
LY,aOffset);this.JP=A.aak(this.JP,aOffset);}else{this.Eg(A.aak(this.EV,aOffset));
this.D$(A.aak(this.EN,aOffset));this.J8(A.aak(this.LY,aOffset));this.J9(A.aak(this.
JP,aOffset));}},GetExtent:function(){if(!!this.Eb&&this.Eb.isEmpty)return BI;var
x1=this.EV[0];var y1=this.EV[1];var x2=this.LY[0];var y2=this.LY[1];if((((this.JP[
0]!==x1)||(this.EN[1]!==y1))||(this.EN[0]!==x2))||(this.JP[1]!==y2)){if(this.EN[
0]<x1)x1=this.EN[0];if(this.LY[0]<x1)x1=this.LY[0];if(this.JP[0]<x1)x1=this.JP[0
];if(this.EN[1]<y1)y1=this.EN[1];if(this.LY[1]<y1)y1=this.LY[1];if(this.JP[1]<y1
)y1=this.JP[1];if(this.EV[0]>x2)x2=this.EV[0];if(this.EN[0]>x2)x2=this.EN[0];if(
this.JP[0]>x2)x2=this.JP[0];if(this.EV[1]>y2)y2=this.EV[1];if(this.EN[1]>y2)y2=this.
EN[1];if(this.JP[1]>y2)y2=this.JP[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;
}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},J9:function(E){var B;
if(A.z8(E,this.JP))return;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));this.Eb=null;this.JP=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.
S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);}},J8:function(
E){var B;if(A.z8(E,this.LY))return;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());this.Eb=null;this.LY=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000
)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL
],this);}},D$:function(E){var B;if(A.z8(E,this.EN))return;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.GetExtent());this.Eb=null;this.EN=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((!!this.Aa&&((this.S&0x400)===
0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|
0x4000;A.ow([B=this.Aa,B.HL],this);}},Eg:function(E){var B;if(A.z8(E,this.EV))return;
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.Eb=null;this.
EV=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((!!this.
Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000)===0x2000)){this.S=this.S|0x800;
this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);}},AMH:function(Ke){var G3=
A.aan(4,A.vw,null);var P=0;var HJ=3;var AWL=false;var AWM=false;G3.Set(0,this.EV
);G3.Set(1,this.EN);G3.Set(2,this.LY);G3.Set(3,this.JP);while(P<4){var A$F=G3.Get(
P)[0];var AHf=G3.Get(P)[1];var BuG=G3.Get(HJ)[0];var AYD=G3.Get(HJ)[1];if(((AHf>
Ke[1])!==(AYD>Ke[1]))||((AHf<Ke[1])!==(AYD<Ke[1]))){var Fy=((((BuG-A$F)*(Ke[1]-AHf
))/(AYD-AHf))|0)+A$F;if(Ke[0]>Fy)AWL=!AWL;if(Ke[0]<Fy)AWM=!AWM;}HJ=P;P=P+1;}return AWL||
AWM;},Bb5:function(){return((((this.EV[0]===this.JP[0])&&(this.EN[0]===this.LY[0
]))&&(this.EV[1]===this.EN[1]))&&(this.LY[1]===this.JP[1]))||((((this.EV[0]===this.
EN[0])&&(this.LY[0]===this.JP[0]))&&(this.EV[1]===this.JP[1]))&&(this.EN[1]===this.
LY[1]));},_Init:function(aArg){C.B4._Init.call(this,aArg);this.__proto__=C.XI;},
_className:"Core::QuadView"};C.Em={M:A.vx,AqM:function(BC,Aqn){var As=A._NewObject(
C.Aor,0);As.extent=this.M;As.Ba=BC;As.ML=Aqn;this.Eb=As;},ArJ:function(BC,L4){var
B;var Ev=this.OX;var As=this.Eb;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var Jx=[BC[2]-BC[0],BC[3]-BC[1]];var BP=x2-x1;var BG=
y2-y1;if(!L4){var MO=[(B=As.Ba)[2]-B[0],B[3]-B[1]];x1=x1-As.Ba[0];y1=y1-As.Ba[1];
if(MO[0]!==Jx[0]){var He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);var Pt=((Ev&0x1
)===0x1);if(!He&&(Pt||!Hf))x1=((x1*Jx[0])/MO[0])|0;if(!Hf&&(Pt||!He)){x2=x2-As.Ba[
0];x2=((x2*Jx[0])/MO[0])|0;x2=x2-Jx[0];}else x2=x2-As.Ba[2];x1=x1+BC[0];x2=x2+BC[
2];if(!Pt){if(He&&!Hf)x2=x1+BP;else if(!He&&Hf)x1=x2-BP;else{x1=x1+((((x2-x1)-BP
)/2)|0);x2=x1+BP;}}}else{x2=x2-As.Ba[2];x1=x1+BC[0];x2=x2+BC[2];}if(MO[1]!==Jx[1
]){var Hg=((Ev&0x10)===0x10);var Hd=((Ev&0x20)===0x20);var Pu=((Ev&0x2)===0x2);if(
!Hg&&(Pu||!Hd))y1=((y1*Jx[1])/MO[1])|0;if(!Hd&&(Pu||!Hg)){y2=y2-As.Ba[1];y2=((y2
*Jx[1])/MO[1])|0;y2=y2-Jx[1];}else y2=y2-As.Ba[3];y1=y1+BC[1];y2=y2+BC[3];if(!Pu
){if(Hg&&!Hd)y2=y1+BG;else if(!Hg&&Hd)y1=y2-BG;else{y1=y1+((((y2-y1)-BG)/2)|0);y2=
y1+BG;}}}else{y2=y2-As.Ba[3];y1=y1+BC[1];y2=y2+BC[3];}}else{switch(L4){case 3:{x1=
BC[0];x2=x1+BP;}break;case 4:{x2=BC[2];x1=x2-BP;}break;case 1:{y1=BC[1];y2=y1+BG;
}break;case 2:{y2=BC[3];y1=y2-BG;}break;default:;}if((L4===3)||(L4===4)){var Hg=((
Ev&0x10)===0x10);var Hd=((Ev&0x20)===0x20);var Pu=((Ev&0x2)===0x2);if(Pu){y1=BC[
1];y2=BC[3];}else if(Hg&&!Hd){y1=BC[1];y2=y1+BG;}else if(Hd&&!Hg){y2=BC[3];y1=y2-
BG;}else{y1=BC[1]+((((BC[3]-BC[1])-BG)/2)|0);y2=y1+BG;}}if((L4===1)||(L4===2)){var
He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);var Pt=((Ev&0x1)===0x1);if(Pt){x1=BC[
0];x2=BC[2];}else if(He&&!Hf){x1=BC[0];x2=x1+BP;}else if(Hf&&!He){x2=BC[2];x1=x2-
BP;}else{x1=BC[0]+((((BC[2]-BC[0])-BP)/2)|0);x2=x1+BP;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.S&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.G([x1,y1,x2,y2]);
this.Eb=As;}return[x2-x1,y2-y1];},Ak3:function(aOffset,Aql){if(Aql)this.M=A.aam(
this.M,aOffset);else this.G(A.aam(this.M,aOffset));},GetExtent:function(){return this.
M;},G:function(E){var B;if(A.z9(E,this.M))return;if(!!this.Aa&&((this.S&0x1)===0x1
))this.Aa.Bc(this.M);this.Eb=null;this.M=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.M);if((!!this.Aa&&((this.S&0x400)===0x400))&&!((this.Aa.S&0x2000)===0x2000
)){this.S=this.S|0x800;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);}}
,_Init:function(aArg){C.B4._Init.call(this,aArg);this.__proto__=C.Em;},_className:
"Core::RectView"};C.O={BY:null,BT:null,AGl:null,Hi:null,H1:null,VI:null,Anc:null
,A6:null,Gm:255,Init:function(aArg){this.Al();},JH:function(CJ,aClip,aOffset,B5,
aBlend){var B;B5=((B5+1)*this.Gm)>>8;aBlend=aBlend&&((this.S&0x2)===0x2);if(!this.
Hi||(CJ.C4===this))this.A77(CJ,aClip,A.aak(aOffset,this.M.slice(0,2)),B5,aBlend);
else{var BF=255|(255<<8)|(255<<16)|((B5&0xFF)<<24);this.Hi.Update();CJ.AZV(aClip
,this.Hi,0,A.aam(this.M,aOffset),B3,BF,BF,BF,BF,aBlend);}},Wu:function(CX,By,Nt,
AaN,AaS,AaR){var B;var X=this.BT;var AmJ=null;var Ay=BI;var Jy=null;var AW3=!!this.
VI&&(!!this.VI.Fh||!!this.VI.BY);if(((B=A.kz(CX,this.M))[0]>=B[2])||(B[1]>=B[3])
)return null;CX=A.aal(CX,this.M.slice(0,2));if(!!AaS){X=AaS;while(!!X&&(X.Aa!==this
))X=X.Aa;}while(!!X){if(((X.S&0x400)===0x400)&&!Jy){Jy=X.AG;while(!!Jy&&!((Jy.S&
0x200)===0x200))Jy=Jy.AG;if(!!Jy)Ay=A.kz(CX,Jy.GetExtent());else Ay=BI;}if(Jy===
X){Jy=null;Ay=BI;}if((((((X.S&0x8)===0x8)&&((X.S&0x10)===0x10))&&!((X.S&0x40000)===
0x40000))&&!((X.S&0x20000)===0x20000))&&(!((X.S&0x10000)===0x10000)||((this.H1.C4===
X)&&!AW3))){var extent=X.GetExtent();var AFR=AaN;var Amu=null;if(AFR===X)AFR=null;
if(((X.S&0x400)===0x400)){if(!(((B=A.kz(extent,Ay))[0]>=B[2])||(B[1]>=B[3])))Amu=
X.Wu(Ay,By,Nt,AFR,AaS,AaR);}else if(!(((B=A.kz(extent,CX))[0]>=B[2])||(B[1]>=B[3
]))||(AaN===X))Amu=X.Wu(CX,By,Nt,AFR,AaS,AaR);X=X.AG;if(!!Amu){if(!AmJ||((Amu.ArT<
AmJ.ArT)&&(Amu.ArT>=0)))AmJ=Amu;if(!Amu.ArT)X=null;}}else X=X.AG;AaS=null;}return AmJ;
},ArA:function(CX){var B;var F;var X=this.BY;var L7=BI;var Axb=true;var result=(
CX=F=A.aal(CX,this.M.slice(0,2)),F);while(!!X){if(((X.S&0x200)===0x200)){var Axa=(
C.Ac.isPrototypeOf(X)?X:null);L7=A.kz(CX,Axa.M);Axb=((Axa.S&0x1)===0x1);}if(((X.
S&0x1)===0x1)){if(((X.S&0x400)===0x400)){if(Axb){var Ay=A.kz(X.GetExtent(),L7);if(
!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))result=A.vS(result,X.ArA(Ay));}}else{var Ay=A.
kz(X.GetExtent(),CX);if(!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))result=A.vS(result,X.ArA(
Ay));}}X=X.Af;}return A.kz(A.aam(result,this.M.slice(0,2)),this.M);},CQ:function(
Af2,Ama){var B;var YI=this.S;C.Em.CQ.call(this,Af2,Ama);var Ajl=this.S^YI;if(!!this.
A6&&((Ajl&0x40)===0x40)){if(((this.S&0x40)===0x40))this.A6.CQ(0x40,0x0);else this.
A6.CQ(0x0,0x40);}if(!!this.H1&&((Ajl&0x40)===0x40)){if(((this.S&0x40)===0x40)&&((
this.H1.C4.S&0x14)===0x14))this.H1.C4.CQ(0x40,0x0);else this.H1.C4.CQ(0x0,0x40);
}if(!!Ajl){this.S=this.S|0x8000;A.ow([this,this.HL],this);}},G:function(E){var B;
if(A.z9(E,this.M))return;var AjJ=[(B=this.M)[2]-B[0],B[3]-B[1]];var AGt=[E[2]-E[
0],E[3]-E[1]];var Anj=!A.z8(AjJ,AGt);if(Anj&&!!this.Hi){this.Hi.AoY(AGt);A.vv(this
,0);A.vv(this.Hi,0);}C.Em.G.call(this,E);if((Anj&&(AjJ[0]>0))&&(AjJ[1]>0)){var Ba=[
].concat(B3,AjJ);var X=this.BY;while(!!X){if((!X.Eb&&(X.OX!==0x14))&&!((X.S&0x400
)===0x400))X.AqM(Ba,null);X=X.Af;}}if(Anj){this.S=this.S|0x5000;A.ow([this,this.
HL],this);}},AXW:function(Cw){var A8Z=(C.KeyEvent.isPrototypeOf(Cw)?Cw:null);var
DF=this.AGl;if(!A8Z)return null;while(!!DF&&(!DF.Bw||!DF.Gh(A8Z)))DF=DF.Af;return DF;
},Bup:function(H){if(!!this.Hi){this.Hi.C4=this;var Ay=A.aal(this.ArA(A.aam(this.
Hi.PK,this.M.slice(0,2))),this.M.slice(0,2));this.Hi.Asa(Ay,Ay,0x00000000,0x00000000
,0x00000000,0x00000000,false);this.A77(this.Hi,Ay,B3,255,true);this.Hi.C4=null;}
},A77:function(CJ,aClip,aOffset,B5,aBlend){var B;var X=this.BY;var L7=BI;var Axb=
true;this.Ba5(CJ,aClip,aOffset,B5,aBlend);while(!!X){if(((X.S&0x200)===0x200)){var
Axa=(C.Ac.isPrototypeOf(X)?X:null);L7=A.kz(aClip,A.aam(Axa.M,aOffset));Axb=((Axa.
S&0x1)===0x1);}if(((X.S&0x1)===0x1)){if(((X.S&0x400)===0x400)){if(Axb){var Ay=A.
kz(A.aam(X.GetExtent(),aOffset),L7);if(!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))X.JH(CJ
,Ay,aOffset,B5,aBlend);}}else{var Ay=A.kz(A.aam(X.GetExtent(),aOffset),aClip);if(
!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3])))X.JH(CJ,Ay,aOffset,B5,aBlend);}}X=X.Af;}this.Ba8(
CJ,aClip,aOffset,B5,aBlend);},A_K:function(){var B;var AWD=((this.S&0x1000)===0x1000
);var Agp=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];var Yu=false;var Aa9=BI;var Kg=BI;var
Yv=B3;var AqI=0;var AqJ=0;var AqH=0;var Po=0;var X=this.BT;var Jy=null;var AjA=null;
while(!!X){if(((X.S&0x800)===0x800)){Yu=true;X.S=X.S&~0x800;}if(Yu&&((X.S&0x200)===
0x200)){Yu=false;if(!!(C.Ac.isPrototypeOf(X)?X:null).AeT)X.S=X.S|0x1000;}X=X.AG;
}Yu=false;X=this.BY;if(AWD){this.S=this.S&~0x1000;AWD=!((Agp[0]>=Agp[2])||(Agp[1
]>=Agp[3]));}this.S=this.S|0x2000;while(!!X){if(!AjA&&(AqH!==Po)){var Abu=X;var AGQ=
0;var Axu=Aa9[2]-Aa9[0];var AvW=Aa9[3]-Aa9[1];var AFH=0;var Anx=B3;do if(((Abu.S&
0x200)===0x200))Abu=null;else if(((Abu.S&0x401)===0x401)){Anx=[(B=Abu.GetExtent(
))[2]-B[0],B[3]-B[1]];if((Po===3)||(Po===4))Axu=Axu-Anx[0];if((Po===1)||(Po===2)
)AvW=AvW-Anx[1];if(!AjA||((Axu>=0)&&(AvW>=0))){AjA=Abu;Abu=Abu.Af;if((Po===3)||(
Po===4)){Axu=Axu-AqI;if(Anx[1]>AGQ)AGQ=Anx[1];}if((Po===1)||(Po===2)){AvW=AvW-AqJ;
if(Anx[0]>AFH)AFH=Anx[0];}}else Abu=null;}else Abu=Abu.Af;while(!!Abu);if(!AjA)AjA=
Jy;Kg=Aa9;switch(AqH){case 9:case 11:Kg=[].concat(Kg.slice(0,3),Kg[1]+AGQ);break;
case 10:case 12:Kg=A.aaS(Kg,Kg[3]-AGQ);break;case 5:case 7:Kg=A.aaQ(Kg,Kg[0]+AFH
);break;case 6:case 8:Kg=[].concat(Kg[2]-AFH,Kg.slice(1,4));break;default:;}}if(((
X.S&0x400)===0x400)){if(!!X.Eb&&(X.Eb.ML!==Jy))X.Eb=null;if((!X.Eb&&Yu)&&((X.OX!==
0x14)||!!Po))X.AqM(Kg,Jy);}if(!!X.Eb){if(AWD&&!((X.S&0x400)===0x400))X.ArJ(Agp,0
);if(Yu&&((X.S&0x400)===0x400)){var CT=X.ArJ(A.aam(Kg,Yv),Po);if(((X.S&0x1)===0x1
)){var Bj=B3;switch(Po){case 3:Bj=[CT[0]+AqI,Bj[1]];break;case 4:Bj=[-CT[0]-AqI,
Bj[1]];break;case 1:Bj=[Bj[0],CT[1]+AqJ];break;case 2:Bj=[Bj[0],-CT[1]-AqJ];break;
default:;}Yv=A.aak(Yv,Bj);}}}if(((X.S&0x200)===0x200)){if(Yu)A.ow(Jy.Eu,Jy);Yu=((
X.S&0x1000)===0x1000);Jy=(C.Ac.isPrototypeOf(X)?X:null);if(Yu){X.S=X.S&~0x1000;AqH=
Jy.AeT;Po=AqH;Aa9=A.aam(Jy.M,Jy.Br);Kg=Aa9;Yv=B3;AqI=Jy.Space+Jy.APP;AqJ=Jy.Space;
Yu=!((Aa9[0]>=Aa9[2])||(Aa9[1]>=Aa9[3]));AjA=null;switch(AqH){case 9:case 10:Po=
3;break;case 11:case 12:Po=4;break;case 5:case 6:Po=1;break;case 7:case 8:Po=2;break;
default:;}}if(Yu)this.Bc(Jy.M);}if(X===AjA){switch(AqH){case 9:case 11:Yv=[0,(Yv[
1]+(Kg[3]-Kg[1]))+AqJ];break;case 10:case 12:Yv=[0,(Yv[1]-(Kg[3]-Kg[1]))-AqJ];break;
case 5:case 7:Yv=[(Yv[0]+(Kg[2]-Kg[0]))+AqI,0];break;case 6:case 8:Yv=[(Yv[0]-(Kg[
2]-Kg[0]))-AqI,0];break;default:;}AjA=null;}X=X.Af;}if(Yu)A.ow(Jy.Eu,Jy);this.S=
this.S&~0x2000;this.Bh([Agp[2]-Agp[0],Agp[3]-Agp[1]]);},HL:function(H){var B;var
Buy=((this.S&0x1000)===0x1000);if(((this.S&0x4000)===0x4000)){this.S=this.S&~0x4000;
this.A_K();}if(((this.S&0x8000)===0x8000)||Buy){this.S=this.S&~0x8000;this.Ai(this.
S);}},A8:function(E){var B;if(!!E&&(E.Aa!==this))throw new Error(EG);if(!!E&&!((
E.S&0x14)===0x14))E=null;if(!!E&&((E.S&0x10000)===0x10000))E=null;if(E===this.A6
)return;if(!!this.A6)this.A6.CQ(0x0,0x60);this.A6=E;if(!!E){if(((this.S&0x40)===
0x40))E.CQ(0x60,0x0);else E.CQ(0x20,0x0);}},A6o:function(Ao){this.A8(Ao);},ANL:function(
){return!!this.Hi;},AoP:function(E){var B;if(!!this.Hi===E)return;if(E){this.Hi=
A._NewObject(A.Graphics.Canvas,0);this.Hi.AoY([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Hi.AAE=[this,this.Bup];}else{this.Hi.AAE=null;this.Hi.AoY(B3);this.Hi=null;}if(!
!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);A.vv(this,0);},A2n:function(){
var B;return((this.S&0x10)===0x10);},An:function(E){if(E)this.CQ(0x10,0x0);else this.
CQ(0x0,0x10);},DC:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.Gm)return;
this.Gm=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},AUJ:function(Ao
){this.DC(Ao);},Aj:function(E){if(E)this.CQ(0x400,0x0);else this.CQ(0x0,0x400);}
,BeL:function(E){if(E)this.CQ(0x2,0x0);else this.CQ(0x0,0x2);},Fe:function(){var
B;return((this.S&0x1)===0x1);},W:function(E){if(E)this.CQ(0x1,0x0);else this.CQ(
0x0,0x1);},Ba8:function(CJ,aClip,aOffset,B5,aBlend){},Ba5:function(CJ,aClip,aOffset
,B5,aBlend){},GetMinimalSize:function(){return B3;},APW:function(HY,Ns,Vu,RU,RW,
Af1,Oh,Ql,KQ,KO,KP){var B;if(!this.H1){this.Air(HY,Ns,Vu,RU,RW,null,null,KQ,KO,KP
);return;}var AjI=this.H1;var Kn=AjI.Af;if(((HY.S&0x10000)===0x10000)&&(this.H1.
C4!==HY))throw new Error(Gr);var Abe=A._NewObject(C.AJw,0);var Qs=AjI.Qs;var QC=
null;var Lu=null;if(!!Kn){QC=Kn.QC;Lu=Kn.Lu;}if(!!Kn&&!!AjI.Anb)QC=AjI.Anb;if(!!
Kn&&!!Oh)Lu=Oh;if(!!Af1)Qs=Af1;if(!Ns)Ns=A._GetAutoObject(A.abm.Aud);if(!Vu)Vu=Ns;
if(!RW)RW=RU;if(!RU)RU=RW;Abe.Qs=Vu;Abe.Lu=RU;Abe.QC=RW;Abe.Anb=Ql;Abe.C4=HY;Abe.
Af=this.H1.Af;this.H1.Af=null;this.H1=Abe;if(this.A6===HY)this.A8(null);AjI.C4.CQ(
0x0,0x10040);if(((this.S&0x40)===0x40)&&((HY.S&0x4)===0x4))HY.CQ(0x10040,0x0);else
HY.CQ(0x10000,0x0);if(!!Lu){this.MY(Kn.C4,Lu.AbV(),null,null,KP);this.MY(AjI.C4,
Qs.QY(),null,null,true);this.MY(Abe.C4,Ns.QZ(),KQ,KO,true);}else if(!!QC){this.MY(
Kn.C4,QC.AbW(),null,null,KP);this.MY(AjI.C4,Qs.QY(),null,null,true);this.MY(Abe.
C4,Ns.QZ(),KQ,KO,true);}else if(!!Qs){this.MY(AjI.C4,Qs.QY(),null,null,KP);this.
MY(Abe.C4,Ns.QZ(),KQ,KO,true);}else this.MY(Abe.C4,Ns.QZ(),KQ,KO,KP);},AnT:function(
HY,Af1,Oh,Ql,KQ,KO,KP){var B;if(!this.H1)return;if(!HY)return;var JY=this.H1;var
Kn=this.H1.Af;var Aq4=null;while((!!JY&&(JY.C4!==HY))&&!!JY.Af){Aq4=JY;JY=Kn;Kn=
JY.Af;}if(!JY||(JY.C4!==HY))throw new Error(I4);if(!Aq4){this.H1=Kn;JY.Af=null;}
else{Aq4.Af=Kn;JY.Af=null;}JY.C4.CQ(0x0,0x10040);if(((((this.S&0x40)===0x40)&&!!
Kn)&&!Aq4)&&((Kn.C4.S&0x4)===0x4))Kn.C4.CQ(0x40,0x0);var Qs=JY.Qs;var QC=null;var
Lu=null;if(!!Kn)QC=Kn.QC;if(!!Kn&&!!JY.Anb)QC=JY.Anb;if(!!Kn&&!!Ql)QC=Ql;if(!!Aq4&&
!!Kn)Lu=Kn.Lu;if((!!Aq4&&!!Kn)&&!!Oh)Lu=Oh;if(!!Af1)Qs=Af1;if(!!Lu){this.MY(Kn.C4
,Lu.AbV(),null,null,KP);this.MY(JY.C4,Qs.QY(),KQ,KO,true);}else if(!!QC){this.MY(
Kn.C4,QC.AbW(),null,null,KP);this.MY(JY.C4,Qs.QY(),KQ,KO,true);}else this.MY(JY.
C4,Qs.QY(),KQ,KO,KP);},Air:function(HY,Ns,Vu,RU,RW,Oh,Ql,KQ,KO,KP){var B;if(!HY)
return;if(!!this.H1&&(this.H1.C4===HY)){this.APW(HY,Ns,Vu,RU,RW,null,Oh,Ql,KQ,KO
,KP);return;}if(((HY.S&0x10000)===0x10000))throw new Error(Gr);var JY=A._NewObject(
C.AJw,0);if(!!this.H1&&!this.H1.Lu){if(!Ql)Ql=Oh;if(!Oh)Oh=Ql;}var Lu=null;if(!!
this.H1)Lu=this.H1.Lu;if(!!this.H1&&!!Oh)Lu=Oh;if(!Ns)Ns=A._GetAutoObject(A.abm.
Aud);if(!Vu)Vu=Ns;if(!RW)RW=RU;if(!RU)RU=RW;JY.Qs=Vu;JY.Lu=RU;JY.QC=RW;JY.Anb=Ql;
if(this.A6===HY)this.A8(null);if(!!this.H1)this.H1.C4.CQ(0x0,0x40);if(((this.S&0x40
)===0x40)&&((HY.S&0x4)===0x4))HY.CQ(0x10040,0x0);else HY.CQ(0x10000,0x0);JY.C4=HY;
JY.Af=this.H1;this.H1=JY;if(!!Lu){this.MY(this.H1.Af.C4,Lu.AbV(),null,null,KP);this.
MY(HY,Ns.QZ(),KQ,KO,true);}else this.MY(HY,Ns.QZ(),KQ,KO,KP);},A00:function(Ae){
var B;return(B=Ae)&&((this.S&B)===B);},A1y:function(Ke){var tmp=this;while(!!tmp
){Ke=A.aaj(Ke,tmp.M.slice(0,2));tmp=tmp.Aa;}return Ke;},Bb1:function(Ke){var tmp=
this;while(!!tmp){Ke=A.aak(Ke,tmp.M.slice(0,2));tmp=tmp.Aa;}return Ke;},DispatchEvent:
function(Cw){var B;var X=this.A6;var BZ=(C.O.isPrototypeOf(X)?X:null);var FS=null;
var AW3=!!this.VI&&(!!this.VI.Fh||!!this.VI.BY);if(!!X&&((((X.S&0x10000)===0x10000
)||((X.S&0x40000)===0x40000))||((X.S&0x20000)===0x20000))){X=null;BZ=null;}if(!!
this.H1&&!AW3)FS=this.H1.C4.DispatchEvent(Cw);if(!FS&&!!BZ)FS=BZ.DispatchEvent(Cw
);else if(!FS&&!!X)FS=X.Gh(Cw);if(!FS)FS=this.Gh(Cw);if(!FS)FS=this.AXW(Cw);return FS;
},BroadcastEventAtPosition:function(Cw,KR,aFilter){var B;var X=this.BT;var FS=null;
while(!!X&&!FS){if((!aFilter||((B=aFilter)&&((X.S&B)===B)))&&A.vt(X.GetExtent(),
KR)){var BZ=(C.O.isPrototypeOf(X)?X:null);if(!!BZ)FS=BZ.BroadcastEventAtPosition(
Cw,A.aaj(KR,BZ.M.slice(0,2)),aFilter);else FS=X.Gh(Cw);}X=X.AG;}if(!FS)FS=this.Gh(
Cw);return FS;},BroadcastEvent:function(Cw,aFilter){var B;var X=this.BT;var FS=null;
while(!!X&&!FS){if(!aFilter||((B=aFilter)&&((X.S&B)===B))){var BZ=(C.O.isPrototypeOf(
X)?X:null);if(!!BZ)FS=BZ.BroadcastEvent(Cw,aFilter);else FS=X.Gh(Cw);}X=X.AG;}if(
!FS)FS=this.Gh(Cw);if(!FS)FS=this.AXW(Cw);return FS;},Bh:function(aSize){},Ai:function(
Ae){},Bcf:function(){this.S=this.S|0x4000;A.ow([this,this.HL],this);},Al:function(
){this.S=this.S|0x8000;A.ow([this,this.HL],this);},Bc:function(CX){var B;var BZ=
this;while(!!BZ&&!((CX[0]>=CX[2])||(CX[1]>=CX[3]))){var Yq=BZ.Hi;if(!BZ.Aa&&(BZ!==
this)){BZ.Bc(CX);return;}if(!!Yq){var Bsq=Yq.PK;Yq.PK=A.vS(Yq.PK,CX);if(!A.z9(Bsq
,Yq.PK)){A.vv(BZ,0);A.vv(Yq,0);}}if(!((BZ.S&0x1)===0x1))return;CX=A.kz(A.aam(CX,
BZ.M.slice(0,2)),BZ.M);BZ=BZ.Aa;}},Q8:function(Ag,GJ,aFilter){var B;if(!Ag||(Ag.
Aa!==this))return null;var Aea=A.zT(Ag.GetExtent());var X=Ag;var AVR=null;var A7I=
0;var It=0x10000;var AGL;if(((aFilter&0x10000)===0x10000))It=0x0;var top=((GJ===
4)||(GJ===1))||(GJ===6);var bottom=((GJ===5)||(GJ===3))||(GJ===8);var left=((GJ===
2)||(GJ===1))||(GJ===3);var right=((GJ===7)||(GJ===6))||(GJ===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AG;if(!X)X=this.BT;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.S&B)===B))))&&(!It||!((B=It)&&((X.S&B)===B
))))for(AGL=0;AGL<2;AGL++){var AL=X.GetExtent();var s=[AL[2]-AL[0],AL[3]-AL[1]];
if(!!!AGL){if((left&&(s[0]>s[1]))&&(AL[2]<Aea[0]))AL=[].concat(AL[2]-s[1],AL.slice(
1,4));if((right&&(s[0]>s[1]))&&(AL[0]>Aea[0]))AL=A.aaQ(AL,AL[0]+s[1]);if((top&&(
s[1]>s[0]))&&(AL[3]<Aea[1]))AL=A.aaS(AL,AL[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(AL[
1]>Aea[1]))AL=[].concat(AL.slice(0,3),AL[1]+s[0]);}var Bj=A.aaj(A.zT(AL),Aea);var
Qn=Bj;if(Qn[0]<0)Qn=[-Qn[0],Qn[1]];if(Qn[1]<0)Qn=[Qn[0],-Qn[1]];if(((((!left||(Bj[
0]<=-Qn[1]))&&(!right||(Bj[0]>=Qn[1])))&&(!top||(Bj[1]<=-Qn[0])))&&(!bottom||(Bj[
1]>=Qn[0])))&&((Qn[0]>0)||(Qn[1]>0))){var Qu=Bj[0];var Qv=Bj[1];var IO=Math.sqrt((
Qu*Qu)+(Qv*Qv));var AGj=0;if(!left&&!right)AGj=IO/Qn[1];if(!top&&!bottom)AGj=IO/
Qn[0];IO=(IO*AGj)*AGj;if((IO<A7I)||!AVR){A7I=IO;AVR=X;}}}}return AVR;},An0:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Aa!==this))return null;var X=this.BT;var It=0x10000;
if(((aFilter&0x10000)===0x10000))It=0x0;if(!!Ag)X=Ag.AG;while(!!X){if((!aFilter||((
B=aFilter)&&((X.S&B)===B)))&&(!It||!((B=It)&&((X.S&B)===B))))return X;X=X.AG;}return null;
},Zp:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Aa!==this))return null;var X=this.BY;
var It=0x10000;if(((aFilter&0x10000)===0x10000))It=0x0;if(!!Ag)X=Ag.Af;while(!!X
){if((!aFilter||((B=aFilter)&&((X.S&B)===B)))&&(!It||!((B=It)&&((X.S&B)===B))))return X;
X=X.Af;}return null;},Ay_:function(Ag,aFilter){var B;if(!Ag||(Ag.Aa!==this))return null;
var AjG=Ag.Af;var AjV=Ag.AG;var It=0x10000;if(((aFilter&0x10000)===0x10000))It=0x0;
while(!!AjG||!!AjV){if((!!AjG&&(!aFilter||((B=aFilter)&&((AjG.S&B)===B))))&&(!It||
!((B=It)&&((AjG.S&B)===B))))return AjG;if((!!AjV&&(!aFilter||((B=aFilter)&&((AjV.
S&B)===B))))&&(!It||!((B=It)&&((AjV.S&B)===B))))return AjV;if(!!AjG)AjG=AjG.Af;if(
!!AjV)AjV=AjV.AG;}return null;},Dd:function(aFilter){var B;var X=this.BY;var Ay=
BI;var It=0x10000;if(((aFilter&0x10000)===0x10000))It=0x0;while(!!X){if((!((X.S&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.S&B)===B))))&&(!It||!((B=It)&&((X.
S&B)===B))))Ay=A.vS(Ay,X.GetExtent());X=X.Af;}return Ay;},MY:function(JW,Fg,KQ,KO
,KP){var B;if(!JW)return;if(!Fg)throw new Error(Ip);if((!!Fg.O||!!Fg.Aa)||!!Fg.Ou
)throw new Error(Oc);if(!!JW.Aa&&(JW.Aa!==this))throw new Error(Pb);if(!this.VI)
this.VI=A._NewObject(C.AP1,0);Fg.Aa=this;Fg.O=JW;Fg.AGw=KO;Fg.AXo=KQ;if(!!JW.Anc
)JW.Anc.Ou.Bhk(JW.Anc);JW.Anc=Fg;JW.S=JW.S|0x20000;if((KP&&!!this.VI.BT)&&!this.
VI.BT.AME())(A.abm.Ay6.isPrototypeOf(B=this.VI.BT)?B:null).AYV(Fg);else{var Ou=A.
_NewObject(A.abm.Ay6,0);Ou.AYV(Fg);this.VI.A4D(Ou,false);}},Alw:function(Ag,Jt){
var B;if(!Ag)throw new Error(Nm);if(Ag.Aa!==this)throw new Error(Cv);if(!!Jt&&(Jt.
Aa!==this))throw new Error(FK);if(Ag.Af===Jt)return;if(((Ag.S&0x401)===0x401)){if(
!!Ag.AG&&!!Ag.Eb)Ag.AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([
this,this.HL],this);}if(((Ag.S&0x200)===0x200)){if(!!Ag.AG)Ag.AG.S=Ag.AG.S|0x800;
Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HL],this);}if(!!Ag.Af)Ag.Af.
AG=Ag.AG;else this.BT=Ag.AG;if(!!Ag.AG)Ag.AG.Af=Ag.Af;else this.BY=Ag.Af;var FQ=
null;var H0=this.BT;var KZ=Ag.Jo;if(!!Jt){FQ=Jt;H0=Jt.AG;}if(!!FQ&&(KZ>FQ.Jo))KZ=
FQ.Jo;if(!!H0&&(KZ<H0.Jo))KZ=H0.Jo;if(KZ!==Ag.Jo){Ag.Aa=null;Ag.A33(KZ);Ag.Aa=this;
}if(!Jt){if(!!this.BT)this.BT.Af=Ag;Ag.AG=this.BT;Ag.Af=null;this.BT=Ag;}else{Ag.
Af=Jt;Ag.AG=Jt.AG;Jt.AG=Ag;if(!!Ag.AG)Ag.AG.Af=Ag;}if(this.BY===Jt)this.BY=Ag;if(((
Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent());},SZ:function(Ag){var B;if(!Ag)throw new
Error(Nm);if(Ag.Aa!==this)throw new Error(Cv);if(!Ag.Af)return;var H0=this.BT;var
KZ=Ag.Jo;while(!!H0&&(H0.Jo>KZ))H0=H0.AG;if(((H0===Ag)||!H0)||(H0.Af===Ag))return;
if(((Ag.S&0x401)===0x401)){if(!!Ag.AG&&!!Ag.Eb)Ag.AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;
this.S=this.S|0x4000;A.ow([this,this.HL],this);}if(((Ag.S&0x200)===0x200)){if(!!
Ag.AG)Ag.AG.S=Ag.AG.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HL],this);}if(!
!Ag.AG)Ag.AG.Af=Ag.Af;else this.BY=Ag.Af;Ag.Af.AG=Ag.AG;Ag.AG=H0;Ag.Af=H0.Af;H0.
Af=Ag;if(!!Ag.Af)Ag.Af.AG=Ag;else this.BT=Ag;if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent(
));},Lg:function(Ag,Pg){var B;if(!Ag)throw new Error(Nm);if(Ag.Aa!==this)throw new
Error(Cv);var H0=Ag;var FQ=Ag;var KZ=Ag.Jo;while(((Pg>0)&&!!H0.Af)&&(H0.Af.Jo<=KZ
)){H0=H0.Af;Pg=Pg-1;}while(((Pg<0)&&!!FQ.AG)&&(FQ.AG.Jo>=KZ)){FQ=FQ.AG;Pg=Pg+1;}
if((H0===Ag)&&(FQ===Ag))return;if(((Ag.S&0x401)===0x401)){if(!!Ag.AG&&!!Ag.Eb)Ag.
AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HL],this
);}if(((Ag.S&0x200)===0x200)){if(!!Ag.AG)Ag.AG.S=Ag.AG.S|0x800;Ag.S=Ag.S|0x800;this.
S=this.S|0x4000;A.ow([this,this.HL],this);}if(!!Ag.AG)Ag.AG.Af=Ag.Af;if(!!Ag.Af)
Ag.Af.AG=Ag.AG;if(this.BY===Ag)this.BY=Ag.Af;if(this.BT===Ag)this.BT=Ag.AG;if(H0
!==Ag){Ag.Af=H0.Af;Ag.AG=H0;H0.Af=Ag;if(!!Ag.Af)Ag.Af.AG=Ag;}if(FQ!==Ag){Ag.Af=FQ;
Ag.AG=FQ.AG;FQ.AG=Ag;if(!!Ag.AG)Ag.AG.Af=Ag;}if(!Ag.Af)this.BT=Ag;if(!Ag.AG)this.
BY=Ag;if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent());},HW:function(Ag){var B;if(!
Ag)throw new Error(Od);if(Ag.Aa!==this)throw new Error(Cv);if((((Ag.S&0x401)===0x401
)&&!!Ag.AG)&&!!Ag.Eb){Ag.AG.S=Ag.AG.S|0x800;this.S=this.S|0x4000;A.ow([this,this.
HL],this);}if(((Ag.S&0x200)===0x200)){if(!!Ag.AG)Ag.AG.S=Ag.AG.S|0x800;this.S=this.
S|0x4000;A.ow([this,this.HL],this);}Ag.Eb=null;if(this.A6===Ag)this.A8(this.Ay_(
Ag,0x14));if(!!Ag.AG)Ag.AG.Af=Ag.Af;if(!!Ag.Af)Ag.Af.AG=Ag.AG;if(this.BY===Ag)this.
BY=Ag.Af;if(this.BT===Ag)this.BT=Ag.AG;Ag.Aa=null;Ag.Af=null;Ag.AG=null;if(((Ag.
S&0x1)===0x1))this.Bc(Ag.GetExtent());},AHS:function(Ag,Jt){var B;if(!Ag)throw new
Error(Nn);if(!!Ag.Aa)throw new Error(Ka);if(!!Jt&&(Jt.Aa!==this))throw new Error(
FK);var FQ=null;var H0=this.BT;var KZ=Ag.Jo;if(!!Jt){FQ=Jt;H0=Jt.AG;}if(!!FQ&&(KZ>
FQ.Jo))KZ=FQ.Jo;if(!!H0&&(KZ<H0.Jo))KZ=H0.Jo;if(KZ!==Ag.Jo){Ag.Aa=null;Ag.A33(KZ
);Ag.Aa=this;}if(!Jt){if(!!this.BT)this.BT.Af=Ag;Ag.AG=this.BT;this.BT=Ag;}else{
Ag.Af=Jt;Ag.AG=Jt.AG;Jt.AG=Ag;if(!!Ag.AG)Ag.AG.Af=Ag;}Ag.Aa=this;if(this.BY===Jt
)this.BY=Ag;if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent());if(((!this.A6&&((Ag.S&
0x4)===0x4))&&((Ag.S&0x10)===0x10))&&!((Ag.S&0x10000)===0x10000))this.A8(Ag);if(((
Ag.S&0x401)===0x401)){Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.HL],this
);}if(((Ag.S&0x200)===0x200)){Ag.S=Ag.S|0x800;this.S=this.S|0x4000;A.ow([this,this.
HL],this);}},J:function(Ag,Pg){var B;if(!Ag)throw new Error(Nn);if(!!Ag.Aa)throw new
Error(Ka);var FQ=null;var KZ=Ag.Jo;if(((Pg<0)&&!!this.BT)&&(this.BT.Jo>=KZ)){FQ=
this.BT;Pg=Pg+1;}while((((Pg<0)&&!!FQ)&&!!FQ.AG)&&(FQ.AG.Jo>=KZ)){FQ=FQ.AG;Pg=Pg+
1;}if((!FQ&&!!this.BT)&&(this.BT.Jo>KZ))FQ=this.BT;while((!!FQ&&!!FQ.AG)&&(FQ.AG.
Jo>KZ))FQ=FQ.AG;if(!FQ){Ag.Aa=this;Ag.AG=this.BT;if(!!this.BT)this.BT.Af=Ag;if(!
this.BY)this.BY=Ag;this.BT=Ag;}else{Ag.Aa=this;Ag.AG=FQ.AG;Ag.Af=FQ;FQ.AG=Ag;if(
!!Ag.AG)Ag.AG.Af=Ag;else this.BY=Ag;}if(((Ag.S&0x1)===0x1))this.Bc(Ag.GetExtent(
));if(((!this.A6&&((Ag.S&0x4)===0x4))&&((Ag.S&0x10)===0x10))&&!((Ag.S&0x10000)===
0x10000))this.A8(Ag);if(((Ag.S&0x401)===0x401)){Ag.S=Ag.S|0x800;this.S=this.S|0x4000;
A.ow([this,this.HL],this);}if(((Ag.S&0x200)===0x200)){Ag.S=Ag.S|0x800;this.S=this.
S|0x4000;A.ow([this,this.HL],this);}},A2p:function(){return this.A6;},As8:function(
){return this.Gm;},_Init:function(aArg){C.Em._Init.call(this,aArg);this.__proto__=
C.O;this.S=0x1F;this.Init(aArg);},_Mark:function(D){var B;C.Em._Mark.call(this,D
);if((B=this.BY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AGl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Hi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.H1)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.VI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Anc)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Group"};C.Root={Qy:null,I$:null,EW:A.aan(10,null,null),Aqv:null,Aga:null,
AxR:0,HG:0,Lp:A.aan(10,0,null),AFN:A.aan(10,A.vx,null),VH:A.aan(10,0,null),AdY:A.
aan(10,A.vw,null),AqA:A.aan(10,0,null),Af$:A.aan(10,A.vw,null),VG:A.aan(10,A.vw,
null),Qr:A.aan(10,A.vw,null),Aa1:A.aan(10,A.vw,null),Eo:0,AF9:0,AF8:0,NK:A.aan(4
,0,null),JE:A.aan(4,A.vx,null),JA:0,AwG:0,AqP:0,Awv:true,Init:function(aArg){if(
!!!this.I){var obj=this;A.aaG(obj);}},HO:function(){return this;},JH:function(CJ
,aClip,aOffset,B5,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(!fullScreenUpdate
)CJ.Asa(aClip,A.aam(A.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.O.JH.call(this,CJ,aClip,aOffset,B5,aBlend);},CQ:
function(Af2,Ama){var B;C.O.CQ.call(this,Af2,Ama);if(!this.Aa&&(((Af2&0x1)===0x1
)||((Ama&0x1)===0x1)))this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Aa&&(((
Af2&0x2)===0x2)||((Ama&0x2)===0x2)))this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);
},A8:function(E){if((E!==null)||!E)C.O.A8.call(this,E);},AoP:function(E){var B;var
Bso=this.Hi;C.O.AoP.call(this,E);if(((Bso!==this.Hi)&&!this.Aa)&&((this.S&0x1)===
0x1))this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DC:function(E){var B;var BR=this.
Gm;C.O.DC.call(this,E);if(((BR!==this.Gm)&&!this.Aa)&&((this.S&0x1)===0x1))this.
Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(Cw){if(!!Cw){Cw.
AsN=!!this.HG;if(!!this.HG)Cw.Bp=this.HG;}var FS=null;if(!!this.I$){FS=this.I$.C4.
DispatchEvent(Cw);if(!FS)FS=this.Gh(Cw);if(!FS)FS=this.AXW(Cw);this.HG=0;return FS;
}FS=C.O.DispatchEvent.call(this,Cw);this.HG=0;return FS;},BroadcastEvent:function(
Cw,aFilter){if(!!Cw){Cw.AsN=!!this.HG;if(!!this.HG)Cw.Bp=this.HG;}var FS=C.O.BroadcastEvent.
call(this,Cw,aFilter);this.HG=0;return FS;},Bc:function(CX){var B;if(this.AxR>0)
throw new Error(Oe);if(!!this.Hi&&!this.Aa){if(((B=this.Hi.PK)[0]>=B[2])||(B[1]>=
B[3])){A.vv(this,0);A.vv(this.Hi,0);}this.Hi.PK=A.vS(this.Hi.PK,CX);}var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(fullScreenUpdate)CX=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Aa){C.O.Bc.call(this,CX);return;}CX=A.kz(A.aam(CX,this.M.slice(0
,2)),this.M);if((CX[0]>=CX[2])||(CX[1]>=CX[3]))return;var P;for(P=0;P<this.JA;P=
P+1)if(!(((B=A.kz(this.JE.Get(P),CX))[0]>=B[2])||(B[1]>=B[3]))){this.JE.Set(P,A.
vS(this.JE.Get(P),CX));this.NK.Set(P,A.zS(this.JE.Get(P)));return;}if(this.JA<3){
this.JE.Set(this.JA,CX);this.NK.Set(this.JA,A.zS(CX));this.JA=this.JA+1;return;}
var HJ;var Qx;var AwF=0;var AwH=0;var A7H=2147483647;this.JE.Set(this.JA,CX);this.
NK.Set(this.JA,A.zS(CX));for(HJ=0;HJ<=this.JA;HJ=HJ+1)for(Qx=HJ+1;Qx<=this.JA;Qx=
Qx+1){var AG_=A.zS(A.vS(this.JE.Get(HJ),this.JE.Get(Qx)));var A_l=((AG_<<8)/(this.
NK.Get(HJ)+this.NK.Get(Qx)))|0;if(A_l<A7H){A7H=A_l;AwF=HJ;AwH=Qx;}}this.JE.Set(AwF
,A.vS(this.JE.Get(AwF),this.JE.Get(AwH)));this.NK.Set(AwF,A.zS(this.JE.Get(AwF))
);if(AwH!==this.JA){this.JE.Set(AwH,this.JE.Get(this.JA));this.NK.Set(AwH,this.NK.
Get(this.JA));}},Bq9:function(){var KW=A._NewObject(C.AnV,0);KW.AsN=!!this.HG;if(
!!this.HG)KW.Bp=this.HG;return KW;},Ams:function(){var KW=A._NewObject(C.AbY,0);
KW.AsN=!!this.HG;if(!!this.HG)KW.Bp=this.HG;return KW;},Aqz:function(){var KW=A.
_NewObject(C.ArP,0);KW.AsN=!!this.HG;if(!!this.HG)KW.Bp=this.HG;return KW;},Bra:
function(H){var P;var AmJ=false;for(P=0;P<10;P=P+1)if(!!this.EW.Get(P)){var pos=
this.Qr.Get(P);var BZ=this.EW.Get(P).Aa;while(!!BZ&&(BZ!==this)){pos=A.aaj(pos,BZ.
M.slice(0,2));BZ=BZ.Aa;}if(!BZ&&(this.EW.Get(P)!==this)){var tmp=this.EW.Get(P);
this.Eo=P;this.EW.Set(P,null);tmp.Gh(this.Ams().InitializeUp(P,this.Af$.Get(P),this.
AdY.Get(P),this.VH.Get(P),this.Lp.Get(P)+1,this.VG.Get(P),false,this.Qr.Get(P),this.
Aa1.Get(P)));this.BroadcastEvent(this.Aqz().InitializeUp(P,this.Lp.Get(P)+1,false
,tmp,this.Qr.Get(P)),0x18);}else{this.VH.Set(P,(this.Aga.Bp-this.AqA.Get(P))|0);
if(this.VH.Get(P)<10)this.VH.Set(P,10);this.Eo=P;this.EW.Get(P).Gh(this.Ams().InitializeHold(
P,pos,this.AdY.Get(P),this.VH.Get(P),this.Lp.Get(P)+1,this.VG.Get(P),this.Qr.Get(
P),this.Aa1.Get(P)));AmJ=true;}}if(!AmJ)this.Aga.An(false);},GetFPS:function(){var
ticksCount=0;var A8i=0;ticksCount=((new Date).getTime()-A.vs)|0;if(!!this.AF9&&(
ticksCount>this.AF9))A8i=((this.AF8*1000)/((ticksCount-this.AF9)|0))|0;this.AF8=
0;this.AF9=ticksCount;return A8i;},Update:function(){var B;if(!this.Aqv)this.Aqv=
A._NewObject(A.Graphics.Canvas,0);this.Aqv.AoY([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
Aqv.Update();return this.UpdateGE20(this.Aqv);},UpdateGE20:function(CJ){if(!this.
BeginUpdate())return BI;var Aek=this.UpdateCanvas(CJ,B3);this.EndUpdate();return Aek;
},EndUpdate:function(){if(this.JA>0){this.AF8=this.AF8+1;this.JA=0;}},UpdateCanvas:
function(CJ,aOffset){var B;var Aek=BI;var BqS=[].concat(aOffset,A.aak(CJ.FrameSize
,aOffset));var P;var HJ=this.JA;this.AxR=this.AxR+1;CJ.C4=this;for(P=0;(P<HJ)&&(
P<4);P=P+1)if(this.NK.Get(P)>0){this.JH(CJ,A.aal(this.JE.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);Aek=A.vS(Aek,A.kz(BqS,this.JE.Get(P)));}else HJ=HJ+1;CJ.
C4=null;this.AxR=this.AxR-1;if(!((Aek[0]>=Aek[2])||(Aek[1]>=Aek[3])))return A.aal(
Aek,aOffset);else return Aek;},GetUpdateRegion:function(AE7){var P;var HJ=this.JA;
if(AE7<0)return BI;for(P=0;(P<HJ)&&(P<4);P=P+1)if(!this.NK.Get(P)){HJ=HJ+1;AE7=AE7+
1;}else if(P===AE7)return this.JE.Get(P);return BI;},BeginUpdate:function(){var B;
var P;if(!!this.JA&&!A.z9(this.JE.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
A$n=A.aan(3,A.vx,null);var A$m=this.JA;for(P=0;P<A$m;P++)A$n.Set(P,this.JE.Get(P
));for(P=0;P<A$m;P++){var A_F=A.aam(A$n.Get(P),this.M.slice(0,2));var A_G=this.ArA(
A_F);if(!A.z9(A_F,A_G))this.Bc(A.aal(A_G,this.M.slice(0,2)));}}var HJ;var Qx;for(
HJ=0;HJ<(this.JA-1);HJ++)if(this.NK.Get(HJ)>0)for(Qx=HJ+1;Qx<this.JA;Qx++)if(this.
NK.Get(Qx)>0){var AG_=A.zS(A.vS(this.JE.Get(HJ),this.JE.Get(Qx)));if(((AG_-this.
NK.Get(HJ))-this.NK.Get(Qx))<0){this.JE.Set(HJ,A.vS(this.JE.Get(HJ),this.JE.Get(
Qx)));this.NK.Set(HJ,AG_);this.NK.Set(Qx,0);}}for(P=this.JA-1;P>=0;P--)if(!this.
NK.Get(P))this.JA=this.JA-1;return this.JA;},DoesNeedUpdate:function(){if(this.JA>
0)return true;return false;},Initialize:function(aSize){this.G([].concat(B3,aSize
));if(this.Awv)this.S=this.S|0x60;else this.S=this.S|0x20;this.Bc(this.M);return this;
},SetRootFocus:function(AVg){if(AVg===this.Awv)return false;this.Awv=AVg;if(!AVg
){if(!!this.I$)this.I$.C4.CQ(0x0,0x40);else this.CQ(0x0,0x40);}else if(!!this.I$
)this.I$.C4.CQ(0x40,0x0);else this.CQ(0x40,0x0);return true;},SetUserInputTimestamp:
function(Ph){this.HG=Ph;},DriveKeyboardHitting:function(JV,Avy,RS){var B;var AXX=
!!this.Qy;if(!!this.Qy&&((!RS||(this.AwG!==JV))||(this.AqP!==Avy))){var KW=null;
var X=(C.B4.isPrototypeOf(B=this.Qy)?B:null);var DF=(C.B0.isPrototypeOf(B=this.Qy
)?B:null);if(!!this.AwG)KW=A._NewObject(C.KeyEvent,0).Initialize(this.AwG,false);
if(this.AqP!==0x00)KW=A._NewObject(C.KeyEvent,0).Initialize2(this.AqP,false);if(
!!DF)DF.Gh(KW);else if(!!X)X.Gh(KW);this.AwG=0;this.AqP=0x00;this.Qy=null;}if(!!
this.Qy){var KW=null;var X=(C.B4.isPrototypeOf(B=this.Qy)?B:null);var DF=(C.B0.isPrototypeOf(
B=this.Qy)?B:null);if(!!JV)KW=A._NewObject(C.KeyEvent,0).Initialize(JV,true);if(
this.AqP!==0x00)KW=A._NewObject(C.KeyEvent,0).Initialize2(Avy,true);if(!!DF)DF.Gh(
KW);else if(!!X)X.Gh(KW);}if(!this.Qy&&RS){if(!!JV)this.Qy=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(JV,true));if(Avy!==0x00)this.Qy=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Avy,true));if(!(C.B0.isPrototypeOf(B=this.
Qy)?B:null)&&!(C.B4.isPrototypeOf(B=this.Qy)?B:null))this.Qy=null;this.AwG=JV;this.
AqP=Avy;AXX=AXX||!!this.Qy;}this.HG=0;return AXX;},DriveCursorMovement:function(
E6){return this.DriveMultiTouchMovement(this.Eo,E6);},DriveMultiTouchMovement:function(
By,E6){if((By<0)||(By>9)){this.HG=0;return false;}var EX=A.aaj(E6,this.Qr.Get(By
));this.Qr.Set(By,E6);if(!this.EW.Get(By)||A.z8(EX,B3)){this.HG=0;return false;}
var pos=E6;var BZ=this.EW.Get(By).Aa;while(!!BZ&&(BZ!==this)){pos=A.aaj(pos,BZ.M.
slice(0,2));BZ=BZ.Aa;}if(!BZ&&(this.EW.Get(By)!==this)){var tmp=this.EW.Get(By);
this.Eo=By;this.EW.Set(By,null);tmp.Gh(this.Ams().InitializeUp(By,this.Af$.Get(By
),this.AdY.Get(By),this.VH.Get(By),this.Lp.Get(By)+1,this.VG.Get(By),false,this.
Qr.Get(By),this.Aa1.Get(By)));this.BroadcastEvent(this.Aqz().InitializeUp(By,this.
Lp.Get(By)+1,false,tmp,E6),0x18);}else{this.Af$.Set(By,pos);this.Eo=By;this.EW.Get(
By).Gh(this.Bq9().Initialize(By,pos,this.AdY.Get(By),EX,this.VH.Get(By),this.Lp.
Get(By)+1,this.VG.Get(By),E6,this.Aa1.Get(By)));}this.HG=0;return true;},DriveCursorHitting:
function(RS,By,E6){return this.DriveMultiTouchHitting(RS,By,E6);},DriveMultiTouchHitting:
function(RS,By,E6){if((By<0)||(By>9)){this.HG=0;return false;}var ticksCount=this.
HG;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;var BtT=this.HG;this.
DriveMultiTouchMovement(By,E6);E6=this.Qr.Get(By);this.HG=BtT;if(RS)this.Aa1.Set(
By,E6);if(RS&&!this.EW.Get(By)){var I_;var pos=E6;if(A.vt(this.AFN.Get(By),E6)&&((
ticksCount-this.AqA.Get(By))<=250))this.Lp.Set(By,this.Lp.Get(By)+1);else this.Lp.
Set(By,0);this.AFN.Set(By,A.aam(MB,E6));this.AqA.Set(By,ticksCount);if(!!this.I$
)I_=this.Wu(A.aam(MB,E6),By,this.Lp.Get(By)+1,this.I$.C4,null,0x0);else I_=this.
Wu(A.aam(MB,E6),By,this.Lp.Get(By)+1,null,null,0x0);if(!!I_){this.BroadcastEvent(
this.Aqz().InitializeDown(By,this.Lp.Get(By)+1,false,I_.B4,E6),0x18);this.EW.Set(
By,I_.B4);this.VG.Set(By,I_.Dm);}else{this.EW.Set(By,null);this.VG.Set(By,B3);this.
HG=0;return false;}var BZ=I_.B4.Aa;while(!!BZ&&(BZ!==this)){pos=A.aaj(pos,BZ.M.slice(
0,2));BZ=BZ.Aa;}this.AdY.Set(By,pos);this.Af$.Set(By,pos);this.VH.Set(By,0);this.
Aga.An(true);this.Eo=By;this.EW.Get(By).Gh(this.Ams().InitializeDown(By,pos,this.
Lp.Get(By)+1,this.VG.Get(By),false,E6));this.HG=0;return true;}if(!RS&&!!this.EW.
Get(By)){var pos=E6;var BZ=this.EW.Get(By).Aa;while(!!BZ&&(BZ!==this)){pos=A.aaj(
pos,BZ.M.slice(0,2));BZ=BZ.Aa;}if(!BZ)pos=this.Af$.Get(By);this.Eo=By;var tmp=this.
EW.Get(By);this.EW.Set(By,null);tmp.Gh(this.Ams().InitializeUp(By,pos,this.AdY.Get(
By),this.VH.Get(By),this.Lp.Get(By)+1,this.VG.Get(By),false,E6,this.Aa1.Get(By))
);this.BroadcastEvent(this.Aqz().InitializeUp(By,this.Lp.Get(By)+1,false,tmp,E6)
,0x18);this.HG=0;return true;}this.HG=0;return false;},APp:function(Yl,A67,AaS,AaR
){if(Yl===this)Yl=null;if(!!!Yl&&!!this.I$)Yl=this.I$.C4;if(!this.EW.Get(this.Eo
))return;var I_;I_=this.Wu(A.aam(MB,this.Qr.Get(this.Eo)),this.Eo,1,Yl,AaS,AaR);
if(!!I_&&(this.EW.Get(this.Eo)!==I_.B4))this.AJp(I_.B4,I_.Dm);if(!I_&&(this.EW.Get(
this.Eo)!==A67))this.AJp(A67,B3);},AJp:function(Yl,Vv){if(!this.EW.Get(this.Eo)||(
this.EW.Get(this.Eo)===Yl))return;var tmp=this.EW.Get(this.Eo);this.EW.Set(this.
Eo,null);tmp.Gh(this.Ams().InitializeUp(this.Eo,this.Af$.Get(this.Eo),this.AdY.Get(
this.Eo),this.VH.Get(this.Eo),this.Lp.Get(this.Eo)+1,this.VG.Get(this.Eo),true,this.
Qr.Get(this.Eo),this.Aa1.Get(this.Eo)));this.BroadcastEvent(this.Aqz().InitializeUp(
this.Eo,this.Lp.Get(this.Eo)+1,true,tmp,this.Qr.Get(this.Eo)),0x18);var pos=this.
Qr.Get(this.Eo);var BZ=null;if(!!Yl)BZ=Yl.Aa;while(!!BZ&&(BZ!==this)){pos=A.aaj(
pos,BZ.M.slice(0,2));BZ=BZ.Aa;}if(!BZ&&(Yl!==this)){this.EW.Set(this.Eo,null);return;
}this.BroadcastEvent(this.Aqz().InitializeDown(this.Eo,this.Lp.Get(this.Eo)+1,true
,Yl,this.Qr.Get(this.Eo)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.vs)|0;this.EW.Set(this.Eo,Yl);this.VG.Set(this.Eo,Vv);this.AdY.Set(this.Eo,pos
);this.Af$.Set(this.Eo,pos);this.Lp.Set(this.Eo,0);this.VH.Set(this.Eo,0);this.AqA.
Set(this.Eo,ticksCount);this.Aa1.Set(this.Eo,this.Qr.Get(this.Eo));this.EW.Get(this.
Eo).Gh(this.Ams().InitializeDown(this.Eo,pos,this.Lp.Get(this.Eo)+1,this.VG.Get(
this.Eo),true,this.Aa1.Get(this.Eo)));},BbR:function(){if(!!this.I$)return this.
I$.C4;return null;},Ay2:function(JW){var B;if(!JW)throw new Error(Pc);if(!((JW.S&
0x80)===0x80))throw new Error(RL);if(this.I$.C4===JW)this.I$=this.I$.Af;else{var
Awu=this.I$;while(Awu.Af.C4!==JW)Awu=Awu.Af;Awu.Af=Awu.Af.Af;}JW.CQ(0x0,0xC0);if(
this.Awv){if(!!this.I$)this.I$.C4.CQ(0x40,0x0);else this.CQ(0x40,0x0);}},AIB:function(
JW){var B;var As=A._NewObject(C.A1H,0);if(!JW)throw new Error(Ti);if(JW===null)throw new
Error(Ve);if(((JW.S&0x80)===0x80))throw new Error(Vf);if(!!this.I$)this.I$.C4.CQ(
0x0,0x40);else this.CQ(0x0,0x40);As.Af=this.I$;As.C4=JW;this.I$=As;if(this.Awv)JW.
CQ(0xC0,0x0);else JW.CQ(0x80,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Aga={I:this},0);(this.EW=[]).__proto__=C.Root.EW;(this.
Lp=[]).__proto__=C.Root.Lp;(this.AFN=[]).__proto__=C.Root.AFN;(this.VH=[]).__proto__=
C.Root.VH;(this.AdY=[]).__proto__=C.Root.AdY;(this.AqA=[]).__proto__=C.Root.AqA;(
this.Af$=[]).__proto__=C.Root.Af$;(this.VG=[]).__proto__=C.Root.VG;(this.Qr=[]).
__proto__=C.Root.Qr;(this.Aa1=[]).__proto__=C.Root.Aa1;(this.NK=[]).__proto__=C.
Root.NK;(this.JE=[]).__proto__=C.Root.JE;this.__proto__=C.Root;this.S=0x7F;this.
Aga.P3(10);this.Aga.Mw=[this,this.Bra];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Aga._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Aga._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Qy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I$)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.EW,D);if((B=this.Aqv)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aga)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bp:0,AsN:false,Init:function(aArg){this.Bp=this.Asi();},Asi:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CM:0,D4:0,Down:false,Initialize2:function(JV,RS){this.CM=0;this.D4=
JV;this.Down=RS;if((JV>=0x30)&&(JV<=0x39))this.CM=(10+JV)-48;if((JV>=0x41)&&(JV<=
0x5A))this.CM=(105+JV)-65;if((JV>=0x61)&&(JV<=0x7A))this.CM=(105+JV)-97;if(JV===
0x20)this.CM=131;if(!this.CM)switch(JV){case 0x2B:this.CM=132;break;case 0x2D:this.
CM=133;break;case 0x2A:this.CM=134;break;case 0x2F:this.CM=135;break;case 0x3D:this.
CM=136;break;case 0x2E:this.CM=137;break;case 0x2C:this.CM=138;break;case 0x3A:this.
CM=139;break;case 0x3B:this.CM=140;break;default:;}return this;},Initialize:function(
JV,RS){this.CM=JV;this.Down=RS;this.D4=0x00;var AVX=JV-10;var Aqu=JV-105;if((AVX>=
0)&&(AVX<=9))this.D4=(48+AVX)&0xFFFF;if((Aqu>=0)&&(Aqu<=25))this.D4=(65+Aqu)&0xFFFF;
if(JV===131)this.D4=0x20;if(this.D4===0x00)switch(JV){case 132:this.D4=0x2B;break;
case 133:this.D4=0x2D;break;case 134:this.D4=0x2A;break;case 135:this.D4=0x2F;break;
case 136:this.D4=0x3D;break;case 137:this.D4=0x2E;break;case 138:this.D4=0x2C;break;
case 139:this.D4=0x3A;break;case 140:this.D4=0x3B;break;default:;}return this;},
Bck:function(A6X){switch(A6X){case 141:return((this.D4>=0x41)&&(this.D4<=0x5A))||((
this.D4>=0x61)&&(this.D4<=0x7A));case 142:return(((this.D4>=0x41)&&(this.D4<=0x5A
))||((this.D4>=0x61)&&(this.D4<=0x7A)))||((this.D4>=0x30)&&(this.D4<=0x39));case
143:return(this.D4>=0x30)&&(this.D4<=0x39);case 144:return(((this.D4>=0x41)&&(this.
D4<=0x46))||((this.D4>=0x61)&&(this.D4<=0x66)))||((this.D4>=0x30)&&(this.D4<=0x39
));case 145:return this.D4!==0x00;case 146:return(this.D4===0x00)&&!!this.CM;case
147:return(((this.CM===6)||(this.CM===7))||(this.CM===4))||(this.CM===5);case 148:
return(this.D4!==0x00)||!!this.CM;default:;}return A6X===this.CM;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AMU={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AMU;
},_className:"Core::LanguageEvent"};C.ArP={Auo:null,K8:A.vw,Ng:0,Ic:0,Down:false
,MQ:false,InitializeUp:function(By,Nt,Al$,AVw,Yk){this.Down=false;this.Ic=By;this.
Ng=Nt;this.K8=Yk;this.Auo=AVw;this.MQ=Al$;return this;},InitializeDown:function(
By,Nt,Al$,AVw,Yk){this.Down=true;this.Ic=By;this.Ng=Nt;this.K8=Yk;this.Auo=AVw;this.
MQ=Al$;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.ArP;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Auo)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.AbY={AeV:A.vw,K8:
A.vw,Ng:0,IV:0,M0:A.vw,Ho:A.vw,Ic:0,Down:false,MQ:false,InitializeHold:function(
By,Ai4,AvB,AvC,Nt,Vv,Yk,AvA){this.Down=true;this.Ic=By;this.Ho=A.aak(Ai4,Vv);this.
M0=A.aak(AvB,Vv);this.IV=AvC;this.Ng=Nt;this.K8=Yk;this.AeV=AvA;return this;},InitializeUp:
function(By,Ai4,AvB,AvC,Nt,Vv,Al$,Yk,AvA){this.Down=false;this.Ic=By;this.Ho=A.aak(
Ai4,Vv);this.M0=A.aak(AvB,Vv);this.IV=AvC;this.Ng=Nt;this.MQ=Al$;this.K8=Yk;this.
AeV=AvA;return this;},InitializeDown:function(By,Ai4,Nt,Vv,Al$,Yk){this.Down=true;
this.Ic=By;this.Ho=A.aak(Ai4,Vv);this.M0=A.aak(Ai4,Vv);this.IV=0;this.Ng=Nt;this.
MQ=Al$;this.K8=Yk;this.AeV=Yk;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.AbY;},_className:"Core::CursorEvent"};C.AnV={AeV:A.vw
,K8:A.vw,Ng:0,IV:0,Dm:A.vw,M0:A.vw,Ho:A.vw,Ic:0,Initialize:function(By,Ai4,AvB,aOffset
,AvC,Bqd,Vv,Yk,AvA){this.Ic=By;this.Ho=A.aak(Ai4,Vv);this.M0=A.aak(AvB,Vv);this.
Dm=aOffset;this.IV=AvC;this.Ng=Bqd;this.K8=Yk;this.AeV=AvA;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AnV;},_className:"Core::DragEvent"
};C.Ac={BO:null,MJ:null,Eu:null,Br:A.vw,APP:0,Space:0,AeT:0,JH:function(CJ,aClip
,aOffset,B5,aBlend){},G:function(E){var B;if(A.z9(E,this.M))return;var AjJ=[(B=this.
M)[2]-B[0],B[3]-B[1]];var AGt=[E[2]-E[0],E[3]-E[1]];var Anj=!A.z8(AjJ,AGt);var EX=
A.aaj(E.slice(0,2),this.M.slice(0,2));if(!A.z8(EX,B3)&&!Anj){var X=this.Af;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){var tmp=((X.S&0x100)===0x100
);X.Ak3(EX,tmp);}X=X.Af;}A.ow(this.Eu,this);}if((Anj&&(AjJ[0]>0))&&(AjJ[1]>0)){var
Ba=A.aam(this.M,this.Br);var X=this.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((X.
S&0x400)===0x400)){if(!!X.Eb&&(X.Eb.ML!==this))X.Eb=null;if(!X.Eb&&((X.OX!==0x14
)||!!this.AeT))X.AqM(Ba,this);}X=X.Af;}A.ow(this.Eu,this);}C.Em.G.call(this,E);if(
!!this.Aa&&Anj){this.S=this.S|0x1000;if(!((this.Aa.S&0x2000)===0x2000)){this.Aa.
S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);}}},Am7:function(H){var B;this.BO.
Q=null;this.BO.Ps=null;this.BO=null;(B=this.MJ)?B[1].call(B[0],this):null;},Gk:function(
E){var B;var EX=A.aaj(E,this.Br);if(A.z8(EX,B3))return;this.Br=E;var X=this.Af;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){var tmp=((X.S&0x100)===0x100
);X.Ak3(EX,tmp);}X=X.Af;}if(!!this.Aa)this.Aa.Bc(this.M);A.ow(this.Eu,this);},A32:
function(E){var B;if(E<0)E=0;if(E===this.APP)return;this.APP=E;if(!!this.Aa&&!!this.
AeT){this.S=this.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);
}},Bgu:function(E){var B;if(E<0)E=0;if(E===this.Space)return;this.Space=E;if(!!this.
Aa&&!!this.AeT){this.S=this.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,
B.HL],this);}},Le:function(E){var B;if(E===this.AeT)return;this.AeT=E;if(!!this.
Aa){this.S=this.S|0x1000;this.Aa.S=this.Aa.S|0x4000;A.ow([B=this.Aa,B.HL],this);
}},AbB:function(AaL,EI){var Aqu=this.Dd(0x1);var Qq=this.M;var TD=A.aaj(Aqu.slice(
0,2),Qq.slice(0,2));var Ls=A.aaj(Aqu.slice(2,4),Qq.slice(2,4));var Bj=B3;if((TD[
0]>0)&&(Ls[0]>TD[0]))Bj=[TD[0],Bj[1]];else if((TD[0]>0)&&(Ls[0]>0))Bj=[Ls[0],Bj[
1]];if((Ls[0]<0)&&(TD[0]<Ls[0]))Bj=[Ls[0],Bj[1]];else if((Ls[0]<0)&&(TD[0]<0))Bj=[
TD[0],Bj[1]];if((TD[1]>0)&&(Ls[1]>TD[1]))Bj=[Bj[0],TD[1]];else if((TD[1]>0)&&(Ls[
1]>0))Bj=[Bj[0],Ls[1]];if((Ls[1]<0)&&(TD[1]<Ls[1]))Bj=[Bj[0],Ls[1]];else if((Ls[
1]<0)&&(TD[1]<0))Bj=[Bj[0],TD[1]];if(A.z8(Bj,B3)){(EI)?EI[1].call(EI[0],this):null;
return;}if(!!this.BO){this.BO.An(false);this.BO.Q=null;this.BO.Ps=null;this.MJ=null;
}this.BO=AaL;if(!this.BO){this.Gk(A.aaj(this.Br,Bj));(EI)?EI[1].call(EI[0],this):
null;}else{this.BO.An(false);this.BO.IF(1);this.BO.Q=[this,this.Ak$,this.Gk];this.
BO.Ch=this.Br;this.BO.BW=A.aaj(this.Br,Bj);this.BO.Ps=[this,this.Am7];this.BO.AcX(
false);this.BO.An(true);this.MJ=EI;}},IA:function(Ag,AaP,AaL,EI){var B;if(!Ag)return;
if((Ag.Aa!==this.Aa)||!((Ag.S&0x400)===0x400))throw new Error(JT);this.A_z();var
AL=Ag.GetExtent();var Ba=this.M;var KY=A.kz(AL,Ba);if((!AaP&&!((KY[0]>=KY[2])||(
KY[1]>=KY[3])))||(AaP&&A.z9(KY,AL))){(EI)?EI[1].call(EI[0],this):null;return;}var
Bj=B3;if(AL[2]>Ba[2])Bj=[AL[2]-Ba[2],Bj[1]];if(AL[3]>Ba[3])Bj=[Bj[0],AL[3]-Ba[3]
];if(Bj[0]>(AL[0]-Ba[0]))Bj=[AL[0]-Ba[0],Bj[1]];if(Bj[1]>(AL[1]-Ba[1]))Bj=[Bj[0]
,AL[1]-Ba[1]];if(!!this.BO){this.BO.An(false);this.BO.Q=null;this.BO.Ps=null;this.
MJ=null;}this.BO=AaL;if(!this.BO){this.Gk(A.aaj(this.Br,Bj));(EI)?EI[1].call(EI[
0],this):null;}else{this.BO.An(false);this.BO.IF(1);this.BO.Q=[this,this.Ak$,this.
Gk];this.BO.Ch=this.Br;this.BO.BW=A.aaj(this.Br,Bj);this.BO.Ps=[this,this.Am7];this.
BO.AcX(false);this.BO.An(true);this.MJ=EI;}},BbM:function(Ag){var B;if(!!Ag&&((Ag.
Aa!==this.Aa)||!((Ag.S&0x400)===0x400)))return-1;var DW=-1;while(!!Ag&&!((Ag.S&0x200
)===0x200)){if(((Ag.S&0x400)===0x400))DW=DW+1;Ag=Ag.AG;}return DW;},Zp:function(
Ag,aFilter){var B;if(!!Ag&&((Ag.Aa!==this.Aa)||!((Ag.S&0x400)===0x400)))return null;
var X=this.Af;var It=0x10000;if(((aFilter&0x10000)===0x10000))It=0x0;if(!!Ag)X=Ag.
Af;aFilter=aFilter|0x400;while(!!X&&!((X.S&0x200)===0x200)){if(((B=aFilter)&&((X.
S&B)===B))&&(!It||!((B=It)&&((X.S&B)===B))))return X;X=X.Af;}return null;},Dd:function(
aFilter){var B;var X=this.Af;var Ay=BI;var It=0x10000;this.A_z();if(((aFilter&0x10000
)===0x10000))It=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.S&0x200)===0x200)){if(((
B=aFilter)&&((X.S&B)===B))&&(!It||!((B=It)&&((X.S&B)===B))))Ay=A.vS(Ay,X.GetExtent(
));X=X.Af;}return Ay;},A_z:function(){var B;if((!this.AeT||!!!this.Aa)||!((this.
Aa.S&0x4000)===0x4000))return;var X=this.Af;var AWd=((this.S&0x1000)===0x1000);for(;
!!X&&!AWd;X=X.Af){if(((X.S&0x400)===0x400)&&((X.S&0x800)===0x800))AWd=true;if(((
X.S&0x200)===0x200))break;}if(AWd){this.S=this.S&~0x4000;this.Aa.A_K();}},Ak$:function(
){return this.Br;},_Init:function(aArg){C.Em._Init.call(this,aArg);this.__proto__=
C.Ac;this.S=0x203;},_Mark:function(D){var B;C.Em._Mark.call(this,D);if((B=this.BO
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MJ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::Outline"};C.Cu={G2:null,BO:null,B4:null,UX:null,MJ:null,Eu:null,GD:null,R3:-
1,R2:0,IR:-1,GK:0,Ags:8,ND:0,SY:0,Aax:A.vw,ID:-1,Br:0,FJ:-1,N6:0,Gj:24,AM:0,KB:null
,MX:false,AqQ:false,APW:function(HY,Ns,Vu,RU,RW,Af1,Oh,Ql,KQ,KO,KP){throw new Error(
RM);},AnT:function(HY,Af1,Oh,Ql,KQ,KO,KP){throw new Error(Vg);},Air:function(HY,
Ns,Vu,RU,RW,Oh,Ql,KQ,KO,KP){throw new Error(Vh);},DispatchEvent:function(Cw){var
B;var result=null;if(((this.FJ>=0)&&(this.FJ<this.AM))&&!this.A6){this.ID=this.FJ;
this.B4=(C.B4.isPrototypeOf(B=A._NewObject(this.KB,0))?B:null);if(!!this.BT)this.
BT.Af=this.B4;else this.BY=this.B4;this.B4.AG=this.BT;this.BT=this.B4;this.B4.Aa=
this;this.Aax=[(B=this.M)[2]-B[0],this.Gj];(B=this.GD)?B[1].call(B[0],this):null;
var BZ=(C.O.isPrototypeOf(B=this.B4)?B:null);if(!!BZ)result=BZ.DispatchEvent(Cw);
else result=this.B4.Gh(Cw);if(!!this.B4.AG)this.B4.AG.Af=null;else this.BY=null;
this.BT=this.B4.AG;this.B4.AG=null;this.B4.Aa=null;this.B4=null;}if(!result)result=
C.O.DispatchEvent.call(this,Cw);return result;},Ai:function(Ae){var B;if(!this.KB
){A.ow(this.Eu,this);return;}this.AqQ=true;var Axe=0;if(!this.MX)Axe=this.N6;var
Fi=this.AjU(-Axe-this.Br,1);var Gc=this.AjU(((((B=this.M)[3]-B[1])-Axe)-this.Br)-
1,2);var DW=Gc-Fi;if(DW<1)DW=1;var Af7=(DW/2)|0;var Af8=(DW/3)|0;if(!Af7)Af7=1;if(
!Af8)Af8=1;if(Fi<this.GK){Fi=Fi-Af7;Gc=Gc+Af8;}else if(Gc>this.IR){Fi=Fi-Af8;Gc=
Gc+Af7;}else{Fi=this.GK;Gc=this.IR;}if(!this.MX){if(Fi>=this.AM){Fi=0;Gc=-1;}else
if(Gc<0){Fi=0;Gc=-1;}if(Gc>=this.AM)Gc=this.AM-1;if(Fi<0)Fi=0;}else if(this.AM<=
0){Fi=0;Gc=-1;}var AgH=this.GK;var AgI=this.IR;var AmV=0;var AmW=-1;if(Fi>AgH)AgH=
Fi;if(Gc<AgI)AgI=Gc;if(AgH<=AgI){while((this.IR<Gc)&&(this.GK<AgH)){this.Abo();this.
Av1();}while((this.GK>Fi)&&(this.IR>AgI)){this.Axq();this.Av0();}}else{this.IR=(
this.IR-this.GK)+Fi;this.GK=Fi;AmV=this.GK;AmW=this.IR;}while(this.GK<Fi)this.Abo(
);while(this.IR>Gc)this.Axq();while(this.GK>Fi)this.Av0();while(this.IR<Gc)this.
Av1();var Ab=this.BY;var inx=this.GK;var pos=[0,(Axe+this.Br)+this.IP(inx,0)];var
BG=(B=this.M)[3]-B[1];var Ajq=null;var A$s=(B=this.M)[2]-B[0];while(!!Ab){var H3=
inx;if(this.MX){if(H3<0)H3=this.AM-(-H3%this.AM);if(H3>0)H3=H3%this.AM;}var Abp=((
H3>=this.R2)&&(H3<=this.R3))||((inx>=AmV)&&(inx<=AmW));var AmE=Ab.GetExtent();var
Bj=A.aaj(pos,AmE.slice(0,2));if(Abp)this.SY=this.Gj;else this.SY=AmE[3]-AmE[1];var
AWT=pos[1];var AWU=pos[1]+this.SY;if(!A.z8(Bj,B3))Ab.Ak3(Bj,true);if((Abp&&(AWT<
BG))&&(AWU>0)){this.B4=Ab;this.ID=H3;this.Aax=[A$s,this.SY];(B=this.GD)?B[1].call(
B[0],this):null;}Ab=Ab.Af;inx+=1;pos=[pos[0],pos[1]+this.SY];}inx=this.GK;Ab=this.
BY;pos=[0,(Axe+this.Br)+this.IP(inx,0)];while(!!Ab){var H3=inx;if(this.MX){if(H3<
0)H3=this.AM-(-H3%this.AM);if(H3>0)H3=H3%this.AM;}var Abp=((H3>=this.R2)&&(H3<=this.
R3))||((inx>=AmV)&&(inx<=AmW));if(Abp)this.SY=this.Gj;else this.SY=(B=Ab.GetExtent(
))[3]-B[1];var AWT=pos[1];var AWU=pos[1]+this.SY;if(Abp&&!((AWT<BG)&&(AWU>0))){this.
B4=Ab;this.ID=H3;this.Aax=[A$s,this.SY];(B=this.GD)?B[1].call(B[0],this):null;}if(((
H3===this.FJ)&&this.MX)&&!!Ajq){var Qq=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.zS(
A.kz(Ab.GetExtent(),Qq))>A.zS(A.kz(Ajq.GetExtent(),Qq)))Ajq=Ab;}else if(H3===this.
FJ)Ajq=Ab;Ab=Ab.Af;inx+=1;pos=[pos[0],pos[1]+this.SY];}this.R2=0;this.R3=-1;this.
B4=null;this.ID=-1;this.A8(Ajq);this.AqQ=false;A.ow(this.Eu,this);},Q8:function(
Ag,GJ,aFilter){return null;},An0:function(Ag,aFilter){return null;},Zp:function(
Ag,aFilter){return null;},Ay_:function(Ag,aFilter){return null;},Dd:function(aFilter
){return BI;},MY:function(JW,Fg,KQ,KO,KP){throw new Error(X7);},Alw:function(Ag,
Jt){throw new Error(RN);},SZ:function(Ag){throw new Error(X8);},Lg:function(Ag,Pg
){throw new Error(Vi);},HW:function(Ag){throw new Error(Tj);},AHS:function(Ag,Jt
){throw new Error(Vj);},J:function(Ag,Pg){throw new Error(Qg);},IP:function(HB,AU9
){return HB*this.Gj;},AjU:function(E6,AU9){return(E6/this.Gj)|0;},Axq:function(){
var Ab=this.BT;if(!Ab)return null;if(Ab===this.A6)this.A8(null);this.IR=this.IR-
1;if(!!Ab.AG)Ab.AG.Af=null;else this.BY=null;this.BT=Ab.AG;Ab.AG=null;Ab.Aa=null;
Ab.Eb=null;if(this.ND<this.Ags){if(!!this.G2)this.G2.AG=Ab;Ab.Af=this.G2;this.G2=
Ab;this.ND++;}return Ab;},Av1:function(){var B;var Ab=this.G2;var Abb=this.KB;var
Abt=++this.IR;if(this.MX){if(Abt<0)Abt=this.AM-(-Abt%this.AM);if(Abt>0)Abt=Abt%this.
AM;}while(!!Ab&&(((B=Ab)?B.__proto__:null)!==Abb))Ab=Ab.Af;if(!!Ab){if(!!Ab.Af)Ab.
Af.AG=Ab.AG;if(!!Ab.AG)Ab.AG.Af=Ab.Af;if(this.G2===Ab)this.G2=Ab.Af;Ab.Af=null;Ab.
AG=null;this.ND--;}else{Ab=(C.B4.isPrototypeOf(B=A._NewObject(Abb,0))?B:null);Ab.
AW(0x1D);if(!!this.ND)this.Ags++;}this.SY=this.Gj;this.ID=Abt;this.Aax=[(B=this.
M)[2]-B[0],this.SY];this.B4=Ab;(B=this.GD)?B[1].call(B[0],this):null;this.B4=null;
this.ID=-1;if(!!this.BT)this.BT.Af=Ab;Ab.Aa=this;Ab.AG=this.BT;this.BT=Ab;if(!this.
BY)this.BY=Ab;if(Abt===this.FJ)this.A8(Ab);return Ab;},Abo:function(){var Ab=this.
BY;if(!Ab)return null;if(Ab===this.A6)this.A8(null);this.GK=this.GK+1;if(!!Ab.Af
)Ab.Af.AG=null;else this.BT=null;this.BY=Ab.Af;Ab.Af=null;Ab.Aa=null;Ab.Eb=null;
if(this.ND<this.Ags){if(!!this.G2)this.G2.AG=Ab;Ab.Af=this.G2;this.G2=Ab;this.ND++;
}return Ab;},Av0:function(){var B;var Ab=this.G2;var Abb=this.KB;var Mg=--this.GK;
if(this.MX){if(Mg<0)Mg=this.AM-(-Mg%this.AM);if(Mg>0)Mg=Mg%this.AM;}while(!!Ab&&(((
B=Ab)?B.__proto__:null)!==Abb))Ab=Ab.Af;if(!!Ab){if(!!Ab.Af)Ab.Af.AG=Ab.AG;if(!!
Ab.AG)Ab.AG.Af=Ab.Af;if(this.G2===Ab)this.G2=Ab.Af;Ab.Af=null;Ab.AG=null;this.ND--;
}else{Ab=(C.B4.isPrototypeOf(B=A._NewObject(Abb,0))?B:null);Ab.AW(0x1D);if(!!this.
ND)this.Ags++;}this.SY=this.Gj;this.ID=Mg;this.Aax=[(B=this.M)[2]-B[0],this.SY];
this.B4=Ab;(B=this.GD)?B[1].call(B[0],this):null;this.B4=null;this.ID=-1;if(!!this.
BY)this.BY.AG=Ab;Ab.Aa=this;Ab.Af=this.BY;this.BY=Ab;if(!this.BT)this.BT=Ab;if(Mg===
this.FJ)this.A8(Ab);return Ab;},Am7:function(H){var B;this.BO.Q=null;this.BO.Ps=
null;this.BO=null;(B=this.MJ)?B[1].call(B[0],this):null;},Btd:function(H){this.Gk(
this.UX.Dm[1]);},Bte:function(H){var B;if(!!this.BO){this.BO.An(false);this.BO.Q=
null;this.BO.Ps=null;this.BO=null;}if(!this.MX){var Ay=this.An5(0,this.AM-1);var
Aea=this.M.slice(0,2);Ay=A.aaS(Ay,Ay[1]-this.N6);if(Ay[0]>Aea[0])Ay=[].concat(Aea[
0],Ay.slice(1,4));if(Ay[1]>Aea[1])Ay=A.aaS(Ay,Aea[1]);var EX=Ay[1]-this.M[1];var
AW5=((B=this.M)[3]-B[1])-(Ay[3]-Ay[1]);if(AW5>0)AW5=0;this.UX.Dm=[0,this.Br];this.
UX.FF=[0,(this.Br+AW5)-EX];this.UX.Fp=[0,this.Br-EX];}else{var EX=32000-(32000%this.
Gj);this.UX.Dm=[0,this.Br];this.UX.FF=[0,this.Br-EX];this.UX.Fp=[0,this.Br+EX];}
},AOh:function(E){var B;if(this.MX===E)return;this.MX=E;while(!!this.Abo());this.
Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AtL:function(E){if(E===this.UX
)return;if(!!E&&!!E.Aq5){A.aa8("%s%*%s",Vk,E,Np);throw new Error(Pd);}if(!!this.
UX){this.UX.AGF=null;this.UX.Aq5=null;}this.UX=E;if(!!E){E.AGF=[this,this.Bte];E.
Aq5=[this,this.Btd];}},Gk:function(E){var B;if(this.MX&&(this.AM>0)){var G4=this.
IP(this.AM,3);if(E<0)E=G4-(-E%G4);if(E>0)E=E%G4;if(E>0)E=E-G4;}if(E===this.Br)return;
this.Br=E;this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Gl:function(E){
if(E<0)E=-1;if(E===this.FJ)return;this.FJ=E;this.Al();},A3Q:function(E){var B;if(
E<0)E=0;if(E===this.N6)return;this.N6=E;if(!this.MX){this.Al();this.Bc([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);}},AcT:function(E){var B;if(E<1)E=1;if(E===this.Gj)return;
this.Gj=E;while(!!this.Abo());this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);},I0:function(E){var B;if(E<0)E=0;if(E===this.AM)return;var Ay=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(!this.MX){if(E>this.AM){Ay=[].concat(Ay.slice(0,3),(this.
N6+this.Br)+this.IP(E,3));Ay=A.aaS(Ay,(this.N6+this.Br)+this.IP(this.AM,3));}else{
Ay=A.aaS(Ay,(this.N6+this.Br)+this.IP(E,3));Ay=[].concat(Ay.slice(0,3),(this.N6+
this.Br)+this.IP(this.AM,3));}}else while(!!this.Abo());this.AM=E;this.Al();this.
Bc(Ay);},Nb:function(E){var B;if(E===this.KB)return;this.KB=E;while(!!this.Abo()
);this.G2=null;this.ND=0;this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}
,Bb0:function(HB){if(this.AqQ)return null;if((HB<0)||(HB>=this.AM))return null;if(
!this.MX){if((HB<this.GK)||(HB>this.IR))return null;var X=this.BY;while(HB>this.
GK){X=X.Af;HB=HB-1;}return X;}else{var Mg=this.GK;if(Mg<0)Mg=this.AM-(-Mg%this.AM
);if(Mg>0)Mg=Mg%this.AM;var X=this.BY;while(!!X){if((Mg%this.AM)===HB)return X;X=
X.Af;Mg=Mg+1;}return null;}},Ax7:function(AaL,EI){var B;if(this.MX){(EI)?EI[1].call(
EI[0],this):null;return;}var AF_=this.Br;var A8j=((((B=this.M)[3]-B[1])-this.Br)-
this.N6)-this.IP(this.AM,3);var Bj=0;if(AF_>0)Bj=-AF_;else if(A8j>0)Bj=A8j;if((Bj>
0)&&(Bj>-AF_))Bj=-AF_;if(!Bj){(EI)?EI[1].call(EI[0],this):null;return;}if(!!this.
BO){this.BO.An(false);this.BO.Q=null;this.BO.Ps=null;this.MJ=null;}this.BO=AaL;if(
!this.BO){this.Gk(this.Br+Bj);(EI)?EI[1].call(EI[0],this):null;}else{this.BO.An(
false);this.BO.IF(1);this.BO.Q=[this,this.Ak$,this.Gk];this.BO.Ch=this.Br;this.BO.
BW=this.Br+Bj;this.BO.Ps=[this,this.Am7];this.BO.AcX(false);this.BO.An(true);this.
MJ=EI;}},IA:function(HB,AaP,AaL,EI){var B;if((HB<0)||(HB>=this.AM))return;var AL=
this.An5(HB,HB);var Ba=this.M;var KY=A.kz(AL,Ba);if((!AaP&&!((KY[0]>=KY[2])||(KY[
1]>=KY[3])))||(AaP&&A.z9(KY,AL))){(EI)?EI[1].call(EI[0],this):null;return;}var Bj=
0;if(AL[3]>Ba[3])Bj=AL[3]-Ba[3];if(Bj>(AL[1]-Ba[1]))Bj=AL[1]-Ba[1];if(!!this.BO){
this.BO.An(false);this.BO.Q=null;this.BO.Ps=null;this.MJ=null;}this.BO=AaL;if(!this.
BO){this.Gk(this.Br-Bj);(EI)?EI[1].call(EI[0],this):null;}else{this.BO.An(false);
this.BO.IF(1);this.BO.Q=[this,this.Ak$,this.Gk];this.BO.Ch=this.Br;this.BO.BW=this.
Br-Bj;this.BO.Ps=[this,this.Am7];this.BO.AcX(false);this.BO.An(true);this.MJ=EI;
}},BbS:function(){return BI;},AKu:function(){if((this.N6<=0)||this.MX)return BI;
var Ay=this.M;Ay=A.aaS(Ay,Ay[1]+this.Br);Ay=[].concat(Ay.slice(0,3),Ay[1]+this.N6
);return Ay;},A0Q:function(E6){if(((this.AM<=0)||(E6[0]<this.M[0]))||(E6[0]>=this.
M[2]))return-1;E6=A.aaj(E6,this.M.slice(0,2));if(!this.MX){var Ab=(E6[1]-this.Br
)-this.N6;if(Ab>0)Ab=this.AjU(Ab,0);if((Ab<0)||(Ab>=this.AM))return-1;return Ab;
}var Ab=E6[1]-this.Br;if(Ab>0)Ab=this.AjU(Ab,0);if(Ab<0)Ab=this.AjU(Ab,0)-1;if(Ab<
0)Ab=this.AM-(-Ab%this.AM);if(Ab>0)Ab=Ab%this.AM;return Ab;},An5:function(Js,Ln){
if(Js<0)Js=0;if(Ln>=this.AM)Ln=this.AM-1;if(Js>Ln)return BI;var Ay=this.M;var Bj=
this.Br;if(this.MX){var G4=this.IP(this.AM,3);if(Bj<0)Bj=G4-(-Bj%G4);if(Bj>0)Bj=
Bj%G4;if(Bj>0)Bj=Bj-G4;}else Bj=Bj+this.N6;Ay=[].concat(Ay.slice(0,3),(Ay[1]+Bj)+
this.IP(Ln+1,0));Ay=A.aaS(Ay,(Ay[1]+Bj)+this.IP(Js,0));return Ay;},ZE:function(Js
,Ln){var B;if(Js<0)Js=0;if(Js>Ln)return;if(this.R2>this.R3){this.R2=Js;this.R3=Ln;
}else{if(Js<this.R2)this.R2=Js;if(Ln>this.R3)this.R3=Ln;}var Ay=[0,0,(B=this.M)[
2]-B[0],B[3]-B[1]];if(!this.MX){Ay=A.aaS(Ay,(this.N6+this.Br)+this.IP(Js,0));Ay=[
].concat(Ay.slice(0,3),(this.N6+this.Br)+this.IP(Ln+1,0));}else if((this.IP(this.
AM-1,3)>=(Ay[3]-Ay[1]))&&((Ay[3]-Ay[1])>0)){var Bj=this.Br;var G4=this.IP(this.AM
,3);if(Bj<0)Bj=G4-(-Bj%G4);if(Bj>0)Bj=Bj%G4;if(Bj>0)Bj=Bj-G4;Ay=A.aaS(Ay,Bj+this.
IP(Js,0));Ay=[].concat(Ay.slice(0,3),Bj+this.IP(Ln+1,0));}this.Al();this.Bc(Ay);
},Ak$:function(){return this.Br;},_Init:function(aArg){C.O._Init.call(this,aArg);
this.__proto__=C.Cu;this.G(Tk);this.KB=A.abh.Text;},_Mark:function(D){var B;C.O.
_Mark.call(this,D);if((B=this.G2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.UX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MJ)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.GD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"
};C.De={G2:null,BO:null,B4:null,MJ:null,GD:null,R3:-1,R2:0,IR:-1,GK:0,Ags:8,ND:0
,Rx:0,Aax:A.vw,ID:-1,Br:0,FJ:-1,Us:24,AM:0,KB:null,AqQ:false,APW:function(HY,Ns,
Vu,RU,RW,Af1,Oh,Ql,KQ,KO,KP){throw new Error(X9);},AnT:function(HY,Af1,Oh,Ql,KQ,
KO,KP){throw new Error(Vl);},Air:function(HY,Ns,Vu,RU,RW,Oh,Ql,KQ,KO,KP){throw new
Error(X_);},DispatchEvent:function(Cw){var B;var result=null;if(((this.FJ>=0)&&(
this.FJ<this.AM))&&!this.A6){this.ID=this.FJ;this.B4=(C.B4.isPrototypeOf(B=A._NewObject(
this.KB,0))?B:null);if(!!this.BT)this.BT.Af=this.B4;else this.BY=this.B4;this.B4.
AG=this.BT;this.BT=this.B4;this.B4.Aa=this;this.Aax=[this.Rx,(B=this.M)[3]-B[1]];(
B=this.GD)?B[1].call(B[0],this):null;var BZ=(C.O.isPrototypeOf(B=this.B4)?B:null
);if(!!BZ)result=BZ.DispatchEvent(Cw);else result=this.B4.Gh(Cw);if(!!this.B4.AG
)this.B4.AG.Af=null;else this.BY=null;this.BT=this.B4.AG;this.B4.AG=null;this.B4.
Aa=null;this.B4=null;}if(!result)result=C.O.DispatchEvent.call(this,Cw);return result;
},Ai:function(Ae){var B;if(!this.KB)return;this.AqQ=true;var Fi=this.AjU(0-this.
Br,1);var Gc=this.AjU((((B=this.M)[2]-B[0])-this.Br)-1,2);var DW=Gc-Fi;if(DW<1)DW=
1;var Af7=(DW/2)|0;var Af8=(DW/3)|0;if(!Af7)Af7=1;if(!Af8)Af8=1;if(Fi<this.GK){Fi=
Fi-Af7;Gc=Gc+Af8;}else if(Gc>this.IR){Fi=Fi-Af8;Gc=Gc+Af7;}else{Fi=this.GK;Gc=this.
IR;}if(Fi>=this.AM){Fi=0;Gc=-1;}else if(Gc<0){Fi=0;Gc=-1;}if(Gc>=this.AM)Gc=this.
AM-1;if(Fi<0)Fi=0;var AgH=this.GK;var AgI=this.IR;var AmV=0;var AmW=-1;if(Fi>AgH
)AgH=Fi;if(Gc<AgI)AgI=Gc;if(AgH<=AgI){while((this.IR<Gc)&&(this.GK<AgH)){this.Abo(
);this.Av1();}while((this.GK>Fi)&&(this.IR>AgI)){this.Axq();this.Av0();}}else{this.
IR=(this.IR-this.GK)+Fi;this.GK=Fi;AmV=this.GK;AmW=this.IR;}while(this.GK<Fi)this.
Abo();while(this.IR>Gc)this.Axq();while(this.GK>Fi)this.Av0();while(this.IR<Gc)this.
Av1();var Ab=this.BY;var inx=this.GK;var pos=[this.Br+this.IP(inx,0),0];var BP=(
B=this.M)[2]-B[0];var Ajq=null;var A$k=(B=this.M)[3]-B[1];while(!!Ab){var H3=inx;
var Abp=((H3>=this.R2)&&(H3<=this.R3))||((inx>=AmV)&&(inx<=AmW));var AmE=Ab.GetExtent(
);var Bj=A.aaj(pos,AmE.slice(0,2));if(Abp)this.Rx=this.Us;else this.Rx=AmE[2]-AmE[
0];var AWR=pos[0];var AWS=pos[0]+this.Rx;if(!A.z8(Bj,B3))Ab.Ak3(Bj,true);if((Abp&&(
AWR<BP))&&(AWS>0)){this.B4=Ab;this.ID=H3;this.Aax=[this.Rx,A$k];(B=this.GD)?B[1].
call(B[0],this):null;}Ab=Ab.Af;inx+=1;pos=[pos[0]+this.Rx,pos[1]];}inx=this.GK;Ab=
this.BY;pos=[this.Br+this.IP(inx,0),0];while(!!Ab){var H3=inx;var Abp=((H3>=this.
R2)&&(H3<=this.R3))||((inx>=AmV)&&(inx<=AmW));if(Abp)this.Rx=this.Us;else this.Rx=(
B=Ab.GetExtent())[2]-B[0];var AWR=pos[0];var AWS=pos[0]+this.Rx;if(Abp&&!((AWR<BP
)&&(AWS>0))){this.B4=Ab;this.ID=H3;this.Aax=[this.Rx,A$k];(B=this.GD)?B[1].call(
B[0],this):null;}if(H3===this.FJ)Ajq=Ab;Ab=Ab.Af;inx+=1;pos=[pos[0]+this.Rx,pos[
1]];}this.R2=0;this.R3=-1;this.B4=null;this.ID=-1;this.A8(Ajq);this.AqQ=false;},
Q8:function(Ag,GJ,aFilter){return null;},An0:function(Ag,aFilter){return null;},
Zp:function(Ag,aFilter){return null;},Ay_:function(Ag,aFilter){return null;},Dd:
function(aFilter){return BI;},MY:function(JW,Fg,KQ,KO,KP){throw new Error(X$);},
Alw:function(Ag,Jt){throw new Error(Vm);},SZ:function(Ag){throw new Error(Vn);},
Lg:function(Ag,Pg){throw new Error(RO);},HW:function(Ag){throw new Error(Ya);},AHS:
function(Ag,Jt){throw new Error(Yb);},J:function(Ag,Pg){throw new Error(AaC);},IP:
function(HB,AU9){return HB*this.Us;},AjU:function(E6,AU9){return(E6/this.Us)|0;}
,Axq:function(){var Ab=this.BT;if(!Ab)return null;if(Ab===this.A6)this.A8(null);
this.IR=this.IR-1;if(!!Ab.AG)Ab.AG.Af=null;else this.BY=null;this.BT=Ab.AG;Ab.AG=
null;Ab.Aa=null;Ab.Eb=null;if(this.ND<this.Ags){if(!!this.G2)this.G2.AG=Ab;Ab.Af=
this.G2;this.G2=Ab;this.ND++;}return Ab;},Av1:function(){var B;var Ab=this.G2;var
Abb=this.KB;var Abt=++this.IR;while(!!Ab&&(((B=Ab)?B.__proto__:null)!==Abb))Ab=Ab.
Af;if(!!Ab){if(!!Ab.Af)Ab.Af.AG=Ab.AG;if(!!Ab.AG)Ab.AG.Af=Ab.Af;if(this.G2===Ab)
this.G2=Ab.Af;Ab.Af=null;Ab.AG=null;this.ND--;}else{Ab=(C.B4.isPrototypeOf(B=A._NewObject(
Abb,0))?B:null);Ab.AW(0x1D);if(!!this.ND)this.Ags++;}this.Rx=this.Us;this.ID=Abt;
this.Aax=[this.Rx,(B=this.M)[3]-B[1]];this.B4=Ab;(B=this.GD)?B[1].call(B[0],this
):null;this.B4=null;this.ID=-1;if(!!this.BT)this.BT.Af=Ab;Ab.Aa=this;Ab.AG=this.
BT;this.BT=Ab;if(!this.BY)this.BY=Ab;if(Abt===this.FJ)this.A8(Ab);return Ab;},Abo:
function(){var Ab=this.BY;if(!Ab)return null;if(Ab===this.A6)this.A8(null);this.
GK=this.GK+1;if(!!Ab.Af)Ab.Af.AG=null;else this.BT=null;this.BY=Ab.Af;Ab.Af=null;
Ab.Aa=null;Ab.Eb=null;if(this.ND<this.Ags){if(!!this.G2)this.G2.AG=Ab;Ab.Af=this.
G2;this.G2=Ab;this.ND++;}return Ab;},Av0:function(){var B;var Ab=this.G2;var Abb=
this.KB;var Mg=--this.GK;while(!!Ab&&(((B=Ab)?B.__proto__:null)!==Abb))Ab=Ab.Af;
if(!!Ab){if(!!Ab.Af)Ab.Af.AG=Ab.AG;if(!!Ab.AG)Ab.AG.Af=Ab.Af;if(this.G2===Ab)this.
G2=Ab.Af;Ab.Af=null;Ab.AG=null;this.ND--;}else{Ab=(C.B4.isPrototypeOf(B=A._NewObject(
Abb,0))?B:null);Ab.AW(0x1D);if(!!this.ND)this.Ags++;}this.Rx=this.Us;this.ID=Mg;
this.Aax=[this.Rx,(B=this.M)[3]-B[1]];this.B4=Ab;(B=this.GD)?B[1].call(B[0],this
):null;this.B4=null;this.ID=-1;if(!!this.BY)this.BY.AG=Ab;Ab.Aa=this;Ab.Af=this.
BY;this.BY=Ab;if(!this.BT)this.BT=Ab;if(Mg===this.FJ)this.A8(Ab);return Ab;},Am7:
function(H){var B;this.BO.Q=null;this.BO.Ps=null;this.BO=null;(B=this.MJ)?B[1].call(
B[0],this):null;},Gk:function(E){var B;if(E===this.Br)return;this.Br=E;this.Al();
this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Gl:function(E){if(E<0)E=-1;if(E===
this.FJ)return;this.FJ=E;this.Al();},ABm:function(E){var B;if(E<1)E=1;if(E===this.
Us)return;this.Us=E;while(!!this.Abo());this.Al();this.Bc([0,0,(B=this.M)[2]-B[0
],B[3]-B[1]]);},I0:function(E){var B;if(E<0)E=0;if(E===this.AM)return;var Ay=[0,
0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AM){Ay=[].concat(this.Br+this.IP(this.
AM,3),Ay.slice(1,4));Ay=A.aaQ(Ay,this.Br+this.IP(E,3));}else{Ay=A.aaQ(Ay,this.Br+
this.IP(this.AM,3));Ay=[].concat(this.Br+this.IP(E,3),Ay.slice(1,4));}this.AM=E;
this.Al();this.Bc(Ay);},Nb:function(E){var B;if(E===this.KB)return;this.KB=E;while(
!!this.Abo());this.G2=null;this.ND=0;this.Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[
3]-B[1]]);},Bh2:function(Bqe,Bqf){if(!this.BO)return;if(Bqe)this.Gk(this.BO.BW);
var AYr=this.MJ;this.BO.An(false);this.BO.Q=null;this.BO.Ps=null;this.MJ=null;this.
BO=null;if(Bqf)(AYr)?AYr[1].call(AYr[0],this):null;},Bco:function(){return!!this.
BO;},IA:function(HB,AaP,AaL,EI){var B;if((HB<0)||(HB>=this.AM))return;var AL=this.
An5(HB,HB);var Ba=this.M;var KY=A.kz(AL,Ba);if((!AaP&&!((KY[0]>=KY[2])||(KY[1]>=
KY[3])))||(AaP&&A.z9(KY,AL))){(EI)?EI[1].call(EI[0],this):null;return;}var Bj=0;
if(AL[2]>Ba[2])Bj=AL[2]-Ba[2];if(Bj>(AL[0]-Ba[0]))Bj=AL[0]-Ba[0];if(!!this.BO){this.
BO.An(false);this.BO.Q=null;this.BO.Ps=null;this.MJ=null;}this.BO=AaL;if(!this.BO
){this.Gk(this.Br-Bj);(EI)?EI[1].call(EI[0],this):null;}else{this.BO.An(false);this.
BO.IF(1);this.BO.Q=[this,this.Ak$,this.Gk];this.BO.Ch=this.Br;this.BO.BW=this.Br-
Bj;this.BO.Ps=[this,this.Am7];this.BO.AcX(false);this.BO.An(true);this.MJ=EI;}},
An5:function(Js,Ln){if(Js<0)Js=0;if(Ln>=this.AM)Ln=this.AM-1;if(Js>Ln)return BI;
var Ay=this.M;var Bj=this.Br;Ay=A.aaQ(Ay,(Ay[0]+Bj)+this.IP(Ln+1,0));Ay=[].concat((
Ay[0]+Bj)+this.IP(Js,0),Ay.slice(1,4));return Ay;},ZE:function(Js,Ln){var B;if(Js<
0)Js=0;if(Js>Ln)return;if(this.R2>this.R3){this.R2=Js;this.R3=Ln;}else{if(Js<this.
R2)this.R2=Js;if(Ln>this.R3)this.R3=Ln;}var Ay=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]
];Ay=[].concat(this.Br+this.IP(Js,0),Ay.slice(1,4));Ay=A.aaQ(Ay,this.Br+this.IP(
Ln+1,0));this.Al();this.Bc(Ay);},Ak$:function(){return this.Br;},_Init:function(
aArg){C.O._Init.call(this,aArg);this.__proto__=C.De;this.G(Tk);this.KB=A.abh.Text;
},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.G2)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.BO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B4
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MJ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.GD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::HorizontalList"};C.Bd={AND:null,AAT:null,AsW:null,D_:null,KD:null,B1:null
,AGZ:0,Bl:0,Ic:0,Bp:0,Ng:0,IV:0,Dm:A.vw,M0:A.vw,Ho:A.vw,At_:8,Ac_:0,A1B:1,Down:false
,WV:false,MQ:false,AWk:false,AwP:0,JH:function(CJ,aClip,aOffset,B5,aBlend){},Gh:
function(Cw){var B;var BK=(C.AbY.isPrototypeOf(Cw)?Cw:null);var DE=(C.AnV.isPrototypeOf(
Cw)?Cw:null);var AGi=this.WV;var YL;var TB;var AxK;var Me;var Awi;if(!BK&&!DE)return null;
YL=(!!BK&&BK.Down)&&!BK.IV;TB=(!!BK&&BK.Down)&&(BK.IV>0);AxK=(!!BK&&BK.Down)&&(BK.
IV>this.AwP);Me=!!BK&&!BK.Down;Awi=!!DE;if(YL)this.AwP=((B=(BK.MQ?0:50))&0x80)?B|
0xFFFFFF00:B&0xFF;if((((this.Ac_&0x20)===0x20)&&(this.Bl>0))&&(this.Bl<33554432)
){var H2=(C.ArP.isPrototypeOf(Cw)?Cw:null);if(((!!H2&&H2.Down)&&(H2.Auo!==this))&&
A.vt(this.GetExtent(),this.Aa.A1y(H2.K8))){this.AGZ=0x20;this.Bl=this.Bl|67108864;
return null;}}if(YL){var Am2=0;var Aa7;this.Bl=this.Bl|(1<<BK.Ic);for(Aa7=this.Bl&
4095;Aa7>0;Aa7=Aa7>>1)if(!!(Aa7&1))Am2=Am2+1;if(Am2===1)this.Bl=(this.Bl|16777216
)|(4096<<BK.Ic);}if(Me&&(this.Bl<16777216)){var H6=this.HO();var I_=null;if(!!H6
){var AYj=(!!this.AG?this.AG:this.Aa);var AV_=(!!H6.I$?H6.I$.C4:null);I_=H6.Wu(A.
aam(Qh,BK.K8),BK.Ic,BK.Ng,AV_,AYj,0x0);}if(!!I_){var P;for(P=0;P<10;P++)if(!!(this.
Bl&(1<<P)))I_.B4.Gh(A._NewObject(C.AbY,0).InitializeDown(P,BK.Ho,BK.Ng,B3,true,BK.
K8));for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))I_.B4.Gh(A._NewObject(C.AbY,0).InitializeUp(
P,BK.Ho,BK.Ho,0,BK.Ng,B3,false,BK.K8,BK.K8));}}if(Me)this.Bl=(this.Bl&~(1<<BK.Ic
))|33554432;if(AxK&&(this.Bl<16777216))this.Bl=this.Bl|67108864;if(Me&&BK.MQ)this.
Bl=this.Bl|67108864;if(Me&&!(this.Bl&4095))this.AGZ=0x0;if(Me&&!(this.Bl&16777215
))this.Bl=0;if(TB&&(this.Bl>=67108864)){var H6=this.HO();if(!!H6)H6.APp(null,null
,this,this.AGZ);}if((TB&&!!(this.Bl&16777216))&&!!(this.Bl&33554432)){TB=false;Me=
true;}if(!!BK&&!(this.Bl&(4096<<BK.Ic)))return this;if(!!DE&&!(this.Bl&(4096<<DE.
Ic)))return this;if(Me&&!(this.Bl&16777216))return this;if(((YL||Awi)||TB)&&((this.
Bl<16777216)||(this.Bl>=33554432)))return this;if(Me)this.Bl=this.Bl&3758100479;
if(Me&&!(this.Bl&16777215))this.Bl=0;if(!!BK){this.Down=YL||TB;this.WV=this.AMH(
BK.Ho);this.M0=BK.M0;this.Ho=BK.Ho;this.Dm=B3;this.IV=BK.IV;this.Ng=BK.Ng;this.MQ=
BK.MQ;this.Ic=BK.Ic;this.Bp=BK.Bp;if(BK.Down&&!BK.IV)AGi=false;}if(!!DE){this.Down=
true;this.WV=this.AMH(DE.Ho);this.M0=DE.M0;this.Ho=DE.Ho;this.Dm=DE.Dm;this.IV=DE.
IV;this.Ng=DE.Ng;this.Ic=DE.Ic;this.MQ=false;this.Bp=DE.Bp;}var AWe=this.Down;if(
!!DE)(B=this.AND)?B[1].call(B[0],this):null;if((!!BK&&this.Down)&&!this.IV)(B=this.
B1)?B[1].call(B[0],this):null;if((!!BK&&this.Down)&&(this.IV>0))(B=this.D_)?B[1].
call(B[0],this):null;if((this.Down&&this.WV)&&!AGi){this.AWk=true;(B=this.AsW)?B[
1].call(B[0],this):null;}if(this.AWk&&(((AWe&&!this.WV)&&AGi)||((!AWe&&this.WV)&&
AGi))){this.AWk=false;(B=this.AAT)?B[1].call(B[0],this):null;}if(!!BK&&!AWe)(B=this.
KD)?B[1].call(B[0],this):null;if(!!this.Ac_){var Abn=0x0;if(((((this.Ac_&0x10)===
0x10)&&!!BK)&&BK.Down)&&(BK.IV>=1000))Abn=0x10;if((((this.Ac_&0x1)===0x1)&&!!DE)&&((
DE.K8[1]-DE.AeV[1])<=-this.At_))Abn=0x1;if((((this.Ac_&0x2)===0x2)&&!!DE)&&((DE.
K8[1]-DE.AeV[1])>=this.At_))Abn=0x2;if((((this.Ac_&0x4)===0x4)&&!!DE)&&((DE.K8[0
]-DE.AeV[0])<=-this.At_))Abn=0x4;if((((this.Ac_&0x8)===0x8)&&!!DE)&&((DE.K8[0]-DE.
AeV[0])>=this.At_))Abn=0x8;if(!!Abn){var H6=this.HO();if(!!H6){this.AGZ=Abn;H6.APp(
null,this,this,Abn);}}}return this;},Wu:function(CX,By,Nt,AaN,AaS,AaR){var B;if(
!!AaN&&(AaN!==this))return null;if((Nt<1)||(Nt>this.A1B))return null;if(this.Bl>=
33554432)return null;if((this.Bl>=16777216)&&!(this.Bl&(4096<<By)))return null;if(
!!(AaR&this.Ac_))return null;if(this.Bb5()){var AL=A.kz(CX,this.GetExtent());if(
!((AL[0]>=AL[2])||(AL[1]>=AL[3]))){var Pj=A.zT(CX);var EX=B3;if(Pj[0]<AL[0])EX=[
AL[0]-Pj[0],EX[1]];if(Pj[0]>=AL[2])EX=[(AL[2]-Pj[0])-1,EX[1]];if(Pj[1]<AL[1])EX=[
EX[0],AL[1]-Pj[1]];if(Pj[1]>=AL[3])EX=[EX[0],(AL[3]-Pj[1])-1];return A._NewObject(
C.ArQ,0).Initialize(this,EX);}}else{var G3=A.aan(9,A.vw,null);var P;G3.Set(0,A.zT(
CX));G3.Set(1,G3.Get(0));G3.Set(2,G3.Get(0));G3.Set(3,G3.Get(0));G3.Set(4,G3.Get(
0));G3.Set(1,[CX[0],G3.Get(1)[1]]);G3.Set(2,[G3.Get(2)[0],CX[1]]);G3.Set(3,[CX[2
],G3.Get(3)[1]]);G3.Set(4,[G3.Get(4)[0],CX[3]]);G3.Set(5,CX.slice(0,2));G3.Set(6
,[CX[2],CX[1]]);G3.Set(7,[CX[0],CX[3]]);G3.Set(8,CX.slice(2,4));for(P=0;P<9;P=P+
1)if(this.AMH(G3.Get(P)))return A._NewObject(C.ArQ,0).Initialize(this,A.aaj(G3.Get(
P),G3.Get(0)));}return null;},Bgn:function(E){if(E<1)E=1;this.At_=E;},ABt:function(
E){if(E<1)E=1;this.A1B=E;},An:function(E){if(E)this.CQ(0x10,0x0);else this.CQ(0x0
,0x10);},_Init:function(aArg){C.XI._Init.call(this,aArg);this.__proto__=C.Bd;this.
S=0x11B;},_Mark:function(D){var B;C.XI._Mark.call(this,D);if((B=this.AND)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AAT)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AsW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KD)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.B1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Core::SimpleTouchHandler"};C.Hz={timer:null,AGF:null,Aq5:null,AB5:
null,Xt:null,Ru:null,Bl:0,AFl:0,Aa_:5000,Ani:0,AGg:A.vw,AmB:0,AdQ:0,Ey:0,Aj6:0,Arh:
0,AmA:0,AdP:0,Ex:0,Aj5:0,Aj3:0,M0:A.vw,AZ3:A.vw,Fp:A.vw,FF:A.vw,Dm:A.vw,UZ:A.vw,
A0H:0.5,A4B:true,ACJ:true,XS:false,VT:false,VU:false,Aqp:false,AwP:0,JH:function(
CJ,aClip,aOffset,B5,aBlend){},Gh:function(Cw){var B;var BK=(C.AbY.isPrototypeOf(
Cw)?Cw:null);var DE=(C.AnV.isPrototypeOf(Cw)?Cw:null);var H2=(C.ArP.isPrototypeOf(
Cw)?Cw:null);var YL;var TB;var AxK;var Me;var Awi;YL=(!!BK&&BK.Down)&&!BK.IV;TB=(
!!BK&&BK.Down)&&(BK.IV>0);AxK=(!!BK&&BK.Down)&&(BK.IV>this.AwP);Me=!!BK&&!BK.Down;
Awi=!!DE;if(YL)this.AwP=((B=(BK.MQ?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if(YL){var Am2=
0;var Aa7;this.Bl=this.Bl|(1<<BK.Ic);for(Aa7=this.Bl&4095;Aa7>0;Aa7=Aa7>>1)if(!!(
Aa7&1))Am2=Am2+1;if(Am2===1)this.Bl=(this.Bl|16777216)|(4096<<BK.Ic);}if(Me&&(this.
Bl<16777216)){var H6=this.HO();var I_=null;if(!!H6){var AYj=(!!this.AG?this.AG:this.
Aa);var AV_=(!!H6.I$?H6.I$.C4:null);I_=H6.Wu(A.aam(Qh,BK.K8),BK.Ic,BK.Ng,AV_,AYj
,0x0);}if(!!I_){var P;for(P=0;P<10;P++)if(!!(this.Bl&(1<<P)))I_.B4.Gh(A._NewObject(
C.AbY,0).InitializeDown(P,BK.Ho,BK.Ng,B3,true,BK.K8));for(P=0;P<10;P++)if(!!(this.
Bl&(1<<P)))I_.B4.Gh(A._NewObject(C.AbY,0).InitializeUp(P,BK.Ho,BK.Ho,0,BK.Ng,B3,
false,BK.K8,BK.K8));}}if(Me)this.Bl=(this.Bl&~(1<<BK.Ic))|33554432;if(AxK&&(this.
Bl<16777216))this.Bl=this.Bl|67108864;if(Me&&BK.MQ)this.Bl=this.Bl|67108864;if(Me&&
!(this.Bl&16777215))this.Bl=0;if(TB&&(this.Bl>=67108864)){var H6=this.HO();if(!!
H6)H6.APp(null,null,this,0x0);}if((TB&&!!(this.Bl&16777216))&&!!(this.Bl&33554432
)){TB=false;Me=true;}if(!!BK&&!(this.Bl&(4096<<BK.Ic)))return this;if(!!DE&&!(this.
Bl&(4096<<DE.Ic)))return this;if(Me&&!(this.Bl&16777216))return this;if(((YL||Awi
)||TB)&&((this.Bl<16777216)||(this.Bl>=33554432)))return this;if(Me)this.Bl=this.
Bl&3758100479;if(Me&&!(this.Bl&16777215))this.Bl=0;if(!!H2&&(H2.Auo===this))return null;
if((!!H2&&H2.Down)&&(this.Aqp||!this.XS))return null;if((!!H2&&H2.Down)&&!A.vt(this.
M,this.Aa.A1y(H2.K8)))return null;if((!!H2&&!H2.Down)&&(!this.Aqp||(this.AFl!==H2.
Ic)))return null;if((!BK&&!DE)&&!H2)return null;if(!!BK){this.Aqp=YL||TB;this.AFl=
BK.Ic;this.M0=BK.M0;}if(!!DE)this.AFl=DE.Ic;if(!!H2){this.Aqp=H2.Down;this.AFl=H2.
Ic;}if(!!H2&&H2.Down){this.AYk();this.Ex=(((H2.Bp-this.Aj3)*0.001)*this.AdP)+this.
Ex;this.Ey=(((H2.Bp-this.Arh)*0.001)*this.AdQ)+this.Ey;if(this.VT)this.Ex=0;if(this.
VU)this.Ey=0;this.AdP=0;this.AdQ=0;this.VT=false;this.VU=false;this.AGg=this.Dm;
this.Ani=H2.Bp;return this;}if(YL){this.AYk();this.Ex=(((BK.Bp-this.Aj3)*0.001)*
this.AdP)+this.Ex;this.Ey=(((BK.Bp-this.Arh)*0.001)*this.AdQ)+this.Ey;if(this.VT||
!this.XS)this.Ex=0;if(this.VU||!this.XS)this.Ey=0;this.AdP=0;this.AdQ=0;this.VT=
false;this.VU=false;if(!this.XS){this.XS=true;(B=this.Ru)?B[1].call(B[0],this):null;(
B=this.AGF)?B[1].call(B[0],this):null;}this.AGg=this.Dm;this.Ani=BK.Bp;}if(!!DE){
var Gt=A.aaj(DE.Ho,DE.M0);var Ck=this.Dm;if(this.ACJ)Ck=[this.AGg[0]+Gt[0],Ck[1]
];Ck=[Ck[0],this.AGg[1]+Gt[1]];if(this.A4B){if(Ck[0]<this.FF[0])Ck=[this.FF[0]+(((
Ck[0]-this.FF[0])/2)|0),Ck[1]];else if(Ck[0]>this.Fp[0])Ck=[this.Fp[0]+(((Ck[0]-
this.Fp[0])/2)|0),Ck[1]];if(Ck[1]<this.FF[1])Ck=[Ck[0],this.FF[1]+(((Ck[1]-this.
FF[1])/2)|0)];else if(Ck[1]>this.Fp[1])Ck=[Ck[0],this.Fp[1]+(((Ck[1]-this.Fp[1])
/2)|0)];}else{if(Ck[0]<this.FF[0])Ck=[this.FF[0],Ck[1]];else if(Ck[0]>this.Fp[0]
)Ck=[this.Fp[0],Ck[1]];if(Ck[1]<this.FF[1])Ck=[Ck[0],this.FF[1]];else if(Ck[1]>this.
Fp[1])Ck=[Ck[0],this.Fp[1]];}if(!A.z8(Ck,this.Dm)){this.AZ3=A.aaj(Ck,this.Dm);this.
Dm=Ck;(B=this.Aq5)?B[1].call(B[0],this):null;(B=this.AB5)?B[1].call(B[0],this):null;
}}if((!!H2&&!H2.Down)&&((H2.Bp-this.Ani)>=200)){this.Ex=0;this.Ey=0;}if(TB&&((BK.
Bp-this.Ani)>=200)){this.Ex=0;this.Ey=0;}if(!!DE&&(DE.Bp>this.Ani)){var Gt=DE.Dm;
var A8N=1000/(DE.Bp-this.Ani);var Agu=0;var Agv;if(this.ACJ)Agu=Gt[0]*A8N;Agv=Gt[
1]*A8N;if((Agu*this.Ex)<0)this.Ex=0;if((Agv*this.Ey)<0)this.Ey=0;this.Ex=(this.Ex+
Agu)*0.5;this.Ey=(this.Ey+Agv)*0.5;this.Ani=DE.Bp;}if(!Me&&!H2)return this;if(!!
BK&&BK.MQ){this.Ex=0;this.Ey=0;}if((this.Dm[0]<=this.FF[0])||(this.Dm[0]>=this.Fp[
0]))this.Ex=0;else if(!this.Ex){var Eq=this.Dm[0];var ER=this.FF[0];var Ej=this.
Fp[0];if(Eq<ER)Ej=this.FF[0];else if(Eq>Ej)ER=this.Fp[0];else if(this.UZ[0]<=1){
ER=Eq;Ej=Eq;}else{var Abd=(Ej-Eq)%this.UZ[0];Ej=(Eq-this.UZ[0])+Abd;ER=Eq+Abd;if(
Ej<this.FF[0])Ej=this.FF[0];if(ER>this.Fp[0])ER=this.Fp[0];}if((ER-Eq)<=(Eq-Ej))
Eq=ER;else Eq=Ej;if(Eq!==this.Dm[0]){var IO=Eq-this.Dm[0];if(IO>0)this.Ex=Math.sqrt((
IO*2)*this.Aa_)+20;if(IO<0)this.Ex=-Math.sqrt((-IO*2)*this.Aa_)-20;this.AdP=(400-(
this.Ex*this.Ex))/(2*IO);this.AmA=Eq;}}else{var Bt9=this.Ex*this.Ex;var IO=Bt9/(
2*this.Aa_);var Eq=this.Dm[0];if(this.Ex>0)Eq=Eq+(IO|0);if(this.Ex<0)Eq=Eq-(IO|0
);if(Eq>this.Fp[0])Eq=this.Fp[0];else if(Eq<this.FF[0])Eq=this.FF[0];var A$f=Eq;
var ER=this.FF[0];var Ej=this.Fp[0];if(Eq<ER)Ej=this.FF[0];else if(Eq>Ej)ER=this.
Fp[0];else if(this.UZ[0]<=1){ER=Eq;Ej=Eq;}else{var Abd=(Ej-Eq)%this.UZ[0];Ej=(Eq-
this.UZ[0])+Abd;ER=Eq+Abd;if(Ej<this.FF[0])Ej=this.FF[0];if(ER>this.Fp[0])ER=this.
Fp[0];}if(this.Ex>0){if(Ej<=this.Dm[0])Eq=ER;else if((Eq-Ej)<(ER-Eq))Eq=Ej;else Eq=
ER;}else if(ER>=this.Dm[0])Eq=Ej;else if((Eq-Ej)>(ER-Eq))Eq=ER;else Eq=Ej;if(Eq!==
this.Dm[0]){IO=Eq-this.Dm[0];if(Eq!==A$f){var AgO=Eq-A$f;if(AgO>0)this.Ex=this.Ex+
Math.sqrt((AgO*2)*this.Aa_);if(AgO<0)this.Ex=this.Ex-Math.sqrt((-AgO*2)*this.Aa_
);}if(this.Ex>0)this.Ex=this.Ex+20;if(this.Ex<0)this.Ex=this.Ex-20;this.AdP=(400-(
this.Ex*this.Ex))/(2*IO);this.AmA=Eq;}else this.Ex=0;}if((this.Dm[1]<=this.FF[1]
)||(this.Dm[1]>=this.Fp[1]))this.Ey=0;else if(!this.Ey){var Er=this.Dm[1];var ER=
this.FF[1];var Ej=this.Fp[1];if(Er<ER)Ej=this.FF[1];else if(Er>Ej)ER=this.Fp[1];
else if(this.UZ[1]<=1){ER=Er;Ej=Er;}else{var Abd=(Ej-Er)%this.UZ[1];Ej=(Er-this.
UZ[1])+Abd;ER=Er+Abd;if(Ej<this.FF[1])Ej=this.FF[1];if(ER>this.Fp[1])ER=this.Fp[
1];}if((ER-Er)<=(Er-Ej))Er=ER;else Er=Ej;if(Er!==this.Dm[1]){var IO=Er-this.Dm[1
];if(IO>0)this.Ey=Math.sqrt((IO*2)*this.Aa_)+20;if(IO<0)this.Ey=-Math.sqrt((-IO*
2)*this.Aa_)-20;this.AdQ=(400-(this.Ey*this.Ey))/(2*IO);this.AmB=Er;}}else{var Bt_=
this.Ey*this.Ey;var IO=Bt_/(2*this.Aa_);var Er=this.Dm[1];if(this.Ey>0)Er=Er+(IO|
0);if(this.Ey<0)Er=Er-(IO|0);if(Er>this.Fp[1])Er=this.Fp[1];else if(Er<this.FF[1
])Er=this.FF[1];var A$g=Er;var ER=this.FF[1];var Ej=this.Fp[1];if(Er<ER)Ej=this.
FF[1];else if(Er>Ej)ER=this.Fp[1];else if(this.UZ[1]<=1){ER=Er;Ej=Er;}else{var Abd=(
Ej-Er)%this.UZ[1];Ej=(Er-this.UZ[1])+Abd;ER=Er+Abd;if(Ej<this.FF[1])Ej=this.FF[1
];if(ER>this.Fp[1])ER=this.Fp[1];}if(this.Ey>0){if(Ej<=this.Dm[1])Er=ER;else if((
Er-Ej)<(ER-Er))Er=Ej;else Er=ER;}else if(ER>=this.Dm[1])Er=Ej;else if((Er-Ej)>(ER-
Er))Er=ER;else Er=Ej;if(Er!==this.Dm[1]){IO=Er-this.Dm[1];if(Er!==A$g){var AgO=Er-
A$g;if(AgO>0)this.Ey=this.Ey+Math.sqrt((AgO*2)*this.Aa_);if(AgO<0)this.Ey=this.Ey-
Math.sqrt((-AgO*2)*this.Aa_);}if(this.Ey>0)this.Ey=this.Ey+20;if(this.Ey<0)this.
Ey=this.Ey-20;this.AdQ=(400-(this.Ey*this.Ey))/(2*IO);this.AmB=Er;}else this.Ey=
0;}if(!!BK)this.Aj3=BK.Bp;if(!!H2)this.Aj3=H2.Bp;this.Arh=this.Aj3;this.Aj5=this.
Dm[0];this.Aj6=this.Dm[1];this.Bt$();return this;},Wu:function(CX,By,Nt,AaN,AaS,
AaR){var B;if(!!AaN&&(AaN!==this))return null;if(this.Bl>=33554432)return null;if((
this.Bl>=16777216)&&!(this.Bl&(4096<<By)))return null;if(!this.ACJ&&!!(AaR&0xC))
return null;var AL=A.kz(CX,this.M);if(!((AL[0]>=AL[2])||(AL[1]>=AL[3]))){var Pj=
A.zT(CX);var EX=B3;if(Pj[0]<AL[0])EX=[AL[0]-Pj[0],EX[1]];if(Pj[0]>=AL[2])EX=[(AL[
2]-Pj[0])-1,EX[1]];if(Pj[1]<AL[1])EX=[EX[0],AL[1]-Pj[1]];if(Pj[1]>=AL[3])EX=[EX[
0],(AL[3]-Pj[1])-1];return A._NewObject(C.ArQ,0).Initialize(this,EX);}return null;
},AYk:function(){if(!!this.timer){A.zl([this,this.Ly],this.timer,0);this.timer=null;
}},Bt$:function(){this.timer=A._GetAutoObject(A.abm.AeN);A.y_([this,this.Ly],this.
timer,0);},Ly:function(H){var B;if(!this.timer)return;var Arm=(this.timer.Bp-this.
Aj3)*0.001;var Arn=(this.timer.Bp-this.Arh)*0.001;var Buh=Arm*Arm;var Bui=Arn*Arn;
var Agu=(this.AdP*Arm)+this.Ex;var Agv=(this.AdQ*Arn)+this.Ey;var Ck=[((((this.AdP
*0.5)*Buh)+(this.Ex*Arm))+this.Aj5)|0,((((this.AdQ*0.5)*Bui)+(this.Ey*Arn))+this.
Aj6)|0];if(this.VT&&(Arm>=0.5)){Ck=[this.AmA,Ck[1]];this.Ex=0;this.AdP=0;this.Aj5=
Ck[0];this.VT=false;}else if(this.VT){var KX=1-Math.pow(1-(Arm/0.5),5);Ck=[(this.
Aj5+((this.AmA-this.Aj5)*KX))|0,Ck[1]];}if(this.VU&&(Arn>=0.5)){Ck=[Ck[0],this.AmB
];this.Ey=0;this.AdQ=0;this.Aj6=Ck[1];this.VU=false;}else if(this.VU){var KX=1-Math.
pow(1-(Arn/0.5),5);Ck=[Ck[0],(this.Aj6+((this.AmB-this.Aj6)*KX))|0];}if(((this.Ex>
0)&&(Agu<0))||((this.Ex<0)&&(Agu>0))){Agu=0;Ck=[this.Dm[0],Ck[1]];}if(((this.Ey>
0)&&(Agv<0))||((this.Ey<0)&&(Agv>0))){Agv=0;Ck=[Ck[0],this.Dm[1]];}if(!this.VT&&(
Ck[0]<this.FF[0])){this.Aj5=Ck[0];this.AmA=this.FF[0];this.Aj3=this.timer.Bp;this.
VT=true;}else if(!this.VT&&(Ck[0]>this.Fp[0])){this.Aj5=Ck[0];this.AmA=this.Fp[0
];this.Aj3=this.timer.Bp;this.VT=true;}if(!this.VU&&(Ck[1]<this.FF[1])){this.Aj6=
Ck[1];this.AmB=this.FF[1];this.Arh=this.timer.Bp;this.VU=true;}else if(!this.VU&&(
Ck[1]>this.Fp[1])){this.Aj6=Ck[1];this.AmB=this.Fp[1];this.Arh=this.timer.Bp;this.
VU=true;}if(((!this.VT&&!!this.Ex)&&(Agu>-20))&&(Agu<20)){Ck=[this.AmA,Ck[1]];this.
Ex=0;this.AdP=0;this.Aj5=Ck[0];}if(((!this.VU&&!!this.Ey)&&(Agv>-20))&&(Agv<20)){
Ck=[Ck[0],this.AmB];this.Ey=0;this.AdQ=0;this.Aj6=Ck[1];}if(!A.z8(Ck,this.Dm)){this.
AZ3=A.aaj(Ck,this.Dm);this.Dm=Ck;(B=this.Aq5)?B[1].call(B[0],this):null;(B=this.
AB5)?B[1].call(B[0],this):null;}if(((!this.Ex&&!this.Ey)&&!this.VT)&&!this.VU){this.
AYk();this.XS=false;(B=this.Xt)?B[1].call(B[0],this):null;}},AOG:function(E){if(
E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.UZ=E;},AOl:function(E){if(E<0)E=0;if(
E>1)E=1;if(E===this.A0H)return;this.A0H=E;if(E<(1e-007))E=1e-007;this.Aa_=E*10000;
},_Init:function(aArg){C.Em._Init.call(this,aArg);this.__proto__=C.Hz;this.S=0x11B;
},_Mark:function(D){var B;C.Em._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AGF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aq5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AB5)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Xt)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ru)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Core::SlideTouchHandler"};C.B0={Af:null,KD:null,B1:null,D_:null,Ane:0,Bp:0,A4w:
0,Filter:148,CM:0,D4:0,Bw:true,Down:false,Aag:false,PE:false,Init:function(aArg){
var B;var C4=(C.O.isPrototypeOf(B=this.I)?B:null);if(!C4)throw new Error(AaD);this.
Af=C4.AGl;C4.AGl=this;},Gh:function(Cw){var B;if(!!Cw&&Cw.Bck(this.Filter)){this.
Down=Cw.Down;this.CM=Cw.CM;this.D4=Cw.D4;this.Bp=Cw.Bp;this.PE=false;if(Cw.Down){
this.A4w=this.Ane;this.Aag=this.Ane>0;if(this.Aag)(B=this.D_)?B[1].call(B[0],this
):null;else(B=this.B1)?B[1].call(B[0],this):null;if(!this.PE)this.Ane=this.Ane+1;
return!this.PE;}if(!Cw.Down){this.Aag=this.Ane>1;this.A4w=this.Ane-1;this.Ane=0;(
B=this.KD)?B[1].call(B[0],this):null;return!this.PE;}}return false;},_Init:function(
aArg){this.__proto__=C.B0;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.KD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.B1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D_)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.ArQ={
B4:null,ArT:0,Dm:A.vw,Initialize:function(Ag,aOffset){this.B4=Ag;this.Dm=aOffset;
this.ArT=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.ArQ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.B4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};C.A1H={Af:null,C4:null,_Init:function(aArg){this.
__proto__=C.A1H;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.C4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::ModalContext"};C.
Aor={ML:null,extent:A.vx,Ba:A.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
C.Aor;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.ML)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.AAh={AgD:A.vw,AgC:A.vw,_Init:function(aArg){C.Aor._Init.
call(this,aArg);this.__proto__=C.AAh;},_className:"Core::LayoutLineContext"};C.AAi={
Axh:A.vw,Axg:A.vw,AgD:A.vw,AgC:A.vw,_Init:function(aArg){C.Aor._Init.call(this,aArg
);this.__proto__=C.AAi;},_className:"Core::LayoutQuadContext"};C.AJw={C4:null,Af:
null,Qs:null,QC:null,Lu:null,Anb:null,_Init:function(aArg){this.__proto__=C.AJw;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.C4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Qs)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.QC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lu)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Anb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::DialogContext"};C.AP1={Fh:null,BT:null,BY:null,A8U:false,Bq2:function(){if(
!this.Fh)return;var Ou=this.Fh;this.Fh.Oq=null;this.Fh=null;A.ow([this,this.AXC]
,this);Ou.A14(this);},BsG:function(H){if(!!this.Fh)return;if(!this.BY)return;this.
Fh=this.BY;this.BY=this.BY.Af;if(!!this.BY)this.BY.AG=null;else this.BT=null;this.
Fh.Af=null;this.A8U=true;this.Fh.Ru(this);this.A8U=false;},Bs4:function(H){A.ow([
this,this.BsG],this);},Bs3:function(H){A.ow([this,this.Bs4],this);},AXC:function(
H){A.ow([this,this.Bs3],this);},Bas:function(IL){if(!IL||!IL.Oq)return;if(IL.Oq!==
this)throw new Error(Adz);var A$G=false;if(this.Fh===IL){this.Fh=null;A$G=true;A.
ow([this,this.AXC],this);}else{if(!!IL.Af)IL.Af.AG=IL.AG;else this.BT=IL.AG;if(!
!IL.AG)IL.AG.Af=IL.Af;else this.BY=IL.Af;IL.AG=null;IL.Af=null;}IL.Oq=null;if(A$G
)IL.A13(this);},A4D:function(IL,AVC){if(!IL)return;if(!!IL.Oq)throw new Error(Yc
);IL.Oq=this;if(AVC){IL.Af=this.BY;if(!!this.BY)this.BY.AG=IL;else this.BT=IL;this.
BY=IL;}else{IL.AG=this.BT;if(!!this.BT)this.BT.Af=IL;else this.BY=IL;this.BT=IL;
}if(!this.Fh)A.ow([this,this.AXC],this);},_Init:function(aArg){this.__proto__=C.
AP1;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.Fh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.BT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BY)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};C.AiD={Oq:null,AG:null,Af:null,A14:function(Aqo
){},A13:function(Aqo){},Ru:function(Aqo){this.AbR();},LF:function(){if(!!this.Oq&&(
this.Oq.Fh===this))this.Oq.Bq2();},AbR:function(){if(!!this.Oq)this.Oq.Bas(this);
},AME:function(){return!!this.Oq&&(this.Oq.Fh===this);},_Init:function(aArg){this.
__proto__=C.AiD;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Oq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Task"};C.APZ={As:null,Ari:null,Ru:function(Aqo){this.Ari.
As=this.As;A.vv(this.Ari,0);A.ow([this,this.BsD],this);},BsD:function(H){this.Ari.
As=null;this.Ari=null;this.As=null;this.LF();},_Init:function(aArg){C.AiD._Init.
call(this,aArg);this.__proto__=C.APZ;},_Mark:function(D){var B;C.AiD._Mark.call(
this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ari)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"};C.ACV={_Init:function(
){C.AP1._Init.call(this,0);},_variants:function(){return this;},_this:null};C.AfA={
resource:null,Kx:function(){this.resource=null;},Init:function(aArg){this.resource=
aArg;},_Init:function(aArg){this.__proto__=C.AfA;this.Init(aArg);A.hJ++;},_Done:
function(){this.Kx();this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Resource"};C.Timer={Mw:null,timer:null,Bp:0,Period:1000,TZ:
0,Bw:false,Kx:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=
null;},AGO:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;
var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=A.zk(this,this.Trigger
);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=tmp;},P3:
function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.Bw)this.AGO(
this.TZ,E);},UM:function(E){if(E<0)E=0;if(E===this.TZ)return;this.TZ=E;if(this.Bw
)this.AGO(E,this.Period);},An:function(E){if(E===this.Bw)return;this.Bw=E;if(E)this.
AGO(this.TZ,this.Period);else this.AGO(0,0);this.Bp=this.Asi();},Asi:function(){
var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;},Trigger:
function(){var B;this.Bp=this.Asi();if(!this.Period)this.An(false);(B=this.Mw)?B[
1].call(B[0],this):null;},ACS:function(H){this.An(false);},StartTimer:function(H
){if(this.Bw)this.An(false);this.An(true);},_Init:function(aArg){this.__proto__=
C.Timer;A.hJ++;},_Done:function(){this.Kx();this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Mw)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.Bp={APx:0,AsS:0,AhB:0,Gz:0,GB:0,Year:0,A8r:function(
AdM,AU7){if(AU7)switch(AdM){case 1:return A.abj.Bcr;case 2:return A.abj.Bbm;case
3:return A.abj.BcO;case 4:return A.abj.A$3;case 5:return A.abj.BcS;case 6:return A.
abj.Bcu;case 7:return A.abj.Bct;case 8:return A.abj.A$5;case 9:return A.abj.BhA;
case 10:return A.abj.Bdl;case 11:return A.abj.Bdk;case 12:return A.abj.BaP;default:
return A.jm;}else switch(AdM){case 1:return A.abj.AAb;case 2:return A.abj.Ay8;case
3:return A.abj.AAm;case 4:return A.abj.Ayc;case 5:return A.abj.AAo;case 6:return A.
abj.AAd;case 7:return A.abj.AAc;case 8:return A.abj.Ayj;case 9:return A.abj.ACx;
case 10:return A.abj.AAA;case 11:return A.abj.AAy;case 12:return A.abj.AyR;default:
return A.jm;}},A8p:function(A62,AU7){if(AU7)switch(A62){case 1:return A.abj.BcZ;
case 2:return A.abj.BiN;case 3:return A.abj.Bjo;case 4:return A.abj.BiA;case 5:return A.
abj.Bbz;case 6:return A.abj.Bhu;case 0:return A.abj.Bin;default:return A.jm;}else
switch(A62){case 1:return A.abj.BcY;case 2:return A.abj.BiM;case 3:return A.abj.
Bjn;case 4:return A.abj.Biz;case 5:return A.abj.Bby;case 6:return A.abj.Bht;case
0:return A.abj.Bim;default:return A.jm;}},A8o:function(){var result=0;{var d=new
Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset()*60));}return result;
},JL:function(){var d=this.Gz;var Kl=this.GB;var C6=this.Year-((Kl<=2)?1:0);var Awj=(((
C6>=0)?C6:C6-399)/400)|0;var Aka=C6-(Awj*400);var Tz=(((((153*(Kl+((Kl>2)?-3:9))
)+2)/5)|0)+d)-1;var Amx=(((Aka*365)+((Aka/4)|0))-((Aka/100)|0))+Tz;var Pl=((Awj*
146097)+Amx)-719468;return(((Pl*86400)+(this.AhB*3600))+(this.AsS*60))+this.APx;
},ABN:function(E){var B;E+=62162035200;if(E<0)E=0;var TM=Math.trunc(E/86400)|0;var
Awj=(((TM>=0)?TM:TM-146096)/146097)|0;var Amx=TM-(Awj*146097);var Aka=((((Amx-((
Amx/1460)|0))+((Amx/36524)|0))-((Amx/146096)|0))/365)|0;var C6=Aka+(Awj*400);var
Tz=Amx-(((365*Aka)+((Aka/4)|0))-((Aka/100)|0));var AW8=(((5*Tz)+2)/153)|0;var d=(
Tz-((((153*AW8)+2)/5)|0))+1;var Kl=AW8+((AW8<10)?3:-9);var BG=Math.trunc(E/3600)
%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=C6+((Kl<=2)?1:0);this.UO(
Kl);this.Ld(d);this.Alf(BG+((BG<0)?24:0));this.Ali(P+((P<0)?60:0));this.All(s+((
s<0)?60:0));},ZY:function(){if(this.GB===2){if(!(this.Year%4)&&(!!(this.Year%100
)||!(this.Year%400)))return 29;else return 28;}else if((((this.GB===4)||(this.GB===
6))||(this.GB===9))||(this.GB===11))return 30;else return 31;},Bez:function(){var
B;var Tz=this.ZX()-1;var AqD=(6+this.As0())%7;var Amz=((371+AqD)-Tz)%7;if(this.GB===
12){var d=this.Gz;if((d===31)&&(AqD<3))return 0;if((d===30)&&(AqD<2))return 0;if((
d===29)&&(AqD<1))return 0;}if(Amz<=3)Tz+=Amz;else Tz-=(7-Amz);if(Tz<0){var d=this.
Gz;var Kl=this.GB;this.Year--;this.Ld(31);this.UO(12);Tz=this.ZX()-1;AqD=(6+this.
As0())%7;Amz=((371+AqD)-Tz)%7;if(Amz<=3)Tz+=Amz;else Tz-=Amz;this.Year++;this.Ld(
d);this.UO(Kl);}return(Tz/7)|0;},ZX:function(){var B;var d=this.Gz;var Kl=this.GB;
var C6=this.Year;var Ad3=((!!!(C6%4)&&(!!(C6%100)||!!!(C6%400)))?1:0);switch(Kl){
case 2:d+=31;break;case 3:d+=(59+Ad3);break;case 4:d+=(90+Ad3);break;case 5:d+=(
120+Ad3);break;case 6:d+=(151+Ad3);break;case 7:d+=(181+Ad3);break;case 8:d+=(212+
Ad3);break;case 9:d+=(243+Ad3);break;case 10:d+=(273+Ad3);break;case 11:d+=(304+
Ad3);break;case 12:d+=(334+Ad3);break;default:;}return d;},As0:function(){var B;
var d=this.Gz;var Kl=this.GB+((this.GB>2)?-2:10);var C6=this.Year-((this.GB<=2)?
1:0);var BF=(C6/100)|0;C6%=100;d+=((((((((26*Kl)-2)/10)|0)+C6)+((C6/4)|0))+((BF/
4)|0))-(2*BF));if(d>=0)return d%7;else return(7-(-d%7))%7;},All:function(E){if(E<
0)E=0;if(E>59)E=59;this.APx=E;},Ali:function(E){if(E<0)E=0;if(E>59)E=59;this.AsS=
E;},Alf:function(E){if(E<0)E=0;if(E>23)E=23;this.AhB=E;},Ld:function(E){if(E<1)E=
1;if(E>31)E=31;this.Gz=E;},UO:function(E){if(E<1)E=1;if(E>12)E=12;this.GB=E;},Format:
function(HZ){var result=A.jm;var inx=0;while(!!(HZ.charCodeAt(inx)||0))if((HZ.charCodeAt(
inx)||0)===0x25){var YD=1;inx=inx+1;if((HZ.charCodeAt(inx)||0)===0x23){inx=inx+1;
YD=0;}switch(HZ.charCodeAt(inx)||0){case 0x64:result=result+A.aaq(this.Gz,2*YD,10
);break;case 0x48:result=result+A.aaq(this.AhB,2*YD,10);break;case 0x49:if(!(this.
AhB%12))result=result+Vo;else result=result+A.aaq(this.AhB%12,2*YD,10);break;case
0x6D:result=result+A.aaq(this.GB,2*YD,10);break;case 0x4D:result=result+A.aaq(this.
AsS,2*YD,10);break;case 0x70:if(this.AhB<12)result=result+A.abj.A$M;else result=
result+A.abj.BgU;break;case 0x53:result=result+A.aaq(this.APx,2*YD,10);break;case
0x77:result=result+A.aaq(this.As0(),YD,10);break;case 0x79:result=result+A.aaq(this.
Year%100,2*YD,10);break;case 0x59:result=result+A.aaq(this.Year,4*YD,10);break;case
0x25:result=result+Yd;break;case 0x6A:result=result+A.aaq(this.ZX(),3*YD,10);break;
case 0x57:result=result+A.aaq(this.Bez(),2*YD,10);break;case 0x61:result=result+
this.A8p(this.As0(),true);break;case 0x41:result=result+this.A8p(this.As0(),false
);break;case 0x62:result=result+this.A8r(this.GB,true);break;case 0x42:result=result+
this.A8r(this.GB,false);break;default:;}inx=inx+1;}else{result=result+String.fromCharCode(
HZ.charCodeAt(inx)||0);inx=inx+1;}return result;},Initialize2:function(AaT,AdM,Bpk
,BpA,BpR,Bp$){this.Year=AaT;this.UO(AdM);this.Ld(Bpk);this.Alf(BpA);this.Ali(BpR
);this.All(Bp$);return this;},Initialize:function(Af3){this.ABN(Af3);return this;
},BaW:function(Af3){if(!Af3)return A._NewObject(C.AlH,0).Initialize(this.JL());return A.
_NewObject(C.AlH,0).Initialize(this.JL()-Af3.JL());},Bh6:function(AvD){if(!AvD)return this;
return A._NewObject(C.Bp,0).Initialize(this.JL()-AvD.JL());},J:function(AvD){if(
!AvD)return this;return A._NewObject(C.Bp,0).Initialize(this.JL()+AvD.JL());},_Init:
function(aArg){this.__proto__=C.Bp;A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Time"
};C.AlH={ACu:0,AAs:0,AzK:0,LJ:0,JL:function(){return(((this.LJ*86400)+(this.AzK*
3600))+(this.AAs*60))+this.ACu;},ABN:function(E){var AGX=1;this.LJ=Math.trunc(E/
86400)|0;if(E<0){E=-E;AGX=-1;}this.AzK=AGX*(Math.trunc(E/3600)%24|0);this.AAs=AGX
*(Math.trunc(E/60)%60|0);this.ACu=AGX*(E%60|0);},Initialize2:function(Bpl,BpB,BpS
,Bqc){this.LJ=Bpl;this.AzK=BpB;this.AAs=BpS;this.ACu=Bqc;return this;},Initialize:
function(Af3){this.ABN(Af3);return this;},_Init:function(aArg){this.__proto__=C.
AlH;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},
_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TimeSpan"};C.A42={As:null,Oq:null,Trigger:
function(Bpf,AVC){var Ou=A._NewObject(C.APZ,0);Ou.Ari=this;Ou.As=Bpf;this.Oq.A4D(
Ou,AVC);},_Init:function(aArg){this.__proto__=C.A42;this.Oq=A._GetAutoObject(C.ACV
);A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Oq
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::SystemEvent"};C.A43={Jf:null
,Event:null,ANE:null,AqZ:function(H){var B;if(!this.Event)return;this.Jf=this.Event.
As;(B=this.ANE)?B[1].call(B[0],this):null;this.Jf=null;},Bfg:function(E){if(this.
Event===E)return;if(!!this.Event)A.zl([this,this.AqZ],this.Event,0);this.Event=E;
if(!!this.Event)A.y_([this,this.AqZ],this.Event,0);},_Init:function(aArg){this.__proto__=
C.A43;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Jf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Event)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANE)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::SystemEventHandler"};C.BxX={C_:0x1,BuV:
0x2,Bv0:0x4,BxP:0x8,Bw:0x10,Hy:0x20,Bv1:0x40,BwB:0x80,BvW:0x100,Bwf:0x200,BvK:0x400
,Bxa:0x800,Bh:0x1000,BxU:0x2000,BwX:0x4000,BwY:0x8000,Zi:0x10000,BwW:0x20000,Bxl:
0x40000};C.OX={Bxb:0x1,Bxc:0x2,BuR:0x4,BuS:0x8,BuT:0x10,BuQ:0x20};C.AeT={None:0,
BxL:1,Bvb:2,Bwk:3,Bxf:4,BxM:5,BxN:6,Bvc:7,Bvd:8,Bwm:9,Bwl:10,Bxh:11,Bxg:12};C.ArV={
None:0,BxJ:1,Left:2,Bu$:3,XV:4,AZE:5,BxK:6,Right:7,Bva:8};C.KeyCode={NoKey:0,Ok:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.Bxd={Bx3:0x1,Bx0:0x2,Bx1:0x4,Bx2:
0x8,Bwo:0x10,Bv3:0x20};
C._Init=function(){C.AhX.__proto__=C.B4;C.XI.__proto__=C.B4;C.Em.__proto__=C.B4;C.
O.__proto__=C.Em;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AMU.__proto__=
C.Event;C.ArP.__proto__=C.Event;C.AbY.__proto__=C.Event;C.AnV.__proto__=C.Event;
C.Ac.__proto__=C.Em;C.Cu.__proto__=C.O;C.De.__proto__=C.O;C.Bd.__proto__=C.XI;C.
Hz.__proto__=C.Em;C.AAh.__proto__=C.Aor;C.AAi.__proto__=C.Aor;C.APZ.__proto__=C.
AiD;};C._ReInit=function(){var B;if((B=C.ACV._this))B._ReInit();};C.Dn=function(
D){var B;if((B=C.ACV._this)&&(B._cycle!=D))B._Done(C.ACV._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */