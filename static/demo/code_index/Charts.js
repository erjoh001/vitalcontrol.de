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
var Ce=[10,10];var BD=[80,50];var E7=[0,0,360,240];var Hr=[0,0,370,270];var IV=[0
,0,260,240];
C.A57={Ah:null,P7:0,P8:0,_Init:function(aArg){this.__proto__=C.A57;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arn:null,Pw:null,Background:null,Aro:0xFFFFFFFF,Arp:3,AmM:0xFFFFFFFF
,AmN:0,Abc:A.wf,Asj:Ce,A5E:0xFF000000,ADB:0xFF6E0E0C,AHj:0xFF6E0E0C,OJ:BD,AqI:0,
Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var XH=0;var XI=0;var AAR=0;var AAS=
0;var RF=this.M[0]+aOffset[0];var RG=this.M[1]+aOffset[1];var Ao$=this.AmM;var Apy=
this.Aro;var Apu=this.ADB;var Aqb=this.AHj;var AlU=this.Arp/2;var RE=this.AmN/2;
var Kj=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kj<256){Ao$=(
Ao$&0x00FFFFFF)|((((((Ao$>>24)&0xFF)*Kj)>>8)&0xFF)<<24);Apy=(Apy&0x00FFFFFF)|((((((
Apy>>24)&0xFF)*Kj)>>8)&0xFF)<<24);Apu=(Apu&0x00FFFFFF)|((((((Apu>>24)&0xFF)*Kj)>>
8)&0xFF)<<24);Aqb=(Aqb&0x00FFFFFF)|((((((Aqb>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}A.Core.
P.Kq.call(this,CZ,aClip,aOffset,Ck,aBlend);if(((this.ADB>>24)&0xFF)>0){var Di;for(
Di=this.Abc[1]+RG;Di>=RG;Di=Di-this.OJ[1])CZ.Au$(aClip,[RF,Di],[RF+((B=this.M)[2
]-B[0]),Di],Apu,Apu,aBlend);for(Di=(this.Abc[1]+RG)+this.OJ[1];Di<(RG+((B=this.M
)[3]-B[1]));Di=Di+this.OJ[1])CZ.Au$(aClip,[RF,Di],[RF+((B=this.M)[2]-B[0]),Di],Apu
,Apu,aBlend);}if(((this.AHj>>24)&0xFF)>0){var Ep;for(Ep=this.Abc[0]+RF;Ep>=RF;Ep=
Ep-this.OJ[0])CZ.Au$(aClip,[Ep,RG],[Ep,RG+((B=this.M)[3]-B[1])],Aqb,Aqb,aBlend);
for(Ep=(this.Abc[0]+RF)+this.OJ[0];Ep<(RF+((B=this.M)[2]-B[0]));Ep=Ep+this.OJ[0]
)CZ.Au$(aClip,[Ep,RG],[Ep,RG+((B=this.M)[3]-B[1])],Aqb,Aqb,aBlend);}if(!this.EZ)
return;var JC=this.EZ.AlK;if(!!JC){XH=(RF+this.Abc[0])+(JC.P7*this.Asj[0]);XI=(RG+
this.Abc[1])+(JC.P8*this.Asj[1]);JC=JC.Ah;}while(!!JC){AAR=(RF+this.Abc[0])+(JC.
P7*this.Asj[0]);AAS=(RG+this.Abc[1])+(JC.P8*this.Asj[1]);var Kb=AAR-XH;var Kc=AAS-
XI;var I0=Math.sqrt((Kb*Kb)+(Kc*Kc));if(!!I0){Kb=Kb/I0;Kc=Kc/I0;}if(!!this.Arn)CZ.
AhV(aClip,this.Arn,0,XH-(Kc*AlU),XI+(Kb*AlU),1,XH+(Kc*AlU),XI-(Kb*AlU),1,AAR+(Kc
*AlU),AAS-(Kb*AlU),1,AAR-(Kc*AlU),AAS+(Kb*AlU),1,[0,0,this.Arn.FrameSize[0],this.
Arn.FrameSize[1]],Apy,Apy,Apy,Apy,aBlend,true);if((this.AmN>0)&&!!this.Pw)CZ.AhV(
aClip,this.Pw,this.AqI,XH-RE,XI-RE,1,XH+RE,XI-RE,1,XH+RE,XI+RE,1,XH-RE,XI+RE,1,[
0,0,this.Pw.FrameSize[0],this.Pw.FrameSize[1]],Ao$,Ao$,Ao$,Ao$,aBlend,true);XH=AAR;
XI=AAS;JC=JC.Ah;}if((this.AmN>0)&&!!this.Pw)CZ.AhV(aClip,this.Pw,this.AqI,XH-RE,
XI-RE,1,XH+RE,XI-RE,1,XH+RE,XI+RE,1,XH-RE,XI+RE,1,[0,0,this.Pw.FrameSize[0],this.
Pw.FrameSize[1]],this.AmM,this.AmM,this.AmM,this.AmM,aBlend,true);},Ae0:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATr:function(
E){var B;if(E===this.Aro)return;this.Aro=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATs:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arp=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmA:function(E){var B;if(E===this.AmM)return;
this.AmM=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATg:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmv:
function(E){var B;if(A.aaX(E,this.Abc))return;this.Abc=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BnQ:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asj))return;this.Asj=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bmj:function(E){if(E===this.A5E)return;this.A5E=E;this.Background.L(E);
},Bm9:function(E){var B;if(E===this.ADB)return;this.ADB=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Boa:function(E){var B;if(E===this.AHj)return;this.AHj=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnA:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OJ))return;this.OJ=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATe:function(E){var B;if(E===this.Pw)return;this.
Pw=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATf:function(E){var B;if(E<0)
E=0;this.AqI=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E7);this.Background.A0(0x3F);this.Background.H(Hr);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arn=A.aaL(C.ARH);this.Pw=
A.aaL(C.ACI);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arn)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACp={AlK:null,AAh:
null,AY:0,AEk:10,Yi:function(){this.AlK=null;this.AAh=null;this.AY=0;},Aqi:function(
aX,aY){var JC=null;if((this.AEk>0)&&(this.AY===this.AEk)){JC=this.AlK;this.AlK=JC.
Ah;JC.Ah=null;this.AY=this.AY-1;}else JC=A._NewObject(C.A57,0);JC.P7=aX;JC.P8=aY;
if(!this.AlK){this.AlK=JC;this.AAh=JC;this.AY=1;}else{this.AAh.Ah=JC;this.AAh=JC;
this.AY=this.AY+1;}},AwW:function(E){if(E<1)E=1;this.AEk=E;},_Init:function(aArg
){this.__proto__=C.ACp;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SM={WR:null,Ags:null,N7:null,AGi:270,AGC:1,Kq:function(CZ,aClip,aOffset
,Ck,aBlend){var Vo;var Bdj;Vo=0;Bdj=this.AGi;while(Vo<0)Vo=Vo+360;while(Vo>=360)
Vo=Vo-360;var RF=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RG=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kq.call(this,CZ,aClip,aOffset,Ck,aBlend);if(!!this.
N7&&(this.N7.AG_>0)){var Hh=this.N7.K3;while(!!Hh){var FF=(Hh.A5/this.N7.AG_)*Bdj;
this.Bdp(CZ,aClip,RF,RG,Vo,FF,this.AGC,0,Hh.AQ,Ck,aBlend);Vo=Vo+FF;if(Vo>=360)Vo=
Vo-360;Hh=Hh.Ah;}}else this.Bdp(CZ,aClip,RF,RG,Vo,this.AGi,this.AGC,0,0xFF800000
,Ck,aBlend);},BnP:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGi)return;
this.AGi=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn0:function(E){var B;if(
E===this.WR)return;this.WR=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BnZ:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGC)return;this.AGC=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bdp:function(CZ,aClip,aX,aY,aStartAngle
,Xk,Alo,A09,aColor,Ck,aBlend){var B;var JL;var JD;var Agl;var Agm;var Agn;var Ago;
var BfV;var BfW;var Al7;var Al8;var LD;var B3=aColor;var Kj=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kj<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Kj)>>8)&0xFF)<<24);if(!this.WR)return;var BY=this.WR.FrameSize[0];var BI=
this.WR.FrameSize[1];var I3=0;if(Xk>=360){aStartAngle=0;Xk=360;}if(A09>0){var Bdl=
aStartAngle+(Xk/2);JL=Math.sin(Bdl*A.k$);JD=Math.cos(Bdl*A.k$);aX=aX+((A09*JL)|0
);aY=aY-((A09*JD)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I3=I3+90;
}if(!this.Ags||!A.aaX(this.Ags.FrameSize,this.WR.FrameSize)){this.Ags=A._NewObject(
A.Graphics.Canvas,0);this.Ags.ArS(this.WR.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xk)<90)){JL=Math.sin(Xk*A.k$);JD=Math.cos(Xk*A.k$);Agl=(-BY*JD)+(BI*JL);Agm=(-BI
*JD)-(BY*JL);Agn=BI*JL;Ago=-BI*JD;Al7=-BY*JD;Al8=-BY*JL;this.Ags.Avo([0,0,BY,BI]
,[0,0,this.Ags.FrameSize[0],this.Ags.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ags.AhV([0,0,BY,BI],this.WR,0,Agl,Agm+BI,1,Agn,Ago+BI,1,
0,BI,1,Al7,Al8+BI,1,[0,0,BY,BI],B3,B3,B3,B3,true,true);JL=Math.sin((aStartAngle+
I3)*A.k$)*Alo;JD=Math.cos((aStartAngle+I3)*A.k$)*Alo;Agl=BI*JL;Agm=-BI*JD;Agn=(BY
*JD)+(BI*JL);Ago=(-BI*JD)+(BY*JL);BfV=BY*JD;BfW=BY*JL;CZ.AhV(aClip,this.Ags,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,BfV+aX,BfW+aY,1,aX,aY,1,[0,0,BY,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JL=Math.sin(((90+I3)+
aStartAngle)*A.k$)*Alo;JD=Math.cos(((90+I3)+aStartAngle)*A.k$)*Alo;Agl=(-BY*JD)+(
BI*JL);Agm=(-BI*JD)-(BY*JL);Agn=BI*JL;Ago=-BI*JD;Al7=-BY*JD;Al8=-BY*JL;if(!I3)LD=[
aX,-10000,10000,aY];else if(I3===90)LD=[aX,aY,10000,10000];else if(I3===180)LD=[-
10000,aY,aX,10000];else LD=[-10000,-10000,aX,aY];CZ.AhV(A.lb(aClip,LD),this.WR,0
,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3
,aBlend,true);I3=I3+90;if(I3>=360)I3=I3-360;Xk=Xk-(90-aStartAngle);}while(Xk>=90
){JL=Math.sin((90+I3)*A.k$)*Alo;JD=Math.cos((90+I3)*A.k$)*Alo;Agl=(-BY*JD)+(BI*JL
);Agm=(-BI*JD)-(BY*JL);Agn=BI*JL;Ago=-BI*JD;Al7=-BY*JD;Al8=-BY*JL;if(!I3)LD=[aX,-
10000,10000,aY];else if(I3===90)LD=[aX,aY,10000,10000];else if(I3===180)LD=[-10000
,aY,aX,10000];else LD=[-10000,-10000,aX,aY];CZ.AhV(A.lb(aClip,LD),this.WR,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend
,true);I3=I3+90;if(I3>=360)I3=I3-360;Xk=Xk-90;}JL=Math.sin((Xk+I3)*A.k$)*Alo;JD=
Math.cos((Xk+I3)*A.k$)*Alo;Agl=(-BY*JD)+(BI*JL);Agm=(-BI*JD)-(BY*JL);Agn=BI*JL;Ago=-
BI*JD;Al7=-BY*JD;Al8=-BY*JL;if(!I3)LD=[aX,-10000,10000,aY];else if(I3===90)LD=[aX
,aY,10000,10000];else if(I3===180)LD=[-10000,aY,aX,10000];else LD=[-10000,-10000
,aX,aY];CZ.AhV(A.lb(aClip,LD),this.WR,0,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,
Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend,true);}},Ab8:function(E){var B;this.
N7=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SM;this.H(IV);this.WR=A.aaL(C.
AT5);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AT5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUv={K3:null,MY:null,AY:10,AG_:0,Ow:function(A7,aColor){var Hh;
Hh=A._NewObject(C.Record,0);Hh.A5=A7;Hh.AQ=aColor;if(!this.K3){this.K3=Hh;this.MY=
Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.AY+1;}this.AG_=this.AG_+
A7;},_Init:function(aArg){this.__proto__=C.AUv;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AT6={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SM.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARH[0]._this)&&(B._cycle!=D))B._Done(C.ARH[0].
_this=null);if((B=C.AT5[0]._this)&&(B._cycle!=D))B._Done(C.AT5[0]._this=null);if((
B=C.AT6[0]._this)&&(B._cycle!=D))B._Done(C.AT6[0]._this=null);if((B=C.ACI[0]._this
)&&(B._cycle!=D))B._Done(C.ACI[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */