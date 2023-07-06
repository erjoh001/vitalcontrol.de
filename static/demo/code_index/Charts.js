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
var B3=[10,10];var BI=[80,50];var EG=[0,0,360,240];var Gr=[0,0,370,270];var I4=[0
,0,260,240];
C.AZU={Af:null,Tf:0,Tg:0,_Init:function(aArg){this.__proto__=C.AZU;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.Dr={EB:null,Aos:null,OG:null,Background:null,Aot:0xFFFFFFFF,Aou:3,Akv:0xFFFFFFFF
,Akw:0,Zd:A.vw,Apk:B3,AZs:0xFF000000,AzJ:0xFF6E0E0C,ADc:0xFF6E0E0C,NU:BI,AnU:0,JH:
function(CJ,aClip,aOffset,B5,aBlend){var B;var VQ=0;var VS=0;var Axc=0;var Axd=0;
var Qu=this.M[0]+aOffset[0];var Qv=this.M[1]+aOffset[1];var Amy=this.Akv;var AmU=
this.Aot;var AmR=this.AzJ;var Any=this.ADc;var AjC=this.Aou/2;var Qt=this.Akw/2;
var JD=(((B5+1)*this.Gm)>>8)+1;aBlend=aBlend&&((this.S&0x2)===0x2);if(JD<256){Amy=(
Amy&0x00FFFFFF)|((((((Amy>>24)&0xFF)*JD)>>8)&0xFF)<<24);AmU=(AmU&0x00FFFFFF)|((((((
AmU>>24)&0xFF)*JD)>>8)&0xFF)<<24);AmR=(AmR&0x00FFFFFF)|((((((AmR>>24)&0xFF)*JD)>>
8)&0xFF)<<24);Any=(Any&0x00FFFFFF)|((((((Any>>24)&0xFF)*JD)>>8)&0xFF)<<24);}A.Core.
O.JH.call(this,CJ,aClip,aOffset,B5,aBlend);if(((this.AzJ>>24)&0xFF)>0){var C6;for(
C6=this.Zd[1]+Qv;C6>=Qv;C6=C6-this.NU[1])CJ.ArY(aClip,[Qu,C6],[Qu+((B=this.M)[2]-
B[0]),C6],AmR,AmR,aBlend);for(C6=(this.Zd[1]+Qv)+this.NU[1];C6<(Qv+((B=this.M)[3
]-B[1]));C6=C6+this.NU[1])CJ.ArY(aClip,[Qu,C6],[Qu+((B=this.M)[2]-B[0]),C6],AmR,
AmR,aBlend);}if(((this.ADc>>24)&0xFF)>0){var Fy;for(Fy=this.Zd[0]+Qu;Fy>=Qu;Fy=Fy-
this.NU[0])CJ.ArY(aClip,[Fy,Qv],[Fy,Qv+((B=this.M)[3]-B[1])],Any,Any,aBlend);for(
Fy=(this.Zd[0]+Qu)+this.NU[0];Fy<(Qu+((B=this.M)[2]-B[0]));Fy=Fy+this.NU[0])CJ.ArY(
aClip,[Fy,Qv],[Fy,Qv+((B=this.M)[3]-B[1])],Any,Any,aBlend);}if(!this.EB)return;var
I5=this.EB.Ajs;if(!!I5){VQ=(Qu+this.Zd[0])+(I5.Tf*this.Apk[0]);VS=(Qv+this.Zd[1]
)+(I5.Tg*this.Apk[1]);I5=I5.Af;}while(!!I5){Axc=(Qu+this.Zd[0])+(I5.Tf*this.Apk[
0]);Axd=(Qv+this.Zd[1])+(I5.Tg*this.Apk[1]);var Jv=Axc-VQ;var Jw=Axd-VS;var Is=Math.
sqrt((Jv*Jv)+(Jw*Jw));if(!!Is){Jv=Jv/Is;Jw=Jw/Is;}if(!!this.Aos)CJ.AfR(aClip,this.
Aos,0,VQ-(Jw*AjC),VS+(Jv*AjC),1,VQ+(Jw*AjC),VS-(Jv*AjC),1,Axc+(Jw*AjC),Axd-(Jv*AjC
),1,Axc-(Jw*AjC),Axd+(Jv*AjC),1,[0,0,this.Aos.FrameSize[0],this.Aos.FrameSize[1]
],AmU,AmU,AmU,AmU,aBlend,true);if((this.Akw>0)&&!!this.OG)CJ.AfR(aClip,this.OG,this.
AnU,VQ-Qt,VS-Qt,1,VQ+Qt,VS-Qt,1,VQ+Qt,VS+Qt,1,VQ-Qt,VS+Qt,1,[0,0,this.OG.FrameSize[
0],this.OG.FrameSize[1]],Amy,Amy,Amy,Amy,aBlend,true);VQ=Axc;VS=Axd;I5=I5.Af;}if((
this.Akw>0)&&!!this.OG)CJ.AfR(aClip,this.OG,this.AnU,VQ-Qt,VS-Qt,1,VQ+Qt,VS-Qt,1
,VQ+Qt,VS+Qt,1,VQ-Qt,VS+Qt,1,[0,0,this.OG.FrameSize[0],this.OG.FrameSize[1]],this.
Akv,this.Akv,this.Akv,this.Akv,aBlend,true);},AcN:function(E){var B;this.EB=E;this.
Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOs:function(E){var B;if(E===
this.Aot)return;this.Aot=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOt:function(
E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Aou=E;this.Bc([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Be9:function(E){var B;if(E===this.Akv)return;this.Akv=E;this.Bc([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOg:function(E){var B;if(E<1)E=0;if(E>25)E=25;
this.Akw=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Be4:function(E){var B;if(
A.z8(E,this.Zd))return;this.Zd=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bgi:
function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0],1];if(A.z8(E,this.Apk))return;
this.Apk=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BeO:function(E){if(E===
this.AZs)return;this.AZs=E;this.Background.L(E);},BfH:function(E){var B;if(E===this.
AzJ)return;this.AzJ=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BgC:function(
E){var B;if(E===this.ADc)return;this.ADc=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Ale:function(E){var B;if(E[0]<10)E=[10,E[1]];if(E[1]<10)E=[E[0],10];if(
A.z8(E,this.NU))return;this.NU=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOe:
function(E){var B;if(E===this.OG)return;this.OG=E;this.Bc([0,0,(B=this.M)[2]-B[0
],B[3]-B[1]]);},AOf:function(E){var B;if(E<0)E=0;this.AnU=E;this.Bc([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.
AH._Init.call(this.Background={I:this},0);this.__proto__=C.Dr;this.G(EG);this.Background.
AW(0x3F);this.Background.G(Gr);this.Background.L(0xFF000000);this.J(this.Background
,0);this.Aos=A.zW(C.AMW);this.OG=A.zW(C.AyX);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;A.
Core.O._Mark.call(this,D);if((B=this.EB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aos)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.OG)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"
};C.AyE={Ajs:null,AwK:null,AM:0,AAn:10,Ws:function(){this.Ajs=null;this.AwK=null;
this.AM=0;},AnD:function(aX,aY){var I5=null;if((this.AAn>0)&&(this.AM===this.AAn
)){I5=this.Ajs;this.Ajs=I5.Af;I5.Af=null;this.AM=this.AM-1;}else I5=A._NewObject(
C.AZU,0);I5.Tf=aX;I5.Tg=aY;if(!this.Ajs){this.Ajs=I5;this.AwK=I5;this.AM=1;}else{
this.AwK.Af=I5;this.AwK=I5;this.AM=this.AM+1;}},AtB:function(E){if(E<1)E=1;this.
AAn=E;},_Init:function(aArg){this.__proto__=C.AyE;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ajs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AwK)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::CoordList"};C.AMW={_class:function(){return A.abj.Ah;},
0:{FileName:"./res_index/ChartsLine7x100.png",Format:A.jt,NoOfFrames:1,FrameSize:[
7,100],FrameDelay:0,_this:null}};C.Rw={UT:null,Aeg:null,Nf:null,AB$:270,ACt:1,JH:
function(CJ,aClip,aOffset,B5,aBlend){var TI;var A72;TI=0;A72=this.AB$;while(TI<0
)TI=TI+360;while(TI>=360)TI=TI-360;var Qu=(((this.M[2]+this.M[0])/2)|0)+aOffset[
0];var Qv=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];A.Core.O.JH.call(this,CJ,aClip
,aOffset,B5,aBlend);if(!!this.Nf&&(this.Nf.AC3>0)){var Gx=this.Nf.Kf;while(!!Gx){
var E7=(Gx.AY/this.Nf.AC3)*A72;this.A78(CJ,aClip,Qu,Qv,TI,E7,this.ACt,0,Gx.AV,B5
,aBlend);TI=TI+E7;if(TI>=360)TI=TI-360;Gx=Gx.Af;}}else this.A78(CJ,aClip,Qu,Qv,TI
,this.AB$,this.ACt,0,0xFF800000,B5,aBlend);},Bgh:function(E){var B;if(E<0)E=0;if(
E>360)E=360;if(E===this.AB$)return;this.AB$=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[
3]-B[1]]);},Bgr:function(E){var B;if(E===this.UT)return;this.UT=E;this.Bc([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},Bgp:function(E){var B;if(E<0.01)E=0.01;if(E>1.1)
E=1.1;if(E===this.ACt)return;this.ACt=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);},A78:function(CJ,aClip,aX,aY,aStartAngle,Vt,Ai7,AVe,aColor,B5,aBlend){var B;
var Jb;var I6;var Aeb;var Aec;var Aed;var Aee;var A_n;var A_o;var AjR;var AjS;var
L7;var BF=aColor;var JD=(((B5+1)*this.Gm)>>8)+1;aBlend=aBlend&&((this.S&0x2)===0x2
);if(JD<256)BF=(BF&0x00FFFFFF)|((((((BF>>24)&0xFF)*JD)>>8)&0xFF)<<24);if(!this.UT
)return;var BP=this.UT.FrameSize[0];var BG=this.UT.FrameSize[1];var Iv=0;if(Vt>=
360){aStartAngle=0;Vt=360;}if(AVe>0){var A74=aStartAngle+(Vt/2);Jb=Math.sin(A74*
A.kw);I6=Math.cos(A74*A.kw);aX=aX+((AVe*Jb)|0);aY=aY-((AVe*I6)|0);}while(aStartAngle>=
90){aStartAngle=aStartAngle-90;Iv=Iv+90;}if(!this.Aeg||!A.z8(this.Aeg.FrameSize,
this.UT.FrameSize)){this.Aeg=A._NewObject(A.Graphics.Canvas,0);this.Aeg.AoY(this.
UT.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Vt)<90)){Jb=Math.sin(Vt*A.kw);I6=
Math.cos(Vt*A.kw);Aeb=(-BP*I6)+(BG*Jb);Aec=(-BG*I6)-(BP*Jb);Aed=BG*Jb;Aee=-BG*I6;
AjR=-BP*I6;AjS=-BP*Jb;this.Aeg.Asa([0,0,BP,BG],[0,0,this.Aeg.FrameSize[0],this.Aeg.
FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000,false);this.Aeg.AfR([0
,0,BP,BG],this.UT,0,Aeb,Aec+BG,1,Aed,Aee+BG,1,0,BG,1,AjR,AjS+BG,1,[0,0,BP,BG],BF
,BF,BF,BF,true,true);Jb=Math.sin((aStartAngle+Iv)*A.kw)*Ai7;I6=Math.cos((aStartAngle+
Iv)*A.kw)*Ai7;Aeb=BG*Jb;Aec=-BG*I6;Aed=(BP*I6)+(BG*Jb);Aee=(-BG*I6)+(BP*Jb);A_n=
BP*I6;A_o=BP*Jb;CJ.AfR(aClip,this.Aeg,0,Aeb+aX,Aec+aY,1,Aed+aX,Aee+aY,1,A_n+aX,A_o+
aY,1,aX,aY,1,[0,0,BP,BG],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,aBlend,true
);}else{if(aStartAngle>0){Jb=Math.sin(((90+Iv)+aStartAngle)*A.kw)*Ai7;I6=Math.cos(((
90+Iv)+aStartAngle)*A.kw)*Ai7;Aeb=(-BP*I6)+(BG*Jb);Aec=(-BG*I6)-(BP*Jb);Aed=BG*Jb;
Aee=-BG*I6;AjR=-BP*I6;AjS=-BP*Jb;if(!Iv)L7=[aX,-10000,10000,aY];else if(Iv===90)
L7=[aX,aY,10000,10000];else if(Iv===180)L7=[-10000,aY,aX,10000];else L7=[-10000,-
10000,aX,aY];CJ.AfR(A.kz(aClip,L7),this.UT,0,Aeb+aX,Aec+aY,1,Aed+aX,Aee+aY,1,aX,
aY,1,AjR+aX,AjS+aY,1,[0,0,BP,BG],BF,BF,BF,BF,aBlend,true);Iv=Iv+90;if(Iv>=360)Iv=
Iv-360;Vt=Vt-(90-aStartAngle);}while(Vt>=90){Jb=Math.sin((90+Iv)*A.kw)*Ai7;I6=Math.
cos((90+Iv)*A.kw)*Ai7;Aeb=(-BP*I6)+(BG*Jb);Aec=(-BG*I6)-(BP*Jb);Aed=BG*Jb;Aee=-BG
*I6;AjR=-BP*I6;AjS=-BP*Jb;if(!Iv)L7=[aX,-10000,10000,aY];else if(Iv===90)L7=[aX,
aY,10000,10000];else if(Iv===180)L7=[-10000,aY,aX,10000];else L7=[-10000,-10000,
aX,aY];CJ.AfR(A.kz(aClip,L7),this.UT,0,Aeb+aX,Aec+aY,1,Aed+aX,Aee+aY,1,aX,aY,1,AjR+
aX,AjS+aY,1,[0,0,BP,BG],BF,BF,BF,BF,aBlend,true);Iv=Iv+90;if(Iv>=360)Iv=Iv-360;Vt=
Vt-90;}Jb=Math.sin((Vt+Iv)*A.kw)*Ai7;I6=Math.cos((Vt+Iv)*A.kw)*Ai7;Aeb=(-BP*I6)+(
BG*Jb);Aec=(-BG*I6)-(BP*Jb);Aed=BG*Jb;Aee=-BG*I6;AjR=-BP*I6;AjS=-BP*Jb;if(!Iv)L7=[
aX,-10000,10000,aY];else if(Iv===90)L7=[aX,aY,10000,10000];else if(Iv===180)L7=[-
10000,aY,aX,10000];else L7=[-10000,-10000,aX,aY];CJ.AfR(A.kz(aClip,L7),this.UT,0
,Aeb+aX,Aec+aY,1,Aed+aX,Aee+aY,1,aX,aY,1,AjR+aX,AjS+aY,1,[0,0,BP,BG],BF,BF,BF,BF
,aBlend,true);}},Z8:function(E){var B;this.Nf=E;this.Al();this.Bc([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.Rw;this.G(I4);this.UT=A.zW(C.AOZ);},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.UT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aeg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nf)&&(B._cycle!=D))B._Mark(B.
_cycle=D);},_className:"Charts::PieChart"};C.AOZ={_class:function(){return A.abj.
Ah;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,AY:0,AV:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.APi={Kf:null,L$:null,AM:10,AC3:0,NM:function(
A2,aColor){var Gx;Gx=A._NewObject(C.Record,0);Gx.AY=A2;Gx.AV=aColor;if(!this.Kf){
this.Kf=Gx;this.L$=Gx;this.AM=1;}else{this.L$.Af=Gx;this.L$=Gx;this.AM=this.AM+1;
}this.AC3=this.AC3+A2;},_Init:function(aArg){this.__proto__=C.APi;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Kf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.L$)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.AO0={_class:function(
){return A.abj.Ah;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.AyX={_class:function(){return A.
abj.Ah;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.Dr.__proto__=A.Core.O;C.Rw.__proto__=A.Core.O;};C._ReInit=function(
){};C.Dn=function(D){var B;if((B=C.AMW[0]._this)&&(B._cycle!=D))B._Done(C.AMW[0].
_this=null);if((B=C.AOZ[0]._this)&&(B._cycle!=D))B._Done(C.AOZ[0]._this=null);if((
B=C.AO0[0]._this)&&(B._cycle!=D))B._Done(C.AO0[0]._this=null);if((B=C.AyX[0]._this
)&&(B._cycle!=D))B._Done(C.AyX[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2019 */