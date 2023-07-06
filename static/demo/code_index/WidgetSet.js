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
var B3=[0,0,200,50];var BI=[0,0,150,50];var EG=[0,50];var Gr=[150,50];var I4=[150
,0];var Ip=[0,0];
C.AbU={_class:function(){return A.abj.Ah;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A.cC,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:null}};C.AzI={Auq:
null,Aup:null,APR:500,AC5:-1,AQh:0xFFFFFFFF,AC4:-1,Vd:A.vw,Bgx:function(E){if(this.
APR===E)return;this.APR=E;A.ow([this,this.Ei],this);},A3$:function(E){if(this.AC5===
E)return;this.AC5=E;A.ow([this,this.Ei],this);},A3_:function(E){if(this.Auq===E)
return;this.Auq=E;A.ow([this,this.Ei],this);},A39:function(E){if(this.AQh===E)return;
this.AQh=E;A.ow([this,this.Ei],this);},A38:function(E){if(this.AC4===E)return;this.
AC4=E;A.ow([this,this.Ei],this);},A37:function(E){if(this.Aup===E)return;this.Aup=
E;A.ow([this,this.Ei],this);},AB2:function(E){if(A.z8(this.Vd,E))return;this.Vd=
E;A.ow([this,this.Ei],this);},_Init:function(aArg){C.AlQ._Init.call(this,aArg);this.
__proto__=C.AzI;},_Mark:function(D){var B;C.AlQ._Mark.call(this,D);if((B=this.Auq
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aup)&&(B._cycle!=D))B._Mark(B._cycle=
D);},_className:"WidgetSet::HorizontalValueBarConfig"};C.AQa={AsQ:null,AsP:null,
Ar6:null,Ar9:null,Ar8:null,Ar7:null,Ar2:null,Ar5:null,Ar4:null,Ar3:null,AMQ:0xFF000000
,AMT:0xFF000000,AMS:0xFF000000,AMR:0xFF000000,AMM:0xFF000000,AMP:0xFF000000,AMO:
0xFF000000,AMN:0xFF000000,AML:0,A1b:0xFFFFFFFF,A1e:0xFFFFFFFF,A1d:0xFFFFFFFF,A1c:
0xFFFFFFFF,A09:0xFFFFFFFF,A1a:0xFFFFFFFF,A0$:0xFFFFFFFF,A0_:0xFFFFFFFF,A08:0,AMK:
0x12,A07:0x12,AJZ:0x3F,AJ4:-1,AJ7:-1,AJ6:-1,AJ5:-1,AJ0:-1,AJ3:-1,AJ2:-1,AJ1:-1,Vd:
A.vw,Bf4:function(E){if(this.AMQ===E)return;this.AMQ=E;A.ow([this,this.Ei],this);
},Bf7:function(E){if(this.AMT===E)return;this.AMT=E;A.ow([this,this.Ei],this);},
Bf6:function(E){if(this.AMS===E)return;this.AMS=E;A.ow([this,this.Ei],this);},Bf5:
function(E){if(this.AMR===E)return;this.AMR=E;A.ow([this,this.Ei],this);},BfZ:function(
E){if(this.AMM===E)return;this.AMM=E;A.ow([this,this.Ei],this);},Bf2:function(E){
if(this.AMP===E)return;this.AMP=E;A.ow([this,this.Ei],this);},Bf1:function(E){if(
this.AMO===E)return;this.AMO=E;A.ow([this,this.Ei],this);},Bf0:function(E){if(this.
AMN===E)return;this.AMN=E;A.ow([this,this.Ei],this);},BfY:function(E){if(this.AML===
E)return;this.AML=E;A.ow([this,this.Ei],this);},BfP:function(E){if(this.A1b===E)
return;this.A1b=E;A.ow([this,this.Ei],this);},BfS:function(E){if(this.A1e===E)return;
this.A1e=E;A.ow([this,this.Ei],this);},BfR:function(E){if(this.A1d===E)return;this.
A1d=E;A.ow([this,this.Ei],this);},BfQ:function(E){if(this.A1c===E)return;this.A1c=
E;A.ow([this,this.Ei],this);},BfL:function(E){if(this.A09===E)return;this.A09=E;
A.ow([this,this.Ei],this);},BfO:function(E){if(this.A1a===E)return;this.A1a=E;A.
ow([this,this.Ei],this);},BfN:function(E){if(this.A0$===E)return;this.A0$=E;A.ow([
this,this.Ei],this);},BfM:function(E){if(this.A0_===E)return;this.A0_=E;A.ow([this
,this.Ei],this);},BfK:function(E){if(this.A08===E)return;this.A08=E;A.ow([this,this.
Ei],this);},BfX:function(E){if(this.AMK===E)return;this.AMK=E;A.ow([this,this.Ei
],this);},Bf8:function(E){if(this.AsQ===E)return;this.AsQ=E;A.ow([this,this.Ei],
this);},Bf3:function(E){if(this.AsP===E)return;this.AsP=E;A.ow([this,this.Ei],this
);},BfI:function(E){if(this.A07===E)return;this.A07=E;A.ow([this,this.Ei],this);
},Bfi:function(E){if(this.AJZ===E)return;this.AJZ=E;A.ow([this,this.Ei],this);},
Bfv:function(E){if(this.AJ4===E)return;this.AJ4=E;A.ow([this,this.Ei],this);},Bfy:
function(E){if(this.AJ7===E)return;this.AJ7=E;A.ow([this,this.Ei],this);},Bfx:function(
E){if(this.AJ6===E)return;this.AJ6=E;A.ow([this,this.Ei],this);},Bfw:function(E){
if(this.AJ5===E)return;this.AJ5=E;A.ow([this,this.Ei],this);},Bfr:function(E){if(
this.Ar6===E)return;this.Ar6=E;A.ow([this,this.Ei],this);},Bfu:function(E){if(this.
Ar9===E)return;this.Ar9=E;A.ow([this,this.Ei],this);},Bft:function(E){if(this.Ar8===
E)return;this.Ar8=E;A.ow([this,this.Ei],this);},Bfs:function(E){if(this.Ar7===E)
return;this.Ar7=E;A.ow([this,this.Ei],this);},Bfn:function(E){if(this.AJ0===E)return;
this.AJ0=E;A.ow([this,this.Ei],this);},Bfq:function(E){if(this.AJ3===E)return;this.
AJ3=E;A.ow([this,this.Ei],this);},Bfp:function(E){if(this.AJ2===E)return;this.AJ2=
E;A.ow([this,this.Ei],this);},Bfo:function(E){if(this.AJ1===E)return;this.AJ1=E;
A.ow([this,this.Ei],this);},Bfj:function(E){if(this.Ar2===E)return;this.Ar2=E;A.
ow([this,this.Ei],this);},Bfm:function(E){if(this.Ar5===E)return;this.Ar5=E;A.ow([
this,this.Ei],this);},Bfl:function(E){if(this.Ar4===E)return;this.Ar4=E;A.ow([this
,this.Ei],this);},Bfk:function(E){if(this.Ar3===E)return;this.Ar3=E;A.ow([this,this.
Ei],this);},AB2:function(E){if(A.z8(this.Vd,E))return;this.Vd=E;A.ow([this,this.
Ei],this);},_Init:function(aArg){C.AlQ._Init.call(this,aArg);this.__proto__=C.AQa;
},_Mark:function(D){var B;C.AlQ._Mark.call(this,D);if((B=this.AsQ)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AsP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ar6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ar9)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ar8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ar7)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ar2)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ar5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ar4)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ar3)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::ToggleButtonConfig"};C.AlQ={Ei:function(H){A.vv(this,0);},_Init:function(
aArg){this.__proto__=C.AlQ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"WidgetSet::WidgetConfig"
};C.AzH={Ki:null,Kh:null,Appearance:null,Ml:null,Af_:0,Fq:100,FG:0,AI:50,A_6:true
,G:function(E){var B;if(!!this.Appearance){var Av6=[E[2]-E[0],E[3]-E[1]];var NE=
Av6;if(NE[0]<this.Appearance.Vd[0])NE=[this.Appearance.Vd[0],NE[1]];if(NE[1]<this.
Appearance.Vd[1])NE=[NE[0],this.Appearance.Vd[1]];var Gt=A.aaj(NE,Av6);if(!!Gt[0
]){var He=((this.OX&0x4)===0x4);var Hf=((this.OX&0x8)===0x8);if(He&&!Hf)E=A.aaQ(
E,E[2]+Gt[0]);else if(!He&&Hf)E=[].concat(E[0]-Gt[0],E.slice(1,4));else{E=[].concat(
E[0]-((Gt[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+NE[0]);}}if(!!Gt[1]){var Hg=((this.
OX&0x10)===0x10);var Hd=((this.OX&0x20)===0x20);if(Hg&&!Hd)E=[].concat(E.slice(0
,3),E[3]+Gt[1]);else if(!Hg&&Hd)E=A.aaS(E,E[1]-Gt[1]);else{E=A.aaS(E,E[1]-((Gt[1
]/2)|0));E=[].concat(E.slice(0,3),E[1]+NE[1]);}}}A.Core.O.G.call(this,E);},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var A9i=!!this.Appearance&&!!this.Appearance.
Aup;var A9j=!!this.Appearance&&!!this.Appearance.Auq;var Ank=false;var Ay=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(A9i&&!this.Kh){this.Kh=A._NewObject(A.abh.MZ,0);
this.J(this.Kh,0);Ank=true;}else if(!A9i&&!!this.Kh){this.HW(this.Kh);this.Kh=null;
}if(A9j&&!this.Ki){this.Ki=A._NewObject(A.abh.MZ,0);this.J(this.Ki,0);Ank=true;}
else if(!A9j&&!!this.Ki){this.HW(this.Ki);this.Ki=null;}if(Ank){if(!!this.Kh)this.
SZ(this.Kh);if(!!this.Ki)this.SZ(this.Ki);}if(!!this.Kh){this.Kh.Ar(this.Appearance.
Aup);this.Kh.L(this.Appearance.AQh);this.Kh.A3v(0x1B);if(this.Appearance.AC4<0){
this.Kh.Xx(true);this.Kh.Cc(0);}else{this.Kh.Xx(false);this.Kh.Cc(this.Appearance.
AC4);}}if(!!this.Ki){this.Ki.Ar(this.Appearance.Auq);this.Ki.L(0xFFFFFFFF);this.
Ki.A3v(0x1E);if(this.Appearance.AC5<0){this.Ki.Xx(true);this.Ki.Cc(0);}else{this.
Ki.Xx(false);this.Ki.Cc(this.Appearance.AC5);}}var pos=((Ay[2]-Ay[0])*this.Af_)|
0;if(pos<0)pos=0;if(pos>(Ay[2]-Ay[0]))pos=Ay[2]-Ay[0];if(!!this.Kh&&!!this.Kh.Ah
){var s=this.Kh.Ah.FrameSize;this.Kh.G([0,(((Ay[3]-Ay[1])/2)|0)-((s[1]/2)|0),pos
,((((Ay[3]-Ay[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.Kh.A3I([(Ay[2]-Ay[0])-((s[0]/3
)|0),this.Kh.Ak4[1]]);this.Kh.W(true);}if(!!this.Ki&&!!this.Ki.Ah){var s=this.Ki.
Ah.FrameSize;this.Ki.G([pos,(((Ay[3]-Ay[1])/2)|0)-((s[1]/2)|0),Ay[2]-Ay[0],((((Ay[
3]-Ay[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.Ki.A3I([(Ay[2]-Ay[0])-((s[0]/3)|0),this.
Ki.Ak4[1]]);this.Ki.W(true);}},AGB:function(H){var AqW=this.Af_;var AG4=0;if(!!this.
Appearance)AG4=this.Appearance.APR;if(this.A_6&&(this.Fq!==this.FG)){this.Af_=-this.
FG/(this.Fq-this.FG);AqW=this.Af_;this.A_6=false;}if(this.Fq!==this.FG)AqW=(this.
SR()-this.FG)/(this.Fq-this.FG);if(AqW===this.Af_)return;this.Ml.An(false);if(AG4<=
0){this.Af_=AqW;this.Al();return;}var AGI=AqW-this.Af_;if(AGI<0)AGI=-AGI;this.Ml.
UP(14);this.Ml.Ch=this.Af_;this.Ml.BW=AqW;this.Ml.FI((10+((AG4/2)|0))+((((AG4*AGI
)|0)/2)|0));this.Ml.An(true);},BsK:function(H){},BsN:function(H){this.Af_=this.Ml.
AY;this.Al();},Am6:function(H){A.ow([this,this.AGB],this);if(!!this.Appearance)this.
G(this.M);this.Al();},FP:function(E){if(this.Fq===E)return;this.Fq=E;A.ow([this,
this.AGB],this);},Hw:function(E){if(this.FG===E)return;this.FG=E;A.ow([this,this.
AGB],this);},SR:function(){var E=this.AI;if(this.FG>this.Fq){if(E<this.Fq)E=this.
Fq;if(E>this.FG)E=this.FG;}else{if(E<this.FG)E=this.FG;if(E>this.Fq)E=this.Fq;}return E;
},Bu:function(E){if(this.AI===E)return;this.AI=E;A.ow([this,this.AGB],this);},OnSetAppearance:
function(E){if(this.Appearance===E)return;if(!!this.Appearance)A.zl([this,this.Am6
],this.Appearance,0);this.Appearance=E;if(!!E)A.y_([this,this.Am6],E,0);A.ow([this
,this.Am6],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abm.Ml.
_Init.call(this.Ml={I:this},0);this.__proto__=C.AzH;this.G(B3);this.Ml.UP(14);this.
Ml.IF(1);this.Ml.Rm=[this,this.BsK];this.Ml.Afh=[this,this.BsN];},_Done:function(
){this.__proto__=A.Core.O;this.Ml._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Ml._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Ki)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Kh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"
};C.S$={Ov:null,R1:null,Appearance:null,Q:null,Bi:null,C2:null,CI:null,AAf:A.jm,
AAe:A.jm,AXF:0,T4:false,G:function(E){var B;if(!!this.Appearance){var Av6=[E[2]-
E[0],E[3]-E[1]];var NE=Av6;if(NE[0]<this.Appearance.Vd[0])NE=[this.Appearance.Vd[
0],NE[1]];if(NE[1]<this.Appearance.Vd[1])NE=[NE[0],this.Appearance.Vd[1]];var Gt=
A.aaj(NE,Av6);if(!!Gt[0]){var He=((this.OX&0x4)===0x4);var Hf=((this.OX&0x8)===0x8
);if(He&&!Hf)E=A.aaQ(E,E[2]+Gt[0]);else if(!He&&Hf)E=[].concat(E[0]-Gt[0],E.slice(
1,4));else{E=[].concat(E[0]-((Gt[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+NE[0]);}}
if(!!Gt[1]){var Hg=((this.OX&0x10)===0x10);var Hd=((this.OX&0x20)===0x20);if(Hg&&
!Hd)E=[].concat(E.slice(0,3),E[3]+Gt[1]);else if(!Hg&&Hd)E=A.aaS(E,E[1]-Gt[1]);else{
E=A.aaS(E,E[1]-((Gt[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+NE[1]);}}}A.Core.O.G.
call(this,E);},Ai:function(Ae){var B;A.Core.O.Ai.call(this,Ae);var A9g=!!this.Appearance&&(((((((
!!this.Appearance.Ar3||!!this.Appearance.Ar4)||!!this.Appearance.Ar5)||!!this.Appearance.
Ar2)||!!this.Appearance.Ar7)||!!this.Appearance.Ar8)||!!this.Appearance.Ar9)||!!
this.Appearance.Ar6);var A9h=!!this.Appearance&&(((this.AAe!==A.jm)&&!!this.Appearance.
AsP)||((this.AAf!==A.jm)&&!!this.Appearance.AsQ));var Ank=false;var Ay=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(A9g&&!this.R1){this.R1=A._NewObject(A.abh.MZ,0);this.J(
this.R1,0);Ank=true;}else if(!A9g&&!!this.R1){this.HW(this.R1);this.R1=null;}if(
A9h&&!this.Ov){this.Ov=A._NewObject(A.abh.Text,0);this.J(this.Ov,0);Ank=true;this.
Ov.Bfb(true);}else if(!A9h&&!!this.Ov){this.HW(this.Ov);this.Ov=null;}if(Ank){if(
!!this.R1)this.SZ(this.R1);if(!!this.Ov)this.SZ(this.Ov);}var FT=((Ae&0x10)===0x10
);var Gv=((Ae&0x40)===0x40);var Fu=((this.CI.Down&&this.CI.WV)||this.C2.Down)||this.
Bi.Bw;var AqO=this.T4;if(!!this.R1){var bitmap;var Yw;var Ev=this.Appearance.AJZ;
var AL=Ay;if(AqO){if(!FT){bitmap=this.Appearance.Ar8;Yw=this.Appearance.AJ6;}else
if(Fu){bitmap=this.Appearance.Ar6;Yw=this.Appearance.AJ4;}else if(Gv){bitmap=this.
Appearance.Ar9;Yw=this.Appearance.AJ7;}else{bitmap=this.Appearance.Ar7;Yw=this.Appearance.
AJ5;}}else if(!FT){bitmap=this.Appearance.Ar4;Yw=this.Appearance.AJ2;}else if(Fu
){bitmap=this.Appearance.Ar2;Yw=this.Appearance.AJ0;}else if(Gv){bitmap=this.Appearance.
Ar5;Yw=this.Appearance.AJ3;}else{bitmap=this.Appearance.Ar3;Yw=this.Appearance.AJ1;
}this.R1.Xx(Yw<0);this.R1.L(0xFFFFFFFF);if(Yw<0)Yw=0;if(!!bitmap&&!((Ev&0x1)===0x1
)){var He=((Ev&0x4)===0x4);var Hf=((Ev&0x8)===0x8);var BP=bitmap.FrameSize[0];if(
He&&!Hf)AL=A.aaQ(AL,AL[0]+BP);else if(!He&&Hf)AL=[].concat(AL[2]-BP,AL.slice(1,4
));else{AL=[].concat((((AL[2]-AL[0])/2)|0)-((BP/2)|0),AL.slice(1,4));AL=A.aaQ(AL
,AL[0]+BP);}}if(!!bitmap&&!((Ev&0x2)===0x2)){var Hg=((Ev&0x10)===0x10);var Hd=((
Ev&0x20)===0x20);var BG=bitmap.FrameSize[1];if(Hg&&!Hd)AL=[].concat(AL.slice(0,3
),AL[1]+BG);else if(!Hg&&Hd)AL=A.aaS(AL,AL[3]-BG);else{AL=A.aaS(AL,(((AL[3]-AL[1
])/2)|0)-((BG/2)|0));AL=[].concat(AL.slice(0,3),AL[1]+BG);}}this.R1.Cc(Yw);this.
R1.Ar(bitmap);this.R1.G(AL);}if(!!this.Ov){var Af9;var font;var AWV;if(AqO){font=
this.Appearance.AsQ;AWV=this.AAf;if(!FT)Af9=this.Appearance.AMS;else if(Fu)Af9=this.
Appearance.AMQ;else if(Gv)Af9=this.Appearance.AMT;else Af9=this.Appearance.AMR;}
else{font=this.Appearance.AsP;AWV=this.AAe;if(!FT)Af9=this.Appearance.AMO;else if(
Fu)Af9=this.Appearance.AMM;else if(Gv)Af9=this.Appearance.AMP;else Af9=this.Appearance.
AMN;}this.Ov.G([Ay[0]+this.Appearance.AML,Ay[1],Ay[2],Ay[3]]);this.Ov.A0(this.Appearance.
AMK);this.Ov.Y(font);this.Ov.R(AWV);this.Ov.L(Af9);this.Ov.KF(true);this.Ov.Bfa(
true);}},Am6:function(H){var A9t=this.C2.Filter;this.C2.Filter=149;if(!A9t&&!!this.
C2.Filter)this.CQ(0x4,0x0);if(!!A9t&&!this.C2.Filter)this.CQ(0x0,0x4);if(!!this.
Appearance)this.G(this.M);this.Al();},Oo:function(H){var F;if(!!this.Q)this.AoQ((
F=this.Q,F[1].call(F[0])));},Pr:function(H){var F;this.Al();this.AoQ(!this.T4);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.T4));A.aat(this.Q,0);}},Bs9:function(H){
var F;var Anf=0;if(!!this.Appearance)Anf=50;this.CI.An(true);this.Al();if(((this.
C2.Bp-this.AXF)|0)>=Anf){this.AoQ(!this.T4);if(!!this.Q){(F=this.Q,F[2].call(F[0
],this.T4));A.aat(this.Q,0);}}else{this.Bi.UM(Anf-((this.C2.Bp-this.AXF)|0));this.
Bi.An(true);}},Agz:function(H){var F;this.CI.An(false);this.Al();if(this.Bi.Bw){
this.Bi.An(false);this.AoQ(!this.T4);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.
T4));A.aat(this.Q,0);}}this.AXF=this.C2.Bp;},BsR:function(H){this.Al();},BsM:function(
H){this.Al();},Aw7:function(H){var F;var Anf=0;if(!!this.Appearance)Anf=50;this.
C2.Bw=true;if(!this.CI.WV)return;if(this.CI.MQ)return;if(this.CI.IV>=Anf){this.AoQ(
!this.T4);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.T4));A.aat(this.Q,0);}}else{
this.Bi.UM(Anf-this.CI.IV);this.Bi.An(true);}},Aw6:function(H){var F;this.C2.Bw=
false;if(this.Bi.Bw){this.Bi.An(false);this.AoQ(!this.T4);if(!!this.Q){(F=this.Q
,F[2].call(F[0],this.T4));A.aat(this.Q,0);}}},AF:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.Oo],this.Q,0);this.Q=E;if(!!E)A.za([this,this.Oo],E,
0);if(!!E)A.ow([this,this.Oo],this);},AoQ:function(E){if(this.T4===E)return;this.
T4=E;this.Al();},A3F:function(E){if((E===this.AAe)&&(E===this.AAf))return;this.AAe=
E;this.AAf=E;this.Al();},OnSetAppearance:function(E){if(this.Appearance===E)return;
if(!!this.Appearance)A.zl([this,this.Am6],this.Appearance,0);this.Appearance=E;if(
!!E)A.y_([this,this.Am6],E,0);A.ow([this,this.Am6],this);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bi={I:this},0);A.Core.
B0._Init.call(this.C2={I:this},0);A.Core.Bd._Init.call(this.CI={I:this},0);this.
__proto__=C.S$;this.G(BI);this.Bi.P3(0);this.Bi.UM(50);this.C2.Filter=149;this.CI.
AW(0x3F);this.CI.J9(EG);this.CI.J8(Gr);this.CI.D$(I4);this.CI.Eg(Ip);this.CI.Bgn(
16);this.CI.ABt(100);this.J(this.CI,0);this.Bi.Mw=[this,this.Pr];this.C2.KD=[this
,this.Bs9];this.C2.B1=[this,this.Agz];this.CI.AAT=[this,this.BsR];this.CI.AsW=[this
,this.BsM];this.CI.KD=[this,this.Aw7];this.CI.B1=[this,this.Aw6];},_Done:function(
){this.__proto__=A.Core.O;this.Bi._Done();this.C2._Done();this.CI._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bi._ReInit(
);this.C2._ReInit();this.CI._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Ov)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CI)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.AzI.__proto__=C.AlQ;C.AQa.__proto__=C.AlQ;C.AzH.__proto__=A.
Core.O;C.S$.__proto__=A.Core.O;};C._ReInit=function(){};C.Dn=function(D){var B;if((
B=C.AbU[0]._this)&&(B._cycle!=D))B._Done(C.AbU[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */