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
var EZ=[0,0,0,0];var Hj="No graphics engine bitmap attached to this canvas";var I$=
"The canvas is already initialized with a graphics engine bitmap";var Io="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OZ="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P0="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P1=[1,1];var CO=[2,2];var E8="Missing matrices to interpolate";
C.Canvas={C2:null,AEg:null,QG:A.wg,Pr:0,AyX:false,La:function(){if(this.AyX)this.
DetachBitmap();},Init:function(aArg){this.OJ=true;},ArB:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.AyX)throw new Error(BF);
this.FrameSize=E;this.Vp=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QG=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pr;for(this.Pr=this.NoOfFrames-
1;this.Pr>=0;this.Pr--)this.Au8(this.QG,this.QG,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pr=dstFrameNr;}}if(!(((B=this.QG)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEg)?B[1].call(B[0],
this):null;this.QG=EZ;}},DetachBitmap:function(){if(!this.AyX)throw new Error(Hj
);this.bitmap=null;this.AyX=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.Vp=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I$);if(!aBitmap)return this;this.bitmap=aBitmap;this.AyX=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vp=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhW:function(aClip,Aou,BbB,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aou){Aou.Ai5();attrSet=Aou.attrSet;}if(
!!BbB)attrString=BbB.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pr;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5$:function(
aClip,Afx,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0J,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!Afx||!Afx.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0J===1)orient=90;else if(A0J===2)orient=180;else if(A0J===
3)orient=270;var dstFrameNo=this.Pr;var dstBitmap=this.bitmap;var srcFont=Afx.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhY:function(aClip
,aBitmap,aFrameNr,aDstRect,Atc,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atc)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pr;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((Atc&0x1)===0x1);var top=((Atc&0x2)===0x2);var right=((
Atc&0x4)===0x4);var bottom=((Atc&0x8)===0x8);var interior=((Atc&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hh:function(aClip
,AoB,aDstRect,aFlipY,aOffset,aWidth,Bxq,BwA,BwW,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoB||!AoB.path)return;var style=0;switch(Bxq){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BwA){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BwW){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pr;var path=AoB.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhI:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Io);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pr;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Boc:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,OZ);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pr;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5F:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pr;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aec:function(aClip,AoB,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BwE){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoB||!AoB.path)return;var nonZeroWinding=BwE===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pr;var path=AoB.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhZ:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Au8:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bh1:function(aClip,aDstPos1,aDstPos2,Bxw,Bxx,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agd=Bxw;var Age=Bxx;var Ado=aDstPos1;
var Adp=aDstPos2;if(A.aaX(Ado,Adp))return;if(Agd<=1)Agd=1;if(Age<=1)Age=1;var Air=
Agd/2;var Ais=Age/2;var Apa=Ado[0];var Apb=Ado[1];var Apc=Adp[0];var Apd=Adp[1];
var J4=Apc-Apa;var J5=Apd-Apb;var IQ=Math.sqrt((J4*J4)+(J5*J5));if(((Agd>4096)||(
Age>4096))||(IQ>4096)){A.ab5("%s",P0);return;}J4=J4/IQ;J5=J5/IQ;var x1=Apa+(J5*Air
);var y1=Apb-(J4*Air);var x2=Apc+(J5*Ais);var y2=Apd-(J4*Ais);var x3=Apc-(J5*Ais
);var y3=Apd+(J4*Ais);var x4=Apa-(J5*Air);var y4=Apb+(J4*Air);var Bfd=A.aaL(A.aci.
AsC);var srcRect=[].concat(P1,A.abe(Bfd.FrameSize,CO));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;var srcBitmap=Bfd.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AuT:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.La();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEg)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxL={V4:1,V5:0,YT:0,YU:
0,V6:0,V7:1,YV:0,YW:0,QR:0,QS:0,YX:1,V8:0,T5:0,T6:0,YY:0,V9:1,UL:0,PY:0,PX:0,AgH:
0,AlE:true,ABP:function(aX,aY){var Vg=((aX*this.QR)+(aY*this.QS))+this.V8;var BX=((
aX*this.T5)+(aY*this.T6))+this.V9;if(!!BX&&(BX!==1))Vg=Vg/BX;this.UL=Vg;return true;
},Ae2:function(aX,aY){var AtA=this.AgH;if(AtA<0)return false;var El=((aX*this.V4
)+(aY*this.V5))+this.YU;var Df=((aX*this.V6)+(aY*this.V7))+this.YW;var Vg=((aX*this.
QR)+(aY*this.QS))+this.V8;var BX=((aX*this.T5)+(aY*this.T6))+this.V9;var AAI=1;if(
!!BX&&(BX!==1)){El=El/BX;Df=Df/BX;Vg=Vg/BX;}if(AtA!==-Vg)AAI=1/(Vg+AtA);if(!!AtA
)AAI=AAI*AtA;this.PX=El*AAI;this.PY=Df*AAI;this.UL=Vg+AtA;return true;},Bi_:function(
G5,O4,P7){if(!G5||!O4)throw new Error(E8);this.V4=G5.V4+((O4.V4-G5.V4)*P7);this.
V5=G5.V5+((O4.V5-G5.V5)*P7);this.YT=G5.YT+((O4.YT-G5.YT)*P7);this.YU=G5.YU+((O4.
YU-G5.YU)*P7);this.V6=G5.V6+((O4.V6-G5.V6)*P7);this.V7=G5.V7+((O4.V7-G5.V7)*P7);
this.YV=G5.YV+((O4.YV-G5.YV)*P7);this.YW=G5.YW+((O4.YW-G5.YW)*P7);this.QR=G5.QR+((
O4.QR-G5.QR)*P7);this.QS=G5.QS+((O4.QS-G5.QS)*P7);this.YX=G5.YX+((O4.YX-G5.YX)*P7
);this.V8=G5.V8+((O4.V8-G5.V8)*P7);this.T5=G5.T5+((O4.T5-G5.T5)*P7);this.T6=G5.T6+((
O4.T6-G5.T6)*P7);this.YY=G5.YY+((O4.YY-G5.YY)*P7);this.V9=G5.V9+((O4.V9-G5.V9)*P7
);this.AgH=G5.AgH+((O4.AgH-G5.AgH)*P7);this.AlE=false;return this;},Ae8:function(
AIU,AIV,AIW){this.V4=this.V4*AIU;this.V5=this.V5*AIV;this.YT=this.YT*AIW;this.V6=
this.V6*AIU;this.V7=this.V7*AIV;this.YV=this.YV*AIW;this.QR=this.QR*AIU;this.QS=
this.QS*AIV;this.YX=this.YX*AIW;this.T5=this.T5*AIU;this.T6=this.T6*AIV;this.YY=
this.YY*AIW;this.AlE=false;return this;},Bpw:function(AIM,AIN,AIO){this.YU=((this.
YU+(this.V4*AIM))+(this.V5*AIN))+(this.YT*AIO);this.YW=((this.YW+(this.V6*AIM))+(
this.V7*AIN))+(this.YV*AIO);this.V8=((this.V8+(this.QR*AIM))+(this.QS*AIN))+(this.
YX*AIO);this.V9=((this.V9+(this.T5*AIM))+(this.T6*AIN))+(this.YY*AIO);this.AlE=false;
return this;},ADF:function(){return this.AlE||((((((((((((((((this.V4===1)&&!this.
V5)&&!this.YT)&&!this.YU)&&!this.V6)&&(this.V7===1))&&!this.YV)&&!this.YW)&&!this.
QR)&&!this.QS)&&(this.YX===1))&&!this.V8)&&!this.T5)&&!this.T6)&&!this.YY)&&(this.
V9===1));},ANy:function(Ah0,Ah3,Ah1,Ah4,AoJ,AoK,Ah2,Ah5){var Azn=Ah1-AoJ;var Azp=
Ah4-AoK;var Azo=Ah2-AoJ;var Azq=Ah5-AoK;var AA1=((Ah0-Ah1)+AoJ)-Ah2;var AA2=((Ah3-
Ah4)+AoK)-Ah5;var AoX=(Azn*Azq)-(Azp*Azo);if(!AoX)return null;this.QR=((AA1*Azq)-(
AA2*Azo))/AoX;this.QS=((Azn*AA2)-(Azp*AA1))/AoX;this.YX=0;this.V8=1;this.V4=(Ah1-
Ah0)+(this.QR*Ah1);this.V5=(Ah2-Ah0)+(this.QS*Ah2);this.YT=0;this.YU=Ah0;this.V6=(
Ah4-Ah3)+(this.QR*Ah4);this.V7=(Ah5-Ah3)+(this.QS*Ah5);this.YV=0;this.YW=Ah3;this.
T5=0;this.T6=0;this.YY=0;this.V9=1;this.AlE=false;return this;},Bg5:function(L5){
if(!L5)return this;this.V4=L5.V4;this.V5=L5.V5;this.YT=L5.YT;this.YU=L5.YU;this.
V6=L5.V6;this.V7=L5.V7;this.YV=L5.YV;this.YW=L5.YW;this.QR=L5.QR;this.QS=L5.QS;this.
YX=L5.YX;this.V8=L5.V8;this.T5=L5.T5;this.T6=L5.T6;this.YY=L5.YY;this.V9=L5.V9;this.
AlE=L5.AlE;this.AgH=L5.AgH;return this;},A7u:function(){this.V4=1;this.V5=0;this.
YT=0;this.YU=0;this.V6=0;this.V7=1;this.YV=0;this.YW=0;this.QR=0;this.QS=0;this.
YX=1;this.V8=0;this.T5=0;this.T6=0;this.YY=0;this.V9=1;this.AlE=true;return this;
},_Init:function(aArg){this.__proto__=C.AxL;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7c={Bdj:1,Bdk:0,Bdl:0,Bdm:0,Bdn:1,Bdo:0,Bdp:0,Bdq:0,Bdr:1,PY:0,PX:0,A1$:false
,Ae2:function(E_){if(!this.A1$)return false;var A4m=E_[0];var A4o=E_[1];var BCf=((
A4m*this.Bdj)+(A4o*this.Bdk))+this.Bdl;var BCg=((A4m*this.Bdm)+(A4o*this.Bdn))+this.
Bdo;var A3y=((A4m*this.Bdp)+(A4o*this.Bdq))+this.Bdr;if(!!A3y){this.PX=BCf/A3y;this.
PY=BCg/A3y;return true;}return false;},ANy:function(Ah0,Ah3,Ah1,Ah4,AoJ,AoK,Ah2,
Ah5){var Azn=Ah1-AoJ;var Azp=Ah4-AoK;var Azo=Ah2-AoJ;var Azq=Ah5-AoK;var AA1=((Ah0-
Ah1)+AoJ)-Ah2;var AA2=((Ah3-Ah4)+AoK)-Ah5;var AoX=(Azn*Azq)-(Azp*Azo);this.A1$=false;
if(!AoX)return;var Ait=((AA1*Azq)-(AA2*Azo))/AoX;var BJ=((Azn*AA2)-(Azp*AA1))/AoX;
var a=(Ah1-Ah0)+(Ait*Ah1);var Rr=(Ah2-Ah0)+(BJ*Ah2);var B4=Ah0;var d=(Ah4-Ah3)+(
Ait*Ah4);var AJG=(Ah5-Ah3)+(BJ*Ah5);var LJ=Ah3;this.Bdj=AJG-(LJ*BJ);this.Bdk=(B4
*BJ)-Rr;this.Bdl=(Rr*LJ)-(B4*AJG);this.Bdm=(LJ*Ait)-d;this.Bdn=a-(B4*Ait);this.Bdo=(
B4*d)-(a*LJ);this.Bdp=(d*BJ)-(AJG*Ait);this.Bdq=(Rr*Ait)-(a*BJ);this.Bdr=(a*AJG)-(
Rr*d);this.A1$=true;},_Init:function(aArg){this.__proto__=C.A7c;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4W={C4:A.wf,attrString:null,La:function(){this.A5W(
);},A5W:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C4=Cc;},AjV:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiS:function(
){return this.C4;},BnC:function(Aou,aString,aWidth,aEnableBidiText){this.A5W();var
attrSet=null;var handle=null;var s=Cc;if(!!Aou){Aou.Ai5();attrSet=Aou.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C4=s;},_Init:function(
aArg){this.__proto__=C.A4W;A.h7++;},_Done:function(){this.La();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Ah7:null,AfI:null,Ah6:null,Ao_:A.abi(4,null,null),Xg:A.abi(10,null,
null),A6t:null,A5j:null,attrSet:null,Ay9:A.abi(10,0,{0:0xFF000000}),La:function(
){this.AJE();},AJE:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ai5:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiJ();var noOfBitmaps=this.BiI();var noOfFonts=this.BiK();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKb=this.Ah6;var Adg=this.AfI;var AKc=this.Ah7;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Ay9.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKb){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKb.KA.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKb=AKb.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xg.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adg){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adg.KA.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adg=Adg.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Ao_.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKc
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKc.KA.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKc=AKc.Ah;}},AKn:function(G){var handle=
this.attrSet;var Adg=this.AfI;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xg.Get(inx)&&this.Xg.Get(inx).OJ){var bitmap=this.Xg.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adg){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adg.KA.Get(lnx)&&Adg.
KA.Get(lnx).OJ){var bitmap=Adg.KA.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adg=Adg.Ah;}A.we(this,1);},Bmd:function(E){this.AUj(3,E);},A9Y:function(
E){this.AUj(1,E);},Ahc:function(E){this.AUj(0,E);},A9y:function(E){this.Bom(0,E);
},BlB:function(E){this.AGq(3,E);},A9C:function(E){this.AGq(2,E);},A9B:function(E
){this.AGq(1,E);},Ag$:function(E){this.AGq(0,E);},AUj:function(aFontNo,Afx){var Adb=
aFontNo;var HU=false;if(Adb<0)return;if(Adb<4){HU=this.Ao_.Get(Adb)!==Afx;this.Ao_.
Set(Adb,Afx);}else{var BD=this.Ah7;Adb=Adb-4;while(!!BD&&(Adb>=20)){BD=BD.Ah;Adb=
Adb-20;}if(!!BD){HU=BD.KA.Get(Adb)!==Afx;BD.KA.Set(Adb,Afx);}}if(HU&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!Afx)font=Afx.font;A.abG(handle,aFontNo
,font);}if(HU)A.we(this,1);},Bos:function(Xc){var HU=false;if(Xc<4)Xc=4;if(Xc>256
)Xc=256;Xc=Xc-4;if((Xc>0)&&!this.Ah7){this.Ah7=A._NewObject(C.ABD,0);HU=true;}if(
!Xc&&!!this.Ah7){this.Ah7=null;HU=true;}var BD=this.Ah7;while(Xc>0){if((Xc>20)&&
!BD.Ah){BD.Ah=A._NewObject(C.ABD,0);HU=true;}Xc=Xc-20;if(Xc>0)BD=BD.Ah;}if(!!BD&&
!!BD.Ah){BD.Ah=null;HU=true;}if(HU){this.AJE();A.we(this,1);}},BiK:function(){var
CD=4;var BD=this.Ah7;while(!!BD){CD=CD+20;BD=BD.Ah;}return CD;},Bom:function(aBitmapNo
,aBitmap){var P$=aBitmapNo;var HU=false;if(P$<0)return;if(P$<10){HU=this.Xg.Get(
P$)!==aBitmap;if(!!this.Xg.Get(P$)&&this.Xg.Get(P$).OJ)A.z9([this,this.AKn],this.
Xg.Get(P$),0);this.Xg.Set(P$,aBitmap);if(!!aBitmap&&aBitmap.OJ)A.zV([this,this.AKn
],aBitmap,0);}else{var BD=this.AfI;P$=P$-10;while(!!BD&&(P$>=20)){BD=BD.Ah;P$=P$-
20;}if(!!BD){HU=BD.KA.Get(P$)!==aBitmap;if(!!BD.KA.Get(P$)&&BD.KA.Get(P$).OJ)A.z9([
this,this.AKn],BD.KA.Get(P$),0);BD.KA.Set(P$,aBitmap);if(!!aBitmap&&aBitmap.OJ)A.
zV([this,this.AKn],aBitmap,0);}}if(HU&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HU)A.we(this,1);},Boq:function(Xa){var HU=false;if(Xa<10)Xa=10;if(Xa>
256)Xa=256;Xa=Xa-10;if((Xa>0)&&!this.AfI){this.AfI=A._NewObject(C.ABB,0);HU=true;
}if(!Xa&&!!this.AfI){this.AfI=null;HU=true;}var BD=this.AfI;while(Xa>0){if((Xa>20
)&&!BD.Ah){BD.Ah=A._NewObject(C.ABB,0);HU=true;}Xa=Xa-20;if(Xa>0)BD=BD.Ah;}if(!!
BD&&!!BD.Ah){BD.Ah=null;HU=true;}if(HU){this.AJE();A.we(this,1);}},BiI:function(
){var CD=10;var BD=this.AfI;while(!!BD){CD=CD+20;BD=BD.Ah;}return CD;},AGq:function(
aColorNo,aColor){var Ac3=aColorNo;var HU=false;if(Ac3<0)return;if(Ac3<10){HU=this.
Ay9.Get(Ac3)!==aColor;this.Ay9.Set(Ac3,aColor);}else{var BD=this.Ah6;Ac3=Ac3-10;
while(!!BD&&(Ac3>=20)){BD=BD.Ah;Ac3=Ac3-20;}if(!!BD){HU=BD.KA.Get(Ac3)!==aColor;
BD.KA.Set(Ac3,aColor);}}if(HU&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HU)A.we(this,0);},Bor:function(Xb){var HU=false;if(Xb<10)Xb=
10;if(Xb>256)Xb=256;Xb=Xb-10;if((Xb>0)&&!this.Ah6){this.Ah6=A._NewObject(C.ABC,0
);HU=true;}if(!Xb&&!!this.Ah6){this.Ah6=null;HU=true;}var BD=this.Ah6;while(Xb>0
){if((Xb>20)&&!BD.Ah){BD.Ah=A._NewObject(C.ABC,0);HU=true;}Xb=Xb-20;if(Xb>0)BD=BD.
Ah;}if(!!BD&&!!BD.Ah){BD.Ah=null;HU=true;}if(HU){this.AJE();A.we(this,1);}},BiJ:
function(){var CD=10;var BD=this.Ah6;while(!!BD){CD=CD+20;BD=BD.Ah;}return CD;},
_Init:function(aArg){(this.Ao_=[]).__proto__=C.AttrSet.Ao_;(this.Xg=[]).__proto__=
C.AttrSet.Xg;(this.Ay9=[]).__proto__=C.AttrSet.Ay9;this.__proto__=C.AttrSet;this.
Ao_.Set(0,A.aaL(A.aci.ACk));this.Xg.Set(0,A.aaL(A.aci.TH));this.A6t=A.aaL(A.aci.
ACk);this.A5j=A.aaL(A.aci.TH);A.h7++;},_Done:function(){this.La();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah6)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ao_,D);A.aa6(this.Xg,D
);if((B=this.A6t)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5j)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABD={Ah:null,KA:A.abi(
20,null,null),_Init:function(aArg){(this.KA=[]).__proto__=C.ABD.KA;this.__proto__=
C.ABD;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KA,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABB={Ah:null,KA:A.abi(20,null,null),
_Init:function(aArg){(this.KA=[]).__proto__=C.ABB.KA;this.__proto__=C.ABB;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KA,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABC={Ah:null,KA:A.abi(20,0,null),_Init:function(aArg
){(this.KA=[]).__proto__=C.ABC.KA;this.__proto__=C.ABC;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hu={path:null,La:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adm:function(G){A.we(this,0);},Fc:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adm
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4A:
function(aSubPathNo,aX,aY){A.pe([this,this.Adm],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VB:function(aSubPathNo){A.
pe([this,this.Adm],this);var handle=this.path;A.jU(handle,aSubPathNo);},Vt:function(
aSubPathNo,aX,aY){A.pe([this,this.Adm],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jm:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axj(1);A.pe([this,this.Adm],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BiL:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axj:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BiL()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adm],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hu;A.h7++;},_Done:function(){
this.La();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.AuU={Left:0x1,ZG:0x2,Right:0x4,A5k:0x8,BDU:0x10
};C.BDv={BDj:0,BEs:1};C.BEA={BCF:0,BEe:1,Bn9:2};C.BEz={BDx:0,BFh:1,Bn9:2,AxE:3};
C.BCx={BCw:0,BFb:1,BEE:2,BEF:3,BEH:4,BEG:5};C.AMt={NI:360,JT:0,In:0,Q9:0,Ai6:function(
G){var B;var Fv=this.NI;var FN;if((Fv>=360)||(Fv<=-360))Fv=360;this.Axj(2);{var Az=
Math.max(this.In,this.JT);FN=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FN*=
4;if(Fv<360)FN=((Fv*FN)/360)|0;FN=Math.max(FN,-FN,1);}if(((!Fv||!this.In)||!this.
JT)||(((((this.Q9===2)||(this.Q9===3))||(this.Q9===4))||(this.Q9===5))&&((0>=this.
In)||(0>=this.JT)))){this.Jm(0,0);this.Jm(1,0);return;}if(Fv===360){this.Jm(0,FN+
1);this.Jm(1,0);this.Fc(0,0,0,this.In,this.JT,0,360,FN);this.VB(0);return;}if(!this.
Q9){this.Jm(0,FN+1);this.Jm(1,0);this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);return;}
if(this.Q9===1){this.Jm(0,FN+1);this.Jm(1,0);this.Fc(0,0,0,this.In,this.JT,0,Fv,
FN);this.VB(0);return;}if(this.Q9===2){this.Jm(0,FN+1);this.Jm(1,0);this.Vt(0,0,
0);this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.VB(0);return;}if(this.Q9===4){var
Oo=this.In;var LE=Math.sqrt(Oo*Oo);var Th=((LE*0.25)|0)+3;this.Jm(0,(FN+Th)+2);this.
Jm(1,0);this.Vt(0,0,0);if(Fv>=0)this.Fc(0,Oo/2,0,LE/2,LE/2,180,360,Th);else this.
Fc(0,Oo/2,0,LE/2,LE/2,180,0,Th);this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.VB(0
);return;}if(this.Q9===5){var Jw=Fv;var Oo=this.In*Math.cos(Jw*A.k$);var AiH=this.
JT*Math.sin(Jw*A.k$);var LE=Math.sqrt((Oo*Oo)+(AiH*AiH));var Th=((LE*0.25)|0)+3;
this.Jm(0,(FN+Th)+2);this.Jm(1,0);this.Vt(0,0,0);this.Fc(0,0,0,this.In,this.JT,0
,Fv,FN);if(Fv>=0)this.Fc(0,Oo/2,AiH/2,LE/2,LE/2,Jw,Jw+180,Th);else this.Fc(0,Oo/
2,AiH/2,LE/2,LE/2,Jw,Jw-180,Th);this.VB(0);return;}if(this.Q9===3){var Ai1=this.
In;var Adw=Math.sqrt(Ai1*Ai1);var Jw=Fv;var Aij=this.In*Math.cos(Jw*A.k$);var Aik=
this.JT*Math.sin(Jw*A.k$);var Ac8=Math.sqrt((Aij*Aij)+(Aik*Aik));var Aps=((Adw*0.25
)|0)+3;var Apr=((Ac8*0.25)|0)+3;this.Jm(0,((FN+Aps)+Apr)+10);this.Jm(1,0);this.Vt(
0,0,0);if(Fv>=0){this.Fc(0,Ai1/2,0,Adw/2,Adw/2,180,360,Aps);this.Fc(0,0,0,this.In
,this.JT,0,Fv,FN);this.Fc(0,Aij/2,Aik/2,Ac8/2,Ac8/2,Jw,Jw+180,Apr);}else{this.Fc(
0,Ai1/2,0,Adw/2,Adw/2,180,0,Aps);this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.Fc(
0,Aij/2,Aik/2,Ac8/2,Ac8/2,Jw,Jw-180,Apr);}this.VB(0);return;}if(this.Q9===2){this.
Jm(0,(FN*2)+1);this.Jm(1,0);this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.Fc(0,0,0
,0,0,this.NI,this.NI-Fv,FN);this.VB(0);return;}if(this.Q9===4){var Oo=this.In;var
LE=Math.sqrt(Oo*Oo);var Th=((LE*0.25)|0)+3;this.Jm(0,((FN*2)+Th)+2);this.Jm(1,0);
if(Fv>=0){this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.Fc(0,0,0,0,0,this.NI,this.
NI-Fv,FN);this.Fc(0,Oo/2,0,LE/2,LE/2,180,360,Th);}else{this.Fc(0,0,0,this.In,this.
JT,0,Fv,FN);this.Fc(0,0,0,0,0,this.NI,this.NI-Fv,FN);this.Fc(0,Oo/2,0,LE/2,LE/2,
180,0,Th);}this.VB(0);return;}if(this.Q9===5){var Jw=Fv;var sin=Math.sin(Jw*A.k$
);var cos=Math.cos(Jw*A.k$);var Oo=this.In*cos;var AiH=this.JT*sin;var LE=Math.sqrt((
Oo*Oo)+(AiH*AiH));var Th=((LE*0.25)|0)+3;this.Jm(0,((FN*2)+Th)+2);this.Jm(1,0);if(
Fv>=0){this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.Fc(0,Oo/2,AiH/2,LE/2,LE/2,Jw,
Jw+180,Th);this.Fc(0,0,0,0,0,this.NI,this.NI-Fv,FN);}else{this.Fc(0,0,0,this.In,
this.JT,0,Fv,FN);this.Fc(0,Oo/2,AiH/2,LE/2,LE/2,Jw,Jw-180,Th);this.Fc(0,0,0,0,0,
this.NI,this.NI-Fv,FN);}this.VB(0);return;}if(this.Q9===3){var Jw=Fv;var ByF=Math.
sin(Jw*A.k$);var ByA=Math.cos(Jw*A.k$);var Ai1=this.In;var Aij=this.In*ByA;var Aik=
this.JT*ByF;var Adw=Math.sqrt(Ai1*Ai1);var Ac8=Math.sqrt((Aij*Aij)+(Aik*Aik));var
Aps=((Adw*0.25)|0)+3;var Apr=((Ac8*0.25)|0)+3;this.Jm(0,(((FN*2)+Aps)+Apr)+4);this.
Jm(1,0);if(Fv>=0){this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.Fc(0,Aij/2,Aik/2,Ac8
/2,Ac8/2,Jw,Jw+180,Apr);this.Fc(0,0,0,0,0,this.NI,this.NI-Fv,FN);this.Fc(0,Ai1/2
,0,Adw/2,Adw/2,180,360,Aps);}else{this.Fc(0,0,0,this.In,this.JT,0,Fv,FN);this.Fc(
0,Aij/2,Aik/2,Ac8/2,Ac8/2,Jw,Jw-180,Apr);this.Fc(0,0,0,0,0,this.NI,this.NI-Fv,FN
);this.Fc(0,Ai1/2,0,Adw/2,Adw/2,180,0,Aps);}this.VB(0);return;}},BlR:function(E){
if(E===this.NI)return;this.NI=E;if((this.In>0)&&(this.JT>0))A.pe([this,this.Ai6]
,this);},Bm6:function(E){if((E===this.In)&&(E===this.JT))return;this.In=E;this.JT=
E;if(!!this.NI)A.pe([this,this.Ai6],this);},Bne:function(E){if(E===this.Q9)return;
this.Q9=E;if((!!this.NI&&(this.In>0))&&(this.JT>0))A.pe([this,this.Ai6],this);},
_Init:function(aArg){C.Hu._Init.call(this,aArg);this.__proto__=C.AMt;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMt.__proto__=C.Hu;};C._ReInit=function(
){};C.DF=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */