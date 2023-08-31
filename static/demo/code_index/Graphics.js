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
C.Canvas={Dj:null,ACx:null,Qf:A.vx,Pf:0,Axo:false,K3:function(){if(this.Axo)this.
DetachBitmap();},Init:function(aArg){this.Oy=true;},Aqt:function(E){if((E[0]<=0)||(
E[1]<=0))E=B_;if(A.z8(E,this.FrameSize))return;if(this.Axo)throw new Error(BH);this.
FrameSize=E;this.UO=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B_;this.FrameDelay=
0;this.NoOfFrames=1;}this.Qf=[].concat(B_,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Pf;for(this.Pf=this.NoOfFrames-1;this.Pf>=0;this.Pf--)this.AtQ(this.Qf,this.
Qf,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Pf=dstFrameNr;}}if(!(((
B=this.Qf)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.ACx)?B[1].call(B[0],this):null;this.Qf=EV;}},DetachBitmap:function(
){if(!this.Axo)throw new Error(GS);this.bitmap=null;this.Axo=false;this.FrameSize=
B_;this.FrameDelay=0;this.NoOfFrames=1;this.UO=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Jt);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Axo=true;var noOfFrames=1;var frameSize=B_;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.UO=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Bet:function(aClip
,AnA,A_f,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!AnA){AnA.As5();attrSet=AnA.attrSet;}if(!!A_f)attrString=A_f.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A3t:function(aClip,AeZ,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AYi,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AeZ||!AeZ.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AYi===1)orient=
90;else if(AYi===2)orient=180;else if(AYi===3)orient=270;var dstFrameNo=this.Pf;
var dstBitmap=this.bitmap;var srcFont=AeZ.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Bev:function(aClip,aBitmap,aFrameNr,aDstRect,ArZ,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!ArZ)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
Pf;var srcRect=[].concat(B_,aBitmap.FrameSize);var left=((ArZ&0x1)===0x1);var top=((
ArZ&0x2)===0x2);var right=((ArZ&0x4)===0x4);var bottom=((ArZ&0x8)===0x8);var interior=((
ArZ&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},G$:
function(aClip,AnE,aDstRect,aFlipY,aOffset,aWidth,BtP,BsZ,Btj,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!AnE||!AnE.path)return;var style=0;switch(BtP){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(BsZ){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(Btj){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnE.path;{A.aa5(dstBitmap
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
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BkW:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
A.aa8("%s",OK);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.Pf;{A.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},A21:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.Pf;{A.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Ado:function(aClip,AnE,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bs3){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!AnE||!AnE.path)return;var nonZeroWinding=Bs3===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnE.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bew:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AtQ:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bey:function(aClip,aDstPos1,aDstPos2,BtU,BtV,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var AfB=BtU;var AfC=BtV;var AcA=aDstPos1;
var AcB=aDstPos2;if(A.z8(AcA,AcB))return;if(AfB<=1)AfB=1;if(AfC<=1)AfC=1;var AhK=
AfB/2;var AhL=AfC/2;var Aob=AcA[0];var Aoc=AcA[1];var Aod=AcB[0];var Aoe=AcB[1];
var JY=Aod-Aob;var JZ=Aoe-Aoc;var IQ=Math.sqrt((JY*JY)+(JZ*JZ));if(((AfB>4096)||(
AfC>4096))||(IQ>4096)){A.aa8("%s",PJ);return;}JY=JY/IQ;JZ=JZ/IQ;var x1=Aob+(JZ*AhK
);var y1=Aoc-(JY*AhK);var x2=Aod+(JZ*AhL);var y2=Aoe-(JY*AhL);var x3=Aod-(JZ*AhL
);var y3=Aoe+(JY*AhL);var x4=Aob-(JZ*AhK);var y4=Aoc+(JY*AhK);var BbK=A.zW(A.abj.
Arv);var srcRect=[].concat(N1,A.aaj(BbK.FrameSize,CJ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;var srcBitmap=BbK.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AtA:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Aj._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K3();this.__proto__=A.abj.Aj;A.
abj.Aj._Done.call(this);},_Mark:function(D){var B;A.abj.Aj._Mark.call(this,D);if((
B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACx)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Awf={Vt:1,Vu:0,Ya:0,Yb:
0,Vv:0,Vw:1,Yc:0,Yd:0,Qq:0,Qr:0,Ye:1,Vx:0,Tr:0,Ts:0,Yf:0,Vy:1,T8:0,T7:0,T6:0,Af6:
0,AkX:true,AAa:function(aX,aY){var UE=((aX*this.Qq)+(aY*this.Qr))+this.Vx;var BU=((
aX*this.Tr)+(aY*this.Ts))+this.Vy;if(!!BU&&(BU!==1))UE=UE/BU;this.T8=UE;return true;
},AjT:function(aX,aY){var Asi=this.Af6;if(Asi<0)return false;var FY=((aX*this.Vt
)+(aY*this.Vu))+this.Yb;var Dl=((aX*this.Vv)+(aY*this.Vw))+this.Yd;var UE=((aX*this.
Qq)+(aY*this.Qr))+this.Vx;var BU=((aX*this.Tr)+(aY*this.Ts))+this.Vy;var Ay4=1;if(
!!BU&&(BU!==1)){FY=FY/BU;Dl=Dl/BU;UE=UE/BU;}if(Asi!==-UE)Ay4=1/(UE+Asi);if(!!Asi
)Ay4=Ay4*Asi;this.T6=FY*Ay4;this.T7=Dl*Ay4;this.T8=UE+Asi;return true;},BfH:function(
GU,OS,PM){if(!GU||!OS)throw new Error(Fn);this.Vt=GU.Vt+((OS.Vt-GU.Vt)*PM);this.
Vu=GU.Vu+((OS.Vu-GU.Vu)*PM);this.Ya=GU.Ya+((OS.Ya-GU.Ya)*PM);this.Yb=GU.Yb+((OS.
Yb-GU.Yb)*PM);this.Vv=GU.Vv+((OS.Vv-GU.Vv)*PM);this.Vw=GU.Vw+((OS.Vw-GU.Vw)*PM);
this.Yc=GU.Yc+((OS.Yc-GU.Yc)*PM);this.Yd=GU.Yd+((OS.Yd-GU.Yd)*PM);this.Qq=GU.Qq+((
OS.Qq-GU.Qq)*PM);this.Qr=GU.Qr+((OS.Qr-GU.Qr)*PM);this.Ye=GU.Ye+((OS.Ye-GU.Ye)*PM
);this.Vx=GU.Vx+((OS.Vx-GU.Vx)*PM);this.Tr=GU.Tr+((OS.Tr-GU.Tr)*PM);this.Ts=GU.Ts+((
OS.Ts-GU.Ts)*PM);this.Yf=GU.Yf+((OS.Yf-GU.Yf)*PM);this.Vy=GU.Vy+((OS.Vy-GU.Vy)*PM
);this.Af6=GU.Af6+((OS.Af6-GU.Af6)*PM);this.AkX=false;return this;},Aej:function(
AHb,AHc,AHd){this.Vt=this.Vt*AHb;this.Vu=this.Vu*AHc;this.Ya=this.Ya*AHd;this.Vv=
this.Vv*AHb;this.Vw=this.Vw*AHc;this.Yc=this.Yc*AHd;this.Qq=this.Qq*AHb;this.Qr=
this.Qr*AHc;this.Ye=this.Ye*AHd;this.Tr=this.Tr*AHb;this.Ts=this.Ts*AHc;this.Yf=
this.Yf*AHd;this.AkX=false;return this;},Bl$:function(AG5,AG6,AG7){this.Yb=((this.
Yb+(this.Vt*AG5))+(this.Vu*AG6))+(this.Ya*AG7);this.Yd=((this.Yd+(this.Vv*AG5))+(
this.Vw*AG6))+(this.Yc*AG7);this.Vx=((this.Vx+(this.Qq*AG5))+(this.Qr*AG6))+(this.
Ye*AG7);this.Vy=((this.Vy+(this.Tr*AG5))+(this.Ts*AG6))+(this.Yf*AG7);this.AkX=false;
return this;},ABX:function(){return this.AkX||((((((((((((((((this.Vt===1)&&!this.
Vu)&&!this.Ya)&&!this.Yb)&&!this.Vv)&&(this.Vw===1))&&!this.Yc)&&!this.Yd)&&!this.
Qq)&&!this.Qr)&&(this.Ye===1))&&!this.Vx)&&!this.Tr)&&!this.Ts)&&!this.Yf)&&(this.
Vy===1));},Bei:function(AHh,AHk,AHi,AHl,AYw,AYx,AHj,AHm){var AxO=AHi-AYw;var AxQ=
AHl-AYx;var AxP=AHj-AYw;var AxR=AHm-AYx;var Azl=((AHh-AHi)+AYw)-AHj;var Azm=((AHk-
AHl)+AYx)-AHm;var AnY=(AxO*AxR)-(AxQ*AxP);if(!AnY)return null;this.Qq=((Azl*AxR)-(
Azm*AxP))/AnY;this.Qr=((AxO*Azm)-(AxQ*Azl))/AnY;this.Ye=0;this.Vx=1;this.Vt=(AHi-
AHh)+(this.Qq*AHi);this.Vu=(AHj-AHh)+(this.Qr*AHj);this.Ya=0;this.Yb=AHh;this.Vv=(
AHl-AHk)+(this.Qq*AHl);this.Vw=(AHm-AHk)+(this.Qr*AHm);this.Yc=0;this.Yd=AHk;this.
Tr=0;this.Ts=0;this.Yf=0;this.Vy=1;this.AkX=false;return this;},Bdv:function(KJ){
if(!KJ)return this;this.Vt=KJ.Vt;this.Vu=KJ.Vu;this.Ya=KJ.Ya;this.Yb=KJ.Yb;this.
Vv=KJ.Vv;this.Vw=KJ.Vw;this.Yc=KJ.Yc;this.Yd=KJ.Yd;this.Qq=KJ.Qq;this.Qr=KJ.Qr;this.
Ye=KJ.Ye;this.Vx=KJ.Vx;this.Tr=KJ.Tr;this.Ts=KJ.Ts;this.Yf=KJ.Yf;this.Vy=KJ.Vy;this.
AkX=KJ.AkX;this.Af6=KJ.Af6;return this;},A4I:function(){this.Vt=1;this.Vu=0;this.
Ya=0;this.Yb=0;this.Vv=0;this.Vw=1;this.Yc=0;this.Yd=0;this.Qq=0;this.Qr=0;this.
Ye=1;this.Vx=0;this.Tr=0;this.Ts=0;this.Yf=0;this.Vy=1;this.AkX=true;return this;
},_Init:function(aArg){this.__proto__=C.Awf;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A2m={CZ:A.vw,attrString:null,K3:function(){this.A3f();},A3f:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CZ=B_;}
,Ajb:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},Bfp:function(){return this.CZ;},Bkl:function(
AnA,aString,aWidth,aEnableBidiText){this.A3f();var attrSet=null;var handle=null;
var s=B_;if(!!AnA){AnA.As5();attrSet=AnA.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CZ=s;},_Init:function(aArg){this.__proto__=
C.A2m;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Ahq:
null,Ae9:null,Ahp:null,An$:A.aan(4,null,null),Ww:A.aan(10,null,null),A3N:null,A2D:
null,attrSet:null,Axy:A.aan(10,0,{0:0xFF000000}),K3:function(){this.AH2();},AH2:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},As5:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.Bff(
);var noOfBitmaps=this.Bfe();var noOfFonts=this.Bfg();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AIz=this.Ahp;var Act=this.
Ae9;var AIA=this.Ahq;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
Axy.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AIz){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AIz.Kp.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AIz=AIz.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
Ww.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Act){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Act.Kp.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Act=Act.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.An$.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AIA){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AIA.Kp.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AIA=AIA.Af;}},AIK:function(H){var handle=this.attrSet;var
Act=this.Ae9;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.Ww.Get(inx)&&this.
Ww.Get(inx).Oy){var bitmap=this.Ww.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Act){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Act.Kp.Get(lnx)&&Act.Kp.Get(lnx).Oy){var bitmap=
Act.Kp.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Act=Act.Af;}A.vv(
this,1);},Bi5:function(E){this.AR6(3,E);},Bi4:function(E){this.AR6(1,E);},Aqr:function(
E){this.AR6(0,E);},A6t:function(E){this.Bk5(0,E);},Bil:function(E){this.AEy(3,E);
},A6x:function(E){this.AEy(2,E);},A6w:function(E){this.AEy(1,E);},AgC:function(E
){this.AEy(0,E);},AR6:function(aFontNo,AeZ){var Acn=aFontNo;var HP=false;if(Acn<
0)return;if(Acn<4){HP=this.An$.Get(Acn)!==AeZ;this.An$.Set(Acn,AeZ);}else{var BF=
this.Ahq;Acn=Acn-4;while(!!BF&&(Acn>=20)){BF=BF.Af;Acn=Acn-20;}if(!!BF){HP=BF.Kp.
Get(Acn)!==AeZ;BF.Kp.Set(Acn,AeZ);}}if(HP&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AeZ)font=AeZ.font;A.aaJ(handle,aFontNo,font);}if(HP)A.vv(this
,1);},Bk$:function(Wr){var HP=false;if(Wr<4)Wr=4;if(Wr>256)Wr=256;Wr=Wr-4;if((Wr>
0)&&!this.Ahq){this.Ahq=A._NewObject(C.Az0,0);HP=true;}if(!Wr&&!!this.Ahq){this.
Ahq=null;HP=true;}var BF=this.Ahq;while(Wr>0){if((Wr>20)&&!BF.Af){BF.Af=A._NewObject(
C.Az0,0);HP=true;}Wr=Wr-20;if(Wr>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=null;HP=true;
}if(HP){this.AH2();A.vv(this,1);}},Bfg:function(){var CO=4;var BF=this.Ahq;while(
!!BF){CO=CO+20;BF=BF.Af;}return CO;},Bk5:function(aBitmapNo,aBitmap){var PP=aBitmapNo;
var HP=false;if(PP<0)return;if(PP<10){HP=this.Ww.Get(PP)!==aBitmap;if(!!this.Ww.
Get(PP)&&this.Ww.Get(PP).Oy)A.zl([this,this.AIK],this.Ww.Get(PP),0);this.Ww.Set(
PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIK],aBitmap,0);}else{var BF=
this.Ae9;PP=PP-10;while(!!BF&&(PP>=20)){BF=BF.Af;PP=PP-20;}if(!!BF){HP=BF.Kp.Get(
PP)!==aBitmap;if(!!BF.Kp.Get(PP)&&BF.Kp.Get(PP).Oy)A.zl([this,this.AIK],BF.Kp.Get(
PP),0);BF.Kp.Set(PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIK],aBitmap
,0);}}if(HP&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(HP)
A.vv(this,1);},Bk9:function(Wp){var HP=false;if(Wp<10)Wp=10;if(Wp>256)Wp=256;Wp=
Wp-10;if((Wp>0)&&!this.Ae9){this.Ae9=A._NewObject(C.AzY,0);HP=true;}if(!Wp&&!!this.
Ae9){this.Ae9=null;HP=true;}var BF=this.Ae9;while(Wp>0){if((Wp>20)&&!BF.Af){BF.Af=
A._NewObject(C.AzY,0);HP=true;}Wp=Wp-20;if(Wp>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=
null;HP=true;}if(HP){this.AH2();A.vv(this,1);}},Bfe:function(){var CO=10;var BF=
this.Ae9;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},AEy:function(aColorNo,aColor
){var Acd=aColorNo;var HP=false;if(Acd<0)return;if(Acd<10){HP=this.Axy.Get(Acd)!==
aColor;this.Axy.Set(Acd,aColor);}else{var BF=this.Ahp;Acd=Acd-10;while(!!BF&&(Acd>=
20)){BF=BF.Af;Acd=Acd-20;}if(!!BF){HP=BF.Kp.Get(Acd)!==aColor;BF.Kp.Set(Acd,aColor
);}}if(HP&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(HP)A.vv(this,0);},Bk_:function(Wq){var HP=false;if(Wq<10)Wq=10;if(Wq>256)Wq=
256;Wq=Wq-10;if((Wq>0)&&!this.Ahp){this.Ahp=A._NewObject(C.AzZ,0);HP=true;}if(!Wq&&
!!this.Ahp){this.Ahp=null;HP=true;}var BF=this.Ahp;while(Wq>0){if((Wq>20)&&!BF.Af
){BF.Af=A._NewObject(C.AzZ,0);HP=true;}Wq=Wq-20;if(Wq>0)BF=BF.Af;}if(!!BF&&!!BF.
Af){BF.Af=null;HP=true;}if(HP){this.AH2();A.vv(this,1);}},Bff:function(){var CO=
10;var BF=this.Ahp;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},_Init:function(aArg
){(this.An$=[]).__proto__=C.AttrSet.An$;(this.Ww=[]).__proto__=C.AttrSet.Ww;(this.
Axy=[]).__proto__=C.AttrSet.Axy;this.__proto__=C.AttrSet;this.An$.Set(0,A.zW(A.abj.
AAE));this.Ww.Set(0,A.zW(A.abj.K2));this.A3N=A.zW(A.abj.AAE);this.A2D=A.zW(A.abj.
K2);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ahq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ae9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahp)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.An$,D);A.aaf(this.Ww,D);if((B=this.A3N)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A2D)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.Az0={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(
this.Kp=[]).__proto__=C.Az0.Kp;this.__proto__=C.Az0;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AzY={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(this.Kp=[]).__proto__=
C.AzY.Kp;this.__proto__=C.AzY;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AzZ={Af:
null,Kp:A.aan(20,0,null),_Init:function(aArg){(this.Kp=[]).__proto__=C.AzZ.Kp;this.
__proto__=C.AzZ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hl={path:null,K3:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Acy:function(H){A.vv(this,0);},E5:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Acy],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A12:function(aSubPathNo,aX,aY){A.ow([this,this.Acy],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},U1:function(aSubPathNo){A.ow([this,this.Acy],this);var handle=this.path;A.qP(handle
,aSubPathNo);},US:function(aSubPathNo,aX,aY){A.ow([this,this.Acy],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},Jl:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AvR(1);A.ow([this,this.Acy],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bfh:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},AvR:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bfh()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Acy],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hl;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.AtB={Left:0x1,Y1:0x2
,Right:0x4,A2E:0x8,BzX:0x10};C.BzA={Bzo:0,BAu:1};C.BAC={ByM:0,BAh:1,BkR:2};C.BAB={
BzC:0,BBi:1,BkR:2,Av_:3};C.ByE={ByD:0,BBc:1,BAG:2,BAH:3,BAJ:4,BAI:5};C.AKE={NE:360
,Jr:0,Ih:0,QI:0,Aii:function(H){var Fp=this.NE;var FJ;if((Fp>=360)||(Fp<=-360))Fp=
360;this.AvR(2);{var AM=this.Ih;if(this.Jr>AM)AM=this.Jr;if(Fp===360)FJ=AM|0;else
FJ=((Fp*AM)/360)|0;if(FJ<0)FJ=-FJ;FJ=FJ+1;}if(((!Fp||!this.Ih)||!this.Jr)||(((((
this.QI===2)||(this.QI===3))||(this.QI===4))||(this.QI===5))&&((0>=this.Ih)||(0>=
this.Jr)))){this.Jl(0,0);this.Jl(1,0);return;}if(Fp===360){this.Jl(0,FJ+1);this.
Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,360,FJ);this.U1(0);return;}if(!this.QI){
this.Jl(0,FJ+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);return;}if(this.
QI===1){this.Jl(0,FJ+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.
U1(0);return;}if(this.QI===2){this.Jl(0,FJ+1);this.Jl(1,0);this.US(0,0,0);this.E5(
0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.U1(0);return;}if(this.QI===4){var Of=this.Ih;
var Lq=Math.sqrt(Of*Of);var SN=((Lq*0.25)|0)+3;this.Jl(0,(FJ+SN)+2);this.Jl(1,0);
this.US(0,0,0);if(Fp>=0)this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SN);else this.E5(0,Of
/2,0,Lq/2,Lq/2,180,0,SN);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.U1(0);return;
}if(this.QI===5){var Jy=Fp;var Of=this.Ih*Math.cos(Jy*A.kw);var AhY=this.Jr*Math.
sin(Jy*A.kw);var Lq=Math.sqrt((Of*Of)+(AhY*AhY));var SN=((Lq*0.25)|0)+3;this.Jl(
0,(FJ+SN)+2);this.Jl(1,0);this.US(0,0,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);
if(Fp>=0)this.E5(0,Of/2,AhY/2,Lq/2,Lq/2,Jy,Jy+180,SN);else this.E5(0,Of/2,AhY/2,
Lq/2,Lq/2,Jy,Jy-180,SN);this.U1(0);return;}if(this.QI===3){var Aie=this.Ih;var AcI=
Math.sqrt(Aie*Aie);var Jy=Fp;var AhC=this.Ih*Math.cos(Jy*A.kw);var AhD=this.Jr*Math.
sin(Jy*A.kw);var Aci=Math.sqrt((AhC*AhC)+(AhD*AhD));var Aot=((AcI*0.25)|0)+3;var
Aos=((Aci*0.25)|0)+3;this.Jl(0,((FJ+Aot)+Aos)+10);this.Jl(1,0);this.US(0,0,0);if(
Fp>=0){this.E5(0,Aie/2,0,AcI/2,AcI/2,180,360,Aot);this.E5(0,0,0,this.Ih,this.Jr,
0,Fp,FJ);this.E5(0,AhC/2,AhD/2,Aci/2,Aci/2,Jy,Jy+180,Aos);}else{this.E5(0,Aie/2,
0,AcI/2,AcI/2,180,0,Aot);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,AhC/2,
AhD/2,Aci/2,Aci/2,Jy,Jy-180,Aos);}this.U1(0);return;}if(this.QI===2){this.Jl(0,(
FJ*2)+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,0,0,0,0,this.
NE,this.NE-Fp,FJ);this.U1(0);return;}if(this.QI===4){var Of=this.Ih;var Lq=Math.
sqrt(Of*Of);var SN=((Lq*0.25)|0)+3;this.Jl(0,((FJ*2)+SN)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ
);this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SN);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp
,FJ);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ);this.E5(0,Of/2,0,Lq/2,Lq/2,180,0,SN
);}this.U1(0);return;}if(this.QI===5){var Jy=Fp;var sin=Math.sin(Jy*A.kw);var cos=
Math.cos(Jy*A.kw);var Of=this.Ih*cos;var AhY=this.Jr*sin;var Lq=Math.sqrt((Of*Of
)+(AhY*AhY));var SN=((Lq*0.25)|0)+3;this.Jl(0,((FJ*2)+SN)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,Of/2,AhY/2,Lq/2,Lq/2,Jy,Jy+180
,SN);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ);}else{this.E5(0,0,0,this.Ih,this.Jr
,0,Fp,FJ);this.E5(0,Of/2,AhY/2,Lq/2,Lq/2,Jy,Jy-180,SN);this.E5(0,0,0,0,0,this.NE
,this.NE-Fp,FJ);}this.U1(0);return;}if(this.QI===3){var Jy=Fp;var Bu1=Math.sin(Jy
*A.kw);var BuW=Math.cos(Jy*A.kw);var Aie=this.Ih;var AhC=this.Ih*BuW;var AhD=this.
Jr*Bu1;var AcI=Math.sqrt(Aie*Aie);var Aci=Math.sqrt((AhC*AhC)+(AhD*AhD));var Aot=((
AcI*0.25)|0)+3;var Aos=((Aci*0.25)|0)+3;this.Jl(0,(((FJ*2)+Aot)+Aos)+4);this.Jl(
1,0);if(Fp>=0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(0,AhC/2,AhD/2,Aci/
2,Aci/2,Jy,Jy+180,Aos);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ);this.E5(0,Aie/2,
0,AcI/2,AcI/2,180,360,Aot);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FJ);this.E5(
0,AhC/2,AhD/2,Aci/2,Aci/2,Jy,Jy-180,Aos);this.E5(0,0,0,0,0,this.NE,this.NE-Fp,FJ
);this.E5(0,Aie/2,0,AcI/2,AcI/2,180,0,Aot);}this.U1(0);return;}},BiG:function(E){
if(E===this.NE)return;this.NE=E;if((this.Ih>0)&&(this.Jr>0))A.ow([this,this.Aii]
,this);},BjR:function(E){if((E===this.Ih)&&(E===this.Jr))return;this.Ih=E;this.Jr=
E;if(!!this.NE)A.ow([this,this.Aii],this);},Bj1:function(E){if(E===this.QI)return;
this.QI=E;if((!!this.NE&&(this.Ih>0))&&(this.Jr>0))A.ow([this,this.Aii],this);},
_Init:function(aArg){C.Hl._Init.call(this,aArg);this.__proto__=C.AKE;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Aj;C.AKE.__proto__=C.Hl;};C._ReInit=function(
){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */