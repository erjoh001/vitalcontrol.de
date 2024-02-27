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
var Ca=[10,10];var BC=[80,50];var EW=[0,0,360,240];var Hh=[0,0,370,270];var I8=[0
,0,260,240];
C.A40={Ag:null,PT:0,PU:0,_Init:function(aArg){this.__proto__=C.A40;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DL={EP:null,AqP:null,Pm:null,Background:null,AqQ:0xFFFFFFFF,AqR:3,Amm:0xFFFFFFFF
,Amn:0,AaN:A.wf,ArI:Ca,A4m:0xFF000000,ACI:0xFF6E0E0C,AGu:0xFF6E0E0C,OA:BC,Aqb:0,
J_:function(CU,aClip,aOffset,Cf,aBlend){var B;var Xk=0;var Xl=0;var Az1=0;var Az2=
0;var Rn=this.M[0]+aOffset[0];var Ro=this.M[1]+aOffset[1];var AoJ=this.Amm;var Ao7=
this.AqQ;var Ao3=this.ACI;var ApL=this.AGu;var Alr=this.AqR/2;var Rm=this.Amn/2;
var J4=(((Cf+1)*this.GY)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(J4<256){AoJ=(
AoJ&0x00FFFFFF)|((((((AoJ>>24)&0xFF)*J4)>>8)&0xFF)<<24);Ao7=(Ao7&0x00FFFFFF)|((((((
Ao7>>24)&0xFF)*J4)>>8)&0xFF)<<24);Ao3=(Ao3&0x00FFFFFF)|((((((Ao3>>24)&0xFF)*J4)>>
8)&0xFF)<<24);ApL=(ApL&0x00FFFFFF)|((((((ApL>>24)&0xFF)*J4)>>8)&0xFF)<<24);}A.Core.
O.J_.call(this,CU,aClip,aOffset,Cf,aBlend);if(((this.ACI>>24)&0xFF)>0){var Da;for(
Da=this.AaN[1]+Ro;Da>=Ro;Da=Da-this.OA[1])CU.Aut(aClip,[Rn,Da],[Rn+((B=this.M)[2
]-B[0]),Da],Ao3,Ao3,aBlend);for(Da=(this.AaN[1]+Ro)+this.OA[1];Da<(Ro+((B=this.M
)[3]-B[1]));Da=Da+this.OA[1])CU.Aut(aClip,[Rn,Da],[Rn+((B=this.M)[2]-B[0]),Da],Ao3
,Ao3,aBlend);}if(((this.AGu>>24)&0xFF)>0){var Eg;for(Eg=this.AaN[0]+Rn;Eg>=Rn;Eg=
Eg-this.OA[0])CU.Aut(aClip,[Eg,Ro],[Eg,Ro+((B=this.M)[3]-B[1])],ApL,ApL,aBlend);
for(Eg=(this.AaN[0]+Rn)+this.OA[0];Eg<(Rn+((B=this.M)[2]-B[0]));Eg=Eg+this.OA[0]
)CU.Aut(aClip,[Eg,Ro],[Eg,Ro+((B=this.M)[3]-B[1])],ApL,ApL,aBlend);}if(!this.EP)
return;var Jp=this.EP.Alh;if(!!Jp){Xk=(Rn+this.AaN[0])+(Jp.PT*this.ArI[0]);Xl=(Ro+
this.AaN[1])+(Jp.PU*this.ArI[1]);Jp=Jp.Ag;}while(!!Jp){Az1=(Rn+this.AaN[0])+(Jp.
PT*this.ArI[0]);Az2=(Ro+this.AaN[1])+(Jp.PU*this.ArI[1]);var JW=Az1-Xk;var JX=Az2-
Xl;var IN=Math.sqrt((JW*JW)+(JX*JX));if(!!IN){JW=JW/IN;JX=JX/IN;}if(!!this.AqP)CU.
Ahx(aClip,this.AqP,0,Xk-(JX*Alr),Xl+(JW*Alr),1,Xk+(JX*Alr),Xl-(JW*Alr),1,Az1+(JX
*Alr),Az2-(JW*Alr),1,Az1-(JX*Alr),Az2+(JW*Alr),1,[0,0,this.AqP.FrameSize[0],this.
AqP.FrameSize[1]],Ao7,Ao7,Ao7,Ao7,aBlend,true);if((this.Amn>0)&&!!this.Pm)CU.Ahx(
aClip,this.Pm,this.Aqb,Xk-Rm,Xl-Rm,1,Xk+Rm,Xl-Rm,1,Xk+Rm,Xl+Rm,1,Xk-Rm,Xl+Rm,1,[
0,0,this.Pm.FrameSize[0],this.Pm.FrameSize[1]],AoJ,AoJ,AoJ,AoJ,aBlend,true);Xk=Az1;
Xl=Az2;Jp=Jp.Ag;}if((this.Amn>0)&&!!this.Pm)CU.Ahx(aClip,this.Pm,this.Aqb,Xk-Rm,
Xl-Rm,1,Xk+Rm,Xl-Rm,1,Xk+Rm,Xl+Rm,1,Xk-Rm,Xl+Rm,1,[0,0,this.Pm.FrameSize[0],this.
Pm.FrameSize[1]],this.Amm,this.Amm,this.Amm,this.Amm,aBlend,true);},AeA:function(
E){var B;this.EP=E;this.Am();this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASq:function(
E){var B;if(E===this.AqQ)return;this.AqQ=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ASr:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.AqR=E;this.Be([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BkU:function(E){var B;if(E===this.Amm)return;
this.Amm=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASf:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.Amn=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BkO:
function(E){var B;if(A.aaX(E,this.AaN))return;this.AaN=E;this.Be([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bl7:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.ArI))return;this.ArI=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bkv:function(E){if(E===this.A4m)return;this.A4m=E;this.Background.L(E);
},Blr:function(E){var B;if(E===this.ACI)return;this.ACI=E;this.Be([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bmq:function(E){var B;if(E===this.AGu)return;this.AGu=E;
this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anb:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OA))return;this.OA=E;this.Be([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASd:function(E){var B;if(E===this.Pm)return;this.
Pm=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASe:function(E){var B;if(E<0)
E=0;this.Aqb=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);
this.__proto__=C.DL;this.H(EW);this.Background.AY(0x3F);this.Background.H(Hh);this.
Background.L(0xFF000000);this.J(this.Background,0);this.AqP=A.aaL(C.AQJ);this.Pm=
A.aaL(C.ABR);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();
A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.EP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ABw={Alh:null,Azs:
null,AV:0,ADs:10,XZ:function(){this.Alh=null;this.Azs=null;this.AV=0;},ApR:function(
aX,aY){var Jp=null;if((this.ADs>0)&&(this.AV===this.ADs)){Jp=this.Alh;this.Alh=Jp.
Ag;Jp.Ag=null;this.AV=this.AV-1;}else Jp=A._NewObject(C.A40,0);Jp.PT=aX;Jp.PU=aY;
if(!this.Alh){this.Alh=Jp;this.Azs=Jp;this.AV=1;}else{this.Azs.Ag=Jp;this.Azs=Jp;
this.AV=this.AV+1;}},Awa:function(E){if(E<1)E=1;this.ADs=E;},_Init:function(aArg
){this.__proto__=C.ABw;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Alh)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Azs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.AQJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.Sr={Wo:null,Af2:null,N1:null,AFt:270,AFO:1,J_:function(CU,aClip,aOffset
,Cf,aBlend){var U3;var BbW;U3=0;BbW=this.AFt;while(U3<0)U3=U3+360;while(U3>=360)
U3=U3-360;var Rn=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Ro=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.O.J_.call(this,CU,aClip,aOffset,Cf,aBlend);if(!!this.
N1&&(this.N1.AGi>0)){var G9=this.N1.KU;while(!!G9){var Fo=(G9.A7/this.N1.AGi)*BbW;
this.Bb2(CU,aClip,Rn,Ro,U3,Fo,this.AFO,0,G9.AQ,Cf,aBlend);U3=U3+Fo;if(U3>=360)U3=
U3-360;G9=G9.Ag;}}else this.Bb2(CU,aClip,Rn,Ro,U3,this.AFt,this.AFO,0,0xFF800000
,Cf,aBlend);},Bl6:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AFt)return;
this.AFt=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bme:function(E){var B;if(
E===this.Wo)return;this.Wo=E;this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmd:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AFO)return;this.AFO=E;this.
Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bb2:function(CU,aClip,aX,aY,aStartAngle
,WX,AkX,AZZ,aColor,Cf,aBlend){var B;var Jy;var Jq;var AfW;var AfX;var AfY;var AfZ;
var Bep;var Beq;var AlE;var AlF;var Lw;var B2=aColor;var J4=(((Cf+1)*this.GY)>>8
)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(J4<256)B2=(B2&0x00FFFFFF)|((((((B2>>24
)&0xFF)*J4)>>8)&0xFF)<<24);if(!this.Wo)return;var BU=this.Wo.FrameSize[0];var BH=
this.Wo.FrameSize[1];var IQ=0;if(WX>=360){aStartAngle=0;WX=360;}if(AZZ>0){var BbY=
aStartAngle+(WX/2);Jy=Math.sin(BbY*A.k$);Jq=Math.cos(BbY*A.k$);aX=aX+((AZZ*Jy)|0
);aY=aY-((AZZ*Jq)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IQ=IQ+90;
}if(!this.Af2||!A.aaX(this.Af2.FrameSize,this.Wo.FrameSize)){this.Af2=A._NewObject(
A.Graphics.Canvas,0);this.Af2.Ari(this.Wo.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
WX)<90)){Jy=Math.sin(WX*A.k$);Jq=Math.cos(WX*A.k$);AfW=(-BU*Jq)+(BH*Jy);AfX=(-BH
*Jq)-(BU*Jy);AfY=BH*Jy;AfZ=-BH*Jq;AlE=-BU*Jq;AlF=-BU*Jy;this.Af2.AuI([0,0,BU,BH]
,[0,0,this.Af2.FrameSize[0],this.Af2.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Af2.Ahx([0,0,BU,BH],this.Wo,0,AfW,AfX+BH,1,AfY,AfZ+BH,1,
0,BH,1,AlE,AlF+BH,1,[0,0,BU,BH],B2,B2,B2,B2,true,true);Jy=Math.sin((aStartAngle+
IQ)*A.k$)*AkX;Jq=Math.cos((aStartAngle+IQ)*A.k$)*AkX;AfW=BH*Jy;AfX=-BH*Jq;AfY=(BU
*Jq)+(BH*Jy);AfZ=(-BH*Jq)+(BU*Jy);Bep=BU*Jq;Beq=BU*Jy;CU.Ahx(aClip,this.Af2,0,AfW+
aX,AfX+aY,1,AfY+aX,AfZ+aY,1,Bep+aX,Beq+aY,1,aX,aY,1,[0,0,BU,BH],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){Jy=Math.sin(((90+IQ)+
aStartAngle)*A.k$)*AkX;Jq=Math.cos(((90+IQ)+aStartAngle)*A.k$)*AkX;AfW=(-BU*Jq)+(
BH*Jy);AfX=(-BH*Jq)-(BU*Jy);AfY=BH*Jy;AfZ=-BH*Jq;AlE=-BU*Jq;AlF=-BU*Jy;if(!IQ)Lw=[
aX,-10000,10000,aY];else if(IQ===90)Lw=[aX,aY,10000,10000];else if(IQ===180)Lw=[-
10000,aY,aX,10000];else Lw=[-10000,-10000,aX,aY];CU.Ahx(A.lb(aClip,Lw),this.Wo,0
,AfW+aX,AfX+aY,1,AfY+aX,AfZ+aY,1,aX,aY,1,AlE+aX,AlF+aY,1,[0,0,BU,BH],B2,B2,B2,B2
,aBlend,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WX=WX-(90-aStartAngle);}while(WX>=90
){Jy=Math.sin((90+IQ)*A.k$)*AkX;Jq=Math.cos((90+IQ)*A.k$)*AkX;AfW=(-BU*Jq)+(BH*Jy
);AfX=(-BH*Jq)-(BU*Jy);AfY=BH*Jy;AfZ=-BH*Jq;AlE=-BU*Jq;AlF=-BU*Jy;if(!IQ)Lw=[aX,-
10000,10000,aY];else if(IQ===90)Lw=[aX,aY,10000,10000];else if(IQ===180)Lw=[-10000
,aY,aX,10000];else Lw=[-10000,-10000,aX,aY];CU.Ahx(A.lb(aClip,Lw),this.Wo,0,AfW+
aX,AfX+aY,1,AfY+aX,AfZ+aY,1,aX,aY,1,AlE+aX,AlF+aY,1,[0,0,BU,BH],B2,B2,B2,B2,aBlend
,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WX=WX-90;}Jy=Math.sin((WX+IQ)*A.k$)*AkX;Jq=
Math.cos((WX+IQ)*A.k$)*AkX;AfW=(-BU*Jq)+(BH*Jy);AfX=(-BH*Jq)-(BU*Jy);AfY=BH*Jy;AfZ=-
BH*Jq;AlE=-BU*Jq;AlF=-BU*Jy;if(!IQ)Lw=[aX,-10000,10000,aY];else if(IQ===90)Lw=[aX
,aY,10000,10000];else if(IQ===180)Lw=[-10000,aY,aX,10000];else Lw=[-10000,-10000
,aX,aY];CU.Ahx(A.lb(aClip,Lw),this.Wo,0,AfW+aX,AfX+aY,1,AfY+aX,AfZ+aY,1,aX,aY,1,
AlE+aX,AlF+aY,1,[0,0,BU,BH],B2,B2,B2,B2,aBlend,true);}},AbO:function(E){var B;this.
N1=E;this.Am();this.Be([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.Sr;this.H(I8);this.Wo=A.aaL(C.
AS6);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Wo)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Af2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N1)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AS6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ag:null,A7:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.ATx={KU:null,MP:null,AV:10,AGi:0,Oq:function(A3,aColor){var G9;
G9=A._NewObject(C.Record,0);G9.A7=A3;G9.AQ=aColor;if(!this.KU){this.KU=G9;this.MP=
G9;this.AV=1;}else{this.MP.Ag=G9;this.MP=G9;this.AV=this.AV+1;}this.AGi=this.AGi+
A3;},_Init:function(aArg){this.__proto__=C.ATx;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AS7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ABR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DL.__proto__=A.Core.O;C.Sr.__proto__=A.Core.O;};C._ReInit=function(
){};C.DB=function(D){var B;if((B=C.AQJ[0]._this)&&(B._cycle!=D))B._Done(C.AQJ[0].
_this=null);if((B=C.AS6[0]._this)&&(B._cycle!=D))B._Done(C.AS6[0]._this=null);if((
B=C.AS7[0]._this)&&(B._cycle!=D))B._Done(C.AS7[0]._this=null);if((B=C.ABR[0]._this
)&&(B._cycle!=D))B._Done(C.ABR[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */