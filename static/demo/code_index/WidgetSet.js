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
var Cc=[0,0,200,50];var BD=[0,0,150,50];var E6=[0,50];var Hp=[150,50];var IS=[150
,0];var Ir=[0,0];
C.Ad6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADk={AxF:null,AxE:null,AUE:500,AGV:-1,AU8:0xFFFFFFFF,AGU:-1,WX:A.wf,BmY:
function(E){if(this.AUE===E)return;this.AUE=E;A.pe([this,this.EG],this);},A_c:function(
E){if(this.AGV===E)return;this.AGV=E;A.pe([this,this.EG],this);},A_b:function(E){
if(this.AxF===E)return;this.AxF=E;A.pe([this,this.EG],this);},A_a:function(E){if(
this.AU8===E)return;this.AU8=E;A.pe([this,this.EG],this);},A9$:function(E){if(this.
AGU===E)return;this.AGU=E;A.pe([this,this.EG],this);},A9_:function(E){if(this.AxE===
E)return;this.AxE=E;A.pe([this,this.EG],this);},AFU:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WX,E))return;this.WX=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.An6._Init.call(this,aArg);this.__proto__=C.ADk;
},_Mark:function(D){var B;C.An6._Mark.call(this,D);if((B=this.AxF)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxE)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU1={AvM:null,AvL:null,Au3:null,Au6:null
,Au5:null,Au4:null,AuZ:null,Au2:null,Au1:null,Au0:null,AQ9:0xFF000000,ARa:0xFF000000
,AQ$:0xFF000000,AQ_:0xFF000000,AQ5:0xFF000000,AQ8:0xFF000000,AQ7:0xFF000000,AQ6:
0xFF000000,AQ4:0,A6M:0xFFFFFFFF,A6P:0xFFFFFFFF,A6O:0xFFFFFFFF,A6N:0xFFFFFFFF,A6I:
0xFFFFFFFF,A6L:0xFFFFFFFF,A6K:0xFFFFFFFF,A6J:0xFFFFFFFF,A6H:0,AQ3:0x12,A6G:0x12,
AOd:0x3F,AOi:-1,AOl:-1,AOk:-1,AOj:-1,AOe:-1,AOh:-1,AOg:-1,AOf:-1,WX:A.wf,Bmn:function(
E){if(this.AQ9===E)return;this.AQ9=E;A.pe([this,this.EG],this);},Bmq:function(E){
if(this.ARa===E)return;this.ARa=E;A.pe([this,this.EG],this);},Bmp:function(E){if(
this.AQ$===E)return;this.AQ$=E;A.pe([this,this.EG],this);},Bmo:function(E){if(this.
AQ_===E)return;this.AQ_=E;A.pe([this,this.EG],this);},Bmj:function(E){if(this.AQ5===
E)return;this.AQ5=E;A.pe([this,this.EG],this);},Bmm:function(E){if(this.AQ8===E)
return;this.AQ8=E;A.pe([this,this.EG],this);},Bml:function(E){if(this.AQ7===E)return;
this.AQ7=E;A.pe([this,this.EG],this);},Bmk:function(E){if(this.AQ6===E)return;this.
AQ6=E;A.pe([this,this.EG],this);},Bmi:function(E){if(this.AQ4===E)return;this.AQ4=
E;A.pe([this,this.EG],this);},Bl8:function(E){if(this.A6M===E)return;this.A6M=E;
A.pe([this,this.EG],this);},Bl$:function(E){if(this.A6P===E)return;this.A6P=E;A.
pe([this,this.EG],this);},Bl_:function(E){if(this.A6O===E)return;this.A6O=E;A.pe([
this,this.EG],this);},Bl9:function(E){if(this.A6N===E)return;this.A6N=E;A.pe([this
,this.EG],this);},Bl4:function(E){if(this.A6I===E)return;this.A6I=E;A.pe([this,this.
EG],this);},Bl7:function(E){if(this.A6L===E)return;this.A6L=E;A.pe([this,this.EG
],this);},Bl6:function(E){if(this.A6K===E)return;this.A6K=E;A.pe([this,this.EG],
this);},Bl5:function(E){if(this.A6J===E)return;this.A6J=E;A.pe([this,this.EG],this
);},Bl3:function(E){if(this.A6H===E)return;this.A6H=E;A.pe([this,this.EG],this);
},Bmg:function(E){if(this.AQ3===E)return;this.AQ3=E;A.pe([this,this.EG],this);},
A9J:function(E){if(this.AvM===E)return;this.AvM=E;A.pe([this,this.EG],this);},A9I:
function(E){if(this.AvL===E)return;this.AvL=E;A.pe([this,this.EG],this);},Bl1:function(
E){if(this.A6G===E)return;this.A6G=E;A.pe([this,this.EG],this);},BlB:function(E){
if(this.AOd===E)return;this.AOd=E;A.pe([this,this.EG],this);},BlO:function(E){if(
this.AOi===E)return;this.AOi=E;A.pe([this,this.EG],this);},BlR:function(E){if(this.
AOl===E)return;this.AOl=E;A.pe([this,this.EG],this);},BlQ:function(E){if(this.AOk===
E)return;this.AOk=E;A.pe([this,this.EG],this);},BlP:function(E){if(this.AOj===E)
return;this.AOj=E;A.pe([this,this.EG],this);},BlK:function(E){if(this.Au3===E)return;
this.Au3=E;A.pe([this,this.EG],this);},BlN:function(E){if(this.Au6===E)return;this.
Au6=E;A.pe([this,this.EG],this);},BlM:function(E){if(this.Au5===E)return;this.Au5=
E;A.pe([this,this.EG],this);},BlL:function(E){if(this.Au4===E)return;this.Au4=E;
A.pe([this,this.EG],this);},BlG:function(E){if(this.AOe===E)return;this.AOe=E;A.
pe([this,this.EG],this);},BlJ:function(E){if(this.AOh===E)return;this.AOh=E;A.pe([
this,this.EG],this);},BlI:function(E){if(this.AOg===E)return;this.AOg=E;A.pe([this
,this.EG],this);},BlH:function(E){if(this.AOf===E)return;this.AOf=E;A.pe([this,this.
EG],this);},BlC:function(E){if(this.AuZ===E)return;this.AuZ=E;A.pe([this,this.EG
],this);},BlF:function(E){if(this.Au2===E)return;this.Au2=E;A.pe([this,this.EG],
this);},BlE:function(E){if(this.Au1===E)return;this.Au1=E;A.pe([this,this.EG],this
);},BlD:function(E){if(this.Au0===E)return;this.Au0=E;A.pe([this,this.EG],this);
},AFU:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WX,E))
return;this.WX=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.An6._Init.call(
this,aArg);this.__proto__=C.AU1;},_Mark:function(D){var B;C.An6._Mark.call(this,
D);if((B=this.AvM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvL)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au5)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AuZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au2)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au0)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.An6={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.An6;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADj={LL:null,LK:null,Appearance:null
,M5:null,Aii:0,F$:100,Gp:0,AM:50,BfF:true,H:function(E){var B;if(!!this.Appearance
){var Azm=[E[2]-E[0],E[3]-E[1]];var Ol=Azm;if(Ol[0]<this.Appearance.WX[0])Ol=[this.
Appearance.WX[0],Ol[1]];if(Ol[1]<this.Appearance.WX[1])Ol=[Ol[0],this.Appearance.
WX[1]];var Ha=A.abe(Ol,Azm);if(!!Ha[0]){var HS=((this.PJ&0x4)===0x4);var HT=((this.
PJ&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+Ha[0]);else if(!HS&&HT)E=[].concat(E[0]-
Ha[0],E.slice(1,4));else{E=[].concat(E[0]-((Ha[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ol[0]);}}if(!!Ha[1]){var HU=((this.PJ&0x10)===0x10);var HR=((this.PJ&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+Ha[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-Ha[1]);else{E=A.abP(E,E[1]-((Ha[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BdJ=!!this.Appearance&&!!this.Appearance.AxE;var BdK=!!this.Appearance&&!!this.
Appearance.AxF;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BdJ&&!!!this.LK){this.
LK=A._NewObject(A.acg.NO,0);this.J(this.LK,0);}else if(!BdJ&&!!this.LK){this.HN(
this.LK);this.LK=null;}if(BdK&&!!!this.LL){this.LL=A._NewObject(A.acg.NO,0);this.
J(this.LL,0);}else if(!BdK&&!!this.LL){this.HN(this.LL);this.LL=null;}if(!!this.
LK){this.LK.Aw(this.Appearance.AxE);this.LK.L(this.Appearance.AU8);this.LK.A9v(0x1B
);this.LK.ArX(54);if(this.Appearance.AGU<0){this.LK.Zl(true);this.LK.Cu(0);}else{
this.LK.Zl(false);this.LK.Cu(this.Appearance.AGU);}}if(!!this.LL){this.LL.Aw(this.
Appearance.AxF);this.LL.L(0xFFFFFFFF);this.LL.A9v(0x1E);this.LL.ArX(35);if(this.
Appearance.AGV<0){this.LL.Zl(true);this.LL.Cu(0);}else{this.LL.Zl(false);this.LL.
Cu(this.Appearance.AGV);}}var pos=((AE[2]-AE[0])*this.Aii)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LK&&!!this.LK.Al){var s=this.LK.Al.FrameSize;
var x2=AE[2]-AE[0];var Eo=pos;if(Eo>x2)Eo=x2;this.LK.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eo,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LK.A9L([x2-((s[0]
/3)|0),this.LK.Ane[1]]);this.LK.Z(true);}if(!!this.LL&&!!this.LL.Al){var s=this.
LL.Al.FrameSize;var x2=AE[2]-AE[0];var Eo=pos;if(Eo<0)Eo=0;this.LL.H([Eo,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LL.A9L([x2-((s[0]/3)|0),this.LL.Ane[1]]);this.LL.Z(true);}},AKw:function(G){var AtS=
this.Aii;var AK4=0;if(!!this.Appearance)AK4=this.Appearance.AUE;if(this.BfF&&(this.
F$!==this.Gp)){this.Aii=-this.Gp/(this.F$-this.Gp);AtS=this.Aii;this.BfF=false;}
if(this.F$!==this.Gp)AtS=(this.Uc()-this.Gp)/(this.F$-this.Gp);if(AtS===this.Aii
)return;this.M5.Ar(false);if(AK4<=0){this.Aii=AtS;this.Am();return;}var AKD=AtS-
this.Aii;if(AKD<0)AKD=-AKD;this.M5.Wy(14);this.M5.Cw=this.Aii;this.M5.B2=AtS;this.
M5.Fp((10+((AK4/2)|0))+((((AK4*AKD)|0)/2)|0));this.M5.Ar(true);},BzU:function(G){
},BzX:function(G){this.Aii=this.M5.A4;this.Am();},ApC:function(G){A.pe([this,this.
AKw],this);if(!!this.Appearance)this.H(this.M);this.Am();},EU:function(E){if(this.
F$===E)return;this.F$=E;A.pe([this,this.AKw],this);},Ga:function(E){if(this.Gp===
E)return;this.Gp=E;A.pe([this,this.AKw],this);},Uc:function(){var E=this.AM;if(this.
Gp>this.F$){if(E<this.F$)E=this.F$;if(E>this.Gp)E=this.Gp;}else{if(E<this.Gp)E=this.
Gp;if(E>this.F$)E=this.F$;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKw],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApC],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApC],E,0);A.pe([this,this.ApC],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ADj;this.H(Cc);this.M5.Wy(14);this.M5.HM(1);this.M5.Sy=[this,this.BzU];this.M5.
Ahi=[this,this.BzX];},_Done:function(){this.__proto__=A.Core.P;this.M5._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UE={Qw:null
,U$:null,Appearance:null,Q:null,Bo:null,Dm:null,CR:null,ADX:A.jV,ADW:A.jV,A27:0,
BAK:0,VH:false,H:function(E){var B;if(!!this.Appearance){var Azm=[E[2]-E[0],E[3]-
E[1]];var Ol=Azm;if(Ol[0]<this.Appearance.WX[0])Ol=[this.Appearance.WX[0],Ol[1]];
if(Ol[1]<this.Appearance.WX[1])Ol=[Ol[0],this.Appearance.WX[1]];var Ha=A.abe(Ol,
Azm);if(!!Ha[0]){var HS=((this.PJ&0x4)===0x4);var HT=((this.PJ&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+Ha[0]);else if(!HS&&HT)E=[].concat(E[0]-Ha[0],E.slice(1,4));else{
E=[].concat(E[0]-((Ha[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ol[0]);}}if(!!Ha[1]){
var HU=((this.PJ&0x10)===0x10);var HR=((this.PJ&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+Ha[1]);else if(!HU&&HR)E=A.abP(E,E[1]-Ha[1]);else{E=A.abP(E,E[
1]-((Ha[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BdI=!!this.Appearance&&(((((((
!!this.Appearance.Au0||!!this.Appearance.Au1)||!!this.Appearance.Au2)||!!this.Appearance.
AuZ)||!!this.Appearance.Au4)||!!this.Appearance.Au5)||!!this.Appearance.Au6)||!!
this.Appearance.Au3);var BdL=!!this.Appearance&&((!!this.ADW&&!!this.Appearance.
AvL)||(!!this.ADX&&!!this.Appearance.AvM));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af2;if(BdI&&!!!this.U$){this.U$=A._NewObject(A.acg.NO,0);this.J(this.U$,
0);}else if(!BdI&&!!this.U$){this.HN(this.U$);this.U$=null;}if(BdL&&!!!this.Qw){
this.Qw=A._NewObject(A.acg.Text,0);this.J(this.Qw,0);this.Qw.Blu(true);}else if(
!BdL&&!!this.Qw){this.HN(this.Qw);this.Qw=null;}if(!((Ae&0x10)===0x10))Af2=0x44;
else if(((this.CR.Down&&this.CR.YB)||this.Dm.Down)||this.Bo.Bw)Af2=0x41;else if(((
Ae&0x40)===0x40))Af2=0x46;else Af2=0x45;if(!this.VH)Af2=String.fromCharCode(Af2).
toLowerCase().charCodeAt(0)||0;this.BAK=Af2;if(!!this.U$){var bitmap;var Aaq;var
EW=this.Appearance.AOd;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af2){case 0x44:{bitmap=
this.Appearance.Au5;Aaq=this.Appearance.AOk;}break;case 0x41:{bitmap=this.Appearance.
Au3;Aaq=this.Appearance.AOi;}break;case 0x46:{bitmap=this.Appearance.Au6;Aaq=this.
Appearance.AOl;}break;case 0x45:{bitmap=this.Appearance.Au4;Aaq=this.Appearance.
AOj;}break;case 0x64:{bitmap=this.Appearance.Au1;Aaq=this.Appearance.AOg;}break;
case 0x61:{bitmap=this.Appearance.AuZ;Aaq=this.Appearance.AOe;}break;case 0x66:{
bitmap=this.Appearance.Au2;Aaq=this.Appearance.AOh;}break;default:{bitmap=this.Appearance.
Au0;Aaq=this.Appearance.AOf;}}this.U$.Zl(Aaq<0);this.U$.L(0xFFFFFFFF);if(Aaq<0)Aaq=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BY);else if(!HS&&HT)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BI=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BI);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BI
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BI/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BI);}}this.U$.Cu(Aaq);this.U$.Aw(bitmap);this.U$.H(Az);this.U$.ArX(16
);}if(!!this.Qw){var Aih;var font;var A1$;switch(Af2){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvM;A1$=this.ADX;}break;default:{font=this.Appearance.
AvL;A1$=this.ADW;}}switch(Af2){case 0x44:Aih=this.Appearance.AQ$;break;case 0x41:
Aih=this.Appearance.AQ9;break;case 0x46:Aih=this.Appearance.ARa;break;case 0x45:
Aih=this.Appearance.AQ_;break;case 0x64:Aih=this.Appearance.AQ7;break;case 0x61:
Aih=this.Appearance.AQ5;break;case 0x66:Aih=this.Appearance.AQ8;break;default:Aih=
this.Appearance.AQ6;}this.Qw.H([AE[0]+this.Appearance.AQ4,AE[1],AE[2],AE[3]]);this.
Qw.A5(this.Appearance.AQ3);this.Qw.S(font);this.Qw.R(A1$);this.Qw.L(Aih);this.Qw.
KQ(true);this.Qw.Blt(true);this.Qw.ArX(92);}this.ExtendClipping(0,0,0,0);{var Aul=
AE;this.CR.DM(Aul.slice(0,2));this.CR.Ks(Aul.slice(2,4));this.CR.DC([Aul[2],Aul[
1]]);this.CR.JS([Aul[0],Aul[3]]);}},ApC:function(G){var BdU=this.Dm.Filter;this.
Dm.Filter=149;if(!BdU&&!!this.Dm.Filter)this.Cr(0x4,0x0);if(!!BdU&&!this.Dm.Filter
)this.Cr(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Kd:function(G){
var F;if(!!this.Q)this.ArC((F=this.Q,F[1].call(F[0])));},Qo:function(G){var F;this.
Am();this.ArC(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.
Q,0);}},BAg:function(G){var F;var ApN=0;if(!!this.Appearance)ApN=50;this.CR.Ar(true
);this.Am();if(((this.Dm.Bs-this.A27)|0)>=ApN){this.ArC(!this.VH);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}else{this.Bo.Ww(ApN-((this.Dm.
Bs-this.A27)|0));this.Bo.Ar(true);}},AiL:function(G){var F;this.CR.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArC(!this.VH);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VH));A.abo(this.Q,0);}}this.A27=this.Dm.Bs;},Bz0:function(G){
this.Am();},BzW:function(G){this.Am();},AAy:function(G){var F;var ApN=0;if(!!this.
Appearance)ApN=50;this.Dm.Bw=true;if(!this.CR.YB)return;if(this.CR.NF)return;if(
this.CR.Jr>=ApN){this.ArC(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH
));A.abo(this.Q,0);}}else{this.Bo.Ww(ApN-this.CR.Jr);this.Bo.Ar(true);}},AAx:function(
G){var F;this.Dm.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArC(!this.VH);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}},At:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kd],E,0);if(!!E)this.Kd(this);},ArC:function(E){if(this.VH===
E)return;this.VH=E;this.Am();},A9H:function(E){if((E===this.ADW)&&(E===this.ADX)
)return;this.ADW=E;this.ADX=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApC],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApC],E,0);A.pe([this,this.ApC],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BK._Init.call(this.Dm={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UE;this.H(BD);this.Bo.PP(0);this.Bo.Ww(50);this.Dm.Filter=149;this.CR.
JS(E6);this.CR.Ks(Hp);this.CR.DC(IS);this.CR.DM(Ir);this.CR.BmN(16);this.CR.AFj(
100);this.J(this.CR,0);this.Bo.Mz=[this,this.Qo];this.Dm.Lm=[this,this.BAg];this.
Dm.BL=[this,this.AiL];this.CR.AEB=[this,this.Bz0];this.CR.AvZ=[this,this.BzW];this.
CR.Lm=[this,this.AAy];this.CR.BL=[this,this.AAx];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dm._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADk.__proto__=C.An6;C.AU1.__proto__=C.An6;C.ADj.__proto__=A.
Core.P;C.UE.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad6[0]._this)&&(B._cycle!=D))B._Done(C.Ad6[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */