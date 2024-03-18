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
var Cd=[0,0];var BF="Can not resize explicitly attached graphics engine bitmaps";
var E4=[0,0,0,0];var Hm="No graphics engine bitmap attached to this canvas";var IQ=
"The canvas is already initialized with a graphics engine bitmap";var Ip="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O1="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P2="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P3=[1,1];var CQ=[2,2];var Fb="Missing matrices to interpolate";
C.Canvas={C1:null,AEo:null,QJ:A.wg,Pr:0,Ay3:false,La:function(){if(this.Ay3)this.
DetachBitmap();},Init:function(aArg){this.OK=true;},ArQ:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cd;if(A.aaX(E,this.FrameSize))return;if(this.Ay3)throw new Error(BF);
this.FrameSize=E;this.Vx=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cd;this.FrameDelay=0;this.NoOfFrames=1;}this.QJ=[].concat(
Cd,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pr;for(this.Pr=this.NoOfFrames-
1;this.Pr>=0;this.Pr--)this.Avc(this.QJ,this.QJ,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pr=dstFrameNr;}}if(!(((B=this.QJ)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEo)?B[1].call(B[0],
this):null;this.QJ=E4;}},DetachBitmap:function(){if(!this.Ay3)throw new Error(Hm
);this.bitmap=null;this.Ay3=false;this.FrameSize=Cd;this.FrameDelay=0;this.NoOfFrames=
1;this.Vx=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IQ);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay3=true;var noOfFrames=
1;var frameSize=Cd;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vx=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhN:function(aClip,AoE,Bbn,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoE){AoE.Ajb();attrSet=AoE.attrSet;}if(
!!Bbn)attrString=Bbn.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pr;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5Z:function(
aClip,AfF,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0O,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfF||!AfF.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0O===1)orient=90;else if(A0O===2)orient=180;else if(A0O===
3)orient=270;var dstFrameNo=this.Pr;var dstBitmap=this.bitmap;var srcFont=AfF.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhP:function(aClip
,aBitmap,aFrameNr,aDstRect,Atl,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atl)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pr;var srcRect=[].concat(
Cd,aBitmap.FrameSize);var left=((Atl&0x1)===0x1);var top=((Atl&0x2)===0x2);var right=((
Atl&0x4)===0x4);var bottom=((Atl&0x8)===0x8);var interior=((Atl&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hk:function(aClip
,AoM,aDstRect,aFlipY,aOffset,aWidth,Bxr,BwB,BwX,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoM||!AoM.path)return;var style=0;switch(Bxr){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BwB){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BwX){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pr;var path=AoM.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhN:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Ip);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pr;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bn8:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O1);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pr;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5t:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pr;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ael:function(aClip,AoM,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BwF){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoM||!AoM.path)return;var nonZeroWinding=BwF===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pr;var path=AoM.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhQ:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avc:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BhS:function(aClip,aDstPos1,aDstPos2,Bxx,Bxy,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agl=Bxx;var Agm=Bxy;var Adv=aDstPos1;
var Adw=aDstPos2;if(A.aaX(Adv,Adw))return;if(Agl<=1)Agl=1;if(Agm<=1)Agm=1;var Aiz=
Agl/2;var AiA=Agm/2;var Apl=Adv[0];var Apm=Adv[1];var Apn=Adw[0];var Apo=Adw[1];
var J6=Apn-Apl;var J7=Apo-Apm;var IU=Math.sqrt((J6*J6)+(J7*J7));if(((Agl>4096)||(
Agm>4096))||(IU>4096)){A.ab5("%s",P2);return;}J6=J6/IU;J7=J7/IU;var x1=Apl+(J7*Aiz
);var y1=Apm-(J6*Aiz);var x2=Apn+(J7*AiA);var y2=Apo-(J6*AiA);var x3=Apn-(J7*AiA
);var y3=Apo+(J6*AiA);var x4=Apl-(J7*Aiz);var y4=Apm+(J6*Aiz);var Be2=A.aaL(A.aci.
AsT);var srcRect=[].concat(P3,A.abe(Be2.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;var srcBitmap=Be2.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AuZ:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.La();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEo)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxT={Wb:1,Wc:0,Y1:0,Y2:
0,Wd:0,We:1,Y3:0,Y4:0,QU:0,QV:0,Y5:1,Wf:0,T6:0,T7:0,Y6:0,Wg:1,UO:0,P0:0,PZ:0,AgO:
0,AlN:true,ABW:function(aX,aY){var Vn=((aX*this.QU)+(aY*this.QV))+this.Wf;var BY=((
aX*this.T6)+(aY*this.T7))+this.Wg;if(!!BY&&(BY!==1))Vn=Vn/BY;this.UO=Vn;return true;
},Ae9:function(aX,aY){var AtJ=this.AgO;if(AtJ<0)return false;var En=((aX*this.Wb
)+(aY*this.Wc))+this.Y2;var Dg=((aX*this.Wd)+(aY*this.We))+this.Y4;var Vn=((aX*this.
QU)+(aY*this.QV))+this.Wf;var BY=((aX*this.T6)+(aY*this.T7))+this.Wg;var AAO=1;if(
!!BY&&(BY!==1)){En=En/BY;Dg=Dg/BY;Vn=Vn/BY;}if(AtJ!==-Vn)AAO=1/(Vn+AtJ);if(!!AtJ
)AAO=AAO*AtJ;this.PZ=En*AAO;this.P0=Dg*AAO;this.UO=Vn+AtJ;return true;},Bi2:function(
G7,O6,P_){if(!G7||!O6)throw new Error(Fb);this.Wb=G7.Wb+((O6.Wb-G7.Wb)*P_);this.
Wc=G7.Wc+((O6.Wc-G7.Wc)*P_);this.Y1=G7.Y1+((O6.Y1-G7.Y1)*P_);this.Y2=G7.Y2+((O6.
Y2-G7.Y2)*P_);this.Wd=G7.Wd+((O6.Wd-G7.Wd)*P_);this.We=G7.We+((O6.We-G7.We)*P_);
this.Y3=G7.Y3+((O6.Y3-G7.Y3)*P_);this.Y4=G7.Y4+((O6.Y4-G7.Y4)*P_);this.QU=G7.QU+((
O6.QU-G7.QU)*P_);this.QV=G7.QV+((O6.QV-G7.QV)*P_);this.Y5=G7.Y5+((O6.Y5-G7.Y5)*P_
);this.Wf=G7.Wf+((O6.Wf-G7.Wf)*P_);this.T6=G7.T6+((O6.T6-G7.T6)*P_);this.T7=G7.T7+((
O6.T7-G7.T7)*P_);this.Y6=G7.Y6+((O6.Y6-G7.Y6)*P_);this.Wg=G7.Wg+((O6.Wg-G7.Wg)*P_
);this.AgO=G7.AgO+((O6.AgO-G7.AgO)*P_);this.AlN=false;return this;},Afd:function(
AI_,AI$,AJa){this.Wb=this.Wb*AI_;this.Wc=this.Wc*AI$;this.Y1=this.Y1*AJa;this.Wd=
this.Wd*AI_;this.We=this.We*AI$;this.Y3=this.Y3*AJa;this.QU=this.QU*AI_;this.QV=
this.QV*AI$;this.Y5=this.Y5*AJa;this.T6=this.T6*AI_;this.T7=this.T7*AI$;this.Y6=
this.Y6*AJa;this.AlN=false;return this;},Bpp:function(AI2,AI3,AI4){this.Y2=((this.
Y2+(this.Wb*AI2))+(this.Wc*AI3))+(this.Y1*AI4);this.Y4=((this.Y4+(this.Wd*AI2))+(
this.We*AI3))+(this.Y3*AI4);this.Wf=((this.Wf+(this.QU*AI2))+(this.QV*AI3))+(this.
Y5*AI4);this.Wg=((this.Wg+(this.T6*AI2))+(this.T7*AI3))+(this.Y6*AI4);this.AlN=false;
return this;},ADO:function(){return this.AlN||((((((((((((((((this.Wb===1)&&!this.
Wc)&&!this.Y1)&&!this.Y2)&&!this.Wd)&&(this.We===1))&&!this.Y3)&&!this.Y4)&&!this.
QU)&&!this.QV)&&(this.Y5===1))&&!this.Wf)&&!this.T6)&&!this.T7)&&!this.Y6)&&(this.
Wg===1));},ANM:function(Ah6,Ah9,Ah7,Ah_,AoU,AoV,Ah8,Ah$){var Azt=Ah7-AoU;var Azv=
Ah_-AoV;var Azu=Ah8-AoU;var Azw=Ah$-AoV;var AA8=((Ah6-Ah7)+AoU)-Ah8;var AA9=((Ah9-
Ah_)+AoV)-Ah$;var Ao8=(Azt*Azw)-(Azv*Azu);if(!Ao8)return null;this.QU=((AA8*Azw)-(
AA9*Azu))/Ao8;this.QV=((Azt*AA9)-(Azv*AA8))/Ao8;this.Y5=0;this.Wf=1;this.Wb=(Ah7-
Ah6)+(this.QU*Ah7);this.Wc=(Ah8-Ah6)+(this.QV*Ah8);this.Y1=0;this.Y2=Ah6;this.Wd=(
Ah_-Ah9)+(this.QU*Ah_);this.We=(Ah$-Ah9)+(this.QV*Ah$);this.Y3=0;this.Y4=Ah9;this.
T6=0;this.T7=0;this.Y6=0;this.Wg=1;this.AlN=false;return this;},BgS:function(L5){
if(!L5)return this;this.Wb=L5.Wb;this.Wc=L5.Wc;this.Y1=L5.Y1;this.Y2=L5.Y2;this.
Wd=L5.Wd;this.We=L5.We;this.Y3=L5.Y3;this.Y4=L5.Y4;this.QU=L5.QU;this.QV=L5.QV;this.
Y5=L5.Y5;this.Wf=L5.Wf;this.T6=L5.T6;this.T7=L5.T7;this.Y6=L5.Y6;this.Wg=L5.Wg;this.
AlN=L5.AlN;this.AgO=L5.AgO;return this;},A7h:function(){this.Wb=1;this.Wc=0;this.
Y1=0;this.Y2=0;this.Wd=0;this.We=1;this.Y3=0;this.Y4=0;this.QU=0;this.QV=0;this.
Y5=1;this.Wf=0;this.T6=0;this.T7=0;this.Y6=0;this.Wg=1;this.AlN=true;return this;
},_Init:function(aArg){this.__proto__=C.AxT;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A61={Bc6:1,Bc7:0,Bc8:0,Bc9:0,Bc_:1,Bc$:0,Bda:0,Bdb:0,Bdc:1,P0:0,PZ:0,A2c:false
,Ae9:function(Fd){if(!this.A2c)return false;var A4l=Fd[0];var A4n=Fd[1];var BCg=((
A4l*this.Bc6)+(A4n*this.Bc7))+this.Bc8;var BCh=((A4l*this.Bc9)+(A4n*this.Bc_))+this.
Bc$;var A3A=((A4l*this.Bda)+(A4n*this.Bdb))+this.Bdc;if(!!A3A){this.PZ=BCg/A3A;this.
P0=BCh/A3A;return true;}return false;},ANM:function(Ah6,Ah9,Ah7,Ah_,AoU,AoV,Ah8,
Ah$){var Azt=Ah7-AoU;var Azv=Ah_-AoV;var Azu=Ah8-AoU;var Azw=Ah$-AoV;var AA8=((Ah6-
Ah7)+AoU)-Ah8;var AA9=((Ah9-Ah_)+AoV)-Ah$;var Ao8=(Azt*Azw)-(Azv*Azu);this.A2c=false;
if(!Ao8)return;var AiB=((AA8*Azw)-(AA9*Azu))/Ao8;var BK=((Azt*AA9)-(Azv*AA8))/Ao8;
var a=(Ah7-Ah6)+(AiB*Ah7);var Rv=(Ah8-Ah6)+(BK*Ah8);var B4=Ah6;var d=(Ah_-Ah9)+(
AiB*Ah_);var AJW=(Ah$-Ah9)+(BK*Ah$);var LJ=Ah9;this.Bc6=AJW-(LJ*BK);this.Bc7=(B4
*BK)-Rv;this.Bc8=(Rv*LJ)-(B4*AJW);this.Bc9=(LJ*AiB)-d;this.Bc_=a-(B4*AiB);this.Bc$=(
B4*d)-(a*LJ);this.Bda=(d*BK)-(AJW*AiB);this.Bdb=(Rv*AiB)-(a*BK);this.Bdc=(a*AJW)-(
Rv*d);this.A2c=true;},_Init:function(aArg){this.__proto__=C.A61;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4W={C3:A.wf,attrString:null,La:function(){this.A5L(
);},A5L:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C3=Cd;},Aj5:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiK:function(
){return this.C3;},Bnv:function(AoE,aString,aWidth,aEnableBidiText){this.A5L();var
attrSet=null;var handle=null;var s=Cd;if(!!AoE){AoE.Ajb();attrSet=AoE.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C3=s;},_Init:function(
aArg){this.__proto__=C.A4W;A.h7++;},_Done:function(){this.La();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aid:null,AfQ:null,Aic:null,Apj:A.abi(4,null,null),Xo:A.abi(10,null,
null),A6h:null,A49:null,attrSet:null,Azd:A.abi(10,0,{0:0xFF000000}),La:function(
){this.AJU();},AJU:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Ajb:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiB();var noOfBitmaps=this.BiA();var noOfFonts=this.BiC();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKq=this.Aic;var Adm=this.AfQ;var AKr=this.Aid;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azd.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKq){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKq.KC.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKq=AKq.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xo.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adm){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adm.KC.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adm=Adm.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Apj.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKr
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKr.KC.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKr=AKr.Ah;}},AKD:function(G){var handle=
this.attrSet;var Adm=this.AfQ;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xo.Get(inx)&&this.Xo.Get(inx).OK){var bitmap=this.Xo.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adm){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adm.KC.Get(lnx)&&Adm.
KC.Get(lnx).OK){var bitmap=Adm.KC.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adm=Adm.Ah;}A.we(this,1);},Bl4:function(E){this.AUt(3,E);},A9I:function(
E){this.AUt(1,E);},Ahj:function(E){this.AUt(0,E);},A9i:function(E){this.Bog(0,E);
},Blq:function(E){this.AGx(3,E);},A9m:function(E){this.AGx(2,E);},A9l:function(E
){this.AGx(1,E);},Ahg:function(E){this.AGx(0,E);},AUt:function(aFontNo,AfF){var Adh=
aFontNo;var HW=false;if(Adh<0)return;if(Adh<4){HW=this.Apj.Get(Adh)!==AfF;this.Apj.
Set(Adh,AfF);}else{var BC=this.Aid;Adh=Adh-4;while(!!BC&&(Adh>=20)){BC=BC.Ah;Adh=
Adh-20;}if(!!BC){HW=BC.KC.Get(Adh)!==AfF;BC.KC.Set(Adh,AfF);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfF)font=AfF.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},Bom:function(Xk){var HW=false;if(Xk<4)Xk=4;if(Xk>256
)Xk=256;Xk=Xk-4;if((Xk>0)&&!this.Aid){this.Aid=A._NewObject(C.ABL,0);HW=true;}if(
!Xk&&!!this.Aid){this.Aid=null;HW=true;}var BC=this.Aid;while(Xk>0){if((Xk>20)&&
!BC.Ah){BC.Ah=A._NewObject(C.ABL,0);HW=true;}Xk=Xk-20;if(Xk>0)BC=BC.Ah;}if(!!BC&&
!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJU();A.we(this,1);}},BiC:function(){var
CB=4;var BC=this.Aid;while(!!BC){CB=CB+20;BC=BC.Ah;}return CB;},Bog:function(aBitmapNo
,aBitmap){var Qc=aBitmapNo;var HW=false;if(Qc<0)return;if(Qc<10){HW=this.Xo.Get(
Qc)!==aBitmap;if(!!this.Xo.Get(Qc)&&this.Xo.Get(Qc).OK)A.z9([this,this.AKD],this.
Xo.Get(Qc),0);this.Xo.Set(Qc,aBitmap);if(!!aBitmap&&aBitmap.OK)A.zV([this,this.AKD
],aBitmap,0);}else{var BC=this.AfQ;Qc=Qc-10;while(!!BC&&(Qc>=20)){BC=BC.Ah;Qc=Qc-
20;}if(!!BC){HW=BC.KC.Get(Qc)!==aBitmap;if(!!BC.KC.Get(Qc)&&BC.KC.Get(Qc).OK)A.z9([
this,this.AKD],BC.KC.Get(Qc),0);BC.KC.Set(Qc,aBitmap);if(!!aBitmap&&aBitmap.OK)A.
zV([this,this.AKD],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},Bok:function(Xi){var HW=false;if(Xi<10)Xi=10;if(Xi>
256)Xi=256;Xi=Xi-10;if((Xi>0)&&!this.AfQ){this.AfQ=A._NewObject(C.ABJ,0);HW=true;
}if(!Xi&&!!this.AfQ){this.AfQ=null;HW=true;}var BC=this.AfQ;while(Xi>0){if((Xi>20
)&&!BC.Ah){BC.Ah=A._NewObject(C.ABJ,0);HW=true;}Xi=Xi-20;if(Xi>0)BC=BC.Ah;}if(!!
BC&&!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJU();A.we(this,1);}},BiA:function(
){var CB=10;var BC=this.AfQ;while(!!BC){CB=CB+20;BC=BC.Ah;}return CB;},AGx:function(
aColorNo,aColor){var Ac9=aColorNo;var HW=false;if(Ac9<0)return;if(Ac9<10){HW=this.
Azd.Get(Ac9)!==aColor;this.Azd.Set(Ac9,aColor);}else{var BC=this.Aic;Ac9=Ac9-10;
while(!!BC&&(Ac9>=20)){BC=BC.Ah;Ac9=Ac9-20;}if(!!BC){HW=BC.KC.Get(Ac9)!==aColor;
BC.KC.Set(Ac9,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},Bol:function(Xj){var HW=false;if(Xj<10)Xj=
10;if(Xj>256)Xj=256;Xj=Xj-10;if((Xj>0)&&!this.Aic){this.Aic=A._NewObject(C.ABK,0
);HW=true;}if(!Xj&&!!this.Aic){this.Aic=null;HW=true;}var BC=this.Aic;while(Xj>0
){if((Xj>20)&&!BC.Ah){BC.Ah=A._NewObject(C.ABK,0);HW=true;}Xj=Xj-20;if(Xj>0)BC=BC.
Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJU();A.we(this,1);}},BiB:
function(){var CB=10;var BC=this.Aic;while(!!BC){CB=CB+20;BC=BC.Ah;}return CB;},
_Init:function(aArg){(this.Apj=[]).__proto__=C.AttrSet.Apj;(this.Xo=[]).__proto__=
C.AttrSet.Xo;(this.Azd=[]).__proto__=C.AttrSet.Azd;this.__proto__=C.AttrSet;this.
Apj.Set(0,A.aaL(A.aci.ACr));this.Xo.Set(0,A.aaL(A.aci.TJ));this.A6h=A.aaL(A.aci.
ACr);this.A49=A.aaL(A.aci.TJ);A.h7++;},_Done:function(){this.La();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aid)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aic)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Apj,D);A.aa6(this.Xo,D
);if((B=this.A6h)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A49)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABL={Ah:null,KC:A.abi(
20,null,null),_Init:function(aArg){(this.KC=[]).__proto__=C.ABL.KC;this.__proto__=
C.ABL;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KC,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABJ={Ah:null,KC:A.abi(20,null,null),
_Init:function(aArg){(this.KC=[]).__proto__=C.ABJ.KC;this.__proto__=C.ABJ;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KC,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABK={Ah:null,KC:A.abi(20,0,null),_Init:function(aArg
){(this.KC=[]).__proto__=C.ABK.KC;this.__proto__=C.ABK;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hv={path:null,La:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adt:function(G){A.we(this,0);},Fh:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adt
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4y:
function(aSubPathNo,aX,aY){A.pe([this,this.Adt],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VK:function(aSubPathNo){A.
pe([this,this.Adt],this);var handle=this.path;A.jU(handle,aSubPathNo);},VC:function(
aSubPathNo,aX,aY){A.pe([this,this.Adt],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jq:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axq(1);A.pe([this,this.Adt],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BiD:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axq:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BiD()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adt],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hv;A.h7++;},_Done:function(){
this.La();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Au0={Left:0x1,ZR:0x2,Right:0x4,A4_:0x8,BDV:0x10
};C.BDx={BDl:0,BEt:1};C.BEB={BCH:0,BEf:1,Bn3:2};C.BEA={BDz:0,BFh:1,Bn3:2,AxM:3};
C.BCz={BCy:0,BFc:1,BEF:2,BEG:3,BEI:4,BEH:5};C.AMI={NL:360,JT:0,In:0,Q$:0,Ajc:function(
G){var B;var Fz=this.NL;var FP;if((Fz>=360)||(Fz<=-360))Fz=360;this.Axq(2);{var Az=
Math.max(this.In,this.JT);FP=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FP*=
4;if(Fz<360)FP=((Fz*FP)/360)|0;FP=Math.max(FP,-FP,1);}if(((!Fz||!this.In)||!this.
JT)||(((((this.Q$===2)||(this.Q$===3))||(this.Q$===4))||(this.Q$===5))&&((0>=this.
In)||(0>=this.JT)))){this.Jq(0,0);this.Jq(1,0);return;}if(Fz===360){this.Jq(0,FP+
1);this.Jq(1,0);this.Fh(0,0,0,this.In,this.JT,0,360,FP);this.VK(0);return;}if(!this.
Q$){this.Jq(0,FP+1);this.Jq(1,0);this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);return;}
if(this.Q$===1){this.Jq(0,FP+1);this.Jq(1,0);this.Fh(0,0,0,this.In,this.JT,0,Fz,
FP);this.VK(0);return;}if(this.Q$===2){this.Jq(0,FP+1);this.Jq(1,0);this.VC(0,0,
0);this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.VK(0);return;}if(this.Q$===4){var
On=this.In;var LE=Math.sqrt(On*On);var Tj=((LE*0.25)|0)+3;this.Jq(0,(FP+Tj)+2);this.
Jq(1,0);this.VC(0,0,0);if(Fz>=0)this.Fh(0,On/2,0,LE/2,LE/2,180,360,Tj);else this.
Fh(0,On/2,0,LE/2,LE/2,180,0,Tj);this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.VK(0
);return;}if(this.Q$===5){var Jz=Fz;var On=this.In*Math.cos(Jz*A.k$);var AiP=this.
JT*Math.sin(Jz*A.k$);var LE=Math.sqrt((On*On)+(AiP*AiP));var Tj=((LE*0.25)|0)+3;
this.Jq(0,(FP+Tj)+2);this.Jq(1,0);this.VC(0,0,0);this.Fh(0,0,0,this.In,this.JT,0
,Fz,FP);if(Fz>=0)this.Fh(0,On/2,AiP/2,LE/2,LE/2,Jz,Jz+180,Tj);else this.Fh(0,On/
2,AiP/2,LE/2,LE/2,Jz,Jz-180,Tj);this.VK(0);return;}if(this.Q$===3){var Ai9=this.
In;var AdD=Math.sqrt(Ai9*Ai9);var Jz=Fz;var Air=this.In*Math.cos(Jz*A.k$);var Ais=
this.JT*Math.sin(Jz*A.k$);var Adc=Math.sqrt((Air*Air)+(Ais*Ais));var ApD=((AdD*0.25
)|0)+3;var ApC=((Adc*0.25)|0)+3;this.Jq(0,((FP+ApD)+ApC)+10);this.Jq(1,0);this.VC(
0,0,0);if(Fz>=0){this.Fh(0,Ai9/2,0,AdD/2,AdD/2,180,360,ApD);this.Fh(0,0,0,this.In
,this.JT,0,Fz,FP);this.Fh(0,Air/2,Ais/2,Adc/2,Adc/2,Jz,Jz+180,ApC);}else{this.Fh(
0,Ai9/2,0,AdD/2,AdD/2,180,0,ApD);this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.Fh(
0,Air/2,Ais/2,Adc/2,Adc/2,Jz,Jz-180,ApC);}this.VK(0);return;}if(this.Q$===2){this.
Jq(0,(FP*2)+1);this.Jq(1,0);this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.Fh(0,0,0
,0,0,this.NL,this.NL-Fz,FP);this.VK(0);return;}if(this.Q$===4){var On=this.In;var
LE=Math.sqrt(On*On);var Tj=((LE*0.25)|0)+3;this.Jq(0,((FP*2)+Tj)+2);this.Jq(1,0);
if(Fz>=0){this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.Fh(0,0,0,0,0,this.NL,this.
NL-Fz,FP);this.Fh(0,On/2,0,LE/2,LE/2,180,360,Tj);}else{this.Fh(0,0,0,this.In,this.
JT,0,Fz,FP);this.Fh(0,0,0,0,0,this.NL,this.NL-Fz,FP);this.Fh(0,On/2,0,LE/2,LE/2,
180,0,Tj);}this.VK(0);return;}if(this.Q$===5){var Jz=Fz;var sin=Math.sin(Jz*A.k$
);var cos=Math.cos(Jz*A.k$);var On=this.In*cos;var AiP=this.JT*sin;var LE=Math.sqrt((
On*On)+(AiP*AiP));var Tj=((LE*0.25)|0)+3;this.Jq(0,((FP*2)+Tj)+2);this.Jq(1,0);if(
Fz>=0){this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.Fh(0,On/2,AiP/2,LE/2,LE/2,Jz,
Jz+180,Tj);this.Fh(0,0,0,0,0,this.NL,this.NL-Fz,FP);}else{this.Fh(0,0,0,this.In,
this.JT,0,Fz,FP);this.Fh(0,On/2,AiP/2,LE/2,LE/2,Jz,Jz-180,Tj);this.Fh(0,0,0,0,0,
this.NL,this.NL-Fz,FP);}this.VK(0);return;}if(this.Q$===3){var Jz=Fz;var ByG=Math.
sin(Jz*A.k$);var ByB=Math.cos(Jz*A.k$);var Ai9=this.In;var Air=this.In*ByB;var Ais=
this.JT*ByG;var AdD=Math.sqrt(Ai9*Ai9);var Adc=Math.sqrt((Air*Air)+(Ais*Ais));var
ApD=((AdD*0.25)|0)+3;var ApC=((Adc*0.25)|0)+3;this.Jq(0,(((FP*2)+ApD)+ApC)+4);this.
Jq(1,0);if(Fz>=0){this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.Fh(0,Air/2,Ais/2,Adc
/2,Adc/2,Jz,Jz+180,ApC);this.Fh(0,0,0,0,0,this.NL,this.NL-Fz,FP);this.Fh(0,Ai9/2
,0,AdD/2,AdD/2,180,360,ApD);}else{this.Fh(0,0,0,this.In,this.JT,0,Fz,FP);this.Fh(
0,Air/2,Ais/2,Adc/2,Adc/2,Jz,Jz-180,ApC);this.Fh(0,0,0,0,0,this.NL,this.NL-Fz,FP
);this.Fh(0,Ai9/2,0,AdD/2,AdD/2,180,0,ApD);}this.VK(0);return;}},BlG:function(E){
if(E===this.NL)return;this.NL=E;if((this.In>0)&&(this.JT>0))A.pe([this,this.Ajc]
,this);},BmW:function(E){if((E===this.In)&&(E===this.JT))return;this.In=E;this.JT=
E;if(!!this.NL)A.pe([this,this.Ajc],this);},Bm6:function(E){if(E===this.Q$)return;
this.Q$=E;if((!!this.NL&&(this.In>0))&&(this.JT>0))A.pe([this,this.Ajc],this);},
_Init:function(aArg){C.Hv._Init.call(this,aArg);this.__proto__=C.AMI;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMI.__proto__=C.Hv;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */