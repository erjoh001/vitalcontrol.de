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
var E6=[0,0,0,0];var Hp="No graphics engine bitmap attached to this canvas";var IS=
"The canvas is already initialized with a graphics engine bitmap";var Ir="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O1="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P3="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P4=[1,1];var CQ=[2,2];var Fe="Missing matrices to interpolate";
C.Canvas={C0:null,AEj:null,QK:A.wg,Ps:0,Ay1:false,La:function(){if(this.Ay1)this.
DetachBitmap();},Init:function(aArg){this.OK=true;},ArI:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.Ay1)throw new Error(BD);
this.FrameSize=E;this.Vw=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QK=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Ps;for(this.Ps=this.NoOfFrames-
1;this.Ps>=0;this.Ps--)this.Au8(this.QK,this.QK,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ps=dstFrameNr;}}if(!(((B=this.QK)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEj)?B[1].call(B[0],
this):null;this.QK=E6;}},DetachBitmap:function(){if(!this.Ay1)throw new Error(Hp
);this.bitmap=null;this.Ay1=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.Vw=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IS);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay1=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vw=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhF:function(aClip,Aov,Bbf,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aov){Aov.Ai9();attrSet=Aov.attrSet;}if(
!!Bbf)attrString=Bbf.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Ps;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5R:function(
aClip,AfF,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0E,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfF||!AfF.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0E===1)orient=90;else if(A0E===2)orient=180;else if(A0E===
3)orient=270;var dstFrameNo=this.Ps;var dstBitmap=this.bitmap;var srcFont=AfF.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhH:function(aClip
,aBitmap,aFrameNr,aDstRect,Atf,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atf)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Ps;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((Atf&0x1)===0x1);var top=((Atf&0x2)===0x2);var right=((
Atf&0x4)===0x4);var bottom=((Atf&0x8)===0x8);var interior=((Atf&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hn:function(aClip
,AoE,aDstRect,aFlipY,aOffset,aWidth,Bxh,Bwr,BwN,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoE||!AoE.path)return;var style=0;switch(Bxh){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bwr){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BwN){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Ps;var path=AoE.path;{A.ab3(dstBitmap,path,dstFrameNo
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
y2-y1)<-4096)){A.ab5("%s",Ir);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Ps;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BnY:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O1);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Ps;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5m:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Ps;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aek:function(aClip,AoE,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bwv){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoE||!AoE.path)return;var nonZeroWinding=Bwv===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Ps;var path=AoE.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhI:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Ps;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Au8:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Ps;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BhK:function(aClip,aDstPos1,aDstPos2,Bxn,Bxo,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agn=Bxn;var Ago=Bxo;var Adv=aDstPos1;
var Adw=aDstPos2;if(A.aaX(Adv,Adw))return;if(Agn<=1)Agn=1;if(Ago<=1)Ago=1;var Aix=
Agn/2;var Aiy=Ago/2;var Ape=Adv[0];var Apf=Adv[1];var Apg=Adw[0];var Aph=Adw[1];
var J6=Apg-Ape;var J7=Aph-Apf;var IW=Math.sqrt((J6*J6)+(J7*J7));if(((Agn>4096)||(
Ago>4096))||(IW>4096)){A.ab5("%s",P3);return;}J6=J6/IW;J7=J7/IW;var x1=Ape+(J7*Aix
);var y1=Apf-(J6*Aix);var x2=Apg+(J7*Aiy);var y2=Aph-(J6*Aiy);var x3=Apg-(J7*Aiy
);var y3=Aph+(J6*Aiy);var x4=Ape-(J7*Aix);var y4=Apf+(J6*Aix);var BeU=A.aaL(A.aci.
AsM);var srcRect=[].concat(P4,A.abe(BeU.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Ps;var srcBitmap=BeU.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AuT:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Ps;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.La();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxQ={V$:1,Wa:0,YV:0,YW:
0,Wb:0,Wc:1,YX:0,YY:0,QV:0,QW:0,YZ:1,Wd:0,T4:0,T5:0,Y0:0,We:1,UM:0,P1:0,P0:0,AgR:
0,AlH:true,ABU:function(aX,aY){var Vm=((aX*this.QV)+(aY*this.QW))+this.Wd;var BY=((
aX*this.T4)+(aY*this.T5))+this.We;if(!!BY&&(BY!==1))Vm=Vm/BY;this.UM=Vm;return true;
},Ae9:function(aX,aY){var AtD=this.AgR;if(AtD<0)return false;var Eo=((aX*this.V$
)+(aY*this.Wa))+this.YW;var Dg=((aX*this.Wb)+(aY*this.Wc))+this.YY;var Vm=((aX*this.
QV)+(aY*this.QW))+this.Wd;var BY=((aX*this.T4)+(aY*this.T5))+this.We;var AAM=1;if(
!!BY&&(BY!==1)){Eo=Eo/BY;Dg=Dg/BY;Vm=Vm/BY;}if(AtD!==-Vm)AAM=1/(Vm+AtD);if(!!AtD
)AAM=AAM*AtD;this.P0=Eo*AAM;this.P1=Dg*AAM;this.UM=Vm+AtD;return true;},BiT:function(
G$,O5,P$){if(!G$||!O5)throw new Error(Fe);this.V$=G$.V$+((O5.V$-G$.V$)*P$);this.
Wa=G$.Wa+((O5.Wa-G$.Wa)*P$);this.YV=G$.YV+((O5.YV-G$.YV)*P$);this.YW=G$.YW+((O5.
YW-G$.YW)*P$);this.Wb=G$.Wb+((O5.Wb-G$.Wb)*P$);this.Wc=G$.Wc+((O5.Wc-G$.Wc)*P$);
this.YX=G$.YX+((O5.YX-G$.YX)*P$);this.YY=G$.YY+((O5.YY-G$.YY)*P$);this.QV=G$.QV+((
O5.QV-G$.QV)*P$);this.QW=G$.QW+((O5.QW-G$.QW)*P$);this.YZ=G$.YZ+((O5.YZ-G$.YZ)*P$
);this.Wd=G$.Wd+((O5.Wd-G$.Wd)*P$);this.T4=G$.T4+((O5.T4-G$.T4)*P$);this.T5=G$.T5+((
O5.T5-G$.T5)*P$);this.Y0=G$.Y0+((O5.Y0-G$.Y0)*P$);this.We=G$.We+((O5.We-G$.We)*P$
);this.AgR=G$.AgR+((O5.AgR-G$.AgR)*P$);this.AlH=false;return this;},Afd:function(
AI4,AI5,AI6){this.V$=this.V$*AI4;this.Wa=this.Wa*AI5;this.YV=this.YV*AI6;this.Wb=
this.Wb*AI4;this.Wc=this.Wc*AI5;this.YX=this.YX*AI6;this.QV=this.QV*AI4;this.QW=
this.QW*AI5;this.YZ=this.YZ*AI6;this.T4=this.T4*AI4;this.T5=this.T5*AI5;this.Y0=
this.Y0*AI6;this.AlH=false;return this;},Bpf:function(AIW,AIX,AIY){this.YW=((this.
YW+(this.V$*AIW))+(this.Wa*AIX))+(this.YV*AIY);this.YY=((this.YY+(this.Wb*AIW))+(
this.Wc*AIX))+(this.YX*AIY);this.Wd=((this.Wd+(this.QV*AIW))+(this.QW*AIX))+(this.
YZ*AIY);this.We=((this.We+(this.T4*AIW))+(this.T5*AIX))+(this.Y0*AIY);this.AlH=false;
return this;},ADK:function(){return this.AlH||((((((((((((((((this.V$===1)&&!this.
Wa)&&!this.YV)&&!this.YW)&&!this.Wb)&&(this.Wc===1))&&!this.YX)&&!this.YY)&&!this.
QV)&&!this.QW)&&(this.YZ===1))&&!this.Wd)&&!this.T4)&&!this.T5)&&!this.Y0)&&(this.
We===1));},ANE:function(Ah6,Ah9,Ah7,Ah_,AoM,AoN,Ah8,Ah$){var Azr=Ah7-AoM;var Azt=
Ah_-AoN;var Azs=Ah8-AoM;var Azu=Ah$-AoN;var AA6=((Ah6-Ah7)+AoM)-Ah8;var AA7=((Ah9-
Ah_)+AoN)-Ah$;var Ao0=(Azr*Azu)-(Azt*Azs);if(!Ao0)return null;this.QV=((AA6*Azu)-(
AA7*Azs))/Ao0;this.QW=((Azr*AA7)-(Azt*AA6))/Ao0;this.YZ=0;this.Wd=1;this.V$=(Ah7-
Ah6)+(this.QV*Ah7);this.Wa=(Ah8-Ah6)+(this.QW*Ah8);this.YV=0;this.YW=Ah6;this.Wb=(
Ah_-Ah9)+(this.QV*Ah_);this.Wc=(Ah$-Ah9)+(this.QW*Ah$);this.YX=0;this.YY=Ah9;this.
T4=0;this.T5=0;this.Y0=0;this.We=1;this.AlH=false;return this;},BgK:function(L6){
if(!L6)return this;this.V$=L6.V$;this.Wa=L6.Wa;this.YV=L6.YV;this.YW=L6.YW;this.
Wb=L6.Wb;this.Wc=L6.Wc;this.YX=L6.YX;this.YY=L6.YY;this.QV=L6.QV;this.QW=L6.QW;this.
YZ=L6.YZ;this.Wd=L6.Wd;this.T4=L6.T4;this.T5=L6.T5;this.Y0=L6.Y0;this.We=L6.We;this.
AlH=L6.AlH;this.AgR=L6.AgR;return this;},A7a:function(){this.V$=1;this.Wa=0;this.
YV=0;this.YW=0;this.Wb=0;this.Wc=1;this.YX=0;this.YY=0;this.QV=0;this.QW=0;this.
YZ=1;this.Wd=0;this.T4=0;this.T5=0;this.Y0=0;this.We=1;this.AlH=true;return this;
},_Init:function(aArg){this.__proto__=C.AxQ;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A6U={BcY:1,BcZ:0,Bc0:0,Bc1:0,Bc2:1,Bc3:0,Bc4:0,Bc5:0,Bc6:1,P1:0,P0:0,A15:false
,Ae9:function(Fg){if(!this.A15)return false;var A4e=Fg[0];var A4g=Fg[1];var BB9=((
A4e*this.BcY)+(A4g*this.BcZ))+this.Bc0;var BB_=((A4e*this.Bc1)+(A4g*this.Bc2))+this.
Bc3;var A3t=((A4e*this.Bc4)+(A4g*this.Bc5))+this.Bc6;if(!!A3t){this.P0=BB9/A3t;this.
P1=BB_/A3t;return true;}return false;},ANE:function(Ah6,Ah9,Ah7,Ah_,AoM,AoN,Ah8,
Ah$){var Azr=Ah7-AoM;var Azt=Ah_-AoN;var Azs=Ah8-AoM;var Azu=Ah$-AoN;var AA6=((Ah6-
Ah7)+AoM)-Ah8;var AA7=((Ah9-Ah_)+AoN)-Ah$;var Ao0=(Azr*Azu)-(Azt*Azs);this.A15=false;
if(!Ao0)return;var Aiz=((AA6*Azu)-(AA7*Azs))/Ao0;var BI=((Azr*AA7)-(Azt*AA6))/Ao0;
var a=(Ah7-Ah6)+(Aiz*Ah7);var Rv=(Ah8-Ah6)+(BI*Ah8);var B3=Ah6;var d=(Ah_-Ah9)+(
Aiz*Ah_);var AJP=(Ah$-Ah9)+(BI*Ah$);var LJ=Ah9;this.BcY=AJP-(LJ*BI);this.BcZ=(B3
*BI)-Rv;this.Bc0=(Rv*LJ)-(B3*AJP);this.Bc1=(LJ*Aiz)-d;this.Bc2=a-(B3*Aiz);this.Bc3=(
B3*d)-(a*LJ);this.Bc4=(d*BI)-(AJP*Aiz);this.Bc5=(Rv*Aiz)-(a*BI);this.Bc6=(a*AJP)-(
Rv*d);this.A15=true;},_Init:function(aArg){this.__proto__=C.A6U;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4P={C3:A.wf,attrString:null,La:function(){this.A5D(
);},A5D:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C3=Cc;},AjZ:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiC:function(
){return this.C3;},Bnl:function(Aov,aString,aWidth,aEnableBidiText){this.A5D();var
attrSet=null;var handle=null;var s=Cc;if(!!Aov){Aov.Ai9();attrSet=Aov.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C3=s;},_Init:function(
aArg){this.__proto__=C.A4P;A.h7++;},_Done:function(){this.La();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aid:null,AfQ:null,Aic:null,Apb:A.abi(4,null,null),Xl:A.abi(10,null,
null),A5$:null,A42:null,attrSet:null,Azb:A.abi(10,0,{0:0xFF000000}),La:function(
){this.AJN();},AJN:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ai9:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.Bit();var noOfBitmaps=this.Bis();var noOfFonts=this.Biu();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKi=this.Aic;var Adl=this.AfQ;var AKj=this.Aid;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azb.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKi){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKi.KC.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKi=AKi.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xl.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adl){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adl.KC.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adl=Adl.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Apb.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKj
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKj.KC.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKj=AKj.Ah;}},AKv:function(G){var handle=
this.attrSet;var Adl=this.AfQ;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xl.Get(inx)&&this.Xl.Get(inx).OK){var bitmap=this.Xl.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adl){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adl.KC.Get(lnx)&&Adl.
KC.Get(lnx).OK){var bitmap=Adl.KC.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adl=Adl.Ah;}A.we(this,1);},BlU:function(E){this.AUj(3,E);},A9B:function(
E){this.AUj(1,E);},Ahm:function(E){this.AUj(0,E);},A9b:function(E){this.Bn8(0,E);
},Blh:function(E){this.AGr(3,E);},A9f:function(E){this.AGr(2,E);},A9e:function(E
){this.AGr(1,E);},Ahj:function(E){this.AGr(0,E);},AUj:function(aFontNo,AfF){var Adg=
aFontNo;var HW=false;if(Adg<0)return;if(Adg<4){HW=this.Apb.Get(Adg)!==AfF;this.Apb.
Set(Adg,AfF);}else{var Bz=this.Aid;Adg=Adg-4;while(!!Bz&&(Adg>=20)){Bz=Bz.Ah;Adg=
Adg-20;}if(!!Bz){HW=Bz.KC.Get(Adg)!==AfF;Bz.KC.Set(Adg,AfF);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfF)font=AfF.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},Boc:function(Xg){var HW=false;if(Xg<4)Xg=4;if(Xg>256
)Xg=256;Xg=Xg-4;if((Xg>0)&&!this.Aid){this.Aid=A._NewObject(C.ABJ,0);HW=true;}if(
!Xg&&!!this.Aid){this.Aid=null;HW=true;}var Bz=this.Aid;while(Xg>0){if((Xg>20)&&
!Bz.Ah){Bz.Ah=A._NewObject(C.ABJ,0);HW=true;}Xg=Xg-20;if(Xg>0)Bz=Bz.Ah;}if(!!Bz&&
!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJN();A.we(this,1);}},Biu:function(){var
CB=4;var Bz=this.Aid;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},Bn8:function(aBitmapNo
,aBitmap){var Qd=aBitmapNo;var HW=false;if(Qd<0)return;if(Qd<10){HW=this.Xl.Get(
Qd)!==aBitmap;if(!!this.Xl.Get(Qd)&&this.Xl.Get(Qd).OK)A.z9([this,this.AKv],this.
Xl.Get(Qd),0);this.Xl.Set(Qd,aBitmap);if(!!aBitmap&&aBitmap.OK)A.zV([this,this.AKv
],aBitmap,0);}else{var Bz=this.AfQ;Qd=Qd-10;while(!!Bz&&(Qd>=20)){Bz=Bz.Ah;Qd=Qd-
20;}if(!!Bz){HW=Bz.KC.Get(Qd)!==aBitmap;if(!!Bz.KC.Get(Qd)&&Bz.KC.Get(Qd).OK)A.z9([
this,this.AKv],Bz.KC.Get(Qd),0);Bz.KC.Set(Qd,aBitmap);if(!!aBitmap&&aBitmap.OK)A.
zV([this,this.AKv],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},Boa:function(Xe){var HW=false;if(Xe<10)Xe=10;if(Xe>
256)Xe=256;Xe=Xe-10;if((Xe>0)&&!this.AfQ){this.AfQ=A._NewObject(C.ABH,0);HW=true;
}if(!Xe&&!!this.AfQ){this.AfQ=null;HW=true;}var Bz=this.AfQ;while(Xe>0){if((Xe>20
)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABH,0);HW=true;}Xe=Xe-20;if(Xe>0)Bz=Bz.Ah;}if(!!
Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJN();A.we(this,1);}},Bis:function(
){var CB=10;var Bz=this.AfQ;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},AGr:function(
aColorNo,aColor){var Ac7=aColorNo;var HW=false;if(Ac7<0)return;if(Ac7<10){HW=this.
Azb.Get(Ac7)!==aColor;this.Azb.Set(Ac7,aColor);}else{var Bz=this.Aic;Ac7=Ac7-10;
while(!!Bz&&(Ac7>=20)){Bz=Bz.Ah;Ac7=Ac7-20;}if(!!Bz){HW=Bz.KC.Get(Ac7)!==aColor;
Bz.KC.Set(Ac7,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},Bob:function(Xf){var HW=false;if(Xf<10)Xf=
10;if(Xf>256)Xf=256;Xf=Xf-10;if((Xf>0)&&!this.Aic){this.Aic=A._NewObject(C.ABI,0
);HW=true;}if(!Xf&&!!this.Aic){this.Aic=null;HW=true;}var Bz=this.Aic;while(Xf>0
){if((Xf>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABI,0);HW=true;}Xf=Xf-20;if(Xf>0)Bz=Bz.
Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJN();A.we(this,1);}},Bit:
function(){var CB=10;var Bz=this.Aic;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},
_Init:function(aArg){(this.Apb=[]).__proto__=C.AttrSet.Apb;(this.Xl=[]).__proto__=
C.AttrSet.Xl;(this.Azb=[]).__proto__=C.AttrSet.Azb;this.__proto__=C.AttrSet;this.
Apb.Set(0,A.aaL(A.aci.ACo));this.Xl.Set(0,A.aaL(A.aci.TH));this.A5$=A.aaL(A.aci.
ACo);this.A42=A.aaL(A.aci.TH);A.h7++;},_Done:function(){this.La();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aid)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aic)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Apb,D);A.aa6(this.Xl,D
);if((B=this.A5$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A42)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABJ={Ah:null,KC:A.abi(
20,null,null),_Init:function(aArg){(this.KC=[]).__proto__=C.ABJ.KC;this.__proto__=
C.ABJ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KC,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABH={Ah:null,KC:A.abi(20,null,null),
_Init:function(aArg){(this.KC=[]).__proto__=C.ABH.KC;this.__proto__=C.ABH;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KC,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABI={Ah:null,KC:A.abi(20,0,null),_Init:function(aArg
){(this.KC=[]).__proto__=C.ABI.KC;this.__proto__=C.ABI;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hy={path:null,La:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adt:function(G){A.we(this,0);},Fk:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adt
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4r:
function(aSubPathNo,aX,aY){A.pe([this,this.Adt],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VJ:function(aSubPathNo){A.
pe([this,this.Adt],this);var handle=this.path;A.jU(handle,aSubPathNo);},VB:function(
aSubPathNo,aX,aY){A.pe([this,this.Adt],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Js:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axm(1);A.pe([this,this.Adt],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},Biv:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axm:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.Biv()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adt],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hy;A.h7++;},_Done:function(){
this.La();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.AuU={Left:0x1,ZN:0x2,Right:0x4,A43:0x8,BDJ:0x10
};C.BDp={BDd:0,BEh:1};C.BEp={BCy:0,BD5:1,BnT:2};C.BEo={BDr:0,BE_:1,BnT:2,AxJ:3};
C.BCq={BCp:0,BE5:1,BEt:2,BEu:3,BEw:4,BEv:5};C.AMA={NL:360,JU:0,Ip:0,Q$:0,Ai_:function(
G){var B;var FC=this.NL;var FT;if((FC>=360)||(FC<=-360))FC=360;this.Axm(2);{var Az=
Math.max(this.Ip,this.JU);FT=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FT*=
4;if(FC<360)FT=((FC*FT)/360)|0;FT=Math.max(FT,-FT,1);}if(((!FC||!this.Ip)||!this.
JU)||(((((this.Q$===2)||(this.Q$===3))||(this.Q$===4))||(this.Q$===5))&&((0>=this.
Ip)||(0>=this.JU)))){this.Js(0,0);this.Js(1,0);return;}if(FC===360){this.Js(0,FT+
1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,360,FT);this.VJ(0);return;}if(!this.
Q$){this.Js(0,FT+1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);return;}
if(this.Q$===1){this.Js(0,FT+1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,
FT);this.VJ(0);return;}if(this.Q$===2){this.Js(0,FT+1);this.Js(1,0);this.VB(0,0,
0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.VJ(0);return;}if(this.Q$===4){var
On=this.Ip;var LE=Math.sqrt(On*On);var Ti=((LE*0.25)|0)+3;this.Js(0,(FT+Ti)+2);this.
Js(1,0);this.VB(0,0,0);if(FC>=0)this.Fk(0,On/2,0,LE/2,LE/2,180,360,Ti);else this.
Fk(0,On/2,0,LE/2,LE/2,180,0,Ti);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.VJ(0
);return;}if(this.Q$===5){var JA=FC;var On=this.Ip*Math.cos(JA*A.k$);var AiM=this.
JU*Math.sin(JA*A.k$);var LE=Math.sqrt((On*On)+(AiM*AiM));var Ti=((LE*0.25)|0)+3;
this.Js(0,(FT+Ti)+2);this.Js(1,0);this.VB(0,0,0);this.Fk(0,0,0,this.Ip,this.JU,0
,FC,FT);if(FC>=0)this.Fk(0,On/2,AiM/2,LE/2,LE/2,JA,JA+180,Ti);else this.Fk(0,On/
2,AiM/2,LE/2,LE/2,JA,JA-180,Ti);this.VJ(0);return;}if(this.Q$===3){var Ai5=this.
Ip;var AdC=Math.sqrt(Ai5*Ai5);var JA=FC;var Aiq=this.Ip*Math.cos(JA*A.k$);var Air=
this.JU*Math.sin(JA*A.k$);var Adb=Math.sqrt((Aiq*Aiq)+(Air*Air));var Apw=((AdC*0.25
)|0)+3;var Apv=((Adb*0.25)|0)+3;this.Js(0,((FT+Apw)+Apv)+10);this.Js(1,0);this.VB(
0,0,0);if(FC>=0){this.Fk(0,Ai5/2,0,AdC/2,AdC/2,180,360,Apw);this.Fk(0,0,0,this.Ip
,this.JU,0,FC,FT);this.Fk(0,Aiq/2,Air/2,Adb/2,Adb/2,JA,JA+180,Apv);}else{this.Fk(
0,Ai5/2,0,AdC/2,AdC/2,180,0,Apw);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.Fk(
0,Aiq/2,Air/2,Adb/2,Adb/2,JA,JA-180,Apv);}this.VJ(0);return;}if(this.Q$===2){this.
Js(0,(FT*2)+1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.Fk(0,0,0
,0,0,this.NL,this.NL-FC,FT);this.VJ(0);return;}if(this.Q$===4){var On=this.Ip;var
LE=Math.sqrt(On*On);var Ti=((LE*0.25)|0)+3;this.Js(0,((FT*2)+Ti)+2);this.Js(1,0);
if(FC>=0){this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.Fk(0,0,0,0,0,this.NL,this.
NL-FC,FT);this.Fk(0,On/2,0,LE/2,LE/2,180,360,Ti);}else{this.Fk(0,0,0,this.Ip,this.
JU,0,FC,FT);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FT);this.Fk(0,On/2,0,LE/2,LE/2,
180,0,Ti);}this.VJ(0);return;}if(this.Q$===5){var JA=FC;var sin=Math.sin(JA*A.k$
);var cos=Math.cos(JA*A.k$);var On=this.Ip*cos;var AiM=this.JU*sin;var LE=Math.sqrt((
On*On)+(AiM*AiM));var Ti=((LE*0.25)|0)+3;this.Js(0,((FT*2)+Ti)+2);this.Js(1,0);if(
FC>=0){this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.Fk(0,On/2,AiM/2,LE/2,LE/2,JA,
JA+180,Ti);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FT);}else{this.Fk(0,0,0,this.Ip,
this.JU,0,FC,FT);this.Fk(0,On/2,AiM/2,LE/2,LE/2,JA,JA-180,Ti);this.Fk(0,0,0,0,0,
this.NL,this.NL-FC,FT);}this.VJ(0);return;}if(this.Q$===3){var JA=FC;var Byu=Math.
sin(JA*A.k$);var Byp=Math.cos(JA*A.k$);var Ai5=this.Ip;var Aiq=this.Ip*Byp;var Air=
this.JU*Byu;var AdC=Math.sqrt(Ai5*Ai5);var Adb=Math.sqrt((Aiq*Aiq)+(Air*Air));var
Apw=((AdC*0.25)|0)+3;var Apv=((Adb*0.25)|0)+3;this.Js(0,(((FT*2)+Apw)+Apv)+4);this.
Js(1,0);if(FC>=0){this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.Fk(0,Aiq/2,Air/2,Adb
/2,Adb/2,JA,JA+180,Apv);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FT);this.Fk(0,Ai5/2
,0,AdC/2,AdC/2,180,360,Apw);}else{this.Fk(0,0,0,this.Ip,this.JU,0,FC,FT);this.Fk(
0,Aiq/2,Air/2,Adb/2,Adb/2,JA,JA-180,Apv);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FT
);this.Fk(0,Ai5/2,0,AdC/2,AdC/2,180,0,Apw);}this.VJ(0);return;}},Blw:function(E){
if(E===this.NL)return;this.NL=E;if((this.Ip>0)&&(this.JU>0))A.pe([this,this.Ai_]
,this);},BmM:function(E){if((E===this.Ip)&&(E===this.JU))return;this.Ip=E;this.JU=
E;if(!!this.NL)A.pe([this,this.Ai_],this);},BmW:function(E){if(E===this.Q$)return;
this.Q$=E;if((!!this.NL&&(this.Ip>0))&&(this.JU>0))A.pe([this,this.Ai_],this);},
_Init:function(aArg){C.Hy._Init.call(this,aArg);this.__proto__=C.AMA;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMA.__proto__=C.Hy;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */