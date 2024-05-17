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
var Ce=[0,0];var BD="Can not resize explicitly attached graphics engine bitmaps";
var E7=[0,0,0,0];var Hr="No graphics engine bitmap attached to this canvas";var IW=
"The canvas is already initialized with a graphics engine bitmap";var It="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var O6="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var P$=[1,1];var CR=[2,2];var Ff="Missing matrices to interpolate";
C.Canvas={C1:null,AED:null,QO:A.wg,Px:0,Azf:false,Le:function(){if(this.Azf)this.
DetachBitmap();},Init:function(aArg){this.N2=true;},ArS:function(E){if((E[0]<=0)||(
E[1]<=0))E=Ce;if(A.aaX(E,this.FrameSize))return;if(this.Azf)throw new Error(BD);
this.FrameSize=E;this.VD=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.
FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;
A._FreeBitmap(handle);this.bitmap=null;},Update:function(){var B;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=A._CreateBitmap(
A._PIXEL_FORMAT_NATIVE,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!
this.bitmap){this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=1;}this.QO=[].concat(
Ce,this.FrameSize);if(!!this.bitmap){var dstFrameNr=this.Px;for(this.Px=this.NoOfFrames-
1;this.Px>=0;this.Px--)this.Avn(this.QO,this.QO,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Px=dstFrameNr;}}if(!(((B=this.QO)[0]>=B[2])||(B[1]>=B[3]
))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(B=this.AED)?B[1].call(B[0],
this):null;this.QO=E7;}},DetachBitmap:function(){if(!this.Azf)throw new Error(Hr
);this.bitmap=null;this.Azf=false;this.FrameSize=Ce;this.FrameDelay=0;this.NoOfFrames=
1;this.VD=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(IW);if(!aBitmap)return this;this.bitmap=aBitmap;this.Azf=true;var noOfFrames=
1;var frameSize=Ce;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.VD=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},BiM:function(aClip,AoD,Bcb,aDstRect,aSrcPos,aOpacityTL,aOpacityTR
,aOpacityBR,aOpacityBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var attrSet=null;var attrString=null;if(!!AoD){AoD.Ajd();attrSet=AoD.attrSet;}if(
!!Bcb)attrString=Bcb.attrString;if(!attrSet||!attrString)return;var dstBitmap=this.
bitmap;var dstFrameNo=this.Px;{A.aaa(dstBitmap,attrSet,attrString,dstFrameNo,aClip
,aDstRect,aSrcPos,aOpacityTL,aOpacityTR,aOpacityBR,aOpacityBL,aBlend);}},A6y:function(
aClip,AfK,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,A1l,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(aOffset<0)aOffset=0;if((!AfK||!AfK.font)||((aOffset>0)&&(aOffset>=aString.length
)))return;var orient=0;if(A1l===1)orient=90;else if(A1l===2)orient=180;else if(A1l===
3)orient=270;var dstFrameNo=this.Px;var dstBitmap=this.bitmap;var srcFont=AfK.font;{
A.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,
aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},BiO:function(aClip
,aBitmap,aFrameNr,aDstRect,Atu,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;
if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap
)||!Atu)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Px;var srcRect=[].concat(
Ce,aBitmap.FrameSize);var left=((Atu&0x1)===0x1);var top=((Atu&0x2)===0x2);var right=((
Atu&0x4)===0x4);var bottom=((Atu&0x8)===0x8);var interior=((Atu&0x10)===0x10);{A.
aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right
,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Hp:function(aClip
,AoN,aDstRect,aFlipY,aOffset,aWidth,Byk,Bxv,BxR,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(!AoN||!AoN.path)return;var style=0;switch(Byk){case 1:style=1;break;case 3:style=
2;break;case 2:style=3;break;default:;}switch(Bxv){case 1:style=style|256;break;
case 3:style=style|512;break;case 2:style=style|768;break;default:;}switch(BxR){
case 1:style=style|65536;break;case 2:style=style|131072;break;default:;}var dstBitmap=
this.bitmap;var dstFrameNo=this.Px;var path=AoN.path;{A.ab3(dstBitmap,path,dstFrameNo
,aClip,aDstRect,aFlipY,aOffset,aWidth,style,aMiterLimit,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aAntialiased);}},AhV:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1
,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,
aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){A.ab5("%s",It);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Px;{A.ab6(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Bpa:function(aClip,
aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.ab5("%s"
,O6);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Px;{A.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},A5_:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Px;{A.
db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Aeq:function(aClip,AoN,aDstRect,aFlipY,aOffset,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,Bxz){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(!AoN||!AoN.path)return;var nonZeroWinding=Bxz===1;var
dstBitmap=this.bitmap;var dstFrameNo=this.Px;var path=AoN.path;{A.aaf(dstBitmap,
path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},BiP:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{A.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Avn:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Px;{
A.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},BiR:function(aClip,aDstPos1,aDstPos2,Byq,Byr,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var Agt=Byq;var Agu=Byr;var AdB=aDstPos1;
var AdC=aDstPos2;if(A.aaX(AdB,AdC))return;if(Agt<=1)Agt=1;if(Agu<=1)Agu=1;var AiD=
Agt/2;var AiE=Agu/2;var Apn=AdB[0];var Apo=AdB[1];var App=AdC[0];var Apq=AdC[1];
var Kc=App-Apn;var Kd=Apq-Apo;var I1=Math.sqrt((Kc*Kc)+(Kd*Kd));if(((Agt>4096)||(
Agu>4096))||(I1>4096)){A.ab5("%s",P_);return;}Kc=Kc/I1;Kd=Kd/I1;var x1=Apn+(Kd*AiD
);var y1=Apo-(Kc*AiD);var x2=App+(Kd*AiE);var y2=Apq-(Kc*AiE);var x3=App-(Kd*AiE
);var y3=Apq+(Kc*AiE);var x4=Apn-(Kd*AiD);var y4=Apo+(Kc*AiD);var BfT=A.aaL(A.aci.
AsY);var srcRect=[].concat(P$,A.abe(BfT.FrameSize,CR));var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;var srcBitmap=BfT.bitmap;{A.ab6(dstBitmap,srcBitmap,dstFrameNo
,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2
,aColor1,aBlend,false);}},Au_:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Px;{A.aac(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend);}},_Init:function(aArg){A.aci.Al._Init.call(this,aArg);this.__proto__=
C.Canvas;this.Init(aArg);},_Done:function(){this.Le();this.__proto__=A.aci.Al;A.
aci.Al._Done.call(this);},_Mark:function(D){var B;A.aci.Al._Mark.call(this,D);if((
B=this.C1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AED)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);},_className:"Graphics::Canvas"};C.Ax4={Wh:1,Wi:0,Y3:0,Y4:
0,Wj:0,Wk:1,Y5:0,Y6:0,QZ:0,Q0:0,Y7:1,Wl:0,Uc:0,Ud:0,Y8:0,Wm:1,UV:0,P8:0,P7:0,AgX:
0,AlS:true,ACa:function(aX,aY){var Vt=((aX*this.QZ)+(aY*this.Q0))+this.Wl;var BZ=((
aX*this.Uc)+(aY*this.Ud))+this.Wm;if(!!BZ&&(BZ!==1))Vt=Vt/BZ;this.UV=Vt;return true;
},Afc:function(aX,aY){var AtT=this.AgX;if(AtT<0)return false;var Ep=((aX*this.Wh
)+(aY*this.Wi))+this.Y4;var Di=((aX*this.Wj)+(aY*this.Wk))+this.Y6;var Vt=((aX*this.
QZ)+(aY*this.Q0))+this.Wl;var BZ=((aX*this.Uc)+(aY*this.Ud))+this.Wm;var AA2=1;if(
!!BZ&&(BZ!==1)){Ep=Ep/BZ;Di=Di/BZ;Vt=Vt/BZ;}if(AtT!==-Vt)AA2=1/(Vt+AtT);if(!!AtT
)AA2=AA2*AtT;this.P7=Ep*AA2;this.P8=Di*AA2;this.UV=Vt+AtT;return true;},BjZ:function(
Hb,O$,Qf){if(!Hb||!O$)throw new Error(Ff);this.Wh=Hb.Wh+((O$.Wh-Hb.Wh)*Qf);this.
Wi=Hb.Wi+((O$.Wi-Hb.Wi)*Qf);this.Y3=Hb.Y3+((O$.Y3-Hb.Y3)*Qf);this.Y4=Hb.Y4+((O$.
Y4-Hb.Y4)*Qf);this.Wj=Hb.Wj+((O$.Wj-Hb.Wj)*Qf);this.Wk=Hb.Wk+((O$.Wk-Hb.Wk)*Qf);
this.Y5=Hb.Y5+((O$.Y5-Hb.Y5)*Qf);this.Y6=Hb.Y6+((O$.Y6-Hb.Y6)*Qf);this.QZ=Hb.QZ+((
O$.QZ-Hb.QZ)*Qf);this.Q0=Hb.Q0+((O$.Q0-Hb.Q0)*Qf);this.Y7=Hb.Y7+((O$.Y7-Hb.Y7)*Qf
);this.Wl=Hb.Wl+((O$.Wl-Hb.Wl)*Qf);this.Uc=Hb.Uc+((O$.Uc-Hb.Uc)*Qf);this.Ud=Hb.Ud+((
O$.Ud-Hb.Ud)*Qf);this.Y8=Hb.Y8+((O$.Y8-Hb.Y8)*Qf);this.Wm=Hb.Wm+((O$.Wm-Hb.Wm)*Qf
);this.AgX=Hb.AgX+((O$.AgX-Hb.AgX)*Qf);this.AlS=false;return this;},Afi:function(
AJi,AJj,AJk){this.Wh=this.Wh*AJi;this.Wi=this.Wi*AJj;this.Y3=this.Y3*AJk;this.Wj=
this.Wj*AJi;this.Wk=this.Wk*AJj;this.Y5=this.Y5*AJk;this.QZ=this.QZ*AJi;this.Q0=
this.Q0*AJj;this.Y7=this.Y7*AJk;this.Uc=this.Uc*AJi;this.Ud=this.Ud*AJj;this.Y8=
this.Y8*AJk;this.AlS=false;return this;},Bqu:function(AJa,AJb,AJc){this.Y4=((this.
Y4+(this.Wh*AJa))+(this.Wi*AJb))+(this.Y3*AJc);this.Y6=((this.Y6+(this.Wj*AJa))+(
this.Wk*AJb))+(this.Y5*AJc);this.Wl=((this.Wl+(this.QZ*AJa))+(this.Q0*AJb))+(this.
Y7*AJc);this.Wm=((this.Wm+(this.Uc*AJa))+(this.Ud*AJb))+(this.Y8*AJc);this.AlS=false;
return this;},AD3:function(){return this.AlS||((((((((((((((((this.Wh===1)&&!this.
Wi)&&!this.Y3)&&!this.Y4)&&!this.Wj)&&(this.Wk===1))&&!this.Y5)&&!this.Y6)&&!this.
QZ)&&!this.Q0)&&(this.Y7===1))&&!this.Wl)&&!this.Uc)&&!this.Ud)&&!this.Y8)&&(this.
Wm===1));},ANW:function(Aia,Aid,Aib,Aie,AoV,AoW,Aic,Aif){var AzG=Aib-AoV;var AzI=
Aie-AoW;var AzH=Aic-AoV;var AzJ=Aif-AoW;var ABk=((Aia-Aib)+AoV)-Aic;var ABl=((Aid-
Aie)+AoW)-Aif;var Ao9=(AzG*AzJ)-(AzI*AzH);if(!Ao9)return null;this.QZ=((ABk*AzJ)-(
ABl*AzH))/Ao9;this.Q0=((AzG*ABl)-(AzI*ABk))/Ao9;this.Y7=0;this.Wl=1;this.Wh=(Aib-
Aia)+(this.QZ*Aib);this.Wi=(Aic-Aia)+(this.Q0*Aic);this.Y3=0;this.Y4=Aia;this.Wj=(
Aie-Aid)+(this.QZ*Aie);this.Wk=(Aif-Aid)+(this.Q0*Aif);this.Y5=0;this.Y6=Aid;this.
Uc=0;this.Ud=0;this.Y8=0;this.Wm=1;this.AlS=false;return this;},BhI:function(L_){
if(!L_)return this;this.Wh=L_.Wh;this.Wi=L_.Wi;this.Y3=L_.Y3;this.Y4=L_.Y4;this.
Wj=L_.Wj;this.Wk=L_.Wk;this.Y5=L_.Y5;this.Y6=L_.Y6;this.QZ=L_.QZ;this.Q0=L_.Q0;this.
Y7=L_.Y7;this.Wl=L_.Wl;this.Uc=L_.Uc;this.Ud=L_.Ud;this.Y8=L_.Y8;this.Wm=L_.Wm;this.
AlS=L_.AlS;this.AgX=L_.AgX;return this;},A7V:function(){this.Wh=1;this.Wi=0;this.
Y3=0;this.Y4=0;this.Wj=0;this.Wk=1;this.Y5=0;this.Y6=0;this.QZ=0;this.Q0=0;this.
Y7=1;this.Wl=0;this.Uc=0;this.Ud=0;this.Y8=0;this.Wm=1;this.AlS=true;return this;
},_Init:function(aArg){this.__proto__=C.Ax4;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};C.A7D={BdX:1,BdY:0,BdZ:0,Bd0:0,Bd1:1,Bd2:0,Bd3:0,Bd4:0,Bd5:1,P8:0,P7:0,A2N:false
,Afc:function(Fh){if(!this.A2N)return false;var A42=Fh[0];var A44=Fh[1];var BDd=((
A42*this.BdX)+(A44*this.BdY))+this.BdZ;var BDe=((A42*this.Bd0)+(A44*this.Bd1))+this.
Bd2;var A4c=((A42*this.Bd3)+(A44*this.Bd4))+this.Bd5;if(!!A4c){this.P7=BDd/A4c;this.
P8=BDe/A4c;return true;}return false;},ANW:function(Aia,Aid,Aib,Aie,AoV,AoW,Aic,
Aif){var AzG=Aib-AoV;var AzI=Aie-AoW;var AzH=Aic-AoV;var AzJ=Aif-AoW;var ABk=((Aia-
Aib)+AoV)-Aic;var ABl=((Aid-Aie)+AoW)-Aif;var Ao9=(AzG*AzJ)-(AzI*AzH);this.A2N=false;
if(!Ao9)return;var AiF=((ABk*AzJ)-(ABl*AzH))/Ao9;var BJ=((AzG*ABl)-(AzI*ABk))/Ao9;
var a=(Aib-Aia)+(AiF*Aib);var Rz=(Aic-Aia)+(BJ*Aic);var B4=Aia;var d=(Aie-Aid)+(
AiF*Aie);var AJ6=(Aif-Aid)+(BJ*Aif);var LM=Aid;this.BdX=AJ6-(LM*BJ);this.BdY=(B4
*BJ)-Rz;this.BdZ=(Rz*LM)-(B4*AJ6);this.Bd0=(LM*AiF)-d;this.Bd1=a-(B4*AiF);this.Bd2=(
B4*d)-(a*LM);this.Bd3=(d*BJ)-(AJ6*AiF);this.Bd4=(Rz*AiF)-(a*BJ);this.Bd5=(a*AJ6)-(
Rz*d);this.A2N=true;},_Init:function(aArg){this.__proto__=C.A7D;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::InverseMatrix"};C.A5B={C6:A.wf,attrString:null,Le:function(){this.A6q(
);},A6q:function(){var handle=this.attrString;if(!handle)return;A.aak(handle);this.
attrString=null;this.C6=Ce;},Aj6:function(){var handle=this.attrString;var result=
false;if(!handle)return false;result=A.aaW(handle);return result;},BjI:function(
){return this.C6;},Box:function(AoD,aString,aWidth,aEnableBidiText){this.A6q();var
attrSet=null;var handle=null;var s=Ce;if(!!AoD){AoD.Ajd();attrSet=AoD.attrSet;}if((
aString===A.jV)||!attrSet)return;handle=A.abu(attrSet,aString,aWidth,aEnableBidiText
);if(!handle)return;s=A.aaq(handle);this.attrString=handle;this.C6=s;},_Init:function(
aArg){this.__proto__=C.A5B;A.h7++;},_Done:function(){this.Le();this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrString"
};C.AttrSet={Aij:null,AfV:null,Aii:null,Apk:A.abi(4,null,null),RB:A.abi(10,null,
null),A6T:null,A5O:null,attrSet:null,Azr:A.abi(10,0,{0:0xFF000000}),Le:function(
){this.AJ4();},Init:function(aArg){if(!!this.RB.Get(0)&&this.RB.Get(0).N2)A.zV([
this,this.AAP],this.RB.Get(0),0);},AJ4:function(){var handle=this.attrSet;if(!handle
)return;A.aaj(handle);this.attrSet=null;},Ajd:function(){if(!!this.attrSet)return;
var handle=null;var noOfColors=this.Bjz();var noOfBitmaps=this.Bjy();var noOfFonts=
this.BjA();handle=A.z6(noOfFonts,noOfBitmaps,noOfColors);this.attrSet=handle;if(
!handle)return;var AKz=this.Aii;var Adr=this.AfV;var AKA=this.Aij;var inx;var lnx;
for(inx=0;inx<10;inx=inx+1){var entry=this.Azr.Get(inx);if(entry!==0x00000000)A.
abF(handle,inx,entry);}while(!!AKz){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKz.KI.
Get(lnx);if(entry!==0x00000000)A.abF(handle,inx+lnx,entry);}inx=inx+20;AKz=AKz.Ah;
}for(inx=0;inx<10;inx=inx+1){var entry=this.RB.Get(inx);if(!!entry){entry.Update(
);var bitmap=entry.bitmap;A.abE(handle,inx,bitmap);}}while(!!Adr){for(lnx=0;lnx<
20;lnx=lnx+1){var entry=Adr.KI.Get(lnx);if(!!entry){entry.Update();var bitmap=entry.
bitmap;A.abE(handle,inx+lnx,bitmap);}}inx=inx+20;Adr=Adr.Ah;}for(inx=0;inx<4;inx=
inx+1){var entry=this.Apk.Get(inx);if(!!entry){var font=entry.font;A.abG(handle,
inx,font);}}while(!!AKA){for(lnx=0;lnx<20;lnx=lnx+1){var entry=AKA.KI.Get(lnx);if(
!!entry){var font=entry.font;A.abG(handle,inx+lnx,font);}}inx=inx+20;AKA=AKA.Ah;
}},AAP:function(G){var handle=this.attrSet;var Adr=this.AfV;var inx;var lnx;for(
inx=0;inx<10;inx=inx+1)if(!!this.RB.Get(inx)&&this.RB.Get(inx).N2){var bitmap=this.
RB.Get(inx).bitmap;A.abE(handle,inx,bitmap);}while(!!Adr){for(lnx=0;lnx<20;lnx=lnx+
1)if(!!Adr.KI.Get(lnx)&&Adr.KI.Get(lnx).N2){var bitmap=Adr.KI.Get(lnx).bitmap;A.
abE(handle,inx+lnx,bitmap);}inx=inx+20;Adr=Adr.Ah;}A.we(this,1);},Bm5:function(E
){this.AUP(3,E);},A_n:function(E){this.AUP(1,E);},Aht:function(E){this.AUP(0,E);
},A9Y:function(E){this.Bpm(0,E);},Bms:function(E){this.AGL(3,E);},A92:function(E
){this.AGL(2,E);},A91:function(E){this.AGL(1,E);},Ahq:function(E){this.AGL(0,E);
},AUP:function(aFontNo,AfK){var Adm=aFontNo;var HY=false;if(Adm<0)return;if(Adm<
4){HY=this.Apk.Get(Adm)!==AfK;this.Apk.Set(Adm,AfK);}else{var Bz=this.Aij;Adm=Adm-
4;while(!!Bz&&(Adm>=20)){Bz=Bz.Ah;Adm=Adm-20;}if(!!Bz){HY=Bz.KI.Get(Adm)!==AfK;Bz.
KI.Set(Adm,AfK);}}if(HY&&!!this.attrSet){var handle=this.attrSet;var font=null;if(
!!AfK)font=AfK.font;A.abG(handle,aFontNo,font);}if(HY)A.we(this,1);},Bps:function(
Xq){var HY=false;if(Xq<4)Xq=4;if(Xq>256)Xq=256;Xq=Xq-4;if((Xq>0)&&!this.Aij){this.
Aij=A._NewObject(C.AB1,0);HY=true;}if(!Xq&&!!this.Aij){this.Aij=null;HY=true;}var
Bz=this.Aij;while(Xq>0){if((Xq>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.AB1,0);HY=true;
}Xq=Xq-20;if(Xq>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HY=true;}if(HY){this.AJ4(
);A.we(this,1);}},BjA:function(){var CB=4;var Bz=this.Aij;while(!!Bz){CB=CB+20;Bz=
Bz.Ah;}return CB;},Bpm:function(aBitmapNo,aBitmap){var Qj=aBitmapNo;var HY=false;
if(Qj<0)return;if(Qj<10){HY=this.RB.Get(Qj)!==aBitmap;if(!!this.RB.Get(Qj)&&this.
RB.Get(Qj).N2)A.z9([this,this.AAP],this.RB.Get(Qj),0);this.RB.Set(Qj,aBitmap);if(
!!aBitmap&&aBitmap.N2)A.zV([this,this.AAP],aBitmap,0);}else{var Bz=this.AfV;Qj=Qj-
10;while(!!Bz&&(Qj>=20)){Bz=Bz.Ah;Qj=Qj-20;}if(!!Bz){HY=Bz.KI.Get(Qj)!==aBitmap;
if(!!Bz.KI.Get(Qj)&&Bz.KI.Get(Qj).N2)A.z9([this,this.AAP],Bz.KI.Get(Qj),0);Bz.KI.
Set(Qj,aBitmap);if(!!aBitmap&&aBitmap.N2)A.zV([this,this.AAP],aBitmap,0);}}if(HY&&
!!this.attrSet){var handle=this.attrSet;var bitmap=null;if(!!aBitmap){aBitmap.Update(
);bitmap=aBitmap.bitmap;}A.abE(handle,aBitmapNo,bitmap);}if(HY)A.we(this,1);},Bpq:
function(Xo){var HY=false;if(Xo<10)Xo=10;if(Xo>256)Xo=256;Xo=Xo-10;if((Xo>0)&&!this.
AfV){this.AfV=A._NewObject(C.ABZ,0);HY=true;}if(!Xo&&!!this.AfV){this.AfV=null;HY=
true;}var Bz=this.AfV;while(Xo>0){if((Xo>20)&&!Bz.Ah){Bz.Ah=A._NewObject(C.ABZ,0
);HY=true;}Xo=Xo-20;if(Xo>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HY=true;}if(HY
){this.AJ4();A.we(this,1);}},Bjy:function(){var CB=10;var Bz=this.AfV;while(!!Bz
){CB=CB+20;Bz=Bz.Ah;}return CB;},AGL:function(aColorNo,aColor){var Adb=aColorNo;
var HY=false;if(Adb<0)return;if(Adb<10){HY=this.Azr.Get(Adb)!==aColor;this.Azr.Set(
Adb,aColor);}else{var Bz=this.Aii;Adb=Adb-10;while(!!Bz&&(Adb>=20)){Bz=Bz.Ah;Adb=
Adb-20;}if(!!Bz){HY=Bz.KI.Get(Adb)!==aColor;Bz.KI.Set(Adb,aColor);}}if(HY&&!!this.
attrSet){var handle=this.attrSet;A.abF(handle,aColorNo,aColor);}if(HY)A.we(this,
0);},Bpr:function(Xp){var HY=false;if(Xp<10)Xp=10;if(Xp>256)Xp=256;Xp=Xp-10;if((
Xp>0)&&!this.Aii){this.Aii=A._NewObject(C.AB0,0);HY=true;}if(!Xp&&!!this.Aii){this.
Aii=null;HY=true;}var Bz=this.Aii;while(Xp>0){if((Xp>20)&&!Bz.Ah){Bz.Ah=A._NewObject(
C.AB0,0);HY=true;}Xp=Xp-20;if(Xp>0)Bz=Bz.Ah;}if(!!Bz&&!!Bz.Ah){Bz.Ah=null;HY=true;
}if(HY){this.AJ4();A.we(this,1);}},Bjz:function(){var CB=10;var Bz=this.Aii;while(
!!Bz){CB=CB+20;Bz=Bz.Ah;}return CB;},_Init:function(aArg){(this.Apk=[]).__proto__=
C.AttrSet.Apk;(this.RB=[]).__proto__=C.AttrSet.RB;(this.Azr=[]).__proto__=C.AttrSet.
Azr;this.__proto__=C.AttrSet;this.Apk.Set(0,A.aaL(A.aci.ACG));this.RB.Set(0,A.aaL(
A.aci.TR));this.A6T=A.aaL(A.aci.ACG);this.A5O=A.aaL(A.aci.TR);this.Init(aArg);A.
h7++;},_Done:function(){this.Le();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Aij)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aii)&&(B._cycle!=D))B.
_Mark(B._cycle=D);A.aa6(this.Apk,D);A.aa6(this.RB,D);if((B=this.A6T)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A5O)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSet"};C.AB1={Ah:null,KI:A.abi(20,null,null),_Init:function(aArg){(
this.KI=[]).__proto__=C.AB1.KI;this.__proto__=C.AB1;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);A.aa6(this.KI,D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetFonts"
};C.ABZ={Ah:null,KI:A.abi(20,null,null),_Init:function(aArg){(this.KI=[]).__proto__=
C.ABZ.KI;this.__proto__=C.ABZ;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);A.aa6(this.KI,D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},
I:null,_cycle:0,_observers:null,_className:"Graphics::AttrSetBitmaps"};C.AB0={Ah:
null,KI:A.abi(20,0,null),_Init:function(aArg){(this.KI=[]).__proto__=C.AB0.KI;this.
__proto__=C.AB0;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Graphics::AttrSetColors"};C.Hz={path:null,Le:function(){if(!this.path)return;var
handle=this.path;A.e6(handle);this.path=null;},Adz:function(G){A.we(this,0);},Fl:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.pe([this,this.Adz],this);var handle=this.path;var result=0;{result=A.dU(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},A5d:function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var
handle=this.path;var result=0;result=A.m5(handle,aSubPathNo,aX,aY);return result;
},VQ:function(aSubPathNo){A.pe([this,this.Adz],this);var handle=this.path;A.jU(handle
,aSubPathNo);},VI:function(aSubPathNo,aX,aY){A.pe([this,this.Adz],this);var handle=
this.path;A.rt(handle,aSubPathNo,aX,aY);},Jx:function(aSubPathNo,aMaxNoOfEdges){
if(!this.path&&!aSubPathNo)this.AxA(1);A.pe([this,this.Adz],this);var handle=this.
path;var result=false;result=A.gM(handle,aSubPathNo,aMaxNoOfEdges);return result;
},BjB:function(){if(!this.path)return 1;var handle=this.path;var result=0;result=
A.aax(handle);return result;},AxA:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.BjB()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.e6(handle);handle=A.k_(aMaxNoOfSubPaths);}this.path=handle;
A.pe([this,this.Adz],this);return!!this.path;},_Init:function(aArg){this.__proto__=
C.Hz;A.h7++;},_Done:function(){this.Le();this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};C.Au$={Left:0x1,ZT:0x2
,Right:0x4,A5P:0x8,BEP:0x10};C.BEv={BEj:0,BFn:1};C.BFv={BDE:0,BE$:1,Bo7:2};C.BFu={
BEx:0,BGe:1,Bo7:2,AxX:3};C.BDw={BDv:0,BF$:1,BFz:2,BFA:3,BFC:4,BFB:5};C.AMR={NR:360
,J2:0,Ir:0,Rd:0,Aje:function(G){var B;var FF=this.NR;var FU;if((FF>=360)||(FF<=-
360))FF=360;this.AxA(2);{var Az=Math.max(this.Ir,this.J2);FU=1+((90/((Math.acos(
1-(0.5/(Az+1)))*A.rE)|0))|0);FU*=4;if(FF<360)FU=((FF*FU)/360)|0;FU=Math.max(FU,-
FU,1);}if(((!FF||!this.Ir)||!this.J2)||(((((this.Rd===2)||(this.Rd===3))||(this.
Rd===4))||(this.Rd===5))&&((0>=this.Ir)||(0>=this.J2)))){this.Jx(0,0);this.Jx(1,
0);return;}if(FF===360){this.Jx(0,FU+1);this.Jx(1,0);this.Fl(0,0,0,this.Ir,this.
J2,0,360,FU);this.VQ(0);return;}if(!this.Rd){this.Jx(0,FU+1);this.Jx(1,0);this.Fl(
0,0,0,this.Ir,this.J2,0,FF,FU);return;}if(this.Rd===1){this.Jx(0,FU+1);this.Jx(1
,0);this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU);this.VQ(0);return;}if(this.Rd===2){this.
Jx(0,FU+1);this.Jx(1,0);this.VI(0,0,0);this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU);this.
VQ(0);return;}if(this.Rd===4){var Os=this.Ir;var LJ=Math.sqrt(Os*Os);var Tr=((LJ
*0.25)|0)+3;this.Jx(0,(FU+Tr)+2);this.Jx(1,0);this.VI(0,0,0);if(FF>=0)this.Fl(0,
Os/2,0,LJ/2,LJ/2,180,360,Tr);else this.Fl(0,Os/2,0,LJ/2,LJ/2,180,0,Tr);this.Fl(0
,0,0,this.Ir,this.J2,0,FF,FU);this.VQ(0);return;}if(this.Rd===5){var JH=FF;var Os=
this.Ir*Math.cos(JH*A.k$);var AiS=this.J2*Math.sin(JH*A.k$);var LJ=Math.sqrt((Os
*Os)+(AiS*AiS));var Tr=((LJ*0.25)|0)+3;this.Jx(0,(FU+Tr)+2);this.Jx(1,0);this.VI(
0,0,0);this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU);if(FF>=0)this.Fl(0,Os/2,AiS/2,LJ/2
,LJ/2,JH,JH+180,Tr);else this.Fl(0,Os/2,AiS/2,LJ/2,LJ/2,JH,JH-180,Tr);this.VQ(0);
return;}if(this.Rd===3){var Ai$=this.Ir;var AdI=Math.sqrt(Ai$*Ai$);var JH=FF;var
Aiw=this.Ir*Math.cos(JH*A.k$);var Aix=this.J2*Math.sin(JH*A.k$);var Adh=Math.sqrt((
Aiw*Aiw)+(Aix*Aix));var ApF=((AdI*0.25)|0)+3;var ApE=((Adh*0.25)|0)+3;this.Jx(0,((
FU+ApF)+ApE)+10);this.Jx(1,0);this.VI(0,0,0);if(FF>=0){this.Fl(0,Ai$/2,0,AdI/2,AdI
/2,180,360,ApF);this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh
/2,Adh/2,JH,JH+180,ApE);}else{this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApF);this.Fl(0
,0,0,this.Ir,this.J2,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JH,JH-180,ApE);}
this.VQ(0);return;}if(this.Rd===2){this.Jx(0,(FU*2)+1);this.Jx(1,0);this.Fl(0,0,
0,this.Ir,this.J2,0,FF,FU);this.Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);this.VQ(0);return;
}if(this.Rd===4){var Os=this.Ir;var LJ=Math.sqrt(Os*Os);var Tr=((LJ*0.25)|0)+3;this.
Jx(0,((FU*2)+Tr)+2);this.Jx(1,0);if(FF>=0){this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU
);this.Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);this.Fl(0,Os/2,0,LJ/2,LJ/2,180,360,Tr
);}else{this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU);this.Fl(0,0,0,0,0,this.NR,this.NR-
FF,FU);this.Fl(0,Os/2,0,LJ/2,LJ/2,180,0,Tr);}this.VQ(0);return;}if(this.Rd===5){
var JH=FF;var sin=Math.sin(JH*A.k$);var cos=Math.cos(JH*A.k$);var Os=this.Ir*cos;
var AiS=this.J2*sin;var LJ=Math.sqrt((Os*Os)+(AiS*AiS));var Tr=((LJ*0.25)|0)+3;this.
Jx(0,((FU*2)+Tr)+2);this.Jx(1,0);if(FF>=0){this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU
);this.Fl(0,Os/2,AiS/2,LJ/2,LJ/2,JH,JH+180,Tr);this.Fl(0,0,0,0,0,this.NR,this.NR-
FF,FU);}else{this.Fl(0,0,0,this.Ir,this.J2,0,FF,FU);this.Fl(0,Os/2,AiS/2,LJ/2,LJ
/2,JH,JH-180,Tr);this.Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);}this.VQ(0);return;}if(
this.Rd===3){var JH=FF;var Bzy=Math.sin(JH*A.k$);var Bzt=Math.cos(JH*A.k$);var Ai$=
this.Ir;var Aiw=this.Ir*Bzt;var Aix=this.J2*Bzy;var AdI=Math.sqrt(Ai$*Ai$);var Adh=
Math.sqrt((Aiw*Aiw)+(Aix*Aix));var ApF=((AdI*0.25)|0)+3;var ApE=((Adh*0.25)|0)+3;
this.Jx(0,(((FU*2)+ApF)+ApE)+4);this.Jx(1,0);if(FF>=0){this.Fl(0,0,0,this.Ir,this.
J2,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JH,JH+180,ApE);this.Fl(0,0,0,0,0,this.
NR,this.NR-FF,FU);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,360,ApF);}else{this.Fl(0,0,0
,this.Ir,this.J2,0,FF,FU);this.Fl(0,Aiw/2,Aix/2,Adh/2,Adh/2,JH,JH-180,ApE);this.
Fl(0,0,0,0,0,this.NR,this.NR-FF,FU);this.Fl(0,Ai$/2,0,AdI/2,AdI/2,180,0,ApF);}this.
VQ(0);return;}},BmH:function(E){if(E===this.NR)return;this.NR=E;if((this.Ir>0)&&(
this.J2>0))A.pe([this,this.Aje],this);},BnX:function(E){if((E===this.Ir)&&(E===this.
J2))return;this.Ir=E;this.J2=E;if(!!this.NR)A.pe([this,this.Aje],this);},Bn7:function(
E){if(E===this.Rd)return;this.Rd=E;if((!!this.NR&&(this.Ir>0))&&(this.J2>0))A.pe([
this,this.Aje],this);},_Init:function(aArg){C.Hz._Init.call(this,aArg);this.__proto__=
C.AMR;},_className:"Graphics::ArcPath"};
C._Init=function(){C.Canvas.__proto__=A.aci.Al;C.AMR.__proto__=C.Hz;};C._ReInit=function(
){};C.DH=function(D){};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */