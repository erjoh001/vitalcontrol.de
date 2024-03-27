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
C.A5k={Ah:null,P1:0,P2:0,_Init:function(aArg){this.__proto__=C.A5k;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Ard:null,Pr:null,Background:null,Are:0xFFFFFFFF,Arf:3,AmD:0xFFFFFFFF
,AmE:0,Aa8:A.wf,Ar_:Cc,A4T:0xFF000000,ADj:0xFF6E0E0C,AG2:0xFF6E0E0C,OD:BD,Aqz:0,
Kl:function(CY,aClip,aOffset,Ci,aBlend){var B;var XA=0;var XB=0;var AAC=0;var AAD=
0;var Rz=this.M[0]+aOffset[0];var RA=this.M[1]+aOffset[1];var Ao2=this.AmD;var App=
this.Are;var Apl=this.ADj;var Ap4=this.AG2;var AlK=this.Arf/2;var Ry=this.AmE/2;
var Ke=(((Ci+1)*this.G7)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ke<256){Ao2=(
Ao2&0x00FFFFFF)|((((((Ao2>>24)&0xFF)*Ke)>>8)&0xFF)<<24);App=(App&0x00FFFFFF)|((((((
App>>24)&0xFF)*Ke)>>8)&0xFF)<<24);Apl=(Apl&0x00FFFFFF)|((((((Apl>>24)&0xFF)*Ke)>>
8)&0xFF)<<24);Ap4=(Ap4&0x00FFFFFF)|((((((Ap4>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}A.Core.
P.Kl.call(this,CY,aClip,aOffset,Ci,aBlend);if(((this.ADj>>24)&0xFF)>0){var Dg;for(
Dg=this.Aa8[1]+RA;Dg>=RA;Dg=Dg-this.OD[1])CY.AuU(aClip,[Rz,Dg],[Rz+((B=this.M)[2
]-B[0]),Dg],Apl,Apl,aBlend);for(Dg=(this.Aa8[1]+RA)+this.OD[1];Dg<(RA+((B=this.M
)[3]-B[1]));Dg=Dg+this.OD[1])CY.AuU(aClip,[Rz,Dg],[Rz+((B=this.M)[2]-B[0]),Dg],Apl
,Apl,aBlend);}if(((this.AG2>>24)&0xFF)>0){var Eo;for(Eo=this.Aa8[0]+Rz;Eo>=Rz;Eo=
Eo-this.OD[0])CY.AuU(aClip,[Eo,RA],[Eo,RA+((B=this.M)[3]-B[1])],Ap4,Ap4,aBlend);
for(Eo=(this.Aa8[0]+Rz)+this.OD[0];Eo<(Rz+((B=this.M)[2]-B[0]));Eo=Eo+this.OD[0]
)CY.AuU(aClip,[Eo,RA],[Eo,RA+((B=this.M)[3]-B[1])],Ap4,Ap4,aBlend);}if(!this.EZ)
return;var Jy=this.EZ.AlA;if(!!Jy){XA=(Rz+this.Aa8[0])+(Jy.P1*this.Ar_[0]);XB=(RA+
this.Aa8[1])+(Jy.P2*this.Ar_[1]);Jy=Jy.Ah;}while(!!Jy){AAC=(Rz+this.Aa8[0])+(Jy.
P1*this.Ar_[0]);AAD=(RA+this.Aa8[1])+(Jy.P2*this.Ar_[1]);var J7=AAC-XA;var J8=AAD-
XB;var IW=Math.sqrt((J7*J7)+(J8*J8));if(!!IW){J7=J7/IW;J8=J8/IW;}if(!!this.Ard)CY.
AhQ(aClip,this.Ard,0,XA-(J8*AlK),XB+(J7*AlK),1,XA+(J8*AlK),XB-(J7*AlK),1,AAC+(J8
*AlK),AAD-(J7*AlK),1,AAC-(J8*AlK),AAD+(J7*AlK),1,[0,0,this.Ard.FrameSize[0],this.
Ard.FrameSize[1]],App,App,App,App,aBlend,true);if((this.AmE>0)&&!!this.Pr)CY.AhQ(
aClip,this.Pr,this.Aqz,XA-Ry,XB-Ry,1,XA+Ry,XB-Ry,1,XA+Ry,XB+Ry,1,XA-Ry,XB+Ry,1,[
0,0,this.Pr.FrameSize[0],this.Pr.FrameSize[1]],Ao2,Ao2,Ao2,Ao2,aBlend,true);XA=AAC;
XB=AAD;Jy=Jy.Ah;}if((this.AmE>0)&&!!this.Pr)CY.AhQ(aClip,this.Pr,this.Aqz,XA-Ry,
XB-Ry,1,XA+Ry,XB-Ry,1,XA+Ry,XB+Ry,1,XA-Ry,XB+Ry,1,[0,0,this.Pr.FrameSize[0],this.
Pr.FrameSize[1]],this.AmD,this.AmD,this.AmD,this.AmD,aBlend,true);},AeV:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASZ:function(
E){var B;if(E===this.Are)return;this.Are=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS0:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arf=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Blq:function(E){var B;if(E===this.AmD)return;
this.AmD=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASO:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmE=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bll:
function(E){var B;if(A.aaX(E,this.Aa8))return;this.Aa8=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BmG:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ar_))return;this.Ar_=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bk$:function(E){if(E===this.A4T)return;this.A4T=E;this.Background.L(E);
},BlZ:function(E){var B;if(E===this.ADj)return;this.ADj=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bm2:function(E){var B;if(E===this.AG2)return;this.AG2=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Ans:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OD))return;this.OD=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASM:function(E){var B;if(E===this.Pr)return;this.
Pr=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASN:function(E){var B;if(E<0)
E=0;this.Aqz=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E6);this.Background.AZ(0x3F);this.Background.H(Hp);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Ard=A.aaL(C.ARe);this.Pr=
A.aaL(C.ACr);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ard)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.AB_={AlA:null,Az5:
null,AY:0,AD4:10,Yb:function(){this.AlA=null;this.Az5=null;this.AY=0;},Ap$:function(
aX,aY){var Jy=null;if((this.AD4>0)&&(this.AY===this.AD4)){Jy=this.AlA;this.AlA=Jy.
Ah;Jy.Ah=null;this.AY=this.AY-1;}else Jy=A._NewObject(C.A5k,0);Jy.P1=aX;Jy.P2=aY;
if(!this.AlA){this.AlA=Jy;this.Az5=Jy;this.AY=1;}else{this.Az5.Ah=Jy;this.Az5=Jy;
this.AY=this.AY+1;}},AwI:function(E){if(E<1)E=1;this.AD4=E;},_Init:function(aArg
){this.__proto__=C.AB_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlA)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SG={WF:null,Agm:null,N2:null,AF0:270,AGj:1,Kl:function(CY,aClip,aOffset
,Ci,aBlend){var Vi;var Bcl;Vi=0;Bcl=this.AF0;while(Vi<0)Vi=Vi+360;while(Vi>=360)
Vi=Vi-360;var Rz=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RA=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kl.call(this,CY,aClip,aOffset,Ci,aBlend);if(!!this.
N2&&(this.N2.AGR>0)){var Hf=this.N2.KZ;while(!!Hf){var FC=(Hf.A4/this.N2.AGR)*Bcl;
this.Bcr(CY,aClip,Rz,RA,Vi,FC,this.AGj,0,Hf.AQ,Ci,aBlend);Vi=Vi+FC;if(Vi>=360)Vi=
Vi-360;Hf=Hf.Ah;}}else this.Bcr(CY,aClip,Rz,RA,Vi,this.AF0,this.AGj,0,0xFF800000
,Ci,aBlend);},BmF:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF0)return;
this.AF0=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmQ:function(E){var B;if(
E===this.WF)return;this.WF=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BmP:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGj)return;this.AGj=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bcr:function(CY,aClip,aX,aY,aStartAngle
,Xc,Ale,A0r,aColor,Ci,aBlend){var B;var JG;var Jz;var Agf;var Agg;var Agh;var Agi;
var BeX;var BeY;var AlY;var AlZ;var LA;var B2=aColor;var Ke=(((Ci+1)*this.G7)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ke<256)B2=(B2&0x00FFFFFF)|((((((B2>>24
)&0xFF)*Ke)>>8)&0xFF)<<24);if(!this.WF)return;var BX=this.WF.FrameSize[0];var BI=
this.WF.FrameSize[1];var IZ=0;if(Xc>=360){aStartAngle=0;Xc=360;}if(A0r>0){var Bcn=
aStartAngle+(Xc/2);JG=Math.sin(Bcn*A.k$);Jz=Math.cos(Bcn*A.k$);aX=aX+((A0r*JG)|0
);aY=aY-((A0r*Jz)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IZ=IZ+90;
}if(!this.Agm||!A.aaX(this.Agm.FrameSize,this.WF.FrameSize)){this.Agm=A._NewObject(
A.Graphics.Canvas,0);this.Agm.ArI(this.WF.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xc)<90)){JG=Math.sin(Xc*A.k$);Jz=Math.cos(Xc*A.k$);Agf=(-BX*Jz)+(BI*JG);Agg=(-BI
*Jz)-(BX*JG);Agh=BI*JG;Agi=-BI*Jz;AlY=-BX*Jz;AlZ=-BX*JG;this.Agm.Au9([0,0,BX,BI]
,[0,0,this.Agm.FrameSize[0],this.Agm.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agm.AhQ([0,0,BX,BI],this.WF,0,Agf,Agg+BI,1,Agh,Agi+BI,1,
0,BI,1,AlY,AlZ+BI,1,[0,0,BX,BI],B2,B2,B2,B2,true,true);JG=Math.sin((aStartAngle+
IZ)*A.k$)*Ale;Jz=Math.cos((aStartAngle+IZ)*A.k$)*Ale;Agf=BI*JG;Agg=-BI*Jz;Agh=(BX
*Jz)+(BI*JG);Agi=(-BI*Jz)+(BX*JG);BeX=BX*Jz;BeY=BX*JG;CY.AhQ(aClip,this.Agm,0,Agf+
aX,Agg+aY,1,Agh+aX,Agi+aY,1,BeX+aX,BeY+aY,1,aX,aY,1,[0,0,BX,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JG=Math.sin(((90+IZ)+
aStartAngle)*A.k$)*Ale;Jz=Math.cos(((90+IZ)+aStartAngle)*A.k$)*Ale;Agf=(-BX*Jz)+(
BI*JG);Agg=(-BI*Jz)-(BX*JG);Agh=BI*JG;Agi=-BI*Jz;AlY=-BX*Jz;AlZ=-BX*JG;if(!IZ)LA=[
aX,-10000,10000,aY];else if(IZ===90)LA=[aX,aY,10000,10000];else if(IZ===180)LA=[-
10000,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WF,0
,Agf+aX,Agg+aY,1,Agh+aX,Agi+aY,1,aX,aY,1,AlY+aX,AlZ+aY,1,[0,0,BX,BI],B2,B2,B2,B2
,aBlend,true);IZ=IZ+90;if(IZ>=360)IZ=IZ-360;Xc=Xc-(90-aStartAngle);}while(Xc>=90
){JG=Math.sin((90+IZ)*A.k$)*Ale;Jz=Math.cos((90+IZ)*A.k$)*Ale;Agf=(-BX*Jz)+(BI*JG
);Agg=(-BI*Jz)-(BX*JG);Agh=BI*JG;Agi=-BI*Jz;AlY=-BX*Jz;AlZ=-BX*JG;if(!IZ)LA=[aX,-
10000,10000,aY];else if(IZ===90)LA=[aX,aY,10000,10000];else if(IZ===180)LA=[-10000
,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WF,0,Agf+
aX,Agg+aY,1,Agh+aX,Agi+aY,1,aX,aY,1,AlY+aX,AlZ+aY,1,[0,0,BX,BI],B2,B2,B2,B2,aBlend
,true);IZ=IZ+90;if(IZ>=360)IZ=IZ-360;Xc=Xc-90;}JG=Math.sin((Xc+IZ)*A.k$)*Ale;Jz=
Math.cos((Xc+IZ)*A.k$)*Ale;Agf=(-BX*Jz)+(BI*JG);Agg=(-BI*Jz)-(BX*JG);Agh=BI*JG;Agi=-
BI*Jz;AlY=-BX*Jz;AlZ=-BX*JG;if(!IZ)LA=[aX,-10000,10000,aY];else if(IZ===90)LA=[aX
,aY,10000,10000];else if(IZ===180)LA=[-10000,aY,aX,10000];else LA=[-10000,-10000
,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WF,0,Agf+aX,Agg+aY,1,Agh+aX,Agi+aY,1,aX,aY,1,
AlY+aX,AlZ+aY,1,[0,0,BX,BI],B2,B2,B2,B2,aBlend,true);}},Ab3:function(E){var B;this.
N2=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SG;this.H(IS);this.WF=A.aaL(C.
ATB);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WF)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AT2={KZ:null,MS:null,AY:10,AGR:0,Or:function(A9,aColor){var Hf;
Hf=A._NewObject(C.Record,0);Hf.A4=A9;Hf.AQ=aColor;if(!this.KZ){this.KZ=Hf;this.MS=
Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}this.AGR=this.AGR+
A9;},_Init:function(aArg){this.__proto__=C.AT2;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATC={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SG.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARe[0]._this)&&(B._cycle!=D))B._Done(C.ARe[0].
_this=null);if((B=C.ATB[0]._this)&&(B._cycle!=D))B._Done(C.ATB[0]._this=null);if((
B=C.ATC[0]._this)&&(B._cycle!=D))B._Done(C.ATC[0]._this=null);if((B=C.ACr[0]._this
)&&(B._cycle!=D))B._Done(C.ACr[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */