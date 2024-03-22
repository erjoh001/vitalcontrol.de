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
var E7=[0,0,0,0];var Hp="No graphics engine bitmap attached to this canvas";var IS=
"The canvas is already initialized with a graphics engine bitmap";var Ir="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O1="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P3="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P4=[1,1];var CQ=[2,2];var Fe="Missing matrices to interpolate";
C.Canvas={C1:null,AEp:null,QK:A.wg,Ps:0,Ay6:false,Lb:function(){if(this.Ay6)this.
DetachBitmap();},Init:function(aArg){this.OK=true;},ArT:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cc;if(A.aaX(E,this.FrameSize))return;if(this.Ay6)throw new Error(BF);
this.FrameSize=E;this.VA=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=1;}this.QK=[].concat(
Cc,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Ps;for(this.Ps=this.NoOfFrames-
1;this.Ps>=0;this.Ps--)this.Avd(this.QK,this.QK,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ps=dstFrameNr;}}if(!(((B=this.QK)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEp)?B[1].call(B[0],
this):null;this.QK=E7;}},DetachBitmap:function(){if(!this.Ay6)throw new Error(Hp
);this.bitmap=null;this.Ay6=false;this.FrameSize=Cc;this.FrameDelay=0;this.NoOfFrames=
1;this.VA=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IS);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay6=true;var noOfFrames=
1;var frameSize=Cc;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VA=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhS:function(aClip,AoF,Bbr,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoF){AoF.Ajg();attrSet=AoF.attrSet;}if(
!!Bbr)attrString=Bbr.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Ps;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A53:function(
aClip,AfI,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0Q,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfI||!AfI.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0Q===1)orient=90;else if(A0Q===2)orient=180;else if(A0Q===
3)orient=270;var dstFrameNo=this.Ps;var dstBitmap=this.bitmap;var srcFont=AfI.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhU:function(aClip
,aBitmap,aFrameNr,aDstRect,Atn,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atn)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Ps;var srcRect=[].concat(
Cc,aBitmap.FrameSize);var left=((Atn&0x1)===0x1);var top=((Atn&0x2)===0x2);var right=((
Atn&0x4)===0x4);var bottom=((Atn&0x8)===0x8);var interior=((Atn&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hn:function(aClip
,AoO,aDstRect,aFlipY,aOffset,aWidth,Bxw,BwG,Bw2,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoO||!AoO.path)return;var style=0;switch(Bxw){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BwG){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bw2){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Ps;var path=AoO.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhT:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
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
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bob:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O1);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Ps;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5x:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Ps;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aeo:function(aClip,AoO,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BwK){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoO||!AoO.path)return;var nonZeroWinding=BwK===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Ps;var path=AoO.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhV:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Ps;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avd:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Ps;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BhX:function(aClip,aDstPos1,aDstPos2,BxC,BxD,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agq=BxC;var Agr=BxD;var Ady=aDstPos1;
var Adz=aDstPos2;if(A.aaX(Ady,Adz))return;if(Agq<=1)Agq=1;if(Agr<=1)Agr=1;var AiF=
Agq/2;var AiG=Agr/2;var Apn=Ady[0];var Apo=Ady[1];var App=Adz[0];var Apq=Adz[1];
var J7=App-Apn;var J8=Apq-Apo;var IW=Math.sqrt((J7*J7)+(J8*J8));if(((Agq>4096)||(
Agr>4096))||(IW>4096)){A.ab5("%s",P3);return;}J7=J7/IW;J8=J8/IW;var x1=Apn+(J8*AiF
);var y1=Apo-(J7*AiF);var x2=App+(J8*AiG);var y2=Apq-(J7*AiG);var x3=App-(J8*AiG
);var y3=Apq+(J7*AiG);var x4=Apn-(J8*AiF);var y4=Apo+(J7*AiF);var Be6=A.aaL(A.aci.
AsW);var srcRect=[].concat(P4,A.abe(Be6.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Ps;var srcBitmap=Be6.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au1:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Ps;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEp)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxY={We:1,Wf:0,Y5:0,Y6:
0,Wg:0,Wh:1,Y7:0,Y8:0,QV:0,QW:0,Y9:1,Wi:0,T9:0,T_:0,Y_:0,Wj:1,UR:0,P1:0,P0:0,AgU:
0,AlS:true,AB0:function(aX,aY){var Vq=((aX*this.QV)+(aY*this.QW))+this.Wi;var BY=((
aX*this.T9)+(aY*this.T_))+this.Wj;if(!!BY&&(BY!==1))Vq=Vq/BY;this.UR=Vq;return true;
},Afa:function(aX,aY){var AtL=this.AgU;if(AtL<0)return false;var Eo=((aX*this.We
)+(aY*this.Wf))+this.Y6;var Dg=((aX*this.Wg)+(aY*this.Wh))+this.Y8;var Vq=((aX*this.
QV)+(aY*this.QW))+this.Wi;var BY=((aX*this.T9)+(aY*this.T_))+this.Wj;var AAS=1;if(
!!BY&&(BY!==1)){Eo=Eo/BY;Dg=Dg/BY;Vq=Vq/BY;}if(AtL!==-Vq)AAS=1/(Vq+AtL);if(!!AtL
)AAS=AAS*AtL;this.P0=Eo*AAS;this.P1=Dg*AAS;this.UR=Vq+AtL;return true;},Bi7:function(
G$,O6,P$){if(!G$||!O6)throw new Error(Fe);this.We=G$.We+((O6.We-G$.We)*P$);this.
Wf=G$.Wf+((O6.Wf-G$.Wf)*P$);this.Y5=G$.Y5+((O6.Y5-G$.Y5)*P$);this.Y6=G$.Y6+((O6.
Y6-G$.Y6)*P$);this.Wg=G$.Wg+((O6.Wg-G$.Wg)*P$);this.Wh=G$.Wh+((O6.Wh-G$.Wh)*P$);
this.Y7=G$.Y7+((O6.Y7-G$.Y7)*P$);this.Y8=G$.Y8+((O6.Y8-G$.Y8)*P$);this.QV=G$.QV+((
O6.QV-G$.QV)*P$);this.QW=G$.QW+((O6.QW-G$.QW)*P$);this.Y9=G$.Y9+((O6.Y9-G$.Y9)*P$
);this.Wi=G$.Wi+((O6.Wi-G$.Wi)*P$);this.T9=G$.T9+((O6.T9-G$.T9)*P$);this.T_=G$.T_+((
O6.T_-G$.T_)*P$);this.Y_=G$.Y_+((O6.Y_-G$.Y_)*P$);this.Wj=G$.Wj+((O6.Wj-G$.Wj)*P$
);this.AgU=G$.AgU+((O6.AgU-G$.AgU)*P$);this.AlS=false;return this;},Afg:function(
AI8,AI9,AI_){this.We=this.We*AI8;this.Wf=this.Wf*AI9;this.Y5=this.Y5*AI_;this.Wg=
this.Wg*AI8;this.Wh=this.Wh*AI9;this.Y7=this.Y7*AI_;this.QV=this.QV*AI8;this.QW=
this.QW*AI9;this.Y9=this.Y9*AI_;this.T9=this.T9*AI8;this.T_=this.T_*AI9;this.Y_=
this.Y_*AI_;this.AlS=false;return this;},Bpu:function(AI0,AI1,AI2){this.Y6=((this.
Y6+(this.We*AI0))+(this.Wf*AI1))+(this.Y5*AI2);this.Y8=((this.Y8+(this.Wg*AI0))+(
this.Wh*AI1))+(this.Y7*AI2);this.Wi=((this.Wi+(this.QV*AI0))+(this.QW*AI1))+(this.
Y9*AI2);this.Wj=((this.Wj+(this.T9*AI0))+(this.T_*AI1))+(this.Y_*AI2);this.AlS=false;
return this;},ADQ:function(){return this.AlS||((((((((((((((((this.We===1)&&!this.
Wf)&&!this.Y5)&&!this.Y6)&&!this.Wg)&&(this.Wh===1))&&!this.Y7)&&!this.Y8)&&!this.
QV)&&!this.QW)&&(this.Y9===1))&&!this.Wi)&&!this.T9)&&!this.T_)&&!this.Y_)&&(this.
Wj===1));},ANI:function(Aib,Aie,Aic,Aif,AoW,AoX,Aid,Aig){var Azw=Aic-AoW;var Azy=
Aif-AoX;var Azx=Aid-AoW;var Azz=Aig-AoX;var ABa=((Aib-Aic)+AoW)-Aid;var ABb=((Aie-
Aif)+AoX)-Aig;var Ao_=(Azw*Azz)-(Azy*Azx);if(!Ao_)return null;this.QV=((ABa*Azz)-(
ABb*Azx))/Ao_;this.QW=((Azw*ABb)-(Azy*ABa))/Ao_;this.Y9=0;this.Wi=1;this.We=(Aic-
Aib)+(this.QV*Aic);this.Wf=(Aid-Aib)+(this.QW*Aid);this.Y5=0;this.Y6=Aib;this.Wg=(
Aif-Aie)+(this.QV*Aif);this.Wh=(Aig-Aie)+(this.QW*Aig);this.Y7=0;this.Y8=Aie;this.
T9=0;this.T_=0;this.Y_=0;this.Wj=1;this.AlS=false;return this;},BgW:function(L6){
if(!L6)return this;this.We=L6.We;this.Wf=L6.Wf;this.Y5=L6.Y5;this.Y6=L6.Y6;this.
Wg=L6.Wg;this.Wh=L6.Wh;this.Y7=L6.Y7;this.Y8=L6.Y8;this.QV=L6.QV;this.QW=L6.QW;this.
Y9=L6.Y9;this.Wi=L6.Wi;this.T9=L6.T9;this.T_=L6.T_;this.Y_=L6.Y_;this.Wj=L6.Wj;this.
AlS=L6.AlS;this.AgU=L6.AgU;return this;},A7m:function(){this.We=1;this.Wf=0;this.
Y5=0;this.Y6=0;this.Wg=0;this.Wh=1;this.Y7=0;this.Y8=0;this.QV=0;this.QW=0;this.
Y9=1;this.Wi=0;this.T9=0;this.T_=0;this.Y_=0;this.Wj=1;this.AlS=true;return this;
},_Init:function(aArg){this.__proto__=C.AxY;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A66={Bc_:1,Bc$:0,Bda:0,Bdb:0,Bdc:1,Bdd:0,Bde:0,Bdf:0,Bdg:1,P1:0,P0:0,A2f:false
,Afa:function(Fg){if(!this.A2f)return false;var A4p=Fg[0];var A4r=Fg[1];var BCo=((
A4p*this.Bc_)+(A4r*this.Bc$))+this.Bda;var BCp=((A4p*this.Bdb)+(A4r*this.Bdc))+this.
Bdd;var A3E=((A4p*this.Bde)+(A4r*this.Bdf))+this.Bdg;if(!!A3E){this.P0=BCo/A3E;this.
P1=BCp/A3E;return true;}return false;},ANI:function(Aib,Aie,Aic,Aif,AoW,AoX,Aid,
Aig){var Azw=Aic-AoW;var Azy=Aif-AoX;var Azx=Aid-AoW;var Azz=Aig-AoX;var ABa=((Aib-
Aic)+AoW)-Aid;var ABb=((Aie-Aif)+AoX)-Aig;var Ao_=(Azw*Azz)-(Azy*Azx);this.A2f=false;
if(!Ao_)return;var AiH=((ABa*Azz)-(ABb*Azx))/Ao_;var BK=((Azw*ABb)-(Azy*ABa))/Ao_;
var a=(Aic-Aib)+(AiH*Aic);var Ry=(Aid-Aib)+(BK*Aid);var B3=Aib;var d=(Aif-Aie)+(
AiH*Aif);var AJT=(Aig-Aie)+(BK*Aig);var LK=Aie;this.Bc_=AJT-(LK*BK);this.Bc$=(B3
*BK)-Ry;this.Bda=(Ry*LK)-(B3*AJT);this.Bdb=(LK*AiH)-d;this.Bdc=a-(B3*AiH);this.Bdd=(
B3*d)-(a*LK);this.Bde=(d*BK)-(AJT*AiH);this.Bdf=(Ry*AiH)-(a*BK);this.Bdg=(a*AJT)-(
Ry*d);this.A2f=true;},_Init:function(aArg){this.__proto__=C.A66;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A40={C3:A.wf,attrString:null,Lb:function(){this.A5P(
);},A5P:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C3=Cc;},Aj9:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiP:function(
){return this.C3;},BnA:function(AoF,aString,aWidth,aEnableBidiText){this.A5P();var
attrSet=null;var handle=null;var s=Cc;if(!!AoF){AoF.Ajg();attrSet=AoF.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C3=s;},_Init:function(
aArg){this.__proto__=C.A40;A.h7++;},_Done:function(){this.Lb();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aik:null,AfT:null,Aij:null,Apl:A.abi(4,null,null),Xs:A.abi(10,null,
null),A6l:null,A5b:null,attrSet:null,Azg:A.abi(10,0,{0:0xFF000000}),Lb:function(
){this.AJR();},AJR:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ajg:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiG();var noOfBitmaps=this.BiF();var noOfFonts=this.BiH();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKm=this.Aij;var Adp=this.AfT;var AKn=this.Aik;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azg.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKm){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKm.KD.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKm=AKm.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xs.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adp){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adp.KD.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adp=Adp.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Apl.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKn
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKn.KD.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKn=AKn.Ah;}},AKz:function(G){var handle=
this.attrSet;var Adp=this.AfT;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xs.Get(inx)&&this.Xs.Get(inx).OK){var bitmap=this.Xs.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adp){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adp.KD.Get(lnx)&&Adp.
KD.Get(lnx).OK){var bitmap=Adp.KD.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adp=Adp.Ah;}A.we(this,1);},Bl9:function(E){this.AUp(3,E);},A9N:function(
E){this.AUp(1,E);},Ahp:function(E){this.AUp(0,E);},A9n:function(E){this.Bol(0,E);
},Blv:function(E){this.AGx(3,E);},A9r:function(E){this.AGx(2,E);},A9q:function(E
){this.AGx(1,E);},Ahm:function(E){this.AGx(0,E);},AUp:function(aFontNo,AfI){var Adk=
aFontNo;var HY=false;if(Adk<0)return;if(Adk<4){HY=this.Apl.Get(Adk)!==AfI;this.Apl.
Set(Adk,AfI);}else{var BC=this.Aik;Adk=Adk-4;while(!!BC&&(Adk>=20)){BC=BC.Ah;Adk=
Adk-20;}if(!!BC){HY=BC.KD.Get(Adk)!==AfI;BC.KD.Set(Adk,AfI);}}if(HY&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfI)font=AfI.font;A.abG(handle,aFontNo
,font);}if(HY)A.we(this,1);},Bor:function(Xn){var HY=false;if(Xn<4)Xn=4;if(Xn>256
)Xn=256;Xn=Xn-4;if((Xn>0)&&!this.Aik){this.Aik=A._NewObject(C.ABP,0);HY=true;}if(
!Xn&&!!this.Aik){this.Aik=null;HY=true;}var BC=this.Aik;while(Xn>0){if((Xn>20)&&
!BC.Ah){BC.Ah=A._NewObject(C.ABP,0);HY=true;}Xn=Xn-20;if(Xn>0)BC=BC.Ah;}if(!!BC&&
!!BC.Ah){BC.Ah=null;HY=true;}if(HY){this.AJR();A.we(this,1);}},BiH:function(){var
CB=4;var BC=this.Aik;while(!!BC){CB=CB+20;BC=BC.Ah;}return CB;},Bol:function(aBitmapNo
,aBitmap){var Qd=aBitmapNo;var HY=false;if(Qd<0)return;if(Qd<10){HY=this.Xs.Get(
Qd)!==aBitmap;if(!!this.Xs.Get(Qd)&&this.Xs.Get(Qd).OK)A.z9([this,this.AKz],this.
Xs.Get(Qd),0);this.Xs.Set(Qd,aBitmap);if(!!aBitmap&&aBitmap.OK)A.zV([this,this.AKz
],aBitmap,0);}else{var BC=this.AfT;Qd=Qd-10;while(!!BC&&(Qd>=20)){BC=BC.Ah;Qd=Qd-
20;}if(!!BC){HY=BC.KD.Get(Qd)!==aBitmap;if(!!BC.KD.Get(Qd)&&BC.KD.Get(Qd).OK)A.z9([
this,this.AKz],BC.KD.Get(Qd),0);BC.KD.Set(Qd,aBitmap);if(!!aBitmap&&aBitmap.OK)A.
zV([this,this.AKz],aBitmap,0);}}if(HY&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HY)A.we(this,1);},Bop:function(Xl){var HY=false;if(Xl<10)Xl=10;if(Xl>
256)Xl=256;Xl=Xl-10;if((Xl>0)&&!this.AfT){this.AfT=A._NewObject(C.ABN,0);HY=true;
}if(!Xl&&!!this.AfT){this.AfT=null;HY=true;}var BC=this.AfT;while(Xl>0){if((Xl>20
)&&!BC.Ah){BC.Ah=A._NewObject(C.ABN,0);HY=true;}Xl=Xl-20;if(Xl>0)BC=BC.Ah;}if(!!
BC&&!!BC.Ah){BC.Ah=null;HY=true;}if(HY){this.AJR();A.we(this,1);}},BiF:function(
){var CB=10;var BC=this.AfT;while(!!BC){CB=CB+20;BC=BC.Ah;}return CB;},AGx:function(
aColorNo,aColor){var Ada=aColorNo;var HY=false;if(Ada<0)return;if(Ada<10){HY=this.
Azg.Get(Ada)!==aColor;this.Azg.Set(Ada,aColor);}else{var BC=this.Aij;Ada=Ada-10;
while(!!BC&&(Ada>=20)){BC=BC.Ah;Ada=Ada-20;}if(!!BC){HY=BC.KD.Get(Ada)!==aColor;
BC.KD.Set(Ada,aColor);}}if(HY&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HY)A.we(this,0);},Boq:function(Xm){var HY=false;if(Xm<10)Xm=
10;if(Xm>256)Xm=256;Xm=Xm-10;if((Xm>0)&&!this.Aij){this.Aij=A._NewObject(C.ABO,0
);HY=true;}if(!Xm&&!!this.Aij){this.Aij=null;HY=true;}var BC=this.Aij;while(Xm>0
){if((Xm>20)&&!BC.Ah){BC.Ah=A._NewObject(C.ABO,0);HY=true;}Xm=Xm-20;if(Xm>0)BC=BC.
Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HY=true;}if(HY){this.AJR();A.we(this,1);}},BiG:
function(){var CB=10;var BC=this.Aij;while(!!BC){CB=CB+20;BC=BC.Ah;}return CB;},
_Init:function(aArg){(this.Apl=[]).__proto__=C.AttrSet.Apl;(this.Xs=[]).__proto__=
C.AttrSet.Xs;(this.Azg=[]).__proto__=C.AttrSet.Azg;this.__proto__=C.AttrSet;this.
Apl.Set(0,A.aaL(A.aci.ACu));this.Xs.Set(0,A.aaL(A.aci.TM));this.A6l=A.aaL(A.aci.
ACu);this.A5b=A.aaL(A.aci.TM);A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aik)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aij)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Apl,D);A.aa6(this.Xs,D
);if((B=this.A6l)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A5b)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABP={Ah:null,KD:A.abi(
20,null,null),_Init:function(aArg){(this.KD=[]).__proto__=C.ABP.KD;this.__proto__=
C.ABP;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KD,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABN={Ah:null,KD:A.abi(20,null,null),
_Init:function(aArg){(this.KD=[]).__proto__=C.ABN.KD;this.__proto__=C.ABN;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KD,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABO={Ah:null,KD:A.abi(20,0,null),_Init:function(aArg
){(this.KD=[]).__proto__=C.ABO.KD;this.__proto__=C.ABO;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hz={path:null,Lb:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adw:function(G){A.we(this,0);},Fk:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adw
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4C:
function(aSubPathNo,aX,aY){A.pe([this,this.Adw],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VN:function(aSubPathNo){A.
pe([this,this.Adw],this);var handle=this.path;A.jU(handle,aSubPathNo);},VF:function(
aSubPathNo,aX,aY){A.pe([this,this.Adw],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Js:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axu(1);A.pe([this,this.Adw],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BiI:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axu:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BiI()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adw],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hz;A.h7++;},_Done:function(){
this.Lb();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Au2={Left:0x1,ZV:0x2,Right:0x4,A5c:0x8,BD4:0x10
};C.BDG={BDu:0,BEC:1};C.BEK={BCP:0,BEo:1,Bn8:2};C.BEJ={BDI:0,BFs:1,Bn8:2,AxR:3};
C.BCH={BCG:0,BFn:1,BEO:2,BEP:3,BER:4,BEQ:5};C.AME={NL:360,JU:0,Ip:0,Rb:0,Ajh:function(
G){var B;var FC=this.NL;var FU;if((FC>=360)||(FC<=-360))FC=360;this.Axu(2);{var Az=
Math.max(this.Ip,this.JU);FU=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FU*=
4;if(FC<360)FU=((FC*FU)/360)|0;FU=Math.max(FU,-FU,1);}if(((!FC||!this.Ip)||!this.
JU)||(((((this.Rb===2)||(this.Rb===3))||(this.Rb===4))||(this.Rb===5))&&((0>=this.
Ip)||(0>=this.JU)))){this.Js(0,0);this.Js(1,0);return;}if(FC===360){this.Js(0,FU+
1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,360,FU);this.VN(0);return;}if(!this.
Rb){this.Js(0,FU+1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);return;}
if(this.Rb===1){this.Js(0,FU+1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,
FU);this.VN(0);return;}if(this.Rb===2){this.Js(0,FU+1);this.Js(1,0);this.VF(0,0,
0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.VN(0);return;}if(this.Rb===4){var
On=this.Ip;var LF=Math.sqrt(On*On);var Tm=((LF*0.25)|0)+3;this.Js(0,(FU+Tm)+2);this.
Js(1,0);this.VF(0,0,0);if(FC>=0)this.Fk(0,On/2,0,LF/2,LF/2,180,360,Tm);else this.
Fk(0,On/2,0,LF/2,LF/2,180,0,Tm);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.VN(0
);return;}if(this.Rb===5){var JA=FC;var On=this.Ip*Math.cos(JA*A.k$);var AiV=this.
JU*Math.sin(JA*A.k$);var LF=Math.sqrt((On*On)+(AiV*AiV));var Tm=((LF*0.25)|0)+3;
this.Js(0,(FU+Tm)+2);this.Js(1,0);this.VF(0,0,0);this.Fk(0,0,0,this.Ip,this.JU,0
,FC,FU);if(FC>=0)this.Fk(0,On/2,AiV/2,LF/2,LF/2,JA,JA+180,Tm);else this.Fk(0,On/
2,AiV/2,LF/2,LF/2,JA,JA-180,Tm);this.VN(0);return;}if(this.Rb===3){var Ajc=this.
Ip;var AdG=Math.sqrt(Ajc*Ajc);var JA=FC;var Aix=this.Ip*Math.cos(JA*A.k$);var Aiy=
this.JU*Math.sin(JA*A.k$);var Adf=Math.sqrt((Aix*Aix)+(Aiy*Aiy));var ApF=((AdG*0.25
)|0)+3;var ApE=((Adf*0.25)|0)+3;this.Js(0,((FU+ApF)+ApE)+10);this.Js(1,0);this.VF(
0,0,0);if(FC>=0){this.Fk(0,Ajc/2,0,AdG/2,AdG/2,180,360,ApF);this.Fk(0,0,0,this.Ip
,this.JU,0,FC,FU);this.Fk(0,Aix/2,Aiy/2,Adf/2,Adf/2,JA,JA+180,ApE);}else{this.Fk(
0,Ajc/2,0,AdG/2,AdG/2,180,0,ApF);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.Fk(
0,Aix/2,Aiy/2,Adf/2,Adf/2,JA,JA-180,ApE);}this.VN(0);return;}if(this.Rb===2){this.
Js(0,(FU*2)+1);this.Js(1,0);this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.Fk(0,0,0
,0,0,this.NL,this.NL-FC,FU);this.VN(0);return;}if(this.Rb===4){var On=this.Ip;var
LF=Math.sqrt(On*On);var Tm=((LF*0.25)|0)+3;this.Js(0,((FU*2)+Tm)+2);this.Js(1,0);
if(FC>=0){this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.Fk(0,0,0,0,0,this.NL,this.
NL-FC,FU);this.Fk(0,On/2,0,LF/2,LF/2,180,360,Tm);}else{this.Fk(0,0,0,this.Ip,this.
JU,0,FC,FU);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FU);this.Fk(0,On/2,0,LF/2,LF/2,
180,0,Tm);}this.VN(0);return;}if(this.Rb===5){var JA=FC;var sin=Math.sin(JA*A.k$
);var cos=Math.cos(JA*A.k$);var On=this.Ip*cos;var AiV=this.JU*sin;var LF=Math.sqrt((
On*On)+(AiV*AiV));var Tm=((LF*0.25)|0)+3;this.Js(0,((FU*2)+Tm)+2);this.Js(1,0);if(
FC>=0){this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.Fk(0,On/2,AiV/2,LF/2,LF/2,JA,
JA+180,Tm);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FU);}else{this.Fk(0,0,0,this.Ip,
this.JU,0,FC,FU);this.Fk(0,On/2,AiV/2,LF/2,LF/2,JA,JA-180,Tm);this.Fk(0,0,0,0,0,
this.NL,this.NL-FC,FU);}this.VN(0);return;}if(this.Rb===3){var JA=FC;var ByL=Math.
sin(JA*A.k$);var ByG=Math.cos(JA*A.k$);var Ajc=this.Ip;var Aix=this.Ip*ByG;var Aiy=
this.JU*ByL;var AdG=Math.sqrt(Ajc*Ajc);var Adf=Math.sqrt((Aix*Aix)+(Aiy*Aiy));var
ApF=((AdG*0.25)|0)+3;var ApE=((Adf*0.25)|0)+3;this.Js(0,(((FU*2)+ApF)+ApE)+4);this.
Js(1,0);if(FC>=0){this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.Fk(0,Aix/2,Aiy/2,Adf
/2,Adf/2,JA,JA+180,ApE);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FU);this.Fk(0,Ajc/2
,0,AdG/2,AdG/2,180,360,ApF);}else{this.Fk(0,0,0,this.Ip,this.JU,0,FC,FU);this.Fk(
0,Aix/2,Aiy/2,Adf/2,Adf/2,JA,JA-180,ApE);this.Fk(0,0,0,0,0,this.NL,this.NL-FC,FU
);this.Fk(0,Ajc/2,0,AdG/2,AdG/2,180,0,ApF);}this.VN(0);return;}},BlL:function(E){
if(E===this.NL)return;this.NL=E;if((this.Ip>0)&&(this.JU>0))A.pe([this,this.Ajh]
,this);},Bm1:function(E){if((E===this.Ip)&&(E===this.JU))return;this.Ip=E;this.JU=
E;if(!!this.NL)A.pe([this,this.Ajh],this);},Bm$:function(E){if(E===this.Rb)return;
this.Rb=E;if((!!this.NL&&(this.Ip>0))&&(this.JU>0))A.pe([this,this.Ajh],this);},
_Init:function(aArg){C.Hz._Init.call(this,aArg);this.__proto__=C.AME;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AME.__proto__=C.Hz;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */