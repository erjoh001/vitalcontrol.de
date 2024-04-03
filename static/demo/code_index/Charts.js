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
);if(index.acv)throw new Error("The unit file 'Charts.js' included twice!");index.
acv=(function(){var A=index;var C={};
var Cc=[10,10];var BD=[80,50];var E7=[0,0,360,240];var Hq=[0,0,370,270];var IU=[0
,0,260,240];
C.A5G={Ah:null,P4:0,P5:0,_Init:function(aArg){this.__proto__=C.A5G;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arj:null,Pt:null,Background:null,Ark:0xFFFFFFFF,Arl:3,AmJ:0xFFFFFFFF
,AmK:0,Aa$:A.wf,Asf:Cc,A5d:0xFF000000,ADr:0xFF6E0E0C,AG9:0xFF6E0E0C,OE:BD,AqE:0,
Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;var XB=0;var XC=0;var AAK=0;var AAL=
0;var RC=this.M[0]+aOffset[0];var RD=this.M[1]+aOffset[1];var Ao7=this.AmJ;var Apu=
this.Ark;var Apq=this.ADr;var Ap9=this.AG9;var AlR=this.Arl/2;var RB=this.AmK/2;
var Kg=(((Cj+1)*this.G8)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kg<256){Ao7=(
Ao7&0x00FFFFFF)|((((((Ao7>>24)&0xFF)*Kg)>>8)&0xFF)<<24);Apu=(Apu&0x00FFFFFF)|((((((
Apu>>24)&0xFF)*Kg)>>8)&0xFF)<<24);Apq=(Apq&0x00FFFFFF)|((((((Apq>>24)&0xFF)*Kg)>>
8)&0xFF)<<24);Ap9=(Ap9&0x00FFFFFF)|((((((Ap9>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}A.Core.
P.Kn.call(this,CY,aClip,aOffset,Cj,aBlend);if(((this.ADr>>24)&0xFF)>0){var Dg;for(
Dg=this.Aa$[1]+RD;Dg>=RD;Dg=Dg-this.OE[1])CY.Au1(aClip,[RC,Dg],[RC+((B=this.M)[2
]-B[0]),Dg],Apq,Apq,aBlend);for(Dg=(this.Aa$[1]+RD)+this.OE[1];Dg<(RD+((B=this.M
)[3]-B[1]));Dg=Dg+this.OE[1])CY.Au1(aClip,[RC,Dg],[RC+((B=this.M)[2]-B[0]),Dg],Apq
,Apq,aBlend);}if(((this.AG9>>24)&0xFF)>0){var Eo;for(Eo=this.Aa$[0]+RC;Eo>=RC;Eo=
Eo-this.OE[0])CY.Au1(aClip,[Eo,RD],[Eo,RD+((B=this.M)[3]-B[1])],Ap9,Ap9,aBlend);
for(Eo=(this.Aa$[0]+RC)+this.OE[0];Eo<(RC+((B=this.M)[2]-B[0]));Eo=Eo+this.OE[0]
)CY.Au1(aClip,[Eo,RD],[Eo,RD+((B=this.M)[3]-B[1])],Ap9,Ap9,aBlend);}if(!this.EZ)
return;var JA=this.EZ.AlH;if(!!JA){XB=(RC+this.Aa$[0])+(JA.P4*this.Asf[0]);XC=(RD+
this.Aa$[1])+(JA.P5*this.Asf[1]);JA=JA.Ah;}while(!!JA){AAK=(RC+this.Aa$[0])+(JA.
P4*this.Asf[0]);AAL=(RD+this.Aa$[1])+(JA.P5*this.Asf[1]);var J_=AAK-XB;var J$=AAL-
XC;var IY=Math.sqrt((J_*J_)+(J$*J$));if(!!IY){J_=J_/IY;J$=J$/IY;}if(!!this.Arj)CY.
AhR(aClip,this.Arj,0,XB-(J$*AlR),XC+(J_*AlR),1,XB+(J$*AlR),XC-(J_*AlR),1,AAK+(J$
*AlR),AAL-(J_*AlR),1,AAK-(J$*AlR),AAL+(J_*AlR),1,[0,0,this.Arj.FrameSize[0],this.
Arj.FrameSize[1]],Apu,Apu,Apu,Apu,aBlend,true);if((this.AmK>0)&&!!this.Pt)CY.AhR(
aClip,this.Pt,this.AqE,XB-RB,XC-RB,1,XB+RB,XC-RB,1,XB+RB,XC+RB,1,XB-RB,XC+RB,1,[
0,0,this.Pt.FrameSize[0],this.Pt.FrameSize[1]],Ao7,Ao7,Ao7,Ao7,aBlend,true);XB=AAK;
XC=AAL;JA=JA.Ah;}if((this.AmK>0)&&!!this.Pt)CY.AhR(aClip,this.Pt,this.AqE,XB-RB,
XC-RB,1,XB+RB,XC-RB,1,XB+RB,XC+RB,1,XB-RB,XC+RB,1,[0,0,this.Pt.FrameSize[0],this.
Pt.FrameSize[1]],this.AmJ,this.AmJ,this.AmJ,this.AmJ,aBlend,true);},AeY:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATb:function(
E){var B;if(E===this.Ark)return;this.Ark=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATc:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arl=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bl2:function(E){var B;if(E===this.AmJ)return;
this.AmJ=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS2:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmK=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlX:
function(E){var B;if(A.aaX(E,this.Aa$))return;this.Aa$=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bng:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asf))return;this.Asf=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},BlL:function(E){if(E===this.A5d)return;this.A5d=E;this.Background.L(E);
},Bmz:function(E){var B;if(E===this.ADr)return;this.ADr=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},BnC:function(E){var B;if(E===this.AG9)return;this.AG9=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anx:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OE))return;this.OE=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS0:function(E){var B;if(E===this.Pt)return;this.
Pt=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS1:function(E){var B;if(E<0)
E=0;this.AqE=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E7);this.Background.AZ(0x3F);this.Background.H(Hq);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arj=A.aaL(C.ARs);this.Pt=
A.aaL(C.ACz);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACg={AlH:null,AAb:
null,AY:0,AD_:10,Yc:function(){this.AlH=null;this.AAb=null;this.AY=0;},Aqe:function(
aX,aY){var JA=null;if((this.AD_>0)&&(this.AY===this.AD_)){JA=this.AlH;this.AlH=JA.
Ah;JA.Ah=null;this.AY=this.AY-1;}else JA=A._NewObject(C.A5G,0);JA.P4=aX;JA.P5=aY;
if(!this.AlH){this.AlH=JA;this.AAb=JA;this.AY=1;}else{this.AAb.Ah=JA;this.AAb=JA;
this.AY=this.AY+1;}},AwP:function(E){if(E<1)E=1;this.AD_=E;},_Init:function(aArg
){this.__proto__=C.ACg;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlH)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SJ={WI:null,Ago:null,N3:null,AF8:270,AGq:1,Kn:function(CY,aClip,aOffset
,Cj,aBlend){var Vl;var BcQ;Vl=0;BcQ=this.AF8;while(Vl<0)Vl=Vl+360;while(Vl>=360)
Vl=Vl-360;var RC=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RD=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kn.call(this,CY,aClip,aOffset,Cj,aBlend);if(!!this.
N3&&(this.N3.AGY>0)){var Hg=this.N3.K0;while(!!Hg){var FF=(Hg.A5/this.N3.AGY)*BcQ;
this.BcW(CY,aClip,RC,RD,Vl,FF,this.AGq,0,Hg.AQ,Cj,aBlend);Vl=Vl+FF;if(Vl>=360)Vl=
Vl-360;Hg=Hg.Ah;}}else this.BcW(CY,aClip,RC,RD,Vl,this.AF8,this.AGq,0,0xFF800000
,Cj,aBlend);},Bnf:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF8)return;
this.AF8=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bnq:function(E){var B;if(
E===this.WI)return;this.WI=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bnp:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGq)return;this.AGq=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcW:function(CY,aClip,aX,aY,aStartAngle
,Xd,All,A0L,aColor,Cj,aBlend){var B;var JI;var JB;var Agh;var Agi;var Agj;var Agk;
var Bfp;var Bfq;var Al4;var Al5;var LA;var B3=aColor;var Kg=(((Cj+1)*this.G8)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kg<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Kg)>>8)&0xFF)<<24);if(!this.WI)return;var BY=this.WI.FrameSize[0];var BI=
this.WI.FrameSize[1];var I1=0;if(Xd>=360){aStartAngle=0;Xd=360;}if(A0L>0){var BcS=
aStartAngle+(Xd/2);JI=Math.sin(BcS*A.k$);JB=Math.cos(BcS*A.k$);aX=aX+((A0L*JI)|0
);aY=aY-((A0L*JB)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I1=I1+90;
}if(!this.Ago||!A.aaX(this.Ago.FrameSize,this.WI.FrameSize)){this.Ago=A._NewObject(
A.Graphics.Canvas,0);this.Ago.ArO(this.WI.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xd)<90)){JI=Math.sin(Xd*A.k$);JB=Math.cos(Xd*A.k$);Agh=(-BY*JB)+(BI*JI);Agi=(-BI
*JB)-(BY*JI);Agj=BI*JI;Agk=-BI*JB;Al4=-BY*JB;Al5=-BY*JI;this.Ago.Ave([0,0,BY,BI]
,[0,0,this.Ago.FrameSize[0],this.Ago.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ago.AhR([0,0,BY,BI],this.WI,0,Agh,Agi+BI,1,Agj,Agk+BI,1,
0,BI,1,Al4,Al5+BI,1,[0,0,BY,BI],B3,B3,B3,B3,true,true);JI=Math.sin((aStartAngle+
I1)*A.k$)*All;JB=Math.cos((aStartAngle+I1)*A.k$)*All;Agh=BI*JI;Agi=-BI*JB;Agj=(BY
*JB)+(BI*JI);Agk=(-BI*JB)+(BY*JI);Bfp=BY*JB;Bfq=BY*JI;CY.AhR(aClip,this.Ago,0,Agh+
aX,Agi+aY,1,Agj+aX,Agk+aY,1,Bfp+aX,Bfq+aY,1,aX,aY,1,[0,0,BY,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JI=Math.sin(((90+I1)+
aStartAngle)*A.k$)*All;JB=Math.cos(((90+I1)+aStartAngle)*A.k$)*All;Agh=(-BY*JB)+(
BI*JI);Agi=(-BI*JB)-(BY*JI);Agj=BI*JI;Agk=-BI*JB;Al4=-BY*JB;Al5=-BY*JI;if(!I1)LA=[
aX,-10000,10000,aY];else if(I1===90)LA=[aX,aY,10000,10000];else if(I1===180)LA=[-
10000,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhR(A.lb(aClip,LA),this.WI,0
,Agh+aX,Agi+aY,1,Agj+aX,Agk+aY,1,aX,aY,1,Al4+aX,Al5+aY,1,[0,0,BY,BI],B3,B3,B3,B3
,aBlend,true);I1=I1+90;if(I1>=360)I1=I1-360;Xd=Xd-(90-aStartAngle);}while(Xd>=90
){JI=Math.sin((90+I1)*A.k$)*All;JB=Math.cos((90+I1)*A.k$)*All;Agh=(-BY*JB)+(BI*JI
);Agi=(-BI*JB)-(BY*JI);Agj=BI*JI;Agk=-BI*JB;Al4=-BY*JB;Al5=-BY*JI;if(!I1)LA=[aX,-
10000,10000,aY];else if(I1===90)LA=[aX,aY,10000,10000];else if(I1===180)LA=[-10000
,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhR(A.lb(aClip,LA),this.WI,0,Agh+
aX,Agi+aY,1,Agj+aX,Agk+aY,1,aX,aY,1,Al4+aX,Al5+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend
,true);I1=I1+90;if(I1>=360)I1=I1-360;Xd=Xd-90;}JI=Math.sin((Xd+I1)*A.k$)*All;JB=
Math.cos((Xd+I1)*A.k$)*All;Agh=(-BY*JB)+(BI*JI);Agi=(-BI*JB)-(BY*JI);Agj=BI*JI;Agk=-
BI*JB;Al4=-BY*JB;Al5=-BY*JI;if(!I1)LA=[aX,-10000,10000,aY];else if(I1===90)LA=[aX
,aY,10000,10000];else if(I1===180)LA=[-10000,aY,aX,10000];else LA=[-10000,-10000
,aX,aY];CY.AhR(A.lb(aClip,LA),this.WI,0,Agh+aX,Agi+aY,1,Agj+aX,Agk+aY,1,aX,aY,1,
Al4+aX,Al5+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend,true);}},Ab5:function(E){var B;this.
N3=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SJ;this.H(IU);this.WI=A.aaL(C.
ATP);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ago)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N3)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATP={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUf={K0:null,MT:null,AY:10,AGY:0,Os:function(A_,aColor){var Hg;
Hg=A._NewObject(C.Record,0);Hg.A5=A_;Hg.AQ=aColor;if(!this.K0){this.K0=Hg;this.MT=
Hg;this.AY=1;}else{this.MT.Ah=Hg;this.MT=Hg;this.AY=this.AY+1;}this.AGY=this.AGY+
A_;},_Init:function(aArg){this.__proto__=C.AUf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATQ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SJ.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARs[0]._this)&&(B._cycle!=D))B._Done(C.ARs[0].
_this=null);if((B=C.ATP[0]._this)&&(B._cycle!=D))B._Done(C.ATP[0]._this=null);if((
B=C.ATQ[0]._this)&&(B._cycle!=D))B._Done(C.ATQ[0]._this=null);if((B=C.ACz[0]._this
)&&(B._cycle!=D))B._Done(C.ACz[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */