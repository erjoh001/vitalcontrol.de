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
C.A5s={Ah:null,PY:0,PZ:0,_Init:function(aArg){this.__proto__=C.A5s;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arj:null,Pq:null,Background:null,Ark:0xFFFFFFFF,Arl:3,AmG:0xFFFFFFFF
,AmH:0,Aba:A.wf,Ase:Cd,A41:0xFF000000,ADk:0xFF6E0E0C,AG5:0xFF6E0E0C,OD:BF,AqF:0,
Kk:function(CZ,aClip,aOffset,Ci,aBlend){var B;var XD=0;var XE=0;var AAD=0;var AAE=
0;var Rz=this.M[0]+aOffset[0];var RA=this.M[1]+aOffset[1];var Ao8=this.AmG;var Apu=
this.Ark;var Apq=this.ADk;var Ap_=this.AG5;var AlP=this.Arl/2;var Ry=this.AmH/2;
var Kd=(((Ci+1)*this.G3)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kd<256){Ao8=(
Ao8&0x00FFFFFF)|((((((Ao8>>24)&0xFF)*Kd)>>8)&0xFF)<<24);Apu=(Apu&0x00FFFFFF)|((((((
Apu>>24)&0xFF)*Kd)>>8)&0xFF)<<24);Apq=(Apq&0x00FFFFFF)|((((((Apq>>24)&0xFF)*Kd)>>
8)&0xFF)<<24);Ap_=(Ap_&0x00FFFFFF)|((((((Ap_>>24)&0xFF)*Kd)>>8)&0xFF)<<24);}A.Core.
P.Kk.call(this,CZ,aClip,aOffset,Ci,aBlend);if(((this.ADk>>24)&0xFF)>0){var Dg;for(
Dg=this.Aba[1]+RA;Dg>=RA;Dg=Dg-this.OD[1])CZ.AuX(aClip,[Rz,Dg],[Rz+((B=this.M)[2
]-B[0]),Dg],Apq,Apq,aBlend);for(Dg=(this.Aba[1]+RA)+this.OD[1];Dg<(RA+((B=this.M
)[3]-B[1]));Dg=Dg+this.OD[1])CZ.AuX(aClip,[Rz,Dg],[Rz+((B=this.M)[2]-B[0]),Dg],Apq
,Apq,aBlend);}if(((this.AG5>>24)&0xFF)>0){var En;for(En=this.Aba[0]+Rz;En>=Rz;En=
En-this.OD[0])CZ.AuX(aClip,[En,RA],[En,RA+((B=this.M)[3]-B[1])],Ap_,Ap_,aBlend);
for(En=(this.Aba[0]+Rz)+this.OD[0];En<(Rz+((B=this.M)[2]-B[0]));En=En+this.OD[0]
)CZ.AuX(aClip,[En,RA],[En,RA+((B=this.M)[3]-B[1])],Ap_,Ap_,aBlend);}if(!this.EZ)
return;var Jw=this.EZ.AlF;if(!!Jw){XD=(Rz+this.Aba[0])+(Jw.PY*this.Ase[0]);XE=(RA+
this.Aba[1])+(Jw.PZ*this.Ase[1]);Jw=Jw.Ah;}while(!!Jw){AAD=(Rz+this.Aba[0])+(Jw.
PY*this.Ase[0]);AAE=(RA+this.Aba[1])+(Jw.PZ*this.Ase[1]);var J6=AAD-XD;var J7=AAE-
XE;var IU=Math.sqrt((J6*J6)+(J7*J7));if(!!IU){J6=J6/IU;J7=J7/IU;}if(!!this.Arj)CZ.
AhM(aClip,this.Arj,0,XD-(J7*AlP),XE+(J6*AlP),1,XD+(J7*AlP),XE-(J6*AlP),1,AAD+(J7
*AlP),AAE-(J6*AlP),1,AAD-(J7*AlP),AAE+(J6*AlP),1,[0,0,this.Arj.FrameSize[0],this.
Arj.FrameSize[1]],Apu,Apu,Apu,Apu,aBlend,true);if((this.AmH>0)&&!!this.Pq)CZ.AhM(
aClip,this.Pq,this.AqF,XD-Ry,XE-Ry,1,XD+Ry,XE-Ry,1,XD+Ry,XE+Ry,1,XD-Ry,XE+Ry,1,[
0,0,this.Pq.FrameSize[0],this.Pq.FrameSize[1]],Ao8,Ao8,Ao8,Ao8,aBlend,true);XD=AAD;
XE=AAE;Jw=Jw.Ah;}if((this.AmH>0)&&!!this.Pq)CZ.AhM(aClip,this.Pq,this.AqF,XD-Ry,
XE-Ry,1,XD+Ry,XE-Ry,1,XD+Ry,XE+Ry,1,XD-Ry,XE+Ry,1,[0,0,this.Pq.FrameSize[0],this.
Pq.FrameSize[1]],this.AmG,this.AmG,this.AmG,this.AmG,aBlend,true);},AeV:function(
E){var B;this.EZ=E;this.An();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS8:function(
E){var B;if(E===this.Ark)return;this.Ark=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS9:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arl=E;this.Bi([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlB:function(E){var B;if(E===this.AmG)return;
this.AmG=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASX:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmH=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Blv:
function(E){var B;if(A.aaX(E,this.Aba))return;this.Aba=E;this.Bi([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BmR:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ase))return;this.Ase=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Blj:function(E){if(E===this.A41)return;this.A41=E;this.Background.L(E);
},Bl_:function(E){var B;if(E===this.ADk)return;this.ADk=E;this.Bi([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bnb:function(E){var B;if(E===this.AG5)return;this.AG5=E;
this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anw:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OD))return;this.OD=E;this.Bi([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASV:function(E){var B;if(E===this.Pq)return;this.
Pq=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASW:function(E){var B;if(E<0)
E=0;this.AqF=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E4);this.Background.AZ(0x3F);this.Background.H(Hm);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arj=A.aaL(C.ARm);this.Pq=
A.aaL(C.ACs);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.AB_={AlF:null,Az6:
null,AY:0,AD5:10,Yg:function(){this.AlF=null;this.Az6=null;this.AY=0;},Aqf:function(
aX,aY){var Jw=null;if((this.AD5>0)&&(this.AY===this.AD5)){Jw=this.AlF;this.AlF=Jw.
Ah;Jw.Ah=null;this.AY=this.AY-1;}else Jw=A._NewObject(C.A5s,0);Jw.PY=aX;Jw.PZ=aY;
if(!this.AlF){this.AlF=Jw;this.Az6=Jw;this.AY=1;}else{this.Az6.Ah=Jw;this.Az6=Jw;
this.AY=this.AY+1;}},AwK:function(E){if(E<1)E=1;this.AD5=E;},_Init:function(aArg
){this.__proto__=C.AB_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARm={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SE={WI:null,Agi:null,N2:null,AF3:270,AGm:1,Kk:function(CZ,aClip,aOffset
,Ci,aBlend){var Vi;var Bcv;Vi=0;Bcv=this.AF3;while(Vi<0)Vi=Vi+360;while(Vi>=360)
Vi=Vi-360;var Rz=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RA=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kk.call(this,CZ,aClip,aOffset,Ci,aBlend);if(!!this.
N2&&(this.N2.AGU>0)){var Hb=this.N2.K0;while(!!Hb){var Fy=(Hb.A4/this.N2.AGU)*Bcv;
this.BcB(CZ,aClip,Rz,RA,Vi,Fy,this.AGm,0,Hb.AQ,Ci,aBlend);Vi=Vi+Fy;if(Vi>=360)Vi=
Vi-360;Hb=Hb.Ah;}}else this.BcB(CZ,aClip,Rz,RA,Vi,this.AF3,this.AGm,0,0xFF800000
,Ci,aBlend);},BmQ:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF3)return;
this.AF3=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm1:function(E){var B;if(
E===this.WI)return;this.WI=E;this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm0:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGm)return;this.AGm=E;this.
Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcB:function(CZ,aClip,aX,aY,aStartAngle
,Xe,Alj,A0B,aColor,Ci,aBlend){var B;var JE;var Jx;var Agc;var Agd;var Age;var Agf;
var Be7;var Be8;var Al2;var Al3;var LB;var B3=aColor;var Kd=(((Ci+1)*this.G3)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kd<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Kd)>>8)&0xFF)<<24);if(!this.WI)return;var BY=this.WI.FrameSize[0];var BK=
this.WI.FrameSize[1];var IX=0;if(Xe>=360){aStartAngle=0;Xe=360;}if(A0B>0){var Bcx=
aStartAngle+(Xe/2);JE=Math.sin(Bcx*A.k$);Jx=Math.cos(Bcx*A.k$);aX=aX+((A0B*JE)|0
);aY=aY-((A0B*Jx)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IX=IX+90;
}if(!this.Agi||!A.aaX(this.Agi.FrameSize,this.WI.FrameSize)){this.Agi=A._NewObject(
A.Graphics.Canvas,0);this.Agi.ArO(this.WI.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xe)<90)){JE=Math.sin(Xe*A.k$);Jx=Math.cos(Xe*A.k$);Agc=(-BY*Jx)+(BK*JE);Agd=(-BK
*Jx)-(BY*JE);Age=BK*JE;Agf=-BK*Jx;Al2=-BY*Jx;Al3=-BY*JE;this.Agi.Ava([0,0,BY,BK]
,[0,0,this.Agi.FrameSize[0],this.Agi.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agi.AhM([0,0,BY,BK],this.WI,0,Agc,Agd+BK,1,Age,Agf+BK,1,
0,BK,1,Al2,Al3+BK,1,[0,0,BY,BK],B3,B3,B3,B3,true,true);JE=Math.sin((aStartAngle+
IX)*A.k$)*Alj;Jx=Math.cos((aStartAngle+IX)*A.k$)*Alj;Agc=BK*JE;Agd=-BK*Jx;Age=(BY
*Jx)+(BK*JE);Agf=(-BK*Jx)+(BY*JE);Be7=BY*Jx;Be8=BY*JE;CZ.AhM(aClip,this.Agi,0,Agc+
aX,Agd+aY,1,Age+aX,Agf+aY,1,Be7+aX,Be8+aY,1,aX,aY,1,[0,0,BY,BK],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JE=Math.sin(((90+IX)+
aStartAngle)*A.k$)*Alj;Jx=Math.cos(((90+IX)+aStartAngle)*A.k$)*Alj;Agc=(-BY*Jx)+(
BK*JE);Agd=(-BK*Jx)-(BY*JE);Age=BK*JE;Agf=-BK*Jx;Al2=-BY*Jx;Al3=-BY*JE;if(!IX)LB=[
aX,-10000,10000,aY];else if(IX===90)LB=[aX,aY,10000,10000];else if(IX===180)LB=[-
10000,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CZ.AhM(A.lb(aClip,LB),this.WI,0
,Agc+aX,Agd+aY,1,Age+aX,Agf+aY,1,aX,aY,1,Al2+aX,Al3+aY,1,[0,0,BY,BK],B3,B3,B3,B3
,aBlend,true);IX=IX+90;if(IX>=360)IX=IX-360;Xe=Xe-(90-aStartAngle);}while(Xe>=90
){JE=Math.sin((90+IX)*A.k$)*Alj;Jx=Math.cos((90+IX)*A.k$)*Alj;Agc=(-BY*Jx)+(BK*JE
);Agd=(-BK*Jx)-(BY*JE);Age=BK*JE;Agf=-BK*Jx;Al2=-BY*Jx;Al3=-BY*JE;if(!IX)LB=[aX,-
10000,10000,aY];else if(IX===90)LB=[aX,aY,10000,10000];else if(IX===180)LB=[-10000
,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CZ.AhM(A.lb(aClip,LB),this.WI,0,Agc+
aX,Agd+aY,1,Age+aX,Agf+aY,1,aX,aY,1,Al2+aX,Al3+aY,1,[0,0,BY,BK],B3,B3,B3,B3,aBlend
,true);IX=IX+90;if(IX>=360)IX=IX-360;Xe=Xe-90;}JE=Math.sin((Xe+IX)*A.k$)*Alj;Jx=
Math.cos((Xe+IX)*A.k$)*Alj;Agc=(-BY*Jx)+(BK*JE);Agd=(-BK*Jx)-(BY*JE);Age=BK*JE;Agf=-
BK*Jx;Al2=-BY*Jx;Al3=-BY*JE;if(!IX)LB=[aX,-10000,10000,aY];else if(IX===90)LB=[aX
,aY,10000,10000];else if(IX===180)LB=[-10000,aY,aX,10000];else LB=[-10000,-10000
,aX,aY];CZ.AhM(A.lb(aClip,LB),this.WI,0,Agc+aX,Agd+aY,1,Age+aX,Agf+aY,1,aX,aY,1,
Al2+aX,Al3+aY,1,[0,0,BY,BK],B3,B3,B3,B3,aBlend,true);}},Ab8:function(E){var B;this.
N2=E;this.An();this.Bi([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SE;this.H(IQ);this.WI=A.aaL(C.
ATK);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATK={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUa={K0:null,MS:null,AY:10,AGU:0,Or:function(A7,aColor){var Hb;
Hb=A._NewObject(C.Record,0);Hb.A4=A7;Hb.AQ=aColor;if(!this.K0){this.K0=Hb;this.MS=
Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}this.AGU=this.AGU+
A7;},_Init:function(aArg){this.__proto__=C.AUa;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACs={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SE.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARm[0]._this)&&(B._cycle!=D))B._Done(C.ARm[0].
_this=null);if((B=C.ATK[0]._this)&&(B._cycle!=D))B._Done(C.ATK[0]._this=null);if((
B=C.ATL[0]._this)&&(B._cycle!=D))B._Done(C.ATL[0]._this=null);if((B=C.ACs[0]._this
)&&(B._cycle!=D))B._Done(C.ACs[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */