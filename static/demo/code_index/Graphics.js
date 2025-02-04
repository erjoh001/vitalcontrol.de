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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var A=index;var C={};
var Cf=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E8=[0,0,0,0];var Hs="No graphics engine bitmap attached to this canvas";var I0=
"The canvas is already initialized with a graphics engine bitmap";var Iw="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O$="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Qc="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Qd=[1,1];var CR=[2,2];var Ff="Missing matrices to interpolate";
C.Canvas={C2:null,AEP:null,QR:A.wg,PC:0,Azp:false,Lh:function(){if(this.Azp)this.
DetachBitmap();},Init:function(aArg){this.N6=true;},ArZ:function(E){if((E[0]<=0)||(
E[1]<=0))E=Cf;if(A.aaX(E,this.FrameSize))return;if(this.Azp)throw new Error(BD);
this.FrameSize=E;this.VJ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=1;}this.QR=[].concat(
Cf,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.PC;for(this.PC=this.NoOfFrames-
1;this.PC>=0;this.PC--)this.Avr(this.QR,this.QR,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.PC=dstFrameNr;}}if(!(((B=this.QR)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AEP)?B[1].call(B[0],
this):null;this.QR=E8;}},DetachBitmap:function(){if(!this.Azp)throw new Error(Hs
);this.bitmap=null;this.Azp=false;this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=
1;this.VJ=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(I0);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azp=true;var noOfFrames=
1;var frameSize=Cf;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VJ=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiY:function(aClip,AoH,Bcn,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoH){AoH.Ajf();attrSet=AoH.attrSet;}if(
!!Bcn)attrString=Bcn.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.PC;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6K:function(
aClip,AfO,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1y,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfO||!AfO.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1y===1)orient=90;else if(A1y===2)orient=180;else if(A1y===
3)orient=270;var dstFrameNo=this.PC;var dstBitmap=this.bitmap;var srcFont=AfO.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Bi0:function(aClip
,aBitmap,aFrameNr,aDstRect,Atz,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atz)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.PC;var srcRect=[].concat(
Cf,aBitmap.FrameSize);var left=((Atz&0x1)===0x1);var top=((Atz&0x2)===0x2);var right=((
Atz&0x4)===0x4);var bottom=((Atz&0x8)===0x8);var interior=((Atz&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hq:function(aClip
,AoR,aDstRect,aFlipY,aOffset,aWidth,Byu,BxF,Bx1,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoR||!AoR.path)return;var style=0;switch(Byu){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(BxF){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(Bx1){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.PC;var path=AoR.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhW:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",Iw);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.PC;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bpl:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O$);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.PC;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A6k:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.PC;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aes:function(aClip,AoR,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,BxJ){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoR||!AoR.path)return;var nonZeroWinding=BxJ===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.PC;var path=AoR.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},Bi1:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.PC;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avr:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.PC;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Bi3:function(aClip,aDstPos1,aDstPos2,ByA,ByB,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agw=ByA;var Agx=ByB;var AdD=aDstPos1;
var AdE=aDstPos2;if(A.aaX(AdD,AdE))return;if(Agw<=1)Agw=1;if(Agx<=1)Agx=1;var AiF=
Agw/2;var AiG=Agx/2;var Apr=AdD[0];var Aps=AdD[1];var Apt=AdE[0];var Apu=AdE[1];
var Ke=Apt-Apr;var Kf=Apu-Aps;var I5=Math.sqrt((Ke*Ke)+(Kf*Kf));if(((Agw>4096)||(
Agx>4096))||(I5>4096)){A.ab5("%s",Qc);return;}Ke=Ke/I5;Kf=Kf/I5;var x1=Apr+(Kf*AiF
);var y1=Aps-(Ke*AiF);var x2=Apt+(Kf*AiG);var y2=Apu-(Ke*AiG);var x3=Apt-(Kf*AiG
);var y3=Apu+(Ke*AiG);var x4=Apr-(Kf*AiF);var y4=Aps+(Ke*AiF);var Bf4=A.aaL(A.aci.
As5);var srcRect=[].concat(Qd,A.abe(Bf4.FrameSize,CR));var dstBitmap=this.bitmap;
var dstFrameNo=this.PC;var srcBitmap=Bf4.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Avc:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.PC;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Lh();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AEP)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax_={Wn:1,Wo:0,Y8:0,Y9:
0,Wp:0,Wq:1,Y_:0,Y$:0,Q2:0,Q3:0,Za:1,Wr:0,Uf:0,Ug:0,Zb:0,Ws:1,UZ:0,Qa:0,P$:0,Ag0:
0,AlW:true,ACm:function(aX,aY){var Vz=((aX*this.Q2)+(aY*this.Q3))+this.Wr;var BZ=((
aX*this.Uf)+(aY*this.Ug))+this.Ws;if(!!BZ&&(BZ!==1))Vz=Vz/BZ;this.UZ=Vz;return true;
},Afe:function(aX,aY){var AtY=this.Ag0;if(AtY<0)return false;var Ep=((aX*this.Wn
)+(aY*this.Wo))+this.Y9;var Di=((aX*this.Wp)+(aY*this.Wq))+this.Y$;var Vz=((aX*this.
Q2)+(aY*this.Q3))+this.Wr;var BZ=((aX*this.Uf)+(aY*this.Ug))+this.Ws;var ABb=1;if(
!!BZ&&(BZ!==1)){Ep=Ep/BZ;Di=Di/BZ;Vz=Vz/BZ;}if(AtY!==-Vz)ABb=1/(Vz+AtY);if(!!AtY
)ABb=ABb*AtY;this.P$=Ep*ABb;this.Qa=Di*ABb;this.UZ=Vz+AtY;return true;},Bj$:function(
Hb,Pe,Qi){if(!Hb||!Pe)throw new Error(Ff);this.Wn=Hb.Wn+((Pe.Wn-Hb.Wn)*Qi);this.
Wo=Hb.Wo+((Pe.Wo-Hb.Wo)*Qi);this.Y8=Hb.Y8+((Pe.Y8-Hb.Y8)*Qi);this.Y9=Hb.Y9+((Pe.
Y9-Hb.Y9)*Qi);this.Wp=Hb.Wp+((Pe.Wp-Hb.Wp)*Qi);this.Wq=Hb.Wq+((Pe.Wq-Hb.Wq)*Qi);
this.Y_=Hb.Y_+((Pe.Y_-Hb.Y_)*Qi);this.Y$=Hb.Y$+((Pe.Y$-Hb.Y$)*Qi);this.Q2=Hb.Q2+((
Pe.Q2-Hb.Q2)*Qi);this.Q3=Hb.Q3+((Pe.Q3-Hb.Q3)*Qi);this.Za=Hb.Za+((Pe.Za-Hb.Za)*Qi
);this.Wr=Hb.Wr+((Pe.Wr-Hb.Wr)*Qi);this.Uf=Hb.Uf+((Pe.Uf-Hb.Uf)*Qi);this.Ug=Hb.Ug+((
Pe.Ug-Hb.Ug)*Qi);this.Zb=Hb.Zb+((Pe.Zb-Hb.Zb)*Qi);this.Ws=Hb.Ws+((Pe.Ws-Hb.Ws)*Qi
);this.Ag0=Hb.Ag0+((Pe.Ag0-Hb.Ag0)*Qi);this.AlW=false;return this;},Afk:function(
AJp,AJq,AJr){this.Wn=this.Wn*AJp;this.Wo=this.Wo*AJq;this.Y8=this.Y8*AJr;this.Wp=
this.Wp*AJp;this.Wq=this.Wq*AJq;this.Y_=this.Y_*AJr;this.Q2=this.Q2*AJp;this.Q3=
this.Q3*AJq;this.Za=this.Za*AJr;this.Uf=this.Uf*AJp;this.Ug=this.Ug*AJq;this.Zb=
this.Zb*AJr;this.AlW=false;return this;},BqD:function(AJh,AJi,AJj){this.Y9=((this.
Y9+(this.Wn*AJh))+(this.Wo*AJi))+(this.Y8*AJj);this.Y$=((this.Y$+(this.Wp*AJh))+(
this.Wq*AJi))+(this.Y_*AJj);this.Wr=((this.Wr+(this.Q2*AJh))+(this.Q3*AJi))+(this.
Za*AJj);this.Ws=((this.Ws+(this.Uf*AJh))+(this.Ug*AJi))+(this.Zb*AJj);this.AlW=false;
return this;},AEd:function(){return this.AlW||((((((((((((((((this.Wn===1)&&!this.
Wo)&&!this.Y8)&&!this.Y9)&&!this.Wp)&&(this.Wq===1))&&!this.Y_)&&!this.Y$)&&!this.
Q2)&&!this.Q3)&&(this.Za===1))&&!this.Wr)&&!this.Uf)&&!this.Ug)&&!this.Zb)&&(this.
Ws===1));},AN3:function(Aic,Aif,Aid,Aig,AoZ,Ao0,Aie,Aih){var AzQ=Aid-AoZ;var AzS=
Aig-Ao0;var AzR=Aie-AoZ;var AzT=Aih-Ao0;var ABv=((Aic-Aid)+AoZ)-Aie;var ABw=((Aif-
Aig)+Ao0)-Aih;var Apb=(AzQ*AzT)-(AzS*AzR);if(!Apb)return null;this.Q2=((ABv*AzT)-(
ABw*AzR))/Apb;this.Q3=((AzQ*ABw)-(AzS*ABv))/Apb;this.Za=0;this.Wr=1;this.Wn=(Aid-
Aic)+(this.Q2*Aid);this.Wo=(Aie-Aic)+(this.Q3*Aie);this.Y8=0;this.Y9=Aic;this.Wp=(
Aig-Aif)+(this.Q2*Aig);this.Wq=(Aih-Aif)+(this.Q3*Aih);this.Y_=0;this.Y$=Aif;this.
Uf=0;this.Ug=0;this.Zb=0;this.Ws=1;this.AlW=false;return this;},BhU:function(Mc){
if(!Mc)return this;this.Wn=Mc.Wn;this.Wo=Mc.Wo;this.Y8=Mc.Y8;this.Y9=Mc.Y9;this.
Wp=Mc.Wp;this.Wq=Mc.Wq;this.Y_=Mc.Y_;this.Y$=Mc.Y$;this.Q2=Mc.Q2;this.Q3=Mc.Q3;this.
Za=Mc.Za;this.Wr=Mc.Wr;this.Uf=Mc.Uf;this.Ug=Mc.Ug;this.Zb=Mc.Zb;this.Ws=Mc.Ws;this.
AlW=Mc.AlW;this.Ag0=Mc.Ag0;return this;},A77:function(){this.Wn=1;this.Wo=0;this.
Y8=0;this.Y9=0;this.Wp=0;this.Wq=1;this.Y_=0;this.Y$=0;this.Q2=0;this.Q3=0;this.
Za=1;this.Wr=0;this.Uf=0;this.Ug=0;this.Zb=0;this.Ws=1;this.AlW=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax_;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7P={Bd9:1,Bd_:0,Bd$:0,Bea:0,Beb:1,Bec:0,Bed:0,Bee:0,Bef:1,Qa:0,P$:0,A20:false
,Afe:function(Fh){if(!this.A20)return false;var A5c=Fh[0];var A5e=Fh[1];var BDo=((
A5c*this.Bd9)+(A5e*this.Bd_))+this.Bd$;var BDp=((A5c*this.Bea)+(A5e*this.Beb))+this.
Bec;var A4o=((A5c*this.Bed)+(A5e*this.Bee))+this.Bef;if(!!A4o){this.P$=BDo/A4o;this.
Qa=BDp/A4o;return true;}return false;},AN3:function(Aic,Aif,Aid,Aig,AoZ,Ao0,Aie,
Aih){var AzQ=Aid-AoZ;var AzS=Aig-Ao0;var AzR=Aie-AoZ;var AzT=Aih-Ao0;var ABv=((Aic-
Aid)+AoZ)-Aie;var ABw=((Aif-Aig)+Ao0)-Aih;var Apb=(AzQ*AzT)-(AzS*AzR);this.A20=false;
if(!Apb)return;var AiH=((ABv*AzT)-(ABw*AzR))/Apb;var BL=((AzQ*ABw)-(AzS*ABv))/Apb;
var a=(Aid-Aic)+(AiH*Aid);var RD=(Aie-Aic)+(BL*Aie);var B4=Aic;var d=(Aig-Aif)+(
AiH*Aig);var AKb=(Aih-Aif)+(BL*Aih);var LP=Aif;this.Bd9=AKb-(LP*BL);this.Bd_=(B4
*BL)-RD;this.Bd$=(RD*LP)-(B4*AKb);this.Bea=(LP*AiH)-d;this.Beb=a-(B4*AiH);this.Bec=(
B4*d)-(a*LP);this.Bed=(d*BL)-(AKb*AiH);this.Bee=(RD*AiH)-(a*BL);this.Bef=(a*AKb)-(
RD*d);this.A20=true;},_Init:function(aArg){this.__proto__=C.A7P;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5N={C6:A.wf,attrString:null,Lh:function(){this.A6C(
);},A6C:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C6=Cf;},Aj7:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjU:function(
){return this.C6;},BoI:function(AoH,aString,aWidth,aEnableBidiText){this.A6C();var
attrSet=null;var handle=null;var s=Cf;if(!!AoH){AoH.Ajf();attrSet=AoH.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C6=s;},_Init:function(
aArg){this.__proto__=C.A5N;A.h7++;},_Done:function(){this.Lh();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Ail:null,AfZ:null,Aik:null,Apo:A.abi(4,null,null),RF:A.abi(10,null,
null),A65:null,A50:null,attrSet:null,AzB:A.abi(10,0,{0:0xFF000000}),Lh:function(
){this.AJ$();},Init:function(aArg){if(!!this.RF.Get(0)&&this.RF.Get(0).N6)A.zV([
this,this.AA0],this.RF.Get(0),0);},AJ$:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Ajf:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.BjL();var noOfBitmaps=this.BjK();var noOfFonts=
this.BjM();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKG=this.Aik;var Adt=this.AfZ;var AKH=this.Ail;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.AzB.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKG){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKG.KK.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKG=AKG.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RF.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adt){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adt.KK.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adt=Adt.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Apo.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKH){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKH.KK.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKH=AKH.Ah;
}},AA0:function(G){var handle=this.attrSet;var Adt=this.AfZ;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RF.Get(inx)&&this.RF.Get(inx).N6){var bitmap=this.
RF.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adt){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adt.KK.Get(lnx)&&Adt.KK.Get(lnx).N6){var bitmap=Adt.KK.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adt=Adt.Ah;}A.we(this,1);},Bnd:function(E
){this.AU2(3,E);},A_B:function(E){this.AU2(1,E);},Ahv:function(E){this.AU2(0,E);
},A9$:function(E){this.Bpw(0,E);},BmE:function(E){this.AGU(3,E);},A_d:function(E
){this.AGU(2,E);},A_c:function(E){this.AGU(1,E);},Ahs:function(E){this.AGU(0,E);
},AU2:function(aFontNo,AfO){var Ado=aFontNo;var H0=false;if(Ado<0)return;if(Ado<
4){H0=this.Apo.Get(Ado)!==AfO;this.Apo.Set(Ado,AfO);}else{var Bz=this.Ail;Ado=Ado-
4;while(!!Bz&&(Ado>=20)){Bz=Bz.Ah;Ado=Ado-20;}if(!!Bz){H0=Bz.KK.Get(Ado)!==AfO;Bz.
KK.Set(Ado,AfO);}}if(H0&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfO)font=AfO.font;A.abG(handle,aFontNo,font);}if(H0)A.we(this,1);},BpC:function(
Xv){var H0=false;if(Xv<4)Xv=4;if(Xv>256)Xv=256;Xv=Xv-4;if((Xv>0)&&!this.Ail){this.
Ail=A._NewObject(C.ACa,0);H0=true;}if(!Xv&&!!this.Ail){this.Ail=null;H0=true;}var
Bz=this.Ail;while(Xv>0){if((Xv>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ACa,0);H0=true;
}Xv=Xv-20;if(Xv>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;H0=true;}if(H0){this.AJ$(
);A.we(this,1);}},BjM:function(){var CB=4;var Bz=this.Ail;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpw:function(aBitmapNo,aBitmap){var Qn=aBitmapNo;var H0=false;
if(Qn<0)return;if(Qn<10){H0=this.RF.Get(Qn)!==aBitmap;if(!!this.RF.Get(Qn)&&this.
RF.Get(Qn).N6)A.z9([this,this.AA0],this.RF.Get(Qn),0);this.RF.Set(Qn,aBitmap);if(
!!aBitmap&&aBitmap.N6)A.zV([this,this.AA0],aBitmap,0);}else{var Bz=this.AfZ;Qn=Qn-
10;while(!!Bz&&(Qn>=20)){Bz=Bz.Ah;Qn=Qn-20;}if(!!Bz){H0=Bz.KK.Get(Qn)!==aBitmap;
if(!!Bz.KK.Get(Qn)&&Bz.KK.Get(Qn).N6)A.z9([this,this.AA0],Bz.KK.Get(Qn),0);Bz.KK.
Set(Qn,aBitmap);if(!!aBitmap&&aBitmap.N6)A.zV([this,this.AA0],aBitmap,0);}}if(H0&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(H0)A.we(this,1);},BpA:
function(Xt){var H0=false;if(Xt<10)Xt=10;if(Xt>256)Xt=256;Xt=Xt-10;if((Xt>0)&&!this.
AfZ){this.AfZ=A._NewObject(C.AB_,0);H0=true;}if(!Xt&&!!this.AfZ){this.AfZ=null;H0=
true;}var Bz=this.AfZ;while(Xt>0){if((Xt>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB_,0
);H0=true;}Xt=Xt-20;if(Xt>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;H0=true;}if(H0
){this.AJ$();A.we(this,1);}},BjK:function(){var CB=10;var Bz=this.AfZ;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGU:function(aColorNo,aColor){var Add=aColorNo;
var H0=false;if(Add<0)return;if(Add<10){H0=this.AzB.Get(Add)!==aColor;this.AzB.Set(
Add,aColor);}else{var Bz=this.Aik;Add=Add-10;while(!!Bz&&(Add>=20)){Bz=Bz.Ah;Add=
Add-20;}if(!!Bz){H0=Bz.KK.Get(Add)!==aColor;Bz.KK.Set(Add,aColor);}}if(H0&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(H0)A.we(this,
0);},BpB:function(Xu){var H0=false;if(Xu<10)Xu=10;if(Xu>256)Xu=256;Xu=Xu-10;if((
Xu>0)&&!this.Aik){this.Aik=A._NewObject(C.AB$,0);H0=true;}if(!Xu&&!!this.Aik){this.
Aik=null;H0=true;}var Bz=this.Aik;while(Xu>0){if((Xu>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.AB$,0);H0=true;}Xu=Xu-20;if(Xu>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;H0=true;
}if(H0){this.AJ$();A.we(this,1);}},BjL:function(){var CB=10;var Bz=this.Aik;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Apo=[]).__proto__=
C.AttrSet.Apo;(this.RF=[]).__proto__=C.AttrSet.RF;(this.AzB=[]).__proto__=C.AttrSet.
AzB;this.__proto__=C.AttrSet;this.Apo.Set(0,A.aaL(A.aci.ACS));this.RF.Set(0,A.aaL(
A.aci.TW));this.A65=A.aaL(A.aci.ACS);this.A50=A.aaL(A.aci.TW);this.Init(aArg);A.
h7++;},_Done:function(){this.Lh();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ail)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aik)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Apo,D);A.aa6(this.RF,D);if((B=this.A65)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A50)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.ACa={Ah:null,KK:A.abi(20,null,null),_Init:function(aArg){(
this.KK=[]).__proto__=C.ACa.KK;this.__proto__=C.ACa;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KK,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.AB_={Ah:null,KK:A.abi(20,null,null),_Init:function(aArg){(this.KK=[]).__proto__=
C.AB_.KK;this.__proto__=C.AB_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KK,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AB$={Ah:
null,KK:A.abi(20,0,null),_Init:function(aArg){(this.KK=[]).__proto__=C.AB$.KK;this.
__proto__=C.AB$;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.HA={path:null,Lh:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},AdB:function(G){A.we(this,0);},Fl:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.AdB],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5p:function(aSubPathNo,aX,aY){A.pe([this,this.AdB],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VY:function(aSubPathNo){A.pe([this,this.AdB],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VO:function(aSubPathNo,aX,aY){A.pe([this,this.AdB],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jz:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AxG(1);A.pe([this,this.AdB],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BjN:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},AxG:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BjN()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.AdB],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.HA;A.h7++;},_Done:function(){this.Lh();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Avd={Left:0x1,ZZ:0x2
,Right:0x4,A51:0x8,BE0:0x10};C.BEG={BEu:0,BFy:1};C.BFG={BDP:0,BFk:1,Bpg:2};C.BFF={
BEI:0,BGp:1,Bpg:2,Ax3:3};C.BDH={BDG:0,BGk:1,BFK:2,BFL:3,BFN:4,BFM:5};C.AMZ={NV:360
,J4:0,Iu:0,Rg:0,Ajg:function(G){var B;var FF=this.NV;var FV;if((FF>=360)||(FF<=-
360))FF=360;this.AxG(2);{var Az=Math.max(this.Iu,this.J4);FV=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FV*=4;if(FF<360)FV=((FF*FV)/360)|0;FV=Math.max(FV,-
FV,1);}if(((!FF||!this.Iu)||!this.J4)||(((((this.Rg===2)||(this.Rg===3))||(this.
Rg===4))||(this.Rg===5))&&((0>=this.Iu)||(0>=this.J4)))){this.Jz(0,0);this.Jz(1,
0);return;}if(FF===360){this.Jz(0,FV+1);this.Jz(1,0);this.Fl(0,0,0,this.Iu,this.
J4,0,360,FV);this.VY(0);return;}if(!this.Rg){this.Jz(0,FV+1);this.Jz(1,0);this.Fl(
0,0,0,this.Iu,this.J4,0,FF,FV);return;}if(this.Rg===1){this.Jz(0,FV+1);this.Jz(1
,0);this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV);this.VY(0);return;}if(this.Rg===2){this.
Jz(0,FV+1);this.Jz(1,0);this.VO(0,0,0);this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV);this.
VY(0);return;}if(this.Rg===4){var Ow=this.Iu;var LM=Math.sqrt(Ow*Ow);var Tv=((LM
*0.25)|0)+3;this.Jz(0,(FV+Tv)+2);this.Jz(1,0);this.VO(0,0,0);if(FF>=0)this.Fl(0,
Ow/2,0,LM/2,LM/2,180,360,Tv);else this.Fl(0,Ow/2,0,LM/2,LM/2,180,0,Tv);this.Fl(0
,0,0,this.Iu,this.J4,0,FF,FV);this.VY(0);return;}if(this.Rg===5){var JJ=FF;var Ow=
this.Iu*Math.cos(JJ*A.k$);var AiU=this.J4*Math.sin(JJ*A.k$);var LM=Math.sqrt((Ow
*Ow)+(AiU*AiU));var Tv=((LM*0.25)|0)+3;this.Jz(0,(FV+Tv)+2);this.Jz(1,0);this.VO(
0,0,0);this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV);if(FF>=0)this.Fl(0,Ow/2,AiU/2,LM/2
,LM/2,JJ,JJ+180,Tv);else this.Fl(0,Ow/2,AiU/2,LM/2,LM/2,JJ,JJ-180,Tv);this.VY(0);
return;}if(this.Rg===3){var Ajb=this.Iu;var AdK=Math.sqrt(Ajb*Ajb);var JJ=FF;var
Aiy=this.Iu*Math.cos(JJ*A.k$);var Aiz=this.J4*Math.sin(JJ*A.k$);var Adj=Math.sqrt((
Aiy*Aiy)+(Aiz*Aiz));var ApJ=((AdK*0.25)|0)+3;var ApI=((Adj*0.25)|0)+3;this.Jz(0,((
FV+ApJ)+ApI)+10);this.Jz(1,0);this.VO(0,0,0);if(FF>=0){this.Fl(0,Ajb/2,0,AdK/2,AdK
/2,180,360,ApJ);this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV);this.Fl(0,Aiy/2,Aiz/2,Adj
/2,Adj/2,JJ,JJ+180,ApI);}else{this.Fl(0,Ajb/2,0,AdK/2,AdK/2,180,0,ApJ);this.Fl(0
,0,0,this.Iu,this.J4,0,FF,FV);this.Fl(0,Aiy/2,Aiz/2,Adj/2,Adj/2,JJ,JJ-180,ApI);}
this.VY(0);return;}if(this.Rg===2){this.Jz(0,(FV*2)+1);this.Jz(1,0);this.Fl(0,0,
0,this.Iu,this.J4,0,FF,FV);this.Fl(0,0,0,0,0,this.NV,this.NV-FF,FV);this.VY(0);return;
}if(this.Rg===4){var Ow=this.Iu;var LM=Math.sqrt(Ow*Ow);var Tv=((LM*0.25)|0)+3;this.
Jz(0,((FV*2)+Tv)+2);this.Jz(1,0);if(FF>=0){this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV
);this.Fl(0,0,0,0,0,this.NV,this.NV-FF,FV);this.Fl(0,Ow/2,0,LM/2,LM/2,180,360,Tv
);}else{this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV);this.Fl(0,0,0,0,0,this.NV,this.NV-
FF,FV);this.Fl(0,Ow/2,0,LM/2,LM/2,180,0,Tv);}this.VY(0);return;}if(this.Rg===5){
var JJ=FF;var sin=Math.sin(JJ*A.k$);var cos=Math.cos(JJ*A.k$);var Ow=this.Iu*cos;
var AiU=this.J4*sin;var LM=Math.sqrt((Ow*Ow)+(AiU*AiU));var Tv=((LM*0.25)|0)+3;this.
Jz(0,((FV*2)+Tv)+2);this.Jz(1,0);if(FF>=0){this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV
);this.Fl(0,Ow/2,AiU/2,LM/2,LM/2,JJ,JJ+180,Tv);this.Fl(0,0,0,0,0,this.NV,this.NV-
FF,FV);}else{this.Fl(0,0,0,this.Iu,this.J4,0,FF,FV);this.Fl(0,Ow/2,AiU/2,LM/2,LM
/2,JJ,JJ-180,Tv);this.Fl(0,0,0,0,0,this.NV,this.NV-FF,FV);}this.VY(0);return;}if(
this.Rg===3){var JJ=FF;var BzJ=Math.sin(JJ*A.k$);var BzE=Math.cos(JJ*A.k$);var Ajb=
this.Iu;var Aiy=this.Iu*BzE;var Aiz=this.J4*BzJ;var AdK=Math.sqrt(Ajb*Ajb);var Adj=
Math.sqrt((Aiy*Aiy)+(Aiz*Aiz));var ApJ=((AdK*0.25)|0)+3;var ApI=((Adj*0.25)|0)+3;
this.Jz(0,(((FV*2)+ApJ)+ApI)+4);this.Jz(1,0);if(FF>=0){this.Fl(0,0,0,this.Iu,this.
J4,0,FF,FV);this.Fl(0,Aiy/2,Aiz/2,Adj/2,Adj/2,JJ,JJ+180,ApI);this.Fl(0,0,0,0,0,this.
NV,this.NV-FF,FV);this.Fl(0,Ajb/2,0,AdK/2,AdK/2,180,360,ApJ);}else{this.Fl(0,0,0
,this.Iu,this.J4,0,FF,FV);this.Fl(0,Aiy/2,Aiz/2,Adj/2,Adj/2,JJ,JJ-180,ApI);this.
Fl(0,0,0,0,0,this.NV,this.NV-FF,FV);this.Fl(0,Ajb/2,0,AdK/2,AdK/2,180,0,ApJ);}this.
VY(0);return;}},BmR:function(E){if(E===this.NV)return;this.NV=E;if((this.Iu>0)&&(
this.J4>0))A.pe([this,this.Ajg],this);},Bn7:function(E){if((E===this.Iu)&&(E===this.
J4))return;this.Iu=E;this.J4=E;if(!!this.NV)A.pe([this,this.Ajg],this);},Bog:function(
E){if(E===this.Rg)return;this.Rg=E;if((!!this.NV&&(this.Iu>0))&&(this.J4>0))A.pe([
this,this.Ajg],this);},_Init:function(aArg){C.HA._Init.call(this,aArg);this.__proto__=
C.AMZ;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMZ.__proto__=C.HA;};C._ReInit=function(
){};C.DI=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */