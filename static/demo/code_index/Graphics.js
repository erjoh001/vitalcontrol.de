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
"being wider or higher than 4069 pixel.";var P1="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P2=[1,1];var CQ=[2,2];var E$="Missing matrices to interpolate";
C.Canvas={C1:null,AEl:null,QI:A.wg,Pr:0,Ay2:false,Lb:function(){if(this.Ay2)this.
DetachBitmap();},Init:function(aArg){this.OK=true;},ArO:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cd;if(A.aaX(E,this.FrameSize))return;if(this.Ay2)throw new Error(BF);
this.FrameSize=E;this.Vw=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cd;this.FrameDelay=0;this.NoOfFrames=1;}this.QI=[].concat(
Cd,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pr;for(this.Pr=this.NoOfFrames-
1;this.Pr>=0;this.Pr--)this.Ava(this.QI,this.QI,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pr=dstFrameNr;}}if(!(((B=this.QI)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEl)?B[1].call(B[0],
this):null;this.QI=E4;}},DetachBitmap:function(){if(!this.Ay2)throw new Error(Hm
);this.bitmap=null;this.Ay2=false;this.FrameSize=Cd;this.FrameDelay=0;this.NoOfFrames=
1;this.Vw=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IQ);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ay2=true;var noOfFrames=
1;var frameSize=Cd;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vw=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BhO:function(aClip,AoC,Bbo,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoC){AoC.Aja();attrSet=AoC.attrSet;}if(
!!Bbo)attrString=Bbo.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pr;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5Z:function(
aClip,AfE,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A0N,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfE||!AfE.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A0N===1)orient=90;else if(A0N===2)orient=180;else if(A0N===
3)orient=270;var dstFrameNo=this.Pr;var dstBitmap=this.bitmap;var srcFont=AfE.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BhQ:function(aClip
,aBitmap,aFrameNr,aDstRect,Atj,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atj)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pr;var srcRect=[].concat(
Cd,aBitmap.FrameSize);var left=((Atj&0x1)===0x1);var top=((Atj&0x2)===0x2);var right=((
Atj&0x4)===0x4);var bottom=((Atj&0x8)===0x8);var interior=((Atj&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hk:function(aClip
,AoK,aDstRect,aFlipY,aOffset,aWidth,Bxr,BwB,BwX,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoK||!AoK.path)return;var style=0;switch(Bxr){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BwB){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BwX){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pr;var path=AoK.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhM:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
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
,aColorBR,aColorBL,aBlend);}},Ael:function(aClip,AoK,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BwF){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoK||!AoK.path)return;var nonZeroWinding=BwF===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pr;var path=AoK.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BhR:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ava:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pr;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BhT:function(aClip,aDstPos1,aDstPos2,Bxx,Bxy,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agj=Bxx;var Agk=Bxy;var Adv=aDstPos1;
var Adw=aDstPos2;if(A.aaX(Adv,Adw))return;if(Agj<=1)Agj=1;if(Agk<=1)Agk=1;var Aiy=
Agj/2;var Aiz=Agk/2;var Apj=Adv[0];var Apk=Adv[1];var Apl=Adw[0];var Apm=Adw[1];
var J6=Apl-Apj;var J7=Apm-Apk;var IU=Math.sqrt((J6*J6)+(J7*J7));if(((Agj>4096)||(
Agk>4096))||(IU>4096)){A.ab5("%s",P1);return;}J6=J6/IU;J7=J7/IU;var x1=Apj+(J7*Aiy
);var y1=Apk-(J6*Aiy);var x2=Apl+(J7*Aiz);var y2=Apm-(J6*Aiz);var x3=Apl-(J7*Aiz
);var y3=Apm+(J6*Aiz);var x4=Apj-(J7*Aiy);var y4=Apk+(J6*Aiy);var Be3=A.aaL(A.aci.
AsR);var srcRect=[].concat(P2,A.abe(Be3.FrameSize,CQ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;var srcBitmap=Be3.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AuX:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pr;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lb();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AxS={Wa:1,Wb:0,Y0:0,Y1:
0,Wc:0,Wd:1,Y2:0,Y3:0,QT:0,QU:0,Y4:1,We:0,T6:0,T7:0,Y5:0,Wf:1,UN:0,PZ:0,PY:0,AgM:
0,AlM:true,ABU:function(aX,aY){var Vm=((aX*this.QT)+(aY*this.QU))+this.We;var BY=((
aX*this.T6)+(aY*this.T7))+this.Wf;if(!!BY&&(BY!==1))Vm=Vm/BY;this.UN=Vm;return true;
},Ae8:function(aX,aY){var AtH=this.AgM;if(AtH<0)return false;var En=((aX*this.Wa
)+(aY*this.Wb))+this.Y1;var Dg=((aX*this.Wc)+(aY*this.Wd))+this.Y3;var Vm=((aX*this.
QT)+(aY*this.QU))+this.We;var BY=((aX*this.T6)+(aY*this.T7))+this.Wf;var AAN=1;if(
!!BY&&(BY!==1)){En=En/BY;Dg=Dg/BY;Vm=Vm/BY;}if(AtH!==-Vm)AAN=1/(Vm+AtH);if(!!AtH
)AAN=AAN*AtH;this.PY=En*AAN;this.PZ=Dg*AAN;this.UN=Vm+AtH;return true;},Bi2:function(
G7,O6,P9){if(!G7||!O6)throw new Error(E$);this.Wa=G7.Wa+((O6.Wa-G7.Wa)*P9);this.
Wb=G7.Wb+((O6.Wb-G7.Wb)*P9);this.Y0=G7.Y0+((O6.Y0-G7.Y0)*P9);this.Y1=G7.Y1+((O6.
Y1-G7.Y1)*P9);this.Wc=G7.Wc+((O6.Wc-G7.Wc)*P9);this.Wd=G7.Wd+((O6.Wd-G7.Wd)*P9);
this.Y2=G7.Y2+((O6.Y2-G7.Y2)*P9);this.Y3=G7.Y3+((O6.Y3-G7.Y3)*P9);this.QT=G7.QT+((
O6.QT-G7.QT)*P9);this.QU=G7.QU+((O6.QU-G7.QU)*P9);this.Y4=G7.Y4+((O6.Y4-G7.Y4)*P9
);this.We=G7.We+((O6.We-G7.We)*P9);this.T6=G7.T6+((O6.T6-G7.T6)*P9);this.T7=G7.T7+((
O6.T7-G7.T7)*P9);this.Y5=G7.Y5+((O6.Y5-G7.Y5)*P9);this.Wf=G7.Wf+((O6.Wf-G7.Wf)*P9
);this.AgM=G7.AgM+((O6.AgM-G7.AgM)*P9);this.AlM=false;return this;},Afc:function(
AI7,AI8,AI9){this.Wa=this.Wa*AI7;this.Wb=this.Wb*AI8;this.Y0=this.Y0*AI9;this.Wc=
this.Wc*AI7;this.Wd=this.Wd*AI8;this.Y2=this.Y2*AI9;this.QT=this.QT*AI7;this.QU=
this.QU*AI8;this.Y4=this.Y4*AI9;this.T6=this.T6*AI7;this.T7=this.T7*AI8;this.Y5=
this.Y5*AI9;this.AlM=false;return this;},Bpp:function(AIZ,AI0,AI1){this.Y1=((this.
Y1+(this.Wa*AIZ))+(this.Wb*AI0))+(this.Y0*AI1);this.Y3=((this.Y3+(this.Wc*AIZ))+(
this.Wd*AI0))+(this.Y2*AI1);this.We=((this.We+(this.QT*AIZ))+(this.QU*AI0))+(this.
Y4*AI1);this.Wf=((this.Wf+(this.T6*AIZ))+(this.T7*AI0))+(this.Y5*AI1);this.AlM=false;
return this;},ADL:function(){return this.AlM||((((((((((((((((this.Wa===1)&&!this.
Wb)&&!this.Y0)&&!this.Y1)&&!this.Wc)&&(this.Wd===1))&&!this.Y2)&&!this.Y3)&&!this.
QT)&&!this.QU)&&(this.Y4===1))&&!this.We)&&!this.T6)&&!this.T7)&&!this.Y5)&&(this.
Wf===1));},ANL:function(Ah5,Ah8,Ah6,Ah9,AoS,AoT,Ah7,Ah_){var Azs=Ah6-AoS;var Azu=
Ah9-AoT;var Azt=Ah7-AoS;var Azv=Ah_-AoT;var AA6=((Ah5-Ah6)+AoS)-Ah7;var AA7=((Ah8-
Ah9)+AoT)-Ah_;var Ao6=(Azs*Azv)-(Azu*Azt);if(!Ao6)return null;this.QT=((AA6*Azv)-(
AA7*Azt))/Ao6;this.QU=((Azs*AA7)-(Azu*AA6))/Ao6;this.Y4=0;this.We=1;this.Wa=(Ah6-
Ah5)+(this.QT*Ah6);this.Wb=(Ah7-Ah5)+(this.QU*Ah7);this.Y0=0;this.Y1=Ah5;this.Wc=(
Ah9-Ah8)+(this.QT*Ah9);this.Wd=(Ah_-Ah8)+(this.QU*Ah_);this.Y2=0;this.Y3=Ah8;this.
T6=0;this.T7=0;this.Y5=0;this.Wf=1;this.AlM=false;return this;},BgT:function(L5){
if(!L5)return this;this.Wa=L5.Wa;this.Wb=L5.Wb;this.Y0=L5.Y0;this.Y1=L5.Y1;this.
Wc=L5.Wc;this.Wd=L5.Wd;this.Y2=L5.Y2;this.Y3=L5.Y3;this.QT=L5.QT;this.QU=L5.QU;this.
Y4=L5.Y4;this.We=L5.We;this.T6=L5.T6;this.T7=L5.T7;this.Y5=L5.Y5;this.Wf=L5.Wf;this.
AlM=L5.AlM;this.AgM=L5.AgM;return this;},A7i:function(){this.Wa=1;this.Wb=0;this.
Y0=0;this.Y1=0;this.Wc=0;this.Wd=1;this.Y2=0;this.Y3=0;this.QT=0;this.QU=0;this.
Y4=1;this.We=0;this.T6=0;this.T7=0;this.Y5=0;this.Wf=1;this.AlM=true;return this;
},_Init:function(aArg){this.__proto__=C.AxS;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A62={Bc7:1,Bc8:0,Bc9:0,Bc_:0,Bc$:1,Bda:0,Bdb:0,Bdc:0,Bdd:1,PZ:0,PY:0,A2b:false
,Ae8:function(Fb){if(!this.A2b)return false;var A4l=Fb[0];var A4n=Fb[1];var BCh=((
A4l*this.Bc7)+(A4n*this.Bc8))+this.Bc9;var BCi=((A4l*this.Bc_)+(A4n*this.Bc$))+this.
Bda;var A3z=((A4l*this.Bdb)+(A4n*this.Bdc))+this.Bdd;if(!!A3z){this.PY=BCh/A3z;this.
PZ=BCi/A3z;return true;}return false;},ANL:function(Ah5,Ah8,Ah6,Ah9,AoS,AoT,Ah7,
Ah_){var Azs=Ah6-AoS;var Azu=Ah9-AoT;var Azt=Ah7-AoS;var Azv=Ah_-AoT;var AA6=((Ah5-
Ah6)+AoS)-Ah7;var AA7=((Ah8-Ah9)+AoT)-Ah_;var Ao6=(Azs*Azv)-(Azu*Azt);this.A2b=false;
if(!Ao6)return;var AiA=((AA6*Azv)-(AA7*Azt))/Ao6;var BK=((Azs*AA7)-(Azu*AA6))/Ao6;
var a=(Ah6-Ah5)+(AiA*Ah6);var Ru=(Ah7-Ah5)+(BK*Ah7);var B3=Ah5;var d=(Ah9-Ah8)+(
AiA*Ah9);var AJU=(Ah_-Ah8)+(BK*Ah_);var LK=Ah8;this.Bc7=AJU-(LK*BK);this.Bc8=(B3
*BK)-Ru;this.Bc9=(Ru*LK)-(B3*AJU);this.Bc_=(LK*AiA)-d;this.Bc$=a-(B3*AiA);this.Bda=(
B3*d)-(a*LK);this.Bdb=(d*BK)-(AJU*AiA);this.Bdc=(Ru*AiA)-(a*BK);this.Bdd=(a*AJU)-(
Ru*d);this.A2b=true;},_Init:function(aArg){this.__proto__=C.A62;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4W={C3:A.wf,attrString:null,Lb:function(){this.A5L(
);},A5L:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C3=Cd;},Aj4:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BiL:function(
){return this.C3;},Bnv:function(AoC,aString,aWidth,aEnableBidiText){this.A5L();var
attrSet=null;var handle=null;var s=Cd;if(!!AoC){AoC.Aja();attrSet=AoC.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C3=s;},_Init:function(
aArg){this.__proto__=C.A4W;A.h7++;},_Done:function(){this.Lb();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aic:null,AfP:null,Aib:null,Aph:A.abi(4,null,null),Xn:A.abi(10,null,
null),A6h:null,A49:null,attrSet:null,Azc:A.abi(10,0,{0:0xFF000000}),Lb:function(
){this.AJS();},AJS:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},Aja:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BiC();var noOfBitmaps=this.BiB();var noOfFonts=this.BiD();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AKp=this.Aib;var Adm=this.AfP;var AKq=this.Aic;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Azc.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AKp){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKp.KD.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKp=AKp.Ah;}for(inx=0;inx<10;
inx=inx+1){var entry=this.Xn.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Adm){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Adm.KD.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Adm=Adm.Ah;}for(inx=0;inx<4;inx=inx+1){var entry=this.
Aph.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AKq
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKq.KD.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKq=AKq.Ah;}},AKC:function(G){var handle=
this.attrSet;var Adm=this.AfP;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
Xn.Get(inx)&&this.Xn.Get(inx).OK){var bitmap=this.Xn.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Adm){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Adm.KD.Get(lnx)&&Adm.
KD.Get(lnx).OK){var bitmap=Adm.KD.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Adm=Adm.Ah;}A.we(this,1);},Bl4:function(E){this.AUs(3,E);},A9J:function(
E){this.AUs(1,E);},Ahh:function(E){this.AUs(0,E);},A9j:function(E){this.Bog(0,E);
},Blq:function(E){this.AGu(3,E);},A9n:function(E){this.AGu(2,E);},A9m:function(E
){this.AGu(1,E);},Ahe:function(E){this.AGu(0,E);},AUs:function(aFontNo,AfE){var Adh=
aFontNo;var HW=false;if(Adh<0)return;if(Adh<4){HW=this.Aph.Get(Adh)!==AfE;this.Aph.
Set(Adh,AfE);}else{var BC=this.Aic;Adh=Adh-4;while(!!BC&&(Adh>=20)){BC=BC.Ah;Adh=
Adh-20;}if(!!BC){HW=BC.KD.Get(Adh)!==AfE;BC.KD.Set(Adh,AfE);}}if(HW&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!AfE)font=AfE.font;A.abG(handle,aFontNo
,font);}if(HW)A.we(this,1);},Bom:function(Xj){var HW=false;if(Xj<4)Xj=4;if(Xj>256
)Xj=256;Xj=Xj-4;if((Xj>0)&&!this.Aic){this.Aic=A._NewObject(C.ABJ,0);HW=true;}if(
!Xj&&!!this.Aic){this.Aic=null;HW=true;}var BC=this.Aic;while(Xj>0){if((Xj>20)&&
!BC.Ah){BC.Ah=A._NewObject(C.ABJ,0);HW=true;}Xj=Xj-20;if(Xj>0)BC=BC.Ah;}if(!!BC&&
!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJS();A.we(this,1);}},BiD:function(){var
CD=4;var BC=this.Aic;while(!!BC){CD=CD+20;BC=BC.Ah;}return CD;},Bog:function(aBitmapNo
,aBitmap){var Qb=aBitmapNo;var HW=false;if(Qb<0)return;if(Qb<10){HW=this.Xn.Get(
Qb)!==aBitmap;if(!!this.Xn.Get(Qb)&&this.Xn.Get(Qb).OK)A.z9([this,this.AKC],this.
Xn.Get(Qb),0);this.Xn.Set(Qb,aBitmap);if(!!aBitmap&&aBitmap.OK)A.zV([this,this.AKC
],aBitmap,0);}else{var BC=this.AfP;Qb=Qb-10;while(!!BC&&(Qb>=20)){BC=BC.Ah;Qb=Qb-
20;}if(!!BC){HW=BC.KD.Get(Qb)!==aBitmap;if(!!BC.KD.Get(Qb)&&BC.KD.Get(Qb).OK)A.z9([
this,this.AKC],BC.KD.Get(Qb),0);BC.KD.Set(Qb,aBitmap);if(!!aBitmap&&aBitmap.OK)A.
zV([this,this.AKC],aBitmap,0);}}if(HW&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HW)A.we(this,1);},Bok:function(Xh){var HW=false;if(Xh<10)Xh=10;if(Xh>
256)Xh=256;Xh=Xh-10;if((Xh>0)&&!this.AfP){this.AfP=A._NewObject(C.ABH,0);HW=true;
}if(!Xh&&!!this.AfP){this.AfP=null;HW=true;}var BC=this.AfP;while(Xh>0){if((Xh>20
)&&!BC.Ah){BC.Ah=A._NewObject(C.ABH,0);HW=true;}Xh=Xh-20;if(Xh>0)BC=BC.Ah;}if(!!
BC&&!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJS();A.we(this,1);}},BiB:function(
){var CD=10;var BC=this.AfP;while(!!BC){CD=CD+20;BC=BC.Ah;}return CD;},AGu:function(
aColorNo,aColor){var Ac9=aColorNo;var HW=false;if(Ac9<0)return;if(Ac9<10){HW=this.
Azc.Get(Ac9)!==aColor;this.Azc.Set(Ac9,aColor);}else{var BC=this.Aib;Ac9=Ac9-10;
while(!!BC&&(Ac9>=20)){BC=BC.Ah;Ac9=Ac9-20;}if(!!BC){HW=BC.KD.Get(Ac9)!==aColor;
BC.KD.Set(Ac9,aColor);}}if(HW&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HW)A.we(this,0);},Bol:function(Xi){var HW=false;if(Xi<10)Xi=
10;if(Xi>256)Xi=256;Xi=Xi-10;if((Xi>0)&&!this.Aib){this.Aib=A._NewObject(C.ABI,0
);HW=true;}if(!Xi&&!!this.Aib){this.Aib=null;HW=true;}var BC=this.Aib;while(Xi>0
){if((Xi>20)&&!BC.Ah){BC.Ah=A._NewObject(C.ABI,0);HW=true;}Xi=Xi-20;if(Xi>0)BC=BC.
Ah;}if(!!BC&&!!BC.Ah){BC.Ah=null;HW=true;}if(HW){this.AJS();A.we(this,1);}},BiC:
function(){var CD=10;var BC=this.Aib;while(!!BC){CD=CD+20;BC=BC.Ah;}return CD;},
_Init:function(aArg){(this.Aph=[]).__proto__=C.AttrSet.Aph;(this.Xn=[]).__proto__=
C.AttrSet.Xn;(this.Azc=[]).__proto__=C.AttrSet.Azc;this.__proto__=C.AttrSet;this.
Aph.Set(0,A.aaL(A.aci.ACp));this.Xn.Set(0,A.aaL(A.aci.TJ));this.A6h=A.aaL(A.aci.
ACp);this.A49=A.aaL(A.aci.TJ);A.h7++;},_Done:function(){this.Lb();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Aic)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aib)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Aph,D);A.aa6(this.Xn,D
);if((B=this.A6h)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A49)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.ABJ={Ah:null,KD:A.abi(
20,null,null),_Init:function(aArg){(this.KD=[]).__proto__=C.ABJ.KD;this.__proto__=
C.ABJ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.KD,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.ABH={Ah:null,KD:A.abi(20,null,null),
_Init:function(aArg){(this.KD=[]).__proto__=C.ABH.KD;this.__proto__=C.ABH;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KD,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.ABI={Ah:null,KD:A.abi(20,0,null),_Init:function(aArg
){(this.KD=[]).__proto__=C.ABI.KD;this.__proto__=C.ABI;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hv={path:null,Lb:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adt:function(G){A.we(this,0);},Ff:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adt
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A4y:
function(aSubPathNo,aX,aY){A.pe([this,this.Adt],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},VJ:function(aSubPathNo){A.
pe([this,this.Adt],this);var handle=this.path;A.jU(handle,aSubPathNo);},VB:function(
aSubPathNo,aX,aY){A.pe([this,this.Adt],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jq:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Axp(1);A.pe([this,this.Adt],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BiE:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Axp:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BiE()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adt],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hv;A.h7++;},_Done:function(){
this.Lb();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.AuY={Left:0x1,ZR:0x2,Right:0x4,A4_:0x8,BDW:0x10
};C.BDy={BDm:0,BEu:1};C.BEC={BCI:0,BEg:1,Bn3:2};C.BEB={BDA:0,BFi:1,Bn3:2,AxL:3};
C.BCA={BCz:0,BFd:1,BEG:2,BEH:3,BEJ:4,BEI:5};C.AMH={NL:360,JT:0,In:0,Q$:0,Ajb:function(
G){var B;var Fy=this.NL;var FO;if((Fy>=360)||(Fy<=-360))Fy=360;this.Axp(2);{var Az=
Math.max(this.In,this.JT);FO=1+((90/((Math.acos(1-(0.5/(Az+1)))*A.rE)|0))|0);FO*=
4;if(Fy<360)FO=((Fy*FO)/360)|0;FO=Math.max(FO,-FO,1);}if(((!Fy||!this.In)||!this.
JT)||(((((this.Q$===2)||(this.Q$===3))||(this.Q$===4))||(this.Q$===5))&&((0>=this.
In)||(0>=this.JT)))){this.Jq(0,0);this.Jq(1,0);return;}if(Fy===360){this.Jq(0,FO+
1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JT,0,360,FO);this.VJ(0);return;}if(!this.
Q$){this.Jq(0,FO+1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);return;}
if(this.Q$===1){this.Jq(0,FO+1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JT,0,Fy,
FO);this.VJ(0);return;}if(this.Q$===2){this.Jq(0,FO+1);this.Jq(1,0);this.VB(0,0,
0);this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.VJ(0);return;}if(this.Q$===4){var
On=this.In;var LF=Math.sqrt(On*On);var Tj=((LF*0.25)|0)+3;this.Jq(0,(FO+Tj)+2);this.
Jq(1,0);this.VB(0,0,0);if(Fy>=0)this.Ff(0,On/2,0,LF/2,LF/2,180,360,Tj);else this.
Ff(0,On/2,0,LF/2,LF/2,180,0,Tj);this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.VJ(0
);return;}if(this.Q$===5){var Jz=Fy;var On=this.In*Math.cos(Jz*A.k$);var AiO=this.
JT*Math.sin(Jz*A.k$);var LF=Math.sqrt((On*On)+(AiO*AiO));var Tj=((LF*0.25)|0)+3;
this.Jq(0,(FO+Tj)+2);this.Jq(1,0);this.VB(0,0,0);this.Ff(0,0,0,this.In,this.JT,0
,Fy,FO);if(Fy>=0)this.Ff(0,On/2,AiO/2,LF/2,LF/2,Jz,Jz+180,Tj);else this.Ff(0,On/
2,AiO/2,LF/2,LF/2,Jz,Jz-180,Tj);this.VJ(0);return;}if(this.Q$===3){var Ai8=this.
In;var AdD=Math.sqrt(Ai8*Ai8);var Jz=Fy;var Aiq=this.In*Math.cos(Jz*A.k$);var Air=
this.JT*Math.sin(Jz*A.k$);var Adc=Math.sqrt((Aiq*Aiq)+(Air*Air));var ApB=((AdD*0.25
)|0)+3;var ApA=((Adc*0.25)|0)+3;this.Jq(0,((FO+ApB)+ApA)+10);this.Jq(1,0);this.VB(
0,0,0);if(Fy>=0){this.Ff(0,Ai8/2,0,AdD/2,AdD/2,180,360,ApB);this.Ff(0,0,0,this.In
,this.JT,0,Fy,FO);this.Ff(0,Aiq/2,Air/2,Adc/2,Adc/2,Jz,Jz+180,ApA);}else{this.Ff(
0,Ai8/2,0,AdD/2,AdD/2,180,0,ApB);this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.Ff(
0,Aiq/2,Air/2,Adc/2,Adc/2,Jz,Jz-180,ApA);}this.VJ(0);return;}if(this.Q$===2){this.
Jq(0,(FO*2)+1);this.Jq(1,0);this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.Ff(0,0,0
,0,0,this.NL,this.NL-Fy,FO);this.VJ(0);return;}if(this.Q$===4){var On=this.In;var
LF=Math.sqrt(On*On);var Tj=((LF*0.25)|0)+3;this.Jq(0,((FO*2)+Tj)+2);this.Jq(1,0);
if(Fy>=0){this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.Ff(0,0,0,0,0,this.NL,this.
NL-Fy,FO);this.Ff(0,On/2,0,LF/2,LF/2,180,360,Tj);}else{this.Ff(0,0,0,this.In,this.
JT,0,Fy,FO);this.Ff(0,0,0,0,0,this.NL,this.NL-Fy,FO);this.Ff(0,On/2,0,LF/2,LF/2,
180,0,Tj);}this.VJ(0);return;}if(this.Q$===5){var Jz=Fy;var sin=Math.sin(Jz*A.k$
);var cos=Math.cos(Jz*A.k$);var On=this.In*cos;var AiO=this.JT*sin;var LF=Math.sqrt((
On*On)+(AiO*AiO));var Tj=((LF*0.25)|0)+3;this.Jq(0,((FO*2)+Tj)+2);this.Jq(1,0);if(
Fy>=0){this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.Ff(0,On/2,AiO/2,LF/2,LF/2,Jz,
Jz+180,Tj);this.Ff(0,0,0,0,0,this.NL,this.NL-Fy,FO);}else{this.Ff(0,0,0,this.In,
this.JT,0,Fy,FO);this.Ff(0,On/2,AiO/2,LF/2,LF/2,Jz,Jz-180,Tj);this.Ff(0,0,0,0,0,
this.NL,this.NL-Fy,FO);}this.VJ(0);return;}if(this.Q$===3){var Jz=Fy;var ByG=Math.
sin(Jz*A.k$);var ByB=Math.cos(Jz*A.k$);var Ai8=this.In;var Aiq=this.In*ByB;var Air=
this.JT*ByG;var AdD=Math.sqrt(Ai8*Ai8);var Adc=Math.sqrt((Aiq*Aiq)+(Air*Air));var
ApB=((AdD*0.25)|0)+3;var ApA=((Adc*0.25)|0)+3;this.Jq(0,(((FO*2)+ApB)+ApA)+4);this.
Jq(1,0);if(Fy>=0){this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.Ff(0,Aiq/2,Air/2,Adc
/2,Adc/2,Jz,Jz+180,ApA);this.Ff(0,0,0,0,0,this.NL,this.NL-Fy,FO);this.Ff(0,Ai8/2
,0,AdD/2,AdD/2,180,360,ApB);}else{this.Ff(0,0,0,this.In,this.JT,0,Fy,FO);this.Ff(
0,Aiq/2,Air/2,Adc/2,Adc/2,Jz,Jz-180,ApA);this.Ff(0,0,0,0,0,this.NL,this.NL-Fy,FO
);this.Ff(0,Ai8/2,0,AdD/2,AdD/2,180,0,ApB);}this.VJ(0);return;}},BlG:function(E){
if(E===this.NL)return;this.NL=E;if((this.In>0)&&(this.JT>0))A.pe([this,this.Ajb]
,this);},BmW:function(E){if((E===this.In)&&(E===this.JT))return;this.In=E;this.JT=
E;if(!!this.NL)A.pe([this,this.Ajb],this);},Bm6:function(E){if(E===this.Q$)return;
this.Q$=E;if((!!this.NL&&(this.In>0))&&(this.JT>0))A.pe([this,this.Ajb],this);},
_Init:function(aArg){C.Hv._Init.call(this,aArg);this.__proto__=C.AMH;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMH.__proto__=C.Hv;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */