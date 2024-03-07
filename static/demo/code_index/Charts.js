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
* Version  : 13.02
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acu)throw new Error("The unit file 'Charts.js' included twice!");index.
acu=(function(){var A=index;var C={};
var Cc=[10,10];var BF=[80,50];var EY=[0,0,360,240];var Hi=[0,0,370,270];var I7=[0
,0,260,240];
C.A5l={Ah:null,PW:0,PX:0,_Init:function(aArg){this.__proto__=C.A5l;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DP={ET:null,AqW:null,Pp:null,Background:null,AqX:0xFFFFFFFF,AqY:3,Ams:0xFFFFFFFF
,Amt:0,AaU:A.wf,ArP:Cc,A4J:0xFF000000,ACY:0xFF6E0E0C,AGI:0xFF6E0E0C,OD:BF,Aqi:0,
Ka:function(CZ,aClip,aOffset,Ch,aBlend){var B;var Xq=0;var Xr=0;var AAe=0;var AAf=
0;var Rt=this.M[0]+aOffset[0];var Ru=this.M[1]+aOffset[1];var AoP=this.Ams;var Apb=
this.AqX;var Ao9=this.ACY;var ApS=this.AGI;var Alw=this.AqY/2;var Rs=this.Amt/2;
var J6=(((Ch+1)*this.G0)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J6<256){AoP=(
AoP&0x00FFFFFF)|((((((AoP>>24)&0xFF)*J6)>>8)&0xFF)<<24);Apb=(Apb&0x00FFFFFF)|((((((
Apb>>24)&0xFF)*J6)>>8)&0xFF)<<24);Ao9=(Ao9&0x00FFFFFF)|((((((Ao9>>24)&0xFF)*J6)>>
8)&0xFF)<<24);ApS=(ApS&0x00FFFFFF)|((((((ApS>>24)&0xFF)*J6)>>8)&0xFF)<<24);}A.Core.
O.Ka.call(this,CZ,aClip,aOffset,Ch,aBlend);if(((this.ACY>>24)&0xFF)>0){var De;for(
De=this.AaU[1]+Ru;De>=Ru;De=De-this.OD[1])CZ.AuE(aClip,[Rt,De],[Rt+((B=this.M)[2
]-B[0]),De],Ao9,Ao9,aBlend);for(De=(this.AaU[1]+Ru)+this.OD[1];De<(Ru+((B=this.M
)[3]-B[1]));De=De+this.OD[1])CZ.AuE(aClip,[Rt,De],[Rt+((B=this.M)[2]-B[0]),De],Ao9
,Ao9,aBlend);}if(((this.AGI>>24)&0xFF)>0){var Ej;for(Ej=this.AaU[0]+Rt;Ej>=Rt;Ej=
Ej-this.OD[0])CZ.AuE(aClip,[Ej,Ru],[Ej,Ru+((B=this.M)[3]-B[1])],ApS,ApS,aBlend);
for(Ej=(this.AaU[0]+Rt)+this.OD[0];Ej<(Rt+((B=this.M)[2]-B[0]));Ej=Ej+this.OD[0]
)CZ.AuE(aClip,[Ej,Ru],[Ej,Ru+((B=this.M)[3]-B[1])],ApS,ApS,aBlend);}if(!this.ET)
return;var Jo=this.ET.Alm;if(!!Jo){Xq=(Rt+this.AaU[0])+(Jo.PW*this.ArP[0]);Xr=(Ru+
this.AaU[1])+(Jo.PX*this.ArP[1]);Jo=Jo.Ah;}while(!!Jo){AAe=(Rt+this.AaU[0])+(Jo.
PW*this.ArP[0]);AAf=(Ru+this.AaU[1])+(Jo.PX*this.ArP[1]);var JY=AAe-Xq;var JZ=AAf-
Xr;var IM=Math.sqrt((JY*JY)+(JZ*JZ));if(!!IM){JY=JY/IM;JZ=JZ/IM;}if(!!this.AqW)CZ.
AhD(aClip,this.AqW,0,Xq-(JZ*Alw),Xr+(JY*Alw),1,Xq+(JZ*Alw),Xr-(JY*Alw),1,AAe+(JZ
*Alw),AAf-(JY*Alw),1,AAe-(JZ*Alw),AAf+(JY*Alw),1,[0,0,this.AqW.FrameSize[0],this.
AqW.FrameSize[1]],Apb,Apb,Apb,Apb,aBlend,true);if((this.Amt>0)&&!!this.Pp)CZ.AhD(
aClip,this.Pp,this.Aqi,Xq-Rs,Xr-Rs,1,Xq+Rs,Xr-Rs,1,Xq+Rs,Xr+Rs,1,Xq-Rs,Xr+Rs,1,[
0,0,this.Pp.FrameSize[0],this.Pp.FrameSize[1]],AoP,AoP,AoP,AoP,aBlend,true);Xq=AAe;
Xr=AAf;Jo=Jo.Ah;}if((this.Amt>0)&&!!this.Pp)CZ.AhD(aClip,this.Pp,this.Aqi,Xq-Rs,
Xr-Rs,1,Xq+Rs,Xr-Rs,1,Xq+Rs,Xr+Rs,1,Xq-Rs,Xr+Rs,1,[0,0,this.Pp.FrameSize[0],this.
Pp.FrameSize[1]],this.Ams,this.Ams,this.Ams,this.Ams,aBlend,true);},AeF:function(
E){var B;this.ET=E;this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASD:function(
E){var B;if(E===this.AqX)return;this.AqX=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ASE:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.AqY=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bli:function(E){var B;if(E===this.Ams)return;
this.Ams=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASr:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.Amt=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Blc:
function(E){var B;if(A.aaX(E,this.AaU))return;this.AaU=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bmw:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.ArP))return;this.ArP=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},BkV:function(E){if(E===this.A4J)return;this.A4J=E;this.Background.L(E);
},BlR:function(E){var B;if(E===this.ACY)return;this.ACY=E;this.Bg([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},BmS:function(E){var B;if(E===this.AGI)return;this.AGI=E;
this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ani:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OD))return;this.OD=E;this.Bg([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASp:function(E){var B;if(E===this.Pp)return;this.
Pp=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASq:function(E){var B;if(E<0)
E=0;this.Aqi=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DP;this.H(EY);this.Background.A3(0x3F);this.Background.H(Hi);this.
Background.L(0xFF000000);this.J(this.Background,0);this.AqW=A.aaL(C.AQV);this.Pp=
A.aaL(C.AB6);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();
A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqW)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ABL={Alm:null,AzH:
null,AY:0,ADH:10,X5:function(){this.Alm=null;this.AzH=null;this.AY=0;},ApY:function(
aX,aY){var Jo=null;if((this.ADH>0)&&(this.AY===this.ADH)){Jo=this.Alm;this.Alm=Jo.
Ah;Jo.Ah=null;this.AY=this.AY-1;}else Jo=A._NewObject(C.A5l,0);Jo.PW=aX;Jo.PX=aY;
if(!this.Alm){this.Alm=Jo;this.AzH=Jo;this.AY=1;}else{this.AzH.Ah=Jo;this.AzH=Jo;
this.AY=this.AY+1;}},Awn:function(E){if(E<1)E=1;this.ADH=E;},_Init:function(aArg
){this.__proto__=C.ABL;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Alm)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AzH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.AQV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.Sx={Wu:null,Af9:null,N2:null,AFH:270,AF2:1,Ka:function(CZ,aClip,aOffset
,Ch,aBlend){var U_;var Bci;U_=0;Bci=this.AFH;while(U_<0)U_=U_+360;while(U_>=360)
U_=U_-360;var Rt=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Ru=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.O.Ka.call(this,CZ,aClip,aOffset,Ch,aBlend);if(!!this.
N2&&(this.N2.AGw>0)){var G_=this.N2.KX;while(!!G_){var Fu=(G_.A5/this.N2.AGw)*Bci;
this.Bco(CZ,aClip,Rt,Ru,U_,Fu,this.AF2,0,G_.AQ,Ch,aBlend);U_=U_+Fu;if(U_>=360)U_=
U_-360;G_=G_.Ah;}}else this.Bco(CZ,aClip,Rt,Ru,U_,this.AFH,this.AF2,0,0xFF800000
,Ch,aBlend);},Bmv:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AFH)return;
this.AFH=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmG:function(E){var B;if(
E===this.Wu)return;this.Wu=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmF:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AF2)return;this.AF2=E;this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bco:function(CZ,aClip,aX,aY,aStartAngle
,W3,Ak2,A0j,aColor,Ch,aBlend){var B;var Jx;var Jp;var Af3;var Af4;var Af5;var Af6;
var BeO;var BeP;var AlJ;var AlK;var Ly;var B4=aColor;var J6=(((Ch+1)*this.G0)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(J6<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*J6)>>8)&0xFF)<<24);if(!this.Wu)return;var BX=this.Wu.FrameSize[0];var BJ=
this.Wu.FrameSize[1];var IP=0;if(W3>=360){aStartAngle=0;W3=360;}if(A0j>0){var Bck=
aStartAngle+(W3/2);Jx=Math.sin(Bck*A.k$);Jp=Math.cos(Bck*A.k$);aX=aX+((A0j*Jx)|0
);aY=aY-((A0j*Jp)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IP=IP+90;
}if(!this.Af9||!A.aaX(this.Af9.FrameSize,this.Wu.FrameSize)){this.Af9=A._NewObject(
A.Graphics.Canvas,0);this.Af9.Arp(this.Wu.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
W3)<90)){Jx=Math.sin(W3*A.k$);Jp=Math.cos(W3*A.k$);Af3=(-BX*Jp)+(BJ*Jx);Af4=(-BJ
*Jp)-(BX*Jx);Af5=BJ*Jx;Af6=-BJ*Jp;AlJ=-BX*Jp;AlK=-BX*Jx;this.Af9.AuT([0,0,BX,BJ]
,[0,0,this.Af9.FrameSize[0],this.Af9.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Af9.AhD([0,0,BX,BJ],this.Wu,0,Af3,Af4+BJ,1,Af5,Af6+BJ,1,
0,BJ,1,AlJ,AlK+BJ,1,[0,0,BX,BJ],B4,B4,B4,B4,true,true);Jx=Math.sin((aStartAngle+
IP)*A.k$)*Ak2;Jp=Math.cos((aStartAngle+IP)*A.k$)*Ak2;Af3=BJ*Jx;Af4=-BJ*Jp;Af5=(BX
*Jp)+(BJ*Jx);Af6=(-BJ*Jp)+(BX*Jx);BeO=BX*Jp;BeP=BX*Jx;CZ.AhD(aClip,this.Af9,0,Af3+
aX,Af4+aY,1,Af5+aX,Af6+aY,1,BeO+aX,BeP+aY,1,aX,aY,1,[0,0,BX,BJ],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){Jx=Math.sin(((90+IP)+
aStartAngle)*A.k$)*Ak2;Jp=Math.cos(((90+IP)+aStartAngle)*A.k$)*Ak2;Af3=(-BX*Jp)+(
BJ*Jx);Af4=(-BJ*Jp)-(BX*Jx);Af5=BJ*Jx;Af6=-BJ*Jp;AlJ=-BX*Jp;AlK=-BX*Jx;if(!IP)Ly=[
aX,-10000,10000,aY];else if(IP===90)Ly=[aX,aY,10000,10000];else if(IP===180)Ly=[-
10000,aY,aX,10000];else Ly=[-10000,-10000,aX,aY];CZ.AhD(A.lb(aClip,Ly),this.Wu,0
,Af3+aX,Af4+aY,1,Af5+aX,Af6+aY,1,aX,aY,1,AlJ+aX,AlK+aY,1,[0,0,BX,BJ],B4,B4,B4,B4
,aBlend,true);IP=IP+90;if(IP>=360)IP=IP-360;W3=W3-(90-aStartAngle);}while(W3>=90
){Jx=Math.sin((90+IP)*A.k$)*Ak2;Jp=Math.cos((90+IP)*A.k$)*Ak2;Af3=(-BX*Jp)+(BJ*Jx
);Af4=(-BJ*Jp)-(BX*Jx);Af5=BJ*Jx;Af6=-BJ*Jp;AlJ=-BX*Jp;AlK=-BX*Jx;if(!IP)Ly=[aX,-
10000,10000,aY];else if(IP===90)Ly=[aX,aY,10000,10000];else if(IP===180)Ly=[-10000
,aY,aX,10000];else Ly=[-10000,-10000,aX,aY];CZ.AhD(A.lb(aClip,Ly),this.Wu,0,Af3+
aX,Af4+aY,1,Af5+aX,Af6+aY,1,aX,aY,1,AlJ+aX,AlK+aY,1,[0,0,BX,BJ],B4,B4,B4,B4,aBlend
,true);IP=IP+90;if(IP>=360)IP=IP-360;W3=W3-90;}Jx=Math.sin((W3+IP)*A.k$)*Ak2;Jp=
Math.cos((W3+IP)*A.k$)*Ak2;Af3=(-BX*Jp)+(BJ*Jx);Af4=(-BJ*Jp)-(BX*Jx);Af5=BJ*Jx;Af6=-
BJ*Jp;AlJ=-BX*Jp;AlK=-BX*Jx;if(!IP)Ly=[aX,-10000,10000,aY];else if(IP===90)Ly=[aX
,aY,10000,10000];else if(IP===180)Ly=[-10000,aY,aX,10000];else Ly=[-10000,-10000
,aX,aY];CZ.AhD(A.lb(aClip,Ly),this.Wu,0,Af3+aX,Af4+aY,1,Af5+aX,Af6+aY,1,aX,aY,1,
AlJ+aX,AlK+aY,1,[0,0,BX,BJ],B4,B4,B4,B4,aBlend,true);}},AbU:function(E){var B;this.
N2=E;this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.Sx;this.H(I7);this.Wu=A.aaL(C.
ATh);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Wu)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Af9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.ATK={KX:null,MS:null,AY:10,AGw:0,Ot:function(A6,aColor){var G_;
G_=A._NewObject(C.Record,0);G_.A5=A6;G_.AQ=aColor;if(!this.KX){this.KX=G_;this.MS=
G_;this.AY=1;}else{this.MS.Ah=G_;this.MS=G_;this.AY=this.AY+1;}this.AGw=this.AGw+
A6;},_Init:function(aArg){this.__proto__=C.ATK;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.AB6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DP.__proto__=A.Core.O;C.Sx.__proto__=A.Core.O;};C._ReInit=function(
){};C.DE=function(D){var B;if((B=C.AQV[0]._this)&&(B._cycle!=D))B._Done(C.AQV[0].
_this=null);if((B=C.ATh[0]._this)&&(B._cycle!=D))B._Done(C.ATh[0]._this=null);if((
B=C.ATi[0]._this)&&(B._cycle!=D))B._Done(C.ATi[0]._this=null);if((B=C.AB6[0]._this
)&&(B._cycle!=D))B._Done(C.AB6[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */