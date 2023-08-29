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
var B9=[10,10];var BG=[80,50];var EV=[0,0,360,240];var GS=[0,0,370,270];var Js=[0
,0,260,240];
C.A2y={Af:null,T5:0,T6:0,_Init:function(aArg){this.__proto__=C.A2y;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DJ={EP:null,ApL:null,Pd:null,Background:null,ApM:0xFFFFFFFF,ApN:3,AlH:0xFFFFFFFF
,AlI:0,Z7:A.vw,AqB:B9,A12:0xFF000000,ABr:0xFF6E0E0C,AE3:0xFF6E0E0C,Os:BG,Ao9:0,J9:
function(CV,aClip,aOffset,Cd,aBlend){var B;var WJ=0;var WK=0;var AyM=0;var AyN=0;
var Q8=this.M[0]+aOffset[0];var Q9=this.M[1]+aOffset[1];var AnK=this.AlH;var An8=
this.ApM;var An4=this.ABr;var AoM=this.AE3;var AkQ=this.ApN/2;var Q7=this.AlI/2;
var J4=(((Cd+1)*this.GM)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J4<256){AnK=(
AnK&0x00FFFFFF)|((((((AnK>>24)&0xFF)*J4)>>8)&0xFF)<<24);An8=(An8&0x00FFFFFF)|((((((
An8>>24)&0xFF)*J4)>>8)&0xFF)<<24);An4=(An4&0x00FFFFFF)|((((((An4>>24)&0xFF)*J4)>>
8)&0xFF)<<24);AoM=(AoM&0x00FFFFFF)|((((((AoM>>24)&0xFF)*J4)>>8)&0xFF)<<24);}A.Core.
O.J9.call(this,CV,aClip,aOffset,Cd,aBlend);if(((this.ABr>>24)&0xFF)>0){var Dk;for(
Dk=this.Z7[1]+Q9;Dk>=Q9;Dk=Dk-this.Os[1])CV.Atr(aClip,[Q8,Dk],[Q8+((B=this.M)[2]-
B[0]),Dk],An4,An4,aBlend);for(Dk=(this.Z7[1]+Q9)+this.Os[1];Dk<(Q9+((B=this.M)[3
]-B[1]));Dk=Dk+this.Os[1])CV.Atr(aClip,[Q8,Dk],[Q8+((B=this.M)[2]-B[0]),Dk],An4,
An4,aBlend);}if(((this.AE3>>24)&0xFF)>0){var FY;for(FY=this.Z7[0]+Q8;FY>=Q8;FY=FY-
this.Os[0])CV.Atr(aClip,[FY,Q9],[FY,Q9+((B=this.M)[3]-B[1])],AoM,AoM,aBlend);for(
FY=(this.Z7[0]+Q8)+this.Os[0];FY<(Q8+((B=this.M)[2]-B[0]));FY=FY+this.Os[0])CV.Atr(
aClip,[FY,Q9],[FY,Q9+((B=this.M)[3]-B[1])],AoM,AoM,aBlend);}if(!this.EP)return;var
Jt=this.EP.AkF;if(!!Jt){WJ=(Q8+this.Z7[0])+(Jt.T5*this.AqB[0]);WK=(Q9+this.Z7[1]
)+(Jt.T6*this.AqB[1]);Jt=Jt.Af;}while(!!Jt){AyM=(Q8+this.Z7[0])+(Jt.T5*this.AqB[
0]);AyN=(Q9+this.Z7[1])+(Jt.T6*this.AqB[1]);var JX=AyM-WJ;var JY=AyN-WK;var IQ=Math.
sqrt((JX*JX)+(JY*JY));if(!!IQ){JX=JX/IQ;JY=JY/IQ;}if(!!this.ApL)CV.AgZ(aClip,this.
ApL,0,WJ-(JY*AkQ),WK+(JX*AkQ),1,WJ+(JY*AkQ),WK-(JX*AkQ),1,AyM+(JY*AkQ),AyN-(JX*AkQ
),1,AyM-(JY*AkQ),AyN+(JX*AkQ),1,[0,0,this.ApL.FrameSize[0],this.ApL.FrameSize[1]
],An8,An8,An8,An8,aBlend,true);if((this.AlI>0)&&!!this.Pd)CV.AgZ(aClip,this.Pd,this.
Ao9,WJ-Q7,WK-Q7,1,WJ+Q7,WK-Q7,1,WJ+Q7,WK+Q7,1,WJ-Q7,WK+Q7,1,[0,0,this.Pd.FrameSize[
0],this.Pd.FrameSize[1]],AnK,AnK,AnK,AnK,aBlend,true);WJ=AyM;WK=AyN;Jt=Jt.Af;}if((
this.AlI>0)&&!!this.Pd)CV.AgZ(aClip,this.Pd,this.Ao9,WJ-Q7,WK-Q7,1,WJ+Q7,WK-Q7,1
,WJ+Q7,WK+Q7,1,WJ-Q7,WK+Q7,1,[0,0,this.Pd.FrameSize[0],this.Pd.FrameSize[1]],this.
AlH,this.AlH,this.AlH,this.AlH,aBlend,true);},AdQ:function(E){var B;this.EP=E;this.
Am();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQF:function(E){var B;if(E===
this.ApM)return;this.ApM=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQG:function(
E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.ApN=E;this.Bg([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Big:function(E){var B;if(E===this.AlH)return;this.AlH=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQt:function(E){var B;if(E<1)E=0;if(E>25)E=25;
this.AlI=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bib:function(E){var B;if(
A.z8(E,this.Z7))return;this.Z7=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bjs:
function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0],1];if(A.z8(E,this.AqB))return;
this.AqB=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BhW:function(E){if(E===
this.A12)return;this.A12=E;this.Background.L(E);},BiP:function(E){var B;if(E===this.
ABr)return;this.ABr=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjL:function(
E){var B;if(E===this.AE3)return;this.AE3=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Amu:function(E){var B;if(E[0]<10)E=[10,E[1]];if(E[1]<10)E=[E[0],10];if(
A.z8(E,this.Os))return;this.Os=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQr:
function(E){var B;if(E===this.Pd)return;this.Pd=E;this.Bg([0,0,(B=this.M)[2]-B[0
],B[3]-B[1]]);},AQs:function(E){var B;if(E<0)E=0;this.Ao9=E;this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.
AH._Init.call(this.Background={I:this},0);this.__proto__=C.DJ;this.G(EV);this.Background.
AV(0x3F);this.Background.G(GS);this.Background.L(0xFF000000);this.J(this.Background
,0);this.ApL=A.zW(C.AOZ);this.Pd=A.zW(C.AAB);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;A.
Core.O._Mark.call(this,D);if((B=this.EP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.ApL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pd)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"
};C.AAh={AkF:null,Ayc:null,AR:0,AB7:10,Xl:function(){this.AkF=null;this.Ayc=null;
this.AR=0;},AoR:function(aX,aY){var Jt=null;if((this.AB7>0)&&(this.AR===this.AB7
)){Jt=this.AkF;this.AkF=Jt.Af;Jt.Af=null;this.AR=this.AR-1;}else Jt=A._NewObject(
C.A2y,0);Jt.T5=aX;Jt.T6=aY;if(!this.AkF){this.AkF=Jt;this.Ayc=Jt;this.AR=1;}else{
this.Ayc.Af=Jt;this.Ayc=Jt;this.AR=this.AR+1;}},Au8:function(E){if(E<1)E=1;this.
AB7=E;},_Init:function(aArg){this.__proto__=C.AAh;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AkF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ayc)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::CoordList"};C.AOZ={_class:function(){return A.abj.Aj;},
0:{FileName:"./res_index/ChartsLine7x100.png",Format:A.jt,NoOfFrames:1,FrameSize:[
7,100],FrameDelay:0,_this:null}};C.R$={VN:null,Afp:null,NS:null,AD2:270,AEi:1,J9:
function(CV,aClip,aOffset,Cd,aBlend){var Uy;var A_3;Uy=0;A_3=this.AD2;while(Uy<0
)Uy=Uy+360;while(Uy>=360)Uy=Uy-360;var Q8=(((this.M[2]+this.M[0])/2)|0)+aOffset[
0];var Q9=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];A.Core.O.J9.call(this,CV,aClip
,aOffset,Cd,aBlend);if(!!this.NS&&(this.NS.AER>0)){var G1=this.NS.KJ;while(!!G1){
var Fp=(G1.A3/this.NS.AER)*A_3;this.A_9(CV,aClip,Q8,Q9,Uy,Fp,this.AEi,0,G1.AP,Cd
,aBlend);Uy=Uy+Fp;if(Uy>=360)Uy=Uy-360;G1=G1.Af;}}else this.A_9(CV,aClip,Q8,Q9,Uy
,this.AD2,this.AEi,0,0xFF800000,Cd,aBlend);},Bjr:function(E){var B;if(E<0)E=0;if(
E>360)E=360;if(E===this.AD2)return;this.AD2=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[
3]-B[1]]);},BjA:function(E){var B;if(E===this.VN)return;this.VN=E;this.Bg([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},Bjy:function(E){var B;if(E<0.01)E=0.01;if(E>1.1)
E=1.1;if(E===this.AEi)return;this.AEi=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);},A_9:function(CV,aClip,aX,aY,aStartAngle,Wk,Akg,AXK,aColor,Cd,aBlend){var B;
var JA;var Ju;var Afk;var Afl;var Afm;var Afn;var Bbv;var Bbw;var Ak3;var Ak4;var
MF;var BJ=aColor;var J4=(((Cd+1)*this.GM)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2
);if(J4<256)BJ=(BJ&0x00FFFFFF)|((((((BJ>>24)&0xFF)*J4)>>8)&0xFF)<<24);if(!this.VN
)return;var BT=this.VN.FrameSize[0];var BK=this.VN.FrameSize[1];var IS=0;if(Wk>=
360){aStartAngle=0;Wk=360;}if(AXK>0){var A_5=aStartAngle+(Wk/2);JA=Math.sin(A_5*
A.kw);Ju=Math.cos(A_5*A.kw);aX=aX+((AXK*JA)|0);aY=aY-((AXK*Ju)|0);}while(aStartAngle>=
90){aStartAngle=aStartAngle-90;IS=IS+90;}if(!this.Afp||!A.z8(this.Afp.FrameSize,
this.VN.FrameSize)){this.Afp=A._NewObject(A.Graphics.Canvas,0);this.Afp.Aqd(this.
VN.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Wk)<90)){JA=Math.sin(Wk*A.kw);Ju=
Math.cos(Wk*A.kw);Afk=(-BT*Ju)+(BK*JA);Afl=(-BK*Ju)-(BT*JA);Afm=BK*JA;Afn=-BK*Ju;
Ak3=-BT*Ju;Ak4=-BT*JA;this.Afp.AtG([0,0,BT,BK],[0,0,this.Afp.FrameSize[0],this.Afp.
FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000,false);this.Afp.AgZ([0
,0,BT,BK],this.VN,0,Afk,Afl+BK,1,Afm,Afn+BK,1,0,BK,1,Ak3,Ak4+BK,1,[0,0,BT,BK],BJ
,BJ,BJ,BJ,true,true);JA=Math.sin((aStartAngle+IS)*A.kw)*Akg;Ju=Math.cos((aStartAngle+
IS)*A.kw)*Akg;Afk=BK*JA;Afl=-BK*Ju;Afm=(BT*Ju)+(BK*JA);Afn=(-BK*Ju)+(BT*JA);Bbv=
BT*Ju;Bbw=BT*JA;CV.AgZ(aClip,this.Afp,0,Afk+aX,Afl+aY,1,Afm+aX,Afn+aY,1,Bbv+aX,Bbw+
aY,1,aX,aY,1,[0,0,BT,BK],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,aBlend,true
);}else{if(aStartAngle>0){JA=Math.sin(((90+IS)+aStartAngle)*A.kw)*Akg;Ju=Math.cos(((
90+IS)+aStartAngle)*A.kw)*Akg;Afk=(-BT*Ju)+(BK*JA);Afl=(-BK*Ju)-(BT*JA);Afm=BK*JA;
Afn=-BK*Ju;Ak3=-BT*Ju;Ak4=-BT*JA;if(!IS)MF=[aX,-10000,10000,aY];else if(IS===90)
MF=[aX,aY,10000,10000];else if(IS===180)MF=[-10000,aY,aX,10000];else MF=[-10000,-
10000,aX,aY];CV.AgZ(A.kz(aClip,MF),this.VN,0,Afk+aX,Afl+aY,1,Afm+aX,Afn+aY,1,aX,
aY,1,Ak3+aX,Ak4+aY,1,[0,0,BT,BK],BJ,BJ,BJ,BJ,aBlend,true);IS=IS+90;if(IS>=360)IS=
IS-360;Wk=Wk-(90-aStartAngle);}while(Wk>=90){JA=Math.sin((90+IS)*A.kw)*Akg;Ju=Math.
cos((90+IS)*A.kw)*Akg;Afk=(-BT*Ju)+(BK*JA);Afl=(-BK*Ju)-(BT*JA);Afm=BK*JA;Afn=-BK
*Ju;Ak3=-BT*Ju;Ak4=-BT*JA;if(!IS)MF=[aX,-10000,10000,aY];else if(IS===90)MF=[aX,
aY,10000,10000];else if(IS===180)MF=[-10000,aY,aX,10000];else MF=[-10000,-10000,
aX,aY];CV.AgZ(A.kz(aClip,MF),this.VN,0,Afk+aX,Afl+aY,1,Afm+aX,Afn+aY,1,aX,aY,1,Ak3+
aX,Ak4+aY,1,[0,0,BT,BK],BJ,BJ,BJ,BJ,aBlend,true);IS=IS+90;if(IS>=360)IS=IS-360;Wk=
Wk-90;}JA=Math.sin((Wk+IS)*A.kw)*Akg;Ju=Math.cos((Wk+IS)*A.kw)*Akg;Afk=(-BT*Ju)+(
BK*JA);Afl=(-BK*Ju)-(BT*JA);Afm=BK*JA;Afn=-BK*Ju;Ak3=-BT*Ju;Ak4=-BT*JA;if(!IS)MF=[
aX,-10000,10000,aY];else if(IS===90)MF=[aX,aY,10000,10000];else if(IS===180)MF=[-
10000,aY,aX,10000];else MF=[-10000,-10000,aX,aY];CV.AgZ(A.kz(aClip,MF),this.VN,0
,Afk+aX,Afl+aY,1,Afm+aX,Afn+aY,1,aX,aY,1,Ak3+aX,Ak4+aY,1,[0,0,BT,BK],BJ,BJ,BJ,BJ
,aBlend,true);}},Aa8:function(E){var B;this.NS=E;this.Am();this.Bg([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.R$;this.G(Js);this.VN=A.zW(C.ARb);},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.VN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Afp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.NS)&&(B._cycle!=D))B._Mark(B.
_cycle=D);},_className:"Charts::PieChart"};C.ARb={_class:function(){return A.abj.
Aj;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,A3:0,AP:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.ARA={KJ:null,MK:null,AR:10,AER:0,Oj:function(
A4,aColor){var G1;G1=A._NewObject(C.Record,0);G1.A3=A4;G1.AP=aColor;if(!this.KJ){
this.KJ=G1;this.MK=G1;this.AR=1;}else{this.MK.Af=G1;this.MK=G1;this.AR=this.AR+1;
}this.AER=this.AER+A4;},_Init:function(aArg){this.__proto__=C.ARA;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.KJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.ARc={_class:function(
){return A.abj.Aj;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.AAB={_class:function(){return A.
abj.Aj;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.DJ.__proto__=A.Core.O;C.R$.__proto__=A.Core.O;};C._ReInit=function(
){};C.DB=function(D){var B;if((B=C.AOZ[0]._this)&&(B._cycle!=D))B._Done(C.AOZ[0].
_this=null);if((B=C.ARb[0]._this)&&(B._cycle!=D))B._Done(C.ARb[0]._this=null);if((
B=C.ARc[0]._this)&&(B._cycle!=D))B._Done(C.ARc[0]._this=null);if((B=C.AAB[0]._this
)&&(B._cycle!=D))B._Done(C.AAB[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */