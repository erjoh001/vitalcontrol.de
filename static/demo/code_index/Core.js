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
var Cc=[0,0];var BD=[0,0,0,0];var E7="The view does not belong to this group";var
Hq=[1000,740];var IU="The dialog component is already presented";var Is="The dialog component is actually not presented";
var O2="No fader to perform the fade-in/out operation";var P7="Trying to use the same fader twice";
var P8="Trying to fade-in/out a group which belongs to another owner";var CQ="No view to restack";
var Ff="View is not in this group";var L1="Sibling view does not belong to the group";
var P9="No view to remove";var J2="No view to add";var N$="View already in a group";
var P_="Recursive invalidate during active update cycle.";var MH=[-8,-8,9,9];var
S8="No group to end the modal state.";var UQ="The group is not modal.";var Z1="No group to obtain the modal state.";
var W1="The group serves already as the \'virtual keyboard\'.";var It="The group is already modal.";
var UR="View is not in the same group or it is not embedded within the Outline "+
"Box";var Z2="The method SwitchToDialog() is not available in Core::VerticalList.";
var W2="The method DismissDialog() is not available in Core::VerticalList.";var Z3=
"The method PresentDialog() is not available in Core::VerticalList.";var W3="The method FadeGroup() is not available in Core::VerticalList.";
var Z4="The method RestackBehind() is not available in Core::VerticalList.";var Z5=
"The method RestackTop() is not available in Core::VerticalList.";var US="The method Restack() is not available in Core::VerticalList.";
var W4="The method Remove() is not available in Core::VerticalList.";var O3="The method AddBehind() is not available in Core::VerticalList.";
var Z6="The method Add() is not available in Core::VerticalList.";var O4="The Slide Touch Handler:";
var Rl="is already connected with a view.";var W5="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var W6=[0,0,170,120];var UT="The method SwitchToDialog() is not available in Core::HorizontalList.";
var Z7="The method DismissDialog() is not available in Core::HorizontalList.";var
Z8="The method PresentDialog() is not available in Core::HorizontalList.";var W7=
"The method FadeGroup() is not available in Core::HorizontalList.";var W8="The method RestackBehind() is not available in Core::HorizontalList.";
var S9="The method RestackTop() is not available in Core::HorizontalList.";var UU=
"The method Restack() is not available in Core::HorizontalList.";var UV="The method Remove() is not available in Core::HorizontalList.";
var AcK="The method AddBehind() is not available in Core::HorizontalList.";var S_=
"The method Add() is not available in Core::HorizontalList.";var Z9=[0,0,1,1];var
Afz="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Z_="Trying to cancel a task not belonging to this queue!";var W9="Trying to enqueue a task twice!";
var Z$="12";var W_="%";
C.Ci={Ah:null,AJ:null,Ab:null,Eu:null,U:0x103,J0:0,PL:0x14,AtP:function(BG,Ah7){}
,Ar4:function(E){if(this.J0===E)return;this.J0=E;if(!!this.Ab){var Ai4=this.Ah;var
Hb=0;while(!!Ai4&&(E>Ai4.J0)){Ai4=Ai4.Ah;Hb=Hb+1;}Ai4=this.AJ;while(!!Ai4&&(E<Ai4.
J0)){Ai4=Ai4.AJ;Hb=Hb-1;}if(!!Hb)this.Ab.JY(this,Hb);}},AZ:function(E){var B;var
Hb=E^this.PL;if(!Hb)return;this.PL=E;if(!!this.Eu&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JJ],this);this.Ab.Bj([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eu&&((this.U&0x400)===0x400)){this.Eu.Nz.U=this.Eu.
Nz.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},Im:function(
){var B0=this.Ab;while(!!B0){var IE=(C.Root.isPrototypeOf(B0)?B0:null);if(!!IE)return IE;
B0=B0.Ab;}return null;},Kn:function(CY,aClip,aOffset,Cj,aBlend){},GetClipping:function(
){return this.GetExtent();},G3:function(CN){return null;},Yd:function(Da,BF,Od,Aag
,Ac3,Ac2){return null;},AuA:function(Da){return Da;},AuL:function(BG,ML){return Cc;
},Anh:function(aOffset,Atl){},GetExtent:function(){return BD;},Cr:function(Rs,U4
){var B;if(((this.U&0x200)===0x200))Rs=Rs&~0x400;var A2O=(this.U&~U4)|Rs;var Xt=
A2O^this.U;this.U=A2O;if(!!this.Ab&&!!(Xt&0x14)){var Bc6=((this.U&0x14)===0x14);
if(Bc6&&!this.Ab.AV)this.Ab.Bb(this);if(!Bc6&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACM(this,0x14));}if(!!this.Ab&&!!(Xt&0x403))this.Ab.Bj(this.GetClipping());if(((
!!this.Eu&&!!this.Ab)&&((A2O&0x400)===0x400))&&((Xt&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}if(!!this.Ab&&((Xt&0x400
)===0x400)){this.Eu=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JJ],this);}if(((((Xt&0x100000)===0x100000)&&((U4&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cr(0x0,0x10);if(((((
Xt&0x100000)===0x100000)&&((Rs&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cr(0x10,0x0);if(((((Xt&0x200000)===0x200000)&&((U4&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cr(
0x10,0x0);if((((((Xt&0x200000)===0x200000)&&((Rs&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.Hc.C0!==this)))
)this.Cr(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ci;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eu)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Ake={EC:A.wf,Es:A.wf
,AtP:function(BG,Ah7){var As=A._NewObject(C.AD3,0);this.Eu=null;As.extent=this.getExtent(
);As.Bd=BG;As.Nz=Ah7;As.AiR=this.Es;As.AiS=this.EC;this.Eu=As;},AuL:function(BG,
ML){var B;var EW=this.PL;var As=(C.AD3.isPrototypeOf(B=this.Eu)?B:null);var x1=As.
extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.extent[3];var Ka=[BG[
2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;var tmp;if(!ML){var NC=[(B=As.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NC[0]!==Ka[0]){var HS=((EW&
0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(!HS&&(Qu||!HT))x1=((
x1*Ka[0])/NC[0])|0;if(!HT&&(Qu||!HS)){x2=x2-As.Bd[0];x2=((x2*Ka[0])/NC[0])|0;x2=
x2-Ka[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qu){if(HS&&!HT)x2=x1+BY;
else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}}}else{x2=x2-
As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NC[1]!==Ka[1]){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(!HU&&(Qv||!HR))y1=((y1*Ka[1])/NC[
1])|0;if(!HR&&(Qv||!HU)){y2=y2-As.Bd[1];y2=((y2*Ka[1])/NC[1])|0;y2=y2-Ka[1];}else
y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qv){if(HU&&!HR)y2=y1+BI;else if(!HU&&
HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+
BG[1];y2=y2+BG[3];}}else{switch(ML){case 3:{x1=BG[0];x2=x1+BY;}break;case 4:{x2=
BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[3];y1=y2-BI;
}break;default:;}if((ML===3)||(ML===4)){var HU=((EW&0x10)===0x10);var HR=((EW&0x20
)===0x20);var Qv=((EW&0x2)===0x2);if(Qv){y1=BG[1];y2=BG[3];}else if(HU&&!HR){y1=
BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((BG[3]-BG[1
])-BI)/2)|0);y2=y1+BI;}}if((ML===1)||(ML===2)){var HS=((EW&0x4)===0x4);var HT=((
EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(Qu){x1=BG[0];x2=BG[2];}else if(HS&&!HT
){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((BG[2]-
BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=x2-x1;BI=y2-y1;if(
As.AiS[0]<As.AiR[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.AiS[1]<As.AiR[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Es=[x1,y1];this.EC=[x2,y2];}else{this.DM([x1,y1]);this.DC([x2,y2]);this.
Eu=As;}return[BY,BI];},Anh:function(aOffset,Atl){if(Atl){this.Es=A.abf(this.Es,aOffset
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
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},DM:function(
E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.Es=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JJ],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.
Ake;},_className:"Core::LineView"};C.Zy={Kx:A.wf,MD:A.wf,EC:A.wf,Es:A.wf,AtP:function(
BG,Ah7){var As=A._NewObject(C.AD4,0);this.Eu=null;As.extent=this.GetExtent();As.
Bd=BG;As.Nz=Ah7;As.AiR=this.Es;As.AiS=this.EC;As.AAP=this.MD;As.AAQ=this.Kx;this.
Eu=As;},AuL:function(BG,ML){var B;var EW=this.PL;var As=(C.AD4.isPrototypeOf(B=this.
Eu)?B:null);var x1=As.extent[0];var y1=As.extent[1];var x2=As.extent[2];var y2=As.
extent[3];var Ka=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=y2-y1;if(!ML){var
NC=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];if(NC[0]!==Ka[0]){
var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(!HS&&(
Qu||!HT))x1=((x1*Ka[0])/NC[0])|0;if(!HT&&(Qu||!HS)){x2=x2-As.Bd[0];x2=((x2*Ka[0]
)/NC[0])|0;x2=x2-Ka[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];if(!Qu){if(HS&&
!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY)/2)|0);x2=x1+BY;}
}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NC[1]!==Ka[1]){var HU=((EW&0x10
)===0x10);var HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(!HU&&(Qv||!HR))y1=((
y1*Ka[1])/NC[1])|0;if(!HR&&(Qv||!HU)){y2=y2-As.Bd[1];y2=((y2*Ka[1])/NC[1])|0;y2=
y2-Ka[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qv){if(HU&&!HR)y2=y1+BI;
else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=y1+BI;}}}else{y2=y2-
As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(ML){case 3:{x1=BG[0];x2=x1+BY;}break;
case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;}break;case 2:{y2=BG[
3];y1=y2-BI;}break;default:;}if((ML===3)||(ML===4)){var HU=((EW&0x10)===0x10);var
HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(Qv){y1=BG[1];y2=BG[3];}else if(
HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-BI;}else{y1=BG[1]+((((
BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((ML===1)||(ML===2)){var HS=((EW&0x4)===0x4);
var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(Qu){x1=BG[0];x2=BG[2];}else if(
HS&&!HT){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-BY;}else{x1=BG[0]+((((
BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=y2);BY=(x2-x1)-1;BI=(
y2-y1)-1;var Aix=As.extent[0];var Aiz=As.extent[1];var AfY=(As.extent[2]-Aix)-1;
var AfX=(As.extent[3]-Aiz)-1;if(!AfY)AfY=1;if(!AfX)AfX=1;if(((this.U&0x100)===0x100
)){this.Es=[x1+((((As.AiR[0]-Aix)*BY)/AfY)|0),y1+((((As.AiR[1]-Aiz)*BI)/AfX)|0)];
this.EC=[x1+((((As.AiS[0]-Aix)*BY)/AfY)|0),y1+((((As.AiS[1]-Aiz)*BI)/AfX)|0)];this.
MD=[x1+((((As.AAP[0]-Aix)*BY)/AfY)|0),y1+((((As.AAP[1]-Aiz)*BI)/AfX)|0)];this.Kx=[
x1+((((As.AAQ[0]-Aix)*BY)/AfY)|0),y1+((((As.AAQ[1]-Aiz)*BI)/AfX)|0)];}else{this.
DM([x1+((((As.AiR[0]-Aix)*BY)/AfY)|0),y1+((((As.AiR[1]-Aiz)*BI)/AfX)|0)]);this.DC([
x1+((((As.AiS[0]-Aix)*BY)/AfY)|0),y1+((((As.AiS[1]-Aiz)*BI)/AfX)|0)]);this.Ku([x1+((((
As.AAP[0]-Aix)*BY)/AfY)|0),y1+((((As.AAP[1]-Aiz)*BI)/AfX)|0)]);this.JU([x1+((((As.
AAQ[0]-Aix)*BY)/AfY)|0),y1+((((As.AAQ[1]-Aiz)*BI)/AfX)|0)]);this.Eu=As;}return[BY+
1,BI+1];},Anh:function(aOffset,Atl){if(Atl){this.Es=A.abf(this.Es,aOffset);this.
EC=A.abf(this.EC,aOffset);this.MD=A.abf(this.MD,aOffset);this.Kx=A.abf(this.Kx,aOffset
);}else{this.DM(A.abf(this.Es,aOffset));this.DC(A.abf(this.EC,aOffset));this.Ku(
A.abf(this.MD,aOffset));this.JU(A.abf(this.Kx,aOffset));}},GetExtent:function(){
if(!!this.Eu&&this.Eu.isEmpty)return BD;var x1=this.Es[0];var y1=this.Es[1];var x2=
this.MD[0];var y2=this.MD[1];if((((this.Kx[0]!==x1)||(this.EC[1]!==y1))||(this.EC[
0]!==x2))||(this.Kx[1]!==y2)){if(this.EC[0]<x1)x1=this.EC[0];if(this.MD[0]<x1)x1=
this.MD[0];if(this.Kx[0]<x1)x1=this.Kx[0];if(this.EC[1]<y1)y1=this.EC[1];if(this.
MD[1]<y1)y1=this.MD[1];if(this.Kx[1]<y1)y1=this.Kx[1];if(this.Es[0]>x2)x2=this.Es[
0];if(this.EC[0]>x2)x2=this.EC[0];if(this.Kx[0]>x2)x2=this.Kx[0];if(this.Es[1]>y2
)y2=this.Es[1];if(this.EC[1]>y2)y2=this.EC[1];if(this.Kx[1]>y2)y2=this.Kx[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JU:function(E){var B;if(A.aaX(E,this.Kx))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Kx=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},Ku:function(E){var B;if(A.aaX(E,
this.MD))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping()
);this.Eu=null;this.MD=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},DC:function(
E){var B;if(A.aaX(E,this.EC))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(
this.GetClipping());this.Eu=null;this.EC=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JJ],this);}},DM:function(E){var B;if(A.aaX(E,this.Es))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.Es=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JJ],this);}},ARb:function(KZ){var HB=A.abi(4,
A.wf,null);var O=0;var If=3;var A2h=false;var A2i=false;HB.Set(0,this.Es);HB.Set(
1,this.EC);HB.Set(2,this.MD);HB.Set(3,this.Kx);while(O<4){var BgO=HB.Get(O)[0];var
ALs=HB.Get(O)[1];var BCI=HB.Get(If)[0];var A4w=HB.Get(If)[1];if(((ALs>KZ[1])!==(
A4w>KZ[1]))||((ALs<KZ[1])!==(A4w<KZ[1]))){var Eo=((((BCI-BgO)*(KZ[1]-ALs))/(A4w-
ALs))|0)+BgO;if(KZ[0]>Eo)A2h=!A2h;if(KZ[0]<Eo)A2i=!A2i;}If=O;O=O+1;}return A2h||
A2i;},Bjd:function(){return((((this.Es[0]===this.Kx[0])&&(this.EC[0]===this.MD[0
]))&&(this.Es[1]===this.EC[1]))&&(this.MD[1]===this.Kx[1]))||((((this.Es[0]===this.
EC[0])&&(this.MD[0]===this.Kx[0]))&&(this.Es[1]===this.Kx[1]))&&(this.EC[1]===this.
MD[1]));},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.Zy;},
_className:"Core::QuadView"};C.Et={M:A.wg,AtP:function(BG,Ah7){var As=A._NewObject(
C.Ari,0);As.extent=this.M;As.Bd=BG;As.Nz=Ah7;this.Eu=As;},AuL:function(BG,ML){var
B;var EW=this.PL;var As=this.Eu;var x1=As.extent[0];var y1=As.extent[1];var x2=As.
extent[2];var y2=As.extent[3];var Ka=[BG[2]-BG[0],BG[3]-BG[1]];var BY=x2-x1;var BI=
y2-y1;if(!ML){var NC=[(B=As.Bd)[2]-B[0],B[3]-B[1]];x1=x1-As.Bd[0];y1=y1-As.Bd[1];
if(NC[0]!==Ka[0]){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1
)===0x1);if(!HS&&(Qu||!HT))x1=((x1*Ka[0])/NC[0])|0;if(!HT&&(Qu||!HS)){x2=x2-As.Bd[
0];x2=((x2*Ka[0])/NC[0])|0;x2=x2-Ka[0];}else x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[
2];if(!Qu){if(HS&&!HT)x2=x1+BY;else if(!HS&&HT)x1=x2-BY;else{x1=x1+((((x2-x1)-BY
)/2)|0);x2=x1+BY;}}}else{x2=x2-As.Bd[2];x1=x1+BG[0];x2=x2+BG[2];}if(NC[1]!==Ka[1
]){var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(
!HU&&(Qv||!HR))y1=((y1*Ka[1])/NC[1])|0;if(!HR&&(Qv||!HU)){y2=y2-As.Bd[1];y2=((y2
*Ka[1])/NC[1])|0;y2=y2-Ka[1];}else y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];if(!Qv
){if(HU&&!HR)y2=y1+BI;else if(!HU&&HR)y1=y2-BI;else{y1=y1+((((y2-y1)-BI)/2)|0);y2=
y1+BI;}}}else{y2=y2-As.Bd[3];y1=y1+BG[1];y2=y2+BG[3];}}else{switch(ML){case 3:{x1=
BG[0];x2=x1+BY;}break;case 4:{x2=BG[2];x1=x2-BY;}break;case 1:{y1=BG[1];y2=y1+BI;
}break;case 2:{y2=BG[3];y1=y2-BI;}break;default:;}if((ML===3)||(ML===4)){var HU=((
EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var Qv=((EW&0x2)===0x2);if(Qv){y1=BG[
1];y2=BG[3];}else if(HU&&!HR){y1=BG[1];y2=y1+BI;}else if(HR&&!HU){y2=BG[3];y1=y2-
BI;}else{y1=BG[1]+((((BG[3]-BG[1])-BI)/2)|0);y2=y1+BI;}}if((ML===1)||(ML===2)){var
HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8);var Qu=((EW&0x1)===0x1);if(Qu){x1=BG[
0];x2=BG[2];}else if(HS&&!HT){x1=BG[0];x2=x1+BY;}else if(HT&&!HS){x2=BG[2];x1=x2-
BY;}else{x1=BG[0]+((((BG[2]-BG[0])-BY)/2)|0);x2=x1+BY;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eu=As;}return[x2-x1,y2-y1];},Anh:function(aOffset,Atl){if(Atl)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bj(this.GetClipping());this.Eu=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bj(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JJ],this);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.
__proto__=C.Et;},_className:"Core::RectView"};C.P={B7:null,B8:null,AKk:null,FG:null
,Hc:null,Xu:null,ApO:null,AV:null,G8:255,AzH:0,AzK:0,AzJ:0,AzI:0,Init:function(aArg
){this.Am();},Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;Cj=((Cj+1)*this.G8)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.FG||(CY.C0===this))this.BcV(CY,aClip
,A.abf(aOffset,this.M.slice(0,2)),Cj,aBlend);else{var B3=255|(255<<8)|(255<<16)|((
Cj&0xFF)<<24);this.FG.Update();CY.A5H(aClip,this.FG,0,A.abh(this.M,aOffset),Cc,B3
,B3,B3,B3,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.FG)return Az;
Az=[].concat(Az[0]-this.AzI,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.AzK);Az=A.abN(
Az,Az[2]+this.AzJ);Az=[].concat(Az.slice(0,3),Az[3]+this.AzH);if(((this.U&0x80000
)===0x80000)){var Ap1=BD;var X;for(X=this.B7;!!X;X=X.Ah)if(((X.U&0x1)===0x1))Ap1=
A.wC(Ap1,X.GetClipping());Az=A.wC(Az,A.abh(Ap1,this.M.slice(0,2)));}return Az;},
Yd:function(Da,BF,Od,Aag,Ac3,Ac2){var B;var X=this.B8;var Api=null;var AE=BD;var
Kb=null;var A2D=!!this.Xu&&(!!this.Xu.FQ||!!this.Xu.B7);if(((B=A.lb(Da,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;Da=A.abg(Da,this.M.slice(0,2));if(!!Ac3){X=Ac3;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!Kb){Kb=X.
AJ;while(!!Kb&&!((Kb.U&0x200)===0x200))Kb=Kb.AJ;if(!!Kb)AE=A.lb(Da,Kb.GetExtent(
));else AE=BD;}if(Kb===X){Kb=null;AE=BD;}if((!!Aag&&!!(C.P.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.Hc.C0===X)&&!A2D))
)){var extent=X.GetExtent();var AJO=Aag;var Ao4=null;if(AJO===X)AJO=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))Ao4=X.Yd(AE
,BF,Od,AJO,Ac3,Ac2);}else if(!(((B=A.lb(extent,Da))[0]>=B[2])||(B[1]>=B[3]))||(Aag===
X))Ao4=X.Yd(Da,BF,Od,AJO,Ac3,Ac2);X=X.AJ;if(!!Ao4){if(!Api||((Ao4.AuW<Api.AuW)&&(
Ao4.AuW>=0)))Api=Ao4;if(!Ao4.AuW)X=null;}}else X=X.AJ;Ac3=null;}return Api;},AuA:
function(Da){var B;var F;var X=this.B7;var LA=BD;var AAJ=true;var result=(Da=F=A.
abg(Da,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var At1=(C.Y.isPrototypeOf(
X)?X:null);LA=A.lb(Da,At1.M);AAJ=((At1.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAJ){var AE=A.lb(X.GetClipping(),LA);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.AuA(AE));}}else{var AE=A.lb(X.GetClipping(),
Da);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.AuA(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cr:function(Rs,U4){var B;
var Tl=this.U;if(((!!this.Ab&&!!!this.FG)&&((this.U&0x80001)===0x80001))&&((U4&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());C.Et.Cr.call(this,Rs,U4);if((((!!this.
Ab&&!!!this.FG)&&((this.U&0x1)===0x1))&&((Rs&0x80000)===0x80000))&&!((Tl&0x80000
)===0x80000))this.Ab.Bj(this.GetClipping());var Xt=this.U^Tl;if(!!this.AV&&((Xt&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cr(0x40,0x0);else this.AV.Cr(0x0
,0x40);}if(!!this.Hc&&((Xt&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.Hc.C0.
U&0x14)===0x14))this.Hc.C0.Cr(0x40,0x0);else this.Hc.C0.Cr(0x0,0x40);}if(((Xt&0x10
)===0x10)){var X;for(X=this.B7;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.Hc.C0===X)))X.Cr(Rs&0x10,U4&
0x10);}if(!!Xt){this.U=this.U|0x8000;A.pe([this,this.ABo],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlX=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKs=[
E[2]-E[0],E[3]-E[1]];var ApX=!A.aaX(AlX,AKs);if(ApX&&!!this.FG){this.FG.ArO(AKs);
A.we(this,0);A.we(this.FG,0);}C.Et.H.call(this,E);if((ApX&&(AlX[0]>0))&&(AlX[1]>
0)){var Bd=[].concat(Cc,AlX);var X=this.B7;while(!!X){if((!X.Eu&&(X.PL!==0x14))&&
!((X.U&0x400)===0x400))X.AtP(Bd,null);X=X.Ah;}}if(ApX){this.U=this.U|0x5000;A.pe([
this,this.ABo],this);}},A3L:function(CN){var BdQ=(C.KeyEvent.isPrototypeOf(CN)?CN:
null);var D5=this.AKk;if(!BdQ)return null;while(!!D5&&(!D5.Bw||!D5.G3(BdQ)))D5=D5.
Ah;return D5;},BCs:function(G){if(!!this.FG){this.FG.C0=this;var AE=A.abg(this.AuA(
A.abh(this.FG.QM,this.M.slice(0,2))),this.M.slice(0,2));this.FG.Ave(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BcV(this.FG,AE,Cc,255,true);this.FG.
C0=null;}},BcV:function(CY,aClip,aOffset,Cj,aBlend){var B;var X=this.B7;var LA=BD;
var AAJ=true;this.Bia(CY,aClip,aOffset,Cj,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var At1=(C.Y.isPrototypeOf(X)?X:null);AAJ=((At1.U&0x1)===0x1);LA=aClip;if(!((
At1.U&0x80000)===0x80000))LA=A.lb(LA,A.abh(At1.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAJ){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LA
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kn(CY,AE,aOffset,Cj,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kn(CY,AE,aOffset,Cj,aBlend);}}X=X.Ah;}this.Bid(CY,aClip,aOffset,Cj,aBlend);},BfN:
function(){var B;var A2a=((this.U&0x1000)===0x1000);var AiE=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aaq=false;var Adk=BD;var K1=BD;var Aar=Cc;var AtL=0;var AtM=0;
var AtK=0;var Qn=0;var X=this.B8;var Kb=null;var AlP=null;while(!!X){if(((X.U&0x800
)===0x800)){Aaq=true;X.U=X.U&~0x800;}if(Aaq&&((X.U&0x200)===0x200)){Aaq=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgX)X.U=X.U|0x1000;}X=X.AJ;}Aaq=false;X=this.B7;
if(A2a){this.U=this.U&~0x1000;A2a=!((AiE[0]>=AiE[2])||(AiE[1]>=AiE[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlP&&(AtK!==Qn)){var AdI=X;var AKP=0;var AA5=Adk[2]-
Adk[0];var Azi=Adk[3]-Adk[1];var AJE=0;var Ap8=Cc;do if(((AdI.U&0x200)===0x200))
AdI=null;else if(((AdI.U&0x401)===0x401)){Ap8=[(B=AdI.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qn===3)||(Qn===4))AA5=AA5-Ap8[0];if((Qn===1)||(Qn===2))Azi=Azi-Ap8[1];
if(!AlP||((AA5>=0)&&(Azi>=0))){AlP=AdI;AdI=AdI.Ah;if((Qn===3)||(Qn===4)){AA5=AA5-
AtL;if(Ap8[1]>AKP)AKP=Ap8[1];}if((Qn===1)||(Qn===2)){Azi=Azi-AtM;if(Ap8[0]>AJE)AJE=
Ap8[0];}}else AdI=null;}else AdI=AdI.Ah;while(!!AdI);if(!AlP)AlP=Kb;K1=Adk;switch(
AtK){case 9:case 11:K1=[].concat(K1.slice(0,3),K1[1]+AKP);break;case 10:case 12:
K1=A.abP(K1,K1[3]-AKP);break;case 5:case 7:K1=A.abN(K1,K1[0]+AJE);break;case 6:case
8:K1=[].concat(K1[2]-AJE,K1.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eu&&(X.Eu.Nz!==Kb))X.Eu=null;if((!X.Eu&&Aaq)&&((X.PL!==0x14)||!!Qn))X.
AtP(K1,Kb);}if(!!X.Eu){if(A2a&&!((X.U&0x400)===0x400))X.AuL(AiE,0);if(Aaq&&((X.U&
0x400)===0x400)){var C4=X.AuL(A.abh(K1,Aar),Qn);if(((X.U&0x1)===0x1)){var Bq=Cc;
switch(Qn){case 3:Bq=[C4[0]+AtL,Bq[1]];break;case 4:Bq=[-C4[0]-AtL,Bq[1]];break;
case 1:Bq=[Bq[0],C4[1]+AtM];break;case 2:Bq=[Bq[0],-C4[1]-AtM];break;default:;}Aar=
A.abf(Aar,Bq);}}}if(((X.U&0x200)===0x200)){if(Aaq)A.pe(Kb.El,Kb);Aaq=((X.U&0x1000
)===0x1000);Kb=(C.Y.isPrototypeOf(X)?X:null);if(Aaq){X.U=X.U&~0x1000;AtK=Kb.AgX;
Qn=AtK;Adk=A.abh(Kb.M,Kb.Br);K1=Adk;Aar=Cc;AtL=Kb.Space+Kb.AUQ;AtM=Kb.Space;Aaq=
!((Adk[0]>=Adk[2])||(Adk[1]>=Adk[3]));AlP=null;switch(AtK){case 9:case 10:Qn=3;break;
case 11:case 12:Qn=4;break;case 5:case 6:Qn=1;break;case 7:case 8:Qn=2;break;default:;
}}if(Aaq)this.Bj(Kb.M);}if(X===AlP){switch(AtK){case 9:case 11:Aar=[0,(Aar[1]+(K1[
3]-K1[1]))+AtM];break;case 10:case 12:Aar=[0,(Aar[1]-(K1[3]-K1[1]))-AtM];break;case
5:case 7:Aar=[(Aar[0]+(K1[2]-K1[0]))+AtL,0];break;case 6:case 8:Aar=[(Aar[0]-(K1[
2]-K1[0]))-AtL,0];break;default:;}AlP=null;}X=X.Ah;}if(Aaq)A.pe(Kb.El,Kb);this.U=
this.U&~0x2000;this.Bl([AiE[2]-AiE[0],AiE[3]-AiE[1]]);},JJ:function(G){A.pe([this
,this.ABo],this);},ABo:function(G){var B;var BCA=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.BfN();}if(((this.U&0x8000)===
0x8000)||BCA){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(E7);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cr(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cr(0x60,0x0);else E.Cr(0x20
,0x0);}},Ba4:function(Aq){this.Bb(Aq);},ASp:function(){return!!this.FG;},ArH:function(
E){var B;if(!!this.FG===E)return;if(!E){this.FG.AEq=null;this.FG.ArO(Cc);this.FG=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());if(E){this.
FG=A._NewObject(A.Graphics.Canvas,0);this.FG.ArO([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.FG.AEq=[this,this.BCs];}A.we(this,0);},A8r:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cr(0x100000,0x0);else this.Cr(0x0
,0x100000);},Dk:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G8)return;
this.G8=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bj(this.GetClipping());},A0b:
function(Aq){this.Dk(Aq);},Aj:function(E){if(E)this.Cr(0x400,0x0);else this.Cr(0x0
,0x400);},BlI:function(E){if(E)this.Cr(0x2,0x0);else this.Cr(0x0,0x2);},Fp:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cr(0x1,0x0);else this.
Cr(0x0,0x1);},ExtendClipping:function(AoE,AoF,AoG,AoD){var B;var Ay$=this.M;var Ry=
Ay$;if(AoE<0)AoE=0;if(AoE>255)AoE=255;if(AoF<0)AoF=0;if(AoF>255)AoF=255;if(AoG<0
)AoG=0;if(AoG>255)AoG=255;if(AoD<0)AoD=0;if(AoD>255)AoD=255;Ry=[].concat(Ry[0]-(
Math.max(AoE,this.AzI)&0xFF),Ry.slice(1,4));Ry=A.abN(Ry,Ry[2]+(Math.max(AoF,this.
AzJ)&0xFF));Ry=A.abP(Ry,Ry[1]-(Math.max(AoG,this.AzK)&0xFF));Ry=[].concat(Ry.slice(
0,3),Ry[3]+(Math.max(AoD,this.AzH)&0xFF));if(AoE!==this.AzI){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=Ry;Az=A.abN(Az
,Ay$[0]);this.Ab.Bj(Az);}this.AzI=AoE&0xFF;}if(AoF!==this.AzJ){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000)){var Az=Ry;Az=[].
concat(Ay$[2],Az.slice(1,4));this.Ab.Bj(Az);}this.AzJ=AoF&0xFF;}if(AoG!==this.AzK
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.U&0x80000)===0x80000
)){var Az=Ry;Az=[].concat(Az.slice(0,3),Ay$[1]);this.Ab.Bj(Az);}this.AzK=AoG&0xFF;
}if(AoD!==this.AzH){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.FG)&&!((this.
U&0x80000)===0x80000)){var Az=Ry;Az=A.abP(Az,Ay$[3]);this.Ab.Bj(Az);}this.AzH=AoD&
0xFF;}},Bid:function(CY,aClip,aOffset,Cj,aBlend){},Bia:function(CY,aClip,aOffset
,Cj,aBlend){},GetMaximalSize:function(){return Hq;},GetMinimalSize:function(){return Cc;
},AUX:function(Iu,Oc,Xe,Tb,Tc,Ah8,O8,Rr,Ly,Lw,Lx){var B;if(!this.Hc){this.AkJ(Iu
,Oc,Xe,Tb,Tc,null,null,Ly,Lw,Lx);return;}var AlW=this.Hc;var JG=AlW.Ah;if(((Iu.U&
0x10000)===0x10000)&&(this.Hc.C0!==Iu))throw new Error(IU);var Adq=A._NewObject(
C.ANU,0);var RA=AlW.RA;var RJ=null;var Mc=null;if(!!JG){RJ=JG.RJ;Mc=JG.Mc;}if(!!
JG&&!!AlW.ApN)RJ=AlW.ApN;if(!!JG&&!!O8)Mc=O8;if(!!Ah8)RA=Ah8;if(!Oc)Oc=A._GetAutoObject(
A.acl.AsC);if(!Xe)Xe=Oc;if(!Tc)Tc=Tb;if(!Tb)Tb=Tc;Adq.RA=Xe;Adq.Mc=Tb;Adq.RJ=Tc;
Adq.ApN=Rr;Adq.C0=Iu;Adq.Ah=this.Hc.Ah;this.Hc.Ah=null;this.Hc=Adq;if(this.AV===
Iu)this.Bb(null);AlW.C0.Cr(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===
0x4))Iu.Cr(0x10040,0x0);else Iu.Cr(0x10000,0x0);if(!!Mc){this.NO(JG.C0,Mc.Ad$(),
null,null,Lx);this.NO(AlW.C0,RA.R$(),null,null,true);this.NO(Adq.C0,Oc.Sa(),Ly,Lw
,true);}else if(!!RJ){this.NO(JG.C0,RJ.Aea(),null,null,Lx);this.NO(AlW.C0,RA.R$(
),null,null,true);this.NO(Adq.C0,Oc.Sa(),Ly,Lw,true);}else if(!!RA){this.NO(AlW.
C0,RA.R$(),null,null,Lx);this.NO(Adq.C0,Oc.Sa(),Ly,Lw,true);}else this.NO(Adq.C0
,Oc.Sa(),Ly,Lw,Lx);},AqD:function(Iu,Ah8,O8,Rr,Ly,Lw,Lx){var B;if(!this.Hc)return;
if(!Iu)return;var KC=this.Hc;var JG=this.Hc.Ah;var ApT=null;while((!!KC&&(KC.C0!==
Iu))&&!!KC.Ah){ApT=KC;KC=JG;JG=KC.Ah;}if(!KC||(KC.C0!==Iu))throw new Error(Is);if(
!ApT){this.Hc=JG;KC.Ah=null;}else{ApT.Ah=JG;KC.Ah=null;}KC.C0.Cr(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!JG)&&!ApT)&&((JG.C0.U&0x200000)===0x200000))JG.C0.Cr(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!JG)&&!ApT)&&((JG.C0.U&0x4)===0x4))JG.C0.Cr(
0x40,0x0);var RA=KC.RA;var RJ=null;var Mc=null;if(!!JG)RJ=JG.RJ;if(!!JG&&!!KC.ApN
)RJ=KC.ApN;if(!!JG&&!!Rr)RJ=Rr;if(!!ApT&&!!JG)Mc=JG.Mc;if((!!ApT&&!!JG)&&!!O8)Mc=
O8;if(!!Ah8)RA=Ah8;if(!!Mc){this.NO(JG.C0,Mc.Ad$(),null,null,Lx);this.NO(KC.C0,RA.
R$(),Ly,Lw,true);}else if(!!RJ){this.NO(JG.C0,RJ.Aea(),null,null,Lx);this.NO(KC.
C0,RA.R$(),Ly,Lw,true);}else this.NO(KC.C0,RA.R$(),Ly,Lw,Lx);},AkJ:function(Iu,Oc
,Xe,Tb,Tc,O8,Rr,Ly,Lw,Lx){var B;if(!Iu)return;if(!!this.Hc&&(this.Hc.C0===Iu)){this.
AUX(Iu,Oc,Xe,Tb,Tc,null,O8,Rr,Ly,Lw,Lx);return;}if(((Iu.U&0x10000)===0x10000))throw new
Error(IU);var KC=A._NewObject(C.ANU,0);if(!!this.Hc&&!this.Hc.Mc){if(!Rr)Rr=O8;if(
!O8)O8=Rr;}var Mc=null;if(!!this.Hc)Mc=this.Hc.Mc;if(!!this.Hc&&!!O8)Mc=O8;if(!Oc
)Oc=A._GetAutoObject(A.acl.AsC);if(!Xe)Xe=Oc;if(!Tc)Tc=Tb;if(!Tb)Tb=Tc;KC.RA=Xe;
KC.Mc=Tb;KC.RJ=Tc;KC.ApN=Rr;if(this.AV===Iu)this.Bb(null);if(!!this.Hc&&((this.Hc.
C0.U&0x200000)===0x200000))this.Hc.C0.Cr(0x0,0x10);if(!!this.Hc)this.Hc.C0.Cr(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iu.U&0x4)===0x4))Iu.Cr(0x10040,0x0);else Iu.
Cr(0x10000,0x0);KC.C0=Iu;KC.Ah=this.Hc;this.Hc=KC;if(!!Mc){this.NO(this.Hc.Ah.C0
,Mc.Ad$(),null,null,Lx);this.NO(Iu,Oc.Sa(),Ly,Lw,true);}else this.NO(Iu,Oc.Sa(),
Ly,Lw,Lx);},A6R:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7t:function(
KZ){var tmp=this;while(!!tmp){KZ=A.abe(KZ,tmp.M.slice(0,2));tmp=tmp.Ab;}return KZ;
},Bi$:function(KZ){var tmp=this;while(!!tmp){KZ=A.abf(KZ,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KZ;},DispatchEvent:function(CN){var B;var X=this.AV;var B0=(C.P.isPrototypeOf(
X)?X:null);var GD=null;var A2D=!!this.Xu&&(!!this.Xu.FQ||!!this.Xu.B7);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.Hc&&!A2D)GD=this.Hc.C0.DispatchEvent(CN);if(!GD&&!!B0)
GD=B0.DispatchEvent(CN);else if(!GD&&!!X)GD=X.G3(CN);if(!GD)GD=this.G3(CN);if(!GD
)GD=this.A3L(CN);return GD;},BroadcastEventAtPosition:function(CN,Hz,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hz)){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.
BroadcastEventAtPosition(CN,A.abe(Hz,B0.M.slice(0,2)),aFilter);else GD=X.G3(CN);
}X=X.AJ;}if(!GD)GD=this.G3(CN);return GD;},BroadcastEvent:function(CN,aFilter){var
B;var X=this.B8;var GD=null;while(!!X&&!GD){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.P.isPrototypeOf(X)?X:null);if(!!B0)GD=B0.BroadcastEvent(CN,aFilter
);else GD=X.G3(CN);}X=X.AJ;}if(!GD)GD=this.G3(CN);if(!GD)GD=this.A3L(CN);return GD;
},Bl:function(aSize){},Ai:function(Ae){},Bjq:function(){this.U=this.U|0x4000;A.pe([
this,this.ABo],this);},Am:function(){this.U=this.U|0x8000;A.pe([this,this.ABo],this
);},Bj:function(Da){var B;var B0=this;while(!!B0&&!((Da[0]>=Da[2])||(Da[1]>=Da[3
]))){var Aan=B0.FG;if(!B0.Ab&&(B0!==this)){B0.Bj(Da);return;}if(!!Aan){var BAc=Aan.
QM;Aan.QM=A.wC(Aan.QM,Da);if(!A.aaY(BAc,Aan.QM)){A.we(B0,0);A.we(Aan,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;Da=A.abh(Da,Az.slice(0,2));if(!!B0.FG||!((B0.
U&0x80000)===0x80000)){if(!!!B0.FG){Az=[].concat(Az[0]-B0.AzI,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.AzK);Az=A.abN(Az,Az[2]+B0.AzJ);Az=[].concat(Az.slice(0,3),Az[3
]+B0.AzH);}Da=A.lb(Da,Az);}B0=B0.Ab;}},QH:function(Ag,Gz,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Agg=A.aaI(Ag.GetExtent());var X=Ag;var A1l=null;var
Bcy=0;var IZ=0x10000;var AKL;if(((aFilter&0x10000)===0x10000))IZ=0x0;var top=((Gz===
4)||(Gz===1))||(Gz===6);var bottom=((Gz===5)||(Gz===3))||(Gz===8);var left=((Gz===
2)||(Gz===1))||(Gz===3);var right=((Gz===7)||(Gz===6))||(Gz===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B8;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IZ||!((B=IZ)&&((X.U&B)===B
))))for(AKL=0;AKL<2;AKL++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKL){if((left&&(s[0]>s[1]))&&(Az[2]<Agg[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Agg[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Agg[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Agg[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Bq=A.abe(A.aaI(Az),Agg);var
Ru=Bq;if(Ru[0]<0)Ru=[-Ru[0],Ru[1]];if(Ru[1]<0)Ru=[Ru[0],-Ru[1]];if(((((!left||(Bq[
0]<=-Ru[1]))&&(!right||(Bq[0]>=Ru[1])))&&(!top||(Bq[1]<=-Ru[0])))&&(!bottom||(Bq[
1]>=Ru[0])))&&((Ru[0]>0)||(Ru[1]>0))){var RC=Bq[0];var RD=Bq[1];var Jm=Math.sqrt((
RC*RC)+(RD*RD));var AKj=0;if(!left&&!right)AKj=Jm/Ru[1];if(!top&&!bottom)AKj=Jm/
Ru[0];Jm=(Jm*AKj)*AKj;if((Jm<Bcy)||!A1l){Bcy=Jm;A1l=X;}}}}return A1l;},AqK:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;var IZ=0x10000;
if(((aFilter&0x10000)===0x10000))IZ=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TN:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B7;
var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACM:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlU=Ag.Ah;var Al7=Ag.AJ;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=0x0;
while(!!AlU||!!Al7){if((!!AlU&&(!aFilter||((B=aFilter)&&((AlU.U&B)===B))))&&(!IZ||
!((B=IZ)&&((AlU.U&B)===B))))return AlU;if((!!Al7&&(!aFilter||((B=aFilter)&&((Al7.
U&B)===B))))&&(!IZ||!((B=IZ)&&((Al7.U&B)===B))))return Al7;if(!!AlU)AlU=AlU.Ah;if(
!!Al7)Al7=Al7.AJ;}return null;},Db:function(aFilter){var B;var X=this.B7;var AE=
BD;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IZ||!((B=IZ)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NO:function(KB,FP,Ly,Lw
,Lx){var B;if(!KB)return;if(!FP)throw new Error(O2);if((!!FP.P||!!FP.Ab)||!!FP.Pj
)throw new Error(P7);if(!!KB.Ab&&(KB.Ab!==this))throw new Error(P8);if(!this.Xu)
this.Xu=A._NewObject(C.AU2,0);FP.Ab=this;FP.P=KB;FP.AKv=Lw;FP.A25=Ly;if(!!KB.ApO
)KB.ApO.Pj.Bon(KB.ApO);KB.ApO=FP;KB.U=KB.U|0x20000;if((Lx&&!!this.Xu.B8)&&!this.
Xu.B8.AQ9())(A.acl.ACH.isPrototypeOf(B=this.Xu.B8)?B:null).A4L(FP);else{var Pj=A.
_NewObject(A.acl.ACH,0);Pj.A4L(FP);this.Xu.A__(Pj,false);}},AhA:function(Ag,J6){
var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new Error(Ff);if(!!J6&&(J6.
Ab!==this))throw new Error(L1);if(Ag.Ah===J6)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B8=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;var GB=
null;var Iw=this.B8;var LO=Ag.J0;if(!!J6){GB=J6;Iw=J6.AJ;}if(!!GB&&(LO>GB.J0))LO=
GB.J0;if(!!Iw&&(LO<Iw.J0))LO=Iw.J0;if(LO!==Ag.J0){Ag.Ab=null;Ag.Ar4(LO);Ag.Ab=this;
}if(!J6){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.B8;Ag.Ah=null;this.B8=Ag;}else{Ag.
Ah=J6;Ag.AJ=J6.AJ;J6.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B7===J6)this.B7=Ag;if(((
Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},ZB:function(Ag){var B;if(!Ag)throw new
Error(CQ);if(Ag.Ab!==this)throw new Error(Ff);if(!Ag.Ah)return;var Iw=this.B8;var
LO=Ag.J0;while(!!Iw&&(Iw.J0>LO))Iw=Iw.AJ;if(((Iw===Ag)||!Iw)||(Iw.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B7=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Iw;Ag.Ah=Iw.Ah;Iw.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping(
));},JY:function(Ag,Qe){var B;if(!Ag)throw new Error(CQ);if(Ag.Ab!==this)throw new
Error(Ff);var Iw=Ag;var GB=Ag;var LO=Ag.J0;while(((Qe>0)&&!!Iw.Ah)&&(Iw.Ah.J0<=LO
)){Iw=Iw.Ah;Qe=Qe-1;}while(((Qe<0)&&!!GB.AJ)&&(GB.AJ.J0>=LO)){GB=GB.AJ;Qe=Qe+1;}
if((Iw===Ag)&&(GB===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eu)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JJ],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;if(Iw
!==Ag){Ag.Ah=Iw.Ah;Ag.AJ=Iw;Iw.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(GB!==Ag){Ag.Ah=GB;
Ag.AJ=GB.AJ;GB.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B8=Ag;if(!Ag.AJ)this.
B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},HN:function(Ag){var B;if(
!Ag)throw new Error(P9);if(Ag.Ab!==this)throw new Error(Ff);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Eu){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JJ],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JJ],this);}Ag.Eu=null;if(this.AV===Ag)this.Bb(this.
ACM(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B7===Ag
)this.B7=Ag.Ah;if(this.B8===Ag)this.B8=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cr(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());},AL7:function(Ag,J6
){var B;if(!Ag)throw new Error(J2);if(!!Ag.Ab)throw new Error(N$);if(!!J6&&(J6.Ab
!==this))throw new Error(L1);var GB=null;var Iw=this.B8;var LO=Ag.J0;if(!!J6){GB=
J6;Iw=J6.AJ;}if(!!GB&&(LO>GB.J0))LO=GB.J0;if(!!Iw&&(LO<Iw.J0))LO=Iw.J0;if(LO!==Ag.
J0){Ag.Ab=null;Ag.Ar4(LO);Ag.Ab=this;}if(!J6){if(!!this.B8)this.B8.Ah=Ag;Ag.AJ=this.
B8;this.B8=Ag;}else{Ag.Ah=J6;Ag.AJ=J6.AJ;J6.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B7===J6)this.B7=Ag;if(((Ag.U&0x1)===0x1))this.Bj(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOM()===Ag))Ag.Cr(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cr(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JJ],this);}},J:function(Ag,Qe){var B;if(!Ag)throw new Error(
J2);if(!!Ag.Ab)throw new Error(N$);var GB=null;var LO=Ag.J0;if(((Qe<0)&&!!this.B8
)&&(this.B8.J0>=LO)){GB=this.B8;Qe=Qe+1;}while((((Qe<0)&&!!GB)&&!!GB.AJ)&&(GB.AJ.
J0>=LO)){GB=GB.AJ;Qe=Qe+1;}if((!GB&&!!this.B8)&&(this.B8.J0>LO))GB=this.B8;while((
!!GB&&!!GB.AJ)&&(GB.AJ.J0>LO))GB=GB.AJ;if(!GB){Ag.Ab=this;Ag.AJ=this.B8;if(!!this.
B8)this.B8.Ah=Ag;if(!this.B7)this.B7=Ag;this.B8=Ag;}else{Ag.Ab=this;Ag.AJ=GB.AJ;
Ag.Ah=GB;GB.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B7=Ag;}if(((Ag.U&0x1)===0x1))
this.Bj(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOM()===Ag))Ag.Cr(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cr(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cr(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JJ],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JJ],this);}},A8t:function(){return this.
AV;},Awj:function(){return this.G8;},_Init:function(aArg){C.Et._Init.call(this,aArg
);this.__proto__=C.P;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Et._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKk)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.FG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RG:null,JF:null,Fu:A.abi(10,null
,null),Atx:null,Aip:null,ABq:0,Ic:0,L_:A.abi(10,0,null),AJK:A.abi(10,A.wg,null),
Xs:A.abi(10,0,null),AfW:A.abi(10,A.wf,null),AtC:A.abi(10,0,null),Aio:A.abi(10,A.
wf,null),Xr:A.abi(10,A.wf,null),Rz:A.abi(10,A.wf,null),Adb:A.abi(10,A.wf,null),EO:
0,AJ8:0,AJ7:0,Oq:A.abi(4,0,null),Kh:A.abi(4,A.wg,null),Ke:0,Az8:0,AtR:0,AzT:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Im:function(){return this;
},Kn:function(CY,aClip,aOffset,Cj,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CY.Ave(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.P.Kn.call(this,CY,aClip
,aOffset,Cj,aBlend);},Cr:function(Rs,U4){var B;C.P.Cr.call(this,Rs,U4);if(!this.
Ab&&(((Rs&0x1)===0x1)||((U4&0x1)===0x1)))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rs&0x2)===0x2)||((U4&0x2)===0x2)))this.Bj([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.P.Bb.call(this,E);},ArH:
function(E){var B;var BAa=this.FG;C.P.ArH.call(this,E);if(((BAa!==this.FG)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Dk:function(
E){var B;var BO=this.G8;C.P.Dk.call(this,E);if(((BO!==this.G8)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CN){if(!!CN){CN.AvR=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=null;if(!!this.
JF){GD=this.JF.C0.DispatchEvent(CN);if(!GD)GD=this.G3(CN);if(!GD)GD=this.A3L(CN);
this.Ic=0;return GD;}GD=C.P.DispatchEvent.call(this,CN);this.Ic=0;return GD;},BroadcastEvent:
function(CN,aFilter){if(!!CN){CN.AvR=!!this.Ic;if(!!this.Ic)CN.Bs=this.Ic;}var GD=
C.P.BroadcastEvent.call(this,CN,aFilter);this.Ic=0;return GD;},Bj:function(Da){var
B;if(this.ABq>0)throw new Error(P_);if(!!this.FG&&!this.Ab){if(((B=this.FG.QM)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.FG,0);}this.FG.QM=A.wC(this.FG.QM
,Da);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)Da=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.P.Bj.call(this,Da);return;}Da=A.
lb(A.abh(Da,this.M.slice(0,2)),this.M);if((Da[0]>=Da[2])||(Da[1]>=Da[3]))return;
var O;for(O=0;O<this.Ke;O=O+1)if(!(((B=A.lb(this.Kh.Get(O),Da))[0]>=B[2])||(B[1]>=
B[3]))){this.Kh.Set(O,A.wC(this.Kh.Get(O),Da));this.Oq.Set(O,A.aaH(this.Kh.Get(O
)));return;}if(this.Ke<3){this.Kh.Set(this.Ke,Da);this.Oq.Set(this.Ke,A.aaH(Da));
this.Ke=this.Ke+1;return;}var If;var RF;var Az7=0;var Az_=0;var Bcx=2147483647;this.
Kh.Set(this.Ke,Da);this.Oq.Set(this.Ke,A.aaH(Da));for(If=0;If<=this.Ke;If=If+1)for(
RF=If+1;RF<=this.Ke;RF=RF+1){var ALe=A.aaH(A.wC(this.Kh.Get(If),this.Kh.Get(RF))
);var Bfn=((ALe<<8)/(this.Oq.Get(If)+this.Oq.Get(RF)))|0;if(Bfn<Bcx){Bcx=Bfn;Az7=
If;Az_=RF;}}this.Kh.Set(Az7,A.wC(this.Kh.Get(Az7),this.Kh.Get(Az_)));this.Oq.Set(
Az7,A.aaH(this.Kh.Get(Az7)));if(Az_!==this.Ke){this.Kh.Set(Az_,this.Kh.Get(this.
Ke));this.Oq.Set(Az_,this.Oq.Get(this.Ke));}},ByQ:function(){var LI=A._NewObject(
C.AqF,0);LI.AvR=!!this.Ic;if(!!this.Ic)LI.Bs=this.Ic;return LI;},Ao2:function(){
var LI=A._NewObject(C.Aec,0);LI.AvR=!!this.Ic;if(!!this.Ic)LI.Bs=this.Ic;return LI;
},AtB:function(){var LI=A._NewObject(C.AuT,0);LI.AvR=!!this.Ic;if(!!this.Ic)LI.Bs=
this.Ic;return LI;},ByU:function(G){var O;var Api=false;for(O=0;O<10;O=O+1)if(!!
this.Fu.Get(O)){var pos=this.Rz.Get(O);var B0=this.Fu.Get(O).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fu.Get(O)!==this)){
var tmp=this.Fu.Get(O);this.EO=O;this.Fu.Set(O,null);tmp.G3(this.Ao2().InitializeUp(
O,this.Aio.Get(O),this.AfW.Get(O),this.Xs.Get(O),this.L_.Get(O)+1,this.Xr.Get(O)
,false,this.Rz.Get(O),this.Adb.Get(O)));this.BroadcastEvent(this.AtB().InitializeUp(
O,this.L_.Get(O)+1,false,tmp,this.Rz.Get(O)),0x18);}else{this.Xs.Set(O,(this.Aip.
Bs-this.AtC.Get(O))|0);if(this.Xs.Get(O)<10)this.Xs.Set(O,10);this.EO=O;this.Fu.
Get(O).G3(this.Ao2().InitializeHold(O,pos,this.AfW.Get(O),this.Xs.Get(O),this.L_.
Get(O)+1,this.Xr.Get(O),this.Rz.Get(O),this.Adb.Get(O)));Api=true;}}if(!Api)this.
Aip.Ar(false);},GetFPS:function(){var ticksCount=0;var Bc$=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJ8&&(ticksCount>this.AJ8))Bc$=((this.AJ7*1000)/((
ticksCount-this.AJ8)|0))|0;this.AJ7=0;this.AJ8=ticksCount;return Bc$;},Update:function(
){var B;if(!this.Atx)this.Atx=A._NewObject(A.Graphics.Canvas,0);this.Atx.ArO([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Atx.Update();return this.UpdateGE20(this.Atx);}
,UpdateGE20:function(CY){if(!this.BeginUpdate())return BD;var Agr=this.UpdateCanvas(
CY,Cc);this.EndUpdate();return Agr;},EndUpdate:function(){if(this.Ke>0){this.AJ7=
this.AJ7+1;this.Ke=0;}},UpdateCanvas:function(CY,aOffset){var B;var Agr=BD;var Byx=[
].concat(aOffset,A.abf(CY.FrameSize,aOffset));var O;var If=this.Ke;this.ABq=this.
ABq+1;CY.C0=this;for(O=0;(O<If)&&(O<4);O=O+1)if(this.Oq.Get(O)>0){this.Kn(CY,A.abg(
this.Kh.Get(O),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agr=A.wC(Agr,A.lb(Byx
,this.Kh.Get(O)));}else If=If+1;CY.C0=null;this.ABq=this.ABq-1;if(!((Agr[0]>=Agr[
2])||(Agr[1]>=Agr[3])))return A.abg(Agr,aOffset);else return Agr;},GetUpdateRegion:
function(AI7){var O;var If=this.Ke;if(AI7<0)return BD;for(O=0;(O<If)&&(O<4);O=O+
1)if(!this.Oq.Get(O)){If=If+1;AI7=AI7+1;}else if(O===AI7)return this.Kh.Get(O);return BD;
},BeginUpdate:function(){var B;var O;if(!!this.Ke&&!A.aaY(this.Kh.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bgr=A.abi(3,A.wg,null);var Bgq=this.Ke;for(O=0;
O<Bgq;O++)Bgr.Set(O,this.Kh.Get(O));for(O=0;O<Bgq;O++){var BfI=A.abh(Bgr.Get(O),
this.M.slice(0,2));var BfJ=this.AuA(BfI);if(!A.aaY(BfI,BfJ))this.Bj(A.abg(BfJ,this.
M.slice(0,2)));}}var If;var RF;for(If=0;If<(this.Ke-1);If++)if(this.Oq.Get(If)>0
)for(RF=If+1;RF<this.Ke;RF++)if(this.Oq.Get(RF)>0){var ALe=A.aaH(A.wC(this.Kh.Get(
If),this.Kh.Get(RF)));if(((ALe-this.Oq.Get(If))-this.Oq.Get(RF))<0){this.Kh.Set(
If,A.wC(this.Kh.Get(If),this.Kh.Get(RF)));this.Oq.Set(If,ALe);this.Oq.Set(RF,0);
}}for(O=this.Ke-1;O>=0;O--)if(!this.Oq.Get(O))this.Ke=this.Ke-1;return this.Ke;}
,DoesNeedUpdate:function(){if(this.Ke>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.AzT)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bj(this.M);return this;},SetRootFocus:function(A0N){if(A0N===this.AzT
)return false;this.AzT=A0N;if(!A0N){if(!!this.JF)this.JF.C0.Cr(0x0,0x40);else this.
Cr(0x0,0x40);}else if(!!this.JF)this.JF.C0.Cr(0x40,0x0);else this.Cr(0x40,0x0);return true;
},SetUserInputTimestamp:function(Qf){this.Ic=Qf;},DriveKeyboardHitting:function(
KA,AyV,Ta){var B;var A3M=!!this.RG;if(!!this.RG&&((!Ta||(this.Az8!==KA))||(this.
AtR!==AyV))){var LI=null;var X=(C.Ci.isPrototypeOf(B=this.RG)?B:null);var D5=(C.
BK.isPrototypeOf(B=this.RG)?B:null);if(!!this.Az8)LI=A._NewObject(C.KeyEvent,0).
Initialize(this.Az8,false);if(this.AtR!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtR,false);if(!!D5)D5.G3(LI);else if(!!X)X.G3(LI);this.Az8=0;this.AtR=0x00;
this.RG=null;}if(!!this.RG){var LI=null;var X=(C.Ci.isPrototypeOf(B=this.RG)?B:null
);var D5=(C.BK.isPrototypeOf(B=this.RG)?B:null);if(!!KA)LI=A._NewObject(C.KeyEvent
,0).Initialize(KA,true);if(this.AtR!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
AyV,true);if(!!D5)D5.G3(LI);else if(!!X)X.G3(LI);}if(!this.RG&&Ta){if(!!KA)this.
RG=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(KA,true));if(AyV!==0x00
)this.RG=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyV,true));if(
!(C.BK.isPrototypeOf(B=this.RG)?B:null)&&!(C.Ci.isPrototypeOf(B=this.RG)?B:null)
)this.RG=null;this.Az8=KA;this.AtR=AyV;A3M=A3M||!!this.RG;}this.Ic=0;return A3M;
},DriveCursorMovement:function(Fh){return this.DriveMultiTouchMovement(this.EO,Fh
);},DriveMultiTouchMovement:function(BF,Fh){if((BF<0)||(BF>9)){this.Ic=0;return false;
}var Fw=A.abe(Fh,this.Rz.Get(BF));this.Rz.Set(BF,Fh);if(!this.Fu.Get(BF)||A.aaX(
Fw,Cc)){this.Ic=0;return false;}var pos=Fh;var B0=this.Fu.Get(BF).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fu.Get(BF)!==
this)){var tmp=this.Fu.Get(BF);this.EO=BF;this.Fu.Set(BF,null);tmp.G3(this.Ao2().
InitializeUp(BF,this.Aio.Get(BF),this.AfW.Get(BF),this.Xs.Get(BF),this.L_.Get(BF
)+1,this.Xr.Get(BF),false,this.Rz.Get(BF),this.Adb.Get(BF)));this.BroadcastEvent(
this.AtB().InitializeUp(BF,this.L_.Get(BF)+1,false,tmp,Fh),0x18);}else{this.Aio.
Set(BF,pos);this.EO=BF;this.Fu.Get(BF).G3(this.ByQ().Initialize(BF,pos,this.AfW.
Get(BF),Fw,this.Xs.Get(BF),this.L_.Get(BF)+1,this.Xr.Get(BF),Fh,this.Adb.Get(BF)
));}this.Ic=0;return true;},DriveCursorHitting:function(Ta,BF,Fh){return this.DriveMultiTouchHitting(
Ta,BF,Fh);},DriveMultiTouchHitting:function(Ta,BF,Fh){if((BF<0)||(BF>9)){this.Ic=
0;return false;}var ticksCount=this.Ic;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBJ=this.Ic;this.DriveMultiTouchMovement(BF,Fh);Fh=this.Rz.Get(BF);
this.Ic=BBJ;if(Ta)this.Adb.Set(BF,Fh);if(Ta&&!this.Fu.Get(BF)){var JE;var pos=Fh;
if(A.wa(this.AJK.Get(BF),Fh)&&((ticksCount-this.AtC.Get(BF))<=250))this.L_.Set(BF
,this.L_.Get(BF)+1);else this.L_.Set(BF,0);this.AJK.Set(BF,A.abh(MH,Fh));this.AtC.
Set(BF,ticksCount);if(!!this.JF)JE=this.Yd(A.abh(MH,Fh),BF,this.L_.Get(BF)+1,this.
JF.C0,null,0x0);else JE=this.Yd(A.abh(MH,Fh),BF,this.L_.Get(BF)+1,null,null,0x0);
if(!!JE){this.BroadcastEvent(this.AtB().InitializeDown(BF,this.L_.Get(BF)+1,false
,JE.Ci,Fh),0x18);this.Fu.Set(BF,JE.Ci);this.Xr.Set(BF,JE.DG);}else{this.Fu.Set(BF
,null);this.Xr.Set(BF,Cc);this.Ic=0;return false;}var B0=JE.Ci.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfW.Set(BF,pos);this.Aio.
Set(BF,pos);this.Xs.Set(BF,0);this.Aip.Ar(true);this.EO=BF;this.Fu.Get(BF).G3(this.
Ao2().InitializeDown(BF,pos,this.L_.Get(BF)+1,this.Xr.Get(BF),false,Fh));this.Ic=
0;return true;}if(!Ta&&!!this.Fu.Get(BF)){var pos=Fh;var B0=this.Fu.Get(BF).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aio.
Get(BF);this.EO=BF;var tmp=this.Fu.Get(BF);this.Fu.Set(BF,null);tmp.G3(this.Ao2(
).InitializeUp(BF,pos,this.AfW.Get(BF),this.Xs.Get(BF),this.L_.Get(BF)+1,this.Xr.
Get(BF),false,Fh,this.Adb.Get(BF)));this.BroadcastEvent(this.AtB().InitializeUp(
BF,this.L_.Get(BF)+1,false,tmp,Fh),0x18);this.Ic=0;return true;}this.Ic=0;return false;
},AUl:function(Aai,BbT,Ac3,Ac2){if(Aai===this)Aai=null;if(!!!Aai&&!!this.JF)Aai=
this.JF.C0;if(!this.Fu.Get(this.EO))return;var JE;JE=this.Yd(A.abh(MH,this.Rz.Get(
this.EO)),this.EO,1,Aai,Ac3,Ac2);if(!!JE&&(this.Fu.Get(this.EO)!==JE.Ci))this.ANK(
JE.Ci,JE.DG);if(!JE&&(this.Fu.Get(this.EO)!==BbT))this.ANK(BbT,Cc);},ANK:function(
Aai,Xf){if(!this.Fu.Get(this.EO)||(this.Fu.Get(this.EO)===Aai))return;var tmp=this.
Fu.Get(this.EO);this.Fu.Set(this.EO,null);tmp.G3(this.Ao2().InitializeUp(this.EO
,this.Aio.Get(this.EO),this.AfW.Get(this.EO),this.Xs.Get(this.EO),this.L_.Get(this.
EO)+1,this.Xr.Get(this.EO),true,this.Rz.Get(this.EO),this.Adb.Get(this.EO)));this.
BroadcastEvent(this.AtB().InitializeUp(this.EO,this.L_.Get(this.EO)+1,true,tmp,this.
Rz.Get(this.EO)),0x18);var pos=this.Rz.Get(this.EO);var B0=null;if(!!Aai)B0=Aai.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aai
!==this)){this.Fu.Set(this.EO,null);return;}this.BroadcastEvent(this.AtB().InitializeDown(
this.EO,this.L_.Get(this.EO)+1,true,Aai,this.Rz.Get(this.EO)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fu.Set(this.EO,Aai);this.Xr.Set(
this.EO,Xf);this.AfW.Set(this.EO,pos);this.Aio.Set(this.EO,pos);this.L_.Set(this.
EO,0);this.Xs.Set(this.EO,0);this.AtC.Set(this.EO,ticksCount);this.Adb.Set(this.
EO,this.Rz.Get(this.EO));this.Fu.Get(this.EO).G3(this.Ao2().InitializeDown(this.
EO,pos,this.L_.Get(this.EO)+1,this.Xr.Get(this.EO),true,this.Adb.Get(this.EO)));
},AOM:function(){if(!!this.JF)return this.JF.C0;return null;},ACE:function(KB){var
B;if(!KB)throw new Error(S8);if(!((KB.U&0x80)===0x80))throw new Error(UQ);if(this.
JF.C0===KB)this.JF=this.JF.Ah;else{var AzS=this.JF;while(AzS.Ah.C0!==KB)AzS=AzS.
Ah;AzS.Ah=AzS.Ah.Ah;}KB.Cr(0x0,0xD0);if(this.AzT){if(!!this.JF)this.JF.C0.Cr(0x50
,0x0);else this.Cr(0x50,0x0);}},AMR:function(KB){var B;var As=A._NewObject(C.A7E
,0);if(!KB)throw new Error(Z1);if(KB===null)throw new Error(W1);if(((KB.U&0x80)===
0x80))throw new Error(It);if(!!this.JF)this.JF.C0.Cr(0x0,0x50);else this.Cr(0x0,
0x50);As.Ah=this.JF;As.C0=KB;this.JF=As;if(this.AzT)KB.Cr(0xD0,0x0);else KB.Cr(0x90
,0x0);},_Init:function(aArg){C.P._Init.call(this,aArg);C.Timer._Init.call(this.Aip={
I:this},0);(this.Fu=[]).__proto__=C.Root.Fu;(this.L_=[]).__proto__=C.Root.L_;(this.
AJK=[]).__proto__=C.Root.AJK;(this.Xs=[]).__proto__=C.Root.Xs;(this.AfW=[]).__proto__=
C.Root.AfW;(this.AtC=[]).__proto__=C.Root.AtC;(this.Aio=[]).__proto__=C.Root.Aio;(
this.Xr=[]).__proto__=C.Root.Xr;(this.Rz=[]).__proto__=C.Root.Rz;(this.Adb=[]).__proto__=
C.Root.Adb;(this.Oq=[]).__proto__=C.Root.Oq;(this.Kh=[]).__proto__=C.Root.Kh;this.
__proto__=C.Root;this.U=0x10007F;this.Aip.PR(10);this.Aip.MB=[this,this.ByU];this.
Init(aArg);},_Done:function(){this.__proto__=C.P;this.Aip._Done();C.P._Done.call(
this);},_ReInit:function(){C.P._ReInit.call(this);this.Aip._ReInit();},_Mark:function(
D){var B;C.P._Mark.call(this,D);if((B=this.RG)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.JF)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fu,D);if((B=this.
Atx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aip)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bs:0,AvR:false,Init:function(aArg){this.Bs=
this.Avm();},Avm:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CO:0,DQ:0,Down:false
,Initialize2:function(KA,Ta){this.CO=0;this.DQ=KA;this.Down=Ta;if((KA>=0x30)&&(KA<=
0x39))this.CO=(10+KA)-48;if((KA>=0x41)&&(KA<=0x5A))this.CO=(105+KA)-65;if((KA>=0x61
)&&(KA<=0x7A))this.CO=(105+KA)-97;if(KA===0x20)this.CO=131;if(!this.CO)switch(KA
){case 0x2B:this.CO=132;break;case 0x2D:this.CO=133;break;case 0x2A:this.CO=134;
break;case 0x2F:this.CO=135;break;case 0x3D:this.CO=136;break;case 0x2E:this.CO=
137;break;case 0x2C:this.CO=138;break;case 0x3A:this.CO=139;break;case 0x3B:this.
CO=140;break;default:;}return this;},Initialize:function(KA,Ta){this.CO=KA;this.
Down=Ta;this.DQ=0x00;var A1r=KA-10;var Atw=KA-105;if((A1r>=0)&&(A1r<=9))this.DQ=(
48+A1r)&0xFFFF;if((Atw>=0)&&(Atw<=25))this.DQ=(65+Atw)&0xFFFF;if(KA===131)this.DQ=
0x20;if(this.DQ===0x00)switch(KA){case 132:this.DQ=0x2B;break;case 133:this.DQ=0x2D;
break;case 134:this.DQ=0x2A;break;case 135:this.DQ=0x2F;break;case 136:this.DQ=0x3D;
break;case 137:this.DQ=0x2E;break;case 138:this.DQ=0x2C;break;case 139:this.DQ=0x3A;
break;case 140:this.DQ=0x3B;break;default:;}return this;},Bjv:function(BbI){switch(
BbI){case 141:return((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(this.
DQ<=0x7A));case 142:return(((this.DQ>=0x41)&&(this.DQ<=0x5A))||((this.DQ>=0x61)&&(
this.DQ<=0x7A)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 143:return(this.DQ>=0x30
)&&(this.DQ<=0x39);case 144:return(((this.DQ>=0x41)&&(this.DQ<=0x46))||((this.DQ>=
0x61)&&(this.DQ<=0x66)))||((this.DQ>=0x30)&&(this.DQ<=0x39));case 145:return this.
DQ!==0x00;case 146:return(this.DQ===0x00)&&!!this.CO;case 147:return(((this.CO===
6)||(this.CO===7))||(this.CO===4))||(this.CO===5);case 148:return(this.DQ!==0x00
)||!!this.CO;default:;}return BbI===this.CO;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.ARp={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.ARp;},_className:
"Core::LanguageEvent"};C.AuT={AxJ:null,LT:A.wf,N6:0,IJ:0,Down:false,NF:false,InitializeUp:
function(BF,Od,AoB,A05,Aah){this.Down=false;this.IJ=BF;this.N6=Od;this.LT=Aah;this.
AxJ=A05;this.NF=AoB;return this;},InitializeDown:function(BF,Od,AoB,A05,Aah){this.
Down=true;this.IJ=BF;this.N6=Od;this.LT=Aah;this.AxJ=A05;this.NF=AoB;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuT;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.AxJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Aec={AgZ:A.wf,LT:A.wf,N6:0,Jt:
0,NR:A.wf,H0:A.wf,IJ:0,Down:false,NF:false,InitializeHold:function(BF,Ali,AyY,AyZ
,Od,Xf,Aah,AyX){this.Down=true;this.IJ=BF;this.H0=A.abf(Ali,Xf);this.NR=A.abf(AyY
,Xf);this.Jt=AyZ;this.N6=Od;this.LT=Aah;this.AgZ=AyX;return this;},InitializeUp:
function(BF,Ali,AyY,AyZ,Od,Xf,AoB,Aah,AyX){this.Down=false;this.IJ=BF;this.H0=A.
abf(Ali,Xf);this.NR=A.abf(AyY,Xf);this.Jt=AyZ;this.N6=Od;this.NF=AoB;this.LT=Aah;
this.AgZ=AyX;return this;},InitializeDown:function(BF,Ali,Od,Xf,AoB,Aah){this.Down=
true;this.IJ=BF;this.H0=A.abf(Ali,Xf);this.NR=A.abf(Ali,Xf);this.Jt=0;this.N6=Od;
this.NF=AoB;this.LT=Aah;this.AgZ=Aah;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Aec;},_className:"Core::CursorEvent"};C.AqF={
AgZ:A.wf,LT:A.wf,N6:0,Jt:0,DG:A.wf,NR:A.wf,H0:A.wf,IJ:0,Initialize:function(BF,Ali
,AyY,aOffset,AyZ,BxU,Xf,Aah,AyX){this.IJ=BF;this.H0=A.abf(Ali,Xf);this.NR=A.abf(
AyY,Xf);this.DG=aOffset;this.Jt=AyZ;this.N6=BxU;this.LT=Aah;this.AgZ=AyX;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AqF;},_className:
"Core::DragEvent"};C.Y={BX:null,Nx:null,El:null,Br:A.wf,AUQ:0,Space:0,AgX:0,Kn:function(
CY,aClip,aOffset,Cj,aBlend){},GetClipping:function(){var B;var Az=C.Et.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var Ap1=BD;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))Ap1=A.wC(Ap1,X.GetClipping());
Az=A.wC(Az,Ap1);}return Az;},Cr:function(Rs,U4){var B;var Tl=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((U4&0x80000)===0x80000))this.Ab.Bj(this.GetClipping(
));C.Et.Cr.call(this,Rs,U4);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rs&0x80000)===
0x80000))&&!((Tl&0x80000)===0x80000))this.Ab.Bj(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlX=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKs=[
E[2]-E[0],E[3]-E[1]];var ApX=!A.aaX(AlX,AKs);var Fw=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fw,Cc)&&!ApX){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Anh(Fw,tmp);}X=X.Ah;}A.pe(this.
El,this);}if((ApX&&(AlX[0]>0))&&(AlX[1]>0)){var Bd=A.abh(this.M,this.Br);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eu&&(X.Eu.
Nz!==this))X.Eu=null;if(!X.Eu&&((X.PL!==0x14)||!!this.AgX))X.AtP(Bd,this);}X=X.Ah;
}A.pe(this.El,this);}C.Et.H.call(this,E);if(!!this.Ab&&ApX){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JJ],this);}}},BfC:function(){var B;if((!this.AgX||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1L=((this.U&0x1000)===0x1000);for(;!!X&&!A1L;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1L=true;if(((X.U&0x200)===
0x200))break;}if(A1L){this.U=this.U&~0x4000;this.Ab.BfN();}},ApI:function(G){var
B;this.BX.Q=null;this.BX.Qt=null;this.BX=null;(B=this.Nx)?B[1].call(B[0],this):null;
},Gb:function(E){var B;var Fw=A.abe(E,this.Br);if(A.aaX(Fw,Cc))return;this.Br=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Anh(Fw,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bj(this.M);A.pe(
this.El,this);},A_p:function(E){var B;if(E<0)E=0;if(E===this.AUQ)return;this.AUQ=
E;if(!!this.Ab&&!!this.AgX){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JJ],this);}},Bnt:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgX){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JJ],this);}},JS:function(E){var B;if(E===this.AgX)return;
this.AgX=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JJ],this);}},Vw:function(AcW,E8){var Atw=this.Db(0x1);var Rx=this.M;var
Vg=A.abe(Atw.slice(0,2),Rx.slice(0,2));var Ma=A.abe(Atw.slice(2,4),Rx.slice(2,4)
);var Bq=Cc;if((Vg[0]>0)&&(Ma[0]>Vg[0]))Bq=[Vg[0],Bq[1]];else if((Vg[0]>0)&&(Ma[
0]>0))Bq=[Ma[0],Bq[1]];if((Ma[0]<0)&&(Vg[0]<Ma[0]))Bq=[Ma[0],Bq[1]];else if((Ma[
0]<0)&&(Vg[0]<0))Bq=[Vg[0],Bq[1]];if((Vg[1]>0)&&(Ma[1]>Vg[1]))Bq=[Bq[0],Vg[1]];else
if((Vg[1]>0)&&(Ma[1]>0))Bq=[Bq[0],Ma[1]];if((Ma[1]<0)&&(Vg[1]<Ma[1]))Bq=[Bq[0],Ma[
1]];else if((Ma[1]<0)&&(Vg[1]<0))Bq=[Bq[0],Vg[1]];if(A.aaX(Bq,Cc)){(E8)?E8[1].call(
E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.
Qt=null;this.Nx=null;}this.BX=AcW;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E8)?E8[
1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.
Ans,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qt=[this,this.
ApI];this.BX.Ae9(false);this.BX.Ar(true);this.Nx=E8;}},HH:function(Ag,Ac0,AcW,E8
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UR);this.BfC();var Az=Ag.GetExtent();var Bd=this.M;var LM=A.lb(Az,Bd);if((!Ac0&&
!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az))){(E8)?E8[1].call(E8[0],this
):null;return;}var Bq=Cc;if(Az[2]>Bd[2])Bq=[Az[2]-Bd[2],Bq[1]];if(Az[3]>Bd[3])Bq=[
Bq[0],Az[3]-Bd[3]];if(Bq[0]>(Az[0]-Bd[0]))Bq=[Az[0]-Bd[0],Bq[1]];if(Bq[1]>(Az[1]-
Bd[1]))Bq=[Bq[0],Az[1]-Bd[1]];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.
BX.Qt=null;this.Nx=null;}this.BX=AcW;if(!this.BX){this.Gb(A.abe(this.Br,Bq));(E8
)?E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Ans,this.Gb];this.BX.Cx=this.Br;this.BX.B2=A.abe(this.Br,Bq);this.BX.Qt=[this
,this.ApI];this.BX.Ae9(false);this.BX.Ar(true);this.Nx=E8;}},BiX:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CB=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CB=CB+1;Ag=Ag.AJ;}return CB;
},TN:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IZ=0x10000;if(((aFilter&0x10000)===0x10000))IZ=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Db:function(aFilter){var B;var X=this.Ah;var AE=BD;var IZ=0x10000;this.BfC();if(((
aFilter&0x10000)===0x10000))IZ=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IZ||!((B=IZ)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Ans:function(){return this.Br;},_Init:
function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Et._Mark.call(this,D);if((B=this.BX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CM={
HA:null,BX:null,Ci:null,WK:null,Nx:null,El:null,Hl:null,Ti:-1,Th:0,Jp:-1,Hs:0,AiH:
8,Ol:0,Uv:0,AcH:A.wf,G5:-1,Br:0,Gs:-1,OQ:0,GO:24,AY:0,Li:null,NN:false,AtS:false
,AUX:function(Iu,Oc,Xe,Tb,Tc,Ah8,O8,Rr,Ly,Lw,Lx){throw new Error(Z2);},AqD:function(
Iu,Ah8,O8,Rr,Ly,Lw,Lx){throw new Error(W2);},AkJ:function(Iu,Oc,Xe,Tb,Tc,O8,Rr,Ly
,Lw,Lx){throw new Error(Z3);},DispatchEvent:function(CN){var B;var result=null;if(((
this.Gs>=0)&&(this.Gs<this.AY))&&!this.AV){this.G5=this.Gs;this.Ci=(C.Ci.isPrototypeOf(
B=A._NewObject(this.Li,0))?B:null);if(!!this.B8)this.B8.Ah=this.Ci;else this.B7=
this.Ci;this.Ci.AJ=this.B8;this.B8=this.Ci;this.Ci.Ab=this;this.AcH=[(B=this.M)[
2]-B[0],this.GO];(B=this.Hl)?B[1].call(B[0],this):null;var B0=(C.P.isPrototypeOf(
B=this.Ci)?B:null);if(!!B0)result=B0.DispatchEvent(CN);else result=this.Ci.G3(CN
);if(!!this.Ci.AJ)this.Ci.AJ.Ah=null;else this.B7=null;this.B8=this.Ci.AJ;this.Ci.
AJ=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=C.P.DispatchEvent.call(this
,CN);return result;},Ai:function(Ae){var B;if(!this.Li){A.pe(this.El,this);return;
}this.AtS=true;var AAM=0;if(!this.NN)AAM=this.OQ;var FT=this.Al6(-AAM-this.Br,1);
var GZ=this.Al6(((((B=this.M)[3]-B[1])-AAM)-this.Br)-1,2);var CB=GZ-FT;if(CB<1)CB=
1;var Aij=(CB/2)|0;var Aik=(CB/3)|0;if(!Aij)Aij=1;if(!Aik)Aik=1;if(FT<this.Hs){FT=
FT-Aij;GZ=GZ+Aik;}else if(GZ>this.Jp){FT=FT-Aik;GZ=GZ+Aij;}else{FT=this.Hs;GZ=this.
Jp;}if(!this.NN){if(FT>=this.AY){FT=0;GZ=-1;}else if(GZ<0){FT=0;GZ=-1;}if(GZ>=this.
AY)GZ=this.AY-1;if(FT<0)FT=0;}else if(this.AY<=0){FT=0;GZ=-1;}var AiX=this.Hs;var
AiY=this.Jp;var Apv=0;var Apw=-1;if(FT>AiX)AiX=FT;if(GZ<AiY)AiY=GZ;if(AiX<=AiY){
while((this.Jp<GZ)&&(this.Hs<AiX)){this.AdD();this.Azn();}while((this.Hs>FT)&&(this.
Jp>AiY)){this.AAZ();this.Azm();}}else{this.Jp=(this.Jp-this.Hs)+FT;this.Hs=FT;Apv=
this.Hs;Apw=this.Jp;}while(this.Hs<FT)this.AdD();while(this.Jp>GZ)this.AAZ();while(
this.Hs>FT)this.Azm();while(this.Jp<GZ)this.Azn();var Aa=this.B7;var inx=this.Hs;
var pos=[0,(AAM+this.Br)+this.Jn(inx,0)];var BI=(B=this.M)[3]-B[1];var AlF=null;
var BgB=(B=this.M)[2]-B[0];while(!!Aa){var IA=inx;if(this.NN){if(IA<0)IA=this.AY-(-
IA%this.AY);if(IA>0)IA=IA%this.AY;}var AdE=((IA>=this.Th)&&(IA<=this.Ti))||((inx>=
Apv)&&(inx<=Apw));var Apb=Aa.GetExtent();var Bq=A.abe(pos,Apb.slice(0,2));if(AdE
)this.Uv=this.GO;else this.Uv=Apb[3]-Apb[1];var A2r=pos[1];var A2s=pos[1]+this.Uv;
if(!A.aaX(Bq,Cc))Aa.Anh(Bq,true);if((AdE&&(A2r<BI))&&(A2s>0)){this.Ci=Aa;this.G5=
IA;this.AcH=[BgB,this.Uv];(B=this.Hl)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uv];}inx=this.Hs;Aa=this.B7;pos=[0,(AAM+this.Br)+this.Jn(
inx,0)];while(!!Aa){var IA=inx;if(this.NN){if(IA<0)IA=this.AY-(-IA%this.AY);if(IA>
0)IA=IA%this.AY;}var AdE=((IA>=this.Th)&&(IA<=this.Ti))||((inx>=Apv)&&(inx<=Apw)
);if(AdE)this.Uv=this.GO;else this.Uv=(B=Aa.GetExtent())[3]-B[1];var A2r=pos[1];
var A2s=pos[1]+this.Uv;if(AdE&&!((A2r<BI)&&(A2s>0))){this.Ci=Aa;this.G5=IA;this.
AcH=[BgB,this.Uv];(B=this.Hl)?B[1].call(B[0],this):null;}if(((IA===this.Gs)&&this.
NN)&&!!AlF){var Rx=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rx))>A.aaH(A.lb(AlF.GetExtent(),Rx)))AlF=Aa;}else if(IA===this.Gs)AlF=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uv];}this.Th=0;this.Ti=-1;this.Ci=null;this.G5=-
1;this.Bb(AlF);this.AtS=false;A.pe(this.El,this);},QH:function(Ag,Gz,aFilter){return null;
},AqK:function(Ag,aFilter){return null;},TN:function(Ag,aFilter){return null;},ACM:
function(Ag,aFilter){return null;},Db:function(aFilter){return BD;},NO:function(
KB,FP,Ly,Lw,Lx){throw new Error(W3);},AhA:function(Ag,J6){throw new Error(Z4);},
ZB:function(Ag){throw new Error(Z5);},JY:function(Ag,Qe){throw new Error(US);},HN:
function(Ag){throw new Error(W4);},AL7:function(Ag,J6){throw new Error(O3);},J:function(
Ag,Qe){throw new Error(Z6);},Jn:function(G$,A0E){return G$*this.GO;},Al6:function(
Fh,A0E){return(Fh/this.GO)|0;},AAZ:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jp=this.Jp-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiH){if(!
!this.HA)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azn:function(
){var B;var Aa=this.HA;var Adn=this.Li;var AdH=++this.Jp;if(this.NN){if(AdH<0)AdH=
this.AY-(-AdH%this.AY);if(AdH>0)AdH=AdH%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adn))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.AiH++;
}this.Uv=this.GO;this.G5=AdH;this.AcH=[(B=this.M)[2]-B[0],this.Uv];this.Ci=Aa;(B=
this.Hl)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B8)this.B8.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdH===this.Gs
)this.Bb(Aa);return Aa;},AdD:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hs=this.Hs+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiH){if(!!this.HA
)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azm:function(){var
B;var Aa=this.HA;var Adn=this.Li;var MZ=--this.Hs;if(this.NN){if(MZ<0)MZ=this.AY-(-
MZ%this.AY);if(MZ>0)MZ=MZ%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adn)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.HA===
Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Ci.isPrototypeOf(B=
A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.AiH++;}this.Uv=this.GO;
this.G5=MZ;this.AcH=[(B=this.M)[2]-B[0],this.Uv];this.Ci=Aa;(B=this.Hl)?B[1].call(
B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B7)this.B7.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MZ===this.Gs)this.Bb(Aa);return Aa;
},ApI:function(G){var B;this.BX.Q=null;this.BX.Qt=null;this.BX=null;(B=this.Nx)?
B[1].call(B[0],this):null;},BA6:function(G){this.Gb(this.WK.DG[1]);},BA7:function(
G){var B;if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qt=null;this.BX=
null;}if(!this.NN){var AE=this.AqR(0,this.AY-1);var Agg=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OQ);if(AE[0]>Agg[0])AE=[].concat(Agg[0],AE.slice(1,4));if(AE[1]>Agg[
1])AE=A.abP(AE,Agg[1]);var Fw=AE[1]-this.M[1];var A2I=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2I>0)A2I=0;this.WK.DG=[0,this.Br];this.WK.Go=[0,(this.Br+A2I)-Fw];this.
WK.F_=[0,this.Br-Fw];}else{var Fw=32000-(32000%this.GO);this.WK.DG=[0,this.Br];this.
WK.Go=[0,this.Br-Fw];this.WK.F_=[0,this.Br+Fw];}},AS3:function(E){var B;if(this.
NN===E)return;this.NN=E;while(!!this.AdD());this.Am();this.Bj([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},Aw3:function(E){if(E===this.WK)return;if(!!E&&!!E.At5){A.ab5(
"%s%*%s",O4,E,Rl);throw new Error(W5);}if(!!this.WK){this.WK.AKF=null;this.WK.At5=
null;}this.WK=E;if(!!E){E.AKF=[this,this.BA7];E.At5=[this,this.BA6];}},Gb:function(
E){var B;if(this.NN&&(this.AY>0)){var HC=this.Jn(this.AY,3);if(E<0)E=HC-(-E%HC);
if(E>0)E=E%HC;if(E>0)E=E-HC;}if(E===this.Br)return;this.Br=E;this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(E){if(E<0)E=-1;if(E===this.Gs)return;
this.Gs=E;this.Am();},A_b:function(E){var B;if(E<0)E=0;if(E===this.OQ)return;this.
OQ=E;if(!this.NN){this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},Ae6:function(
E){var B;if(E<1)E=1;if(E===this.GO)return;this.GO=E;while(!!this.AdD());this.Am(
);this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jy:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NN){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OQ+this.Br)+this.Jn(E,3));AE=A.abP(AE
,(this.OQ+this.Br)+this.Jn(this.AY,3));}else{AE=A.abP(AE,(this.OQ+this.Br)+this.
Jn(E,3));AE=[].concat(AE.slice(0,3),(this.OQ+this.Br)+this.Jn(this.AY,3));}}else
while(!!this.AdD());this.AY=E;this.Am();this.Bj(AE);},N0:function(E){var B;if(E===
this.Li)return;this.Li=E;while(!!this.AdD());this.HA=null;this.Ol=0;this.Am();this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bi_:function(G$){if(this.AtS)return null;
if((G$<0)||(G$>=this.AY))return null;if(!this.NN){if((G$<this.Hs)||(G$>this.Jp))
return null;var X=this.B7;while(G$>this.Hs){X=X.Ah;G$=G$-1;}return X;}else{var MZ=
this.Hs;if(MZ<0)MZ=this.AY-(-MZ%this.AY);if(MZ>0)MZ=MZ%this.AY;var X=this.B7;while(
!!X){if((MZ%this.AY)===G$)return X;X=X.Ah;MZ=MZ+1;}return null;}},ABG:function(AcW
,E8){var B;if(this.NN){(E8)?E8[1].call(E8[0],this):null;return;}var AJ9=this.Br;
var Bda=((((B=this.M)[3]-B[1])-this.Br)-this.OQ)-this.Jn(this.AY,3);var Bq=0;if(
AJ9>0)Bq=-AJ9;else if(Bda>0)Bq=Bda;if((Bq>0)&&(Bq>-AJ9))Bq=-AJ9;if(!Bq){(E8)?E8[
1].call(E8[0],this):null;return;}if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qt=null;this.Nx=null;}this.BX=AcW;if(!this.BX){this.Gb(this.Br+Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Ans,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br+Bq;this.BX.Qt=[this,this.
ApI];this.BX.Ae9(false);this.BX.Ar(true);this.Nx=E8;}},HH:function(G$,Ac0,AcW,E8
){var B;if((G$<0)||(G$>=this.AY))return;var Az=this.AqR(G$,G$);var Bd=this.M;var
LM=A.lb(Az,Bd);if((!Ac0&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az))
){(E8)?E8[1].call(E8[0],this):null;return;}var Bq=0;if(Az[3]>Bd[3])Bq=Az[3]-Bd[3
];if(Bq>(Az[1]-Bd[1]))Bq=Az[1]-Bd[1];if(!!this.BX){this.BX.Ar(false);this.BX.Q=null;
this.BX.Qt=null;this.Nx=null;}this.BX=AcW;if(!this.BX){this.Gb(this.Br-Bq);(E8)?
E8[1].call(E8[0],this):null;}else{this.BX.Ar(false);this.BX.HM(1);this.BX.Q=[this
,this.Ans,this.Gb];this.BX.Cx=this.Br;this.BX.B2=this.Br-Bq;this.BX.Qt=[this,this.
ApI];this.BX.Ae9(false);this.BX.Ar(true);this.Nx=E8;}},Bi2:function(){return BD;
},AOO:function(){if((this.OQ<=0)||this.NN)return BD;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Br);AE=[].concat(AE.slice(0,3),AE[1]+this.OQ);return AE;},A6G:function(Fh
){if(((this.AY<=0)||(Fh[0]<this.M[0]))||(Fh[0]>=this.M[2]))return-1;Fh=A.abe(Fh,
this.M.slice(0,2));if(!this.NN){var Aa=(Fh[1]-this.Br)-this.OQ;if(Aa>0)Aa=this.Al6(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=Fh[1]-this.Br;if(Aa>0)
Aa=this.Al6(Aa,0);if(Aa<0)Aa=this.Al6(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqR:function(J4,L5){if(J4<0)J4=0;if(L5>=this.AY)L5=
this.AY-1;if(J4>L5)return BD;var AE=this.M;var Bq=this.Br;if(this.NN){var HC=this.
Jn(this.AY,3);if(Bq<0)Bq=HC-(-Bq%HC);if(Bq>0)Bq=Bq%HC;if(Bq>0)Bq=Bq-HC;}else Bq=
Bq+this.OQ;AE=[].concat(AE.slice(0,3),(AE[1]+Bq)+this.Jn(L5+1,0));AE=A.abP(AE,(AE[
1]+Bq)+this.Jn(J4,0));return AE;},AbC:function(J4,L5){var B;if(J4<0)J4=0;if(J4>L5
)return;if(this.Th>this.Ti){this.Th=J4;this.Ti=L5;}else{if(J4<this.Th)this.Th=J4;
if(L5>this.Ti)this.Ti=L5;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NN){
AE=A.abP(AE,(this.OQ+this.Br)+this.Jn(J4,0));AE=[].concat(AE.slice(0,3),(this.OQ+
this.Br)+this.Jn(L5+1,0));}else if((this.Jn(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Bq=this.Br;var HC=this.Jn(this.AY,3);if(Bq<0)Bq=HC-(-Bq%HC);if(
Bq>0)Bq=Bq%HC;if(Bq>0)Bq=Bq-HC;AE=A.abP(AE,Bq+this.Jn(J4,0));AE=[].concat(AE.slice(
0,3),Bq+this.Jn(L5+1,0));}this.Am();this.Bj(AE);},Ans:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.CM;this.H(W6);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HA
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WK)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hl)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dz={HA:null
,BX:null,Ci:null,Nx:null,Hl:null,Ti:-1,Th:0,Jp:-1,Hs:0,AiH:8,Ol:0,SL:0,AcH:A.wf,
G5:-1,Br:0,Gs:-1,Wa:24,AY:0,Li:null,AtS:false,AUX:function(Iu,Oc,Xe,Tb,Tc,Ah8,O8
,Rr,Ly,Lw,Lx){throw new Error(UT);},AqD:function(Iu,Ah8,O8,Rr,Ly,Lw,Lx){throw new
Error(Z7);},AkJ:function(Iu,Oc,Xe,Tb,Tc,O8,Rr,Ly,Lw,Lx){throw new Error(Z8);},DispatchEvent:
function(CN){var B;var result=null;if(((this.Gs>=0)&&(this.Gs<this.AY))&&!this.AV
){this.G5=this.Gs;this.Ci=(C.Ci.isPrototypeOf(B=A._NewObject(this.Li,0))?B:null);
if(!!this.B8)this.B8.Ah=this.Ci;else this.B7=this.Ci;this.Ci.AJ=this.B8;this.B8=
this.Ci;this.Ci.Ab=this;this.AcH=[this.SL,(B=this.M)[3]-B[1]];(B=this.Hl)?B[1].call(
B[0],this):null;var B0=(C.P.isPrototypeOf(B=this.Ci)?B:null);if(!!B0)result=B0.DispatchEvent(
CN);else result=this.Ci.G3(CN);if(!!this.Ci.AJ)this.Ci.AJ.Ah=null;else this.B7=null;
this.B8=this.Ci.AJ;this.Ci.AJ=null;this.Ci.Ab=null;this.Ci=null;}if(!result)result=
C.P.DispatchEvent.call(this,CN);return result;},Ai:function(Ae){var B;if(!this.Li
)return;this.AtS=true;var FT=this.Al6(0-this.Br,1);var GZ=this.Al6((((B=this.M)[
2]-B[0])-this.Br)-1,2);var CB=GZ-FT;if(CB<1)CB=1;var Aij=(CB/2)|0;var Aik=(CB/3)|
0;if(!Aij)Aij=1;if(!Aik)Aik=1;if(FT<this.Hs){FT=FT-Aij;GZ=GZ+Aik;}else if(GZ>this.
Jp){FT=FT-Aik;GZ=GZ+Aij;}else{FT=this.Hs;GZ=this.Jp;}if(FT>=this.AY){FT=0;GZ=-1;
}else if(GZ<0){FT=0;GZ=-1;}if(GZ>=this.AY)GZ=this.AY-1;if(FT<0)FT=0;var AiX=this.
Hs;var AiY=this.Jp;var Apv=0;var Apw=-1;if(FT>AiX)AiX=FT;if(GZ<AiY)AiY=GZ;if(AiX<=
AiY){while((this.Jp<GZ)&&(this.Hs<AiX)){this.AdD();this.Azn();}while((this.Hs>FT
)&&(this.Jp>AiY)){this.AAZ();this.Azm();}}else{this.Jp=(this.Jp-this.Hs)+FT;this.
Hs=FT;Apv=this.Hs;Apw=this.Jp;}while(this.Hs<FT)this.AdD();while(this.Jp>GZ)this.
AAZ();while(this.Hs>FT)this.Azm();while(this.Jp<GZ)this.Azn();var Aa=this.B7;var
inx=this.Hs;var pos=[this.Br+this.Jn(inx,0),0];var BY=(B=this.M)[2]-B[0];var AlF=
null;var Bgo=(B=this.M)[3]-B[1];while(!!Aa){var IA=inx;var AdE=((IA>=this.Th)&&(
IA<=this.Ti))||((inx>=Apv)&&(inx<=Apw));var Apb=Aa.GetExtent();var Bq=A.abe(pos,
Apb.slice(0,2));if(AdE)this.SL=this.Wa;else this.SL=Apb[2]-Apb[0];var A2p=pos[0];
var A2q=pos[0]+this.SL;if(!A.aaX(Bq,Cc))Aa.Anh(Bq,true);if((AdE&&(A2p<BY))&&(A2q>
0)){this.Ci=Aa;this.G5=IA;this.AcH=[this.SL,Bgo];(B=this.Hl)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SL,pos[1]];}inx=this.Hs;Aa=this.B7;pos=[
this.Br+this.Jn(inx,0),0];while(!!Aa){var IA=inx;var AdE=((IA>=this.Th)&&(IA<=this.
Ti))||((inx>=Apv)&&(inx<=Apw));if(AdE)this.SL=this.Wa;else this.SL=(B=Aa.GetExtent(
))[2]-B[0];var A2p=pos[0];var A2q=pos[0]+this.SL;if(AdE&&!((A2p<BY)&&(A2q>0))){this.
Ci=Aa;this.G5=IA;this.AcH=[this.SL,Bgo];(B=this.Hl)?B[1].call(B[0],this):null;}if(
IA===this.Gs)AlF=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SL,pos[1]];}this.Th=0;this.
Ti=-1;this.Ci=null;this.G5=-1;this.Bb(AlF);this.AtS=false;},QH:function(Ag,Gz,aFilter
){return null;},AqK:function(Ag,aFilter){return null;},TN:function(Ag,aFilter){return null;
},ACM:function(Ag,aFilter){return null;},Db:function(aFilter){return BD;},NO:function(
KB,FP,Ly,Lw,Lx){throw new Error(W7);},AhA:function(Ag,J6){throw new Error(W8);},
ZB:function(Ag){throw new Error(S9);},JY:function(Ag,Qe){throw new Error(UU);},HN:
function(Ag){throw new Error(UV);},AL7:function(Ag,J6){throw new Error(AcK);},J:
function(Ag,Qe){throw new Error(S_);},Jn:function(G$,A0E){return G$*this.Wa;},Al6:
function(Fh,A0E){return(Fh/this.Wa)|0;},AAZ:function(){var Aa=this.B8;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jp=this.Jp-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B7=null;this.B8=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiH){if(!
!this.HA)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azn:function(
){var B;var Aa=this.HA;var Adn=this.Li;var AdH=++this.Jp;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adn))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{
Aa=(C.Ci.isPrototypeOf(B=A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.
AiH++;}this.SL=this.Wa;this.G5=AdH;this.AcH=[this.SL,(B=this.M)[3]-B[1]];this.Ci=
Aa;(B=this.Hl)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B8)this.
B8.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B8;this.B8=Aa;if(!this.B7)this.B7=Aa;if(AdH===this.
Gs)this.Bb(Aa);return Aa;},AdD:function(){var Aa=this.B7;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hs=this.Hs+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B8=null;
this.B7=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eu=null;if(this.Ol<this.AiH){if(!!this.HA
)this.HA.AJ=Aa;Aa.Ah=this.HA;this.HA=Aa;this.Ol++;}return Aa;},Azm:function(){var
B;var Aa=this.HA;var Adn=this.Li;var MZ=--this.Hs;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adn))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.HA===Aa)this.HA=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Ci.
isPrototypeOf(B=A._NewObject(Adn,0))?B:null);Aa.AZ(0x1D);if(!!this.Ol)this.AiH++;
}this.SL=this.Wa;this.G5=MZ;this.AcH=[this.SL,(B=this.M)[3]-B[1]];this.Ci=Aa;(B=
this.Hl)?B[1].call(B[0],this):null;this.Ci=null;this.G5=-1;if(!!this.B7)this.B7.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B7;this.B7=Aa;if(!this.B8)this.B8=Aa;if(MZ===this.Gs
)this.Bb(Aa);return Aa;},ApI:function(G){var B;this.BX.Q=null;this.BX.Qt=null;this.
BX=null;(B=this.Nx)?B[1].call(B[0],this):null;},Gb:function(E){var B;if(E===this.
Br)return;this.Br=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GT:function(
E){if(E<0)E=-1;if(E===this.Gs)return;this.Gs=E;this.Am();},AFg:function(E){var B;
if(E<1)E=1;if(E===this.Wa)return;this.Wa=E;while(!!this.AdD());this.Am();this.Bj([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jy:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Br+this.Jn(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Br+this.Jn(E,3));}else{AE=
A.abN(AE,this.Br+this.Jn(this.AY,3));AE=[].concat(this.Br+this.Jn(E,3),AE.slice(
1,4));}this.AY=E;this.Am();this.Bj(AE);},N0:function(E){var B;if(E===this.Li)return;
this.Li=E;while(!!this.AdD());this.HA=null;this.Ol=0;this.Am();this.Bj([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bo9:function(BxV,BxW){if(!this.BX)return;if(BxV)this.Gb(
this.BX.B2);var A4k=this.Nx;this.BX.Ar(false);this.BX.Q=null;this.BX.Qt=null;this.
Nx=null;this.BX=null;if(BxW)(A4k)?A4k[1].call(A4k[0],this):null;},BjB:function(){
return!!this.BX;},HH:function(G$,Ac0,AcW,E8){var B;if((G$<0)||(G$>=this.AY))return;
var Az=this.AqR(G$,G$);var Bd=this.M;var LM=A.lb(Az,Bd);if((!Ac0&&!((LM[0]>=LM[2
])||(LM[1]>=LM[3])))||(Ac0&&A.aaY(LM,Az))){(E8)?E8[1].call(E8[0],this):null;return;
}var Bq=0;if(Az[2]>Bd[2])Bq=Az[2]-Bd[2];if(Bq>(Az[0]-Bd[0]))Bq=Az[0]-Bd[0];if(!!
this.BX){this.BX.Ar(false);this.BX.Q=null;this.BX.Qt=null;this.Nx=null;}this.BX=
AcW;if(!this.BX){this.Gb(this.Br-Bq);(E8)?E8[1].call(E8[0],this):null;}else{this.
BX.Ar(false);this.BX.HM(1);this.BX.Q=[this,this.Ans,this.Gb];this.BX.Cx=this.Br;
this.BX.B2=this.Br-Bq;this.BX.Qt=[this,this.ApI];this.BX.Ae9(false);this.BX.Ar(true
);this.Nx=E8;}},AqR:function(J4,L5){if(J4<0)J4=0;if(L5>=this.AY)L5=this.AY-1;if(
J4>L5)return BD;var AE=this.M;var Bq=this.Br;AE=A.abN(AE,(AE[0]+Bq)+this.Jn(L5+1
,0));AE=[].concat((AE[0]+Bq)+this.Jn(J4,0),AE.slice(1,4));return AE;},AbC:function(
J4,L5){var B;if(J4<0)J4=0;if(J4>L5)return;if(this.Th>this.Ti){this.Th=J4;this.Ti=
L5;}else{if(J4<this.Th)this.Th=J4;if(L5>this.Ti)this.Ti=L5;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Br+this.Jn(J4,0),AE.slice(1,4));AE=A.abN(
AE,this.Br+this.Jn(L5+1,0));this.Am();this.Bj(AE);},Ans:function(){return this.Br;
},_Init:function(aArg){C.P._Init.call(this,aArg);this.__proto__=C.Dz;this.H(W6);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.P._Mark.call(this,D);if((B=this.HA
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ci)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nx)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ASh:null,AEG:null,Av6:null,D1:null,
Ln:null,BL:null,AK4:0,Bp:0,IJ:0,Bs:0,N6:0,Jt:0,DG:A.wf,NR:A.wf,H0:A.wf,Axr:8,Afe:
0,A7x:1,Down:false,YC:false,NF:false,A1S:false,AAh:0,Kn:function(CY,aClip,aOffset
,Cj,aBlend){},G3:function(CN){var B;var BN=(C.Aec.isPrototypeOf(CN)?CN:null);var
D4=(C.AqF.isPrototypeOf(CN)?CN:null);var AKh=this.YC;var AaG;var Vd;var ABi;var MX;
var AzF;if(!BN&&!D4)return null;AaG=(!!BN&&BN.Down)&&!BN.Jt;Vd=(!!BN&&BN.Down)&&(
BN.Jt>0);ABi=(!!BN&&BN.Down)&&(BN.Jt>this.AAh);MX=!!BN&&!BN.Down;AzF=!!D4;if(AaG
)this.AAh=((B=(BN.NF?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Afe&0x20)===0x20
)&&(this.Bp>0))&&(this.Bp<33554432)){var Iy=(C.AuT.isPrototypeOf(CN)?CN:null);if(((
!!Iy&&Iy.Down)&&(Iy.AxJ!==this))&&A.wa(this.GetExtent(),this.Ab.A7t(Iy.LT))){this.
AK4=0x20;this.Bp=this.Bp|67108864;return null;}}if(AaG){var ApC=0;var Adi;this.Bp=
this.Bp|(1<<BN.IJ);for(Adi=this.Bp&4095;Adi>0;Adi=Adi>>1)if(!!(Adi&1))ApC=ApC+1;
if(ApC===1)this.Bp=(this.Bp|16777216)|(4096<<BN.IJ);}if(MX&&(this.Bp<16777216)){
var IE=this.Im();var JE=null;if(!!IE){var A4c=(!!this.AJ?this.AJ:this.Ab);var A1G=(
!!IE.JF?IE.JF.C0:null);JE=IE.Yd(A.abh(Z9,BN.LT),BN.IJ,BN.N6,A1G,A4c,0x0);}if(!!JE
){var O;for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Ci.G3(A._NewObject(C.Aec,0).InitializeDown(
O,BN.H0,BN.N6,Cc,true,BN.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Ci.G3(A.
_NewObject(C.Aec,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N6,Cc,false,BN.LT,BN.LT));}}
if(MX)this.Bp=(this.Bp&~(1<<BN.IJ))|33554432;if(ABi&&(this.Bp<16777216))this.Bp=
this.Bp|67108864;if(MX&&BN.NF)this.Bp=this.Bp|67108864;if(MX&&!(this.Bp&4095))this.
AK4=0x0;if(MX&&!(this.Bp&16777215))this.Bp=0;if(Vd&&(this.Bp>=67108864)){var IE=
this.Im();if(!!IE)IE.AUl(null,null,this,this.AK4);}if((Vd&&!!(this.Bp&16777216))&&
!!(this.Bp&33554432)){Vd=false;MX=true;}if(!!BN&&!(this.Bp&(4096<<BN.IJ)))return this;
if(!!D4&&!(this.Bp&(4096<<D4.IJ)))return this;if(MX&&!(this.Bp&16777216))return this;
if(((AaG||AzF)||Vd)&&((this.Bp<16777216)||(this.Bp>=33554432)))return this;if(MX
)this.Bp=this.Bp&3758100479;if(MX&&!(this.Bp&16777215))this.Bp=0;if(!!BN){this.Down=
AaG||Vd;this.YC=this.ARb(BN.H0);this.NR=BN.NR;this.H0=BN.H0;this.DG=Cc;this.Jt=BN.
Jt;this.N6=BN.N6;this.NF=BN.NF;this.IJ=BN.IJ;this.Bs=BN.Bs;if(BN.Down&&!BN.Jt)AKh=
false;}if(!!D4){this.Down=true;this.YC=this.ARb(D4.H0);this.NR=D4.NR;this.H0=D4.
H0;this.DG=D4.DG;this.Jt=D4.Jt;this.N6=D4.N6;this.IJ=D4.IJ;this.NF=false;this.Bs=
D4.Bs;}var A1M=this.Down;if(!!D4)(B=this.ASh)?B[1].call(B[0],this):null;if((!!BN&&
this.Down)&&!this.Jt)(B=this.BL)?B[1].call(B[0],this):null;if((!!BN&&this.Down)&&(
this.Jt>0))(B=this.D1)?B[1].call(B[0],this):null;if((this.Down&&this.YC)&&!AKh){
this.A1S=true;(B=this.Av6)?B[1].call(B[0],this):null;}if(this.A1S&&(((A1M&&!this.
YC)&&AKh)||((!A1M&&this.YC)&&AKh))){this.A1S=false;(B=this.AEG)?B[1].call(B[0],this
):null;}if(!!BN&&!A1M)(B=this.Ln)?B[1].call(B[0],this):null;if(!!this.Afe){var AdC=
0x0;if(((((this.Afe&0x10)===0x10)&&!!BN)&&BN.Down)&&(BN.Jt>=1000))AdC=0x10;if((((
this.Afe&0x1)===0x1)&&!!D4)&&((D4.LT[1]-D4.AgZ[1])<=-this.Axr))AdC=0x1;if((((this.
Afe&0x2)===0x2)&&!!D4)&&((D4.LT[1]-D4.AgZ[1])>=this.Axr))AdC=0x2;if((((this.Afe&
0x4)===0x4)&&!!D4)&&((D4.LT[0]-D4.AgZ[0])<=-this.Axr))AdC=0x4;if((((this.Afe&0x8
)===0x8)&&!!D4)&&((D4.LT[0]-D4.AgZ[0])>=this.Axr))AdC=0x8;if(!!AdC){var IE=this.
Im();if(!!IE){this.AK4=AdC;IE.AUl(null,this,this,AdC);}}}return this;},Yd:function(
Da,BF,Od,Aag,Ac3,Ac2){var B;if(!!Aag&&(Aag!==this))return null;if((Od<1)||(Od>this.
A7x))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216)&&!(this.
Bp&(4096<<BF)))return null;if(!!(Ac2&this.Afe))return null;if(this.Bjd()){var Az=
A.lb(Da,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qh=A.aaI(Da);
var Fw=Cc;if(Qh[0]<Az[0])Fw=[Az[0]-Qh[0],Fw[1]];if(Qh[0]>=Az[2])Fw=[(Az[2]-Qh[0]
)-1,Fw[1]];if(Qh[1]<Az[1])Fw=[Fw[0],Az[1]-Qh[1]];if(Qh[1]>=Az[3])Fw=[Fw[0],(Az[3
]-Qh[1])-1];return A._NewObject(C.AuU,0).Initialize(this,Fw);}}else{var HB=A.abi(
9,A.wf,null);var O;HB.Set(0,A.aaI(Da));HB.Set(1,HB.Get(0));HB.Set(2,HB.Get(0));HB.
Set(3,HB.Get(0));HB.Set(4,HB.Get(0));HB.Set(1,[Da[0],HB.Get(1)[1]]);HB.Set(2,[HB.
Get(2)[0],Da[1]]);HB.Set(3,[Da[2],HB.Get(3)[1]]);HB.Set(4,[HB.Get(4)[0],Da[3]]);
HB.Set(5,Da.slice(0,2));HB.Set(6,[Da[2],Da[1]]);HB.Set(7,[Da[0],Da[3]]);HB.Set(8
,Da.slice(2,4));for(O=0;O<9;O=O+1)if(this.ARb(HB.Get(O)))return A._NewObject(C.AuU
,0).Initialize(this,A.abe(HB.Get(O),HB.Get(0)));}return null;},Bnm:function(E){if(
E<1)E=1;this.Axr=E;},AFp:function(E){if(E<1)E=1;this.A7x=E;},Ar:function(E){if(E
)this.Cr(0x100000,0x0);else this.Cr(0x0,0x100000);},_Init:function(aArg){C.Zy._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
Zy._Mark.call(this,D);if((B=this.ASh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AEG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av6)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.D1)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H9={timer:null,AKF:null,At5:null,AF2:null,Zi:null,SI:null,Bp:0,AJg:0,Adl:5000
,ApW:0,AKg:A.wf,Ao_:0,AfL:0,EY:0,Amg:0,Auh:0,Ao9:0,AfK:0,EX:0,Amf:0,Amd:0,NR:A.wf
,A5Q:A.wf,F_:A.wf,Go:A.wf,DG:A.wf,WN:A.wf,A6t:0.5,A_7:true,AGI:true,ZJ:false,XD:
false,XE:false,AoT:false,AAh:0,Kn:function(CY,aClip,aOffset,Cj,aBlend){},G3:function(
CN){var B;var BN=(C.Aec.isPrototypeOf(CN)?CN:null);var D4=(C.AqF.isPrototypeOf(CN
)?CN:null);var Iy=(C.AuT.isPrototypeOf(CN)?CN:null);var AaG;var Vd;var ABi;var MX;
var AzF;AaG=(!!BN&&BN.Down)&&!BN.Jt;Vd=(!!BN&&BN.Down)&&(BN.Jt>0);ABi=(!!BN&&BN.
Down)&&(BN.Jt>this.AAh);MX=!!BN&&!BN.Down;AzF=!!D4;if(AaG)this.AAh=((B=(BN.NF?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(AaG){var ApC=0;var Adi;this.Bp=this.Bp|(1<<BN.
IJ);for(Adi=this.Bp&4095;Adi>0;Adi=Adi>>1)if(!!(Adi&1))ApC=ApC+1;if(ApC===1)this.
Bp=(this.Bp|16777216)|(4096<<BN.IJ);}if(MX&&(this.Bp<16777216)){var IE=this.Im();
var JE=null;if(!!IE){var A4c=(!!this.AJ?this.AJ:this.Ab);var A1G=(!!IE.JF?IE.JF.
C0:null);JE=IE.Yd(A.abh(Z9,BN.LT),BN.IJ,BN.N6,A1G,A4c,0x0);}if(!!JE){var O;for(O=
0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Ci.G3(A._NewObject(C.Aec,0).InitializeDown(O
,BN.H0,BN.N6,Cc,true,BN.LT));for(O=0;O<10;O++)if(!!(this.Bp&(1<<O)))JE.Ci.G3(A._NewObject(
C.Aec,0).InitializeUp(O,BN.H0,BN.H0,0,BN.N6,Cc,false,BN.LT,BN.LT));}}if(MX)this.
Bp=(this.Bp&~(1<<BN.IJ))|33554432;if(ABi&&(this.Bp<16777216))this.Bp=this.Bp|67108864;
if(MX&&BN.NF)this.Bp=this.Bp|67108864;if(MX&&!(this.Bp&16777215))this.Bp=0;if(Vd&&(
this.Bp>=67108864)){var IE=this.Im();if(!!IE)IE.AUl(null,null,this,0x0);}if((Vd&&
!!(this.Bp&16777216))&&!!(this.Bp&33554432)){Vd=false;MX=true;}if(!!BN&&!(this.Bp&(
4096<<BN.IJ)))return this;if(!!D4&&!(this.Bp&(4096<<D4.IJ)))return this;if(MX&&!(
this.Bp&16777216))return this;if(((AaG||AzF)||Vd)&&((this.Bp<16777216)||(this.Bp>=
33554432)))return this;if(MX)this.Bp=this.Bp&3758100479;if(MX&&!(this.Bp&16777215
))this.Bp=0;if(!!Iy&&(Iy.AxJ===this))return null;if((!!Iy&&Iy.Down)&&(this.AoT||
!this.ZJ))return null;if((!!Iy&&Iy.Down)&&!A.wa(this.M,this.Ab.A7t(Iy.LT)))return null;
if((!!Iy&&!Iy.Down)&&(!this.AoT||(this.AJg!==Iy.IJ)))return null;if((!BN&&!D4)&&
!Iy)return null;if(!!BN){this.AoT=AaG||Vd;this.AJg=BN.IJ;this.NR=BN.NR;}if(!!D4)
this.AJg=D4.IJ;if(!!Iy){this.AoT=Iy.Down;this.AJg=Iy.IJ;}if(!!Iy&&Iy.Down){this.
A4d();this.EX=(((Iy.Bs-this.Amd)*0.001)*this.AfK)+this.EX;this.EY=(((Iy.Bs-this.
Auh)*0.001)*this.AfL)+this.EY;if(this.XD)this.EX=0;if(this.XE)this.EY=0;this.AfK=
0;this.AfL=0;this.XD=false;this.XE=false;this.AKg=this.DG;this.ApW=Iy.Bs;return this;
}if(AaG){this.A4d();this.EX=(((BN.Bs-this.Amd)*0.001)*this.AfK)+this.EX;this.EY=(((
BN.Bs-this.Auh)*0.001)*this.AfL)+this.EY;if(this.XD||!this.ZJ)this.EX=0;if(this.
XE||!this.ZJ)this.EY=0;this.AfK=0;this.AfL=0;this.XD=false;this.XE=false;if(!this.
ZJ){this.ZJ=true;(B=this.SI)?B[1].call(B[0],this):null;(B=this.AKF)?B[1].call(B[
0],this):null;}this.AKg=this.DG;this.ApW=BN.Bs;}if(!!D4){var Hb=A.abe(D4.H0,D4.NR
);var CD=this.DG;if(this.AGI)CD=[this.AKg[0]+Hb[0],CD[1]];CD=[CD[0],this.AKg[1]+
Hb[1]];if(this.A_7){if(CD[0]<this.Go[0])CD=[this.Go[0]+(((CD[0]-this.Go[0])/2)|0
),CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0]+(((CD[0]-this.F_[0])/2)|0),CD[1
]];if(CD[1]<this.Go[1])CD=[CD[0],this.Go[1]+(((CD[1]-this.Go[1])/2)|0)];else if(
CD[1]>this.F_[1])CD=[CD[0],this.F_[1]+(((CD[1]-this.F_[1])/2)|0)];}else{if(CD[0]<
this.Go[0])CD=[this.Go[0],CD[1]];else if(CD[0]>this.F_[0])CD=[this.F_[0],CD[1]];
if(CD[1]<this.Go[1])CD=[CD[0],this.Go[1]];else if(CD[1]>this.F_[1])CD=[CD[0],this.
F_[1]];}if(!A.aaX(CD,this.DG)){this.A5Q=A.abe(CD,this.DG);this.DG=CD;(B=this.At5
)?B[1].call(B[0],this):null;(B=this.AF2)?B[1].call(B[0],this):null;}}if((!!Iy&&!
Iy.Down)&&((Iy.Bs-this.ApW)>=200)){this.EX=0;this.EY=0;}if(Vd&&((BN.Bs-this.ApW)>=
200)){this.EX=0;this.EY=0;}if(!!D4&&(D4.Bs>this.ApW)){var Hb=D4.DG;var BdD=1000/(
D4.Bs-this.ApW);var AiK=0;var AiL;if(this.AGI)AiK=Hb[0]*BdD;AiL=Hb[1]*BdD;if((AiK
*this.EX)<0)this.EX=0;if((AiL*this.EY)<0)this.EY=0;this.EX=(this.EX+AiK)*0.5;this.
EY=(this.EY+AiL)*0.5;this.ApW=D4.Bs;}if(!MX&&!Iy)return this;if(!!BN&&BN.NF){this.
EX=0;this.EY=0;}if((this.DG[0]<=this.Go[0])||(this.DG[0]>=this.F_[0]))this.EX=0;
else if(!this.EX){var EQ=this.DG[0];var Fj=this.Go[0];var EI=this.F_[0];if(EQ<Fj
)EI=this.Go[0];else if(EQ>EI)Fj=this.F_[0];else if(this.WN[0]<=1){Fj=EQ;EI=EQ;}else{
var Adp=(EI-EQ)%this.WN[0];EI=(EQ-this.WN[0])+Adp;Fj=EQ+Adp;if(EI<this.Go[0])EI=
this.Go[0];if(Fj>this.F_[0])Fj=this.F_[0];}if((Fj-EQ)<=(EQ-EI))EQ=Fj;else EQ=EI;
if(EQ!==this.DG[0]){var Jm=EQ-this.DG[0];if(Jm>0)this.EX=Math.sqrt((Jm*2)*this.Adl
)+20;if(Jm<0)this.EX=-Math.sqrt((-Jm*2)*this.Adl)-20;this.AfK=(400-(this.EX*this.
EX))/(2*Jm);this.Ao9=EQ;}}else{var BB5=this.EX*this.EX;var Jm=BB5/(2*this.Adl);var
EQ=this.DG[0];if(this.EX>0)EQ=EQ+(Jm|0);if(this.EX<0)EQ=EQ-(Jm|0);if(EQ>this.F_[
0])EQ=this.F_[0];else if(EQ<this.Go[0])EQ=this.Go[0];var Bgj=EQ;var Fj=this.Go[0
];var EI=this.F_[0];if(EQ<Fj)EI=this.Go[0];else if(EQ>EI)Fj=this.F_[0];else if(this.
WN[0]<=1){Fj=EQ;EI=EQ;}else{var Adp=(EI-EQ)%this.WN[0];EI=(EQ-this.WN[0])+Adp;Fj=
EQ+Adp;if(EI<this.Go[0])EI=this.Go[0];if(Fj>this.F_[0])Fj=this.F_[0];}if(this.EX>
0){if(EI<=this.DG[0])EQ=Fj;else if((EQ-EI)<(Fj-EQ))EQ=EI;else EQ=Fj;}else if(Fj>=
this.DG[0])EQ=EI;else if((EQ-EI)>(Fj-EQ))EQ=Fj;else EQ=EI;if(EQ!==this.DG[0]){Jm=
EQ-this.DG[0];if(EQ!==Bgj){var Ai6=EQ-Bgj;if(Ai6>0)this.EX=this.EX+Math.sqrt((Ai6
*2)*this.Adl);if(Ai6<0)this.EX=this.EX-Math.sqrt((-Ai6*2)*this.Adl);}if(this.EX>
0)this.EX=this.EX+20;if(this.EX<0)this.EX=this.EX-20;this.AfK=(400-(this.EX*this.
EX))/(2*Jm);this.Ao9=EQ;}else this.EX=0;}if((this.DG[1]<=this.Go[1])||(this.DG[1
]>=this.F_[1]))this.EY=0;else if(!this.EY){var ER=this.DG[1];var Fj=this.Go[1];var
EI=this.F_[1];if(ER<Fj)EI=this.Go[1];else if(ER>EI)Fj=this.F_[1];else if(this.WN[
1]<=1){Fj=ER;EI=ER;}else{var Adp=(EI-ER)%this.WN[1];EI=(ER-this.WN[1])+Adp;Fj=ER+
Adp;if(EI<this.Go[1])EI=this.Go[1];if(Fj>this.F_[1])Fj=this.F_[1];}if((Fj-ER)<=(
ER-EI))ER=Fj;else ER=EI;if(ER!==this.DG[1]){var Jm=ER-this.DG[1];if(Jm>0)this.EY=
Math.sqrt((Jm*2)*this.Adl)+20;if(Jm<0)this.EY=-Math.sqrt((-Jm*2)*this.Adl)-20;this.
AfL=(400-(this.EY*this.EY))/(2*Jm);this.Ao_=ER;}}else{var BB6=this.EY*this.EY;var
Jm=BB6/(2*this.Adl);var ER=this.DG[1];if(this.EY>0)ER=ER+(Jm|0);if(this.EY<0)ER=
ER-(Jm|0);if(ER>this.F_[1])ER=this.F_[1];else if(ER<this.Go[1])ER=this.Go[1];var
Bgk=ER;var Fj=this.Go[1];var EI=this.F_[1];if(ER<Fj)EI=this.Go[1];else if(ER>EI)
Fj=this.F_[1];else if(this.WN[1]<=1){Fj=ER;EI=ER;}else{var Adp=(EI-ER)%this.WN[1
];EI=(ER-this.WN[1])+Adp;Fj=ER+Adp;if(EI<this.Go[1])EI=this.Go[1];if(Fj>this.F_[
1])Fj=this.F_[1];}if(this.EY>0){if(EI<=this.DG[1])ER=Fj;else if((ER-EI)<(Fj-ER))
ER=EI;else ER=Fj;}else if(Fj>=this.DG[1])ER=EI;else if((ER-EI)>(Fj-ER))ER=Fj;else
ER=EI;if(ER!==this.DG[1]){Jm=ER-this.DG[1];if(ER!==Bgk){var Ai6=ER-Bgk;if(Ai6>0)
this.EY=this.EY+Math.sqrt((Ai6*2)*this.Adl);if(Ai6<0)this.EY=this.EY-Math.sqrt((-
Ai6*2)*this.Adl);}if(this.EY>0)this.EY=this.EY+20;if(this.EY<0)this.EY=this.EY-20;
this.AfL=(400-(this.EY*this.EY))/(2*Jm);this.Ao_=ER;}else this.EY=0;}if(!!BN)this.
Amd=BN.Bs;if(!!Iy)this.Amd=Iy.Bs;this.Auh=this.Amd;this.Amf=this.DG[0];this.Amg=
this.DG[1];this.BB7();return this;},Yd:function(Da,BF,Od,Aag,Ac3,Ac2){var B;if(!
!Aag&&(Aag!==this))return null;if(this.Bp>=33554432)return null;if((this.Bp>=16777216
)&&!(this.Bp&(4096<<BF)))return null;if(!this.AGI&&!!(Ac2&0xC))return null;var Az=
A.lb(Da,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qh=A.aaI(Da);var Fw=Cc;
if(Qh[0]<Az[0])Fw=[Az[0]-Qh[0],Fw[1]];if(Qh[0]>=Az[2])Fw=[(Az[2]-Qh[0])-1,Fw[1]];
if(Qh[1]<Az[1])Fw=[Fw[0],Az[1]-Qh[1]];if(Qh[1]>=Az[3])Fw=[Fw[0],(Az[3]-Qh[1])-1];
return A._NewObject(C.AuU,0).Initialize(this,Fw);}return null;},A4d:function(){if(
!!this.timer){A.z9([this,this.Me],this.timer,0);this.timer=null;}},BB7:function(
){this.timer=A._GetAutoObject(A.acl.Aeg);A.zV([this,this.Me],this.timer,0);},Me:
function(G){var B;if(!this.timer)return;var Aum=(this.timer.Bs-this.Amd)*0.001;var
Aun=(this.timer.Bs-this.Auh)*0.001;var BCg=Aum*Aum;var BCh=Aun*Aun;var AiK=(this.
AfK*Aum)+this.EX;var AiL=(this.AfL*Aun)+this.EY;var CD=[((((this.AfK*0.5)*BCg)+(
this.EX*Aum))+this.Amf)|0,((((this.AfL*0.5)*BCh)+(this.EY*Aun))+this.Amg)|0];if(
this.XD&&(Aum>=0.5)){CD=[this.Ao9,CD[1]];this.EX=0;this.AfK=0;this.Amf=CD[0];this.
XD=false;}else if(this.XD){var LJ=1-Math.pow(1-(Aum/0.5),5);CD=[(this.Amf+((this.
Ao9-this.Amf)*LJ))|0,CD[1]];}if(this.XE&&(Aun>=0.5)){CD=[CD[0],this.Ao_];this.EY=
0;this.AfL=0;this.Amg=CD[1];this.XE=false;}else if(this.XE){var LJ=1-Math.pow(1-(
Aun/0.5),5);CD=[CD[0],(this.Amg+((this.Ao_-this.Amg)*LJ))|0];}if(((this.EX>0)&&(
AiK<0))||((this.EX<0)&&(AiK>0))){AiK=0;CD=[this.DG[0],CD[1]];}if(((this.EY>0)&&(
AiL<0))||((this.EY<0)&&(AiL>0))){AiL=0;CD=[CD[0],this.DG[1]];}if(!this.XD&&(CD[0
]<this.Go[0])){this.Amf=CD[0];this.Ao9=this.Go[0];this.Amd=this.timer.Bs;this.XD=
true;}else if(!this.XD&&(CD[0]>this.F_[0])){this.Amf=CD[0];this.Ao9=this.F_[0];this.
Amd=this.timer.Bs;this.XD=true;}if(!this.XE&&(CD[1]<this.Go[1])){this.Amg=CD[1];
this.Ao_=this.Go[1];this.Auh=this.timer.Bs;this.XE=true;}else if(!this.XE&&(CD[1
]>this.F_[1])){this.Amg=CD[1];this.Ao_=this.F_[1];this.Auh=this.timer.Bs;this.XE=
true;}if(((!this.XD&&!!this.EX)&&(AiK>-20))&&(AiK<20)){CD=[this.Ao9,CD[1]];this.
EX=0;this.AfK=0;this.Amf=CD[0];}if(((!this.XE&&!!this.EY)&&(AiL>-20))&&(AiL<20)){
CD=[CD[0],this.Ao_];this.EY=0;this.AfL=0;this.Amg=CD[1];}if(!A.aaX(CD,this.DG)){
this.A5Q=A.abe(CD,this.DG);this.DG=CD;(B=this.At5)?B[1].call(B[0],this):null;(B=
this.AF2)?B[1].call(B[0],this):null;}if(((!this.EX&&!this.EY)&&!this.XD)&&!this.
XE){this.A4d();this.ZJ=false;(B=this.Zi)?B[1].call(B[0],this):null;}},ATx:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WN=E;},AS5:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6t)return;this.A6t=E;if(E<(1e-007))E=1e-007;this.Adl=
E*10000;},_Init:function(aArg){C.Et._Init.call(this,aArg);this.__proto__=C.H9;this.
U=0x10011B;},_Mark:function(D){var B;C.Et._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.At5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF2
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Zi)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.SI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BK={Ah:null,Ln:null,BL:null,D1:null,ApR:
0,Bs:0,A_2:0,Filter:148,CO:0,DQ:0,Bw:true,Down:false,Acf:false,NH:false,Init:function(
aArg){var B;var C0=(C.P.isPrototypeOf(B=this.I)?B:null);if(!C0)throw new Error(Afz
);this.Ah=C0.AKk;C0.AKk=this;},G3:function(CN){var B;if(!!CN&&CN.Bjv(this.Filter
)){this.Down=CN.Down;this.CO=CN.CO;this.DQ=CN.DQ;this.Bs=CN.Bs;this.NH=false;if(
CN.Down){this.A_2=this.ApR;this.Acf=this.ApR>0;if(this.Acf)(B=this.D1)?B[1].call(
B[0],this):null;else(B=this.BL)?B[1].call(B[0],this):null;if(!this.NH)this.ApR=this.
ApR+1;return!this.NH;}if(!CN.Down){this.Acf=this.ApR>1;this.A_2=this.ApR-1;this.
ApR=0;(B=this.Ln)?B[1].call(B[0],this):null;return!this.NH;}}return false;},_Init:
function(aArg){this.__proto__=C.BK;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ln)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
D1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuU={Ci:null,AuW:0,DG:A.wf,Initialize:function(Ag,aOffset){this.Ci=Ag;this.DG=
aOffset;this.AuW=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuU;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ci)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7E={Ah:null,C0:null,_Init:
function(aArg){this.__proto__=C.A7E;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Ari={Nz:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Ari;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nz)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.AD3={AiS:A.wf,AiR:A.wf,_Init:function(aArg
){C.Ari._Init.call(this,aArg);this.__proto__=C.AD3;},_className:"Core::LayoutLineContext"
};C.AD4={AAQ:A.wf,AAP:A.wf,AiS:A.wf,AiR:A.wf,_Init:function(aArg){C.Ari._Init.call(
this,aArg);this.__proto__=C.AD4;},_className:"Core::LayoutQuadContext"};C.ANU={C0:
null,Ah:null,RA:null,RJ:null,Mc:null,ApN:null,_Init:function(aArg){this.__proto__=
C.ANU;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.RA)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mc)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApN)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AU2={FQ:null,B8:null,B7:null,BdK:false,
ByJ:function(){if(!this.FQ)return;var Pj=this.FQ;this.FQ.Pe=null;this.FQ=null;A.
pe([this,this.A3n],this);Pj.A75(this);},BAv:function(G){if(!!this.FQ)return;if(!
this.B7)return;this.FQ=this.B7;this.B7=this.B7.Ah;if(!!this.B7)this.B7.AJ=null;else
this.B8=null;this.FQ.Ah=null;this.BdK=true;this.FQ.SI(this);this.BdK=false;},BAR:
function(G){A.pe([this,this.BAv],this);},BAQ:function(G){A.pe([this,this.BAR],this
);},A3n:function(G){A.pe([this,this.BAQ],this);},Bhv:function(Ji){if(!Ji||!Ji.Pe
)return;if(Ji.Pe!==this)throw new Error(Z_);var BgP=false;if(this.FQ===Ji){this.
FQ=null;BgP=true;A.pe([this,this.A3n],this);}else{if(!!Ji.Ah)Ji.Ah.AJ=Ji.AJ;else
this.B8=Ji.AJ;if(!!Ji.AJ)Ji.AJ.Ah=Ji.Ah;else this.B7=Ji.Ah;Ji.AJ=null;Ji.Ah=null;
}Ji.Pe=null;if(BgP)Ji.A74(this);},A__:function(Ji,A0$){if(!Ji)return;if(!!Ji.Pe)
throw new Error(W9);Ji.Pe=this;if(A0$){Ji.Ah=this.B7;if(!!this.B7)this.B7.AJ=Ji;
else this.B8=Ji;this.B7=Ji;}else{Ji.AJ=this.B8;if(!!this.B8)this.B8.Ah=Ji;else this.
B7=Ji;this.B8=Ji;}if(!this.FQ)A.pe([this,this.A3n],this);},_Init:function(aArg){
this.__proto__=C.AU2;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkW={Pe:null,AJ:null,Ah:
null,A75:function(Atp){},A74:function(Atp){},SI:function(Atp){this.Amz();},Mn:function(
){if(!!this.Pe&&(this.Pe.FQ===this))this.Pe.ByJ();},Amz:function(){if(!!this.Pe)
this.Pe.Bhv(this);},AQ9:function(){return!!this.Pe&&(this.Pe.FQ===this);},_Init:
function(aArg){this.__proto__=C.AkW;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pe)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AU0={As:null,Auj:
null,SI:function(Atp){this.Auj.As=this.As;A.we(this.Auj,0);A.pe([this,this.BAs],
this);},BAs:function(G){this.Auj.As=null;this.Auj=null;this.As=null;this.Mn();},
_Init:function(aArg){C.AkW._Init.call(this,aArg);this.__proto__=C.AU0;},_Mark:function(
D){var B;C.AkW._Mark.call(this,D);if((B=this.As)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.AxI={_Init:function(){C.AU2._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahz={resource:null,Lb:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahz;this.Init(aArg);A.h7++;},_Done:function(){this.Lb();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={MB:null,timer:null,Bs:0,Period:1000,VE:0,Bw:false,Lb:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKN:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PR:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Bw)this.AKN(this.VE,E);},Wz:function(E){if(E<0)E=0;if(E===
this.VE)return;this.VE=E;if(this.Bw)this.AKN(E,this.Period);},Ar:function(E){if(
E===this.Bw)return;this.Bw=E;if(E)this.AKN(this.VE,this.Period);else this.AKN(0,
0);this.Bs=this.Avm();},Avm:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bs=this.Avm();if(!this.
Period)this.Ar(false);(B=this.MB)?B[1].call(B[0],this):null;},AxG:function(G){this.
Ar(false);},StartTimer:function(G){if(this.Bw)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.MB)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bs={AUu:0,Av0:0
,AjR:0,GL:0,Hj:0,Year:0,Bdh:function(AfH,A0C){if(A0C)switch(AfH){case 1:return A.
aci.BjF;case 2:return A.aci.Biw;case 3:return A.aci.BjX;case 4:return A.aci.Bg$;
case 5:return A.aci.Bj1;case 6:return A.aci.BjI;case 7:return A.aci.BjH;case 8:return A.
aci.Bhb;case 9:return A.aci.BoI;case 10:return A.aci.Bkj;case 11:return A.aci.Bki;
case 12:return A.aci.BhS;default:return A.jV;}else switch(AfH){case 1:return A.aci.
ADX;case 2:return A.aci.ACJ;case 3:return A.aci.AD9;case 4:return A.aci.ABL;case
5:return A.aci.AD$;case 6:return A.aci.ADZ;case 7:return A.aci.ADY;case 8:return A.
aci.ABS;case 9:return A.aci.AGw;case 10:return A.aci.AEm;case 11:return A.aci.AEk;
case 12:return A.aci.ACu;default:return A.jV;}},Bdf:function(BbN,A0C){if(A0C)switch(
BbN){case 1:return A.aci.Bj6;case 2:return A.aci.Bp4;case 3:return A.aci.BqK;case
4:return A.aci.BpP;case 5:return A.aci.BiJ;case 6:return A.aci.Boz;case 0:return A.
aci.BpC;default:return A.jV;}else switch(BbN){case 1:return A.aci.Bj5;case 2:return A.
aci.Bp3;case 3:return A.aci.BqJ;case 4:return A.aci.BpO;case 5:return A.aci.BiI;
case 6:return A.aci.Boy;case 0:return A.aci.BpB;default:return A.jV;}},Bde:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JR:function(){var d=this.GL;var K3=this.Hj;var Dg=this.Year-((
K3<=2)?1:0);var AzG=(((Dg>=0)?Dg:Dg-399)/400)|0;var Amn=Dg-(AzG*400);var Vb=(((((
153*(K3+((K3>2)?-3:9)))+2)/5)|0)+d)-1;var Ao6=(((Amn*365)+((Amn/4)|0))-((Amn/100
)|0))+Vb;var Qj=((AzG*146097)+Ao6)-719468;return(((Qj*86400)+(this.AjR*3600))+(this.
Av0*60))+this.AUu;},AFK:function(E){var B;E+=62162035200;if(E<0)E=0;var Vp=Math.
trunc(E/86400)|0;var AzG=(((Vp>=0)?Vp:Vp-146096)/146097)|0;var Ao6=Vp-(AzG*146097
);var Amn=((((Ao6-((Ao6/1460)|0))+((Ao6/36524)|0))-((Ao6/146096)|0))/365)|0;var Dg=
Amn+(AzG*400);var Vb=Ao6-(((365*Amn)+((Amn/4)|0))-((Amn/100)|0));var A2L=(((5*Vb
)+2)/153)|0;var d=(Vb-((((153*A2L)+2)/5)|0))+1;var K3=A2L+((A2L<10)?3:-9);var BI=
Math.trunc(E/3600)%24|0;var O=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Dg+((
K3<=2)?1:0);this.Uo(K3);this.Lp(d);this.Any(BI+((BI<0)?24:0));this.AnB(O+((O<0)?
60:0));this.AnE(s+((s<0)?60:0));},Zj:function(){if(this.Hj===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hj===4)||(this.Hj===6))||(this.Hj===9))||(this.Hj===11))return 30;else return 31;
},Blw:function(){var B;var Vb=this.AbX()-1;var AtG=(6+this.Awa())%7;var Ao8=((371+
AtG)-Vb)%7;if(this.Hj===12){var d=this.GL;if((d===31)&&(AtG<3))return 0;if((d===
30)&&(AtG<2))return 0;if((d===29)&&(AtG<1))return 0;}if(Ao8<=3)Vb+=Ao8;else Vb-=(
7-Ao8);if(Vb<0){var d=this.GL;var K3=this.Hj;this.Year--;this.Lp(31);this.Uo(12);
Vb=this.AbX()-1;AtG=(6+this.Awa())%7;Ao8=((371+AtG)-Vb)%7;if(Ao8<=3)Vb+=Ao8;else
Vb-=Ao8;this.Year++;this.Lp(d);this.Uo(K3);}return(Vb/7)|0;},AbX:function(){var B;
var d=this.GL;var K3=this.Hj;var Dg=this.Year;var Af5=((!!!(Dg%4)&&(!!(Dg%100)||
!!!(Dg%400)))?1:0);switch(K3){case 2:d+=31;break;case 3:d+=(59+Af5);break;case 4:
d+=(90+Af5);break;case 5:d+=(120+Af5);break;case 6:d+=(151+Af5);break;case 7:d+=(
181+Af5);break;case 8:d+=(212+Af5);break;case 9:d+=(243+Af5);break;case 10:d+=(273+
Af5);break;case 11:d+=(304+Af5);break;case 12:d+=(334+Af5);break;default:;}return d;
},Awa:function(){var B;var d=this.GL;var K3=this.Hj+((this.Hj>2)?-2:10);var Dg=this.
Year-((this.Hj<=2)?1:0);var B3=(Dg/100)|0;Dg%=100;d+=((((((((26*K3)-2)/10)|0)+Dg
)+((Dg/4)|0))+((B3/4)|0))-(2*B3));if(d>=0)return d%7;else return(7-(-d%7))%7;},AnE:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUu=E;},AnB:function(E){if(E<0)E=0;if(E>
59)E=59;this.Av0=E;},Any:function(E){if(E<0)E=0;if(E>23)E=23;this.AjR=E;},Lp:function(
E){if(E<1)E=1;if(E>31)E=31;this.GL=E;},Uo:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hj=E;},Format:function(Iv){var result=A.jV;var inx=0;while(!!(Iv.charCodeAt(inx)||
0))if((Iv.charCodeAt(inx)||0)===0x25){var AaA=1;inx=inx+1;if((Iv.charCodeAt(inx)||
0)===0x23){inx=inx+1;AaA=0;}switch(Iv.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GL,2*AaA,10);break;case 0x48:result=result+A.abl(this.AjR,2*AaA,10);break;
case 0x49:if(!(this.AjR%12))result=result+Z$;else result=result+A.abl(this.AjR%12
,2*AaA,10);break;case 0x6D:result=result+A.abl(this.Hj,2*AaA,10);break;case 0x4D:
result=result+A.abl(this.Av0,2*AaA,10);break;case 0x70:if(this.AjR<12)result=result+
A.aci.BgV;else result=result+A.aci.BnW;break;case 0x53:result=result+A.abl(this.
AUu,2*AaA,10);break;case 0x77:result=result+A.abl(this.Awa(),AaA,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*AaA,10);break;case 0x59:result=result+A.abl(
this.Year,4*AaA,10);break;case 0x25:result=result+W_;break;case 0x6A:result=result+
A.abl(this.AbX(),3*AaA,10);break;case 0x57:result=result+A.abl(this.Blw(),2*AaA,
10);break;case 0x61:result=result+this.Bdf(this.Awa(),true);break;case 0x41:result=
result+this.Bdf(this.Awa(),false);break;case 0x62:result=result+this.Bdh(this.Hj
,true);break;case 0x42:result=result+this.Bdh(this.Hj,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Iv.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(Ac4,AfH,Bw2,Bxh,Bxy,BxQ){this.Year=Ac4;this.
Uo(AfH);this.Lp(Bw2);this.Any(Bxh);this.AnB(Bxy);this.AnE(BxQ);return this;},Initialize:
function(Ah9){this.AFK(Ah9);return this;},BhX:function(Ah9){if(!Ah9)return A._NewObject(
C.An2,0).Initialize(this.JR());return A._NewObject(C.An2,0).Initialize(this.JR()-
Ah9.JR());},Bpb:function(Ay1){if(!Ay1)return this;return A._NewObject(C.Bs,0).Initialize(
this.JR()-Ay1.JR());},J:function(Ay1){if(!Ay1)return this;return A._NewObject(C.
Bs,0).Initialize(this.JR()+Ay1.JR());},_Init:function(aArg){this.__proto__=C.Bs;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.An2={AGt:0,AEc:0,ADs:0,Kl:0,JR:function(
){return(((this.Kl*86400)+(this.ADs*3600))+(this.AEc*60))+this.AGt;},AFK:function(
E){var AK1=1;this.Kl=Math.trunc(E/86400)|0;if(E<0){E=-E;AK1=-1;}this.ADs=AK1*(Math.
trunc(E/3600)%24|0);this.AEc=AK1*(Math.trunc(E/60)%60|0);this.AGt=AK1*(E%60|0);}
,Initialize2:function(Bw3,Bxi,Bxz,BxT){this.Kl=Bw3;this.ADs=Bxi;this.AEc=Bxz;this.
AGt=BxT;return this;},Initialize:function(Ah9){this.AFK(Ah9);return this;},_Init:
function(aArg){this.__proto__=C.An2;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$v={As:null,Pe:null,Trigger:function(BwX,A0$){var Pj=A._NewObject(C.AU0,0);
Pj.Auj=this;Pj.As=BwX;this.Pe.A__(Pj,A0$);},_Init:function(aArg){this.__proto__=
C.A$v;this.Pe=A._GetAutoObject(C.AxI);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.As)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$w={JM:null,Event:null,ASi:null,AtY:function(G){var B;if(
!this.Event)return;this.JM=this.Event.As;(B=this.ASi)?B[1].call(B[0],this):null;
this.JM=null;},Bl_:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtY],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtY],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$w;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASi)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BGg={Dt:0x1,BC1:0x2,BD_:0x4,BF7:0x8,Bw:0x10,H8:0x20
,BD$:0x40,BEM:0x80,BD6:0x100,BEq:0x200,BDU:0x400,BFp:0x800,Bl:0x1000,BGd:0x2000,
BE9:0x4000,BE_:0x8000,Abg:0x10000,BE8:0x20000,BFC:0x40000,BDL:0x80000,BFg:0x100000
,BDF:0x200000};C.PL={BFr:0x1,BFs:0x2,BCX:0x4,BCY:0x8,BCZ:0x10,BCW:0x20};C.AgX={None:
0,BF3:1,BDi:2,BEv:3,BFv:4,BF4:5,BF5:6,BDj:7,BDk:8,BEx:9,BEw:10,BFx:11,BFw:12};C.
AuY={None:0,BF1:1,Left:2,BDg:3,ZO:4,A5m:5,BF2:6,Right:7,BDh:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BFt={BGm:0x1,BGj:0x2,BGk:0x4,BGl:
0x8,BEz:0x10,BEb:0x20};
C._Init=function(){C.Ake.__proto__=C.Ci;C.Zy.__proto__=C.Ci;C.Et.__proto__=C.Ci;C.
P.__proto__=C.Et;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.ARp.__proto__=
C.Event;C.AuT.__proto__=C.Event;C.Aec.__proto__=C.Event;C.AqF.__proto__=C.Event;
C.Y.__proto__=C.Et;C.CM.__proto__=C.P;C.Dz.__proto__=C.P;C.Bn.__proto__=C.Zy;C.H9.
__proto__=C.Et;C.AD3.__proto__=C.Ari;C.AD4.__proto__=C.Ari;C.AU0.__proto__=C.AkW;
};C._ReInit=function(){var B;if((B=C.AxI._this))B._ReInit(),C.AxI._ReInit.call(B
);};C.DH=function(D){var B;if((B=C.AxI._this)&&(B._cycle!=D))B._Done(C.AxI._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */