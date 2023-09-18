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
};C.DL={EQ:null,Ap1:null,Pe:null,Background:null,Ap2:0xFFFFFFFF,Ap3:3,AlR:0xFFFFFFFF
,AlS:0,Aaj:A.vw,AqR:B$,A2s:0xFF000000,ABy:0xFF6E0E0C,AFb:0xFF6E0E0C,Ot:BH,App:0,
J_:function(CW,aClip,aOffset,Ce,aBlend){var B;var WQ=0;var WR=0;var AyU=0;var AyV=
0;var Q_=this.M[0]+aOffset[0];var Q$=this.M[1]+aOffset[1];var An0=this.AlR;var Aom=
this.Ap2;var Aoi=this.ABy;var Ao3=this.AFb;var Ak1=this.Ap3/2;var Q9=this.AlS/2;
var J5=(((Ce+1)*this.GN)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J5<256){An0=(
An0&0x00FFFFFF)|((((((An0>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aom=(Aom&0x00FFFFFF)|((((((
Aom>>24)&0xFF)*J5)>>8)&0xFF)<<24);Aoi=(Aoi&0x00FFFFFF)|((((((Aoi>>24)&0xFF)*J5)>>
8)&0xFF)<<24);Ao3=(Ao3&0x00FFFFFF)|((((((Ao3>>24)&0xFF)*J5)>>8)&0xFF)<<24);}A.Core.
O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(((this.ABy>>24)&0xFF)>0){var Dl;for(
Dl=this.Aaj[1]+Q$;Dl>=Q$;Dl=Dl-this.Ot[1])CW.AtC(aClip,[Q_,Dl],[Q_+((B=this.M)[2
]-B[0]),Dl],Aoi,Aoi,aBlend);for(Dl=(this.Aaj[1]+Q$)+this.Ot[1];Dl<(Q$+((B=this.M
)[3]-B[1]));Dl=Dl+this.Ot[1])CW.AtC(aClip,[Q_,Dl],[Q_+((B=this.M)[2]-B[0]),Dl],Aoi
,Aoi,aBlend);}if(((this.AFb>>24)&0xFF)>0){var FY;for(FY=this.Aaj[0]+Q_;FY>=Q_;FY=
FY-this.Ot[0])CW.AtC(aClip,[FY,Q$],[FY,Q$+((B=this.M)[3]-B[1])],Ao3,Ao3,aBlend);
for(FY=(this.Aaj[0]+Q_)+this.Ot[0];FY<(Q_+((B=this.M)[2]-B[0]));FY=FY+this.Ot[0]
)CW.AtC(aClip,[FY,Q$],[FY,Q$+((B=this.M)[3]-B[1])],Ao3,Ao3,aBlend);}if(!this.EQ)
return;var Ju=this.EQ.AkR;if(!!Ju){WQ=(Q_+this.Aaj[0])+(Ju.T8*this.AqR[0]);WR=(Q$+
this.Aaj[1])+(Ju.T9*this.AqR[1]);Ju=Ju.Af;}while(!!Ju){AyU=(Q_+this.Aaj[0])+(Ju.
T8*this.AqR[0]);AyV=(Q$+this.Aaj[1])+(Ju.T9*this.AqR[1]);var JY=AyU-WQ;var JZ=AyV-
WR;var IR=Math.sqrt((JY*JY)+(JZ*JZ));if(!!IR){JY=JY/IR;JZ=JZ/IR;}if(!!this.Ap1)CW.
Ag7(aClip,this.Ap1,0,WQ-(JZ*Ak1),WR+(JY*Ak1),1,WQ+(JZ*Ak1),WR-(JY*Ak1),1,AyU+(JZ
*Ak1),AyV-(JY*Ak1),1,AyU-(JZ*Ak1),AyV+(JY*Ak1),1,[0,0,this.Ap1.FrameSize[0],this.
Ap1.FrameSize[1]],Aom,Aom,Aom,Aom,aBlend,true);if((this.AlS>0)&&!!this.Pe)CW.Ag7(
aClip,this.Pe,this.App,WQ-Q9,WR-Q9,1,WQ+Q9,WR-Q9,1,WQ+Q9,WR+Q9,1,WQ-Q9,WR+Q9,1,[
0,0,this.Pe.FrameSize[0],this.Pe.FrameSize[1]],An0,An0,An0,An0,aBlend,true);WQ=AyU;
WR=AyV;Ju=Ju.Af;}if((this.AlS>0)&&!!this.Pe)CW.Ag7(aClip,this.Pe,this.App,WQ-Q9,
WR-Q9,1,WQ+Q9,WR-Q9,1,WQ+Q9,WR+Q9,1,WQ-Q9,WR+Q9,1,[0,0,this.Pe.FrameSize[0],this.
Pe.FrameSize[1]],this.AlR,this.AlR,this.AlR,this.AlR,aBlend,true);},AdZ:function(
E){var B;this.EQ=E;this.Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQR:function(
E){var B;if(E===this.Ap2)return;this.Ap2=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AQS:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Ap3=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiD:function(E){var B;if(E===this.AlR)return;
this.AlR=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQF:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AlS=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bix:
function(E){var B;if(A.z8(E,this.Aaj))return;this.Aaj=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BjQ:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.z8(E,this.AqR))return;this.AqR=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[
1]]);},Big:function(E){if(E===this.A2s)return;this.A2s=E;this.Background.L(E);},
Bja:function(E){var B;if(E===this.ABy)return;this.ABy=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bj9:function(E){var B;if(E===this.AFb)return;this.AFb=E;this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AmG:function(E){var B;if(E[0]<10)E=[10,
E[1]];if(E[1]<10)E=[E[0],10];if(A.z8(E,this.Ot))return;this.Ot=E;this.Bg([0,0,(B=
this.M)[2]-B[0],B[3]-B[1]]);},AQD:function(E){var B;if(E===this.Pe)return;this.Pe=
E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQE:function(E){var B;if(E<0)E=0;
this.App=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);this.
__proto__=C.DL;this.G(EV);this.Background.AV(0x3F);this.Background.G(GT);this.Background.
L(0xFF000000);this.J(this.Background,0);this.Ap1=A.zW(C.AO_);this.Pe=A.zW(C.AAJ);
},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.EQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ap1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Charts::Graph"};C.AAp={AkR:null,Ayk:null,AR:0,ACd:
10,Xs:function(){this.AkR=null;this.Ayk=null;this.AR=0;},Ao8:function(aX,aY){var
Ju=null;if((this.ACd>0)&&(this.AR===this.ACd)){Ju=this.AkR;this.AkR=Ju.Af;Ju.Af=
null;this.AR=this.AR-1;}else Ju=A._NewObject(C.A21,0);Ju.T8=aX;Ju.T9=aY;if(!this.
AkR){this.AkR=Ju;this.Ayk=Ju;this.AR=1;}else{this.Ayk.Af=Ju;this.Ayk=Ju;this.AR=
this.AR+1;}},Avj:function(E){if(E<1)E=1;this.ACd=E;},_Init:function(aArg){this.__proto__=
C.AAp;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.AkR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ayk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"};C.
AO_={_class:function(){return A.abj.Aj;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A.jt,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:null}};C.Sa={VT:null
,Afz:null,NT:null,AD_:270,AEs:1,J_:function(CW,aClip,aOffset,Ce,aBlend){var UC;var
A$o;UC=0;A$o=this.AD_;while(UC<0)UC=UC+360;while(UC>=360)UC=UC-360;var Q_=(((this.
M[2]+this.M[0])/2)|0)+aOffset[0];var Q$=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];
A.Core.O.J_.call(this,CW,aClip,aOffset,Ce,aBlend);if(!!this.NT&&(this.NT.AE1>0)){
var G2=this.NT.KL;while(!!G2){var Fp=(G2.A4/this.NT.AE1)*A$o;this.A$u(CW,aClip,Q_
,Q$,UC,Fp,this.AEs,0,G2.AP,Ce,aBlend);UC=UC+Fp;if(UC>=360)UC=UC-360;G2=G2.Af;}}else
this.A$u(CW,aClip,Q_,Q$,UC,this.AD_,this.AEs,0,0xFF800000,Ce,aBlend);},BjP:function(
E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AD_)return;this.AD_=E;this.Bg([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjY:function(E){var B;if(E===this.VT)return;this.
VT=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjW:function(E){var B;if(E<0.01
)E=0.01;if(E>1.1)E=1.1;if(E===this.AEs)return;this.AEs=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},A$u:function(CW,aClip,aX,aY,aStartAngle,Wn,Akt,AX_,aColor,
Ce,aBlend){var B;var JB;var Jv;var Afu;var Afv;var Afw;var Afx;var BbP;var BbQ;var
Alc;var Ald;var MF;var BK=aColor;var J5=(((Ce+1)*this.GN)>>8)+1;aBlend=aBlend&&((
this.U&0x2)===0x2);if(J5<256)BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*J5)>>8)&0xFF
)<<24);if(!this.VT)return;var BU=this.VT.FrameSize[0];var BL=this.VT.FrameSize[1
];var IT=0;if(Wn>=360){aStartAngle=0;Wn=360;}if(AX_>0){var A$q=aStartAngle+(Wn/2
);JB=Math.sin(A$q*A.kw);Jv=Math.cos(A$q*A.kw);aX=aX+((AX_*JB)|0);aY=aY-((AX_*Jv)|
0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IT=IT+90;}if(!this.Afz||!A.
z8(this.Afz.FrameSize,this.VT.FrameSize)){this.Afz=A._NewObject(A.Graphics.Canvas
,0);this.Afz.Aqt(this.VT.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Wn)<90)){
JB=Math.sin(Wn*A.kw);Jv=Math.cos(Wn*A.kw);Afu=(-BU*Jv)+(BL*JB);Afv=(-BL*Jv)-(BU*
JB);Afw=BL*JB;Afx=-BL*Jv;Alc=-BU*Jv;Ald=-BU*JB;this.Afz.AtS([0,0,BU,BL],[0,0,this.
Afz.FrameSize[0],this.Afz.FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000
,false);this.Afz.Ag7([0,0,BU,BL],this.VT,0,Afu,Afv+BL,1,Afw,Afx+BL,1,0,BL,1,Alc,
Ald+BL,1,[0,0,BU,BL],BK,BK,BK,BK,true,true);JB=Math.sin((aStartAngle+IT)*A.kw)*Akt;
Jv=Math.cos((aStartAngle+IT)*A.kw)*Akt;Afu=BL*JB;Afv=-BL*Jv;Afw=(BU*Jv)+(BL*JB);
Afx=(-BL*Jv)+(BU*JB);BbP=BU*Jv;BbQ=BU*JB;CW.Ag7(aClip,this.Afz,0,Afu+aX,Afv+aY,1
,Afw+aX,Afx+aY,1,BbP+aX,BbQ+aY,1,aX,aY,1,[0,0,BU,BL],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JB=Math.sin(((90+IT)+aStartAngle
)*A.kw)*Akt;Jv=Math.cos(((90+IT)+aStartAngle)*A.kw)*Akt;Afu=(-BU*Jv)+(BL*JB);Afv=(-
BL*Jv)-(BU*JB);Afw=BL*JB;Afx=-BL*Jv;Alc=-BU*Jv;Ald=-BU*JB;if(!IT)MF=[aX,-10000,10000
,aY];else if(IT===90)MF=[aX,aY,10000,10000];else if(IT===180)MF=[-10000,aY,aX,10000
];else MF=[-10000,-10000,aX,aY];CW.Ag7(A.kz(aClip,MF),this.VT,0,Afu+aX,Afv+aY,1,
Afw+aX,Afx+aY,1,aX,aY,1,Alc+aX,Ald+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IT=
IT+90;if(IT>=360)IT=IT-360;Wn=Wn-(90-aStartAngle);}while(Wn>=90){JB=Math.sin((90+
IT)*A.kw)*Akt;Jv=Math.cos((90+IT)*A.kw)*Akt;Afu=(-BU*Jv)+(BL*JB);Afv=(-BL*Jv)-(BU
*JB);Afw=BL*JB;Afx=-BL*Jv;Alc=-BU*Jv;Ald=-BU*JB;if(!IT)MF=[aX,-10000,10000,aY];else
if(IT===90)MF=[aX,aY,10000,10000];else if(IT===180)MF=[-10000,aY,aX,10000];else MF=[-
10000,-10000,aX,aY];CW.Ag7(A.kz(aClip,MF),this.VT,0,Afu+aX,Afv+aY,1,Afw+aX,Afx+aY
,1,aX,aY,1,Alc+aX,Ald+aY,1,[0,0,BU,BL],BK,BK,BK,BK,aBlend,true);IT=IT+90;if(IT>=
360)IT=IT-360;Wn=Wn-90;}JB=Math.sin((Wn+IT)*A.kw)*Akt;Jv=Math.cos((Wn+IT)*A.kw)*
Akt;Afu=(-BU*Jv)+(BL*JB);Afv=(-BL*Jv)-(BU*JB);Afw=BL*JB;Afx=-BL*Jv;Alc=-BU*Jv;Ald=-
BU*JB;if(!IT)MF=[aX,-10000,10000,aY];else if(IT===90)MF=[aX,aY,10000,10000];else
if(IT===180)MF=[-10000,aY,aX,10000];else MF=[-10000,-10000,aX,aY];CW.Ag7(A.kz(aClip
,MF),this.VT,0,Afu+aX,Afv+aY,1,Afw+aX,Afx+aY,1,aX,aY,1,Alc+aX,Ald+aY,1,[0,0,BU,BL
],BK,BK,BK,BK,aBlend,true);}},Abl:function(E){var B;this.NT=E;this.Am();this.Bg([
0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.Sa;this.G(Jt);this.VT=A.zW(C.ARn);},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Afz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NT)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.ARn={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,A4:0,AP:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.ARL={KL:null,MK:null,AR:10,AE1:0,Ol:function(
A1,aColor){var G2;G2=A._NewObject(C.Record,0);G2.A4=A1;G2.AP=aColor;if(!this.KL){
this.KL=G2;this.MK=G2;this.AR=1;}else{this.MK.Af=G2;this.MK=G2;this.AR=this.AR+1;
}this.AE1=this.AE1+A1;},_Init:function(aArg){this.__proto__=C.ARL;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.KL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.ARo={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.AAJ={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.DL.__proto__=A.Core.O;C.Sa.__proto__=A.Core.O;};C._ReInit=function(
){};C.DE=function(D){var B;if((B=C.AO_[0]._this)&&(B._cycle!=D))B._Done(C.AO_[0].
_this=null);if((B=C.ARn[0]._this)&&(B._cycle!=D))B._Done(C.ARn[0]._this=null);if((
B=C.ARo[0]._this)&&(B._cycle!=D))B._Done(C.ARo[0]._this=null);if((B=C.AAJ[0]._this
)&&(B._cycle!=D))B._Done(C.AAJ[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */