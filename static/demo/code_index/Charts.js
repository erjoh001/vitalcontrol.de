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
var B9=[10,10];var BC=[80,50];var EU=[0,0,360,240];var Hc=[0,0,370,270];var I7=[0
,0,260,240];
C.A3p={Ag:null,PJ:0,PK:0,_Init:function(aArg){this.__proto__=C.A3p;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DH={EP:null,Aql:null,Pb:null,Background:null,Aqm:0xFFFFFFFF,Aqn:3,Al3:0xFFFFFFFF
,Al4:0,Aas:A.wf,Arf:B9,A2M:0xFF000000,ABT:0xFF6E0E0C,AFv:0xFF6E0E0C,Om:BC,ApL:0,
J5:function(CT,aClip,aOffset,Cb,aBlend){var B;var W8=0;var W9=0;var Azi=0;var Azj=
0;var Re=this.M[0]+aOffset[0];var Rf=this.M[1]+aOffset[1];var Aok=this.Al3;var AoI=
this.Aqm;var AoE=this.ABT;var Apo=this.AFv;var Ak_=this.Aqn/2;var Rd=this.Al4/2;
var JZ=(((Cb+1)*this.GS)>>8)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(JZ<256){Aok=(
Aok&0x00FFFFFF)|((((((Aok>>24)&0xFF)*JZ)>>8)&0xFF)<<24);AoI=(AoI&0x00FFFFFF)|((((((
AoI>>24)&0xFF)*JZ)>>8)&0xFF)<<24);AoE=(AoE&0x00FFFFFF)|((((((AoE>>24)&0xFF)*JZ)>>
8)&0xFF)<<24);Apo=(Apo&0x00FFFFFF)|((((((Apo>>24)&0xFF)*JZ)>>8)&0xFF)<<24);}A.Core.
O.J5.call(this,CT,aClip,aOffset,Cb,aBlend);if(((this.ABT>>24)&0xFF)>0){var C9;for(
C9=this.Aas[1]+Rf;C9>=Rf;C9=C9-this.Om[1])CT.At1(aClip,[Re,C9],[Re+((B=this.M)[2
]-B[0]),C9],AoE,AoE,aBlend);for(C9=(this.Aas[1]+Rf)+this.Om[1];C9<(Rf+((B=this.M
)[3]-B[1]));C9=C9+this.Om[1])CT.At1(aClip,[Re,C9],[Re+((B=this.M)[2]-B[0]),C9],AoE
,AoE,aBlend);}if(((this.AFv>>24)&0xFF)>0){var Ee;for(Ee=this.Aas[0]+Re;Ee>=Re;Ee=
Ee-this.Om[0])CT.At1(aClip,[Ee,Rf],[Ee,Rf+((B=this.M)[3]-B[1])],Apo,Apo,aBlend);
for(Ee=(this.Aas[0]+Re)+this.Om[0];Ee<(Re+((B=this.M)[2]-B[0]));Ee=Ee+this.Om[0]
)CT.At1(aClip,[Ee,Rf],[Ee,Rf+((B=this.M)[3]-B[1])],Apo,Apo,aBlend);}if(!this.EP)
return;var Jo=this.EP.Ak0;if(!!Jo){W8=(Re+this.Aas[0])+(Jo.PJ*this.Arf[0]);W9=(Rf+
this.Aas[1])+(Jo.PK*this.Arf[1]);Jo=Jo.Ag;}while(!!Jo){Azi=(Re+this.Aas[0])+(Jo.
PJ*this.Arf[0]);Azj=(Rf+this.Aas[1])+(Jo.PK*this.Arf[1]);var JS=Azi-W8;var JT=Azj-
W9;var IO=Math.sqrt((JS*JS)+(JT*JT));if(!!IO){JS=JS/IO;JT=JT/IO;}if(!!this.Aql)CT.
Ag_(aClip,this.Aql,0,W8-(JT*Ak_),W9+(JS*Ak_),1,W8+(JT*Ak_),W9-(JS*Ak_),1,Azi+(JT
*Ak_),Azj-(JS*Ak_),1,Azi-(JT*Ak_),Azj+(JS*Ak_),1,[0,0,this.Aql.FrameSize[0],this.
Aql.FrameSize[1]],AoI,AoI,AoI,AoI,aBlend,true);if((this.Al4>0)&&!!this.Pb)CT.Ag_(
aClip,this.Pb,this.ApL,W8-Rd,W9-Rd,1,W8+Rd,W9-Rd,1,W8+Rd,W9+Rd,1,W8-Rd,W9+Rd,1,[
0,0,this.Pb.FrameSize[0],this.Pb.FrameSize[1]],Aok,Aok,Aok,Aok,aBlend,true);W8=Azi;
W9=Azj;Jo=Jo.Ag;}if((this.Al4>0)&&!!this.Pb)CT.Ag_(aClip,this.Pb,this.ApL,W8-Rd,
W9-Rd,1,W8+Rd,W9-Rd,1,W8+Rd,W9+Rd,1,W8-Rd,W9+Rd,1,[0,0,this.Pb.FrameSize[0],this.
Pb.FrameSize[1]],this.Al3,this.Al3,this.Al3,this.Al3,aBlend,true);},Ad$:function(
E){var B;this.EP=E;this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQ7:function(
E){var B;if(E===this.Aqm)return;this.Aqm=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},AQ8:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Aqn=E;this.Bd([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiV:function(E){var B;if(E===this.Al3)return;
this.Al3=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQW:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.Al4=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BiP:
function(E){var B;if(A.aaX(E,this.Aas))return;this.Aas=E;this.Bd([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bj7:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Arf))return;this.Arf=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Biy:function(E){if(E===this.A2M)return;this.A2M=E;this.Background.L(E);
},Bjs:function(E){var B;if(E===this.ABT)return;this.ABT=E;this.Bd([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bko:function(E){var B;if(E===this.AFv)return;this.AFv=E;
this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AmU:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.Om))return;this.Om=E;this.Bd([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQU:function(E){var B;if(E===this.Pb)return;this.
Pb=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AQV:function(E){var B;if(E<0)
E=0;this.ApL=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);
this.__proto__=C.DH;this.G(EU);this.Background.AV(0x3F);this.Background.G(Hc);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Aql=A.aaL(C.APo);this.Pb=
A.aaL(C.AA5);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();
A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.EP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aql)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.AAL={Ak0:null,AyL:
null,AR:0,ACy:10,XK:function(){this.Ak0=null;this.AyL=null;this.AR=0;},Aps:function(
aX,aY){var Jo=null;if((this.ACy>0)&&(this.AR===this.ACy)){Jo=this.Ak0;this.Ak0=Jo.
Ag;Jo.Ag=null;this.AR=this.AR-1;}else Jo=A._NewObject(C.A3p,0);Jo.PJ=aX;Jo.PK=aY;
if(!this.Ak0){this.Ak0=Jo;this.AyL=Jo;this.AR=1;}else{this.AyL.Ag=Jo;this.AyL=Jo;
this.AR=this.AR+1;}},AvE:function(E){if(E<1)E=1;this.ACy=E;},_Init:function(aArg
){this.__proto__=C.AAL;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ak0)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AyL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.APo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.Sh={Wa:null,AfC:null,NM:null,AEu:270,AEO:1,J5:function(CT,aClip,aOffset
,Cb,aBlend){var UO;var A$3;UO=0;A$3=this.AEu;while(UO<0)UO=UO+360;while(UO>=360)
UO=UO-360;var Re=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Rf=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.O.J5.call(this,CT,aClip,aOffset,Cb,aBlend);if(!!this.
NM&&(this.NM.AFj>0)){var G4=this.NM.KN;while(!!G4){var Fo=(G4.A4/this.NM.AFj)*A$3;
this.A$9(CT,aClip,Re,Rf,UO,Fo,this.AEO,0,G4.AP,Cb,aBlend);UO=UO+Fo;if(UO>=360)UO=
UO-360;G4=G4.Ag;}}else this.A$9(CT,aClip,Re,Rf,UO,this.AEu,this.AEO,0,0xFF800000
,Cb,aBlend);},Bj6:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AEu)return;
this.AEu=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bkd:function(E){var B;if(
E===this.Wa)return;this.Wa=E;this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bkb:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AEO)return;this.AEO=E;this.
Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},A$9:function(CT,aClip,aX,aY,aStartAngle
,WG,AkD,AYq,aColor,Cb,aBlend){var B;var Jw;var Jp;var Afx;var Afy;var Afz;var AfA;
var Bcs;var Bct;var All;var Alm;var Lo;var BX=aColor;var JZ=(((Cb+1)*this.GS)>>8
)+1;aBlend=aBlend&&((this.T&0x2)===0x2);if(JZ<256)BX=(BX&0x00FFFFFF)|((((((BX>>24
)&0xFF)*JZ)>>8)&0xFF)<<24);if(!this.Wa)return;var BR=this.Wa.FrameSize[0];var BH=
this.Wa.FrameSize[1];var IQ=0;if(WG>=360){aStartAngle=0;WG=360;}if(AYq>0){var A$5=
aStartAngle+(WG/2);Jw=Math.sin(A$5*A.k$);Jp=Math.cos(A$5*A.k$);aX=aX+((AYq*Jw)|0
);aY=aY-((AYq*Jp)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IQ=IQ+90;
}if(!this.AfC||!A.aaX(this.AfC.FrameSize,this.Wa.FrameSize)){this.AfC=A._NewObject(
A.Graphics.Canvas,0);this.AfC.AqQ(this.Wa.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
WG)<90)){Jw=Math.sin(WG*A.k$);Jp=Math.cos(WG*A.k$);Afx=(-BR*Jp)+(BH*Jw);Afy=(-BH
*Jp)-(BR*Jw);Afz=BH*Jw;AfA=-BH*Jp;All=-BR*Jp;Alm=-BR*Jw;this.AfC.Aue([0,0,BR,BH]
,[0,0,this.AfC.FrameSize[0],this.AfC.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.AfC.Ag_([0,0,BR,BH],this.Wa,0,Afx,Afy+BH,1,Afz,AfA+BH,1,
0,BH,1,All,Alm+BH,1,[0,0,BR,BH],BX,BX,BX,BX,true,true);Jw=Math.sin((aStartAngle+
IQ)*A.k$)*AkD;Jp=Math.cos((aStartAngle+IQ)*A.k$)*AkD;Afx=BH*Jw;Afy=-BH*Jp;Afz=(BR
*Jp)+(BH*Jw);AfA=(-BH*Jp)+(BR*Jw);Bcs=BR*Jp;Bct=BR*Jw;CT.Ag_(aClip,this.AfC,0,Afx+
aX,Afy+aY,1,Afz+aX,AfA+aY,1,Bcs+aX,Bct+aY,1,aX,aY,1,[0,0,BR,BH],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){Jw=Math.sin(((90+IQ)+
aStartAngle)*A.k$)*AkD;Jp=Math.cos(((90+IQ)+aStartAngle)*A.k$)*AkD;Afx=(-BR*Jp)+(
BH*Jw);Afy=(-BH*Jp)-(BR*Jw);Afz=BH*Jw;AfA=-BH*Jp;All=-BR*Jp;Alm=-BR*Jw;if(!IQ)Lo=[
aX,-10000,10000,aY];else if(IQ===90)Lo=[aX,aY,10000,10000];else if(IQ===180)Lo=[-
10000,aY,aX,10000];else Lo=[-10000,-10000,aX,aY];CT.Ag_(A.lb(aClip,Lo),this.Wa,0
,Afx+aX,Afy+aY,1,Afz+aX,AfA+aY,1,aX,aY,1,All+aX,Alm+aY,1,[0,0,BR,BH],BX,BX,BX,BX
,aBlend,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WG=WG-(90-aStartAngle);}while(WG>=90
){Jw=Math.sin((90+IQ)*A.k$)*AkD;Jp=Math.cos((90+IQ)*A.k$)*AkD;Afx=(-BR*Jp)+(BH*Jw
);Afy=(-BH*Jp)-(BR*Jw);Afz=BH*Jw;AfA=-BH*Jp;All=-BR*Jp;Alm=-BR*Jw;if(!IQ)Lo=[aX,-
10000,10000,aY];else if(IQ===90)Lo=[aX,aY,10000,10000];else if(IQ===180)Lo=[-10000
,aY,aX,10000];else Lo=[-10000,-10000,aX,aY];CT.Ag_(A.lb(aClip,Lo),this.Wa,0,Afx+
aX,Afy+aY,1,Afz+aX,AfA+aY,1,aX,aY,1,All+aX,Alm+aY,1,[0,0,BR,BH],BX,BX,BX,BX,aBlend
,true);IQ=IQ+90;if(IQ>=360)IQ=IQ-360;WG=WG-90;}Jw=Math.sin((WG+IQ)*A.k$)*AkD;Jp=
Math.cos((WG+IQ)*A.k$)*AkD;Afx=(-BR*Jp)+(BH*Jw);Afy=(-BH*Jp)-(BR*Jw);Afz=BH*Jw;AfA=-
BH*Jp;All=-BR*Jp;Alm=-BR*Jw;if(!IQ)Lo=[aX,-10000,10000,aY];else if(IQ===90)Lo=[aX
,aY,10000,10000];else if(IQ===180)Lo=[-10000,aY,aX,10000];else Lo=[-10000,-10000
,aX,aY];CT.Ag_(A.lb(aClip,Lo),this.Wa,0,Afx+aX,Afy+aY,1,Afz+aX,AfA+aY,1,aX,aY,1,
All+aX,Alm+aY,1,[0,0,BR,BH],BX,BX,BX,BX,aBlend,true);}},Abv:function(E){var B;this.
NM=E;this.An();this.Bd([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.Sh;this.G(I7);this.Wa=A.aaL(C.
ARD);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Wa)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.NM)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ARD={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ag:null,A4:0,AP:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AR1={KN:null,MG:null,AR:10,AFj:0,Od:function(A1,aColor){var G4;
G4=A._NewObject(C.Record,0);G4.A4=A1;G4.AP=aColor;if(!this.KN){this.KN=G4;this.MG=
G4;this.AR=1;}else{this.MG.Ag=G4;this.MG=G4;this.AR=this.AR+1;}this.AFj=this.AFj+
A1;},_Init:function(aArg){this.__proto__=C.AR1;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ARE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.AA5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DH.__proto__=A.Core.O;C.Sh.__proto__=A.Core.O;};C._ReInit=function(
){};C.Dz=function(D){var B;if((B=C.APo[0]._this)&&(B._cycle!=D))B._Done(C.APo[0].
_this=null);if((B=C.ARD[0]._this)&&(B._cycle!=D))B._Done(C.ARD[0]._this=null);if((
B=C.ARE[0]._this)&&(B._cycle!=D))B._Done(C.ARE[0]._this=null);if((B=C.AA5[0]._this
)&&(B._cycle!=D))B._Done(C.AA5[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */