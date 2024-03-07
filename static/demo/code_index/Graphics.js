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
var EY=[0,0,0,0];var Hi="No graphics engine bitmap attached to this canvas";var I7=
"The canvas is already initialized with a graphics engine bitmap";var Ik="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O0="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PZ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P0=[1,1];var CO=[2,2];var E7="Missing matrices to interpolate";
C.Canvas={C1:null,AD0:null,QF:A.wg,Pq:0,AyD:false,K$:function(){if(this.AyD)this.
DetachBitmap();},Init:function(aArg){this.OK=true;},Arp:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.AyD)throw new Error(BF);
this.FrameSize=E;this.Vl=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QF=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pq;for(this.Pq=this.NoOfFrames-
1;this.Pq>=0;this.Pq--)this.AuT(this.QF,this.QF,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pq=dstFrameNr;}}if(!(((B=this.QF)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AD0)?B[1].call(B[0],
this):null;this.QF=EY;}},DetachBitmap:function(){if(!this.AyD)throw new Error(Hi
);this.bitmap=null;this.AyD=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.Vl=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I7);if(!aBitmap)return this;this.bitmap=aBitmap;this.AyD=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vl=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Bhn:function(aClip,Aoj,Bba,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aoj){Aoj.Ai1();attrSet=Aoj.attrSet;}if(
!!Bba)attrString=Bba.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pq;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5S:function(
aClip,Aft,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0v,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!Aft||!Aft.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0v===1)orient=90;else if(A0v===2)orient=180;else if(A0v===
3)orient=270;var dstFrameNo=this.Pq;var dstBitmap=this.bitmap;var srcFont=Aft.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bhp:function(aClip
,aBitmap,aFrameNr,aDstRect,AsZ,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!AsZ)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pq;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((AsZ&0x1)===0x1);var top=((AsZ&0x2)===0x2);var right=((
AsZ&0x4)===0x4);var bottom=((AsZ&0x8)===0x8);var interior=((AsZ&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hg:function(aClip
,Aoq,aDstRect,aFlipY,aOffset,aWidth,BwW,Bv6,Bwq,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!Aoq||!Aoq.path)return;var style=0;switch(BwW){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bv6){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bwq){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pq;var path=Aoq.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhD:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Ik);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pq;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BnJ:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O0);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pq;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5m:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pq;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ad6:function(aClip,Aoq,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bv_){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!Aoq||!Aoq.path)return;var nonZeroWinding=Bv_===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pq;var path=Aoq.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bhq:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pq;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AuT:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pq;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bhs:function(aClip,aDstPos1,aDstPos2,Bw2,Bw3,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Af$=Bw2;var Aga=Bw3;var Adh=aDstPos1;
var Adi=aDstPos2;if(A.aaX(Adh,Adi))return;if(Af$<=1)Af$=1;if(Aga<=1)Aga=1;var Aim=
Af$/2;var Ain=Aga/2;var Ao2=Adh[0];var Ao3=Adh[1];var Ao4=Adi[0];var Ao5=Adi[1];
var JY=Ao4-Ao2;var JZ=Ao5-Ao3;var IM=Math.sqrt((JY*JY)+(JZ*JZ));if(((Af$>4096)||(
Aga>4096))||(IM>4096)){A.ab5("%s",PZ);return;}JY=JY/IM;JZ=JZ/IM;var x1=Ao2+(JZ*Aim
);var y1=Ao3-(JY*Aim);var x2=Ao4+(JZ*Ain);var y2=Ao5-(JY*Ain);var x3=Ao4-(JZ*Ain
);var y3=Ao5+(JY*Ain);var x4=Ao2-(JZ*Aim);var y4=Ao3+(JY*Aim);var BeK=A.aaL(A.aci.
Asp);var srcRect=[].concat(P0,A.abe(BeK.FrameSize,CO));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pq;var srcBitmap=BeK.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AuE:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pq;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K$();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AD0)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Axt={VZ:1,V0:0,YL:0,YM:
0,V1:0,V2:1,YN:0,YO:0,QQ:0,QR:0,YP:1,V3:0,T2:0,T3:0,YQ:0,V4:1,UI:0,PX:0,PW:0,AgD:
0,Alt:true,ABv:function(aX,aY){var Vc=((aX*this.QQ)+(aY*this.QR))+this.V3;var BX=((
aX*this.T2)+(aY*this.T3))+this.V4;if(!!BX&&(BX!==1))Vc=Vc/BX;this.UI=Vc;return true;
},AeT:function(aX,aY){var Atl=this.AgD;if(Atl<0)return false;var Ej=((aX*this.VZ
)+(aY*this.V0))+this.YM;var De=((aX*this.V1)+(aY*this.V2))+this.YO;var Vc=((aX*this.
QQ)+(aY*this.QR))+this.V3;var BX=((aX*this.T2)+(aY*this.T3))+this.V4;var AAo=1;if(
!!BX&&(BX!==1)){Ej=Ej/BX;De=De/BX;Vc=Vc/BX;}if(Atl!==-Vc)AAo=1/(Vc+Atl);if(!!Atl
)AAo=AAo*Atl;this.PW=Ej*AAo;this.PX=De*AAo;this.UI=Vc+Atl;return true;},BiB:function(
G4,O4,P6){if(!G4||!O4)throw new Error(E7);this.VZ=G4.VZ+((O4.VZ-G4.VZ)*P6);this.
V0=G4.V0+((O4.V0-G4.V0)*P6);this.YL=G4.YL+((O4.YL-G4.YL)*P6);this.YM=G4.YM+((O4.
YM-G4.YM)*P6);this.V1=G4.V1+((O4.V1-G4.V1)*P6);this.V2=G4.V2+((O4.V2-G4.V2)*P6);
this.YN=G4.YN+((O4.YN-G4.YN)*P6);this.YO=G4.YO+((O4.YO-G4.YO)*P6);this.QQ=G4.QQ+((
O4.QQ-G4.QQ)*P6);this.QR=G4.QR+((O4.QR-G4.QR)*P6);this.YP=G4.YP+((O4.YP-G4.YP)*P6
);this.V3=G4.V3+((O4.V3-G4.V3)*P6);this.T2=G4.T2+((O4.T2-G4.T2)*P6);this.T3=G4.T3+((
O4.T3-G4.T3)*P6);this.YQ=G4.YQ+((O4.YQ-G4.YQ)*P6);this.V4=G4.V4+((O4.V4-G4.V4)*P6
);this.AgD=G4.AgD+((O4.AgD-G4.AgD)*P6);this.Alt=false;return this;},AeZ:function(
AIE,AIF,AIG){this.VZ=this.VZ*AIE;this.V0=this.V0*AIF;this.YL=this.YL*AIG;this.V1=
this.V1*AIE;this.V2=this.V2*AIF;this.YN=this.YN*AIG;this.QQ=this.QQ*AIE;this.QR=
this.QR*AIF;this.YP=this.YP*AIG;this.T2=this.T2*AIE;this.T3=this.T3*AIF;this.YQ=
this.YQ*AIG;this.Alt=false;return this;},Bo3:function(AIw,AIx,AIy){this.YM=((this.
YM+(this.VZ*AIw))+(this.V0*AIx))+(this.YL*AIy);this.YO=((this.YO+(this.V1*AIw))+(
this.V2*AIx))+(this.YN*AIy);this.V3=((this.V3+(this.QQ*AIw))+(this.QR*AIx))+(this.
YP*AIy);this.V4=((this.V4+(this.T2*AIw))+(this.T3*AIx))+(this.YQ*AIy);this.Alt=false;
return this;},ADn:function(){return this.Alt||((((((((((((((((this.VZ===1)&&!this.
V0)&&!this.YL)&&!this.YM)&&!this.V1)&&(this.V2===1))&&!this.YN)&&!this.YO)&&!this.
QQ)&&!this.QR)&&(this.YP===1))&&!this.V3)&&!this.T2)&&!this.T3)&&!this.YQ)&&(this.
V4===1));},ANg:function(AhV,AhY,AhW,AhZ,Aoy,Aoz,AhX,Ah0){var Ay5=AhW-Aoy;var Ay7=
AhZ-Aoz;var Ay6=AhX-Aoy;var Ay8=Ah0-Aoz;var AAI=((AhV-AhW)+Aoy)-AhX;var AAJ=((AhY-
AhZ)+Aoz)-Ah0;var AoN=(Ay5*Ay8)-(Ay7*Ay6);if(!AoN)return null;this.QQ=((AAI*Ay8)-(
AAJ*Ay6))/AoN;this.QR=((Ay5*AAJ)-(Ay7*AAI))/AoN;this.YP=0;this.V3=1;this.VZ=(AhW-
AhV)+(this.QQ*AhW);this.V0=(AhX-AhV)+(this.QR*AhX);this.YL=0;this.YM=AhV;this.V1=(
AhZ-AhY)+(this.QQ*AhZ);this.V2=(Ah0-AhY)+(this.QR*Ah0);this.YN=0;this.YO=AhY;this.
T2=0;this.T3=0;this.YQ=0;this.V4=1;this.Alt=false;return this;},Bgw:function(L2){
if(!L2)return this;this.VZ=L2.VZ;this.V0=L2.V0;this.YL=L2.YL;this.YM=L2.YM;this.
V1=L2.V1;this.V2=L2.V2;this.YN=L2.YN;this.YO=L2.YO;this.QQ=L2.QQ;this.QR=L2.QR;this.
YP=L2.YP;this.V3=L2.V3;this.T2=L2.T2;this.T3=L2.T3;this.YQ=L2.YQ;this.V4=L2.V4;this.
Alt=L2.Alt;this.AgD=L2.AgD;return this;},A7b:function(){this.VZ=1;this.V0=0;this.
YL=0;this.YM=0;this.V1=0;this.V2=1;this.YN=0;this.YO=0;this.QQ=0;this.QR=0;this.
YP=1;this.V3=0;this.T2=0;this.T3=0;this.YQ=0;this.V4=1;this.Alt=true;return this;
},_Init:function(aArg){this.__proto__=C.Axt;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A6V={BcT:1,BcU:0,BcV:0,BcW:0,BcX:1,BcY:0,BcZ:0,Bc0:0,Bc1:1,PX:0,PW:0,A1U:false
,AeT:function(E9){if(!this.A1U)return false;var A36=E9[0];var A38=E9[1];var BBK=((
A36*this.BcT)+(A38*this.BcU))+this.BcV;var BBL=((A36*this.BcW)+(A38*this.BcX))+this.
BcY;var A3h=((A36*this.BcZ)+(A38*this.Bc0))+this.Bc1;if(!!A3h){this.PW=BBK/A3h;this.
PX=BBL/A3h;return true;}return false;},ANg:function(AhV,AhY,AhW,AhZ,Aoy,Aoz,AhX,
Ah0){var Ay5=AhW-Aoy;var Ay7=AhZ-Aoz;var Ay6=AhX-Aoy;var Ay8=Ah0-Aoz;var AAI=((AhV-
AhW)+Aoy)-AhX;var AAJ=((AhY-AhZ)+Aoz)-Ah0;var AoN=(Ay5*Ay8)-(Ay7*Ay6);this.A1U=false;
if(!AoN)return;var Aio=((AAI*Ay8)-(AAJ*Ay6))/AoN;var BJ=((Ay5*AAJ)-(Ay7*AAI))/AoN;
var a=(AhW-AhV)+(Aio*AhW);var Ro=(AhX-AhV)+(BJ*AhX);var B4=AhV;var d=(AhZ-AhY)+(
Aio*AhZ);var AJq=(Ah0-AhY)+(BJ*Ah0);var LF=AhY;this.BcT=AJq-(LF*BJ);this.BcU=(B4
*BJ)-Ro;this.BcV=(Ro*LF)-(B4*AJq);this.BcW=(LF*Aio)-d;this.BcX=a-(B4*Aio);this.BcY=(
B4*d)-(a*LF);this.BcZ=(d*BJ)-(AJq*Aio);this.Bc0=(Ro*Aio)-(a*BJ);this.Bc1=(a*AJq)-(
Ro*d);this.A1U=true;},_Init:function(aArg){this.__proto__=C.A6V;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4E={C4:A.wf,attrString:null,K$:function(){this.A5D(
);},A5D:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C4=Cc;},AjQ:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},Bij:function(
){return this.C4;},Bm9:function(Aoj,aString,aWidth,aEnableBidiText){this.A5D();var
attrSet=null;var handle=null;var s=Cc;if(!!Aoj){Aoj.Ai1();attrSet=Aoj.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C4=s;},_Init:function(
aArg){this.__proto__=C.A4E;A.h7++;},_Done:function(){this.K$();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Ah2:null,AfE:null,Ah1:null,Ao0:A.abi(4,null,null),Xa:A.abi(10,null,
null),A6a:null,A42:null,attrSet:null,AyP:A.abi(10,0,{0:0xFF000000}),K$:function(
){this.AJo();},AJo:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ai1:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.Bia();var noOfBitmaps=this.Bh$();var noOfFonts=this.Bib();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AJX=this.Ah1;var Ac$=this.AfE;var AJY=this.Ah2;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.AyP.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AJX){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AJX.Kx.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AJX=AJX.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xa.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Ac$){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Ac$.Kx.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Ac$=Ac$.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Ao0.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AJY
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AJY.Kx.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AJY=AJY.Ah;}},AJ9:function(G){var handle=
this.attrSet;var Ac$=this.AfE;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xa.Get(inx)&&this.Xa.Get(inx).OK){var bitmap=this.Xa.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Ac$){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Ac$.Kx.Get(lnx)&&Ac$.
Kx.Get(lnx).OK){var bitmap=Ac$.Kx.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Ac$=Ac$.Ah;}A.we(this,1);},BlL:function(E){this.AT3(3,E);},A9z:function(
E){this.AT3(1,E);},Aha:function(E){this.AT3(0,E);},A9f:function(E){this.BnT(0,E);
},Bk2:function(E){this.AF8(3,E);},A9j:function(E){this.AF8(2,E);},A9i:function(E
){this.AF8(1,E);},Ag9:function(E){this.AF8(0,E);},AT3:function(aFontNo,Aft){var Ac6=
aFontNo;var HS=false;if(Ac6<0)return;if(Ac6<4){HS=this.Ao0.Get(Ac6)!==Aft;this.Ao0.
Set(Ac6,Aft);}else{var BD=this.Ah2;Ac6=Ac6-4;while(!!BD&&(Ac6>=20)){BD=BD.Ah;Ac6=
Ac6-20;}if(!!BD){HS=BD.Kx.Get(Ac6)!==Aft;BD.Kx.Set(Ac6,Aft);}}if(HS&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!Aft)font=Aft.font;A.abG(handle,aFontNo
,font);}if(HS)A.we(this,1);},BnZ:function(W8){var HS=false;if(W8<4)W8=4;if(W8>256
)W8=256;W8=W8-4;if((W8>0)&&!this.Ah2){this.Ah2=A._NewObject(C.ABj,0);HS=true;}if(
!W8&&!!this.Ah2){this.Ah2=null;HS=true;}var BD=this.Ah2;while(W8>0){if((W8>20)&&
!BD.Ah){BD.Ah=A._NewObject(C.ABj,0);HS=true;}W8=W8-20;if(W8>0)BD=BD.Ah;}if(!!BD&&
!!BD.Ah){BD.Ah=null;HS=true;}if(HS){this.AJo();A.we(this,1);}},Bib:function(){var
CD=4;var BD=this.Ah2;while(!!BD){CD=CD+20;BD=BD.Ah;}return CD;},BnT:function(aBitmapNo
,aBitmap){var P_=aBitmapNo;var HS=false;if(P_<0)return;if(P_<10){HS=this.Xa.Get(
P_)!==aBitmap;if(!!this.Xa.Get(P_)&&this.Xa.Get(P_).OK)A.z9([this,this.AJ9],this.
Xa.Get(P_),0);this.Xa.Set(P_,aBitmap);if(!!aBitmap&&aBitmap.OK)A.zV([this,this.AJ9
],aBitmap,0);}else{var BD=this.AfE;P_=P_-10;while(!!BD&&(P_>=20)){BD=BD.Ah;P_=P_-
20;}if(!!BD){HS=BD.Kx.Get(P_)!==aBitmap;if(!!BD.Kx.Get(P_)&&BD.Kx.Get(P_).OK)A.z9([
this,this.AJ9],BD.Kx.Get(P_),0);BD.Kx.Set(P_,aBitmap);if(!!aBitmap&&aBitmap.OK)A.
zV([this,this.AJ9],aBitmap,0);}}if(HS&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HS)A.we(this,1);},BnX:function(W6){var HS=false;if(W6<10)W6=10;if(W6>
256)W6=256;W6=W6-10;if((W6>0)&&!this.AfE){this.AfE=A._NewObject(C.ABh,0);HS=true;
}if(!W6&&!!this.AfE){this.AfE=null;HS=true;}var BD=this.AfE;while(W6>0){if((W6>20
)&&!BD.Ah){BD.Ah=A._NewObject(C.ABh,0);HS=true;}W6=W6-20;if(W6>0)BD=BD.Ah;}if(!!
BD&&!!BD.Ah){BD.Ah=null;HS=true;}if(HS){this.AJo();A.we(this,1);}},Bh$:function(
){var CD=10;var BD=this.AfE;while(!!BD){CD=CD+20;BD=BD.Ah;}return CD;},AF8:function(
aColorNo,aColor){var AcW=aColorNo;var HS=false;if(AcW<0)return;if(AcW<10){HS=this.
AyP.Get(AcW)!==aColor;this.AyP.Set(AcW,aColor);}else{var BD=this.Ah1;AcW=AcW-10;
while(!!BD&&(AcW>=20)){BD=BD.Ah;AcW=AcW-20;}if(!!BD){HS=BD.Kx.Get(AcW)!==aColor;
BD.Kx.Set(AcW,aColor);}}if(HS&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HS)A.we(this,0);},BnY:function(W7){var HS=false;if(W7<10)W7=
10;if(W7>256)W7=256;W7=W7-10;if((W7>0)&&!this.Ah1){this.Ah1=A._NewObject(C.ABi,0
);HS=true;}if(!W7&&!!this.Ah1){this.Ah1=null;HS=true;}var BD=this.Ah1;while(W7>0
){if((W7>20)&&!BD.Ah){BD.Ah=A._NewObject(C.ABi,0);HS=true;}W7=W7-20;if(W7>0)BD=BD.
Ah;}if(!!BD&&!!BD.Ah){BD.Ah=null;HS=true;}if(HS){this.AJo();A.we(this,1);}},Bia:
function(){var CD=10;var BD=this.Ah1;while(!!BD){CD=CD+20;BD=BD.Ah;}return CD;},
_Init:function(aArg){(this.Ao0=[]).__proto__=C.AttrSet.Ao0;(this.Xa=[]).__proto__=
C.AttrSet.Xa;(this.AyP=[]).__proto__=C.AttrSet.AyP;this.__proto__=C.AttrSet;this.
Ao0.Set(0,A.aaL(A.aci.AB2));this.Xa.Set(0,A.aaL(A.aci.TE));this.A6a=A.aaL(A.aci.
AB2);this.A42=A.aaL(A.aci.TE);A.h7++;},_Done:function(){this.K$();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ah1)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ao0,D);A.aa6(this.Xa,D
);if((B=this.A6a)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A42)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABj={Ah:null,Kx:A.abi(
20,null,null),_Init:function(aArg){(this.Kx=[]).__proto__=C.ABj.Kx;this.__proto__=
C.ABj;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.Kx,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABh={Ah:null,Kx:A.abi(20,null,null),
_Init:function(aArg){(this.Kx=[]).__proto__=C.ABh.Kx;this.__proto__=C.ABh;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Kx,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABi={Ah:null,Kx:A.abi(20,0,null),_Init:function(aArg
){(this.Kx=[]).__proto__=C.ABi.Kx;this.__proto__=C.ABi;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hs={path:null,K$:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adf:function(G){A.we(this,0);},Fb:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adf
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4i:
function(aSubPathNo,aX,aY){A.pe([this,this.Adf],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},Vx:function(aSubPathNo){A.
pe([this,this.Adf],this);var handle=this.path;A.jU(handle,aSubPathNo);},Vp:function(
aSubPathNo,aX,aY){A.pe([this,this.Adf],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jh:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Aw3(1);A.pe([this,this.Adf],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},Bic:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Aw3:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.Bic()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adf],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hs;A.h7++;},_Done:function(){
this.K$();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.AuF={Left:0x1,Zx:0x2,Right:0x4,A43:0x8,BDn:0x10
};C.BC0={BCO:0,BDX:1};C.BD5={BB_:0,BDJ:1,BnE:2};C.BD4={BC2:0,BEM:1,BnE:2,Axm:3};
C.BB2={BB1:0,BEG:1,BD9:2,BD_:3,BEa:4,BD$:5};C.AMd={NG:360,JN:0,Ij:0,Q7:0,Ai2:function(
G){var B;var Fu=this.NG;var FM;if((Fu>=360)||(Fu<=-360))Fu=360;this.Aw3(2);{var Az=
Math.max(this.Ij,this.JN);FM=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FM*=
4;if(Fu<360)FM=((Fu*FM)/360)|0;FM=Math.max(FM,-FM,1);}if(((!Fu||!this.Ij)||!this.
JN)||(((((this.Q7===2)||(this.Q7===3))||(this.Q7===4))||(this.Q7===5))&&((0>=this.
Ij)||(0>=this.JN)))){this.Jh(0,0);this.Jh(1,0);return;}if(Fu===360){this.Jh(0,FM+
1);this.Jh(1,0);this.Fb(0,0,0,this.Ij,this.JN,0,360,FM);this.Vx(0);return;}if(!this.
Q7){this.Jh(0,FM+1);this.Jh(1,0);this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);return;}
if(this.Q7===1){this.Jh(0,FM+1);this.Jh(1,0);this.Fb(0,0,0,this.Ij,this.JN,0,Fu,
FM);this.Vx(0);return;}if(this.Q7===2){this.Jh(0,FM+1);this.Jh(1,0);this.Vp(0,0,
0);this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Vx(0);return;}if(this.Q7===4){var
Op=this.Ij;var LC=Math.sqrt(Op*Op);var Te=((LC*0.25)|0)+3;this.Jh(0,(FM+Te)+2);this.
Jh(1,0);this.Vp(0,0,0);if(Fu>=0)this.Fb(0,Op/2,0,LC/2,LC/2,180,360,Te);else this.
Fb(0,Op/2,0,LC/2,LC/2,180,0,Te);this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Vx(0
);return;}if(this.Q7===5){var Jr=Fu;var Op=this.Ij*Math.cos(Jr*A.k$);var AiD=this.
JN*Math.sin(Jr*A.k$);var LC=Math.sqrt((Op*Op)+(AiD*AiD));var Te=((LC*0.25)|0)+3;
this.Jh(0,(FM+Te)+2);this.Jh(1,0);this.Vp(0,0,0);this.Fb(0,0,0,this.Ij,this.JN,0
,Fu,FM);if(Fu>=0)this.Fb(0,Op/2,AiD/2,LC/2,LC/2,Jr,Jr+180,Te);else this.Fb(0,Op/
2,AiD/2,LC/2,LC/2,Jr,Jr-180,Te);this.Vx(0);return;}if(this.Q7===3){var AiX=this.
Ij;var Adp=Math.sqrt(AiX*AiX);var Jr=Fu;var Aie=this.Ij*Math.cos(Jr*A.k$);var Aif=
this.JN*Math.sin(Jr*A.k$);var Ac1=Math.sqrt((Aie*Aie)+(Aif*Aif));var Api=((Adp*0.25
)|0)+3;var Aph=((Ac1*0.25)|0)+3;this.Jh(0,((FM+Api)+Aph)+10);this.Jh(1,0);this.Vp(
0,0,0);if(Fu>=0){this.Fb(0,AiX/2,0,Adp/2,Adp/2,180,360,Api);this.Fb(0,0,0,this.Ij
,this.JN,0,Fu,FM);this.Fb(0,Aie/2,Aif/2,Ac1/2,Ac1/2,Jr,Jr+180,Aph);}else{this.Fb(
0,AiX/2,0,Adp/2,Adp/2,180,0,Api);this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Fb(
0,Aie/2,Aif/2,Ac1/2,Ac1/2,Jr,Jr-180,Aph);}this.Vx(0);return;}if(this.Q7===2){this.
Jh(0,(FM*2)+1);this.Jh(1,0);this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Fb(0,0,0
,0,0,this.NG,this.NG-Fu,FM);this.Vx(0);return;}if(this.Q7===4){var Op=this.Ij;var
LC=Math.sqrt(Op*Op);var Te=((LC*0.25)|0)+3;this.Jh(0,((FM*2)+Te)+2);this.Jh(1,0);
if(Fu>=0){this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Fb(0,0,0,0,0,this.NG,this.
NG-Fu,FM);this.Fb(0,Op/2,0,LC/2,LC/2,180,360,Te);}else{this.Fb(0,0,0,this.Ij,this.
JN,0,Fu,FM);this.Fb(0,0,0,0,0,this.NG,this.NG-Fu,FM);this.Fb(0,Op/2,0,LC/2,LC/2,
180,0,Te);}this.Vx(0);return;}if(this.Q7===5){var Jr=Fu;var sin=Math.sin(Jr*A.k$
);var cos=Math.cos(Jr*A.k$);var Op=this.Ij*cos;var AiD=this.JN*sin;var LC=Math.sqrt((
Op*Op)+(AiD*AiD));var Te=((LC*0.25)|0)+3;this.Jh(0,((FM*2)+Te)+2);this.Jh(1,0);if(
Fu>=0){this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Fb(0,Op/2,AiD/2,LC/2,LC/2,Jr,
Jr+180,Te);this.Fb(0,0,0,0,0,this.NG,this.NG-Fu,FM);}else{this.Fb(0,0,0,this.Ij,
this.JN,0,Fu,FM);this.Fb(0,Op/2,AiD/2,LC/2,LC/2,Jr,Jr-180,Te);this.Fb(0,0,0,0,0,
this.NG,this.NG-Fu,FM);}this.Vx(0);return;}if(this.Q7===3){var Jr=Fu;var Bx$=Math.
sin(Jr*A.k$);var Bx6=Math.cos(Jr*A.k$);var AiX=this.Ij;var Aie=this.Ij*Bx6;var Aif=
this.JN*Bx$;var Adp=Math.sqrt(AiX*AiX);var Ac1=Math.sqrt((Aie*Aie)+(Aif*Aif));var
Api=((Adp*0.25)|0)+3;var Aph=((Ac1*0.25)|0)+3;this.Jh(0,(((FM*2)+Api)+Aph)+4);this.
Jh(1,0);if(Fu>=0){this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Fb(0,Aie/2,Aif/2,Ac1
/2,Ac1/2,Jr,Jr+180,Aph);this.Fb(0,0,0,0,0,this.NG,this.NG-Fu,FM);this.Fb(0,AiX/2
,0,Adp/2,Adp/2,180,360,Api);}else{this.Fb(0,0,0,this.Ij,this.JN,0,Fu,FM);this.Fb(
0,Aie/2,Aif/2,Ac1/2,Ac1/2,Jr,Jr-180,Aph);this.Fb(0,0,0,0,0,this.NG,this.NG-Fu,FM
);this.Fb(0,AiX/2,0,Adp/2,Adp/2,180,0,Api);}this.Vx(0);return;}},Bln:function(E){
if(E===this.NG)return;this.NG=E;if((this.Ij>0)&&(this.JN>0))A.pe([this,this.Ai2]
,this);},BmB:function(E){if((E===this.Ij)&&(E===this.JN))return;this.Ij=E;this.JN=
E;if(!!this.NG)A.pe([this,this.Ai2],this);},BmL:function(E){if(E===this.Q7)return;
this.Q7=E;if((!!this.NG&&(this.Ij>0))&&(this.JN>0))A.pe([this,this.Ai2],this);},
_Init:function(aArg){C.Hs._Init.call(this,aArg);this.__proto__=C.AMd;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMd.__proto__=C.Hs;};C._ReInit=function(
){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */