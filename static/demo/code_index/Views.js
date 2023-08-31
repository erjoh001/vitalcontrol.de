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
var B_=[1,1];var BH=[0,0];var EV=[0,0,0,0];var GS="\uFEFF";var Jt="No matrix to perform 3D transformation";
var IL="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DT={Kt:null,Akg:1,Akf:1,AP:0xFFFFFFFF,J_:function(CW,aClip,aOffset,Ce,aBlend){var
B;var AfA=this.Akf;var AfB=this.Akg;var AcB=A.aak(this.Ek,aOffset);var AcC=A.aak(
this.Et,aOffset);var AkB;var AkC;var BK=this.AP;if(A.z8(AcB,AcC))return;aBlend=aBlend&&((
this.U&0x2)===0x2);Ce=Ce+1;AkB=AkC=BK;if(Ce<256){AkB=(AkB&0x00FFFFFF)|((((Ce*((AkB>>
24)&0xFF))>>8)&0xFF)<<24);AkC=(AkC&0x00FFFFFF)|((((Ce*((AkC>>24)&0xFF))>>8)&0xFF
)<<24);}if((AfA===1)&&(AfB===1))CW.AtB(aClip,AcB,AcC,AkB,AkC,aBlend);else CW.Bes(
aClip,AcB,AcC,AfA,AfB,AkB,AkC,aBlend);},GetExtent:function(){var AfA=this.Akf;var
AfB=this.Akg;var AcB=this.Ek;var AcC=this.Et;if(((AfA===1)&&(AfB===1))||A.z8(AcB
,AcC))return A.Core.Ajn.GetExtent.call(this);var AhK=AfA/2;var AhL=AfB/2;var An9=
AcB[0];var An_=AcB[1];var An$=AcC[0];var Aoa=AcC[1];var JY=An$-An9;var JZ=Aoa-An_;
var IQ=Math.sqrt((JY*JY)+(JZ*JZ));JY=JY/IQ;JZ=JZ/IQ;var A_4=An9+(JZ*AhK);var A_5=
An_-(JY*AhK);var AHF=An$+(JZ*AhL);var AHG=Aoa-(JY*AhL);var AHH=An$-(JZ*AhL);var AHI=
Aoa+(JY*AhL);var AHJ=An9-(JZ*AhK);var AHK=An_+(JY*AhK);var left=A_4;var right=A_4;
var top=A_5;var bottom=A_5;if(AHF<left)left=AHF;if(AHH<left)left=AHH;if(AHJ<left
)left=AHJ;if(AHF>right)right=AHF;if(AHH>right)right=AHH;if(AHJ>right)right=AHJ;if(
AHG<top)top=AHG;if(AHI<top)top=AHI;if(AHK<top)top=AHK;if(AHG>bottom)bottom=AHG;if(
AHI>bottom)bottom=AHI;if(AHK>bottom)bottom=AHK;var AM=[left|0,top|0,right|0,bottom|
0];AM=[].concat(AM.slice(0,2),A.aak(AM.slice(2,4),B_));return AM;},Rd:function(H
){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},A7k:function(
E){var B;if(E<1)E=1;if(E===this.Akg)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Akg=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Akf!==1))&&!this.Kt){this.Kt=A.zW(A.abj.Ars
);if(this.Kt.Oy)A.y_([this,this.Rd],this.Kt,0);}if(((E===1)&&(this.Akf===1))&&!!
this.Kt){if(this.Kt.Oy)A.zl([this,this.Rd],this.Kt,0);this.Kt=null;}},A7j:function(
E){var B;if(E<1)E=1;if(E===this.Akf)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Akf=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Akg!==1))&&!this.Kt){this.Kt=A.zW(A.abj.Ars
);if(this.Kt.Oy)A.y_([this,this.Rd],this.Kt,0);}if(((E===1)&&(this.Akg===1))&&!!
this.Kt){if(this.Kt.Oy)A.zl([this,this.Rd],this.Kt,0);this.Kt=null;}},NR:function(
E){var B;if(E<1)E=1;if((E===this.Akf)&&(E===this.Akg))return;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Akf=E;this.Akg=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((E!==1)&&!this.Kt){this.Kt=A.
zW(A.abj.Ars);if(this.Kt.Oy)A.y_([this,this.Rd],this.Kt,0);}if((E===1)&&!!this.Kt
){if(this.Kt.Oy)A.zl([this,this.Rd],this.Kt,0);this.Kt=null;}},L:function(E){var
B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());},Ai:function(E){if(E)this.C3(0x400,0x0);else this.C3(0x0,0x400
);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C3(
0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg){A.Core.Ajn._Init.call(this
,aArg);this.__proto__=C.DT;},_Mark:function(D){var B;A.Core.Ajn._Mark.call(this,
D);if((B=this.Kt)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Line"};
C.AH={ALf:0xFFFFFFFF,ALg:0xFFFFFFFF,ALk:0xFFFFFFFF,ALj:0xFFFFFFFF,AP:0xFFFFFFFF,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var Du=this.ALj;var DK=this.ALk;var
DF=this.ALf;var DJ=this.ALg;var BK=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Ce=
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
AtR(aClip,A.aam(this.M,aOffset),Du,DK,DJ,DF,aBlend);},AuX:function(E){var B;if(E===
this.ALf)return;this.ALf=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},AuY:function(E){var B;if(E===this.ALg)return;this.ALg=E;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},Au1:function(E){var B;if(E===this.ALk)return;this.
ALk=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},Au0:function(E){var
B;if(E===this.ALj)return;this.ALj=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},E$:function(){var B;return((this.U&0x1)===0x1
);},X:function(E){if(E)this.C3(0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg
){A.Core.EC._Init.call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"
};C.CC={Width:1,AP:0xFFFFFFFF,J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var Du;
var DK;var DF;var DJ;var BK=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Ce=Ce+1;
Du=DK=DF=DJ=BK;if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((
Ce*((DF>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8
)&0xFF)<<24);}CW.Beq(aClip,A.aam(this.M,aOffset),this.Width,Du,DK,DJ,DF,aBlend);
},NR:function(E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(
E){if(E)this.C3(0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg){A.Core.EC.
_Init.call(this,aArg);this.__proto__=C.CC;},_className:"Views::Border"};C.NH={timer:
null,Aj:null,MD:-1,AP:0xFFFFFFFF,AtC:0x1F,Tb:0,Dq:0,Amn:A.vw,UO:false,J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;var Nk=this.Tb;if(this.MD>=0)Nk=this.MD;if(!this.
Aj||(Nk>=this.Aj.NoOfFrames))return;this.Aj.Update();var Du;var DK;var DJ;var DF;
var BK=this.AP;var J5=(((Ce+1)*255)>>8)+1;var N_=this.AtC;var AM=A.aam(this.M,aOffset
);var AI5=A.aaj([AM[2]-AM[0],AM[3]-AM[1]],this.Amn);aBlend=aBlend&&((this.U&0x2)===
0x2);Du=DK=DF=DJ=BK;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF
)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF
)|((((((DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*
J5)>>8)&0xFF)<<24);}if(((this.Amn[0]>0)&&(AI5[0]>0))&&!((N_&0x5)===0x5)){var d=((
this.Aj.FrameSize[0]/3)|0)-AI5[0];if(((N_&0x1)===0x1)){if(aClip[2]>AM[2])aClip=A.
aaQ(aClip,AM[2]);if(d>0)AM=A.aaQ(AM,AM[2]+d);N_=N_|0x4;}else if(((N_&0x4)===0x4)
){if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.slice(1,4));if(d>0)AM=[].concat(
AM[0]-d,AM.slice(1,4));N_=N_|0x1;}else{if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.
slice(1,4));if(aClip[2]>AM[2])aClip=A.aaQ(aClip,AM[2]);if(d>0){AM=[].concat(AM[0
]-((d/2)|0),AM.slice(1,4));AM=A.aaQ(AM,(AM[2]+d)-((d/2)|0));}N_=N_|0x5;}}if(((this.
Amn[1]>0)&&(AI5[1]>0))&&!((N_&0xA)===0xA)){var d=((this.Aj.FrameSize[1]/3)|0)-AI5[
1];if(((N_&0x2)===0x2)){if(aClip[3]>AM[3])aClip=[].concat(aClip.slice(0,3),AM[3]
);if(d>0)AM=[].concat(AM.slice(0,3),AM[3]+d);N_=N_|0x8;}else if(((N_&0x8)===0x8)
){if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(d>0)AM=A.aaS(AM,AM[1]-d);N_=N_|0x2;
}else{if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(aClip[3]>AM[3])aClip=[].concat(
aClip.slice(0,3),AM[3]);if(d>0){AM=A.aaS(AM,AM[1]-((d/2)|0));AM=[].concat(AM.slice(
0,3),(AM[3]+d)-((d/2)|0));}N_=N_|0xA;}}CW.Bep(aClip,this.Aj,Nk,AM,N_,Du,DK,DJ,DF
,aBlend);},Rd:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.
M);},L$:function(H){var B;var Nk=this.MD;var SP=0;if(!!this.Aj)SP=this.Aj.NoOfFrames
*this.Aj.FrameDelay;if((!!this.timer&&(this.MD<0))&&(SP>0))this.Dq=this.timer.Bu-(
this.Tb*this.Aj.FrameDelay);if(!!this.timer&&(SP>0)){var Aq=(this.timer.Bu-this.
Dq)|0;Nk=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SP){Nk=Nk%this.Aj.NoOfFrames;this.Dq=this.
timer.Bu-(Aq%SP);}}if(((Nk!==this.MD)&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);this.MD=Nk;if(!SP&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.
timer=null;}},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},YD:function(E){var B;if(this.UO===E)return;
this.UO=E;this.MD=-1;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(A.abm.Af1);A.y_([this,this.L$],this.
timer,0);A.ow([this,this.L$],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},A6A:function(E){var B;if(E===this.AtC)return;this.AtC=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===
this.Tb)&&(this.MD===-1))return;this.Tb=E;if(!this.timer)this.MD=-1;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;
if(!!this.Aj&&this.Aj.Oy)A.zl([this,this.Rd],this.Aj,0);this.Aj=E;this.MD=-1;if(
!!E&&E.Oy)A.y_([this,this.Rd],E,0);if(this.UO){this.YD(false);this.YD(true);}if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C3(
0x1,0x0);else this.C3(0x0,0x1);},A6O:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[
1]<0)E=[E[0],0];if(A.z8(E,this.Amn))return;this.Amn=E;if((!!this.Ac&&((this.U&0x1
)===0x1))&&!((this.AtC&0xF)===0xF))this.Ac.Bg(this.M);},_Init:function(aArg){A.Core.
EC._Init.call(this,aArg);this.__proto__=C.NH;},_Mark:function(D){var B;A.Core.EC.
_Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Frame"};C.Ak={timer:
null,Aj:null,Dq:0,MD:0,AP:0xFFFFFFFF,J7:0x12,Tb:0,GM:255,UO:false,Z_:false,J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;var Nk=this.Tb;if(this.MD>=0)Nk=this.MD;if(!this.
Aj||(Nk>=this.Aj.NoOfFrames))return;this.Aj.Update();var AD=this.C_();var CZ=this.
Aj.FrameSize;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;var Du;var DK;var DJ;var DF;
var BK=this.AP;var J5=(((Ce+1)*this.GM)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2
);Du=DK=DF=DJ=BK;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((
DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J5)>>8)&
0xFF)<<24);}if(A.z8([AD[2]-AD[0],AD[3]-AD[1]],CZ))CW.A2V(aClip,this.Aj,Nk,A.aam(
this.M,aOffset),A.aaj(this.M.slice(0,2),AD.slice(0,2)),Du,DK,DJ,DF,aBlend);else CW.
BkR(aClip,this.Aj,Nk,A.aam(AD,aOffset),[].concat(BH,CZ),Du,DK,DJ,DF,aBlend,true);
},Rd:function(H){var B;if(((this.Z_&&!!this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.
Aj.FrameSize[1]>0))this.G(this.C_());if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},L$:function(H){var B;var Nk=this.MD;var SP=0;if(!!this.Aj)SP=this.Aj.
NoOfFrames*this.Aj.FrameDelay;if((!!this.timer&&(this.MD<0))&&(SP>0))this.Dq=this.
timer.Bu-(this.Tb*this.Aj.FrameDelay);if(!!this.timer&&(SP>0)){var Aq=(this.timer.
Bu-this.Dq)|0;Nk=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SP){Nk=Nk%this.Aj.NoOfFrames;this.
Dq=this.timer.Bu-(Aq%SP);}}if(((Nk!==this.MD)&&!!this.Ac)&&((this.U&0x1)===0x1))
this.Ac.Bg(this.M);this.MD=Nk;if(!SP&&!!this.timer){A.zl([this,this.L$],this.timer
,0);this.timer=null;}},I1:function(E){if(E===this.Z_)return;this.Z_=E;if(((E&&!!
this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.Aj.FrameSize[1]>0))this.G(this.C_());
},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},YD:function(E){var B;if(this.UO===E)return;this.UO=
E;this.MD=-1;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.Af1);A.y_([this,this.L$],this.timer,0);
A.ow([this,this.L$],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},A2:function(E){var B;if(E===this.J7)return;this.J7=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===this.Tb)&&(
this.MD===-1))return;this.Tb=E;if(!this.timer)this.MD=-1;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;if(!
!this.Aj&&this.Aj.Oy)A.zl([this,this.Rd],this.Aj,0);this.Aj=E;this.MD=-1;if(!!E&&
E.Oy)A.y_([this,this.Rd],E,0);if(this.UO){this.YD(false);this.YD(true);}if(((this.
Z_&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.G(this.C_());if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},DD:function(E){var B;if(E>255)E=255;if(E<
0)E=0;if(E===this.GM)return;this.GM=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},Ai:function(E){if(E)this.C3(0x400,0x0);else this.C3(0x0,0x400);},E$:
function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C3(0x1,0x0
);else this.C3(0x0,0x1);},C_:function(){var B;if(!this.Aj)return EV;var Br=this.
J7;var CZ=this.Aj.FrameSize;var A8=this.M;var width=A8[2]-A8[0];var height=A8[3]-
A8[1];if(!CZ[0]||!CZ[1])return EV;var C9=[0,0,width,height];var BX=C9;if(((Br&0x40
)===0x40)){var A06=((((C9[2]-C9[0])<<16)+((CZ[0]/2)|0))/CZ[0])|0;var Aze=((((C9[
3]-C9[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var Ah8=A06;if(Aze>Ah8)Ah8=Aze;BX=A.aaO(BX
,((CZ[0]*Ah8)+32768)>>16);BX=A.aaL(BX,((CZ[1]*Ah8)+32768)>>16);}else if(((Br&0x80
)===0x80)){var A06=((((C9[2]-C9[0])<<16)+((CZ[0]/2)|0))/CZ[0])|0;var Aze=((((C9[
3]-C9[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var Ah8=A06;if(Aze<Ah8)Ah8=Aze;BX=A.aaO(BX
,((CZ[0]*Ah8)+32768)>>16);BX=A.aaL(BX,((CZ[1]*Ah8)+32768)>>16);}else if(!((Br&0x100
)===0x100))BX=A.aaN(BX,CZ);if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&0x4)===0x4)
)BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX,(C9[0]+(((
C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-C9[1])){if(((
Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x10)===0x10))BX=
A.aaR(BX,(C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}BX=A.aam(BX,A8.slice(
0,2));return BX;},Bg4:function(){return this.AP;},AQe:function(){return this.Tb;
},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Ak;},_Mark:
function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Views::Image"};C.Text={B5:null,Ej:null,CG:A.jm,String:A.jm,N7:null,Alo:A.vw,I2:
0,Sc:0,AbN:0,Bn:A.vw,J7:0x12,AP:0xFFFFFFFF,AeM:false,Z_:false,XA:false,AL1:false
,HQ:false,K3:function(){if(!!this.N7){this.AZm(this.N7);this.N7=null;}},J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;if((this.CG===A.jm)||!this.B5)return;var Br=this.
J7;var font=this.B5;var C9=A.aam(this.M,aOffset);var Du;var DK;var DJ;var DF;var
col=this.AP;var J5=(((Ce+1)*255)>>8)+1;var J4=this.CG.charCodeAt(0)||0;var AD=A.
aam(this.C_(),aOffset);var Bm=[C9[0]-AD[0],(C9[1]-AD[1])-font.Ascent];if(J4<1)return;
Du=DK=DF=DJ=col;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((
DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J5)>>8)&
0xFF)<<24);}if(((Br&0x80)===0x80)){if(this.Ajb())Br=(Br&~0x80)|0x4;else Br=(Br&~
0x80)|0x1;}if((J4===1)&&!((Br&0x40)===0x40)){CW.A3n(aClip,font,this.CG,2,(this.CG.
charCodeAt(1)||0)-1,C9,Bm,0,0,Du,DK,DJ,DF,true);return;}var leading=font.Leading;
if(this.Sc>0)leading=(this.Sc-font.Ascent)-font.Descent;var ZU=(font.Ascent+font.
Descent)+leading;var Bur=aClip[1]-AD[1];var Bus=aClip[3]-AD[1];var AYA=AD[2]-AD[
0];var Dl=0;var P=1;var BK=this.CG.charCodeAt(1)||0;while(((Dl+ZU)<Bur)&&(BK>0)){
P=P+BK;Dl=Dl+ZU;BK=this.CG.charCodeAt(P)||0;}while((Dl<Bus)&&(BK>0)){var L5=A.aaj(
Bm,[0,Dl]);var Ali=0;var OW=false;if(((((Br&0x40)===0x40)&&((this.CG.charCodeAt((
P+BK)-1)||0)!==0x0A))&&((this.CG.charCodeAt(P+1)||0)!==0x0A))&&((this.CG.charCodeAt(
P+BK)||0)!==0x00))OW=true;if(OW&&!!(Br&0x6)){var AoP=P+BK;var Axt=this.CG.indexOf(
String.fromCharCode(0x20),P+1);var Axu=this.CG.indexOf(String.fromCharCode(0xA0)
,P+1);if(((Axt<0)||(Axt>=AoP))&&((Axu<0)||(Axu>=AoP)))OW=false;}if(OW)Ali=AYA;else
if(((Br&0x4)===0x4))L5=[(L5[0]-AYA)+font.XK(this.CG,P+1,BK-1),L5[1]];else if(((Br&
0x2)===0x2))L5=[(L5[0]-((AYA/2)|0))+((font.XK(this.CG,P+1,BK-1)/2)|0),L5[1]];CW.
A3n(aClip,font,this.CG,P+1,BK-1,C9,L5,Ali,0,Du,DK,DJ,DF,true);P=P+BK;Dl=Dl+ZU;BK=
this.CG.charCodeAt(P)||0;}},G:function(E){var B;if(A.z9(E,this.M))return;var Bb$;
Bb$=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bb$&&!this.AbN)&&this.AeM)&&this.HQ
)&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ],this
);}if(((this.XA&&this.HQ)&&!A.z8([(B=this.M)[2]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-
E[1]]))&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HQ=false;A.ow([this,this.
OZ],this);}A.Core.EC.G.call(this,E);A.ow([this,this.Ah1],this);},Buj:function(aBidi
,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.ze(aBidi,aRowStart,aRowEnd
,aIndex);return aIndex;},Bui:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)
return aIndex;aIndex=A.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},AZm:function(
aBidi){if(!aBidi)return;A.qU(aBidi);},BuE:function(aSize){var bidi=null;bidi=A.vj(
aSize);return bidi;},Ah1:function(H){A.ow(this.Ej,this);},OZ:function(H){A.ow([this
,this.WY],this);},WY:function(H){var B;if(this.HQ)return;var width=(B=this.M)[2]-
B[0];var height=(B=this.M)[3]-B[1];var WO=-1;var font=this.B5;if((!!font&&!!!font.
Ascent)&&!!!font.Descent)font=null;if(this.AeM){if(this.AbN>0)WO=this.AbN;else if(
!this.Z_)WO=width-(this.I2*2);else WO=width;if(WO<0)WO=1;}if(!!this.N7){this.AZm(
this.N7);this.N7=null;}this.HQ=true;if((this.String!==A.jm)&&!!font){var length=
this.String.length;if(this.AL1)this.N7=this.BuE(length);this.CG=font.Bkh(this.String
,0,WO,length,this.N7);if(!!this.N7&&!this.BfH()){this.AZm(this.N7);this.N7=null;
}}else this.CG=A.jm;this.Alo=BH;if(((this.XA&&(this.CG!==A.jm))&&!this.Z_)&&!!font
){var Br=this.J7;var leading=font.Leading;var Ip=this.CG;var AI3=this.Ajb();if(((
Br&0x80)===0x80)){if(AI3)Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sc>0)
leading=(this.Sc-font.Ascent)-font.Descent;var Ay$=(font.Ascent+font.Descent)+leading;
var J4=Ip.charCodeAt(0)||0;var Ak0=((height+leading)/Ay$)|0;var AYP=false;var AHN=
false;if(Ak0<=0)Ak0=1;if(J4>Ak0){var A9=0;var Aza=0;var AI1=J4-1;var KQ;var Nl=Ip.
length;var tmp=A.jm;if(!!(Br&0x110)&&!!(Br&0x28))Br&=~0x110;if(!!(Br&0x110))Br&=
~0x28;if(((Br&0x20)===0x20))Aza=J4-Ak0;else if(((Br&0x10)===0x10)||((Br&0x100)===
0x100)){Aza=((J4-Ak0)/2)|0;AI1=(Aza+Ak0)-1;}else AI1=Ak0-1;AYP=Aza>0;AHN=AI1<(J4-
1);for(KQ=1;A9<Aza;A9=A9+1)KQ=KQ+(Ip.charCodeAt(KQ)||0);if(AHN)for(Nl=KQ;A9<AI1;
A9=A9+1)Nl=Nl+(Ip.charCodeAt(Nl)||0);if(AYP){var IQ=Ip.charCodeAt(KQ)||0;tmp=(GS+
A.aaY(Ip,KQ,IQ))+GS;tmp=A.aaT(tmp,0,(IQ+2)&0xFFFF);KQ=KQ+IQ;if((tmp.charCodeAt(IQ
)||0)===0x0A){tmp=A.aaT(tmp,IQ,0xFEFF);tmp=A.aaT(tmp,IQ+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(tmp,1,0x0A);}else tmp=A.aaT(tmp
,1,0xFEFF);}tmp=tmp+A.aaY(Ip,KQ,Nl-KQ);if(AHN&&(Nl>=KQ)){var IQ=Ip.charCodeAt(Nl
)||0;var P6=(GS+A.aaY(Ip,Nl,IQ))+GS;P6=A.aaT(P6,0,(IQ+2)&0xFFFF);P6=A.aaT(P6,1,0xFEFF
);if((P6.charCodeAt(IQ)||0)===0x0A){P6=A.aaT(P6,IQ,0xFEFF);P6=A.aaT(P6,IQ+1,0x0A
);}if((P6.charCodeAt(2)||0)===0x0A){P6=A.aaT(P6,2,0xFEFF);P6=A.aaT(P6,1,0x0A);}else
P6=A.aaT(P6,1,0xFEFF);tmp=tmp+P6;}Ip=String.fromCharCode(Ak0&0xFFFF)+tmp;}var A9=
0;var inx=1;var AIC=width-(this.I2*2);if(this.AeM&&(this.AbN>0))AIC=this.AbN;J4=
Ip.charCodeAt(0)||0;for(;A9<J4;A9=A9+1){var Alg=AYP&&!A9;var Alh=AHN&&(A9===(J4-
1));var WC=false;var WD=false;var AsR=AI3;if((AI3&&Alg)&&!Alh){Alg=false;Alh=true;
}else if((AI3&&Alh)&&!Alg){Alh=false;Alg=true;}var WZ=inx+1;var IQ=Ip.charCodeAt(
inx)||0;var KQ=WZ;var Nl=(WZ+IQ)-2;var AZE=-1;var AZF=-1;if(!this.AeM&&(font.XK(
Ip,WZ,IQ-1)>AIC)){var AnJ=Br;if(((AnJ&0x2)===0x2)&&!!(AnJ&0x5))AnJ&=~0x2;if(((AnJ&
0x2)===0x2))AnJ&=~0x5;if(((AnJ&0x4)===0x4))WC=true;else if(((AnJ&0x2)===0x2)){WC=
true;WD=true;}else WD=true;}if((Ip.charCodeAt(KQ)||0)===0x0A)KQ=KQ+1;if((Ip.charCodeAt(
Nl)||0)===0x0A)Nl=Nl-1;while(WC&&((Ip.charCodeAt(KQ)||0)===0xFEFF))KQ=KQ+1;while(
WD&&((Ip.charCodeAt(Nl)||0)===0xFEFF))Nl=Nl-1;WC=WC&&!Alh;WD=WD&&!Alg;while((((WC||
WD)||Alg)||Alh)&&(KQ<Nl)){if((WC&&(AsR||!WD))||Alg){if(AZE>0)Ip=A.aaT(Ip,AZE,0xFEFF
);Ip=A.aaT(Ip,KQ,0x2026);AZE=KQ;KQ=KQ+1;AsR=!AsR;Alg=false;if(font.XK(Ip,WZ,IQ-1
)<=AIC){WC=false;WD=false;}else WC=WC||!WD;}if((WD&&(!AsR||!WC))||Alh){if(AZF>0)
Ip=A.aaT(Ip,AZF,0xFEFF);Ip=A.aaT(Ip,Nl,0x2026);AZF=Nl;Nl=Nl-1;AsR=!AsR;Alh=false;
if(font.XK(Ip,WZ,IQ-1)<=AIC){WC=false;WD=false;}else WD=WD||!WC;}}inx=inx+IQ;}this.
Alo=[font.A3R(Ip),((Ip.charCodeAt(0)||0)*Ay$)-leading];this.CG=Ip;}if(this.Z_&&(
this.CG!==A.jm)){var AsD=[this.I2,0];this.U=this.U|0x2000;this.G(A.aal(A.z4(this.
C_(),AsD),this.Bn));this.U=this.U&~0x2000;}if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);A.ow([this,this.Ah1],this);},Biz:function(E){if(E===this.AL1)return;
this.AL1=E;this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ],this);},HF:function(E){
if(E<0)E=0;if(this.I2===E)return;this.I2=E;this.CG=A.jm;this.HQ=false;A.ow([this
,this.OZ],this);},BjO:function(E){var B;if(E<0)E=0;if(this.Sc===E)return;this.Sc=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);if(this.XA){this.CG=A.jm;
this.HQ=false;A.ow([this,this.OZ],this);}if(this.Z_&&this.HQ)this.G(A.aal(this.C_(
),this.Bn));if(this.HQ)A.ow([this,this.Ah1],this);},Biy:function(E){if(E===this.
XA)return;this.XA=E;if(((this.AeM&&!!!this.AbN)||E)||!!this.Ej)this.U=this.U&~0x100;
else this.U=this.U|0x100;this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ],this);},
Qy:function(E){if(A.z$(E,this.Ej))return;this.Ej=E;if(((!!!this.AbN&&this.AeM)||
!!E)||this.XA)this.U=this.U&~0x100;else this.U=this.U|0x100;},I1:function(E){if(
E===this.Z_)return;this.Z_=E;if(E&&this.XA){this.CG=A.jm;this.HQ=false;A.ow([this
,this.OZ],this);}if(E&&this.HQ){var AsD=[this.I2,0];this.U=this.U|0x2000;this.G(
A.aal(A.z4(this.C_(),AsD),this.Bn));this.U=this.U&~0x2000;}},Bj5:function(E){if(
E<0)E=0;if(E===this.AbN)return;this.AbN=E;if(this.AeM&&this.HQ){this.CG=A.jm;this.
HQ=false;A.ow([this,this.OZ],this);}if(((!!!E&&this.AeM)||this.XA)||!!this.Ej)this.
U=this.U&~0x100;else this.U=this.U|0x100;},KD:function(E){if(E===this.AeM)return;
this.AeM=E;if(this.HQ){this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ],this);}if(((
E&&!!!this.AbN)||this.XA)||!!this.Ej)this.U=this.U&~0x100;else this.U=this.U|0x100;
},Gj:function(E){var B;if(A.z8(E,this.Bn))return;this.Bn=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);if(this.HQ)A.ow([this,this.Ah1],this);},A2:function(
E){var B;if(E===this.J7)return;this.J7=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if(this.XA){this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ],this);}
if(this.HQ)A.ow([this,this.Ah1],this);},R:function(E){if(E===this.String)return;
this.String=E;this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ],this);},Aa:function(
E){if(E===this.B5)return;this.B5=E;this.CG=A.jm;this.HQ=false;A.ow([this,this.OZ
],this);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},Ai:function(E){if(E)this.C3(0x400,0x0);else this.
C3(0x0,0x400);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(
E)this.C3(0x1,0x0);else this.C3(0x0,0x1);},Ajb:function(){if(!this.HQ)this.WY(this
);if(!this.N7)return false;var result=false;var bidi=this.N7;result=A.vi(bidi);return result;
},BfH:function(){if(!this.HQ)this.WY(this);if(!this.N7)return false;var result=false;
var bidi=this.N7;result=A.zc(bidi);return result;},AER:function(aIndex){if(((this.
String===A.jm)||!this.B5)||this.XA)return BH;if(!this.HQ)this.WY(this);if(aIndex<
0)aIndex=0;var BvO=(this.CG.charCodeAt(0)||0)-1;var L_=this.CG.charCodeAt(1)||0;
var inx=1;var Aia=2;var A9=0;var col=-1;var CO=true;aIndex=aIndex+2;while((A9<BvO
)&&((inx+L_)<=aIndex)){inx=inx+L_;A9=A9+1;Aia=Aia+1;aIndex=aIndex+1;L_=this.CG.charCodeAt(
inx)||0;}if(aIndex>(inx+L_))aIndex=inx+L_;if(!!this.N7)aIndex=(inx+this.Bui(this.
N7,(inx+1)-Aia,(inx+L_)-Aia,(aIndex-inx)-1))+1;for(;aIndex>inx;inx=inx+1){var Il=
this.CG.charCodeAt(inx+1)||0;if(CO)col=col+1;CO=(Il!==0xFEFF)&&(Il!==0x0A);}return[
col,A9];},AmU:function(AnB){if(((this.String===A.jm)||!this.B5)||this.XA)return 0;
if(!this.HQ)this.WY(this);var A9=AnB[1];var col=AnB[0];var inx=1;var Aia=2;var J4=
this.CG.charCodeAt(0)||0;var L_=this.CG.charCodeAt(1)||0;if(A9>=J4){A9=J4-1;col=
this.CG.length;}if(A9<0){A9=0;col=0;}if(col<0)col=0;while((A9>0)&&(L_>0)){inx=inx+
L_;A9=A9-1;Aia=Aia+1;L_=this.CG.charCodeAt(inx)||0;}var WK=inx;var AI2=(inx-Aia)+
1;var AoP=(AI2+L_)-1;var AyY=false;while((col>=0)&&(L_>1)){var Il=this.CG.charCodeAt(
inx+1)||0;inx=inx+1;L_=L_-1;AyY=(Il===0xFEFF)||(Il===0x0A);if(!AyY){col=col-1;WK=
inx;}}if((!AyY&&(col>=0))&&((this.CG.charCodeAt(inx+1)||0)===0x00))AyY=true;if(AyY
)WK=WK+1;WK=WK-Aia;if(!!this.N7)WK=AI2+this.Buj(this.N7,AI2,AoP,WK-AI2);return WK;
},ARx:function(KK){var B;if((this.String===A.jm)||!this.B5)return BH;if(!this.HQ
)this.WY(this);var AD=this.C_();if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return BH;var font=
this.B5;var Br=this.J7;var J4=this.CG.charCodeAt(0)||0;var leading=font.Leading;
if(KK[1]<AD[1])KK=[KK[0],AD[1]];if(KK[1]>=AD[3])KK=[KK[0],AD[3]-1];if(this.Sc>0)
leading=(this.Sc-font.Ascent)-font.Descent;var ZU=(font.Ascent+font.Descent)+leading;
var A9=((KK[1]-AD[1])/ZU)|0;var Nw=this.AA_(A9);var L_=Nw.length;var OW=false;if(((
Br&0x80)===0x80)){if(this.Ajb())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&
0x40)===0x40)&&(A9<(J4-1)))OW=true;if((OW&&(Nw.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nw.indexOf(String.fromCharCode(0xA0),0)<0))OW=false;if(OW){var inx=1;var
AoO=A9;while(AoO>0){inx=inx+(this.CG.charCodeAt(inx)||0);AoO=AoO-1;}if(((this.CG.
charCodeAt(inx+1)||0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx
)||0))-1)||0)===0x0A))OW=false;}var Ali=0;var FY=0;if(OW)Ali=AD[2]-AD[0];else if(((
Br&0x4)===0x4))FY=(AD[2]-AD[0])-font.XK(Nw,0,L_);else if(((Br&0x2)===0x2))FY=(((
AD[2]-AD[0])/2)|0)-((font.XK(Nw,0,L_)/2)|0);var col=font.Bfi(Nw,0,L_,(KK[0]-AD[0
])-FY,Ali);if(col<0)col=0;return[col,A9];},Aei:function(AnB){var B;if((this.String===
A.jm)||!this.B5)return BH;if(!this.HQ)this.WY(this);var J4=this.CG.charCodeAt(0)||
0;var font=this.B5;var Br=this.J7;var A9=AnB[1];var col=AnB[0];if(A9>=J4){A9=J4-
1;col=this.CG.length;}if(A9<0){A9=0;col=0;}var Nw=this.AA_(A9);var L_=Nw.length;
var AD=this.C_();var OW=false;var leading=font.Leading;if(((Br&0x80)===0x80)){if(
this.Ajb())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)&&(A9<(
J4-1)))OW=true;if((OW&&(Nw.indexOf(String.fromCharCode(0x20),0)<0))&&(Nw.indexOf(
String.fromCharCode(0xA0),0)<0))OW=false;if(OW){var inx=1;var AoO=A9;while(AoO>0
){inx=inx+(this.CG.charCodeAt(inx)||0);AoO=AoO-1;}if(((this.CG.charCodeAt(inx+1)||
0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx)||0))-1)||0)===0x0A
))OW=false;}if(this.Sc>0)leading=(this.Sc-font.Ascent)-font.Descent;var Dl=(AD[1
]+(A9*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Ali=0;var FY=AD[0];
if(OW)Ali=AD[2]-AD[0];else if(((Br&0x4)===0x4))FY=AD[2]-font.XK(Nw,0,L_);else if(((
Br&0x2)===0x2))FY=(FY+(((AD[2]-AD[0])/2)|0))-((font.XK(Nw,0,L_)/2)|0);var pos=font.
Bfe(Nw,0,L_,col,Ali);if(pos<0)pos=0;return[FY+pos,Dl];},AMK:function(Ab){var B;if((
this.String===A.jm)||!this.B5)return EV;if(!this.HQ)this.WY(this);var J4=this.CG.
charCodeAt(0)||0;var font=this.B5;if((Ab<0)||((Ab>=J4)&&(Ab>0)))return EV;var Br=
this.J7;var inx=1;var leading=font.Leading;var A8=this.M;var width=A8[2]-A8[0];var
height=A8[3]-A8[1];width=width-(this.I2*2);if(((Br&0x80)===0x80)){if(this.Ajb())
Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sc>0)leading=(this.Sc-font.Ascent
)-font.Descent;var Dl=Ab*((font.Ascent+font.Descent)+leading);var FY=0;while(Ab>
0){inx=inx+(this.CG.charCodeAt(inx)||0);Ab=Ab-1;}var Azb=(this.CG.charCodeAt(inx
)||0)-1;var Bca=font.XK(this.CG,inx+1,Azb);var A05=font.A30(this.CG,inx+1,Azb);var
AoQ=Bca;var ZU=font.Ascent+font.Descent;var Azq=(J4*((font.Ascent+font.Descent)+
leading))-leading;if(!J4)Azq=ZU;if((((this.CG.charCodeAt((inx+Azb)+1)||0)===0x00
)||((this.CG.charCodeAt(inx+Azb)||0)===0x0A))||((this.CG.charCodeAt(inx+1)||0)===
0x0A))Br=Br&~0x40;if(((Br&0x40)===0x40)){var AoP=(inx+1)+Azb;var Axt=this.CG.indexOf(
String.fromCharCode(0x20),inx+1);var Axu=this.CG.indexOf(String.fromCharCode(0xA0
),inx+1);if(((Axt>=0)&&(Axt<AoP))||((Axu>=0)&&(Axu<AoP)))AoQ=width;}if((!!(Br&0x110
)&&!!(Br&0x28))&&(Azq>height))Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;if((((Br&0x2)===
0x2)&&!!(Br&0x5))&&(AoQ>width))Br&=~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if(((Br&0x4
)===0x4))FY=width-AoQ;else if(((Br&0x2)===0x2))FY=((width/2)|0)-((AoQ/2)|0);if(((
Br&0x20)===0x20))Dl=Dl+(height-Azq);else if(((Br&0x100)===0x100))Dl=((Dl+((height
/2)|0))-((Azq/2)|0))+(((this.B5.Descent-this.B5.Ascent)/2)|0);else if(((Br&0x10)===
0x10))Dl=(Dl+((height/2)|0))-((Azq/2)|0);FY=(FY+A05[0])+this.I2;AoQ=(AoQ+(A05[2]-
A05[0]))-Bca;var BX;{var BbF=[A8[0]+FY,A8[1]+Dl];BX=[].concat(BbF,A.aak(BbF,[AoQ
,ZU]));}return A.aam(BX,this.Bn);},AA_:function(Ab){if((this.String===A.jm)||!this.
B5)return A.jm;if(!this.HQ)this.WY(this);var J4=this.CG.charCodeAt(0)||0;var inx=
1;if((!this.B5||(Ab<0))||(Ab>=J4))return A.jm;while(Ab>0){inx=inx+(this.CG.charCodeAt(
inx)||0);Ab=Ab-1;}var WZ=inx;var Asi=inx+(this.CG.charCodeAt(inx)||0);var Il=0x00;
do{WZ=WZ+1;Il=this.CG.charCodeAt(WZ)||0;}while(((Il===0xFEFF)||(Il===0x0A))&&(WZ<=
Asi));do{Asi=Asi-1;Il=this.CG.charCodeAt(Asi)||0;}while(((Il===0xFEFF)||(Il===0x0A
))&&(WZ<=Asi));var Nw=A.aaY(this.CG,WZ,(Asi-WZ)+1);var Aof;for(Aof=Nw.indexOf(String.
fromCharCode(0xFEFF),0);Aof>=0;Aof=Nw.indexOf(String.fromCharCode(0xFEFF),Aof+1)
){var WK=Aof+1;while((Nw.charCodeAt(WK)||0)===0xFEFF)WK=WK+1;Nw=A.aa3(Nw,Aof,WK-
Aof);}return Nw;},C_:function(){var B;if((this.String===A.jm)||!this.B5)return EV;
if(!this.HQ)this.WY(this);if(this.CG===A.jm)return EV;var leading=this.B5.Leading;
var Ay$=(this.B5.Ascent+this.B5.Descent)+this.B5.Leading;if(this.Sc>0){leading=(
this.Sc-this.B5.Ascent)-this.B5.Descent;Ay$=this.Sc;}if(A.z8(this.Alo,BH))this.Alo=[
this.B5.A3R(this.CG),this.Alo[1]];this.Alo=[this.Alo[0],((this.CG.charCodeAt(0)||
0)*Ay$)-leading];var Br=this.J7;var A8=this.M;var AsD=this.I2;var width=A8[2]-A8[
0];var height=A8[3]-A8[1];var C9=[AsD,0,width-AsD,height];var BX=[].concat(C9.slice(
0,2),A.aak(C9.slice(0,2),this.Alo));if(((Br&0x80)===0x80)){if(this.Ajb())Br=(Br&
~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)){var WO=this.AbN;if(WO<=
0)WO=width-(this.I2*2);if(WO<0)WO=0;if(WO>(BX[2]-BX[0]))BX=A.aaO(BX,WO);}if((!!(
Br&0x110)&&!!(Br&0x28))&&((BX[3]-BX[1])>(C9[3]-C9[1])))Br&=~0x110;if(!!(Br&0x110
))Br&=~0x28;if((((Br&0x2)===0x2)&&!!(Br&0x5))&&((BX[2]-BX[0])>(C9[2]-C9[0])))Br&=
~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&0x4)===
0x4))BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX,(C9[0
]+(((C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-C9[1]
)){if(((Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x100)===
0x100))BX=A.aaR(BX,((C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0))+(((this.
B5.Descent-this.B5.Ascent)/2)|0));else if(((Br&0x10)===0x10))BX=A.aaR(BX,(C9[1]+(((
C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}BX=A.aam(BX,A8.slice(0,2));return A.
aam(BX,this.Bn);},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.K3();this.__proto__=A.Core.EC;A.Core.EC._Done.call(
this);},_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.B5)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Views::Text"};C.Atn={attrString:null,AttrSet:null,String:A.jm,J7:
0x12,J_:function(CW,aClip,aOffset,Ce,aBlend){var B;if(!this.attrString||!this.AttrSet
)return;var AD=this.C_();Ce=Ce+1;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;CW.Ben(
aClip,this.AttrSet,this.attrString,A.aam(this.M,aOffset),A.aaj(this.M.slice(0,2)
,AD.slice(0,2)),(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,true);},G:function(
E){var B;if(A.z9(E,this.M))return;if(((((B=this.M)[2]-B[0])!==(E[2]-E[0]))&&!!this.
attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=null;A.ow([this,this.OZ
],this);}A.Core.EC.G.call(this,E);A.ow([this,this.Ah1],this);},Ah1:function(H){}
,WY:function(H){var B;var AJy;AJy=(B=this.M)[2]-B[0];if(AJy<0)AJy=1;if((this.String===
A.jm)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(this.String!==A.
jm))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A2g,0);if(!!this.attrString
)this.attrString.Bkg(this.AttrSet,this.String,AJy,false);if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.Ah1],this);},OZ:function(H){A.ow([
this,this.WY],this);},Bb6:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);},A2:function(E){var B;E&=~0x140;if(E===this.J7)return;this.J7=E;if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.Ah1],this);},
R:function(E){if(this.String===E)return;this.String=E;this.attrString=null;A.ow([
this,this.OZ],this);},A6k:function(E){if(this.AttrSet===E)return;if(!!this.AttrSet
){A.zl([this,this.Bb6],this.AttrSet,0);A.zl([this,this.OZ],this.AttrSet,1);}this.
AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.y_([this,this.Bb6],this.AttrSet
,0);A.y_([this,this.OZ],this.AttrSet,1);}A.ow([this,this.OZ],this);},C_:function(
){var B;if((this.String===A.jm)||!this.AttrSet)return EV;if(!this.attrString)this.
WY(this);if(!this.attrString)return EV;var Br=this.J7;var CZ=this.attrString.Bfj(
);var C9=A.z4(this.M,BH);var BX=[].concat(C9.slice(0,2),A.aak(C9.slice(0,2),CZ));
if(!CZ[0]||!CZ[1])return EV;if(((Br&0x80)===0x80)){if(this.attrString.Ajb())Br=(
Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&
0x4)===0x4))BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX
,(C9[0]+(((C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-
C9[1])){if(((Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x10
)===0x10))BX=A.aaR(BX,(C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}return BX;
},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Atn;this.
U=0x3;},_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.attrString
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::AttrText"};C.Ag8={Fs:null,AhB:0,AhA:0,Uk:A.vw,Cf:
A.aan(4,3,0,null),AEL:A.vw,SN:0,Aos:0,KB:function(E){if(A.z8(E,this.Kh))return;A.
Core.YR.KB.call(this,E);this.Cf.Set(3,0,E[0]);this.Cf.Set(3,1,E[1]);this.Cf.Set(
3,2,1);this.SN=0x45;this.Fs=null;A.ow([this,this.ArX],this);},KA:function(E){if(
A.z8(E,this.Mv))return;A.Core.YR.KA.call(this,E);this.Cf.Set(2,0,E[0]);this.Cf.Set(
2,1,E[1]);this.Cf.Set(2,2,1);this.SN=0x45;this.Fs=null;A.ow([this,this.ArX],this
);},DN:function(E){if(A.z8(E,this.Et))return;A.Core.YR.DN.call(this,E);this.Cf.Set(
1,0,E[0]);this.Cf.Set(1,1,E[1]);this.Cf.Set(1,2,1);this.SN=0x45;this.Fs=null;A.ow([
this,this.ArX],this);},D5:function(E){if(A.z8(E,this.Ek))return;A.Core.YR.D5.call(
this,E);this.Cf.Set(0,0,E[0]);this.Cf.Set(0,1,E[1]);this.Cf.Set(0,2,1);this.SN=0x45;
this.Fs=null;A.ow([this,this.ArX],this);},AYH:function(){return;},As6:function(H
){var B;if(this.SN===0x00)return;if(this.SN===0x45){var KR=A._NewObject(A.Graphics.
Awg,0);KR=KR.Bec(this.Cf.Get(0,0),this.Cf.Get(0,1),this.Cf.Get(1,0),this.Cf.Get(
1,1),this.Cf.Get(2,0),this.Cf.Get(2,1),this.Cf.Get(3,0),this.Cf.Get(3,1));if(!!KR
){KR.AAb(0,0);this.Cf.Set(0,2,KR.T9*240);KR.AAb(1,0);this.Cf.Set(1,2,KR.T9*240);
KR.AAb(1,1);this.Cf.Set(2,2,KR.T9*240);KR.AAb(0,1);this.Cf.Set(3,2,KR.T9*240);}this.
AYH();}if((((this.SN===0x4D)&&!!this.Fs)&&!!this.Uk[0])&&!!this.Uk[1]){var Aid=[
].concat(BH,this.Uk);var Aic=this.AEL;var Afg=Aid[0]-Aic[0];var AM=Aid[2]-Aic[0];
var D2=Aid[1]-Aic[1];var Q4=Aid[3]-Aic[1];this.Fs.AjT(Afg,D2);this.Cf.Set(0,0,this.
Fs.T7+this.AhA);this.Cf.Set(0,1,this.Fs.T8+this.AhB);this.Cf.Set(0,2,this.Fs.T9);
this.Fs.AjT(AM,D2);this.Cf.Set(1,0,this.Fs.T7+this.AhA);this.Cf.Set(1,1,this.Fs.
T8+this.AhB);this.Cf.Set(1,2,this.Fs.T9);this.Fs.AjT(AM,Q4);this.Cf.Set(2,0,this.
Fs.T7+this.AhA);this.Cf.Set(2,1,this.Fs.T8+this.AhB);this.Cf.Set(2,2,this.Fs.T9);
this.Fs.AjT(Afg,Q4);this.Cf.Set(3,0,this.Fs.T7+this.AhA);this.Cf.Set(3,1,this.Fs.
T8+this.AhB);this.Cf.Set(3,2,this.Fs.T9);if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Ek=[(this.Cf.Get(0,0)+0.5)|0,(this.Cf.Get(0,1)+0.5)|
0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(this.Cf.Get(1,1)+0.5)|0];this.Mv=[(this.Cf.
Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5)|0];this.Kh=[(this.Cf.Get(3,0)+0.5)|0,(this.
Cf.Get(3,1)+0.5)|0];this.AYH();}this.Aos=this.SN;this.SN=0x00;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},ArX:function(s){this.As6(s);},BjT:function(
E){if(A.z8(E,this.AEL))return;this.AEL=E;if((this.Aos!==0x45)&&(this.SN===0x00)){
this.SN=this.Aos;A.ow([this,this.ArX],this);}},AFc:function(AG9,KJ){var B;if(!KJ
)throw new Error(Jt);if(!this.Fs)this.Fs=A._NewObject(A.Graphics.Awg,0);this.Fs.
Bdp(KJ);this.AhA=AG9[0];this.AhB=AG9[1];this.Aos=0x4D;this.SN=0x00;if(!this.Uk[0
]||!this.Uk[1])return;var Aid=[].concat(BH,this.Uk);var Aic=this.AEL;var Afg=Aid[
0]-Aic[0];var AM=Aid[2]-Aic[0];var D2=Aid[1]-Aic[1];var Q4=Aid[3]-Aic[1];this.Fs.
AjT(Afg,D2);this.Cf.Set(0,0,this.Fs.T7+this.AhA);this.Cf.Set(0,1,this.Fs.T8+this.
AhB);this.Cf.Set(0,2,this.Fs.T9);this.Fs.AjT(AM,D2);this.Cf.Set(1,0,this.Fs.T7+this.
AhA);this.Cf.Set(1,1,this.Fs.T8+this.AhB);this.Cf.Set(1,2,this.Fs.T9);this.Fs.AjT(
AM,Q4);this.Cf.Set(2,0,this.Fs.T7+this.AhA);this.Cf.Set(2,1,this.Fs.T8+this.AhB);
this.Cf.Set(2,2,this.Fs.T9);this.Fs.AjT(Afg,Q4);this.Cf.Set(3,0,this.Fs.T7+this.
AhA);this.Cf.Set(3,1,this.Fs.T8+this.AhB);this.Cf.Set(3,2,this.Fs.T9);if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Ek=[(this.Cf.Get(0,0)+
0.5)|0,(this.Cf.Get(0,1)+0.5)|0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(this.Cf.Get(
1,1)+0.5)|0];this.Mv=[(this.Cf.Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5)|0];this.Kh=[(
this.Cf.Get(3,0)+0.5)|0,(this.Cf.Get(3,1)+0.5)|0];if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.GetExtent());this.AYH();},_Init:function(aArg){A.Core.YR._Init.
call(this,aArg);(this.Cf=[]).__proto__=C.Ag8.Cf;this.__proto__=C.Ag8;this.U=0x3;
},_Mark:function(D){var B;A.Core.YR._Mark.call(this,D);if((B=this.Fs)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AS6={Fc:null,bitmap:null
,O:null,A$S:1,A$T:0,A$U:0,A$V:0,A$W:1,A$X:0,A$Y:0,A$Z:0,A$0:1,GM:255,AIw:false,J_:
function(CW,aClip,aOffset,Ce,aBlend){var B;if(!this.bitmap)return;this.bitmap.Update(
);var Np=aOffset[0];var Nq=aOffset[1];var AD=[].concat(BH,this.Uk);aBlend=aBlend&&((
this.U&0x2)===0x2);Ce=Ce+1;var BaF;var BaG;var BaH;var BaI;var BvX=this.GM;BaF=BaG=
BaH=BaI=BvX;var AkB=255|(255<<8)|(255<<16)|((((Ce*BaF)>>8)&0xFF)<<24);var AkC=255|(
255<<8)|(255<<16)|((((Ce*BaG)>>8)&0xFF)<<24);var Buk=255|(255<<8)|(255<<16)|((((
Ce*BaH)>>8)&0xFF)<<24);var Bul=255|(255<<8)|(255<<16)|((((Ce*BaI)>>8)&0xFF)<<24);
aClip=A.z6(aClip,A.aam(EV,aOffset));CW.Ag7(aClip,this.bitmap,0,this.Cf.Get(0,0)+
Np,this.Cf.Get(0,1)+Nq,this.Cf.Get(0,2),this.Cf.Get(1,0)+Np,this.Cf.Get(1,1)+Nq,
this.Cf.Get(1,2),this.Cf.Get(2,0)+Np,this.Cf.Get(2,1)+Nq,this.Cf.Get(2,2),this.Cf.
Get(3,0)+Np,this.Cf.Get(3,1)+Nq,this.Cf.Get(3,2),AD,AkB,AkC,Buk,Bul,aBlend,true);
},GH:function(CK){if(!this.O||!this.Fc)return null;var BO=(A.Core.Adg.isPrototypeOf(
CK)?CK:null);var DX=(A.Core.Apm.isPrototypeOf(CK)?CK:null);if(!BO&&!DX)return null;
var Ff=BH;var B8=this.Fc.Ac;while(!!B8&&(B8!==this.O)){Ff=A.aaj(Ff,B8.M.slice(0,
2));B8=B8.Ac;}var W=this.Fc;if(!!BO&&!BO.Down)this.Fc=null;if(!!BO){BO.HU=A.aak(
this.Asv(BO.HU),Ff);BO.NI=A.aak(this.Asv(BO.NI),Ff);return W.GH(BO);}if(!!DX){var
Bv1=A.aak(this.Asv(A.aaj(DX.HU,DX.Dz)),Ff);DX.HU=A.aak(this.Asv(DX.HU),Ff);DX.NI=
A.aak(this.Asv(DX.NI),Ff);DX.Dz=A.aaj(DX.HU,Bv1);return W.GH(DX);}return C.Ag8.GH.
call(this,CK);},Xv:function(Dc,BG,N4,Ab4,Ab9,Ab8){var B;if(!this.O||!((this.O.U&
0x18)===0x18))return null;var pos=A.zT(Dc);pos=this.Asv(pos);var AoU=[].concat(BH
,this.Uk);if(!A.vt(AoU,pos))return null;var Jz=this.O.Xv(A.aam(A.aam([0,0,Dc[2]-
Dc[0],Dc[3]-Dc[1]],pos),this.O.M.slice(0,2)),BG,N4,Ab4,null,Ab8);if(!!Jz)this.Fc=
Jz.Cd;else this.Fc=null;if(!!this.Fc)return A._NewObject(A.Core.Att,0).Initialize(
this,BH);return null;},As6:function(H){C.Ag8.As6.call(this,H);this.AIw=false;},AFc:
function(AG9,KJ){C.Ag8.AFc.call(this,AG9,KJ);this.AIw=false;},Bya:function(){var
x1=this.Cf.Get(0,0);var y1=this.Cf.Get(0,1);var x2=this.Cf.Get(1,0);var y2=this.
Cf.Get(1,1);var x3=this.Cf.Get(2,0);var y3=this.Cf.Get(2,1);var x4=this.Cf.Get(3
,0);var y4=this.Cf.Get(3,1);var AxP=x2-x3;var AxR=y2-y3;var AxQ=x4-x3;var AxS=y4-
y3;var Azm=((x1-x2)+x3)-x4;var Azn=((y1-y2)+y3)-y4;var AnU=(AxP*AxS)-(AxR*AxQ);if(
!AnU)return;var Asn=((Azm*AxS)-(Azn*AxQ))/AnU;var BL=((AxP*Azn)-(AxR*Azm))/AnU;var
a=(x2-x1)+(Asn*x2);var Q4=(x4-x1)+(BL*x4);var BK=x1;var d=(y2-y1)+(Asn*y2);var AH5=(
y4-y1)+(BL*y4);var Lt=y1;this.A$S=AH5-(Lt*BL);this.A$T=(BK*BL)-Q4;this.A$U=(Q4*Lt
)-(BK*AH5);this.A$V=(Lt*Asn)-d;this.A$W=a-(BK*Asn);this.A$X=(BK*d)-(a*Lt);this.A$Y=(
d*BL)-(AH5*Asn);this.A$Z=(Q4*Asn)-(a*BL);this.A$0=(a*AH5)-(Q4*d);this.AIw=true;}
,Asv:function(Fo){var B;if(!this.AIw)this.Bya();var A1G=Fo[0];var A1I=Fo[1];var AzG=((
A1G*this.A$S)+(A1I*this.A$T))+this.A$U;var AzJ=((A1G*this.A$V)+(A1I*this.A$W))+this.
A$X;var A0V=((A1G*this.A$Y)+(A1I*this.A$Z))+this.A$0;if(!!A0V){AzG=AzG/A0V;AzJ=AzJ
/A0V;}var AoU=[].concat(BH,this.Uk);AzG=AzG*(AoU[2]-AoU[0]);AzJ=AzJ*(AoU[3]-AoU[
1]);return A.aak([AzG|0,AzJ|0],AoU.slice(0,2));},Rd:function(H){var B;var BaJ=this.
Uk;if(!!this.O)this.bitmap=this.O.HO;else this.bitmap=null;if(!!this.bitmap)this.
Uk=this.bitmap.FrameSize;else this.Uk=BH;if(((A.z8(BaJ,this.Uk)||((this.Aos===0x45
)&&(this.SN===0x00)))&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if(((this.Aos!==0x45)&&(this.SN===0x00))&&!A.z8(BaJ,this.Uk)){this.SN=this.Aos;
A.ow([this,this.ArX],this);}},DD:function(E){var B;if(E===this.GM)return;this.GM=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},Bi3:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ac))throw new Error(IL);if(!!this.O){A.
zl([this,this.Rd],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.y_([this,this.Rd
],E,0);this.bitmap=E.HO;}this.Rd(this);},AuO:function(){return this.GM;},_Init:function(
aArg){C.Ag8._Init.call(this,aArg);this.__proto__=C.AS6;},_Mark:function(D){var B;
C.Ag8._Mark.call(this,D);if((B=this.Fc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Adp={Hl:null,AP:0xFFFFFFFF,Dz:A.vw
,AMp:false,K3:function(){this.AY0();},J_:function(CW,aClip,aOffset,Ce,aBlend){if(
!this.Hl)return;var Du;var DK;var DF;var DJ;var BK=this.AP;Ce=Ce+1;Du=DK=DF=DJ=BK;
if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}CW.
Adp(aClip,this.Hl,A.aam(this.M,aOffset),this.AMp,this.Dz,Du,DK,DJ,DF,true,true,0
);},AY0:function(){return;},Aii:function(H){var B;if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if((
!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},AmI:function(E){
var B;if(A.z8(E,this.Dz))return;this.Dz=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hl)this.Ac.Bg(this.M);},BiY:function(E){var B;if(E===this.AMp)return;this.
AMp=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},YI:function(
E){var B;if(E===this.Hl)return;if(!!this.Hl)A.zl([this,this.Aii],this.Hl,0);this.
Hl=E;if(!!this.Hl)A.y_([this,this.Aii],this.Hl,0);if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C3(0x1,0x0);else this.C3(0x0,0x1
);},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Adp;},
_Done:function(){this.K3();this.__proto__=A.Core.EC;A.Core.EC._Done.call(this);}
,_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.Hl)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.G$={Hl:null,AP:0xFFFFFFFF
,Dz:A.vw,Width:1,K3:function(){this.AY0();},J_:function(CW,aClip,aOffset,Ce,aBlend
){if(!this.Hl)return;var Du;var DK;var DF;var DJ;var BK=this.AP;Ce=Ce+1;Du=DK=DF=
DJ=BK;if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&
0x00FFFFFF)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>
24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<
24);}CW.G$(aClip,this.Hl,A.aam(this.M,aOffset),false,this.Dz,this.Width,0,0,0,3,
Du,DK,DJ,DF,true,true);},AY0:function(){return;},Aii:function(H){var B;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.
M);},AmI:function(E){var B;if(A.z8(E,this.Dz))return;this.Dz=E;if((!!this.Ac&&((
this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},NR:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hl)this.Ac.Bg(this.M);},YI:function(E){var B;if(E===this.Hl)return;if(!!this.
Hl)A.zl([this,this.Aii],this.Hl,0);this.Hl=E;if(!!this.Hl)A.y_([this,this.Aii],this.
Hl,0);if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E
)this.C3(0x1,0x0);else this.C3(0x0,0x1);},_Init:function(aArg){A.Core.EC._Init.call(
this,aArg);this.__proto__=C.G$;},_Done:function(){this.K3();this.__proto__=A.Core.
EC;A.Core.EC._Done.call(this);},_Mark:function(D){var B;A.Core.EC._Mark.call(this
,D);if((B=this.Hl)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.BzV={A10:0x1,A1Z:0x2,A11:0x4,A14:0x8,A13:0x10,A12:0x20,BA9:0x40,BA_:0x80,BBj:
0x100};C.BBn={A10:0x1,A1Z:0x2,A11:0x4,A14:0x8,A13:0x10,A12:0x20,Bys:0x40,Byr:0x80
,Byx:0x100};C.BAx={Normal:0,BA4:1,BA2:2,BA3:3};
C._Init=function(){C.DT.__proto__=A.Core.Ajn;C.AH.__proto__=A.Core.EC;C.CC.__proto__=
A.Core.EC;C.NH.__proto__=A.Core.EC;C.Ak.__proto__=A.Core.EC;C.Text.__proto__=A.Core.
EC;C.Atn.__proto__=A.Core.EC;C.Ag8.__proto__=A.Core.YR;C.AS6.__proto__=C.Ag8;C.Adp.
__proto__=A.Core.EC;C.G$.__proto__=A.Core.EC;};C._ReInit=function(){};C.DE=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */