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
C.A2Z={Af:null,T6:0,T7:0,_Init:function(aArg){this.__proto__=C.A2Z;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DL={EQ:null,Ap1:null,Pe:null,Background:null,Ap2:0xFFFFFFFF,Ap3:3,AlQ:0xFFFFFFFF
,AlR:0,Aai:A.vw,AqR:B_,A2q:0xFF000000,ABx:0xFF6E0E0C,AFb:0xFF6E0E0C,Ot:BH,App:0,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var WO=0;var WQ=0;var AyT=0;var AyU=
0;var Q8=this.M[0]+aOffset[0];var Q9=this.M[1]+aOffset[1];var An0=this.AlQ;var Aom=
this.Ap2;var Aoi=this.ABx;var Ao3=this.AFb;var Ak0=this.Ap3/2;var Q7=this.AlR/2;
var J5=(((Ce+1)*this.GM)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J5<256){An0=(
An0&0x00FFFFFF)|((((((An0>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aom=(Aom&0x00FFFFFF)|((((((
Aom>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aoi=(Aoi&0x00FFFFFF)|((((((Aoi>>24)&0xFF)*J5)>>
8)&0xFF)<<24);Ao3=(Ao3&0x00FFFFFF)|((((((Ao3>>24)&0xFF)*J5)>>8)&0xFF)<<24);}A.Core.
O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(((this.ABx>>24)&0xFF)>0){var Dl;for(
Dl=this.Aai[1]+Q9;Dl>=Q9;Dl=Dl-this.Ot[1])CW.AtA(aClip,[Q8,Dl],[Q8+((B=this.M)[2
]-B[0]),Dl],Aoi,Aoi,aBlend);for(Dl=(this.Aai[1]+Q9)+this.Ot[1];Dl<(Q9+((B=this.M
)[3]-B[1]));Dl=Dl+this.Ot[1])CW.AtA(aClip,[Q8,Dl],[Q8+((B=this.M)[2]-B[0]),Dl],Aoi
,Aoi,aBlend);}if(((this.AFb>>24)&0xFF)>0){var FY;for(FY=this.Aai[0]+Q8;FY>=Q8;FY=
FY-this.Ot[0])CW.AtA(aClip,[FY,Q9],[FY,Q9+((B=this.M)[3]-B[1])],Ao3,Ao3,aBlend);
for(FY=(this.Aai[0]+Q8)+this.Ot[0];FY<(Q8+((B=this.M)[2]-B[0]));FY=FY+this.Ot[0]
)CW.AtA(aClip,[FY,Q9],[FY,Q9+((B=this.M)[3]-B[1])],Ao3,Ao3,aBlend);}if(!this.EQ)
return;var Ju=this.EQ.AkQ;if(!!Ju){WO=(Q8+this.Aai[0])+(Ju.T6*this.AqR[0]);WQ=(Q9+
this.Aai[1])+(Ju.T7*this.AqR[1]);Ju=Ju.Af;}while(!!Ju){AyT=(Q8+this.Aai[0])+(Ju.
T6*this.AqR[0]);AyU=(Q9+this.Aai[1])+(Ju.T7*this.AqR[1]);var JY=AyT-WO;var JZ=AyU-
WQ;var IQ=Math.sqrt((JY*JY)+(JZ*JZ));if(!!IQ){JY=JY/IQ;JZ=JZ/IQ;}if(!!this.Ap1)CW.
Ag7(aClip,this.Ap1,0,WO-(JZ*Ak0),WQ+(JY*Ak0),1,WO+(JZ*Ak0),WQ-(JY*Ak0),1,AyT+(JZ
*Ak0),AyU-(JY*Ak0),1,AyT-(JZ*Ak0),AyU+(JY*Ak0),1,[0,0,this.Ap1.FrameSize[0],this.
Ap1.FrameSize[1]],Aom,Aom,Aom,Aom,aBlend,true);if((this.AlR>0)&&!!this.Pe)CW.Ag7(
aClip,this.Pe,this.App,WO-Q7,WQ-Q7,1,WO+Q7,WQ-Q7,1,WO+Q7,WQ+Q7,1,WO-Q7,WQ+Q7,1,[
0,0,this.Pe.FrameSize[0],this.Pe.FrameSize[1]],An0,An0,An0,An0,aBlend,true);WO=AyT;
WQ=AyU;Ju=Ju.Af;}if((this.AlR>0)&&!!this.Pe)CW.Ag7(aClip,this.Pe,this.App,WO-Q7,
WQ-Q7,1,WO+Q7,WQ-Q7,1,WO+Q7,WQ+Q7,1,WO-Q7,WQ+Q7,1,[0,0,this.Pe.FrameSize[0],this.
Pe.FrameSize[1]],this.AlQ,this.AlQ,this.AlQ,this.AlQ,aBlend,true);},AdZ:function(
E){var B;this.EQ=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQU:function(
E){var B;if(E===this.Ap2)return;this.Ap2=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AQV:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Ap3=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiA:function(E){var B;if(E===this.AlQ)return;
this.AlQ=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQI:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AlR=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Biu:
function(E){var B;if(A.z8(E,this.Aai))return;this.Aai=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BjN:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.z8(E,this.AqR))return;this.AqR=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);},Bid:function(E){if(E===this.A2q)return;this.A2q=E;this.Background.L(E);},
Bi9:function(E){var B;if(E===this.ABx)return;this.ABx=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bj6:function(E){var B;if(E===this.AFb)return;this.AFb=E;this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AmF:function(E){var B;if(E[0]<10)E=[10,
E[1]];if(E[1]<10)E=[E[0],10];if(A.z8(E,this.Ot))return;this.Ot=E;this.Bg([0,0,(B=
this.M)[2]-B[0],B[3]-B[1]]);},AQG:function(E){var B;if(E===this.Pe)return;this.Pe=
E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQH:function(E){var B;if(E<0)E=0;
this.App=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);this.
__proto__=C.DL;this.G(EV);this.Background.AV(0x3F);this.Background.G(GS);this.Background.
L(0xFF000000);this.J(this.Background,0);this.Ap1=A.zW(C.APb);this.Pe=A.zW(C.AAI);
},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.EQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ap1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Charts::Graph"};C.AAo={AkQ:null,Ayi:null,AR:0,ACc:
10,Xq:function(){this.AkQ=null;this.Ayi=null;this.AR=0;},Ao8:function(aX,aY){var
Ju=null;if((this.ACc>0)&&(this.AR===this.ACc)){Ju=this.AkQ;this.AkQ=Ju.Af;Ju.Af=
null;this.AR=this.AR-1;}else Ju=A._NewObject(C.A2Z,0);Ju.T6=aX;Ju.T7=aY;if(!this.
AkQ){this.AkQ=Ju;this.Ayi=Ju;this.AR=1;}else{this.Ayi.Af=Ju;this.Ayi=Ju;this.AR=
this.AR+1;}},Avg:function(E){if(E<1)E=1;this.ACc=E;},_Init:function(aArg){this.__proto__=
C.AAo;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.AkQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ayi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"};C.
APb={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:null}};C.Sa={VS:null
,Afz:null,NT:null,AD_:270,AEs:1,J_:function(CW,aClip,aOffset,Ce,aBlend){var UA;var
A$m;UA=0;A$m=this.AD_;while(UA<0)UA=UA+360;while(UA>=360)UA=UA-360;var Q8=(((this.
M[2]+this.M[0])/2)|0)+aOffset[0];var Q9=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];
A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!!this.NT&&(this.NT.AE1>0)){
var G1=this.NT.KL;while(!!G1){var Fp=(G1.A4/this.NT.AE1)*A$m;this.A$s(CW,aClip,Q8
,Q9,UA,Fp,this.AEs,0,G1.AP,Ce,aBlend);UA=UA+Fp;if(UA>=360)UA=UA-360;G1=G1.Af;}}else
this.A$s(CW,aClip,Q8,Q9,UA,this.AD_,this.AEs,0,0xFF800000,Ce,aBlend);},BjM:function(
E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AD_)return;this.AD_=E;this.Bg([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjV:function(E){var B;if(E===this.VS)return;this.
VS=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjT:function(E){var B;if(E<0.01
)E=0.01;if(E>1.1)E=1.1;if(E===this.AEs)return;this.AEs=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},A$s:function(CW,aClip,aX,aY,aStartAngle,Wm,Aks,AX8,aColor,
Ce,aBlend){var B;var JB;var Jv;var Afu;var Afv;var Afw;var Afx;var BbN;var BbO;var
Alb;var Alc;var MF;var BK=aColor;var J5=(((Ce+1)*this.GM)>>8)+1;aBlend=aBlend&&((
this.U&0x2)===0x2);if(J5<256)BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*J5)>>8)&0xFF
)<<24);if(!this.VS)return;var BU=this.VS.FrameSize[0];var BL=this.VS.FrameSize[1
];var IS=0;if(Wm>=360){aStartAngle=0;Wm=360;}if(AX8>0){var A$o=aStartAngle+(Wm/2
);JB=Math.sin(A$o*A.kw);Jv=Math.cos(A$o*A.kw);aX=aX+((AX8*JB)|0);aY=aY-((AX8*Jv)|
0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IS=IS+90;}if(!this.Afz||!A.
z8(this.Afz.FrameSize,this.VS.FrameSize)){this.Afz=A._NewObject(A.Graphics.Canvas
,0);this.Afz.Aqt(this.VS.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Wm)<90)){
JB=Math.sin(Wm*A.kw);Jv=Math.cos(Wm*A.kw);Afu=(-BU*Jv)+(BL*JB);Afv=(-BL*Jv)-(BU*
JB);Afw=BL*JB;Afx=-BL*Jv;Alb=-BU*Jv;Alc=-BU*JB;this.Afz.AtQ([0,0,BU,BL],[0,0,this.
Afz.FrameSize[0],this.Afz.FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000
,false);this.Afz.Ag7([0,0,BU,BL],this.VS,0,Afu,Afv+BL,1,Afw,Afx+BL,1,0,BL,1,Alb,
Alc+BL,1,[0,0,BU,BL],BK,BK,BK,BK,true,true);JB=Math.sin((aStartAngle+IS)*A.kw)*Aks;
Jv=Math.cos((aStartAngle+IS)*A.kw)*Aks;Afu=BL*JB;Afv=-BL*Jv;Afw=(BU*Jv)+(BL*JB);
Afx=(-BL*Jv)+(BU*JB);BbN=BU*Jv;BbO=BU*JB;CW.Ag7(aClip,this.Afz,0,Afu+aX,Afv+aY,1
,Afw+aX,Afx+aY,1,BbN+aX,BbO+aY,1,aX,aY,1,[0,0,BU,BL],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JB=Math.sin(((90+IS)+aStartAngle
)*A.kw)*Aks;Jv=Math.cos(((90+IS)+aStartAngle)*A.kw)*Aks;Afu=(-BU*Jv)+(BL*JB);Afv=(-
BL*Jv)-(BU*JB);Afw=BL*JB;Afx=-BL*Jv;Alb=-BU*Jv;Alc=-BU*JB;if(!IS)MF=[aX,-10000,10000
,aY];else if(IS===90)MF=[aX,aY,10000,10000];else if(IS===180)MF=[-10000,aY,aX,10000
];else MF=[-10000,-10000,aX,aY];CW.Ag7(A.kz(aClip,MF),this.VS,0,Afu+aX,Afv+aY,1,
Afw+aX,Afx+aY,1,aX,aY,1,Alb+aX,Alc+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IS=
IS+90;if(IS>=360)IS=IS-360;Wm=Wm-(90-aStartAngle);}while(Wm>=90){JB=Math.sin((90+
IS)*A.kw)*Aks;Jv=Math.cos((90+IS)*A.kw)*Aks;Afu=(-BU*Jv)+(BL*JB);Afv=(-BL*Jv)-(BU
*JB);Afw=BL*JB;Afx=-BL*Jv;Alb=-BU*Jv;Alc=-BU*JB;if(!IS)MF=[aX,-10000,10000,aY];else
if(IS===90)MF=[aX,aY,10000,10000];else if(IS===180)MF=[-10000,aY,aX,10000];else MF=[-
10000,-10000,aX,aY];CW.Ag7(A.kz(aClip,MF),this.VS,0,Afu+aX,Afv+aY,1,Afw+aX,Afx+aY
,1,aX,aY,1,Alb+aX,Alc+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IS=IS+90;if(IS>=
360)IS=IS-360;Wm=Wm-90;}JB=Math.sin((Wm+IS)*A.kw)*Aks;Jv=Math.cos((Wm+IS)*A.kw)*
Aks;Afu=(-BU*Jv)+(BL*JB);Afv=(-BL*Jv)-(BU*JB);Afw=BL*JB;Afx=-BL*Jv;Alb=-BU*Jv;Alc=-
BU*JB;if(!IS)MF=[aX,-10000,10000,aY];else if(IS===90)MF=[aX,aY,10000,10000];else
if(IS===180)MF=[-10000,aY,aX,10000];else MF=[-10000,-10000,aX,aY];CW.Ag7(A.kz(aClip
,MF),this.VS,0,Afu+aX,Afv+aY,1,Afw+aX,Afx+aY,1,aX,aY,1,Alb+aX,Alc+aY,1,[0,0,BU,BL
],BK,BK,BK,BK,aBlend,true);}},Abl:function(E){var B;this.NT=E;this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.Sa;this.G(Jt);this.VS=A.zW(C.ARq);},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.VS)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Afz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NT)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.ARq={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,A4:0,AP:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.ARO={KL:null,MK:null,AR:10,AE1:0,Ol:function(
A1,aColor){var G1;G1=A._NewObject(C.Record,0);G1.A4=A1;G1.AP=aColor;if(!this.KL){
this.KL=G1;this.MK=G1;this.AR=1;}else{this.MK.Af=G1;this.MK=G1;this.AR=this.AR+1;
}this.AE1=this.AE1+A1;},_Init:function(aArg){this.__proto__=C.ARO;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.KL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.ARr={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.AAI={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.DL.__proto__=A.Core.O;C.Sa.__proto__=A.Core.O;};C._ReInit=function(
){};C.DE=function(D){var B;if((B=C.APb[0]._this)&&(B._cycle!=D))B._Done(C.APb[0].
_this=null);if((B=C.ARq[0]._this)&&(B._cycle!=D))B._Done(C.ARq[0]._this=null);if((
B=C.ARr[0]._this)&&(B._cycle!=D))B._Done(C.ARr[0]._this=null);if((B=C.AAI[0]._this
)&&(B._cycle!=D))B._Done(C.AAI[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */