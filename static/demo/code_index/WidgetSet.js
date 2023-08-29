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
var B9=[0,0,200,50];var BG=[0,0,150,50];var EV=[0,50];var GS=[150,50];var Js=[150
,0];var IL=[0,0];
C.Ac3={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A.cC,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:null}};C.ABq={AvW:
null,AvV:null,ASb:500,AET:-1,ASE:0xFFFFFFFF,AES:-1,V7:A.vw,BjG:function(E){if(this.
ASb===E)return;this.ASb=E;A.ow([this,this.Ey],this);},A6Z:function(E){if(this.AET===
E)return;this.AET=E;A.ow([this,this.Ey],this);},A6Y:function(E){if(this.AvW===E)
return;this.AvW=E;A.ow([this,this.Ey],this);},A6X:function(E){if(this.ASE===E)return;
this.ASE=E;A.ow([this,this.Ey],this);},A6W:function(E){if(this.AES===E)return;this.
AES=E;A.ow([this,this.Ey],this);},A6V:function(E){if(this.AvV===E)return;this.AvV=
E;A.ow([this,this.Ey],this);},ADT:function(E){if(A.z8(this.V7,E))return;this.V7=
E;A.ow([this,this.Ey],this);},_Init:function(aArg){C.Am3._Init.call(this,aArg);this.
__proto__=C.ABq;},_Mark:function(D){var B;C.Am3._Mark.call(this,D);if((B=this.AvW
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AvV)&&(B._cycle!=D))B._Mark(B._cycle=
D);},_className:"WidgetSet::HorizontalValueBarConfig"};C.ASx={Auh:null,Aug:null,
AtA:null,AtD:null,AtC:null,AtB:null,Atw:null,Atz:null,Aty:null,Atx:null,AOS:0xFF000000
,AOV:0xFF000000,AOU:0xFF000000,AOT:0xFF000000,AOO:0xFF000000,AOR:0xFF000000,AOQ:
0xFF000000,AOP:0xFF000000,AON:0,A3T:0xFFFFFFFF,A3W:0xFFFFFFFF,A3V:0xFFFFFFFF,A3U:
0xFFFFFFFF,A3P:0xFFFFFFFF,A3S:0xFFFFFFFF,A3R:0xFFFFFFFF,A3Q:0xFFFFFFFF,A3O:0,AOM:
0x12,A3N:0x12,ALX:0x3F,AL2:-1,AL5:-1,AL4:-1,AL3:-1,ALY:-1,AL1:-1,AL0:-1,ALZ:-1,V7:
A.vw,Bja:function(E){if(this.AOS===E)return;this.AOS=E;A.ow([this,this.Ey],this);
},Bjd:function(E){if(this.AOV===E)return;this.AOV=E;A.ow([this,this.Ey],this);},
Bjc:function(E){if(this.AOU===E)return;this.AOU=E;A.ow([this,this.Ey],this);},Bjb:
function(E){if(this.AOT===E)return;this.AOT=E;A.ow([this,this.Ey],this);},Bi7:function(
E){if(this.AOO===E)return;this.AOO=E;A.ow([this,this.Ey],this);},Bi_:function(E){
if(this.AOR===E)return;this.AOR=E;A.ow([this,this.Ey],this);},Bi9:function(E){if(
this.AOQ===E)return;this.AOQ=E;A.ow([this,this.Ey],this);},Bi8:function(E){if(this.
AOP===E)return;this.AOP=E;A.ow([this,this.Ey],this);},Bi6:function(E){if(this.AON===
E)return;this.AON=E;A.ow([this,this.Ey],this);},BiX:function(E){if(this.A3T===E)
return;this.A3T=E;A.ow([this,this.Ey],this);},Bi0:function(E){if(this.A3W===E)return;
this.A3W=E;A.ow([this,this.Ey],this);},BiZ:function(E){if(this.A3V===E)return;this.
A3V=E;A.ow([this,this.Ey],this);},BiY:function(E){if(this.A3U===E)return;this.A3U=
E;A.ow([this,this.Ey],this);},BiT:function(E){if(this.A3P===E)return;this.A3P=E;
A.ow([this,this.Ey],this);},BiW:function(E){if(this.A3S===E)return;this.A3S=E;A.
ow([this,this.Ey],this);},BiV:function(E){if(this.A3R===E)return;this.A3R=E;A.ow([
this,this.Ey],this);},BiU:function(E){if(this.A3Q===E)return;this.A3Q=E;A.ow([this
,this.Ey],this);},BiS:function(E){if(this.A3O===E)return;this.A3O=E;A.ow([this,this.
Ey],this);},Bi5:function(E){if(this.AOM===E)return;this.AOM=E;A.ow([this,this.Ey
],this);},Bje:function(E){if(this.Auh===E)return;this.Auh=E;A.ow([this,this.Ey],
this);},Bi$:function(E){if(this.Aug===E)return;this.Aug=E;A.ow([this,this.Ey],this
);},BiQ:function(E){if(this.A3N===E)return;this.A3N=E;A.ow([this,this.Ey],this);
},Biq:function(E){if(this.ALX===E)return;this.ALX=E;A.ow([this,this.Ey],this);},
BiD:function(E){if(this.AL2===E)return;this.AL2=E;A.ow([this,this.Ey],this);},BiG:
function(E){if(this.AL5===E)return;this.AL5=E;A.ow([this,this.Ey],this);},BiF:function(
E){if(this.AL4===E)return;this.AL4=E;A.ow([this,this.Ey],this);},BiE:function(E){
if(this.AL3===E)return;this.AL3=E;A.ow([this,this.Ey],this);},Biz:function(E){if(
this.AtA===E)return;this.AtA=E;A.ow([this,this.Ey],this);},BiC:function(E){if(this.
AtD===E)return;this.AtD=E;A.ow([this,this.Ey],this);},BiB:function(E){if(this.AtC===
E)return;this.AtC=E;A.ow([this,this.Ey],this);},BiA:function(E){if(this.AtB===E)
return;this.AtB=E;A.ow([this,this.Ey],this);},Biv:function(E){if(this.ALY===E)return;
this.ALY=E;A.ow([this,this.Ey],this);},Biy:function(E){if(this.AL1===E)return;this.
AL1=E;A.ow([this,this.Ey],this);},Bix:function(E){if(this.AL0===E)return;this.AL0=
E;A.ow([this,this.Ey],this);},Biw:function(E){if(this.ALZ===E)return;this.ALZ=E;
A.ow([this,this.Ey],this);},Bir:function(E){if(this.Atw===E)return;this.Atw=E;A.
ow([this,this.Ey],this);},Biu:function(E){if(this.Atz===E)return;this.Atz=E;A.ow([
this,this.Ey],this);},Bit:function(E){if(this.Aty===E)return;this.Aty=E;A.ow([this
,this.Ey],this);},Bis:function(E){if(this.Atx===E)return;this.Atx=E;A.ow([this,this.
Ey],this);},ADT:function(E){if(A.z8(this.V7,E))return;this.V7=E;A.ow([this,this.
Ey],this);},_Init:function(aArg){C.Am3._Init.call(this,aArg);this.__proto__=C.ASx;
},_Mark:function(D){var B;C.Am3._Mark.call(this,D);if((B=this.Auh)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AtA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtD)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AtC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtB)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Atw)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Atz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aty)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Atx)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::ToggleButtonConfig"};C.Am3={Ey:function(H){A.vv(this,0);},_Init:function(
aArg){this.__proto__=C.Am3;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"WidgetSet::WidgetConfig"
};C.ABp={KM:null,KL:null,Appearance:null,MX:null,Ahm:0,FQ:100,Gc:0,AJ:50,Bcc:true
,G:function(E){var B;if(!!this.Appearance){var AxB=[E[2]-E[0],E[3]-E[1]];var Oc=
AxB;if(Oc[0]<this.Appearance.V7[0])Oc=[this.Appearance.V7[0],Oc[1]];if(Oc[1]<this.
Appearance.V7[1])Oc=[Oc[0],this.Appearance.V7[1]];var GW=A.aaj(Oc,AxB);if(!!GW[0
]){var HI=((this.Pt&0x4)===0x4);var HJ=((this.Pt&0x8)===0x8);if(HI&&!HJ)E=A.aaQ(
E,E[2]+GW[0]);else if(!HI&&HJ)E=[].concat(E[0]-GW[0],E.slice(1,4));else{E=[].concat(
E[0]-((GW[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+Oc[0]);}}if(!!GW[1]){var HK=((this.
Pt&0x10)===0x10);var HH=((this.Pt&0x20)===0x20);if(HK&&!HH)E=[].concat(E.slice(0
,3),E[3]+GW[1]);else if(!HK&&HH)E=A.aaS(E,E[1]-GW[1]);else{E=A.aaS(E,E[1]-((GW[1
]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oc[1]);}}}A.Core.O.G.call(this,E);},Ag:function(
Ae){var B;A.Core.O.Ag.call(this,Ae);var Ban=!!this.Appearance&&!!this.Appearance.
AvV;var Bao=!!this.Appearance&&!!this.Appearance.AvW;var AoA=false;var AD=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(Ban&&!this.KL){this.KL=A._NewObject(A.abh.NG,0);
this.J(this.KL,0);AoA=true;}else if(!Ban&&!!this.KL){this.HD(this.KL);this.KL=null;
}if(Bao&&!this.KM){this.KM=A._NewObject(A.abh.NG,0);this.J(this.KM,0);AoA=true;}
else if(!Bao&&!!this.KM){this.HD(this.KM);this.KM=null;}if(AoA){if(!!this.KL)this.
QF(this.KL);if(!!this.KM)this.QF(this.KM);}if(!!this.KL){this.KL.At(this.Appearance.
AvV);this.KL.L(this.Appearance.ASE);this.KL.A6g(0x1B);if(this.Appearance.AES<0){
this.KL.Ys(true);this.KL.Cs(0);}else{this.KL.Ys(false);this.KL.Cs(this.Appearance.
AES);}}if(!!this.KM){this.KM.At(this.Appearance.AvW);this.KM.L(0xFFFFFFFF);this.
KM.A6g(0x1E);if(this.Appearance.AET<0){this.KM.Ys(true);this.KM.Cs(0);}else{this.
KM.Ys(false);this.KM.Cs(this.Appearance.AET);}}var pos=((AD[2]-AD[0])*this.Ahm)|
0;if(pos<0)pos=0;if(pos>(AD[2]-AD[0]))pos=AD[2]-AD[0];if(!!this.KL&&!!this.KL.Aj
){var s=this.KL.Aj.FrameSize;this.KL.G([0,(((AD[3]-AD[1])/2)|0)-((s[1]/2)|0),pos
,((((AD[3]-AD[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.KL.A6v([(AD[2]-AD[0])-((s[0]/3
)|0),this.KL.Amg[1]]);this.KL.X(true);}if(!!this.KM&&!!this.KM.Aj){var s=this.KM.
Aj.FrameSize;this.KM.G([pos,(((AD[3]-AD[1])/2)|0)-((s[1]/2)|0),AD[2]-AD[0],((((AD[
3]-AD[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.KM.A6v([(AD[2]-AD[0])-((s[0]/3)|0),this.
KM.Amg[1]]);this.KM.X(true);}},AIv:function(H){var Aso=this.Ahm;var AIY=0;if(!!this.
Appearance)AIY=this.Appearance.ASb;if(this.Bcc&&(this.FQ!==this.Gc)){this.Ahm=-this.
Gc/(this.FQ-this.Gc);Aso=this.Ahm;this.Bcc=false;}if(this.FQ!==this.Gc)Aso=(this.
Ty()-this.Gc)/(this.FQ-this.Gc);if(Aso===this.Ahm)return;this.MX.Ap(false);if(AIY<=
0){this.Ahm=Aso;this.Am();return;}var AIC=Aso-this.Ahm;if(AIC<0)AIC=-AIC;this.MX.
VJ(14);this.MX.Cv=this.Ahm;this.MX.BZ=Aso;this.MX.Fz((10+((AIY/2)|0))+((((AIY*AIC
)|0)/2)|0));this.MX.Ap(true);},Bv4:function(H){},Bv7:function(H){this.Ahm=this.MX.
A3;this.Am();},Aoj:function(H){A.ow([this,this.AIv],this);if(!!this.Appearance)this.
G(this.M);this.Am();},Fa:function(E){if(this.FQ===E)return;this.FQ=E;A.ow([this,
this.AIv],this);},GA:function(E){if(this.Gc===E)return;this.Gc=E;A.ow([this,this.
AIv],this);},Ty:function(){var E=this.AJ;if(this.Gc>this.FQ){if(E<this.FQ)E=this.
FQ;if(E>this.Gc)E=this.Gc;}else{if(E<this.Gc)E=this.Gc;if(E>this.FQ)E=this.FQ;}return E;
},Bw:function(E){if(this.AJ===E)return;this.AJ=E;A.ow([this,this.AIv],this);},OnSetAppearance:
function(E){if(this.Appearance===E)return;if(!!this.Appearance)A.zl([this,this.Aoj
],this.Appearance,0);this.Appearance=E;if(!!E)A.y_([this,this.Aoj],E,0);A.ow([this
,this.Aoj],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abm.MX.
_Init.call(this.MX={I:this},0);this.__proto__=C.ABp;this.G(B9);this.MX.VJ(14);this.
MX.IF(1);this.MX.R4=[this,this.Bv4];this.MX.Agm=[this,this.Bv7];},_Done:function(
){this.__proto__=A.Core.O;this.MX._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.MX._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.KM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
KL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.MX)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"
};C.TW={O4:null,SI:null,Appearance:null,Q:null,Bj:null,Dg:null,CU:null,ABZ:A.jm,
ABY:A.jm,A0f:0,UX:false,G:function(E){var B;if(!!this.Appearance){var AxB=[E[2]-
E[0],E[3]-E[1]];var Oc=AxB;if(Oc[0]<this.Appearance.V7[0])Oc=[this.Appearance.V7[
0],Oc[1]];if(Oc[1]<this.Appearance.V7[1])Oc=[Oc[0],this.Appearance.V7[1]];var GW=
A.aaj(Oc,AxB);if(!!GW[0]){var HI=((this.Pt&0x4)===0x4);var HJ=((this.Pt&0x8)===0x8
);if(HI&&!HJ)E=A.aaQ(E,E[2]+GW[0]);else if(!HI&&HJ)E=[].concat(E[0]-GW[0],E.slice(
1,4));else{E=[].concat(E[0]-((GW[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+Oc[0]);}}
if(!!GW[1]){var HK=((this.Pt&0x10)===0x10);var HH=((this.Pt&0x20)===0x20);if(HK&&
!HH)E=[].concat(E.slice(0,3),E[3]+GW[1]);else if(!HK&&HH)E=A.aaS(E,E[1]-GW[1]);else{
E=A.aaS(E,E[1]-((GW[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+Oc[1]);}}}A.Core.O.G.
call(this,E);},Ag:function(Ae){var B;A.Core.O.Ag.call(this,Ae);var Bal=!!this.Appearance&&(((((((
!!this.Appearance.Atx||!!this.Appearance.Aty)||!!this.Appearance.Atz)||!!this.Appearance.
Atw)||!!this.Appearance.AtB)||!!this.Appearance.AtC)||!!this.Appearance.AtD)||!!
this.Appearance.AtA);var Bam=!!this.Appearance&&(((this.ABY!==A.jm)&&!!this.Appearance.
Aug)||((this.ABZ!==A.jm)&&!!this.Appearance.Auh));var AoA=false;var AD=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(Bal&&!this.SI){this.SI=A._NewObject(A.abh.NG,0);this.J(
this.SI,0);AoA=true;}else if(!Bal&&!!this.SI){this.HD(this.SI);this.SI=null;}if(
Bam&&!this.O4){this.O4=A._NewObject(A.abh.Text,0);this.J(this.O4,0);AoA=true;this.
O4.Bij(true);}else if(!Bam&&!!this.O4){this.HD(this.O4);this.O4=null;}if(AoA){if(
!!this.SI)this.QF(this.SI);if(!!this.O4)this.QF(this.O4);}var FH=((Ae&0x10)===0x10
);var GY=((Ae&0x40)===0x40);var Fd=((this.CU.Down&&this.CU.XO)||this.Dg.Down)||this.
Bj.Bv;var Asg=this.UX;if(!!this.SI){var bitmap;var Zr;var EL=this.Appearance.ALX;
var AM=AD;if(Asg){if(!FH){bitmap=this.Appearance.AtC;Zr=this.Appearance.AL4;}else
if(Fd){bitmap=this.Appearance.AtA;Zr=this.Appearance.AL2;}else if(GY){bitmap=this.
Appearance.AtD;Zr=this.Appearance.AL5;}else{bitmap=this.Appearance.AtB;Zr=this.Appearance.
AL3;}}else if(!FH){bitmap=this.Appearance.Aty;Zr=this.Appearance.AL0;}else if(Fd
){bitmap=this.Appearance.Atw;Zr=this.Appearance.ALY;}else if(GY){bitmap=this.Appearance.
Atz;Zr=this.Appearance.AL1;}else{bitmap=this.Appearance.Atx;Zr=this.Appearance.ALZ;
}this.SI.Ys(Zr<0);this.SI.L(0xFFFFFFFF);if(Zr<0)Zr=0;if(!!bitmap&&!((EL&0x1)===0x1
)){var HI=((EL&0x4)===0x4);var HJ=((EL&0x8)===0x8);var BT=bitmap.FrameSize[0];if(
HI&&!HJ)AM=A.aaQ(AM,AM[0]+BT);else if(!HI&&HJ)AM=[].concat(AM[2]-BT,AM.slice(1,4
));else{AM=[].concat((((AM[2]-AM[0])/2)|0)-((BT/2)|0),AM.slice(1,4));AM=A.aaQ(AM
,AM[0]+BT);}}if(!!bitmap&&!((EL&0x2)===0x2)){var HK=((EL&0x10)===0x10);var HH=((
EL&0x20)===0x20);var BK=bitmap.FrameSize[1];if(HK&&!HH)AM=[].concat(AM.slice(0,3
),AM[1]+BK);else if(!HK&&HH)AM=A.aaS(AM,AM[3]-BK);else{AM=A.aaS(AM,(((AM[3]-AM[1
])/2)|0)-((BK/2)|0));AM=[].concat(AM.slice(0,3),AM[1]+BK);}}this.SI.Cs(Zr);this.
SI.At(bitmap);this.SI.G(AM);}if(!!this.O4){var Ahl;var font;var AZt;if(Asg){font=
this.Appearance.Auh;AZt=this.ABZ;if(!FH)Ahl=this.Appearance.AOU;else if(Fd)Ahl=this.
Appearance.AOS;else if(GY)Ahl=this.Appearance.AOV;else Ahl=this.Appearance.AOT;}
else{font=this.Appearance.Aug;AZt=this.ABY;if(!FH)Ahl=this.Appearance.AOQ;else if(
Fd)Ahl=this.Appearance.AOO;else if(GY)Ahl=this.Appearance.AOR;else Ahl=this.Appearance.
AOP;}this.O4.G([AD[0]+this.Appearance.AON,AD[1],AD[2],AD[3]]);this.O4.A1(this.Appearance.
AOM);this.O4.Aa(font);this.O4.R(AZt);this.O4.L(Ahl);this.O4.KB(true);this.O4.Bii(
true);}},Aoj:function(H){var Bax=this.Dg.Filter;this.Dg.Filter=149;if(!Bax&&!!this.
Dg.Filter)this.C3(0x4,0x0);if(!!Bax&&!this.Dg.Filter)this.C3(0x0,0x4);if(!!this.
Appearance)this.G(this.M);this.Am();},OX:function(H){var F;if(!!this.Q)this.Ap_((
F=this.Q,F[1].call(F[0])));},PY:function(H){var F;this.Am();this.Ap_(!this.UX);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.UX));A.aat(this.Q,0);}},Bwr:function(H){
var F;var Aov=0;if(!!this.Appearance)Aov=50;this.CU.Ap(true);this.Am();if(((this.
Dg.Bu-this.A0f)|0)>=Aov){this.Ap_(!this.UX);if(!!this.Q){(F=this.Q,F[2].call(F[0
],this.UX));A.aat(this.Q,0);}}else{this.Bj.VH(Aov-((this.Dg.Bu-this.A0f)|0));this.
Bj.Ap(true);}},AhN:function(H){var F;this.CU.Ap(false);this.Am();if(this.Bj.Bv){
this.Bj.Ap(false);this.Ap_(!this.UX);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.
UX));A.aat(this.Q,0);}}this.A0f=this.Dg.Bu;},Bv$:function(H){this.Am();},Bv6:function(
H){this.Am();},AyF:function(H){var F;var Aov=0;if(!!this.Appearance)Aov=50;this.
Dg.Bv=true;if(!this.CU.XO)return;if(this.CU.Nz)return;if(this.CU.Jj>=Aov){this.Ap_(
!this.UX);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.UX));A.aat(this.Q,0);}}else{
this.Bj.VH(Aov-this.CU.Jj);this.Bj.Ap(true);}},AyE:function(H){var F;this.Dg.Bv=
false;if(this.Bj.Bv){this.Bj.Ap(false);this.Ap_(!this.UX);if(!!this.Q){(F=this.Q
,F[2].call(F[0],this.UX));A.aat(this.Q,0);}}},Ay:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.OX],this.Q,0);this.Q=E;if(!!E)A.za([this,this.OX],E,
0);if(!!E)A.ow([this,this.OX],this);},Ap_:function(E){if(this.UX===E)return;this.
UX=E;this.Am();},A6t:function(E){if((E===this.ABY)&&(E===this.ABZ))return;this.ABY=
E;this.ABZ=E;this.Am();},OnSetAppearance:function(E){if(this.Appearance===E)return;
if(!!this.Appearance)A.zl([this,this.Aoj],this.Appearance,0);this.Appearance=E;if(
!!E)A.y_([this,this.Aoj],E,0);A.ow([this,this.Aoj],this);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bj={I:this},0);A.Core.
BQ._Init.call(this.Dg={I:this},0);A.Core.Bh._Init.call(this.CU={I:this},0);this.
__proto__=C.TW;this.G(BG);this.Bj.Qz(0);this.Bj.VH(50);this.Dg.Filter=149;this.CU.
AV(0x3F);this.CU.Kz(EV);this.CU.Ky(GS);this.CU.DN(Js);this.CU.D6(IL);this.CU.Bjw(
16);this.CU.ADf(100);this.J(this.CU,0);this.Bj.M9=[this,this.PY];this.Dg.K9=[this
,this.Bwr];this.Dg.BR=[this,this.AhN];this.CU.ACD=[this,this.Bv$];this.CU.Auo=[this
,this.Bv6];this.CU.K9=[this,this.AyF];this.CU.BR=[this,this.AyE];},_Done:function(
){this.__proto__=A.Core.O;this.Bj._Done();this.Dg._Done();this.CU._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bj._ReInit(
);this.Dg._ReInit();this.CU._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.O4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.SI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CU)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.ABq.__proto__=C.Am3;C.ASx.__proto__=C.Am3;C.ABp.__proto__=A.
Core.O;C.TW.__proto__=A.Core.O;};C._ReInit=function(){};C.DB=function(D){var B;if((
B=C.Ac3[0]._this)&&(B._cycle!=D))B._Done(C.Ac3[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */