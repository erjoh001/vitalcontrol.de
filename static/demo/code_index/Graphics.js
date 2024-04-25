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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var Ce=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E7=[0,0,0,0];var Hr="No graphics engine bitmap attached to this canvas";var IV=
"The canvas is already initialized with a graphics engine bitmap";var Is="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O4="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P$=[1,1];var CQ=[2,2];var Ff="Missing matrices to interpolate";
C.Canvas={C0:null,AEz:null,QO:A.wg,Px:0,Azb:false,Lc:function(){if(this.Azb)this.
DetachBitmap();},Init:function(aArg){this.N1=true;},ArQ:function(E){if((E[0]<=0)||(
E[1]<=0))E=Ce;if(A.aaX(E,this.FrameSize))return;if(this.Azb)throw new Error(BD);
this.FrameSize=E;this.VC=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=1;}this.QO=[].concat(
Ce,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Px;for(this.Px=this.NoOfFrames-
1;this.Px>=0;this.Px--)this.Avm(this.QO,this.QO,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Px=dstFrameNr;}}if(!(((B=this.QO)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEz)?B[1].call(B[0],
this):null;this.QO=E7;}},DetachBitmap:function(){if(!this.Azb)throw new Error(Hr
);this.bitmap=null;this.Azb=false;this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=
1;this.VC=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IV);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azb=true;var noOfFrames=
1;var frameSize=Ce;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VC=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiF:function(aClip,AoB,Bb6,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoB){AoB.Ajd();attrSet=AoB.attrSet;}if(
!!Bb6)attrString=Bb6.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Px;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6p:function(
aClip,AfK,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1c,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfK||!AfK.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1c===1)orient=90;else if(A1c===2)orient=180;else if(A1c===
3)orient=270;var dstFrameNo=this.Px;var dstBitmap=this.bitmap;var srcFont=AfK.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BiH:function(aClip
,aBitmap,aFrameNr,aDstRect,Att,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Att)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Px;var srcRect=[].concat(
Ce,aBitmap.FrameSize);var left=((Att&0x1)===0x1);var top=((Att&0x2)===0x2);var right=((
Att&0x4)===0x4);var bottom=((Att&0x8)===0x8);var interior=((Att&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hp:function(aClip
,AoL,aDstRect,aFlipY,aOffset,aWidth,Byk,Bxv,BxR,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoL||!AoL.path)return;var style=0;switch(Byk){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bxv){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BxR){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Px;var path=AoL.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhV:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Is);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Px;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bo5:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O4);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Px;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A51:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Px;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aeq:function(aClip,AoL,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bxz){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoL||!AoL.path)return;var nonZeroWinding=Bxz===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Px;var path=AoL.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BiI:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avm:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BiK:function(aClip,aDstPos1,aDstPos2,Byq,Byr,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agt=Byq;var Agu=Byr;var AdB=aDstPos1;
var AdC=aDstPos2;if(A.aaX(AdB,AdC))return;if(Agt<=1)Agt=1;if(Agu<=1)Agu=1;var AiD=
Agt/2;var AiE=Agu/2;var Apl=AdB[0];var Apm=AdB[1];var Apn=AdC[0];var Apo=AdC[1];
var Ka=Apn-Apl;var Kb=Apo-Apm;var IZ=Math.sqrt((Ka*Ka)+(Kb*Kb));if(((Agt>4096)||(
Agu>4096))||(IZ>4096)){A.ab5("%s",P_);return;}Ka=Ka/IZ;Kb=Kb/IZ;var x1=Apl+(Kb*AiD
);var y1=Apm-(Ka*AiD);var x2=Apn+(Kb*AiE);var y2=Apo-(Ka*AiE);var x3=Apn-(Kb*AiE
);var y3=Apo+(Ka*AiE);var x4=Apl-(Kb*AiD);var y4=Apm+(Ka*AiD);var BfM=A.aaL(A.aci.
AsW);var srcRect=[].concat(P$,A.abe(BfM.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;var srcBitmap=BfM.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au9:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lc();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEz)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax3={Wg:1,Wh:0,Y2:0,Y3:
0,Wi:0,Wj:1,Y4:0,Y5:0,QZ:0,Q0:0,Y6:1,Wk:0,T$:0,Ua:0,Y7:0,Wl:1,US:0,P8:0,P7:0,AgX:
0,AlR:true,AB8:function(aX,aY){var Vs=((aX*this.QZ)+(aY*this.Q0))+this.Wk;var BY=((
aX*this.T$)+(aY*this.Ua))+this.Wl;if(!!BY&&(BY!==1))Vs=Vs/BY;this.US=Vs;return true;
},Afc:function(aX,aY){var AtS=this.AgX;if(AtS<0)return false;var Ep=((aX*this.Wg
)+(aY*this.Wh))+this.Y3;var Dh=((aX*this.Wi)+(aY*this.Wj))+this.Y5;var Vs=((aX*this.
QZ)+(aY*this.Q0))+this.Wk;var BY=((aX*this.T$)+(aY*this.Ua))+this.Wl;var AAY=1;if(
!!BY&&(BY!==1)){Ep=Ep/BY;Dh=Dh/BY;Vs=Vs/BY;}if(AtS!==-Vs)AAY=1/(Vs+AtS);if(!!AtS
)AAY=AAY*AtS;this.P7=Ep*AAY;this.P8=Dh*AAY;this.US=Vs+AtS;return true;},BjS:function(
Hb,O_,Qf){if(!Hb||!O_)throw new Error(Ff);this.Wg=Hb.Wg+((O_.Wg-Hb.Wg)*Qf);this.
Wh=Hb.Wh+((O_.Wh-Hb.Wh)*Qf);this.Y2=Hb.Y2+((O_.Y2-Hb.Y2)*Qf);this.Y3=Hb.Y3+((O_.
Y3-Hb.Y3)*Qf);this.Wi=Hb.Wi+((O_.Wi-Hb.Wi)*Qf);this.Wj=Hb.Wj+((O_.Wj-Hb.Wj)*Qf);
this.Y4=Hb.Y4+((O_.Y4-Hb.Y4)*Qf);this.Y5=Hb.Y5+((O_.Y5-Hb.Y5)*Qf);this.QZ=Hb.QZ+((
O_.QZ-Hb.QZ)*Qf);this.Q0=Hb.Q0+((O_.Q0-Hb.Q0)*Qf);this.Y6=Hb.Y6+((O_.Y6-Hb.Y6)*Qf
);this.Wk=Hb.Wk+((O_.Wk-Hb.Wk)*Qf);this.T$=Hb.T$+((O_.T$-Hb.T$)*Qf);this.Ua=Hb.Ua+((
O_.Ua-Hb.Ua)*Qf);this.Y7=Hb.Y7+((O_.Y7-Hb.Y7)*Qf);this.Wl=Hb.Wl+((O_.Wl-Hb.Wl)*Qf
);this.AgX=Hb.AgX+((O_.AgX-Hb.AgX)*Qf);this.AlR=false;return this;},Afi:function(
AJd,AJe,AJf){this.Wg=this.Wg*AJd;this.Wh=this.Wh*AJe;this.Y2=this.Y2*AJf;this.Wi=
this.Wi*AJd;this.Wj=this.Wj*AJe;this.Y4=this.Y4*AJf;this.QZ=this.QZ*AJd;this.Q0=
this.Q0*AJe;this.Y6=this.Y6*AJf;this.T$=this.T$*AJd;this.Ua=this.Ua*AJe;this.Y7=
this.Y7*AJf;this.AlR=false;return this;},Bqn:function(AI7,AI8,AI9){this.Y3=((this.
Y3+(this.Wg*AI7))+(this.Wh*AI8))+(this.Y2*AI9);this.Y5=((this.Y5+(this.Wi*AI7))+(
this.Wj*AI8))+(this.Y4*AI9);this.Wk=((this.Wk+(this.QZ*AI7))+(this.Q0*AI8))+(this.
Y6*AI9);this.Wl=((this.Wl+(this.T$*AI7))+(this.Ua*AI8))+(this.Y7*AI9);this.AlR=false;
return this;},ADZ:function(){return this.AlR||((((((((((((((((this.Wg===1)&&!this.
Wh)&&!this.Y2)&&!this.Y3)&&!this.Wi)&&(this.Wj===1))&&!this.Y4)&&!this.Y5)&&!this.
QZ)&&!this.Q0)&&(this.Y6===1))&&!this.Wk)&&!this.T$)&&!this.Ua)&&!this.Y7)&&(this.
Wl===1));},ANR:function(Aia,Aid,Aib,Aie,AoT,AoU,Aic,Aif){var AzC=Aib-AoT;var AzE=
Aie-AoU;var AzD=Aic-AoT;var AzF=Aif-AoU;var ABg=((Aia-Aib)+AoT)-Aic;var ABh=((Aid-
Aie)+AoU)-Aif;var Ao7=(AzC*AzF)-(AzE*AzD);if(!Ao7)return null;this.QZ=((ABg*AzF)-(
ABh*AzD))/Ao7;this.Q0=((AzC*ABh)-(AzE*ABg))/Ao7;this.Y6=0;this.Wk=1;this.Wg=(Aib-
Aia)+(this.QZ*Aib);this.Wh=(Aic-Aia)+(this.Q0*Aic);this.Y2=0;this.Y3=Aia;this.Wi=(
Aie-Aid)+(this.QZ*Aie);this.Wj=(Aif-Aid)+(this.Q0*Aif);this.Y4=0;this.Y5=Aid;this.
T$=0;this.Ua=0;this.Y7=0;this.Wl=1;this.AlR=false;return this;},BhB:function(L8){
if(!L8)return this;this.Wg=L8.Wg;this.Wh=L8.Wh;this.Y2=L8.Y2;this.Y3=L8.Y3;this.
Wi=L8.Wi;this.Wj=L8.Wj;this.Y4=L8.Y4;this.Y5=L8.Y5;this.QZ=L8.QZ;this.Q0=L8.Q0;this.
Y6=L8.Y6;this.Wk=L8.Wk;this.T$=L8.T$;this.Ua=L8.Ua;this.Y7=L8.Y7;this.Wl=L8.Wl;this.
AlR=L8.AlR;this.AgX=L8.AgX;return this;},A7M:function(){this.Wg=1;this.Wh=0;this.
Y2=0;this.Y3=0;this.Wi=0;this.Wj=1;this.Y4=0;this.Y5=0;this.QZ=0;this.Q0=0;this.
Y6=1;this.Wk=0;this.T$=0;this.Ua=0;this.Y7=0;this.Wl=1;this.AlR=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax3;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7u={BdQ:1,BdR:0,BdS:0,BdT:0,BdU:1,BdV:0,BdW:0,BdX:0,BdY:1,P8:0,P7:0,A2E:false
,Afc:function(Fh){if(!this.A2E)return false;var A4T=Fh[0];var A4V=Fh[1];var BDd=((
A4T*this.BdQ)+(A4V*this.BdR))+this.BdS;var BDe=((A4T*this.BdT)+(A4V*this.BdU))+this.
BdV;var A35=((A4T*this.BdW)+(A4V*this.BdX))+this.BdY;if(!!A35){this.P7=BDd/A35;this.
P8=BDe/A35;return true;}return false;},ANR:function(Aia,Aid,Aib,Aie,AoT,AoU,Aic,
Aif){var AzC=Aib-AoT;var AzE=Aie-AoU;var AzD=Aic-AoT;var AzF=Aif-AoU;var ABg=((Aia-
Aib)+AoT)-Aic;var ABh=((Aid-Aie)+AoU)-Aif;var Ao7=(AzC*AzF)-(AzE*AzD);this.A2E=false;
if(!Ao7)return;var AiF=((ABg*AzF)-(ABh*AzD))/Ao7;var BI=((AzC*ABh)-(AzE*ABg))/Ao7;
var a=(Aib-Aia)+(AiF*Aib);var Rz=(Aic-Aia)+(BI*Aic);var B3=Aia;var d=(Aie-Aid)+(
AiF*Aie);var AJ1=(Aif-Aid)+(BI*Aif);var LK=Aid;this.BdQ=AJ1-(LK*BI);this.BdR=(B3
*BI)-Rz;this.BdS=(Rz*LK)-(B3*AJ1);this.BdT=(LK*AiF)-d;this.BdU=a-(B3*AiF);this.BdV=(
B3*d)-(a*LK);this.BdW=(d*BI)-(AJ1*AiF);this.BdX=(Rz*AiF)-(a*BI);this.BdY=(a*AJ1)-(
Rz*d);this.A2E=true;},_Init:function(aArg){this.__proto__=C.A7u;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5s={C5:A.wf,attrString:null,Lc:function(){this.A6h(
);},A6h:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C5=Ce;},Aj6:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjB:function(
){return this.C5;},Boq:function(AoB,aString,aWidth,aEnableBidiText){this.A6h();var
attrSet=null;var handle=null;var s=Ce;if(!!AoB){AoB.Ajd();attrSet=AoB.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C5=s;},_Init:function(
aArg){this.__proto__=C.A5s;A.h7++;},_Done:function(){this.Lc();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aij:null,AfV:null,Aii:null,Api:A.abi(4,null,null),RB:A.abi(10,null,
null),A6K:null,A5F:null,attrSet:null,Azn:A.abi(10,0,{0:0xFF000000}),Lc:function(
){this.AJZ();},Init:function(aArg){if(!!this.RB.Get(0)&&this.RB.Get(0).N1)A.zV([
this,this.AAL],this.RB.Get(0),0);},AJZ:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Ajd:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.Bjs();var noOfBitmaps=this.Bjr();var noOfFonts=
this.Bjt();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKu=this.Aii;var Adr=this.AfV;var AKv=this.Aij;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.Azn.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKu){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKu.KG.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKu=AKu.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RB.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adr){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adr.KG.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adr=Adr.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Api.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKv){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKv.KG.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKv=AKv.Ah;
}},AAL:function(G){var handle=this.attrSet;var Adr=this.AfV;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RB.Get(inx)&&this.RB.Get(inx).N1){var bitmap=this.
RB.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adr){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adr.KG.Get(lnx)&&Adr.KG.Get(lnx).N1){var bitmap=Adr.KG.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adr=Adr.Ah;}A.we(this,1);},BmY:function(E
){this.AUK(3,E);},A_e:function(E){this.AUK(1,E);},Aht:function(E){this.AUK(0,E);
},A9P:function(E){this.Bpf(0,E);},Bml:function(E){this.AGH(3,E);},A9T:function(E
){this.AGH(2,E);},A9S:function(E){this.AGH(1,E);},Ahq:function(E){this.AGH(0,E);
},AUK:function(aFontNo,AfK){var Adm=aFontNo;var HX=false;if(Adm<0)return;if(Adm<
4){HX=this.Api.Get(Adm)!==AfK;this.Api.Set(Adm,AfK);}else{var Bz=this.Aij;Adm=Adm-
4;while(!!Bz&&(Adm>=20)){Bz=Bz.Ah;Adm=Adm-20;}if(!!Bz){HX=Bz.KG.Get(Adm)!==AfK;Bz.
KG.Set(Adm,AfK);}}if(HX&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfK)font=AfK.font;A.abG(handle,aFontNo,font);}if(HX)A.we(this,1);},Bpl:function(
Xp){var HX=false;if(Xp<4)Xp=4;if(Xp>256)Xp=256;Xp=Xp-4;if((Xp>0)&&!this.Aij){this.
Aij=A._NewObject(C.ABX,0);HX=true;}if(!Xp&&!!this.Aij){this.Aij=null;HX=true;}var
Bz=this.Aij;while(Xp>0){if((Xp>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABX,0);HX=true;
}Xp=Xp-20;if(Xp>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HX=true;}if(HX){this.AJZ(
);A.we(this,1);}},Bjt:function(){var CB=4;var Bz=this.Aij;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpf:function(aBitmapNo,aBitmap){var Qj=aBitmapNo;var HX=false;
if(Qj<0)return;if(Qj<10){HX=this.RB.Get(Qj)!==aBitmap;if(!!this.RB.Get(Qj)&&this.
RB.Get(Qj).N1)A.z9([this,this.AAL],this.RB.Get(Qj),0);this.RB.Set(Qj,aBitmap);if(
!!aBitmap&&aBitmap.N1)A.zV([this,this.AAL],aBitmap,0);}else{var Bz=this.AfV;Qj=Qj-
10;while(!!Bz&&(Qj>=20)){Bz=Bz.Ah;Qj=Qj-20;}if(!!Bz){HX=Bz.KG.Get(Qj)!==aBitmap;
if(!!Bz.KG.Get(Qj)&&Bz.KG.Get(Qj).N1)A.z9([this,this.AAL],Bz.KG.Get(Qj),0);Bz.KG.
Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.N1)A.zV([this,this.AAL],aBitmap,0);}}if(HX&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(HX)A.we(this,1);},Bpj:
function(Xn){var HX=false;if(Xn<10)Xn=10;if(Xn>256)Xn=256;Xn=Xn-10;if((Xn>0)&&!this.
AfV){this.AfV=A._NewObject(C.ABV,0);HX=true;}if(!Xn&&!!this.AfV){this.AfV=null;HX=
true;}var Bz=this.AfV;while(Xn>0){if((Xn>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABV,0
);HX=true;}Xn=Xn-20;if(Xn>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HX=true;}if(HX
){this.AJZ();A.we(this,1);}},Bjr:function(){var CB=10;var Bz=this.AfV;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGH:function(aColorNo,aColor){var Adb=aColorNo;
var HX=false;if(Adb<0)return;if(Adb<10){HX=this.Azn.Get(Adb)!==aColor;this.Azn.Set(
Adb,aColor);}else{var Bz=this.Aii;Adb=Adb-10;while(!!Bz&&(Adb>=20)){Bz=Bz.Ah;Adb=
Adb-20;}if(!!Bz){HX=Bz.KG.Get(Adb)!==aColor;Bz.KG.Set(Adb,aColor);}}if(HX&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(HX)A.we(this,
0);},Bpk:function(Xo){var HX=false;if(Xo<10)Xo=10;if(Xo>256)Xo=256;Xo=Xo-10;if((
Xo>0)&&!this.Aii){this.Aii=A._NewObject(C.ABW,0);HX=true;}if(!Xo&&!!this.Aii){this.
Aii=null;HX=true;}var Bz=this.Aii;while(Xo>0){if((Xo>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.ABW,0);HX=true;}Xo=Xo-20;if(Xo>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HX=true;
}if(HX){this.AJZ();A.we(this,1);}},Bjs:function(){var CB=10;var Bz=this.Aii;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Api=[]).__proto__=
C.AttrSet.Api;(this.RB=[]).__proto__=C.AttrSet.RB;(this.Azn=[]).__proto__=C.AttrSet.
Azn;this.__proto__=C.AttrSet;this.Api.Set(0,A.aaL(A.aci.ACC));this.RB.Set(0,A.aaL(
A.aci.TO));this.A6K=A.aaL(A.aci.ACC);this.A5F=A.aaL(A.aci.TO);this.Init(aArg);A.
h7++;},_Done:function(){this.Lc();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aij)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aii)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Api,D);A.aa6(this.RB,D);if((B=this.A6K)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A5F)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.ABX={Ah:null,KG:A.abi(20,null,null),_Init:function(aArg){(
this.KG=[]).__proto__=C.ABX.KG;this.__proto__=C.ABX;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KG,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.ABV={Ah:null,KG:A.abi(20,null,null),_Init:function(aArg){(this.KG=[]).__proto__=
C.ABV.KG;this.__proto__=C.ABV;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KG,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.ABW={Ah:
null,KG:A.abi(20,0,null),_Init:function(aArg){(this.KG=[]).__proto__=C.ABW.KG;this.
__proto__=C.ABW;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hz={path:null,Lc:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},Adz:function(G){A.we(this,0);},Fl:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.Adz],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A46:function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VP:function(aSubPathNo){A.pe([this,this.Adz],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VH:function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jv:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.Axz(1);A.pe([this,this.Adz],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bju:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},Axz:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bju()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.Adz],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hz;A.h7++;},_Done:function(){this.Lc();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Au_={Left:0x1,ZS:0x2
,Right:0x4,A5G:0x8,BEP:0x10};C.BEv={BEj:0,BFn:1};C.BFv={BDE:0,BE$:1,Bo0:2};C.BFu={
BEx:0,BGe:1,Bo0:2,AxW:3};C.BDw={BDv:0,BF$:1,BFz:2,BFA:3,BFC:4,BFB:5};C.AMM={NQ:360
,J0:0,Iq:0,Rd:0,Aje:function(G){var B;var FF=this.NQ;var FU;if((FF>=360)||(FF<=-
360))FF=360;this.Axz(2);{var Az=Math.max(this.Iq,this.J0);FU=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FU*=4;if(FF<360)FU=((FF*FU)/360)|0;FU=Math.max(FU,-
FU,1);}if(((!FF||!this.Iq)||!this.J0)||(((((this.Rd===2)||(this.Rd===3))||(this.
Rd===4))||(this.Rd===5))&&((0>=this.Iq)||(0>=this.J0)))){this.Jv(0,0);this.Jv(1,
0);return;}if(FF===360){this.Jv(0,FU+1);this.Jv(1,0);this.Fl(0,0,0,this.Iq,this.
J0,0,360,FU);this.VP(0);return;}if(!this.Rd){this.Jv(0,FU+1);this.Jv(1,0);this.Fl(
0,0,0,this.Iq,this.J0,0,FF,FU);return;}if(this.Rd===1){this.Jv(0,FU+1);this.Jv(1
,0);this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU);this.VP(0);return;}if(this.Rd===2){this.
Jv(0,FU+1);this.Jv(1,0);this.VH(0,0,0);this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU);this.
VP(0);return;}if(this.Rd===4){var Oq=this.Iq;var LF=Math.sqrt(Oq*Oq);var To=((LF
*0.25)|0)+3;this.Jv(0,(FU+To)+2);this.Jv(1,0);this.VH(0,0,0);if(FF>=0)this.Fl(0,
Oq/2,0,LF/2,LF/2,180,360,To);else this.Fl(0,Oq/2,0,LF/2,LF/2,180,0,To);this.Fl(0
,0,0,this.Iq,this.J0,0,FF,FU);this.VP(0);return;}if(this.Rd===5){var JF=FF;var Oq=
this.Iq*Math.cos(JF*A.k$);var AiS=this.J0*Math.sin(JF*A.k$);var LF=Math.sqrt((Oq
*Oq)+(AiS*AiS));var To=((LF*0.25)|0)+3;this.Jv(0,(FU+To)+2);this.Jv(1,0);this.VH(
0,0,0);this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU);if(FF>=0)this.Fl(0,Oq/2,AiS/2,LF/2
,LF/2,JF,JF+180,To);else this.Fl(0,Oq/2,AiS/2,LF/2,LF/2,JF,JF-180,To);this.VP(0);
return;}if(this.Rd===3){var Ai$=this.Iq;var AdI=Math.sqrt(Ai$*Ai$);var JF=FF;var
Aiw=this.Iq*Math.cos(JF*A.k$);var Aix=this.J0*Math.sin(JF*A.k$);var Adh=Math.sqrt((
Aiw*Aiw)+(Aix*Aix));var ApD=((AdI*0.25)|0)+3;var ApC=((Adh*0.25)|0)+3;this.Jv(0,((
FU+ApD)+ApC)+10);this.Jv(1,0);this.VH(0,0,0);if(FF>=0){this.Fl(0,Ai$/2,0,AdI/2,AdI
/2,180,360,ApD);this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh
/2,Adh/2,JF,JF+180,ApC);}else{this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApD);this.Fl(0
,0,0,this.Iq,this.J0,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JF,JF-180,ApC);}
this.VP(0);return;}if(this.Rd===2){this.Jv(0,(FU*2)+1);this.Jv(1,0);this.Fl(0,0,
0,this.Iq,this.J0,0,FF,FU);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);this.VP(0);return;
}if(this.Rd===4){var Oq=this.Iq;var LF=Math.sqrt(Oq*Oq);var To=((LF*0.25)|0)+3;this.
Jv(0,((FU*2)+To)+2);this.Jv(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU
);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);this.Fl(0,Oq/2,0,LF/2,LF/2,180,360,To
);}else{this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU);this.Fl(0,0,0,0,0,this.NQ,this.NQ-
FF,FU);this.Fl(0,Oq/2,0,LF/2,LF/2,180,0,To);}this.VP(0);return;}if(this.Rd===5){
var JF=FF;var sin=Math.sin(JF*A.k$);var cos=Math.cos(JF*A.k$);var Oq=this.Iq*cos;
var AiS=this.J0*sin;var LF=Math.sqrt((Oq*Oq)+(AiS*AiS));var To=((LF*0.25)|0)+3;this.
Jv(0,((FU*2)+To)+2);this.Jv(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU
);this.Fl(0,Oq/2,AiS/2,LF/2,LF/2,JF,JF+180,To);this.Fl(0,0,0,0,0,this.NQ,this.NQ-
FF,FU);}else{this.Fl(0,0,0,this.Iq,this.J0,0,FF,FU);this.Fl(0,Oq/2,AiS/2,LF/2,LF
/2,JF,JF-180,To);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);}this.VP(0);return;}if(
this.Rd===3){var JF=FF;var Bzy=Math.sin(JF*A.k$);var Bzt=Math.cos(JF*A.k$);var Ai$=
this.Iq;var Aiw=this.Iq*Bzt;var Aix=this.J0*Bzy;var AdI=Math.sqrt(Ai$*Ai$);var Adh=
Math.sqrt((Aiw*Aiw)+(Aix*Aix));var ApD=((AdI*0.25)|0)+3;var ApC=((Adh*0.25)|0)+3;
this.Jv(0,(((FU*2)+ApD)+ApC)+4);this.Jv(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.
J0,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JF,JF+180,ApC);this.Fl(0,0,0,0,0,this.
NQ,this.NQ-FF,FU);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,360,ApD);}else{this.Fl(0,0,0
,this.Iq,this.J0,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JF,JF-180,ApC);this.
Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApD);}this.
VP(0);return;}},BmA:function(E){if(E===this.NQ)return;this.NQ=E;if((this.Iq>0)&&(
this.J0>0))A.pe([this,this.Aje],this);},BnQ:function(E){if((E===this.Iq)&&(E===this.
J0))return;this.Iq=E;this.J0=E;if(!!this.NQ)A.pe([this,this.Aje],this);},Bn0:function(
E){if(E===this.Rd)return;this.Rd=E;if((!!this.NQ&&(this.Iq>0))&&(this.J0>0))A.pe([
this,this.Aje],this);},_Init:function(aArg){C.Hz._Init.call(this,aArg);this.__proto__=
C.AMM;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMM.__proto__=C.Hz;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */