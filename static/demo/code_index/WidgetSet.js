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
null}};C.ADi={AxF:null,AxE:null,AUD:500,AGT:-1,AU7:0xFFFFFFFF,AGS:-1,WY:A.wf,BmX:
function(E){if(this.AUD===E)return;this.AUD=E;A.pe([this,this.EG],this);},A_b:function(
E){if(this.AGT===E)return;this.AGT=E;A.pe([this,this.EG],this);},A_a:function(E){
if(this.AxF===E)return;this.AxF=E;A.pe([this,this.EG],this);},A9$:function(E){if(
this.AU7===E)return;this.AU7=E;A.pe([this,this.EG],this);},A9_:function(E){if(this.
AGS===E)return;this.AGS=E;A.pe([this,this.EG],this);},A99:function(E){if(this.AxE===
E)return;this.AxE=E;A.pe([this,this.EG],this);},AFS:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WY,E))return;this.WY=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.An6._Init.call(this,aArg);this.__proto__=C.ADi;
},_Mark:function(D){var B;C.An6._Mark.call(this,D);if((B=this.AxF)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxE)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU0={AvM:null,AvL:null,Au3:null,Au6:null
,Au5:null,Au4:null,AuZ:null,Au2:null,Au1:null,Au0:null,AQ8:0xFF000000,AQ$:0xFF000000
,AQ_:0xFF000000,AQ9:0xFF000000,AQ4:0xFF000000,AQ7:0xFF000000,AQ6:0xFF000000,AQ5:
0xFF000000,AQ3:0,A6L:0xFFFFFFFF,A6O:0xFFFFFFFF,A6N:0xFFFFFFFF,A6M:0xFFFFFFFF,A6H:
0xFFFFFFFF,A6K:0xFFFFFFFF,A6J:0xFFFFFFFF,A6I:0xFFFFFFFF,A6G:0,AQ2:0x12,A6F:0x12,
AOc:0x3F,AOh:-1,AOk:-1,AOj:-1,AOi:-1,AOd:-1,AOg:-1,AOf:-1,AOe:-1,WY:A.wf,Bmm:function(
E){if(this.AQ8===E)return;this.AQ8=E;A.pe([this,this.EG],this);},Bmp:function(E){
if(this.AQ$===E)return;this.AQ$=E;A.pe([this,this.EG],this);},Bmo:function(E){if(
this.AQ_===E)return;this.AQ_=E;A.pe([this,this.EG],this);},Bmn:function(E){if(this.
AQ9===E)return;this.AQ9=E;A.pe([this,this.EG],this);},Bmi:function(E){if(this.AQ4===
E)return;this.AQ4=E;A.pe([this,this.EG],this);},Bml:function(E){if(this.AQ7===E)
return;this.AQ7=E;A.pe([this,this.EG],this);},Bmk:function(E){if(this.AQ6===E)return;
this.AQ6=E;A.pe([this,this.EG],this);},Bmj:function(E){if(this.AQ5===E)return;this.
AQ5=E;A.pe([this,this.EG],this);},Bmh:function(E){if(this.AQ3===E)return;this.AQ3=
E;A.pe([this,this.EG],this);},Bl7:function(E){if(this.A6L===E)return;this.A6L=E;
A.pe([this,this.EG],this);},Bl_:function(E){if(this.A6O===E)return;this.A6O=E;A.
pe([this,this.EG],this);},Bl9:function(E){if(this.A6N===E)return;this.A6N=E;A.pe([
this,this.EG],this);},Bl8:function(E){if(this.A6M===E)return;this.A6M=E;A.pe([this
,this.EG],this);},Bl3:function(E){if(this.A6H===E)return;this.A6H=E;A.pe([this,this.
EG],this);},Bl6:function(E){if(this.A6K===E)return;this.A6K=E;A.pe([this,this.EG
],this);},Bl5:function(E){if(this.A6J===E)return;this.A6J=E;A.pe([this,this.EG],
this);},Bl4:function(E){if(this.A6I===E)return;this.A6I=E;A.pe([this,this.EG],this
);},Bl2:function(E){if(this.A6G===E)return;this.A6G=E;A.pe([this,this.EG],this);
},Bmf:function(E){if(this.AQ2===E)return;this.AQ2=E;A.pe([this,this.EG],this);},
A9I:function(E){if(this.AvM===E)return;this.AvM=E;A.pe([this,this.EG],this);},A9H:
function(E){if(this.AvL===E)return;this.AvL=E;A.pe([this,this.EG],this);},Bl0:function(
E){if(this.A6F===E)return;this.A6F=E;A.pe([this,this.EG],this);},BlA:function(E){
if(this.AOc===E)return;this.AOc=E;A.pe([this,this.EG],this);},BlN:function(E){if(
this.AOh===E)return;this.AOh=E;A.pe([this,this.EG],this);},BlQ:function(E){if(this.
AOk===E)return;this.AOk=E;A.pe([this,this.EG],this);},BlP:function(E){if(this.AOj===
E)return;this.AOj=E;A.pe([this,this.EG],this);},BlO:function(E){if(this.AOi===E)
return;this.AOi=E;A.pe([this,this.EG],this);},BlJ:function(E){if(this.Au3===E)return;
this.Au3=E;A.pe([this,this.EG],this);},BlM:function(E){if(this.Au6===E)return;this.
Au6=E;A.pe([this,this.EG],this);},BlL:function(E){if(this.Au5===E)return;this.Au5=
E;A.pe([this,this.EG],this);},BlK:function(E){if(this.Au4===E)return;this.Au4=E;
A.pe([this,this.EG],this);},BlF:function(E){if(this.AOd===E)return;this.AOd=E;A.
pe([this,this.EG],this);},BlI:function(E){if(this.AOg===E)return;this.AOg=E;A.pe([
this,this.EG],this);},BlH:function(E){if(this.AOf===E)return;this.AOf=E;A.pe([this
,this.EG],this);},BlG:function(E){if(this.AOe===E)return;this.AOe=E;A.pe([this,this.
EG],this);},BlB:function(E){if(this.AuZ===E)return;this.AuZ=E;A.pe([this,this.EG
],this);},BlE:function(E){if(this.Au2===E)return;this.Au2=E;A.pe([this,this.EG],
this);},BlD:function(E){if(this.Au1===E)return;this.Au1=E;A.pe([this,this.EG],this
);},BlC:function(E){if(this.Au0===E)return;this.Au0=E;A.pe([this,this.EG],this);
},AFS:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WY,E))
return;this.WY=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.An6._Init.call(
this,aArg);this.__proto__=C.AU0;},_Mark:function(D){var B;C.An6._Mark.call(this,
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
null,_className:"WidgetSet::WidgetConfig"};C.ADh={LL:null,LK:null,Appearance:null
,M5:null,Aii:0,F_:100,Go:0,AM:50,BfE:true,H:function(E){var B;if(!!this.Appearance
){var Azk=[E[2]-E[0],E[3]-E[1]];var Ol=Azk;if(Ol[0]<this.Appearance.WY[0])Ol=[this.
Appearance.WY[0],Ol[1]];if(Ol[1]<this.Appearance.WY[1])Ol=[Ol[0],this.Appearance.
WY[1]];var Ha=A.abe(Ol,Azk);if(!!Ha[0]){var HS=((this.PK&0x4)===0x4);var HT=((this.
PK&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+Ha[0]);else if(!HS&&HT)E=[].concat(E[0]-
Ha[0],E.slice(1,4));else{E=[].concat(E[0]-((Ha[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ol[0]);}}if(!!Ha[1]){var HU=((this.PK&0x10)===0x10);var HR=((this.PK&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+Ha[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-Ha[1]);else{E=A.abP(E,E[1]-((Ha[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BdI=!!this.Appearance&&!!this.Appearance.AxE;var BdJ=!!this.Appearance&&!!this.
Appearance.AxF;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BdI&&!!!this.LK){this.
LK=A._NewObject(A.acg.NO,0);this.J(this.LK,0);}else if(!BdI&&!!this.LK){this.HN(
this.LK);this.LK=null;}if(BdJ&&!!!this.LL){this.LL=A._NewObject(A.acg.NO,0);this.
J(this.LL,0);}else if(!BdJ&&!!this.LL){this.HN(this.LL);this.LL=null;}if(!!this.
LK){this.LK.Aw(this.Appearance.AxE);this.LK.L(this.Appearance.AU7);this.LK.A9u(0x1B
);this.LK.ArX(54);if(this.Appearance.AGS<0){this.LK.Zl(true);this.LK.Cu(0);}else{
this.LK.Zl(false);this.LK.Cu(this.Appearance.AGS);}}if(!!this.LL){this.LL.Aw(this.
Appearance.AxF);this.LL.L(0xFFFFFFFF);this.LL.A9u(0x1E);this.LL.ArX(35);if(this.
Appearance.AGT<0){this.LL.Zl(true);this.LL.Cu(0);}else{this.LL.Zl(false);this.LL.
Cu(this.Appearance.AGT);}}var pos=((AE[2]-AE[0])*this.Aii)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LK&&!!this.LK.Al){var s=this.LK.Al.FrameSize;
var x2=AE[2]-AE[0];var Eo=pos;if(Eo>x2)Eo=x2;this.LK.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eo,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LK.A9K([x2-((s[0]
/3)|0),this.LK.Ane[1]]);this.LK.Z(true);}if(!!this.LL&&!!this.LL.Al){var s=this.
LL.Al.FrameSize;var x2=AE[2]-AE[0];var Eo=pos;if(Eo<0)Eo=0;this.LL.H([Eo,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LL.A9K([x2-((s[0]/3)|0),this.LL.Ane[1]]);this.LL.Z(true);}},AKw:function(G){var AtS=
this.Aii;var AK4=0;if(!!this.Appearance)AK4=this.Appearance.AUD;if(this.BfE&&(this.
F_!==this.Go)){this.Aii=-this.Go/(this.F_-this.Go);AtS=this.Aii;this.BfE=false;}
if(this.F_!==this.Go)AtS=(this.Ud()-this.Go)/(this.F_-this.Go);if(AtS===this.Aii
)return;this.M5.Ar(false);if(AK4<=0){this.Aii=AtS;this.Am();return;}var AKD=AtS-
this.Aii;if(AKD<0)AKD=-AKD;this.M5.Wy(14);this.M5.Cw=this.Aii;this.M5.B1=AtS;this.
M5.Fp((10+((AK4/2)|0))+((((AK4*AKD)|0)/2)|0));this.M5.Ar(true);},BzU:function(G){
},BzX:function(G){this.Aii=this.M5.A4;this.Am();},ApC:function(G){A.pe([this,this.
AKw],this);if(!!this.Appearance)this.H(this.M);this.Am();},EU:function(E){if(this.
F_===E)return;this.F_=E;A.pe([this,this.AKw],this);},F$:function(E){if(this.Go===
E)return;this.Go=E;A.pe([this,this.AKw],this);},Ud:function(){var E=this.AM;if(this.
Go>this.F_){if(E<this.F_)E=this.F_;if(E>this.Go)E=this.Go;}else{if(E<this.Go)E=this.
Go;if(E>this.F_)E=this.F_;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKw],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApC],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApC],E,0);A.pe([this,this.ApC],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ADh;this.H(Cc);this.M5.Wy(14);this.M5.HM(1);this.M5.Sx=[this,this.BzU];this.M5.
Ahi=[this,this.BzX];},_Done:function(){this.__proto__=A.Core.P;this.M5._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UE={Qx:null
,U$:null,Appearance:null,Q:null,Bo:null,Dm:null,CR:null,ADV:A.jV,ADU:A.jV,A26:0,
BAK:0,VH:false,H:function(E){var B;if(!!this.Appearance){var Azk=[E[2]-E[0],E[3]-
E[1]];var Ol=Azk;if(Ol[0]<this.Appearance.WY[0])Ol=[this.Appearance.WY[0],Ol[1]];
if(Ol[1]<this.Appearance.WY[1])Ol=[Ol[0],this.Appearance.WY[1]];var Ha=A.abe(Ol,
Azk);if(!!Ha[0]){var HS=((this.PK&0x4)===0x4);var HT=((this.PK&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+Ha[0]);else if(!HS&&HT)E=[].concat(E[0]-Ha[0],E.slice(1,4));else{
E=[].concat(E[0]-((Ha[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ol[0]);}}if(!!Ha[1]){
var HU=((this.PK&0x10)===0x10);var HR=((this.PK&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+Ha[1]);else if(!HU&&HR)E=A.abP(E,E[1]-Ha[1]);else{E=A.abP(E,E[
1]-((Ha[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BdH=!!this.Appearance&&(((((((
!!this.Appearance.Au0||!!this.Appearance.Au1)||!!this.Appearance.Au2)||!!this.Appearance.
AuZ)||!!this.Appearance.Au4)||!!this.Appearance.Au5)||!!this.Appearance.Au6)||!!
this.Appearance.Au3);var BdK=!!this.Appearance&&((!!this.ADU&&!!this.Appearance.
AvL)||(!!this.ADV&&!!this.Appearance.AvM));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af2;if(BdH&&!!!this.U$){this.U$=A._NewObject(A.acg.NO,0);this.J(this.U$,
0);}else if(!BdH&&!!this.U$){this.HN(this.U$);this.U$=null;}if(BdK&&!!!this.Qx){
this.Qx=A._NewObject(A.acg.Text,0);this.J(this.Qx,0);this.Qx.Blt(true);}else if(
!BdK&&!!this.Qx){this.HN(this.Qx);this.Qx=null;}if(!((Ae&0x10)===0x10))Af2=0x44;
else if(((this.CR.Down&&this.CR.YB)||this.Dm.Down)||this.Bo.Bw)Af2=0x41;else if(((
Ae&0x40)===0x40))Af2=0x46;else Af2=0x45;if(!this.VH)Af2=String.fromCharCode(Af2).
toLowerCase().charCodeAt(0)||0;this.BAK=Af2;if(!!this.U$){var bitmap;var Aap;var
EW=this.Appearance.AOc;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af2){case 0x44:{bitmap=
this.Appearance.Au5;Aap=this.Appearance.AOj;}break;case 0x41:{bitmap=this.Appearance.
Au3;Aap=this.Appearance.AOh;}break;case 0x46:{bitmap=this.Appearance.Au6;Aap=this.
Appearance.AOk;}break;case 0x45:{bitmap=this.Appearance.Au4;Aap=this.Appearance.
AOi;}break;case 0x64:{bitmap=this.Appearance.Au1;Aap=this.Appearance.AOf;}break;
case 0x61:{bitmap=this.Appearance.AuZ;Aap=this.Appearance.AOd;}break;case 0x66:{
bitmap=this.Appearance.Au2;Aap=this.Appearance.AOg;}break;default:{bitmap=this.Appearance.
Au0;Aap=this.Appearance.AOe;}}this.U$.Zl(Aap<0);this.U$.L(0xFFFFFFFF);if(Aap<0)Aap=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BX=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BX);else if(!HS&&HT)Az=[
].concat(Az[2]-BX,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BX/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BX);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BI=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BI);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BI
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BI/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BI);}}this.U$.Cu(Aap);this.U$.Aw(bitmap);this.U$.H(Az);this.U$.ArX(16
);}if(!!this.Qx){var Aih;var font;var A1_;switch(Af2){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvM;A1_=this.ADV;}break;default:{font=this.Appearance.
AvL;A1_=this.ADU;}}switch(Af2){case 0x44:Aih=this.Appearance.AQ_;break;case 0x41:
Aih=this.Appearance.AQ8;break;case 0x46:Aih=this.Appearance.AQ$;break;case 0x45:
Aih=this.Appearance.AQ9;break;case 0x64:Aih=this.Appearance.AQ6;break;case 0x61:
Aih=this.Appearance.AQ4;break;case 0x66:Aih=this.Appearance.AQ7;break;default:Aih=
this.Appearance.AQ5;}this.Qx.H([AE[0]+this.Appearance.AQ3,AE[1],AE[2],AE[3]]);this.
Qx.A5(this.Appearance.AQ2);this.Qx.S(font);this.Qx.R(A1_);this.Qx.L(Aih);this.Qx.
KQ(true);this.Qx.Bls(true);this.Qx.ArX(92);}this.ExtendClipping(0,0,0,0);{var Aul=
AE;this.CR.DM(Aul.slice(0,2));this.CR.Ks(Aul.slice(2,4));this.CR.DC([Aul[2],Aul[
1]]);this.CR.JS([Aul[0],Aul[3]]);}},ApC:function(G){var BdT=this.Dm.Filter;this.
Dm.Filter=149;if(!BdT&&!!this.Dm.Filter)this.Cr(0x4,0x0);if(!!BdT&&!this.Dm.Filter
)this.Cr(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},Kd:function(G){
var F;if(!!this.Q)this.ArC((F=this.Q,F[1].call(F[0])));},Qp:function(G){var F;this.
Am();this.ArC(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.
Q,0);}},BAg:function(G){var F;var ApN=0;if(!!this.Appearance)ApN=50;this.CR.Ar(true
);this.Am();if(((this.Dm.Bs-this.A26)|0)>=ApN){this.ArC(!this.VH);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}else{this.Bo.Ww(ApN-((this.Dm.
Bs-this.A26)|0));this.Bo.Ar(true);}},AiL:function(G){var F;this.CR.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArC(!this.VH);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VH));A.abo(this.Q,0);}}this.A26=this.Dm.Bs;},Bz0:function(G){
this.Am();},BzW:function(G){this.Am();},AAw:function(G){var F;var ApN=0;if(!!this.
Appearance)ApN=50;this.Dm.Bw=true;if(!this.CR.YB)return;if(this.CR.NF)return;if(
this.CR.Jr>=ApN){this.ArC(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH
));A.abo(this.Q,0);}}else{this.Bo.Ww(ApN-this.CR.Jr);this.Bo.Ar(true);}},AAv:function(
G){var F;this.Dm.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArC(!this.VH);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}},At:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kd],E,0);if(!!E)this.Kd(this);},ArC:function(E){if(this.VH===
E)return;this.VH=E;this.Am();},A9G:function(E){if((E===this.ADU)&&(E===this.ADV)
)return;this.ADU=E;this.ADV=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApC],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApC],E,0);A.pe([this,this.ApC],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BK._Init.call(this.Dm={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UE;this.H(BD);this.Bo.PQ(0);this.Bo.Ww(50);this.Dm.Filter=149;this.CR.
JS(E6);this.CR.Ks(Hp);this.CR.DC(IS);this.CR.DM(Ir);this.CR.BmM(16);this.CR.AFh(
100);this.J(this.CR,0);this.Bo.Mz=[this,this.Qp];this.Dm.Lm=[this,this.BAg];this.
Dm.BL=[this,this.AiL];this.CR.AEz=[this,this.Bz0];this.CR.AvZ=[this,this.BzW];this.
CR.Lm=[this,this.AAw];this.CR.BL=[this,this.AAv];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dm._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADi.__proto__=C.An6;C.AU0.__proto__=C.An6;C.ADh.__proto__=A.
Core.P;C.UE.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad6[0]._this)&&(B._cycle!=D))B._Done(C.Ad6[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */