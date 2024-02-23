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
var Ca=[0,0];var BD=[0,0,0,0];var EW="The view does not belong to this group";var
Hh=[1000,740];var I8="The dialog component is already presented";var IJ="The dialog component is actually not presented";
var OT="No fader to perform the fade-in/out operation";var PV="Trying to use the same fader twice";
var PW="Trying to fade-in/out a group which belongs to another owner";var CM="No view to restack";
var E4="View is not in this group";var Lp="Sibling view does not belong to the group";
var PX="No view to remove";var Kq="No view to add";var N6="View already in a group";
var PY="Recursive invalidate during active update cycle.";var MC=[-8,-8,9,9];var
SV="No group to end the modal state.";var UE="The group is not modal.";var ZD="No group to obtain the modal state.";
var WG="The group serves already as the \'virtual keyboard\'.";var IK="The group is already modal.";
var UF="View is not in the same group or it is not embedded within the Outline "+
"Box";var ZE="The method SwitchToDialog() is not available in Core::VerticalList.";
var WH="The method DismissDialog() is not available in Core::VerticalList.";var ZF=
"The method PresentDialog() is not available in Core::VerticalList.";var WI="The method FadeGroup() is not available in Core::VerticalList.";
var ZG="The method RestackBehind() is not available in Core::VerticalList.";var ZH=
"The method RestackTop() is not available in Core::VerticalList.";var UG="The method Restack() is not available in Core::VerticalList.";
var WJ="The method Remove() is not available in Core::VerticalList.";var Q9="The method AddBehind() is not available in Core::VerticalList.";
var ZI="The method Add() is not available in Core::VerticalList.";var OU="The Slide Touch Handler:";
var Q_="is already connected with a view.";var WK="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var WM=[0,0,170,120];var WN="The method SwitchToDialog() is not available in Core::HorizontalList.";
var WO="The method DismissDialog() is not available in Core::HorizontalList.";var
ZJ="The method PresentDialog() is not available in Core::HorizontalList.";var WQ=
"The method FadeGroup() is not available in Core::HorizontalList.";var WR="The method RestackBehind() is not available in Core::HorizontalList.";
var SW="The method RestackTop() is not available in Core::HorizontalList.";var ZK=
"The method Restack() is not available in Core::HorizontalList.";var ZL="The method Remove() is not available in Core::HorizontalList.";
var Acp="The method AddBehind() is not available in Core::HorizontalList.";var UH=
"The method Add() is not available in Core::HorizontalList.";var ZM=[0,0,1,1];var
Afb="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var ZN="Trying to cancel a task not belonging to this queue!";var WS="Trying to enqueue a task twice!";
var ZO="12";var ZP="%";
C.Cf={Ag:null,AH:null,Ab:null,En:null,T:0x103,JO:0,PC:0x14,Ate:function(BG,AhJ){}
,Arp:function(E){if(this.JO===E)return;this.JO=E;if(!!this.Ab){var AiH=this.Ag;var
G3=0;while(!!AiH&&(E>AiH.JO)){AiH=AiH.Ag;G3=G3+1;}AiH=this.AH;while(!!AiH&&(E<AiH.
JO)){AiH=AiH.AH;G3=G3-1;}if(!!G3)this.Ab.Kl(this,G3);}},AX:function(E){var B;var
G3=E^this.PC;if(!G3)return;this.PC=E;if(!!this.En&&!((this.T&0x400)===0x400)){this.
Ab.T=this.Ab.T|0x5000;A.pe([B=this.Ab,B.Jz],this);this.Ab.Bd([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.En&&((this.T&0x400)===0x400)){this.En.Nt.T=this.En.
Nt.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},If:function(
){var BX=this.Ab;while(!!BX){var It=(C.Root.isPrototypeOf(BX)?BX:null);if(!!It)return It;
BX=BX.Ab;}return null;},J9:function(CV,aClip,aOffset,Cg,aBlend){},GetClipping:function(
){return this.GetExtent();},GQ:function(CK){return null;},X1:function(C_,BF,N9,ZW
,AcI,AcH){return null;},At3:function(C_){return C_;},Aub:function(BG,MG){return Ca;
},AmU:function(aOffset,AsO){},GetExtent:function(){return BD;},Cu:function(Re,UL
){var B;if(((this.T&0x200)===0x200))Re=Re&~0x400;var A1G=(this.T&~UL)|Re;var Xb=
A1G^this.T;this.T=A1G;if(!!this.Ab&&!!(Xb&0x14)){var BbK=((this.T&0x14)===0x14);
if(BbK&&!this.Ab.AR)this.Ab.A8(this);if(!BbK&&(this.Ab.AR===this))this.Ab.A8(this.
Ab.AB6(this,0x14));}if(!!this.Ab&&!!(Xb&0x403))this.Ab.Bd(this.GetClipping());if(((
!!this.En&&!!this.Ab)&&((A1G&0x400)===0x400))&&((Xb&0x1)===0x1)){this.T=this.T|0x800;
this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}if(!!this.Ab&&((Xb&0x400
)===0x400)){this.En=null;this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jz],this);}if(((((Xb&0x100000)===0x100000)&&((UL&0x100000)===0x100000)
)&&((this.T&0x10)===0x10))&&!((this.T&0x200080)===0x200080))this.Cu(0x0,0x10);if(((((
Xb&0x100000)===0x100000)&&((Re&0x100000)===0x100000))&&!((this.T&0x10)===0x10))&&(
!((this.T&0x200000)===0x200000)||((!((this.T&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
T&0x10)===0x10))))this.Cu(0x10,0x0);if(((((Xb&0x200000)===0x200000)&&((UL&0x200000
)===0x200000))&&!((this.T&0x10)===0x10))&&((this.T&0x100000)===0x100000))this.Cu(
0x10,0x0);if((((((Xb&0x200000)===0x200000)&&((Re&0x200000)===0x200000))&&((this.
T&0x100010)===0x100010))&&!((this.T&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.T&0x10
)===0x10))||((((this.T&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G4.CX!==this)))
)this.Cu(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cf;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.En)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.AjU={Ev:A.wf,Ek:A.wf
,Ate:function(BG,AhJ){var As=A._NewObject(C.ADi,0);this.En=null;As.extent=this.getExtent(
);As.A_=BG;As.Nt=AhJ;As.Aiu=this.Ek;As.Aiv=this.Ev;this.En=As;},Aub:function(BG,
MG){var B;var EL=this.PC;var As=(C.ADi.isPrototypeOf(B=this.En)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var JY=[BG[
2]-BG[0],BG[3]-BG[1]];var BU=x2-x1;var BI=y2-y1;var tmp;if(!MG){var Nw=[(B=As.A_
)[2]-B[0],B[3]-B[1]];x1=x1-As.A_[0];y1=y1-As.A_[1];if(Nw[0]!==JY[0]){var HN=((EL&
0x4)===0x4);var HO=((EL&0x8)===0x8);var Qj=((EL&0x1)===0x1);if(!HN&&(Qj||!HO))x1=((
x1*JY[0])/Nw[0])|0;if(!HO&&(Qj||!HN)){x2=x2-As.A_[0];x2=((x2*JY[0])/Nw[0])|0;x2=
x2-JY[0];}else x2=x2-As.A_[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qj){if(HN&&!HO)x2=x1+BU;
else if(!HN&&HO)x1=x2-BU;else{x1=x1+((((x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-
As.A_[2];x1=x1+BG[0];x2=x2+BG[2];}if(Nw[1]!==JY[1]){var HP=((EL&0x10)===0x10);var
HM=((EL&0x20)===0x20);var Qk=((EL&0x2)===0x2);if(!HP&&(Qk||!HM))y1=((y1*JY[1])/Nw[
1])|0;if(!HM&&(Qk||!HP)){y2=y2-As.A_[1];y2=((y2*JY[1])/Nw[1])|0;y2=y2-JY[1];}else
y2=y2-As.A_[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qk){if(HP&&!HM)y2=y1+BI;else if(!HP&&
HM)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.A_[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(MG){case 3:{x1=BG[0];x2=x1+BU;}break;case 4:{x2=
BG[2];x1=x2-BU;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((MG===3)||(MG===4)){var HP=((EL&0x10)===0x10);var HM=((EL&0x20
)===0x20);var Qk=((EL&0x2)===0x2);if(Qk){y1=BG[1];y2=BG[3];}else if(HP&&!HM){y1=
BG[1];y2=y1+BI;}else if(HM&&!HP){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((MG===1)||(MG===2)){var HN=((EL&0x4)===0x4);var HO=((
EL&0x8)===0x8);var Qj=((EL&0x1)===0x1);if(Qj){x1=BG[0];x2=BG[2];}else if(HN&&!HO
){x1=BG[0];x2=x1+BU;}else if(HO&&!HN){x2=BG[2];x1=x2-BU;}else{x1=BG[0]+((((BG[2]-
BG[0])-BU)/2)|0);x2=x1+BU;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BU=x2-x1;BI=y2-y1;if(
As.Aiv[0]<As.Aiu[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.Aiv[1]<As.Aiu[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.T&0x100)===0x100
)){this.Ek=[x1,y1];this.Ev=[x2,y2];}else{this.DY([x1,y1]);this.DM([x2,y2]);this.
En=As;}return[BU,BI];},AmU:function(aOffset,AsO){if(AsO){this.Ek=A.abf(this.Ek,aOffset
);this.Ev=A.abf(this.Ev,aOffset);}else{this.DY(A.abf(this.Ek,aOffset));this.DM(A.
abf(this.Ev,aOffset));}},GetExtent:function(){if(!!this.En&&this.En.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Ek[0];var y1=this.Ek[
1];var x2=this.Ev[0];var y2=this.Ev[1];var BU=x2-x1;var BI=y2-y1;var tmp;if(BU<0
)BU=-BU;if(BI<0)BI=-BI;if(BU>=BI){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BI>=BU){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DM:function(E){var B;if(A.aaX(E,this.
Ev))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.
En=null;this.Ev=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},DY:function(
E){var B;if(A.aaX(E,this.Ek))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.GetClipping());this.En=null;this.Ek=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jz],this);}},_Init:function(aArg){C.Cf._Init.call(this,aArg);this.__proto__=C.
AjU;},_className:"Core::LineView"};C.Zb={Kk:A.wf,Mv:A.wf,Ev:A.wf,Ek:A.wf,Ate:function(
BG,AhJ){var As=A._NewObject(C.ADj,0);this.En=null;As.extent=this.GetExtent();As.
A_=BG;As.Nt=AhJ;As.Aiu=this.Ek;As.Aiv=this.Ev;As.Az9=this.Mv;As.Az_=this.Kk;this.
En=As;},Aub:function(BG,MG){var B;var EL=this.PC;var As=(C.ADj.isPrototypeOf(B=this.
En)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var JY=[BG[2]-BG[0],BG[3]-BG[1]];var BU=x2-x1;var BI=y2-y1;if(!MG){var
Nw=[(B=As.A_)[2]-B[0],B[3]-B[1]];x1=x1-As.A_[0];y1=y1-As.A_[1];if(Nw[0]!==JY[0]){
var HN=((EL&0x4)===0x4);var HO=((EL&0x8)===0x8);var Qj=((EL&0x1)===0x1);if(!HN&&(
Qj||!HO))x1=((x1*JY[0])/Nw[0])|0;if(!HO&&(Qj||!HN)){x2=x2-As.A_[0];x2=((x2*JY[0]
)/Nw[0])|0;x2=x2-JY[0];}else x2=x2-As.A_[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qj){if(HN&&
!HO)x2=x1+BU;else if(!HN&&HO)x1=x2-BU;else{x1=x1+((((x2-x1)-BU)/2)|0);x2=x1+BU;}
}}else{x2=x2-As.A_[2];x1=x1+BG[0];x2=x2+BG[2];}if(Nw[1]!==JY[1]){var HP=((EL&0x10
)===0x10);var HM=((EL&0x20)===0x20);var Qk=((EL&0x2)===0x2);if(!HP&&(Qk||!HM))y1=((
y1*JY[1])/Nw[1])|0;if(!HM&&(Qk||!HP)){y2=y2-As.A_[1];y2=((y2*JY[1])/Nw[1])|0;y2=
y2-JY[1];}else y2=y2-As.A_[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qk){if(HP&&!HM)y2=y1+BI;
else if(!HP&&HM)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.A_[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MG){case 3:{x1=BG[0];x2=x1+BU;}break;
case 4:{x2=BG[2];x1=x2-BU;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((MG===3)||(MG===4)){var HP=((EL&0x10)===0x10);var
HM=((EL&0x20)===0x20);var Qk=((EL&0x2)===0x2);if(Qk){y1=BG[1];y2=BG[3];}else if(
HP&&!HM){y1=BG[1];y2=y1+BI;}else if(HM&&!HP){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MG===1)||(MG===2)){var HN=((EL&0x4)===0x4);
var HO=((EL&0x8)===0x8);var Qj=((EL&0x1)===0x1);if(Qj){x1=BG[0];x2=BG[2];}else if(
HN&&!HO){x1=BG[0];x2=x1+BU;}else if(HO&&!HN){x2=BG[2];x1=x2-BU;}else{x1=BG[0]+((((
BG[2]-BG[0])-BU)/2)|0);x2=x1+BU;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BU=(x2-x1)-1;BI=(
y2-y1)-1;var Ah_=As.extent[0];var Ah$=As.extent[1];var AfB=(As.extent[2]-Ah_)-1;
var AfA=(As.extent[3]-Ah$)-1;if(!AfB)AfB=1;if(!AfA)AfA=1;if(((this.T&0x100)===0x100
)){this.Ek=[x1+((((As.Aiu[0]-Ah_)*BU)/AfB)|0),y1+((((As.Aiu[1]-Ah$)*BI)/AfA)|0)];
this.Ev=[x1+((((As.Aiv[0]-Ah_)*BU)/AfB)|0),y1+((((As.Aiv[1]-Ah$)*BI)/AfA)|0)];this.
Mv=[x1+((((As.Az9[0]-Ah_)*BU)/AfB)|0),y1+((((As.Az9[1]-Ah$)*BI)/AfA)|0)];this.Kk=[
x1+((((As.Az_[0]-Ah_)*BU)/AfB)|0),y1+((((As.Az_[1]-Ah$)*BI)/AfA)|0)];}else{this.
DY([x1+((((As.Aiu[0]-Ah_)*BU)/AfB)|0),y1+((((As.Aiu[1]-Ah$)*BI)/AfA)|0)]);this.DM([
x1+((((As.Aiv[0]-Ah_)*BU)/AfB)|0),y1+((((As.Aiv[1]-Ah$)*BI)/AfA)|0)]);this.Kf([x1+((((
As.Az9[0]-Ah_)*BU)/AfB)|0),y1+((((As.Az9[1]-Ah$)*BI)/AfA)|0)]);this.Kg([x1+((((As.
Az_[0]-Ah_)*BU)/AfB)|0),y1+((((As.Az_[1]-Ah$)*BI)/AfA)|0)]);this.En=As;}return[BU+
1,BI+1];},AmU:function(aOffset,AsO){if(AsO){this.Ek=A.abf(this.Ek,aOffset);this.
Ev=A.abf(this.Ev,aOffset);this.Mv=A.abf(this.Mv,aOffset);this.Kk=A.abf(this.Kk,aOffset
);}else{this.DY(A.abf(this.Ek,aOffset));this.DM(A.abf(this.Ev,aOffset));this.Kf(
A.abf(this.Mv,aOffset));this.Kg(A.abf(this.Kk,aOffset));}},GetExtent:function(){
if(!!this.En&&this.En.isEmpty)return BD;var x1=this.Ek[0];var y1=this.Ek[1];var x2=
this.Mv[0];var y2=this.Mv[1];if((((this.Kk[0]!==x1)||(this.Ev[1]!==y1))||(this.Ev[
0]!==x2))||(this.Kk[1]!==y2)){if(this.Ev[0]<x1)x1=this.Ev[0];if(this.Mv[0]<x1)x1=
this.Mv[0];if(this.Kk[0]<x1)x1=this.Kk[0];if(this.Ev[1]<y1)y1=this.Ev[1];if(this.
Mv[1]<y1)y1=this.Mv[1];if(this.Kk[1]<y1)y1=this.Kk[1];if(this.Ek[0]>x2)x2=this.Ek[
0];if(this.Ev[0]>x2)x2=this.Ev[0];if(this.Kk[0]>x2)x2=this.Kk[0];if(this.Ek[1]>y2
)y2=this.Ek[1];if(this.Ev[1]>y2)y2=this.Ev[1];if(this.Kk[1]>y2)y2=this.Kk[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},Kg:function(E){var B;if(A.aaX(E,this.Kk))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.En=null;this.Kk=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},Kf:function(E){var B;if(A.aaX(E,
this.Mv))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping()
);this.En=null;this.Mv=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},DM:function(
E){var B;if(A.aaX(E,this.Ev))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Bd(
this.GetClipping());this.En=null;this.Ev=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jz],this);}},DY:function(E){var B;if(A.aaX(E,this.Ek))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());this.En=null;this.Ek=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},AQl:function(KS){var Hs=A.abi(4,
A.wf,null);var P=0;var H$=3;var A1c=false;var A1d=false;Hs.Set(0,this.Ek);Hs.Set(
1,this.Ev);Hs.Set(2,this.Mv);Hs.Set(3,this.Kk);while(P<4){var Bfe=Hs.Get(P)[0];var
AKE=Hs.Get(P)[1];var BAB=Hs.Get(H$)[0];var A3o=Hs.Get(H$)[1];if(((AKE>KS[1])!==(
A3o>KS[1]))||((AKE<KS[1])!==(A3o<KS[1]))){var Eg=((((BAB-Bfe)*(KS[1]-AKE))/(A3o-
AKE))|0)+Bfe;if(KS[0]>Eg)A1c=!A1c;if(KS[0]<Eg)A1d=!A1d;}H$=P;P=P+1;}return A1c||
A1d;},Bhy:function(){return((((this.Ek[0]===this.Kk[0])&&(this.Ev[0]===this.Mv[0
]))&&(this.Ek[1]===this.Ev[1]))&&(this.Mv[1]===this.Kk[1]))||((((this.Ek[0]===this.
Ev[0])&&(this.Mv[0]===this.Kk[0]))&&(this.Ek[1]===this.Kk[1]))&&(this.Ev[1]===this.
Mv[1]));},_Init:function(aArg){C.Cf._Init.call(this,aArg);this.__proto__=C.Zb;},
_className:"Core::QuadView"};C.El={M:A.wg,Ate:function(BG,AhJ){var As=A._NewObject(
C.AqJ,0);As.extent=this.M;As.A_=BG;As.Nt=AhJ;this.En=As;},Aub:function(BG,MG){var
B;var EL=this.PC;var As=this.En;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var JY=[BG[2]-BG[0],BG[3]-BG[1]];var BU=x2-x1;var BI=
y2-y1;if(!MG){var Nw=[(B=As.A_)[2]-B[0],B[3]-B[1]];x1=x1-As.A_[0];y1=y1-As.A_[1];
if(Nw[0]!==JY[0]){var HN=((EL&0x4)===0x4);var HO=((EL&0x8)===0x8);var Qj=((EL&0x1
)===0x1);if(!HN&&(Qj||!HO))x1=((x1*JY[0])/Nw[0])|0;if(!HO&&(Qj||!HN)){x2=x2-As.A_[
0];x2=((x2*JY[0])/Nw[0])|0;x2=x2-JY[0];}else x2=x2-As.A_[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qj){if(HN&&!HO)x2=x1+BU;else if(!HN&&HO)x1=x2-BU;else{x1=x1+((((x2-x1)-BU
)/2)|0);x2=x1+BU;}}}else{x2=x2-As.A_[2];x1=x1+BG[0];x2=x2+BG[2];}if(Nw[1]!==JY[1
]){var HP=((EL&0x10)===0x10);var HM=((EL&0x20)===0x20);var Qk=((EL&0x2)===0x2);if(
!HP&&(Qk||!HM))y1=((y1*JY[1])/Nw[1])|0;if(!HM&&(Qk||!HP)){y2=y2-As.A_[1];y2=((y2
*JY[1])/Nw[1])|0;y2=y2-JY[1];}else y2=y2-As.A_[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qk
){if(HP&&!HM)y2=y1+BI;else if(!HP&&HM)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.A_[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MG){case 3:{x1=
BG[0];x2=x1+BU;}break;case 4:{x2=BG[2];x1=x2-BU;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((MG===3)||(MG===4)){var HP=((
EL&0x10)===0x10);var HM=((EL&0x20)===0x20);var Qk=((EL&0x2)===0x2);if(Qk){y1=BG[
1];y2=BG[3];}else if(HP&&!HM){y1=BG[1];y2=y1+BI;}else if(HM&&!HP){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MG===1)||(MG===2)){var
HN=((EL&0x4)===0x4);var HO=((EL&0x8)===0x8);var Qj=((EL&0x1)===0x1);if(Qj){x1=BG[
0];x2=BG[2];}else if(HN&&!HO){x1=BG[0];x2=x1+BU;}else if(HO&&!HN){x2=BG[2];x1=x2-
BU;}else{x1=BG[0]+((((BG[2]-BG[0])-BU)/2)|0);x2=x1+BU;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.T&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.En=As;}return[x2-x1,y2-y1];},AmU:function(aOffset,AsO){if(AsO)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Bd(this.GetClipping());this.En=null;this.M=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400
))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;
A.pe([B=this.Ab,B.Jz],this);}},_Init:function(aArg){C.Cf._Init.call(this,aArg);this.
__proto__=C.El;},_className:"Core::RectView"};C.O={B7:null,B8:null,AJD:null,Fq:null
,G4:null,Xc:null,Apo:null,AR:null,GY:255,Ay1:0,Ay4:0,Ay3:0,Ay2:0,Init:function(aArg
){this.Am();},J9:function(CV,aClip,aOffset,Cg,aBlend){var B;Cg=((Cg+1)*this.GY)>>
8;aBlend=aBlend&&((this.T&0x2)===0x2);if(!this.Fq||(CV.CX===this))this.BbA(CV,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cg,aBlend);else{var B1=255|(255<<8)|(255<<16)|((
Cg&0xFF)<<24);this.Fq.Update();CV.A4K(aClip,this.Fq,0,A.abh(this.M,aOffset),Ca,B1
,B1,B1,B1,aBlend);}},GetClipping:function(){var B;var Ax=this.M;if(!!this.Fq)return Ax;
Ax=[].concat(Ax[0]-this.Ay2,Ax.slice(1,4));Ax=A.abP(Ax,Ax[1]-this.Ay4);Ax=A.abN(
Ax,Ax[2]+this.Ay3);Ax=[].concat(Ax.slice(0,3),Ax[3]+this.Ay1);if(((this.T&0x80000
)===0x80000)){var ApA=BD;var X;for(X=this.B7;!!X;X=X.Ag)if(((X.T&0x1)===0x1))ApA=
A.wC(ApA,X.GetClipping());Ax=A.wC(Ax,A.abh(ApA,this.M.slice(0,2)));}return Ax;},
X1:function(C_,BF,N9,ZW,AcI,AcH){var B;var X=this.B8;var AoS=null;var AE=BD;var JZ=
null;var A1x=!!this.Xc&&(!!this.Xc.FF||!!this.Xc.B7);if(((B=A.lb(C_,this.M))[0]>=
B[2])||(B[1]>=B[3]))return null;C_=A.abg(C_,this.M.slice(0,2));if(!!AcI){X=AcI;while(
!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.T&0x400)===0x400)&&!JZ){JZ=X.AH;while(
!!JZ&&!((JZ.T&0x200)===0x200))JZ=JZ.AH;if(!!JZ)AE=A.lb(C_,JZ.GetExtent());else AE=
BD;}if(JZ===X){JZ=null;AE=BD;}if((!!ZW&&!!(C.O.isPrototypeOf(X)?X:null))||((((((
X.T&0x8)===0x8)&&((X.T&0x10)===0x10))&&!((X.T&0x40000)===0x40000))&&!((X.T&0x20000
)===0x20000))&&(!((X.T&0x10000)===0x10000)||((this.G4.CX===X)&&!A1x)))){var extent=
X.GetExtent();var AI5=ZW;var AoC=null;if(AI5===X)AI5=null;if(((X.T&0x400)===0x400
)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))AoC=X.X1(AE,BF,N9,AI5,AcI,
AcH);}else if(!(((B=A.lb(extent,C_))[0]>=B[2])||(B[1]>=B[3]))||(ZW===X))AoC=X.X1(
C_,BF,N9,AI5,AcI,AcH);X=X.AH;if(!!AoC){if(!AoS||((AoC.Auo<AoS.Auo)&&(AoC.Auo>=0)
))AoS=AoC;if(!AoC.Auo)X=null;}}else X=X.AH;AcI=null;}return AoS;},At3:function(C_
){var B;var F;var X=this.B7;var Lv=BD;var Az3=true;var result=(C_=F=A.abg(C_,this.
M.slice(0,2)),F);while(!!X){if(((X.T&0x200)===0x200)){var Atq=(C.Z.isPrototypeOf(
X)?X:null);Lv=A.lb(C_,Atq.M);Az3=((Atq.T&0x1)===0x1);}if(((X.T&0x1)===0x1)){if(((
X.T&0x400)===0x400)){if(Az3){var AE=A.lb(X.GetClipping(),Lv);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.At3(AE));}}else{var AE=A.lb(X.GetClipping(),
C_);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.At3(AE));}}X=X.Ag;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cu:function(Re,UL){var B;
var Tc=this.T;if(((!!this.Ab&&!!!this.Fq)&&((this.T&0x80001)===0x80001))&&((UL&0x80000
)===0x80000))this.Ab.Bd(this.GetClipping());C.El.Cu.call(this,Re,UL);if((((!!this.
Ab&&!!!this.Fq)&&((this.T&0x1)===0x1))&&((Re&0x80000)===0x80000))&&!((Tc&0x80000
)===0x80000))this.Ab.Bd(this.GetClipping());var Xb=this.T^Tc;if(!!this.AR&&((Xb&
0x40)===0x40)){if(((this.T&0x40)===0x40))this.AR.Cu(0x40,0x0);else this.AR.Cu(0x0
,0x40);}if(!!this.G4&&((Xb&0x40)===0x40)){if(((this.T&0x40)===0x40)&&((this.G4.CX.
T&0x14)===0x14))this.G4.CX.Cu(0x40,0x0);else this.G4.CX.Cu(0x0,0x40);}if(((Xb&0x10
)===0x10)){var X;for(X=this.B7;!!X;X=X.Ag)if((((X.T&0x300000)===0x300000)&&!((X.
T&0x80)===0x80))&&(!((X.T&0x10000)===0x10000)||(this.G4.CX===X)))X.Cu(Re&0x10,UL&
0x10);}if(!!Xb){this.T=this.T|0x8000;A.pe([this,this.AAH],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Alv=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJJ=[
E[2]-E[0],E[3]-E[1]];var Apw=!A.aaX(Alv,AJJ);if(Apw&&!!this.Fq){this.Fq.Ard(AJJ);
A.we(this,0);A.we(this.Fq,0);}C.El.H.call(this,E);if((Apw&&(Alv[0]>0))&&(Alv[1]>
0)){var A_=[].concat(Ca,Alv);var X=this.B7;while(!!X){if((!X.En&&(X.PC!==0x14))&&
!((X.T&0x400)===0x400))X.Ate(A_,null);X=X.Ag;}}if(Apw){this.T=this.T|0x5000;A.pe([
this,this.AAH],this);}},A2A:function(CK){var Bcu=(C.KeyEvent.isPrototypeOf(CK)?CK:
null);var DW=this.AJD;if(!Bcu)return null;while(!!DW&&(!DW.Bv||!DW.GQ(Bcu)))DW=DW.
Ag;return DW;},BAm:function(G){if(!!this.Fq){this.Fq.CX=this;var AE=A.abg(this.At3(
A.abh(this.Fq.QB,this.M.slice(0,2))),this.M.slice(0,2));this.Fq.AuI(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BbA(this.Fq,AE,Ca,255,true);this.Fq.
CX=null;}},BbA:function(CV,aClip,aOffset,Cg,aBlend){var B;var X=this.B7;var Lv=BD;
var Az3=true;this.Bgw(CV,aClip,aOffset,Cg,aBlend);while(!!X){if(((X.T&0x200)===0x200
)){var Atq=(C.Z.isPrototypeOf(X)?X:null);Az3=((Atq.T&0x1)===0x1);Lv=aClip;if(!((
Atq.T&0x80000)===0x80000))Lv=A.lb(Lv,A.abh(Atq.M,aOffset));}if(((X.T&0x1)===0x1)
){if(((X.T&0x400)===0x400)){if(Az3){var AE=A.lb(A.abh(X.GetClipping(),aOffset),Lv
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.J9(CV,AE,aOffset,Cg,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.J9(CV,AE,aOffset,Cg,aBlend);}}X=X.Ag;}this.Bgz(CV,aClip,aOffset,Cg,aBlend);},Bej:
function(){var B;var A07=((this.T&0x1000)===0x1000);var Aif=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Z6=false;var Ac1=BD;var KU=BD;var Z7=Ca;var Ata=0;var Atb=0;var
As$=0;var Qc=0;var X=this.B8;var JZ=null;var Aln=null;while(!!X){if(((X.T&0x800)===
0x800)){Z6=true;X.T=X.T&~0x800;}if(Z6&&((X.T&0x200)===0x200)){Z6=false;if(!!(C.Z.
isPrototypeOf(X)?X:null).Agx)X.T=X.T|0x1000;}X=X.AH;}Z6=false;X=this.B7;if(A07){
this.T=this.T&~0x1000;A07=!((Aif[0]>=Aif[2])||(Aif[1]>=Aif[3]));}this.T=this.T|0x2000;
while(!!X){if(!Aln&&(As$!==Qc)){var Adm=X;var AJ6=0;var AAm=Ac1[2]-Ac1[0];var AyB=
Ac1[3]-Ac1[1];var AIU=0;var ApH=Ca;do if(((Adm.T&0x200)===0x200))Adm=null;else if(((
Adm.T&0x401)===0x401)){ApH=[(B=Adm.GetExtent())[2]-B[0],B[3]-B[1]];if((Qc===3)||(
Qc===4))AAm=AAm-ApH[0];if((Qc===1)||(Qc===2))AyB=AyB-ApH[1];if(!Aln||((AAm>=0)&&(
AyB>=0))){Aln=Adm;Adm=Adm.Ag;if((Qc===3)||(Qc===4)){AAm=AAm-Ata;if(ApH[1]>AJ6)AJ6=
ApH[1];}if((Qc===1)||(Qc===2)){AyB=AyB-Atb;if(ApH[0]>AIU)AIU=ApH[0];}}else Adm=null;
}else Adm=Adm.Ag;while(!!Adm);if(!Aln)Aln=JZ;KU=Ac1;switch(As$){case 9:case 11:KU=[
].concat(KU.slice(0,3),KU[1]+AJ6);break;case 10:case 12:KU=A.abP(KU,KU[3]-AJ6);break;
case 5:case 7:KU=A.abN(KU,KU[0]+AIU);break;case 6:case 8:KU=[].concat(KU[2]-AIU,
KU.slice(1,4));break;default:;}}if(((X.T&0x400)===0x400)){if(!!X.En&&(X.En.Nt!==
JZ))X.En=null;if((!X.En&&Z6)&&((X.PC!==0x14)||!!Qc))X.Ate(KU,JZ);}if(!!X.En){if(
A07&&!((X.T&0x400)===0x400))X.Aub(Aif,0);if(Z6&&((X.T&0x400)===0x400)){var C0=X.
Aub(A.abh(KU,Z7),Qc);if(((X.T&0x1)===0x1)){var Bo=Ca;switch(Qc){case 3:Bo=[C0[0]+
Ata,Bo[1]];break;case 4:Bo=[-C0[0]-Ata,Bo[1]];break;case 1:Bo=[Bo[0],C0[1]+Atb];
break;case 2:Bo=[Bo[0],-C0[1]-Atb];break;default:;}Z7=A.abf(Z7,Bo);}}}if(((X.T&0x200
)===0x200)){if(Z6)A.pe(JZ.Ej,JZ);Z6=((X.T&0x1000)===0x1000);JZ=(C.Z.isPrototypeOf(
X)?X:null);if(Z6){X.T=X.T&~0x1000;As$=JZ.Agx;Qc=As$;Ac1=A.abh(JZ.M,JZ.Bq);KU=Ac1;
Z7=Ca;Ata=JZ.Space+JZ.ATR;Atb=JZ.Space;Z6=!((Ac1[0]>=Ac1[2])||(Ac1[1]>=Ac1[3]));
Aln=null;switch(As$){case 9:case 10:Qc=3;break;case 11:case 12:Qc=4;break;case 5:
case 6:Qc=1;break;case 7:case 8:Qc=2;break;default:;}}if(Z6)this.Bd(JZ.M);}if(X===
Aln){switch(As$){case 9:case 11:Z7=[0,(Z7[1]+(KU[3]-KU[1]))+Atb];break;case 10:case
12:Z7=[0,(Z7[1]-(KU[3]-KU[1]))-Atb];break;case 5:case 7:Z7=[(Z7[0]+(KU[2]-KU[0])
)+Ata,0];break;case 6:case 8:Z7=[(Z7[0]-(KU[2]-KU[0]))-Ata,0];break;default:;}Aln=
null;}X=X.Ag;}if(Z6)A.pe(JZ.Ej,JZ);this.T=this.T&~0x2000;this.Bg([Aif[2]-Aif[0],
Aif[3]-Aif[1]]);},Jz:function(G){A.pe([this,this.AAH],this);},AAH:function(G){var
B;var BAu=((this.T&0x1000)===0x1000);if(((this.T&0x4000)===0x4000)){this.T=this.
T&~0x4000;this.Bej();}if(((this.T&0x8000)===0x8000)||BAu){this.T=this.T&~0x8000;
this.Ai(this.T);}},A8:function(E){var B;if(!!E&&(E.Ab!==this))throw new Error(EW
);if(!!E&&!((E.T&0x14)===0x14))E=null;if(!!E&&((E.T&0x10000)===0x10000))E=null;if(
E===this.AR)return;if(!!this.AR)this.AR.Cu(0x0,0x60);this.AR=E;if(!!E){if(((this.
T&0x40)===0x40))E.Cu(0x60,0x0);else E.Cu(0x20,0x0);}},A$S:function(Aq){this.A8(Aq
);},ARz:function(){return!!this.Fq;},Aq9:function(E){var B;if(!!this.Fq===E)return;
if(!E){this.Fq.ADJ=null;this.Fq.Ard(Ca);this.Fq=null;}if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Bd(this.GetClipping());if(E){this.Fq=A._NewObject(A.Graphics.Canvas
,0);this.Fq.Ard([(B=this.M)[2]-B[0],B[3]-B[1]]);this.Fq.ADJ=[this,this.BAm];}A.we(
this,0);},A7x:function(){var B;return((this.T&0x100000)===0x100000);},Ar:function(
E){if(E)this.Cu(0x100000,0x0);else this.Cu(0x0,0x100000);},Dm:function(E){var B;
if(E>255)E=255;if(E<0)E=0;if(E===this.GY)return;this.GY=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Bd(this.GetClipping());},AY$:function(Aq){this.Dm(Aq);},Aj:function(
E){if(E)this.Cu(0x400,0x0);else this.Cu(0x0,0x400);},Bj2:function(E){if(E)this.Cu(
0x2,0x0);else this.Cu(0x0,0x2);},Fd:function(){var B;return((this.T&0x1)===0x1);
},Y:function(E){if(E)this.Cu(0x1,0x0);else this.Cu(0x0,0x1);},ExtendClipping:function(
Aoe,Aof,Aog,Aod){var B;var Ays=this.M;var Rj=Ays;if(Aoe<0)Aoe=0;if(Aoe>255)Aoe=255;
if(Aof<0)Aof=0;if(Aof>255)Aof=255;if(Aog<0)Aog=0;if(Aog>255)Aog=255;if(Aod<0)Aod=
0;if(Aod>255)Aod=255;Rj=[].concat(Rj[0]-(Math.max(Aoe,this.Ay2)&0xFF),Rj.slice(1
,4));Rj=A.abN(Rj,Rj[2]+(Math.max(Aof,this.Ay3)&0xFF));Rj=A.abP(Rj,Rj[1]-(Math.max(
Aog,this.Ay4)&0xFF));Rj=[].concat(Rj.slice(0,3),Rj[3]+(Math.max(Aod,this.Ay1)&0xFF
));if(Aoe!==this.Ay2){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fq)&&!((this.
T&0x80000)===0x80000)){var Ax=Rj;Ax=A.abN(Ax,Ays[0]);this.Ab.Bd(Ax);}this.Ay2=Aoe&
0xFF;}if(Aof!==this.Ay3){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fq)&&!((
this.T&0x80000)===0x80000)){var Ax=Rj;Ax=[].concat(Ays[2],Ax.slice(1,4));this.Ab.
Bd(Ax);}this.Ay3=Aof&0xFF;}if(Aog!==this.Ay4){if(((!!this.Ab&&((this.T&0x1)===0x1
))&&!!!this.Fq)&&!((this.T&0x80000)===0x80000)){var Ax=Rj;Ax=[].concat(Ax.slice(
0,3),Ays[1]);this.Ab.Bd(Ax);}this.Ay4=Aog&0xFF;}if(Aod!==this.Ay1){if(((!!this.Ab&&((
this.T&0x1)===0x1))&&!!!this.Fq)&&!((this.T&0x80000)===0x80000)){var Ax=Rj;Ax=A.
abP(Ax,Ays[3]);this.Ab.Bd(Ax);}this.Ay1=Aod&0xFF;}},Bgz:function(CV,aClip,aOffset
,Cg,aBlend){},Bgw:function(CV,aClip,aOffset,Cg,aBlend){},GetMaximalSize:function(
){return Hh;},GetMinimalSize:function(){return Ca;},ATY:function(Il,N8,WY,S2,S3,
AhK,OZ,Rd,Lu,Ls,Lt){var B;if(!this.G4){this.Akn(Il,N8,WY,S2,S3,null,null,Lu,Ls,Lt
);return;}var Alu=this.G4;var Jv=Alu.Ag;if(((Il.T&0x10000)===0x10000)&&(this.G4.
CX!==Il))throw new Error(I8);var Ac7=A._NewObject(C.AM8,0);var Rl=Alu.Rl;var Ru=
null;var L8=null;if(!!Jv){Ru=Jv.Ru;L8=Jv.L8;}if(!!Jv&&!!Alu.Apn)Ru=Alu.Apn;if(!!
Jv&&!!OZ)L8=OZ;if(!!AhK)Rl=AhK;if(!N8)N8=A._GetAutoObject(A.acl.Ar1);if(!WY)WY=N8;
if(!S3)S3=S2;if(!S2)S2=S3;Ac7.Rl=WY;Ac7.L8=S2;Ac7.Ru=S3;Ac7.Apn=Rd;Ac7.CX=Il;Ac7.
Ag=this.G4.Ag;this.G4.Ag=null;this.G4=Ac7;if(this.AR===Il)this.A8(null);Alu.CX.Cu(
0x0,0x10040);if(((this.T&0x40)===0x40)&&((Il.T&0x4)===0x4))Il.Cu(0x10040,0x0);else
Il.Cu(0x10000,0x0);if(!!L8){this.NI(Jv.CX,L8.AdM(),null,null,Lt);this.NI(Alu.CX,
Rl.RX(),null,null,true);this.NI(Ac7.CX,N8.RY(),Lu,Ls,true);}else if(!!Ru){this.NI(
Jv.CX,Ru.AdN(),null,null,Lt);this.NI(Alu.CX,Rl.RX(),null,null,true);this.NI(Ac7.
CX,N8.RY(),Lu,Ls,true);}else if(!!Rl){this.NI(Alu.CX,Rl.RX(),null,null,Lt);this.
NI(Ac7.CX,N8.RY(),Lu,Ls,true);}else this.NI(Ac7.CX,N8.RY(),Lu,Ls,Lt);},Ap9:function(
Il,AhK,OZ,Rd,Lu,Ls,Lt){var B;if(!this.G4)return;if(!Il)return;var Ku=this.G4;var
Jv=this.G4.Ag;var Aps=null;while((!!Ku&&(Ku.CX!==Il))&&!!Ku.Ag){Aps=Ku;Ku=Jv;Jv=
Ku.Ag;}if(!Ku||(Ku.CX!==Il))throw new Error(IJ);if(!Aps){this.G4=Jv;Ku.Ag=null;}
else{Aps.Ag=Jv;Ku.Ag=null;}Ku.CX.Cu(0x0,0x10040);if(((((this.T&0x10)===0x10)&&!!
Jv)&&!Aps)&&((Jv.CX.T&0x200000)===0x200000))Jv.CX.Cu(0x10,0x0);if(((((this.T&0x40
)===0x40)&&!!Jv)&&!Aps)&&((Jv.CX.T&0x4)===0x4))Jv.CX.Cu(0x40,0x0);var Rl=Ku.Rl;var
Ru=null;var L8=null;if(!!Jv)Ru=Jv.Ru;if(!!Jv&&!!Ku.Apn)Ru=Ku.Apn;if(!!Jv&&!!Rd)Ru=
Rd;if(!!Aps&&!!Jv)L8=Jv.L8;if((!!Aps&&!!Jv)&&!!OZ)L8=OZ;if(!!AhK)Rl=AhK;if(!!L8){
this.NI(Jv.CX,L8.AdM(),null,null,Lt);this.NI(Ku.CX,Rl.RX(),Lu,Ls,true);}else if(
!!Ru){this.NI(Jv.CX,Ru.AdN(),null,null,Lt);this.NI(Ku.CX,Rl.RX(),Lu,Ls,true);}else
this.NI(Ku.CX,Rl.RX(),Lu,Ls,Lt);},Akn:function(Il,N8,WY,S2,S3,OZ,Rd,Lu,Ls,Lt){var
B;if(!Il)return;if(!!this.G4&&(this.G4.CX===Il)){this.ATY(Il,N8,WY,S2,S3,null,OZ
,Rd,Lu,Ls,Lt);return;}if(((Il.T&0x10000)===0x10000))throw new Error(I8);var Ku=A.
_NewObject(C.AM8,0);if(!!this.G4&&!this.G4.L8){if(!Rd)Rd=OZ;if(!OZ)OZ=Rd;}var L8=
null;if(!!this.G4)L8=this.G4.L8;if(!!this.G4&&!!OZ)L8=OZ;if(!N8)N8=A._GetAutoObject(
A.acl.Ar1);if(!WY)WY=N8;if(!S3)S3=S2;if(!S2)S2=S3;Ku.Rl=WY;Ku.L8=S2;Ku.Ru=S3;Ku.
Apn=Rd;if(this.AR===Il)this.A8(null);if(!!this.G4&&((this.G4.CX.T&0x200000)===0x200000
))this.G4.CX.Cu(0x0,0x10);if(!!this.G4)this.G4.CX.Cu(0x0,0x40);if(((this.T&0x40)===
0x40)&&((Il.T&0x4)===0x4))Il.Cu(0x10040,0x0);else Il.Cu(0x10000,0x0);Ku.CX=Il;Ku.
Ag=this.G4;this.G4=Ku;if(!!L8){this.NI(this.G4.Ag.CX,L8.AdM(),null,null,Lt);this.
NI(Il,N8.RY(),Lu,Ls,true);}else this.NI(Il,N8.RY(),Lu,Ls,Lt);},A5W:function(Ae){
var B;return(B=Ae)&&((this.T&B)===B);},A6y:function(KS){var tmp=this;while(!!tmp
){KS=A.abe(KS,tmp.M.slice(0,2));tmp=tmp.Ab;}return KS;},Bhu:function(KS){var tmp=
this;while(!!tmp){KS=A.abf(KS,tmp.M.slice(0,2));tmp=tmp.Ab;}return KS;},DispatchEvent:
function(CK){var B;var X=this.AR;var BX=(C.O.isPrototypeOf(X)?X:null);var Gs=null;
var A1x=!!this.Xc&&(!!this.Xc.FF||!!this.Xc.B7);if(!!X&&((((X.T&0x10000)===0x10000
)||((X.T&0x40000)===0x40000))||((X.T&0x20000)===0x20000))){X=null;BX=null;}if(!!
this.G4&&!A1x)Gs=this.G4.CX.DispatchEvent(CK);if(!Gs&&!!BX)Gs=BX.DispatchEvent(CK
);else if(!Gs&&!!X)Gs=X.GQ(CK);if(!Gs)Gs=this.GQ(CK);if(!Gs)Gs=this.A2A(CK);return Gs;
},BroadcastEventAtPosition:function(CK,Hq,aFilter){var B;var X=this.B8;var Gs=null;
while(!!X&&!Gs){if((!aFilter||((B=aFilter)&&((X.T&B)===B)))&&A.wa(X.GetExtent(),
Hq)){var BX=(C.O.isPrototypeOf(X)?X:null);if(!!BX)Gs=BX.BroadcastEventAtPosition(
CK,A.abe(Hq,BX.M.slice(0,2)),aFilter);else Gs=X.GQ(CK);}X=X.AH;}if(!Gs)Gs=this.GQ(
CK);return Gs;},BroadcastEvent:function(CK,aFilter){var B;var X=this.B8;var Gs=null;
while(!!X&&!Gs){if(!aFilter||((B=aFilter)&&((X.T&B)===B))){var BX=(C.O.isPrototypeOf(
X)?X:null);if(!!BX)Gs=BX.BroadcastEvent(CK,aFilter);else Gs=X.GQ(CK);}X=X.AH;}if(
!Gs)Gs=this.GQ(CK);if(!Gs)Gs=this.A2A(CK);return Gs;},Bg:function(aSize){},Ai:function(
Ae){},BhL:function(){this.T=this.T|0x4000;A.pe([this,this.AAH],this);},Am:function(
){this.T=this.T|0x8000;A.pe([this,this.AAH],this);},Bd:function(C_){var B;var BX=
this;while(!!BX&&!((C_[0]>=C_[2])||(C_[1]>=C_[3]))){var Z3=BX.Fq;if(!BX.Ab&&(BX!==
this)){BX.Bd(C_);return;}if(!!Z3){var Byb=Z3.QB;Z3.QB=A.wC(Z3.QB,C_);if(!A.aaY(Byb
,Z3.QB)){A.we(BX,0);A.we(Z3,0);}}if(!((BX.T&0x1)===0x1))return;var Ax=BX.M;C_=A.
abh(C_,Ax.slice(0,2));if(!!BX.Fq||!((BX.T&0x80000)===0x80000)){if(!!!BX.Fq){Ax=[
].concat(Ax[0]-BX.Ay2,Ax.slice(1,4));Ax=A.abP(Ax,Ax[1]-BX.Ay4);Ax=A.abN(Ax,Ax[2]+
BX.Ay3);Ax=[].concat(Ax.slice(0,3),Ax[3]+BX.Ay1);}C_=A.lb(C_,Ax);}BX=BX.Ab;}},R5:
function(Af,Gq,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var AfS=A.aaI(Af.
GetExtent());var X=Af;var A0h=null;var Bbd=0;var IO=0x10000;var AJ2;if(((aFilter&
0x10000)===0x10000))IO=0x0;var top=((Gq===4)||(Gq===1))||(Gq===6);var bottom=((Gq===
5)||(Gq===3))||(Gq===8);var left=((Gq===2)||(Gq===1))||(Gq===3);var right=((Gq===
7)||(Gq===6))||(Gq===8);if(((!top&&!bottom)&&!left)&&!right)return null;while(!!
X){X=X.AH;if(!X)X=this.B8;if(X===Af)X=null;if((!!X&&(!aFilter||((B=aFilter)&&((X.
T&B)===B))))&&(!IO||!((B=IO)&&((X.T&B)===B))))for(AJ2=0;AJ2<2;AJ2++){var Ax=X.GetExtent(
);var s=[Ax[2]-Ax[0],Ax[3]-Ax[1]];if(!!!AJ2){if((left&&(s[0]>s[1]))&&(Ax[2]<AfS[
0]))Ax=[].concat(Ax[2]-s[1],Ax.slice(1,4));if((right&&(s[0]>s[1]))&&(Ax[0]>AfS[0
]))Ax=A.abN(Ax,Ax[0]+s[1]);if((top&&(s[1]>s[0]))&&(Ax[3]<AfS[1]))Ax=A.abP(Ax,Ax[
3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Ax[1]>AfS[1]))Ax=[].concat(Ax.slice(0,3),Ax[
1]+s[0]);}var Bo=A.abe(A.aaI(Ax),AfS);var Rg=Bo;if(Rg[0]<0)Rg=[-Rg[0],Rg[1]];if(
Rg[1]<0)Rg=[Rg[0],-Rg[1]];if(((((!left||(Bo[0]<=-Rg[1]))&&(!right||(Bo[0]>=Rg[1]
)))&&(!top||(Bo[1]<=-Rg[0])))&&(!bottom||(Bo[1]>=Rg[0])))&&((Rg[0]>0)||(Rg[1]>0)
)){var Rn=Bo[0];var Ro=Bo[1];var Jb=Math.sqrt((Rn*Rn)+(Ro*Ro));var AJC=0;if(!left&&
!right)AJC=Jb/Rg[1];if(!top&&!bottom)AJC=Jb/Rg[0];Jb=(Jb*AJC)*AJC;if((Jb<Bbd)||!
A0h){Bbd=Jb;A0h=X;}}}}return A0h;},Aqd:function(Af,aFilter){var B;if(!!Af&&(Af.Ab
!==this))return null;var X=this.B8;var IO=0x10000;if(((aFilter&0x10000)===0x10000
))IO=0x0;if(!!Af)X=Af.AH;while(!!X){if((!aFilter||((B=aFilter)&&((X.T&B)===B)))&&(
!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.AH;}return null;},Vx:function(Af,aFilter
){var B;if(!!Af&&(Af.Ab!==this))return null;var X=this.B7;var IO=0x10000;if(((aFilter&
0x10000)===0x10000))IO=0x0;if(!!Af)X=Af.Ag;while(!!X){if((!aFilter||((B=aFilter)&&((
X.T&B)===B)))&&(!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.Ag;}return null;},AB6:
function(Af,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var Als=Af.Ag;var AlF=
Af.AH;var IO=0x10000;if(((aFilter&0x10000)===0x10000))IO=0x0;while(!!Als||!!AlF){
if((!!Als&&(!aFilter||((B=aFilter)&&((Als.T&B)===B))))&&(!IO||!((B=IO)&&((Als.T&
B)===B))))return Als;if((!!AlF&&(!aFilter||((B=aFilter)&&((AlF.T&B)===B))))&&(!IO||
!((B=IO)&&((AlF.T&B)===B))))return AlF;if(!!Als)Als=Als.Ag;if(!!AlF)AlF=AlF.AH;}
return null;},Db:function(aFilter){var B;var X=this.B7;var AE=BD;var IO=0x10000;
if(((aFilter&0x10000)===0x10000))IO=0x0;while(!!X){if((!((X.T&0x400)===0x400)&&(
!aFilter||((B=aFilter)&&((X.T&B)===B))))&&(!IO||!((B=IO)&&((X.T&B)===B))))AE=A.wC(
AE,X.GetExtent());X=X.Ag;}return AE;},NI:function(Ks,FE,Lu,Ls,Lt){var B;if(!Ks)return;
if(!FE)throw new Error(OT);if((!!FE.O||!!FE.Ab)||!!FE.O_)throw new Error(PV);if(
!!Ks.Ab&&(Ks.Ab!==this))throw new Error(PW);if(!this.Xc)this.Xc=A._NewObject(C.AT3
,0);FE.Ab=this;FE.O=Ks;FE.AJM=Ls;FE.A1X=Lu;if(!!Ks.Apo)Ks.Apo.O_.BmE(Ks.Apo);Ks.
Apo=FE;Ks.T=Ks.T|0x20000;if((Lt&&!!this.Xc.B8)&&!this.Xc.B8.AQi())(A.acl.AB1.isPrototypeOf(
B=this.Xc.B8)?B:null).A3E(FE);else{var O_=A._NewObject(A.acl.AB1,0);O_.A3E(FE);this.
Xc.A9W(O_,false);}},Ahe:function(Af,JT){var B;if(!Af)throw new Error(CM);if(Af.Ab
!==this)throw new Error(E4);if(!!JT&&(JT.Ab!==this))throw new Error(Lp);if(Af.Ag===
JT)return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.En)Af.AH.T=Af.AH.T|0x800;Af.
T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.
pe([this,this.Jz],this);}if(!!Af.Ag)Af.Ag.AH=Af.AH;else this.B8=Af.AH;if(!!Af.AH
)Af.AH.Ag=Af.Ag;else this.B7=Af.Ag;var Gr=null;var In=this.B8;var LJ=Af.JO;if(!!
JT){Gr=JT;In=JT.AH;}if(!!Gr&&(LJ>Gr.JO))LJ=Gr.JO;if(!!In&&(LJ<In.JO))LJ=In.JO;if(
LJ!==Af.JO){Af.Ab=null;Af.Arp(LJ);Af.Ab=this;}if(!JT){if(!!this.B8)this.B8.Ag=Af;
Af.AH=this.B8;Af.Ag=null;this.B8=Af;}else{Af.Ag=JT;Af.AH=JT.AH;JT.AH=Af;if(!!Af.
AH)Af.AH.Ag=Af;}if(this.B7===JT)this.B7=Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping(
));},Ze:function(Af){var B;if(!Af)throw new Error(CM);if(Af.Ab!==this)throw new Error(
E4);if(!Af.Ag)return;var In=this.B8;var LJ=Af.JO;while(!!In&&(In.JO>LJ))In=In.AH;
if(((In===Af)||!In)||(In.Ag===Af))return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&
!!Af.En)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jz],this);}if(((Af.T&0x200)===0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.
T|0x4000;A.pe([this,this.Jz],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;else this.B7=Af.Ag;
Af.Ag.AH=Af.AH;Af.AH=In;Af.Ag=In.Ag;In.Ag=Af;if(!!Af.Ag)Af.Ag.AH=Af;else this.B8=
Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());},Kl:function(Af,P3){var B;if(
!Af)throw new Error(CM);if(Af.Ab!==this)throw new Error(E4);var In=Af;var Gr=Af;
var LJ=Af.JO;while(((P3>0)&&!!In.Ag)&&(In.Ag.JO<=LJ)){In=In.Ag;P3=P3-1;}while(((
P3<0)&&!!Gr.AH)&&(Gr.AH.JO>=LJ)){Gr=Gr.AH;P3=P3+1;}if((In===Af)&&(Gr===Af))return;
if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.En)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;
this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((Af.T&0x200)===0x200)){if(!!
Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jz],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B7===Af)this.
B7=Af.Ag;if(this.B8===Af)this.B8=Af.AH;if(In!==Af){Af.Ag=In.Ag;Af.AH=In;In.Ag=Af;
if(!!Af.Ag)Af.Ag.AH=Af;}if(Gr!==Af){Af.Ag=Gr;Af.AH=Gr.AH;Gr.AH=Af;if(!!Af.AH)Af.
AH.Ag=Af;}if(!Af.Ag)this.B8=Af;if(!Af.AH)this.B7=Af;if(((Af.T&0x1)===0x1))this.Bd(
Af.GetClipping());},HI:function(Af){var B;if(!Af)throw new Error(PX);if(Af.Ab!==
this)throw new Error(E4);if((((Af.T&0x401)===0x401)&&!!Af.AH)&&!!Af.En){Af.AH.T=
Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz
],this);}Af.En=null;if(this.AR===Af)this.A8(this.AB6(Af,0x14));if(!!Af.AH)Af.AH.
Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B7===Af)this.B7=Af.Ag;if(this.B8===Af
)this.B8=Af.AH;Af.Ab=null;Af.Ag=null;Af.AH=null;if((!((Af.T&0x10)===0x10)&&((Af.
T&0x100000)===0x100000))&&!((this.T&0x80)===0x80))Af.Cu(0x10,0x0);if(((Af.T&0x1)===
0x1))this.Bd(Af.GetClipping());},ALi:function(Af,JT){var B;if(!Af)throw new Error(
Kq);if(!!Af.Ab)throw new Error(N6);if(!!JT&&(JT.Ab!==this))throw new Error(Lp);var
Gr=null;var In=this.B8;var LJ=Af.JO;if(!!JT){Gr=JT;In=JT.AH;}if(!!Gr&&(LJ>Gr.JO)
)LJ=Gr.JO;if(!!In&&(LJ<In.JO))LJ=In.JO;if(LJ!==Af.JO){Af.Ab=null;Af.Arp(LJ);Af.Ab=
this;}if(!JT){if(!!this.B8)this.B8.Ag=Af;Af.AH=this.B8;this.B8=Af;}else{Af.Ag=JT;
Af.AH=JT.AH;JT.AH=Af;if(!!Af.AH)Af.AH.Ag=Af;}Af.Ab=this;if(this.B7===JT)this.B7=
Af;if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());if(((Af.T&0x80)===0x80)&&(A.aam(
).AN3()===Af))Af.Cu(0x10,0x0);else if(!((this.T&0x10)===0x10)&&((Af.T&0x200010)===
0x200010))Af.Cu(0x0,0x10);else if((((this.T&0x10)===0x10)&&!((Af.T&0x10)===0x10)
)&&((Af.T&0x100000)===0x100000))Af.Cu(0x10,0x0);if(((!this.AR&&((Af.T&0x4)===0x4
))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.A8(Af);if(((Af.T&0x401
)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((
Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this
);}},J:function(Af,P3){var B;if(!Af)throw new Error(Kq);if(!!Af.Ab)throw new Error(
N6);var Gr=null;var LJ=Af.JO;if(((P3<0)&&!!this.B8)&&(this.B8.JO>=LJ)){Gr=this.B8;
P3=P3+1;}while((((P3<0)&&!!Gr)&&!!Gr.AH)&&(Gr.AH.JO>=LJ)){Gr=Gr.AH;P3=P3+1;}if((
!Gr&&!!this.B8)&&(this.B8.JO>LJ))Gr=this.B8;while((!!Gr&&!!Gr.AH)&&(Gr.AH.JO>LJ)
)Gr=Gr.AH;if(!Gr){Af.Ab=this;Af.AH=this.B8;if(!!this.B8)this.B8.Ag=Af;if(!this.B7
)this.B7=Af;this.B8=Af;}else{Af.Ab=this;Af.AH=Gr.AH;Af.Ag=Gr;Gr.AH=Af;if(!!Af.AH
)Af.AH.Ag=Af;else this.B7=Af;}if(((Af.T&0x1)===0x1))this.Bd(Af.GetClipping());if(((
Af.T&0x80)===0x80)&&(A.aam().AN3()===Af))Af.Cu(0x10,0x0);else if(!((this.T&0x10)===
0x10)&&((Af.T&0x200010)===0x200010))Af.Cu(0x0,0x10);else if((((this.T&0x10)===0x10
)&&!((Af.T&0x10)===0x10))&&((Af.T&0x100000)===0x100000))Af.Cu(0x10,0x0);if(((!this.
AR&&((Af.T&0x4)===0x4))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.
A8(Af);if(((Af.T&0x401)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this
,this.Jz],this);}if(((Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;
A.pe([this,this.Jz],this);}},A7z:function(){return this.AR;},AvH:function(){return this.
GY;},_Init:function(aArg){C.El._Init.call(this,aArg);this.__proto__=C.O;this.T=0x10001F;
this.Init(aArg);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.B7)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fq)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.G4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Xc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Apo)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AR)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Group"
};C.Root={Rr:null,Ju:null,Fg:A.abi(10,null,null),AsZ:null,Ah2:null,AAJ:0,H9:0,L3:
A.abi(10,0,null),AI0:A.abi(10,A.wg,null),Xa:A.abi(10,0,null),Afz:A.abi(10,A.wf,null
),As4:A.abi(10,0,null),Ah1:A.abi(10,A.wf,null),W$:A.abi(10,A.wf,null),Rk:A.abi(10
,A.wf,null),AcR:A.abi(10,A.wf,null),EG:0,AJn:0,AJm:0,Ol:A.abi(4,0,null),J4:A.abi(
4,A.wg,null),J1:0,Azq:0,Atg:0,Azc:true,Init:function(aArg){if(!!!this.I){var obj=
this;A.abD(obj);}},If:function(){return this;},J9:function(CV,aClip,aOffset,Cg,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(!fullScreenUpdate)CV.AuI(aClip
,A.abh(A.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);C.O.J9.call(this,CV,aClip,aOffset,Cg,aBlend);},Cu:function(Re,
UL){var B;C.O.Cu.call(this,Re,UL);if(!this.Ab&&(((Re&0x1)===0x1)||((UL&0x1)===0x1
)))this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ab&&(((Re&0x2)===0x2)||((
UL&0x2)===0x2)))this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},A8:function(E){if((
E!==null)||!E)C.O.A8.call(this,E);},Aq9:function(E){var B;var Bx$=this.Fq;C.O.Aq9.
call(this,E);if(((Bx$!==this.Fq)&&!this.Ab)&&((this.T&0x1)===0x1))this.Bd([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},Dm:function(E){var B;var BO=this.GY;C.O.Dm.call(
this,E);if(((BO!==this.GY)&&!this.Ab)&&((this.T&0x1)===0x1))this.Bd([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CK){if(!!CK){CK.Avh=!!this.H9;if(
!!this.H9)CK.Bt=this.H9;}var Gs=null;if(!!this.Ju){Gs=this.Ju.CX.DispatchEvent(CK
);if(!Gs)Gs=this.GQ(CK);if(!Gs)Gs=this.A2A(CK);this.H9=0;return Gs;}Gs=C.O.DispatchEvent.
call(this,CK);this.H9=0;return Gs;},BroadcastEvent:function(CK,aFilter){if(!!CK){
CK.Avh=!!this.H9;if(!!this.H9)CK.Bt=this.H9;}var Gs=C.O.BroadcastEvent.call(this
,CK,aFilter);this.H9=0;return Gs;},Bd:function(C_){var B;if(this.AAJ>0)throw new
Error(PY);if(!!this.Fq&&!this.Ab){if(((B=this.Fq.QB)[0]>=B[2])||(B[1]>=B[3])){A.
we(this,0);A.we(this.Fq,0);}this.Fq.QB=A.wC(this.Fq.QB,C_);}var fullScreenUpdate=
false;fullScreenUpdate=A.m7;if(fullScreenUpdate)C_=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ab){C.O.Bd.call(this,C_);return;}C_=A.lb(A.abh(C_,this.M.slice(0
,2)),this.M);if((C_[0]>=C_[2])||(C_[1]>=C_[3]))return;var P;for(P=0;P<this.J1;P=
P+1)if(!(((B=A.lb(this.J4.Get(P),C_))[0]>=B[2])||(B[1]>=B[3]))){this.J4.Set(P,A.
wC(this.J4.Get(P),C_));this.Ol.Set(P,A.aaH(this.J4.Get(P)));return;}if(this.J1<3
){this.J4.Set(this.J1,C_);this.Ol.Set(this.J1,A.aaH(C_));this.J1=this.J1+1;return;
}var H$;var Rq;var Azp=0;var Azs=0;var Bbc=2147483647;this.J4.Set(this.J1,C_);this.
Ol.Set(this.J1,A.aaH(C_));for(H$=0;H$<=this.J1;H$=H$+1)for(Rq=H$+1;Rq<=this.J1;Rq=
Rq+1){var AKt=A.aaH(A.wC(this.J4.Get(H$),this.J4.Get(Rq)));var BdX=((AKt<<8)/(this.
Ol.Get(H$)+this.Ol.Get(Rq)))|0;if(BdX<Bbc){Bbc=BdX;Azp=H$;Azs=Rq;}}this.J4.Set(Azp
,A.wC(this.J4.Get(Azp),this.J4.Get(Azs)));this.Ol.Set(Azp,A.aaH(this.J4.Get(Azp)
));if(Azs!==this.J1){this.J4.Set(Azs,this.J4.Get(this.J1));this.Ol.Set(Azs,this.
Ol.Get(this.J1));}},BwQ:function(){var LB=A._NewObject(C.Ap$,0);LB.Avh=!!this.H9;
if(!!this.H9)LB.Bt=this.H9;return LB;},AoA:function(){var LB=A._NewObject(C.AdP,
0);LB.Avh=!!this.H9;if(!!this.H9)LB.Bt=this.H9;return LB;},As3:function(){var LB=
A._NewObject(C.Auk,0);LB.Avh=!!this.H9;if(!!this.H9)LB.Bt=this.H9;return LB;},BwV:
function(G){var P;var AoS=false;for(P=0;P<10;P=P+1)if(!!this.Fg.Get(P)){var pos=
this.Rk.Get(P);var BX=this.Fg.Get(P).Ab;while(!!BX&&(BX!==this)){pos=A.abe(pos,BX.
M.slice(0,2));BX=BX.Ab;}if(!BX&&(this.Fg.Get(P)!==this)){var tmp=this.Fg.Get(P);
this.EG=P;this.Fg.Set(P,null);tmp.GQ(this.AoA().InitializeUp(P,this.Ah1.Get(P),this.
Afz.Get(P),this.Xa.Get(P),this.L3.Get(P)+1,this.W$.Get(P),false,this.Rk.Get(P),this.
AcR.Get(P)));this.BroadcastEvent(this.As3().InitializeUp(P,this.L3.Get(P)+1,false
,tmp,this.Rk.Get(P)),0x18);}else{this.Xa.Set(P,(this.Ah2.Bt-this.As4.Get(P))|0);
if(this.Xa.Get(P)<10)this.Xa.Set(P,10);this.EG=P;this.Fg.Get(P).GQ(this.AoA().InitializeHold(
P,pos,this.Afz.Get(P),this.Xa.Get(P),this.L3.Get(P)+1,this.W$.Get(P),this.Rk.Get(
P),this.AcR.Get(P)));AoS=true;}}if(!AoS)this.Ah2.Ar(false);},GetFPS:function(){var
ticksCount=0;var BbP=0;ticksCount=((new Date).getTime()-A.v$)|0;if(!!this.AJn&&(
ticksCount>this.AJn))BbP=((this.AJm*1000)/((ticksCount-this.AJn)|0))|0;this.AJm=
0;this.AJn=ticksCount;return BbP;},Update:function(){var B;if(!this.AsZ)this.AsZ=
A._NewObject(A.Graphics.Canvas,0);this.AsZ.Ard([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
AsZ.Update();return this.UpdateGE20(this.AsZ);},UpdateGE20:function(CV){if(!this.
BeginUpdate())return BD;var Af2=this.UpdateCanvas(CV,Ca);this.EndUpdate();return Af2;
},EndUpdate:function(){if(this.J1>0){this.AJm=this.AJm+1;this.J1=0;}},UpdateCanvas:
function(CV,aOffset){var B;var Af2=BD;var Bwy=[].concat(aOffset,A.abf(CV.FrameSize
,aOffset));var P;var H$=this.J1;this.AAJ=this.AAJ+1;CV.CX=this;for(P=0;(P<H$)&&(
P<4);P=P+1)if(this.Ol.Get(P)>0){this.J9(CV,A.abg(this.J4.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);Af2=A.wC(Af2,A.lb(Bwy,this.J4.Get(P)));}else H$=H$+1;CV.
CX=null;this.AAJ=this.AAJ-1;if(!((Af2[0]>=Af2[2])||(Af2[1]>=Af2[3])))return A.abg(
Af2,aOffset);else return Af2;},GetUpdateRegion:function(AIl){var P;var H$=this.J1;
if(AIl<0)return BD;for(P=0;(P<H$)&&(P<4);P=P+1)if(!this.Ol.Get(P)){H$=H$+1;AIl=AIl+
1;}else if(P===AIl)return this.J4.Get(P);return BD;},BeginUpdate:function(){var B;
var P;if(!!this.J1&&!A.aaY(this.J4.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
BeU=A.abi(3,A.wg,null);var BeT=this.J1;for(P=0;P<BeT;P++)BeU.Set(P,this.J4.Get(P
));for(P=0;P<BeT;P++){var Bee=A.abh(BeU.Get(P),this.M.slice(0,2));var Bef=this.At3(
Bee);if(!A.aaY(Bee,Bef))this.Bd(A.abg(Bef,this.M.slice(0,2)));}}var H$;var Rq;for(
H$=0;H$<(this.J1-1);H$++)if(this.Ol.Get(H$)>0)for(Rq=H$+1;Rq<this.J1;Rq++)if(this.
Ol.Get(Rq)>0){var AKt=A.aaH(A.wC(this.J4.Get(H$),this.J4.Get(Rq)));if(((AKt-this.
Ol.Get(H$))-this.Ol.Get(Rq))<0){this.J4.Set(H$,A.wC(this.J4.Get(H$),this.J4.Get(
Rq)));this.Ol.Set(H$,AKt);this.Ol.Set(Rq,0);}}for(P=this.J1-1;P>=0;P--)if(!this.
Ol.Get(P))this.J1=this.J1-1;return this.J1;},DoesNeedUpdate:function(){if(this.J1>
0)return true;return false;},Initialize:function(aSize){this.H([].concat(Ca,aSize
));if(this.Azc)this.T=this.T|0x60;else this.T=this.T|0x20;this.Bd(this.M);return this;
},SetRootFocus:function(AZL){if(AZL===this.Azc)return false;this.Azc=AZL;if(!AZL
){if(!!this.Ju)this.Ju.CX.Cu(0x0,0x40);else this.Cu(0x0,0x40);}else if(!!this.Ju
)this.Ju.CX.Cu(0x40,0x0);else this.Cu(0x40,0x0);return true;},SetUserInputTimestamp:
function(P4){this.H9=P4;},DriveKeyboardHitting:function(Kr,Ayf,S0){var B;var A2B=
!!this.Rr;if(!!this.Rr&&((!S0||(this.Azq!==Kr))||(this.Atg!==Ayf))){var LB=null;
var X=(C.Cf.isPrototypeOf(B=this.Rr)?B:null);var DW=(C.BK.isPrototypeOf(B=this.Rr
)?B:null);if(!!this.Azq)LB=A._NewObject(C.KeyEvent,0).Initialize(this.Azq,false);
if(this.Atg!==0x00)LB=A._NewObject(C.KeyEvent,0).Initialize2(this.Atg,false);if(
!!DW)DW.GQ(LB);else if(!!X)X.GQ(LB);this.Azq=0;this.Atg=0x00;this.Rr=null;}if(!!
this.Rr){var LB=null;var X=(C.Cf.isPrototypeOf(B=this.Rr)?B:null);var DW=(C.BK.isPrototypeOf(
B=this.Rr)?B:null);if(!!Kr)LB=A._NewObject(C.KeyEvent,0).Initialize(Kr,true);if(
this.Atg!==0x00)LB=A._NewObject(C.KeyEvent,0).Initialize2(Ayf,true);if(!!DW)DW.GQ(
LB);else if(!!X)X.GQ(LB);}if(!this.Rr&&S0){if(!!Kr)this.Rr=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kr,true));if(Ayf!==0x00)this.Rr=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Ayf,true));if(!(C.BK.isPrototypeOf(B=this.
Rr)?B:null)&&!(C.Cf.isPrototypeOf(B=this.Rr)?B:null))this.Rr=null;this.Azq=Kr;this.
Atg=Ayf;A2B=A2B||!!this.Rr;}this.H9=0;return A2B;},DriveCursorMovement:function(
E6){return this.DriveMultiTouchMovement(this.EG,E6);},DriveMultiTouchMovement:function(
BF,E6){if((BF<0)||(BF>9)){this.H9=0;return false;}var Fi=A.abe(E6,this.Rk.Get(BF
));this.Rk.Set(BF,E6);if(!this.Fg.Get(BF)||A.aaX(Fi,Ca)){this.H9=0;return false;
}var pos=E6;var BX=this.Fg.Get(BF).Ab;while(!!BX&&(BX!==this)){pos=A.abe(pos,BX.
M.slice(0,2));BX=BX.Ab;}if(!BX&&(this.Fg.Get(BF)!==this)){var tmp=this.Fg.Get(BF
);this.EG=BF;this.Fg.Set(BF,null);tmp.GQ(this.AoA().InitializeUp(BF,this.Ah1.Get(
BF),this.Afz.Get(BF),this.Xa.Get(BF),this.L3.Get(BF)+1,this.W$.Get(BF),false,this.
Rk.Get(BF),this.AcR.Get(BF)));this.BroadcastEvent(this.As3().InitializeUp(BF,this.
L3.Get(BF)+1,false,tmp,E6),0x18);}else{this.Ah1.Set(BF,pos);this.EG=BF;this.Fg.Get(
BF).GQ(this.BwQ().Initialize(BF,pos,this.Afz.Get(BF),Fi,this.Xa.Get(BF),this.L3.
Get(BF)+1,this.W$.Get(BF),E6,this.AcR.Get(BF)));}this.H9=0;return true;},DriveCursorHitting:
function(S0,BF,E6){return this.DriveMultiTouchHitting(S0,BF,E6);},DriveMultiTouchHitting:
function(S0,BF,E6){if((BF<0)||(BF>9)){this.H9=0;return false;}var ticksCount=this.
H9;if(!ticksCount)ticksCount=((new Date).getTime()-A.v$)|0;var BzH=this.H9;this.
DriveMultiTouchMovement(BF,E6);E6=this.Rk.Get(BF);this.H9=BzH;if(S0)this.AcR.Set(
BF,E6);if(S0&&!this.Fg.Get(BF)){var Jt;var pos=E6;if(A.wa(this.AI0.Get(BF),E6)&&((
ticksCount-this.As4.Get(BF))<=250))this.L3.Set(BF,this.L3.Get(BF)+1);else this.L3.
Set(BF,0);this.AI0.Set(BF,A.abh(MC,E6));this.As4.Set(BF,ticksCount);if(!!this.Ju
)Jt=this.X1(A.abh(MC,E6),BF,this.L3.Get(BF)+1,this.Ju.CX,null,0x0);else Jt=this.
X1(A.abh(MC,E6),BF,this.L3.Get(BF)+1,null,null,0x0);if(!!Jt){this.BroadcastEvent(
this.As3().InitializeDown(BF,this.L3.Get(BF)+1,false,Jt.Cf,E6),0x18);this.Fg.Set(
BF,Jt.Cf);this.W$.Set(BF,Jt.Dx);}else{this.Fg.Set(BF,null);this.W$.Set(BF,Ca);this.
H9=0;return false;}var BX=Jt.Cf.Ab;while(!!BX&&(BX!==this)){pos=A.abe(pos,BX.M.slice(
0,2));BX=BX.Ab;}this.Afz.Set(BF,pos);this.Ah1.Set(BF,pos);this.Xa.Set(BF,0);this.
Ah2.Ar(true);this.EG=BF;this.Fg.Get(BF).GQ(this.AoA().InitializeDown(BF,pos,this.
L3.Get(BF)+1,this.W$.Get(BF),false,E6));this.H9=0;return true;}if(!S0&&!!this.Fg.
Get(BF)){var pos=E6;var BX=this.Fg.Get(BF).Ab;while(!!BX&&(BX!==this)){pos=A.abe(
pos,BX.M.slice(0,2));BX=BX.Ab;}if(!BX)pos=this.Ah1.Get(BF);this.EG=BF;var tmp=this.
Fg.Get(BF);this.Fg.Set(BF,null);tmp.GQ(this.AoA().InitializeUp(BF,pos,this.Afz.Get(
BF),this.Xa.Get(BF),this.L3.Get(BF)+1,this.W$.Get(BF),false,E6,this.AcR.Get(BF))
);this.BroadcastEvent(this.As3().InitializeUp(BF,this.L3.Get(BF)+1,false,tmp,E6)
,0x18);this.H9=0;return true;}this.H9=0;return false;},ATn:function(ZY,BaB,AcI,AcH
){if(ZY===this)ZY=null;if(!!!ZY&&!!this.Ju)ZY=this.Ju.CX;if(!this.Fg.Get(this.EG
))return;var Jt;Jt=this.X1(A.abh(MC,this.Rk.Get(this.EG)),this.EG,1,ZY,AcI,AcH);
if(!!Jt&&(this.Fg.Get(this.EG)!==Jt.Cf))this.AMY(Jt.Cf,Jt.Dx);if(!Jt&&(this.Fg.Get(
this.EG)!==BaB))this.AMY(BaB,Ca);},AMY:function(ZY,WZ){if(!this.Fg.Get(this.EG)||(
this.Fg.Get(this.EG)===ZY))return;var tmp=this.Fg.Get(this.EG);this.Fg.Set(this.
EG,null);tmp.GQ(this.AoA().InitializeUp(this.EG,this.Ah1.Get(this.EG),this.Afz.Get(
this.EG),this.Xa.Get(this.EG),this.L3.Get(this.EG)+1,this.W$.Get(this.EG),true,this.
Rk.Get(this.EG),this.AcR.Get(this.EG)));this.BroadcastEvent(this.As3().InitializeUp(
this.EG,this.L3.Get(this.EG)+1,true,tmp,this.Rk.Get(this.EG)),0x18);var pos=this.
Rk.Get(this.EG);var BX=null;if(!!ZY)BX=ZY.Ab;while(!!BX&&(BX!==this)){pos=A.abe(
pos,BX.M.slice(0,2));BX=BX.Ab;}if(!BX&&(ZY!==this)){this.Fg.Set(this.EG,null);return;
}this.BroadcastEvent(this.As3().InitializeDown(this.EG,this.L3.Get(this.EG)+1,true
,ZY,this.Rk.Get(this.EG)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;this.Fg.Set(this.EG,ZY);this.W$.Set(this.EG,WZ);this.Afz.Set(this.EG,pos
);this.Ah1.Set(this.EG,pos);this.L3.Set(this.EG,0);this.Xa.Set(this.EG,0);this.As4.
Set(this.EG,ticksCount);this.AcR.Set(this.EG,this.Rk.Get(this.EG));this.Fg.Get(this.
EG).GQ(this.AoA().InitializeDown(this.EG,pos,this.L3.Get(this.EG)+1,this.W$.Get(
this.EG),true,this.AcR.Get(this.EG)));},AN3:function(){if(!!this.Ju)return this.
Ju.CX;return null;},ABY:function(Ks){var B;if(!Ks)throw new Error(SV);if(!((Ks.T&
0x80)===0x80))throw new Error(UE);if(this.Ju.CX===Ks)this.Ju=this.Ju.Ag;else{var
Azb=this.Ju;while(Azb.Ag.CX!==Ks)Azb=Azb.Ag;Azb.Ag=Azb.Ag.Ag;}Ks.Cu(0x0,0xD0);if(
this.Azc){if(!!this.Ju)this.Ju.CX.Cu(0x50,0x0);else this.Cu(0x50,0x0);}},AL6:function(
Ks){var B;var As=A._NewObject(C.A6J,0);if(!Ks)throw new Error(ZD);if(Ks===null)throw new
Error(WG);if(((Ks.T&0x80)===0x80))throw new Error(IK);if(!!this.Ju)this.Ju.CX.Cu(
0x0,0x50);else this.Cu(0x0,0x50);As.Ag=this.Ju;As.CX=Ks;this.Ju=As;if(this.Azc)Ks.
Cu(0xD0,0x0);else Ks.Cu(0x90,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Ah2={I:this},0);(this.Fg=[]).__proto__=C.Root.Fg;(this.
L3=[]).__proto__=C.Root.L3;(this.AI0=[]).__proto__=C.Root.AI0;(this.Xa=[]).__proto__=
C.Root.Xa;(this.Afz=[]).__proto__=C.Root.Afz;(this.As4=[]).__proto__=C.Root.As4;(
this.Ah1=[]).__proto__=C.Root.Ah1;(this.W$=[]).__proto__=C.Root.W$;(this.Rk=[]).
__proto__=C.Root.Rk;(this.AcR=[]).__proto__=C.Root.AcR;(this.Ol=[]).__proto__=C.
Root.Ol;(this.J4=[]).__proto__=C.Root.J4;this.__proto__=C.Root;this.T=0x10007F;this.
Ah2.PJ(10);this.Ah2.Mt=[this,this.BwV];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Ah2._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Ah2._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ju)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.Fg,D);if((B=this.AsZ)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ah2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bt:0,Avh:false,Init:function(aArg){this.Bt=this.AuR();},AuR:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CL:0,DJ:0,Down:false,Initialize2:function(Kr,S0){this.CL=0;this.DJ=
Kr;this.Down=S0;if((Kr>=0x30)&&(Kr<=0x39))this.CL=(10+Kr)-48;if((Kr>=0x41)&&(Kr<=
0x5A))this.CL=(105+Kr)-65;if((Kr>=0x61)&&(Kr<=0x7A))this.CL=(105+Kr)-97;if(Kr===
0x20)this.CL=131;if(!this.CL)switch(Kr){case 0x2B:this.CL=132;break;case 0x2D:this.
CL=133;break;case 0x2A:this.CL=134;break;case 0x2F:this.CL=135;break;case 0x3D:this.
CL=136;break;case 0x2E:this.CL=137;break;case 0x2C:this.CL=138;break;case 0x3A:this.
CL=139;break;case 0x3B:this.CL=140;break;default:;}return this;},Initialize:function(
Kr,S0){this.CL=Kr;this.Down=S0;this.DJ=0x00;var A0n=Kr-10;var AsY=Kr-105;if((A0n>=
0)&&(A0n<=9))this.DJ=(48+A0n)&0xFFFF;if((AsY>=0)&&(AsY<=25))this.DJ=(65+AsY)&0xFFFF;
if(Kr===131)this.DJ=0x20;if(this.DJ===0x00)switch(Kr){case 132:this.DJ=0x2B;break;
case 133:this.DJ=0x2D;break;case 134:this.DJ=0x2A;break;case 135:this.DJ=0x2F;break;
case 136:this.DJ=0x3D;break;case 137:this.DJ=0x2E;break;case 138:this.DJ=0x2C;break;
case 139:this.DJ=0x3A;break;case 140:this.DJ=0x3B;break;default:;}return this;},
BhQ:function(Baq){switch(Baq){case 141:return((this.DJ>=0x41)&&(this.DJ<=0x5A))||((
this.DJ>=0x61)&&(this.DJ<=0x7A));case 142:return(((this.DJ>=0x41)&&(this.DJ<=0x5A
))||((this.DJ>=0x61)&&(this.DJ<=0x7A)))||((this.DJ>=0x30)&&(this.DJ<=0x39));case
143:return(this.DJ>=0x30)&&(this.DJ<=0x39);case 144:return(((this.DJ>=0x41)&&(this.
DJ<=0x46))||((this.DJ>=0x61)&&(this.DJ<=0x66)))||((this.DJ>=0x30)&&(this.DJ<=0x39
));case 145:return this.DJ!==0x00;case 146:return(this.DJ===0x00)&&!!this.CL;case
147:return(((this.CL===6)||(this.CL===7))||(this.CL===4))||(this.CL===5);case 148:
return(this.DJ!==0x00)||!!this.CL;default:;}return Baq===this.CL;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AQz={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AQz;
},_className:"Core::LanguageEvent"};C.Auk={Aw5:null,LN:A.wf,N0:0,Iz:0,Down:false
,NA:false,InitializeUp:function(BF,N9,Aoc,AZ1,ZX){this.Down=false;this.Iz=BF;this.
N0=N9;this.LN=ZX;this.Aw5=AZ1;this.NA=Aoc;return this;},InitializeDown:function(
BF,N9,Aoc,AZ1,ZX){this.Down=true;this.Iz=BF;this.N0=N9;this.LN=ZX;this.Aw5=AZ1;this.
NA=Aoc;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Auk;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Aw5)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.AdP={Agz:A.wf,LN:
A.wf,N0:0,Jh:0,NK:A.wf,HV:A.wf,Iz:0,Down:false,NA:false,InitializeHold:function(
BF,AkS,Ayh,Ayi,N9,WZ,ZX,Ayg){this.Down=true;this.Iz=BF;this.HV=A.abf(AkS,WZ);this.
NK=A.abf(Ayh,WZ);this.Jh=Ayi;this.N0=N9;this.LN=ZX;this.Agz=Ayg;return this;},InitializeUp:
function(BF,AkS,Ayh,Ayi,N9,WZ,Aoc,ZX,Ayg){this.Down=false;this.Iz=BF;this.HV=A.abf(
AkS,WZ);this.NK=A.abf(Ayh,WZ);this.Jh=Ayi;this.N0=N9;this.NA=Aoc;this.LN=ZX;this.
Agz=Ayg;return this;},InitializeDown:function(BF,AkS,N9,WZ,Aoc,ZX){this.Down=true;
this.Iz=BF;this.HV=A.abf(AkS,WZ);this.NK=A.abf(AkS,WZ);this.Jh=0;this.N0=N9;this.
NA=Aoc;this.LN=ZX;this.Agz=ZX;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.AdP;},_className:"Core::CursorEvent"};C.Ap$={Agz:A.wf
,LN:A.wf,N0:0,Jh:0,Dx:A.wf,NK:A.wf,HV:A.wf,Iz:0,Initialize:function(BF,AkS,Ayh,aOffset
,Ayi,BvV,WZ,ZX,Ayg){this.Iz=BF;this.HV=A.abf(AkS,WZ);this.NK=A.abf(Ayh,WZ);this.
Dx=aOffset;this.Jh=Ayi;this.N0=BvV;this.LN=ZX;this.Agz=Ayg;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Ap$;},_className:"Core::DragEvent"
};C.Z={BT:null,Nr:null,Ej:null,Bq:A.wf,ATR:0,Space:0,Agx:0,J9:function(CV,aClip,
aOffset,Cg,aBlend){},GetClipping:function(){var B;var Ax=C.El.GetClipping.call(this
);if(((this.T&0x80000)===0x80000)){var ApA=BD;var X;for(X=this.Ag;!!X&&!((X.T&0x200
)===0x200);X=X.Ag)if(((X.T&0x1)===0x1))ApA=A.wC(ApA,X.GetClipping());Ax=A.wC(Ax,
ApA);}return Ax;},Cu:function(Re,UL){var B;var Tc=this.T;if((!!this.Ab&&((this.T&
0x80001)===0x80001))&&((UL&0x80000)===0x80000))this.Ab.Bd(this.GetClipping());C.
El.Cu.call(this,Re,UL);if(((!!this.Ab&&((this.T&0x1)===0x1))&&((Re&0x80000)===0x80000
))&&!((Tc&0x80000)===0x80000))this.Ab.Bd(this.GetClipping());},H:function(E){var
B;if(A.aaY(E,this.M))return;var Alv=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJJ=[E[2]-
E[0],E[3]-E[1]];var Apw=!A.aaX(Alv,AJJ);var Fi=A.abe(E.slice(0,2),this.M.slice(0
,2));if(!A.aaX(Fi,Ca)&&!Apw){var X=this.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var tmp=((X.T&0x100)===0x100);X.AmU(Fi,tmp);}X=X.Ag;}A.pe(this.
Ej,this);}if((Apw&&(Alv[0]>0))&&(Alv[1]>0)){var A_=A.abh(this.M,this.Bq);var X=this.
Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){if(!!X.En&&(X.En.
Nt!==this))X.En=null;if(!X.En&&((X.PC!==0x14)||!!this.Agx))X.Ate(A_,this);}X=X.Ag;
}A.pe(this.Ej,this);}C.El.H.call(this,E);if(!!this.Ab&&Apw){this.T=this.T|0x1000;
if(!((this.Ab.T&0x2000)===0x2000)){this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.
Jz],this);}}},Bd$:function(){var B;if((!this.Agx||!!!this.Ab)||!((this.Ab.T&0x4000
)===0x4000))return;var X=this.Ag;var A0H=((this.T&0x1000)===0x1000);for(;!!X&&!A0H;
X=X.Ag){if(((X.T&0x400)===0x400)&&((X.T&0x800)===0x800))A0H=true;if(((X.T&0x200)===
0x200))break;}if(A0H){this.T=this.T&~0x4000;this.Ab.Bej();}},Apg:function(G){var
B;this.BT.Q=null;this.BT.Qi=null;this.BT=null;(B=this.Nr)?B[1].call(B[0],this):null;
},Gh:function(E){var B;var Fi=A.abe(E,this.Bq);if(A.aaX(Fi,Ca))return;this.Bq=E;
var X=this.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var tmp=((
X.T&0x100)===0x100);X.AmU(Fi,tmp);}X=X.Ag;}if(!!this.Ab)this.Ab.Bd(this.M);A.pe(
this.Ej,this);},A9e:function(E){var B;if(E<0)E=0;if(E===this.ATR)return;this.ATR=
E;if(!!this.Ab&&!!this.Agx){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([
B=this.Ab,B.Jz],this);}},BlQ:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.Agx){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|
0x4000;A.pe([B=this.Ab,B.Jz],this);}},Kd:function(E){var B;if(E===this.Agx)return;
this.Agx=E;if(!!this.Ab){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jz],this);}},Vc:function(AcC,EX){var AsY=this.Db(0x1);var Ri=this.M;var
UZ=A.abe(AsY.slice(0,2),Ri.slice(0,2));var L5=A.abe(AsY.slice(2,4),Ri.slice(2,4)
);var Bo=Ca;if((UZ[0]>0)&&(L5[0]>UZ[0]))Bo=[UZ[0],Bo[1]];else if((UZ[0]>0)&&(L5[
0]>0))Bo=[L5[0],Bo[1]];if((L5[0]<0)&&(UZ[0]<L5[0]))Bo=[L5[0],Bo[1]];else if((L5[
0]<0)&&(UZ[0]<0))Bo=[UZ[0],Bo[1]];if((UZ[1]>0)&&(L5[1]>UZ[1]))Bo=[Bo[0],UZ[1]];else
if((UZ[1]>0)&&(L5[1]>0))Bo=[Bo[0],L5[1]];if((L5[1]<0)&&(UZ[1]<L5[1]))Bo=[Bo[0],L5[
1]];else if((L5[1]<0)&&(UZ[1]<0))Bo=[Bo[0],UZ[1]];if(A.aaX(Bo,Ca)){(EX)?EX[1].call(
EX[0],this):null;return;}if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;this.BT.
Qi=null;this.Nr=null;}this.BT=AcC;if(!this.BT){this.Gh(A.abe(this.Bq,Bo));(EX)?EX[
1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this,this.
Am5,this.Gh];this.BT.Cs=this.Bq;this.BT.B0=A.abe(this.Bq,Bo);this.BT.Qi=[this,this.
Apg];this.BT.AeG(false);this.BT.Ar(true);this.Nr=EX;}},Hy:function(Af,AcF,AcC,EX
){var B;if(!Af)return;if((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400))throw new Error(
UF);this.Bd$();var Ax=Af.GetExtent();var A_=this.M;var LF=A.lb(Ax,A_);if((!AcF&&
!((LF[0]>=LF[2])||(LF[1]>=LF[3])))||(AcF&&A.aaY(LF,Ax))){(EX)?EX[1].call(EX[0],this
):null;return;}var Bo=Ca;if(Ax[2]>A_[2])Bo=[Ax[2]-A_[2],Bo[1]];if(Ax[3]>A_[3])Bo=[
Bo[0],Ax[3]-A_[3]];if(Bo[0]>(Ax[0]-A_[0]))Bo=[Ax[0]-A_[0],Bo[1]];if(Bo[1]>(Ax[1]-
A_[1]))Bo=[Bo[0],Ax[1]-A_[1]];if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;this.
BT.Qi=null;this.Nr=null;}this.BT=AcC;if(!this.BT){this.Gh(A.abe(this.Bq,Bo));(EX
)?EX[1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this
,this.Am5,this.Gh];this.BT.Cs=this.Bq;this.BT.B0=A.abe(this.Bq,Bo);this.BT.Qi=[this
,this.Apg];this.BT.AeG(false);this.BT.Ar(true);this.Nr=EX;}},Bhg:function(Af){var
B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400)))return-1;var CC=-1;while(
!!Af&&!((Af.T&0x200)===0x200)){if(((Af.T&0x400)===0x400))CC=CC+1;Af=Af.AH;}return CC;
},Vx:function(Af,aFilter){var B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400
)))return null;var X=this.Ag;var IO=0x10000;if(((aFilter&0x10000)===0x10000))IO=
0x0;if(!!Af)X=Af.Ag;aFilter=aFilter|0x400;while(!!X&&!((X.T&0x200)===0x200)){if(((
B=aFilter)&&((X.T&B)===B))&&(!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.Ag;}return null;
},Db:function(aFilter){var B;var X=this.Ag;var AE=BD;var IO=0x10000;this.Bd$();if(((
aFilter&0x10000)===0x10000))IO=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.T&0x200
)===0x200)){if(((B=aFilter)&&((X.T&B)===B))&&(!IO||!((B=IO)&&((X.T&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ag;}return AE;},Am5:function(){return this.Bq;},_Init:
function(aArg){C.El._Init.call(this,aArg);this.__proto__=C.Z;this.T=0x203;},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.BT)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CJ={
Hr:null,BT:null,Cf:null,Wr:null,Nr:null,Ej:null,Hc:null,S$:-1,S_:0,Je:-1,Hi:0,Aii:
8,Oe:0,Uj:0,Acm:A.wf,GT:-1,Bq:0,Gi:-1,OI:0,GW:24,AV:0,Le:null,NH:false,Ath:false
,ATY:function(Il,N8,WY,S2,S3,AhK,OZ,Rd,Lu,Ls,Lt){throw new Error(ZE);},Ap9:function(
Il,AhK,OZ,Rd,Lu,Ls,Lt){throw new Error(WH);},Akn:function(Il,N8,WY,S2,S3,OZ,Rd,Lu
,Ls,Lt){throw new Error(ZF);},DispatchEvent:function(CK){var B;var result=null;if(((
this.Gi>=0)&&(this.Gi<this.AV))&&!this.AR){this.GT=this.Gi;this.Cf=(C.Cf.isPrototypeOf(
B=A._NewObject(this.Le,0))?B:null);if(!!this.B8)this.B8.Ag=this.Cf;else this.B7=
this.Cf;this.Cf.AH=this.B8;this.B8=this.Cf;this.Cf.Ab=this;this.Acm=[(B=this.M)[
2]-B[0],this.GW];(B=this.Hc)?B[1].call(B[0],this):null;var BX=(C.O.isPrototypeOf(
B=this.Cf)?B:null);if(!!BX)result=BX.DispatchEvent(CK);else result=this.Cf.GQ(CK
);if(!!this.Cf.AH)this.Cf.AH.Ag=null;else this.B7=null;this.B8=this.Cf.AH;this.Cf.
AH=null;this.Cf.Ab=null;this.Cf=null;}if(!result)result=C.O.DispatchEvent.call(this
,CK);return result;},Ai:function(Ae){var B;if(!this.Le){A.pe(this.Ej,this);return;
}this.Ath=true;var Az6=0;if(!this.NH)Az6=this.OI;var FH=this.AlE(-Az6-this.Bq,1);
var GM=this.AlE(((((B=this.M)[3]-B[1])-Az6)-this.Bq)-1,2);var CC=GM-FH;if(CC<1)CC=
1;var AhW=(CC/2)|0;var AhX=(CC/3)|0;if(!AhW)AhW=1;if(!AhX)AhX=1;if(FH<this.Hi){FH=
FH-AhW;GM=GM+AhX;}else if(GM>this.Je){FH=FH-AhX;GM=GM+AhW;}else{FH=this.Hi;GM=this.
Je;}if(!this.NH){if(FH>=this.AV){FH=0;GM=-1;}else if(GM<0){FH=0;GM=-1;}if(GM>=this.
AV)GM=this.AV-1;if(FH<0)FH=0;}else if(this.AV<=0){FH=0;GM=-1;}var AiB=this.Hi;var
AiC=this.Je;var Ao5=0;var Ao6=-1;if(FH>AiB)AiB=FH;if(GM<AiC)AiC=GM;if(AiB<=AiC){
while((this.Je<GM)&&(this.Hi<AiB)){this.Adg();this.AyG();}while((this.Hi>FH)&&(this.
Je>AiC)){this.AAi();this.AyF();}}else{this.Je=(this.Je-this.Hi)+FH;this.Hi=FH;Ao5=
this.Hi;Ao6=this.Je;}while(this.Hi<FH)this.Adg();while(this.Je>GM)this.AAi();while(
this.Hi>FH)this.AyF();while(this.Je<GM)this.AyG();var Aa=this.B7;var inx=this.Hi;
var pos=[0,(Az6+this.Bq)+this.Jc(inx,0)];var BI=(B=this.M)[3]-B[1];var Ald=null;
var Be2=(B=this.M)[2]-B[0];while(!!Aa){var Iq=inx;if(this.NH){if(Iq<0)Iq=this.AV-(-
Iq%this.AV);if(Iq>0)Iq=Iq%this.AV;}var Adh=((Iq>=this.S_)&&(Iq<=this.S$))||((inx>=
Ao5)&&(inx<=Ao6));var AoM=Aa.GetExtent();var Bo=A.abe(pos,AoM.slice(0,2));if(Adh
)this.Uj=this.GW;else this.Uj=AoM[3]-AoM[1];var A1m=pos[1];var A1n=pos[1]+this.Uj;
if(!A.aaX(Bo,Ca))Aa.AmU(Bo,true);if((Adh&&(A1m<BI))&&(A1n>0)){this.Cf=Aa;this.GT=
Iq;this.Acm=[Be2,this.Uj];(B=this.Hc)?B[1].call(B[0],this):null;}Aa=Aa.Ag;inx+=1;
pos=[pos[0],pos[1]+this.Uj];}inx=this.Hi;Aa=this.B7;pos=[0,(Az6+this.Bq)+this.Jc(
inx,0)];while(!!Aa){var Iq=inx;if(this.NH){if(Iq<0)Iq=this.AV-(-Iq%this.AV);if(Iq>
0)Iq=Iq%this.AV;}var Adh=((Iq>=this.S_)&&(Iq<=this.S$))||((inx>=Ao5)&&(inx<=Ao6)
);if(Adh)this.Uj=this.GW;else this.Uj=(B=Aa.GetExtent())[3]-B[1];var A1m=pos[1];
var A1n=pos[1]+this.Uj;if(Adh&&!((A1m<BI)&&(A1n>0))){this.Cf=Aa;this.GT=Iq;this.
Acm=[Be2,this.Uj];(B=this.Hc)?B[1].call(B[0],this):null;}if(((Iq===this.Gi)&&this.
NH)&&!!Ald){var Ri=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Ri))>A.aaH(A.lb(Ald.GetExtent(),Ri)))Ald=Aa;}else if(Iq===this.Gi)Ald=Aa;Aa=Aa.
Ag;inx+=1;pos=[pos[0],pos[1]+this.Uj];}this.S_=0;this.S$=-1;this.Cf=null;this.GT=-
1;this.A8(Ald);this.Ath=false;A.pe(this.Ej,this);},R5:function(Af,Gq,aFilter){return null;
},Aqd:function(Af,aFilter){return null;},Vx:function(Af,aFilter){return null;},AB6:
function(Af,aFilter){return null;},Db:function(aFilter){return BD;},NI:function(
Ks,FE,Lu,Ls,Lt){throw new Error(WI);},Ahe:function(Af,JT){throw new Error(ZG);},
Ze:function(Af){throw new Error(ZH);},Kl:function(Af,P3){throw new Error(UG);},HI:
function(Af){throw new Error(WJ);},ALi:function(Af,JT){throw new Error(Q9);},J:function(
Af,P3){throw new Error(ZI);},Jc:function(G1,AZB){return G1*this.GW;},AlE:function(
E6,AZB){return(E6/this.GW)|0;},AAi:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AR)this.A8(null);this.Je=this.Je-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B7=null;this.B8=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.En=null;if(this.Oe<this.Aii){if(!
!this.Hr)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Oe++;}return Aa;},AyG:function(
){var B;var Aa=this.Hr;var Ac4=this.Le;var Adl=++this.Je;if(this.NH){if(Adl<0)Adl=
this.AV-(-Adl%this.AV);if(Adl>0)Adl=Adl%this.AV;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ac4))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Hr===Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Oe--;}else{Aa=(C.Cf.
isPrototypeOf(B=A._NewObject(Ac4,0))?B:null);Aa.AX(0x1D);if(!!this.Oe)this.Aii++;
}this.Uj=this.GW;this.GT=Adl;this.Acm=[(B=this.M)[2]-B[0],this.Uj];this.Cf=Aa;(B=
this.Hc)?B[1].call(B[0],this):null;this.Cf=null;this.GT=-1;if(!!this.B8)this.B8.
Ag=Aa;Aa.Ab=this;Aa.AH=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(Adl===this.Gi
)this.A8(Aa);return Aa;},Adg:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AR)this.A8(null);this.Hi=this.Hi+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B8=null;
this.B7=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.En=null;if(this.Oe<this.Aii){if(!!this.Hr
)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Oe++;}return Aa;},AyF:function(){var
B;var Aa=this.Hr;var Ac4=this.Le;var MX=--this.Hi;if(this.NH){if(MX<0)MX=this.AV-(-
MX%this.AV);if(MX>0)MX=MX%this.AV;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Ac4)
)Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.Ag;if(this.Hr===
Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Oe--;}else{Aa=(C.Cf.isPrototypeOf(B=
A._NewObject(Ac4,0))?B:null);Aa.AX(0x1D);if(!!this.Oe)this.Aii++;}this.Uj=this.GW;
this.GT=MX;this.Acm=[(B=this.M)[2]-B[0],this.Uj];this.Cf=Aa;(B=this.Hc)?B[1].call(
B[0],this):null;this.Cf=null;this.GT=-1;if(!!this.B7)this.B7.AH=Aa;Aa.Ab=this;Aa.
Ag=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MX===this.Gi)this.A8(Aa);return Aa;
},Apg:function(G){var B;this.BT.Q=null;this.BT.Qi=null;this.BT=null;(B=this.Nr)?
B[1].call(B[0],this):null;},By2:function(G){this.Gh(this.Wr.Dx[1]);},By3:function(
G){var B;if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;this.BT.Qi=null;this.BT=
null;}if(!this.NH){var AE=this.Aqj(0,this.AV-1);var AfS=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OI);if(AE[0]>AfS[0])AE=[].concat(AfS[0],AE.slice(1,4));if(AE[1]>AfS[
1])AE=A.abP(AE,AfS[1]);var Fi=AE[1]-this.M[1];var A1B=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A1B>0)A1B=0;this.Wr.Dx=[0,this.Bq];this.Wr.Gd=[0,(this.Bq+A1B)-Fi];this.
Wr.FQ=[0,this.Bq-Fi];}else{var Fi=32000-(32000%this.GW);this.Wr.Dx=[0,this.Bq];this.
Wr.Gd=[0,this.Bq-Fi];this.Wr.FQ=[0,this.Bq+Fi];}},AR$:function(E){var B;if(this.
NH===E)return;this.NH=E;while(!!this.Adg());this.Am();this.Bd([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Awm:function(E){if(E===this.Wr)return;if(!!E&&!!E.Atu){A.ab5(
"%s%*%s",OU,E,Q_);throw new Error(WK);}if(!!this.Wr){this.Wr.AJW=null;this.Wr.Atu=
null;}this.Wr=E;if(!!E){E.AJW=[this,this.By3];E.Atu=[this,this.By2];}},Gh:function(
E){var B;if(this.NH&&(this.AV>0)){var Ht=this.Jc(this.AV,3);if(E<0)E=Ht-(-E%Ht);
if(E>0)E=E%Ht;if(E>0)E=E-Ht;}if(E===this.Bq)return;this.Bq=E;this.Am();this.Bd([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GX:function(E){if(E<0)E=-1;if(E===this.Gi)return;
this.Gi=E;this.Am();},A84:function(E){var B;if(E<0)E=0;if(E===this.OI)return;this.
OI=E;if(!this.NH){this.Am();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},AeD:function(
E){var B;if(E<1)E=1;if(E===this.GW)return;this.GW=E;while(!!this.Adg());this.Am(
);this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jn:function(E){var B;if(E<0)E=0;
if(E===this.AV)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NH){if(
E>this.AV){AE=[].concat(AE.slice(0,3),(this.OI+this.Bq)+this.Jc(E,3));AE=A.abP(AE
,(this.OI+this.Bq)+this.Jc(this.AV,3));}else{AE=A.abP(AE,(this.OI+this.Bq)+this.
Jc(E,3));AE=[].concat(AE.slice(0,3),(this.OI+this.Bq)+this.Jc(this.AV,3));}}else
while(!!this.Adg());this.AV=E;this.Am();this.Bd(AE);},NS:function(E){var B;if(E===
this.Le)return;this.Le=E;while(!!this.Adg());this.Hr=null;this.Oe=0;this.Am();this.
Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bht:function(G1){if(this.Ath)return null;
if((G1<0)||(G1>=this.AV))return null;if(!this.NH){if((G1<this.Hi)||(G1>this.Je))
return null;var X=this.B7;while(G1>this.Hi){X=X.Ag;G1=G1-1;}return X;}else{var MX=
this.Hi;if(MX<0)MX=this.AV-(-MX%this.AV);if(MX>0)MX=MX%this.AV;var X=this.B7;while(
!!X){if((MX%this.AV)===G1)return X;X=X.Ag;MX=MX+1;}return null;}},AAY:function(AcC
,EX){var B;if(this.NH){(EX)?EX[1].call(EX[0],this):null;return;}var AJo=this.Bq;
var BbQ=((((B=this.M)[3]-B[1])-this.Bq)-this.OI)-this.Jc(this.AV,3);var Bo=0;if(
AJo>0)Bo=-AJo;else if(BbQ>0)Bo=BbQ;if((Bo>0)&&(Bo>-AJo))Bo=-AJo;if(!Bo){(EX)?EX[
1].call(EX[0],this):null;return;}if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;
this.BT.Qi=null;this.Nr=null;}this.BT=AcC;if(!this.BT){this.Gh(this.Bq+Bo);(EX)?
EX[1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this
,this.Am5,this.Gh];this.BT.Cs=this.Bq;this.BT.B0=this.Bq+Bo;this.BT.Qi=[this,this.
Apg];this.BT.AeG(false);this.BT.Ar(true);this.Nr=EX;}},Hy:function(G1,AcF,AcC,EX
){var B;if((G1<0)||(G1>=this.AV))return;var Ax=this.Aqj(G1,G1);var A_=this.M;var
LF=A.lb(Ax,A_);if((!AcF&&!((LF[0]>=LF[2])||(LF[1]>=LF[3])))||(AcF&&A.aaY(LF,Ax))
){(EX)?EX[1].call(EX[0],this):null;return;}var Bo=0;if(Ax[3]>A_[3])Bo=Ax[3]-A_[3
];if(Bo>(Ax[1]-A_[1]))Bo=Ax[1]-A_[1];if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;
this.BT.Qi=null;this.Nr=null;}this.BT=AcC;if(!this.BT){this.Gh(this.Bq-Bo);(EX)?
EX[1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this
,this.Am5,this.Gh];this.BT.Cs=this.Bq;this.BT.B0=this.Bq-Bo;this.BT.Qi=[this,this.
Apg];this.BT.AeG(false);this.BT.Ar(true);this.Nr=EX;}},Bhl:function(){return BD;
},AN5:function(){if((this.OI<=0)||this.NH)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bq);AE=[].concat(AE.slice(0,3),AE[1]+this.OI);return AE;},A5L:function(E6
){if(((this.AV<=0)||(E6[0]<this.M[0]))||(E6[0]>=this.M[2]))return-1;E6=A.abe(E6,
this.M.slice(0,2));if(!this.NH){var Aa=(E6[1]-this.Bq)-this.OI;if(Aa>0)Aa=this.AlE(
Aa,0);if((Aa<0)||(Aa>=this.AV))return-1;return Aa;}var Aa=E6[1]-this.Bq;if(Aa>0)
Aa=this.AlE(Aa,0);if(Aa<0)Aa=this.AlE(Aa,0)-1;if(Aa<0)Aa=this.AV-(-Aa%this.AV);if(
Aa>0)Aa=Aa%this.AV;return Aa;},Aqj:function(JS,LZ){if(JS<0)JS=0;if(LZ>=this.AV)LZ=
this.AV-1;if(JS>LZ)return BD;var AE=this.M;var Bo=this.Bq;if(this.NH){var Ht=this.
Jc(this.AV,3);if(Bo<0)Bo=Ht-(-Bo%Ht);if(Bo>0)Bo=Bo%Ht;if(Bo>0)Bo=Bo-Ht;}else Bo=
Bo+this.OI;AE=[].concat(AE.slice(0,3),(AE[1]+Bo)+this.Jc(LZ+1,0));AE=A.abP(AE,(AE[
1]+Bo)+this.Jc(JS,0));return AE;},Abg:function(JS,LZ){var B;if(JS<0)JS=0;if(JS>LZ
)return;if(this.S_>this.S$){this.S_=JS;this.S$=LZ;}else{if(JS<this.S_)this.S_=JS;
if(LZ>this.S$)this.S$=LZ;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NH){
AE=A.abP(AE,(this.OI+this.Bq)+this.Jc(JS,0));AE=[].concat(AE.slice(0,3),(this.OI+
this.Bq)+this.Jc(LZ+1,0));}else if((this.Jc(this.AV-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bo=this.Bq;var Ht=this.Jc(this.AV,3);if(Bo<0)Bo=Ht-(-Bo%Ht);if(
Bo>0)Bo=Bo%Ht;if(Bo>0)Bo=Bo-Ht;AE=A.abP(AE,Bo+this.Jc(JS,0));AE=[].concat(AE.slice(
0,3),Bo+this.Jc(LZ+1,0));}this.Am();this.Bd(AE);},Am5:function(){return this.Bq;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CJ;this.H(WM);
this.Le=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hr
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wr)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hr:null
,BT:null,Cf:null,Nr:null,Hc:null,S$:-1,S_:0,Je:-1,Hi:0,Aii:8,Oe:0,Sv:0,Acm:A.wf,
GT:-1,Bq:0,Gi:-1,VT:24,AV:0,Le:null,Ath:false,ATY:function(Il,N8,WY,S2,S3,AhK,OZ
,Rd,Lu,Ls,Lt){throw new Error(WN);},Ap9:function(Il,AhK,OZ,Rd,Lu,Ls,Lt){throw new
Error(WO);},Akn:function(Il,N8,WY,S2,S3,OZ,Rd,Lu,Ls,Lt){throw new Error(ZJ);},DispatchEvent:
function(CK){var B;var result=null;if(((this.Gi>=0)&&(this.Gi<this.AV))&&!this.AR
){this.GT=this.Gi;this.Cf=(C.Cf.isPrototypeOf(B=A._NewObject(this.Le,0))?B:null);
if(!!this.B8)this.B8.Ag=this.Cf;else this.B7=this.Cf;this.Cf.AH=this.B8;this.B8=
this.Cf;this.Cf.Ab=this;this.Acm=[this.Sv,(B=this.M)[3]-B[1]];(B=this.Hc)?B[1].call(
B[0],this):null;var BX=(C.O.isPrototypeOf(B=this.Cf)?B:null);if(!!BX)result=BX.DispatchEvent(
CK);else result=this.Cf.GQ(CK);if(!!this.Cf.AH)this.Cf.AH.Ag=null;else this.B7=null;
this.B8=this.Cf.AH;this.Cf.AH=null;this.Cf.Ab=null;this.Cf=null;}if(!result)result=
C.O.DispatchEvent.call(this,CK);return result;},Ai:function(Ae){var B;if(!this.Le
)return;this.Ath=true;var FH=this.AlE(0-this.Bq,1);var GM=this.AlE((((B=this.M)[
2]-B[0])-this.Bq)-1,2);var CC=GM-FH;if(CC<1)CC=1;var AhW=(CC/2)|0;var AhX=(CC/3)|
0;if(!AhW)AhW=1;if(!AhX)AhX=1;if(FH<this.Hi){FH=FH-AhW;GM=GM+AhX;}else if(GM>this.
Je){FH=FH-AhX;GM=GM+AhW;}else{FH=this.Hi;GM=this.Je;}if(FH>=this.AV){FH=0;GM=-1;
}else if(GM<0){FH=0;GM=-1;}if(GM>=this.AV)GM=this.AV-1;if(FH<0)FH=0;var AiB=this.
Hi;var AiC=this.Je;var Ao5=0;var Ao6=-1;if(FH>AiB)AiB=FH;if(GM<AiC)AiC=GM;if(AiB<=
AiC){while((this.Je<GM)&&(this.Hi<AiB)){this.Adg();this.AyG();}while((this.Hi>FH
)&&(this.Je>AiC)){this.AAi();this.AyF();}}else{this.Je=(this.Je-this.Hi)+FH;this.
Hi=FH;Ao5=this.Hi;Ao6=this.Je;}while(this.Hi<FH)this.Adg();while(this.Je>GM)this.
AAi();while(this.Hi>FH)this.AyF();while(this.Je<GM)this.AyG();var Aa=this.B7;var
inx=this.Hi;var pos=[this.Bq+this.Jc(inx,0),0];var BU=(B=this.M)[2]-B[0];var Ald=
null;var BeR=(B=this.M)[3]-B[1];while(!!Aa){var Iq=inx;var Adh=((Iq>=this.S_)&&(
Iq<=this.S$))||((inx>=Ao5)&&(inx<=Ao6));var AoM=Aa.GetExtent();var Bo=A.abe(pos,
AoM.slice(0,2));if(Adh)this.Sv=this.VT;else this.Sv=AoM[2]-AoM[0];var A1k=pos[0];
var A1l=pos[0]+this.Sv;if(!A.aaX(Bo,Ca))Aa.AmU(Bo,true);if((Adh&&(A1k<BU))&&(A1l>
0)){this.Cf=Aa;this.GT=Iq;this.Acm=[this.Sv,BeR];(B=this.Hc)?B[1].call(B[0],this
):null;}Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.Sv,pos[1]];}inx=this.Hi;Aa=this.B7;pos=[
this.Bq+this.Jc(inx,0),0];while(!!Aa){var Iq=inx;var Adh=((Iq>=this.S_)&&(Iq<=this.
S$))||((inx>=Ao5)&&(inx<=Ao6));if(Adh)this.Sv=this.VT;else this.Sv=(B=Aa.GetExtent(
))[2]-B[0];var A1k=pos[0];var A1l=pos[0]+this.Sv;if(Adh&&!((A1k<BU)&&(A1l>0))){this.
Cf=Aa;this.GT=Iq;this.Acm=[this.Sv,BeR];(B=this.Hc)?B[1].call(B[0],this):null;}if(
Iq===this.Gi)Ald=Aa;Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.Sv,pos[1]];}this.S_=0;this.
S$=-1;this.Cf=null;this.GT=-1;this.A8(Ald);this.Ath=false;},R5:function(Af,Gq,aFilter
){return null;},Aqd:function(Af,aFilter){return null;},Vx:function(Af,aFilter){return null;
},AB6:function(Af,aFilter){return null;},Db:function(aFilter){return BD;},NI:function(
Ks,FE,Lu,Ls,Lt){throw new Error(WQ);},Ahe:function(Af,JT){throw new Error(WR);},
Ze:function(Af){throw new Error(SW);},Kl:function(Af,P3){throw new Error(ZK);},HI:
function(Af){throw new Error(ZL);},ALi:function(Af,JT){throw new Error(Acp);},J:
function(Af,P3){throw new Error(UH);},Jc:function(G1,AZB){return G1*this.VT;},AlE:
function(E6,AZB){return(E6/this.VT)|0;},AAi:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AR)this.A8(null);this.Je=this.Je-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B7=null;this.B8=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.En=null;if(this.Oe<this.Aii){if(!
!this.Hr)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Oe++;}return Aa;},AyG:function(
){var B;var Aa=this.Hr;var Ac4=this.Le;var Adl=++this.Je;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ac4))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.
AH.Ag=Aa.Ag;if(this.Hr===Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Oe--;}else{
Aa=(C.Cf.isPrototypeOf(B=A._NewObject(Ac4,0))?B:null);Aa.AX(0x1D);if(!!this.Oe)this.
Aii++;}this.Sv=this.VT;this.GT=Adl;this.Acm=[this.Sv,(B=this.M)[3]-B[1]];this.Cf=
Aa;(B=this.Hc)?B[1].call(B[0],this):null;this.Cf=null;this.GT=-1;if(!!this.B8)this.
B8.Ag=Aa;Aa.Ab=this;Aa.AH=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(Adl===this.
Gi)this.A8(Aa);return Aa;},Adg:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AR)this.A8(null);this.Hi=this.Hi+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B8=null;
this.B7=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.En=null;if(this.Oe<this.Aii){if(!!this.Hr
)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Oe++;}return Aa;},AyF:function(){var
B;var Aa=this.Hr;var Ac4=this.Le;var MX=--this.Hi;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ac4))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Hr===Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Oe--;}else{Aa=(C.Cf.
isPrototypeOf(B=A._NewObject(Ac4,0))?B:null);Aa.AX(0x1D);if(!!this.Oe)this.Aii++;
}this.Sv=this.VT;this.GT=MX;this.Acm=[this.Sv,(B=this.M)[3]-B[1]];this.Cf=Aa;(B=
this.Hc)?B[1].call(B[0],this):null;this.Cf=null;this.GT=-1;if(!!this.B7)this.B7.
AH=Aa;Aa.Ab=this;Aa.Ag=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MX===this.Gi
)this.A8(Aa);return Aa;},Apg:function(G){var B;this.BT.Q=null;this.BT.Qi=null;this.
BT=null;(B=this.Nr)?B[1].call(B[0],this):null;},Gh:function(E){var B;if(E===this.
Bq)return;this.Bq=E;this.Am();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GX:function(
E){if(E<0)E=-1;if(E===this.Gi)return;this.Gi=E;this.Am();},AEw:function(E){var B;
if(E<1)E=1;if(E===this.VT)return;this.VT=E;while(!!this.Adg());this.Am();this.Bd([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jn:function(E){var B;if(E<0)E=0;if(E===this.
AV)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AV){AE=[].concat(this.
Bq+this.Jc(this.AV,3),AE.slice(1,4));AE=A.abN(AE,this.Bq+this.Jc(E,3));}else{AE=
A.abN(AE,this.Bq+this.Jc(this.AV,3));AE=[].concat(this.Bq+this.Jc(E,3),AE.slice(
1,4));}this.AV=E;this.Am();this.Bd(AE);},NS:function(E){var B;if(E===this.Le)return;
this.Le=E;while(!!this.Adg());this.Hr=null;this.Oe=0;this.Am();this.Bd([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bnm:function(BvW,BvX){if(!this.BT)return;if(BvW)this.Gh(
this.BT.B0);var A3a=this.Nr;this.BT.Ar(false);this.BT.Q=null;this.BT.Qi=null;this.
Nr=null;this.BT=null;if(BvX)(A3a)?A3a[1].call(A3a[0],this):null;},BhV:function(){
return!!this.BT;},Hy:function(G1,AcF,AcC,EX){var B;if((G1<0)||(G1>=this.AV))return;
var Ax=this.Aqj(G1,G1);var A_=this.M;var LF=A.lb(Ax,A_);if((!AcF&&!((LF[0]>=LF[2
])||(LF[1]>=LF[3])))||(AcF&&A.aaY(LF,Ax))){(EX)?EX[1].call(EX[0],this):null;return;
}var Bo=0;if(Ax[2]>A_[2])Bo=Ax[2]-A_[2];if(Bo>(Ax[0]-A_[0]))Bo=Ax[0]-A_[0];if(!!
this.BT){this.BT.Ar(false);this.BT.Q=null;this.BT.Qi=null;this.Nr=null;}this.BT=
AcC;if(!this.BT){this.Gh(this.Bq-Bo);(EX)?EX[1].call(EX[0],this):null;}else{this.
BT.Ar(false);this.BT.HG(1);this.BT.Q=[this,this.Am5,this.Gh];this.BT.Cs=this.Bq;
this.BT.B0=this.Bq-Bo;this.BT.Qi=[this,this.Apg];this.BT.AeG(false);this.BT.Ar(true
);this.Nr=EX;}},Aqj:function(JS,LZ){if(JS<0)JS=0;if(LZ>=this.AV)LZ=this.AV-1;if(
JS>LZ)return BD;var AE=this.M;var Bo=this.Bq;AE=A.abN(AE,(AE[0]+Bo)+this.Jc(LZ+1
,0));AE=[].concat((AE[0]+Bo)+this.Jc(JS,0),AE.slice(1,4));return AE;},Abg:function(
JS,LZ){var B;if(JS<0)JS=0;if(JS>LZ)return;if(this.S_>this.S$){this.S_=JS;this.S$=
LZ;}else{if(JS<this.S_)this.S_=JS;if(LZ>this.S$)this.S$=LZ;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bq+this.Jc(JS,0),AE.slice(1,4));AE=A.abN(
AE,this.Bq+this.Jc(LZ+1,0));this.Am();this.Bd(AE);},Am5:function(){return this.Bq;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.H(WM);
this.Le=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hr
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bj={ARq:null,ADX:null,Avt:null,DS:null,
Li:null,BL:null,AKh:0,Bn:0,Iz:0,Bt:0,N0:0,Jh:0,Dx:A.wf,NK:A.wf,HV:A.wf,AwO:8,AeO:
0,A6C:1,Down:false,Yk:false,NA:false,A0O:false,AzB:0,J9:function(CV,aClip,aOffset
,Cg,aBlend){},GQ:function(CK){var B;var BN=(C.AdP.isPrototypeOf(CK)?CK:null);var
DV=(C.Ap$.isPrototypeOf(CK)?CK:null);var AJA=this.Yk;var Aaj;var UW;var AAD;var MU;
var AyZ;if(!BN&&!DV)return null;Aaj=(!!BN&&BN.Down)&&!BN.Jh;UW=(!!BN&&BN.Down)&&(
BN.Jh>0);AAD=(!!BN&&BN.Down)&&(BN.Jh>this.AzB);MU=!!BN&&!BN.Down;AyZ=!!DV;if(Aaj
)this.AzB=((B=(BN.NA?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.AeO&0x20)===0x20
)&&(this.Bn>0))&&(this.Bn<33554432)){var Ip=(C.Auk.isPrototypeOf(CK)?CK:null);if(((
!!Ip&&Ip.Down)&&(Ip.Aw5!==this))&&A.wa(this.GetExtent(),this.Ab.A6y(Ip.LN))){this.
AKh=0x20;this.Bn=this.Bn|67108864;return null;}}if(Aaj){var Apa=0;var AcZ;this.Bn=
this.Bn|(1<<BN.Iz);for(AcZ=this.Bn&4095;AcZ>0;AcZ=AcZ>>1)if(!!(AcZ&1))Apa=Apa+1;
if(Apa===1)this.Bn=(this.Bn|16777216)|(4096<<BN.Iz);}if(MU&&(this.Bn<16777216)){
var It=this.If();var Jt=null;if(!!It){var A24=(!!this.AH?this.AH:this.Ab);var A0C=(
!!It.Ju?It.Ju.CX:null);Jt=It.X1(A.abh(ZM,BN.LN),BN.Iz,BN.N0,A0C,A24,0x0);}if(!!Jt
){var P;for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Cf.GQ(A._NewObject(C.AdP,0).InitializeDown(
P,BN.HV,BN.N0,Ca,true,BN.LN));for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Cf.GQ(A.
_NewObject(C.AdP,0).InitializeUp(P,BN.HV,BN.HV,0,BN.N0,Ca,false,BN.LN,BN.LN));}}
if(MU)this.Bn=(this.Bn&~(1<<BN.Iz))|33554432;if(AAD&&(this.Bn<16777216))this.Bn=
this.Bn|67108864;if(MU&&BN.NA)this.Bn=this.Bn|67108864;if(MU&&!(this.Bn&4095))this.
AKh=0x0;if(MU&&!(this.Bn&16777215))this.Bn=0;if(UW&&(this.Bn>=67108864)){var It=
this.If();if(!!It)It.ATn(null,null,this,this.AKh);}if((UW&&!!(this.Bn&16777216))&&
!!(this.Bn&33554432)){UW=false;MU=true;}if(!!BN&&!(this.Bn&(4096<<BN.Iz)))return this;
if(!!DV&&!(this.Bn&(4096<<DV.Iz)))return this;if(MU&&!(this.Bn&16777216))return this;
if(((Aaj||AyZ)||UW)&&((this.Bn<16777216)||(this.Bn>=33554432)))return this;if(MU
)this.Bn=this.Bn&3758100479;if(MU&&!(this.Bn&16777215))this.Bn=0;if(!!BN){this.Down=
Aaj||UW;this.Yk=this.AQl(BN.HV);this.NK=BN.NK;this.HV=BN.HV;this.Dx=Ca;this.Jh=BN.
Jh;this.N0=BN.N0;this.NA=BN.NA;this.Iz=BN.Iz;this.Bt=BN.Bt;if(BN.Down&&!BN.Jh)AJA=
false;}if(!!DV){this.Down=true;this.Yk=this.AQl(DV.HV);this.NK=DV.NK;this.HV=DV.
HV;this.Dx=DV.Dx;this.Jh=DV.Jh;this.N0=DV.N0;this.Iz=DV.Iz;this.NA=false;this.Bt=
DV.Bt;}var A0I=this.Down;if(!!DV)(B=this.ARq)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Jh)(B=this.BL)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Jh>0))(B=this.DS)?B[1].call(B[0],this):null;if((this.Down&&this.Yk)&&!AJA){
this.A0O=true;(B=this.Avt)?B[1].call(B[0],this):null;}if(this.A0O&&(((A0I&&!this.
Yk)&&AJA)||((!A0I&&this.Yk)&&AJA))){this.A0O=false;(B=this.ADX)?B[1].call(B[0],this
):null;}if(!!BN&&!A0I)(B=this.Li)?B[1].call(B[0],this):null;if(!!this.AeO){var Adf=
0x0;if(((((this.AeO&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Jh>=1000))Adf=0x10;if((((
this.AeO&0x1)===0x1)&&!!DV)&&((DV.LN[1]-DV.Agz[1])<=-this.AwO))Adf=0x1;if((((this.
AeO&0x2)===0x2)&&!!DV)&&((DV.LN[1]-DV.Agz[1])>=this.AwO))Adf=0x2;if((((this.AeO&
0x4)===0x4)&&!!DV)&&((DV.LN[0]-DV.Agz[0])<=-this.AwO))Adf=0x4;if((((this.AeO&0x8
)===0x8)&&!!DV)&&((DV.LN[0]-DV.Agz[0])>=this.AwO))Adf=0x8;if(!!Adf){var It=this.
If();if(!!It){this.AKh=Adf;It.ATn(null,this,this,Adf);}}}return this;},X1:function(
C_,BF,N9,ZW,AcI,AcH){var B;if(!!ZW&&(ZW!==this))return null;if((N9<1)||(N9>this.
A6C))return null;if(this.Bn>=33554432)return null;if((this.Bn>=16777216)&&!(this.
Bn&(4096<<BF)))return null;if(!!(AcH&this.AeO))return null;if(this.Bhy()){var Ax=
A.lb(C_,this.GetExtent());if(!((Ax[0]>=Ax[2])||(Ax[1]>=Ax[3]))){var P8=A.aaI(C_);
var Fi=Ca;if(P8[0]<Ax[0])Fi=[Ax[0]-P8[0],Fi[1]];if(P8[0]>=Ax[2])Fi=[(Ax[2]-P8[0]
)-1,Fi[1]];if(P8[1]<Ax[1])Fi=[Fi[0],Ax[1]-P8[1]];if(P8[1]>=Ax[3])Fi=[Fi[0],(Ax[3
]-P8[1])-1];return A._NewObject(C.Aul,0).Initialize(this,Fi);}}else{var Hs=A.abi(
9,A.wf,null);var P;Hs.Set(0,A.aaI(C_));Hs.Set(1,Hs.Get(0));Hs.Set(2,Hs.Get(0));Hs.
Set(3,Hs.Get(0));Hs.Set(4,Hs.Get(0));Hs.Set(1,[C_[0],Hs.Get(1)[1]]);Hs.Set(2,[Hs.
Get(2)[0],C_[1]]);Hs.Set(3,[C_[2],Hs.Get(3)[1]]);Hs.Set(4,[Hs.Get(4)[0],C_[3]]);
Hs.Set(5,C_.slice(0,2));Hs.Set(6,[C_[2],C_[1]]);Hs.Set(7,[C_[0],C_[3]]);Hs.Set(8
,C_.slice(2,4));for(P=0;P<9;P=P+1)if(this.AQl(Hs.Get(P)))return A._NewObject(C.Aul
,0).Initialize(this,A.abe(Hs.Get(P),Hs.Get(0)));}return null;},BlK:function(E){if(
E<1)E=1;this.AwO=E;},AEF:function(E){if(E<1)E=1;this.A6C=E;},Ar:function(E){if(E
)this.Cu(0x100000,0x0);else this.Cu(0x0,0x100000);},_Init:function(aArg){C.Zb._Init.
call(this,aArg);this.__proto__=C.Bj;this.T=0x10011B;},_Mark:function(D){var B;C.
Zb._Mark.call(this,D);if((B=this.ARq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.ADX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avt)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Li)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H2={timer:null,AJW:null,Atu:null,AFg:null,Y2:null,Ss:null,Bn:0,AIv:0,Ac2:5000
,Apv:0,AJy:A.wf,AoJ:0,Afp:0,EO:0,AlP:0,AtJ:0,AoI:0,Afo:0,EN:0,AlO:0,AlM:0,NK:A.wf
,A4T:A.wf,FQ:A.wf,Gd:A.wf,Dx:A.wf,Wt:A.wf,A5z:0.5,A9T:true,AFX:true,Zl:false,Xn:
false,Xo:false,Aos:false,AzB:0,J9:function(CV,aClip,aOffset,Cg,aBlend){},GQ:function(
CK){var B;var BN=(C.AdP.isPrototypeOf(CK)?CK:null);var DV=(C.Ap$.isPrototypeOf(CK
)?CK:null);var Ip=(C.Auk.isPrototypeOf(CK)?CK:null);var Aaj;var UW;var AAD;var MU;
var AyZ;Aaj=(!!BN&&BN.Down)&&!BN.Jh;UW=(!!BN&&BN.Down)&&(BN.Jh>0);AAD=(!!BN&&BN.
Down)&&(BN.Jh>this.AzB);MU=!!BN&&!BN.Down;AyZ=!!DV;if(Aaj)this.AzB=((B=(BN.NA?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(Aaj){var Apa=0;var AcZ;this.Bn=this.Bn|(1<<BN.
Iz);for(AcZ=this.Bn&4095;AcZ>0;AcZ=AcZ>>1)if(!!(AcZ&1))Apa=Apa+1;if(Apa===1)this.
Bn=(this.Bn|16777216)|(4096<<BN.Iz);}if(MU&&(this.Bn<16777216)){var It=this.If();
var Jt=null;if(!!It){var A24=(!!this.AH?this.AH:this.Ab);var A0C=(!!It.Ju?It.Ju.
CX:null);Jt=It.X1(A.abh(ZM,BN.LN),BN.Iz,BN.N0,A0C,A24,0x0);}if(!!Jt){var P;for(P=
0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Cf.GQ(A._NewObject(C.AdP,0).InitializeDown(P
,BN.HV,BN.N0,Ca,true,BN.LN));for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Cf.GQ(A._NewObject(
C.AdP,0).InitializeUp(P,BN.HV,BN.HV,0,BN.N0,Ca,false,BN.LN,BN.LN));}}if(MU)this.
Bn=(this.Bn&~(1<<BN.Iz))|33554432;if(AAD&&(this.Bn<16777216))this.Bn=this.Bn|67108864;
if(MU&&BN.NA)this.Bn=this.Bn|67108864;if(MU&&!(this.Bn&16777215))this.Bn=0;if(UW&&(
this.Bn>=67108864)){var It=this.If();if(!!It)It.ATn(null,null,this,0x0);}if((UW&&
!!(this.Bn&16777216))&&!!(this.Bn&33554432)){UW=false;MU=true;}if(!!BN&&!(this.Bn&(
4096<<BN.Iz)))return this;if(!!DV&&!(this.Bn&(4096<<DV.Iz)))return this;if(MU&&!(
this.Bn&16777216))return this;if(((Aaj||AyZ)||UW)&&((this.Bn<16777216)||(this.Bn>=
33554432)))return this;if(MU)this.Bn=this.Bn&3758100479;if(MU&&!(this.Bn&16777215
))this.Bn=0;if(!!Ip&&(Ip.Aw5===this))return null;if((!!Ip&&Ip.Down)&&(this.Aos||
!this.Zl))return null;if((!!Ip&&Ip.Down)&&!A.wa(this.M,this.Ab.A6y(Ip.LN)))return null;
if((!!Ip&&!Ip.Down)&&(!this.Aos||(this.AIv!==Ip.Iz)))return null;if((!BN&&!DV)&&
!Ip)return null;if(!!BN){this.Aos=Aaj||UW;this.AIv=BN.Iz;this.NK=BN.NK;}if(!!DV)
this.AIv=DV.Iz;if(!!Ip){this.Aos=Ip.Down;this.AIv=Ip.Iz;}if(!!Ip&&Ip.Down){this.
A25();this.EN=(((Ip.Bt-this.AlM)*0.001)*this.Afo)+this.EN;this.EO=(((Ip.Bt-this.
AtJ)*0.001)*this.Afp)+this.EO;if(this.Xn)this.EN=0;if(this.Xo)this.EO=0;this.Afo=
0;this.Afp=0;this.Xn=false;this.Xo=false;this.AJy=this.Dx;this.Apv=Ip.Bt;return this;
}if(Aaj){this.A25();this.EN=(((BN.Bt-this.AlM)*0.001)*this.Afo)+this.EN;this.EO=(((
BN.Bt-this.AtJ)*0.001)*this.Afp)+this.EO;if(this.Xn||!this.Zl)this.EN=0;if(this.
Xo||!this.Zl)this.EO=0;this.Afo=0;this.Afp=0;this.Xn=false;this.Xo=false;if(!this.
Zl){this.Zl=true;(B=this.Ss)?B[1].call(B[0],this):null;(B=this.AJW)?B[1].call(B[
0],this):null;}this.AJy=this.Dx;this.Apv=BN.Bt;}if(!!DV){var G3=A.abe(DV.HV,DV.NK
);var Cz=this.Dx;if(this.AFX)Cz=[this.AJy[0]+G3[0],Cz[1]];Cz=[Cz[0],this.AJy[1]+
G3[1]];if(this.A9T){if(Cz[0]<this.Gd[0])Cz=[this.Gd[0]+(((Cz[0]-this.Gd[0])/2)|0
),Cz[1]];else if(Cz[0]>this.FQ[0])Cz=[this.FQ[0]+(((Cz[0]-this.FQ[0])/2)|0),Cz[1
]];if(Cz[1]<this.Gd[1])Cz=[Cz[0],this.Gd[1]+(((Cz[1]-this.Gd[1])/2)|0)];else if(
Cz[1]>this.FQ[1])Cz=[Cz[0],this.FQ[1]+(((Cz[1]-this.FQ[1])/2)|0)];}else{if(Cz[0]<
this.Gd[0])Cz=[this.Gd[0],Cz[1]];else if(Cz[0]>this.FQ[0])Cz=[this.FQ[0],Cz[1]];
if(Cz[1]<this.Gd[1])Cz=[Cz[0],this.Gd[1]];else if(Cz[1]>this.FQ[1])Cz=[Cz[0],this.
FQ[1]];}if(!A.aaX(Cz,this.Dx)){this.A4T=A.abe(Cz,this.Dx);this.Dx=Cz;(B=this.Atu
)?B[1].call(B[0],this):null;(B=this.AFg)?B[1].call(B[0],this):null;}}if((!!Ip&&!
Ip.Down)&&((Ip.Bt-this.Apv)>=200)){this.EN=0;this.EO=0;}if(UW&&((BN.Bt-this.Apv)>=
200)){this.EN=0;this.EO=0;}if(!!DV&&(DV.Bt>this.Apv)){var G3=DV.Dx;var Bch=1000/(
DV.Bt-this.Apv);var Ail=0;var Aim;if(this.AFX)Ail=G3[0]*Bch;Aim=G3[1]*Bch;if((Ail
*this.EN)<0)this.EN=0;if((Aim*this.EO)<0)this.EO=0;this.EN=(this.EN+Ail)*0.5;this.
EO=(this.EO+Aim)*0.5;this.Apv=DV.Bt;}if(!MU&&!Ip)return this;if(!!BN&&BN.NA){this.
EN=0;this.EO=0;}if((this.Dx[0]<=this.Gd[0])||(this.Dx[0]>=this.FQ[0]))this.EN=0;
else if(!this.EN){var EI=this.Dx[0];var E8=this.Gd[0];var Ez=this.FQ[0];if(EI<E8
)Ez=this.Gd[0];else if(EI>Ez)E8=this.FQ[0];else if(this.Wt[0]<=1){E8=EI;Ez=EI;}else{
var Ac6=(Ez-EI)%this.Wt[0];Ez=(EI-this.Wt[0])+Ac6;E8=EI+Ac6;if(Ez<this.Gd[0])Ez=
this.Gd[0];if(E8>this.FQ[0])E8=this.FQ[0];}if((E8-EI)<=(EI-Ez))EI=E8;else EI=Ez;
if(EI!==this.Dx[0]){var Jb=EI-this.Dx[0];if(Jb>0)this.EN=Math.sqrt((Jb*2)*this.Ac2
)+20;if(Jb<0)this.EN=-Math.sqrt((-Jb*2)*this.Ac2)-20;this.Afo=(400-(this.EN*this.
EN))/(2*Jb);this.AoI=EI;}}else{var Bz0=this.EN*this.EN;var Jb=Bz0/(2*this.Ac2);var
EI=this.Dx[0];if(this.EN>0)EI=EI+(Jb|0);if(this.EN<0)EI=EI-(Jb|0);if(EI>this.FQ[
0])EI=this.FQ[0];else if(EI<this.Gd[0])EI=this.Gd[0];var BeM=EI;var E8=this.Gd[0
];var Ez=this.FQ[0];if(EI<E8)Ez=this.Gd[0];else if(EI>Ez)E8=this.FQ[0];else if(this.
Wt[0]<=1){E8=EI;Ez=EI;}else{var Ac6=(Ez-EI)%this.Wt[0];Ez=(EI-this.Wt[0])+Ac6;E8=
EI+Ac6;if(Ez<this.Gd[0])Ez=this.Gd[0];if(E8>this.FQ[0])E8=this.FQ[0];}if(this.EN>
0){if(Ez<=this.Dx[0])EI=E8;else if((EI-Ez)<(E8-EI))EI=Ez;else EI=E8;}else if(E8>=
this.Dx[0])EI=Ez;else if((EI-Ez)>(E8-EI))EI=E8;else EI=Ez;if(EI!==this.Dx[0]){Jb=
EI-this.Dx[0];if(EI!==BeM){var AiJ=EI-BeM;if(AiJ>0)this.EN=this.EN+Math.sqrt((AiJ
*2)*this.Ac2);if(AiJ<0)this.EN=this.EN-Math.sqrt((-AiJ*2)*this.Ac2);}if(this.EN>
0)this.EN=this.EN+20;if(this.EN<0)this.EN=this.EN-20;this.Afo=(400-(this.EN*this.
EN))/(2*Jb);this.AoI=EI;}else this.EN=0;}if((this.Dx[1]<=this.Gd[1])||(this.Dx[1
]>=this.FQ[1]))this.EO=0;else if(!this.EO){var EJ=this.Dx[1];var E8=this.Gd[1];var
Ez=this.FQ[1];if(EJ<E8)Ez=this.Gd[1];else if(EJ>Ez)E8=this.FQ[1];else if(this.Wt[
1]<=1){E8=EJ;Ez=EJ;}else{var Ac6=(Ez-EJ)%this.Wt[1];Ez=(EJ-this.Wt[1])+Ac6;E8=EJ+
Ac6;if(Ez<this.Gd[1])Ez=this.Gd[1];if(E8>this.FQ[1])E8=this.FQ[1];}if((E8-EJ)<=(
EJ-Ez))EJ=E8;else EJ=Ez;if(EJ!==this.Dx[1]){var Jb=EJ-this.Dx[1];if(Jb>0)this.EO=
Math.sqrt((Jb*2)*this.Ac2)+20;if(Jb<0)this.EO=-Math.sqrt((-Jb*2)*this.Ac2)-20;this.
Afp=(400-(this.EO*this.EO))/(2*Jb);this.AoJ=EJ;}}else{var Bz1=this.EO*this.EO;var
Jb=Bz1/(2*this.Ac2);var EJ=this.Dx[1];if(this.EO>0)EJ=EJ+(Jb|0);if(this.EO<0)EJ=
EJ-(Jb|0);if(EJ>this.FQ[1])EJ=this.FQ[1];else if(EJ<this.Gd[1])EJ=this.Gd[1];var
BeN=EJ;var E8=this.Gd[1];var Ez=this.FQ[1];if(EJ<E8)Ez=this.Gd[1];else if(EJ>Ez)
E8=this.FQ[1];else if(this.Wt[1]<=1){E8=EJ;Ez=EJ;}else{var Ac6=(Ez-EJ)%this.Wt[1
];Ez=(EJ-this.Wt[1])+Ac6;E8=EJ+Ac6;if(Ez<this.Gd[1])Ez=this.Gd[1];if(E8>this.FQ[
1])E8=this.FQ[1];}if(this.EO>0){if(Ez<=this.Dx[1])EJ=E8;else if((EJ-Ez)<(E8-EJ))
EJ=Ez;else EJ=E8;}else if(E8>=this.Dx[1])EJ=Ez;else if((EJ-Ez)>(E8-EJ))EJ=E8;else
EJ=Ez;if(EJ!==this.Dx[1]){Jb=EJ-this.Dx[1];if(EJ!==BeN){var AiJ=EJ-BeN;if(AiJ>0)
this.EO=this.EO+Math.sqrt((AiJ*2)*this.Ac2);if(AiJ<0)this.EO=this.EO-Math.sqrt((-
AiJ*2)*this.Ac2);}if(this.EO>0)this.EO=this.EO+20;if(this.EO<0)this.EO=this.EO-20;
this.Afp=(400-(this.EO*this.EO))/(2*Jb);this.AoJ=EJ;}else this.EO=0;}if(!!BN)this.
AlM=BN.Bt;if(!!Ip)this.AlM=Ip.Bt;this.AtJ=this.AlM;this.AlO=this.Dx[0];this.AlP=
this.Dx[1];this.Bz2();return this;},X1:function(C_,BF,N9,ZW,AcI,AcH){var B;if(!!
ZW&&(ZW!==this))return null;if(this.Bn>=33554432)return null;if((this.Bn>=16777216
)&&!(this.Bn&(4096<<BF)))return null;if(!this.AFX&&!!(AcH&0xC))return null;var Ax=
A.lb(C_,this.M);if(!((Ax[0]>=Ax[2])||(Ax[1]>=Ax[3]))){var P8=A.aaI(C_);var Fi=Ca;
if(P8[0]<Ax[0])Fi=[Ax[0]-P8[0],Fi[1]];if(P8[0]>=Ax[2])Fi=[(Ax[2]-P8[0])-1,Fi[1]];
if(P8[1]<Ax[1])Fi=[Fi[0],Ax[1]-P8[1]];if(P8[1]>=Ax[3])Fi=[Fi[0],(Ax[3]-P8[1])-1];
return A._NewObject(C.Aul,0).Initialize(this,Fi);}return null;},A25:function(){if(
!!this.timer){A.z9([this,this.L_],this.timer,0);this.timer=null;}},Bz2:function(
){this.timer=A._GetAutoObject(A.acl.AdT);A.zV([this,this.L_],this.timer,0);},L_:
function(G){var B;if(!this.timer)return;var AtP=(this.timer.Bt-this.AlM)*0.001;var
AtQ=(this.timer.Bt-this.AtJ)*0.001;var BAa=AtP*AtP;var BAb=AtQ*AtQ;var Ail=(this.
Afo*AtP)+this.EN;var Aim=(this.Afp*AtQ)+this.EO;var Cz=[((((this.Afo*0.5)*BAa)+(
this.EN*AtP))+this.AlO)|0,((((this.Afp*0.5)*BAb)+(this.EO*AtQ))+this.AlP)|0];if(
this.Xn&&(AtP>=0.5)){Cz=[this.AoI,Cz[1]];this.EN=0;this.Afo=0;this.AlO=Cz[0];this.
Xn=false;}else if(this.Xn){var LC=1-Math.pow(1-(AtP/0.5),5);Cz=[(this.AlO+((this.
AoI-this.AlO)*LC))|0,Cz[1]];}if(this.Xo&&(AtQ>=0.5)){Cz=[Cz[0],this.AoJ];this.EO=
0;this.Afp=0;this.AlP=Cz[1];this.Xo=false;}else if(this.Xo){var LC=1-Math.pow(1-(
AtQ/0.5),5);Cz=[Cz[0],(this.AlP+((this.AoJ-this.AlP)*LC))|0];}if(((this.EN>0)&&(
Ail<0))||((this.EN<0)&&(Ail>0))){Ail=0;Cz=[this.Dx[0],Cz[1]];}if(((this.EO>0)&&(
Aim<0))||((this.EO<0)&&(Aim>0))){Aim=0;Cz=[Cz[0],this.Dx[1]];}if(!this.Xn&&(Cz[0
]<this.Gd[0])){this.AlO=Cz[0];this.AoI=this.Gd[0];this.AlM=this.timer.Bt;this.Xn=
true;}else if(!this.Xn&&(Cz[0]>this.FQ[0])){this.AlO=Cz[0];this.AoI=this.FQ[0];this.
AlM=this.timer.Bt;this.Xn=true;}if(!this.Xo&&(Cz[1]<this.Gd[1])){this.AlP=Cz[1];
this.AoJ=this.Gd[1];this.AtJ=this.timer.Bt;this.Xo=true;}else if(!this.Xo&&(Cz[1
]>this.FQ[1])){this.AlP=Cz[1];this.AoJ=this.FQ[1];this.AtJ=this.timer.Bt;this.Xo=
true;}if(((!this.Xn&&!!this.EN)&&(Ail>-20))&&(Ail<20)){Cz=[this.AoI,Cz[1]];this.
EN=0;this.Afo=0;this.AlO=Cz[0];}if(((!this.Xo&&!!this.EO)&&(Aim>-20))&&(Aim<20)){
Cz=[Cz[0],this.AoJ];this.EO=0;this.Afp=0;this.AlP=Cz[1];}if(!A.aaX(Cz,this.Dx)){
this.A4T=A.abe(Cz,this.Dx);this.Dx=Cz;(B=this.Atu)?B[1].call(B[0],this):null;(B=
this.AFg)?B[1].call(B[0],this):null;}if(((!this.EN&&!this.EO)&&!this.Xn)&&!this.
Xo){this.A25();this.Zl=false;(B=this.Y2)?B[1].call(B[0],this):null;}},ASB:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.Wt=E;},ASc:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A5z)return;this.A5z=E;if(E<(1e-007))E=1e-007;this.Ac2=
E*10000;},_Init:function(aArg){C.El._Init.call(this,aArg);this.__proto__=C.H2;this.
T=0x10011B;},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJW)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Atu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFg
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y2)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Ss)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ag:null,Li:null,BL:null,DS:null,Apq:
0,Bt:0,A9P:0,Filter:148,CL:0,DJ:0,Bv:true,Down:false,AbY:false,NC:false,Init:function(
aArg){var B;var CX=(C.O.isPrototypeOf(B=this.I)?B:null);if(!CX)throw new Error(Afb
);this.Ag=CX.AJD;CX.AJD=this;},GQ:function(CK){var B;if(!!CK&&CK.BhQ(this.Filter
)){this.Down=CK.Down;this.CL=CK.CL;this.DJ=CK.DJ;this.Bt=CK.Bt;this.NC=false;if(
CK.Down){this.A9P=this.Apq;this.AbY=this.Apq>0;if(this.AbY)(B=this.DS)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NC)this.Apq=this.
Apq+1;return!this.NC;}if(!CK.Down){this.AbY=this.Apq>1;this.A9P=this.Apq-1;this.
Apq=0;(B=this.Li)?B[1].call(B[0],this):null;return!this.NC;}}return false;},_Init:
function(aArg){this.__proto__=C.BK;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Li)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Aul={Cf:null,Auo:0,Dx:A.wf,Initialize:function(Af,aOffset){this.Cf=Af;this.Dx=
aOffset;this.Auo=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Aul;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cf)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A6J={Ag:null,CX:null,_Init:
function(aArg){this.__proto__=C.A6J;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.CX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.AqJ={Nt:null,extent:A.wg,A_:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.AqJ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.ADi={Aiv:A.wf,Aiu:A.wf,_Init:function(aArg
){C.AqJ._Init.call(this,aArg);this.__proto__=C.ADi;},_className:"Core::LayoutLineContext"
};C.ADj={Az_:A.wf,Az9:A.wf,Aiv:A.wf,Aiu:A.wf,_Init:function(aArg){C.AqJ._Init.call(
this,aArg);this.__proto__=C.ADj;},_className:"Core::LayoutQuadContext"};C.AM8={CX:
null,Ag:null,Rl:null,Ru:null,L8:null,Apn:null,_Init:function(aArg){this.__proto__=
C.AM8;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.CX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ru)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L8)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Apn)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AT3={FF:null,B8:null,B7:null,Bco:false,
BwJ:function(){if(!this.FF)return;var O_=this.FF;this.FF.O5=null;this.FF=null;A.
pe([this,this.A2e],this);O_.A7a(this);},Byt:function(G){if(!!this.FF)return;if(!
this.B7)return;this.FF=this.B7;this.B7=this.B7.Ag;if(!!this.B7)this.B7.AH=null;else
this.B8=null;this.FF.Ag=null;this.Bco=true;this.FF.Ss(this);this.Bco=false;},ByQ:
function(G){A.pe([this,this.Byt],this);},ByP:function(G){A.pe([this,this.ByQ],this
);},A2e:function(G){A.pe([this,this.ByP],this);},BfY:function(I9){if(!I9||!I9.O5
)return;if(I9.O5!==this)throw new Error(ZN);var Bff=false;if(this.FF===I9){this.
FF=null;Bff=true;A.pe([this,this.A2e],this);}else{if(!!I9.Ag)I9.Ag.AH=I9.AH;else
this.B8=I9.AH;if(!!I9.AH)I9.AH.Ag=I9.Ag;else this.B7=I9.Ag;I9.AH=null;I9.Ag=null;
}I9.O5=null;if(Bff)I9.A6$(this);},A9W:function(I9,AZ7){if(!I9)return;if(!!I9.O5)
throw new Error(WS);I9.O5=this;if(AZ7){I9.Ag=this.B7;if(!!this.B7)this.B7.AH=I9;
else this.B8=I9;this.B7=I9;}else{I9.AH=this.B8;if(!!this.B8)this.B8.Ag=I9;else this.
B7=I9;this.B8=I9;}if(!this.FF)A.pe([this,this.A2e],this);},_Init:function(aArg){
this.__proto__=C.AT3;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Akz={O5:null,AH:null,Ag:
null,A7a:function(AsS){},A6$:function(AsS){},Ss:function(AsS){this.Ama();},Mg:function(
){if(!!this.O5&&(this.O5.FF===this))this.O5.BwJ();},Ama:function(){if(!!this.O5)
this.O5.BfY(this);},AQi:function(){return!!this.O5&&(this.O5.FF===this);},_Init:
function(aArg){this.__proto__=C.Akz;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O5)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AT1={As:null,AtL:
null,Ss:function(AsS){this.AtL.As=this.As;A.we(this.AtL,0);A.pe([this,this.Byq],
this);},Byq:function(G){this.AtL.As=null;this.AtL=null;this.As=null;this.Mg();},
_Init:function(aArg){C.Akz._Init.call(this,aArg);this.__proto__=C.AT1;},_Mark:function(
D){var B;C.Akz._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AtL)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.Aw4={_Init:function(){C.AT3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahd={resource:null,K8:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahd;this.Init(aArg);A.h7++;},_Done:function(){this.K8();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mt:null,timer:null,Bt:0,Period:1000,Vj:0,Bv:false,K8:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AJ4:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PJ:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bv)this.AJ4(this.Vj,E);},Wf:function(E){if(E<0)E=0;if(E===
this.Vj)return;this.Vj=E;if(this.Bv)this.AJ4(E,this.Period);},Ar:function(E){if(
E===this.Bv)return;this.Bv=E;if(E)this.AJ4(this.Vj,this.Period);else this.AJ4(0,
0);this.Bt=this.AuR();},AuR:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bt=this.AuR();if(!this.
Period)this.Ar(false);(B=this.Mt)?B[1].call(B[0],this):null;},Aw2:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bv)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.K8();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mt)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bt={ATv:0,Avn:0
,AjA:0,GB:0,Ha:0,Year:0,BbX:function(Afl,AZz){if(AZz)switch(Afl){case 1:return A.
aci.BhZ;case 2:return A.aci.BgR;case 3:return A.aci.Big;case 4:return A.aci.BfE;
case 5:return A.aci.Bik;case 6:return A.aci.Bh2;case 7:return A.aci.Bh1;case 8:return A.
aci.BfG;case 9:return A.aci.BmW;case 10:return A.aci.BiE;case 11:return A.aci.BiD;
case 12:return A.aci.Bgj;default:return A.jV;}else switch(Afl){case 1:return A.aci.
ADc;case 2:return A.aci.AB3;case 3:return A.aci.ADo;case 4:return A.aci.AA3;case
5:return A.aci.ADr;case 6:return A.aci.ADe;case 7:return A.aci.ADd;case 8:return A.
aci.AA$;case 9:return A.aci.AFL;case 10:return A.aci.ADE;case 11:return A.aci.ADC;
case 12:return A.aci.ABN;default:return A.jV;}},BbV:function(Bav,AZz){if(AZz)switch(
Bav){case 1:return A.aci.Bip;case 2:return A.aci.Bog;case 3:return A.aci.BoY;case
4:return A.aci.Bn3;case 5:return A.aci.Bg4;case 6:return A.aci.BmP;case 0:return A.
aci.BnQ;default:return A.jV;}else switch(Bav){case 1:return A.aci.Bio;case 2:return A.
aci.Bof;case 3:return A.aci.BoX;case 4:return A.aci.Bn2;case 5:return A.aci.Bg3;
case 6:return A.aci.BmO;case 0:return A.aci.BnP;default:return A.jV;}},BbU:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JI:function(){var d=this.GB;var KX=this.Ha;var Da=this.Year-((
KX<=2)?1:0);var Ay0=(((Da>=0)?Da:Da-399)/400)|0;var AlW=Da-(Ay0*400);var UU=(((((
153*(KX+((KX>2)?-3:9)))+2)/5)|0)+d)-1;var AoF=(((AlW*365)+((AlW/4)|0))-((AlW/100
)|0))+UU;var P_=((Ay0*146097)+AoF)-719468;return(((P_*86400)+(this.AjA*3600))+(this.
Avn*60))+this.ATv;},AE0:function(E){var B;E+=62162035200;if(E<0)E=0;var U8=Math.
trunc(E/86400)|0;var Ay0=(((U8>=0)?U8:U8-146096)/146097)|0;var AoF=U8-(Ay0*146097
);var AlW=((((AoF-((AoF/1460)|0))+((AoF/36524)|0))-((AoF/146096)|0))/365)|0;var Da=
AlW+(Ay0*400);var UU=AoF-(((365*AlW)+((AlW/4)|0))-((AlW/100)|0));var A1E=(((5*UU
)+2)/153)|0;var d=(UU-((((153*A1E)+2)/5)|0))+1;var KX=A1E+((A1E<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Da+((
KX<=2)?1:0);this.Ub(KX);this.Lk(d);this.Ana(BI+((BI<0)?24:0));this.And(P+((P<0)?
60:0));this.Ang(s+((s<0)?60:0));},Y3:function(){if(this.Ha===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Ha===4)||(this.Ha===6))||(this.Ha===9))||(this.Ha===11))return 30;else return 31;
},BjQ:function(){var B;var UU=this.AbB()-1;var As7=(6+this.Avz())%7;var AoH=((371+
As7)-UU)%7;if(this.Ha===12){var d=this.GB;if((d===31)&&(As7<3))return 0;if((d===
30)&&(As7<2))return 0;if((d===29)&&(As7<1))return 0;}if(AoH<=3)UU+=AoH;else UU-=(
7-AoH);if(UU<0){var d=this.GB;var KX=this.Ha;this.Year--;this.Lk(31);this.Ub(12);
UU=this.AbB()-1;As7=(6+this.Avz())%7;AoH=((371+As7)-UU)%7;if(AoH<=3)UU+=AoH;else
UU-=AoH;this.Year++;this.Lk(d);this.Ub(KX);}return(UU/7)|0;},AbB:function(){var B;
var d=this.GB;var KX=this.Ha;var Da=this.Year;var AfI=((!!!(Da%4)&&(!!(Da%100)||
!!!(Da%400)))?1:0);switch(KX){case 2:d+=31;break;case 3:d+=(59+AfI);break;case 4:
d+=(90+AfI);break;case 5:d+=(120+AfI);break;case 6:d+=(151+AfI);break;case 7:d+=(
181+AfI);break;case 8:d+=(212+AfI);break;case 9:d+=(243+AfI);break;case 10:d+=(273+
AfI);break;case 11:d+=(304+AfI);break;case 12:d+=(334+AfI);break;default:;}return d;
},Avz:function(){var B;var d=this.GB;var KX=this.Ha+((this.Ha>2)?-2:10);var Da=this.
Year-((this.Ha<=2)?1:0);var B1=(Da/100)|0;Da%=100;d+=((((((((26*KX)-2)/10)|0)+Da
)+((Da/4)|0))+((B1/4)|0))-(2*B1));if(d>=0)return d%7;else return(7-(-d%7))%7;},Ang:
function(E){if(E<0)E=0;if(E>59)E=59;this.ATv=E;},And:function(E){if(E<0)E=0;if(E>
59)E=59;this.Avn=E;},Ana:function(E){if(E<0)E=0;if(E>23)E=23;this.AjA=E;},Lk:function(
E){if(E<1)E=1;if(E>31)E=31;this.GB=E;},Ub:function(E){if(E<1)E=1;if(E>12)E=12;this.
Ha=E;},Format:function(Im){var result=A.jV;var inx=0;while(!!(Im.charCodeAt(inx)||
0))if((Im.charCodeAt(inx)||0)===0x25){var Aae=1;inx=inx+1;if((Im.charCodeAt(inx)||
0)===0x23){inx=inx+1;Aae=0;}switch(Im.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GB,2*Aae,10);break;case 0x48:result=result+A.abl(this.AjA,2*Aae,10);break;
case 0x49:if(!(this.AjA%12))result=result+ZO;else result=result+A.abl(this.AjA%12
,2*Aae,10);break;case 0x6D:result=result+A.abl(this.Ha,2*Aae,10);break;case 0x4D:
result=result+A.abl(this.Avn,2*Aae,10);break;case 0x70:if(this.AjA<12)result=result+
A.aci.Bfl;else result=result+A.aci.Bmd;break;case 0x53:result=result+A.abl(this.
ATv,2*Aae,10);break;case 0x77:result=result+A.abl(this.Avz(),Aae,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*Aae,10);break;case 0x59:result=result+A.abl(
this.Year,4*Aae,10);break;case 0x25:result=result+ZP;break;case 0x6A:result=result+
A.abl(this.AbB(),3*Aae,10);break;case 0x57:result=result+A.abl(this.BjQ(),2*Aae,
10);break;case 0x61:result=result+this.BbV(this.Avz(),true);break;case 0x41:result=
result+this.BbV(this.Avz(),false);break;case 0x62:result=result+this.BbX(this.Ha
,true);break;case 0x42:result=result+this.BbX(this.Ha,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Im.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(AcJ,Afl,Bu3,Bvh,Bvy,BvR){this.Year=AcJ;this.
Ub(Afl);this.Lk(Bu3);this.Ana(Bvh);this.And(Bvy);this.Ang(BvR);return this;},Initialize:
function(AhL){this.AE0(AhL);return this;},Bgn:function(AhL){if(!AhL)return A._NewObject(
C.AnE,0).Initialize(this.JI());return A._NewObject(C.AnE,0).Initialize(this.JI()-
AhL.JI());},Bnq:function(Ayj){if(!Ayj)return this;return A._NewObject(C.Bt,0).Initialize(
this.JI()-Ayj.JI());},J:function(Ayj){if(!Ayj)return this;return A._NewObject(C.
Bt,0).Initialize(this.JI()+Ayj.JI());},_Init:function(aArg){this.__proto__=C.Bt;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.AnE={AFI:0,ADv:0,ACK:0,J7:0,JI:function(
){return(((this.J7*86400)+(this.ACK*3600))+(this.ADv*60))+this.AFI;},AE0:function(
E){var AKe=1;this.J7=Math.trunc(E/86400)|0;if(E<0){E=-E;AKe=-1;}this.ACK=AKe*(Math.
trunc(E/3600)%24|0);this.ADv=AKe*(Math.trunc(E/60)%60|0);this.AFI=AKe*(E%60|0);}
,Initialize2:function(Bu4,Bvi,Bvz,BvU){this.J7=Bu4;this.ACK=Bvi;this.ADv=Bvz;this.
AFI=BvU;return this;},Initialize:function(AhL){this.AE0(AhL);return this;},_Init:
function(aArg){this.__proto__=C.AnE;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A_j={As:null,O5:null,Trigger:function(BuY,AZ7){var O_=A._NewObject(C.AT1,0);
O_.AtL=this;O_.As=BuY;this.O5.A9W(O_,AZ7);},_Init:function(aArg){this.__proto__=
C.A_j;this.O5=A._GetAutoObject(C.Aw4);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A_k={JD:null,Event:null,ARr:null,Atn:function(G){var B;if(
!this.Event)return;this.JD=this.Event.As;(B=this.ARr)?B[1].call(B[0],this):null;
this.JD=null;},BkA:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.Atn],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.Atn],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A_k;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ARr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BD8={Do:0x1,BAU:0x2,BB2:0x4,BD0:0x8,Bv:0x10,H1:0x20
,BB3:0x40,BCJ:0x80,BBY:0x100,BCn:0x200,BBM:0x400,BDk:0x800,Bg:0x1000,BD5:0x2000,
BC6:0x4000,BC7:0x8000,AaU:0x10000,BC5:0x20000,BDv:0x40000,BBD:0x80000,BDd:0x100000
,BBx:0x200000};C.PC={BDl:0x1,BDm:0x2,BAQ:0x4,BAR:0x8,BAS:0x10,BAP:0x20};C.Agx={None:
0,BDW:1,BBb:2,BCs:3,BDp:4,BDX:5,BDY:6,BBc:7,BBd:8,BCu:9,BCt:10,BDr:11,BDq:12};C.
Auq={None:0,BDU:1,Left:2,BA$:3,Zq:4,A4p:5,BDV:6,Right:7,BBa:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BDn={BEc:0x1,BD$:0x2,BEa:0x4,BEb:
0x8,BCw:0x10,BB5:0x20};
C._Init=function(){C.AjU.__proto__=C.Cf;C.Zb.__proto__=C.Cf;C.El.__proto__=C.Cf;C.
O.__proto__=C.El;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AQz.__proto__=
C.Event;C.Auk.__proto__=C.Event;C.AdP.__proto__=C.Event;C.Ap$.__proto__=C.Event;
C.Z.__proto__=C.El;C.CJ.__proto__=C.O;C.Ds.__proto__=C.O;C.Bj.__proto__=C.Zb;C.H2.
__proto__=C.El;C.ADi.__proto__=C.AqJ;C.ADj.__proto__=C.AqJ;C.AT1.__proto__=C.Akz;
};C._ReInit=function(){var B;if((B=C.Aw4._this))B._ReInit(),C.Aw4._ReInit.call(B
);};C.Dz=function(D){var B;if((B=C.Aw4._this)&&(B._cycle!=D))B._Done(C.Aw4._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */