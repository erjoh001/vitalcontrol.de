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
var B3=[0,0];var BI="Can not resize explicitly attached graphics engine bitmaps";
var EG=[0,0,0,0];var Gr="No graphics engine bitmap attached to this canvas";var I4=
"The canvas is already initialized with a graphics engine bitmap";var Ip="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Oc="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Pb="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Nm=[1,1];var Cv=[2,2];var FK="Missing matrices to interpolate";
C.Canvas={C4:null,AAE:null,PK:A.vx,OH:0,AvN:false,Kx:function(){if(this.AvN)this.
DetachBitmap();},Init:function(aArg){this.NY=true;},AoY:function(E){if((E[0]<=0)||(
E[1]<=0))E=B3;if(A.z8(E,this.FrameSize))return;if(this.AvN)throw new Error(BI);this.
FrameSize=E;this.TU=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>
0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle
);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=B3;this.FrameDelay=
0;this.NoOfFrames=1;}this.PK=[].concat(B3,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.OH;for(this.OH=this.NoOfFrames-1;this.OH>=0;this.OH--)this.Asa(this.PK,this.
PK,0x00000000,0x00000000,0x00000000,0x00000000,false);this.OH=dstFrameNr;}}if(!(((
B=this.PK)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.AAE)?B[1].call(B[0],this):null;this.PK=EG;}},DetachBitmap:function(
){if(!this.AvN)throw new Error(Gr);this.bitmap=null;this.AvN=false;this.FrameSize=
B3;this.FrameDelay=0;this.NoOfFrames=1;this.TU=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(I4);if(!aBitmap)return this;this.
bitmap=aBitmap;this.AvN=true;var noOfFrames=1;var frameSize=B3;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.TU=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Ba4:function(aClip
,Al_,A6V,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend){if(
!this.bitmap)this.Update();if(!this.bitmap)return;var attrSet=null;var attrString=
null;if(!!Al_){Al_.Arr();attrSet=Al_.attrSet;}if(!!A6V)attrString=A6V.attrString;
if(!attrSet||!attrString)return;var dstBitmap=this.bitmap;var dstFrameNo=this.OH;{
A.zo(dstBitmap,attrSet,attrString,dstFrameNo,aClip,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend);}},A0l:function(aClip,AdL,aString,aOffset,aCount,
aDstRect,aSrcPos,aMinWidth,AVp,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!AdL||!AdL.
font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(AVp===1)orient=
90;else if(AVp===2)orient=180;else if(AVp===3)orient=270;var dstFrameNo=this.OH;
var dstBitmap=this.bitmap;var srcFont=AdL.font;{A.qT(dstBitmap,srcFont,aString,aOffset
,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Ba6:function(aClip,aBitmap,aFrameNr,aDstRect,Aqk,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.bitmap)return;
if((((!aBitmap||!aBitmap.bitmap)||!Aqk)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.
OH;var srcRect=[].concat(B3,aBitmap.FrameSize);var left=((Aqk&0x1)===0x1);var top=((
Aqk&0x2)===0x2);var right=((Aqk&0x4)===0x4);var bottom=((Aqk&0x8)===0x8);var interior=((
Aqk&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect
,left,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},GH:
function(aClip,Amc,aDstRect,aFlipY,aOffset,aWidth,Bqg,Bpp,BpL,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(!Amc||!Amc.path)return;var style=0;switch(Bqg){case 1:style=
1;break;case 3:style=2;break;case 2:style=3;break;default:;}switch(Bpp){case 1:style=
style|256;break;case 3:style=style|512;break;case 2:style=style|768;break;default:;
}switch(BpL){case 1:style=style|65536;break;case 2:style=style|131072;break;default:;
}var dstBitmap=this.bitmap;var dstFrameNo=this.OH;var path=Amc.path;{A.aa5(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased);}},AfR:function(aClip,aBitmap,aFrameNr
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;
if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2
)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;
if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2
)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1
)>4096))||((y2-y1)<-4096)){A.aa8("%s",Ip);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNr=this.OH;{A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr
,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4
,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bhv:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
A.aa8("%s",Oc);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.OH;{A.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},AZV:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.OH;{A.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Ab8:function(aClip,Amc,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bpt){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!Amc||!Amc.path)return;var nonZeroWinding=Bpt===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.OH;var path=Amc.path;{A.zs(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Ba7:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.OH;{A.zq(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Asa:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.OH;{
A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Ba9:function(aClip,aDstPos1,aDstPos2,Bql,Bqm,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Aei=Bql;var Aej=Bqm;var Abj=aDstPos1;
var Abk=aDstPos2;if(A.z8(Abj,Abk))return;if(Aei<=1)Aei=1;if(Aej<=1)Aej=1;var Agn=
Aei/2;var Ago=Aej/2;var AmK=Abj[0];var AmL=Abj[1];var AmM=Abk[0];var AmN=Abk[1];
var Jv=AmM-AmK;var Jw=AmN-AmL;var Is=Math.sqrt((Jv*Jv)+(Jw*Jw));if(((Aei>4096)||(
Aej>4096))||(Is>4096)){A.aa8("%s",Pb);return;}Jv=Jv/Is;Jw=Jw/Is;var x1=AmK+(Jw*Agn
);var y1=AmL-(Jv*Agn);var x2=AmM+(Jw*Ago);var y2=AmN-(Jv*Ago);var x3=AmM-(Jw*Ago
);var y3=AmN+(Jv*Ago);var x4=AmK-(Jw*Agn);var y4=AmL+(Jv*Agn);var A_j=A.zW(A.abj.
ApX);var srcRect=[].concat(Nm,A.aaj(A_j.FrameSize,Cv));var dstBitmap=this.bitmap;
var dstFrameNo=this.OH;var srcBitmap=A_j.bitmap;{A.aa9(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},ArY:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.OH;{A.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.abj.Ah._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Kx();this.__proto__=A.abj.Ah;A.
abj.Ah._Done.call(this);},_Mark:function(D){var B;A.abj.Ah._Mark.call(this,D);if((
B=this.C4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AAE)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.AuC={Uu:1,Uv:0,W$:0,Xa:
0,Uw:0,Ux:1,Xb:0,Xc:0,PV:0,PW:0,Xd:1,Uy:0,SK:0,SL:0,Xe:0,Uz:1,Th:0,Tg:0,Tf:0,AeQ:
0,Ajz:true,Ays:function(aX,aY){var TM=((aX*this.PV)+(aY*this.PW))+this.Uy;var BP=((
aX*this.SK)+(aY*this.SL))+this.Uz;if(!!BP&&(BP!==1))TM=TM/BP;this.Th=TM;return true;
},Ais:function(aX,aY){var AqG=this.AeQ;if(AqG<0)return false;var Fy=((aX*this.Uu
)+(aY*this.Uv))+this.Xa;var C6=((aX*this.Uw)+(aY*this.Ux))+this.Xc;var TM=((aX*this.
PV)+(aY*this.PW))+this.Uy;var BP=((aX*this.SK)+(aY*this.SL))+this.Uz;var Axl=1;if(
!!BP&&(BP!==1)){Fy=Fy/BP;C6=C6/BP;TM=TM/BP;}if(AqG!==-TM)Axl=1/(TM+AqG);if(!!AqG
)Axl=Axl*AqG;this.Tf=Fy*Axl;this.Tg=C6*Axl;this.Th=TM+AqG;return true;},Bcd:function(
Gs,Og,Pf){if(!Gs||!Og)throw new Error(FK);this.Uu=Gs.Uu+((Og.Uu-Gs.Uu)*Pf);this.
Uv=Gs.Uv+((Og.Uv-Gs.Uv)*Pf);this.W$=Gs.W$+((Og.W$-Gs.W$)*Pf);this.Xa=Gs.Xa+((Og.
Xa-Gs.Xa)*Pf);this.Uw=Gs.Uw+((Og.Uw-Gs.Uw)*Pf);this.Ux=Gs.Ux+((Og.Ux-Gs.Ux)*Pf);
this.Xb=Gs.Xb+((Og.Xb-Gs.Xb)*Pf);this.Xc=Gs.Xc+((Og.Xc-Gs.Xc)*Pf);this.PV=Gs.PV+((
Og.PV-Gs.PV)*Pf);this.PW=Gs.PW+((Og.PW-Gs.PW)*Pf);this.Xd=Gs.Xd+((Og.Xd-Gs.Xd)*Pf
);this.Uy=Gs.Uy+((Og.Uy-Gs.Uy)*Pf);this.SK=Gs.SK+((Og.SK-Gs.SK)*Pf);this.SL=Gs.SL+((
Og.SL-Gs.SL)*Pf);this.Xe=Gs.Xe+((Og.Xe-Gs.Xe)*Pf);this.Uz=Gs.Uz+((Og.Uz-Gs.Uz)*Pf
);this.AeQ=Gs.AeQ+((Og.AeQ-Gs.AeQ)*Pf);this.Ajz=false;return this;},Ac$:function(
AE8,AE9,AE_){this.Uu=this.Uu*AE8;this.Uv=this.Uv*AE9;this.W$=this.W$*AE_;this.Uw=
this.Uw*AE8;this.Ux=this.Ux*AE9;this.Xb=this.Xb*AE_;this.PV=this.PV*AE8;this.PW=
this.PW*AE9;this.Xd=this.Xd*AE_;this.SK=this.SK*AE8;this.SL=this.SL*AE9;this.Xe=
this.Xe*AE_;this.Ajz=false;return this;},BiH:function(AE0,AE1,AE2){this.Xa=((this.
Xa+(this.Uu*AE0))+(this.Uv*AE1))+(this.W$*AE2);this.Xc=((this.Xc+(this.Uw*AE0))+(
this.Ux*AE1))+(this.Xb*AE2);this.Uy=((this.Uy+(this.PV*AE0))+(this.PW*AE1))+(this.
Xd*AE2);this.Uz=((this.Uz+(this.SK*AE0))+(this.SL*AE1))+(this.Xe*AE2);this.Ajz=false;
return this;},Az9:function(){return this.Ajz||((((((((((((((((this.Uu===1)&&!this.
Uv)&&!this.W$)&&!this.Xa)&&!this.Uw)&&(this.Ux===1))&&!this.Xb)&&!this.Xc)&&!this.
PV)&&!this.PW)&&(this.Xd===1))&&!this.Uy)&&!this.SK)&&!this.SL)&&!this.Xe)&&(this.
Uz===1));},BaS:function(AFc,AFf,AFd,AFg,AVD,AVE,AFe,AFh){var Awc=AFd-AVD;var Awe=
AFg-AVE;var Awd=AFe-AVD;var Awf=AFh-AVE;var AxE=((AFc-AFd)+AVD)-AFe;var AxF=((AFf-
AFg)+AVE)-AFh;var Amw=(Awc*Awf)-(Awe*Awd);if(!Amw)return null;this.PV=((AxE*Awf)-(
AxF*Awd))/Amw;this.PW=((Awc*AxF)-(Awe*AxE))/Amw;this.Xd=0;this.Uy=1;this.Uu=(AFd-
AFc)+(this.PV*AFd);this.Uv=(AFe-AFc)+(this.PW*AFe);this.W$=0;this.Xa=AFc;this.Uw=(
AFg-AFf)+(this.PV*AFg);this.Ux=(AFh-AFf)+(this.PW*AFh);this.Xb=0;this.Xc=AFf;this.
SK=0;this.SL=0;this.Xe=0;this.Uz=1;this.Ajz=false;return this;},A$4:function(Kd){
if(!Kd)return this;this.Uu=Kd.Uu;this.Uv=Kd.Uv;this.W$=Kd.W$;this.Xa=Kd.Xa;this.
Uw=Kd.Uw;this.Ux=Kd.Ux;this.Xb=Kd.Xb;this.Xc=Kd.Xc;this.PV=Kd.PV;this.PW=Kd.PW;this.
Xd=Kd.Xd;this.Uy=Kd.Uy;this.SK=Kd.SK;this.SL=Kd.SL;this.Xe=Kd.Xe;this.Uz=Kd.Uz;this.
Ajz=Kd.Ajz;this.AeQ=Kd.AeQ;return this;},A1x:function(){this.Uu=1;this.Uv=0;this.
W$=0;this.Xa=0;this.Uw=0;this.Ux=1;this.Xb=0;this.Xc=0;this.PV=0;this.PW=0;this.
Xd=1;this.Uy=0;this.SK=0;this.SL=0;this.Xe=0;this.Uz=1;this.Ajz=true;return this;
},_Init:function(aArg){this.__proto__=C.AuC;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.AZj={CT:A.vw,attrString:null,Kx:function(){this.AZ_();},AZ_:function(){var handle=
this.attrString;if(!handle)return;A.zw(handle);this.attrString=null;this.CT=B3;}
,AhL:function(){var handle=this.attrString;var result=false;if(!handle)return false;
result=A.z7(handle);return result;},BbY:function(){return this.CT;},BgV:function(
Al_,aString,aWidth,aEnableBidiText){this.AZ_();var attrSet=null;var handle=null;
var s=B3;if(!!Al_){Al_.Arr();attrSet=Al_.attrSet;}if((aString===A.jm)||!attrSet)
return;handle=A.aay(attrSet,aString,aWidth,aEnableBidiText);if(!handle)return;s=
A.zD(handle);this.attrString=handle;this.CT=s;},_Init:function(aArg){this.__proto__=
C.AZj;A.hJ++;},_Done:function(){this.Kx();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::AttrString"};C.AttrSet={Af5:
null,AdU:null,Af4:null,AmI:A.aan(4,null,null),VD:A.aan(10,null,null),A0F:null,AZD:
null,attrSet:null,AvY:A.aan(10,0,{0:0xFF000000}),Kx:function(){this.AFU();},AFU:
function(){var handle=this.attrSet;if(!handle)return;A.zv(handle);this.attrSet=null;
},Arr:function(){if(!!this.attrSet)return;var handle=null;var noOfColors=this.BbO(
);var noOfBitmaps=this.BbN();var noOfFonts=this.BbP();handle=A.zi(noOfFonts,noOfBitmaps
,noOfColors);this.attrSet=handle;if(!handle)return;var AGo=this.Af4;var Abc=this.
AdU;var AGp=this.Af5;var inx;var lnx;for(inx=0;inx<10;inx=inx+1){var entry=this.
AvY.Get(inx);if(entry!==0x00000000)A.aaI(handle,inx,entry);}while(!!AGo){for(lnx=
0;lnx<20;lnx=lnx+1){var entry=AGo.JZ.Get(lnx);if(entry!==0x00000000)A.aaI(handle
,inx+lnx,entry);}inx=inx+20;AGo=AGo.Af;}for(inx=0;inx<10;inx=inx+1){var entry=this.
VD.Get(inx);if(!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx,
bitmap);}}while(!!Abc){for(lnx=0;lnx<20;lnx=lnx+1){var entry=Abc.JZ.Get(lnx);if(
!!entry){entry.Update();var bitmap=entry.bitmap;A.aaH(handle,inx+lnx,bitmap);}}inx=
inx+20;Abc=Abc.Af;}for(inx=0;inx<4;inx=inx+1){var entry=this.AmI.Get(inx);if(!!entry
){var font=entry.font;A.aaJ(handle,inx,font);}}while(!!AGp){for(lnx=0;lnx<20;lnx=
lnx+1){var entry=AGp.JZ.Get(lnx);if(!!entry){var font=entry.font;A.aaJ(handle,inx+
lnx,font);}}inx=inx+20;AGp=AGp.Af;}},AGA:function(H){var handle=this.attrSet;var
Abc=this.AdU;var inx;var lnx;for(inx=0;inx<10;inx=inx+1)if(!!this.VD.Get(inx)&&this.
VD.Get(inx).NY){var bitmap=this.VD.Get(inx).bitmap;A.aaH(handle,inx,bitmap);}while(
!!Abc){for(lnx=0;lnx<20;lnx=lnx+1)if(!!Abc.JZ.Get(lnx)&&Abc.JZ.Get(lnx).NY){var bitmap=
Abc.JZ.Get(lnx).bitmap;A.aaH(handle,inx+lnx,bitmap);}inx=inx+20;Abc=Abc.Af;}A.vv(
this,1);},BfC:function(E){this.APz(3,E);},BfB:function(E){this.APz(1,E);},AoU:function(
E){this.APz(0,E);},A3g:function(E){this.BhF(0,E);},BeU:function(E){this.ACz(3,E);
},A3l:function(E){this.ACz(2,E);},A3k:function(E){this.ACz(1,E);},Afm:function(E
){this.ACz(0,E);},APz:function(aFontNo,AdL){var Aa8=aFontNo;var Hj=false;if(Aa8<
0)return;if(Aa8<4){Hj=this.AmI.Get(Aa8)!==AdL;this.AmI.Set(Aa8,AdL);}else{var Bx=
this.Af5;Aa8=Aa8-4;while(!!Bx&&(Aa8>=20)){Bx=Bx.Af;Aa8=Aa8-20;}if(!!Bx){Hj=Bx.JZ.
Get(Aa8)!==AdL;Bx.JZ.Set(Aa8,AdL);}}if(Hj&&!!this.attrSet){var handle=this.attrSet;
var font=null;if(!!AdL)font=AdL.font;A.aaJ(handle,aFontNo,font);}if(Hj)A.vv(this
,1);},BhL:function(Vy){var Hj=false;if(Vy<4)Vy=4;if(Vy>256)Vy=256;Vy=Vy-4;if((Vy>
0)&&!this.Af5){this.Af5=A._NewObject(C.Ayi,0);Hj=true;}if(!Vy&&!!this.Af5){this.
Af5=null;Hj=true;}var Bx=this.Af5;while(Vy>0){if((Vy>20)&&!Bx.Af){Bx.Af=A._NewObject(
C.Ayi,0);Hj=true;}Vy=Vy-20;if(Vy>0)Bx=Bx.Af;}if(!!Bx&&!!Bx.Af){Bx.Af=null;Hj=true;
}if(Hj){this.AFU();A.vv(this,1);}},BbP:function(){var DW=4;var Bx=this.Af5;while(
!!Bx){DW=DW+20;Bx=Bx.Af;}return DW;},BhF:function(aBitmapNo,aBitmap){var Pi=aBitmapNo;
var Hj=false;if(Pi<0)return;if(Pi<10){Hj=this.VD.Get(Pi)!==aBitmap;if(!!this.VD.
Get(Pi)&&this.VD.Get(Pi).NY)A.zl([this,this.AGA],this.VD.Get(Pi),0);this.VD.Set(
Pi,aBitmap);if(!!aBitmap&&aBitmap.NY)A.y_([this,this.AGA],aBitmap,0);}else{var Bx=
this.AdU;Pi=Pi-10;while(!!Bx&&(Pi>=20)){Bx=Bx.Af;Pi=Pi-20;}if(!!Bx){Hj=Bx.JZ.Get(
Pi)!==aBitmap;if(!!Bx.JZ.Get(Pi)&&Bx.JZ.Get(Pi).NY)A.zl([this,this.AGA],Bx.JZ.Get(
Pi),0);Bx.JZ.Set(Pi,aBitmap);if(!!aBitmap&&aBitmap.NY)A.y_([this,this.AGA],aBitmap
,0);}}if(Hj&&!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap
){aBitmap.Update();bitmap=aBitmap.bitmap;}A.aaH(handle,aBitmapNo,bitmap);}if(Hj)
A.vv(this,1);},BhJ:function(Vw){var Hj=false;if(Vw<10)Vw=10;if(Vw>256)Vw=256;Vw=
Vw-10;if((Vw>0)&&!this.AdU){this.AdU=A._NewObject(C.Ayg,0);Hj=true;}if(!Vw&&!!this.
AdU){this.AdU=null;Hj=true;}var Bx=this.AdU;while(Vw>0){if((Vw>20)&&!Bx.Af){Bx.Af=
A._NewObject(C.Ayg,0);Hj=true;}Vw=Vw-20;if(Vw>0)Bx=Bx.Af;}if(!!Bx&&!!Bx.Af){Bx.Af=
null;Hj=true;}if(Hj){this.AFU();A.vv(this,1);}},BbN:function(){var DW=10;var Bx=
this.AdU;while(!!Bx){DW=DW+20;Bx=Bx.Af;}return DW;},ACz:function(aColorNo,aColor
){var AaZ=aColorNo;var Hj=false;if(AaZ<0)return;if(AaZ<10){Hj=this.AvY.Get(AaZ)!==
aColor;this.AvY.Set(AaZ,aColor);}else{var Bx=this.Af4;AaZ=AaZ-10;while(!!Bx&&(AaZ>=
20)){Bx=Bx.Af;AaZ=AaZ-20;}if(!!Bx){Hj=Bx.JZ.Get(AaZ)!==aColor;Bx.JZ.Set(AaZ,aColor
);}}if(Hj&&!!this.attrSet){var handle=this.attrSet;A.aaI(handle,aColorNo,aColor);
}if(Hj)A.vv(this,0);},BhK:function(Vx){var Hj=false;if(Vx<10)Vx=10;if(Vx>256)Vx=
256;Vx=Vx-10;if((Vx>0)&&!this.Af4){this.Af4=A._NewObject(C.Ayh,0);Hj=true;}if(!Vx&&
!!this.Af4){this.Af4=null;Hj=true;}var Bx=this.Af4;while(Vx>0){if((Vx>20)&&!Bx.Af
){Bx.Af=A._NewObject(C.Ayh,0);Hj=true;}Vx=Vx-20;if(Vx>0)Bx=Bx.Af;}if(!!Bx&&!!Bx.
Af){Bx.Af=null;Hj=true;}if(Hj){this.AFU();A.vv(this,1);}},BbO:function(){var DW=
10;var Bx=this.Af4;while(!!Bx){DW=DW+20;Bx=Bx.Af;}return DW;},_Init:function(aArg
){(this.AmI=[]).__proto__=C.AttrSet.AmI;(this.VD=[]).__proto__=C.AttrSet.VD;(this.
AvY=[]).__proto__=C.AttrSet.AvY;this.__proto__=C.AttrSet;this.AmI.Set(0,A.zW(A.abj.
AyT));this.VD.Set(0,A.zW(A.abj.J4));this.A0F=A.zW(A.abj.AyT);this.AZD=A.zW(A.abj.
J4);A.hJ++;},_Done:function(){this.Kx();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AdU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af4)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aaf(this.AmI,D);A.aaf(this.VD,D);if((B=this.A0F)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AZD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.Ayi={Af:null,JZ:A.aan(20,null,null),_Init:function(aArg){(
this.JZ=[]).__proto__=C.Ayi.JZ;this.__proto__=C.Ayi;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Af)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aaf(this.JZ,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.Ayg={Af:null,JZ:A.aan(20,null,null),_Init:function(aArg){(this.JZ=[]).__proto__=
C.Ayg.JZ;this.__proto__=C.Ayg;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aaf(this.JZ,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.Ayh={Af:
null,JZ:A.aan(20,0,null),_Init:function(aArg){(this.JZ=[]).__proto__=C.Ayh.JZ;this.
__proto__=C.Ayh;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.GY={path:null,Kx:function(){if(!this.path)return;var
handle=this.path;A.ol(handle);this.path=null;},Abh:function(H){A.vv(this,0);},ES:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.ow([this,this.Abh],this);var handle=this.path;var result=0;{result=A.vg(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},AYX:function(aSubPathNo,aX,aY){A.ow([this,this.Abh],this);var
handle=this.path;var result=0;result=A.mq(handle,aSubPathNo,aX,aY);return result;
},T6:function(aSubPathNo){A.ow([this,this.Abh],this);var handle=this.path;A.qP(handle
,aSubPathNo);},TZ:function(aSubPathNo,aX,aY){A.ow([this,this.Abh],this);var handle=
this.path;A.qK(handle,aSubPathNo,aX,aY);},IW:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.Aua(1);A.ow([this,this.Abh],this);var handle=this.
path;var result=false;result=A.ky(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BbQ:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.zI(handle);return result;},Aua:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BbQ()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ol(handle);handle=A.qR(aMaxNoOfSubPaths);}this.path=handle;
A.ow([this,this.Abh],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.GY;A.hJ++;},_Done:function(){this.Kx();this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.ArZ={Left:0x1,XV:0x2
,Right:0x4,AZE:0x8,Bwe:0x10};C.BvX={BvL:0,BwN:1};C.BwV={Bu9:0,BwA:1,Bhq:2};C.BwU={
BvZ:0,Bxz:1,Bhq:2,Auu:3};C.Bu1={Bu0:0,Bxu:1,BwZ:2,Bw0:3,Bw2:4,Bw1:5};C.AIr={MV:360
,I2:0,HV:0,P8:0,AgV:function(H){var E7=this.MV;var Fj;if((E7>=360)||(E7<=-360))E7=
360;this.Aua(2);{var AL=this.HV;if(this.I2>AL)AL=this.I2;if(E7===360)Fj=AL|0;else
Fj=((E7*AL)/360)|0;if(Fj<0)Fj=-Fj;Fj=Fj+1;}if(((!E7||!this.HV)||!this.I2)||(((((
this.P8===2)||(this.P8===3))||(this.P8===4))||(this.P8===5))&&((0>=this.HV)||(0>=
this.I2)))){this.IW(0,0);this.IW(1,0);return;}if(E7===360){this.IW(0,Fj+1);this.
IW(1,0);this.ES(0,0,0,this.HV,this.I2,0,360,Fj);this.T6(0);return;}if(!this.P8){
this.IW(0,Fj+1);this.IW(1,0);this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);return;}if(this.
P8===1){this.IW(0,Fj+1);this.IW(1,0);this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.
T6(0);return;}if(this.P8===2){this.IW(0,Fj+1);this.IW(1,0);this.TZ(0,0,0);this.ES(
0,0,0,this.HV,this.I2,0,E7,Fj);this.T6(0);return;}if(this.P8===4){var NH=this.HV;
var KV=Math.sqrt(NH*NH);var R6=((KV*0.25)|0)+3;this.IW(0,(Fj+R6)+2);this.IW(1,0);
this.TZ(0,0,0);if(E7>=0)this.ES(0,NH/2,0,KV/2,KV/2,180,360,R6);else this.ES(0,NH
/2,0,KV/2,KV/2,180,0,R6);this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.T6(0);return;
}if(this.P8===5){var I9=E7;var NH=this.HV*Math.cos(I9*A.kw);var AgB=this.I2*Math.
sin(I9*A.kw);var KV=Math.sqrt((NH*NH)+(AgB*AgB));var R6=((KV*0.25)|0)+3;this.IW(
0,(Fj+R6)+2);this.IW(1,0);this.TZ(0,0,0);this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);
if(E7>=0)this.ES(0,NH/2,AgB/2,KV/2,KV/2,I9,I9+180,R6);else this.ES(0,NH/2,AgB/2,
KV/2,KV/2,I9,I9-180,R6);this.T6(0);return;}if(this.P8===3){var AgR=this.HV;var Abq=
Math.sqrt(AgR*AgR);var I9=E7;var Agf=this.HV*Math.cos(I9*A.kw);var Agg=this.I2*Math.
sin(I9*A.kw);var Aa4=Math.sqrt((Agf*Agf)+(Agg*Agg));var Am1=((Abq*0.25)|0)+3;var
Am0=((Aa4*0.25)|0)+3;this.IW(0,((Fj+Am1)+Am0)+10);this.IW(1,0);this.TZ(0,0,0);if(
E7>=0){this.ES(0,AgR/2,0,Abq/2,Abq/2,180,360,Am1);this.ES(0,0,0,this.HV,this.I2,
0,E7,Fj);this.ES(0,Agf/2,Agg/2,Aa4/2,Aa4/2,I9,I9+180,Am0);}else{this.ES(0,AgR/2,
0,Abq/2,Abq/2,180,0,Am1);this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.ES(0,Agf/2,
Agg/2,Aa4/2,Aa4/2,I9,I9-180,Am0);}this.T6(0);return;}if(this.P8===2){this.IW(0,(
Fj*2)+1);this.IW(1,0);this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.ES(0,0,0,0,0,this.
MV,this.MV-E7,Fj);this.T6(0);return;}if(this.P8===4){var NH=this.HV;var KV=Math.
sqrt(NH*NH);var R6=((KV*0.25)|0)+3;this.IW(0,((Fj*2)+R6)+2);this.IW(1,0);if(E7>=
0){this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.ES(0,0,0,0,0,this.MV,this.MV-E7,Fj
);this.ES(0,NH/2,0,KV/2,KV/2,180,360,R6);}else{this.ES(0,0,0,this.HV,this.I2,0,E7
,Fj);this.ES(0,0,0,0,0,this.MV,this.MV-E7,Fj);this.ES(0,NH/2,0,KV/2,KV/2,180,0,R6
);}this.T6(0);return;}if(this.P8===5){var I9=E7;var sin=Math.sin(I9*A.kw);var cos=
Math.cos(I9*A.kw);var NH=this.HV*cos;var AgB=this.I2*sin;var KV=Math.sqrt((NH*NH
)+(AgB*AgB));var R6=((KV*0.25)|0)+3;this.IW(0,((Fj*2)+R6)+2);this.IW(1,0);if(E7>=
0){this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.ES(0,NH/2,AgB/2,KV/2,KV/2,I9,I9+180
,R6);this.ES(0,0,0,0,0,this.MV,this.MV-E7,Fj);}else{this.ES(0,0,0,this.HV,this.I2
,0,E7,Fj);this.ES(0,NH/2,AgB/2,KV/2,KV/2,I9,I9-180,R6);this.ES(0,0,0,0,0,this.MV
,this.MV-E7,Fj);}this.T6(0);return;}if(this.P8===3){var I9=E7;var Brq=Math.sin(I9
*A.kw);var Brl=Math.cos(I9*A.kw);var AgR=this.HV;var Agf=this.HV*Brl;var Agg=this.
I2*Brq;var Abq=Math.sqrt(AgR*AgR);var Aa4=Math.sqrt((Agf*Agf)+(Agg*Agg));var Am1=((
Abq*0.25)|0)+3;var Am0=((Aa4*0.25)|0)+3;this.IW(0,(((Fj*2)+Am1)+Am0)+4);this.IW(
1,0);if(E7>=0){this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.ES(0,Agf/2,Agg/2,Aa4/
2,Aa4/2,I9,I9+180,Am0);this.ES(0,0,0,0,0,this.MV,this.MV-E7,Fj);this.ES(0,AgR/2,
0,Abq/2,Abq/2,180,360,Am1);}else{this.ES(0,0,0,this.HV,this.I2,0,E7,Fj);this.ES(
0,Agf/2,Agg/2,Aa4/2,Aa4/2,I9,I9-180,Am0);this.ES(0,0,0,0,0,this.MV,this.MV-E7,Fj
);this.ES(0,AgR/2,0,Abq/2,Abq/2,180,0,Am1);}this.T6(0);return;}},Bfd:function(E){
if(E===this.MV)return;this.MV=E;if((this.HV>0)&&(this.I2>0))A.ow([this,this.AgV]
,this);},Bgl:function(E){if((E===this.HV)&&(E===this.I2))return;this.HV=E;this.I2=
E;if(!!this.MV)A.ow([this,this.AgV],this);},Bgw:function(E){if(E===this.P8)return;
this.P8=E;if((!!this.MV&&(this.HV>0))&&(this.I2>0))A.ow([this,this.AgV],this);},
_Init:function(aArg){C.GY._Init.call(this,aArg);this.__proto__=C.AIr;},_className:
"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.abj.Ah;C.AIr.__proto__=C.GY;};C._ReInit=function(
){};C.Dn=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */