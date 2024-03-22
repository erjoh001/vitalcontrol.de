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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var A=index;var C={};
var Cc=[0,0];var BF=[0,0,0,0];var E7="The view does not belong to this group";var
Hp=[1000,740];var IS="The dialog component is already presented";var Ir="The dialog component is actually not presented";
var O1="No fader to perform the fade-in/out operation";var P3="Trying to use the same fader twice";
var P4="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Fe="View is not in this group";var Lu="Sibling view does not belong to the group";
var P5="No view to remove";var JZ="No view to add";var N_="View already in a group";
var P6="Recursive invalidate during active update cycle.";var MG=[-8,-8,9,9];var
S8="No group to end the modal state.";var US="The group is not modal.";var Z8="No group to obtain the modal state.";
var W5="The group serves already as the \'virtual keyboard\'.";var Is="The group is already modal.";
var UT="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z9="The method SwitchToDialog() is not available in Core::VerticalList.";
var W6="The method DismissDialog() is not available in Core::VerticalList.";var Z_=
"The method PresentDialog() is not available in Core::VerticalList.";var W7="The method FadeGroup() is not available in Core::VerticalList.";
var Z$="The method RestackBehind() is not available in Core::VerticalList.";var Aaa=
"The method RestackTop() is not available in Core::VerticalList.";var UU="The method Restack() is not available in Core::VerticalList.";
var W8="The method Remove() is not available in Core::VerticalList.";var P7="The method AddBehind() is not available in Core::VerticalList.";
var Aab="The method Add() is not available in Core::VerticalList.";var O2="The Slide Touch Handler:";
var Rl="is already connected with a view.";var W9="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W_=[0,0,170,120];var W$="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Xa="The method DismissDialog() is not available in Core::HorizontalList.";var
Aac="The method PresentDialog() is not available in Core::HorizontalList.";var Xb=
"The method FadeGroup() is not available in Core::HorizontalList.";var Xc="The method RestackBehind() is not available in Core::HorizontalList.";
var S9="The method RestackTop() is not available in Core::HorizontalList.";var UV=
"The method Restack() is not available in Core::HorizontalList.";var UW="The method Remove() is not available in Core::HorizontalList.";
var AcQ="The method AddBehind() is not available in Core::HorizontalList.";var S_=
"The method Add() is not available in Core::HorizontalList.";var Aad=[0,0,1,1];var
Afz="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Aae="Trying to cancel a task not belonging to this queue!";var Xd="Trying to enqueue a task twice!";
var Aaf="12";var Aag="%";
C.Ch={Ah:null,AJ:null,Ab:null,Eu:null,U:0x103,JX:0,PJ:0x14,AtR:function(BI,Ah_){}
,Ar8:function(E){if(this.JX===E)return;this.JX=E;if(!!this.Ab){var Ai9=this.Ah;var
Ha=0;while(!!Ai9&&(E>Ai9.JX)){Ai9=Ai9.Ah;Ha=Ha+1;}Ai9=this.AJ;while(!!Ai9&&(E<Ai9.
JX)){Ai9=Ai9.AJ;Ha=Ha-1;}if(!!Ha)this.Ab.JV(this,Ha);}},AZ:function(E){var B;var
Ha=E^this.PJ;if(!Ha)return;this.PJ=E;if(!!this.Eu&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JG],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eu&&((this.U&0x400)===0x400)){this.Eu.Ny.U=this.Eu.
Ny.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JG],this);}},Il:function(
){var B0=this.Ab;while(!!B0){var IC=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IC)return IC;
B0=B0.Ab;}return null;},Kl:function(CZ,aClip,aOffset,Ci,aBlend){},GetClipping:function(
){return this.GetExtent();},G2:function(CN){return null;},Ym:function(Da,BG,Ob,Aan
,Ac5,Ac4){return null;},AuB:function(Da){return Da;},AuL:function(BI,MK){return Cc;
},Anl:function(aOffset,Ato){},GetExtent:function(){return BF;},Cs:function(Rt,U5
){var B;if(((this.U&0x200)===0x200))Rt=Rt&~0x400;var A2F=(this.U&~U5)|Rt;var Xy=
A2F^this.U;this.U=A2F;if(!!this.Ab&&!!(Xy&0x14)){var BcO=((this.U&0x14)===0x14);
if(BcO&&!this.Ab.AV)this.Ab.Bb(this);if(!BcO&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACK(this,0x14));}if(!!this.Ab&&!!(Xy&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Eu&&!!this.Ab)&&((A2F&0x400)===0x400))&&((Xy&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JG],this);}if(!!this.Ab&&((Xy&0x400
)===0x400)){this.Eu=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JG],this);}if(((((Xy&0x100000)===0x100000)&&((U5&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cs(0x0,0x10);if(((((
Xy&0x100000)===0x100000)&&((Rt&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cs(0x10,0x0);if(((((Xy&0x200000)===0x200000)&&((U5&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cs(
0x10,0x0);if((((((Xy&0x200000)===0x200000)&&((Rt&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hb.C1!==this)))
)this.Cs(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ch;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Akk={EC:A.wf,Es:A.wf
,AtR:function(BI,Ah_){var At=A._NewObject(C.AD3,0);this.Eu=null;At.extent=this.getExtent(
);At.Bd=BI;At.Ny=Ah_;At.AiW=this.Es;At.AiX=this.EC;this.Eu=At;},AuL:function(BI,
MK){var B;var EZ=this.PJ;var At=(C.AD3.isPrototypeOf(B=this.Eu)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var J9=[BI[
2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=y2-y1;var tmp;if(!MK){var NB=[(B=At.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NB[0]!==J9[0]){var HU=((EZ&
0x4)===0x4);var HV=((EZ&0x8)===0x8);var Qr=((EZ&0x1)===0x1);if(!HU&&(Qr||!HV))x1=((
x1*J9[0])/NB[0])|0;if(!HV&&(Qr||!HU)){x2=x2-At.Bd[0];x2=((x2*J9[0])/NB[0])|0;x2=
x2-J9[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];if(!Qr){if(HU&&!HV)x2=x1+BY;
else if(!HU&&HV)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J9[1]){var HW=((EZ&0x10)===0x10);var
HT=((EZ&0x20)===0x20);var Qs=((EZ&0x2)===0x2);if(!HW&&(Qs||!HT))y1=((y1*J9[1])/NB[
1])|0;if(!HT&&(Qs||!HW)){y2=y2-At.Bd[1];y2=((y2*J9[1])/NB[1])|0;y2=y2-J9[1];}else
y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qs){if(HW&&!HT)y2=y1+BK;else if(!HW&&
HT)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-At.Bd[3];y1=y1+
BI[1];y2=y2+BI[3];}}else{switch(MK){case 3:{x1=BI[0];x2=x1+BY;}break;case 4:{x2=
BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;}break;case 2:{y2=BI[3];y1=y2-BK;
}break;default:;}if((MK===3)||(MK===4)){var HW=((EZ&0x10)===0x10);var HT=((EZ&0x20
)===0x20);var Qs=((EZ&0x2)===0x2);if(Qs){y1=BI[1];y2=BI[3];}else if(HW&&!HT){y1=
BI[1];y2=y1+BK;}else if(HT&&!HW){y2=BI[3];y1=y2-BK;}else{y1=BI[1]+((((BI[3]-BI[1
])-BK)/2)|0);y2=y1+BK;}}if((MK===1)||(MK===2)){var HU=((EZ&0x4)===0x4);var HV=((
EZ&0x8)===0x8);var Qr=((EZ&0x1)===0x1);if(Qr){x1=BI[0];x2=BI[2];}else if(HU&&!HV
){x1=BI[0];x2=x1+BY;}else if(HV&&!HU){x2=BI[2];x1=x2-BY;}else{x1=BI[0]+((((BI[2]-
BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BK=y2-y1;if(
At.AiX[0]<At.AiW[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.AiX[1]<At.AiW[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Es=[x1,y1];this.EC=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Eu=At;}return[BY,BK];},Anl:function(aOffset,Ato){if(Ato){this.Es=A.abf(this.Es,aOffset
);this.EC=A.abf(this.EC,aOffset);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.
abf(this.EC,aOffset));}},GetExtent:function(){if(!!this.Eu&&this.Eu.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Es[0];var y1=this.Es[
1];var x2=this.EC[0];var y2=this.EC[1];var BY=x2-x1;var BK=y2-y1;var tmp;if(BY<0
)BY=-BY;if(BK<0)BK=-BK;if(BY>=BK){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BK>=BY){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JG],this);}},DM:function(
E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.Es=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JG],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.
Akk;},_className:"Core::LineView"};C.ZF={Kv:A.wf,MC:A.wf,EC:A.wf,Es:A.wf,AtR:function(
BI,Ah_){var At=A._NewObject(C.AD4,0);this.Eu=null;At.extent=this.GetExtent();At.
Bd=BI;At.Ny=Ah_;At.AiW=this.Es;At.AiX=this.EC;At.AAN=this.MC;At.AAO=this.Kv;this.
Eu=At;},AuL:function(BI,MK){var B;var EZ=this.PJ;var At=(C.AD4.isPrototypeOf(B=this.
Eu)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var J9=[BI[2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=y2-y1;if(!MK){var
NB=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(NB[0]!==J9[0]){
var HU=((EZ&0x4)===0x4);var HV=((EZ&0x8)===0x8);var Qr=((EZ&0x1)===0x1);if(!HU&&(
Qr||!HV))x1=((x1*J9[0])/NB[0])|0;if(!HV&&(Qr||!HU)){x2=x2-At.Bd[0];x2=((x2*J9[0]
)/NB[0])|0;x2=x2-J9[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];if(!Qr){if(HU&&
!HV)x2=x1+BY;else if(!HU&&HV)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J9[1]){var HW=((EZ&0x10
)===0x10);var HT=((EZ&0x20)===0x20);var Qs=((EZ&0x2)===0x2);if(!HW&&(Qs||!HT))y1=((
y1*J9[1])/NB[1])|0;if(!HT&&(Qs||!HW)){y2=y2-At.Bd[1];y2=((y2*J9[1])/NB[1])|0;y2=
y2-J9[1];}else y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qs){if(HW&&!HT)y2=y1+BK;
else if(!HW&&HT)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=y1+BK;}}}else{y2=y2-
At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MK){case 3:{x1=BI[0];x2=x1+BY;}break;
case 4:{x2=BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;}break;case 2:{y2=BI[
3];y1=y2-BK;}break;default:;}if((MK===3)||(MK===4)){var HW=((EZ&0x10)===0x10);var
HT=((EZ&0x20)===0x20);var Qs=((EZ&0x2)===0x2);if(Qs){y1=BI[1];y2=BI[3];}else if(
HW&&!HT){y1=BI[1];y2=y1+BK;}else if(HT&&!HW){y2=BI[3];y1=y2-BK;}else{y1=BI[1]+((((
BI[3]-BI[1])-BK)/2)|0);y2=y1+BK;}}if((MK===1)||(MK===2)){var HU=((EZ&0x4)===0x4);
var HV=((EZ&0x8)===0x8);var Qr=((EZ&0x1)===0x1);if(Qr){x1=BI[0];x2=BI[2];}else if(
HU&&!HV){x1=BI[0];x2=x1+BY;}else if(HV&&!HU){x2=BI[2];x1=x2-BY;}else{x1=BI[0]+((((
BI[2]-BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BK=(
y2-y1)-1;var AiA=At.extent[0];var AiC=At.extent[1];var Af0=(At.extent[2]-AiA)-1;
var AfZ=(At.extent[3]-AiC)-1;if(!Af0)Af0=1;if(!AfZ)AfZ=1;if(((this.U&0x100)===0x100
)){this.Es=[x1+((((At.AiW[0]-AiA)*BY)/Af0)|0),y1+((((At.AiW[1]-AiC)*BK)/AfZ)|0)];
this.EC=[x1+((((At.AiX[0]-AiA)*BY)/Af0)|0),y1+((((At.AiX[1]-AiC)*BK)/AfZ)|0)];this.
MC=[x1+((((At.AAN[0]-AiA)*BY)/Af0)|0),y1+((((At.AAN[1]-AiC)*BK)/AfZ)|0)];this.Kv=[
x1+((((At.AAO[0]-AiA)*BY)/Af0)|0),y1+((((At.AAO[1]-AiC)*BK)/AfZ)|0)];}else{this.
DM([x1+((((At.AiW[0]-AiA)*BY)/Af0)|0),y1+((((At.AiW[1]-AiC)*BK)/AfZ)|0)]);this.DC([
x1+((((At.AiX[0]-AiA)*BY)/Af0)|0),y1+((((At.AiX[1]-AiC)*BK)/AfZ)|0)]);this.Ks([x1+((((
At.AAN[0]-AiA)*BY)/Af0)|0),y1+((((At.AAN[1]-AiC)*BK)/AfZ)|0)]);this.JR([x1+((((At.
AAO[0]-AiA)*BY)/Af0)|0),y1+((((At.AAO[1]-AiC)*BK)/AfZ)|0)]);this.Eu=At;}return[BY+
1,BK+1];},Anl:function(aOffset,Ato){if(Ato){this.Es=A.abf(this.Es,aOffset);this.
EC=A.abf(this.EC,aOffset);this.MC=A.abf(this.MC,aOffset);this.Kv=A.abf(this.Kv,aOffset
);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.abf(this.EC,aOffset));this.Ks(
A.abf(this.MC,aOffset));this.JR(A.abf(this.Kv,aOffset));}},GetExtent:function(){
if(!!this.Eu&&this.Eu.isEmpty)return BF;var x1=this.Es[0];var y1=this.Es[1];var x2=
this.MC[0];var y2=this.MC[1];if((((this.Kv[0]!==x1)||(this.EC[1]!==y1))||(this.EC[
0]!==x2))||(this.Kv[1]!==y2)){if(this.EC[0]<x1)x1=this.EC[0];if(this.MC[0]<x1)x1=
this.MC[0];if(this.Kv[0]<x1)x1=this.Kv[0];if(this.EC[1]<y1)y1=this.EC[1];if(this.
MC[1]<y1)y1=this.MC[1];if(this.Kv[1]<y1)y1=this.Kv[1];if(this.Es[0]>x2)x2=this.Es[
0];if(this.EC[0]>x2)x2=this.EC[0];if(this.Kv[0]>x2)x2=this.Kv[0];if(this.Es[1]>y2
)y2=this.Es[1];if(this.EC[1]>y2)y2=this.EC[1];if(this.Kv[1]>y2)y2=this.Kv[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JR:function(E){var B;if(A.aaX(E,this.Kv))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Kv=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JG],this);}},Ks:function(E){var B;if(A.aaX(E,
this.MC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Eu=null;this.MC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JG],this);}},DC:function(
E){var B;if(A.aaX(E,this.EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JG],this);}},DM:function(E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Es=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JG],this);}},AQ4:function(KZ){var HC=A.abi(4,
A.wf,null);var O=0;var If=3;var A1$=false;var A2a=false;HC.Set(0,this.Es);HC.Set(
1,this.EC);HC.Set(2,this.MC);HC.Set(3,this.Kv);while(O<4){var Bgx=HC.Get(O)[0];var
ALp=HC.Get(O)[1];var BCh=HC.Get(If)[0];var A4m=HC.Get(If)[1];if(((ALp>KZ[1])!==(
A4m>KZ[1]))||((ALp<KZ[1])!==(A4m<KZ[1]))){var Eo=((((BCh-Bgx)*(KZ[1]-ALp))/(A4m-
ALp))|0)+Bgx;if(KZ[0]>Eo)A1$=!A1$;if(KZ[0]<Eo)A2a=!A2a;}If=O;O=O+1;}return A1$||
A2a;},BiX:function(){return((((this.Es[0]===this.Kv[0])&&(this.EC[0]===this.MC[0
]))&&(this.Es[1]===this.EC[1]))&&(this.MC[1]===this.Kv[1]))||((((this.Es[0]===this.
EC[0])&&(this.MC[0]===this.Kv[0]))&&(this.Es[1]===this.Kv[1]))&&(this.EC[1]===this.
MC[1]));},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.ZF;},
_className:"Core::QuadView"};C.Et={M:A.wg,AtR:function(BI,Ah_){var At=A._NewObject(
C.Arn,0);At.extent=this.M;At.Bd=BI;At.Ny=Ah_;this.Eu=At;},AuL:function(BI,MK){var
B;var EZ=this.PJ;var At=this.Eu;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var J9=[BI[2]-BI[0],BI[3]-BI[1]];var BY=x2-x1;var BK=
y2-y1;if(!MK){var NB=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];
if(NB[0]!==J9[0]){var HU=((EZ&0x4)===0x4);var HV=((EZ&0x8)===0x8);var Qr=((EZ&0x1
)===0x1);if(!HU&&(Qr||!HV))x1=((x1*J9[0])/NB[0])|0;if(!HV&&(Qr||!HU)){x2=x2-At.Bd[
0];x2=((x2*J9[0])/NB[0])|0;x2=x2-J9[0];}else x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[
2];if(!Qr){if(HU&&!HV)x2=x1+BY;else if(!HU&&HV)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-At.Bd[2];x1=x1+BI[0];x2=x2+BI[2];}if(NB[1]!==J9[1
]){var HW=((EZ&0x10)===0x10);var HT=((EZ&0x20)===0x20);var Qs=((EZ&0x2)===0x2);if(
!HW&&(Qs||!HT))y1=((y1*J9[1])/NB[1])|0;if(!HT&&(Qs||!HW)){y2=y2-At.Bd[1];y2=((y2
*J9[1])/NB[1])|0;y2=y2-J9[1];}else y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];if(!Qs
){if(HW&&!HT)y2=y1+BK;else if(!HW&&HT)y1=y2-BK;else{y1=y1+((((y2-y1)-BK)/2)|0);y2=
y1+BK;}}}else{y2=y2-At.Bd[3];y1=y1+BI[1];y2=y2+BI[3];}}else{switch(MK){case 3:{x1=
BI[0];x2=x1+BY;}break;case 4:{x2=BI[2];x1=x2-BY;}break;case 1:{y1=BI[1];y2=y1+BK;
}break;case 2:{y2=BI[3];y1=y2-BK;}break;default:;}if((MK===3)||(MK===4)){var HW=((
EZ&0x10)===0x10);var HT=((EZ&0x20)===0x20);var Qs=((EZ&0x2)===0x2);if(Qs){y1=BI[
1];y2=BI[3];}else if(HW&&!HT){y1=BI[1];y2=y1+BK;}else if(HT&&!HW){y2=BI[3];y1=y2-
BK;}else{y1=BI[1]+((((BI[3]-BI[1])-BK)/2)|0);y2=y1+BK;}}if((MK===1)||(MK===2)){var
HU=((EZ&0x4)===0x4);var HV=((EZ&0x8)===0x8);var Qr=((EZ&0x1)===0x1);if(Qr){x1=BI[
0];x2=BI[2];}else if(HU&&!HV){x1=BI[0];x2=x1+BY;}else if(HV&&!HU){x2=BI[2];x1=x2-
BY;}else{x1=BI[0]+((((BI[2]-BI[0])-BY)/2)|0);x2=x1+BY;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eu=At;}return[x2-x1,y2-y1];},Anl:function(aOffset,Ato){if(Ato)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JG],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.
__proto__=C.Et;},_className:"Core::RectView"};C.P={B9:null,B_:null,AKk:null,FD:null
,Hb:null,Xz:null,ApT:null,AV:null,G7:255,AzE:0,AzH:0,AzG:0,AzF:0,Init:function(aArg
){this.Am();},Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;Ci=((Ci+1)*this.G7)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FD||(CZ.C1===this))this.BcD(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ci,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ci&0xFF)<<24);this.FD.Update();CZ.A5x(aClip,this.FD,0,A.abh(this.M,aOffset),Cc,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FD)return Az;
Az=[].concat(Az[0]-this.AzF,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzH);Az=A.abN(
Az,Az[2]+this.AzG);Az=[].concat(Az.slice(0,3),Az[3]+this.AzE);if(((this.U&0x80000
)===0x80000)){var Ap6=BF;var X;for(X=this.B9;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap6=
A.wC(Ap6,X.GetClipping());Az=A.wC(Az,A.abh(Ap6,this.M.slice(0,2)));}return Az;},
Ym:function(Da,BG,Ob,Aan,Ac5,Ac4){var B;var X=this.B_;var Apm=null;var AE=BF;var
J_=null;var A2u=!!this.Xz&&(!!this.Xz.FP||!!this.Xz.B9);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac5){X=Ac5;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J_){J_=X.
AJ;while(!!J_&&!((J_.U&0x200)===0x200))J_=J_.AJ;if(!!J_)AE=A.lb(Da,J_.GetExtent(
));else AE=BF;}if(J_===X){J_=null;AE=BF;}if((!!Aan&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hb.C1===X)&&!A2u))
)){var extent=X.GetExtent();var AJO=Aan;var Ao9=null;if(AJO===X)AJO=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao9=X.Ym(AE
,BG,Ob,AJO,Ac5,Ac4);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aan===
X))Ao9=X.Ym(Da,BG,Ob,AJO,Ac5,Ac4);X=X.AJ;if(!!Ao9){if(!Apm||((Ao9.AuW<Apm.AuW)&&(
Ao9.AuW>=0)))Apm=Ao9;if(!Ao9.AuW)X=null;}}else X=X.AJ;Ac5=null;}return Apm;},AuB:
function(Da){var B;var F;var X=this.B9;var LB=BF;var AAH=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At3=(C.Y.isPrototypeOf(
X)?X:null);LB=A.lb(Da,At3.M);AAH=((At3.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAH){var AE=A.lb(X.GetClipping(),LB);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuB(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuB(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cs:function(Rt,U5){var B;
var Tn=this.U;if(((!!this.Ab&&!!!this.FD)&&((this.U&0x80001)===0x80001))&&((U5&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Et.Cs.call(this,Rt,U5);if((((!!this.
Ab&&!!!this.FD)&&((this.U&0x1)===0x1))&&((Rt&0x80000)===0x80000))&&!((Tn&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xy=this.U^Tn;if(!!this.AV&&((Xy&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cs(0x40,0x0);else this.AV.Cs(0x0
,0x40);}if(!!this.Hb&&((Xy&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hb.C1.
U&0x14)===0x14))this.Hb.C1.Cs(0x40,0x0);else this.Hb.C1.Cs(0x0,0x40);}if(((Xy&0x10
)===0x10)){var X;for(X=this.B9;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hb.C1===X)))X.Cs(Rt&0x10,U5&
0x10);}if(!!Xy){this.U=this.U|0x8000;A.pe([this,this.ABm],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var Al1=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKs=[
E[2]-E[0],E[3]-E[1]];var Ap2=!A.aaX(Al1,AKs);if(Ap2&&!!this.FD){this.FD.ArT(AKs);
A.we(this,0);A.we(this.FD,0);}C.Et.H.call(this,E);if((Ap2&&(Al1[0]>0))&&(Al1[1]>
0)){var Bd=[].concat(Cc,Al1);var X=this.B9;while(!!X){if((!X.Eu&&(X.PJ!==0x14))&&
!((X.U&0x400)===0x400))X.AtR(Bd,null);X=X.Ah;}}if(Ap2){this.U=this.U|0x5000;A.pe([
this,this.ABm],this);}},A3B:function(CN){var Bdy=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKk;if(!Bdy)return null;while(!!D5&&(!D5.Bw||!D5.G2(Bdy)))D5=D5.
Ah;return D5;},BB3:function(G){if(!!this.FD){this.FD.C1=this;var AE=A.abg(this.AuB(
A.abh(this.FD.QK,this.M.slice(0,2))),this.M.slice(0,2));this.FD.Avd(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BcD(this.FD,AE,Cc,255,true);this.FD.
C1=null;}},BcD:function(CZ,aClip,aOffset,Ci,aBlend){var B;var X=this.B9;var LB=BF;
var AAH=true;this.BhT(CZ,aClip,aOffset,Ci,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At3=(C.Y.isPrototypeOf(X)?X:null);AAH=((At3.U&0x1)===0x1);LB=aClip;if(!((
At3.U&0x80000)===0x80000))LB=A.lb(LB,A.abh(At3.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAH){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LB
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kl(CZ,AE,aOffset,Ci,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kl(CZ,AE,aOffset,Ci,aBlend);}}X=X.Ah;}this.BhW(CZ,aClip,aOffset,Ci,aBlend);},Bfw:
function(){var B;var A14=((this.U&0x1000)===0x1000);var AiI=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aax=false;var Adl=BF;var K1=BF;var Aay=Cc;var AtN=0;var AtO=0;
var AtM=0;var Qk=0;var X=this.B_;var J_=null;var AlT=null;while(!!X){if(((X.U&0x800
)===0x800)){Aax=true;X.U=X.U&~0x800;}if(Aax&&((X.U&0x200)===0x200)){Aax=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgY)X.U=X.U|0x1000;}X=X.AJ;}Aax=false;X=this.B9;
if(A14){this.U=this.U&~0x1000;A14=!((AiI[0]>=AiI[2])||(AiI[1]>=AiI[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlT&&(AtM!==Qk)){var AdJ=X;var AKO=0;var AA3=Adl[2]-
Adl[0];var Aze=Adl[3]-Adl[1];var AJE=0;var Aqb=Cc;do if(((AdJ.U&0x200)===0x200))
AdJ=null;else if(((AdJ.U&0x401)===0x401)){Aqb=[(B=AdJ.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qk===3)||(Qk===4))AA3=AA3-Aqb[0];if((Qk===1)||(Qk===2))Aze=Aze-Aqb[1];
if(!AlT||((AA3>=0)&&(Aze>=0))){AlT=AdJ;AdJ=AdJ.Ah;if((Qk===3)||(Qk===4)){AA3=AA3-
AtN;if(Aqb[1]>AKO)AKO=Aqb[1];}if((Qk===1)||(Qk===2)){Aze=Aze-AtO;if(Aqb[0]>AJE)AJE=
Aqb[0];}}else AdJ=null;}else AdJ=AdJ.Ah;while(!!AdJ);if(!AlT)AlT=J_;K1=Adl;switch(
AtM){case 9:case 11:K1=[].concat(K1.slice(0,3),K1[1]+AKO);break;case 10:case 12:
K1=A.abP(K1,K1[3]-AKO);break;case 5:case 7:K1=A.abN(K1,K1[0]+AJE);break;case 6:case
8:K1=[].concat(K1[2]-AJE,K1.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eu&&(X.Eu.Ny!==J_))X.Eu=null;if((!X.Eu&&Aax)&&((X.PJ!==0x14)||!!Qk))X.
AtR(K1,J_);}if(!!X.Eu){if(A14&&!((X.U&0x400)===0x400))X.AuL(AiI,0);if(Aax&&((X.U&
0x400)===0x400)){var C3=X.AuL(A.abh(K1,Aay),Qk);if(((X.U&0x1)===0x1)){var Bq=Cc;
switch(Qk){case 3:Bq=[C3[0]+AtN,Bq[1]];break;case 4:Bq=[-C3[0]-AtN,Bq[1]];break;
case 1:Bq=[Bq[0],C3[1]+AtO];break;case 2:Bq=[Bq[0],-C3[1]-AtO];break;default:;}Aay=
A.abf(Aay,Bq);}}}if(((X.U&0x200)===0x200)){if(Aax)A.pe(J_.El,J_);Aax=((X.U&0x1000
)===0x1000);J_=(C.Y.isPrototypeOf(X)?X:null);if(Aax){X.U=X.U&~0x1000;AtM=J_.AgY;
Qk=AtM;Adl=A.abh(J_.M,J_.Br);K1=Adl;Aay=Cc;AtN=J_.Space+J_.AUI;AtO=J_.Space;Aax=
!((Adl[0]>=Adl[2])||(Adl[1]>=Adl[3]));AlT=null;switch(AtM){case 9:case 10:Qk=3;break;
case 11:case 12:Qk=4;break;case 5:case 6:Qk=1;break;case 7:case 8:Qk=2;break;default:;
}}if(Aax)this.Bj(J_.M);}if(X===AlT){switch(AtM){case 9:case 11:Aay=[0,(Aay[1]+(K1[
3]-K1[1]))+AtO];break;case 10:case 12:Aay=[0,(Aay[1]-(K1[3]-K1[1]))-AtO];break;case
5:case 7:Aay=[(Aay[0]+(K1[2]-K1[0]))+AtN,0];break;case 6:case 8:Aay=[(Aay[0]-(K1[
2]-K1[0]))-AtN,0];break;default:;}AlT=null;}X=X.Ah;}if(Aax)A.pe(J_.El,J_);this.U=
this.U&~0x2000;this.Bl([AiI[2]-AiI[0],AiI[3]-AiI[1]]);},JG:function(G){A.pe([this
,this.ABm],this);},ABm:function(G){var B;var BB$=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bfw();}if(((this.U&0x8000)===
0x8000)||BB$){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E7);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cs(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cs(0x60,0x0);else E.Cs(0x20
,0x0);}},BaS:function(Aq){this.Bb(Aq);},ASg:function(){return!!this.FD;},ArM:function(
E){var B;if(!!this.FD===E)return;if(!E){this.FD.AEp=null;this.FD.ArT(Cc);this.FD=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FD=A._NewObject(A.Graphics.Canvas,0);this.FD.ArT([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FD.AEp=[this,this.BB3];}A.we(this,0);},A8l:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0
,0x100000);},Ds:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G7)return;
this.G7=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},AZ6:
function(Aq){this.Ds(Aq);},Aj:function(E){if(E)this.Cs(0x400,0x0);else this.Cs(0x0
,0x400);},Bll:function(E){if(E)this.Cs(0x2,0x0);else this.Cs(0x0,0x2);},Fo:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cs(0x1,0x0);else this.
Cs(0x0,0x1);},ExtendClipping:function(AoJ,AoK,AoL,AoI){var B;var Ay7=this.M;var Rz=
Ay7;if(AoJ<0)AoJ=0;if(AoJ>255)AoJ=255;if(AoK<0)AoK=0;if(AoK>255)AoK=255;if(AoL<0
)AoL=0;if(AoL>255)AoL=255;if(AoI<0)AoI=0;if(AoI>255)AoI=255;Rz=[].concat(Rz[0]-(
Math.max(AoJ,this.AzF)&0xFF),Rz.slice(1,4));Rz=A.abN(Rz,Rz[2]+(Math.max(AoK,this.
AzG)&0xFF));Rz=A.abP(Rz,Rz[1]-(Math.max(AoL,this.AzH)&0xFF));Rz=[].concat(Rz.slice(
0,3),Rz[3]+(Math.max(AoI,this.AzE)&0xFF));if(AoJ!==this.AzF){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FD)&&!((this.U&0x80000)===0x80000)){var Az=Rz;Az=A.abN(Az
,Ay7[0]);this.Ab.Bj(Az);}this.AzF=AoJ&0xFF;}if(AoK!==this.AzG){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FD)&&!((this.U&0x80000)===0x80000)){var Az=Rz;Az=[].
concat(Ay7[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzG=AoK&0xFF;}if(AoL!==this.AzH
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FD)&&!((this.U&0x80000)===0x80000
)){var Az=Rz;Az=[].concat(Az.slice(0,3),Ay7[1]);this.Ab.Bj(Az);}this.AzH=AoL&0xFF;
}if(AoI!==this.AzE){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FD)&&!((this.
U&0x80000)===0x80000)){var Az=Rz;Az=A.abP(Az,Ay7[3]);this.Ab.Bj(Az);}this.AzE=AoI&
0xFF;}},BhW:function(CZ,aClip,aOffset,Ci,aBlend){},BhT:function(CZ,aClip,aOffset
,Ci,aBlend){},GetMaximalSize:function(){return Hp;},GetMinimalSize:function(){return Cc;
},AUP:function(It,Oa,Xj,Tc,Td,Ah$,O7,Rs,Lz,Lx,Ly){var B;if(!this.Hb){this.AkP(It
,Oa,Xj,Tc,Td,null,null,Lz,Lx,Ly);return;}var Al0=this.Hb;var JD=Al0.Ah;if(((It.U&
0x10000)===0x10000)&&(this.Hb.C1!==It))throw new Error(IS);var Adr=A._NewObject(
C.ANR,0);var RB=Al0.RB;var RK=null;var Mc=null;if(!!JD){RK=JD.RK;Mc=JD.Mc;}if(!!
JD&&!!Al0.ApS)RK=Al0.ApS;if(!!JD&&!!O7)Mc=O7;if(!!Ah$)RB=Ah$;if(!Oa)Oa=A._GetAutoObject(
A.acl.AsF);if(!Xj)Xj=Oa;if(!Td)Td=Tc;if(!Tc)Tc=Td;Adr.RB=Xj;Adr.Mc=Tc;Adr.RK=Td;
Adr.ApS=Rs;Adr.C1=It;Adr.Ah=this.Hb.Ah;this.Hb.Ah=null;this.Hb=Adr;if(this.AV===
It)this.Bb(null);Al0.C1.Cs(0x0,0x10040);if(((this.U&0x40)===0x40)&&((It.U&0x4)===
0x4))It.Cs(0x10040,0x0);else It.Cs(0x10000,0x0);if(!!Mc){this.NN(JD.C1,Mc.Aea(),
null,null,Ly);this.NN(Al0.C1,RB.Sb(),null,null,true);this.NN(Adr.C1,Oa.Sc(),Lz,Lx
,true);}else if(!!RK){this.NN(JD.C1,RK.Aeb(),null,null,Ly);this.NN(Al0.C1,RB.Sb(
),null,null,true);this.NN(Adr.C1,Oa.Sc(),Lz,Lx,true);}else if(!!RB){this.NN(Al0.
C1,RB.Sb(),null,null,Ly);this.NN(Adr.C1,Oa.Sc(),Lz,Lx,true);}else this.NN(Adr.C1
,Oa.Sc(),Lz,Lx,Ly);},AqI:function(It,Ah$,O7,Rs,Lz,Lx,Ly){var B;if(!this.Hb)return;
if(!It)return;var KB=this.Hb;var JD=this.Hb.Ah;var ApY=null;while((!!KB&&(KB.C1!==
It))&&!!KB.Ah){ApY=KB;KB=JD;JD=KB.Ah;}if(!KB||(KB.C1!==It))throw new Error(Ir);if(
!ApY){this.Hb=JD;KB.Ah=null;}else{ApY.Ah=JD;KB.Ah=null;}KB.C1.Cs(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JD)&&!ApY)&&((JD.C1.U&0x200000)===0x200000))JD.C1.Cs(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JD)&&!ApY)&&((JD.C1.U&0x4)===0x4))JD.C1.Cs(
0x40,0x0);var RB=KB.RB;var RK=null;var Mc=null;if(!!JD)RK=JD.RK;if(!!JD&&!!KB.ApS
)RK=KB.ApS;if(!!JD&&!!Rs)RK=Rs;if(!!ApY&&!!JD)Mc=JD.Mc;if((!!ApY&&!!JD)&&!!O7)Mc=
O7;if(!!Ah$)RB=Ah$;if(!!Mc){this.NN(JD.C1,Mc.Aea(),null,null,Ly);this.NN(KB.C1,RB.
Sb(),Lz,Lx,true);}else if(!!RK){this.NN(JD.C1,RK.Aeb(),null,null,Ly);this.NN(KB.
C1,RB.Sb(),Lz,Lx,true);}else this.NN(KB.C1,RB.Sb(),Lz,Lx,Ly);},AkP:function(It,Oa
,Xj,Tc,Td,O7,Rs,Lz,Lx,Ly){var B;if(!It)return;if(!!this.Hb&&(this.Hb.C1===It)){this.
AUP(It,Oa,Xj,Tc,Td,null,O7,Rs,Lz,Lx,Ly);return;}if(((It.U&0x10000)===0x10000))throw new
Error(IS);var KB=A._NewObject(C.ANR,0);if(!!this.Hb&&!this.Hb.Mc){if(!Rs)Rs=O7;if(
!O7)O7=Rs;}var Mc=null;if(!!this.Hb)Mc=this.Hb.Mc;if(!!this.Hb&&!!O7)Mc=O7;if(!Oa
)Oa=A._GetAutoObject(A.acl.AsF);if(!Xj)Xj=Oa;if(!Td)Td=Tc;if(!Tc)Tc=Td;KB.RB=Xj;
KB.Mc=Tc;KB.RK=Td;KB.ApS=Rs;if(this.AV===It)this.Bb(null);if(!!this.Hb&&((this.Hb.
C1.U&0x200000)===0x200000))this.Hb.C1.Cs(0x0,0x10);if(!!this.Hb)this.Hb.C1.Cs(0x0
,0x40);if(((this.U&0x40)===0x40)&&((It.U&0x4)===0x4))It.Cs(0x10040,0x0);else It.
Cs(0x10000,0x0);KB.C1=It;KB.Ah=this.Hb;this.Hb=KB;if(!!Mc){this.NN(this.Hb.Ah.C1
,Mc.Aea(),null,null,Ly);this.NN(It,Oa.Sc(),Lz,Lx,true);}else this.NN(It,Oa.Sc(),
Lz,Lx,Ly);},A6L:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7n:function(
KZ){var tmp=this;while(!!tmp){KZ=A.abe(KZ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KZ;
},BiS:function(KZ){var tmp=this;while(!!tmp){KZ=A.abf(KZ,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KZ;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A2u=!!this.Xz&&(!!this.Xz.FP||!!this.Xz.B9);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.Hb&&!A2u)GD=this.Hb.C1.DispatchEvent(CN);if(!GD&&!!B0)
GD=B0.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G2(CN);if(!GD)GD=this.G2(CN);if(!GD
)GD=this.A3B(CN);return GD;},BroadcastEventAtPosition:function(CN,HA,aFilter){var
B;var X=this.B_;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),HA)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.
BroadcastEventAtPosition(CN,A.abe(HA,B0.M.slice(0,2)),aFilter);else GD=X.G2(CN);
}X=X.AJ;}if(!GD)GD=this.G2(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B_;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.BroadcastEvent(CN,aFilter
);else GD=X.G2(CN);}X=X.AJ;}if(!GD)GD=this.G2(CN);if(!GD)GD=this.A3B(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},Bi9:function(){this.U=this.U|0x4000;A.pe([
this,this.ABm],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABm],this
);},Bj:function(Da){var B;var B0=this;while(!!B0&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aau=B0.FD;if(!B0.Ab&&(B0!==this)){B0.Bj(Da);return;}if(!!Aau){var BzP=Aau.
QK;Aau.QK=A.wC(Aau.QK,Da);if(!A.aaY(BzP,Aau.QK)){A.we(B0,0);A.we(Aau,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Da=A.abh(Da,Az.slice(0,2));if(!!B0.FD||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FD){Az=[].concat(Az[0]-B0.AzF,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzH);Az=A.abN(Az,Az[2]+B0.AzG);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzE);}Da=A.lb(Da,Az);}B0=B0.Ab;}},QF:function(Ag,GA,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agh=A.aaI(Ag.GetExtent());var X=Ag;var A1d=null;var
Bcg=0;var IX=0x10000;var AKK;if(((aFilter&0x10000)===0x10000))IX=0x0;var top=((GA===
4)||(GA===1))||(GA===6);var bottom=((GA===5)||(GA===3))||(GA===8);var left=((GA===
2)||(GA===1))||(GA===3);var right=((GA===7)||(GA===6))||(GA===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B_;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IX||!((B=IX)&&((X.U&B)===B
))))for(AKK=0;AKK<2;AKK++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKK){if((left&&(s[0]>s[1]))&&(Az[2]<Agh[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agh[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agh[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agh[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agh);var
Rv=Bq;if(Rv[0]<0)Rv=[-Rv[0],Rv[1]];if(Rv[1]<0)Rv=[Rv[0],-Rv[1]];if(((((!left||(Bq[
0]<=-Rv[1]))&&(!right||(Bq[0]>=Rv[1])))&&(!top||(Bq[1]<=-Rv[0])))&&(!bottom||(Bq[
1]>=Rv[0])))&&((Rv[0]>0)||(Rv[1]>0))){var RD=Bq[0];var RE=Bq[1];var Jk=Math.sqrt((
RD*RD)+(RE*RE));var AKj=0;if(!left&&!right)AKj=Jk/Rv[1];if(!top&&!bottom)AKj=Jk/
Rv[0];Jk=(Jk*AKj)*AKj;if((Jk<Bcg)||!A1d){Bcg=Jk;A1d=X;}}}}return A1d;},AqQ:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B_;var IX=0x10000;
if(((aFilter&0x10000)===0x10000))IX=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IX||!((B=IX)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TO:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;
var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IX||!((B=IX)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACK:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlY=Ag.Ah;var Al$=Ag.AJ;var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=0x0;
while(!!AlY||!!Al$){if((!!AlY&&(!aFilter||((B=aFilter)&&((AlY.U&B)===B))))&&(!IX||
!((B=IX)&&((AlY.U&B)===B))))return AlY;if((!!Al$&&(!aFilter||((B=aFilter)&&((Al$.
U&B)===B))))&&(!IX||!((B=IX)&&((Al$.U&B)===B))))return Al$;if(!!AlY)AlY=AlY.Ah;if(
!!Al$)Al$=Al$.AJ;}return null;},Db:function(aFilter){var B;var X=this.B9;var AE=
BF;var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IX||!((B=IX)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NN:function(KA,FO,Lz,Lx
,Ly){var B;if(!KA)return;if(!FO)throw new Error(O1);if((!!FO.P||!!FO.Ab)||!!FO.Ph
)throw new Error(P3);if(!!KA.Ab&&(KA.Ab!==this))throw new Error(P4);if(!this.Xz)
this.Xz=A._NewObject(C.AUU,0);FO.Ab=this;FO.P=KA;FO.AKu=Lx;FO.A2W=Lz;if(!!KA.ApT
)KA.ApT.Ph.Bn1(KA.ApT);KA.ApT=FO;KA.U=KA.U|0x20000;if((Ly&&!!this.Xz.B_)&&!this.
Xz.B_.AQ0())(A.acl.ACF.isPrototypeOf(B=this.Xz.B_)?B:null).A4B(FO);else{var Ph=A.
_NewObject(A.acl.ACF,0);Ph.A4B(FO);this.Xz.A_Y(Ph,false);}},AhB:function(Ag,J3){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Fe);if(!!J3&&(J3.
Ab!==this))throw new Error(Lu);if(Ag.Ah===J3)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JG],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JG],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B_=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;var GC=
null;var Iv=this.B_;var LP=Ag.JX;if(!!J3){GC=J3;Iv=J3.AJ;}if(!!GC&&(LP>GC.JX))LP=
GC.JX;if(!!Iv&&(LP<Iv.JX))LP=Iv.JX;if(LP!==Ag.JX){Ag.Ab=null;Ag.Ar8(LP);Ag.Ab=this;
}if(!J3){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.B_;Ag.Ah=null;this.B_=Ag;}else{Ag.
Ah=J3;Ag.AJ=J3.AJ;J3.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B9===J3)this.B9=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZI:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Fe);if(!Ag.Ah)return;var Iv=this.B_;var
LP=Ag.JX;while(!!Iv&&(Iv.JX>LP))Iv=Iv.AJ;if(((Iv===Ag)||!Iv)||(Iv.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JG],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JG],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B9=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Iv;Ag.Ah=Iv.Ah;Iv.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B_=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},JV:function(Ag,Qb){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Fe);var Iv=Ag;var GC=Ag;var LP=Ag.JX;while(((Qb>0)&&!!Iv.Ah)&&(Iv.Ah.JX<=LP
)){Iv=Iv.Ah;Qb=Qb-1;}while(((Qb<0)&&!!GC.AJ)&&(GC.AJ.JX>=LP)){GC=GC.AJ;Qb=Qb+1;}
if((Iv===Ag)&&(GC===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JG],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JG],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;if(Iv
!==Ag){Ag.Ah=Iv.Ah;Ag.AJ=Iv;Iv.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GC!==Ag){Ag.Ah=GC;
Ag.AJ=GC.AJ;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B_=Ag;if(!Ag.AJ)this.
B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HP:function(Ag){var B;if(
!Ag)throw new Error(P5);if(Ag.Ab!==this)throw new Error(Fe);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Eu){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JG],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JG],this);}Ag.Eu=null;if(this.AV===Ag)this.Bb(this.
ACK(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B9===Ag
)this.B9=Ag.Ah;if(this.B_===Ag)this.B_=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cs(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AL4:function(Ag,J3
){var B;if(!Ag)throw new Error(JZ);if(!!Ag.Ab)throw new Error(N_);if(!!J3&&(J3.Ab
!==this))throw new Error(Lu);var GC=null;var Iv=this.B_;var LP=Ag.JX;if(!!J3){GC=
J3;Iv=J3.AJ;}if(!!GC&&(LP>GC.JX))LP=GC.JX;if(!!Iv&&(LP<Iv.JX))LP=Iv.JX;if(LP!==Ag.
JX){Ag.Ab=null;Ag.Ar8(LP);Ag.Ab=this;}if(!J3){if(!!this.B_)this.B_.Ah=Ag;Ag.AJ=this.
B_;this.B_=Ag;}else{Ag.Ah=J3;Ag.AJ=J3.AJ;J3.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B9===J3)this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOK()===Ag))Ag.Cs(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cs(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JG],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JG],this);}},J:function(Ag,Qb){var B;if(!Ag)throw new Error(
JZ);if(!!Ag.Ab)throw new Error(N_);var GC=null;var LP=Ag.JX;if(((Qb<0)&&!!this.B_
)&&(this.B_.JX>=LP)){GC=this.B_;Qb=Qb+1;}while((((Qb<0)&&!!GC)&&!!GC.AJ)&&(GC.AJ.
JX>=LP)){GC=GC.AJ;Qb=Qb+1;}if((!GC&&!!this.B_)&&(this.B_.JX>LP))GC=this.B_;while((
!!GC&&!!GC.AJ)&&(GC.AJ.JX>LP))GC=GC.AJ;if(!GC){Ag.Ab=this;Ag.AJ=this.B_;if(!!this.
B_)this.B_.Ah=Ag;if(!this.B9)this.B9=Ag;this.B_=Ag;}else{Ag.Ab=this;Ag.AJ=GC.AJ;
Ag.Ah=GC;GC.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B9=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOK()===Ag))Ag.Cs(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cs(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cs(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JG],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JG],this);}},A8n:function(){return this.
AV;},Awi:function(){return this.G7;},_Init:function(aArg){C.Et._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Et._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKk)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RH:null,JC:null,Ft:A.abi(10,null
,null),AtA:null,Ais:null,ABo:0,Ic:0,L_:A.abi(10,0,null),AJK:A.abi(10,A.wg,null),
Xx:A.abi(10,0,null),AfY:A.abi(10,A.wf,null),AtF:A.abi(10,0,null),Air:A.abi(10,A.
wf,null),Xw:A.abi(10,A.wf,null),RA:A.abi(10,A.wf,null),Adc:A.abi(10,A.wf,null),EO:
0,AJ8:0,AJ7:0,Op:A.abi(4,0,null),Kf:A.abi(4,A.wg,null),Kb:0,Az6:0,AtT:0,AzR:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Il:function(){return this;
},Kl:function(CZ,aClip,aOffset,Ci,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.Avd(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kl.call(this,CZ,aClip
,aOffset,Ci,aBlend);},Cs:function(Rt,U5){var B;C.P.Cs.call(this,Rt,U5);if(!this.
Ab&&(((Rt&0x1)===0x1)||((U5&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rt&0x2)===0x2)||((U5&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArM:
function(E){var B;var BzN=this.FD;C.P.ArM.call(this,E);if(((BzN!==this.FD)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ds:function(
E){var B;var BQ=this.G7;C.P.Ds.call(this,E);if(((BQ!==this.G7)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvQ=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=null;if(!!this.
JC){GD=this.JC.C1.DispatchEvent(CN);if(!GD)GD=this.G2(CN);if(!GD)GD=this.A3B(CN);
this.Ic=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ic=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvQ=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ic=0;return GD;},Bj:function(Da){var
B;if(this.ABo>0)throw new Error(P6);if(!!this.FD&&!this.Ab){if(((B=this.FD.QK)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FD,0);}this.FD.QK=A.wC(this.FD.QK
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Kb;O=O+1)if(!(((B=A.lb(this.Kf.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Kf.Set(O,A.wC(this.Kf.Get(O),Da));this.Op.Set(O,A.aaH(this.Kf.Get(O
)));return;}if(this.Kb<3){this.Kf.Set(this.Kb,Da);this.Op.Set(this.Kb,A.aaH(Da));
this.Kb=this.Kb+1;return;}var If;var RG;var Az5=0;var Az8=0;var Bcf=2147483647;this.
Kf.Set(this.Kb,Da);this.Op.Set(this.Kb,A.aaH(Da));for(If=0;If<=this.Kb;If=If+1)for(
RG=If+1;RG<=this.Kb;RG=RG+1){var ALc=A.aaH(A.wC(this.Kf.Get(If),this.Kf.Get(RG))
);var Be8=((ALc<<8)/(this.Op.Get(If)+this.Op.Get(RG)))|0;if(Be8<Bcf){Bcf=Be8;Az5=
If;Az8=RG;}}this.Kf.Set(Az5,A.wC(this.Kf.Get(Az5),this.Kf.Get(Az8)));this.Op.Set(
Az5,A.aaH(this.Kf.Get(Az5)));if(Az8!==this.Kb){this.Kf.Set(Az8,this.Kf.Get(this.
Kb));this.Op.Set(Az8,this.Op.Get(this.Kb));}},Byp:function(){var LJ=A._NewObject(
C.AqK,0);LJ.AvQ=!!this.Ic;if(!!this.Ic)LJ.Bs=this.Ic;return LJ;},Ao7:function(){
var LJ=A._NewObject(C.Aed,0);LJ.AvQ=!!this.Ic;if(!!this.Ic)LJ.Bs=this.Ic;return LJ;
},AtE:function(){var LJ=A._NewObject(C.AuT,0);LJ.AvQ=!!this.Ic;if(!!this.Ic)LJ.Bs=
this.Ic;return LJ;},Byu:function(G){var O;var Apm=false;for(O=0;O<10;O=O+1)if(!!
this.Ft.Get(O)){var pos=this.RA.Get(O);var B0=this.Ft.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Ft.Get(O)!==this)){
var tmp=this.Ft.Get(O);this.EO=O;this.Ft.Set(O,null);tmp.G2(this.Ao7().InitializeUp(
O,this.Air.Get(O),this.AfY.Get(O),this.Xx.Get(O),this.L_.Get(O)+1,this.Xw.Get(O)
,false,this.RA.Get(O),this.Adc.Get(O)));this.BroadcastEvent(this.AtE().InitializeUp(
O,this.L_.Get(O)+1,false,tmp,this.RA.Get(O)),0x18);}else{this.Xx.Set(O,(this.Ais.
Bs-this.AtF.Get(O))|0);if(this.Xx.Get(O)<10)this.Xx.Set(O,10);this.EO=O;this.Ft.
Get(O).G2(this.Ao7().InitializeHold(O,pos,this.AfY.Get(O),this.Xx.Get(O),this.L_.
Get(O)+1,this.Xw.Get(O),this.RA.Get(O),this.Adc.Get(O)));Apm=true;}}if(!Apm)this.
Ais.Ar(false);},GetFPS:function(){var ticksCount=0;var BcT=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ8&&(ticksCount>this.AJ8))BcT=((this.AJ7*1000)/((
ticksCount-this.AJ8)|0))|0;this.AJ7=0;this.AJ8=ticksCount;return BcT;},Update:function(
){var B;if(!this.AtA)this.AtA=A._NewObject(A.Graphics.Canvas,0);this.AtA.ArT([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.AtA.Update();return this.UpdateGE20(this.AtA);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BF;var Ags=this.UpdateCanvas(
CZ,Cc);this.EndUpdate();return Ags;},EndUpdate:function(){if(this.Kb>0){this.AJ7=
this.AJ7+1;this.Kb=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Ags=BF;var Bx8=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var O;var If=this.Kb;this.ABo=this.
ABo+1;CZ.C1=this;for(O=0;(O<If)&&(O<4);O=O+1)if(this.Op.Get(O)>0){this.Kl(CZ,A.abg(
this.Kf.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Ags=A.wC(Ags,A.lb(Bx8
,this.Kf.Get(O)));}else If=If+1;CZ.C1=null;this.ABo=this.ABo-1;if(!((Ags[0]>=Ags[
2])||(Ags[1]>=Ags[3])))return A.abg(Ags,aOffset);else return Ags;},GetUpdateRegion:
function(AI7){var O;var If=this.Kb;if(AI7<0)return BF;for(O=0;(O<If)&&(O<4);O=O+
1)if(!this.Op.Get(O)){If=If+1;AI7=AI7+1;}else if(O===AI7)return this.Kf.Get(O);return BF;
},BeginUpdate:function(){var B;var O;if(!!this.Kb&&!A.aaY(this.Kf.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bga=A.abi(3,A.wg,null);var Bf$=this.Kb;for(O=0;
O<Bf$;O++)Bga.Set(O,this.Kf.Get(O));for(O=0;O<Bf$;O++){var Bfr=A.abh(Bga.Get(O),
this.M.slice(0,2));var Bfs=this.AuB(Bfr);if(!A.aaY(Bfr,Bfs))this.Bj(A.abg(Bfs,this.
M.slice(0,2)));}}var If;var RG;for(If=0;If<(this.Kb-1);If++)if(this.Op.Get(If)>0
)for(RG=If+1;RG<this.Kb;RG++)if(this.Op.Get(RG)>0){var ALc=A.aaH(A.wC(this.Kf.Get(
If),this.Kf.Get(RG)));if(((ALc-this.Op.Get(If))-this.Op.Get(RG))<0){this.Kf.Set(
If,A.wC(this.Kf.Get(If),this.Kf.Get(RG)));this.Op.Set(If,ALc);this.Op.Set(RG,0);
}}for(O=this.Kb-1;O>=0;O--)if(!this.Op.Get(O))this.Kb=this.Kb-1;return this.Kb;}
,DoesNeedUpdate:function(){if(this.Kb>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.AzR)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A0G){if(A0G===this.AzR
)return false;this.AzR=A0G;if(!A0G){if(!!this.JC)this.JC.C1.Cs(0x0,0x40);else this.
Cs(0x0,0x40);}else if(!!this.JC)this.JC.C1.Cs(0x40,0x0);else this.Cs(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qc){this.Ic=Qc;},DriveKeyboardHitting:function(
Kz,AyR,Tb){var B;var A3C=!!this.RH;if(!!this.RH&&((!Tb||(this.Az6!==Kz))||(this.
AtT!==AyR))){var LJ=null;var X=(C.Ch.isPrototypeOf(B=this.RH)?B:null);var D5=(C.
BM.isPrototypeOf(B=this.RH)?B:null);if(!!this.Az6)LJ=A._NewObject(C.KeyEvent,0).
Initialize(this.Az6,false);if(this.AtT!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtT,false);if(!!D5)D5.G2(LJ);else if(!!X)X.G2(LJ);this.Az6=0;this.AtT=0x00;
this.RH=null;}if(!!this.RH){var LJ=null;var X=(C.Ch.isPrototypeOf(B=this.RH)?B:null
);var D5=(C.BM.isPrototypeOf(B=this.RH)?B:null);if(!!Kz)LJ=A._NewObject(C.KeyEvent
,0).Initialize(Kz,true);if(this.AtT!==0x00)LJ=A._NewObject(C.KeyEvent,0).Initialize2(
AyR,true);if(!!D5)D5.G2(LJ);else if(!!X)X.G2(LJ);}if(!this.RH&&Tb){if(!!Kz)this.
RH=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Kz,true));if(AyR!==0x00
)this.RH=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyR,true));if(
!(C.BM.isPrototypeOf(B=this.RH)?B:null)&&!(C.Ch.isPrototypeOf(B=this.RH)?B:null)
)this.RH=null;this.Az6=Kz;this.AtT=AyR;A3C=A3C||!!this.RH;}this.Ic=0;return A3C;
},DriveCursorMovement:function(Fg){return this.DriveMultiTouchMovement(this.EO,Fg
);},DriveMultiTouchMovement:function(BG,Fg){if((BG<0)||(BG>9)){this.Ic=0;return false;
}var Fv=A.abe(Fg,this.RA.Get(BG));this.RA.Set(BG,Fg);if(!this.Ft.Get(BG)||A.aaX(
Fv,Cc)){this.Ic=0;return false;}var pos=Fg;var B0=this.Ft.Get(BG).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Ft.Get(BG)!==
this)){var tmp=this.Ft.Get(BG);this.EO=BG;this.Ft.Set(BG,null);tmp.G2(this.Ao7().
InitializeUp(BG,this.Air.Get(BG),this.AfY.Get(BG),this.Xx.Get(BG),this.L_.Get(BG
)+1,this.Xw.Get(BG),false,this.RA.Get(BG),this.Adc.Get(BG)));this.BroadcastEvent(
this.AtE().InitializeUp(BG,this.L_.Get(BG)+1,false,tmp,Fg),0x18);}else{this.Air.
Set(BG,pos);this.EO=BG;this.Ft.Get(BG).G2(this.Byp().Initialize(BG,pos,this.AfY.
Get(BG),Fv,this.Xx.Get(BG),this.L_.Get(BG)+1,this.Xw.Get(BG),Fg,this.Adc.Get(BG)
));}this.Ic=0;return true;},DriveCursorHitting:function(Tb,BG,Fg){return this.DriveMultiTouchHitting(
Tb,BG,Fg);},DriveMultiTouchHitting:function(Tb,BG,Fg){if((BG<0)||(BG>9)){this.Ic=
0;return false;}var ticksCount=this.Ic;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBi=this.Ic;this.DriveMultiTouchMovement(BG,Fg);Fg=this.RA.Get(BG);
this.Ic=BBi;if(Tb)this.Adc.Set(BG,Fg);if(Tb&&!this.Ft.Get(BG)){var JB;var pos=Fg;
if(A.wa(this.AJK.Get(BG),Fg)&&((ticksCount-this.AtF.Get(BG))<=250))this.L_.Set(BG
,this.L_.Get(BG)+1);else this.L_.Set(BG,0);this.AJK.Set(BG,A.abh(MG,Fg));this.AtF.
Set(BG,ticksCount);if(!!this.JC)JB=this.Ym(A.abh(MG,Fg),BG,this.L_.Get(BG)+1,this.
JC.C1,null,0x0);else JB=this.Ym(A.abh(MG,Fg),BG,this.L_.Get(BG)+1,null,null,0x0);
if(!!JB){this.BroadcastEvent(this.AtE().InitializeDown(BG,this.L_.Get(BG)+1,false
,JB.Ch,Fg),0x18);this.Ft.Set(BG,JB.Ch);this.Xw.Set(BG,JB.DG);}else{this.Ft.Set(BG
,null);this.Xw.Set(BG,Cc);this.Ic=0;return false;}var B0=JB.Ch.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfY.Set(BG,pos);this.Air.
Set(BG,pos);this.Xx.Set(BG,0);this.Ais.Ar(true);this.EO=BG;this.Ft.Get(BG).G2(this.
Ao7().InitializeDown(BG,pos,this.L_.Get(BG)+1,this.Xw.Get(BG),false,Fg));this.Ic=
0;return true;}if(!Tb&&!!this.Ft.Get(BG)){var pos=Fg;var B0=this.Ft.Get(BG).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Air.
Get(BG);this.EO=BG;var tmp=this.Ft.Get(BG);this.Ft.Set(BG,null);tmp.G2(this.Ao7(
).InitializeUp(BG,pos,this.AfY.Get(BG),this.Xx.Get(BG),this.L_.Get(BG)+1,this.Xw.
Get(BG),false,Fg,this.Adc.Get(BG)));this.BroadcastEvent(this.AtE().InitializeUp(
BG,this.L_.Get(BG)+1,false,tmp,Fg),0x18);this.Ic=0;return true;}this.Ic=0;return false;
},AUd:function(Aap,BbE,Ac5,Ac4){if(Aap===this)Aap=null;if(!!!Aap&&!!this.JC)Aap=
this.JC.C1;if(!this.Ft.Get(this.EO))return;var JB;JB=this.Ym(A.abh(MG,this.RA.Get(
this.EO)),this.EO,1,Aap,Ac5,Ac4);if(!!JB&&(this.Ft.Get(this.EO)!==JB.Ch))this.ANH(
JB.Ch,JB.DG);if(!JB&&(this.Ft.Get(this.EO)!==BbE))this.ANH(BbE,Cc);},ANH:function(
Aap,Xk){if(!this.Ft.Get(this.EO)||(this.Ft.Get(this.EO)===Aap))return;var tmp=this.
Ft.Get(this.EO);this.Ft.Set(this.EO,null);tmp.G2(this.Ao7().InitializeUp(this.EO
,this.Air.Get(this.EO),this.AfY.Get(this.EO),this.Xx.Get(this.EO),this.L_.Get(this.
EO)+1,this.Xw.Get(this.EO),true,this.RA.Get(this.EO),this.Adc.Get(this.EO)));this.
BroadcastEvent(this.AtE().InitializeUp(this.EO,this.L_.Get(this.EO)+1,true,tmp,this.
RA.Get(this.EO)),0x18);var pos=this.RA.Get(this.EO);var B0=null;if(!!Aap)B0=Aap.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aap
!==this)){this.Ft.Set(this.EO,null);return;}this.BroadcastEvent(this.AtE().InitializeDown(
this.EO,this.L_.Get(this.EO)+1,true,Aap,this.RA.Get(this.EO)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Ft.Set(this.EO,Aap);this.Xw.Set(
this.EO,Xk);this.AfY.Set(this.EO,pos);this.Air.Set(this.EO,pos);this.L_.Set(this.
EO,0);this.Xx.Set(this.EO,0);this.AtF.Set(this.EO,ticksCount);this.Adc.Set(this.
EO,this.RA.Get(this.EO));this.Ft.Get(this.EO).G2(this.Ao7().InitializeDown(this.
EO,pos,this.L_.Get(this.EO)+1,this.Xw.Get(this.EO),true,this.Adc.Get(this.EO)));
},AOK:function(){if(!!this.JC)return this.JC.C1;return null;},ACC:function(KA){var
B;if(!KA)throw new Error(S8);if(!((KA.U&0x80)===0x80))throw new Error(US);if(this.
JC.C1===KA)this.JC=this.JC.Ah;else{var AzQ=this.JC;while(AzQ.Ah.C1!==KA)AzQ=AzQ.
Ah;AzQ.Ah=AzQ.Ah.Ah;}KA.Cs(0x0,0xD0);if(this.AzR){if(!!this.JC)this.JC.C1.Cs(0x50
,0x0);else this.Cs(0x50,0x0);}},AMP:function(KA){var B;var At=A._NewObject(C.A7y
,0);if(!KA)throw new Error(Z8);if(KA===null)throw new Error(W5);if(((KA.U&0x80)===
0x80))throw new Error(Is);if(!!this.JC)this.JC.C1.Cs(0x0,0x50);else this.Cs(0x0,
0x50);At.Ah=this.JC;At.C1=KA;this.JC=At;if(this.AzR)KA.Cs(0xD0,0x0);else KA.Cs(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ais={
I:this},0);(this.Ft=[]).__proto__=C.Root.Ft;(this.L_=[]).__proto__=C.Root.L_;(this.
AJK=[]).__proto__=C.Root.AJK;(this.Xx=[]).__proto__=C.Root.Xx;(this.AfY=[]).__proto__=
C.Root.AfY;(this.AtF=[]).__proto__=C.Root.AtF;(this.Air=[]).__proto__=C.Root.Air;(
this.Xw=[]).__proto__=C.Root.Xw;(this.RA=[]).__proto__=C.Root.RA;(this.Adc=[]).__proto__=
C.Root.Adc;(this.Op=[]).__proto__=C.Root.Op;(this.Kf=[]).__proto__=C.Root.Kf;this.
__proto__=C.Root;this.U=0x10007F;this.Ais.PP(10);this.Ais.Mz=[this,this.Byu];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ais._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ais._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RH)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JC)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ft,D);if((B=this.
AtA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ais)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvQ:false,Init:function(aArg){this.Bs=
this.Avl();},Avl:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(Kz,Tb){this.CO=0;this.DQ=Kz;this.Down=Tb;if((Kz>=0x30)&&(Kz<=
0x39))this.CO=(10+Kz)-48;if((Kz>=0x41)&&(Kz<=0x5A))this.CO=(105+Kz)-65;if((Kz>=0x61
)&&(Kz<=0x7A))this.CO=(105+Kz)-97;if(Kz===0x20)this.CO=131;if(!this.CO)switch(Kz
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(Kz,Tb){this.CO=Kz;this.
Down=Tb;this.DQ=0x00;var A1j=Kz-10;var Atz=Kz-105;if((A1j>=0)&&(A1j<=9))this.DQ=(
48+A1j)&0xFFFF;if((Atz>=0)&&(Atz<=25))this.DQ=(65+Atz)&0xFFFF;if(Kz===131)this.DQ=
0x20;if(this.DQ===0x00)switch(Kz){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bjc:function(Bbt){switch(
Bbt){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bbt===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARg={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARg;},_className:
"Core::LanguageEvent"};C.AuT={AxJ:null,LU:A.wf,N5:0,IH:0,Down:false,NF:false,InitializeUp:
function(BG,Ob,AoG,A0X,Aao){this.Down=false;this.IH=BG;this.N5=Ob;this.LU=Aao;this.
AxJ=A0X;this.NF=AoG;return this;},InitializeDown:function(BG,Ob,AoG,A0X,Aao){this.
Down=true;this.IH=BG;this.N5=Ob;this.LU=Aao;this.AxJ=A0X;this.NF=AoG;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuT;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aed={Ag0:A.wf,LU:A.wf,N5:0,Jr:
0,NQ:A.wf,H2:A.wf,IH:0,Down:false,NF:false,InitializeHold:function(BG,Alm,AyU,AyV
,Ob,Xk,Aao,AyT){this.Down=true;this.IH=BG;this.H2=A.abf(Alm,Xk);this.NQ=A.abf(AyU
,Xk);this.Jr=AyV;this.N5=Ob;this.LU=Aao;this.Ag0=AyT;return this;},InitializeUp:
function(BG,Alm,AyU,AyV,Ob,Xk,AoG,Aao,AyT){this.Down=false;this.IH=BG;this.H2=A.
abf(Alm,Xk);this.NQ=A.abf(AyU,Xk);this.Jr=AyV;this.N5=Ob;this.NF=AoG;this.LU=Aao;
this.Ag0=AyT;return this;},InitializeDown:function(BG,Alm,Ob,Xk,AoG,Aao){this.Down=
true;this.IH=BG;this.H2=A.abf(Alm,Xk);this.NQ=A.abf(Alm,Xk);this.Jr=0;this.N5=Ob;
this.NF=AoG;this.LU=Aao;this.Ag0=Aao;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aed;},_className:"Core::CursorEvent"};C.AqK={
Ag0:A.wf,LU:A.wf,N5:0,Jr:0,DG:A.wf,NQ:A.wf,H2:A.wf,IH:0,Initialize:function(BG,Alm
,AyU,aOffset,AyV,Bxt,Xk,Aao,AyT){this.IH=BG;this.H2=A.abf(Alm,Xk);this.NQ=A.abf(
AyU,Xk);this.DG=aOffset;this.Jr=AyV;this.N5=Bxt;this.LU=Aao;this.Ag0=AyT;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqK;},_className:
"Core::DragEvent"};C.Y={BX:null,Nw:null,El:null,Br:A.wf,AUI:0,Space:0,AgY:0,Kl:function(
CZ,aClip,aOffset,Ci,aBlend){},GetClipping:function(){var B;var Az=C.Et.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap6=BF;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap6=A.wC(Ap6,X.GetClipping());
Az=A.wC(Az,Ap6);}return Az;},Cs:function(Rt,U5){var B;var Tn=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U5&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Et.Cs.call(this,Rt,U5);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rt&0x80000)===
0x80000))&&!((Tn&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var Al1=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKs=[
E[2]-E[0],E[3]-E[1]];var Ap2=!A.aaX(Al1,AKs);var Fv=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fv,Cc)&&!Ap2){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anl(Fv,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((Ap2&&(Al1[0]>0))&&(Al1[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eu&&(X.Eu.
Ny!==this))X.Eu=null;if(!X.Eu&&((X.PJ!==0x14)||!!this.AgY))X.AtR(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Et.H.call(this,E);if(!!this.Ab&&Ap2){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JG],this);}}},Bfl:function(){var B;if((!this.AgY||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1E=((this.U&0x1000)===0x1000);for(;!!X&&!A1E;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1E=true;if(((X.U&0x200)===
0x200))break;}if(A1E){this.U=this.U&~0x4000;this.Ab.Bfw();}},ApM:function(G){var
B;this.BX.Q=null;this.BX.Qq=null;this.BX=null;(B=this.Nw)?B[1].call(B[0],this):null;
},Gd:function(E){var B;var Fv=A.abe(E,this.Br);if(A.aaX(Fv,Cc))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anl(Fv,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.El,this);},A_g:function(E){var B;if(E<0)E=0;if(E===this.AUI)return;this.AUI=
E;if(!!this.Ab&&!!this.AgY){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JG],this);}},Bm9:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgY){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JG],this);}},JP:function(E){var B;if(E===this.AgY)return;
this.AgY=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JG],this);}},Vx:function(AcZ,E8){var Atz=this.Db(0x1);var Ry=this.M;var
Vh=A.abe(Atz.slice(0,2),Ry.slice(0,2));var Ma=A.abe(Atz.slice(2,4),Ry.slice(2,4)
);var Bq=Cc;if((Vh[0]>0)&&(Ma[0]>Vh[0]))Bq=[Vh[0],Bq[1]];else if((Vh[0]>0)&&(Ma[
0]>0))Bq=[Ma[0],Bq[1]];if((Ma[0]<0)&&(Vh[0]<Ma[0]))Bq=[Ma[0],Bq[1]];else if((Ma[
0]<0)&&(Vh[0]<0))Bq=[Vh[0],Bq[1]];if((Vh[1]>0)&&(Ma[1]>Vh[1]))Bq=[Bq[0],Vh[1]];else
if((Vh[1]>0)&&(Ma[1]>0))Bq=[Bq[0],Ma[1]];if((Ma[1]<0)&&(Vh[1]<Ma[1]))Bq=[Bq[0],Ma[
1]];else if((Ma[1]<0)&&(Vh[1]<0))Bq=[Bq[0],Vh[1]];if(A.aaX(Bq,Cc)){(E8)?E8[1].call(
E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qq=null;this.Nw=null;}this.BX=AcZ;if(!this.BX){this.Gd(A.abe(this.Br,Bq));(E8)?E8[
1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this,this.
Anw,this.Gd];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qq=[this,this.
ApM];this.BX.Ae9(false);this.BX.Ar(true);this.Nw=E8;}},HI:function(Ag,Ac2,AcZ,E8
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UT);this.Bfl();var Az=Ag.GetExtent();var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac2&&
!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac2&&A.aaY(LN,Az))){(E8)?E8[1].call(E8[0],this
):null;return;}var Bq=Cc;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qq=null;this.Nw=null;}this.BX=AcZ;if(!this.BX){this.Gd(A.abe(this.Br,Bq));(E8
)?E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anw,this.Gd];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qq=[this
,this.ApM];this.BX.Ae9(false);this.BX.Ar(true);this.Nw=E8;}},BiE:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TO:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IX||!((B=IX)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BF;var IX=0x10000;this.Bfl();if(((
aFilter&0x10000)===0x10000))IX=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IX||!((B=IX)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anw:function(){return this.Br;},_Init:
function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Et._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HB:null,BX:null,Ch:null,WQ:null,Nw:null,El:null,Hk:null,Tk:-1,Tj:0,Jn:-1,Hr:0,AiL:
8,Oi:0,Ux:0,AcN:A.wf,G4:-1,Br:0,Gt:-1,OP:0,GN:24,AY:0,Li:null,NM:false,AtU:false
,AUP:function(It,Oa,Xj,Tc,Td,Ah$,O7,Rs,Lz,Lx,Ly){throw new Error(Z9);},AqI:function(
It,Ah$,O7,Rs,Lz,Lx,Ly){throw new Error(W6);},AkP:function(It,Oa,Xj,Tc,Td,O7,Rs,Lz
,Lx,Ly){throw new Error(Z_);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV){this.G4=this.Gt;this.Ch=(C.Ch.isPrototypeOf(
B=A._NewObject(this.Li,0))?B:null);if(!!this.B_)this.B_.Ah=this.Ch;else this.B9=
this.Ch;this.Ch.AJ=this.B_;this.B_=this.Ch;this.Ch.Ab=this;this.AcN=[(B=this.M)[
2]-B[0],this.GN];(B=this.Hk)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Ch.G2(CN
);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B9=null;this.B_=this.Ch.AJ;this.Ch.
AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Li){A.pe(this.El,this);return;
}this.AtU=true;var AAK=0;if(!this.NM)AAK=this.OP;var FT=this.Al_(-AAK-this.Br,1);
var GY=this.Al_(((((B=this.M)[3]-B[1])-AAK)-this.Br)-1,2);var CB=GY-FT;if(CB<1)CB=
1;var Aim=(CB/2)|0;var Ain=(CB/3)|0;if(!Aim)Aim=1;if(!Ain)Ain=1;if(FT<this.Hr){FT=
FT-Aim;GY=GY+Ain;}else if(GY>this.Jn){FT=FT-Ain;GY=GY+Aim;}else{FT=this.Hr;GY=this.
Jn;}if(!this.NM){if(FT>=this.AY){FT=0;GY=-1;}else if(GY<0){FT=0;GY=-1;}if(GY>=this.
AY)GY=this.AY-1;if(FT<0)FT=0;}else if(this.AY<=0){FT=0;GY=-1;}var Ai2=this.Hr;var
Ai3=this.Jn;var Apz=0;var ApA=-1;if(FT>Ai2)Ai2=FT;if(GY<Ai3)Ai3=GY;if(Ai2<=Ai3){
while((this.Jn<GY)&&(this.Hr<Ai2)){this.AdD();this.Azj();}while((this.Hr>FT)&&(this.
Jn>Ai3)){this.AAX();this.Azi();}}else{this.Jn=(this.Jn-this.Hr)+FT;this.Hr=FT;Apz=
this.Hr;ApA=this.Jn;}while(this.Hr<FT)this.AdD();while(this.Jn>GY)this.AAX();while(
this.Hr>FT)this.Azi();while(this.Jn<GY)this.Azj();var Aa=this.B9;var inx=this.Hr;
var pos=[0,(AAK+this.Br)+this.Jl(inx,0)];var BK=(B=this.M)[3]-B[1];var AlJ=null;
var Bgj=(B=this.M)[2]-B[0];while(!!Aa){var Iz=inx;if(this.NM){if(Iz<0)Iz=this.AY-(-
Iz%this.AY);if(Iz>0)Iz=Iz%this.AY;}var AdE=((Iz>=this.Tj)&&(Iz<=this.Tk))||((inx>=
Apz)&&(inx<=ApA));var Apg=Aa.GetExtent();var Bq=A.abe(pos,Apg.slice(0,2));if(AdE
)this.Ux=this.GN;else this.Ux=Apg[3]-Apg[1];var A2j=pos[1];var A2k=pos[1]+this.Ux;
if(!A.aaX(Bq,Cc))Aa.Anl(Bq,true);if((AdE&&(A2j<BK))&&(A2k>0)){this.Ch=Aa;this.G4=
Iz;this.AcN=[Bgj,this.Ux];(B=this.Hk)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Ux];}inx=this.Hr;Aa=this.B9;pos=[0,(AAK+this.Br)+this.Jl(
inx,0)];while(!!Aa){var Iz=inx;if(this.NM){if(Iz<0)Iz=this.AY-(-Iz%this.AY);if(Iz>
0)Iz=Iz%this.AY;}var AdE=((Iz>=this.Tj)&&(Iz<=this.Tk))||((inx>=Apz)&&(inx<=ApA)
);if(AdE)this.Ux=this.GN;else this.Ux=(B=Aa.GetExtent())[3]-B[1];var A2j=pos[1];
var A2k=pos[1]+this.Ux;if(AdE&&!((A2j<BK)&&(A2k>0))){this.Ch=Aa;this.G4=Iz;this.
AcN=[Bgj,this.Ux];(B=this.Hk)?B[1].call(B[0],this):null;}if(((Iz===this.Gt)&&this.
NM)&&!!AlJ){var Ry=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Ry))>A.aaH(A.lb(AlJ.GetExtent(),Ry)))AlJ=Aa;}else if(Iz===this.Gt)AlJ=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Ux];}this.Tj=0;this.Tk=-1;this.Ch=null;this.G4=-
1;this.Bb(AlJ);this.AtU=false;A.pe(this.El,this);},QF:function(Ag,GA,aFilter){return null;
},AqQ:function(Ag,aFilter){return null;},TO:function(Ag,aFilter){return null;},ACK:
function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
KA,FO,Lz,Lx,Ly){throw new Error(W7);},AhB:function(Ag,J3){throw new Error(Z$);},
ZI:function(Ag){throw new Error(Aaa);},JV:function(Ag,Qb){throw new Error(UU);},
HP:function(Ag){throw new Error(W8);},AL4:function(Ag,J3){throw new Error(P7);},
J:function(Ag,Qb){throw new Error(Aab);},Jl:function(G_,A0x){return G_*this.GN;}
,Al_:function(Fg,A0x){return(Fg/this.GN)|0;},AAX:function(){var Aa=this.B_;if(!Aa
)return null;if(Aa===this.AV)this.Bb(null);this.Jn=this.Jn-1;if(!!Aa.AJ)Aa.AJ.Ah=
null;else this.B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<
this.AiL){if(!!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Oi++;}return Aa;
},Azj:function(){var B;var Aa=this.HB;var Ado=this.Li;var AdI=++this.Jn;if(this.
NM){if(AdI<0)AdI=this.AY-(-AdI%this.AY);if(AdI>0)AdI=AdI%this.AY;}while(!!Aa&&(((
B=Aa)?B.__proto__:null)!==Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!
Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;
}else{Aa=(C.Ch.isPrototypeOf(B=A._NewObject(Ado,0))?B:null);Aa.AZ(0x1D);if(!!this.
Oi)this.AiL++;}this.Ux=this.GN;this.G4=AdI;this.AcN=[(B=this.M)[2]-B[0],this.Ux];
this.Ch=Aa;(B=this.Hk)?B[1].call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.
B_)this.B_.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdI===
this.Gt)this.Bb(Aa);return Aa;},AdD:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Hr=this.Hr+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.
B_=null;this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiL){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Oi++;}return Aa;},Azi:function(
){var B;var Aa=this.HB;var Ado=this.Li;var MY=--this.Hr;if(this.NM){if(MY<0)MY=this.
AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==
Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.
HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ch.isPrototypeOf(
B=A._NewObject(Ado,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiL++;}this.Ux=this.
GN;this.G4=MY;this.AcN=[(B=this.M)[2]-B[0],this.Ux];this.Ch=Aa;(B=this.Hk)?B[1].
call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B9)this.B9.AJ=Aa;Aa.Ab=this;
Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(MY===this.Gt)this.Bb(Aa);return Aa;
},ApM:function(G){var B;this.BX.Q=null;this.BX.Qq=null;this.BX=null;(B=this.Nw)?
B[1].call(B[0],this):null;},BAE:function(G){this.Gd(this.WQ.DG[1]);},BAF:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qq=null;this.BX=
null;}if(!this.NM){var AE=this.AqX(0,this.AY-1);var Agh=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OP);if(AE[0]>Agh[0])AE=[].concat(Agh[0],AE.slice(1,4));if(AE[1]>Agh[
1])AE=A.abP(AE,Agh[1]);var Fv=AE[1]-this.M[1];var A2z=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2z>0)A2z=0;this.WQ.DG=[0,this.Br];this.WQ.Gp=[0,(this.Br+A2z)-Fv];this.
WQ.Ga=[0,this.Br-Fv];}else{var Fv=32000-(32000%this.GN);this.WQ.DG=[0,this.Br];this.
WQ.Gp=[0,this.Br-Fv];this.WQ.Ga=[0,this.Br+Fv];}},ASV:function(E){var B;if(this.
NM===E)return;this.NM=E;while(!!this.AdD());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw2:function(E){if(E===this.WQ)return;if(!!E&&!!E.At7){A.ab5(
"%s%*%s",O2,E,Rl);throw new Error(W9);}if(!!this.WQ){this.WQ.AKE=null;this.WQ.At7=
null;}this.WQ=E;if(!!E){E.AKE=[this,this.BAF];E.At7=[this,this.BAE];}},Gd:function(
E){var B;if(this.NM&&(this.AY>0)){var HD=this.Jl(this.AY,3);if(E<0)E=HD-(-E%HD);
if(E>0)E=E%HD;if(E>0)E=E-HD;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(E){if(E<0)E=-1;if(E===this.Gt)return;
this.Gt=E;this.Am();},A95:function(E){var B;if(E<0)E=0;if(E===this.OP)return;this.
OP=E;if(!this.NM){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae6:function(
E){var B;if(E<1)E=1;if(E===this.GN)return;this.GN=E;while(!!this.AdD());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jw:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jl(E,3));AE=A.abP(AE
,(this.OP+this.Br)+this.Jl(this.AY,3));}else{AE=A.abP(AE,(this.OP+this.Br)+this.
Jl(E,3));AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jl(this.AY,3));}}else
while(!!this.AdD());this.AY=E;this.Am();this.Bj(AE);},NZ:function(E){var B;if(E===
this.Li)return;this.Li=E;while(!!this.AdD());this.HB=null;this.Oi=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiR:function(G_){if(this.AtU)return null;
if((G_<0)||(G_>=this.AY))return null;if(!this.NM){if((G_<this.Hr)||(G_>this.Jn))
return null;var X=this.B9;while(G_>this.Hr){X=X.Ah;G_=G_-1;}return X;}else{var MY=
this.Hr;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B9;while(
!!X){if((MY%this.AY)===G_)return X;X=X.Ah;MY=MY+1;}return null;}},ABE:function(AcZ
,E8){var B;if(this.NM){(E8)?E8[1].call(E8[0],this):null;return;}var AJ9=this.Br;
var BcU=((((B=this.M)[3]-B[1])-this.Br)-this.OP)-this.Jl(this.AY,3);var Bq=0;if(
AJ9>0)Bq=-AJ9;else if(BcU>0)Bq=BcU;if((Bq>0)&&(Bq>-AJ9))Bq=-AJ9;if(!Bq){(E8)?E8[
1].call(E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qq=null;this.Nw=null;}this.BX=AcZ;if(!this.BX){this.Gd(this.Br+Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anw,this.Gd];this.BX.Cx=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qq=[this,this.
ApM];this.BX.Ae9(false);this.BX.Ar(true);this.Nw=E8;}},HI:function(G_,Ac2,AcZ,E8
){var B;if((G_<0)||(G_>=this.AY))return;var Az=this.AqX(G_,G_);var Bd=this.M;var
LN=A.lb(Az,Bd);if((!Ac2&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac2&&A.aaY(LN,Az))
){(E8)?E8[1].call(E8[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qq=null;this.Nw=null;}this.BX=AcZ;if(!this.BX){this.Gd(this.Br-Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HO(1);this.BX.Q=[this
,this.Anw,this.Gd];this.BX.Cx=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qq=[this,this.
ApM];this.BX.Ae9(false);this.BX.Ar(true);this.Nw=E8;}},BiJ:function(){return BF;
},AOM:function(){if((this.OP<=0)||this.NM)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OP);return AE;},A6A:function(Fg
){if(((this.AY<=0)||(Fg[0]<this.M[0]))||(Fg[0]>=this.M[2]))return-1;Fg=A.abe(Fg,
this.M.slice(0,2));if(!this.NM){var Aa=(Fg[1]-this.Br)-this.OP;if(Aa>0)Aa=this.Al_(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fg[1]-this.Br;if(Aa>0)
Aa=this.Al_(Aa,0);if(Aa<0)Aa=this.Al_(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqX:function(J1,L5){if(J1<0)J1=0;if(L5>=this.AY)L5=
this.AY-1;if(J1>L5)return BF;var AE=this.M;var Bq=this.Br;if(this.NM){var HD=this.
Jl(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;}else Bq=
Bq+this.OP;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jl(L5+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jl(J1,0));return AE;},AbJ:function(J1,L5){var B;if(J1<0)J1=0;if(J1>L5
)return;if(this.Tj>this.Tk){this.Tj=J1;this.Tk=L5;}else{if(J1<this.Tj)this.Tj=J1;
if(L5>this.Tk)this.Tk=L5;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){
AE=A.abP(AE,(this.OP+this.Br)+this.Jl(J1,0));AE=[].concat(AE.slice(0,3),(this.OP+
this.Br)+this.Jl(L5+1,0));}else if((this.Jl(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HD=this.Jl(this.AY,3);if(Bq<0)Bq=HD-(-Bq%HD);if(
Bq>0)Bq=Bq%HD;if(Bq>0)Bq=Bq-HD;AE=A.abP(AE,Bq+this.Jl(J1,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jl(L5+1,0));}this.Am();this.Bj(AE);},Anw:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W_);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WQ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dy={HB:null
,BX:null,Ch:null,Nw:null,Hk:null,Tk:-1,Tj:0,Jn:-1,Hr:0,AiL:8,Oi:0,SM:0,AcN:A.wf,
G4:-1,Br:0,Gt:-1,Wc:24,AY:0,Li:null,AtU:false,AUP:function(It,Oa,Xj,Tc,Td,Ah$,O7
,Rs,Lz,Lx,Ly){throw new Error(W$);},AqI:function(It,Ah$,O7,Rs,Lz,Lx,Ly){throw new
Error(Xa);},AkP:function(It,Oa,Xj,Tc,Td,O7,Rs,Lz,Lx,Ly){throw new Error(Aac);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gt>=0)&&(this.Gt<this.AY))&&!this.AV
){this.G4=this.Gt;this.Ch=(C.Ch.isPrototypeOf(B=A._NewObject(this.Li,0))?B:null);
if(!!this.B_)this.B_.Ah=this.Ch;else this.B9=this.Ch;this.Ch.AJ=this.B_;this.B_=
this.Ch;this.Ch.Ab=this;this.AcN=[this.SM,(B=this.M)[3]-B[1]];(B=this.Hk)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Ch.G2(CN);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B9=null;
this.B_=this.Ch.AJ;this.Ch.AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Li
)return;this.AtU=true;var FT=this.Al_(0-this.Br,1);var GY=this.Al_((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=GY-FT;if(CB<1)CB=1;var Aim=(CB/2)|0;var Ain=(CB/3)|
0;if(!Aim)Aim=1;if(!Ain)Ain=1;if(FT<this.Hr){FT=FT-Aim;GY=GY+Ain;}else if(GY>this.
Jn){FT=FT-Ain;GY=GY+Aim;}else{FT=this.Hr;GY=this.Jn;}if(FT>=this.AY){FT=0;GY=-1;
}else if(GY<0){FT=0;GY=-1;}if(GY>=this.AY)GY=this.AY-1;if(FT<0)FT=0;var Ai2=this.
Hr;var Ai3=this.Jn;var Apz=0;var ApA=-1;if(FT>Ai2)Ai2=FT;if(GY<Ai3)Ai3=GY;if(Ai2<=
Ai3){while((this.Jn<GY)&&(this.Hr<Ai2)){this.AdD();this.Azj();}while((this.Hr>FT
)&&(this.Jn>Ai3)){this.AAX();this.Azi();}}else{this.Jn=(this.Jn-this.Hr)+FT;this.
Hr=FT;Apz=this.Hr;ApA=this.Jn;}while(this.Hr<FT)this.AdD();while(this.Jn>GY)this.
AAX();while(this.Hr>FT)this.Azi();while(this.Jn<GY)this.Azj();var Aa=this.B9;var
inx=this.Hr;var pos=[this.Br+this.Jl(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlJ=
null;var Bf9=(B=this.M)[3]-B[1];while(!!Aa){var Iz=inx;var AdE=((Iz>=this.Tj)&&(
Iz<=this.Tk))||((inx>=Apz)&&(inx<=ApA));var Apg=Aa.GetExtent();var Bq=A.abe(pos,
Apg.slice(0,2));if(AdE)this.SM=this.Wc;else this.SM=Apg[2]-Apg[0];var A2h=pos[0];
var A2i=pos[0]+this.SM;if(!A.aaX(Bq,Cc))Aa.Anl(Bq,true);if((AdE&&(A2h<BY))&&(A2i>
0)){this.Ch=Aa;this.G4=Iz;this.AcN=[this.SM,Bf9];(B=this.Hk)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SM,pos[1]];}inx=this.Hr;Aa=this.B9;pos=[
this.Br+this.Jl(inx,0),0];while(!!Aa){var Iz=inx;var AdE=((Iz>=this.Tj)&&(Iz<=this.
Tk))||((inx>=Apz)&&(inx<=ApA));if(AdE)this.SM=this.Wc;else this.SM=(B=Aa.GetExtent(
))[2]-B[0];var A2h=pos[0];var A2i=pos[0]+this.SM;if(AdE&&!((A2h<BY)&&(A2i>0))){this.
Ch=Aa;this.G4=Iz;this.AcN=[this.SM,Bf9];(B=this.Hk)?B[1].call(B[0],this):null;}if(
Iz===this.Gt)AlJ=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SM,pos[1]];}this.Tj=0;this.
Tk=-1;this.Ch=null;this.G4=-1;this.Bb(AlJ);this.AtU=false;},QF:function(Ag,GA,aFilter
){return null;},AqQ:function(Ag,aFilter){return null;},TO:function(Ag,aFilter){return null;
},ACK:function(Ag,aFilter){return null;},Db:function(aFilter){return BF;},NN:function(
KA,FO,Lz,Lx,Ly){throw new Error(Xb);},AhB:function(Ag,J3){throw new Error(Xc);},
ZI:function(Ag){throw new Error(S9);},JV:function(Ag,Qb){throw new Error(UV);},HP:
function(Ag){throw new Error(UW);},AL4:function(Ag,J3){throw new Error(AcQ);},J:
function(Ag,Qb){throw new Error(S_);},Jl:function(G_,A0x){return G_*this.Wc;},Al_:
function(Fg,A0x){return(Fg/this.Wc)|0;},AAX:function(){var Aa=this.B_;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jn=this.Jn-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B9=null;this.B_=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiL){if(!
!this.HB)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Oi++;}return Aa;},Azj:function(
){var B;var Aa=this.HB;var Ado=this.Li;var AdI=++this.Jn;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{
Aa=(C.Ch.isPrototypeOf(B=A._NewObject(Ado,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.
AiL++;}this.SM=this.Wc;this.G4=AdI;this.AcN=[this.SM,(B=this.M)[3]-B[1]];this.Ch=
Aa;(B=this.Hk)?B[1].call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B_)this.
B_.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B_;this.B_=Aa;if(!this.B9)this.B9=Aa;if(AdI===this.
Gt)this.Bb(Aa);return Aa;},AdD:function(){var Aa=this.B9;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hr=this.Hr+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B_=null;
this.B9=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oi<this.AiL){if(!!this.HB
)this.HB.AJ=Aa;Aa.Ah=this.HB;this.HB=Aa;this.Oi++;}return Aa;},Azi:function(){var
B;var Aa=this.HB;var Ado=this.Li;var MY=--this.Hr;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ado))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HB===Aa)this.HB=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oi--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Ado,0))?B:null);Aa.AZ(0x1D);if(!!this.Oi)this.AiL++;
}this.SM=this.Wc;this.G4=MY;this.AcN=[this.SM,(B=this.M)[3]-B[1]];this.Ch=Aa;(B=
this.Hk)?B[1].call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B9)this.B9.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B9;this.B9=Aa;if(!this.B_)this.B_=Aa;if(MY===this.Gt
)this.Bb(Aa);return Aa;},ApM:function(G){var B;this.BX.Q=null;this.BX.Qq=null;this.
BX=null;(B=this.Nw)?B[1].call(B[0],this):null;},Gd:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(
E){if(E<0)E=-1;if(E===this.Gt)return;this.Gt=E;this.Am();},AFf:function(E){var B;
if(E<1)E=1;if(E===this.Wc)return;this.Wc=E;while(!!this.AdD());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jw:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jl(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jl(E,3));}else{AE=
A.abN(AE,this.Br+this.Jl(this.AY,3));AE=[].concat(this.Br+this.Jl(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},NZ:function(E){var B;if(E===this.Li)return;
this.Li=E;while(!!this.AdD());this.HB=null;this.Oi=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BoI:function(Bxu,Bxv){if(!this.BX)return;if(Bxu)this.Gd(
this.BX.B2);var A4a=this.Nw;this.BX.Ar(false);this.BX.Q=null;this.BX.Qq=null;this.
Nw=null;this.BX=null;if(Bxv)(A4a)?A4a[1].call(A4a[0],this):null;},Bjh:function(){
return!!this.BX;},HI:function(G_,Ac2,AcZ,E8){var B;if((G_<0)||(G_>=this.AY))return;
var Az=this.AqX(G_,G_);var Bd=this.M;var LN=A.lb(Az,Bd);if((!Ac2&&!((LN[0]>=LN[2
])||(LN[1]>=LN[3])))||(Ac2&&A.aaY(LN,Az))){(E8)?E8[1].call(E8[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qq=null;this.Nw=null;}this.BX=
AcZ;if(!this.BX){this.Gd(this.Br-Bq);(E8)?E8[1].call(E8[0],this):null;}else{this.
BX.Ar(false);this.BX.HO(1);this.BX.Q=[this,this.Anw,this.Gd];this.BX.Cx=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qq=[this,this.ApM];this.BX.Ae9(false);this.BX.Ar(true
);this.Nw=E8;}},AqX:function(J1,L5){if(J1<0)J1=0;if(L5>=this.AY)L5=this.AY-1;if(
J1>L5)return BF;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jl(L5+1
,0));AE=[].concat((AE[0]+Bq)+this.Jl(J1,0),AE.slice(1,4));return AE;},AbJ:function(
J1,L5){var B;if(J1<0)J1=0;if(J1>L5)return;if(this.Tj>this.Tk){this.Tj=J1;this.Tk=
L5;}else{if(J1<this.Tj)this.Tj=J1;if(L5>this.Tk)this.Tk=L5;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jl(J1,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jl(L5+1,0));this.Am();this.Bj(AE);},Anw:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dy;this.H(W_);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HB
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={AR_:null,AEF:null,Av5:null,D1:null,
Lm:null,BN:null,AK3:0,Bp:0,IH:0,Bs:0,N5:0,Jr:0,DG:A.wf,NQ:A.wf,H2:A.wf,Axq:8,Afe:
0,A7r:1,Down:false,YK:false,NF:false,A1L:false,AAf:0,Kl:function(CZ,aClip,aOffset
,Ci,aBlend){},G2:function(CN){var B;var BP=(C.Aed.isPrototypeOf(CN)?CN:null);var
D4=(C.AqK.isPrototypeOf(CN)?CN:null);var AKh=this.YK;var AaM;var Ve;var ABg;var MV;
var AzC;if(!BP&&!D4)return null;AaM=(!!BP&&BP.Down)&&!BP.Jr;Ve=(!!BP&&BP.Down)&&(
BP.Jr>0);ABg=(!!BP&&BP.Down)&&(BP.Jr>this.AAf);MV=!!BP&&!BP.Down;AzC=!!D4;if(AaM
)this.AAf=((B=(BP.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afe&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Ix=(C.AuT.isPrototypeOf(CN)?CN:null);if(((
!!Ix&&Ix.Down)&&(Ix.AxJ!==this))&&A.wa(this.GetExtent(),this.Ab.A7n(Ix.LU))){this.
AK3=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaM){var ApG=0;var Adj;this.Bp=
this.Bp|(1<<BP.IH);for(Adj=this.Bp&4095;Adj>0;Adj=Adj>>1)if(!!(Adj&1))ApG=ApG+1;
if(ApG===1)this.Bp=(this.Bp|16777216)|(4096<<BP.IH);}if(MV&&(this.Bp<16777216)){
var IC=this.Il();var JB=null;if(!!IC){var A34=(!!this.AJ?this.AJ:this.Ab);var A1z=(
!!IC.JC?IC.JC.C1:null);JB=IC.Ym(A.abh(Aad,BP.LU),BP.IH,BP.N5,A1z,A34,0x0);}if(!!
JB){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JB.Ch.G2(A._NewObject(C.Aed,0).
InitializeDown(O,BP.H2,BP.N5,Cc,true,BP.LU));for(O=0;O<10;O++)if(!!(this.Bp&(1<<
O)))JB.Ch.G2(A._NewObject(C.Aed,0).InitializeUp(O,BP.H2,BP.H2,0,BP.N5,Cc,false,BP.
LU,BP.LU));}}if(MV)this.Bp=(this.Bp&~(1<<BP.IH))|33554432;if(ABg&&(this.Bp<16777216
))this.Bp=this.Bp|67108864;if(MV&&BP.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&
4095))this.AK3=0x0;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Ve&&(this.Bp>=67108864
)){var IC=this.Il();if(!!IC)IC.AUd(null,null,this,this.AK3);}if((Ve&&!!(this.Bp&
16777216))&&!!(this.Bp&33554432)){Ve=false;MV=true;}if(!!BP&&!(this.Bp&(4096<<BP.
IH)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IH)))return this;if(MV&&!(this.Bp&
16777216))return this;if(((AaM||AzC)||Ve)&&((this.Bp<16777216)||(this.Bp>=33554432
)))return this;if(MV)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215))this.
Bp=0;if(!!BP){this.Down=AaM||Ve;this.YK=this.AQ4(BP.H2);this.NQ=BP.NQ;this.H2=BP.
H2;this.DG=Cc;this.Jr=BP.Jr;this.N5=BP.N5;this.NF=BP.NF;this.IH=BP.IH;this.Bs=BP.
Bs;if(BP.Down&&!BP.Jr)AKh=false;}if(!!D4){this.Down=true;this.YK=this.AQ4(D4.H2);
this.NQ=D4.NQ;this.H2=D4.H2;this.DG=D4.DG;this.Jr=D4.Jr;this.N5=D4.N5;this.IH=D4.
IH;this.NF=false;this.Bs=D4.Bs;}var A1F=this.Down;if(!!D4)(B=this.AR_)?B[1].call(
B[0],this):null;if((!!BP&&this.Down)&&!this.Jr)(B=this.BN)?B[1].call(B[0],this):
null;if((!!BP&&this.Down)&&(this.Jr>0))(B=this.D1)?B[1].call(B[0],this):null;if((
this.Down&&this.YK)&&!AKh){this.A1L=true;(B=this.Av5)?B[1].call(B[0],this):null;
}if(this.A1L&&(((A1F&&!this.YK)&&AKh)||((!A1F&&this.YK)&&AKh))){this.A1L=false;(
B=this.AEF)?B[1].call(B[0],this):null;}if(!!BP&&!A1F)(B=this.Lm)?B[1].call(B[0],
this):null;if(!!this.Afe){var AdC=0x0;if(((((this.Afe&0x10)===0x10)&&!!BP)&&BP.Down
)&&(BP.Jr>=1000))AdC=0x10;if((((this.Afe&0x1)===0x1)&&!!D4)&&((D4.LU[1]-D4.Ag0[1
])<=-this.Axq))AdC=0x1;if((((this.Afe&0x2)===0x2)&&!!D4)&&((D4.LU[1]-D4.Ag0[1])>=
this.Axq))AdC=0x2;if((((this.Afe&0x4)===0x4)&&!!D4)&&((D4.LU[0]-D4.Ag0[0])<=-this.
Axq))AdC=0x4;if((((this.Afe&0x8)===0x8)&&!!D4)&&((D4.LU[0]-D4.Ag0[0])>=this.Axq)
)AdC=0x8;if(!!AdC){var IC=this.Il();if(!!IC){this.AK3=AdC;IC.AUd(null,this,this,
AdC);}}}return this;},Ym:function(Da,BG,Ob,Aan,Ac5,Ac4){var B;if(!!Aan&&(Aan!==this
))return null;if((Ob<1)||(Ob>this.A7r))return null;if(this.Bp>=33554432)return null;
if((this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;if(!!(Ac4&this.Afe))return null;
if(this.BiX()){var Az=A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[
3]))){var Qe=A.aaI(Da);var Fv=Cc;if(Qe[0]<Az[0])Fv=[Az[0]-Qe[0],Fv[1]];if(Qe[0]>=
Az[2])Fv=[(Az[2]-Qe[0])-1,Fv[1]];if(Qe[1]<Az[1])Fv=[Fv[0],Az[1]-Qe[1]];if(Qe[1]>=
Az[3])Fv=[Fv[0],(Az[3]-Qe[1])-1];return A._NewObject(C.AuU,0).Initialize(this,Fv
);}}else{var HC=A.abi(9,A.wf,null);var O;HC.Set(0,A.aaI(Da));HC.Set(1,HC.Get(0));
HC.Set(2,HC.Get(0));HC.Set(3,HC.Get(0));HC.Set(4,HC.Get(0));HC.Set(1,[Da[0],HC.Get(
1)[1]]);HC.Set(2,[HC.Get(2)[0],Da[1]]);HC.Set(3,[Da[2],HC.Get(3)[1]]);HC.Set(4,[
HC.Get(4)[0],Da[3]]);HC.Set(5,Da.slice(0,2));HC.Set(6,[Da[2],Da[1]]);HC.Set(7,[Da[
0],Da[3]]);HC.Set(8,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.AQ4(HC.Get(O)))return A.
_NewObject(C.AuU,0).Initialize(this,A.abe(HC.Get(O),HC.Get(0)));}return null;},Bm2:
function(E){if(E<1)E=1;this.Axq=E;},AFo:function(E){if(E<1)E=1;this.A7r=E;},Ar:function(
E){if(E)this.Cs(0x100000,0x0);else this.Cs(0x0,0x100000);},_Init:function(aArg){
C.ZF._Init.call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(
D){var B;C.ZF._Mark.call(this,D);if((B=this.AR_)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AEF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av5
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Lm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.BN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H9={timer:null,AKE:null,At7:null,AF1:null,Zr:null,SJ:null,Bp:0,AJg:0,Adm:5000
,Ap1:0,AKg:A.wf,Apd:0,AfN:0,E1:0,Amj:0,Auj:0,Apc:0,AfM:0,E0:0,Ami:0,Amg:0,NQ:A.wf
,A5G:A.wf,Ga:A.wf,Gp:A.wf,DG:A.wf,WS:A.wf,A6n:0.5,A_V:true,AGH:true,ZQ:false,XK:
false,XL:false,AoY:false,AAf:0,Kl:function(CZ,aClip,aOffset,Ci,aBlend){},G2:function(
CN){var B;var BP=(C.Aed.isPrototypeOf(CN)?CN:null);var D4=(C.AqK.isPrototypeOf(CN
)?CN:null);var Ix=(C.AuT.isPrototypeOf(CN)?CN:null);var AaM;var Ve;var ABg;var MV;
var AzC;AaM=(!!BP&&BP.Down)&&!BP.Jr;Ve=(!!BP&&BP.Down)&&(BP.Jr>0);ABg=(!!BP&&BP.
Down)&&(BP.Jr>this.AAf);MV=!!BP&&!BP.Down;AzC=!!D4;if(AaM)this.AAf=((B=(BP.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaM){var ApG=0;var Adj;this.Bp=this.Bp|(1<<BP.
IH);for(Adj=this.Bp&4095;Adj>0;Adj=Adj>>1)if(!!(Adj&1))ApG=ApG+1;if(ApG===1)this.
Bp=(this.Bp|16777216)|(4096<<BP.IH);}if(MV&&(this.Bp<16777216)){var IC=this.Il();
var JB=null;if(!!IC){var A34=(!!this.AJ?this.AJ:this.Ab);var A1z=(!!IC.JC?IC.JC.
C1:null);JB=IC.Ym(A.abh(Aad,BP.LU),BP.IH,BP.N5,A1z,A34,0x0);}if(!!JB){var O;for(
O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JB.Ch.G2(A._NewObject(C.Aed,0).InitializeDown(
O,BP.H2,BP.N5,Cc,true,BP.LU));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JB.Ch.G2(A.
_NewObject(C.Aed,0).InitializeUp(O,BP.H2,BP.H2,0,BP.N5,Cc,false,BP.LU,BP.LU));}}
if(MV)this.Bp=(this.Bp&~(1<<BP.IH))|33554432;if(ABg&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MV&&BP.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&16777215
))this.Bp=0;if(Ve&&(this.Bp>=67108864)){var IC=this.Il();if(!!IC)IC.AUd(null,null
,this,0x0);}if((Ve&&!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Ve=false;MV=true;
}if(!!BP&&!(this.Bp&(4096<<BP.IH)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IH))
)return this;if(MV&&!(this.Bp&16777216))return this;if(((AaM||AzC)||Ve)&&((this.
Bp<16777216)||(this.Bp>=33554432)))return this;if(MV)this.Bp=this.Bp&3758100479;
if(MV&&!(this.Bp&16777215))this.Bp=0;if(!!Ix&&(Ix.AxJ===this))return null;if((!!
Ix&&Ix.Down)&&(this.AoY||!this.ZQ))return null;if((!!Ix&&Ix.Down)&&!A.wa(this.M,
this.Ab.A7n(Ix.LU)))return null;if((!!Ix&&!Ix.Down)&&(!this.AoY||(this.AJg!==Ix.
IH)))return null;if((!BP&&!D4)&&!Ix)return null;if(!!BP){this.AoY=AaM||Ve;this.AJg=
BP.IH;this.NQ=BP.NQ;}if(!!D4)this.AJg=D4.IH;if(!!Ix){this.AoY=Ix.Down;this.AJg=Ix.
IH;}if(!!Ix&&Ix.Down){this.A35();this.E0=(((Ix.Bs-this.Amg)*0.001)*this.AfM)+this.
E0;this.E1=(((Ix.Bs-this.Auj)*0.001)*this.AfN)+this.E1;if(this.XK)this.E0=0;if(this.
XL)this.E1=0;this.AfM=0;this.AfN=0;this.XK=false;this.XL=false;this.AKg=this.DG;
this.Ap1=Ix.Bs;return this;}if(AaM){this.A35();this.E0=(((BP.Bs-this.Amg)*0.001)
*this.AfM)+this.E0;this.E1=(((BP.Bs-this.Auj)*0.001)*this.AfN)+this.E1;if(this.XK||
!this.ZQ)this.E0=0;if(this.XL||!this.ZQ)this.E1=0;this.AfM=0;this.AfN=0;this.XK=
false;this.XL=false;if(!this.ZQ){this.ZQ=true;(B=this.SJ)?B[1].call(B[0],this):null;(
B=this.AKE)?B[1].call(B[0],this):null;}this.AKg=this.DG;this.Ap1=BP.Bs;}if(!!D4){
var Ha=A.abe(D4.H2,D4.NQ);var CE=this.DG;if(this.AGH)CE=[this.AKg[0]+Ha[0],CE[1]
];CE=[CE[0],this.AKg[1]+Ha[1]];if(this.A_V){if(CE[0]<this.Gp[0])CE=[this.Gp[0]+(((
CE[0]-this.Gp[0])/2)|0),CE[1]];else if(CE[0]>this.Ga[0])CE=[this.Ga[0]+(((CE[0]-
this.Ga[0])/2)|0),CE[1]];if(CE[1]<this.Gp[1])CE=[CE[0],this.Gp[1]+(((CE[1]-this.
Gp[1])/2)|0)];else if(CE[1]>this.Ga[1])CE=[CE[0],this.Ga[1]+(((CE[1]-this.Ga[1])
/2)|0)];}else{if(CE[0]<this.Gp[0])CE=[this.Gp[0],CE[1]];else if(CE[0]>this.Ga[0]
)CE=[this.Ga[0],CE[1]];if(CE[1]<this.Gp[1])CE=[CE[0],this.Gp[1]];else if(CE[1]>this.
Ga[1])CE=[CE[0],this.Ga[1]];}if(!A.aaX(CE,this.DG)){this.A5G=A.abe(CE,this.DG);this.
DG=CE;(B=this.At7)?B[1].call(B[0],this):null;(B=this.AF1)?B[1].call(B[0],this):null;
}}if((!!Ix&&!Ix.Down)&&((Ix.Bs-this.Ap1)>=200)){this.E0=0;this.E1=0;}if(Ve&&((BP.
Bs-this.Ap1)>=200)){this.E0=0;this.E1=0;}if(!!D4&&(D4.Bs>this.Ap1)){var Ha=D4.DG;
var Bdl=1000/(D4.Bs-this.Ap1);var AiO=0;var AiP;if(this.AGH)AiO=Ha[0]*Bdl;AiP=Ha[
1]*Bdl;if((AiO*this.E0)<0)this.E0=0;if((AiP*this.E1)<0)this.E1=0;this.E0=(this.E0+
AiO)*0.5;this.E1=(this.E1+AiP)*0.5;this.Ap1=D4.Bs;}if(!MV&&!Ix)return this;if(!!
BP&&BP.NF){this.E0=0;this.E1=0;}if((this.DG[0]<=this.Gp[0])||(this.DG[0]>=this.Ga[
0]))this.E0=0;else if(!this.E0){var EQ=this.DG[0];var Fi=this.Gp[0];var EI=this.
Ga[0];if(EQ<Fi)EI=this.Gp[0];else if(EQ>EI)Fi=this.Ga[0];else if(this.WS[0]<=1){
Fi=EQ;EI=EQ;}else{var Adq=(EI-EQ)%this.WS[0];EI=(EQ-this.WS[0])+Adq;Fi=EQ+Adq;if(
EI<this.Gp[0])EI=this.Gp[0];if(Fi>this.Ga[0])Fi=this.Ga[0];}if((Fi-EQ)<=(EQ-EI))
EQ=Fi;else EQ=EI;if(EQ!==this.DG[0]){var Jk=EQ-this.DG[0];if(Jk>0)this.E0=Math.sqrt((
Jk*2)*this.Adm)+20;if(Jk<0)this.E0=-Math.sqrt((-Jk*2)*this.Adm)-20;this.AfM=(400-(
this.E0*this.E0))/(2*Jk);this.Apc=EQ;}}else{var BBE=this.E0*this.E0;var Jk=BBE/(
2*this.Adm);var EQ=this.DG[0];if(this.E0>0)EQ=EQ+(Jk|0);if(this.E0<0)EQ=EQ-(Jk|0
);if(EQ>this.Ga[0])EQ=this.Ga[0];else if(EQ<this.Gp[0])EQ=this.Gp[0];var Bf4=EQ;
var Fi=this.Gp[0];var EI=this.Ga[0];if(EQ<Fi)EI=this.Gp[0];else if(EQ>EI)Fi=this.
Ga[0];else if(this.WS[0]<=1){Fi=EQ;EI=EQ;}else{var Adq=(EI-EQ)%this.WS[0];EI=(EQ-
this.WS[0])+Adq;Fi=EQ+Adq;if(EI<this.Gp[0])EI=this.Gp[0];if(Fi>this.Ga[0])Fi=this.
Ga[0];}if(this.E0>0){if(EI<=this.DG[0])EQ=Fi;else if((EQ-EI)<(Fi-EQ))EQ=EI;else EQ=
Fi;}else if(Fi>=this.DG[0])EQ=EI;else if((EQ-EI)>(Fi-EQ))EQ=Fi;else EQ=EI;if(EQ!==
this.DG[0]){Jk=EQ-this.DG[0];if(EQ!==Bf4){var Ai$=EQ-Bf4;if(Ai$>0)this.E0=this.E0+
Math.sqrt((Ai$*2)*this.Adm);if(Ai$<0)this.E0=this.E0-Math.sqrt((-Ai$*2)*this.Adm
);}if(this.E0>0)this.E0=this.E0+20;if(this.E0<0)this.E0=this.E0-20;this.AfM=(400-(
this.E0*this.E0))/(2*Jk);this.Apc=EQ;}else this.E0=0;}if((this.DG[1]<=this.Gp[1]
)||(this.DG[1]>=this.Ga[1]))this.E1=0;else if(!this.E1){var ER=this.DG[1];var Fi=
this.Gp[1];var EI=this.Ga[1];if(ER<Fi)EI=this.Gp[1];else if(ER>EI)Fi=this.Ga[1];
else if(this.WS[1]<=1){Fi=ER;EI=ER;}else{var Adq=(EI-ER)%this.WS[1];EI=(ER-this.
WS[1])+Adq;Fi=ER+Adq;if(EI<this.Gp[1])EI=this.Gp[1];if(Fi>this.Ga[1])Fi=this.Ga[
1];}if((Fi-ER)<=(ER-EI))ER=Fi;else ER=EI;if(ER!==this.DG[1]){var Jk=ER-this.DG[1
];if(Jk>0)this.E1=Math.sqrt((Jk*2)*this.Adm)+20;if(Jk<0)this.E1=-Math.sqrt((-Jk*
2)*this.Adm)-20;this.AfN=(400-(this.E1*this.E1))/(2*Jk);this.Apd=ER;}}else{var BBF=
this.E1*this.E1;var Jk=BBF/(2*this.Adm);var ER=this.DG[1];if(this.E1>0)ER=ER+(Jk|
0);if(this.E1<0)ER=ER-(Jk|0);if(ER>this.Ga[1])ER=this.Ga[1];else if(ER<this.Gp[1
])ER=this.Gp[1];var Bf5=ER;var Fi=this.Gp[1];var EI=this.Ga[1];if(ER<Fi)EI=this.
Gp[1];else if(ER>EI)Fi=this.Ga[1];else if(this.WS[1]<=1){Fi=ER;EI=ER;}else{var Adq=(
EI-ER)%this.WS[1];EI=(ER-this.WS[1])+Adq;Fi=ER+Adq;if(EI<this.Gp[1])EI=this.Gp[1
];if(Fi>this.Ga[1])Fi=this.Ga[1];}if(this.E1>0){if(EI<=this.DG[1])ER=Fi;else if((
ER-EI)<(Fi-ER))ER=EI;else ER=Fi;}else if(Fi>=this.DG[1])ER=EI;else if((ER-EI)>(Fi-
ER))ER=Fi;else ER=EI;if(ER!==this.DG[1]){Jk=ER-this.DG[1];if(ER!==Bf5){var Ai$=ER-
Bf5;if(Ai$>0)this.E1=this.E1+Math.sqrt((Ai$*2)*this.Adm);if(Ai$<0)this.E1=this.E1-
Math.sqrt((-Ai$*2)*this.Adm);}if(this.E1>0)this.E1=this.E1+20;if(this.E1<0)this.
E1=this.E1-20;this.AfN=(400-(this.E1*this.E1))/(2*Jk);this.Apd=ER;}else this.E1=
0;}if(!!BP)this.Amg=BP.Bs;if(!!Ix)this.Amg=Ix.Bs;this.Auj=this.Amg;this.Ami=this.
DG[0];this.Amj=this.DG[1];this.BBG();return this;},Ym:function(Da,BG,Ob,Aan,Ac5,
Ac4){var B;if(!!Aan&&(Aan!==this))return null;if(this.Bp>=33554432)return null;if((
this.Bp>=16777216)&&!(this.Bp&(4096<<BG)))return null;if(!this.AGH&&!!(Ac4&0xC))
return null;var Az=A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qe=
A.aaI(Da);var Fv=Cc;if(Qe[0]<Az[0])Fv=[Az[0]-Qe[0],Fv[1]];if(Qe[0]>=Az[2])Fv=[(Az[
2]-Qe[0])-1,Fv[1]];if(Qe[1]<Az[1])Fv=[Fv[0],Az[1]-Qe[1]];if(Qe[1]>=Az[3])Fv=[Fv[
0],(Az[3]-Qe[1])-1];return A._NewObject(C.AuU,0).Initialize(this,Fv);}return null;
},A35:function(){if(!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;
}},BBG:function(){this.timer=A._GetAutoObject(A.acl.Aeh);A.zV([this,this.Me],this.
timer,0);},Me:function(G){var B;if(!this.timer)return;var Auo=(this.timer.Bs-this.
Amg)*0.001;var Aup=(this.timer.Bs-this.Auj)*0.001;var BBR=Auo*Auo;var BBS=Aup*Aup;
var AiO=(this.AfM*Auo)+this.E0;var AiP=(this.AfN*Aup)+this.E1;var CE=[((((this.AfM
*0.5)*BBR)+(this.E0*Auo))+this.Ami)|0,((((this.AfN*0.5)*BBS)+(this.E1*Aup))+this.
Amj)|0];if(this.XK&&(Auo>=0.5)){CE=[this.Apc,CE[1]];this.E0=0;this.AfM=0;this.Ami=
CE[0];this.XK=false;}else if(this.XK){var LK=1-Math.pow(1-(Auo/0.5),5);CE=[(this.
Ami+((this.Apc-this.Ami)*LK))|0,CE[1]];}if(this.XL&&(Aup>=0.5)){CE=[CE[0],this.Apd
];this.E1=0;this.AfN=0;this.Amj=CE[1];this.XL=false;}else if(this.XL){var LK=1-Math.
pow(1-(Aup/0.5),5);CE=[CE[0],(this.Amj+((this.Apd-this.Amj)*LK))|0];}if(((this.E0>
0)&&(AiO<0))||((this.E0<0)&&(AiO>0))){AiO=0;CE=[this.DG[0],CE[1]];}if(((this.E1>
0)&&(AiP<0))||((this.E1<0)&&(AiP>0))){AiP=0;CE=[CE[0],this.DG[1]];}if(!this.XK&&(
CE[0]<this.Gp[0])){this.Ami=CE[0];this.Apc=this.Gp[0];this.Amg=this.timer.Bs;this.
XK=true;}else if(!this.XK&&(CE[0]>this.Ga[0])){this.Ami=CE[0];this.Apc=this.Ga[0
];this.Amg=this.timer.Bs;this.XK=true;}if(!this.XL&&(CE[1]<this.Gp[1])){this.Amj=
CE[1];this.Apd=this.Gp[1];this.Auj=this.timer.Bs;this.XL=true;}else if(!this.XL&&(
CE[1]>this.Ga[1])){this.Amj=CE[1];this.Apd=this.Ga[1];this.Auj=this.timer.Bs;this.
XL=true;}if(((!this.XK&&!!this.E0)&&(AiO>-20))&&(AiO<20)){CE=[this.Apc,CE[1]];this.
E0=0;this.AfM=0;this.Ami=CE[0];}if(((!this.XL&&!!this.E1)&&(AiP>-20))&&(AiP<20)){
CE=[CE[0],this.Apd];this.E1=0;this.AfN=0;this.Amj=CE[1];}if(!A.aaX(CE,this.DG)){
this.A5G=A.abe(CE,this.DG);this.DG=CE;(B=this.At7)?B[1].call(B[0],this):null;(B=
this.AF1)?B[1].call(B[0],this):null;}if(((!this.E0&&!this.E1)&&!this.XK)&&!this.
XL){this.A35();this.ZQ=false;(B=this.Zr)?B[1].call(B[0],this):null;}},ATp:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WS=E;},ASX:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6n)return;this.A6n=E;if(E<(1e-007))E=1e-007;this.Adm=
E*10000;},_Init:function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.H9;this.
U=0x10011B;},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKE)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF1
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zr)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BM={Ah:null,Lm:null,BN:null,D1:null,ApW:
0,Bs:0,A_Q:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Acl:false,NH:false,Init:function(
aArg){var B;var C1=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(Afz
);this.Ah=C1.AKk;C1.AKk=this;},G2:function(CN){var B;if(!!CN&&CN.Bjc(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_Q=this.ApW;this.Acl=this.ApW>0;if(this.Acl)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BN)?B[1].call(B[0],this):null;if(!this.NH)this.ApW=this.
ApW+1;return!this.NH;}if(!CN.Down){this.Acl=this.ApW>1;this.A_Q=this.ApW-1;this.
ApW=0;(B=this.Lm)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BM;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lm)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuU={Ch:null,AuW:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ch=Ag;this.DG=
aOffset;this.AuW=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuU;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ch)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7y={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A7y;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arn={Ny:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arn;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ny)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AD3={AiX:A.wf,AiW:A.wf,_Init:function(aArg
){C.Arn._Init.call(this,aArg);this.__proto__=C.AD3;},_className:"Core::LayoutLineContext"
};C.AD4={AAO:A.wf,AAN:A.wf,AiX:A.wf,AiW:A.wf,_Init:function(aArg){C.Arn._Init.call(
this,aArg);this.__proto__=C.AD4;},_className:"Core::LayoutQuadContext"};C.ANR={C1:
null,Ah:null,RB:null,RK:null,Mc:null,ApS:null,_Init:function(aArg){this.__proto__=
C.ANR;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mc)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApS)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUU={FP:null,B_:null,B9:null,Bds:false,
Byi:function(){if(!this.FP)return;var Ph=this.FP;this.FP.Pc=null;this.FP=null;A.
pe([this,this.A3e],this);Ph.A70(this);},Bz8:function(G){if(!!this.FP)return;if(!
this.B9)return;this.FP=this.B9;this.B9=this.B9.Ah;if(!!this.B9)this.B9.AJ=null;else
this.B_=null;this.FP.Ah=null;this.Bds=true;this.FP.SJ(this);this.Bds=false;},BAs:
function(G){A.pe([this,this.Bz8],this);},BAr:function(G){A.pe([this,this.BAs],this
);},A3e:function(G){A.pe([this,this.BAr],this);},Bhf:function(Jg){if(!Jg||!Jg.Pc
)return;if(Jg.Pc!==this)throw new Error(Aae);var Bgy=false;if(this.FP===Jg){this.
FP=null;Bgy=true;A.pe([this,this.A3e],this);}else{if(!!Jg.Ah)Jg.Ah.AJ=Jg.AJ;else
this.B_=Jg.AJ;if(!!Jg.AJ)Jg.AJ.Ah=Jg.Ah;else this.B9=Jg.Ah;Jg.AJ=null;Jg.Ah=null;
}Jg.Pc=null;if(Bgy)Jg.A7Z(this);},A_Y:function(Jg,A03){if(!Jg)return;if(!!Jg.Pc)
throw new Error(Xd);Jg.Pc=this;if(A03){Jg.Ah=this.B9;if(!!this.B9)this.B9.AJ=Jg;
else this.B_=Jg;this.B9=Jg;}else{Jg.AJ=this.B_;if(!!this.B_)this.B_.Ah=Jg;else this.
B9=Jg;this.B_=Jg;}if(!this.FP)A.pe([this,this.A3e],this);},_Init:function(aArg){
this.__proto__=C.AUU;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Ak1={Pc:null,AJ:null,Ah:
null,A70:function(Ats){},A7Z:function(Ats){},SJ:function(Ats){this.AmC();},Mm:function(
){if(!!this.Pc&&(this.Pc.FP===this))this.Pc.Byi();},AmC:function(){if(!!this.Pc)
this.Pc.Bhf(this);},AQ0:function(){return!!this.Pc&&(this.Pc.FP===this);},_Init:
function(aArg){this.__proto__=C.Ak1;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pc)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUS={At:null,Aul:
null,SJ:function(Ats){this.Aul.At=this.At;A.we(this.Aul,0);A.pe([this,this.Bz5],
this);},Bz5:function(G){this.Aul.At=null;this.Aul=null;this.At=null;this.Mm();},
_Init:function(aArg){C.Ak1._Init.call(this,aArg);this.__proto__=C.AUS;},_Mark:function(
D){var B;C.Ak1._Mark.call(this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxI={_Init:function(){C.AUU._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AhA={resource:null,Lb:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.AhA;this.Init(aArg);A.h7++;},_Done:function(){this.Lb();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mz:null,timer:null,Bs:0,Period:1000,VF:0,Bw:false,Lb:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKM:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PP:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKM(this.VF,E);},WC:function(E){if(E<0)E=0;if(E===
this.VF)return;this.VF=E;if(this.Bw)this.AKM(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKM(this.VF,this.Period);else this.AKM(0,
0);this.Bs=this.Avl();},Avl:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avl();if(!this.
Period)this.Ar(false);(B=this.Mz)?B[1].call(B[0],this):null;},AxG:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mz)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUm:0,AvZ:0
,AjX:0,GK:0,Hi:0,Year:0,Bc1:function(AfJ,A0v){if(A0v)switch(AfJ){case 1:return A.
aci.Bjl;case 2:return A.aci.Bid;case 3:return A.aci.BjD;case 4:return A.aci.BgV;
case 5:return A.aci.BjH;case 6:return A.aci.Bjo;case 7:return A.aci.Bjn;case 8:return A.
aci.BgX;case 9:return A.aci.Boh;case 10:return A.aci.Bj1;case 11:return A.aci.Bj0;
case 12:return A.aci.BhD;default:return A.jV;}else switch(AfJ){case 1:return A.aci.
ADX;case 2:return A.aci.ACH;case 3:return A.aci.AD9;case 4:return A.aci.ABJ;case
5:return A.aci.AD$;case 6:return A.aci.ADZ;case 7:return A.aci.ADY;case 8:return A.
aci.ABQ;case 9:return A.aci.AGv;case 10:return A.aci.AEl;case 11:return A.aci.AEj;
case 12:return A.aci.ACs;default:return A.jV;}},BcZ:function(Bby,A0v){if(A0v)switch(
Bby){case 1:return A.aci.BjM;case 2:return A.aci.BpC;case 3:return A.aci.Bqi;case
4:return A.aci.Bpn;case 5:return A.aci.Biq;case 6:return A.aci.Boa;case 0:return A.
aci.Bpa;default:return A.jV;}else switch(Bby){case 1:return A.aci.BjL;case 2:return A.
aci.BpB;case 3:return A.aci.Bqh;case 4:return A.aci.Bpm;case 5:return A.aci.Bip;
case 6:return A.aci.Bn$;case 0:return A.aci.Bo$;default:return A.jV;}},BcY:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JO:function(){var d=this.GK;var K3=this.Hi;var Dg=this.Year-((
K3<=2)?1:0);var AzD=(((Dg>=0)?Dg:Dg-399)/400)|0;var Amq=Dg-(AzD*400);var Vc=(((((
153*(K3+((K3>2)?-3:9)))+2)/5)|0)+d)-1;var Ao$=(((Amq*365)+((Amq/4)|0))-((Amq/100
)|0))+Vc;var Qg=((AzD*146097)+Ao$)-719468;return(((Qg*86400)+(this.AjX*3600))+(this.
AvZ*60))+this.AUm;},AFJ:function(E){var B;E+=62162035200;if(E<0)E=0;var Vq=Math.
trunc(E/86400)|0;var AzD=(((Vq>=0)?Vq:Vq-146096)/146097)|0;var Ao$=Vq-(AzD*146097
);var Amq=((((Ao$-((Ao$/1460)|0))+((Ao$/36524)|0))-((Ao$/146096)|0))/365)|0;var Dg=
Amq+(AzD*400);var Vc=Ao$-(((365*Amq)+((Amq/4)|0))-((Amq/100)|0));var A2C=(((5*Vc
)+2)/153)|0;var d=(Vc-((((153*A2C)+2)/5)|0))+1;var K3=A2C+((A2C<10)?3:-9);var BK=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K3<=2)?1:0);this.Uq(K3);this.Lo(d);this.AnC(BK+((BK<0)?24:0));this.AnF(O+((O<0)?
60:0));this.AnI(s+((s<0)?60:0));},Zs:function(){if(this.Hi===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hi===4)||(this.Hi===6))||(this.Hi===9))||(this.Hi===11))return 30;else return 31;
},Bk$:function(){var B;var Vc=this.Ab4()-1;var AtI=(6+this.Av$())%7;var Apb=((371+
AtI)-Vc)%7;if(this.Hi===12){var d=this.GK;if((d===31)&&(AtI<3))return 0;if((d===
30)&&(AtI<2))return 0;if((d===29)&&(AtI<1))return 0;}if(Apb<=3)Vc+=Apb;else Vc-=(
7-Apb);if(Vc<0){var d=this.GK;var K3=this.Hi;this.Year--;this.Lo(31);this.Uq(12);
Vc=this.Ab4()-1;AtI=(6+this.Av$())%7;Apb=((371+AtI)-Vc)%7;if(Apb<=3)Vc+=Apb;else
Vc-=Apb;this.Year++;this.Lo(d);this.Uq(K3);}return(Vc/7)|0;},Ab4:function(){var B;
var d=this.GK;var K3=this.Hi;var Dg=this.Year;var Af7=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K3){case 2:d+=31;break;case 3:d+=(59+Af7);break;case 4:
d+=(90+Af7);break;case 5:d+=(120+Af7);break;case 6:d+=(151+Af7);break;case 7:d+=(
181+Af7);break;case 8:d+=(212+Af7);break;case 9:d+=(243+Af7);break;case 10:d+=(273+
Af7);break;case 11:d+=(304+Af7);break;case 12:d+=(334+Af7);break;default:;}return d;
},Av$:function(){var B;var d=this.GK;var K3=this.Hi+((this.Hi>2)?-2:10);var Dg=this.
Year-((this.Hi<=2)?1:0);var B3=(Dg/100)|0;Dg%=100;d+=((((((((26*K3)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnI:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUm=E;},AnF:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvZ=E;},AnC:function(E){if(E<0)E=0;if(E>23)E=23;this.AjX=E;},Lo:function(
E){if(E<1)E=1;if(E>31)E=31;this.GK=E;},Uq:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hi=E;},Format:function(Iu){var result=A.jV;var inx=0;while(!!(Iu.charCodeAt(inx)||
0))if((Iu.charCodeAt(inx)||0)===0x25){var AaH=1;inx=inx+1;if((Iu.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaH=0;}switch(Iu.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GK,2*AaH,10);break;case 0x48:result=result+A.abl(this.AjX,2*AaH,10);break;
case 0x49:if(!(this.AjX%12))result=result+Aaf;else result=result+A.abl(this.AjX%
12,2*AaH,10);break;case 0x6D:result=result+A.abl(this.Hi,2*AaH,10);break;case 0x4D:
result=result+A.abl(this.AvZ,2*AaH,10);break;case 0x70:if(this.AjX<12)result=result+
A.aci.BgE;else result=result+A.aci.Bnz;break;case 0x53:result=result+A.abl(this.
AUm,2*AaH,10);break;case 0x77:result=result+A.abl(this.Av$(),AaH,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaH,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaH,10);break;case 0x25:result=result+Aag;break;case 0x6A:result=result+
A.abl(this.Ab4(),3*AaH,10);break;case 0x57:result=result+A.abl(this.Bk$(),2*AaH,
10);break;case 0x61:result=result+this.BcZ(this.Av$(),true);break;case 0x41:result=
result+this.BcZ(this.Av$(),false);break;case 0x62:result=result+this.Bc1(this.Hi
,true);break;case 0x42:result=result+this.Bc1(this.Hi,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iu.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac6,AfJ,BwA,BwR,Bw8,Bxp){this.Year=Ac6;this.
Uq(AfJ);this.Lo(BwA);this.AnC(BwR);this.AnF(Bw8);this.AnI(Bxp);return this;},Initialize:
function(Aia){this.AFJ(Aia);return this;},BhI:function(Aia){if(!Aia)return A._NewObject(
C.An6,0).Initialize(this.JO());return A._NewObject(C.An6,0).Initialize(this.JO()-
Aia.JO());},BoM:function(AyX){if(!AyX)return this;return A._NewObject(C.Bs,0).Initialize(
this.JO()-AyX.JO());},J:function(AyX){if(!AyX)return this;return A._NewObject(C.
Bs,0).Initialize(this.JO()+AyX.JO());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An6={AGs:0,AEc:0,ADq:0,Kj:0,JO:function(
){return(((this.Kj*86400)+(this.ADq*3600))+(this.AEc*60))+this.AGs;},AFJ:function(
E){var AK0=1;this.Kj=Math.trunc(E/86400)|0;if(E<0){E=-E;AK0=-1;}this.ADq=AK0*(Math.
trunc(E/3600)%24|0);this.AEc=AK0*(Math.trunc(E/60)%60|0);this.AGs=AK0*(E%60|0);}
,Initialize2:function(BwB,BwS,Bw9,Bxs){this.Kj=BwB;this.ADq=BwS;this.AEc=Bw9;this.
AGs=Bxs;return this;},Initialize:function(Aia){this.AFJ(Aia);return this;},_Init:
function(aArg){this.__proto__=C.An6;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$k={At:null,Pc:null,Trigger:function(Bwv,A03){var Ph=A._NewObject(C.AUS,0);
Ph.Aul=this;Ph.At=Bwv;this.Pc.A_Y(Ph,A03);},_Init:function(aArg){this.__proto__=
C.A$k;this.Pc=A._GetAutoObject(C.AxI);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$l={JJ:null,Event:null,AR$:null,At0:function(G){var B;if(
!this.Event)return;this.JJ=this.Event.At;(B=this.AR$)?B[1].call(B[0],this):null;
this.JJ=null;},BlO:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.At0],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.At0],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$l;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFU={Dv:0x1,BCA:0x2,BDJ:0x4,BFJ:0x8,Bw:0x10,H8:0x20
,BDK:0x40,BEp:0x80,BDF:0x100,BD5:0x200,BDt:0x400,BE3:0x800,Bl:0x1000,BFR:0x2000,
BEM:0x4000,BEN:0x8000,Abl:0x10000,BEL:0x20000,BFe:0x40000,BDk:0x80000,BEV:0x100000
,BDe:0x200000};C.PJ={BE5:0x1,BE6:0x2,BCw:0x4,BCx:0x8,BCy:0x10,BCv:0x20};C.AgY={None:
0,BFF:1,BCT:2,BD_:3,BE9:4,BFG:5,BFH:6,BCU:7,BCV:8,BEa:9,BD$:10,BE$:11,BE_:12};C.
AuY={None:0,BFD:1,Left:2,BCR:3,ZV:4,A5c:5,BFE:6,Right:7,BCS:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BE7={BF0:0x1,BFX:0x2,BFY:0x4,BFZ:
0x8,BEc:0x10,BDM:0x20};
C._Init=function(){C.Akk.__proto__=C.Ch;C.ZF.__proto__=C.Ch;C.Et.__proto__=C.Ch;C.
P.__proto__=C.Et;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARg.__proto__=
C.Event;C.AuT.__proto__=C.Event;C.Aed.__proto__=C.Event;C.AqK.__proto__=C.Event;
C.Y.__proto__=C.Et;C.CM.__proto__=C.P;C.Dy.__proto__=C.P;C.Bn.__proto__=C.ZF;C.H9.
__proto__=C.Et;C.AD3.__proto__=C.Arn;C.AD4.__proto__=C.Arn;C.AUS.__proto__=C.Ak1;
};C._ReInit=function(){var B;if((B=C.AxI._this))B._ReInit(),C.AxI._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxI._this)&&(B._cycle!=D))B._Done(C.AxI._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */