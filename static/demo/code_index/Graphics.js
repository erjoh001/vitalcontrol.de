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
var B$=[0,0];var BH="Can not resize explicitly attached graphics engine bitmaps";
var EV=[0,0,0,0];var GT="No graphics engine bitmap attached to this canvas";var Jt=
"The canvas is already initialized with a graphics engine bitmap";var IL="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var OK="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var PJ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var N1=[1,1];var CJ=[2,2];var Fn="Missing matrices to interpolate";
C.Canvas={Dj:null,ACz:null,Qh:A.vx,Pf:0,Axr:false,K3:function(){if(this.Axr)this.
DetachBitmap();},Init:function(aArg){this.Oy=true;},Aqs:function(E){if((E[0]<=0)||(
E[1]<=0))E=B$;if(A.z8(E,this.FrameSize))return;if(this.Axr)throw new Error(BH);this.
FrameSize=E;this.UO=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B$;this.FrameDelay=
0;this.NoOfFrames=1;}this.Qh=[].concat(B$,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Pf;for(this.Pf=this.NoOfFrames-1;this.Pf>=0;this.Pf--)this.AtQ(this.Qh,this.
Qh,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Pf=dstFrameNr;}}if(!(((
B=this.Qh)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.ACz)?B[1].call(B[0],this):null;this.Qh=EV;}},DetachBitmap:function(
){if(!this.Axr)throw new Error(GT);this.bitmap=null;this.Axr=false;this.FrameSize=
B$;this.FrameDelay=0;this.NoOfFrames=1;this.UO=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Jt);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Axr=true;var noOfFrames=1;var frameSize=B$;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.UO=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Bex:function(aClip
,Anz,A_i,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!Anz){Anz.As5();attrSet=Anz.attrSet;}if(!!A_i)attrString=A_i.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A3u:function(aClip,AeY,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AYj,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AeY||!AeY.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AYj===1)orient=
90;else if(AYj===2)orient=180;else if(AYj===3)orient=270;var dstFrameNo=this.Pf;
var dstBitmap=this.bitmap;var srcFont=AeY.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Bez:function(aClip,aBitmap,aFrameNr,aDstRect,ArY,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!ArY)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
Pf;var srcRect=[].concat(B$,aBitmap.FrameSize);var left=((ArY&0x1)===0x1);var top=((
ArY&0x2)===0x2);var right=((ArY&0x4)===0x4);var bottom=((ArY&0x8)===0x8);var interior=((
ArY&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ha:
function(aClip,AnD,aDstRect,aFlipY,aOffset,aWidth,BtT,Bs3,Btn,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!AnD||!AnD.path)return;var style=0;switch(BtT){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(Bs3){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(Btn){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnD.path;{A.aa5(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased);}},Ag6:function(aClip,aBitmap,aFrameNr
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;
if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2
)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;
if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2
)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1
)>4096))||((y2-y1)<-4096)){A.aa8("%s",IL);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNr=this.Pf;{A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr
,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bk0:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
A.aa8("%s",OK);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.Pf;{A.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},A22:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.Pf;{A.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Adp:function(aClip,AnD,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bs7){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!AnD||!AnD.path)return;var nonZeroWinding=Bs7===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnD.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BeA:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AtQ:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BeC:function(aClip,aDstPos1,aDstPos2,BtY,BtZ,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var AfA=BtY;var AfB=BtZ;var AcB=aDstPos1;
var AcC=aDstPos2;if(A.z8(AcB,AcC))return;if(AfA<=1)AfA=1;if(AfB<=1)AfB=1;var AhM=
AfA/2;var AhN=AfB/2;var Aoa=AcB[0];var Aob=AcB[1];var Aoc=AcC[0];var Aod=AcC[1];
var JY=Aoc-Aoa;var JZ=Aod-Aob;var IR=Math.sqrt((JY*JY)+(JZ*JZ));if(((AfA>4096)||(
AfB>4096))||(IR>4096)){A.aa8("%s",PJ);return;}JY=JY/IR;JZ=JZ/IR;var x1=Aoa+(JZ*AhM
);var y1=Aob-(JY*AhM);var x2=Aoc+(JZ*AhN);var y2=Aod-(JY*AhN);var x3=Aoc-(JZ*AhN
);var y3=Aod+(JY*AhN);var x4=Aoa-(JZ*AhM);var y4=Aob+(JY*AhM);var BbN=A.zW(A.abj.
Aru);var srcRect=[].concat(N1,A.aaj(BbN.FrameSize,CJ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;var srcBitmap=BbN.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AtA:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Aj._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K3();this.__proto__=A.abj.Aj;A.
abj.Aj._Done.call(this);},_Mark:function(D){var B;A.abj.Aj._Mark.call(this,D);if((
B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACz)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Awg={Vt:1,Vu:0,Yd:0,Ye:
0,Vv:0,Vw:1,Yf:0,Yg:0,Qs:0,Qt:0,Yh:1,Vx:0,Tt:0,Tu:0,Yi:0,Vy:1,T_:0,T9:0,T8:0,Af5:
0,AkW:true,AAc:function(aX,aY){var UG=((aX*this.Qs)+(aY*this.Qt))+this.Vx;var BU=((
aX*this.Tt)+(aY*this.Tu))+this.Vy;if(!!BU&&(BU!==1))UG=UG/BU;this.T_=UG;return true;
},AjV:function(aX,aY){var Ash=this.Af5;if(Ash<0)return false;var FY=((aX*this.Vt
)+(aY*this.Vu))+this.Ye;var Dl=((aX*this.Vv)+(aY*this.Vw))+this.Yg;var UG=((aX*this.
Qs)+(aY*this.Qt))+this.Vx;var BU=((aX*this.Tt)+(aY*this.Tu))+this.Vy;var Ay6=1;if(
!!BU&&(BU!==1)){FY=FY/BU;Dl=Dl/BU;UG=UG/BU;}if(Ash!==-UG)Ay6=1/(UG+Ash);if(!!Ash
)Ay6=Ay6*Ash;this.T8=FY*Ay6;this.T9=Dl*Ay6;this.T_=UG+Ash;return true;},BfK:function(
GW,OS,PM){if(!GW||!OS)throw new Error(Fn);this.Vt=GW.Vt+((OS.Vt-GW.Vt)*PM);this.
Vu=GW.Vu+((OS.Vu-GW.Vu)*PM);this.Yd=GW.Yd+((OS.Yd-GW.Yd)*PM);this.Ye=GW.Ye+((OS.
Ye-GW.Ye)*PM);this.Vv=GW.Vv+((OS.Vv-GW.Vv)*PM);this.Vw=GW.Vw+((OS.Vw-GW.Vw)*PM);
this.Yf=GW.Yf+((OS.Yf-GW.Yf)*PM);this.Yg=GW.Yg+((OS.Yg-GW.Yg)*PM);this.Qs=GW.Qs+((
OS.Qs-GW.Qs)*PM);this.Qt=GW.Qt+((OS.Qt-GW.Qt)*PM);this.Yh=GW.Yh+((OS.Yh-GW.Yh)*PM
);this.Vx=GW.Vx+((OS.Vx-GW.Vx)*PM);this.Tt=GW.Tt+((OS.Tt-GW.Tt)*PM);this.Tu=GW.Tu+((
OS.Tu-GW.Tu)*PM);this.Yi=GW.Yi+((OS.Yi-GW.Yi)*PM);this.Vy=GW.Vy+((OS.Vy-GW.Vy)*PM
);this.Af5=GW.Af5+((OS.Af5-GW.Af5)*PM);this.AkW=false;return this;},Aek:function(
AG9,AG_,AG$){this.Vt=this.Vt*AG9;this.Vu=this.Vu*AG_;this.Yd=this.Yd*AG$;this.Vv=
this.Vv*AG9;this.Vw=this.Vw*AG_;this.Yf=this.Yf*AG$;this.Qs=this.Qs*AG9;this.Qt=
this.Qt*AG_;this.Yh=this.Yh*AG$;this.Tt=this.Tt*AG9;this.Tu=this.Tu*AG_;this.Yi=
this.Yi*AG$;this.AkW=false;return this;},Bmf:function(AG1,AG2,AG3){this.Ye=((this.
Ye+(this.Vt*AG1))+(this.Vu*AG2))+(this.Yd*AG3);this.Yg=((this.Yg+(this.Vv*AG1))+(
this.Vw*AG2))+(this.Yf*AG3);this.Vx=((this.Vx+(this.Qs*AG1))+(this.Qt*AG2))+(this.
Yh*AG3);this.Vy=((this.Vy+(this.Tt*AG1))+(this.Tu*AG2))+(this.Yi*AG3);this.AkW=false;
return this;},ABZ:function(){return this.AkW||((((((((((((((((this.Vt===1)&&!this.
Vu)&&!this.Yd)&&!this.Ye)&&!this.Vv)&&(this.Vw===1))&&!this.Yf)&&!this.Yg)&&!this.
Qs)&&!this.Qt)&&(this.Yh===1))&&!this.Vx)&&!this.Tt)&&!this.Tu)&&!this.Yi)&&(this.
Vy===1));},Bel:function(AHd,AHg,AHe,AHh,AYx,AYy,AHf,AHi){var AxR=AHe-AYx;var AxT=
AHh-AYy;var AxS=AHf-AYx;var AxU=AHi-AYy;var Azn=((AHd-AHe)+AYx)-AHf;var Azo=((AHg-
AHh)+AYy)-AHi;var AnX=(AxR*AxU)-(AxT*AxS);if(!AnX)return null;this.Qs=((Azn*AxU)-(
Azo*AxS))/AnX;this.Qt=((AxR*Azo)-(AxT*Azn))/AnX;this.Yh=0;this.Vx=1;this.Vt=(AHe-
AHd)+(this.Qs*AHe);this.Vu=(AHf-AHd)+(this.Qt*AHf);this.Yd=0;this.Ye=AHd;this.Vv=(
AHh-AHg)+(this.Qs*AHh);this.Vw=(AHi-AHg)+(this.Qt*AHi);this.Yf=0;this.Yg=AHg;this.
Tt=0;this.Tu=0;this.Yi=0;this.Vy=1;this.AkW=false;return this;},Bdy:function(KJ){
if(!KJ)return this;this.Vt=KJ.Vt;this.Vu=KJ.Vu;this.Yd=KJ.Yd;this.Ye=KJ.Ye;this.
Vv=KJ.Vv;this.Vw=KJ.Vw;this.Yf=KJ.Yf;this.Yg=KJ.Yg;this.Qs=KJ.Qs;this.Qt=KJ.Qt;this.
Yh=KJ.Yh;this.Vx=KJ.Vx;this.Tt=KJ.Tt;this.Tu=KJ.Tu;this.Yi=KJ.Yi;this.Vy=KJ.Vy;this.
AkW=KJ.AkW;this.Af5=KJ.Af5;return this;},A4K:function(){this.Vt=1;this.Vu=0;this.
Yd=0;this.Ye=0;this.Vv=0;this.Vw=1;this.Yf=0;this.Yg=0;this.Qs=0;this.Qt=0;this.
Yh=1;this.Vx=0;this.Tt=0;this.Tu=0;this.Yi=0;this.Vy=1;this.AkW=true;return this;
},_Init:function(aArg){this.__proto__=C.Awg;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A2n={CZ:A.vw,attrString:null,K3:function(){this.A3g();},A3g:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CZ=B$;}
,Ajd:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},Bft:function(){return this.CZ;},Bkp:function(
Anz,aString,aWidth,aEnableBidiText){this.A3g();var attrSet=null;var handle=null;
var s=B$;if(!!Anz){Anz.As5();attrSet=Anz.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CZ=s;},_Init:function(aArg){this.__proto__=
C.A2n;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Ahs:
null,Ae8:null,Ahr:null,An_:A.aan(4,null,null),Wy:A.aan(10,null,null),A3O:null,A2E:
null,attrSet:null,AxB:A.aan(10,0,{0:0xFF000000}),K3:function(){this.AHY();},AHY:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},As5:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.Bfj(
);var noOfBitmaps=this.Bfi();var noOfFonts=this.Bfk();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AIv=this.Ahr;var Acu=this.
Ae8;var AIw=this.Ahs;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
AxB.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AIv){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AIv.Kp.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AIv=AIv.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
Wy.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Acu){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Acu.Kp.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Acu=Acu.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.An_.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AIw){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AIw.Kp.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AIw=AIw.Af;}},AIG:function(H){var handle=this.attrSet;var
Acu=this.Ae8;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.Wy.Get(inx)&&this.
Wy.Get(inx).Oy){var bitmap=this.Wy.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Acu){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Acu.Kp.Get(lnx)&&Acu.Kp.Get(lnx).Oy){var bitmap=
Acu.Kp.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Acu=Acu.Af;}A.vv(
this,1);},Bi8:function(E){this.AR2(3,E);},Bi7:function(E){this.AR2(1,E);},Aqq:function(
E){this.AR2(0,E);},A6v:function(E){this.Bk9(0,E);},Bio:function(E){this.AEz(3,E);
},A6z:function(E){this.AEz(2,E);},A6y:function(E){this.AEz(1,E);},AgB:function(E
){this.AEz(0,E);},AR2:function(aFontNo,AeY){var Aco=aFontNo;var HQ=false;if(Aco<
0)return;if(Aco<4){HQ=this.An_.Get(Aco)!==AeY;this.An_.Set(Aco,AeY);}else{var BF=
this.Ahs;Aco=Aco-4;while(!!BF&&(Aco>=20)){BF=BF.Af;Aco=Aco-20;}if(!!BF){HQ=BF.Kp.
Get(Aco)!==AeY;BF.Kp.Set(Aco,AeY);}}if(HQ&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AeY)font=AeY.font;A.aaJ(handle,aFontNo,font);}if(HQ)A.vv(this
,1);},Bld:function(Wt){var HQ=false;if(Wt<4)Wt=4;if(Wt>256)Wt=256;Wt=Wt-4;if((Wt>
0)&&!this.Ahs){this.Ahs=A._NewObject(C.Az2,0);HQ=true;}if(!Wt&&!!this.Ahs){this.
Ahs=null;HQ=true;}var BF=this.Ahs;while(Wt>0){if((Wt>20)&&!BF.Af){BF.Af=A._NewObject(
C.Az2,0);HQ=true;}Wt=Wt-20;if(Wt>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=null;HQ=true;
}if(HQ){this.AHY();A.vv(this,1);}},Bfk:function(){var CO=4;var BF=this.Ahs;while(
!!BF){CO=CO+20;BF=BF.Af;}return CO;},Bk9:function(aBitmapNo,aBitmap){var PP=aBitmapNo;
var HQ=false;if(PP<0)return;if(PP<10){HQ=this.Wy.Get(PP)!==aBitmap;if(!!this.Wy.
Get(PP)&&this.Wy.Get(PP).Oy)A.zl([this,this.AIG],this.Wy.Get(PP),0);this.Wy.Set(
PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIG],aBitmap,0);}else{var BF=
this.Ae8;PP=PP-10;while(!!BF&&(PP>=20)){BF=BF.Af;PP=PP-20;}if(!!BF){HQ=BF.Kp.Get(
PP)!==aBitmap;if(!!BF.Kp.Get(PP)&&BF.Kp.Get(PP).Oy)A.zl([this,this.AIG],BF.Kp.Get(
PP),0);BF.Kp.Set(PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIG],aBitmap
,0);}}if(HQ&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(HQ)
A.vv(this,1);},Blb:function(Wr){var HQ=false;if(Wr<10)Wr=10;if(Wr>256)Wr=256;Wr=
Wr-10;if((Wr>0)&&!this.Ae8){this.Ae8=A._NewObject(C.Az0,0);HQ=true;}if(!Wr&&!!this.
Ae8){this.Ae8=null;HQ=true;}var BF=this.Ae8;while(Wr>0){if((Wr>20)&&!BF.Af){BF.Af=
A._NewObject(C.Az0,0);HQ=true;}Wr=Wr-20;if(Wr>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=
null;HQ=true;}if(HQ){this.AHY();A.vv(this,1);}},Bfi:function(){var CO=10;var BF=
this.Ae8;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},AEz:function(aColorNo,aColor
){var Ace=aColorNo;var HQ=false;if(Ace<0)return;if(Ace<10){HQ=this.AxB.Get(Ace)!==
aColor;this.AxB.Set(Ace,aColor);}else{var BF=this.Ahr;Ace=Ace-10;while(!!BF&&(Ace>=
20)){BF=BF.Af;Ace=Ace-20;}if(!!BF){HQ=BF.Kp.Get(Ace)!==aColor;BF.Kp.Set(Ace,aColor
);}}if(HQ&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(HQ)A.vv(this,0);},Blc:function(Ws){var HQ=false;if(Ws<10)Ws=10;if(Ws>256)Ws=
256;Ws=Ws-10;if((Ws>0)&&!this.Ahr){this.Ahr=A._NewObject(C.Az1,0);HQ=true;}if(!Ws&&
!!this.Ahr){this.Ahr=null;HQ=true;}var BF=this.Ahr;while(Ws>0){if((Ws>20)&&!BF.Af
){BF.Af=A._NewObject(C.Az1,0);HQ=true;}Ws=Ws-20;if(Ws>0)BF=BF.Af;}if(!!BF&&!!BF.
Af){BF.Af=null;HQ=true;}if(HQ){this.AHY();A.vv(this,1);}},Bfj:function(){var CO=
10;var BF=this.Ahr;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},_Init:function(aArg
){(this.An_=[]).__proto__=C.AttrSet.An_;(this.Wy=[]).__proto__=C.AttrSet.Wy;(this.
AxB=[]).__proto__=C.AttrSet.AxB;this.__proto__=C.AttrSet;this.An_.Set(0,A.zW(A.abj.
AAG));this.Wy.Set(0,A.zW(A.abj.K2));this.A3O=A.zW(A.abj.AAG);this.A2E=A.zW(A.abj.
K2);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ahs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ae8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahr)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.An_,D);A.aaf(this.Wy,D);if((B=this.A3O)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A2E)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.Az2={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(
this.Kp=[]).__proto__=C.Az2.Kp;this.__proto__=C.Az2;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.Az0={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(this.Kp=[]).__proto__=
C.Az0.Kp;this.__proto__=C.Az0;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.Az1={Af:
null,Kp:A.aan(20,0,null),_Init:function(aArg){(this.Kp=[]).__proto__=C.Az1.Kp;this.
__proto__=C.Az1;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hl={path:null,K3:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Acz:function(H){A.vv(this,0);},E5:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Acz],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A13:function(aSubPathNo,aX,aY){A.ow([this,this.Acz],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},U1:function(aSubPathNo){A.ow([this,this.Acz],this);var handle=this.path;A.qP(handle
,aSubPathNo);},US:function(aSubPathNo,aX,aY){A.ow([this,this.Acz],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},Jl:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AvS(1);A.ow([this,this.Acz],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bfl:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},AvS:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bfl()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Acz],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hl;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.AtB={Left:0x1,Y5:0x2
,Right:0x4,A2F:0x8,Bz3:0x10};C.BzE={Bzs:0,BAA:1};C.BAI={ByQ:0,BAn:1,BkV:2};C.BAH={
BzG:0,BBo:1,BkV:2,Av$:3};C.ByI={ByH:0,BBi:1,BAM:2,BAN:3,BAP:4,BAO:5};C.AKA={NF:360
,Jr:0,Ih:0,QK:0,Aik:function(H){var Fp=this.NF;var FK;if((Fp>=360)||(Fp<=-360))Fp=
360;this.AvS(2);{var AM=this.Ih;if(this.Jr>AM)AM=this.Jr;if(Fp===360)FK=AM|0;else
FK=((Fp*AM)/360)|0;if(FK<0)FK=-FK;FK=FK+1;}if(((!Fp||!this.Ih)||!this.Jr)||(((((
this.QK===2)||(this.QK===3))||(this.QK===4))||(this.QK===5))&&((0>=this.Ih)||(0>=
this.Jr)))){this.Jl(0,0);this.Jl(1,0);return;}if(Fp===360){this.Jl(0,FK+1);this.
Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,360,FK);this.U1(0);return;}if(!this.QK){
this.Jl(0,FK+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);return;}if(this.
QK===1){this.Jl(0,FK+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.
U1(0);return;}if(this.QK===2){this.Jl(0,FK+1);this.Jl(1,0);this.US(0,0,0);this.E5(
0,0,0,this.Ih,this.Jr,0,Fp,FK);this.U1(0);return;}if(this.QK===4){var Of=this.Ih;
var Lq=Math.sqrt(Of*Of);var SN=((Lq*0.25)|0)+3;this.Jl(0,(FK+SN)+2);this.Jl(1,0);
this.US(0,0,0);if(Fp>=0)this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SN);else this.E5(0,Of
/2,0,Lq/2,Lq/2,180,0,SN);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.U1(0);return;
}if(this.QK===5){var Jy=Fp;var Of=this.Ih*Math.cos(Jy*A.kw);var Ah0=this.Jr*Math.
sin(Jy*A.kw);var Lq=Math.sqrt((Of*Of)+(Ah0*Ah0));var SN=((Lq*0.25)|0)+3;this.Jl(
0,(FK+SN)+2);this.Jl(1,0);this.US(0,0,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);
if(Fp>=0)this.E5(0,Of/2,Ah0/2,Lq/2,Lq/2,Jy,Jy+180,SN);else this.E5(0,Of/2,Ah0/2,
Lq/2,Lq/2,Jy,Jy-180,SN);this.U1(0);return;}if(this.QK===3){var Aig=this.Ih;var AcJ=
Math.sqrt(Aig*Aig);var Jy=Fp;var AhE=this.Ih*Math.cos(Jy*A.kw);var AhF=this.Jr*Math.
sin(Jy*A.kw);var Acj=Math.sqrt((AhE*AhE)+(AhF*AhF));var Aos=((AcJ*0.25)|0)+3;var
Aor=((Acj*0.25)|0)+3;this.Jl(0,((FK+Aos)+Aor)+10);this.Jl(1,0);this.US(0,0,0);if(
Fp>=0){this.E5(0,Aig/2,0,AcJ/2,AcJ/2,180,360,Aos);this.E5(0,0,0,this.Ih,this.Jr,
0,Fp,FK);this.E5(0,AhE/2,AhF/2,Acj/2,Acj/2,Jy,Jy+180,Aor);}else{this.E5(0,Aig/2,
0,AcJ/2,AcJ/2,180,0,Aos);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,AhE/2,
AhF/2,Acj/2,Acj/2,Jy,Jy-180,Aor);}this.U1(0);return;}if(this.QK===2){this.Jl(0,(
FK*2)+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,0,0,0,0,this.
NF,this.NF-Fp,FK);this.U1(0);return;}if(this.QK===4){var Of=this.Ih;var Lq=Math.
sqrt(Of*Of);var SN=((Lq*0.25)|0)+3;this.Jl(0,((FK*2)+SN)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK
);this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SN);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp
,FK);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK);this.E5(0,Of/2,0,Lq/2,Lq/2,180,0,SN
);}this.U1(0);return;}if(this.QK===5){var Jy=Fp;var sin=Math.sin(Jy*A.kw);var cos=
Math.cos(Jy*A.kw);var Of=this.Ih*cos;var Ah0=this.Jr*sin;var Lq=Math.sqrt((Of*Of
)+(Ah0*Ah0));var SN=((Lq*0.25)|0)+3;this.Jl(0,((FK*2)+SN)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,Of/2,Ah0/2,Lq/2,Lq/2,Jy,Jy+180
,SN);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK);}else{this.E5(0,0,0,this.Ih,this.Jr
,0,Fp,FK);this.E5(0,Of/2,Ah0/2,Lq/2,Lq/2,Jy,Jy-180,SN);this.E5(0,0,0,0,0,this.NF
,this.NF-Fp,FK);}this.U1(0);return;}if(this.QK===3){var Jy=Fp;var Bu5=Math.sin(Jy
*A.kw);var Bu0=Math.cos(Jy*A.kw);var Aig=this.Ih;var AhE=this.Ih*Bu0;var AhF=this.
Jr*Bu5;var AcJ=Math.sqrt(Aig*Aig);var Acj=Math.sqrt((AhE*AhE)+(AhF*AhF));var Aos=((
AcJ*0.25)|0)+3;var Aor=((Acj*0.25)|0)+3;this.Jl(0,(((FK*2)+Aos)+Aor)+4);this.Jl(
1,0);if(Fp>=0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,AhE/2,AhF/2,Acj/
2,Acj/2,Jy,Jy+180,Aor);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK);this.E5(0,Aig/2,
0,AcJ/2,AcJ/2,180,360,Aos);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(
0,AhE/2,AhF/2,Acj/2,Acj/2,Jy,Jy-180,Aor);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK
);this.E5(0,Aig/2,0,AcJ/2,AcJ/2,180,0,Aos);}this.U1(0);return;}},BiJ:function(E){
if(E===this.NF)return;this.NF=E;if((this.Ih>0)&&(this.Jr>0))A.ow([this,this.Aik]
,this);},BjU:function(E){if((E===this.Ih)&&(E===this.Jr))return;this.Ih=E;this.Jr=
E;if(!!this.NF)A.ow([this,this.Aik],this);},Bj4:function(E){if(E===this.QK)return;
this.QK=E;if((!!this.NF&&(this.Ih>0))&&(this.Jr>0))A.ow([this,this.Aik],this);},
_Init:function(aArg){C.Hl._Init.call(this,aArg);this.__proto__=C.AKA;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Aj;C.AKA.__proto__=C.Hl;};C._ReInit=function(
){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */