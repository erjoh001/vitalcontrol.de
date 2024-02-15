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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acu)throw new Error("The unit file 'Charts.js' included twice!");index.
acu=(function(){var A=index;var C={};
var B9=[10,10];var BC=[80,50];var EW=[0,0,360,240];var He=[0,0,370,270];var I7=[0
,0,260,240];
C.A35={Ag:null,PN:0,PO:0,_Init:function(aArg){this.__proto__=C.A35;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DJ={EQ:null,AqA:null,Pe:null,Background:null,AqB:0xFFFFFFFF,AqC:3,Ame:0xFFFFFFFF
,Amf:0,Aaz:A.wf,Arv:B9,A3q:0xFF000000,ACj:0xFF6E0E0C,AFW:0xFF6E0E0C,Op:BC,Ap0:0,
J7:function(CU,aClip,aOffset,Ce,aBlend){var B;var Xc=0;var Xd=0;var AzH=0;var AzI=
0;var Ri=this.M[0]+aOffset[0];var Rj=this.M[1]+aOffset[1];var Aov=this.Ame;var AoT=
this.AqB;var AoP=this.ACj;var Apz=this.AFW;var Alk=this.AqC/2;var Rh=this.Amf/2;
var J1=(((Ce+1)*this.GT)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(J1<256){Aov=(
Aov&0x00FFFFFF)|((((((Aov>>24)&0xFF)*J1)>>8)&0xFF)<<24);AoT=(AoT&0x00FFFFFF)|((((((
AoT>>24)&0xFF)*J1)>>8)&0xFF)<<24);AoP=(AoP&0x00FFFFFF)|((((((AoP>>24)&0xFF)*J1)>>
8)&0xFF)<<24);Apz=(Apz&0x00FFFFFF)|((((((Apz>>24)&0xFF)*J1)>>8)&0xFF)<<24);}A.Core.
O.J7.call(this,CU,aClip,aOffset,Ce,aBlend);if(((this.ACj>>24)&0xFF)>0){var C$;for(
C$=this.Aaz[1]+Rj;C$>=Rj;C$=C$-this.Op[1])CU.Aun(aClip,[Ri,C$],[Ri+((B=this.M)[2
]-B[0]),C$],AoP,AoP,aBlend);for(C$=(this.Aaz[1]+Rj)+this.Op[1];C$<(Rj+((B=this.M
)[3]-B[1]));C$=C$+this.Op[1])CU.Aun(aClip,[Ri,C$],[Ri+((B=this.M)[2]-B[0]),C$],AoP
,AoP,aBlend);}if(((this.AFW>>24)&0xFF)>0){var Ef;for(Ef=this.Aaz[0]+Ri;Ef>=Ri;Ef=
Ef-this.Op[0])CU.Aun(aClip,[Ef,Rj],[Ef,Rj+((B=this.M)[3]-B[1])],Apz,Apz,aBlend);
for(Ef=(this.Aaz[0]+Ri)+this.Op[0];Ef<(Ri+((B=this.M)[2]-B[0]));Ef=Ef+this.Op[0]
)CU.Aun(aClip,[Ef,Rj],[Ef,Rj+((B=this.M)[3]-B[1])],Apz,Apz,aBlend);}if(!this.EQ)
return;var Jo=this.EQ.Ala;if(!!Jo){Xc=(Ri+this.Aaz[0])+(Jo.PN*this.Arv[0]);Xd=(Rj+
this.Aaz[1])+(Jo.PO*this.Arv[1]);Jo=Jo.Ag;}while(!!Jo){AzH=(Ri+this.Aaz[0])+(Jo.
PN*this.Arv[0]);AzI=(Rj+this.Aaz[1])+(Jo.PO*this.Arv[1]);var JU=AzH-Xc;var JV=AzI-
Xd;var IN=Math.sqrt((JU*JU)+(JV*JV));if(!!IN){JU=JU/IN;JV=JV/IN;}if(!!this.AqA)CU.
Ahi(aClip,this.AqA,0,Xc-(JV*Alk),Xd+(JU*Alk),1,Xc+(JV*Alk),Xd-(JU*Alk),1,AzH+(JV
*Alk),AzI-(JU*Alk),1,AzH-(JV*Alk),AzI+(JU*Alk),1,[0,0,this.AqA.FrameSize[0],this.
AqA.FrameSize[1]],AoT,AoT,AoT,AoT,aBlend,true);if((this.Amf>0)&&!!this.Pe)CU.Ahi(
aClip,this.Pe,this.Ap0,Xc-Rh,Xd-Rh,1,Xc+Rh,Xd-Rh,1,Xc+Rh,Xd+Rh,1,Xc-Rh,Xd+Rh,1,[
0,0,this.Pe.FrameSize[0],this.Pe.FrameSize[1]],Aov,Aov,Aov,Aov,aBlend,true);Xc=AzH;
Xd=AzI;Jo=Jo.Ag;}if((this.Amf>0)&&!!this.Pe)CU.Ahi(aClip,this.Pe,this.Ap0,Xc-Rh,
Xd-Rh,1,Xc+Rh,Xd-Rh,1,Xc+Rh,Xd+Rh,1,Xc-Rh,Xd+Rh,1,[0,0,this.Pe.FrameSize[0],this.
Pe.FrameSize[1]],this.Ame,this.Ame,this.Ame,this.Ame,aBlend,true);},Aek:function(
E){var B;this.EQ=E;this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ARG:function(
E){var B;if(E===this.AqB)return;this.AqB=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ARH:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.AqC=E;this.Bd([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BjD:function(E){var B;if(E===this.Ame)return;
this.Ame=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ARv:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.Amf=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bjx:
function(E){var B;if(A.aaX(E,this.Aaz))return;this.Aaz=E;this.Bd([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BkP:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Arv))return;this.Arv=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bje:function(E){if(E===this.A3q)return;this.A3q=E;this.Background.L(E);
},Bka:function(E){var B;if(E===this.ACj)return;this.ACj=E;this.Bd([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bk8:function(E){var B;if(E===this.AFW)return;this.AFW=E;
this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Am7:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.Op))return;this.Op=E;this.Bd([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ARt:function(E){var B;if(E===this.Pe)return;this.
Pe=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ARu:function(E){var B;if(E<0)
E=0;this.Ap0=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);
this.__proto__=C.DJ;this.H(EW);this.Background.AW(0x3F);this.Background.H(He);this.
Background.L(0xFF000000);this.J(this.Background,0);this.AqA=A.aaL(C.APW);this.Pe=
A.aaL(C.ABu);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();
A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.EQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqA)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ABa={Ala:null,Ay_:
null,AV:0,AC0:10,XQ:function(){this.Ala=null;this.Ay_=null;this.AV=0;},ApE:function(
aX,aY){var Jo=null;if((this.AC0>0)&&(this.AV===this.AC0)){Jo=this.Ala;this.Ala=Jo.
Ag;Jo.Ag=null;this.AV=this.AV-1;}else Jo=A._NewObject(C.A35,0);Jo.PN=aX;Jo.PO=aY;
if(!this.Ala){this.Ala=Jo;this.Ay_=Jo;this.AV=1;}else{this.Ay_.Ag=Jo;this.Ay_=Jo;
this.AV=this.AV+1;}},Av1:function(E){if(E<1)E=1;this.AC0=E;},_Init:function(aArg
){this.__proto__=C.ABa;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ala)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.APW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.Sl={Wg:null,AfO:null,NR:null,AEX:270,AFf:1,J7:function(CU,aClip,aOffset
,Ce,aBlend){var UX;var BaG;UX=0;BaG=this.AEX;while(UX<0)UX=UX+360;while(UX>=360)
UX=UX-360;var Ri=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Rj=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.O.J7.call(this,CU,aClip,aOffset,Ce,aBlend);if(!!this.
NR&&(this.NR.AFK>0)){var G5=this.NR.KR;while(!!G5){var Fp=(G5.A4/this.NR.AFK)*BaG;
this.BaM(CU,aClip,Ri,Rj,UX,Fp,this.AFf,0,G5.AP,Ce,aBlend);UX=UX+Fp;if(UX>=360)UX=
UX-360;G5=G5.Ag;}}else this.BaM(CU,aClip,Ri,Rj,UX,this.AEX,this.AFf,0,0xFF800000
,Ce,aBlend);},BkO:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AEX)return;
this.AEX=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BkX:function(E){var B;if(
E===this.Wg)return;this.Wg=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BkV:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AFf)return;this.AFf=E;this.
Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BaM:function(CU,aClip,aX,aY,aStartAngle
,WN,AkP,AY6,aColor,Ce,aBlend){var B;var Jv;var Jp;var AfJ;var AfK;var AfL;var AfM;
var Bc8;var Bc9;var Alx;var Aly;var Lt;var BZ=aColor;var J1=(((Ce+1)*this.GT)>>8
)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(J1<256)BZ=(BZ&0x00FFFFFF)|((((((BZ>>24
)&0xFF)*J1)>>8)&0xFF)<<24);if(!this.Wg)return;var BR=this.Wg.FrameSize[0];var BH=
this.Wg.FrameSize[1];var IQ=0;if(WN>=360){aStartAngle=0;WN=360;}if(AY6>0){var BaI=
aStartAngle+(WN/2);Jv=Math.sin(BaI*A.k$);Jp=Math.cos(BaI*A.k$);aX=aX+((AY6*Jv)|0
);aY=aY-((AY6*Jp)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IQ=IQ+90;
}if(!this.AfO||!A.aaX(this.AfO.FrameSize,this.Wg.FrameSize)){this.AfO=A._NewObject(
A.Graphics.Canvas,0);this.AfO.Aq6(this.Wg.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
WN)<90)){Jv=Math.sin(WN*A.k$);Jp=Math.cos(WN*A.k$);AfJ=(-BR*Jp)+(BH*Jv);AfK=(-BH
*Jp)-(BR*Jv);AfL=BH*Jv;AfM=-BH*Jp;Alx=-BR*Jp;Aly=-BR*Jv;this.AfO.AuC([0,0,BR,BH]
,[0,0,this.AfO.FrameSize[0],this.AfO.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.AfO.Ahi([0,0,BR,BH],this.Wg,0,AfJ,AfK+BH,1,AfL,AfM+BH,1,
0,BH,1,Alx,Aly+BH,1,[0,0,BR,BH],BZ,BZ,BZ,BZ,true,true);Jv=Math.sin((aStartAngle+
IQ)*A.k$)*AkP;Jp=Math.cos((aStartAngle+IQ)*A.k$)*AkP;AfJ=BH*Jv;AfK=-BH*Jp;AfL=(BR
*Jp)+(BH*Jv);AfM=(-BH*Jp)+(BR*Jv);Bc8=BR*Jp;Bc9=BR*Jv;CU.Ahi(aClip,this.AfO,0,AfJ+
aX,AfK+aY,1,AfL+aX,AfM+aY,1,Bc8+aX,Bc9+aY,1,aX,aY,1,[0,0,BR,BH],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){Jv=Math.sin(((90+IQ)+
aStartAngle)*A.k$)*AkP;Jp=Math.cos(((90+IQ)+aStartAngle)*A.k$)*AkP;AfJ=(-BR*Jp)+(
BH*Jv);AfK=(-BH*Jp)-(BR*Jv);AfL=BH*Jv;AfM=-BH*Jp;Alx=-BR*Jp;Aly=-BR*Jv;if(!IQ)Lt=[
aX,-10000,10000,aY];else if(IQ===90)Lt=[aX,aY,10000,10000];else if(IQ===180)Lt=[-
10000,aY,aX,10000];else Lt=[-10000,-10000,aX,aY];CU.Ahi(A.lb(aClip,Lt),this.Wg,0
,AfJ+aX,AfK+aY,1,AfL+aX,AfM+aY,1,aX,aY,1,Alx+aX,Aly+aY,1,[0,0,BR,BH],BZ,BZ,BZ,BZ
,aBlend,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WN=WN-(90-aStartAngle);}while(WN>=90
){Jv=Math.sin((90+IQ)*A.k$)*AkP;Jp=Math.cos((90+IQ)*A.k$)*AkP;AfJ=(-BR*Jp)+(BH*Jv
);AfK=(-BH*Jp)-(BR*Jv);AfL=BH*Jv;AfM=-BH*Jp;Alx=-BR*Jp;Aly=-BR*Jv;if(!IQ)Lt=[aX,-
10000,10000,aY];else if(IQ===90)Lt=[aX,aY,10000,10000];else if(IQ===180)Lt=[-10000
,aY,aX,10000];else Lt=[-10000,-10000,aX,aY];CU.Ahi(A.lb(aClip,Lt),this.Wg,0,AfJ+
aX,AfK+aY,1,AfL+aX,AfM+aY,1,aX,aY,1,Alx+aX,Aly+aY,1,[0,0,BR,BH],BZ,BZ,BZ,BZ,aBlend
,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WN=WN-90;}Jv=Math.sin((WN+IQ)*A.k$)*AkP;Jp=
Math.cos((WN+IQ)*A.k$)*AkP;AfJ=(-BR*Jp)+(BH*Jv);AfK=(-BH*Jp)-(BR*Jv);AfL=BH*Jv;AfM=-
BH*Jp;Alx=-BR*Jp;Aly=-BR*Jv;if(!IQ)Lt=[aX,-10000,10000,aY];else if(IQ===90)Lt=[aX
,aY,10000,10000];else if(IQ===180)Lt=[-10000,aY,aX,10000];else Lt=[-10000,-10000
,aX,aY];CU.Ahi(A.lb(aClip,Lt),this.Wg,0,AfJ+aX,AfK+aY,1,AfL+aX,AfM+aY,1,aX,aY,1,
Alx+aX,Aly+aY,1,[0,0,BR,BH],BZ,BZ,BZ,BZ,aBlend,true);}},AbD:function(E){var B;this.
NR=E;this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.Sl;this.H(I7);this.Wg=A.aaL(C.
ASe);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Wg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.NR)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ASe={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ag:null,A4:0,AP:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.ASC={KR:null,MK:null,AV:10,AFK:0,Of:function(A1,aColor){var G5;
G5=A._NewObject(C.Record,0);G5.A4=A1;G5.AP=aColor;if(!this.KR){this.KR=G5;this.MK=
G5;this.AV=1;}else{this.MK.Ag=G5;this.MK=G5;this.AV=this.AV+1;}this.AFK=this.AFK+
A1;},_Init:function(aArg){this.__proto__=C.ASC;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ASf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ABu={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DJ.__proto__=A.Core.O;C.Sl.__proto__=A.Core.O;};C._ReInit=function(
){};C.DB=function(D){var B;if((B=C.APW[0]._this)&&(B._cycle!=D))B._Done(C.APW[0].
_this=null);if((B=C.ASe[0]._this)&&(B._cycle!=D))B._Done(C.ASe[0]._this=null);if((
B=C.ASf[0]._this)&&(B._cycle!=D))B._Done(C.ASf[0]._this=null);if((B=C.ABu[0]._this
)&&(B._cycle!=D))B._Done(C.ABu[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */