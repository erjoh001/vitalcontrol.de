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
var Ca=[0,0];var BC="Can not resize explicitly attached graphics engine bitmaps";
var EW=[0,0,0,0];var Hh="No graphics engine bitmap attached to this canvas";var I8=
"The canvas is already initialized with a graphics engine bitmap";var IJ="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OW="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PW="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PX=[1,1];var CL=[2,2];var E4="Missing matrices to interpolate";
C.Canvas={CW:null,ADM:null,QA:A.wg,Pn:0,Ayo:false,K9:function(){if(this.Ayo)this.
DetachBitmap();},Init:function(aArg){this.OH=true;},Ari:function(E){if((E[0]<=0)||(
E[1]<=0))E=Ca;if(A.aaX(E,this.FrameSize))return;if(this.Ayo)throw new Error(BC);
this.FrameSize=E;this.Ve=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Ca;this.FrameDelay=0;this.NoOfFrames=1;}this.QA=[].concat(
Ca,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pn;for(this.Pn=this.NoOfFrames-
1;this.Pn>=0;this.Pn--)this.AuI(this.QA,this.QA,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pn=dstFrameNr;}}if(!(((B=this.QA)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.ADM)?B[1].call(B[0],
this):null;this.QA=EW;}},DetachBitmap:function(){if(!this.Ayo)throw new Error(Hh
);this.bitmap=null;this.Ayo=false;this.FrameSize=Ca;this.FrameDelay=0;this.NoOfFrames=
1;this.Ve=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I8);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ayo=true;var noOfFrames=
1;var frameSize=Ca;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Ve=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BgZ:function(aClip,Aod,BaP,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aod){Aod.AiU();attrSet=Aod.attrSet;}if(
!!BaP)attrString=BaP.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pn;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5u:function(
aClip,Afn,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,AZ$,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!Afn||!Afn.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(AZ$===1)orient=90;else if(AZ$===2)orient=180;else if(AZ$===
3)orient=270;var dstFrameNo=this.Pn;var dstBitmap=this.bitmap;var srcFont=Afn.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bg1:function(aClip
,aBitmap,aFrameNr,aDstRect,AsO,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!AsO)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pn;var srcRect=[].concat(
Ca,aBitmap.FrameSize);var left=((AsO&0x1)===0x1);var top=((AsO&0x2)===0x2);var right=((
AsO&0x4)===0x4);var bottom=((AsO&0x8)===0x8);var interior=((AsO&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hf:function(aClip
,Aok,aDstRect,aFlipY,aOffset,aWidth,Bwn,Bvx,BvT,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!Aok||!Aok.path)return;var style=0;switch(Bwn){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bvx){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BvT){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pn;var path=Aok.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},Ahx:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",IJ);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pn;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bnh:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,OW);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pn;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A41:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pn;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ad3:function(aClip,Aok,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BvB){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!Aok||!Aok.path)return;var nonZeroWinding=BvB===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pn;var path=Aok.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bg2:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pn;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AuI:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pn;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bg4:function(aClip,aDstPos1,aDstPos2,Bwt,Bwu,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Af4=Bwt;var Af5=Bwu;var Add=aDstPos1;
var Ade=aDstPos2;if(A.aaX(Add,Ade))return;if(Af4<=1)Af4=1;if(Af5<=1)Af5=1;var Aig=
Af4/2;var Aih=Af5/2;var AoW=Add[0];var AoX=Add[1];var AoY=Ade[0];var AoZ=Ade[1];
var JW=AoY-AoW;var JX=AoZ-AoX;var IN=Math.sqrt((JW*JW)+(JX*JX));if(((Af4>4096)||(
Af5>4096))||(IN>4096)){A.ab5("%s",PW);return;}JW=JW/IN;JX=JX/IN;var x1=AoW+(JX*Aig
);var y1=AoX-(JW*Aig);var x2=AoY+(JX*Aih);var y2=AoZ-(JW*Aih);var x3=AoY-(JX*Aih
);var y3=AoZ+(JW*Aih);var x4=AoW-(JX*Aig);var y4=AoX+(JW*Aig);var Bel=A.aaL(A.aci.
Asi);var srcRect=[].concat(PX,A.abe(Bel.FrameSize,CL));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pn;var srcBitmap=Bel.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Aut:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pn;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K9();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.CW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ADM)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Axf={VT:1,VU:0,YE:0,YF:
0,VV:0,VX:1,YG:0,YH:0,QK:0,QL:0,YI:1,VY:0,TW:0,TX:0,YJ:0,VZ:1,UB:0,PU:0,PT:0,Agw:
0,Alo:true,ABh:function(aX,aY){var U7=((aX*this.QK)+(aY*this.QL))+this.VY;var BU=((
aX*this.TW)+(aY*this.TX))+this.VZ;if(!!BU&&(BU!==1))U7=U7/BU;this.UB=U7;return true;
},AeN:function(aX,aY){var As$=this.Agw;if(As$<0)return false;var Eg=((aX*this.VT
)+(aY*this.VU))+this.YF;var Da=((aX*this.VV)+(aY*this.VX))+this.YH;var U7=((aX*this.
QK)+(aY*this.QL))+this.VY;var BU=((aX*this.TW)+(aY*this.TX))+this.VZ;var AAa=1;if(
!!BU&&(BU!==1)){Eg=Eg/BU;Da=Da/BU;U7=U7/BU;}if(As$!==-U7)AAa=1/(U7+As$);if(!!As$
)AAa=AAa*As$;this.PT=Eg*AAa;this.PU=Da*AAa;this.UB=U7+As$;return true;},Bib:function(
G2,O1,P3){if(!G2||!O1)throw new Error(E4);this.VT=G2.VT+((O1.VT-G2.VT)*P3);this.
VU=G2.VU+((O1.VU-G2.VU)*P3);this.YE=G2.YE+((O1.YE-G2.YE)*P3);this.YF=G2.YF+((O1.
YF-G2.YF)*P3);this.VV=G2.VV+((O1.VV-G2.VV)*P3);this.VX=G2.VX+((O1.VX-G2.VX)*P3);
this.YG=G2.YG+((O1.YG-G2.YG)*P3);this.YH=G2.YH+((O1.YH-G2.YH)*P3);this.QK=G2.QK+((
O1.QK-G2.QK)*P3);this.QL=G2.QL+((O1.QL-G2.QL)*P3);this.YI=G2.YI+((O1.YI-G2.YI)*P3
);this.VY=G2.VY+((O1.VY-G2.VY)*P3);this.TW=G2.TW+((O1.TW-G2.TW)*P3);this.TX=G2.TX+((
O1.TX-G2.TX)*P3);this.YJ=G2.YJ+((O1.YJ-G2.YJ)*P3);this.VZ=G2.VZ+((O1.VZ-G2.VZ)*P3
);this.Agw=G2.Agw+((O1.Agw-G2.Agw)*P3);this.Alo=false;return this;},AeT:function(
AIw,AIx,AIy){this.VT=this.VT*AIw;this.VU=this.VU*AIx;this.YE=this.YE*AIy;this.VV=
this.VV*AIw;this.VX=this.VX*AIx;this.YG=this.YG*AIy;this.QK=this.QK*AIw;this.QL=
this.QL*AIx;this.YI=this.YI*AIy;this.TW=this.TW*AIw;this.TX=this.TX*AIx;this.YJ=
this.YJ*AIy;this.Alo=false;return this;},BoB:function(AIp,AIq,AIr){this.YF=((this.
YF+(this.VT*AIp))+(this.VU*AIq))+(this.YE*AIr);this.YH=((this.YH+(this.VV*AIp))+(
this.VX*AIq))+(this.YG*AIr);this.VY=((this.VY+(this.QK*AIp))+(this.QL*AIq))+(this.
YI*AIr);this.VZ=((this.VZ+(this.TW*AIp))+(this.TX*AIq))+(this.YJ*AIr);this.Alo=false;
return this;},AC_:function(){return this.Alo||((((((((((((((((this.VT===1)&&!this.
VU)&&!this.YE)&&!this.YF)&&!this.VV)&&(this.VX===1))&&!this.YG)&&!this.YH)&&!this.
QK)&&!this.QL)&&(this.YI===1))&&!this.VY)&&!this.TW)&&!this.TX)&&!this.YJ)&&(this.
VZ===1));},AM8:function(AhP,AhS,AhQ,AhT,Aos,Aot,AhR,AhU){var AyQ=AhQ-Aos;var AyS=
AhT-Aot;var AyR=AhR-Aos;var AyT=AhU-Aot;var AAu=((AhP-AhQ)+Aos)-AhR;var AAv=((AhS-
AhT)+Aot)-AhU;var AoH=(AyQ*AyT)-(AyS*AyR);if(!AoH)return null;this.QK=((AAu*AyT)-(
AAv*AyR))/AoH;this.QL=((AyQ*AAv)-(AyS*AAu))/AoH;this.YI=0;this.VY=1;this.VT=(AhQ-
AhP)+(this.QK*AhQ);this.VU=(AhR-AhP)+(this.QL*AhR);this.YE=0;this.YF=AhP;this.VV=(
AhT-AhS)+(this.QK*AhT);this.VX=(AhU-AhS)+(this.QL*AhU);this.YG=0;this.YH=AhS;this.
TW=0;this.TX=0;this.YJ=0;this.VZ=1;this.Alo=false;return this;},Bf8:function(L0){
if(!L0)return this;this.VT=L0.VT;this.VU=L0.VU;this.YE=L0.YE;this.YF=L0.YF;this.
VV=L0.VV;this.VX=L0.VX;this.YG=L0.YG;this.YH=L0.YH;this.QK=L0.QK;this.QL=L0.QL;this.
YI=L0.YI;this.VY=L0.VY;this.TW=L0.TW;this.TX=L0.TX;this.YJ=L0.YJ;this.VZ=L0.VZ;this.
Alo=L0.Alo;this.Agw=L0.Agw;return this;},A6O:function(){this.VT=1;this.VU=0;this.
YE=0;this.YF=0;this.VV=0;this.VX=1;this.YG=0;this.YH=0;this.QK=0;this.QL=0;this.
YI=1;this.VY=0;this.TW=0;this.TX=0;this.YJ=0;this.VZ=1;this.Alo=true;return this;
},_Init:function(aArg){this.__proto__=C.Axf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A6w={Bcv:1,Bcw:0,Bcx:0,Bcy:0,Bcz:1,BcA:0,BcB:0,BcC:0,BcD:1,PU:0,PT:0,A1y:false
,AeN:function(E6){if(!this.A1y)return false;var A3J=E6[0];var A3L=E6[1];var BBa=((
A3J*this.Bcv)+(A3L*this.Bcw))+this.Bcx;var BBb=((A3J*this.Bcy)+(A3L*this.Bcz))+this.
BcA;var A2V=((A3J*this.BcB)+(A3L*this.BcC))+this.BcD;if(!!A2V){this.PT=BBa/A2V;this.
PU=BBb/A2V;return true;}return false;},AM8:function(AhP,AhS,AhQ,AhT,Aos,Aot,AhR,
AhU){var AyQ=AhQ-Aos;var AyS=AhT-Aot;var AyR=AhR-Aos;var AyT=AhU-Aot;var AAu=((AhP-
AhQ)+Aos)-AhR;var AAv=((AhS-AhT)+Aot)-AhU;var AoH=(AyQ*AyT)-(AyS*AyR);this.A1y=false;
if(!AoH)return;var Aii=((AAu*AyT)-(AAv*AyR))/AoH;var BH=((AyQ*AAv)-(AyS*AAu))/AoH;
var a=(AhQ-AhP)+(Aii*AhQ);var Ri=(AhR-AhP)+(BH*AhR);var B2=AhP;var d=(AhT-AhS)+(
Aii*AhT);var AJi=(AhU-AhS)+(BH*AhU);var LD=AhS;this.Bcv=AJi-(LD*BH);this.Bcw=(B2
*BH)-Ri;this.Bcx=(Ri*LD)-(B2*AJi);this.Bcy=(LD*Aii)-d;this.Bcz=a-(B2*Aii);this.BcA=(
B2*d)-(a*LD);this.BcB=(d*BH)-(AJi*Aii);this.BcC=(Ri*Aii)-(a*BH);this.BcD=(a*AJi)-(
Ri*d);this.A1y=true;},_Init:function(aArg){this.__proto__=C.A6w;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A4h={CZ:A.wf,attrString:null,K9:function(){this.A5f(
);},A5f:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.CZ=Ca;},AjJ:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BhV:function(
){return this.CZ;},BmH:function(Aod,aString,aWidth,aEnableBidiText){this.A5f();var
attrSet=null;var handle=null;var s=Ca;if(!!Aod){Aod.AiU();attrSet=Aod.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.CZ=s;},_Init:function(
aArg){this.__proto__=C.A4h;A.h7++;},_Done:function(){this.K9();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={AhW:null,Afy:null,AhV:null,AoU:A.abi(4,null,null),W6:A.abi(10,null,
null),A5O:null,A4F:null,attrSet:null,AyA:A.abi(10,0,{0:0xFF000000}),K9:function(
){this.AJg();},AJg:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},AiU:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.BhM();var noOfBitmaps=this.BhL();var noOfFonts=this.BhN();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AJP=this.AhV;var Ac7=this.Afy;var AJQ=this.AhW;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.AyA.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AJP){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AJP.Kx.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AJP=AJP.Ag;}for(inx=0;inx<10;
inx=inx+1){var entry=this.W6.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Ac7){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Ac7.Kx.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Ac7=Ac7.Ag;}for(inx=0;inx<4;inx=inx+1){var entry=this.
AoU.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AJQ
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AJQ.Kx.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AJQ=AJQ.Ag;}},AJ1:function(G){var handle=
this.attrSet;var Ac7=this.Afy;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
W6.Get(inx)&&this.W6.Get(inx).OH){var bitmap=this.W6.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Ac7){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Ac7.Kx.Get(lnx)&&Ac7.
Kx.Get(lnx).OH){var bitmap=Ac7.Kx.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Ac7=Ac7.Ag;}A.we(this,1);},Bll:function(E){this.ATP(3,E);},A9b:function(
E){this.ATP(1,E);},Ag6:function(E){this.ATP(0,E);},A8T:function(E){this.Bnr(0,E);
},BkC:function(E){this.AFU(3,E);},A8X:function(E){this.AFU(2,E);},A8W:function(E
){this.AFU(1,E);},Ag3:function(E){this.AFU(0,E);},ATP:function(aFontNo,Afn){var Ac2=
aFontNo;var HR=false;if(Ac2<0)return;if(Ac2<4){HR=this.AoU.Get(Ac2)!==Afn;this.AoU.
Set(Ac2,Afn);}else{var Bz=this.AhW;Ac2=Ac2-4;while(!!Bz&&(Ac2>=20)){Bz=Bz.Ag;Ac2=
Ac2-20;}if(!!Bz){HR=Bz.Kx.Get(Ac2)!==Afn;Bz.Kx.Set(Ac2,Afn);}}if(HR&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!Afn)font=Afn.font;A.abG(handle,aFontNo
,font);}if(HR)A.we(this,1);},Bnx:function(W2){var HR=false;if(W2<4)W2=4;if(W2>256
)W2=256;W2=W2-4;if((W2>0)&&!this.AhW){this.AhW=A._NewObject(C.AA7,0);HR=true;}if(
!W2&&!!this.AhW){this.AhW=null;HR=true;}var Bz=this.AhW;while(W2>0){if((W2>20)&&
!Bz.Ag){Bz.Ag=A._NewObject(C.AA7,0);HR=true;}W2=W2-20;if(W2>0)Bz=Bz.Ag;}if(!!Bz&&
!!Bz.Ag){Bz.Ag=null;HR=true;}if(HR){this.AJg();A.we(this,1);}},BhN:function(){var
CA=4;var Bz=this.AhW;while(!!Bz){CA=CA+20;Bz=Bz.Ag;}return CA;},Bnr:function(aBitmapNo
,aBitmap){var P6=aBitmapNo;var HR=false;if(P6<0)return;if(P6<10){HR=this.W6.Get(
P6)!==aBitmap;if(!!this.W6.Get(P6)&&this.W6.Get(P6).OH)A.z9([this,this.AJ1],this.
W6.Get(P6),0);this.W6.Set(P6,aBitmap);if(!!aBitmap&&aBitmap.OH)A.zV([this,this.AJ1
],aBitmap,0);}else{var Bz=this.Afy;P6=P6-10;while(!!Bz&&(P6>=20)){Bz=Bz.Ag;P6=P6-
20;}if(!!Bz){HR=Bz.Kx.Get(P6)!==aBitmap;if(!!Bz.Kx.Get(P6)&&Bz.Kx.Get(P6).OH)A.z9([
this,this.AJ1],Bz.Kx.Get(P6),0);Bz.Kx.Set(P6,aBitmap);if(!!aBitmap&&aBitmap.OH)A.
zV([this,this.AJ1],aBitmap,0);}}if(HR&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HR)A.we(this,1);},Bnv:function(W0){var HR=false;if(W0<10)W0=10;if(W0>
256)W0=256;W0=W0-10;if((W0>0)&&!this.Afy){this.Afy=A._NewObject(C.AA5,0);HR=true;
}if(!W0&&!!this.Afy){this.Afy=null;HR=true;}var Bz=this.Afy;while(W0>0){if((W0>20
)&&!Bz.Ag){Bz.Ag=A._NewObject(C.AA5,0);HR=true;}W0=W0-20;if(W0>0)Bz=Bz.Ag;}if(!!
Bz&&!!Bz.Ag){Bz.Ag=null;HR=true;}if(HR){this.AJg();A.we(this,1);}},BhL:function(
){var CA=10;var Bz=this.Afy;while(!!Bz){CA=CA+20;Bz=Bz.Ag;}return CA;},AFU:function(
aColorNo,aColor){var AcS=aColorNo;var HR=false;if(AcS<0)return;if(AcS<10){HR=this.
AyA.Get(AcS)!==aColor;this.AyA.Set(AcS,aColor);}else{var Bz=this.AhV;AcS=AcS-10;
while(!!Bz&&(AcS>=20)){Bz=Bz.Ag;AcS=AcS-20;}if(!!Bz){HR=Bz.Kx.Get(AcS)!==aColor;
Bz.Kx.Set(AcS,aColor);}}if(HR&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HR)A.we(this,0);},Bnw:function(W1){var HR=false;if(W1<10)W1=
10;if(W1>256)W1=256;W1=W1-10;if((W1>0)&&!this.AhV){this.AhV=A._NewObject(C.AA6,0
);HR=true;}if(!W1&&!!this.AhV){this.AhV=null;HR=true;}var Bz=this.AhV;while(W1>0
){if((W1>20)&&!Bz.Ag){Bz.Ag=A._NewObject(C.AA6,0);HR=true;}W1=W1-20;if(W1>0)Bz=Bz.
Ag;}if(!!Bz&&!!Bz.Ag){Bz.Ag=null;HR=true;}if(HR){this.AJg();A.we(this,1);}},BhM:
function(){var CA=10;var Bz=this.AhV;while(!!Bz){CA=CA+20;Bz=Bz.Ag;}return CA;},
_Init:function(aArg){(this.AoU=[]).__proto__=C.AttrSet.AoU;(this.W6=[]).__proto__=
C.AttrSet.W6;(this.AyA=[]).__proto__=C.AttrSet.AyA;this.__proto__=C.AttrSet;this.
AoU.Set(0,A.aaL(A.aci.ABN));this.W6.Set(0,A.aaL(A.aci.Tz));this.A5O=A.aaL(A.aci.
ABN);this.A4F=A.aaL(A.aci.Tz);A.h7++;},_Done:function(){this.K9();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AhW)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Afy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AhV)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.AoU,D);A.aa6(this.W6,D
);if((B=this.A5O)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4F)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.AA7={Ag:null,Kx:A.abi(
20,null,null),_Init:function(aArg){(this.Kx=[]).__proto__=C.AA7.Kx;this.__proto__=
C.AA7;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.Kx,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.AA5={Ag:null,Kx:A.abi(20,null,null),
_Init:function(aArg){(this.Kx=[]).__proto__=C.AA5.Kx;this.__proto__=C.AA5;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Kx,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.AA6={Ag:null,Kx:A.abi(20,0,null),_Init:function(aArg
){(this.Kx=[]).__proto__=C.AA6.Kx;this.__proto__=C.AA6;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hp={path:null,K9:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Adb:function(G){A.we(this,0);},E_:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Adb
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A3X:
function(aSubPathNo,aX,aY){A.pe([this,this.Adb],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},Vq:function(aSubPathNo){A.
pe([this,this.Adb],this);var handle=this.path;A.jU(handle,aSubPathNo);},Vi:function(
aSubPathNo,aX,aY){A.pe([this,this.Adb],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Ji:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
AwP(1);A.pe([this,this.Adb],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},BhO:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,AwP:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.BhO()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Adb],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hp;A.h7++;},_Done:function(){
this.K9();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Auu={Left:0x1,Zr:0x2,Right:0x4,A4G:0x8,BCP:0x10
};C.BCq={BCe:0,BDn:1};C.BDv={BBA:0,BC$:1,Bnc:2};C.BDu={BCs:0,BEc:1,Bnc:2,Aw_:3};
C.BBs={BBr:0,BD8:1,BDz:2,BDA:3,BDC:4,BDB:5};C.AL5={NF:360,JM:0,Ik:0,Q2:0,AiV:function(
G){var B;var Fo=this.NF;var FI;if((Fo>=360)||(Fo<=-360))Fo=360;this.AwP(2);{var Ay=
Math.max(this.Ik,this.JM);FI=1+((90/((Math.acos(1-(0.5/(Ay+1)))*A.rE)|0))|0);FI*=
4;if(Fo<360)FI=((Fo*FI)/360)|0;FI=Math.max(FI,-FI,1);}if(((!Fo||!this.Ik)||!this.
JM)||(((((this.Q2===2)||(this.Q2===3))||(this.Q2===4))||(this.Q2===5))&&((0>=this.
Ik)||(0>=this.JM)))){this.Ji(0,0);this.Ji(1,0);return;}if(Fo===360){this.Ji(0,FI+
1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JM,0,360,FI);this.Vq(0);return;}if(!this.
Q2){this.Ji(0,FI+1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);return;}
if(this.Q2===1){this.Ji(0,FI+1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JM,0,Fo,
FI);this.Vq(0);return;}if(this.Q2===2){this.Ji(0,FI+1);this.Ji(1,0);this.Vi(0,0,
0);this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.Vq(0);return;}if(this.Q2===4){var
Ol=this.Ik;var LA=Math.sqrt(Ol*Ol);var S$=((LA*0.25)|0)+3;this.Ji(0,(FI+S$)+2);this.
Ji(1,0);this.Vi(0,0,0);if(Fo>=0)this.E_(0,Ol/2,0,LA/2,LA/2,180,360,S$);else this.
E_(0,Ol/2,0,LA/2,LA/2,180,0,S$);this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.Vq(0
);return;}if(this.Q2===5){var Js=Fo;var Ol=this.Ik*Math.cos(Js*A.k$);var Aix=this.
JM*Math.sin(Js*A.k$);var LA=Math.sqrt((Ol*Ol)+(Aix*Aix));var S$=((LA*0.25)|0)+3;
this.Ji(0,(FI+S$)+2);this.Ji(1,0);this.Vi(0,0,0);this.E_(0,0,0,this.Ik,this.JM,0
,Fo,FI);if(Fo>=0)this.E_(0,Ol/2,Aix/2,LA/2,LA/2,Js,Js+180,S$);else this.E_(0,Ol/
2,Aix/2,LA/2,LA/2,Js,Js-180,S$);this.Vq(0);return;}if(this.Q2===3){var AiQ=this.
Ik;var Adl=Math.sqrt(AiQ*AiQ);var Js=Fo;var Ah_=this.Ik*Math.cos(Js*A.k$);var Ah$=
this.JM*Math.sin(Js*A.k$);var AcX=Math.sqrt((Ah_*Ah_)+(Ah$*Ah$));var Apc=((Adl*0.25
)|0)+3;var Apb=((AcX*0.25)|0)+3;this.Ji(0,((FI+Apc)+Apb)+10);this.Ji(1,0);this.Vi(
0,0,0);if(Fo>=0){this.E_(0,AiQ/2,0,Adl/2,Adl/2,180,360,Apc);this.E_(0,0,0,this.Ik
,this.JM,0,Fo,FI);this.E_(0,Ah_/2,Ah$/2,AcX/2,AcX/2,Js,Js+180,Apb);}else{this.E_(
0,AiQ/2,0,Adl/2,Adl/2,180,0,Apc);this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.E_(
0,Ah_/2,Ah$/2,AcX/2,AcX/2,Js,Js-180,Apb);}this.Vq(0);return;}if(this.Q2===2){this.
Ji(0,(FI*2)+1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.E_(0,0,0
,0,0,this.NF,this.NF-Fo,FI);this.Vq(0);return;}if(this.Q2===4){var Ol=this.Ik;var
LA=Math.sqrt(Ol*Ol);var S$=((LA*0.25)|0)+3;this.Ji(0,((FI*2)+S$)+2);this.Ji(1,0);
if(Fo>=0){this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.E_(0,0,0,0,0,this.NF,this.
NF-Fo,FI);this.E_(0,Ol/2,0,LA/2,LA/2,180,360,S$);}else{this.E_(0,0,0,this.Ik,this.
JM,0,Fo,FI);this.E_(0,0,0,0,0,this.NF,this.NF-Fo,FI);this.E_(0,Ol/2,0,LA/2,LA/2,
180,0,S$);}this.Vq(0);return;}if(this.Q2===5){var Js=Fo;var sin=Math.sin(Js*A.k$
);var cos=Math.cos(Js*A.k$);var Ol=this.Ik*cos;var Aix=this.JM*sin;var LA=Math.sqrt((
Ol*Ol)+(Aix*Aix));var S$=((LA*0.25)|0)+3;this.Ji(0,((FI*2)+S$)+2);this.Ji(1,0);if(
Fo>=0){this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.E_(0,Ol/2,Aix/2,LA/2,LA/2,Js,
Js+180,S$);this.E_(0,0,0,0,0,this.NF,this.NF-Fo,FI);}else{this.E_(0,0,0,this.Ik,
this.JM,0,Fo,FI);this.E_(0,Ol/2,Aix/2,LA/2,LA/2,Js,Js-180,S$);this.E_(0,0,0,0,0,
this.NF,this.NF-Fo,FI);}this.Vq(0);return;}if(this.Q2===3){var Js=Fo;var BxB=Math.
sin(Js*A.k$);var Bxw=Math.cos(Js*A.k$);var AiQ=this.Ik;var Ah_=this.Ik*Bxw;var Ah$=
this.JM*BxB;var Adl=Math.sqrt(AiQ*AiQ);var AcX=Math.sqrt((Ah_*Ah_)+(Ah$*Ah$));var
Apc=((Adl*0.25)|0)+3;var Apb=((AcX*0.25)|0)+3;this.Ji(0,(((FI*2)+Apc)+Apb)+4);this.
Ji(1,0);if(Fo>=0){this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.E_(0,Ah_/2,Ah$/2,AcX
/2,AcX/2,Js,Js+180,Apb);this.E_(0,0,0,0,0,this.NF,this.NF-Fo,FI);this.E_(0,AiQ/2
,0,Adl/2,Adl/2,180,360,Apc);}else{this.E_(0,0,0,this.Ik,this.JM,0,Fo,FI);this.E_(
0,Ah_/2,Ah$/2,AcX/2,AcX/2,Js,Js-180,Apb);this.E_(0,0,0,0,0,this.NF,this.NF-Fo,FI
);this.E_(0,AiQ/2,0,Adl/2,Adl/2,180,0,Apc);}this.Vq(0);return;}},BkZ:function(E){
if(E===this.NF)return;this.NF=E;if((this.Ik>0)&&(this.JM>0))A.pe([this,this.AiV]
,this);},Bma:function(E){if((E===this.Ik)&&(E===this.JM))return;this.Ik=E;this.JM=
E;if(!!this.NF)A.pe([this,this.AiV],this);},Bmj:function(E){if(E===this.Q2)return;
this.Q2=E;if((!!this.NF&&(this.Ik>0))&&(this.JM>0))A.pe([this,this.AiV],this);},
_Init:function(aArg){C.Hp._Init.call(this,aArg);this.__proto__=C.AL5;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AL5.__proto__=C.Hp;};C._ReInit=function(
){};C.DB=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */