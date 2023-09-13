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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.abr)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
abr=(function(){var A=index;var C={};
var B_=[0,0,200,50];var BH=[0,0,150,50];var EV=[0,50];var GS=[150,50];var Jt=[150
,0];var IL=[0,0];
C.Ada={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A.cC,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:null}};C.ABw={Av6:
null,Av5:null,ASo:500,AE3:-1,ASR:0xFFFFFFFF,AE2:-1,V$:A.vw,Bj1:function(E){if(this.
ASo===E)return;this.ASo=E;A.ow([this,this.Ew],this);},A7l:function(E){if(this.AE3===
E)return;this.AE3=E;A.ow([this,this.Ew],this);},A7k:function(E){if(this.Av6===E)
return;this.Av6=E;A.ow([this,this.Ew],this);},A7j:function(E){if(this.ASR===E)return;
this.ASR=E;A.ow([this,this.Ew],this);},A7i:function(E){if(this.AE2===E)return;this.
AE2=E;A.ow([this,this.Ew],this);},A7h:function(E){if(this.Av5===E)return;this.Av5=
E;A.ow([this,this.Ew],this);},AD1:function(E){if(A.z8(this.V$,E))return;this.V$=
E;A.ow([this,this.Ew],this);},_Init:function(aArg){C.Ane._Init.call(this,aArg);this.
__proto__=C.ABw;},_Mark:function(D){var B;C.Ane._Mark.call(this,D);if((B=this.Av6
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av5)&&(B._cycle!=D))B._Mark(B._cycle=
D);},_className:"WidgetSet::HorizontalValueBarConfig"};C.ASK={Aur:null,Auq:null,
AtK:null,AtN:null,AtM:null,AtL:null,AtG:null,AtJ:null,AtI:null,AtH:null,AO6:0xFF000000
,AO9:0xFF000000,AO8:0xFF000000,AO7:0xFF000000,AO2:0xFF000000,AO5:0xFF000000,AO4:
0xFF000000,AO3:0xFF000000,AO1:0,A4j:0xFFFFFFFF,A4m:0xFFFFFFFF,A4l:0xFFFFFFFF,A4k:
0xFFFFFFFF,A4f:0xFFFFFFFF,A4i:0xFFFFFFFF,A4h:0xFFFFFFFF,A4g:0xFFFFFFFF,A4e:0,AO0:
0x12,A4d:0x12,AMb:0x3F,AMg:-1,AMj:-1,AMi:-1,AMh:-1,AMc:-1,AMf:-1,AMe:-1,AMd:-1,V$:
A.vw,Bju:function(E){if(this.AO6===E)return;this.AO6=E;A.ow([this,this.Ew],this);
},Bjx:function(E){if(this.AO9===E)return;this.AO9=E;A.ow([this,this.Ew],this);},
Bjw:function(E){if(this.AO8===E)return;this.AO8=E;A.ow([this,this.Ew],this);},Bjv:
function(E){if(this.AO7===E)return;this.AO7=E;A.ow([this,this.Ew],this);},Bjp:function(
E){if(this.AO2===E)return;this.AO2=E;A.ow([this,this.Ew],this);},Bjs:function(E){
if(this.AO5===E)return;this.AO5=E;A.ow([this,this.Ew],this);},Bjr:function(E){if(
this.AO4===E)return;this.AO4=E;A.ow([this,this.Ew],this);},Bjq:function(E){if(this.
AO3===E)return;this.AO3=E;A.ow([this,this.Ew],this);},Bjo:function(E){if(this.AO1===
E)return;this.AO1=E;A.ow([this,this.Ew],this);},Bjf:function(E){if(this.A4j===E)
return;this.A4j=E;A.ow([this,this.Ew],this);},Bji:function(E){if(this.A4m===E)return;
this.A4m=E;A.ow([this,this.Ew],this);},Bjh:function(E){if(this.A4l===E)return;this.
A4l=E;A.ow([this,this.Ew],this);},Bjg:function(E){if(this.A4k===E)return;this.A4k=
E;A.ow([this,this.Ew],this);},Bjb:function(E){if(this.A4f===E)return;this.A4f=E;
A.ow([this,this.Ew],this);},Bje:function(E){if(this.A4i===E)return;this.A4i=E;A.
ow([this,this.Ew],this);},Bjd:function(E){if(this.A4h===E)return;this.A4h=E;A.ow([
this,this.Ew],this);},Bjc:function(E){if(this.A4g===E)return;this.A4g=E;A.ow([this
,this.Ew],this);},Bja:function(E){if(this.A4e===E)return;this.A4e=E;A.ow([this,this.
Ew],this);},Bjn:function(E){if(this.AO0===E)return;this.AO0=E;A.ow([this,this.Ew
],this);},Bjy:function(E){if(this.Aur===E)return;this.Aur=E;A.ow([this,this.Ew],
this);},Bjt:function(E){if(this.Auq===E)return;this.Auq=E;A.ow([this,this.Ew],this
);},Bi_:function(E){if(this.A4d===E)return;this.A4d=E;A.ow([this,this.Ew],this);
},BiK:function(E){if(this.AMb===E)return;this.AMb=E;A.ow([this,this.Ew],this);},
BiX:function(E){if(this.AMg===E)return;this.AMg=E;A.ow([this,this.Ew],this);},Bi0:
function(E){if(this.AMj===E)return;this.AMj=E;A.ow([this,this.Ew],this);},BiZ:function(
E){if(this.AMi===E)return;this.AMi=E;A.ow([this,this.Ew],this);},BiY:function(E){
if(this.AMh===E)return;this.AMh=E;A.ow([this,this.Ew],this);},BiT:function(E){if(
this.AtK===E)return;this.AtK=E;A.ow([this,this.Ew],this);},BiW:function(E){if(this.
AtN===E)return;this.AtN=E;A.ow([this,this.Ew],this);},BiV:function(E){if(this.AtM===
E)return;this.AtM=E;A.ow([this,this.Ew],this);},BiU:function(E){if(this.AtL===E)
return;this.AtL=E;A.ow([this,this.Ew],this);},BiP:function(E){if(this.AMc===E)return;
this.AMc=E;A.ow([this,this.Ew],this);},BiS:function(E){if(this.AMf===E)return;this.
AMf=E;A.ow([this,this.Ew],this);},BiR:function(E){if(this.AMe===E)return;this.AMe=
E;A.ow([this,this.Ew],this);},BiQ:function(E){if(this.AMd===E)return;this.AMd=E;
A.ow([this,this.Ew],this);},BiL:function(E){if(this.AtG===E)return;this.AtG=E;A.
ow([this,this.Ew],this);},BiO:function(E){if(this.AtJ===E)return;this.AtJ=E;A.ow([
this,this.Ew],this);},BiN:function(E){if(this.AtI===E)return;this.AtI=E;A.ow([this
,this.Ew],this);},BiM:function(E){if(this.AtH===E)return;this.AtH=E;A.ow([this,this.
Ew],this);},AD1:function(E){if(A.z8(this.V$,E))return;this.V$=E;A.ow([this,this.
Ew],this);},_Init:function(aArg){C.Ane._Init.call(this,aArg);this.__proto__=C.ASK;
},_Mark:function(D){var B;C.Ane._Mark.call(this,D);if((B=this.Aur)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Auq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AtK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtN)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AtM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtL)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AtG)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AtJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtI)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AtH)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::ToggleButtonConfig"};C.Ane={Ew:function(H){A.vv(this,0);},_Init:function(
aArg){this.__proto__=C.Ane;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"WidgetSet::WidgetConfig"
};C.ABv={KO:null,KN:null,Appearance:null,MV:null,Ahv:0,FS:100,Gc:0,AJ:50,Bcu:true
,G:function(E){var B;if(!!this.Appearance){var AxG=[E[2]-E[0],E[3]-E[1]];var Oc=
AxG;if(Oc[0]<this.Appearance.V$[0])Oc=[this.Appearance.V$[0],Oc[1]];if(Oc[1]<this.
Appearance.V$[1])Oc=[Oc[0],this.Appearance.V$[1]];var GW=A.aaj(Oc,AxG);if(!!GW[0
]){var HK=((this.Pu&0x4)===0x4);var HL=((this.Pu&0x8)===0x8);if(HK&&!HL)E=A.aaQ(
E,E[2]+GW[0]);else if(!HK&&HL)E=[].concat(E[0]-GW[0],E.slice(1,4));else{E=[].concat(
E[0]-((GW[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+Oc[0]);}}if(!!GW[1]){var HM=((this.
Pu&0x10)===0x10);var HJ=((this.Pu&0x20)===0x20);if(HM&&!HJ)E=[].concat(E.slice(0
,3),E[3]+GW[1]);else if(!HM&&HJ)E=A.aaS(E,E[1]-GW[1]);else{E=A.aaS(E,E[1]-((GW[1
]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oc[1]);}}}A.Core.O.G.call(this,E);},Ag:function(
Ae){var B;A.Core.O.Ag.call(this,Ae);var BaF=!!this.Appearance&&!!this.Appearance.
Av5;var BaG=!!this.Appearance&&!!this.Appearance.Av6;var AoR=false;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(BaF&&!this.KN){this.KN=A._NewObject(A.abh.NH,0);
this.J(this.KN,0);AoR=true;}else if(!BaF&&!!this.KN){this.HG(this.KN);this.KN=null;
}if(BaG&&!this.KO){this.KO=A._NewObject(A.abh.NH,0);this.J(this.KO,0);AoR=true;}
else if(!BaG&&!!this.KO){this.HG(this.KO);this.KO=null;}if(AoR){if(!!this.KN)this.
QG(this.KN);if(!!this.KO)this.QG(this.KO);}if(!!this.KN){this.KN.At(this.Appearance.
Av5);this.KN.L(this.Appearance.ASR);this.KN.A6G(0x1B);if(this.Appearance.AE2<0){
this.KN.Yz(true);this.KN.Ct(0);}else{this.KN.Yz(false);this.KN.Ct(this.Appearance.
AE2);}}if(!!this.KO){this.KO.At(this.Appearance.Av6);this.KO.L(0xFFFFFFFF);this.
KO.A6G(0x1E);if(this.Appearance.AE3<0){this.KO.Yz(true);this.KO.Ct(0);}else{this.
KO.Yz(false);this.KO.Ct(this.Appearance.AE3);}}var pos=((AD[2]-AD[0])*this.Ahv)|
0;if(pos<0)pos=0;if(pos>(AD[2]-AD[0]))pos=AD[2]-AD[0];if(!!this.KN&&!!this.KN.Aj
){var s=this.KN.Aj.FrameSize;this.KN.G([0,(((AD[3]-AD[1])/2)|0)-((s[1]/2)|0),pos
,((((AD[3]-AD[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.KN.A6U([(AD[2]-AD[0])-((s[0]/3
)|0),this.KN.Amq[1]]);this.KN.X(true);}if(!!this.KO&&!!this.KO.Aj){var s=this.KO.
Aj.FrameSize;this.KO.G([pos,(((AD[3]-AD[1])/2)|0)-((s[1]/2)|0),AD[2]-AD[0],((((AD[
3]-AD[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.KO.A6U([(AD[2]-AD[0])-((s[0]/3)|0),this.
KO.Amq[1]]);this.KO.X(true);}},AIL:function(H){var Asy=this.Ahv;var AJc=0;if(!!this.
Appearance)AJc=this.Appearance.ASo;if(this.Bcu&&(this.FS!==this.Gc)){this.Ahv=-this.
Gc/(this.FS-this.Gc);Asy=this.Ahv;this.Bcu=false;}if(this.FS!==this.Gc)Asy=(this.
Tz()-this.Gc)/(this.FS-this.Gc);if(Asy===this.Ahv)return;this.MV.Ap(false);if(AJc<=
0){this.Ahv=Asy;this.Am();return;}var AIS=Asy-this.Ahv;if(AIS<0)AIS=-AIS;this.MV.
VN(14);this.MV.Cv=this.Ahv;this.MV.B0=Asy;this.MV.Fz((10+((AJc/2)|0))+((((AJc*AIS
)|0)/2)|0));this.MV.Ap(true);},Bwj:function(H){},Bwm:function(H){this.Ahv=this.MV.
A4;this.Am();},Aoz:function(H){A.ow([this,this.AIL],this);if(!!this.Appearance)this.
G(this.M);this.Am();},Fa:function(E){if(this.FS===E)return;this.FS=E;A.ow([this,
this.AIL],this);},GA:function(E){if(this.Gc===E)return;this.Gc=E;A.ow([this,this.
AIL],this);},Tz:function(){var E=this.AJ;if(this.Gc>this.FS){if(E<this.FS)E=this.
FS;if(E>this.Gc)E=this.Gc;}else{if(E<this.Gc)E=this.Gc;if(E>this.FS)E=this.FS;}return E;
},Bx:function(E){if(this.AJ===E)return;this.AJ=E;A.ow([this,this.AIL],this);},OnSetAppearance:
function(E){if(this.Appearance===E)return;if(!!this.Appearance)A.zl([this,this.Aoz
],this.Appearance,0);this.Appearance=E;if(!!E)A.y_([this,this.Aoz],E,0);A.ow([this
,this.Aoz],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abm.MV.
_Init.call(this.MV={I:this},0);this.__proto__=C.ABv;this.G(B_);this.MV.VN(14);this.
MV.IF(1);this.MV.R5=[this,this.Bwj];this.MV.Agw=[this,this.Bwm];},_Done:function(
){this.__proto__=A.Core.O;this.MV._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.MV._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.KO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
KN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.MV)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"
};C.TX={O5:null,SJ:null,Appearance:null,Q:null,Bj:null,Dh:null,CV:null,AB5:A.jm,
AB4:A.jm,A0F:0,UZ:false,G:function(E){var B;if(!!this.Appearance){var AxG=[E[2]-
E[0],E[3]-E[1]];var Oc=AxG;if(Oc[0]<this.Appearance.V$[0])Oc=[this.Appearance.V$[
0],Oc[1]];if(Oc[1]<this.Appearance.V$[1])Oc=[Oc[0],this.Appearance.V$[1]];var GW=
A.aaj(Oc,AxG);if(!!GW[0]){var HK=((this.Pu&0x4)===0x4);var HL=((this.Pu&0x8)===0x8
);if(HK&&!HL)E=A.aaQ(E,E[2]+GW[0]);else if(!HK&&HL)E=[].concat(E[0]-GW[0],E.slice(
1,4));else{E=[].concat(E[0]-((GW[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+Oc[0]);}}
if(!!GW[1]){var HM=((this.Pu&0x10)===0x10);var HJ=((this.Pu&0x20)===0x20);if(HM&&
!HJ)E=[].concat(E.slice(0,3),E[3]+GW[1]);else if(!HM&&HJ)E=A.aaS(E,E[1]-GW[1]);else{
E=A.aaS(E,E[1]-((GW[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oc[1]);}}}A.Core.O.G.
call(this,E);},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);var BaD=!!this.Appearance&&(((((((
!!this.Appearance.AtH||!!this.Appearance.AtI)||!!this.Appearance.AtJ)||!!this.Appearance.
AtG)||!!this.Appearance.AtL)||!!this.Appearance.AtM)||!!this.Appearance.AtN)||!!
this.Appearance.AtK);var BaE=!!this.Appearance&&(((this.AB4!==A.jm)&&!!this.Appearance.
Auq)||((this.AB5!==A.jm)&&!!this.Appearance.Aur));var AoR=false;var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(BaD&&!this.SJ){this.SJ=A._NewObject(A.abh.NH,0);this.J(
this.SJ,0);AoR=true;}else if(!BaD&&!!this.SJ){this.HG(this.SJ);this.SJ=null;}if(
BaE&&!this.O5){this.O5=A._NewObject(A.abh.Text,0);this.J(this.O5,0);AoR=true;this.
O5.BiD(true);}else if(!BaE&&!!this.O5){this.HG(this.O5);this.O5=null;}if(AoR){if(
!!this.SJ)this.QG(this.SJ);if(!!this.O5)this.QG(this.O5);}var FI=((Ae&0x10)===0x10
);var GY=((Ae&0x40)===0x40);var Fd=((this.CV.Down&&this.CV.XT)||this.Dh.Down)||this.
Bj.Bw;var Asq=this.UZ;if(!!this.SJ){var bitmap;var ZD;var EM=this.Appearance.AMb;
var AM=AD;if(Asq){if(!FI){bitmap=this.Appearance.AtM;ZD=this.Appearance.AMi;}else
if(Fd){bitmap=this.Appearance.AtK;ZD=this.Appearance.AMg;}else if(GY){bitmap=this.
Appearance.AtN;ZD=this.Appearance.AMj;}else{bitmap=this.Appearance.AtL;ZD=this.Appearance.
AMh;}}else if(!FI){bitmap=this.Appearance.AtI;ZD=this.Appearance.AMe;}else if(Fd
){bitmap=this.Appearance.AtG;ZD=this.Appearance.AMc;}else if(GY){bitmap=this.Appearance.
AtJ;ZD=this.Appearance.AMf;}else{bitmap=this.Appearance.AtH;ZD=this.Appearance.AMd;
}this.SJ.Yz(ZD<0);this.SJ.L(0xFFFFFFFF);if(ZD<0)ZD=0;if(!!bitmap&&!((EM&0x1)===0x1
)){var HK=((EM&0x4)===0x4);var HL=((EM&0x8)===0x8);var BU=bitmap.FrameSize[0];if(
HK&&!HL)AM=A.aaQ(AM,AM[0]+BU);else if(!HK&&HL)AM=[].concat(AM[2]-BU,AM.slice(1,4
));else{AM=[].concat((((AM[2]-AM[0])/2)|0)-((BU/2)|0),AM.slice(1,4));AM=A.aaQ(AM
,AM[0]+BU);}}if(!!bitmap&&!((EM&0x2)===0x2)){var HM=((EM&0x10)===0x10);var HJ=((
EM&0x20)===0x20);var BL=bitmap.FrameSize[1];if(HM&&!HJ)AM=[].concat(AM.slice(0,3
),AM[1]+BL);else if(!HM&&HJ)AM=A.aaS(AM,AM[3]-BL);else{AM=A.aaS(AM,(((AM[3]-AM[1
])/2)|0)-((BL/2)|0));AM=[].concat(AM.slice(0,3),AM[1]+BL);}}this.SJ.Ct(ZD);this.
SJ.At(bitmap);this.SJ.G(AM);}if(!!this.O5){var Ahu;var font;var AZS;if(Asq){font=
this.Appearance.Aur;AZS=this.AB5;if(!FI)Ahu=this.Appearance.AO8;else if(Fd)Ahu=this.
Appearance.AO6;else if(GY)Ahu=this.Appearance.AO9;else Ahu=this.Appearance.AO7;}
else{font=this.Appearance.Auq;AZS=this.AB4;if(!FI)Ahu=this.Appearance.AO4;else if(
Fd)Ahu=this.Appearance.AO2;else if(GY)Ahu=this.Appearance.AO5;else Ahu=this.Appearance.
AO3;}this.O5.G([AD[0]+this.Appearance.AO1,AD[1],AD[2],AD[3]]);this.O5.A2(this.Appearance.
AO0);this.O5.Aa(font);this.O5.R(AZS);this.O5.L(Ahu);this.O5.KD(true);this.O5.BiC(
true);}},Aoz:function(H){var BaP=this.Dh.Filter;this.Dh.Filter=149;if(!BaP&&!!this.
Dh.Filter)this.C4(0x4,0x0);if(!!BaP&&!this.Dh.Filter)this.C4(0x0,0x4);if(!!this.
Appearance)this.G(this.M);this.Am();},OY:function(H){var F;if(!!this.Q)this.Aqo((
F=this.Q,F[1].call(F[0])));},PZ:function(H){var F;this.Am();this.Aqo(!this.UZ);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.UZ));A.aat(this.Q,0);}},BwI:function(H){
var F;var AoM=0;if(!!this.Appearance)AoM=50;this.CV.Ap(true);this.Am();if(((this.
Dh.Bu-this.A0F)|0)>=AoM){this.Aqo(!this.UZ);if(!!this.Q){(F=this.Q,F[2].call(F[0
],this.UZ));A.aat(this.Q,0);}}else{this.Bj.VL(AoM-((this.Dh.Bu-this.A0F)|0));this.
Bj.Ap(true);}},AhX:function(H){var F;this.CV.Ap(false);this.Am();if(this.Bj.Bw){
this.Bj.Ap(false);this.Aqo(!this.UZ);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.
UZ));A.aat(this.Q,0);}}this.A0F=this.Dh.Bu;},Bwq:function(H){this.Am();},Bwl:function(
H){this.Am();},AyM:function(H){var F;var AoM=0;if(!!this.Appearance)AoM=50;this.
Dh.Bw=true;if(!this.CV.XT)return;if(this.CV.NA)return;if(this.CV.Jk>=AoM){this.Aqo(
!this.UZ);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.UZ));A.aat(this.Q,0);}}else{
this.Bj.VL(AoM-this.CV.Jk);this.Bj.Ap(true);}},AyL:function(H){var F;this.Dh.Bw=
false;if(this.Bj.Bw){this.Bj.Ap(false);this.Aqo(!this.UZ);if(!!this.Q){(F=this.Q
,F[2].call(F[0],this.UZ));A.aat(this.Q,0);}}},Au:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.OY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.OY],E,
0);if(!!E)A.ow([this,this.OY],this);},Aqo:function(E){if(this.UZ===E)return;this.
UZ=E;this.Am();},A6S:function(E){if((E===this.AB4)&&(E===this.AB5))return;this.AB4=
E;this.AB5=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===E)return;
if(!!this.Appearance)A.zl([this,this.Aoz],this.Appearance,0);this.Appearance=E;if(
!!E)A.y_([this,this.Aoz],E,0);A.ow([this,this.Aoz],this);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.
BR._Init.call(this.Dh={I:this},0);A.Core.Bh._Init.call(this.CV={I:this},0);this.
__proto__=C.TX;this.G(BH);this.Bj.Qz(0);this.Bj.VL(50);this.Dh.Filter=149;this.CV.
AV(0x3F);this.CV.KB(EV);this.CV.KA(GS);this.CV.DN(Jt);this.CV.D5(IL);this.CV.BjR(
16);this.CV.ADo(100);this.J(this.CV,0);this.Bj.M8=[this,this.PZ];this.Dh.K$=[this
,this.BwI];this.Dh.BS=[this,this.AhX];this.CV.ACL=[this,this.Bwq];this.CV.Auy=[this
,this.Bwl];this.CV.K$=[this,this.AyM];this.CV.BS=[this,this.AyL];},_Done:function(
){this.__proto__=A.Core.O;this.Bj._Done();this.Dh._Done();this.CV._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bj._ReInit(
);this.Dh._ReInit();this.CV._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.O5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SJ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CV)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ABw.__proto__=C.Ane;C.ASK.__proto__=C.Ane;C.ABv.__proto__=A.
Core.O;C.TX.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){var B;if((
B=C.Ada[0]._this)&&(B._cycle!=D))B._Done(C.Ada[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */