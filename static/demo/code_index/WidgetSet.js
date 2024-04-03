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
var Cc=[0,0,200,50];var BD=[0,0,150,50];var E7=[0,50];var Hq=[150,50];var IU=[150
,0];var Is=[0,0];
C.Ad9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:
null}};C.ADq={AxM:null,AxL:null,AUS:500,AG0:-1,AVk:0xFFFFFFFF,AGZ:-1,W0:A.wf,Bnx:
function(E){if(this.AUS===E)return;this.AUS=E;A.pe([this,this.EG],this);},A_x:function(
E){if(this.AG0===E)return;this.AG0=E;A.pe([this,this.EG],this);},A_w:function(E){
if(this.AxM===E)return;this.AxM=E;A.pe([this,this.EG],this);},A_v:function(E){if(
this.AVk===E)return;this.AVk=E;A.pe([this,this.EG],this);},A_u:function(E){if(this.
AGZ===E)return;this.AGZ=E;A.pe([this,this.EG],this);},A_t:function(E){if(this.AxL===
E)return;this.AxL=E;A.pe([this,this.EG],this);},AF0:function(E){if(E[0]<0)E=[0,E[
1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))return;this.W0=E;A.pe([this,this.EG
],this);},_Init:function(aArg){C.Aoa._Init.call(this,aArg);this.__proto__=C.ADq;
},_Mark:function(D){var B;C.Aoa._Mark.call(this,D);if((B=this.AxM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AxL)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::HorizontalValueBarConfig"};C.AVd={AvT:null,AvS:null,Au_:null,Avb:null
,Ava:null,Au$:null,Au6:null,Au9:null,Au8:null,Au7:null,ARk:0xFF000000,ARn:0xFF000000
,ARm:0xFF000000,ARl:0xFF000000,ARg:0xFF000000,ARj:0xFF000000,ARi:0xFF000000,ARh:
0xFF000000,ARf:0,A64:0xFFFFFFFF,A67:0xFFFFFFFF,A66:0xFFFFFFFF,A65:0xFFFFFFFF,A60:
0xFFFFFFFF,A63:0xFFFFFFFF,A62:0xFFFFFFFF,A61:0xFFFFFFFF,A6Z:0,ARe:0x12,A6Y:0x12,
AOj:0x3F,AOo:-1,AOr:-1,AOq:-1,AOp:-1,AOk:-1,AOn:-1,AOm:-1,AOl:-1,W0:A.wf,BmY:function(
E){if(this.ARk===E)return;this.ARk=E;A.pe([this,this.EG],this);},Bm1:function(E){
if(this.ARn===E)return;this.ARn=E;A.pe([this,this.EG],this);},Bm0:function(E){if(
this.ARm===E)return;this.ARm=E;A.pe([this,this.EG],this);},BmZ:function(E){if(this.
ARl===E)return;this.ARl=E;A.pe([this,this.EG],this);},BmU:function(E){if(this.ARg===
E)return;this.ARg=E;A.pe([this,this.EG],this);},BmX:function(E){if(this.ARj===E)
return;this.ARj=E;A.pe([this,this.EG],this);},BmW:function(E){if(this.ARi===E)return;
this.ARi=E;A.pe([this,this.EG],this);},BmV:function(E){if(this.ARh===E)return;this.
ARh=E;A.pe([this,this.EG],this);},BmT:function(E){if(this.ARf===E)return;this.ARf=
E;A.pe([this,this.EG],this);},BmH:function(E){if(this.A64===E)return;this.A64=E;
A.pe([this,this.EG],this);},BmK:function(E){if(this.A67===E)return;this.A67=E;A.
pe([this,this.EG],this);},BmJ:function(E){if(this.A66===E)return;this.A66=E;A.pe([
this,this.EG],this);},BmI:function(E){if(this.A65===E)return;this.A65=E;A.pe([this
,this.EG],this);},BmD:function(E){if(this.A60===E)return;this.A60=E;A.pe([this,this.
EG],this);},BmG:function(E){if(this.A63===E)return;this.A63=E;A.pe([this,this.EG
],this);},BmF:function(E){if(this.A62===E)return;this.A62=E;A.pe([this,this.EG],
this);},BmE:function(E){if(this.A61===E)return;this.A61=E;A.pe([this,this.EG],this
);},BmC:function(E){if(this.A6Z===E)return;this.A6Z=E;A.pe([this,this.EG],this);
},BmR:function(E){if(this.ARe===E)return;this.ARe=E;A.pe([this,this.EG],this);},
A93:function(E){if(this.AvT===E)return;this.AvT=E;A.pe([this,this.EG],this);},A92:
function(E){if(this.AvS===E)return;this.AvS=E;A.pe([this,this.EG],this);},BmA:function(
E){if(this.A6Y===E)return;this.A6Y=E;A.pe([this,this.EG],this);},Bma:function(E){
if(this.AOj===E)return;this.AOj=E;A.pe([this,this.EG],this);},Bmn:function(E){if(
this.AOo===E)return;this.AOo=E;A.pe([this,this.EG],this);},Bmq:function(E){if(this.
AOr===E)return;this.AOr=E;A.pe([this,this.EG],this);},Bmp:function(E){if(this.AOq===
E)return;this.AOq=E;A.pe([this,this.EG],this);},Bmo:function(E){if(this.AOp===E)
return;this.AOp=E;A.pe([this,this.EG],this);},Bmj:function(E){if(this.Au_===E)return;
this.Au_=E;A.pe([this,this.EG],this);},Bmm:function(E){if(this.Avb===E)return;this.
Avb=E;A.pe([this,this.EG],this);},Bml:function(E){if(this.Ava===E)return;this.Ava=
E;A.pe([this,this.EG],this);},Bmk:function(E){if(this.Au$===E)return;this.Au$=E;
A.pe([this,this.EG],this);},Bmf:function(E){if(this.AOk===E)return;this.AOk=E;A.
pe([this,this.EG],this);},Bmi:function(E){if(this.AOn===E)return;this.AOn=E;A.pe([
this,this.EG],this);},Bmh:function(E){if(this.AOm===E)return;this.AOm=E;A.pe([this
,this.EG],this);},Bmg:function(E){if(this.AOl===E)return;this.AOl=E;A.pe([this,this.
EG],this);},Bmb:function(E){if(this.Au6===E)return;this.Au6=E;A.pe([this,this.EG
],this);},Bme:function(E){if(this.Au9===E)return;this.Au9=E;A.pe([this,this.EG],
this);},Bmd:function(E){if(this.Au8===E)return;this.Au8=E;A.pe([this,this.EG],this
);},Bmc:function(E){if(this.Au7===E)return;this.Au7=E;A.pe([this,this.EG],this);
},AF0:function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.aaX(this.W0,E))
return;this.W0=E;A.pe([this,this.EG],this);},_Init:function(aArg){C.Aoa._Init.call(
this,aArg);this.__proto__=C.AVd;},_Mark:function(D){var B;C.Aoa._Mark.call(this,
D);if((B=this.AvT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ava)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au9)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButtonConfig"};C.Aoa={
EG:function(G){A.we(this,0);},_Init:function(aArg){this.__proto__=C.Aoa;A.h7++;}
,_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"WidgetSet::WidgetConfig"};C.ADp={LL:null,LK:null,Appearance:null
,M6:null,Aim:0,F$:100,Gp:0,AM:50,Bf8:true,H:function(E){var B;if(!!this.Appearance
){var Azs=[E[2]-E[0],E[3]-E[1]];var Om=Azs;if(Om[0]<this.Appearance.W0[0])Om=[this.
Appearance.W0[0],Om[1]];if(Om[1]<this.Appearance.W0[1])Om=[Om[0],this.Appearance.
W0[1]];var Hb=A.abe(Om,Azs);if(!!Hb[0]){var HS=((this.PL&0x4)===0x4);var HT=((this.
PL&0x8)===0x8);if(HS&&!HT)E=A.abN(E,E[2]+Hb[0]);else if(!HS&&HT)E=[].concat(E[0]-
Hb[0],E.slice(1,4));else{E=[].concat(E[0]-((Hb[0]/2)|0),E.slice(1,4));E=A.abN(E,
E[0]+Om[0]);}}if(!!Hb[1]){var HU=((this.PL&0x10)===0x10);var HR=((this.PL&0x20)===
0x20);if(HU&&!HR)E=[].concat(E.slice(0,3),E[3]+Hb[1]);else if(!HU&&HR)E=A.abP(E,
E[1]-Hb[1]);else{E=A.abP(E,E[1]-((Hb[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Om[
1]);}}}A.Core.P.H.call(this,E);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);
var Beb=!!this.Appearance&&!!this.Appearance.AxL;var Bec=!!this.Appearance&&!!this.
Appearance.AxM;var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[1]];if(Beb&&!!!this.LK){this.
LK=A._NewObject(A.acg.NP,0);this.J(this.LK,0);}else if(!Beb&&!!this.LK){this.HN(
this.LK);this.LK=null;}if(Bec&&!!!this.LL){this.LL=A._NewObject(A.acg.NP,0);this.
J(this.LL,0);}else if(!Bec&&!!this.LL){this.HN(this.LL);this.LL=null;}if(!!this.
LK){this.LK.Ax(this.Appearance.AxL);this.LK.L(this.Appearance.AVk);this.LK.A9P(0x1B
);this.LK.Ar4(54);if(this.Appearance.AGZ<0){this.LK.Zm(true);this.LK.Cw(0);}else{
this.LK.Zm(false);this.LK.Cw(this.Appearance.AGZ);}}if(!!this.LL){this.LL.Ax(this.
Appearance.AxM);this.LL.L(0xFFFFFFFF);this.LL.A9P(0x1E);this.LL.Ar4(35);if(this.
Appearance.AG0<0){this.LL.Zm(true);this.LL.Cw(0);}else{this.LL.Zm(false);this.LL.
Cw(this.Appearance.AG0);}}var pos=((AE[2]-AE[0])*this.Aim)|0;if(pos<0)pos=0;if(pos>(
AE[2]-AE[0]))pos=AE[2]-AE[0];if(!!this.LK&&!!this.LK.Al){var s=this.LK.Al.FrameSize;
var x2=AE[2]-AE[0];var Eo=pos;if(Eo>x2)Eo=x2;this.LK.H([0,(((AE[3]-AE[1])/2)|0)-((
s[1]/2)|0),Eo,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.LK.A95([x2-((s[0]
/3)|0),this.LK.Anj[1]]);this.LK.Z(true);}if(!!this.LL&&!!this.LL.Al){var s=this.
LL.Al.FrameSize;var x2=AE[2]-AE[0];var Eo=pos;if(Eo<0)Eo=0;this.LL.H([Eo,(((AE[3
]-AE[1])/2)|0)-((s[1]/2)|0),x2,((((AE[3]-AE[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.
LL.A95([x2-((s[0]/3)|0),this.LL.Anj[1]]);this.LL.Z(true);}},AKB:function(G){var AtX=
this.Aim;var AK9=0;if(!!this.Appearance)AK9=this.Appearance.AUS;if(this.Bf8&&(this.
F$!==this.Gp)){this.Aim=-this.Gp/(this.F$-this.Gp);AtX=this.Aim;this.Bf8=false;}
if(this.F$!==this.Gp)AtX=(this.Ug()-this.Gp)/(this.F$-this.Gp);if(AtX===this.Aim
)return;this.M6.Ar(false);if(AK9<=0){this.Aim=AtX;this.Am();return;}var AKI=AtX-
this.Aim;if(AKI<0)AKI=-AKI;this.M6.WC(14);this.M6.Cx=this.Aim;this.M6.B2=AtX;this.
M6.Fq((10+((AK9/2)|0))+((((AK9*AKI)|0)/2)|0));this.M6.Ar(true);},BAy:function(G){
},BAB:function(G){this.Aim=this.M6.A5;this.Am();},ApH:function(G){A.pe([this,this.
AKB],this);if(!!this.Appearance)this.H(this.M);this.Am();},EU:function(E){if(this.
F$===E)return;this.F$=E;A.pe([this,this.AKB],this);},Ga:function(E){if(this.Gp===
E)return;this.Gp=E;A.pe([this,this.AKB],this);},Ug:function(){var E=this.AM;if(this.
Gp>this.F$){if(E<this.F$)E=this.F$;if(E>this.Gp)E=this.Gp;}else{if(E<this.Gp)E=this.
Gp;if(E>this.F$)E=this.F$;}return E;},Bx:function(E){if(this.AM===E)return;this.
AM=E;A.pe([this,this.AKB],this);},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApH],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApH],E,0);A.pe([this,this.ApH],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acl.M6._Init.call(this.M6={I:this},0);this.__proto__=
C.ADp;this.H(Cc);this.M6.WC(14);this.M6.HM(1);this.M6.Sz=[this,this.BAy];this.M6.
Ahl=[this,this.BAB];},_Done:function(){this.__proto__=A.Core.P;this.M6._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.M6.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.LL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"};C.UH={Qz:null
,Vc:null,Appearance:null,Q:null,Bo:null,Dn:null,CR:null,AD1:A.jV,AD0:A.jV,A3q:0,
BBr:0,VK:false,H:function(E){var B;if(!!this.Appearance){var Azs=[E[2]-E[0],E[3]-
E[1]];var Om=Azs;if(Om[0]<this.Appearance.W0[0])Om=[this.Appearance.W0[0],Om[1]];
if(Om[1]<this.Appearance.W0[1])Om=[Om[0],this.Appearance.W0[1]];var Hb=A.abe(Om,
Azs);if(!!Hb[0]){var HS=((this.PL&0x4)===0x4);var HT=((this.PL&0x8)===0x8);if(HS&&
!HT)E=A.abN(E,E[2]+Hb[0]);else if(!HS&&HT)E=[].concat(E[0]-Hb[0],E.slice(1,4));else{
E=[].concat(E[0]-((Hb[0]/2)|0),E.slice(1,4));E=A.abN(E,E[0]+Om[0]);}}if(!!Hb[1]){
var HU=((this.PL&0x10)===0x10);var HR=((this.PL&0x20)===0x20);if(HU&&!HR)E=[].concat(
E.slice(0,3),E[3]+Hb[1]);else if(!HU&&HR)E=A.abP(E,E[1]-Hb[1]);else{E=A.abP(E,E[
1]-((Hb[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Om[1]);}}}A.Core.P.H.call(this,E
);},Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Bea=!!this.Appearance&&(((((((
!!this.Appearance.Au7||!!this.Appearance.Au8)||!!this.Appearance.Au9)||!!this.Appearance.
Au6)||!!this.Appearance.Au$)||!!this.Appearance.Ava)||!!this.Appearance.Avb)||!!
this.Appearance.Au_);var Bed=!!this.Appearance&&((!!this.AD0&&!!this.Appearance.
AvS)||(!!this.AD1&&!!this.Appearance.AvT));var AE=[0,0,(B=this.M)[2]-B[0],B[3]-B[
1]];var Af3;if(Bea&&!!!this.Vc){this.Vc=A._NewObject(A.acg.NP,0);this.J(this.Vc,
0);}else if(!Bea&&!!this.Vc){this.HN(this.Vc);this.Vc=null;}if(Bed&&!!!this.Qz){
this.Qz=A._NewObject(A.acg.Text,0);this.J(this.Qz,0);this.Qz.Bl5(true);}else if(
!Bed&&!!this.Qz){this.HN(this.Qz);this.Qz=null;}if(!((Ae&0x10)===0x10))Af3=0x44;
else if(((this.CR.Down&&this.CR.YC)||this.Dn.Down)||this.Bo.Bw)Af3=0x41;else if(((
Ae&0x40)===0x40))Af3=0x46;else Af3=0x45;if(!this.VK)Af3=String.fromCharCode(Af3).
toLowerCase().charCodeAt(0)||0;this.BBr=Af3;if(!!this.Vc){var bitmap;var Aas;var
EW=this.Appearance.AOj;var Az=[AE[0],AE[1],AE[2],AE[3]];switch(Af3){case 0x44:{bitmap=
this.Appearance.Ava;Aas=this.Appearance.AOq;}break;case 0x41:{bitmap=this.Appearance.
Au_;Aas=this.Appearance.AOo;}break;case 0x46:{bitmap=this.Appearance.Avb;Aas=this.
Appearance.AOr;}break;case 0x45:{bitmap=this.Appearance.Au$;Aas=this.Appearance.
AOp;}break;case 0x64:{bitmap=this.Appearance.Au8;Aas=this.Appearance.AOm;}break;
case 0x61:{bitmap=this.Appearance.Au6;Aas=this.Appearance.AOk;}break;case 0x66:{
bitmap=this.Appearance.Au9;Aas=this.Appearance.AOn;}break;default:{bitmap=this.Appearance.
Au7;Aas=this.Appearance.AOl;}}this.Vc.Zm(Aas<0);this.Vc.L(0xFFFFFFFF);if(Aas<0)Aas=
0;if(!!bitmap&&!((EW&0x1)===0x1)){var HS=((EW&0x4)===0x4);var HT=((EW&0x8)===0x8
);var BY=bitmap.FrameSize[0];if(HS&&!HT)Az=A.abN(Az,Az[0]+BY);else if(!HS&&HT)Az=[
].concat(Az[2]-BY,Az.slice(1,4));else{Az=[].concat(Az[0]+((((Az[2]-Az[0])/2)|0)-((
BY/2)|0)),Az.slice(1,4));Az=A.abN(Az,Az[0]+BY);}}if(!!bitmap&&!((EW&0x2)===0x2)){
var HU=((EW&0x10)===0x10);var HR=((EW&0x20)===0x20);var BI=bitmap.FrameSize[1];if(
HU&&!HR)Az=[].concat(Az.slice(0,3),Az[1]+BI);else if(!HU&&HR)Az=A.abP(Az,Az[3]-BI
);else{Az=A.abP(Az,Az[1]+((((Az[3]-Az[1])/2)|0)-((BI/2)|0)));Az=[].concat(Az.slice(
0,3),Az[1]+BI);}}this.Vc.Cw(Aas);this.Vc.Ax(bitmap);this.Vc.H(Az);this.Vc.Ar4(16
);}if(!!this.Qz){var Ail;var font;var A2t;switch(Af3){case 0x44:case 0x41:case 0x46:
case 0x45:{font=this.Appearance.AvT;A2t=this.AD1;}break;default:{font=this.Appearance.
AvS;A2t=this.AD0;}}switch(Af3){case 0x44:Ail=this.Appearance.ARm;break;case 0x41:
Ail=this.Appearance.ARk;break;case 0x46:Ail=this.Appearance.ARn;break;case 0x45:
Ail=this.Appearance.ARl;break;case 0x64:Ail=this.Appearance.ARi;break;case 0x61:
Ail=this.Appearance.ARg;break;case 0x66:Ail=this.Appearance.ARj;break;default:Ail=
this.Appearance.ARh;}this.Qz.H([AE[0]+this.Appearance.ARf,AE[1],AE[2],AE[3]]);this.
Qz.A6(this.Appearance.ARe);this.Qz.S(font);this.Qz.R(A2t);this.Qz.L(Ail);this.Qz.
KR(true);this.Qz.Bl4(true);this.Qz.Ar4(92);}this.ExtendClipping(0,0,0,0);{var Auq=
AE;this.CR.DM(Auq.slice(0,2));this.CR.Ku(Auq.slice(2,4));this.CR.DC([Auq[2],Auq[
1]]);this.CR.JU([Auq[0],Auq[3]]);}},ApH:function(G){var Bem=this.Dn.Filter;this.
Dn.Filter=149;if(!Bem&&!!this.Dn.Filter)this.Cr(0x4,0x0);if(!!Bem&&!this.Dn.Filter
)this.Cr(0x0,0x4);if(!!this.Appearance)this.H(this.M);this.Am();},IC:function(G){
var F;if(!!this.Q)this.ArI((F=this.Q,F[1].call(F[0])));},Qr:function(G){var F;this.
Am();this.ArI(!this.VK);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VK));A.abo(this.
Q,0);}},BAY:function(G){var F;var ApS=0;if(!!this.Appearance)ApS=50;this.CR.Ar(true
);this.Am();if(((this.Dn.Bs-this.A3q)|0)>=ApS){this.ArI(!this.VK);if(!!this.Q){(
F=this.Q,F[2].call(F[0],this.VK));A.abo(this.Q,0);}}else{this.Bo.Wz(ApS-((this.Dn.
Bs-this.A3q)|0));this.Bo.Ar(true);}},AiP:function(G){var F;this.CR.Ar(false);this.
Am();if(this.Bo.Bw){this.Bo.Ar(false);this.ArI(!this.VK);if(!!this.Q){(F=this.Q,
F[2].call(F[0],this.VK));A.abo(this.Q,0);}}this.A3q=this.Dn.Bs;},BAE:function(G){
this.Am();},BAA:function(G){this.Am();},AAE:function(G){var F;var ApS=0;if(!!this.
Appearance)ApS=50;this.Dn.Bw=true;if(!this.CR.YC)return;if(this.CR.NF)return;if(
this.CR.Jt>=ApS){this.ArI(!this.VK);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.VK
));A.abo(this.Q,0);}}else{this.Bo.Wz(ApS-this.CR.Jt);this.Bo.Ar(true);}},AAD:function(
G){var F;this.Dn.Bw=false;if(this.Bo.Bw){this.Bo.Ar(false);this.ArI(!this.VK);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.VK));A.abo(this.Q,0);}}},At:function(E){
if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(
!!E)A.zX([this,this.IC],E,0);if(!!E)this.IC(this);},ArI:function(E){if(this.VK===
E)return;this.VK=E;this.Am();},A91:function(E){if((E===this.AD0)&&(E===this.AD1)
)return;this.AD0=E;this.AD1=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===
E)return;if(!!this.Appearance)A.z9([this,this.ApH],this.Appearance,0);this.Appearance=
E;if(!!E)A.zV([this,this.ApH],E,0);A.pe([this,this.ApH],this);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.
BK._Init.call(this.Dn={I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.UH;this.H(BD);this.Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=149;this.CR.
JU(E7);this.CR.Ku(Hq);this.CR.DC(IU);this.CR.DM(Is);this.CR.Bnm(16);this.CR.AFp(
100);this.J(this.CR,0);this.Bo.MB=[this,this.Qr];this.Dn.Ln=[this,this.BAY];this.
Dn.BL=[this,this.AiP];this.CR.AEG=[this,this.BAE];this.CR.Av6=[this,this.BAA];this.
CR.Ln=[this,this.AAE];this.CR.BL=[this,this.AAD];},_Done:function(){this.__proto__=
A.Core.P;this.Bo._Done();this.Dn._Done();this.CR._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit(
);this.CR._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Qz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vc)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)
B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ADq.__proto__=C.Aoa;C.AVd.__proto__=C.Aoa;C.ADp.__proto__=A.
Core.P;C.UH.__proto__=A.Core.P;};C._ReInit=function(){};C.DH=function(D){var B;if((
B=C.Ad9[0]._this)&&(B._cycle!=D))B._Done(C.Ad9[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */