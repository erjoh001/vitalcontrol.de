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
var Cc=[0,0,200,50];var BF=[0,0,150,50];var EZ=[0,50];var Hj=[150,50];var I$=[150
,0];var Io=[0,0];
C.AdY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADd={AxA:null,Axz:null,AUE:500,AGS:-1,AU8:0xFFFFFFFF,AGR:-1,WS:A.wf,Bng:
function(E){if(this.AUE===E)return;this.AUE=E;A.pe([this,this.EC],this);},A_z:function(
E){if(this.AGS===E)return;this.AGS=E;A.pe([this,this.EC],this);},A_y:function(E){
if(this.AxA===E)return;this.AxA=E;A.pe([this,this.EC],this);},A_x:function(E){if(
this.AU8===E)return;this.AU8=E;A.pe([this,this.EC],this);},A_w:function(E){if(this.
AGR===E)return;this.AGR=E;A.pe([this,this.EC],this);},A_v:function(E){if(this.Axz===
E)return;this.Axz=E;A.pe([this,this.EC],this);},AFR:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WS,E))return;this.WS=E;A.pe([this,this.EC
],this);},_Init:function(aArg){C.An7._Init.call(this,aArg);this.__proto__=C.ADd;
},_Mark:function(D){var B;C.An7._Mark.call(this,D);if((B=this.AxA)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Axz)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AU1={AvL:null,AvK:null,Au2:null,Au5:null
,Au4:null,Au3:null,AuY:null,Au1:null,Au0:null,AuZ:null,AQ5:0xFF000000,AQ8:0xFF000000
,AQ7:0xFF000000,AQ6:0xFF000000,AQ1:0xFF000000,AQ4:0xFF000000,AQ3:0xFF000000,AQ2:
0xFF000000,AQ0:0,A66:0xFFFFFFFF,A69:0xFFFFFFFF,A68:0xFFFFFFFF,A67:0xFFFFFFFF,A62:
0xFFFFFFFF,A65:0xFFFFFFFF,A64:0xFFFFFFFF,A63:0xFFFFFFFF,A61:0,AQZ:0x12,A60:0x12,
AN_:0x3F,AOd:-1,AOg:-1,AOf:-1,AOe:-1,AN$:-1,AOc:-1,AOb:-1,AOa:-1,WS:A.wf,BmH:function(
E){if(this.AQ5===E)return;this.AQ5=E;A.pe([this,this.EC],this);},BmK:function(E){
if(this.AQ8===E)return;this.AQ8=E;A.pe([this,this.EC],this);},BmJ:function(E){if(
this.AQ7===E)return;this.AQ7=E;A.pe([this,this.EC],this);},BmI:function(E){if(this.
AQ6===E)return;this.AQ6=E;A.pe([this,this.EC],this);},BmD:function(E){if(this.AQ1===
E)return;this.AQ1=E;A.pe([this,this.EC],this);},BmG:function(E){if(this.AQ4===E)
return;this.AQ4=E;A.pe([this,this.EC],this);},BmF:function(E){if(this.AQ3===E)return;
this.AQ3=E;A.pe([this,this.EC],this);},BmE:function(E){if(this.AQ2===E)return;this.
AQ2=E;A.pe([this,this.EC],this);},BmC:function(E){if(this.AQ0===E)return;this.AQ0=
E;A.pe([this,this.EC],this);},Bmr:function(E){if(this.A66===E)return;this.A66=E;
A.pe([this,this.EC],this);},Bmu:function(E){if(this.A69===E)return;this.A69=E;A.
pe([this,this.EC],this);},Bmt:function(E){if(this.A68===E)return;this.A68=E;A.pe([
this,this.EC],this);},Bms:function(E){if(this.A67===E)return;this.A67=E;A.pe([this
,this.EC],this);},Bmn:function(E){if(this.A62===E)return;this.A62=E;A.pe([this,this.
EC],this);},Bmq:function(E){if(this.A65===E)return;this.A65=E;A.pe([this,this.EC
],this);},Bmp:function(E){if(this.A64===E)return;this.A64=E;A.pe([this,this.EC],
this);},Bmo:function(E){if(this.A63===E)return;this.A63=E;A.pe([this,this.EC],this
);},Bmm:function(E){if(this.A61===E)return;this.A61=E;A.pe([this,this.EC],this);
},BmA:function(E){if(this.AQZ===E)return;this.AQZ=E;A.pe([this,this.EC],this);},
A96:function(E){if(this.AvL===E)return;this.AvL=E;A.pe([this,this.EC],this);},A95:
function(E){if(this.AvK===E)return;this.AvK=E;A.pe([this,this.EC],this);},Bmk:function(
E){if(this.A60===E)return;this.A60=E;A.pe([this,this.EC],this);},BlW:function(E){
if(this.AN_===E)return;this.AN_=E;A.pe([this,this.EC],this);},Bl9:function(E){if(
this.AOd===E)return;this.AOd=E;A.pe([this,this.EC],this);},Bma:function(E){if(this.
AOg===E)return;this.AOg=E;A.pe([this,this.EC],this);},Bl$:function(E){if(this.AOf===
E)return;this.AOf=E;A.pe([this,this.EC],this);},Bl_:function(E){if(this.AOe===E)
return;this.AOe=E;A.pe([this,this.EC],this);},Bl5:function(E){if(this.Au2===E)return;
this.Au2=E;A.pe([this,this.EC],this);},Bl8:function(E){if(this.Au5===E)return;this.
Au5=E;A.pe([this,this.EC],this);},Bl7:function(E){if(this.Au4===E)return;this.Au4=
E;A.pe([this,this.EC],this);},Bl6:function(E){if(this.Au3===E)return;this.Au3=E;
A.pe([this,this.EC],this);},Bl1:function(E){if(this.AN$===E)return;this.AN$=E;A.
pe([this,this.EC],this);},Bl4:function(E){if(this.AOc===E)return;this.AOc=E;A.pe([
this,this.EC],this);},Bl3:function(E){if(this.AOb===E)return;this.AOb=E;A.pe([this
,this.EC],this);},Bl2:function(E){if(this.AOa===E)return;this.AOa=E;A.pe([this,this.
EC],this);},BlX:function(E){if(this.AuY===E)return;this.AuY=E;A.pe([this,this.EC
],this);},Bl0:function(E){if(this.Au1===E)return;this.Au1=E;A.pe([this,this.EC],
this);},BlZ:function(E){if(this.Au0===E)return;this.Au0=E;A.pe([this,this.EC],this
);},BlY:function(E){if(this.AuZ===E)return;this.AuZ=E;A.pe([this,this.EC],this);
},AFR:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.WS,E))
return;this.WS=E;A.pe([this,this.EC],this);},_Init:function(aArg){C.An7._Init.call(
this,aArg);this.__proto__=C.AU1;},_Mark:function(D){var B;C.An7._Mark.call(this,
D);if((B=this.AvL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvK)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au4)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AuY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au1)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuZ)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.An7={
EC:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.An7;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADc={LL:null,LK:null,Appearance:null
,M5:null,Aic:0,FW:100,Gi:0,AM:50,Bf0:true,H:function(E){var B;if(!!this.Appearance
){var Azf=[E[2]-E[0],E[3]-E[1]];var Ol=Azf;if(Ol[0]<this.Appearance.WS[0])Ol=[this.
Appearance.WS[0],Ol[1]];if(Ol[1]<this.Appearance.WS[1])Ol=[Ol[0],this.Appearance.
WS[1]];var G6=A.abe(Ol,Azf);if(!!G6[0]){var HQ=((this.PH&0x4)===0x4);var HR=((this.
PH&0x8)===0x8);if(HQ&&!HR)E=A.abN(E,E[2]+G6[0]);else if(!HQ&&HR)E=[].concat(E[0]-
G6[0],E.slice(1,4));else{E=[].concat(E[0]-((G6[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ol[0]);}}if(!!G6[1]){var HS=((this.PH&0x10)===0x10);var HP=((this.PH&0x20)===
0x20);if(HS&&!HP)E=[].concat(E.slice(0,3),E[3]+G6[1]);else if(!HS&&HP)E=A.abP(E,
E[1]-G6[1]);else{E=A.abP(E,E[1]-((G6[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[
1]);}}}A.Core.O.H.call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);
var Bd6=!!this.Appearance&&!!this.Appearance.Axz;var Bd7=!!this.Appearance&&!!this.
Appearance.AxA;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Bd6&&!!!this.LK){this.
LK=A._NewObject(A.acg.NL,0);this.J(this.LK,0);}else if(!Bd6&&!!this.LK){this.HL(
this.LK);this.LK=null;}if(Bd7&&!!!this.LL){this.LL=A._NewObject(A.acg.NL,0);this.
J(this.LL,0);}else if(!Bd7&&!!this.LL){this.HL(this.LL);this.LL=null;}if(!!this.
LK){this.LK.Aw(this.Appearance.Axz);this.LK.L(this.Appearance.AU8);this.LK.A9S(0x1B
);this.LK.ArP(54);if(this.Appearance.AGR<0){this.LK.Zh(true);this.LK.Cu(0);}else{
this.LK.Zh(false);this.LK.Cu(this.Appearance.AGR);}}if(!!this.LL){this.LL.Aw(this.
Appearance.AxA);this.LL.L(0xFFFFFFFF);this.LL.A9S(0x1E);this.LL.ArP(35);if(this.
Appearance.AGS<0){this.LL.Zh(true);this.LL.Cu(0);}else{this.LL.Zh(false);this.LL.
Cu(this.Appearance.AGS);}}var pos=((AE[2]-AE[0])*this.Aic)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LK&&!!this.LK.Al){var s=this.LK.Al.FrameSize;
var x2=AE[2]-AE[0];var El=pos;if(El>x2)El=x2;this.LK.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),El,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LK.A98([x2-((s[0]
/3)|0),this.LK.Anc[1]]);this.LK.Z(true);}if(!!this.LL&&!!this.LL.Al){var s=this.
LL.Al.FrameSize;var x2=AE[2]-AE[0];var El=pos;if(El<0)El=0;this.LL.H([El,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LL.A98([x2-((s[0]/3)|0),this.LL.Anc[1]]);this.LL.Z(true);}},AKo:function(G){var AtO=
this.Aic;var AKV=0;if(!!this.Appearance)AKV=this.Appearance.AUE;if(this.Bf0&&(this.
FW!==this.Gi)){this.Aic=-this.Gi/(this.FW-this.Gi);AtO=this.Aic;this.Bf0=false;}
if(this.FW!==this.Gi)AtO=(this.Ud()-this.Gi)/(this.FW-this.Gi);if(AtO===this.Aic
)return;this.M5.Ar(false);if(AKV<=0){this.Aic=AtO;this.An();return;}var AKv=AtO-
this.Aic;if(AKv<0)AKv=-AKv;this.M5.Wt(14);this.M5.Cw=this.Aic;this.M5.B3=AtO;this.
M5.Fj((10+((AKV/2)|0))+((((AKV*AKv)|0)/2)|0));this.M5.Ar(true);},Bz3:function(G){
},Bz6:function(G){this.Aic=this.M5.A5;this.An();},Apy:function(G){A.pe([this,this.
AKo],this);if(!!this.Appearance)this.H(this.M);this.An();},E5:function(E){if(this.
FW===E)return;this.FW=E;A.pe([this,this.AKo],this);},Gq:function(E){if(this.Gi===
E)return;this.Gi=E;A.pe([this,this.AKo],this);},Ud:function(){var E=this.AM;if(this.
Gi>this.FW){if(E<this.FW)E=this.FW;if(E>this.Gi)E=this.Gi;}else{if(E<this.Gi)E=this.
Gi;if(E>this.FW)E=this.FW;}return E;},BC:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKo],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Apy],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Apy],E,0);A.pe([this,this.Apy],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acl.M5._Init.call(this.M5={I:this},0);this.__proto__=
C.ADc;this.H(Cc);this.M5.Wt(14);this.M5.HK(1);this.M5.Su=[this,this.Bz3];this.M5.
Ag_=[this,this.Bz6];},_Done:function(){this.__proto__=A.Core.O;this.M5._Done();A.
Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.M5.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.LL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UD={Qs:null
,U5:null,Appearance:null,Q:null,Bo:null,Dk:null,CR:null,ADQ:A.jV,ADP:A.jV,A3b:0,
BAT:0,Vz:false,H:function(E){var B;if(!!this.Appearance){var Azf=[E[2]-E[0],E[3]-
E[1]];var Ol=Azf;if(Ol[0]<this.Appearance.WS[0])Ol=[this.Appearance.WS[0],Ol[1]];
if(Ol[1]<this.Appearance.WS[1])Ol=[Ol[0],this.Appearance.WS[1]];var G6=A.abe(Ol,
Azf);if(!!G6[0]){var HQ=((this.PH&0x4)===0x4);var HR=((this.PH&0x8)===0x8);if(HQ&&
!HR)E=A.abN(E,E[2]+G6[0]);else if(!HQ&&HR)E=[].concat(E[0]-G6[0],E.slice(1,4));else{
E=[].concat(E[0]-((G6[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ol[0]);}}if(!!G6[1]){
var HS=((this.PH&0x10)===0x10);var HP=((this.PH&0x20)===0x20);if(HS&&!HP)E=[].concat(
E.slice(0,3),E[3]+G6[1]);else if(!HS&&HP)E=A.abP(E,E[1]-G6[1]);else{E=A.abP(E,E[
1]-((G6[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[1]);}}}A.Core.O.H.call(this,E
);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Bd5=!!this.Appearance&&(((((((
!!this.Appearance.AuZ||!!this.Appearance.Au0)||!!this.Appearance.Au1)||!!this.Appearance.
AuY)||!!this.Appearance.Au3)||!!this.Appearance.Au4)||!!this.Appearance.Au5)||!!
this.Appearance.Au2);var Bd8=!!this.Appearance&&((!!this.ADP&&!!this.Appearance.
AvK)||(!!this.ADQ&&!!this.Appearance.AvL));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var AfT;if(Bd5&&!!!this.U5){this.U5=A._NewObject(A.acg.NL,0);this.J(this.U5,
0);}else if(!Bd5&&!!this.U5){this.HL(this.U5);this.U5=null;}if(Bd8&&!!!this.Qs){
this.Qs=A._NewObject(A.acg.Text,0);this.J(this.Qs,0);this.Qs.BlP(true);}else if(
!Bd8&&!!this.Qs){this.HL(this.Qs);this.Qs=null;}if(!((Ae&0x10)===0x10))AfT=0x44;
else if(((this.CR.Down&&this.CR.Yy)||this.Dk.Down)||this.Bo.By)AfT=0x41;else if(((
Ae&0x40)===0x40))AfT=0x46;else AfT=0x45;if(!this.Vz)AfT=String.fromCharCode(AfT).
toLowerCase().charCodeAt(0)||0;this.BAT=AfT;if(!!this.U5){var bitmap;var Aam;var
ER=this.Appearance.AN_;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(AfT){case 0x44:{bitmap=
this.Appearance.Au4;Aam=this.Appearance.AOf;}break;case 0x41:{bitmap=this.Appearance.
Au2;Aam=this.Appearance.AOd;}break;case 0x46:{bitmap=this.Appearance.Au5;Aam=this.
Appearance.AOg;}break;case 0x45:{bitmap=this.Appearance.Au3;Aam=this.Appearance.
AOe;}break;case 0x64:{bitmap=this.Appearance.Au0;Aam=this.Appearance.AOb;}break;
case 0x61:{bitmap=this.Appearance.AuY;Aam=this.Appearance.AN$;}break;case 0x66:{
bitmap=this.Appearance.Au1;Aam=this.Appearance.AOc;}break;default:{bitmap=this.Appearance.
AuZ;Aam=this.Appearance.AOa;}}this.U5.Zh(Aam<0);this.U5.L(0xFFFFFFFF);if(Aam<0)Aam=
0;if(!!bitmap&&!((ER&0x1)===0x1)){var HQ=((ER&0x4)===0x4);var HR=((ER&0x8)===0x8
);var BX=bitmap.FrameSize[0];if(HQ&&!HR)Az=A.abN(Az,Az[0]+BX);else if(!HQ&&HR)Az=[
].concat(Az[2]-BX,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BX/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BX);}}if(!!bitmap&&!((ER&0x2)===0x2)){
var HS=((ER&0x10)===0x10);var HP=((ER&0x20)===0x20);var BJ=bitmap.FrameSize[1];if(
HS&&!HP)Az=[].concat(Az.slice(0,3),Az[1]+BJ);else if(!HS&&HP)Az=A.abP(Az,Az[3]-BJ
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BJ/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BJ);}}this.U5.Cu(Aam);this.U5.Aw(bitmap);this.U5.H(Az);this.U5.ArP(16
);}if(!!this.Qs){var Aia;var font;var A2f;switch(AfT){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvL;A2f=this.ADQ;}break;default:{font=this.Appearance.
AvK;A2f=this.ADP;}}switch(AfT){case 0x44:Aia=this.Appearance.AQ7;break;case 0x41:
Aia=this.Appearance.AQ5;break;case 0x46:Aia=this.Appearance.AQ8;break;case 0x45:
Aia=this.Appearance.AQ6;break;case 0x64:Aia=this.Appearance.AQ3;break;case 0x61:
Aia=this.Appearance.AQ1;break;case 0x66:Aia=this.Appearance.AQ4;break;default:Aia=
this.Appearance.AQ2;}this.Qs.H([AE[0]+this.Appearance.AQ0,AE[1],AE[2],AE[3]]);this.
Qs.A8(this.Appearance.AQZ);this.Qs.S(font);this.Qs.R(A2f);this.Qs.L(Aia);this.Qs.
KR(true);this.Qs.BlO(true);this.Qs.ArP(92);}this.ExtendClipping(0,0,0,0);{var Aui=
AE;this.CR.DR(Aui.slice(0,2));this.CR.Kn(Aui.slice(2,4));this.CR.DE([Aui[2],Aui[
1]]);this.CR.JQ([Aui[0],Aui[3]]);}},Apy:function(G){var Bef=this.Dk.Filter;this.
Dk.Filter=149;if(!Bef&&!!this.Dk.Filter)this.Cy(0x4,0x0);if(!!Bef&&!this.Dk.Filter
)this.Cy(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.An();},J$:function(G){
var F;if(!!this.Q)this.Arv((F=this.Q,F[1].call(F[0])));},Qk:function(G){var F;this.
An();this.Arv(!this.Vz);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vz));A.abo(this.
Q,0);}},BAq:function(G){var F;var ApL=0;if(!!this.Appearance)ApL=50;this.CR.Ar(true
);this.An();if(((this.Dk.Bu-this.A3b)|0)>=ApL){this.Arv(!this.Vz);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.Vz));A.abo(this.Q,0);}}else{this.Bo.Wp(ApL-((this.Dk.
Bu-this.A3b)|0));this.Bo.Ar(true);}},AiG:function(G){var F;this.CR.Ar(false);this.
An();if(this.Bo.By){this.Bo.Ar(false);this.Arv(!this.Vz);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.Vz));A.abo(this.Q,0);}}this.A3b=this.Dk.Bu;},Bz_:function(G){
this.An();},Bz5:function(G){this.An();},AAs:function(G){var F;var ApL=0;if(!!this.
Appearance)ApL=50;this.Dk.By=true;if(!this.CR.Yy)return;if(this.CR.NC)return;if(
this.CR.Jl>=ApL){this.Arv(!this.Vz);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.Vz
));A.abo(this.Q,0);}}else{this.Bo.Wp(ApL-this.CR.Jl);this.Bo.Ar(true);}},AAr:function(
G){var F;this.Dk.By=false;if(this.Bo.By){this.Bo.Ar(false);this.Arv(!this.Vz);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.Vz));A.abo(this.Q,0);}}},As:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J$],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.J$],E,0);if(!!E)this.J$(this);},Arv:function(E){if(this.Vz===
E)return;this.Vz=E;this.An();},A94:function(E){if((E===this.ADP)&&(E===this.ADQ)
)return;this.ADP=E;this.ADQ=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.Apy],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.Apy],E,0);A.pe([this,this.Apy],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BL._Init.call(this.Dk={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UD;this.H(BF);this.Bo.PO(0);this.Bo.Wp(50);this.Dk.Filter=149;this.CR.
JQ(EZ);this.CR.Kn(Hj);this.CR.DE(I$);this.CR.DR(Io);this.CR.Bm7(16);this.CR.AFf(
100);this.J(this.CR,0);this.Bo.Mx=[this,this.Qk];this.Dk.Lm=[this,this.BAq];this.
Dk.BM=[this,this.AiG];this.CR.AEw=[this,this.Bz_];this.CR.AvW=[this,this.Bz5];this.
CR.Lm=[this,this.AAs];this.CR.BM=[this,this.AAr];},_Done:function(){this.__proto__=
A.Core.O;this.Bo._Done();this.Dk._Done();this.CR._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bo._ReInit();this.Dk._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Qs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADd.__proto__=C.An7;C.AU1.__proto__=C.An7;C.ADc.__proto__=A.
Core.O;C.UD.__proto__=A.Core.O;};C._ReInit=function(){};C.DF=function(D){var B;if((
B=C.AdY[0]._this)&&(B._cycle!=D))B._Done(C.AdY[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */