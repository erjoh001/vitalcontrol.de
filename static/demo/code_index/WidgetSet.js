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
C.Aed={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADN={AxY:null,AxX:null,AVm:500,AHl:-1,AVP:0xFFFFFFFF,AHk:-1,Xe:A.wf,Boj:
function(E){if(this.AVm===E)return;this.AVm=E;A.pe([this,this.EG],this);},A$d:function(
E){if(this.AHl===E)return;this.AHl=E;A.pe([this,this.EG],this);},A$c:function(E){
if(this.AxY===E)return;this.AxY=E;A.pe([this,this.EG],this);},A$b:function(E){if(
this.AVP===E)return;this.AVP=E;A.pe([this,this.EG],this);},A$a:function(E){if(this.
AHk===E)return;this.AHk=E;A.pe([this,this.EG],this);},A_$:function(E){if(this.AxX===
E)return;this.AxX=E;A.pe([this,this.EG],this);},AGl:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xe,E))return;this.Xe=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aoi._Init.call(this,aArg);this.__proto__=C.ADN;
},_Mark:function(D){var B;C.Aoi._Mark.call(this,D);if((B=this.AxY)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVI={Av2:null,Av1:null,Avl:null,Avo:null
,Avn:null,Avm:null,Avh:null,Avk:null,Avj:null,Avi:null,ARJ:0xFF000000,ARM:0xFF000000
,ARL:0xFF000000,ARK:0xFF000000,ARF:0xFF000000,ARI:0xFF000000,ARH:0xFF000000,ARG:
0xFF000000,ARE:0,A7H:0xFFFFFFFF,A7K:0xFFFFFFFF,A7J:0xFFFFFFFF,A7I:0xFFFFFFFF,A7D:
0xFFFFFFFF,A7G:0xFFFFFFFF,A7F:0xFFFFFFFF,A7E:0xFFFFFFFF,A7C:0,ARD:0x12,A7B:0x12,
AOA:0x3F,AOF:-1,AOI:-1,AOH:-1,AOG:-1,AOB:-1,AOE:-1,AOD:-1,AOC:-1,Xe:A.wf,BnJ:function(
E){if(this.ARJ===E)return;this.ARJ=E;A.pe([this,this.EG],this);},BnM:function(E){
if(this.ARM===E)return;this.ARM=E;A.pe([this,this.EG],this);},BnL:function(E){if(
this.ARL===E)return;this.ARL=E;A.pe([this,this.EG],this);},BnK:function(E){if(this.
ARK===E)return;this.ARK=E;A.pe([this,this.EG],this);},BnF:function(E){if(this.ARF===
E)return;this.ARF=E;A.pe([this,this.EG],this);},BnI:function(E){if(this.ARI===E)
return;this.ARI=E;A.pe([this,this.EG],this);},BnH:function(E){if(this.ARH===E)return;
this.ARH=E;A.pe([this,this.EG],this);},BnG:function(E){if(this.ARG===E)return;this.
ARG=E;A.pe([this,this.EG],this);},BnE:function(E){if(this.ARE===E)return;this.ARE=
E;A.pe([this,this.EG],this);},Bns:function(E){if(this.A7H===E)return;this.A7H=E;
A.pe([this,this.EG],this);},Bnv:function(E){if(this.A7K===E)return;this.A7K=E;A.
pe([this,this.EG],this);},Bnu:function(E){if(this.A7J===E)return;this.A7J=E;A.pe([
this,this.EG],this);},Bnt:function(E){if(this.A7I===E)return;this.A7I=E;A.pe([this
,this.EG],this);},Bno:function(E){if(this.A7D===E)return;this.A7D=E;A.pe([this,this.
EG],this);},Bnr:function(E){if(this.A7G===E)return;this.A7G=E;A.pe([this,this.EG
],this);},Bnq:function(E){if(this.A7F===E)return;this.A7F=E;A.pe([this,this.EG],
this);},Bnp:function(E){if(this.A7E===E)return;this.A7E=E;A.pe([this,this.EG],this
);},Bnn:function(E){if(this.A7C===E)return;this.A7C=E;A.pe([this,this.EG],this);
},BnC:function(E){if(this.ARD===E)return;this.ARD=E;A.pe([this,this.EG],this);},
A_J:function(E){if(this.Av2===E)return;this.Av2=E;A.pe([this,this.EG],this);},A_I:
function(E){if(this.Av1===E)return;this.Av1=E;A.pe([this,this.EG],this);},Bnl:function(
E){if(this.A7B===E)return;this.A7B=E;A.pe([this,this.EG],this);},BmX:function(E){
if(this.AOA===E)return;this.AOA=E;A.pe([this,this.EG],this);},Bm_:function(E){if(
this.AOF===E)return;this.AOF=E;A.pe([this,this.EG],this);},Bnb:function(E){if(this.
AOI===E)return;this.AOI=E;A.pe([this,this.EG],this);},Bna:function(E){if(this.AOH===
E)return;this.AOH=E;A.pe([this,this.EG],this);},Bm$:function(E){if(this.AOG===E)
return;this.AOG=E;A.pe([this,this.EG],this);},Bm6:function(E){if(this.Avl===E)return;
this.Avl=E;A.pe([this,this.EG],this);},Bm9:function(E){if(this.Avo===E)return;this.
Avo=E;A.pe([this,this.EG],this);},Bm8:function(E){if(this.Avn===E)return;this.Avn=
E;A.pe([this,this.EG],this);},Bm7:function(E){if(this.Avm===E)return;this.Avm=E;
A.pe([this,this.EG],this);},Bm2:function(E){if(this.AOB===E)return;this.AOB=E;A.
pe([this,this.EG],this);},Bm5:function(E){if(this.AOE===E)return;this.AOE=E;A.pe([
this,this.EG],this);},Bm4:function(E){if(this.AOD===E)return;this.AOD=E;A.pe([this
,this.EG],this);},Bm3:function(E){if(this.AOC===E)return;this.AOC=E;A.pe([this,this.
EG],this);},BmY:function(E){if(this.Avh===E)return;this.Avh=E;A.pe([this,this.EG
],this);},Bm1:function(E){if(this.Avk===E)return;this.Avk=E;A.pe([this,this.EG],
this);},Bm0:function(E){if(this.Avj===E)return;this.Avj=E;A.pe([this,this.EG],this
);},BmZ:function(E){if(this.Avi===E)return;this.Avi=E;A.pe([this,this.EG],this);
},AGl:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.Xe,E))
return;this.Xe=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aoi._Init.call(
this,aArg);this.__proto__=C.AVI;},_Mark:function(D){var B;C.Aoi._Mark.call(this,
D);if((B=this.Av2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avn)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoi={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoi;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADM={LS:null,LQ:null,Appearance:null
,Nf:null,Aiq:0,Ga:100,Gr:0,AM:50,BgQ:true,H:function(E){var B;if(!!this.Appearance
){var AzJ=[E[2]-E[0],E[3]-E[1]];var Ou=AzJ;if(Ou[0]<this.Appearance.Xe[0])Ou=[this.
Appearance.Xe[0],Ou[1]];if(Ou[1]<this.Appearance.Xe[1])Ou=[Ou[0],this.Appearance.
Xe[1]];var Hc=A.abe(Ou,AzJ);if(!!Hc[0]){var HW=((this.PU&0x4)===0x4);var HX=((this.
PU&0x8)===0x8);if(HW&&!HX)E=A.abN(E,E[2]+Hc[0]);else if(!HW&&HX)E=[].concat(E[0]-
Hc[0],E.slice(1,4));else{E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ou[0]);}}if(!!Hc[1]){var HY=((this.PU&0x10)===0x10);var HV=((this.PU&0x20)===
0x20);if(HY&&!HV)E=[].concat(E.slice(0,3),E[3]+Hc[1]);else if(!HY&&HV)E=A.abP(E,
E[1]-Hc[1]);else{E=A.abP(E,E[1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BeV=!!this.Appearance&&!!this.Appearance.AxX;var BeW=!!this.Appearance&&!!this.
Appearance.AxY;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BeV&&!!!this.LQ){this.
LQ=A._NewObject(A.acg.NY,0);this.J(this.LQ,0);}else if(!BeV&&!!this.LQ){this.HR(
this.LQ);this.LQ=null;}if(BeW&&!!!this.LS){this.LS=A._NewObject(A.acg.NY,0);this.
J(this.LS,0);}else if(!BeW&&!!this.LS){this.HR(this.LS);this.LS=null;}if(!!this.
LQ){this.LQ.Ax(this.Appearance.AxX);this.LQ.L(this.Appearance.AVP);this.LQ.A_v(0x1B
);this.LQ.Asd(54);if(this.Appearance.AHk<0){this.LQ.Zx(true);this.LQ.Cw(0);}else{
this.LQ.Zx(false);this.LQ.Cw(this.Appearance.AHk);}}if(!!this.LS){this.LS.Ax(this.
Appearance.AxY);this.LS.L(0xFFFFFFFF);this.LS.A_v(0x1E);this.LS.Asd(35);if(this.
Appearance.AHl<0){this.LS.Zx(true);this.LS.Cw(0);}else{this.LS.Zx(false);this.LS.
Cw(this.Appearance.AHl);}}var pos=((AE[2]-AE[0])*this.Aiq)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LQ&&!!this.LQ.Al){var s=this.LQ.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LQ.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LQ.A_M([x2-((s[0]
/3)|0),this.LQ.Anr[1]]);this.LQ.Z(true);}if(!!this.LS&&!!this.LS.Al){var s=this.
LS.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LS.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LS.A_M([x2-((s[0]/3)|0),this.LS.Anr[1]]);this.LS.Z(true);}},AKV:function(G){var Aua=
this.Aiq;var ALq=0;if(!!this.Appearance)ALq=this.Appearance.AVm;if(this.BgQ&&(this.
Ga!==this.Gr)){this.Aiq=-this.Gr/(this.Ga-this.Gr);Aua=this.Aiq;this.BgQ=false;}
if(this.Ga!==this.Gr)Aua=(this.Ur()-this.Gr)/(this.Ga-this.Gr);if(Aua===this.Aiq
)return;this.Nf.As(false);if(ALq<=0){this.Aiq=Aua;this.Am();return;}var AK2=Aua-
this.Aiq;if(AK2<0)AK2=-AK2;this.Nf.WS(14);this.Nf.Cx=this.Aiq;this.Nf.B3=Aua;this.
Nf.Fr((10+((ALq/2)|0))+((((ALq*AK2)|0)/2)|0));this.Nf.As(true);},BBb:function(G){
},BBe:function(G){this.Aiq=this.Nf.A5;this.Am();},ApP:function(G){A.pe([this,this.
AKV],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
Ga===E)return;this.Ga=E;A.pe([this,this.AKV],this);},Gb:function(E){if(this.Gr===
E)return;this.Gr=E;A.pe([this,this.AKV],this);},Ur:function(){var E=this.AM;if(this.
Gr>this.Ga){if(E<this.Ga)E=this.Ga;if(E>this.Gr)E=this.Gr;}else{if(E<this.Gr)E=this.
Gr;if(E>this.Ga)E=this.Ga;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKV],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApP],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApP],E,0);A.pe([this,this.ApP],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.Nf._Init.call(this.Nf={I:this},0);this.__proto__=
C.ADM;this.H(Cf);this.Nf.WS(14);this.Nf.HQ(1);this.Nf.SJ=[this,this.BBb];this.Nf.
Ahr=[this,this.BBe];},_Done:function(){this.__proto__=A.Core.P;this.Nf._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Nf.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LS)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nf)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.US={QF:null
,Vn:null,Appearance:null,Q:null,Bo:null,Do:null,CT:null,AEo:A.jV,AEn:A.jV,A32:0,
BB5:0,VX:false,H:function(E){var B;if(!!this.Appearance){var AzJ=[E[2]-E[0],E[3]-
E[1]];var Ou=AzJ;if(Ou[0]<this.Appearance.Xe[0])Ou=[this.Appearance.Xe[0],Ou[1]];
if(Ou[1]<this.Appearance.Xe[1])Ou=[Ou[0],this.Appearance.Xe[1]];var Hc=A.abe(Ou,
AzJ);if(!!Hc[0]){var HW=((this.PU&0x4)===0x4);var HX=((this.PU&0x8)===0x8);if(HW&&
!HX)E=A.abN(E,E[2]+Hc[0]);else if(!HW&&HX)E=[].concat(E[0]-Hc[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ou[0]);}}if(!!Hc[1]){
var HY=((this.PU&0x10)===0x10);var HV=((this.PU&0x20)===0x20);if(HY&&!HV)E=[].concat(
E.slice(0,3),E[3]+Hc[1]);else if(!HY&&HV)E=A.abP(E,E[1]-Hc[1]);else{E=A.abP(E,E[
1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ou[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BeU=!!this.Appearance&&(((((((
!!this.Appearance.Avi||!!this.Appearance.Avj)||!!this.Appearance.Avk)||!!this.Appearance.
Avh)||!!this.Appearance.Avm)||!!this.Appearance.Avn)||!!this.Appearance.Avo)||!!
this.Appearance.Avl);var BeX=!!this.Appearance&&((!!this.AEn&&!!this.Appearance.
Av1)||(!!this.AEo&&!!this.Appearance.Av2));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af$;if(BeU&&!!!this.Vn){this.Vn=A._NewObject(A.acg.NY,0);this.J(this.Vn,
0);}else if(!BeU&&!!this.Vn){this.HR(this.Vn);this.Vn=null;}if(BeX&&!!!this.QF){
this.QF=A._NewObject(A.acg.Text,0);this.J(this.QF,0);this.QF.BmQ(true);}else if(
!BeX&&!!this.QF){this.HR(this.QF);this.QF=null;}if(!((Ae&0x10)===0x10))Af$=0x44;
else if(((this.CT.Down&&this.CT.YQ)||this.Do.Down)||this.Bo.Bw)Af$=0x41;else if(((
Ae&0x40)===0x40))Af$=0x46;else Af$=0x45;if(!this.VX)Af$=String.fromCharCode(Af$).
toLowerCase().charCodeAt(0)||0;this.BB5=Af$;if(!!this.Vn){var bitmap;var AaD;var
EW=this.Appearance.AOA;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af$){case 0x44:{bitmap=
this.Appearance.Avn;AaD=this.Appearance.AOH;}break;case 0x41:{bitmap=this.Appearance.
Avl;AaD=this.Appearance.AOF;}break;case 0x46:{bitmap=this.Appearance.Avo;AaD=this.
Appearance.AOI;}break;case 0x45:{bitmap=this.Appearance.Avm;AaD=this.Appearance.
AOG;}break;case 0x64:{bitmap=this.Appearance.Avj;AaD=this.Appearance.AOD;}break;
case 0x61:{bitmap=this.Appearance.Avh;AaD=this.Appearance.AOB;}break;case 0x66:{
bitmap=this.Appearance.Avk;AaD=this.Appearance.AOE;}break;default:{bitmap=this.Appearance.
Avi;AaD=this.Appearance.AOC;}}this.Vn.Zx(AaD<0);this.Vn.L(0xFFFFFFFF);if(AaD<0)AaD=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HW=((EW&0x4)===0x4);var HX=((EW&0x8)===0x8
);var BZ=bitmap.FrameSize[0];if(HW&&!HX)Az=A.abN(Az,Az[0]+BZ);else if(!HW&&HX)Az=[
].concat(Az[2]-BZ,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BZ/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BZ);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HY=((EW&0x10)===0x10);var HV=((EW&0x20)===0x20);var BL=bitmap.FrameSize[1];if(
HY&&!HV)Az=[].concat(Az.slice(0,3),Az[1]+BL);else if(!HY&&HV)Az=A.abP(Az,Az[3]-BL
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BL/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BL);}}this.Vn.Cw(AaD);this.Vn.Ax(bitmap);this.Vn.H(Az);this.Vn.Asd(16
);}if(!!this.QF){var Aip;var font;var A26;switch(Af$){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.Av2;A26=this.AEo;}break;default:{font=this.Appearance.
Av1;A26=this.AEn;}}switch(Af$){case 0x44:Aip=this.Appearance.ARL;break;case 0x41:
Aip=this.Appearance.ARJ;break;case 0x46:Aip=this.Appearance.ARM;break;case 0x45:
Aip=this.Appearance.ARK;break;case 0x64:Aip=this.Appearance.ARH;break;case 0x61:
Aip=this.Appearance.ARF;break;case 0x66:Aip=this.Appearance.ARI;break;default:Aip=
this.Appearance.ARG;}this.QF.H([AE[0]+this.Appearance.ARE,AE[1],AE[2],AE[3]]);this.
QF.A6(this.Appearance.ARD);this.QF.S(font);this.QF.R(A26);this.QF.L(Aip);this.QF.
Lv(true);this.QF.BmP(true);this.QF.Asd(92);}this.ExtendClipping(0,0,0,0);{var AuF=
AE;this.CT.DN(AuF.slice(0,2));this.CT.KA(AuF.slice(2,4));this.CT.DD([AuF[2],AuF[
1]]);this.CT.J1([AuF[0],AuF[3]]);}},ApP:function(G){var Be6=this.Do.Filter;this.
Do.Filter=149;if(!Be6&&!!this.Do.Filter)this.Cs(0x4,0x0);if(!!Be6&&!this.Do.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Hg:function(G){
var F;if(!!this.Q)this.ArU((F=this.Q,F[1].call(F[0])));},Qy:function(G){var F;this.
Am();this.ArU(!this.VX);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VX));A.abo(this.
Q,0);}},BBB:function(G){var F;var Ap0=0;if(!!this.Appearance)Ap0=50;this.CT.As(true
);this.Am();if(((this.Do.Bs-this.A32)|0)>=Ap0){this.ArU(!this.VX);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VX));A.abo(this.Q,0);}}else{this.Bo.WQ(Ap0-((this.Do.
Bs-this.A32)|0));this.Bo.As(true);}},AiT:function(G){var F;this.CT.As(false);this.
Am();if(this.Bo.Bw){this.Bo.As(false);this.ArU(!this.VX);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VX));A.abo(this.Q,0);}}this.A32=this.Do.Bs;},BBh:function(G){
this.Am();},BBd:function(G){this.Am();},AAW:function(G){var F;var Ap0=0;if(!!this.
Appearance)Ap0=50;this.Do.Bw=true;if(!this.CT.YQ)return;if(this.CT.NQ)return;if(
this.CT.Jy>=Ap0){this.ArU(!this.VX);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VX
));A.abo(this.Q,0);}}else{this.Bo.WQ(Ap0-this.CT.Jy);this.Bo.As(true);}},AAV:function(
G){var F;this.Do.Bw=false;if(this.Bo.Bw){this.Bo.As(false);this.ArU(!this.VX);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VX));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Hg],E,0);if(!!E)this.Hg(this);},ArU:function(E){if(this.VX===
E)return;this.VX=E;this.Am();},A_H:function(E){if((E===this.AEn)&&(E===this.AEo)
)return;this.AEn=E;this.AEo=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApP],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApP],E,0);A.pe([this,this.ApP],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BF._Init.call(this.Do={I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.US;this.H(BD);this.Bo.P0(0);this.Bo.WQ(50);this.Do.Filter=149;this.CT.
J1(E8);this.CT.KA(Hs);this.CT.DD(I0);this.CT.DN(Iw);this.CT.Bn9(16);this.CT.AFN(
100);this.J(this.CT,0);this.Bo.MK=[this,this.Qy];this.Do.Ls=[this,this.BBB];this.
Do.BG=[this,this.AiT];this.CT.AE5=[this,this.BBh];this.CT.Awe=[this,this.BBd];this.
CT.Ls=[this,this.AAW];this.CT.BG=[this,this.AAV];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Do._Done();this.CT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit(
);this.CT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vn)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADN.__proto__=C.Aoi;C.AVI.__proto__=C.Aoi;C.ADM.__proto__=A.
Core.P;C.US.__proto__=A.Core.P;};C._ReInit=function(){};C.DI=function(D){var B;if((
B=C.Aed[0]._this)&&(B._cycle!=D))B._Done(C.Aed[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */