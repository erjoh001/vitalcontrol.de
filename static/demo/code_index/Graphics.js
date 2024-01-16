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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var B9=[0,0];var BC="Can not resize explicitly attached graphics engine bitmaps";
var EU=[0,0,0,0];var Hc="No graphics engine bitmap attached to this canvas";var I7=
"The canvas is already initialized with a graphics engine bitmap";var II="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OH="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PM="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PN=[1,1];var CI=[2,2];var E2="Missing matrices to interpolate";
C.Canvas={CV:null,ACS:null,Qq:A.wg,Pc:0,AxM:false,K2:function(){if(this.AxM)this.
DetachBitmap();},Init:function(aArg){this.Ot=true;},AqQ:function(E){if((E[0]<=0)||(
E[1]<=0))E=B9;if(A.aaX(E,this.FrameSize))return;if(this.AxM)throw new Error(BC);
this.FrameSize=E;this.U0=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=1;}this.Qq=[].concat(
B9,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pc;for(this.Pc=this.NoOfFrames-
1;this.Pc>=0;this.Pc--)this.Aue(this.Qq,this.Qq,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pc=dstFrameNr;}}if(!(((B=this.Qq)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.ACS)?B[1].call(B[0],
this):null;this.Qq=EU;}},DetachBitmap:function(){if(!this.AxM)throw new Error(Hc
);this.bitmap=null;this.AxM=false;this.FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=
1;this.U0=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I7);if(!aBitmap)return this;this.bitmap=aBitmap;this.AxM=true;var noOfFrames=
1;var frameSize=B9;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.U0=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Be1:function(aClip,AnR,A_U,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AnR){AnR.Aiv();attrSet=AnR.attrSet;}if(
!!A_U)attrString=A_U.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pc;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A3U:function(
aClip,Ae1,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,AYB,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!Ae1||!Ae1.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(AYB===1)orient=90;else if(AYB===2)orient=180;else if(AYB===
3)orient=270;var dstFrameNo=this.Pc;var dstBitmap=this.bitmap;var srcFont=Ae1.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Be3:function(aClip
,aBitmap,aFrameNr,aDstRect,Asm,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Asm)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pc;var srcRect=[].concat(
B9,aBitmap.FrameSize);var left=((Asm&0x1)===0x1);var top=((Asm&0x2)===0x2);var right=((
Asm&0x4)===0x4);var bottom=((Asm&0x8)===0x8);var interior=((Asm&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ha:function(aClip
,AnY,aDstRect,aFlipY,aOffset,aWidth,Bt6,Bte,BtA,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AnY||!AnY.path)return;var style=0;switch(Bt6){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bte){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BtA){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pc;var path=AnY.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},Ag_:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",II);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pc;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bld:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,OH);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pc;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A3q:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pc;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},AdG:function(aClip,AnY,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bti){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AnY||!AnY.path)return;var nonZeroWinding=Bti===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pc;var path=AnY.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Be4:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pc;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Aue:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pc;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Be6:function(aClip,aDstPos1,aDstPos2,Bt$,Bua,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var AfE=Bt$;var AfF=Bua;var AcS=aDstPos1;
var AcT=aDstPos2;if(A.aaX(AcS,AcT))return;if(AfE<=1)AfE=1;if(AfF<=1)AfF=1;var AhU=
AfE/2;var AhV=AfF/2;var Aox=AcS[0];var Aoy=AcS[1];var Aoz=AcT[0];var AoA=AcT[1];
var JS=Aoz-Aox;var JT=AoA-Aoy;var IO=Math.sqrt((JS*JS)+(JT*JT));if(((AfE>4096)||(
AfF>4096))||(IO>4096)){A.ab5("%s",PM);return;}JS=JS/IO;JT=JT/IO;var x1=Aox+(JT*AhU
);var y1=Aoy-(JS*AhU);var x2=Aoz+(JT*AhV);var y2=AoA-(JS*AhV);var x3=Aoz-(JT*AhV
);var y3=AoA+(JS*AhV);var x4=Aox-(JT*AhU);var y4=Aoy+(JS*AhU);var Bco=A.aaL(A.aci.
ArV);var srcRect=[].concat(PN,A.abe(Bco.FrameSize,CI));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pc;var srcBitmap=Bco.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},At1:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pc;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K2();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.CV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACS)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AwC={VG:1,VH:0,Yo:0,Yp:
0,VI:0,VJ:1,Yq:0,Yr:0,QA:0,QB:0,Ys:1,VK:0,TF:0,TG:0,Yt:0,VL:1,Ui:0,PK:0,PJ:0,Af9:
0,Ak7:true,AAz:function(aX,aY){var US=((aX*this.QA)+(aY*this.QB))+this.VK;var BR=((
aX*this.TF)+(aY*this.TG))+this.VL;if(!!BR&&(BR!==1))US=US/BR;this.Ui=US;return true;
},Aen:function(aX,aY){var AsH=this.Af9;if(AsH<0)return false;var Ee=((aX*this.VG
)+(aY*this.VH))+this.Yp;var C9=((aX*this.VI)+(aY*this.VJ))+this.Yr;var US=((aX*this.
QA)+(aY*this.QB))+this.VK;var BR=((aX*this.TF)+(aY*this.TG))+this.VL;var Azt=1;if(
!!BR&&(BR!==1)){Ee=Ee/BR;C9=C9/BR;US=US/BR;}if(AsH!==-US)Azt=1/(US+AsH);if(!!AsH
)Azt=Azt*AsH;this.PJ=Ee*Azt;this.PK=C9*Azt;this.Ui=US+AsH;return true;},Bgb:function(
GX,OM,PT){if(!GX||!OM)throw new Error(E2);this.VG=GX.VG+((OM.VG-GX.VG)*PT);this.
VH=GX.VH+((OM.VH-GX.VH)*PT);this.Yo=GX.Yo+((OM.Yo-GX.Yo)*PT);this.Yp=GX.Yp+((OM.
Yp-GX.Yp)*PT);this.VI=GX.VI+((OM.VI-GX.VI)*PT);this.VJ=GX.VJ+((OM.VJ-GX.VJ)*PT);
this.Yq=GX.Yq+((OM.Yq-GX.Yq)*PT);this.Yr=GX.Yr+((OM.Yr-GX.Yr)*PT);this.QA=GX.QA+((
OM.QA-GX.QA)*PT);this.QB=GX.QB+((OM.QB-GX.QB)*PT);this.Ys=GX.Ys+((OM.Ys-GX.Ys)*PT
);this.VK=GX.VK+((OM.VK-GX.VK)*PT);this.TF=GX.TF+((OM.TF-GX.TF)*PT);this.TG=GX.TG+((
OM.TG-GX.TG)*PT);this.Yt=GX.Yt+((OM.Yt-GX.Yt)*PT);this.VL=GX.VL+((OM.VL-GX.VL)*PT
);this.Af9=GX.Af9+((OM.Af9-GX.Af9)*PT);this.Ak7=false;return this;},Aet:function(
AHr,AHs,AHt){this.VG=this.VG*AHr;this.VH=this.VH*AHs;this.Yo=this.Yo*AHt;this.VI=
this.VI*AHr;this.VJ=this.VJ*AHs;this.Yq=this.Yq*AHt;this.QA=this.QA*AHr;this.QB=
this.QB*AHs;this.Ys=this.Ys*AHt;this.TF=this.TF*AHr;this.TG=this.TG*AHs;this.Yt=
this.Yt*AHt;this.Ak7=false;return this;},Bmt:function(AHk,AHl,AHm){this.Yp=((this.
Yp+(this.VG*AHk))+(this.VH*AHl))+(this.Yo*AHm);this.Yr=((this.Yr+(this.VI*AHk))+(
this.VJ*AHl))+(this.Yq*AHm);this.VK=((this.VK+(this.QA*AHk))+(this.QB*AHl))+(this.
Ys*AHm);this.VL=((this.VL+(this.TF*AHk))+(this.TG*AHl))+(this.Yt*AHm);this.Ak7=false;
return this;},ACh:function(){return this.Ak7||((((((((((((((((this.VG===1)&&!this.
VH)&&!this.Yo)&&!this.Yp)&&!this.VI)&&(this.VJ===1))&&!this.Yq)&&!this.Yr)&&!this.
QA)&&!this.QB)&&(this.Ys===1))&&!this.VK)&&!this.TF)&&!this.TG)&&!this.Yt)&&(this.
VL===1));},ALP:function(Ahs,Ahv,Aht,Ahw,An6,An7,Ahu,Ahx){var Ayb=Aht-An6;var Ayd=
Ahw-An7;var Ayc=Ahu-An6;var Aye=Ahx-An7;var AzM=((Ahs-Aht)+An6)-Ahu;var AzN=((Ahv-
Ahw)+An7)-Ahx;var Aoi=(Ayb*Aye)-(Ayd*Ayc);if(!Aoi)return null;this.QA=((AzM*Aye)-(
AzN*Ayc))/Aoi;this.QB=((Ayb*AzN)-(Ayd*AzM))/Aoi;this.Ys=0;this.VK=1;this.VG=(Aht-
Ahs)+(this.QA*Aht);this.VH=(Ahu-Ahs)+(this.QB*Ahu);this.Yo=0;this.Yp=Ahs;this.VI=(
Ahw-Ahv)+(this.QA*Ahw);this.VJ=(Ahx-Ahv)+(this.QB*Ahx);this.Yq=0;this.Yr=Ahv;this.
TF=0;this.TG=0;this.Yt=0;this.VL=1;this.Ak7=false;return this;},Bd$:function(LV){
if(!LV)return this;this.VG=LV.VG;this.VH=LV.VH;this.Yo=LV.Yo;this.Yp=LV.Yp;this.
VI=LV.VI;this.VJ=LV.VJ;this.Yq=LV.Yq;this.Yr=LV.Yr;this.QA=LV.QA;this.QB=LV.QB;this.
Ys=LV.Ys;this.VK=LV.VK;this.TF=LV.TF;this.TG=LV.TG;this.Yt=LV.Yt;this.VL=LV.VL;this.
Ak7=LV.Ak7;this.Af9=LV.Af9;return this;},A5b:function(){this.VG=1;this.VH=0;this.
Yo=0;this.Yp=0;this.VI=0;this.VJ=1;this.Yq=0;this.Yr=0;this.QA=0;this.QB=0;this.
Ys=1;this.VK=0;this.TF=0;this.TG=0;this.Yt=0;this.VL=1;this.Ak7=true;return this;
},_Init:function(aArg){this.__proto__=C.AwC;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A4U={BaC:1,BaD:0,BaE:0,BaF:0,BaG:1,BaH:0,BaI:0,BaJ:0,BaK:1,PK:0,PJ:0,AZ6:false
,Aen:function(E4){if(!this.AZ6)return false;var A17=E4[0];var A19=E4[1];var ByF=((
A17*this.BaC)+(A19*this.BaD))+this.BaE;var ByG=((A17*this.BaF)+(A19*this.BaG))+this.
BaH;var A1l=((A17*this.BaI)+(A19*this.BaJ))+this.BaK;if(!!A1l){this.PJ=ByF/A1l;this.
PK=ByG/A1l;return true;}return false;},ALP:function(Ahs,Ahv,Aht,Ahw,An6,An7,Ahu,
Ahx){var Ayb=Aht-An6;var Ayd=Ahw-An7;var Ayc=Ahu-An6;var Aye=Ahx-An7;var AzM=((Ahs-
Aht)+An6)-Ahu;var AzN=((Ahv-Ahw)+An7)-Ahx;var Aoi=(Ayb*Aye)-(Ayd*Ayc);this.AZ6=false;
if(!Aoi)return;var AsL=((AzM*Aye)-(AzN*Ayc))/Aoi;var BH=((Ayb*AzN)-(Ayd*AzM))/Aoi;
var a=(Aht-Ahs)+(AsL*Aht);var Q$=(Ahu-Ahs)+(BH*Ahu);var BX=Ahs;var d=(Ahw-Ahv)+(
AsL*Ahw);var AIc=(Ahx-Ahv)+(BH*Ahx);var Lv=Ahv;this.BaC=AIc-(Lv*BH);this.BaD=(BX
*BH)-Q$;this.BaE=(Q$*Lv)-(BX*AIc);this.BaF=(Lv*AsL)-d;this.BaG=a-(BX*AsL);this.BaH=(
BX*d)-(a*Lv);this.BaI=(d*BH)-(AIc*AsL);this.BaJ=(Q$*AsL)-(a*BH);this.BaK=(a*AIc)-(
Q$*d);this.AZ6=true;},_Init:function(aArg){this.__proto__=C.A4U;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A2H={CX:A.wf,attrString:null,K2:function(){this.A3G(
);},A3G:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.CX=B9;},Ajp:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BfW:function(
){return this.CX;},BkF:function(AnR,aString,aWidth,aEnableBidiText){this.A3G();var
attrSet=null;var handle=null;var s=B9;if(!!AnR){AnR.Aiv();attrSet=AnR.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.CX=s;},_Init:function(
aArg){this.__proto__=C.A2H;A.h7++;},_Done:function(){this.K2();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Ahz:null,Ae$:null,Ahy:null,Aov:A.abi(4,null,null),WS:A.abi(10,null,
null),A4c:null,A25:null,attrSet:null,AxX:A.abi(10,0,{0:0xFF000000}),K2:function(
){this.AIa();},AIa:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Aiv:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BfN();var noOfBitmaps=this.BfM();var noOfFonts=this.BfO();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AII=this.Ahy;var AcL=this.Ae$;var AIJ=this.Ahz;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.AxX.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AII){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AII.Kr.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AII=AII.Ag;}for(inx=0;inx<10;
inx=inx+1){var entry=this.WS.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!AcL){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
AcL.Kr.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;AcL=AcL.Ag;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Aov.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AIJ
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AIJ.Kr.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AIJ=AIJ.Ag;}},AIU:function(H){var handle=
this.attrSet;var AcL=this.Ae$;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
WS.Get(inx)&&this.WS.Get(inx).Ot){var bitmap=this.WS.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!AcL){for(lnx=0;lnx<20;lnx=lnx+1)if(!!AcL.Kr.Get(lnx)&&AcL.
Kr.Get(lnx).Ot){var bitmap=AcL.Kr.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;AcL=AcL.Ag;}A.we(this,1);},Bjm:function(E){this.ASh(3,E);},A7n:function(
E){this.ASh(1,E);},AgI:function(E){this.ASh(0,E);},A65:function(E){this.Bll(0,E);
},BiF:function(E){this.AEU(3,E);},A69:function(E){this.AEU(2,E);},A68:function(E
){this.AEU(1,E);},AgF:function(E){this.AEU(0,E);},ASh:function(aFontNo,Ae1){var AcF=
aFontNo;var HO=false;if(AcF<0)return;if(AcF<4){HO=this.Aov.Get(AcF)!==Ae1;this.Aov.
Set(AcF,Ae1);}else{var Bz=this.Ahz;AcF=AcF-4;while(!!Bz&&(AcF>=20)){Bz=Bz.Ag;AcF=
AcF-20;}if(!!Bz){HO=Bz.Kr.Get(AcF)!==Ae1;Bz.Kr.Set(AcF,Ae1);}}if(HO&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!Ae1)font=Ae1.font;A.abG(handle,aFontNo
,font);}if(HO)A.we(this,1);},Blr:function(WM){var HO=false;if(WM<4)WM=4;if(WM>256
)WM=256;WM=WM-4;if((WM>0)&&!this.Ahz){this.Ahz=A._NewObject(C.AAn,0);HO=true;}if(
!WM&&!!this.Ahz){this.Ahz=null;HO=true;}var Bz=this.Ahz;while(WM>0){if((WM>20)&&
!Bz.Ag){Bz.Ag=A._NewObject(C.AAn,0);HO=true;}WM=WM-20;if(WM>0)Bz=Bz.Ag;}if(!!Bz&&
!!Bz.Ag){Bz.Ag=null;HO=true;}if(HO){this.AIa();A.we(this,1);}},BfO:function(){var
CK=4;var Bz=this.Ahz;while(!!Bz){CK=CK+20;Bz=Bz.Ag;}return CK;},Bll:function(aBitmapNo
,aBitmap){var PW=aBitmapNo;var HO=false;if(PW<0)return;if(PW<10){HO=this.WS.Get(
PW)!==aBitmap;if(!!this.WS.Get(PW)&&this.WS.Get(PW).Ot)A.z9([this,this.AIU],this.
WS.Get(PW),0);this.WS.Set(PW,aBitmap);if(!!aBitmap&&aBitmap.Ot)A.zV([this,this.AIU
],aBitmap,0);}else{var Bz=this.Ae$;PW=PW-10;while(!!Bz&&(PW>=20)){Bz=Bz.Ag;PW=PW-
20;}if(!!Bz){HO=Bz.Kr.Get(PW)!==aBitmap;if(!!Bz.Kr.Get(PW)&&Bz.Kr.Get(PW).Ot)A.z9([
this,this.AIU],Bz.Kr.Get(PW),0);Bz.Kr.Set(PW,aBitmap);if(!!aBitmap&&aBitmap.Ot)A.
zV([this,this.AIU],aBitmap,0);}}if(HO&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HO)A.we(this,1);},Blp:function(WJ){var HO=false;if(WJ<10)WJ=10;if(WJ>
256)WJ=256;WJ=WJ-10;if((WJ>0)&&!this.Ae$){this.Ae$=A._NewObject(C.AAl,0);HO=true;
}if(!WJ&&!!this.Ae$){this.Ae$=null;HO=true;}var Bz=this.Ae$;while(WJ>0){if((WJ>20
)&&!Bz.Ag){Bz.Ag=A._NewObject(C.AAl,0);HO=true;}WJ=WJ-20;if(WJ>0)Bz=Bz.Ag;}if(!!
Bz&&!!Bz.Ag){Bz.Ag=null;HO=true;}if(HO){this.AIa();A.we(this,1);}},BfM:function(
){var CK=10;var Bz=this.Ae$;while(!!Bz){CK=CK+20;Bz=Bz.Ag;}return CK;},AEU:function(
aColorNo,aColor){var Acv=aColorNo;var HO=false;if(Acv<0)return;if(Acv<10){HO=this.
AxX.Get(Acv)!==aColor;this.AxX.Set(Acv,aColor);}else{var Bz=this.Ahy;Acv=Acv-10;
while(!!Bz&&(Acv>=20)){Bz=Bz.Ag;Acv=Acv-20;}if(!!Bz){HO=Bz.Kr.Get(Acv)!==aColor;
Bz.Kr.Set(Acv,aColor);}}if(HO&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HO)A.we(this,0);},Blq:function(WK){var HO=false;if(WK<10)WK=
10;if(WK>256)WK=256;WK=WK-10;if((WK>0)&&!this.Ahy){this.Ahy=A._NewObject(C.AAm,0
);HO=true;}if(!WK&&!!this.Ahy){this.Ahy=null;HO=true;}var Bz=this.Ahy;while(WK>0
){if((WK>20)&&!Bz.Ag){Bz.Ag=A._NewObject(C.AAm,0);HO=true;}WK=WK-20;if(WK>0)Bz=Bz.
Ag;}if(!!Bz&&!!Bz.Ag){Bz.Ag=null;HO=true;}if(HO){this.AIa();A.we(this,1);}},BfN:
function(){var CK=10;var Bz=this.Ahy;while(!!Bz){CK=CK+20;Bz=Bz.Ag;}return CK;},
_Init:function(aArg){(this.Aov=[]).__proto__=C.AttrSet.Aov;(this.WS=[]).__proto__=
C.AttrSet.WS;(this.AxX=[]).__proto__=C.AttrSet.AxX;this.__proto__=C.AttrSet;this.
Aov.Set(0,A.aaL(A.aci.AA1));this.WS.Set(0,A.aaL(A.aci.Tl));this.A4c=A.aaL(A.aci.
AA1);this.A25=A.aaL(A.aci.Tl);A.h7++;},_Done:function(){this.K2();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ahz)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ae$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ahy)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Aov,D);A.aa6(this.WS,D
);if((B=this.A4c)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A25)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.AAn={Ag:null,Kr:A.abi(
20,null,null),_Init:function(aArg){(this.Kr=[]).__proto__=C.AAn.Kr;this.__proto__=
C.AAn;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.Kr,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.AAl={Ag:null,Kr:A.abi(20,null,null),
_Init:function(aArg){(this.Kr=[]).__proto__=C.AAl.Kr;this.__proto__=C.AAl;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Kr,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.AAm={Ag:null,Kr:A.abi(20,0,null),_Init:function(aArg
){(this.Kr=[]).__proto__=C.AAm.Kr;this.__proto__=C.AAm;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hm={path:null,K2:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},AcQ:function(H){A.we(this,0);},E8:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.AcQ
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A2l:
function(aSubPathNo,aX,aY){A.pe([this,this.AcQ],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},Vb:function(aSubPathNo){A.
pe([this,this.AcQ],this);var handle=this.path;A.jU(handle,aSubPathNo);},U4:function(
aSubPathNo,aX,aY){A.pe([this,this.AcQ],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jh:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Awb(1);A.pe([this,this.AcQ],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BfP:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Awb:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BfP()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.AcQ],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hm;A.h7++;},_Done:function(){
this.K2();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.At2={Left:0x1,Za:0x2,Right:0x4,A26:0x8,BAi:0x10
};C.BzV={BzJ:0,BAR:1};C.BA0={By5:0,BAE:1,Bk_:2};C.BAY={BzX:0,BBG:1,Bk_:2,Awv:3};
C.ByX={ByW:0,BBA:1,BA4:2,BA5:3,BA7:4,BA6:5};C.AKP={Nx:360,JK:0,Ig:0,QS:0,Aiw:function(
H){var B;var Fo=this.Nx;var FG;if((Fo>=360)||(Fo<=-360))Fo=360;this.Awb(2);{var Av=
Math.max(this.Ig,this.JK);FG=1+((90/((Math.acos(1-(0.5/(Av+1)))*A.rE)|0))|0);FG*=
4;if(Fo<360)FG=((Fo*FG)/360)|0;FG=Math.max(FG,-FG,1);}if(((!Fo||!this.Ig)||!this.
JK)||(((((this.QS===2)||(this.QS===3))||(this.QS===4))||(this.QS===5))&&((0>=this.
Ig)||(0>=this.JK)))){this.Jh(0,0);this.Jh(1,0);return;}if(Fo===360){this.Jh(0,FG+
1);this.Jh(1,0);this.E8(0,0,0,this.Ig,this.JK,0,360,FG);this.Vb(0);return;}if(!this.
QS){this.Jh(0,FG+1);this.Jh(1,0);this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);return;}
if(this.QS===1){this.Jh(0,FG+1);this.Jh(1,0);this.E8(0,0,0,this.Ig,this.JK,0,Fo,
FG);this.Vb(0);return;}if(this.QS===2){this.Jh(0,FG+1);this.Jh(1,0);this.U4(0,0,
0);this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.Vb(0);return;}if(this.QS===4){var
N$=this.Ig;var Ls=Math.sqrt(N$*N$);var SX=((Ls*0.25)|0)+3;this.Jh(0,(FG+SX)+2);this.
Jh(1,0);this.U4(0,0,0);if(Fo>=0)this.E8(0,N$/2,0,Ls/2,Ls/2,180,360,SX);else this.
E8(0,N$/2,0,Ls/2,Ls/2,180,0,SX);this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.Vb(0
);return;}if(this.QS===5){var Js=Fo;var N$=this.Ig*Math.cos(Js*A.k$);var Ah_=this.
JK*Math.sin(Js*A.k$);var Ls=Math.sqrt((N$*N$)+(Ah_*Ah_));var SX=((Ls*0.25)|0)+3;
this.Jh(0,(FG+SX)+2);this.Jh(1,0);this.U4(0,0,0);this.E8(0,0,0,this.Ig,this.JK,0
,Fo,FG);if(Fo>=0)this.E8(0,N$/2,Ah_/2,Ls/2,Ls/2,Js,Js+180,SX);else this.E8(0,N$/
2,Ah_/2,Ls/2,Ls/2,Js,Js-180,SX);this.Vb(0);return;}if(this.QS===3){var Air=this.
Ig;var Ac0=Math.sqrt(Air*Air);var Js=Fo;var AhM=this.Ig*Math.cos(Js*A.k$);var AhN=
this.JK*Math.sin(Js*A.k$);var AcA=Math.sqrt((AhM*AhM)+(AhN*AhN));var AoP=((Ac0*0.25
)|0)+3;var AoO=((AcA*0.25)|0)+3;this.Jh(0,((FG+AoP)+AoO)+10);this.Jh(1,0);this.U4(
0,0,0);if(Fo>=0){this.E8(0,Air/2,0,Ac0/2,Ac0/2,180,360,AoP);this.E8(0,0,0,this.Ig
,this.JK,0,Fo,FG);this.E8(0,AhM/2,AhN/2,AcA/2,AcA/2,Js,Js+180,AoO);}else{this.E8(
0,Air/2,0,Ac0/2,Ac0/2,180,0,AoP);this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.E8(
0,AhM/2,AhN/2,AcA/2,AcA/2,Js,Js-180,AoO);}this.Vb(0);return;}if(this.QS===2){this.
Jh(0,(FG*2)+1);this.Jh(1,0);this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.E8(0,0,0
,0,0,this.Nx,this.Nx-Fo,FG);this.Vb(0);return;}if(this.QS===4){var N$=this.Ig;var
Ls=Math.sqrt(N$*N$);var SX=((Ls*0.25)|0)+3;this.Jh(0,((FG*2)+SX)+2);this.Jh(1,0);
if(Fo>=0){this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.E8(0,0,0,0,0,this.Nx,this.
Nx-Fo,FG);this.E8(0,N$/2,0,Ls/2,Ls/2,180,360,SX);}else{this.E8(0,0,0,this.Ig,this.
JK,0,Fo,FG);this.E8(0,0,0,0,0,this.Nx,this.Nx-Fo,FG);this.E8(0,N$/2,0,Ls/2,Ls/2,
180,0,SX);}this.Vb(0);return;}if(this.QS===5){var Js=Fo;var sin=Math.sin(Js*A.k$
);var cos=Math.cos(Js*A.k$);var N$=this.Ig*cos;var Ah_=this.JK*sin;var Ls=Math.sqrt((
N$*N$)+(Ah_*Ah_));var SX=((Ls*0.25)|0)+3;this.Jh(0,((FG*2)+SX)+2);this.Jh(1,0);if(
Fo>=0){this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.E8(0,N$/2,Ah_/2,Ls/2,Ls/2,Js,
Js+180,SX);this.E8(0,0,0,0,0,this.Nx,this.Nx-Fo,FG);}else{this.E8(0,0,0,this.Ig,
this.JK,0,Fo,FG);this.E8(0,N$/2,Ah_/2,Ls/2,Ls/2,Js,Js-180,SX);this.E8(0,0,0,0,0,
this.Nx,this.Nx-Fo,FG);}this.Vb(0);return;}if(this.QS===3){var Js=Fo;var Bvg=Math.
sin(Js*A.k$);var Bvb=Math.cos(Js*A.k$);var Air=this.Ig;var AhM=this.Ig*Bvb;var AhN=
this.JK*Bvg;var Ac0=Math.sqrt(Air*Air);var AcA=Math.sqrt((AhM*AhM)+(AhN*AhN));var
AoP=((Ac0*0.25)|0)+3;var AoO=((AcA*0.25)|0)+3;this.Jh(0,(((FG*2)+AoP)+AoO)+4);this.
Jh(1,0);if(Fo>=0){this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.E8(0,AhM/2,AhN/2,AcA
/2,AcA/2,Js,Js+180,AoO);this.E8(0,0,0,0,0,this.Nx,this.Nx-Fo,FG);this.E8(0,Air/2
,0,Ac0/2,Ac0/2,180,360,AoP);}else{this.E8(0,0,0,this.Ig,this.JK,0,Fo,FG);this.E8(
0,AhM/2,AhN/2,AcA/2,AcA/2,Js,Js-180,AoO);this.E8(0,0,0,0,0,this.Nx,this.Nx-Fo,FG
);this.E8(0,Air/2,0,Ac0/2,Ac0/2,180,0,AoP);}this.Vb(0);return;}},Bi0:function(E){
if(E===this.Nx)return;this.Nx=E;if((this.Ig>0)&&(this.JK>0))A.pe([this,this.Aiw]
,this);},Bj_:function(E){if((E===this.Ig)&&(E===this.JK))return;this.Ig=E;this.JK=
E;if(!!this.Nx)A.pe([this,this.Aiw],this);},Bki:function(E){if(E===this.QS)return;
this.QS=E;if((!!this.Nx&&(this.Ig>0))&&(this.JK>0))A.pe([this,this.Aiw],this);},
_Init:function(aArg){C.Hm._Init.call(this,aArg);this.__proto__=C.AKP;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AKP.__proto__=C.Hm;};C._ReInit=function(
){};C.Dz=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */