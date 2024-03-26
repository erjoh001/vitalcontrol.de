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
var Cc=[10,10];var BD=[80,50];var E6=[0,0,360,240];var Hp=[0,0,370,270];var IS=[0
,0,260,240];
C.A5l={Ah:null,P0:0,P1:0,_Init:function(aArg){this.__proto__=C.A5l;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={E0:null,Ard:null,Pr:null,Background:null,Are:0xFFFFFFFF,Arf:3,AmD:0xFFFFFFFF
,AmE:0,Aa8:A.wf,Ar_:Cc,A4U:0xFF000000,ADj:0xFF6E0E0C,AG2:0xFF6E0E0C,OD:BD,Aqz:0,
Kk:function(CY,aClip,aOffset,Ci,aBlend){var B;var Xz=0;var XA=0;var AAC=0;var AAD=
0;var RA=this.M[0]+aOffset[0];var RB=this.M[1]+aOffset[1];var Ao2=this.AmD;var App=
this.Are;var Apl=this.ADj;var Ap4=this.AG2;var AlK=this.Arf/2;var Rz=this.AmE/2;
var Kd=(((Ci+1)*this.G7)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kd<256){Ao2=(
Ao2&0x00FFFFFF)|((((((Ao2>>24)&0xFF)*Kd)>>8)&0xFF)<<24);App=(App&0x00FFFFFF)|((((((
App>>24)&0xFF)*Kd)>>8)&0xFF)<<24);Apl=(Apl&0x00FFFFFF)|((((((Apl>>24)&0xFF)*Kd)>>
8)&0xFF)<<24);Ap4=(Ap4&0x00FFFFFF)|((((((Ap4>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}A.Core.
P.Kk.call(this,CY,aClip,aOffset,Ci,aBlend);if(((this.ADj>>24)&0xFF)>0){var Dg;for(
Dg=this.Aa8[1]+RB;Dg>=RB;Dg=Dg-this.OD[1])CY.AuT(aClip,[RA,Dg],[RA+((B=this.M)[2
]-B[0]),Dg],Apl,Apl,aBlend);for(Dg=(this.Aa8[1]+RB)+this.OD[1];Dg<(RB+((B=this.M
)[3]-B[1]));Dg=Dg+this.OD[1])CY.AuT(aClip,[RA,Dg],[RA+((B=this.M)[2]-B[0]),Dg],Apl
,Apl,aBlend);}if(((this.AG2>>24)&0xFF)>0){var Eo;for(Eo=this.Aa8[0]+RA;Eo>=RA;Eo=
Eo-this.OD[0])CY.AuT(aClip,[Eo,RB],[Eo,RB+((B=this.M)[3]-B[1])],Ap4,Ap4,aBlend);
for(Eo=(this.Aa8[0]+RA)+this.OD[0];Eo<(RA+((B=this.M)[2]-B[0]));Eo=Eo+this.OD[0]
)CY.AuT(aClip,[Eo,RB],[Eo,RB+((B=this.M)[3]-B[1])],Ap4,Ap4,aBlend);}if(!this.E0)
return;var Jx=this.E0.AlA;if(!!Jx){Xz=(RA+this.Aa8[0])+(Jx.P0*this.Ar_[0]);XA=(RB+
this.Aa8[1])+(Jx.P1*this.Ar_[1]);Jx=Jx.Ah;}while(!!Jx){AAC=(RA+this.Aa8[0])+(Jx.
P0*this.Ar_[0]);AAD=(RB+this.Aa8[1])+(Jx.P1*this.Ar_[1]);var J6=AAC-Xz;var J7=AAD-
XA;var IW=Math.sqrt((J6*J6)+(J7*J7));if(!!IW){J6=J6/IW;J7=J7/IW;}if(!!this.Ard)CY.
AhQ(aClip,this.Ard,0,Xz-(J7*AlK),XA+(J6*AlK),1,Xz+(J7*AlK),XA-(J6*AlK),1,AAC+(J7
*AlK),AAD-(J6*AlK),1,AAC-(J7*AlK),AAD+(J6*AlK),1,[0,0,this.Ard.FrameSize[0],this.
Ard.FrameSize[1]],App,App,App,App,aBlend,true);if((this.AmE>0)&&!!this.Pr)CY.AhQ(
aClip,this.Pr,this.Aqz,Xz-Rz,XA-Rz,1,Xz+Rz,XA-Rz,1,Xz+Rz,XA+Rz,1,Xz-Rz,XA+Rz,1,[
0,0,this.Pr.FrameSize[0],this.Pr.FrameSize[1]],Ao2,Ao2,Ao2,Ao2,aBlend,true);Xz=AAC;
XA=AAD;Jx=Jx.Ah;}if((this.AmE>0)&&!!this.Pr)CY.AhQ(aClip,this.Pr,this.Aqz,Xz-Rz,
XA-Rz,1,Xz+Rz,XA-Rz,1,Xz+Rz,XA+Rz,1,Xz-Rz,XA+Rz,1,[0,0,this.Pr.FrameSize[0],this.
Pr.FrameSize[1]],this.AmD,this.AmD,this.AmD,this.AmD,aBlend,true);},AeV:function(
E){var B;this.E0=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS0:function(
E){var B;if(E===this.Are)return;this.Are=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS1:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arf=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Blr:function(E){var B;if(E===this.AmD)return;
this.AmD=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASP:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmE=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Blm:
function(E){var B;if(A.aaX(E,this.Aa8))return;this.Aa8=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BmH:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ar_))return;this.Ar_=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bla:function(E){if(E===this.A4U)return;this.A4U=E;this.Background.L(E);
},Bl0:function(E){var B;if(E===this.ADj)return;this.ADj=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bm3:function(E){var B;if(E===this.AG2)return;this.AG2=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ans:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OD))return;this.OD=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASN:function(E){var B;if(E===this.Pr)return;this.
Pr=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASO:function(E){var B;if(E<0)
E=0;this.Aqz=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E6);this.Background.AZ(0x3F);this.Background.H(Hp);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Ard=A.aaL(C.ARf);this.Pr=
A.aaL(C.ACr);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.E0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ard)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.AB_={AlA:null,Az5:
null,AY:0,AD4:10,Yb:function(){this.AlA=null;this.Az5=null;this.AY=0;},Ap$:function(
aX,aY){var Jx=null;if((this.AD4>0)&&(this.AY===this.AD4)){Jx=this.AlA;this.AlA=Jx.
Ah;Jx.Ah=null;this.AY=this.AY-1;}else Jx=A._NewObject(C.A5l,0);Jx.P0=aX;Jx.P1=aY;
if(!this.AlA){this.AlA=Jx;this.Az5=Jx;this.AY=1;}else{this.Az5.Ah=Jx;this.Az5=Jx;
this.AY=this.AY+1;}},AwH:function(E){if(E<1)E=1;this.AD4=E;},_Init:function(aArg
){this.__proto__=C.AB_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlA)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SI={WF:null,Agm:null,N2:null,AF0:270,AGj:1,Kk:function(CY,aClip,aOffset
,Ci,aBlend){var Vi;var Bcm;Vi=0;Bcm=this.AF0;while(Vi<0)Vi=Vi+360;while(Vi>=360)
Vi=Vi-360;var RA=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RB=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kk.call(this,CY,aClip,aOffset,Ci,aBlend);if(!!this.
N2&&(this.N2.AGR>0)){var Hf=this.N2.KZ;while(!!Hf){var FC=(Hf.A4/this.N2.AGR)*Bcm;
this.Bcs(CY,aClip,RA,RB,Vi,FC,this.AGj,0,Hf.AQ,Ci,aBlend);Vi=Vi+FC;if(Vi>=360)Vi=
Vi-360;Hf=Hf.Ah;}}else this.Bcs(CY,aClip,RA,RB,Vi,this.AF0,this.AGj,0,0xFF800000
,Ci,aBlend);},BmG:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF0)return;
this.AF0=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmR:function(E){var B;if(
E===this.WF)return;this.WF=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmQ:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGj)return;this.AGj=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bcs:function(CY,aClip,aX,aY,aStartAngle
,Xb,Ale,A0s,aColor,Ci,aBlend){var B;var JF;var Jy;var Agf;var Agg;var Agh;var Agi;
var BeY;var BeZ;var AlY;var AlZ;var LA;var B3=aColor;var Kd=(((Ci+1)*this.G7)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kd<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Kd)>>8)&0xFF)<<24);if(!this.WF)return;var BY=this.WF.FrameSize[0];var BI=
this.WF.FrameSize[1];var IZ=0;if(Xb>=360){aStartAngle=0;Xb=360;}if(A0s>0){var Bco=
aStartAngle+(Xb/2);JF=Math.sin(Bco*A.k$);Jy=Math.cos(Bco*A.k$);aX=aX+((A0s*JF)|0
);aY=aY-((A0s*Jy)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IZ=IZ+90;
}if(!this.Agm||!A.aaX(this.Agm.FrameSize,this.WF.FrameSize)){this.Agm=A._NewObject(
A.Graphics.Canvas,0);this.Agm.ArI(this.WF.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xb)<90)){JF=Math.sin(Xb*A.k$);Jy=Math.cos(Xb*A.k$);Agf=(-BY*Jy)+(BI*JF);Agg=(-BI
*Jy)-(BY*JF);Agh=BI*JF;Agi=-BI*Jy;AlY=-BY*Jy;AlZ=-BY*JF;this.Agm.Au8([0,0,BY,BI]
,[0,0,this.Agm.FrameSize[0],this.Agm.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agm.AhQ([0,0,BY,BI],this.WF,0,Agf,Agg+BI,1,Agh,Agi+BI,1,
0,BI,1,AlY,AlZ+BI,1,[0,0,BY,BI],B3,B3,B3,B3,true,true);JF=Math.sin((aStartAngle+
IZ)*A.k$)*Ale;Jy=Math.cos((aStartAngle+IZ)*A.k$)*Ale;Agf=BI*JF;Agg=-BI*Jy;Agh=(BY
*Jy)+(BI*JF);Agi=(-BI*Jy)+(BY*JF);BeY=BY*Jy;BeZ=BY*JF;CY.AhQ(aClip,this.Agm,0,Agf+
aX,Agg+aY,1,Agh+aX,Agi+aY,1,BeY+aX,BeZ+aY,1,aX,aY,1,[0,0,BY,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JF=Math.sin(((90+IZ)+
aStartAngle)*A.k$)*Ale;Jy=Math.cos(((90+IZ)+aStartAngle)*A.k$)*Ale;Agf=(-BY*Jy)+(
BI*JF);Agg=(-BI*Jy)-(BY*JF);Agh=BI*JF;Agi=-BI*Jy;AlY=-BY*Jy;AlZ=-BY*JF;if(!IZ)LA=[
aX,-10000,10000,aY];else if(IZ===90)LA=[aX,aY,10000,10000];else if(IZ===180)LA=[-
10000,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WF,0
,Agf+aX,Agg+aY,1,Agh+aX,Agi+aY,1,aX,aY,1,AlY+aX,AlZ+aY,1,[0,0,BY,BI],B3,B3,B3,B3
,aBlend,true);IZ=IZ+90;if(IZ>=360)IZ=IZ-360;Xb=Xb-(90-aStartAngle);}while(Xb>=90
){JF=Math.sin((90+IZ)*A.k$)*Ale;Jy=Math.cos((90+IZ)*A.k$)*Ale;Agf=(-BY*Jy)+(BI*JF
);Agg=(-BI*Jy)-(BY*JF);Agh=BI*JF;Agi=-BI*Jy;AlY=-BY*Jy;AlZ=-BY*JF;if(!IZ)LA=[aX,-
10000,10000,aY];else if(IZ===90)LA=[aX,aY,10000,10000];else if(IZ===180)LA=[-10000
,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WF,0,Agf+
aX,Agg+aY,1,Agh+aX,Agi+aY,1,aX,aY,1,AlY+aX,AlZ+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend
,true);IZ=IZ+90;if(IZ>=360)IZ=IZ-360;Xb=Xb-90;}JF=Math.sin((Xb+IZ)*A.k$)*Ale;Jy=
Math.cos((Xb+IZ)*A.k$)*Ale;Agf=(-BY*Jy)+(BI*JF);Agg=(-BI*Jy)-(BY*JF);Agh=BI*JF;Agi=-
BI*Jy;AlY=-BY*Jy;AlZ=-BY*JF;if(!IZ)LA=[aX,-10000,10000,aY];else if(IZ===90)LA=[aX
,aY,10000,10000];else if(IZ===180)LA=[-10000,aY,aX,10000];else LA=[-10000,-10000
,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WF,0,Agf+aX,Agg+aY,1,Agh+aX,Agi+aY,1,aX,aY,1,
AlY+aX,AlZ+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend,true);}},Ab3:function(E){var B;this.
N2=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SI;this.H(IS);this.WF=A.aaL(C.
ATC);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WF)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AT3={KZ:null,MS:null,AY:10,AGR:0,Or:function(A9,aColor){var Hf;
Hf=A._NewObject(C.Record,0);Hf.A4=A9;Hf.AQ=aColor;if(!this.KZ){this.KZ=Hf;this.MS=
Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}this.AGR=this.AGR+
A9;},_Init:function(aArg){this.__proto__=C.AT3;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SI.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARf[0]._this)&&(B._cycle!=D))B._Done(C.ARf[0].
_this=null);if((B=C.ATC[0]._this)&&(B._cycle!=D))B._Done(C.ATC[0]._this=null);if((
B=C.ATD[0]._this)&&(B._cycle!=D))B._Done(C.ATD[0]._this=null);if((B=C.ACr[0]._this
)&&(B._cycle!=D))B._Done(C.ACr[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */