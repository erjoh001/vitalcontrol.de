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
);if(index.acr)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acr=(function(){var A=index;var C={};
var Ce=[0,0,200,50];var BD=[0,0,150,50];var E7=[0,50];var Hr=[150,50];var IW=[150
,0];var It=[0,0];
C.Aea={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADB={AxS:null,AxR:null,AU$:500,AHb:-1,AVD:0xFFFFFFFF,AHa:-1,W8:A.wf,Bn9:
function(E){if(this.AU$===E)return;this.AU$=E;A.pe([this,this.EG],this);},A_1:function(
E){if(this.AHb===E)return;this.AHb=E;A.pe([this,this.EG],this);},A_0:function(E){
if(this.AxS===E)return;this.AxS=E;A.pe([this,this.EG],this);},A_Z:function(E){if(
this.AVD===E)return;this.AVD=E;A.pe([this,this.EG],this);},A_Y:function(E){if(this.
AHa===E)return;this.AHa=E;A.pe([this,this.EG],this);},A_X:function(E){if(this.AxR===
E)return;this.AxR=E;A.pe([this,this.EG],this);},AGb:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W8,E))return;this.W8=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aoe._Init.call(this,aArg);this.__proto__=C.ADB;
},_Mark:function(D){var B;C.Aoe._Mark.call(this,D);if((B=this.AxS)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxR)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVw={AvZ:null,AvY:null,Avh:null,Avk:null
,Avj:null,Avi:null,Avd:null,Avg:null,Avf:null,Ave:null,ARB:0xFF000000,ARE:0xFF000000
,ARD:0xFF000000,ARC:0xFF000000,ARx:0xFF000000,ARA:0xFF000000,ARz:0xFF000000,ARy:
0xFF000000,ARw:0,A7v:0xFFFFFFFF,A7y:0xFFFFFFFF,A7x:0xFFFFFFFF,A7w:0xFFFFFFFF,A7r:
0xFFFFFFFF,A7u:0xFFFFFFFF,A7t:0xFFFFFFFF,A7s:0xFFFFFFFF,A7q:0,ARv:0x12,A7p:0x12,
AOt:0x3F,AOy:-1,AOB:-1,AOA:-1,AOz:-1,AOu:-1,AOx:-1,AOw:-1,AOv:-1,W8:A.wf,Bny:function(
E){if(this.ARB===E)return;this.ARB=E;A.pe([this,this.EG],this);},BnB:function(E){
if(this.ARE===E)return;this.ARE=E;A.pe([this,this.EG],this);},BnA:function(E){if(
this.ARD===E)return;this.ARD=E;A.pe([this,this.EG],this);},Bnz:function(E){if(this.
ARC===E)return;this.ARC=E;A.pe([this,this.EG],this);},Bnu:function(E){if(this.ARx===
E)return;this.ARx=E;A.pe([this,this.EG],this);},Bnx:function(E){if(this.ARA===E)
return;this.ARA=E;A.pe([this,this.EG],this);},Bnw:function(E){if(this.ARz===E)return;
this.ARz=E;A.pe([this,this.EG],this);},Bnv:function(E){if(this.ARy===E)return;this.
ARy=E;A.pe([this,this.EG],this);},Bnt:function(E){if(this.ARw===E)return;this.ARw=
E;A.pe([this,this.EG],this);},Bnh:function(E){if(this.A7v===E)return;this.A7v=E;
A.pe([this,this.EG],this);},Bnk:function(E){if(this.A7y===E)return;this.A7y=E;A.
pe([this,this.EG],this);},Bnj:function(E){if(this.A7x===E)return;this.A7x=E;A.pe([
this,this.EG],this);},Bni:function(E){if(this.A7w===E)return;this.A7w=E;A.pe([this
,this.EG],this);},Bnd:function(E){if(this.A7r===E)return;this.A7r=E;A.pe([this,this.
EG],this);},Bng:function(E){if(this.A7u===E)return;this.A7u=E;A.pe([this,this.EG
],this);},Bnf:function(E){if(this.A7t===E)return;this.A7t=E;A.pe([this,this.EG],
this);},Bne:function(E){if(this.A7s===E)return;this.A7s=E;A.pe([this,this.EG],this
);},Bnc:function(E){if(this.A7q===E)return;this.A7q=E;A.pe([this,this.EG],this);
},Bnr:function(E){if(this.ARv===E)return;this.ARv=E;A.pe([this,this.EG],this);},
A_v:function(E){if(this.AvZ===E)return;this.AvZ=E;A.pe([this,this.EG],this);},A_u:
function(E){if(this.AvY===E)return;this.AvY=E;A.pe([this,this.EG],this);},Bna:function(
E){if(this.A7p===E)return;this.A7p=E;A.pe([this,this.EG],this);},BmM:function(E){
if(this.AOt===E)return;this.AOt=E;A.pe([this,this.EG],this);},BmZ:function(E){if(
this.AOy===E)return;this.AOy=E;A.pe([this,this.EG],this);},Bm2:function(E){if(this.
AOB===E)return;this.AOB=E;A.pe([this,this.EG],this);},Bm1:function(E){if(this.AOA===
E)return;this.AOA=E;A.pe([this,this.EG],this);},Bm0:function(E){if(this.AOz===E)
return;this.AOz=E;A.pe([this,this.EG],this);},BmV:function(E){if(this.Avh===E)return;
this.Avh=E;A.pe([this,this.EG],this);},BmY:function(E){if(this.Avk===E)return;this.
Avk=E;A.pe([this,this.EG],this);},BmX:function(E){if(this.Avj===E)return;this.Avj=
E;A.pe([this,this.EG],this);},BmW:function(E){if(this.Avi===E)return;this.Avi=E;
A.pe([this,this.EG],this);},BmR:function(E){if(this.AOu===E)return;this.AOu=E;A.
pe([this,this.EG],this);},BmU:function(E){if(this.AOx===E)return;this.AOx=E;A.pe([
this,this.EG],this);},BmT:function(E){if(this.AOw===E)return;this.AOw=E;A.pe([this
,this.EG],this);},BmS:function(E){if(this.AOv===E)return;this.AOv=E;A.pe([this,this.
EG],this);},BmN:function(E){if(this.Avd===E)return;this.Avd=E;A.pe([this,this.EG
],this);},BmQ:function(E){if(this.Avg===E)return;this.Avg=E;A.pe([this,this.EG],
this);},BmP:function(E){if(this.Avf===E)return;this.Avf=E;A.pe([this,this.EG],this
);},BmO:function(E){if(this.Ave===E)return;this.Ave=E;A.pe([this,this.EG],this);
},AGb:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W8,E))
return;this.W8=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aoe._Init.call(
this,aArg);this.__proto__=C.AVw;},_Mark:function(D){var B;C.Aoe._Mark.call(this,
D);if((B=this.AvZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avj)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avg)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Avf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ave)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoe={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoe;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADA={LO:null,LN:null,Appearance:null
,M$:null,Aio:0,F$:100,Gq:0,AM:50,BgE:true,H:function(E){var B;if(!!this.Appearance
){var Azz=[E[2]-E[0],E[3]-E[1]];var Oq=Azz;if(Oq[0]<this.Appearance.W8[0])Oq=[this.
Appearance.W8[0],Oq[1]];if(Oq[1]<this.Appearance.W8[1])Oq=[Oq[0],this.Appearance.
W8[1]];var Hc=A.abe(Oq,Azz);if(!!Hc[0]){var HU=((this.PO&0x4)===0x4);var HV=((this.
PO&0x8)===0x8);if(HU&&!HV)E=A.abN(E,E[2]+Hc[0]);else if(!HU&&HV)E=[].concat(E[0]-
Hc[0],E.slice(1,4));else{E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Oq[0]);}}if(!!Hc[1]){var HW=((this.PO&0x10)===0x10);var HT=((this.PO&0x20)===
0x20);if(HW&&!HT)E=[].concat(E.slice(0,3),E[3]+Hc[1]);else if(!HW&&HT)E=A.abP(E,
E[1]-Hc[1]);else{E=A.abP(E,E[1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oq[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BeJ=!!this.Appearance&&!!this.Appearance.AxR;var BeK=!!this.Appearance&&!!this.
Appearance.AxS;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BeJ&&!!!this.LN){this.
LN=A._NewObject(A.acg.NU,0);this.J(this.LN,0);}else if(!BeJ&&!!this.LN){this.HP(
this.LN);this.LN=null;}if(BeK&&!!!this.LO){this.LO=A._NewObject(A.acg.NU,0);this.
J(this.LO,0);}else if(!BeK&&!!this.LO){this.HP(this.LO);this.LO=null;}if(!!this.
LN){this.LN.Ax(this.Appearance.AxR);this.LN.L(this.Appearance.AVD);this.LN.A_h(0x1B
);this.LN.Ar8(54);if(this.Appearance.AHa<0){this.LN.Zs(true);this.LN.Cv(0);}else{
this.LN.Zs(false);this.LN.Cv(this.Appearance.AHa);}}if(!!this.LO){this.LO.Ax(this.
Appearance.AxS);this.LO.L(0xFFFFFFFF);this.LO.A_h(0x1E);this.LO.Ar8(35);if(this.
Appearance.AHb<0){this.LO.Zs(true);this.LO.Cv(0);}else{this.LO.Zs(false);this.LO.
Cv(this.Appearance.AHb);}}var pos=((AE[2]-AE[0])*this.Aio)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LN&&!!this.LN.Al){var s=this.LN.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LN.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LN.A_x([x2-((s[0]
/3)|0),this.LN.Ann[1]]);this.LN.Z(true);}if(!!this.LO&&!!this.LO.Al){var s=this.
LO.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LO.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LO.A_x([x2-((s[0]/3)|0),this.LO.Ann[1]]);this.LO.Z(true);}},AKN:function(G){var At7=
this.Aio;var ALi=0;if(!!this.Appearance)ALi=this.Appearance.AU$;if(this.BgE&&(this.
F$!==this.Gq)){this.Aio=-this.Gq/(this.F$-this.Gq);At7=this.Aio;this.BgE=false;}
if(this.F$!==this.Gq)At7=(this.Um()-this.Gq)/(this.F$-this.Gq);if(At7===this.Aio
)return;this.M$.Ar(false);if(ALi<=0){this.Aio=At7;this.Am();return;}var AKU=At7-
this.Aio;if(AKU<0)AKU=-AKU;this.M$.WJ(14);this.M$.Cx=this.Aio;this.M$.B3=At7;this.
M$.Fr((10+((ALi/2)|0))+((((ALi*AKU)|0)/2)|0));this.M$.Ar(true);},BA0:function(G){
},BA3:function(G){this.Aio=this.M$.A5;this.Am();},ApL:function(G){A.pe([this,this.
AKN],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
F$===E)return;this.F$=E;A.pe([this,this.AKN],this);},Ga:function(E){if(this.Gq===
E)return;this.Gq=E;A.pe([this,this.AKN],this);},Um:function(){var E=this.AM;if(this.
Gq>this.F$){if(E<this.F$)E=this.F$;if(E>this.Gq)E=this.Gq;}else{if(E<this.Gq)E=this.
Gq;if(E>this.F$)E=this.F$;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKN],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApL],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApL],E,0);A.pe([this,this.ApL],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M$._Init.call(this.M$={I:this},0);this.__proto__=
C.ADA;this.H(Ce);this.M$.WJ(14);this.M$.HO(1);this.M$.SC=[this,this.BA0];this.M$.
Ahp=[this,this.BA3];},_Done:function(){this.__proto__=A.Core.P;this.M$._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M$.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LO)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M$)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UN={QB:null
,Vg:null,Appearance:null,Q:null,Bo:null,Do:null,CT:null,AEc:A.jV,AEb:A.jV,A3Q:0,
BBS:0,VO:false,H:function(E){var B;if(!!this.Appearance){var Azz=[E[2]-E[0],E[3]-
E[1]];var Oq=Azz;if(Oq[0]<this.Appearance.W8[0])Oq=[this.Appearance.W8[0],Oq[1]];
if(Oq[1]<this.Appearance.W8[1])Oq=[Oq[0],this.Appearance.W8[1]];var Hc=A.abe(Oq,
Azz);if(!!Hc[0]){var HU=((this.PO&0x4)===0x4);var HV=((this.PO&0x8)===0x8);if(HU&&
!HV)E=A.abN(E,E[2]+Hc[0]);else if(!HU&&HV)E=[].concat(E[0]-Hc[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Oq[0]);}}if(!!Hc[1]){
var HW=((this.PO&0x10)===0x10);var HT=((this.PO&0x20)===0x20);if(HW&&!HT)E=[].concat(
E.slice(0,3),E[3]+Hc[1]);else if(!HW&&HT)E=A.abP(E,E[1]-Hc[1]);else{E=A.abP(E,E[
1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oq[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BeI=!!this.Appearance&&(((((((
!!this.Appearance.Ave||!!this.Appearance.Avf)||!!this.Appearance.Avg)||!!this.Appearance.
Avd)||!!this.Appearance.Avi)||!!this.Appearance.Avj)||!!this.Appearance.Avk)||!!
this.Appearance.Avh);var BeL=!!this.Appearance&&((!!this.AEb&&!!this.Appearance.
AvY)||(!!this.AEc&&!!this.Appearance.AvZ));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af7;if(BeI&&!!!this.Vg){this.Vg=A._NewObject(A.acg.NU,0);this.J(this.Vg,
0);}else if(!BeI&&!!this.Vg){this.HP(this.Vg);this.Vg=null;}if(BeL&&!!!this.QB){
this.QB=A._NewObject(A.acg.Text,0);this.J(this.QB,0);this.QB.BmF(true);}else if(
!BeL&&!!this.QB){this.HP(this.QB);this.QB=null;}if(!((Ae&0x10)===0x10))Af7=0x44;
else if(((this.CT.Down&&this.CT.YJ)||this.Do.Down)||this.Bo.Bw)Af7=0x41;else if(((
Ae&0x40)===0x40))Af7=0x46;else Af7=0x45;if(!this.VO)Af7=String.fromCharCode(Af7).
toLowerCase().charCodeAt(0)||0;this.BBS=Af7;if(!!this.Vg){var bitmap;var Aav;var
EW=this.Appearance.AOt;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af7){case 0x44:{bitmap=
this.Appearance.Avj;Aav=this.Appearance.AOA;}break;case 0x41:{bitmap=this.Appearance.
Avh;Aav=this.Appearance.AOy;}break;case 0x46:{bitmap=this.Appearance.Avk;Aav=this.
Appearance.AOB;}break;case 0x45:{bitmap=this.Appearance.Avi;Aav=this.Appearance.
AOz;}break;case 0x64:{bitmap=this.Appearance.Avf;Aav=this.Appearance.AOw;}break;
case 0x61:{bitmap=this.Appearance.Avd;Aav=this.Appearance.AOu;}break;case 0x66:{
bitmap=this.Appearance.Avg;Aav=this.Appearance.AOx;}break;default:{bitmap=this.Appearance.
Ave;Aav=this.Appearance.AOv;}}this.Vg.Zs(Aav<0);this.Vg.L(0xFFFFFFFF);if(Aav<0)Aav=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HU=((EW&0x4)===0x4);var HV=((EW&0x8)===0x8
);var BZ=bitmap.FrameSize[0];if(HU&&!HV)Az=A.abN(Az,Az[0]+BZ);else if(!HU&&HV)Az=[
].concat(Az[2]-BZ,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BZ/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BZ);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HW=((EW&0x10)===0x10);var HT=((EW&0x20)===0x20);var BJ=bitmap.FrameSize[1];if(
HW&&!HT)Az=[].concat(Az.slice(0,3),Az[1]+BJ);else if(!HW&&HT)Az=A.abP(Az,Az[3]-BJ
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BJ/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BJ);}}this.Vg.Cv(Aav);this.Vg.Ax(bitmap);this.Vg.H(Az);this.Vg.Ar8(16
);}if(!!this.QB){var Ain;var font;var A2T;switch(Af7){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvZ;A2T=this.AEc;}break;default:{font=this.Appearance.
AvY;A2T=this.AEb;}}switch(Af7){case 0x44:Ain=this.Appearance.ARD;break;case 0x41:
Ain=this.Appearance.ARB;break;case 0x46:Ain=this.Appearance.ARE;break;case 0x45:
Ain=this.Appearance.ARC;break;case 0x64:Ain=this.Appearance.ARz;break;case 0x61:
Ain=this.Appearance.ARx;break;case 0x66:Ain=this.Appearance.ARA;break;default:Ain=
this.Appearance.ARy;}this.QB.H([AE[0]+this.Appearance.ARw,AE[1],AE[2],AE[3]]);this.
QB.A6(this.Appearance.ARv);this.QB.S(font);this.QB.R(A2T);this.QB.L(Ain);this.QB.
KU(true);this.QB.BmE(true);this.QB.Ar8(92);}this.ExtendClipping(0,0,0,0);{var AuA=
AE;this.CT.DM(AuA.slice(0,2));this.CT.Ky(AuA.slice(2,4));this.CT.DC([AuA[2],AuA[
1]]);this.CT.JZ([AuA[0],AuA[3]]);}},ApL:function(G){var BeU=this.Do.Filter;this.
Do.Filter=149;if(!BeU&&!!this.Do.Filter)this.Cs(0x4,0x0);if(!!BeU&&!this.Do.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},IE:function(G){
var F;if(!!this.Q)this.ArM((F=this.Q,F[1].call(F[0])));},Qu:function(G){var F;this.
Am();this.ArM(!this.VO);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VO));A.abo(this.
Q,0);}},BBo:function(G){var F;var ApW=0;if(!!this.Appearance)ApW=50;this.CT.Ar(true
);this.Am();if(((this.Do.Bs-this.A3Q)|0)>=ApW){this.ArM(!this.VO);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VO));A.abo(this.Q,0);}}else{this.Bo.WH(ApW-((this.Do.
Bs-this.A3Q)|0));this.Bo.Ar(true);}},AiR:function(G){var F;this.CT.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArM(!this.VO);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VO));A.abo(this.Q,0);}}this.A3Q=this.Do.Bs;},BA6:function(G){
this.Am();},BA2:function(G){this.Am();},AAL:function(G){var F;var ApW=0;if(!!this.
Appearance)ApW=50;this.Do.Bw=true;if(!this.CT.YJ)return;if(this.CT.NK)return;if(
this.CT.Jw>=ApW){this.ArM(!this.VO);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VO
));A.abo(this.Q,0);}}else{this.Bo.WH(ApW-this.CT.Jw);this.Bo.Ar(true);}},AAK:function(
G){var F;this.Do.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArM(!this.VO);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VO));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IE],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.IE],E,0);if(!!E)this.IE(this);},ArM:function(E){if(this.VO===
E)return;this.VO=E;this.Am();},A_t:function(E){if((E===this.AEb)&&(E===this.AEc)
)return;this.AEb=E;this.AEc=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApL],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApL],E,0);A.pe([this,this.ApL],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BL._Init.call(this.Do={I:this},0);A.Core.Bn._Init.call(this.CT={I:this},0);this.
__proto__=C.UN;this.H(BD);this.Bo.PV(0);this.Bo.WH(50);this.Do.Filter=149;this.CT.
JZ(E7);this.CT.Ky(Hr);this.CT.DC(IW);this.CT.DM(It);this.CT.BnY(16);this.CT.AFC(
100);this.J(this.CT,0);this.Bo.ME=[this,this.Qu];this.Do.Lq=[this,this.BBo];this.
Do.BM=[this,this.AiR];this.CT.AET=[this,this.BA6];this.CT.Awa=[this,this.BA2];this.
CT.Lq=[this,this.AAL];this.CT.BM=[this,this.AAK];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Do._Done();this.CT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit(
);this.CT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vg)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADB.__proto__=C.Aoe;C.AVw.__proto__=C.Aoe;C.ADA.__proto__=A.
Core.P;C.UN.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Aea[0]._this)&&(B._cycle!=D))B._Done(C.Aea[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */