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
var EW=[0,0,0,0];var He="No graphics engine bitmap attached to this canvas";var I7=
"The canvas is already initialized with a graphics engine bitmap";var IH="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OM="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PQ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PR=[1,1];var CO=[2,2];var E4="Missing matrices to interpolate";
C.Canvas={CW:null,ADi:null,Qv:A.wg,Pf:0,Ax7:false,K6:function(){if(this.Ax7)this.
DetachBitmap();},Init:function(aArg){this.Ox=true;},Aq6:function(E){if((E[0]<=0)||(
E[1]<=0))E=B9;if(A.aaX(E,this.FrameSize))return;if(this.Ax7)throw new Error(BC);
this.FrameSize=E;this.U9=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=1;}this.Qv=[].concat(
B9,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Pf;for(this.Pf=this.NoOfFrames-
1;this.Pf>=0;this.Pf--)this.AuC(this.Qv,this.Qv,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Pf=dstFrameNr;}}if(!(((B=this.Qv)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.ADi)?B[1].call(B[0],
this):null;this.Qv=EW;}},DetachBitmap:function(){if(!this.Ax7)throw new Error(He
);this.bitmap=null;this.Ax7=false;this.FrameSize=B9;this.FrameDelay=0;this.NoOfFrames=
1;this.U9=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I7);if(!aBitmap)return this;this.bitmap=aBitmap;this.Ax7=true;var noOfFrames=
1;var frameSize=B9;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.U9=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BfH:function(aClip,An2,A$z,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!An2){An2.AiE();attrSet=An2.attrSet;}if(
!!A$z)attrString=A$z.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Pf;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A4y:function(
aClip,Afb,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,AZf,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!Afb||!Afb.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(AZf===1)orient=90;else if(AZf===2)orient=180;else if(AZf===
3)orient=270;var dstFrameNo=this.Pf;var dstBitmap=this.bitmap;var srcFont=Afb.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BfJ:function(aClip
,aBitmap,aFrameNr,aDstRect,AsK,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!AsK)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Pf;var srcRect=[].concat(
B9,aBitmap.FrameSize);var left=((AsK&0x1)===0x1);var top=((AsK&0x2)===0x2);var right=((
AsK&0x4)===0x4);var bottom=((AsK&0x8)===0x8);var interior=((AsK&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hc:function(aClip
,An9,aDstRect,aFlipY,aOffset,aWidth,BuW,Bt6,Buq,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!An9||!An9.path)return;var style=0;switch(BuW){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bt6){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Buq){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Pf;var path=An9.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},Ahi:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",IH);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Pf;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BlX:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,OM);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Pf;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A36:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Pf;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},AdP:function(aClip,An9,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bt_){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!An9||!An9.path)return;var nonZeroWinding=Bt_===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=An9.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BfK:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AuC:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BfM:function(aClip,aDstPos1,aDstPos2,Bu1,Bu2,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var AfQ=Bu1;var AfR=Bu2;var Ac0=aDstPos1;
var Ac1=aDstPos2;if(A.aaX(Ac0,Ac1))return;if(AfQ<=1)AfQ=1;if(AfR<=1)AfR=1;var Ah2=
AfQ/2;var Ah3=AfR/2;var AoI=Ac0[0];var AoJ=Ac0[1];var AoK=Ac1[0];var AoL=Ac1[1];
var JU=AoK-AoI;var JV=AoL-AoJ;var IN=Math.sqrt((JU*JU)+(JV*JV));if(((AfQ>4096)||(
AfR>4096))||(IN>4096)){A.ab5("%s",PQ);return;}JU=JU/IN;JV=JV/IN;var x1=AoI+(JV*Ah2
);var y1=AoJ-(JU*Ah2);var x2=AoK+(JV*Ah3);var y2=AoL-(JU*Ah3);var x3=AoK-(JV*Ah3
);var y3=AoL+(JU*Ah3);var x4=AoI-(JV*Ah2);var y4=AoJ+(JU*Ah2);var Bc4=A.aaL(A.aci.
Ar$);var srcRect=[].concat(PR,A.abe(Bc4.FrameSize,CO));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;var srcBitmap=Bc4.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Aun:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K6();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.CW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ADi)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Aw0={VN:1,VO:0,Yv:0,Yw:
0,VP:0,VQ:1,Yx:0,Yy:0,QF:0,QG:0,Yz:1,VS:0,TO:0,TP:0,YA:0,VT:1,Ut:0,PO:0,PN:0,Agi:
0,Alh:true,AAY:function(aX,aY){var U1=((aX*this.QF)+(aY*this.QG))+this.VS;var BR=((
aX*this.TO)+(aY*this.TP))+this.VT;if(!!BR&&(BR!==1))U1=U1/BR;this.Ut=U1;return true;
},Aey:function(aX,aY){var As6=this.Agi;if(As6<0)return false;var Ef=((aX*this.VN
)+(aY*this.VO))+this.Yw;var C$=((aX*this.VP)+(aY*this.VQ))+this.Yy;var U1=((aX*this.
QF)+(aY*this.QG))+this.VS;var BR=((aX*this.TO)+(aY*this.TP))+this.VT;var AzS=1;if(
!!BR&&(BR!==1)){Ef=Ef/BR;C$=C$/BR;U1=U1/BR;}if(As6!==-U1)AzS=1/(U1+As6);if(!!As6
)AzS=AzS*As6;this.PN=Ef*AzS;this.PO=C$*AzS;this.Ut=U1+As6;return true;},BgT:function(
GY,OR,PY){if(!GY||!OR)throw new Error(E4);this.VN=GY.VN+((OR.VN-GY.VN)*PY);this.
VO=GY.VO+((OR.VO-GY.VO)*PY);this.Yv=GY.Yv+((OR.Yv-GY.Yv)*PY);this.Yw=GY.Yw+((OR.
Yw-GY.Yw)*PY);this.VP=GY.VP+((OR.VP-GY.VP)*PY);this.VQ=GY.VQ+((OR.VQ-GY.VQ)*PY);
this.Yx=GY.Yx+((OR.Yx-GY.Yx)*PY);this.Yy=GY.Yy+((OR.Yy-GY.Yy)*PY);this.QF=GY.QF+((
OR.QF-GY.QF)*PY);this.QG=GY.QG+((OR.QG-GY.QG)*PY);this.Yz=GY.Yz+((OR.Yz-GY.Yz)*PY
);this.VS=GY.VS+((OR.VS-GY.VS)*PY);this.TO=GY.TO+((OR.TO-GY.TO)*PY);this.TP=GY.TP+((
OR.TP-GY.TP)*PY);this.YA=GY.YA+((OR.YA-GY.YA)*PY);this.VT=GY.VT+((OR.VT-GY.VT)*PY
);this.Agi=GY.Agi+((OR.Agi-GY.Agi)*PY);this.Alh=false;return this;},AeE:function(
AHS,AHT,AHU){this.VN=this.VN*AHS;this.VO=this.VO*AHT;this.Yv=this.Yv*AHU;this.VP=
this.VP*AHS;this.VQ=this.VQ*AHT;this.Yx=this.Yx*AHU;this.QF=this.QF*AHS;this.QG=
this.QG*AHT;this.Yz=this.Yz*AHU;this.TO=this.TO*AHS;this.TP=this.TP*AHT;this.YA=
this.YA*AHU;this.Alh=false;return this;},Bne:function(AHL,AHM,AHN){this.Yw=((this.
Yw+(this.VN*AHL))+(this.VO*AHM))+(this.Yv*AHN);this.Yy=((this.Yy+(this.VP*AHL))+(
this.VQ*AHM))+(this.Yx*AHN);this.VS=((this.VS+(this.QF*AHL))+(this.QG*AHM))+(this.
Yz*AHN);this.VT=((this.VT+(this.TO*AHL))+(this.TP*AHM))+(this.YA*AHN);this.Alh=false;
return this;},ACJ:function(){return this.Alh||((((((((((((((((this.VN===1)&&!this.
VO)&&!this.Yv)&&!this.Yw)&&!this.VP)&&(this.VQ===1))&&!this.Yx)&&!this.Yy)&&!this.
QF)&&!this.QG)&&(this.Yz===1))&&!this.VS)&&!this.TO)&&!this.TP)&&!this.YA)&&(this.
VT===1));},AMl:function(AhA,AhD,AhB,AhE,Aof,Aog,AhC,AhF){var Ayx=AhB-Aof;var Ayz=
AhE-Aog;var Ayy=AhC-Aof;var AyA=AhF-Aog;var Az$=((AhA-AhB)+Aof)-AhC;var AAa=((AhD-
AhE)+Aog)-AhF;var Aot=(Ayx*AyA)-(Ayz*Ayy);if(!Aot)return null;this.QF=((Az$*AyA)-(
AAa*Ayy))/Aot;this.QG=((Ayx*AAa)-(Ayz*Az$))/Aot;this.Yz=0;this.VS=1;this.VN=(AhB-
AhA)+(this.QF*AhB);this.VO=(AhC-AhA)+(this.QG*AhC);this.Yv=0;this.Yw=AhA;this.VP=(
AhE-AhD)+(this.QF*AhE);this.VQ=(AhF-AhD)+(this.QG*AhF);this.Yx=0;this.Yy=AhD;this.
TO=0;this.TP=0;this.YA=0;this.VT=1;this.Alh=false;return this;},BeQ:function(LZ){
if(!LZ)return this;this.VN=LZ.VN;this.VO=LZ.VO;this.Yv=LZ.Yv;this.Yw=LZ.Yw;this.
VP=LZ.VP;this.VQ=LZ.VQ;this.Yx=LZ.Yx;this.Yy=LZ.Yy;this.QF=LZ.QF;this.QG=LZ.QG;this.
Yz=LZ.Yz;this.VS=LZ.VS;this.TO=LZ.TO;this.TP=LZ.TP;this.YA=LZ.YA;this.VT=LZ.VT;this.
Alh=LZ.Alh;this.Agi=LZ.Agi;return this;},A5Q:function(){this.VN=1;this.VO=0;this.
Yv=0;this.Yw=0;this.VP=0;this.VQ=1;this.Yx=0;this.Yy=0;this.QF=0;this.QG=0;this.
Yz=1;this.VS=0;this.TO=0;this.TP=0;this.YA=0;this.VT=1;this.Alh=true;return this;
},_Init:function(aArg){this.__proto__=C.Aw0;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A5x={Bbf:1,Bbg:0,Bbh:0,Bbi:0,Bbj:1,Bbk:0,Bbl:0,Bbm:0,Bbn:1,PO:0,PN:0,A0H:false
,Aey:function(E6){if(!this.A0H)return false;var A2L=E6[0];var A2N=E6[1];var Bzu=((
A2L*this.Bbf)+(A2N*this.Bbg))+this.Bbh;var Bzv=((A2L*this.Bbi)+(A2N*this.Bbj))+this.
Bbk;var A10=((A2L*this.Bbl)+(A2N*this.Bbm))+this.Bbn;if(!!A10){this.PN=Bzu/A10;this.
PO=Bzv/A10;return true;}return false;},AMl:function(AhA,AhD,AhB,AhE,Aof,Aog,AhC,
AhF){var Ayx=AhB-Aof;var Ayz=AhE-Aog;var Ayy=AhC-Aof;var AyA=AhF-Aog;var Az$=((AhA-
AhB)+Aof)-AhC;var AAa=((AhD-AhE)+Aog)-AhF;var Aot=(Ayx*AyA)-(Ayz*Ayy);this.A0H=false;
if(!Aot)return;var Ah4=((Az$*AyA)-(AAa*Ayy))/Aot;var BH=((Ayx*AAa)-(Ayz*Az$))/Aot;
var a=(AhB-AhA)+(Ah4*AhB);var Rd=(AhC-AhA)+(BH*AhC);var BZ=AhA;var d=(AhE-AhD)+(
Ah4*AhE);var AID=(AhF-AhD)+(BH*AhF);var LA=AhD;this.Bbf=AID-(LA*BH);this.Bbg=(BZ
*BH)-Rd;this.Bbh=(Rd*LA)-(BZ*AID);this.Bbi=(LA*Ah4)-d;this.Bbj=a-(BZ*Ah4);this.Bbk=(
BZ*d)-(a*LA);this.Bbl=(d*BH)-(AID*Ah4);this.Bbm=(Rd*Ah4)-(a*BH);this.Bbn=(a*AID)-(
Rd*d);this.A0H=true;},_Init:function(aArg){this.__proto__=C.A5x;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A3l={CY:A.wf,attrString:null,K6:function(){this.A4k(
);},A4k:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.CY=B9;},Ajz:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BgC:function(
){return this.CY;},Bln:function(An2,aString,aWidth,aEnableBidiText){this.A4k();var
attrSet=null;var handle=null;var s=B9;if(!!An2){An2.AiE();attrSet=An2.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.CY=s;},_Init:function(
aArg){this.__proto__=C.A3l;A.h7++;},_Done:function(){this.K6();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={AhH:null,Afl:null,AhG:null,AoG:A.abi(4,null,null),WY:A.abi(10,null,
null),A4S:null,A3J:null,attrSet:null,Ayh:A.abi(10,0,{0:0xFF000000}),K6:function(
){this.AIB();},AIB:function(){var handle=this.attrSet;if(!handle)return;A.aaj(handle
);this.attrSet=null;},AiE:function(){if(!!this.attrSet)return;var handle=null;var
noOfColors=this.Bgt();var noOfBitmaps=this.Bgs();var noOfFonts=this.Bgu();handle=
A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(!handle)return;var
AI_=this.AhG;var AcS=this.Afl;var AI$=this.AhH;var inx;var lnx;for(inx=0;inx<10;
inx=inx+1){var entry=this.Ayh.Get(inx);if(entry!==0x00000000)A.abF(handle,inx,entry
);}while(!!AI_){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AI_.Ku.Get(lnx);if(entry!==
0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AI_=AI_.Ag;}for(inx=0;inx<10;
inx=inx+1){var entry=this.WY.Get(inx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx,bitmap);}}while(!!AcS){for(lnx=0;lnx<20;lnx=lnx+1){var entry=
AcS.Ku.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.abE(handle,
inx+lnx,bitmap);}}inx=inx+20;AcS=AcS.Ag;}for(inx=0;inx<4;inx=inx+1){var entry=this.
AoG.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,inx,font);}}while(!!AI$
){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AI$.Ku.Get(lnx);if(!!entry){var font=entry.
font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AI$=AI$.Ag;}},AJk:function(G){var handle=
this.attrSet;var AcS=this.Afl;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.
WY.Get(inx)&&this.WY.Get(inx).Ox){var bitmap=this.WY.Get(inx).bitmap;A.abE(handle
,inx,bitmap);}while(!!AcS){for(lnx=0;lnx<20;lnx=lnx+1)if(!!AcS.Ku.Get(lnx)&&AcS.
Ku.Get(lnx).Ox){var bitmap=AcS.Ku.Get(lnx).bitmap;A.abE(handle,inx+lnx,bitmap);}
inx=inx+20;AcS=AcS.Ag;}A.we(this,1);},Bj6:function(E){this.ASU(3,E);},A74:function(
E){this.ASU(1,E);},AgS:function(E){this.ASU(0,E);},A7K:function(E){this.Bl7(0,E);
},Bjl:function(E){this.AFl(3,E);},A7O:function(E){this.AFl(2,E);},A7N:function(E
){this.AFl(1,E);},AgP:function(E){this.AFl(0,E);},ASU:function(aFontNo,Afb){var AcN=
aFontNo;var HP=false;if(AcN<0)return;if(AcN<4){HP=this.AoG.Get(AcN)!==Afb;this.AoG.
Set(AcN,Afb);}else{var Bz=this.AhH;AcN=AcN-4;while(!!Bz&&(AcN>=20)){Bz=Bz.Ag;AcN=
AcN-20;}if(!!Bz){HP=Bz.Ku.Get(AcN)!==Afb;Bz.Ku.Set(AcN,Afb);}}if(HP&&!!this.attrSet
){var handle=this.attrSet;var font=null;if(!!Afb)font=Afb.font;A.abG(handle,aFontNo
,font);}if(HP)A.we(this,1);},Bmb:function(WT){var HP=false;if(WT<4)WT=4;if(WT>256
)WT=256;WT=WT-4;if((WT>0)&&!this.AhH){this.AhH=A._NewObject(C.AAM,0);HP=true;}if(
!WT&&!!this.AhH){this.AhH=null;HP=true;}var Bz=this.AhH;while(WT>0){if((WT>20)&&
!Bz.Ag){Bz.Ag=A._NewObject(C.AAM,0);HP=true;}WT=WT-20;if(WT>0)Bz=Bz.Ag;}if(!!Bz&&
!!Bz.Ag){Bz.Ag=null;HP=true;}if(HP){this.AIB();A.we(this,1);}},Bgu:function(){var
CM=4;var Bz=this.AhH;while(!!Bz){CM=CM+20;Bz=Bz.Ag;}return CM;},Bl7:function(aBitmapNo
,aBitmap){var P1=aBitmapNo;var HP=false;if(P1<0)return;if(P1<10){HP=this.WY.Get(
P1)!==aBitmap;if(!!this.WY.Get(P1)&&this.WY.Get(P1).Ox)A.z9([this,this.AJk],this.
WY.Get(P1),0);this.WY.Set(P1,aBitmap);if(!!aBitmap&&aBitmap.Ox)A.zV([this,this.AJk
],aBitmap,0);}else{var Bz=this.Afl;P1=P1-10;while(!!Bz&&(P1>=20)){Bz=Bz.Ag;P1=P1-
20;}if(!!Bz){HP=Bz.Ku.Get(P1)!==aBitmap;if(!!Bz.Ku.Get(P1)&&Bz.Ku.Get(P1).Ox)A.z9([
this,this.AJk],Bz.Ku.Get(P1),0);Bz.Ku.Set(P1,aBitmap);if(!!aBitmap&&aBitmap.Ox)A.
zV([this,this.AJk],aBitmap,0);}}if(HP&&!!this.attrSet){var handle=this.attrSet;var
bitmap=null;if(!!aBitmap){aBitmap.Update();bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo
,bitmap);}if(HP)A.we(this,1);},Bl$:function(WR){var HP=false;if(WR<10)WR=10;if(WR>
256)WR=256;WR=WR-10;if((WR>0)&&!this.Afl){this.Afl=A._NewObject(C.AAK,0);HP=true;
}if(!WR&&!!this.Afl){this.Afl=null;HP=true;}var Bz=this.Afl;while(WR>0){if((WR>20
)&&!Bz.Ag){Bz.Ag=A._NewObject(C.AAK,0);HP=true;}WR=WR-20;if(WR>0)Bz=Bz.Ag;}if(!!
Bz&&!!Bz.Ag){Bz.Ag=null;HP=true;}if(HP){this.AIB();A.we(this,1);}},Bgs:function(
){var CM=10;var Bz=this.Afl;while(!!Bz){CM=CM+20;Bz=Bz.Ag;}return CM;},AFl:function(
aColorNo,aColor){var AcD=aColorNo;var HP=false;if(AcD<0)return;if(AcD<10){HP=this.
Ayh.Get(AcD)!==aColor;this.Ayh.Set(AcD,aColor);}else{var Bz=this.AhG;AcD=AcD-10;
while(!!Bz&&(AcD>=20)){Bz=Bz.Ag;AcD=AcD-20;}if(!!Bz){HP=Bz.Ku.Get(AcD)!==aColor;
Bz.Ku.Set(AcD,aColor);}}if(HP&&!!this.attrSet){var handle=this.attrSet;A.abF(handle
,aColorNo,aColor);}if(HP)A.we(this,0);},Bma:function(WS){var HP=false;if(WS<10)WS=
10;if(WS>256)WS=256;WS=WS-10;if((WS>0)&&!this.AhG){this.AhG=A._NewObject(C.AAL,0
);HP=true;}if(!WS&&!!this.AhG){this.AhG=null;HP=true;}var Bz=this.AhG;while(WS>0
){if((WS>20)&&!Bz.Ag){Bz.Ag=A._NewObject(C.AAL,0);HP=true;}WS=WS-20;if(WS>0)Bz=Bz.
Ag;}if(!!Bz&&!!Bz.Ag){Bz.Ag=null;HP=true;}if(HP){this.AIB();A.we(this,1);}},Bgt:
function(){var CM=10;var Bz=this.AhG;while(!!Bz){CM=CM+20;Bz=Bz.Ag;}return CM;},
_Init:function(aArg){(this.AoG=[]).__proto__=C.AttrSet.AoG;(this.WY=[]).__proto__=
C.AttrSet.WY;(this.Ayh=[]).__proto__=C.AttrSet.Ayh;this.__proto__=C.AttrSet;this.
AoG.Set(0,A.aaL(A.aci.ABq));this.WY.Set(0,A.aaL(A.aci.Ts));this.A4S=A.aaL(A.aci.
ABq);this.A3J=A.aaL(A.aci.Ts);A.h7++;},_Done:function(){this.K6();this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AhH)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Afl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AhG)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.AoG,D);A.aa6(this.WY,D
);if((B=this.A4S)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3J)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Graphics::AttrSet"};C.AAM={Ag:null,Ku:A.abi(
20,null,null),_Init:function(aArg){(this.Ku=[]).__proto__=C.AAM.Ku;this.__proto__=
C.AAM;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(
this.Ku,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::AttrSetFonts"};C.AAK={Ag:null,Ku:A.abi(20,null,null),
_Init:function(aArg){(this.Ku=[]).__proto__=C.AAK.Ku;this.__proto__=C.AAK;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.Ku,D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetBitmaps"};C.AAL={Ag:null,Ku:A.abi(20,0,null),_Init:function(aArg
){(this.Ku=[]).__proto__=C.AAL.Ku;this.__proto__=C.AAL;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetColors"
};C.Hn={path:null,K6:function(){if(!this.path)return;var handle=this.path;A.e6(handle
);this.path=null;},AcY:function(G){A.we(this,0);},E_:function(aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges){A.pe([this,this.AcY
],this);var handle=this.path;var result=0;{result=A.dU(handle,aSubPathNo,aCenterX
,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges);}return result;},A21:
function(aSubPathNo,aX,aY){A.pe([this,this.AcY],this);var handle=this.path;var result=
0;result=A.m5(handle,aSubPathNo,aX,aY);return result;},Vj:function(aSubPathNo){A.
pe([this,this.AcY],this);var handle=this.path;A.jU(handle,aSubPathNo);},Vb:function(
aSubPathNo,aX,aY){A.pe([this,this.AcY],this);var handle=this.path;A.rt(handle,aSubPathNo
,aX,aY);},Jh:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.
Awz(1);A.pe([this,this.AcY],this);var handle=this.path;var result=false;result=A.
gM(handle,aSubPathNo,aMaxNoOfEdges);return result;},Bgv:function(){if(!this.path
)return 1;var handle=this.path;var result=0;result=A.aax(handle);return result;}
,Awz:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.
path&&(this.Bgv()===aMaxNoOfSubPaths))return true;var handle=this.path;{A.e6(handle
);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;A.pe([this,this.AcY],this);return!
!this.path;},_Init:function(aArg){this.__proto__=C.Hn;A.h7++;},_Done:function(){
this.K6();this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Graphics::Path"};C.Auo={Left:0x1,Zf:0x2,Right:0x4,A3K:0x8,BA_:0x10
};C.BAK={BAy:0,BBH:1};C.BBP={BzU:0,BBu:1,BlS:2};C.BBO={BAM:0,BCv:1,BlS:2,AwT:3};
C.BzM={BzL:0,BCp:1,BBT:2,BBU:3,BBW:4,BBV:5};C.ALj={NC:360,JK:0,Ih:0,QW:0,AiF:function(
G){var B;var Fp=this.NC;var FG;if((Fp>=360)||(Fp<=-360))Fp=360;this.Awz(2);{var Aw=
Math.max(this.Ih,this.JK);FG=1+((90/((Math.acos(1-(0.5/(Aw+1)))*A.rE)|0))|0);FG*=
4;if(Fp<360)FG=((Fp*FG)/360)|0;FG=Math.max(FG,-FG,1);}if(((!Fp||!this.Ih)||!this.
JK)||(((((this.QW===2)||(this.QW===3))||(this.QW===4))||(this.QW===5))&&((0>=this.
Ih)||(0>=this.JK)))){this.Jh(0,0);this.Jh(1,0);return;}if(Fp===360){this.Jh(0,FG+
1);this.Jh(1,0);this.E_(0,0,0,this.Ih,this.JK,0,360,FG);this.Vj(0);return;}if(!this.
QW){this.Jh(0,FG+1);this.Jh(1,0);this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);return;}
if(this.QW===1){this.Jh(0,FG+1);this.Jh(1,0);this.E_(0,0,0,this.Ih,this.JK,0,Fp,
FG);this.Vj(0);return;}if(this.QW===2){this.Jh(0,FG+1);this.Jh(1,0);this.Vb(0,0,
0);this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.Vj(0);return;}if(this.QW===4){var
Oa=this.Ih;var Lx=Math.sqrt(Oa*Oa);var S3=((Lx*0.25)|0)+3;this.Jh(0,(FG+S3)+2);this.
Jh(1,0);this.Vb(0,0,0);if(Fp>=0)this.E_(0,Oa/2,0,Lx/2,Lx/2,180,360,S3);else this.
E_(0,Oa/2,0,Lx/2,Lx/2,180,0,S3);this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.Vj(0
);return;}if(this.QW===5){var Jr=Fp;var Oa=this.Ih*Math.cos(Jr*A.k$);var Aih=this.
JK*Math.sin(Jr*A.k$);var Lx=Math.sqrt((Oa*Oa)+(Aih*Aih));var S3=((Lx*0.25)|0)+3;
this.Jh(0,(FG+S3)+2);this.Jh(1,0);this.Vb(0,0,0);this.E_(0,0,0,this.Ih,this.JK,0
,Fp,FG);if(Fp>=0)this.E_(0,Oa/2,Aih/2,Lx/2,Lx/2,Jr,Jr+180,S3);else this.E_(0,Oa/
2,Aih/2,Lx/2,Lx/2,Jr,Jr-180,S3);this.Vj(0);return;}if(this.QW===3){var AiA=this.
Ih;var Ac8=Math.sqrt(AiA*AiA);var Jr=Fp;var AhU=this.Ih*Math.cos(Jr*A.k$);var AhV=
this.JK*Math.sin(Jr*A.k$);var AcI=Math.sqrt((AhU*AhU)+(AhV*AhV));var Ao0=((Ac8*0.25
)|0)+3;var AoZ=((AcI*0.25)|0)+3;this.Jh(0,((FG+Ao0)+AoZ)+10);this.Jh(1,0);this.Vb(
0,0,0);if(Fp>=0){this.E_(0,AiA/2,0,Ac8/2,Ac8/2,180,360,Ao0);this.E_(0,0,0,this.Ih
,this.JK,0,Fp,FG);this.E_(0,AhU/2,AhV/2,AcI/2,AcI/2,Jr,Jr+180,AoZ);}else{this.E_(
0,AiA/2,0,Ac8/2,Ac8/2,180,0,Ao0);this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.E_(
0,AhU/2,AhV/2,AcI/2,AcI/2,Jr,Jr-180,AoZ);}this.Vj(0);return;}if(this.QW===2){this.
Jh(0,(FG*2)+1);this.Jh(1,0);this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.E_(0,0,0
,0,0,this.NC,this.NC-Fp,FG);this.Vj(0);return;}if(this.QW===4){var Oa=this.Ih;var
Lx=Math.sqrt(Oa*Oa);var S3=((Lx*0.25)|0)+3;this.Jh(0,((FG*2)+S3)+2);this.Jh(1,0);
if(Fp>=0){this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.E_(0,0,0,0,0,this.NC,this.
NC-Fp,FG);this.E_(0,Oa/2,0,Lx/2,Lx/2,180,360,S3);}else{this.E_(0,0,0,this.Ih,this.
JK,0,Fp,FG);this.E_(0,0,0,0,0,this.NC,this.NC-Fp,FG);this.E_(0,Oa/2,0,Lx/2,Lx/2,
180,0,S3);}this.Vj(0);return;}if(this.QW===5){var Jr=Fp;var sin=Math.sin(Jr*A.k$
);var cos=Math.cos(Jr*A.k$);var Oa=this.Ih*cos;var Aih=this.JK*sin;var Lx=Math.sqrt((
Oa*Oa)+(Aih*Aih));var S3=((Lx*0.25)|0)+3;this.Jh(0,((FG*2)+S3)+2);this.Jh(1,0);if(
Fp>=0){this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.E_(0,Oa/2,Aih/2,Lx/2,Lx/2,Jr,
Jr+180,S3);this.E_(0,0,0,0,0,this.NC,this.NC-Fp,FG);}else{this.E_(0,0,0,this.Ih,
this.JK,0,Fp,FG);this.E_(0,Oa/2,Aih/2,Lx/2,Lx/2,Jr,Jr-180,S3);this.E_(0,0,0,0,0,
this.NC,this.NC-Fp,FG);}this.Vj(0);return;}if(this.QW===3){var Jr=Fp;var Bv7=Math.
sin(Jr*A.k$);var Bv2=Math.cos(Jr*A.k$);var AiA=this.Ih;var AhU=this.Ih*Bv2;var AhV=
this.JK*Bv7;var Ac8=Math.sqrt(AiA*AiA);var AcI=Math.sqrt((AhU*AhU)+(AhV*AhV));var
Ao0=((Ac8*0.25)|0)+3;var AoZ=((AcI*0.25)|0)+3;this.Jh(0,(((FG*2)+Ao0)+AoZ)+4);this.
Jh(1,0);if(Fp>=0){this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.E_(0,AhU/2,AhV/2,AcI
/2,AcI/2,Jr,Jr+180,AoZ);this.E_(0,0,0,0,0,this.NC,this.NC-Fp,FG);this.E_(0,AiA/2
,0,Ac8/2,Ac8/2,180,360,Ao0);}else{this.E_(0,0,0,this.Ih,this.JK,0,Fp,FG);this.E_(
0,AhU/2,AhV/2,AcI/2,AcI/2,Jr,Jr-180,AoZ);this.E_(0,0,0,0,0,this.NC,this.NC-Fp,FG
);this.E_(0,AiA/2,0,Ac8/2,Ac8/2,180,0,Ao0);}this.Vj(0);return;}},BjI:function(E){
if(E===this.NC)return;this.NC=E;if((this.Ih>0)&&(this.JK>0))A.pe([this,this.AiF]
,this);},BkS:function(E){if((E===this.Ih)&&(E===this.JK))return;this.Ih=E;this.JK=
E;if(!!this.NC)A.pe([this,this.AiF],this);},Bk2:function(E){if(E===this.QW)return;
this.QW=E;if((!!this.NC&&(this.Ih>0))&&(this.JK>0))A.pe([this,this.AiF],this);},
_Init:function(aArg){C.Hn._Init.call(this,aArg);this.__proto__=C.ALj;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.ALj.__proto__=C.Hn;};C._ReInit=function(
){};C.DB=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */