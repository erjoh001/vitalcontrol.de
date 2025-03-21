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
C.A6h={Ah:null,P_:0,P$:0,_Init:function(aArg){this.__proto__=C.A6h;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Aru:null,PA:null,Background:null,Arv:0xFFFFFFFF,Arw:3,AmQ:0xFFFFFFFF
,AmR:0,Abk:A.wf,Asp:Cf,A5Q:0xFF000000,ADM:0xFF6E0E0C,AHs:0xFF6E0E0C,ON:BD,AqO:0,
Ks:function(C0,aClip,aOffset,Ck,aBlend){var B;var XN=0;var XO=0;var AA1=0;var AA2=
0;var RI=this.M[0]+aOffset[0];var RJ=this.M[1]+aOffset[1];var Apc=this.AmQ;var ApB=
this.Arv;var Apx=this.ADM;var Aqf=this.AHs;var AlY=this.Arw/2;var RH=this.AmR/2;
var Kl=(((Ck+1)*this.G_)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kl<256){Apc=(
Apc&0x00FFFFFF)|((((((Apc>>24)&0xFF)*Kl)>>8)&0xFF)<<24);ApB=(ApB&0x00FFFFFF)|((((((
ApB>>24)&0xFF)*Kl)>>8)&0xFF)<<24);Apx=(Apx&0x00FFFFFF)|((((((Apx>>24)&0xFF)*Kl)>>
8)&0xFF)<<24);Aqf=(Aqf&0x00FFFFFF)|((((((Aqf>>24)&0xFF)*Kl)>>8)&0xFF)<<24);}A.Core.
P.Ks.call(this,C0,aClip,aOffset,Ck,aBlend);if(((this.ADM>>24)&0xFF)>0){var Di;for(
Di=this.Abk[1]+RJ;Di>=RJ;Di=Di-this.ON[1])C0.Avb(aClip,[RI,Di],[RI+((B=this.M)[2
]-B[0]),Di],Apx,Apx,aBlend);for(Di=(this.Abk[1]+RJ)+this.ON[1];Di<(RJ+((B=this.M
)[3]-B[1]));Di=Di+this.ON[1])C0.Avb(aClip,[RI,Di],[RI+((B=this.M)[2]-B[0]),Di],Apx
,Apx,aBlend);}if(((this.AHs>>24)&0xFF)>0){var Ep;for(Ep=this.Abk[0]+RI;Ep>=RI;Ep=
Ep-this.ON[0])C0.Avb(aClip,[Ep,RJ],[Ep,RJ+((B=this.M)[3]-B[1])],Aqf,Aqf,aBlend);
for(Ep=(this.Abk[0]+RI)+this.ON[0];Ep<(RI+((B=this.M)[2]-B[0]));Ep=Ep+this.ON[0]
)C0.Avb(aClip,[Ep,RJ],[Ep,RJ+((B=this.M)[3]-B[1])],Aqf,Aqf,aBlend);}if(!this.EZ)
return;var JF=this.EZ.AlO;if(!!JF){XN=(RI+this.Abk[0])+(JF.P_*this.Asp[0]);XO=(RJ+
this.Abk[1])+(JF.P$*this.Asp[1]);JF=JF.Ah;}while(!!JF){AA1=(RI+this.Abk[0])+(JF.
P_*this.Asp[0]);AA2=(RJ+this.Abk[1])+(JF.P$*this.Asp[1]);var Ke=AA1-XN;var Kf=AA2-
XO;var I5=Math.sqrt((Ke*Ke)+(Kf*Kf));if(!!I5){Ke=Ke/I5;Kf=Kf/I5;}if(!!this.Aru)C0.
AhV(aClip,this.Aru,0,XN-(Kf*AlY),XO+(Ke*AlY),1,XN+(Kf*AlY),XO-(Ke*AlY),1,AA1+(Kf
*AlY),AA2-(Ke*AlY),1,AA1-(Kf*AlY),AA2+(Ke*AlY),1,[0,0,this.Aru.FrameSize[0],this.
Aru.FrameSize[1]],ApB,ApB,ApB,ApB,aBlend,true);if((this.AmR>0)&&!!this.PA)C0.AhV(
aClip,this.PA,this.AqO,XN-RH,XO-RH,1,XN+RH,XO-RH,1,XN+RH,XO+RH,1,XN-RH,XO+RH,1,[
0,0,this.PA.FrameSize[0],this.PA.FrameSize[1]],Apc,Apc,Apc,Apc,aBlend,true);XN=AA1;
XO=AA2;JF=JF.Ah;}if((this.AmR>0)&&!!this.PA)C0.AhV(aClip,this.PA,this.AqO,XN-RH,
XO-RH,1,XN+RH,XO-RH,1,XN+RH,XO+RH,1,XN-RH,XO+RH,1,[0,0,this.PA.FrameSize[0],this.
PA.FrameSize[1]],this.AmQ,this.AmQ,this.AmQ,this.AmQ,aBlend,true);},Ae1:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATA:function(
E){var B;if(E===this.Arv)return;this.Arv=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATB:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arw=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmK:function(E){var B;if(E===this.AmQ)return;
this.AmQ=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATp:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmR=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmG:
function(E){var B;if(A.aaX(E,this.Abk))return;this.Abk=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bn0:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asp))return;this.Asp=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bmu:function(E){if(E===this.A5Q)return;this.A5Q=E;this.Background.L(E);
},Bnh:function(E){var B;if(E===this.ADM)return;this.ADM=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bol:function(E){var B;if(E===this.AHs)return;this.AHs=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnF:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.ON))return;this.ON=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATn:function(E){var B;if(E===this.PA)return;this.
PA=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATo:function(E){var B;if(E<0)
E=0;this.AqO=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E8);this.Background.A1(0x3F);this.Background.H(Hs);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Aru=A.aaL(C.ARP);this.PA=
A.aaL(C.ACT);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aru)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACA={AlO:null,AAr:
null,AZ:0,AEv:10,Yp:function(){this.AlO=null;this.AAr=null;this.AZ=0;},Aqm:function(
aX,aY){var JF=null;if((this.AEv>0)&&(this.AZ===this.AEv)){JF=this.AlO;this.AlO=JF.
Ah;JF.Ah=null;this.AZ=this.AZ-1;}else JF=A._NewObject(C.A6h,0);JF.P_=aX;JF.P$=aY;
if(!this.AlO){this.AlO=JF;this.AAr=JF;this.AZ=1;}else{this.AAr.Ah=JF;this.AAr=JF;
this.AZ=this.AZ+1;}},AwZ:function(E){if(E<1)E=1;this.AEv=E;},_Init:function(aArg
){this.__proto__=C.ACA;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlO)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SR={WY:null,Agu:null,N$:null,AGr:270,AGL:1,Ks:function(C0,aClip,aOffset
,Ck,aBlend){var Vv;var Bdv;Vv=0;Bdv=this.AGr;while(Vv<0)Vv=Vv+360;while(Vv>=360)
Vv=Vv-360;var RI=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RJ=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Ks.call(this,C0,aClip,aOffset,Ck,aBlend);if(!!this.
N$&&(this.N$.AHh>0)){var Hj=this.N$.K6;while(!!Hj){var FF=(Hj.A5/this.N$.AHh)*Bdv;
this.BdB(C0,aClip,RI,RJ,Vv,FF,this.AGL,0,Hj.AQ,Ck,aBlend);Vv=Vv+FF;if(Vv>=360)Vv=
Vv-360;Hj=Hj.Ah;}}else this.BdB(C0,aClip,RI,RJ,Vv,this.AGr,this.AGL,0,0xFF800000
,Ck,aBlend);},BnZ:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGr)return;
this.AGr=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn$:function(E){var B;if(
E===this.WY)return;this.WY=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn9:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGL)return;this.AGL=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BdB:function(C0,aClip,aX,aY,aStartAngle
,Xq,Als,A1k,aColor,Ck,aBlend){var B;var JO;var JG;var Agn;var Ago;var Agp;var Agq;
var Bf6;var Bf7;var Al$;var Ama;var LI;var B4=aColor;var Kl=(((Ck+1)*this.G_)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kl<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Kl)>>8)&0xFF)<<24);if(!this.WY)return;var BZ=this.WY.FrameSize[0];var BL=
this.WY.FrameSize[1];var I7=0;if(Xq>=360){aStartAngle=0;Xq=360;}if(A1k>0){var Bdx=
aStartAngle+(Xq/2);JO=Math.sin(Bdx*A.k$);JG=Math.cos(Bdx*A.k$);aX=aX+((A1k*JO)|0
);aY=aY-((A1k*JG)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I7=I7+90;
}if(!this.Agu||!A.aaX(this.Agu.FrameSize,this.WY.FrameSize)){this.Agu=A._NewObject(
A.Graphics.Canvas,0);this.Agu.ArY(this.WY.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xq)<90)){JO=Math.sin(Xq*A.k$);JG=Math.cos(Xq*A.k$);Agn=(-BZ*JG)+(BL*JO);Ago=(-BL
*JG)-(BZ*JO);Agp=BL*JO;Agq=-BL*JG;Al$=-BZ*JG;Ama=-BZ*JO;this.Agu.Avq([0,0,BZ,BL]
,[0,0,this.Agu.FrameSize[0],this.Agu.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agu.AhV([0,0,BZ,BL],this.WY,0,Agn,Ago+BL,1,Agp,Agq+BL,1,
0,BL,1,Al$,Ama+BL,1,[0,0,BZ,BL],B4,B4,B4,B4,true,true);JO=Math.sin((aStartAngle+
I7)*A.k$)*Als;JG=Math.cos((aStartAngle+I7)*A.k$)*Als;Agn=BL*JO;Ago=-BL*JG;Agp=(BZ
*JG)+(BL*JO);Agq=(-BL*JG)+(BZ*JO);Bf6=BZ*JG;Bf7=BZ*JO;C0.AhV(aClip,this.Agu,0,Agn+
aX,Ago+aY,1,Agp+aX,Agq+aY,1,Bf6+aX,Bf7+aY,1,aX,aY,1,[0,0,BZ,BL],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JO=Math.sin(((90+I7)+
aStartAngle)*A.k$)*Als;JG=Math.cos(((90+I7)+aStartAngle)*A.k$)*Als;Agn=(-BZ*JG)+(
BL*JO);Ago=(-BL*JG)-(BZ*JO);Agp=BL*JO;Agq=-BL*JG;Al$=-BZ*JG;Ama=-BZ*JO;if(!I7)LI=[
aX,-10000,10000,aY];else if(I7===90)LI=[aX,aY,10000,10000];else if(I7===180)LI=[-
10000,aY,aX,10000];else LI=[-10000,-10000,aX,aY];C0.AhV(A.lb(aClip,LI),this.WY,0
,Agn+aX,Ago+aY,1,Agp+aX,Agq+aY,1,aX,aY,1,Al$+aX,Ama+aY,1,[0,0,BZ,BL],B4,B4,B4,B4
,aBlend,true);I7=I7+90;if(I7>=360)I7=I7-360;Xq=Xq-(90-aStartAngle);}while(Xq>=90
){JO=Math.sin((90+I7)*A.k$)*Als;JG=Math.cos((90+I7)*A.k$)*Als;Agn=(-BZ*JG)+(BL*JO
);Ago=(-BL*JG)-(BZ*JO);Agp=BL*JO;Agq=-BL*JG;Al$=-BZ*JG;Ama=-BZ*JO;if(!I7)LI=[aX,-
10000,10000,aY];else if(I7===90)LI=[aX,aY,10000,10000];else if(I7===180)LI=[-10000
,aY,aX,10000];else LI=[-10000,-10000,aX,aY];C0.AhV(A.lb(aClip,LI),this.WY,0,Agn+
aX,Ago+aY,1,Agp+aX,Agq+aY,1,aX,aY,1,Al$+aX,Ama+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend
,true);I7=I7+90;if(I7>=360)I7=I7-360;Xq=Xq-90;}JO=Math.sin((Xq+I7)*A.k$)*Als;JG=
Math.cos((Xq+I7)*A.k$)*Als;Agn=(-BZ*JG)+(BL*JO);Ago=(-BL*JG)-(BZ*JO);Agp=BL*JO;Agq=-
BL*JG;Al$=-BZ*JG;Ama=-BZ*JO;if(!I7)LI=[aX,-10000,10000,aY];else if(I7===90)LI=[aX
,aY,10000,10000];else if(I7===180)LI=[-10000,aY,aX,10000];else LI=[-10000,-10000
,aX,aY];C0.AhV(A.lb(aClip,LI),this.WY,0,Agn+aX,Ago+aY,1,Agp+aX,Agq+aY,1,aX,aY,1,
Al$+aX,Ama+aY,1,[0,0,BZ,BL],B4,B4,B4,B4,aBlend,true);}},Acc:function(E){var B;this.
N$=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SR;this.H(I0);this.WY=A.aaL(C.
AUf);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AUf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUH={K6:null,M3:null,AZ:10,AHh:0,OA:function(A8,aColor){var Hj;
Hj=A._NewObject(C.Record,0);Hj.A5=A8;Hj.AQ=aColor;if(!this.K6){this.K6=Hj;this.M3=
Hj;this.AZ=1;}else{this.M3.Ah=Hj;this.M3=Hj;this.AZ=this.AZ+1;}this.AHh=this.AHh+
A8;},_Init:function(aArg){this.__proto__=C.AUH;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AUg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SR.__proto__=A.Core.P;};C._ReInit=function(
){};C.DI=function(D){var B;if((B=C.ARP[0]._this)&&(B._cycle!=D))B._Done(C.ARP[0].
_this=null);if((B=C.AUf[0]._this)&&(B._cycle!=D))B._Done(C.AUf[0]._this=null);if((
B=C.AUg[0]._this)&&(B._cycle!=D))B._Done(C.AUg[0]._this=null);if((B=C.ACT[0]._this
)&&(B._cycle!=D))B._Done(C.ACT[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */