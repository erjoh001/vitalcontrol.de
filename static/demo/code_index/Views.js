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
var B4=[1,1];var BI=[0,0];var EH=[0,0,0,0];var Gv="\uFEFF";var I5="No matrix to perform 3D transformation";
var Iq="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DK={J4:null,AiX:1,AiW:1,AM:0xFFFFFFFF,JJ:function(CL,aClip,aOffset,B6,aBlend){var
B;var Aep=this.AiW;var Aeq=this.AiX;var Abr=A.aak(this.EV,aOffset);var Abs=A.aak(
this.Ev,aOffset);var Ajk;var Ajl;var BF=this.AM;if(A.z8(Abr,Abs))return;aBlend=aBlend&&((
this.S&0x2)===0x2);B6=B6+1;Ajk=Ajl=BF;if(B6<256){Ajk=(Ajk&0x00FFFFFF)|((((B6*((Ajk>>
24)&0xFF))>>8)&0xFF)<<24);Ajl=(Ajl&0x00FFFFFF)|((((B6*((Ajl>>24)&0xFF))>>8)&0xFF
)<<24);}if((Aep===1)&&(Aeq===1))CL.Ar3(aClip,Abr,Abs,Ajk,Ajl,aBlend);else CL.Bbn(
aClip,Abr,Abs,Aep,Aeq,Ajk,Ajl,aBlend);},GetExtent:function(){var Aep=this.AiW;var
Aeq=this.AiX;var Abr=this.EV;var Abs=this.Ev;if(((Aep===1)&&(Aeq===1))||A.z8(Abr
,Abs))return A.Core.Ah5.GetExtent.call(this);var Agv=Aep/2;var Agw=Aeq/2;var AmP=
Abr[0];var AmQ=Abr[1];var AmR=Abs[0];var AmS=Abs[1];var Jx=AmR-AmP;var Jy=AmS-AmQ;
var It=Math.sqrt((Jx*Jx)+(Jy*Jy));Jx=Jx/It;Jy=Jy/It;var A73=AmP+(Jy*Agv);var A74=
AmQ-(Jx*Agv);var AFF=AmR+(Jy*Agw);var AFG=AmS-(Jx*Agw);var AFH=AmR-(Jy*Agw);var AFI=
AmS+(Jx*Agw);var AFJ=AmP-(Jy*Agv);var AFK=AmQ+(Jx*Agv);var left=A73;var right=A73;
var top=A74;var bottom=A74;if(AFF<left)left=AFF;if(AFH<left)left=AFH;if(AFJ<left
)left=AFJ;if(AFF>right)right=AFF;if(AFH>right)right=AFH;if(AFJ>right)right=AFJ;if(
AFG<top)top=AFG;if(AFI<top)top=AFI;if(AFK<top)top=AFK;if(AFG>bottom)bottom=AFG;if(
AFI>bottom)bottom=AFI;if(AFK>bottom)bottom=AFK;var AL=[left|0,top|0,right|0,bottom|
0];AL=[].concat(AL.slice(0,2),A.aak(AL.slice(2,4),B4));return AL;},QB:function(H
){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());},BgX:function(
E){var B;if(E<1)E=1;if(E===this.AiX)return;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());this.AiX=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());if(((E!==1)||(this.AiW!==1))&&!this.J4){this.J4=A.zW(A.abj.Ap0
);if(this.J4.N0)A.y_([this,this.QB],this.J4,0);}if(((E===1)&&(this.AiW===1))&&!!
this.J4){if(this.J4.N0)A.zl([this,this.QB],this.J4,0);this.J4=null;}},BgW:function(
E){var B;if(E<1)E=1;if(E===this.AiW)return;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());this.AiW=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());if(((E!==1)||(this.AiX!==1))&&!this.J4){this.J4=A.zW(A.abj.Ap0
);if(this.J4.N0)A.y_([this,this.QB],this.J4,0);}if(((E===1)&&(this.AiX===1))&&!!
this.J4){if(this.J4.N0)A.zl([this,this.QB],this.J4,0);this.J4=null;}},N7:function(
E){var B;if(E<1)E=1;if((E===this.AiW)&&(E===this.AiX))return;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.AiW=E;this.AiX=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((E!==1)&&!this.J4){this.J4=A.
zW(A.abj.Ap0);if(this.J4.N0)A.y_([this,this.QB],this.J4,0);}if((E===1)&&!!this.J4
){if(this.J4.N0)A.zl([this,this.QB],this.J4,0);this.J4=null;}},L:function(E){var
B;if(E===this.AM)return;this.AM=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());},Aj:function(E){if(E)this.CS(0x400,0x0);else this.CS(0x0,0x400
);},Fe:function(){var B;return((this.S&0x1)===0x1);},W:function(E){if(E)this.CS(
0x1,0x0);else this.CS(0x0,0x1);},_Init:function(aArg){A.Core.Ah5._Init.call(this
,aArg);this.__proto__=C.DK;},_Mark:function(D){var B;A.Core.Ah5._Mark.call(this,
D);if((B=this.J4)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Line"};
C.AH={AI6:0xFFFFFFFF,AI7:0xFFFFFFFF,AI$:0xFFFFFFFF,AI_:0xFFFFFFFF,AM:0xFFFFFFFF,
JJ:function(CL,aClip,aOffset,B6,aBlend){var B;var Dl=this.AI_;var Du=this.AI$;var
Dr=this.AI6;var Dt=this.AI7;var BF=this.AM;aBlend=aBlend&&((this.S&0x2)===0x2);B6=
B6+1;if((((Dl===Du)&&(Dr===Dt))&&(Dl===Dr))&&(Dl===0xFFFFFFFF))Dl=Du=Dr=Dt=BF;else
if(BF!==0xFFFFFFFF){Dl=(Dl&0x00FFFFFF)|((((((Dl>>24)&0xFF)*(((BF>>24)&0xFF)+1))>>
8)&0xFF)<<24);Dl=(Dl&0xFFFFFF00)|((((Dl&0xFF)*((BF&0xFF)+1))>>8)&0xFF);Dl=(Dl&0xFFFF00FF
)|((((((Dl>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8)&0xFF)<<8);Dl=(Dl&0xFF00FFFF)|((((((
Dl>>16)&0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF)<<16);Du=(Du&0x00FFFFFF)|((((((Du>>24
)&0xFF)*(((BF>>24)&0xFF)+1))>>8)&0xFF)<<24);Du=(Du&0xFFFFFF00)|((((Du&0xFF)*((BF&
0xFF)+1))>>8)&0xFF);Du=(Du&0xFFFF00FF)|((((((Du>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8
)&0xFF)<<8);Du=(Du&0xFF00FFFF)|((((((Du>>16)&0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF
)<<16);Dr=(Dr&0x00FFFFFF)|((((((Dr>>24)&0xFF)*(((BF>>24)&0xFF)+1))>>8)&0xFF)<<24
);Dr=(Dr&0xFFFFFF00)|((((Dr&0xFF)*((BF&0xFF)+1))>>8)&0xFF);Dr=(Dr&0xFFFF00FF)|((((((
Dr>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8)&0xFF)<<8);Dr=(Dr&0xFF00FFFF)|((((((Dr>>16)&
0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF)<<16);Dt=(Dt&0x00FFFFFF)|((((((Dt>>24)&0xFF)
*(((BF>>24)&0xFF)+1))>>8)&0xFF)<<24);Dt=(Dt&0xFFFFFF00)|((((Dt&0xFF)*((BF&0xFF)+
1))>>8)&0xFF);Dt=(Dt&0xFFFF00FF)|((((((Dt>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dt=(Dt&0xFF00FFFF)|((((((Dt>>16)&0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(B6<256){Dl=(Dl&0x00FFFFFF)|((((B6*((Dl>>24)&0xFF))>>8)&0xFF)<<24);Du=(Du&0x00FFFFFF
)|((((B6*((Du>>24)&0xFF))>>8)&0xFF)<<24);Dr=(Dr&0x00FFFFFF)|((((B6*((Dr>>24)&0xFF
))>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF)|((((B6*((Dt>>24)&0xFF))>>8)&0xFF)<<24);}CL.
Asf(aClip,A.aam(this.M,aOffset),Dl,Du,Dt,Dr,aBlend);},Atk:function(E){var B;if(E===
this.AI6)return;this.AI6=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);
},Atl:function(E){var B;if(E===this.AI7)return;this.AI7=E;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.M);},Atn:function(E){var B;if(E===this.AI$)return;this.
AI$=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},Atm:function(E){var
B;if(E===this.AI_)return;this.AI_=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.M);},L:function(E){var B;if(E===this.AM)return;this.AM=E;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.M);},Fe:function(){var B;return((this.S&0x1)===0x1
);},W:function(E){if(E)this.CS(0x1,0x0);else this.CS(0x0,0x1);},_Init:function(aArg
){A.Core.Em._Init.call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"
};C.CT={Width:1,AM:0xFFFFFFFF,JJ:function(CL,aClip,aOffset,B6,aBlend){var B;var Dl;
var Du;var Dr;var Dt;var BF=this.AM;aBlend=aBlend&&((this.S&0x2)===0x2);B6=B6+1;
Dl=Du=Dr=Dt=BF;if(B6<256){Dl=(Dl&0x00FFFFFF)|((((B6*((Dl>>24)&0xFF))>>8)&0xFF)<<
24);Du=(Du&0x00FFFFFF)|((((B6*((Du>>24)&0xFF))>>8)&0xFF)<<24);Dr=(Dr&0x00FFFFFF)|((((
B6*((Dr>>24)&0xFF))>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF)|((((B6*((Dt>>24)&0xFF))>>8
)&0xFF)<<24);}CL.Bbl(aClip,A.aam(this.M,aOffset),this.Width,Dl,Du,Dt,Dr,aBlend);
},N7:function(E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.
Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},L:function(E){var B;if(E===this.AM
)return;this.AM=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},W:function(
E){if(E)this.CS(0x1,0x0);else this.CS(0x0,0x1);},_Init:function(aArg){A.Core.Em.
_Init.call(this,aArg);this.__proto__=C.CT;},_className:"Views::Border"};C.M2={timer:
null,Ai:null,L6:-1,AM:0xFFFFFFFF,Ar4:0x1F,Sv:0,Df:0,Ak_:A.vw,T0:false,JJ:function(
CL,aClip,aOffset,B6,aBlend){var B;var MJ=this.Sv;if(this.L6>=0)MJ=this.L6;if(!this.
Ai||(MJ>=this.Ai.NoOfFrames))return;this.Ai.Update();var Dl;var Du;var Dt;var Dr;
var BF=this.AM;var JF=(((B6+1)*255)>>8)+1;var ND=this.Ar4;var AL=A.aam(this.M,aOffset
);var AG1=A.aaj([AL[2]-AL[0],AL[3]-AL[1]],this.Ak_);aBlend=aBlend&&((this.S&0x2)===
0x2);Dl=Du=Dr=Dt=BF;if(JF<256){Dl=(Dl&0x00FFFFFF)|((((((Dl>>24)&0xFF)*JF)>>8)&0xFF
)<<24);Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*JF)>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF
)|((((((Dt>>24)&0xFF)*JF)>>8)&0xFF)<<24);Dr=(Dr&0x00FFFFFF)|((((((Dr>>24)&0xFF)*
JF)>>8)&0xFF)<<24);}if(((this.Ak_[0]>0)&&(AG1[0]>0))&&!((ND&0x5)===0x5)){var d=((
this.Ai.FrameSize[0]/3)|0)-AG1[0];if(((ND&0x1)===0x1)){if(aClip[2]>AL[2])aClip=A.
aaQ(aClip,AL[2]);if(d>0)AL=A.aaQ(AL,AL[2]+d);ND=ND|0x4;}else if(((ND&0x4)===0x4)
){if(aClip[0]<AL[0])aClip=[].concat(AL[0],aClip.slice(1,4));if(d>0)AL=[].concat(
AL[0]-d,AL.slice(1,4));ND=ND|0x1;}else{if(aClip[0]<AL[0])aClip=[].concat(AL[0],aClip.
slice(1,4));if(aClip[2]>AL[2])aClip=A.aaQ(aClip,AL[2]);if(d>0){AL=[].concat(AL[0
]-((d/2)|0),AL.slice(1,4));AL=A.aaQ(AL,(AL[2]+d)-((d/2)|0));}ND=ND|0x5;}}if(((this.
Ak_[1]>0)&&(AG1[1]>0))&&!((ND&0xA)===0xA)){var d=((this.Ai.FrameSize[1]/3)|0)-AG1[
1];if(((ND&0x2)===0x2)){if(aClip[3]>AL[3])aClip=[].concat(aClip.slice(0,3),AL[3]
);if(d>0)AL=[].concat(AL.slice(0,3),AL[3]+d);ND=ND|0x8;}else if(((ND&0x8)===0x8)
){if(aClip[1]<AL[1])aClip=A.aaS(aClip,AL[1]);if(d>0)AL=A.aaS(AL,AL[1]-d);ND=ND|0x2;
}else{if(aClip[1]<AL[1])aClip=A.aaS(aClip,AL[1]);if(aClip[3]>AL[3])aClip=[].concat(
aClip.slice(0,3),AL[3]);if(d>0){AL=A.aaS(AL,AL[1]-((d/2)|0));AL=[].concat(AL.slice(
0,3),(AL[3]+d)-((d/2)|0));}ND=ND|0xA;}}CL.Bbk(aClip,this.Ai,MJ,AL,ND,Dl,Du,Dt,Dr
,aBlend);},QB:function(H){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.
M);},Lz:function(H){var B;var MJ=this.L6;var R_=0;if(!!this.Ai)R_=this.Ai.NoOfFrames
*this.Ai.FrameDelay;if((!!this.timer&&(this.L6<0))&&(R_>0))this.Df=this.timer.Bp-(
this.Sv*this.Ai.FrameDelay);if(!!this.timer&&(R_>0)){var Ap=(this.timer.Bp-this.
Df)|0;MJ=(Ap/this.Ai.FrameDelay)|0;if(Ap>=R_){MJ=MJ%this.Ai.NoOfFrames;this.Df=this.
timer.Bp-(Ap%R_);}}if(((MJ!==this.L6)&&!!this.Aa)&&((this.S&0x1)===0x1))this.Aa.
Bc(this.M);this.L6=MJ;if(!R_&&!!this.timer){A.zl([this,this.Lz],this.timer,0);this.
timer=null;}},L:function(E){var B;if(E===this.AM)return;this.AM=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},XD:function(E){var B;if(this.T0===E)return;
this.T0=E;this.L6=-1;if(!E&&!!this.timer){A.zl([this,this.Lz],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(A.abm.AeU);A.y_([this,this.Lz],this.
timer,0);A.ow([this,this.Lz],this);}if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.M);},A3G:function(E){var B;if(E===this.Ar4)return;this.Ar4=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},Ce:function(E){var B;if(E<0)E=0;if((E===
this.Sv)&&(this.L6===-1))return;this.Sv=E;if(!this.timer)this.L6=-1;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},At:function(E){var B;if(E===this.Ai)return;
if(!!this.Ai&&this.Ai.N0)A.zl([this,this.QB],this.Ai,0);this.Ai=E;this.L6=-1;if(
!!E&&E.N0)A.y_([this,this.QB],E,0);if(this.T0){this.XD(false);this.XD(true);}if(
!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},W:function(E){if(E)this.CS(
0x1,0x0);else this.CS(0x0,0x1);},A3U:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[
1]<0)E=[E[0],0];if(A.z8(E,this.Ak_))return;this.Ak_=E;if((!!this.Aa&&((this.S&0x1
)===0x1))&&!((this.Ar4&0xF)===0xF))this.Aa.Bc(this.M);},_Init:function(aArg){A.Core.
Em._Init.call(this,aArg);this.__proto__=C.M2;},_Mark:function(D){var B;A.Core.Em.
_Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ai)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Frame"};C.Am={timer:
null,Ai:null,Df:0,L6:0,AM:0xFFFFFFFF,JH:0x12,Sv:0,Gq:255,T0:false,Y9:false,JJ:function(
CL,aClip,aOffset,B6,aBlend){var B;var MJ=this.Sv;if(this.L6>=0)MJ=this.L6;if(!this.
Ai||(MJ>=this.Ai.NoOfFrames))return;this.Ai.Update();var Ay=this.Dh();var CW=this.
Ai.FrameSize;if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return;var Dl;var Du;var Dt;var Dr;
var BF=this.AM;var JF=(((B6+1)*this.Gq)>>8)+1;aBlend=aBlend&&((this.S&0x2)===0x2
);Dl=Du=Dr=Dt=BF;if(JF<256){Dl=(Dl&0x00FFFFFF)|((((((Dl>>24)&0xFF)*JF)>>8)&0xFF)<<
24);Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*JF)>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF)|((((((
Dt>>24)&0xFF)*JF)>>8)&0xFF)<<24);Dr=(Dr&0x00FFFFFF)|((((((Dr>>24)&0xFF)*JF)>>8)&
0xFF)<<24);}if(A.z8([Ay[2]-Ay[0],Ay[3]-Ay[1]],CW))CL.AZ4(aClip,this.Ai,MJ,A.aam(
this.M,aOffset),A.aaj(this.M.slice(0,2),Ay.slice(0,2)),Dl,Du,Dt,Dr,aBlend);else CL.
BhM(aClip,this.Ai,MJ,A.aam(Ay,aOffset),[].concat(BI,CW),Dl,Du,Dt,Dr,aBlend,true);
},QB:function(H){var B;if(((this.Y9&&!!this.Ai)&&(this.Ai.FrameSize[0]>0))&&(this.
Ai.FrameSize[1]>0))this.G(this.Dh());if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.
Bc(this.M);},Lz:function(H){var B;var MJ=this.L6;var R_=0;if(!!this.Ai)R_=this.Ai.
NoOfFrames*this.Ai.FrameDelay;if((!!this.timer&&(this.L6<0))&&(R_>0))this.Df=this.
timer.Bp-(this.Sv*this.Ai.FrameDelay);if(!!this.timer&&(R_>0)){var Ap=(this.timer.
Bp-this.Df)|0;MJ=(Ap/this.Ai.FrameDelay)|0;if(Ap>=R_){MJ=MJ%this.Ai.NoOfFrames;this.
Df=this.timer.Bp-(Ap%R_);}}if(((MJ!==this.L6)&&!!this.Aa)&&((this.S&0x1)===0x1))
this.Aa.Bc(this.M);this.L6=MJ;if(!R_&&!!this.timer){A.zl([this,this.Lz],this.timer
,0);this.timer=null;}},I0:function(E){if(E===this.Y9)return;this.Y9=E;if(((E&&!!
this.Ai)&&(this.Ai.FrameSize[0]>0))&&(this.Ai.FrameSize[1]>0))this.G(this.Dh());
},L:function(E){var B;if(E===this.AM)return;this.AM=E;if(!!this.Aa&&((this.S&0x1
)===0x1))this.Aa.Bc(this.M);},XD:function(E){var B;if(this.T0===E)return;this.T0=
E;this.L6=-1;if(!E&&!!this.timer){A.zl([this,this.Lz],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.AeU);A.y_([this,this.Lz],this.timer,0);
A.ow([this,this.Lz],this);}if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);
},A0:function(E){var B;if(E===this.JH)return;this.JH=E;if(!!this.Aa&&((this.S&0x1
)===0x1))this.Aa.Bc(this.M);},Ce:function(E){var B;if(E<0)E=0;if((E===this.Sv)&&(
this.L6===-1))return;this.Sv=E;if(!this.timer)this.L6=-1;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.M);},At:function(E){var B;if(E===this.Ai)return;if(!
!this.Ai&&this.Ai.N0)A.zl([this,this.QB],this.Ai,0);this.Ai=E;this.L6=-1;if(!!E&&
E.N0)A.y_([this,this.QB],E,0);if(this.T0){this.XD(false);this.XD(true);}if(((this.
Y9&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.G(this.Dh());if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},DF:function(E){var B;if(E>255)E=255;if(E<
0)E=0;if(E===this.Gq)return;this.Gq=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.
Bc(this.M);},Aj:function(E){if(E)this.CS(0x400,0x0);else this.CS(0x0,0x400);},Fe:
function(){var B;return((this.S&0x1)===0x1);},W:function(E){if(E)this.CS(0x1,0x0
);else this.CS(0x0,0x1);},Dh:function(){var B;if(!this.Ai)return EH;var Bm=this.
JH;var CW=this.Ai.FrameSize;var Ba=this.M;var width=Ba[2]-Ba[0];var height=Ba[3]-
Ba[1];if(!CW[0]||!CW[1])return EH;var CV=[0,0,width,height];var BQ=CV;if(((Bm&0x40
)===0x40)){var AYh=((((CV[2]-CV[0])<<16)+((CW[0]/2)|0))/CW[0])|0;var AxB=((((CV[
3]-CV[1])<<16)+((CW[1]/2)|0))/CW[1])|0;var AgR=AYh;if(AxB>AgR)AgR=AxB;BQ=A.aaO(BQ
,((CW[0]*AgR)+32768)>>16);BQ=A.aaL(BQ,((CW[1]*AgR)+32768)>>16);}else if(((Bm&0x80
)===0x80)){var AYh=((((CV[2]-CV[0])<<16)+((CW[0]/2)|0))/CW[0])|0;var AxB=((((CV[
3]-CV[1])<<16)+((CW[1]/2)|0))/CW[1])|0;var AgR=AYh;if(AxB<AgR)AgR=AxB;BQ=A.aaO(BQ
,((CW[0]*AgR)+32768)>>16);BQ=A.aaL(BQ,((CW[1]*AgR)+32768)>>16);}else if(!((Bm&0x100
)===0x100))BQ=A.aaN(BQ,CW);if((BQ[2]-BQ[0])!==(CV[2]-CV[0])){if(((Bm&0x4)===0x4)
)BQ=A.aaP(BQ,CV[2]-(BQ[2]-BQ[0]));else if(((Bm&0x2)===0x2))BQ=A.aaP(BQ,(CV[0]+(((
CV[2]-CV[0])/2)|0))-(((BQ[2]-BQ[0])/2)|0));}if((BQ[3]-BQ[1])!==(CV[3]-CV[1])){if(((
Bm&0x20)===0x20))BQ=A.aaR(BQ,CV[3]-(BQ[3]-BQ[1]));else if(((Bm&0x10)===0x10))BQ=
A.aaR(BQ,(CV[1]+(((CV[3]-CV[1])/2)|0))-(((BQ[3]-BQ[1])/2)|0));}BQ=A.aam(BQ,Ba.slice(
0,2));return BQ;},BdY:function(){return this.AM;},ANX:function(){return this.Sv;
},_Init:function(aArg){A.Core.Em._Init.call(this,aArg);this.__proto__=C.Am;},_Mark:
function(D){var B;A.Core.Em._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ai)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Views::Image"};C.Text={Cp:null,Eu:null,Ct:A.jm,String:A.jm,NA:null,Akb:A.vw,IH:
0,RA:0,AaJ:0,Br:A.vw,JH:0x12,AM:0xFFFFFFFF,AdF:false,Y9:false,WD:false,AJT:false
,Hn:false,Kz:function(){if(!!this.NA){this.AWG(this.NA);this.NA=null;}},JJ:function(
CL,aClip,aOffset,B6,aBlend){var B;if((this.Ct===A.jm)||!this.Cp)return;var Bm=this.
JH;var font=this.Cp;var CV=A.aam(this.M,aOffset);var Dl;var Du;var Dt;var Dr;var
col=this.AM;var JF=(((B6+1)*255)>>8)+1;var JD=this.Ct.charCodeAt(0)||0;var Ay=A.
aam(this.Dh(),aOffset);var Bj=[CV[0]-Ay[0],(CV[1]-Ay[1])-font.Ascent];if(JD<1)return;
Dl=Du=Dr=Dt=col;if(JF<256){Dl=(Dl&0x00FFFFFF)|((((((Dl>>24)&0xFF)*JF)>>8)&0xFF)<<
24);Du=(Du&0x00FFFFFF)|((((((Du>>24)&0xFF)*JF)>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF)|((((((
Dt>>24)&0xFF)*JF)>>8)&0xFF)<<24);Dr=(Dr&0x00FFFFFF)|((((((Dr>>24)&0xFF)*JF)>>8)&
0xFF)<<24);}if(((Bm&0x80)===0x80)){if(this.AhT())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~
0x80)|0x1;}if((JD===1)&&!((Bm&0x40)===0x40)){CL.A0u(aClip,font,this.Ct,2,(this.Ct.
charCodeAt(1)||0)-1,CV,Bj,0,0,Dl,Du,Dt,Dr,true);return;}var leading=font.Leading;
if(this.RA>0)leading=(this.RA-font.Ascent)-font.Descent;var Aj6=(font.Ascent+font.
Descent)+leading;var Brg=aClip[1]-Ay[1];var Brh=aClip[3]-Ay[1];var AVV=Ay[2]-Ay[
0];var C9=0;var P=1;var BF=this.Ct.charCodeAt(1)||0;while(((C9+Aj6)<Brg)&&(BF>0)
){P=P+BF;C9=C9+Aj6;BF=this.Ct.charCodeAt(P)||0;}while((C9<Brh)&&(BF>0)){var Lt=A.
aaj(Bj,[0,C9]);var Aj7=0;var Oo=false;if(((((Bm&0x40)===0x40)&&((this.Ct.charCodeAt((
P+BF)-1)||0)!==0x0A))&&((this.Ct.charCodeAt(P+1)||0)!==0x0A))&&((this.Ct.charCodeAt(
P+BF)||0)!==0x00))Oo=true;if(Oo&&!!(Bm&0x6)){var Anr=P+BF;var AvW=this.Ct.indexOf(
String.fromCharCode(0x20),P+1);var AvX=this.Ct.indexOf(String.fromCharCode(0xA0)
,P+1);if(((AvW<0)||(AvW>=Anr))&&((AvX<0)||(AvX>=Anr)))Oo=false;}if(Oo)Aj7=AVV;else
if(((Bm&0x4)===0x4))Lt=[(Lt[0]-AVV)+font.WM(this.Ct,P+1,BF-1),Lt[1]];else if(((Bm&
0x2)===0x2))Lt=[(Lt[0]-((AVV/2)|0))+((font.WM(this.Ct,P+1,BF-1)/2)|0),Lt[1]];CL.
A0u(aClip,font,this.Ct,P+1,BF-1,CV,Lt,Aj7,0,Dl,Du,Dt,Dr,true);P=P+BF;C9=C9+Aj6;BF=
this.Ct.charCodeAt(P)||0;}},G:function(E){var B;if(A.z9(E,this.M))return;var A_7;
A_7=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((A_7&&!this.AaJ)&&this.AdF)&&this.Hn
)&&!((this.S&0x2000)===0x2000)){this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or],this
);}if(((this.WD&&this.Hn)&&!A.z8([(B=this.M)[2]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-
E[1]]))&&!((this.S&0x2000)===0x2000)){this.Ct=A.jm;this.Hn=false;A.ow([this,this.
Or],this);}A.Core.Em.G.call(this,E);A.ow([this,this.AgM],this);},Bq_:function(aBidi
,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.ze(aBidi,aRowStart,aRowEnd
,aIndex);return aIndex;},Bq9:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)
return aIndex;aIndex=A.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},AWG:function(
aBidi){if(!aBidi)return;A.qU(aBidi);},Brt:function(aSize){var bidi=null;bidi=A.vj(
aSize);return bidi;},AgM:function(H){A.ow(this.Eu,this);},Or:function(H){A.ow([this
,this.V1],this);},V1:function(H){var B;if(this.Hn)return;var width=(B=this.M)[2]-
B[0];var height=(B=this.M)[3]-B[1];var VT=-1;var font=this.Cp;if((!!font&&!!!font.
Ascent)&&!!!font.Descent)font=null;if(this.AdF){if(this.AaJ>0)VT=this.AaJ;else if(
!this.Y9)VT=width-(this.IH*2);else VT=width;if(VT<0)VT=1;}if(!!this.NA){this.AWG(
this.NA);this.NA=null;}this.Hn=true;if((this.String!==A.jm)&&!!font){var length=
this.String.length;if(this.AJT)this.NA=this.Brt(length);this.Ct=font.Bhb(this.String
,0,VT,length,this.NA);if(!!this.NA&&!this.Bcz()){this.AWG(this.NA);this.NA=null;
}}else this.Ct=A.jm;this.Akb=BI;if(((this.WD&&(this.Ct!==A.jm))&&!this.Y9)&&!!font
){var Bm=this.JH;var leading=font.Leading;var H6=this.Ct;var AGZ=this.AhT();if(((
Bm&0x80)===0x80)){if(AGZ)Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(this.RA>0)
leading=(this.RA-font.Ascent)-font.Descent;var Axw=(font.Ascent+font.Descent)+leading;
var JD=H6.charCodeAt(0)||0;var AjK=((height+leading)/Axw)|0;var AV_=false;var AFM=
false;if(AjK<=0)AjK=1;if(JD>AjK){var A5=0;var Axx=0;var AGX=JD-1;var Km;var MK=H6.
length;var tmp=A.jm;if(!!(Bm&0x110)&&!!(Bm&0x28))Bm&=~0x110;if(!!(Bm&0x110))Bm&=
~0x28;if(((Bm&0x20)===0x20))Axx=JD-AjK;else if(((Bm&0x10)===0x10)||((Bm&0x100)===
0x100)){Axx=((JD-AjK)/2)|0;AGX=(Axx+AjK)-1;}else AGX=AjK-1;AV_=Axx>0;AFM=AGX<(JD-
1);for(Km=1;A5<Axx;A5=A5+1)Km=Km+(H6.charCodeAt(Km)||0);if(AFM)for(MK=Km;A5<AGX;
A5=A5+1)MK=MK+(H6.charCodeAt(MK)||0);if(AV_){var It=H6.charCodeAt(Km)||0;tmp=(Gv+
A.aaY(H6,Km,It))+Gv;tmp=A.aaT(tmp,0,(It+2)&0xFFFF);Km=Km+It;if((tmp.charCodeAt(It
)||0)===0x0A){tmp=A.aaT(tmp,It,0xFEFF);tmp=A.aaT(tmp,It+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(tmp,1,0x0A);}else tmp=A.aaT(tmp
,1,0xFEFF);}tmp=tmp+A.aaY(H6,Km,MK-Km);if(AFM&&(MK>=Km)){var It=H6.charCodeAt(MK
)||0;var Py=(Gv+A.aaY(H6,MK,It))+Gv;Py=A.aaT(Py,0,(It+2)&0xFFFF);Py=A.aaT(Py,1,0xFEFF
);if((Py.charCodeAt(It)||0)===0x0A){Py=A.aaT(Py,It,0xFEFF);Py=A.aaT(Py,It+1,0x0A
);}if((Py.charCodeAt(2)||0)===0x0A){Py=A.aaT(Py,2,0xFEFF);Py=A.aaT(Py,1,0x0A);}else
Py=A.aaT(Py,1,0xFEFF);tmp=tmp+Py;}H6=String.fromCharCode(AjK&0xFFFF)+tmp;}var A5=
0;var inx=1;var AGx=width-(this.IH*2);if(this.AdF&&(this.AaJ>0))AGx=this.AaJ;JD=
H6.charCodeAt(0)||0;for(;A5<JD;A5=A5+1){var Aj4=AV_&&!A5;var Aj5=AFM&&(A5===(JD-
1));var VI=false;var VJ=false;var Arj=AGZ;if((AGZ&&Aj4)&&!Aj5){Aj4=false;Aj5=true;
}else if((AGZ&&Aj5)&&!Aj4){Aj5=false;Aj4=true;}var V2=inx+1;var It=H6.charCodeAt(
inx)||0;var Km=V2;var MK=(V2+It)-2;var AWW=-1;var AWX=-1;if(!this.AdF&&(font.WM(
H6,V2,It-1)>AGx)){var Amq=Bm;if(((Amq&0x2)===0x2)&&!!(Amq&0x5))Amq&=~0x2;if(((Amq&
0x2)===0x2))Amq&=~0x5;if(((Amq&0x4)===0x4))VI=true;else if(((Amq&0x2)===0x2)){VI=
true;VJ=true;}else VJ=true;}if((H6.charCodeAt(Km)||0)===0x0A)Km=Km+1;if((H6.charCodeAt(
MK)||0)===0x0A)MK=MK-1;while(VI&&((H6.charCodeAt(Km)||0)===0xFEFF))Km=Km+1;while(
VJ&&((H6.charCodeAt(MK)||0)===0xFEFF))MK=MK-1;VI=VI&&!Aj5;VJ=VJ&&!Aj4;while((((VI||
VJ)||Aj4)||Aj5)&&(Km<MK)){if((VI&&(Arj||!VJ))||Aj4){if(AWW>0)H6=A.aaT(H6,AWW,0xFEFF
);H6=A.aaT(H6,Km,0x2026);AWW=Km;Km=Km+1;Arj=!Arj;Aj4=false;if(font.WM(H6,V2,It-1
)<=AGx){VI=false;VJ=false;}else VI=VI||!VJ;}if((VJ&&(!Arj||!VI))||Aj5){if(AWX>0)
H6=A.aaT(H6,AWX,0xFEFF);H6=A.aaT(H6,MK,0x2026);AWX=MK;MK=MK-1;Arj=!Arj;Aj5=false;
if(font.WM(H6,V2,It-1)<=AGx){VI=false;VJ=false;}else VJ=VJ||!VI;}}inx=inx+It;}this.
Akb=[font.A0X(H6),((H6.charCodeAt(0)||0)*Axw)-leading];this.Ct=H6;}if(this.Y9&&(
this.Ct!==A.jm)){var Aq7=[this.IH,0];this.S=this.S|0x2000;this.G(A.aal(A.z4(this.
Dh(),Aq7),this.Br));this.S=this.S&~0x2000;}if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.M);A.ow([this,this.AgM],this);},Bfr:function(E){if(E===this.AJT)return;
this.AJT=E;this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or],this);},HV:function(E){
if(E<0)E=0;if(this.IH===E)return;this.IH=E;this.Ct=A.jm;this.Hn=false;A.ow([this
,this.Or],this);},BgF:function(E){var B;if(E<0)E=0;if(this.RA===E)return;this.RA=
E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);if(this.WD){this.Ct=A.jm;
this.Hn=false;A.ow([this,this.Or],this);}if(this.Y9&&this.Hn)this.G(A.aal(this.Dh(
),this.Br));if(this.Hn)A.ow([this,this.AgM],this);},Bfq:function(E){if(E===this.
WD)return;this.WD=E;if(((this.AdF&&!!!this.AaJ)||E)||!!this.Eu)this.S=this.S&~0x100;
else this.S=this.S|0x100;this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or],this);},
Rs:function(E){if(A.z$(E,this.Eu))return;this.Eu=E;if(((!!!this.AaJ&&this.AdF)||
!!E)||this.WD)this.S=this.S&~0x100;else this.S=this.S|0x100;},I0:function(E){if(
E===this.Y9)return;this.Y9=E;if(E&&this.WD){this.Ct=A.jm;this.Hn=false;A.ow([this
,this.Or],this);}if(E&&this.Hn){var Aq7=[this.IH,0];this.S=this.S|0x2000;this.G(
A.aal(A.z4(this.Dh(),Aq7),this.Br));this.S=this.S&~0x2000;}},BgY:function(E){if(
E<0)E=0;if(E===this.AaJ)return;this.AaJ=E;if(this.AdF&&this.Hn){this.Ct=A.jm;this.
Hn=false;A.ow([this,this.Or],this);}if(((!!!E&&this.AdF)||this.WD)||!!this.Eu)this.
S=this.S&~0x100;else this.S=this.S|0x100;},KH:function(E){if(E===this.AdF)return;
this.AdF=E;if(this.Hn){this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or],this);}if(((
E&&!!!this.AaJ)||this.WD)||!!this.Eu)this.S=this.S&~0x100;else this.S=this.S|0x100;
},Go:function(E){var B;if(A.z8(E,this.Br))return;this.Br=E;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.M);if(this.Hn)A.ow([this,this.AgM],this);},A0:function(
E){var B;if(E===this.JH)return;this.JH=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.M);if(this.WD){this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or],this);}
if(this.Hn)A.ow([this,this.AgM],this);},R:function(E){if(E===this.String)return;
this.String=E;this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or],this);},Y:function(
E){if(E===this.Cp)return;this.Cp=E;this.Ct=A.jm;this.Hn=false;A.ow([this,this.Or
],this);},L:function(E){var B;if(E===this.AM)return;this.AM=E;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.M);},Aj:function(E){if(E)this.CS(0x400,0x0);else this.
CS(0x0,0x400);},Fe:function(){var B;return((this.S&0x1)===0x1);},W:function(E){if(
E)this.CS(0x1,0x0);else this.CS(0x0,0x1);},AhT:function(){if(!this.Hn)this.V1(this
);if(!this.NA)return false;var result=false;var bidi=this.NA;result=A.vi(bidi);return result;
},Bcz:function(){if(!this.Hn)this.V1(this);if(!this.NA)return false;var result=false;
var bidi=this.NA;result=A.zc(bidi);return result;},A5a:function(aIndex){if(((this.
String===A.jm)||!this.Cp)||this.WD)return BI;if(!this.Hn)this.V1(this);if(aIndex<
0)aIndex=0;var BsC=(this.Ct.charCodeAt(0)||0)-1;var Ly=this.Ct.charCodeAt(1)||0;
var inx=1;var AgV=2;var A5=0;var col=-1;var DZ=true;aIndex=aIndex+2;while((A5<BsC
)&&((inx+Ly)<=aIndex)){inx=inx+Ly;A5=A5+1;AgV=AgV+1;aIndex=aIndex+1;Ly=this.Ct.charCodeAt(
inx)||0;}if(aIndex>(inx+Ly))aIndex=inx+Ly;if(!!this.NA)aIndex=(inx+this.Bq9(this.
NA,(inx+1)-AgV,(inx+Ly)-AgV,(aIndex-inx)-1))+1;for(;aIndex>inx;inx=inx+1){var Yx=
this.Ct.charCodeAt(inx+1)||0;if(DZ)col=col+1;DZ=(Yx!==0xFEFF)&&(Yx!==0x0A);}return[
col,A5];},ACz:function(Ami){if(((this.String===A.jm)||!this.Cp)||this.WD)return 0;
if(!this.Hn)this.V1(this);var A5=Ami[1];var col=Ami[0];var inx=1;var AgV=2;var JD=
this.Ct.charCodeAt(0)||0;var Ly=this.Ct.charCodeAt(1)||0;if(A5>=JD){A5=JD-1;col=
this.Ct.length;}if(A5<0){A5=0;col=0;}if(col<0)col=0;while((A5>0)&&(Ly>0)){inx=inx+
Ly;A5=A5-1;AgV=AgV+1;Ly=this.Ct.charCodeAt(inx)||0;}var VP=inx;var AGY=(inx-AgV)+
1;var Anr=(AGY+Ly)-1;var Axk=false;while((col>=0)&&(Ly>1)){var Yx=this.Ct.charCodeAt(
inx+1)||0;inx=inx+1;Ly=Ly-1;Axk=(Yx===0xFEFF)||(Yx===0x0A);if(!Axk){col=col-1;VP=
inx;}}if((!Axk&&(col>=0))&&((this.Ct.charCodeAt(inx+1)||0)===0x00))Axk=true;if(Axk
)VP=VP+1;VP=VP-AgV;if(!!this.NA)VP=AGY+this.Bq_(this.NA,AGY,Anr,VP-AGY);return VP;
},Bhg:function(Kg){var B;if((this.String===A.jm)||!this.Cp)return BI;if(!this.Hn
)this.V1(this);var Ay=this.Dh();if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return BI;var font=
this.Cp;var Bm=this.JH;var JD=this.Ct.charCodeAt(0)||0;var leading=font.Leading;
if(Kg[1]<Ay[1])Kg=[Kg[0],Ay[1]];if(Kg[1]>=Ay[3])Kg=[Kg[0],Ay[3]-1];if(this.RA>0)
leading=(this.RA-font.Ascent)-font.Descent;var Aj6=(font.Ascent+font.Descent)+leading;
var A5=((Kg[1]-Ay[1])/Aj6)|0;var MQ=this.AKC(A5);var Ly=MQ.length;var Oo=false;if(((
Bm&0x80)===0x80)){if(this.AhT())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(((Bm&
0x40)===0x40)&&(A5<(JD-1)))Oo=true;if((Oo&&(MQ.indexOf(String.fromCharCode(0x20)
,0)<0))&&(MQ.indexOf(String.fromCharCode(0xA0),0)<0))Oo=false;if(Oo){var inx=1;var
Anq=A5;while(Anq>0){inx=inx+(this.Ct.charCodeAt(inx)||0);Anq=Anq-1;}if(((this.Ct.
charCodeAt(inx+1)||0)===0x0A)||((this.Ct.charCodeAt((inx+(this.Ct.charCodeAt(inx
)||0))-1)||0)===0x0A))Oo=false;}var Aj7=0;var FA=0;if(Oo)Aj7=Ay[2]-Ay[0];else if(((
Bm&0x4)===0x4))FA=(Ay[2]-Ay[0])-font.WM(MQ,0,Ly);else if(((Bm&0x2)===0x2))FA=(((
Ay[2]-Ay[0])/2)|0)-((font.WM(MQ,0,Ly)/2)|0);var col=font.Bcb(MQ,0,Ly,(Kg[0]-Ay[0
])-FA,Aj7);if(col<0)col=0;return[col,A5];},AlE:function(Ami){var B;if((this.String===
A.jm)||!this.Cp)return BI;if(!this.Hn)this.V1(this);var JD=this.Ct.charCodeAt(0)||
0;var font=this.Cp;var Bm=this.JH;var A5=Ami[1];var col=Ami[0];if(A5>=JD){A5=JD-
1;col=this.Ct.length;}if(A5<0){A5=0;col=0;}var MQ=this.AKC(A5);var Ly=MQ.length;
var Ay=this.Dh();var Oo=false;var leading=font.Leading;if(((Bm&0x80)===0x80)){if(
this.AhT())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(((Bm&0x40)===0x40)&&(A5<(
JD-1)))Oo=true;if((Oo&&(MQ.indexOf(String.fromCharCode(0x20),0)<0))&&(MQ.indexOf(
String.fromCharCode(0xA0),0)<0))Oo=false;if(Oo){var inx=1;var Anq=A5;while(Anq>0
){inx=inx+(this.Ct.charCodeAt(inx)||0);Anq=Anq-1;}if(((this.Ct.charCodeAt(inx+1)||
0)===0x0A)||((this.Ct.charCodeAt((inx+(this.Ct.charCodeAt(inx)||0))-1)||0)===0x0A
))Oo=false;}if(this.RA>0)leading=(this.RA-font.Ascent)-font.Descent;var C9=(Ay[1
]+(A5*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Aj7=0;var FA=Ay[0];
if(Oo)Aj7=Ay[2]-Ay[0];else if(((Bm&0x4)===0x4))FA=Ay[2]-font.WM(MQ,0,Ly);else if(((
Bm&0x2)===0x2))FA=(FA+(((Ay[2]-Ay[0])/2)|0))-((font.WM(MQ,0,Ly)/2)|0);var pos=font.
Bb9(MQ,0,Ly,col,Aj7);if(pos<0)pos=0;return[FA+pos,C9];},AKB:function(Z){var B;if((
this.String===A.jm)||!this.Cp)return EH;if(!this.Hn)this.V1(this);var JD=this.Ct.
charCodeAt(0)||0;var font=this.Cp;if((Z<0)||((Z>=JD)&&(Z>0)))return EH;var Bm=this.
JH;var inx=1;var leading=font.Leading;var Ba=this.M;var width=Ba[2]-Ba[0];var height=
Ba[3]-Ba[1];width=width-(this.IH*2);if(((Bm&0x80)===0x80)){if(this.AhT())Bm=(Bm&
~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(this.RA>0)leading=(this.RA-font.Ascent)-font.
Descent;var C9=Z*((font.Ascent+font.Descent)+leading);var FA=0;while(Z>0){inx=inx+(
this.Ct.charCodeAt(inx)||0);Z=Z-1;}var Axy=(this.Ct.charCodeAt(inx)||0)-1;var A_8=
font.WM(this.Ct,inx+1,Axy);var AYf=font.A06(this.Ct,inx+1,Axy);var Ans=A_8;var Aj6=
font.Ascent+font.Descent;var AxN=(JD*((font.Ascent+font.Descent)+leading))-leading;
if(!JD)AxN=Aj6;if((((this.Ct.charCodeAt((inx+Axy)+1)||0)===0x00)||((this.Ct.charCodeAt(
inx+Axy)||0)===0x0A))||((this.Ct.charCodeAt(inx+1)||0)===0x0A))Bm=Bm&~0x40;if(((
Bm&0x40)===0x40)){var Anr=(inx+1)+Axy;var AvW=this.Ct.indexOf(String.fromCharCode(
0x20),inx+1);var AvX=this.Ct.indexOf(String.fromCharCode(0xA0),inx+1);if(((AvW>=
0)&&(AvW<Anr))||((AvX>=0)&&(AvX<Anr)))Ans=width;}if((!!(Bm&0x110)&&!!(Bm&0x28))&&(
AxN>height))Bm&=~0x110;if(!!(Bm&0x110))Bm&=~0x28;if((((Bm&0x2)===0x2)&&!!(Bm&0x5
))&&(Ans>width))Bm&=~0x2;if(((Bm&0x2)===0x2))Bm&=~0x5;if(((Bm&0x4)===0x4))FA=width-
Ans;else if(((Bm&0x2)===0x2))FA=((width/2)|0)-((Ans/2)|0);if(((Bm&0x20)===0x20))
C9=C9+(height-AxN);else if(((Bm&0x100)===0x100))C9=((C9+((height/2)|0))-((AxN/2)|
0))+(((this.Cp.Descent-this.Cp.Ascent)/2)|0);else if(((Bm&0x10)===0x10))C9=(C9+((
height/2)|0))-((AxN/2)|0);FA=(FA+AYf[0])+this.IH;Ans=(Ans+(AYf[2]-AYf[0]))-A_8;var
BQ;{var A_A=[Ba[0]+FA,Ba[1]+C9];BQ=[].concat(A_A,A.aak(A_A,[Ans,Aj6]));}return A.
aam(BQ,this.Br);},AKC:function(Z){if((this.String===A.jm)||!this.Cp)return A.jm;
if(!this.Hn)this.V1(this);var JD=this.Ct.charCodeAt(0)||0;var inx=1;if((!this.Cp||(
Z<0))||(Z>=JD))return A.jm;while(Z>0){inx=inx+(this.Ct.charCodeAt(inx)||0);Z=Z-1;
}var V2=inx;var AqK=inx+(this.Ct.charCodeAt(inx)||0);var Yx=0x00;do{V2=V2+1;Yx=this.
Ct.charCodeAt(V2)||0;}while(((Yx===0xFEFF)||(Yx===0x0A))&&(V2<=AqK));do{AqK=AqK-
1;Yx=this.Ct.charCodeAt(AqK)||0;}while(((Yx===0xFEFF)||(Yx===0x0A))&&(V2<=AqK));
var MQ=A.aaY(this.Ct,V2,(AqK-V2)+1);var AmX;for(AmX=MQ.indexOf(String.fromCharCode(
0xFEFF),0);AmX>=0;AmX=MQ.indexOf(String.fromCharCode(0xFEFF),AmX+1)){var VP=AmX+
1;while((MQ.charCodeAt(VP)||0)===0xFEFF)VP=VP+1;MQ=A.aa3(MQ,AmX,VP-AmX);}return MQ;
},Dh:function(){var B;if((this.String===A.jm)||!this.Cp)return EH;if(!this.Hn)this.
V1(this);if(this.Ct===A.jm)return EH;var leading=this.Cp.Leading;var Axw=(this.Cp.
Ascent+this.Cp.Descent)+this.Cp.Leading;if(this.RA>0){leading=(this.RA-this.Cp.Ascent
)-this.Cp.Descent;Axw=this.RA;}if(A.z8(this.Akb,BI))this.Akb=[this.Cp.A0X(this.Ct
),this.Akb[1]];this.Akb=[this.Akb[0],((this.Ct.charCodeAt(0)||0)*Axw)-leading];var
Bm=this.JH;var Ba=this.M;var Aq7=this.IH;var width=Ba[2]-Ba[0];var height=Ba[3]-
Ba[1];var CV=[Aq7,0,width-Aq7,height];var BQ=[].concat(CV.slice(0,2),A.aak(CV.slice(
0,2),this.Akb));if(((Bm&0x80)===0x80)){if(this.AhT())Bm=(Bm&~0x80)|0x4;else Bm=(
Bm&~0x80)|0x1;}if(((Bm&0x40)===0x40)){var VT=this.AaJ;if(VT<=0)VT=width-(this.IH
*2);if(VT<0)VT=0;if(VT>(BQ[2]-BQ[0]))BQ=A.aaO(BQ,VT);}if((!!(Bm&0x110)&&!!(Bm&0x28
))&&((BQ[3]-BQ[1])>(CV[3]-CV[1])))Bm&=~0x110;if(!!(Bm&0x110))Bm&=~0x28;if((((Bm&
0x2)===0x2)&&!!(Bm&0x5))&&((BQ[2]-BQ[0])>(CV[2]-CV[0])))Bm&=~0x2;if(((Bm&0x2)===
0x2))Bm&=~0x5;if((BQ[2]-BQ[0])!==(CV[2]-CV[0])){if(((Bm&0x4)===0x4))BQ=A.aaP(BQ,
CV[2]-(BQ[2]-BQ[0]));else if(((Bm&0x2)===0x2))BQ=A.aaP(BQ,(CV[0]+(((CV[2]-CV[0])
/2)|0))-(((BQ[2]-BQ[0])/2)|0));}if((BQ[3]-BQ[1])!==(CV[3]-CV[1])){if(((Bm&0x20)===
0x20))BQ=A.aaR(BQ,CV[3]-(BQ[3]-BQ[1]));else if(((Bm&0x100)===0x100))BQ=A.aaR(BQ,((
CV[1]+(((CV[3]-CV[1])/2)|0))-(((BQ[3]-BQ[1])/2)|0))+(((this.Cp.Descent-this.Cp.Ascent
)/2)|0));else if(((Bm&0x10)===0x10))BQ=A.aaR(BQ,(CV[1]+(((CV[3]-CV[1])/2)|0))-(((
BQ[3]-BQ[1])/2)|0));}BQ=A.aam(BQ,Ba.slice(0,2));return A.aam(BQ,this.Br);},_Init:
function(aArg){A.Core.Em._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(
){this.Kz();this.__proto__=A.Core.Em;A.Core.Em._Done.call(this);},_Mark:function(
D){var B;A.Core.Em._Mark.call(this,D);if((B=this.Cp)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Text"
};C.ArP={attrString:null,AttrSet:null,String:A.jm,JH:0x12,JJ:function(CL,aClip,aOffset
,B6,aBlend){var B;if(!this.attrString||!this.AttrSet)return;var Ay=this.Dh();B6=
B6+1;if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return;CL.Bbi(aClip,this.AttrSet,this.attrString
,A.aam(this.M,aOffset),A.aaj(this.M.slice(0,2),Ay.slice(0,2)),(B6*255)>>8,(B6*255
)>>8,(B6*255)>>8,(B6*255)>>8,true);},G:function(E){var B;if(A.z9(E,this.M))return;
if(((((B=this.M)[2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.S&0x2000)===
0x2000)){this.attrString=null;A.ow([this,this.Or],this);}A.Core.Em.G.call(this,E
);A.ow([this,this.AgM],this);},AgM:function(H){},V1:function(H){var B;var AHr;AHr=(
B=this.M)[2]-B[0];if(AHr<0)AHr=1;if((this.String===A.jm)||!this.AttrSet)this.attrString=
null;if((!this.attrString&&(this.String!==A.jm))&&!!this.AttrSet)this.attrString=
A._NewObject(A.Graphics.AZs,0);if(!!this.attrString)this.attrString.Bha(this.AttrSet
,this.String,AHr,false);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);A.
ow([this,this.AgM],this);},Or:function(H){A.ow([this,this.V1],this);},A_2:function(
H){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},A0:function(E){
var B;E&=~0x140;if(E===this.JH)return;this.JH=E;if(!!this.Aa&&((this.S&0x1)===0x1
))this.Aa.Bc(this.M);A.ow([this,this.AgM],this);},R:function(E){if(this.String===
E)return;this.String=E;this.attrString=null;A.ow([this,this.Or],this);},A3p:function(
E){if(this.AttrSet===E)return;if(!!this.AttrSet){A.zl([this,this.A_2],this.AttrSet
,0);A.zl([this,this.Or],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(
!!this.AttrSet){A.y_([this,this.A_2],this.AttrSet,0);A.y_([this,this.Or],this.AttrSet
,1);}A.ow([this,this.Or],this);},Dh:function(){var B;if((this.String===A.jm)||!this.
AttrSet)return EH;if(!this.attrString)this.V1(this);if(!this.attrString)return EH;
var Bm=this.JH;var CW=this.attrString.Bcc();var CV=A.z4(this.M,BI);var BQ=[].concat(
CV.slice(0,2),A.aak(CV.slice(0,2),CW));if(!CW[0]||!CW[1])return EH;if(((Bm&0x80)===
0x80)){if(this.attrString.AhT())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if((BQ[
2]-BQ[0])!==(CV[2]-CV[0])){if(((Bm&0x4)===0x4))BQ=A.aaP(BQ,CV[2]-(BQ[2]-BQ[0]));
else if(((Bm&0x2)===0x2))BQ=A.aaP(BQ,(CV[0]+(((CV[2]-CV[0])/2)|0))-(((BQ[2]-BQ[0
])/2)|0));}if((BQ[3]-BQ[1])!==(CV[3]-CV[1])){if(((Bm&0x20)===0x20))BQ=A.aaR(BQ,CV[
3]-(BQ[3]-BQ[1]));else if(((Bm&0x10)===0x10))BQ=A.aaR(BQ,(CV[1]+(((CV[3]-CV[1])/
2)|0))-(((BQ[3]-BQ[1])/2)|0));}return BQ;},_Init:function(aArg){A.Core.Em._Init.
call(this,aArg);this.__proto__=C.ArP;this.S=0x3;},_Mark:function(D){var B;A.Core.
Em._Mark.call(this,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AttrSet)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"
};C.AfY={E_:null,Agm:0,Agl:0,Tx:A.vw,B7:A.aan(4,3,0,null),ACV:A.vw,R8:0,Am9:0,J$:
function(E){if(A.z8(E,this.JR))return;A.Core.XO.J$.call(this,E);this.B7.Set(3,0,
E[0]);this.B7.Set(3,1,E[1]);this.B7.Set(3,2,1);this.R8=0x45;this.E_=null;A.ow([this
,this.Aql],this);},J_:function(E){if(A.z8(E,this.LZ))return;A.Core.XO.J_.call(this
,E);this.B7.Set(2,0,E[0]);this.B7.Set(2,1,E[1]);this.B7.Set(2,2,1);this.R8=0x45;
this.E_=null;A.ow([this,this.Aql],this);},DL:function(E){if(A.z8(E,this.Ev))return;
A.Core.XO.DL.call(this,E);this.B7.Set(1,0,E[0]);this.B7.Set(1,1,E[1]);this.B7.Set(
1,2,1);this.R8=0x45;this.E_=null;A.ow([this,this.Aql],this);},D5:function(E){if(
A.z8(E,this.EV))return;A.Core.XO.D5.call(this,E);this.B7.Set(0,0,E[0]);this.B7.Set(
0,1,E[1]);this.B7.Set(0,2,1);this.R8=0x45;this.E_=null;A.ow([this,this.Aql],this
);},AV3:function(){return;},Arw:function(H){var B;if(this.R8===0x00)return;if(this.
R8===0x45){var Kn=A._NewObject(A.Graphics.AuH,0);Kn=Kn.Ba8(this.B7.Get(0,0),this.
B7.Get(0,1),this.B7.Get(1,0),this.B7.Get(1,1),this.B7.Get(2,0),this.B7.Get(2,1),
this.B7.Get(3,0),this.B7.Get(3,1));if(!!Kn){Kn.Ayx(0,0);this.B7.Set(0,2,Kn.Tm*240
);Kn.Ayx(1,0);this.B7.Set(1,2,Kn.Tm*240);Kn.Ayx(1,1);this.B7.Set(2,2,Kn.Tm*240);
Kn.Ayx(0,1);this.B7.Set(3,2,Kn.Tm*240);}this.AV3();}if((((this.R8===0x4D)&&!!this.
E_)&&!!this.Tx[0])&&!!this.Tx[1]){var AgY=[].concat(BI,this.Tx);var AgX=this.ACV;
var Ad9=AgY[0]-AgX[0];var AL=AgY[2]-AgX[0];var DN=AgY[1]-AgX[1];var Qr=AgY[3]-AgX[
1];this.E_.Aiz(Ad9,DN);this.B7.Set(0,0,this.E_.Tk+this.Agl);this.B7.Set(0,1,this.
E_.Tl+this.Agm);this.B7.Set(0,2,this.E_.Tm);this.E_.Aiz(AL,DN);this.B7.Set(1,0,this.
E_.Tk+this.Agl);this.B7.Set(1,1,this.E_.Tl+this.Agm);this.B7.Set(1,2,this.E_.Tm);
this.E_.Aiz(AL,Qr);this.B7.Set(2,0,this.E_.Tk+this.Agl);this.B7.Set(2,1,this.E_.
Tl+this.Agm);this.B7.Set(2,2,this.E_.Tm);this.E_.Aiz(Ad9,Qr);this.B7.Set(3,0,this.
E_.Tk+this.Agl);this.B7.Set(3,1,this.E_.Tl+this.Agm);this.B7.Set(3,2,this.E_.Tm);
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.EV=[(this.B7.
Get(0,0)+0.5)|0,(this.B7.Get(0,1)+0.5)|0];this.Ev=[(this.B7.Get(1,0)+0.5)|0,(this.
B7.Get(1,1)+0.5)|0];this.LZ=[(this.B7.Get(2,0)+0.5)|0,(this.B7.Get(2,1)+0.5)|0];
this.JR=[(this.B7.Get(3,0)+0.5)|0,(this.B7.Get(3,1)+0.5)|0];this.AV3();}this.Am9=
this.R8;this.R8=0x00;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));},Aql:function(s){this.Arw(s);},BgK:function(E){if(A.z8(E,this.ACV))return;this.
ACV=E;if((this.Am9!==0x45)&&(this.R8===0x00)){this.R8=this.Am9;A.ow([this,this.Aql
],this);}},ADl:function(AE9,Kf){var B;if(!Kf)throw new Error(I5);if(!this.E_)this.
E_=A._NewObject(A.Graphics.AuH,0);this.E_.Bai(Kf);this.Agl=AE9[0];this.Agm=AE9[1
];this.Am9=0x4D;this.R8=0x00;if(!this.Tx[0]||!this.Tx[1])return;var AgY=[].concat(
BI,this.Tx);var AgX=this.ACV;var Ad9=AgY[0]-AgX[0];var AL=AgY[2]-AgX[0];var DN=AgY[
1]-AgX[1];var Qr=AgY[3]-AgX[1];this.E_.Aiz(Ad9,DN);this.B7.Set(0,0,this.E_.Tk+this.
Agl);this.B7.Set(0,1,this.E_.Tl+this.Agm);this.B7.Set(0,2,this.E_.Tm);this.E_.Aiz(
AL,DN);this.B7.Set(1,0,this.E_.Tk+this.Agl);this.B7.Set(1,1,this.E_.Tl+this.Agm);
this.B7.Set(1,2,this.E_.Tm);this.E_.Aiz(AL,Qr);this.B7.Set(2,0,this.E_.Tk+this.Agl
);this.B7.Set(2,1,this.E_.Tl+this.Agm);this.B7.Set(2,2,this.E_.Tm);this.E_.Aiz(Ad9
,Qr);this.B7.Set(3,0,this.E_.Tk+this.Agl);this.B7.Set(3,1,this.E_.Tl+this.Agm);this.
B7.Set(3,2,this.E_.Tm);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));this.EV=[(this.B7.Get(0,0)+0.5)|0,(this.B7.Get(0,1)+0.5)|0];this.Ev=[(this.B7.
Get(1,0)+0.5)|0,(this.B7.Get(1,1)+0.5)|0];this.LZ=[(this.B7.Get(2,0)+0.5)|0,(this.
B7.Get(2,1)+0.5)|0];this.JR=[(this.B7.Get(3,0)+0.5)|0,(this.B7.Get(3,1)+0.5)|0];
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.AV3();},_Init:
function(aArg){A.Core.XO._Init.call(this,aArg);(this.B7=[]).__proto__=C.AfY.B7;this.
__proto__=C.AfY;this.S=0x3;},_Mark:function(D){var B;A.Core.XO._Mark.call(this,D
);if((B=this.E_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::WarpView"
};C.AQB={EW:null,bitmap:null,O:null,A8Q:1,A8R:0,A8S:0,A8T:0,A8U:1,A8V:0,A8W:0,A8X:
0,A8Y:1,Gq:255,AGq:false,JJ:function(CL,aClip,aOffset,B6,aBlend){var B;if(!this.
bitmap)return;this.bitmap.Update();var YM=aOffset[0];var YN=aOffset[1];var Ay=[].
concat(BI,this.Tx);aBlend=aBlend&&((this.S&0x2)===0x2);B6=B6+1;var A9E;var A9F;var
A9G;var A9H;var BsK=this.Gq;A9E=A9F=A9G=A9H=BsK;var Ajk=255|(255<<8)|(255<<16)|((((
B6*A9E)>>8)&0xFF)<<24);var Ajl=255|(255<<8)|(255<<16)|((((B6*A9F)>>8)&0xFF)<<24);
var Bq$=255|(255<<8)|(255<<16)|((((B6*A9G)>>8)&0xFF)<<24);var Bra=255|(255<<8)|(
255<<16)|((((B6*A9H)>>8)&0xFF)<<24);aClip=A.z6(aClip,A.aam(EH,aOffset));CL.AfX(aClip
,this.bitmap,0,this.B7.Get(0,0)+YM,this.B7.Get(0,1)+YN,this.B7.Get(0,2),this.B7.
Get(1,0)+YM,this.B7.Get(1,1)+YN,this.B7.Get(1,2),this.B7.Get(2,0)+YM,this.B7.Get(
2,1)+YN,this.B7.Get(2,2),this.B7.Get(3,0)+YM,this.B7.Get(3,1)+YN,this.B7.Get(3,2
),Ay,Ajk,Ajl,Bq$,Bra,aBlend,true);},Gl:function(Cx){if(!this.O||!this.EW)return null;
var BK=(A.Core.Ab6.isPrototypeOf(Cx)?Cx:null);var DH=(A.Core.An0.isPrototypeOf(Cx
)?Cx:null);if(!BK&&!DH)return null;var EX=BI;var B0=this.EW.Aa;while(!!B0&&(B0!==
this.O)){EX=A.aaj(EX,B0.M.slice(0,2));B0=B0.Aa;}var X=this.EW;if(!!BK&&!BK.Down)
this.EW=null;if(!!BK){BK.Hr=A.aak(this.AqX(BK.Hr),EX);BK.M3=A.aak(this.AqX(BK.M3
),EX);return X.Gl(BK);}if(!!DH){var BsO=A.aak(this.AqX(A.aaj(DH.Hr,DH.Dp)),EX);DH.
Hr=A.aak(this.AqX(DH.Hr),EX);DH.M3=A.aak(this.AqX(DH.M3),EX);DH.Dp=A.aaj(DH.Hr,BsO
);return X.Gl(DH);}return C.AfY.Gl.call(this,Cx);},Wy:function(C0,Bz,Nw,AaV,Aa0,
AaZ){var B;if(!this.O||!((this.O.S&0x18)===0x18))return null;var pos=A.zT(C0);pos=
this.AqX(pos);var Anx=[].concat(BI,this.Tx);if(!A.vt(Anx,pos))return null;var Ja=
this.O.Wy(A.aam(A.aam([0,0,C0[2]-C0[0],C0[3]-C0[1]],pos),this.O.M.slice(0,2)),Bz
,Nw,AaV,null,AaZ);if(!!Ja)this.EW=Ja.B5;else this.EW=null;if(!!this.EW)return A.
_NewObject(A.Core.ArV,0).Initialize(this,BI);return null;},Arw:function(H){C.AfY.
Arw.call(this,H);this.AGq=false;},ADl:function(AE9,Kf){C.AfY.ADl.call(this,AE9,Kf
);this.AGq=false;},BuV:function(){var x1=this.B7.Get(0,0);var y1=this.B7.Get(0,1
);var x2=this.B7.Get(1,0);var y2=this.B7.Get(1,1);var x3=this.B7.Get(2,0);var y3=
this.B7.Get(2,1);var x4=this.B7.Get(3,0);var y4=this.B7.Get(3,1);var Awh=x2-x3;var
Awj=y2-y3;var Awi=x4-x3;var Awk=y4-y3;var AxJ=((x1-x2)+x3)-x4;var AxK=((y1-y2)+y3
)-y4;var AmB=(Awh*Awk)-(Awj*Awi);if(!AmB)return;var AqP=((AxJ*Awk)-(AxK*Awi))/AmB;
var BG=((Awh*AxK)-(Awj*AxJ))/AmB;var a=(x2-x1)+(AqP*x2);var Qr=(x4-x1)+(BG*x4);var
BF=x1;var d=(y2-y1)+(AqP*y2);var AF2=(y4-y1)+(BG*y4);var KY=y1;this.A8Q=AF2-(KY*
BG);this.A8R=(BF*BG)-Qr;this.A8S=(Qr*KY)-(BF*AF2);this.A8T=(KY*AqP)-d;this.A8U=a-(
BF*AqP);this.A8V=(BF*d)-(a*KY);this.A8W=(d*BG)-(AF2*AqP);this.A8X=(Qr*AqP)-(a*BG
);this.A8Y=(a*AF2)-(Qr*d);this.AGq=true;},AqX:function(E6){var B;if(!this.AGq)this.
BuV();var AYQ=E6[0];var AYS=E6[1];var Ax5=((AYQ*this.A8Q)+(AYS*this.A8R))+this.A8S;
var Ax8=((AYQ*this.A8T)+(AYS*this.A8U))+this.A8V;var AX8=((AYQ*this.A8W)+(AYS*this.
A8X))+this.A8Y;if(!!AX8){Ax5=Ax5/AX8;Ax8=Ax8/AX8;}var Anx=[].concat(BI,this.Tx);
Ax5=Ax5*(Anx[2]-Anx[0]);Ax8=Ax8*(Anx[3]-Anx[1]);return A.aak([Ax5|0,Ax8|0],Anx.slice(
0,2));},QB:function(H){var B;var A9I=this.Tx;if(!!this.O)this.bitmap=this.O.Hl;else
this.bitmap=null;if(!!this.bitmap)this.Tx=this.bitmap.FrameSize;else this.Tx=BI;
if(((A.z8(A9I,this.Tx)||((this.Am9===0x45)&&(this.R8===0x00)))&&!!this.Aa)&&((this.
S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if(((this.Am9!==0x45)&&(this.R8===0x00
))&&!A.z8(A9I,this.Tx)){this.R8=this.Am9;A.ow([this,this.Aql],this);}},DF:function(
E){var B;if(E===this.Gq)return;this.Gq=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());},BfV:function(E){if(E===this.O)return;if(!!E&&(E===this.
Aa))throw new Error(Iq);if(!!this.O){A.zl([this,this.QB],this.O,0);this.bitmap=null;
}this.O=E;if(!!E){A.y_([this,this.QB],E,0);this.bitmap=E.Hl;}this.QB(this);},Atb:
function(){return this.Gq;},_Init:function(aArg){C.AfY._Init.call(this,aArg);this.
__proto__=C.AQB;},_Mark:function(D){var B;C.AfY._Mark.call(this,D);if((B=this.EW
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.bitmap)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::WarpGroup"
};C.Ace={G0:null,AM:0xFFFFFFFF,Dp:A.vw,AKg:false,Kz:function(){this.AWi();},JJ:function(
CL,aClip,aOffset,B6,aBlend){if(!this.G0)return;var Dl;var Du;var Dr;var Dt;var BF=
this.AM;B6=B6+1;Dl=Du=Dr=Dt=BF;if(B6<256){Dl=(Dl&0x00FFFFFF)|((((B6*((Dl>>24)&0xFF
))>>8)&0xFF)<<24);Du=(Du&0x00FFFFFF)|((((B6*((Du>>24)&0xFF))>>8)&0xFF)<<24);Dr=(
Dr&0x00FFFFFF)|((((B6*((Dr>>24)&0xFF))>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF)|((((B6*((
Dt>>24)&0xFF))>>8)&0xFF)<<24);}CL.Ace(aClip,this.G0,A.aam(this.M,aOffset),this.AKg
,this.Dp,Dl,Du,Dt,Dr,true,true,0);},AWi:function(){return;},Ag3:function(H){var B;
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},L:function(E){var B;if(E===
this.AM)return;this.AM=E;if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.G0)this.Aa.
Bc(this.M);},Alr:function(E){var B;if(A.z8(E,this.Dp))return;this.Dp=E;if((!!this.
Aa&&((this.S&0x1)===0x1))&&!!this.G0)this.Aa.Bc(this.M);},BfQ:function(E){var B;
if(E===this.AKg)return;this.AKg=E;if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.G0
)this.Aa.Bc(this.M);},XH:function(E){var B;if(E===this.G0)return;if(!!this.G0)A.
zl([this,this.Ag3],this.G0,0);this.G0=E;if(!!this.G0)A.y_([this,this.Ag3],this.G0
,0);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},W:function(E){if(E)this.
CS(0x1,0x0);else this.CS(0x0,0x1);},_Init:function(aArg){A.Core.Em._Init.call(this
,aArg);this.__proto__=C.Ace;},_Done:function(){this.Kz();this.__proto__=A.Core.Em;
A.Core.Em._Done.call(this);},_Mark:function(D){var B;A.Core.Em._Mark.call(this,D
);if((B=this.G0)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::FillPath"
};C.GK={G0:null,AM:0xFFFFFFFF,Dp:A.vw,Width:1,Kz:function(){this.AWi();},JJ:function(
CL,aClip,aOffset,B6,aBlend){if(!this.G0)return;var Dl;var Du;var Dr;var Dt;var BF=
this.AM;B6=B6+1;Dl=Du=Dr=Dt=BF;if(B6<256){Dl=(Dl&0x00FFFFFF)|((((B6*((Dl>>24)&0xFF
))>>8)&0xFF)<<24);Du=(Du&0x00FFFFFF)|((((B6*((Du>>24)&0xFF))>>8)&0xFF)<<24);Dr=(
Dr&0x00FFFFFF)|((((B6*((Dr>>24)&0xFF))>>8)&0xFF)<<24);Dt=(Dt&0x00FFFFFF)|((((B6*((
Dt>>24)&0xFF))>>8)&0xFF)<<24);}CL.GK(aClip,this.G0,A.aam(this.M,aOffset),false,this.
Dp,this.Width,0,0,0,3,Dl,Du,Dt,Dr,true,true);},AWi:function(){return;},Ag3:function(
H){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},L:function(E){var
B;if(E===this.AM)return;this.AM=E;if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.G0
)this.Aa.Bc(this.M);},Alr:function(E){var B;if(A.z8(E,this.Dp))return;this.Dp=E;
if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.G0)this.Aa.Bc(this.M);},N7:function(
E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if((!!this.Aa&&((this.
S&0x1)===0x1))&&!!this.G0)this.Aa.Bc(this.M);},XH:function(E){var B;if(E===this.
G0)return;if(!!this.G0)A.zl([this,this.Ag3],this.G0,0);this.G0=E;if(!!this.G0)A.
y_([this,this.Ag3],this.G0,0);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.
M);},W:function(E){if(E)this.CS(0x1,0x0);else this.CS(0x0,0x1);},_Init:function(
aArg){A.Core.Em._Init.call(this,aArg);this.__proto__=C.GK;},_Done:function(){this.
Kz();this.__proto__=A.Core.Em;A.Core.Em._Done.call(this);},_Mark:function(D){var
B;A.Core.Em._Mark.call(this,D);if((B=this.G0)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Views::StrokePath"};C.BwB={AY_:0x1,AY9:0x2,AY$:0x4,AZc:0x8,AZb:0x10
,AZa:0x20,BxO:0x40,BxP:0x80,BxZ:0x100};C.Bx3={AY_:0x1,AY9:0x2,AY$:0x4,AZc:0x8,AZb:
0x10,AZa:0x20,Bvc:0x40,Bvb:0x80,Bvh:0x100};C.Bxd={Normal:0,BxJ:1,BxH:2,BxI:3};
C._Init=function(){C.DK.__proto__=A.Core.Ah5;C.AH.__proto__=A.Core.Em;C.CT.__proto__=
A.Core.Em;C.M2.__proto__=A.Core.Em;C.Am.__proto__=A.Core.Em;C.Text.__proto__=A.Core.
Em;C.ArP.__proto__=A.Core.Em;C.AfY.__proto__=A.Core.XO;C.AQB.__proto__=C.AfY;C.Ace.
__proto__=A.Core.Em;C.GK.__proto__=A.Core.Em;};C._ReInit=function(){};C.Dq=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */