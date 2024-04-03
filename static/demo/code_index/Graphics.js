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
var E7=[0,0,0,0];var Hq="No graphics engine bitmap attached to this canvas";var IU=
"The canvas is already initialized with a graphics engine bitmap";var Is="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O2="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P7="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P8=[1,1];var CQ=[2,2];var Ff="Missing matrices to interpolate";
C.Canvas={C0:null,AEq:null,QM:A.wg,Pu:0,Ay_:false,Lb:function(){if(this.Ay_)this.
DetachBitmap();},Init:function(aArg){this.OL=true;},ArO:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.Ay_)throw new Error(BD);
this.FrameSize=E;this.Vz=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QM=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pu;for(this.Pu=this.NoOfFrames-
1;this.Pu>=0;this.Pu--)this.Ave(this.QM,this.QM,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pu=dstFrameNr;}}if(!(((B=this.QM)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEq)?B[1].call(B[0],
this):null;this.QM=E7;}},DetachBitmap:function(){if(!this.Ay_)throw new Error(Hq
);this.bitmap=null;this.Ay_=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.Vz=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IU);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay_=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vz=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Bh$:function(aClip,AoA,BbG,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoA){AoA.Ajb();attrSet=AoA.attrSet;}if(
!!BbG)attrString=BbG.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pu;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A59:function(
aClip,AfG,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0X,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfG||!AfG.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0X===1)orient=90;else if(A0X===2)orient=180;else if(A0X===
3)orient=270;var dstFrameNo=this.Pu;var dstBitmap=this.bitmap;var srcFont=AfG.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bib:function(aClip
,aBitmap,aFrameNr,aDstRect,Atk,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atk)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pu;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((Atk&0x1)===0x1);var top=((Atk&0x2)===0x2);var right=((
Atk&0x4)===0x4);var bottom=((Atk&0x8)===0x8);var interior=((Atk&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ho:function(aClip
,AoJ,aDstRect,aFlipY,aOffset,aWidth,BxX,Bw8,Bxs,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoJ||!AoJ.path)return;var style=0;switch(BxX){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bw8){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bxs){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pu;var path=AoJ.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhR:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
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
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BoA:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O2);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pu;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5H:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pu;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aen:function(aClip,AoJ,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bxa){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoJ||!AoJ.path)return;var nonZeroWinding=Bxa===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pu;var path=AoJ.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bic:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pu;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ave:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pu;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bie:function(aClip,aDstPos1,aDstPos2,Bx3,Bx4,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agp=Bx3;var Agq=Bx4;var Ady=aDstPos1;
var Adz=aDstPos2;if(A.aaX(Ady,Adz))return;if(Agp<=1)Agp=1;if(Agq<=1)Agq=1;var AiB=
Agp/2;var AiC=Agq/2;var Apj=Ady[0];var Apk=Ady[1];var Apl=Adz[0];var Apm=Adz[1];
var J_=Apl-Apj;var J$=Apm-Apk;var IY=Math.sqrt((J_*J_)+(J$*J$));if(((Agp>4096)||(
Agq>4096))||(IY>4096)){A.ab5("%s",P7);return;}J_=J_/IY;J$=J$/IY;var x1=Apj+(J$*AiB
);var y1=Apk-(J_*AiB);var x2=Apl+(J$*AiC);var y2=Apm-(J_*AiC);var x3=Apl-(J$*AiC
);var y3=Apm+(J_*AiC);var x4=Apj-(J$*AiB);var y4=Apk+(J_*AiB);var Bfl=A.aaL(A.aci.
AsU);var srcRect=[].concat(P8,A.abe(Bfl.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pu;var srcBitmap=Bfl.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au1:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pu;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEq)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxY={Wc:1,Wd:0,YW:0,YX:
0,We:0,Wf:1,YY:0,YZ:0,QX:0,QY:0,Y0:1,Wg:0,T8:0,T9:0,Y1:0,Wh:1,UP:0,P5:0,P4:0,AgT:
0,AlO:true,AB2:function(aX,aY){var Vp=((aX*this.QX)+(aY*this.QY))+this.Wg;var BY=((
aX*this.T8)+(aY*this.T9))+this.Wh;if(!!BY&&(BY!==1))Vp=Vp/BY;this.UP=Vp;return true;
},Afa:function(aX,aY){var AtJ=this.AgT;if(AtJ<0)return false;var Eo=((aX*this.Wc
)+(aY*this.Wd))+this.YX;var Dg=((aX*this.We)+(aY*this.Wf))+this.YZ;var Vp=((aX*this.
QX)+(aY*this.QY))+this.Wg;var BY=((aX*this.T8)+(aY*this.T9))+this.Wh;var AAU=1;if(
!!BY&&(BY!==1)){Eo=Eo/BY;Dg=Dg/BY;Vp=Vp/BY;}if(AtJ!==-Vp)AAU=1/(Vp+AtJ);if(!!AtJ
)AAU=AAU*AtJ;this.P4=Eo*AAU;this.P5=Dg*AAU;this.UP=Vp+AtJ;return true;},Bjo:function(
Ha,O7,Qc){if(!Ha||!O7)throw new Error(Ff);this.Wc=Ha.Wc+((O7.Wc-Ha.Wc)*Qc);this.
Wd=Ha.Wd+((O7.Wd-Ha.Wd)*Qc);this.YW=Ha.YW+((O7.YW-Ha.YW)*Qc);this.YX=Ha.YX+((O7.
YX-Ha.YX)*Qc);this.We=Ha.We+((O7.We-Ha.We)*Qc);this.Wf=Ha.Wf+((O7.Wf-Ha.Wf)*Qc);
this.YY=Ha.YY+((O7.YY-Ha.YY)*Qc);this.YZ=Ha.YZ+((O7.YZ-Ha.YZ)*Qc);this.QX=Ha.QX+((
O7.QX-Ha.QX)*Qc);this.QY=Ha.QY+((O7.QY-Ha.QY)*Qc);this.Y0=Ha.Y0+((O7.Y0-Ha.Y0)*Qc
);this.Wg=Ha.Wg+((O7.Wg-Ha.Wg)*Qc);this.T8=Ha.T8+((O7.T8-Ha.T8)*Qc);this.T9=Ha.T9+((
O7.T9-Ha.T9)*Qc);this.Y1=Ha.Y1+((O7.Y1-Ha.Y1)*Qc);this.Wh=Ha.Wh+((O7.Wh-Ha.Wh)*Qc
);this.AgT=Ha.AgT+((O7.AgT-Ha.AgT)*Qc);this.AlO=false;return this;},Afg:function(
AI8,AI9,AI_){this.Wc=this.Wc*AI8;this.Wd=this.Wd*AI9;this.YW=this.YW*AI_;this.We=
this.We*AI8;this.Wf=this.Wf*AI9;this.YY=this.YY*AI_;this.QX=this.QX*AI8;this.QY=
this.QY*AI9;this.Y0=this.Y0*AI_;this.T8=this.T8*AI8;this.T9=this.T9*AI9;this.Y1=
this.Y1*AI_;this.AlO=false;return this;},BpW:function(AI0,AI1,AI2){this.YX=((this.
YX+(this.Wc*AI0))+(this.Wd*AI1))+(this.YW*AI2);this.YZ=((this.YZ+(this.We*AI0))+(
this.Wf*AI1))+(this.YY*AI2);this.Wg=((this.Wg+(this.QX*AI0))+(this.QY*AI1))+(this.
Y0*AI2);this.Wh=((this.Wh+(this.T8*AI0))+(this.T9*AI1))+(this.Y1*AI2);this.AlO=false;
return this;},ADQ:function(){return this.AlO||((((((((((((((((this.Wc===1)&&!this.
Wd)&&!this.YW)&&!this.YX)&&!this.We)&&(this.Wf===1))&&!this.YY)&&!this.YZ)&&!this.
QX)&&!this.QY)&&(this.Y0===1))&&!this.Wg)&&!this.T8)&&!this.T9)&&!this.Y1)&&(this.
Wh===1));},ANL:function(Ah_,Aib,Ah$,Aic,AoR,AoS,Aia,Aid){var Azz=Ah$-AoR;var AzB=
Aic-AoS;var AzA=Aia-AoR;var AzC=Aid-AoS;var ABc=((Ah_-Ah$)+AoR)-Aia;var ABd=((Aib-
Aic)+AoS)-Aid;var Ao5=(Azz*AzC)-(AzB*AzA);if(!Ao5)return null;this.QX=((ABc*AzC)-(
ABd*AzA))/Ao5;this.QY=((Azz*ABd)-(AzB*ABc))/Ao5;this.Y0=0;this.Wg=1;this.Wc=(Ah$-
Ah_)+(this.QX*Ah$);this.Wd=(Aia-Ah_)+(this.QY*Aia);this.YW=0;this.YX=Ah_;this.We=(
Aic-Aib)+(this.QX*Aic);this.Wf=(Aid-Aib)+(this.QY*Aid);this.YY=0;this.YZ=Aib;this.
T8=0;this.T9=0;this.Y1=0;this.Wh=1;this.AlO=false;return this;},Bha:function(L6){
if(!L6)return this;this.Wc=L6.Wc;this.Wd=L6.Wd;this.YW=L6.YW;this.YX=L6.YX;this.
We=L6.We;this.Wf=L6.Wf;this.YY=L6.YY;this.YZ=L6.YZ;this.QX=L6.QX;this.QY=L6.QY;this.
Y0=L6.Y0;this.Wg=L6.Wg;this.T8=L6.T8;this.T9=L6.T9;this.Y1=L6.Y1;this.Wh=L6.Wh;this.
AlO=L6.AlO;this.AgT=L6.AgT;return this;},A7s:function(){this.Wc=1;this.Wd=0;this.
YW=0;this.YX=0;this.We=0;this.Wf=1;this.YY=0;this.YZ=0;this.QX=0;this.QY=0;this.
Y0=1;this.Wg=0;this.T8=0;this.T9=0;this.Y1=0;this.Wh=1;this.AlO=true;return this;
},_Init:function(aArg){this.__proto__=C.AxY;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7a={Bdq:1,Bdr:0,Bds:0,Bdt:0,Bdu:1,Bdv:0,Bdw:0,Bdx:0,Bdy:1,P5:0,P4:0,A2n:false
,Afa:function(Fh){if(!this.A2n)return false;var A4z=Fh[0];var A4B=Fh[1];var BCP=((
A4z*this.Bdq)+(A4B*this.Bdr))+this.Bds;var BCQ=((A4z*this.Bdt)+(A4B*this.Bdu))+this.
Bdv;var A3O=((A4z*this.Bdw)+(A4B*this.Bdx))+this.Bdy;if(!!A3O){this.P4=BCP/A3O;this.
P5=BCQ/A3O;return true;}return false;},ANL:function(Ah_,Aib,Ah$,Aic,AoR,AoS,Aia,
Aid){var Azz=Ah$-AoR;var AzB=Aic-AoS;var AzA=Aia-AoR;var AzC=Aid-AoS;var ABc=((Ah_-
Ah$)+AoR)-Aia;var ABd=((Aib-Aic)+AoS)-Aid;var Ao5=(Azz*AzC)-(AzB*AzA);this.A2n=false;
if(!Ao5)return;var AiD=((ABc*AzC)-(ABd*AzA))/Ao5;var BI=((Azz*ABd)-(AzB*ABc))/Ao5;
var a=(Ah$-Ah_)+(AiD*Ah$);var Rx=(Aia-Ah_)+(BI*Aia);var B3=Ah_;var d=(Aic-Aib)+(
AiD*Aic);var AJT=(Aid-Aib)+(BI*Aid);var LJ=Aib;this.Bdq=AJT-(LJ*BI);this.Bdr=(B3
*BI)-Rx;this.Bds=(Rx*LJ)-(B3*AJT);this.Bdt=(LJ*AiD)-d;this.Bdu=a-(B3*AiD);this.Bdv=(
B3*d)-(a*LJ);this.Bdw=(d*BI)-(AJT*AiD);this.Bdx=(Rx*AiD)-(a*BI);this.Bdy=(a*AJT)-(
Rx*d);this.A2n=true;},_Init:function(aArg){this.__proto__=C.A7a;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4_={C4:A.wf,attrString:null,Lb:function(){this.A5Z(
);},A5Z:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C4=Cc;},Aj3:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},Bi8:function(
){return this.C4;},BnX:function(AoA,aString,aWidth,aEnableBidiText){this.A5Z();var
attrSet=null;var handle=null;var s=Cc;if(!!AoA){AoA.Ajb();attrSet=AoA.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C4=s;},_Init:function(
aArg){this.__proto__=C.A4_;A.h7++;},_Done:function(){this.Lb();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aih:null,AfR:null,Aig:null,Apg:A.abi(4,null,null),Xn:A.abi(10,null,
null),A6r:null,A5l:null,attrSet:null,Azk:A.abi(10,0,{0:0xFF000000}),Lb:function(
){this.AJR();},AJR:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ajb:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiZ();var noOfBitmaps=this.BiY();var noOfFonts=this.Bi0();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKm=this.Aig;var Ado=this.AfR;var AKn=this.Aih;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azk.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKm){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKm.KE.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKm=AKm.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xn.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Ado){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Ado.KE.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Ado=Ado.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Apg.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKn
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKn.KE.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKn=AKn.Ah;}},AKA:function(G){var handle=
this.attrSet;var Ado=this.AfR;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xn.Get(inx)&&this.Xn.Get(inx).OL){var bitmap=this.Xn.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Ado){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Ado.KE.Get(lnx)&&Ado.
KE.Get(lnx).OL){var bitmap=Ado.KE.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Ado=Ado.Ah;}A.we(this,1);},Bmt:function(E){this.AUx(3,E);},A9V:function(
E){this.AUx(1,E);},Ahp:function(E){this.AUx(0,E);},A9u:function(E){this.BoM(0,E);
},BlS:function(E){this.AGy(3,E);},A9y:function(E){this.AGy(2,E);},A9x:function(E
){this.AGy(1,E);},Ahm:function(E){this.AGy(0,E);},AUx:function(aFontNo,AfG){var Adj=
aFontNo;var HW=false;if(Adj<0)return;if(Adj<4){HW=this.Apg.Get(Adj)!==AfG;this.Apg.
Set(Adj,AfG);}else{var Bz=this.Aih;Adj=Adj-4;while(!!Bz&&(Adj>=20)){Bz=Bz.Ah;Adj=
Adj-20;}if(!!Bz){HW=Bz.KE.Get(Adj)!==AfG;Bz.KE.Set(Adj,AfG);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfG)font=AfG.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},BoS:function(Xi){var HW=false;if(Xi<4)Xi=4;if(Xi>256
)Xi=256;Xi=Xi-4;if((Xi>0)&&!this.Aih){this.Aih=A._NewObject(C.ABR,0);HW=true;}if(
!Xi&&!!this.Aih){this.Aih=null;HW=true;}var Bz=this.Aih;while(Xi>0){if((Xi>20)&&
!Bz.Ah){Bz.Ah=A._NewObject(C.ABR,0);HW=true;}Xi=Xi-20;if(Xi>0)Bz=Bz.Ah;}if(!!Bz&&
!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJR();A.we(this,1);}},Bi0:function(){var
CB=4;var Bz=this.Aih;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},BoM:function(aBitmapNo
,aBitmap){var Qg=aBitmapNo;var HW=false;if(Qg<0)return;if(Qg<10){HW=this.Xn.Get(
Qg)!==aBitmap;if(!!this.Xn.Get(Qg)&&this.Xn.Get(Qg).OL)A.z9([this,this.AKA],this.
Xn.Get(Qg),0);this.Xn.Set(Qg,aBitmap);if(!!aBitmap&&aBitmap.OL)A.zV([this,this.AKA
],aBitmap,0);}else{var Bz=this.AfR;Qg=Qg-10;while(!!Bz&&(Qg>=20)){Bz=Bz.Ah;Qg=Qg-
20;}if(!!Bz){HW=Bz.KE.Get(Qg)!==aBitmap;if(!!Bz.KE.Get(Qg)&&Bz.KE.Get(Qg).OL)A.z9([
this,this.AKA],Bz.KE.Get(Qg),0);Bz.KE.Set(Qg,aBitmap);if(!!aBitmap&&aBitmap.OL)A.
zV([this,this.AKA],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},BoQ:function(Xg){var HW=false;if(Xg<10)Xg=10;if(Xg>
256)Xg=256;Xg=Xg-10;if((Xg>0)&&!this.AfR){this.AfR=A._NewObject(C.ABP,0);HW=true;
}if(!Xg&&!!this.AfR){this.AfR=null;HW=true;}var Bz=this.AfR;while(Xg>0){if((Xg>20
)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABP,0);HW=true;}Xg=Xg-20;if(Xg>0)Bz=Bz.Ah;}if(!!
Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJR();A.we(this,1);}},BiY:function(
){var CB=10;var Bz=this.AfR;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},AGy:function(
aColorNo,aColor){var Ac_=aColorNo;var HW=false;if(Ac_<0)return;if(Ac_<10){HW=this.
Azk.Get(Ac_)!==aColor;this.Azk.Set(Ac_,aColor);}else{var Bz=this.Aig;Ac_=Ac_-10;
while(!!Bz&&(Ac_>=20)){Bz=Bz.Ah;Ac_=Ac_-20;}if(!!Bz){HW=Bz.KE.Get(Ac_)!==aColor;
Bz.KE.Set(Ac_,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},BoR:function(Xh){var HW=false;if(Xh<10)Xh=
10;if(Xh>256)Xh=256;Xh=Xh-10;if((Xh>0)&&!this.Aig){this.Aig=A._NewObject(C.ABQ,0
);HW=true;}if(!Xh&&!!this.Aig){this.Aig=null;HW=true;}var Bz=this.Aig;while(Xh>0
){if((Xh>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABQ,0);HW=true;}Xh=Xh-20;if(Xh>0)Bz=Bz.
Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJR();A.we(this,1);}},BiZ:
function(){var CB=10;var Bz=this.Aig;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},
_Init:function(aArg){(this.Apg=[]).__proto__=C.AttrSet.Apg;(this.Xn=[]).__proto__=
C.AttrSet.Xn;(this.Azk=[]).__proto__=C.AttrSet.Azk;this.__proto__=C.AttrSet;this.
Apg.Set(0,A.aaL(A.aci.ACw));this.Xn.Set(0,A.aaL(A.aci.TK));this.A6r=A.aaL(A.aci.
ACw);this.A5l=A.aaL(A.aci.TK);A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aih)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aig)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Apg,D);A.aa6(this.Xn,D
);if((B=this.A6r)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5l)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABR={Ah:null,KE:A.abi(
20,null,null),_Init:function(aArg){(this.KE=[]).__proto__=C.ABR.KE;this.__proto__=
C.ABR;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KE,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABP={Ah:null,KE:A.abi(20,null,null),
_Init:function(aArg){(this.KE=[]).__proto__=C.ABP.KE;this.__proto__=C.ABP;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KE,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABQ={Ah:null,KE:A.abi(20,0,null),_Init:function(aArg
){(this.KE=[]).__proto__=C.ABQ.KE;this.__proto__=C.ABQ;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hy={path:null,Lb:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adw:function(G){A.we(this,0);},Fl:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adw
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4M:
function(aSubPathNo,aX,aY){A.pe([this,this.Adw],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VM:function(aSubPathNo){A.
pe([this,this.Adw],this);var handle=this.path;A.jU(handle,aSubPathNo);},VE:function(
aSubPathNo,aX,aY){A.pe([this,this.Adw],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Ju:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axu(1);A.pe([this,this.Adw],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},Bi1:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axu:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.Bi1()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adw],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hy;A.h7++;},_Done:function(){
this.Lb();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Au2={Left:0x1,ZO:0x2,Right:0x4,A5m:0x8,BEp:0x10
};C.BD7={BDV:0,BEZ:1};C.BE7={BDe:0,BEL:1,Bov:2};C.BE6={BD9:0,BFQ:1,Bov:2,AxR:3};
C.BC8={BC7:0,BFL:1,BE$:2,BFa:3,BFc:4,BFb:5};C.AMG={NM:360,JX:0,Iq:0,Rb:0,Ajc:function(
G){var B;var FF=this.NM;var FU;if((FF>=360)||(FF<=-360))FF=360;this.Axu(2);{var Az=
Math.max(this.Iq,this.JX);FU=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FU*=
4;if(FF<360)FU=((FF*FU)/360)|0;FU=Math.max(FU,-FU,1);}if(((!FF||!this.Iq)||!this.
JX)||(((((this.Rb===2)||(this.Rb===3))||(this.Rb===4))||(this.Rb===5))&&((0>=this.
Iq)||(0>=this.JX)))){this.Ju(0,0);this.Ju(1,0);return;}if(FF===360){this.Ju(0,FU+
1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JX,0,360,FU);this.VM(0);return;}if(!this.
Rb){this.Ju(0,FU+1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);return;}
if(this.Rb===1){this.Ju(0,FU+1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JX,0,FF,
FU);this.VM(0);return;}if(this.Rb===2){this.Ju(0,FU+1);this.Ju(1,0);this.VE(0,0,
0);this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.VM(0);return;}if(this.Rb===4){var
Oo=this.Iq;var LE=Math.sqrt(Oo*Oo);var Tk=((LE*0.25)|0)+3;this.Ju(0,(FU+Tk)+2);this.
Ju(1,0);this.VE(0,0,0);if(FF>=0)this.Fl(0,Oo/2,0,LE/2,LE/2,180,360,Tk);else this.
Fl(0,Oo/2,0,LE/2,LE/2,180,0,Tk);this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.VM(0
);return;}if(this.Rb===5){var JD=FF;var Oo=this.Iq*Math.cos(JD*A.k$);var AiQ=this.
JX*Math.sin(JD*A.k$);var LE=Math.sqrt((Oo*Oo)+(AiQ*AiQ));var Tk=((LE*0.25)|0)+3;
this.Ju(0,(FU+Tk)+2);this.Ju(1,0);this.VE(0,0,0);this.Fl(0,0,0,this.Iq,this.JX,0
,FF,FU);if(FF>=0)this.Fl(0,Oo/2,AiQ/2,LE/2,LE/2,JD,JD+180,Tk);else this.Fl(0,Oo/
2,AiQ/2,LE/2,LE/2,JD,JD-180,Tk);this.VM(0);return;}if(this.Rb===3){var Ai9=this.
Iq;var AdF=Math.sqrt(Ai9*Ai9);var JD=FF;var Aiu=this.Iq*Math.cos(JD*A.k$);var Aiv=
this.JX*Math.sin(JD*A.k$);var Ade=Math.sqrt((Aiu*Aiu)+(Aiv*Aiv));var ApB=((AdF*0.25
)|0)+3;var ApA=((Ade*0.25)|0)+3;this.Ju(0,((FU+ApB)+ApA)+10);this.Ju(1,0);this.VE(
0,0,0);if(FF>=0){this.Fl(0,Ai9/2,0,AdF/2,AdF/2,180,360,ApB);this.Fl(0,0,0,this.Iq
,this.JX,0,FF,FU);this.Fl(0,Aiu/2,Aiv/2,Ade/2,Ade/2,JD,JD+180,ApA);}else{this.Fl(
0,Ai9/2,0,AdF/2,AdF/2,180,0,ApB);this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.Fl(
0,Aiu/2,Aiv/2,Ade/2,Ade/2,JD,JD-180,ApA);}this.VM(0);return;}if(this.Rb===2){this.
Ju(0,(FU*2)+1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.Fl(0,0,0
,0,0,this.NM,this.NM-FF,FU);this.VM(0);return;}if(this.Rb===4){var Oo=this.Iq;var
LE=Math.sqrt(Oo*Oo);var Tk=((LE*0.25)|0)+3;this.Ju(0,((FU*2)+Tk)+2);this.Ju(1,0);
if(FF>=0){this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.Fl(0,0,0,0,0,this.NM,this.
NM-FF,FU);this.Fl(0,Oo/2,0,LE/2,LE/2,180,360,Tk);}else{this.Fl(0,0,0,this.Iq,this.
JX,0,FF,FU);this.Fl(0,0,0,0,0,this.NM,this.NM-FF,FU);this.Fl(0,Oo/2,0,LE/2,LE/2,
180,0,Tk);}this.VM(0);return;}if(this.Rb===5){var JD=FF;var sin=Math.sin(JD*A.k$
);var cos=Math.cos(JD*A.k$);var Oo=this.Iq*cos;var AiQ=this.JX*sin;var LE=Math.sqrt((
Oo*Oo)+(AiQ*AiQ));var Tk=((LE*0.25)|0)+3;this.Ju(0,((FU*2)+Tk)+2);this.Ju(1,0);if(
FF>=0){this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.Fl(0,Oo/2,AiQ/2,LE/2,LE/2,JD,
JD+180,Tk);this.Fl(0,0,0,0,0,this.NM,this.NM-FF,FU);}else{this.Fl(0,0,0,this.Iq,
this.JX,0,FF,FU);this.Fl(0,Oo/2,AiQ/2,LE/2,LE/2,JD,JD-180,Tk);this.Fl(0,0,0,0,0,
this.NM,this.NM-FF,FU);}this.VM(0);return;}if(this.Rb===3){var JD=FF;var By_=Math.
sin(JD*A.k$);var By5=Math.cos(JD*A.k$);var Ai9=this.Iq;var Aiu=this.Iq*By5;var Aiv=
this.JX*By_;var AdF=Math.sqrt(Ai9*Ai9);var Ade=Math.sqrt((Aiu*Aiu)+(Aiv*Aiv));var
ApB=((AdF*0.25)|0)+3;var ApA=((Ade*0.25)|0)+3;this.Ju(0,(((FU*2)+ApB)+ApA)+4);this.
Ju(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.Fl(0,Aiu/2,Aiv/2,Ade
/2,Ade/2,JD,JD+180,ApA);this.Fl(0,0,0,0,0,this.NM,this.NM-FF,FU);this.Fl(0,Ai9/2
,0,AdF/2,AdF/2,180,360,ApB);}else{this.Fl(0,0,0,this.Iq,this.JX,0,FF,FU);this.Fl(
0,Aiu/2,Aiv/2,Ade/2,Ade/2,JD,JD-180,ApA);this.Fl(0,0,0,0,0,this.NM,this.NM-FF,FU
);this.Fl(0,Ai9/2,0,AdF/2,AdF/2,180,0,ApB);}this.VM(0);return;}},Bl7:function(E){
if(E===this.NM)return;this.NM=E;if((this.Iq>0)&&(this.JX>0))A.pe([this,this.Ajc]
,this);},Bnl:function(E){if((E===this.Iq)&&(E===this.JX))return;this.Iq=E;this.JX=
E;if(!!this.NM)A.pe([this,this.Ajc],this);},Bnv:function(E){if(E===this.Rb)return;
this.Rb=E;if((!!this.NM&&(this.Iq>0))&&(this.JX>0))A.pe([this,this.Ajc],this);},
_Init:function(aArg){C.Hy._Init.call(this,aArg);this.__proto__=C.AMG;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMG.__proto__=C.Hy;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */