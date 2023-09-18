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
var B$=[0,0,200,50];var BH=[0,0,150,50];var EV=[0,50];var GT=[150,50];var Jt=[150
,0];var IL=[0,0];
C.Ada={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A.cC,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:null}};C.ABx={Av9:
null,Av8:null,ASl:500,AE3:-1,ASO:0xFFFFFFFF,AE2:-1,Wa:A.vw,Bj4:function(E){if(this.
ASl===E)return;this.ASl=E;A.ow([this,this.Ew],this);},A7n:function(E){if(this.AE3===
E)return;this.AE3=E;A.ow([this,this.Ew],this);},A7m:function(E){if(this.Av9===E)
return;this.Av9=E;A.ow([this,this.Ew],this);},A7l:function(E){if(this.ASO===E)return;
this.ASO=E;A.ow([this,this.Ew],this);},A7k:function(E){if(this.AE2===E)return;this.
AE2=E;A.ow([this,this.Ew],this);},A7j:function(E){if(this.Av8===E)return;this.Av8=
E;A.ow([this,this.Ew],this);},AD1:function(E){if(A.z8(this.Wa,E))return;this.Wa=
E;A.ow([this,this.Ew],this);},_Init:function(aArg){C.Anf._Init.call(this,aArg);this.
__proto__=C.ABx;},_Mark:function(D){var B;C.Anf._Mark.call(this,D);if((B=this.Av9
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av8)&&(B._cycle!=D))B._Mark(B._cycle=
D);},_className:"WidgetSet::HorizontalValueBarConfig"};C.ASH={Aut:null,Aus:null,
AtM:null,AtP:null,AtO:null,AtN:null,AtI:null,AtL:null,AtK:null,AtJ:null,AO3:0xFF000000
,AO6:0xFF000000,AO5:0xFF000000,AO4:0xFF000000,AOZ:0xFF000000,AO2:0xFF000000,AO1:
0xFF000000,AO0:0xFF000000,AOY:0,A4l:0xFFFFFFFF,A4o:0xFFFFFFFF,A4n:0xFFFFFFFF,A4m:
0xFFFFFFFF,A4h:0xFFFFFFFF,A4k:0xFFFFFFFF,A4j:0xFFFFFFFF,A4i:0xFFFFFFFF,A4g:0,AOX:
0x12,A4f:0x12,AL_:0x3F,AMd:-1,AMg:-1,AMf:-1,AMe:-1,AL$:-1,AMc:-1,AMb:-1,AMa:-1,Wa:
A.vw,Bjx:function(E){if(this.AO3===E)return;this.AO3=E;A.ow([this,this.Ew],this);
},BjA:function(E){if(this.AO6===E)return;this.AO6=E;A.ow([this,this.Ew],this);},
Bjz:function(E){if(this.AO5===E)return;this.AO5=E;A.ow([this,this.Ew],this);},Bjy:
function(E){if(this.AO4===E)return;this.AO4=E;A.ow([this,this.Ew],this);},Bjs:function(
E){if(this.AOZ===E)return;this.AOZ=E;A.ow([this,this.Ew],this);},Bjv:function(E){
if(this.AO2===E)return;this.AO2=E;A.ow([this,this.Ew],this);},Bju:function(E){if(
this.AO1===E)return;this.AO1=E;A.ow([this,this.Ew],this);},Bjt:function(E){if(this.
AO0===E)return;this.AO0=E;A.ow([this,this.Ew],this);},Bjr:function(E){if(this.AOY===
E)return;this.AOY=E;A.ow([this,this.Ew],this);},Bji:function(E){if(this.A4l===E)
return;this.A4l=E;A.ow([this,this.Ew],this);},Bjl:function(E){if(this.A4o===E)return;
this.A4o=E;A.ow([this,this.Ew],this);},Bjk:function(E){if(this.A4n===E)return;this.
A4n=E;A.ow([this,this.Ew],this);},Bjj:function(E){if(this.A4m===E)return;this.A4m=
E;A.ow([this,this.Ew],this);},Bje:function(E){if(this.A4h===E)return;this.A4h=E;
A.ow([this,this.Ew],this);},Bjh:function(E){if(this.A4k===E)return;this.A4k=E;A.
ow([this,this.Ew],this);},Bjg:function(E){if(this.A4j===E)return;this.A4j=E;A.ow([
this,this.Ew],this);},Bjf:function(E){if(this.A4i===E)return;this.A4i=E;A.ow([this
,this.Ew],this);},Bjd:function(E){if(this.A4g===E)return;this.A4g=E;A.ow([this,this.
Ew],this);},Bjq:function(E){if(this.AOX===E)return;this.AOX=E;A.ow([this,this.Ew
],this);},BjB:function(E){if(this.Aut===E)return;this.Aut=E;A.ow([this,this.Ew],
this);},Bjw:function(E){if(this.Aus===E)return;this.Aus=E;A.ow([this,this.Ew],this
);},Bjb:function(E){if(this.A4f===E)return;this.A4f=E;A.ow([this,this.Ew],this);
},BiN:function(E){if(this.AL_===E)return;this.AL_=E;A.ow([this,this.Ew],this);},
Bi0:function(E){if(this.AMd===E)return;this.AMd=E;A.ow([this,this.Ew],this);},Bi3:
function(E){if(this.AMg===E)return;this.AMg=E;A.ow([this,this.Ew],this);},Bi2:function(
E){if(this.AMf===E)return;this.AMf=E;A.ow([this,this.Ew],this);},Bi1:function(E){
if(this.AMe===E)return;this.AMe=E;A.ow([this,this.Ew],this);},BiW:function(E){if(
this.AtM===E)return;this.AtM=E;A.ow([this,this.Ew],this);},BiZ:function(E){if(this.
AtP===E)return;this.AtP=E;A.ow([this,this.Ew],this);},BiY:function(E){if(this.AtO===
E)return;this.AtO=E;A.ow([this,this.Ew],this);},BiX:function(E){if(this.AtN===E)
return;this.AtN=E;A.ow([this,this.Ew],this);},BiS:function(E){if(this.AL$===E)return;
this.AL$=E;A.ow([this,this.Ew],this);},BiV:function(E){if(this.AMc===E)return;this.
AMc=E;A.ow([this,this.Ew],this);},BiU:function(E){if(this.AMb===E)return;this.AMb=
E;A.ow([this,this.Ew],this);},BiT:function(E){if(this.AMa===E)return;this.AMa=E;
A.ow([this,this.Ew],this);},BiO:function(E){if(this.AtI===E)return;this.AtI=E;A.
ow([this,this.Ew],this);},BiR:function(E){if(this.AtL===E)return;this.AtL=E;A.ow([
this,this.Ew],this);},BiQ:function(E){if(this.AtK===E)return;this.AtK=E;A.ow([this
,this.Ew],this);},BiP:function(E){if(this.AtJ===E)return;this.AtJ=E;A.ow([this,this.
Ew],this);},AD1:function(E){if(A.z8(this.Wa,E))return;this.Wa=E;A.ow([this,this.
Ew],this);},_Init:function(aArg){C.Anf._Init.call(this,aArg);this.__proto__=C.ASH;
},_Mark:function(D){var B;C.Anf._Mark.call(this,D);if((B=this.Aut)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Aus)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AtM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtP)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AtO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtN)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AtI)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AtL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtK)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AtJ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::ToggleButtonConfig"};C.Anf={Ew:function(H){A.vv(this,0);},_Init:function(
aArg){this.__proto__=C.Anf;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"WidgetSet::WidgetConfig"
};C.ABw={KO:null,KN:null,Appearance:null,MX:null,Ahw:0,FT:100,Gc:0,AJ:50,Bcw:true
,G:function(E){var B;if(!!this.Appearance){var AxI=[E[2]-E[0],E[3]-E[1]];var Oc=
AxI;if(Oc[0]<this.Appearance.Wa[0])Oc=[this.Appearance.Wa[0],Oc[1]];if(Oc[1]<this.
Appearance.Wa[1])Oc=[Oc[0],this.Appearance.Wa[1]];var GX=A.aaj(Oc,AxI);if(!!GX[0
]){var HL=((this.Pu&0x4)===0x4);var HM=((this.Pu&0x8)===0x8);if(HL&&!HM)E=A.aaQ(
E,E[2]+GX[0]);else if(!HL&&HM)E=[].concat(E[0]-GX[0],E.slice(1,4));else{E=[].concat(
E[0]-((GX[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+Oc[0]);}}if(!!GX[1]){var HN=((this.
Pu&0x10)===0x10);var HK=((this.Pu&0x20)===0x20);if(HN&&!HK)E=[].concat(E.slice(0
,3),E[3]+GX[1]);else if(!HN&&HK)E=A.aaS(E,E[1]-GX[1]);else{E=A.aaS(E,E[1]-((GX[1
]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oc[1]);}}}A.Core.O.G.call(this,E);},Ag:function(
Ae){var B;A.Core.O.Ag.call(this,Ae);var BaH=!!this.Appearance&&!!this.Appearance.
Av8;var BaI=!!this.Appearance&&!!this.Appearance.Av9;var AoR=false;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(BaH&&!this.KN){this.KN=A._NewObject(A.abh.NI,0);
this.J(this.KN,0);AoR=true;}else if(!BaH&&!!this.KN){this.HH(this.KN);this.KN=null;
}if(BaI&&!this.KO){this.KO=A._NewObject(A.abh.NI,0);this.J(this.KO,0);AoR=true;}
else if(!BaI&&!!this.KO){this.HH(this.KO);this.KO=null;}if(AoR){if(!!this.KN)this.
QI(this.KN);if(!!this.KO)this.QI(this.KO);}if(!!this.KN){this.KN.At(this.Appearance.
Av8);this.KN.L(this.Appearance.ASO);this.KN.A6I(0x1B);if(this.Appearance.AE2<0){
this.KN.YB(true);this.KN.Ct(0);}else{this.KN.YB(false);this.KN.Ct(this.Appearance.
AE2);}}if(!!this.KO){this.KO.At(this.Appearance.Av9);this.KO.L(0xFFFFFFFF);this.
KO.A6I(0x1E);if(this.Appearance.AE3<0){this.KO.YB(true);this.KO.Ct(0);}else{this.
KO.YB(false);this.KO.Ct(this.Appearance.AE3);}}var pos=((AD[2]-AD[0])*this.Ahw)|
0;if(pos<0)pos=0;if(pos>(AD[2]-AD[0]))pos=AD[2]-AD[0];if(!!this.KN&&!!this.KN.Aj
){var s=this.KN.Aj.FrameSize;this.KN.G([0,(((AD[3]-AD[1])/2)|0)-((s[1]/2)|0),pos
,((((AD[3]-AD[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.KN.A6W([(AD[2]-AD[0])-((s[0]/3
)|0),this.KN.Amr[1]]);this.KN.X(true);}if(!!this.KO&&!!this.KO.Aj){var s=this.KO.
Aj.FrameSize;this.KO.G([pos,(((AD[3]-AD[1])/2)|0)-((s[1]/2)|0),AD[2]-AD[0],((((AD[
3]-AD[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.KO.A6W([(AD[2]-AD[0])-((s[0]/3)|0),this.
KO.Amr[1]]);this.KO.X(true);}},AII:function(H){var Asz=this.Ahw;var AI$=0;if(!!this.
Appearance)AI$=this.Appearance.ASl;if(this.Bcw&&(this.FT!==this.Gc)){this.Ahw=-this.
Gc/(this.FT-this.Gc);Asz=this.Ahw;this.Bcw=false;}if(this.FT!==this.Gc)Asz=(this.
TB()-this.Gc)/(this.FT-this.Gc);if(Asz===this.Ahw)return;this.MX.Ap(false);if(AI$<=
0){this.Ahw=Asz;this.Am();return;}var AIP=Asz-this.Ahw;if(AIP<0)AIP=-AIP;this.MX.
VN(14);this.MX.Cv=this.Ahw;this.MX.B1=Asz;this.MX.FA((10+((AI$/2)|0))+((((AI$*AIP
)|0)/2)|0));this.MX.Ap(true);},Bwm:function(H){},Bwp:function(H){this.Ahw=this.MX.
A4;this.Am();},Aoz:function(H){A.ow([this,this.AII],this);if(!!this.Appearance)this.
G(this.M);this.Am();},Fa:function(E){if(this.FT===E)return;this.FT=E;A.ow([this,
this.AII],this);},GB:function(E){if(this.Gc===E)return;this.Gc=E;A.ow([this,this.
AII],this);},TB:function(){var E=this.AJ;if(this.Gc>this.FT){if(E<this.FT)E=this.
FT;if(E>this.Gc)E=this.Gc;}else{if(E<this.Gc)E=this.Gc;if(E>this.FT)E=this.FT;}return E;
},Bx:function(E){if(this.AJ===E)return;this.AJ=E;A.ow([this,this.AII],this);},OnSetAppearance:
function(E){if(this.Appearance===E)return;if(!!this.Appearance)A.zl([this,this.Aoz
],this.Appearance,0);this.Appearance=E;if(!!E)A.y_([this,this.Aoz],E,0);A.ow([this
,this.Aoz],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abm.MX.
_Init.call(this.MX={I:this},0);this.__proto__=C.ABw;this.G(B$);this.MX.VN(14);this.
MX.IF(1);this.MX.R5=[this,this.Bwm];this.MX.Agw=[this,this.Bwp];},_Done:function(
){this.__proto__=A.Core.O;this.MX._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.MX._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.KO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
KN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.MX)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"
};C.TZ={O5:null,SJ:null,Appearance:null,Q:null,Bj:null,Dh:null,CV:null,AB6:A.jm,
AB5:A.jm,A0H:0,UZ:false,G:function(E){var B;if(!!this.Appearance){var AxI=[E[2]-
E[0],E[3]-E[1]];var Oc=AxI;if(Oc[0]<this.Appearance.Wa[0])Oc=[this.Appearance.Wa[
0],Oc[1]];if(Oc[1]<this.Appearance.Wa[1])Oc=[Oc[0],this.Appearance.Wa[1]];var GX=
A.aaj(Oc,AxI);if(!!GX[0]){var HL=((this.Pu&0x4)===0x4);var HM=((this.Pu&0x8)===0x8
);if(HL&&!HM)E=A.aaQ(E,E[2]+GX[0]);else if(!HL&&HM)E=[].concat(E[0]-GX[0],E.slice(
1,4));else{E=[].concat(E[0]-((GX[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+Oc[0]);}}
if(!!GX[1]){var HN=((this.Pu&0x10)===0x10);var HK=((this.Pu&0x20)===0x20);if(HN&&
!HK)E=[].concat(E.slice(0,3),E[3]+GX[1]);else if(!HN&&HK)E=A.aaS(E,E[1]-GX[1]);else{
E=A.aaS(E,E[1]-((GX[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oc[1]);}}}A.Core.O.G.
call(this,E);},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);var BaF=!!this.Appearance&&(((((((
!!this.Appearance.AtJ||!!this.Appearance.AtK)||!!this.Appearance.AtL)||!!this.Appearance.
AtI)||!!this.Appearance.AtN)||!!this.Appearance.AtO)||!!this.Appearance.AtP)||!!
this.Appearance.AtM);var BaG=!!this.Appearance&&(((this.AB5!==A.jm)&&!!this.Appearance.
Aus)||((this.AB6!==A.jm)&&!!this.Appearance.Aut));var AoR=false;var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(BaF&&!this.SJ){this.SJ=A._NewObject(A.abh.NI,0);this.J(
this.SJ,0);AoR=true;}else if(!BaF&&!!this.SJ){this.HH(this.SJ);this.SJ=null;}if(
BaG&&!this.O5){this.O5=A._NewObject(A.abh.Text,0);this.J(this.O5,0);AoR=true;this.
O5.BiG(true);}else if(!BaG&&!!this.O5){this.HH(this.O5);this.O5=null;}if(AoR){if(
!!this.SJ)this.QI(this.SJ);if(!!this.O5)this.QI(this.O5);}var FJ=((Ae&0x10)===0x10
);var GZ=((Ae&0x40)===0x40);var Fd=((this.CV.Down&&this.CV.XV)||this.Dh.Down)||this.
Bj.Bw;var Asr=this.UZ;if(!!this.SJ){var bitmap;var ZF;var EM=this.Appearance.AL_;
var AM=AD;if(Asr){if(!FJ){bitmap=this.Appearance.AtO;ZF=this.Appearance.AMf;}else
if(Fd){bitmap=this.Appearance.AtM;ZF=this.Appearance.AMd;}else if(GZ){bitmap=this.
Appearance.AtP;ZF=this.Appearance.AMg;}else{bitmap=this.Appearance.AtN;ZF=this.Appearance.
AMe;}}else if(!FJ){bitmap=this.Appearance.AtK;ZF=this.Appearance.AMb;}else if(Fd
){bitmap=this.Appearance.AtI;ZF=this.Appearance.AL$;}else if(GZ){bitmap=this.Appearance.
AtL;ZF=this.Appearance.AMc;}else{bitmap=this.Appearance.AtJ;ZF=this.Appearance.AMa;
}this.SJ.YB(ZF<0);this.SJ.L(0xFFFFFFFF);if(ZF<0)ZF=0;if(!!bitmap&&!((EM&0x1)===0x1
)){var HL=((EM&0x4)===0x4);var HM=((EM&0x8)===0x8);var BU=bitmap.FrameSize[0];if(
HL&&!HM)AM=A.aaQ(AM,AM[0]+BU);else if(!HL&&HM)AM=[].concat(AM[2]-BU,AM.slice(1,4
));else{AM=[].concat((((AM[2]-AM[0])/2)|0)-((BU/2)|0),AM.slice(1,4));AM=A.aaQ(AM
,AM[0]+BU);}}if(!!bitmap&&!((EM&0x2)===0x2)){var HN=((EM&0x10)===0x10);var HK=((
EM&0x20)===0x20);var BL=bitmap.FrameSize[1];if(HN&&!HK)AM=[].concat(AM.slice(0,3
),AM[1]+BL);else if(!HN&&HK)AM=A.aaS(AM,AM[3]-BL);else{AM=A.aaS(AM,(((AM[3]-AM[1
])/2)|0)-((BL/2)|0));AM=[].concat(AM.slice(0,3),AM[1]+BL);}}this.SJ.Ct(ZF);this.
SJ.At(bitmap);this.SJ.G(AM);}if(!!this.O5){var Ahv;var font;var AZU;if(Asr){font=
this.Appearance.Aut;AZU=this.AB6;if(!FJ)Ahv=this.Appearance.AO5;else if(Fd)Ahv=this.
Appearance.AO3;else if(GZ)Ahv=this.Appearance.AO6;else Ahv=this.Appearance.AO4;}
else{font=this.Appearance.Aus;AZU=this.AB5;if(!FJ)Ahv=this.Appearance.AO1;else if(
Fd)Ahv=this.Appearance.AOZ;else if(GZ)Ahv=this.Appearance.AO2;else Ahv=this.Appearance.
AO0;}this.O5.G([AD[0]+this.Appearance.AOY,AD[1],AD[2],AD[3]]);this.O5.A2(this.Appearance.
AOX);this.O5.Aa(font);this.O5.R(AZU);this.O5.L(Ahv);this.O5.KD(true);this.O5.BiF(
true);}},Aoz:function(H){var BaR=this.Dh.Filter;this.Dh.Filter=149;if(!BaR&&!!this.
Dh.Filter)this.C4(0x4,0x0);if(!!BaR&&!this.Dh.Filter)this.C4(0x0,0x4);if(!!this.
Appearance)this.G(this.M);this.Am();},OY:function(H){var F;if(!!this.Q)this.Aqo((
F=this.Q,F[1].call(F[0])));},P0:function(H){var F;this.Am();this.Aqo(!this.UZ);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.UZ));A.aat(this.Q,0);}},BwL:function(H){
var F;var AoM=0;if(!!this.Appearance)AoM=50;this.CV.Ap(true);this.Am();if(((this.
Dh.Bu-this.A0H)|0)>=AoM){this.Aqo(!this.UZ);if(!!this.Q){(F=this.Q,F[2].call(F[0
],this.UZ));A.aat(this.Q,0);}}else{this.Bj.VL(AoM-((this.Dh.Bu-this.A0H)|0));this.
Bj.Ap(true);}},AhY:function(H){var F;this.CV.Ap(false);this.Am();if(this.Bj.Bw){
this.Bj.Ap(false);this.Aqo(!this.UZ);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.
UZ));A.aat(this.Q,0);}}this.A0H=this.Dh.Bu;},Bwt:function(H){this.Am();},Bwo:function(
H){this.Am();},AyN:function(H){var F;var AoM=0;if(!!this.Appearance)AoM=50;this.
Dh.Bw=true;if(!this.CV.XV)return;if(this.CV.NB)return;if(this.CV.Jk>=AoM){this.Aqo(
!this.UZ);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.UZ));A.aat(this.Q,0);}}else{
this.Bj.VL(AoM-this.CV.Jk);this.Bj.Ap(true);}},AyM:function(H){var F;this.Dh.Bw=
false;if(this.Bj.Bw){this.Bj.Ap(false);this.Aqo(!this.UZ);if(!!this.Q){(F=this.Q
,F[2].call(F[0],this.UZ));A.aat(this.Q,0);}}},Au:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.OY],this.Q,0);this.Q=E;if(!!E)A.za([this,this.OY],E,
0);if(!!E)A.ow([this,this.OY],this);},Aqo:function(E){if(this.UZ===E)return;this.
UZ=E;this.Am();},A6U:function(E){if((E===this.AB5)&&(E===this.AB6))return;this.AB5=
E;this.AB6=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===E)return;
if(!!this.Appearance)A.zl([this,this.Aoz],this.Appearance,0);this.Appearance=E;if(
!!E)A.y_([this,this.Aoz],E,0);A.ow([this,this.Aoz],this);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.
BR._Init.call(this.Dh={I:this},0);A.Core.Bh._Init.call(this.CV={I:this},0);this.
__proto__=C.TZ;this.G(BH);this.Bj.QB(0);this.Bj.VL(50);this.Dh.Filter=149;this.CV.
AV(0x3F);this.CV.KB(EV);this.CV.KA(GT);this.CV.DN(Jt);this.CV.D5(IL);this.CV.BjU(
16);this.CV.ADo(100);this.J(this.CV,0);this.Bj.M_=[this,this.P0];this.Dh.K$=[this
,this.BwL];this.Dh.BS=[this,this.AhY];this.CV.ACL=[this,this.Bwt];this.CV.AuA=[this
,this.Bwo];this.CV.K$=[this,this.AyN];this.CV.BS=[this,this.AyM];},_Done:function(
){this.__proto__=A.Core.O;this.Bj._Done();this.Dh._Done();this.CV._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bj._ReInit(
);this.Dh._ReInit();this.CV._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.O5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SJ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CV)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ABx.__proto__=C.Anf;C.ASH.__proto__=C.Anf;C.ABw.__proto__=A.
Core.O;C.TZ.__proto__=A.Core.O;};C._ReInit=function(){};C.DE=function(D){var B;if((
B=C.Ada[0]._this)&&(B._cycle!=D))B._Done(C.Ada[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */