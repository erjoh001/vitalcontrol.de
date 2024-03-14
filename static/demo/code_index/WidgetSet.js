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
var Cd=[0,0,200,50];var BF=[0,0,150,50];var E4=[0,50];var Hm=[150,50];var IQ=[150
,0];var Ip=[0,0];
C.Ad7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADj={AxG:null,AxF:null,AUN:500,AGW:-1,AVf:0xFFFFFFFF,AGV:-1,W0:A.wf,Bm8:
function(E){if(this.AUN===E)return;this.AUN=E;A.pe([this,this.EG],this);},A_k:function(
E){if(this.AGW===E)return;this.AGW=E;A.pe([this,this.EG],this);},A_j:function(E){
if(this.AxG===E)return;this.AxG=E;A.pe([this,this.EG],this);},A_i:function(E){if(
this.AVf===E)return;this.AVf=E;A.pe([this,this.EG],this);},A_h:function(E){if(this.
AGV===E)return;this.AGV=E;A.pe([this,this.EG],this);},A_g:function(E){if(this.AxF===
E)return;this.AxF=E;A.pe([this,this.EG],this);},AFV:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))return;this.W0=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aoa._Init.call(this,aArg);this.__proto__=C.ADj;
},_Mark:function(D){var B;C.Aoa._Mark.call(this,D);if((B=this.AxG)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxF)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU_={AvP:null,AvO:null,Au6:null,Au9:null
,Au8:null,Au7:null,Au2:null,Au5:null,Au4:null,Au3:null,ARe:0xFF000000,ARh:0xFF000000
,ARg:0xFF000000,ARf:0xFF000000,ARa:0xFF000000,ARd:0xFF000000,ARc:0xFF000000,ARb:
0xFF000000,AQ$:0,A6U:0xFFFFFFFF,A6X:0xFFFFFFFF,A6W:0xFFFFFFFF,A6V:0xFFFFFFFF,A6Q:
0xFFFFFFFF,A6T:0xFFFFFFFF,A6S:0xFFFFFFFF,A6R:0xFFFFFFFF,A6P:0,AQ_:0x12,A6O:0x12,
AOk:0x3F,AOp:-1,AOs:-1,AOr:-1,AOq:-1,AOl:-1,AOo:-1,AOn:-1,AOm:-1,W0:A.wf,Bmx:function(
E){if(this.ARe===E)return;this.ARe=E;A.pe([this,this.EG],this);},BmA:function(E){
if(this.ARh===E)return;this.ARh=E;A.pe([this,this.EG],this);},Bmz:function(E){if(
this.ARg===E)return;this.ARg=E;A.pe([this,this.EG],this);},Bmy:function(E){if(this.
ARf===E)return;this.ARf=E;A.pe([this,this.EG],this);},Bmt:function(E){if(this.ARa===
E)return;this.ARa=E;A.pe([this,this.EG],this);},Bmw:function(E){if(this.ARd===E)
return;this.ARd=E;A.pe([this,this.EG],this);},Bmv:function(E){if(this.ARc===E)return;
this.ARc=E;A.pe([this,this.EG],this);},Bmu:function(E){if(this.ARb===E)return;this.
ARb=E;A.pe([this,this.EG],this);},Bms:function(E){if(this.AQ$===E)return;this.AQ$=
E;A.pe([this,this.EG],this);},Bmg:function(E){if(this.A6U===E)return;this.A6U=E;
A.pe([this,this.EG],this);},Bmj:function(E){if(this.A6X===E)return;this.A6X=E;A.
pe([this,this.EG],this);},Bmi:function(E){if(this.A6W===E)return;this.A6W=E;A.pe([
this,this.EG],this);},Bmh:function(E){if(this.A6V===E)return;this.A6V=E;A.pe([this
,this.EG],this);},Bmc:function(E){if(this.A6Q===E)return;this.A6Q=E;A.pe([this,this.
EG],this);},Bmf:function(E){if(this.A6T===E)return;this.A6T=E;A.pe([this,this.EG
],this);},Bme:function(E){if(this.A6S===E)return;this.A6S=E;A.pe([this,this.EG],
this);},Bmd:function(E){if(this.A6R===E)return;this.A6R=E;A.pe([this,this.EG],this
);},Bmb:function(E){if(this.A6P===E)return;this.A6P=E;A.pe([this,this.EG],this);
},Bmq:function(E){if(this.AQ_===E)return;this.AQ_=E;A.pe([this,this.EG],this);},
A9R:function(E){if(this.AvP===E)return;this.AvP=E;A.pe([this,this.EG],this);},A9Q:
function(E){if(this.AvO===E)return;this.AvO=E;A.pe([this,this.EG],this);},Bl$:function(
E){if(this.A6O===E)return;this.A6O=E;A.pe([this,this.EG],this);},BlL:function(E){
if(this.AOk===E)return;this.AOk=E;A.pe([this,this.EG],this);},BlY:function(E){if(
this.AOp===E)return;this.AOp=E;A.pe([this,this.EG],this);},Bl1:function(E){if(this.
AOs===E)return;this.AOs=E;A.pe([this,this.EG],this);},Bl0:function(E){if(this.AOr===
E)return;this.AOr=E;A.pe([this,this.EG],this);},BlZ:function(E){if(this.AOq===E)
return;this.AOq=E;A.pe([this,this.EG],this);},BlU:function(E){if(this.Au6===E)return;
this.Au6=E;A.pe([this,this.EG],this);},BlX:function(E){if(this.Au9===E)return;this.
Au9=E;A.pe([this,this.EG],this);},BlW:function(E){if(this.Au8===E)return;this.Au8=
E;A.pe([this,this.EG],this);},BlV:function(E){if(this.Au7===E)return;this.Au7=E;
A.pe([this,this.EG],this);},BlQ:function(E){if(this.AOl===E)return;this.AOl=E;A.
pe([this,this.EG],this);},BlT:function(E){if(this.AOo===E)return;this.AOo=E;A.pe([
this,this.EG],this);},BlS:function(E){if(this.AOn===E)return;this.AOn=E;A.pe([this
,this.EG],this);},BlR:function(E){if(this.AOm===E)return;this.AOm=E;A.pe([this,this.
EG],this);},BlM:function(E){if(this.Au2===E)return;this.Au2=E;A.pe([this,this.EG
],this);},BlP:function(E){if(this.Au5===E)return;this.Au5=E;A.pe([this,this.EG],
this);},BlO:function(E){if(this.Au4===E)return;this.Au4=E;A.pe([this,this.EG],this
);},BlN:function(E){if(this.Au3===E)return;this.Au3=E;A.pe([this,this.EG],this);
},AFV:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))
return;this.W0=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aoa._Init.call(
this,aArg);this.__proto__=C.AU_;},_Mark:function(D){var B;C.Aoa._Mark.call(this,
D);if((B=this.AvP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au8)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au5)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au3)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoa={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoa;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADi={LM:null,LL:null,Appearance:null
,M5:null,Aii:0,FZ:100,Gl:0,AM:50,BfO:true,H:function(E){var B;if(!!this.Appearance
){var Azk=[E[2]-E[0],E[3]-E[1]];var Oj=Azk;if(Oj[0]<this.Appearance.W0[0])Oj=[this.
Appearance.W0[0],Oj[1]];if(Oj[1]<this.Appearance.W0[1])Oj=[Oj[0],this.Appearance.
W0[1]];var G8=A.abe(Oj,Azk);if(!!G8[0]){var HS=((this.PH&0x4)===0x4);var HT=((this.
PH&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+G8[0]);else if(!HS&&HT)E=[].concat(E[0]-
G8[0],E.slice(1,4));else{E=[].concat(E[0]-((G8[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Oj[0]);}}if(!!G8[1]){var HU=((this.PH&0x10)===0x10);var HR=((this.PH&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+G8[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-G8[1]);else{E=A.abP(E,E[1]-((G8[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oj[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var BdS=!!this.Appearance&&!!this.Appearance.AxF;var BdT=!!this.Appearance&&!!this.
Appearance.AxG;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(BdS&&!!!this.LL){this.
LL=A._NewObject(A.acg.NO,0);this.J(this.LL,0);}else if(!BdS&&!!this.LL){this.HN(
this.LL);this.LL=null;}if(BdT&&!!!this.LM){this.LM=A._NewObject(A.acg.NO,0);this.
J(this.LM,0);}else if(!BdT&&!!this.LM){this.HN(this.LM);this.LM=null;}if(!!this.
LL){this.LL.Aw(this.Appearance.AxF);this.LL.L(this.Appearance.AVf);this.LL.A9D(0x1B
);this.LL.Ar3(54);if(this.Appearance.AGV<0){this.LL.Zr(true);this.LL.Cv(0);}else{
this.LL.Zr(false);this.LL.Cv(this.Appearance.AGV);}}if(!!this.LM){this.LM.Aw(this.
Appearance.AxG);this.LM.L(0xFFFFFFFF);this.LM.A9D(0x1E);this.LM.Ar3(35);if(this.
Appearance.AGW<0){this.LM.Zr(true);this.LM.Cv(0);}else{this.LM.Zr(false);this.LM.
Cv(this.Appearance.AGW);}}var pos=((AE[2]-AE[0])*this.Aii)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LL&&!!this.LL.Al){var s=this.LL.Al.FrameSize;
var x2=AE[2]-AE[0];var En=pos;if(En>x2)En=x2;this.LL.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),En,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LL.A9T([x2-((s[0]
/3)|0),this.LL.Anh[1]]);this.LL.Z(true);}if(!!this.LM&&!!this.LM.Al){var s=this.
LM.Al.FrameSize;var x2=AE[2]-AE[0];var En=pos;if(En<0)En=0;this.LM.H([En,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LM.A9T([x2-((s[0]/3)|0),this.LM.Anh[1]]);this.LM.Z(true);}},AKD:function(G){var AtV=
this.Aii;var AK$=0;if(!!this.Appearance)AK$=this.Appearance.AUN;if(this.BfO&&(this.
FZ!==this.Gl)){this.Aii=-this.Gl/(this.FZ-this.Gl);AtV=this.Aii;this.BfO=false;}
if(this.FZ!==this.Gl)AtV=(this.Ue()-this.Gl)/(this.FZ-this.Gl);if(AtV===this.Aii
)return;this.M5.Ar(false);if(AK$<=0){this.Aii=AtV;this.An();return;}var AKK=AtV-
this.Aii;if(AKK<0)AKK=-AKK;this.M5.WC(14);this.M5.Cw=this.Aii;this.M5.B2=AtV;this.
M5.Fl((10+((AK$/2)|0))+((((AK$*AKK)|0)/2)|0));this.M5.Ar(true);},Bz4:function(G){
},Bz7:function(G){this.Aii=this.M5.A4;this.An();},ApH:function(G){A.pe([this,this.
AKD],this);if(!!this.Appearance)this.H(this.M);this.An();},EV:function(E){if(this.
FZ===E)return;this.FZ=E;A.pe([this,this.AKD],this);},F0:function(E){if(this.Gl===
E)return;this.Gl=E;A.pe([this,this.AKD],this);},Ue:function(){var E=this.AM;if(this.
Gl>this.FZ){if(E<this.FZ)E=this.FZ;if(E>this.Gl)E=this.Gl;}else{if(E<this.Gl)E=this.
Gl;if(E>this.FZ)E=this.FZ;}return E;},By:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKD],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApH],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApH],E,0);A.pe([this,this.ApH],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ADi;this.H(Cd);this.M5.WC(14);this.M5.HM(1);this.M5.Sw=[this,this.Bz4];this.M5.
Ahd=[this,this.Bz7];},_Done:function(){this.__proto__=A.Core.P;this.M5._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UF={Qu:null
,U$:null,Appearance:null,Q:null,Bo:null,Dl:null,CR:null,ADW:A.jV,ADV:A.jV,A3c:0,
BAU:0,VH:false,H:function(E){var B;if(!!this.Appearance){var Azk=[E[2]-E[0],E[3]-
E[1]];var Oj=Azk;if(Oj[0]<this.Appearance.W0[0])Oj=[this.Appearance.W0[0],Oj[1]];
if(Oj[1]<this.Appearance.W0[1])Oj=[Oj[0],this.Appearance.W0[1]];var G8=A.abe(Oj,
Azk);if(!!G8[0]){var HS=((this.PH&0x4)===0x4);var HT=((this.PH&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+G8[0]);else if(!HS&&HT)E=[].concat(E[0]-G8[0],E.slice(1,4));else{
E=[].concat(E[0]-((G8[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Oj[0]);}}if(!!G8[1]){
var HU=((this.PH&0x10)===0x10);var HR=((this.PH&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+G8[1]);else if(!HU&&HR)E=A.abP(E,E[1]-G8[1]);else{E=A.abP(E,E[
1]-((G8[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oj[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var BdR=!!this.Appearance&&(((((((
!!this.Appearance.Au3||!!this.Appearance.Au4)||!!this.Appearance.Au5)||!!this.Appearance.
Au2)||!!this.Appearance.Au7)||!!this.Appearance.Au8)||!!this.Appearance.Au9)||!!
this.Appearance.Au6);var BdU=!!this.Appearance&&((!!this.ADV&&!!this.Appearance.
AvO)||(!!this.ADW&&!!this.Appearance.AvP));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af0;if(BdR&&!!!this.U$){this.U$=A._NewObject(A.acg.NO,0);this.J(this.U$,
0);}else if(!BdR&&!!this.U$){this.HN(this.U$);this.U$=null;}if(BdU&&!!!this.Qu){
this.Qu=A._NewObject(A.acg.Text,0);this.J(this.Qu,0);this.Qu.BlE(true);}else if(
!BdU&&!!this.Qu){this.HN(this.Qu);this.Qu=null;}if(!((Ae&0x10)===0x10))Af0=0x44;
else if(((this.CR.Down&&this.CR.YF)||this.Dl.Down)||this.Bo.Bw)Af0=0x41;else if(((
Ae&0x40)===0x40))Af0=0x46;else Af0=0x45;if(!this.VH)Af0=String.fromCharCode(Af0).
toLowerCase().charCodeAt(0)||0;this.BAU=Af0;if(!!this.U$){var bitmap;var Aaw;var
EW=this.Appearance.AOk;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af0){case 0x44:{bitmap=
this.Appearance.Au8;Aaw=this.Appearance.AOr;}break;case 0x41:{bitmap=this.Appearance.
Au6;Aaw=this.Appearance.AOp;}break;case 0x46:{bitmap=this.Appearance.Au9;Aaw=this.
Appearance.AOs;}break;case 0x45:{bitmap=this.Appearance.Au7;Aaw=this.Appearance.
AOq;}break;case 0x64:{bitmap=this.Appearance.Au4;Aaw=this.Appearance.AOn;}break;
case 0x61:{bitmap=this.Appearance.Au2;Aaw=this.Appearance.AOl;}break;case 0x66:{
bitmap=this.Appearance.Au5;Aaw=this.Appearance.AOo;}break;default:{bitmap=this.Appearance.
Au3;Aaw=this.Appearance.AOm;}}this.U$.Zr(Aaw<0);this.U$.L(0xFFFFFFFF);if(Aaw<0)Aaw=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BY);else if(!HS&&HT)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BK=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BK);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BK
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BK/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BK);}}this.U$.Cv(Aaw);this.U$.Aw(bitmap);this.U$.H(Az);this.U$.Ar3(16
);}if(!!this.Qu){var Aig;var font;var A2h;switch(Af0){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvP;A2h=this.ADW;}break;default:{font=this.Appearance.
AvO;A2h=this.ADV;}}switch(Af0){case 0x44:Aig=this.Appearance.ARg;break;case 0x41:
Aig=this.Appearance.ARe;break;case 0x46:Aig=this.Appearance.ARh;break;case 0x45:
Aig=this.Appearance.ARf;break;case 0x64:Aig=this.Appearance.ARc;break;case 0x61:
Aig=this.Appearance.ARa;break;case 0x66:Aig=this.Appearance.ARd;break;default:Aig=
this.Appearance.ARb;}this.Qu.H([AE[0]+this.Appearance.AQ$,AE[1],AE[2],AE[3]]);this.
Qu.A6(this.Appearance.AQ_);this.Qu.S(font);this.Qu.R(A2h);this.Qu.L(Aig);this.Qu.
KS(true);this.Qu.BlD(true);this.Qu.Ar3(92);}this.ExtendClipping(0,0,0,0);{var Auo=
AE;this.CR.DL(Auo.slice(0,2));this.CR.Kr(Auo.slice(2,4));this.CR.DC([Auo[2],Auo[
1]]);this.CR.JQ([Auo[0],Auo[3]]);}},ApH:function(G){var Bd3=this.Dl.Filter;this.
Dl.Filter=149;if(!Bd3&&!!this.Dl.Filter)this.Cy(0x4,0x0);if(!!Bd3&&!this.Dl.Filter
)this.Cy(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.An();},Kc:function(G){
var F;if(!!this.Q)this.ArI((F=this.Q,F[1].call(F[0])));},Qm:function(G){var F;this.
An();this.ArI(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.
Q,0);}},BAq:function(G){var F;var ApT=0;if(!!this.Appearance)ApT=50;this.CR.Ar(true
);this.An();if(((this.Dl.Bs-this.A3c)|0)>=ApT){this.ArI(!this.VH);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}else{this.Bo.Wx(ApT-((this.Dl.
Bs-this.A3c)|0));this.Bo.Ar(true);}},AiN:function(G){var F;this.CR.Ar(false);this.
An();if(this.Bo.Bw){this.Bo.Ar(false);this.ArI(!this.VH);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VH));A.abo(this.Q,0);}}this.A3c=this.Dl.Bs;},Bz_:function(G){
this.An();},Bz6:function(G){this.An();},AAx:function(G){var F;var ApT=0;if(!!this.
Appearance)ApT=50;this.Dl.Bw=true;if(!this.CR.YF)return;if(this.CR.NF)return;if(
this.CR.Jp>=ApT){this.ArI(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH
));A.abo(this.Q,0);}}else{this.Bo.Wx(ApT-this.CR.Jp);this.Bo.Ar(true);}},AAw:function(
G){var F;this.Dl.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArI(!this.VH);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}},As:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kc],E,0);if(!!E)this.Kc(this);},ArI:function(E){if(this.VH===
E)return;this.VH=E;this.An();},A9P:function(E){if((E===this.ADV)&&(E===this.ADW)
)return;this.ADV=E;this.ADW=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApH],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApH],E,0);A.pe([this,this.ApH],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BM._Init.call(this.Dl={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UF;this.H(BF);this.Bo.PO(0);this.Bo.Wx(50);this.Dl.Filter=149;this.CR.
JQ(E4);this.CR.Kr(Hm);this.CR.DC(IQ);this.CR.DL(Ip);this.CR.BmX(16);this.CR.AFk(
100);this.J(this.CR,0);this.Bo.Mx=[this,this.Qm];this.Dl.Ln=[this,this.BAq];this.
Dl.BN=[this,this.AiN];this.CR.AEB=[this,this.Bz_];this.CR.Av1=[this,this.Bz6];this.
CR.Ln=[this,this.AAx];this.CR.BN=[this,this.AAw];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dl._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dl._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADj.__proto__=C.Aoa;C.AU_.__proto__=C.Aoa;C.ADi.__proto__=A.
Core.P;C.UF.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad7[0]._this)&&(B._cycle!=D))B._Done(C.Ad7[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */