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
var B3=[1,1];var BI=[0,0];var EG=[0,0,0,0];var Gr="\uFEFF";var I4="No matrix to perform 3D transformation";
var Ip="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.DU={J2:null,AiQ:1,AiP:1,AV:0xFFFFFFFF,JH:function(CJ,aClip,aOffset,B5,aBlend){var
B;var Aei=this.AiP;var Aej=this.AiQ;var Abj=A.aak(this.EV,aOffset);var Abk=A.aak(
this.EN,aOffset);var Aje;var Ajf;var BF=this.AV;if(A.z8(Abj,Abk))return;aBlend=aBlend&&((
this.S&0x2)===0x2);B5=B5+1;Aje=Ajf=BF;if(B5<256){Aje=(Aje&0x00FFFFFF)|((((B5*((Aje>>
24)&0xFF))>>8)&0xFF)<<24);Ajf=(Ajf&0x00FFFFFF)|((((B5*((Ajf>>24)&0xFF))>>8)&0xFF
)<<24);}if((Aei===1)&&(Aej===1))CJ.ArY(aClip,Abj,Abk,Aje,Ajf,aBlend);else CJ.Ba9(
aClip,Abj,Abk,Aei,Aej,Aje,Ajf,aBlend);},GetExtent:function(){var Aei=this.AiP;var
Aej=this.AiQ;var Abj=this.EV;var Abk=this.EN;if(((Aei===1)&&(Aej===1))||A.z8(Abj
,Abk))return A.Core.AhX.GetExtent.call(this);var Agn=Aei/2;var Ago=Aej/2;var AmK=
Abj[0];var AmL=Abj[1];var AmM=Abk[0];var AmN=Abk[1];var Jv=AmM-AmK;var Jw=AmN-AmL;
var Is=Math.sqrt((Jv*Jv)+(Jw*Jw));Jv=Jv/Is;Jw=Jw/Is;var A7N=AmK+(Jw*Agn);var A7O=
AmL-(Jv*Agn);var AFz=AmM+(Jw*Ago);var AFA=AmN-(Jv*Ago);var AFB=AmM-(Jw*Ago);var AFC=
AmN+(Jv*Ago);var AFD=AmK-(Jw*Agn);var AFE=AmL+(Jv*Agn);var left=A7N;var right=A7N;
var top=A7O;var bottom=A7O;if(AFz<left)left=AFz;if(AFB<left)left=AFB;if(AFD<left
)left=AFD;if(AFz>right)right=AFz;if(AFB>right)right=AFB;if(AFD>right)right=AFD;if(
AFA<top)top=AFA;if(AFC<top)top=AFC;if(AFE<top)top=AFE;if(AFA>bottom)bottom=AFA;if(
AFC>bottom)bottom=AFC;if(AFE>bottom)bottom=AFE;var AL=[left|0,top|0,right|0,bottom|
0];AL=[].concat(AL.slice(0,2),A.aak(AL.slice(2,4),B3));return AL;},QA:function(H
){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());},BgG:function(
E){var B;if(E<1)E=1;if(E===this.AiQ)return;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());this.AiQ=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());if(((E!==1)||(this.AiP!==1))&&!this.J2){this.J2=A.zW(A.abj.ApX
);if(this.J2.NY)A.y_([this,this.QA],this.J2,0);}if(((E===1)&&(this.AiP===1))&&!!
this.J2){if(this.J2.NY)A.zl([this,this.QA],this.J2,0);this.J2=null;}},BgF:function(
E){var B;if(E<1)E=1;if(E===this.AiP)return;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());this.AiP=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());if(((E!==1)||(this.AiQ!==1))&&!this.J2){this.J2=A.zW(A.abj.ApX
);if(this.J2.NY)A.y_([this,this.QA],this.J2,0);}if(((E===1)&&(this.AiQ===1))&&!!
this.J2){if(this.J2.NY)A.zl([this,this.QA],this.J2,0);this.J2=null;}},N5:function(
E){var B;if(E<1)E=1;if((E===this.AiP)&&(E===this.AiQ))return;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.AiP=E;this.AiQ=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if((E!==1)&&!this.J2){this.J2=A.
zW(A.abj.ApX);if(this.J2.NY)A.y_([this,this.QA],this.J2,0);}if((E===1)&&!!this.J2
){if(this.J2.NY)A.zl([this,this.QA],this.J2,0);this.J2=null;}},L:function(E){var
B;if(E===this.AV)return;this.AV=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.GetExtent());},Aj:function(E){if(E)this.CQ(0x400,0x0);else this.CQ(0x0,0x400
);},Fe:function(){var B;return((this.S&0x1)===0x1);},W:function(E){if(E)this.CQ(
0x1,0x0);else this.CQ(0x0,0x1);},_Init:function(aArg){A.Core.AhX._Init.call(this
,aArg);this.__proto__=C.DU;},_Mark:function(D){var B;A.Core.AhX._Mark.call(this,
D);if((B=this.J2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Line"};
C.AH={AI0:0xFFFFFFFF,AI1:0xFFFFFFFF,AI5:0xFFFFFFFF,AI4:0xFFFFFFFF,AV:0xFFFFFFFF,
JH:function(CJ,aClip,aOffset,B5,aBlend){var B;var Di=this.AI4;var Dq=this.AI5;var
Do=this.AI0;var Dp=this.AI1;var BF=this.AV;aBlend=aBlend&&((this.S&0x2)===0x2);B5=
B5+1;if((((Di===Dq)&&(Do===Dp))&&(Di===Do))&&(Di===0xFFFFFFFF))Di=Dq=Do=Dp=BF;else
if(BF!==0xFFFFFFFF){Di=(Di&0x00FFFFFF)|((((((Di>>24)&0xFF)*(((BF>>24)&0xFF)+1))>>
8)&0xFF)<<24);Di=(Di&0xFFFFFF00)|((((Di&0xFF)*((BF&0xFF)+1))>>8)&0xFF);Di=(Di&0xFFFF00FF
)|((((((Di>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8)&0xFF)<<8);Di=(Di&0xFF00FFFF)|((((((
Di>>16)&0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF)<<16);Dq=(Dq&0x00FFFFFF)|((((((Dq>>24
)&0xFF)*(((BF>>24)&0xFF)+1))>>8)&0xFF)<<24);Dq=(Dq&0xFFFFFF00)|((((Dq&0xFF)*((BF&
0xFF)+1))>>8)&0xFF);Dq=(Dq&0xFFFF00FF)|((((((Dq>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8
)&0xFF)<<8);Dq=(Dq&0xFF00FFFF)|((((((Dq>>16)&0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF
)<<16);Do=(Do&0x00FFFFFF)|((((((Do>>24)&0xFF)*(((BF>>24)&0xFF)+1))>>8)&0xFF)<<24
);Do=(Do&0xFFFFFF00)|((((Do&0xFF)*((BF&0xFF)+1))>>8)&0xFF);Do=(Do&0xFFFF00FF)|((((((
Do>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8)&0xFF)<<8);Do=(Do&0xFF00FFFF)|((((((Do>>16)&
0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF)<<16);Dp=(Dp&0x00FFFFFF)|((((((Dp>>24)&0xFF)
*(((BF>>24)&0xFF)+1))>>8)&0xFF)<<24);Dp=(Dp&0xFFFFFF00)|((((Dp&0xFF)*((BF&0xFF)+
1))>>8)&0xFF);Dp=(Dp&0xFFFF00FF)|((((((Dp>>8)&0xFF)*(((BF>>8)&0xFF)+1))>>8)&0xFF
)<<8);Dp=(Dp&0xFF00FFFF)|((((((Dp>>16)&0xFF)*(((BF>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(B5<256){Di=(Di&0x00FFFFFF)|((((B5*((Di>>24)&0xFF))>>8)&0xFF)<<24);Dq=(Dq&0x00FFFFFF
)|((((B5*((Dq>>24)&0xFF))>>8)&0xFF)<<24);Do=(Do&0x00FFFFFF)|((((B5*((Do>>24)&0xFF
))>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF)|((((B5*((Dp>>24)&0xFF))>>8)&0xFF)<<24);}CJ.
Asa(aClip,A.aam(this.M,aOffset),Di,Dq,Dp,Do,aBlend);},Atf:function(E){var B;if(E===
this.AI0)return;this.AI0=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);
},Atg:function(E){var B;if(E===this.AI1)return;this.AI1=E;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.M);},Ati:function(E){var B;if(E===this.AI5)return;this.
AI5=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},Ath:function(E){var
B;if(E===this.AI4)return;this.AI4=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.M);},L:function(E){var B;if(E===this.AV)return;this.AV=E;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.M);},Fe:function(){var B;return((this.S&0x1)===0x1
);},W:function(E){if(E)this.CQ(0x1,0x0);else this.CQ(0x0,0x1);},_Init:function(aArg
){A.Core.Em._Init.call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"
};C.CR={Width:1,AV:0xFFFFFFFF,JH:function(CJ,aClip,aOffset,B5,aBlend){var B;var Di;
var Dq;var Do;var Dp;var BF=this.AV;aBlend=aBlend&&((this.S&0x2)===0x2);B5=B5+1;
Di=Dq=Do=Dp=BF;if(B5<256){Di=(Di&0x00FFFFFF)|((((B5*((Di>>24)&0xFF))>>8)&0xFF)<<
24);Dq=(Dq&0x00FFFFFF)|((((B5*((Dq>>24)&0xFF))>>8)&0xFF)<<24);Do=(Do&0x00FFFFFF)|((((
B5*((Do>>24)&0xFF))>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF)|((((B5*((Dp>>24)&0xFF))>>8
)&0xFF)<<24);}CJ.Ba7(aClip,A.aam(this.M,aOffset),this.Width,Di,Dq,Dp,Do,aBlend);
},N5:function(E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.
Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},L:function(E){var B;if(E===this.AV
)return;this.AV=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},W:function(
E){if(E)this.CQ(0x1,0x0);else this.CQ(0x0,0x1);},_Init:function(aArg){A.Core.Em.
_Init.call(this,aArg);this.__proto__=C.CR;},_className:"Views::Border"};C.MZ={timer:
null,Ah:null,L5:-1,AV:0xFFFFFFFF,ArZ:0x1F,Sr:0,Dc:0,Ak4:A.vw,TU:false,JH:function(
CJ,aClip,aOffset,B5,aBlend){var B;var MG=this.Sr;if(this.L5>=0)MG=this.L5;if(!this.
Ah||(MG>=this.Ah.NoOfFrames))return;this.Ah.Update();var Di;var Dq;var Dp;var Do;
var BF=this.AV;var JD=(((B5+1)*255)>>8)+1;var NA=this.ArZ;var AL=A.aam(this.M,aOffset
);var AGV=A.aaj([AL[2]-AL[0],AL[3]-AL[1]],this.Ak4);aBlend=aBlend&&((this.S&0x2)===
0x2);Di=Dq=Do=Dp=BF;if(JD<256){Di=(Di&0x00FFFFFF)|((((((Di>>24)&0xFF)*JD)>>8)&0xFF
)<<24);Dq=(Dq&0x00FFFFFF)|((((((Dq>>24)&0xFF)*JD)>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF
)|((((((Dp>>24)&0xFF)*JD)>>8)&0xFF)<<24);Do=(Do&0x00FFFFFF)|((((((Do>>24)&0xFF)*
JD)>>8)&0xFF)<<24);}if(((this.Ak4[0]>0)&&(AGV[0]>0))&&!((NA&0x5)===0x5)){var d=((
this.Ah.FrameSize[0]/3)|0)-AGV[0];if(((NA&0x1)===0x1)){if(aClip[2]>AL[2])aClip=A.
aaQ(aClip,AL[2]);if(d>0)AL=A.aaQ(AL,AL[2]+d);NA=NA|0x4;}else if(((NA&0x4)===0x4)
){if(aClip[0]<AL[0])aClip=[].concat(AL[0],aClip.slice(1,4));if(d>0)AL=[].concat(
AL[0]-d,AL.slice(1,4));NA=NA|0x1;}else{if(aClip[0]<AL[0])aClip=[].concat(AL[0],aClip.
slice(1,4));if(aClip[2]>AL[2])aClip=A.aaQ(aClip,AL[2]);if(d>0){AL=[].concat(AL[0
]-((d/2)|0),AL.slice(1,4));AL=A.aaQ(AL,(AL[2]+d)-((d/2)|0));}NA=NA|0x5;}}if(((this.
Ak4[1]>0)&&(AGV[1]>0))&&!((NA&0xA)===0xA)){var d=((this.Ah.FrameSize[1]/3)|0)-AGV[
1];if(((NA&0x2)===0x2)){if(aClip[3]>AL[3])aClip=[].concat(aClip.slice(0,3),AL[3]
);if(d>0)AL=[].concat(AL.slice(0,3),AL[3]+d);NA=NA|0x8;}else if(((NA&0x8)===0x8)
){if(aClip[1]<AL[1])aClip=A.aaS(aClip,AL[1]);if(d>0)AL=A.aaS(AL,AL[1]-d);NA=NA|0x2;
}else{if(aClip[1]<AL[1])aClip=A.aaS(aClip,AL[1]);if(aClip[3]>AL[3])aClip=[].concat(
aClip.slice(0,3),AL[3]);if(d>0){AL=A.aaS(AL,AL[1]-((d/2)|0));AL=[].concat(AL.slice(
0,3),(AL[3]+d)-((d/2)|0));}NA=NA|0xA;}}CJ.Ba6(aClip,this.Ah,MG,AL,NA,Di,Dq,Dp,Do
,aBlend);},QA:function(H){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.
M);},Ly:function(H){var B;var MG=this.L5;var R7=0;if(!!this.Ah)R7=this.Ah.NoOfFrames
*this.Ah.FrameDelay;if((!!this.timer&&(this.L5<0))&&(R7>0))this.Dc=this.timer.Bp-(
this.Sr*this.Ah.FrameDelay);if(!!this.timer&&(R7>0)){var Ap=(this.timer.Bp-this.
Dc)|0;MG=(Ap/this.Ah.FrameDelay)|0;if(Ap>=R7){MG=MG%this.Ah.NoOfFrames;this.Dc=this.
timer.Bp-(Ap%R7);}}if(((MG!==this.L5)&&!!this.Aa)&&((this.S&0x1)===0x1))this.Aa.
Bc(this.M);this.L5=MG;if(!R7&&!!this.timer){A.zl([this,this.Ly],this.timer,0);this.
timer=null;}},L:function(E){var B;if(E===this.AV)return;this.AV=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},Xx:function(E){var B;if(this.TU===E)return;
this.TU=E;this.L5=-1;if(!E&&!!this.timer){A.zl([this,this.Ly],this.timer,0);this.
timer=null;}if(E){this.timer=A._GetAutoObject(A.abm.AeN);A.y_([this,this.Ly],this.
timer,0);A.ow([this,this.Ly],this);}if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(
this.M);},A3v:function(E){var B;if(E===this.ArZ)return;this.ArZ=E;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},Cc:function(E){var B;if(E<0)E=0;if((E===
this.Sr)&&(this.L5===-1))return;this.Sr=E;if(!this.timer)this.L5=-1;if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},Ar:function(E){var B;if(E===this.Ah)return;
if(!!this.Ah&&this.Ah.NY)A.zl([this,this.QA],this.Ah,0);this.Ah=E;this.L5=-1;if(
!!E&&E.NY)A.y_([this,this.QA],E,0);if(this.TU){this.Xx(false);this.Xx(true);}if(
!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},W:function(E){if(E)this.CQ(
0x1,0x0);else this.CQ(0x0,0x1);},A3I:function(E){var B;if(E[0]<0)E=[0,E[1]];if(E[
1]<0)E=[E[0],0];if(A.z8(E,this.Ak4))return;this.Ak4=E;if((!!this.Aa&&((this.S&0x1
)===0x1))&&!((this.ArZ&0xF)===0xF))this.Aa.Bc(this.M);},_Init:function(aArg){A.Core.
Em._Init.call(this,aArg);this.__proto__=C.MZ;},_Mark:function(D){var B;A.Core.Em.
_Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Frame"};C.Am={timer:
null,Ah:null,Dc:0,L5:0,AV:0xFFFFFFFF,JF:0x12,Sr:0,Gm:255,TU:false,Y3:false,JH:function(
CJ,aClip,aOffset,B5,aBlend){var B;var MG=this.Sr;if(this.L5>=0)MG=this.L5;if(!this.
Ah||(MG>=this.Ah.NoOfFrames))return;this.Ah.Update();var Ay=this.Dd();var CT=this.
Ah.FrameSize;if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return;var Di;var Dq;var Dp;var Do;
var BF=this.AV;var JD=(((B5+1)*this.Gm)>>8)+1;aBlend=aBlend&&((this.S&0x2)===0x2
);Di=Dq=Do=Dp=BF;if(JD<256){Di=(Di&0x00FFFFFF)|((((((Di>>24)&0xFF)*JD)>>8)&0xFF)<<
24);Dq=(Dq&0x00FFFFFF)|((((((Dq>>24)&0xFF)*JD)>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF)|((((((
Dp>>24)&0xFF)*JD)>>8)&0xFF)<<24);Do=(Do&0x00FFFFFF)|((((((Do>>24)&0xFF)*JD)>>8)&
0xFF)<<24);}if(A.z8([Ay[2]-Ay[0],Ay[3]-Ay[1]],CT))CJ.AZV(aClip,this.Ah,MG,A.aam(
this.M,aOffset),A.aaj(this.M.slice(0,2),Ay.slice(0,2)),Di,Dq,Dp,Do,aBlend);else CJ.
Bhv(aClip,this.Ah,MG,A.aam(Ay,aOffset),[].concat(BI,CT),Di,Dq,Dp,Do,aBlend,true);
},QA:function(H){var B;if(((this.Y3&&!!this.Ah)&&(this.Ah.FrameSize[0]>0))&&(this.
Ah.FrameSize[1]>0))this.G(this.Dd());if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.
Bc(this.M);},Ly:function(H){var B;var MG=this.L5;var R7=0;if(!!this.Ah)R7=this.Ah.
NoOfFrames*this.Ah.FrameDelay;if((!!this.timer&&(this.L5<0))&&(R7>0))this.Dc=this.
timer.Bp-(this.Sr*this.Ah.FrameDelay);if(!!this.timer&&(R7>0)){var Ap=(this.timer.
Bp-this.Dc)|0;MG=(Ap/this.Ah.FrameDelay)|0;if(Ap>=R7){MG=MG%this.Ah.NoOfFrames;this.
Dc=this.timer.Bp-(Ap%R7);}}if(((MG!==this.L5)&&!!this.Aa)&&((this.S&0x1)===0x1))
this.Aa.Bc(this.M);this.L5=MG;if(!R7&&!!this.timer){A.zl([this,this.Ly],this.timer
,0);this.timer=null;}},IZ:function(E){if(E===this.Y3)return;this.Y3=E;if(((E&&!!
this.Ah)&&(this.Ah.FrameSize[0]>0))&&(this.Ah.FrameSize[1]>0))this.G(this.Dd());
},L:function(E){var B;if(E===this.AV)return;this.AV=E;if(!!this.Aa&&((this.S&0x1
)===0x1))this.Aa.Bc(this.M);},Xx:function(E){var B;if(this.TU===E)return;this.TU=
E;this.L5=-1;if(!E&&!!this.timer){A.zl([this,this.Ly],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.abm.AeN);A.y_([this,this.Ly],this.timer,0);
A.ow([this,this.Ly],this);}if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);
},A0:function(E){var B;if(E===this.JF)return;this.JF=E;if(!!this.Aa&&((this.S&0x1
)===0x1))this.Aa.Bc(this.M);},Cc:function(E){var B;if(E<0)E=0;if((E===this.Sr)&&(
this.L5===-1))return;this.Sr=E;if(!this.timer)this.L5=-1;if(!!this.Aa&&((this.S&
0x1)===0x1))this.Aa.Bc(this.M);},Ar:function(E){var B;if(E===this.Ah)return;if(!
!this.Ah&&this.Ah.NY)A.zl([this,this.QA],this.Ah,0);this.Ah=E;this.L5=-1;if(!!E&&
E.NY)A.y_([this,this.QA],E,0);if(this.TU){this.Xx(false);this.Xx(true);}if(((this.
Y3&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.G(this.Dd());if(!!this.Aa&&((
this.S&0x1)===0x1))this.Aa.Bc(this.M);},DC:function(E){var B;if(E>255)E=255;if(E<
0)E=0;if(E===this.Gm)return;this.Gm=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.
Bc(this.M);},Aj:function(E){if(E)this.CQ(0x400,0x0);else this.CQ(0x0,0x400);},Fe:
function(){var B;return((this.S&0x1)===0x1);},W:function(E){if(E)this.CQ(0x1,0x0
);else this.CQ(0x0,0x1);},Dd:function(){var B;if(!this.Ah)return EG;var Bm=this.
JF;var CT=this.Ah.FrameSize;var Ba=this.M;var width=Ba[2]-Ba[0];var height=Ba[3]-
Ba[1];if(!CT[0]||!CT[1])return EG;var CS=[0,0,width,height];var BQ=CS;if(((Bm&0x40
)===0x40)){var AX_=((((CS[2]-CS[0])<<16)+((CT[0]/2)|0))/CT[0])|0;var Axw=((((CS[
3]-CS[1])<<16)+((CT[1]/2)|0))/CT[1])|0;var AgJ=AX_;if(Axw>AgJ)AgJ=Axw;BQ=A.aaO(BQ
,((CT[0]*AgJ)+32768)>>16);BQ=A.aaL(BQ,((CT[1]*AgJ)+32768)>>16);}else if(((Bm&0x80
)===0x80)){var AX_=((((CS[2]-CS[0])<<16)+((CT[0]/2)|0))/CT[0])|0;var Axw=((((CS[
3]-CS[1])<<16)+((CT[1]/2)|0))/CT[1])|0;var AgJ=AX_;if(Axw<AgJ)AgJ=Axw;BQ=A.aaO(BQ
,((CT[0]*AgJ)+32768)>>16);BQ=A.aaL(BQ,((CT[1]*AgJ)+32768)>>16);}else if(!((Bm&0x100
)===0x100))BQ=A.aaN(BQ,CT);if((BQ[2]-BQ[0])!==(CS[2]-CS[0])){if(((Bm&0x4)===0x4)
)BQ=A.aaP(BQ,CS[2]-(BQ[2]-BQ[0]));else if(((Bm&0x2)===0x2))BQ=A.aaP(BQ,(CS[0]+(((
CS[2]-CS[0])/2)|0))-(((BQ[2]-BQ[0])/2)|0));}if((BQ[3]-BQ[1])!==(CS[3]-CS[1])){if(((
Bm&0x20)===0x20))BQ=A.aaR(BQ,CS[3]-(BQ[3]-BQ[1]));else if(((Bm&0x10)===0x10))BQ=
A.aaR(BQ,(CS[1]+(((CS[3]-CS[1])/2)|0))-(((BQ[3]-BQ[1])/2)|0));}BQ=A.aam(BQ,Ba.slice(
0,2));return BQ;},BdI:function(){return this.AV;},ANQ:function(){return this.Sr;
},_Init:function(aArg){A.Core.Em._Init.call(this,aArg);this.__proto__=C.Am;},_Mark:
function(D){var B;A.Core.Em._Mark.call(this,D);if((B=this.timer)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Views::Image"};C.Text={Co:null,Eu:null,Cs:A.jm,String:A.jm,Nx:null,Aj7:A.vw,IG:
0,Rz:0,AaB:0,Br:A.vw,JF:0x12,AV:0xFFFFFFFF,Ady:false,Y3:false,Wy:false,AJN:false
,Hk:false,Kx:function(){if(!!this.Nx){this.AWx(this.Nx);this.Nx=null;}},JH:function(
CJ,aClip,aOffset,B5,aBlend){var B;if((this.Cs===A.jm)||!this.Co)return;var Bm=this.
JF;var font=this.Co;var CS=A.aam(this.M,aOffset);var Di;var Dq;var Dp;var Do;var
col=this.AV;var JD=(((B5+1)*255)>>8)+1;var JB=this.Cs.charCodeAt(0)||0;var Ay=A.
aam(this.Dd(),aOffset);var Bj=[CS[0]-Ay[0],(CS[1]-Ay[1])-font.Ascent];if(JB<1)return;
Di=Dq=Do=Dp=col;if(JD<256){Di=(Di&0x00FFFFFF)|((((((Di>>24)&0xFF)*JD)>>8)&0xFF)<<
24);Dq=(Dq&0x00FFFFFF)|((((((Dq>>24)&0xFF)*JD)>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF)|((((((
Dp>>24)&0xFF)*JD)>>8)&0xFF)<<24);Do=(Do&0x00FFFFFF)|((((((Do>>24)&0xFF)*JD)>>8)&
0xFF)<<24);}if(((Bm&0x80)===0x80)){if(this.AhL())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~
0x80)|0x1;}if((JB===1)&&!((Bm&0x40)===0x40)){CJ.A0l(aClip,font,this.Cs,2,(this.Cs.
charCodeAt(1)||0)-1,CS,Bj,0,0,Di,Dq,Dp,Do,true);return;}var leading=font.Leading;
if(this.Rz>0)leading=(this.Rz-font.Ascent)-font.Descent;var Aj0=(font.Ascent+font.
Descent)+leading;var BqV=aClip[1]-Ay[1];var BqW=aClip[3]-Ay[1];var AVM=Ay[2]-Ay[
0];var C6=0;var P=1;var BF=this.Cs.charCodeAt(1)||0;while(((C6+Aj0)<BqV)&&(BF>0)
){P=P+BF;C6=C6+Aj0;BF=this.Cs.charCodeAt(P)||0;}while((C6<BqW)&&(BF>0)){var Ls=A.
aaj(Bj,[0,C6]);var Aj1=0;var Om=false;if(((((Bm&0x40)===0x40)&&((this.Cs.charCodeAt((
P+BF)-1)||0)!==0x0A))&&((this.Cs.charCodeAt(P+1)||0)!==0x0A))&&((this.Cs.charCodeAt(
P+BF)||0)!==0x00))Om=true;if(Om&&!!(Bm&0x6)){var Anm=P+BF;var AvR=this.Cs.indexOf(
String.fromCharCode(0x20),P+1);var AvS=this.Cs.indexOf(String.fromCharCode(0xA0)
,P+1);if(((AvR<0)||(AvR>=Anm))&&((AvS<0)||(AvS>=Anm)))Om=false;}if(Om)Aj1=AVM;else
if(((Bm&0x4)===0x4))Ls=[(Ls[0]-AVM)+font.WG(this.Cs,P+1,BF-1),Ls[1]];else if(((Bm&
0x2)===0x2))Ls=[(Ls[0]-((AVM/2)|0))+((font.WG(this.Cs,P+1,BF-1)/2)|0),Ls[1]];CJ.
A0l(aClip,font,this.Cs,P+1,BF-1,CS,Ls,Aj1,0,Di,Dq,Dp,Do,true);P=P+BF;C6=C6+Aj0;BF=
this.Cs.charCodeAt(P)||0;}},G:function(E){var B;if(A.z9(E,this.M))return;var A_R;
A_R=((B=this.M)[2]-B[0])!==(E[2]-E[0]);if((((A_R&&!this.AaB)&&this.Ady)&&this.Hk
)&&!((this.S&0x2000)===0x2000)){this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op],this
);}if(((this.Wy&&this.Hk)&&!A.z8([(B=this.M)[2]-B[0],B[3]-B[1]],[E[2]-E[0],E[3]-
E[1]]))&&!((this.S&0x2000)===0x2000)){this.Cs=A.jm;this.Hk=false;A.ow([this,this.
Op],this);}A.Core.Em.G.call(this,E);A.ow([this,this.AgE],this);},BqN:function(aBidi
,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.ze(aBidi,aRowStart,aRowEnd
,aIndex);return aIndex;},BqM:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)
return aIndex;aIndex=A.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},AWx:function(
aBidi){if(!aBidi)return;A.qU(aBidi);},Bq8:function(aSize){var bidi=null;bidi=A.vj(
aSize);return bidi;},AgE:function(H){A.ow(this.Eu,this);},Op:function(H){A.ow([this
,this.VX],this);},VX:function(H){var B;if(this.Hk)return;var width=(B=this.M)[2]-
B[0];var height=(B=this.M)[3]-B[1];var VO=-1;var font=this.Co;if((!!font&&!!!font.
Ascent)&&!!!font.Descent)font=null;if(this.Ady){if(this.AaB>0)VO=this.AaB;else if(
!this.Y3)VO=width-(this.IG*2);else VO=width;if(VO<0)VO=1;}if(!!this.Nx){this.AWx(
this.Nx);this.Nx=null;}this.Hk=true;if((this.String!==A.jm)&&!!font){var length=
this.String.length;if(this.AJN)this.Nx=this.Bq8(length);this.Cs=font.BgW(this.String
,0,VO,length,this.Nx);if(!!this.Nx&&!this.Bcj()){this.AWx(this.Nx);this.Nx=null;
}}else this.Cs=A.jm;this.Aj7=BI;if(((this.Wy&&(this.Cs!==A.jm))&&!this.Y3)&&!!font
){var Bm=this.JF;var leading=font.Leading;var H5=this.Cs;var AGT=this.AhL();if(((
Bm&0x80)===0x80)){if(AGT)Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(this.Rz>0)
leading=(this.Rz-font.Ascent)-font.Descent;var Axr=(font.Ascent+font.Descent)+leading;
var JB=H5.charCodeAt(0)||0;var AjE=((height+leading)/Axr)|0;var AV1=false;var AFG=
false;if(AjE<=0)AjE=1;if(JB>AjE){var A5=0;var Axs=0;var AGR=JB-1;var Kk;var MH=H5.
length;var tmp=A.jm;if(!!(Bm&0x110)&&!!(Bm&0x28))Bm&=~0x110;if(!!(Bm&0x110))Bm&=
~0x28;if(((Bm&0x20)===0x20))Axs=JB-AjE;else if(((Bm&0x10)===0x10)||((Bm&0x100)===
0x100)){Axs=((JB-AjE)/2)|0;AGR=(Axs+AjE)-1;}else AGR=AjE-1;AV1=Axs>0;AFG=AGR<(JB-
1);for(Kk=1;A5<Axs;A5=A5+1)Kk=Kk+(H5.charCodeAt(Kk)||0);if(AFG)for(MH=Kk;A5<AGR;
A5=A5+1)MH=MH+(H5.charCodeAt(MH)||0);if(AV1){var Is=H5.charCodeAt(Kk)||0;tmp=(Gr+
A.aaY(H5,Kk,Is))+Gr;tmp=A.aaT(tmp,0,(Is+2)&0xFFFF);Kk=Kk+Is;if((tmp.charCodeAt(Is
)||0)===0x0A){tmp=A.aaT(tmp,Is,0xFEFF);tmp=A.aaT(tmp,Is+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(tmp,1,0x0A);}else tmp=A.aaT(tmp
,1,0xFEFF);}tmp=tmp+A.aaY(H5,Kk,MH-Kk);if(AFG&&(MH>=Kk)){var Is=H5.charCodeAt(MH
)||0;var Px=(Gr+A.aaY(H5,MH,Is))+Gr;Px=A.aaT(Px,0,(Is+2)&0xFFFF);Px=A.aaT(Px,1,0xFEFF
);if((Px.charCodeAt(Is)||0)===0x0A){Px=A.aaT(Px,Is,0xFEFF);Px=A.aaT(Px,Is+1,0x0A
);}if((Px.charCodeAt(2)||0)===0x0A){Px=A.aaT(Px,2,0xFEFF);Px=A.aaT(Px,1,0x0A);}else
Px=A.aaT(Px,1,0xFEFF);tmp=tmp+Px;}H5=String.fromCharCode(AjE&0xFFFF)+tmp;}var A5=
0;var inx=1;var AGr=width-(this.IG*2);if(this.Ady&&(this.AaB>0))AGr=this.AaB;JB=
H5.charCodeAt(0)||0;for(;A5<JB;A5=A5+1){var AjY=AV1&&!A5;var AjZ=AFG&&(A5===(JB-
1));var VE=false;var VF=false;var Are=AGT;if((AGT&&AjY)&&!AjZ){AjY=false;AjZ=true;
}else if((AGT&&AjZ)&&!AjY){AjZ=false;AjY=true;}var VY=inx+1;var Is=H5.charCodeAt(
inx)||0;var Kk=VY;var MH=(VY+Is)-2;var AWN=-1;var AWO=-1;if(!this.Ady&&(font.WG(
H5,VY,Is-1)>AGr)){var Aml=Bm;if(((Aml&0x2)===0x2)&&!!(Aml&0x5))Aml&=~0x2;if(((Aml&
0x2)===0x2))Aml&=~0x5;if(((Aml&0x4)===0x4))VE=true;else if(((Aml&0x2)===0x2)){VE=
true;VF=true;}else VF=true;}if((H5.charCodeAt(Kk)||0)===0x0A)Kk=Kk+1;if((H5.charCodeAt(
MH)||0)===0x0A)MH=MH-1;while(VE&&((H5.charCodeAt(Kk)||0)===0xFEFF))Kk=Kk+1;while(
VF&&((H5.charCodeAt(MH)||0)===0xFEFF))MH=MH-1;VE=VE&&!AjZ;VF=VF&&!AjY;while((((VE||
VF)||AjY)||AjZ)&&(Kk<MH)){if((VE&&(Are||!VF))||AjY){if(AWN>0)H5=A.aaT(H5,AWN,0xFEFF
);H5=A.aaT(H5,Kk,0x2026);AWN=Kk;Kk=Kk+1;Are=!Are;AjY=false;if(font.WG(H5,VY,Is-1
)<=AGr){VE=false;VF=false;}else VE=VE||!VF;}if((VF&&(!Are||!VE))||AjZ){if(AWO>0)
H5=A.aaT(H5,AWO,0xFEFF);H5=A.aaT(H5,MH,0x2026);AWO=MH;MH=MH-1;Are=!Are;AjZ=false;
if(font.WG(H5,VY,Is-1)<=AGr){VE=false;VF=false;}else VF=VF||!VE;}}inx=inx+Is;}this.
Aj7=[font.A0O(H5),((H5.charCodeAt(0)||0)*Axr)-leading];this.Cs=H5;}if(this.Y3&&(
this.Cs!==A.jm)){var Aq2=[this.IG,0];this.S=this.S|0x2000;this.G(A.aal(A.z4(this.
Dd(),Aq2),this.Br));this.S=this.S&~0x2000;}if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.M);A.ow([this,this.AgE],this);},Bfb:function(E){if(E===this.AJN)return;
this.AJN=E;this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op],this);},HT:function(E){
if(E<0)E=0;if(this.IG===E)return;this.IG=E;this.Cs=A.jm;this.Hk=false;A.ow([this
,this.Op],this);},Bgo:function(E){var B;if(E<0)E=0;if(this.Rz===E)return;this.Rz=
E;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);if(this.Wy){this.Cs=A.jm;
this.Hk=false;A.ow([this,this.Op],this);}if(this.Y3&&this.Hk)this.G(A.aal(this.Dd(
),this.Br));if(this.Hk)A.ow([this,this.AgE],this);},Bfa:function(E){if(E===this.
Wy)return;this.Wy=E;if(((this.Ady&&!!!this.AaB)||E)||!!this.Eu)this.S=this.S&~0x100;
else this.S=this.S|0x100;this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op],this);},
Rr:function(E){if(A.z$(E,this.Eu))return;this.Eu=E;if(((!!!this.AaB&&this.Ady)||
!!E)||this.Wy)this.S=this.S&~0x100;else this.S=this.S|0x100;},IZ:function(E){if(
E===this.Y3)return;this.Y3=E;if(E&&this.Wy){this.Cs=A.jm;this.Hk=false;A.ow([this
,this.Op],this);}if(E&&this.Hk){var Aq2=[this.IG,0];this.S=this.S|0x2000;this.G(
A.aal(A.z4(this.Dd(),Aq2),this.Br));this.S=this.S&~0x2000;}},BgH:function(E){if(
E<0)E=0;if(E===this.AaB)return;this.AaB=E;if(this.Ady&&this.Hk){this.Cs=A.jm;this.
Hk=false;A.ow([this,this.Op],this);}if(((!!!E&&this.Ady)||this.Wy)||!!this.Eu)this.
S=this.S&~0x100;else this.S=this.S|0x100;},KF:function(E){if(E===this.Ady)return;
this.Ady=E;if(this.Hk){this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op],this);}if(((
E&&!!!this.AaB)||this.Wy)||!!this.Eu)this.S=this.S&~0x100;else this.S=this.S|0x100;
},Gk:function(E){var B;if(A.z8(E,this.Br))return;this.Br=E;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.M);if(this.Hk)A.ow([this,this.AgE],this);},A0:function(
E){var B;if(E===this.JF)return;this.JF=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.M);if(this.Wy){this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op],this);}
if(this.Hk)A.ow([this,this.AgE],this);},R:function(E){if(E===this.String)return;
this.String=E;this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op],this);},Y:function(
E){if(E===this.Co)return;this.Co=E;this.Cs=A.jm;this.Hk=false;A.ow([this,this.Op
],this);},L:function(E){var B;if(E===this.AV)return;this.AV=E;if(!!this.Aa&&((this.
S&0x1)===0x1))this.Aa.Bc(this.M);},Aj:function(E){if(E)this.CQ(0x400,0x0);else this.
CQ(0x0,0x400);},Fe:function(){var B;return((this.S&0x1)===0x1);},W:function(E){if(
E)this.CQ(0x1,0x0);else this.CQ(0x0,0x1);},AhL:function(){if(!this.Hk)this.VX(this
);if(!this.Nx)return false;var result=false;var bidi=this.Nx;result=A.vi(bidi);return result;
},Bcj:function(){if(!this.Hk)this.VX(this);if(!this.Nx)return false;var result=false;
var bidi=this.Nx;result=A.zc(bidi);return result;},A40:function(aIndex){if(((this.
String===A.jm)||!this.Co)||this.Wy)return BI;if(!this.Hk)this.VX(this);if(aIndex<
0)aIndex=0;var Bsf=(this.Cs.charCodeAt(0)||0)-1;var Lx=this.Cs.charCodeAt(1)||0;
var inx=1;var AgN=2;var A5=0;var col=-1;var DW=true;aIndex=aIndex+2;while((A5<Bsf
)&&((inx+Lx)<=aIndex)){inx=inx+Lx;A5=A5+1;AgN=AgN+1;aIndex=aIndex+1;Lx=this.Cs.charCodeAt(
inx)||0;}if(aIndex>(inx+Lx))aIndex=inx+Lx;if(!!this.Nx)aIndex=(inx+this.BqM(this.
Nx,(inx+1)-AgN,(inx+Lx)-AgN,(aIndex-inx)-1))+1;for(;aIndex>inx;inx=inx+1){var Yr=
this.Cs.charCodeAt(inx+1)||0;if(DW)col=col+1;DW=(Yr!==0xFEFF)&&(Yr!==0x0A);}return[
col,A5];},ACr:function(Amd){if(((this.String===A.jm)||!this.Co)||this.Wy)return 0;
if(!this.Hk)this.VX(this);var A5=Amd[1];var col=Amd[0];var inx=1;var AgN=2;var JB=
this.Cs.charCodeAt(0)||0;var Lx=this.Cs.charCodeAt(1)||0;if(A5>=JB){A5=JB-1;col=
this.Cs.length;}if(A5<0){A5=0;col=0;}if(col<0)col=0;while((A5>0)&&(Lx>0)){inx=inx+
Lx;A5=A5-1;AgN=AgN+1;Lx=this.Cs.charCodeAt(inx)||0;}var VL=inx;var AGS=(inx-AgN)+
1;var Anm=(AGS+Lx)-1;var Axf=false;while((col>=0)&&(Lx>1)){var Yr=this.Cs.charCodeAt(
inx+1)||0;inx=inx+1;Lx=Lx-1;Axf=(Yr===0xFEFF)||(Yr===0x0A);if(!Axf){col=col-1;VL=
inx;}}if((!Axf&&(col>=0))&&((this.Cs.charCodeAt(inx+1)||0)===0x00))Axf=true;if(Axf
)VL=VL+1;VL=VL-AgN;if(!!this.Nx)VL=AGS+this.BqN(this.Nx,AGS,Anm,VL-AGS);return VL;
},Bg1:function(Ke){var B;if((this.String===A.jm)||!this.Co)return BI;if(!this.Hk
)this.VX(this);var Ay=this.Dd();if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return BI;var font=
this.Co;var Bm=this.JF;var JB=this.Cs.charCodeAt(0)||0;var leading=font.Leading;
if(Ke[1]<Ay[1])Ke=[Ke[0],Ay[1]];if(Ke[1]>=Ay[3])Ke=[Ke[0],Ay[3]-1];if(this.Rz>0)
leading=(this.Rz-font.Ascent)-font.Descent;var Aj0=(font.Ascent+font.Descent)+leading;
var A5=((Ke[1]-Ay[1])/Aj0)|0;var MN=this.AKw(A5);var Lx=MN.length;var Om=false;if(((
Bm&0x80)===0x80)){if(this.AhL())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(((Bm&
0x40)===0x40)&&(A5<(JB-1)))Om=true;if((Om&&(MN.indexOf(String.fromCharCode(0x20)
,0)<0))&&(MN.indexOf(String.fromCharCode(0xA0),0)<0))Om=false;if(Om){var inx=1;var
Anl=A5;while(Anl>0){inx=inx+(this.Cs.charCodeAt(inx)||0);Anl=Anl-1;}if(((this.Cs.
charCodeAt(inx+1)||0)===0x0A)||((this.Cs.charCodeAt((inx+(this.Cs.charCodeAt(inx
)||0))-1)||0)===0x0A))Om=false;}var Aj1=0;var Fy=0;if(Om)Aj1=Ay[2]-Ay[0];else if(((
Bm&0x4)===0x4))Fy=(Ay[2]-Ay[0])-font.WG(MN,0,Lx);else if(((Bm&0x2)===0x2))Fy=(((
Ay[2]-Ay[0])/2)|0)-((font.WG(MN,0,Lx)/2)|0);var col=font.BbX(MN,0,Lx,(Ke[0]-Ay[0
])-Fy,Aj1);if(col<0)col=0;return[col,A5];},Alx:function(Amd){var B;if((this.String===
A.jm)||!this.Co)return BI;if(!this.Hk)this.VX(this);var JB=this.Cs.charCodeAt(0)||
0;var font=this.Co;var Bm=this.JF;var A5=Amd[1];var col=Amd[0];if(A5>=JB){A5=JB-
1;col=this.Cs.length;}if(A5<0){A5=0;col=0;}var MN=this.AKw(A5);var Lx=MN.length;
var Ay=this.Dd();var Om=false;var leading=font.Leading;if(((Bm&0x80)===0x80)){if(
this.AhL())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(((Bm&0x40)===0x40)&&(A5<(
JB-1)))Om=true;if((Om&&(MN.indexOf(String.fromCharCode(0x20),0)<0))&&(MN.indexOf(
String.fromCharCode(0xA0),0)<0))Om=false;if(Om){var inx=1;var Anl=A5;while(Anl>0
){inx=inx+(this.Cs.charCodeAt(inx)||0);Anl=Anl-1;}if(((this.Cs.charCodeAt(inx+1)||
0)===0x0A)||((this.Cs.charCodeAt((inx+(this.Cs.charCodeAt(inx)||0))-1)||0)===0x0A
))Om=false;}if(this.Rz>0)leading=(this.Rz-font.Ascent)-font.Descent;var C6=(Ay[1
]+(A5*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Aj1=0;var Fy=Ay[0];
if(Om)Aj1=Ay[2]-Ay[0];else if(((Bm&0x4)===0x4))Fy=Ay[2]-font.WG(MN,0,Lx);else if(((
Bm&0x2)===0x2))Fy=(Fy+(((Ay[2]-Ay[0])/2)|0))-((font.WG(MN,0,Lx)/2)|0);var pos=font.
BbT(MN,0,Lx,col,Aj1);if(pos<0)pos=0;return[Fy+pos,C6];},AKv:function(Z){var B;if((
this.String===A.jm)||!this.Co)return EG;if(!this.Hk)this.VX(this);var JB=this.Cs.
charCodeAt(0)||0;var font=this.Co;if((Z<0)||((Z>=JB)&&(Z>0)))return EG;var Bm=this.
JF;var inx=1;var leading=font.Leading;var Ba=this.M;var width=Ba[2]-Ba[0];var height=
Ba[3]-Ba[1];width=width-(this.IG*2);if(((Bm&0x80)===0x80)){if(this.AhL())Bm=(Bm&
~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if(this.Rz>0)leading=(this.Rz-font.Ascent)-font.
Descent;var C6=Z*((font.Ascent+font.Descent)+leading);var Fy=0;while(Z>0){inx=inx+(
this.Cs.charCodeAt(inx)||0);Z=Z-1;}var Axt=(this.Cs.charCodeAt(inx)||0)-1;var A_S=
font.WG(this.Cs,inx+1,Axt);var AX8=font.A0X(this.Cs,inx+1,Axt);var Ann=A_S;var Aj0=
font.Ascent+font.Descent;var AxI=(JB*((font.Ascent+font.Descent)+leading))-leading;
if(!JB)AxI=Aj0;if((((this.Cs.charCodeAt((inx+Axt)+1)||0)===0x00)||((this.Cs.charCodeAt(
inx+Axt)||0)===0x0A))||((this.Cs.charCodeAt(inx+1)||0)===0x0A))Bm=Bm&~0x40;if(((
Bm&0x40)===0x40)){var Anm=(inx+1)+Axt;var AvR=this.Cs.indexOf(String.fromCharCode(
0x20),inx+1);var AvS=this.Cs.indexOf(String.fromCharCode(0xA0),inx+1);if(((AvR>=
0)&&(AvR<Anm))||((AvS>=0)&&(AvS<Anm)))Ann=width;}if((!!(Bm&0x110)&&!!(Bm&0x28))&&(
AxI>height))Bm&=~0x110;if(!!(Bm&0x110))Bm&=~0x28;if((((Bm&0x2)===0x2)&&!!(Bm&0x5
))&&(Ann>width))Bm&=~0x2;if(((Bm&0x2)===0x2))Bm&=~0x5;if(((Bm&0x4)===0x4))Fy=width-
Ann;else if(((Bm&0x2)===0x2))Fy=((width/2)|0)-((Ann/2)|0);if(((Bm&0x20)===0x20))
C6=C6+(height-AxI);else if(((Bm&0x100)===0x100))C6=((C6+((height/2)|0))-((AxI/2)|
0))+(((this.Co.Descent-this.Co.Ascent)/2)|0);else if(((Bm&0x10)===0x10))C6=(C6+((
height/2)|0))-((AxI/2)|0);Fy=(Fy+AX8[0])+this.IG;Ann=(Ann+(AX8[2]-AX8[0]))-A_S;var
BQ;{var A_k=[Ba[0]+Fy,Ba[1]+C6];BQ=[].concat(A_k,A.aak(A_k,[Ann,Aj0]));}return A.
aam(BQ,this.Br);},AKw:function(Z){if((this.String===A.jm)||!this.Co)return A.jm;
if(!this.Hk)this.VX(this);var JB=this.Cs.charCodeAt(0)||0;var inx=1;if((!this.Co||(
Z<0))||(Z>=JB))return A.jm;while(Z>0){inx=inx+(this.Cs.charCodeAt(inx)||0);Z=Z-1;
}var VY=inx;var AqF=inx+(this.Cs.charCodeAt(inx)||0);var Yr=0x00;do{VY=VY+1;Yr=this.
Cs.charCodeAt(VY)||0;}while(((Yr===0xFEFF)||(Yr===0x0A))&&(VY<=AqF));do{AqF=AqF-
1;Yr=this.Cs.charCodeAt(AqF)||0;}while(((Yr===0xFEFF)||(Yr===0x0A))&&(VY<=AqF));
var MN=A.aaY(this.Cs,VY,(AqF-VY)+1);var AmS;for(AmS=MN.indexOf(String.fromCharCode(
0xFEFF),0);AmS>=0;AmS=MN.indexOf(String.fromCharCode(0xFEFF),AmS+1)){var VL=AmS+
1;while((MN.charCodeAt(VL)||0)===0xFEFF)VL=VL+1;MN=A.aa3(MN,AmS,VL-AmS);}return MN;
},Dd:function(){var B;if((this.String===A.jm)||!this.Co)return EG;if(!this.Hk)this.
VX(this);if(this.Cs===A.jm)return EG;var leading=this.Co.Leading;var Axr=(this.Co.
Ascent+this.Co.Descent)+this.Co.Leading;if(this.Rz>0){leading=(this.Rz-this.Co.Ascent
)-this.Co.Descent;Axr=this.Rz;}if(A.z8(this.Aj7,BI))this.Aj7=[this.Co.A0O(this.Cs
),this.Aj7[1]];this.Aj7=[this.Aj7[0],((this.Cs.charCodeAt(0)||0)*Axr)-leading];var
Bm=this.JF;var Ba=this.M;var Aq2=this.IG;var width=Ba[2]-Ba[0];var height=Ba[3]-
Ba[1];var CS=[Aq2,0,width-Aq2,height];var BQ=[].concat(CS.slice(0,2),A.aak(CS.slice(
0,2),this.Aj7));if(((Bm&0x80)===0x80)){if(this.AhL())Bm=(Bm&~0x80)|0x4;else Bm=(
Bm&~0x80)|0x1;}if(((Bm&0x40)===0x40)){var VO=this.AaB;if(VO<=0)VO=width-(this.IG
*2);if(VO<0)VO=0;if(VO>(BQ[2]-BQ[0]))BQ=A.aaO(BQ,VO);}if((!!(Bm&0x110)&&!!(Bm&0x28
))&&((BQ[3]-BQ[1])>(CS[3]-CS[1])))Bm&=~0x110;if(!!(Bm&0x110))Bm&=~0x28;if((((Bm&
0x2)===0x2)&&!!(Bm&0x5))&&((BQ[2]-BQ[0])>(CS[2]-CS[0])))Bm&=~0x2;if(((Bm&0x2)===
0x2))Bm&=~0x5;if((BQ[2]-BQ[0])!==(CS[2]-CS[0])){if(((Bm&0x4)===0x4))BQ=A.aaP(BQ,
CS[2]-(BQ[2]-BQ[0]));else if(((Bm&0x2)===0x2))BQ=A.aaP(BQ,(CS[0]+(((CS[2]-CS[0])
/2)|0))-(((BQ[2]-BQ[0])/2)|0));}if((BQ[3]-BQ[1])!==(CS[3]-CS[1])){if(((Bm&0x20)===
0x20))BQ=A.aaR(BQ,CS[3]-(BQ[3]-BQ[1]));else if(((Bm&0x100)===0x100))BQ=A.aaR(BQ,((
CS[1]+(((CS[3]-CS[1])/2)|0))-(((BQ[3]-BQ[1])/2)|0))+(((this.Co.Descent-this.Co.Ascent
)/2)|0));else if(((Bm&0x10)===0x10))BQ=A.aaR(BQ,(CS[1]+(((CS[3]-CS[1])/2)|0))-(((
BQ[3]-BQ[1])/2)|0));}BQ=A.aam(BQ,Ba.slice(0,2));return A.aam(BQ,this.Br);},_Init:
function(aArg){A.Core.Em._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(
){this.Kx();this.__proto__=A.Core.Em;A.Core.Em._Done.call(this);},_Mark:function(
D){var B;A.Core.Em._Mark.call(this,D);if((B=this.Co)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::Text"
};C.ArK={attrString:null,AttrSet:null,String:A.jm,JF:0x12,JH:function(CJ,aClip,aOffset
,B5,aBlend){var B;if(!this.attrString||!this.AttrSet)return;var Ay=this.Dd();B5=
B5+1;if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return;CJ.Ba4(aClip,this.AttrSet,this.attrString
,A.aam(this.M,aOffset),A.aaj(this.M.slice(0,2),Ay.slice(0,2)),(B5*255)>>8,(B5*255
)>>8,(B5*255)>>8,(B5*255)>>8,true);},G:function(E){var B;if(A.z9(E,this.M))return;
if(((((B=this.M)[2]-B[0])!==(E[2]-E[0]))&&!!this.attrString)&&!((this.S&0x2000)===
0x2000)){this.attrString=null;A.ow([this,this.Op],this);}A.Core.Em.G.call(this,E
);A.ow([this,this.AgE],this);},AgE:function(H){},VX:function(H){var B;var AHl;AHl=(
B=this.M)[2]-B[0];if(AHl<0)AHl=1;if((this.String===A.jm)||!this.AttrSet)this.attrString=
null;if((!this.attrString&&(this.String!==A.jm))&&!!this.AttrSet)this.attrString=
A._NewObject(A.Graphics.AZj,0);if(!!this.attrString)this.attrString.BgV(this.AttrSet
,this.String,AHl,false);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);A.
ow([this,this.AgE],this);},Op:function(H){A.ow([this,this.VX],this);},A_M:function(
H){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},A0:function(E){
var B;E&=~0x140;if(E===this.JF)return;this.JF=E;if(!!this.Aa&&((this.S&0x1)===0x1
))this.Aa.Bc(this.M);A.ow([this,this.AgE],this);},R:function(E){if(this.String===
E)return;this.String=E;this.attrString=null;A.ow([this,this.Op],this);},A3e:function(
E){if(this.AttrSet===E)return;if(!!this.AttrSet){A.zl([this,this.A_M],this.AttrSet
,0);A.zl([this,this.Op],this.AttrSet,1);}this.AttrSet=E;this.attrString=null;if(
!!this.AttrSet){A.y_([this,this.A_M],this.AttrSet,0);A.y_([this,this.Op],this.AttrSet
,1);}A.ow([this,this.Op],this);},Dd:function(){var B;if((this.String===A.jm)||!this.
AttrSet)return EG;if(!this.attrString)this.VX(this);if(!this.attrString)return EG;
var Bm=this.JF;var CT=this.attrString.BbY();var CS=A.z4(this.M,BI);var BQ=[].concat(
CS.slice(0,2),A.aak(CS.slice(0,2),CT));if(!CT[0]||!CT[1])return EG;if(((Bm&0x80)===
0x80)){if(this.attrString.AhL())Bm=(Bm&~0x80)|0x4;else Bm=(Bm&~0x80)|0x1;}if((BQ[
2]-BQ[0])!==(CS[2]-CS[0])){if(((Bm&0x4)===0x4))BQ=A.aaP(BQ,CS[2]-(BQ[2]-BQ[0]));
else if(((Bm&0x2)===0x2))BQ=A.aaP(BQ,(CS[0]+(((CS[2]-CS[0])/2)|0))-(((BQ[2]-BQ[0
])/2)|0));}if((BQ[3]-BQ[1])!==(CS[3]-CS[1])){if(((Bm&0x20)===0x20))BQ=A.aaR(BQ,CS[
3]-(BQ[3]-BQ[1]));else if(((Bm&0x10)===0x10))BQ=A.aaR(BQ,(CS[1]+(((CS[3]-CS[1])/
2)|0))-(((BQ[3]-BQ[1])/2)|0));}return BQ;},_Init:function(aArg){A.Core.Em._Init.
call(this,aArg);this.__proto__=C.ArK;this.S=0x3;},_Mark:function(D){var B;A.Core.
Em._Mark.call(this,D);if((B=this.attrString)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AttrSet)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::AttrText"
};C.AfS={E_:null,Age:0,Agd:0,Ts:A.vw,B6:A.aan(4,3,0,null),ACN:A.vw,R5:0,Am4:0,J9:
function(E){if(A.z8(E,this.JP))return;A.Core.XI.J9.call(this,E);this.B6.Set(3,0,
E[0]);this.B6.Set(3,1,E[1]);this.B6.Set(3,2,1);this.R5=0x45;this.E_=null;A.ow([this
,this.Aqh],this);},J8:function(E){if(A.z8(E,this.LY))return;A.Core.XI.J8.call(this
,E);this.B6.Set(2,0,E[0]);this.B6.Set(2,1,E[1]);this.B6.Set(2,2,1);this.R5=0x45;
this.E_=null;A.ow([this,this.Aqh],this);},D$:function(E){if(A.z8(E,this.EN))return;
A.Core.XI.D$.call(this,E);this.B6.Set(1,0,E[0]);this.B6.Set(1,1,E[1]);this.B6.Set(
1,2,1);this.R5=0x45;this.E_=null;A.ow([this,this.Aqh],this);},Eg:function(E){if(
A.z8(E,this.EV))return;A.Core.XI.Eg.call(this,E);this.B6.Set(0,0,E[0]);this.B6.Set(
0,1,E[1]);this.B6.Set(0,2,1);this.R5=0x45;this.E_=null;A.ow([this,this.Aqh],this
);},AVU:function(){return;},Arr:function(H){var B;if(this.R5===0x00)return;if(this.
R5===0x45){var Kl=A._NewObject(A.Graphics.AuC,0);Kl=Kl.BaS(this.B6.Get(0,0),this.
B6.Get(0,1),this.B6.Get(1,0),this.B6.Get(1,1),this.B6.Get(2,0),this.B6.Get(2,1),
this.B6.Get(3,0),this.B6.Get(3,1));if(!!Kl){Kl.Ays(0,0);this.B6.Set(0,2,Kl.Th*240
);Kl.Ays(1,0);this.B6.Set(1,2,Kl.Th*240);Kl.Ays(1,1);this.B6.Set(2,2,Kl.Th*240);
Kl.Ays(0,1);this.B6.Set(3,2,Kl.Th*240);}this.AVU();}if((((this.R5===0x4D)&&!!this.
E_)&&!!this.Ts[0])&&!!this.Ts[1]){var AgQ=[].concat(BI,this.Ts);var AgP=this.ACN;
var Ad2=AgQ[0]-AgP[0];var AL=AgQ[2]-AgP[0];var DI=AgQ[1]-AgP[1];var Qq=AgQ[3]-AgP[
1];this.E_.Ais(Ad2,DI);this.B6.Set(0,0,this.E_.Tf+this.Agd);this.B6.Set(0,1,this.
E_.Tg+this.Age);this.B6.Set(0,2,this.E_.Th);this.E_.Ais(AL,DI);this.B6.Set(1,0,this.
E_.Tf+this.Agd);this.B6.Set(1,1,this.E_.Tg+this.Age);this.B6.Set(1,2,this.E_.Th);
this.E_.Ais(AL,Qq);this.B6.Set(2,0,this.E_.Tf+this.Agd);this.B6.Set(2,1,this.E_.
Tg+this.Age);this.B6.Set(2,2,this.E_.Th);this.E_.Ais(Ad2,Qq);this.B6.Set(3,0,this.
E_.Tf+this.Agd);this.B6.Set(3,1,this.E_.Tg+this.Age);this.B6.Set(3,2,this.E_.Th);
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.EV=[(this.B6.
Get(0,0)+0.5)|0,(this.B6.Get(0,1)+0.5)|0];this.EN=[(this.B6.Get(1,0)+0.5)|0,(this.
B6.Get(1,1)+0.5)|0];this.LY=[(this.B6.Get(2,0)+0.5)|0,(this.B6.Get(2,1)+0.5)|0];
this.JP=[(this.B6.Get(3,0)+0.5)|0,(this.B6.Get(3,1)+0.5)|0];this.AVU();}this.Am4=
this.R5;this.R5=0x00;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));},Aqh:function(s){this.Arr(s);},Bgt:function(E){if(A.z8(E,this.ACN))return;this.
ACN=E;if((this.Am4!==0x45)&&(this.R5===0x00)){this.R5=this.Am4;A.ow([this,this.Aqh
],this);}},ADd:function(AE3,Kd){var B;if(!Kd)throw new Error(I4);if(!this.E_)this.
E_=A._NewObject(A.Graphics.AuC,0);this.E_.A$4(Kd);this.Agd=AE3[0];this.Age=AE3[1
];this.Am4=0x4D;this.R5=0x00;if(!this.Ts[0]||!this.Ts[1])return;var AgQ=[].concat(
BI,this.Ts);var AgP=this.ACN;var Ad2=AgQ[0]-AgP[0];var AL=AgQ[2]-AgP[0];var DI=AgQ[
1]-AgP[1];var Qq=AgQ[3]-AgP[1];this.E_.Ais(Ad2,DI);this.B6.Set(0,0,this.E_.Tf+this.
Agd);this.B6.Set(0,1,this.E_.Tg+this.Age);this.B6.Set(0,2,this.E_.Th);this.E_.Ais(
AL,DI);this.B6.Set(1,0,this.E_.Tf+this.Agd);this.B6.Set(1,1,this.E_.Tg+this.Age);
this.B6.Set(1,2,this.E_.Th);this.E_.Ais(AL,Qq);this.B6.Set(2,0,this.E_.Tf+this.Agd
);this.B6.Set(2,1,this.E_.Tg+this.Age);this.B6.Set(2,2,this.E_.Th);this.E_.Ais(Ad2
,Qq);this.B6.Set(3,0,this.E_.Tf+this.Agd);this.B6.Set(3,1,this.E_.Tg+this.Age);this.
B6.Set(3,2,this.E_.Th);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent(
));this.EV=[(this.B6.Get(0,0)+0.5)|0,(this.B6.Get(0,1)+0.5)|0];this.EN=[(this.B6.
Get(1,0)+0.5)|0,(this.B6.Get(1,1)+0.5)|0];this.LY=[(this.B6.Get(2,0)+0.5)|0,(this.
B6.Get(2,1)+0.5)|0];this.JP=[(this.B6.Get(3,0)+0.5)|0,(this.B6.Get(3,1)+0.5)|0];
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.GetExtent());this.AVU();},_Init:
function(aArg){A.Core.XI._Init.call(this,aArg);(this.B6=[]).__proto__=C.AfS.B6;this.
__proto__=C.AfS;this.S=0x3;},_Mark:function(D){var B;A.Core.XI._Mark.call(this,D
);if((B=this.E_)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::WarpView"
};C.AQt={EW:null,bitmap:null,O:null,A8A:1,A8B:0,A8C:0,A8D:0,A8E:1,A8F:0,A8G:0,A8H:
0,A8I:1,Gm:255,AGk:false,JH:function(CJ,aClip,aOffset,B5,aBlend){var B;if(!this.
bitmap)return;this.bitmap.Update();var YG=aOffset[0];var YH=aOffset[1];var Ay=[].
concat(BI,this.Ts);aBlend=aBlend&&((this.S&0x2)===0x2);B5=B5+1;var A9o;var A9p;var
A9q;var A9r;var Bsn=this.Gm;A9o=A9p=A9q=A9r=Bsn;var Aje=255|(255<<8)|(255<<16)|((((
B5*A9o)>>8)&0xFF)<<24);var Ajf=255|(255<<8)|(255<<16)|((((B5*A9p)>>8)&0xFF)<<24);
var BqO=255|(255<<8)|(255<<16)|((((B5*A9q)>>8)&0xFF)<<24);var BqP=255|(255<<8)|(
255<<16)|((((B5*A9r)>>8)&0xFF)<<24);aClip=A.z6(aClip,A.aam(EG,aOffset));CJ.AfR(aClip
,this.bitmap,0,this.B6.Get(0,0)+YG,this.B6.Get(0,1)+YH,this.B6.Get(0,2),this.B6.
Get(1,0)+YG,this.B6.Get(1,1)+YH,this.B6.Get(1,2),this.B6.Get(2,0)+YG,this.B6.Get(
2,1)+YH,this.B6.Get(2,2),this.B6.Get(3,0)+YG,this.B6.Get(3,1)+YH,this.B6.Get(3,2
),Ay,Aje,Ajf,BqO,BqP,aBlend,true);},Gh:function(Cw){if(!this.O||!this.EW)return null;
var BK=(A.Core.AbY.isPrototypeOf(Cw)?Cw:null);var DE=(A.Core.AnV.isPrototypeOf(Cw
)?Cw:null);if(!BK&&!DE)return null;var EX=BI;var BZ=this.EW.Aa;while(!!BZ&&(BZ!==
this.O)){EX=A.aaj(EX,BZ.M.slice(0,2));BZ=BZ.Aa;}var X=this.EW;if(!!BK&&!BK.Down)
this.EW=null;if(!!BK){BK.Ho=A.aak(this.AqS(BK.Ho),EX);BK.M0=A.aak(this.AqS(BK.M0
),EX);return X.Gh(BK);}if(!!DE){var Bsr=A.aak(this.AqS(A.aaj(DE.Ho,DE.Dm)),EX);DE.
Ho=A.aak(this.AqS(DE.Ho),EX);DE.M0=A.aak(this.AqS(DE.M0),EX);DE.Dm=A.aaj(DE.Ho,Bsr
);return X.Gh(DE);}return C.AfS.Gh.call(this,Cw);},Wu:function(CX,By,Nt,AaN,AaS,
AaR){var B;if(!this.O||!((this.O.S&0x18)===0x18))return null;var pos=A.zT(CX);pos=
this.AqS(pos);var Ans=[].concat(BI,this.Ts);if(!A.vt(Ans,pos))return null;var I_=
this.O.Wu(A.aam(A.aam([0,0,CX[2]-CX[0],CX[3]-CX[1]],pos),this.O.M.slice(0,2)),By
,Nt,AaN,null,AaR);if(!!I_)this.EW=I_.B4;else this.EW=null;if(!!this.EW)return A.
_NewObject(A.Core.ArQ,0).Initialize(this,BI);return null;},Arr:function(H){C.AfS.
Arr.call(this,H);this.AGk=false;},ADd:function(AE3,Kd){C.AfS.ADd.call(this,AE3,Kd
);this.AGk=false;},Buw:function(){var x1=this.B6.Get(0,0);var y1=this.B6.Get(0,1
);var x2=this.B6.Get(1,0);var y2=this.B6.Get(1,1);var x3=this.B6.Get(2,0);var y3=
this.B6.Get(2,1);var x4=this.B6.Get(3,0);var y4=this.B6.Get(3,1);var Awc=x2-x3;var
Awe=y2-y3;var Awd=x4-x3;var Awf=y4-y3;var AxE=((x1-x2)+x3)-x4;var AxF=((y1-y2)+y3
)-y4;var Amw=(Awc*Awf)-(Awe*Awd);if(!Amw)return;var AqK=((AxE*Awf)-(AxF*Awd))/Amw;
var BG=((Awc*AxF)-(Awe*AxE))/Amw;var a=(x2-x1)+(AqK*x2);var Qq=(x4-x1)+(BG*x4);var
BF=x1;var d=(y2-y1)+(AqK*y2);var AFW=(y4-y1)+(BG*y4);var KX=y1;this.A8A=AFW-(KX*
BG);this.A8B=(BF*BG)-Qq;this.A8C=(Qq*KX)-(BF*AFW);this.A8D=(KX*AqK)-d;this.A8E=a-(
BF*AqK);this.A8F=(BF*d)-(a*KX);this.A8G=(d*BG)-(AFW*AqK);this.A8H=(Qq*AqK)-(a*BG
);this.A8I=(a*AFW)-(Qq*d);this.AGk=true;},AqS:function(E6){var B;if(!this.AGk)this.
Buw();var AYH=E6[0];var AYJ=E6[1];var Ax0=((AYH*this.A8A)+(AYJ*this.A8B))+this.A8C;
var Ax3=((AYH*this.A8D)+(AYJ*this.A8E))+this.A8F;var AXZ=((AYH*this.A8G)+(AYJ*this.
A8H))+this.A8I;if(!!AXZ){Ax0=Ax0/AXZ;Ax3=Ax3/AXZ;}var Ans=[].concat(BI,this.Ts);
Ax0=Ax0*(Ans[2]-Ans[0]);Ax3=Ax3*(Ans[3]-Ans[1]);return A.aak([Ax0|0,Ax3|0],Ans.slice(
0,2));},QA:function(H){var B;var A9s=this.Ts;if(!!this.O)this.bitmap=this.O.Hi;else
this.bitmap=null;if(!!this.bitmap)this.Ts=this.bitmap.FrameSize;else this.Ts=BI;
if(((A.z8(A9s,this.Ts)||((this.Am4===0x45)&&(this.R5===0x00)))&&!!this.Aa)&&((this.
S&0x1)===0x1))this.Aa.Bc(this.GetExtent());if(((this.Am4!==0x45)&&(this.R5===0x00
))&&!A.z8(A9s,this.Ts)){this.R5=this.Am4;A.ow([this,this.Aqh],this);}},DC:function(
E){var B;if(E===this.Gm)return;this.Gm=E;if(!!this.Aa&&((this.S&0x1)===0x1))this.
Aa.Bc(this.GetExtent());},BfF:function(E){if(E===this.O)return;if(!!E&&(E===this.
Aa))throw new Error(Ip);if(!!this.O){A.zl([this,this.QA],this.O,0);this.bitmap=null;
}this.O=E;if(!!E){A.y_([this,this.QA],E,0);this.bitmap=E.Hi;}this.QA(this);},As8:
function(){return this.Gm;},_Init:function(aArg){C.AfS._Init.call(this,aArg);this.
__proto__=C.AQt;},_Mark:function(D){var B;C.AfS._Mark.call(this,D);if((B=this.EW
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.bitmap)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.O)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::WarpGroup"
};C.Ab8={GY:null,AV:0xFFFFFFFF,Dm:A.vw,AKa:false,Kx:function(){this.AV$();},JH:function(
CJ,aClip,aOffset,B5,aBlend){if(!this.GY)return;var Di;var Dq;var Do;var Dp;var BF=
this.AV;B5=B5+1;Di=Dq=Do=Dp=BF;if(B5<256){Di=(Di&0x00FFFFFF)|((((B5*((Di>>24)&0xFF
))>>8)&0xFF)<<24);Dq=(Dq&0x00FFFFFF)|((((B5*((Dq>>24)&0xFF))>>8)&0xFF)<<24);Do=(
Do&0x00FFFFFF)|((((B5*((Do>>24)&0xFF))>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF)|((((B5*((
Dp>>24)&0xFF))>>8)&0xFF)<<24);}CJ.Ab8(aClip,this.GY,A.aam(this.M,aOffset),this.AKa
,this.Dm,Di,Dq,Dp,Do,true,true,0);},AV$:function(){return;},AgV:function(H){var B;
if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},L:function(E){var B;if(E===
this.AV)return;this.AV=E;if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.GY)this.Aa.
Bc(this.M);},Alk:function(E){var B;if(A.z8(E,this.Dm))return;this.Dm=E;if((!!this.
Aa&&((this.S&0x1)===0x1))&&!!this.GY)this.Aa.Bc(this.M);},BfA:function(E){var B;
if(E===this.AKa)return;this.AKa=E;if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.GY
)this.Aa.Bc(this.M);},XB:function(E){var B;if(E===this.GY)return;if(!!this.GY)A.
zl([this,this.AgV],this.GY,0);this.GY=E;if(!!this.GY)A.y_([this,this.AgV],this.GY
,0);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},W:function(E){if(E)this.
CQ(0x1,0x0);else this.CQ(0x0,0x1);},_Init:function(aArg){A.Core.Em._Init.call(this
,aArg);this.__proto__=C.Ab8;},_Done:function(){this.Kx();this.__proto__=A.Core.Em;
A.Core.Em._Done.call(this);},_Mark:function(D){var B;A.Core.Em._Mark.call(this,D
);if((B=this.GY)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Views::FillPath"
};C.GH={GY:null,AV:0xFFFFFFFF,Dm:A.vw,Width:1,Kx:function(){this.AV$();},JH:function(
CJ,aClip,aOffset,B5,aBlend){if(!this.GY)return;var Di;var Dq;var Do;var Dp;var BF=
this.AV;B5=B5+1;Di=Dq=Do=Dp=BF;if(B5<256){Di=(Di&0x00FFFFFF)|((((B5*((Di>>24)&0xFF
))>>8)&0xFF)<<24);Dq=(Dq&0x00FFFFFF)|((((B5*((Dq>>24)&0xFF))>>8)&0xFF)<<24);Do=(
Do&0x00FFFFFF)|((((B5*((Do>>24)&0xFF))>>8)&0xFF)<<24);Dp=(Dp&0x00FFFFFF)|((((B5*((
Dp>>24)&0xFF))>>8)&0xFF)<<24);}CJ.GH(aClip,this.GY,A.aam(this.M,aOffset),false,this.
Dm,this.Width,0,0,0,3,Di,Dq,Dp,Do,true,true);},AV$:function(){return;},AgV:function(
H){var B;if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.M);},L:function(E){var
B;if(E===this.AV)return;this.AV=E;if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.GY
)this.Aa.Bc(this.M);},Alk:function(E){var B;if(A.z8(E,this.Dm))return;this.Dm=E;
if((!!this.Aa&&((this.S&0x1)===0x1))&&!!this.GY)this.Aa.Bc(this.M);},N5:function(
E){var B;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if((!!this.Aa&&((this.
S&0x1)===0x1))&&!!this.GY)this.Aa.Bc(this.M);},XB:function(E){var B;if(E===this.
GY)return;if(!!this.GY)A.zl([this,this.AgV],this.GY,0);this.GY=E;if(!!this.GY)A.
y_([this,this.AgV],this.GY,0);if(!!this.Aa&&((this.S&0x1)===0x1))this.Aa.Bc(this.
M);},W:function(E){if(E)this.CQ(0x1,0x0);else this.CQ(0x0,0x1);},_Init:function(
aArg){A.Core.Em._Init.call(this,aArg);this.__proto__=C.GH;},_Done:function(){this.
Kx();this.__proto__=A.Core.Em;A.Core.Em._Done.call(this);},_Mark:function(D){var
B;A.Core.Em._Mark.call(this,D);if((B=this.GY)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Views::StrokePath"};C.Bwc={AY1:0x1,AY0:0x2,AY2:0x4,AY5:0x8,AY4:0x10
,AY3:0x20,Bxp:0x40,Bxq:0x80,BxA:0x100};C.BxE={AY1:0x1,AY0:0x2,AY2:0x4,AY5:0x8,AY4:
0x10,AY3:0x20,BuP:0x40,BuO:0x80,BuU:0x100};C.BwQ={Normal:0,Bxk:1,Bxi:2,Bxj:3};
C._Init=function(){C.DU.__proto__=A.Core.AhX;C.AH.__proto__=A.Core.Em;C.CR.__proto__=
A.Core.Em;C.MZ.__proto__=A.Core.Em;C.Am.__proto__=A.Core.Em;C.Text.__proto__=A.Core.
Em;C.ArK.__proto__=A.Core.Em;C.AfS.__proto__=A.Core.XI;C.AQt.__proto__=C.AfS;C.Ab8.
__proto__=A.Core.Em;C.GH.__proto__=A.Core.Em;};C._ReInit=function(){};C.Dn=function(
D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */