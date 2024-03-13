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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var Cc=[0,0];var BF="Can not resize explicitly attached graphics engine bitmaps";
var E4=[0,0,0,0];var Hm="No graphics engine bitmap attached to this canvas";var IQ=
"The canvas is already initialized with a graphics engine bitmap";var Ip="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O2="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P1="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P2=[1,1];var CQ=[2,2];var E$="Missing matrices to interpolate";
C.Canvas={C1:null,AEp:null,QI:A.wg,Pr:0,Ay7:false,Lb:function(){if(this.Ay7)this.
DetachBitmap();},Init:function(aArg){this.OL=true;},ArO:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.Ay7)throw new Error(BF);
this.FrameSize=E;this.Vw=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QI=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pr;for(this.Pr=this.NoOfFrames-
1;this.Pr>=0;this.Pr--)this.Ave(this.QI,this.QI,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pr=dstFrameNr;}}if(!(((B=this.QI)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEp)?B[1].call(B[0],
this):null;this.QI=E4;}},DetachBitmap:function(){if(!this.Ay7)throw new Error(Hm
);this.bitmap=null;this.Ay7=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.Vw=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IQ);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay7=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vw=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhW:function(aClip,AoD,Bby,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoD){AoD.Ajb();attrSet=AoD.attrSet;}if(
!!Bby)attrString=Bby.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pr;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A56:function(
aClip,AfF,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0S,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfF||!AfF.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0S===1)orient=90;else if(A0S===2)orient=180;else if(A0S===
3)orient=270;var dstFrameNo=this.Pr;var dstBitmap=this.bitmap;var srcFont=AfF.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhY:function(aClip
,aBitmap,aFrameNr,aDstRect,Atm,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atm)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pr;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((Atm&0x1)===0x1);var top=((Atm&0x2)===0x2);var right=((
Atm&0x4)===0x4);var bottom=((Atm&0x8)===0x8);var interior=((Atm&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hk:function(aClip
,AoL,aDstRect,aFlipY,aOffset,aWidth,BxE,BwO,Bw_,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoL||!AoL.path)return;var style=0;switch(BxE){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BwO){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bw_){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pr;var path=AoL.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhO:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Ip);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pr;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bof:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O2);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pr;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5z:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pr;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aen:function(aClip,AoL,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BwS){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoL||!AoL.path)return;var nonZeroWinding=BwS===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pr;var path=AoL.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhZ:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ave:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bh1:function(aClip,aDstPos1,aDstPos2,BxK,BxL,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agk=BxK;var Agl=BxL;var Adz=aDstPos1;
var AdA=aDstPos2;if(A.aaX(Adz,AdA))return;if(Agk<=1)Agk=1;if(Agl<=1)Agl=1;var Aiz=
Agk/2;var AiA=Agl/2;var Apk=Adz[0];var Apl=Adz[1];var Apm=AdA[0];var Apn=AdA[1];
var J7=Apm-Apk;var J8=Apn-Apl;var IU=Math.sqrt((J7*J7)+(J8*J8));if(((Agk>4096)||(
Agl>4096))||(IU>4096)){A.ab5("%s",P1);return;}J7=J7/IU;J8=J8/IU;var x1=Apk+(J8*Aiz
);var y1=Apl-(J7*Aiz);var x2=Apm+(J8*AiA);var y2=Apn-(J7*AiA);var x3=Apm-(J8*AiA
);var y3=Apn+(J7*AiA);var x4=Apk-(J8*Aiz);var y4=Apl+(J7*Aiz);var Bfa=A.aaL(A.aci.
AsR);var srcRect=[].concat(P2,A.abe(Bfa.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;var srcBitmap=Bfa.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au1:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEp)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxW={Wa:1,Wb:0,Y1:0,Y2:
0,Wc:0,Wd:1,Y3:0,Y4:0,QT:0,QU:0,Y5:1,We:0,T6:0,T7:0,Y6:0,Wf:1,UN:0,PZ:0,PY:0,AgO:
0,AlO:true,ABY:function(aX,aY){var Vm=((aX*this.QT)+(aY*this.QU))+this.We;var BY=((
aX*this.T6)+(aY*this.T7))+this.Wf;if(!!BY&&(BY!==1))Vm=Vm/BY;this.UN=Vm;return true;
},Ae_:function(aX,aY){var AtK=this.AgO;if(AtK<0)return false;var En=((aX*this.Wa
)+(aY*this.Wb))+this.Y2;var Dg=((aX*this.Wc)+(aY*this.Wd))+this.Y4;var Vm=((aX*this.
QT)+(aY*this.QU))+this.We;var BY=((aX*this.T6)+(aY*this.T7))+this.Wf;var AAS=1;if(
!!BY&&(BY!==1)){En=En/BY;Dg=Dg/BY;Vm=Vm/BY;}if(AtK!==-Vm)AAS=1/(Vm+AtK);if(!!AtK
)AAS=AAS*AtK;this.PY=En*AAS;this.PZ=Dg*AAS;this.UN=Vm+AtK;return true;},Bi$:function(
G7,O6,P9){if(!G7||!O6)throw new Error(E$);this.Wa=G7.Wa+((O6.Wa-G7.Wa)*P9);this.
Wb=G7.Wb+((O6.Wb-G7.Wb)*P9);this.Y1=G7.Y1+((O6.Y1-G7.Y1)*P9);this.Y2=G7.Y2+((O6.
Y2-G7.Y2)*P9);this.Wc=G7.Wc+((O6.Wc-G7.Wc)*P9);this.Wd=G7.Wd+((O6.Wd-G7.Wd)*P9);
this.Y3=G7.Y3+((O6.Y3-G7.Y3)*P9);this.Y4=G7.Y4+((O6.Y4-G7.Y4)*P9);this.QT=G7.QT+((
O6.QT-G7.QT)*P9);this.QU=G7.QU+((O6.QU-G7.QU)*P9);this.Y5=G7.Y5+((O6.Y5-G7.Y5)*P9
);this.We=G7.We+((O6.We-G7.We)*P9);this.T6=G7.T6+((O6.T6-G7.T6)*P9);this.T7=G7.T7+((
O6.T7-G7.T7)*P9);this.Y6=G7.Y6+((O6.Y6-G7.Y6)*P9);this.Wf=G7.Wf+((O6.Wf-G7.Wf)*P9
);this.AgO=G7.AgO+((O6.AgO-G7.AgO)*P9);this.AlO=false;return this;},Afe:function(
AI7,AI8,AI9){this.Wa=this.Wa*AI7;this.Wb=this.Wb*AI8;this.Y1=this.Y1*AI9;this.Wc=
this.Wc*AI7;this.Wd=this.Wd*AI8;this.Y3=this.Y3*AI9;this.QT=this.QT*AI7;this.QU=
this.QU*AI8;this.Y5=this.Y5*AI9;this.T6=this.T6*AI7;this.T7=this.T7*AI8;this.Y6=
this.Y6*AI9;this.AlO=false;return this;},Bpz:function(AIZ,AI0,AI1){this.Y2=((this.
Y2+(this.Wa*AIZ))+(this.Wb*AI0))+(this.Y1*AI1);this.Y4=((this.Y4+(this.Wc*AIZ))+(
this.Wd*AI0))+(this.Y3*AI1);this.We=((this.We+(this.QT*AIZ))+(this.QU*AI0))+(this.
Y5*AI1);this.Wf=((this.Wf+(this.T6*AIZ))+(this.T7*AI0))+(this.Y6*AI1);this.AlO=false;
return this;},ADP:function(){return this.AlO||((((((((((((((((this.Wa===1)&&!this.
Wb)&&!this.Y1)&&!this.Y2)&&!this.Wc)&&(this.Wd===1))&&!this.Y3)&&!this.Y4)&&!this.
QT)&&!this.QU)&&(this.Y5===1))&&!this.We)&&!this.T6)&&!this.T7)&&!this.Y6)&&(this.
Wf===1));},ANL:function(Ah8,Ah$,Ah9,Aia,AoT,AoU,Ah_,Aib){var Azx=Ah9-AoT;var Azz=
Aia-AoU;var Azy=Ah_-AoT;var AzA=Aib-AoU;var AA$=((Ah8-Ah9)+AoT)-Ah_;var ABa=((Ah$-
Aia)+AoU)-Aib;var Ao7=(Azx*AzA)-(Azz*Azy);if(!Ao7)return null;this.QT=((AA$*AzA)-(
ABa*Azy))/Ao7;this.QU=((Azx*ABa)-(Azz*AA$))/Ao7;this.Y5=0;this.We=1;this.Wa=(Ah9-
Ah8)+(this.QT*Ah9);this.Wb=(Ah_-Ah8)+(this.QU*Ah_);this.Y1=0;this.Y2=Ah8;this.Wc=(
Aia-Ah$)+(this.QT*Aia);this.Wd=(Aib-Ah$)+(this.QU*Aib);this.Y3=0;this.Y4=Ah$;this.
T6=0;this.T7=0;this.Y6=0;this.Wf=1;this.AlO=false;return this;},Bg3:function(L5){
if(!L5)return this;this.Wa=L5.Wa;this.Wb=L5.Wb;this.Y1=L5.Y1;this.Y2=L5.Y2;this.
Wc=L5.Wc;this.Wd=L5.Wd;this.Y3=L5.Y3;this.Y4=L5.Y4;this.QT=L5.QT;this.QU=L5.QU;this.
Y5=L5.Y5;this.We=L5.We;this.T6=L5.T6;this.T7=L5.T7;this.Y6=L5.Y6;this.Wf=L5.Wf;this.
AlO=L5.AlO;this.AgO=L5.AgO;return this;},A7p:function(){this.Wa=1;this.Wb=0;this.
Y1=0;this.Y2=0;this.Wc=0;this.Wd=1;this.Y3=0;this.Y4=0;this.QT=0;this.QU=0;this.
Y5=1;this.We=0;this.T6=0;this.T7=0;this.Y6=0;this.Wf=1;this.AlO=true;return this;
},_Init:function(aArg){this.__proto__=C.AxW;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A69={Bdf:1,Bdg:0,Bdh:0,Bdi:0,Bdj:1,Bdk:0,Bdl:0,Bdm:0,Bdn:1,PZ:0,PY:0,A2g:false
,Ae_:function(Fb){if(!this.A2g)return false;var A4r=Fb[0];var A4t=Fb[1];var BCu=((
A4r*this.Bdf)+(A4t*this.Bdg))+this.Bdh;var BCv=((A4r*this.Bdi)+(A4t*this.Bdj))+this.
Bdk;var A3F=((A4r*this.Bdl)+(A4t*this.Bdm))+this.Bdn;if(!!A3F){this.PY=BCu/A3F;this.
PZ=BCv/A3F;return true;}return false;},ANL:function(Ah8,Ah$,Ah9,Aia,AoT,AoU,Ah_,
Aib){var Azx=Ah9-AoT;var Azz=Aia-AoU;var Azy=Ah_-AoT;var AzA=Aib-AoU;var AA$=((Ah8-
Ah9)+AoT)-Ah_;var ABa=((Ah$-Aia)+AoU)-Aib;var Ao7=(Azx*AzA)-(Azz*Azy);this.A2g=false;
if(!Ao7)return;var AiB=((AA$*AzA)-(ABa*Azy))/Ao7;var BL=((Azx*ABa)-(Azz*AA$))/Ao7;
var a=(Ah9-Ah8)+(AiB*Ah9);var Rt=(Ah_-Ah8)+(BL*Ah_);var B3=Ah8;var d=(Aia-Ah$)+(
AiB*Aia);var AJU=(Aib-Ah$)+(BL*Aib);var LK=Ah$;this.Bdf=AJU-(LK*BL);this.Bdg=(B3
*BL)-Rt;this.Bdh=(Rt*LK)-(B3*AJU);this.Bdi=(LK*AiB)-d;this.Bdj=a-(B3*AiB);this.Bdk=(
B3*d)-(a*LK);this.Bdl=(d*BL)-(AJU*AiB);this.Bdm=(Rt*AiB)-(a*BL);this.Bdn=(a*AJU)-(
Rt*d);this.A2g=true;},_Init:function(aArg){this.__proto__=C.A69;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A42={C3:A.wf,attrString:null,Lb:function(){this.A5R(
);},A5R:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C3=Cc;},Aj5:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiT:function(
){return this.C3;},BnE:function(AoD,aString,aWidth,aEnableBidiText){this.A5R();var
attrSet=null;var handle=null;var s=Cc;if(!!AoD){AoD.Ajb();attrSet=AoD.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C3=s;},_Init:function(
aArg){this.__proto__=C.A42;A.h7++;},_Done:function(){this.Lb();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aid:null,AfQ:null,Aic:null,Api:A.abi(4,null,null),Xn:A.abi(10,null,
null),A6o:null,A5d:null,attrSet:null,Azh:A.abi(10,0,{0:0xFF000000}),Lb:function(
){this.AJS();},AJS:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ajb:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiK();var noOfBitmaps=this.BiJ();var noOfFonts=this.BiL();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKp=this.Aic;var Adq=this.AfQ;var AKq=this.Aid;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azh.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKp){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKp.KD.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKp=AKp.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xn.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adq){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adq.KD.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adq=Adq.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Api.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKq
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKq.KD.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKq=AKq.Ah;}},AKC:function(G){var handle=
this.attrSet;var Adq=this.AfQ;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xn.Get(inx)&&this.Xn.Get(inx).OL){var bitmap=this.Xn.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adq){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adq.KD.Get(lnx)&&Adq.
KD.Get(lnx).OL){var bitmap=Adq.KD.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adq=Adq.Ah;}A.we(this,1);},Bme:function(E){this.AUv(3,E);},A9S:function(
E){this.AUv(1,E);},Ahj:function(E){this.AUv(0,E);},A9s:function(E){this.Bop(0,E);
},BlC:function(E){this.AGy(3,E);},A9w:function(E){this.AGy(2,E);},A9v:function(E
){this.AGy(1,E);},Ahg:function(E){this.AGy(0,E);},AUv:function(aFontNo,AfF){var Adl=
aFontNo;var HW=false;if(Adl<0)return;if(Adl<4){HW=this.Api.Get(Adl)!==AfF;this.Api.
Set(Adl,AfF);}else{var BC=this.Aid;Adl=Adl-4;while(!!BC&&(Adl>=20)){BC=BC.Ah;Adl=
Adl-20;}if(!!BC){HW=BC.KD.Get(Adl)!==AfF;BC.KD.Set(Adl,AfF);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfF)font=AfF.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},Bov:function(Xj){var HW=false;if(Xj<4)Xj=4;if(Xj>256
)Xj=256;Xj=Xj-4;if((Xj>0)&&!this.Aid){this.Aid=A._NewObject(C.ABN,0);HW=true;}if(
!Xj&&!!this.Aid){this.Aid=null;HW=true;}var BC=this.Aid;while(Xj>0){if((Xj>20)&&
!BC.Ah){BC.Ah=A._NewObject(C.ABN,0);HW=true;}Xj=Xj-20;if(Xj>0)BC=BC.Ah;}if(!!BC&&
!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJS();A.we(this,1);}},BiL:function(){var
CD=4;var BC=this.Aid;while(!!BC){CD=CD+20;BC=BC.Ah;}return CD;},Bop:function(aBitmapNo
,aBitmap){var Qb=aBitmapNo;var HW=false;if(Qb<0)return;if(Qb<10){HW=this.Xn.Get(
Qb)!==aBitmap;if(!!this.Xn.Get(Qb)&&this.Xn.Get(Qb).OL)A.z9([this,this.AKC],this.
Xn.Get(Qb),0);this.Xn.Set(Qb,aBitmap);if(!!aBitmap&&aBitmap.OL)A.zV([this,this.AKC
],aBitmap,0);}else{var BC=this.AfQ;Qb=Qb-10;while(!!BC&&(Qb>=20)){BC=BC.Ah;Qb=Qb-
20;}if(!!BC){HW=BC.KD.Get(Qb)!==aBitmap;if(!!BC.KD.Get(Qb)&&BC.KD.Get(Qb).OL)A.z9([
this,this.AKC],BC.KD.Get(Qb),0);BC.KD.Set(Qb,aBitmap);if(!!aBitmap&&aBitmap.OL)A.
zV([this,this.AKC],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},Bot:function(Xh){var HW=false;if(Xh<10)Xh=10;if(Xh>
256)Xh=256;Xh=Xh-10;if((Xh>0)&&!this.AfQ){this.AfQ=A._NewObject(C.ABL,0);HW=true;
}if(!Xh&&!!this.AfQ){this.AfQ=null;HW=true;}var BC=this.AfQ;while(Xh>0){if((Xh>20
)&&!BC.Ah){BC.Ah=A._NewObject(C.ABL,0);HW=true;}Xh=Xh-20;if(Xh>0)BC=BC.Ah;}if(!!
BC&&!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJS();A.we(this,1);}},BiJ:function(
){var CD=10;var BC=this.AfQ;while(!!BC){CD=CD+20;BC=BC.Ah;}return CD;},AGy:function(
aColorNo,aColor){var Adb=aColorNo;var HW=false;if(Adb<0)return;if(Adb<10){HW=this.
Azh.Get(Adb)!==aColor;this.Azh.Set(Adb,aColor);}else{var BC=this.Aic;Adb=Adb-10;
while(!!BC&&(Adb>=20)){BC=BC.Ah;Adb=Adb-20;}if(!!BC){HW=BC.KD.Get(Adb)!==aColor;
BC.KD.Set(Adb,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},Bou:function(Xi){var HW=false;if(Xi<10)Xi=
10;if(Xi>256)Xi=256;Xi=Xi-10;if((Xi>0)&&!this.Aic){this.Aic=A._NewObject(C.ABM,0
);HW=true;}if(!Xi&&!!this.Aic){this.Aic=null;HW=true;}var BC=this.Aic;while(Xi>0
){if((Xi>20)&&!BC.Ah){BC.Ah=A._NewObject(C.ABM,0);HW=true;}Xi=Xi-20;if(Xi>0)BC=BC.
Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJS();A.we(this,1);}},BiK:
function(){var CD=10;var BC=this.Aic;while(!!BC){CD=CD+20;BC=BC.Ah;}return CD;},
_Init:function(aArg){(this.Api=[]).__proto__=C.AttrSet.Api;(this.Xn=[]).__proto__=
C.AttrSet.Xn;(this.Azh=[]).__proto__=C.AttrSet.Azh;this.__proto__=C.AttrSet;this.
Api.Set(0,A.aaL(A.aci.ACt));this.Xn.Set(0,A.aaL(A.aci.TJ));this.A6o=A.aaL(A.aci.
ACt);this.A5d=A.aaL(A.aci.TJ);A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aid)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aic)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Api,D);A.aa6(this.Xn,D
);if((B=this.A6o)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5d)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABN={Ah:null,KD:A.abi(
20,null,null),_Init:function(aArg){(this.KD=[]).__proto__=C.ABN.KD;this.__proto__=
C.ABN;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KD,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABL={Ah:null,KD:A.abi(20,null,null),
_Init:function(aArg){(this.KD=[]).__proto__=C.ABL.KD;this.__proto__=C.ABL;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KD,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABM={Ah:null,KD:A.abi(20,0,null),_Init:function(aArg
){(this.KD=[]).__proto__=C.ABM.KD;this.__proto__=C.ABM;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hv={path:null,Lb:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adx:function(G){A.we(this,0);},Ff:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adx
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4F:
function(aSubPathNo,aX,aY){A.pe([this,this.Adx],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VJ:function(aSubPathNo){A.
pe([this,this.Adx],this);var handle=this.path;A.jU(handle,aSubPathNo);},VB:function(
aSubPathNo,aX,aY){A.pe([this,this.Adx],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jq:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axt(1);A.pe([this,this.Adx],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BiM:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axt:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BiM()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adx],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hv;A.h7++;},_Done:function(){
this.Lb();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Au2={Left:0x1,ZR:0x2,Right:0x4,A5e:0x8,BD9:0x10
};C.BDK={BDy:0,BEH:1};C.BEP={BCU:0,BEt:1,Boa:2};C.BEO={BDM:0,BFw:1,Boa:2,AxP:3};
C.BCM={BCL:0,BFq:1,BET:2,BEU:3,BEW:4,BEV:5};C.AMH={NL:360,JU:0,In:0,Q$:0,Ajc:function(
G){var B;var Fz=this.NL;var FP;if((Fz>=360)||(Fz<=-360))Fz=360;this.Axt(2);{var Az=
Math.max(this.In,this.JU);FP=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FP*=
4;if(Fz<360)FP=((Fz*FP)/360)|0;FP=Math.max(FP,-FP,1);}if(((!Fz||!this.In)||!this.
JU)||(((((this.Q$===2)||(this.Q$===3))||(this.Q$===4))||(this.Q$===5))&&((0>=this.
In)||(0>=this.JU)))){this.Jq(0,0);this.Jq(1,0);return;}if(Fz===360){this.Jq(0,FP+
1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JU,0,360,FP);this.VJ(0);return;}if(!this.
Q$){this.Jq(0,FP+1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);return;}
if(this.Q$===1){this.Jq(0,FP+1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JU,0,Fz,
FP);this.VJ(0);return;}if(this.Q$===2){this.Jq(0,FP+1);this.Jq(1,0);this.VB(0,0,
0);this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.VJ(0);return;}if(this.Q$===4){var
Oo=this.In;var LF=Math.sqrt(Oo*Oo);var Tj=((LF*0.25)|0)+3;this.Jq(0,(FP+Tj)+2);this.
Jq(1,0);this.VB(0,0,0);if(Fz>=0)this.Ff(0,Oo/2,0,LF/2,LF/2,180,360,Tj);else this.
Ff(0,Oo/2,0,LF/2,LF/2,180,0,Tj);this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.VJ(0
);return;}if(this.Q$===5){var Jz=Fz;var Oo=this.In*Math.cos(Jz*A.k$);var AiP=this.
JU*Math.sin(Jz*A.k$);var LF=Math.sqrt((Oo*Oo)+(AiP*AiP));var Tj=((LF*0.25)|0)+3;
this.Jq(0,(FP+Tj)+2);this.Jq(1,0);this.VB(0,0,0);this.Ff(0,0,0,this.In,this.JU,0
,Fz,FP);if(Fz>=0)this.Ff(0,Oo/2,AiP/2,LF/2,LF/2,Jz,Jz+180,Tj);else this.Ff(0,Oo/
2,AiP/2,LF/2,LF/2,Jz,Jz-180,Tj);this.VJ(0);return;}if(this.Q$===3){var Ai9=this.
In;var AdH=Math.sqrt(Ai9*Ai9);var Jz=Fz;var Air=this.In*Math.cos(Jz*A.k$);var Ais=
this.JU*Math.sin(Jz*A.k$);var Adg=Math.sqrt((Air*Air)+(Ais*Ais));var ApC=((AdH*0.25
)|0)+3;var ApB=((Adg*0.25)|0)+3;this.Jq(0,((FP+ApC)+ApB)+10);this.Jq(1,0);this.VB(
0,0,0);if(Fz>=0){this.Ff(0,Ai9/2,0,AdH/2,AdH/2,180,360,ApC);this.Ff(0,0,0,this.In
,this.JU,0,Fz,FP);this.Ff(0,Air/2,Ais/2,Adg/2,Adg/2,Jz,Jz+180,ApB);}else{this.Ff(
0,Ai9/2,0,AdH/2,AdH/2,180,0,ApC);this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.Ff(
0,Air/2,Ais/2,Adg/2,Adg/2,Jz,Jz-180,ApB);}this.VJ(0);return;}if(this.Q$===2){this.
Jq(0,(FP*2)+1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.Ff(0,0,0
,0,0,this.NL,this.NL-Fz,FP);this.VJ(0);return;}if(this.Q$===4){var Oo=this.In;var
LF=Math.sqrt(Oo*Oo);var Tj=((LF*0.25)|0)+3;this.Jq(0,((FP*2)+Tj)+2);this.Jq(1,0);
if(Fz>=0){this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.Ff(0,0,0,0,0,this.NL,this.
NL-Fz,FP);this.Ff(0,Oo/2,0,LF/2,LF/2,180,360,Tj);}else{this.Ff(0,0,0,this.In,this.
JU,0,Fz,FP);this.Ff(0,0,0,0,0,this.NL,this.NL-Fz,FP);this.Ff(0,Oo/2,0,LF/2,LF/2,
180,0,Tj);}this.VJ(0);return;}if(this.Q$===5){var Jz=Fz;var sin=Math.sin(Jz*A.k$
);var cos=Math.cos(Jz*A.k$);var Oo=this.In*cos;var AiP=this.JU*sin;var LF=Math.sqrt((
Oo*Oo)+(AiP*AiP));var Tj=((LF*0.25)|0)+3;this.Jq(0,((FP*2)+Tj)+2);this.Jq(1,0);if(
Fz>=0){this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.Ff(0,Oo/2,AiP/2,LF/2,LF/2,Jz,
Jz+180,Tj);this.Ff(0,0,0,0,0,this.NL,this.NL-Fz,FP);}else{this.Ff(0,0,0,this.In,
this.JU,0,Fz,FP);this.Ff(0,Oo/2,AiP/2,LF/2,LF/2,Jz,Jz-180,Tj);this.Ff(0,0,0,0,0,
this.NL,this.NL-Fz,FP);}this.VJ(0);return;}if(this.Q$===3){var Jz=Fz;var ByT=Math.
sin(Jz*A.k$);var ByO=Math.cos(Jz*A.k$);var Ai9=this.In;var Air=this.In*ByO;var Ais=
this.JU*ByT;var AdH=Math.sqrt(Ai9*Ai9);var Adg=Math.sqrt((Air*Air)+(Ais*Ais));var
ApC=((AdH*0.25)|0)+3;var ApB=((Adg*0.25)|0)+3;this.Jq(0,(((FP*2)+ApC)+ApB)+4);this.
Jq(1,0);if(Fz>=0){this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.Ff(0,Air/2,Ais/2,Adg
/2,Adg/2,Jz,Jz+180,ApB);this.Ff(0,0,0,0,0,this.NL,this.NL-Fz,FP);this.Ff(0,Ai9/2
,0,AdH/2,AdH/2,180,360,ApC);}else{this.Ff(0,0,0,this.In,this.JU,0,Fz,FP);this.Ff(
0,Air/2,Ais/2,Adg/2,Adg/2,Jz,Jz-180,ApB);this.Ff(0,0,0,0,0,this.NL,this.NL-Fz,FP
);this.Ff(0,Ai9/2,0,AdH/2,AdH/2,180,0,ApC);}this.VJ(0);return;}},BlS:function(E){
if(E===this.NL)return;this.NL=E;if((this.In>0)&&(this.JU>0))A.pe([this,this.Ajc]
,this);},Bm8:function(E){if((E===this.In)&&(E===this.JU))return;this.In=E;this.JU=
E;if(!!this.NL)A.pe([this,this.Ajc],this);},Bng:function(E){if(E===this.Q$)return;
this.Q$=E;if((!!this.NL&&(this.In>0))&&(this.JU>0))A.pe([this,this.Ajc],this);},
_Init:function(aArg){C.Hv._Init.call(this,aArg);this.__proto__=C.AMH;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMH.__proto__=C.Hv;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */