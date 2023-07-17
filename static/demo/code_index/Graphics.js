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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var B4=[0,0];var BI="Can not resize explicitly attached graphics engine bitmaps";
var EH=[0,0,0,0];var Gv="No graphics engine bitmap attached to this canvas";var I5=
"The canvas is already initialized with a graphics engine bitmap";var Iq="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Oe="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Pc="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Nq=[1,1];var Cw=[2,2];var FN="Missing matrices to interpolate";
C.Canvas={C7:null,AAL:null,PL:A.vx,OJ:0,AvS:false,Kz:function(){if(this.AvS)this.
DetachBitmap();},Init:function(aArg){this.N0=true;},Ao2:function(E){if((E[0]<=0)||(
E[1]<=0))E=B4;if(A.z8(E,this.FrameSize))return;if(this.AvS)throw new Error(BI);this.
FrameSize=E;this.T0=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B4;this.FrameDelay=
0;this.NoOfFrames=1;}this.PL=[].concat(B4,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.OJ;for(this.OJ=this.NoOfFrames-1;this.OJ>=0;this.OJ--)this.Asf(this.PL,this.
PL,0x00000000,0x00000000,0x00000000,0x00000000,false);this.OJ=dstFrameNr;}}if(!(((
B=this.PL)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.AAL)?B[1].call(B[0],this):null;this.PL=EH;}},DetachBitmap:function(
){if(!this.AvS)throw new Error(Gv);this.bitmap=null;this.AvS=false;this.FrameSize=
B4;this.FrameDelay=0;this.NoOfFrames=1;this.T0=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(I5);if(!aBitmap)return this;this.
bitmap=aBitmap;this.AvS=true;var noOfFrames=1;var frameSize=B4;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.T0=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Bbi:function(aClip
,Amd,A6$,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!Amd){Amd.Arw();attrSet=Amd.attrSet;}if(!!A6$)attrString=A6$.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.OJ;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A0u:function(aClip,AdS,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AVy,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AdS||!AdS.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AVy===1)orient=
90;else if(AVy===2)orient=180;else if(AVy===3)orient=270;var dstFrameNo=this.OJ;
var dstBitmap=this.bitmap;var srcFont=AdS.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Bbk:function(aClip,aBitmap,aFrameNr,aDstRect,Aqo,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!Aqo)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
OJ;var srcRect=[].concat(B4,aBitmap.FrameSize);var left=((Aqo&0x1)===0x1);var top=((
Aqo&0x2)===0x2);var right=((Aqo&0x4)===0x4);var bottom=((Aqo&0x8)===0x8);var interior=((
Aqo&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},GK:
function(aClip,Amh,aDstRect,aFlipY,aOffset,aWidth,BqD,BpM,Bp8,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!Amh||!Amh.path)return;var style=0;switch(BqD){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(BpM){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(Bp8){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.OJ;var path=Amh.path;{A.aa5(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased);}},AfX:function(aClip,aBitmap,aFrameNr
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;
if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2
)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;
if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2
)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1
)>4096))||((y2-y1)<-4096)){A.aa8("%s",Iq);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNr=this.OJ;{A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr
,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BhM:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
A.aa8("%s",Oe);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.OJ;{A.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},AZ4:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.OJ;{A.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Ace:function(aClip,Amh,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BpQ){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!Amh||!Amh.path)return;var nonZeroWinding=BpQ===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.OJ;var path=Amh.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bbl:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.OJ;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Asf:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.OJ;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bbn:function(aClip,aDstPos1,aDstPos2,BqI,BqJ,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Aep=BqI;var Aeq=BqJ;var Abr=aDstPos1;
var Abs=aDstPos2;if(A.z8(Abr,Abs))return;if(Aep<=1)Aep=1;if(Aeq<=1)Aeq=1;var Agv=
Aep/2;var Agw=Aeq/2;var AmP=Abr[0];var AmQ=Abr[1];var AmR=Abs[0];var AmS=Abs[1];
var Jx=AmR-AmP;var Jy=AmS-AmQ;var It=Math.sqrt((Jx*Jx)+(Jy*Jy));if(((Aep>4096)||(
Aeq>4096))||(It>4096)){A.aa8("%s",Pc);return;}Jx=Jx/It;Jy=Jy/It;var x1=AmP+(Jy*Agv
);var y1=AmQ-(Jx*Agv);var x2=AmR+(Jy*Agw);var y2=AmS-(Jx*Agw);var x3=AmR-(Jy*Agw
);var y3=AmS+(Jx*Agw);var x4=AmP-(Jy*Agv);var y4=AmQ+(Jx*Agv);var A_z=A.zW(A.abj.
Ap0);var srcRect=[].concat(Nq,A.aaj(A_z.FrameSize,Cw));var dstBitmap=this.bitmap;
var dstFrameNo=this.OJ;var srcBitmap=A_z.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Ar3:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.OJ;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Ai._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Kz();this.__proto__=A.abj.Ai;A.
abj.Ai._Done.call(this);},_Mark:function(D){var B;A.abj.Ai._Mark.call(this,D);if((
B=this.C7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AAL)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AuH={Uz:1,UA:0,Xf:0,Xg:
0,UB:0,UC:1,Xh:0,Xi:0,PW:0,PX:0,Xj:1,UD:0,SP:0,SQ:0,Xk:0,UE:1,Tm:0,Tl:0,Tk:0,AeX:
0,AjF:true,Ayx:function(aX,aY){var TR=((aX*this.PW)+(aY*this.PX))+this.UD;var BP=((
aX*this.SP)+(aY*this.SQ))+this.UE;if(!!BP&&(BP!==1))TR=TR/BP;this.Tm=TR;return true;
},Aiz:function(aX,aY){var AqL=this.AeX;if(AqL<0)return false;var FA=((aX*this.Uz
)+(aY*this.UA))+this.Xg;var C9=((aX*this.UB)+(aY*this.UC))+this.Xi;var TR=((aX*this.
PW)+(aY*this.PX))+this.UD;var BP=((aX*this.SP)+(aY*this.SQ))+this.UE;var Axq=1;if(
!!BP&&(BP!==1)){FA=FA/BP;C9=C9/BP;TR=TR/BP;}if(AqL!==-TR)Axq=1/(TR+AqL);if(!!AqL
)Axq=Axq*AqL;this.Tk=FA*Axq;this.Tl=C9*Axq;this.Tm=TR+AqL;return true;},Bct:function(
Gw,Oi,Pg){if(!Gw||!Oi)throw new Error(FN);this.Uz=Gw.Uz+((Oi.Uz-Gw.Uz)*Pg);this.
UA=Gw.UA+((Oi.UA-Gw.UA)*Pg);this.Xf=Gw.Xf+((Oi.Xf-Gw.Xf)*Pg);this.Xg=Gw.Xg+((Oi.
Xg-Gw.Xg)*Pg);this.UB=Gw.UB+((Oi.UB-Gw.UB)*Pg);this.UC=Gw.UC+((Oi.UC-Gw.UC)*Pg);
this.Xh=Gw.Xh+((Oi.Xh-Gw.Xh)*Pg);this.Xi=Gw.Xi+((Oi.Xi-Gw.Xi)*Pg);this.PW=Gw.PW+((
Oi.PW-Gw.PW)*Pg);this.PX=Gw.PX+((Oi.PX-Gw.PX)*Pg);this.Xj=Gw.Xj+((Oi.Xj-Gw.Xj)*Pg
);this.UD=Gw.UD+((Oi.UD-Gw.UD)*Pg);this.SP=Gw.SP+((Oi.SP-Gw.SP)*Pg);this.SQ=Gw.SQ+((
Oi.SQ-Gw.SQ)*Pg);this.Xk=Gw.Xk+((Oi.Xk-Gw.Xk)*Pg);this.UE=Gw.UE+((Oi.UE-Gw.UE)*Pg
);this.AeX=Gw.AeX+((Oi.AeX-Gw.AeX)*Pg);this.AjF=false;return this;},Adg:function(
AFc,AFd,AFe){this.Uz=this.Uz*AFc;this.UA=this.UA*AFd;this.Xf=this.Xf*AFe;this.UB=
this.UB*AFc;this.UC=this.UC*AFd;this.Xh=this.Xh*AFe;this.PW=this.PW*AFc;this.PX=
this.PX*AFd;this.Xj=this.Xj*AFe;this.SP=this.SP*AFc;this.SQ=this.SQ*AFd;this.Xk=
this.Xk*AFe;this.AjF=false;return this;},BiY:function(AE6,AE7,AE8){this.Xg=((this.
Xg+(this.Uz*AE6))+(this.UA*AE7))+(this.Xf*AE8);this.Xi=((this.Xi+(this.UB*AE6))+(
this.UC*AE7))+(this.Xh*AE8);this.UD=((this.UD+(this.PW*AE6))+(this.PX*AE7))+(this.
Xj*AE8);this.UE=((this.UE+(this.SP*AE6))+(this.SQ*AE7))+(this.Xk*AE8);this.AjF=false;
return this;},AAe:function(){return this.AjF||((((((((((((((((this.Uz===1)&&!this.
UA)&&!this.Xf)&&!this.Xg)&&!this.UB)&&(this.UC===1))&&!this.Xh)&&!this.Xi)&&!this.
PW)&&!this.PX)&&(this.Xj===1))&&!this.UD)&&!this.SP)&&!this.SQ)&&!this.Xk)&&(this.
UE===1));},Ba8:function(AFi,AFl,AFj,AFm,AVM,AVN,AFk,AFn){var Awh=AFj-AVM;var Awj=
AFm-AVN;var Awi=AFk-AVM;var Awk=AFn-AVN;var AxJ=((AFi-AFj)+AVM)-AFk;var AxK=((AFl-
AFm)+AVN)-AFn;var AmB=(Awh*Awk)-(Awj*Awi);if(!AmB)return null;this.PW=((AxJ*Awk)-(
AxK*Awi))/AmB;this.PX=((Awh*AxK)-(Awj*AxJ))/AmB;this.Xj=0;this.UD=1;this.Uz=(AFj-
AFi)+(this.PW*AFj);this.UA=(AFk-AFi)+(this.PX*AFk);this.Xf=0;this.Xg=AFi;this.UB=(
AFm-AFl)+(this.PW*AFm);this.UC=(AFn-AFl)+(this.PX*AFn);this.Xh=0;this.Xi=AFl;this.
SP=0;this.SQ=0;this.Xk=0;this.UE=1;this.AjF=false;return this;},Bai:function(Kf){
if(!Kf)return this;this.Uz=Kf.Uz;this.UA=Kf.UA;this.Xf=Kf.Xf;this.Xg=Kf.Xg;this.
UB=Kf.UB;this.UC=Kf.UC;this.Xh=Kf.Xh;this.Xi=Kf.Xi;this.PW=Kf.PW;this.PX=Kf.PX;this.
Xj=Kf.Xj;this.UD=Kf.UD;this.SP=Kf.SP;this.SQ=Kf.SQ;this.Xk=Kf.Xk;this.UE=Kf.UE;this.
AjF=Kf.AjF;this.AeX=Kf.AeX;return this;},A1H:function(){this.Uz=1;this.UA=0;this.
Xf=0;this.Xg=0;this.UB=0;this.UC=1;this.Xh=0;this.Xi=0;this.PW=0;this.PX=0;this.
Xj=1;this.UD=0;this.SP=0;this.SQ=0;this.Xk=0;this.UE=1;this.AjF=true;return this;
},_Init:function(aArg){this.__proto__=C.AuH;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.AZs={CW:A.vw,attrString:null,Kz:function(){this.A0h();},A0h:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CW=B4;}
,AhT:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},Bcc:function(){return this.CW;},Bha:function(
Amd,aString,aWidth,aEnableBidiText){this.A0h();var attrSet=null;var handle=null;
var s=B4;if(!!Amd){Amd.Arw();attrSet=Amd.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CW=s;},_Init:function(aArg){this.__proto__=
C.AZs;A.hJ++;},_Done:function(){this.Kz();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Agb:
null,Ad1:null,Aga:null,AmN:A.aan(4,null,null),VH:A.aan(10,null,null),A0O:null,AZM:
null,attrSet:null,Av3:A.aan(10,0,{0:0xFF000000}),Kz:function(){this.AF0();},AF0:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},Arw:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.Bb4(
);var noOfBitmaps=this.Bb3();var noOfFonts=this.Bb5();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AGu=this.Aga;var Abk=this.
Ad1;var AGv=this.Agb;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
Av3.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AGu){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AGu.J1.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AGu=AGu.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
VH.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Abk){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Abk.J1.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Abk=Abk.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.AmN.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AGv){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AGv.J1.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AGv=AGv.Af;}},AGG:function(H){var handle=this.attrSet;var
Abk=this.Ad1;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.VH.Get(inx)&&this.
VH.Get(inx).N0){var bitmap=this.VH.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Abk){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Abk.J1.Get(lnx)&&Abk.J1.Get(lnx).N0){var bitmap=
Abk.J1.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Abk=Abk.Af;}A.vv(
this,1);},BfS:function(E){this.APH(3,E);},BfR:function(E){this.APH(1,E);},AoY:function(
E){this.APH(0,E);},A3r:function(E){this.BhW(0,E);},Be_:function(E){this.ACH(3,E);
},A3w:function(E){this.ACH(2,E);},A3v:function(E){this.ACH(1,E);},Afs:function(E
){this.ACH(0,E);},APH:function(aFontNo,AdS){var Abe=aFontNo;var Hm=false;if(Abe<
0)return;if(Abe<4){Hm=this.AmN.Get(Abe)!==AdS;this.AmN.Set(Abe,AdS);}else{var Bx=
this.Agb;Abe=Abe-4;while(!!Bx&&(Abe>=20)){Bx=Bx.Af;Abe=Abe-20;}if(!!Bx){Hm=Bx.J1.
Get(Abe)!==AdS;Bx.J1.Set(Abe,AdS);}}if(Hm&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AdS)font=AdS.font;A.aaJ(handle,aFontNo,font);}if(Hm)A.vv(this
,1);},Bh2:function(VC){var Hm=false;if(VC<4)VC=4;if(VC>256)VC=256;VC=VC-4;if((VC>
0)&&!this.Agb){this.Agb=A._NewObject(C.Ayn,0);Hm=true;}if(!VC&&!!this.Agb){this.
Agb=null;Hm=true;}var Bx=this.Agb;while(VC>0){if((VC>20)&&!Bx.Af){Bx.Af=A._NewObject(
C.Ayn,0);Hm=true;}VC=VC-20;if(VC>0)Bx=Bx.Af;}if(!!Bx&&!!Bx.Af){Bx.Af=null;Hm=true;
}if(Hm){this.AF0();A.vv(this,1);}},Bb5:function(){var DZ=4;var Bx=this.Agb;while(
!!Bx){DZ=DZ+20;Bx=Bx.Af;}return DZ;},BhW:function(aBitmapNo,aBitmap){var Pj=aBitmapNo;
var Hm=false;if(Pj<0)return;if(Pj<10){Hm=this.VH.Get(Pj)!==aBitmap;if(!!this.VH.
Get(Pj)&&this.VH.Get(Pj).N0)A.zl([this,this.AGG],this.VH.Get(Pj),0);this.VH.Set(
Pj,aBitmap);if(!!aBitmap&&aBitmap.N0)A.y_([this,this.AGG],aBitmap,0);}else{var Bx=
this.Ad1;Pj=Pj-10;while(!!Bx&&(Pj>=20)){Bx=Bx.Af;Pj=Pj-20;}if(!!Bx){Hm=Bx.J1.Get(
Pj)!==aBitmap;if(!!Bx.J1.Get(Pj)&&Bx.J1.Get(Pj).N0)A.zl([this,this.AGG],Bx.J1.Get(
Pj),0);Bx.J1.Set(Pj,aBitmap);if(!!aBitmap&&aBitmap.N0)A.y_([this,this.AGG],aBitmap
,0);}}if(Hm&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(Hm)
A.vv(this,1);},Bh0:function(VA){var Hm=false;if(VA<10)VA=10;if(VA>256)VA=256;VA=
VA-10;if((VA>0)&&!this.Ad1){this.Ad1=A._NewObject(C.Ayl,0);Hm=true;}if(!VA&&!!this.
Ad1){this.Ad1=null;Hm=true;}var Bx=this.Ad1;while(VA>0){if((VA>20)&&!Bx.Af){Bx.Af=
A._NewObject(C.Ayl,0);Hm=true;}VA=VA-20;if(VA>0)Bx=Bx.Af;}if(!!Bx&&!!Bx.Af){Bx.Af=
null;Hm=true;}if(Hm){this.AF0();A.vv(this,1);}},Bb3:function(){var DZ=10;var Bx=
this.Ad1;while(!!Bx){DZ=DZ+20;Bx=Bx.Af;}return DZ;},ACH:function(aColorNo,aColor
){var Aa7=aColorNo;var Hm=false;if(Aa7<0)return;if(Aa7<10){Hm=this.Av3.Get(Aa7)!==
aColor;this.Av3.Set(Aa7,aColor);}else{var Bx=this.Aga;Aa7=Aa7-10;while(!!Bx&&(Aa7>=
20)){Bx=Bx.Af;Aa7=Aa7-20;}if(!!Bx){Hm=Bx.J1.Get(Aa7)!==aColor;Bx.J1.Set(Aa7,aColor
);}}if(Hm&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(Hm)A.vv(this,0);},Bh1:function(VB){var Hm=false;if(VB<10)VB=10;if(VB>256)VB=
256;VB=VB-10;if((VB>0)&&!this.Aga){this.Aga=A._NewObject(C.Aym,0);Hm=true;}if(!VB&&
!!this.Aga){this.Aga=null;Hm=true;}var Bx=this.Aga;while(VB>0){if((VB>20)&&!Bx.Af
){Bx.Af=A._NewObject(C.Aym,0);Hm=true;}VB=VB-20;if(VB>0)Bx=Bx.Af;}if(!!Bx&&!!Bx.
Af){Bx.Af=null;Hm=true;}if(Hm){this.AF0();A.vv(this,1);}},Bb4:function(){var DZ=
10;var Bx=this.Aga;while(!!Bx){DZ=DZ+20;Bx=Bx.Af;}return DZ;},_Init:function(aArg
){(this.AmN=[]).__proto__=C.AttrSet.AmN;(this.VH=[]).__proto__=C.AttrSet.VH;(this.
Av3=[]).__proto__=C.AttrSet.Av3;this.__proto__=C.AttrSet;this.AmN.Set(0,A.zW(A.abj.
AyY));this.VH.Set(0,A.zW(A.abj.J6));this.A0O=A.zW(A.abj.AyY);this.AZM=A.zW(A.abj.
J6);A.hJ++;},_Done:function(){this.Kz();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Agb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ad1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aga)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.AmN,D);A.aaf(this.VH,D);if((B=this.A0O)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AZM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.Ayn={Af:null,J1:A.aan(20,null,null),_Init:function(aArg){(
this.J1=[]).__proto__=C.Ayn.J1;this.__proto__=C.Ayn;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.J1,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.Ayl={Af:null,J1:A.aan(20,null,null),_Init:function(aArg){(this.J1=[]).__proto__=
C.Ayl.J1;this.__proto__=C.Ayl;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.J1,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.Aym={Af:
null,J1:A.aan(20,0,null),_Init:function(aArg){(this.J1=[]).__proto__=C.Aym.J1;this.
__proto__=C.Aym;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.G0={path:null,Kz:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Abp:function(H){A.vv(this,0);},ES:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Abp],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},AY6:function(aSubPathNo,aX,aY){A.ow([this,this.Abp],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},T$:function(aSubPathNo){A.ow([this,this.Abp],this);var handle=this.path;A.qP(handle
,aSubPathNo);},T4:function(aSubPathNo,aX,aY){A.ow([this,this.Abp],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},IX:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.Auf(1);A.ow([this,this.Abp],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bb6:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},Auf:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bb6()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Abp],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.G0;A.hJ++;},_Done:function(){this.Kz();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Ar4={Left:0x1,X1:0x2
,Right:0x4,AZN:0x8,BwD:0x10};C.Bwk={Bv_:0,Bxa:1};C.Bxi={Bvw:0,BwZ:1,BhH:2};C.Bxh={
Bwm:0,BxY:1,BhH:2,Auz:3};C.Bvo={Bvn:0,BxT:1,Bxm:2,Bxn:3,Bxp:4,Bxo:5};C.AIx={MZ:360
,I3:0,HX:0,P9:0,Ag3:function(H){var E7=this.MZ;var Fk;if((E7>=360)||(E7<=-360))E7=
360;this.Auf(2);{var AL=this.HX;if(this.I3>AL)AL=this.I3;if(E7===360)Fk=AL|0;else
Fk=((E7*AL)/360)|0;if(Fk<0)Fk=-Fk;Fk=Fk+1;}if(((!E7||!this.HX)||!this.I3)||(((((
this.P9===2)||(this.P9===3))||(this.P9===4))||(this.P9===5))&&((0>=this.HX)||(0>=
this.I3)))){this.IX(0,0);this.IX(1,0);return;}if(E7===360){this.IX(0,Fk+1);this.
IX(1,0);this.ES(0,0,0,this.HX,this.I3,0,360,Fk);this.T$(0);return;}if(!this.P9){
this.IX(0,Fk+1);this.IX(1,0);this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);return;}if(this.
P9===1){this.IX(0,Fk+1);this.IX(1,0);this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.
T$(0);return;}if(this.P9===2){this.IX(0,Fk+1);this.IX(1,0);this.T4(0,0,0);this.ES(
0,0,0,this.HX,this.I3,0,E7,Fk);this.T$(0);return;}if(this.P9===4){var NK=this.HX;
var KW=Math.sqrt(NK*NK);var R9=((KW*0.25)|0)+3;this.IX(0,(Fk+R9)+2);this.IX(1,0);
this.T4(0,0,0);if(E7>=0)this.ES(0,NK/2,0,KW/2,KW/2,180,360,R9);else this.ES(0,NK
/2,0,KW/2,KW/2,180,0,R9);this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.T$(0);return;
}if(this.P9===5){var I$=E7;var NK=this.HX*Math.cos(I$*A.kw);var AgJ=this.I3*Math.
sin(I$*A.kw);var KW=Math.sqrt((NK*NK)+(AgJ*AgJ));var R9=((KW*0.25)|0)+3;this.IX(
0,(Fk+R9)+2);this.IX(1,0);this.T4(0,0,0);this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);
if(E7>=0)this.ES(0,NK/2,AgJ/2,KW/2,KW/2,I$,I$+180,R9);else this.ES(0,NK/2,AgJ/2,
KW/2,KW/2,I$,I$-180,R9);this.T$(0);return;}if(this.P9===3){var AgZ=this.HX;var Aby=
Math.sqrt(AgZ*AgZ);var I$=E7;var Agn=this.HX*Math.cos(I$*A.kw);var Ago=this.I3*Math.
sin(I$*A.kw);var Aba=Math.sqrt((Agn*Agn)+(Ago*Ago));var Am6=((Aby*0.25)|0)+3;var
Am5=((Aba*0.25)|0)+3;this.IX(0,((Fk+Am6)+Am5)+10);this.IX(1,0);this.T4(0,0,0);if(
E7>=0){this.ES(0,AgZ/2,0,Aby/2,Aby/2,180,360,Am6);this.ES(0,0,0,this.HX,this.I3,
0,E7,Fk);this.ES(0,Agn/2,Ago/2,Aba/2,Aba/2,I$,I$+180,Am5);}else{this.ES(0,AgZ/2,
0,Aby/2,Aby/2,180,0,Am6);this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.ES(0,Agn/2,
Ago/2,Aba/2,Aba/2,I$,I$-180,Am5);}this.T$(0);return;}if(this.P9===2){this.IX(0,(
Fk*2)+1);this.IX(1,0);this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.ES(0,0,0,0,0,this.
MZ,this.MZ-E7,Fk);this.T$(0);return;}if(this.P9===4){var NK=this.HX;var KW=Math.
sqrt(NK*NK);var R9=((KW*0.25)|0)+3;this.IX(0,((Fk*2)+R9)+2);this.IX(1,0);if(E7>=
0){this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.ES(0,0,0,0,0,this.MZ,this.MZ-E7,Fk
);this.ES(0,NK/2,0,KW/2,KW/2,180,360,R9);}else{this.ES(0,0,0,this.HX,this.I3,0,E7
,Fk);this.ES(0,0,0,0,0,this.MZ,this.MZ-E7,Fk);this.ES(0,NK/2,0,KW/2,KW/2,180,0,R9
);}this.T$(0);return;}if(this.P9===5){var I$=E7;var sin=Math.sin(I$*A.kw);var cos=
Math.cos(I$*A.kw);var NK=this.HX*cos;var AgJ=this.I3*sin;var KW=Math.sqrt((NK*NK
)+(AgJ*AgJ));var R9=((KW*0.25)|0)+3;this.IX(0,((Fk*2)+R9)+2);this.IX(1,0);if(E7>=
0){this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.ES(0,NK/2,AgJ/2,KW/2,KW/2,I$,I$+180
,R9);this.ES(0,0,0,0,0,this.MZ,this.MZ-E7,Fk);}else{this.ES(0,0,0,this.HX,this.I3
,0,E7,Fk);this.ES(0,NK/2,AgJ/2,KW/2,KW/2,I$,I$-180,R9);this.ES(0,0,0,0,0,this.MZ
,this.MZ-E7,Fk);}this.T$(0);return;}if(this.P9===3){var I$=E7;var BrN=Math.sin(I$
*A.kw);var BrI=Math.cos(I$*A.kw);var AgZ=this.HX;var Agn=this.HX*BrI;var Ago=this.
I3*BrN;var Aby=Math.sqrt(AgZ*AgZ);var Aba=Math.sqrt((Agn*Agn)+(Ago*Ago));var Am6=((
Aby*0.25)|0)+3;var Am5=((Aba*0.25)|0)+3;this.IX(0,(((Fk*2)+Am6)+Am5)+4);this.IX(
1,0);if(E7>=0){this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.ES(0,Agn/2,Ago/2,Aba/
2,Aba/2,I$,I$+180,Am5);this.ES(0,0,0,0,0,this.MZ,this.MZ-E7,Fk);this.ES(0,AgZ/2,
0,Aby/2,Aby/2,180,360,Am6);}else{this.ES(0,0,0,this.HX,this.I3,0,E7,Fk);this.ES(
0,Agn/2,Ago/2,Aba/2,Aba/2,I$,I$-180,Am5);this.ES(0,0,0,0,0,this.MZ,this.MZ-E7,Fk
);this.ES(0,AgZ/2,0,Aby/2,Aby/2,180,0,Am6);}this.T$(0);return;}},Bft:function(E){
if(E===this.MZ)return;this.MZ=E;if((this.HX>0)&&(this.I3>0))A.ow([this,this.Ag3]
,this);},BgC:function(E){if((E===this.HX)&&(E===this.I3))return;this.HX=E;this.I3=
E;if(!!this.MZ)A.ow([this,this.Ag3],this);},BgN:function(E){if(E===this.P9)return;
this.P9=E;if((!!this.MZ&&(this.HX>0))&&(this.I3>0))A.ow([this,this.Ag3],this);},
_Init:function(aArg){C.G0._Init.call(this,aArg);this.__proto__=C.AIx;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Ai;C.AIx.__proto__=C.G0;};C._ReInit=function(
){};C.Dq=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */