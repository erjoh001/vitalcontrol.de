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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acv)throw new Error("The unit file 'Charts.js' included twice!");index.
acv=(function(){var A=index;var C={};
var Cf=[10,10];var BD=[80,50];var E8=[0,0,360,240];var Hs=[0,0,370,270];var I0=[0
,0,260,240];
C.A6j={Ah:null,P$:0,Qa:0,_Init:function(aArg){this.__proto__=C.A6j;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arv:null,PB:null,Background:null,Arw:0xFFFFFFFF,Arx:3,AmR:0xFFFFFFFF
,AmS:0,Abl:A.wf,Asq:Cf,A5S:0xFF000000,ADO:0xFF6E0E0C,AHu:0xFF6E0E0C,ON:BD,AqP:0,
Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;var XO=0;var XP=0;var AA3=0;var AA4=
0;var RJ=this.M[0]+aOffset[0];var RK=this.M[1]+aOffset[1];var Apd=this.AmR;var ApC=
this.Arw;var Apy=this.ADO;var Aqg=this.AHu;var AlZ=this.Arx/2;var RI=this.AmS/2;
var Kl=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kl<256){Apd=(
Apd&0x00FFFFFF)|((((((Apd>>24)&0xFF)*Kl)>>8)&0xFF)<<24);ApC=(ApC&0x00FFFFFF)|((((((
ApC>>24)&0xFF)*Kl)>>8)&0xFF)<<24);Apy=(Apy&0x00FFFFFF)|((((((Apy>>24)&0xFF)*Kl)>>
8)&0xFF)<<24);Aqg=(Aqg&0x00FFFFFF)|((((((Aqg>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}A.Core.
P.Ks.call(this,C0,aClip,aOffset,Ck,aBlend);if(((this.ADO>>24)&0xFF)>0){var Di;for(
Di=this.Abl[1]+RK;Di>=RK;Di=Di-this.ON[1])C0.Avc(aClip,[RJ,Di],[RJ+((B=this.M)[2
]-B[0]),Di],Apy,Apy,aBlend);for(Di=(this.Abl[1]+RK)+this.ON[1];Di<(RK+((B=this.M
)[3]-B[1]));Di=Di+this.ON[1])C0.Avc(aClip,[RJ,Di],[RJ+((B=this.M)[2]-B[0]),Di],Apy
,Apy,aBlend);}if(((this.AHu>>24)&0xFF)>0){var Ep;for(Ep=this.Abl[0]+RJ;Ep>=RJ;Ep=
Ep-this.ON[0])C0.Avc(aClip,[Ep,RK],[Ep,RK+((B=this.M)[3]-B[1])],Aqg,Aqg,aBlend);
for(Ep=(this.Abl[0]+RJ)+this.ON[0];Ep<(RJ+((B=this.M)[2]-B[0]));Ep=Ep+this.ON[0]
)C0.Avc(aClip,[Ep,RK],[Ep,RK+((B=this.M)[3]-B[1])],Aqg,Aqg,aBlend);}if(!this.EZ)
return;var JF=this.EZ.AlP;if(!!JF){XO=(RJ+this.Abl[0])+(JF.P$*this.Asq[0]);XP=(RK+
this.Abl[1])+(JF.Qa*this.Asq[1]);JF=JF.Ah;}while(!!JF){AA3=(RJ+this.Abl[0])+(JF.
P$*this.Asq[0]);AA4=(RK+this.Abl[1])+(JF.Qa*this.Asq[1]);var Ke=AA3-XO;var Kf=AA4-
XP;var I5=Math.sqrt((Ke*Ke)+(Kf*Kf));if(!!I5){Ke=Ke/I5;Kf=Kf/I5;}if(!!this.Arv)C0.
AhW(aClip,this.Arv,0,XO-(Kf*AlZ),XP+(Ke*AlZ),1,XO+(Kf*AlZ),XP-(Ke*AlZ),1,AA3+(Kf
*AlZ),AA4-(Ke*AlZ),1,AA3-(Kf*AlZ),AA4+(Ke*AlZ),1,[0,0,this.Arv.FrameSize[0],this.
Arv.FrameSize[1]],ApC,ApC,ApC,ApC,aBlend,true);if((this.AmS>0)&&!!this.PB)C0.AhW(
aClip,this.PB,this.AqP,XO-RI,XP-RI,1,XO+RI,XP-RI,1,XO+RI,XP+RI,1,XO-RI,XP+RI,1,[
0,0,this.PB.FrameSize[0],this.PB.FrameSize[1]],Apd,Apd,Apd,Apd,aBlend,true);XO=AA3;
XP=AA4;JF=JF.Ah;}if((this.AmS>0)&&!!this.PB)C0.AhW(aClip,this.PB,this.AqP,XO-RI,
XP-RI,1,XO+RI,XP-RI,1,XO+RI,XP+RI,1,XO-RI,XP+RI,1,[0,0,this.PB.FrameSize[0],this.
PB.FrameSize[1]],this.AmR,this.AmR,this.AmR,this.AmR,aBlend,true);},Ae3:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATC:function(
E){var B;if(E===this.Arw)return;this.Arw=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATD:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arx=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmN:function(E){var B;if(E===this.AmR)return;
this.AmR=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATr:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmS=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmJ:
function(E){var B;if(A.aaX(E,this.Abl))return;this.Abl=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bn3:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asq))return;this.Asq=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bmx:function(E){if(E===this.A5S)return;this.A5S=E;this.Background.L(E);
},Bnk:function(E){var B;if(E===this.ADO)return;this.ADO=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Boo:function(E){var B;if(E===this.AHu)return;this.AHu=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnG:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.ON))return;this.ON=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATp:function(E){var B;if(E===this.PB)return;this.
PB=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATq:function(E){var B;if(E<0)
E=0;this.AqP=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E8);this.Background.A1(0x3F);this.Background.H(Hs);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arv=A.aaL(C.ARR);this.PB=
A.aaL(C.ACV);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arv)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACC={AlP:null,AAs:
null,A0:0,AEx:10,Yq:function(){this.AlP=null;this.AAs=null;this.A0=0;},Aqn:function(
aX,aY){var JF=null;if((this.AEx>0)&&(this.A0===this.AEx)){JF=this.AlP;this.AlP=JF.
Ah;JF.Ah=null;this.A0=this.A0-1;}else JF=A._NewObject(C.A6j,0);JF.P$=aX;JF.Qa=aY;
if(!this.AlP){this.AlP=JF;this.AAs=JF;this.A0=1;}else{this.AAs.Ah=JF;this.AAs=JF;
this.A0=this.A0+1;}},Aw0:function(E){if(E<1)E=1;this.AEx=E;},_Init:function(aArg
){this.__proto__=C.ACC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARR={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SS={WZ:null,Agv:null,N$:null,AGt:270,AGN:1,Ks:function(C0,aClip,aOffset
,Ck,aBlend){var Vw;var Bdx;Vw=0;Bdx=this.AGt;while(Vw<0)Vw=Vw+360;while(Vw>=360)
Vw=Vw-360;var RJ=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RK=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Ks.call(this,C0,aClip,aOffset,Ck,aBlend);if(!!this.
N$&&(this.N$.AHj>0)){var Hi=this.N$.K5;while(!!Hi){var FF=(Hi.A5/this.N$.AHj)*Bdx;
this.BdD(C0,aClip,RJ,RK,Vw,FF,this.AGN,0,Hi.AQ,Ck,aBlend);Vw=Vw+FF;if(Vw>=360)Vw=
Vw-360;Hi=Hi.Ah;}}else this.BdD(C0,aClip,RJ,RK,Vw,this.AGt,this.AGN,0,0xFF800000
,Ck,aBlend);},Bn2:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGt)return;
this.AGt=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Boc:function(E){var B;if(
E===this.WZ)return;this.WZ=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Boa:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGN)return;this.AGN=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BdD:function(C0,aClip,aX,aY,aStartAngle
,Xr,Alt,A1m,aColor,Ck,aBlend){var B;var JO;var JG;var Ago;var Agp;var Agq;var Agr;
var Bf8;var Bf9;var Ama;var Amb;var LI;var B4=aColor;var Kl=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kl<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Kl)>>8)&0xFF)<<24);if(!this.WZ)return;var BZ=this.WZ.FrameSize[0];var BL=
this.WZ.FrameSize[1];var I7=0;if(Xr>=360){aStartAngle=0;Xr=360;}if(A1m>0){var Bdz=
aStartAngle+(Xr/2);JO=Math.sin(Bdz*A.k$);JG=Math.cos(Bdz*A.k$);aX=aX+((A1m*JO)|0
);aY=aY-((A1m*JG)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I7=I7+90;
}if(!this.Agv||!A.aaX(this.Agv.FrameSize,this.WZ.FrameSize)){this.Agv=A._NewObject(
A.Graphics.Canvas,0);this.Agv.ArZ(this.WZ.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xr)<90)){JO=Math.sin(Xr*A.k$);JG=Math.cos(Xr*A.k$);Ago=(-BZ*JG)+(BL*JO);Agp=(-BL
*JG)-(BZ*JO);Agq=BL*JO;Agr=-BL*JG;Ama=-BZ*JG;Amb=-BZ*JO;this.Agv.Avr([0,0,BZ,BL]
,[0,0,this.Agv.FrameSize[0],this.Agv.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agv.AhW([0,0,BZ,BL],this.WZ,0,Ago,Agp+BL,1,Agq,Agr+BL,1,
0,BL,1,Ama,Amb+BL,1,[0,0,BZ,BL],B4,B4,B4,B4,true,true);JO=Math.sin((aStartAngle+
I7)*A.k$)*Alt;JG=Math.cos((aStartAngle+I7)*A.k$)*Alt;Ago=BL*JO;Agp=-BL*JG;Agq=(BZ
*JG)+(BL*JO);Agr=(-BL*JG)+(BZ*JO);Bf8=BZ*JG;Bf9=BZ*JO;C0.AhW(aClip,this.Agv,0,Ago+
aX,Agp+aY,1,Agq+aX,Agr+aY,1,Bf8+aX,Bf9+aY,1,aX,aY,1,[0,0,BZ,BL],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JO=Math.sin(((90+I7)+
aStartAngle)*A.k$)*Alt;JG=Math.cos(((90+I7)+aStartAngle)*A.k$)*Alt;Ago=(-BZ*JG)+(
BL*JO);Agp=(-BL*JG)-(BZ*JO);Agq=BL*JO;Agr=-BL*JG;Ama=-BZ*JG;Amb=-BZ*JO;if(!I7)LI=[
aX,-10000,10000,aY];else if(I7===90)LI=[aX,aY,10000,10000];else if(I7===180)LI=[-
10000,aY,aX,10000];else LI=[-10000,-10000,aX,aY];C0.AhW(A.lb(aClip,LI),this.WZ,0
,Ago+aX,Agp+aY,1,Agq+aX,Agr+aY,1,aX,aY,1,Ama+aX,Amb+aY,1,[0,0,BZ,BL],B4,B4,B4,B4
,aBlend,true);I7=I7+90;if(I7>=360)I7=I7-360;Xr=Xr-(90-aStartAngle);}while(Xr>=90
){JO=Math.sin((90+I7)*A.k$)*Alt;JG=Math.cos((90+I7)*A.k$)*Alt;Ago=(-BZ*JG)+(BL*JO
);Agp=(-BL*JG)-(BZ*JO);Agq=BL*JO;Agr=-BL*JG;Ama=-BZ*JG;Amb=-BZ*JO;if(!I7)LI=[aX,-
10000,10000,aY];else if(I7===90)LI=[aX,aY,10000,10000];else if(I7===180)LI=[-10000
,aY,aX,10000];else LI=[-10000,-10000,aX,aY];C0.AhW(A.lb(aClip,LI),this.WZ,0,Ago+
aX,Agp+aY,1,Agq+aX,Agr+aY,1,aX,aY,1,Ama+aX,Amb+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend
,true);I7=I7+90;if(I7>=360)I7=I7-360;Xr=Xr-90;}JO=Math.sin((Xr+I7)*A.k$)*Alt;JG=
Math.cos((Xr+I7)*A.k$)*Alt;Ago=(-BZ*JG)+(BL*JO);Agp=(-BL*JG)-(BZ*JO);Agq=BL*JO;Agr=-
BL*JG;Ama=-BZ*JG;Amb=-BZ*JO;if(!I7)LI=[aX,-10000,10000,aY];else if(I7===90)LI=[aX
,aY,10000,10000];else if(I7===180)LI=[-10000,aY,aX,10000];else LI=[-10000,-10000
,aX,aY];C0.AhW(A.lb(aClip,LI),this.WZ,0,Ago+aX,Agp+aY,1,Agq+aX,Agr+aY,1,aX,aY,1,
Ama+aX,Amb+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend,true);}},Ace:function(E){var B;this.
N$=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SS;this.H(I0);this.WZ=A.aaL(C.
AUh);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AUh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUJ={K5:null,M4:null,A0:10,AHj:0,OA:function(A8,aColor){var Hi;
Hi=A._NewObject(C.Record,0);Hi.A5=A8;Hi.AQ=aColor;if(!this.K5){this.K5=Hi;this.M4=
Hi;this.A0=1;}else{this.M4.Ah=Hi;this.M4=Hi;this.A0=this.A0+1;}this.AHj=this.AHj+
A8;},_Init:function(aArg){this.__proto__=C.AUJ;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AUi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACV={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SS.__proto__=A.Core.P;};C._ReInit=function(
){};C.DI=function(D){var B;if((B=C.ARR[0]._this)&&(B._cycle!=D))B._Done(C.ARR[0].
_this=null);if((B=C.AUh[0]._this)&&(B._cycle!=D))B._Done(C.AUh[0]._this=null);if((
B=C.AUi[0]._this)&&(B._cycle!=D))B._Done(C.AUi[0]._this=null);if((B=C.ACV[0]._this
)&&(B._cycle!=D))B._Done(C.ACV[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */