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
var Cc=[0,0];var BF=[0,0,0,0];var EZ="The view does not belong to this group";var
Hj=[1000,740];var I$="The dialog component is already presented";var Io="The dialog component is actually not presented";
var OZ="No fader to perform the fade-in/out operation";var P0="Trying to use the same fader twice";
var P1="Trying to fade-in/out a group which belongs to another owner";var CO="No view to restack";
var E8="View is not in this group";var Lt="Sibling view does not belong to the group";
var P2="No view to remove";var JX="No view to add";var N$="View already in a group";
var P3="Recursive invalidate during active update cycle.";var MF=[-8,-8,9,9];var
S2="No group to end the modal state.";var UM="The group is not modal.";var ZU="No group to obtain the modal state.";
var WT="The group serves already as the \'virtual keyboard\'.";var Ip="The group is already modal.";
var UN="View is not in the same group or it is not embedded within the Outline "+
"Box";var ZV="The method SwitchToDialog() is not available in Core::VerticalList.";
var WU="The method DismissDialog() is not available in Core::VerticalList.";var ZW=
"The method PresentDialog() is not available in Core::VerticalList.";var WV="The method FadeGroup() is not available in Core::VerticalList.";
var ZX="The method RestackBehind() is not available in Core::VerticalList.";var ZY=
"The method RestackTop() is not available in Core::VerticalList.";var UO="The method Restack() is not available in Core::VerticalList.";
var WW="The method Remove() is not available in Core::VerticalList.";var Rf="The method AddBehind() is not available in Core::VerticalList.";
var ZZ="The method Add() is not available in Core::VerticalList.";var O0="The Slide Touch Handler:";
var Rg="is already connected with a view.";var WX="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var WY=[0,0,170,120];var WZ="The method SwitchToDialog() is not available in Core::HorizontalList.";
var W0="The method DismissDialog() is not available in Core::HorizontalList.";var
Z0="The method PresentDialog() is not available in Core::HorizontalList.";var W1=
"The method FadeGroup() is not available in Core::HorizontalList.";var W2="The method RestackBehind() is not available in Core::HorizontalList.";
var S3="The method RestackTop() is not available in Core::HorizontalList.";var UP=
"The method Restack() is not available in Core::HorizontalList.";var Z1="The method Remove() is not available in Core::HorizontalList.";
var AcD="The method AddBehind() is not available in Core::HorizontalList.";var S4=
"The method Add() is not available in Core::HorizontalList.";var Z2=[0,0,1,1];var
Afp="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var Z3="Trying to cancel a task not belonging to this queue!";var W3="Trying to enqueue a task twice!";
var Z4="12";var Z5="%";
C.Ch={Ah:null,AJ:null,Ab:null,Er:null,U:0x103,JV:0,PH:0x14,AtG:function(BH,AhX){}
,ArP:function(E){if(this.JV===E)return;this.JV=E;if(!!this.Ab){var AiW=this.Ah;var
G6=0;while(!!AiW&&(E>AiW.JV)){AiW=AiW.Ah;G6=G6+1;}AiW=this.AJ;while(!!AiW&&(E<AiW.
JV)){AiW=AiW.AJ;G6=G6-1;}if(!!G6)this.Ab.JU(this,G6);}},A3:function(E){var B;var
G6=E^this.PH;if(!G6)return;this.PH=E;if(!!this.Er&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.JC],this);this.Ab.Bg([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Er&&((this.U&0x400)===0x400)){this.Er.Nv.U=this.Er.
Nv.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JC],this);}},Ii:function(
){var B0=this.Ab;while(!!B0){var Iy=(C.Root.isPrototypeOf(B0)?B0:null);if(!!Iy)return Iy;
B0=B0.Ab;}return null;},Kg:function(C0,aClip,aOffset,Ci,aBlend){},GetClipping:function(
){return this.GetExtent();},GW:function(CM){return null;},Yb:function(C$,BG,Oc,Aaa
,AcU,AcT){return null;},Aus:function(C$){return C$;},AuC:function(BH,MJ){return Cc;
},Ana:function(aOffset,Atd){},GetExtent:function(){return BF;},Cy:function(Rn,UV
){var B;if(((this.U&0x200)===0x200))Rn=Rn&~0x400;var A2y=(this.U&~UV)|Rn;var Xm=
A2y^this.U;this.U=A2y;if(!!this.Ab&&!!(Xm&0x14)){var BcZ=((this.U&0x14)===0x14);
if(BcZ&&!this.Ab.AV)this.Ab.Bb(this);if(!BcZ&&(this.Ab.AV===this))this.Ab.Bb(this.
Ab.ACB(this,0x14));}if(!!this.Ab&&!!(Xm&0x403))this.Ab.Bg(this.GetClipping());if(((
!!this.Er&&!!this.Ab)&&((A2y&0x400)===0x400))&&((Xm&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JC],this);}if(!!this.Ab&&((Xm&0x400
)===0x400)){this.Er=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JC],this);}if(((((Xm&0x100000)===0x100000)&&((UV&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cy(0x0,0x10);if(((((
Xm&0x100000)===0x100000)&&((Rn&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cy(0x10,0x0);if(((((Xm&0x200000)===0x200000)&&((UV&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cy(
0x10,0x0);if((((((Xm&0x200000)===0x200000)&&((Rn&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G7.C2!==this)))
)this.Cy(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Ch;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Er)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Aj8={Ey:A.wf,Ep:A.wf
,AtG:function(BH,AhX){var At=A._NewObject(C.ADS,0);this.Er=null;At.extent=this.getExtent(
);At.Bd=BH;At.Nv=AhX;At.AiI=this.Ep;At.AiJ=this.Ey;this.Er=At;},AuC:function(BH,
MJ){var B;var ER=this.PH;var At=(C.ADS.isPrototypeOf(B=this.Er)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var J6=[BH[
2]-BH[0],BH[3]-BH[1]];var BX=x2-x1;var BJ=y2-y1;var tmp;if(!MJ){var Ny=[(B=At.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(Ny[0]!==J6[0]){var HQ=((ER&
0x4)===0x4);var HR=((ER&0x8)===0x8);var Qn=((ER&0x1)===0x1);if(!HQ&&(Qn||!HR))x1=((
x1*J6[0])/Ny[0])|0;if(!HR&&(Qn||!HQ)){x2=x2-At.Bd[0];x2=((x2*J6[0])/Ny[0])|0;x2=
x2-J6[0];}else x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];if(!Qn){if(HQ&&!HR)x2=x1+BX;
else if(!HQ&&HR)x1=x2-BX;else{x1=x1+((((x2-x1)-BX)/2)|0);x2=x1+BX;}}}else{x2=x2-
At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(Ny[1]!==J6[1]){var HS=((ER&0x10)===0x10);var
HP=((ER&0x20)===0x20);var Qo=((ER&0x2)===0x2);if(!HS&&(Qo||!HP))y1=((y1*J6[1])/Ny[
1])|0;if(!HP&&(Qo||!HS)){y2=y2-At.Bd[1];y2=((y2*J6[1])/Ny[1])|0;y2=y2-J6[1];}else
y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qo){if(HS&&!HP)y2=y1+BJ;else if(!HS&&
HP)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=y1+BJ;}}}else{y2=y2-At.Bd[3];y1=y1+
BH[1];y2=y2+BH[3];}}else{switch(MJ){case 3:{x1=BH[0];x2=x1+BX;}break;case 4:{x2=
BH[2];x1=x2-BX;}break;case 1:{y1=BH[1];y2=y1+BJ;}break;case 2:{y2=BH[3];y1=y2-BJ;
}break;default:;}if((MJ===3)||(MJ===4)){var HS=((ER&0x10)===0x10);var HP=((ER&0x20
)===0x20);var Qo=((ER&0x2)===0x2);if(Qo){y1=BH[1];y2=BH[3];}else if(HS&&!HP){y1=
BH[1];y2=y1+BJ;}else if(HP&&!HS){y2=BH[3];y1=y2-BJ;}else{y1=BH[1]+((((BH[3]-BH[1
])-BJ)/2)|0);y2=y1+BJ;}}if((MJ===1)||(MJ===2)){var HQ=((ER&0x4)===0x4);var HR=((
ER&0x8)===0x8);var Qn=((ER&0x1)===0x1);if(Qn){x1=BH[0];x2=BH[2];}else if(HQ&&!HR
){x1=BH[0];x2=x1+BX;}else if(HR&&!HQ){x2=BH[2];x1=x2-BX;}else{x1=BH[0]+((((BH[2]-
BH[0])-BX)/2)|0);x2=x1+BX;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BX=x2-x1;BJ=y2-y1;if(
At.AiJ[0]<At.AiI[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.AiJ[1]<At.AiI[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Ep=[x1,y1];this.Ey=[x2,y2];}else{this.DR([x1,y1]);this.DE([x2,y2]);this.
Er=At;}return[BX,BJ];},Ana:function(aOffset,Atd){if(Atd){this.Ep=A.abf(this.Ep,aOffset
);this.Ey=A.abf(this.Ey,aOffset);}else{this.DR(A.abf(this.Ep,aOffset));this.DE(A.
abf(this.Ey,aOffset));}},GetExtent:function(){if(!!this.Er&&this.Er.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Ep[0];var y1=this.Ep[
1];var x2=this.Ey[0];var y2=this.Ey[1];var BX=x2-x1;var BJ=y2-y1;var tmp;if(BX<0
)BX=-BX;if(BJ<0)BJ=-BJ;if(BX>=BJ){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BJ>=BX){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DE:function(E){var B;if(A.aaX(E,this.
Ey))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.
Er=null;this.Ey=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JC],this);}},DR:function(
E){var B;if(A.aaX(E,this.Ep))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(
this.GetClipping());this.Er=null;this.Ep=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JC],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.
Aj8;},_className:"Core::LineView"};C.Zq={Kr:A.wf,Mz:A.wf,Ey:A.wf,Ep:A.wf,AtG:function(
BH,AhX){var At=A._NewObject(C.ADT,0);this.Er=null;At.extent=this.GetExtent();At.
Bd=BH;At.Nv=AhX;At.AiI=this.Ep;At.AiJ=this.Ey;At.AAD=this.Mz;At.AAE=this.Kr;this.
Er=At;},AuC:function(BH,MJ){var B;var ER=this.PH;var At=(C.ADT.isPrototypeOf(B=this.
Er)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var J6=[BH[2]-BH[0],BH[3]-BH[1]];var BX=x2-x1;var BJ=y2-y1;if(!MJ){var
Ny=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(Ny[0]!==J6[0]){
var HQ=((ER&0x4)===0x4);var HR=((ER&0x8)===0x8);var Qn=((ER&0x1)===0x1);if(!HQ&&(
Qn||!HR))x1=((x1*J6[0])/Ny[0])|0;if(!HR&&(Qn||!HQ)){x2=x2-At.Bd[0];x2=((x2*J6[0]
)/Ny[0])|0;x2=x2-J6[0];}else x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];if(!Qn){if(HQ&&
!HR)x2=x1+BX;else if(!HQ&&HR)x1=x2-BX;else{x1=x1+((((x2-x1)-BX)/2)|0);x2=x1+BX;}
}}else{x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(Ny[1]!==J6[1]){var HS=((ER&0x10
)===0x10);var HP=((ER&0x20)===0x20);var Qo=((ER&0x2)===0x2);if(!HS&&(Qo||!HP))y1=((
y1*J6[1])/Ny[1])|0;if(!HP&&(Qo||!HS)){y2=y2-At.Bd[1];y2=((y2*J6[1])/Ny[1])|0;y2=
y2-J6[1];}else y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qo){if(HS&&!HP)y2=y1+BJ;
else if(!HS&&HP)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=y1+BJ;}}}else{y2=y2-
At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MJ){case 3:{x1=BH[0];x2=x1+BX;}break;
case 4:{x2=BH[2];x1=x2-BX;}break;case 1:{y1=BH[1];y2=y1+BJ;}break;case 2:{y2=BH[
3];y1=y2-BJ;}break;default:;}if((MJ===3)||(MJ===4)){var HS=((ER&0x10)===0x10);var
HP=((ER&0x20)===0x20);var Qo=((ER&0x2)===0x2);if(Qo){y1=BH[1];y2=BH[3];}else if(
HS&&!HP){y1=BH[1];y2=y1+BJ;}else if(HP&&!HS){y2=BH[3];y1=y2-BJ;}else{y1=BH[1]+((((
BH[3]-BH[1])-BJ)/2)|0);y2=y1+BJ;}}if((MJ===1)||(MJ===2)){var HQ=((ER&0x4)===0x4);
var HR=((ER&0x8)===0x8);var Qn=((ER&0x1)===0x1);if(Qn){x1=BH[0];x2=BH[2];}else if(
HQ&&!HR){x1=BH[0];x2=x1+BX;}else if(HR&&!HQ){x2=BH[2];x1=x2-BX;}else{x1=BH[0]+((((
BH[2]-BH[0])-BX)/2)|0);x2=x1+BX;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BX=(x2-x1)-1;BJ=(
y2-y1)-1;var Aim=At.extent[0];var Aio=At.extent[1];var AfO=(At.extent[2]-Aim)-1;
var AfN=(At.extent[3]-Aio)-1;if(!AfO)AfO=1;if(!AfN)AfN=1;if(((this.U&0x100)===0x100
)){this.Ep=[x1+((((At.AiI[0]-Aim)*BX)/AfO)|0),y1+((((At.AiI[1]-Aio)*BJ)/AfN)|0)];
this.Ey=[x1+((((At.AiJ[0]-Aim)*BX)/AfO)|0),y1+((((At.AiJ[1]-Aio)*BJ)/AfN)|0)];this.
Mz=[x1+((((At.AAD[0]-Aim)*BX)/AfO)|0),y1+((((At.AAD[1]-Aio)*BJ)/AfN)|0)];this.Kr=[
x1+((((At.AAE[0]-Aim)*BX)/AfO)|0),y1+((((At.AAE[1]-Aio)*BJ)/AfN)|0)];}else{this.
DR([x1+((((At.AiI[0]-Aim)*BX)/AfO)|0),y1+((((At.AiI[1]-Aio)*BJ)/AfN)|0)]);this.DE([
x1+((((At.AiJ[0]-Aim)*BX)/AfO)|0),y1+((((At.AiJ[1]-Aio)*BJ)/AfN)|0)]);this.Kn([x1+((((
At.AAD[0]-Aim)*BX)/AfO)|0),y1+((((At.AAD[1]-Aio)*BJ)/AfN)|0)]);this.JQ([x1+((((At.
AAE[0]-Aim)*BX)/AfO)|0),y1+((((At.AAE[1]-Aio)*BJ)/AfN)|0)]);this.Er=At;}return[BX+
1,BJ+1];},Ana:function(aOffset,Atd){if(Atd){this.Ep=A.abf(this.Ep,aOffset);this.
Ey=A.abf(this.Ey,aOffset);this.Mz=A.abf(this.Mz,aOffset);this.Kr=A.abf(this.Kr,aOffset
);}else{this.DR(A.abf(this.Ep,aOffset));this.DE(A.abf(this.Ey,aOffset));this.Kn(
A.abf(this.Mz,aOffset));this.JQ(A.abf(this.Kr,aOffset));}},GetExtent:function(){
if(!!this.Er&&this.Er.isEmpty)return BF;var x1=this.Ep[0];var y1=this.Ep[1];var x2=
this.Mz[0];var y2=this.Mz[1];if((((this.Kr[0]!==x1)||(this.Ey[1]!==y1))||(this.Ey[
0]!==x2))||(this.Kr[1]!==y2)){if(this.Ey[0]<x1)x1=this.Ey[0];if(this.Mz[0]<x1)x1=
this.Mz[0];if(this.Kr[0]<x1)x1=this.Kr[0];if(this.Ey[1]<y1)y1=this.Ey[1];if(this.
Mz[1]<y1)y1=this.Mz[1];if(this.Kr[1]<y1)y1=this.Kr[1];if(this.Ep[0]>x2)x2=this.Ep[
0];if(this.Ey[0]>x2)x2=this.Ey[0];if(this.Kr[0]>x2)x2=this.Kr[0];if(this.Ep[1]>y2
)y2=this.Ep[1];if(this.Ey[1]>y2)y2=this.Ey[1];if(this.Kr[1]>y2)y2=this.Kr[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},JQ:function(E){var B;if(A.aaX(E,this.Kr))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.Er=null;this.Kr=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JC],this);}},Kn:function(E){var B;if(A.aaX(E,
this.Mz))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping()
);this.Er=null;this.Mz=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.JC],this);}},DE:function(
E){var B;if(A.aaX(E,this.Ey))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(
this.GetClipping());this.Er=null;this.Ey=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.JC],this);}},DR:function(E){var B;if(A.aaX(E,this.Ep))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.Er=null;this.Ep=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.JC],this);}},AQW:function(KY){var Hx=A.abi(4,
A.wf,null);var P=0;var Ib=3;var A16=false;var A17=false;Hx.Set(0,this.Ep);Hx.Set(
1,this.Ey);Hx.Set(2,this.Mz);Hx.Set(3,this.Kr);while(P<4){var BgD=Hx.Get(P)[0];var
ALc=Hx.Get(P)[1];var BB_=Hx.Get(Ib)[0];var A4j=Hx.Get(Ib)[1];if(((ALc>KY[1])!==(
A4j>KY[1]))||((ALc<KY[1])!==(A4j<KY[1]))){var El=((((BB_-BgD)*(KY[1]-ALc))/(A4j-
ALc))|0)+BgD;if(KY[0]>El)A16=!A16;if(KY[0]<El)A17=!A17;}Ib=P;P=P+1;}return A16||
A17;},BiZ:function(){return((((this.Ep[0]===this.Kr[0])&&(this.Ey[0]===this.Mz[0
]))&&(this.Ep[1]===this.Ey[1]))&&(this.Mz[1]===this.Kr[1]))||((((this.Ep[0]===this.
Ey[0])&&(this.Mz[0]===this.Kr[0]))&&(this.Ep[1]===this.Kr[1]))&&(this.Ey[1]===this.
Mz[1]));},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.__proto__=C.Zq;},
_className:"Core::QuadView"};C.Eq={M:A.wg,AtG:function(BH,AhX){var At=A._NewObject(
C.Aq6,0);At.extent=this.M;At.Bd=BH;At.Nv=AhX;this.Er=At;},AuC:function(BH,MJ){var
B;var ER=this.PH;var At=this.Er;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var J6=[BH[2]-BH[0],BH[3]-BH[1]];var BX=x2-x1;var BJ=
y2-y1;if(!MJ){var Ny=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];
if(Ny[0]!==J6[0]){var HQ=((ER&0x4)===0x4);var HR=((ER&0x8)===0x8);var Qn=((ER&0x1
)===0x1);if(!HQ&&(Qn||!HR))x1=((x1*J6[0])/Ny[0])|0;if(!HR&&(Qn||!HQ)){x2=x2-At.Bd[
0];x2=((x2*J6[0])/Ny[0])|0;x2=x2-J6[0];}else x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[
2];if(!Qn){if(HQ&&!HR)x2=x1+BX;else if(!HQ&&HR)x1=x2-BX;else{x1=x1+((((x2-x1)-BX
)/2)|0);x2=x1+BX;}}}else{x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(Ny[1]!==J6[1
]){var HS=((ER&0x10)===0x10);var HP=((ER&0x20)===0x20);var Qo=((ER&0x2)===0x2);if(
!HS&&(Qo||!HP))y1=((y1*J6[1])/Ny[1])|0;if(!HP&&(Qo||!HS)){y2=y2-At.Bd[1];y2=((y2
*J6[1])/Ny[1])|0;y2=y2-J6[1];}else y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qo
){if(HS&&!HP)y2=y1+BJ;else if(!HS&&HP)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=
y1+BJ;}}}else{y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MJ){case 3:{x1=
BH[0];x2=x1+BX;}break;case 4:{x2=BH[2];x1=x2-BX;}break;case 1:{y1=BH[1];y2=y1+BJ;
}break;case 2:{y2=BH[3];y1=y2-BJ;}break;default:;}if((MJ===3)||(MJ===4)){var HS=((
ER&0x10)===0x10);var HP=((ER&0x20)===0x20);var Qo=((ER&0x2)===0x2);if(Qo){y1=BH[
1];y2=BH[3];}else if(HS&&!HP){y1=BH[1];y2=y1+BJ;}else if(HP&&!HS){y2=BH[3];y1=y2-
BJ;}else{y1=BH[1]+((((BH[3]-BH[1])-BJ)/2)|0);y2=y1+BJ;}}if((MJ===1)||(MJ===2)){var
HQ=((ER&0x4)===0x4);var HR=((ER&0x8)===0x8);var Qn=((ER&0x1)===0x1);if(Qn){x1=BH[
0];x2=BH[2];}else if(HQ&&!HR){x1=BH[0];x2=x1+BX;}else if(HR&&!HQ){x2=BH[2];x1=x2-
BX;}else{x1=BH[0]+((((BH[2]-BH[0])-BX)/2)|0);x2=x1+BX;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Er=At;}return[x2-x1,y2-y1];},Ana:function(aOffset,Atd){if(Atd)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.GetClipping());this.Er=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.JC],this);}},_Init:function(aArg){C.Ch._Init.call(this,aArg);this.
__proto__=C.Eq;},_className:"Core::RectView"};C.O={B8:null,B9:null,AJ$:null,Fw:null
,G7:null,Xn:null,ApH:null,AV:null,G1:255,Azv:0,Azy:0,Azx:0,Azw:0,Init:function(aArg
){this.An();},Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;Ci=((Ci+1)*this.G1)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.Fw||(C0.C2===this))this.BcO(C0,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ci,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Ci&0xFF)<<24);this.Fw.Update();C0.A5F(aClip,this.Fw,0,A.abh(this.M,aOffset),Cc,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.Fw)return Az;
Az=[].concat(Az[0]-this.Azw,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.Azy);Az=A.abN(
Az,Az[2]+this.Azx);Az=[].concat(Az.slice(0,3),Az[3]+this.Azv);if(((this.U&0x80000
)===0x80000)){var ApU=BF;var X;for(X=this.B8;!!X;X=X.Ah)if(((X.U&0x1)===0x1))ApU=
A.wC(ApU,X.GetClipping());Az=A.wC(Az,A.abh(ApU,this.M.slice(0,2)));}return Az;},
Yb:function(C$,BG,Oc,Aaa,AcU,AcT){var B;var X=this.B9;var Ao$=null;var AE=BF;var
J7=null;var A2o=!!this.Xn&&(!!this.Xn.FJ||!!this.Xn.B8);if(((B=A.lb(C$,this.M))[
0]>=B[2])||(B[1]>=B[3]))return null;C$=A.abg(C$,this.M.slice(0,2));if(!!AcU){X=AcU;
while(!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J7){J7=X.
AJ;while(!!J7&&!((J7.U&0x200)===0x200))J7=J7.AJ;if(!!J7)AE=A.lb(C$,J7.GetExtent(
));else AE=BF;}if(J7===X){J7=null;AE=BF;}if((!!Aaa&&!!(C.O.isPrototypeOf(X)?X:null
))||((((((X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((
X.U&0x20000)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.G7.C2===X)&&!A2o))
)){var extent=X.GetExtent();var AJB=Aaa;var AoW=null;if(AJB===X)AJB=null;if(((X.
U&0x400)===0x400)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))AoW=X.Yb(AE
,BG,Oc,AJB,AcU,AcT);}else if(!(((B=A.lb(extent,C$))[0]>=B[2])||(B[1]>=B[3]))||(Aaa===
X))AoW=X.Yb(C$,BG,Oc,AJB,AcU,AcT);X=X.AJ;if(!!AoW){if(!Ao$||((AoW.AuO<Ao$.AuO)&&(
AoW.AuO>=0)))Ao$=AoW;if(!AoW.AuO)X=null;}}else X=X.AJ;AcU=null;}return Ao$;},Aus:
function(C$){var B;var F;var X=this.B8;var LA=BF;var AAx=true;var result=(C$=F=A.
abg(C$,this.M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var AtS=(C.Y.isPrototypeOf(
X)?X:null);LA=A.lb(C$,AtS.M);AAx=((AtS.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAx){var AE=A.lb(X.GetClipping(),LA);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.Aus(AE));}}else{var AE=A.lb(X.GetClipping(),
C$);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.Aus(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cy:function(Rn,UV){var B;
var Ti=this.U;if(((!!this.Ab&&!!!this.Fw)&&((this.U&0x80001)===0x80001))&&((UV&0x80000
)===0x80000))this.Ab.Bg(this.GetClipping());C.Eq.Cy.call(this,Rn,UV);if((((!!this.
Ab&&!!!this.Fw)&&((this.U&0x1)===0x1))&&((Rn&0x80000)===0x80000))&&!((Ti&0x80000
)===0x80000))this.Ab.Bg(this.GetClipping());var Xm=this.U^Ti;if(!!this.AV&&((Xm&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AV.Cy(0x40,0x0);else this.AV.Cy(0x0
,0x40);}if(!!this.G7&&((Xm&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.G7.C2.
U&0x14)===0x14))this.G7.C2.Cy(0x40,0x0);else this.G7.C2.Cy(0x0,0x40);}if(((Xm&0x10
)===0x10)){var X;for(X=this.B8;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.G7.C2===X)))X.Cy(Rn&0x10,UV&
0x10);}if(!!Xm){this.U=this.U|0x8000;A.pe([this,this.ABa],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlN=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKg=[
E[2]-E[0],E[3]-E[1]];var ApQ=!A.aaX(AlN,AKg);if(ApQ&&!!this.Fw){this.Fw.ArB(AKg);
A.we(this,0);A.we(this.Fw,0);}C.Eq.H.call(this,E);if((ApQ&&(AlN[0]>0))&&(AlN[1]>
0)){var Bd=[].concat(Cc,AlN);var X=this.B8;while(!!X){if((!X.Er&&(X.PH!==0x14))&&
!((X.U&0x400)===0x400))X.AtG(Bd,null);X=X.Ah;}}if(ApQ){this.U=this.U|0x5000;A.pe([
this,this.ABa],this);}},A3v:function(CM){var BdJ=(C.KeyEvent.isPrototypeOf(CM)?CM:
null);var D2=this.AJ$;if(!BdJ)return null;while(!!D2&&(!D2.By||!D2.GW(BdJ)))D2=D2.
Ah;return D2;},BBV:function(G){if(!!this.Fw){this.Fw.C2=this;var AE=A.abg(this.Aus(
A.abh(this.Fw.QG,this.M.slice(0,2))),this.M.slice(0,2));this.Fw.Au8(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.BcO(this.Fw,AE,Cc,255,true);this.Fw.
C2=null;}},BcO:function(C0,aClip,aOffset,Ci,aBlend){var B;var X=this.B8;var LA=BF;
var AAx=true;this.BhX(C0,aClip,aOffset,Ci,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var AtS=(C.Y.isPrototypeOf(X)?X:null);AAx=((AtS.U&0x1)===0x1);LA=aClip;if(!((
AtS.U&0x80000)===0x80000))LA=A.lb(LA,A.abh(AtS.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAx){var AE=A.lb(A.abh(X.GetClipping(),aOffset),LA
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Kg(C0,AE,aOffset,Ci,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Kg(C0,AE,aOffset,Ci,aBlend);}}X=X.Ah;}this.Bh0(C0,aClip,aOffset,Ci,aBlend);},BfF:
function(){var B;var A1Z=((this.U&0x1000)===0x1000);var Aiu=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aak=false;var Adc=BF;var K0=BF;var Aal=Cc;var AtC=0;var AtD=0;
var AtB=0;var Qg=0;var X=this.B9;var J7=null;var AlF=null;while(!!X){if(((X.U&0x800
)===0x800)){Aak=true;X.U=X.U&~0x800;}if(Aak&&((X.U&0x200)===0x200)){Aak=false;if(
!!(C.Y.isPrototypeOf(X)?X:null).AgL)X.U=X.U|0x1000;}X=X.AJ;}Aak=false;X=this.B8;
if(A1Z){this.U=this.U&~0x1000;A1Z=!((Aiu[0]>=Aiu[2])||(Aiu[1]>=Aiu[3]));}this.U=
this.U|0x2000;while(!!X){if(!AlF&&(AtB!==Qg)){var Adz=X;var AKC=0;var AAS=Adc[2]-
Adc[0];var Ay7=Adc[3]-Adc[1];var AJq=0;var Ap1=Cc;do if(((Adz.U&0x200)===0x200))
Adz=null;else if(((Adz.U&0x401)===0x401)){Ap1=[(B=Adz.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qg===3)||(Qg===4))AAS=AAS-Ap1[0];if((Qg===1)||(Qg===2))Ay7=Ay7-Ap1[1];
if(!AlF||((AAS>=0)&&(Ay7>=0))){AlF=Adz;Adz=Adz.Ah;if((Qg===3)||(Qg===4)){AAS=AAS-
AtC;if(Ap1[1]>AKC)AKC=Ap1[1];}if((Qg===1)||(Qg===2)){Ay7=Ay7-AtD;if(Ap1[0]>AJq)AJq=
Ap1[0];}}else Adz=null;}else Adz=Adz.Ah;while(!!Adz);if(!AlF)AlF=J7;K0=Adc;switch(
AtB){case 9:case 11:K0=[].concat(K0.slice(0,3),K0[1]+AKC);break;case 10:case 12:
K0=A.abP(K0,K0[3]-AKC);break;case 5:case 7:K0=A.abN(K0,K0[0]+AJq);break;case 6:case
8:K0=[].concat(K0[2]-AJq,K0.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Er&&(X.Er.Nv!==J7))X.Er=null;if((!X.Er&&Aak)&&((X.PH!==0x14)||!!Qg))X.
AtG(K0,J7);}if(!!X.Er){if(A1Z&&!((X.U&0x400)===0x400))X.AuC(Aiu,0);if(Aak&&((X.U&
0x400)===0x400)){var C4=X.AuC(A.abh(K0,Aal),Qg);if(((X.U&0x1)===0x1)){var Br=Cc;
switch(Qg){case 3:Br=[C4[0]+AtC,Br[1]];break;case 4:Br=[-C4[0]-AtC,Br[1]];break;
case 1:Br=[Br[0],C4[1]+AtD];break;case 2:Br=[Br[0],-C4[1]-AtD];break;default:;}Aal=
A.abf(Aal,Br);}}}if(((X.U&0x200)===0x200)){if(Aak)A.pe(J7.Ej,J7);Aak=((X.U&0x1000
)===0x1000);J7=(C.Y.isPrototypeOf(X)?X:null);if(Aak){X.U=X.U&~0x1000;AtB=J7.AgL;
Qg=AtB;Adc=A.abh(J7.M,J7.Bt);K0=Adc;Aal=Cc;AtC=J7.Space+J7.AUC;AtD=J7.Space;Aak=
!((Adc[0]>=Adc[2])||(Adc[1]>=Adc[3]));AlF=null;switch(AtB){case 9:case 10:Qg=3;break;
case 11:case 12:Qg=4;break;case 5:case 6:Qg=1;break;case 7:case 8:Qg=2;break;default:;
}}if(Aak)this.Bg(J7.M);}if(X===AlF){switch(AtB){case 9:case 11:Aal=[0,(Aal[1]+(K0[
3]-K0[1]))+AtD];break;case 10:case 12:Aal=[0,(Aal[1]-(K0[3]-K0[1]))-AtD];break;case
5:case 7:Aal=[(Aal[0]+(K0[2]-K0[0]))+AtC,0];break;case 6:case 8:Aal=[(Aal[0]-(K0[
2]-K0[0]))-AtC,0];break;default:;}AlF=null;}X=X.Ah;}if(Aak)A.pe(J7.Ej,J7);this.U=
this.U&~0x2000;this.Bk([Aiu[2]-Aiu[0],Aiu[3]-Aiu[1]]);},JC:function(G){A.pe([this
,this.ABa],this);},ABa:function(G){var B;var BB3=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.BfF();}if(((this.U&0x8000)===
0x8000)||BB3){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(EZ);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AV)return;if(!!this.AV)this.AV.Cy(0x0
,0x60);this.AV=E;if(!!E){if(((this.U&0x40)===0x40))E.Cy(0x60,0x0);else E.Cy(0x20
,0x0);}},Ba2:function(Aq){this.Bb(Aq);},AR9:function(){return!!this.Fw;},Aru:function(
E){var B;if(!!this.Fw===E)return;if(!E){this.Fw.AEg=null;this.Fw.ArB(Cc);this.Fw=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if(E){this.
Fw=A._NewObject(A.Graphics.Canvas,0);this.Fw.ArB([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.Fw.AEg=[this,this.BBV];}A.we(this,0);},A8v:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cy(0x100000,0x0);else this.Cy(0x0
,0x100000);},Do:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G1)return;
this.G1=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());},AZ0:
function(Aq){this.Do(Aq);},Aj:function(E){if(E)this.Cy(0x400,0x0);else this.Cy(0x0
,0x400);},Blr:function(E){if(E)this.Cy(0x2,0x0);else this.Cy(0x0,0x2);},Fi:function(
){var B;return((this.U&0x1)===0x1);},Z:function(E){if(E)this.Cy(0x1,0x0);else this.
Cy(0x0,0x1);},ExtendClipping:function(Aox,Aoy,Aoz,Aow){var B;var AyY=this.M;var Rs=
AyY;if(Aox<0)Aox=0;if(Aox>255)Aox=255;if(Aoy<0)Aoy=0;if(Aoy>255)Aoy=255;if(Aoz<0
)Aoz=0;if(Aoz>255)Aoz=255;if(Aow<0)Aow=0;if(Aow>255)Aow=255;Rs=[].concat(Rs[0]-(
Math.max(Aox,this.Azw)&0xFF),Rs.slice(1,4));Rs=A.abN(Rs,Rs[2]+(Math.max(Aoy,this.
Azx)&0xFF));Rs=A.abP(Rs,Rs[1]-(Math.max(Aoz,this.Azy)&0xFF));Rs=[].concat(Rs.slice(
0,3),Rs[3]+(Math.max(Aow,this.Azv)&0xFF));if(Aox!==this.Azw){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.Fw)&&!((this.U&0x80000)===0x80000)){var Az=Rs;Az=A.abN(Az
,AyY[0]);this.Ab.Bg(Az);}this.Azw=Aox&0xFF;}if(Aoy!==this.Azx){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.Fw)&&!((this.U&0x80000)===0x80000)){var Az=Rs;Az=[].
concat(AyY[2],Az.slice(1,4));this.Ab.Bg(Az);}this.Azx=Aoy&0xFF;}if(Aoz!==this.Azy
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.Fw)&&!((this.U&0x80000)===0x80000
)){var Az=Rs;Az=[].concat(Az.slice(0,3),AyY[1]);this.Ab.Bg(Az);}this.Azy=Aoz&0xFF;
}if(Aow!==this.Azv){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.Fw)&&!((this.
U&0x80000)===0x80000)){var Az=Rs;Az=A.abP(Az,AyY[3]);this.Ab.Bg(Az);}this.Azv=Aow&
0xFF;}},Bh0:function(C0,aClip,aOffset,Ci,aBlend){},BhX:function(C0,aClip,aOffset
,Ci,aBlend){},GetMaximalSize:function(){return Hj;},GetMinimalSize:function(){return Cc;
},AUJ:function(Iq,Ob,W_,S7,S8,AhY,O5,Rm,Ly,Lw,Lx){var B;if(!this.G7){this.AkB(Iq
,Ob,W_,S7,S8,null,null,Ly,Lw,Lx);return;}var AlM=this.G7;var Jz=AlM.Ah;if(((Iq.U&
0x10000)===0x10000)&&(this.G7.C2!==Iq))throw new Error(I$);var Adi=A._NewObject(
C.ANH,0);var Ru=AlM.Ru;var RD=null;var Ma=null;if(!!Jz){RD=Jz.RD;Ma=Jz.Ma;}if(!!
Jz&&!!AlM.ApG)RD=AlM.ApG;if(!!Jz&&!!O5)Ma=O5;if(!!AhY)Ru=AhY;if(!Ob)Ob=A._GetAutoObject(
A.acl.Asm);if(!W_)W_=Ob;if(!S8)S8=S7;if(!S7)S7=S8;Adi.Ru=W_;Adi.Ma=S7;Adi.RD=S8;
Adi.ApG=Rm;Adi.C2=Iq;Adi.Ah=this.G7.Ah;this.G7.Ah=null;this.G7=Adi;if(this.AV===
Iq)this.Bb(null);AlM.C2.Cy(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Iq.U&0x4)===
0x4))Iq.Cy(0x10040,0x0);else Iq.Cy(0x10000,0x0);if(!!Ma){this.NK(Jz.C2,Ma.Ad0(),
null,null,Lx);this.NK(AlM.C2,Ru.R6(),null,null,true);this.NK(Adi.C2,Ob.R7(),Ly,Lw
,true);}else if(!!RD){this.NK(Jz.C2,RD.Ad1(),null,null,Lx);this.NK(AlM.C2,Ru.R6(
),null,null,true);this.NK(Adi.C2,Ob.R7(),Ly,Lw,true);}else if(!!Ru){this.NK(AlM.
C2,Ru.R6(),null,null,Lx);this.NK(Adi.C2,Ob.R7(),Ly,Lw,true);}else this.NK(Adi.C2
,Ob.R7(),Ly,Lw,Lx);},Aqr:function(Iq,AhY,O5,Rm,Ly,Lw,Lx){var B;if(!this.G7)return;
if(!Iq)return;var Ky=this.G7;var Jz=this.G7.Ah;var ApM=null;while((!!Ky&&(Ky.C2!==
Iq))&&!!Ky.Ah){ApM=Ky;Ky=Jz;Jz=Ky.Ah;}if(!Ky||(Ky.C2!==Iq))throw new Error(Io);if(
!ApM){this.G7=Jz;Ky.Ah=null;}else{ApM.Ah=Jz;Ky.Ah=null;}Ky.C2.Cy(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!Jz)&&!ApM)&&((Jz.C2.U&0x200000)===0x200000))Jz.C2.Cy(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!Jz)&&!ApM)&&((Jz.C2.U&0x4)===0x4))Jz.C2.Cy(
0x40,0x0);var Ru=Ky.Ru;var RD=null;var Ma=null;if(!!Jz)RD=Jz.RD;if(!!Jz&&!!Ky.ApG
)RD=Ky.ApG;if(!!Jz&&!!Rm)RD=Rm;if(!!ApM&&!!Jz)Ma=Jz.Ma;if((!!ApM&&!!Jz)&&!!O5)Ma=
O5;if(!!AhY)Ru=AhY;if(!!Ma){this.NK(Jz.C2,Ma.Ad0(),null,null,Lx);this.NK(Ky.C2,Ru.
R6(),Ly,Lw,true);}else if(!!RD){this.NK(Jz.C2,RD.Ad1(),null,null,Lx);this.NK(Ky.
C2,Ru.R6(),Ly,Lw,true);}else this.NK(Ky.C2,Ru.R6(),Ly,Lw,Lx);},AkB:function(Iq,Ob
,W_,S7,S8,O5,Rm,Ly,Lw,Lx){var B;if(!Iq)return;if(!!this.G7&&(this.G7.C2===Iq)){this.
AUJ(Iq,Ob,W_,S7,S8,null,O5,Rm,Ly,Lw,Lx);return;}if(((Iq.U&0x10000)===0x10000))throw new
Error(I$);var Ky=A._NewObject(C.ANH,0);if(!!this.G7&&!this.G7.Ma){if(!Rm)Rm=O5;if(
!O5)O5=Rm;}var Ma=null;if(!!this.G7)Ma=this.G7.Ma;if(!!this.G7&&!!O5)Ma=O5;if(!Ob
)Ob=A._GetAutoObject(A.acl.Asm);if(!W_)W_=Ob;if(!S8)S8=S7;if(!S7)S7=S8;Ky.Ru=W_;
Ky.Ma=S7;Ky.RD=S8;Ky.ApG=Rm;if(this.AV===Iq)this.Bb(null);if(!!this.G7&&((this.G7.
C2.U&0x200000)===0x200000))this.G7.C2.Cy(0x0,0x10);if(!!this.G7)this.G7.C2.Cy(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Iq.U&0x4)===0x4))Iq.Cy(0x10040,0x0);else Iq.
Cy(0x10000,0x0);Ky.C2=Iq;Ky.Ah=this.G7;this.G7=Ky;if(!!Ma){this.NK(this.G7.Ah.C2
,Ma.Ad0(),null,null,Lx);this.NK(Iq,Ob.R7(),Ly,Lw,true);}else this.NK(Iq,Ob.R7(),
Ly,Lw,Lx);},A6T:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7v:function(
KY){var tmp=this;while(!!tmp){KY=A.abe(KY,tmp.M.slice(0,2));tmp=tmp.Ab;}return KY;
},BiV:function(KY){var tmp=this;while(!!tmp){KY=A.abf(KY,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KY;},DispatchEvent:function(CM){var B;var X=this.AV;var B0=(C.O.isPrototypeOf(
X)?X:null);var Gw=null;var A2o=!!this.Xn&&(!!this.Xn.FJ||!!this.Xn.B8);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.G7&&!A2o)Gw=this.G7.C2.DispatchEvent(CM);if(!Gw&&!!B0)
Gw=B0.DispatchEvent(CM);else if(!Gw&&!!X)Gw=X.GW(CM);if(!Gw)Gw=this.GW(CM);if(!Gw
)Gw=this.A3v(CM);return Gw;},BroadcastEventAtPosition:function(CM,Hv,aFilter){var
B;var X=this.B9;var Gw=null;while(!!X&&!Gw){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Hv)){var B0=(C.O.isPrototypeOf(X)?X:null);if(!!B0)Gw=B0.
BroadcastEventAtPosition(CM,A.abe(Hv,B0.M.slice(0,2)),aFilter);else Gw=X.GW(CM);
}X=X.AJ;}if(!Gw)Gw=this.GW(CM);return Gw;},BroadcastEvent:function(CM,aFilter){var
B;var X=this.B9;var Gw=null;while(!!X&&!Gw){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.O.isPrototypeOf(X)?X:null);if(!!B0)Gw=B0.BroadcastEvent(CM,aFilter
);else Gw=X.GW(CM);}X=X.AJ;}if(!Gw)Gw=this.GW(CM);if(!Gw)Gw=this.A3v(CM);return Gw;
},Bk:function(aSize){},Ai:function(Ae){},Bja:function(){this.U=this.U|0x4000;A.pe([
this,this.ABa],this);},An:function(){this.U=this.U|0x8000;A.pe([this,this.ABa],this
);},Bg:function(C$){var B;var B0=this;while(!!B0&&!((C$[0]>=C$[2])||(C$[1]>=C$[3
]))){var Aah=B0.Fw;if(!B0.Ab&&(B0!==this)){B0.Bg(C$);return;}if(!!Aah){var BzI=Aah.
QG;Aah.QG=A.wC(Aah.QG,C$);if(!A.aaY(BzI,Aah.QG)){A.we(B0,0);A.we(Aah,0);}}if(!((
B0.U&0x1)===0x1))return;var Az=B0.M;C$=A.abh(C$,Az.slice(0,2));if(!!B0.Fw||!((B0.
U&0x80000)===0x80000)){if(!!!B0.Fw){Az=[].concat(Az[0]-B0.Azw,Az.slice(1,4));Az=
A.abP(Az,Az[1]-B0.Azy);Az=A.abN(Az,Az[2]+B0.Azx);Az=[].concat(Az.slice(0,3),Az[3
]+B0.Azv);}C$=A.lb(C$,Az);}B0=B0.Ab;}},QB:function(Ag,Gt,aFilter){var B;if(!Ag||(
Ag.Ab!==this))return null;var Af7=A.aaI(Ag.GetExtent());var X=Ag;var A0_=null;var
Bcr=0;var IR=0x10000;var AKy;if(((aFilter&0x10000)===0x10000))IR=0x0;var top=((Gt===
4)||(Gt===1))||(Gt===6);var bottom=((Gt===5)||(Gt===3))||(Gt===8);var left=((Gt===
2)||(Gt===1))||(Gt===3);var right=((Gt===7)||(Gt===6))||(Gt===8);if(((!top&&!bottom
)&&!left)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B9;if(X===Ag)X=null;
if((!!X&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IR||!((B=IR)&&((X.U&B)===B
))))for(AKy=0;AKy<2;AKy++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];
if(!!!AKy){if((left&&(s[0]>s[1]))&&(Az[2]<Af7[0]))Az=[].concat(Az[2]-s[1],Az.slice(
1,4));if((right&&(s[0]>s[1]))&&(Az[0]>Af7[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(
s[1]>s[0]))&&(Az[3]<Af7[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[
1]>Af7[1]))Az=[].concat(Az.slice(0,3),Az[1]+s[0]);}var Br=A.abe(A.aaI(Az),Af7);var
Rp=Br;if(Rp[0]<0)Rp=[-Rp[0],Rp[1]];if(Rp[1]<0)Rp=[Rp[0],-Rp[1]];if(((((!left||(Br[
0]<=-Rp[1]))&&(!right||(Br[0]>=Rp[1])))&&(!top||(Br[1]<=-Rp[0])))&&(!bottom||(Br[
1]>=Rp[0])))&&((Rp[0]>0)||(Rp[1]>0))){var Rw=Br[0];var Rx=Br[1];var Je=Math.sqrt((
Rw*Rw)+(Rx*Rx));var AJ_=0;if(!left&&!right)AJ_=Je/Rp[1];if(!top&&!bottom)AJ_=Je/
Rp[0];Je=(Je*AJ_)*AJ_;if((Je<Bcr)||!A0_){Bcr=Je;A0_=X;}}}}return A0_;},Aqy:function(
Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;var IR=0x10000;
if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((
B=aFilter)&&((X.U&B)===B)))&&(!IR||!((B=IR)&&((X.U&B)===B))))return X;X=X.AJ;}return null;
},TK:function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;
var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;if(!!Ag)X=Ag.Ah;while(!!X
){if((!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IR||!((B=IR)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACB:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var AlK=Ag.Ah;var AlX=Ag.AJ;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;
while(!!AlK||!!AlX){if((!!AlK&&(!aFilter||((B=aFilter)&&((AlK.U&B)===B))))&&(!IR||
!((B=IR)&&((AlK.U&B)===B))))return AlK;if((!!AlX&&(!aFilter||((B=aFilter)&&((AlX.
U&B)===B))))&&(!IR||!((B=IR)&&((AlX.U&B)===B))))return AlX;if(!!AlK)AlK=AlK.Ah;if(
!!AlX)AlX=AlX.AJ;}return null;},Da:function(aFilter){var B;var X=this.B8;var AE=
BF;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IR||!((B=IR)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NK:function(Kx,FI,Ly,Lw
,Lx){var B;if(!Kx)return;if(!FI)throw new Error(OZ);if((!!FI.O||!!FI.Ab)||!!FI.Pf
)throw new Error(P0);if(!!Kx.Ab&&(Kx.Ab!==this))throw new Error(P1);if(!this.Xn)
this.Xn=A._NewObject(C.AUO,0);FI.Ab=this;FI.O=Kx;FI.AKi=Lw;FI.A2Q=Ly;if(!!Kx.ApH
)Kx.ApH.Pf.Bn2(Kx.ApH);Kx.ApH=FI;Kx.U=Kx.U|0x20000;if((Lx&&!!this.Xn.B9)&&!this.
Xn.B9.AQS())(A.acl.ACw.isPrototypeOf(B=this.Xn.B9)?B:null).A4y(FI);else{var Pf=A.
_NewObject(A.acl.ACw,0);Pf.A4y(FI);this.Xn.A_9(Pf,false);}},Ahp:function(Ag,J1){
var B;if(!Ag)throw new Error(CO);if(Ag.Ab!==this)throw new Error(E8);if(!!J1&&(J1.
Ab!==this))throw new Error(Lt);if(Ag.Ah===J1)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Er)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.JC],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JC],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B9=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;var Gv=
null;var Is=this.B9;var LO=Ag.JV;if(!!J1){Gv=J1;Is=J1.AJ;}if(!!Gv&&(LO>Gv.JV))LO=
Gv.JV;if(!!Is&&(LO<Is.JV))LO=Is.JV;if(LO!==Ag.JV){Ag.Ab=null;Ag.ArP(LO);Ag.Ab=this;
}if(!J1){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.B9;Ag.Ah=null;this.B9=Ag;}else{Ag.
Ah=J1;Ag.AJ=J1.AJ;J1.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B8===J1)this.B8=Ag;if(((
Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());},Zt:function(Ag){var B;if(!Ag)throw new
Error(CO);if(Ag.Ab!==this)throw new Error(E8);if(!Ag.Ah)return;var Is=this.B9;var
LO=Ag.JV;while(!!Is&&(Is.JV>LO))Is=Is.AJ;if(((Is===Ag)||!Is)||(Is.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Er)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JC],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JC],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=Is;Ag.Ah=Is.Ah;Is.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping(
));},JU:function(Ag,P9){var B;if(!Ag)throw new Error(CO);if(Ag.Ab!==this)throw new
Error(E8);var Is=Ag;var Gv=Ag;var LO=Ag.JV;while(((P9>0)&&!!Is.Ah)&&(Is.Ah.JV<=LO
)){Is=Is.Ah;P9=P9-1;}while(((P9<0)&&!!Gv.AJ)&&(Gv.AJ.JV>=LO)){Gv=Gv.AJ;P9=P9+1;}
if((Is===Ag)&&(Gv===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Er)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JC],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JC],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;if(Is
!==Ag){Ag.Ah=Is.Ah;Ag.AJ=Is;Is.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(Gv!==Ag){Ag.Ah=Gv;
Ag.AJ=Gv.AJ;Gv.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B9=Ag;if(!Ag.AJ)this.
B8=Ag;if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());},HL:function(Ag){var B;if(
!Ag)throw new Error(P2);if(Ag.Ab!==this)throw new Error(E8);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Er){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.JC],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.JC],this);}Ag.Er=null;if(this.AV===Ag)this.Bb(this.
ACB(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag
)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cy(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());},ALS:function(Ag,J1
){var B;if(!Ag)throw new Error(JX);if(!!Ag.Ab)throw new Error(N$);if(!!J1&&(J1.Ab
!==this))throw new Error(Lt);var Gv=null;var Is=this.B9;var LO=Ag.JV;if(!!J1){Gv=
J1;Is=J1.AJ;}if(!!Gv&&(LO>Gv.JV))LO=Gv.JV;if(!!Is&&(LO<Is.JV))LO=Is.JV;if(LO!==Ag.
JV){Ag.Ab=null;Ag.ArP(LO);Ag.Ab=this;}if(!J1){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.
B9;this.B9=Ag;}else{Ag.Ah=J1;Ag.AJ=J1.AJ;J1.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B8===J1)this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOC()===Ag))Ag.Cy(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cy(0x10,0x0);
if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.JC],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.JC],this);}},J:function(Ag,P9){var B;if(!Ag)throw new Error(
JX);if(!!Ag.Ab)throw new Error(N$);var Gv=null;var LO=Ag.JV;if(((P9<0)&&!!this.B9
)&&(this.B9.JV>=LO)){Gv=this.B9;P9=P9+1;}while((((P9<0)&&!!Gv)&&!!Gv.AJ)&&(Gv.AJ.
JV>=LO)){Gv=Gv.AJ;P9=P9+1;}if((!Gv&&!!this.B9)&&(this.B9.JV>LO))Gv=this.B9;while((
!!Gv&&!!Gv.AJ)&&(Gv.AJ.JV>LO))Gv=Gv.AJ;if(!Gv){Ag.Ab=this;Ag.AJ=this.B9;if(!!this.
B9)this.B9.Ah=Ag;if(!this.B8)this.B8=Ag;this.B9=Ag;}else{Ag.Ab=this;Ag.AJ=Gv.AJ;
Ag.Ah=Gv;Gv.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B8=Ag;}if(((Ag.U&0x1)===0x1))
this.Bg(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOC()===Ag))Ag.Cy(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cy(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cy(0x10,0x0);if(((!this.AV&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.JC],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.JC],this);}},A8x:function(){return this.
AV;},Av$:function(){return this.G1;},_Init:function(aArg){C.Eq._Init.call(this,aArg
);this.__proto__=C.O;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Eq._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ$)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.G7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ApH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={RA:null,Jy:null,Fn:A.abi(10,null
,null),Atp:null,Aie:null,ABc:0,H_:0,L8:A.abi(10,0,null),AJw:A.abi(10,A.wg,null),
Xl:A.abi(10,0,null),AfM:A.abi(10,A.wf,null),Atu:A.abi(10,0,null),Aid:A.abi(10,A.
wf,null),Xk:A.abi(10,A.wf,null),Rt:A.abi(10,A.wf,null),Ac5:A.abi(10,A.wf,null),EL:
0,AJV:0,AJU:0,Oq:A.abi(4,0,null),Kb:A.abi(4,A.wg,null),J9:0,AzW:0,AtI:0,AzI:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ii:function(){return this;
},Kg:function(C0,aClip,aOffset,Ci,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)C0.Au8(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.O.Kg.call(this,C0,aClip
,aOffset,Ci,aBlend);},Cy:function(Rn,UV){var B;C.O.Cy.call(this,Rn,UV);if(!this.
Ab&&(((Rn&0x1)===0x1)||((UV&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rn&0x2)===0x2)||((UV&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.O.Bb.call(this,E);},Aru:
function(E){var B;var BzG=this.Fw;C.O.Aru.call(this,E);if(((BzG!==this.Fw)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Do:function(
E){var B;var BR=this.G1;C.O.Do.call(this,E);if(((BR!==this.G1)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CM){if(!!CM){CM.AvJ=!!this.H_;if(!!this.H_)CM.Bu=this.H_;}var Gw=null;if(!!this.
Jy){Gw=this.Jy.C2.DispatchEvent(CM);if(!Gw)Gw=this.GW(CM);if(!Gw)Gw=this.A3v(CM);
this.H_=0;return Gw;}Gw=C.O.DispatchEvent.call(this,CM);this.H_=0;return Gw;},BroadcastEvent:
function(CM,aFilter){if(!!CM){CM.AvJ=!!this.H_;if(!!this.H_)CM.Bu=this.H_;}var Gw=
C.O.BroadcastEvent.call(this,CM,aFilter);this.H_=0;return Gw;},Bg:function(C$){var
B;if(this.ABc>0)throw new Error(P3);if(!!this.Fw&&!this.Ab){if(((B=this.Fw.QG)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.Fw,0);}this.Fw.QG=A.wC(this.Fw.QG
,C$);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)C$=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.O.Bg.call(this,C$);return;}C$=A.
lb(A.abh(C$,this.M.slice(0,2)),this.M);if((C$[0]>=C$[2])||(C$[1]>=C$[3]))return;
var P;for(P=0;P<this.J9;P=P+1)if(!(((B=A.lb(this.Kb.Get(P),C$))[0]>=B[2])||(B[1]>=
B[3]))){this.Kb.Set(P,A.wC(this.Kb.Get(P),C$));this.Oq.Set(P,A.aaH(this.Kb.Get(P
)));return;}if(this.J9<3){this.Kb.Set(this.J9,C$);this.Oq.Set(this.J9,A.aaH(C$));
this.J9=this.J9+1;return;}var Ib;var Rz;var AzV=0;var AzY=0;var Bcq=2147483647;this.
Kb.Set(this.J9,C$);this.Oq.Set(this.J9,A.aaH(C$));for(Ib=0;Ib<=this.J9;Ib=Ib+1)for(
Rz=Ib+1;Rz<=this.J9;Rz=Rz+1){var AK2=A.aaH(A.wC(this.Kb.Get(Ib),this.Kb.Get(Rz))
);var Bff=((AK2<<8)/(this.Oq.Get(Ib)+this.Oq.Get(Rz)))|0;if(Bff<Bcq){Bcq=Bff;AzV=
Ib;AzY=Rz;}}this.Kb.Set(AzV,A.wC(this.Kb.Get(AzV),this.Kb.Get(AzY)));this.Oq.Set(
AzV,A.aaH(this.Kb.Get(AzV)));if(AzY!==this.J9){this.Kb.Set(AzY,this.Kb.Get(this.
J9));this.Oq.Set(AzY,this.Oq.Get(this.J9));}},Byj:function(){var LI=A._NewObject(
C.Aqt,0);LI.AvJ=!!this.H_;if(!!this.H_)LI.Bu=this.H_;return LI;},AoU:function(){
var LI=A._NewObject(C.Ad3,0);LI.AvJ=!!this.H_;if(!!this.H_)LI.Bu=this.H_;return LI;
},Att:function(){var LI=A._NewObject(C.AuL,0);LI.AvJ=!!this.H_;if(!!this.H_)LI.Bu=
this.H_;return LI;},Byo:function(G){var P;var Ao$=false;for(P=0;P<10;P=P+1)if(!!
this.Fn.Get(P)){var pos=this.Rt.Get(P);var B0=this.Fn.Get(P).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fn.Get(P)!==this)){
var tmp=this.Fn.Get(P);this.EL=P;this.Fn.Set(P,null);tmp.GW(this.AoU().InitializeUp(
P,this.Aid.Get(P),this.AfM.Get(P),this.Xl.Get(P),this.L8.Get(P)+1,this.Xk.Get(P)
,false,this.Rt.Get(P),this.Ac5.Get(P)));this.BroadcastEvent(this.Att().InitializeUp(
P,this.L8.Get(P)+1,false,tmp,this.Rt.Get(P)),0x18);}else{this.Xl.Set(P,(this.Aie.
Bu-this.Atu.Get(P))|0);if(this.Xl.Get(P)<10)this.Xl.Set(P,10);this.EL=P;this.Fn.
Get(P).GW(this.AoU().InitializeHold(P,pos,this.AfM.Get(P),this.Xl.Get(P),this.L8.
Get(P)+1,this.Xk.Get(P),this.Rt.Get(P),this.Ac5.Get(P)));Ao$=true;}}if(!Ao$)this.
Aie.Ar(false);},GetFPS:function(){var ticksCount=0;var Bc4=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJV&&(ticksCount>this.AJV))Bc4=((this.AJU*1000)/((
ticksCount-this.AJV)|0))|0;this.AJU=0;this.AJV=ticksCount;return Bc4;},Update:function(
){var B;if(!this.Atp)this.Atp=A._NewObject(A.Graphics.Canvas,0);this.Atp.ArB([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Atp.Update();return this.UpdateGE20(this.Atp);}
,UpdateGE20:function(C0){if(!this.BeginUpdate())return BF;var Agf=this.UpdateCanvas(
C0,Cc);this.EndUpdate();return Agf;},EndUpdate:function(){if(this.J9>0){this.AJU=
this.AJU+1;this.J9=0;}},UpdateCanvas:function(C0,aOffset){var B;var Agf=BF;var Bx2=[
].concat(aOffset,A.abf(C0.FrameSize,aOffset));var P;var Ib=this.J9;this.ABc=this.
ABc+1;C0.C2=this;for(P=0;(P<Ib)&&(P<4);P=P+1)if(this.Oq.Get(P)>0){this.Kg(C0,A.abg(
this.Kb.Get(P),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agf=A.wC(Agf,A.lb(Bx2
,this.Kb.Get(P)));}else Ib=Ib+1;C0.C2=null;this.ABc=this.ABc-1;if(!((Agf[0]>=Agf[
2])||(Agf[1]>=Agf[3])))return A.abg(Agf,aOffset);else return Agf;},GetUpdateRegion:
function(AIT){var P;var Ib=this.J9;if(AIT<0)return BF;for(P=0;(P<Ib)&&(P<4);P=P+
1)if(!this.Oq.Get(P)){Ib=Ib+1;AIT=AIT+1;}else if(P===AIT)return this.Kb.Get(P);return BF;
},BeginUpdate:function(){var B;var P;if(!!this.J9&&!A.aaY(this.Kb.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var Bgh=A.abi(3,A.wg,null);var Bgg=this.J9;for(P=0;
P<Bgg;P++)Bgh.Set(P,this.Kb.Get(P));for(P=0;P<Bgg;P++){var BfA=A.abh(Bgh.Get(P),
this.M.slice(0,2));var BfB=this.Aus(BfA);if(!A.aaY(BfA,BfB))this.Bg(A.abg(BfB,this.
M.slice(0,2)));}}var Ib;var Rz;for(Ib=0;Ib<(this.J9-1);Ib++)if(this.Oq.Get(Ib)>0
)for(Rz=Ib+1;Rz<this.J9;Rz++)if(this.Oq.Get(Rz)>0){var AK2=A.aaH(A.wC(this.Kb.Get(
Ib),this.Kb.Get(Rz)));if(((AK2-this.Oq.Get(Ib))-this.Oq.Get(Rz))<0){this.Kb.Set(
Ib,A.wC(this.Kb.Get(Ib),this.Kb.Get(Rz)));this.Oq.Set(Ib,AK2);this.Oq.Set(Rz,0);
}}for(P=this.J9-1;P>=0;P--)if(!this.Oq.Get(P))this.J9=this.J9-1;return this.J9;}
,DoesNeedUpdate:function(){if(this.J9>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.AzI)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bg(this.M);return this;},SetRootFocus:function(A0z){if(A0z===this.AzI
)return false;this.AzI=A0z;if(!A0z){if(!!this.Jy)this.Jy.C2.Cy(0x0,0x40);else this.
Cy(0x0,0x40);}else if(!!this.Jy)this.Jy.C2.Cy(0x40,0x0);else this.Cy(0x40,0x0);return true;
},SetUserInputTimestamp:function(P_){this.H_=P_;},DriveKeyboardHitting:function(
Kw,AyK,S6){var B;var A3w=!!this.RA;if(!!this.RA&&((!S6||(this.AzW!==Kw))||(this.
AtI!==AyK))){var LI=null;var X=(C.Ch.isPrototypeOf(B=this.RA)?B:null);var D2=(C.
BL.isPrototypeOf(B=this.RA)?B:null);if(!!this.AzW)LI=A._NewObject(C.KeyEvent,0).
Initialize(this.AzW,false);if(this.AtI!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
this.AtI,false);if(!!D2)D2.GW(LI);else if(!!X)X.GW(LI);this.AzW=0;this.AtI=0x00;
this.RA=null;}if(!!this.RA){var LI=null;var X=(C.Ch.isPrototypeOf(B=this.RA)?B:null
);var D2=(C.BL.isPrototypeOf(B=this.RA)?B:null);if(!!Kw)LI=A._NewObject(C.KeyEvent
,0).Initialize(Kw,true);if(this.AtI!==0x00)LI=A._NewObject(C.KeyEvent,0).Initialize2(
AyK,true);if(!!D2)D2.GW(LI);else if(!!X)X.GW(LI);}if(!this.RA&&S6){if(!!Kw)this.
RA=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Kw,true));if(AyK!==0x00
)this.RA=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(AyK,true));if(
!(C.BL.isPrototypeOf(B=this.RA)?B:null)&&!(C.Ch.isPrototypeOf(B=this.RA)?B:null)
)this.RA=null;this.AzW=Kw;this.AtI=AyK;A3w=A3w||!!this.RA;}this.H_=0;return A3w;
},DriveCursorMovement:function(E_){return this.DriveMultiTouchMovement(this.EL,E_
);},DriveMultiTouchMovement:function(BG,E_){if((BG<0)||(BG>9)){this.H_=0;return false;
}var Fp=A.abe(E_,this.Rt.Get(BG));this.Rt.Set(BG,E_);if(!this.Fn.Get(BG)||A.aaX(
Fp,Cc)){this.H_=0;return false;}var pos=E_;var B0=this.Fn.Get(BG).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fn.Get(BG)!==
this)){var tmp=this.Fn.Get(BG);this.EL=BG;this.Fn.Set(BG,null);tmp.GW(this.AoU().
InitializeUp(BG,this.Aid.Get(BG),this.AfM.Get(BG),this.Xl.Get(BG),this.L8.Get(BG
)+1,this.Xk.Get(BG),false,this.Rt.Get(BG),this.Ac5.Get(BG)));this.BroadcastEvent(
this.Att().InitializeUp(BG,this.L8.Get(BG)+1,false,tmp,E_),0x18);}else{this.Aid.
Set(BG,pos);this.EL=BG;this.Fn.Get(BG).GW(this.Byj().Initialize(BG,pos,this.AfM.
Get(BG),Fp,this.Xl.Get(BG),this.L8.Get(BG)+1,this.Xk.Get(BG),E_,this.Ac5.Get(BG)
));}this.H_=0;return true;},DriveCursorHitting:function(S6,BG,E_){return this.DriveMultiTouchHitting(
S6,BG,E_);},DriveMultiTouchHitting:function(S6,BG,E_){if((BG<0)||(BG>9)){this.H_=
0;return false;}var ticksCount=this.H_;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BBb=this.H_;this.DriveMultiTouchMovement(BG,E_);E_=this.Rt.Get(BG);
this.H_=BBb;if(S6)this.Ac5.Set(BG,E_);if(S6&&!this.Fn.Get(BG)){var Jx;var pos=E_;
if(A.wa(this.AJw.Get(BG),E_)&&((ticksCount-this.Atu.Get(BG))<=250))this.L8.Set(BG
,this.L8.Get(BG)+1);else this.L8.Set(BG,0);this.AJw.Set(BG,A.abh(MF,E_));this.Atu.
Set(BG,ticksCount);if(!!this.Jy)Jx=this.Yb(A.abh(MF,E_),BG,this.L8.Get(BG)+1,this.
Jy.C2,null,0x0);else Jx=this.Yb(A.abh(MF,E_),BG,this.L8.Get(BG)+1,null,null,0x0);
if(!!Jx){this.BroadcastEvent(this.Att().InitializeDown(BG,this.L8.Get(BG)+1,false
,Jx.Ch,E_),0x18);this.Fn.Set(BG,Jx.Ch);this.Xk.Set(BG,Jx.DC);}else{this.Fn.Set(BG
,null);this.Xk.Set(BG,Cc);this.H_=0;return false;}var B0=Jx.Ch.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfM.Set(BG,pos);this.Aid.
Set(BG,pos);this.Xl.Set(BG,0);this.Aie.Ar(true);this.EL=BG;this.Fn.Get(BG).GW(this.
AoU().InitializeDown(BG,pos,this.L8.Get(BG)+1,this.Xk.Get(BG),false,E_));this.H_=
0;return true;}if(!S6&&!!this.Fn.Get(BG)){var pos=E_;var B0=this.Fn.Get(BG).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Aid.
Get(BG);this.EL=BG;var tmp=this.Fn.Get(BG);this.Fn.Set(BG,null);tmp.GW(this.AoU(
).InitializeUp(BG,pos,this.AfM.Get(BG),this.Xl.Get(BG),this.L8.Get(BG)+1,this.Xk.
Get(BG),false,E_,this.Ac5.Get(BG)));this.BroadcastEvent(this.Att().InitializeUp(
BG,this.L8.Get(BG)+1,false,tmp,E_),0x18);this.H_=0;return true;}this.H_=0;return false;
},AT9:function(Aac,BbO,AcU,AcT){if(Aac===this)Aac=null;if(!!!Aac&&!!this.Jy)Aac=
this.Jy.C2;if(!this.Fn.Get(this.EL))return;var Jx;Jx=this.Yb(A.abh(MF,this.Rt.Get(
this.EL)),this.EL,1,Aac,AcU,AcT);if(!!Jx&&(this.Fn.Get(this.EL)!==Jx.Ch))this.ANx(
Jx.Ch,Jx.DC);if(!Jx&&(this.Fn.Get(this.EL)!==BbO))this.ANx(BbO,Cc);},ANx:function(
Aac,W$){if(!this.Fn.Get(this.EL)||(this.Fn.Get(this.EL)===Aac))return;var tmp=this.
Fn.Get(this.EL);this.Fn.Set(this.EL,null);tmp.GW(this.AoU().InitializeUp(this.EL
,this.Aid.Get(this.EL),this.AfM.Get(this.EL),this.Xl.Get(this.EL),this.L8.Get(this.
EL)+1,this.Xk.Get(this.EL),true,this.Rt.Get(this.EL),this.Ac5.Get(this.EL)));this.
BroadcastEvent(this.Att().InitializeUp(this.EL,this.L8.Get(this.EL)+1,true,tmp,this.
Rt.Get(this.EL)),0x18);var pos=this.Rt.Get(this.EL);var B0=null;if(!!Aac)B0=Aac.
Ab;while(!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Aac
!==this)){this.Fn.Set(this.EL,null);return;}this.BroadcastEvent(this.Att().InitializeDown(
this.EL,this.L8.Get(this.EL)+1,true,Aac,this.Rt.Get(this.EL)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-A.v$)|0;this.Fn.Set(this.EL,Aac);this.Xk.Set(
this.EL,W$);this.AfM.Set(this.EL,pos);this.Aid.Set(this.EL,pos);this.L8.Set(this.
EL,0);this.Xl.Set(this.EL,0);this.Atu.Set(this.EL,ticksCount);this.Ac5.Set(this.
EL,this.Rt.Get(this.EL));this.Fn.Get(this.EL).GW(this.AoU().InitializeDown(this.
EL,pos,this.L8.Get(this.EL)+1,this.Xk.Get(this.EL),true,this.Ac5.Get(this.EL)));
},AOC:function(){if(!!this.Jy)return this.Jy.C2;return null;},ACt:function(Kx){var
B;if(!Kx)throw new Error(S2);if(!((Kx.U&0x80)===0x80))throw new Error(UM);if(this.
Jy.C2===Kx)this.Jy=this.Jy.Ah;else{var AzH=this.Jy;while(AzH.Ah.C2!==Kx)AzH=AzH.
Ah;AzH.Ah=AzH.Ah.Ah;}Kx.Cy(0x0,0xD0);if(this.AzI){if(!!this.Jy)this.Jy.C2.Cy(0x50
,0x0);else this.Cy(0x50,0x0);}},AME:function(Kx){var B;var At=A._NewObject(C.A7G
,0);if(!Kx)throw new Error(ZU);if(Kx===null)throw new Error(WT);if(((Kx.U&0x80)===
0x80))throw new Error(Ip);if(!!this.Jy)this.Jy.C2.Cy(0x0,0x50);else this.Cy(0x0,
0x50);At.Ah=this.Jy;At.C2=Kx;this.Jy=At;if(this.AzI)Kx.Cy(0xD0,0x0);else Kx.Cy(0x90
,0x0);},_Init:function(aArg){C.O._Init.call(this,aArg);C.Timer._Init.call(this.Aie={
I:this},0);(this.Fn=[]).__proto__=C.Root.Fn;(this.L8=[]).__proto__=C.Root.L8;(this.
AJw=[]).__proto__=C.Root.AJw;(this.Xl=[]).__proto__=C.Root.Xl;(this.AfM=[]).__proto__=
C.Root.AfM;(this.Atu=[]).__proto__=C.Root.Atu;(this.Aid=[]).__proto__=C.Root.Aid;(
this.Xk=[]).__proto__=C.Root.Xk;(this.Rt=[]).__proto__=C.Root.Rt;(this.Ac5=[]).__proto__=
C.Root.Ac5;(this.Oq=[]).__proto__=C.Root.Oq;(this.Kb=[]).__proto__=C.Root.Kb;this.
__proto__=C.Root;this.U=0x10007F;this.Aie.PO(10);this.Aie.Mx=[this,this.Byo];this.
Init(aArg);},_Done:function(){this.__proto__=C.O;this.Aie._Done();C.O._Done.call(
this);},_ReInit:function(){C.O._ReInit.call(this);this.Aie._ReInit();},_Mark:function(
D){var B;C.O._Mark.call(this,D);if((B=this.RA)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Jy)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fn,D);if((B=this.
Atp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aie)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bu:0,AvJ:false,Init:function(aArg){this.Bu=
this.Avf();},Avf:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CN:0,DM:0,Down:false
,Initialize2:function(Kw,S6){this.CN=0;this.DM=Kw;this.Down=S6;if((Kw>=0x30)&&(Kw<=
0x39))this.CN=(10+Kw)-48;if((Kw>=0x41)&&(Kw<=0x5A))this.CN=(105+Kw)-65;if((Kw>=0x61
)&&(Kw<=0x7A))this.CN=(105+Kw)-97;if(Kw===0x20)this.CN=131;if(!this.CN)switch(Kw
){case 0x2B:this.CN=132;break;case 0x2D:this.CN=133;break;case 0x2A:this.CN=134;
break;case 0x2F:this.CN=135;break;case 0x3D:this.CN=136;break;case 0x2E:this.CN=
137;break;case 0x2C:this.CN=138;break;case 0x3A:this.CN=139;break;case 0x3B:this.
CN=140;break;default:;}return this;},Initialize:function(Kw,S6){this.CN=Kw;this.
Down=S6;this.DM=0x00;var A1e=Kw-10;var Ato=Kw-105;if((A1e>=0)&&(A1e<=9))this.DM=(
48+A1e)&0xFFFF;if((Ato>=0)&&(Ato<=25))this.DM=(65+Ato)&0xFFFF;if(Kw===131)this.DM=
0x20;if(this.DM===0x00)switch(Kw){case 132:this.DM=0x2B;break;case 133:this.DM=0x2D;
break;case 134:this.DM=0x2A;break;case 135:this.DM=0x2F;break;case 136:this.DM=0x3D;
break;case 137:this.DM=0x2E;break;case 138:this.DM=0x2C;break;case 139:this.DM=0x3A;
break;case 140:this.DM=0x3B;break;default:;}return this;},Bjf:function(BbD){switch(
BbD){case 141:return((this.DM>=0x41)&&(this.DM<=0x5A))||((this.DM>=0x61)&&(this.
DM<=0x7A));case 142:return(((this.DM>=0x41)&&(this.DM<=0x5A))||((this.DM>=0x61)&&(
this.DM<=0x7A)))||((this.DM>=0x30)&&(this.DM<=0x39));case 143:return(this.DM>=0x30
)&&(this.DM<=0x39);case 144:return(((this.DM>=0x41)&&(this.DM<=0x46))||((this.DM>=
0x61)&&(this.DM<=0x66)))||((this.DM>=0x30)&&(this.DM<=0x39));case 145:return this.
DM!==0x00;case 146:return(this.DM===0x00)&&!!this.CN;case 147:return(((this.CN===
6)||(this.CN===7))||(this.CN===4))||(this.CN===5);case 148:return(this.DM!==0x00
)||!!this.CN;default:;}return BbD===this.CN;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.AQ_={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AQ_;},_className:
"Core::LanguageEvent"};C.AuL={Axx:null,LS:A.wf,N5:0,ID:0,Down:false,NC:false,InitializeUp:
function(BG,Oc,Aov,A0Q,Aab){this.Down=false;this.ID=BG;this.N5=Oc;this.LS=Aab;this.
Axx=A0Q;this.NC=Aov;return this;},InitializeDown:function(BG,Oc,Aov,A0Q,Aab){this.
Down=true;this.ID=BG;this.N5=Oc;this.LS=Aab;this.Axx=A0Q;this.NC=Aov;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AuL;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.Axx)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.Ad3={AgN:A.wf,LS:A.wf,N5:0,Jl:
0,NN:A.wf,HY:A.wf,ID:0,Down:false,NC:false,InitializeHold:function(BG,Ak_,AyN,AyO
,Oc,W$,Aab,AyM){this.Down=true;this.ID=BG;this.HY=A.abf(Ak_,W$);this.NN=A.abf(AyN
,W$);this.Jl=AyO;this.N5=Oc;this.LS=Aab;this.AgN=AyM;return this;},InitializeUp:
function(BG,Ak_,AyN,AyO,Oc,W$,Aov,Aab,AyM){this.Down=false;this.ID=BG;this.HY=A.
abf(Ak_,W$);this.NN=A.abf(AyN,W$);this.Jl=AyO;this.N5=Oc;this.NC=Aov;this.LS=Aab;
this.AgN=AyM;return this;},InitializeDown:function(BG,Ak_,Oc,W$,Aov,Aab){this.Down=
true;this.ID=BG;this.HY=A.abf(Ak_,W$);this.NN=A.abf(Ak_,W$);this.Jl=0;this.N5=Oc;
this.NC=Aov;this.LS=Aab;this.AgN=Aab;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Ad3;},_className:"Core::CursorEvent"};C.Aqt={
AgN:A.wf,LS:A.wf,N5:0,Jl:0,DC:A.wf,NN:A.wf,HY:A.wf,ID:0,Initialize:function(BG,Ak_
,AyN,aOffset,AyO,Bxn,W$,Aab,AyM){this.ID=BG;this.HY=A.abf(Ak_,W$);this.NN=A.abf(
AyN,W$);this.DC=aOffset;this.Jl=AyO;this.N5=Bxn;this.LS=Aab;this.AgN=AyM;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Aqt;},_className:
"Core::DragEvent"};C.Y={BW:null,Nt:null,Ej:null,Bt:A.wf,AUC:0,Space:0,AgL:0,Kg:function(
C0,aClip,aOffset,Ci,aBlend){},GetClipping:function(){var B;var Az=C.Eq.GetClipping.
call(this);if(((this.U&0x80000)===0x80000)){var ApU=BF;var X;for(X=this.Ah;!!X&&
!((X.U&0x200)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))ApU=A.wC(ApU,X.GetClipping());
Az=A.wC(Az,ApU);}return Az;},Cy:function(Rn,UV){var B;var Ti=this.U;if((!!this.Ab&&((
this.U&0x80001)===0x80001))&&((UV&0x80000)===0x80000))this.Ab.Bg(this.GetClipping(
));C.Eq.Cy.call(this,Rn,UV);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rn&0x80000)===
0x80000))&&!((Ti&0x80000)===0x80000))this.Ab.Bg(this.GetClipping());},H:function(
E){var B;if(A.aaY(E,this.M))return;var AlN=[(B=this.M)[2]-B[0],B[3]-B[1]];var AKg=[
E[2]-E[0],E[3]-E[1]];var ApQ=!A.aaX(AlN,AKg);var Fp=A.abe(E.slice(0,2),this.M.slice(
0,2));if(!A.aaX(Fp,Cc)&&!ApQ){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Ana(Fp,tmp);}X=X.Ah;}A.pe(this.
Ej,this);}if((ApQ&&(AlN[0]>0))&&(AlN[1]>0)){var Bd=A.abh(this.M,this.Bt);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Er&&(X.Er.
Nv!==this))X.Er=null;if(!X.Er&&((X.PH!==0x14)||!!this.AgL))X.AtG(Bd,this);}X=X.Ah;
}A.pe(this.Ej,this);}C.Eq.H.call(this,E);if(!!this.Ab&&ApQ){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
JC],this);}}},Bfu:function(){var B;if((!this.AgL||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1z=((this.U&0x1000)===0x1000);for(;!!X&&!A1z;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1z=true;if(((X.U&0x200)===
0x200))break;}if(A1z){this.U=this.U&~0x4000;this.Ab.BfF();}},Apz:function(G){var
B;this.BW.Q=null;this.BW.Qm=null;this.BW=null;(B=this.Nt)?B[1].call(B[0],this):null;
},FX:function(E){var B;var Fp=A.abe(E,this.Bt);if(A.aaX(Fp,Cc))return;this.Bt=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Ana(Fp,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bg(this.M);A.pe(
this.Ej,this);},A_r:function(E){var B;if(E<0)E=0;if(E===this.AUC)return;this.AUC=
E;if(!!this.Ab&&!!this.AgL){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.JC],this);}},Bnc:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgL){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.JC],this);}},JN:function(E){var B;if(E===this.AgL)return;
this.AgL=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.JC],this);}},Vm:function(AcO,E0){var Ato=this.Da(0x1);var Rr=this.M;var
U9=A.abe(Ato.slice(0,2),Rr.slice(0,2));var L_=A.abe(Ato.slice(2,4),Rr.slice(2,4)
);var Br=Cc;if((U9[0]>0)&&(L_[0]>U9[0]))Br=[U9[0],Br[1]];else if((U9[0]>0)&&(L_[
0]>0))Br=[L_[0],Br[1]];if((L_[0]<0)&&(U9[0]<L_[0]))Br=[L_[0],Br[1]];else if((L_[
0]<0)&&(U9[0]<0))Br=[U9[0],Br[1]];if((U9[1]>0)&&(L_[1]>U9[1]))Br=[Br[0],U9[1]];else
if((U9[1]>0)&&(L_[1]>0))Br=[Br[0],L_[1]];if((L_[1]<0)&&(U9[1]<L_[1]))Br=[Br[0],L_[
1]];else if((L_[1]<0)&&(U9[1]<0))Br=[Br[0],U9[1]];if(A.aaX(Br,Cc)){(E0)?E0[1].call(
E0[0],this):null;return;}if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.
Qm=null;this.Nt=null;}this.BW=AcO;if(!this.BW){this.FX(A.abe(this.Bt,Br));(E0)?E0[
1].call(E0[0],this):null;}else{this.BW.Ar(false);this.BW.HK(1);this.BW.Q=[this,this.
Anl,this.FX];this.BW.Cw=this.Bt;this.BW.B3=A.abe(this.Bt,Br);this.BW.Qm=[this,this.
Apz];this.BW.AeZ(false);this.BW.Ar(true);this.Nt=E0;}},HC:function(Ag,AcR,AcO,E0
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UN);this.Bfu();var Az=Ag.GetExtent();var Bd=this.M;var LM=A.lb(Az,Bd);if((!AcR&&
!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcR&&A.aaY(LM,Az))){(E0)?E0[1].call(E0[0],this
):null;return;}var Br=Cc;if(Az[2]>Bd[2])Br=[Az[2]-Bd[2],Br[1]];if(Az[3]>Bd[3])Br=[
Br[0],Az[3]-Bd[3]];if(Br[0]>(Az[0]-Bd[0]))Br=[Az[0]-Bd[0],Br[1]];if(Br[1]>(Az[1]-
Bd[1]))Br=[Br[0],Az[1]-Bd[1]];if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.
BW.Qm=null;this.Nt=null;}this.BW=AcO;if(!this.BW){this.FX(A.abe(this.Bt,Br));(E0
)?E0[1].call(E0[0],this):null;}else{this.BW.Ar(false);this.BW.HK(1);this.BW.Q=[this
,this.Anl,this.FX];this.BW.Cw=this.Bt;this.BW.B3=A.abe(this.Bt,Br);this.BW.Qm=[this
,this.Apz];this.BW.AeZ(false);this.BW.Ar(true);this.Nt=E0;}},BiH:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CD=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CD=CD+1;Ag=Ag.AJ;}return CD;
},TK:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IR=0x10000;if(((aFilter&0x10000)===0x10000))IR=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IR||!((B=IR)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Da:function(aFilter){var B;var X=this.Ah;var AE=BF;var IR=0x10000;this.Bfu();if(((
aFilter&0x10000)===0x10000))IR=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IR||!((B=IR)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anl:function(){return this.Bt;},_Init:
function(aArg){C.Eq._Init.call(this,aArg);this.__proto__=C.Y;this.U=0x203;},_Mark:
function(D){var B;C.Eq._Mark.call(this,D);if((B=this.BW)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CL={
Hw:null,BW:null,Ch:null,WC:null,Nt:null,Ej:null,He:null,Tf:-1,Te:0,Jh:-1,Hl:0,Aix:
8,Oj:0,Us:0,AcA:A.wf,GY:-1,Bt:0,Gl:-1,ON:0,GH:24,AY:0,Li:null,NJ:false,AtJ:false
,AUJ:function(Iq,Ob,W_,S7,S8,AhY,O5,Rm,Ly,Lw,Lx){throw new Error(ZV);},Aqr:function(
Iq,AhY,O5,Rm,Ly,Lw,Lx){throw new Error(WU);},AkB:function(Iq,Ob,W_,S7,S8,O5,Rm,Ly
,Lw,Lx){throw new Error(ZW);},DispatchEvent:function(CM){var B;var result=null;if(((
this.Gl>=0)&&(this.Gl<this.AY))&&!this.AV){this.GY=this.Gl;this.Ch=(C.Ch.isPrototypeOf(
B=A._NewObject(this.Li,0))?B:null);if(!!this.B9)this.B9.Ah=this.Ch;else this.B8=
this.Ch;this.Ch.AJ=this.B9;this.B9=this.Ch;this.Ch.Ab=this;this.AcA=[(B=this.M)[
2]-B[0],this.GH];(B=this.He)?B[1].call(B[0],this):null;var B0=(C.O.isPrototypeOf(
B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(CM);else result=this.Ch.GW(CM
);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B8=null;this.B9=this.Ch.AJ;this.Ch.
AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=C.O.DispatchEvent.call(this
,CM);return result;},Ai:function(Ae){var B;if(!this.Li){A.pe(this.Ej,this);return;
}this.AtJ=true;var AAA=0;if(!this.NJ)AAA=this.ON;var FM=this.AlW(-AAA-this.Bt,1);
var GQ=this.AlW(((((B=this.M)[3]-B[1])-AAA)-this.Bt)-1,2);var CD=GQ-FM;if(CD<1)CD=
1;var Ah_=(CD/2)|0;var Ah$=(CD/3)|0;if(!Ah_)Ah_=1;if(!Ah$)Ah$=1;if(FM<this.Hl){FM=
FM-Ah_;GQ=GQ+Ah$;}else if(GQ>this.Jh){FM=FM-Ah$;GQ=GQ+Ah_;}else{FM=this.Hl;GQ=this.
Jh;}if(!this.NJ){if(FM>=this.AY){FM=0;GQ=-1;}else if(GQ<0){FM=0;GQ=-1;}if(GQ>=this.
AY)GQ=this.AY-1;if(FM<0)FM=0;}else if(this.AY<=0){FM=0;GQ=-1;}var AiP=this.Hl;var
AiQ=this.Jh;var Apm=0;var Apn=-1;if(FM>AiP)AiP=FM;if(GQ<AiQ)AiQ=GQ;if(AiP<=AiQ){
while((this.Jh<GQ)&&(this.Hl<AiP)){this.Adt();this.Aza();}while((this.Hl>FM)&&(this.
Jh>AiQ)){this.AAN();this.Ay$();}}else{this.Jh=(this.Jh-this.Hl)+FM;this.Hl=FM;Apm=
this.Hl;Apn=this.Jh;}while(this.Hl<FM)this.Adt();while(this.Jh>GQ)this.AAN();while(
this.Hl>FM)this.Ay$();while(this.Jh<GQ)this.Aza();var Aa=this.B8;var inx=this.Hl;
var pos=[0,(AAA+this.Bt)+this.Jf(inx,0)];var BJ=(B=this.M)[3]-B[1];var Alv=null;
var Bgp=(B=this.M)[2]-B[0];while(!!Aa){var Iv=inx;if(this.NJ){if(Iv<0)Iv=this.AY-(-
Iv%this.AY);if(Iv>0)Iv=Iv%this.AY;}var Adu=((Iv>=this.Te)&&(Iv<=this.Tf))||((inx>=
Apm)&&(inx<=Apn));var Ao5=Aa.GetExtent();var Br=A.abe(pos,Ao5.slice(0,2));if(Adu
)this.Us=this.GH;else this.Us=Ao5[3]-Ao5[1];var A2d=pos[1];var A2e=pos[1]+this.Us;
if(!A.aaX(Br,Cc))Aa.Ana(Br,true);if((Adu&&(A2d<BJ))&&(A2e>0)){this.Ch=Aa;this.GY=
Iv;this.AcA=[Bgp,this.Us];(B=this.He)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Us];}inx=this.Hl;Aa=this.B8;pos=[0,(AAA+this.Bt)+this.Jf(
inx,0)];while(!!Aa){var Iv=inx;if(this.NJ){if(Iv<0)Iv=this.AY-(-Iv%this.AY);if(Iv>
0)Iv=Iv%this.AY;}var Adu=((Iv>=this.Te)&&(Iv<=this.Tf))||((inx>=Apm)&&(inx<=Apn)
);if(Adu)this.Us=this.GH;else this.Us=(B=Aa.GetExtent())[3]-B[1];var A2d=pos[1];
var A2e=pos[1]+this.Us;if(Adu&&!((A2d<BJ)&&(A2e>0))){this.Ch=Aa;this.GY=Iv;this.
AcA=[Bgp,this.Us];(B=this.He)?B[1].call(B[0],this):null;}if(((Iv===this.Gl)&&this.
NJ)&&!!Alv){var Rr=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Rr))>A.aaH(A.lb(Alv.GetExtent(),Rr)))Alv=Aa;}else if(Iv===this.Gl)Alv=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Us];}this.Te=0;this.Tf=-1;this.Ch=null;this.GY=-
1;this.Bb(Alv);this.AtJ=false;A.pe(this.Ej,this);},QB:function(Ag,Gt,aFilter){return null;
},Aqy:function(Ag,aFilter){return null;},TK:function(Ag,aFilter){return null;},ACB:
function(Ag,aFilter){return null;},Da:function(aFilter){return BF;},NK:function(
Kx,FI,Ly,Lw,Lx){throw new Error(WV);},Ahp:function(Ag,J1){throw new Error(ZX);},
Zt:function(Ag){throw new Error(ZY);},JU:function(Ag,P9){throw new Error(UO);},HL:
function(Ag){throw new Error(WW);},ALS:function(Ag,J1){throw new Error(Rf);},J:function(
Ag,P9){throw new Error(ZZ);},Jf:function(G4,A0q){return G4*this.GH;},AlW:function(
E_,A0q){return(E_/this.GH)|0;},AAN:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jh=this.Jh-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Er=null;if(this.Oj<this.Aix){if(!
!this.Hw)this.Hw.AJ=Aa;Aa.Ah=this.Hw;this.Hw=Aa;this.Oj++;}return Aa;},Aza:function(
){var B;var Aa=this.Hw;var Adf=this.Li;var Ady=++this.Jh;if(this.NJ){if(Ady<0)Ady=
this.AY-(-Ady%this.AY);if(Ady>0)Ady=Ady%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adf))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hw===Aa)this.Hw=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adf,0))?B:null);Aa.A3(0x1D);if(!!this.Oj)this.Aix++;
}this.Us=this.GH;this.GY=Ady;this.AcA=[(B=this.M)[2]-B[0],this.Us];this.Ch=Aa;(B=
this.He)?B[1].call(B[0],this):null;this.Ch=null;this.GY=-1;if(!!this.B9)this.B9.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(Ady===this.Gl
)this.Bb(Aa);return Aa;},Adt:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hl=this.Hl+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Er=null;if(this.Oj<this.Aix){if(!!this.Hw
)this.Hw.AJ=Aa;Aa.Ah=this.Hw;this.Hw=Aa;this.Oj++;}return Aa;},Ay$:function(){var
B;var Aa=this.Hw;var Adf=this.Li;var MY=--this.Hl;if(this.NJ){if(MY<0)MY=this.AY-(-
MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Adf)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.Hw===
Aa)this.Hw=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.isPrototypeOf(B=
A._NewObject(Adf,0))?B:null);Aa.A3(0x1D);if(!!this.Oj)this.Aix++;}this.Us=this.GH;
this.GY=MY;this.AcA=[(B=this.M)[2]-B[0],this.Us];this.Ch=Aa;(B=this.He)?B[1].call(
B[0],this):null;this.Ch=null;this.GY=-1;if(!!this.B8)this.B8.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(MY===this.Gl)this.Bb(Aa);return Aa;
},Apz:function(G){var B;this.BW.Q=null;this.BW.Qm=null;this.BW=null;(B=this.Nt)?
B[1].call(B[0],this):null;},BAx:function(G){this.FX(this.WC.DC[1]);},BAy:function(
G){var B;if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.Qm=null;this.BW=
null;}if(!this.NJ){var AE=this.AqF(0,this.AY-1);var Af7=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.ON);if(AE[0]>Af7[0])AE=[].concat(Af7[0],AE.slice(1,4));if(AE[1]>Af7[
1])AE=A.abP(AE,Af7[1]);var Fp=AE[1]-this.M[1];var A2s=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2s>0)A2s=0;this.WC.DC=[0,this.Bt];this.WC.Gh=[0,(this.Bt+A2s)-Fp];this.
WC.FV=[0,this.Bt-Fp];}else{var Fp=32000-(32000%this.GH);this.WC.DC=[0,this.Bt];this.
WC.Gh=[0,this.Bt-Fp];this.WC.FV=[0,this.Bt+Fp];}},ASL:function(E){var B;if(this.
NJ===E)return;this.NJ=E;while(!!this.Adt());this.An();this.Bg([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},AwT:function(E){if(E===this.WC)return;if(!!E&&!!E.AtW){A.ab5(
"%s%*%s",O0,E,Rg);throw new Error(WX);}if(!!this.WC){this.WC.AKs=null;this.WC.AtW=
null;}this.WC=E;if(!!E){E.AKs=[this,this.BAy];E.AtW=[this,this.BAx];}},FX:function(
E){var B;if(this.NJ&&(this.AY>0)){var Hy=this.Jf(this.AY,3);if(E<0)E=Hy-(-E%Hy);
if(E>0)E=E%Hy;if(E>0)E=E-Hy;}if(E===this.Bt)return;this.Bt=E;this.An();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},G0:function(E){if(E<0)E=-1;if(E===this.Gl)return;
this.Gl=E;this.An();},A_e:function(E){var B;if(E<0)E=0;if(E===this.ON)return;this.
ON=E;if(!this.NJ){this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},AeW:function(
E){var B;if(E<1)E=1;if(E===this.GH)return;this.GH=E;while(!!this.Adt());this.An(
);this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jr:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NJ){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.ON+this.Bt)+this.Jf(E,3));AE=A.abP(AE
,(this.ON+this.Bt)+this.Jf(this.AY,3));}else{AE=A.abP(AE,(this.ON+this.Bt)+this.
Jf(E,3));AE=[].concat(AE.slice(0,3),(this.ON+this.Bt)+this.Jf(this.AY,3));}}else
while(!!this.Adt());this.AY=E;this.An();this.Bg(AE);},NX:function(E){var B;if(E===
this.Li)return;this.Li=E;while(!!this.Adt());this.Hw=null;this.Oj=0;this.An();this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiU:function(G4){if(this.AtJ)return null;
if((G4<0)||(G4>=this.AY))return null;if(!this.NJ){if((G4<this.Hl)||(G4>this.Jh))
return null;var X=this.B8;while(G4>this.Hl){X=X.Ah;G4=G4-1;}return X;}else{var MY=
this.Hl;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B8;while(
!!X){if((MY%this.AY)===G4)return X;X=X.Ah;MY=MY+1;}return null;}},ABr:function(AcO
,E0){var B;if(this.NJ){(E0)?E0[1].call(E0[0],this):null;return;}var AJW=this.Bt;
var Bc5=((((B=this.M)[3]-B[1])-this.Bt)-this.ON)-this.Jf(this.AY,3);var Br=0;if(
AJW>0)Br=-AJW;else if(Bc5>0)Br=Bc5;if((Br>0)&&(Br>-AJW))Br=-AJW;if(!Br){(E0)?E0[
1].call(E0[0],this):null;return;}if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;
this.BW.Qm=null;this.Nt=null;}this.BW=AcO;if(!this.BW){this.FX(this.Bt+Br);(E0)?
E0[1].call(E0[0],this):null;}else{this.BW.Ar(false);this.BW.HK(1);this.BW.Q=[this
,this.Anl,this.FX];this.BW.Cw=this.Bt;this.BW.B3=this.Bt+Br;this.BW.Qm=[this,this.
Apz];this.BW.AeZ(false);this.BW.Ar(true);this.Nt=E0;}},HC:function(G4,AcR,AcO,E0
){var B;if((G4<0)||(G4>=this.AY))return;var Az=this.AqF(G4,G4);var Bd=this.M;var
LM=A.lb(Az,Bd);if((!AcR&&!((LM[0]>=LM[2])||(LM[1]>=LM[3])))||(AcR&&A.aaY(LM,Az))
){(E0)?E0[1].call(E0[0],this):null;return;}var Br=0;if(Az[3]>Bd[3])Br=Az[3]-Bd[3
];if(Br>(Az[1]-Bd[1]))Br=Az[1]-Bd[1];if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;
this.BW.Qm=null;this.Nt=null;}this.BW=AcO;if(!this.BW){this.FX(this.Bt-Br);(E0)?
E0[1].call(E0[0],this):null;}else{this.BW.Ar(false);this.BW.HK(1);this.BW.Q=[this
,this.Anl,this.FX];this.BW.Cw=this.Bt;this.BW.B3=this.Bt-Br;this.BW.Qm=[this,this.
Apz];this.BW.AeZ(false);this.BW.Ar(true);this.Nt=E0;}},BiM:function(){return BF;
},AOE:function(){if((this.ON<=0)||this.NJ)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bt);AE=[].concat(AE.slice(0,3),AE[1]+this.ON);return AE;},A6I:function(E_
){if(((this.AY<=0)||(E_[0]<this.M[0]))||(E_[0]>=this.M[2]))return-1;E_=A.abe(E_,
this.M.slice(0,2));if(!this.NJ){var Aa=(E_[1]-this.Bt)-this.ON;if(Aa>0)Aa=this.AlW(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=E_[1]-this.Bt;if(Aa>0)
Aa=this.AlW(Aa,0);if(Aa<0)Aa=this.AlW(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},AqF:function(JZ,L4){if(JZ<0)JZ=0;if(L4>=this.AY)L4=
this.AY-1;if(JZ>L4)return BF;var AE=this.M;var Br=this.Bt;if(this.NJ){var Hy=this.
Jf(this.AY,3);if(Br<0)Br=Hy-(-Br%Hy);if(Br>0)Br=Br%Hy;if(Br>0)Br=Br-Hy;}else Br=
Br+this.ON;AE=[].concat(AE.slice(0,3),(AE[1]+Br)+this.Jf(L4+1,0));AE=A.abP(AE,(AE[
1]+Br)+this.Jf(JZ,0));return AE;},Abv:function(JZ,L4){var B;if(JZ<0)JZ=0;if(JZ>L4
)return;if(this.Te>this.Tf){this.Te=JZ;this.Tf=L4;}else{if(JZ<this.Te)this.Te=JZ;
if(L4>this.Tf)this.Tf=L4;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NJ){
AE=A.abP(AE,(this.ON+this.Bt)+this.Jf(JZ,0));AE=[].concat(AE.slice(0,3),(this.ON+
this.Bt)+this.Jf(L4+1,0));}else if((this.Jf(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Br=this.Bt;var Hy=this.Jf(this.AY,3);if(Br<0)Br=Hy-(-Br%Hy);if(
Br>0)Br=Br%Hy;if(Br>0)Br=Br-Hy;AE=A.abP(AE,Br+this.Jf(JZ,0));AE=[].concat(AE.slice(
0,3),Br+this.Jf(L4+1,0));}this.An();this.Bg(AE);},Anl:function(){return this.Bt;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CL;this.H(WY);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hw
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WC)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.He)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dw={Hw:null
,BW:null,Ch:null,Nt:null,He:null,Tf:-1,Te:0,Jh:-1,Hl:0,Aix:8,Oj:0,SC:0,AcA:A.wf,
GY:-1,Bt:0,Gl:-1,V2:24,AY:0,Li:null,AtJ:false,AUJ:function(Iq,Ob,W_,S7,S8,AhY,O5
,Rm,Ly,Lw,Lx){throw new Error(WZ);},Aqr:function(Iq,AhY,O5,Rm,Ly,Lw,Lx){throw new
Error(W0);},AkB:function(Iq,Ob,W_,S7,S8,O5,Rm,Ly,Lw,Lx){throw new Error(Z0);},DispatchEvent:
function(CM){var B;var result=null;if(((this.Gl>=0)&&(this.Gl<this.AY))&&!this.AV
){this.GY=this.Gl;this.Ch=(C.Ch.isPrototypeOf(B=A._NewObject(this.Li,0))?B:null);
if(!!this.B9)this.B9.Ah=this.Ch;else this.B8=this.Ch;this.Ch.AJ=this.B9;this.B9=
this.Ch;this.Ch.Ab=this;this.AcA=[this.SC,(B=this.M)[3]-B[1]];(B=this.He)?B[1].call(
B[0],this):null;var B0=(C.O.isPrototypeOf(B=this.Ch)?B:null);if(!!B0)result=B0.DispatchEvent(
CM);else result=this.Ch.GW(CM);if(!!this.Ch.AJ)this.Ch.AJ.Ah=null;else this.B8=null;
this.B9=this.Ch.AJ;this.Ch.AJ=null;this.Ch.Ab=null;this.Ch=null;}if(!result)result=
C.O.DispatchEvent.call(this,CM);return result;},Ai:function(Ae){var B;if(!this.Li
)return;this.AtJ=true;var FM=this.AlW(0-this.Bt,1);var GQ=this.AlW((((B=this.M)[
2]-B[0])-this.Bt)-1,2);var CD=GQ-FM;if(CD<1)CD=1;var Ah_=(CD/2)|0;var Ah$=(CD/3)|
0;if(!Ah_)Ah_=1;if(!Ah$)Ah$=1;if(FM<this.Hl){FM=FM-Ah_;GQ=GQ+Ah$;}else if(GQ>this.
Jh){FM=FM-Ah$;GQ=GQ+Ah_;}else{FM=this.Hl;GQ=this.Jh;}if(FM>=this.AY){FM=0;GQ=-1;
}else if(GQ<0){FM=0;GQ=-1;}if(GQ>=this.AY)GQ=this.AY-1;if(FM<0)FM=0;var AiP=this.
Hl;var AiQ=this.Jh;var Apm=0;var Apn=-1;if(FM>AiP)AiP=FM;if(GQ<AiQ)AiQ=GQ;if(AiP<=
AiQ){while((this.Jh<GQ)&&(this.Hl<AiP)){this.Adt();this.Aza();}while((this.Hl>FM
)&&(this.Jh>AiQ)){this.AAN();this.Ay$();}}else{this.Jh=(this.Jh-this.Hl)+FM;this.
Hl=FM;Apm=this.Hl;Apn=this.Jh;}while(this.Hl<FM)this.Adt();while(this.Jh>GQ)this.
AAN();while(this.Hl>FM)this.Ay$();while(this.Jh<GQ)this.Aza();var Aa=this.B8;var
inx=this.Hl;var pos=[this.Bt+this.Jf(inx,0),0];var BX=(B=this.M)[2]-B[0];var Alv=
null;var Bge=(B=this.M)[3]-B[1];while(!!Aa){var Iv=inx;var Adu=((Iv>=this.Te)&&(
Iv<=this.Tf))||((inx>=Apm)&&(inx<=Apn));var Ao5=Aa.GetExtent();var Br=A.abe(pos,
Ao5.slice(0,2));if(Adu)this.SC=this.V2;else this.SC=Ao5[2]-Ao5[0];var A2b=pos[0];
var A2c=pos[0]+this.SC;if(!A.aaX(Br,Cc))Aa.Ana(Br,true);if((Adu&&(A2b<BX))&&(A2c>
0)){this.Ch=Aa;this.GY=Iv;this.AcA=[this.SC,Bge];(B=this.He)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SC,pos[1]];}inx=this.Hl;Aa=this.B8;pos=[
this.Bt+this.Jf(inx,0),0];while(!!Aa){var Iv=inx;var Adu=((Iv>=this.Te)&&(Iv<=this.
Tf))||((inx>=Apm)&&(inx<=Apn));if(Adu)this.SC=this.V2;else this.SC=(B=Aa.GetExtent(
))[2]-B[0];var A2b=pos[0];var A2c=pos[0]+this.SC;if(Adu&&!((A2b<BX)&&(A2c>0))){this.
Ch=Aa;this.GY=Iv;this.AcA=[this.SC,Bge];(B=this.He)?B[1].call(B[0],this):null;}if(
Iv===this.Gl)Alv=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.SC,pos[1]];}this.Te=0;this.
Tf=-1;this.Ch=null;this.GY=-1;this.Bb(Alv);this.AtJ=false;},QB:function(Ag,Gt,aFilter
){return null;},Aqy:function(Ag,aFilter){return null;},TK:function(Ag,aFilter){return null;
},ACB:function(Ag,aFilter){return null;},Da:function(aFilter){return BF;},NK:function(
Kx,FI,Ly,Lw,Lx){throw new Error(W1);},Ahp:function(Ag,J1){throw new Error(W2);},
Zt:function(Ag){throw new Error(S3);},JU:function(Ag,P9){throw new Error(UP);},HL:
function(Ag){throw new Error(Z1);},ALS:function(Ag,J1){throw new Error(AcD);},J:
function(Ag,P9){throw new Error(S4);},Jf:function(G4,A0q){return G4*this.V2;},AlW:
function(E_,A0q){return(E_/this.V2)|0;},AAN:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AV)this.Bb(null);this.Jh=this.Jh-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Er=null;if(this.Oj<this.Aix){if(!
!this.Hw)this.Hw.AJ=Aa;Aa.Ah=this.Hw;this.Hw=Aa;this.Oj++;}return Aa;},Aza:function(
){var B;var Aa=this.Hw;var Adf=this.Li;var Ady=++this.Jh;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Adf))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.Hw===Aa)this.Hw=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{
Aa=(C.Ch.isPrototypeOf(B=A._NewObject(Adf,0))?B:null);Aa.A3(0x1D);if(!!this.Oj)this.
Aix++;}this.SC=this.V2;this.GY=Ady;this.AcA=[this.SC,(B=this.M)[3]-B[1]];this.Ch=
Aa;(B=this.He)?B[1].call(B[0],this):null;this.Ch=null;this.GY=-1;if(!!this.B9)this.
B9.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(Ady===this.
Gl)this.Bb(Aa);return Aa;},Adt:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AV)this.Bb(null);this.Hl=this.Hl+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Er=null;if(this.Oj<this.Aix){if(!!this.Hw
)this.Hw.AJ=Aa;Aa.Ah=this.Hw;this.Hw=Aa;this.Oj++;}return Aa;},Ay$:function(){var
B;var Aa=this.Hw;var Adf=this.Li;var MY=--this.Hl;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Adf))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hw===Aa)this.Hw=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Oj--;}else{Aa=(C.Ch.
isPrototypeOf(B=A._NewObject(Adf,0))?B:null);Aa.A3(0x1D);if(!!this.Oj)this.Aix++;
}this.SC=this.V2;this.GY=MY;this.AcA=[this.SC,(B=this.M)[3]-B[1]];this.Ch=Aa;(B=
this.He)?B[1].call(B[0],this):null;this.Ch=null;this.GY=-1;if(!!this.B8)this.B8.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(MY===this.Gl
)this.Bb(Aa);return Aa;},Apz:function(G){var B;this.BW.Q=null;this.BW.Qm=null;this.
BW=null;(B=this.Nt)?B[1].call(B[0],this):null;},FX:function(E){var B;if(E===this.
Bt)return;this.Bt=E;this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},G0:function(
E){if(E<0)E=-1;if(E===this.Gl)return;this.Gl=E;this.An();},AE8:function(E){var B;
if(E<1)E=1;if(E===this.V2)return;this.V2=E;while(!!this.Adt());this.An();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jr:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Bt+this.Jf(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Bt+this.Jf(E,3));}else{AE=
A.abN(AE,this.Bt+this.Jf(this.AY,3));AE=[].concat(this.Bt+this.Jf(E,3),AE.slice(
1,4));}this.AY=E;this.An();this.Bg(AE);},NX:function(E){var B;if(E===this.Li)return;
this.Li=E;while(!!this.Adt());this.Hw=null;this.Oj=0;this.An();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},BoK:function(Bxo,Bxp){if(!this.BW)return;if(Bxo)this.FX(
this.BW.B3);var A38=this.Nt;this.BW.Ar(false);this.BW.Q=null;this.BW.Qm=null;this.
Nt=null;this.BW=null;if(Bxp)(A38)?A38[1].call(A38[0],this):null;},Bjk:function(){
return!!this.BW;},HC:function(G4,AcR,AcO,E0){var B;if((G4<0)||(G4>=this.AY))return;
var Az=this.AqF(G4,G4);var Bd=this.M;var LM=A.lb(Az,Bd);if((!AcR&&!((LM[0]>=LM[2
])||(LM[1]>=LM[3])))||(AcR&&A.aaY(LM,Az))){(E0)?E0[1].call(E0[0],this):null;return;
}var Br=0;if(Az[2]>Bd[2])Br=Az[2]-Bd[2];if(Br>(Az[0]-Bd[0]))Br=Az[0]-Bd[0];if(!!
this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.Qm=null;this.Nt=null;}this.BW=
AcO;if(!this.BW){this.FX(this.Bt-Br);(E0)?E0[1].call(E0[0],this):null;}else{this.
BW.Ar(false);this.BW.HK(1);this.BW.Q=[this,this.Anl,this.FX];this.BW.Cw=this.Bt;
this.BW.B3=this.Bt-Br;this.BW.Qm=[this,this.Apz];this.BW.AeZ(false);this.BW.Ar(true
);this.Nt=E0;}},AqF:function(JZ,L4){if(JZ<0)JZ=0;if(L4>=this.AY)L4=this.AY-1;if(
JZ>L4)return BF;var AE=this.M;var Br=this.Bt;AE=A.abN(AE,(AE[0]+Br)+this.Jf(L4+1
,0));AE=[].concat((AE[0]+Br)+this.Jf(JZ,0),AE.slice(1,4));return AE;},Abv:function(
JZ,L4){var B;if(JZ<0)JZ=0;if(JZ>L4)return;if(this.Te>this.Tf){this.Te=JZ;this.Tf=
L4;}else{if(JZ<this.Te)this.Te=JZ;if(L4>this.Tf)this.Tf=L4;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bt+this.Jf(JZ,0),AE.slice(1,4));AE=A.abN(
AE,this.Bt+this.Jf(L4+1,0));this.An();this.Bg(AE);},Anl:function(){return this.Bt;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Dw;this.H(WY);
this.Li=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hw
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ch)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.He)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={AR1:null,AEw:null,AvW:null,DZ:null,
Lm:null,BM:null,AKQ:0,Bq:0,ID:0,Bu:0,N5:0,Jl:0,DC:A.wf,NN:A.wf,HY:A.wf,Axg:8,Ae6:
0,A7z:1,Down:false,Yy:false,NC:false,A1G:false,Az7:0,Kg:function(C0,aClip,aOffset
,Ci,aBlend){},GW:function(CM){var B;var BQ=(C.Ad3.isPrototypeOf(CM)?CM:null);var
D1=(C.Aqt.isPrototypeOf(CM)?CM:null);var AJ8=this.Yy;var Aaz;var U6;var AA7;var MV;
var Azt;if(!BQ&&!D1)return null;Aaz=(!!BQ&&BQ.Down)&&!BQ.Jl;U6=(!!BQ&&BQ.Down)&&(
BQ.Jl>0);AA7=(!!BQ&&BQ.Down)&&(BQ.Jl>this.Az7);MV=!!BQ&&!BQ.Down;Azt=!!D1;if(Aaz
)this.Az7=((B=(BQ.NC?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.Ae6&0x20)===0x20
)&&(this.Bq>0))&&(this.Bq<33554432)){var Iu=(C.AuL.isPrototypeOf(CM)?CM:null);if(((
!!Iu&&Iu.Down)&&(Iu.Axx!==this))&&A.wa(this.GetExtent(),this.Ab.A7v(Iu.LS))){this.
AKQ=0x20;this.Bq=this.Bq|67108864;return null;}}if(Aaz){var Apt=0;var Ada;this.Bq=
this.Bq|(1<<BQ.ID);for(Ada=this.Bq&4095;Ada>0;Ada=Ada>>1)if(!!(Ada&1))Apt=Apt+1;
if(Apt===1)this.Bq=(this.Bq|16777216)|(4096<<BQ.ID);}if(MV&&(this.Bq<16777216)){
var Iy=this.Ii();var Jx=null;if(!!Iy){var A30=(!!this.AJ?this.AJ:this.Ab);var A1u=(
!!Iy.Jy?Iy.Jy.C2:null);Jx=Iy.Yb(A.abh(Z2,BQ.LS),BQ.ID,BQ.N5,A1u,A30,0x0);}if(!!Jx
){var P;for(P=0;P<10;P++)if(!!(this.Bq&(1<<P)))Jx.Ch.GW(A._NewObject(C.Ad3,0).InitializeDown(
P,BQ.HY,BQ.N5,Cc,true,BQ.LS));for(P=0;P<10;P++)if(!!(this.Bq&(1<<P)))Jx.Ch.GW(A.
_NewObject(C.Ad3,0).InitializeUp(P,BQ.HY,BQ.HY,0,BQ.N5,Cc,false,BQ.LS,BQ.LS));}}
if(MV)this.Bq=(this.Bq&~(1<<BQ.ID))|33554432;if(AA7&&(this.Bq<16777216))this.Bq=
this.Bq|67108864;if(MV&&BQ.NC)this.Bq=this.Bq|67108864;if(MV&&!(this.Bq&4095))this.
AKQ=0x0;if(MV&&!(this.Bq&16777215))this.Bq=0;if(U6&&(this.Bq>=67108864)){var Iy=
this.Ii();if(!!Iy)Iy.AT9(null,null,this,this.AKQ);}if((U6&&!!(this.Bq&16777216))&&
!!(this.Bq&33554432)){U6=false;MV=true;}if(!!BQ&&!(this.Bq&(4096<<BQ.ID)))return this;
if(!!D1&&!(this.Bq&(4096<<D1.ID)))return this;if(MV&&!(this.Bq&16777216))return this;
if(((Aaz||Azt)||U6)&&((this.Bq<16777216)||(this.Bq>=33554432)))return this;if(MV
)this.Bq=this.Bq&3758100479;if(MV&&!(this.Bq&16777215))this.Bq=0;if(!!BQ){this.Down=
Aaz||U6;this.Yy=this.AQW(BQ.HY);this.NN=BQ.NN;this.HY=BQ.HY;this.DC=Cc;this.Jl=BQ.
Jl;this.N5=BQ.N5;this.NC=BQ.NC;this.ID=BQ.ID;this.Bu=BQ.Bu;if(BQ.Down&&!BQ.Jl)AJ8=
false;}if(!!D1){this.Down=true;this.Yy=this.AQW(D1.HY);this.NN=D1.NN;this.HY=D1.
HY;this.DC=D1.DC;this.Jl=D1.Jl;this.N5=D1.N5;this.ID=D1.ID;this.NC=false;this.Bu=
D1.Bu;}var A1A=this.Down;if(!!D1)(B=this.AR1)?B[1].call(B[0],this):null;if((!!BQ&&
this.Down)&&!this.Jl)(B=this.BM)?B[1].call(B[0],this):null;if((!!BQ&&this.Down)&&(
this.Jl>0))(B=this.DZ)?B[1].call(B[0],this):null;if((this.Down&&this.Yy)&&!AJ8){
this.A1G=true;(B=this.AvW)?B[1].call(B[0],this):null;}if(this.A1G&&(((A1A&&!this.
Yy)&&AJ8)||((!A1A&&this.Yy)&&AJ8))){this.A1G=false;(B=this.AEw)?B[1].call(B[0],this
):null;}if(!!BQ&&!A1A)(B=this.Lm)?B[1].call(B[0],this):null;if(!!this.Ae6){var Ads=
0x0;if(((((this.Ae6&0x10)===0x10)&&!!BQ)&&BQ.Down)&&(BQ.Jl>=1000))Ads=0x10;if((((
this.Ae6&0x1)===0x1)&&!!D1)&&((D1.LS[1]-D1.AgN[1])<=-this.Axg))Ads=0x1;if((((this.
Ae6&0x2)===0x2)&&!!D1)&&((D1.LS[1]-D1.AgN[1])>=this.Axg))Ads=0x2;if((((this.Ae6&
0x4)===0x4)&&!!D1)&&((D1.LS[0]-D1.AgN[0])<=-this.Axg))Ads=0x4;if((((this.Ae6&0x8
)===0x8)&&!!D1)&&((D1.LS[0]-D1.AgN[0])>=this.Axg))Ads=0x8;if(!!Ads){var Iy=this.
Ii();if(!!Iy){this.AKQ=Ads;Iy.AT9(null,this,this,Ads);}}}return this;},Yb:function(
C$,BG,Oc,Aaa,AcU,AcT){var B;if(!!Aaa&&(Aaa!==this))return null;if((Oc<1)||(Oc>this.
A7z))return null;if(this.Bq>=33554432)return null;if((this.Bq>=16777216)&&!(this.
Bq&(4096<<BG)))return null;if(!!(AcT&this.Ae6))return null;if(this.BiZ()){var Az=
A.lb(C$,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qa=A.aaI(C$);
var Fp=Cc;if(Qa[0]<Az[0])Fp=[Az[0]-Qa[0],Fp[1]];if(Qa[0]>=Az[2])Fp=[(Az[2]-Qa[0]
)-1,Fp[1]];if(Qa[1]<Az[1])Fp=[Fp[0],Az[1]-Qa[1]];if(Qa[1]>=Az[3])Fp=[Fp[0],(Az[3
]-Qa[1])-1];return A._NewObject(C.AuM,0).Initialize(this,Fp);}}else{var Hx=A.abi(
9,A.wf,null);var P;Hx.Set(0,A.aaI(C$));Hx.Set(1,Hx.Get(0));Hx.Set(2,Hx.Get(0));Hx.
Set(3,Hx.Get(0));Hx.Set(4,Hx.Get(0));Hx.Set(1,[C$[0],Hx.Get(1)[1]]);Hx.Set(2,[Hx.
Get(2)[0],C$[1]]);Hx.Set(3,[C$[2],Hx.Get(3)[1]]);Hx.Set(4,[Hx.Get(4)[0],C$[3]]);
Hx.Set(5,C$.slice(0,2));Hx.Set(6,[C$[2],C$[1]]);Hx.Set(7,[C$[0],C$[3]]);Hx.Set(8
,C$.slice(2,4));for(P=0;P<9;P=P+1)if(this.AQW(Hx.Get(P)))return A._NewObject(C.AuM
,0).Initialize(this,A.abe(Hx.Get(P),Hx.Get(0)));}return null;},Bm7:function(E){if(
E<1)E=1;this.Axg=E;},AFf:function(E){if(E<1)E=1;this.A7z=E;},Ar:function(E){if(E
)this.Cy(0x100000,0x0);else this.Cy(0x0,0x100000);},_Init:function(aArg){C.Zq._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
Zq._Mark.call(this,D);if((B=this.AR1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AEw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvW)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DZ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Lm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H5={timer:null,AKs:null,AtW:null,AFT:null,Ze:null,Sz:null,Bq:0,AI3:0,Add:5000
,ApP:0,AJ6:A.wf,Ao2:0,AfC:0,ET:0,Al7:0,At$:0,Ao1:0,AfB:0,ES:0,Al6:0,Al4:0,NN:A.wf
,A5O:A.wf,FV:A.wf,Gh:A.wf,DC:A.wf,WE:A.wf,A6v:0.5,A_6:true,AGA:true,ZB:false,Xy:
false,Xz:false,AoL:false,Az7:0,Kg:function(C0,aClip,aOffset,Ci,aBlend){},GW:function(
CM){var B;var BQ=(C.Ad3.isPrototypeOf(CM)?CM:null);var D1=(C.Aqt.isPrototypeOf(CM
)?CM:null);var Iu=(C.AuL.isPrototypeOf(CM)?CM:null);var Aaz;var U6;var AA7;var MV;
var Azt;Aaz=(!!BQ&&BQ.Down)&&!BQ.Jl;U6=(!!BQ&&BQ.Down)&&(BQ.Jl>0);AA7=(!!BQ&&BQ.
Down)&&(BQ.Jl>this.Az7);MV=!!BQ&&!BQ.Down;Azt=!!D1;if(Aaz)this.Az7=((B=(BQ.NC?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(Aaz){var Apt=0;var Ada;this.Bq=this.Bq|(1<<BQ.
ID);for(Ada=this.Bq&4095;Ada>0;Ada=Ada>>1)if(!!(Ada&1))Apt=Apt+1;if(Apt===1)this.
Bq=(this.Bq|16777216)|(4096<<BQ.ID);}if(MV&&(this.Bq<16777216)){var Iy=this.Ii();
var Jx=null;if(!!Iy){var A30=(!!this.AJ?this.AJ:this.Ab);var A1u=(!!Iy.Jy?Iy.Jy.
C2:null);Jx=Iy.Yb(A.abh(Z2,BQ.LS),BQ.ID,BQ.N5,A1u,A30,0x0);}if(!!Jx){var P;for(P=
0;P<10;P++)if(!!(this.Bq&(1<<P)))Jx.Ch.GW(A._NewObject(C.Ad3,0).InitializeDown(P
,BQ.HY,BQ.N5,Cc,true,BQ.LS));for(P=0;P<10;P++)if(!!(this.Bq&(1<<P)))Jx.Ch.GW(A._NewObject(
C.Ad3,0).InitializeUp(P,BQ.HY,BQ.HY,0,BQ.N5,Cc,false,BQ.LS,BQ.LS));}}if(MV)this.
Bq=(this.Bq&~(1<<BQ.ID))|33554432;if(AA7&&(this.Bq<16777216))this.Bq=this.Bq|67108864;
if(MV&&BQ.NC)this.Bq=this.Bq|67108864;if(MV&&!(this.Bq&16777215))this.Bq=0;if(U6&&(
this.Bq>=67108864)){var Iy=this.Ii();if(!!Iy)Iy.AT9(null,null,this,0x0);}if((U6&&
!!(this.Bq&16777216))&&!!(this.Bq&33554432)){U6=false;MV=true;}if(!!BQ&&!(this.Bq&(
4096<<BQ.ID)))return this;if(!!D1&&!(this.Bq&(4096<<D1.ID)))return this;if(MV&&!(
this.Bq&16777216))return this;if(((Aaz||Azt)||U6)&&((this.Bq<16777216)||(this.Bq>=
33554432)))return this;if(MV)this.Bq=this.Bq&3758100479;if(MV&&!(this.Bq&16777215
))this.Bq=0;if(!!Iu&&(Iu.Axx===this))return null;if((!!Iu&&Iu.Down)&&(this.AoL||
!this.ZB))return null;if((!!Iu&&Iu.Down)&&!A.wa(this.M,this.Ab.A7v(Iu.LS)))return null;
if((!!Iu&&!Iu.Down)&&(!this.AoL||(this.AI3!==Iu.ID)))return null;if((!BQ&&!D1)&&
!Iu)return null;if(!!BQ){this.AoL=Aaz||U6;this.AI3=BQ.ID;this.NN=BQ.NN;}if(!!D1)
this.AI3=D1.ID;if(!!Iu){this.AoL=Iu.Down;this.AI3=Iu.ID;}if(!!Iu&&Iu.Down){this.
A31();this.ES=(((Iu.Bu-this.Al4)*0.001)*this.AfB)+this.ES;this.ET=(((Iu.Bu-this.
At$)*0.001)*this.AfC)+this.ET;if(this.Xy)this.ES=0;if(this.Xz)this.ET=0;this.AfB=
0;this.AfC=0;this.Xy=false;this.Xz=false;this.AJ6=this.DC;this.ApP=Iu.Bu;return this;
}if(Aaz){this.A31();this.ES=(((BQ.Bu-this.Al4)*0.001)*this.AfB)+this.ES;this.ET=(((
BQ.Bu-this.At$)*0.001)*this.AfC)+this.ET;if(this.Xy||!this.ZB)this.ES=0;if(this.
Xz||!this.ZB)this.ET=0;this.AfB=0;this.AfC=0;this.Xy=false;this.Xz=false;if(!this.
ZB){this.ZB=true;(B=this.Sz)?B[1].call(B[0],this):null;(B=this.AKs)?B[1].call(B[
0],this):null;}this.AJ6=this.DC;this.ApP=BQ.Bu;}if(!!D1){var G6=A.abe(D1.HY,D1.NN
);var CC=this.DC;if(this.AGA)CC=[this.AJ6[0]+G6[0],CC[1]];CC=[CC[0],this.AJ6[1]+
G6[1]];if(this.A_6){if(CC[0]<this.Gh[0])CC=[this.Gh[0]+(((CC[0]-this.Gh[0])/2)|0
),CC[1]];else if(CC[0]>this.FV[0])CC=[this.FV[0]+(((CC[0]-this.FV[0])/2)|0),CC[1
]];if(CC[1]<this.Gh[1])CC=[CC[0],this.Gh[1]+(((CC[1]-this.Gh[1])/2)|0)];else if(
CC[1]>this.FV[1])CC=[CC[0],this.FV[1]+(((CC[1]-this.FV[1])/2)|0)];}else{if(CC[0]<
this.Gh[0])CC=[this.Gh[0],CC[1]];else if(CC[0]>this.FV[0])CC=[this.FV[0],CC[1]];
if(CC[1]<this.Gh[1])CC=[CC[0],this.Gh[1]];else if(CC[1]>this.FV[1])CC=[CC[0],this.
FV[1]];}if(!A.aaX(CC,this.DC)){this.A5O=A.abe(CC,this.DC);this.DC=CC;(B=this.AtW
)?B[1].call(B[0],this):null;(B=this.AFT)?B[1].call(B[0],this):null;}}if((!!Iu&&!
Iu.Down)&&((Iu.Bu-this.ApP)>=200)){this.ES=0;this.ET=0;}if(U6&&((BQ.Bu-this.ApP)>=
200)){this.ES=0;this.ET=0;}if(!!D1&&(D1.Bu>this.ApP)){var G6=D1.DC;var Bdw=1000/(
D1.Bu-this.ApP);var AiA=0;var AiB;if(this.AGA)AiA=G6[0]*Bdw;AiB=G6[1]*Bdw;if((AiA
*this.ES)<0)this.ES=0;if((AiB*this.ET)<0)this.ET=0;this.ES=(this.ES+AiA)*0.5;this.
ET=(this.ET+AiB)*0.5;this.ApP=D1.Bu;}if(!MV&&!Iu)return this;if(!!BQ&&BQ.NC){this.
ES=0;this.ET=0;}if((this.DC[0]<=this.Gh[0])||(this.DC[0]>=this.FV[0]))this.ES=0;
else if(!this.ES){var EN=this.DC[0];var Fa=this.Gh[0];var EE=this.FV[0];if(EN<Fa
)EE=this.Gh[0];else if(EN>EE)Fa=this.FV[0];else if(this.WE[0]<=1){Fa=EN;EE=EN;}else{
var Adh=(EE-EN)%this.WE[0];EE=(EN-this.WE[0])+Adh;Fa=EN+Adh;if(EE<this.Gh[0])EE=
this.Gh[0];if(Fa>this.FV[0])Fa=this.FV[0];}if((Fa-EN)<=(EN-EE))EN=Fa;else EN=EE;
if(EN!==this.DC[0]){var Je=EN-this.DC[0];if(Je>0)this.ES=Math.sqrt((Je*2)*this.Add
)+20;if(Je<0)this.ES=-Math.sqrt((-Je*2)*this.Add)-20;this.AfB=(400-(this.ES*this.
ES))/(2*Je);this.Ao1=EN;}}else{var BBx=this.ES*this.ES;var Je=BBx/(2*this.Add);var
EN=this.DC[0];if(this.ES>0)EN=EN+(Je|0);if(this.ES<0)EN=EN-(Je|0);if(EN>this.FV[
0])EN=this.FV[0];else if(EN<this.Gh[0])EN=this.Gh[0];var Bf$=EN;var Fa=this.Gh[0
];var EE=this.FV[0];if(EN<Fa)EE=this.Gh[0];else if(EN>EE)Fa=this.FV[0];else if(this.
WE[0]<=1){Fa=EN;EE=EN;}else{var Adh=(EE-EN)%this.WE[0];EE=(EN-this.WE[0])+Adh;Fa=
EN+Adh;if(EE<this.Gh[0])EE=this.Gh[0];if(Fa>this.FV[0])Fa=this.FV[0];}if(this.ES>
0){if(EE<=this.DC[0])EN=Fa;else if((EN-EE)<(Fa-EN))EN=EE;else EN=Fa;}else if(Fa>=
this.DC[0])EN=EE;else if((EN-EE)>(Fa-EN))EN=Fa;else EN=EE;if(EN!==this.DC[0]){Je=
EN-this.DC[0];if(EN!==Bf$){var AiY=EN-Bf$;if(AiY>0)this.ES=this.ES+Math.sqrt((AiY
*2)*this.Add);if(AiY<0)this.ES=this.ES-Math.sqrt((-AiY*2)*this.Add);}if(this.ES>
0)this.ES=this.ES+20;if(this.ES<0)this.ES=this.ES-20;this.AfB=(400-(this.ES*this.
ES))/(2*Je);this.Ao1=EN;}else this.ES=0;}if((this.DC[1]<=this.Gh[1])||(this.DC[1
]>=this.FV[1]))this.ET=0;else if(!this.ET){var EO=this.DC[1];var Fa=this.Gh[1];var
EE=this.FV[1];if(EO<Fa)EE=this.Gh[1];else if(EO>EE)Fa=this.FV[1];else if(this.WE[
1]<=1){Fa=EO;EE=EO;}else{var Adh=(EE-EO)%this.WE[1];EE=(EO-this.WE[1])+Adh;Fa=EO+
Adh;if(EE<this.Gh[1])EE=this.Gh[1];if(Fa>this.FV[1])Fa=this.FV[1];}if((Fa-EO)<=(
EO-EE))EO=Fa;else EO=EE;if(EO!==this.DC[1]){var Je=EO-this.DC[1];if(Je>0)this.ET=
Math.sqrt((Je*2)*this.Add)+20;if(Je<0)this.ET=-Math.sqrt((-Je*2)*this.Add)-20;this.
AfC=(400-(this.ET*this.ET))/(2*Je);this.Ao2=EO;}}else{var BBy=this.ET*this.ET;var
Je=BBy/(2*this.Add);var EO=this.DC[1];if(this.ET>0)EO=EO+(Je|0);if(this.ET<0)EO=
EO-(Je|0);if(EO>this.FV[1])EO=this.FV[1];else if(EO<this.Gh[1])EO=this.Gh[1];var
Bga=EO;var Fa=this.Gh[1];var EE=this.FV[1];if(EO<Fa)EE=this.Gh[1];else if(EO>EE)
Fa=this.FV[1];else if(this.WE[1]<=1){Fa=EO;EE=EO;}else{var Adh=(EE-EO)%this.WE[1
];EE=(EO-this.WE[1])+Adh;Fa=EO+Adh;if(EE<this.Gh[1])EE=this.Gh[1];if(Fa>this.FV[
1])Fa=this.FV[1];}if(this.ET>0){if(EE<=this.DC[1])EO=Fa;else if((EO-EE)<(Fa-EO))
EO=EE;else EO=Fa;}else if(Fa>=this.DC[1])EO=EE;else if((EO-EE)>(Fa-EO))EO=Fa;else
EO=EE;if(EO!==this.DC[1]){Je=EO-this.DC[1];if(EO!==Bga){var AiY=EO-Bga;if(AiY>0)
this.ET=this.ET+Math.sqrt((AiY*2)*this.Add);if(AiY<0)this.ET=this.ET-Math.sqrt((-
AiY*2)*this.Add);}if(this.ET>0)this.ET=this.ET+20;if(this.ET<0)this.ET=this.ET-20;
this.AfC=(400-(this.ET*this.ET))/(2*Je);this.Ao2=EO;}else this.ET=0;}if(!!BQ)this.
Al4=BQ.Bu;if(!!Iu)this.Al4=Iu.Bu;this.At$=this.Al4;this.Al6=this.DC[0];this.Al7=
this.DC[1];this.BBz();return this;},Yb:function(C$,BG,Oc,Aaa,AcU,AcT){var B;if(!
!Aaa&&(Aaa!==this))return null;if(this.Bq>=33554432)return null;if((this.Bq>=16777216
)&&!(this.Bq&(4096<<BG)))return null;if(!this.AGA&&!!(AcT&0xC))return null;var Az=
A.lb(C$,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Qa=A.aaI(C$);var Fp=Cc;
if(Qa[0]<Az[0])Fp=[Az[0]-Qa[0],Fp[1]];if(Qa[0]>=Az[2])Fp=[(Az[2]-Qa[0])-1,Fp[1]];
if(Qa[1]<Az[1])Fp=[Fp[0],Az[1]-Qa[1]];if(Qa[1]>=Az[3])Fp=[Fp[0],(Az[3]-Qa[1])-1];
return A._NewObject(C.AuM,0).Initialize(this,Fp);}return null;},A31:function(){if(
!!this.timer){A.z9([this,this.Mc],this.timer,0);this.timer=null;}},BBz:function(
){this.timer=A._GetAutoObject(A.acl.Ad7);A.zV([this,this.Mc],this.timer,0);},Mc:
function(G){var B;if(!this.timer)return;var Aue=(this.timer.Bu-this.Al4)*0.001;var
Auf=(this.timer.Bu-this.At$)*0.001;var BBJ=Aue*Aue;var BBK=Auf*Auf;var AiA=(this.
AfB*Aue)+this.ES;var AiB=(this.AfC*Auf)+this.ET;var CC=[((((this.AfB*0.5)*BBJ)+(
this.ES*Aue))+this.Al6)|0,((((this.AfC*0.5)*BBK)+(this.ET*Auf))+this.Al7)|0];if(
this.Xy&&(Aue>=0.5)){CC=[this.Ao1,CC[1]];this.ES=0;this.AfB=0;this.Al6=CC[0];this.
Xy=false;}else if(this.Xy){var LJ=1-Math.pow(1-(Aue/0.5),5);CC=[(this.Al6+((this.
Ao1-this.Al6)*LJ))|0,CC[1]];}if(this.Xz&&(Auf>=0.5)){CC=[CC[0],this.Ao2];this.ET=
0;this.AfC=0;this.Al7=CC[1];this.Xz=false;}else if(this.Xz){var LJ=1-Math.pow(1-(
Auf/0.5),5);CC=[CC[0],(this.Al7+((this.Ao2-this.Al7)*LJ))|0];}if(((this.ES>0)&&(
AiA<0))||((this.ES<0)&&(AiA>0))){AiA=0;CC=[this.DC[0],CC[1]];}if(((this.ET>0)&&(
AiB<0))||((this.ET<0)&&(AiB>0))){AiB=0;CC=[CC[0],this.DC[1]];}if(!this.Xy&&(CC[0
]<this.Gh[0])){this.Al6=CC[0];this.Ao1=this.Gh[0];this.Al4=this.timer.Bu;this.Xy=
true;}else if(!this.Xy&&(CC[0]>this.FV[0])){this.Al6=CC[0];this.Ao1=this.FV[0];this.
Al4=this.timer.Bu;this.Xy=true;}if(!this.Xz&&(CC[1]<this.Gh[1])){this.Al7=CC[1];
this.Ao2=this.Gh[1];this.At$=this.timer.Bu;this.Xz=true;}else if(!this.Xz&&(CC[1
]>this.FV[1])){this.Al7=CC[1];this.Ao2=this.FV[1];this.At$=this.timer.Bu;this.Xz=
true;}if(((!this.Xy&&!!this.ES)&&(AiA>-20))&&(AiA<20)){CC=[this.Ao1,CC[1]];this.
ES=0;this.AfB=0;this.Al6=CC[0];}if(((!this.Xz&&!!this.ET)&&(AiB>-20))&&(AiB<20)){
CC=[CC[0],this.Ao2];this.ET=0;this.AfC=0;this.Al7=CC[1];}if(!A.aaX(CC,this.DC)){
this.A5O=A.abe(CC,this.DC);this.DC=CC;(B=this.AtW)?B[1].call(B[0],this):null;(B=
this.AFT)?B[1].call(B[0],this):null;}if(((!this.ES&&!this.ET)&&!this.Xy)&&!this.
Xz){this.A31();this.ZB=false;(B=this.Ze)?B[1].call(B[0],this):null;}},ATg:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.WE=E;},ASN:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6v)return;this.A6v=E;if(E<(1e-007))E=1e-007;this.Add=
E*10000;},_Init:function(aArg){C.Eq._Init.call(this,aArg);this.__proto__=C.H5;this.
U=0x10011B;},_Mark:function(D){var B;C.Eq._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKs)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AtW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFT
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ze)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Sz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BL={Ah:null,Lm:null,BM:null,DZ:null,ApK:
0,Bu:0,A_1:0,Filter:148,CN:0,DM:0,By:true,Down:false,Ab$:false,NE:false,Init:function(
aArg){var B;var C2=(C.O.isPrototypeOf(B=this.I)?B:null);if(!C2)throw new Error(Afp
);this.Ah=C2.AJ$;C2.AJ$=this;},GW:function(CM){var B;if(!!CM&&CM.Bjf(this.Filter
)){this.Down=CM.Down;this.CN=CM.CN;this.DM=CM.DM;this.Bu=CM.Bu;this.NE=false;if(
CM.Down){this.A_1=this.ApK;this.Ab$=this.ApK>0;if(this.Ab$)(B=this.DZ)?B[1].call(
B[0],this):null;else(B=this.BM)?B[1].call(B[0],this):null;if(!this.NE)this.ApK=this.
ApK+1;return!this.NE;}if(!CM.Down){this.Ab$=this.ApK>1;this.A_1=this.ApK-1;this.
ApK=0;(B=this.Lm)?B[1].call(B[0],this):null;return!this.NE;}}return false;},_Init:
function(aArg){this.__proto__=C.BL;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lm)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.AuM={Ch:null,AuO:0,DC:A.wf,Initialize:function(Ag,aOffset){this.Ch=Ag;this.DC=
aOffset;this.AuO=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.AuM;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ch)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7G={Ah:null,C2:null,_Init:
function(aArg){this.__proto__=C.A7G;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.Aq6={Nv:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.Aq6;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nv)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.ADS={AiJ:A.wf,AiI:A.wf,_Init:function(aArg
){C.Aq6._Init.call(this,aArg);this.__proto__=C.ADS;},_className:"Core::LayoutLineContext"
};C.ADT={AAE:A.wf,AAD:A.wf,AiJ:A.wf,AiI:A.wf,_Init:function(aArg){C.Aq6._Init.call(
this,aArg);this.__proto__=C.ADT;},_className:"Core::LayoutQuadContext"};C.ANH={C2:
null,Ah:null,Ru:null,RD:null,Ma:null,ApG:null,_Init:function(aArg){this.__proto__=
C.ANH;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ru)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.ApG)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUO={FJ:null,B9:null,B8:null,BdD:false,
Byc:function(){if(!this.FJ)return;var Pf=this.FJ;this.FJ.Pa=null;this.FJ=null;A.
pe([this,this.A2_],this);Pf.A79(this);},Bz0:function(G){if(!!this.FJ)return;if(!
this.B8)return;this.FJ=this.B8;this.B8=this.B8.Ah;if(!!this.B8)this.B8.AJ=null;else
this.B9=null;this.FJ.Ah=null;this.BdD=true;this.FJ.Sz(this);this.BdD=false;},BAl:
function(G){A.pe([this,this.Bz0],this);},BAk:function(G){A.pe([this,this.BAl],this
);},A2_:function(G){A.pe([this,this.BAk],this);},Bhn:function(Ja){if(!Ja||!Ja.Pa
)return;if(Ja.Pa!==this)throw new Error(Z3);var BgE=false;if(this.FJ===Ja){this.
FJ=null;BgE=true;A.pe([this,this.A2_],this);}else{if(!!Ja.Ah)Ja.Ah.AJ=Ja.AJ;else
this.B9=Ja.AJ;if(!!Ja.AJ)Ja.AJ.Ah=Ja.Ah;else this.B8=Ja.Ah;Ja.AJ=null;Ja.Ah=null;
}Ja.Pa=null;if(BgE)Ja.A78(this);},A_9:function(Ja,A0W){if(!Ja)return;if(!!Ja.Pa)
throw new Error(W3);Ja.Pa=this;if(A0W){Ja.Ah=this.B8;if(!!this.B8)this.B8.AJ=Ja;
else this.B9=Ja;this.B8=Ja;}else{Ja.AJ=this.B9;if(!!this.B9)this.B9.Ah=Ja;else this.
B8=Ja;this.B9=Ja;}if(!this.FJ)A.pe([this,this.A2_],this);},_Init:function(aArg){
this.__proto__=C.AUO;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkN={Pa:null,AJ:null,Ah:
null,A79:function(Ati){},A78:function(Ati){},Sz:function(Ati){this.Amr();},Mk:function(
){if(!!this.Pa&&(this.Pa.FJ===this))this.Pa.Byc();},Amr:function(){if(!!this.Pa)
this.Pa.Bhn(this);},AQS:function(){return!!this.Pa&&(this.Pa.FJ===this);},_Init:
function(aArg){this.__proto__=C.AkN;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Pa)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUM={At:null,Aub:
null,Sz:function(Ati){this.Aub.At=this.At;A.we(this.Aub,0);A.pe([this,this.BzX],
this);},BzX:function(G){this.Aub.At=null;this.Aub=null;this.At=null;this.Mk();},
_Init:function(aArg){C.AkN._Init.call(this,aArg);this.__proto__=C.AUM;},_Mark:function(
D){var B;C.AkN._Mark.call(this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.Axw={_Init:function(){C.AUO._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aho={resource:null,La:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Aho;this.Init(aArg);A.h7++;},_Done:function(){this.La();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mx:null,timer:null,Bu:0,Period:1000,Vt:0,By:false,La:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKA:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PO:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.By)this.AKA(this.Vt,E);},Wp:function(E){if(E<0)E=0;if(E===
this.Vt)return;this.Vt=E;if(this.By)this.AKA(E,this.Period);},Ar:function(E){if(
E===this.By)return;this.By=E;if(E)this.AKA(this.Vt,this.Period);else this.AKA(0,
0);this.Bu=this.Avf();},Avf:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bu=this.Avf();if(!this.
Period)this.Ar(false);(B=this.Mx)?B[1].call(B[0],this):null;},Axu:function(G){this.
Ar(false);},StartTimer:function(G){if(this.By)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.La();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mx)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bu={AUg:0,AvQ:0
,AjM:0,GE:0,Hc:0,Year:0,Bda:function(Afy,A0o){if(A0o)switch(Afy){case 1:return A.
aci.Bjo;case 2:return A.aci.Big;case 3:return A.aci.BjH;case 4:return A.aci.Bg4;
case 5:return A.aci.BjL;case 6:return A.aci.Bjr;case 7:return A.aci.Bjq;case 8:return A.
aci.Bg6;case 9:return A.aci.Boi;case 10:return A.aci.Bj5;case 11:return A.aci.Bj4;
case 12:return A.aci.BhK;default:return A.jV;}else switch(Afy){case 1:return A.aci.
ADM;case 2:return A.aci.ACy;case 3:return A.aci.ADY;case 4:return A.aci.ABw;case
5:return A.aci.AD1;case 6:return A.aci.ADO;case 7:return A.aci.ADN;case 8:return A.
aci.ABE;case 9:return A.aci.AGo;case 10:return A.aci.AEc;case 11:return A.aci.AEa;
case 12:return A.aci.ACi;default:return A.jV;}},Bc_:function(BbI,A0o){if(A0o)switch(
BbI){case 1:return A.aci.BjQ;case 2:return A.aci.BpE;case 3:return A.aci.Bqk;case
4:return A.aci.Bpp;case 5:return A.aci.Bit;case 6:return A.aci.Bob;case 0:return A.
aci.Bpc;default:return A.jV;}else switch(BbI){case 1:return A.aci.BjP;case 2:return A.
aci.BpD;case 3:return A.aci.Bqj;case 4:return A.aci.Bpo;case 5:return A.aci.Bis;
case 6:return A.aci.Boa;case 0:return A.aci.Bpb;default:return A.jV;}},Bc9:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JM:function(){var d=this.GE;var K2=this.Hc;var Df=this.Year-((
K2<=2)?1:0);var Azu=(((Df>=0)?Df:Df-399)/400)|0;var Amc=Df-(Azu*400);var U4=(((((
153*(K2+((K2>2)?-3:9)))+2)/5)|0)+d)-1;var AoY=(((Amc*365)+((Amc/4)|0))-((Amc/100
)|0))+U4;var Qc=((Azu*146097)+AoY)-719468;return(((Qc*86400)+(this.AjM*3600))+(this.
AvQ*60))+this.AUg;},AFB:function(E){var B;E+=62162035200;if(E<0)E=0;var Vg=Math.
trunc(E/86400)|0;var Azu=(((Vg>=0)?Vg:Vg-146096)/146097)|0;var AoY=Vg-(Azu*146097
);var Amc=((((AoY-((AoY/1460)|0))+((AoY/36524)|0))-((AoY/146096)|0))/365)|0;var Df=
Amc+(Azu*400);var U4=AoY-(((365*Amc)+((Amc/4)|0))-((Amc/100)|0));var A2v=(((5*U4
)+2)/153)|0;var d=(U4-((((153*A2v)+2)/5)|0))+1;var K2=A2v+((A2v<10)?3:-9);var BJ=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=Df+((
K2<=2)?1:0);this.Uj(K2);this.Lo(d);this.Ans(BJ+((BJ<0)?24:0));this.Anv(P+((P<0)?
60:0));this.Any(s+((s<0)?60:0));},Zf:function(){if(this.Hc===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hc===4)||(this.Hc===6))||(this.Hc===9))||(this.Hc===11))return 30;else return 31;
},Blf:function(){var B;var U4=this.AbP()-1;var Atx=(6+this.Av2())%7;var Ao0=((371+
Atx)-U4)%7;if(this.Hc===12){var d=this.GE;if((d===31)&&(Atx<3))return 0;if((d===
30)&&(Atx<2))return 0;if((d===29)&&(Atx<1))return 0;}if(Ao0<=3)U4+=Ao0;else U4-=(
7-Ao0);if(U4<0){var d=this.GE;var K2=this.Hc;this.Year--;this.Lo(31);this.Uj(12);
U4=this.AbP()-1;Atx=(6+this.Av2())%7;Ao0=((371+Atx)-U4)%7;if(Ao0<=3)U4+=Ao0;else
U4-=Ao0;this.Year++;this.Lo(d);this.Uj(K2);}return(U4/7)|0;},AbP:function(){var B;
var d=this.GE;var K2=this.Hc;var Df=this.Year;var AfV=((!!!(Df%4)&&(!!(Df%100)||
!!!(Df%400)))?1:0);switch(K2){case 2:d+=31;break;case 3:d+=(59+AfV);break;case 4:
d+=(90+AfV);break;case 5:d+=(120+AfV);break;case 6:d+=(151+AfV);break;case 7:d+=(
181+AfV);break;case 8:d+=(212+AfV);break;case 9:d+=(243+AfV);break;case 10:d+=(273+
AfV);break;case 11:d+=(304+AfV);break;case 12:d+=(334+AfV);break;default:;}return d;
},Av2:function(){var B;var d=this.GE;var K2=this.Hc+((this.Hc>2)?-2:10);var Df=this.
Year-((this.Hc<=2)?1:0);var B4=(Df/100)|0;Df%=100;d+=((((((((26*K2)-2)/10)|0)+Df
)+((Df/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},Any:
function(E){if(E<0)E=0;if(E>59)E=59;this.AUg=E;},Anv:function(E){if(E<0)E=0;if(E>
59)E=59;this.AvQ=E;},Ans:function(E){if(E<0)E=0;if(E>23)E=23;this.AjM=E;},Lo:function(
E){if(E<1)E=1;if(E>31)E=31;this.GE=E;},Uj:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hc=E;},Format:function(Ir){var result=A.jV;var inx=0;while(!!(Ir.charCodeAt(inx)||
0))if((Ir.charCodeAt(inx)||0)===0x25){var Aau=1;inx=inx+1;if((Ir.charCodeAt(inx)||
0)===0x23){inx=inx+1;Aau=0;}switch(Ir.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GE,2*Aau,10);break;case 0x48:result=result+A.abl(this.AjM,2*Aau,10);break;
case 0x49:if(!(this.AjM%12))result=result+Z4;else result=result+A.abl(this.AjM%12
,2*Aau,10);break;case 0x6D:result=result+A.abl(this.Hc,2*Aau,10);break;case 0x4D:
result=result+A.abl(this.AvQ,2*Aau,10);break;case 0x70:if(this.AjM<12)result=result+
A.aci.BgK;else result=result+A.aci.BnB;break;case 0x53:result=result+A.abl(this.
AUg,2*Aau,10);break;case 0x77:result=result+A.abl(this.Av2(),Aau,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*Aau,10);break;case 0x59:result=result+A.abl(
this.Year,4*Aau,10);break;case 0x25:result=result+Z5;break;case 0x6A:result=result+
A.abl(this.AbP(),3*Aau,10);break;case 0x57:result=result+A.abl(this.Blf(),2*Aau,
10);break;case 0x61:result=result+this.Bc_(this.Av2(),true);break;case 0x41:result=
result+this.Bc_(this.Av2(),false);break;case 0x62:result=result+this.Bda(this.Hc
,true);break;case 0x42:result=result+this.Bda(this.Hc,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Ir.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(AcV,Afy,Bwu,BwL,Bw2,Bxj){this.Year=AcV;this.
Uj(Afy);this.Lo(Bwu);this.Ans(BwL);this.Anv(Bw2);this.Any(Bxj);return this;},Initialize:
function(AhZ){this.AFB(AhZ);return this;},BhO:function(AhZ){if(!AhZ)return A._NewObject(
C.AnX,0).Initialize(this.JM());return A._NewObject(C.AnX,0).Initialize(this.JM()-
AhZ.JM());},BoO:function(AyP){if(!AyP)return this;return A._NewObject(C.Bu,0).Initialize(
this.JM()-AyP.JM());},J:function(AyP){if(!AyP)return this;return A._NewObject(C.
Bu,0).Initialize(this.JM()+AyP.JM());},_Init:function(aArg){this.__proto__=C.Bu;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.AnX={AGl:0,AD5:0,ADf:0,Ke:0,JM:function(
){return(((this.Ke*86400)+(this.ADf*3600))+(this.AD5*60))+this.AGl;},AFB:function(
E){var AKN=1;this.Ke=Math.trunc(E/86400)|0;if(E<0){E=-E;AKN=-1;}this.ADf=AKN*(Math.
trunc(E/3600)%24|0);this.AD5=AKN*(Math.trunc(E/60)%60|0);this.AGl=AKN*(E%60|0);}
,Initialize2:function(Bwv,BwM,Bw3,Bxm){this.Ke=Bwv;this.ADf=BwM;this.AD5=Bw3;this.
AGl=Bxm;return this;},Initialize:function(AhZ){this.AFB(AhZ);return this;},_Init:
function(aArg){this.__proto__=C.AnX;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A$v={At:null,Pa:null,Trigger:function(Bwp,A0W){var Pf=A._NewObject(C.AUM,0);
Pf.Aub=this;Pf.At=Bwp;this.Pa.A_9(Pf,A0W);},_Init:function(aArg){this.__proto__=
C.A$v;this.Pa=A._GetAutoObject(C.Axw);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Pa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A$w={JG:null,Event:null,AR2:null,AtP:function(G){var B;if(
!this.Event)return;this.JG=this.Event.At;(B=this.AR2)?B[1].call(B[0],this):null;
this.JG=null;},BlU:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtP],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtP],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A$w;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BFF={Dq:0x1,BCr:0x2,BDy:0x4,BFx:0x8,By:0x10,H4:0x20
,BDz:0x40,BEf:0x80,BDu:0x100,BDV:0x200,BDi:0x400,BET:0x800,Bk:0x1000,BFC:0x2000,
BEC:0x4000,BED:0x8000,Aa9:0x10000,BEB:0x20000,BE4:0x40000,BC$:0x80000,BEL:0x100000
,BC5:0x200000};C.PH={BEU:0x1,BEV:0x2,BCn:0x4,BCo:0x8,BCp:0x10,BCm:0x20};C.AgL={None:
0,BFt:1,BCJ:2,BD0:3,BEY:4,BFu:5,BFv:6,BCK:7,BCL:8,BD2:9,BD1:10,BE0:11,BEZ:12};C.
AuQ={None:0,BFr:1,Left:2,BCH:3,ZG:4,A5k:5,BFs:6,Right:7,BCI:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BEW={BFL:0x1,BFI:0x2,BFJ:0x4,BFK:
0x8,BD4:0x10,BDB:0x20};
C._Init=function(){C.Aj8.__proto__=C.Ch;C.Zq.__proto__=C.Ch;C.Eq.__proto__=C.Ch;C.
O.__proto__=C.Eq;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AQ_.__proto__=
C.Event;C.AuL.__proto__=C.Event;C.Ad3.__proto__=C.Event;C.Aqt.__proto__=C.Event;
C.Y.__proto__=C.Eq;C.CL.__proto__=C.O;C.Dw.__proto__=C.O;C.Bn.__proto__=C.Zq;C.H5.
__proto__=C.Eq;C.ADS.__proto__=C.Aq6;C.ADT.__proto__=C.Aq6;C.AUM.__proto__=C.AkN;
};C._ReInit=function(){var B;if((B=C.Axw._this))B._ReInit(),C.Axw._ReInit.call(B
);};C.DF=function(D){var B;if((B=C.Axw._this)&&(B._cycle!=D))B._Done(C.Axw._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */