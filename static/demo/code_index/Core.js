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
var Cc=[0,0];var BD=[0,0,0,0];var E6="The view does not belong to this group";var
Hp=[1000,740];var IS="The dialog component is already presented";var Ir="The dialog component is actually not presented";
var O1="No fader to perform the fade-in/out operation";var P3="Trying to use the same fader twice";
var P4="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Fe="View is not in this group";var L1="Sibling view does not belong to the group";
var P5="No view to remove";var J0="No view to add";var N_="View already in a group";
var P6="Recursive invalidate during active update cycle.";var MG=[-8,-8,9,9];var
S6="No group to end the modal state.";var UN="The group is not modal.";var Z0="No group to obtain the modal state.";
var WY="The group serves already as the \'virtual keyboard\'.";var Is="The group is already modal.";
var UO="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z1="The method SwitchToDialog() is not available in Core::VerticalList.";
var WZ="The method DismissDialog() is not available in Core::VerticalList.";var Z2=
"The method PresentDialog() is not available in Core::VerticalList.";var W0="The method FadeGroup() is not available in Core::VerticalList.";
var Z3="The method RestackBehind() is not available in Core::VerticalList.";var Z4=
"The method RestackTop() is not available in Core::VerticalList.";var UP="The method Restack() is not available in Core::VerticalList.";
var W1="The method Remove() is not available in Core::VerticalList.";var P7="The method AddBehind() is not available in Core::VerticalList.";
var Z5="The method Add() is not available in Core::VerticalList.";var O2="The Slide Touch Handler:";
var Rj="is already connected with a view.";var W2="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W3=[0,0,170,120];var W4="The method SwitchToDialog() is not available in Core::HorizontalList.";
var W5="The method DismissDialog() is not available in Core::HorizontalList.";var
Z6="The method PresentDialog() is not available in Core::HorizontalList.";var W6=
"The method FadeGroup() is not available in Core::HorizontalList.";var W7="The method RestackBehind() is not available in Core::HorizontalList.";
var S7="The method RestackTop() is not available in Core::HorizontalList.";var UQ=
"The method Restack() is not available in Core::HorizontalList.";var UR="The method Remove() is not available in Core::HorizontalList.";
var AcH="The method AddBehind() is not available in Core::HorizontalList.";var S8=
"The method Add() is not available in Core::HorizontalList.";var Z7=[0,0,1,1];var
Afw="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Z8="Trying to cancel a task not belonging to this queue!";var W8="Trying to enqueue a task twice!";
var Z9="12";var Z_="%";
C.Ch={Ah:null,AJ:null,Ab:null,Eu:null,U:0x103,JY:0,PJ:0x14,AtK:function(BG,Ah3){}
,ArX:function(E){if(this.JY===E)return;this.JY=E;if(!!this.Ab){var Ai0=this.Ah;var
Ha=0;while(!!Ai0&&(E>Ai0.JY)){Ai0=Ai0.Ah;Ha=Ha+1;}Ai0=this.AJ;while(!!Ai0&&(E<Ai0.
JY)){Ai0=Ai0.AJ;Ha=Ha-1;}if(!!Ha)this.Ab.JW(this,Ha);}},AZ:function(E){var B;var
Ha=E^this.PJ;if(!Ha)return;this.PJ=E;if(!!this.Eu&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JH],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eu&&((this.U&0x400)===0x400)){this.Eu.Ny.U=this.Eu.
Ny.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JH],this);}},Il:function(
){var B0=this.Ab;while(!!B0){var IC=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IC)return IC;
B0=B0.Ab;}return null;},Kl:function(CY,aClip,aOffset,Ci,aBlend){},GetClipping:function(
){return this.GetExtent();},G2:function(CN){return null;},Yc:function(Da,BF,Oc,Aae
,Ac0,AcZ){return null;},Auu:function(Da){return Da;},AuE:function(BG,MK){return Cc;
},Anc:function(aOffset,Atg){},GetExtent:function(){return BD;},Cr:function(Rq,U1
){var B;if(((this.U&0x200)===0x200))Rq=Rq&~0x400;var A2t=(this.U&~U1)|Rq;var Xr=
A2t^this.U;this.U=A2t;if(!!this.Ab&&!!(Xr&0x14)){var BcC=((this.U&0x14)===0x14);
if(BcC&&!this.Ab.AV)this.Ab.Bb(this);if(!BcC&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACG(this,0x14));}if(!!this.Ab&&!!(Xr&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Eu&&!!this.Ab)&&((A2t&0x400)===0x400))&&((Xr&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JH],this);}if(!!this.Ab&&((Xr&0x400
)===0x400)){this.Eu=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JH],this);}if(((((Xr&0x100000)===0x100000)&&((U1&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cr(0x0,0x10);if(((((
Xr&0x100000)===0x100000)&&((Rq&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cr(0x10,0x0);if(((((Xr&0x200000)===0x200000)&&((U1&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cr(
0x10,0x0);if((((((Xr&0x200000)===0x200000)&&((Rq&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hb.C0!==this)))
)this.Cr(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ch;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Aka={EC:A.wf,Es:A.wf
,AtK:function(BG,Ah3){var As=A._NewObject(C.ADZ,0);this.Eu=null;As.extent=this.getExtent(
);As.Bd=BG;As.Ny=Ah3;As.AiN=this.Es;As.AiO=this.EC;this.Eu=As;},AuE:function(BG,
MK){var B;var EW=this.PJ;var As=(C.ADZ.isPrototypeOf(B=this.Eu)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var J9=[BG[
2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;var tmp;if(!MK){var NB=[(B=As.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NB[0]!==J9[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qr=((EW&0x1)===0x1);if(!HS&&(Qr||!HT))x1=((
x1*J9[0])/NB[0])|0;if(!HT&&(Qr||!HS)){x2=x2-As.Bd[0];x2=((x2*J9[0])/NB[0])|0;x2=
x2-J9[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qr){if(HS&&!HT)x2=x1+BY;
else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NB[1]!==J9[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qs=((EW&0x2)===0x2);if(!HU&&(Qs||!HR))y1=((y1*J9[1])/NB[
1])|0;if(!HR&&(Qs||!HU)){y2=y2-As.Bd[1];y2=((y2*J9[1])/NB[1])|0;y2=y2-J9[1];}else
y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qs){if(HU&&!HR)y2=y1+BI;else if(!HU&&
HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(MK){case 3:{x1=BG[0];x2=x1+BY;}break;case 4:{x2=
BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((MK===3)||(MK===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qs=((EW&0x2)===0x2);if(Qs){y1=BG[1];y2=BG[3];}else if(HU&&!HR){y1=
BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((MK===1)||(MK===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qr=((EW&0x1)===0x1);if(Qr){x1=BG[0];x2=BG[2];}else if(HS&&!HT
){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((BG[2]-
BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BI=y2-y1;if(
As.AiO[0]<As.AiN[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.AiO[1]<As.AiN[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Es=[x1,y1];this.EC=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Eu=As;}return[BY,BI];},Anc:function(aOffset,Atg){if(Atg){this.Es=A.abf(this.Es,aOffset
);this.EC=A.abf(this.EC,aOffset);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.
abf(this.EC,aOffset));}},GetExtent:function(){if(!!this.Eu&&this.Eu.isEmpty)return BD;
return this.getExtent();},getExtent:function(){var x1=this.Es[0];var y1=this.Es[
1];var x2=this.EC[0];var y2=this.EC[1];var BY=x2-x1;var BI=y2-y1;var tmp;if(BY<0
)BY=-BY;if(BI<0)BI=-BI;if(BY>=BI){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BI>=BY){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DC:function(E){var B;if(A.aaX(E,this.
EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.
Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JH],this);}},DM:function(
E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.Es=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JH],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.
Aka;},_className:"Core::LineView"};C.Zx={Kv:A.wf,MC:A.wf,EC:A.wf,Es:A.wf,AtK:function(
BG,Ah3){var As=A._NewObject(C.AD0,0);this.Eu=null;As.extent=this.GetExtent();As.
Bd=BG;As.Ny=Ah3;As.AiN=this.Es;As.AiO=this.EC;As.AAJ=this.MC;As.AAK=this.Kv;this.
Eu=As;},AuE:function(BG,MK){var B;var EW=this.PJ;var As=(C.AD0.isPrototypeOf(B=this.
Eu)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var J9=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;if(!MK){var
NB=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NB[0]!==J9[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qr=((EW&0x1)===0x1);if(!HS&&(
Qr||!HT))x1=((x1*J9[0])/NB[0])|0;if(!HT&&(Qr||!HS)){x2=x2-As.Bd[0];x2=((x2*J9[0]
)/NB[0])|0;x2=x2-J9[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qr){if(HS&&
!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NB[1]!==J9[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qs=((EW&0x2)===0x2);if(!HU&&(Qs||!HR))y1=((
y1*J9[1])/NB[1])|0;if(!HR&&(Qs||!HU)){y2=y2-As.Bd[1];y2=((y2*J9[1])/NB[1])|0;y2=
y2-J9[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qs){if(HU&&!HR)y2=y1+BI;
else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MK){case 3:{x1=BG[0];x2=x1+BY;}break;
case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((MK===3)||(MK===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qs=((EW&0x2)===0x2);if(Qs){y1=BG[1];y2=BG[3];}else if(
HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MK===1)||(MK===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qr=((EW&0x1)===0x1);if(Qr){x1=BG[0];x2=BG[2];}else if(
HS&&!HT){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((
BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BI=(
y2-y1)-1;var Ait=As.extent[0];var Aiv=As.extent[1];var AfX=(As.extent[2]-Ait)-1;
var AfW=(As.extent[3]-Aiv)-1;if(!AfX)AfX=1;if(!AfW)AfW=1;if(((this.U&0x100)===0x100
)){this.Es=[x1+((((As.AiN[0]-Ait)*BY)/AfX)|0),y1+((((As.AiN[1]-Aiv)*BI)/AfW)|0)];
this.EC=[x1+((((As.AiO[0]-Ait)*BY)/AfX)|0),y1+((((As.AiO[1]-Aiv)*BI)/AfW)|0)];this.
MC=[x1+((((As.AAJ[0]-Ait)*BY)/AfX)|0),y1+((((As.AAJ[1]-Aiv)*BI)/AfW)|0)];this.Kv=[
x1+((((As.AAK[0]-Ait)*BY)/AfX)|0),y1+((((As.AAK[1]-Aiv)*BI)/AfW)|0)];}else{this.
DM([x1+((((As.AiN[0]-Ait)*BY)/AfX)|0),y1+((((As.AiN[1]-Aiv)*BI)/AfW)|0)]);this.DC([
x1+((((As.AiO[0]-Ait)*BY)/AfX)|0),y1+((((As.AiO[1]-Aiv)*BI)/AfW)|0)]);this.Ks([x1+((((
As.AAJ[0]-Ait)*BY)/AfX)|0),y1+((((As.AAJ[1]-Aiv)*BI)/AfW)|0)]);this.JS([x1+((((As.
AAK[0]-Ait)*BY)/AfX)|0),y1+((((As.AAK[1]-Aiv)*BI)/AfW)|0)]);this.Eu=As;}return[BY+
1,BI+1];},Anc:function(aOffset,Atg){if(Atg){this.Es=A.abf(this.Es,aOffset);this.
EC=A.abf(this.EC,aOffset);this.MC=A.abf(this.MC,aOffset);this.Kv=A.abf(this.Kv,aOffset
);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.abf(this.EC,aOffset));this.Ks(
A.abf(this.MC,aOffset));this.JS(A.abf(this.Kv,aOffset));}},GetExtent:function(){
if(!!this.Eu&&this.Eu.isEmpty)return BD;var x1=this.Es[0];var y1=this.Es[1];var x2=
this.MC[0];var y2=this.MC[1];if((((this.Kv[0]!==x1)||(this.EC[1]!==y1))||(this.EC[
0]!==x2))||(this.Kv[1]!==y2)){if(this.EC[0]<x1)x1=this.EC[0];if(this.MC[0]<x1)x1=
this.MC[0];if(this.Kv[0]<x1)x1=this.Kv[0];if(this.EC[1]<y1)y1=this.EC[1];if(this.
MC[1]<y1)y1=this.MC[1];if(this.Kv[1]<y1)y1=this.Kv[1];if(this.Es[0]>x2)x2=this.Es[
0];if(this.EC[0]>x2)x2=this.EC[0];if(this.Kv[0]>x2)x2=this.Kv[0];if(this.Es[1]>y2
)y2=this.Es[1];if(this.EC[1]>y2)y2=this.EC[1];if(this.Kv[1]>y2)y2=this.Kv[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JS:function(E){var B;if(A.aaX(E,this.Kv))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Kv=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JH],this);}},Ks:function(E){var B;if(A.aaX(E,
this.MC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Eu=null;this.MC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JH],this);}},DC:function(
E){var B;if(A.aaX(E,this.EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JH],this);}},DM:function(E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Es=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JH],this);}},AQ0:function(KY){var HB=A.abi(4,
A.wf,null);var O=0;var If=3;var A1Z=false;var A10=false;HB.Set(0,this.Es);HB.Set(
1,this.EC);HB.Set(2,this.MC);HB.Set(3,this.Kv);while(O<4){var Bgl=HB.Get(O)[0];var
ALl=HB.Get(O)[1];var BB2=HB.Get(If)[0];var A4b=HB.Get(If)[1];if(((ALl>KY[1])!==(
A4b>KY[1]))||((ALl<KY[1])!==(A4b<KY[1]))){var Eo=((((BB2-Bgl)*(KY[1]-ALl))/(A4b-
ALl))|0)+Bgl;if(KY[0]>Eo)A1Z=!A1Z;if(KY[0]<Eo)A10=!A10;}If=O;O=O+1;}return A1Z||
A10;},BiJ:function(){return((((this.Es[0]===this.Kv[0])&&(this.EC[0]===this.MC[0
]))&&(this.Es[1]===this.EC[1]))&&(this.MC[1]===this.Kv[1]))||((((this.Es[0]===this.
EC[0])&&(this.MC[0]===this.Kv[0]))&&(this.Es[1]===this.Kv[1]))&&(this.EC[1]===this.
MC[1]));},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.Zx;},
_className:"Core::QuadView"};C.Et={M:A.wg,AtK:function(BG,Ah3){var As=A._NewObject(
C.Arc,0);As.extent=this.M;As.Bd=BG;As.Ny=Ah3;this.Eu=As;},AuE:function(BG,MK){var
B;var EW=this.PJ;var As=this.Eu;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var J9=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=
y2-y1;if(!MK){var NB=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NB[0]!==J9[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qr=((EW&0x1
)===0x1);if(!HS&&(Qr||!HT))x1=((x1*J9[0])/NB[0])|0;if(!HT&&(Qr||!HS)){x2=x2-As.Bd[
0];x2=((x2*J9[0])/NB[0])|0;x2=x2-J9[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qr){if(HS&&!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NB[1]!==J9[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qs=((EW&0x2)===0x2);if(
!HU&&(Qs||!HR))y1=((y1*J9[1])/NB[1])|0;if(!HR&&(Qs||!HU)){y2=y2-As.Bd[1];y2=((y2
*J9[1])/NB[1])|0;y2=y2-J9[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qs
){if(HU&&!HR)y2=y1+BI;else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(MK){case 3:{x1=
BG[0];x2=x1+BY;}break;case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((MK===3)||(MK===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qs=((EW&0x2)===0x2);if(Qs){y1=BG[
1];y2=BG[3];}else if(HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((MK===1)||(MK===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qr=((EW&0x1)===0x1);if(Qr){x1=BG[
0];x2=BG[2];}else if(HS&&!HT){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-
BY;}else{x1=BG[0]+((((BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eu=As;}return[x2-x1,y2-y1];},Anc:function(aOffset,Atg){if(Atg)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JH],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.
__proto__=C.Et;},_className:"Core::RectView"};C.P={B7:null,B8:null,AKg:null,FD:null
,Hb:null,Xs:null,ApJ:null,AV:null,G7:255,AzB:0,AzE:0,AzD:0,AzC:0,Init:function(aArg
){this.Am();},Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;Ci=((Ci+1)*this.G7)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FD||(CY.C0===this))this.Bcr(CY,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ci,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Ci&0xFF)<<24);this.FD.Update();CY.A5m(aClip,this.FD,0,A.abh(this.M,aOffset),Cc,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FD)return Az;
Az=[].concat(Az[0]-this.AzC,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzE);Az=A.abN(
Az,Az[2]+this.AzD);Az=[].concat(Az.slice(0,3),Az[3]+this.AzB);if(((this.U&0x80000
)===0x80000)){var ApW=BD;var X;for(X=this.B7;!!X;X=X.Ah)if(((X.U&0x1)===0x1))ApW=
A.wC(ApW,X.GetClipping());Az=A.wC(Az,A.abh(ApW,this.M.slice(0,2)));}return Az;},
Yc:function(Da,BF,Oc,Aae,Ac0,AcZ){var B;var X=this.B8;var Apd=null;var AE=BD;var
J_=null;var A2i=!!this.Xs&&(!!this.Xs.FP||!!this.Xs.B7);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac0){X=Ac0;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J_){J_=X.
AJ;while(!!J_&&!((J_.U&0x200)===0x200))J_=J_.AJ;if(!!J_)AE=A.lb(Da,J_.GetExtent(
));else AE=BD;}if(J_===X){J_=null;AE=BD;}if((!!Aae&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hb.C0===X)&&!A2i))
)){var extent=X.GetExtent();var AJK=Aae;var AoZ=null;if(AJK===X)AJK=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))AoZ=X.Yc(AE
,BF,Oc,AJK,Ac0,AcZ);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aae===
X))AoZ=X.Yc(Da,BF,Oc,AJK,Ac0,AcZ);X=X.AJ;if(!!AoZ){if(!Apd||((AoZ.AuP<Apd.AuP)&&(
AoZ.AuP>=0)))Apd=AoZ;if(!AoZ.AuP)X=null;}}else X=X.AJ;Ac0=null;}return Apd;},Auu:
function(Da){var B;var F;var X=this.B7;var LA=BD;var AAD=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var AtW=(C.Y.isPrototypeOf(
X)?X:null);LA=A.lb(Da,AtW.M);AAD=((AtW.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAD){var AE=A.lb(X.GetClipping(),LA);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.Auu(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.Auu(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cr:function(Rq,U1){var B;
var Tj=this.U;if(((!!this.Ab&&!!!this.FD)&&((this.U&0x80001)===0x80001))&&((U1&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Et.Cr.call(this,Rq,U1);if((((!!this.
Ab&&!!!this.FD)&&((this.U&0x1)===0x1))&&((Rq&0x80000)===0x80000))&&!((Tj&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xr=this.U^Tj;if(!!this.AV&&((Xr&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cr(0x40,0x0);else this.AV.Cr(0x0
,0x40);}if(!!this.Hb&&((Xr&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hb.C0.
U&0x14)===0x14))this.Hb.C0.Cr(0x40,0x0);else this.Hb.C0.Cr(0x0,0x40);}if(((Xr&0x10
)===0x10)){var X;for(X=this.B7;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hb.C0===X)))X.Cr(Rq&0x10,U1&
0x10);}if(!!Xr){this.U=this.U|0x8000;A.pe([this,this.ABi],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlQ=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKo=[
E[2]-E[0],E[3]-E[1]];var ApS=!A.aaX(AlQ,AKo);if(ApS&&!!this.FD){this.FD.ArI(AKo);
A.we(this,0);A.we(this.FD,0);}C.Et.H.call(this,E);if((ApS&&(AlQ[0]>0))&&(AlQ[1]>
0)){var Bd=[].concat(Cc,AlQ);var X=this.B7;while(!!X){if((!X.Eu&&(X.PJ!==0x14))&&
!((X.U&0x400)===0x400))X.AtK(Bd,null);X=X.Ah;}}if(ApS){this.U=this.U|0x5000;A.pe([
this,this.ABi],this);}},A3q:function(CN){var Bdm=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKg;if(!Bdm)return null;while(!!D5&&(!D5.Bw||!D5.G2(Bdm)))D5=D5.
Ah;return D5;},BBM:function(G){if(!!this.FD){this.FD.C0=this;var AE=A.abg(this.Auu(
A.abh(this.FD.QK,this.M.slice(0,2))),this.M.slice(0,2));this.FD.Au9(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bcr(this.FD,AE,Cc,255,true);this.FD.
C0=null;}},Bcr:function(CY,aClip,aOffset,Ci,aBlend){var B;var X=this.B7;var LA=BD;
var AAD=true;this.BhG(CY,aClip,aOffset,Ci,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var AtW=(C.Y.isPrototypeOf(X)?X:null);AAD=((AtW.U&0x1)===0x1);LA=aClip;if(!((
AtW.U&0x80000)===0x80000))LA=A.lb(LA,A.abh(AtW.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAD){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LA
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kl(CY,AE,aOffset,Ci,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kl(CY,AE,aOffset,Ci,aBlend);}}X=X.Ah;}this.BhJ(CY,aClip,aOffset,Ci,aBlend);},Bfk:
function(){var B;var A1S=((this.U&0x1000)===0x1000);var AiA=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aao=false;var Adh=BD;var K0=BD;var Aap=Cc;var AtG=0;var AtH=0;
var AtF=0;var Qk=0;var X=this.B8;var J_=null;var AlI=null;while(!!X){if(((X.U&0x800
)===0x800)){Aao=true;X.U=X.U&~0x800;}if(Aao&&((X.U&0x200)===0x200)){Aao=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgV)X.U=X.U|0x1000;}X=X.AJ;}Aao=false;X=this.B7;
if(A1S){this.U=this.U&~0x1000;A1S=!((AiA[0]>=AiA[2])||(AiA[1]>=AiA[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlI&&(AtF!==Qk)){var AdF=X;var AKK=0;var AAZ=Adh[2]-
Adh[0];var Azc=Adh[3]-Adh[1];var AJA=0;var Ap3=Cc;do if(((AdF.U&0x200)===0x200))
AdF=null;else if(((AdF.U&0x401)===0x401)){Ap3=[(B=AdF.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qk===3)||(Qk===4))AAZ=AAZ-Ap3[0];if((Qk===1)||(Qk===2))Azc=Azc-Ap3[1];
if(!AlI||((AAZ>=0)&&(Azc>=0))){AlI=AdF;AdF=AdF.Ah;if((Qk===3)||(Qk===4)){AAZ=AAZ-
AtG;if(Ap3[1]>AKK)AKK=Ap3[1];}if((Qk===1)||(Qk===2)){Azc=Azc-AtH;if(Ap3[0]>AJA)AJA=
Ap3[0];}}else AdF=null;}else AdF=AdF.Ah;while(!!AdF);if(!AlI)AlI=J_;K0=Adh;switch(
AtF){case 9:case 11:K0=[].concat(K0.slice(0,3),K0[1]+AKK);break;case 10:case 12:
K0=A.abP(K0,K0[3]-AKK);break;case 5:case 7:K0=A.abN(K0,K0[0]+AJA);break;case 6:case
8:K0=[].concat(K0[2]-AJA,K0.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eu&&(X.Eu.Ny!==J_))X.Eu=null;if((!X.Eu&&Aao)&&((X.PJ!==0x14)||!!Qk))X.
AtK(K0,J_);}if(!!X.Eu){if(A1S&&!((X.U&0x400)===0x400))X.AuE(AiA,0);if(Aao&&((X.U&
0x400)===0x400)){var C3=X.AuE(A.abh(K0,Aap),Qk);if(((X.U&0x1)===0x1)){var Bq=Cc;
switch(Qk){case 3:Bq=[C3[0]+AtG,Bq[1]];break;case 4:Bq=[-C3[0]-AtG,Bq[1]];break;
case 1:Bq=[Bq[0],C3[1]+AtH];break;case 2:Bq=[Bq[0],-C3[1]-AtH];break;default:;}Aap=
A.abf(Aap,Bq);}}}if(((X.U&0x200)===0x200)){if(Aao)A.pe(J_.El,J_);Aao=((X.U&0x1000
)===0x1000);J_=(C.Y.isPrototypeOf(X)?X:null);if(Aao){X.U=X.U&~0x1000;AtF=J_.AgV;
Qk=AtF;Adh=A.abh(J_.M,J_.Br);K0=Adh;Aap=Cc;AtG=J_.Space+J_.AUC;AtH=J_.Space;Aao=
!((Adh[0]>=Adh[2])||(Adh[1]>=Adh[3]));AlI=null;switch(AtF){case 9:case 10:Qk=3;break;
case 11:case 12:Qk=4;break;case 5:case 6:Qk=1;break;case 7:case 8:Qk=2;break;default:;
}}if(Aao)this.Bj(J_.M);}if(X===AlI){switch(AtF){case 9:case 11:Aap=[0,(Aap[1]+(K0[
3]-K0[1]))+AtH];break;case 10:case 12:Aap=[0,(Aap[1]-(K0[3]-K0[1]))-AtH];break;case
5:case 7:Aap=[(Aap[0]+(K0[2]-K0[0]))+AtG,0];break;case 6:case 8:Aap=[(Aap[0]-(K0[
2]-K0[0]))-AtG,0];break;default:;}AlI=null;}X=X.Ah;}if(Aao)A.pe(J_.El,J_);this.U=
this.U&~0x2000;this.Bl([AiA[2]-AiA[0],AiA[3]-AiA[1]]);},JH:function(G){A.pe([this
,this.ABi],this);},ABi:function(G){var B;var BBU=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Bfk();}if(((this.U&0x8000)===
0x8000)||BBU){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E6);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cr(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cr(0x60,0x0);else E.Cr(0x20
,0x0);}},BaG:function(Aq){this.Bb(Aq);},ASc:function(){return!!this.FD;},ArB:function(
E){var B;if(!!this.FD===E)return;if(!E){this.FD.AEl=null;this.FD.ArI(Cc);this.FD=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FD=A._NewObject(A.Graphics.Canvas,0);this.FD.ArI([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FD.AEl=[this,this.BBM];}A.we(this,0);},A7$:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cr(0x100000,0x0);else this.Cr(0x0
,0x100000);},Dj:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G7)return;
this.G7=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},AZU:
function(Aq){this.Dj(Aq);},Aj:function(E){if(E)this.Cr(0x400,0x0);else this.Cr(0x0
,0x400);},Bk9:function(E){if(E)this.Cr(0x2,0x0);else this.Cr(0x0,0x2);},Fo:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},ExtendClipping:function(Aoz,AoA,AoB,Aoy){var B;var Ay4=this.M;var Rw=
Ay4;if(Aoz<0)Aoz=0;if(Aoz>255)Aoz=255;if(AoA<0)AoA=0;if(AoA>255)AoA=255;if(AoB<0
)AoB=0;if(AoB>255)AoB=255;if(Aoy<0)Aoy=0;if(Aoy>255)Aoy=255;Rw=[].concat(Rw[0]-(
Math.max(Aoz,this.AzC)&0xFF),Rw.slice(1,4));Rw=A.abN(Rw,Rw[2]+(Math.max(AoA,this.
AzD)&0xFF));Rw=A.abP(Rw,Rw[1]-(Math.max(AoB,this.AzE)&0xFF));Rw=[].concat(Rw.slice(
0,3),Rw[3]+(Math.max(Aoy,this.AzB)&0xFF));if(Aoz!==this.AzC){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FD)&&!((this.U&0x80000)===0x80000)){var Az=Rw;Az=A.abN(Az
,Ay4[0]);this.Ab.Bj(Az);}this.AzC=Aoz&0xFF;}if(AoA!==this.AzD){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FD)&&!((this.U&0x80000)===0x80000)){var Az=Rw;Az=[].
concat(Ay4[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzD=AoA&0xFF;}if(AoB!==this.AzE
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FD)&&!((this.U&0x80000)===0x80000
)){var Az=Rw;Az=[].concat(Az.slice(0,3),Ay4[1]);this.Ab.Bj(Az);}this.AzE=AoB&0xFF;
}if(Aoy!==this.AzB){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FD)&&!((this.
U&0x80000)===0x80000)){var Az=Rw;Az=A.abP(Az,Ay4[3]);this.Ab.Bj(Az);}this.AzB=Aoy&
0xFF;}},BhJ:function(CY,aClip,aOffset,Ci,aBlend){},BhG:function(CY,aClip,aOffset
,Ci,aBlend){},GetMaximalSize:function(){return Hp;},GetMinimalSize:function(){return Cc;
},AUJ:function(It,Ob,Xc,S$,Ta,Ah4,O6,Rp,Ly,Lw,Lx){var B;if(!this.Hb){this.AkF(It
,Ob,Xc,S$,Ta,null,null,Ly,Lw,Lx);return;}var AlP=this.Hb;var JE=AlP.Ah;if(((It.U&
0x10000)===0x10000)&&(this.Hb.C0!==It))throw new Error(IS);var Adn=A._NewObject(
C.ANN,0);var Ry=AlP.Ry;var RH=null;var Mc=null;if(!!JE){RH=JE.RH;Mc=JE.Mc;}if(!!
JE&&!!AlP.ApI)RH=AlP.ApI;if(!!JE&&!!O6)Mc=O6;if(!!Ah4)Ry=Ah4;if(!Ob)Ob=A._GetAutoObject(
A.acl.Asv);if(!Xc)Xc=Ob;if(!Ta)Ta=S$;if(!S$)S$=Ta;Adn.Ry=Xc;Adn.Mc=S$;Adn.RH=Ta;
Adn.ApI=Rp;Adn.C0=It;Adn.Ah=this.Hb.Ah;this.Hb.Ah=null;this.Hb=Adn;if(this.AV===
It)this.Bb(null);AlP.C0.Cr(0x0,0x10040);if(((this.U&0x40)===0x40)&&((It.U&0x4)===
0x4))It.Cr(0x10040,0x0);else It.Cr(0x10000,0x0);if(!!Mc){this.NN(JE.C0,Mc.Ad8(),
null,null,Lx);this.NN(AlP.C0,Ry.R_(),null,null,true);this.NN(Adn.C0,Ob.R$(),Ly,Lw
,true);}else if(!!RH){this.NN(JE.C0,RH.Ad9(),null,null,Lx);this.NN(AlP.C0,Ry.R_(
),null,null,true);this.NN(Adn.C0,Ob.R$(),Ly,Lw,true);}else if(!!Ry){this.NN(AlP.
C0,Ry.R_(),null,null,Lx);this.NN(Adn.C0,Ob.R$(),Ly,Lw,true);}else this.NN(Adn.C0
,Ob.R$(),Ly,Lw,Lx);},Aqy:function(It,Ah4,O6,Rp,Ly,Lw,Lx){var B;if(!this.Hb)return;
if(!It)return;var KA=this.Hb;var JE=this.Hb.Ah;var ApO=null;while((!!KA&&(KA.C0!==
It))&&!!KA.Ah){ApO=KA;KA=JE;JE=KA.Ah;}if(!KA||(KA.C0!==It))throw new Error(Ir);if(
!ApO){this.Hb=JE;KA.Ah=null;}else{ApO.Ah=JE;KA.Ah=null;}KA.C0.Cr(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JE)&&!ApO)&&((JE.C0.U&0x200000)===0x200000))JE.C0.Cr(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JE)&&!ApO)&&((JE.C0.U&0x4)===0x4))JE.C0.Cr(
0x40,0x0);var Ry=KA.Ry;var RH=null;var Mc=null;if(!!JE)RH=JE.RH;if(!!JE&&!!KA.ApI
)RH=KA.ApI;if(!!JE&&!!Rp)RH=Rp;if(!!ApO&&!!JE)Mc=JE.Mc;if((!!ApO&&!!JE)&&!!O6)Mc=
O6;if(!!Ah4)Ry=Ah4;if(!!Mc){this.NN(JE.C0,Mc.Ad8(),null,null,Lx);this.NN(KA.C0,Ry.
R_(),Ly,Lw,true);}else if(!!RH){this.NN(JE.C0,RH.Ad9(),null,null,Lx);this.NN(KA.
C0,Ry.R_(),Ly,Lw,true);}else this.NN(KA.C0,Ry.R_(),Ly,Lw,Lx);},AkF:function(It,Ob
,Xc,S$,Ta,O6,Rp,Ly,Lw,Lx){var B;if(!It)return;if(!!this.Hb&&(this.Hb.C0===It)){this.
AUJ(It,Ob,Xc,S$,Ta,null,O6,Rp,Ly,Lw,Lx);return;}if(((It.U&0x10000)===0x10000))throw new
Error(IS);var KA=A._NewObject(C.ANN,0);if(!!this.Hb&&!this.Hb.Mc){if(!Rp)Rp=O6;if(
!O6)O6=Rp;}var Mc=null;if(!!this.Hb)Mc=this.Hb.Mc;if(!!this.Hb&&!!O6)Mc=O6;if(!Ob
)Ob=A._GetAutoObject(A.acl.Asv);if(!Xc)Xc=Ob;if(!Ta)Ta=S$;if(!S$)S$=Ta;KA.Ry=Xc;
KA.Mc=S$;KA.RH=Ta;KA.ApI=Rp;if(this.AV===It)this.Bb(null);if(!!this.Hb&&((this.Hb.
C0.U&0x200000)===0x200000))this.Hb.C0.Cr(0x0,0x10);if(!!this.Hb)this.Hb.C0.Cr(0x0
,0x40);if(((this.U&0x40)===0x40)&&((It.U&0x4)===0x4))It.Cr(0x10040,0x0);else It.
Cr(0x10000,0x0);KA.C0=It;KA.Ah=this.Hb;this.Hb=KA;if(!!Mc){this.NN(this.Hb.Ah.C0
,Mc.Ad8(),null,null,Lx);this.NN(It,Ob.R$(),Ly,Lw,true);}else this.NN(It,Ob.R$(),
Ly,Lw,Lx);},A6z:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7b:function(
KY){var tmp=this;while(!!tmp){KY=A.abe(KY,tmp.M.slice(0,2));tmp=tmp.Ab;}return KY;
},BiF:function(KY){var tmp=this;while(!!tmp){KY=A.abf(KY,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KY;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A2i=!!this.Xs&&(!!this.Xs.FP||!!this.Xs.B7);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.Hb&&!A2i)GD=this.Hb.C0.DispatchEvent(CN);if(!GD&&!!B0)
GD=B0.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G2(CN);if(!GD)GD=this.G2(CN);if(!GD
)GD=this.A3q(CN);return GD;},BroadcastEventAtPosition:function(CN,Hz,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hz)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.
BroadcastEventAtPosition(CN,A.abe(Hz,B0.M.slice(0,2)),aFilter);else GD=X.G2(CN);
}X=X.AJ;}if(!GD)GD=this.G2(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.BroadcastEvent(CN,aFilter
);else GD=X.G2(CN);}X=X.AJ;}if(!GD)GD=this.G2(CN);if(!GD)GD=this.A3q(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},BiV:function(){this.U=this.U|0x4000;A.pe([
this,this.ABi],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABi],this
);},Bj:function(Da){var B;var B0=this;while(!!B0&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aal=B0.FD;if(!B0.Ab&&(B0!==this)){B0.Bj(Da);return;}if(!!Aal){var Bzy=Aal.
QK;Aal.QK=A.wC(Aal.QK,Da);if(!A.aaY(Bzy,Aal.QK)){A.we(B0,0);A.we(Aal,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Da=A.abh(Da,Az.slice(0,2));if(!!B0.FD||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FD){Az=[].concat(Az[0]-B0.AzC,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzE);Az=A.abN(Az,Az[2]+B0.AzD);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzB);}Da=A.lb(Da,Az);}B0=B0.Ab;}},QF:function(Ag,Gz,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Age=A.aaI(Ag.GetExtent());var X=Ag;var A03=null;var
Bb6=0;var IX=0x10000;var AKG;if(((aFilter&0x10000)===0x10000))IX=0x0;var top=((Gz===
4)||(Gz===1))||(Gz===6);var bottom=((Gz===5)||(Gz===3))||(Gz===8);var left=((Gz===
2)||(Gz===1))||(Gz===3);var right=((Gz===7)||(Gz===6))||(Gz===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B8;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IX||!((B=IX)&&((X.U&B)===B
))))for(AKG=0;AKG<2;AKG++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKG){if((left&&(s[0]>s[1]))&&(Az[2]<Age[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Age[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Age[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Age[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Age);var
Rs=Bq;if(Rs[0]<0)Rs=[-Rs[0],Rs[1]];if(Rs[1]<0)Rs=[Rs[0],-Rs[1]];if(((((!left||(Bq[
0]<=-Rs[1]))&&(!right||(Bq[0]>=Rs[1])))&&(!top||(Bq[1]<=-Rs[0])))&&(!bottom||(Bq[
1]>=Rs[0])))&&((Rs[0]>0)||(Rs[1]>0))){var RA=Bq[0];var RB=Bq[1];var Jk=Math.sqrt((
RA*RA)+(RB*RB));var AKf=0;if(!left&&!right)AKf=Jk/Rs[1];if(!top&&!bottom)AKf=Jk/
Rs[0];Jk=(Jk*AKf)*AKf;if((Jk<Bb6)||!A03){Bb6=Jk;A03=X;}}}}return A03;},AqF:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;var IX=0x10000;
if(((aFilter&0x10000)===0x10000))IX=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IX||!((B=IX)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TJ:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B7;
var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IX||!((B=IX)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACG:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlN=Ag.Ah;var Al1=Ag.AJ;var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=0x0;
while(!!AlN||!!Al1){if((!!AlN&&(!aFilter||((B=aFilter)&&((AlN.U&B)===B))))&&(!IX||
!((B=IX)&&((AlN.U&B)===B))))return AlN;if((!!Al1&&(!aFilter||((B=aFilter)&&((Al1.
U&B)===B))))&&(!IX||!((B=IX)&&((Al1.U&B)===B))))return Al1;if(!!AlN)AlN=AlN.Ah;if(
!!Al1)Al1=Al1.AJ;}return null;},Db:function(aFilter){var B;var X=this.B7;var AE=
BD;var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IX||!((B=IX)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NN:function(Kz,FO,Ly,Lw
,Lx){var B;if(!Kz)return;if(!FO)throw new Error(O1);if((!!FO.P||!!FO.Ab)||!!FO.Ph
)throw new Error(P3);if(!!Kz.Ab&&(Kz.Ab!==this))throw new Error(P4);if(!this.Xs)
this.Xs=A._NewObject(C.AUO,0);FO.Ab=this;FO.P=Kz;FO.AKq=Lw;FO.A2K=Ly;if(!!Kz.ApJ
)Kz.ApJ.Ph.BnM(Kz.ApJ);Kz.ApJ=FO;Kz.U=Kz.U|0x20000;if((Lx&&!!this.Xs.B8)&&!this.
Xs.B8.AQW())(A.acl.ACB.isPrototypeOf(B=this.Xs.B8)?B:null).A4q(FO);else{var Ph=A.
_NewObject(A.acl.ACB,0);Ph.A4q(FO);this.Xs.A_M(Ph,false);}},Ahy:function(Ag,J3){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Fe);if(!!J3&&(J3.
Ab!==this))throw new Error(L1);if(Ag.Ah===J3)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JH],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JH],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B8=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;var GB=
null;var Iv=this.B8;var LO=Ag.JY;if(!!J3){GB=J3;Iv=J3.AJ;}if(!!GB&&(LO>GB.JY))LO=
GB.JY;if(!!Iv&&(LO<Iv.JY))LO=Iv.JY;if(LO!==Ag.JY){Ag.Ab=null;Ag.ArX(LO);Ag.Ab=this;
}if(!J3){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.B8;Ag.Ah=null;this.B8=Ag;}else{Ag.
Ah=J3;Ag.AJ=J3.AJ;J3.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B7===J3)this.B7=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZA:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Fe);if(!Ag.Ah)return;var Iv=this.B8;var
LO=Ag.JY;while(!!Iv&&(Iv.JY>LO))Iv=Iv.AJ;if(((Iv===Ag)||!Iv)||(Iv.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JH],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JH],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Iv;Ag.Ah=Iv.Ah;Iv.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},JW:function(Ag,Qb){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Fe);var Iv=Ag;var GB=Ag;var LO=Ag.JY;while(((Qb>0)&&!!Iv.Ah)&&(Iv.Ah.JY<=LO
)){Iv=Iv.Ah;Qb=Qb-1;}while(((Qb<0)&&!!GB.AJ)&&(GB.AJ.JY>=LO)){GB=GB.AJ;Qb=Qb+1;}
if((Iv===Ag)&&(GB===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JH],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JH],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;if(Iv
!==Ag){Ag.Ah=Iv.Ah;Ag.AJ=Iv;Iv.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GB!==Ag){Ag.Ah=GB;
Ag.AJ=GB.AJ;GB.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B8=Ag;if(!Ag.AJ)this.
B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HN:function(Ag){var B;if(
!Ag)throw new Error(P5);if(Ag.Ab!==this)throw new Error(Fe);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Eu){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JH],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JH],this);}Ag.Eu=null;if(this.AV===Ag)this.Bb(this.
ACG(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag
)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cr(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AL0:function(Ag,J3
){var B;if(!Ag)throw new Error(J0);if(!!Ag.Ab)throw new Error(N_);if(!!J3&&(J3.Ab
!==this))throw new Error(L1);var GB=null;var Iv=this.B8;var LO=Ag.JY;if(!!J3){GB=
J3;Iv=J3.AJ;}if(!!GB&&(LO>GB.JY))LO=GB.JY;if(!!Iv&&(LO<Iv.JY))LO=Iv.JY;if(LO!==Ag.
JY){Ag.Ab=null;Ag.ArX(LO);Ag.Ab=this;}if(!J3){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.
B8;this.B8=Ag;}else{Ag.Ah=J3;Ag.AJ=J3.AJ;J3.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B7===J3)this.B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOG()===Ag))Ag.Cr(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cr(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JH],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JH],this);}},J:function(Ag,Qb){var B;if(!Ag)throw new Error(
J0);if(!!Ag.Ab)throw new Error(N_);var GB=null;var LO=Ag.JY;if(((Qb<0)&&!!this.B8
)&&(this.B8.JY>=LO)){GB=this.B8;Qb=Qb+1;}while((((Qb<0)&&!!GB)&&!!GB.AJ)&&(GB.AJ.
JY>=LO)){GB=GB.AJ;Qb=Qb+1;}if((!GB&&!!this.B8)&&(this.B8.JY>LO))GB=this.B8;while((
!!GB&&!!GB.AJ)&&(GB.AJ.JY>LO))GB=GB.AJ;if(!GB){Ag.Ab=this;Ag.AJ=this.B8;if(!!this.
B8)this.B8.Ah=Ag;if(!this.B7)this.B7=Ag;this.B8=Ag;}else{Ag.Ab=this;Ag.AJ=GB.AJ;
Ag.Ah=GB;GB.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B7=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOG()===Ag))Ag.Cr(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cr(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JH],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JH],this);}},A8b:function(){return this.
AV;},Awc:function(){return this.G7;},_Init:function(aArg){C.Et._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Et._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKg)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RE:null,JD:null,Ft:A.abi(10,null
,null),Ats:null,Ail:null,ABk:0,Ic:0,L_:A.abi(10,0,null),AJG:A.abi(10,A.wg,null),
Xq:A.abi(10,0,null),AfV:A.abi(10,A.wf,null),Atx:A.abi(10,0,null),Aik:A.abi(10,A.
wf,null),Xp:A.abi(10,A.wf,null),Rx:A.abi(10,A.wf,null),Ac_:A.abi(10,A.wf,null),EO:
0,AJ4:0,AJ3:0,Op:A.abi(4,0,null),Kf:A.abi(4,A.wg,null),Kb:0,Az2:0,AtM:0,AzN:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Il:function(){return this;
},Kl:function(CY,aClip,aOffset,Ci,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CY.Au9(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kl.call(this,CY,aClip
,aOffset,Ci,aBlend);},Cr:function(Rq,U1){var B;C.P.Cr.call(this,Rq,U1);if(!this.
Ab&&(((Rq&0x1)===0x1)||((U1&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rq&0x2)===0x2)||((U1&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArB:
function(E){var B;var Bzw=this.FD;C.P.ArB.call(this,E);if(((Bzw!==this.FD)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Dj:function(
E){var B;var BO=this.G7;C.P.Dj.call(this,E);if(((BO!==this.G7)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvK=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=null;if(!!this.
JD){GD=this.JD.C0.DispatchEvent(CN);if(!GD)GD=this.G2(CN);if(!GD)GD=this.A3q(CN);
this.Ic=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ic=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvK=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ic=0;return GD;},Bj:function(Da){var
B;if(this.ABk>0)throw new Error(P6);if(!!this.FD&&!this.Ab){if(((B=this.FD.QK)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FD,0);}this.FD.QK=A.wC(this.FD.QK
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Kb;O=O+1)if(!(((B=A.lb(this.Kf.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Kf.Set(O,A.wC(this.Kf.Get(O),Da));this.Op.Set(O,A.aaH(this.Kf.Get(O
)));return;}if(this.Kb<3){this.Kf.Set(this.Kb,Da);this.Op.Set(this.Kb,A.aaH(Da));
this.Kb=this.Kb+1;return;}var If;var RD;var Az1=0;var Az4=0;var Bb5=2147483647;this.
Kf.Set(this.Kb,Da);this.Op.Set(this.Kb,A.aaH(Da));for(If=0;If<=this.Kb;If=If+1)for(
RD=If+1;RD<=this.Kb;RD=RD+1){var AK_=A.aaH(A.wC(this.Kf.Get(If),this.Kf.Get(RD))
);var BeW=((AK_<<8)/(this.Op.Get(If)+this.Op.Get(RD)))|0;if(BeW<Bb5){Bb5=BeW;Az1=
If;Az4=RD;}}this.Kf.Set(Az1,A.wC(this.Kf.Get(Az1),this.Kf.Get(Az4)));this.Op.Set(
Az1,A.aaH(this.Kf.Get(Az1)));if(Az4!==this.Kb){this.Kf.Set(Az4,this.Kf.Get(this.
Kb));this.Op.Set(Az4,this.Op.Get(this.Kb));}},Bya:function(){var LI=A._NewObject(
C.AqA,0);LI.AvK=!!this.Ic;if(!!this.Ic)LI.Bs=this.Ic;return LI;},AoX:function(){
var LI=A._NewObject(C.Ad$,0);LI.AvK=!!this.Ic;if(!!this.Ic)LI.Bs=this.Ic;return LI;
},Atw:function(){var LI=A._NewObject(C.AuM,0);LI.AvK=!!this.Ic;if(!!this.Ic)LI.Bs=
this.Ic;return LI;},Bye:function(G){var O;var Apd=false;for(O=0;O<10;O=O+1)if(!!
this.Ft.Get(O)){var pos=this.Rx.Get(O);var B0=this.Ft.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Ft.Get(O)!==this)){
var tmp=this.Ft.Get(O);this.EO=O;this.Ft.Set(O,null);tmp.G2(this.AoX().InitializeUp(
O,this.Aik.Get(O),this.AfV.Get(O),this.Xq.Get(O),this.L_.Get(O)+1,this.Xp.Get(O)
,false,this.Rx.Get(O),this.Ac_.Get(O)));this.BroadcastEvent(this.Atw().InitializeUp(
O,this.L_.Get(O)+1,false,tmp,this.Rx.Get(O)),0x18);}else{this.Xq.Set(O,(this.Ail.
Bs-this.Atx.Get(O))|0);if(this.Xq.Get(O)<10)this.Xq.Set(O,10);this.EO=O;this.Ft.
Get(O).G2(this.AoX().InitializeHold(O,pos,this.AfV.Get(O),this.Xq.Get(O),this.L_.
Get(O)+1,this.Xp.Get(O),this.Rx.Get(O),this.Ac_.Get(O)));Apd=true;}}if(!Apd)this.
Ail.Ar(false);},GetFPS:function(){var ticksCount=0;var BcH=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ4&&(ticksCount>this.AJ4))BcH=((this.AJ3*1000)/((
ticksCount-this.AJ4)|0))|0;this.AJ3=0;this.AJ4=ticksCount;return BcH;},Update:function(
){var B;if(!this.Ats)this.Ats=A._NewObject(A.Graphics.Canvas,0);this.Ats.ArI([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Ats.Update();return this.UpdateGE20(this.Ats);}
,UpdateGE20:function(CY){if(!this.BeginUpdate())return BD;var Agp=this.UpdateCanvas(
CY,Cc);this.EndUpdate();return Agp;},EndUpdate:function(){if(this.Kb>0){this.AJ3=
this.AJ3+1;this.Kb=0;}},UpdateCanvas:function(CY,aOffset){var B;var Agp=BD;var BxT=[
].concat(aOffset,A.abf(CY.FrameSize,aOffset));var O;var If=this.Kb;this.ABk=this.
ABk+1;CY.C0=this;for(O=0;(O<If)&&(O<4);O=O+1)if(this.Op.Get(O)>0){this.Kl(CY,A.abg(
this.Kf.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agp=A.wC(Agp,A.lb(BxT
,this.Kf.Get(O)));}else If=If+1;CY.C0=null;this.ABk=this.ABk-1;if(!((Agp[0]>=Agp[
2])||(Agp[1]>=Agp[3])))return A.abg(Agp,aOffset);else return Agp;},GetUpdateRegion:
function(AI4){var O;var If=this.Kb;if(AI4<0)return BD;for(O=0;(O<If)&&(O<4);O=O+
1)if(!this.Op.Get(O)){If=If+1;AI4=AI4+1;}else if(O===AI4)return this.Kf.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Kb&&!A.aaY(this.Kf.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bf0=A.abi(3,A.wg,null);var BfZ=this.Kb;for(O=0;
O<BfZ;O++)Bf0.Set(O,this.Kf.Get(O));for(O=0;O<BfZ;O++){var Bff=A.abh(Bf0.Get(O),
this.M.slice(0,2));var Bfg=this.Auu(Bff);if(!A.aaY(Bff,Bfg))this.Bj(A.abg(Bfg,this.
M.slice(0,2)));}}var If;var RD;for(If=0;If<(this.Kb-1);If++)if(this.Op.Get(If)>0
)for(RD=If+1;RD<this.Kb;RD++)if(this.Op.Get(RD)>0){var AK_=A.aaH(A.wC(this.Kf.Get(
If),this.Kf.Get(RD)));if(((AK_-this.Op.Get(If))-this.Op.Get(RD))<0){this.Kf.Set(
If,A.wC(this.Kf.Get(If),this.Kf.Get(RD)));this.Op.Set(If,AK_);this.Op.Set(RD,0);
}}for(O=this.Kb-1;O>=0;O--)if(!this.Op.Get(O))this.Kb=this.Kb-1;return this.Kb;}
,DoesNeedUpdate:function(){if(this.Kb>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.AzN)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A0u){if(A0u===this.AzN
)return false;this.AzN=A0u;if(!A0u){if(!!this.JD)this.JD.C0.Cr(0x0,0x40);else this.
Cr(0x0,0x40);}else if(!!this.JD)this.JD.C0.Cr(0x40,0x0);else this.Cr(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qc){this.Ic=Qc;},DriveKeyboardHitting:function(
Ky,AyO,S_){var B;var A3r=!!this.RE;if(!!this.RE&&((!S_||(this.Az2!==Ky))||(this.
AtM!==AyO))){var LI=null;var X=(C.Ch.isPrototypeOf(B=this.RE)?B:null);var D5=(C.
BK.isPrototypeOf(B=this.RE)?B:null);if(!!this.Az2)LI=A._NewObject(C.KeyEvent,0).
Initialize(this.Az2,false);if(this.AtM!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtM,false);if(!!D5)D5.G2(LI);else if(!!X)X.G2(LI);this.Az2=0;this.AtM=0x00;
this.RE=null;}if(!!this.RE){var LI=null;var X=(C.Ch.isPrototypeOf(B=this.RE)?B:null
);var D5=(C.BK.isPrototypeOf(B=this.RE)?B:null);if(!!Ky)LI=A._NewObject(C.KeyEvent
,0).Initialize(Ky,true);if(this.AtM!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
AyO,true);if(!!D5)D5.G2(LI);else if(!!X)X.G2(LI);}if(!this.RE&&S_){if(!!Ky)this.
RE=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Ky,true));if(AyO!==0x00
)this.RE=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyO,true));if(
!(C.BK.isPrototypeOf(B=this.RE)?B:null)&&!(C.Ch.isPrototypeOf(B=this.RE)?B:null)
)this.RE=null;this.Az2=Ky;this.AtM=AyO;A3r=A3r||!!this.RE;}this.Ic=0;return A3r;
},DriveCursorMovement:function(Fg){return this.DriveMultiTouchMovement(this.EO,Fg
);},DriveMultiTouchMovement:function(BF,Fg){if((BF<0)||(BF>9)){this.Ic=0;return false;
}var Fv=A.abe(Fg,this.Rx.Get(BF));this.Rx.Set(BF,Fg);if(!this.Ft.Get(BF)||A.aaX(
Fv,Cc)){this.Ic=0;return false;}var pos=Fg;var B0=this.Ft.Get(BF).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Ft.Get(BF)!==
this)){var tmp=this.Ft.Get(BF);this.EO=BF;this.Ft.Set(BF,null);tmp.G2(this.AoX().
InitializeUp(BF,this.Aik.Get(BF),this.AfV.Get(BF),this.Xq.Get(BF),this.L_.Get(BF
)+1,this.Xp.Get(BF),false,this.Rx.Get(BF),this.Ac_.Get(BF)));this.BroadcastEvent(
this.Atw().InitializeUp(BF,this.L_.Get(BF)+1,false,tmp,Fg),0x18);}else{this.Aik.
Set(BF,pos);this.EO=BF;this.Ft.Get(BF).G2(this.Bya().Initialize(BF,pos,this.AfV.
Get(BF),Fv,this.Xq.Get(BF),this.L_.Get(BF)+1,this.Xp.Get(BF),Fg,this.Ac_.Get(BF)
));}this.Ic=0;return true;},DriveCursorHitting:function(S_,BF,Fg){return this.DriveMultiTouchHitting(
S_,BF,Fg);},DriveMultiTouchHitting:function(S_,BF,Fg){if((BF<0)||(BF>9)){this.Ic=
0;return false;}var ticksCount=this.Ic;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BA3=this.Ic;this.DriveMultiTouchMovement(BF,Fg);Fg=this.Rx.Get(BF);
this.Ic=BA3;if(S_)this.Ac_.Set(BF,Fg);if(S_&&!this.Ft.Get(BF)){var JC;var pos=Fg;
if(A.wa(this.AJG.Get(BF),Fg)&&((ticksCount-this.Atx.Get(BF))<=250))this.L_.Set(BF
,this.L_.Get(BF)+1);else this.L_.Set(BF,0);this.AJG.Set(BF,A.abh(MG,Fg));this.Atx.
Set(BF,ticksCount);if(!!this.JD)JC=this.Yc(A.abh(MG,Fg),BF,this.L_.Get(BF)+1,this.
JD.C0,null,0x0);else JC=this.Yc(A.abh(MG,Fg),BF,this.L_.Get(BF)+1,null,null,0x0);
if(!!JC){this.BroadcastEvent(this.Atw().InitializeDown(BF,this.L_.Get(BF)+1,false
,JC.Ch,Fg),0x18);this.Ft.Set(BF,JC.Ch);this.Xp.Set(BF,JC.DG);}else{this.Ft.Set(BF
,null);this.Xp.Set(BF,Cc);this.Ic=0;return false;}var B0=JC.Ch.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfV.Set(BF,pos);this.Aik.
Set(BF,pos);this.Xq.Set(BF,0);this.Ail.Ar(true);this.EO=BF;this.Ft.Get(BF).G2(this.
AoX().InitializeDown(BF,pos,this.L_.Get(BF)+1,this.Xp.Get(BF),false,Fg));this.Ic=
0;return true;}if(!S_&&!!this.Ft.Get(BF)){var pos=Fg;var B0=this.Ft.Get(BF).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aik.
Get(BF);this.EO=BF;var tmp=this.Ft.Get(BF);this.Ft.Set(BF,null);tmp.G2(this.AoX(
).InitializeUp(BF,pos,this.AfV.Get(BF),this.Xq.Get(BF),this.L_.Get(BF)+1,this.Xp.
Get(BF),false,Fg,this.Ac_.Get(BF)));this.BroadcastEvent(this.Atw().InitializeUp(
BF,this.L_.Get(BF)+1,false,tmp,Fg),0x18);this.Ic=0;return true;}this.Ic=0;return false;
},AT9:function(Aag,Bbs,Ac0,AcZ){if(Aag===this)Aag=null;if(!!!Aag&&!!this.JD)Aag=
this.JD.C0;if(!this.Ft.Get(this.EO))return;var JC;JC=this.Yc(A.abh(MG,this.Rx.Get(
this.EO)),this.EO,1,Aag,Ac0,AcZ);if(!!JC&&(this.Ft.Get(this.EO)!==JC.Ch))this.AND(
JC.Ch,JC.DG);if(!JC&&(this.Ft.Get(this.EO)!==Bbs))this.AND(Bbs,Cc);},AND:function(
Aag,Xd){if(!this.Ft.Get(this.EO)||(this.Ft.Get(this.EO)===Aag))return;var tmp=this.
Ft.Get(this.EO);this.Ft.Set(this.EO,null);tmp.G2(this.AoX().InitializeUp(this.EO
,this.Aik.Get(this.EO),this.AfV.Get(this.EO),this.Xq.Get(this.EO),this.L_.Get(this.
EO)+1,this.Xp.Get(this.EO),true,this.Rx.Get(this.EO),this.Ac_.Get(this.EO)));this.
BroadcastEvent(this.Atw().InitializeUp(this.EO,this.L_.Get(this.EO)+1,true,tmp,this.
Rx.Get(this.EO)),0x18);var pos=this.Rx.Get(this.EO);var B0=null;if(!!Aag)B0=Aag.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aag
!==this)){this.Ft.Set(this.EO,null);return;}this.BroadcastEvent(this.Atw().InitializeDown(
this.EO,this.L_.Get(this.EO)+1,true,Aag,this.Rx.Get(this.EO)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Ft.Set(this.EO,Aag);this.Xp.Set(
this.EO,Xd);this.AfV.Set(this.EO,pos);this.Aik.Set(this.EO,pos);this.L_.Set(this.
EO,0);this.Xq.Set(this.EO,0);this.Atx.Set(this.EO,ticksCount);this.Ac_.Set(this.
EO,this.Rx.Get(this.EO));this.Ft.Get(this.EO).G2(this.AoX().InitializeDown(this.
EO,pos,this.L_.Get(this.EO)+1,this.Xp.Get(this.EO),true,this.Ac_.Get(this.EO)));
},AOG:function(){if(!!this.JD)return this.JD.C0;return null;},ACy:function(Kz){var
B;if(!Kz)throw new Error(S6);if(!((Kz.U&0x80)===0x80))throw new Error(UN);if(this.
JD.C0===Kz)this.JD=this.JD.Ah;else{var AzM=this.JD;while(AzM.Ah.C0!==Kz)AzM=AzM.
Ah;AzM.Ah=AzM.Ah.Ah;}Kz.Cr(0x0,0xD0);if(this.AzN){if(!!this.JD)this.JD.C0.Cr(0x50
,0x0);else this.Cr(0x50,0x0);}},AML:function(Kz){var B;var As=A._NewObject(C.A7m
,0);if(!Kz)throw new Error(Z0);if(Kz===null)throw new Error(WY);if(((Kz.U&0x80)===
0x80))throw new Error(Is);if(!!this.JD)this.JD.C0.Cr(0x0,0x50);else this.Cr(0x0,
0x50);As.Ah=this.JD;As.C0=Kz;this.JD=As;if(this.AzN)Kz.Cr(0xD0,0x0);else Kz.Cr(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Ail={
I:this},0);(this.Ft=[]).__proto__=C.Root.Ft;(this.L_=[]).__proto__=C.Root.L_;(this.
AJG=[]).__proto__=C.Root.AJG;(this.Xq=[]).__proto__=C.Root.Xq;(this.AfV=[]).__proto__=
C.Root.AfV;(this.Atx=[]).__proto__=C.Root.Atx;(this.Aik=[]).__proto__=C.Root.Aik;(
this.Xp=[]).__proto__=C.Root.Xp;(this.Rx=[]).__proto__=C.Root.Rx;(this.Ac_=[]).__proto__=
C.Root.Ac_;(this.Op=[]).__proto__=C.Root.Op;(this.Kf=[]).__proto__=C.Root.Kf;this.
__proto__=C.Root;this.U=0x10007F;this.Ail.PP(10);this.Ail.Mz=[this,this.Bye];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Ail._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Ail._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RE)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JD)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ft,D);if((B=this.
Ats)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ail)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvK:false,Init:function(aArg){this.Bs=
this.Avf();},Avf:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(Ky,S_){this.CO=0;this.DQ=Ky;this.Down=S_;if((Ky>=0x30)&&(Ky<=
0x39))this.CO=(10+Ky)-48;if((Ky>=0x41)&&(Ky<=0x5A))this.CO=(105+Ky)-65;if((Ky>=0x61
)&&(Ky<=0x7A))this.CO=(105+Ky)-97;if(Ky===0x20)this.CO=131;if(!this.CO)switch(Ky
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(Ky,S_){this.CO=Ky;this.
Down=S_;this.DQ=0x00;var A09=Ky-10;var Atr=Ky-105;if((A09>=0)&&(A09<=9))this.DQ=(
48+A09)&0xFFFF;if((Atr>=0)&&(Atr<=25))this.DQ=(65+Atr)&0xFFFF;if(Ky===131)this.DQ=
0x20;if(this.DQ===0x00)switch(Ky){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bi0:function(Bbh){switch(
Bbh){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return Bbh===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARc={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARc;},_className:
"Core::LanguageEvent"};C.AuM={AxC:null,LT:A.wf,N5:0,IH:0,Down:false,NF:false,InitializeUp:
function(BF,Oc,Aow,A0L,Aaf){this.Down=false;this.IH=BF;this.N5=Oc;this.LT=Aaf;this.
AxC=A0L;this.NF=Aow;return this;},InitializeDown:function(BF,Oc,Aow,A0L,Aaf){this.
Down=true;this.IH=BF;this.N5=Oc;this.LT=Aaf;this.AxC=A0L;this.NF=Aow;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuM;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxC)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Ad$={AgX:A.wf,LT:A.wf,N5:0,Jr:
0,NQ:A.wf,H0:A.wf,IH:0,Down:false,NF:false,InitializeHold:function(BF,Alb,AyR,AyS
,Oc,Xd,Aaf,AyQ){this.Down=true;this.IH=BF;this.H0=A.abf(Alb,Xd);this.NQ=A.abf(AyR
,Xd);this.Jr=AyS;this.N5=Oc;this.LT=Aaf;this.AgX=AyQ;return this;},InitializeUp:
function(BF,Alb,AyR,AyS,Oc,Xd,Aow,Aaf,AyQ){this.Down=false;this.IH=BF;this.H0=A.
abf(Alb,Xd);this.NQ=A.abf(AyR,Xd);this.Jr=AyS;this.N5=Oc;this.NF=Aow;this.LT=Aaf;
this.AgX=AyQ;return this;},InitializeDown:function(BF,Alb,Oc,Xd,Aow,Aaf){this.Down=
true;this.IH=BF;this.H0=A.abf(Alb,Xd);this.NQ=A.abf(Alb,Xd);this.Jr=0;this.N5=Oc;
this.NF=Aow;this.LT=Aaf;this.AgX=Aaf;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Ad$;},_className:"Core::CursorEvent"};C.AqA={
AgX:A.wf,LT:A.wf,N5:0,Jr:0,DG:A.wf,NQ:A.wf,H0:A.wf,IH:0,Initialize:function(BF,Alb
,AyR,aOffset,AyS,Bxe,Xd,Aaf,AyQ){this.IH=BF;this.H0=A.abf(Alb,Xd);this.NQ=A.abf(
AyR,Xd);this.DG=aOffset;this.Jr=AyS;this.N5=Bxe;this.LT=Aaf;this.AgX=AyQ;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqA;},_className:
"Core::DragEvent"};C.Y={BX:null,Nw:null,El:null,Br:A.wf,AUC:0,Space:0,AgV:0,Kl:function(
CY,aClip,aOffset,Ci,aBlend){},GetClipping:function(){var B;var Az=C.Et.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var ApW=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))ApW=A.wC(ApW,X.GetClipping());
Az=A.wC(Az,ApW);}return Az;},Cr:function(Rq,U1){var B;var Tj=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U1&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Et.Cr.call(this,Rq,U1);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rq&0x80000)===
0x80000))&&!((Tj&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlQ=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKo=[
E[2]-E[0],E[3]-E[1]];var ApS=!A.aaX(AlQ,AKo);var Fv=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fv,Cc)&&!ApS){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anc(Fv,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((ApS&&(AlQ[0]>0))&&(AlQ[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eu&&(X.Eu.
Ny!==this))X.Eu=null;if(!X.Eu&&((X.PJ!==0x14)||!!this.AgV))X.AtK(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Et.H.call(this,E);if(!!this.Ab&&ApS){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JH],this);}}},Be$:function(){var B;if((!this.AgV||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1r=((this.U&0x1000)===0x1000);for(;!!X&&!A1r;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1r=true;if(((X.U&0x200)===
0x200))break;}if(A1r){this.U=this.U&~0x4000;this.Ab.Bfk();}},ApD:function(G){var
B;this.BX.Q=null;this.BX.Qq=null;this.BX=null;(B=this.Nw)?B[1].call(B[0],this):null;
},Gb:function(E){var B;var Fv=A.abe(E,this.Br);if(A.aaX(Fv,Cc))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anc(Fv,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.El,this);},A96:function(E){var B;if(E<0)E=0;if(E===this.AUC)return;this.AUC=
E;if(!!this.Ab&&!!this.AgV){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JH],this);}},BmU:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgV){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JH],this);}},JQ:function(E){var B;if(E===this.AgV)return;
this.AgV=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JH],this);}},Vt:function(AcT,E7){var Atr=this.Db(0x1);var Rv=this.M;var
Vd=A.abe(Atr.slice(0,2),Rv.slice(0,2));var Ma=A.abe(Atr.slice(2,4),Rv.slice(2,4)
);var Bq=Cc;if((Vd[0]>0)&&(Ma[0]>Vd[0]))Bq=[Vd[0],Bq[1]];else if((Vd[0]>0)&&(Ma[
0]>0))Bq=[Ma[0],Bq[1]];if((Ma[0]<0)&&(Vd[0]<Ma[0]))Bq=[Ma[0],Bq[1]];else if((Ma[
0]<0)&&(Vd[0]<0))Bq=[Vd[0],Bq[1]];if((Vd[1]>0)&&(Ma[1]>Vd[1]))Bq=[Bq[0],Vd[1]];else
if((Vd[1]>0)&&(Ma[1]>0))Bq=[Bq[0],Ma[1]];if((Ma[1]<0)&&(Vd[1]<Ma[1]))Bq=[Bq[0],Ma[
1]];else if((Ma[1]<0)&&(Vd[1]<0))Bq=[Bq[0],Vd[1]];if(A.aaX(Bq,Cc)){(E7)?E7[1].call(
E7[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qq=null;this.Nw=null;}this.BX=AcT;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E7)?E7[
1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.
Ann,this.Gb];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qq=[this,this.
ApD];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E7;}},HH:function(Ag,AcX,AcT,E7
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UO);this.Be$();var Az=Ag.GetExtent();var Bd=this.M;var LM=A.lb(Az,Bd);if((!AcX&&
!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcX&&A.aaY(LM,Az))){(E7)?E7[1].call(E7[0],this
):null;return;}var Bq=Cc;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qq=null;this.Nw=null;}this.BX=AcT;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E7
)?E7[1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Ann,this.Gb];this.BX.Cw=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qq=[this
,this.ApD];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E7;}},Bir:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TJ:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IX=0x10000;if(((aFilter&0x10000)===0x10000))IX=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IX||!((B=IX)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BD;var IX=0x10000;this.Be$();if(((
aFilter&0x10000)===0x10000))IX=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IX||!((B=IX)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Ann:function(){return this.Br;},_Init:
function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Et._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HA:null,BX:null,Ch:null,WH:null,Nw:null,El:null,Hk:null,Tg:-1,Tf:0,Jn:-1,Hr:0,AiD:
8,Oj:0,Us:0,AcE:A.wf,G4:-1,Br:0,Gs:-1,OP:0,GN:24,AY:0,Lh:null,NM:false,AtN:false
,AUJ:function(It,Ob,Xc,S$,Ta,Ah4,O6,Rp,Ly,Lw,Lx){throw new Error(Z1);},Aqy:function(
It,Ah4,O6,Rp,Ly,Lw,Lx){throw new Error(WZ);},AkF:function(It,Ob,Xc,S$,Ta,O6,Rp,Ly
,Lw,Lx){throw new Error(Z2);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gs>=0)&&(this.Gs<this.AY))&&!this.AV){this.G4=this.Gs;this.Ch=(C.Ch.isPrototypeOf(
B=A._NewObject(this.Lh,0))?B:null);if(!!this.B8)this.B8.Ah=this.Ch;else this.B7=
this.Ch;this.Ch.AJ=this.B8;this.B8=this.Ch;this.Ch.Ab=this;this.AcE=[(B=this.M)[
2]-B[0],this.GN];(B=this.Hk)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Ch.G2(CN
);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B7=null;this.B8=this.Ch.AJ;this.Ch.
AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Lh){A.pe(this.El,this);return;
}this.AtN=true;var AAG=0;if(!this.NM)AAG=this.OP;var FS=this.Al0(-AAG-this.Br,1);
var GY=this.Al0(((((B=this.M)[3]-B[1])-AAG)-this.Br)-1,2);var CB=GY-FS;if(CB<1)CB=
1;var Aif=(CB/2)|0;var Aig=(CB/3)|0;if(!Aif)Aif=1;if(!Aig)Aig=1;if(FS<this.Hr){FS=
FS-Aif;GY=GY+Aig;}else if(GY>this.Jn){FS=FS-Aig;GY=GY+Aif;}else{FS=this.Hr;GY=this.
Jn;}if(!this.NM){if(FS>=this.AY){FS=0;GY=-1;}else if(GY<0){FS=0;GY=-1;}if(GY>=this.
AY)GY=this.AY-1;if(FS<0)FS=0;}else if(this.AY<=0){FS=0;GY=-1;}var AiT=this.Hr;var
AiU=this.Jn;var Apq=0;var Apr=-1;if(FS>AiT)AiT=FS;if(GY<AiU)AiU=GY;if(AiT<=AiU){
while((this.Jn<GY)&&(this.Hr<AiT)){this.AdA();this.Azh();}while((this.Hr>FS)&&(this.
Jn>AiU)){this.AAT();this.Azg();}}else{this.Jn=(this.Jn-this.Hr)+FS;this.Hr=FS;Apq=
this.Hr;Apr=this.Jn;}while(this.Hr<FS)this.AdA();while(this.Jn>GY)this.AAT();while(
this.Hr>FS)this.Azg();while(this.Jn<GY)this.Azh();var Aa=this.B7;var inx=this.Hr;
var pos=[0,(AAG+this.Br)+this.Jl(inx,0)];var BI=(B=this.M)[3]-B[1];var Aly=null;
var Bf9=(B=this.M)[2]-B[0];while(!!Aa){var Iz=inx;if(this.NM){if(Iz<0)Iz=this.AY-(-
Iz%this.AY);if(Iz>0)Iz=Iz%this.AY;}var AdB=((Iz>=this.Tf)&&(Iz<=this.Tg))||((inx>=
Apq)&&(inx<=Apr));var Ao8=Aa.GetExtent();var Bq=A.abe(pos,Ao8.slice(0,2));if(AdB
)this.Us=this.GN;else this.Us=Ao8[3]-Ao8[1];var A19=pos[1];var A1_=pos[1]+this.Us;
if(!A.aaX(Bq,Cc))Aa.Anc(Bq,true);if((AdB&&(A19<BI))&&(A1_>0)){this.Ch=Aa;this.G4=
Iz;this.AcE=[Bf9,this.Us];(B=this.Hk)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Us];}inx=this.Hr;Aa=this.B7;pos=[0,(AAG+this.Br)+this.Jl(
inx,0)];while(!!Aa){var Iz=inx;if(this.NM){if(Iz<0)Iz=this.AY-(-Iz%this.AY);if(Iz>
0)Iz=Iz%this.AY;}var AdB=((Iz>=this.Tf)&&(Iz<=this.Tg))||((inx>=Apq)&&(inx<=Apr)
);if(AdB)this.Us=this.GN;else this.Us=(B=Aa.GetExtent())[3]-B[1];var A19=pos[1];
var A1_=pos[1]+this.Us;if(AdB&&!((A19<BI)&&(A1_>0))){this.Ch=Aa;this.G4=Iz;this.
AcE=[Bf9,this.Us];(B=this.Hk)?B[1].call(B[0],this):null;}if(((Iz===this.Gs)&&this.
NM)&&!!Aly){var Rv=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rv))>A.aaH(A.lb(Aly.GetExtent(),Rv)))Aly=Aa;}else if(Iz===this.Gs)Aly=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Us];}this.Tf=0;this.Tg=-1;this.Ch=null;this.G4=-
1;this.Bb(Aly);this.AtN=false;A.pe(this.El,this);},QF:function(Ag,Gz,aFilter){return null;
},AqF:function(Ag,aFilter){return null;},TJ:function(Ag,aFilter){return null;},ACG:
function(Ag,aFilter){return null;},Db:function(aFilter){return BD;},NN:function(
Kz,FO,Ly,Lw,Lx){throw new Error(W0);},Ahy:function(Ag,J3){throw new Error(Z3);},
ZA:function(Ag){throw new Error(Z4);},JW:function(Ag,Qb){throw new Error(UP);},HN:
function(Ag){throw new Error(W1);},AL0:function(Ag,J3){throw new Error(P7);},J:function(
Ag,Qb){throw new Error(Z5);},Jl:function(G_,A0l){return G_*this.GN;},Al0:function(
Fg,A0l){return(Fg/this.GN)|0;},AAT:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jn=this.Jn-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiD){if(!
!this.HA)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Oj++;}return Aa;},Azh:function(
){var B;var Aa=this.HA;var Adk=this.Lh;var AdE=++this.Jn;if(this.NM){if(AdE<0)AdE=
this.AY-(-AdE%this.AY);if(AdE>0)AdE=AdE%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adk))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adk,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.AiD++;
}this.Us=this.GN;this.G4=AdE;this.AcE=[(B=this.M)[2]-B[0],this.Us];this.Ch=Aa;(B=
this.Hk)?B[1].call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B8)this.B8.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdE===this.Gs
)this.Bb(Aa);return Aa;},AdA:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hr=this.Hr+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiD){if(!!this.HA
)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Oj++;}return Aa;},Azg:function(){var
B;var Aa=this.HA;var Adk=this.Lh;var MY=--this.Hr;if(this.NM){if(MY<0)MY=this.AY-(-
MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adk)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HA===
Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.isPrototypeOf(B=
A._NewObject(Adk,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.AiD++;}this.Us=this.GN;
this.G4=MY;this.AcE=[(B=this.M)[2]-B[0],this.Us];this.Ch=Aa;(B=this.Hk)?B[1].call(
B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B7)this.B7.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MY===this.Gs)this.Bb(Aa);return Aa;
},ApD:function(G){var B;this.BX.Q=null;this.BX.Qq=null;this.BX=null;(B=this.Nw)?
B[1].call(B[0],this):null;},BAn:function(G){this.Gb(this.WH.DG[1]);},BAo:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qq=null;this.BX=
null;}if(!this.NM){var AE=this.AqM(0,this.AY-1);var Age=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OP);if(AE[0]>Age[0])AE=[].concat(Age[0],AE.slice(1,4));if(AE[1]>Age[
1])AE=A.abP(AE,Age[1]);var Fv=AE[1]-this.M[1];var A2n=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2n>0)A2n=0;this.WH.DG=[0,this.Br];this.WH.Go=[0,(this.Br+A2n)-Fv];this.
WH.F_=[0,this.Br-Fv];}else{var Fv=32000-(32000%this.GN);this.WH.DG=[0,this.Br];this.
WH.Go=[0,this.Br-Fv];this.WH.F_=[0,this.Br+Fv];}},ASQ:function(E){var B;if(this.
NM===E)return;this.NM=E;while(!!this.AdA());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},AwW:function(E){if(E===this.WH)return;if(!!E&&!!E.At0){A.ab5(
"%s%*%s",O2,E,Rj);throw new Error(W2);}if(!!this.WH){this.WH.AKA=null;this.WH.At0=
null;}this.WH=E;if(!!E){E.AKA=[this,this.BAo];E.At0=[this,this.BAn];}},Gb:function(
E){var B;if(this.NM&&(this.AY>0)){var HC=this.Jl(this.AY,3);if(E<0)E=HC-(-E%HC);
if(E>0)E=E%HC;if(E>0)E=E-HC;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(E){if(E<0)E=-1;if(E===this.Gs)return;
this.Gs=E;this.Am();},A9T:function(E){var B;if(E<0)E=0;if(E===this.OP)return;this.
OP=E;if(!this.NM){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae3:function(
E){var B;if(E<1)E=1;if(E===this.GN)return;this.GN=E;while(!!this.AdA());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jw:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jl(E,3));AE=A.abP(AE
,(this.OP+this.Br)+this.Jl(this.AY,3));}else{AE=A.abP(AE,(this.OP+this.Br)+this.
Jl(E,3));AE=[].concat(AE.slice(0,3),(this.OP+this.Br)+this.Jl(this.AY,3));}}else
while(!!this.AdA());this.AY=E;this.Am();this.Bj(AE);},NZ:function(E){var B;if(E===
this.Lh)return;this.Lh=E;while(!!this.AdA());this.HA=null;this.Oj=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiE:function(G_){if(this.AtN)return null;
if((G_<0)||(G_>=this.AY))return null;if(!this.NM){if((G_<this.Hr)||(G_>this.Jn))
return null;var X=this.B7;while(G_>this.Hr){X=X.Ah;G_=G_-1;}return X;}else{var MY=
this.Hr;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B7;while(
!!X){if((MY%this.AY)===G_)return X;X=X.Ah;MY=MY+1;}return null;}},ABA:function(AcT
,E7){var B;if(this.NM){(E7)?E7[1].call(E7[0],this):null;return;}var AJ5=this.Br;
var BcI=((((B=this.M)[3]-B[1])-this.Br)-this.OP)-this.Jl(this.AY,3);var Bq=0;if(
AJ5>0)Bq=-AJ5;else if(BcI>0)Bq=BcI;if((Bq>0)&&(Bq>-AJ5))Bq=-AJ5;if(!Bq){(E7)?E7[
1].call(E7[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qq=null;this.Nw=null;}this.BX=AcT;if(!this.BX){this.Gb(this.Br+Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Ann,this.Gb];this.BX.Cw=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qq=[this,this.
ApD];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E7;}},HH:function(G_,AcX,AcT,E7
){var B;if((G_<0)||(G_>=this.AY))return;var Az=this.AqM(G_,G_);var Bd=this.M;var
LM=A.lb(Az,Bd);if((!AcX&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcX&&A.aaY(LM,Az))
){(E7)?E7[1].call(E7[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qq=null;this.Nw=null;}this.BX=AcT;if(!this.BX){this.Gb(this.Br-Bq);(E7)?
E7[1].call(E7[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Ann,this.Gb];this.BX.Cw=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qq=[this,this.
ApD];this.BX.Ae6(false);this.BX.Ar(true);this.Nw=E7;}},Biw:function(){return BD;
},AOI:function(){if((this.OP<=0)||this.NM)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OP);return AE;},A6o:function(Fg
){if(((this.AY<=0)||(Fg[0]<this.M[0]))||(Fg[0]>=this.M[2]))return-1;Fg=A.abe(Fg,
this.M.slice(0,2));if(!this.NM){var Aa=(Fg[1]-this.Br)-this.OP;if(Aa>0)Aa=this.Al0(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fg[1]-this.Br;if(Aa>0)
Aa=this.Al0(Aa,0);if(Aa<0)Aa=this.Al0(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqM:function(J1,L5){if(J1<0)J1=0;if(L5>=this.AY)L5=
this.AY-1;if(J1>L5)return BD;var AE=this.M;var Bq=this.Br;if(this.NM){var HC=this.
Jl(this.AY,3);if(Bq<0)Bq=HC-(-Bq%HC);if(Bq>0)Bq=Bq%HC;if(Bq>0)Bq=Bq-HC;}else Bq=
Bq+this.OP;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jl(L5+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jl(J1,0));return AE;},AbA:function(J1,L5){var B;if(J1<0)J1=0;if(J1>L5
)return;if(this.Tf>this.Tg){this.Tf=J1;this.Tg=L5;}else{if(J1<this.Tf)this.Tf=J1;
if(L5>this.Tg)this.Tg=L5;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NM){
AE=A.abP(AE,(this.OP+this.Br)+this.Jl(J1,0));AE=[].concat(AE.slice(0,3),(this.OP+
this.Br)+this.Jl(L5+1,0));}else if((this.Jl(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HC=this.Jl(this.AY,3);if(Bq<0)Bq=HC-(-Bq%HC);if(
Bq>0)Bq=Bq%HC;if(Bq>0)Bq=Bq-HC;AE=A.abP(AE,Bq+this.Jl(J1,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jl(L5+1,0));}this.Am();this.Bj(AE);},Ann:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W3);
this.Lh=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HA
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WH)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dy={HA:null
,BX:null,Ch:null,Nw:null,Hk:null,Tg:-1,Tf:0,Jn:-1,Hr:0,AiD:8,Oj:0,SK:0,AcE:A.wf,
G4:-1,Br:0,Gs:-1,V9:24,AY:0,Lh:null,AtN:false,AUJ:function(It,Ob,Xc,S$,Ta,Ah4,O6
,Rp,Ly,Lw,Lx){throw new Error(W4);},Aqy:function(It,Ah4,O6,Rp,Ly,Lw,Lx){throw new
Error(W5);},AkF:function(It,Ob,Xc,S$,Ta,O6,Rp,Ly,Lw,Lx){throw new Error(Z6);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gs>=0)&&(this.Gs<this.AY))&&!this.AV
){this.G4=this.Gs;this.Ch=(C.Ch.isPrototypeOf(B=A._NewObject(this.Lh,0))?B:null);
if(!!this.B8)this.B8.Ah=this.Ch;else this.B7=this.Ch;this.Ch.AJ=this.B8;this.B8=
this.Ch;this.Ch.Ab=this;this.AcE=[this.SK,(B=this.M)[3]-B[1]];(B=this.Hk)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Ch.G2(CN);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B7=null;
this.B8=this.Ch.AJ;this.Ch.AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Lh
)return;this.AtN=true;var FS=this.Al0(0-this.Br,1);var GY=this.Al0((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=GY-FS;if(CB<1)CB=1;var Aif=(CB/2)|0;var Aig=(CB/3)|
0;if(!Aif)Aif=1;if(!Aig)Aig=1;if(FS<this.Hr){FS=FS-Aif;GY=GY+Aig;}else if(GY>this.
Jn){FS=FS-Aig;GY=GY+Aif;}else{FS=this.Hr;GY=this.Jn;}if(FS>=this.AY){FS=0;GY=-1;
}else if(GY<0){FS=0;GY=-1;}if(GY>=this.AY)GY=this.AY-1;if(FS<0)FS=0;var AiT=this.
Hr;var AiU=this.Jn;var Apq=0;var Apr=-1;if(FS>AiT)AiT=FS;if(GY<AiU)AiU=GY;if(AiT<=
AiU){while((this.Jn<GY)&&(this.Hr<AiT)){this.AdA();this.Azh();}while((this.Hr>FS
)&&(this.Jn>AiU)){this.AAT();this.Azg();}}else{this.Jn=(this.Jn-this.Hr)+FS;this.
Hr=FS;Apq=this.Hr;Apr=this.Jn;}while(this.Hr<FS)this.AdA();while(this.Jn>GY)this.
AAT();while(this.Hr>FS)this.Azg();while(this.Jn<GY)this.Azh();var Aa=this.B7;var
inx=this.Hr;var pos=[this.Br+this.Jl(inx,0),0];var BY=(B=this.M)[2]-B[0];var Aly=
null;var BfX=(B=this.M)[3]-B[1];while(!!Aa){var Iz=inx;var AdB=((Iz>=this.Tf)&&(
Iz<=this.Tg))||((inx>=Apq)&&(inx<=Apr));var Ao8=Aa.GetExtent();var Bq=A.abe(pos,
Ao8.slice(0,2));if(AdB)this.SK=this.V9;else this.SK=Ao8[2]-Ao8[0];var A17=pos[0];
var A18=pos[0]+this.SK;if(!A.aaX(Bq,Cc))Aa.Anc(Bq,true);if((AdB&&(A17<BY))&&(A18>
0)){this.Ch=Aa;this.G4=Iz;this.AcE=[this.SK,BfX];(B=this.Hk)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SK,pos[1]];}inx=this.Hr;Aa=this.B7;pos=[
this.Br+this.Jl(inx,0),0];while(!!Aa){var Iz=inx;var AdB=((Iz>=this.Tf)&&(Iz<=this.
Tg))||((inx>=Apq)&&(inx<=Apr));if(AdB)this.SK=this.V9;else this.SK=(B=Aa.GetExtent(
))[2]-B[0];var A17=pos[0];var A18=pos[0]+this.SK;if(AdB&&!((A17<BY)&&(A18>0))){this.
Ch=Aa;this.G4=Iz;this.AcE=[this.SK,BfX];(B=this.Hk)?B[1].call(B[0],this):null;}if(
Iz===this.Gs)Aly=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SK,pos[1]];}this.Tf=0;this.
Tg=-1;this.Ch=null;this.G4=-1;this.Bb(Aly);this.AtN=false;},QF:function(Ag,Gz,aFilter
){return null;},AqF:function(Ag,aFilter){return null;},TJ:function(Ag,aFilter){return null;
},ACG:function(Ag,aFilter){return null;},Db:function(aFilter){return BD;},NN:function(
Kz,FO,Ly,Lw,Lx){throw new Error(W6);},Ahy:function(Ag,J3){throw new Error(W7);},
ZA:function(Ag){throw new Error(S7);},JW:function(Ag,Qb){throw new Error(UQ);},HN:
function(Ag){throw new Error(UR);},AL0:function(Ag,J3){throw new Error(AcH);},J:
function(Ag,Qb){throw new Error(S8);},Jl:function(G_,A0l){return G_*this.V9;},Al0:
function(Fg,A0l){return(Fg/this.V9)|0;},AAT:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jn=this.Jn-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiD){if(!
!this.HA)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Oj++;}return Aa;},Azh:function(
){var B;var Aa=this.HA;var Adk=this.Lh;var AdE=++this.Jn;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adk))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{
Aa=(C.Ch.isPrototypeOf(B=A._NewObject(Adk,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.
AiD++;}this.SK=this.V9;this.G4=AdE;this.AcE=[this.SK,(B=this.M)[3]-B[1]];this.Ch=
Aa;(B=this.Hk)?B[1].call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B8)this.
B8.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdE===this.
Gs)this.Bb(Aa);return Aa;},AdA:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hr=this.Hr+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Oj<this.AiD){if(!!this.HA
)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Oj++;}return Aa;},Azg:function(){var
B;var Aa=this.HA;var Adk=this.Lh;var MY=--this.Hr;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adk))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adk,0))?B:null);Aa.AZ(0x1D);if(!!this.Oj)this.AiD++;
}this.SK=this.V9;this.G4=MY;this.AcE=[this.SK,(B=this.M)[3]-B[1]];this.Ch=Aa;(B=
this.Hk)?B[1].call(B[0],this):null;this.Ch=null;this.G4=-1;if(!!this.B7)this.B7.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MY===this.Gs
)this.Bb(Aa);return Aa;},ApD:function(G){var B;this.BX.Q=null;this.BX.Qq=null;this.
BX=null;(B=this.Nw)?B[1].call(B[0],this):null;},Gb:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GS:function(
E){if(E<0)E=-1;if(E===this.Gs)return;this.Gs=E;this.Am();},AFa:function(E){var B;
if(E<1)E=1;if(E===this.V9)return;this.V9=E;while(!!this.AdA());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jw:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jl(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jl(E,3));}else{AE=
A.abN(AE,this.Br+this.Jl(this.AY,3));AE=[].concat(this.Br+this.Jl(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},NZ:function(E){var B;if(E===this.Lh)return;
this.Lh=E;while(!!this.AdA());this.HA=null;this.Oj=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bot:function(Bxf,Bxg){if(!this.BX)return;if(Bxf)this.Gb(
this.BX.B2);var A31=this.Nw;this.BX.Ar(false);this.BX.Q=null;this.BX.Qq=null;this.
Nw=null;this.BX=null;if(Bxg)(A31)?A31[1].call(A31[0],this):null;},Bi5:function(){
return!!this.BX;},HH:function(G_,AcX,AcT,E7){var B;if((G_<0)||(G_>=this.AY))return;
var Az=this.AqM(G_,G_);var Bd=this.M;var LM=A.lb(Az,Bd);if((!AcX&&!((LM[0]>=LM[2
])||(LM[1]>=LM[3])))||(AcX&&A.aaY(LM,Az))){(E7)?E7[1].call(E7[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qq=null;this.Nw=null;}this.BX=
AcT;if(!this.BX){this.Gb(this.Br-Bq);(E7)?E7[1].call(E7[0],this):null;}else{this.
BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.Ann,this.Gb];this.BX.Cw=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qq=[this,this.ApD];this.BX.Ae6(false);this.BX.Ar(true
);this.Nw=E7;}},AqM:function(J1,L5){if(J1<0)J1=0;if(L5>=this.AY)L5=this.AY-1;if(
J1>L5)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jl(L5+1
,0));AE=[].concat((AE[0]+Bq)+this.Jl(J1,0),AE.slice(1,4));return AE;},AbA:function(
J1,L5){var B;if(J1<0)J1=0;if(J1>L5)return;if(this.Tf>this.Tg){this.Tf=J1;this.Tg=
L5;}else{if(J1<this.Tf)this.Tf=J1;if(L5>this.Tg)this.Tg=L5;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jl(J1,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jl(L5+1,0));this.Am();this.Bj(AE);},Ann:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dy;this.H(W3);
this.Lh=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HA
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nw)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={AR6:null,AEB:null,AvZ:null,D1:null,
Lm:null,BL:null,AKZ:0,Bp:0,IH:0,Bs:0,N5:0,Jr:0,DG:A.wf,NQ:A.wf,H0:A.wf,Axk:8,Afb:
0,A7f:1,Down:false,YB:false,NF:false,A1y:false,AAb:0,Kl:function(CY,aClip,aOffset
,Ci,aBlend){},G2:function(CN){var B;var BN=(C.Ad$.isPrototypeOf(CN)?CN:null);var
D4=(C.AqA.isPrototypeOf(CN)?CN:null);var AKd=this.YB;var AaE;var Va;var ABc;var MV;
var Azz;if(!BN&&!D4)return null;AaE=(!!BN&&BN.Down)&&!BN.Jr;Va=(!!BN&&BN.Down)&&(
BN.Jr>0);ABc=(!!BN&&BN.Down)&&(BN.Jr>this.AAb);MV=!!BN&&!BN.Down;Azz=!!D4;if(AaE
)this.AAb=((B=(BN.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afb&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Ix=(C.AuM.isPrototypeOf(CN)?CN:null);if(((
!!Ix&&Ix.Down)&&(Ix.AxC!==this))&&A.wa(this.GetExtent(),this.Ab.A7b(Ix.LT))){this.
AKZ=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaE){var Apx=0;var Adf;this.Bp=
this.Bp|(1<<BN.IH);for(Adf=this.Bp&4095;Adf>0;Adf=Adf>>1)if(!!(Adf&1))Apx=Apx+1;
if(Apx===1)this.Bp=(this.Bp|16777216)|(4096<<BN.IH);}if(MV&&(this.Bp<16777216)){
var IC=this.Il();var JC=null;if(!!IC){var A3T=(!!this.AJ?this.AJ:this.Ab);var A1m=(
!!IC.JD?IC.JD.C0:null);JC=IC.Yc(A.abh(Z7,BN.LT),BN.IH,BN.N5,A1m,A3T,0x0);}if(!!JC
){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JC.Ch.G2(A._NewObject(C.Ad$,0).InitializeDown(
O,BN.H0,BN.N5,Cc,true,BN.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JC.Ch.G2(A.
_NewObject(C.Ad$,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N5,Cc,false,BN.LT,BN.LT));}}
if(MV)this.Bp=(this.Bp&~(1<<BN.IH))|33554432;if(ABc&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MV&&BN.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&4095))this.
AKZ=0x0;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Va&&(this.Bp>=67108864)){var IC=
this.Il();if(!!IC)IC.AT9(null,null,this,this.AKZ);}if((Va&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Va=false;MV=true;}if(!!BN&&!(this.Bp&(4096<<BN.IH)))return this;
if(!!D4&&!(this.Bp&(4096<<D4.IH)))return this;if(MV&&!(this.Bp&16777216))return this;
if(((AaE||Azz)||Va)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MV
)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215))this.Bp=0;if(!!BN){this.Down=
AaE||Va;this.YB=this.AQ0(BN.H0);this.NQ=BN.NQ;this.H0=BN.H0;this.DG=Cc;this.Jr=BN.
Jr;this.N5=BN.N5;this.NF=BN.NF;this.IH=BN.IH;this.Bs=BN.Bs;if(BN.Down&&!BN.Jr)AKd=
false;}if(!!D4){this.Down=true;this.YB=this.AQ0(D4.H0);this.NQ=D4.NQ;this.H0=D4.
H0;this.DG=D4.DG;this.Jr=D4.Jr;this.N5=D4.N5;this.IH=D4.IH;this.NF=false;this.Bs=
D4.Bs;}var A1s=this.Down;if(!!D4)(B=this.AR6)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Jr)(B=this.BL)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Jr>0))(B=this.D1)?B[1].call(B[0],this):null;if((this.Down&&this.YB)&&!AKd){
this.A1y=true;(B=this.AvZ)?B[1].call(B[0],this):null;}if(this.A1y&&(((A1s&&!this.
YB)&&AKd)||((!A1s&&this.YB)&&AKd))){this.A1y=false;(B=this.AEB)?B[1].call(B[0],this
):null;}if(!!BN&&!A1s)(B=this.Lm)?B[1].call(B[0],this):null;if(!!this.Afb){var Adz=
0x0;if(((((this.Afb&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Jr>=1000))Adz=0x10;if((((
this.Afb&0x1)===0x1)&&!!D4)&&((D4.LT[1]-D4.AgX[1])<=-this.Axk))Adz=0x1;if((((this.
Afb&0x2)===0x2)&&!!D4)&&((D4.LT[1]-D4.AgX[1])>=this.Axk))Adz=0x2;if((((this.Afb&
0x4)===0x4)&&!!D4)&&((D4.LT[0]-D4.AgX[0])<=-this.Axk))Adz=0x4;if((((this.Afb&0x8
)===0x8)&&!!D4)&&((D4.LT[0]-D4.AgX[0])>=this.Axk))Adz=0x8;if(!!Adz){var IC=this.
Il();if(!!IC){this.AKZ=Adz;IC.AT9(null,this,this,Adz);}}}return this;},Yc:function(
Da,BF,Oc,Aae,Ac0,AcZ){var B;if(!!Aae&&(Aae!==this))return null;if((Oc<1)||(Oc>this.
A7f))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BF)))return null;if(!!(AcZ&this.Afb))return null;if(this.BiJ()){var Az=
A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qe=A.aaI(Da);
var Fv=Cc;if(Qe[0]<Az[0])Fv=[Az[0]-Qe[0],Fv[1]];if(Qe[0]>=Az[2])Fv=[(Az[2]-Qe[0]
)-1,Fv[1]];if(Qe[1]<Az[1])Fv=[Fv[0],Az[1]-Qe[1]];if(Qe[1]>=Az[3])Fv=[Fv[0],(Az[3
]-Qe[1])-1];return A._NewObject(C.AuN,0).Initialize(this,Fv);}}else{var HB=A.abi(
9,A.wf,null);var O;HB.Set(0,A.aaI(Da));HB.Set(1,HB.Get(0));HB.Set(2,HB.Get(0));HB.
Set(3,HB.Get(0));HB.Set(4,HB.Get(0));HB.Set(1,[Da[0],HB.Get(1)[1]]);HB.Set(2,[HB.
Get(2)[0],Da[1]]);HB.Set(3,[Da[2],HB.Get(3)[1]]);HB.Set(4,[HB.Get(4)[0],Da[3]]);
HB.Set(5,Da.slice(0,2));HB.Set(6,[Da[2],Da[1]]);HB.Set(7,[Da[0],Da[3]]);HB.Set(8
,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.AQ0(HB.Get(O)))return A._NewObject(C.AuN
,0).Initialize(this,A.abe(HB.Get(O),HB.Get(0)));}return null;},BmN:function(E){if(
E<1)E=1;this.Axk=E;},AFj:function(E){if(E<1)E=1;this.A7f=E;},Ar:function(E){if(E
)this.Cr(0x100000,0x0);else this.Cr(0x0,0x100000);},_Init:function(aArg){C.Zx._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
Zx._Mark.call(this,D);if((B=this.AR6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AEB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvZ)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Lm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H9={timer:null,AKA:null,At0:null,AFW:null,Zh:null,SG:null,Bp:0,AJd:0,Adi:5000
,ApR:0,AKc:A.wf,Ao5:0,AfK:0,EY:0,Ama:0,Auc:0,Ao4:0,AfJ:0,EX:0,Al$:0,Al9:0,NQ:A.wf
,A5u:A.wf,F_:A.wf,Go:A.wf,DG:A.wf,WJ:A.wf,A6b:0.5,A_J:true,AGD:true,ZI:false,XB:
false,XC:false,AoO:false,AAb:0,Kl:function(CY,aClip,aOffset,Ci,aBlend){},G2:function(
CN){var B;var BN=(C.Ad$.isPrototypeOf(CN)?CN:null);var D4=(C.AqA.isPrototypeOf(CN
)?CN:null);var Ix=(C.AuM.isPrototypeOf(CN)?CN:null);var AaE;var Va;var ABc;var MV;
var Azz;AaE=(!!BN&&BN.Down)&&!BN.Jr;Va=(!!BN&&BN.Down)&&(BN.Jr>0);ABc=(!!BN&&BN.
Down)&&(BN.Jr>this.AAb);MV=!!BN&&!BN.Down;Azz=!!D4;if(AaE)this.AAb=((B=(BN.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaE){var Apx=0;var Adf;this.Bp=this.Bp|(1<<BN.
IH);for(Adf=this.Bp&4095;Adf>0;Adf=Adf>>1)if(!!(Adf&1))Apx=Apx+1;if(Apx===1)this.
Bp=(this.Bp|16777216)|(4096<<BN.IH);}if(MV&&(this.Bp<16777216)){var IC=this.Il();
var JC=null;if(!!IC){var A3T=(!!this.AJ?this.AJ:this.Ab);var A1m=(!!IC.JD?IC.JD.
C0:null);JC=IC.Yc(A.abh(Z7,BN.LT),BN.IH,BN.N5,A1m,A3T,0x0);}if(!!JC){var O;for(O=
0;O<10;O++)if(!!(this.Bp&(1<<O)))JC.Ch.G2(A._NewObject(C.Ad$,0).InitializeDown(O
,BN.H0,BN.N5,Cc,true,BN.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JC.Ch.G2(A._NewObject(
C.Ad$,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N5,Cc,false,BN.LT,BN.LT));}}if(MV)this.
Bp=(this.Bp&~(1<<BN.IH))|33554432;if(ABc&&(this.Bp<16777216))this.Bp=this.Bp|67108864;
if(MV&&BN.NF)this.Bp=this.Bp|67108864;if(MV&&!(this.Bp&16777215))this.Bp=0;if(Va&&(
this.Bp>=67108864)){var IC=this.Il();if(!!IC)IC.AT9(null,null,this,0x0);}if((Va&&
!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Va=false;MV=true;}if(!!BN&&!(this.Bp&(
4096<<BN.IH)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IH)))return this;if(MV&&!(
this.Bp&16777216))return this;if(((AaE||Azz)||Va)&&((this.Bp<16777216)||(this.Bp>=
33554432)))return this;if(MV)this.Bp=this.Bp&3758100479;if(MV&&!(this.Bp&16777215
))this.Bp=0;if(!!Ix&&(Ix.AxC===this))return null;if((!!Ix&&Ix.Down)&&(this.AoO||
!this.ZI))return null;if((!!Ix&&Ix.Down)&&!A.wa(this.M,this.Ab.A7b(Ix.LT)))return null;
if((!!Ix&&!Ix.Down)&&(!this.AoO||(this.AJd!==Ix.IH)))return null;if((!BN&&!D4)&&
!Ix)return null;if(!!BN){this.AoO=AaE||Va;this.AJd=BN.IH;this.NQ=BN.NQ;}if(!!D4)
this.AJd=D4.IH;if(!!Ix){this.AoO=Ix.Down;this.AJd=Ix.IH;}if(!!Ix&&Ix.Down){this.
A3U();this.EX=(((Ix.Bs-this.Al9)*0.001)*this.AfJ)+this.EX;this.EY=(((Ix.Bs-this.
Auc)*0.001)*this.AfK)+this.EY;if(this.XB)this.EX=0;if(this.XC)this.EY=0;this.AfJ=
0;this.AfK=0;this.XB=false;this.XC=false;this.AKc=this.DG;this.ApR=Ix.Bs;return this;
}if(AaE){this.A3U();this.EX=(((BN.Bs-this.Al9)*0.001)*this.AfJ)+this.EX;this.EY=(((
BN.Bs-this.Auc)*0.001)*this.AfK)+this.EY;if(this.XB||!this.ZI)this.EX=0;if(this.
XC||!this.ZI)this.EY=0;this.AfJ=0;this.AfK=0;this.XB=false;this.XC=false;if(!this.
ZI){this.ZI=true;(B=this.SG)?B[1].call(B[0],this):null;(B=this.AKA)?B[1].call(B[
0],this):null;}this.AKc=this.DG;this.ApR=BN.Bs;}if(!!D4){var Ha=A.abe(D4.H0,D4.NQ
);var CD=this.DG;if(this.AGD)CD=[this.AKc[0]+Ha[0],CD[1]];CD=[CD[0],this.AKc[1]+
Ha[1]];if(this.A_J){if(CD[0]<this.Go[0])CD=[this.Go[0]+(((CD[0]-this.Go[0])/2)|0
),CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0]+(((CD[0]-this.F_[0])/2)|0),CD[1
]];if(CD[1]<this.Go[1])CD=[CD[0],this.Go[1]+(((CD[1]-this.Go[1])/2)|0)];else if(
CD[1]>this.F_[1])CD=[CD[0],this.F_[1]+(((CD[1]-this.F_[1])/2)|0)];}else{if(CD[0]<
this.Go[0])CD=[this.Go[0],CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0],CD[1]];
if(CD[1]<this.Go[1])CD=[CD[0],this.Go[1]];else if(CD[1]>this.F_[1])CD=[CD[0],this.
F_[1]];}if(!A.aaX(CD,this.DG)){this.A5u=A.abe(CD,this.DG);this.DG=CD;(B=this.At0
)?B[1].call(B[0],this):null;(B=this.AFW)?B[1].call(B[0],this):null;}}if((!!Ix&&!
Ix.Down)&&((Ix.Bs-this.ApR)>=200)){this.EX=0;this.EY=0;}if(Va&&((BN.Bs-this.ApR)>=
200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApR)){var Ha=D4.DG;var Bc$=1000/(
D4.Bs-this.ApR);var AiG=0;var AiH;if(this.AGD)AiG=Ha[0]*Bc$;AiH=Ha[1]*Bc$;if((AiG
*this.EX)<0)this.EX=0;if((AiH*this.EY)<0)this.EY=0;this.EX=(this.EX+AiG)*0.5;this.
EY=(this.EY+AiH)*0.5;this.ApR=D4.Bs;}if(!MV&&!Ix)return this;if(!!BN&&BN.NF){this.
EX=0;this.EY=0;}if((this.DG[0]<=this.Go[0])||(this.DG[0]>=this.F_[0]))this.EX=0;
else if(!this.EX){var EQ=this.DG[0];var Fi=this.Go[0];var EI=this.F_[0];if(EQ<Fi
)EI=this.Go[0];else if(EQ>EI)Fi=this.F_[0];else if(this.WJ[0]<=1){Fi=EQ;EI=EQ;}else{
var Adm=(EI-EQ)%this.WJ[0];EI=(EQ-this.WJ[0])+Adm;Fi=EQ+Adm;if(EI<this.Go[0])EI=
this.Go[0];if(Fi>this.F_[0])Fi=this.F_[0];}if((Fi-EQ)<=(EQ-EI))EQ=Fi;else EQ=EI;
if(EQ!==this.DG[0]){var Jk=EQ-this.DG[0];if(Jk>0)this.EX=Math.sqrt((Jk*2)*this.Adi
)+20;if(Jk<0)this.EX=-Math.sqrt((-Jk*2)*this.Adi)-20;this.AfJ=(400-(this.EX*this.
EX))/(2*Jk);this.Ao4=EQ;}}else{var BBn=this.EX*this.EX;var Jk=BBn/(2*this.Adi);var
EQ=this.DG[0];if(this.EX>0)EQ=EQ+(Jk|0);if(this.EX<0)EQ=EQ-(Jk|0);if(EQ>this.F_[
0])EQ=this.F_[0];else if(EQ<this.Go[0])EQ=this.Go[0];var BfS=EQ;var Fi=this.Go[0
];var EI=this.F_[0];if(EQ<Fi)EI=this.Go[0];else if(EQ>EI)Fi=this.F_[0];else if(this.
WJ[0]<=1){Fi=EQ;EI=EQ;}else{var Adm=(EI-EQ)%this.WJ[0];EI=(EQ-this.WJ[0])+Adm;Fi=
EQ+Adm;if(EI<this.Go[0])EI=this.Go[0];if(Fi>this.F_[0])Fi=this.F_[0];}if(this.EX>
0){if(EI<=this.DG[0])EQ=Fi;else if((EQ-EI)<(Fi-EQ))EQ=EI;else EQ=Fi;}else if(Fi>=
this.DG[0])EQ=EI;else if((EQ-EI)>(Fi-EQ))EQ=Fi;else EQ=EI;if(EQ!==this.DG[0]){Jk=
EQ-this.DG[0];if(EQ!==BfS){var Ai2=EQ-BfS;if(Ai2>0)this.EX=this.EX+Math.sqrt((Ai2
*2)*this.Adi);if(Ai2<0)this.EX=this.EX-Math.sqrt((-Ai2*2)*this.Adi);}if(this.EX>
0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfJ=(400-(this.EX*this.
EX))/(2*Jk);this.Ao4=EQ;}else this.EX=0;}if((this.DG[1]<=this.Go[1])||(this.DG[1
]>=this.F_[1]))this.EY=0;else if(!this.EY){var ER=this.DG[1];var Fi=this.Go[1];var
EI=this.F_[1];if(ER<Fi)EI=this.Go[1];else if(ER>EI)Fi=this.F_[1];else if(this.WJ[
1]<=1){Fi=ER;EI=ER;}else{var Adm=(EI-ER)%this.WJ[1];EI=(ER-this.WJ[1])+Adm;Fi=ER+
Adm;if(EI<this.Go[1])EI=this.Go[1];if(Fi>this.F_[1])Fi=this.F_[1];}if((Fi-ER)<=(
ER-EI))ER=Fi;else ER=EI;if(ER!==this.DG[1]){var Jk=ER-this.DG[1];if(Jk>0)this.EY=
Math.sqrt((Jk*2)*this.Adi)+20;if(Jk<0)this.EY=-Math.sqrt((-Jk*2)*this.Adi)-20;this.
AfK=(400-(this.EY*this.EY))/(2*Jk);this.Ao5=ER;}}else{var BBo=this.EY*this.EY;var
Jk=BBo/(2*this.Adi);var ER=this.DG[1];if(this.EY>0)ER=ER+(Jk|0);if(this.EY<0)ER=
ER-(Jk|0);if(ER>this.F_[1])ER=this.F_[1];else if(ER<this.Go[1])ER=this.Go[1];var
BfT=ER;var Fi=this.Go[1];var EI=this.F_[1];if(ER<Fi)EI=this.Go[1];else if(ER>EI)
Fi=this.F_[1];else if(this.WJ[1]<=1){Fi=ER;EI=ER;}else{var Adm=(EI-ER)%this.WJ[1
];EI=(ER-this.WJ[1])+Adm;Fi=ER+Adm;if(EI<this.Go[1])EI=this.Go[1];if(Fi>this.F_[
1])Fi=this.F_[1];}if(this.EY>0){if(EI<=this.DG[1])ER=Fi;else if((ER-EI)<(Fi-ER))
ER=EI;else ER=Fi;}else if(Fi>=this.DG[1])ER=EI;else if((ER-EI)>(Fi-ER))ER=Fi;else
ER=EI;if(ER!==this.DG[1]){Jk=ER-this.DG[1];if(ER!==BfT){var Ai2=ER-BfT;if(Ai2>0)
this.EY=this.EY+Math.sqrt((Ai2*2)*this.Adi);if(Ai2<0)this.EY=this.EY-Math.sqrt((-
Ai2*2)*this.Adi);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.EY=this.EY-20;
this.AfK=(400-(this.EY*this.EY))/(2*Jk);this.Ao5=ER;}else this.EY=0;}if(!!BN)this.
Al9=BN.Bs;if(!!Ix)this.Al9=Ix.Bs;this.Auc=this.Al9;this.Al$=this.DG[0];this.Ama=
this.DG[1];this.BBp();return this;},Yc:function(Da,BF,Oc,Aae,Ac0,AcZ){var B;if(!
!Aae&&(Aae!==this))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216
)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGD&&!!(AcZ&0xC))return null;var Az=
A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qe=A.aaI(Da);var Fv=Cc;
if(Qe[0]<Az[0])Fv=[Az[0]-Qe[0],Fv[1]];if(Qe[0]>=Az[2])Fv=[(Az[2]-Qe[0])-1,Fv[1]];
if(Qe[1]<Az[1])Fv=[Fv[0],Az[1]-Qe[1]];if(Qe[1]>=Az[3])Fv=[Fv[0],(Az[3]-Qe[1])-1];
return A._NewObject(C.AuN,0).Initialize(this,Fv);}return null;},A3U:function(){if(
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},BBp:function(
){this.timer=A._GetAutoObject(A.acl.Aed);A.zV([this,this.Me],this.timer,0);},Me:
function(G){var B;if(!this.timer)return;var Auh=(this.timer.Bs-this.Al9)*0.001;var
Aui=(this.timer.Bs-this.Auc)*0.001;var BBA=Auh*Auh;var BBB=Aui*Aui;var AiG=(this.
AfJ*Auh)+this.EX;var AiH=(this.AfK*Aui)+this.EY;var CD=[((((this.AfJ*0.5)*BBA)+(
this.EX*Auh))+this.Al$)|0,((((this.AfK*0.5)*BBB)+(this.EY*Aui))+this.Ama)|0];if(
this.XB&&(Auh>=0.5)){CD=[this.Ao4,CD[1]];this.EX=0;this.AfJ=0;this.Al$=CD[0];this.
XB=false;}else if(this.XB){var LJ=1-Math.pow(1-(Auh/0.5),5);CD=[(this.Al$+((this.
Ao4-this.Al$)*LJ))|0,CD[1]];}if(this.XC&&(Aui>=0.5)){CD=[CD[0],this.Ao5];this.EY=
0;this.AfK=0;this.Ama=CD[1];this.XC=false;}else if(this.XC){var LJ=1-Math.pow(1-(
Aui/0.5),5);CD=[CD[0],(this.Ama+((this.Ao5-this.Ama)*LJ))|0];}if(((this.EX>0)&&(
AiG<0))||((this.EX<0)&&(AiG>0))){AiG=0;CD=[this.DG[0],CD[1]];}if(((this.EY>0)&&(
AiH<0))||((this.EY<0)&&(AiH>0))){AiH=0;CD=[CD[0],this.DG[1]];}if(!this.XB&&(CD[0
]<this.Go[0])){this.Al$=CD[0];this.Ao4=this.Go[0];this.Al9=this.timer.Bs;this.XB=
true;}else if(!this.XB&&(CD[0]>this.F_[0])){this.Al$=CD[0];this.Ao4=this.F_[0];this.
Al9=this.timer.Bs;this.XB=true;}if(!this.XC&&(CD[1]<this.Go[1])){this.Ama=CD[1];
this.Ao5=this.Go[1];this.Auc=this.timer.Bs;this.XC=true;}else if(!this.XC&&(CD[1
]>this.F_[1])){this.Ama=CD[1];this.Ao5=this.F_[1];this.Auc=this.timer.Bs;this.XC=
true;}if(((!this.XB&&!!this.EX)&&(AiG>-20))&&(AiG<20)){CD=[this.Ao4,CD[1]];this.
EX=0;this.AfJ=0;this.Al$=CD[0];}if(((!this.XC&&!!this.EY)&&(AiH>-20))&&(AiH<20)){
CD=[CD[0],this.Ao5];this.EY=0;this.AfK=0;this.Ama=CD[1];}if(!A.aaX(CD,this.DG)){
this.A5u=A.abe(CD,this.DG);this.DG=CD;(B=this.At0)?B[1].call(B[0],this):null;(B=
this.AFW)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XB)&&!this.
XC){this.A3U();this.ZI=false;(B=this.Zh)?B[1].call(B[0],this):null;}},ATk:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WJ=E;},ASS:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6b)return;this.A6b=E;if(E<(1e-007))E=1e-007;this.Adi=
E*10000;},_Init:function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.H9;this.
U=0x10011B;},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKA)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFW
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zh)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ah:null,Lm:null,BL:null,D1:null,ApM:
0,Bs:0,A_E:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Acc:false,NH:false,Init:function(
aArg){var B;var C0=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C0)throw new Error(Afw
);this.Ah=C0.AKg;C0.AKg=this;},G2:function(CN){var B;if(!!CN&&CN.Bi0(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_E=this.ApM;this.Acc=this.ApM>0;if(this.Acc)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NH)this.ApM=this.
ApM+1;return!this.NH;}if(!CN.Down){this.Acc=this.ApM>1;this.A_E=this.ApM-1;this.
ApM=0;(B=this.Lm)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BK;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lm)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuN={Ch:null,AuP:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ch=Ag;this.DG=
aOffset;this.AuP=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuN;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ch)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7m={Ah:null,C0:null,_Init:
function(aArg){this.__proto__=C.A7m;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Arc={Ny:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Arc;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ny)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.ADZ={AiO:A.wf,AiN:A.wf,_Init:function(aArg
){C.Arc._Init.call(this,aArg);this.__proto__=C.ADZ;},_className:"Core::LayoutLineContext"
};C.AD0={AAK:A.wf,AAJ:A.wf,AiO:A.wf,AiN:A.wf,_Init:function(aArg){C.Arc._Init.call(
this,aArg);this.__proto__=C.AD0;},_className:"Core::LayoutQuadContext"};C.ANN={C0:
null,Ah:null,Ry:null,RH:null,Mc:null,ApI:null,_Init:function(aArg){this.__proto__=
C.ANN;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ry)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mc)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUO={FP:null,B8:null,B7:null,Bdg:false,
Bx5:function(){if(!this.FP)return;var Ph=this.FP;this.FP.Pc=null;this.FP=null;A.
pe([this,this.A24],this);Ph.A7O(this);},BzR:function(G){if(!!this.FP)return;if(!
this.B7)return;this.FP=this.B7;this.B7=this.B7.Ah;if(!!this.B7)this.B7.AJ=null;else
this.B8=null;this.FP.Ah=null;this.Bdg=true;this.FP.SG(this);this.Bdg=false;},BAb:
function(G){A.pe([this,this.BzR],this);},BAa:function(G){A.pe([this,this.BAb],this
);},A24:function(G){A.pe([this,this.BAa],this);},Bg5:function(Jg){if(!Jg||!Jg.Pc
)return;if(Jg.Pc!==this)throw new Error(Z8);var Bgm=false;if(this.FP===Jg){this.
FP=null;Bgm=true;A.pe([this,this.A24],this);}else{if(!!Jg.Ah)Jg.Ah.AJ=Jg.AJ;else
this.B8=Jg.AJ;if(!!Jg.AJ)Jg.AJ.Ah=Jg.Ah;else this.B7=Jg.Ah;Jg.AJ=null;Jg.Ah=null;
}Jg.Pc=null;if(Bgm)Jg.A7N(this);},A_M:function(Jg,A0R){if(!Jg)return;if(!!Jg.Pc)
throw new Error(W8);Jg.Pc=this;if(A0R){Jg.Ah=this.B7;if(!!this.B7)this.B7.AJ=Jg;
else this.B8=Jg;this.B7=Jg;}else{Jg.AJ=this.B8;if(!!this.B8)this.B8.Ah=Jg;else this.
B7=Jg;this.B8=Jg;}if(!this.FP)A.pe([this,this.A24],this);},_Init:function(aArg){
this.__proto__=C.AUO;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkS={Pc:null,AJ:null,Ah:
null,A7O:function(Atk){},A7N:function(Atk){},SG:function(Atk){this.Amt();},Mm:function(
){if(!!this.Pc&&(this.Pc.FP===this))this.Pc.Bx5();},Amt:function(){if(!!this.Pc)
this.Pc.Bg5(this);},AQW:function(){return!!this.Pc&&(this.Pc.FP===this);},_Init:
function(aArg){this.__proto__=C.AkS;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pc)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUM={As:null,Aue:
null,SG:function(Atk){this.Aue.As=this.As;A.we(this.Aue,0);A.pe([this,this.BzO],
this);},BzO:function(G){this.Aue.As=null;this.Aue=null;this.As=null;this.Mm();},
_Init:function(aArg){C.AkS._Init.call(this,aArg);this.__proto__=C.AUM;},_Mark:function(
D){var B;C.AkS._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aue)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxB={_Init:function(){C.AUO._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahx={resource:null,La:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahx;this.Init(aArg);A.h7++;},_Done:function(){this.La();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mz:null,timer:null,Bs:0,Period:1000,VB:0,Bw:false,La:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKI:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PP:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKI(this.VB,E);},Ww:function(E){if(E<0)E=0;if(E===
this.VB)return;this.VB=E;if(this.Bw)this.AKI(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKI(this.VB,this.Period);else this.AKI(0,
0);this.Bs=this.Avf();},Avf:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avf();if(!this.
Period)this.Ar(false);(B=this.Mz)?B[1].call(B[0],this):null;},Axz:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.La();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mz)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUg:0,AvT:0
,AjN:0,GK:0,Hi:0,Year:0,BcP:function(AfG,A0j){if(A0j)switch(AfG){case 1:return A.
aci.Bi9;case 2:return A.aci.Bh2;case 3:return A.aci.Bjp;case 4:return A.aci.BgJ;
case 5:return A.aci.Bjt;case 6:return A.aci.Bja;case 7:return A.aci.Bi$;case 8:return A.
aci.BgL;case 9:return A.aci.Bn4;case 10:return A.aci.BjN;case 11:return A.aci.BjM;
case 12:return A.aci.Bhq;default:return A.jV;}else switch(AfG){case 1:return A.aci.
ADT;case 2:return A.aci.ACD;case 3:return A.aci.AD5;case 4:return A.aci.ABF;case
5:return A.aci.AD7;case 6:return A.aci.ADV;case 7:return A.aci.ADU;case 8:return A.
aci.ABM;case 9:return A.aci.AGr;case 10:return A.aci.AEh;case 11:return A.aci.AEf;
case 12:return A.aci.ACo;default:return A.jV;}},BcN:function(Bbm,A0j){if(A0j)switch(
Bbm){case 1:return A.aci.Bjy;case 2:return A.aci.Bpn;case 3:return A.aci.Bp5;case
4:return A.aci.Bo_;case 5:return A.aci.Bid;case 6:return A.aci.BnX;case 0:return A.
aci.BoX;default:return A.jV;}else switch(Bbm){case 1:return A.aci.Bjx;case 2:return A.
aci.Bpm;case 3:return A.aci.Bp4;case 4:return A.aci.Bo9;case 5:return A.aci.Bic;
case 6:return A.aci.BnW;case 0:return A.aci.BoW;default:return A.jV;}},BcM:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JP:function(){var d=this.GK;var K2=this.Hi;var Dg=this.Year-((
K2<=2)?1:0);var AzA=(((Dg>=0)?Dg:Dg-399)/400)|0;var Amh=Dg-(AzA*400);var U_=(((((
153*(K2+((K2>2)?-3:9)))+2)/5)|0)+d)-1;var Ao1=(((Amh*365)+((Amh/4)|0))-((Amh/100
)|0))+U_;var Qg=((AzA*146097)+Ao1)-719468;return(((Qg*86400)+(this.AjN*3600))+(this.
AvT*60))+this.AUg;},AFE:function(E){var B;E+=62162035200;if(E<0)E=0;var Vm=Math.
trunc(E/86400)|0;var AzA=(((Vm>=0)?Vm:Vm-146096)/146097)|0;var Ao1=Vm-(AzA*146097
);var Amh=((((Ao1-((Ao1/1460)|0))+((Ao1/36524)|0))-((Ao1/146096)|0))/365)|0;var Dg=
Amh+(AzA*400);var U_=Ao1-(((365*Amh)+((Amh/4)|0))-((Amh/100)|0));var A2q=(((5*U_
)+2)/153)|0;var d=(U_-((((153*A2q)+2)/5)|0))+1;var K2=A2q+((A2q<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K2<=2)?1:0);this.Uk(K2);this.Lo(d);this.Ant(BI+((BI<0)?24:0));this.Anw(O+((O<0)?
60:0));this.Anz(s+((s<0)?60:0));},Zi:function(){if(this.Hi===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hi===4)||(this.Hi===6))||(this.Hi===9))||(this.Hi===11))return 30;else return 31;
},BkX:function(){var B;var U_=this.AbV()-1;var AtB=(6+this.Av5())%7;var Ao3=((371+
AtB)-U_)%7;if(this.Hi===12){var d=this.GK;if((d===31)&&(AtB<3))return 0;if((d===
30)&&(AtB<2))return 0;if((d===29)&&(AtB<1))return 0;}if(Ao3<=3)U_+=Ao3;else U_-=(
7-Ao3);if(U_<0){var d=this.GK;var K2=this.Hi;this.Year--;this.Lo(31);this.Uk(12);
U_=this.AbV()-1;AtB=(6+this.Av5())%7;Ao3=((371+AtB)-U_)%7;if(Ao3<=3)U_+=Ao3;else
U_-=Ao3;this.Year++;this.Lo(d);this.Uk(K2);}return(U_/7)|0;},AbV:function(){var B;
var d=this.GK;var K2=this.Hi;var Dg=this.Year;var Af4=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K2){case 2:d+=31;break;case 3:d+=(59+Af4);break;case 4:
d+=(90+Af4);break;case 5:d+=(120+Af4);break;case 6:d+=(151+Af4);break;case 7:d+=(
181+Af4);break;case 8:d+=(212+Af4);break;case 9:d+=(243+Af4);break;case 10:d+=(273+
Af4);break;case 11:d+=(304+Af4);break;case 12:d+=(334+Af4);break;default:;}return d;
},Av5:function(){var B;var d=this.GK;var K2=this.Hi+((this.Hi>2)?-2:10);var Dg=this.
Year-((this.Hi<=2)?1:0);var B3=(Dg/100)|0;Dg%=100;d+=((((((((26*K2)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},Anz:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUg=E;},Anw:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvT=E;},Ant:function(E){if(E<0)E=0;if(E>23)E=23;this.AjN=E;},Lo:function(
E){if(E<1)E=1;if(E>31)E=31;this.GK=E;},Uk:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hi=E;},Format:function(Iu){var result=A.jV;var inx=0;while(!!(Iu.charCodeAt(inx)||
0))if((Iu.charCodeAt(inx)||0)===0x25){var Aay=1;inx=inx+1;if((Iu.charCodeAt(inx)||
0)===0x23){inx=inx+1;Aay=0;}switch(Iu.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GK,2*Aay,10);break;case 0x48:result=result+A.abl(this.AjN,2*Aay,10);break;
case 0x49:if(!(this.AjN%12))result=result+Z9;else result=result+A.abl(this.AjN%12
,2*Aay,10);break;case 0x6D:result=result+A.abl(this.Hi,2*Aay,10);break;case 0x4D:
result=result+A.abl(this.AvT,2*Aay,10);break;case 0x70:if(this.AjN<12)result=result+
A.aci.Bgs;else result=result+A.aci.Bnk;break;case 0x53:result=result+A.abl(this.
AUg,2*Aay,10);break;case 0x77:result=result+A.abl(this.Av5(),Aay,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*Aay,10);break;case 0x59:result=result+A.abl(
this.Year,4*Aay,10);break;case 0x25:result=result+Z_;break;case 0x6A:result=result+
A.abl(this.AbV(),3*Aay,10);break;case 0x57:result=result+A.abl(this.BkX(),2*Aay,
10);break;case 0x61:result=result+this.BcN(this.Av5(),true);break;case 0x41:result=
result+this.BcN(this.Av5(),false);break;case 0x62:result=result+this.BcP(this.Hi
,true);break;case 0x42:result=result+this.BcP(this.Hi,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iu.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac1,AfG,Bwl,BwC,BwT,Bxa){this.Year=Ac1;this.
Uk(AfG);this.Lo(Bwl);this.Ant(BwC);this.Anw(BwT);this.Anz(Bxa);return this;},Initialize:
function(Ah5){this.AFE(Ah5);return this;},Bhv:function(Ah5){if(!Ah5)return A._NewObject(
C.AnW,0).Initialize(this.JP());return A._NewObject(C.AnW,0).Initialize(this.JP()-
Ah5.JP());},Box:function(AyU){if(!AyU)return this;return A._NewObject(C.Bs,0).Initialize(
this.JP()-AyU.JP());},J:function(AyU){if(!AyU)return this;return A._NewObject(C.
Bs,0).Initialize(this.JP()+AyU.JP());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.AnW={AGo:0,AD_:0,ADm:0,Kj:0,JP:function(
){return(((this.Kj*86400)+(this.ADm*3600))+(this.AD_*60))+this.AGo;},AFE:function(
E){var AKW=1;this.Kj=Math.trunc(E/86400)|0;if(E<0){E=-E;AKW=-1;}this.ADm=AKW*(Math.
trunc(E/3600)%24|0);this.AD_=AKW*(Math.trunc(E/60)%60|0);this.AGo=AKW*(E%60|0);}
,Initialize2:function(Bwm,BwD,BwU,Bxd){this.Kj=Bwm;this.ADm=BwD;this.AD_=BwU;this.
AGo=Bxd;return this;},Initialize:function(Ah5){this.AFE(Ah5);return this;},_Init:
function(aArg){this.__proto__=C.AnW;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A__={As:null,Pc:null,Trigger:function(Bwg,A0R){var Ph=A._NewObject(C.AUM,0);
Ph.Aue=this;Ph.As=Bwg;this.Pc.A_M(Ph,A0R);},_Init:function(aArg){this.__proto__=
C.A__;this.Pc=A._GetAutoObject(C.AxB);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A_$={JK:null,Event:null,AR7:null,AtT:function(G){var B;if(
!this.Event)return;this.JK=this.Event.As;(B=this.AR7)?B[1].call(B[0],this):null;
this.JK=null;},Blz:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtT],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtT],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A_$;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFA={Ds:0x1,BCj:0x2,BDs:0x4,BFp:0x8,Bw:0x10,H8:0x20
,BDt:0x40,BD6:0x80,BDo:0x100,BDK:0x200,BDc:0x400,BEJ:0x800,Bl:0x1000,BFx:0x2000,
BEr:0x4000,BEs:0x8000,Abd:0x10000,BEq:0x20000,BEW:0x40000,BC5:0x80000,BEA:0x100000
,BCZ:0x200000};C.PJ={BEL:0x1,BEM:0x2,BCf:0x4,BCg:0x8,BCh:0x10,BCe:0x20};C.AgV={None:
0,BFl:1,BCC:2,BDP:3,BEP:4,BFm:5,BFn:6,BCD:7,BCE:8,BDR:9,BDQ:10,BER:11,BEQ:12};C.
AuR={None:0,BFj:1,Left:2,BCA:3,ZN:4,A43:5,BFk:6,Right:7,BCB:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BEN={BFG:0x1,BFD:0x2,BFE:0x4,BFF:
0x8,BDT:0x10,BDv:0x20};
C._Init=function(){C.Aka.__proto__=C.Ch;C.Zx.__proto__=C.Ch;C.Et.__proto__=C.Ch;C.
P.__proto__=C.Et;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARc.__proto__=
C.Event;C.AuM.__proto__=C.Event;C.Ad$.__proto__=C.Event;C.AqA.__proto__=C.Event;
C.Y.__proto__=C.Et;C.CM.__proto__=C.P;C.Dy.__proto__=C.P;C.Bn.__proto__=C.Zx;C.H9.
__proto__=C.Et;C.ADZ.__proto__=C.Arc;C.AD0.__proto__=C.Arc;C.AUM.__proto__=C.AkS;
};C._ReInit=function(){var B;if((B=C.AxB._this))B._ReInit(),C.AxB._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxB._this)&&(B._cycle!=D))B._Done(C.AxB._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */