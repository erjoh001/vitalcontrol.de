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
var Ca=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var EW=[0,0,0,0];var Hh="No graphics engine bitmap attached to this canvas";var I8=
"The canvas is already initialized with a graphics engine bitmap";var IJ="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OT="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PV="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PW=[1,1];var CM=[2,2];var E4="Missing matrices to interpolate";
C.Canvas={CX:null,ADJ:null,QB:A.wg,Pk:0,Ayr:false,K8:function(){if(this.Ayr)this.
DetachBitmap();},Init:function(aArg){this.OE=true;},Ard:function(E){if((E[0]<=0)||(
E[1]<=0))E=Ca;if(A.aaX(E,this.FrameSize))return;if(this.Ayr)throw new Error(BD);
this.FrameSize=E;this.Vf=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Ca;this.FrameDelay=0;this.NoOfFrames=1;}this.QB=[].concat(
Ca,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pk;for(this.Pk=this.NoOfFrames-
1;this.Pk>=0;this.Pk--)this.AuI(this.QB,this.QB,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pk=dstFrameNr;}}if(!(((B=this.QB)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.ADJ)?B[1].call(B[0],
this):null;this.QB=EW;}},DetachBitmap:function(){if(!this.Ayr)throw new Error(Hh
);this.bitmap=null;this.Ayr=false;this.FrameSize=Ca;this.FrameDelay=0;this.NoOfFrames=
1;this.Vf=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I8);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ayr=true;var noOfFrames=
1;var frameSize=Ca;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.Vf=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Bgv:function(aClip,Aob,Bao,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!Aob){Aob.AiQ();attrSet=Aob.attrSet;}if(
!!Bao)attrString=Bao.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pk;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A5d:function(
aClip,Afk,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,AZU,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!Afk||!Afk.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(AZU===1)orient=90;else if(AZU===2)orient=180;else if(AZU===
3)orient=270;var dstFrameNo=this.Pk;var dstBitmap=this.bitmap;var srcFont=Afk.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bgx:function(aClip
,aBitmap,aFrameNr,aDstRect,AsN,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!AsN)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pk;var srcRect=[].concat(
Ca,aBitmap.FrameSize);var left=((AsN&0x1)===0x1);var top=((AsN&0x2)===0x2);var right=((
AsN&0x4)===0x4);var bottom=((AsN&0x8)===0x8);var interior=((AsN&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hf:function(aClip
,Aoi,aDstRect,aFlipY,aOffset,aWidth,BvY,Bu8,Bvs,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!Aoi||!Aoi.path)return;var style=0;switch(BvY){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bu8){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bvs){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pk;var path=Aoi.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},Ahu:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",IJ);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pk;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BmQ:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,OT);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pk;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A4K:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pk;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ad0:function(aClip,Aoi,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bva){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!Aoi||!Aoi.path)return;var nonZeroWinding=Bva===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pk;var path=Aoi.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bgy:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pk;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AuI:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pk;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BgA:function(aClip,aDstPos1,aDstPos2,Bv4,Bv5,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Af0=Bv4;var Af1=Bv5;var Adb=aDstPos1;
var Adc=aDstPos2;if(A.aaX(Adb,Adc))return;if(Af0<=1)Af0=1;if(Af1<=1)Af1=1;var Aic=
Af0/2;var Aid=Af1/2;var AoT=Adb[0];var AoU=Adb[1];var AoV=Adc[0];var AoW=Adc[1];
var JW=AoV-AoT;var JX=AoW-AoU;var IN=Math.sqrt((JW*JW)+(JX*JX));if(((Af0>4096)||(
Af1>4096))||(IN>4096)){A.ab5("%s",PV);return;}JW=JW/IN;JX=JX/IN;var x1=AoT+(JX*Aic
);var y1=AoU-(JW*Aic);var x2=AoV+(JX*Aid);var y2=AoW-(JW*Aid);var x3=AoV-(JX*Aid
);var y3=AoW+(JW*Aid);var x4=AoT-(JX*Aic);var y4=AoU+(JW*Aic);var BdV=A.aaL(A.aci.
Asg);var srcRect=[].concat(PW,A.abe(BdV.FrameSize,CM));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pk;var srcBitmap=BdV.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Aut:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pk;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K8();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.CX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ADJ)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Axh={VV:1,VX:0,YE:0,YF:
0,VY:0,VZ:1,YG:0,YH:0,QL:0,QM:0,YI:1,V0:0,TY:0,TZ:0,YJ:0,V1:1,UD:0,PT:0,PR:0,Agt:
0,Alm:true,ABk:function(aX,aY){var U8=((aX*this.QL)+(aY*this.QM))+this.V0;var BU=((
aX*this.TY)+(aY*this.TZ))+this.V1;if(!!BU&&(BU!==1))U8=U8/BU;this.UD=U8;return true;
},AeK:function(aX,aY){var As_=this.Agt;if(As_<0)return false;var Eg=((aX*this.VV
)+(aY*this.VX))+this.YF;var Da=((aX*this.VY)+(aY*this.VZ))+this.YH;var U8=((aX*this.
QL)+(aY*this.QM))+this.V0;var BU=((aX*this.TY)+(aY*this.TZ))+this.V1;var AAd=1;if(
!!BU&&(BU!==1)){Eg=Eg/BU;Da=Da/BU;U8=U8/BU;}if(As_!==-U8)AAd=1/(U8+As_);if(!!As_
)AAd=AAd*As_;this.PR=Eg*AAd;this.PT=Da*AAd;this.UD=U8+As_;return true;},BhJ:function(
G2,OY,P2){if(!G2||!OY)throw new Error(E4);this.VV=G2.VV+((OY.VV-G2.VV)*P2);this.
VX=G2.VX+((OY.VX-G2.VX)*P2);this.YE=G2.YE+((OY.YE-G2.YE)*P2);this.YF=G2.YF+((OY.
YF-G2.YF)*P2);this.VY=G2.VY+((OY.VY-G2.VY)*P2);this.VZ=G2.VZ+((OY.VZ-G2.VZ)*P2);
this.YG=G2.YG+((OY.YG-G2.YG)*P2);this.YH=G2.YH+((OY.YH-G2.YH)*P2);this.QL=G2.QL+((
OY.QL-G2.QL)*P2);this.QM=G2.QM+((OY.QM-G2.QM)*P2);this.YI=G2.YI+((OY.YI-G2.YI)*P2
);this.V0=G2.V0+((OY.V0-G2.V0)*P2);this.TY=G2.TY+((OY.TY-G2.TY)*P2);this.TZ=G2.TZ+((
OY.TZ-G2.TZ)*P2);this.YJ=G2.YJ+((OY.YJ-G2.YJ)*P2);this.V1=G2.V1+((OY.V1-G2.V1)*P2
);this.Agt=G2.Agt+((OY.Agt-G2.Agt)*P2);this.Alm=false;return this;},AeQ:function(
AIm,AIn,AIo){this.VV=this.VV*AIm;this.VX=this.VX*AIn;this.YE=this.YE*AIo;this.VY=
this.VY*AIm;this.VZ=this.VZ*AIn;this.YG=this.YG*AIo;this.QL=this.QL*AIm;this.QM=
this.QM*AIn;this.YI=this.YI*AIo;this.TY=this.TY*AIm;this.TZ=this.TZ*AIn;this.YJ=
this.YJ*AIo;this.Alm=false;return this;},Bn_:function(AIf,AIg,AIh){this.YF=((this.
YF+(this.VV*AIf))+(this.VX*AIg))+(this.YE*AIh);this.YH=((this.YH+(this.VY*AIf))+(
this.VZ*AIg))+(this.YG*AIh);this.V0=((this.V0+(this.QL*AIf))+(this.QM*AIg))+(this.
YI*AIh);this.V1=((this.V1+(this.TY*AIf))+(this.TZ*AIg))+(this.YJ*AIh);this.Alm=false;
return this;},AC_:function(){return this.Alm||((((((((((((((((this.VV===1)&&!this.
VX)&&!this.YE)&&!this.YF)&&!this.VY)&&(this.VZ===1))&&!this.YG)&&!this.YH)&&!this.
QL)&&!this.QM)&&(this.YI===1))&&!this.V0)&&!this.TY)&&!this.TZ)&&!this.YJ)&&(this.
V1===1));},AMZ:function(AhM,AhP,AhN,AhQ,Aoq,Aor,AhO,AhR){var AyT=AhN-Aoq;var AyV=
AhQ-Aor;var AyU=AhO-Aoq;var AyW=AhR-Aor;var AAx=((AhM-AhN)+Aoq)-AhO;var AAy=((AhP-
AhQ)+Aor)-AhR;var AoE=(AyT*AyW)-(AyV*AyU);if(!AoE)return null;this.QL=((AAx*AyW)-(
AAy*AyU))/AoE;this.QM=((AyT*AAy)-(AyV*AAx))/AoE;this.YI=0;this.V0=1;this.VV=(AhN-
AhM)+(this.QL*AhN);this.VX=(AhO-AhM)+(this.QM*AhO);this.YE=0;this.YF=AhM;this.VY=(
AhQ-AhP)+(this.QL*AhQ);this.VZ=(AhR-AhP)+(this.QM*AhR);this.YG=0;this.YH=AhP;this.
TY=0;this.TZ=0;this.YJ=0;this.V1=1;this.Alm=false;return this;},BfF:function(L0){
if(!L0)return this;this.VV=L0.VV;this.VX=L0.VX;this.YE=L0.YE;this.YF=L0.YF;this.
VY=L0.VY;this.VZ=L0.VZ;this.YG=L0.YG;this.YH=L0.YH;this.QL=L0.QL;this.QM=L0.QM;this.
YI=L0.YI;this.V0=L0.V0;this.TY=L0.TY;this.TZ=L0.TZ;this.YJ=L0.YJ;this.V1=L0.V1;this.
Alm=L0.Alm;this.Agt=L0.Agt;return this;},A6x:function(){this.VV=1;this.VX=0;this.
YE=0;this.YF=0;this.VY=0;this.VZ=1;this.YG=0;this.YH=0;this.QL=0;this.QM=0;this.
YI=1;this.V0=0;this.TY=0;this.TZ=0;this.YJ=0;this.V1=1;this.Alm=true;return this;
},_Init:function(aArg){this.__proto__=C.Axh;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A6f={Bb6:1,Bb7:0,Bb8:0,Bb9:0,Bb_:1,Bb$:0,Bca:0,Bcb:0,Bcc:1,PT:0,PR:0,A1i:false
,AeK:function(E6){if(!this.A1i)return false;var A3r=E6[0];var A3t=E6[1];var BAI=((
A3r*this.Bb6)+(A3t*this.Bb7))+this.Bb8;var BAJ=((A3r*this.Bb9)+(A3t*this.Bb_))+this.
Bb$;var A2D=((A3r*this.Bca)+(A3t*this.Bcb))+this.Bcc;if(!!A2D){this.PR=BAI/A2D;this.
PT=BAJ/A2D;return true;}return false;},AMZ:function(AhM,AhP,AhN,AhQ,Aoq,Aor,AhO,
AhR){var AyT=AhN-Aoq;var AyV=AhQ-Aor;var AyU=AhO-Aoq;var AyW=AhR-Aor;var AAx=((AhM-
AhN)+Aoq)-AhO;var AAy=((AhP-AhQ)+Aor)-AhR;var AoE=(AyT*AyW)-(AyV*AyU);this.A1i=false;
if(!AoE)return;var Aie=((AAx*AyW)-(AAy*AyU))/AoE;var BI=((AyT*AAy)-(AyV*AAx))/AoE;
var a=(AhN-AhM)+(Aie*AhN);var Ri=(AhO-AhM)+(BI*AhO);var B1=AhM;var d=(AhQ-AhP)+(
Aie*AhQ);var AI_=(AhR-AhP)+(BI*AhR);var LC=AhP;this.Bb6=AI_-(LC*BI);this.Bb7=(B1
*BI)-Ri;this.Bb8=(Ri*LC)-(B1*AI_);this.Bb9=(LC*Aie)-d;this.Bb_=a-(B1*Aie);this.Bb$=(
B1*d)-(a*LC);this.Bca=(d*BI)-(AI_*Aie);this.Bcb=(Ri*Aie)-(a*BI);this.Bcc=(a*AI_)-(
Ri*d);this.A1i=true;},_Init:function(aArg){this.__proto__=C.A6f;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A32={C0:A.wf,attrString:null,K8:function(){this.A40(
);},A40:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C0=Ca;},AjI:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},Bhr:function(
){return this.C0;},Bme:function(Aob,aString,aWidth,aEnableBidiText){this.A40();var
attrSet=null;var handle=null;var s=Ca;if(!!Aob){Aob.AiQ();attrSet=Aob.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C0=s;},_Init:function(
aArg){this.__proto__=C.A32;A.h7++;},_Done:function(){this.K8();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={AhT:null,Afv:null,AhS:null,AoR:A.abi(4,null,null),W7:A.abi(10,null,
null),A5x:null,A4o:null,attrSet:null,AyD:A.abi(10,0,{0:0xFF000000}),K8:function(
){this.AI8();},AI8:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},AiQ:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.Bhi();var noOfBitmaps=this.Bhh();var noOfFonts=this.Bhj();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AJF=this.AhS;var Ac5=this.Afv;var AJG=this.AhT;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.AyD.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AJF){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AJF.Kw.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AJF=AJF.Ag;}for(inx=0;inx<10;
inx=inx+1){var entry=this.W7.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!Ac5){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
Ac5.Kw.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;Ac5=Ac5.Ag;}for(inx=0;inx<4;inx=inx+1){var entry=this.
AoR.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AJG
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AJG.Kw.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AJG=AJG.Ag;}},AJR:function(G){var handle=
this.attrSet;var Ac5=this.Afv;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
W7.Get(inx)&&this.W7.Get(inx).OE){var bitmap=this.W7.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!Ac5){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Ac5.Kw.Get(lnx)&&Ac5.
Kw.Get(lnx).OE){var bitmap=Ac5.Kw.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;Ac5=Ac5.Ag;}A.we(this,1);},BkV:function(E){this.ATy(3,E);},A8M:function(
E){this.ATy(1,E);},Ag3:function(E){this.ATy(0,E);},A8s:function(E){this.Bm0(0,E);
},Bka:function(E){this.AFN(3,E);},A8w:function(E){this.AFN(2,E);},A8v:function(E
){this.AFN(1,E);},Ag0:function(E){this.AFN(0,E);},ATy:function(aFontNo,Afk){var Ac0=
aFontNo;var HR=false;if(Ac0<0)return;if(Ac0<4){HR=this.AoR.Get(Ac0)!==Afk;this.AoR.
Set(Ac0,Afk);}else{var BC=this.AhT;Ac0=Ac0-4;while(!!BC&&(Ac0>=20)){BC=BC.Ag;Ac0=
Ac0-20;}if(!!BC){HR=BC.Kw.Get(Ac0)!==Afk;BC.Kw.Set(Ac0,Afk);}}if(HR&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!Afk)font=Afk.font;A.abG(handle,aFontNo
,font);}if(HR)A.we(this,1);},Bm6:function(W2){var HR=false;if(W2<4)W2=4;if(W2>256
)W2=256;W2=W2-4;if((W2>0)&&!this.AhT){this.AhT=A._NewObject(C.AA_,0);HR=true;}if(
!W2&&!!this.AhT){this.AhT=null;HR=true;}var BC=this.AhT;while(W2>0){if((W2>20)&&
!BC.Ag){BC.Ag=A._NewObject(C.AA_,0);HR=true;}W2=W2-20;if(W2>0)BC=BC.Ag;}if(!!BC&&
!!BC.Ag){BC.Ag=null;HR=true;}if(HR){this.AI8();A.we(this,1);}},Bhj:function(){var
CC=4;var BC=this.AhT;while(!!BC){CC=CC+20;BC=BC.Ag;}return CC;},Bm0:function(aBitmapNo
,aBitmap){var P7=aBitmapNo;var HR=false;if(P7<0)return;if(P7<10){HR=this.W7.Get(
P7)!==aBitmap;if(!!this.W7.Get(P7)&&this.W7.Get(P7).OE)A.z9([this,this.AJR],this.
W7.Get(P7),0);this.W7.Set(P7,aBitmap);if(!!aBitmap&&aBitmap.OE)A.zV([this,this.AJR
],aBitmap,0);}else{var BC=this.Afv;P7=P7-10;while(!!BC&&(P7>=20)){BC=BC.Ag;P7=P7-
20;}if(!!BC){HR=BC.Kw.Get(P7)!==aBitmap;if(!!BC.Kw.Get(P7)&&BC.Kw.Get(P7).OE)A.z9([
this,this.AJR],BC.Kw.Get(P7),0);BC.Kw.Set(P7,aBitmap);if(!!aBitmap&&aBitmap.OE)A.
zV([this,this.AJR],aBitmap,0);}}if(HR&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HR)A.we(this,1);},Bm4:function(W0){var HR=false;if(W0<10)W0=10;if(W0>
256)W0=256;W0=W0-10;if((W0>0)&&!this.Afv){this.Afv=A._NewObject(C.AA8,0);HR=true;
}if(!W0&&!!this.Afv){this.Afv=null;HR=true;}var BC=this.Afv;while(W0>0){if((W0>20
)&&!BC.Ag){BC.Ag=A._NewObject(C.AA8,0);HR=true;}W0=W0-20;if(W0>0)BC=BC.Ag;}if(!!
BC&&!!BC.Ag){BC.Ag=null;HR=true;}if(HR){this.AI8();A.we(this,1);}},Bhh:function(
){var CC=10;var BC=this.Afv;while(!!BC){CC=CC+20;BC=BC.Ag;}return CC;},AFN:function(
aColorNo,aColor){var AcP=aColorNo;var HR=false;if(AcP<0)return;if(AcP<10){HR=this.
AyD.Get(AcP)!==aColor;this.AyD.Set(AcP,aColor);}else{var BC=this.AhS;AcP=AcP-10;
while(!!BC&&(AcP>=20)){BC=BC.Ag;AcP=AcP-20;}if(!!BC){HR=BC.Kw.Get(AcP)!==aColor;
BC.Kw.Set(AcP,aColor);}}if(HR&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HR)A.we(this,0);},Bm5:function(W1){var HR=false;if(W1<10)W1=
10;if(W1>256)W1=256;W1=W1-10;if((W1>0)&&!this.AhS){this.AhS=A._NewObject(C.AA9,0
);HR=true;}if(!W1&&!!this.AhS){this.AhS=null;HR=true;}var BC=this.AhS;while(W1>0
){if((W1>20)&&!BC.Ag){BC.Ag=A._NewObject(C.AA9,0);HR=true;}W1=W1-20;if(W1>0)BC=BC.
Ag;}if(!!BC&&!!BC.Ag){BC.Ag=null;HR=true;}if(HR){this.AI8();A.we(this,1);}},Bhi:
function(){var CC=10;var BC=this.AhS;while(!!BC){CC=CC+20;BC=BC.Ag;}return CC;},
_Init:function(aArg){(this.AoR=[]).__proto__=C.AttrSet.AoR;(this.W7=[]).__proto__=
C.AttrSet.W7;(this.AyD=[]).__proto__=C.AttrSet.AyD;this.__proto__=C.AttrSet;this.
AoR.Set(0,A.aaL(A.aci.ABP));this.W7.Set(0,A.aaL(A.aci.TB));this.A5x=A.aaL(A.aci.
ABP);this.A4o=A.aaL(A.aci.TB);A.h7++;},_Done:function(){this.K8();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AhT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Afv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AhS)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.AoR,D);A.aa6(this.W7,D
);if((B=this.A5x)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4o)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.AA_={Ag:null,Kw:A.abi(
20,null,null),_Init:function(aArg){(this.Kw=[]).__proto__=C.AA_.Kw;this.__proto__=
C.AA_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.Kw,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.AA8={Ag:null,Kw:A.abi(20,null,null),
_Init:function(aArg){(this.Kw=[]).__proto__=C.AA8.Kw;this.__proto__=C.AA8;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Kw,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.AA9={Ag:null,Kw:A.abi(20,0,null),_Init:function(aArg
){(this.Kw=[]).__proto__=C.AA9.Kw;this.__proto__=C.AA9;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hp={path:null,K8:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},Ac$:function(G){A.we(this,0);},E_:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.Ac$
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A3G:
function(aSubPathNo,aX,aY){A.pe([this,this.Ac$],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},Vr:function(aSubPathNo){A.
pe([this,this.Ac$],this);var handle=this.path;A.jU(handle,aSubPathNo);},Vj:function(
aSubPathNo,aX,aY){A.pe([this,this.Ac$],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Ji:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
AwR(1);A.pe([this,this.Ac$],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},Bhk:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,AwR:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.Bhk()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.Ac$],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hp;A.h7++;},_Done:function(){
this.K8();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Auu={Left:0x1,Zq:0x2,Right:0x4,A4p:0x8,BCm:0x10
};C.BBZ={BBN:0,BCW:1};C.BC4={BA9:0,BCI:1,BmL:2};C.BC3={BB1:0,BDK:1,BmL:2,Axa:3};
C.BA1={BA0:0,BDE:1,BC8:2,BC9:3,BC$:4,BC_:5};C.ALV={NG:360,JN:0,Ik:0,Q2:0,AiR:function(
G){var B;var Fp=this.NG;var FI;if((Fp>=360)||(Fp<=-360))Fp=360;this.AwR(2);{var Ax=
Math.max(this.Ik,this.JN);FI=1+((90/((Math.acos(1-(0.5/(Ax+1)))*A.rE)|0))|0);FI*=
4;if(Fp<360)FI=((Fp*FI)/360)|0;FI=Math.max(FI,-FI,1);}if(((!Fp||!this.Ik)||!this.
JN)||(((((this.Q2===2)||(this.Q2===3))||(this.Q2===4))||(this.Q2===5))&&((0>=this.
Ik)||(0>=this.JN)))){this.Ji(0,0);this.Ji(1,0);return;}if(Fp===360){this.Ji(0,FI+
1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JN,0,360,FI);this.Vr(0);return;}if(!this.
Q2){this.Ji(0,FI+1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);return;}
if(this.Q2===1){this.Ji(0,FI+1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JN,0,Fp,
FI);this.Vr(0);return;}if(this.Q2===2){this.Ji(0,FI+1);this.Ji(1,0);this.Vj(0,0,
0);this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.Vr(0);return;}if(this.Q2===4){var
Oi=this.Ik;var Lz=Math.sqrt(Oi*Oi);var Tb=((Lz*0.25)|0)+3;this.Ji(0,(FI+Tb)+2);this.
Ji(1,0);this.Vj(0,0,0);if(Fp>=0)this.E_(0,Oi/2,0,Lz/2,Lz/2,180,360,Tb);else this.
E_(0,Oi/2,0,Lz/2,Lz/2,180,0,Tb);this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.Vr(0
);return;}if(this.Q2===5){var Js=Fp;var Oi=this.Ik*Math.cos(Js*A.k$);var Ait=this.
JN*Math.sin(Js*A.k$);var Lz=Math.sqrt((Oi*Oi)+(Ait*Ait));var Tb=((Lz*0.25)|0)+3;
this.Ji(0,(FI+Tb)+2);this.Ji(1,0);this.Vj(0,0,0);this.E_(0,0,0,this.Ik,this.JN,0
,Fp,FI);if(Fp>=0)this.E_(0,Oi/2,Ait/2,Lz/2,Lz/2,Js,Js+180,Tb);else this.E_(0,Oi/
2,Ait/2,Lz/2,Lz/2,Js,Js-180,Tb);this.Vr(0);return;}if(this.Q2===3){var AiM=this.
Ik;var Adj=Math.sqrt(AiM*AiM);var Js=Fp;var Ah7=this.Ik*Math.cos(Js*A.k$);var Ah8=
this.JN*Math.sin(Js*A.k$);var AcU=Math.sqrt((Ah7*Ah7)+(Ah8*Ah8));var Ao$=((Adj*0.25
)|0)+3;var Ao_=((AcU*0.25)|0)+3;this.Ji(0,((FI+Ao$)+Ao_)+10);this.Ji(1,0);this.Vj(
0,0,0);if(Fp>=0){this.E_(0,AiM/2,0,Adj/2,Adj/2,180,360,Ao$);this.E_(0,0,0,this.Ik
,this.JN,0,Fp,FI);this.E_(0,Ah7/2,Ah8/2,AcU/2,AcU/2,Js,Js+180,Ao_);}else{this.E_(
0,AiM/2,0,Adj/2,Adj/2,180,0,Ao$);this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.E_(
0,Ah7/2,Ah8/2,AcU/2,AcU/2,Js,Js-180,Ao_);}this.Vr(0);return;}if(this.Q2===2){this.
Ji(0,(FI*2)+1);this.Ji(1,0);this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.E_(0,0,0
,0,0,this.NG,this.NG-Fp,FI);this.Vr(0);return;}if(this.Q2===4){var Oi=this.Ik;var
Lz=Math.sqrt(Oi*Oi);var Tb=((Lz*0.25)|0)+3;this.Ji(0,((FI*2)+Tb)+2);this.Ji(1,0);
if(Fp>=0){this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.E_(0,0,0,0,0,this.NG,this.
NG-Fp,FI);this.E_(0,Oi/2,0,Lz/2,Lz/2,180,360,Tb);}else{this.E_(0,0,0,this.Ik,this.
JN,0,Fp,FI);this.E_(0,0,0,0,0,this.NG,this.NG-Fp,FI);this.E_(0,Oi/2,0,Lz/2,Lz/2,
180,0,Tb);}this.Vr(0);return;}if(this.Q2===5){var Js=Fp;var sin=Math.sin(Js*A.k$
);var cos=Math.cos(Js*A.k$);var Oi=this.Ik*cos;var Ait=this.JN*sin;var Lz=Math.sqrt((
Oi*Oi)+(Ait*Ait));var Tb=((Lz*0.25)|0)+3;this.Ji(0,((FI*2)+Tb)+2);this.Ji(1,0);if(
Fp>=0){this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.E_(0,Oi/2,Ait/2,Lz/2,Lz/2,Js,
Js+180,Tb);this.E_(0,0,0,0,0,this.NG,this.NG-Fp,FI);}else{this.E_(0,0,0,this.Ik,
this.JN,0,Fp,FI);this.E_(0,Oi/2,Ait/2,Lz/2,Lz/2,Js,Js-180,Tb);this.E_(0,0,0,0,0,
this.NG,this.NG-Fp,FI);}this.Vr(0);return;}if(this.Q2===3){var Js=Fp;var Bxa=Math.
sin(Js*A.k$);var Bw7=Math.cos(Js*A.k$);var AiM=this.Ik;var Ah7=this.Ik*Bw7;var Ah8=
this.JN*Bxa;var Adj=Math.sqrt(AiM*AiM);var AcU=Math.sqrt((Ah7*Ah7)+(Ah8*Ah8));var
Ao$=((Adj*0.25)|0)+3;var Ao_=((AcU*0.25)|0)+3;this.Ji(0,(((FI*2)+Ao$)+Ao_)+4);this.
Ji(1,0);if(Fp>=0){this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.E_(0,Ah7/2,Ah8/2,AcU
/2,AcU/2,Js,Js+180,Ao_);this.E_(0,0,0,0,0,this.NG,this.NG-Fp,FI);this.E_(0,AiM/2
,0,Adj/2,Adj/2,180,360,Ao$);}else{this.E_(0,0,0,this.Ik,this.JN,0,Fp,FI);this.E_(
0,Ah7/2,Ah8/2,AcU/2,AcU/2,Js,Js-180,Ao_);this.E_(0,0,0,0,0,this.NG,this.NG-Fp,FI
);this.E_(0,AiM/2,0,Adj/2,Adj/2,180,0,Ao$);}this.Vr(0);return;}},Bkx:function(E){
if(E===this.NG)return;this.NG=E;if((this.Ik>0)&&(this.JN>0))A.pe([this,this.AiR]
,this);},BlJ:function(E){if((E===this.Ik)&&(E===this.JN))return;this.Ik=E;this.JN=
E;if(!!this.NG)A.pe([this,this.AiR],this);},BlS:function(E){if(E===this.Q2)return;
this.Q2=E;if((!!this.NG&&(this.Ik>0))&&(this.JN>0))A.pe([this,this.AiR],this);},
_Init:function(aArg){C.Hp._Init.call(this,aArg);this.__proto__=C.ALV;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.ALV.__proto__=C.Hp;};C._ReInit=function(
){};C.Dz=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */