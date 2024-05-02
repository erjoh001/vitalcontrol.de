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
"being wider or higher than 4069 pixel.";var O6="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P$=[1,1];var CQ=[2,2];var Ff="Missing matrices to interpolate";
C.Canvas={C1:null,AEC:null,QO:A.wg,Px:0,Aze:false,Le:function(){if(this.Aze)this.
DetachBitmap();},Init:function(aArg){this.N2=true;},ArS:function(E){if((E[0]<=0)||(
E[1]<=0))E=Ce;if(A.aaX(E,this.FrameSize))return;if(this.Aze)throw new Error(BD);
this.FrameSize=E;this.VC=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=1;}this.QO=[].concat(
Ce,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Px;for(this.Px=this.NoOfFrames-
1;this.Px>=0;this.Px--)this.Avo(this.QO,this.QO,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Px=dstFrameNr;}}if(!(((B=this.QO)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEC)?B[1].call(B[0],
this):null;this.QO=E7;}},DetachBitmap:function(){if(!this.Aze)throw new Error(Hr
);this.bitmap=null;this.Aze=false;this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=
1;this.VC=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IV);if(!aBitmap)return this;this.bitmap=aBitmap;this.Aze=true;var noOfFrames=
1;var frameSize=Ce;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VC=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiK:function(aClip,AoD,Bb$,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoD){AoD.Ajd();attrSet=AoD.attrSet;}if(
!!Bb$)attrString=Bb$.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Px;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6w:function(
aClip,AfK,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1j,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfK||!AfK.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1j===1)orient=90;else if(A1j===2)orient=180;else if(A1j===
3)orient=270;var dstFrameNo=this.Px;var dstBitmap=this.bitmap;var srcFont=AfK.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BiM:function(aClip
,aBitmap,aFrameNr,aDstRect,Atv,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atv)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Px;var srcRect=[].concat(
Ce,aBitmap.FrameSize);var left=((Atv&0x1)===0x1);var top=((Atv&0x2)===0x2);var right=((
Atv&0x4)===0x4);var bottom=((Atv&0x8)===0x8);var interior=((Atv&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hp:function(aClip
,AoN,aDstRect,aFlipY,aOffset,aWidth,Byk,Bxv,BxR,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoN||!AoN.path)return;var style=0;switch(Byk){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bxv){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BxR){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Px;var path=AoN.path;{A.ab3(dstBitmap,path,dstFrameNo
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
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bo_:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O6);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Px;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A58:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Px;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aeq:function(aClip,AoN,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bxz){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoN||!AoN.path)return;var nonZeroWinding=Bxz===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Px;var path=AoN.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BiN:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avo:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BiP:function(aClip,aDstPos1,aDstPos2,Byq,Byr,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agt=Byq;var Agu=Byr;var AdB=aDstPos1;
var AdC=aDstPos2;if(A.aaX(AdB,AdC))return;if(Agt<=1)Agt=1;if(Agu<=1)Agu=1;var AiD=
Agt/2;var AiE=Agu/2;var Apn=AdB[0];var Apo=AdB[1];var App=AdC[0];var Apq=AdC[1];
var Kb=App-Apn;var Kc=Apq-Apo;var I0=Math.sqrt((Kb*Kb)+(Kc*Kc));if(((Agt>4096)||(
Agu>4096))||(I0>4096)){A.ab5("%s",P_);return;}Kb=Kb/I0;Kc=Kc/I0;var x1=Apn+(Kc*AiD
);var y1=Apo-(Kb*AiD);var x2=App+(Kc*AiE);var y2=Apq-(Kb*AiE);var x3=App-(Kc*AiE
);var y3=Apq+(Kb*AiE);var x4=Apn-(Kc*AiD);var y4=Apo+(Kb*AiD);var BfR=A.aaL(A.aci.
AsY);var srcRect=[].concat(P$,A.abe(BfR.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;var srcBitmap=BfR.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au$:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Le();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEC)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax5={Wg:1,Wh:0,Y2:0,Y3:
0,Wi:0,Wj:1,Y4:0,Y5:0,QZ:0,Q0:0,Y6:1,Wk:0,Uc:0,Ud:0,Y7:0,Wl:1,UV:0,P8:0,P7:0,AgX:
0,AlR:true,AB$:function(aX,aY){var Vs=((aX*this.QZ)+(aY*this.Q0))+this.Wk;var BY=((
aX*this.Uc)+(aY*this.Ud))+this.Wl;if(!!BY&&(BY!==1))Vs=Vs/BY;this.UV=Vs;return true;
},Afc:function(aX,aY){var AtU=this.AgX;if(AtU<0)return false;var Ep=((aX*this.Wg
)+(aY*this.Wh))+this.Y3;var Di=((aX*this.Wi)+(aY*this.Wj))+this.Y5;var Vs=((aX*this.
QZ)+(aY*this.Q0))+this.Wk;var BY=((aX*this.Uc)+(aY*this.Ud))+this.Wl;var AA1=1;if(
!!BY&&(BY!==1)){Ep=Ep/BY;Di=Di/BY;Vs=Vs/BY;}if(AtU!==-Vs)AA1=1/(Vs+AtU);if(!!AtU
)AA1=AA1*AtU;this.P7=Ep*AA1;this.P8=Di*AA1;this.UV=Vs+AtU;return true;},BjX:function(
Hb,O$,Qf){if(!Hb||!O$)throw new Error(Ff);this.Wg=Hb.Wg+((O$.Wg-Hb.Wg)*Qf);this.
Wh=Hb.Wh+((O$.Wh-Hb.Wh)*Qf);this.Y2=Hb.Y2+((O$.Y2-Hb.Y2)*Qf);this.Y3=Hb.Y3+((O$.
Y3-Hb.Y3)*Qf);this.Wi=Hb.Wi+((O$.Wi-Hb.Wi)*Qf);this.Wj=Hb.Wj+((O$.Wj-Hb.Wj)*Qf);
this.Y4=Hb.Y4+((O$.Y4-Hb.Y4)*Qf);this.Y5=Hb.Y5+((O$.Y5-Hb.Y5)*Qf);this.QZ=Hb.QZ+((
O$.QZ-Hb.QZ)*Qf);this.Q0=Hb.Q0+((O$.Q0-Hb.Q0)*Qf);this.Y6=Hb.Y6+((O$.Y6-Hb.Y6)*Qf
);this.Wk=Hb.Wk+((O$.Wk-Hb.Wk)*Qf);this.Uc=Hb.Uc+((O$.Uc-Hb.Uc)*Qf);this.Ud=Hb.Ud+((
O$.Ud-Hb.Ud)*Qf);this.Y7=Hb.Y7+((O$.Y7-Hb.Y7)*Qf);this.Wl=Hb.Wl+((O$.Wl-Hb.Wl)*Qf
);this.AgX=Hb.AgX+((O$.AgX-Hb.AgX)*Qf);this.AlR=false;return this;},Afi:function(
AJg,AJh,AJi){this.Wg=this.Wg*AJg;this.Wh=this.Wh*AJh;this.Y2=this.Y2*AJi;this.Wi=
this.Wi*AJg;this.Wj=this.Wj*AJh;this.Y4=this.Y4*AJi;this.QZ=this.QZ*AJg;this.Q0=
this.Q0*AJh;this.Y6=this.Y6*AJi;this.Uc=this.Uc*AJg;this.Ud=this.Ud*AJh;this.Y7=
this.Y7*AJi;this.AlR=false;return this;},Bqs:function(AI_,AI$,AJa){this.Y3=((this.
Y3+(this.Wg*AI_))+(this.Wh*AI$))+(this.Y2*AJa);this.Y5=((this.Y5+(this.Wi*AI_))+(
this.Wj*AI$))+(this.Y4*AJa);this.Wk=((this.Wk+(this.QZ*AI_))+(this.Q0*AI$))+(this.
Y6*AJa);this.Wl=((this.Wl+(this.Uc*AI_))+(this.Ud*AI$))+(this.Y7*AJa);this.AlR=false;
return this;},AD2:function(){return this.AlR||((((((((((((((((this.Wg===1)&&!this.
Wh)&&!this.Y2)&&!this.Y3)&&!this.Wi)&&(this.Wj===1))&&!this.Y4)&&!this.Y5)&&!this.
QZ)&&!this.Q0)&&(this.Y6===1))&&!this.Wk)&&!this.Uc)&&!this.Ud)&&!this.Y7)&&(this.
Wl===1));},ANU:function(Aia,Aid,Aib,Aie,AoV,AoW,Aic,Aif){var AzF=Aib-AoV;var AzH=
Aie-AoW;var AzG=Aic-AoV;var AzI=Aif-AoW;var ABj=((Aia-Aib)+AoV)-Aic;var ABk=((Aid-
Aie)+AoW)-Aif;var Ao9=(AzF*AzI)-(AzH*AzG);if(!Ao9)return null;this.QZ=((ABj*AzI)-(
ABk*AzG))/Ao9;this.Q0=((AzF*ABk)-(AzH*ABj))/Ao9;this.Y6=0;this.Wk=1;this.Wg=(Aib-
Aia)+(this.QZ*Aib);this.Wh=(Aic-Aia)+(this.Q0*Aic);this.Y2=0;this.Y3=Aia;this.Wi=(
Aie-Aid)+(this.QZ*Aie);this.Wj=(Aif-Aid)+(this.Q0*Aif);this.Y4=0;this.Y5=Aid;this.
Uc=0;this.Ud=0;this.Y7=0;this.Wl=1;this.AlR=false;return this;},BhG:function(L_){
if(!L_)return this;this.Wg=L_.Wg;this.Wh=L_.Wh;this.Y2=L_.Y2;this.Y3=L_.Y3;this.
Wi=L_.Wi;this.Wj=L_.Wj;this.Y4=L_.Y4;this.Y5=L_.Y5;this.QZ=L_.QZ;this.Q0=L_.Q0;this.
Y6=L_.Y6;this.Wk=L_.Wk;this.Uc=L_.Uc;this.Ud=L_.Ud;this.Y7=L_.Y7;this.Wl=L_.Wl;this.
AlR=L_.AlR;this.AgX=L_.AgX;return this;},A7T:function(){this.Wg=1;this.Wh=0;this.
Y2=0;this.Y3=0;this.Wi=0;this.Wj=1;this.Y4=0;this.Y5=0;this.QZ=0;this.Q0=0;this.
Y6=1;this.Wk=0;this.Uc=0;this.Ud=0;this.Y7=0;this.Wl=1;this.AlR=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax5;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7B={BdV:1,BdW:0,BdX:0,BdY:0,BdZ:1,Bd0:0,Bd1:0,Bd2:0,Bd3:1,P8:0,P7:0,A2L:false
,Afc:function(Fh){if(!this.A2L)return false;var A40=Fh[0];var A42=Fh[1];var BDd=((
A40*this.BdV)+(A42*this.BdW))+this.BdX;var BDe=((A40*this.BdY)+(A42*this.BdZ))+this.
Bd0;var A4a=((A40*this.Bd1)+(A42*this.Bd2))+this.Bd3;if(!!A4a){this.P7=BDd/A4a;this.
P8=BDe/A4a;return true;}return false;},ANU:function(Aia,Aid,Aib,Aie,AoV,AoW,Aic,
Aif){var AzF=Aib-AoV;var AzH=Aie-AoW;var AzG=Aic-AoV;var AzI=Aif-AoW;var ABj=((Aia-
Aib)+AoV)-Aic;var ABk=((Aid-Aie)+AoW)-Aif;var Ao9=(AzF*AzI)-(AzH*AzG);this.A2L=false;
if(!Ao9)return;var AiF=((ABj*AzI)-(ABk*AzG))/Ao9;var BI=((AzF*ABk)-(AzH*ABj))/Ao9;
var a=(Aib-Aia)+(AiF*Aib);var Rz=(Aic-Aia)+(BI*Aic);var B3=Aia;var d=(Aie-Aid)+(
AiF*Aie);var AJ4=(Aif-Aid)+(BI*Aif);var LM=Aid;this.BdV=AJ4-(LM*BI);this.BdW=(B3
*BI)-Rz;this.BdX=(Rz*LM)-(B3*AJ4);this.BdY=(LM*AiF)-d;this.BdZ=a-(B3*AiF);this.Bd0=(
B3*d)-(a*LM);this.Bd1=(d*BI)-(AJ4*AiF);this.Bd2=(Rz*AiF)-(a*BI);this.Bd3=(a*AJ4)-(
Rz*d);this.A2L=true;},_Init:function(aArg){this.__proto__=C.A7B;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5z={C6:A.wf,attrString:null,Le:function(){this.A6o(
);},A6o:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C6=Ce;},Aj6:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjG:function(
){return this.C6;},Bov:function(AoD,aString,aWidth,aEnableBidiText){this.A6o();var
attrSet=null;var handle=null;var s=Ce;if(!!AoD){AoD.Ajd();attrSet=AoD.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C6=s;},_Init:function(
aArg){this.__proto__=C.A5z;A.h7++;},_Done:function(){this.Le();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aij:null,AfV:null,Aii:null,Apk:A.abi(4,null,null),RB:A.abi(10,null,
null),A6R:null,A5M:null,attrSet:null,Azq:A.abi(10,0,{0:0xFF000000}),Le:function(
){this.AJ2();},Init:function(aArg){if(!!this.RB.Get(0)&&this.RB.Get(0).N2)A.zV([
this,this.AAO],this.RB.Get(0),0);},AJ2:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Ajd:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.Bjx();var noOfBitmaps=this.Bjw();var noOfFonts=
this.Bjy();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKx=this.Aii;var Adr=this.AfV;var AKy=this.Aij;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.Azq.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKx){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKx.KI.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKx=AKx.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RB.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adr){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adr.KI.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adr=Adr.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Apk.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKy){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKy.KI.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKy=AKy.Ah;
}},AAO:function(G){var handle=this.attrSet;var Adr=this.AfV;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RB.Get(inx)&&this.RB.Get(inx).N2){var bitmap=this.
RB.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adr){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adr.KI.Get(lnx)&&Adr.KI.Get(lnx).N2){var bitmap=Adr.KI.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adr=Adr.Ah;}A.we(this,1);},Bm3:function(E
){this.AUN(3,E);},A_l:function(E){this.AUN(1,E);},Aht:function(E){this.AUN(0,E);
},A9W:function(E){this.Bpk(0,E);},Bmq:function(E){this.AGK(3,E);},A90:function(E
){this.AGK(2,E);},A9Z:function(E){this.AGK(1,E);},Ahq:function(E){this.AGK(0,E);
},AUN:function(aFontNo,AfK){var Adm=aFontNo;var HX=false;if(Adm<0)return;if(Adm<
4){HX=this.Apk.Get(Adm)!==AfK;this.Apk.Set(Adm,AfK);}else{var Bz=this.Aij;Adm=Adm-
4;while(!!Bz&&(Adm>=20)){Bz=Bz.Ah;Adm=Adm-20;}if(!!Bz){HX=Bz.KI.Get(Adm)!==AfK;Bz.
KI.Set(Adm,AfK);}}if(HX&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfK)font=AfK.font;A.abG(handle,aFontNo,font);}if(HX)A.we(this,1);},Bpq:function(
Xp){var HX=false;if(Xp<4)Xp=4;if(Xp>256)Xp=256;Xp=Xp-4;if((Xp>0)&&!this.Aij){this.
Aij=A._NewObject(C.AB0,0);HX=true;}if(!Xp&&!!this.Aij){this.Aij=null;HX=true;}var
Bz=this.Aij;while(Xp>0){if((Xp>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB0,0);HX=true;
}Xp=Xp-20;if(Xp>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HX=true;}if(HX){this.AJ2(
);A.we(this,1);}},Bjy:function(){var CB=4;var Bz=this.Aij;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpk:function(aBitmapNo,aBitmap){var Qj=aBitmapNo;var HX=false;
if(Qj<0)return;if(Qj<10){HX=this.RB.Get(Qj)!==aBitmap;if(!!this.RB.Get(Qj)&&this.
RB.Get(Qj).N2)A.z9([this,this.AAO],this.RB.Get(Qj),0);this.RB.Set(Qj,aBitmap);if(
!!aBitmap&&aBitmap.N2)A.zV([this,this.AAO],aBitmap,0);}else{var Bz=this.AfV;Qj=Qj-
10;while(!!Bz&&(Qj>=20)){Bz=Bz.Ah;Qj=Qj-20;}if(!!Bz){HX=Bz.KI.Get(Qj)!==aBitmap;
if(!!Bz.KI.Get(Qj)&&Bz.KI.Get(Qj).N2)A.z9([this,this.AAO],Bz.KI.Get(Qj),0);Bz.KI.
Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.N2)A.zV([this,this.AAO],aBitmap,0);}}if(HX&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(HX)A.we(this,1);},Bpo:
function(Xn){var HX=false;if(Xn<10)Xn=10;if(Xn>256)Xn=256;Xn=Xn-10;if((Xn>0)&&!this.
AfV){this.AfV=A._NewObject(C.ABY,0);HX=true;}if(!Xn&&!!this.AfV){this.AfV=null;HX=
true;}var Bz=this.AfV;while(Xn>0){if((Xn>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABY,0
);HX=true;}Xn=Xn-20;if(Xn>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HX=true;}if(HX
){this.AJ2();A.we(this,1);}},Bjw:function(){var CB=10;var Bz=this.AfV;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGK:function(aColorNo,aColor){var Adb=aColorNo;
var HX=false;if(Adb<0)return;if(Adb<10){HX=this.Azq.Get(Adb)!==aColor;this.Azq.Set(
Adb,aColor);}else{var Bz=this.Aii;Adb=Adb-10;while(!!Bz&&(Adb>=20)){Bz=Bz.Ah;Adb=
Adb-20;}if(!!Bz){HX=Bz.KI.Get(Adb)!==aColor;Bz.KI.Set(Adb,aColor);}}if(HX&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(HX)A.we(this,
0);},Bpp:function(Xo){var HX=false;if(Xo<10)Xo=10;if(Xo>256)Xo=256;Xo=Xo-10;if((
Xo>0)&&!this.Aii){this.Aii=A._NewObject(C.ABZ,0);HX=true;}if(!Xo&&!!this.Aii){this.
Aii=null;HX=true;}var Bz=this.Aii;while(Xo>0){if((Xo>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.ABZ,0);HX=true;}Xo=Xo-20;if(Xo>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HX=true;
}if(HX){this.AJ2();A.we(this,1);}},Bjx:function(){var CB=10;var Bz=this.Aii;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Apk=[]).__proto__=
C.AttrSet.Apk;(this.RB=[]).__proto__=C.AttrSet.RB;(this.Azq=[]).__proto__=C.AttrSet.
Azq;this.__proto__=C.AttrSet;this.Apk.Set(0,A.aaL(A.aci.ACF));this.RB.Set(0,A.aaL(
A.aci.TR));this.A6R=A.aaL(A.aci.ACF);this.A5M=A.aaL(A.aci.TR);this.Init(aArg);A.
h7++;},_Done:function(){this.Le();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aij)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aii)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Apk,D);A.aa6(this.RB,D);if((B=this.A6R)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A5M)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AB0={Ah:null,KI:A.abi(20,null,null),_Init:function(aArg){(
this.KI=[]).__proto__=C.AB0.KI;this.__proto__=C.AB0;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KI,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.ABY={Ah:null,KI:A.abi(20,null,null),_Init:function(aArg){(this.KI=[]).__proto__=
C.ABY.KI;this.__proto__=C.ABY;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KI,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.ABZ={Ah:
null,KI:A.abi(20,0,null),_Init:function(aArg){(this.KI=[]).__proto__=C.ABZ.KI;this.
__proto__=C.ABZ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hz={path:null,Le:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},Adz:function(G){A.we(this,0);},Fl:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.Adz],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5b:function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VP:function(aSubPathNo){A.pe([this,this.Adz],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VH:function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jw:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AxB(1);A.pe([this,this.Adz],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bjz:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},AxB:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bjz()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.Adz],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hz;A.h7++;},_Done:function(){this.Le();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Ava={Left:0x1,ZS:0x2
,Right:0x4,A5N:0x8,BEP:0x10};C.BEv={BEj:0,BFn:1};C.BFv={BDE:0,BE$:1,Bo5:2};C.BFu={
BEx:0,BGe:1,Bo5:2,AxY:3};C.BDw={BDv:0,BF$:1,BFz:2,BFA:3,BFC:4,BFB:5};C.AMP={NR:360
,J1:0,Iq:0,Rd:0,Aje:function(G){var B;var FF=this.NR;var FU;if((FF>=360)||(FF<=-
360))FF=360;this.AxB(2);{var Az=Math.max(this.Iq,this.J1);FU=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FU*=4;if(FF<360)FU=((FF*FU)/360)|0;FU=Math.max(FU,-
FU,1);}if(((!FF||!this.Iq)||!this.J1)||(((((this.Rd===2)||(this.Rd===3))||(this.
Rd===4))||(this.Rd===5))&&((0>=this.Iq)||(0>=this.J1)))){this.Jw(0,0);this.Jw(1,
0);return;}if(FF===360){this.Jw(0,FU+1);this.Jw(1,0);this.Fl(0,0,0,this.Iq,this.
J1,0,360,FU);this.VP(0);return;}if(!this.Rd){this.Jw(0,FU+1);this.Jw(1,0);this.Fl(
0,0,0,this.Iq,this.J1,0,FF,FU);return;}if(this.Rd===1){this.Jw(0,FU+1);this.Jw(1
,0);this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU);this.VP(0);return;}if(this.Rd===2){this.
Jw(0,FU+1);this.Jw(1,0);this.VH(0,0,0);this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU);this.
VP(0);return;}if(this.Rd===4){var Os=this.Iq;var LJ=Math.sqrt(Os*Os);var Tr=((LJ
*0.25)|0)+3;this.Jw(0,(FU+Tr)+2);this.Jw(1,0);this.VH(0,0,0);if(FF>=0)this.Fl(0,
Os/2,0,LJ/2,LJ/2,180,360,Tr);else this.Fl(0,Os/2,0,LJ/2,LJ/2,180,0,Tr);this.Fl(0
,0,0,this.Iq,this.J1,0,FF,FU);this.VP(0);return;}if(this.Rd===5){var JG=FF;var Os=
this.Iq*Math.cos(JG*A.k$);var AiS=this.J1*Math.sin(JG*A.k$);var LJ=Math.sqrt((Os
*Os)+(AiS*AiS));var Tr=((LJ*0.25)|0)+3;this.Jw(0,(FU+Tr)+2);this.Jw(1,0);this.VH(
0,0,0);this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU);if(FF>=0)this.Fl(0,Os/2,AiS/2,LJ/2
,LJ/2,JG,JG+180,Tr);else this.Fl(0,Os/2,AiS/2,LJ/2,LJ/2,JG,JG-180,Tr);this.VP(0);
return;}if(this.Rd===3){var Ai$=this.Iq;var AdI=Math.sqrt(Ai$*Ai$);var JG=FF;var
Aiw=this.Iq*Math.cos(JG*A.k$);var Aix=this.J1*Math.sin(JG*A.k$);var Adh=Math.sqrt((
Aiw*Aiw)+(Aix*Aix));var ApF=((AdI*0.25)|0)+3;var ApE=((Adh*0.25)|0)+3;this.Jw(0,((
FU+ApF)+ApE)+10);this.Jw(1,0);this.VH(0,0,0);if(FF>=0){this.Fl(0,Ai$/2,0,AdI/2,AdI
/2,180,360,ApF);this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh
/2,Adh/2,JG,JG+180,ApE);}else{this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApF);this.Fl(0
,0,0,this.Iq,this.J1,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JG,JG-180,ApE);}
this.VP(0);return;}if(this.Rd===2){this.Jw(0,(FU*2)+1);this.Jw(1,0);this.Fl(0,0,
0,this.Iq,this.J1,0,FF,FU);this.Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);this.VP(0);return;
}if(this.Rd===4){var Os=this.Iq;var LJ=Math.sqrt(Os*Os);var Tr=((LJ*0.25)|0)+3;this.
Jw(0,((FU*2)+Tr)+2);this.Jw(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU
);this.Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);this.Fl(0,Os/2,0,LJ/2,LJ/2,180,360,Tr
);}else{this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU);this.Fl(0,0,0,0,0,this.NR,this.NR-
FF,FU);this.Fl(0,Os/2,0,LJ/2,LJ/2,180,0,Tr);}this.VP(0);return;}if(this.Rd===5){
var JG=FF;var sin=Math.sin(JG*A.k$);var cos=Math.cos(JG*A.k$);var Os=this.Iq*cos;
var AiS=this.J1*sin;var LJ=Math.sqrt((Os*Os)+(AiS*AiS));var Tr=((LJ*0.25)|0)+3;this.
Jw(0,((FU*2)+Tr)+2);this.Jw(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU
);this.Fl(0,Os/2,AiS/2,LJ/2,LJ/2,JG,JG+180,Tr);this.Fl(0,0,0,0,0,this.NR,this.NR-
FF,FU);}else{this.Fl(0,0,0,this.Iq,this.J1,0,FF,FU);this.Fl(0,Os/2,AiS/2,LJ/2,LJ
/2,JG,JG-180,Tr);this.Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);}this.VP(0);return;}if(
this.Rd===3){var JG=FF;var Bzy=Math.sin(JG*A.k$);var Bzt=Math.cos(JG*A.k$);var Ai$=
this.Iq;var Aiw=this.Iq*Bzt;var Aix=this.J1*Bzy;var AdI=Math.sqrt(Ai$*Ai$);var Adh=
Math.sqrt((Aiw*Aiw)+(Aix*Aix));var ApF=((AdI*0.25)|0)+3;var ApE=((Adh*0.25)|0)+3;
this.Jw(0,(((FU*2)+ApF)+ApE)+4);this.Jw(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.
J1,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JG,JG+180,ApE);this.Fl(0,0,0,0,0,this.
NR,this.NR-FF,FU);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,360,ApF);}else{this.Fl(0,0,0
,this.Iq,this.J1,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JG,JG-180,ApE);this.
Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApF);}this.
VP(0);return;}},BmF:function(E){if(E===this.NR)return;this.NR=E;if((this.Iq>0)&&(
this.J1>0))A.pe([this,this.Aje],this);},BnV:function(E){if((E===this.Iq)&&(E===this.
J1))return;this.Iq=E;this.J1=E;if(!!this.NR)A.pe([this,this.Aje],this);},Bn5:function(
E){if(E===this.Rd)return;this.Rd=E;if((!!this.NR&&(this.Iq>0))&&(this.J1>0))A.pe([
this,this.Aje],this);},_Init:function(aArg){C.Hz._Init.call(this,aArg);this.__proto__=
C.AMP;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMP.__proto__=C.Hz;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */