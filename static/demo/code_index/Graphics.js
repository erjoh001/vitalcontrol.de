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
var B_=[0,0];var BH="Can not resize explicitly attached graphics engine bitmaps";
var EV=[0,0,0,0];var GS="No graphics engine bitmap attached to this canvas";var Jt=
"The canvas is already initialized with a graphics engine bitmap";var IL="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OK="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PJ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var N1=[1,1];var CJ=[2,2];var Fn="Missing matrices to interpolate";
C.Canvas={Dj:null,ACy:null,Qf:A.vx,Pf:0,Axp:false,K3:function(){if(this.Axp)this.
DetachBitmap();},Init:function(aArg){this.Oy=true;},Aqq:function(E){if((E[0]<=0)||(
E[1]<=0))E=B_;if(A.z8(E,this.FrameSize))return;if(this.Axp)throw new Error(BH);this.
FrameSize=E;this.UO=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B_;this.FrameDelay=
0;this.NoOfFrames=1;}this.Qf=[].concat(B_,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Pf;for(this.Pf=this.NoOfFrames-1;this.Pf>=0;this.Pf--)this.AtR(this.Qf,this.
Qf,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Pf=dstFrameNr;}}if(!(((
B=this.Qf)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.ACy)?B[1].call(B[0],this):null;this.Qf=EV;}},DetachBitmap:function(
){if(!this.Axp)throw new Error(GS);this.bitmap=null;this.Axp=false;this.FrameSize=
B_;this.FrameDelay=0;this.NoOfFrames=1;this.UO=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Jt);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Axp=true;var noOfFrames=1;var frameSize=B_;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.UO=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Ben:function(aClip
,Anw,A9$,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!Anw){Anw.As6();attrSet=Anw.attrSet;}if(!!A9$)attrString=A9$.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A3n:function(aClip,AeY,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AYc,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AeY||!AeY.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AYc===1)orient=
90;else if(AYc===2)orient=180;else if(AYc===3)orient=270;var dstFrameNo=this.Pf;
var dstBitmap=this.bitmap;var srcFont=AeY.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Bep:function(aClip,aBitmap,aFrameNr,aDstRect,Ar0,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!Ar0)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
Pf;var srcRect=[].concat(B_,aBitmap.FrameSize);var left=((Ar0&0x1)===0x1);var top=((
Ar0&0x2)===0x2);var right=((Ar0&0x4)===0x4);var bottom=((Ar0&0x8)===0x8);var interior=((
Ar0&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},G$:
function(aClip,AnA,aDstRect,aFlipY,aOffset,aWidth,BtP,BsZ,Btj,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!AnA||!AnA.path)return;var style=0;switch(BtP){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(BsZ){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(Btj){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnA.path;{A.aa5(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased);}},Ag7:function(aClip,aBitmap,aFrameNr
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;
if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2
)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;
if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2
)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1
)>4096))||((y2-y1)<-4096)){A.aa8("%s",IL);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNr=this.Pf;{A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr
,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BkR:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
A.aa8("%s",OK);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.Pf;{A.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},A2V:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.Pf;{A.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Adp:function(aClip,AnA,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bs3){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!AnA||!AnA.path)return;var nonZeroWinding=Bs3===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnA.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Beq:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AtR:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bes:function(aClip,aDstPos1,aDstPos2,BtU,BtV,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var AfA=BtU;var AfB=BtV;var AcB=aDstPos1;
var AcC=aDstPos2;if(A.z8(AcB,AcC))return;if(AfA<=1)AfA=1;if(AfB<=1)AfB=1;var AhK=
AfA/2;var AhL=AfB/2;var An9=AcB[0];var An_=AcB[1];var An$=AcC[0];var Aoa=AcC[1];
var JY=An$-An9;var JZ=Aoa-An_;var IQ=Math.sqrt((JY*JY)+(JZ*JZ));if(((AfA>4096)||(
AfB>4096))||(IQ>4096)){A.aa8("%s",PJ);return;}JY=JY/IQ;JZ=JZ/IQ;var x1=An9+(JZ*AhK
);var y1=An_-(JY*AhK);var x2=An$+(JZ*AhL);var y2=Aoa-(JY*AhL);var x3=An$-(JZ*AhL
);var y3=Aoa+(JY*AhL);var x4=An9-(JZ*AhK);var y4=An_+(JY*AhK);var BbE=A.zW(A.abj.
Ars);var srcRect=[].concat(N1,A.aaj(BbE.FrameSize,CJ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;var srcBitmap=BbE.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AtB:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Aj._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K3();this.__proto__=A.abj.Aj;A.
abj.Aj._Done.call(this);},_Mark:function(D){var B;A.abj.Aj._Mark.call(this,D);if((
B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACy)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Awg={Vt:1,Vu:0,Ye:0,Yf:
0,Vv:0,Vw:1,Yg:0,Yh:0,Qq:0,Qr:0,Yi:1,Vx:0,Ts:0,Tt:0,Yj:0,Vy:1,T9:0,T8:0,T7:0,Af5:
0,AkV:true,AAb:function(aX,aY){var UE=((aX*this.Qq)+(aY*this.Qr))+this.Vx;var BU=((
aX*this.Ts)+(aY*this.Tt))+this.Vy;if(!!BU&&(BU!==1))UE=UE/BU;this.T9=UE;return true;
},AjT:function(aX,aY){var Asj=this.Af5;if(Asj<0)return false;var FY=((aX*this.Vt
)+(aY*this.Vu))+this.Yf;var Dl=((aX*this.Vv)+(aY*this.Vw))+this.Yh;var UE=((aX*this.
Qq)+(aY*this.Qr))+this.Vx;var BU=((aX*this.Ts)+(aY*this.Tt))+this.Vy;var Ay5=1;if(
!!BU&&(BU!==1)){FY=FY/BU;Dl=Dl/BU;UE=UE/BU;}if(Asj!==-UE)Ay5=1/(UE+Asj);if(!!Asj
)Ay5=Ay5*Asj;this.T7=FY*Ay5;this.T8=Dl*Ay5;this.T9=UE+Asj;return true;},BfB:function(
GU,OS,PM){if(!GU||!OS)throw new Error(Fn);this.Vt=GU.Vt+((OS.Vt-GU.Vt)*PM);this.
Vu=GU.Vu+((OS.Vu-GU.Vu)*PM);this.Ye=GU.Ye+((OS.Ye-GU.Ye)*PM);this.Yf=GU.Yf+((OS.
Yf-GU.Yf)*PM);this.Vv=GU.Vv+((OS.Vv-GU.Vv)*PM);this.Vw=GU.Vw+((OS.Vw-GU.Vw)*PM);
this.Yg=GU.Yg+((OS.Yg-GU.Yg)*PM);this.Yh=GU.Yh+((OS.Yh-GU.Yh)*PM);this.Qq=GU.Qq+((
OS.Qq-GU.Qq)*PM);this.Qr=GU.Qr+((OS.Qr-GU.Qr)*PM);this.Yi=GU.Yi+((OS.Yi-GU.Yi)*PM
);this.Vx=GU.Vx+((OS.Vx-GU.Vx)*PM);this.Ts=GU.Ts+((OS.Ts-GU.Ts)*PM);this.Tt=GU.Tt+((
OS.Tt-GU.Tt)*PM);this.Yj=GU.Yj+((OS.Yj-GU.Yj)*PM);this.Vy=GU.Vy+((OS.Vy-GU.Vy)*PM
);this.Af5=GU.Af5+((OS.Af5-GU.Af5)*PM);this.AkV=false;return this;},Aej:function(
AHc,AHd,AHe){this.Vt=this.Vt*AHc;this.Vu=this.Vu*AHd;this.Ye=this.Ye*AHe;this.Vv=
this.Vv*AHc;this.Vw=this.Vw*AHd;this.Yg=this.Yg*AHe;this.Qq=this.Qq*AHc;this.Qr=
this.Qr*AHd;this.Yi=this.Yi*AHe;this.Ts=this.Ts*AHc;this.Tt=this.Tt*AHd;this.Yj=
this.Yj*AHe;this.AkV=false;return this;},Bl6:function(AG6,AG7,AG8){this.Yf=((this.
Yf+(this.Vt*AG6))+(this.Vu*AG7))+(this.Ye*AG8);this.Yh=((this.Yh+(this.Vv*AG6))+(
this.Vw*AG7))+(this.Yg*AG8);this.Vx=((this.Vx+(this.Qq*AG6))+(this.Qr*AG7))+(this.
Yi*AG8);this.Vy=((this.Vy+(this.Ts*AG6))+(this.Tt*AG7))+(this.Yj*AG8);this.AkV=false;
return this;},ABY:function(){return this.AkV||((((((((((((((((this.Vt===1)&&!this.
Vu)&&!this.Ye)&&!this.Yf)&&!this.Vv)&&(this.Vw===1))&&!this.Yg)&&!this.Yh)&&!this.
Qq)&&!this.Qr)&&(this.Yi===1))&&!this.Vx)&&!this.Ts)&&!this.Tt)&&!this.Yj)&&(this.
Vy===1));},Bec:function(AHi,AHl,AHj,AHm,AYq,AYr,AHk,AHn){var AxP=AHj-AYq;var AxR=
AHm-AYr;var AxQ=AHk-AYq;var AxS=AHn-AYr;var Azm=((AHi-AHj)+AYq)-AHk;var Azn=((AHl-
AHm)+AYr)-AHn;var AnU=(AxP*AxS)-(AxR*AxQ);if(!AnU)return null;this.Qq=((Azm*AxS)-(
Azn*AxQ))/AnU;this.Qr=((AxP*Azn)-(AxR*Azm))/AnU;this.Yi=0;this.Vx=1;this.Vt=(AHj-
AHi)+(this.Qq*AHj);this.Vu=(AHk-AHi)+(this.Qr*AHk);this.Ye=0;this.Yf=AHi;this.Vv=(
AHm-AHl)+(this.Qq*AHm);this.Vw=(AHn-AHl)+(this.Qr*AHn);this.Yg=0;this.Yh=AHl;this.
Ts=0;this.Tt=0;this.Yj=0;this.Vy=1;this.AkV=false;return this;},Bdp:function(KJ){
if(!KJ)return this;this.Vt=KJ.Vt;this.Vu=KJ.Vu;this.Ye=KJ.Ye;this.Yf=KJ.Yf;this.
Vv=KJ.Vv;this.Vw=KJ.Vw;this.Yg=KJ.Yg;this.Yh=KJ.Yh;this.Qq=KJ.Qq;this.Qr=KJ.Qr;this.
Yi=KJ.Yi;this.Vx=KJ.Vx;this.Ts=KJ.Ts;this.Tt=KJ.Tt;this.Yj=KJ.Yj;this.Vy=KJ.Vy;this.
AkV=KJ.AkV;this.Af5=KJ.Af5;return this;},A4B:function(){this.Vt=1;this.Vu=0;this.
Ye=0;this.Yf=0;this.Vv=0;this.Vw=1;this.Yg=0;this.Yh=0;this.Qq=0;this.Qr=0;this.
Yi=1;this.Vx=0;this.Ts=0;this.Tt=0;this.Yj=0;this.Vy=1;this.AkV=true;return this;
},_Init:function(aArg){this.__proto__=C.Awg;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A2g={CZ:A.vw,attrString:null,K3:function(){this.A2$();},A2$:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CZ=B_;}
,Ajb:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},Bfj:function(){return this.CZ;},Bkg:function(
Anw,aString,aWidth,aEnableBidiText){this.A2$();var attrSet=null;var handle=null;
var s=B_;if(!!Anw){Anw.As6();attrSet=Anw.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CZ=s;},_Init:function(aArg){this.__proto__=
C.A2g;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Ahq:
null,Ae8:null,Ahp:null,An7:A.aan(4,null,null),WA:A.aan(10,null,null),A3H:null,A2x:
null,attrSet:null,Axz:A.aan(10,0,{0:0xFF000000}),K3:function(){this.AH3();},AH3:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},As6:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.Be$(
);var noOfBitmaps=this.Be_();var noOfFonts=this.Bfa();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AIA=this.Ahp;var Acu=this.
Ae8;var AIB=this.Ahq;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
Axz.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AIA){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AIA.Kp.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AIA=AIA.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
WA.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Acu){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Acu.Kp.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Acu=Acu.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.An7.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AIB){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AIB.Kp.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AIB=AIB.Af;}},AIL:function(H){var handle=this.attrSet;var
Acu=this.Ae8;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.WA.Get(inx)&&this.
WA.Get(inx).Oy){var bitmap=this.WA.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Acu){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Acu.Kp.Get(lnx)&&Acu.Kp.Get(lnx).Oy){var bitmap=
Acu.Kp.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Acu=Acu.Af;}A.vv(
this,1);},Bi0:function(E){this.AR8(3,E);},BiZ:function(E){this.AR8(1,E);},Aqo:function(
E){this.AR8(0,E);},A6m:function(E){this.Bk0(0,E);},Big:function(E){this.AEy(3,E);
},A6q:function(E){this.AEy(2,E);},A6p:function(E){this.AEy(1,E);},AgB:function(E
){this.AEy(0,E);},AR8:function(aFontNo,AeY){var Aco=aFontNo;var HP=false;if(Aco<
0)return;if(Aco<4){HP=this.An7.Get(Aco)!==AeY;this.An7.Set(Aco,AeY);}else{var BF=
this.Ahq;Aco=Aco-4;while(!!BF&&(Aco>=20)){BF=BF.Af;Aco=Aco-20;}if(!!BF){HP=BF.Kp.
Get(Aco)!==AeY;BF.Kp.Set(Aco,AeY);}}if(HP&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AeY)font=AeY.font;A.aaJ(handle,aFontNo,font);}if(HP)A.vv(this
,1);},Bk6:function(Wv){var HP=false;if(Wv<4)Wv=4;if(Wv>256)Wv=256;Wv=Wv-4;if((Wv>
0)&&!this.Ahq){this.Ahq=A._NewObject(C.Az1,0);HP=true;}if(!Wv&&!!this.Ahq){this.
Ahq=null;HP=true;}var BF=this.Ahq;while(Wv>0){if((Wv>20)&&!BF.Af){BF.Af=A._NewObject(
C.Az1,0);HP=true;}Wv=Wv-20;if(Wv>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=null;HP=true;
}if(HP){this.AH3();A.vv(this,1);}},Bfa:function(){var CO=4;var BF=this.Ahq;while(
!!BF){CO=CO+20;BF=BF.Af;}return CO;},Bk0:function(aBitmapNo,aBitmap){var PP=aBitmapNo;
var HP=false;if(PP<0)return;if(PP<10){HP=this.WA.Get(PP)!==aBitmap;if(!!this.WA.
Get(PP)&&this.WA.Get(PP).Oy)A.zl([this,this.AIL],this.WA.Get(PP),0);this.WA.Set(
PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIL],aBitmap,0);}else{var BF=
this.Ae8;PP=PP-10;while(!!BF&&(PP>=20)){BF=BF.Af;PP=PP-20;}if(!!BF){HP=BF.Kp.Get(
PP)!==aBitmap;if(!!BF.Kp.Get(PP)&&BF.Kp.Get(PP).Oy)A.zl([this,this.AIL],BF.Kp.Get(
PP),0);BF.Kp.Set(PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIL],aBitmap
,0);}}if(HP&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(HP)
A.vv(this,1);},Bk4:function(Wt){var HP=false;if(Wt<10)Wt=10;if(Wt>256)Wt=256;Wt=
Wt-10;if((Wt>0)&&!this.Ae8){this.Ae8=A._NewObject(C.AzZ,0);HP=true;}if(!Wt&&!!this.
Ae8){this.Ae8=null;HP=true;}var BF=this.Ae8;while(Wt>0){if((Wt>20)&&!BF.Af){BF.Af=
A._NewObject(C.AzZ,0);HP=true;}Wt=Wt-20;if(Wt>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=
null;HP=true;}if(HP){this.AH3();A.vv(this,1);}},Be_:function(){var CO=10;var BF=
this.Ae8;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},AEy:function(aColorNo,aColor
){var Ace=aColorNo;var HP=false;if(Ace<0)return;if(Ace<10){HP=this.Axz.Get(Ace)!==
aColor;this.Axz.Set(Ace,aColor);}else{var BF=this.Ahp;Ace=Ace-10;while(!!BF&&(Ace>=
20)){BF=BF.Af;Ace=Ace-20;}if(!!BF){HP=BF.Kp.Get(Ace)!==aColor;BF.Kp.Set(Ace,aColor
);}}if(HP&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(HP)A.vv(this,0);},Bk5:function(Wu){var HP=false;if(Wu<10)Wu=10;if(Wu>256)Wu=
256;Wu=Wu-10;if((Wu>0)&&!this.Ahp){this.Ahp=A._NewObject(C.Az0,0);HP=true;}if(!Wu&&
!!this.Ahp){this.Ahp=null;HP=true;}var BF=this.Ahp;while(Wu>0){if((Wu>20)&&!BF.Af
){BF.Af=A._NewObject(C.Az0,0);HP=true;}Wu=Wu-20;if(Wu>0)BF=BF.Af;}if(!!BF&&!!BF.
Af){BF.Af=null;HP=true;}if(HP){this.AH3();A.vv(this,1);}},Be$:function(){var CO=
10;var BF=this.Ahp;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},_Init:function(aArg
){(this.An7=[]).__proto__=C.AttrSet.An7;(this.WA=[]).__proto__=C.AttrSet.WA;(this.
Axz=[]).__proto__=C.AttrSet.Axz;this.__proto__=C.AttrSet;this.An7.Set(0,A.zW(A.abj.
AAF));this.WA.Set(0,A.zW(A.abj.K2));this.A3H=A.zW(A.abj.AAF);this.A2x=A.zW(A.abj.
K2);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ahq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ae8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahp)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.An7,D);A.aaf(this.WA,D);if((B=this.A3H)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A2x)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.Az1={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(
this.Kp=[]).__proto__=C.Az1.Kp;this.__proto__=C.Az1;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AzZ={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(this.Kp=[]).__proto__=
C.AzZ.Kp;this.__proto__=C.AzZ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.Az0={Af:
null,Kp:A.aan(20,0,null),_Init:function(aArg){(this.Kp=[]).__proto__=C.Az0.Kp;this.
__proto__=C.Az0;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hl={path:null,K3:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Acz:function(H){A.vv(this,0);},E5:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Acz],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A1W:function(aSubPathNo,aX,aY){A.ow([this,this.Acz],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},U1:function(aSubPathNo){A.ow([this,this.Acz],this);var handle=this.path;A.qP(handle
,aSubPathNo);},US:function(aSubPathNo,aX,aY){A.ow([this,this.Acz],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},Jl:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AvS(1);A.ow([this,this.Acz],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bfb:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},AvS:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bfb()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Acz],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hl;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.AtC={Left:0x1,Y5:0x2
,Right:0x4,A2y:0x8,BzX:0x10};C.BzA={Bzo:0,BAu:1};C.BAC={ByM:0,BAh:1,BkM:2};C.BAB={
BzC:0,BBi:1,BkM:2,Av$:3};C.ByE={ByD:0,BBc:1,BAG:2,BAH:3,BAJ:4,BAI:5};C.AKF={NE:360
,Jr:0,Ih:0,QI:0,Aii:function(H){var Fp=this.NE;var FJ;if((Fp>=360)||(Fp<=-360))Fp=
360;this.AvS(2);{var AM=this.Ih;if(this.Jr>AM)AM=this.Jr;if(Fp===360)FJ=AM|0;else
FJ=((Fp*AM)/360)|0;if(FJ<0)FJ=-FJ;FJ=FJ+1;}if(((!Fp||!this.Ih)||!this.Jr)||(((((
this.QI===2)||(this.QI===3))||(this.QI===4))||(this.QI===5))&&((0>=this.Ih)||(0>=
this.Jr)))){this.Jl(0,0);this.Jl(1,0);return;}if(Fp===360){this.Jl(0,FJ+1);this.
Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,360,FJ);this.U1(0);return;}if(!this.QI){
this.Jl(0,FJ+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);return;}if(this.
QI===1){this.Jl(0,FJ+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.
U1(0);return;}if(this.QI===2){this.Jl(0,FJ+1);this.Jl(1,0);this.US(0,0,0);this.E5(
0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.U1(0);return;}if(this.QI===4){var Of=this.Ih;
var Lq=Math.sqrt(Of*Of);var SO=((Lq*0.25)|0)+3;this.Jl(0,(FJ+SO)+2);this.Jl(1,0);
this.US(0,0,0);if(Fp>=0)this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SO);else this.E5(0,Of
/2,0,Lq/2,Lq/2,180,0,SO);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.U1(0);return;
}if(this.QI===5){var Jy=Fp;var Of=this.Ih*Math.cos(Jy*A.kw);var AhY=this.Jr*Math.
sin(Jy*A.kw);var Lq=Math.sqrt((Of*Of)+(AhY*AhY));var SO=((Lq*0.25)|0)+3;this.Jl(
0,(FJ+SO)+2);this.Jl(1,0);this.US(0,0,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);
if(Fp>=0)this.E5(0,Of/2,AhY/2,Lq/2,Lq/2,Jy,Jy+180,SO);else this.E5(0,Of/2,AhY/2,
Lq/2,Lq/2,Jy,Jy-180,SO);this.U1(0);return;}if(this.QI===3){var Aie=this.Ih;var AcJ=
Math.sqrt(Aie*Aie);var Jy=Fp;var AhC=this.Ih*Math.cos(Jy*A.kw);var AhD=this.Jr*Math.
sin(Jy*A.kw);var Acj=Math.sqrt((AhC*AhC)+(AhD*AhD));var Aop=((AcJ*0.25)|0)+3;var
Aoo=((Acj*0.25)|0)+3;this.Jl(0,((FJ+Aop)+Aoo)+10);this.Jl(1,0);this.US(0,0,0);if(
Fp>=0){this.E5(0,Aie/2,0,AcJ/2,AcJ/2,180,360,Aop);this.E5(0,0,0,this.Ih,this.Jr,
0,Fp,FJ);this.E5(0,AhC/2,AhD/2,Acj/2,Acj/2,Jy,Jy+180,Aoo);}else{this.E5(0,Aie/2,
0,AcJ/2,AcJ/2,180,0,Aop);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,AhC/2,
AhD/2,Acj/2,Acj/2,Jy,Jy-180,Aoo);}this.U1(0);return;}if(this.QI===2){this.Jl(0,(
FJ*2)+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,0,0,0,0,this.
NE,this.NE-Fp,FJ);this.U1(0);return;}if(this.QI===4){var Of=this.Ih;var Lq=Math.
sqrt(Of*Of);var SO=((Lq*0.25)|0)+3;this.Jl(0,((FJ*2)+SO)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ
);this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SO);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp
,FJ);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ);this.E5(0,Of/2,0,Lq/2,Lq/2,180,0,SO
);}this.U1(0);return;}if(this.QI===5){var Jy=Fp;var sin=Math.sin(Jy*A.kw);var cos=
Math.cos(Jy*A.kw);var Of=this.Ih*cos;var AhY=this.Jr*sin;var Lq=Math.sqrt((Of*Of
)+(AhY*AhY));var SO=((Lq*0.25)|0)+3;this.Jl(0,((FJ*2)+SO)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,Of/2,AhY/2,Lq/2,Lq/2,Jy,Jy+180
,SO);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ);}else{this.E5(0,0,0,this.Ih,this.Jr
,0,Fp,FJ);this.E5(0,Of/2,AhY/2,Lq/2,Lq/2,Jy,Jy-180,SO);this.E5(0,0,0,0,0,this.NE
,this.NE-Fp,FJ);}this.U1(0);return;}if(this.QI===3){var Jy=Fp;var Bu1=Math.sin(Jy
*A.kw);var BuW=Math.cos(Jy*A.kw);var Aie=this.Ih;var AhC=this.Ih*BuW;var AhD=this.
Jr*Bu1;var AcJ=Math.sqrt(Aie*Aie);var Acj=Math.sqrt((AhC*AhC)+(AhD*AhD));var Aop=((
AcJ*0.25)|0)+3;var Aoo=((Acj*0.25)|0)+3;this.Jl(0,(((FJ*2)+Aop)+Aoo)+4);this.Jl(
1,0);if(Fp>=0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,AhC/2,AhD/2,Acj/
2,Acj/2,Jy,Jy+180,Aoo);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ);this.E5(0,Aie/2,
0,AcJ/2,AcJ/2,180,360,Aop);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(
0,AhC/2,AhD/2,Acj/2,Acj/2,Jy,Jy-180,Aoo);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ
);this.E5(0,Aie/2,0,AcJ/2,AcJ/2,180,0,Aop);}this.U1(0);return;}},BiB:function(E){
if(E===this.NE)return;this.NE=E;if((this.Ih>0)&&(this.Jr>0))A.ow([this,this.Aii]
,this);},BjM:function(E){if((E===this.Ih)&&(E===this.Jr))return;this.Ih=E;this.Jr=
E;if(!!this.NE)A.ow([this,this.Aii],this);},BjW:function(E){if(E===this.QI)return;
this.QI=E;if((!!this.NE&&(this.Ih>0))&&(this.Jr>0))A.ow([this,this.Aii],this);},
_Init:function(aArg){C.Hl._Init.call(this,aArg);this.__proto__=C.AKF;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Aj;C.AKF.__proto__=C.Hl;};C._ReInit=function(
){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */