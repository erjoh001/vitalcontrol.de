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
var Cc=[10,10];var BF=[80,50];var E4=[0,0,360,240];var Hm=[0,0,370,270];var IQ=[0
,0,260,240];
C.A5y={Ah:null,PY:0,PZ:0,_Init:function(aArg){this.__proto__=C.A5y;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Ari:null,Pq:null,Background:null,Arj:0xFFFFFFFF,Ark:3,AmK:0xFFFFFFFF
,AmL:0,Aba:A.wf,Ase:Cc,A47:0xFF000000,ADn:0xFF6E0E0C,AG9:0xFF6E0E0C,OE:BF,AqF:0,
Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;var XD=0;var XE=0;var AAH=0;var AAI=
0;var Ry=this.M[0]+aOffset[0];var Rz=this.M[1]+aOffset[1];var Ao9=this.AmK;var Apv=
this.Arj;var Apr=this.ADn;var Ap$=this.AG9;var AlR=this.Ark/2;var Rx=this.AmL/2;
var Ke=(((Ci+1)*this.G3)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ke<256){Ao9=(
Ao9&0x00FFFFFF)|((((((Ao9>>24)&0xFF)*Ke)>>8)&0xFF)<<24);Apv=(Apv&0x00FFFFFF)|((((((
Apv>>24)&0xFF)*Ke)>>8)&0xFF)<<24);Apr=(Apr&0x00FFFFFF)|((((((Apr>>24)&0xFF)*Ke)>>
8)&0xFF)<<24);Ap$=(Ap$&0x00FFFFFF)|((((((Ap$>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}A.Core.
P.Kk.call(this,CZ,aClip,aOffset,Ci,aBlend);if(((this.ADn>>24)&0xFF)>0){var Dg;for(
Dg=this.Aba[1]+Rz;Dg>=Rz;Dg=Dg-this.OE[1])CZ.Au1(aClip,[Ry,Dg],[Ry+((B=this.M)[2
]-B[0]),Dg],Apr,Apr,aBlend);for(Dg=(this.Aba[1]+Rz)+this.OE[1];Dg<(Rz+((B=this.M
)[3]-B[1]));Dg=Dg+this.OE[1])CZ.Au1(aClip,[Ry,Dg],[Ry+((B=this.M)[2]-B[0]),Dg],Apr
,Apr,aBlend);}if(((this.AG9>>24)&0xFF)>0){var En;for(En=this.Aba[0]+Ry;En>=Ry;En=
En-this.OE[0])CZ.Au1(aClip,[En,Rz],[En,Rz+((B=this.M)[3]-B[1])],Ap$,Ap$,aBlend);
for(En=(this.Aba[0]+Ry)+this.OE[0];En<(Ry+((B=this.M)[2]-B[0]));En=En+this.OE[0]
)CZ.Au1(aClip,[En,Rz],[En,Rz+((B=this.M)[3]-B[1])],Ap$,Ap$,aBlend);}if(!this.EZ)
return;var Jw=this.EZ.AlH;if(!!Jw){XD=(Ry+this.Aba[0])+(Jw.PY*this.Ase[0]);XE=(Rz+
this.Aba[1])+(Jw.PZ*this.Ase[1]);Jw=Jw.Ah;}while(!!Jw){AAH=(Ry+this.Aba[0])+(Jw.
PY*this.Ase[0]);AAI=(Rz+this.Aba[1])+(Jw.PZ*this.Ase[1]);var J7=AAH-XD;var J8=AAI-
XE;var IU=Math.sqrt((J7*J7)+(J8*J8));if(!!IU){J7=J7/IU;J8=J8/IU;}if(!!this.Ari)CZ.
AhO(aClip,this.Ari,0,XD-(J8*AlR),XE+(J7*AlR),1,XD+(J8*AlR),XE-(J7*AlR),1,AAH+(J8
*AlR),AAI-(J7*AlR),1,AAH-(J8*AlR),AAI+(J7*AlR),1,[0,0,this.Ari.FrameSize[0],this.
Ari.FrameSize[1]],Apv,Apv,Apv,Apv,aBlend,true);if((this.AmL>0)&&!!this.Pq)CZ.AhO(
aClip,this.Pq,this.AqF,XD-Rx,XE-Rx,1,XD+Rx,XE-Rx,1,XD+Rx,XE+Rx,1,XD-Rx,XE+Rx,1,[
0,0,this.Pq.FrameSize[0],this.Pq.FrameSize[1]],Ao9,Ao9,Ao9,Ao9,aBlend,true);XD=AAH;
XE=AAI;Jw=Jw.Ah;}if((this.AmL>0)&&!!this.Pq)CZ.AhO(aClip,this.Pq,this.AqF,XD-Rx,
XE-Rx,1,XD+Rx,XE-Rx,1,XD+Rx,XE+Rx,1,XD-Rx,XE+Rx,1,[0,0,this.Pq.FrameSize[0],this.
Pq.FrameSize[1]],this.AmK,this.AmK,this.AmK,this.AmK,aBlend,true);},AeX:function(
E){var B;this.EZ=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS5:function(
E){var B;if(E===this.Arj)return;this.Arj=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS6:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Ark=E;this.Bi([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlL:function(E){var B;if(E===this.AmK)return;
this.AmK=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASU:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmL=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlF:
function(E){var B;if(A.aaX(E,this.Aba))return;this.Aba=E;this.Bi([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bm1:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ase))return;this.Ase=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Blt:function(E){if(E===this.A47)return;this.A47=E;this.Background.L(E);
},Bmi:function(E){var B;if(E===this.ADn)return;this.ADn=E;this.Bi([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bnl:function(E){var B;if(E===this.AG9)return;this.AG9=E;
this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnB:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OE))return;this.OE=E;this.Bi([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASS:function(E){var B;if(E===this.Pq)return;this.
Pq=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AST:function(E){var B;if(E<0)
E=0;this.AqF=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E4);this.Background.AZ(0x3F);this.Background.H(Hm);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Ari=A.aaL(C.ARj);this.Pq=
A.aaL(C.ACv);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ari)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACb={AlH:null,Az_:
null,AY:0,AD8:10,Yh:function(){this.AlH=null;this.Az_=null;this.AY=0;},Aqg:function(
aX,aY){var Jw=null;if((this.AD8>0)&&(this.AY===this.AD8)){Jw=this.AlH;this.AlH=Jw.
Ah;Jw.Ah=null;this.AY=this.AY-1;}else Jw=A._NewObject(C.A5y,0);Jw.PY=aX;Jw.PZ=aY;
if(!this.AlH){this.AlH=Jw;this.Az_=Jw;this.AY=1;}else{this.Az_.Ah=Jw;this.Az_=Jw;
this.AY=this.AY+1;}},AwO:function(E){if(E<1)E=1;this.AD8=E;},_Init:function(aArg
){this.__proto__=C.ACb;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlH)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SC={WI:null,Agj:null,N2:null,AF6:270,AGp:1,Kk:function(CZ,aClip,aOffset
,Ci,aBlend){var Vi;var BcF;Vi=0;BcF=this.AF6;while(Vi<0)Vi=Vi+360;while(Vi>=360)
Vi=Vi-360;var Ry=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Rz=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kk.call(this,CZ,aClip,aOffset,Ci,aBlend);if(!!this.
N2&&(this.N2.AGX>0)){var Hb=this.N2.K0;while(!!Hb){var Fz=(Hb.A4/this.N2.AGX)*BcF;
this.BcL(CZ,aClip,Ry,Rz,Vi,Fz,this.AGp,0,Hb.AQ,Ci,aBlend);Vi=Vi+Fz;if(Vi>=360)Vi=
Vi-360;Hb=Hb.Ah;}}else this.BcL(CZ,aClip,Ry,Rz,Vi,this.AF6,this.AGp,0,0xFF800000
,Ci,aBlend);},Bm0:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF6)return;
this.AF6=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm$:function(E){var B;if(
E===this.WI)return;this.WI=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm_:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGp)return;this.AGp=E;this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcL:function(CZ,aClip,aX,aY,aStartAngle
,Xe,All,A0E,aColor,Ci,aBlend){var B;var JE;var Jx;var Agd;var Age;var Agf;var Agg;
var Bfe;var Bff;var Al4;var Al5;var LB;var B3=aColor;var Ke=(((Ci+1)*this.G3)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ke<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Ke)>>8)&0xFF)<<24);if(!this.WI)return;var BY=this.WI.FrameSize[0];var BL=
this.WI.FrameSize[1];var IX=0;if(Xe>=360){aStartAngle=0;Xe=360;}if(A0E>0){var BcH=
aStartAngle+(Xe/2);JE=Math.sin(BcH*A.k$);Jx=Math.cos(BcH*A.k$);aX=aX+((A0E*JE)|0
);aY=aY-((A0E*Jx)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IX=IX+90;
}if(!this.Agj||!A.aaX(this.Agj.FrameSize,this.WI.FrameSize)){this.Agj=A._NewObject(
A.Graphics.Canvas,0);this.Agj.ArO(this.WI.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xe)<90)){JE=Math.sin(Xe*A.k$);Jx=Math.cos(Xe*A.k$);Agd=(-BY*Jx)+(BL*JE);Age=(-BL
*Jx)-(BY*JE);Agf=BL*JE;Agg=-BL*Jx;Al4=-BY*Jx;Al5=-BY*JE;this.Agj.Ave([0,0,BY,BL]
,[0,0,this.Agj.FrameSize[0],this.Agj.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agj.AhO([0,0,BY,BL],this.WI,0,Agd,Age+BL,1,Agf,Agg+BL,1,
0,BL,1,Al4,Al5+BL,1,[0,0,BY,BL],B3,B3,B3,B3,true,true);JE=Math.sin((aStartAngle+
IX)*A.k$)*All;Jx=Math.cos((aStartAngle+IX)*A.k$)*All;Agd=BL*JE;Age=-BL*Jx;Agf=(BY
*Jx)+(BL*JE);Agg=(-BL*Jx)+(BY*JE);Bfe=BY*Jx;Bff=BY*JE;CZ.AhO(aClip,this.Agj,0,Agd+
aX,Age+aY,1,Agf+aX,Agg+aY,1,Bfe+aX,Bff+aY,1,aX,aY,1,[0,0,BY,BL],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JE=Math.sin(((90+IX)+
aStartAngle)*A.k$)*All;Jx=Math.cos(((90+IX)+aStartAngle)*A.k$)*All;Agd=(-BY*Jx)+(
BL*JE);Age=(-BL*Jx)-(BY*JE);Agf=BL*JE;Agg=-BL*Jx;Al4=-BY*Jx;Al5=-BY*JE;if(!IX)LB=[
aX,-10000,10000,aY];else if(IX===90)LB=[aX,aY,10000,10000];else if(IX===180)LB=[-
10000,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CZ.AhO(A.lb(aClip,LB),this.WI,0
,Agd+aX,Age+aY,1,Agf+aX,Agg+aY,1,aX,aY,1,Al4+aX,Al5+aY,1,[0,0,BY,BL],B3,B3,B3,B3
,aBlend,true);IX=IX+90;if(IX>=360)IX=IX-360;Xe=Xe-(90-aStartAngle);}while(Xe>=90
){JE=Math.sin((90+IX)*A.k$)*All;Jx=Math.cos((90+IX)*A.k$)*All;Agd=(-BY*Jx)+(BL*JE
);Age=(-BL*Jx)-(BY*JE);Agf=BL*JE;Agg=-BL*Jx;Al4=-BY*Jx;Al5=-BY*JE;if(!IX)LB=[aX,-
10000,10000,aY];else if(IX===90)LB=[aX,aY,10000,10000];else if(IX===180)LB=[-10000
,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CZ.AhO(A.lb(aClip,LB),this.WI,0,Agd+
aX,Age+aY,1,Agf+aX,Agg+aY,1,aX,aY,1,Al4+aX,Al5+aY,1,[0,0,BY,BL],B3,B3,B3,B3,aBlend
,true);IX=IX+90;if(IX>=360)IX=IX-360;Xe=Xe-90;}JE=Math.sin((Xe+IX)*A.k$)*All;Jx=
Math.cos((Xe+IX)*A.k$)*All;Agd=(-BY*Jx)+(BL*JE);Age=(-BL*Jx)-(BY*JE);Agf=BL*JE;Agg=-
BL*Jx;Al4=-BY*Jx;Al5=-BY*JE;if(!IX)LB=[aX,-10000,10000,aY];else if(IX===90)LB=[aX
,aY,10000,10000];else if(IX===180)LB=[-10000,aY,aX,10000];else LB=[-10000,-10000
,aX,aY];CZ.AhO(A.lb(aClip,LB),this.WI,0,Agd+aX,Age+aY,1,Agf+aX,Agg+aY,1,aX,aY,1,
Al4+aX,Al5+aY,1,[0,0,BY,BL],B3,B3,B3,B3,aBlend,true);}},Ab9:function(E){var B;this.
N2=E;this.Am();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SC;this.H(IQ);this.WI=A.aaL(C.
ATJ);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATJ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUa={K0:null,MS:null,AY:10,AGX:0,Os:function(A7,aColor){var Hb;
Hb=A._NewObject(C.Record,0);Hb.A4=A7;Hb.AQ=aColor;if(!this.K0){this.K0=Hb;this.MS=
Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}this.AGX=this.AGX+
A7;},_Init:function(aArg){this.__proto__=C.AUa;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SC.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARj[0]._this)&&(B._cycle!=D))B._Done(C.ARj[0].
_this=null);if((B=C.ATJ[0]._this)&&(B._cycle!=D))B._Done(C.ATJ[0]._this=null);if((
B=C.ATK[0]._this)&&(B._cycle!=D))B._Done(C.ATK[0]._this=null);if((B=C.ACv[0]._this
)&&(B._cycle!=D))B._Done(C.ACv[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */