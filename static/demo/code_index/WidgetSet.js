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
);if(index.acr)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
acr=(function(){var A=index;var C={};
var Ce=[0,0,200,50];var BD=[0,0,150,50];var E6=[0,50];var Hr=[150,50];var IU=[150
,0];var Is=[0,0];
C.Aea={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADw={AxR:null,AxQ:null,AU7:500,AG8:-1,AVz:0xFFFFFFFF,AG7:-1,W4:A.wf,BnY:
function(E){if(this.AU7===E)return;this.AU7=E;A.pe([this,this.EG],this);},A_P:function(
E){if(this.AG8===E)return;this.AG8=E;A.pe([this,this.EG],this);},A_O:function(E){
if(this.AxR===E)return;this.AxR=E;A.pe([this,this.EG],this);},A_N:function(E){if(
this.AVz===E)return;this.AVz=E;A.pe([this,this.EG],this);},A_M:function(E){if(this.
AG7===E)return;this.AG7=E;A.pe([this,this.EG],this);},A_L:function(E){if(this.AxQ===
E)return;this.AxQ=E;A.pe([this,this.EG],this);},AF8:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W4,E))return;this.W4=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aod._Init.call(this,aArg);this.__proto__=C.ADw;
},_Mark:function(D){var B;C.Aod._Mark.call(this,D);if((B=this.AxR)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxQ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVs={AvY:null,AvX:null,Avg:null,Avj:null
,Avi:null,Avh:null,Avc:null,Avf:null,Ave:null,Avd:null,ARx:0xFF000000,ARA:0xFF000000
,ARz:0xFF000000,ARy:0xFF000000,ARt:0xFF000000,ARw:0xFF000000,ARv:0xFF000000,ARu:
0xFF000000,ARs:0,A7j:0xFFFFFFFF,A7m:0xFFFFFFFF,A7l:0xFFFFFFFF,A7k:0xFFFFFFFF,A7f:
0xFFFFFFFF,A7i:0xFFFFFFFF,A7h:0xFFFFFFFF,A7g:0xFFFFFFFF,A7e:0,ARr:0x12,A7d:0x12,
AOp:0x3F,AOu:-1,AOx:-1,AOw:-1,AOv:-1,AOq:-1,AOt:-1,AOs:-1,AOr:-1,W4:A.wf,Bnn:function(
E){if(this.ARx===E)return;this.ARx=E;A.pe([this,this.EG],this);},Bnq:function(E){
if(this.ARA===E)return;this.ARA=E;A.pe([this,this.EG],this);},Bnp:function(E){if(
this.ARz===E)return;this.ARz=E;A.pe([this,this.EG],this);},Bno:function(E){if(this.
ARy===E)return;this.ARy=E;A.pe([this,this.EG],this);},Bnj:function(E){if(this.ARt===
E)return;this.ARt=E;A.pe([this,this.EG],this);},Bnm:function(E){if(this.ARw===E)
return;this.ARw=E;A.pe([this,this.EG],this);},Bnl:function(E){if(this.ARv===E)return;
this.ARv=E;A.pe([this,this.EG],this);},Bnk:function(E){if(this.ARu===E)return;this.
ARu=E;A.pe([this,this.EG],this);},Bni:function(E){if(this.ARs===E)return;this.ARs=
E;A.pe([this,this.EG],this);},Bm8:function(E){if(this.A7j===E)return;this.A7j=E;
A.pe([this,this.EG],this);},Bm$:function(E){if(this.A7m===E)return;this.A7m=E;A.
pe([this,this.EG],this);},Bm_:function(E){if(this.A7l===E)return;this.A7l=E;A.pe([
this,this.EG],this);},Bm9:function(E){if(this.A7k===E)return;this.A7k=E;A.pe([this
,this.EG],this);},Bm4:function(E){if(this.A7f===E)return;this.A7f=E;A.pe([this,this.
EG],this);},Bm7:function(E){if(this.A7i===E)return;this.A7i=E;A.pe([this,this.EG
],this);},Bm6:function(E){if(this.A7h===E)return;this.A7h=E;A.pe([this,this.EG],
this);},Bm5:function(E){if(this.A7g===E)return;this.A7g=E;A.pe([this,this.EG],this
);},Bm3:function(E){if(this.A7e===E)return;this.A7e=E;A.pe([this,this.EG],this);
},Bng:function(E){if(this.ARr===E)return;this.ARr=E;A.pe([this,this.EG],this);},
A_j:function(E){if(this.AvY===E)return;this.AvY=E;A.pe([this,this.EG],this);},A_i:
function(E){if(this.AvX===E)return;this.AvX=E;A.pe([this,this.EG],this);},Bm1:function(
E){if(this.A7d===E)return;this.A7d=E;A.pe([this,this.EG],this);},BmB:function(E){
if(this.AOp===E)return;this.AOp=E;A.pe([this,this.EG],this);},BmO:function(E){if(
this.AOu===E)return;this.AOu=E;A.pe([this,this.EG],this);},BmR:function(E){if(this.
AOx===E)return;this.AOx=E;A.pe([this,this.EG],this);},BmQ:function(E){if(this.AOw===
E)return;this.AOw=E;A.pe([this,this.EG],this);},BmP:function(E){if(this.AOv===E)
return;this.AOv=E;A.pe([this,this.EG],this);},BmK:function(E){if(this.Avg===E)return;
this.Avg=E;A.pe([this,this.EG],this);},BmN:function(E){if(this.Avj===E)return;this.
Avj=E;A.pe([this,this.EG],this);},BmM:function(E){if(this.Avi===E)return;this.Avi=
E;A.pe([this,this.EG],this);},BmL:function(E){if(this.Avh===E)return;this.Avh=E;
A.pe([this,this.EG],this);},BmG:function(E){if(this.AOq===E)return;this.AOq=E;A.
pe([this,this.EG],this);},BmJ:function(E){if(this.AOt===E)return;this.AOt=E;A.pe([
this,this.EG],this);},BmI:function(E){if(this.AOs===E)return;this.AOs=E;A.pe([this
,this.EG],this);},BmH:function(E){if(this.AOr===E)return;this.AOr=E;A.pe([this,this.
EG],this);},BmC:function(E){if(this.Avc===E)return;this.Avc=E;A.pe([this,this.EG
],this);},BmF:function(E){if(this.Avf===E)return;this.Avf=E;A.pe([this,this.EG],
this);},BmE:function(E){if(this.Ave===E)return;this.Ave=E;A.pe([this,this.EG],this
);},BmD:function(E){if(this.Avd===E)return;this.Avd=E;A.pe([this,this.EG],this);
},AF8:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W4,E))
return;this.W4=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aod._Init.call(
this,aArg);this.__proto__=C.AVs;},_Mark:function(D){var B;C.Aod._Mark.call(this,
D);if((B=this.AvY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Avg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avi)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Avc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avf)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ave)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avd)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aod={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aod;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADv={LM:null,LL:null,Appearance:null
,M_:null,Aio:0,F$:100,Gq:0,AM:50,Bgr:true,H:function(E){var B;if(!!this.Appearance
){var Azv=[E[2]-E[0],E[3]-E[1]];var On=Azv;if(On[0]<this.Appearance.W4[0])On=[this.
Appearance.W4[0],On[1]];if(On[1]<this.Appearance.W4[1])On=[On[0],this.Appearance.
W4[1]];var Hc=A.abe(On,Azv);if(!!Hc[0]){var HS=((this.PO&0x4)===0x4);var HT=((this.
PO&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+Hc[0]);else if(!HS&&HT)E=[].concat(E[0]-
Hc[0],E.slice(1,4));else{E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+On[0]);}}if(!!Hc[1]){var HU=((this.PO&0x10)===0x10);var HR=((this.PO&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+Hc[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-Hc[1]);else{E=A.abP(E,E[1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+On[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var Bew=!!this.Appearance&&!!this.Appearance.AxQ;var Bex=!!this.Appearance&&!!this.
Appearance.AxR;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Bew&&!!!this.LL){this.
LL=A._NewObject(A.acg.NT,0);this.J(this.LL,0);}else if(!Bew&&!!this.LL){this.HO(
this.LL);this.LL=null;}if(Bex&&!!!this.LM){this.LM=A._NewObject(A.acg.NT,0);this.
J(this.LM,0);}else if(!Bex&&!!this.LM){this.HO(this.LM);this.LM=null;}if(!!this.
LL){this.LL.Ax(this.Appearance.AxQ);this.LL.L(this.Appearance.AVz);this.LL.A97(0x1B
);this.LL.Ar6(54);if(this.Appearance.AG7<0){this.LL.Zp(true);this.LL.Cv(0);}else{
this.LL.Zp(false);this.LL.Cv(this.Appearance.AG7);}}if(!!this.LM){this.LM.Ax(this.
Appearance.AxR);this.LM.L(0xFFFFFFFF);this.LM.A97(0x1E);this.LM.Ar6(35);if(this.
Appearance.AG8<0){this.LM.Zp(true);this.LM.Cv(0);}else{this.LM.Zp(false);this.LM.
Cv(this.Appearance.AG8);}}var pos=((AE[2]-AE[0])*this.Aio)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LL&&!!this.LL.Al){var s=this.LL.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LL.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LL.A_l([x2-((s[0]
/3)|0),this.LL.Anm[1]]);this.LL.Z(true);}if(!!this.LM&&!!this.LM.Al){var s=this.
LM.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LM.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LM.A_l([x2-((s[0]/3)|0),this.LM.Anm[1]]);this.LM.Z(true);}},AKI:function(G){var At6=
this.Aio;var ALe=0;if(!!this.Appearance)ALe=this.Appearance.AU7;if(this.Bgr&&(this.
F$!==this.Gq)){this.Aio=-this.Gq/(this.F$-this.Gq);At6=this.Aio;this.Bgr=false;}
if(this.F$!==this.Gq)At6=(this.Ui()-this.Gq)/(this.F$-this.Gq);if(At6===this.Aio
)return;this.M_.Ar(false);if(ALe<=0){this.Aio=At6;this.Am();return;}var AKP=At6-
this.Aio;if(AKP<0)AKP=-AKP;this.M_.WF(14);this.M_.Cx=this.Aio;this.M_.B2=At6;this.
M_.Fr((10+((ALe/2)|0))+((((ALe*AKP)|0)/2)|0));this.M_.Ar(true);},BAX:function(G){
},BA1:function(G){this.Aio=this.M_.A5;this.Am();},ApJ:function(G){A.pe([this,this.
AKI],this);if(!!this.Appearance)this.H(this.M);this.Am();},EU:function(E){if(this.
F$===E)return;this.F$=E;A.pe([this,this.AKI],this);},Ga:function(E){if(this.Gq===
E)return;this.Gq=E;A.pe([this,this.AKI],this);},Ui:function(){var E=this.AM;if(this.
Gq>this.F$){if(E<this.F$)E=this.F$;if(E>this.Gq)E=this.Gq;}else{if(E<this.Gq)E=this.
Gq;if(E>this.F$)E=this.F$;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKI],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApJ],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApJ],E,0);A.pe([this,this.ApJ],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M_._Init.call(this.M_={I:this},0);this.__proto__=
C.ADv;this.H(Ce);this.M_.WF(14);this.M_.HN(1);this.M_.SB=[this,this.BAX];this.M_.
Ahp=[this,this.BA1];},_Done:function(){this.__proto__=A.Core.P;this.M_._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M_.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M_)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UJ={QB:null
,Ve:null,Appearance:null,Q:null,Bo:null,Dn:null,CR:null,AD9:A.jV,AD8:A.jV,A3H:0,
BBQ:0,VM:false,H:function(E){var B;if(!!this.Appearance){var Azv=[E[2]-E[0],E[3]-
E[1]];var On=Azv;if(On[0]<this.Appearance.W4[0])On=[this.Appearance.W4[0],On[1]];
if(On[1]<this.Appearance.W4[1])On=[On[0],this.Appearance.W4[1]];var Hc=A.abe(On,
Azv);if(!!Hc[0]){var HS=((this.PO&0x4)===0x4);var HT=((this.PO&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+Hc[0]);else if(!HS&&HT)E=[].concat(E[0]-Hc[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+On[0]);}}if(!!Hc[1]){
var HU=((this.PO&0x10)===0x10);var HR=((this.PO&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+Hc[1]);else if(!HU&&HR)E=A.abP(E,E[1]-Hc[1]);else{E=A.abP(E,E[
1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+On[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Bev=!!this.Appearance&&(((((((
!!this.Appearance.Avd||!!this.Appearance.Ave)||!!this.Appearance.Avf)||!!this.Appearance.
Avc)||!!this.Appearance.Avh)||!!this.Appearance.Avi)||!!this.Appearance.Avj)||!!
this.Appearance.Avg);var Bey=!!this.Appearance&&((!!this.AD8&&!!this.Appearance.
AvX)||(!!this.AD9&&!!this.Appearance.AvY));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af7;if(Bev&&!!!this.Ve){this.Ve=A._NewObject(A.acg.NT,0);this.J(this.Ve,
0);}else if(!Bev&&!!this.Ve){this.HO(this.Ve);this.Ve=null;}if(Bey&&!!!this.QB){
this.QB=A._NewObject(A.acg.Text,0);this.J(this.QB,0);this.QB.Bmu(true);}else if(
!Bey&&!!this.QB){this.HO(this.QB);this.QB=null;}if(!((Ae&0x10)===0x10))Af7=0x44;
else if(((this.CR.Down&&this.CR.YG)||this.Dn.Down)||this.Bo.Bw)Af7=0x41;else if(((
Ae&0x40)===0x40))Af7=0x46;else Af7=0x45;if(!this.VM)Af7=String.fromCharCode(Af7).
toLowerCase().charCodeAt(0)||0;this.BBQ=Af7;if(!!this.Ve){var bitmap;var Aas;var
EW=this.Appearance.AOp;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af7){case 0x44:{bitmap=
this.Appearance.Avi;Aas=this.Appearance.AOw;}break;case 0x41:{bitmap=this.Appearance.
Avg;Aas=this.Appearance.AOu;}break;case 0x46:{bitmap=this.Appearance.Avj;Aas=this.
Appearance.AOx;}break;case 0x45:{bitmap=this.Appearance.Avh;Aas=this.Appearance.
AOv;}break;case 0x64:{bitmap=this.Appearance.Ave;Aas=this.Appearance.AOs;}break;
case 0x61:{bitmap=this.Appearance.Avc;Aas=this.Appearance.AOq;}break;case 0x66:{
bitmap=this.Appearance.Avf;Aas=this.Appearance.AOt;}break;default:{bitmap=this.Appearance.
Avd;Aas=this.Appearance.AOr;}}this.Ve.Zp(Aas<0);this.Ve.L(0xFFFFFFFF);if(Aas<0)Aas=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BY);else if(!HS&&HT)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BI=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BI);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BI
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BI/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BI);}}this.Ve.Cv(Aas);this.Ve.Ax(bitmap);this.Ve.H(Az);this.Ve.Ar6(16
);}if(!!this.QB){var Ain;var font;var A2K;switch(Af7){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvY;A2K=this.AD9;}break;default:{font=this.Appearance.
AvX;A2K=this.AD8;}}switch(Af7){case 0x44:Ain=this.Appearance.ARz;break;case 0x41:
Ain=this.Appearance.ARx;break;case 0x46:Ain=this.Appearance.ARA;break;case 0x45:
Ain=this.Appearance.ARy;break;case 0x64:Ain=this.Appearance.ARv;break;case 0x61:
Ain=this.Appearance.ARt;break;case 0x66:Ain=this.Appearance.ARw;break;default:Ain=
this.Appearance.ARu;}this.QB.H([AE[0]+this.Appearance.ARs,AE[1],AE[2],AE[3]]);this.
QB.A6(this.Appearance.ARr);this.QB.S(font);this.QB.R(A2K);this.QB.L(Ain);this.QB.
KS(true);this.QB.Bmt(true);this.QB.Ar6(92);}this.ExtendClipping(0,0,0,0);{var Auz=
AE;this.CR.DM(Auz.slice(0,2));this.CR.Kv(Auz.slice(2,4));this.CR.DC([Auz[2],Auz[
1]]);this.CR.JV([Auz[0],Auz[3]]);}},ApJ:function(G){var BeH=this.Dn.Filter;this.
Dn.Filter=149;if(!BeH&&!!this.Dn.Filter)this.Cr(0x4,0x0);if(!!BeH&&!this.Dn.Filter
)this.Cr(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},IC:function(G){
var F;if(!!this.Q)this.ArK((F=this.Q,F[1].call(F[0])));},Qu:function(G){var F;this.
Am();this.ArK(!this.VM);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VM));A.abo(this.
Q,0);}},BBm:function(G){var F;var ApU=0;if(!!this.Appearance)ApU=50;this.CR.Ar(true
);this.Am();if(((this.Dn.Bs-this.A3H)|0)>=ApU){this.ArK(!this.VM);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VM));A.abo(this.Q,0);}}else{this.Bo.WD(ApU-((this.Dn.
Bs-this.A3H)|0));this.Bo.Ar(true);}},AiR:function(G){var F;this.CR.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArK(!this.VM);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VM));A.abo(this.Q,0);}}this.A3H=this.Dn.Bs;},BA4:function(G){
this.Am();},BA0:function(G){this.Am();},AAH:function(G){var F;var ApU=0;if(!!this.
Appearance)ApU=50;this.Dn.Bw=true;if(!this.CR.YG)return;if(this.CR.NJ)return;if(
this.CR.Jt>=ApU){this.ArK(!this.VM);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VM
));A.abo(this.Q,0);}}else{this.Bo.WD(ApU-this.CR.Jt);this.Bo.Ar(true);}},AAG:function(
G){var F;this.Dn.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArK(!this.VM);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VM));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.IC],E,0);if(!!E)this.IC(this);},ArK:function(E){if(this.VM===
E)return;this.VM=E;this.Am();},A_h:function(E){if((E===this.AD8)&&(E===this.AD9)
)return;this.AD8=E;this.AD9=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApJ],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApJ],E,0);A.pe([this,this.ApJ],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BK._Init.call(this.Dn={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UJ;this.H(BD);this.Bo.PV(0);this.Bo.WD(50);this.Dn.Filter=149;this.CR.
JV(E6);this.CR.Kv(Hr);this.CR.DC(IU);this.CR.DM(Is);this.CR.BnN(16);this.CR.AFx(
100);this.J(this.CR,0);this.Bo.MC=[this,this.Qu];this.Dn.Lo=[this,this.BBm];this.
Dn.BL=[this,this.AiR];this.CR.AEO=[this,this.BA4];this.CR.Av$=[this,this.BA0];this.
CR.Lo=[this,this.AAH];this.CR.BL=[this,this.AAG];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dn._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ve)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADw.__proto__=C.Aod;C.AVs.__proto__=C.Aod;C.ADv.__proto__=A.
Core.P;C.UJ.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Aea[0]._this)&&(B._cycle!=D))B._Done(C.Aea[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */