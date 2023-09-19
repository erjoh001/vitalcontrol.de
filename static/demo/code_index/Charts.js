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
var B$=[10,10];var BH=[80,50];var EV=[0,0,360,240];var GT=[0,0,370,270];var Jt=[0
,0,260,240];
C.A21={Af:null,T8:0,T9:0,_Init:function(aArg){this.__proto__=C.A21;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DL={EQ:null,Ap0:null,Pe:null,Background:null,Ap1:0xFFFFFFFF,Ap2:3,AlP:0xFFFFFFFF
,AlQ:0,Aaj:A.vw,AqQ:B$,A2s:0xFF000000,ABz:0xFF6E0E0C,AFc:0xFF6E0E0C,Ot:BH,Apo:0,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var WR=0;var WS=0;var AyV=0;var AyW=
0;var Q_=this.M[0]+aOffset[0];var Q$=this.M[1]+aOffset[1];var AnZ=this.AlP;var Aol=
this.Ap1;var Aoh=this.ABz;var Ao2=this.AFc;var AkZ=this.Ap2/2;var Q9=this.AlQ/2;
var J5=(((Ce+1)*this.GN)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J5<256){AnZ=(
AnZ&0x00FFFFFF)|((((((AnZ>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aol=(Aol&0x00FFFFFF)|((((((
Aol>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aoh=(Aoh&0x00FFFFFF)|((((((Aoh>>24)&0xFF)*J5)>>
8)&0xFF)<<24);Ao2=(Ao2&0x00FFFFFF)|((((((Ao2>>24)&0xFF)*J5)>>8)&0xFF)<<24);}A.Core.
O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(((this.ABz>>24)&0xFF)>0){var Dl;for(
Dl=this.Aaj[1]+Q$;Dl>=Q$;Dl=Dl-this.Ot[1])CW.AtA(aClip,[Q_,Dl],[Q_+((B=this.M)[2
]-B[0]),Dl],Aoh,Aoh,aBlend);for(Dl=(this.Aaj[1]+Q$)+this.Ot[1];Dl<(Q$+((B=this.M
)[3]-B[1]));Dl=Dl+this.Ot[1])CW.AtA(aClip,[Q_,Dl],[Q_+((B=this.M)[2]-B[0]),Dl],Aoh
,Aoh,aBlend);}if(((this.AFc>>24)&0xFF)>0){var FY;for(FY=this.Aaj[0]+Q_;FY>=Q_;FY=
FY-this.Ot[0])CW.AtA(aClip,[FY,Q$],[FY,Q$+((B=this.M)[3]-B[1])],Ao2,Ao2,aBlend);
for(FY=(this.Aaj[0]+Q_)+this.Ot[0];FY<(Q_+((B=this.M)[2]-B[0]));FY=FY+this.Ot[0]
)CW.AtA(aClip,[FY,Q$],[FY,Q$+((B=this.M)[3]-B[1])],Ao2,Ao2,aBlend);}if(!this.EQ)
return;var Ju=this.EQ.AkP;if(!!Ju){WR=(Q_+this.Aaj[0])+(Ju.T8*this.AqQ[0]);WS=(Q$+
this.Aaj[1])+(Ju.T9*this.AqQ[1]);Ju=Ju.Af;}while(!!Ju){AyV=(Q_+this.Aaj[0])+(Ju.
T8*this.AqQ[0]);AyW=(Q$+this.Aaj[1])+(Ju.T9*this.AqQ[1]);var JY=AyV-WR;var JZ=AyW-
WS;var IR=Math.sqrt((JY*JY)+(JZ*JZ));if(!!IR){JY=JY/IR;JZ=JZ/IR;}if(!!this.Ap0)CW.
Ag6(aClip,this.Ap0,0,WR-(JZ*AkZ),WS+(JY*AkZ),1,WR+(JZ*AkZ),WS-(JY*AkZ),1,AyV+(JZ
*AkZ),AyW-(JY*AkZ),1,AyV-(JZ*AkZ),AyW+(JY*AkZ),1,[0,0,this.Ap0.FrameSize[0],this.
Ap0.FrameSize[1]],Aol,Aol,Aol,Aol,aBlend,true);if((this.AlQ>0)&&!!this.Pe)CW.Ag6(
aClip,this.Pe,this.Apo,WR-Q9,WS-Q9,1,WR+Q9,WS-Q9,1,WR+Q9,WS+Q9,1,WR-Q9,WS+Q9,1,[
0,0,this.Pe.FrameSize[0],this.Pe.FrameSize[1]],AnZ,AnZ,AnZ,AnZ,aBlend,true);WR=AyV;
WS=AyW;Ju=Ju.Af;}if((this.AlQ>0)&&!!this.Pe)CW.Ag6(aClip,this.Pe,this.Apo,WR-Q9,
WS-Q9,1,WR+Q9,WS-Q9,1,WR+Q9,WS+Q9,1,WR-Q9,WS+Q9,1,[0,0,this.Pe.FrameSize[0],this.
Pe.FrameSize[1]],this.AlP,this.AlP,this.AlP,this.AlP,aBlend,true);},Ad0:function(
E){var B;this.EQ=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQQ:function(
E){var B;if(E===this.Ap1)return;this.Ap1=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AQR:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Ap2=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiE:function(E){var B;if(E===this.AlP)return;
this.AlP=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQE:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AlQ=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Biy:
function(E){var B;if(A.z8(E,this.Aaj))return;this.Aaj=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BjR:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.z8(E,this.AqQ))return;this.AqQ=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);},Bih:function(E){if(E===this.A2s)return;this.A2s=E;this.Background.L(E);},
Bjb:function(E){var B;if(E===this.ABz)return;this.ABz=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bj_:function(E){var B;if(E===this.AFc)return;this.AFc=E;this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AmE:function(E){var B;if(E[0]<10)E=[10,
E[1]];if(E[1]<10)E=[E[0],10];if(A.z8(E,this.Ot))return;this.Ot=E;this.Bg([0,0,(B=
this.M)[2]-B[0],B[3]-B[1]]);},AQC:function(E){var B;if(E===this.Pe)return;this.Pe=
E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQD:function(E){var B;if(E<0)E=0;
this.Apo=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);this.
__proto__=C.DL;this.G(EV);this.Background.AV(0x3F);this.Background.G(GT);this.Background.
L(0xFF000000);this.J(this.Background,0);this.Ap0=A.zW(C.AO9);this.Pe=A.zW(C.AAK);
},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.EQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ap0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Charts::Graph"};C.AAq={AkP:null,Ayl:null,AR:0,ACe:
10,Xt:function(){this.AkP=null;this.Ayl=null;this.AR=0;},Ao7:function(aX,aY){var
Ju=null;if((this.ACe>0)&&(this.AR===this.ACe)){Ju=this.AkP;this.AkP=Ju.Af;Ju.Af=
null;this.AR=this.AR-1;}else Ju=A._NewObject(C.A21,0);Ju.T8=aX;Ju.T9=aY;if(!this.
AkP){this.AkP=Ju;this.Ayl=Ju;this.AR=1;}else{this.Ayl.Af=Ju;this.Ayl=Ju;this.AR=
this.AR+1;}},Avh:function(E){if(E<1)E=1;this.ACe=E;},_Init:function(aArg){this.__proto__=
C.AAq;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.AkP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ayl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"};C.
AO9={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:null}};C.Sa={VT:null
,Afy:null,NT:null,AD$:270,AEt:1,J_:function(CW,aClip,aOffset,Ce,aBlend){var UC;var
A$p;UC=0;A$p=this.AD$;while(UC<0)UC=UC+360;while(UC>=360)UC=UC-360;var Q_=(((this.
M[2]+this.M[0])/2)|0)+aOffset[0];var Q$=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];
A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!!this.NT&&(this.NT.AE2>0)){
var G2=this.NT.KL;while(!!G2){var Fp=(G2.A4/this.NT.AE2)*A$p;this.A$v(CW,aClip,Q_
,Q$,UC,Fp,this.AEt,0,G2.AP,Ce,aBlend);UC=UC+Fp;if(UC>=360)UC=UC-360;G2=G2.Af;}}else
this.A$v(CW,aClip,Q_,Q$,UC,this.AD$,this.AEt,0,0xFF800000,Ce,aBlend);},BjQ:function(
E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AD$)return;this.AD$=E;this.Bg([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjZ:function(E){var B;if(E===this.VT)return;this.
VT=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjX:function(E){var B;if(E<0.01
)E=0.01;if(E>1.1)E=1.1;if(E===this.AEt)return;this.AEt=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},A$v:function(CW,aClip,aX,aY,aStartAngle,Wo,Akr,AX_,aColor,
Ce,aBlend){var B;var JB;var Jv;var Aft;var Afu;var Afv;var Afw;var BbQ;var BbR;var
Ala;var Alb;var MG;var BK=aColor;var J5=(((Ce+1)*this.GN)>>8)+1;aBlend=aBlend&&((
this.U&0x2)===0x2);if(J5<256)BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*J5)>>8)&0xFF
)<<24);if(!this.VT)return;var BU=this.VT.FrameSize[0];var BL=this.VT.FrameSize[1
];var IT=0;if(Wo>=360){aStartAngle=0;Wo=360;}if(AX_>0){var A$r=aStartAngle+(Wo/2
);JB=Math.sin(A$r*A.kw);Jv=Math.cos(A$r*A.kw);aX=aX+((AX_*JB)|0);aY=aY-((AX_*Jv)|
0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IT=IT+90;}if(!this.Afy||!A.
z8(this.Afy.FrameSize,this.VT.FrameSize)){this.Afy=A._NewObject(A.Graphics.Canvas
,0);this.Afy.Aqs(this.VT.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Wo)<90)){
JB=Math.sin(Wo*A.kw);Jv=Math.cos(Wo*A.kw);Aft=(-BU*Jv)+(BL*JB);Afu=(-BL*Jv)-(BU*
JB);Afv=BL*JB;Afw=-BL*Jv;Ala=-BU*Jv;Alb=-BU*JB;this.Afy.AtQ([0,0,BU,BL],[0,0,this.
Afy.FrameSize[0],this.Afy.FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000
,false);this.Afy.Ag6([0,0,BU,BL],this.VT,0,Aft,Afu+BL,1,Afv,Afw+BL,1,0,BL,1,Ala,
Alb+BL,1,[0,0,BU,BL],BK,BK,BK,BK,true,true);JB=Math.sin((aStartAngle+IT)*A.kw)*Akr;
Jv=Math.cos((aStartAngle+IT)*A.kw)*Akr;Aft=BL*JB;Afu=-BL*Jv;Afv=(BU*Jv)+(BL*JB);
Afw=(-BL*Jv)+(BU*JB);BbQ=BU*Jv;BbR=BU*JB;CW.Ag6(aClip,this.Afy,0,Aft+aX,Afu+aY,1
,Afv+aX,Afw+aY,1,BbQ+aX,BbR+aY,1,aX,aY,1,[0,0,BU,BL],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JB=Math.sin(((90+IT)+aStartAngle
)*A.kw)*Akr;Jv=Math.cos(((90+IT)+aStartAngle)*A.kw)*Akr;Aft=(-BU*Jv)+(BL*JB);Afu=(-
BL*Jv)-(BU*JB);Afv=BL*JB;Afw=-BL*Jv;Ala=-BU*Jv;Alb=-BU*JB;if(!IT)MG=[aX,-10000,10000
,aY];else if(IT===90)MG=[aX,aY,10000,10000];else if(IT===180)MG=[-10000,aY,aX,10000
];else MG=[-10000,-10000,aX,aY];CW.Ag6(A.kz(aClip,MG),this.VT,0,Aft+aX,Afu+aY,1,
Afv+aX,Afw+aY,1,aX,aY,1,Ala+aX,Alb+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IT=
IT+90;if(IT>=360)IT=IT-360;Wo=Wo-(90-aStartAngle);}while(Wo>=90){JB=Math.sin((90+
IT)*A.kw)*Akr;Jv=Math.cos((90+IT)*A.kw)*Akr;Aft=(-BU*Jv)+(BL*JB);Afu=(-BL*Jv)-(BU
*JB);Afv=BL*JB;Afw=-BL*Jv;Ala=-BU*Jv;Alb=-BU*JB;if(!IT)MG=[aX,-10000,10000,aY];else
if(IT===90)MG=[aX,aY,10000,10000];else if(IT===180)MG=[-10000,aY,aX,10000];else MG=[-
10000,-10000,aX,aY];CW.Ag6(A.kz(aClip,MG),this.VT,0,Aft+aX,Afu+aY,1,Afv+aX,Afw+aY
,1,aX,aY,1,Ala+aX,Alb+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IT=IT+90;if(IT>=
360)IT=IT-360;Wo=Wo-90;}JB=Math.sin((Wo+IT)*A.kw)*Akr;Jv=Math.cos((Wo+IT)*A.kw)*
Akr;Aft=(-BU*Jv)+(BL*JB);Afu=(-BL*Jv)-(BU*JB);Afv=BL*JB;Afw=-BL*Jv;Ala=-BU*Jv;Alb=-
BU*JB;if(!IT)MG=[aX,-10000,10000,aY];else if(IT===90)MG=[aX,aY,10000,10000];else
if(IT===180)MG=[-10000,aY,aX,10000];else MG=[-10000,-10000,aX,aY];CW.Ag6(A.kz(aClip
,MG),this.VT,0,Aft+aX,Afu+aY,1,Afv+aX,Afw+aY,1,aX,aY,1,Ala+aX,Alb+aY,1,[0,0,BU,BL
],BK,BK,BK,BK,aBlend,true);}},Abl:function(E){var B;this.NT=E;this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.Sa;this.G(Jt);this.VT=A.zW(C.ARm);},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Afy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NT)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.ARm={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,A4:0,AP:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.ARK={KL:null,ML:null,AR:10,AE2:0,Ol:function(
A1,aColor){var G2;G2=A._NewObject(C.Record,0);G2.A4=A1;G2.AP=aColor;if(!this.KL){
this.KL=G2;this.ML=G2;this.AR=1;}else{this.ML.Af=G2;this.ML=G2;this.AR=this.AR+1;
}this.AE2=this.AE2+A1;},_Init:function(aArg){this.__proto__=C.ARK;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.KL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ML)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.ARn={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.AAK={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.DL.__proto__=A.Core.O;C.Sa.__proto__=A.Core.O;};C._ReInit=function(
){};C.DE=function(D){var B;if((B=C.AO9[0]._this)&&(B._cycle!=D))B._Done(C.AO9[0].
_this=null);if((B=C.ARm[0]._this)&&(B._cycle!=D))B._Done(C.ARm[0]._this=null);if((
B=C.ARn[0]._this)&&(B._cycle!=D))B._Done(C.ARn[0]._this=null);if((B=C.AAK[0]._this
)&&(B._cycle!=D))B._Done(C.AAK[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */