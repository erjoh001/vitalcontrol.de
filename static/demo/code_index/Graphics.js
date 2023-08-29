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
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var B9=[0,0];var BG="Can not resize explicitly attached graphics engine bitmaps";
var EV=[0,0,0,0];var GS="No graphics engine bitmap attached to this canvas";var Js=
"The canvas is already initialized with a graphics engine bitmap";var IL="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OJ="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PH="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var N0=[1,1];var CJ=[2,2];var Fn="Missing matrices to interpolate";
C.Canvas={Di:null,ACq:null,Qf:A.vx,Pe:0,Axj:false,K1:function(){if(this.Axj)this.
DetachBitmap();},Init:function(aArg){this.Ox=true;},Aqd:function(E){if((E[0]<=0)||(
E[1]<=0))E=B9;if(A.z8(E,this.FrameSize))return;if(this.Axj)throw new Error(BG);this.
FrameSize=E;this.UM=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B9;this.FrameDelay=
0;this.NoOfFrames=1;}this.Qf=[].concat(B9,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Pe;for(this.Pe=this.NoOfFrames-1;this.Pe>=0;this.Pe--)this.AtG(this.Qf,this.
Qf,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Pe=dstFrameNr;}}if(!(((
B=this.Qf)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.ACq)?B[1].call(B[0],this):null;this.Qf=EV;}},DetachBitmap:function(
){if(!this.Axj)throw new Error(GS);this.bitmap=null;this.Axj=false;this.FrameSize=
B9;this.FrameDelay=0;this.NoOfFrames=1;this.UM=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Js);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Axj=true;var noOfFrames=1;var frameSize=B9;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.UM=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Bd$:function(aClip
,Ank,A9V,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!Ank){Ank.AsW();attrSet=Ank.attrSet;}if(!!A9V)attrString=A9V.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pe;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A23:function(aClip,AeQ,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AXV,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AeQ||!AeQ.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AXV===1)orient=
90;else if(AXV===2)orient=180;else if(AXV===3)orient=270;var dstFrameNo=this.Pe;
var dstBitmap=this.bitmap;var srcFont=AeQ.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Beb:function(aClip,aBitmap,aFrameNr,aDstRect,ArP,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!ArP)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
Pe;var srcRect=[].concat(B9,aBitmap.FrameSize);var left=((ArP&0x1)===0x1);var top=((
ArP&0x2)===0x2);var right=((ArP&0x4)===0x4);var bottom=((ArP&0x8)===0x8);var interior=((
ArP&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ha:
function(aClip,Ano,aDstRect,aFlipY,aOffset,aWidth,BtE,BsO,Bs_,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!Ano||!Ano.path)return;var style=0;switch(BtE){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(BsO){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(Bs_){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.Pe;var path=Ano.path;{A.aa5(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased);}},AgZ:function(aClip,aBitmap,aFrameNr
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;
if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2
)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;
if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2
)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1
)>4096))||((y2-y1)<-4096)){A.aa8("%s",IL);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNr=this.Pe;{A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr
,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BkB:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
A.aa8("%s",OJ);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.Pe;{A.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},A2z:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.Pe;{A.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Adf:function(aClip,Ano,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BsS){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!Ano||!Ano.path)return;var nonZeroWinding=BsS===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.Pe;var path=Ano.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bec:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pe;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AtG:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pe;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bee:function(aClip,aDstPos1,aDstPos2,BtJ,BtK,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Afr=BtJ;var Afs=BtK;var Acq=aDstPos1;
var Acr=aDstPos2;if(A.z8(Acq,Acr))return;if(Afr<=1)Afr=1;if(Afs<=1)Afs=1;var AhA=
Afr/2;var AhB=Afs/2;var AnX=Acq[0];var AnY=Acq[1];var AnZ=Acr[0];var An0=Acr[1];
var JX=AnZ-AnX;var JY=An0-AnY;var IQ=Math.sqrt((JX*JX)+(JY*JY));if(((Afr>4096)||(
Afs>4096))||(IQ>4096)){A.aa8("%s",PH);return;}JX=JX/IQ;JY=JY/IQ;var x1=AnX+(JY*AhA
);var y1=AnY-(JX*AhA);var x2=AnZ+(JY*AhB);var y2=An0-(JX*AhB);var x3=AnZ-(JY*AhB
);var y3=An0+(JX*AhB);var x4=AnX-(JY*AhA);var y4=AnY+(JX*AhA);var Bbr=A.zW(A.abj.
Arh);var srcRect=[].concat(N0,A.aaj(Bbr.FrameSize,CJ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pe;var srcBitmap=Bbr.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Atr:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pe;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Aj._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K1();this.__proto__=A.abj.Aj;A.
abj.Aj._Done.call(this);},_Mark:function(D){var B;A.abj.Aj._Mark.call(this,D);if((
B=this.Di)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACq)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Av7={Vp:1,Vq:0,X5:0,X6:
0,Vr:0,Vs:1,X7:0,X8:0,Qq:0,Qr:0,X9:1,Vt:0,Tq:0,Tr:0,X_:0,Vu:1,T7:0,T6:0,T5:0,AfW:
0,AkN:true,Az5:function(aX,aY){var UC=((aX*this.Qq)+(aY*this.Qr))+this.Vt;var BT=((
aX*this.Tq)+(aY*this.Tr))+this.Vu;if(!!BT&&(BT!==1))UC=UC/BT;this.T7=UC;return true;
},AjI:function(aX,aY){var Ar_=this.AfW;if(Ar_<0)return false;var FY=((aX*this.Vp
)+(aY*this.Vq))+this.X6;var Dk=((aX*this.Vr)+(aY*this.Vs))+this.X8;var UC=((aX*this.
Qq)+(aY*this.Qr))+this.Vt;var BT=((aX*this.Tq)+(aY*this.Tr))+this.Vu;var AyX=1;if(
!!BT&&(BT!==1)){FY=FY/BT;Dk=Dk/BT;UC=UC/BT;}if(Ar_!==-UC)AyX=1/(UC+Ar_);if(!!Ar_
)AyX=AyX*Ar_;this.T5=FY*AyX;this.T6=Dk*AyX;this.T7=UC+Ar_;return true;},Bfm:function(
GU,OR,PL){if(!GU||!OR)throw new Error(Fn);this.Vp=GU.Vp+((OR.Vp-GU.Vp)*PL);this.
Vq=GU.Vq+((OR.Vq-GU.Vq)*PL);this.X5=GU.X5+((OR.X5-GU.X5)*PL);this.X6=GU.X6+((OR.
X6-GU.X6)*PL);this.Vr=GU.Vr+((OR.Vr-GU.Vr)*PL);this.Vs=GU.Vs+((OR.Vs-GU.Vs)*PL);
this.X7=GU.X7+((OR.X7-GU.X7)*PL);this.X8=GU.X8+((OR.X8-GU.X8)*PL);this.Qq=GU.Qq+((
OR.Qq-GU.Qq)*PL);this.Qr=GU.Qr+((OR.Qr-GU.Qr)*PL);this.X9=GU.X9+((OR.X9-GU.X9)*PL
);this.Vt=GU.Vt+((OR.Vt-GU.Vt)*PL);this.Tq=GU.Tq+((OR.Tq-GU.Tq)*PL);this.Tr=GU.Tr+((
OR.Tr-GU.Tr)*PL);this.X_=GU.X_+((OR.X_-GU.X_)*PL);this.Vu=GU.Vu+((OR.Vu-GU.Vu)*PL
);this.AfW=GU.AfW+((OR.AfW-GU.AfW)*PL);this.AkN=false;return this;},Aec:function(
AGX,AGY,AGZ){this.Vp=this.Vp*AGX;this.Vq=this.Vq*AGY;this.X5=this.X5*AGZ;this.Vr=
this.Vr*AGX;this.Vs=this.Vs*AGY;this.X7=this.X7*AGZ;this.Qq=this.Qq*AGX;this.Qr=
this.Qr*AGY;this.X9=this.X9*AGZ;this.Tq=this.Tq*AGX;this.Tr=this.Tr*AGY;this.X_=
this.X_*AGZ;this.AkN=false;return this;},BlQ:function(AGP,AGQ,AGR){this.X6=((this.
X6+(this.Vp*AGP))+(this.Vq*AGQ))+(this.X5*AGR);this.X8=((this.X8+(this.Vr*AGP))+(
this.Vs*AGQ))+(this.X7*AGR);this.Vt=((this.Vt+(this.Qq*AGP))+(this.Qr*AGQ))+(this.
X9*AGR);this.Vu=((this.Vu+(this.Tq*AGP))+(this.Tr*AGQ))+(this.X_*AGR);this.AkN=false;
return this;},ABR:function(){return this.AkN||((((((((((((((((this.Vp===1)&&!this.
Vq)&&!this.X5)&&!this.X6)&&!this.Vr)&&(this.Vs===1))&&!this.X7)&&!this.X8)&&!this.
Qq)&&!this.Qr)&&(this.X9===1))&&!this.Vt)&&!this.Tq)&&!this.Tr)&&!this.X_)&&(this.
Vu===1));},Bd0:function(AG3,AG6,AG4,AG7,AX9,AX_,AG5,AG8){var AxJ=AG4-AX9;var AxL=
AG7-AX_;var AxK=AG5-AX9;var AxM=AG8-AX_;var Aze=((AG3-AG4)+AX9)-AG5;var Azf=((AG6-
AG7)+AX_)-AG8;var AnI=(AxJ*AxM)-(AxL*AxK);if(!AnI)return null;this.Qq=((Aze*AxM)-(
Azf*AxK))/AnI;this.Qr=((AxJ*Azf)-(AxL*Aze))/AnI;this.X9=0;this.Vt=1;this.Vp=(AG4-
AG3)+(this.Qq*AG4);this.Vq=(AG5-AG3)+(this.Qr*AG5);this.X5=0;this.X6=AG3;this.Vr=(
AG7-AG6)+(this.Qq*AG7);this.Vs=(AG8-AG6)+(this.Qr*AG8);this.X7=0;this.X8=AG6;this.
Tq=0;this.Tr=0;this.X_=0;this.Vu=1;this.AkN=false;return this;},Bdc:function(KH){
if(!KH)return this;this.Vp=KH.Vp;this.Vq=KH.Vq;this.X5=KH.X5;this.X6=KH.X6;this.
Vr=KH.Vr;this.Vs=KH.Vs;this.X7=KH.X7;this.X8=KH.X8;this.Qq=KH.Qq;this.Qr=KH.Qr;this.
X9=KH.X9;this.Vt=KH.Vt;this.Tq=KH.Tq;this.Tr=KH.Tr;this.X_=KH.X_;this.Vu=KH.Vu;this.
AkN=KH.AkN;this.AfW=KH.AfW;return this;},A4e:function(){this.Vp=1;this.Vq=0;this.
X5=0;this.X6=0;this.Vr=0;this.Vs=1;this.X7=0;this.X8=0;this.Qq=0;this.Qr=0;this.
X9=1;this.Vt=0;this.Tq=0;this.Tr=0;this.X_=0;this.Vu=1;this.AkN=true;return this;
},_Init:function(aArg){this.__proto__=C.Av7;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A1X={CY:A.vw,attrString:null,K1:function(){this.A2P();},A2P:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CY=B9;}
,Ai3:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},Be7:function(){return this.CY;},Bj2:function(
Ank,aString,aWidth,aEnableBidiText){this.A2P();var attrSet=null;var handle=null;
var s=B9;if(!!Ank){Ank.AsW();attrSet=Ank.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CY=s;},_Init:function(aArg){this.__proto__=
C.A1X;A.hJ++;},_Done:function(){this.K1();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Ahh:
null,Ae0:null,Ahg:null,AnV:A.aan(4,null,null),Wu:A.aan(10,null,null),A3k:null,A2c:
null,attrSet:null,Axt:A.aan(10,0,{0:0xFF000000}),K1:function(){this.AHM();},AHM:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},AsW:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.BeX(
);var noOfBitmaps=this.BeW();var noOfFonts=this.BeY();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AIj=this.Ahg;var Aci=this.
Ae0;var AIk=this.Ahh;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
Axt.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AIj){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AIj.Ko.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AIj=AIj.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
Wu.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Aci){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Aci.Ko.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Aci=Aci.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.AnV.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AIk){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AIk.Ko.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AIk=AIk.Af;}},AIu:function(H){var handle=this.attrSet;var
Aci=this.Ae0;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.Wu.Get(inx)&&this.
Wu.Get(inx).Ox){var bitmap=this.Wu.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Aci){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Aci.Ko.Get(lnx)&&Aci.Ko.Get(lnx).Ox){var bitmap=
Aci.Ko.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Aci=Aci.Af;}A.vv(
this,1);},BiK:function(E){this.ART(3,E);},BiJ:function(E){this.ART(1,E);},Aqb:function(
E){this.ART(0,E);},A54:function(E){this.BkK(0,E);},Bh3:function(E){this.AEo(3,E);
},A58:function(E){this.AEo(2,E);},A57:function(E){this.AEo(1,E);},Agt:function(E
){this.AEo(0,E);},ART:function(aFontNo,AeQ){var Acc=aFontNo;var HN=false;if(Acc<
0)return;if(Acc<4){HN=this.AnV.Get(Acc)!==AeQ;this.AnV.Set(Acc,AeQ);}else{var BD=
this.Ahh;Acc=Acc-4;while(!!BD&&(Acc>=20)){BD=BD.Af;Acc=Acc-20;}if(!!BD){HN=BD.Ko.
Get(Acc)!==AeQ;BD.Ko.Set(Acc,AeQ);}}if(HN&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AeQ)font=AeQ.font;A.aaJ(handle,aFontNo,font);}if(HN)A.vv(this
,1);},BkQ:function(Wp){var HN=false;if(Wp<4)Wp=4;if(Wp>256)Wp=256;Wp=Wp-4;if((Wp>
0)&&!this.Ahh){this.Ahh=A._NewObject(C.AzT,0);HN=true;}if(!Wp&&!!this.Ahh){this.
Ahh=null;HN=true;}var BD=this.Ahh;while(Wp>0){if((Wp>20)&&!BD.Af){BD.Af=A._NewObject(
C.AzT,0);HN=true;}Wp=Wp-20;if(Wp>0)BD=BD.Af;}if(!!BD&&!!BD.Af){BD.Af=null;HN=true;
}if(HN){this.AHM();A.vv(this,1);}},BeY:function(){var CO=4;var BD=this.Ahh;while(
!!BD){CO=CO+20;BD=BD.Af;}return CO;},BkK:function(aBitmapNo,aBitmap){var PO=aBitmapNo;
var HN=false;if(PO<0)return;if(PO<10){HN=this.Wu.Get(PO)!==aBitmap;if(!!this.Wu.
Get(PO)&&this.Wu.Get(PO).Ox)A.zl([this,this.AIu],this.Wu.Get(PO),0);this.Wu.Set(
PO,aBitmap);if(!!aBitmap&&aBitmap.Ox)A.y_([this,this.AIu],aBitmap,0);}else{var BD=
this.Ae0;PO=PO-10;while(!!BD&&(PO>=20)){BD=BD.Af;PO=PO-20;}if(!!BD){HN=BD.Ko.Get(
PO)!==aBitmap;if(!!BD.Ko.Get(PO)&&BD.Ko.Get(PO).Ox)A.zl([this,this.AIu],BD.Ko.Get(
PO),0);BD.Ko.Set(PO,aBitmap);if(!!aBitmap&&aBitmap.Ox)A.y_([this,this.AIu],aBitmap
,0);}}if(HN&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(HN)
A.vv(this,1);},BkO:function(Wn){var HN=false;if(Wn<10)Wn=10;if(Wn>256)Wn=256;Wn=
Wn-10;if((Wn>0)&&!this.Ae0){this.Ae0=A._NewObject(C.AzR,0);HN=true;}if(!Wn&&!!this.
Ae0){this.Ae0=null;HN=true;}var BD=this.Ae0;while(Wn>0){if((Wn>20)&&!BD.Af){BD.Af=
A._NewObject(C.AzR,0);HN=true;}Wn=Wn-20;if(Wn>0)BD=BD.Af;}if(!!BD&&!!BD.Af){BD.Af=
null;HN=true;}if(HN){this.AHM();A.vv(this,1);}},BeW:function(){var CO=10;var BD=
this.Ae0;while(!!BD){CO=CO+20;BD=BD.Af;}return CO;},AEo:function(aColorNo,aColor
){var Ab3=aColorNo;var HN=false;if(Ab3<0)return;if(Ab3<10){HN=this.Axt.Get(Ab3)!==
aColor;this.Axt.Set(Ab3,aColor);}else{var BD=this.Ahg;Ab3=Ab3-10;while(!!BD&&(Ab3>=
20)){BD=BD.Af;Ab3=Ab3-20;}if(!!BD){HN=BD.Ko.Get(Ab3)!==aColor;BD.Ko.Set(Ab3,aColor
);}}if(HN&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(HN)A.vv(this,0);},BkP:function(Wo){var HN=false;if(Wo<10)Wo=10;if(Wo>256)Wo=
256;Wo=Wo-10;if((Wo>0)&&!this.Ahg){this.Ahg=A._NewObject(C.AzS,0);HN=true;}if(!Wo&&
!!this.Ahg){this.Ahg=null;HN=true;}var BD=this.Ahg;while(Wo>0){if((Wo>20)&&!BD.Af
){BD.Af=A._NewObject(C.AzS,0);HN=true;}Wo=Wo-20;if(Wo>0)BD=BD.Af;}if(!!BD&&!!BD.
Af){BD.Af=null;HN=true;}if(HN){this.AHM();A.vv(this,1);}},BeX:function(){var CO=
10;var BD=this.Ahg;while(!!BD){CO=CO+20;BD=BD.Af;}return CO;},_Init:function(aArg
){(this.AnV=[]).__proto__=C.AttrSet.AnV;(this.Wu=[]).__proto__=C.AttrSet.Wu;(this.
Axt=[]).__proto__=C.AttrSet.Axt;this.__proto__=C.AttrSet;this.AnV.Set(0,A.zW(A.abj.
AAx));this.Wu.Set(0,A.zW(A.abj.K0));this.A3k=A.zW(A.abj.AAx);this.A2c=A.zW(A.abj.
K0);A.hJ++;},_Done:function(){this.K1();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ahh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ae0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahg)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.AnV,D);A.aaf(this.Wu,D);if((B=this.A3k)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A2c)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AzT={Af:null,Ko:A.aan(20,null,null),_Init:function(aArg){(
this.Ko=[]).__proto__=C.AzT.Ko;this.__proto__=C.AzT;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.Ko,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AzR={Af:null,Ko:A.aan(20,null,null),_Init:function(aArg){(this.Ko=[]).__proto__=
C.AzR.Ko;this.__proto__=C.AzR;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Ko,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AzS={Af:
null,Ko:A.aan(20,0,null),_Init:function(aArg){(this.Ko=[]).__proto__=C.AzS.Ko;this.
__proto__=C.AzS;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hj={path:null,K1:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Aco:function(H){A.vv(this,0);},E5:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Aco],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A1B:function(aSubPathNo,aX,aY){A.ow([this,this.Aco],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},UZ:function(aSubPathNo){A.ow([this,this.Aco],this);var handle=this.path;A.qP(handle
,aSubPathNo);},UQ:function(aSubPathNo,aX,aY){A.ow([this,this.Aco],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},Jk:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AvH(1);A.ow([this,this.Aco],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BeZ:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},AvH:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BeZ()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Aco],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hj;A.hJ++;},_Done:function(){this.K1();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Ats={Left:0x1,YS:0x2
,Right:0x4,A2d:0x8,BzE:0x10};C.Bzk={By_:0,BAb:1};C.BAj={Byw:0,Bz0:1,Bkw:2};C.BAi={
Bzm:0,BA0:1,Bkw:2,Av0:3};C.Byo={Byn:0,BAU:1,BAn:2,BAo:3,BAq:4,BAp:5};C.AKo={ND:360
,Jq:0,Ig:0,QH:0,Ah_:function(H){var Fp=this.ND;var FI;if((Fp>=360)||(Fp<=-360))Fp=
360;this.AvH(2);{var AM=this.Ig;if(this.Jq>AM)AM=this.Jq;if(Fp===360)FI=AM|0;else
FI=((Fp*AM)/360)|0;if(FI<0)FI=-FI;FI=FI+1;}if(((!Fp||!this.Ig)||!this.Jq)||(((((
this.QH===2)||(this.QH===3))||(this.QH===4))||(this.QH===5))&&((0>=this.Ig)||(0>=
this.Jq)))){this.Jk(0,0);this.Jk(1,0);return;}if(Fp===360){this.Jk(0,FI+1);this.
Jk(1,0);this.E5(0,0,0,this.Ig,this.Jq,0,360,FI);this.UZ(0);return;}if(!this.QH){
this.Jk(0,FI+1);this.Jk(1,0);this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);return;}if(this.
QH===1){this.Jk(0,FI+1);this.Jk(1,0);this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.
UZ(0);return;}if(this.QH===2){this.Jk(0,FI+1);this.Jk(1,0);this.UQ(0,0,0);this.E5(
0,0,0,this.Ig,this.Jq,0,Fp,FI);this.UZ(0);return;}if(this.QH===4){var Oe=this.Ig;
var Lo=Math.sqrt(Oe*Oe);var SM=((Lo*0.25)|0)+3;this.Jk(0,(FI+SM)+2);this.Jk(1,0);
this.UQ(0,0,0);if(Fp>=0)this.E5(0,Oe/2,0,Lo/2,Lo/2,180,360,SM);else this.E5(0,Oe
/2,0,Lo/2,Lo/2,180,0,SM);this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.UZ(0);return;
}if(this.QH===5){var Jx=Fp;var Oe=this.Ig*Math.cos(Jx*A.kw);var AhO=this.Jq*Math.
sin(Jx*A.kw);var Lo=Math.sqrt((Oe*Oe)+(AhO*AhO));var SM=((Lo*0.25)|0)+3;this.Jk(
0,(FI+SM)+2);this.Jk(1,0);this.UQ(0,0,0);this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);
if(Fp>=0)this.E5(0,Oe/2,AhO/2,Lo/2,Lo/2,Jx,Jx+180,SM);else this.E5(0,Oe/2,AhO/2,
Lo/2,Lo/2,Jx,Jx-180,SM);this.UZ(0);return;}if(this.QH===3){var Ah6=this.Ig;var Acx=
Math.sqrt(Ah6*Ah6);var Jx=Fp;var Aht=this.Ig*Math.cos(Jx*A.kw);var Ahu=this.Jq*Math.
sin(Jx*A.kw);var Ab9=Math.sqrt((Aht*Aht)+(Ahu*Ahu));var Aod=((Acx*0.25)|0)+3;var
Aoc=((Ab9*0.25)|0)+3;this.Jk(0,((FI+Aod)+Aoc)+10);this.Jk(1,0);this.UQ(0,0,0);if(
Fp>=0){this.E5(0,Ah6/2,0,Acx/2,Acx/2,180,360,Aod);this.E5(0,0,0,this.Ig,this.Jq,
0,Fp,FI);this.E5(0,Aht/2,Ahu/2,Ab9/2,Ab9/2,Jx,Jx+180,Aoc);}else{this.E5(0,Ah6/2,
0,Acx/2,Acx/2,180,0,Aod);this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.E5(0,Aht/2,
Ahu/2,Ab9/2,Ab9/2,Jx,Jx-180,Aoc);}this.UZ(0);return;}if(this.QH===2){this.Jk(0,(
FI*2)+1);this.Jk(1,0);this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.E5(0,0,0,0,0,this.
ND,this.ND-Fp,FI);this.UZ(0);return;}if(this.QH===4){var Oe=this.Ig;var Lo=Math.
sqrt(Oe*Oe);var SM=((Lo*0.25)|0)+3;this.Jk(0,((FI*2)+SM)+2);this.Jk(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.E5(0,0,0,0,0,this.ND,this.ND-Fp,FI
);this.E5(0,Oe/2,0,Lo/2,Lo/2,180,360,SM);}else{this.E5(0,0,0,this.Ig,this.Jq,0,Fp
,FI);this.E5(0,0,0,0,0,this.ND,this.ND-Fp,FI);this.E5(0,Oe/2,0,Lo/2,Lo/2,180,0,SM
);}this.UZ(0);return;}if(this.QH===5){var Jx=Fp;var sin=Math.sin(Jx*A.kw);var cos=
Math.cos(Jx*A.kw);var Oe=this.Ig*cos;var AhO=this.Jq*sin;var Lo=Math.sqrt((Oe*Oe
)+(AhO*AhO));var SM=((Lo*0.25)|0)+3;this.Jk(0,((FI*2)+SM)+2);this.Jk(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.E5(0,Oe/2,AhO/2,Lo/2,Lo/2,Jx,Jx+180
,SM);this.E5(0,0,0,0,0,this.ND,this.ND-Fp,FI);}else{this.E5(0,0,0,this.Ig,this.Jq
,0,Fp,FI);this.E5(0,Oe/2,AhO/2,Lo/2,Lo/2,Jx,Jx-180,SM);this.E5(0,0,0,0,0,this.ND
,this.ND-Fp,FI);}this.UZ(0);return;}if(this.QH===3){var Jx=Fp;var BuO=Math.sin(Jx
*A.kw);var BuJ=Math.cos(Jx*A.kw);var Ah6=this.Ig;var Aht=this.Ig*BuJ;var Ahu=this.
Jq*BuO;var Acx=Math.sqrt(Ah6*Ah6);var Ab9=Math.sqrt((Aht*Aht)+(Ahu*Ahu));var Aod=((
Acx*0.25)|0)+3;var Aoc=((Ab9*0.25)|0)+3;this.Jk(0,(((FI*2)+Aod)+Aoc)+4);this.Jk(
1,0);if(Fp>=0){this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.E5(0,Aht/2,Ahu/2,Ab9/
2,Ab9/2,Jx,Jx+180,Aoc);this.E5(0,0,0,0,0,this.ND,this.ND-Fp,FI);this.E5(0,Ah6/2,
0,Acx/2,Acx/2,180,360,Aod);}else{this.E5(0,0,0,this.Ig,this.Jq,0,Fp,FI);this.E5(
0,Aht/2,Ahu/2,Ab9/2,Ab9/2,Jx,Jx-180,Aoc);this.E5(0,0,0,0,0,this.ND,this.ND-Fp,FI
);this.E5(0,Ah6/2,0,Acx/2,Acx/2,180,0,Aod);}this.UZ(0);return;}},Bil:function(E){
if(E===this.ND)return;this.ND=E;if((this.Ig>0)&&(this.Jq>0))A.ow([this,this.Ah_]
,this);},Bjv:function(E){if((E===this.Ig)&&(E===this.Jq))return;this.Ig=E;this.Jq=
E;if(!!this.ND)A.ow([this,this.Ah_],this);},BjF:function(E){if(E===this.QH)return;
this.QH=E;if((!!this.ND&&(this.Ig>0))&&(this.Jq>0))A.ow([this,this.Ah_],this);},
_Init:function(aArg){C.Hj._Init.call(this,aArg);this.__proto__=C.AKo;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Aj;C.AKo.__proto__=C.Hj;};C._ReInit=function(
){};C.DB=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */