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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acu)throw new Error("The unit file 'Charts.js' included twice!");index.
acu=(function(){var A=index;var C={};
var Ca=[10,10];var BD=[80,50];var EW=[0,0,360,240];var Hh=[0,0,370,270];var I8=[0
,0,260,240];
C.A4J={Ag:null,PR:0,PT:0,_Init:function(aArg){this.__proto__=C.A4J;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DL={EP:null,AqK:null,Pj:null,Background:null,AqL:0xFFFFFFFF,AqM:3,Amj:0xFFFFFFFF
,Amk:0,AaM:A.wf,ArD:Ca,A37:0xFF000000,ACJ:0xFF6E0E0C,AGn:0xFF6E0E0C,Ox:BD,Ap_:0,
J9:function(CV,aClip,aOffset,Cg,aBlend){var B;var Xl=0;var Xm=0;var Az4=0;var Az5=
0;var Rn=this.M[0]+aOffset[0];var Ro=this.M[1]+aOffset[1];var AoG=this.Amj;var Ao4=
this.AqL;var Ao0=this.ACJ;var ApI=this.AGn;var Alp=this.AqM/2;var Rm=this.Amk/2;
var J3=(((Cg+1)*this.GY)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(J3<256){AoG=(
AoG&0x00FFFFFF)|((((((AoG>>24)&0xFF)*J3)>>8)&0xFF)<<24);Ao4=(Ao4&0x00FFFFFF)|((((((
Ao4>>24)&0xFF)*J3)>>8)&0xFF)<<24);Ao0=(Ao0&0x00FFFFFF)|((((((Ao0>>24)&0xFF)*J3)>>
8)&0xFF)<<24);ApI=(ApI&0x00FFFFFF)|((((((ApI>>24)&0xFF)*J3)>>8)&0xFF)<<24);}A.Core.
O.J9.call(this,CV,aClip,aOffset,Cg,aBlend);if(((this.ACJ>>24)&0xFF)>0){var Da;for(
Da=this.AaM[1]+Ro;Da>=Ro;Da=Da-this.Ox[1])CV.Aut(aClip,[Rn,Da],[Rn+((B=this.M)[2
]-B[0]),Da],Ao0,Ao0,aBlend);for(Da=(this.AaM[1]+Ro)+this.Ox[1];Da<(Ro+((B=this.M
)[3]-B[1]));Da=Da+this.Ox[1])CV.Aut(aClip,[Rn,Da],[Rn+((B=this.M)[2]-B[0]),Da],Ao0
,Ao0,aBlend);}if(((this.AGn>>24)&0xFF)>0){var Eg;for(Eg=this.AaM[0]+Rn;Eg>=Rn;Eg=
Eg-this.Ox[0])CV.Aut(aClip,[Eg,Ro],[Eg,Ro+((B=this.M)[3]-B[1])],ApI,ApI,aBlend);
for(Eg=(this.AaM[0]+Rn)+this.Ox[0];Eg<(Rn+((B=this.M)[2]-B[0]));Eg=Eg+this.Ox[0]
)CV.Aut(aClip,[Eg,Ro],[Eg,Ro+((B=this.M)[3]-B[1])],ApI,ApI,aBlend);}if(!this.EP)
return;var Jp=this.EP.Alf;if(!!Jp){Xl=(Rn+this.AaM[0])+(Jp.PR*this.ArD[0]);Xm=(Ro+
this.AaM[1])+(Jp.PT*this.ArD[1]);Jp=Jp.Ag;}while(!!Jp){Az4=(Rn+this.AaM[0])+(Jp.
PR*this.ArD[0]);Az5=(Ro+this.AaM[1])+(Jp.PT*this.ArD[1]);var JW=Az4-Xl;var JX=Az5-
Xm;var IN=Math.sqrt((JW*JW)+(JX*JX));if(!!IN){JW=JW/IN;JX=JX/IN;}if(!!this.AqK)CV.
Ahu(aClip,this.AqK,0,Xl-(JX*Alp),Xm+(JW*Alp),1,Xl+(JX*Alp),Xm-(JW*Alp),1,Az4+(JX
*Alp),Az5-(JW*Alp),1,Az4-(JX*Alp),Az5+(JW*Alp),1,[0,0,this.AqK.FrameSize[0],this.
AqK.FrameSize[1]],Ao4,Ao4,Ao4,Ao4,aBlend,true);if((this.Amk>0)&&!!this.Pj)CV.Ahu(
aClip,this.Pj,this.Ap_,Xl-Rm,Xm-Rm,1,Xl+Rm,Xm-Rm,1,Xl+Rm,Xm+Rm,1,Xl-Rm,Xm+Rm,1,[
0,0,this.Pj.FrameSize[0],this.Pj.FrameSize[1]],AoG,AoG,AoG,AoG,aBlend,true);Xl=Az4;
Xm=Az5;Jp=Jp.Ag;}if((this.Amk>0)&&!!this.Pj)CV.Ahu(aClip,this.Pj,this.Ap_,Xl-Rm,
Xm-Rm,1,Xl+Rm,Xm-Rm,1,Xl+Rm,Xm+Rm,1,Xl-Rm,Xm+Rm,1,[0,0,this.Pj.FrameSize[0],this.
Pj.FrameSize[1]],this.Amj,this.Amj,this.Amj,this.Amj,aBlend,true);},Aew:function(
E){var B;this.EP=E;this.Am();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASj:function(
E){var B;if(E===this.AqL)return;this.AqL=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ASk:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.AqM=E;this.Bd([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bks:function(E){var B;if(E===this.Amj)return;
this.Amj=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AR_:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.Amk=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bkm:
function(E){var B;if(A.aaX(E,this.AaM))return;this.AaM=E;this.Bd([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BlE:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.ArD))return;this.ArD=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bj5:function(E){if(E===this.A37)return;this.A37=E;this.Background.L(E);
},Bk1:function(E){var B;if(E===this.ACJ)return;this.ACJ=E;this.Bd([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},BlZ:function(E){var B;if(E===this.AGn)return;this.AGn=E;
this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Am$:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.Ox))return;this.Ox=E;this.Bd([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AR8:function(E){var B;if(E===this.Pj)return;this.
Pj=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AR9:function(E){var B;if(E<0)
E=0;this.Ap_=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);
this.__proto__=C.DL;this.H(EW);this.Background.AX(0x3F);this.Background.H(Hh);this.
Background.L(0xFF000000);this.J(this.Background,0);this.AqK=A.aaL(C.AQB);this.Pj=
A.aaL(C.ABT);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();
A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.EP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ABy={Alf:null,Azv:
null,AV:0,ADp:10,X0:function(){this.Alf=null;this.Azv=null;this.AV=0;},ApN:function(
aX,aY){var Jp=null;if((this.ADp>0)&&(this.AV===this.ADp)){Jp=this.Alf;this.Alf=Jp.
Ag;Jp.Ag=null;this.AV=this.AV-1;}else Jp=A._NewObject(C.A4J,0);Jp.PR=aX;Jp.PT=aY;
if(!this.Alf){this.Alf=Jp;this.Azv=Jp;this.AV=1;}else{this.Azv.Ag=Jp;this.Azv=Jp;
this.AV=this.AV+1;}},Av$:function(E){if(E<1)E=1;this.ADp=E;},_Init:function(aArg
){this.__proto__=C.ABy;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Alf)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Azv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.AQB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.St={Wp:null,AfY:null,NZ:null,AFm:270,AFH:1,J9:function(CV,aClip,aOffset
,Cg,aBlend){var U4;var Bbv;U4=0;Bbv=this.AFm;while(U4<0)U4=U4+360;while(U4>=360)
U4=U4-360;var Rn=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Ro=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.O.J9.call(this,CV,aClip,aOffset,Cg,aBlend);if(!!this.
NZ&&(this.NZ.AGb>0)){var G9=this.NZ.KT;while(!!G9){var Fp=(G9.A6/this.NZ.AGb)*Bbv;
this.BbB(CV,aClip,Rn,Ro,U4,Fp,this.AFH,0,G9.AQ,Cg,aBlend);U4=U4+Fp;if(U4>=360)U4=
U4-360;G9=G9.Ag;}}else this.BbB(CV,aClip,Rn,Ro,U4,this.AFm,this.AFH,0,0xFF800000
,Cg,aBlend);},BlD:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AFm)return;
this.AFm=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlN:function(E){var B;if(
E===this.Wp)return;this.Wp=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlM:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AFH)return;this.AFH=E;this.
Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BbB:function(CV,aClip,aX,aY,aStartAngle
,WX,AkV,AZJ,aColor,Cg,aBlend){var B;var Jy;var Jq;var AfT;var AfU;var AfV;var AfW;
var BdZ;var Bd0;var AlC;var AlD;var Lv;var B1=aColor;var J3=(((Cg+1)*this.GY)>>8
)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(J3<256)B1=(B1&0x00FFFFFF)|((((((B1>>24
)&0xFF)*J3)>>8)&0xFF)<<24);if(!this.Wp)return;var BU=this.Wp.FrameSize[0];var BI=
this.Wp.FrameSize[1];var IQ=0;if(WX>=360){aStartAngle=0;WX=360;}if(AZJ>0){var Bbx=
aStartAngle+(WX/2);Jy=Math.sin(Bbx*A.k$);Jq=Math.cos(Bbx*A.k$);aX=aX+((AZJ*Jy)|0
);aY=aY-((AZJ*Jq)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IQ=IQ+90;
}if(!this.AfY||!A.aaX(this.AfY.FrameSize,this.Wp.FrameSize)){this.AfY=A._NewObject(
A.Graphics.Canvas,0);this.AfY.Ard(this.Wp.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
WX)<90)){Jy=Math.sin(WX*A.k$);Jq=Math.cos(WX*A.k$);AfT=(-BU*Jq)+(BI*Jy);AfU=(-BI
*Jq)-(BU*Jy);AfV=BI*Jy;AfW=-BI*Jq;AlC=-BU*Jq;AlD=-BU*Jy;this.AfY.AuI([0,0,BU,BI]
,[0,0,this.AfY.FrameSize[0],this.AfY.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.AfY.Ahu([0,0,BU,BI],this.Wp,0,AfT,AfU+BI,1,AfV,AfW+BI,1,
0,BI,1,AlC,AlD+BI,1,[0,0,BU,BI],B1,B1,B1,B1,true,true);Jy=Math.sin((aStartAngle+
IQ)*A.k$)*AkV;Jq=Math.cos((aStartAngle+IQ)*A.k$)*AkV;AfT=BI*Jy;AfU=-BI*Jq;AfV=(BU
*Jq)+(BI*Jy);AfW=(-BI*Jq)+(BU*Jy);BdZ=BU*Jq;Bd0=BU*Jy;CV.Ahu(aClip,this.AfY,0,AfT+
aX,AfU+aY,1,AfV+aX,AfW+aY,1,BdZ+aX,Bd0+aY,1,aX,aY,1,[0,0,BU,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){Jy=Math.sin(((90+IQ)+
aStartAngle)*A.k$)*AkV;Jq=Math.cos(((90+IQ)+aStartAngle)*A.k$)*AkV;AfT=(-BU*Jq)+(
BI*Jy);AfU=(-BI*Jq)-(BU*Jy);AfV=BI*Jy;AfW=-BI*Jq;AlC=-BU*Jq;AlD=-BU*Jy;if(!IQ)Lv=[
aX,-10000,10000,aY];else if(IQ===90)Lv=[aX,aY,10000,10000];else if(IQ===180)Lv=[-
10000,aY,aX,10000];else Lv=[-10000,-10000,aX,aY];CV.Ahu(A.lb(aClip,Lv),this.Wp,0
,AfT+aX,AfU+aY,1,AfV+aX,AfW+aY,1,aX,aY,1,AlC+aX,AlD+aY,1,[0,0,BU,BI],B1,B1,B1,B1
,aBlend,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WX=WX-(90-aStartAngle);}while(WX>=90
){Jy=Math.sin((90+IQ)*A.k$)*AkV;Jq=Math.cos((90+IQ)*A.k$)*AkV;AfT=(-BU*Jq)+(BI*Jy
);AfU=(-BI*Jq)-(BU*Jy);AfV=BI*Jy;AfW=-BI*Jq;AlC=-BU*Jq;AlD=-BU*Jy;if(!IQ)Lv=[aX,-
10000,10000,aY];else if(IQ===90)Lv=[aX,aY,10000,10000];else if(IQ===180)Lv=[-10000
,aY,aX,10000];else Lv=[-10000,-10000,aX,aY];CV.Ahu(A.lb(aClip,Lv),this.Wp,0,AfT+
aX,AfU+aY,1,AfV+aX,AfW+aY,1,aX,aY,1,AlC+aX,AlD+aY,1,[0,0,BU,BI],B1,B1,B1,B1,aBlend
,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WX=WX-90;}Jy=Math.sin((WX+IQ)*A.k$)*AkV;Jq=
Math.cos((WX+IQ)*A.k$)*AkV;AfT=(-BU*Jq)+(BI*Jy);AfU=(-BI*Jq)-(BU*Jy);AfV=BI*Jy;AfW=-
BI*Jq;AlC=-BU*Jq;AlD=-BU*Jy;if(!IQ)Lv=[aX,-10000,10000,aY];else if(IQ===90)Lv=[aX
,aY,10000,10000];else if(IQ===180)Lv=[-10000,aY,aX,10000];else Lv=[-10000,-10000
,aX,aY];CV.Ahu(A.lb(aClip,Lv),this.Wp,0,AfT+aX,AfU+aY,1,AfV+aX,AfW+aY,1,aX,aY,1,
AlC+aX,AlD+aY,1,[0,0,BU,BI],B1,B1,B1,B1,aBlend,true);}},AbN:function(E){var B;this.
NZ=E;this.Am();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.St;this.H(I8);this.Wp=A.aaL(C.
ASU);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Wp)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.NZ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ASU={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ag:null,A6:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.ATg={KT:null,MQ:null,AV:10,AGb:0,Oo:function(A2,aColor){var G9;
G9=A._NewObject(C.Record,0);G9.A6=A2;G9.AQ=aColor;if(!this.KT){this.KT=G9;this.MQ=
G9;this.AV=1;}else{this.MQ.Ag=G9;this.MQ=G9;this.AV=this.AV+1;}this.AGb=this.AGb+
A2;},_Init:function(aArg){this.__proto__=C.ATg;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ASV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ABT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DL.__proto__=A.Core.O;C.St.__proto__=A.Core.O;};C._ReInit=function(
){};C.Dz=function(D){var B;if((B=C.AQB[0]._this)&&(B._cycle!=D))B._Done(C.AQB[0].
_this=null);if((B=C.ASU[0]._this)&&(B._cycle!=D))B._Done(C.ASU[0]._this=null);if((
B=C.ASV[0]._this)&&(B._cycle!=D))B._Done(C.ASV[0]._this=null);if((B=C.ABT[0]._this
)&&(B._cycle!=D))B._Done(C.ABT[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */