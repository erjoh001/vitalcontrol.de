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
);if(index.abw)throw new Error("The unit file 'Charts.js' included twice!");index.
abw=(function(){var A=index;var C={};
var B_=[10,10];var BH=[80,50];var EV=[0,0,360,240];var GS=[0,0,370,270];var Jt=[0
,0,260,240];
C.A2U={Af:null,T7:0,T8:0,_Init:function(aArg){this.__proto__=C.A2U;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DL={EQ:null,ApY:null,Pe:null,Background:null,ApZ:0xFFFFFFFF,Ap0:3,AlO:0xFFFFFFFF
,AlP:0,Aai:A.vw,AqO:B_,A2l:0xFF000000,ABy:0xFF6E0E0C,AFb:0xFF6E0E0C,Ot:BH,Apl:0,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var WT=0;var WU=0;var AyU=0;var AyV=
0;var Q8=this.M[0]+aOffset[0];var Q9=this.M[1]+aOffset[1];var AnW=this.AlO;var Aoi=
this.ApZ;var Aoe=this.ABy;var AoZ=this.AFb;var AkY=this.Ap0/2;var Q7=this.AlP/2;
var J5=(((Ce+1)*this.GM)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J5<256){AnW=(
AnW&0x00FFFFFF)|((((((AnW>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aoi=(Aoi&0x00FFFFFF)|((((((
Aoi>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aoe=(Aoe&0x00FFFFFF)|((((((Aoe>>24)&0xFF)*J5)>>
8)&0xFF)<<24);AoZ=(AoZ&0x00FFFFFF)|((((((AoZ>>24)&0xFF)*J5)>>8)&0xFF)<<24);}A.Core.
O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(((this.ABy>>24)&0xFF)>0){var Dl;for(
Dl=this.Aai[1]+Q9;Dl>=Q9;Dl=Dl-this.Ot[1])CW.AtB(aClip,[Q8,Dl],[Q8+((B=this.M)[2
]-B[0]),Dl],Aoe,Aoe,aBlend);for(Dl=(this.Aai[1]+Q9)+this.Ot[1];Dl<(Q9+((B=this.M
)[3]-B[1]));Dl=Dl+this.Ot[1])CW.AtB(aClip,[Q8,Dl],[Q8+((B=this.M)[2]-B[0]),Dl],Aoe
,Aoe,aBlend);}if(((this.AFb>>24)&0xFF)>0){var FY;for(FY=this.Aai[0]+Q8;FY>=Q8;FY=
FY-this.Ot[0])CW.AtB(aClip,[FY,Q9],[FY,Q9+((B=this.M)[3]-B[1])],AoZ,AoZ,aBlend);
for(FY=(this.Aai[0]+Q8)+this.Ot[0];FY<(Q8+((B=this.M)[2]-B[0]));FY=FY+this.Ot[0]
)CW.AtB(aClip,[FY,Q9],[FY,Q9+((B=this.M)[3]-B[1])],AoZ,AoZ,aBlend);}if(!this.EQ)
return;var Ju=this.EQ.AkO;if(!!Ju){WT=(Q8+this.Aai[0])+(Ju.T7*this.AqO[0]);WU=(Q9+
this.Aai[1])+(Ju.T8*this.AqO[1]);Ju=Ju.Af;}while(!!Ju){AyU=(Q8+this.Aai[0])+(Ju.
T7*this.AqO[0]);AyV=(Q9+this.Aai[1])+(Ju.T8*this.AqO[1]);var JY=AyU-WT;var JZ=AyV-
WU;var IQ=Math.sqrt((JY*JY)+(JZ*JZ));if(!!IQ){JY=JY/IQ;JZ=JZ/IQ;}if(!!this.ApY)CW.
Ag7(aClip,this.ApY,0,WT-(JZ*AkY),WU+(JY*AkY),1,WT+(JZ*AkY),WU-(JY*AkY),1,AyU+(JZ
*AkY),AyV-(JY*AkY),1,AyU-(JZ*AkY),AyV+(JY*AkY),1,[0,0,this.ApY.FrameSize[0],this.
ApY.FrameSize[1]],Aoi,Aoi,Aoi,Aoi,aBlend,true);if((this.AlP>0)&&!!this.Pe)CW.Ag7(
aClip,this.Pe,this.Apl,WT-Q7,WU-Q7,1,WT+Q7,WU-Q7,1,WT+Q7,WU+Q7,1,WT-Q7,WU+Q7,1,[
0,0,this.Pe.FrameSize[0],this.Pe.FrameSize[1]],AnW,AnW,AnW,AnW,aBlend,true);WT=AyU;
WU=AyV;Ju=Ju.Af;}if((this.AlP>0)&&!!this.Pe)CW.Ag7(aClip,this.Pe,this.Apl,WT-Q7,
WU-Q7,1,WT+Q7,WU-Q7,1,WT+Q7,WU+Q7,1,WT-Q7,WU+Q7,1,[0,0,this.Pe.FrameSize[0],this.
Pe.FrameSize[1]],this.AlO,this.AlO,this.AlO,this.AlO,aBlend,true);},Ad0:function(
E){var B;this.EQ=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQV:function(
E){var B;if(E===this.ApZ)return;this.ApZ=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AQW:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Ap0=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Biw:function(E){var B;if(E===this.AlO)return;
this.AlO=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQJ:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AlP=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Biq:
function(E){var B;if(A.z8(E,this.Aai))return;this.Aai=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BjJ:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.z8(E,this.AqO))return;this.AqO=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);},Bh$:function(E){if(E===this.A2l)return;this.A2l=E;this.Background.L(E);},
Bi5:function(E){var B;if(E===this.ABy)return;this.ABy=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bj2:function(E){var B;if(E===this.AFb)return;this.AFb=E;this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AmC:function(E){var B;if(E[0]<10)E=[10,
E[1]];if(E[1]<10)E=[E[0],10];if(A.z8(E,this.Ot))return;this.Ot=E;this.Bg([0,0,(B=
this.M)[2]-B[0],B[3]-B[1]]);},AQH:function(E){var B;if(E===this.Pe)return;this.Pe=
E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQI:function(E){var B;if(E<0)E=0;
this.Apl=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);this.
__proto__=C.DL;this.G(EV);this.Background.AV(0x3F);this.Background.G(GS);this.Background.
L(0xFF000000);this.J(this.Background,0);this.ApY=A.zW(C.APc);this.Pe=A.zW(C.AAJ);
},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.EQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.ApY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Charts::Graph"};C.AAp={AkO:null,Ayj:null,AR:0,ACd:
10,Xu:function(){this.AkO=null;this.Ayj=null;this.AR=0;},Ao4:function(aX,aY){var
Ju=null;if((this.ACd>0)&&(this.AR===this.ACd)){Ju=this.AkO;this.AkO=Ju.Af;Ju.Af=
null;this.AR=this.AR-1;}else Ju=A._NewObject(C.A2U,0);Ju.T7=aX;Ju.T8=aY;if(!this.
AkO){this.AkO=Ju;this.Ayj=Ju;this.AR=1;}else{this.Ayj.Af=Ju;this.Ayj=Ju;this.AR=
this.AR+1;}},Avh:function(E){if(E<1)E=1;this.ACd=E;},_Init:function(aArg){this.__proto__=
C.AAp;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.AkO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ayj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"};C.
APc={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:null}};C.Sa={VS:null
,Afy:null,NT:null,AD$:270,AEs:1,J_:function(CW,aClip,aOffset,Ce,aBlend){var UA;var
A$h;UA=0;A$h=this.AD$;while(UA<0)UA=UA+360;while(UA>=360)UA=UA-360;var Q8=(((this.
M[2]+this.M[0])/2)|0)+aOffset[0];var Q9=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];
A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!!this.NT&&(this.NT.AE1>0)){
var G1=this.NT.KL;while(!!G1){var Fp=(G1.A4/this.NT.AE1)*A$h;this.A$n(CW,aClip,Q8
,Q9,UA,Fp,this.AEs,0,G1.AP,Ce,aBlend);UA=UA+Fp;if(UA>=360)UA=UA-360;G1=G1.Af;}}else
this.A$n(CW,aClip,Q8,Q9,UA,this.AD$,this.AEs,0,0xFF800000,Ce,aBlend);},BjI:function(
E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AD$)return;this.AD$=E;this.Bg([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjR:function(E){var B;if(E===this.VS)return;this.
VS=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjP:function(E){var B;if(E<0.01
)E=0.01;if(E>1.1)E=1.1;if(E===this.AEs)return;this.AEs=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},A$n:function(CW,aClip,aX,aY,aStartAngle,Wq,Akq,AX3,aColor,
Ce,aBlend){var B;var JB;var Jv;var Aft;var Afu;var Afv;var Afw;var BbI;var BbJ;var
Ak$;var Ala;var MF;var BK=aColor;var J5=(((Ce+1)*this.GM)>>8)+1;aBlend=aBlend&&((
this.U&0x2)===0x2);if(J5<256)BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*J5)>>8)&0xFF
)<<24);if(!this.VS)return;var BU=this.VS.FrameSize[0];var BL=this.VS.FrameSize[1
];var IS=0;if(Wq>=360){aStartAngle=0;Wq=360;}if(AX3>0){var A$j=aStartAngle+(Wq/2
);JB=Math.sin(A$j*A.kw);Jv=Math.cos(A$j*A.kw);aX=aX+((AX3*JB)|0);aY=aY-((AX3*Jv)|
0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IS=IS+90;}if(!this.Afy||!A.
z8(this.Afy.FrameSize,this.VS.FrameSize)){this.Afy=A._NewObject(A.Graphics.Canvas
,0);this.Afy.Aqq(this.VS.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Wq)<90)){
JB=Math.sin(Wq*A.kw);Jv=Math.cos(Wq*A.kw);Aft=(-BU*Jv)+(BL*JB);Afu=(-BL*Jv)-(BU*
JB);Afv=BL*JB;Afw=-BL*Jv;Ak$=-BU*Jv;Ala=-BU*JB;this.Afy.AtR([0,0,BU,BL],[0,0,this.
Afy.FrameSize[0],this.Afy.FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000
,false);this.Afy.Ag7([0,0,BU,BL],this.VS,0,Aft,Afu+BL,1,Afv,Afw+BL,1,0,BL,1,Ak$,
Ala+BL,1,[0,0,BU,BL],BK,BK,BK,BK,true,true);JB=Math.sin((aStartAngle+IS)*A.kw)*Akq;
Jv=Math.cos((aStartAngle+IS)*A.kw)*Akq;Aft=BL*JB;Afu=-BL*Jv;Afv=(BU*Jv)+(BL*JB);
Afw=(-BL*Jv)+(BU*JB);BbI=BU*Jv;BbJ=BU*JB;CW.Ag7(aClip,this.Afy,0,Aft+aX,Afu+aY,1
,Afv+aX,Afw+aY,1,BbI+aX,BbJ+aY,1,aX,aY,1,[0,0,BU,BL],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JB=Math.sin(((90+IS)+aStartAngle
)*A.kw)*Akq;Jv=Math.cos(((90+IS)+aStartAngle)*A.kw)*Akq;Aft=(-BU*Jv)+(BL*JB);Afu=(-
BL*Jv)-(BU*JB);Afv=BL*JB;Afw=-BL*Jv;Ak$=-BU*Jv;Ala=-BU*JB;if(!IS)MF=[aX,-10000,10000
,aY];else if(IS===90)MF=[aX,aY,10000,10000];else if(IS===180)MF=[-10000,aY,aX,10000
];else MF=[-10000,-10000,aX,aY];CW.Ag7(A.kz(aClip,MF),this.VS,0,Aft+aX,Afu+aY,1,
Afv+aX,Afw+aY,1,aX,aY,1,Ak$+aX,Ala+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IS=
IS+90;if(IS>=360)IS=IS-360;Wq=Wq-(90-aStartAngle);}while(Wq>=90){JB=Math.sin((90+
IS)*A.kw)*Akq;Jv=Math.cos((90+IS)*A.kw)*Akq;Aft=(-BU*Jv)+(BL*JB);Afu=(-BL*Jv)-(BU
*JB);Afv=BL*JB;Afw=-BL*Jv;Ak$=-BU*Jv;Ala=-BU*JB;if(!IS)MF=[aX,-10000,10000,aY];else
if(IS===90)MF=[aX,aY,10000,10000];else if(IS===180)MF=[-10000,aY,aX,10000];else MF=[-
10000,-10000,aX,aY];CW.Ag7(A.kz(aClip,MF),this.VS,0,Aft+aX,Afu+aY,1,Afv+aX,Afw+aY
,1,aX,aY,1,Ak$+aX,Ala+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IS=IS+90;if(IS>=
360)IS=IS-360;Wq=Wq-90;}JB=Math.sin((Wq+IS)*A.kw)*Akq;Jv=Math.cos((Wq+IS)*A.kw)*
Akq;Aft=(-BU*Jv)+(BL*JB);Afu=(-BL*Jv)-(BU*JB);Afv=BL*JB;Afw=-BL*Jv;Ak$=-BU*Jv;Ala=-
BU*JB;if(!IS)MF=[aX,-10000,10000,aY];else if(IS===90)MF=[aX,aY,10000,10000];else
if(IS===180)MF=[-10000,aY,aX,10000];else MF=[-10000,-10000,aX,aY];CW.Ag7(A.kz(aClip
,MF),this.VS,0,Aft+aX,Afu+aY,1,Afv+aX,Afw+aY,1,aX,aY,1,Ak$+aX,Ala+aY,1,[0,0,BU,BL
],BK,BK,BK,BK,aBlend,true);}},Abl:function(E){var B;this.NT=E;this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.Sa;this.G(Jt);this.VS=A.zW(C.ARr);},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.VS)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Afy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NT)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.ARr={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,A4:0,AP:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.ARQ={KL:null,MK:null,AR:10,AE1:0,Ol:function(
A1,aColor){var G1;G1=A._NewObject(C.Record,0);G1.A4=A1;G1.AP=aColor;if(!this.KL){
this.KL=G1;this.MK=G1;this.AR=1;}else{this.MK.Af=G1;this.MK=G1;this.AR=this.AR+1;
}this.AE1=this.AE1+A1;},_Init:function(aArg){this.__proto__=C.ARQ;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.KL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.ARs={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.AAJ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.DL.__proto__=A.Core.O;C.Sa.__proto__=A.Core.O;};C._ReInit=function(
){};C.DE=function(D){var B;if((B=C.APc[0]._this)&&(B._cycle!=D))B._Done(C.APc[0].
_this=null);if((B=C.ARr[0]._this)&&(B._cycle!=D))B._Done(C.ARr[0]._this=null);if((
B=C.ARs[0]._this)&&(B._cycle!=D))B._Done(C.ARs[0]._this=null);if((B=C.AAJ[0]._this
)&&(B._cycle!=D))B._Done(C.AAJ[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */