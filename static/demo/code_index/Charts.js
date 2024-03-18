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
var Cd=[10,10];var BF=[80,50];var E4=[0,0,360,240];var Hm=[0,0,370,270];var IQ=[0
,0,260,240];
C.A5s={Ah:null,PZ:0,P0:0,_Init:function(aArg){this.__proto__=C.A5s;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arl:null,Pq:null,Background:null,Arm:0xFFFFFFFF,Arn:3,AmH:0xFFFFFFFF
,AmI:0,Aa$:A.wf,Asg:Cd,A41:0xFF000000,ADn:0xFF6E0E0C,AG8:0xFF6E0E0C,OD:BF,AqH:0,
Kk:function(CZ,aClip,aOffset,Cj,aBlend){var B;var XE=0;var XF=0;var AAE=0;var AAF=
0;var RA=this.M[0]+aOffset[0];var RB=this.M[1]+aOffset[1];var Ao_=this.AmH;var Apw=
this.Arm;var Aps=this.ADn;var Aqa=this.AG8;var AlQ=this.Arn/2;var Rz=this.AmI/2;
var Kd=(((Cj+1)*this.G3)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kd<256){Ao_=(
Ao_&0x00FFFFFF)|((((((Ao_>>24)&0xFF)*Kd)>>8)&0xFF)<<24);Apw=(Apw&0x00FFFFFF)|((((((
Apw>>24)&0xFF)*Kd)>>8)&0xFF)<<24);Aps=(Aps&0x00FFFFFF)|((((((Aps>>24)&0xFF)*Kd)>>
8)&0xFF)<<24);Aqa=(Aqa&0x00FFFFFF)|((((((Aqa>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}A.Core.
P.Kk.call(this,CZ,aClip,aOffset,Cj,aBlend);if(((this.ADn>>24)&0xFF)>0){var Dg;for(
Dg=this.Aa$[1]+RB;Dg>=RB;Dg=Dg-this.OD[1])CZ.AuZ(aClip,[RA,Dg],[RA+((B=this.M)[2
]-B[0]),Dg],Aps,Aps,aBlend);for(Dg=(this.Aa$[1]+RB)+this.OD[1];Dg<(RB+((B=this.M
)[3]-B[1]));Dg=Dg+this.OD[1])CZ.AuZ(aClip,[RA,Dg],[RA+((B=this.M)[2]-B[0]),Dg],Aps
,Aps,aBlend);}if(((this.AG8>>24)&0xFF)>0){var En;for(En=this.Aa$[0]+RA;En>=RA;En=
En-this.OD[0])CZ.AuZ(aClip,[En,RB],[En,RB+((B=this.M)[3]-B[1])],Aqa,Aqa,aBlend);
for(En=(this.Aa$[0]+RA)+this.OD[0];En<(RA+((B=this.M)[2]-B[0]));En=En+this.OD[0]
)CZ.AuZ(aClip,[En,RB],[En,RB+((B=this.M)[3]-B[1])],Aqa,Aqa,aBlend);}if(!this.EZ)
return;var Jw=this.EZ.AlG;if(!!Jw){XE=(RA+this.Aa$[0])+(Jw.PZ*this.Asg[0]);XF=(RB+
this.Aa$[1])+(Jw.P0*this.Asg[1]);Jw=Jw.Ah;}while(!!Jw){AAE=(RA+this.Aa$[0])+(Jw.
PZ*this.Asg[0]);AAF=(RB+this.Aa$[1])+(Jw.P0*this.Asg[1]);var J6=AAE-XE;var J7=AAF-
XF;var IU=Math.sqrt((J6*J6)+(J7*J7));if(!!IU){J6=J6/IU;J7=J7/IU;}if(!!this.Arl)CZ.
AhN(aClip,this.Arl,0,XE-(J7*AlQ),XF+(J6*AlQ),1,XE+(J7*AlQ),XF-(J6*AlQ),1,AAE+(J7
*AlQ),AAF-(J6*AlQ),1,AAE-(J7*AlQ),AAF+(J6*AlQ),1,[0,0,this.Arl.FrameSize[0],this.
Arl.FrameSize[1]],Apw,Apw,Apw,Apw,aBlend,true);if((this.AmI>0)&&!!this.Pq)CZ.AhN(
aClip,this.Pq,this.AqH,XE-Rz,XF-Rz,1,XE+Rz,XF-Rz,1,XE+Rz,XF+Rz,1,XE-Rz,XF+Rz,1,[
0,0,this.Pq.FrameSize[0],this.Pq.FrameSize[1]],Ao_,Ao_,Ao_,Ao_,aBlend,true);XE=AAE;
XF=AAF;Jw=Jw.Ah;}if((this.AmI>0)&&!!this.Pq)CZ.AhN(aClip,this.Pq,this.AqH,XE-Rz,
XF-Rz,1,XE+Rz,XF-Rz,1,XE+Rz,XF+Rz,1,XE-Rz,XF+Rz,1,[0,0,this.Pq.FrameSize[0],this.
Pq.FrameSize[1]],this.AmH,this.AmH,this.AmH,this.AmH,aBlend,true);},AeV:function(
E){var B;this.EZ=E;this.An();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS9:function(
E){var B;if(E===this.Arm)return;this.Arm=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS_:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arn=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlB:function(E){var B;if(E===this.AmH)return;
this.AmH=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASY:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmI=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Blv:
function(E){var B;if(A.aaX(E,this.Aa$))return;this.Aa$=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BmR:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asg))return;this.Asg=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Blj:function(E){if(E===this.A41)return;this.A41=E;this.Background.L(E);
},Bl_:function(E){var B;if(E===this.ADn)return;this.ADn=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bnb:function(E){var B;if(E===this.AG8)return;this.AG8=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anx:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OD))return;this.OD=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASW:function(E){var B;if(E===this.Pq)return;this.
Pq=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASX:function(E){var B;if(E<0)
E=0;this.AqH=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E4);this.Background.AZ(0x3F);this.Background.H(Hm);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arl=A.aaL(C.ARn);this.Pq=
A.aaL(C.ACu);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACa={AlG:null,Az7:
null,AY:0,AD8:10,Yh:function(){this.AlG=null;this.Az7=null;this.AY=0;},Aqh:function(
aX,aY){var Jw=null;if((this.AD8>0)&&(this.AY===this.AD8)){Jw=this.AlG;this.AlG=Jw.
Ah;Jw.Ah=null;this.AY=this.AY-1;}else Jw=A._NewObject(C.A5s,0);Jw.PZ=aX;Jw.P0=aY;
if(!this.AlG){this.AlG=Jw;this.Az7=Jw;this.AY=1;}else{this.Az7.Ah=Jw;this.Az7=Jw;
this.AY=this.AY+1;}},AwL:function(E){if(E<1)E=1;this.AD8=E;},_Init:function(aArg
){this.__proto__=C.ACa;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlG)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARn={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SF={WJ:null,Agk:null,N2:null,AF6:270,AGp:1,Kk:function(CZ,aClip,aOffset
,Cj,aBlend){var Vj;var Bcu;Vj=0;Bcu=this.AF6;while(Vj<0)Vj=Vj+360;while(Vj>=360)
Vj=Vj-360;var RA=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RB=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kk.call(this,CZ,aClip,aOffset,Cj,aBlend);if(!!this.
N2&&(this.N2.AGX>0)){var Hb=this.N2.KZ;while(!!Hb){var Fz=(Hb.A4/this.N2.AGX)*Bcu;
this.BcA(CZ,aClip,RA,RB,Vj,Fz,this.AGp,0,Hb.AQ,Cj,aBlend);Vj=Vj+Fz;if(Vj>=360)Vj=
Vj-360;Hb=Hb.Ah;}}else this.BcA(CZ,aClip,RA,RB,Vj,this.AF6,this.AGp,0,0xFF800000
,Cj,aBlend);},BmQ:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF6)return;
this.AF6=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm1:function(E){var B;if(
E===this.WJ)return;this.WJ=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm0:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGp)return;this.AGp=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcA:function(CZ,aClip,aX,aY,aStartAngle
,Xf,Alk,A0C,aColor,Cj,aBlend){var B;var JE;var Jx;var Age;var Agf;var Agg;var Agh;
var Be6;var Be7;var Al3;var Al4;var LA;var B4=aColor;var Kd=(((Cj+1)*this.G3)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kd<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Kd)>>8)&0xFF)<<24);if(!this.WJ)return;var BY=this.WJ.FrameSize[0];var BK=
this.WJ.FrameSize[1];var IX=0;if(Xf>=360){aStartAngle=0;Xf=360;}if(A0C>0){var Bcw=
aStartAngle+(Xf/2);JE=Math.sin(Bcw*A.k$);Jx=Math.cos(Bcw*A.k$);aX=aX+((A0C*JE)|0
);aY=aY-((A0C*Jx)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IX=IX+90;
}if(!this.Agk||!A.aaX(this.Agk.FrameSize,this.WJ.FrameSize)){this.Agk=A._NewObject(
A.Graphics.Canvas,0);this.Agk.ArQ(this.WJ.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xf)<90)){JE=Math.sin(Xf*A.k$);Jx=Math.cos(Xf*A.k$);Age=(-BY*Jx)+(BK*JE);Agf=(-BK
*Jx)-(BY*JE);Agg=BK*JE;Agh=-BK*Jx;Al3=-BY*Jx;Al4=-BY*JE;this.Agk.Avc([0,0,BY,BK]
,[0,0,this.Agk.FrameSize[0],this.Agk.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agk.AhN([0,0,BY,BK],this.WJ,0,Age,Agf+BK,1,Agg,Agh+BK,1,
0,BK,1,Al3,Al4+BK,1,[0,0,BY,BK],B4,B4,B4,B4,true,true);JE=Math.sin((aStartAngle+
IX)*A.k$)*Alk;Jx=Math.cos((aStartAngle+IX)*A.k$)*Alk;Age=BK*JE;Agf=-BK*Jx;Agg=(BY
*Jx)+(BK*JE);Agh=(-BK*Jx)+(BY*JE);Be6=BY*Jx;Be7=BY*JE;CZ.AhN(aClip,this.Agk,0,Age+
aX,Agf+aY,1,Agg+aX,Agh+aY,1,Be6+aX,Be7+aY,1,aX,aY,1,[0,0,BY,BK],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JE=Math.sin(((90+IX)+
aStartAngle)*A.k$)*Alk;Jx=Math.cos(((90+IX)+aStartAngle)*A.k$)*Alk;Age=(-BY*Jx)+(
BK*JE);Agf=(-BK*Jx)-(BY*JE);Agg=BK*JE;Agh=-BK*Jx;Al3=-BY*Jx;Al4=-BY*JE;if(!IX)LA=[
aX,-10000,10000,aY];else if(IX===90)LA=[aX,aY,10000,10000];else if(IX===180)LA=[-
10000,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CZ.AhN(A.lb(aClip,LA),this.WJ,0
,Age+aX,Agf+aY,1,Agg+aX,Agh+aY,1,aX,aY,1,Al3+aX,Al4+aY,1,[0,0,BY,BK],B4,B4,B4,B4
,aBlend,true);IX=IX+90;if(IX>=360)IX=IX-360;Xf=Xf-(90-aStartAngle);}while(Xf>=90
){JE=Math.sin((90+IX)*A.k$)*Alk;Jx=Math.cos((90+IX)*A.k$)*Alk;Age=(-BY*Jx)+(BK*JE
);Agf=(-BK*Jx)-(BY*JE);Agg=BK*JE;Agh=-BK*Jx;Al3=-BY*Jx;Al4=-BY*JE;if(!IX)LA=[aX,-
10000,10000,aY];else if(IX===90)LA=[aX,aY,10000,10000];else if(IX===180)LA=[-10000
,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CZ.AhN(A.lb(aClip,LA),this.WJ,0,Age+
aX,Agf+aY,1,Agg+aX,Agh+aY,1,aX,aY,1,Al3+aX,Al4+aY,1,[0,0,BY,BK],B4,B4,B4,B4,aBlend
,true);IX=IX+90;if(IX>=360)IX=IX-360;Xf=Xf-90;}JE=Math.sin((Xf+IX)*A.k$)*Alk;Jx=
Math.cos((Xf+IX)*A.k$)*Alk;Age=(-BY*Jx)+(BK*JE);Agf=(-BK*Jx)-(BY*JE);Agg=BK*JE;Agh=-
BK*Jx;Al3=-BY*Jx;Al4=-BY*JE;if(!IX)LA=[aX,-10000,10000,aY];else if(IX===90)LA=[aX
,aY,10000,10000];else if(IX===180)LA=[-10000,aY,aX,10000];else LA=[-10000,-10000
,aX,aY];CZ.AhN(A.lb(aClip,LA),this.WJ,0,Age+aX,Agf+aY,1,Agg+aX,Agh+aY,1,aX,aY,1,
Al3+aX,Al4+aY,1,[0,0,BY,BK],B4,B4,B4,B4,aBlend,true);}},Ab8:function(E){var B;this.
N2=E;this.An();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SF;this.H(IQ);this.WJ=A.aaL(C.
ATL);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WJ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUb={KZ:null,MR:null,AY:10,AGX:0,Or:function(A7,aColor){var Hb;
Hb=A._NewObject(C.Record,0);Hb.A4=A7;Hb.AQ=aColor;if(!this.KZ){this.KZ=Hb;this.MR=
Hb;this.AY=1;}else{this.MR.Ah=Hb;this.MR=Hb;this.AY=this.AY+1;}this.AGX=this.AGX+
A7;},_Init:function(aArg){this.__proto__=C.AUb;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATM={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SF.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARn[0]._this)&&(B._cycle!=D))B._Done(C.ARn[0].
_this=null);if((B=C.ATL[0]._this)&&(B._cycle!=D))B._Done(C.ATL[0]._this=null);if((
B=C.ATM[0]._this)&&(B._cycle!=D))B._Done(C.ATM[0]._this=null);if((B=C.ACu[0]._this
)&&(B._cycle!=D))B._Done(C.ACu[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */