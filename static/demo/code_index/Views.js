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
);if(index.abh)throw new Error("The unit file 'Views.js' included twice!");index.
abh=(function(){var A=index;var C={};
var B$=[1,1];var BH=[0,0];var EV=[0,0,0,0];var GT="\uFEFF";var Jt="No matrix to perform 3D transformation";
var IL="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DU={Kt:null,Aki:1,Akh:1,AP:0xFFFFFFFF,J_:function(CW,aClip,aOffset,Ce,aBlend){var
B;var AfA=this.Akh;var AfB=this.Aki;var AcB=A.aak(this.Ek,aOffset);var AcC=A.aak(
this.Et,aOffset);var AkC;var AkD;var BK=this.AP;if(A.z8(AcB,AcC))return;aBlend=aBlend&&((
this.U&0x2)===0x2);Ce=Ce+1;AkC=AkD=BK;if(Ce<256){AkC=(AkC&0x00FFFFFF)|((((Ce*((AkC>>
24)&0xFF))>>8)&0xFF)<<24);AkD=(AkD&0x00FFFFFF)|((((Ce*((AkD>>24)&0xFF))>>8)&0xFF
)<<24);}if((AfA===1)&&(AfB===1))CW.AtA(aClip,AcB,AcC,AkC,AkD,aBlend);else CW.BeC(
aClip,AcB,AcC,AfA,AfB,AkC,AkD,aBlend);},GetExtent:function(){var AfA=this.Akh;var
AfB=this.Aki;var AcB=this.Ek;var AcC=this.Et;if(((AfA===1)&&(AfB===1))||A.z8(AcB
,AcC))return A.Core.Ajp.GetExtent.call(this);var AhM=AfA/2;var AhN=AfB/2;var Aoa=
AcB[0];var Aob=AcB[1];var Aoc=AcC[0];var Aod=AcC[1];var JY=Aoc-Aoa;var JZ=Aod-Aob;
var IR=Math.sqrt((JY*JY)+(JZ*JZ));JY=JY/IR;JZ=JZ/IR;var A$b=Aoa+(JZ*AhM);var A$c=
Aob-(JY*AhM);var AHA=Aoc+(JZ*AhN);var AHB=Aod-(JY*AhN);var AHC=Aoc-(JZ*AhN);var AHD=
Aod+(JY*AhN);var AHE=Aoa-(JZ*AhM);var AHF=Aob+(JY*AhM);var left=A$b;var right=A$b;
var top=A$c;var bottom=A$c;if(AHA<left)left=AHA;if(AHC<left)left=AHC;if(AHE<left
)left=AHE;if(AHA>right)right=AHA;if(AHC>right)right=AHC;if(AHE>right)right=AHE;if(
AHB<top)top=AHB;if(AHD<top)top=AHD;if(AHF<top)top=AHF;if(AHB>bottom)bottom=AHB;if(
AHD>bottom)bottom=AHD;if(AHF>bottom)bottom=AHF;var AM=[left|0,top|0,right|0,bottom|
0];AM=[].concat(AM.slice(0,2),A.aak(AM.slice(2,4),B$));return AM;},Re:function(H
){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},A7t:function(
E){var B;if(E<1)E=1;if(E===this.Aki)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Aki=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Akh!==1))&&!this.Kt){this.Kt=A.zW(A.abj.Aru
);if(this.Kt.Oy)A.y_([this,this.Re],this.Kt,0);}if(((E===1)&&(this.Akh===1))&&!!
this.Kt){if(this.Kt.Oy)A.zl([this,this.Re],this.Kt,0);this.Kt=null;}},A7s:function(
E){var B;if(E<1)E=1;if(E===this.Akh)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Akh=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Aki!==1))&&!this.Kt){this.Kt=A.zW(A.abj.Aru
);if(this.Kt.Oy)A.y_([this,this.Re],this.Kt,0);}if(((E===1)&&(this.Aki===1))&&!!
this.Kt){if(this.Kt.Oy)A.zl([this,this.Re],this.Kt,0);this.Kt=null;}},NR:function(
E){var B;if(E<1)E=1;if((E===this.Akh)&&(E===this.Aki))return;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Akh=E;this.Aki=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((E!==1)&&!this.Kt){this.Kt=A.
zW(A.abj.Aru);if(this.Kt.Oy)A.y_([this,this.Re],this.Kt,0);}if((E===1)&&!!this.Kt
){if(this.Kt.Oy)A.zl([this,this.Re],this.Kt,0);this.Kt=null;}},L:function(E){var
B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400
);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(
0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg){A.Core.Ajp._Init.call(this
,aArg);this.__proto__=C.DU;},_Mark:function(D){var B;A.Core.Ajp._Mark.call(this,
D);if((B=this.Kt)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Line"};
C.AH={ALa:0xFFFFFFFF,ALb:0xFFFFFFFF,ALf:0xFFFFFFFF,ALe:0xFFFFFFFF,AP:0xFFFFFFFF,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var Du=this.ALe;var DK=this.ALf;var
DF=this.ALa;var DJ=this.ALb;var BK=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Ce=
Ce+1;if((((Du===DK)&&(DF===DJ))&&(Du===DF))&&(Du===0xFFFFFFFF))Du=DK=DF=DJ=BK;else
if(BK!==0xFFFFFFFF){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*(((BK>>24)&0xFF)+1))>>
8)&0xFF)<<24);Du=(Du&0xFFFFFF00)|((((Du&0xFF)*((BK&0xFF)+1))>>8)&0xFF);Du=(Du&0xFFFF00FF
)|((((((Du>>8)&0xFF)*(((BK>>8)&0xFF)+1))>>8)&0xFF)<<8);Du=(Du&0xFF00FFFF)|((((((
Du>>16)&0xFF)*(((BK>>16)&0xFF)+1))>>8)&0xFF)<<16);DK=(DK&0x00FFFFFF)|((((((DK>>24
)&0xFF)*(((BK>>24)&0xFF)+1))>>8)&0xFF)<<24);DK=(DK&0xFFFFFF00)|((((DK&0xFF)*((BK&
0xFF)+1))>>8)&0xFF);DK=(DK&0xFFFF00FF)|((((((DK>>8)&0xFF)*(((BK>>8)&0xFF)+1))>>8
)&0xFF)<<8);DK=(DK&0xFF00FFFF)|((((((DK>>16)&0xFF)*(((BK>>16)&0xFF)+1))>>8)&0xFF
)<<16);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*(((BK>>24)&0xFF)+1))>>8)&0xFF)<<24
);DF=(DF&0xFFFFFF00)|((((DF&0xFF)*((BK&0xFF)+1))>>8)&0xFF);DF=(DF&0xFFFF00FF)|((((((
DF>>8)&0xFF)*(((BK>>8)&0xFF)+1))>>8)&0xFF)<<8);DF=(DF&0xFF00FFFF)|((((((DF>>16)&
0xFF)*(((BK>>16)&0xFF)+1))>>8)&0xFF)<<16);DJ=(DJ&0x00FFFFFF)|((((((DJ>>24)&0xFF)
*(((BK>>24)&0xFF)+1))>>8)&0xFF)<<24);DJ=(DJ&0xFFFFFF00)|((((DJ&0xFF)*((BK&0xFF)+
1))>>8)&0xFF);DJ=(DJ&0xFFFF00FF)|((((((DJ>>8)&0xFF)*(((BK>>8)&0xFF)+1))>>8)&0xFF
)<<8);DJ=(DJ&0xFF00FFFF)|((((((DJ>>16)&0xFF)*(((BK>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}CW.
AtQ(aClip,A.aam(this.M,aOffset),Du,DK,DJ,DF,aBlend);},AuX:function(E){var B;if(E===
this.ALa)return;this.ALa=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},AuY:function(E){var B;if(E===this.ALb)return;this.ALb=E;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},Au1:function(E){var B;if(E===this.ALf)return;this.
ALf=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},Au0:function(E){var
B;if(E===this.ALe)return;this.ALe=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},E$:function(){var B;return((this.U&0x1)===0x1
);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg
){A.Core.EC._Init.call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"
};C.CC={Width:1,AP:0xFFFFFFFF,J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var Du;
var DK;var DF;var DJ;var BK=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Ce=Ce+1;
Du=DK=DF=DJ=BK;if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((
Ce*((DF>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8
)&0xFF)<<24);}CW.BeA(aClip,A.aam(this.M,aOffset),this.Width,Du,DK,DJ,DF,aBlend);
},NR:function(E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(
E){if(E)this.C4(0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg){A.Core.EC.
_Init.call(this,aArg);this.__proto__=C.CC;},_className:"Views::Border"};C.NI={timer:
null,Aj:null,ME:-1,AP:0xFFFFFFFF,AtB:0x1F,Tc:0,Dq:0,Amp:A.vw,UO:false,J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;var Nm=this.Tc;if(this.ME>=0)Nm=this.ME;if(!this.
Aj||(Nm>=this.Aj.NoOfFrames))return;this.Aj.Update();var Du;var DK;var DJ;var DF;
var BK=this.AP;var J5=(((Ce+1)*255)>>8)+1;var N_=this.AtB;var AM=A.aam(this.M,aOffset
);var AI0=A.aaj([AM[2]-AM[0],AM[3]-AM[1]],this.Amp);aBlend=aBlend&&((this.U&0x2)===
0x2);Du=DK=DF=DJ=BK;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF
)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF
)|((((((DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*
J5)>>8)&0xFF)<<24);}if(((this.Amp[0]>0)&&(AI0[0]>0))&&!((N_&0x5)===0x5)){var d=((
this.Aj.FrameSize[0]/3)|0)-AI0[0];if(((N_&0x1)===0x1)){if(aClip[2]>AM[2])aClip=A.
aaQ(aClip,AM[2]);if(d>0)AM=A.aaQ(AM,AM[2]+d);N_=N_|0x4;}else if(((N_&0x4)===0x4)
){if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.slice(1,4));if(d>0)AM=[].concat(
AM[0]-d,AM.slice(1,4));N_=N_|0x1;}else{if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.
slice(1,4));if(aClip[2]>AM[2])aClip=A.aaQ(aClip,AM[2]);if(d>0){AM=[].concat(AM[0
]-((d/2)|0),AM.slice(1,4));AM=A.aaQ(AM,(AM[2]+d)-((d/2)|0));}N_=N_|0x5;}}if(((this.
Amp[1]>0)&&(AI0[1]>0))&&!((N_&0xA)===0xA)){var d=((this.Aj.FrameSize[1]/3)|0)-AI0[
1];if(((N_&0x2)===0x2)){if(aClip[3]>AM[3])aClip=[].concat(aClip.slice(0,3),AM[3]
);if(d>0)AM=[].concat(AM.slice(0,3),AM[3]+d);N_=N_|0x8;}else if(((N_&0x8)===0x8)
){if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(d>0)AM=A.aaS(AM,AM[1]-d);N_=N_|0x2;
}else{if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(aClip[3]>AM[3])aClip=[].concat(
aClip.slice(0,3),AM[3]);if(d>0){AM=A.aaS(AM,AM[1]-((d/2)|0));AM=[].concat(AM.slice(
0,3),(AM[3]+d)-((d/2)|0));}N_=N_|0xA;}}CW.Bez(aClip,this.Aj,Nm,AM,N_,Du,DK,DJ,DF
,aBlend);},Re:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.
M);},Ma:function(H){var B;var Nm=this.ME;var SO=0;if(!!this.Aj)SO=this.Aj.NoOfFrames
*this.Aj.FrameDelay;if((!!this.timer&&(this.ME<0))&&(SO>0))this.Dq=this.timer.Bu-(
this.Tc*this.Aj.FrameDelay);if(!!this.timer&&(SO>0)){var Aq=(this.timer.Bu-this.
Dq)|0;Nm=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SO){Nm=Nm%this.Aj.NoOfFrames;this.Dq=this.
timer.Bu-(Aq%SO);}}if(((Nm!==this.ME)&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);this.ME=Nm;if(!SO&&!!this.timer){A.zl([this,this.Ma],this.timer,0);this.
timer=null;}},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},YD:function(E){var B;if(this.UO===E)return;
this.UO=E;this.ME=-1;if(!E&&!!this.timer){A.zl([this,this.Ma],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(A.abm.Af1);A.y_([this,this.Ma],this.
timer,0);A.ow([this,this.Ma],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},A6J:function(E){var B;if(E===this.AtB)return;this.AtB=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===
this.Tc)&&(this.ME===-1))return;this.Tc=E;if(!this.timer)this.ME=-1;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;
if(!!this.Aj&&this.Aj.Oy)A.zl([this,this.Re],this.Aj,0);this.Aj=E;this.ME=-1;if(
!!E&&E.Oy)A.y_([this,this.Re],E,0);if(this.UO){this.YD(false);this.YD(true);}if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C4(
0x1,0x0);else this.C4(0x0,0x1);},A6X:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[
1]<0)E=[E[0],0];if(A.z8(E,this.Amp))return;this.Amp=E;if((!!this.Ac&&((this.U&0x1
)===0x1))&&!((this.AtB&0xF)===0xF))this.Ac.Bg(this.M);},_Init:function(aArg){A.Core.
EC._Init.call(this,aArg);this.__proto__=C.NI;},_Mark:function(D){var B;A.Core.EC.
_Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Frame"};C.Ak={timer:
null,Aj:null,Dq:0,ME:0,AP:0xFFFFFFFF,J7:0x12,Tc:0,GN:255,UO:false,Aaa:false,J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;var Nm=this.Tc;if(this.ME>=0)Nm=this.ME;if(!this.
Aj||(Nm>=this.Aj.NoOfFrames))return;this.Aj.Update();var AD=this.C_();var CZ=this.
Aj.FrameSize;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;var Du;var DK;var DJ;var DF;
var BK=this.AP;var J5=(((Ce+1)*this.GN)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2
);Du=DK=DF=DJ=BK;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((
DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J5)>>8)&
0xFF)<<24);}if(A.z8([AD[2]-AD[0],AD[3]-AD[1]],CZ))CW.A22(aClip,this.Aj,Nm,A.aam(
this.M,aOffset),A.aaj(this.M.slice(0,2),AD.slice(0,2)),Du,DK,DJ,DF,aBlend);else CW.
Bk0(aClip,this.Aj,Nm,A.aam(AD,aOffset),[].concat(BH,CZ),Du,DK,DJ,DF,aBlend,true);
},Re:function(H){var B;if(((this.Aaa&&!!this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.
Aj.FrameSize[1]>0))this.G(this.C_());if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},Ma:function(H){var B;var Nm=this.ME;var SO=0;if(!!this.Aj)SO=this.Aj.
NoOfFrames*this.Aj.FrameDelay;if((!!this.timer&&(this.ME<0))&&(SO>0))this.Dq=this.
timer.Bu-(this.Tc*this.Aj.FrameDelay);if(!!this.timer&&(SO>0)){var Aq=(this.timer.
Bu-this.Dq)|0;Nm=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SO){Nm=Nm%this.Aj.NoOfFrames;this.
Dq=this.timer.Bu-(Aq%SO);}}if(((Nm!==this.ME)&&!!this.Ac)&&((this.U&0x1)===0x1))
this.Ac.Bg(this.M);this.ME=Nm;if(!SO&&!!this.timer){A.zl([this,this.Ma],this.timer
,0);this.timer=null;}},I2:function(E){if(E===this.Aaa)return;this.Aaa=E;if(((E&&
!!this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.Aj.FrameSize[1]>0))this.G(this.C_()
);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},YD:function(E){var B;if(this.UO===E)return;this.UO=
E;this.ME=-1;if(!E&&!!this.timer){A.zl([this,this.Ma],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.Af1);A.y_([this,this.Ma],this.timer,0);
A.ow([this,this.Ma],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},A2:function(E){var B;if(E===this.J7)return;this.J7=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===this.Tc)&&(
this.ME===-1))return;this.Tc=E;if(!this.timer)this.ME=-1;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;if(!
!this.Aj&&this.Aj.Oy)A.zl([this,this.Re],this.Aj,0);this.Aj=E;this.ME=-1;if(!!E&&
E.Oy)A.y_([this,this.Re],E,0);if(this.UO){this.YD(false);this.YD(true);}if(((this.
Aaa&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.G(this.C_());if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},DD:function(E){var B;if(E>255)E=255;if(E<
0)E=0;if(E===this.GN)return;this.GN=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400);},E$:
function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(0x1,0x0
);else this.C4(0x0,0x1);},C_:function(){var B;if(!this.Aj)return EV;var Br=this.
J7;var CZ=this.Aj.FrameSize;var A8=this.M;var width=A8[2]-A8[0];var height=A8[3]-
A8[1];if(!CZ[0]||!CZ[1])return EV;var C9=[0,0,width,height];var BX=C9;if(((Br&0x40
)===0x40)){var A1b=((((C9[2]-C9[0])<<16)+((CZ[0]/2)|0))/CZ[0])|0;var Azf=((((C9[
3]-C9[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var Ah_=A1b;if(Azf>Ah_)Ah_=Azf;BX=A.aaO(BX
,((CZ[0]*Ah_)+32768)>>16);BX=A.aaL(BX,((CZ[1]*Ah_)+32768)>>16);}else if(((Br&0x80
)===0x80)){var A1b=((((C9[2]-C9[0])<<16)+((CZ[0]/2)|0))/CZ[0])|0;var Azf=((((C9[
3]-C9[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var Ah_=A1b;if(Azf<Ah_)Ah_=Azf;BX=A.aaO(BX
,((CZ[0]*Ah_)+32768)>>16);BX=A.aaL(BX,((CZ[1]*Ah_)+32768)>>16);}else if(!((Br&0x100
)===0x100))BX=A.aaN(BX,CZ);if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&0x4)===0x4)
)BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX,(C9[0]+(((
C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-C9[1])){if(((
Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x10)===0x10))BX=
A.aaR(BX,(C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}BX=A.aam(BX,A8.slice(
0,2));return BX;},Bha:function(){return this.AP;},AP$:function(){return this.Tc;
},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Ak;},_Mark:
function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Views::Image"};C.Text={B6:null,Ej:null,CG:A.jm,String:A.jm,N7:null,Alp:A.vw,I3:
0,Sc:0,AbN:0,Bp:A.vw,J7:0x12,AP:0xFFFFFFFF,AeN:false,Aaa:false,Xz:false,ALW:false
,HR:false,K3:function(){if(!!this.N7){this.AZt(this.N7);this.N7=null;}},J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;if((this.CG===A.jm)||!this.B6)return;var Br=this.
J7;var font=this.B6;var C9=A.aam(this.M,aOffset);var Du;var DK;var DJ;var DF;var
col=this.AP;var J5=(((Ce+1)*255)>>8)+1;var J4=this.CG.charCodeAt(0)||0;var AD=A.
aam(this.C_(),aOffset);var Bo=[C9[0]-AD[0],(C9[1]-AD[1])-font.Ascent];if(J4<1)return;
Du=DK=DF=DJ=col;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((
DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J5)>>8)&
0xFF)<<24);}if(((Br&0x80)===0x80)){if(this.Ajd())Br=(Br&~0x80)|0x4;else Br=(Br&~
0x80)|0x1;}if((J4===1)&&!((Br&0x40)===0x40)){CW.A3u(aClip,font,this.CG,2,(this.CG.
charCodeAt(1)||0)-1,C9,Bo,0,0,Du,DK,DJ,DF,true);return;}var leading=font.Leading;
if(this.Sc>0)leading=(this.Sc-font.Ascent)-font.Descent;var ZX=(font.Ascent+font.
Descent)+leading;var Buv=aClip[1]-AD[1];var Buw=aClip[3]-AD[1];var AYH=AD[2]-AD[
0];var Dl=0;var P=1;var BK=this.CG.charCodeAt(1)||0;while(((Dl+ZX)<Buv)&&(BK>0)){
P=P+BK;Dl=Dl+ZX;BK=this.CG.charCodeAt(P)||0;}while((Dl<Buw)&&(BK>0)){var L6=A.aaj(
Bo,[0,Dl]);var Alj=0;var OW=false;if(((((Br&0x40)===0x40)&&((this.CG.charCodeAt((
P+BK)-1)||0)!==0x0A))&&((this.CG.charCodeAt(P+1)||0)!==0x0A))&&((this.CG.charCodeAt(
P+BK)||0)!==0x00))OW=true;if(OW&&!!(Br&0x6)){var AoS=P+BK;var Axv=this.CG.indexOf(
String.fromCharCode(0x20),P+1);var Axw=this.CG.indexOf(String.fromCharCode(0xA0)
,P+1);if(((Axv<0)||(Axv>=AoS))&&((Axw<0)||(Axw>=AoS)))OW=false;}if(OW)Alj=AYH;else
if(((Br&0x4)===0x4))L6=[(L6[0]-AYH)+font.XJ(this.CG,P+1,BK-1),L6[1]];else if(((Br&
0x2)===0x2))L6=[(L6[0]-((AYH/2)|0))+((font.XJ(this.CG,P+1,BK-1)/2)|0),L6[1]];CW.
A3u(aClip,font,this.CG,P+1,BK-1,C9,L6,Alj,0,Du,DK,DJ,DF,true);P=P+BK;Dl=Dl+ZX;BK=
this.CG.charCodeAt(P)||0;}},G:function(E){var B;if(A.z9(E,this.M))return;var Bci;
Bci=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bci&&!this.AbN)&&this.AeN)&&this.HR
)&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this
);}if(((this.Xz&&this.HR)&&!A.z8([(B=this.M)[2]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-
E[1]]))&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HR=false;A.ow([this,this.
OZ],this);}A.Core.EC.G.call(this,E);A.ow([this,this.Ah3],this);},Bun:function(aBidi
,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.ze(aBidi,aRowStart,aRowEnd
,aIndex);return aIndex;},Bum:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)
return aIndex;aIndex=A.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},AZt:function(
aBidi){if(!aBidi)return;A.qU(aBidi);},BuI:function(aSize){var bidi=null;bidi=A.vj(
aSize);return bidi;},Ah3:function(H){A.ow(this.Ej,this);},OZ:function(H){A.ow([this
,this.WW],this);},WW:function(H){var B;if(this.HR)return;var width=(B=this.M)[2]-
B[0];var height=(B=this.M)[3]-B[1];var WM=-1;var font=this.B6;if((!!font&&!!!font.
Ascent)&&!!!font.Descent)font=null;if(this.AeN){if(this.AbN>0)WM=this.AbN;else if(
!this.Aaa)WM=width-(this.I3*2);else WM=width;if(WM<0)WM=1;}if(!!this.N7){this.AZt(
this.N7);this.N7=null;}this.HR=true;if((this.String!==A.jm)&&!!font){var length=
this.String.length;if(this.ALW)this.N7=this.BuI(length);this.CG=font.Bkq(this.String
,0,WM,length,this.N7);if(!!this.N7&&!this.BfQ()){this.AZt(this.N7);this.N7=null;
}}else this.CG=A.jm;this.Alp=BH;if(((this.Xz&&(this.CG!==A.jm))&&!this.Aaa)&&!!font
){var Br=this.J7;var leading=font.Leading;var Ip=this.CG;var AIY=this.Ajd();if(((
Br&0x80)===0x80)){if(AIY)Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sc>0)
leading=(this.Sc-font.Ascent)-font.Descent;var Aza=(font.Ascent+font.Descent)+leading;
var J4=Ip.charCodeAt(0)||0;var Ak1=((height+leading)/Aza)|0;var AYW=false;var AHI=
false;if(Ak1<=0)Ak1=1;if(J4>Ak1){var A9=0;var Azb=0;var AIW=J4-1;var KQ;var Nn=Ip.
length;var tmp=A.jm;if(!!(Br&0x110)&&!!(Br&0x28))Br&=~0x110;if(!!(Br&0x110))Br&=
~0x28;if(((Br&0x20)===0x20))Azb=J4-Ak1;else if(((Br&0x10)===0x10)||((Br&0x100)===
0x100)){Azb=((J4-Ak1)/2)|0;AIW=(Azb+Ak1)-1;}else AIW=Ak1-1;AYW=Azb>0;AHI=AIW<(J4-
1);for(KQ=1;A9<Azb;A9=A9+1)KQ=KQ+(Ip.charCodeAt(KQ)||0);if(AHI)for(Nn=KQ;A9<AIW;
A9=A9+1)Nn=Nn+(Ip.charCodeAt(Nn)||0);if(AYW){var IR=Ip.charCodeAt(KQ)||0;tmp=(GT+
A.aaY(Ip,KQ,IR))+GT;tmp=A.aaT(tmp,0,(IR+2)&0xFFFF);KQ=KQ+IR;if((tmp.charCodeAt(IR
)||0)===0x0A){tmp=A.aaT(tmp,IR,0xFEFF);tmp=A.aaT(tmp,IR+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(tmp,1,0x0A);}else tmp=A.aaT(tmp
,1,0xFEFF);}tmp=tmp+A.aaY(Ip,KQ,Nn-KQ);if(AHI&&(Nn>=KQ)){var IR=Ip.charCodeAt(Nn
)||0;var P7=(GT+A.aaY(Ip,Nn,IR))+GT;P7=A.aaT(P7,0,(IR+2)&0xFFFF);P7=A.aaT(P7,1,0xFEFF
);if((P7.charCodeAt(IR)||0)===0x0A){P7=A.aaT(P7,IR,0xFEFF);P7=A.aaT(P7,IR+1,0x0A
);}if((P7.charCodeAt(2)||0)===0x0A){P7=A.aaT(P7,2,0xFEFF);P7=A.aaT(P7,1,0x0A);}else
P7=A.aaT(P7,1,0xFEFF);tmp=tmp+P7;}Ip=String.fromCharCode(Ak1&0xFFFF)+tmp;}var A9=
0;var inx=1;var AIx=width-(this.I3*2);if(this.AeN&&(this.AbN>0))AIx=this.AbN;J4=
Ip.charCodeAt(0)||0;for(;A9<J4;A9=A9+1){var Alh=AYW&&!A9;var Ali=AHI&&(A9===(J4-
1));var Wz=false;var WA=false;var AsQ=AIY;if((AIY&&Alh)&&!Ali){Alh=false;Ali=true;
}else if((AIY&&Ali)&&!Alh){Ali=false;Alh=true;}var WX=inx+1;var IR=Ip.charCodeAt(
inx)||0;var KQ=WX;var Nn=(WX+IR)-2;var AZL=-1;var AZM=-1;if(!this.AeN&&(font.XJ(
Ip,WX,IR-1)>AIx)){var AnM=Br;if(((AnM&0x2)===0x2)&&!!(AnM&0x5))AnM&=~0x2;if(((AnM&
0x2)===0x2))AnM&=~0x5;if(((AnM&0x4)===0x4))Wz=true;else if(((AnM&0x2)===0x2)){Wz=
true;WA=true;}else WA=true;}if((Ip.charCodeAt(KQ)||0)===0x0A)KQ=KQ+1;if((Ip.charCodeAt(
Nn)||0)===0x0A)Nn=Nn-1;while(Wz&&((Ip.charCodeAt(KQ)||0)===0xFEFF))KQ=KQ+1;while(
WA&&((Ip.charCodeAt(Nn)||0)===0xFEFF))Nn=Nn-1;Wz=Wz&&!Ali;WA=WA&&!Alh;while((((Wz||
WA)||Alh)||Ali)&&(KQ<Nn)){if((Wz&&(AsQ||!WA))||Alh){if(AZL>0)Ip=A.aaT(Ip,AZL,0xFEFF
);Ip=A.aaT(Ip,KQ,0x2026);AZL=KQ;KQ=KQ+1;AsQ=!AsQ;Alh=false;if(font.XJ(Ip,WX,IR-1
)<=AIx){Wz=false;WA=false;}else Wz=Wz||!WA;}if((WA&&(!AsQ||!Wz))||Ali){if(AZM>0)
Ip=A.aaT(Ip,AZM,0xFEFF);Ip=A.aaT(Ip,Nn,0x2026);AZM=Nn;Nn=Nn-1;AsQ=!AsQ;Ali=false;
if(font.XJ(Ip,WX,IR-1)<=AIx){Wz=false;WA=false;}else WA=WA||!Wz;}}inx=inx+IR;}this.
Alp=[font.A3Y(Ip),((Ip.charCodeAt(0)||0)*Aza)-leading];this.CG=Ip;}if(this.Aaa&&(
this.CG!==A.jm)){var AsC=[this.I3,0];this.U=this.U|0x2000;this.G(A.aal(A.z4(this.
C_(),AsC),this.Bp));this.U=this.U&~0x2000;}if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);A.ow([this,this.Ah3],this);},BiH:function(E){if(E===this.ALW)return;
this.ALW=E;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);},HG:function(E){
if(E<0)E=0;if(this.I3===E)return;this.I3=E;this.CG=A.jm;this.HR=false;A.ow([this
,this.OZ],this);},BjW:function(E){var B;if(E<0)E=0;if(this.Sc===E)return;this.Sc=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);if(this.Xz){this.CG=A.jm;
this.HR=false;A.ow([this,this.OZ],this);}if(this.Aaa&&this.HR)this.G(A.aal(this.
C_(),this.Bp));if(this.HR)A.ow([this,this.Ah3],this);},BiG:function(E){if(E===this.
Xz)return;this.Xz=E;if(((this.AeN&&!!!this.AbN)||E)||!!this.Ej)this.U=this.U&~0x100;
else this.U=this.U|0x100;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);},
QA:function(E){if(A.z$(E,this.Ej))return;this.Ej=E;if(((!!!this.AbN&&this.AeN)||
!!E)||this.Xz)this.U=this.U&~0x100;else this.U=this.U|0x100;},I2:function(E){if(
E===this.Aaa)return;this.Aaa=E;if(E&&this.Xz){this.CG=A.jm;this.HR=false;A.ow([this
,this.OZ],this);}if(E&&this.HR){var AsC=[this.I3,0];this.U=this.U|0x2000;this.G(
A.aal(A.z4(this.C_(),AsC),this.Bp));this.U=this.U&~0x2000;}},Bkb:function(E){if(
E<0)E=0;if(E===this.AbN)return;this.AbN=E;if(this.AeN&&this.HR){this.CG=A.jm;this.
HR=false;A.ow([this,this.OZ],this);}if(((!!!E&&this.AeN)||this.Xz)||!!this.Ej)this.
U=this.U&~0x100;else this.U=this.U|0x100;},KD:function(E){if(E===this.AeN)return;
this.AeN=E;if(this.HR){this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);}if(((
E&&!!!this.AbN)||this.Xz)||!!this.Ej)this.U=this.U&~0x100;else this.U=this.U|0x100;
},Gk:function(E){var B;if(A.z8(E,this.Bp))return;this.Bp=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);if(this.HR)A.ow([this,this.Ah3],this);},A2:function(
E){var B;if(E===this.J7)return;this.J7=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if(this.Xz){this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);}
if(this.HR)A.ow([this,this.Ah3],this);},R:function(E){if(E===this.String)return;
this.String=E;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);},Aa:function(
E){if(E===this.B6)return;this.B6=E;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ
],this);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.
C4(0x0,0x400);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(
E)this.C4(0x1,0x0);else this.C4(0x0,0x1);},Ajd:function(){if(!this.HR)this.WW(this
);if(!this.N7)return false;var result=false;var bidi=this.N7;result=A.vi(bidi);return result;
},BfQ:function(){if(!this.HR)this.WW(this);if(!this.N7)return false;var result=false;
var bidi=this.N7;result=A.zc(bidi);return result;},AES:function(aIndex){if(((this.
String===A.jm)||!this.B6)||this.Xz)return BH;if(!this.HR)this.WW(this);if(aIndex<
0)aIndex=0;var BvS=(this.CG.charCodeAt(0)||0)-1;var L$=this.CG.charCodeAt(1)||0;
var inx=1;var Aic=2;var A9=0;var col=-1;var CO=true;aIndex=aIndex+2;while((A9<BvS
)&&((inx+L$)<=aIndex)){inx=inx+L$;A9=A9+1;Aic=Aic+1;aIndex=aIndex+1;L$=this.CG.charCodeAt(
inx)||0;}if(aIndex>(inx+L$))aIndex=inx+L$;if(!!this.N7)aIndex=(inx+this.Bum(this.
N7,(inx+1)-Aic,(inx+L$)-Aic,(aIndex-inx)-1))+1;for(;aIndex>inx;inx=inx+1){var Il=
this.CG.charCodeAt(inx+1)||0;if(CO)col=col+1;CO=(Il!==0xFEFF)&&(Il!==0x0A);}return[
col,A9];},AmW:function(AnE){if(((this.String===A.jm)||!this.B6)||this.Xz)return 0;
if(!this.HR)this.WW(this);var A9=AnE[1];var col=AnE[0];var inx=1;var Aic=2;var J4=
this.CG.charCodeAt(0)||0;var L$=this.CG.charCodeAt(1)||0;if(A9>=J4){A9=J4-1;col=
this.CG.length;}if(A9<0){A9=0;col=0;}if(col<0)col=0;while((A9>0)&&(L$>0)){inx=inx+
L$;A9=A9-1;Aic=Aic+1;L$=this.CG.charCodeAt(inx)||0;}var WI=inx;var AIX=(inx-Aic)+
1;var AoS=(AIX+L$)-1;var AyZ=false;while((col>=0)&&(L$>1)){var Il=this.CG.charCodeAt(
inx+1)||0;inx=inx+1;L$=L$-1;AyZ=(Il===0xFEFF)||(Il===0x0A);if(!AyZ){col=col-1;WI=
inx;}}if((!AyZ&&(col>=0))&&((this.CG.charCodeAt(inx+1)||0)===0x00))AyZ=true;if(AyZ
)WI=WI+1;WI=WI-Aic;if(!!this.N7)WI=AIX+this.Bun(this.N7,AIX,AoS,WI-AIX);return WI;
},ARs:function(KK){var B;if((this.String===A.jm)||!this.B6)return BH;if(!this.HR
)this.WW(this);var AD=this.C_();if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return BH;var font=
this.B6;var Br=this.J7;var J4=this.CG.charCodeAt(0)||0;var leading=font.Leading;
if(KK[1]<AD[1])KK=[KK[0],AD[1]];if(KK[1]>=AD[3])KK=[KK[0],AD[3]-1];if(this.Sc>0)
leading=(this.Sc-font.Ascent)-font.Descent;var ZX=(font.Ascent+font.Descent)+leading;
var A9=((KK[1]-AD[1])/ZX)|0;var Nx=this.AA$(A9);var L$=Nx.length;var OW=false;if(((
Br&0x80)===0x80)){if(this.Ajd())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&
0x40)===0x40)&&(A9<(J4-1)))OW=true;if((OW&&(Nx.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nx.indexOf(String.fromCharCode(0xA0),0)<0))OW=false;if(OW){var inx=1;var
AoR=A9;while(AoR>0){inx=inx+(this.CG.charCodeAt(inx)||0);AoR=AoR-1;}if(((this.CG.
charCodeAt(inx+1)||0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx
)||0))-1)||0)===0x0A))OW=false;}var Alj=0;var FY=0;if(OW)Alj=AD[2]-AD[0];else if(((
Br&0x4)===0x4))FY=(AD[2]-AD[0])-font.XJ(Nx,0,L$);else if(((Br&0x2)===0x2))FY=(((
AD[2]-AD[0])/2)|0)-((font.XJ(Nx,0,L$)/2)|0);var col=font.Bfs(Nx,0,L$,(KK[0]-AD[0
])-FY,Alj);if(col<0)col=0;return[col,A9];},Aej:function(AnE){var B;if((this.String===
A.jm)||!this.B6)return BH;if(!this.HR)this.WW(this);var J4=this.CG.charCodeAt(0)||
0;var font=this.B6;var Br=this.J7;var A9=AnE[1];var col=AnE[0];if(A9>=J4){A9=J4-
1;col=this.CG.length;}if(A9<0){A9=0;col=0;}var Nx=this.AA$(A9);var L$=Nx.length;
var AD=this.C_();var OW=false;var leading=font.Leading;if(((Br&0x80)===0x80)){if(
this.Ajd())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)&&(A9<(
J4-1)))OW=true;if((OW&&(Nx.indexOf(String.fromCharCode(0x20),0)<0))&&(Nx.indexOf(
String.fromCharCode(0xA0),0)<0))OW=false;if(OW){var inx=1;var AoR=A9;while(AoR>0
){inx=inx+(this.CG.charCodeAt(inx)||0);AoR=AoR-1;}if(((this.CG.charCodeAt(inx+1)||
0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx)||0))-1)||0)===0x0A
))OW=false;}if(this.Sc>0)leading=(this.Sc-font.Ascent)-font.Descent;var Dl=(AD[1
]+(A9*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Alj=0;var FY=AD[0];
if(OW)Alj=AD[2]-AD[0];else if(((Br&0x4)===0x4))FY=AD[2]-font.XJ(Nx,0,L$);else if(((
Br&0x2)===0x2))FY=(FY+(((AD[2]-AD[0])/2)|0))-((font.XJ(Nx,0,L$)/2)|0);var pos=font.
Bfo(Nx,0,L$,col,Alj);if(pos<0)pos=0;return[FY+pos,Dl];},AMF:function(Ab){var B;if((
this.String===A.jm)||!this.B6)return EV;if(!this.HR)this.WW(this);var J4=this.CG.
charCodeAt(0)||0;var font=this.B6;if((Ab<0)||((Ab>=J4)&&(Ab>0)))return EV;var Br=
this.J7;var inx=1;var leading=font.Leading;var A8=this.M;var width=A8[2]-A8[0];var
height=A8[3]-A8[1];width=width-(this.I3*2);if(((Br&0x80)===0x80)){if(this.Ajd())
Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sc>0)leading=(this.Sc-font.Ascent
)-font.Descent;var Dl=Ab*((font.Ascent+font.Descent)+leading);var FY=0;while(Ab>
0){inx=inx+(this.CG.charCodeAt(inx)||0);Ab=Ab-1;}var Azc=(this.CG.charCodeAt(inx
)||0)-1;var Bcj=font.XJ(this.CG,inx+1,Azc);var A1a=font.A37(this.CG,inx+1,Azc);var
AoT=Bcj;var ZX=font.Ascent+font.Descent;var Azr=(J4*((font.Ascent+font.Descent)+
leading))-leading;if(!J4)Azr=ZX;if((((this.CG.charCodeAt((inx+Azc)+1)||0)===0x00
)||((this.CG.charCodeAt(inx+Azc)||0)===0x0A))||((this.CG.charCodeAt(inx+1)||0)===
0x0A))Br=Br&~0x40;if(((Br&0x40)===0x40)){var AoS=(inx+1)+Azc;var Axv=this.CG.indexOf(
String.fromCharCode(0x20),inx+1);var Axw=this.CG.indexOf(String.fromCharCode(0xA0
),inx+1);if(((Axv>=0)&&(Axv<AoS))||((Axw>=0)&&(Axw<AoS)))AoT=width;}if((!!(Br&0x110
)&&!!(Br&0x28))&&(Azr>height))Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;if((((Br&0x2)===
0x2)&&!!(Br&0x5))&&(AoT>width))Br&=~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if(((Br&0x4
)===0x4))FY=width-AoT;else if(((Br&0x2)===0x2))FY=((width/2)|0)-((AoT/2)|0);if(((
Br&0x20)===0x20))Dl=Dl+(height-Azr);else if(((Br&0x100)===0x100))Dl=((Dl+((height
/2)|0))-((Azr/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else if(((Br&0x10)===
0x10))Dl=(Dl+((height/2)|0))-((Azr/2)|0);FY=(FY+A1a[0])+this.I3;AoT=(AoT+(A1a[2]-
A1a[0]))-Bcj;var BX;{var BbO=[A8[0]+FY,A8[1]+Dl];BX=[].concat(BbO,A.aak(BbO,[AoT
,ZX]));}return A.aam(BX,this.Bp);},AA$:function(Ab){if((this.String===A.jm)||!this.
B6)return A.jm;if(!this.HR)this.WW(this);var J4=this.CG.charCodeAt(0)||0;var inx=
1;if((!this.B6||(Ab<0))||(Ab>=J4))return A.jm;while(Ab>0){inx=inx+(this.CG.charCodeAt(
inx)||0);Ab=Ab-1;}var WX=inx;var Asg=inx+(this.CG.charCodeAt(inx)||0);var Il=0x00;
do{WX=WX+1;Il=this.CG.charCodeAt(WX)||0;}while(((Il===0xFEFF)||(Il===0x0A))&&(WX<=
Asg));do{Asg=Asg-1;Il=this.CG.charCodeAt(Asg)||0;}while(((Il===0xFEFF)||(Il===0x0A
))&&(WX<=Asg));var Nx=A.aaY(this.CG,WX,(Asg-WX)+1);var Aoi;for(Aoi=Nx.indexOf(String.
fromCharCode(0xFEFF),0);Aoi>=0;Aoi=Nx.indexOf(String.fromCharCode(0xFEFF),Aoi+1)
){var WI=Aoi+1;while((Nx.charCodeAt(WI)||0)===0xFEFF)WI=WI+1;Nx=A.aa3(Nx,Aoi,WI-
Aoi);}return Nx;},C_:function(){var B;if((this.String===A.jm)||!this.B6)return EV;
if(!this.HR)this.WW(this);if(this.CG===A.jm)return EV;var leading=this.B6.Leading;
var Aza=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.Sc>0){leading=(
this.Sc-this.B6.Ascent)-this.B6.Descent;Aza=this.Sc;}if(A.z8(this.Alp,BH))this.Alp=[
this.B6.A3Y(this.CG),this.Alp[1]];this.Alp=[this.Alp[0],((this.CG.charCodeAt(0)||
0)*Aza)-leading];var Br=this.J7;var A8=this.M;var AsC=this.I3;var width=A8[2]-A8[
0];var height=A8[3]-A8[1];var C9=[AsC,0,width-AsC,height];var BX=[].concat(C9.slice(
0,2),A.aak(C9.slice(0,2),this.Alp));if(((Br&0x80)===0x80)){if(this.Ajd())Br=(Br&
~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)){var WM=this.AbN;if(WM<=
0)WM=width-(this.I3*2);if(WM<0)WM=0;if(WM>(BX[2]-BX[0]))BX=A.aaO(BX,WM);}if((!!(
Br&0x110)&&!!(Br&0x28))&&((BX[3]-BX[1])>(C9[3]-C9[1])))Br&=~0x110;if(!!(Br&0x110
))Br&=~0x28;if((((Br&0x2)===0x2)&&!!(Br&0x5))&&((BX[2]-BX[0])>(C9[2]-C9[0])))Br&=
~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&0x4)===
0x4))BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX,(C9[0
]+(((C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-C9[1]
)){if(((Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x100)===
0x100))BX=A.aaR(BX,((C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0))+(((this.
B6.Descent-this.B6.Ascent)/2)|0));else if(((Br&0x10)===0x10))BX=A.aaR(BX,(C9[1]+(((
C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}BX=A.aam(BX,A8.slice(0,2));return A.
aam(BX,this.Bp);},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.K3();this.__proto__=A.Core.EC;A.Core.EC._Done.call(
this);},_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.B6)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Views::Text"};C.Atm={attrString:null,AttrSet:null,String:A.jm,J7:
0x12,J_:function(CW,aClip,aOffset,Ce,aBlend){var B;if(!this.attrString||!this.AttrSet
)return;var AD=this.C_();Ce=Ce+1;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;CW.Bex(
aClip,this.AttrSet,this.attrString,A.aam(this.M,aOffset),A.aaj(this.M.slice(0,2)
,AD.slice(0,2)),(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,true);},G:function(
E){var B;if(A.z9(E,this.M))return;if(((((B=this.M)[2]-B[0])!==(E[2]-E[0]))&&!!this.
attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=null;A.ow([this,this.OZ
],this);}A.Core.EC.G.call(this,E);A.ow([this,this.Ah3],this);},Ah3:function(H){}
,WW:function(H){var B;var AJt;AJt=(B=this.M)[2]-B[0];if(AJt<0)AJt=1;if((this.String===
A.jm)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(this.String!==A.
jm))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A2n,0);if(!!this.attrString
)this.attrString.Bkp(this.AttrSet,this.String,AJt,false);if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.Ah3],this);},OZ:function(H){A.ow([
this,this.WW],this);},Bcd:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);},A2:function(E){var B;E&=~0x140;if(E===this.J7)return;this.J7=E;if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.Ah3],this);},
R:function(E){if(this.String===E)return;this.String=E;this.attrString=null;A.ow([
this,this.OZ],this);},A6t:function(E){if(this.AttrSet===E)return;if(!!this.AttrSet
){A.zl([this,this.Bcd],this.AttrSet,0);A.zl([this,this.OZ],this.AttrSet,1);}this.
AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.y_([this,this.Bcd],this.AttrSet
,0);A.y_([this,this.OZ],this.AttrSet,1);}A.ow([this,this.OZ],this);},C_:function(
){var B;if((this.String===A.jm)||!this.AttrSet)return EV;if(!this.attrString)this.
WW(this);if(!this.attrString)return EV;var Br=this.J7;var CZ=this.attrString.Bft(
);var C9=A.z4(this.M,BH);var BX=[].concat(C9.slice(0,2),A.aak(C9.slice(0,2),CZ));
if(!CZ[0]||!CZ[1])return EV;if(((Br&0x80)===0x80)){if(this.attrString.Ajd())Br=(
Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&
0x4)===0x4))BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX
,(C9[0]+(((C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-
C9[1])){if(((Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x10
)===0x10))BX=A.aaR(BX,(C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}return BX;
},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Atm;this.
U=0x3;},_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.attrString
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::AttrText"};C.Ag7={Fs:null,AhD:0,AhC:0,Um:A.vw,Cf:
A.aan(4,3,0,null),AEM:A.vw,SM:0,Aov:0,KB:function(E){if(A.z8(E,this.Kh))return;A.
Core.YR.KB.call(this,E);this.Cf.Set(3,0,E[0]);this.Cf.Set(3,1,E[1]);this.Cf.Set(
3,2,1);this.SM=0x45;this.Fs=null;A.ow([this,this.ArV],this);},KA:function(E){if(
A.z8(E,this.Mw))return;A.Core.YR.KA.call(this,E);this.Cf.Set(2,0,E[0]);this.Cf.Set(
2,1,E[1]);this.Cf.Set(2,2,1);this.SM=0x45;this.Fs=null;A.ow([this,this.ArV],this
);},DN:function(E){if(A.z8(E,this.Et))return;A.Core.YR.DN.call(this,E);this.Cf.Set(
1,0,E[0]);this.Cf.Set(1,1,E[1]);this.Cf.Set(1,2,1);this.SM=0x45;this.Fs=null;A.ow([
this,this.ArV],this);},D5:function(E){if(A.z8(E,this.Ek))return;A.Core.YR.D5.call(
this,E);this.Cf.Set(0,0,E[0]);this.Cf.Set(0,1,E[1]);this.Cf.Set(0,2,1);this.SM=0x45;
this.Fs=null;A.ow([this,this.ArV],this);},AYO:function(){return;},As5:function(H
){var B;if(this.SM===0x00)return;if(this.SM===0x45){var KR=A._NewObject(A.Graphics.
Awg,0);KR=KR.Bel(this.Cf.Get(0,0),this.Cf.Get(0,1),this.Cf.Get(1,0),this.Cf.Get(
1,1),this.Cf.Get(2,0),this.Cf.Get(2,1),this.Cf.Get(3,0),this.Cf.Get(3,1));if(!!KR
){KR.AAc(0,0);this.Cf.Set(0,2,KR.T_*240);KR.AAc(1,0);this.Cf.Set(1,2,KR.T_*240);
KR.AAc(1,1);this.Cf.Set(2,2,KR.T_*240);KR.AAc(0,1);this.Cf.Set(3,2,KR.T_*240);}this.
AYO();}if((((this.SM===0x4D)&&!!this.Fs)&&!!this.Um[0])&&!!this.Um[1]){var Aif=[
].concat(BH,this.Um);var Aie=this.AEM;var Afg=Aif[0]-Aie[0];var AM=Aif[2]-Aie[0];
var D2=Aif[1]-Aie[1];var Q6=Aif[3]-Aie[1];this.Fs.AjV(Afg,D2);this.Cf.Set(0,0,this.
Fs.T8+this.AhC);this.Cf.Set(0,1,this.Fs.T9+this.AhD);this.Cf.Set(0,2,this.Fs.T_);
this.Fs.AjV(AM,D2);this.Cf.Set(1,0,this.Fs.T8+this.AhC);this.Cf.Set(1,1,this.Fs.
T9+this.AhD);this.Cf.Set(1,2,this.Fs.T_);this.Fs.AjV(AM,Q6);this.Cf.Set(2,0,this.
Fs.T8+this.AhC);this.Cf.Set(2,1,this.Fs.T9+this.AhD);this.Cf.Set(2,2,this.Fs.T_);
this.Fs.AjV(Afg,Q6);this.Cf.Set(3,0,this.Fs.T8+this.AhC);this.Cf.Set(3,1,this.Fs.
T9+this.AhD);this.Cf.Set(3,2,this.Fs.T_);if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Ek=[(this.Cf.Get(0,0)+0.5)|0,(this.Cf.Get(0,1)+0.5)|
0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(this.Cf.Get(1,1)+0.5)|0];this.Mw=[(this.Cf.
Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5)|0];this.Kh=[(this.Cf.Get(3,0)+0.5)|0,(this.
Cf.Get(3,1)+0.5)|0];this.AYO();}this.Aov=this.SM;this.SM=0x00;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},ArV:function(s){this.As5(s);},Bj1:function(
E){if(A.z8(E,this.AEM))return;this.AEM=E;if((this.Aov!==0x45)&&(this.SM===0x00)){
this.SM=this.Aov;A.ow([this,this.ArV],this);}},AFd:function(AG4,KJ){var B;if(!KJ
)throw new Error(Jt);if(!this.Fs)this.Fs=A._NewObject(A.Graphics.Awg,0);this.Fs.
Bdy(KJ);this.AhC=AG4[0];this.AhD=AG4[1];this.Aov=0x4D;this.SM=0x00;if(!this.Um[0
]||!this.Um[1])return;var Aif=[].concat(BH,this.Um);var Aie=this.AEM;var Afg=Aif[
0]-Aie[0];var AM=Aif[2]-Aie[0];var D2=Aif[1]-Aie[1];var Q6=Aif[3]-Aie[1];this.Fs.
AjV(Afg,D2);this.Cf.Set(0,0,this.Fs.T8+this.AhC);this.Cf.Set(0,1,this.Fs.T9+this.
AhD);this.Cf.Set(0,2,this.Fs.T_);this.Fs.AjV(AM,D2);this.Cf.Set(1,0,this.Fs.T8+this.
AhC);this.Cf.Set(1,1,this.Fs.T9+this.AhD);this.Cf.Set(1,2,this.Fs.T_);this.Fs.AjV(
AM,Q6);this.Cf.Set(2,0,this.Fs.T8+this.AhC);this.Cf.Set(2,1,this.Fs.T9+this.AhD);
this.Cf.Set(2,2,this.Fs.T_);this.Fs.AjV(Afg,Q6);this.Cf.Set(3,0,this.Fs.T8+this.
AhC);this.Cf.Set(3,1,this.Fs.T9+this.AhD);this.Cf.Set(3,2,this.Fs.T_);if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Ek=[(this.Cf.Get(0,0)+
0.5)|0,(this.Cf.Get(0,1)+0.5)|0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(this.Cf.Get(
1,1)+0.5)|0];this.Mw=[(this.Cf.Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5)|0];this.Kh=[(
this.Cf.Get(3,0)+0.5)|0,(this.Cf.Get(3,1)+0.5)|0];if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.GetExtent());this.AYO();},_Init:function(aArg){A.Core.YR._Init.
call(this,aArg);(this.Cf=[]).__proto__=C.Ag7.Cf;this.__proto__=C.Ag7;this.U=0x3;
},_Mark:function(D){var B;A.Core.YR._Mark.call(this,D);if((B=this.Fs)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AS0={Fc:null,bitmap:null
,O:null,A$1:1,A$2:0,A$3:0,A$4:0,A$5:1,A$6:0,A$7:0,A$8:0,A$9:1,GN:255,AIr:false,J_:
function(CW,aClip,aOffset,Ce,aBlend){var B;if(!this.bitmap)return;this.bitmap.Update(
);var Nr=aOffset[0];var Ns=aOffset[1];var AD=[].concat(BH,this.Um);aBlend=aBlend&&((
this.U&0x2)===0x2);Ce=Ce+1;var BaO;var BaP;var BaQ;var BaR;var Bv1=this.GN;BaO=BaP=
BaQ=BaR=Bv1;var AkC=255|(255<<8)|(255<<16)|((((Ce*BaO)>>8)&0xFF)<<24);var AkD=255|(
255<<8)|(255<<16)|((((Ce*BaP)>>8)&0xFF)<<24);var Buo=255|(255<<8)|(255<<16)|((((
Ce*BaQ)>>8)&0xFF)<<24);var Bup=255|(255<<8)|(255<<16)|((((Ce*BaR)>>8)&0xFF)<<24);
aClip=A.z6(aClip,A.aam(EV,aOffset));CW.Ag6(aClip,this.bitmap,0,this.Cf.Get(0,0)+
Nr,this.Cf.Get(0,1)+Ns,this.Cf.Get(0,2),this.Cf.Get(1,0)+Nr,this.Cf.Get(1,1)+Ns,
this.Cf.Get(1,2),this.Cf.Get(2,0)+Nr,this.Cf.Get(2,1)+Ns,this.Cf.Get(2,2),this.Cf.
Get(3,0)+Nr,this.Cf.Get(3,1)+Ns,this.Cf.Get(3,2),AD,AkC,AkD,Buo,Bup,aBlend,true);
},GI:function(CK){if(!this.O||!this.Fc)return null;var BO=(A.Core.Adg.isPrototypeOf(
CK)?CK:null);var DY=(A.Core.App.isPrototypeOf(CK)?CK:null);if(!BO&&!DY)return null;
var Ff=BH;var B9=this.Fc.Ac;while(!!B9&&(B9!==this.O)){Ff=A.aaj(Ff,B9.M.slice(0,
2));B9=B9.Ac;}var W=this.Fc;if(!!BO&&!BO.Down)this.Fc=null;if(!!BO){BO.HV=A.aak(
this.Ast(BO.HV),Ff);BO.NJ=A.aak(this.Ast(BO.NJ),Ff);return W.GI(BO);}if(!!DY){var
Bv5=A.aak(this.Ast(A.aaj(DY.HV,DY.Dz)),Ff);DY.HV=A.aak(this.Ast(DY.HV),Ff);DY.NJ=
A.aak(this.Ast(DY.NJ),Ff);DY.Dz=A.aaj(DY.HV,Bv5);return W.GI(DY);}return C.Ag7.GI.
call(this,CK);},Xu:function(Dc,BG,N4,Ab4,Ab9,Ab8){var B;if(!this.O||!((this.O.U&
0x18)===0x18))return null;var pos=A.zT(Dc);pos=this.Ast(pos);var AoX=[].concat(BH
,this.Um);if(!A.vt(AoX,pos))return null;var Jz=this.O.Xu(A.aam(A.aam([0,0,Dc[2]-
Dc[0],Dc[3]-Dc[1]],pos),this.O.M.slice(0,2)),BG,N4,Ab4,null,Ab8);if(!!Jz)this.Fc=
Jz.Cd;else this.Fc=null;if(!!this.Fc)return A._NewObject(A.Core.Ats,0).Initialize(
this,BH);return null;},As5:function(H){C.Ag7.As5.call(this,H);this.AIr=false;},AFd:
function(AG4,KJ){C.Ag7.AFd.call(this,AG4,KJ);this.AIr=false;},Bye:function(){var
x1=this.Cf.Get(0,0);var y1=this.Cf.Get(0,1);var x2=this.Cf.Get(1,0);var y2=this.
Cf.Get(1,1);var x3=this.Cf.Get(2,0);var y3=this.Cf.Get(2,1);var x4=this.Cf.Get(3
,0);var y4=this.Cf.Get(3,1);var AxR=x2-x3;var AxT=y2-y3;var AxS=x4-x3;var AxU=y4-
y3;var Azn=((x1-x2)+x3)-x4;var Azo=((y1-y2)+y3)-y4;var AnX=(AxR*AxU)-(AxT*AxS);if(
!AnX)return;var Asl=((Azn*AxU)-(Azo*AxS))/AnX;var BL=((AxR*Azo)-(AxT*Azn))/AnX;var
a=(x2-x1)+(Asl*x2);var Q6=(x4-x1)+(BL*x4);var BK=x1;var d=(y2-y1)+(Asl*y2);var AH0=(
y4-y1)+(BL*y4);var Lt=y1;this.A$1=AH0-(Lt*BL);this.A$2=(BK*BL)-Q6;this.A$3=(Q6*Lt
)-(BK*AH0);this.A$4=(Lt*Asl)-d;this.A$5=a-(BK*Asl);this.A$6=(BK*d)-(a*Lt);this.A$7=(
d*BL)-(AH0*Asl);this.A$8=(Q6*Asl)-(a*BL);this.A$9=(a*AH0)-(Q6*d);this.AIr=true;}
,Ast:function(Fo){var B;if(!this.AIr)this.Bye();var A1N=Fo[0];var A1P=Fo[1];var AzH=((
A1N*this.A$1)+(A1P*this.A$2))+this.A$3;var AzK=((A1N*this.A$4)+(A1P*this.A$5))+this.
A$6;var A02=((A1N*this.A$7)+(A1P*this.A$8))+this.A$9;if(!!A02){AzH=AzH/A02;AzK=AzK
/A02;}var AoX=[].concat(BH,this.Um);AzH=AzH*(AoX[2]-AoX[0]);AzK=AzK*(AoX[3]-AoX[
1]);return A.aak([AzH|0,AzK|0],AoX.slice(0,2));},Re:function(H){var B;var BaS=this.
Um;if(!!this.O)this.bitmap=this.O.HP;else this.bitmap=null;if(!!this.bitmap)this.
Um=this.bitmap.FrameSize;else this.Um=BH;if(((A.z8(BaS,this.Um)||((this.Aov===0x45
)&&(this.SM===0x00)))&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if(((this.Aov!==0x45)&&(this.SM===0x00))&&!A.z8(BaS,this.Um)){this.SM=this.Aov;
A.ow([this,this.ArV],this);}},DD:function(E){var B;if(E===this.GN)return;this.GN=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},Bi$:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ac))throw new Error(IL);if(!!this.O){A.
zl([this,this.Re],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.y_([this,this.Re
],E,0);this.bitmap=E.HP;}this.Re(this);},AuN:function(){return this.GN;},_Init:function(
aArg){C.Ag7._Init.call(this,aArg);this.__proto__=C.AS0;},_Mark:function(D){var B;
C.Ag7._Mark.call(this,D);if((B=this.Fc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Adp={Hl:null,AP:0xFFFFFFFF,Dz:A.vw
,AMk:false,K3:function(){this.AY7();},J_:function(CW,aClip,aOffset,Ce,aBlend){if(
!this.Hl)return;var Du;var DK;var DF;var DJ;var BK=this.AP;Ce=Ce+1;Du=DK=DF=DJ=BK;
if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}CW.
Adp(aClip,this.Hl,A.aam(this.M,aOffset),this.AMk,this.Dz,Du,DK,DJ,DF,true,true,0
);},AY7:function(){return;},Aik:function(H){var B;if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if((
!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},AmK:function(E){
var B;if(A.z8(E,this.Dz))return;this.Dz=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hl)this.Ac.Bg(this.M);},Bi6:function(E){var B;if(E===this.AMk)return;this.
AMk=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},YI:function(
E){var B;if(E===this.Hl)return;if(!!this.Hl)A.zl([this,this.Aik],this.Hl,0);this.
Hl=E;if(!!this.Hl)A.y_([this,this.Aik],this.Hl,0);if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(0x0,0x1
);},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Adp;},
_Done:function(){this.K3();this.__proto__=A.Core.EC;A.Core.EC._Done.call(this);}
,_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.Hl)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Ha={Hl:null,AP:0xFFFFFFFF
,Dz:A.vw,Width:1,K3:function(){this.AY7();},J_:function(CW,aClip,aOffset,Ce,aBlend
){if(!this.Hl)return;var Du;var DK;var DF;var DJ;var BK=this.AP;Ce=Ce+1;Du=DK=DF=
DJ=BK;if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&
0x00FFFFFF)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>
24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<
24);}CW.Ha(aClip,this.Hl,A.aam(this.M,aOffset),false,this.Dz,this.Width,0,0,0,3,
Du,DK,DJ,DF,true,true);},AY7:function(){return;},Aik:function(H){var B;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.
M);},AmK:function(E){var B;if(A.z8(E,this.Dz))return;this.Dz=E;if((!!this.Ac&&((
this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},NR:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hl)this.Ac.Bg(this.M);},YI:function(E){var B;if(E===this.Hl)return;if(!!this.
Hl)A.zl([this,this.Aik],this.Hl,0);this.Hl=E;if(!!this.Hl)A.y_([this,this.Aik],this.
Hl,0);if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E
)this.C4(0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg){A.Core.EC._Init.call(
this,aArg);this.__proto__=C.Ha;},_Done:function(){this.K3();this.__proto__=A.Core.
EC;A.Core.EC._Done.call(this);},_Mark:function(D){var B;A.Core.EC._Mark.call(this
,D);if((B=this.Hl)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.Bz1={A17:0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20,BBd:0x40,BBe:0x80,BBp:
0x100};C.BBt={A17:0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20,Byw:0x40,Byv:0x80
,ByB:0x100};C.BAD={Normal:0,BA_:1,BA8:2,BA9:3};
C._Init=function(){C.DU.__proto__=A.Core.Ajp;C.AH.__proto__=A.Core.EC;C.CC.__proto__=
A.Core.EC;C.NI.__proto__=A.Core.EC;C.Ak.__proto__=A.Core.EC;C.Text.__proto__=A.Core.
EC;C.Atm.__proto__=A.Core.EC;C.Ag7.__proto__=A.Core.YR;C.AS0.__proto__=C.Ag7;C.Adp.
__proto__=A.Core.EC;C.Ha.__proto__=A.Core.EC;};C._ReInit=function(){};C.DE=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */