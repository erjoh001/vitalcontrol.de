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
var Cc=[0,0,200,50];var BF=[0,0,150,50];var E7=[0,50];var Hp=[150,50];var IS=[150
,0];var Ir=[0,0];
C.Ad_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADo={AxM:null,AxL:null,AUK:500,AGZ:-1,AVc:0xFFFFFFFF,AGY:-1,W4:A.wf,Bnb:
function(E){if(this.AUK===E)return;this.AUK=E;A.pe([this,this.EG],this);},A_o:function(
E){if(this.AGZ===E)return;this.AGZ=E;A.pe([this,this.EG],this);},A_n:function(E){
if(this.AxM===E)return;this.AxM=E;A.pe([this,this.EG],this);},A_m:function(E){if(
this.AVc===E)return;this.AVc=E;A.pe([this,this.EG],this);},A_l:function(E){if(this.
AGY===E)return;this.AGY=E;A.pe([this,this.EG],this);},A_k:function(E){if(this.AxL===
E)return;this.AxL=E;A.pe([this,this.EG],this);},AFZ:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W4,E))return;this.W4=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aoe._Init.call(this,aArg);this.__proto__=C.ADo;
},_Mark:function(D){var B;C.Aoe._Mark.call(this,D);if((B=this.AxM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxL)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU7={AvS:null,AvR:null,Au9:null,Ava:null
,Au$:null,Au_:null,Au5:null,Au8:null,Au7:null,Au6:null,ARb:0xFF000000,ARe:0xFF000000
,ARd:0xFF000000,ARc:0xFF000000,AQ9:0xFF000000,ARa:0xFF000000,AQ$:0xFF000000,AQ_:
0xFF000000,AQ8:0,A6Y:0xFFFFFFFF,A61:0xFFFFFFFF,A60:0xFFFFFFFF,A6Z:0xFFFFFFFF,A6U:
0xFFFFFFFF,A6X:0xFFFFFFFF,A6W:0xFFFFFFFF,A6V:0xFFFFFFFF,A6T:0,AQ7:0x12,A6S:0x12,
AOh:0x3F,AOm:-1,AOp:-1,AOo:-1,AOn:-1,AOi:-1,AOl:-1,AOk:-1,AOj:-1,W4:A.wf,BmC:function(
E){if(this.ARb===E)return;this.ARb=E;A.pe([this,this.EG],this);},BmF:function(E){
if(this.ARe===E)return;this.ARe=E;A.pe([this,this.EG],this);},BmE:function(E){if(
this.ARd===E)return;this.ARd=E;A.pe([this,this.EG],this);},BmD:function(E){if(this.
ARc===E)return;this.ARc=E;A.pe([this,this.EG],this);},Bmy:function(E){if(this.AQ9===
E)return;this.AQ9=E;A.pe([this,this.EG],this);},BmB:function(E){if(this.ARa===E)
return;this.ARa=E;A.pe([this,this.EG],this);},BmA:function(E){if(this.AQ$===E)return;
this.AQ$=E;A.pe([this,this.EG],this);},Bmz:function(E){if(this.AQ_===E)return;this.
AQ_=E;A.pe([this,this.EG],this);},Bmx:function(E){if(this.AQ8===E)return;this.AQ8=
E;A.pe([this,this.EG],this);},Bml:function(E){if(this.A6Y===E)return;this.A6Y=E;
A.pe([this,this.EG],this);},Bmo:function(E){if(this.A61===E)return;this.A61=E;A.
pe([this,this.EG],this);},Bmn:function(E){if(this.A60===E)return;this.A60=E;A.pe([
this,this.EG],this);},Bmm:function(E){if(this.A6Z===E)return;this.A6Z=E;A.pe([this
,this.EG],this);},Bmh:function(E){if(this.A6U===E)return;this.A6U=E;A.pe([this,this.
EG],this);},Bmk:function(E){if(this.A6X===E)return;this.A6X=E;A.pe([this,this.EG
],this);},Bmj:function(E){if(this.A6W===E)return;this.A6W=E;A.pe([this,this.EG],
this);},Bmi:function(E){if(this.A6V===E)return;this.A6V=E;A.pe([this,this.EG],this
);},Bmg:function(E){if(this.A6T===E)return;this.A6T=E;A.pe([this,this.EG],this);
},Bmv:function(E){if(this.AQ7===E)return;this.AQ7=E;A.pe([this,this.EG],this);},
A9V:function(E){if(this.AvS===E)return;this.AvS=E;A.pe([this,this.EG],this);},A9U:
function(E){if(this.AvR===E)return;this.AvR=E;A.pe([this,this.EG],this);},Bme:function(
E){if(this.A6S===E)return;this.A6S=E;A.pe([this,this.EG],this);},BlQ:function(E){
if(this.AOh===E)return;this.AOh=E;A.pe([this,this.EG],this);},Bl3:function(E){if(
this.AOm===E)return;this.AOm=E;A.pe([this,this.EG],this);},Bl6:function(E){if(this.
AOp===E)return;this.AOp=E;A.pe([this,this.EG],this);},Bl5:function(E){if(this.AOo===
E)return;this.AOo=E;A.pe([this,this.EG],this);},Bl4:function(E){if(this.AOn===E)
return;this.AOn=E;A.pe([this,this.EG],this);},BlZ:function(E){if(this.Au9===E)return;
this.Au9=E;A.pe([this,this.EG],this);},Bl2:function(E){if(this.Ava===E)return;this.
Ava=E;A.pe([this,this.EG],this);},Bl1:function(E){if(this.Au$===E)return;this.Au$=
E;A.pe([this,this.EG],this);},Bl0:function(E){if(this.Au_===E)return;this.Au_=E;
A.pe([this,this.EG],this);},BlV:function(E){if(this.AOi===E)return;this.AOi=E;A.
pe([this,this.EG],this);},BlY:function(E){if(this.AOl===E)return;this.AOl=E;A.pe([
this,this.EG],this);},BlX:function(E){if(this.AOk===E)return;this.AOk=E;A.pe([this
,this.EG],this);},BlW:function(E){if(this.AOj===E)return;this.AOj=E;A.pe([this,this.
EG],this);},BlR:function(E){if(this.Au5===E)return;this.Au5=E;A.pe([this,this.EG
],this);},BlU:function(E){if(this.Au8===E)return;this.Au8=E;A.pe([this,this.EG],
this);},BlT:function(E){if(this.Au7===E)return;this.Au7=E;A.pe([this,this.EG],this
);},BlS:function(E){if(this.Au6===E)return;this.Au6=E;A.pe([this,this.EG],this);
},AFZ:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W4,E))
return;this.W4=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aoe._Init.call(
this,aArg);this.__proto__=C.AU7;},_Mark:function(D){var B;C.Aoe._Mark.call(this,
D);if((B=this.AvS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ava)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au$)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au6)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoe={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoe;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADn={LM:null,LL:null,Appearance:null
,M5:null,Aip:0,Gb:100,Gq:0,AM:50,BfR:true,H:function(E){var B;if(!!this.Appearance
){var Azo=[E[2]-E[0],E[3]-E[1]];var Oj=Azo;if(Oj[0]<this.Appearance.W4[0])Oj=[this.
Appearance.W4[0],Oj[1]];if(Oj[1]<this.Appearance.W4[1])Oj=[Oj[0],this.Appearance.
W4[1]];var Ha=A.abe(Oj,Azo);if(!!Ha[0]){var HU=((this.PJ&0x4)===0x4);var HV=((this.
PJ&0x8)===0x8);if(HU&&!HV)E=A.abN(E,E[2]+Ha[0]);else if(!HU&&HV)E=[].concat(E[0]-
Ha[0],E.slice(1,4));else{E=[].concat(E[0]-((Ha[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Oj[0]);}}if(!!Ha[1]){var HW=((this.PJ&0x10)===0x10);var HT=((this.PJ&0x20)===
0x20);if(HW&&!HT)E=[].concat(E.slice(0,3),E[3]+Ha[1]);else if(!HW&&HT)E=A.abP(E,
E[1]-Ha[1]);else{E=A.abP(E,E[1]-((Ha[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oj[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BdV=!!this.Appearance&&!!this.Appearance.AxL;var BdW=!!this.Appearance&&!!this.
Appearance.AxM;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BdV&&!!!this.LL){this.
LL=A._NewObject(A.acg.NO,0);this.J(this.LL,0);}else if(!BdV&&!!this.LL){this.HP(
this.LL);this.LL=null;}if(BdW&&!!!this.LM){this.LM=A._NewObject(A.acg.NO,0);this.
J(this.LM,0);}else if(!BdW&&!!this.LM){this.HP(this.LM);this.LM=null;}if(!!this.
LL){this.LL.Aw(this.Appearance.AxL);this.LL.L(this.Appearance.AVc);this.LL.A9H(0x1B
);this.LL.Ar8(54);if(this.Appearance.AGY<0){this.LL.Zv(true);this.LL.Cw(0);}else{
this.LL.Zv(false);this.LL.Cw(this.Appearance.AGY);}}if(!!this.LM){this.LM.Aw(this.
Appearance.AxM);this.LM.L(0xFFFFFFFF);this.LM.A9H(0x1E);this.LM.Ar8(35);if(this.
Appearance.AGZ<0){this.LM.Zv(true);this.LM.Cw(0);}else{this.LM.Zv(false);this.LM.
Cw(this.Appearance.AGZ);}}var pos=((AE[2]-AE[0])*this.Aip)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LL&&!!this.LL.Al){var s=this.LL.Al.FrameSize;
var x2=AE[2]-AE[0];var Eo=pos;if(Eo>x2)Eo=x2;this.LL.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eo,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LL.A9X([x2-((s[0]
/3)|0),this.LL.Ann[1]]);this.LL.Z(true);}if(!!this.LM&&!!this.LM.Al){var s=this.
LM.Al.FrameSize;var x2=AE[2]-AE[0];var Eo=pos;if(Eo<0)Eo=0;this.LM.H([Eo,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LM.A9X([x2-((s[0]/3)|0),this.LM.Ann[1]]);this.LM.Z(true);}},AKA:function(G){var AtZ=
this.Aip;var AK8=0;if(!!this.Appearance)AK8=this.Appearance.AUK;if(this.BfR&&(this.
Gb!==this.Gq)){this.Aip=-this.Gq/(this.Gb-this.Gq);AtZ=this.Aip;this.BfR=false;}
if(this.Gb!==this.Gq)AtZ=(this.Uh()-this.Gq)/(this.Gb-this.Gq);if(AtZ===this.Aip
)return;this.M5.Ar(false);if(AK8<=0){this.Aip=AtZ;this.Am();return;}var AKH=AtZ-
this.Aip;if(AKH<0)AKH=-AKH;this.M5.WG(14);this.M5.Cx=this.Aip;this.M5.B2=AtZ;this.
M5.Fp((10+((AK8/2)|0))+((((AK8*AKH)|0)/2)|0));this.M5.Ar(true);},Bz$:function(G){
},BAc:function(G){this.Aip=this.M5.A4;this.Am();},ApL:function(G){A.pe([this,this.
AKA],this);if(!!this.Appearance)this.H(this.M);this.Am();},EV:function(E){if(this.
Gb===E)return;this.Gb=E;A.pe([this,this.AKA],this);},Gc:function(E){if(this.Gq===
E)return;this.Gq=E;A.pe([this,this.AKA],this);},Uh:function(){var E=this.AM;if(this.
Gq>this.Gb){if(E<this.Gb)E=this.Gb;if(E>this.Gq)E=this.Gq;}else{if(E<this.Gq)E=this.
Gq;if(E>this.Gb)E=this.Gb;}return E;},By:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKA],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApL],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApL],E,0);A.pe([this,this.ApL],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ADn;this.H(Cc);this.M5.WG(14);this.M5.HO(1);this.M5.SB=[this,this.Bz$];this.M5.
Ahl=[this,this.BAc];},_Done:function(){this.__proto__=A.Core.P;this.M5._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UJ={Qw:null
,Vd:null,Appearance:null,Q:null,Bo:null,Dl:null,CR:null,AD1:A.jV,AD0:A.jV,A3h:0,
BA2:0,VL:false,H:function(E){var B;if(!!this.Appearance){var Azo=[E[2]-E[0],E[3]-
E[1]];var Oj=Azo;if(Oj[0]<this.Appearance.W4[0])Oj=[this.Appearance.W4[0],Oj[1]];
if(Oj[1]<this.Appearance.W4[1])Oj=[Oj[0],this.Appearance.W4[1]];var Ha=A.abe(Oj,
Azo);if(!!Ha[0]){var HU=((this.PJ&0x4)===0x4);var HV=((this.PJ&0x8)===0x8);if(HU&&
!HV)E=A.abN(E,E[2]+Ha[0]);else if(!HU&&HV)E=[].concat(E[0]-Ha[0],E.slice(1,4));else{
E=[].concat(E[0]-((Ha[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Oj[0]);}}if(!!Ha[1]){
var HW=((this.PJ&0x10)===0x10);var HT=((this.PJ&0x20)===0x20);if(HW&&!HT)E=[].concat(
E.slice(0,3),E[3]+Ha[1]);else if(!HW&&HT)E=A.abP(E,E[1]-Ha[1]);else{E=A.abP(E,E[
1]-((Ha[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oj[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BdU=!!this.Appearance&&(((((((
!!this.Appearance.Au6||!!this.Appearance.Au7)||!!this.Appearance.Au8)||!!this.Appearance.
Au5)||!!this.Appearance.Au_)||!!this.Appearance.Au$)||!!this.Appearance.Ava)||!!
this.Appearance.Au9);var BdX=!!this.Appearance&&((!!this.AD0&&!!this.Appearance.
AvR)||(!!this.AD1&&!!this.Appearance.AvS));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af5;if(BdU&&!!!this.Vd){this.Vd=A._NewObject(A.acg.NO,0);this.J(this.Vd,
0);}else if(!BdU&&!!this.Vd){this.HP(this.Vd);this.Vd=null;}if(BdX&&!!!this.Qw){
this.Qw=A._NewObject(A.acg.Text,0);this.J(this.Qw,0);this.Qw.BlJ(true);}else if(
!BdX&&!!this.Qw){this.HP(this.Qw);this.Qw=null;}if(!((Ae&0x10)===0x10))Af5=0x44;
else if(((this.CR.Down&&this.CR.YK)||this.Dl.Down)||this.Bo.Bw)Af5=0x41;else if(((
Ae&0x40)===0x40))Af5=0x46;else Af5=0x45;if(!this.VL)Af5=String.fromCharCode(Af5).
toLowerCase().charCodeAt(0)||0;this.BA2=Af5;if(!!this.Vd){var bitmap;var Aaz;var
EZ=this.Appearance.AOh;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af5){case 0x44:{bitmap=
this.Appearance.Au$;Aaz=this.Appearance.AOo;}break;case 0x41:{bitmap=this.Appearance.
Au9;Aaz=this.Appearance.AOm;}break;case 0x46:{bitmap=this.Appearance.Ava;Aaz=this.
Appearance.AOp;}break;case 0x45:{bitmap=this.Appearance.Au_;Aaz=this.Appearance.
AOn;}break;case 0x64:{bitmap=this.Appearance.Au7;Aaz=this.Appearance.AOk;}break;
case 0x61:{bitmap=this.Appearance.Au5;Aaz=this.Appearance.AOi;}break;case 0x66:{
bitmap=this.Appearance.Au8;Aaz=this.Appearance.AOl;}break;default:{bitmap=this.Appearance.
Au6;Aaz=this.Appearance.AOj;}}this.Vd.Zv(Aaz<0);this.Vd.L(0xFFFFFFFF);if(Aaz<0)Aaz=
0;if(!!bitmap&&!((EZ&0x1)===0x1)){var HU=((EZ&0x4)===0x4);var HV=((EZ&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HU&&!HV)Az=A.abN(Az,Az[0]+BY);else if(!HU&&HV)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EZ&0x2)===0x2)){
var HW=((EZ&0x10)===0x10);var HT=((EZ&0x20)===0x20);var BK=bitmap.FrameSize[1];if(
HW&&!HT)Az=[].concat(Az.slice(0,3),Az[1]+BK);else if(!HW&&HT)Az=A.abP(Az,Az[3]-BK
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BK/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BK);}}this.Vd.Cw(Aaz);this.Vd.Aw(bitmap);this.Vd.H(Az);this.Vd.Ar8(16
);}if(!!this.Qw){var Aio;var font;var A2l;switch(Af5){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvS;A2l=this.AD1;}break;default:{font=this.Appearance.
AvR;A2l=this.AD0;}}switch(Af5){case 0x44:Aio=this.Appearance.ARd;break;case 0x41:
Aio=this.Appearance.ARb;break;case 0x46:Aio=this.Appearance.ARe;break;case 0x45:
Aio=this.Appearance.ARc;break;case 0x64:Aio=this.Appearance.AQ$;break;case 0x61:
Aio=this.Appearance.AQ9;break;case 0x66:Aio=this.Appearance.ARa;break;default:Aio=
this.Appearance.AQ_;}this.Qw.H([AE[0]+this.Appearance.AQ8,AE[1],AE[2],AE[3]]);this.
Qw.A6(this.Appearance.AQ7);this.Qw.S(font);this.Qw.R(A2l);this.Qw.L(Aio);this.Qw.
KS(true);this.Qw.BlI(true);this.Qw.Ar8(92);}this.ExtendClipping(0,0,0,0);{var Aus=
AE;this.CR.DM(Aus.slice(0,2));this.CR.Ks(Aus.slice(2,4));this.CR.DC([Aus[2],Aus[
1]]);this.CR.JR([Aus[0],Aus[3]]);}},ApL:function(G){var Bd6=this.Dl.Filter;this.
Dl.Filter=149;if(!Bd6&&!!this.Dl.Filter)this.Cs(0x4,0x0);if(!!Bd6&&!this.Dl.Filter
)this.Cs(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Kd:function(G){
var F;if(!!this.Q)this.ArN((F=this.Q,F[1].call(F[0])));},Qo:function(G){var F;this.
Am();this.ArN(!this.VL);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VL));A.abo(this.
Q,0);}},BAx:function(G){var F;var ApX=0;if(!!this.Appearance)ApX=50;this.CR.Ar(true
);this.Am();if(((this.Dl.Bs-this.A3h)|0)>=ApX){this.ArN(!this.VL);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VL));A.abo(this.Q,0);}}else{this.Bo.WC(ApX-((this.Dl.
Bs-this.A3h)|0));this.Bo.Ar(true);}},AiU:function(G){var F;this.CR.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArN(!this.VL);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VL));A.abo(this.Q,0);}}this.A3h=this.Dl.Bs;},BAf:function(G){
this.Am();},BAb:function(G){this.Am();},AAC:function(G){var F;var ApX=0;if(!!this.
Appearance)ApX=50;this.Dl.Bw=true;if(!this.CR.YK)return;if(this.CR.NF)return;if(
this.CR.Jr>=ApX){this.ArN(!this.VL);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VL
));A.abo(this.Q,0);}}else{this.Bo.WC(ApX-this.CR.Jr);this.Bo.Ar(true);}},AAB:function(
G){var F;this.Dl.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArN(!this.VL);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VL));A.abo(this.Q,0);}}},As:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kd],E,0);if(!!E)this.Kd(this);},ArN:function(E){if(this.VL===
E)return;this.VL=E;this.Am();},A9T:function(E){if((E===this.AD0)&&(E===this.AD1)
)return;this.AD0=E;this.AD1=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApL],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApL],E,0);A.pe([this,this.ApL],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BM._Init.call(this.Dl={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UJ;this.H(BF);this.Bo.PP(0);this.Bo.WC(50);this.Dl.Filter=149;this.CR.
JR(E7);this.CR.Ks(Hp);this.CR.DC(IS);this.CR.DM(Ir);this.CR.Bm2(16);this.CR.AFo(
100);this.J(this.CR,0);this.Bo.Mz=[this,this.Qo];this.Dl.Lm=[this,this.BAx];this.
Dl.BN=[this,this.AiU];this.CR.AEF=[this,this.BAf];this.CR.Av5=[this,this.BAb];this.
CR.Lm=[this,this.AAC];this.CR.BN=[this,this.AAB];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dl._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dl._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vd)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADo.__proto__=C.Aoe;C.AU7.__proto__=C.Aoe;C.ADn.__proto__=A.
Core.P;C.UJ.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad_[0]._this)&&(B._cycle!=D))B._Done(C.Ad_[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */