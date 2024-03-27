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
var Cc=[10,10];var BD=[80,50];var E6=[0,0,360,240];var Hq=[0,0,370,270];var IT=[0
,0,260,240];
C.A5w={Ah:null,P4:0,P5:0,_Init:function(aArg){this.__proto__=C.A5w;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arg:null,Pt:null,Background:null,Arh:0xFFFFFFFF,Ari:3,AmG:0xFFFFFFFF
,AmH:0,Aa_:A.wf,Asc:Cc,A45:0xFF000000,ADm:0xFF6E0E0C,AG5:0xFF6E0E0C,OE:BD,AqC:0,
Kn:function(CY,aClip,aOffset,Cj,aBlend){var B;var XB=0;var XC=0;var AAF=0;var AAG=
0;var RD=this.M[0]+aOffset[0];var RE=this.M[1]+aOffset[1];var Ao5=this.AmG;var Aps=
this.Arh;var Apo=this.ADm;var Ap7=this.AG5;var AlO=this.Ari/2;var RC=this.AmH/2;
var Kg=(((Cj+1)*this.G8)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kg<256){Ao5=(
Ao5&0x00FFFFFF)|((((((Ao5>>24)&0xFF)*Kg)>>8)&0xFF)<<24);Aps=(Aps&0x00FFFFFF)|((((((
Aps>>24)&0xFF)*Kg)>>8)&0xFF)<<24);Apo=(Apo&0x00FFFFFF)|((((((Apo>>24)&0xFF)*Kg)>>
8)&0xFF)<<24);Ap7=(Ap7&0x00FFFFFF)|((((((Ap7>>24)&0xFF)*Kg)>>8)&0xFF)<<24);}A.Core.
P.Kn.call(this,CY,aClip,aOffset,Cj,aBlend);if(((this.ADm>>24)&0xFF)>0){var Dg;for(
Dg=this.Aa_[1]+RE;Dg>=RE;Dg=Dg-this.OE[1])CY.AuZ(aClip,[RD,Dg],[RD+((B=this.M)[2
]-B[0]),Dg],Apo,Apo,aBlend);for(Dg=(this.Aa_[1]+RE)+this.OE[1];Dg<(RE+((B=this.M
)[3]-B[1]));Dg=Dg+this.OE[1])CY.AuZ(aClip,[RD,Dg],[RD+((B=this.M)[2]-B[0]),Dg],Apo
,Apo,aBlend);}if(((this.AG5>>24)&0xFF)>0){var Eo;for(Eo=this.Aa_[0]+RD;Eo>=RD;Eo=
Eo-this.OE[0])CY.AuZ(aClip,[Eo,RE],[Eo,RE+((B=this.M)[3]-B[1])],Ap7,Ap7,aBlend);
for(Eo=(this.Aa_[0]+RD)+this.OE[0];Eo<(RD+((B=this.M)[2]-B[0]));Eo=Eo+this.OE[0]
)CY.AuZ(aClip,[Eo,RE],[Eo,RE+((B=this.M)[3]-B[1])],Ap7,Ap7,aBlend);}if(!this.EZ)
return;var Jz=this.EZ.AlE;if(!!Jz){XB=(RD+this.Aa_[0])+(Jz.P4*this.Asc[0]);XC=(RE+
this.Aa_[1])+(Jz.P5*this.Asc[1]);Jz=Jz.Ah;}while(!!Jz){AAF=(RD+this.Aa_[0])+(Jz.
P4*this.Asc[0]);AAG=(RE+this.Aa_[1])+(Jz.P5*this.Asc[1]);var J9=AAF-XB;var J_=AAG-
XC;var IX=Math.sqrt((J9*J9)+(J_*J_));if(!!IX){J9=J9/IX;J_=J_/IX;}if(!!this.Arg)CY.
AhQ(aClip,this.Arg,0,XB-(J_*AlO),XC+(J9*AlO),1,XB+(J_*AlO),XC-(J9*AlO),1,AAF+(J_
*AlO),AAG-(J9*AlO),1,AAF-(J_*AlO),AAG+(J9*AlO),1,[0,0,this.Arg.FrameSize[0],this.
Arg.FrameSize[1]],Aps,Aps,Aps,Aps,aBlend,true);if((this.AmH>0)&&!!this.Pt)CY.AhQ(
aClip,this.Pt,this.AqC,XB-RC,XC-RC,1,XB+RC,XC-RC,1,XB+RC,XC+RC,1,XB-RC,XC+RC,1,[
0,0,this.Pt.FrameSize[0],this.Pt.FrameSize[1]],Ao5,Ao5,Ao5,Ao5,aBlend,true);XB=AAF;
XC=AAG;Jz=Jz.Ah;}if((this.AmH>0)&&!!this.Pt)CY.AhQ(aClip,this.Pt,this.AqC,XB-RC,
XC-RC,1,XB+RC,XC-RC,1,XB+RC,XC+RC,1,XB-RC,XC+RC,1,[0,0,this.Pt.FrameSize[0],this.
Pt.FrameSize[1]],this.AmG,this.AmG,this.AmG,this.AmG,aBlend,true);},AeY:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS3:function(
E){var B;if(E===this.Arh)return;this.Arh=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS4:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Ari=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlN:function(E){var B;if(E===this.AmG)return;
this.AmG=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASS:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmH=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlI:
function(E){var B;if(A.aaX(E,this.Aa_))return;this.Aa_=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bm3:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asc))return;this.Asc=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Blw:function(E){if(E===this.A45)return;this.A45=E;this.Background.L(E);
},Bmk:function(E){var B;if(E===this.ADm)return;this.ADm=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bnn:function(E){var B;if(E===this.AG5)return;this.AG5=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anv:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OE))return;this.OE=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASQ:function(E){var B;if(E===this.Pt)return;this.
Pt=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASR:function(E){var B;if(E<0)
E=0;this.AqC=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E6);this.Background.AZ(0x3F);this.Background.H(Hq);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arg=A.aaL(C.ARi);this.Pt=
A.aaL(C.ACu);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arg)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACb={AlE:null,Az8:
null,AY:0,AD7:10,Yc:function(){this.AlE=null;this.Az8=null;this.AY=0;},Aqc:function(
aX,aY){var Jz=null;if((this.AD7>0)&&(this.AY===this.AD7)){Jz=this.AlE;this.AlE=Jz.
Ah;Jz.Ah=null;this.AY=this.AY-1;}else Jz=A._NewObject(C.A5w,0);Jz.P4=aX;Jz.P5=aY;
if(!this.AlE){this.AlE=Jz;this.Az8=Jz;this.AY=1;}else{this.Az8.Ah=Jz;this.Az8=Jz;
this.AY=this.AY+1;}},AwN:function(E){if(E<1)E=1;this.AD7=E;},_Init:function(aArg
){this.__proto__=C.ACb;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARi={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SK={WI:null,Ago:null,N3:null,AF3:270,AGm:1,Kn:function(CY,aClip,aOffset
,Cj,aBlend){var Vl;var BcF;Vl=0;BcF=this.AF3;while(Vl<0)Vl=Vl+360;while(Vl>=360)
Vl=Vl-360;var RD=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RE=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kn.call(this,CY,aClip,aOffset,Cj,aBlend);if(!!this.
N3&&(this.N3.AGU>0)){var Hg=this.N3.K0;while(!!Hg){var FD=(Hg.A4/this.N3.AGU)*BcF;
this.BcL(CY,aClip,RD,RE,Vl,FD,this.AGm,0,Hg.AQ,Cj,aBlend);Vl=Vl+FD;if(Vl>=360)Vl=
Vl-360;Hg=Hg.Ah;}}else this.BcL(CY,aClip,RD,RE,Vl,this.AF3,this.AGm,0,0xFF800000
,Cj,aBlend);},Bm2:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF3)return;
this.AF3=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bnb:function(E){var B;if(
E===this.WI)return;this.WI=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bna:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGm)return;this.AGm=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcL:function(CY,aClip,aX,aY,aStartAngle
,Xd,Ali,A0B,aColor,Cj,aBlend){var B;var JH;var JA;var Agh;var Agi;var Agj;var Agk;
var Bfe;var Bff;var Al1;var Al2;var LA;var B2=aColor;var Kg=(((Cj+1)*this.G8)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kg<256)B2=(B2&0x00FFFFFF)|((((((B2>>24
)&0xFF)*Kg)>>8)&0xFF)<<24);if(!this.WI)return;var BX=this.WI.FrameSize[0];var BI=
this.WI.FrameSize[1];var I0=0;if(Xd>=360){aStartAngle=0;Xd=360;}if(A0B>0){var BcH=
aStartAngle+(Xd/2);JH=Math.sin(BcH*A.k$);JA=Math.cos(BcH*A.k$);aX=aX+((A0B*JH)|0
);aY=aY-((A0B*JA)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I0=I0+90;
}if(!this.Ago||!A.aaX(this.Ago.FrameSize,this.WI.FrameSize)){this.Ago=A._NewObject(
A.Graphics.Canvas,0);this.Ago.ArL(this.WI.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xd)<90)){JH=Math.sin(Xd*A.k$);JA=Math.cos(Xd*A.k$);Agh=(-BX*JA)+(BI*JH);Agi=(-BI
*JA)-(BX*JH);Agj=BI*JH;Agk=-BI*JA;Al1=-BX*JA;Al2=-BX*JH;this.Ago.Avc([0,0,BX,BI]
,[0,0,this.Ago.FrameSize[0],this.Ago.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ago.AhQ([0,0,BX,BI],this.WI,0,Agh,Agi+BI,1,Agj,Agk+BI,1,
0,BI,1,Al1,Al2+BI,1,[0,0,BX,BI],B2,B2,B2,B2,true,true);JH=Math.sin((aStartAngle+
I0)*A.k$)*Ali;JA=Math.cos((aStartAngle+I0)*A.k$)*Ali;Agh=BI*JH;Agi=-BI*JA;Agj=(BX
*JA)+(BI*JH);Agk=(-BI*JA)+(BX*JH);Bfe=BX*JA;Bff=BX*JH;CY.AhQ(aClip,this.Ago,0,Agh+
aX,Agi+aY,1,Agj+aX,Agk+aY,1,Bfe+aX,Bff+aY,1,aX,aY,1,[0,0,BX,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JH=Math.sin(((90+I0)+
aStartAngle)*A.k$)*Ali;JA=Math.cos(((90+I0)+aStartAngle)*A.k$)*Ali;Agh=(-BX*JA)+(
BI*JH);Agi=(-BI*JA)-(BX*JH);Agj=BI*JH;Agk=-BI*JA;Al1=-BX*JA;Al2=-BX*JH;if(!I0)LA=[
aX,-10000,10000,aY];else if(I0===90)LA=[aX,aY,10000,10000];else if(I0===180)LA=[-
10000,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WI,0
,Agh+aX,Agi+aY,1,Agj+aX,Agk+aY,1,aX,aY,1,Al1+aX,Al2+aY,1,[0,0,BX,BI],B2,B2,B2,B2
,aBlend,true);I0=I0+90;if(I0>=360)I0=I0-360;Xd=Xd-(90-aStartAngle);}while(Xd>=90
){JH=Math.sin((90+I0)*A.k$)*Ali;JA=Math.cos((90+I0)*A.k$)*Ali;Agh=(-BX*JA)+(BI*JH
);Agi=(-BI*JA)-(BX*JH);Agj=BI*JH;Agk=-BI*JA;Al1=-BX*JA;Al2=-BX*JH;if(!I0)LA=[aX,-
10000,10000,aY];else if(I0===90)LA=[aX,aY,10000,10000];else if(I0===180)LA=[-10000
,aY,aX,10000];else LA=[-10000,-10000,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WI,0,Agh+
aX,Agi+aY,1,Agj+aX,Agk+aY,1,aX,aY,1,Al1+aX,Al2+aY,1,[0,0,BX,BI],B2,B2,B2,B2,aBlend
,true);I0=I0+90;if(I0>=360)I0=I0-360;Xd=Xd-90;}JH=Math.sin((Xd+I0)*A.k$)*Ali;JA=
Math.cos((Xd+I0)*A.k$)*Ali;Agh=(-BX*JA)+(BI*JH);Agi=(-BI*JA)-(BX*JH);Agj=BI*JH;Agk=-
BI*JA;Al1=-BX*JA;Al2=-BX*JH;if(!I0)LA=[aX,-10000,10000,aY];else if(I0===90)LA=[aX
,aY,10000,10000];else if(I0===180)LA=[-10000,aY,aX,10000];else LA=[-10000,-10000
,aX,aY];CY.AhQ(A.lb(aClip,LA),this.WI,0,Agh+aX,Agi+aY,1,Agj+aX,Agk+aY,1,aX,aY,1,
Al1+aX,Al2+aY,1,[0,0,BX,BI],B2,B2,B2,B2,aBlend,true);}},Ab5:function(E){var B;this.
N3=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SK;this.H(IT);this.WI=A.aaL(C.
ATF);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ago)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N3)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AT6={K0:null,MS:null,AY:10,AGU:0,Os:function(A_,aColor){var Hg;
Hg=A._NewObject(C.Record,0);Hg.A4=A_;Hg.AQ=aColor;if(!this.K0){this.K0=Hg;this.MS=
Hg;this.AY=1;}else{this.MS.Ah=Hg;this.MS=Hg;this.AY=this.AY+1;}this.AGU=this.AGU+
A_;},_Init:function(aArg){this.__proto__=C.AT6;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATG={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SK.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARi[0]._this)&&(B._cycle!=D))B._Done(C.ARi[0].
_this=null);if((B=C.ATF[0]._this)&&(B._cycle!=D))B._Done(C.ATF[0]._this=null);if((
B=C.ATG[0]._this)&&(B._cycle!=D))B._Done(C.ATG[0]._this=null);if((B=C.ACu[0]._this
)&&(B._cycle!=D))B._Done(C.ACu[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */