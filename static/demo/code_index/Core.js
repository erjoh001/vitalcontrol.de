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
var Cc=[0,0];var BF=[0,0,0,0];var EY="The view does not belong to this group";var
Hi=[1000,740];var I7="The dialog component is already presented";var Ik="The dialog component is actually not presented";
var O0="No fader to perform the fade-in/out operation";var PZ="Trying to use the same fader twice";
var P0="Trying to fade-in/out a group which belongs to another owner";var CO="No view to restack";
var E7="View is not in this group";var Ls="Sibling view does not belong to the group";
var P1="No view to remove";var Ks="No view to add";var N$="View already in a group";
var P2="Recursive invalidate during active update cycle.";var ME=[-8,-8,9,9];var
SY="No group to end the modal state.";var UJ="The group is not modal.";var ZM="No group to obtain the modal state.";
var WN="The group serves already as the \'virtual keyboard\'.";var IJ="The group is already modal.";
var UK="View is not in the same group or it is not embedded within the Outline "+
"Box";var ZN="The method SwitchToDialog() is not available in Core::VerticalList.";
var WO="The method DismissDialog() is not available in Core::VerticalList.";var ZO=
"The method PresentDialog() is not available in Core::VerticalList.";var WQ="The method FadeGroup() is not available in Core::VerticalList.";
var ZP="The method RestackBehind() is not available in Core::VerticalList.";var ZQ=
"The method RestackTop() is not available in Core::VerticalList.";var UL="The method Restack() is not available in Core::VerticalList.";
var WR="The method Remove() is not available in Core::VerticalList.";var Rd="The method AddBehind() is not available in Core::VerticalList.";
var ZR="The method Add() is not available in Core::VerticalList.";var O1="The Slide Touch Handler:";
var Re="is already connected with a view.";var WS="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var WT=[0,0,170,120];var WU="The method SwitchToDialog() is not available in Core::HorizontalList.";
var WV="The method DismissDialog() is not available in Core::HorizontalList.";var
ZS="The method PresentDialog() is not available in Core::HorizontalList.";var WW=
"The method FadeGroup() is not available in Core::HorizontalList.";var WX="The method RestackBehind() is not available in Core::HorizontalList.";
var SZ="The method RestackTop() is not available in Core::HorizontalList.";var ZT=
"The method Restack() is not available in Core::HorizontalList.";var ZU="The method Remove() is not available in Core::HorizontalList.";
var Acu="The method AddBehind() is not available in Core::HorizontalList.";var UM=
"The method Add() is not available in Core::HorizontalList.";var ZV=[0,0,1,1];var
Afk="The KeyPressHandler is embedded within an object not being derived "+"from Core::Group.";
var ZW="Trying to cancel a task not belonging to this queue!";var WY="Trying to enqueue a task twice!";
var ZX="12";var ZY="%";
C.Cg={Ah:null,AJ:null,Ab:null,Eq:null,U:0x103,JP:0,PG:0x14,Atr:function(BH,AhS){}
,ArB:function(E){if(this.JP===E)return;this.JP=E;if(!!this.Ab){var AiS=this.Ah;var
G5=0;while(!!AiS&&(E>AiS.JP)){AiS=AiS.Ah;G5=G5+1;}AiS=this.AJ;while(!!AiS&&(E<AiS.
JP)){AiS=AiS.AJ;G5=G5-1;}if(!!G5)this.Ab.JO(this,G5);}},A3:function(E){var B;var
G5=E^this.PG;if(!G5)return;this.PG=E;if(!!this.Eq&&!((this.U&0x400)===0x400)){this.
Ab.U=this.Ab.U|0x5000;A.pe([B=this.Ab,B.Jy],this);this.Ab.Bg([0,0,(B=this.Ab.M)[
2]-B[0],B[3]-B[1]]);}if(!!this.Eq&&((this.U&0x400)===0x400)){this.Eq.Nt.U=this.Eq.
Nt.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.Jy],this);}},Ie:function(
){var B0=this.Ab;while(!!B0){var It=(C.Root.isPrototypeOf(B0)?B0:null);if(!!It)return It;
B0=B0.Ab;}return null;},Ka:function(CZ,aClip,aOffset,Ch,aBlend){},GetClipping:function(
){return this.GetExtent();},GT:function(CM){return null;},X6:function(C$,BG,Od,Z4
,AcN,AcM){return null;},Aud:function(C$){return C$;},Aun:function(BH,MI){return Cc;
},Am3:function(aOffset,As0){},GetExtent:function(){return BF;},Cw:function(Rk,UR
){var B;if(((this.U&0x200)===0x200))Rk=Rk&~0x400;var A2h=(this.U&~UR)|Rk;var Xg=
A2h^this.U;this.U=A2h;if(!!this.Ab&&!!(Xg&0x14)){var Bcx=((this.U&0x14)===0x14);
if(Bcx&&!this.Ab.AW)this.Ab.Bb(this);if(!Bcx&&(this.Ab.AW===this))this.Ab.Bb(this.
Ab.ACh(this,0x14));}if(!!this.Ab&&!!(Xg&0x403))this.Ab.Bg(this.GetClipping());if(((
!!this.Eq&&!!this.Ab)&&((A2h&0x400)===0x400))&&((Xg&0x1)===0x1)){this.U=this.U|0x800;
this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.Jy],this);}if(!!this.Ab&&((Xg&0x400
)===0x400)){this.Eq=null;this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.Jy],this);}if(((((Xg&0x100000)===0x100000)&&((UR&0x100000)===0x100000)
)&&((this.U&0x10)===0x10))&&!((this.U&0x200080)===0x200080))this.Cw(0x0,0x10);if(((((
Xg&0x100000)===0x100000)&&((Rk&0x100000)===0x100000))&&!((this.U&0x10)===0x10))&&(
!((this.U&0x200000)===0x200000)||((!((this.U&0x80)===0x80)&&!!this.Ab)&&((this.Ab.
U&0x10)===0x10))))this.Cw(0x10,0x0);if(((((Xg&0x200000)===0x200000)&&((UR&0x200000
)===0x200000))&&!((this.U&0x10)===0x10))&&((this.U&0x100000)===0x100000))this.Cw(
0x10,0x0);if((((((Xg&0x200000)===0x200000)&&((Rk&0x200000)===0x200000))&&((this.
U&0x100010)===0x100010))&&!((this.U&0x80)===0x80))&&((!!this.Ab&&!((this.Ab.U&0x10
)===0x10))||((((this.U&0x10000)===0x10000)&&!!this.Ab)&&(this.Ab.G6.C1!==this)))
)this.Cw(0x0,0x10);},_Init:function(aArg){this.__proto__=C.Cg;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ab)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};C.Aj2={Ex:A.wf,Eo:A.wf
,Atr:function(BH,AhS){var At=A._NewObject(C.ADA,0);this.Eq=null;At.extent=this.getExtent(
);At.Bd=BH;At.Nt=AhS;At.AiE=this.Eo;At.AiF=this.Ex;this.Eq=At;},Aun:function(BH,
MI){var B;var EQ=this.PG;var At=(C.ADA.isPrototypeOf(B=this.Eq)?B:null);var x1=At.
extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.extent[3];var J0=[BH[
2]-BH[0],BH[3]-BH[1]];var BX=x2-x1;var BJ=y2-y1;var tmp;if(!MI){var Nw=[(B=At.Bd
)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(Nw[0]!==J0[0]){var HO=((EQ&
0x4)===0x4);var HP=((EQ&0x8)===0x8);var Qm=((EQ&0x1)===0x1);if(!HO&&(Qm||!HP))x1=((
x1*J0[0])/Nw[0])|0;if(!HP&&(Qm||!HO)){x2=x2-At.Bd[0];x2=((x2*J0[0])/Nw[0])|0;x2=
x2-J0[0];}else x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];if(!Qm){if(HO&&!HP)x2=x1+BX;
else if(!HO&&HP)x1=x2-BX;else{x1=x1+((((x2-x1)-BX)/2)|0);x2=x1+BX;}}}else{x2=x2-
At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(Nw[1]!==J0[1]){var HQ=((EQ&0x10)===0x10);var
HN=((EQ&0x20)===0x20);var Qn=((EQ&0x2)===0x2);if(!HQ&&(Qn||!HN))y1=((y1*J0[1])/Nw[
1])|0;if(!HN&&(Qn||!HQ)){y2=y2-At.Bd[1];y2=((y2*J0[1])/Nw[1])|0;y2=y2-J0[1];}else
y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qn){if(HQ&&!HN)y2=y1+BJ;else if(!HQ&&
HN)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=y1+BJ;}}}else{y2=y2-At.Bd[3];y1=y1+
BH[1];y2=y2+BH[3];}}else{switch(MI){case 3:{x1=BH[0];x2=x1+BX;}break;case 4:{x2=
BH[2];x1=x2-BX;}break;case 1:{y1=BH[1];y2=y1+BJ;}break;case 2:{y2=BH[3];y1=y2-BJ;
}break;default:;}if((MI===3)||(MI===4)){var HQ=((EQ&0x10)===0x10);var HN=((EQ&0x20
)===0x20);var Qn=((EQ&0x2)===0x2);if(Qn){y1=BH[1];y2=BH[3];}else if(HQ&&!HN){y1=
BH[1];y2=y1+BJ;}else if(HN&&!HQ){y2=BH[3];y1=y2-BJ;}else{y1=BH[1]+((((BH[3]-BH[1
])-BJ)/2)|0);y2=y1+BJ;}}if((MI===1)||(MI===2)){var HO=((EQ&0x4)===0x4);var HP=((
EQ&0x8)===0x8);var Qm=((EQ&0x1)===0x1);if(Qm){x1=BH[0];x2=BH[2];}else if(HO&&!HP
){x1=BH[0];x2=x1+BX;}else if(HP&&!HO){x2=BH[2];x1=x2-BX;}else{x1=BH[0]+((((BH[2]-
BH[0])-BX)/2)|0);x2=x1+BX;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BX=x2-x1;BJ=y2-y1;if(
At.AiF[0]<At.AiE[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(At.AiF[1]<At.AiE[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.U&0x100)===0x100
)){this.Eo=[x1,y1];this.Ex=[x2,y2];}else{this.DY([x1,y1]);this.DI([x2,y2]);this.
Eq=At;}return[BX,BJ];},Am3:function(aOffset,As0){if(As0){this.Eo=A.abf(this.Eo,aOffset
);this.Ex=A.abf(this.Ex,aOffset);}else{this.DY(A.abf(this.Eo,aOffset));this.DI(A.
abf(this.Ex,aOffset));}},GetExtent:function(){if(!!this.Eq&&this.Eq.isEmpty)return BF;
return this.getExtent();},getExtent:function(){var x1=this.Eo[0];var y1=this.Eo[
1];var x2=this.Ex[0];var y2=this.Ex[1];var BX=x2-x1;var BJ=y2-y1;var tmp;if(BX<0
)BX=-BX;if(BJ<0)BJ=-BJ;if(BX>=BJ){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(BJ>=BX){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DI:function(E){var B;if(A.aaX(E,this.
Ex))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.
Eq=null;this.Ex=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.Jy],this);}},DY:function(
E){var B;if(A.aaX(E,this.Eo))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(
this.GetClipping());this.Eq=null;this.Eo=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.Jy],this);}},_Init:function(aArg){C.Cg._Init.call(this,aArg);this.__proto__=C.
Aj2;},_className:"Core::LineView"};C.Zi={Kn:A.wf,Mx:A.wf,Ex:A.wf,Eo:A.wf,Atr:function(
BH,AhS){var At=A._NewObject(C.ADB,0);this.Eq=null;At.extent=this.GetExtent();At.
Bd=BH;At.Nt=AhS;At.AiE=this.Eo;At.AiF=this.Ex;At.AAj=this.Mx;At.AAk=this.Kn;this.
Eq=At;},Aun:function(BH,MI){var B;var EQ=this.PG;var At=(C.ADB.isPrototypeOf(B=this.
Eq)?B:null);var x1=At.extent[0];var y1=At.extent[1];var x2=At.extent[2];var y2=At.
extent[3];var J0=[BH[2]-BH[0],BH[3]-BH[1]];var BX=x2-x1;var BJ=y2-y1;if(!MI){var
Nw=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];if(Nw[0]!==J0[0]){
var HO=((EQ&0x4)===0x4);var HP=((EQ&0x8)===0x8);var Qm=((EQ&0x1)===0x1);if(!HO&&(
Qm||!HP))x1=((x1*J0[0])/Nw[0])|0;if(!HP&&(Qm||!HO)){x2=x2-At.Bd[0];x2=((x2*J0[0]
)/Nw[0])|0;x2=x2-J0[0];}else x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];if(!Qm){if(HO&&
!HP)x2=x1+BX;else if(!HO&&HP)x1=x2-BX;else{x1=x1+((((x2-x1)-BX)/2)|0);x2=x1+BX;}
}}else{x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(Nw[1]!==J0[1]){var HQ=((EQ&0x10
)===0x10);var HN=((EQ&0x20)===0x20);var Qn=((EQ&0x2)===0x2);if(!HQ&&(Qn||!HN))y1=((
y1*J0[1])/Nw[1])|0;if(!HN&&(Qn||!HQ)){y2=y2-At.Bd[1];y2=((y2*J0[1])/Nw[1])|0;y2=
y2-J0[1];}else y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qn){if(HQ&&!HN)y2=y1+BJ;
else if(!HQ&&HN)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=y1+BJ;}}}else{y2=y2-
At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MI){case 3:{x1=BH[0];x2=x1+BX;}break;
case 4:{x2=BH[2];x1=x2-BX;}break;case 1:{y1=BH[1];y2=y1+BJ;}break;case 2:{y2=BH[
3];y1=y2-BJ;}break;default:;}if((MI===3)||(MI===4)){var HQ=((EQ&0x10)===0x10);var
HN=((EQ&0x20)===0x20);var Qn=((EQ&0x2)===0x2);if(Qn){y1=BH[1];y2=BH[3];}else if(
HQ&&!HN){y1=BH[1];y2=y1+BJ;}else if(HN&&!HQ){y2=BH[3];y1=y2-BJ;}else{y1=BH[1]+((((
BH[3]-BH[1])-BJ)/2)|0);y2=y1+BJ;}}if((MI===1)||(MI===2)){var HO=((EQ&0x4)===0x4);
var HP=((EQ&0x8)===0x8);var Qm=((EQ&0x1)===0x1);if(Qm){x1=BH[0];x2=BH[2];}else if(
HO&&!HP){x1=BH[0];x2=x1+BX;}else if(HP&&!HO){x2=BH[2];x1=x2-BX;}else{x1=BH[0]+((((
BH[2]-BH[0])-BX)/2)|0);x2=x1+BX;}}}At.isEmpty=(x1>=x2)||(y1>=y2);BX=(x2-x1)-1;BJ=(
y2-y1)-1;var Aih=At.extent[0];var Aij=At.extent[1];var AfK=(At.extent[2]-Aih)-1;
var AfJ=(At.extent[3]-Aij)-1;if(!AfK)AfK=1;if(!AfJ)AfJ=1;if(((this.U&0x100)===0x100
)){this.Eo=[x1+((((At.AiE[0]-Aih)*BX)/AfK)|0),y1+((((At.AiE[1]-Aij)*BJ)/AfJ)|0)];
this.Ex=[x1+((((At.AiF[0]-Aih)*BX)/AfK)|0),y1+((((At.AiF[1]-Aij)*BJ)/AfJ)|0)];this.
Mx=[x1+((((At.AAj[0]-Aih)*BX)/AfK)|0),y1+((((At.AAj[1]-Aij)*BJ)/AfJ)|0)];this.Kn=[
x1+((((At.AAk[0]-Aih)*BX)/AfK)|0),y1+((((At.AAk[1]-Aij)*BJ)/AfJ)|0)];}else{this.
DY([x1+((((At.AiE[0]-Aih)*BX)/AfK)|0),y1+((((At.AiE[1]-Aij)*BJ)/AfJ)|0)]);this.DI([
x1+((((At.AiF[0]-Aih)*BX)/AfK)|0),y1+((((At.AiF[1]-Aij)*BJ)/AfJ)|0)]);this.Ki([x1+((((
At.AAj[0]-Aih)*BX)/AfK)|0),y1+((((At.AAj[1]-Aij)*BJ)/AfJ)|0)]);this.Kj([x1+((((At.
AAk[0]-Aih)*BX)/AfK)|0),y1+((((At.AAk[1]-Aij)*BJ)/AfJ)|0)]);this.Eq=At;}return[BX+
1,BJ+1];},Am3:function(aOffset,As0){if(As0){this.Eo=A.abf(this.Eo,aOffset);this.
Ex=A.abf(this.Ex,aOffset);this.Mx=A.abf(this.Mx,aOffset);this.Kn=A.abf(this.Kn,aOffset
);}else{this.DY(A.abf(this.Eo,aOffset));this.DI(A.abf(this.Ex,aOffset));this.Ki(
A.abf(this.Mx,aOffset));this.Kj(A.abf(this.Kn,aOffset));}},GetExtent:function(){
if(!!this.Eq&&this.Eq.isEmpty)return BF;var x1=this.Eo[0];var y1=this.Eo[1];var x2=
this.Mx[0];var y2=this.Mx[1];if((((this.Kn[0]!==x1)||(this.Ex[1]!==y1))||(this.Ex[
0]!==x2))||(this.Kn[1]!==y2)){if(this.Ex[0]<x1)x1=this.Ex[0];if(this.Mx[0]<x1)x1=
this.Mx[0];if(this.Kn[0]<x1)x1=this.Kn[0];if(this.Ex[1]<y1)y1=this.Ex[1];if(this.
Mx[1]<y1)y1=this.Mx[1];if(this.Kn[1]<y1)y1=this.Kn[1];if(this.Eo[0]>x2)x2=this.Eo[
0];if(this.Ex[0]>x2)x2=this.Ex[0];if(this.Kn[0]>x2)x2=this.Kn[0];if(this.Eo[1]>y2
)y2=this.Eo[1];if(this.Ex[1]>y2)y2=this.Ex[1];if(this.Kn[1]>y2)y2=this.Kn[1];}else{
var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1
,y1,x2+1,y2+1];},Kj:function(E){var B;if(A.aaX(E,this.Kn))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.Eq=null;this.Kn=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.Jy],this);}},Ki:function(E){var B;if(A.aaX(E,
this.Mx))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping()
);this.Eq=null;this.Mx=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping(
));if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.
U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.Jy],this);}},DI:function(
E){var B;if(A.aaX(E,this.Ex))return;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(
this.GetClipping());this.Eq=null;this.Ex=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.
Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400))&&!((this.Ab.U&
0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab
,B.Jy],this);}},DY:function(E){var B;if(A.aaX(E,this.Eo))return;if(!!this.Ab&&((
this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());this.Eq=null;this.Eo=E;if(!!this.
Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&
0x400)===0x400))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=
this.Ab.U|0x4000;A.pe([B=this.Ab,B.Jy],this);}},AQF:function(KW){var Hv=A.abi(4,
A.wf,null);var P=0;var H_=3;var A1P=false;var A1Q=false;Hv.Set(0,this.Eo);Hv.Set(
1,this.Ex);Hv.Set(2,this.Mx);Hv.Set(3,this.Kn);while(P<4){var Bf6=Hv.Get(P)[0];var
AKY=Hv.Get(P)[1];var BBD=Hv.Get(H_)[0];var A33=Hv.Get(H_)[1];if(((AKY>KW[1])!==(
A33>KW[1]))||((AKY<KW[1])!==(A33<KW[1]))){var Ej=((((BBD-Bf6)*(KW[1]-AKY))/(A33-
AKY))|0)+Bf6;if(KW[0]>Ej)A1P=!A1P;if(KW[0]<Ej)A1Q=!A1Q;}H_=P;P=P+1;}return A1P||
A1Q;},Biq:function(){return((((this.Eo[0]===this.Kn[0])&&(this.Ex[0]===this.Mx[0
]))&&(this.Eo[1]===this.Ex[1]))&&(this.Mx[1]===this.Kn[1]))||((((this.Eo[0]===this.
Ex[0])&&(this.Mx[0]===this.Kn[0]))&&(this.Eo[1]===this.Kn[1]))&&(this.Ex[1]===this.
Mx[1]));},_Init:function(aArg){C.Cg._Init.call(this,aArg);this.__proto__=C.Zi;},
_className:"Core::QuadView"};C.Ep={M:A.wg,Atr:function(BH,AhS){var At=A._NewObject(
C.AqV,0);At.extent=this.M;At.Bd=BH;At.Nt=AhS;this.Eq=At;},Aun:function(BH,MI){var
B;var EQ=this.PG;var At=this.Eq;var x1=At.extent[0];var y1=At.extent[1];var x2=At.
extent[2];var y2=At.extent[3];var J0=[BH[2]-BH[0],BH[3]-BH[1]];var BX=x2-x1;var BJ=
y2-y1;if(!MI){var Nw=[(B=At.Bd)[2]-B[0],B[3]-B[1]];x1=x1-At.Bd[0];y1=y1-At.Bd[1];
if(Nw[0]!==J0[0]){var HO=((EQ&0x4)===0x4);var HP=((EQ&0x8)===0x8);var Qm=((EQ&0x1
)===0x1);if(!HO&&(Qm||!HP))x1=((x1*J0[0])/Nw[0])|0;if(!HP&&(Qm||!HO)){x2=x2-At.Bd[
0];x2=((x2*J0[0])/Nw[0])|0;x2=x2-J0[0];}else x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[
2];if(!Qm){if(HO&&!HP)x2=x1+BX;else if(!HO&&HP)x1=x2-BX;else{x1=x1+((((x2-x1)-BX
)/2)|0);x2=x1+BX;}}}else{x2=x2-At.Bd[2];x1=x1+BH[0];x2=x2+BH[2];}if(Nw[1]!==J0[1
]){var HQ=((EQ&0x10)===0x10);var HN=((EQ&0x20)===0x20);var Qn=((EQ&0x2)===0x2);if(
!HQ&&(Qn||!HN))y1=((y1*J0[1])/Nw[1])|0;if(!HN&&(Qn||!HQ)){y2=y2-At.Bd[1];y2=((y2
*J0[1])/Nw[1])|0;y2=y2-J0[1];}else y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];if(!Qn
){if(HQ&&!HN)y2=y1+BJ;else if(!HQ&&HN)y1=y2-BJ;else{y1=y1+((((y2-y1)-BJ)/2)|0);y2=
y1+BJ;}}}else{y2=y2-At.Bd[3];y1=y1+BH[1];y2=y2+BH[3];}}else{switch(MI){case 3:{x1=
BH[0];x2=x1+BX;}break;case 4:{x2=BH[2];x1=x2-BX;}break;case 1:{y1=BH[1];y2=y1+BJ;
}break;case 2:{y2=BH[3];y1=y2-BJ;}break;default:;}if((MI===3)||(MI===4)){var HQ=((
EQ&0x10)===0x10);var HN=((EQ&0x20)===0x20);var Qn=((EQ&0x2)===0x2);if(Qn){y1=BH[
1];y2=BH[3];}else if(HQ&&!HN){y1=BH[1];y2=y1+BJ;}else if(HN&&!HQ){y2=BH[3];y1=y2-
BJ;}else{y1=BH[1]+((((BH[3]-BH[1])-BJ)/2)|0);y2=y1+BJ;}}if((MI===1)||(MI===2)){var
HO=((EQ&0x4)===0x4);var HP=((EQ&0x8)===0x8);var Qm=((EQ&0x1)===0x1);if(Qm){x1=BH[
0];x2=BH[2];}else if(HO&&!HP){x1=BH[0];x2=x1+BX;}else if(HP&&!HO){x2=BH[2];x1=x2-
BX;}else{x1=BH[0]+((((BH[2]-BH[0])-BX)/2)|0);x2=x1+BX;}}}At.isEmpty=(x1>=x2)||(y1>=
y2);if(((this.U&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);
this.Eq=At;}return[x2-x1,y2-y1];},Am3:function(aOffset,As0){if(As0)this.M=A.abh(
this.M,aOffset);else this.H(A.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},H:function(E){var B;if(A.aaY(E,this.M))return;if(!!this.Ab&&((this.U&0x1)===
0x1))this.Ab.Bg(this.GetClipping());this.Eq=null;this.M=E;if(!!this.Ab&&((this.U&
0x1)===0x1))this.Ab.Bg(this.GetClipping());if((!!this.Ab&&((this.U&0x400)===0x400
))&&!((this.Ab.U&0x2000)===0x2000)){this.U=this.U|0x800;this.Ab.U=this.Ab.U|0x4000;
A.pe([B=this.Ab,B.Jy],this);}},_Init:function(aArg){C.Cg._Init.call(this,aArg);this.
__proto__=C.Ep;},_className:"Core::RectView"};C.O={B8:null,B9:null,AJV:null,Fv:null
,G6:null,Xh:null,Apx:null,AW:null,G0:255,Azb:0,Aze:0,Azd:0,Azc:0,Init:function(aArg
){this.An();},Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;Ch=((Ch+1)*this.G0)>>
8;aBlend=aBlend&&((this.U&0x2)===0x2);if(!this.Fv||(CZ.C1===this))this.Bcn(CZ,aClip
,A.abf(aOffset,this.M.slice(0,2)),Ch,aBlend);else{var B4=255|(255<<8)|(255<<16)|((
Ch&0xFF)<<24);this.Fv.Update();CZ.A5m(aClip,this.Fv,0,A.abh(this.M,aOffset),Cc,B4
,B4,B4,B4,aBlend);}},GetClipping:function(){var B;var Az=this.M;if(!!this.Fv)return Az;
Az=[].concat(Az[0]-this.Azc,Az.slice(1,4));Az=A.abP(Az,Az[1]-this.Aze);Az=A.abN(
Az,Az[2]+this.Azd);Az=[].concat(Az.slice(0,3),Az[3]+this.Azb);if(((this.U&0x80000
)===0x80000)){var ApK=BF;var X;for(X=this.B8;!!X;X=X.Ah)if(((X.U&0x1)===0x1))ApK=
A.wC(ApK,X.GetClipping());Az=A.wC(Az,A.abh(ApK,this.M.slice(0,2)));}return Az;},
X6:function(C$,BG,Od,Z4,AcN,AcM){var B;var X=this.B9;var Ao1=null;var AE=BF;var J1=
null;var A19=!!this.Xh&&(!!this.Xh.FI||!!this.Xh.B8);if(((B=A.lb(C$,this.M))[0]>=
B[2])||(B[1]>=B[3]))return null;C$=A.abg(C$,this.M.slice(0,2));if(!!AcN){X=AcN;while(
!!X&&(X.Ab!==this))X=X.Ab;}while(!!X){if(((X.U&0x400)===0x400)&&!J1){J1=X.AJ;while(
!!J1&&!((J1.U&0x200)===0x200))J1=J1.AJ;if(!!J1)AE=A.lb(C$,J1.GetExtent());else AE=
BF;}if(J1===X){J1=null;AE=BF;}if((!!Z4&&!!(C.O.isPrototypeOf(X)?X:null))||((((((
X.U&0x8)===0x8)&&((X.U&0x10)===0x10))&&!((X.U&0x40000)===0x40000))&&!((X.U&0x20000
)===0x20000))&&(!((X.U&0x10000)===0x10000)||((this.G6.C1===X)&&!A19)))){var extent=
X.GetExtent();var AJl=Z4;var AoL=null;if(AJl===X)AJl=null;if(((X.U&0x400)===0x400
)){if(!(((B=A.lb(extent,AE))[0]>=B[2])||(B[1]>=B[3])))AoL=X.X6(AE,BG,Od,AJl,AcN,
AcM);}else if(!(((B=A.lb(extent,C$))[0]>=B[2])||(B[1]>=B[3]))||(Z4===X))AoL=X.X6(
C$,BG,Od,AJl,AcN,AcM);X=X.AJ;if(!!AoL){if(!Ao1||((AoL.Auz<Ao1.Auz)&&(AoL.Auz>=0)
))Ao1=AoL;if(!AoL.Auz)X=null;}}else X=X.AJ;AcN=null;}return Ao1;},Aud:function(C$
){var B;var F;var X=this.B8;var Ly=BF;var AAd=true;var result=(C$=F=A.abg(C$,this.
M.slice(0,2)),F);while(!!X){if(((X.U&0x200)===0x200)){var AtD=(C.Z.isPrototypeOf(
X)?X:null);Ly=A.lb(C$,AtD.M);AAd=((AtD.U&0x1)===0x1);}if(((X.U&0x1)===0x1)){if(((
X.U&0x400)===0x400)){if(AAd){var AE=A.lb(X.GetClipping(),Ly);if(!((AE[0]>=AE[2])||(
AE[1]>=AE[3])))result=A.wC(result,X.Aud(AE));}}else{var AE=A.lb(X.GetClipping(),
C$);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))result=A.wC(result,X.Aud(AE));}}X=X.Ah;
}return A.lb(A.abh(result,this.M.slice(0,2)),this.M);},Cw:function(Rk,UR){var B;
var Tf=this.U;if(((!!this.Ab&&!!!this.Fv)&&((this.U&0x80001)===0x80001))&&((UR&0x80000
)===0x80000))this.Ab.Bg(this.GetClipping());C.Ep.Cw.call(this,Rk,UR);if((((!!this.
Ab&&!!!this.Fv)&&((this.U&0x1)===0x1))&&((Rk&0x80000)===0x80000))&&!((Tf&0x80000
)===0x80000))this.Ab.Bg(this.GetClipping());var Xg=this.U^Tf;if(!!this.AW&&((Xg&
0x40)===0x40)){if(((this.U&0x40)===0x40))this.AW.Cw(0x40,0x0);else this.AW.Cw(0x0
,0x40);}if(!!this.G6&&((Xg&0x40)===0x40)){if(((this.U&0x40)===0x40)&&((this.G6.C1.
U&0x14)===0x14))this.G6.C1.Cw(0x40,0x0);else this.G6.C1.Cw(0x0,0x40);}if(((Xg&0x10
)===0x10)){var X;for(X=this.B8;!!X;X=X.Ah)if((((X.U&0x300000)===0x300000)&&!((X.
U&0x80)===0x80))&&(!((X.U&0x10000)===0x10000)||(this.G6.C1===X)))X.Cw(Rk&0x10,UR&
0x10);}if(!!Xg){this.U=this.U|0x8000;A.pe([this,this.AAS],this);}},H:function(E){
var B;if(A.aaY(E,this.M))return;var AlC=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJ2=[
E[2]-E[0],E[3]-E[1]];var ApG=!A.aaX(AlC,AJ2);if(ApG&&!!this.Fv){this.Fv.Arp(AJ2);
A.we(this,0);A.we(this.Fv,0);}C.Ep.H.call(this,E);if((ApG&&(AlC[0]>0))&&(AlC[1]>
0)){var Bd=[].concat(Cc,AlC);var X=this.B8;while(!!X){if((!X.Eq&&(X.PG!==0x14))&&
!((X.U&0x400)===0x400))X.Atr(Bd,null);X=X.Ah;}}if(ApG){this.U=this.U|0x5000;A.pe([
this,this.AAS],this);}},A3e:function(CM){var Bdh=(C.KeyEvent.isPrototypeOf(CM)?CM:
null);var D1=this.AJV;if(!Bdh)return null;while(!!D1&&(!D1.By||!D1.GT(Bdh)))D1=D1.
Ah;return D1;},BBo:function(G){if(!!this.Fv){this.Fv.C1=this;var AE=A.abg(this.Aud(
A.abh(this.Fv.QF,this.M.slice(0,2))),this.M.slice(0,2));this.Fv.AuT(AE,AE,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Bcn(this.Fv,AE,Cc,255,true);this.Fv.
C1=null;}},Bcn:function(CZ,aClip,aOffset,Ch,aBlend){var B;var X=this.B8;var Ly=BF;
var AAd=true;this.Bho(CZ,aClip,aOffset,Ch,aBlend);while(!!X){if(((X.U&0x200)===0x200
)){var AtD=(C.Z.isPrototypeOf(X)?X:null);AAd=((AtD.U&0x1)===0x1);Ly=aClip;if(!((
AtD.U&0x80000)===0x80000))Ly=A.lb(Ly,A.abh(AtD.M,aOffset));}if(((X.U&0x1)===0x1)
){if(((X.U&0x400)===0x400)){if(AAd){var AE=A.lb(A.abh(X.GetClipping(),aOffset),Ly
);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))X.Ka(CZ,AE,aOffset,Ch,aBlend);}}else{var AE=
A.lb(A.abh(X.GetClipping(),aOffset),aClip);if(!((AE[0]>=AE[2])||(AE[1]>=AE[3])))
X.Ka(CZ,AE,aOffset,Ch,aBlend);}}X=X.Ah;}this.Bhr(CZ,aClip,aOffset,Ch,aBlend);},Be_:
function(){var B;var A1I=((this.U&0x1000)===0x1000);var Aip=[0,0,(B=this.M)[2]-B[
0],B[3]-B[1]];var Aac=false;var Ac7=BF;var KY=BF;var Aad=Cc;var Atn=0;var Ato=0;
var Atm=0;var Qf=0;var X=this.B9;var J1=null;var Alu=null;while(!!X){if(((X.U&0x800
)===0x800)){Aac=true;X.U=X.U&~0x800;}if(Aac&&((X.U&0x200)===0x200)){Aac=false;if(
!!(C.Z.isPrototypeOf(X)?X:null).AgH)X.U=X.U|0x1000;}X=X.AJ;}Aac=false;X=this.B8;
if(A1I){this.U=this.U&~0x1000;A1I=!((Aip[0]>=Aip[2])||(Aip[1]>=Aip[3]));}this.U=
this.U|0x2000;while(!!X){if(!Alu&&(Atm!==Qf)){var Ads=X;var AKm=0;var AAy=Ac7[2]-
Ac7[0];var AyN=Ac7[3]-Ac7[1];var AJa=0;var ApR=Cc;do if(((Ads.U&0x200)===0x200))
Ads=null;else if(((Ads.U&0x401)===0x401)){ApR=[(B=Ads.GetExtent())[2]-B[0],B[3]-
B[1]];if((Qf===3)||(Qf===4))AAy=AAy-ApR[0];if((Qf===1)||(Qf===2))AyN=AyN-ApR[1];
if(!Alu||((AAy>=0)&&(AyN>=0))){Alu=Ads;Ads=Ads.Ah;if((Qf===3)||(Qf===4)){AAy=AAy-
Atn;if(ApR[1]>AKm)AKm=ApR[1];}if((Qf===1)||(Qf===2)){AyN=AyN-Ato;if(ApR[0]>AJa)AJa=
ApR[0];}}else Ads=null;}else Ads=Ads.Ah;while(!!Ads);if(!Alu)Alu=J1;KY=Ac7;switch(
Atm){case 9:case 11:KY=[].concat(KY.slice(0,3),KY[1]+AKm);break;case 10:case 12:
KY=A.abP(KY,KY[3]-AKm);break;case 5:case 7:KY=A.abN(KY,KY[0]+AJa);break;case 6:case
8:KY=[].concat(KY[2]-AJa,KY.slice(1,4));break;default:;}}if(((X.U&0x400)===0x400
)){if(!!X.Eq&&(X.Eq.Nt!==J1))X.Eq=null;if((!X.Eq&&Aac)&&((X.PG!==0x14)||!!Qf))X.
Atr(KY,J1);}if(!!X.Eq){if(A1I&&!((X.U&0x400)===0x400))X.Aun(Aip,0);if(Aac&&((X.U&
0x400)===0x400)){var C4=X.Aun(A.abh(KY,Aad),Qf);if(((X.U&0x1)===0x1)){var Br=Cc;
switch(Qf){case 3:Br=[C4[0]+Atn,Br[1]];break;case 4:Br=[-C4[0]-Atn,Br[1]];break;
case 1:Br=[Br[0],C4[1]+Ato];break;case 2:Br=[Br[0],-C4[1]-Ato];break;default:;}Aad=
A.abf(Aad,Br);}}}if(((X.U&0x200)===0x200)){if(Aac)A.pe(J1.En,J1);Aac=((X.U&0x1000
)===0x1000);J1=(C.Z.isPrototypeOf(X)?X:null);if(Aac){X.U=X.U&~0x1000;Atm=J1.AgH;
Qf=Atm;Ac7=A.abh(J1.M,J1.Bt);KY=Ac7;Aad=Cc;Atn=J1.Space+J1.AUk;Ato=J1.Space;Aac=
!((Ac7[0]>=Ac7[2])||(Ac7[1]>=Ac7[3]));Alu=null;switch(Atm){case 9:case 10:Qf=3;break;
case 11:case 12:Qf=4;break;case 5:case 6:Qf=1;break;case 7:case 8:Qf=2;break;default:;
}}if(Aac)this.Bg(J1.M);}if(X===Alu){switch(Atm){case 9:case 11:Aad=[0,(Aad[1]+(KY[
3]-KY[1]))+Ato];break;case 10:case 12:Aad=[0,(Aad[1]-(KY[3]-KY[1]))-Ato];break;case
5:case 7:Aad=[(Aad[0]+(KY[2]-KY[0]))+Atn,0];break;case 6:case 8:Aad=[(Aad[0]-(KY[
2]-KY[0]))-Atn,0];break;default:;}Alu=null;}X=X.Ah;}if(Aac)A.pe(J1.En,J1);this.U=
this.U&~0x2000;this.Bj([Aip[2]-Aip[0],Aip[3]-Aip[1]]);},Jy:function(G){A.pe([this
,this.AAS],this);},AAS:function(G){var B;var BBw=((this.U&0x1000)===0x1000);if(((
this.U&0x4000)===0x4000)){this.U=this.U&~0x4000;this.Be_();}if(((this.U&0x8000)===
0x8000)||BBw){this.U=this.U&~0x8000;this.Ai(this.U);}},Bb:function(E){var B;if(!
!E&&(E.Ab!==this))throw new Error(EY);if(!!E&&!((E.U&0x14)===0x14))E=null;if(!!E&&((
E.U&0x10000)===0x10000))E=null;if(E===this.AW)return;if(!!this.AW)this.AW.Cw(0x0
,0x60);this.AW=E;if(!!E){if(((this.U&0x40)===0x40))E.Cw(0x60,0x0);else E.Cw(0x20
,0x0);}},BaC:function(Aq){this.Bb(Aq);},ARS:function(){return!!this.Fv;},Arj:function(
E){var B;if(!!this.Fv===E)return;if(!E){this.Fv.AD0=null;this.Fv.Arp(Cc);this.Fv=
null;}if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());if(E){this.
Fv=A._NewObject(A.Graphics.Canvas,0);this.Fv.Arp([(B=this.M)[2]-B[0],B[3]-B[1]]);
this.Fv.AD0=[this,this.BBo];}A.we(this,0);},A8c:function(){var B;return((this.U&
0x100000)===0x100000);},Ar:function(E){if(E)this.Cw(0x100000,0x0);else this.Cw(0x0
,0x100000);},Do:function(E){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.G0)return;
this.G0=E;if(!!this.Ab&&((this.U&0x1)===0x1))this.Ab.Bg(this.GetClipping());},AZL:
function(Aq){this.Do(Aq);},Aj:function(E){if(E)this.Cw(0x400,0x0);else this.Cw(0x0
,0x400);},BkS:function(E){if(E)this.Cw(0x2,0x0);else this.Cw(0x0,0x2);},Fh:function(
){var B;return((this.U&0x1)===0x1);},Y:function(E){if(E)this.Cw(0x1,0x0);else this.
Cw(0x0,0x1);},ExtendClipping:function(Aom,Aon,Aoo,Aol){var B;var AyE=this.M;var Rp=
AyE;if(Aom<0)Aom=0;if(Aom>255)Aom=255;if(Aon<0)Aon=0;if(Aon>255)Aon=255;if(Aoo<0
)Aoo=0;if(Aoo>255)Aoo=255;if(Aol<0)Aol=0;if(Aol>255)Aol=255;Rp=[].concat(Rp[0]-(
Math.max(Aom,this.Azc)&0xFF),Rp.slice(1,4));Rp=A.abN(Rp,Rp[2]+(Math.max(Aon,this.
Azd)&0xFF));Rp=A.abP(Rp,Rp[1]-(Math.max(Aoo,this.Aze)&0xFF));Rp=[].concat(Rp.slice(
0,3),Rp[3]+(Math.max(Aol,this.Azb)&0xFF));if(Aom!==this.Azc){if(((!!this.Ab&&((this.
U&0x1)===0x1))&&!!!this.Fv)&&!((this.U&0x80000)===0x80000)){var Az=Rp;Az=A.abN(Az
,AyE[0]);this.Ab.Bg(Az);}this.Azc=Aom&0xFF;}if(Aon!==this.Azd){if(((!!this.Ab&&((
this.U&0x1)===0x1))&&!!!this.Fv)&&!((this.U&0x80000)===0x80000)){var Az=Rp;Az=[].
concat(AyE[2],Az.slice(1,4));this.Ab.Bg(Az);}this.Azd=Aon&0xFF;}if(Aoo!==this.Aze
){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.Fv)&&!((this.U&0x80000)===0x80000
)){var Az=Rp;Az=[].concat(Az.slice(0,3),AyE[1]);this.Ab.Bg(Az);}this.Aze=Aoo&0xFF;
}if(Aol!==this.Azb){if(((!!this.Ab&&((this.U&0x1)===0x1))&&!!!this.Fv)&&!((this.
U&0x80000)===0x80000)){var Az=Rp;Az=A.abP(Az,AyE[3]);this.Ab.Bg(Az);}this.Azb=Aol&
0xFF;}},Bhr:function(CZ,aClip,aOffset,Ch,aBlend){},Bho:function(CZ,aClip,aOffset
,Ch,aBlend){},GetMaximalSize:function(){return Hi;},GetMinimalSize:function(){return Cc;
},AUr:function(Il,Oc,W4,S4,S5,AhT,O5,Rj,Lx,Lv,Lw){var B;if(!this.G6){this.Aku(Il
,Oc,W4,S4,S5,null,null,Lx,Lv,Lw);return;}var AlB=this.G6;var Ju=AlB.Ah;if(((Il.U&
0x10000)===0x10000)&&(this.G6.C1!==Il))throw new Error(I7);var Adb=A._NewObject(
C.ANp,0);var Rr=AlB.Rr;var RA=null;var L9=null;if(!!Ju){RA=Ju.RA;L9=Ju.L9;}if(!!
Ju&&!!AlB.Apw)RA=AlB.Apw;if(!!Ju&&!!O5)L9=O5;if(!!AhT)Rr=AhT;if(!Oc)Oc=A._GetAutoObject(
A.acl.Ar$);if(!W4)W4=Oc;if(!S5)S5=S4;if(!S4)S4=S5;Adb.Rr=W4;Adb.L9=S4;Adb.RA=S5;
Adb.Apw=Rj;Adb.C1=Il;Adb.Ah=this.G6.Ah;this.G6.Ah=null;this.G6=Adb;if(this.AW===
Il)this.Bb(null);AlB.C1.Cw(0x0,0x10040);if(((this.U&0x40)===0x40)&&((Il.U&0x4)===
0x4))Il.Cw(0x10040,0x0);else Il.Cw(0x10000,0x0);if(!!L9){this.NI(Ju.C1,L9.AdT(),
null,null,Lw);this.NI(AlB.C1,Rr.R3(),null,null,true);this.NI(Adb.C1,Oc.R4(),Lx,Lv
,true);}else if(!!RA){this.NI(Ju.C1,RA.AdU(),null,null,Lw);this.NI(AlB.C1,Rr.R3(
),null,null,true);this.NI(Adb.C1,Oc.R4(),Lx,Lv,true);}else if(!!Rr){this.NI(AlB.
C1,Rr.R3(),null,null,Lw);this.NI(Adb.C1,Oc.R4(),Lx,Lv,true);}else this.NI(Adb.C1
,Oc.R4(),Lx,Lv,Lw);},Aqh:function(Il,AhT,O5,Rj,Lx,Lv,Lw){var B;if(!this.G6)return;
if(!Il)return;var Kv=this.G6;var Ju=this.G6.Ah;var ApC=null;while((!!Kv&&(Kv.C1!==
Il))&&!!Kv.Ah){ApC=Kv;Kv=Ju;Ju=Kv.Ah;}if(!Kv||(Kv.C1!==Il))throw new Error(Ik);if(
!ApC){this.G6=Ju;Kv.Ah=null;}else{ApC.Ah=Ju;Kv.Ah=null;}Kv.C1.Cw(0x0,0x10040);if(((((
this.U&0x10)===0x10)&&!!Ju)&&!ApC)&&((Ju.C1.U&0x200000)===0x200000))Ju.C1.Cw(0x10
,0x0);if(((((this.U&0x40)===0x40)&&!!Ju)&&!ApC)&&((Ju.C1.U&0x4)===0x4))Ju.C1.Cw(
0x40,0x0);var Rr=Kv.Rr;var RA=null;var L9=null;if(!!Ju)RA=Ju.RA;if(!!Ju&&!!Kv.Apw
)RA=Kv.Apw;if(!!Ju&&!!Rj)RA=Rj;if(!!ApC&&!!Ju)L9=Ju.L9;if((!!ApC&&!!Ju)&&!!O5)L9=
O5;if(!!AhT)Rr=AhT;if(!!L9){this.NI(Ju.C1,L9.AdT(),null,null,Lw);this.NI(Kv.C1,Rr.
R3(),Lx,Lv,true);}else if(!!RA){this.NI(Ju.C1,RA.AdU(),null,null,Lw);this.NI(Kv.
C1,Rr.R3(),Lx,Lv,true);}else this.NI(Kv.C1,Rr.R3(),Lx,Lv,Lw);},Aku:function(Il,Oc
,W4,S4,S5,O5,Rj,Lx,Lv,Lw){var B;if(!Il)return;if(!!this.G6&&(this.G6.C1===Il)){this.
AUr(Il,Oc,W4,S4,S5,null,O5,Rj,Lx,Lv,Lw);return;}if(((Il.U&0x10000)===0x10000))throw new
Error(I7);var Kv=A._NewObject(C.ANp,0);if(!!this.G6&&!this.G6.L9){if(!Rj)Rj=O5;if(
!O5)O5=Rj;}var L9=null;if(!!this.G6)L9=this.G6.L9;if(!!this.G6&&!!O5)L9=O5;if(!Oc
)Oc=A._GetAutoObject(A.acl.Ar$);if(!W4)W4=Oc;if(!S5)S5=S4;if(!S4)S4=S5;Kv.Rr=W4;
Kv.L9=S4;Kv.RA=S5;Kv.Apw=Rj;if(this.AW===Il)this.Bb(null);if(!!this.G6&&((this.G6.
C1.U&0x200000)===0x200000))this.G6.C1.Cw(0x0,0x10);if(!!this.G6)this.G6.C1.Cw(0x0
,0x40);if(((this.U&0x40)===0x40)&&((Il.U&0x4)===0x4))Il.Cw(0x10040,0x0);else Il.
Cw(0x10000,0x0);Kv.C1=Il;Kv.Ah=this.G6;this.G6=Kv;if(!!L9){this.NI(this.G6.Ah.C1
,L9.AdT(),null,null,Lw);this.NI(Il,Oc.R4(),Lx,Lv,true);}else this.NI(Il,Oc.R4(),
Lx,Lv,Lw);},A6A:function(Ae){var B;return(B=Ae)&&((this.U&B)===B);},A7c:function(
KW){var tmp=this;while(!!tmp){KW=A.abe(KW,tmp.M.slice(0,2));tmp=tmp.Ab;}return KW;
},Bim:function(KW){var tmp=this;while(!!tmp){KW=A.abf(KW,tmp.M.slice(0,2));tmp=tmp.
Ab;}return KW;},DispatchEvent:function(CM){var B;var X=this.AW;var B0=(C.O.isPrototypeOf(
X)?X:null);var Gv=null;var A19=!!this.Xh&&(!!this.Xh.FI||!!this.Xh.B8);if(!!X&&((((
X.U&0x10000)===0x10000)||((X.U&0x40000)===0x40000))||((X.U&0x20000)===0x20000))){
X=null;B0=null;}if(!!this.G6&&!A19)Gv=this.G6.C1.DispatchEvent(CM);if(!Gv&&!!B0)
Gv=B0.DispatchEvent(CM);else if(!Gv&&!!X)Gv=X.GT(CM);if(!Gv)Gv=this.GT(CM);if(!Gv
)Gv=this.A3e(CM);return Gv;},BroadcastEventAtPosition:function(CM,Ht,aFilter){var
B;var X=this.B9;var Gv=null;while(!!X&&!Gv){if((!aFilter||((B=aFilter)&&((X.U&B)===
B)))&&A.wa(X.GetExtent(),Ht)){var B0=(C.O.isPrototypeOf(X)?X:null);if(!!B0)Gv=B0.
BroadcastEventAtPosition(CM,A.abe(Ht,B0.M.slice(0,2)),aFilter);else Gv=X.GT(CM);
}X=X.AJ;}if(!Gv)Gv=this.GT(CM);return Gv;},BroadcastEvent:function(CM,aFilter){var
B;var X=this.B9;var Gv=null;while(!!X&&!Gv){if(!aFilter||((B=aFilter)&&((X.U&B)===
B))){var B0=(C.O.isPrototypeOf(X)?X:null);if(!!B0)Gv=B0.BroadcastEvent(CM,aFilter
);else Gv=X.GT(CM);}X=X.AJ;}if(!Gv)Gv=this.GT(CM);if(!Gv)Gv=this.A3e(CM);return Gv;
},Bj:function(aSize){},Ai:function(Ae){},BiD:function(){this.U=this.U|0x4000;A.pe([
this,this.AAS],this);},An:function(){this.U=this.U|0x8000;A.pe([this,this.AAS],this
);},Bg:function(C$){var B;var B0=this;while(!!B0&&!((C$[0]>=C$[2])||(C$[1]>=C$[3
]))){var Z$=B0.Fv;if(!B0.Ab&&(B0!==this)){B0.Bg(C$);return;}if(!!Z$){var Bzc=Z$.
QF;Z$.QF=A.wC(Z$.QF,C$);if(!A.aaY(Bzc,Z$.QF)){A.we(B0,0);A.we(Z$,0);}}if(!((B0.U&
0x1)===0x1))return;var Az=B0.M;C$=A.abh(C$,Az.slice(0,2));if(!!B0.Fv||!((B0.U&0x80000
)===0x80000)){if(!!!B0.Fv){Az=[].concat(Az[0]-B0.Azc,Az.slice(1,4));Az=A.abP(Az,
Az[1]-B0.Aze);Az=A.abN(Az,Az[2]+B0.Azd);Az=[].concat(Az.slice(0,3),Az[3]+B0.Azb);
}C$=A.lb(C$,Az);}B0=B0.Ab;}},QA:function(Ag,Gs,aFilter){var B;if(!Ag||(Ag.Ab!==this
))return null;var Af2=A.aaI(Ag.GetExtent());var X=Ag;var A0U=null;var Bb2=0;var IN=
0x10000;var AKi;if(((aFilter&0x10000)===0x10000))IN=0x0;var top=((Gs===4)||(Gs===
1))||(Gs===6);var bottom=((Gs===5)||(Gs===3))||(Gs===8);var left=((Gs===2)||(Gs===
1))||(Gs===3);var right=((Gs===7)||(Gs===6))||(Gs===8);if(((!top&&!bottom)&&!left
)&&!right)return null;while(!!X){X=X.AJ;if(!X)X=this.B9;if(X===Ag)X=null;if((!!X&&(
!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IN||!((B=IN)&&((X.U&B)===B))))for(AKi=
0;AKi<2;AKi++){var Az=X.GetExtent();var s=[Az[2]-Az[0],Az[3]-Az[1]];if(!!!AKi){if((
left&&(s[0]>s[1]))&&(Az[2]<Af2[0]))Az=[].concat(Az[2]-s[1],Az.slice(1,4));if((right&&(
s[0]>s[1]))&&(Az[0]>Af2[0]))Az=A.abN(Az,Az[0]+s[1]);if((top&&(s[1]>s[0]))&&(Az[3
]<Af2[1]))Az=A.abP(Az,Az[3]-s[0]);if((bottom&&(s[1]>s[0]))&&(Az[1]>Af2[1]))Az=[].
concat(Az.slice(0,3),Az[1]+s[0]);}var Br=A.abe(A.aaI(Az),Af2);var Rm=Br;if(Rm[0]<
0)Rm=[-Rm[0],Rm[1]];if(Rm[1]<0)Rm=[Rm[0],-Rm[1]];if(((((!left||(Br[0]<=-Rm[1]))&&(
!right||(Br[0]>=Rm[1])))&&(!top||(Br[1]<=-Rm[0])))&&(!bottom||(Br[1]>=Rm[0])))&&((
Rm[0]>0)||(Rm[1]>0))){var Rt=Br[0];var Ru=Br[1];var Ja=Math.sqrt((Rt*Rt)+(Ru*Ru)
);var AJU=0;if(!left&&!right)AJU=Ja/Rm[1];if(!top&&!bottom)AJU=Ja/Rm[0];Ja=(Ja*AJU
)*AJU;if((Ja<Bb2)||!A0U){Bb2=Ja;A0U=X;}}}}return A0U;},Aqo:function(Ag,aFilter){
var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B9;var IN=0x10000;if(((aFilter&
0x10000)===0x10000))IN=0x0;if(!!Ag)X=Ag.AJ;while(!!X){if((!aFilter||((B=aFilter)&&((
X.U&B)===B)))&&(!IN||!((B=IN)&&((X.U&B)===B))))return X;X=X.AJ;}return null;},TH:
function(Ag,aFilter){var B;if(!!Ag&&(Ag.Ab!==this))return null;var X=this.B8;var
IN=0x10000;if(((aFilter&0x10000)===0x10000))IN=0x0;if(!!Ag)X=Ag.Ah;while(!!X){if((
!aFilter||((B=aFilter)&&((X.U&B)===B)))&&(!IN||!((B=IN)&&((X.U&B)===B))))return X;
X=X.Ah;}return null;},ACh:function(Ag,aFilter){var B;if(!Ag||(Ag.Ab!==this))return null;
var Alz=Ag.Ah;var AlM=Ag.AJ;var IN=0x10000;if(((aFilter&0x10000)===0x10000))IN=0x0;
while(!!Alz||!!AlM){if((!!Alz&&(!aFilter||((B=aFilter)&&((Alz.U&B)===B))))&&(!IN||
!((B=IN)&&((Alz.U&B)===B))))return Alz;if((!!AlM&&(!aFilter||((B=aFilter)&&((AlM.
U&B)===B))))&&(!IN||!((B=IN)&&((AlM.U&B)===B))))return AlM;if(!!Alz)Alz=Alz.Ah;if(
!!AlM)AlM=AlM.AJ;}return null;},Df:function(aFilter){var B;var X=this.B8;var AE=
BF;var IN=0x10000;if(((aFilter&0x10000)===0x10000))IN=0x0;while(!!X){if((!((X.U&
0x400)===0x400)&&(!aFilter||((B=aFilter)&&((X.U&B)===B))))&&(!IN||!((B=IN)&&((X.
U&B)===B))))AE=A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},NI:function(Ku,FH,Lx,Lv
,Lw){var B;if(!Ku)return;if(!FH)throw new Error(O0);if((!!FH.O||!!FH.Ab)||!!FH.Pe
)throw new Error(PZ);if(!!Ku.Ab&&(Ku.Ab!==this))throw new Error(P0);if(!this.Xh)
this.Xh=A._NewObject(C.AUw,0);FH.Ab=this;FH.O=Ku;FH.AJ4=Lv;FH.A2z=Lx;if(!!Ku.Apx
)Ku.Apx.Pe.Bnx(Ku.Apx);Ku.Apx=FH;Ku.U=Ku.U|0x20000;if((Lw&&!!this.Xh.B9)&&!this.
Xh.B9.AQB())(A.acl.ACc.isPrototypeOf(B=this.Xh.B9)?B:null).A4g(FH);else{var Pe=A.
_NewObject(A.acl.ACc,0);Pe.A4g(FH);this.Xh.A_J(Pe,false);}},Ahn:function(Ag,JV){
var B;if(!Ag)throw new Error(CO);if(Ag.Ab!==this)throw new Error(E7);if(!!JV&&(JV.
Ab!==this))throw new Error(Ls);if(Ag.Ah===JV)return;if(((Ag.U&0x401)===0x401)){if(
!!Ag.AJ&&!!Ag.Eq)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([
this,this.Jy],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;
Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.Jy],this);}if(!!Ag.Ah)Ag.Ah.
AJ=Ag.AJ;else this.B9=Ag.AJ;if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;var Gu=
null;var In=this.B9;var LM=Ag.JP;if(!!JV){Gu=JV;In=JV.AJ;}if(!!Gu&&(LM>Gu.JP))LM=
Gu.JP;if(!!In&&(LM<In.JP))LM=In.JP;if(LM!==Ag.JP){Ag.Ab=null;Ag.ArB(LM);Ag.Ab=this;
}if(!JV){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.B9;Ag.Ah=null;this.B9=Ag;}else{Ag.
Ah=JV;Ag.AJ=JV.AJ;JV.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(this.B8===JV)this.B8=Ag;if(((
Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());},Zl:function(Ag){var B;if(!Ag)throw new
Error(CO);if(Ag.Ab!==this)throw new Error(E7);if(!Ag.Ah)return;var In=this.B9;var
LM=Ag.JP;while(!!In&&(In.JP>LM))In=In.AJ;if(((In===Ag)||!In)||(In.Ah===Ag))return;
if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eq)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.Jy],this);}if(((Ag.U&0x200)===0x200)){if(!!
Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this,this.Jy],this);}if(!
!Ag.AJ)Ag.AJ.Ah=Ag.Ah;else this.B8=Ag.Ah;Ag.Ah.AJ=Ag.AJ;Ag.AJ=In;Ag.Ah=In.Ah;In.
Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;else this.B9=Ag;if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping(
));},JO:function(Ag,P8){var B;if(!Ag)throw new Error(CO);if(Ag.Ab!==this)throw new
Error(E7);var In=Ag;var Gu=Ag;var LM=Ag.JP;while(((P8>0)&&!!In.Ah)&&(In.Ah.JP<=LM
)){In=In.Ah;P8=P8-1;}while(((P8<0)&&!!Gu.AJ)&&(Gu.AJ.JP>=LM)){Gu=Gu.AJ;P8=P8+1;}
if((In===Ag)&&(Gu===Ag))return;if(((Ag.U&0x401)===0x401)){if(!!Ag.AJ&&!!Ag.Eq)Ag.
AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.Jy],this
);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;Ag.U=Ag.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.Jy],this);}if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)
Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;if(In
!==Ag){Ag.Ah=In.Ah;Ag.AJ=In;In.Ah=Ag;if(!!Ag.Ah)Ag.Ah.AJ=Ag;}if(Gu!==Ag){Ag.Ah=Gu;
Ag.AJ=Gu.AJ;Gu.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}if(!Ag.Ah)this.B9=Ag;if(!Ag.AJ)this.
B8=Ag;if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());},HJ:function(Ag){var B;if(
!Ag)throw new Error(P1);if(Ag.Ab!==this)throw new Error(E7);if((((Ag.U&0x401)===
0x401)&&!!Ag.AJ)&&!!Ag.Eq){Ag.AJ.U=Ag.AJ.U|0x800;this.U=this.U|0x4000;A.pe([this
,this.Jy],this);}if(((Ag.U&0x200)===0x200)){if(!!Ag.AJ)Ag.AJ.U=Ag.AJ.U|0x800;this.
U=this.U|0x4000;A.pe([this,this.Jy],this);}Ag.Eq=null;if(this.AW===Ag)this.Bb(this.
ACh(Ag,0x14));if(!!Ag.AJ)Ag.AJ.Ah=Ag.Ah;if(!!Ag.Ah)Ag.Ah.AJ=Ag.AJ;if(this.B8===Ag
)this.B8=Ag.Ah;if(this.B9===Ag)this.B9=Ag.AJ;Ag.Ab=null;Ag.Ah=null;Ag.AJ=null;if((
!((Ag.U&0x10)===0x10)&&((Ag.U&0x100000)===0x100000))&&!((this.U&0x80)===0x80))Ag.
Cw(0x10,0x0);if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());},ALC:function(Ag,JV
){var B;if(!Ag)throw new Error(Ks);if(!!Ag.Ab)throw new Error(N$);if(!!JV&&(JV.Ab
!==this))throw new Error(Ls);var Gu=null;var In=this.B9;var LM=Ag.JP;if(!!JV){Gu=
JV;In=JV.AJ;}if(!!Gu&&(LM>Gu.JP))LM=Gu.JP;if(!!In&&(LM<In.JP))LM=In.JP;if(LM!==Ag.
JP){Ag.Ab=null;Ag.ArB(LM);Ag.Ab=this;}if(!JV){if(!!this.B9)this.B9.Ah=Ag;Ag.AJ=this.
B9;this.B9=Ag;}else{Ag.Ah=JV;Ag.AJ=JV.AJ;JV.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;}Ag.Ab=
this;if(this.B8===JV)this.B8=Ag;if(((Ag.U&0x1)===0x1))this.Bg(Ag.GetClipping());
if(((Ag.U&0x80)===0x80)&&(A.aam().AOk()===Ag))Ag.Cw(0x10,0x0);else if(!((this.U&
0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cw(0x0,0x10);else if((((this.U&0x10
)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000))Ag.Cw(0x10,0x0);
if(((!this.AW&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((Ag.U&0x10000)===0x10000
))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;this.U=this.U|0x4000;A.
pe([this,this.Jy],this);}if(((Ag.U&0x200)===0x200)){Ag.U=Ag.U|0x800;this.U=this.
U|0x4000;A.pe([this,this.Jy],this);}},J:function(Ag,P8){var B;if(!Ag)throw new Error(
Ks);if(!!Ag.Ab)throw new Error(N$);var Gu=null;var LM=Ag.JP;if(((P8<0)&&!!this.B9
)&&(this.B9.JP>=LM)){Gu=this.B9;P8=P8+1;}while((((P8<0)&&!!Gu)&&!!Gu.AJ)&&(Gu.AJ.
JP>=LM)){Gu=Gu.AJ;P8=P8+1;}if((!Gu&&!!this.B9)&&(this.B9.JP>LM))Gu=this.B9;while((
!!Gu&&!!Gu.AJ)&&(Gu.AJ.JP>LM))Gu=Gu.AJ;if(!Gu){Ag.Ab=this;Ag.AJ=this.B9;if(!!this.
B9)this.B9.Ah=Ag;if(!this.B8)this.B8=Ag;this.B9=Ag;}else{Ag.Ab=this;Ag.AJ=Gu.AJ;
Ag.Ah=Gu;Gu.AJ=Ag;if(!!Ag.AJ)Ag.AJ.Ah=Ag;else this.B8=Ag;}if(((Ag.U&0x1)===0x1))
this.Bg(Ag.GetClipping());if(((Ag.U&0x80)===0x80)&&(A.aam().AOk()===Ag))Ag.Cw(0x10
,0x0);else if(!((this.U&0x10)===0x10)&&((Ag.U&0x200010)===0x200010))Ag.Cw(0x0,0x10
);else if((((this.U&0x10)===0x10)&&!((Ag.U&0x10)===0x10))&&((Ag.U&0x100000)===0x100000
))Ag.Cw(0x10,0x0);if(((!this.AW&&((Ag.U&0x4)===0x4))&&((Ag.U&0x10)===0x10))&&!((
Ag.U&0x10000)===0x10000))this.Bb(Ag);if(((Ag.U&0x401)===0x401)){Ag.U=Ag.U|0x800;
this.U=this.U|0x4000;A.pe([this,this.Jy],this);}if(((Ag.U&0x200)===0x200)){Ag.U=
Ag.U|0x800;this.U=this.U|0x4000;A.pe([this,this.Jy],this);}},A8e:function(){return this.
AW;},AvT:function(){return this.G0;},_Init:function(aArg){C.Ep._Init.call(this,aArg
);this.__proto__=C.O;this.U=0x10001F;this.Init(aArg);},_Mark:function(D){var B;C.
Ep._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJV)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.G6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Xh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Apx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AW)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::Group"};C.Root={Rx:null,Jt:null,Fm:A.abi(10,null
,null),Ata:null,Ah$:null,AAU:0,H8:0,L5:A.abi(10,0,null),AJg:A.abi(10,A.wg,null),
Xf:A.abi(10,0,null),AfI:A.abi(10,A.wf,null),Atf:A.abi(10,0,null),Ah_:A.abi(10,A.
wf,null),Xe:A.abi(10,A.wf,null),Rq:A.abi(10,A.wf,null),AcY:A.abi(10,A.wf,null),EK:
0,AJF:0,AJE:0,Or:A.abi(4,0,null),J7:A.abi(4,A.wg,null),J3:0,AzC:0,Att:0,Azo:true
,Init:function(aArg){if(!!!this.I){var obj=this;A.abD(obj);}},Ie:function(){return this;
},Ka:function(CZ,aClip,aOffset,Ch,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.m7;if(!fullScreenUpdate)CZ.AuT(aClip,A.abh(A.abh(aClip,aOffset),this.M.slice(0
,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.O.Ka.call(this,CZ,aClip
,aOffset,Ch,aBlend);},Cw:function(Rk,UR){var B;C.O.Cw.call(this,Rk,UR);if(!this.
Ab&&(((Rk&0x1)===0x1)||((UR&0x1)===0x1)))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);if(!this.Ab&&(((Rk&0x2)===0x2)||((UR&0x2)===0x2)))this.Bg([0,0,(B=this.M)[2
]-B[0],B[3]-B[1]]);},Bb:function(E){if((E!==null)||!E)C.O.Bb.call(this,E);},Arj:
function(E){var B;var Bza=this.Fv;C.O.Arj.call(this,E);if(((Bza!==this.Fv)&&!this.
Ab)&&((this.U&0x1)===0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Do:function(
E){var B;var BQ=this.G0;C.O.Do.call(this,E);if(((BQ!==this.G0)&&!this.Ab)&&((this.
U&0x1)===0x1))this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
CM){if(!!CM){CM.Avs=!!this.H8;if(!!this.H8)CM.Bw=this.H8;}var Gv=null;if(!!this.
Jt){Gv=this.Jt.C1.DispatchEvent(CM);if(!Gv)Gv=this.GT(CM);if(!Gv)Gv=this.A3e(CM);
this.H8=0;return Gv;}Gv=C.O.DispatchEvent.call(this,CM);this.H8=0;return Gv;},BroadcastEvent:
function(CM,aFilter){if(!!CM){CM.Avs=!!this.H8;if(!!this.H8)CM.Bw=this.H8;}var Gv=
C.O.BroadcastEvent.call(this,CM,aFilter);this.H8=0;return Gv;},Bg:function(C$){var
B;if(this.AAU>0)throw new Error(P2);if(!!this.Fv&&!this.Ab){if(((B=this.Fv.QF)[0
]>=B[2])||(B[1]>=B[3])){A.we(this,0);A.we(this.Fv,0);}this.Fv.QF=A.wC(this.Fv.QF
,C$);}var fullScreenUpdate=false;fullScreenUpdate=A.m7;if(fullScreenUpdate)C$=[0
,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!!this.Ab){C.O.Bg.call(this,C$);return;}C$=A.
lb(A.abh(C$,this.M.slice(0,2)),this.M);if((C$[0]>=C$[2])||(C$[1]>=C$[3]))return;
var P;for(P=0;P<this.J3;P=P+1)if(!(((B=A.lb(this.J7.Get(P),C$))[0]>=B[2])||(B[1]>=
B[3]))){this.J7.Set(P,A.wC(this.J7.Get(P),C$));this.Or.Set(P,A.aaH(this.J7.Get(P
)));return;}if(this.J3<3){this.J7.Set(this.J3,C$);this.Or.Set(this.J3,A.aaH(C$));
this.J3=this.J3+1;return;}var H_;var Rw;var AzB=0;var AzE=0;var Bb1=2147483647;this.
J7.Set(this.J3,C$);this.Or.Set(this.J3,A.aaH(C$));for(H_=0;H_<=this.J3;H_=H_+1)for(
Rw=H_+1;Rw<=this.J3;Rw=Rw+1){var AKM=A.aaH(A.wC(this.J7.Get(H_),this.J7.Get(Rw))
);var BeM=((AKM<<8)/(this.Or.Get(H_)+this.Or.Get(Rw)))|0;if(BeM<Bb1){Bb1=BeM;AzB=
H_;AzE=Rw;}}this.J7.Set(AzB,A.wC(this.J7.Get(AzB),this.J7.Get(AzE)));this.Or.Set(
AzB,A.aaH(this.J7.Get(AzB)));if(AzE!==this.J3){this.J7.Set(AzE,this.J7.Get(this.
J3));this.Or.Set(AzE,this.Or.Get(this.J3));}},BxP:function(){var LE=A._NewObject(
C.Aqj,0);LE.Avs=!!this.H8;if(!!this.H8)LE.Bw=this.H8;return LE;},AoJ:function(){
var LE=A._NewObject(C.AdW,0);LE.Avs=!!this.H8;if(!!this.H8)LE.Bw=this.H8;return LE;
},Ate:function(){var LE=A._NewObject(C.Auw,0);LE.Avs=!!this.H8;if(!!this.H8)LE.Bw=
this.H8;return LE;},BxU:function(G){var P;var Ao1=false;for(P=0;P<10;P=P+1)if(!!
this.Fm.Get(P)){var pos=this.Rq.Get(P);var B0=this.Fm.Get(P).Ab;while(!!B0&&(B0!==
this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fm.Get(P)!==this)){
var tmp=this.Fm.Get(P);this.EK=P;this.Fm.Set(P,null);tmp.GT(this.AoJ().InitializeUp(
P,this.Ah_.Get(P),this.AfI.Get(P),this.Xf.Get(P),this.L5.Get(P)+1,this.Xe.Get(P)
,false,this.Rq.Get(P),this.AcY.Get(P)));this.BroadcastEvent(this.Ate().InitializeUp(
P,this.L5.Get(P)+1,false,tmp,this.Rq.Get(P)),0x18);}else{this.Xf.Set(P,(this.Ah$.
Bw-this.Atf.Get(P))|0);if(this.Xf.Get(P)<10)this.Xf.Set(P,10);this.EK=P;this.Fm.
Get(P).GT(this.AoJ().InitializeHold(P,pos,this.AfI.Get(P),this.Xf.Get(P),this.L5.
Get(P)+1,this.Xe.Get(P),this.Rq.Get(P),this.AcY.Get(P)));Ao1=true;}}if(!Ao1)this.
Ah$.Ar(false);},GetFPS:function(){var ticksCount=0;var BcC=0;ticksCount=((new Date
).getTime()-A.v$)|0;if(!!this.AJF&&(ticksCount>this.AJF))BcC=((this.AJE*1000)/((
ticksCount-this.AJF)|0))|0;this.AJE=0;this.AJF=ticksCount;return BcC;},Update:function(
){var B;if(!this.Ata)this.Ata=A._NewObject(A.Graphics.Canvas,0);this.Ata.Arp([(B=
this.M)[2]-B[0],B[3]-B[1]]);this.Ata.Update();return this.UpdateGE20(this.Ata);}
,UpdateGE20:function(CZ){if(!this.BeginUpdate())return BF;var Agb=this.UpdateCanvas(
CZ,Cc);this.EndUpdate();return Agb;},EndUpdate:function(){if(this.J3>0){this.AJE=
this.AJE+1;this.J3=0;}},UpdateCanvas:function(CZ,aOffset){var B;var Agb=BF;var Bxw=[
].concat(aOffset,A.abf(CZ.FrameSize,aOffset));var P;var H_=this.J3;this.AAU=this.
AAU+1;CZ.C1=this;for(P=0;(P<H_)&&(P<4);P=P+1)if(this.Or.Get(P)>0){this.Ka(CZ,A.abg(
this.J7.Get(P),aOffset),[-aOffset[0],-aOffset[1]],255,true);Agb=A.wC(Agb,A.lb(Bxw
,this.J7.Get(P)));}else H_=H_+1;CZ.C1=null;this.AAU=this.AAU-1;if(!((Agb[0]>=Agb[
2])||(Agb[1]>=Agb[3])))return A.abg(Agb,aOffset);else return Agb;},GetUpdateRegion:
function(AID){var P;var H_=this.J3;if(AID<0)return BF;for(P=0;(P<H_)&&(P<4);P=P+
1)if(!this.Or.Get(P)){H_=H_+1;AID=AID+1;}else if(P===AID)return this.J7.Get(P);return BF;
},BeginUpdate:function(){var B;var P;if(!!this.J3&&!A.aaY(this.J7.Get(0),[0,0,(B=
this.M)[2]-B[0],B[3]-B[1]])){var BfK=A.abi(3,A.wg,null);var BfJ=this.J3;for(P=0;
P<BfJ;P++)BfK.Set(P,this.J7.Get(P));for(P=0;P<BfJ;P++){var Be5=A.abh(BfK.Get(P),
this.M.slice(0,2));var Be6=this.Aud(Be5);if(!A.aaY(Be5,Be6))this.Bg(A.abg(Be6,this.
M.slice(0,2)));}}var H_;var Rw;for(H_=0;H_<(this.J3-1);H_++)if(this.Or.Get(H_)>0
)for(Rw=H_+1;Rw<this.J3;Rw++)if(this.Or.Get(Rw)>0){var AKM=A.aaH(A.wC(this.J7.Get(
H_),this.J7.Get(Rw)));if(((AKM-this.Or.Get(H_))-this.Or.Get(Rw))<0){this.J7.Set(
H_,A.wC(this.J7.Get(H_),this.J7.Get(Rw)));this.Or.Set(H_,AKM);this.Or.Set(Rw,0);
}}for(P=this.J3-1;P>=0;P--)if(!this.Or.Get(P))this.J3=this.J3-1;return this.J3;}
,DoesNeedUpdate:function(){if(this.J3>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(Cc,aSize));if(this.Azo)this.U=this.U|0x60;else this.U=this.
U|0x20;this.Bg(this.M);return this;},SetRootFocus:function(A0l){if(A0l===this.Azo
)return false;this.Azo=A0l;if(!A0l){if(!!this.Jt)this.Jt.C1.Cw(0x0,0x40);else this.
Cw(0x0,0x40);}else if(!!this.Jt)this.Jt.C1.Cw(0x40,0x0);else this.Cw(0x40,0x0);return true;
},SetUserInputTimestamp:function(P9){this.H8=P9;},DriveKeyboardHitting:function(
Kt,Ayr,S3){var B;var A3f=!!this.Rx;if(!!this.Rx&&((!S3||(this.AzC!==Kt))||(this.
Att!==Ayr))){var LE=null;var X=(C.Cg.isPrototypeOf(B=this.Rx)?B:null);var D1=(C.
BL.isPrototypeOf(B=this.Rx)?B:null);if(!!this.AzC)LE=A._NewObject(C.KeyEvent,0).
Initialize(this.AzC,false);if(this.Att!==0x00)LE=A._NewObject(C.KeyEvent,0).Initialize2(
this.Att,false);if(!!D1)D1.GT(LE);else if(!!X)X.GT(LE);this.AzC=0;this.Att=0x00;
this.Rx=null;}if(!!this.Rx){var LE=null;var X=(C.Cg.isPrototypeOf(B=this.Rx)?B:null
);var D1=(C.BL.isPrototypeOf(B=this.Rx)?B:null);if(!!Kt)LE=A._NewObject(C.KeyEvent
,0).Initialize(Kt,true);if(this.Att!==0x00)LE=A._NewObject(C.KeyEvent,0).Initialize2(
Ayr,true);if(!!D1)D1.GT(LE);else if(!!X)X.GT(LE);}if(!this.Rx&&S3){if(!!Kt)this.
Rx=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize(Kt,true));if(Ayr!==0x00
)this.Rx=this.DispatchEvent(A._NewObject(C.KeyEvent,0).Initialize2(Ayr,true));if(
!(C.BL.isPrototypeOf(B=this.Rx)?B:null)&&!(C.Cg.isPrototypeOf(B=this.Rx)?B:null)
)this.Rx=null;this.AzC=Kt;this.Att=Ayr;A3f=A3f||!!this.Rx;}this.H8=0;return A3f;
},DriveCursorMovement:function(E9){return this.DriveMultiTouchMovement(this.EK,E9
);},DriveMultiTouchMovement:function(BG,E9){if((BG<0)||(BG>9)){this.H8=0;return false;
}var Fo=A.abe(E9,this.Rq.Get(BG));this.Rq.Set(BG,E9);if(!this.Fm.Get(BG)||A.aaX(
Fo,Cc)){this.H8=0;return false;}var pos=E9;var B0=this.Fm.Get(BG).Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(this.Fm.Get(BG)!==
this)){var tmp=this.Fm.Get(BG);this.EK=BG;this.Fm.Set(BG,null);tmp.GT(this.AoJ().
InitializeUp(BG,this.Ah_.Get(BG),this.AfI.Get(BG),this.Xf.Get(BG),this.L5.Get(BG
)+1,this.Xe.Get(BG),false,this.Rq.Get(BG),this.AcY.Get(BG)));this.BroadcastEvent(
this.Ate().InitializeUp(BG,this.L5.Get(BG)+1,false,tmp,E9),0x18);}else{this.Ah_.
Set(BG,pos);this.EK=BG;this.Fm.Get(BG).GT(this.BxP().Initialize(BG,pos,this.AfI.
Get(BG),Fo,this.Xf.Get(BG),this.L5.Get(BG)+1,this.Xe.Get(BG),E9,this.AcY.Get(BG)
));}this.H8=0;return true;},DriveCursorHitting:function(S3,BG,E9){return this.DriveMultiTouchHitting(
S3,BG,E9);},DriveMultiTouchHitting:function(S3,BG,E9){if((BG<0)||(BG>9)){this.H8=
0;return false;}var ticksCount=this.H8;if(!ticksCount)ticksCount=((new Date).getTime(
)-A.v$)|0;var BAH=this.H8;this.DriveMultiTouchMovement(BG,E9);E9=this.Rq.Get(BG);
this.H8=BAH;if(S3)this.AcY.Set(BG,E9);if(S3&&!this.Fm.Get(BG)){var Js;var pos=E9;
if(A.wa(this.AJg.Get(BG),E9)&&((ticksCount-this.Atf.Get(BG))<=250))this.L5.Set(BG
,this.L5.Get(BG)+1);else this.L5.Set(BG,0);this.AJg.Set(BG,A.abh(ME,E9));this.Atf.
Set(BG,ticksCount);if(!!this.Jt)Js=this.X6(A.abh(ME,E9),BG,this.L5.Get(BG)+1,this.
Jt.C1,null,0x0);else Js=this.X6(A.abh(ME,E9),BG,this.L5.Get(BG)+1,null,null,0x0);
if(!!Js){this.BroadcastEvent(this.Ate().InitializeDown(BG,this.L5.Get(BG)+1,false
,Js.Cg,E9),0x18);this.Fm.Set(BG,Js.Cg);this.Xe.Set(BG,Js.DC);}else{this.Fm.Set(BG
,null);this.Xe.Set(BG,Cc);this.H8=0;return false;}var B0=Js.Cg.Ab;while(!!B0&&(B0
!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}this.AfI.Set(BG,pos);this.Ah_.
Set(BG,pos);this.Xf.Set(BG,0);this.Ah$.Ar(true);this.EK=BG;this.Fm.Get(BG).GT(this.
AoJ().InitializeDown(BG,pos,this.L5.Get(BG)+1,this.Xe.Get(BG),false,E9));this.H8=
0;return true;}if(!S3&&!!this.Fm.Get(BG)){var pos=E9;var B0=this.Fm.Get(BG).Ab;while(
!!B0&&(B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0)pos=this.Ah_.
Get(BG);this.EK=BG;var tmp=this.Fm.Get(BG);this.Fm.Set(BG,null);tmp.GT(this.AoJ(
).InitializeUp(BG,pos,this.AfI.Get(BG),this.Xf.Get(BG),this.L5.Get(BG)+1,this.Xe.
Get(BG),false,E9,this.AcY.Get(BG)));this.BroadcastEvent(this.Ate().InitializeUp(
BG,this.L5.Get(BG)+1,false,tmp,E9),0x18);this.H8=0;return true;}this.H8=0;return false;
},ATR:function(Z6,Bbn,AcN,AcM){if(Z6===this)Z6=null;if(!!!Z6&&!!this.Jt)Z6=this.
Jt.C1;if(!this.Fm.Get(this.EK))return;var Js;Js=this.X6(A.abh(ME,this.Rq.Get(this.
EK)),this.EK,1,Z6,AcN,AcM);if(!!Js&&(this.Fm.Get(this.EK)!==Js.Cg))this.ANf(Js.Cg
,Js.DC);if(!Js&&(this.Fm.Get(this.EK)!==Bbn))this.ANf(Bbn,Cc);},ANf:function(Z6,
W5){if(!this.Fm.Get(this.EK)||(this.Fm.Get(this.EK)===Z6))return;var tmp=this.Fm.
Get(this.EK);this.Fm.Set(this.EK,null);tmp.GT(this.AoJ().InitializeUp(this.EK,this.
Ah_.Get(this.EK),this.AfI.Get(this.EK),this.Xf.Get(this.EK),this.L5.Get(this.EK)+
1,this.Xe.Get(this.EK),true,this.Rq.Get(this.EK),this.AcY.Get(this.EK)));this.BroadcastEvent(
this.Ate().InitializeUp(this.EK,this.L5.Get(this.EK)+1,true,tmp,this.Rq.Get(this.
EK)),0x18);var pos=this.Rq.Get(this.EK);var B0=null;if(!!Z6)B0=Z6.Ab;while(!!B0&&(
B0!==this)){pos=A.abe(pos,B0.M.slice(0,2));B0=B0.Ab;}if(!B0&&(Z6!==this)){this.Fm.
Set(this.EK,null);return;}this.BroadcastEvent(this.Ate().InitializeDown(this.EK,
this.L5.Get(this.EK)+1,true,Z6,this.Rq.Get(this.EK)),0x18);var ticksCount=0;ticksCount=((
new Date).getTime()-A.v$)|0;this.Fm.Set(this.EK,Z6);this.Xe.Set(this.EK,W5);this.
AfI.Set(this.EK,pos);this.Ah_.Set(this.EK,pos);this.L5.Set(this.EK,0);this.Xf.Set(
this.EK,0);this.Atf.Set(this.EK,ticksCount);this.AcY.Set(this.EK,this.Rq.Get(this.
EK));this.Fm.Get(this.EK).GT(this.AoJ().InitializeDown(this.EK,pos,this.L5.Get(this.
EK)+1,this.Xe.Get(this.EK),true,this.AcY.Get(this.EK)));},AOk:function(){if(!!this.
Jt)return this.Jt.C1;return null;},AB$:function(Ku){var B;if(!Ku)throw new Error(
SY);if(!((Ku.U&0x80)===0x80))throw new Error(UJ);if(this.Jt.C1===Ku)this.Jt=this.
Jt.Ah;else{var Azn=this.Jt;while(Azn.Ah.C1!==Ku)Azn=Azn.Ah;Azn.Ah=Azn.Ah.Ah;}Ku.
Cw(0x0,0xD0);if(this.Azo){if(!!this.Jt)this.Jt.C1.Cw(0x50,0x0);else this.Cw(0x50
,0x0);}},AMo:function(Ku){var B;var At=A._NewObject(C.A7n,0);if(!Ku)throw new Error(
ZM);if(Ku===null)throw new Error(WN);if(((Ku.U&0x80)===0x80))throw new Error(IJ);
if(!!this.Jt)this.Jt.C1.Cw(0x0,0x50);else this.Cw(0x0,0x50);At.Ah=this.Jt;At.C1=
Ku;this.Jt=At;if(this.Azo)Ku.Cw(0xD0,0x0);else Ku.Cw(0x90,0x0);},_Init:function(
aArg){C.O._Init.call(this,aArg);C.Timer._Init.call(this.Ah$={I:this},0);(this.Fm=[
]).__proto__=C.Root.Fm;(this.L5=[]).__proto__=C.Root.L5;(this.AJg=[]).__proto__=
C.Root.AJg;(this.Xf=[]).__proto__=C.Root.Xf;(this.AfI=[]).__proto__=C.Root.AfI;(
this.Atf=[]).__proto__=C.Root.Atf;(this.Ah_=[]).__proto__=C.Root.Ah_;(this.Xe=[]
).__proto__=C.Root.Xe;(this.Rq=[]).__proto__=C.Root.Rq;(this.AcY=[]).__proto__=C.
Root.AcY;(this.Or=[]).__proto__=C.Root.Or;(this.J7=[]).__proto__=C.Root.J7;this.
__proto__=C.Root;this.U=0x10007F;this.Ah$.PN(10);this.Ah$.Mv=[this,this.BxU];this.
Init(aArg);},_Done:function(){this.__proto__=C.O;this.Ah$._Done();C.O._Done.call(
this);},_ReInit:function(){C.O._ReInit.call(this);this.Ah$._ReInit();},_Mark:function(
D){var B;C.O._Mark.call(this,D);if((B=this.Rx)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Jt)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Fm,D);if((B=this.
Ata)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ah$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Core::Root"};C.Event={Bw:0,Avs:false,Init:function(aArg){this.Bw=
this.Au2();},Au2:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.
v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=C.Event;this.Init(
aArg);A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={CN:0,DM:0,Down:false
,Initialize2:function(Kt,S3){this.CN=0;this.DM=Kt;this.Down=S3;if((Kt>=0x30)&&(Kt<=
0x39))this.CN=(10+Kt)-48;if((Kt>=0x41)&&(Kt<=0x5A))this.CN=(105+Kt)-65;if((Kt>=0x61
)&&(Kt<=0x7A))this.CN=(105+Kt)-97;if(Kt===0x20)this.CN=131;if(!this.CN)switch(Kt
){case 0x2B:this.CN=132;break;case 0x2D:this.CN=133;break;case 0x2A:this.CN=134;
break;case 0x2F:this.CN=135;break;case 0x3D:this.CN=136;break;case 0x2E:this.CN=
137;break;case 0x2C:this.CN=138;break;case 0x3A:this.CN=139;break;case 0x3B:this.
CN=140;break;default:;}return this;},Initialize:function(Kt,S3){this.CN=Kt;this.
Down=S3;this.DM=0x00;var A00=Kt-10;var As$=Kt-105;if((A00>=0)&&(A00<=9))this.DM=(
48+A00)&0xFFFF;if((As$>=0)&&(As$<=25))this.DM=(65+As$)&0xFFFF;if(Kt===131)this.DM=
0x20;if(this.DM===0x00)switch(Kt){case 132:this.DM=0x2B;break;case 133:this.DM=0x2D;
break;case 134:this.DM=0x2A;break;case 135:this.DM=0x2F;break;case 136:this.DM=0x3D;
break;case 137:this.DM=0x2E;break;case 138:this.DM=0x2C;break;case 139:this.DM=0x3A;
break;case 140:this.DM=0x3B;break;default:;}return this;},BiI:function(Bbc){switch(
Bbc){case 141:return((this.DM>=0x41)&&(this.DM<=0x5A))||((this.DM>=0x61)&&(this.
DM<=0x7A));case 142:return(((this.DM>=0x41)&&(this.DM<=0x5A))||((this.DM>=0x61)&&(
this.DM<=0x7A)))||((this.DM>=0x30)&&(this.DM<=0x39));case 143:return(this.DM>=0x30
)&&(this.DM<=0x39);case 144:return(((this.DM>=0x41)&&(this.DM<=0x46))||((this.DM>=
0x61)&&(this.DM<=0x66)))||((this.DM>=0x30)&&(this.DM<=0x39));case 145:return this.
DM!==0x00;case 146:return(this.DM===0x00)&&!!this.CN;case 147:return(((this.CN===
6)||(this.CN===7))||(this.CN===4))||(this.CN===5);case 148:return(this.DM!==0x00
)||!!this.CN;default:;}return Bbc===this.CN;},_Init:function(aArg){C.Event._Init.
call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.AQT={
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.AQT;},_className:
"Core::LanguageEvent"};C.Auw={Axf:null,LP:A.wf,N5:0,Iz:0,Down:false,NA:false,InitializeUp:
function(BG,Od,Aok,A0C,Z5){this.Down=false;this.Iz=BG;this.N5=Od;this.LP=Z5;this.
Axf=A0C;this.NA=Aok;return this;},InitializeDown:function(BG,Od,Aok,A0C,Z5){this.
Down=true;this.Iz=BG;this.N5=Od;this.LP=Z5;this.Axf=A0C;this.NA=Aok;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Auw;},_Mark:
function(D){var B;C.Event._Mark.call(this,D);if((B=this.Axf)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Core::CursorGrabEvent"};C.AdW={AgJ:A.wf,LP:A.wf,N5:0,Jg:
0,NL:A.wf,HW:A.wf,Iz:0,Down:false,NA:false,InitializeHold:function(BG,AkZ,Ayt,Ayu
,Od,W5,Z5,Ays){this.Down=true;this.Iz=BG;this.HW=A.abf(AkZ,W5);this.NL=A.abf(Ayt
,W5);this.Jg=Ayu;this.N5=Od;this.LP=Z5;this.AgJ=Ays;return this;},InitializeUp:function(
BG,AkZ,Ayt,Ayu,Od,W5,Aok,Z5,Ays){this.Down=false;this.Iz=BG;this.HW=A.abf(AkZ,W5
);this.NL=A.abf(Ayt,W5);this.Jg=Ayu;this.N5=Od;this.NA=Aok;this.LP=Z5;this.AgJ=Ays;
return this;},InitializeDown:function(BG,AkZ,Od,W5,Aok,Z5){this.Down=true;this.Iz=
BG;this.HW=A.abf(AkZ,W5);this.NL=A.abf(AkZ,W5);this.Jg=0;this.N5=Od;this.NA=Aok;
this.LP=Z5;this.AgJ=Z5;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.AdW;},_className:"Core::CursorEvent"};C.Aqj={AgJ:A.wf,LP:
A.wf,N5:0,Jg:0,DC:A.wf,NL:A.wf,HW:A.wf,Iz:0,Initialize:function(BG,AkZ,Ayt,aOffset
,Ayu,BwT,W5,Z5,Ays){this.Iz=BG;this.HW=A.abf(AkZ,W5);this.NL=A.abf(Ayt,W5);this.
DC=aOffset;this.Jg=Ayu;this.N5=BwT;this.LP=Z5;this.AgJ=Ays;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Aqj;},_className:"Core::DragEvent"
};C.Z={BW:null,Nr:null,En:null,Bt:A.wf,AUk:0,Space:0,AgH:0,Ka:function(CZ,aClip,
aOffset,Ch,aBlend){},GetClipping:function(){var B;var Az=C.Ep.GetClipping.call(this
);if(((this.U&0x80000)===0x80000)){var ApK=BF;var X;for(X=this.Ah;!!X&&!((X.U&0x200
)===0x200);X=X.Ah)if(((X.U&0x1)===0x1))ApK=A.wC(ApK,X.GetClipping());Az=A.wC(Az,
ApK);}return Az;},Cw:function(Rk,UR){var B;var Tf=this.U;if((!!this.Ab&&((this.U&
0x80001)===0x80001))&&((UR&0x80000)===0x80000))this.Ab.Bg(this.GetClipping());C.
Ep.Cw.call(this,Rk,UR);if(((!!this.Ab&&((this.U&0x1)===0x1))&&((Rk&0x80000)===0x80000
))&&!((Tf&0x80000)===0x80000))this.Ab.Bg(this.GetClipping());},H:function(E){var
B;if(A.aaY(E,this.M))return;var AlC=[(B=this.M)[2]-B[0],B[3]-B[1]];var AJ2=[E[2]-
E[0],E[3]-E[1]];var ApG=!A.aaX(AlC,AJ2);var Fo=A.abe(E.slice(0,2),this.M.slice(0
,2));if(!A.aaX(Fo,Cc)&&!ApG){var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var tmp=((X.U&0x100)===0x100);X.Am3(Fo,tmp);}X=X.Ah;}A.pe(this.
En,this);}if((ApG&&(AlC[0]>0))&&(AlC[1]>0)){var Bd=A.abh(this.M,this.Bt);var X=this.
Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){if(!!X.Eq&&(X.Eq.
Nt!==this))X.Eq=null;if(!X.Eq&&((X.PG!==0x14)||!!this.AgH))X.Atr(Bd,this);}X=X.Ah;
}A.pe(this.En,this);}C.Ep.H.call(this,E);if(!!this.Ab&&ApG){this.U=this.U|0x1000;
if(!((this.Ab.U&0x2000)===0x2000)){this.Ab.U=this.Ab.U|0x4000;A.pe([B=this.Ab,B.
Jy],this);}}},Be0:function(){var B;if((!this.AgH||!!!this.Ab)||!((this.Ab.U&0x4000
)===0x4000))return;var X=this.Ah;var A1i=((this.U&0x1000)===0x1000);for(;!!X&&!A1i;
X=X.Ah){if(((X.U&0x400)===0x400)&&((X.U&0x800)===0x800))A1i=true;if(((X.U&0x200)===
0x200))break;}if(A1i){this.U=this.U&~0x4000;this.Ab.Be_();}},App:function(G){var
B;this.BW.Q=null;this.BW.Ql=null;this.BW=null;(B=this.Nr)?B[1].call(B[0],this):null;
},Gj:function(E){var B;var Fo=A.abe(E,this.Bt);if(A.aaX(Fo,Cc))return;this.Bt=E;
var X=this.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var tmp=((
X.U&0x100)===0x100);X.Am3(Fo,tmp);}X=X.Ah;}if(!!this.Ab)this.Ab.Bg(this.M);A.pe(
this.En,this);},A93:function(E){var B;if(E<0)E=0;if(E===this.AUk)return;this.AUk=
E;if(!!this.Ab&&!!this.AgH){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([
B=this.Ab,B.Jy],this);}},BmJ:function(E){var B;if(E<0)E=0;if(E===this.Space)return;
this.Space=E;if(!!this.Ab&&!!this.AgH){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|
0x4000;A.pe([B=this.Ab,B.Jy],this);}},Kg:function(E){var B;if(E===this.AgH)return;
this.AgH=E;if(!!this.Ab){this.U=this.U|0x1000;this.Ab.U=this.Ab.U|0x4000;A.pe([B=
this.Ab,B.Jy],this);}},Vi:function(AcH,EZ){var As$=this.Df(0x1);var Ro=this.M;var
U5=A.abe(As$.slice(0,2),Ro.slice(0,2));var L7=A.abe(As$.slice(2,4),Ro.slice(2,4)
);var Br=Cc;if((U5[0]>0)&&(L7[0]>U5[0]))Br=[U5[0],Br[1]];else if((U5[0]>0)&&(L7[
0]>0))Br=[L7[0],Br[1]];if((L7[0]<0)&&(U5[0]<L7[0]))Br=[L7[0],Br[1]];else if((L7[
0]<0)&&(U5[0]<0))Br=[U5[0],Br[1]];if((U5[1]>0)&&(L7[1]>U5[1]))Br=[Br[0],U5[1]];else
if((U5[1]>0)&&(L7[1]>0))Br=[Br[0],L7[1]];if((L7[1]<0)&&(U5[1]<L7[1]))Br=[Br[0],L7[
1]];else if((L7[1]<0)&&(U5[1]<0))Br=[Br[0],U5[1]];if(A.aaX(Br,Cc)){(EZ)?EZ[1].call(
EZ[0],this):null;return;}if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.
Ql=null;this.Nr=null;}this.BW=AcH;if(!this.BW){this.Gj(A.abe(this.Bt,Br));(EZ)?EZ[
1].call(EZ[0],this):null;}else{this.BW.Ar(false);this.BW.HI(1);this.BW.Q=[this,this.
Anc,this.Gj];this.BW.Cu=this.Bt;this.BW.B3=A.abe(this.Bt,Br);this.BW.Ql=[this,this.
App];this.BW.AeQ(false);this.BW.Ar(true);this.Nr=EZ;}},HA:function(Ag,AcK,AcH,EZ
){var B;if(!Ag)return;if((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400))throw new Error(
UK);this.Be0();var Az=Ag.GetExtent();var Bd=this.M;var LK=A.lb(Az,Bd);if((!AcK&&
!((LK[0]>=LK[2])||(LK[1]>=LK[3])))||(AcK&&A.aaY(LK,Az))){(EZ)?EZ[1].call(EZ[0],this
):null;return;}var Br=Cc;if(Az[2]>Bd[2])Br=[Az[2]-Bd[2],Br[1]];if(Az[3]>Bd[3])Br=[
Br[0],Az[3]-Bd[3]];if(Br[0]>(Az[0]-Bd[0]))Br=[Az[0]-Bd[0],Br[1]];if(Br[1]>(Az[1]-
Bd[1]))Br=[Br[0],Az[1]-Bd[1]];if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.
BW.Ql=null;this.Nr=null;}this.BW=AcH;if(!this.BW){this.Gj(A.abe(this.Bt,Br));(EZ
)?EZ[1].call(EZ[0],this):null;}else{this.BW.Ar(false);this.BW.HI(1);this.BW.Q=[this
,this.Anc,this.Gj];this.BW.Cu=this.Bt;this.BW.B3=A.abe(this.Bt,Br);this.BW.Ql=[this
,this.App];this.BW.AeQ(false);this.BW.Ar(true);this.Nr=EZ;}},Bh_:function(Ag){var
B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400)))return-1;var CD=-1;while(
!!Ag&&!((Ag.U&0x200)===0x200)){if(((Ag.U&0x400)===0x400))CD=CD+1;Ag=Ag.AJ;}return CD;
},TH:function(Ag,aFilter){var B;if(!!Ag&&((Ag.Ab!==this.Ab)||!((Ag.U&0x400)===0x400
)))return null;var X=this.Ah;var IN=0x10000;if(((aFilter&0x10000)===0x10000))IN=
0x0;if(!!Ag)X=Ag.Ah;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200)===0x200)){if(((
B=aFilter)&&((X.U&B)===B))&&(!IN||!((B=IN)&&((X.U&B)===B))))return X;X=X.Ah;}return null;
},Df:function(aFilter){var B;var X=this.Ah;var AE=BF;var IN=0x10000;this.Be0();if(((
aFilter&0x10000)===0x10000))IN=0x0;aFilter=aFilter|0x400;while(!!X&&!((X.U&0x200
)===0x200)){if(((B=aFilter)&&((X.U&B)===B))&&(!IN||!((B=IN)&&((X.U&B)===B))))AE=
A.wC(AE,X.GetExtent());X=X.Ah;}return AE;},Anc:function(){return this.Bt;},_Init:
function(aArg){C.Ep._Init.call(this,aArg);this.__proto__=C.Z;this.U=0x203;},_Mark:
function(D){var B;C.Ep._Mark.call(this,D);if((B=this.BW)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
En)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::Outline"};C.CL={
Hu:null,BW:null,Cg:null,Ww:null,Nr:null,En:null,Hd:null,Tc:-1,Tb:0,Jd:-1,Hk:0,Ais:
8,Ol:0,Uo:0,Acr:A.wf,GW:-1,Bt:0,Gk:-1,OO:0,GY:24,AY:0,Lh:null,NH:false,Atu:false
,AUr:function(Il,Oc,W4,S4,S5,AhT,O5,Rj,Lx,Lv,Lw){throw new Error(ZN);},Aqh:function(
Il,AhT,O5,Rj,Lx,Lv,Lw){throw new Error(WO);},Aku:function(Il,Oc,W4,S4,S5,O5,Rj,Lx
,Lv,Lw){throw new Error(ZO);},DispatchEvent:function(CM){var B;var result=null;if(((
this.Gk>=0)&&(this.Gk<this.AY))&&!this.AW){this.GW=this.Gk;this.Cg=(C.Cg.isPrototypeOf(
B=A._NewObject(this.Lh,0))?B:null);if(!!this.B9)this.B9.Ah=this.Cg;else this.B8=
this.Cg;this.Cg.AJ=this.B9;this.B9=this.Cg;this.Cg.Ab=this;this.Acr=[(B=this.M)[
2]-B[0],this.GY];(B=this.Hd)?B[1].call(B[0],this):null;var B0=(C.O.isPrototypeOf(
B=this.Cg)?B:null);if(!!B0)result=B0.DispatchEvent(CM);else result=this.Cg.GT(CM
);if(!!this.Cg.AJ)this.Cg.AJ.Ah=null;else this.B8=null;this.B9=this.Cg.AJ;this.Cg.
AJ=null;this.Cg.Ab=null;this.Cg=null;}if(!result)result=C.O.DispatchEvent.call(this
,CM);return result;},Ai:function(Ae){var B;if(!this.Lh){A.pe(this.En,this);return;
}this.Atu=true;var AAg=0;if(!this.NH)AAg=this.OO;var FK=this.AlL(-AAg-this.Bt,1);
var GO=this.AlL(((((B=this.M)[3]-B[1])-AAg)-this.Bt)-1,2);var CD=GO-FK;if(CD<1)CD=
1;var Ah5=(CD/2)|0;var Ah6=(CD/3)|0;if(!Ah5)Ah5=1;if(!Ah6)Ah6=1;if(FK<this.Hk){FK=
FK-Ah5;GO=GO+Ah6;}else if(GO>this.Jd){FK=FK-Ah6;GO=GO+Ah5;}else{FK=this.Hk;GO=this.
Jd;}if(!this.NH){if(FK>=this.AY){FK=0;GO=-1;}else if(GO<0){FK=0;GO=-1;}if(GO>=this.
AY)GO=this.AY-1;if(FK<0)FK=0;}else if(this.AY<=0){FK=0;GO=-1;}var AiL=this.Hk;var
AiM=this.Jd;var Apc=0;var Apd=-1;if(FK>AiL)AiL=FK;if(GO<AiM)AiM=GO;if(AiL<=AiM){
while((this.Jd<GO)&&(this.Hk<AiL)){this.Adm();this.AyS();}while((this.Hk>FK)&&(this.
Jd>AiM)){this.AAt();this.AyR();}}else{this.Jd=(this.Jd-this.Hk)+FK;this.Hk=FK;Apc=
this.Hk;Apd=this.Jd;}while(this.Hk<FK)this.Adm();while(this.Jd>GO)this.AAt();while(
this.Hk>FK)this.AyR();while(this.Jd<GO)this.AyS();var Aa=this.B8;var inx=this.Hk;
var pos=[0,(AAg+this.Bt)+this.Jb(inx,0)];var BJ=(B=this.M)[3]-B[1];var Alk=null;
var BfS=(B=this.M)[2]-B[0];while(!!Aa){var Iq=inx;if(this.NH){if(Iq<0)Iq=this.AY-(-
Iq%this.AY);if(Iq>0)Iq=Iq%this.AY;}var Adn=((Iq>=this.Tb)&&(Iq<=this.Tc))||((inx>=
Apc)&&(inx<=Apd));var AoV=Aa.GetExtent();var Br=A.abe(pos,AoV.slice(0,2));if(Adn
)this.Uo=this.GY;else this.Uo=AoV[3]-AoV[1];var A1Y=pos[1];var A1Z=pos[1]+this.Uo;
if(!A.aaX(Br,Cc))Aa.Am3(Br,true);if((Adn&&(A1Y<BJ))&&(A1Z>0)){this.Cg=Aa;this.GW=
Iq;this.Acr=[BfS,this.Uo];(B=this.Hd)?B[1].call(B[0],this):null;}Aa=Aa.Ah;inx+=1;
pos=[pos[0],pos[1]+this.Uo];}inx=this.Hk;Aa=this.B8;pos=[0,(AAg+this.Bt)+this.Jb(
inx,0)];while(!!Aa){var Iq=inx;if(this.NH){if(Iq<0)Iq=this.AY-(-Iq%this.AY);if(Iq>
0)Iq=Iq%this.AY;}var Adn=((Iq>=this.Tb)&&(Iq<=this.Tc))||((inx>=Apc)&&(inx<=Apd)
);if(Adn)this.Uo=this.GY;else this.Uo=(B=Aa.GetExtent())[3]-B[1];var A1Y=pos[1];
var A1Z=pos[1]+this.Uo;if(Adn&&!((A1Y<BJ)&&(A1Z>0))){this.Cg=Aa;this.GW=Iq;this.
Acr=[BfS,this.Uo];(B=this.Hd)?B[1].call(B[0],this):null;}if(((Iq===this.Gk)&&this.
NH)&&!!Alk){var Ro=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(A.aaH(A.lb(Aa.GetExtent(
),Ro))>A.aaH(A.lb(Alk.GetExtent(),Ro)))Alk=Aa;}else if(Iq===this.Gk)Alk=Aa;Aa=Aa.
Ah;inx+=1;pos=[pos[0],pos[1]+this.Uo];}this.Tb=0;this.Tc=-1;this.Cg=null;this.GW=-
1;this.Bb(Alk);this.Atu=false;A.pe(this.En,this);},QA:function(Ag,Gs,aFilter){return null;
},Aqo:function(Ag,aFilter){return null;},TH:function(Ag,aFilter){return null;},ACh:
function(Ag,aFilter){return null;},Df:function(aFilter){return BF;},NI:function(
Ku,FH,Lx,Lv,Lw){throw new Error(WQ);},Ahn:function(Ag,JV){throw new Error(ZP);},
Zl:function(Ag){throw new Error(ZQ);},JO:function(Ag,P8){throw new Error(UL);},HJ:
function(Ag){throw new Error(WR);},ALC:function(Ag,JV){throw new Error(Rd);},J:function(
Ag,P8){throw new Error(ZR);},Jb:function(G3,A0b){return G3*this.GY;},AlL:function(
E9,A0b){return(E9/this.GY)|0;},AAt:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AW)this.Bb(null);this.Jd=this.Jd-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eq=null;if(this.Ol<this.Ais){if(!
!this.Hu)this.Hu.AJ=Aa;Aa.Ah=this.Hu;this.Hu=Aa;this.Ol++;}return Aa;},AyS:function(
){var B;var Aa=this.Hu;var Ac_=this.Lh;var Adr=++this.Jd;if(this.NH){if(Adr<0)Adr=
this.AY-(-Adr%this.AY);if(Adr>0)Adr=Adr%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ac_))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hu===Aa)this.Hu=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Cg.
isPrototypeOf(B=A._NewObject(Ac_,0))?B:null);Aa.A3(0x1D);if(!!this.Ol)this.Ais++;
}this.Uo=this.GY;this.GW=Adr;this.Acr=[(B=this.M)[2]-B[0],this.Uo];this.Cg=Aa;(B=
this.Hd)?B[1].call(B[0],this):null;this.Cg=null;this.GW=-1;if(!!this.B9)this.B9.
Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(Adr===this.Gk
)this.Bb(Aa);return Aa;},Adm:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AW)this.Bb(null);this.Hk=this.Hk+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eq=null;if(this.Ol<this.Ais){if(!!this.Hu
)this.Hu.AJ=Aa;Aa.Ah=this.Hu;this.Hu=Aa;this.Ol++;}return Aa;},AyR:function(){var
B;var Aa=this.Hu;var Ac_=this.Lh;var MY=--this.Hk;if(this.NH){if(MY<0)MY=this.AY-(-
MY%this.AY);if(MY>0)MY=MY%this.AY;}while(!!Aa&&(((B=Aa)?B.__proto__:null)!==Ac_)
)Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.Ah;if(this.Hu===
Aa)this.Hu=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Cg.isPrototypeOf(B=
A._NewObject(Ac_,0))?B:null);Aa.A3(0x1D);if(!!this.Ol)this.Ais++;}this.Uo=this.GY;
this.GW=MY;this.Acr=[(B=this.M)[2]-B[0],this.Uo];this.Cg=Aa;(B=this.Hd)?B[1].call(
B[0],this):null;this.Cg=null;this.GW=-1;if(!!this.B8)this.B8.AJ=Aa;Aa.Ab=this;Aa.
Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(MY===this.Gk)this.Bb(Aa);return Aa;
},App:function(G){var B;this.BW.Q=null;this.BW.Ql=null;this.BW=null;(B=this.Nr)?
B[1].call(B[0],this):null;},Bz3:function(G){this.Gj(this.Ww.DC[1]);},Bz4:function(
G){var B;if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.Ql=null;this.BW=
null;}if(!this.NH){var AE=this.Aqv(0,this.AY-1);var Af2=this.M.slice(0,2);AE=A.abP(
AE,AE[1]-this.OO);if(AE[0]>Af2[0])AE=[].concat(Af2[0],AE.slice(1,4));if(AE[1]>Af2[
1])AE=A.abP(AE,Af2[1]);var Fo=AE[1]-this.M[1];var A2b=((B=this.M)[3]-B[1])-(AE[3
]-AE[1]);if(A2b>0)A2b=0;this.Ww.DC=[0,this.Bt];this.Ww.Gf=[0,(this.Bt+A2b)-Fo];this.
Ww.FU=[0,this.Bt-Fo];}else{var Fo=32000-(32000%this.GY);this.Ww.DC=[0,this.Bt];this.
Ww.Gf=[0,this.Bt-Fo];this.Ww.FU=[0,this.Bt+Fo];}},ASs:function(E){var B;if(this.
NH===E)return;this.NH=E;while(!!this.Adm());this.An();this.Bg([0,0,(B=this.M)[2]-
B[0],B[3]-B[1]]);},AwB:function(E){if(E===this.Ww)return;if(!!E&&!!E.AtH){A.ab5(
"%s%*%s",O1,E,Re);throw new Error(WS);}if(!!this.Ww){this.Ww.AKc=null;this.Ww.AtH=
null;}this.Ww=E;if(!!E){E.AKc=[this,this.Bz4];E.AtH=[this,this.Bz3];}},Gj:function(
E){var B;if(this.NH&&(this.AY>0)){var Hw=this.Jb(this.AY,3);if(E<0)E=Hw-(-E%Hw);
if(E>0)E=E%Hw;if(E>0)E=E-Hw;}if(E===this.Bt)return;this.Bt=E;this.An();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GZ:function(E){if(E<0)E=-1;if(E===this.Gk)return;
this.Gk=E;this.An();},A9R:function(E){var B;if(E<0)E=0;if(E===this.OO)return;this.
OO=E;if(!this.NH){this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);}},AeN:function(
E){var B;if(E<1)E=1;if(E===this.GY)return;this.GY=E;while(!!this.Adm());this.An(
);this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jm:function(E){var B;if(E<0)E=0;
if(E===this.AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NH){if(
E>this.AY){AE=[].concat(AE.slice(0,3),(this.OO+this.Bt)+this.Jb(E,3));AE=A.abP(AE
,(this.OO+this.Bt)+this.Jb(this.AY,3));}else{AE=A.abP(AE,(this.OO+this.Bt)+this.
Jb(E,3));AE=[].concat(AE.slice(0,3),(this.OO+this.Bt)+this.Jb(this.AY,3));}}else
while(!!this.Adm());this.AY=E;this.An();this.Bg(AE);},NV:function(E){var B;if(E===
this.Lh)return;this.Lh=E;while(!!this.Adm());this.Hu=null;this.Ol=0;this.An();this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bil:function(G3){if(this.Atu)return null;
if((G3<0)||(G3>=this.AY))return null;if(!this.NH){if((G3<this.Hk)||(G3>this.Jd))
return null;var X=this.B8;while(G3>this.Hk){X=X.Ah;G3=G3-1;}return X;}else{var MY=
this.Hk;if(MY<0)MY=this.AY-(-MY%this.AY);if(MY>0)MY=MY%this.AY;var X=this.B8;while(
!!X){if((MY%this.AY)===G3)return X;X=X.Ah;MY=MY+1;}return null;}},AA9:function(AcH
,EZ){var B;if(this.NH){(EZ)?EZ[1].call(EZ[0],this):null;return;}var AJG=this.Bt;
var BcD=((((B=this.M)[3]-B[1])-this.Bt)-this.OO)-this.Jb(this.AY,3);var Br=0;if(
AJG>0)Br=-AJG;else if(BcD>0)Br=BcD;if((Br>0)&&(Br>-AJG))Br=-AJG;if(!Br){(EZ)?EZ[
1].call(EZ[0],this):null;return;}if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;
this.BW.Ql=null;this.Nr=null;}this.BW=AcH;if(!this.BW){this.Gj(this.Bt+Br);(EZ)?
EZ[1].call(EZ[0],this):null;}else{this.BW.Ar(false);this.BW.HI(1);this.BW.Q=[this
,this.Anc,this.Gj];this.BW.Cu=this.Bt;this.BW.B3=this.Bt+Br;this.BW.Ql=[this,this.
App];this.BW.AeQ(false);this.BW.Ar(true);this.Nr=EZ;}},HA:function(G3,AcK,AcH,EZ
){var B;if((G3<0)||(G3>=this.AY))return;var Az=this.Aqv(G3,G3);var Bd=this.M;var
LK=A.lb(Az,Bd);if((!AcK&&!((LK[0]>=LK[2])||(LK[1]>=LK[3])))||(AcK&&A.aaY(LK,Az))
){(EZ)?EZ[1].call(EZ[0],this):null;return;}var Br=0;if(Az[3]>Bd[3])Br=Az[3]-Bd[3
];if(Br>(Az[1]-Bd[1]))Br=Az[1]-Bd[1];if(!!this.BW){this.BW.Ar(false);this.BW.Q=null;
this.BW.Ql=null;this.Nr=null;}this.BW=AcH;if(!this.BW){this.Gj(this.Bt-Br);(EZ)?
EZ[1].call(EZ[0],this):null;}else{this.BW.Ar(false);this.BW.HI(1);this.BW.Q=[this
,this.Anc,this.Gj];this.BW.Cu=this.Bt;this.BW.B3=this.Bt-Br;this.BW.Ql=[this,this.
App];this.BW.AeQ(false);this.BW.Ar(true);this.Nr=EZ;}},Bid:function(){return BF;
},AOm:function(){if((this.OO<=0)||this.NH)return BF;var AE=this.M;AE=A.abP(AE,AE[
1]+this.Bt);AE=[].concat(AE.slice(0,3),AE[1]+this.OO);return AE;},A6p:function(E9
){if(((this.AY<=0)||(E9[0]<this.M[0]))||(E9[0]>=this.M[2]))return-1;E9=A.abe(E9,
this.M.slice(0,2));if(!this.NH){var Aa=(E9[1]-this.Bt)-this.OO;if(Aa>0)Aa=this.AlL(
Aa,0);if((Aa<0)||(Aa>=this.AY))return-1;return Aa;}var Aa=E9[1]-this.Bt;if(Aa>0)
Aa=this.AlL(Aa,0);if(Aa<0)Aa=this.AlL(Aa,0)-1;if(Aa<0)Aa=this.AY-(-Aa%this.AY);if(
Aa>0)Aa=Aa%this.AY;return Aa;},Aqv:function(JT,L1){if(JT<0)JT=0;if(L1>=this.AY)L1=
this.AY-1;if(JT>L1)return BF;var AE=this.M;var Br=this.Bt;if(this.NH){var Hw=this.
Jb(this.AY,3);if(Br<0)Br=Hw-(-Br%Hw);if(Br>0)Br=Br%Hw;if(Br>0)Br=Br-Hw;}else Br=
Br+this.OO;AE=[].concat(AE.slice(0,3),(AE[1]+Br)+this.Jb(L1+1,0));AE=A.abP(AE,(AE[
1]+Br)+this.Jb(JT,0));return AE;},Abp:function(JT,L1){var B;if(JT<0)JT=0;if(JT>L1
)return;if(this.Tb>this.Tc){this.Tb=JT;this.Tc=L1;}else{if(JT<this.Tb)this.Tb=JT;
if(L1>this.Tc)this.Tc=L1;}var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(!this.NH){
AE=A.abP(AE,(this.OO+this.Bt)+this.Jb(JT,0));AE=[].concat(AE.slice(0,3),(this.OO+
this.Bt)+this.Jb(L1+1,0));}else if((this.Jb(this.AY-1,3)>=(AE[3]-AE[1]))&&((AE[3
]-AE[1])>0)){var Br=this.Bt;var Hw=this.Jb(this.AY,3);if(Br<0)Br=Hw-(-Br%Hw);if(
Br>0)Br=Br%Hw;if(Br>0)Br=Br-Hw;AE=A.abP(AE,Br+this.Jb(JT,0));AE=[].concat(AE.slice(
0,3),Br+this.Jb(L1+1,0));}this.An();this.Bg(AE);},Anc:function(){return this.Bt;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.CL;this.H(WT);
this.Lh=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hu
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ww)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.En)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::VerticalList"};C.Dv={Hu:null
,BW:null,Cg:null,Nr:null,Hd:null,Tc:-1,Tb:0,Jd:-1,Hk:0,Ais:8,Ol:0,Sz:0,Acr:A.wf,
GW:-1,Bt:0,Gk:-1,VX:24,AY:0,Lh:null,Atu:false,AUr:function(Il,Oc,W4,S4,S5,AhT,O5
,Rj,Lx,Lv,Lw){throw new Error(WU);},Aqh:function(Il,AhT,O5,Rj,Lx,Lv,Lw){throw new
Error(WV);},Aku:function(Il,Oc,W4,S4,S5,O5,Rj,Lx,Lv,Lw){throw new Error(ZS);},DispatchEvent:
function(CM){var B;var result=null;if(((this.Gk>=0)&&(this.Gk<this.AY))&&!this.AW
){this.GW=this.Gk;this.Cg=(C.Cg.isPrototypeOf(B=A._NewObject(this.Lh,0))?B:null);
if(!!this.B9)this.B9.Ah=this.Cg;else this.B8=this.Cg;this.Cg.AJ=this.B9;this.B9=
this.Cg;this.Cg.Ab=this;this.Acr=[this.Sz,(B=this.M)[3]-B[1]];(B=this.Hd)?B[1].call(
B[0],this):null;var B0=(C.O.isPrototypeOf(B=this.Cg)?B:null);if(!!B0)result=B0.DispatchEvent(
CM);else result=this.Cg.GT(CM);if(!!this.Cg.AJ)this.Cg.AJ.Ah=null;else this.B8=null;
this.B9=this.Cg.AJ;this.Cg.AJ=null;this.Cg.Ab=null;this.Cg=null;}if(!result)result=
C.O.DispatchEvent.call(this,CM);return result;},Ai:function(Ae){var B;if(!this.Lh
)return;this.Atu=true;var FK=this.AlL(0-this.Bt,1);var GO=this.AlL((((B=this.M)[
2]-B[0])-this.Bt)-1,2);var CD=GO-FK;if(CD<1)CD=1;var Ah5=(CD/2)|0;var Ah6=(CD/3)|
0;if(!Ah5)Ah5=1;if(!Ah6)Ah6=1;if(FK<this.Hk){FK=FK-Ah5;GO=GO+Ah6;}else if(GO>this.
Jd){FK=FK-Ah6;GO=GO+Ah5;}else{FK=this.Hk;GO=this.Jd;}if(FK>=this.AY){FK=0;GO=-1;
}else if(GO<0){FK=0;GO=-1;}if(GO>=this.AY)GO=this.AY-1;if(FK<0)FK=0;var AiL=this.
Hk;var AiM=this.Jd;var Apc=0;var Apd=-1;if(FK>AiL)AiL=FK;if(GO<AiM)AiM=GO;if(AiL<=
AiM){while((this.Jd<GO)&&(this.Hk<AiL)){this.Adm();this.AyS();}while((this.Hk>FK
)&&(this.Jd>AiM)){this.AAt();this.AyR();}}else{this.Jd=(this.Jd-this.Hk)+FK;this.
Hk=FK;Apc=this.Hk;Apd=this.Jd;}while(this.Hk<FK)this.Adm();while(this.Jd>GO)this.
AAt();while(this.Hk>FK)this.AyR();while(this.Jd<GO)this.AyS();var Aa=this.B8;var
inx=this.Hk;var pos=[this.Bt+this.Jb(inx,0),0];var BX=(B=this.M)[2]-B[0];var Alk=
null;var BfH=(B=this.M)[3]-B[1];while(!!Aa){var Iq=inx;var Adn=((Iq>=this.Tb)&&(
Iq<=this.Tc))||((inx>=Apc)&&(inx<=Apd));var AoV=Aa.GetExtent();var Br=A.abe(pos,
AoV.slice(0,2));if(Adn)this.Sz=this.VX;else this.Sz=AoV[2]-AoV[0];var A1W=pos[0];
var A1X=pos[0]+this.Sz;if(!A.aaX(Br,Cc))Aa.Am3(Br,true);if((Adn&&(A1W<BX))&&(A1X>
0)){this.Cg=Aa;this.GW=Iq;this.Acr=[this.Sz,BfH];(B=this.Hd)?B[1].call(B[0],this
):null;}Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.Sz,pos[1]];}inx=this.Hk;Aa=this.B8;pos=[
this.Bt+this.Jb(inx,0),0];while(!!Aa){var Iq=inx;var Adn=((Iq>=this.Tb)&&(Iq<=this.
Tc))||((inx>=Apc)&&(inx<=Apd));if(Adn)this.Sz=this.VX;else this.Sz=(B=Aa.GetExtent(
))[2]-B[0];var A1W=pos[0];var A1X=pos[0]+this.Sz;if(Adn&&!((A1W<BX)&&(A1X>0))){this.
Cg=Aa;this.GW=Iq;this.Acr=[this.Sz,BfH];(B=this.Hd)?B[1].call(B[0],this):null;}if(
Iq===this.Gk)Alk=Aa;Aa=Aa.Ah;inx+=1;pos=[pos[0]+this.Sz,pos[1]];}this.Tb=0;this.
Tc=-1;this.Cg=null;this.GW=-1;this.Bb(Alk);this.Atu=false;},QA:function(Ag,Gs,aFilter
){return null;},Aqo:function(Ag,aFilter){return null;},TH:function(Ag,aFilter){return null;
},ACh:function(Ag,aFilter){return null;},Df:function(aFilter){return BF;},NI:function(
Ku,FH,Lx,Lv,Lw){throw new Error(WW);},Ahn:function(Ag,JV){throw new Error(WX);},
Zl:function(Ag){throw new Error(SZ);},JO:function(Ag,P8){throw new Error(ZT);},HJ:
function(Ag){throw new Error(ZU);},ALC:function(Ag,JV){throw new Error(Acu);},J:
function(Ag,P8){throw new Error(UM);},Jb:function(G3,A0b){return G3*this.VX;},AlL:
function(E9,A0b){return(E9/this.VX)|0;},AAt:function(){var Aa=this.B9;if(!Aa)return null;
if(Aa===this.AW)this.Bb(null);this.Jd=this.Jd-1;if(!!Aa.AJ)Aa.AJ.Ah=null;else this.
B8=null;this.B9=Aa.AJ;Aa.AJ=null;Aa.Ab=null;Aa.Eq=null;if(this.Ol<this.Ais){if(!
!this.Hu)this.Hu.AJ=Aa;Aa.Ah=this.Hu;this.Hu=Aa;this.Ol++;}return Aa;},AyS:function(
){var B;var Aa=this.Hu;var Ac_=this.Lh;var Adr=++this.Jd;while(!!Aa&&(((B=Aa)?B.
__proto__:null)!==Ac_))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.
AJ.Ah=Aa.Ah;if(this.Hu===Aa)this.Hu=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{
Aa=(C.Cg.isPrototypeOf(B=A._NewObject(Ac_,0))?B:null);Aa.A3(0x1D);if(!!this.Ol)this.
Ais++;}this.Sz=this.VX;this.GW=Adr;this.Acr=[this.Sz,(B=this.M)[3]-B[1]];this.Cg=
Aa;(B=this.Hd)?B[1].call(B[0],this):null;this.Cg=null;this.GW=-1;if(!!this.B9)this.
B9.Ah=Aa;Aa.Ab=this;Aa.AJ=this.B9;this.B9=Aa;if(!this.B8)this.B8=Aa;if(Adr===this.
Gk)this.Bb(Aa);return Aa;},Adm:function(){var Aa=this.B8;if(!Aa)return null;if(Aa===
this.AW)this.Bb(null);this.Hk=this.Hk+1;if(!!Aa.Ah)Aa.Ah.AJ=null;else this.B9=null;
this.B8=Aa.Ah;Aa.Ah=null;Aa.Ab=null;Aa.Eq=null;if(this.Ol<this.Ais){if(!!this.Hu
)this.Hu.AJ=Aa;Aa.Ah=this.Hu;this.Hu=Aa;this.Ol++;}return Aa;},AyR:function(){var
B;var Aa=this.Hu;var Ac_=this.Lh;var MY=--this.Hk;while(!!Aa&&(((B=Aa)?B.__proto__:
null)!==Ac_))Aa=Aa.Ah;if(!!Aa){if(!!Aa.Ah)Aa.Ah.AJ=Aa.AJ;if(!!Aa.AJ)Aa.AJ.Ah=Aa.
Ah;if(this.Hu===Aa)this.Hu=Aa.Ah;Aa.Ah=null;Aa.AJ=null;this.Ol--;}else{Aa=(C.Cg.
isPrototypeOf(B=A._NewObject(Ac_,0))?B:null);Aa.A3(0x1D);if(!!this.Ol)this.Ais++;
}this.Sz=this.VX;this.GW=MY;this.Acr=[this.Sz,(B=this.M)[3]-B[1]];this.Cg=Aa;(B=
this.Hd)?B[1].call(B[0],this):null;this.Cg=null;this.GW=-1;if(!!this.B8)this.B8.
AJ=Aa;Aa.Ab=this;Aa.Ah=this.B8;this.B8=Aa;if(!this.B9)this.B9=Aa;if(MY===this.Gk
)this.Bb(Aa);return Aa;},App:function(G){var B;this.BW.Q=null;this.BW.Ql=null;this.
BW=null;(B=this.Nr)?B[1].call(B[0],this):null;},Gj:function(E){var B;if(E===this.
Bt)return;this.Bt=E;this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},GZ:function(
E){if(E<0)E=-1;if(E===this.Gk)return;this.Gk=E;this.An();},AEQ:function(E){var B;
if(E<1)E=1;if(E===this.VX)return;this.VX=E;while(!!this.Adm());this.An();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Jm:function(E){var B;if(E<0)E=0;if(E===this.
AY)return;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(E>this.AY){AE=[].concat(this.
Bt+this.Jb(this.AY,3),AE.slice(1,4));AE=A.abN(AE,this.Bt+this.Jb(E,3));}else{AE=
A.abN(AE,this.Bt+this.Jb(this.AY,3));AE=[].concat(this.Bt+this.Jb(E,3),AE.slice(
1,4));}this.AY=E;this.An();this.Bg(AE);},NV:function(E){var B;if(E===this.Lh)return;
this.Lh=E;while(!!this.Adm());this.Hu=null;this.Ol=0;this.An();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},Bof:function(BwU,BwV){if(!this.BW)return;if(BwU)this.Gj(
this.BW.B3);var A3Q=this.Nr;this.BW.Ar(false);this.BW.Q=null;this.BW.Ql=null;this.
Nr=null;this.BW=null;if(BwV)(A3Q)?A3Q[1].call(A3Q[0],this):null;},BiN:function(){
return!!this.BW;},HA:function(G3,AcK,AcH,EZ){var B;if((G3<0)||(G3>=this.AY))return;
var Az=this.Aqv(G3,G3);var Bd=this.M;var LK=A.lb(Az,Bd);if((!AcK&&!((LK[0]>=LK[2
])||(LK[1]>=LK[3])))||(AcK&&A.aaY(LK,Az))){(EZ)?EZ[1].call(EZ[0],this):null;return;
}var Br=0;if(Az[2]>Bd[2])Br=Az[2]-Bd[2];if(Br>(Az[0]-Bd[0]))Br=Az[0]-Bd[0];if(!!
this.BW){this.BW.Ar(false);this.BW.Q=null;this.BW.Ql=null;this.Nr=null;}this.BW=
AcH;if(!this.BW){this.Gj(this.Bt-Br);(EZ)?EZ[1].call(EZ[0],this):null;}else{this.
BW.Ar(false);this.BW.HI(1);this.BW.Q=[this,this.Anc,this.Gj];this.BW.Cu=this.Bt;
this.BW.B3=this.Bt-Br;this.BW.Ql=[this,this.App];this.BW.AeQ(false);this.BW.Ar(true
);this.Nr=EZ;}},Aqv:function(JT,L1){if(JT<0)JT=0;if(L1>=this.AY)L1=this.AY-1;if(
JT>L1)return BF;var AE=this.M;var Br=this.Bt;AE=A.abN(AE,(AE[0]+Br)+this.Jb(L1+1
,0));AE=[].concat((AE[0]+Br)+this.Jb(JT,0),AE.slice(1,4));return AE;},Abp:function(
JT,L1){var B;if(JT<0)JT=0;if(JT>L1)return;if(this.Tb>this.Tc){this.Tb=JT;this.Tc=
L1;}else{if(JT<this.Tb)this.Tb=JT;if(L1>this.Tc)this.Tc=L1;}var AE=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];AE=[].concat(this.Bt+this.Jb(JT,0),AE.slice(1,4));AE=A.abN(
AE,this.Bt+this.Jb(L1+1,0));this.An();this.Bg(AE);},Anc:function(){return this.Bt;
},_Init:function(aArg){C.O._Init.call(this,aArg);this.__proto__=C.Dv;this.H(WT);
this.Lh=A.acg.Text;},_Mark:function(D){var B;C.O._Mark.call(this,D);if((B=this.Hu
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Cg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nr)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Hd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Core::HorizontalList"};C.Bn={ARK:null,AEd:null,AvE:null,DX:null,
Ll:null,BM:null,AKA:0,Bq:0,Iz:0,Bw:0,N5:0,Jg:0,DC:A.wf,NL:A.wf,HW:A.wf,Aw0:8,AeX:
0,A7g:1,Down:false,Yq:false,NA:false,A1p:false,AzN:0,Ka:function(CZ,aClip,aOffset
,Ch,aBlend){},GT:function(CM){var B;var BP=(C.AdW.isPrototypeOf(CM)?CM:null);var
D0=(C.Aqj.isPrototypeOf(CM)?CM:null);var AJS=this.Yq;var Aar;var U2;var AAO;var MV;
var Ay$;if(!BP&&!D0)return null;Aar=(!!BP&&BP.Down)&&!BP.Jg;U2=(!!BP&&BP.Down)&&(
BP.Jg>0);AAO=(!!BP&&BP.Down)&&(BP.Jg>this.AzN);MV=!!BP&&!BP.Down;Ay$=!!D0;if(Aar
)this.AzN=((B=(BP.NA?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if((((this.AeX&0x20)===0x20
)&&(this.Bq>0))&&(this.Bq<33554432)){var Ip=(C.Auw.isPrototypeOf(CM)?CM:null);if(((
!!Ip&&Ip.Down)&&(Ip.Axf!==this))&&A.wa(this.GetExtent(),this.Ab.A7c(Ip.LP))){this.
AKA=0x20;this.Bq=this.Bq|67108864;return null;}}if(Aar){var Apj=0;var Ac5;this.Bq=
this.Bq|(1<<BP.Iz);for(Ac5=this.Bq&4095;Ac5>0;Ac5=Ac5>>1)if(!!(Ac5&1))Apj=Apj+1;
if(Apj===1)this.Bq=(this.Bq|16777216)|(4096<<BP.Iz);}if(MV&&(this.Bq<16777216)){
var It=this.Ie();var Js=null;if(!!It){var A3I=(!!this.AJ?this.AJ:this.Ab);var A1d=(
!!It.Jt?It.Jt.C1:null);Js=It.X6(A.abh(ZV,BP.LP),BP.Iz,BP.N5,A1d,A3I,0x0);}if(!!Js
){var P;for(P=0;P<10;P++)if(!!(this.Bq&(1<<P)))Js.Cg.GT(A._NewObject(C.AdW,0).InitializeDown(
P,BP.HW,BP.N5,Cc,true,BP.LP));for(P=0;P<10;P++)if(!!(this.Bq&(1<<P)))Js.Cg.GT(A.
_NewObject(C.AdW,0).InitializeUp(P,BP.HW,BP.HW,0,BP.N5,Cc,false,BP.LP,BP.LP));}}
if(MV)this.Bq=(this.Bq&~(1<<BP.Iz))|33554432;if(AAO&&(this.Bq<16777216))this.Bq=
this.Bq|67108864;if(MV&&BP.NA)this.Bq=this.Bq|67108864;if(MV&&!(this.Bq&4095))this.
AKA=0x0;if(MV&&!(this.Bq&16777215))this.Bq=0;if(U2&&(this.Bq>=67108864)){var It=
this.Ie();if(!!It)It.ATR(null,null,this,this.AKA);}if((U2&&!!(this.Bq&16777216))&&
!!(this.Bq&33554432)){U2=false;MV=true;}if(!!BP&&!(this.Bq&(4096<<BP.Iz)))return this;
if(!!D0&&!(this.Bq&(4096<<D0.Iz)))return this;if(MV&&!(this.Bq&16777216))return this;
if(((Aar||Ay$)||U2)&&((this.Bq<16777216)||(this.Bq>=33554432)))return this;if(MV
)this.Bq=this.Bq&3758100479;if(MV&&!(this.Bq&16777215))this.Bq=0;if(!!BP){this.Down=
Aar||U2;this.Yq=this.AQF(BP.HW);this.NL=BP.NL;this.HW=BP.HW;this.DC=Cc;this.Jg=BP.
Jg;this.N5=BP.N5;this.NA=BP.NA;this.Iz=BP.Iz;this.Bw=BP.Bw;if(BP.Down&&!BP.Jg)AJS=
false;}if(!!D0){this.Down=true;this.Yq=this.AQF(D0.HW);this.NL=D0.NL;this.HW=D0.
HW;this.DC=D0.DC;this.Jg=D0.Jg;this.N5=D0.N5;this.Iz=D0.Iz;this.NA=false;this.Bw=
D0.Bw;}var A1j=this.Down;if(!!D0)(B=this.ARK)?B[1].call(B[0],this):null;if((!!BP&&
this.Down)&&!this.Jg)(B=this.BM)?B[1].call(B[0],this):null;if((!!BP&&this.Down)&&(
this.Jg>0))(B=this.DX)?B[1].call(B[0],this):null;if((this.Down&&this.Yq)&&!AJS){
this.A1p=true;(B=this.AvE)?B[1].call(B[0],this):null;}if(this.A1p&&(((A1j&&!this.
Yq)&&AJS)||((!A1j&&this.Yq)&&AJS))){this.A1p=false;(B=this.AEd)?B[1].call(B[0],this
):null;}if(!!BP&&!A1j)(B=this.Ll)?B[1].call(B[0],this):null;if(!!this.AeX){var Adl=
0x0;if(((((this.AeX&0x10)===0x10)&&!!BP)&&BP.Down)&&(BP.Jg>=1000))Adl=0x10;if((((
this.AeX&0x1)===0x1)&&!!D0)&&((D0.LP[1]-D0.AgJ[1])<=-this.Aw0))Adl=0x1;if((((this.
AeX&0x2)===0x2)&&!!D0)&&((D0.LP[1]-D0.AgJ[1])>=this.Aw0))Adl=0x2;if((((this.AeX&
0x4)===0x4)&&!!D0)&&((D0.LP[0]-D0.AgJ[0])<=-this.Aw0))Adl=0x4;if((((this.AeX&0x8
)===0x8)&&!!D0)&&((D0.LP[0]-D0.AgJ[0])>=this.Aw0))Adl=0x8;if(!!Adl){var It=this.
Ie();if(!!It){this.AKA=Adl;It.ATR(null,this,this,Adl);}}}return this;},X6:function(
C$,BG,Od,Z4,AcN,AcM){var B;if(!!Z4&&(Z4!==this))return null;if((Od<1)||(Od>this.
A7g))return null;if(this.Bq>=33554432)return null;if((this.Bq>=16777216)&&!(this.
Bq&(4096<<BG)))return null;if(!!(AcM&this.AeX))return null;if(this.Biq()){var Az=
A.lb(C$,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var P$=A.aaI(C$);
var Fo=Cc;if(P$[0]<Az[0])Fo=[Az[0]-P$[0],Fo[1]];if(P$[0]>=Az[2])Fo=[(Az[2]-P$[0]
)-1,Fo[1]];if(P$[1]<Az[1])Fo=[Fo[0],Az[1]-P$[1]];if(P$[1]>=Az[3])Fo=[Fo[0],(Az[3
]-P$[1])-1];return A._NewObject(C.Aux,0).Initialize(this,Fo);}}else{var Hv=A.abi(
9,A.wf,null);var P;Hv.Set(0,A.aaI(C$));Hv.Set(1,Hv.Get(0));Hv.Set(2,Hv.Get(0));Hv.
Set(3,Hv.Get(0));Hv.Set(4,Hv.Get(0));Hv.Set(1,[C$[0],Hv.Get(1)[1]]);Hv.Set(2,[Hv.
Get(2)[0],C$[1]]);Hv.Set(3,[C$[2],Hv.Get(3)[1]]);Hv.Set(4,[Hv.Get(4)[0],C$[3]]);
Hv.Set(5,C$.slice(0,2));Hv.Set(6,[C$[2],C$[1]]);Hv.Set(7,[C$[0],C$[3]]);Hv.Set(8
,C$.slice(2,4));for(P=0;P<9;P=P+1)if(this.AQF(Hv.Get(P)))return A._NewObject(C.Aux
,0).Initialize(this,A.abe(Hv.Get(P),Hv.Get(0)));}return null;},BmC:function(E){if(
E<1)E=1;this.Aw0=E;},AEZ:function(E){if(E<1)E=1;this.A7g=E;},Ar:function(E){if(E
)this.Cw(0x100000,0x0);else this.Cw(0x0,0x100000);},_Init:function(aArg){C.Zi._Init.
call(this,aArg);this.__proto__=C.Bn;this.U=0x10011B;},_Mark:function(D){var B;C.
Zi._Mark.call(this,D);if((B=this.ARK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AEd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvE)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DX)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ll)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
BM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.H3={timer:null,AKc:null,AtH:null,AFB:null,Y8:null,Sw:null,Bq:0,AIN:0,Ac8:5000
,ApF:0,AJQ:A.wf,AoS:0,Afy:0,ES:0,AlW:0,AtW:0,AoR:0,Afx:0,ER:0,AlV:0,AlT:0,NL:A.wf
,A5v:A.wf,FU:A.wf,Gf:A.wf,DC:A.wf,Wy:A.wf,A6c:0.5,A_G:true,AGg:true,Zs:false,Xs:
false,Xt:false,AoA:false,AzN:0,Ka:function(CZ,aClip,aOffset,Ch,aBlend){},GT:function(
CM){var B;var BP=(C.AdW.isPrototypeOf(CM)?CM:null);var D0=(C.Aqj.isPrototypeOf(CM
)?CM:null);var Ip=(C.Auw.isPrototypeOf(CM)?CM:null);var Aar;var U2;var AAO;var MV;
var Ay$;Aar=(!!BP&&BP.Down)&&!BP.Jg;U2=(!!BP&&BP.Down)&&(BP.Jg>0);AAO=(!!BP&&BP.
Down)&&(BP.Jg>this.AzN);MV=!!BP&&!BP.Down;Ay$=!!D0;if(Aar)this.AzN=((B=(BP.NA?0:
50))&0x80)?B|0xFFFFFF00:B&0xFF;if(Aar){var Apj=0;var Ac5;this.Bq=this.Bq|(1<<BP.
Iz);for(Ac5=this.Bq&4095;Ac5>0;Ac5=Ac5>>1)if(!!(Ac5&1))Apj=Apj+1;if(Apj===1)this.
Bq=(this.Bq|16777216)|(4096<<BP.Iz);}if(MV&&(this.Bq<16777216)){var It=this.Ie();
var Js=null;if(!!It){var A3I=(!!this.AJ?this.AJ:this.Ab);var A1d=(!!It.Jt?It.Jt.
C1:null);Js=It.X6(A.abh(ZV,BP.LP),BP.Iz,BP.N5,A1d,A3I,0x0);}if(!!Js){var P;for(P=
0;P<10;P++)if(!!(this.Bq&(1<<P)))Js.Cg.GT(A._NewObject(C.AdW,0).InitializeDown(P
,BP.HW,BP.N5,Cc,true,BP.LP));for(P=0;P<10;P++)if(!!(this.Bq&(1<<P)))Js.Cg.GT(A._NewObject(
C.AdW,0).InitializeUp(P,BP.HW,BP.HW,0,BP.N5,Cc,false,BP.LP,BP.LP));}}if(MV)this.
Bq=(this.Bq&~(1<<BP.Iz))|33554432;if(AAO&&(this.Bq<16777216))this.Bq=this.Bq|67108864;
if(MV&&BP.NA)this.Bq=this.Bq|67108864;if(MV&&!(this.Bq&16777215))this.Bq=0;if(U2&&(
this.Bq>=67108864)){var It=this.Ie();if(!!It)It.ATR(null,null,this,0x0);}if((U2&&
!!(this.Bq&16777216))&&!!(this.Bq&33554432)){U2=false;MV=true;}if(!!BP&&!(this.Bq&(
4096<<BP.Iz)))return this;if(!!D0&&!(this.Bq&(4096<<D0.Iz)))return this;if(MV&&!(
this.Bq&16777216))return this;if(((Aar||Ay$)||U2)&&((this.Bq<16777216)||(this.Bq>=
33554432)))return this;if(MV)this.Bq=this.Bq&3758100479;if(MV&&!(this.Bq&16777215
))this.Bq=0;if(!!Ip&&(Ip.Axf===this))return null;if((!!Ip&&Ip.Down)&&(this.AoA||
!this.Zs))return null;if((!!Ip&&Ip.Down)&&!A.wa(this.M,this.Ab.A7c(Ip.LP)))return null;
if((!!Ip&&!Ip.Down)&&(!this.AoA||(this.AIN!==Ip.Iz)))return null;if((!BP&&!D0)&&
!Ip)return null;if(!!BP){this.AoA=Aar||U2;this.AIN=BP.Iz;this.NL=BP.NL;}if(!!D0)
this.AIN=D0.Iz;if(!!Ip){this.AoA=Ip.Down;this.AIN=Ip.Iz;}if(!!Ip&&Ip.Down){this.
A3J();this.ER=(((Ip.Bw-this.AlT)*0.001)*this.Afx)+this.ER;this.ES=(((Ip.Bw-this.
AtW)*0.001)*this.Afy)+this.ES;if(this.Xs)this.ER=0;if(this.Xt)this.ES=0;this.Afx=
0;this.Afy=0;this.Xs=false;this.Xt=false;this.AJQ=this.DC;this.ApF=Ip.Bw;return this;
}if(Aar){this.A3J();this.ER=(((BP.Bw-this.AlT)*0.001)*this.Afx)+this.ER;this.ES=(((
BP.Bw-this.AtW)*0.001)*this.Afy)+this.ES;if(this.Xs||!this.Zs)this.ER=0;if(this.
Xt||!this.Zs)this.ES=0;this.Afx=0;this.Afy=0;this.Xs=false;this.Xt=false;if(!this.
Zs){this.Zs=true;(B=this.Sw)?B[1].call(B[0],this):null;(B=this.AKc)?B[1].call(B[
0],this):null;}this.AJQ=this.DC;this.ApF=BP.Bw;}if(!!D0){var G5=A.abe(D0.HW,D0.NL
);var CB=this.DC;if(this.AGg)CB=[this.AJQ[0]+G5[0],CB[1]];CB=[CB[0],this.AJQ[1]+
G5[1]];if(this.A_G){if(CB[0]<this.Gf[0])CB=[this.Gf[0]+(((CB[0]-this.Gf[0])/2)|0
),CB[1]];else if(CB[0]>this.FU[0])CB=[this.FU[0]+(((CB[0]-this.FU[0])/2)|0),CB[1
]];if(CB[1]<this.Gf[1])CB=[CB[0],this.Gf[1]+(((CB[1]-this.Gf[1])/2)|0)];else if(
CB[1]>this.FU[1])CB=[CB[0],this.FU[1]+(((CB[1]-this.FU[1])/2)|0)];}else{if(CB[0]<
this.Gf[0])CB=[this.Gf[0],CB[1]];else if(CB[0]>this.FU[0])CB=[this.FU[0],CB[1]];
if(CB[1]<this.Gf[1])CB=[CB[0],this.Gf[1]];else if(CB[1]>this.FU[1])CB=[CB[0],this.
FU[1]];}if(!A.aaX(CB,this.DC)){this.A5v=A.abe(CB,this.DC);this.DC=CB;(B=this.AtH
)?B[1].call(B[0],this):null;(B=this.AFB)?B[1].call(B[0],this):null;}}if((!!Ip&&!
Ip.Down)&&((Ip.Bw-this.ApF)>=200)){this.ER=0;this.ES=0;}if(U2&&((BP.Bw-this.ApF)>=
200)){this.ER=0;this.ES=0;}if(!!D0&&(D0.Bw>this.ApF)){var G5=D0.DC;var Bc6=1000/(
D0.Bw-this.ApF);var Aiv=0;var Aiw;if(this.AGg)Aiv=G5[0]*Bc6;Aiw=G5[1]*Bc6;if((Aiv
*this.ER)<0)this.ER=0;if((Aiw*this.ES)<0)this.ES=0;this.ER=(this.ER+Aiv)*0.5;this.
ES=(this.ES+Aiw)*0.5;this.ApF=D0.Bw;}if(!MV&&!Ip)return this;if(!!BP&&BP.NA){this.
ER=0;this.ES=0;}if((this.DC[0]<=this.Gf[0])||(this.DC[0]>=this.FU[0]))this.ER=0;
else if(!this.ER){var EM=this.DC[0];var E$=this.Gf[0];var ED=this.FU[0];if(EM<E$
)ED=this.Gf[0];else if(EM>ED)E$=this.FU[0];else if(this.Wy[0]<=1){E$=EM;ED=EM;}else{
var Ada=(ED-EM)%this.Wy[0];ED=(EM-this.Wy[0])+Ada;E$=EM+Ada;if(ED<this.Gf[0])ED=
this.Gf[0];if(E$>this.FU[0])E$=this.FU[0];}if((E$-EM)<=(EM-ED))EM=E$;else EM=ED;
if(EM!==this.DC[0]){var Ja=EM-this.DC[0];if(Ja>0)this.ER=Math.sqrt((Ja*2)*this.Ac8
)+20;if(Ja<0)this.ER=-Math.sqrt((-Ja*2)*this.Ac8)-20;this.Afx=(400-(this.ER*this.
ER))/(2*Ja);this.AoR=EM;}}else{var BA2=this.ER*this.ER;var Ja=BA2/(2*this.Ac8);var
EM=this.DC[0];if(this.ER>0)EM=EM+(Ja|0);if(this.ER<0)EM=EM-(Ja|0);if(EM>this.FU[
0])EM=this.FU[0];else if(EM<this.Gf[0])EM=this.Gf[0];var BfC=EM;var E$=this.Gf[0
];var ED=this.FU[0];if(EM<E$)ED=this.Gf[0];else if(EM>ED)E$=this.FU[0];else if(this.
Wy[0]<=1){E$=EM;ED=EM;}else{var Ada=(ED-EM)%this.Wy[0];ED=(EM-this.Wy[0])+Ada;E$=
EM+Ada;if(ED<this.Gf[0])ED=this.Gf[0];if(E$>this.FU[0])E$=this.FU[0];}if(this.ER>
0){if(ED<=this.DC[0])EM=E$;else if((EM-ED)<(E$-EM))EM=ED;else EM=E$;}else if(E$>=
this.DC[0])EM=ED;else if((EM-ED)>(E$-EM))EM=E$;else EM=ED;if(EM!==this.DC[0]){Ja=
EM-this.DC[0];if(EM!==BfC){var AiU=EM-BfC;if(AiU>0)this.ER=this.ER+Math.sqrt((AiU
*2)*this.Ac8);if(AiU<0)this.ER=this.ER-Math.sqrt((-AiU*2)*this.Ac8);}if(this.ER>
0)this.ER=this.ER+20;if(this.ER<0)this.ER=this.ER-20;this.Afx=(400-(this.ER*this.
ER))/(2*Ja);this.AoR=EM;}else this.ER=0;}if((this.DC[1]<=this.Gf[1])||(this.DC[1
]>=this.FU[1]))this.ES=0;else if(!this.ES){var EN=this.DC[1];var E$=this.Gf[1];var
ED=this.FU[1];if(EN<E$)ED=this.Gf[1];else if(EN>ED)E$=this.FU[1];else if(this.Wy[
1]<=1){E$=EN;ED=EN;}else{var Ada=(ED-EN)%this.Wy[1];ED=(EN-this.Wy[1])+Ada;E$=EN+
Ada;if(ED<this.Gf[1])ED=this.Gf[1];if(E$>this.FU[1])E$=this.FU[1];}if((E$-EN)<=(
EN-ED))EN=E$;else EN=ED;if(EN!==this.DC[1]){var Ja=EN-this.DC[1];if(Ja>0)this.ES=
Math.sqrt((Ja*2)*this.Ac8)+20;if(Ja<0)this.ES=-Math.sqrt((-Ja*2)*this.Ac8)-20;this.
Afy=(400-(this.ES*this.ES))/(2*Ja);this.AoS=EN;}}else{var BA3=this.ES*this.ES;var
Ja=BA3/(2*this.Ac8);var EN=this.DC[1];if(this.ES>0)EN=EN+(Ja|0);if(this.ES<0)EN=
EN-(Ja|0);if(EN>this.FU[1])EN=this.FU[1];else if(EN<this.Gf[1])EN=this.Gf[1];var
BfD=EN;var E$=this.Gf[1];var ED=this.FU[1];if(EN<E$)ED=this.Gf[1];else if(EN>ED)
E$=this.FU[1];else if(this.Wy[1]<=1){E$=EN;ED=EN;}else{var Ada=(ED-EN)%this.Wy[1
];ED=(EN-this.Wy[1])+Ada;E$=EN+Ada;if(ED<this.Gf[1])ED=this.Gf[1];if(E$>this.FU[
1])E$=this.FU[1];}if(this.ES>0){if(ED<=this.DC[1])EN=E$;else if((EN-ED)<(E$-EN))
EN=ED;else EN=E$;}else if(E$>=this.DC[1])EN=ED;else if((EN-ED)>(E$-EN))EN=E$;else
EN=ED;if(EN!==this.DC[1]){Ja=EN-this.DC[1];if(EN!==BfD){var AiU=EN-BfD;if(AiU>0)
this.ES=this.ES+Math.sqrt((AiU*2)*this.Ac8);if(AiU<0)this.ES=this.ES-Math.sqrt((-
AiU*2)*this.Ac8);}if(this.ES>0)this.ES=this.ES+20;if(this.ES<0)this.ES=this.ES-20;
this.Afy=(400-(this.ES*this.ES))/(2*Ja);this.AoS=EN;}else this.ES=0;}if(!!BP)this.
AlT=BP.Bw;if(!!Ip)this.AlT=Ip.Bw;this.AtW=this.AlT;this.AlV=this.DC[0];this.AlW=
this.DC[1];this.BA4();return this;},X6:function(C$,BG,Od,Z4,AcN,AcM){var B;if(!!
Z4&&(Z4!==this))return null;if(this.Bq>=33554432)return null;if((this.Bq>=16777216
)&&!(this.Bq&(4096<<BG)))return null;if(!this.AGg&&!!(AcM&0xC))return null;var Az=
A.lb(C$,this.M);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var P$=A.aaI(C$);var Fo=Cc;
if(P$[0]<Az[0])Fo=[Az[0]-P$[0],Fo[1]];if(P$[0]>=Az[2])Fo=[(Az[2]-P$[0])-1,Fo[1]];
if(P$[1]<Az[1])Fo=[Fo[0],Az[1]-P$[1]];if(P$[1]>=Az[3])Fo=[Fo[0],(Az[3]-P$[1])-1];
return A._NewObject(C.Aux,0).Initialize(this,Fo);}return null;},A3J:function(){if(
!!this.timer){A.z9([this,this.L$],this.timer,0);this.timer=null;}},BA4:function(
){this.timer=A._GetAutoObject(A.acl.AdZ);A.zV([this,this.L$],this.timer,0);},L$:
function(G){var B;if(!this.timer)return;var At1=(this.timer.Bw-this.AlT)*0.001;var
At2=(this.timer.Bw-this.AtW)*0.001;var BBc=At1*At1;var BBd=At2*At2;var Aiv=(this.
Afx*At1)+this.ER;var Aiw=(this.Afy*At2)+this.ES;var CB=[((((this.Afx*0.5)*BBc)+(
this.ER*At1))+this.AlV)|0,((((this.Afy*0.5)*BBd)+(this.ES*At2))+this.AlW)|0];if(
this.Xs&&(At1>=0.5)){CB=[this.AoR,CB[1]];this.ER=0;this.Afx=0;this.AlV=CB[0];this.
Xs=false;}else if(this.Xs){var LF=1-Math.pow(1-(At1/0.5),5);CB=[(this.AlV+((this.
AoR-this.AlV)*LF))|0,CB[1]];}if(this.Xt&&(At2>=0.5)){CB=[CB[0],this.AoS];this.ES=
0;this.Afy=0;this.AlW=CB[1];this.Xt=false;}else if(this.Xt){var LF=1-Math.pow(1-(
At2/0.5),5);CB=[CB[0],(this.AlW+((this.AoS-this.AlW)*LF))|0];}if(((this.ER>0)&&(
Aiv<0))||((this.ER<0)&&(Aiv>0))){Aiv=0;CB=[this.DC[0],CB[1]];}if(((this.ES>0)&&(
Aiw<0))||((this.ES<0)&&(Aiw>0))){Aiw=0;CB=[CB[0],this.DC[1]];}if(!this.Xs&&(CB[0
]<this.Gf[0])){this.AlV=CB[0];this.AoR=this.Gf[0];this.AlT=this.timer.Bw;this.Xs=
true;}else if(!this.Xs&&(CB[0]>this.FU[0])){this.AlV=CB[0];this.AoR=this.FU[0];this.
AlT=this.timer.Bw;this.Xs=true;}if(!this.Xt&&(CB[1]<this.Gf[1])){this.AlW=CB[1];
this.AoS=this.Gf[1];this.AtW=this.timer.Bw;this.Xt=true;}else if(!this.Xt&&(CB[1
]>this.FU[1])){this.AlW=CB[1];this.AoS=this.FU[1];this.AtW=this.timer.Bw;this.Xt=
true;}if(((!this.Xs&&!!this.ER)&&(Aiv>-20))&&(Aiv<20)){CB=[this.AoR,CB[1]];this.
ER=0;this.Afx=0;this.AlV=CB[0];}if(((!this.Xt&&!!this.ES)&&(Aiw>-20))&&(Aiw<20)){
CB=[CB[0],this.AoS];this.ES=0;this.Afy=0;this.AlW=CB[1];}if(!A.aaX(CB,this.DC)){
this.A5v=A.abe(CB,this.DC);this.DC=CB;(B=this.AtH)?B[1].call(B[0],this):null;(B=
this.AFB)?B[1].call(B[0],this):null;}if(((!this.ER&&!this.ES)&&!this.Xs)&&!this.
Xt){this.A3J();this.Zs=false;(B=this.Y8)?B[1].call(B[0],this):null;}},AS0:function(
E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];this.Wy=E;},ASv:function(E){if(E<0)
E=0;if(E>1)E=1;if(E===this.A6c)return;this.A6c=E;if(E<(1e-007))E=1e-007;this.Ac8=
E*10000;},_Init:function(aArg){C.Ep._Init.call(this,aArg);this.__proto__=C.H3;this.
U=0x10011B;},_Mark:function(D){var B;C.Ep._Mark.call(this,D);if((B=this.timer)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AKc)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AtH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AFB
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y8)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Sw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},
_className:"Core::SlideTouchHandler"};C.BL={Ah:null,Ll:null,BM:null,DX:null,ApA:
0,Bw:0,A_B:0,Filter:148,CN:0,DM:0,By:true,Down:false,Ab5:false,NC:false,Init:function(
aArg){var B;var C1=(C.O.isPrototypeOf(B=this.I)?B:null);if(!C1)throw new Error(Afk
);this.Ah=C1.AJV;C1.AJV=this;},GT:function(CM){var B;if(!!CM&&CM.BiI(this.Filter
)){this.Down=CM.Down;this.CN=CM.CN;this.DM=CM.DM;this.Bw=CM.Bw;this.NC=false;if(
CM.Down){this.A_B=this.ApA;this.Ab5=this.ApA>0;if(this.Ab5)(B=this.DX)?B[1].call(
B[0],this):null;else(B=this.BM)?B[1].call(B[0],this):null;if(!this.NC)this.ApA=this.
ApA+1;return!this.NC;}if(!CM.Down){this.Ab5=this.ApA>1;this.A_B=this.ApA-1;this.
ApA=0;(B=this.Ll)?B[1].call(B[0],this):null;return!this.NC;}}return false;},_Init:
function(aArg){this.__proto__=C.BL;this.Init(aArg);A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ll)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.BM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.Aux={Cg:null,Auz:0,DC:A.wf,Initialize:function(Ag,aOffset){this.Cg=Ag;this.DC=
aOffset;this.Auz=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=C.Aux;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Cg)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.A7n={Ah:null,C1:null,_Init:
function(aArg){this.__proto__=C.A7n;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::ModalContext"};C.AqV={Nt:null,extent:A.wg,Bd:A.wg,isEmpty:false,_Init:function(
aArg){this.__proto__=C.AqV;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Nt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.ADA={AiF:A.wf,AiE:A.wf,_Init:function(aArg
){C.AqV._Init.call(this,aArg);this.__proto__=C.ADA;},_className:"Core::LayoutLineContext"
};C.ADB={AAk:A.wf,AAj:A.wf,AiF:A.wf,AiE:A.wf,_Init:function(aArg){C.AqV._Init.call(
this,aArg);this.__proto__=C.ADB;},_className:"Core::LayoutQuadContext"};C.ANp={C1:
null,Ah:null,Rr:null,RA:null,L9:null,Apw:null,_Init:function(aArg){this.__proto__=
C.ANp;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Rr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.RA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L9)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Apw)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.AUw={FI:null,B9:null,B8:null,Bdb:false,
BxI:function(){if(!this.FI)return;var Pe=this.FI;this.FI.O$=null;this.FI=null;A.
pe([this,this.A2T],this);Pe.A7Q(this);},Bzu:function(G){if(!!this.FI)return;if(!
this.B8)return;this.FI=this.B8;this.B8=this.B8.Ah;if(!!this.B8)this.B8.AJ=null;else
this.B9=null;this.FI.Ah=null;this.Bdb=true;this.FI.Sw(this);this.Bdb=false;},BzR:
function(G){A.pe([this,this.Bzu],this);},BzQ:function(G){A.pe([this,this.BzR],this
);},A2T:function(G){A.pe([this,this.BzQ],this);},BgQ:function(I8){if(!I8||!I8.O$
)return;if(I8.O$!==this)throw new Error(ZW);var Bf7=false;if(this.FI===I8){this.
FI=null;Bf7=true;A.pe([this,this.A2T],this);}else{if(!!I8.Ah)I8.Ah.AJ=I8.AJ;else
this.B9=I8.AJ;if(!!I8.AJ)I8.AJ.Ah=I8.Ah;else this.B8=I8.Ah;I8.AJ=null;I8.Ah=null;
}I8.O$=null;if(Bf7)I8.A7P(this);},A_J:function(I8,A0I){if(!I8)return;if(!!I8.O$)
throw new Error(WY);I8.O$=this;if(A0I){I8.Ah=this.B8;if(!!this.B8)this.B8.AJ=I8;
else this.B9=I8;this.B8=I8;}else{I8.AJ=this.B9;if(!!this.B9)this.B9.Ah=I8;else this.
B8=I8;this.B9=I8;}if(!this.FI)A.pe([this,this.A2T],this);},_Init:function(aArg){
this.__proto__=C.AUw;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.FI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.AkG={O$:null,AJ:null,Ah:
null,A7Q:function(As5){},A7P:function(As5){},Sw:function(As5){this.Amh();},Mi:function(
){if(!!this.O$&&(this.O$.FI===this))this.O$.BxI();},Amh:function(){if(!!this.O$)
this.O$.BgQ(this);},AQB:function(){return!!this.O$&&(this.O$.FI===this);},_Init:
function(aArg){this.__proto__=C.AkG;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.O$)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.AUu={At:null,AtY:
null,Sw:function(As5){this.AtY.At=this.At;A.we(this.AtY,0);A.pe([this,this.Bzr],
this);},Bzr:function(G){this.AtY.At=null;this.AtY=null;this.At=null;this.Mi();},
_Init:function(aArg){C.AkG._Init.call(this,aArg);this.__proto__=C.AUu;},_Mark:function(
D){var B;C.AkG._Mark.call(this,D);if((B=this.At)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AtY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Core::SystemEventTask"
};C.Axe={_Init:function(){C.AUw._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Ahm={resource:null,K$:function(){this.resource=
null;},Init:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
C.Ahm;this.Init(aArg);A.h7++;},_Done:function(){this.K$();this.__proto__=null;A.
h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"
};C.Timer={Mv:null,timer:null,Bw:0,Period:1000,Vp:0,By:false,K$:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},AKk:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},PN:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.By)this.AKk(this.Vp,E);},Wk:function(E){if(E<0)E=0;if(E===
this.Vp)return;this.Vp=E;if(this.By)this.AKk(E,this.Period);},Ar:function(E){if(
E===this.By)return;this.By=E;if(E)this.AKk(this.Vp,this.Period);else this.AKk(0,
0);this.Bw=this.Au2();},Au2:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-A.v$)|0;return ticksCount;},Trigger:function(){var B;this.Bw=this.Au2();if(!this.
Period)this.Ar(false);(B=this.Mv)?B[1].call(B[0],this):null;},Axc:function(G){this.
Ar(false);},StartTimer:function(G){if(this.By)this.Ar(false);this.Ar(true);},_Init:
function(aArg){this.__proto__=C.Timer;A.h7++;},_Done:function(){this.K$();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Mv)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Bw={AT0:0,Avy:0
,AjH:0,GD:0,Hb:0,Year:0,BcK:function(Afu,AZ$){if(AZ$)switch(Afu){case 1:return A.
aci.BiR;case 2:return A.aci.BhJ;case 3:return A.aci.Bi_;case 4:return A.aci.Bgv;
case 5:return A.aci.Bjc;case 6:return A.aci.BiU;case 7:return A.aci.BiT;case 8:return A.
aci.Bgx;case 9:return A.aci.BnP;case 10:return A.aci.Bjw;case 11:return A.aci.Bjv;
case 12:return A.aci.Bhb;default:return A.jV;}else switch(Afu){case 1:return A.aci.
ADu;case 2:return A.aci.ACe;case 3:return A.aci.ADG;case 4:return A.aci.ABc;case
5:return A.aci.ADJ;case 6:return A.aci.ADw;case 7:return A.aci.ADv;case 8:return A.
aci.ABk;case 9:return A.aci.AF6;case 10:return A.aci.ADW;case 11:return A.aci.ADU;
case 12:return A.aci.AB0;default:return A.jV;}},BcI:function(Bbh,AZ$){if(AZ$)switch(
Bbh){case 1:return A.aci.Bjh;case 2:return A.aci.Bo$;case 3:return A.aci.BpR;case
4:return A.aci.BoW;case 5:return A.aci.BhW;case 6:return A.aci.BnI;case 0:return A.
aci.BoJ;default:return A.jV;}else switch(Bbh){case 1:return A.aci.Bjg;case 2:return A.
aci.Bo_;case 3:return A.aci.BpQ;case 4:return A.aci.BoV;case 5:return A.aci.BhV;
case 6:return A.aci.BnH;case 0:return A.aci.BoI;default:return A.jV;}},BcH:function(
){var result=0;{var d=new Date;result=Math.trunc(d.getTime()/1000-(d.getTimezoneOffset(
)*60));}return result;},JI:function(){var d=this.GD;var K0=this.Hb;var De=this.Year-((
K0<=2)?1:0);var Aza=(((De>=0)?De:De-399)/400)|0;var Al3=De-(Aza*400);var U0=(((((
153*(K0+((K0>2)?-3:9)))+2)/5)|0)+d)-1;var AoO=(((Al3*365)+((Al3/4)|0))-((Al3/100
)|0))+U0;var Qb=((Aza*146097)+AoO)-719468;return(((Qb*86400)+(this.AjH*3600))+(this.
Avy*60))+this.AT0;},AFj:function(E){var B;E+=62162035200;if(E<0)E=0;var Vc=Math.
trunc(E/86400)|0;var Aza=(((Vc>=0)?Vc:Vc-146096)/146097)|0;var AoO=Vc-(Aza*146097
);var Al3=((((AoO-((AoO/1460)|0))+((AoO/36524)|0))-((AoO/146096)|0))/365)|0;var De=
Al3+(Aza*400);var U0=AoO-(((365*Al3)+((Al3/4)|0))-((Al3/100)|0));var A2e=(((5*U0
)+2)/153)|0;var d=(U0-((((153*A2e)+2)/5)|0))+1;var K0=A2e+((A2e<10)?3:-9);var BJ=
Math.trunc(E/3600)%24|0;var P=Math.trunc(E/60)%60|0;var s=E%60|0;this.Year=De+((
K0<=2)?1:0);this.Ug(K0);this.Ln(d);this.Anj(BJ+((BJ<0)?24:0));this.Anm(P+((P<0)?
60:0));this.Anp(s+((s<0)?60:0));},Y9:function(){if(this.Hb===2){if(!(this.Year%4
)&&(!!(this.Year%100)||!(this.Year%400)))return 29;else return 28;}else if((((this.
Hb===4)||(this.Hb===6))||(this.Hb===9))||(this.Hb===11))return 30;else return 31;
},BkG:function(){var B;var U0=this.AbJ()-1;var Ati=(6+this.AvK())%7;var AoQ=((371+
Ati)-U0)%7;if(this.Hb===12){var d=this.GD;if((d===31)&&(Ati<3))return 0;if((d===
30)&&(Ati<2))return 0;if((d===29)&&(Ati<1))return 0;}if(AoQ<=3)U0+=AoQ;else U0-=(
7-AoQ);if(U0<0){var d=this.GD;var K0=this.Hb;this.Year--;this.Ln(31);this.Ug(12);
U0=this.AbJ()-1;Ati=(6+this.AvK())%7;AoQ=((371+Ati)-U0)%7;if(AoQ<=3)U0+=AoQ;else
U0-=AoQ;this.Year++;this.Ln(d);this.Ug(K0);}return(U0/7)|0;},AbJ:function(){var B;
var d=this.GD;var K0=this.Hb;var De=this.Year;var AfR=((!!!(De%4)&&(!!(De%100)||
!!!(De%400)))?1:0);switch(K0){case 2:d+=31;break;case 3:d+=(59+AfR);break;case 4:
d+=(90+AfR);break;case 5:d+=(120+AfR);break;case 6:d+=(151+AfR);break;case 7:d+=(
181+AfR);break;case 8:d+=(212+AfR);break;case 9:d+=(243+AfR);break;case 10:d+=(273+
AfR);break;case 11:d+=(304+AfR);break;case 12:d+=(334+AfR);break;default:;}return d;
},AvK:function(){var B;var d=this.GD;var K0=this.Hb+((this.Hb>2)?-2:10);var De=this.
Year-((this.Hb<=2)?1:0);var B4=(De/100)|0;De%=100;d+=((((((((26*K0)-2)/10)|0)+De
)+((De/4)|0))+((B4/4)|0))-(2*B4));if(d>=0)return d%7;else return(7-(-d%7))%7;},Anp:
function(E){if(E<0)E=0;if(E>59)E=59;this.AT0=E;},Anm:function(E){if(E<0)E=0;if(E>
59)E=59;this.Avy=E;},Anj:function(E){if(E<0)E=0;if(E>23)E=23;this.AjH=E;},Ln:function(
E){if(E<1)E=1;if(E>31)E=31;this.GD=E;},Ug:function(E){if(E<1)E=1;if(E>12)E=12;this.
Hb=E;},Format:function(Im){var result=A.jV;var inx=0;while(!!(Im.charCodeAt(inx)||
0))if((Im.charCodeAt(inx)||0)===0x25){var Aam=1;inx=inx+1;if((Im.charCodeAt(inx)||
0)===0x23){inx=inx+1;Aam=0;}switch(Im.charCodeAt(inx)||0){case 0x64:result=result+
A.abl(this.GD,2*Aam,10);break;case 0x48:result=result+A.abl(this.AjH,2*Aam,10);break;
case 0x49:if(!(this.AjH%12))result=result+ZX;else result=result+A.abl(this.AjH%12
,2*Aam,10);break;case 0x6D:result=result+A.abl(this.Hb,2*Aam,10);break;case 0x4D:
result=result+A.abl(this.Avy,2*Aam,10);break;case 0x70:if(this.AjH<12)result=result+
A.aci.Bgb;else result=result+A.aci.Bm8;break;case 0x53:result=result+A.abl(this.
AT0,2*Aam,10);break;case 0x77:result=result+A.abl(this.AvK(),Aam,10);break;case 0x79:
result=result+A.abl(this.Year%100,2*Aam,10);break;case 0x59:result=result+A.abl(
this.Year,4*Aam,10);break;case 0x25:result=result+ZY;break;case 0x6A:result=result+
A.abl(this.AbJ(),3*Aam,10);break;case 0x57:result=result+A.abl(this.BkG(),2*Aam,
10);break;case 0x61:result=result+this.BcI(this.AvK(),true);break;case 0x41:result=
result+this.BcI(this.AvK(),false);break;case 0x62:result=result+this.BcK(this.Hb
,true);break;case 0x42:result=result+this.BcK(this.Hb,false);break;default:;}inx=
inx+1;}else{result=result+String.fromCharCode(Im.charCodeAt(inx)||0);inx=inx+1;}
return result;},Initialize2:function(AcO,Afu,Bv0,Bwf,Bww,BwP){this.Year=AcO;this.
Ug(Afu);this.Ln(Bv0);this.Anj(Bwf);this.Anm(Bww);this.Anp(BwP);return this;},Initialize:
function(AhU){this.AFj(AhU);return this;},Bhf:function(AhU){if(!AhU)return A._NewObject(
C.AnN,0).Initialize(this.JI());return A._NewObject(C.AnN,0).Initialize(this.JI()-
AhU.JI());},Boj:function(Ayv){if(!Ayv)return this;return A._NewObject(C.Bw,0).Initialize(
this.JI()-Ayv.JI());},J:function(Ayv){if(!Ayv)return this;return A._NewObject(C.
Bw,0).Initialize(this.JI()+Ayv.JI());},_Init:function(aArg){this.__proto__=C.Bw;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Core::Time"};C.AnN={AF3:0,ADN:0,ACZ:0,J_:0,JI:function(
){return(((this.J_*86400)+(this.ACZ*3600))+(this.ADN*60))+this.AF3;},AFj:function(
E){var AKx=1;this.J_=Math.trunc(E/86400)|0;if(E<0){E=-E;AKx=-1;}this.ACZ=AKx*(Math.
trunc(E/3600)%24|0);this.ADN=AKx*(Math.trunc(E/60)%60|0);this.AF3=AKx*(E%60|0);}
,Initialize2:function(Bv1,Bwg,Bwx,BwS){this.J_=Bv1;this.ACZ=Bwg;this.ADN=Bwx;this.
AF3=BwS;return this;},Initialize:function(AhU){this.AFj(AhU);return this;},_Init:
function(aArg){this.__proto__=C.AnN;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::TimeSpan"
};C.A_7={At:null,O$:null,Trigger:function(BvV,A0I){var Pe=A._NewObject(C.AUu,0);
Pe.AtY=this;Pe.At=BvV;this.O$.A_J(Pe,A0I);},_Init:function(aArg){this.__proto__=
C.A_7;this.O$=A._GetAutoObject(C.Axe);A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.At)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.O$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEvent"};C.A_8={JC:null,Event:null,ARL:null,AtA:function(G){var B;if(
!this.Event)return;this.JC=this.Event.At;(B=this.ARL)?B[1].call(B[0],this):null;
this.JC=null;},Blq:function(E){if(this.Event===E)return;if(!!this.Event)A.z9([this
,this.AtA],this.Event,0);this.Event=E;if(!!this.Event)A.zV([this,this.AtA],this.
Event,0);},_Init:function(aArg){this.__proto__=C.A_8;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
JC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Event)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ARL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.BE_={Dq:0x1,BBW:0x2,BC3:0x4,BE2:0x8,By:0x10,H2:0x20
,BC4:0x40,BDK:0x80,BCZ:0x100,BDo:0x200,BCN:0x400,BEm:0x800,Bj:0x1000,BE7:0x2000,
BD7:0x4000,BD8:0x8000,Aa2:0x10000,BD6:0x20000,BEx:0x40000,BCE:0x80000,BEe:0x100000
,BCy:0x200000};C.PG={BEn:0x1,BEo:0x2,BBS:0x4,BBT:0x8,BBU:0x10,BBR:0x20};C.AgH={None:
0,BEY:1,BCc:2,BDt:3,BEr:4,BEZ:5,BE0:6,BCd:7,BCe:8,BDv:9,BDu:10,BEt:11,BEs:12};C.
AuB={None:0,BEW:1,Left:2,BCa:3,Zx:4,A43:5,BEX:6,Right:7,BCb:8};C.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.BEp={BFe:0x1,BFb:0x2,BFc:0x4,BFd:
0x8,BDx:0x10,BC6:0x20};
C._Init=function(){C.Aj2.__proto__=C.Cg;C.Zi.__proto__=C.Cg;C.Ep.__proto__=C.Cg;C.
O.__proto__=C.Ep;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.AQT.__proto__=
C.Event;C.Auw.__proto__=C.Event;C.AdW.__proto__=C.Event;C.Aqj.__proto__=C.Event;
C.Z.__proto__=C.Ep;C.CL.__proto__=C.O;C.Dv.__proto__=C.O;C.Bn.__proto__=C.Zi;C.H3.
__proto__=C.Ep;C.ADA.__proto__=C.AqV;C.ADB.__proto__=C.AqV;C.AUu.__proto__=C.AkG;
};C._ReInit=function(){var B;if((B=C.Axe._this))B._ReInit(),C.Axe._ReInit.call(B
);};C.DE=function(D){var B;if((B=C.Axe._this)&&(B._cycle!=D))B._Done(C.Axe._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */