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
var Ce=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E6=[0,0,0,0];var Hr="No graphics engine bitmap attached to this canvas";var IU=
"The canvas is already initialized with a graphics engine bitmap";var Is="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O4="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P$=[1,1];var CQ=[2,2];var Ff="Missing matrices to interpolate";
C.Canvas={C0:null,AEy:null,QO:A.wg,Px:0,Azb:false,Lc:function(){if(this.Azb)this.
DetachBitmap();},Init:function(aArg){this.ON=true;},ArQ:function(E){if((E[0]<=0)||(
E[1]<=0))E=Ce;if(A.aaX(E,this.FrameSize))return;if(this.Azb)throw new Error(BD);
this.FrameSize=E;this.VB=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=1;}this.QO=[].concat(
Ce,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Px;for(this.Px=this.NoOfFrames-
1;this.Px>=0;this.Px--)this.Avm(this.QO,this.QO,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Px=dstFrameNr;}}if(!(((B=this.QO)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEy)?B[1].call(B[0],
this):null;this.QO=E6;}},DetachBitmap:function(){if(!this.Azb)throw new Error(Hr
);this.bitmap=null;this.Azb=false;this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=
1;this.VB=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IU);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azb=true;var noOfFrames=
1;var frameSize=Ce;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VB=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Biz:function(aClip,AoB,Bb1,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoB){AoB.Ajd();attrSet=AoB.attrSet;}if(
!!Bb1)attrString=Bb1.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Px;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6o:function(
aClip,AfK,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1c,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfK||!AfK.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1c===1)orient=90;else if(A1c===2)orient=180;else if(A1c===
3)orient=270;var dstFrameNo=this.Px;var dstBitmap=this.bitmap;var srcFont=AfK.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BiB:function(aClip
,aBitmap,aFrameNr,aDstRect,Att,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Att)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Px;var srcRect=[].concat(
Ce,aBitmap.FrameSize);var left=((Att&0x1)===0x1);var top=((Att&0x2)===0x2);var right=((
Att&0x4)===0x4);var bottom=((Att&0x8)===0x8);var interior=((Att&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hp:function(aClip
,AoL,aDstRect,aFlipY,aOffset,aWidth,Byi,Bxt,BxP,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoL||!AoL.path)return;var style=0;switch(Byi){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bxt){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BxP){
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
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bo1:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O4);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Px;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A50:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Px;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aeq:function(aClip,AoL,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bxx){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoL||!AoL.path)return;var nonZeroWinding=Bxx===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Px;var path=AoL.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BiC:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avm:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BiE:function(aClip,aDstPos1,aDstPos2,Byo,Byp,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agt=Byo;var Agu=Byp;var AdB=aDstPos1;
var AdC=aDstPos2;if(A.aaX(AdB,AdC))return;if(Agt<=1)Agt=1;if(Agu<=1)Agu=1;var AiD=
Agt/2;var AiE=Agu/2;var Apl=AdB[0];var Apm=AdB[1];var Apn=AdC[0];var Apo=AdC[1];
var J$=Apn-Apl;var Ka=Apo-Apm;var IY=Math.sqrt((J$*J$)+(Ka*Ka));if(((Agt>4096)||(
Agu>4096))||(IY>4096)){A.ab5("%s",P_);return;}J$=J$/IY;Ka=Ka/IY;var x1=Apl+(Ka*AiD
);var y1=Apm-(J$*AiD);var x2=Apn+(Ka*AiE);var y2=Apo-(J$*AiE);var x3=Apn-(Ka*AiE
);var y3=Apo+(J$*AiE);var x4=Apl-(Ka*AiD);var y4=Apm+(J$*AiD);var BfG=A.aaL(A.aci.
AsW);var srcRect=[].concat(P$,A.abe(BfG.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;var srcBitmap=BfG.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au9:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lc();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEy)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax3={We:1,Wf:0,Y0:0,Y1:
0,Wg:0,Wh:1,Y2:0,Y3:0,QZ:0,Q0:0,Y4:1,Wi:0,T_:0,T$:0,Y5:0,Wj:1,UR:0,P8:0,P7:0,AgX:
0,AlR:true,AB7:function(aX,aY){var Vr=((aX*this.QZ)+(aY*this.Q0))+this.Wi;var BY=((
aX*this.T_)+(aY*this.T$))+this.Wj;if(!!BY&&(BY!==1))Vr=Vr/BY;this.UR=Vr;return true;
},Afc:function(aX,aY){var AtS=this.AgX;if(AtS<0)return false;var Ep=((aX*this.We
)+(aY*this.Wf))+this.Y1;var Dh=((aX*this.Wg)+(aY*this.Wh))+this.Y3;var Vr=((aX*this.
QZ)+(aY*this.Q0))+this.Wi;var BY=((aX*this.T_)+(aY*this.T$))+this.Wj;var AAX=1;if(
!!BY&&(BY!==1)){Ep=Ep/BY;Dh=Dh/BY;Vr=Vr/BY;}if(AtS!==-Vr)AAX=1/(Vr+AtS);if(!!AtS
)AAX=AAX*AtS;this.P7=Ep*AAX;this.P8=Dh*AAX;this.UR=Vr+AtS;return true;},BjO:function(
Hb,O_,Qf){if(!Hb||!O_)throw new Error(Ff);this.We=Hb.We+((O_.We-Hb.We)*Qf);this.
Wf=Hb.Wf+((O_.Wf-Hb.Wf)*Qf);this.Y0=Hb.Y0+((O_.Y0-Hb.Y0)*Qf);this.Y1=Hb.Y1+((O_.
Y1-Hb.Y1)*Qf);this.Wg=Hb.Wg+((O_.Wg-Hb.Wg)*Qf);this.Wh=Hb.Wh+((O_.Wh-Hb.Wh)*Qf);
this.Y2=Hb.Y2+((O_.Y2-Hb.Y2)*Qf);this.Y3=Hb.Y3+((O_.Y3-Hb.Y3)*Qf);this.QZ=Hb.QZ+((
O_.QZ-Hb.QZ)*Qf);this.Q0=Hb.Q0+((O_.Q0-Hb.Q0)*Qf);this.Y4=Hb.Y4+((O_.Y4-Hb.Y4)*Qf
);this.Wi=Hb.Wi+((O_.Wi-Hb.Wi)*Qf);this.T_=Hb.T_+((O_.T_-Hb.T_)*Qf);this.T$=Hb.T$+((
O_.T$-Hb.T$)*Qf);this.Y5=Hb.Y5+((O_.Y5-Hb.Y5)*Qf);this.Wj=Hb.Wj+((O_.Wj-Hb.Wj)*Qf
);this.AgX=Hb.AgX+((O_.AgX-Hb.AgX)*Qf);this.AlR=false;return this;},Afi:function(
AJc,AJd,AJe){this.We=this.We*AJc;this.Wf=this.Wf*AJd;this.Y0=this.Y0*AJe;this.Wg=
this.Wg*AJc;this.Wh=this.Wh*AJd;this.Y2=this.Y2*AJe;this.QZ=this.QZ*AJc;this.Q0=
this.Q0*AJd;this.Y4=this.Y4*AJe;this.T_=this.T_*AJc;this.T$=this.T$*AJd;this.Y5=
this.Y5*AJe;this.AlR=false;return this;},Bqj:function(AI6,AI7,AI8){this.Y1=((this.
Y1+(this.We*AI6))+(this.Wf*AI7))+(this.Y0*AI8);this.Y3=((this.Y3+(this.Wg*AI6))+(
this.Wh*AI7))+(this.Y2*AI8);this.Wi=((this.Wi+(this.QZ*AI6))+(this.Q0*AI7))+(this.
Y4*AI8);this.Wj=((this.Wj+(this.T_*AI6))+(this.T$*AI7))+(this.Y5*AI8);this.AlR=false;
return this;},ADY:function(){return this.AlR||((((((((((((((((this.We===1)&&!this.
Wf)&&!this.Y0)&&!this.Y1)&&!this.Wg)&&(this.Wh===1))&&!this.Y2)&&!this.Y3)&&!this.
QZ)&&!this.Q0)&&(this.Y4===1))&&!this.Wi)&&!this.T_)&&!this.T$)&&!this.Y5)&&(this.
Wj===1));},ANS:function(Aia,Aid,Aib,Aie,AoT,AoU,Aic,Aif){var AzC=Aib-AoT;var AzE=
Aie-AoU;var AzD=Aic-AoT;var AzF=Aif-AoU;var ABf=((Aia-Aib)+AoT)-Aic;var ABg=((Aid-
Aie)+AoU)-Aif;var Ao7=(AzC*AzF)-(AzE*AzD);if(!Ao7)return null;this.QZ=((ABf*AzF)-(
ABg*AzD))/Ao7;this.Q0=((AzC*ABg)-(AzE*ABf))/Ao7;this.Y4=0;this.Wi=1;this.We=(Aib-
Aia)+(this.QZ*Aib);this.Wf=(Aic-Aia)+(this.Q0*Aic);this.Y0=0;this.Y1=Aia;this.Wg=(
Aie-Aid)+(this.QZ*Aie);this.Wh=(Aif-Aid)+(this.Q0*Aif);this.Y2=0;this.Y3=Aid;this.
T_=0;this.T$=0;this.Y5=0;this.Wj=1;this.AlR=false;return this;},Bhv:function(L8){
if(!L8)return this;this.We=L8.We;this.Wf=L8.Wf;this.Y0=L8.Y0;this.Y1=L8.Y1;this.
Wg=L8.Wg;this.Wh=L8.Wh;this.Y2=L8.Y2;this.Y3=L8.Y3;this.QZ=L8.QZ;this.Q0=L8.Q0;this.
Y4=L8.Y4;this.Wi=L8.Wi;this.T_=L8.T_;this.T$=L8.T$;this.Y5=L8.Y5;this.Wj=L8.Wj;this.
AlR=L8.AlR;this.AgX=L8.AgX;return this;},A7J:function(){this.We=1;this.Wf=0;this.
Y0=0;this.Y1=0;this.Wg=0;this.Wh=1;this.Y2=0;this.Y3=0;this.QZ=0;this.Q0=0;this.
Y4=1;this.Wi=0;this.T_=0;this.T$=0;this.Y5=0;this.Wj=1;this.AlR=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax3;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7r={BdL:1,BdM:0,BdN:0,BdO:0,BdP:1,BdQ:0,BdR:0,BdS:0,BdT:1,P8:0,P7:0,A2E:false
,Afc:function(Fh){if(!this.A2E)return false;var A4S=Fh[0];var A4U=Fh[1];var BDb=((
A4S*this.BdL)+(A4U*this.BdM))+this.BdN;var BDc=((A4S*this.BdO)+(A4U*this.BdP))+this.
BdQ;var A35=((A4S*this.BdR)+(A4U*this.BdS))+this.BdT;if(!!A35){this.P7=BDb/A35;this.
P8=BDc/A35;return true;}return false;},ANS:function(Aia,Aid,Aib,Aie,AoT,AoU,Aic,
Aif){var AzC=Aib-AoT;var AzE=Aie-AoU;var AzD=Aic-AoT;var AzF=Aif-AoU;var ABf=((Aia-
Aib)+AoT)-Aic;var ABg=((Aid-Aie)+AoU)-Aif;var Ao7=(AzC*AzF)-(AzE*AzD);this.A2E=false;
if(!Ao7)return;var AiF=((ABf*AzF)-(ABg*AzD))/Ao7;var BI=((AzC*ABg)-(AzE*ABf))/Ao7;
var a=(Aib-Aia)+(AiF*Aib);var Rz=(Aic-Aia)+(BI*Aic);var B3=Aia;var d=(Aie-Aid)+(
AiF*Aie);var AJ0=(Aif-Aid)+(BI*Aif);var LK=Aid;this.BdL=AJ0-(LK*BI);this.BdM=(B3
*BI)-Rz;this.BdN=(Rz*LK)-(B3*AJ0);this.BdO=(LK*AiF)-d;this.BdP=a-(B3*AiF);this.BdQ=(
B3*d)-(a*LK);this.BdR=(d*BI)-(AJ0*AiF);this.BdS=(Rz*AiF)-(a*BI);this.BdT=(a*AJ0)-(
Rz*d);this.A2E=true;},_Init:function(aArg){this.__proto__=C.A7r;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5r={C5:A.wf,attrString:null,Lc:function(){this.A6g(
);},A6g:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C5=Ce;},Aj6:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},Bjw:function(
){return this.C5;},Bom:function(AoB,aString,aWidth,aEnableBidiText){this.A6g();var
attrSet=null;var handle=null;var s=Ce;if(!!AoB){AoB.Ajd();attrSet=AoB.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C5=s;},_Init:function(
aArg){this.__proto__=C.A5r;A.h7++;},_Done:function(){this.Lc();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aij:null,AfV:null,Aii:null,Api:A.abi(4,null,null),Xr:A.abi(10,null,
null),A6I:null,A5E:null,attrSet:null,Azn:A.abi(10,0,{0:0xFF000000}),Lc:function(
){this.AJY();},AJY:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ajd:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.Bjn();var noOfBitmaps=this.Bjm();var noOfFonts=this.Bjo();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKt=this.Aii;var Adr=this.AfV;var AKu=this.Aij;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azn.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKt){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKt.KF.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKt=AKt.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xr.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adr){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adr.KF.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adr=Adr.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Api.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKu
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKu.KF.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKu=AKu.Ah;}},AKH:function(G){var handle=
this.attrSet;var Adr=this.AfV;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xr.Get(inx)&&this.Xr.Get(inx).ON){var bitmap=this.Xr.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adr){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adr.KF.Get(lnx)&&Adr.
KF.Get(lnx).ON){var bitmap=Adr.KF.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adr=Adr.Ah;}A.we(this,1);},BmU:function(E){this.AUL(3,E);},A_b:function(
E){this.AUL(1,E);},Aht:function(E){this.AUL(0,E);},A9M:function(E){this.Bpb(0,E);
},Bmh:function(E){this.AGG(3,E);},A9Q:function(E){this.AGG(2,E);},A9P:function(E
){this.AGG(1,E);},Ahq:function(E){this.AGG(0,E);},AUL:function(aFontNo,AfK){var Adm=
aFontNo;var HW=false;if(Adm<0)return;if(Adm<4){HW=this.Api.Get(Adm)!==AfK;this.Api.
Set(Adm,AfK);}else{var Bz=this.Aij;Adm=Adm-4;while(!!Bz&&(Adm>=20)){Bz=Bz.Ah;Adm=
Adm-20;}if(!!Bz){HW=Bz.KF.Get(Adm)!==AfK;Bz.KF.Set(Adm,AfK);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfK)font=AfK.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},Bph:function(Xm){var HW=false;if(Xm<4)Xm=4;if(Xm>256
)Xm=256;Xm=Xm-4;if((Xm>0)&&!this.Aij){this.Aij=A._NewObject(C.ABW,0);HW=true;}if(
!Xm&&!!this.Aij){this.Aij=null;HW=true;}var Bz=this.Aij;while(Xm>0){if((Xm>20)&&
!Bz.Ah){Bz.Ah=A._NewObject(C.ABW,0);HW=true;}Xm=Xm-20;if(Xm>0)Bz=Bz.Ah;}if(!!Bz&&
!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJY();A.we(this,1);}},Bjo:function(){var
CB=4;var Bz=this.Aij;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},Bpb:function(aBitmapNo
,aBitmap){var Qj=aBitmapNo;var HW=false;if(Qj<0)return;if(Qj<10){HW=this.Xr.Get(
Qj)!==aBitmap;if(!!this.Xr.Get(Qj)&&this.Xr.Get(Qj).ON)A.z9([this,this.AKH],this.
Xr.Get(Qj),0);this.Xr.Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.ON)A.zV([this,this.AKH
],aBitmap,0);}else{var Bz=this.AfV;Qj=Qj-10;while(!!Bz&&(Qj>=20)){Bz=Bz.Ah;Qj=Qj-
20;}if(!!Bz){HW=Bz.KF.Get(Qj)!==aBitmap;if(!!Bz.KF.Get(Qj)&&Bz.KF.Get(Qj).ON)A.z9([
this,this.AKH],Bz.KF.Get(Qj),0);Bz.KF.Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.ON)A.
zV([this,this.AKH],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},Bpf:function(Xk){var HW=false;if(Xk<10)Xk=10;if(Xk>
256)Xk=256;Xk=Xk-10;if((Xk>0)&&!this.AfV){this.AfV=A._NewObject(C.ABU,0);HW=true;
}if(!Xk&&!!this.AfV){this.AfV=null;HW=true;}var Bz=this.AfV;while(Xk>0){if((Xk>20
)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABU,0);HW=true;}Xk=Xk-20;if(Xk>0)Bz=Bz.Ah;}if(!!
Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJY();A.we(this,1);}},Bjm:function(
){var CB=10;var Bz=this.AfV;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},AGG:function(
aColorNo,aColor){var Adb=aColorNo;var HW=false;if(Adb<0)return;if(Adb<10){HW=this.
Azn.Get(Adb)!==aColor;this.Azn.Set(Adb,aColor);}else{var Bz=this.Aii;Adb=Adb-10;
while(!!Bz&&(Adb>=20)){Bz=Bz.Ah;Adb=Adb-20;}if(!!Bz){HW=Bz.KF.Get(Adb)!==aColor;
Bz.KF.Set(Adb,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},Bpg:function(Xl){var HW=false;if(Xl<10)Xl=
10;if(Xl>256)Xl=256;Xl=Xl-10;if((Xl>0)&&!this.Aii){this.Aii=A._NewObject(C.ABV,0
);HW=true;}if(!Xl&&!!this.Aii){this.Aii=null;HW=true;}var Bz=this.Aii;while(Xl>0
){if((Xl>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABV,0);HW=true;}Xl=Xl-20;if(Xl>0)Bz=Bz.
Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HW=true;}if(HW){this.AJY();A.we(this,1);}},Bjn:
function(){var CB=10;var Bz=this.Aii;while(!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},
_Init:function(aArg){(this.Api=[]).__proto__=C.AttrSet.Api;(this.Xr=[]).__proto__=
C.AttrSet.Xr;(this.Azn=[]).__proto__=C.AttrSet.Azn;this.__proto__=C.AttrSet;this.
Api.Set(0,A.aaL(A.aci.ACB));this.Xr.Set(0,A.aaL(A.aci.TN));this.A6I=A.aaL(A.aci.
ACB);this.A5E=A.aaL(A.aci.TN);A.h7++;},_Done:function(){this.Lc();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aij)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aii)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Api,D);A.aa6(this.Xr,D
);if((B=this.A6I)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5E)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABW={Ah:null,KF:A.abi(
20,null,null),_Init:function(aArg){(this.KF=[]).__proto__=C.ABW.KF;this.__proto__=
C.ABW;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KF,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABU={Ah:null,KF:A.abi(20,null,null),
_Init:function(aArg){(this.KF=[]).__proto__=C.ABU.KF;this.__proto__=C.ABU;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KF,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABV={Ah:null,KF:A.abi(20,0,null),_Init:function(aArg
){(this.KF=[]).__proto__=C.ABV.KF;this.__proto__=C.ABV;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hz={path:null,Lc:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adz:function(G){A.we(this,0);},Fl:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adz
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A45:
function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VO:function(aSubPathNo){A.
pe([this,this.Adz],this);var handle=this.path;A.jU(handle,aSubPathNo);},VG:function(
aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Ju:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axz(1);A.pe([this,this.Adz],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},Bjp:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axz:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.Bjp()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adz],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hz;A.h7++;},_Done:function(){
this.Lc();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Au_={Left:0x1,ZQ:0x2,Right:0x4,A5F:0x8,BEN:0x10
};C.BEt={BEh:0,BFl:1};C.BFt={BDC:0,BE9:1,BoW:2};C.BFs={BEv:0,BGc:1,BoW:2,AxW:3};
C.BDu={BDt:0,BF9:1,BFx:2,BFy:3,BFA:4,BFz:5};C.AMN={NQ:360,JY:0,Iq:0,Rd:0,Aje:function(
G){var B;var FF=this.NQ;var FU;if((FF>=360)||(FF<=-360))FF=360;this.Axz(2);{var Az=
Math.max(this.Iq,this.JY);FU=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FU*=
4;if(FF<360)FU=((FF*FU)/360)|0;FU=Math.max(FU,-FU,1);}if(((!FF||!this.Iq)||!this.
JY)||(((((this.Rd===2)||(this.Rd===3))||(this.Rd===4))||(this.Rd===5))&&((0>=this.
Iq)||(0>=this.JY)))){this.Ju(0,0);this.Ju(1,0);return;}if(FF===360){this.Ju(0,FU+
1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JY,0,360,FU);this.VO(0);return;}if(!this.
Rd){this.Ju(0,FU+1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);return;}
if(this.Rd===1){this.Ju(0,FU+1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JY,0,FF,
FU);this.VO(0);return;}if(this.Rd===2){this.Ju(0,FU+1);this.Ju(1,0);this.VG(0,0,
0);this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.VO(0);return;}if(this.Rd===4){var
Op=this.Iq;var LF=Math.sqrt(Op*Op);var Tn=((LF*0.25)|0)+3;this.Ju(0,(FU+Tn)+2);this.
Ju(1,0);this.VG(0,0,0);if(FF>=0)this.Fl(0,Op/2,0,LF/2,LF/2,180,360,Tn);else this.
Fl(0,Op/2,0,LF/2,LF/2,180,0,Tn);this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.VO(0
);return;}if(this.Rd===5){var JD=FF;var Op=this.Iq*Math.cos(JD*A.k$);var AiS=this.
JY*Math.sin(JD*A.k$);var LF=Math.sqrt((Op*Op)+(AiS*AiS));var Tn=((LF*0.25)|0)+3;
this.Ju(0,(FU+Tn)+2);this.Ju(1,0);this.VG(0,0,0);this.Fl(0,0,0,this.Iq,this.JY,0
,FF,FU);if(FF>=0)this.Fl(0,Op/2,AiS/2,LF/2,LF/2,JD,JD+180,Tn);else this.Fl(0,Op/
2,AiS/2,LF/2,LF/2,JD,JD-180,Tn);this.VO(0);return;}if(this.Rd===3){var Ai$=this.
Iq;var AdI=Math.sqrt(Ai$*Ai$);var JD=FF;var Aiw=this.Iq*Math.cos(JD*A.k$);var Aix=
this.JY*Math.sin(JD*A.k$);var Adh=Math.sqrt((Aiw*Aiw)+(Aix*Aix));var ApD=((AdI*0.25
)|0)+3;var ApC=((Adh*0.25)|0)+3;this.Ju(0,((FU+ApD)+ApC)+10);this.Ju(1,0);this.VG(
0,0,0);if(FF>=0){this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,360,ApD);this.Fl(0,0,0,this.Iq
,this.JY,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JD,JD+180,ApC);}else{this.Fl(
0,Ai$/2,0,AdI/2,AdI/2,180,0,ApD);this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.Fl(
0,Aiw/2,Aix/2,Adh/2,Adh/2,JD,JD-180,ApC);}this.VO(0);return;}if(this.Rd===2){this.
Ju(0,(FU*2)+1);this.Ju(1,0);this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.Fl(0,0,0
,0,0,this.NQ,this.NQ-FF,FU);this.VO(0);return;}if(this.Rd===4){var Op=this.Iq;var
LF=Math.sqrt(Op*Op);var Tn=((LF*0.25)|0)+3;this.Ju(0,((FU*2)+Tn)+2);this.Ju(1,0);
if(FF>=0){this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.Fl(0,0,0,0,0,this.NQ,this.
NQ-FF,FU);this.Fl(0,Op/2,0,LF/2,LF/2,180,360,Tn);}else{this.Fl(0,0,0,this.Iq,this.
JY,0,FF,FU);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);this.Fl(0,Op/2,0,LF/2,LF/2,
180,0,Tn);}this.VO(0);return;}if(this.Rd===5){var JD=FF;var sin=Math.sin(JD*A.k$
);var cos=Math.cos(JD*A.k$);var Op=this.Iq*cos;var AiS=this.JY*sin;var LF=Math.sqrt((
Op*Op)+(AiS*AiS));var Tn=((LF*0.25)|0)+3;this.Ju(0,((FU*2)+Tn)+2);this.Ju(1,0);if(
FF>=0){this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.Fl(0,Op/2,AiS/2,LF/2,LF/2,JD,
JD+180,Tn);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);}else{this.Fl(0,0,0,this.Iq,
this.JY,0,FF,FU);this.Fl(0,Op/2,AiS/2,LF/2,LF/2,JD,JD-180,Tn);this.Fl(0,0,0,0,0,
this.NQ,this.NQ-FF,FU);}this.VO(0);return;}if(this.Rd===3){var JD=FF;var Bzw=Math.
sin(JD*A.k$);var Bzr=Math.cos(JD*A.k$);var Ai$=this.Iq;var Aiw=this.Iq*Bzr;var Aix=
this.JY*Bzw;var AdI=Math.sqrt(Ai$*Ai$);var Adh=Math.sqrt((Aiw*Aiw)+(Aix*Aix));var
ApD=((AdI*0.25)|0)+3;var ApC=((Adh*0.25)|0)+3;this.Ju(0,(((FU*2)+ApD)+ApC)+4);this.
Ju(1,0);if(FF>=0){this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh
/2,Adh/2,JD,JD+180,ApC);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU);this.Fl(0,Ai$/2
,0,AdI/2,AdI/2,180,360,ApD);}else{this.Fl(0,0,0,this.Iq,this.JY,0,FF,FU);this.Fl(
0,Aiw/2,Aix/2,Adh/2,Adh/2,JD,JD-180,ApC);this.Fl(0,0,0,0,0,this.NQ,this.NQ-FF,FU
);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApD);}this.VO(0);return;}},Bmw:function(E){
if(E===this.NQ)return;this.NQ=E;if((this.Iq>0)&&(this.JY>0))A.pe([this,this.Aje]
,this);},BnM:function(E){if((E===this.Iq)&&(E===this.JY))return;this.Iq=E;this.JY=
E;if(!!this.NQ)A.pe([this,this.Aje],this);},BnW:function(E){if(E===this.Rd)return;
this.Rd=E;if((!!this.NQ&&(this.Iq>0))&&(this.JY>0))A.pe([this,this.Aje],this);},
_Init:function(aArg){C.Hz._Init.call(this,aArg);this.__proto__=C.AMN;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMN.__proto__=C.Hz;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */