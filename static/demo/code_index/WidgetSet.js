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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acs)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acs=(function(){var A=index;var C={};
var Cf=[0,0,200,50];var BD=[0,0,150,50];var E8=[0,50];var Hs=[150,50];var I0=[150
,0];var Iw=[0,0];
C.Aeb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADL={AxX:null,AxW:null,AVk:500,AHj:-1,AVN:0xFFFFFFFF,AHi:-1,Xd:A.wf,Bog:
function(E){if(this.AVk===E)return;this.AVk=E;A.pe([this,this.EG],this);},A$b:function(
E){if(this.AHj===E)return;this.AHj=E;A.pe([this,this.EG],this);},A$a:function(E){
if(this.AxX===E)return;this.AxX=E;A.pe([this,this.EG],this);},A_$:function(E){if(
this.AVN===E)return;this.AVN=E;A.pe([this,this.EG],this);},A__:function(E){if(this.
AHi===E)return;this.AHi=E;A.pe([this,this.EG],this);},A_9:function(E){if(this.AxW===
E)return;this.AxW=E;A.pe([this,this.EG],this);},AGj:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xd,E))return;this.Xd=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aoh._Init.call(this,aArg);this.__proto__=C.ADL;
},_Mark:function(D){var B;C.Aoh._Mark.call(this,D);if((B=this.AxX)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxW)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVG={Av1:null,Av0:null,Avk:null,Avn:null
,Avm:null,Avl:null,Avg:null,Avj:null,Avi:null,Avh:null,ARH:0xFF000000,ARK:0xFF000000
,ARJ:0xFF000000,ARI:0xFF000000,ARD:0xFF000000,ARG:0xFF000000,ARF:0xFF000000,ARE:
0xFF000000,ARC:0,A7F:0xFFFFFFFF,A7I:0xFFFFFFFF,A7H:0xFFFFFFFF,A7G:0xFFFFFFFF,A7B:
0xFFFFFFFF,A7E:0xFFFFFFFF,A7D:0xFFFFFFFF,A7C:0xFFFFFFFF,A7A:0,ARB:0x12,A7z:0x12,
AOy:0x3F,AOD:-1,AOG:-1,AOF:-1,AOE:-1,AOz:-1,AOC:-1,AOB:-1,AOA:-1,Xd:A.wf,BnG:function(
E){if(this.ARH===E)return;this.ARH=E;A.pe([this,this.EG],this);},BnJ:function(E){
if(this.ARK===E)return;this.ARK=E;A.pe([this,this.EG],this);},BnI:function(E){if(
this.ARJ===E)return;this.ARJ=E;A.pe([this,this.EG],this);},BnH:function(E){if(this.
ARI===E)return;this.ARI=E;A.pe([this,this.EG],this);},BnC:function(E){if(this.ARD===
E)return;this.ARD=E;A.pe([this,this.EG],this);},BnF:function(E){if(this.ARG===E)
return;this.ARG=E;A.pe([this,this.EG],this);},BnE:function(E){if(this.ARF===E)return;
this.ARF=E;A.pe([this,this.EG],this);},BnD:function(E){if(this.ARE===E)return;this.
ARE=E;A.pe([this,this.EG],this);},BnB:function(E){if(this.ARC===E)return;this.ARC=
E;A.pe([this,this.EG],this);},Bnp:function(E){if(this.A7F===E)return;this.A7F=E;
A.pe([this,this.EG],this);},Bns:function(E){if(this.A7I===E)return;this.A7I=E;A.
pe([this,this.EG],this);},Bnr:function(E){if(this.A7H===E)return;this.A7H=E;A.pe([
this,this.EG],this);},Bnq:function(E){if(this.A7G===E)return;this.A7G=E;A.pe([this
,this.EG],this);},Bnl:function(E){if(this.A7B===E)return;this.A7B=E;A.pe([this,this.
EG],this);},Bno:function(E){if(this.A7E===E)return;this.A7E=E;A.pe([this,this.EG
],this);},Bnn:function(E){if(this.A7D===E)return;this.A7D=E;A.pe([this,this.EG],
this);},Bnm:function(E){if(this.A7C===E)return;this.A7C=E;A.pe([this,this.EG],this
);},Bnk:function(E){if(this.A7A===E)return;this.A7A=E;A.pe([this,this.EG],this);
},Bnz:function(E){if(this.ARB===E)return;this.ARB=E;A.pe([this,this.EG],this);},
A_H:function(E){if(this.Av1===E)return;this.Av1=E;A.pe([this,this.EG],this);},A_G:
function(E){if(this.Av0===E)return;this.Av0=E;A.pe([this,this.EG],this);},Bni:function(
E){if(this.A7z===E)return;this.A7z=E;A.pe([this,this.EG],this);},BmU:function(E){
if(this.AOy===E)return;this.AOy=E;A.pe([this,this.EG],this);},Bm7:function(E){if(
this.AOD===E)return;this.AOD=E;A.pe([this,this.EG],this);},Bm_:function(E){if(this.
AOG===E)return;this.AOG=E;A.pe([this,this.EG],this);},Bm9:function(E){if(this.AOF===
E)return;this.AOF=E;A.pe([this,this.EG],this);},Bm8:function(E){if(this.AOE===E)
return;this.AOE=E;A.pe([this,this.EG],this);},Bm3:function(E){if(this.Avk===E)return;
this.Avk=E;A.pe([this,this.EG],this);},Bm6:function(E){if(this.Avn===E)return;this.
Avn=E;A.pe([this,this.EG],this);},Bm5:function(E){if(this.Avm===E)return;this.Avm=
E;A.pe([this,this.EG],this);},Bm4:function(E){if(this.Avl===E)return;this.Avl=E;
A.pe([this,this.EG],this);},BmZ:function(E){if(this.AOz===E)return;this.AOz=E;A.
pe([this,this.EG],this);},Bm2:function(E){if(this.AOC===E)return;this.AOC=E;A.pe([
this,this.EG],this);},Bm1:function(E){if(this.AOB===E)return;this.AOB=E;A.pe([this
,this.EG],this);},Bm0:function(E){if(this.AOA===E)return;this.AOA=E;A.pe([this,this.
EG],this);},BmV:function(E){if(this.Avg===E)return;this.Avg=E;A.pe([this,this.EG
],this);},BmY:function(E){if(this.Avj===E)return;this.Avj=E;A.pe([this,this.EG],
this);},BmX:function(E){if(this.Avi===E)return;this.Avi=E;A.pe([this,this.EG],this
);},BmW:function(E){if(this.Avh===E)return;this.Avh=E;A.pe([this,this.EG],this);
},AGj:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xd,E))
return;this.Xd=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aoh._Init.call(
this,aArg);this.__proto__=C.AVG;},_Mark:function(D){var B;C.Aoh._Mark.call(this,
D);if((B=this.Av1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avm)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avh)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoh={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoh;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADK={LS:null,LQ:null,Appearance:null
,Nf:null,Aip:0,Ga:100,Gr:0,AM:50,BgO:true,H:function(E){var B;if(!!this.Appearance
){var AzI=[E[2]-E[0],E[3]-E[1]];var Ou=AzI;if(Ou[0]<this.Appearance.Xd[0])Ou=[this.
Appearance.Xd[0],Ou[1]];if(Ou[1]<this.Appearance.Xd[1])Ou=[Ou[0],this.Appearance.
Xd[1]];var Hd=A.abe(Ou,AzI);if(!!Hd[0]){var HW=((this.PT&0x4)===0x4);var HX=((this.
PT&0x8)===0x8);if(HW&&!HX)E=A.abN(E,E[2]+Hd[0]);else if(!HW&&HX)E=[].concat(E[0]-
Hd[0],E.slice(1,4));else{E=[].concat(E[0]-((Hd[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ou[0]);}}if(!!Hd[1]){var HY=((this.PT&0x10)===0x10);var HV=((this.PT&0x20)===
0x20);if(HY&&!HV)E=[].concat(E.slice(0,3),E[3]+Hd[1]);else if(!HY&&HV)E=A.abP(E,
E[1]-Hd[1]);else{E=A.abP(E,E[1]-((Hd[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BeT=!!this.Appearance&&!!this.Appearance.AxW;var BeU=!!this.Appearance&&!!this.
Appearance.AxX;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BeT&&!!!this.LQ){this.
LQ=A._NewObject(A.acg.NY,0);this.J(this.LQ,0);}else if(!BeT&&!!this.LQ){this.HR(
this.LQ);this.LQ=null;}if(BeU&&!!!this.LS){this.LS=A._NewObject(A.acg.NY,0);this.
J(this.LS,0);}else if(!BeU&&!!this.LS){this.HR(this.LS);this.LS=null;}if(!!this.
LQ){this.LQ.Ax(this.Appearance.AxW);this.LQ.L(this.Appearance.AVN);this.LQ.A_t(0x1B
);this.LQ.Asc(54);if(this.Appearance.AHi<0){this.LQ.Zx(true);this.LQ.Cw(0);}else{
this.LQ.Zx(false);this.LQ.Cw(this.Appearance.AHi);}}if(!!this.LS){this.LS.Ax(this.
Appearance.AxX);this.LS.L(0xFFFFFFFF);this.LS.A_t(0x1E);this.LS.Asc(35);if(this.
Appearance.AHj<0){this.LS.Zx(true);this.LS.Cw(0);}else{this.LS.Zx(false);this.LS.
Cw(this.Appearance.AHj);}}var pos=((AE[2]-AE[0])*this.Aip)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LQ&&!!this.LQ.Al){var s=this.LQ.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LQ.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LQ.A_K([x2-((s[0]
/3)|0),this.LQ.Anq[1]]);this.LQ.Z(true);}if(!!this.LS&&!!this.LS.Al){var s=this.
LS.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LS.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LS.A_K([x2-((s[0]/3)|0),this.LS.Anq[1]]);this.LS.Z(true);}},AKT:function(G){var At$=
this.Aip;var ALo=0;if(!!this.Appearance)ALo=this.Appearance.AVk;if(this.BgO&&(this.
Ga!==this.Gr)){this.Aip=-this.Gr/(this.Ga-this.Gr);At$=this.Aip;this.BgO=false;}
if(this.Ga!==this.Gr)At$=(this.Uq()-this.Gr)/(this.Ga-this.Gr);if(At$===this.Aip
)return;this.Nf.As(false);if(ALo<=0){this.Aip=At$;this.Am();return;}var AK0=At$-
this.Aip;if(AK0<0)AK0=-AK0;this.Nf.WR(14);this.Nf.Cx=this.Aip;this.Nf.B3=At$;this.
Nf.Fq((10+((ALo/2)|0))+((((ALo*AK0)|0)/2)|0));this.Nf.As(true);},BA9:function(G){
},BBa:function(G){this.Aip=this.Nf.A5;this.Am();},ApO:function(G){A.pe([this,this.
AKT],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
Ga===E)return;this.Ga=E;A.pe([this,this.AKT],this);},Gb:function(E){if(this.Gr===
E)return;this.Gr=E;A.pe([this,this.AKT],this);},Uq:function(){var E=this.AM;if(this.
Gr>this.Ga){if(E<this.Ga)E=this.Ga;if(E>this.Gr)E=this.Gr;}else{if(E<this.Gr)E=this.
Gr;if(E>this.Ga)E=this.Ga;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKT],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApO],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApO],E,0);A.pe([this,this.ApO],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.Nf._Init.call(this.Nf={I:this},0);this.__proto__=
C.ADK;this.H(Cf);this.Nf.WR(14);this.Nf.HQ(1);this.Nf.SI=[this,this.BA9];this.Nf.
Ahq=[this,this.BBa];},_Done:function(){this.__proto__=A.Core.P;this.Nf._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Nf.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LS)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nf)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UR={QE:null
,Vm:null,Appearance:null,Q:null,Bo:null,Do:null,CT:null,AEm:A.jV,AEl:A.jV,A30:0,
BB1:0,VV:false,H:function(E){var B;if(!!this.Appearance){var AzI=[E[2]-E[0],E[3]-
E[1]];var Ou=AzI;if(Ou[0]<this.Appearance.Xd[0])Ou=[this.Appearance.Xd[0],Ou[1]];
if(Ou[1]<this.Appearance.Xd[1])Ou=[Ou[0],this.Appearance.Xd[1]];var Hd=A.abe(Ou,
AzI);if(!!Hd[0]){var HW=((this.PT&0x4)===0x4);var HX=((this.PT&0x8)===0x8);if(HW&&
!HX)E=A.abN(E,E[2]+Hd[0]);else if(!HW&&HX)E=[].concat(E[0]-Hd[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hd[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ou[0]);}}if(!!Hd[1]){
var HY=((this.PT&0x10)===0x10);var HV=((this.PT&0x20)===0x20);if(HY&&!HV)E=[].concat(
E.slice(0,3),E[3]+Hd[1]);else if(!HY&&HV)E=A.abP(E,E[1]-Hd[1]);else{E=A.abP(E,E[
1]-((Hd[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BeS=!!this.Appearance&&(((((((
!!this.Appearance.Avh||!!this.Appearance.Avi)||!!this.Appearance.Avj)||!!this.Appearance.
Avg)||!!this.Appearance.Avl)||!!this.Appearance.Avm)||!!this.Appearance.Avn)||!!
this.Appearance.Avk);var BeV=!!this.Appearance&&((!!this.AEl&&!!this.Appearance.
Av0)||(!!this.AEm&&!!this.Appearance.Av1));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af9;if(BeS&&!!!this.Vm){this.Vm=A._NewObject(A.acg.NY,0);this.J(this.Vm,
0);}else if(!BeS&&!!this.Vm){this.HR(this.Vm);this.Vm=null;}if(BeV&&!!!this.QE){
this.QE=A._NewObject(A.acg.Text,0);this.J(this.QE,0);this.QE.BmN(true);}else if(
!BeV&&!!this.QE){this.HR(this.QE);this.QE=null;}if(!((Ae&0x10)===0x10))Af9=0x44;
else if(((this.CT.Down&&this.CT.YP)||this.Do.Down)||this.Bo.Bw)Af9=0x41;else if(((
Ae&0x40)===0x40))Af9=0x46;else Af9=0x45;if(!this.VV)Af9=String.fromCharCode(Af9).
toLowerCase().charCodeAt(0)||0;this.BB1=Af9;if(!!this.Vm){var bitmap;var AaD;var
EW=this.Appearance.AOy;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af9){case 0x44:{bitmap=
this.Appearance.Avm;AaD=this.Appearance.AOF;}break;case 0x41:{bitmap=this.Appearance.
Avk;AaD=this.Appearance.AOD;}break;case 0x46:{bitmap=this.Appearance.Avn;AaD=this.
Appearance.AOG;}break;case 0x45:{bitmap=this.Appearance.Avl;AaD=this.Appearance.
AOE;}break;case 0x64:{bitmap=this.Appearance.Avi;AaD=this.Appearance.AOB;}break;
case 0x61:{bitmap=this.Appearance.Avg;AaD=this.Appearance.AOz;}break;case 0x66:{
bitmap=this.Appearance.Avj;AaD=this.Appearance.AOC;}break;default:{bitmap=this.Appearance.
Avh;AaD=this.Appearance.AOA;}}this.Vm.Zx(AaD<0);this.Vm.L(0xFFFFFFFF);if(AaD<0)AaD=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8
);var BZ=bitmap.FrameSize[0];if(HW&&!HX)Az=A.abN(Az,Az[0]+BZ);else if(!HW&&HX)Az=[
].concat(Az[2]-BZ,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BZ/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BZ);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HY=((EW&0x10)===0x10);var HV=((EW&0x20)===0x20);var BL=bitmap.FrameSize[1];if(
HY&&!HV)Az=[].concat(Az.slice(0,3),Az[1]+BL);else if(!HY&&HV)Az=A.abP(Az,Az[3]-BL
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BL/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BL);}}this.Vm.Cw(AaD);this.Vm.Ax(bitmap);this.Vm.H(Az);this.Vm.Asc(16
);}if(!!this.QE){var Aio;var font;var A24;switch(Af9){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.Av1;A24=this.AEm;}break;default:{font=this.Appearance.
Av0;A24=this.AEl;}}switch(Af9){case 0x44:Aio=this.Appearance.ARJ;break;case 0x41:
Aio=this.Appearance.ARH;break;case 0x46:Aio=this.Appearance.ARK;break;case 0x45:
Aio=this.Appearance.ARI;break;case 0x64:Aio=this.Appearance.ARF;break;case 0x61:
Aio=this.Appearance.ARD;break;case 0x66:Aio=this.Appearance.ARG;break;default:Aio=
this.Appearance.ARE;}this.QE.H([AE[0]+this.Appearance.ARC,AE[1],AE[2],AE[3]]);this.
QE.A6(this.Appearance.ARB);this.QE.S(font);this.QE.R(A24);this.QE.L(Aio);this.QE.
KX(true);this.QE.BmM(true);this.QE.Asc(92);}this.ExtendClipping(0,0,0,0);{var AuE=
AE;this.CT.DN(AuE.slice(0,2));this.CT.KA(AuE.slice(2,4));this.CT.DD([AuE[2],AuE[
1]]);this.CT.J1([AuE[0],AuE[3]]);}},ApO:function(G){var Be4=this.Do.Filter;this.
Do.Filter=149;if(!Be4&&!!this.Do.Filter)this.Cs(0x4,0x0);if(!!Be4&&!this.Do.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Hh:function(G){
var F;if(!!this.Q)this.ArT((F=this.Q,F[1].call(F[0])));},Qx:function(G){var F;this.
Am();this.ArT(!this.VV);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VV));A.abo(this.
Q,0);}},BBx:function(G){var F;var ApZ=0;if(!!this.Appearance)ApZ=50;this.CT.As(true
);this.Am();if(((this.Do.Bs-this.A30)|0)>=ApZ){this.ArT(!this.VV);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VV));A.abo(this.Q,0);}}else{this.Bo.WO(ApZ-((this.Do.
Bs-this.A30)|0));this.Bo.As(true);}},AiS:function(G){var F;this.CT.As(false);this.
Am();if(this.Bo.Bw){this.Bo.As(false);this.ArT(!this.VV);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VV));A.abo(this.Q,0);}}this.A30=this.Do.Bs;},BBd:function(G){
this.Am();},BA$:function(G){this.Am();},AAU:function(G){var F;var ApZ=0;if(!!this.
Appearance)ApZ=50;this.Do.Bw=true;if(!this.CT.YP)return;if(this.CT.NQ)return;if(
this.CT.Jy>=ApZ){this.ArT(!this.VV);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VV
));A.abo(this.Q,0);}}else{this.Bo.WO(ApZ-this.CT.Jy);this.Bo.As(true);}},AAT:function(
G){var F;this.Do.Bw=false;if(this.Bo.Bw){this.Bo.As(false);this.ArT(!this.VV);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VV));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Hh],E,0);if(!!E)this.Hh(this);},ArT:function(E){if(this.VV===
E)return;this.VV=E;this.Am();},A_F:function(E){if((E===this.AEl)&&(E===this.AEm)
)return;this.AEl=E;this.AEm=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApO],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApO],E,0);A.pe([this,this.ApO],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BF._Init.call(this.Do={I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.UR;this.H(BD);this.Bo.PZ(0);this.Bo.WO(50);this.Do.Filter=149;this.CT.
J1(E8);this.CT.KA(Hs);this.CT.DD(I0);this.CT.DN(Iw);this.CT.Bn6(16);this.CT.AFL(
100);this.J(this.CT,0);this.Bo.MJ=[this,this.Qx];this.Do.Lt=[this,this.BBx];this.
Do.BG=[this,this.AiS];this.CT.AE3=[this,this.BBd];this.CT.Awd=[this,this.BA$];this.
CT.Lt=[this,this.AAU];this.CT.BG=[this,this.AAT];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Do._Done();this.CT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit(
);this.CT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADL.__proto__=C.Aoh;C.AVG.__proto__=C.Aoh;C.ADK.__proto__=A.
Core.P;C.UR.__proto__=A.Core.P;};C._ReInit=function(){};C.DI=function(D){var B;if((
B=C.Aeb[0]._this)&&(B._cycle!=D))B._Done(C.Aeb[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */