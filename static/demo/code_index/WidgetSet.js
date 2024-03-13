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
var Cc=[0,0,200,50];var BF=[0,0,150,50];var E4=[0,50];var Hm=[150,50];var IQ=[150
,0];var Ip=[0,0];
C.Ad9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADn={AxK:null,AxJ:null,AUQ:500,AG0:-1,AVi:0xFFFFFFFF,AGZ:-1,W0:A.wf,Bni:
function(E){if(this.AUQ===E)return;this.AUQ=E;A.pe([this,this.EG],this);},A_t:function(
E){if(this.AG0===E)return;this.AG0=E;A.pe([this,this.EG],this);},A_s:function(E){
if(this.AxK===E)return;this.AxK=E;A.pe([this,this.EG],this);},A_r:function(E){if(
this.AVi===E)return;this.AVi=E;A.pe([this,this.EG],this);},A_q:function(E){if(this.
AGZ===E)return;this.AGZ=E;A.pe([this,this.EG],this);},A_p:function(E){if(this.AxJ===
E)return;this.AxJ=E;A.pe([this,this.EG],this);},AFZ:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))return;this.W0=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aof._Init.call(this,aArg);this.__proto__=C.ADn;
},_Mark:function(D){var B;C.Aof._Mark.call(this,D);if((B=this.AxK)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxJ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVb={AvT:null,AvS:null,Au_:null,Avb:null
,Ava:null,Au$:null,Au6:null,Au9:null,Au8:null,Au7:null,ARe:0xFF000000,ARh:0xFF000000
,ARg:0xFF000000,ARf:0xFF000000,ARa:0xFF000000,ARd:0xFF000000,ARc:0xFF000000,ARb:
0xFF000000,AQ$:0,A61:0xFFFFFFFF,A64:0xFFFFFFFF,A63:0xFFFFFFFF,A62:0xFFFFFFFF,A6X:
0xFFFFFFFF,A60:0xFFFFFFFF,A6Z:0xFFFFFFFF,A6Y:0xFFFFFFFF,A6W:0,AQ_:0x12,A6V:0x12,
AOk:0x3F,AOp:-1,AOs:-1,AOr:-1,AOq:-1,AOl:-1,AOo:-1,AOn:-1,AOm:-1,W0:A.wf,BmJ:function(
E){if(this.ARe===E)return;this.ARe=E;A.pe([this,this.EG],this);},BmM:function(E){
if(this.ARh===E)return;this.ARh=E;A.pe([this,this.EG],this);},BmL:function(E){if(
this.ARg===E)return;this.ARg=E;A.pe([this,this.EG],this);},BmK:function(E){if(this.
ARf===E)return;this.ARf=E;A.pe([this,this.EG],this);},BmF:function(E){if(this.ARa===
E)return;this.ARa=E;A.pe([this,this.EG],this);},BmI:function(E){if(this.ARd===E)
return;this.ARd=E;A.pe([this,this.EG],this);},BmH:function(E){if(this.ARc===E)return;
this.ARc=E;A.pe([this,this.EG],this);},BmG:function(E){if(this.ARb===E)return;this.
ARb=E;A.pe([this,this.EG],this);},BmE:function(E){if(this.AQ$===E)return;this.AQ$=
E;A.pe([this,this.EG],this);},Bms:function(E){if(this.A61===E)return;this.A61=E;
A.pe([this,this.EG],this);},Bmv:function(E){if(this.A64===E)return;this.A64=E;A.
pe([this,this.EG],this);},Bmu:function(E){if(this.A63===E)return;this.A63=E;A.pe([
this,this.EG],this);},Bmt:function(E){if(this.A62===E)return;this.A62=E;A.pe([this
,this.EG],this);},Bmo:function(E){if(this.A6X===E)return;this.A6X=E;A.pe([this,this.
EG],this);},Bmr:function(E){if(this.A60===E)return;this.A60=E;A.pe([this,this.EG
],this);},Bmq:function(E){if(this.A6Z===E)return;this.A6Z=E;A.pe([this,this.EG],
this);},Bmp:function(E){if(this.A6Y===E)return;this.A6Y=E;A.pe([this,this.EG],this
);},Bmn:function(E){if(this.A6W===E)return;this.A6W=E;A.pe([this,this.EG],this);
},BmC:function(E){if(this.AQ_===E)return;this.AQ_=E;A.pe([this,this.EG],this);},
A90:function(E){if(this.AvT===E)return;this.AvT=E;A.pe([this,this.EG],this);},A9Z:
function(E){if(this.AvS===E)return;this.AvS=E;A.pe([this,this.EG],this);},Bml:function(
E){if(this.A6V===E)return;this.A6V=E;A.pe([this,this.EG],this);},BlX:function(E){
if(this.AOk===E)return;this.AOk=E;A.pe([this,this.EG],this);},Bl_:function(E){if(
this.AOp===E)return;this.AOp=E;A.pe([this,this.EG],this);},Bmb:function(E){if(this.
AOs===E)return;this.AOs=E;A.pe([this,this.EG],this);},Bma:function(E){if(this.AOr===
E)return;this.AOr=E;A.pe([this,this.EG],this);},Bl$:function(E){if(this.AOq===E)
return;this.AOq=E;A.pe([this,this.EG],this);},Bl6:function(E){if(this.Au_===E)return;
this.Au_=E;A.pe([this,this.EG],this);},Bl9:function(E){if(this.Avb===E)return;this.
Avb=E;A.pe([this,this.EG],this);},Bl8:function(E){if(this.Ava===E)return;this.Ava=
E;A.pe([this,this.EG],this);},Bl7:function(E){if(this.Au$===E)return;this.Au$=E;
A.pe([this,this.EG],this);},Bl2:function(E){if(this.AOl===E)return;this.AOl=E;A.
pe([this,this.EG],this);},Bl5:function(E){if(this.AOo===E)return;this.AOo=E;A.pe([
this,this.EG],this);},Bl4:function(E){if(this.AOn===E)return;this.AOn=E;A.pe([this
,this.EG],this);},Bl3:function(E){if(this.AOm===E)return;this.AOm=E;A.pe([this,this.
EG],this);},BlY:function(E){if(this.Au6===E)return;this.Au6=E;A.pe([this,this.EG
],this);},Bl1:function(E){if(this.Au9===E)return;this.Au9=E;A.pe([this,this.EG],
this);},Bl0:function(E){if(this.Au8===E)return;this.Au8=E;A.pe([this,this.EG],this
);},BlZ:function(E){if(this.Au7===E)return;this.Au7=E;A.pe([this,this.EG],this);
},AFZ:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))
return;this.W0=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aof._Init.call(
this,aArg);this.__proto__=C.AVb;},_Mark:function(D){var B;C.Aof._Mark.call(this,
D);if((B=this.AvT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ava)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au9)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aof={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aof;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADm={LM:null,LL:null,Appearance:null
,M6:null,Aij:0,FZ:100,Gl:0,AM:50,BfX:true,H:function(E){var B;if(!!this.Appearance
){var Azp=[E[2]-E[0],E[3]-E[1]];var Ol=Azp;if(Ol[0]<this.Appearance.W0[0])Ol=[this.
Appearance.W0[0],Ol[1]];if(Ol[1]<this.Appearance.W0[1])Ol=[Ol[0],this.Appearance.
W0[1]];var G8=A.abe(Ol,Azp);if(!!G8[0]){var HS=((this.PH&0x4)===0x4);var HT=((this.
PH&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+G8[0]);else if(!HS&&HT)E=[].concat(E[0]-
G8[0],E.slice(1,4));else{E=[].concat(E[0]-((G8[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Ol[0]);}}if(!!G8[1]){var HU=((this.PH&0x10)===0x10);var HR=((this.PH&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+G8[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-G8[1]);else{E=A.abP(E,E[1]-((G8[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var Bd2=!!this.Appearance&&!!this.Appearance.AxJ;var Bd3=!!this.Appearance&&!!this.
Appearance.AxK;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Bd2&&!!!this.LL){this.
LL=A._NewObject(A.acg.NO,0);this.J(this.LL,0);}else if(!Bd2&&!!this.LL){this.HN(
this.LL);this.LL=null;}if(Bd3&&!!!this.LM){this.LM=A._NewObject(A.acg.NO,0);this.
J(this.LM,0);}else if(!Bd3&&!!this.LM){this.HN(this.LM);this.LM=null;}if(!!this.
LL){this.LL.Aw(this.Appearance.AxJ);this.LL.L(this.Appearance.AVi);this.LL.A9M(0x1B
);this.LL.Ar3(54);if(this.Appearance.AGZ<0){this.LL.Zr(true);this.LL.Cv(0);}else{
this.LL.Zr(false);this.LL.Cv(this.Appearance.AGZ);}}if(!!this.LM){this.LM.Aw(this.
Appearance.AxK);this.LM.L(0xFFFFFFFF);this.LM.A9M(0x1E);this.LM.Ar3(35);if(this.
Appearance.AG0<0){this.LM.Zr(true);this.LM.Cv(0);}else{this.LM.Zr(false);this.LM.
Cv(this.Appearance.AG0);}}var pos=((AE[2]-AE[0])*this.Aij)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LL&&!!this.LL.Al){var s=this.LL.Al.FrameSize;
var x2=AE[2]-AE[0];var En=pos;if(En>x2)En=x2;this.LL.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),En,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LL.A92([x2-((s[0]
/3)|0),this.LL.Anm[1]]);this.LL.Z(true);}if(!!this.LM&&!!this.LM.Al){var s=this.
LM.Al.FrameSize;var x2=AE[2]-AE[0];var En=pos;if(En<0)En=0;this.LM.H([En,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LM.A92([x2-((s[0]/3)|0),this.LM.Anm[1]]);this.LM.Z(true);}},AKD:function(G){var AtY=
this.Aij;var AK$=0;if(!!this.Appearance)AK$=this.Appearance.AUQ;if(this.BfX&&(this.
FZ!==this.Gl)){this.Aij=-this.Gl/(this.FZ-this.Gl);AtY=this.Aij;this.BfX=false;}
if(this.FZ!==this.Gl)AtY=(this.Ue()-this.Gl)/(this.FZ-this.Gl);if(AtY===this.Aij
)return;this.M6.Ar(false);if(AK$<=0){this.Aij=AtY;this.An();return;}var AKK=AtY-
this.Aij;if(AKK<0)AKK=-AKK;this.M6.WC(14);this.M6.Cw=this.Aij;this.M6.B2=AtY;this.
M6.Fl((10+((AK$/2)|0))+((((AK$*AKK)|0)/2)|0));this.M6.Ar(true);},BAf:function(G){
},BAi:function(G){this.Aij=this.M6.A4;this.An();},ApI:function(G){A.pe([this,this.
AKD],this);if(!!this.Appearance)this.H(this.M);this.An();},EV:function(E){if(this.
FZ===E)return;this.FZ=E;A.pe([this,this.AKD],this);},F0:function(E){if(this.Gl===
E)return;this.Gl=E;A.pe([this,this.AKD],this);},Ue:function(){var E=this.AM;if(this.
Gl>this.FZ){if(E<this.FZ)E=this.FZ;if(E>this.Gl)E=this.Gl;}else{if(E<this.Gl)E=this.
Gl;if(E>this.FZ)E=this.FZ;}return E;},By:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKD],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApI],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApI],E,0);A.pe([this,this.ApI],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M6._Init.call(this.M6={I:this},0);this.__proto__=
C.ADm;this.H(Cc);this.M6.WC(14);this.M6.HM(1);this.M6.Sv=[this,this.BAf];this.M6.
Ahf=[this,this.BAi];},_Done:function(){this.__proto__=A.Core.P;this.M6._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M6.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UF={Qu:null
,U$:null,Appearance:null,Q:null,Bo:null,Dm:null,CR:null,AD0:A.jV,ADZ:A.jV,A3i:0,
BA8:0,VH:false,H:function(E){var B;if(!!this.Appearance){var Azp=[E[2]-E[0],E[3]-
E[1]];var Ol=Azp;if(Ol[0]<this.Appearance.W0[0])Ol=[this.Appearance.W0[0],Ol[1]];
if(Ol[1]<this.Appearance.W0[1])Ol=[Ol[0],this.Appearance.W0[1]];var G8=A.abe(Ol,
Azp);if(!!G8[0]){var HS=((this.PH&0x4)===0x4);var HT=((this.PH&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+G8[0]);else if(!HS&&HT)E=[].concat(E[0]-G8[0],E.slice(1,4));else{
E=[].concat(E[0]-((G8[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Ol[0]);}}if(!!G8[1]){
var HU=((this.PH&0x10)===0x10);var HR=((this.PH&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+G8[1]);else if(!HU&&HR)E=A.abP(E,E[1]-G8[1]);else{E=A.abP(E,E[
1]-((G8[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Ol[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Bd1=!!this.Appearance&&(((((((
!!this.Appearance.Au7||!!this.Appearance.Au8)||!!this.Appearance.Au9)||!!this.Appearance.
Au6)||!!this.Appearance.Au$)||!!this.Appearance.Ava)||!!this.Appearance.Avb)||!!
this.Appearance.Au_);var Bd4=!!this.Appearance&&((!!this.ADZ&&!!this.Appearance.
AvS)||(!!this.AD0&&!!this.Appearance.AvT));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af1;if(Bd1&&!!!this.U$){this.U$=A._NewObject(A.acg.NO,0);this.J(this.U$,
0);}else if(!Bd1&&!!this.U$){this.HN(this.U$);this.U$=null;}if(Bd4&&!!!this.Qu){
this.Qu=A._NewObject(A.acg.Text,0);this.J(this.Qu,0);this.Qu.BlQ(true);}else if(
!Bd4&&!!this.Qu){this.HN(this.Qu);this.Qu=null;}if(!((Ae&0x10)===0x10))Af1=0x44;
else if(((this.CR.Down&&this.CR.YG)||this.Dm.Down)||this.Bo.Bw)Af1=0x41;else if(((
Ae&0x40)===0x40))Af1=0x46;else Af1=0x45;if(!this.VH)Af1=String.fromCharCode(Af1).
toLowerCase().charCodeAt(0)||0;this.BA8=Af1;if(!!this.U$){var bitmap;var Aax;var
EW=this.Appearance.AOk;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af1){case 0x44:{bitmap=
this.Appearance.Ava;Aax=this.Appearance.AOr;}break;case 0x41:{bitmap=this.Appearance.
Au_;Aax=this.Appearance.AOp;}break;case 0x46:{bitmap=this.Appearance.Avb;Aax=this.
Appearance.AOs;}break;case 0x45:{bitmap=this.Appearance.Au$;Aax=this.Appearance.
AOq;}break;case 0x64:{bitmap=this.Appearance.Au8;Aax=this.Appearance.AOn;}break;
case 0x61:{bitmap=this.Appearance.Au6;Aax=this.Appearance.AOl;}break;case 0x66:{
bitmap=this.Appearance.Au9;Aax=this.Appearance.AOo;}break;default:{bitmap=this.Appearance.
Au7;Aax=this.Appearance.AOm;}}this.U$.Zr(Aax<0);this.U$.L(0xFFFFFFFF);if(Aax<0)Aax=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BY);else if(!HS&&HT)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BL=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BL);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BL
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BL/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BL);}}this.U$.Cv(Aax);this.U$.Aw(bitmap);this.U$.H(Az);this.U$.Ar3(16
);}if(!!this.Qu){var Aih;var font;var A2m;switch(Af1){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvT;A2m=this.AD0;}break;default:{font=this.Appearance.
AvS;A2m=this.ADZ;}}switch(Af1){case 0x44:Aih=this.Appearance.ARg;break;case 0x41:
Aih=this.Appearance.ARe;break;case 0x46:Aih=this.Appearance.ARh;break;case 0x45:
Aih=this.Appearance.ARf;break;case 0x64:Aih=this.Appearance.ARc;break;case 0x61:
Aih=this.Appearance.ARa;break;case 0x66:Aih=this.Appearance.ARd;break;default:Aih=
this.Appearance.ARb;}this.Qu.H([AE[0]+this.Appearance.AQ$,AE[1],AE[2],AE[3]]);this.
Qu.A6(this.Appearance.AQ_);this.Qu.S(font);this.Qu.R(A2m);this.Qu.L(Aih);this.Qu.
KS(true);this.Qu.BlP(true);this.Qu.Ar3(92);}this.ExtendClipping(0,0,0,0);{var Aur=
AE;this.CR.DL(Aur.slice(0,2));this.CR.Kr(Aur.slice(2,4));this.CR.DC([Aur[2],Aur[
1]]);this.CR.JR([Aur[0],Aur[3]]);}},ApI:function(G){var Beb=this.Dm.Filter;this.
Dm.Filter=149;if(!Beb&&!!this.Dm.Filter)this.Cy(0x4,0x0);if(!!Beb&&!this.Dm.Filter
)this.Cy(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.An();},Kd:function(G){
var F;if(!!this.Q)this.ArI((F=this.Q,F[1].call(F[0])));},Qm:function(G){var F;this.
An();this.ArI(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.
Q,0);}},BAD:function(G){var F;var ApU=0;if(!!this.Appearance)ApU=50;this.CR.Ar(true
);this.An();if(((this.Dm.Bs-this.A3i)|0)>=ApU){this.ArI(!this.VH);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}else{this.Bo.Wx(ApU-((this.Dm.
Bs-this.A3i)|0));this.Bo.Ar(true);}},AiO:function(G){var F;this.CR.Ar(false);this.
An();if(this.Bo.Bw){this.Bo.Ar(false);this.ArI(!this.VH);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VH));A.abo(this.Q,0);}}this.A3i=this.Dm.Bs;},BAl:function(G){
this.An();},BAh:function(G){this.An();},AAC:function(G){var F;var ApU=0;if(!!this.
Appearance)ApU=50;this.Dm.Bw=true;if(!this.CR.YG)return;if(this.CR.NF)return;if(
this.CR.Jp>=ApU){this.ArI(!this.VH);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VH
));A.abo(this.Q,0);}}else{this.Bo.Wx(ApU-this.CR.Jp);this.Bo.Ar(true);}},AAB:function(
G){var F;this.Dm.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArI(!this.VH);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VH));A.abo(this.Q,0);}}},As:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.Kd],E,0);if(!!E)this.Kd(this);},ArI:function(E){if(this.VH===
E)return;this.VH=E;this.An();},A9Y:function(E){if((E===this.ADZ)&&(E===this.AD0)
)return;this.ADZ=E;this.AD0=E;this.An();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApI],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApI],E,0);A.pe([this,this.ApI],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BN._Init.call(this.Dm={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UF;this.H(BF);this.Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=149;this.CR.
JR(E4);this.CR.Kr(Hm);this.CR.DC(IQ);this.CR.DL(Ip);this.CR.Bm9(16);this.CR.AFo(
100);this.J(this.CR,0);this.Bo.Mx=[this,this.Qm];this.Dm.Ln=[this,this.BAD];this.
Dm.BO=[this,this.AiO];this.CR.AEF=[this,this.BAl];this.CR.Av5=[this,this.BAh];this.
CR.Ln=[this,this.AAC];this.CR.BO=[this,this.AAB];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dm._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADn.__proto__=C.Aof;C.AVb.__proto__=C.Aof;C.ADm.__proto__=A.
Core.P;C.UF.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad9[0]._this)&&(B._cycle!=D))B._Done(C.Ad9[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */