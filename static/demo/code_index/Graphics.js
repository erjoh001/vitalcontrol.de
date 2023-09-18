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
C.Canvas={Dj:null,ACy:null,Qh:A.vx,Pf:0,Axq:false,K3:function(){if(this.Axq)this.
DetachBitmap();},Init:function(aArg){this.Oy=true;},Aqt:function(E){if((E[0]<=0)||(
E[1]<=0))E=B$;if(A.z8(E,this.FrameSize))return;if(this.Axq)throw new Error(BH);this.
FrameSize=E;this.UO=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B$;this.FrameDelay=
0;this.NoOfFrames=1;}this.Qh=[].concat(B$,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Pf;for(this.Pf=this.NoOfFrames-1;this.Pf>=0;this.Pf--)this.AtS(this.Qh,this.
Qh,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Pf=dstFrameNr;}}if(!(((
B=this.Qh)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.ACy)?B[1].call(B[0],this):null;this.Qh=EV;}},DetachBitmap:function(
){if(!this.Axq)throw new Error(GT);this.bitmap=null;this.Axq=false;this.FrameSize=
B$;this.FrameDelay=0;this.NoOfFrames=1;this.UO=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Jt);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Axq=true;var noOfFrames=1;var frameSize=B$;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.UO=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Bev:function(aClip
,AnA,A_g,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!AnA){AnA.As7();attrSet=AnA.attrSet;}if(!!A_g)attrString=A_g.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A3u:function(aClip,AeZ,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AYj,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AeZ||!AeZ.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AYj===1)orient=
90;else if(AYj===2)orient=180;else if(AYj===3)orient=270;var dstFrameNo=this.Pf;
var dstBitmap=this.bitmap;var srcFont=AeZ.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Bex:function(aClip,aBitmap,aFrameNr,aDstRect,Ar0,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!Ar0)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
Pf;var srcRect=[].concat(B$,aBitmap.FrameSize);var left=((Ar0&0x1)===0x1);var top=((
Ar0&0x2)===0x2);var right=((Ar0&0x4)===0x4);var bottom=((Ar0&0x8)===0x8);var interior=((
Ar0&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ha:
function(aClip,AnE,aDstRect,aFlipY,aOffset,aWidth,BtT,Bs3,Btn,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!AnE||!AnE.path)return;var style=0;switch(BtT){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(Bs3){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(Btn){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnE.path;{A.aa5(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased);}},Ag7:function(aClip,aBitmap,aFrameNr
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
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},BkZ:function(
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
,aColorTR,aColorBR,aColorBL,aBlend);}},Ado:function(aClip,AnE,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bs7){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!AnE||!AnE.path)return;var nonZeroWinding=Bs7===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;var path=AnE.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bey:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AtS:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Pf;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BeA:function(aClip,aDstPos1,aDstPos2,BtY,BtZ,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var AfB=BtY;var AfC=BtZ;var AcA=aDstPos1;
var AcB=aDstPos2;if(A.z8(AcA,AcB))return;if(AfB<=1)AfB=1;if(AfC<=1)AfC=1;var AhL=
AfB/2;var AhM=AfC/2;var Aob=AcA[0];var Aoc=AcA[1];var Aod=AcB[0];var Aoe=AcB[1];
var JY=Aod-Aob;var JZ=Aoe-Aoc;var IR=Math.sqrt((JY*JY)+(JZ*JZ));if(((AfB>4096)||(
AfC>4096))||(IR>4096)){A.aa8("%s",PJ);return;}JY=JY/IR;JZ=JZ/IR;var x1=Aob+(JZ*AhL
);var y1=Aoc-(JY*AhL);var x2=Aod+(JZ*AhM);var y2=Aoe-(JY*AhM);var x3=Aod-(JZ*AhM
);var y3=Aoe+(JY*AhM);var x4=Aob-(JZ*AhL);var y4=Aoc+(JY*AhL);var BbL=A.zW(A.abj.
Arv);var srcRect=[].concat(N1,A.aaj(BbL.FrameSize,CJ));var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;var srcBitmap=BbL.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},AtC:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Pf;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Aj._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.K3();this.__proto__=A.abj.Aj;A.
abj.Aj._Done.call(this);},_Mark:function(D){var B;A.abj.Aj._Mark.call(this,D);if((
B=this.Dj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ACy)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Awi={Vt:1,Vu:0,Yc:0,Yd:
0,Vv:0,Vw:1,Ye:0,Yf:0,Qs:0,Qt:0,Yg:1,Vx:0,Tt:0,Tu:0,Yh:0,Vy:1,T_:0,T9:0,T8:0,Af6:
0,AkY:true,AAb:function(aX,aY){var UG=((aX*this.Qs)+(aY*this.Qt))+this.Vx;var BU=((
aX*this.Tt)+(aY*this.Tu))+this.Vy;if(!!BU&&(BU!==1))UG=UG/BU;this.T_=UG;return true;
},AjU:function(aX,aY){var Asj=this.Af6;if(Asj<0)return false;var FY=((aX*this.Vt
)+(aY*this.Vu))+this.Yd;var Dl=((aX*this.Vv)+(aY*this.Vw))+this.Yf;var UG=((aX*this.
Qs)+(aY*this.Qt))+this.Vx;var BU=((aX*this.Tt)+(aY*this.Tu))+this.Vy;var Ay5=1;if(
!!BU&&(BU!==1)){FY=FY/BU;Dl=Dl/BU;UG=UG/BU;}if(Asj!==-UG)Ay5=1/(UG+Asj);if(!!Asj
)Ay5=Ay5*Asj;this.T8=FY*Ay5;this.T9=Dl*Ay5;this.T_=UG+Asj;return true;},BfJ:function(
GW,OS,PM){if(!GW||!OS)throw new Error(Fn);this.Vt=GW.Vt+((OS.Vt-GW.Vt)*PM);this.
Vu=GW.Vu+((OS.Vu-GW.Vu)*PM);this.Yc=GW.Yc+((OS.Yc-GW.Yc)*PM);this.Yd=GW.Yd+((OS.
Yd-GW.Yd)*PM);this.Vv=GW.Vv+((OS.Vv-GW.Vv)*PM);this.Vw=GW.Vw+((OS.Vw-GW.Vw)*PM);
this.Ye=GW.Ye+((OS.Ye-GW.Ye)*PM);this.Yf=GW.Yf+((OS.Yf-GW.Yf)*PM);this.Qs=GW.Qs+((
OS.Qs-GW.Qs)*PM);this.Qt=GW.Qt+((OS.Qt-GW.Qt)*PM);this.Yg=GW.Yg+((OS.Yg-GW.Yg)*PM
);this.Vx=GW.Vx+((OS.Vx-GW.Vx)*PM);this.Tt=GW.Tt+((OS.Tt-GW.Tt)*PM);this.Tu=GW.Tu+((
OS.Tu-GW.Tu)*PM);this.Yh=GW.Yh+((OS.Yh-GW.Yh)*PM);this.Vy=GW.Vy+((OS.Vy-GW.Vy)*PM
);this.Af6=GW.Af6+((OS.Af6-GW.Af6)*PM);this.AkY=false;return this;},Aej:function(
AG_,AG$,AHa){this.Vt=this.Vt*AG_;this.Vu=this.Vu*AG$;this.Yc=this.Yc*AHa;this.Vv=
this.Vv*AG_;this.Vw=this.Vw*AG$;this.Ye=this.Ye*AHa;this.Qs=this.Qs*AG_;this.Qt=
this.Qt*AG$;this.Yg=this.Yg*AHa;this.Tt=this.Tt*AG_;this.Tu=this.Tu*AG$;this.Yh=
this.Yh*AHa;this.AkY=false;return this;},Bme:function(AG2,AG3,AG4){this.Yd=((this.
Yd+(this.Vt*AG2))+(this.Vu*AG3))+(this.Yc*AG4);this.Yf=((this.Yf+(this.Vv*AG2))+(
this.Vw*AG3))+(this.Ye*AG4);this.Vx=((this.Vx+(this.Qs*AG2))+(this.Qt*AG3))+(this.
Yg*AG4);this.Vy=((this.Vy+(this.Tt*AG2))+(this.Tu*AG3))+(this.Yh*AG4);this.AkY=false;
return this;},ABY:function(){return this.AkY||((((((((((((((((this.Vt===1)&&!this.
Vu)&&!this.Yc)&&!this.Yd)&&!this.Vv)&&(this.Vw===1))&&!this.Ye)&&!this.Yf)&&!this.
Qs)&&!this.Qt)&&(this.Yg===1))&&!this.Vx)&&!this.Tt)&&!this.Tu)&&!this.Yh)&&(this.
Vy===1));},Bej:function(AHe,AHh,AHf,AHi,AYx,AYy,AHg,AHj){var AxQ=AHf-AYx;var AxS=
AHi-AYy;var AxR=AHg-AYx;var AxT=AHj-AYy;var Azm=((AHe-AHf)+AYx)-AHg;var Azn=((AHh-
AHi)+AYy)-AHj;var AnY=(AxQ*AxT)-(AxS*AxR);if(!AnY)return null;this.Qs=((Azm*AxT)-(
Azn*AxR))/AnY;this.Qt=((AxQ*Azn)-(AxS*Azm))/AnY;this.Yg=0;this.Vx=1;this.Vt=(AHf-
AHe)+(this.Qs*AHf);this.Vu=(AHg-AHe)+(this.Qt*AHg);this.Yc=0;this.Yd=AHe;this.Vv=(
AHi-AHh)+(this.Qs*AHi);this.Vw=(AHj-AHh)+(this.Qt*AHj);this.Ye=0;this.Yf=AHh;this.
Tt=0;this.Tu=0;this.Yh=0;this.Vy=1;this.AkY=false;return this;},Bdw:function(KJ){
if(!KJ)return this;this.Vt=KJ.Vt;this.Vu=KJ.Vu;this.Yc=KJ.Yc;this.Yd=KJ.Yd;this.
Vv=KJ.Vv;this.Vw=KJ.Vw;this.Ye=KJ.Ye;this.Yf=KJ.Yf;this.Qs=KJ.Qs;this.Qt=KJ.Qt;this.
Yg=KJ.Yg;this.Vx=KJ.Vx;this.Tt=KJ.Tt;this.Tu=KJ.Tu;this.Yh=KJ.Yh;this.Vy=KJ.Vy;this.
AkY=KJ.AkY;this.Af6=KJ.Af6;return this;},A4J:function(){this.Vt=1;this.Vu=0;this.
Yc=0;this.Yd=0;this.Vv=0;this.Vw=1;this.Ye=0;this.Yf=0;this.Qs=0;this.Qt=0;this.
Yg=1;this.Vx=0;this.Tt=0;this.Tu=0;this.Yh=0;this.Vy=1;this.AkY=true;return this;
},_Init:function(aArg){this.__proto__=C.Awi;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A2n={CZ:A.vw,attrString:null,K3:function(){this.A3g();},A3g:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CZ=B$;}
,Ajc:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},Bfr:function(){return this.CZ;},Bko:function(
AnA,aString,aWidth,aEnableBidiText){this.A3g();var attrSet=null;var handle=null;
var s=B$;if(!!AnA){AnA.As7();attrSet=AnA.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CZ=s;},_Init:function(aArg){this.__proto__=
C.A2n;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Ahr:
null,Ae9:null,Ahq:null,An$:A.aan(4,null,null),Wx:A.aan(10,null,null),A3O:null,A2E:
null,attrSet:null,AxA:A.aan(10,0,{0:0xFF000000}),K3:function(){this.AHZ();},AHZ:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},As7:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.Bfh(
);var noOfBitmaps=this.Bfg();var noOfFonts=this.Bfi();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AIw=this.Ahq;var Act=this.
Ae9;var AIx=this.Ahr;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
AxA.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AIw){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AIw.Kp.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AIw=AIw.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
Wx.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Act){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Act.Kp.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Act=Act.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.An$.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AIx){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AIx.Kp.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AIx=AIx.Af;}},AIH:function(H){var handle=this.attrSet;var
Act=this.Ae9;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.Wx.Get(inx)&&this.
Wx.Get(inx).Oy){var bitmap=this.Wx.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Act){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Act.Kp.Get(lnx)&&Act.Kp.Get(lnx).Oy){var bitmap=
Act.Kp.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Act=Act.Af;}A.vv(
this,1);},Bi7:function(E){this.AR3(3,E);},Bi6:function(E){this.AR3(1,E);},Aqr:function(
E){this.AR3(0,E);},A6u:function(E){this.Bk8(0,E);},Bin:function(E){this.AEy(3,E);
},A6y:function(E){this.AEy(2,E);},A6x:function(E){this.AEy(1,E);},AgC:function(E
){this.AEy(0,E);},AR3:function(aFontNo,AeZ){var Acn=aFontNo;var HQ=false;if(Acn<
0)return;if(Acn<4){HQ=this.An$.Get(Acn)!==AeZ;this.An$.Set(Acn,AeZ);}else{var BF=
this.Ahr;Acn=Acn-4;while(!!BF&&(Acn>=20)){BF=BF.Af;Acn=Acn-20;}if(!!BF){HQ=BF.Kp.
Get(Acn)!==AeZ;BF.Kp.Set(Acn,AeZ);}}if(HQ&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AeZ)font=AeZ.font;A.aaJ(handle,aFontNo,font);}if(HQ)A.vv(this
,1);},Blc:function(Ws){var HQ=false;if(Ws<4)Ws=4;if(Ws>256)Ws=256;Ws=Ws-4;if((Ws>
0)&&!this.Ahr){this.Ahr=A._NewObject(C.Az1,0);HQ=true;}if(!Ws&&!!this.Ahr){this.
Ahr=null;HQ=true;}var BF=this.Ahr;while(Ws>0){if((Ws>20)&&!BF.Af){BF.Af=A._NewObject(
C.Az1,0);HQ=true;}Ws=Ws-20;if(Ws>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=null;HQ=true;
}if(HQ){this.AHZ();A.vv(this,1);}},Bfi:function(){var CO=4;var BF=this.Ahr;while(
!!BF){CO=CO+20;BF=BF.Af;}return CO;},Bk8:function(aBitmapNo,aBitmap){var PP=aBitmapNo;
var HQ=false;if(PP<0)return;if(PP<10){HQ=this.Wx.Get(PP)!==aBitmap;if(!!this.Wx.
Get(PP)&&this.Wx.Get(PP).Oy)A.zl([this,this.AIH],this.Wx.Get(PP),0);this.Wx.Set(
PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIH],aBitmap,0);}else{var BF=
this.Ae9;PP=PP-10;while(!!BF&&(PP>=20)){BF=BF.Af;PP=PP-20;}if(!!BF){HQ=BF.Kp.Get(
PP)!==aBitmap;if(!!BF.Kp.Get(PP)&&BF.Kp.Get(PP).Oy)A.zl([this,this.AIH],BF.Kp.Get(
PP),0);BF.Kp.Set(PP,aBitmap);if(!!aBitmap&&aBitmap.Oy)A.y_([this,this.AIH],aBitmap
,0);}}if(HQ&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(HQ)
A.vv(this,1);},Bla:function(Wq){var HQ=false;if(Wq<10)Wq=10;if(Wq>256)Wq=256;Wq=
Wq-10;if((Wq>0)&&!this.Ae9){this.Ae9=A._NewObject(C.AzZ,0);HQ=true;}if(!Wq&&!!this.
Ae9){this.Ae9=null;HQ=true;}var BF=this.Ae9;while(Wq>0){if((Wq>20)&&!BF.Af){BF.Af=
A._NewObject(C.AzZ,0);HQ=true;}Wq=Wq-20;if(Wq>0)BF=BF.Af;}if(!!BF&&!!BF.Af){BF.Af=
null;HQ=true;}if(HQ){this.AHZ();A.vv(this,1);}},Bfg:function(){var CO=10;var BF=
this.Ae9;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},AEy:function(aColorNo,aColor
){var Acd=aColorNo;var HQ=false;if(Acd<0)return;if(Acd<10){HQ=this.AxA.Get(Acd)!==
aColor;this.AxA.Set(Acd,aColor);}else{var BF=this.Ahq;Acd=Acd-10;while(!!BF&&(Acd>=
20)){BF=BF.Af;Acd=Acd-20;}if(!!BF){HQ=BF.Kp.Get(Acd)!==aColor;BF.Kp.Set(Acd,aColor
);}}if(HQ&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(HQ)A.vv(this,0);},Blb:function(Wr){var HQ=false;if(Wr<10)Wr=10;if(Wr>256)Wr=
256;Wr=Wr-10;if((Wr>0)&&!this.Ahq){this.Ahq=A._NewObject(C.Az0,0);HQ=true;}if(!Wr&&
!!this.Ahq){this.Ahq=null;HQ=true;}var BF=this.Ahq;while(Wr>0){if((Wr>20)&&!BF.Af
){BF.Af=A._NewObject(C.Az0,0);HQ=true;}Wr=Wr-20;if(Wr>0)BF=BF.Af;}if(!!BF&&!!BF.
Af){BF.Af=null;HQ=true;}if(HQ){this.AHZ();A.vv(this,1);}},Bfh:function(){var CO=
10;var BF=this.Ahq;while(!!BF){CO=CO+20;BF=BF.Af;}return CO;},_Init:function(aArg
){(this.An$=[]).__proto__=C.AttrSet.An$;(this.Wx=[]).__proto__=C.AttrSet.Wx;(this.
AxA=[]).__proto__=C.AttrSet.AxA;this.__proto__=C.AttrSet;this.An$.Set(0,A.zW(A.abj.
AAF));this.Wx.Set(0,A.zW(A.abj.K2));this.A3O=A.zW(A.abj.AAF);this.A2E=A.zW(A.abj.
K2);A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ahr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ae9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahq)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.An$,D);A.aaf(this.Wx,D);if((B=this.A3O)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A2E)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.Az1={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(
this.Kp=[]).__proto__=C.Az1.Kp;this.__proto__=C.Az1;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AzZ={Af:null,Kp:A.aan(20,null,null),_Init:function(aArg){(this.Kp=[]).__proto__=
C.AzZ.Kp;this.__proto__=C.AzZ;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.Kp,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.Az0={Af:
null,Kp:A.aan(20,0,null),_Init:function(aArg){(this.Kp=[]).__proto__=C.Az0.Kp;this.
__proto__=C.Az0;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hl={path:null,K3:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Acy:function(H){A.vv(this,0);},E5:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Acy],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A13:function(aSubPathNo,aX,aY){A.ow([this,this.Acy],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},U1:function(aSubPathNo){A.ow([this,this.Acy],this);var handle=this.path;A.qP(handle
,aSubPathNo);},US:function(aSubPathNo,aX,aY){A.ow([this,this.Acy],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},Jl:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AvU(1);A.ow([this,this.Acy],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},Bfj:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},AvU:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.Bfj()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Acy],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hl;A.hJ++;},_Done:function(){this.K3();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.AtD={Left:0x1,Y3:0x2
,Right:0x4,A2F:0x8,Bz3:0x10};C.BzE={Bzs:0,BAA:1};C.BAI={ByQ:0,BAn:1,BkU:2};C.BAH={
BzG:0,BBo:1,BkU:2,Awb:3};C.ByI={ByH:0,BBi:1,BAM:2,BAN:3,BAP:4,BAO:5};C.AKB={NF:360
,Jr:0,Ih:0,QK:0,Aij:function(H){var Fp=this.NF;var FK;if((Fp>=360)||(Fp<=-360))Fp=
360;this.AvU(2);{var AM=this.Ih;if(this.Jr>AM)AM=this.Jr;if(Fp===360)FK=AM|0;else
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
}if(this.QK===5){var Jy=Fp;var Of=this.Ih*Math.cos(Jy*A.kw);var AhZ=this.Jr*Math.
sin(Jy*A.kw);var Lq=Math.sqrt((Of*Of)+(AhZ*AhZ));var SN=((Lq*0.25)|0)+3;this.Jl(
0,(FK+SN)+2);this.Jl(1,0);this.US(0,0,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);
if(Fp>=0)this.E5(0,Of/2,AhZ/2,Lq/2,Lq/2,Jy,Jy+180,SN);else this.E5(0,Of/2,AhZ/2,
Lq/2,Lq/2,Jy,Jy-180,SN);this.U1(0);return;}if(this.QK===3){var Aif=this.Ih;var AcI=
Math.sqrt(Aif*Aif);var Jy=Fp;var AhD=this.Ih*Math.cos(Jy*A.kw);var AhE=this.Jr*Math.
sin(Jy*A.kw);var Aci=Math.sqrt((AhD*AhD)+(AhE*AhE));var Aot=((AcI*0.25)|0)+3;var
Aos=((Aci*0.25)|0)+3;this.Jl(0,((FK+Aot)+Aos)+10);this.Jl(1,0);this.US(0,0,0);if(
Fp>=0){this.E5(0,Aif/2,0,AcI/2,AcI/2,180,360,Aot);this.E5(0,0,0,this.Ih,this.Jr,
0,Fp,FK);this.E5(0,AhD/2,AhE/2,Aci/2,Aci/2,Jy,Jy+180,Aos);}else{this.E5(0,Aif/2,
0,AcI/2,AcI/2,180,0,Aot);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,AhD/2,
AhE/2,Aci/2,Aci/2,Jy,Jy-180,Aos);}this.U1(0);return;}if(this.QK===2){this.Jl(0,(
FK*2)+1);this.Jl(1,0);this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,0,0,0,0,this.
NF,this.NF-Fp,FK);this.U1(0);return;}if(this.QK===4){var Of=this.Ih;var Lq=Math.
sqrt(Of*Of);var SN=((Lq*0.25)|0)+3;this.Jl(0,((FK*2)+SN)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK
);this.E5(0,Of/2,0,Lq/2,Lq/2,180,360,SN);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp
,FK);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK);this.E5(0,Of/2,0,Lq/2,Lq/2,180,0,SN
);}this.U1(0);return;}if(this.QK===5){var Jy=Fp;var sin=Math.sin(Jy*A.kw);var cos=
Math.cos(Jy*A.kw);var Of=this.Ih*cos;var AhZ=this.Jr*sin;var Lq=Math.sqrt((Of*Of
)+(AhZ*AhZ));var SN=((Lq*0.25)|0)+3;this.Jl(0,((FK*2)+SN)+2);this.Jl(1,0);if(Fp>=
0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,Of/2,AhZ/2,Lq/2,Lq/2,Jy,Jy+180
,SN);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK);}else{this.E5(0,0,0,this.Ih,this.Jr
,0,Fp,FK);this.E5(0,Of/2,AhZ/2,Lq/2,Lq/2,Jy,Jy-180,SN);this.E5(0,0,0,0,0,this.NF
,this.NF-Fp,FK);}this.U1(0);return;}if(this.QK===3){var Jy=Fp;var Bu5=Math.sin(Jy
*A.kw);var Bu0=Math.cos(Jy*A.kw);var Aif=this.Ih;var AhD=this.Ih*Bu0;var AhE=this.
Jr*Bu5;var AcI=Math.sqrt(Aif*Aif);var Aci=Math.sqrt((AhD*AhD)+(AhE*AhE));var Aot=((
AcI*0.25)|0)+3;var Aos=((Aci*0.25)|0)+3;this.Jl(0,(((FK*2)+Aot)+Aos)+4);this.Jl(
1,0);if(Fp>=0){this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(0,AhD/2,AhE/2,Aci/
2,Aci/2,Jy,Jy+180,Aos);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK);this.E5(0,Aif/2,
0,AcI/2,AcI/2,180,360,Aot);}else{this.E5(0,0,0,this.Ih,this.Jr,0,Fp,FK);this.E5(
0,AhD/2,AhE/2,Aci/2,Aci/2,Jy,Jy-180,Aos);this.E5(0,0,0,0,0,this.NF,this.NF-Fp,FK
);this.E5(0,Aif/2,0,AcI/2,AcI/2,180,0,Aot);}this.U1(0);return;}},BiI:function(E){
if(E===this.NF)return;this.NF=E;if((this.Ih>0)&&(this.Jr>0))A.ow([this,this.Aij]
,this);},BjT:function(E){if((E===this.Ih)&&(E===this.Jr))return;this.Ih=E;this.Jr=
E;if(!!this.NF)A.ow([this,this.Aij],this);},Bj3:function(E){if(E===this.QK)return;
this.QK=E;if((!!this.NF&&(this.Ih>0))&&(this.Jr>0))A.ow([this,this.Aij],this);},
_Init:function(aArg){C.Hl._Init.call(this,aArg);this.__proto__=C.AKB;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Aj;C.AKB.__proto__=C.Hl;};C._ReInit=function(
){};C.DE=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */