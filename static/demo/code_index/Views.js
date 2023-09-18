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
C.DU={Kt:null,Akh:1,Akg:1,AP:0xFFFFFFFF,J_:function(CW,aClip,aOffset,Ce,aBlend){var
B;var AfB=this.Akg;var AfC=this.Akh;var AcA=A.aak(this.Ek,aOffset);var AcB=A.aak(
this.Et,aOffset);var AkE;var AkF;var BK=this.AP;if(A.z8(AcA,AcB))return;aBlend=aBlend&&((
this.U&0x2)===0x2);Ce=Ce+1;AkE=AkF=BK;if(Ce<256){AkE=(AkE&0x00FFFFFF)|((((Ce*((AkE>>
24)&0xFF))>>8)&0xFF)<<24);AkF=(AkF&0x00FFFFFF)|((((Ce*((AkF>>24)&0xFF))>>8)&0xFF
)<<24);}if((AfB===1)&&(AfC===1))CW.AtC(aClip,AcA,AcB,AkE,AkF,aBlend);else CW.BeA(
aClip,AcA,AcB,AfB,AfC,AkE,AkF,aBlend);},GetExtent:function(){var AfB=this.Akg;var
AfC=this.Akh;var AcA=this.Ek;var AcB=this.Et;if(((AfB===1)&&(AfC===1))||A.z8(AcA
,AcB))return A.Core.Ajo.GetExtent.call(this);var AhL=AfB/2;var AhM=AfC/2;var Aob=
AcA[0];var Aoc=AcA[1];var Aod=AcB[0];var Aoe=AcB[1];var JY=Aod-Aob;var JZ=Aoe-Aoc;
var IR=Math.sqrt((JY*JY)+(JZ*JZ));JY=JY/IR;JZ=JZ/IR;var A_$=Aob+(JZ*AhL);var A$a=
Aoc-(JY*AhL);var AHB=Aod+(JZ*AhM);var AHC=Aoe-(JY*AhM);var AHD=Aod-(JZ*AhM);var AHE=
Aoe+(JY*AhM);var AHF=Aob-(JZ*AhL);var AHG=Aoc+(JY*AhL);var left=A_$;var right=A_$;
var top=A$a;var bottom=A$a;if(AHB<left)left=AHB;if(AHD<left)left=AHD;if(AHF<left
)left=AHF;if(AHB>right)right=AHB;if(AHD>right)right=AHD;if(AHF>right)right=AHF;if(
AHC<top)top=AHC;if(AHE<top)top=AHE;if(AHG<top)top=AHG;if(AHC>bottom)bottom=AHC;if(
AHE>bottom)bottom=AHE;if(AHG>bottom)bottom=AHG;var AM=[left|0,top|0,right|0,bottom|
0];AM=[].concat(AM.slice(0,2),A.aak(AM.slice(2,4),B$));return AM;},Re:function(H
){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},A7s:function(
E){var B;if(E<1)E=1;if(E===this.Akh)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Akh=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Akg!==1))&&!this.Kt){this.Kt=A.zW(A.abj.Arv
);if(this.Kt.Oy)A.y_([this,this.Re],this.Kt,0);}if(((E===1)&&(this.Akg===1))&&!!
this.Kt){if(this.Kt.Oy)A.zl([this,this.Re],this.Kt,0);this.Kt=null;}},A7r:function(
E){var B;if(E<1)E=1;if(E===this.Akg)return;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Akg=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());if(((E!==1)||(this.Akh!==1))&&!this.Kt){this.Kt=A.zW(A.abj.Arv
);if(this.Kt.Oy)A.y_([this,this.Re],this.Kt,0);}if(((E===1)&&(this.Akh===1))&&!!
this.Kt){if(this.Kt.Oy)A.zl([this,this.Re],this.Kt,0);this.Kt=null;}},NR:function(
E){var B;if(E<1)E=1;if((E===this.Akg)&&(E===this.Akh))return;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Akg=E;this.Akh=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());if((E!==1)&&!this.Kt){this.Kt=A.
zW(A.abj.Arv);if(this.Kt.Oy)A.y_([this,this.Re],this.Kt,0);}if((E===1)&&!!this.Kt
){if(this.Kt.Oy)A.zl([this,this.Re],this.Kt,0);this.Kt=null;}},L:function(E){var
B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.GetExtent());},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400
);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(
0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg){A.Core.Ajo._Init.call(this
,aArg);this.__proto__=C.DU;},_Mark:function(D){var B;A.Core.Ajo._Mark.call(this,
D);if((B=this.Kt)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Line"};
C.AH={ALb:0xFFFFFFFF,ALc:0xFFFFFFFF,ALg:0xFFFFFFFF,ALf:0xFFFFFFFF,AP:0xFFFFFFFF,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var Du=this.ALf;var DK=this.ALg;var
DF=this.ALb;var DJ=this.ALc;var BK=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Ce=
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
AtS(aClip,A.aam(this.M,aOffset),Du,DK,DJ,DF,aBlend);},AuZ:function(E){var B;if(E===
this.ALb)return;this.ALb=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},Au0:function(E){var B;if(E===this.ALc)return;this.ALc=E;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},Au3:function(E){var B;if(E===this.ALg)return;this.
ALg=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},Au2:function(E){var
B;if(E===this.ALf)return;this.ALf=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},E$:function(){var B;return((this.U&0x1)===0x1
);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg
){A.Core.EC._Init.call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"
};C.CC={Width:1,AP:0xFFFFFFFF,J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var Du;
var DK;var DF;var DJ;var BK=this.AP;aBlend=aBlend&&((this.U&0x2)===0x2);Ce=Ce+1;
Du=DK=DF=DJ=BK;if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((
Ce*((DF>>24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8
)&0xFF)<<24);}CW.Bey(aClip,A.aam(this.M,aOffset),this.Width,Du,DK,DJ,DF,aBlend);
},NR:function(E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(
E){if(E)this.C4(0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg){A.Core.EC.
_Init.call(this,aArg);this.__proto__=C.CC;},_className:"Views::Border"};C.NI={timer:
null,Aj:null,MD:-1,AP:0xFFFFFFFF,AtD:0x1F,Tc:0,Dq:0,Amr:A.vw,UO:false,J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;var Nm=this.Tc;if(this.MD>=0)Nm=this.MD;if(!this.
Aj||(Nm>=this.Aj.NoOfFrames))return;this.Aj.Update();var Du;var DK;var DJ;var DF;
var BK=this.AP;var J5=(((Ce+1)*255)>>8)+1;var N_=this.AtD;var AM=A.aam(this.M,aOffset
);var AI1=A.aaj([AM[2]-AM[0],AM[3]-AM[1]],this.Amr);aBlend=aBlend&&((this.U&0x2)===
0x2);Du=DK=DF=DJ=BK;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF
)<<24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF
)|((((((DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*
J5)>>8)&0xFF)<<24);}if(((this.Amr[0]>0)&&(AI1[0]>0))&&!((N_&0x5)===0x5)){var d=((
this.Aj.FrameSize[0]/3)|0)-AI1[0];if(((N_&0x1)===0x1)){if(aClip[2]>AM[2])aClip=A.
aaQ(aClip,AM[2]);if(d>0)AM=A.aaQ(AM,AM[2]+d);N_=N_|0x4;}else if(((N_&0x4)===0x4)
){if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.slice(1,4));if(d>0)AM=[].concat(
AM[0]-d,AM.slice(1,4));N_=N_|0x1;}else{if(aClip[0]<AM[0])aClip=[].concat(AM[0],aClip.
slice(1,4));if(aClip[2]>AM[2])aClip=A.aaQ(aClip,AM[2]);if(d>0){AM=[].concat(AM[0
]-((d/2)|0),AM.slice(1,4));AM=A.aaQ(AM,(AM[2]+d)-((d/2)|0));}N_=N_|0x5;}}if(((this.
Amr[1]>0)&&(AI1[1]>0))&&!((N_&0xA)===0xA)){var d=((this.Aj.FrameSize[1]/3)|0)-AI1[
1];if(((N_&0x2)===0x2)){if(aClip[3]>AM[3])aClip=[].concat(aClip.slice(0,3),AM[3]
);if(d>0)AM=[].concat(AM.slice(0,3),AM[3]+d);N_=N_|0x8;}else if(((N_&0x8)===0x8)
){if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(d>0)AM=A.aaS(AM,AM[1]-d);N_=N_|0x2;
}else{if(aClip[1]<AM[1])aClip=A.aaS(aClip,AM[1]);if(aClip[3]>AM[3])aClip=[].concat(
aClip.slice(0,3),AM[3]);if(d>0){AM=A.aaS(AM,AM[1]-((d/2)|0));AM=[].concat(AM.slice(
0,3),(AM[3]+d)-((d/2)|0));}N_=N_|0xA;}}CW.Bex(aClip,this.Aj,Nm,AM,N_,Du,DK,DJ,DF
,aBlend);},Re:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.
M);},L$:function(H){var B;var Nm=this.MD;var SO=0;if(!!this.Aj)SO=this.Aj.NoOfFrames
*this.Aj.FrameDelay;if((!!this.timer&&(this.MD<0))&&(SO>0))this.Dq=this.timer.Bu-(
this.Tc*this.Aj.FrameDelay);if(!!this.timer&&(SO>0)){var Aq=(this.timer.Bu-this.
Dq)|0;Nm=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SO){Nm=Nm%this.Aj.NoOfFrames;this.Dq=this.
timer.Bu-(Aq%SO);}}if(((Nm!==this.MD)&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);this.MD=Nm;if(!SO&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.
timer=null;}},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},YB:function(E){var B;if(this.UO===E)return;
this.UO=E;this.MD=-1;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(A.abm.Af2);A.y_([this,this.L$],this.
timer,0);A.ow([this,this.L$],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(
this.M);},A6I:function(E){var B;if(E===this.AtD)return;this.AtD=E;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===
this.Tc)&&(this.MD===-1))return;this.Tc=E;if(!this.timer)this.MD=-1;if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;
if(!!this.Aj&&this.Aj.Oy)A.zl([this,this.Re],this.Aj,0);this.Aj=E;this.MD=-1;if(
!!E&&E.Oy)A.y_([this,this.Re],E,0);if(this.UO){this.YB(false);this.YB(true);}if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C4(
0x1,0x0);else this.C4(0x0,0x1);},A6W:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[
1]<0)E=[E[0],0];if(A.z8(E,this.Amr))return;this.Amr=E;if((!!this.Ac&&((this.U&0x1
)===0x1))&&!((this.AtD&0xF)===0xF))this.Ac.Bg(this.M);},_Init:function(aArg){A.Core.
EC._Init.call(this,aArg);this.__proto__=C.NI;},_Mark:function(D){var B;A.Core.EC.
_Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Frame"};C.Ak={timer:
null,Aj:null,Dq:0,MD:0,AP:0xFFFFFFFF,J7:0x12,Tc:0,GN:255,UO:false,Z$:false,J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;var Nm=this.Tc;if(this.MD>=0)Nm=this.MD;if(!this.
Aj||(Nm>=this.Aj.NoOfFrames))return;this.Aj.Update();var AD=this.C_();var CZ=this.
Aj.FrameSize;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;var Du;var DK;var DJ;var DF;
var BK=this.AP;var J5=(((Ce+1)*this.GN)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2
);Du=DK=DF=DJ=BK;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((
DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J5)>>8)&
0xFF)<<24);}if(A.z8([AD[2]-AD[0],AD[3]-AD[1]],CZ))CW.A22(aClip,this.Aj,Nm,A.aam(
this.M,aOffset),A.aaj(this.M.slice(0,2),AD.slice(0,2)),Du,DK,DJ,DF,aBlend);else CW.
BkZ(aClip,this.Aj,Nm,A.aam(AD,aOffset),[].concat(BH,CZ),Du,DK,DJ,DF,aBlend,true);
},Re:function(H){var B;if(((this.Z$&&!!this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.
Aj.FrameSize[1]>0))this.G(this.C_());if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},L$:function(H){var B;var Nm=this.MD;var SO=0;if(!!this.Aj)SO=this.Aj.
NoOfFrames*this.Aj.FrameDelay;if((!!this.timer&&(this.MD<0))&&(SO>0))this.Dq=this.
timer.Bu-(this.Tc*this.Aj.FrameDelay);if(!!this.timer&&(SO>0)){var Aq=(this.timer.
Bu-this.Dq)|0;Nm=(Aq/this.Aj.FrameDelay)|0;if(Aq>=SO){Nm=Nm%this.Aj.NoOfFrames;this.
Dq=this.timer.Bu-(Aq%SO);}}if(((Nm!==this.MD)&&!!this.Ac)&&((this.U&0x1)===0x1))
this.Ac.Bg(this.M);this.MD=Nm;if(!SO&&!!this.timer){A.zl([this,this.L$],this.timer
,0);this.timer=null;}},I2:function(E){if(E===this.Z$)return;this.Z$=E;if(((E&&!!
this.Aj)&&(this.Aj.FrameSize[0]>0))&&(this.Aj.FrameSize[1]>0))this.G(this.C_());
},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},YB:function(E){var B;if(this.UO===E)return;this.UO=
E;this.MD=-1;if(!E&&!!this.timer){A.zl([this,this.L$],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.Af2);A.y_([this,this.L$],this.timer,0);
A.ow([this,this.L$],this);}if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);
},A2:function(E){var B;if(E===this.J7)return;this.J7=E;if(!!this.Ac&&((this.U&0x1
)===0x1))this.Ac.Bg(this.M);},Ct:function(E){var B;if(E<0)E=0;if((E===this.Tc)&&(
this.MD===-1))return;this.Tc=E;if(!this.timer)this.MD=-1;if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);},At:function(E){var B;if(E===this.Aj)return;if(!
!this.Aj&&this.Aj.Oy)A.zl([this,this.Re],this.Aj,0);this.Aj=E;this.MD=-1;if(!!E&&
E.Oy)A.y_([this,this.Re],E,0);if(this.UO){this.YB(false);this.YB(true);}if(((this.
Z$&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.G(this.C_());if(!!this.Ac&&((
this.U&0x1)===0x1))this.Ac.Bg(this.M);},DD:function(E){var B;if(E>255)E=255;if(E<
0)E=0;if(E===this.GN)return;this.GN=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.
Bg(this.M);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.C4(0x0,0x400);},E$:
function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(E)this.C4(0x1,0x0
);else this.C4(0x0,0x1);},C_:function(){var B;if(!this.Aj)return EV;var Br=this.
J7;var CZ=this.Aj.FrameSize;var A8=this.M;var width=A8[2]-A8[0];var height=A8[3]-
A8[1];if(!CZ[0]||!CZ[1])return EV;var C9=[0,0,width,height];var BX=C9;if(((Br&0x40
)===0x40)){var A1b=((((C9[2]-C9[0])<<16)+((CZ[0]/2)|0))/CZ[0])|0;var Aze=((((C9[
3]-C9[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var Ah9=A1b;if(Aze>Ah9)Ah9=Aze;BX=A.aaO(BX
,((CZ[0]*Ah9)+32768)>>16);BX=A.aaL(BX,((CZ[1]*Ah9)+32768)>>16);}else if(((Br&0x80
)===0x80)){var A1b=((((C9[2]-C9[0])<<16)+((CZ[0]/2)|0))/CZ[0])|0;var Aze=((((C9[
3]-C9[1])<<16)+((CZ[1]/2)|0))/CZ[1])|0;var Ah9=A1b;if(Aze<Ah9)Ah9=Aze;BX=A.aaO(BX
,((CZ[0]*Ah9)+32768)>>16);BX=A.aaL(BX,((CZ[1]*Ah9)+32768)>>16);}else if(!((Br&0x100
)===0x100))BX=A.aaN(BX,CZ);if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&0x4)===0x4)
)BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX,(C9[0]+(((
C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-C9[1])){if(((
Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x10)===0x10))BX=
A.aaR(BX,(C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}BX=A.aam(BX,A8.slice(
0,2));return BX;},Bg$:function(){return this.AP;},AQa:function(){return this.Tc;
},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Ak;},_Mark:
function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Views::Image"};C.Text={B6:null,Ej:null,CG:A.jm,String:A.jm,N7:null,Alr:A.vw,I3:
0,Sc:0,AbN:0,Bp:A.vw,J7:0x12,AP:0xFFFFFFFF,AeM:false,Z$:false,Xy:false,ALX:false
,HR:false,K3:function(){if(!!this.N7){this.AZt(this.N7);this.N7=null;}},J_:function(
CW,aClip,aOffset,Ce,aBlend){var B;if((this.CG===A.jm)||!this.B6)return;var Br=this.
J7;var font=this.B6;var C9=A.aam(this.M,aOffset);var Du;var DK;var DJ;var DF;var
col=this.AP;var J5=(((Ce+1)*255)>>8)+1;var J4=this.CG.charCodeAt(0)||0;var AD=A.
aam(this.C_(),aOffset);var Bo=[C9[0]-AD[0],(C9[1]-AD[1])-font.Ascent];if(J4<1)return;
Du=DK=DF=DJ=col;if(J5<256){Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*J5)>>8)&0xFF)<<
24);DK=(DK&0x00FFFFFF)|((((((DK>>24)&0xFF)*J5)>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((((
DJ>>24)&0xFF)*J5)>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((((DF>>24)&0xFF)*J5)>>8)&
0xFF)<<24);}if(((Br&0x80)===0x80)){if(this.Ajc())Br=(Br&~0x80)|0x4;else Br=(Br&~
0x80)|0x1;}if((J4===1)&&!((Br&0x40)===0x40)){CW.A3u(aClip,font,this.CG,2,(this.CG.
charCodeAt(1)||0)-1,C9,Bo,0,0,Du,DK,DJ,DF,true);return;}var leading=font.Leading;
if(this.Sc>0)leading=(this.Sc-font.Ascent)-font.Descent;var ZW=(font.Ascent+font.
Descent)+leading;var Buv=aClip[1]-AD[1];var Buw=aClip[3]-AD[1];var AYH=AD[2]-AD[
0];var Dl=0;var P=1;var BK=this.CG.charCodeAt(1)||0;while(((Dl+ZW)<Buv)&&(BK>0)){
P=P+BK;Dl=Dl+ZW;BK=this.CG.charCodeAt(P)||0;}while((Dl<Buw)&&(BK>0)){var L5=A.aaj(
Bo,[0,Dl]);var All=0;var OW=false;if(((((Br&0x40)===0x40)&&((this.CG.charCodeAt((
P+BK)-1)||0)!==0x0A))&&((this.CG.charCodeAt(P+1)||0)!==0x0A))&&((this.CG.charCodeAt(
P+BK)||0)!==0x00))OW=true;if(OW&&!!(Br&0x6)){var AoT=P+BK;var Axu=this.CG.indexOf(
String.fromCharCode(0x20),P+1);var Axv=this.CG.indexOf(String.fromCharCode(0xA0)
,P+1);if(((Axu<0)||(Axu>=AoT))&&((Axv<0)||(Axv>=AoT)))OW=false;}if(OW)All=AYH;else
if(((Br&0x4)===0x4))L5=[(L5[0]-AYH)+font.XI(this.CG,P+1,BK-1),L5[1]];else if(((Br&
0x2)===0x2))L5=[(L5[0]-((AYH/2)|0))+((font.XI(this.CG,P+1,BK-1)/2)|0),L5[1]];CW.
A3u(aClip,font,this.CG,P+1,BK-1,C9,L5,All,0,Du,DK,DJ,DF,true);P=P+BK;Dl=Dl+ZW;BK=
this.CG.charCodeAt(P)||0;}},G:function(E){var B;if(A.z9(E,this.M))return;var Bcg;
Bcg=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((Bcg&&!this.AbN)&&this.AeM)&&this.HR
)&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this
);}if(((this.Xy&&this.HR)&&!A.z8([(B=this.M)[2]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-
E[1]]))&&!((this.U&0x2000)===0x2000)){this.CG=A.jm;this.HR=false;A.ow([this,this.
OZ],this);}A.Core.EC.G.call(this,E);A.ow([this,this.Ah2],this);},Bun:function(aBidi
,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.ze(aBidi,aRowStart,aRowEnd
,aIndex);return aIndex;},Bum:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)
return aIndex;aIndex=A.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},AZt:function(
aBidi){if(!aBidi)return;A.qU(aBidi);},BuI:function(aSize){var bidi=null;bidi=A.vj(
aSize);return bidi;},Ah2:function(H){A.ow(this.Ej,this);},OZ:function(H){A.ow([this
,this.WV],this);},WV:function(H){var B;if(this.HR)return;var width=(B=this.M)[2]-
B[0];var height=(B=this.M)[3]-B[1];var WK=-1;var font=this.B6;if((!!font&&!!!font.
Ascent)&&!!!font.Descent)font=null;if(this.AeM){if(this.AbN>0)WK=this.AbN;else if(
!this.Z$)WK=width-(this.I3*2);else WK=width;if(WK<0)WK=1;}if(!!this.N7){this.AZt(
this.N7);this.N7=null;}this.HR=true;if((this.String!==A.jm)&&!!font){var length=
this.String.length;if(this.ALX)this.N7=this.BuI(length);this.CG=font.Bkp(this.String
,0,WK,length,this.N7);if(!!this.N7&&!this.BfP()){this.AZt(this.N7);this.N7=null;
}}else this.CG=A.jm;this.Alr=BH;if(((this.Xy&&(this.CG!==A.jm))&&!this.Z$)&&!!font
){var Br=this.J7;var leading=font.Leading;var Ip=this.CG;var AIZ=this.Ajc();if(((
Br&0x80)===0x80)){if(AIZ)Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sc>0)
leading=(this.Sc-font.Ascent)-font.Descent;var Ay$=(font.Ascent+font.Descent)+leading;
var J4=Ip.charCodeAt(0)||0;var Ak3=((height+leading)/Ay$)|0;var AYW=false;var AHJ=
false;if(Ak3<=0)Ak3=1;if(J4>Ak3){var A9=0;var Aza=0;var AIX=J4-1;var KQ;var Nn=Ip.
length;var tmp=A.jm;if(!!(Br&0x110)&&!!(Br&0x28))Br&=~0x110;if(!!(Br&0x110))Br&=
~0x28;if(((Br&0x20)===0x20))Aza=J4-Ak3;else if(((Br&0x10)===0x10)||((Br&0x100)===
0x100)){Aza=((J4-Ak3)/2)|0;AIX=(Aza+Ak3)-1;}else AIX=Ak3-1;AYW=Aza>0;AHJ=AIX<(J4-
1);for(KQ=1;A9<Aza;A9=A9+1)KQ=KQ+(Ip.charCodeAt(KQ)||0);if(AHJ)for(Nn=KQ;A9<AIX;
A9=A9+1)Nn=Nn+(Ip.charCodeAt(Nn)||0);if(AYW){var IR=Ip.charCodeAt(KQ)||0;tmp=(GT+
A.aaY(Ip,KQ,IR))+GT;tmp=A.aaT(tmp,0,(IR+2)&0xFFFF);KQ=KQ+IR;if((tmp.charCodeAt(IR
)||0)===0x0A){tmp=A.aaT(tmp,IR,0xFEFF);tmp=A.aaT(tmp,IR+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(tmp,1,0x0A);}else tmp=A.aaT(tmp
,1,0xFEFF);}tmp=tmp+A.aaY(Ip,KQ,Nn-KQ);if(AHJ&&(Nn>=KQ)){var IR=Ip.charCodeAt(Nn
)||0;var P7=(GT+A.aaY(Ip,Nn,IR))+GT;P7=A.aaT(P7,0,(IR+2)&0xFFFF);P7=A.aaT(P7,1,0xFEFF
);if((P7.charCodeAt(IR)||0)===0x0A){P7=A.aaT(P7,IR,0xFEFF);P7=A.aaT(P7,IR+1,0x0A
);}if((P7.charCodeAt(2)||0)===0x0A){P7=A.aaT(P7,2,0xFEFF);P7=A.aaT(P7,1,0x0A);}else
P7=A.aaT(P7,1,0xFEFF);tmp=tmp+P7;}Ip=String.fromCharCode(Ak3&0xFFFF)+tmp;}var A9=
0;var inx=1;var AIy=width-(this.I3*2);if(this.AeM&&(this.AbN>0))AIy=this.AbN;J4=
Ip.charCodeAt(0)||0;for(;A9<J4;A9=A9+1){var Alj=AYW&&!A9;var Alk=AHJ&&(A9===(J4-
1));var Wy=false;var Wz=false;var AsS=AIZ;if((AIZ&&Alj)&&!Alk){Alj=false;Alk=true;
}else if((AIZ&&Alk)&&!Alj){Alk=false;Alj=true;}var WW=inx+1;var IR=Ip.charCodeAt(
inx)||0;var KQ=WW;var Nn=(WW+IR)-2;var AZL=-1;var AZM=-1;if(!this.AeM&&(font.XI(
Ip,WW,IR-1)>AIy)){var AnN=Br;if(((AnN&0x2)===0x2)&&!!(AnN&0x5))AnN&=~0x2;if(((AnN&
0x2)===0x2))AnN&=~0x5;if(((AnN&0x4)===0x4))Wy=true;else if(((AnN&0x2)===0x2)){Wy=
true;Wz=true;}else Wz=true;}if((Ip.charCodeAt(KQ)||0)===0x0A)KQ=KQ+1;if((Ip.charCodeAt(
Nn)||0)===0x0A)Nn=Nn-1;while(Wy&&((Ip.charCodeAt(KQ)||0)===0xFEFF))KQ=KQ+1;while(
Wz&&((Ip.charCodeAt(Nn)||0)===0xFEFF))Nn=Nn-1;Wy=Wy&&!Alk;Wz=Wz&&!Alj;while((((Wy||
Wz)||Alj)||Alk)&&(KQ<Nn)){if((Wy&&(AsS||!Wz))||Alj){if(AZL>0)Ip=A.aaT(Ip,AZL,0xFEFF
);Ip=A.aaT(Ip,KQ,0x2026);AZL=KQ;KQ=KQ+1;AsS=!AsS;Alj=false;if(font.XI(Ip,WW,IR-1
)<=AIy){Wy=false;Wz=false;}else Wy=Wy||!Wz;}if((Wz&&(!AsS||!Wy))||Alk){if(AZM>0)
Ip=A.aaT(Ip,AZM,0xFEFF);Ip=A.aaT(Ip,Nn,0x2026);AZM=Nn;Nn=Nn-1;AsS=!AsS;Alk=false;
if(font.XI(Ip,WW,IR-1)<=AIy){Wy=false;Wz=false;}else Wz=Wz||!Wy;}}inx=inx+IR;}this.
Alr=[font.A3Y(Ip),((Ip.charCodeAt(0)||0)*Ay$)-leading];this.CG=Ip;}if(this.Z$&&(
this.CG!==A.jm)){var AsE=[this.I3,0];this.U=this.U|0x2000;this.G(A.aal(A.z4(this.
C_(),AsE),this.Bp));this.U=this.U&~0x2000;}if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);A.ow([this,this.Ah2],this);},BiG:function(E){if(E===this.ALX)return;
this.ALX=E;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);},HG:function(E){
if(E<0)E=0;if(this.I3===E)return;this.I3=E;this.CG=A.jm;this.HR=false;A.ow([this
,this.OZ],this);},BjV:function(E){var B;if(E<0)E=0;if(this.Sc===E)return;this.Sc=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);if(this.Xy){this.CG=A.jm;
this.HR=false;A.ow([this,this.OZ],this);}if(this.Z$&&this.HR)this.G(A.aal(this.C_(
),this.Bp));if(this.HR)A.ow([this,this.Ah2],this);},BiF:function(E){if(E===this.
Xy)return;this.Xy=E;if(((this.AeM&&!!!this.AbN)||E)||!!this.Ej)this.U=this.U&~0x100;
else this.U=this.U|0x100;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);},
QA:function(E){if(A.z$(E,this.Ej))return;this.Ej=E;if(((!!!this.AbN&&this.AeM)||
!!E)||this.Xy)this.U=this.U&~0x100;else this.U=this.U|0x100;},I2:function(E){if(
E===this.Z$)return;this.Z$=E;if(E&&this.Xy){this.CG=A.jm;this.HR=false;A.ow([this
,this.OZ],this);}if(E&&this.HR){var AsE=[this.I3,0];this.U=this.U|0x2000;this.G(
A.aal(A.z4(this.C_(),AsE),this.Bp));this.U=this.U&~0x2000;}},Bka:function(E){if(
E<0)E=0;if(E===this.AbN)return;this.AbN=E;if(this.AeM&&this.HR){this.CG=A.jm;this.
HR=false;A.ow([this,this.OZ],this);}if(((!!!E&&this.AeM)||this.Xy)||!!this.Ej)this.
U=this.U&~0x100;else this.U=this.U|0x100;},KD:function(E){if(E===this.AeM)return;
this.AeM=E;if(this.HR){this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);}if(((
E&&!!!this.AbN)||this.Xy)||!!this.Ej)this.U=this.U&~0x100;else this.U=this.U|0x100;
},Gk:function(E){var B;if(A.z8(E,this.Bp))return;this.Bp=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);if(this.HR)A.ow([this,this.Ah2],this);},A2:function(
E){var B;if(E===this.J7)return;this.J7=E;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);if(this.Xy){this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);}
if(this.HR)A.ow([this,this.Ah2],this);},R:function(E){if(E===this.String)return;
this.String=E;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ],this);},Aa:function(
E){if(E===this.B6)return;this.B6=E;this.CG=A.jm;this.HR=false;A.ow([this,this.OZ
],this);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.M);},Ai:function(E){if(E)this.C4(0x400,0x0);else this.
C4(0x0,0x400);},E$:function(){var B;return((this.U&0x1)===0x1);},X:function(E){if(
E)this.C4(0x1,0x0);else this.C4(0x0,0x1);},Ajc:function(){if(!this.HR)this.WV(this
);if(!this.N7)return false;var result=false;var bidi=this.N7;result=A.vi(bidi);return result;
},BfP:function(){if(!this.HR)this.WV(this);if(!this.N7)return false;var result=false;
var bidi=this.N7;result=A.zc(bidi);return result;},AER:function(aIndex){if(((this.
String===A.jm)||!this.B6)||this.Xy)return BH;if(!this.HR)this.WV(this);if(aIndex<
0)aIndex=0;var BvS=(this.CG.charCodeAt(0)||0)-1;var L_=this.CG.charCodeAt(1)||0;
var inx=1;var Aib=2;var A9=0;var col=-1;var CO=true;aIndex=aIndex+2;while((A9<BvS
)&&((inx+L_)<=aIndex)){inx=inx+L_;A9=A9+1;Aib=Aib+1;aIndex=aIndex+1;L_=this.CG.charCodeAt(
inx)||0;}if(aIndex>(inx+L_))aIndex=inx+L_;if(!!this.N7)aIndex=(inx+this.Bum(this.
N7,(inx+1)-Aib,(inx+L_)-Aib,(aIndex-inx)-1))+1;for(;aIndex>inx;inx=inx+1){var Il=
this.CG.charCodeAt(inx+1)||0;if(CO)col=col+1;CO=(Il!==0xFEFF)&&(Il!==0x0A);}return[
col,A9];},AmY:function(AnF){if(((this.String===A.jm)||!this.B6)||this.Xy)return 0;
if(!this.HR)this.WV(this);var A9=AnF[1];var col=AnF[0];var inx=1;var Aib=2;var J4=
this.CG.charCodeAt(0)||0;var L_=this.CG.charCodeAt(1)||0;if(A9>=J4){A9=J4-1;col=
this.CG.length;}if(A9<0){A9=0;col=0;}if(col<0)col=0;while((A9>0)&&(L_>0)){inx=inx+
L_;A9=A9-1;Aib=Aib+1;L_=this.CG.charCodeAt(inx)||0;}var WH=inx;var AIY=(inx-Aib)+
1;var AoT=(AIY+L_)-1;var AyY=false;while((col>=0)&&(L_>1)){var Il=this.CG.charCodeAt(
inx+1)||0;inx=inx+1;L_=L_-1;AyY=(Il===0xFEFF)||(Il===0x0A);if(!AyY){col=col-1;WH=
inx;}}if((!AyY&&(col>=0))&&((this.CG.charCodeAt(inx+1)||0)===0x00))AyY=true;if(AyY
)WH=WH+1;WH=WH-Aib;if(!!this.N7)WH=AIY+this.Bun(this.N7,AIY,AoT,WH-AIY);return WH;
},ARt:function(KK){var B;if((this.String===A.jm)||!this.B6)return BH;if(!this.HR
)this.WV(this);var AD=this.C_();if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return BH;var font=
this.B6;var Br=this.J7;var J4=this.CG.charCodeAt(0)||0;var leading=font.Leading;
if(KK[1]<AD[1])KK=[KK[0],AD[1]];if(KK[1]>=AD[3])KK=[KK[0],AD[3]-1];if(this.Sc>0)
leading=(this.Sc-font.Ascent)-font.Descent;var ZW=(font.Ascent+font.Descent)+leading;
var A9=((KK[1]-AD[1])/ZW)|0;var Nx=this.AA_(A9);var L_=Nx.length;var OW=false;if(((
Br&0x80)===0x80)){if(this.Ajc())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&
0x40)===0x40)&&(A9<(J4-1)))OW=true;if((OW&&(Nx.indexOf(String.fromCharCode(0x20)
,0)<0))&&(Nx.indexOf(String.fromCharCode(0xA0),0)<0))OW=false;if(OW){var inx=1;var
AoS=A9;while(AoS>0){inx=inx+(this.CG.charCodeAt(inx)||0);AoS=AoS-1;}if(((this.CG.
charCodeAt(inx+1)||0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx
)||0))-1)||0)===0x0A))OW=false;}var All=0;var FY=0;if(OW)All=AD[2]-AD[0];else if(((
Br&0x4)===0x4))FY=(AD[2]-AD[0])-font.XI(Nx,0,L_);else if(((Br&0x2)===0x2))FY=(((
AD[2]-AD[0])/2)|0)-((font.XI(Nx,0,L_)/2)|0);var col=font.Bfq(Nx,0,L_,(KK[0]-AD[0
])-FY,All);if(col<0)col=0;return[col,A9];},Aei:function(AnF){var B;if((this.String===
A.jm)||!this.B6)return BH;if(!this.HR)this.WV(this);var J4=this.CG.charCodeAt(0)||
0;var font=this.B6;var Br=this.J7;var A9=AnF[1];var col=AnF[0];if(A9>=J4){A9=J4-
1;col=this.CG.length;}if(A9<0){A9=0;col=0;}var Nx=this.AA_(A9);var L_=Nx.length;
var AD=this.C_();var OW=false;var leading=font.Leading;if(((Br&0x80)===0x80)){if(
this.Ajc())Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)&&(A9<(
J4-1)))OW=true;if((OW&&(Nx.indexOf(String.fromCharCode(0x20),0)<0))&&(Nx.indexOf(
String.fromCharCode(0xA0),0)<0))OW=false;if(OW){var inx=1;var AoS=A9;while(AoS>0
){inx=inx+(this.CG.charCodeAt(inx)||0);AoS=AoS-1;}if(((this.CG.charCodeAt(inx+1)||
0)===0x0A)||((this.CG.charCodeAt((inx+(this.CG.charCodeAt(inx)||0))-1)||0)===0x0A
))OW=false;}if(this.Sc>0)leading=(this.Sc-font.Ascent)-font.Descent;var Dl=(AD[1
]+(A9*((font.Ascent+font.Descent)+leading)))+font.Ascent;var All=0;var FY=AD[0];
if(OW)All=AD[2]-AD[0];else if(((Br&0x4)===0x4))FY=AD[2]-font.XI(Nx,0,L_);else if(((
Br&0x2)===0x2))FY=(FY+(((AD[2]-AD[0])/2)|0))-((font.XI(Nx,0,L_)/2)|0);var pos=font.
Bfm(Nx,0,L_,col,All);if(pos<0)pos=0;return[FY+pos,Dl];},AMG:function(Ab){var B;if((
this.String===A.jm)||!this.B6)return EV;if(!this.HR)this.WV(this);var J4=this.CG.
charCodeAt(0)||0;var font=this.B6;if((Ab<0)||((Ab>=J4)&&(Ab>0)))return EV;var Br=
this.J7;var inx=1;var leading=font.Leading;var A8=this.M;var width=A8[2]-A8[0];var
height=A8[3]-A8[1];width=width-(this.I3*2);if(((Br&0x80)===0x80)){if(this.Ajc())
Br=(Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(this.Sc>0)leading=(this.Sc-font.Ascent
)-font.Descent;var Dl=Ab*((font.Ascent+font.Descent)+leading);var FY=0;while(Ab>
0){inx=inx+(this.CG.charCodeAt(inx)||0);Ab=Ab-1;}var Azb=(this.CG.charCodeAt(inx
)||0)-1;var Bch=font.XI(this.CG,inx+1,Azb);var A1a=font.A37(this.CG,inx+1,Azb);var
AoU=Bch;var ZW=font.Ascent+font.Descent;var Azq=(J4*((font.Ascent+font.Descent)+
leading))-leading;if(!J4)Azq=ZW;if((((this.CG.charCodeAt((inx+Azb)+1)||0)===0x00
)||((this.CG.charCodeAt(inx+Azb)||0)===0x0A))||((this.CG.charCodeAt(inx+1)||0)===
0x0A))Br=Br&~0x40;if(((Br&0x40)===0x40)){var AoT=(inx+1)+Azb;var Axu=this.CG.indexOf(
String.fromCharCode(0x20),inx+1);var Axv=this.CG.indexOf(String.fromCharCode(0xA0
),inx+1);if(((Axu>=0)&&(Axu<AoT))||((Axv>=0)&&(Axv<AoT)))AoU=width;}if((!!(Br&0x110
)&&!!(Br&0x28))&&(Azq>height))Br&=~0x110;if(!!(Br&0x110))Br&=~0x28;if((((Br&0x2)===
0x2)&&!!(Br&0x5))&&(AoU>width))Br&=~0x2;if(((Br&0x2)===0x2))Br&=~0x5;if(((Br&0x4
)===0x4))FY=width-AoU;else if(((Br&0x2)===0x2))FY=((width/2)|0)-((AoU/2)|0);if(((
Br&0x20)===0x20))Dl=Dl+(height-Azq);else if(((Br&0x100)===0x100))Dl=((Dl+((height
/2)|0))-((Azq/2)|0))+(((this.B6.Descent-this.B6.Ascent)/2)|0);else if(((Br&0x10)===
0x10))Dl=(Dl+((height/2)|0))-((Azq/2)|0);FY=(FY+A1a[0])+this.I3;AoU=(AoU+(A1a[2]-
A1a[0]))-Bch;var BX;{var BbM=[A8[0]+FY,A8[1]+Dl];BX=[].concat(BbM,A.aak(BbM,[AoU
,ZW]));}return A.aam(BX,this.Bp);},AA_:function(Ab){if((this.String===A.jm)||!this.
B6)return A.jm;if(!this.HR)this.WV(this);var J4=this.CG.charCodeAt(0)||0;var inx=
1;if((!this.B6||(Ab<0))||(Ab>=J4))return A.jm;while(Ab>0){inx=inx+(this.CG.charCodeAt(
inx)||0);Ab=Ab-1;}var WW=inx;var Asi=inx+(this.CG.charCodeAt(inx)||0);var Il=0x00;
do{WW=WW+1;Il=this.CG.charCodeAt(WW)||0;}while(((Il===0xFEFF)||(Il===0x0A))&&(WW<=
Asi));do{Asi=Asi-1;Il=this.CG.charCodeAt(Asi)||0;}while(((Il===0xFEFF)||(Il===0x0A
))&&(WW<=Asi));var Nx=A.aaY(this.CG,WW,(Asi-WW)+1);var Aoj;for(Aoj=Nx.indexOf(String.
fromCharCode(0xFEFF),0);Aoj>=0;Aoj=Nx.indexOf(String.fromCharCode(0xFEFF),Aoj+1)
){var WH=Aoj+1;while((Nx.charCodeAt(WH)||0)===0xFEFF)WH=WH+1;Nx=A.aa3(Nx,Aoj,WH-
Aoj);}return Nx;},C_:function(){var B;if((this.String===A.jm)||!this.B6)return EV;
if(!this.HR)this.WV(this);if(this.CG===A.jm)return EV;var leading=this.B6.Leading;
var Ay$=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;if(this.Sc>0){leading=(
this.Sc-this.B6.Ascent)-this.B6.Descent;Ay$=this.Sc;}if(A.z8(this.Alr,BH))this.Alr=[
this.B6.A3Y(this.CG),this.Alr[1]];this.Alr=[this.Alr[0],((this.CG.charCodeAt(0)||
0)*Ay$)-leading];var Br=this.J7;var A8=this.M;var AsE=this.I3;var width=A8[2]-A8[
0];var height=A8[3]-A8[1];var C9=[AsE,0,width-AsE,height];var BX=[].concat(C9.slice(
0,2),A.aak(C9.slice(0,2),this.Alr));if(((Br&0x80)===0x80)){if(this.Ajc())Br=(Br&
~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if(((Br&0x40)===0x40)){var WK=this.AbN;if(WK<=
0)WK=width-(this.I3*2);if(WK<0)WK=0;if(WK>(BX[2]-BX[0]))BX=A.aaO(BX,WK);}if((!!(
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
D);},_className:"Views::Text"};C.Ato={attrString:null,AttrSet:null,String:A.jm,J7:
0x12,J_:function(CW,aClip,aOffset,Ce,aBlend){var B;if(!this.attrString||!this.AttrSet
)return;var AD=this.C_();Ce=Ce+1;if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;CW.Bev(
aClip,this.AttrSet,this.attrString,A.aam(this.M,aOffset),A.aaj(this.M.slice(0,2)
,AD.slice(0,2)),(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,(Ce*255)>>8,true);},G:function(
E){var B;if(A.z9(E,this.M))return;if(((((B=this.M)[2]-B[0])!==(E[2]-E[0]))&&!!this.
attrString)&&!((this.U&0x2000)===0x2000)){this.attrString=null;A.ow([this,this.OZ
],this);}A.Core.EC.G.call(this,E);A.ow([this,this.Ah2],this);},Ah2:function(H){}
,WV:function(H){var B;var AJu;AJu=(B=this.M)[2]-B[0];if(AJu<0)AJu=1;if((this.String===
A.jm)||!this.AttrSet)this.attrString=null;if((!this.attrString&&(this.String!==A.
jm))&&!!this.AttrSet)this.attrString=A._NewObject(A.Graphics.A2n,0);if(!!this.attrString
)this.attrString.Bko(this.AttrSet,this.String,AJu,false);if(!!this.Ac&&((this.U&
0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.Ah2],this);},OZ:function(H){A.ow([
this,this.WV],this);},Bcb:function(H){var B;if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.M);},A2:function(E){var B;E&=~0x140;if(E===this.J7)return;this.J7=E;if(
!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);A.ow([this,this.Ah2],this);},
R:function(E){if(this.String===E)return;this.String=E;this.attrString=null;A.ow([
this,this.OZ],this);},A6s:function(E){if(this.AttrSet===E)return;if(!!this.AttrSet
){A.zl([this,this.Bcb],this.AttrSet,0);A.zl([this,this.OZ],this.AttrSet,1);}this.
AttrSet=E;this.attrString=null;if(!!this.AttrSet){A.y_([this,this.Bcb],this.AttrSet
,0);A.y_([this,this.OZ],this.AttrSet,1);}A.ow([this,this.OZ],this);},C_:function(
){var B;if((this.String===A.jm)||!this.AttrSet)return EV;if(!this.attrString)this.
WV(this);if(!this.attrString)return EV;var Br=this.J7;var CZ=this.attrString.Bfr(
);var C9=A.z4(this.M,BH);var BX=[].concat(C9.slice(0,2),A.aak(C9.slice(0,2),CZ));
if(!CZ[0]||!CZ[1])return EV;if(((Br&0x80)===0x80)){if(this.attrString.Ajc())Br=(
Br&~0x80)|0x4;else Br=(Br&~0x80)|0x1;}if((BX[2]-BX[0])!==(C9[2]-C9[0])){if(((Br&
0x4)===0x4))BX=A.aaP(BX,C9[2]-(BX[2]-BX[0]));else if(((Br&0x2)===0x2))BX=A.aaP(BX
,(C9[0]+(((C9[2]-C9[0])/2)|0))-(((BX[2]-BX[0])/2)|0));}if((BX[3]-BX[1])!==(C9[3]-
C9[1])){if(((Br&0x20)===0x20))BX=A.aaR(BX,C9[3]-(BX[3]-BX[1]));else if(((Br&0x10
)===0x10))BX=A.aaR(BX,(C9[1]+(((C9[3]-C9[1])/2)|0))-(((BX[3]-BX[1])/2)|0));}return BX;
},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Ato;this.
U=0x3;},_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.attrString
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::AttrText"};C.Ag8={Fs:null,AhC:0,AhB:0,Um:A.vw,Cf:
A.aan(4,3,0,null),AEL:A.vw,SM:0,Aow:0,KB:function(E){if(A.z8(E,this.Kh))return;A.
Core.YP.KB.call(this,E);this.Cf.Set(3,0,E[0]);this.Cf.Set(3,1,E[1]);this.Cf.Set(
3,2,1);this.SM=0x45;this.Fs=null;A.ow([this,this.ArX],this);},KA:function(E){if(
A.z8(E,this.Mv))return;A.Core.YP.KA.call(this,E);this.Cf.Set(2,0,E[0]);this.Cf.Set(
2,1,E[1]);this.Cf.Set(2,2,1);this.SM=0x45;this.Fs=null;A.ow([this,this.ArX],this
);},DN:function(E){if(A.z8(E,this.Et))return;A.Core.YP.DN.call(this,E);this.Cf.Set(
1,0,E[0]);this.Cf.Set(1,1,E[1]);this.Cf.Set(1,2,1);this.SM=0x45;this.Fs=null;A.ow([
this,this.ArX],this);},D5:function(E){if(A.z8(E,this.Ek))return;A.Core.YP.D5.call(
this,E);this.Cf.Set(0,0,E[0]);this.Cf.Set(0,1,E[1]);this.Cf.Set(0,2,1);this.SM=0x45;
this.Fs=null;A.ow([this,this.ArX],this);},AYO:function(){return;},As7:function(H
){var B;if(this.SM===0x00)return;if(this.SM===0x45){var KR=A._NewObject(A.Graphics.
Awi,0);KR=KR.Bej(this.Cf.Get(0,0),this.Cf.Get(0,1),this.Cf.Get(1,0),this.Cf.Get(
1,1),this.Cf.Get(2,0),this.Cf.Get(2,1),this.Cf.Get(3,0),this.Cf.Get(3,1));if(!!KR
){KR.AAb(0,0);this.Cf.Set(0,2,KR.T_*240);KR.AAb(1,0);this.Cf.Set(1,2,KR.T_*240);
KR.AAb(1,1);this.Cf.Set(2,2,KR.T_*240);KR.AAb(0,1);this.Cf.Set(3,2,KR.T_*240);}this.
AYO();}if((((this.SM===0x4D)&&!!this.Fs)&&!!this.Um[0])&&!!this.Um[1]){var Aie=[
].concat(BH,this.Um);var Aid=this.AEL;var Afh=Aie[0]-Aid[0];var AM=Aie[2]-Aid[0];
var D2=Aie[1]-Aid[1];var Q6=Aie[3]-Aid[1];this.Fs.AjU(Afh,D2);this.Cf.Set(0,0,this.
Fs.T8+this.AhB);this.Cf.Set(0,1,this.Fs.T9+this.AhC);this.Cf.Set(0,2,this.Fs.T_);
this.Fs.AjU(AM,D2);this.Cf.Set(1,0,this.Fs.T8+this.AhB);this.Cf.Set(1,1,this.Fs.
T9+this.AhC);this.Cf.Set(1,2,this.Fs.T_);this.Fs.AjU(AM,Q6);this.Cf.Set(2,0,this.
Fs.T8+this.AhB);this.Cf.Set(2,1,this.Fs.T9+this.AhC);this.Cf.Set(2,2,this.Fs.T_);
this.Fs.AjU(Afh,Q6);this.Cf.Set(3,0,this.Fs.T8+this.AhB);this.Cf.Set(3,1,this.Fs.
T9+this.AhC);this.Cf.Set(3,2,this.Fs.T_);if(!!this.Ac&&((this.U&0x1)===0x1))this.
Ac.Bg(this.GetExtent());this.Ek=[(this.Cf.Get(0,0)+0.5)|0,(this.Cf.Get(0,1)+0.5)|
0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(this.Cf.Get(1,1)+0.5)|0];this.Mv=[(this.Cf.
Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5)|0];this.Kh=[(this.Cf.Get(3,0)+0.5)|0,(this.
Cf.Get(3,1)+0.5)|0];this.AYO();}this.Aow=this.SM;this.SM=0x00;if(!!this.Ac&&((this.
U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},ArX:function(s){this.As7(s);},Bj0:function(
E){if(A.z8(E,this.AEL))return;this.AEL=E;if((this.Aow!==0x45)&&(this.SM===0x00)){
this.SM=this.Aow;A.ow([this,this.ArX],this);}},AFc:function(AG5,KJ){var B;if(!KJ
)throw new Error(Jt);if(!this.Fs)this.Fs=A._NewObject(A.Graphics.Awi,0);this.Fs.
Bdw(KJ);this.AhB=AG5[0];this.AhC=AG5[1];this.Aow=0x4D;this.SM=0x00;if(!this.Um[0
]||!this.Um[1])return;var Aie=[].concat(BH,this.Um);var Aid=this.AEL;var Afh=Aie[
0]-Aid[0];var AM=Aie[2]-Aid[0];var D2=Aie[1]-Aid[1];var Q6=Aie[3]-Aid[1];this.Fs.
AjU(Afh,D2);this.Cf.Set(0,0,this.Fs.T8+this.AhB);this.Cf.Set(0,1,this.Fs.T9+this.
AhC);this.Cf.Set(0,2,this.Fs.T_);this.Fs.AjU(AM,D2);this.Cf.Set(1,0,this.Fs.T8+this.
AhB);this.Cf.Set(1,1,this.Fs.T9+this.AhC);this.Cf.Set(1,2,this.Fs.T_);this.Fs.AjU(
AM,Q6);this.Cf.Set(2,0,this.Fs.T8+this.AhB);this.Cf.Set(2,1,this.Fs.T9+this.AhC);
this.Cf.Set(2,2,this.Fs.T_);this.Fs.AjU(Afh,Q6);this.Cf.Set(3,0,this.Fs.T8+this.
AhB);this.Cf.Set(3,1,this.Fs.T9+this.AhC);this.Cf.Set(3,2,this.Fs.T_);if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());this.Ek=[(this.Cf.Get(0,0)+
0.5)|0,(this.Cf.Get(0,1)+0.5)|0];this.Et=[(this.Cf.Get(1,0)+0.5)|0,(this.Cf.Get(
1,1)+0.5)|0];this.Mv=[(this.Cf.Get(2,0)+0.5)|0,(this.Cf.Get(2,1)+0.5)|0];this.Kh=[(
this.Cf.Get(3,0)+0.5)|0,(this.Cf.Get(3,1)+0.5)|0];if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.GetExtent());this.AYO();},_Init:function(aArg){A.Core.YP._Init.
call(this,aArg);(this.Cf=[]).__proto__=C.Ag8.Cf;this.__proto__=C.Ag8;this.U=0x3;
},_Mark:function(D){var B;A.Core.YP._Mark.call(this,D);if((B=this.Fs)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Views::WarpView"};C.AS1={Fc:null,bitmap:null
,O:null,A$Z:1,A$0:0,A$1:0,A$2:0,A$3:1,A$4:0,A$5:0,A$6:0,A$7:1,GN:255,AIs:false,J_:
function(CW,aClip,aOffset,Ce,aBlend){var B;if(!this.bitmap)return;this.bitmap.Update(
);var Nr=aOffset[0];var Ns=aOffset[1];var AD=[].concat(BH,this.Um);aBlend=aBlend&&((
this.U&0x2)===0x2);Ce=Ce+1;var BaM;var BaN;var BaO;var BaP;var Bv1=this.GN;BaM=BaN=
BaO=BaP=Bv1;var AkE=255|(255<<8)|(255<<16)|((((Ce*BaM)>>8)&0xFF)<<24);var AkF=255|(
255<<8)|(255<<16)|((((Ce*BaN)>>8)&0xFF)<<24);var Buo=255|(255<<8)|(255<<16)|((((
Ce*BaO)>>8)&0xFF)<<24);var Bup=255|(255<<8)|(255<<16)|((((Ce*BaP)>>8)&0xFF)<<24);
aClip=A.z6(aClip,A.aam(EV,aOffset));CW.Ag7(aClip,this.bitmap,0,this.Cf.Get(0,0)+
Nr,this.Cf.Get(0,1)+Ns,this.Cf.Get(0,2),this.Cf.Get(1,0)+Nr,this.Cf.Get(1,1)+Ns,
this.Cf.Get(1,2),this.Cf.Get(2,0)+Nr,this.Cf.Get(2,1)+Ns,this.Cf.Get(2,2),this.Cf.
Get(3,0)+Nr,this.Cf.Get(3,1)+Ns,this.Cf.Get(3,2),AD,AkE,AkF,Buo,Bup,aBlend,true);
},GI:function(CK){if(!this.O||!this.Fc)return null;var BO=(A.Core.Adf.isPrototypeOf(
CK)?CK:null);var DY=(A.Core.Apq.isPrototypeOf(CK)?CK:null);if(!BO&&!DY)return null;
var Ff=BH;var B9=this.Fc.Ac;while(!!B9&&(B9!==this.O)){Ff=A.aaj(Ff,B9.M.slice(0,
2));B9=B9.Ac;}var W=this.Fc;if(!!BO&&!BO.Down)this.Fc=null;if(!!BO){BO.HV=A.aak(
this.Asv(BO.HV),Ff);BO.NJ=A.aak(this.Asv(BO.NJ),Ff);return W.GI(BO);}if(!!DY){var
Bv5=A.aak(this.Asv(A.aaj(DY.HV,DY.Dz)),Ff);DY.HV=A.aak(this.Asv(DY.HV),Ff);DY.NJ=
A.aak(this.Asv(DY.NJ),Ff);DY.Dz=A.aaj(DY.HV,Bv5);return W.GI(DY);}return C.Ag8.GI.
call(this,CK);},Xt:function(Dc,BG,N4,Ab3,Ab8,Ab7){var B;if(!this.O||!((this.O.U&
0x18)===0x18))return null;var pos=A.zT(Dc);pos=this.Asv(pos);var AoY=[].concat(BH
,this.Um);if(!A.vt(AoY,pos))return null;var Jz=this.O.Xt(A.aam(A.aam([0,0,Dc[2]-
Dc[0],Dc[3]-Dc[1]],pos),this.O.M.slice(0,2)),BG,N4,Ab3,null,Ab7);if(!!Jz)this.Fc=
Jz.Cd;else this.Fc=null;if(!!this.Fc)return A._NewObject(A.Core.Atu,0).Initialize(
this,BH);return null;},As7:function(H){C.Ag8.As7.call(this,H);this.AIs=false;},AFc:
function(AG5,KJ){C.Ag8.AFc.call(this,AG5,KJ);this.AIs=false;},Bye:function(){var
x1=this.Cf.Get(0,0);var y1=this.Cf.Get(0,1);var x2=this.Cf.Get(1,0);var y2=this.
Cf.Get(1,1);var x3=this.Cf.Get(2,0);var y3=this.Cf.Get(2,1);var x4=this.Cf.Get(3
,0);var y4=this.Cf.Get(3,1);var AxQ=x2-x3;var AxS=y2-y3;var AxR=x4-x3;var AxT=y4-
y3;var Azm=((x1-x2)+x3)-x4;var Azn=((y1-y2)+y3)-y4;var AnY=(AxQ*AxT)-(AxS*AxR);if(
!AnY)return;var Asn=((Azm*AxT)-(Azn*AxR))/AnY;var BL=((AxQ*Azn)-(AxS*Azm))/AnY;var
a=(x2-x1)+(Asn*x2);var Q6=(x4-x1)+(BL*x4);var BK=x1;var d=(y2-y1)+(Asn*y2);var AH1=(
y4-y1)+(BL*y4);var Lt=y1;this.A$Z=AH1-(Lt*BL);this.A$0=(BK*BL)-Q6;this.A$1=(Q6*Lt
)-(BK*AH1);this.A$2=(Lt*Asn)-d;this.A$3=a-(BK*Asn);this.A$4=(BK*d)-(a*Lt);this.A$5=(
d*BL)-(AH1*Asn);this.A$6=(Q6*Asn)-(a*BL);this.A$7=(a*AH1)-(Q6*d);this.AIs=true;}
,Asv:function(Fo){var B;if(!this.AIs)this.Bye();var A1N=Fo[0];var A1P=Fo[1];var AzG=((
A1N*this.A$Z)+(A1P*this.A$0))+this.A$1;var AzJ=((A1N*this.A$2)+(A1P*this.A$3))+this.
A$4;var A02=((A1N*this.A$5)+(A1P*this.A$6))+this.A$7;if(!!A02){AzG=AzG/A02;AzJ=AzJ
/A02;}var AoY=[].concat(BH,this.Um);AzG=AzG*(AoY[2]-AoY[0]);AzJ=AzJ*(AoY[3]-AoY[
1]);return A.aak([AzG|0,AzJ|0],AoY.slice(0,2));},Re:function(H){var B;var BaQ=this.
Um;if(!!this.O)this.bitmap=this.O.HP;else this.bitmap=null;if(!!this.bitmap)this.
Um=this.bitmap.FrameSize;else this.Um=BH;if(((A.z8(BaQ,this.Um)||((this.Aow===0x45
)&&(this.SM===0x00)))&&!!this.Ac)&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent(
));if(((this.Aow!==0x45)&&(this.SM===0x00))&&!A.z8(BaQ,this.Um)){this.SM=this.Aow;
A.ow([this,this.ArX],this);}},DD:function(E){var B;if(E===this.GN)return;this.GN=
E;if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.GetExtent());},Bi_:function(
E){if(E===this.O)return;if(!!E&&(E===this.Ac))throw new Error(IL);if(!!this.O){A.
zl([this,this.Re],this.O,0);this.bitmap=null;}this.O=E;if(!!E){A.y_([this,this.Re
],E,0);this.bitmap=E.HP;}this.Re(this);},AuP:function(){return this.GN;},_Init:function(
aArg){C.Ag8._Init.call(this,aArg);this.__proto__=C.AS1;},_Mark:function(D){var B;
C.Ag8._Mark.call(this,D);if((B=this.Fc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.bitmap)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Views::WarpGroup"};C.Ado={Hl:null,AP:0xFFFFFFFF,Dz:A.vw
,AMl:false,K3:function(){this.AY7();},J_:function(CW,aClip,aOffset,Ce,aBlend){if(
!this.Hl)return;var Du;var DK;var DF;var DJ;var BK=this.AP;Ce=Ce+1;Du=DK=DF=DJ=BK;
if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&0x00FFFFFF
)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>24)&0xFF
))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<24);}CW.
Ado(aClip,this.Hl,A.aam(this.M,aOffset),this.AMl,this.Dz,Du,DK,DJ,DF,true,true,0
);},AY7:function(){return;},Aij:function(H){var B;if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP)return;this.AP=E;if((
!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},AmM:function(E){
var B;if(A.z8(E,this.Dz))return;this.Dz=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hl)this.Ac.Bg(this.M);},Bi5:function(E){var B;if(E===this.AMl)return;this.
AMl=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},YG:function(
E){var B;if(E===this.Hl)return;if(!!this.Hl)A.zl([this,this.Aij],this.Hl,0);this.
Hl=E;if(!!this.Hl)A.y_([this,this.Aij],this.Hl,0);if(!!this.Ac&&((this.U&0x1)===
0x1))this.Ac.Bg(this.M);},X:function(E){if(E)this.C4(0x1,0x0);else this.C4(0x0,0x1
);},_Init:function(aArg){A.Core.EC._Init.call(this,aArg);this.__proto__=C.Ado;},
_Done:function(){this.K3();this.__proto__=A.Core.EC;A.Core.EC._Done.call(this);}
,_Mark:function(D){var B;A.Core.EC._Mark.call(this,D);if((B=this.Hl)&&(B._cycle!=
D))B._Mark(B._cycle=D);},_className:"Views::FillPath"};C.Ha={Hl:null,AP:0xFFFFFFFF
,Dz:A.vw,Width:1,K3:function(){this.AY7();},J_:function(CW,aClip,aOffset,Ce,aBlend
){if(!this.Hl)return;var Du;var DK;var DF;var DJ;var BK=this.AP;Ce=Ce+1;Du=DK=DF=
DJ=BK;if(Ce<256){Du=(Du&0x00FFFFFF)|((((Ce*((Du>>24)&0xFF))>>8)&0xFF)<<24);DK=(DK&
0x00FFFFFF)|((((Ce*((DK>>24)&0xFF))>>8)&0xFF)<<24);DF=(DF&0x00FFFFFF)|((((Ce*((DF>>
24)&0xFF))>>8)&0xFF)<<24);DJ=(DJ&0x00FFFFFF)|((((Ce*((DJ>>24)&0xFF))>>8)&0xFF)<<
24);}CW.Ha(aClip,this.Hl,A.aam(this.M,aOffset),false,this.Dz,this.Width,0,0,0,3,
Du,DK,DJ,DF,true,true);},AY7:function(){return;},Aij:function(H){var B;if(!!this.
Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},L:function(E){var B;if(E===this.AP
)return;this.AP=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.
M);},AmM:function(E){var B;if(A.z8(E,this.Dz))return;this.Dz=E;if((!!this.Ac&&((
this.U&0x1)===0x1))&&!!this.Hl)this.Ac.Bg(this.M);},NR:function(E){var B;if(E<0)
E=0;if(E===this.Width)return;this.Width=E;if((!!this.Ac&&((this.U&0x1)===0x1))&&
!!this.Hl)this.Ac.Bg(this.M);},YG:function(E){var B;if(E===this.Hl)return;if(!!this.
Hl)A.zl([this,this.Aij],this.Hl,0);this.Hl=E;if(!!this.Hl)A.y_([this,this.Aij],this.
Hl,0);if(!!this.Ac&&((this.U&0x1)===0x1))this.Ac.Bg(this.M);},X:function(E){if(E
)this.C4(0x1,0x0);else this.C4(0x0,0x1);},_Init:function(aArg){A.Core.EC._Init.call(
this,aArg);this.__proto__=C.Ha;},_Done:function(){this.K3();this.__proto__=A.Core.
EC;A.Core.EC._Done.call(this);},_Mark:function(D){var B;A.Core.EC._Mark.call(this
,D);if((B=this.Hl)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::StrokePath"
};C.Bz1={A17:0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20,BBd:0x40,BBe:0x80,BBp:
0x100};C.BBt={A17:0x1,A16:0x2,A18:0x4,A1$:0x8,A1_:0x10,A19:0x20,Byw:0x40,Byv:0x80
,ByB:0x100};C.BAD={Normal:0,BA_:1,BA8:2,BA9:3};
C._Init=function(){C.DU.__proto__=A.Core.Ajo;C.AH.__proto__=A.Core.EC;C.CC.__proto__=
A.Core.EC;C.NI.__proto__=A.Core.EC;C.Ak.__proto__=A.Core.EC;C.Text.__proto__=A.Core.
EC;C.Ato.__proto__=A.Core.EC;C.Ag8.__proto__=A.Core.YP;C.AS1.__proto__=C.Ag8;C.Ado.
__proto__=A.Core.EC;C.Ha.__proto__=A.Core.EC;};C._ReInit=function(){};C.DE=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */