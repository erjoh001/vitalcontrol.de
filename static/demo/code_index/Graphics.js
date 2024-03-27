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
var Cc=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E6=[0,0,0,0];var Hq="No graphics engine bitmap attached to this canvas";var IT=
"The canvas is already initialized with a graphics engine bitmap";var Is="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O2="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P7="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P8=[1,1];var CQ=[2,2];var Fe="Missing matrices to interpolate";
C.Canvas={C0:null,AEn:null,QM:A.wg,Pu:0,Ay5:false,Lb:function(){if(this.Ay5)this.
DetachBitmap();},Init:function(aArg){this.OL=true;},ArL:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.Ay5)throw new Error(BD);
this.FrameSize=E;this.Vz=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QM=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pu;for(this.Pu=this.NoOfFrames-
1;this.Pu>=0;this.Pu--)this.Avc(this.QM,this.QM,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pu=dstFrameNr;}}if(!(((B=this.QM)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEn)?B[1].call(B[0],
this):null;this.QM=E6;}},DetachBitmap:function(){if(!this.Ay5)throw new Error(Hq
);this.bitmap=null;this.Ay5=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.Vz=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IT);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay5=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vz=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhW:function(aClip,Aoy,Bbv,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aoy){Aoy.Aja();attrSet=Aoy.attrSet;}if(
!!Bbv)attrString=Bbv.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pu;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A52:function(
aClip,AfG,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0N,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfG||!AfG.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0N===1)orient=90;else if(A0N===2)orient=180;else if(A0N===
3)orient=270;var dstFrameNo=this.Pu;var dstBitmap=this.bitmap;var srcFont=AfG.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhY:function(aClip
,aBitmap,aFrameNr,aDstRect,Atk,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atk)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pu;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((Atk&0x1)===0x1);var top=((Atk&0x2)===0x2);var right=((
Atk&0x4)===0x4);var bottom=((Atk&0x8)===0x8);var interior=((Atk&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ho:function(aClip
,AoH,aDstRect,aFlipY,aOffset,aWidth,BxE,BwP,Bw$,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoH||!AoH.path)return;var style=0;switch(BxE){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BwP){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bw$){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pu;var path=AoH.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhQ:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Is);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pu;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bok:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O2);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pu;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5x:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pu;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aen:function(aClip,AoH,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BwT){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoH||!AoH.path)return;var nonZeroWinding=BwT===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pu;var path=AoH.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhZ:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pu;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avc:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pu;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bh1:function(aClip,aDstPos1,aDstPos2,BxK,BxL,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agp=BxK;var Agq=BxL;var Ady=aDstPos1;
var Adz=aDstPos2;if(A.aaX(Ady,Adz))return;if(Agp<=1)Agp=1;if(Agq<=1)Agq=1;var AiA=
Agp/2;var AiB=Agq/2;var Aph=Ady[0];var Api=Ady[1];var Apj=Adz[0];var Apk=Adz[1];
var J9=Apj-Aph;var J_=Apk-Api;var IX=Math.sqrt((J9*J9)+(J_*J_));if(((Agp>4096)||(
Agq>4096))||(IX>4096)){A.ab5("%s",P7);return;}J9=J9/IX;J_=J_/IX;var x1=Aph+(J_*AiA
);var y1=Api-(J9*AiA);var x2=Apj+(J_*AiB);var y2=Apk-(J9*AiB);var x3=Apj-(J_*AiB
);var y3=Apk+(J9*AiB);var x4=Aph-(J_*AiA);var y4=Api+(J9*AiA);var Bfa=A.aaL(A.aci.
AsS);var srcRect=[].concat(P8,A.abe(Bfa.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pu;var srcBitmap=Bfa.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AuZ:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pu;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEn)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxW={Wc:1,Wd:0,YW:0,YX:
0,We:0,Wf:1,YY:0,YZ:0,QX:0,QY:0,Y0:1,Wg:0,T8:0,T9:0,Y1:0,Wh:1,UP:0,P5:0,P4:0,AgT:
0,AlL:true,ABX:function(aX,aY){var Vp=((aX*this.QX)+(aY*this.QY))+this.Wg;var BX=((
aX*this.T8)+(aY*this.T9))+this.Wh;if(!!BX&&(BX!==1))Vp=Vp/BX;this.UP=Vp;return true;
},Afa:function(aX,aY){var AtJ=this.AgT;if(AtJ<0)return false;var Eo=((aX*this.Wc
)+(aY*this.Wd))+this.YX;var Dg=((aX*this.We)+(aY*this.Wf))+this.YZ;var Vp=((aX*this.
QX)+(aY*this.QY))+this.Wg;var BX=((aX*this.T8)+(aY*this.T9))+this.Wh;var AAP=1;if(
!!BX&&(BX!==1)){Eo=Eo/BX;Dg=Dg/BX;Vp=Vp/BX;}if(AtJ!==-Vp)AAP=1/(Vp+AtJ);if(!!AtJ
)AAP=AAP*AtJ;this.P4=Eo*AAP;this.P5=Dg*AAP;this.UP=Vp+AtJ;return true;},Bi$:function(
Ha,O7,Qc){if(!Ha||!O7)throw new Error(Fe);this.Wc=Ha.Wc+((O7.Wc-Ha.Wc)*Qc);this.
Wd=Ha.Wd+((O7.Wd-Ha.Wd)*Qc);this.YW=Ha.YW+((O7.YW-Ha.YW)*Qc);this.YX=Ha.YX+((O7.
YX-Ha.YX)*Qc);this.We=Ha.We+((O7.We-Ha.We)*Qc);this.Wf=Ha.Wf+((O7.Wf-Ha.Wf)*Qc);
this.YY=Ha.YY+((O7.YY-Ha.YY)*Qc);this.YZ=Ha.YZ+((O7.YZ-Ha.YZ)*Qc);this.QX=Ha.QX+((
O7.QX-Ha.QX)*Qc);this.QY=Ha.QY+((O7.QY-Ha.QY)*Qc);this.Y0=Ha.Y0+((O7.Y0-Ha.Y0)*Qc
);this.Wg=Ha.Wg+((O7.Wg-Ha.Wg)*Qc);this.T8=Ha.T8+((O7.T8-Ha.T8)*Qc);this.T9=Ha.T9+((
O7.T9-Ha.T9)*Qc);this.Y1=Ha.Y1+((O7.Y1-Ha.Y1)*Qc);this.Wh=Ha.Wh+((O7.Wh-Ha.Wh)*Qc
);this.AgT=Ha.AgT+((O7.AgT-Ha.AgT)*Qc);this.AlL=false;return this;},Afg:function(
AI5,AI6,AI7){this.Wc=this.Wc*AI5;this.Wd=this.Wd*AI6;this.YW=this.YW*AI7;this.We=
this.We*AI5;this.Wf=this.Wf*AI6;this.YY=this.YY*AI7;this.QX=this.QX*AI5;this.QY=
this.QY*AI6;this.Y0=this.Y0*AI7;this.T8=this.T8*AI5;this.T9=this.T9*AI6;this.Y1=
this.Y1*AI7;this.AlL=false;return this;},BpF:function(AIX,AIY,AIZ){this.YX=((this.
YX+(this.Wc*AIX))+(this.Wd*AIY))+(this.YW*AIZ);this.YZ=((this.YZ+(this.We*AIX))+(
this.Wf*AIY))+(this.YY*AIZ);this.Wg=((this.Wg+(this.QX*AIX))+(this.QY*AIY))+(this.
Y0*AIZ);this.Wh=((this.Wh+(this.T8*AIX))+(this.T9*AIY))+(this.Y1*AIZ);this.AlL=false;
return this;},ADN:function(){return this.AlL||((((((((((((((((this.Wc===1)&&!this.
Wd)&&!this.YW)&&!this.YX)&&!this.We)&&(this.Wf===1))&&!this.YY)&&!this.YZ)&&!this.
QX)&&!this.QY)&&(this.Y0===1))&&!this.Wg)&&!this.T8)&&!this.T9)&&!this.Y1)&&(this.
Wh===1));},ANI:function(Ah9,Aia,Ah_,Aib,AoP,AoQ,Ah$,Aic){var Azu=Ah_-AoP;var Azw=
Aib-AoQ;var Azv=Ah$-AoP;var Azx=Aic-AoQ;var AA9=((Ah9-Ah_)+AoP)-Ah$;var AA_=((Aia-
Aib)+AoQ)-Aic;var Ao3=(Azu*Azx)-(Azw*Azv);if(!Ao3)return null;this.QX=((AA9*Azx)-(
AA_*Azv))/Ao3;this.QY=((Azu*AA_)-(Azw*AA9))/Ao3;this.Y0=0;this.Wg=1;this.Wc=(Ah_-
Ah9)+(this.QX*Ah_);this.Wd=(Ah$-Ah9)+(this.QY*Ah$);this.YW=0;this.YX=Ah9;this.We=(
Aib-Aia)+(this.QX*Aib);this.Wf=(Aic-Aia)+(this.QY*Aic);this.YY=0;this.YZ=Aia;this.
T8=0;this.T9=0;this.Y1=0;this.Wh=1;this.AlL=false;return this;},Bg1:function(L6){
if(!L6)return this;this.Wc=L6.Wc;this.Wd=L6.Wd;this.YW=L6.YW;this.YX=L6.YX;this.
We=L6.We;this.Wf=L6.Wf;this.YY=L6.YY;this.YZ=L6.YZ;this.QX=L6.QX;this.QY=L6.QY;this.
Y0=L6.Y0;this.Wg=L6.Wg;this.T8=L6.T8;this.T9=L6.T9;this.Y1=L6.Y1;this.Wh=L6.Wh;this.
AlL=L6.AlL;this.AgT=L6.AgT;return this;},A7l:function(){this.Wc=1;this.Wd=0;this.
YW=0;this.YX=0;this.We=0;this.Wf=1;this.YY=0;this.YZ=0;this.QX=0;this.QY=0;this.
Y0=1;this.Wg=0;this.T8=0;this.T9=0;this.Y1=0;this.Wh=1;this.AlL=true;return this;
},_Init:function(aArg){this.__proto__=C.AxW;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A65={Bdf:1,Bdg:0,Bdh:0,Bdi:0,Bdj:1,Bdk:0,Bdl:0,Bdm:0,Bdn:1,P5:0,P4:0,A2d:false
,Afa:function(Fg){if(!this.A2d)return false;var A4p=Fg[0];var A4r=Fg[1];var BCw=((
A4p*this.Bdf)+(A4r*this.Bdg))+this.Bdh;var BCx=((A4p*this.Bdi)+(A4r*this.Bdj))+this.
Bdk;var A3E=((A4p*this.Bdl)+(A4r*this.Bdm))+this.Bdn;if(!!A3E){this.P4=BCw/A3E;this.
P5=BCx/A3E;return true;}return false;},ANI:function(Ah9,Aia,Ah_,Aib,AoP,AoQ,Ah$,
Aic){var Azu=Ah_-AoP;var Azw=Aib-AoQ;var Azv=Ah$-AoP;var Azx=Aic-AoQ;var AA9=((Ah9-
Ah_)+AoP)-Ah$;var AA_=((Aia-Aib)+AoQ)-Aic;var Ao3=(Azu*Azx)-(Azw*Azv);this.A2d=false;
if(!Ao3)return;var AiC=((AA9*Azx)-(AA_*Azv))/Ao3;var BI=((Azu*AA_)-(Azw*AA9))/Ao3;
var a=(Ah_-Ah9)+(AiC*Ah_);var Ry=(Ah$-Ah9)+(BI*Ah$);var B2=Ah9;var d=(Aib-Aia)+(
AiC*Aib);var AJQ=(Aic-Aia)+(BI*Aic);var LJ=Aia;this.Bdf=AJQ-(LJ*BI);this.Bdg=(B2
*BI)-Ry;this.Bdh=(Ry*LJ)-(B2*AJQ);this.Bdi=(LJ*AiC)-d;this.Bdj=a-(B2*AiC);this.Bdk=(
B2*d)-(a*LJ);this.Bdl=(d*BI)-(AJQ*AiC);this.Bdm=(Ry*AiC)-(a*BI);this.Bdn=(a*AJQ)-(
Ry*d);this.A2d=true;},_Init:function(aArg){this.__proto__=C.A65;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A40={C4:A.wf,attrString:null,Lb:function(){this.A5O(
);},A5O:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C4=Cc;},Aj2:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiT:function(
){return this.C4;},BnI:function(Aoy,aString,aWidth,aEnableBidiText){this.A5O();var
attrSet=null;var handle=null;var s=Cc;if(!!Aoy){Aoy.Aja();attrSet=Aoy.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C4=s;},_Init:function(
aArg){this.__proto__=C.A40;A.h7++;},_Done:function(){this.Lb();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aig:null,AfR:null,Aif:null,Ape:A.abi(4,null,null),Xn:A.abi(10,null,
null),A6k:null,A5b:null,attrSet:null,Azf:A.abi(10,0,{0:0xFF000000}),Lb:function(
){this.AJO();},AJO:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Aja:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiK();var noOfBitmaps=this.BiJ();var noOfFonts=this.BiL();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKj=this.Aif;var Ado=this.AfR;var AKk=this.Aig;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azf.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKj){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKj.KE.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKj=AKj.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xn.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Ado){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Ado.KE.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Ado=Ado.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Ape.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKk
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKk.KE.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKk=AKk.Ah;}},AKx:function(G){var handle=
this.attrSet;var Ado=this.AfR;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xn.Get(inx)&&this.Xn.Get(inx).OL){var bitmap=this.Xn.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Ado){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Ado.KE.Get(lnx)&&Ado.
KE.Get(lnx).OL){var bitmap=Ado.KE.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Ado=Ado.Ah;}A.we(this,1);},Bme:function(E){this.AUm(3,E);},A9L:function(
E){this.AUm(1,E);},Aho:function(E){this.AUm(0,E);},A9l:function(E){this.Bow(0,E);
},BlD:function(E){this.AGu(3,E);},A9p:function(E){this.AGu(2,E);},A9o:function(E
){this.AGu(1,E);},Ahl:function(E){this.AGu(0,E);},AUm:function(aFontNo,AfG){var Adj=
aFontNo;var HW=false;if(Adj<0)return;if(Adj<4){HW=this.Ape.Get(Adj)!==AfG;this.Ape.
Set(Adj,AfG);}else{var Bz=this.Aig;Adj=Adj-4;while(!!Bz&&(Adj>=20)){Bz=Bz.Ah;Adj=
Adj-20;}if(!!Bz){HW=Bz.KE.Get(Adj)!==AfG;Bz.KE.Set(Adj,AfG);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfG)font=AfG.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},BoC:function(Xi){var HW=false;if(Xi<4)Xi=4;if(Xi>256
)Xi=256;Xi=Xi-4;if((Xi>0)&&!this.Aig){this.Aig=A._NewObject(C.ABM,0);HW=true;}if(
!Xi&&!!this.Aig){this.Aig=null;HW=true;}var Bz=this.Aig;while(Xi>0){if((Xi>20)&&
!Bz.Ah){Bz.Ah=A._NewObject(C.ABM,0);HW=true;}Xi=Xi-20;if(Xi>0)Bz=Bz.Ah;}if(!!Bz&&
!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJO();A.we(this,1);}},BiL:function(){var
CB=4;var Bz=this.Aig;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},Bow:function(aBitmapNo
,aBitmap){var Qg=aBitmapNo;var HW=false;if(Qg<0)return;if(Qg<10){HW=this.Xn.Get(
Qg)!==aBitmap;if(!!this.Xn.Get(Qg)&&this.Xn.Get(Qg).OL)A.z9([this,this.AKx],this.
Xn.Get(Qg),0);this.Xn.Set(Qg,aBitmap);if(!!aBitmap&&aBitmap.OL)A.zV([this,this.AKx
],aBitmap,0);}else{var Bz=this.AfR;Qg=Qg-10;while(!!Bz&&(Qg>=20)){Bz=Bz.Ah;Qg=Qg-
20;}if(!!Bz){HW=Bz.KE.Get(Qg)!==aBitmap;if(!!Bz.KE.Get(Qg)&&Bz.KE.Get(Qg).OL)A.z9([
this,this.AKx],Bz.KE.Get(Qg),0);Bz.KE.Set(Qg,aBitmap);if(!!aBitmap&&aBitmap.OL)A.
zV([this,this.AKx],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},BoA:function(Xg){var HW=false;if(Xg<10)Xg=10;if(Xg>
256)Xg=256;Xg=Xg-10;if((Xg>0)&&!this.AfR){this.AfR=A._NewObject(C.ABK,0);HW=true;
}if(!Xg&&!!this.AfR){this.AfR=null;HW=true;}var Bz=this.AfR;while(Xg>0){if((Xg>20
)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABK,0);HW=true;}Xg=Xg-20;if(Xg>0)Bz=Bz.Ah;}if(!!
Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJO();A.we(this,1);}},BiJ:function(
){var CB=10;var Bz=this.AfR;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},AGu:function(
aColorNo,aColor){var Ac_=aColorNo;var HW=false;if(Ac_<0)return;if(Ac_<10){HW=this.
Azf.Get(Ac_)!==aColor;this.Azf.Set(Ac_,aColor);}else{var Bz=this.Aif;Ac_=Ac_-10;
while(!!Bz&&(Ac_>=20)){Bz=Bz.Ah;Ac_=Ac_-20;}if(!!Bz){HW=Bz.KE.Get(Ac_)!==aColor;
Bz.KE.Set(Ac_,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},BoB:function(Xh){var HW=false;if(Xh<10)Xh=
10;if(Xh>256)Xh=256;Xh=Xh-10;if((Xh>0)&&!this.Aif){this.Aif=A._NewObject(C.ABL,0
);HW=true;}if(!Xh&&!!this.Aif){this.Aif=null;HW=true;}var Bz=this.Aif;while(Xh>0
){if((Xh>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABL,0);HW=true;}Xh=Xh-20;if(Xh>0)Bz=Bz.
Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJO();A.we(this,1);}},BiK:
function(){var CB=10;var Bz=this.Aif;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},
_Init:function(aArg){(this.Ape=[]).__proto__=C.AttrSet.Ape;(this.Xn=[]).__proto__=
C.AttrSet.Xn;(this.Azf=[]).__proto__=C.AttrSet.Azf;this.__proto__=C.AttrSet;this.
Ape.Set(0,A.aaL(A.aci.ACr));this.Xn.Set(0,A.aaL(A.aci.TL));this.A6k=A.aaL(A.aci.
ACr);this.A5b=A.aaL(A.aci.TL);A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aig)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aif)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ape,D);A.aa6(this.Xn,D
);if((B=this.A6k)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5b)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABM={Ah:null,KE:A.abi(
20,null,null),_Init:function(aArg){(this.KE=[]).__proto__=C.ABM.KE;this.__proto__=
C.ABM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KE,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABK={Ah:null,KE:A.abi(20,null,null),
_Init:function(aArg){(this.KE=[]).__proto__=C.ABK.KE;this.__proto__=C.ABK;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KE,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABL={Ah:null,KE:A.abi(20,0,null),_Init:function(aArg
){(this.KE=[]).__proto__=C.ABL.KE;this.__proto__=C.ABL;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hy={path:null,Lb:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adw:function(G){A.we(this,0);},Fk:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adw
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4C:
function(aSubPathNo,aX,aY){A.pe([this,this.Adw],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VM:function(aSubPathNo){A.
pe([this,this.Adw],this);var handle=this.path;A.jU(handle,aSubPathNo);},VE:function(
aSubPathNo,aX,aY){A.pe([this,this.Adw],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jt:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axs(1);A.pe([this,this.Adw],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BiM:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axs:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BiM()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adw],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hy;A.h7++;},_Done:function(){
this.Lb();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Au0={Left:0x1,ZO:0x2,Right:0x4,A5c:0x8,BD8:0x10
};C.BDO={BDC:0,BEG:1};C.BEO={BCX:0,BEs:1,Bof:2};C.BEN={BDQ:0,BFx:1,Bof:2,AxP:3};
C.BCP={BCO:0,BFs:1,BES:2,BET:3,BEV:4,BEU:5};C.AME={NM:360,JW:0,Iq:0,Rb:0,Ajb:function(
G){var B;var FD=this.NM;var FT;if((FD>=360)||(FD<=-360))FD=360;this.Axs(2);{var Az=
Math.max(this.Iq,this.JW);FT=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FT*=
4;if(FD<360)FT=((FD*FT)/360)|0;FT=Math.max(FT,-FT,1);}if(((!FD||!this.Iq)||!this.
JW)||(((((this.Rb===2)||(this.Rb===3))||(this.Rb===4))||(this.Rb===5))&&((0>=this.
Iq)||(0>=this.JW)))){this.Jt(0,0);this.Jt(1,0);return;}if(FD===360){this.Jt(0,FT+
1);this.Jt(1,0);this.Fk(0,0,0,this.Iq,this.JW,0,360,FT);this.VM(0);return;}if(!this.
Rb){this.Jt(0,FT+1);this.Jt(1,0);this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);return;}
if(this.Rb===1){this.Jt(0,FT+1);this.Jt(1,0);this.Fk(0,0,0,this.Iq,this.JW,0,FD,
FT);this.VM(0);return;}if(this.Rb===2){this.Jt(0,FT+1);this.Jt(1,0);this.VE(0,0,
0);this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.VM(0);return;}if(this.Rb===4){var
Oo=this.Iq;var LE=Math.sqrt(Oo*Oo);var Tl=((LE*0.25)|0)+3;this.Jt(0,(FT+Tl)+2);this.
Jt(1,0);this.VE(0,0,0);if(FD>=0)this.Fk(0,Oo/2,0,LE/2,LE/2,180,360,Tl);else this.
Fk(0,Oo/2,0,LE/2,LE/2,180,0,Tl);this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.VM(0
);return;}if(this.Rb===5){var JC=FD;var Oo=this.Iq*Math.cos(JC*A.k$);var AiP=this.
JW*Math.sin(JC*A.k$);var LE=Math.sqrt((Oo*Oo)+(AiP*AiP));var Tl=((LE*0.25)|0)+3;
this.Jt(0,(FT+Tl)+2);this.Jt(1,0);this.VE(0,0,0);this.Fk(0,0,0,this.Iq,this.JW,0
,FD,FT);if(FD>=0)this.Fk(0,Oo/2,AiP/2,LE/2,LE/2,JC,JC+180,Tl);else this.Fk(0,Oo/
2,AiP/2,LE/2,LE/2,JC,JC-180,Tl);this.VM(0);return;}if(this.Rb===3){var Ai8=this.
Iq;var AdF=Math.sqrt(Ai8*Ai8);var JC=FD;var Ait=this.Iq*Math.cos(JC*A.k$);var Aiu=
this.JW*Math.sin(JC*A.k$);var Ade=Math.sqrt((Ait*Ait)+(Aiu*Aiu));var Apz=((AdF*0.25
)|0)+3;var Apy=((Ade*0.25)|0)+3;this.Jt(0,((FT+Apz)+Apy)+10);this.Jt(1,0);this.VE(
0,0,0);if(FD>=0){this.Fk(0,Ai8/2,0,AdF/2,AdF/2,180,360,Apz);this.Fk(0,0,0,this.Iq
,this.JW,0,FD,FT);this.Fk(0,Ait/2,Aiu/2,Ade/2,Ade/2,JC,JC+180,Apy);}else{this.Fk(
0,Ai8/2,0,AdF/2,AdF/2,180,0,Apz);this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.Fk(
0,Ait/2,Aiu/2,Ade/2,Ade/2,JC,JC-180,Apy);}this.VM(0);return;}if(this.Rb===2){this.
Jt(0,(FT*2)+1);this.Jt(1,0);this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.Fk(0,0,0
,0,0,this.NM,this.NM-FD,FT);this.VM(0);return;}if(this.Rb===4){var Oo=this.Iq;var
LE=Math.sqrt(Oo*Oo);var Tl=((LE*0.25)|0)+3;this.Jt(0,((FT*2)+Tl)+2);this.Jt(1,0);
if(FD>=0){this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.Fk(0,0,0,0,0,this.NM,this.
NM-FD,FT);this.Fk(0,Oo/2,0,LE/2,LE/2,180,360,Tl);}else{this.Fk(0,0,0,this.Iq,this.
JW,0,FD,FT);this.Fk(0,0,0,0,0,this.NM,this.NM-FD,FT);this.Fk(0,Oo/2,0,LE/2,LE/2,
180,0,Tl);}this.VM(0);return;}if(this.Rb===5){var JC=FD;var sin=Math.sin(JC*A.k$
);var cos=Math.cos(JC*A.k$);var Oo=this.Iq*cos;var AiP=this.JW*sin;var LE=Math.sqrt((
Oo*Oo)+(AiP*AiP));var Tl=((LE*0.25)|0)+3;this.Jt(0,((FT*2)+Tl)+2);this.Jt(1,0);if(
FD>=0){this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.Fk(0,Oo/2,AiP/2,LE/2,LE/2,JC,
JC+180,Tl);this.Fk(0,0,0,0,0,this.NM,this.NM-FD,FT);}else{this.Fk(0,0,0,this.Iq,
this.JW,0,FD,FT);this.Fk(0,Oo/2,AiP/2,LE/2,LE/2,JC,JC-180,Tl);this.Fk(0,0,0,0,0,
this.NM,this.NM-FD,FT);}this.VM(0);return;}if(this.Rb===3){var JC=FD;var ByR=Math.
sin(JC*A.k$);var ByM=Math.cos(JC*A.k$);var Ai8=this.Iq;var Ait=this.Iq*ByM;var Aiu=
this.JW*ByR;var AdF=Math.sqrt(Ai8*Ai8);var Ade=Math.sqrt((Ait*Ait)+(Aiu*Aiu));var
Apz=((AdF*0.25)|0)+3;var Apy=((Ade*0.25)|0)+3;this.Jt(0,(((FT*2)+Apz)+Apy)+4);this.
Jt(1,0);if(FD>=0){this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.Fk(0,Ait/2,Aiu/2,Ade
/2,Ade/2,JC,JC+180,Apy);this.Fk(0,0,0,0,0,this.NM,this.NM-FD,FT);this.Fk(0,Ai8/2
,0,AdF/2,AdF/2,180,360,Apz);}else{this.Fk(0,0,0,this.Iq,this.JW,0,FD,FT);this.Fk(
0,Ait/2,Aiu/2,Ade/2,Ade/2,JC,JC-180,Apy);this.Fk(0,0,0,0,0,this.NM,this.NM-FD,FT
);this.Fk(0,Ai8/2,0,AdF/2,AdF/2,180,0,Apz);}this.VM(0);return;}},BlS:function(E){
if(E===this.NM)return;this.NM=E;if((this.Iq>0)&&(this.JW>0))A.pe([this,this.Ajb]
,this);},Bm8:function(E){if((E===this.Iq)&&(E===this.JW))return;this.Iq=E;this.JW=
E;if(!!this.NM)A.pe([this,this.Ajb],this);},Bng:function(E){if(E===this.Rb)return;
this.Rb=E;if((!!this.NM&&(this.Iq>0))&&(this.JW>0))A.pe([this,this.Ajb],this);},
_Init:function(aArg){C.Hy._Init.call(this,aArg);this.__proto__=C.AME;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AME.__proto__=C.Hy;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */