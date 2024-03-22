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
var Cc=[10,10];var BF=[80,50];var E7=[0,0,360,240];var Hp=[0,0,370,270];var IS=[0
,0,260,240];
C.A5w={Ah:null,P0:0,P1:0,_Init:function(aArg){this.__proto__=C.A5w;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={E2:null,Aro:null,Pr:null,Background:null,Arp:0xFFFFFFFF,Arq:3,AmM:0xFFFFFFFF
,AmN:0,Abd:A.wf,Asj:Cc,A45:0xFF000000,ADp:0xFF6E0E0C,AG8:0xFF6E0E0C,OD:BF,AqJ:0,
Kl:function(CZ,aClip,aOffset,Ci,aBlend){var B;var XI=0;var XJ=0;var AAI=0;var AAJ=
0;var RD=this.M[0]+aOffset[0];var RE=this.M[1]+aOffset[1];var Apa=this.AmM;var Apy=
this.Arp;var Apu=this.ADp;var Aqc=this.AG8;var AlV=this.Arq/2;var RC=this.AmN/2;
var Ke=(((Ci+1)*this.G7)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ke<256){Apa=(
Apa&0x00FFFFFF)|((((((Apa>>24)&0xFF)*Ke)>>8)&0xFF)<<24);Apy=(Apy&0x00FFFFFF)|((((((
Apy>>24)&0xFF)*Ke)>>8)&0xFF)<<24);Apu=(Apu&0x00FFFFFF)|((((((Apu>>24)&0xFF)*Ke)>>
8)&0xFF)<<24);Aqc=(Aqc&0x00FFFFFF)|((((((Aqc>>24)&0xFF)*Ke)>>8)&0xFF)<<24);}A.Core.
P.Kl.call(this,CZ,aClip,aOffset,Ci,aBlend);if(((this.ADp>>24)&0xFF)>0){var Dg;for(
Dg=this.Abd[1]+RE;Dg>=RE;Dg=Dg-this.OD[1])CZ.Au1(aClip,[RD,Dg],[RD+((B=this.M)[2
]-B[0]),Dg],Apu,Apu,aBlend);for(Dg=(this.Abd[1]+RE)+this.OD[1];Dg<(RE+((B=this.M
)[3]-B[1]));Dg=Dg+this.OD[1])CZ.Au1(aClip,[RD,Dg],[RD+((B=this.M)[2]-B[0]),Dg],Apu
,Apu,aBlend);}if(((this.AG8>>24)&0xFF)>0){var Eo;for(Eo=this.Abd[0]+RD;Eo>=RD;Eo=
Eo-this.OD[0])CZ.Au1(aClip,[Eo,RE],[Eo,RE+((B=this.M)[3]-B[1])],Aqc,Aqc,aBlend);
for(Eo=(this.Abd[0]+RD)+this.OD[0];Eo<(RD+((B=this.M)[2]-B[0]));Eo=Eo+this.OD[0]
)CZ.Au1(aClip,[Eo,RE],[Eo,RE+((B=this.M)[3]-B[1])],Aqc,Aqc,aBlend);}if(!this.E2)
return;var Jx=this.E2.AlL;if(!!Jx){XI=(RD+this.Abd[0])+(Jx.P0*this.Asj[0]);XJ=(RE+
this.Abd[1])+(Jx.P1*this.Asj[1]);Jx=Jx.Ah;}while(!!Jx){AAI=(RD+this.Abd[0])+(Jx.
P0*this.Asj[0]);AAJ=(RE+this.Abd[1])+(Jx.P1*this.Asj[1]);var J7=AAI-XI;var J8=AAJ-
XJ;var IW=Math.sqrt((J7*J7)+(J8*J8));if(!!IW){J7=J7/IW;J8=J8/IW;}if(!!this.Aro)CZ.
AhT(aClip,this.Aro,0,XI-(J8*AlV),XJ+(J7*AlV),1,XI+(J8*AlV),XJ-(J7*AlV),1,AAI+(J8
*AlV),AAJ-(J7*AlV),1,AAI-(J8*AlV),AAJ+(J7*AlV),1,[0,0,this.Aro.FrameSize[0],this.
Aro.FrameSize[1]],Apy,Apy,Apy,Apy,aBlend,true);if((this.AmN>0)&&!!this.Pr)CZ.AhT(
aClip,this.Pr,this.AqJ,XI-RC,XJ-RC,1,XI+RC,XJ-RC,1,XI+RC,XJ+RC,1,XI-RC,XJ+RC,1,[
0,0,this.Pr.FrameSize[0],this.Pr.FrameSize[1]],Apa,Apa,Apa,Apa,aBlend,true);XI=AAI;
XJ=AAJ;Jx=Jx.Ah;}if((this.AmN>0)&&!!this.Pr)CZ.AhT(aClip,this.Pr,this.AqJ,XI-RC,
XJ-RC,1,XI+RC,XJ-RC,1,XI+RC,XJ+RC,1,XI-RC,XJ+RC,1,[0,0,this.Pr.FrameSize[0],this.
Pr.FrameSize[1]],this.AmM,this.AmM,this.AmM,this.AmM,aBlend,true);},AeY:function(
E){var B;this.E2=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AS5:function(
E){var B;if(E===this.Arp)return;this.Arp=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AS6:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arq=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlG:function(E){var B;if(E===this.AmM)return;
this.AmM=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASU:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlA:
function(E){var B;if(A.aaX(E,this.Abd))return;this.Abd=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BmW:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Asj))return;this.Asj=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Blo:function(E){if(E===this.A45)return;this.A45=E;this.Background.L(E);
},Bmd:function(E){var B;if(E===this.ADp)return;this.ADp=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bng:function(E){var B;if(E===this.AG8)return;this.AG8=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnB:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OD))return;this.OD=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASS:function(E){var B;if(E===this.Pr)return;this.
Pr=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AST:function(E){var B;if(E<0)
E=0;this.AqJ=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E7);this.Background.AZ(0x3F);this.Background.H(Hp);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Aro=A.aaL(C.ARj);this.Pr=
A.aaL(C.ACx);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.E2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aro)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACe={AlL:null,Az$:
null,AY:0,AD_:10,Yl:function(){this.AlL=null;this.Az$=null;this.AY=0;},Aqj:function(
aX,aY){var Jx=null;if((this.AD_>0)&&(this.AY===this.AD_)){Jx=this.AlL;this.AlL=Jx.
Ah;Jx.Ah=null;this.AY=this.AY-1;}else Jx=A._NewObject(C.A5w,0);Jx.P0=aX;Jx.P1=aY;
if(!this.AlL){this.AlL=Jx;this.Az$=Jx;this.AY=1;}else{this.Az$.Ah=Jx;this.Az$=Jx;
this.AY=this.AY+1;}},AwO:function(E){if(E<1)E=1;this.AD_=E;},_Init:function(aArg
){this.__proto__=C.ACe;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARj={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SK={WN:null,Agp:null,N2:null,AF7:270,AGp:1,Kl:function(CZ,aClip,aOffset
,Ci,aBlend){var Vm;var Bcy;Vm=0;Bcy=this.AF7;while(Vm<0)Vm=Vm+360;while(Vm>=360)
Vm=Vm-360;var RD=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RE=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Kl.call(this,CZ,aClip,aOffset,Ci,aBlend);if(!!this.
N2&&(this.N2.AGX>0)){var Hf=this.N2.K0;while(!!Hf){var FC=(Hf.A4/this.N2.AGX)*Bcy;
this.BcE(CZ,aClip,RD,RE,Vm,FC,this.AGp,0,Hf.AQ,Ci,aBlend);Vm=Vm+FC;if(Vm>=360)Vm=
Vm-360;Hf=Hf.Ah;}}else this.BcE(CZ,aClip,RD,RE,Vm,this.AF7,this.AGp,0,0xFF800000
,Ci,aBlend);},BmV:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AF7)return;
this.AF7=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm6:function(E){var B;if(
E===this.WN)return;this.WN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm5:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGp)return;this.AGp=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcE:function(CZ,aClip,aX,aY,aStartAngle
,Xi,Alp,A0E,aColor,Ci,aBlend){var B;var JF;var Jy;var Agi;var Agj;var Agk;var Agl;
var Be_;var Be$;var Al8;var Al9;var LB;var B3=aColor;var Ke=(((Ci+1)*this.G7)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ke<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Ke)>>8)&0xFF)<<24);if(!this.WN)return;var BY=this.WN.FrameSize[0];var BK=
this.WN.FrameSize[1];var IZ=0;if(Xi>=360){aStartAngle=0;Xi=360;}if(A0E>0){var BcA=
aStartAngle+(Xi/2);JF=Math.sin(BcA*A.k$);Jy=Math.cos(BcA*A.k$);aX=aX+((A0E*JF)|0
);aY=aY-((A0E*Jy)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IZ=IZ+90;
}if(!this.Agp||!A.aaX(this.Agp.FrameSize,this.WN.FrameSize)){this.Agp=A._NewObject(
A.Graphics.Canvas,0);this.Agp.ArT(this.WN.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xi)<90)){JF=Math.sin(Xi*A.k$);Jy=Math.cos(Xi*A.k$);Agi=(-BY*Jy)+(BK*JF);Agj=(-BK
*Jy)-(BY*JF);Agk=BK*JF;Agl=-BK*Jy;Al8=-BY*Jy;Al9=-BY*JF;this.Agp.Avd([0,0,BY,BK]
,[0,0,this.Agp.FrameSize[0],this.Agp.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agp.AhT([0,0,BY,BK],this.WN,0,Agi,Agj+BK,1,Agk,Agl+BK,1,
0,BK,1,Al8,Al9+BK,1,[0,0,BY,BK],B3,B3,B3,B3,true,true);JF=Math.sin((aStartAngle+
IZ)*A.k$)*Alp;Jy=Math.cos((aStartAngle+IZ)*A.k$)*Alp;Agi=BK*JF;Agj=-BK*Jy;Agk=(BY
*Jy)+(BK*JF);Agl=(-BK*Jy)+(BY*JF);Be_=BY*Jy;Be$=BY*JF;CZ.AhT(aClip,this.Agp,0,Agi+
aX,Agj+aY,1,Agk+aX,Agl+aY,1,Be_+aX,Be$+aY,1,aX,aY,1,[0,0,BY,BK],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JF=Math.sin(((90+IZ)+
aStartAngle)*A.k$)*Alp;Jy=Math.cos(((90+IZ)+aStartAngle)*A.k$)*Alp;Agi=(-BY*Jy)+(
BK*JF);Agj=(-BK*Jy)-(BY*JF);Agk=BK*JF;Agl=-BK*Jy;Al8=-BY*Jy;Al9=-BY*JF;if(!IZ)LB=[
aX,-10000,10000,aY];else if(IZ===90)LB=[aX,aY,10000,10000];else if(IZ===180)LB=[-
10000,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CZ.AhT(A.lb(aClip,LB),this.WN,0
,Agi+aX,Agj+aY,1,Agk+aX,Agl+aY,1,aX,aY,1,Al8+aX,Al9+aY,1,[0,0,BY,BK],B3,B3,B3,B3
,aBlend,true);IZ=IZ+90;if(IZ>=360)IZ=IZ-360;Xi=Xi-(90-aStartAngle);}while(Xi>=90
){JF=Math.sin((90+IZ)*A.k$)*Alp;Jy=Math.cos((90+IZ)*A.k$)*Alp;Agi=(-BY*Jy)+(BK*JF
);Agj=(-BK*Jy)-(BY*JF);Agk=BK*JF;Agl=-BK*Jy;Al8=-BY*Jy;Al9=-BY*JF;if(!IZ)LB=[aX,-
10000,10000,aY];else if(IZ===90)LB=[aX,aY,10000,10000];else if(IZ===180)LB=[-10000
,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CZ.AhT(A.lb(aClip,LB),this.WN,0,Agi+
aX,Agj+aY,1,Agk+aX,Agl+aY,1,aX,aY,1,Al8+aX,Al9+aY,1,[0,0,BY,BK],B3,B3,B3,B3,aBlend
,true);IZ=IZ+90;if(IZ>=360)IZ=IZ-360;Xi=Xi-90;}JF=Math.sin((Xi+IZ)*A.k$)*Alp;Jy=
Math.cos((Xi+IZ)*A.k$)*Alp;Agi=(-BY*Jy)+(BK*JF);Agj=(-BK*Jy)-(BY*JF);Agk=BK*JF;Agl=-
BK*Jy;Al8=-BY*Jy;Al9=-BY*JF;if(!IZ)LB=[aX,-10000,10000,aY];else if(IZ===90)LB=[aX
,aY,10000,10000];else if(IZ===180)LB=[-10000,aY,aX,10000];else LB=[-10000,-10000
,aX,aY];CZ.AhT(A.lb(aClip,LB),this.WN,0,Agi+aX,Agj+aY,1,Agk+aX,Agl+aY,1,aX,aY,1,
Al8+aX,Al9+aY,1,[0,0,BY,BK],B3,B3,B3,B3,aBlend,true);}},Aca:function(E){var B;this.
N2=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SK;this.H(IS);this.WN=A.aaL(C.
ATH);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATH={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A4:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AT9={K0:null,MS:null,AY:10,AGX:0,Or:function(A8,aColor){var Hf;
Hf=A._NewObject(C.Record,0);Hf.A4=A8;Hf.AQ=aColor;if(!this.K0){this.K0=Hf;this.MS=
Hf;this.AY=1;}else{this.MS.Ah=Hf;this.MS=Hf;this.AY=this.AY+1;}this.AGX=this.AGX+
A8;},_Init:function(aArg){this.__proto__=C.AT9;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATI={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACx={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SK.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARj[0]._this)&&(B._cycle!=D))B._Done(C.ARj[0].
_this=null);if((B=C.ATH[0]._this)&&(B._cycle!=D))B._Done(C.ATH[0]._this=null);if((
B=C.ATI[0]._this)&&(B._cycle!=D))B._Done(C.ATI[0]._this=null);if((B=C.ACx[0]._this
)&&(B._cycle!=D))B._Done(C.ACx[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */