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
var Ce=[0,0,200,50];var BD=[0,0,150,50];var E7=[0,50];var Hr=[150,50];var IV=[150
,0];var Is=[0,0];
C.Aea={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADx={AxR:null,AxQ:null,AU6:500,AG9:-1,AVy:0xFFFFFFFF,AG8:-1,W7:A.wf,Bn2:
function(E){if(this.AU6===E)return;this.AU6=E;A.pe([this,this.EG],this);},A_S:function(
E){if(this.AG9===E)return;this.AG9=E;A.pe([this,this.EG],this);},A_R:function(E){
if(this.AxR===E)return;this.AxR=E;A.pe([this,this.EG],this);},A_Q:function(E){if(
this.AVy===E)return;this.AVy=E;A.pe([this,this.EG],this);},A_P:function(E){if(this.
AG8===E)return;this.AG8=E;A.pe([this,this.EG],this);},A_O:function(E){if(this.AxQ===
E)return;this.AxQ=E;A.pe([this,this.EG],this);},AF9:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W7,E))return;this.W7=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aod._Init.call(this,aArg);this.__proto__=C.ADx;
},_Mark:function(D){var B;C.Aod._Mark.call(this,D);if((B=this.AxR)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxQ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVr={AvY:null,AvX:null,Avg:null,Avj:null
,Avi:null,Avh:null,Avc:null,Avf:null,Ave:null,Avd:null,ARw:0xFF000000,ARz:0xFF000000
,ARy:0xFF000000,ARx:0xFF000000,ARs:0xFF000000,ARv:0xFF000000,ARu:0xFF000000,ARt:
0xFF000000,ARr:0,A7m:0xFFFFFFFF,A7p:0xFFFFFFFF,A7o:0xFFFFFFFF,A7n:0xFFFFFFFF,A7i:
0xFFFFFFFF,A7l:0xFFFFFFFF,A7k:0xFFFFFFFF,A7j:0xFFFFFFFF,A7h:0,ARq:0x12,A7g:0x12,
AOo:0x3F,AOt:-1,AOw:-1,AOv:-1,AOu:-1,AOp:-1,AOs:-1,AOr:-1,AOq:-1,W7:A.wf,Bnr:function(
E){if(this.ARw===E)return;this.ARw=E;A.pe([this,this.EG],this);},Bnu:function(E){
if(this.ARz===E)return;this.ARz=E;A.pe([this,this.EG],this);},Bnt:function(E){if(
this.ARy===E)return;this.ARy=E;A.pe([this,this.EG],this);},Bns:function(E){if(this.
ARx===E)return;this.ARx=E;A.pe([this,this.EG],this);},Bnn:function(E){if(this.ARs===
E)return;this.ARs=E;A.pe([this,this.EG],this);},Bnq:function(E){if(this.ARv===E)
return;this.ARv=E;A.pe([this,this.EG],this);},Bnp:function(E){if(this.ARu===E)return;
this.ARu=E;A.pe([this,this.EG],this);},Bno:function(E){if(this.ARt===E)return;this.
ARt=E;A.pe([this,this.EG],this);},Bnm:function(E){if(this.ARr===E)return;this.ARr=
E;A.pe([this,this.EG],this);},Bna:function(E){if(this.A7m===E)return;this.A7m=E;
A.pe([this,this.EG],this);},Bnd:function(E){if(this.A7p===E)return;this.A7p=E;A.
pe([this,this.EG],this);},Bnc:function(E){if(this.A7o===E)return;this.A7o=E;A.pe([
this,this.EG],this);},Bnb:function(E){if(this.A7n===E)return;this.A7n=E;A.pe([this
,this.EG],this);},Bm8:function(E){if(this.A7i===E)return;this.A7i=E;A.pe([this,this.
EG],this);},Bm$:function(E){if(this.A7l===E)return;this.A7l=E;A.pe([this,this.EG
],this);},Bm_:function(E){if(this.A7k===E)return;this.A7k=E;A.pe([this,this.EG],
this);},Bm9:function(E){if(this.A7j===E)return;this.A7j=E;A.pe([this,this.EG],this
);},Bm7:function(E){if(this.A7h===E)return;this.A7h=E;A.pe([this,this.EG],this);
},Bnk:function(E){if(this.ARq===E)return;this.ARq=E;A.pe([this,this.EG],this);},
A_m:function(E){if(this.AvY===E)return;this.AvY=E;A.pe([this,this.EG],this);},A_l:
function(E){if(this.AvX===E)return;this.AvX=E;A.pe([this,this.EG],this);},Bm5:function(
E){if(this.A7g===E)return;this.A7g=E;A.pe([this,this.EG],this);},BmF:function(E){
if(this.AOo===E)return;this.AOo=E;A.pe([this,this.EG],this);},BmS:function(E){if(
this.AOt===E)return;this.AOt=E;A.pe([this,this.EG],this);},BmV:function(E){if(this.
AOw===E)return;this.AOw=E;A.pe([this,this.EG],this);},BmU:function(E){if(this.AOv===
E)return;this.AOv=E;A.pe([this,this.EG],this);},BmT:function(E){if(this.AOu===E)
return;this.AOu=E;A.pe([this,this.EG],this);},BmO:function(E){if(this.Avg===E)return;
this.Avg=E;A.pe([this,this.EG],this);},BmR:function(E){if(this.Avj===E)return;this.
Avj=E;A.pe([this,this.EG],this);},BmQ:function(E){if(this.Avi===E)return;this.Avi=
E;A.pe([this,this.EG],this);},BmP:function(E){if(this.Avh===E)return;this.Avh=E;
A.pe([this,this.EG],this);},BmK:function(E){if(this.AOp===E)return;this.AOp=E;A.
pe([this,this.EG],this);},BmN:function(E){if(this.AOs===E)return;this.AOs=E;A.pe([
this,this.EG],this);},BmM:function(E){if(this.AOr===E)return;this.AOr=E;A.pe([this
,this.EG],this);},BmL:function(E){if(this.AOq===E)return;this.AOq=E;A.pe([this,this.
EG],this);},BmG:function(E){if(this.Avc===E)return;this.Avc=E;A.pe([this,this.EG
],this);},BmJ:function(E){if(this.Avf===E)return;this.Avf=E;A.pe([this,this.EG],
this);},BmI:function(E){if(this.Ave===E)return;this.Ave=E;A.pe([this,this.EG],this
);},BmH:function(E){if(this.Avd===E)return;this.Avd=E;A.pe([this,this.EG],this);
},AF9:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W7,E))
return;this.W7=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aod._Init.call(
this,aArg);this.__proto__=C.AVr;},_Mark:function(D){var B;C.Aod._Mark.call(this,
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
null,_className:"WidgetSet::WidgetConfig"};C.ADw={LM:null,LL:null,Appearance:null
,M_:null,Aio:0,F$:100,Gq:0,AM:50,Bgx:true,H:function(E){var B;if(!!this.Appearance
){var Azv=[E[2]-E[0],E[3]-E[1]];var Oo=Azv;if(Oo[0]<this.Appearance.W7[0])Oo=[this.
Appearance.W7[0],Oo[1]];if(Oo[1]<this.Appearance.W7[1])Oo=[Oo[0],this.Appearance.
W7[1]];var Hc=A.abe(Oo,Azv);if(!!Hc[0]){var HT=((this.PO&0x4)===0x4);var HU=((this.
PO&0x8)===0x8);if(HT&&!HU)E=A.abN(E,E[2]+Hc[0]);else if(!HT&&HU)E=[].concat(E[0]-
Hc[0],E.slice(1,4));else{E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Oo[0]);}}if(!!Hc[1]){var HV=((this.PO&0x10)===0x10);var HS=((this.PO&0x20)===
0x20);if(HV&&!HS)E=[].concat(E.slice(0,3),E[3]+Hc[1]);else if(!HV&&HS)E=A.abP(E,
E[1]-Hc[1]);else{E=A.abP(E,E[1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oo[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BeC=!!this.Appearance&&!!this.Appearance.AxQ;var BeD=!!this.Appearance&&!!this.
Appearance.AxR;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BeC&&!!!this.LL){this.
LL=A._NewObject(A.acg.NT,0);this.J(this.LL,0);}else if(!BeC&&!!this.LL){this.HP(
this.LL);this.LL=null;}if(BeD&&!!!this.LM){this.LM=A._NewObject(A.acg.NT,0);this.
J(this.LM,0);}else if(!BeD&&!!this.LM){this.HP(this.LM);this.LM=null;}if(!!this.
LL){this.LL.Ax(this.Appearance.AxQ);this.LL.L(this.Appearance.AVy);this.LL.A9_(0x1B
);this.LL.Ar6(54);if(this.Appearance.AG8<0){this.LL.Zr(true);this.LL.Cv(0);}else{
this.LL.Zr(false);this.LL.Cv(this.Appearance.AG8);}}if(!!this.LM){this.LM.Ax(this.
Appearance.AxR);this.LM.L(0xFFFFFFFF);this.LM.A9_(0x1E);this.LM.Ar6(35);if(this.
Appearance.AG9<0){this.LM.Zr(true);this.LM.Cv(0);}else{this.LM.Zr(false);this.LM.
Cv(this.Appearance.AG9);}}var pos=((AE[2]-AE[0])*this.Aio)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LL&&!!this.LL.Al){var s=this.LL.Al.FrameSize;
var x2=AE[2]-AE[0];var Ep=pos;if(Ep>x2)Ep=x2;this.LL.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Ep,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LL.A_o([x2-((s[0]
/3)|0),this.LL.Anm[1]]);this.LL.Z(true);}if(!!this.LM&&!!this.LM.Al){var s=this.
LM.Al.FrameSize;var x2=AE[2]-AE[0];var Ep=pos;if(Ep<0)Ep=0;this.LM.H([Ep,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LM.A_o([x2-((s[0]/3)|0),this.LM.Anm[1]]);this.LM.Z(true);}},AKI:function(G){var At6=
this.Aio;var ALd=0;if(!!this.Appearance)ALd=this.Appearance.AU6;if(this.Bgx&&(this.
F$!==this.Gq)){this.Aio=-this.Gq/(this.F$-this.Gq);At6=this.Aio;this.Bgx=false;}
if(this.F$!==this.Gq)At6=(this.Uj()-this.Gq)/(this.F$-this.Gq);if(At6===this.Aio
)return;this.M_.Ar(false);if(ALd<=0){this.Aio=At6;this.Am();return;}var AKP=At6-
this.Aio;if(AKP<0)AKP=-AKP;this.M_.WI(14);this.M_.Cx=this.Aio;this.M_.B2=At6;this.
M_.Fr((10+((ALd/2)|0))+((((ALd*AKP)|0)/2)|0));this.M_.Ar(true);},BA0:function(G){
},BA3:function(G){this.Aio=this.M_.A5;this.Am();},ApJ:function(G){A.pe([this,this.
AKI],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
F$===E)return;this.F$=E;A.pe([this,this.AKI],this);},Ga:function(E){if(this.Gq===
E)return;this.Gq=E;A.pe([this,this.AKI],this);},Uj:function(){var E=this.AM;if(this.
Gq>this.F$){if(E<this.F$)E=this.F$;if(E>this.Gq)E=this.Gq;}else{if(E<this.Gq)E=this.
Gq;if(E>this.F$)E=this.F$;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKI],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApJ],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApJ],E,0);A.pe([this,this.ApJ],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M_._Init.call(this.M_={I:this},0);this.__proto__=
C.ADw;this.H(Ce);this.M_.WI(14);this.M_.HO(1);this.M_.SC=[this,this.BA0];this.M_.
Ahp=[this,this.BA3];},_Done:function(){this.__proto__=A.Core.P;this.M_._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M_.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M_)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UK={QB:null
,Vf:null,Appearance:null,Q:null,Bo:null,Dn:null,CS:null,AD_:A.jV,AD9:A.jV,A3H:0,
BBS:0,VN:false,H:function(E){var B;if(!!this.Appearance){var Azv=[E[2]-E[0],E[3]-
E[1]];var Oo=Azv;if(Oo[0]<this.Appearance.W7[0])Oo=[this.Appearance.W7[0],Oo[1]];
if(Oo[1]<this.Appearance.W7[1])Oo=[Oo[0],this.Appearance.W7[1]];var Hc=A.abe(Oo,
Azv);if(!!Hc[0]){var HT=((this.PO&0x4)===0x4);var HU=((this.PO&0x8)===0x8);if(HT&&
!HU)E=A.abN(E,E[2]+Hc[0]);else if(!HT&&HU)E=[].concat(E[0]-Hc[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hc[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Oo[0]);}}if(!!Hc[1]){
var HV=((this.PO&0x10)===0x10);var HS=((this.PO&0x20)===0x20);if(HV&&!HS)E=[].concat(
E.slice(0,3),E[3]+Hc[1]);else if(!HV&&HS)E=A.abP(E,E[1]-Hc[1]);else{E=A.abP(E,E[
1]-((Hc[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oo[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BeB=!!this.Appearance&&(((((((
!!this.Appearance.Avd||!!this.Appearance.Ave)||!!this.Appearance.Avf)||!!this.Appearance.
Avc)||!!this.Appearance.Avh)||!!this.Appearance.Avi)||!!this.Appearance.Avj)||!!
this.Appearance.Avg);var BeE=!!this.Appearance&&((!!this.AD9&&!!this.Appearance.
AvX)||(!!this.AD_&&!!this.Appearance.AvY));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af7;if(BeB&&!!!this.Vf){this.Vf=A._NewObject(A.acg.NT,0);this.J(this.Vf,
0);}else if(!BeB&&!!this.Vf){this.HP(this.Vf);this.Vf=null;}if(BeE&&!!!this.QB){
this.QB=A._NewObject(A.acg.Text,0);this.J(this.QB,0);this.QB.Bmy(true);}else if(
!BeE&&!!this.QB){this.HP(this.QB);this.QB=null;}if(!((Ae&0x10)===0x10))Af7=0x44;
else if(((this.CS.Down&&this.CS.YI)||this.Dn.Down)||this.Bo.Bw)Af7=0x41;else if(((
Ae&0x40)===0x40))Af7=0x46;else Af7=0x45;if(!this.VN)Af7=String.fromCharCode(Af7).
toLowerCase().charCodeAt(0)||0;this.BBS=Af7;if(!!this.Vf){var bitmap;var Aau;var
EW=this.Appearance.AOo;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af7){case 0x44:{bitmap=
this.Appearance.Avi;Aau=this.Appearance.AOv;}break;case 0x41:{bitmap=this.Appearance.
Avg;Aau=this.Appearance.AOt;}break;case 0x46:{bitmap=this.Appearance.Avj;Aau=this.
Appearance.AOw;}break;case 0x45:{bitmap=this.Appearance.Avh;Aau=this.Appearance.
AOu;}break;case 0x64:{bitmap=this.Appearance.Ave;Aau=this.Appearance.AOr;}break;
case 0x61:{bitmap=this.Appearance.Avc;Aau=this.Appearance.AOp;}break;case 0x66:{
bitmap=this.Appearance.Avf;Aau=this.Appearance.AOs;}break;default:{bitmap=this.Appearance.
Avd;Aau=this.Appearance.AOq;}}this.Vf.Zr(Aau<0);this.Vf.L(0xFFFFFFFF);if(Aau<0)Aau=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HT=((EW&0x4)===0x4);var HU=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HT&&!HU)Az=A.abN(Az,Az[0]+BY);else if(!HT&&HU)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HV=((EW&0x10)===0x10);var HS=((EW&0x20)===0x20);var BI=bitmap.FrameSize[1];if(
HV&&!HS)Az=[].concat(Az.slice(0,3),Az[1]+BI);else if(!HV&&HS)Az=A.abP(Az,Az[3]-BI
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BI/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BI);}}this.Vf.Cv(Aau);this.Vf.Ax(bitmap);this.Vf.H(Az);this.Vf.Ar6(16
);}if(!!this.QB){var Ain;var font;var A2K;switch(Af7){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvY;A2K=this.AD_;}break;default:{font=this.Appearance.
AvX;A2K=this.AD9;}}switch(Af7){case 0x44:Ain=this.Appearance.ARy;break;case 0x41:
Ain=this.Appearance.ARw;break;case 0x46:Ain=this.Appearance.ARz;break;case 0x45:
Ain=this.Appearance.ARx;break;case 0x64:Ain=this.Appearance.ARu;break;case 0x61:
Ain=this.Appearance.ARs;break;case 0x66:Ain=this.Appearance.ARv;break;default:Ain=
this.Appearance.ARt;}this.QB.H([AE[0]+this.Appearance.ARr,AE[1],AE[2],AE[3]]);this.
QB.A6(this.Appearance.ARq);this.QB.S(font);this.QB.R(A2K);this.QB.L(Ain);this.QB.
KS(true);this.QB.Bmx(true);this.QB.Ar6(92);}this.ExtendClipping(0,0,0,0);{var Auz=
AE;this.CS.DM(Auz.slice(0,2));this.CS.Kw(Auz.slice(2,4));this.CS.DC([Auz[2],Auz[
1]]);this.CS.JX([Auz[0],Auz[3]]);}},ApJ:function(G){var BeN=this.Dn.Filter;this.
Dn.Filter=149;if(!BeN&&!!this.Dn.Filter)this.Cs(0x4,0x0);if(!!BeN&&!this.Dn.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},ID:function(G){
var F;if(!!this.Q)this.ArK((F=this.Q,F[1].call(F[0])));},Qu:function(G){var F;this.
Am();this.ArK(!this.VN);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VN));A.abo(this.
Q,0);}},BBo:function(G){var F;var ApU=0;if(!!this.Appearance)ApU=50;this.CS.Ar(true
);this.Am();if(((this.Dn.Bs-this.A3H)|0)>=ApU){this.ArK(!this.VN);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VN));A.abo(this.Q,0);}}else{this.Bo.WG(ApU-((this.Dn.
Bs-this.A3H)|0));this.Bo.Ar(true);}},AiR:function(G){var F;this.CS.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArK(!this.VN);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VN));A.abo(this.Q,0);}}this.A3H=this.Dn.Bs;},BA6:function(G){
this.Am();},BA2:function(G){this.Am();},AAH:function(G){var F;var ApU=0;if(!!this.
Appearance)ApU=50;this.Dn.Bw=true;if(!this.CS.YI)return;if(this.CS.NJ)return;if(
this.CS.Ju>=ApU){this.ArK(!this.VN);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VN
));A.abo(this.Q,0);}}else{this.Bo.WG(ApU-this.CS.Ju);this.Bo.Ar(true);}},AAG:function(
G){var F;this.Dn.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArK(!this.VN);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VN));A.abo(this.Q,0);}}},Au:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.ID],E,0);if(!!E)this.ID(this);},ArK:function(E){if(this.VN===
E)return;this.VN=E;this.Am();},A_k:function(E){if((E===this.AD9)&&(E===this.AD_)
)return;this.AD9=E;this.AD_=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApJ],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApJ],E,0);A.pe([this,this.ApJ],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BK._Init.call(this.Dn={I:this},0);A.Core.Bn._Init.call(this.CS={I:this},0);this.
__proto__=C.UK;this.H(BD);this.Bo.PV(0);this.Bo.WG(50);this.Dn.Filter=149;this.CS.
JX(E7);this.CS.Kw(Hr);this.CS.DC(IV);this.CS.DM(Is);this.CS.BnR(16);this.CS.AFy(
100);this.J(this.CS,0);this.Bo.MC=[this,this.Qu];this.Dn.Lo=[this,this.BBo];this.
Dn.BL=[this,this.AiR];this.CS.AEP=[this,this.BA6];this.CS.Av$=[this,this.BA2];this.
CS.Lo=[this,this.AAH];this.CS.BL=[this,this.AAG];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dn._Done();this.CS._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit(
);this.CS._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.QB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vf)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CS)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADx.__proto__=C.Aod;C.AVr.__proto__=C.Aod;C.ADw.__proto__=A.
Core.P;C.UK.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Aea[0]._this)&&(B._cycle!=D))B._Done(C.Aea[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */