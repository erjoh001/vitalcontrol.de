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
var Ca=[0,0];var BC=[0,0,0,0];var EW="The view does not belong to this group";var
Hh=[1000,740];var I8="The dialog component is already presented";var IJ="The dialog component is actually not presented";
var OW="No fader to perform the fade-in/out operation";var PW="Trying to use the same fader twice";
var PX="Trying to fade-in/out a group which belongs to another owner";var CL="No view to restack";
var E4="View is not in this group";var Lq="Sibling view does not belong to the group";
var PY="No view to remove";var Ks="No view to add";var N8="View already in a group";
var PZ="Recursive invalidate during active update cycle.";var MB=[-8,-8,9,9];var
ST="No group to end the modal state.";var UC="The group is not modal.";var ZE="No group to obtain the modal state.";
var WG="The group serves already as the \'virtual keyboard\'.";var IK="The group is already modal.";
var UD="View is not in the same group or it is not embedded within the Outline "+
"Box";var ZF="The method SwitchToDialog() is not available in Core::VerticalList.";
var WH="The method DismissDialog() is not available in Core::VerticalList.";var ZG=
"The method PresentDialog() is not available in Core::VerticalList.";var WI="The method FadeGroup() is not available in Core::VerticalList.";
var ZH="The method RestackBehind() is not available in Core::VerticalList.";var ZI=
"The method RestackTop() is not available in Core::VerticalList.";var UE="The method Restack() is not available in Core::VerticalList.";
var WJ="The method Remove() is not available in Core::VerticalList.";var Q9="The method AddBehind() is not available in Core::VerticalList.";
var ZJ="The method Add() is not available in Core::VerticalList.";var OX="The Slide Touch Handler:";
var Q_="is already connected with a view.";var WK="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var WM=[0,0,170,120];var WN="The method SwitchToDialog() is not available in Core::HorizontalList.";
var WO="The method DismissDialog() is not available in Core::HorizontalList.";var
ZK="The method PresentDialog() is not available in Core::HorizontalList.";var WQ=
"The method FadeGroup() is not available in Core::HorizontalList.";var WR="The method RestackBehind() is not available in Core::HorizontalList.";
var SU="The method RestackTop() is not available in Core::HorizontalList.";var ZL=
"The method Restack() is not available in Core::HorizontalList.";var ZM="The method Remove() is not available in Core::HorizontalList.";
var Acq="The method AddBehind() is not available in Core::HorizontalList.";var UF=
"The method Add() is not available in Core::HorizontalList.";var ZN=[0,0,1,1];var
Afe="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var ZO="Trying to cancel a task not belonging to this queue!";var WS="Trying to enqueue a task twice!";
var ZP="12";var ZQ="%";
C.Ce={Ag:null,AH:null,Ab:null,En:null,T:0x103,JN:0,PD:0x14,Atf:function(BF,AhM){}
,Aru:function(E){if(this.JN===E)return;this.JN=E;if(!!this.Ab){var AiL=this.Ag;var
G3=0;while(!!AiL&&(E>AiL.JN)){AiL=AiL.Ag;G3=G3+1;}AiL=this.AH;while(!!AiL&&(E<AiL.
JN)){AiL=AiL.AH;G3=G3-1;}if(!!G3)this.Ab.Kn(this,G3);}},AY:function(E){var B;var
G3=E^this.PD;if(!G3)return;this.PD=E;if(!!this.En&&!((this.T&0x400)===0x400)){this.
Ab.T=this.Ab.T|0x5000;A.pe([B=this.Ab,B.Jz],this);this.Ab.Be([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.En&&((this.T&0x400)===0x400)){this.En.Ns.T=this.En.
Ns.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},If:function(
){var BY=this.Ab;while(!!BY){var It=(C.Root.isPrototypeOf(BY)?BY:null);if(!!It)return It;
BY=BY.Ab;}return null;},J_:function(CU,aClip,aOffset,Cf,aBlend){},GetClipping:function(
){return this.GetExtent();},GQ:function(CJ){return null;},X0:function(C9,BD,N$,ZX
,AcJ,AcI){return null;},At4:function(C9){return C9;},Auc:function(BF,MF){return Ca;
},AmW:function(aOffset,AsP){},GetExtent:function(){return BC;},Ct:function(Re,UJ
){var B;if(((this.T&0x200)===0x200))Re=Re&~0x400;var A1W=(this.T&~UJ)|Re;var Xa=
A1W^this.T;this.T=A1W;if(!!this.Ab&&!!(Xa&0x14)){var Bb$=((this.T&0x14)===0x14);
if(Bb$&&!this.Ab.AR)this.Ab.A9(this);if(!Bb$&&(this.Ab.AR===this))this.Ab.A9(this.
Ab.AB4(this,0x14));}if(!!this.Ab&&!!(Xa&0x403))this.Ab.Be(this.GetClipping());if(((
!!this.En&&!!this.Ab)&&((A1W&0x400)===0x400))&&((Xa&0x1)===0x1)){this.T=this.T|0x800;
this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}if(!!this.Ab&&((Xa&0x400
)===0x400)){this.En=null;this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jz],this);}if(((((Xa&0x100000)===0x100000)&&((UJ&0x100000)===0x100000)
)&&((this.T&0x10)===0x10))&&!((this.T&0x200080)===0x200080))this.Ct(0x0,0x10);if(((((
Xa&0x100000)===0x100000)&&((Re&0x100000)===0x100000))&&!((this.T&0x10)===0x10))&&(
!((this.T&0x200000)===0x200000)||((!((this.T&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
T&0x10)===0x10))))this.Ct(0x10,0x0);if(((((Xa&0x200000)===0x200000)&&((UJ&0x200000
)===0x200000))&&!((this.T&0x10)===0x10))&&((this.T&0x100000)===0x100000))this.Ct(
0x10,0x0);if((((((Xa&0x200000)===0x200000)&&((Re&0x200000)===0x200000))&&((this.
T&0x100010)===0x100010))&&!((this.T&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.T&0x10
)===0x10))||((((this.T&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G4.CW!==this)))
)this.Ct(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ce;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.En)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.AjV={Eu:A.wf,Ek:A.wf
,Atf:function(BF,AhM){var As=A._NewObject(C.ADl,0);this.En=null;As.extent=this.getExtent(
);As.A$=BF;As.Ns=AhM;As.Aiy=this.Ek;As.Aiz=this.Eu;this.En=As;},Auc:function(BF,
MF){var B;var EM=this.PD;var As=(C.ADl.isPrototypeOf(B=this.En)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var JY=[BF[
2]-BF[0],BF[3]-BF[1]];var BU=x2-x1;var BH=y2-y1;var tmp;if(!MF){var Nv=[(B=As.A$
)[2]-B[0],B[3]-B[1]];x1=x1-As.A$[0];y1=y1-As.A$[1];if(Nv[0]!==JY[0]){var HN=((EM&
0x4)===0x4);var HO=((EM&0x8)===0x8);var Qi=((EM&0x1)===0x1);if(!HN&&(Qi||!HO))x1=((
x1*JY[0])/Nv[0])|0;if(!HO&&(Qi||!HN)){x2=x2-As.A$[0];x2=((x2*JY[0])/Nv[0])|0;x2=
x2-JY[0];}else x2=x2-As.A$[2];x1=x1+BF[0];x2=x2+BF[2];if(!Qi){if(HN&&!HO)x2=x1+BU;
else if(!HN&&HO)x1=x2-BU;else{x1=x1+((((x2-x1)-BU)/2)|0);x2=x1+BU;}}}else{x2=x2-
As.A$[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nv[1]!==JY[1]){var HP=((EM&0x10)===0x10);var
HM=((EM&0x20)===0x20);var Qj=((EM&0x2)===0x2);if(!HP&&(Qj||!HM))y1=((y1*JY[1])/Nv[
1])|0;if(!HM&&(Qj||!HP)){y2=y2-As.A$[1];y2=((y2*JY[1])/Nv[1])|0;y2=y2-JY[1];}else
y2=y2-As.A$[3];y1=y1+BF[1];y2=y2+BF[3];if(!Qj){if(HP&&!HM)y2=y1+BH;else if(!HP&&
HM)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=y1+BH;}}}else{y2=y2-As.A$[3];y1=y1+
BF[1];y2=y2+BF[3];}}else{switch(MF){case 3:{x1=BF[0];x2=x1+BU;}break;case 4:{x2=
BF[2];x1=x2-BU;}break;case 1:{y1=BF[1];y2=y1+BH;}break;case 2:{y2=BF[3];y1=y2-BH;
}break;default:;}if((MF===3)||(MF===4)){var HP=((EM&0x10)===0x10);var HM=((EM&0x20
)===0x20);var Qj=((EM&0x2)===0x2);if(Qj){y1=BF[1];y2=BF[3];}else if(HP&&!HM){y1=
BF[1];y2=y1+BH;}else if(HM&&!HP){y2=BF[3];y1=y2-BH;}else{y1=BF[1]+((((BF[3]-BF[1
])-BH)/2)|0);y2=y1+BH;}}if((MF===1)||(MF===2)){var HN=((EM&0x4)===0x4);var HO=((
EM&0x8)===0x8);var Qi=((EM&0x1)===0x1);if(Qi){x1=BF[0];x2=BF[2];}else if(HN&&!HO
){x1=BF[0];x2=x1+BU;}else if(HO&&!HN){x2=BF[2];x1=x2-BU;}else{x1=BF[0]+((((BF[2]-
BF[0])-BU)/2)|0);x2=x1+BU;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BU=x2-x1;BH=y2-y1;if(
As.Aiz[0]<As.Aiy[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.Aiz[1]<As.Aiy[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.T&0x100)===0x100
)){this.Ek=[x1,y1];this.Eu=[x2,y2];}else{this.DY([x1,y1]);this.DM([x2,y2]);this.
En=As;}return[BU,BH];},AmW:function(aOffset,AsP){if(AsP){this.Ek=A.abf(this.Ek,aOffset
);this.Eu=A.abf(this.Eu,aOffset);}else{this.DY(A.abf(this.Ek,aOffset));this.DM(A.
abf(this.Eu,aOffset));}},GetExtent:function(){if(!!this.En&&this.En.isEmpty)return BC;
return this.getExtent();},getExtent:function(){var x1=this.Ek[0];var y1=this.Ek[
1];var x2=this.Eu[0];var y2=this.Eu[1];var BU=x2-x1;var BH=y2-y1;var tmp;if(BU<0
)BU=-BU;if(BH<0)BH=-BH;if(BU>=BH){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BH>=BU){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DM:function(E){var B;if(A.aaX(E,this.
Eu))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.
En=null;this.Eu=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},DY:function(
E){var B;if(A.aaX(E,this.Ek))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(
this.GetClipping());this.En=null;this.Ek=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Be(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jz],this);}},_Init:function(aArg){C.Ce._Init.call(this,aArg);this.__proto__=C.
AjV;},_className:"Core::LineView"};C.Zc={Km:A.wf,Mu:A.wf,Eu:A.wf,Ek:A.wf,Atf:function(
BF,AhM){var As=A._NewObject(C.ADm,0);this.En=null;As.extent=this.GetExtent();As.
A$=BF;As.Ns=AhM;As.Aiy=this.Ek;As.Aiz=this.Eu;As.Az6=this.Mu;As.Az7=this.Km;this.
En=As;},Auc:function(BF,MF){var B;var EM=this.PD;var As=(C.ADm.isPrototypeOf(B=this.
En)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var JY=[BF[2]-BF[0],BF[3]-BF[1]];var BU=x2-x1;var BH=y2-y1;if(!MF){var
Nv=[(B=As.A$)[2]-B[0],B[3]-B[1]];x1=x1-As.A$[0];y1=y1-As.A$[1];if(Nv[0]!==JY[0]){
var HN=((EM&0x4)===0x4);var HO=((EM&0x8)===0x8);var Qi=((EM&0x1)===0x1);if(!HN&&(
Qi||!HO))x1=((x1*JY[0])/Nv[0])|0;if(!HO&&(Qi||!HN)){x2=x2-As.A$[0];x2=((x2*JY[0]
)/Nv[0])|0;x2=x2-JY[0];}else x2=x2-As.A$[2];x1=x1+BF[0];x2=x2+BF[2];if(!Qi){if(HN&&
!HO)x2=x1+BU;else if(!HN&&HO)x1=x2-BU;else{x1=x1+((((x2-x1)-BU)/2)|0);x2=x1+BU;}
}}else{x2=x2-As.A$[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nv[1]!==JY[1]){var HP=((EM&0x10
)===0x10);var HM=((EM&0x20)===0x20);var Qj=((EM&0x2)===0x2);if(!HP&&(Qj||!HM))y1=((
y1*JY[1])/Nv[1])|0;if(!HM&&(Qj||!HP)){y2=y2-As.A$[1];y2=((y2*JY[1])/Nv[1])|0;y2=
y2-JY[1];}else y2=y2-As.A$[3];y1=y1+BF[1];y2=y2+BF[3];if(!Qj){if(HP&&!HM)y2=y1+BH;
else if(!HP&&HM)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=y1+BH;}}}else{y2=y2-
As.A$[3];y1=y1+BF[1];y2=y2+BF[3];}}else{switch(MF){case 3:{x1=BF[0];x2=x1+BU;}break;
case 4:{x2=BF[2];x1=x2-BU;}break;case 1:{y1=BF[1];y2=y1+BH;}break;case 2:{y2=BF[
3];y1=y2-BH;}break;default:;}if((MF===3)||(MF===4)){var HP=((EM&0x10)===0x10);var
HM=((EM&0x20)===0x20);var Qj=((EM&0x2)===0x2);if(Qj){y1=BF[1];y2=BF[3];}else if(
HP&&!HM){y1=BF[1];y2=y1+BH;}else if(HM&&!HP){y2=BF[3];y1=y2-BH;}else{y1=BF[1]+((((
BF[3]-BF[1])-BH)/2)|0);y2=y1+BH;}}if((MF===1)||(MF===2)){var HN=((EM&0x4)===0x4);
var HO=((EM&0x8)===0x8);var Qi=((EM&0x1)===0x1);if(Qi){x1=BF[0];x2=BF[2];}else if(
HN&&!HO){x1=BF[0];x2=x1+BU;}else if(HO&&!HN){x2=BF[2];x1=x2-BU;}else{x1=BF[0]+((((
BF[2]-BF[0])-BU)/2)|0);x2=x1+BU;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BU=(x2-x1)-1;BH=(
y2-y1)-1;var Aib=As.extent[0];var Aid=As.extent[1];var AfE=(As.extent[2]-Aib)-1;
var AfD=(As.extent[3]-Aid)-1;if(!AfE)AfE=1;if(!AfD)AfD=1;if(((this.T&0x100)===0x100
)){this.Ek=[x1+((((As.Aiy[0]-Aib)*BU)/AfE)|0),y1+((((As.Aiy[1]-Aid)*BH)/AfD)|0)];
this.Eu=[x1+((((As.Aiz[0]-Aib)*BU)/AfE)|0),y1+((((As.Aiz[1]-Aid)*BH)/AfD)|0)];this.
Mu=[x1+((((As.Az6[0]-Aib)*BU)/AfE)|0),y1+((((As.Az6[1]-Aid)*BH)/AfD)|0)];this.Km=[
x1+((((As.Az7[0]-Aib)*BU)/AfE)|0),y1+((((As.Az7[1]-Aid)*BH)/AfD)|0)];}else{this.
DY([x1+((((As.Aiy[0]-Aib)*BU)/AfE)|0),y1+((((As.Aiy[1]-Aid)*BH)/AfD)|0)]);this.DM([
x1+((((As.Aiz[0]-Aib)*BU)/AfE)|0),y1+((((As.Aiz[1]-Aid)*BH)/AfD)|0)]);this.Kh([x1+((((
As.Az6[0]-Aib)*BU)/AfE)|0),y1+((((As.Az6[1]-Aid)*BH)/AfD)|0)]);this.Ki([x1+((((As.
Az7[0]-Aib)*BU)/AfE)|0),y1+((((As.Az7[1]-Aid)*BH)/AfD)|0)]);this.En=As;}return[BU+
1,BH+1];},AmW:function(aOffset,AsP){if(AsP){this.Ek=A.abf(this.Ek,aOffset);this.
Eu=A.abf(this.Eu,aOffset);this.Mu=A.abf(this.Mu,aOffset);this.Km=A.abf(this.Km,aOffset
);}else{this.DY(A.abf(this.Ek,aOffset));this.DM(A.abf(this.Eu,aOffset));this.Kh(
A.abf(this.Mu,aOffset));this.Ki(A.abf(this.Km,aOffset));}},GetExtent:function(){
if(!!this.En&&this.En.isEmpty)return BC;var x1=this.Ek[0];var y1=this.Ek[1];var x2=
this.Mu[0];var y2=this.Mu[1];if((((this.Km[0]!==x1)||(this.Eu[1]!==y1))||(this.Eu[
0]!==x2))||(this.Km[1]!==y2)){if(this.Eu[0]<x1)x1=this.Eu[0];if(this.Mu[0]<x1)x1=
this.Mu[0];if(this.Km[0]<x1)x1=this.Km[0];if(this.Eu[1]<y1)y1=this.Eu[1];if(this.
Mu[1]<y1)y1=this.Mu[1];if(this.Km[1]<y1)y1=this.Km[1];if(this.Ek[0]>x2)x2=this.Ek[
0];if(this.Eu[0]>x2)x2=this.Eu[0];if(this.Km[0]>x2)x2=this.Km[0];if(this.Ek[1]>y2
)y2=this.Ek[1];if(this.Eu[1]>y2)y2=this.Eu[1];if(this.Km[1]>y2)y2=this.Km[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},Ki:function(E){var B;if(A.aaX(E,this.Km))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.En=null;this.Km=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},Kh:function(E){var B;if(A.aaX(E,
this.Mu))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping()
);this.En=null;this.Mu=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping(
));if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.
T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},DM:function(
E){var B;if(A.aaX(E,this.Eu))return;if(!!this.Ab&&((this.T&0x1)===0x1))this.Ab.Be(
this.GetClipping());this.En=null;this.Eu=E;if(!!this.Ab&&((this.T&0x1)===0x1))this.
Ab.Be(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400))&&!((this.Ab.T&
0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab
,B.Jz],this);}},DY:function(E){var B;if(A.aaX(E,this.Ek))return;if(!!this.Ab&&((
this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());this.En=null;this.Ek=E;if(!!this.
Ab&&((this.T&0x1)===0x1))this.Ab.Be(this.GetClipping());if((!!this.Ab&&((this.T&
0x400)===0x400))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=
this.Ab.T|0x4000;A.pe([B=this.Ab,B.Jz],this);}},AQt:function(KT){var Hs=A.abi(4,
A.wf,null);var P=0;var H$=3;var A1t=false;var A1u=false;Hs.Set(0,this.Ek);Hs.Set(
1,this.Eu);Hs.Set(2,this.Mu);Hs.Set(3,this.Km);while(P<4){var BfG=Hs.Get(P)[0];var
AKO=Hs.Get(P)[1];var BA5=Hs.Get(H$)[0];var A3G=Hs.Get(H$)[1];if(((AKO>KT[1])!==(
A3G>KT[1]))||((AKO<KT[1])!==(A3G<KT[1]))){var Eg=((((BA5-BfG)*(KT[1]-AKO))/(A3G-
AKO))|0)+BfG;if(KT[0]>Eg)A1t=!A1t;if(KT[0]<Eg)A1u=!A1u;}H$=P;P=P+1;}return A1t||
A1u;},Bh2:function(){return((((this.Ek[0]===this.Km[0])&&(this.Eu[0]===this.Mu[0
]))&&(this.Ek[1]===this.Eu[1]))&&(this.Mu[1]===this.Km[1]))||((((this.Ek[0]===this.
Eu[0])&&(this.Mu[0]===this.Km[0]))&&(this.Ek[1]===this.Km[1]))&&(this.Eu[1]===this.
Mu[1]));},_Init:function(aArg){C.Ce._Init.call(this,aArg);this.__proto__=C.Zc;},
_className:"Core::QuadView"};C.El={M:A.wg,Atf:function(BF,AhM){var As=A._NewObject(
C.AqO,0);As.extent=this.M;As.A$=BF;As.Ns=AhM;this.En=As;},Auc:function(BF,MF){var
B;var EM=this.PD;var As=this.En;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var JY=[BF[2]-BF[0],BF[3]-BF[1]];var BU=x2-x1;var BH=
y2-y1;if(!MF){var Nv=[(B=As.A$)[2]-B[0],B[3]-B[1]];x1=x1-As.A$[0];y1=y1-As.A$[1];
if(Nv[0]!==JY[0]){var HN=((EM&0x4)===0x4);var HO=((EM&0x8)===0x8);var Qi=((EM&0x1
)===0x1);if(!HN&&(Qi||!HO))x1=((x1*JY[0])/Nv[0])|0;if(!HO&&(Qi||!HN)){x2=x2-As.A$[
0];x2=((x2*JY[0])/Nv[0])|0;x2=x2-JY[0];}else x2=x2-As.A$[2];x1=x1+BF[0];x2=x2+BF[
2];if(!Qi){if(HN&&!HO)x2=x1+BU;else if(!HN&&HO)x1=x2-BU;else{x1=x1+((((x2-x1)-BU
)/2)|0);x2=x1+BU;}}}else{x2=x2-As.A$[2];x1=x1+BF[0];x2=x2+BF[2];}if(Nv[1]!==JY[1
]){var HP=((EM&0x10)===0x10);var HM=((EM&0x20)===0x20);var Qj=((EM&0x2)===0x2);if(
!HP&&(Qj||!HM))y1=((y1*JY[1])/Nv[1])|0;if(!HM&&(Qj||!HP)){y2=y2-As.A$[1];y2=((y2
*JY[1])/Nv[1])|0;y2=y2-JY[1];}else y2=y2-As.A$[3];y1=y1+BF[1];y2=y2+BF[3];if(!Qj
){if(HP&&!HM)y2=y1+BH;else if(!HP&&HM)y1=y2-BH;else{y1=y1+((((y2-y1)-BH)/2)|0);y2=
y1+BH;}}}else{y2=y2-As.A$[3];y1=y1+BF[1];y2=y2+BF[3];}}else{switch(MF){case 3:{x1=
BF[0];x2=x1+BU;}break;case 4:{x2=BF[2];x1=x2-BU;}break;case 1:{y1=BF[1];y2=y1+BH;
}break;case 2:{y2=BF[3];y1=y2-BH;}break;default:;}if((MF===3)||(MF===4)){var HP=((
EM&0x10)===0x10);var HM=((EM&0x20)===0x20);var Qj=((EM&0x2)===0x2);if(Qj){y1=BF[
1];y2=BF[3];}else if(HP&&!HM){y1=BF[1];y2=y1+BH;}else if(HM&&!HP){y2=BF[3];y1=y2-
BH;}else{y1=BF[1]+((((BF[3]-BF[1])-BH)/2)|0);y2=y1+BH;}}if((MF===1)||(MF===2)){var
HN=((EM&0x4)===0x4);var HO=((EM&0x8)===0x8);var Qi=((EM&0x1)===0x1);if(Qi){x1=BF[
0];x2=BF[2];}else if(HN&&!HO){x1=BF[0];x2=x1+BU;}else if(HO&&!HN){x2=BF[2];x1=x2-
BU;}else{x1=BF[0]+((((BF[2]-BF[0])-BU)/2)|0);x2=x1+BU;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.T&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.En=As;}return[x2-x1,y2-y1];},AmW:function(aOffset,AsP){if(AsP)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.T&0x1)===
0x1))this.Ab.Be(this.GetClipping());this.En=null;this.M=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Be(this.GetClipping());if((!!this.Ab&&((this.T&0x400)===0x400
))&&!((this.Ab.T&0x2000)===0x2000)){this.T=this.T|0x800;this.Ab.T=this.Ab.T|0x4000;
A.pe([B=this.Ab,B.Jz],this);}},_Init:function(aArg){C.Ce._Init.call(this,aArg);this.
__proto__=C.El;},_className:"Core::RectView"};C.O={B6:null,B7:null,AJN:null,Fp:null
,G4:null,Xb:null,Apr:null,AR:null,GY:255,AyY:0,Ay1:0,Ay0:0,AyZ:0,Init:function(aArg
){this.Am();},J_:function(CU,aClip,aOffset,Cf,aBlend){var B;Cf=((Cf+1)*this.GY)>>
8;aBlend=aBlend&&((this.T&0x2)===0x2);if(!this.Fp||(CU.CW===this))this.Bb1(CU,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cf,aBlend);else{var B2=255|(255<<8)|(255<<16)|((
Cf&0xFF)<<24);this.Fp.Update();CU.A41(aClip,this.Fp,0,A.abh(this.M,aOffset),Ca,B2
,B2,B2,B2,aBlend);}},GetClipping:function(){var B;var Ay=this.M;if(!!this.Fp)return Ay;
Ay=[].concat(Ay[0]-this.AyZ,Ay.slice(1,4));Ay=A.abP(Ay,Ay[1]-this.Ay1);Ay=A.abN(
Ay,Ay[2]+this.Ay0);Ay=[].concat(Ay.slice(0,3),Ay[3]+this.AyY);if(((this.T&0x80000
)===0x80000)){var ApD=BC;var X;for(X=this.B6;!!X;X=X.Ag)if(((X.T&0x1)===0x1))ApD=
A.wC(ApD,X.GetClipping());Ay=A.wC(Ay,A.abh(ApD,this.M.slice(0,2)));}return Ay;},
X0:function(C9,BD,N$,ZX,AcJ,AcI){var B;var X=this.B7;var AoV=null;var AE=BC;var JZ=
null;var A1N=!!this.Xb&&(!!this.Xb.FF||!!this.Xb.B6);if(((B=A.lb(C9,this.M))[0]>=
B[2])||(B[1]>=B[3]))return null;C9=A.abg(C9,this.M.slice(0,2));if(!!AcJ){X=AcJ;while(
!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.T&0x400)===0x400)&&!JZ){JZ=X.AH;while(
!!JZ&&!((JZ.T&0x200)===0x200))JZ=JZ.AH;if(!!JZ)AE=A.lb(C9,JZ.GetExtent());else AE=
BC;}if(JZ===X){JZ=null;AE=BC;}if((!!ZX&&!!(C.O.isPrototypeOf(X)?X:null))||((((((
X.T&0x8)===0x8)&&((X.T&0x10)===0x10))&&!((X.T&0x40000)===0x40000))&&!((X.T&0x20000
)===0x20000))&&(!((X.T&0x10000)===0x10000)||((this.G4.CW===X)&&!A1N)))){var extent=
X.GetExtent();var AJd=ZX;var AoF=null;if(AJd===X)AJd=null;if(((X.T&0x400)===0x400
)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))AoF=X.X0(AE,BD,N$,AJd,AcJ,
AcI);}else if(!(((B=A.lb(extent,C9))[0]>=B[2])||(B[1]>=B[3]))||(ZX===X))AoF=X.X0(
C9,BD,N$,AJd,AcJ,AcI);X=X.AH;if(!!AoF){if(!AoV||((AoF.Auo<AoV.Auo)&&(AoF.Auo>=0)
))AoV=AoF;if(!AoF.Auo)X=null;}}else X=X.AH;AcJ=null;}return AoV;},At4:function(C9
){var B;var F;var X=this.B6;var Lw=BC;var Az0=true;var result=(C9=F=A.abg(C9,this.
M.slice(0,2)),F);while(!!X){if(((X.T&0x200)===0x200)){var Atr=(C.Z.isPrototypeOf(
X)?X:null);Lw=A.lb(C9,Atr.M);Az0=((Atr.T&0x1)===0x1);}if(((X.T&0x1)===0x1)){if(((
X.T&0x400)===0x400)){if(Az0){var AE=A.lb(X.GetClipping(),Lw);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.At4(AE));}}else{var AE=A.lb(X.GetClipping(),
C9);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.At4(AE));}}X=X.Ag;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Ct:function(Re,UJ){var B;
var Ta=this.T;if(((!!this.Ab&&!!!this.Fp)&&((this.T&0x80001)===0x80001))&&((UJ&0x80000
)===0x80000))this.Ab.Be(this.GetClipping());C.El.Ct.call(this,Re,UJ);if((((!!this.
Ab&&!!!this.Fp)&&((this.T&0x1)===0x1))&&((Re&0x80000)===0x80000))&&!((Ta&0x80000
)===0x80000))this.Ab.Be(this.GetClipping());var Xa=this.T^Ta;if(!!this.AR&&((Xa&
0x40)===0x40)){if(((this.T&0x40)===0x40))this.AR.Ct(0x40,0x0);else this.AR.Ct(0x0
,0x40);}if(!!this.G4&&((Xa&0x40)===0x40)){if(((this.T&0x40)===0x40)&&((this.G4.CW.
T&0x14)===0x14))this.G4.CW.Ct(0x40,0x0);else this.G4.CW.Ct(0x0,0x40);}if(((Xa&0x10
)===0x10)){var X;for(X=this.B6;!!X;X=X.Ag)if((((X.T&0x300000)===0x300000)&&!((X.
T&0x80)===0x80))&&(!((X.T&0x10000)===0x10000)||(this.G4.CW===X)))X.Ct(Re&0x10,UJ&
0x10);}if(!!Xa){this.T=this.T|0x8000;A.pe([this,this.AAE],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Alx=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJT=[
E[2]-E[0],E[3]-E[1]];var Apz=!A.aaX(Alx,AJT);if(Apz&&!!this.Fp){this.Fp.Ari(AJT);
A.we(this,0);A.we(this.Fp,0);}C.El.H.call(this,E);if((Apz&&(Alx[0]>0))&&(Alx[1]>
0)){var A$=[].concat(Ca,Alx);var X=this.B6;while(!!X){if((!X.En&&(X.PD!==0x14))&&
!((X.T&0x400)===0x400))X.Atf(A$,null);X=X.Ag;}}if(Apz){this.T=this.T|0x5000;A.pe([
this,this.AAE],this);}},A2S:function(CJ){var BcV=(C.KeyEvent.isPrototypeOf(CJ)?CJ:
null);var DW=this.AJN;if(!BcV)return null;while(!!DW&&(!DW.Bv||!DW.GQ(BcV)))DW=DW.
Ag;return DW;},BAP:function(G){if(!!this.Fp){this.Fp.CW=this;var AE=A.abg(this.At4(
A.abh(this.Fp.QA,this.M.slice(0,2))),this.M.slice(0,2));this.Fp.AuI(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bb1(this.Fp,AE,Ca,255,true);this.Fp.
CW=null;}},Bb1:function(CU,aClip,aOffset,Cf,aBlend){var B;var X=this.B6;var Lw=BC;
var Az0=true;this.Bg0(CU,aClip,aOffset,Cf,aBlend);while(!!X){if(((X.T&0x200)===0x200
)){var Atr=(C.Z.isPrototypeOf(X)?X:null);Az0=((Atr.T&0x1)===0x1);Lw=aClip;if(!((
Atr.T&0x80000)===0x80000))Lw=A.lb(Lw,A.abh(Atr.M,aOffset));}if(((X.T&0x1)===0x1)
){if(((X.T&0x400)===0x400)){if(Az0){var AE=A.lb(A.abh(X.GetClipping(),aOffset),Lw
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.J_(CU,AE,aOffset,Cf,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.J_(CU,AE,aOffset,Cf,aBlend);}}X=X.Ag;}this.Bg3(CU,aClip,aOffset,Cf,aBlend);},BeL:
function(){var B;var A1m=((this.T&0x1000)===0x1000);var Aij=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Z7=false;var Ac3=BC;var KV=BC;var Z8=Ca;var Atb=0;var Atc=0;var
Ata=0;var Qb=0;var X=this.B7;var JZ=null;var Alp=null;while(!!X){if(((X.T&0x800)===
0x800)){Z7=true;X.T=X.T&~0x800;}if(Z7&&((X.T&0x200)===0x200)){Z7=false;if(!!(C.Z.
isPrototypeOf(X)?X:null).AgA)X.T=X.T|0x1000;}X=X.AH;}Z7=false;X=this.B6;if(A1m){
this.T=this.T&~0x1000;A1m=!((Aij[0]>=Aij[2])||(Aij[1]>=Aij[3]));}this.T=this.T|0x2000;
while(!!X){if(!Alp&&(Ata!==Qb)){var Ado=X;var AKe=0;var AAj=Ac3[2]-Ac3[0];var Ayy=
Ac3[3]-Ac3[1];var AI4=0;var ApK=Ca;do if(((Ado.T&0x200)===0x200))Ado=null;else if(((
Ado.T&0x401)===0x401)){ApK=[(B=Ado.GetExtent())[2]-B[0],B[3]-B[1]];if((Qb===3)||(
Qb===4))AAj=AAj-ApK[0];if((Qb===1)||(Qb===2))Ayy=Ayy-ApK[1];if(!Alp||((AAj>=0)&&(
Ayy>=0))){Alp=Ado;Ado=Ado.Ag;if((Qb===3)||(Qb===4)){AAj=AAj-Atb;if(ApK[1]>AKe)AKe=
ApK[1];}if((Qb===1)||(Qb===2)){Ayy=Ayy-Atc;if(ApK[0]>AI4)AI4=ApK[0];}}else Ado=null;
}else Ado=Ado.Ag;while(!!Ado);if(!Alp)Alp=JZ;KV=Ac3;switch(Ata){case 9:case 11:KV=[
].concat(KV.slice(0,3),KV[1]+AKe);break;case 10:case 12:KV=A.abP(KV,KV[3]-AKe);break;
case 5:case 7:KV=A.abN(KV,KV[0]+AI4);break;case 6:case 8:KV=[].concat(KV[2]-AI4,
KV.slice(1,4));break;default:;}}if(((X.T&0x400)===0x400)){if(!!X.En&&(X.En.Ns!==
JZ))X.En=null;if((!X.En&&Z7)&&((X.PD!==0x14)||!!Qb))X.Atf(KV,JZ);}if(!!X.En){if(
A1m&&!((X.T&0x400)===0x400))X.Auc(Aij,0);if(Z7&&((X.T&0x400)===0x400)){var CZ=X.
Auc(A.abh(KV,Z8),Qb);if(((X.T&0x1)===0x1)){var Bo=Ca;switch(Qb){case 3:Bo=[CZ[0]+
Atb,Bo[1]];break;case 4:Bo=[-CZ[0]-Atb,Bo[1]];break;case 1:Bo=[Bo[0],CZ[1]+Atc];
break;case 2:Bo=[Bo[0],-CZ[1]-Atc];break;default:;}Z8=A.abf(Z8,Bo);}}}if(((X.T&0x200
)===0x200)){if(Z7)A.pe(JZ.Ej,JZ);Z7=((X.T&0x1000)===0x1000);JZ=(C.Z.isPrototypeOf(
X)?X:null);if(Z7){X.T=X.T&~0x1000;Ata=JZ.AgA;Qb=Ata;Ac3=A.abh(JZ.M,JZ.Bq);KV=Ac3;
Z8=Ca;Atb=JZ.Space+JZ.AT8;Atc=JZ.Space;Z7=!((Ac3[0]>=Ac3[2])||(Ac3[1]>=Ac3[3]));
Alp=null;switch(Ata){case 9:case 10:Qb=3;break;case 11:case 12:Qb=4;break;case 5:
case 6:Qb=1;break;case 7:case 8:Qb=2;break;default:;}}if(Z7)this.Be(JZ.M);}if(X===
Alp){switch(Ata){case 9:case 11:Z8=[0,(Z8[1]+(KV[3]-KV[1]))+Atc];break;case 10:case
12:Z8=[0,(Z8[1]-(KV[3]-KV[1]))-Atc];break;case 5:case 7:Z8=[(Z8[0]+(KV[2]-KV[0])
)+Atb,0];break;case 6:case 8:Z8=[(Z8[0]-(KV[2]-KV[0]))-Atb,0];break;default:;}Alp=
null;}X=X.Ag;}if(Z7)A.pe(JZ.Ej,JZ);this.T=this.T&~0x2000;this.Bh([Aij[2]-Aij[0],
Aij[3]-Aij[1]]);},Jz:function(G){A.pe([this,this.AAE],this);},AAE:function(G){var
B;var BAX=((this.T&0x1000)===0x1000);if(((this.T&0x4000)===0x4000)){this.T=this.
T&~0x4000;this.BeL();}if(((this.T&0x8000)===0x8000)||BAX){this.T=this.T&~0x8000;
this.Ai(this.T);}},A9:function(E){var B;if(!!E&&(E.Ab!==this))throw new Error(EW
);if(!!E&&!((E.T&0x14)===0x14))E=null;if(!!E&&((E.T&0x10000)===0x10000))E=null;if(
E===this.AR)return;if(!!this.AR)this.AR.Ct(0x0,0x60);this.AR=E;if(!!E){if(((this.
T&0x40)===0x40))E.Ct(0x60,0x0);else E.Ct(0x20,0x0);}},Bag:function(Aq){this.A9(Aq
);},ARG:function(){return!!this.Fp;},Arc:function(E){var B;if(!!this.Fp===E)return;
if(!E){this.Fp.ADM=null;this.Fp.Ari(Ca);this.Fp=null;}if(!!this.Ab&&((this.T&0x1
)===0x1))this.Ab.Be(this.GetClipping());if(E){this.Fp=A._NewObject(A.Graphics.Canvas
,0);this.Fp.Ari([(B=this.M)[2]-B[0],B[3]-B[1]]);this.Fp.ADM=[this,this.BAP];}A.we(
this,0);},A7P:function(){var B;return((this.T&0x100000)===0x100000);},Ar:function(
E){if(E)this.Ct(0x100000,0x0);else this.Ct(0x0,0x100000);},Dl:function(E){var B;
if(E>255)E=255;if(E<0)E=0;if(E===this.GY)return;this.GY=E;if(!!this.Ab&&((this.T&
0x1)===0x1))this.Ab.Be(this.GetClipping());},AZp:function(Aq){this.Dl(Aq);},Aj:function(
E){if(E)this.Ct(0x400,0x0);else this.Ct(0x0,0x400);},Bks:function(E){if(E)this.Ct(
0x2,0x0);else this.Ct(0x0,0x2);},Fd:function(){var B;return((this.T&0x1)===0x1);
},Y:function(E){if(E)this.Ct(0x1,0x0);else this.Ct(0x0,0x1);},ExtendClipping:function(
Aog,Aoh,Aoi,Aof){var B;var Ayp=this.M;var Rj=Ayp;if(Aog<0)Aog=0;if(Aog>255)Aog=255;
if(Aoh<0)Aoh=0;if(Aoh>255)Aoh=255;if(Aoi<0)Aoi=0;if(Aoi>255)Aoi=255;if(Aof<0)Aof=
0;if(Aof>255)Aof=255;Rj=[].concat(Rj[0]-(Math.max(Aog,this.AyZ)&0xFF),Rj.slice(1
,4));Rj=A.abN(Rj,Rj[2]+(Math.max(Aoh,this.Ay0)&0xFF));Rj=A.abP(Rj,Rj[1]-(Math.max(
Aoi,this.Ay1)&0xFF));Rj=[].concat(Rj.slice(0,3),Rj[3]+(Math.max(Aof,this.AyY)&0xFF
));if(Aog!==this.AyZ){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fp)&&!((this.
T&0x80000)===0x80000)){var Ay=Rj;Ay=A.abN(Ay,Ayp[0]);this.Ab.Be(Ay);}this.AyZ=Aog&
0xFF;}if(Aoh!==this.Ay0){if(((!!this.Ab&&((this.T&0x1)===0x1))&&!!!this.Fp)&&!((
this.T&0x80000)===0x80000)){var Ay=Rj;Ay=[].concat(Ayp[2],Ay.slice(1,4));this.Ab.
Be(Ay);}this.Ay0=Aoh&0xFF;}if(Aoi!==this.Ay1){if(((!!this.Ab&&((this.T&0x1)===0x1
))&&!!!this.Fp)&&!((this.T&0x80000)===0x80000)){var Ay=Rj;Ay=[].concat(Ay.slice(
0,3),Ayp[1]);this.Ab.Be(Ay);}this.Ay1=Aoi&0xFF;}if(Aof!==this.AyY){if(((!!this.Ab&&((
this.T&0x1)===0x1))&&!!!this.Fp)&&!((this.T&0x80000)===0x80000)){var Ay=Rj;Ay=A.
abP(Ay,Ayp[3]);this.Ab.Be(Ay);}this.AyY=Aof&0xFF;}},Bg3:function(CU,aClip,aOffset
,Cf,aBlend){},Bg0:function(CU,aClip,aOffset,Cf,aBlend){},GetMaximalSize:function(
){return Hh;},GetMinimalSize:function(){return Ca;},AUd:function(Il,N_,WY,S0,S1,
AhN,O2,Rd,Lv,Lt,Lu){var B;if(!this.G4){this.Ako(Il,N_,WY,S0,S1,null,null,Lv,Lt,Lu
);return;}var Alw=this.G4;var Jv=Alw.Ag;if(((Il.T&0x10000)===0x10000)&&(this.G4.
CW!==Il))throw new Error(I8);var Ac9=A._NewObject(C.ANf,0);var Rl=Alw.Rl;var Ru=
null;var L7=null;if(!!Jv){Ru=Jv.Ru;L7=Jv.L7;}if(!!Jv&&!!Alw.Apq)Ru=Alw.Apq;if(!!
Jv&&!!O2)L7=O2;if(!!AhN)Rl=AhN;if(!N_)N_=A._GetAutoObject(A.acl.Ar4);if(!WY)WY=N_;
if(!S1)S1=S0;if(!S0)S0=S1;Ac9.Rl=WY;Ac9.L7=S0;Ac9.Ru=S1;Ac9.Apq=Rd;Ac9.CW=Il;Ac9.
Ag=this.G4.Ag;this.G4.Ag=null;this.G4=Ac9;if(this.AR===Il)this.A9(null);Alw.CW.Ct(
0x0,0x10040);if(((this.T&0x40)===0x40)&&((Il.T&0x4)===0x4))Il.Ct(0x10040,0x0);else
Il.Ct(0x10000,0x0);if(!!L7){this.NH(Jv.CW,L7.AdP(),null,null,Lu);this.NH(Alw.CW,
Rl.RX(),null,null,true);this.NH(Ac9.CW,N_.RY(),Lv,Lt,true);}else if(!!Ru){this.NH(
Jv.CW,Ru.AdQ(),null,null,Lu);this.NH(Alw.CW,Rl.RX(),null,null,true);this.NH(Ac9.
CW,N_.RY(),Lv,Lt,true);}else if(!!Rl){this.NH(Alw.CW,Rl.RX(),null,null,Lu);this.
NH(Ac9.CW,N_.RY(),Lv,Lt,true);}else this.NH(Ac9.CW,N_.RY(),Lv,Lt,Lu);},Aqa:function(
Il,AhN,O2,Rd,Lv,Lt,Lu){var B;if(!this.G4)return;if(!Il)return;var Kv=this.G4;var
Jv=this.G4.Ag;var Apv=null;while((!!Kv&&(Kv.CW!==Il))&&!!Kv.Ag){Apv=Kv;Kv=Jv;Jv=
Kv.Ag;}if(!Kv||(Kv.CW!==Il))throw new Error(IJ);if(!Apv){this.G4=Jv;Kv.Ag=null;}
else{Apv.Ag=Jv;Kv.Ag=null;}Kv.CW.Ct(0x0,0x10040);if(((((this.T&0x10)===0x10)&&!!
Jv)&&!Apv)&&((Jv.CW.T&0x200000)===0x200000))Jv.CW.Ct(0x10,0x0);if(((((this.T&0x40
)===0x40)&&!!Jv)&&!Apv)&&((Jv.CW.T&0x4)===0x4))Jv.CW.Ct(0x40,0x0);var Rl=Kv.Rl;var
Ru=null;var L7=null;if(!!Jv)Ru=Jv.Ru;if(!!Jv&&!!Kv.Apq)Ru=Kv.Apq;if(!!Jv&&!!Rd)Ru=
Rd;if(!!Apv&&!!Jv)L7=Jv.L7;if((!!Apv&&!!Jv)&&!!O2)L7=O2;if(!!AhN)Rl=AhN;if(!!L7){
this.NH(Jv.CW,L7.AdP(),null,null,Lu);this.NH(Kv.CW,Rl.RX(),Lv,Lt,true);}else if(
!!Ru){this.NH(Jv.CW,Ru.AdQ(),null,null,Lu);this.NH(Kv.CW,Rl.RX(),Lv,Lt,true);}else
this.NH(Kv.CW,Rl.RX(),Lv,Lt,Lu);},Ako:function(Il,N_,WY,S0,S1,O2,Rd,Lv,Lt,Lu){var
B;if(!Il)return;if(!!this.G4&&(this.G4.CW===Il)){this.AUd(Il,N_,WY,S0,S1,null,O2
,Rd,Lv,Lt,Lu);return;}if(((Il.T&0x10000)===0x10000))throw new Error(I8);var Kv=A.
_NewObject(C.ANf,0);if(!!this.G4&&!this.G4.L7){if(!Rd)Rd=O2;if(!O2)O2=Rd;}var L7=
null;if(!!this.G4)L7=this.G4.L7;if(!!this.G4&&!!O2)L7=O2;if(!N_)N_=A._GetAutoObject(
A.acl.Ar4);if(!WY)WY=N_;if(!S1)S1=S0;if(!S0)S0=S1;Kv.Rl=WY;Kv.L7=S0;Kv.Ru=S1;Kv.
Apq=Rd;if(this.AR===Il)this.A9(null);if(!!this.G4&&((this.G4.CW.T&0x200000)===0x200000
))this.G4.CW.Ct(0x0,0x10);if(!!this.G4)this.G4.CW.Ct(0x0,0x40);if(((this.T&0x40)===
0x40)&&((Il.T&0x4)===0x4))Il.Ct(0x10040,0x0);else Il.Ct(0x10000,0x0);Kv.CW=Il;Kv.
Ag=this.G4;this.G4=Kv;if(!!L7){this.NH(this.G4.Ag.CW,L7.AdP(),null,null,Lu);this.
NH(Il,N_.RY(),Lv,Lt,true);}else this.NH(Il,N_.RY(),Lv,Lt,Lu);},A6b:function(Ae){
var B;return(B=Ae)&&((this.T&B)===B);},A6P:function(KT){var tmp=this;while(!!tmp
){KT=A.abe(KT,tmp.M.slice(0,2));tmp=tmp.Ab;}return KT;},BhY:function(KT){var tmp=
this;while(!!tmp){KT=A.abf(KT,tmp.M.slice(0,2));tmp=tmp.Ab;}return KT;},DispatchEvent:
function(CJ){var B;var X=this.AR;var BY=(C.O.isPrototypeOf(X)?X:null);var Gs=null;
var A1N=!!this.Xb&&(!!this.Xb.FF||!!this.Xb.B6);if(!!X&&((((X.T&0x10000)===0x10000
)||((X.T&0x40000)===0x40000))||((X.T&0x20000)===0x20000))){X=null;BY=null;}if(!!
this.G4&&!A1N)Gs=this.G4.CW.DispatchEvent(CJ);if(!Gs&&!!BY)Gs=BY.DispatchEvent(CJ
);else if(!Gs&&!!X)Gs=X.GQ(CJ);if(!Gs)Gs=this.GQ(CJ);if(!Gs)Gs=this.A2S(CJ);return Gs;
},BroadcastEventAtPosition:function(CJ,Hq,aFilter){var B;var X=this.B7;var Gs=null;
while(!!X&&!Gs){if((!aFilter||((B=aFilter)&&((X.T&B)===B)))&&A.wa(X.GetExtent(),
Hq)){var BY=(C.O.isPrototypeOf(X)?X:null);if(!!BY)Gs=BY.BroadcastEventAtPosition(
CJ,A.abe(Hq,BY.M.slice(0,2)),aFilter);else Gs=X.GQ(CJ);}X=X.AH;}if(!Gs)Gs=this.GQ(
CJ);return Gs;},BroadcastEvent:function(CJ,aFilter){var B;var X=this.B7;var Gs=null;
while(!!X&&!Gs){if(!aFilter||((B=aFilter)&&((X.T&B)===B))){var BY=(C.O.isPrototypeOf(
X)?X:null);if(!!BY)Gs=BY.BroadcastEvent(CJ,aFilter);else Gs=X.GQ(CJ);}X=X.AH;}if(
!Gs)Gs=this.GQ(CJ);if(!Gs)Gs=this.A2S(CJ);return Gs;},Bh:function(aSize){},Ai:function(
Ae){},Bid:function(){this.T=this.T|0x4000;A.pe([this,this.AAE],this);},Am:function(
){this.T=this.T|0x8000;A.pe([this,this.AAE],this);},Be:function(C9){var B;var BY=
this;while(!!BY&&!((C9[0]>=C9[2])||(C9[1]>=C9[3]))){var Z4=BY.Fp;if(!BY.Ab&&(BY!==
this)){BY.Be(C9);return;}if(!!Z4){var ByE=Z4.QA;Z4.QA=A.wC(Z4.QA,C9);if(!A.aaY(ByE
,Z4.QA)){A.we(BY,0);A.we(Z4,0);}}if(!((BY.T&0x1)===0x1))return;var Ay=BY.M;C9=A.
abh(C9,Ay.slice(0,2));if(!!BY.Fp||!((BY.T&0x80000)===0x80000)){if(!!!BY.Fp){Ay=[
].concat(Ay[0]-BY.AyZ,Ay.slice(1,4));Ay=A.abP(Ay,Ay[1]-BY.Ay1);Ay=A.abN(Ay,Ay[2]+
BY.Ay0);Ay=[].concat(Ay.slice(0,3),Ay[3]+BY.AyY);}C9=A.lb(C9,Ay);}BY=BY.Ab;}},R5:
function(Af,Gq,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var AfV=A.aaI(Af.
GetExtent());var X=Af;var A0y=null;var BbE=0;var IO=0x10000;var AKa;if(((aFilter&
0x10000)===0x10000))IO=0x0;var top=((Gq===4)||(Gq===1))||(Gq===6);var bottom=((Gq===
5)||(Gq===3))||(Gq===8);var left=((Gq===2)||(Gq===1))||(Gq===3);var right=((Gq===
7)||(Gq===6))||(Gq===8);if(((!top&&!bottom)&&!left)&&!right)return null;while(!!
X){X=X.AH;if(!X)X=this.B7;if(X===Af)X=null;if((!!X&&(!aFilter||((B=aFilter)&&((X.
T&B)===B))))&&(!IO||!((B=IO)&&((X.T&B)===B))))for(AKa=0;AKa<2;AKa++){var Ay=X.GetExtent(
);var s=[Ay[2]-Ay[0],Ay[3]-Ay[1]];if(!!!AKa){if((left&&(s[0]>s[1]))&&(Ay[2]<AfV[
0]))Ay=[].concat(Ay[2]-s[1],Ay.slice(1,4));if((right&&(s[0]>s[1]))&&(Ay[0]>AfV[0
]))Ay=A.abN(Ay,Ay[0]+s[1]);if((top&&(s[1]>s[0]))&&(Ay[3]<AfV[1]))Ay=A.abP(Ay,Ay[
3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Ay[1]>AfV[1]))Ay=[].concat(Ay.slice(0,3),Ay[
1]+s[0]);}var Bo=A.abe(A.aaI(Ay),AfV);var Rg=Bo;if(Rg[0]<0)Rg=[-Rg[0],Rg[1]];if(
Rg[1]<0)Rg=[Rg[0],-Rg[1]];if(((((!left||(Bo[0]<=-Rg[1]))&&(!right||(Bo[0]>=Rg[1]
)))&&(!top||(Bo[1]<=-Rg[0])))&&(!bottom||(Bo[1]>=Rg[0])))&&((Rg[0]>0)||(Rg[1]>0)
)){var Rn=Bo[0];var Ro=Bo[1];var Jb=Math.sqrt((Rn*Rn)+(Ro*Ro));var AJM=0;if(!left&&
!right)AJM=Jb/Rg[1];if(!top&&!bottom)AJM=Jb/Rg[0];Jb=(Jb*AJM)*AJM;if((Jb<BbE)||!
A0y){BbE=Jb;A0y=X;}}}}return A0y;},Aqh:function(Af,aFilter){var B;if(!!Af&&(Af.Ab
!==this))return null;var X=this.B7;var IO=0x10000;if(((aFilter&0x10000)===0x10000
))IO=0x0;if(!!Af)X=Af.AH;while(!!X){if((!aFilter||((B=aFilter)&&((X.T&B)===B)))&&(
!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.AH;}return null;},Vw:function(Af,aFilter
){var B;if(!!Af&&(Af.Ab!==this))return null;var X=this.B6;var IO=0x10000;if(((aFilter&
0x10000)===0x10000))IO=0x0;if(!!Af)X=Af.Ag;while(!!X){if((!aFilter||((B=aFilter)&&((
X.T&B)===B)))&&(!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.Ag;}return null;},AB4:
function(Af,aFilter){var B;if(!Af||(Af.Ab!==this))return null;var Alu=Af.Ag;var AlH=
Af.AH;var IO=0x10000;if(((aFilter&0x10000)===0x10000))IO=0x0;while(!!Alu||!!AlH){
if((!!Alu&&(!aFilter||((B=aFilter)&&((Alu.T&B)===B))))&&(!IO||!((B=IO)&&((Alu.T&
B)===B))))return Alu;if((!!AlH&&(!aFilter||((B=aFilter)&&((AlH.T&B)===B))))&&(!IO||
!((B=IO)&&((AlH.T&B)===B))))return AlH;if(!!Alu)Alu=Alu.Ag;if(!!AlH)AlH=AlH.AH;}
return null;},Db:function(aFilter){var B;var X=this.B6;var AE=BC;var IO=0x10000;
if(((aFilter&0x10000)===0x10000))IO=0x0;while(!!X){if((!((X.T&0x400)===0x400)&&(
!aFilter||((B=aFilter)&&((X.T&B)===B))))&&(!IO||!((B=IO)&&((X.T&B)===B))))AE=A.wC(
AE,X.GetExtent());X=X.Ag;}return AE;},NH:function(Ku,FE,Lv,Lt,Lu){var B;if(!Ku)return;
if(!FE)throw new Error(OW);if((!!FE.O||!!FE.Ab)||!!FE.Pb)throw new Error(PW);if(
!!Ku.Ab&&(Ku.Ab!==this))throw new Error(PX);if(!this.Xb)this.Xb=A._NewObject(C.AUi
,0);FE.Ab=this;FE.O=Ku;FE.AJW=Lt;FE.A2c=Lv;if(!!Ku.Apr)Ku.Apr.Pb.Bm7(Ku.Apr);Ku.
Apr=FE;Ku.T=Ku.T|0x20000;if((Lu&&!!this.Xb.B7)&&!this.Xb.B7.AQq())(A.acl.ABZ.isPrototypeOf(
B=this.Xb.B7)?B:null).A3V(FE);else{var Pb=A._NewObject(A.acl.ABZ,0);Pb.A3V(FE);this.
Xb.A_k(Pb,false);}},Ahh:function(Af,JT){var B;if(!Af)throw new Error(CL);if(Af.Ab
!==this)throw new Error(E4);if(!!JT&&(JT.Ab!==this))throw new Error(Lq);if(Af.Ag===
JT)return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.En)Af.AH.T=Af.AH.T|0x800;Af.
T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.
pe([this,this.Jz],this);}if(!!Af.Ag)Af.Ag.AH=Af.AH;else this.B7=Af.AH;if(!!Af.AH
)Af.AH.Ag=Af.Ag;else this.B6=Af.Ag;var Gr=null;var In=this.B7;var LK=Af.JN;if(!!
JT){Gr=JT;In=JT.AH;}if(!!Gr&&(LK>Gr.JN))LK=Gr.JN;if(!!In&&(LK<In.JN))LK=In.JN;if(
LK!==Af.JN){Af.Ab=null;Af.Aru(LK);Af.Ab=this;}if(!JT){if(!!this.B7)this.B7.Ag=Af;
Af.AH=this.B7;Af.Ag=null;this.B7=Af;}else{Af.Ag=JT;Af.AH=JT.AH;JT.AH=Af;if(!!Af.
AH)Af.AH.Ag=Af;}if(this.B6===JT)this.B6=Af;if(((Af.T&0x1)===0x1))this.Be(Af.GetClipping(
));},Zf:function(Af){var B;if(!Af)throw new Error(CL);if(Af.Ab!==this)throw new Error(
E4);if(!Af.Ag)return;var In=this.B7;var LK=Af.JN;while(!!In&&(In.JN>LK))In=In.AH;
if(((In===Af)||!In)||(In.Ag===Af))return;if(((Af.T&0x401)===0x401)){if(!!Af.AH&&
!!Af.En)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jz],this);}if(((Af.T&0x200)===0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.
T|0x4000;A.pe([this,this.Jz],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;else this.B6=Af.Ag;
Af.Ag.AH=Af.AH;Af.AH=In;Af.Ag=In.Ag;In.Ag=Af;if(!!Af.Ag)Af.Ag.AH=Af;else this.B7=
Af;if(((Af.T&0x1)===0x1))this.Be(Af.GetClipping());},Kn:function(Af,P4){var B;if(
!Af)throw new Error(CL);if(Af.Ab!==this)throw new Error(E4);var In=Af;var Gr=Af;
var LK=Af.JN;while(((P4>0)&&!!In.Ag)&&(In.Ag.JN<=LK)){In=In.Ag;P4=P4-1;}while(((
P4<0)&&!!Gr.AH)&&(Gr.AH.JN>=LK)){Gr=Gr.AH;P4=P4+1;}if((In===Af)&&(Gr===Af))return;
if(((Af.T&0x401)===0x401)){if(!!Af.AH&&!!Af.En)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;
this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((Af.T&0x200)===0x200)){if(!!
Af.AH)Af.AH.T=Af.AH.T|0x800;Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.
Jz],this);}if(!!Af.AH)Af.AH.Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B6===Af)this.
B6=Af.Ag;if(this.B7===Af)this.B7=Af.AH;if(In!==Af){Af.Ag=In.Ag;Af.AH=In;In.Ag=Af;
if(!!Af.Ag)Af.Ag.AH=Af;}if(Gr!==Af){Af.Ag=Gr;Af.AH=Gr.AH;Gr.AH=Af;if(!!Af.AH)Af.
AH.Ag=Af;}if(!Af.Ag)this.B7=Af;if(!Af.AH)this.B6=Af;if(((Af.T&0x1)===0x1))this.Be(
Af.GetClipping());},HI:function(Af){var B;if(!Af)throw new Error(PY);if(Af.Ab!==
this)throw new Error(E4);if((((Af.T&0x401)===0x401)&&!!Af.AH)&&!!Af.En){Af.AH.T=
Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((Af.T&0x200)===
0x200)){if(!!Af.AH)Af.AH.T=Af.AH.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz
],this);}Af.En=null;if(this.AR===Af)this.A9(this.AB4(Af,0x14));if(!!Af.AH)Af.AH.
Ag=Af.Ag;if(!!Af.Ag)Af.Ag.AH=Af.AH;if(this.B6===Af)this.B6=Af.Ag;if(this.B7===Af
)this.B7=Af.AH;Af.Ab=null;Af.Ag=null;Af.AH=null;if((!((Af.T&0x10)===0x10)&&((Af.
T&0x100000)===0x100000))&&!((this.T&0x80)===0x80))Af.Ct(0x10,0x0);if(((Af.T&0x1)===
0x1))this.Be(Af.GetClipping());},ALs:function(Af,JT){var B;if(!Af)throw new Error(
Ks);if(!!Af.Ab)throw new Error(N8);if(!!JT&&(JT.Ab!==this))throw new Error(Lq);var
Gr=null;var In=this.B7;var LK=Af.JN;if(!!JT){Gr=JT;In=JT.AH;}if(!!Gr&&(LK>Gr.JN)
)LK=Gr.JN;if(!!In&&(LK<In.JN))LK=In.JN;if(LK!==Af.JN){Af.Ab=null;Af.Aru(LK);Af.Ab=
this;}if(!JT){if(!!this.B7)this.B7.Ag=Af;Af.AH=this.B7;this.B7=Af;}else{Af.Ag=JT;
Af.AH=JT.AH;JT.AH=Af;if(!!Af.AH)Af.AH.Ag=Af;}Af.Ab=this;if(this.B6===JT)this.B6=
Af;if(((Af.T&0x1)===0x1))this.Be(Af.GetClipping());if(((Af.T&0x80)===0x80)&&(A.aam(
).AOa()===Af))Af.Ct(0x10,0x0);else if(!((this.T&0x10)===0x10)&&((Af.T&0x200010)===
0x200010))Af.Ct(0x0,0x10);else if((((this.T&0x10)===0x10)&&!((Af.T&0x10)===0x10)
)&&((Af.T&0x100000)===0x100000))Af.Ct(0x10,0x0);if(((!this.AR&&((Af.T&0x4)===0x4
))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.A9(Af);if(((Af.T&0x401
)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this);}if(((
Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this,this.Jz],this
);}},J:function(Af,P4){var B;if(!Af)throw new Error(Ks);if(!!Af.Ab)throw new Error(
N8);var Gr=null;var LK=Af.JN;if(((P4<0)&&!!this.B7)&&(this.B7.JN>=LK)){Gr=this.B7;
P4=P4+1;}while((((P4<0)&&!!Gr)&&!!Gr.AH)&&(Gr.AH.JN>=LK)){Gr=Gr.AH;P4=P4+1;}if((
!Gr&&!!this.B7)&&(this.B7.JN>LK))Gr=this.B7;while((!!Gr&&!!Gr.AH)&&(Gr.AH.JN>LK)
)Gr=Gr.AH;if(!Gr){Af.Ab=this;Af.AH=this.B7;if(!!this.B7)this.B7.Ag=Af;if(!this.B6
)this.B6=Af;this.B7=Af;}else{Af.Ab=this;Af.AH=Gr.AH;Af.Ag=Gr;Gr.AH=Af;if(!!Af.AH
)Af.AH.Ag=Af;else this.B6=Af;}if(((Af.T&0x1)===0x1))this.Be(Af.GetClipping());if(((
Af.T&0x80)===0x80)&&(A.aam().AOa()===Af))Af.Ct(0x10,0x0);else if(!((this.T&0x10)===
0x10)&&((Af.T&0x200010)===0x200010))Af.Ct(0x0,0x10);else if((((this.T&0x10)===0x10
)&&!((Af.T&0x10)===0x10))&&((Af.T&0x100000)===0x100000))Af.Ct(0x10,0x0);if(((!this.
AR&&((Af.T&0x4)===0x4))&&((Af.T&0x10)===0x10))&&!((Af.T&0x10000)===0x10000))this.
A9(Af);if(((Af.T&0x401)===0x401)){Af.T=Af.T|0x800;this.T=this.T|0x4000;A.pe([this
,this.Jz],this);}if(((Af.T&0x200)===0x200)){Af.T=Af.T|0x800;this.T=this.T|0x4000;
A.pe([this,this.Jz],this);}},A7R:function(){return this.AR;},AvH:function(){return this.
GY;},_Init:function(aArg){C.El._Init.call(this,aArg);this.__proto__=C.O;this.T=0x10001F;
this.Init(aArg);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.B6)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AJN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fp)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.G4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Xb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Apr)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AR)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Group"
};C.Root={Rr:null,Ju:null,Fg:A.abi(10,null,null),As0:null,Ah5:null,AAG:0,H9:0,L3:
A.abi(10,0,null),AI_:A.abi(10,A.wg,null),W$:A.abi(10,0,null),AfC:A.abi(10,A.wf,null
),As5:A.abi(10,0,null),Ah4:A.abi(10,A.wf,null),W_:A.abi(10,A.wf,null),Rk:A.abi(10
,A.wf,null),AcU:A.abi(10,A.wf,null),EH:0,AJx:0,AJw:0,On:A.abi(4,0,null),J5:A.abi(
4,A.wg,null),J1:0,Azn:0,Ath:0,Ay$:true,Init:function(aArg){if(!!!this.I){var obj=
this;A.abD(obj);}},If:function(){return this;},J_:function(CU,aClip,aOffset,Cf,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(!fullScreenUpdate)CU.AuI(aClip
,A.abh(A.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);C.O.J_.call(this,CU,aClip,aOffset,Cf,aBlend);},Ct:function(Re,
UJ){var B;C.O.Ct.call(this,Re,UJ);if(!this.Ab&&(((Re&0x1)===0x1)||((UJ&0x1)===0x1
)))this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);if(!this.Ab&&(((Re&0x2)===0x2)||((
UJ&0x2)===0x2)))this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},A9:function(E){if((
E!==null)||!E)C.O.A9.call(this,E);},Arc:function(E){var B;var ByC=this.Fp;C.O.Arc.
call(this,E);if(((ByC!==this.Fp)&&!this.Ab)&&((this.T&0x1)===0x1))this.Be([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},Dl:function(E){var B;var BO=this.GY;C.O.Dl.call(
this,E);if(((BO!==this.GY)&&!this.Ab)&&((this.T&0x1)===0x1))this.Be([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(CJ){if(!!CJ){CJ.Avh=!!this.H9;if(
!!this.H9)CJ.Bt=this.H9;}var Gs=null;if(!!this.Ju){Gs=this.Ju.CW.DispatchEvent(CJ
);if(!Gs)Gs=this.GQ(CJ);if(!Gs)Gs=this.A2S(CJ);this.H9=0;return Gs;}Gs=C.O.DispatchEvent.
call(this,CJ);this.H9=0;return Gs;},BroadcastEvent:function(CJ,aFilter){if(!!CJ){
CJ.Avh=!!this.H9;if(!!this.H9)CJ.Bt=this.H9;}var Gs=C.O.BroadcastEvent.call(this
,CJ,aFilter);this.H9=0;return Gs;},Be:function(C9){var B;if(this.AAG>0)throw new
Error(PZ);if(!!this.Fp&&!this.Ab){if(((B=this.Fp.QA)[0]>=B[2])||(B[1]>=B[3])){A.
we(this,0);A.we(this.Fp,0);}this.Fp.QA=A.wC(this.Fp.QA,C9);}var fullScreenUpdate=
false;fullScreenUpdate=A.m7;if(fullScreenUpdate)C9=[0,0,(B=this.M)[2]-B[0],B[3]-
B[1]];if(!!this.Ab){C.O.Be.call(this,C9);return;}C9=A.lb(A.abh(C9,this.M.slice(0
,2)),this.M);if((C9[0]>=C9[2])||(C9[1]>=C9[3]))return;var P;for(P=0;P<this.J1;P=
P+1)if(!(((B=A.lb(this.J5.Get(P),C9))[0]>=B[2])||(B[1]>=B[3]))){this.J5.Set(P,A.
wC(this.J5.Get(P),C9));this.On.Set(P,A.aaH(this.J5.Get(P)));return;}if(this.J1<3
){this.J5.Set(this.J1,C9);this.On.Set(this.J1,A.aaH(C9));this.J1=this.J1+1;return;
}var H$;var Rq;var Azm=0;var Azp=0;var BbD=2147483647;this.J5.Set(this.J1,C9);this.
On.Set(this.J1,A.aaH(C9));for(H$=0;H$<=this.J1;H$=H$+1)for(Rq=H$+1;Rq<=this.J1;Rq=
Rq+1){var AKD=A.aaH(A.wC(this.J5.Get(H$),this.J5.Get(Rq)));var Ben=((AKD<<8)/(this.
On.Get(H$)+this.On.Get(Rq)))|0;if(Ben<BbD){BbD=Ben;Azm=H$;Azp=Rq;}}this.J5.Set(Azm
,A.wC(this.J5.Get(Azm),this.J5.Get(Azp)));this.On.Set(Azm,A.aaH(this.J5.Get(Azm)
));if(Azp!==this.J1){this.J5.Set(Azp,this.J5.Get(this.J1));this.On.Set(Azp,this.
On.Get(this.J1));}},Bxf:function(){var LC=A._NewObject(C.Aqc,0);LC.Avh=!!this.H9;
if(!!this.H9)LC.Bt=this.H9;return LC;},AoD:function(){var LC=A._NewObject(C.AdS,
0);LC.Avh=!!this.H9;if(!!this.H9)LC.Bt=this.H9;return LC;},As4:function(){var LC=
A._NewObject(C.Aul,0);LC.Avh=!!this.H9;if(!!this.H9)LC.Bt=this.H9;return LC;},Bxk:
function(G){var P;var AoV=false;for(P=0;P<10;P=P+1)if(!!this.Fg.Get(P)){var pos=
this.Rk.Get(P);var BY=this.Fg.Get(P).Ab;while(!!BY&&(BY!==this)){pos=A.abe(pos,BY.
M.slice(0,2));BY=BY.Ab;}if(!BY&&(this.Fg.Get(P)!==this)){var tmp=this.Fg.Get(P);
this.EH=P;this.Fg.Set(P,null);tmp.GQ(this.AoD().InitializeUp(P,this.Ah4.Get(P),this.
AfC.Get(P),this.W$.Get(P),this.L3.Get(P)+1,this.W_.Get(P),false,this.Rk.Get(P),this.
AcU.Get(P)));this.BroadcastEvent(this.As4().InitializeUp(P,this.L3.Get(P)+1,false
,tmp,this.Rk.Get(P)),0x18);}else{this.W$.Set(P,(this.Ah5.Bt-this.As5.Get(P))|0);
if(this.W$.Get(P)<10)this.W$.Set(P,10);this.EH=P;this.Fg.Get(P).GQ(this.AoD().InitializeHold(
P,pos,this.AfC.Get(P),this.W$.Get(P),this.L3.Get(P)+1,this.W_.Get(P),this.Rk.Get(
P),this.AcU.Get(P)));AoV=true;}}if(!AoV)this.Ah5.Ar(false);},GetFPS:function(){var
ticksCount=0;var Bce=0;ticksCount=((new Date).getTime()-A.v$)|0;if(!!this.AJx&&(
ticksCount>this.AJx))Bce=((this.AJw*1000)/((ticksCount-this.AJx)|0))|0;this.AJw=
0;this.AJx=ticksCount;return Bce;},Update:function(){var B;if(!this.As0)this.As0=
A._NewObject(A.Graphics.Canvas,0);this.As0.Ari([(B=this.M)[2]-B[0],B[3]-B[1]]);this.
As0.Update();return this.UpdateGE20(this.As0);},UpdateGE20:function(CU){if(!this.
BeginUpdate())return BC;var Af6=this.UpdateCanvas(CU,Ca);this.EndUpdate();return Af6;
},EndUpdate:function(){if(this.J1>0){this.AJw=this.AJw+1;this.J1=0;}},UpdateCanvas:
function(CU,aOffset){var B;var Af6=BC;var BwZ=[].concat(aOffset,A.abf(CU.FrameSize
,aOffset));var P;var H$=this.J1;this.AAG=this.AAG+1;CU.CW=this;for(P=0;(P<H$)&&(
P<4);P=P+1)if(this.On.Get(P)>0){this.J_(CU,A.abg(this.J5.Get(P),aOffset),[-aOffset[
0],-aOffset[1]],255,true);Af6=A.wC(Af6,A.lb(BwZ,this.J5.Get(P)));}else H$=H$+1;CU.
CW=null;this.AAG=this.AAG-1;if(!((Af6[0]>=Af6[2])||(Af6[1]>=Af6[3])))return A.abg(
Af6,aOffset);else return Af6;},GetUpdateRegion:function(AIv){var P;var H$=this.J1;
if(AIv<0)return BC;for(P=0;(P<H$)&&(P<4);P=P+1)if(!this.On.Get(P)){H$=H$+1;AIv=AIv+
1;}else if(P===AIv)return this.J5.Get(P);return BC;},BeginUpdate:function(){var B;
var P;if(!!this.J1&&!A.aaY(this.J5.Get(0),[0,0,(B=this.M)[2]-B[0],B[3]-B[1]])){var
Bfk=A.abi(3,A.wg,null);var Bfj=this.J1;for(P=0;P<Bfj;P++)Bfk.Set(P,this.J5.Get(P
));for(P=0;P<Bfj;P++){var BeG=A.abh(Bfk.Get(P),this.M.slice(0,2));var BeH=this.At4(
BeG);if(!A.aaY(BeG,BeH))this.Be(A.abg(BeH,this.M.slice(0,2)));}}var H$;var Rq;for(
H$=0;H$<(this.J1-1);H$++)if(this.On.Get(H$)>0)for(Rq=H$+1;Rq<this.J1;Rq++)if(this.
On.Get(Rq)>0){var AKD=A.aaH(A.wC(this.J5.Get(H$),this.J5.Get(Rq)));if(((AKD-this.
On.Get(H$))-this.On.Get(Rq))<0){this.J5.Set(H$,A.wC(this.J5.Get(H$),this.J5.Get(
Rq)));this.On.Set(H$,AKD);this.On.Set(Rq,0);}}for(P=this.J1-1;P>=0;P--)if(!this.
On.Get(P))this.J1=this.J1-1;return this.J1;},DoesNeedUpdate:function(){if(this.J1>
0)return true;return false;},Initialize:function(aSize){this.H([].concat(Ca,aSize
));if(this.Ay$)this.T=this.T|0x60;else this.T=this.T|0x20;this.Be(this.M);return this;
},SetRootFocus:function(AZ1){if(AZ1===this.Ay$)return false;this.Ay$=AZ1;if(!AZ1
){if(!!this.Ju)this.Ju.CW.Ct(0x0,0x40);else this.Ct(0x0,0x40);}else if(!!this.Ju
)this.Ju.CW.Ct(0x40,0x0);else this.Ct(0x40,0x0);return true;},SetUserInputTimestamp:
function(P5){this.H9=P5;},DriveKeyboardHitting:function(Kt,Ayc,SY){var B;var A2T=
!!this.Rr;if(!!this.Rr&&((!SY||(this.Azn!==Kt))||(this.Ath!==Ayc))){var LC=null;
var X=(C.Ce.isPrototypeOf(B=this.Rr)?B:null);var DW=(C.BJ.isPrototypeOf(B=this.Rr
)?B:null);if(!!this.Azn)LC=A._NewObject(C.KeyEvent,0).Initialize(this.Azn,false);
if(this.Ath!==0x00)LC=A._NewObject(C.KeyEvent,0).Initialize2(this.Ath,false);if(
!!DW)DW.GQ(LC);else if(!!X)X.GQ(LC);this.Azn=0;this.Ath=0x00;this.Rr=null;}if(!!
this.Rr){var LC=null;var X=(C.Ce.isPrototypeOf(B=this.Rr)?B:null);var DW=(C.BJ.isPrototypeOf(
B=this.Rr)?B:null);if(!!Kt)LC=A._NewObject(C.KeyEvent,0).Initialize(Kt,true);if(
this.Ath!==0x00)LC=A._NewObject(C.KeyEvent,0).Initialize2(Ayc,true);if(!!DW)DW.GQ(
LC);else if(!!X)X.GQ(LC);}if(!this.Rr&&SY){if(!!Kt)this.Rr=this.DispatchEvent(A.
_NewObject(C.KeyEvent,0).Initialize(Kt,true));if(Ayc!==0x00)this.Rr=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(Ayc,true));if(!(C.BJ.isPrototypeOf(B=this.
Rr)?B:null)&&!(C.Ce.isPrototypeOf(B=this.Rr)?B:null))this.Rr=null;this.Azn=Kt;this.
Ath=Ayc;A2T=A2T||!!this.Rr;}this.H9=0;return A2T;},DriveCursorMovement:function(
E6){return this.DriveMultiTouchMovement(this.EH,E6);},DriveMultiTouchMovement:function(
BD,E6){if((BD<0)||(BD>9)){this.H9=0;return false;}var Fi=A.abe(E6,this.Rk.Get(BD
));this.Rk.Set(BD,E6);if(!this.Fg.Get(BD)||A.aaX(Fi,Ca)){this.H9=0;return false;
}var pos=E6;var BY=this.Fg.Get(BD).Ab;while(!!BY&&(BY!==this)){pos=A.abe(pos,BY.
M.slice(0,2));BY=BY.Ab;}if(!BY&&(this.Fg.Get(BD)!==this)){var tmp=this.Fg.Get(BD
);this.EH=BD;this.Fg.Set(BD,null);tmp.GQ(this.AoD().InitializeUp(BD,this.Ah4.Get(
BD),this.AfC.Get(BD),this.W$.Get(BD),this.L3.Get(BD)+1,this.W_.Get(BD),false,this.
Rk.Get(BD),this.AcU.Get(BD)));this.BroadcastEvent(this.As4().InitializeUp(BD,this.
L3.Get(BD)+1,false,tmp,E6),0x18);}else{this.Ah4.Set(BD,pos);this.EH=BD;this.Fg.Get(
BD).GQ(this.Bxf().Initialize(BD,pos,this.AfC.Get(BD),Fi,this.W$.Get(BD),this.L3.
Get(BD)+1,this.W_.Get(BD),E6,this.AcU.Get(BD)));}this.H9=0;return true;},DriveCursorHitting:
function(SY,BD,E6){return this.DriveMultiTouchHitting(SY,BD,E6);},DriveMultiTouchHitting:
function(SY,BD,E6){if((BD<0)||(BD>9)){this.H9=0;return false;}var ticksCount=this.
H9;if(!ticksCount)ticksCount=((new Date).getTime()-A.v$)|0;var Bz9=this.H9;this.
DriveMultiTouchMovement(BD,E6);E6=this.Rk.Get(BD);this.H9=Bz9;if(SY)this.AcU.Set(
BD,E6);if(SY&&!this.Fg.Get(BD)){var Jt;var pos=E6;if(A.wa(this.AI_.Get(BD),E6)&&((
ticksCount-this.As5.Get(BD))<=250))this.L3.Set(BD,this.L3.Get(BD)+1);else this.L3.
Set(BD,0);this.AI_.Set(BD,A.abh(MB,E6));this.As5.Set(BD,ticksCount);if(!!this.Ju
)Jt=this.X0(A.abh(MB,E6),BD,this.L3.Get(BD)+1,this.Ju.CW,null,0x0);else Jt=this.
X0(A.abh(MB,E6),BD,this.L3.Get(BD)+1,null,null,0x0);if(!!Jt){this.BroadcastEvent(
this.As4().InitializeDown(BD,this.L3.Get(BD)+1,false,Jt.Ce,E6),0x18);this.Fg.Set(
BD,Jt.Ce);this.W_.Set(BD,Jt.Dy);}else{this.Fg.Set(BD,null);this.W_.Set(BD,Ca);this.
H9=0;return false;}var BY=Jt.Ce.Ab;while(!!BY&&(BY!==this)){pos=A.abe(pos,BY.M.slice(
0,2));BY=BY.Ab;}this.AfC.Set(BD,pos);this.Ah4.Set(BD,pos);this.W$.Set(BD,0);this.
Ah5.Ar(true);this.EH=BD;this.Fg.Get(BD).GQ(this.AoD().InitializeDown(BD,pos,this.
L3.Get(BD)+1,this.W_.Get(BD),false,E6));this.H9=0;return true;}if(!SY&&!!this.Fg.
Get(BD)){var pos=E6;var BY=this.Fg.Get(BD).Ab;while(!!BY&&(BY!==this)){pos=A.abe(
pos,BY.M.slice(0,2));BY=BY.Ab;}if(!BY)pos=this.Ah4.Get(BD);this.EH=BD;var tmp=this.
Fg.Get(BD);this.Fg.Set(BD,null);tmp.GQ(this.AoD().InitializeUp(BD,pos,this.AfC.Get(
BD),this.W$.Get(BD),this.L3.Get(BD)+1,this.W_.Get(BD),false,E6,this.AcU.Get(BD))
);this.BroadcastEvent(this.As4().InitializeUp(BD,this.L3.Get(BD)+1,false,tmp,E6)
,0x18);this.H9=0;return true;}this.H9=0;return false;},ATE:function(ZZ,Ba2,AcJ,AcI
){if(ZZ===this)ZZ=null;if(!!!ZZ&&!!this.Ju)ZZ=this.Ju.CW;if(!this.Fg.Get(this.EH
))return;var Jt;Jt=this.X0(A.abh(MB,this.Rk.Get(this.EH)),this.EH,1,ZZ,AcJ,AcI);
if(!!Jt&&(this.Fg.Get(this.EH)!==Jt.Ce))this.AM7(Jt.Ce,Jt.Dy);if(!Jt&&(this.Fg.Get(
this.EH)!==Ba2))this.AM7(Ba2,Ca);},AM7:function(ZZ,WZ){if(!this.Fg.Get(this.EH)||(
this.Fg.Get(this.EH)===ZZ))return;var tmp=this.Fg.Get(this.EH);this.Fg.Set(this.
EH,null);tmp.GQ(this.AoD().InitializeUp(this.EH,this.Ah4.Get(this.EH),this.AfC.Get(
this.EH),this.W$.Get(this.EH),this.L3.Get(this.EH)+1,this.W_.Get(this.EH),true,this.
Rk.Get(this.EH),this.AcU.Get(this.EH)));this.BroadcastEvent(this.As4().InitializeUp(
this.EH,this.L3.Get(this.EH)+1,true,tmp,this.Rk.Get(this.EH)),0x18);var pos=this.
Rk.Get(this.EH);var BY=null;if(!!ZZ)BY=ZZ.Ab;while(!!BY&&(BY!==this)){pos=A.abe(
pos,BY.M.slice(0,2));BY=BY.Ab;}if(!BY&&(ZZ!==this)){this.Fg.Set(this.EH,null);return;
}this.BroadcastEvent(this.As4().InitializeDown(this.EH,this.L3.Get(this.EH)+1,true
,ZZ,this.Rk.Get(this.EH)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;this.Fg.Set(this.EH,ZZ);this.W_.Set(this.EH,WZ);this.AfC.Set(this.EH,pos
);this.Ah4.Set(this.EH,pos);this.L3.Set(this.EH,0);this.W$.Set(this.EH,0);this.As5.
Set(this.EH,ticksCount);this.AcU.Set(this.EH,this.Rk.Get(this.EH));this.Fg.Get(this.
EH).GQ(this.AoD().InitializeDown(this.EH,pos,this.L3.Get(this.EH)+1,this.W_.Get(
this.EH),true,this.AcU.Get(this.EH)));},AOa:function(){if(!!this.Ju)return this.
Ju.CW;return null;},ABW:function(Ku){var B;if(!Ku)throw new Error(ST);if(!((Ku.T&
0x80)===0x80))throw new Error(UC);if(this.Ju.CW===Ku)this.Ju=this.Ju.Ag;else{var
Ay_=this.Ju;while(Ay_.Ag.CW!==Ku)Ay_=Ay_.Ag;Ay_.Ag=Ay_.Ag.Ag;}Ku.Ct(0x0,0xD0);if(
this.Ay$){if(!!this.Ju)this.Ju.CW.Ct(0x50,0x0);else this.Ct(0x50,0x0);}},AMe:function(
Ku){var B;var As=A._NewObject(C.A60,0);if(!Ku)throw new Error(ZE);if(Ku===null)throw new
Error(WG);if(((Ku.T&0x80)===0x80))throw new Error(IK);if(!!this.Ju)this.Ju.CW.Ct(
0x0,0x50);else this.Ct(0x0,0x50);As.Ag=this.Ju;As.CW=Ku;this.Ju=As;if(this.Ay$)Ku.
Ct(0xD0,0x0);else Ku.Ct(0x90,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg
);C.Timer._Init.call(this.Ah5={I:this},0);(this.Fg=[]).__proto__=C.Root.Fg;(this.
L3=[]).__proto__=C.Root.L3;(this.AI_=[]).__proto__=C.Root.AI_;(this.W$=[]).__proto__=
C.Root.W$;(this.AfC=[]).__proto__=C.Root.AfC;(this.As5=[]).__proto__=C.Root.As5;(
this.Ah4=[]).__proto__=C.Root.Ah4;(this.W_=[]).__proto__=C.Root.W_;(this.Rk=[]).
__proto__=C.Root.Rk;(this.AcU=[]).__proto__=C.Root.AcU;(this.On=[]).__proto__=C.
Root.On;(this.J5=[]).__proto__=C.Root.J5;this.__proto__=C.Root;this.T=0x10007F;this.
Ah5.PK(10);this.Ah5.Ms=[this,this.Bxk];this.Init(aArg);},_Done:function(){this.__proto__=
C.O;this.Ah5._Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(
this);this.Ah5._ReInit();},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=
this.Rr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ju)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.Fg,D);if((B=this.As0)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ah5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Core::Root"};C.Event={
Bt:0,Avh:false,Init:function(aArg){this.Bt=this.AuR();},AuR:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=C.Event;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Event"
};C.KeyEvent={CK:0,DJ:0,Down:false,Initialize2:function(Kt,SY){this.CK=0;this.DJ=
Kt;this.Down=SY;if((Kt>=0x30)&&(Kt<=0x39))this.CK=(10+Kt)-48;if((Kt>=0x41)&&(Kt<=
0x5A))this.CK=(105+Kt)-65;if((Kt>=0x61)&&(Kt<=0x7A))this.CK=(105+Kt)-97;if(Kt===
0x20)this.CK=131;if(!this.CK)switch(Kt){case 0x2B:this.CK=132;break;case 0x2D:this.
CK=133;break;case 0x2A:this.CK=134;break;case 0x2F:this.CK=135;break;case 0x3D:this.
CK=136;break;case 0x2E:this.CK=137;break;case 0x2C:this.CK=138;break;case 0x3A:this.
CK=139;break;case 0x3B:this.CK=140;break;default:;}return this;},Initialize:function(
Kt,SY){this.CK=Kt;this.Down=SY;this.DJ=0x00;var A0E=Kt-10;var AsZ=Kt-105;if((A0E>=
0)&&(A0E<=9))this.DJ=(48+A0E)&0xFFFF;if((AsZ>=0)&&(AsZ<=25))this.DJ=(65+AsZ)&0xFFFF;
if(Kt===131)this.DJ=0x20;if(this.DJ===0x00)switch(Kt){case 132:this.DJ=0x2B;break;
case 133:this.DJ=0x2D;break;case 134:this.DJ=0x2A;break;case 135:this.DJ=0x2F;break;
case 136:this.DJ=0x3D;break;case 137:this.DJ=0x2E;break;case 138:this.DJ=0x2C;break;
case 139:this.DJ=0x3A;break;case 140:this.DJ=0x3B;break;default:;}return this;},
Bii:function(BaR){switch(BaR){case 141:return((this.DJ>=0x41)&&(this.DJ<=0x5A))||((
this.DJ>=0x61)&&(this.DJ<=0x7A));case 142:return(((this.DJ>=0x41)&&(this.DJ<=0x5A
))||((this.DJ>=0x61)&&(this.DJ<=0x7A)))||((this.DJ>=0x30)&&(this.DJ<=0x39));case
143:return(this.DJ>=0x30)&&(this.DJ<=0x39);case 144:return(((this.DJ>=0x41)&&(this.
DJ<=0x46))||((this.DJ>=0x61)&&(this.DJ<=0x66)))||((this.DJ>=0x30)&&(this.DJ<=0x39
));case 145:return this.DJ!==0x00;case 146:return(this.DJ===0x00)&&!!this.CK;case
147:return(((this.CK===6)||(this.CK===7))||(this.CK===4))||(this.CK===5);case 148:
return(this.DJ!==0x00)||!!this.CK;default:;}return BaR===this.CK;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.AQH={_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AQH;
},_className:"Core::LanguageEvent"};C.Aul={Aw3:null,LO:A.wf,N2:0,Iz:0,Down:false
,Nz:false,InitializeUp:function(BD,N$,Aoe,A0g,ZY){this.Down=false;this.Iz=BD;this.
N2=N$;this.LO=ZY;this.Aw3=A0g;this.Nz=Aoe;return this;},InitializeDown:function(
BD,N$,Aoe,A0g,ZY){this.Down=true;this.Iz=BD;this.N2=N$;this.LO=ZY;this.Aw3=A0g;this.
Nz=Aoe;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Aul;},_Mark:function(D){var B;C.Event._Mark.call(this,D);if((B=this.Aw3)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Core::CursorGrabEvent"};C.AdS={AgC:A.wf,LO:
A.wf,N2:0,Jh:0,NK:A.wf,HV:A.wf,Iz:0,Down:false,Nz:false,InitializeHold:function(
BD,AkU,Aye,Ayf,N$,WZ,ZY,Ayd){this.Down=true;this.Iz=BD;this.HV=A.abf(AkU,WZ);this.
NK=A.abf(Aye,WZ);this.Jh=Ayf;this.N2=N$;this.LO=ZY;this.AgC=Ayd;return this;},InitializeUp:
function(BD,AkU,Aye,Ayf,N$,WZ,Aoe,ZY,Ayd){this.Down=false;this.Iz=BD;this.HV=A.abf(
AkU,WZ);this.NK=A.abf(Aye,WZ);this.Jh=Ayf;this.N2=N$;this.Nz=Aoe;this.LO=ZY;this.
AgC=Ayd;return this;},InitializeDown:function(BD,AkU,N$,WZ,Aoe,ZY){this.Down=true;
this.Iz=BD;this.HV=A.abf(AkU,WZ);this.NK=A.abf(AkU,WZ);this.Jh=0;this.N2=N$;this.
Nz=Aoe;this.LO=ZY;this.AgC=ZY;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.AdS;},_className:"Core::CursorEvent"};C.Aqc={AgC:A.wf
,LO:A.wf,N2:0,Jh:0,Dy:A.wf,NK:A.wf,HV:A.wf,Iz:0,Initialize:function(BD,AkU,Aye,aOffset
,Ayf,Bwk,WZ,ZY,Ayd){this.Iz=BD;this.HV=A.abf(AkU,WZ);this.NK=A.abf(Aye,WZ);this.
Dy=aOffset;this.Jh=Ayf;this.N2=Bwk;this.LO=ZY;this.AgC=Ayd;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Aqc;},_className:"Core::DragEvent"
};C.Z={BT:null,Nq:null,Ej:null,Bq:A.wf,AT8:0,Space:0,AgA:0,J_:function(CU,aClip,
aOffset,Cf,aBlend){},GetClipping:function(){var B;var Ay=C.El.GetClipping.call(this
);if(((this.T&0x80000)===0x80000)){var ApD=BC;var X;for(X=this.Ag;!!X&&!((X.T&0x200
)===0x200);X=X.Ag)if(((X.T&0x1)===0x1))ApD=A.wC(ApD,X.GetClipping());Ay=A.wC(Ay,
ApD);}return Ay;},Ct:function(Re,UJ){var B;var Ta=this.T;if((!!this.Ab&&((this.T&
0x80001)===0x80001))&&((UJ&0x80000)===0x80000))this.Ab.Be(this.GetClipping());C.
El.Ct.call(this,Re,UJ);if(((!!this.Ab&&((this.T&0x1)===0x1))&&((Re&0x80000)===0x80000
))&&!((Ta&0x80000)===0x80000))this.Ab.Be(this.GetClipping());},H:function(E){var
B;if(A.aaY(E,this.M))return;var Alx=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJT=[E[2]-
E[0],E[3]-E[1]];var Apz=!A.aaX(Alx,AJT);var Fi=A.abe(E.slice(0,2),this.M.slice(0
,2));if(!A.aaX(Fi,Ca)&&!Apz){var X=this.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var tmp=((X.T&0x100)===0x100);X.AmW(Fi,tmp);}X=X.Ag;}A.pe(this.
Ej,this);}if((Apz&&(Alx[0]>0))&&(Alx[1]>0)){var A$=A.abh(this.M,this.Bq);var X=this.
Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){if(!!X.En&&(X.En.
Ns!==this))X.En=null;if(!X.En&&((X.PD!==0x14)||!!this.AgA))X.Atf(A$,this);}X=X.Ag;
}A.pe(this.Ej,this);}C.El.H.call(this,E);if(!!this.Ab&&Apz){this.T=this.T|0x1000;
if(!((this.Ab.T&0x2000)===0x2000)){this.Ab.T=this.Ab.T|0x4000;A.pe([B=this.Ab,B.
Jz],this);}}},BeB:function(){var B;if((!this.AgA||!!!this.Ab)||!((this.Ab.T&0x4000
)===0x4000))return;var X=this.Ag;var A0Y=((this.T&0x1000)===0x1000);for(;!!X&&!A0Y;
X=X.Ag){if(((X.T&0x400)===0x400)&&((X.T&0x800)===0x800))A0Y=true;if(((X.T&0x200)===
0x200))break;}if(A0Y){this.T=this.T&~0x4000;this.Ab.BeL();}},Apj:function(G){var
B;this.BT.Q=null;this.BT.Qh=null;this.BT=null;(B=this.Nq)?B[1].call(B[0],this):null;
},Gh:function(E){var B;var Fi=A.abe(E,this.Bq);if(A.aaX(Fi,Ca))return;this.Bq=E;
var X=this.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var tmp=((
X.T&0x100)===0x100);X.AmW(Fi,tmp);}X=X.Ag;}if(!!this.Ab)this.Ab.Be(this.M);A.pe(
this.Ej,this);},A9F:function(E){var B;if(E<0)E=0;if(E===this.AT8)return;this.AT8=
E;if(!!this.Ab&&!!this.AgA){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([
B=this.Ab,B.Jz],this);}},Bmh:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgA){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|
0x4000;A.pe([B=this.Ab,B.Jz],this);}},Kf:function(E){var B;if(E===this.AgA)return;
this.AgA=E;if(!!this.Ab){this.T=this.T|0x1000;this.Ab.T=this.Ab.T|0x4000;A.pe([B=
this.Ab,B.Jz],this);}},Vb:function(AcD,EX){var AsZ=this.Db(0x1);var Ri=this.M;var
UY=A.abe(AsZ.slice(0,2),Ri.slice(0,2));var L5=A.abe(AsZ.slice(2,4),Ri.slice(2,4)
);var Bo=Ca;if((UY[0]>0)&&(L5[0]>UY[0]))Bo=[UY[0],Bo[1]];else if((UY[0]>0)&&(L5[
0]>0))Bo=[L5[0],Bo[1]];if((L5[0]<0)&&(UY[0]<L5[0]))Bo=[L5[0],Bo[1]];else if((L5[
0]<0)&&(UY[0]<0))Bo=[UY[0],Bo[1]];if((UY[1]>0)&&(L5[1]>UY[1]))Bo=[Bo[0],UY[1]];else
if((UY[1]>0)&&(L5[1]>0))Bo=[Bo[0],L5[1]];if((L5[1]<0)&&(UY[1]<L5[1]))Bo=[Bo[0],L5[
1]];else if((L5[1]<0)&&(UY[1]<0))Bo=[Bo[0],UY[1]];if(A.aaX(Bo,Ca)){(EX)?EX[1].call(
EX[0],this):null;return;}if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;this.BT.
Qh=null;this.Nq=null;}this.BT=AcD;if(!this.BT){this.Gh(A.abe(this.Bq,Bo));(EX)?EX[
1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this,this.
Am7,this.Gh];this.BT.Cr=this.Bq;this.BT.B1=A.abe(this.Bq,Bo);this.BT.Qh=[this,this.
Apj];this.BT.AeK(false);this.BT.Ar(true);this.Nq=EX;}},Hy:function(Af,AcG,AcD,EX
){var B;if(!Af)return;if((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400))throw new Error(
UD);this.BeB();var Ay=Af.GetExtent();var A$=this.M;var LI=A.lb(Ay,A$);if((!AcG&&
!((LI[0]>=LI[2])||(LI[1]>=LI[3])))||(AcG&&A.aaY(LI,Ay))){(EX)?EX[1].call(EX[0],this
):null;return;}var Bo=Ca;if(Ay[2]>A$[2])Bo=[Ay[2]-A$[2],Bo[1]];if(Ay[3]>A$[3])Bo=[
Bo[0],Ay[3]-A$[3]];if(Bo[0]>(Ay[0]-A$[0]))Bo=[Ay[0]-A$[0],Bo[1]];if(Bo[1]>(Ay[1]-
A$[1]))Bo=[Bo[0],Ay[1]-A$[1]];if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;this.
BT.Qh=null;this.Nq=null;}this.BT=AcD;if(!this.BT){this.Gh(A.abe(this.Bq,Bo));(EX
)?EX[1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this
,this.Am7,this.Gh];this.BT.Cr=this.Bq;this.BT.B1=A.abe(this.Bq,Bo);this.BT.Qh=[this
,this.Apj];this.BT.AeK(false);this.BT.Ar(true);this.Nq=EX;}},BhK:function(Af){var
B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400)))return-1;var CA=-1;while(
!!Af&&!((Af.T&0x200)===0x200)){if(((Af.T&0x400)===0x400))CA=CA+1;Af=Af.AH;}return CA;
},Vw:function(Af,aFilter){var B;if(!!Af&&((Af.Ab!==this.Ab)||!((Af.T&0x400)===0x400
)))return null;var X=this.Ag;var IO=0x10000;if(((aFilter&0x10000)===0x10000))IO=
0x0;if(!!Af)X=Af.Ag;aFilter=aFilter|0x400;while(!!X&&!((X.T&0x200)===0x200)){if(((
B=aFilter)&&((X.T&B)===B))&&(!IO||!((B=IO)&&((X.T&B)===B))))return X;X=X.Ag;}return null;
},Db:function(aFilter){var B;var X=this.Ag;var AE=BC;var IO=0x10000;this.BeB();if(((
aFilter&0x10000)===0x10000))IO=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.T&0x200
)===0x200)){if(((B=aFilter)&&((X.T&B)===B))&&(!IO||!((B=IO)&&((X.T&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ag;}return AE;},Am7:function(){return this.Bq;},_Init:
function(aArg){C.El._Init.call(this,aArg);this.__proto__=C.Z;this.T=0x203;},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.BT)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CI={
Hr:null,BT:null,Ce:null,Wq:null,Nq:null,Ej:null,Hc:null,S9:-1,S8:0,Je:-1,Hi:0,Aim:
8,Og:0,Uh:0,Acn:A.wf,GT:-1,Bq:0,Gi:-1,OL:0,GW:24,AV:0,Lf:null,NG:false,Ati:false
,AUd:function(Il,N_,WY,S0,S1,AhN,O2,Rd,Lv,Lt,Lu){throw new Error(ZF);},Aqa:function(
Il,AhN,O2,Rd,Lv,Lt,Lu){throw new Error(WH);},Ako:function(Il,N_,WY,S0,S1,O2,Rd,Lv
,Lt,Lu){throw new Error(ZG);},DispatchEvent:function(CJ){var B;var result=null;if(((
this.Gi>=0)&&(this.Gi<this.AV))&&!this.AR){this.GT=this.Gi;this.Ce=(C.Ce.isPrototypeOf(
B=A._NewObject(this.Lf,0))?B:null);if(!!this.B7)this.B7.Ag=this.Ce;else this.B6=
this.Ce;this.Ce.AH=this.B7;this.B7=this.Ce;this.Ce.Ab=this;this.Acn=[(B=this.M)[
2]-B[0],this.GW];(B=this.Hc)?B[1].call(B[0],this):null;var BY=(C.O.isPrototypeOf(
B=this.Ce)?B:null);if(!!BY)result=BY.DispatchEvent(CJ);else result=this.Ce.GQ(CJ
);if(!!this.Ce.AH)this.Ce.AH.Ag=null;else this.B6=null;this.B7=this.Ce.AH;this.Ce.
AH=null;this.Ce.Ab=null;this.Ce=null;}if(!result)result=C.O.DispatchEvent.call(this
,CJ);return result;},Ai:function(Ae){var B;if(!this.Lf){A.pe(this.Ej,this);return;
}this.Ati=true;var Az3=0;if(!this.NG)Az3=this.OL;var FH=this.AlG(-Az3-this.Bq,1);
var GM=this.AlG(((((B=this.M)[3]-B[1])-Az3)-this.Bq)-1,2);var CA=GM-FH;if(CA<1)CA=
1;var AhZ=(CA/2)|0;var Ah0=(CA/3)|0;if(!AhZ)AhZ=1;if(!Ah0)Ah0=1;if(FH<this.Hi){FH=
FH-AhZ;GM=GM+Ah0;}else if(GM>this.Je){FH=FH-Ah0;GM=GM+AhZ;}else{FH=this.Hi;GM=this.
Je;}if(!this.NG){if(FH>=this.AV){FH=0;GM=-1;}else if(GM<0){FH=0;GM=-1;}if(GM>=this.
AV)GM=this.AV-1;if(FH<0)FH=0;}else if(this.AV<=0){FH=0;GM=-1;}var AiF=this.Hi;var
AiG=this.Je;var Ao8=0;var Ao9=-1;if(FH>AiF)AiF=FH;if(GM<AiG)AiG=GM;if(AiF<=AiG){
while((this.Je<GM)&&(this.Hi<AiF)){this.Adi();this.AyD();}while((this.Hi>FH)&&(this.
Je>AiG)){this.AAf();this.AyC();}}else{this.Je=(this.Je-this.Hi)+FH;this.Hi=FH;Ao8=
this.Hi;Ao9=this.Je;}while(this.Hi<FH)this.Adi();while(this.Je>GM)this.AAf();while(
this.Hi>FH)this.AyC();while(this.Je<GM)this.AyD();var Aa=this.B6;var inx=this.Hi;
var pos=[0,(Az3+this.Bq)+this.Jc(inx,0)];var BH=(B=this.M)[3]-B[1];var Alf=null;
var Bfs=(B=this.M)[2]-B[0];while(!!Aa){var Iq=inx;if(this.NG){if(Iq<0)Iq=this.AV-(-
Iq%this.AV);if(Iq>0)Iq=Iq%this.AV;}var Adj=((Iq>=this.S8)&&(Iq<=this.S9))||((inx>=
Ao8)&&(inx<=Ao9));var AoP=Aa.GetExtent();var Bo=A.abe(pos,AoP.slice(0,2));if(Adj
)this.Uh=this.GW;else this.Uh=AoP[3]-AoP[1];var A1C=pos[1];var A1D=pos[1]+this.Uh;
if(!A.aaX(Bo,Ca))Aa.AmW(Bo,true);if((Adj&&(A1C<BH))&&(A1D>0)){this.Ce=Aa;this.GT=
Iq;this.Acn=[Bfs,this.Uh];(B=this.Hc)?B[1].call(B[0],this):null;}Aa=Aa.Ag;inx+=1;
pos=[pos[0],pos[1]+this.Uh];}inx=this.Hi;Aa=this.B6;pos=[0,(Az3+this.Bq)+this.Jc(
inx,0)];while(!!Aa){var Iq=inx;if(this.NG){if(Iq<0)Iq=this.AV-(-Iq%this.AV);if(Iq>
0)Iq=Iq%this.AV;}var Adj=((Iq>=this.S8)&&(Iq<=this.S9))||((inx>=Ao8)&&(inx<=Ao9)
);if(Adj)this.Uh=this.GW;else this.Uh=(B=Aa.GetExtent())[3]-B[1];var A1C=pos[1];
var A1D=pos[1]+this.Uh;if(Adj&&!((A1C<BH)&&(A1D>0))){this.Ce=Aa;this.GT=Iq;this.
Acn=[Bfs,this.Uh];(B=this.Hc)?B[1].call(B[0],this):null;}if(((Iq===this.Gi)&&this.
NG)&&!!Alf){var Ri=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Ri))>A.aaH(A.lb(Alf.GetExtent(),Ri)))Alf=Aa;}else if(Iq===this.Gi)Alf=Aa;Aa=Aa.
Ag;inx+=1;pos=[pos[0],pos[1]+this.Uh];}this.S8=0;this.S9=-1;this.Ce=null;this.GT=-
1;this.A9(Alf);this.Ati=false;A.pe(this.Ej,this);},R5:function(Af,Gq,aFilter){return null;
},Aqh:function(Af,aFilter){return null;},Vw:function(Af,aFilter){return null;},AB4:
function(Af,aFilter){return null;},Db:function(aFilter){return BC;},NH:function(
Ku,FE,Lv,Lt,Lu){throw new Error(WI);},Ahh:function(Af,JT){throw new Error(ZH);},
Zf:function(Af){throw new Error(ZI);},Kn:function(Af,P4){throw new Error(UE);},HI:
function(Af){throw new Error(WJ);},ALs:function(Af,JT){throw new Error(Q9);},J:function(
Af,P4){throw new Error(ZJ);},Jc:function(G1,AZR){return G1*this.GW;},AlG:function(
E6,AZR){return(E6/this.GW)|0;},AAf:function(){var Aa=this.B7;if(!Aa)return null;
if(Aa===this.AR)this.A9(null);this.Je=this.Je-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B6=null;this.B7=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.En=null;if(this.Og<this.Aim){if(!
!this.Hr)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Og++;}return Aa;},AyD:function(
){var B;var Aa=this.Hr;var Ac6=this.Lf;var Adn=++this.Je;if(this.NG){if(Adn<0)Adn=
this.AV-(-Adn%this.AV);if(Adn>0)Adn=Adn%this.AV;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ac6))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Hr===Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Og--;}else{Aa=(C.Ce.
isPrototypeOf(B=A._NewObject(Ac6,0))?B:null);Aa.AY(0x1D);if(!!this.Og)this.Aim++;
}this.Uh=this.GW;this.GT=Adn;this.Acn=[(B=this.M)[2]-B[0],this.Uh];this.Ce=Aa;(B=
this.Hc)?B[1].call(B[0],this):null;this.Ce=null;this.GT=-1;if(!!this.B7)this.B7.
Ag=Aa;Aa.Ab=this;Aa.AH=this.B7;this.B7=Aa;if(!this.B6)this.B6=Aa;if(Adn===this.Gi
)this.A9(Aa);return Aa;},Adi:function(){var Aa=this.B6;if(!Aa)return null;if(Aa===
this.AR)this.A9(null);this.Hi=this.Hi+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B7=null;
this.B6=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.En=null;if(this.Og<this.Aim){if(!!this.Hr
)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Og++;}return Aa;},AyC:function(){var
B;var Aa=this.Hr;var Ac6=this.Lf;var MV=--this.Hi;if(this.NG){if(MV<0)MV=this.AV-(-
MV%this.AV);if(MV>0)MV=MV%this.AV;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Ac6)
)Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.Ag;if(this.Hr===
Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Og--;}else{Aa=(C.Ce.isPrototypeOf(B=
A._NewObject(Ac6,0))?B:null);Aa.AY(0x1D);if(!!this.Og)this.Aim++;}this.Uh=this.GW;
this.GT=MV;this.Acn=[(B=this.M)[2]-B[0],this.Uh];this.Ce=Aa;(B=this.Hc)?B[1].call(
B[0],this):null;this.Ce=null;this.GT=-1;if(!!this.B6)this.B6.AH=Aa;Aa.Ab=this;Aa.
Ag=this.B6;this.B6=Aa;if(!this.B7)this.B7=Aa;if(MV===this.Gi)this.A9(Aa);return Aa;
},Apj:function(G){var B;this.BT.Q=null;this.BT.Qh=null;this.BT=null;(B=this.Nq)?
B[1].call(B[0],this):null;},Bzt:function(G){this.Gh(this.Wq.Dy[1]);},Bzu:function(
G){var B;if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;this.BT.Qh=null;this.BT=
null;}if(!this.NG){var AE=this.Aqo(0,this.AV-1);var AfV=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OL);if(AE[0]>AfV[0])AE=[].concat(AfV[0],AE.slice(1,4));if(AE[1]>AfV[
1])AE=A.abP(AE,AfV[1]);var Fi=AE[1]-this.M[1];var A1R=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A1R>0)A1R=0;this.Wq.Dy=[0,this.Bq];this.Wq.Gd=[0,(this.Bq+A1R)-Fi];this.
Wq.FQ=[0,this.Bq-Fi];}else{var Fi=32000-(32000%this.GW);this.Wq.Dy=[0,this.Bq];this.
Wq.Gd=[0,this.Bq-Fi];this.Wq.FQ=[0,this.Bq+Fi];}},ASg:function(E){var B;if(this.
NG===E)return;this.NG=E;while(!!this.Adi());this.Am();this.Be([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Awn:function(E){if(E===this.Wq)return;if(!!E&&!!E.Atv){A.ab5(
"%s%*%s",OX,E,Q_);throw new Error(WK);}if(!!this.Wq){this.Wq.AJ6=null;this.Wq.Atv=
null;}this.Wq=E;if(!!E){E.AJ6=[this,this.Bzu];E.Atv=[this,this.Bzt];}},Gh:function(
E){var B;if(this.NG&&(this.AV>0)){var Ht=this.Jc(this.AV,3);if(E<0)E=Ht-(-E%Ht);
if(E>0)E=E%Ht;if(E>0)E=E-Ht;}if(E===this.Bq)return;this.Bq=E;this.Am();this.Be([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GX:function(E){if(E<0)E=-1;if(E===this.Gi)return;
this.Gi=E;this.Am();},A9t:function(E){var B;if(E<0)E=0;if(E===this.OL)return;this.
OL=E;if(!this.NG){this.Am();this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},AeH:function(
E){var B;if(E<1)E=1;if(E===this.GW)return;this.GW=E;while(!!this.Adi());this.Am(
);this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jn:function(E){var B;if(E<0)E=0;
if(E===this.AV)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NG){if(
E>this.AV){AE=[].concat(AE.slice(0,3),(this.OL+this.Bq)+this.Jc(E,3));AE=A.abP(AE
,(this.OL+this.Bq)+this.Jc(this.AV,3));}else{AE=A.abP(AE,(this.OL+this.Bq)+this.
Jc(E,3));AE=[].concat(AE.slice(0,3),(this.OL+this.Bq)+this.Jc(this.AV,3));}}else
while(!!this.Adi());this.AV=E;this.Am();this.Be(AE);},NU:function(E){var B;if(E===
this.Lf)return;this.Lf=E;while(!!this.Adi());this.Hr=null;this.Og=0;this.Am();this.
Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BhX:function(G1){if(this.Ati)return null;
if((G1<0)||(G1>=this.AV))return null;if(!this.NG){if((G1<this.Hi)||(G1>this.Je))
return null;var X=this.B6;while(G1>this.Hi){X=X.Ag;G1=G1-1;}return X;}else{var MV=
this.Hi;if(MV<0)MV=this.AV-(-MV%this.AV);if(MV>0)MV=MV%this.AV;var X=this.B6;while(
!!X){if((MV%this.AV)===G1)return X;X=X.Ag;MV=MV+1;}return null;}},AAV:function(AcD
,EX){var B;if(this.NG){(EX)?EX[1].call(EX[0],this):null;return;}var AJy=this.Bq;
var Bcf=((((B=this.M)[3]-B[1])-this.Bq)-this.OL)-this.Jc(this.AV,3);var Bo=0;if(
AJy>0)Bo=-AJy;else if(Bcf>0)Bo=Bcf;if((Bo>0)&&(Bo>-AJy))Bo=-AJy;if(!Bo){(EX)?EX[
1].call(EX[0],this):null;return;}if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;
this.BT.Qh=null;this.Nq=null;}this.BT=AcD;if(!this.BT){this.Gh(this.Bq+Bo);(EX)?
EX[1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this
,this.Am7,this.Gh];this.BT.Cr=this.Bq;this.BT.B1=this.Bq+Bo;this.BT.Qh=[this,this.
Apj];this.BT.AeK(false);this.BT.Ar(true);this.Nq=EX;}},Hy:function(G1,AcG,AcD,EX
){var B;if((G1<0)||(G1>=this.AV))return;var Ay=this.Aqo(G1,G1);var A$=this.M;var
LI=A.lb(Ay,A$);if((!AcG&&!((LI[0]>=LI[2])||(LI[1]>=LI[3])))||(AcG&&A.aaY(LI,Ay))
){(EX)?EX[1].call(EX[0],this):null;return;}var Bo=0;if(Ay[3]>A$[3])Bo=Ay[3]-A$[3
];if(Bo>(Ay[1]-A$[1]))Bo=Ay[1]-A$[1];if(!!this.BT){this.BT.Ar(false);this.BT.Q=null;
this.BT.Qh=null;this.Nq=null;}this.BT=AcD;if(!this.BT){this.Gh(this.Bq-Bo);(EX)?
EX[1].call(EX[0],this):null;}else{this.BT.Ar(false);this.BT.HG(1);this.BT.Q=[this
,this.Am7,this.Gh];this.BT.Cr=this.Bq;this.BT.B1=this.Bq-Bo;this.BT.Qh=[this,this.
Apj];this.BT.AeK(false);this.BT.Ar(true);this.Nq=EX;}},BhP:function(){return BC;
},AOc:function(){if((this.OL<=0)||this.NG)return BC;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bq);AE=[].concat(AE.slice(0,3),AE[1]+this.OL);return AE;},A52:function(E6
){if(((this.AV<=0)||(E6[0]<this.M[0]))||(E6[0]>=this.M[2]))return-1;E6=A.abe(E6,
this.M.slice(0,2));if(!this.NG){var Aa=(E6[1]-this.Bq)-this.OL;if(Aa>0)Aa=this.AlG(
Aa,0);if((Aa<0)||(Aa>=this.AV))return-1;return Aa;}var Aa=E6[1]-this.Bq;if(Aa>0)
Aa=this.AlG(Aa,0);if(Aa<0)Aa=this.AlG(Aa,0)-1;if(Aa<0)Aa=this.AV-(-Aa%this.AV);if(
Aa>0)Aa=Aa%this.AV;return Aa;},Aqo:function(JR,LZ){if(JR<0)JR=0;if(LZ>=this.AV)LZ=
this.AV-1;if(JR>LZ)return BC;var AE=this.M;var Bo=this.Bq;if(this.NG){var Ht=this.
Jc(this.AV,3);if(Bo<0)Bo=Ht-(-Bo%Ht);if(Bo>0)Bo=Bo%Ht;if(Bo>0)Bo=Bo-Ht;}else Bo=
Bo+this.OL;AE=[].concat(AE.slice(0,3),(AE[1]+Bo)+this.Jc(LZ+1,0));AE=A.abP(AE,(AE[
1]+Bo)+this.Jc(JR,0));return AE;},Abh:function(JR,LZ){var B;if(JR<0)JR=0;if(JR>LZ
)return;if(this.S8>this.S9){this.S8=JR;this.S9=LZ;}else{if(JR<this.S8)this.S8=JR;
if(LZ>this.S9)this.S9=LZ;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NG){
AE=A.abP(AE,(this.OL+this.Bq)+this.Jc(JR,0));AE=[].concat(AE.slice(0,3),(this.OL+
this.Bq)+this.Jc(LZ+1,0));}else if((this.Jc(this.AV-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bo=this.Bq;var Ht=this.Jc(this.AV,3);if(Bo<0)Bo=Ht-(-Bo%Ht);if(
Bo>0)Bo=Bo%Ht;if(Bo>0)Bo=Bo-Ht;AE=A.abP(AE,Bo+this.Jc(JR,0));AE=[].concat(AE.slice(
0,3),Bo+this.Jc(LZ+1,0));}this.Am();this.Be(AE);},Am7:function(){return this.Bq;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CI;this.H(WM);
this.Lf=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hr
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ce)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wq)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Ds={Hr:null
,BT:null,Ce:null,Nq:null,Hc:null,S9:-1,S8:0,Je:-1,Hi:0,Aim:8,Og:0,St:0,Acn:A.wf,
GT:-1,Bq:0,Gi:-1,VQ:24,AV:0,Lf:null,Ati:false,AUd:function(Il,N_,WY,S0,S1,AhN,O2
,Rd,Lv,Lt,Lu){throw new Error(WN);},Aqa:function(Il,AhN,O2,Rd,Lv,Lt,Lu){throw new
Error(WO);},Ako:function(Il,N_,WY,S0,S1,O2,Rd,Lv,Lt,Lu){throw new Error(ZK);},DispatchEvent:
function(CJ){var B;var result=null;if(((this.Gi>=0)&&(this.Gi<this.AV))&&!this.AR
){this.GT=this.Gi;this.Ce=(C.Ce.isPrototypeOf(B=A._NewObject(this.Lf,0))?B:null);
if(!!this.B7)this.B7.Ag=this.Ce;else this.B6=this.Ce;this.Ce.AH=this.B7;this.B7=
this.Ce;this.Ce.Ab=this;this.Acn=[this.St,(B=this.M)[3]-B[1]];(B=this.Hc)?B[1].call(
B[0],this):null;var BY=(C.O.isPrototypeOf(B=this.Ce)?B:null);if(!!BY)result=BY.DispatchEvent(
CJ);else result=this.Ce.GQ(CJ);if(!!this.Ce.AH)this.Ce.AH.Ag=null;else this.B6=null;
this.B7=this.Ce.AH;this.Ce.AH=null;this.Ce.Ab=null;this.Ce=null;}if(!result)result=
C.O.DispatchEvent.call(this,CJ);return result;},Ai:function(Ae){var B;if(!this.Lf
)return;this.Ati=true;var FH=this.AlG(0-this.Bq,1);var GM=this.AlG((((B=this.M)[
2]-B[0])-this.Bq)-1,2);var CA=GM-FH;if(CA<1)CA=1;var AhZ=(CA/2)|0;var Ah0=(CA/3)|
0;if(!AhZ)AhZ=1;if(!Ah0)Ah0=1;if(FH<this.Hi){FH=FH-AhZ;GM=GM+Ah0;}else if(GM>this.
Je){FH=FH-Ah0;GM=GM+AhZ;}else{FH=this.Hi;GM=this.Je;}if(FH>=this.AV){FH=0;GM=-1;
}else if(GM<0){FH=0;GM=-1;}if(GM>=this.AV)GM=this.AV-1;if(FH<0)FH=0;var AiF=this.
Hi;var AiG=this.Je;var Ao8=0;var Ao9=-1;if(FH>AiF)AiF=FH;if(GM<AiG)AiG=GM;if(AiF<=
AiG){while((this.Je<GM)&&(this.Hi<AiF)){this.Adi();this.AyD();}while((this.Hi>FH
)&&(this.Je>AiG)){this.AAf();this.AyC();}}else{this.Je=(this.Je-this.Hi)+FH;this.
Hi=FH;Ao8=this.Hi;Ao9=this.Je;}while(this.Hi<FH)this.Adi();while(this.Je>GM)this.
AAf();while(this.Hi>FH)this.AyC();while(this.Je<GM)this.AyD();var Aa=this.B6;var
inx=this.Hi;var pos=[this.Bq+this.Jc(inx,0),0];var BU=(B=this.M)[2]-B[0];var Alf=
null;var Bfh=(B=this.M)[3]-B[1];while(!!Aa){var Iq=inx;var Adj=((Iq>=this.S8)&&(
Iq<=this.S9))||((inx>=Ao8)&&(inx<=Ao9));var AoP=Aa.GetExtent();var Bo=A.abe(pos,
AoP.slice(0,2));if(Adj)this.St=this.VQ;else this.St=AoP[2]-AoP[0];var A1A=pos[0];
var A1B=pos[0]+this.St;if(!A.aaX(Bo,Ca))Aa.AmW(Bo,true);if((Adj&&(A1A<BU))&&(A1B>
0)){this.Ce=Aa;this.GT=Iq;this.Acn=[this.St,Bfh];(B=this.Hc)?B[1].call(B[0],this
):null;}Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.St,pos[1]];}inx=this.Hi;Aa=this.B6;pos=[
this.Bq+this.Jc(inx,0),0];while(!!Aa){var Iq=inx;var Adj=((Iq>=this.S8)&&(Iq<=this.
S9))||((inx>=Ao8)&&(inx<=Ao9));if(Adj)this.St=this.VQ;else this.St=(B=Aa.GetExtent(
))[2]-B[0];var A1A=pos[0];var A1B=pos[0]+this.St;if(Adj&&!((A1A<BU)&&(A1B>0))){this.
Ce=Aa;this.GT=Iq;this.Acn=[this.St,Bfh];(B=this.Hc)?B[1].call(B[0],this):null;}if(
Iq===this.Gi)Alf=Aa;Aa=Aa.Ag;inx+=1;pos=[pos[0]+this.St,pos[1]];}this.S8=0;this.
S9=-1;this.Ce=null;this.GT=-1;this.A9(Alf);this.Ati=false;},R5:function(Af,Gq,aFilter
){return null;},Aqh:function(Af,aFilter){return null;},Vw:function(Af,aFilter){return null;
},AB4:function(Af,aFilter){return null;},Db:function(aFilter){return BC;},NH:function(
Ku,FE,Lv,Lt,Lu){throw new Error(WQ);},Ahh:function(Af,JT){throw new Error(WR);},
Zf:function(Af){throw new Error(SU);},Kn:function(Af,P4){throw new Error(ZL);},HI:
function(Af){throw new Error(ZM);},ALs:function(Af,JT){throw new Error(Acq);},J:
function(Af,P4){throw new Error(UF);},Jc:function(G1,AZR){return G1*this.VQ;},AlG:
function(E6,AZR){return(E6/this.VQ)|0;},AAf:function(){var Aa=this.B7;if(!Aa)return null;
if(Aa===this.AR)this.A9(null);this.Je=this.Je-1;if(!!Aa.AH)Aa.AH.Ag=null;else this.
B6=null;this.B7=Aa.AH;Aa.AH=null;Aa.Ab=null;Aa.En=null;if(this.Og<this.Aim){if(!
!this.Hr)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Og++;}return Aa;},AyD:function(
){var B;var Aa=this.Hr;var Ac6=this.Lf;var Adn=++this.Je;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ac6))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.
AH.Ag=Aa.Ag;if(this.Hr===Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Og--;}else{
Aa=(C.Ce.isPrototypeOf(B=A._NewObject(Ac6,0))?B:null);Aa.AY(0x1D);if(!!this.Og)this.
Aim++;}this.St=this.VQ;this.GT=Adn;this.Acn=[this.St,(B=this.M)[3]-B[1]];this.Ce=
Aa;(B=this.Hc)?B[1].call(B[0],this):null;this.Ce=null;this.GT=-1;if(!!this.B7)this.
B7.Ag=Aa;Aa.Ab=this;Aa.AH=this.B7;this.B7=Aa;if(!this.B6)this.B6=Aa;if(Adn===this.
Gi)this.A9(Aa);return Aa;},Adi:function(){var Aa=this.B6;if(!Aa)return null;if(Aa===
this.AR)this.A9(null);this.Hi=this.Hi+1;if(!!Aa.Ag)Aa.Ag.AH=null;else this.B7=null;
this.B6=Aa.Ag;Aa.Ag=null;Aa.Ab=null;Aa.En=null;if(this.Og<this.Aim){if(!!this.Hr
)this.Hr.AH=Aa;Aa.Ag=this.Hr;this.Hr=Aa;this.Og++;}return Aa;},AyC:function(){var
B;var Aa=this.Hr;var Ac6=this.Lf;var MV=--this.Hi;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ac6))Aa=Aa.Ag;if(!!Aa){if(!!Aa.Ag)Aa.Ag.AH=Aa.AH;if(!!Aa.AH)Aa.AH.Ag=Aa.
Ag;if(this.Hr===Aa)this.Hr=Aa.Ag;Aa.Ag=null;Aa.AH=null;this.Og--;}else{Aa=(C.Ce.
isPrototypeOf(B=A._NewObject(Ac6,0))?B:null);Aa.AY(0x1D);if(!!this.Og)this.Aim++;
}this.St=this.VQ;this.GT=MV;this.Acn=[this.St,(B=this.M)[3]-B[1]];this.Ce=Aa;(B=
this.Hc)?B[1].call(B[0],this):null;this.Ce=null;this.GT=-1;if(!!this.B6)this.B6.
AH=Aa;Aa.Ab=this;Aa.Ag=this.B6;this.B6=Aa;if(!this.B7)this.B7=Aa;if(MV===this.Gi
)this.A9(Aa);return Aa;},Apj:function(G){var B;this.BT.Q=null;this.BT.Qh=null;this.
BT=null;(B=this.Nq)?B[1].call(B[0],this):null;},Gh:function(E){var B;if(E===this.
Bq)return;this.Bq=E;this.Am();this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GX:function(
E){if(E<0)E=-1;if(E===this.Gi)return;this.Gi=E;this.Am();},AEC:function(E){var B;
if(E<1)E=1;if(E===this.VQ)return;this.VQ=E;while(!!this.Adi());this.Am();this.Be([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jn:function(E){var B;if(E<0)E=0;if(E===this.
AV)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AV){AE=[].concat(this.
Bq+this.Jc(this.AV,3),AE.slice(1,4));AE=A.abN(AE,this.Bq+this.Jc(E,3));}else{AE=
A.abN(AE,this.Bq+this.Jc(this.AV,3));AE=[].concat(this.Bq+this.Jc(E,3),AE.slice(
1,4));}this.AV=E;this.Am();this.Be(AE);},NU:function(E){var B;if(E===this.Lf)return;
this.Lf=E;while(!!this.Adi());this.Hr=null;this.Og=0;this.Am();this.Be([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BnP:function(Bwl,Bwm){if(!this.BT)return;if(Bwl)this.Gh(
this.BT.B1);var A3t=this.Nq;this.BT.Ar(false);this.BT.Q=null;this.BT.Qh=null;this.
Nq=null;this.BT=null;if(Bwm)(A3t)?A3t[1].call(A3t[0],this):null;},Bin:function(){
return!!this.BT;},Hy:function(G1,AcG,AcD,EX){var B;if((G1<0)||(G1>=this.AV))return;
var Ay=this.Aqo(G1,G1);var A$=this.M;var LI=A.lb(Ay,A$);if((!AcG&&!((LI[0]>=LI[2
])||(LI[1]>=LI[3])))||(AcG&&A.aaY(LI,Ay))){(EX)?EX[1].call(EX[0],this):null;return;
}var Bo=0;if(Ay[2]>A$[2])Bo=Ay[2]-A$[2];if(Bo>(Ay[0]-A$[0]))Bo=Ay[0]-A$[0];if(!!
this.BT){this.BT.Ar(false);this.BT.Q=null;this.BT.Qh=null;this.Nq=null;}this.BT=
AcD;if(!this.BT){this.Gh(this.Bq-Bo);(EX)?EX[1].call(EX[0],this):null;}else{this.
BT.Ar(false);this.BT.HG(1);this.BT.Q=[this,this.Am7,this.Gh];this.BT.Cr=this.Bq;
this.BT.B1=this.Bq-Bo;this.BT.Qh=[this,this.Apj];this.BT.AeK(false);this.BT.Ar(true
);this.Nq=EX;}},Aqo:function(JR,LZ){if(JR<0)JR=0;if(LZ>=this.AV)LZ=this.AV-1;if(
JR>LZ)return BC;var AE=this.M;var Bo=this.Bq;AE=A.abN(AE,(AE[0]+Bo)+this.Jc(LZ+1
,0));AE=[].concat((AE[0]+Bo)+this.Jc(JR,0),AE.slice(1,4));return AE;},Abh:function(
JR,LZ){var B;if(JR<0)JR=0;if(JR>LZ)return;if(this.S8>this.S9){this.S8=JR;this.S9=
LZ;}else{if(JR<this.S8)this.S8=JR;if(LZ>this.S9)this.S9=LZ;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bq+this.Jc(JR,0),AE.slice(1,4));AE=A.abN(
AE,this.Bq+this.Jc(LZ+1,0));this.Am();this.Be(AE);},Am7:function(){return this.Bq;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Ds;this.H(WM);
this.Lf=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hr
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ce)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nq)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bk={ARy:null,AD1:null,Avt:null,DS:null,
Lj:null,BK:null,AKr:0,Bn:0,Iz:0,Bt:0,N2:0,Jh:0,Dy:A.wf,NK:A.wf,HV:A.wf,AwM:8,AeR:
0,A6T:1,Down:false,Yk:false,Nz:false,A05:false,Azy:0,J_:function(CU,aClip,aOffset
,Cf,aBlend){},GQ:function(CJ){var B;var BN=(C.AdS.isPrototypeOf(CJ)?CJ:null);var
DV=(C.Aqc.isPrototypeOf(CJ)?CJ:null);var AJK=this.Yk;var Aak;var UV;var AAA;var MT;
var AyW;if(!BN&&!DV)return null;Aak=(!!BN&&BN.Down)&&!BN.Jh;UV=(!!BN&&BN.Down)&&(
BN.Jh>0);AAA=(!!BN&&BN.Down)&&(BN.Jh>this.Azy);MT=!!BN&&!BN.Down;AyW=!!DV;if(Aak
)this.Azy=((B=(BN.Nz?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.AeR&0x20)===0x20
)&&(this.Bn>0))&&(this.Bn<33554432)){var Ip=(C.Aul.isPrototypeOf(CJ)?CJ:null);if(((
!!Ip&&Ip.Down)&&(Ip.Aw3!==this))&&A.wa(this.GetExtent(),this.Ab.A6P(Ip.LO))){this.
AKr=0x20;this.Bn=this.Bn|67108864;return null;}}if(Aak){var Apd=0;var Ac1;this.Bn=
this.Bn|(1<<BN.Iz);for(Ac1=this.Bn&4095;Ac1>0;Ac1=Ac1>>1)if(!!(Ac1&1))Apd=Apd+1;
if(Apd===1)this.Bn=(this.Bn|16777216)|(4096<<BN.Iz);}if(MT&&(this.Bn<16777216)){
var It=this.If();var Jt=null;if(!!It){var A3l=(!!this.AH?this.AH:this.Ab);var A0T=(
!!It.Ju?It.Ju.CW:null);Jt=It.X0(A.abh(ZN,BN.LO),BN.Iz,BN.N2,A0T,A3l,0x0);}if(!!Jt
){var P;for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Ce.GQ(A._NewObject(C.AdS,0).InitializeDown(
P,BN.HV,BN.N2,Ca,true,BN.LO));for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Ce.GQ(A.
_NewObject(C.AdS,0).InitializeUp(P,BN.HV,BN.HV,0,BN.N2,Ca,false,BN.LO,BN.LO));}}
if(MT)this.Bn=(this.Bn&~(1<<BN.Iz))|33554432;if(AAA&&(this.Bn<16777216))this.Bn=
this.Bn|67108864;if(MT&&BN.Nz)this.Bn=this.Bn|67108864;if(MT&&!(this.Bn&4095))this.
AKr=0x0;if(MT&&!(this.Bn&16777215))this.Bn=0;if(UV&&(this.Bn>=67108864)){var It=
this.If();if(!!It)It.ATE(null,null,this,this.AKr);}if((UV&&!!(this.Bn&16777216))&&
!!(this.Bn&33554432)){UV=false;MT=true;}if(!!BN&&!(this.Bn&(4096<<BN.Iz)))return this;
if(!!DV&&!(this.Bn&(4096<<DV.Iz)))return this;if(MT&&!(this.Bn&16777216))return this;
if(((Aak||AyW)||UV)&&((this.Bn<16777216)||(this.Bn>=33554432)))return this;if(MT
)this.Bn=this.Bn&3758100479;if(MT&&!(this.Bn&16777215))this.Bn=0;if(!!BN){this.Down=
Aak||UV;this.Yk=this.AQt(BN.HV);this.NK=BN.NK;this.HV=BN.HV;this.Dy=Ca;this.Jh=BN.
Jh;this.N2=BN.N2;this.Nz=BN.Nz;this.Iz=BN.Iz;this.Bt=BN.Bt;if(BN.Down&&!BN.Jh)AJK=
false;}if(!!DV){this.Down=true;this.Yk=this.AQt(DV.HV);this.NK=DV.NK;this.HV=DV.
HV;this.Dy=DV.Dy;this.Jh=DV.Jh;this.N2=DV.N2;this.Iz=DV.Iz;this.Nz=false;this.Bt=
DV.Bt;}var A0Z=this.Down;if(!!DV)(B=this.ARy)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Jh)(B=this.BK)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Jh>0))(B=this.DS)?B[1].call(B[0],this):null;if((this.Down&&this.Yk)&&!AJK){
this.A05=true;(B=this.Avt)?B[1].call(B[0],this):null;}if(this.A05&&(((A0Z&&!this.
Yk)&&AJK)||((!A0Z&&this.Yk)&&AJK))){this.A05=false;(B=this.AD1)?B[1].call(B[0],this
):null;}if(!!BN&&!A0Z)(B=this.Lj)?B[1].call(B[0],this):null;if(!!this.AeR){var Adh=
0x0;if(((((this.AeR&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Jh>=1000))Adh=0x10;if((((
this.AeR&0x1)===0x1)&&!!DV)&&((DV.LO[1]-DV.AgC[1])<=-this.AwM))Adh=0x1;if((((this.
AeR&0x2)===0x2)&&!!DV)&&((DV.LO[1]-DV.AgC[1])>=this.AwM))Adh=0x2;if((((this.AeR&
0x4)===0x4)&&!!DV)&&((DV.LO[0]-DV.AgC[0])<=-this.AwM))Adh=0x4;if((((this.AeR&0x8
)===0x8)&&!!DV)&&((DV.LO[0]-DV.AgC[0])>=this.AwM))Adh=0x8;if(!!Adh){var It=this.
If();if(!!It){this.AKr=Adh;It.ATE(null,this,this,Adh);}}}return this;},X0:function(
C9,BD,N$,ZX,AcJ,AcI){var B;if(!!ZX&&(ZX!==this))return null;if((N$<1)||(N$>this.
A6T))return null;if(this.Bn>=33554432)return null;if((this.Bn>=16777216)&&!(this.
Bn&(4096<<BD)))return null;if(!!(AcI&this.AeR))return null;if(this.Bh2()){var Ay=
A.lb(C9,this.GetExtent());if(!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){var P7=A.aaI(C9);
var Fi=Ca;if(P7[0]<Ay[0])Fi=[Ay[0]-P7[0],Fi[1]];if(P7[0]>=Ay[2])Fi=[(Ay[2]-P7[0]
)-1,Fi[1]];if(P7[1]<Ay[1])Fi=[Fi[0],Ay[1]-P7[1]];if(P7[1]>=Ay[3])Fi=[Fi[0],(Ay[3
]-P7[1])-1];return A._NewObject(C.Aum,0).Initialize(this,Fi);}}else{var Hs=A.abi(
9,A.wf,null);var P;Hs.Set(0,A.aaI(C9));Hs.Set(1,Hs.Get(0));Hs.Set(2,Hs.Get(0));Hs.
Set(3,Hs.Get(0));Hs.Set(4,Hs.Get(0));Hs.Set(1,[C9[0],Hs.Get(1)[1]]);Hs.Set(2,[Hs.
Get(2)[0],C9[1]]);Hs.Set(3,[C9[2],Hs.Get(3)[1]]);Hs.Set(4,[Hs.Get(4)[0],C9[3]]);
Hs.Set(5,C9.slice(0,2));Hs.Set(6,[C9[2],C9[1]]);Hs.Set(7,[C9[0],C9[3]]);Hs.Set(8
,C9.slice(2,4));for(P=0;P<9;P=P+1)if(this.AQt(Hs.Get(P)))return A._NewObject(C.Aum
,0).Initialize(this,A.abe(Hs.Get(P),Hs.Get(0)));}return null;},Bmb:function(E){if(
E<1)E=1;this.AwM=E;},AEL:function(E){if(E<1)E=1;this.A6T=E;},Ar:function(E){if(E
)this.Ct(0x100000,0x0);else this.Ct(0x0,0x100000);},_Init:function(aArg){C.Zc._Init.
call(this,aArg);this.__proto__=C.Bk;this.T=0x10011B;},_Mark:function(D){var B;C.
Zc._Mark.call(this,D);if((B=this.ARy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AD1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avt)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Lj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H2={timer:null,AJ6:null,Atv:null,AFn:null,Y2:null,Sq:null,Bn:0,AIF:0,Ac4:5000
,Apy:0,AJI:A.wf,AoM:0,Afs:0,EO:0,AlR:0,AtK:0,AoL:0,Afr:0,EN:0,AlQ:0,AlO:0,NK:A.wf
,A4_:A.wf,FQ:A.wf,Gd:A.wf,Dy:A.wf,Ws:A.wf,A5Q:0.5,A_h:true,AF4:true,Zm:false,Xm:
false,Xn:false,Aou:false,Azy:0,J_:function(CU,aClip,aOffset,Cf,aBlend){},GQ:function(
CJ){var B;var BN=(C.AdS.isPrototypeOf(CJ)?CJ:null);var DV=(C.Aqc.isPrototypeOf(CJ
)?CJ:null);var Ip=(C.Aul.isPrototypeOf(CJ)?CJ:null);var Aak;var UV;var AAA;var MT;
var AyW;Aak=(!!BN&&BN.Down)&&!BN.Jh;UV=(!!BN&&BN.Down)&&(BN.Jh>0);AAA=(!!BN&&BN.
Down)&&(BN.Jh>this.Azy);MT=!!BN&&!BN.Down;AyW=!!DV;if(Aak)this.Azy=((B=(BN.Nz?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(Aak){var Apd=0;var Ac1;this.Bn=this.Bn|(1<<BN.
Iz);for(Ac1=this.Bn&4095;Ac1>0;Ac1=Ac1>>1)if(!!(Ac1&1))Apd=Apd+1;if(Apd===1)this.
Bn=(this.Bn|16777216)|(4096<<BN.Iz);}if(MT&&(this.Bn<16777216)){var It=this.If();
var Jt=null;if(!!It){var A3l=(!!this.AH?this.AH:this.Ab);var A0T=(!!It.Ju?It.Ju.
CW:null);Jt=It.X0(A.abh(ZN,BN.LO),BN.Iz,BN.N2,A0T,A3l,0x0);}if(!!Jt){var P;for(P=
0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Ce.GQ(A._NewObject(C.AdS,0).InitializeDown(P
,BN.HV,BN.N2,Ca,true,BN.LO));for(P=0;P<10;P++)if(!!(this.Bn&(1<<P)))Jt.Ce.GQ(A._NewObject(
C.AdS,0).InitializeUp(P,BN.HV,BN.HV,0,BN.N2,Ca,false,BN.LO,BN.LO));}}if(MT)this.
Bn=(this.Bn&~(1<<BN.Iz))|33554432;if(AAA&&(this.Bn<16777216))this.Bn=this.Bn|67108864;
if(MT&&BN.Nz)this.Bn=this.Bn|67108864;if(MT&&!(this.Bn&16777215))this.Bn=0;if(UV&&(
this.Bn>=67108864)){var It=this.If();if(!!It)It.ATE(null,null,this,0x0);}if((UV&&
!!(this.Bn&16777216))&&!!(this.Bn&33554432)){UV=false;MT=true;}if(!!BN&&!(this.Bn&(
4096<<BN.Iz)))return this;if(!!DV&&!(this.Bn&(4096<<DV.Iz)))return this;if(MT&&!(
this.Bn&16777216))return this;if(((Aak||AyW)||UV)&&((this.Bn<16777216)||(this.Bn>=
33554432)))return this;if(MT)this.Bn=this.Bn&3758100479;if(MT&&!(this.Bn&16777215
))this.Bn=0;if(!!Ip&&(Ip.Aw3===this))return null;if((!!Ip&&Ip.Down)&&(this.Aou||
!this.Zm))return null;if((!!Ip&&Ip.Down)&&!A.wa(this.M,this.Ab.A6P(Ip.LO)))return null;
if((!!Ip&&!Ip.Down)&&(!this.Aou||(this.AIF!==Ip.Iz)))return null;if((!BN&&!DV)&&
!Ip)return null;if(!!BN){this.Aou=Aak||UV;this.AIF=BN.Iz;this.NK=BN.NK;}if(!!DV)
this.AIF=DV.Iz;if(!!Ip){this.Aou=Ip.Down;this.AIF=Ip.Iz;}if(!!Ip&&Ip.Down){this.
A3m();this.EN=(((Ip.Bt-this.AlO)*0.001)*this.Afr)+this.EN;this.EO=(((Ip.Bt-this.
AtK)*0.001)*this.Afs)+this.EO;if(this.Xm)this.EN=0;if(this.Xn)this.EO=0;this.Afr=
0;this.Afs=0;this.Xm=false;this.Xn=false;this.AJI=this.Dy;this.Apy=Ip.Bt;return this;
}if(Aak){this.A3m();this.EN=(((BN.Bt-this.AlO)*0.001)*this.Afr)+this.EN;this.EO=(((
BN.Bt-this.AtK)*0.001)*this.Afs)+this.EO;if(this.Xm||!this.Zm)this.EN=0;if(this.
Xn||!this.Zm)this.EO=0;this.Afr=0;this.Afs=0;this.Xm=false;this.Xn=false;if(!this.
Zm){this.Zm=true;(B=this.Sq)?B[1].call(B[0],this):null;(B=this.AJ6)?B[1].call(B[
0],this):null;}this.AJI=this.Dy;this.Apy=BN.Bt;}if(!!DV){var G3=A.abe(DV.HV,DV.NK
);var Cy=this.Dy;if(this.AF4)Cy=[this.AJI[0]+G3[0],Cy[1]];Cy=[Cy[0],this.AJI[1]+
G3[1]];if(this.A_h){if(Cy[0]<this.Gd[0])Cy=[this.Gd[0]+(((Cy[0]-this.Gd[0])/2)|0
),Cy[1]];else if(Cy[0]>this.FQ[0])Cy=[this.FQ[0]+(((Cy[0]-this.FQ[0])/2)|0),Cy[1
]];if(Cy[1]<this.Gd[1])Cy=[Cy[0],this.Gd[1]+(((Cy[1]-this.Gd[1])/2)|0)];else if(
Cy[1]>this.FQ[1])Cy=[Cy[0],this.FQ[1]+(((Cy[1]-this.FQ[1])/2)|0)];}else{if(Cy[0]<
this.Gd[0])Cy=[this.Gd[0],Cy[1]];else if(Cy[0]>this.FQ[0])Cy=[this.FQ[0],Cy[1]];
if(Cy[1]<this.Gd[1])Cy=[Cy[0],this.Gd[1]];else if(Cy[1]>this.FQ[1])Cy=[Cy[0],this.
FQ[1]];}if(!A.aaX(Cy,this.Dy)){this.A4_=A.abe(Cy,this.Dy);this.Dy=Cy;(B=this.Atv
)?B[1].call(B[0],this):null;(B=this.AFn)?B[1].call(B[0],this):null;}}if((!!Ip&&!
Ip.Down)&&((Ip.Bt-this.Apy)>=200)){this.EN=0;this.EO=0;}if(UV&&((BN.Bt-this.Apy)>=
200)){this.EN=0;this.EO=0;}if(!!DV&&(DV.Bt>this.Apy)){var G3=DV.Dy;var BcI=1000/(
DV.Bt-this.Apy);var Aip=0;var Aiq;if(this.AF4)Aip=G3[0]*BcI;Aiq=G3[1]*BcI;if((Aip
*this.EN)<0)this.EN=0;if((Aiq*this.EO)<0)this.EO=0;this.EN=(this.EN+Aip)*0.5;this.
EO=(this.EO+Aiq)*0.5;this.Apy=DV.Bt;}if(!MT&&!Ip)return this;if(!!BN&&BN.Nz){this.
EN=0;this.EO=0;}if((this.Dy[0]<=this.Gd[0])||(this.Dy[0]>=this.FQ[0]))this.EN=0;
else if(!this.EN){var EJ=this.Dy[0];var E8=this.Gd[0];var EA=this.FQ[0];if(EJ<E8
)EA=this.Gd[0];else if(EJ>EA)E8=this.FQ[0];else if(this.Ws[0]<=1){E8=EJ;EA=EJ;}else{
var Ac8=(EA-EJ)%this.Ws[0];EA=(EJ-this.Ws[0])+Ac8;E8=EJ+Ac8;if(EA<this.Gd[0])EA=
this.Gd[0];if(E8>this.FQ[0])E8=this.FQ[0];}if((E8-EJ)<=(EJ-EA))EJ=E8;else EJ=EA;
if(EJ!==this.Dy[0]){var Jb=EJ-this.Dy[0];if(Jb>0)this.EN=Math.sqrt((Jb*2)*this.Ac4
)+20;if(Jb<0)this.EN=-Math.sqrt((-Jb*2)*this.Ac4)-20;this.Afr=(400-(this.EN*this.
EN))/(2*Jb);this.AoL=EJ;}}else{var BAr=this.EN*this.EN;var Jb=BAr/(2*this.Ac4);var
EJ=this.Dy[0];if(this.EN>0)EJ=EJ+(Jb|0);if(this.EN<0)EJ=EJ-(Jb|0);if(EJ>this.FQ[
0])EJ=this.FQ[0];else if(EJ<this.Gd[0])EJ=this.Gd[0];var Bfc=EJ;var E8=this.Gd[0
];var EA=this.FQ[0];if(EJ<E8)EA=this.Gd[0];else if(EJ>EA)E8=this.FQ[0];else if(this.
Ws[0]<=1){E8=EJ;EA=EJ;}else{var Ac8=(EA-EJ)%this.Ws[0];EA=(EJ-this.Ws[0])+Ac8;E8=
EJ+Ac8;if(EA<this.Gd[0])EA=this.Gd[0];if(E8>this.FQ[0])E8=this.FQ[0];}if(this.EN>
0){if(EA<=this.Dy[0])EJ=E8;else if((EJ-EA)<(E8-EJ))EJ=EA;else EJ=E8;}else if(E8>=
this.Dy[0])EJ=EA;else if((EJ-EA)>(E8-EJ))EJ=E8;else EJ=EA;if(EJ!==this.Dy[0]){Jb=
EJ-this.Dy[0];if(EJ!==Bfc){var AiN=EJ-Bfc;if(AiN>0)this.EN=this.EN+Math.sqrt((AiN
*2)*this.Ac4);if(AiN<0)this.EN=this.EN-Math.sqrt((-AiN*2)*this.Ac4);}if(this.EN>
0)this.EN=this.EN+20;if(this.EN<0)this.EN=this.EN-20;this.Afr=(400-(this.EN*this.
EN))/(2*Jb);this.AoL=EJ;}else this.EN=0;}if((this.Dy[1]<=this.Gd[1])||(this.Dy[1
]>=this.FQ[1]))this.EO=0;else if(!this.EO){var EK=this.Dy[1];var E8=this.Gd[1];var
EA=this.FQ[1];if(EK<E8)EA=this.Gd[1];else if(EK>EA)E8=this.FQ[1];else if(this.Ws[
1]<=1){E8=EK;EA=EK;}else{var Ac8=(EA-EK)%this.Ws[1];EA=(EK-this.Ws[1])+Ac8;E8=EK+
Ac8;if(EA<this.Gd[1])EA=this.Gd[1];if(E8>this.FQ[1])E8=this.FQ[1];}if((E8-EK)<=(
EK-EA))EK=E8;else EK=EA;if(EK!==this.Dy[1]){var Jb=EK-this.Dy[1];if(Jb>0)this.EO=
Math.sqrt((Jb*2)*this.Ac4)+20;if(Jb<0)this.EO=-Math.sqrt((-Jb*2)*this.Ac4)-20;this.
Afs=(400-(this.EO*this.EO))/(2*Jb);this.AoM=EK;}}else{var BAs=this.EO*this.EO;var
Jb=BAs/(2*this.Ac4);var EK=this.Dy[1];if(this.EO>0)EK=EK+(Jb|0);if(this.EO<0)EK=
EK-(Jb|0);if(EK>this.FQ[1])EK=this.FQ[1];else if(EK<this.Gd[1])EK=this.Gd[1];var
Bfd=EK;var E8=this.Gd[1];var EA=this.FQ[1];if(EK<E8)EA=this.Gd[1];else if(EK>EA)
E8=this.FQ[1];else if(this.Ws[1]<=1){E8=EK;EA=EK;}else{var Ac8=(EA-EK)%this.Ws[1
];EA=(EK-this.Ws[1])+Ac8;E8=EK+Ac8;if(EA<this.Gd[1])EA=this.Gd[1];if(E8>this.FQ[
1])E8=this.FQ[1];}if(this.EO>0){if(EA<=this.Dy[1])EK=E8;else if((EK-EA)<(E8-EK))
EK=EA;else EK=E8;}else if(E8>=this.Dy[1])EK=EA;else if((EK-EA)>(E8-EK))EK=E8;else
EK=EA;if(EK!==this.Dy[1]){Jb=EK-this.Dy[1];if(EK!==Bfd){var AiN=EK-Bfd;if(AiN>0)
this.EO=this.EO+Math.sqrt((AiN*2)*this.Ac4);if(AiN<0)this.EO=this.EO-Math.sqrt((-
AiN*2)*this.Ac4);}if(this.EO>0)this.EO=this.EO+20;if(this.EO<0)this.EO=this.EO-20;
this.Afs=(400-(this.EO*this.EO))/(2*Jb);this.AoM=EK;}else this.EO=0;}if(!!BN)this.
AlO=BN.Bt;if(!!Ip)this.AlO=Ip.Bt;this.AtK=this.AlO;this.AlQ=this.Dy[0];this.AlR=
this.Dy[1];this.BAt();return this;},X0:function(C9,BD,N$,ZX,AcJ,AcI){var B;if(!!
ZX&&(ZX!==this))return null;if(this.Bn>=33554432)return null;if((this.Bn>=16777216
)&&!(this.Bn&(4096<<BD)))return null;if(!this.AF4&&!!(AcI&0xC))return null;var Ay=
A.lb(C9,this.M);if(!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){var P7=A.aaI(C9);var Fi=Ca;
if(P7[0]<Ay[0])Fi=[Ay[0]-P7[0],Fi[1]];if(P7[0]>=Ay[2])Fi=[(Ay[2]-P7[0])-1,Fi[1]];
if(P7[1]<Ay[1])Fi=[Fi[0],Ay[1]-P7[1]];if(P7[1]>=Ay[3])Fi=[Fi[0],(Ay[3]-P7[1])-1];
return A._NewObject(C.Aum,0).Initialize(this,Fi);}return null;},A3m:function(){if(
!!this.timer){A.z9([this,this.L9],this.timer,0);this.timer=null;}},BAt:function(
){this.timer=A._GetAutoObject(A.acl.AdW);A.zV([this,this.L9],this.timer,0);},L9:
function(G){var B;if(!this.timer)return;var AtP=(this.timer.Bt-this.AlO)*0.001;var
AtQ=(this.timer.Bt-this.AtK)*0.001;var BAD=AtP*AtP;var BAE=AtQ*AtQ;var Aip=(this.
Afr*AtP)+this.EN;var Aiq=(this.Afs*AtQ)+this.EO;var Cy=[((((this.Afr*0.5)*BAD)+(
this.EN*AtP))+this.AlQ)|0,((((this.Afs*0.5)*BAE)+(this.EO*AtQ))+this.AlR)|0];if(
this.Xm&&(AtP>=0.5)){Cy=[this.AoL,Cy[1]];this.EN=0;this.Afr=0;this.AlQ=Cy[0];this.
Xm=false;}else if(this.Xm){var LD=1-Math.pow(1-(AtP/0.5),5);Cy=[(this.AlQ+((this.
AoL-this.AlQ)*LD))|0,Cy[1]];}if(this.Xn&&(AtQ>=0.5)){Cy=[Cy[0],this.AoM];this.EO=
0;this.Afs=0;this.AlR=Cy[1];this.Xn=false;}else if(this.Xn){var LD=1-Math.pow(1-(
AtQ/0.5),5);Cy=[Cy[0],(this.AlR+((this.AoM-this.AlR)*LD))|0];}if(((this.EN>0)&&(
Aip<0))||((this.EN<0)&&(Aip>0))){Aip=0;Cy=[this.Dy[0],Cy[1]];}if(((this.EO>0)&&(
Aiq<0))||((this.EO<0)&&(Aiq>0))){Aiq=0;Cy=[Cy[0],this.Dy[1]];}if(!this.Xm&&(Cy[0
]<this.Gd[0])){this.AlQ=Cy[0];this.AoL=this.Gd[0];this.AlO=this.timer.Bt;this.Xm=
true;}else if(!this.Xm&&(Cy[0]>this.FQ[0])){this.AlQ=Cy[0];this.AoL=this.FQ[0];this.
AlO=this.timer.Bt;this.Xm=true;}if(!this.Xn&&(Cy[1]<this.Gd[1])){this.AlR=Cy[1];
this.AoM=this.Gd[1];this.AtK=this.timer.Bt;this.Xn=true;}else if(!this.Xn&&(Cy[1
]>this.FQ[1])){this.AlR=Cy[1];this.AoM=this.FQ[1];this.AtK=this.timer.Bt;this.Xn=
true;}if(((!this.Xm&&!!this.EN)&&(Aip>-20))&&(Aip<20)){Cy=[this.AoL,Cy[1]];this.
EN=0;this.Afr=0;this.AlQ=Cy[0];}if(((!this.Xn&&!!this.EO)&&(Aiq>-20))&&(Aiq<20)){
Cy=[Cy[0],this.AoM];this.EO=0;this.Afs=0;this.AlR=Cy[1];}if(!A.aaX(Cy,this.Dy)){
this.A4_=A.abe(Cy,this.Dy);this.Dy=Cy;(B=this.Atv)?B[1].call(B[0],this):null;(B=
this.AFn)?B[1].call(B[0],this):null;}if(((!this.EN&&!this.EO)&&!this.Xm)&&!this.
Xn){this.A3m();this.Zm=false;(B=this.Y2)?B[1].call(B[0],this):null;}},ASN:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.Ws=E;},ASj:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A5Q)return;this.A5Q=E;if(E<(1e-007))E=1e-007;this.Ac4=
E*10000;},_Init:function(aArg){C.El._Init.call(this,aArg);this.__proto__=C.H2;this.
T=0x10011B;},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ6)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Atv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFn
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y2)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Sq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BJ={Ag:null,Lj:null,BK:null,DS:null,Apt:
0,Bt:0,A_d:0,Filter:148,CK:0,DJ:0,Bv:true,Down:false,AbZ:false,NB:false,Init:function(
aArg){var B;var CW=(C.O.isPrototypeOf(B=this.I)?B:null);if(!CW)throw new Error(Afe
);this.Ag=CW.AJN;CW.AJN=this;},GQ:function(CJ){var B;if(!!CJ&&CJ.Bii(this.Filter
)){this.Down=CJ.Down;this.CK=CJ.CK;this.DJ=CJ.DJ;this.Bt=CJ.Bt;this.NB=false;if(
CJ.Down){this.A_d=this.Apt;this.AbZ=this.Apt>0;if(this.AbZ)(B=this.DS)?B[1].call(
B[0],this):null;else(B=this.BK)?B[1].call(B[0],this):null;if(!this.NB)this.Apt=this.
Apt+1;return!this.NB;}if(!CJ.Down){this.AbZ=this.Apt>1;this.A_d=this.Apt-1;this.
Apt=0;(B=this.Lj)?B[1].call(B[0],this):null;return!this.NB;}}return false;},_Init:
function(aArg){this.__proto__=C.BJ;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lj)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Aum={Ce:null,Auo:0,Dy:A.wf,Initialize:function(Af,aOffset){this.Ce=Af;this.Dy=
aOffset;this.Auo=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Aum;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ce)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A60={Ag:null,CW:null,_Init:
function(aArg){this.__proto__=C.A60;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.CW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.AqO={Ns:null,extent:A.wg,A$:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.AqO;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ns)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.ADl={Aiz:A.wf,Aiy:A.wf,_Init:function(aArg
){C.AqO._Init.call(this,aArg);this.__proto__=C.ADl;},_className:"Core::LayoutLineContext"
};C.ADm={Az7:A.wf,Az6:A.wf,Aiz:A.wf,Aiy:A.wf,_Init:function(aArg){C.AqO._Init.call(
this,aArg);this.__proto__=C.ADm;},_className:"Core::LayoutQuadContext"};C.ANf={CW:
null,Ag:null,Rl:null,Ru:null,L7:null,Apq:null,_Init:function(aArg){this.__proto__=
C.ANf;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.CW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ru)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L7)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Apq)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUi={FF:null,B7:null,B6:null,BcP:false,
Bw_:function(){if(!this.FF)return;var Pb=this.FF;this.FF.O8=null;this.FF=null;A.
pe([this,this.A2w],this);Pb.A7r(this);},ByW:function(G){if(!!this.FF)return;if(!
this.B6)return;this.FF=this.B6;this.B6=this.B6.Ag;if(!!this.B6)this.B6.AH=null;else
this.B7=null;this.FF.Ag=null;this.BcP=true;this.FF.Sq(this);this.BcP=false;},Bzh:
function(G){A.pe([this,this.ByW],this);},Bzg:function(G){A.pe([this,this.Bzh],this
);},A2w:function(G){A.pe([this,this.Bzg],this);},Bgq:function(I9){if(!I9||!I9.O8
)return;if(I9.O8!==this)throw new Error(ZO);var BfH=false;if(this.FF===I9){this.
FF=null;BfH=true;A.pe([this,this.A2w],this);}else{if(!!I9.Ag)I9.Ag.AH=I9.AH;else
this.B7=I9.AH;if(!!I9.AH)I9.AH.Ag=I9.Ag;else this.B6=I9.Ag;I9.AH=null;I9.Ag=null;
}I9.O8=null;if(BfH)I9.A7q(this);},A_k:function(I9,A0m){if(!I9)return;if(!!I9.O8)
throw new Error(WS);I9.O8=this;if(A0m){I9.Ag=this.B6;if(!!this.B6)this.B6.AH=I9;
else this.B7=I9;this.B6=I9;}else{I9.AH=this.B7;if(!!this.B7)this.B7.Ag=I9;else this.
B6=I9;this.B7=I9;}if(!this.FF)A.pe([this,this.A2w],this);},_Init:function(aArg){
this.__proto__=C.AUi;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B6)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkA={O8:null,AH:null,Ag:
null,A7r:function(AsT){},A7q:function(AsT){},Sq:function(AsT){this.Amb();},Mf:function(
){if(!!this.O8&&(this.O8.FF===this))this.O8.Bw_();},Amb:function(){if(!!this.O8)
this.O8.Bgq(this);},AQq:function(){return!!this.O8&&(this.O8.FF===this);},_Init:
function(aArg){this.__proto__=C.AkA;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUg={As:null,AtM:
null,Sq:function(AsT){this.AtM.As=this.As;A.we(this.AtM,0);A.pe([this,this.ByT],
this);},ByT:function(G){this.AtM.As=null;this.AtM=null;this.As=null;this.Mf();},
_Init:function(aArg){C.AkA._Init.call(this,aArg);this.__proto__=C.AUg;},_Mark:function(
D){var B;C.AkA._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AtM)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.Aw2={_Init:function(){C.AUi._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahg={resource:null,K9:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahg;this.Init(aArg);A.h7++;},_Done:function(){this.K9();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Ms:null,timer:null,Bt:0,Period:1000,Vi:0,Bv:false,K9:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKc:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PK:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bv)this.AKc(this.Vi,E);},We:function(E){if(E<0)E=0;if(E===
this.Vi)return;this.Vi=E;if(this.Bv)this.AKc(E,this.Period);},Ar:function(E){if(
E===this.Bv)return;this.Bv=E;if(E)this.AKc(this.Vi,this.Period);else this.AKc(0,
0);this.Bt=this.AuR();},AuR:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bt=this.AuR();if(!this.
Period)this.Ar(false);(B=this.Ms)?B[1].call(B[0],this):null;},Aw0:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bv)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.K9();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ms)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bt={ATM:0,Avn:0
,AjB:0,GB:0,Ha:0,Year:0,Bcm:function(Afo,AZP){if(AZP)switch(Afo){case 1:return A.
aci.Bir;case 2:return A.aci.Bhj;case 3:return A.aci.BiK;case 4:return A.aci.Bf7;
case 5:return A.aci.BiO;case 6:return A.aci.Biu;case 7:return A.aci.Bit;case 8:return A.
aci.Bf9;case 9:return A.aci.Bnn;case 10:return A.aci.Bi8;case 11:return A.aci.Bi7;
case 12:return A.aci.BgN;default:return A.jV;}else switch(Afo){case 1:return A.aci.
ADf;case 2:return A.aci.AB1;case 3:return A.aci.ADr;case 4:return A.aci.AA0;case
5:return A.aci.ADu;case 6:return A.aci.ADh;case 7:return A.aci.ADg;case 8:return A.
aci.AA8;case 9:return A.aci.AFS;case 10:return A.aci.ADH;case 11:return A.aci.ADF;
case 12:return A.aci.ABL;default:return A.jV;}},Bck:function(BaW,AZP){if(AZP)switch(
BaW){case 1:return A.aci.BiT;case 2:return A.aci.BoJ;case 3:return A.aci.Bpp;case
4:return A.aci.Bou;case 5:return A.aci.Bhw;case 6:return A.aci.Bng;case 0:return A.
aci.Boh;default:return A.jV;}else switch(BaW){case 1:return A.aci.BiS;case 2:return A.
aci.BoI;case 3:return A.aci.Bpo;case 4:return A.aci.Bot;case 5:return A.aci.Bhv;
case 6:return A.aci.Bnf;case 0:return A.aci.Bog;default:return A.jV;}},Bcj:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JH:function(){var d=this.GB;var KY=this.Ha;var Da=this.Year-((
KY<=2)?1:0);var AyX=(((Da>=0)?Da:Da-399)/400)|0;var AlY=Da-(AyX*400);var UT=(((((
153*(KY+((KY>2)?-3:9)))+2)/5)|0)+d)-1;var AoI=(((AlY*365)+((AlY/4)|0))-((AlY/100
)|0))+UT;var P9=((AyX*146097)+AoI)-719468;return(((P9*86400)+(this.AjB*3600))+(this.
Avn*60))+this.ATM;},AE7:function(E){var B;E+=62162035200;if(E<0)E=0;var U7=Math.
trunc(E/86400)|0;var AyX=(((U7>=0)?U7:U7-146096)/146097)|0;var AoI=U7-(AyX*146097
);var AlY=((((AoI-((AoI/1460)|0))+((AoI/36524)|0))-((AoI/146096)|0))/365)|0;var Da=
AlY+(AyX*400);var UT=AoI-(((365*AlY)+((AlY/4)|0))-((AlY/100)|0));var A1U=(((5*UT
)+2)/153)|0;var d=(UT-((((153*A1U)+2)/5)|0))+1;var KY=A1U+((A1U<10)?3:-9);var BH=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Da+((
KY<=2)?1:0);this.T$(KY);this.Ll(d);this.Anc(BH+((BH<0)?24:0));this.Anf(P+((P<0)?
60:0));this.Ani(s+((s<0)?60:0));},Y3:function(){if(this.Ha===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Ha===4)||(this.Ha===6))||(this.Ha===9))||(this.Ha===11))return 30;else return 31;
},Bkg:function(){var B;var UT=this.AbC()-1;var As8=(6+this.Avz())%7;var AoK=((371+
As8)-UT)%7;if(this.Ha===12){var d=this.GB;if((d===31)&&(As8<3))return 0;if((d===
30)&&(As8<2))return 0;if((d===29)&&(As8<1))return 0;}if(AoK<=3)UT+=AoK;else UT-=(
7-AoK);if(UT<0){var d=this.GB;var KY=this.Ha;this.Year--;this.Ll(31);this.T$(12);
UT=this.AbC()-1;As8=(6+this.Avz())%7;AoK=((371+As8)-UT)%7;if(AoK<=3)UT+=AoK;else
UT-=AoK;this.Year++;this.Ll(d);this.T$(KY);}return(UT/7)|0;},AbC:function(){var B;
var d=this.GB;var KY=this.Ha;var Da=this.Year;var AfL=((!!!(Da%4)&&(!!(Da%100)||
!!!(Da%400)))?1:0);switch(KY){case 2:d+=31;break;case 3:d+=(59+AfL);break;case 4:
d+=(90+AfL);break;case 5:d+=(120+AfL);break;case 6:d+=(151+AfL);break;case 7:d+=(
181+AfL);break;case 8:d+=(212+AfL);break;case 9:d+=(243+AfL);break;case 10:d+=(273+
AfL);break;case 11:d+=(304+AfL);break;case 12:d+=(334+AfL);break;default:;}return d;
},Avz:function(){var B;var d=this.GB;var KY=this.Ha+((this.Ha>2)?-2:10);var Da=this.
Year-((this.Ha<=2)?1:0);var B2=(Da/100)|0;Da%=100;d+=((((((((26*KY)-2)/10)|0)+Da
)+((Da/4)|0))+((B2/4)|0))-(2*B2));if(d>=0)return d%7;else return(7-(-d%7))%7;},Ani:
function(E){if(E<0)E=0;if(E>59)E=59;this.ATM=E;},Anf:function(E){if(E<0)E=0;if(E>
59)E=59;this.Avn=E;},Anc:function(E){if(E<0)E=0;if(E>23)E=23;this.AjB=E;},Ll:function(
E){if(E<1)E=1;if(E>31)E=31;this.GB=E;},T$:function(E){if(E<1)E=1;if(E>12)E=12;this.
Ha=E;},Format:function(Im){var result=A.jV;var inx=0;while(!!(Im.charCodeAt(inx)||
0))if((Im.charCodeAt(inx)||0)===0x25){var Aaf=1;inx=inx+1;if((Im.charCodeAt(inx)||
0)===0x23){inx=inx+1;Aaf=0;}switch(Im.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GB,2*Aaf,10);break;case 0x48:result=result+A.abl(this.AjB,2*Aaf,10);break;
case 0x49:if(!(this.AjB%12))result=result+ZP;else result=result+A.abl(this.AjB%12
,2*Aaf,10);break;case 0x6D:result=result+A.abl(this.Ha,2*Aaf,10);break;case 0x4D:
result=result+A.abl(this.Avn,2*Aaf,10);break;case 0x70:if(this.AjB<12)result=result+
A.aci.BfN;else result=result+A.aci.BmG;break;case 0x53:result=result+A.abl(this.
ATM,2*Aaf,10);break;case 0x77:result=result+A.abl(this.Avz(),Aaf,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*Aaf,10);break;case 0x59:result=result+A.abl(
this.Year,4*Aaf,10);break;case 0x25:result=result+ZQ;break;case 0x6A:result=result+
A.abl(this.AbC(),3*Aaf,10);break;case 0x57:result=result+A.abl(this.Bkg(),2*Aaf,
10);break;case 0x61:result=result+this.Bck(this.Avz(),true);break;case 0x41:result=
result+this.Bck(this.Avz(),false);break;case 0x62:result=result+this.Bcm(this.Ha
,true);break;case 0x42:result=result+this.Bcm(this.Ha,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Im.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(AcK,Afo,Bvs,BvI,BvZ,Bwg){this.Year=AcK;this.
T$(Afo);this.Ll(Bvs);this.Anc(BvI);this.Anf(BvZ);this.Ani(Bwg);return this;},Initialize:
function(AhO){this.AE7(AhO);return this;},BgR:function(AhO){if(!AhO)return A._NewObject(
C.AnG,0).Initialize(this.JH());return A._NewObject(C.AnG,0).Initialize(this.JH()-
AhO.JH());},BnT:function(Ayg){if(!Ayg)return this;return A._NewObject(C.Bt,0).Initialize(
this.JH()-Ayg.JH());},J:function(Ayg){if(!Ayg)return this;return A._NewObject(C.
Bt,0).Initialize(this.JH()+Ayg.JH());},_Init:function(aArg){this.__proto__=C.Bt;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.AnG={AFP:0,ADy:0,ACJ:0,J8:0,JH:function(
){return(((this.J8*86400)+(this.ACJ*3600))+(this.ADy*60))+this.AFP;},AE7:function(
E){var AKo=1;this.J8=Math.trunc(E/86400)|0;if(E<0){E=-E;AKo=-1;}this.ACJ=AKo*(Math.
trunc(E/3600)%24|0);this.ADy=AKo*(Math.trunc(E/60)%60|0);this.AFP=AKo*(E%60|0);}
,Initialize2:function(Bvt,BvJ,Bv0,Bwj){this.J8=Bvt;this.ACJ=BvJ;this.ADy=Bv0;this.
AFP=Bwj;return this;},Initialize:function(AhO){this.AE7(AhO);return this;},_Init:
function(aArg){this.__proto__=C.AnG;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A_I={As:null,O8:null,Trigger:function(Bvn,A0m){var Pb=A._NewObject(C.AUg,0);
Pb.AtM=this;Pb.As=Bvn;this.O8.A_k(Pb,A0m);},_Init:function(aArg){this.__proto__=
C.A_I;this.O8=A._GetAutoObject(C.Aw2);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A_J={JD:null,Event:null,ARz:null,Ato:function(G){var B;if(
!this.Event)return;this.JD=this.Event.As;(B=this.ARz)?B[1].call(B[0],this):null;
this.JD=null;},Bk2:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.Ato],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.Ato],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A_J;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ARz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BEA={Dn:0x1,BBm:0x2,BCt:0x4,BEs:0x8,Bv:0x10,H1:0x20
,BCu:0x40,BDa:0x80,BCp:0x100,BCQ:0x200,BCd:0x400,BDO:0x800,Bh:0x1000,BEx:0x2000,
BDx:0x4000,BDy:0x8000,AaV:0x10000,BDw:0x20000,BDZ:0x40000,BB6:0x80000,BDG:0x100000
,BB0:0x200000};C.PD={BDP:0x1,BDQ:0x2,BBi:0x4,BBj:0x8,BBk:0x10,BBh:0x20};C.AgA={None:
0,BEo:1,BBE:2,BCV:3,BDT:4,BEp:5,BEq:6,BBF:7,BBG:8,BCX:9,BCW:10,BDV:11,BDU:12};C.
Auq={None:0,BEm:1,Left:2,BBC:3,Zr:4,A4G:5,BEn:6,Right:7,BBD:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BDR={BEG:0x1,BED:0x2,BEE:0x4,BEF:
0x8,BCZ:0x10,BCw:0x20};
C._Init=function(){C.AjV.__proto__=C.Ce;C.Zc.__proto__=C.Ce;C.El.__proto__=C.Ce;C.
O.__proto__=C.El;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AQH.__proto__=
C.Event;C.Aul.__proto__=C.Event;C.AdS.__proto__=C.Event;C.Aqc.__proto__=C.Event;
C.Z.__proto__=C.El;C.CI.__proto__=C.O;C.Ds.__proto__=C.O;C.Bk.__proto__=C.Zc;C.H2.
__proto__=C.El;C.ADl.__proto__=C.AqO;C.ADm.__proto__=C.AqO;C.AUg.__proto__=C.AkA;
};C._ReInit=function(){var B;if((B=C.Aw2._this))B._ReInit(),C.Aw2._ReInit.call(B
);};C.DB=function(D){var B;if((B=C.Aw2._this)&&(B._cycle!=D))B._Done(C.Aw2._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */