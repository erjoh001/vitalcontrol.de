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
var B4=[0,0,200,50];var BI=[0,0,150,50];var EH=[0,50];var Gv=[150,50];var I5=[150
,0];var Iq=[0,0];
C.Ab2={_class:function(){return A.abj.Ai;},0:{FileName:"./res_index/WidgetSetCheckBoxSmall.png"
,Format:A.cC,NoOfFrames:8,FrameSize:[26,26],FrameDelay:0,_this:null}};C.AzO={Auv:
null,Auu:null,APZ:500,ADb:-1,AQp:0xFFFFFFFF,ADa:-1,Vh:A.vw,BgO:function(E){if(this.
APZ===E)return;this.APZ=E;A.ow([this,this.Ei],this);},A4l:function(E){if(this.ADb===
E)return;this.ADb=E;A.ow([this,this.Ei],this);},A4k:function(E){if(this.Auv===E)
return;this.Auv=E;A.ow([this,this.Ei],this);},A4j:function(E){if(this.AQp===E)return;
this.AQp=E;A.ow([this,this.Ei],this);},A4i:function(E){if(this.ADa===E)return;this.
ADa=E;A.ow([this,this.Ei],this);},A4h:function(E){if(this.Auu===E)return;this.Auu=
E;A.ow([this,this.Ei],this);},AB_:function(E){if(A.z8(this.Vh,E))return;this.Vh=
E;A.ow([this,this.Ei],this);},_Init:function(aArg){C.AlW._Init.call(this,aArg);this.
__proto__=C.AzO;},_Mark:function(D){var B;C.AlW._Mark.call(this,D);if((B=this.Auv
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auu)&&(B._cycle!=D))B._Mark(B._cycle=
D);},_className:"WidgetSet::HorizontalValueBarConfig"};C.AQi={AsV:null,AsU:null,
Ar$:null,Asc:null,Asb:null,Asa:null,Ar7:null,Ar_:null,Ar9:null,Ar8:null,AMX:0xFF000000
,AM0:0xFF000000,AMZ:0xFF000000,AMY:0xFF000000,AMT:0xFF000000,AMW:0xFF000000,AMV:
0xFF000000,AMU:0xFF000000,AMS:0,A1k:0xFFFFFFFF,A1n:0xFFFFFFFF,A1m:0xFFFFFFFF,A1l:
0xFFFFFFFF,A1g:0xFFFFFFFF,A1j:0xFFFFFFFF,A1i:0xFFFFFFFF,A1h:0xFFFFFFFF,A1f:0,AMR:
0x12,A1e:0x12,AJ5:0x3F,AJ_:-1,AKb:-1,AKa:-1,AJ$:-1,AJ6:-1,AJ9:-1,AJ8:-1,AJ7:-1,Vh:
A.vw,Bgj:function(E){if(this.AMX===E)return;this.AMX=E;A.ow([this,this.Ei],this);
},Bgm:function(E){if(this.AM0===E)return;this.AM0=E;A.ow([this,this.Ei],this);},
Bgl:function(E){if(this.AMZ===E)return;this.AMZ=E;A.ow([this,this.Ei],this);},Bgk:
function(E){if(this.AMY===E)return;this.AMY=E;A.ow([this,this.Ei],this);},Bge:function(
E){if(this.AMT===E)return;this.AMT=E;A.ow([this,this.Ei],this);},Bgh:function(E){
if(this.AMW===E)return;this.AMW=E;A.ow([this,this.Ei],this);},Bgg:function(E){if(
this.AMV===E)return;this.AMV=E;A.ow([this,this.Ei],this);},Bgf:function(E){if(this.
AMU===E)return;this.AMU=E;A.ow([this,this.Ei],this);},Bgd:function(E){if(this.AMS===
E)return;this.AMS=E;A.ow([this,this.Ei],this);},Bf5:function(E){if(this.A1k===E)
return;this.A1k=E;A.ow([this,this.Ei],this);},Bf8:function(E){if(this.A1n===E)return;
this.A1n=E;A.ow([this,this.Ei],this);},Bf7:function(E){if(this.A1m===E)return;this.
A1m=E;A.ow([this,this.Ei],this);},Bf6:function(E){if(this.A1l===E)return;this.A1l=
E;A.ow([this,this.Ei],this);},Bf1:function(E){if(this.A1g===E)return;this.A1g=E;
A.ow([this,this.Ei],this);},Bf4:function(E){if(this.A1j===E)return;this.A1j=E;A.
ow([this,this.Ei],this);},Bf3:function(E){if(this.A1i===E)return;this.A1i=E;A.ow([
this,this.Ei],this);},Bf2:function(E){if(this.A1h===E)return;this.A1h=E;A.ow([this
,this.Ei],this);},Bf0:function(E){if(this.A1f===E)return;this.A1f=E;A.ow([this,this.
Ei],this);},Bgc:function(E){if(this.AMR===E)return;this.AMR=E;A.ow([this,this.Ei
],this);},Bgn:function(E){if(this.AsV===E)return;this.AsV=E;A.ow([this,this.Ei],
this);},Bgi:function(E){if(this.AsU===E)return;this.AsU=E;A.ow([this,this.Ei],this
);},BfY:function(E){if(this.A1e===E)return;this.A1e=E;A.ow([this,this.Ei],this);
},Bfy:function(E){if(this.AJ5===E)return;this.AJ5=E;A.ow([this,this.Ei],this);},
BfL:function(E){if(this.AJ_===E)return;this.AJ_=E;A.ow([this,this.Ei],this);},BfO:
function(E){if(this.AKb===E)return;this.AKb=E;A.ow([this,this.Ei],this);},BfN:function(
E){if(this.AKa===E)return;this.AKa=E;A.ow([this,this.Ei],this);},BfM:function(E){
if(this.AJ$===E)return;this.AJ$=E;A.ow([this,this.Ei],this);},BfH:function(E){if(
this.Ar$===E)return;this.Ar$=E;A.ow([this,this.Ei],this);},BfK:function(E){if(this.
Asc===E)return;this.Asc=E;A.ow([this,this.Ei],this);},BfJ:function(E){if(this.Asb===
E)return;this.Asb=E;A.ow([this,this.Ei],this);},BfI:function(E){if(this.Asa===E)
return;this.Asa=E;A.ow([this,this.Ei],this);},BfD:function(E){if(this.AJ6===E)return;
this.AJ6=E;A.ow([this,this.Ei],this);},BfG:function(E){if(this.AJ9===E)return;this.
AJ9=E;A.ow([this,this.Ei],this);},BfF:function(E){if(this.AJ8===E)return;this.AJ8=
E;A.ow([this,this.Ei],this);},BfE:function(E){if(this.AJ7===E)return;this.AJ7=E;
A.ow([this,this.Ei],this);},Bfz:function(E){if(this.Ar7===E)return;this.Ar7=E;A.
ow([this,this.Ei],this);},BfC:function(E){if(this.Ar_===E)return;this.Ar_=E;A.ow([
this,this.Ei],this);},BfB:function(E){if(this.Ar9===E)return;this.Ar9=E;A.ow([this
,this.Ei],this);},BfA:function(E){if(this.Ar8===E)return;this.Ar8=E;A.ow([this,this.
Ei],this);},AB_:function(E){if(A.z8(this.Vh,E))return;this.Vh=E;A.ow([this,this.
Ei],this);},_Init:function(aArg){C.AlW._Init.call(this,aArg);this.__proto__=C.AQi;
},_Mark:function(D){var B;C.AlW._Mark.call(this,D);if((B=this.AsV)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AsU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ar$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Asc)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Asb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Asa)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ar7)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ar_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ar9)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ar8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"WidgetSet::ToggleButtonConfig"};C.AlW={Ei:function(H){A.vv(this,0);},_Init:function(
aArg){this.__proto__=C.AlW;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"WidgetSet::WidgetConfig"
};C.AzN={Kk:null,Kj:null,Appearance:null,Mo:null,Agg:0,Fs:100,FI:0,AI:50,A$k:true
,G:function(E){var B;if(!!this.Appearance){var Av$=[E[2]-E[0],E[3]-E[1]];var NH=
Av$;if(NH[0]<this.Appearance.Vh[0])NH=[this.Appearance.Vh[0],NH[1]];if(NH[1]<this.
Appearance.Vh[1])NH=[NH[0],this.Appearance.Vh[1]];var Gx=A.aaj(NH,Av$);if(!!Gx[0
]){var Hh=((this.OY&0x4)===0x4);var Hi=((this.OY&0x8)===0x8);if(Hh&&!Hi)E=A.aaQ(
E,E[2]+Gx[0]);else if(!Hh&&Hi)E=[].concat(E[0]-Gx[0],E.slice(1,4));else{E=[].concat(
E[0]-((Gx[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+NH[0]);}}if(!!Gx[1]){var Hj=((this.
OY&0x10)===0x10);var Hg=((this.OY&0x20)===0x20);if(Hj&&!Hg)E=[].concat(E.slice(0
,3),E[3]+Gx[1]);else if(!Hj&&Hg)E=A.aaS(E,E[1]-Gx[1]);else{E=A.aaS(E,E[1]-((Gx[1
]/2)|0));E=[].concat(E.slice(0,3),E[1]+NH[1]);}}}A.Core.O.G.call(this,E);},Ah:function(
Ae){var B;A.Core.O.Ah.call(this,Ae);var A9y=!!this.Appearance&&!!this.Appearance.
Auu;var A9z=!!this.Appearance&&!!this.Appearance.Auv;var Anp=false;var Ay=[0,0,(
B=this.M)[2]-B[0],B[3]-B[1]];if(A9y&&!this.Kj){this.Kj=A._NewObject(A.abh.M2,0);
this.J(this.Kj,0);Anp=true;}else if(!A9y&&!!this.Kj){this.HA(this.Kj);this.Kj=null;
}if(A9z&&!this.Kk){this.Kk=A._NewObject(A.abh.M2,0);this.J(this.Kk,0);Anp=true;}
else if(!A9z&&!!this.Kk){this.HA(this.Kk);this.Kk=null;}if(Anp){if(!!this.Kj)this.
S4(this.Kj);if(!!this.Kk)this.S4(this.Kk);}if(!!this.Kj){this.Kj.At(this.Appearance.
Auu);this.Kj.L(this.Appearance.AQp);this.Kj.A3G(0x1B);if(this.Appearance.ADa<0){
this.Kj.XD(true);this.Kj.Ce(0);}else{this.Kj.XD(false);this.Kj.Ce(this.Appearance.
ADa);}}if(!!this.Kk){this.Kk.At(this.Appearance.Auv);this.Kk.L(0xFFFFFFFF);this.
Kk.A3G(0x1E);if(this.Appearance.ADb<0){this.Kk.XD(true);this.Kk.Ce(0);}else{this.
Kk.XD(false);this.Kk.Ce(this.Appearance.ADb);}}var pos=((Ay[2]-Ay[0])*this.Agg)|
0;if(pos<0)pos=0;if(pos>(Ay[2]-Ay[0]))pos=Ay[2]-Ay[0];if(!!this.Kj&&!!this.Kj.Ai
){var s=this.Kj.Ai.FrameSize;this.Kj.G([0,(((Ay[3]-Ay[1])/2)|0)-((s[1]/2)|0),pos
,((((Ay[3]-Ay[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.Kj.A3U([(Ay[2]-Ay[0])-((s[0]/3
)|0),this.Kj.Ak_[1]]);this.Kj.W(true);}if(!!this.Kk&&!!this.Kk.Ai){var s=this.Kk.
Ai.FrameSize;this.Kk.G([pos,(((Ay[3]-Ay[1])/2)|0)-((s[1]/2)|0),Ay[2]-Ay[0],((((Ay[
3]-Ay[1])/2)|0)-((s[1]/2)|0))+s[1]]);this.Kk.A3U([(Ay[2]-Ay[0])-((s[0]/3)|0),this.
Kk.Ak_[1]]);this.Kk.W(true);}},AGH:function(H){var Aq1=this.Agg;var AG_=0;if(!!this.
Appearance)AG_=this.Appearance.APZ;if(this.A$k&&(this.Fs!==this.FI)){this.Agg=-this.
FI/(this.Fs-this.FI);Aq1=this.Agg;this.A$k=false;}if(this.Fs!==this.FI)Aq1=(this.
SW()-this.FI)/(this.Fs-this.FI);if(Aq1===this.Agg)return;this.Mo.An(false);if(AG_<=
0){this.Agg=Aq1;this.Al();return;}var AGO=Aq1-this.Agg;if(AGO<0)AGO=-AGO;this.Mo.
UU(14);this.Mo.Ci=this.Agg;this.Mo.BX=Aq1;this.Mo.FK((10+((AG_/2)|0))+((((AG_*AGO
)|0)/2)|0));this.Mo.An(true);},Bs8:function(H){},Bs$:function(H){this.Agg=this.Mo.
AY;this.Al();},Am$:function(H){A.ow([this,this.AGH],this);if(!!this.Appearance)this.
G(this.M);this.Al();},FS:function(E){if(this.Fs===E)return;this.Fs=E;A.ow([this,
this.AGH],this);},Hy:function(E){if(this.FI===E)return;this.FI=E;A.ow([this,this.
AGH],this);},SW:function(){var E=this.AI;if(this.FI>this.Fs){if(E<this.Fs)E=this.
Fs;if(E>this.FI)E=this.FI;}else{if(E<this.FI)E=this.FI;if(E>this.Fs)E=this.Fs;}return E;
},Bu:function(E){if(this.AI===E)return;this.AI=E;A.ow([this,this.AGH],this);},OnSetAppearance:
function(E){if(this.Appearance===E)return;if(!!this.Appearance)A.zl([this,this.Am$
],this.Appearance,0);this.Appearance=E;if(!!E)A.y_([this,this.Am$],E,0);A.ow([this
,this.Am$],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abm.Mo.
_Init.call(this.Mo={I:this},0);this.__proto__=C.AzN;this.G(B4);this.Mo.UU(14);this.
Mo.IG(1);this.Mo.Rn=[this,this.Bs8];this.Mo.Afn=[this,this.Bs$];},_Done:function(
){this.__proto__=A.Core.O;this.Mo._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Mo._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Kk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Kj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::HorizontalValueBar"
};C.Te={Ox:null,R4:null,Appearance:null,Q:null,Bi:null,C4:null,CK:null,AAm:A.jm,
AAl:A.jm,AXO:0,T9:false,G:function(E){var B;if(!!this.Appearance){var Av$=[E[2]-
E[0],E[3]-E[1]];var NH=Av$;if(NH[0]<this.Appearance.Vh[0])NH=[this.Appearance.Vh[
0],NH[1]];if(NH[1]<this.Appearance.Vh[1])NH=[NH[0],this.Appearance.Vh[1]];var Gx=
A.aaj(NH,Av$);if(!!Gx[0]){var Hh=((this.OY&0x4)===0x4);var Hi=((this.OY&0x8)===0x8
);if(Hh&&!Hi)E=A.aaQ(E,E[2]+Gx[0]);else if(!Hh&&Hi)E=[].concat(E[0]-Gx[0],E.slice(
1,4));else{E=[].concat(E[0]-((Gx[0]/2)|0),E.slice(1,4));E=A.aaQ(E,E[0]+NH[0]);}}
if(!!Gx[1]){var Hj=((this.OY&0x10)===0x10);var Hg=((this.OY&0x20)===0x20);if(Hj&&
!Hg)E=[].concat(E.slice(0,3),E[3]+Gx[1]);else if(!Hj&&Hg)E=A.aaS(E,E[1]-Gx[1]);else{
E=A.aaS(E,E[1]-((Gx[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+NH[1]);}}}A.Core.O.G.
call(this,E);},Ah:function(Ae){var B;A.Core.O.Ah.call(this,Ae);var A9w=!!this.Appearance&&(((((((
!!this.Appearance.Ar8||!!this.Appearance.Ar9)||!!this.Appearance.Ar_)||!!this.Appearance.
Ar7)||!!this.Appearance.Asa)||!!this.Appearance.Asb)||!!this.Appearance.Asc)||!!
this.Appearance.Ar$);var A9x=!!this.Appearance&&(((this.AAl!==A.jm)&&!!this.Appearance.
AsU)||((this.AAm!==A.jm)&&!!this.Appearance.AsV));var Anp=false;var Ay=[0,0,(B=this.
M)[2]-B[0],B[3]-B[1]];if(A9w&&!this.R4){this.R4=A._NewObject(A.abh.M2,0);this.J(
this.R4,0);Anp=true;}else if(!A9w&&!!this.R4){this.HA(this.R4);this.R4=null;}if(
A9x&&!this.Ox){this.Ox=A._NewObject(A.abh.Text,0);this.J(this.Ox,0);Anp=true;this.
Ox.Bfr(true);}else if(!A9x&&!!this.Ox){this.HA(this.Ox);this.Ox=null;}if(Anp){if(
!!this.R4)this.S4(this.R4);if(!!this.Ox)this.S4(this.Ox);}var FV=((Ae&0x10)===0x10
);var Gz=((Ae&0x40)===0x40);var Fw=((this.CK.Down&&this.CK.W0)||this.C4.Down)||this.
Bi.Bw;var AqT=this.T9;if(!!this.R4){var bitmap;var YC;var Ew=this.Appearance.AJ5;
var AL=Ay;if(AqT){if(!FV){bitmap=this.Appearance.Asb;YC=this.Appearance.AKa;}else
if(Fw){bitmap=this.Appearance.Ar$;YC=this.Appearance.AJ_;}else if(Gz){bitmap=this.
Appearance.Asc;YC=this.Appearance.AKb;}else{bitmap=this.Appearance.Asa;YC=this.Appearance.
AJ$;}}else if(!FV){bitmap=this.Appearance.Ar9;YC=this.Appearance.AJ8;}else if(Fw
){bitmap=this.Appearance.Ar7;YC=this.Appearance.AJ6;}else if(Gz){bitmap=this.Appearance.
Ar_;YC=this.Appearance.AJ9;}else{bitmap=this.Appearance.Ar8;YC=this.Appearance.AJ7;
}this.R4.XD(YC<0);this.R4.L(0xFFFFFFFF);if(YC<0)YC=0;if(!!bitmap&&!((Ew&0x1)===0x1
)){var Hh=((Ew&0x4)===0x4);var Hi=((Ew&0x8)===0x8);var BP=bitmap.FrameSize[0];if(
Hh&&!Hi)AL=A.aaQ(AL,AL[0]+BP);else if(!Hh&&Hi)AL=[].concat(AL[2]-BP,AL.slice(1,4
));else{AL=[].concat((((AL[2]-AL[0])/2)|0)-((BP/2)|0),AL.slice(1,4));AL=A.aaQ(AL
,AL[0]+BP);}}if(!!bitmap&&!((Ew&0x2)===0x2)){var Hj=((Ew&0x10)===0x10);var Hg=((
Ew&0x20)===0x20);var BG=bitmap.FrameSize[1];if(Hj&&!Hg)AL=[].concat(AL.slice(0,3
),AL[1]+BG);else if(!Hj&&Hg)AL=A.aaS(AL,AL[3]-BG);else{AL=A.aaS(AL,(((AL[3]-AL[1
])/2)|0)-((BG/2)|0));AL=[].concat(AL.slice(0,3),AL[1]+BG);}}this.R4.Ce(YC);this.
R4.At(bitmap);this.R4.G(AL);}if(!!this.Ox){var Agf;var font;var AW4;if(AqT){font=
this.Appearance.AsV;AW4=this.AAm;if(!FV)Agf=this.Appearance.AMZ;else if(Fw)Agf=this.
Appearance.AMX;else if(Gz)Agf=this.Appearance.AM0;else Agf=this.Appearance.AMY;}
else{font=this.Appearance.AsU;AW4=this.AAl;if(!FV)Agf=this.Appearance.AMV;else if(
Fw)Agf=this.Appearance.AMT;else if(Gz)Agf=this.Appearance.AMW;else Agf=this.Appearance.
AMU;}this.Ox.G([Ay[0]+this.Appearance.AMS,Ay[1],Ay[2],Ay[3]]);this.Ox.A0(this.Appearance.
AMR);this.Ox.Y(font);this.Ox.R(AW4);this.Ox.L(Agf);this.Ox.KH(true);this.Ox.Bfq(
true);}},Am$:function(H){var A9J=this.C4.Filter;this.C4.Filter=149;if(!A9J&&!!this.
C4.Filter)this.CS(0x4,0x0);if(!!A9J&&!this.C4.Filter)this.CS(0x0,0x4);if(!!this.
Appearance)this.G(this.M);this.Al();},Oq:function(H){var F;if(!!this.Q)this.AoU((
F=this.Q,F[1].call(F[0])));},Ps:function(H){var F;this.Al();this.AoU(!this.T9);if(
!!this.Q){(F=this.Q,F[2].call(F[0],this.T9));A.aat(this.Q,0);}},Btv:function(H){
var F;var Ank=0;if(!!this.Appearance)Ank=50;this.CK.An(true);this.Al();if(((this.
C4.Bp-this.AXO)|0)>=Ank){this.AoU(!this.T9);if(!!this.Q){(F=this.Q,F[2].call(F[0
],this.T9));A.aat(this.Q,0);}}else{this.Bi.UR(Ank-((this.C4.Bp-this.AXO)|0));this.
Bi.An(true);}},AgH:function(H){var F;this.CK.An(false);this.Al();if(this.Bi.Bw){
this.Bi.An(false);this.AoU(!this.T9);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.
T9));A.aat(this.Q,0);}}this.AXO=this.C4.Bp;},Btd:function(H){this.Al();},Bs_:function(
H){this.Al();},Axa:function(H){var F;var Ank=0;if(!!this.Appearance)Ank=50;this.
C4.Bw=true;if(!this.CK.W0)return;if(this.CK.MT)return;if(this.CK.IW>=Ank){this.AoU(
!this.T9);if(!!this.Q){(F=this.Q,F[2].call(F[0],this.T9));A.aat(this.Q,0);}}else{
this.Bi.UR(Ank-this.CK.IW);this.Bi.An(true);}},Aw$:function(H){var F;this.C4.Bw=
false;if(this.Bi.Bw){this.Bi.An(false);this.AoU(!this.T9);if(!!this.Q){(F=this.Q
,F[2].call(F[0],this.T9));A.aat(this.Q,0);}}},AD:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.Oq],this.Q,0);this.Q=E;if(!!E)A.za([this,this.Oq],E,
0);if(!!E)A.ow([this,this.Oq],this);},AoU:function(E){if(this.T9===E)return;this.
T9=E;this.Al();},A3R:function(E){if((E===this.AAl)&&(E===this.AAm))return;this.AAl=
E;this.AAm=E;this.Al();},OnSetAppearance:function(E){if(this.Appearance===E)return;
if(!!this.Appearance)A.zl([this,this.Am$],this.Appearance,0);this.Appearance=E;if(
!!E)A.y_([this,this.Am$],E,0);A.ow([this,this.Am$],this);},_Init:function(aArg){
A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bi={I:this},0);A.Core.
B1._Init.call(this.C4={I:this},0);A.Core.Bd._Init.call(this.CK={I:this},0);this.
__proto__=C.Te;this.G(BI);this.Bi.P4(0);this.Bi.UR(50);this.C4.Filter=149;this.CK.
AW(0x3F);this.CK.J$(EH);this.CK.J_(Gv);this.CK.DL(I5);this.CK.D5(Iq);this.CK.BgE(
16);this.CK.ABA(100);this.J(this.CK,0);this.Bi.Mz=[this,this.Ps];this.C4.KF=[this
,this.Btv];this.C4.B2=[this,this.AgH];this.CK.AA0=[this,this.Btd];this.CK.As1=[this
,this.Bs_];this.CK.KF=[this,this.Axa];this.CK.B2=[this,this.Aw$];},_Done:function(
){this.__proto__=A.Core.O;this.Bi._Done();this.C4._Done();this.CK._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Bi._ReInit(
);this.C4._ReInit();this.CK._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Ox)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Appearance)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CK)._cycle!=D)B._Mark(B._cycle=D);},_className:"WidgetSet::ToggleButton"};
C._Init=function(){C.AzO.__proto__=C.AlW;C.AQi.__proto__=C.AlW;C.AzN.__proto__=A.
Core.O;C.Te.__proto__=A.Core.O;};C._ReInit=function(){};C.Dq=function(D){var B;if((
B=C.Ab2[0]._this)&&(B._cycle!=D))B._Done(C.Ab2[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */