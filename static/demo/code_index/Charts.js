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
var B4=[10,10];var BI=[80,50];var EH=[0,0,360,240];var Gv=[0,0,370,270];var I5=[0
,0,260,240];
C.AZ3={Af:null,Tk:0,Tl:0,_Init:function(aArg){this.__proto__=C.AZ3;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.Dv={EC:null,Aow:null,OI:null,Background:null,Aox:0xFFFFFFFF,Aoy:3,AkB:0xFFFFFFFF
,AkC:0,Zj:A.vw,Apn:B4,AZB:0xFF000000,AzP:0xFF6E0E0C,ADk:0xFF6E0E0C,NW:BI,AnZ:0,JJ:
function(CL,aClip,aOffset,B6,aBlend){var B;var VV=0;var VX=0;var Axh=0;var Axi=0;
var Qv=this.M[0]+aOffset[0];var Qw=this.M[1]+aOffset[1];var AmD=this.AkB;var AmZ=
this.Aox;var AmW=this.AzP;var AnD=this.ADk;var AjI=this.Aoy/2;var Qu=this.AkC/2;
var JF=(((B6+1)*this.Gq)>>8)+1;aBlend=aBlend&&((this.S&0x2)===0x2);if(JF<256){AmD=(
AmD&0x00FFFFFF)|((((((AmD>>24)&0xFF)*JF)>>8)&0xFF)<<24);AmZ=(AmZ&0x00FFFFFF)|((((((
AmZ>>24)&0xFF)*JF)>>8)&0xFF)<<24);AmW=(AmW&0x00FFFFFF)|((((((AmW>>24)&0xFF)*JF)>>
8)&0xFF)<<24);AnD=(AnD&0x00FFFFFF)|((((((AnD>>24)&0xFF)*JF)>>8)&0xFF)<<24);}A.Core.
O.JJ.call(this,CL,aClip,aOffset,B6,aBlend);if(((this.AzP>>24)&0xFF)>0){var C9;for(
C9=this.Zj[1]+Qw;C9>=Qw;C9=C9-this.NW[1])CL.Ar3(aClip,[Qv,C9],[Qv+((B=this.M)[2]-
B[0]),C9],AmW,AmW,aBlend);for(C9=(this.Zj[1]+Qw)+this.NW[1];C9<(Qw+((B=this.M)[3
]-B[1]));C9=C9+this.NW[1])CL.Ar3(aClip,[Qv,C9],[Qv+((B=this.M)[2]-B[0]),C9],AmW,
AmW,aBlend);}if(((this.ADk>>24)&0xFF)>0){var FA;for(FA=this.Zj[0]+Qv;FA>=Qv;FA=FA-
this.NW[0])CL.Ar3(aClip,[FA,Qw],[FA,Qw+((B=this.M)[3]-B[1])],AnD,AnD,aBlend);for(
FA=(this.Zj[0]+Qv)+this.NW[0];FA<(Qv+((B=this.M)[2]-B[0]));FA=FA+this.NW[0])CL.Ar3(
aClip,[FA,Qw],[FA,Qw+((B=this.M)[3]-B[1])],AnD,AnD,aBlend);}if(!this.EC)return;var
I7=this.EC.Ajy;if(!!I7){VV=(Qv+this.Zj[0])+(I7.Tk*this.Apn[0]);VX=(Qw+this.Zj[1]
)+(I7.Tl*this.Apn[1]);I7=I7.Af;}while(!!I7){Axh=(Qv+this.Zj[0])+(I7.Tk*this.Apn[
0]);Axi=(Qw+this.Zj[1])+(I7.Tl*this.Apn[1]);var Jx=Axh-VV;var Jy=Axi-VX;var It=Math.
sqrt((Jx*Jx)+(Jy*Jy));if(!!It){Jx=Jx/It;Jy=Jy/It;}if(!!this.Aow)CL.AfX(aClip,this.
Aow,0,VV-(Jy*AjI),VX+(Jx*AjI),1,VV+(Jy*AjI),VX-(Jx*AjI),1,Axh+(Jy*AjI),Axi-(Jx*AjI
),1,Axh-(Jy*AjI),Axi+(Jx*AjI),1,[0,0,this.Aow.FrameSize[0],this.Aow.FrameSize[1]
],AmZ,AmZ,AmZ,AmZ,aBlend,true);if((this.AkC>0)&&!!this.OI)CL.AfX(aClip,this.OI,this.
AnZ,VV-Qu,VX-Qu,1,VV+Qu,VX-Qu,1,VV+Qu,VX+Qu,1,VV-Qu,VX+Qu,1,[0,0,this.OI.FrameSize[
0],this.OI.FrameSize[1]],AmD,AmD,AmD,AmD,aBlend,true);VV=Axh;VX=Axi;I7=I7.Af;}if((
this.AkC>0)&&!!this.OI)CL.AfX(aClip,this.OI,this.AnZ,VV-Qu,VX-Qu,1,VV+Qu,VX-Qu,1
,VV+Qu,VX+Qu,1,VV-Qu,VX+Qu,1,[0,0,this.OI.FrameSize[0],this.OI.FrameSize[1]],this.
AkB,this.AkB,this.AkB,this.AkB,aBlend,true);},AcU:function(E){var B;this.EC=E;this.
Al();this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOz:function(E){var B;if(E===
this.Aox)return;this.Aox=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOA:function(
E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Aoy=E;this.Bc([0,0,(B=this.M)[2]-B[0],
B[3]-B[1]]);},Bfn:function(E){var B;if(E===this.AkB)return;this.AkB=E;this.Bc([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOn:function(E){var B;if(E<1)E=0;if(E>25)E=25;
this.AkC=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bfi:function(E){var B;if(
A.z8(E,this.Zj))return;this.Zj=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bgz:
function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0],1];if(A.z8(E,this.Apn))return;
this.Apn=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Be4:function(E){if(E===
this.AZB)return;this.AZB=E;this.Background.L(E);},BfX:function(E){var B;if(E===this.
AzP)return;this.AzP=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BgT:function(
E){var B;if(E===this.ADk)return;this.ADk=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Alk:function(E){var B;if(E[0]<10)E=[10,E[1]];if(E[1]<10)E=[E[0],10];if(
A.z8(E,this.NW))return;this.NW=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AOl:
function(E){var B;if(E===this.OI)return;this.OI=E;this.Bc([0,0,(B=this.M)[2]-B[0
],B[3]-B[1]]);},AOm:function(E){var B;if(E<0)E=0;this.AnZ=E;this.Bc([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.
AH._Init.call(this.Background={I:this},0);this.__proto__=C.Dv;this.G(EH);this.Background.
AW(0x3F);this.Background.G(Gv);this.Background.L(0xFF000000);this.J(this.Background
,0);this.Aow=A.zW(C.AM3);this.OI=A.zW(C.Ay2);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;A.
Core.O._Mark.call(this,D);if((B=this.EC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aow)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.OI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"
};C.AyJ={Ajy:null,AwP:null,AN:0,AAu:10,Ww:function(){this.Ajy=null;this.AwP=null;
this.AN=0;},AnI:function(aX,aY){var I7=null;if((this.AAu>0)&&(this.AN===this.AAu
)){I7=this.Ajy;this.Ajy=I7.Af;I7.Af=null;this.AN=this.AN-1;}else I7=A._NewObject(
C.AZ3,0);I7.Tk=aX;I7.Tl=aY;if(!this.Ajy){this.Ajy=I7;this.AwP=I7;this.AN=1;}else{
this.AwP.Af=I7;this.AwP=I7;this.AN=this.AN+1;}},AtG:function(E){if(E<1)E=1;this.
AAu=E;},_Init:function(aArg){this.__proto__=C.AyJ;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Ajy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AwP)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::CoordList"};C.AM3={_class:function(){return A.abj.Ai;},
0:{FileName:"./res_index/ChartsLine7x100.png",Format:A.jt,NoOfFrames:1,FrameSize:[
7,100],FrameDelay:0,_this:null}};C.Rx={UY:null,Aen:null,Ni:null,ACh:270,ACB:1,JJ:
function(CL,aClip,aOffset,B6,aBlend){var TN;var A8g;TN=0;A8g=this.ACh;while(TN<0
)TN=TN+360;while(TN>=360)TN=TN-360;var Qv=(((this.M[2]+this.M[0])/2)|0)+aOffset[
0];var Qw=(((this.M[3]+this.M[1])/2)|0)+aOffset[1];A.Core.O.JJ.call(this,CL,aClip
,aOffset,B6,aBlend);if(!!this.Ni&&(this.Ni.AC$>0)){var GB=this.Ni.Kh;while(!!GB){
var E7=(GB.AY/this.Ni.AC$)*A8g;this.A8m(CL,aClip,Qv,Qw,TN,E7,this.ACB,0,GB.AM,B6
,aBlend);TN=TN+E7;if(TN>=360)TN=TN-360;GB=GB.Af;}}else this.A8m(CL,aClip,Qv,Qw,TN
,this.ACh,this.ACB,0,0xFF800000,B6,aBlend);},Bgy:function(E){var B;if(E<0)E=0;if(
E>360)E=360;if(E===this.ACh)return;this.ACh=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[
3]-B[1]]);},BgI:function(E){var B;if(E===this.UY)return;this.UY=E;this.Bc([0,0,(
B=this.M)[2]-B[0],B[3]-B[1]]);},BgG:function(E){var B;if(E<0.01)E=0.01;if(E>1.1)
E=1.1;if(E===this.ACB)return;this.ACB=E;this.Bc([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);},A8m:function(CL,aClip,aX,aY,aStartAngle,Vx,Ajb,AVn,aColor,B6,aBlend){var B;
var Jd;var I8;var Aei;var Aej;var Aek;var Ael;var A_D;var A_E;var AjX;var AjY;var
L8;var BF=aColor;var JF=(((B6+1)*this.Gq)>>8)+1;aBlend=aBlend&&((this.S&0x2)===0x2
);if(JF<256)BF=(BF&0x00FFFFFF)|((((((BF>>24)&0xFF)*JF)>>8)&0xFF)<<24);if(!this.UY
)return;var BP=this.UY.FrameSize[0];var BG=this.UY.FrameSize[1];var Iw=0;if(Vx>=
360){aStartAngle=0;Vx=360;}if(AVn>0){var A8i=aStartAngle+(Vx/2);Jd=Math.sin(A8i*
A.kw);I8=Math.cos(A8i*A.kw);aX=aX+((AVn*Jd)|0);aY=aY-((AVn*I8)|0);}while(aStartAngle>=
90){aStartAngle=aStartAngle-90;Iw=Iw+90;}if(!this.Aen||!A.z8(this.Aen.FrameSize,
this.UY.FrameSize)){this.Aen=A._NewObject(A.Graphics.Canvas,0);this.Aen.Ao2(this.
UY.FrameSize);}if((aStartAngle>0)&&((aStartAngle+Vx)<90)){Jd=Math.sin(Vx*A.kw);I8=
Math.cos(Vx*A.kw);Aei=(-BP*I8)+(BG*Jd);Aej=(-BG*I8)-(BP*Jd);Aek=BG*Jd;Ael=-BG*I8;
AjX=-BP*I8;AjY=-BP*Jd;this.Aen.Asf([0,0,BP,BG],[0,0,this.Aen.FrameSize[0],this.Aen.
FrameSize[1]],0x00000000,0x00000000,0x00000000,0x00000000,false);this.Aen.AfX([0
,0,BP,BG],this.UY,0,Aei,Aej+BG,1,Aek,Ael+BG,1,0,BG,1,AjX,AjY+BG,1,[0,0,BP,BG],BF
,BF,BF,BF,true,true);Jd=Math.sin((aStartAngle+Iw)*A.kw)*Ajb;I8=Math.cos((aStartAngle+
Iw)*A.kw)*Ajb;Aei=BG*Jd;Aej=-BG*I8;Aek=(BP*I8)+(BG*Jd);Ael=(-BG*I8)+(BP*Jd);A_D=
BP*I8;A_E=BP*Jd;CL.AfX(aClip,this.Aen,0,Aei+aX,Aej+aY,1,Aek+aX,Ael+aY,1,A_D+aX,A_E+
aY,1,aX,aY,1,[0,0,BP,BG],0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,0xFFFFFFFF,aBlend,true
);}else{if(aStartAngle>0){Jd=Math.sin(((90+Iw)+aStartAngle)*A.kw)*Ajb;I8=Math.cos(((
90+Iw)+aStartAngle)*A.kw)*Ajb;Aei=(-BP*I8)+(BG*Jd);Aej=(-BG*I8)-(BP*Jd);Aek=BG*Jd;
Ael=-BG*I8;AjX=-BP*I8;AjY=-BP*Jd;if(!Iw)L8=[aX,-10000,10000,aY];else if(Iw===90)
L8=[aX,aY,10000,10000];else if(Iw===180)L8=[-10000,aY,aX,10000];else L8=[-10000,-
10000,aX,aY];CL.AfX(A.kz(aClip,L8),this.UY,0,Aei+aX,Aej+aY,1,Aek+aX,Ael+aY,1,aX,
aY,1,AjX+aX,AjY+aY,1,[0,0,BP,BG],BF,BF,BF,BF,aBlend,true);Iw=Iw+90;if(Iw>=360)Iw=
Iw-360;Vx=Vx-(90-aStartAngle);}while(Vx>=90){Jd=Math.sin((90+Iw)*A.kw)*Ajb;I8=Math.
cos((90+Iw)*A.kw)*Ajb;Aei=(-BP*I8)+(BG*Jd);Aej=(-BG*I8)-(BP*Jd);Aek=BG*Jd;Ael=-BG
*I8;AjX=-BP*I8;AjY=-BP*Jd;if(!Iw)L8=[aX,-10000,10000,aY];else if(Iw===90)L8=[aX,
aY,10000,10000];else if(Iw===180)L8=[-10000,aY,aX,10000];else L8=[-10000,-10000,
aX,aY];CL.AfX(A.kz(aClip,L8),this.UY,0,Aei+aX,Aej+aY,1,Aek+aX,Ael+aY,1,aX,aY,1,AjX+
aX,AjY+aY,1,[0,0,BP,BG],BF,BF,BF,BF,aBlend,true);Iw=Iw+90;if(Iw>=360)Iw=Iw-360;Vx=
Vx-90;}Jd=Math.sin((Vx+Iw)*A.kw)*Ajb;I8=Math.cos((Vx+Iw)*A.kw)*Ajb;Aei=(-BP*I8)+(
BG*Jd);Aej=(-BG*I8)-(BP*Jd);Aek=BG*Jd;Ael=-BG*I8;AjX=-BP*I8;AjY=-BP*Jd;if(!Iw)L8=[
aX,-10000,10000,aY];else if(Iw===90)L8=[aX,aY,10000,10000];else if(Iw===180)L8=[-
10000,aY,aX,10000];else L8=[-10000,-10000,aX,aY];CL.AfX(A.kz(aClip,L8),this.UY,0
,Aei+aX,Aej+aY,1,Aek+aX,Ael+aY,1,aX,aY,1,AjX+aX,AjY+aY,1,[0,0,BP,BG],BF,BF,BF,BF
,aBlend,true);}},Aad:function(E){var B;this.Ni=E;this.Al();this.Bc([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.Rx;this.G(I5);this.UY=A.zW(C.AO7);},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.UY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aen)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ni)&&(B._cycle!=D))B._Mark(B.
_cycle=D);},_className:"Charts::PieChart"};C.AO7={_class:function(){return A.abj.
Ai;},0:{FileName:"./res_index/ChartsPie100_1.png",Format:A.jt,NoOfFrames:1,FrameSize:[
8,8],FrameDelay:0,_this:null}};C.Record={Af:null,AY:0,AM:0xFFFFFFFF,_Init:function(
aArg){this.__proto__=C.Record;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Charts::Record"};C.APq={Kh:null,Ma:null,AN:10,AC$:0,NP:function(
A2,aColor){var GB;GB=A._NewObject(C.Record,0);GB.AY=A2;GB.AM=aColor;if(!this.Kh){
this.Kh=GB;this.Ma=GB;this.AN=1;}else{this.Ma.Af=GB;this.Ma=GB;this.AN=this.AN+1;
}this.AC$=this.AC$+A2;},_Init:function(aArg){this.__proto__=C.APq;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Kh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,
_cycle:0,_observers:null,_className:"Charts::RecordList"};C.AO8={_class:function(
){return A.abj.Ai;},0:{FileName:"./res_index/ChartsPie100_3.png",Format:A.jt,NoOfFrames:
1,FrameSize:[100,100],FrameDelay:0,_this:null}};C.Ay2={_class:function(){return A.
abj.Ai;},0:{FileName:"./res_index/ChartsDots8x8.png",Format:A.jt,NoOfFrames:10,FrameSize:[
8,8],FrameDelay:0,_this:null}};
C._Init=function(){C.Dv.__proto__=A.Core.O;C.Rx.__proto__=A.Core.O;};C._ReInit=function(
){};C.Dq=function(D){var B;if((B=C.AM3[0]._this)&&(B._cycle!=D))B._Done(C.AM3[0].
_this=null);if((B=C.AO7[0]._this)&&(B._cycle!=D))B._Done(C.AO7[0]._this=null);if((
B=C.AO8[0]._this)&&(B._cycle!=D))B._Done(C.AO8[0]._this=null);if((B=C.Ay2[0]._this
)&&(B._cycle!=D))B._Done(C.Ay2[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */