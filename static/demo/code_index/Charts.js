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
var Ce=[10,10];var BD=[80,50];var E7=[0,0,360,240];var Hr=[0,0,370,270];var IW=[0
,0,260,240];
C.A59={Ah:null,P7:0,P8:0,_Init:function(aArg){this.__proto__=C.A59;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arn:null,Pw:null,Background:null,Aro:0xFFFFFFFF,Arp:3,AmN:0xFFFFFFFF
,AmO:0,Abc:A.wf,Asj:Ce,A5G:0xFF000000,ADC:0xFF6E0E0C,AHk:0xFF6E0E0C,OJ:BD,AqI:0,
Kq:function(CZ,aClip,aOffset,Ck,aBlend){var B;var XI=0;var XJ=0;var AAS=0;var AAT=
0;var RF=this.M[0]+aOffset[0];var RG=this.M[1]+aOffset[1];var Ao$=this.AmN;var Apy=
this.Aro;var Apu=this.ADC;var Aqb=this.AHk;var AlV=this.Arp/2;var RE=this.AmO/2;
var Kj=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kj<256){Ao$=(
Ao$&0x00FFFFFF)|((((((Ao$>>24)&0xFF)*Kj)>>8)&0xFF)<<24);Apy=(Apy&0x00FFFFFF)|((((((
Apy>>24)&0xFF)*Kj)>>8)&0xFF)<<24);Apu=(Apu&0x00FFFFFF)|((((((Apu>>24)&0xFF)*Kj)>>
8)&0xFF)<<24);Aqb=(Aqb&0x00FFFFFF)|((((((Aqb>>24)&0xFF)*Kj)>>8)&0xFF)<<24);}A.Core.
P.Kq.call(this,CZ,aClip,aOffset,Ck,aBlend);if(((this.ADC>>24)&0xFF)>0){var Di;for(
Di=this.Abc[1]+RG;Di>=RG;Di=Di-this.OJ[1])CZ.Au_(aClip,[RF,Di],[RF+((B=this.M)[2
]-B[0]),Di],Apu,Apu,aBlend);for(Di=(this.Abc[1]+RG)+this.OJ[1];Di<(RG+((B=this.M
)[3]-B[1]));Di=Di+this.OJ[1])CZ.Au_(aClip,[RF,Di],[RF+((B=this.M)[2]-B[0]),Di],Apu
,Apu,aBlend);}if(((this.AHk>>24)&0xFF)>0){var Ep;for(Ep=this.Abc[0]+RF;Ep>=RF;Ep=
Ep-this.OJ[0])CZ.Au_(aClip,[Ep,RG],[Ep,RG+((B=this.M)[3]-B[1])],Aqb,Aqb,aBlend);
for(Ep=(this.Abc[0]+RF)+this.OJ[0];Ep<(RF+((B=this.M)[2]-B[0]));Ep=Ep+this.OJ[0]
)CZ.Au_(aClip,[Ep,RG],[Ep,RG+((B=this.M)[3]-B[1])],Aqb,Aqb,aBlend);}if(!this.EZ)
return;var JD=this.EZ.AlL;if(!!JD){XI=(RF+this.Abc[0])+(JD.P7*this.Asj[0]);XJ=(RG+
this.Abc[1])+(JD.P8*this.Asj[1]);JD=JD.Ah;}while(!!JD){AAS=(RF+this.Abc[0])+(JD.
P7*this.Asj[0]);AAT=(RG+this.Abc[1])+(JD.P8*this.Asj[1]);var Kc=AAS-XI;var Kd=AAT-
XJ;var I1=Math.sqrt((Kc*Kc)+(Kd*Kd));if(!!I1){Kc=Kc/I1;Kd=Kd/I1;}if(!!this.Arn)CZ.
AhV(aClip,this.Arn,0,XI-(Kd*AlV),XJ+(Kc*AlV),1,XI+(Kd*AlV),XJ-(Kc*AlV),1,AAS+(Kd
*AlV),AAT-(Kc*AlV),1,AAS-(Kd*AlV),AAT+(Kc*AlV),1,[0,0,this.Arn.FrameSize[0],this.
Arn.FrameSize[1]],Apy,Apy,Apy,Apy,aBlend,true);if((this.AmO>0)&&!!this.Pw)CZ.AhV(
aClip,this.Pw,this.AqI,XI-RE,XJ-RE,1,XI+RE,XJ-RE,1,XI+RE,XJ+RE,1,XI-RE,XJ+RE,1,[
0,0,this.Pw.FrameSize[0],this.Pw.FrameSize[1]],Ao$,Ao$,Ao$,Ao$,aBlend,true);XI=AAS;
XJ=AAT;JD=JD.Ah;}if((this.AmO>0)&&!!this.Pw)CZ.AhV(aClip,this.Pw,this.AqI,XI-RE,
XJ-RE,1,XI+RE,XJ-RE,1,XI+RE,XJ+RE,1,XI-RE,XJ+RE,1,[0,0,this.Pw.FrameSize[0],this.
Pw.FrameSize[1]],this.AmN,this.AmN,this.AmN,this.AmN,aBlend,true);},Ae0:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATt:function(
E){var B;if(E===this.Aro)return;this.Aro=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATu:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arp=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmC:function(E){var B;if(E===this.AmN)return;
this.AmN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATi:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmO=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmx:
function(E){var B;if(A.aaX(E,this.Abc))return;this.Abc=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BnS:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asj))return;this.Asj=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bml:function(E){if(E===this.A5G)return;this.A5G=E;this.Background.L(E);
},Bm$:function(E){var B;if(E===this.ADC)return;this.ADC=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Boc:function(E){var B;if(E===this.AHk)return;this.AHk=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnB:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OJ))return;this.OJ=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATg:function(E){var B;if(E===this.Pw)return;this.
Pw=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATh:function(E){var B;if(E<0)
E=0;this.AqI=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E7);this.Background.A0(0x3F);this.Background.H(Hr);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arn=A.aaL(C.ARJ);this.Pw=
A.aaL(C.ACJ);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arn)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACq={AlL:null,AAi:
null,AY:0,AEl:10,Yj:function(){this.AlL=null;this.AAi=null;this.AY=0;},Aqi:function(
aX,aY){var JD=null;if((this.AEl>0)&&(this.AY===this.AEl)){JD=this.AlL;this.AlL=JD.
Ah;JD.Ah=null;this.AY=this.AY-1;}else JD=A._NewObject(C.A59,0);JD.P7=aX;JD.P8=aY;
if(!this.AlL){this.AlL=JD;this.AAi=JD;this.AY=1;}else{this.AAi.Ah=JD;this.AAi=JD;
this.AY=this.AY+1;}},AwV:function(E){if(E<1)E=1;this.AEl=E;},_Init:function(aArg
){this.__proto__=C.ACq;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SM={WS:null,Ags:null,N7:null,AGj:270,AGD:1,Kq:function(CZ,aClip,aOffset
,Ck,aBlend){var Vp;var Bdl;Vp=0;Bdl=this.AGj;while(Vp<0)Vp=Vp+360;while(Vp>=360)
Vp=Vp-360;var RF=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RG=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kq.call(this,CZ,aClip,aOffset,Ck,aBlend);if(!!this.
N7&&(this.N7.AG$>0)){var Hh=this.N7.K3;while(!!Hh){var FF=(Hh.A5/this.N7.AG$)*Bdl;
this.Bdr(CZ,aClip,RF,RG,Vp,FF,this.AGD,0,Hh.AQ,Ck,aBlend);Vp=Vp+FF;if(Vp>=360)Vp=
Vp-360;Hh=Hh.Ah;}}else this.Bdr(CZ,aClip,RF,RG,Vp,this.AGj,this.AGD,0,0xFF800000
,Ck,aBlend);},BnR:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGj)return;
this.AGj=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn2:function(E){var B;if(
E===this.WS)return;this.WS=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bn1:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGD)return;this.AGD=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bdr:function(CZ,aClip,aX,aY,aStartAngle
,Xl,Alp,A0$,aColor,Ck,aBlend){var B;var JM;var JE;var Agl;var Agm;var Agn;var Ago;
var BfX;var BfY;var Al8;var Al9;var LD;var B4=aColor;var Kj=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kj<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Kj)>>8)&0xFF)<<24);if(!this.WS)return;var BZ=this.WS.FrameSize[0];var BJ=
this.WS.FrameSize[1];var I4=0;if(Xl>=360){aStartAngle=0;Xl=360;}if(A0$>0){var Bdn=
aStartAngle+(Xl/2);JM=Math.sin(Bdn*A.k$);JE=Math.cos(Bdn*A.k$);aX=aX+((A0$*JM)|0
);aY=aY-((A0$*JE)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I4=I4+90;
}if(!this.Ags||!A.aaX(this.Ags.FrameSize,this.WS.FrameSize)){this.Ags=A._NewObject(
A.Graphics.Canvas,0);this.Ags.ArS(this.WS.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xl)<90)){JM=Math.sin(Xl*A.k$);JE=Math.cos(Xl*A.k$);Agl=(-BZ*JE)+(BJ*JM);Agm=(-BJ
*JE)-(BZ*JM);Agn=BJ*JM;Ago=-BJ*JE;Al8=-BZ*JE;Al9=-BZ*JM;this.Ags.Avn([0,0,BZ,BJ]
,[0,0,this.Ags.FrameSize[0],this.Ags.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ags.AhV([0,0,BZ,BJ],this.WS,0,Agl,Agm+BJ,1,Agn,Ago+BJ,1,
0,BJ,1,Al8,Al9+BJ,1,[0,0,BZ,BJ],B4,B4,B4,B4,true,true);JM=Math.sin((aStartAngle+
I4)*A.k$)*Alp;JE=Math.cos((aStartAngle+I4)*A.k$)*Alp;Agl=BJ*JM;Agm=-BJ*JE;Agn=(BZ
*JE)+(BJ*JM);Ago=(-BJ*JE)+(BZ*JM);BfX=BZ*JE;BfY=BZ*JM;CZ.AhV(aClip,this.Ags,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,BfX+aX,BfY+aY,1,aX,aY,1,[0,0,BZ,BJ],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JM=Math.sin(((90+I4)+
aStartAngle)*A.k$)*Alp;JE=Math.cos(((90+I4)+aStartAngle)*A.k$)*Alp;Agl=(-BZ*JE)+(
BJ*JM);Agm=(-BJ*JE)-(BZ*JM);Agn=BJ*JM;Ago=-BJ*JE;Al8=-BZ*JE;Al9=-BZ*JM;if(!I4)LD=[
aX,-10000,10000,aY];else if(I4===90)LD=[aX,aY,10000,10000];else if(I4===180)LD=[-
10000,aY,aX,10000];else LD=[-10000,-10000,aX,aY];CZ.AhV(A.lb(aClip,LD),this.WS,0
,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al8+aX,Al9+aY,1,[0,0,BZ,BJ],B4,B4,B4,B4
,aBlend,true);I4=I4+90;if(I4>=360)I4=I4-360;Xl=Xl-(90-aStartAngle);}while(Xl>=90
){JM=Math.sin((90+I4)*A.k$)*Alp;JE=Math.cos((90+I4)*A.k$)*Alp;Agl=(-BZ*JE)+(BJ*JM
);Agm=(-BJ*JE)-(BZ*JM);Agn=BJ*JM;Ago=-BJ*JE;Al8=-BZ*JE;Al9=-BZ*JM;if(!I4)LD=[aX,-
10000,10000,aY];else if(I4===90)LD=[aX,aY,10000,10000];else if(I4===180)LD=[-10000
,aY,aX,10000];else LD=[-10000,-10000,aX,aY];CZ.AhV(A.lb(aClip,LD),this.WS,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al8+aX,Al9+aY,1,[0,0,BZ,BJ],B4,B4,B4,B4,aBlend
,true);I4=I4+90;if(I4>=360)I4=I4-360;Xl=Xl-90;}JM=Math.sin((Xl+I4)*A.k$)*Alp;JE=
Math.cos((Xl+I4)*A.k$)*Alp;Agl=(-BZ*JE)+(BJ*JM);Agm=(-BJ*JE)-(BZ*JM);Agn=BJ*JM;Ago=-
BJ*JE;Al8=-BZ*JE;Al9=-BZ*JM;if(!I4)LD=[aX,-10000,10000,aY];else if(I4===90)LD=[aX
,aY,10000,10000];else if(I4===180)LD=[-10000,aY,aX,10000];else LD=[-10000,-10000
,aX,aY];CZ.AhV(A.lb(aClip,LD),this.WS,0,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,
Al8+aX,Al9+aY,1,[0,0,BZ,BJ],B4,B4,B4,B4,aBlend,true);}},Ab8:function(E){var B;this.
N7=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SM;this.H(IW);this.WS=A.aaL(C.
AT7);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AT7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUx={K3:null,MY:null,AY:10,AG$:0,Ow:function(A7,aColor){var Hh;
Hh=A._NewObject(C.Record,0);Hh.A5=A7;Hh.AQ=aColor;if(!this.K3){this.K3=Hh;this.MY=
Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.AY+1;}this.AG$=this.AG$+
A7;},_Init:function(aArg){this.__proto__=C.AUx;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AT8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SM.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARJ[0]._this)&&(B._cycle!=D))B._Done(C.ARJ[0].
_this=null);if((B=C.AT7[0]._this)&&(B._cycle!=D))B._Done(C.AT7[0]._this=null);if((
B=C.AT8[0]._this)&&(B._cycle!=D))B._Done(C.AT8[0]._this=null);if((B=C.ACJ[0]._this
)&&(B._cycle!=D))B._Done(C.ACJ[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */