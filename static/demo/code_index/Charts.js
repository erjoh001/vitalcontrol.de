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
var Ce=[10,10];var BD=[80,50];var E6=[0,0,360,240];var Hr=[0,0,370,270];var IU=[0
,0,260,240];
C.A5Z={Ah:null,P7:0,P8:0,_Init:function(aArg){this.__proto__=C.A5Z;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arl:null,Pw:null,Background:null,Arm:0xFFFFFFFF,Arn:3,AmM:0xFFFFFFFF
,AmN:0,Aba:A.wf,Ash:Ce,A5w:0xFF000000,ADx:0xFF6E0E0C,AHf:0xFF6E0E0C,OG:BD,AqG:0,
Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;var XF=0;var XG=0;var AAN=0;var AAO=
0;var RE=this.M[0]+aOffset[0];var RF=this.M[1]+aOffset[1];var Ao9=this.AmM;var Apw=
this.Arm;var Aps=this.ADx;var Ap$=this.AHf;var AlU=this.Arn/2;var RD=this.AmN/2;
var Kh=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kh<256){Ao9=(
Ao9&0x00FFFFFF)|((((((Ao9>>24)&0xFF)*Kh)>>8)&0xFF)<<24);Apw=(Apw&0x00FFFFFF)|((((((
Apw>>24)&0xFF)*Kh)>>8)&0xFF)<<24);Aps=(Aps&0x00FFFFFF)|((((((Aps>>24)&0xFF)*Kh)>>
8)&0xFF)<<24);Ap$=(Ap$&0x00FFFFFF)|((((((Ap$>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}A.Core.
P.Ko.call(this,CY,aClip,aOffset,Ck,aBlend);if(((this.ADx>>24)&0xFF)>0){var Dh;for(
Dh=this.Aba[1]+RF;Dh>=RF;Dh=Dh-this.OG[1])CY.Au9(aClip,[RE,Dh],[RE+((B=this.M)[2
]-B[0]),Dh],Aps,Aps,aBlend);for(Dh=(this.Aba[1]+RF)+this.OG[1];Dh<(RF+((B=this.M
)[3]-B[1]));Dh=Dh+this.OG[1])CY.Au9(aClip,[RE,Dh],[RE+((B=this.M)[2]-B[0]),Dh],Aps
,Aps,aBlend);}if(((this.AHf>>24)&0xFF)>0){var Ep;for(Ep=this.Aba[0]+RE;Ep>=RE;Ep=
Ep-this.OG[0])CY.Au9(aClip,[Ep,RF],[Ep,RF+((B=this.M)[3]-B[1])],Ap$,Ap$,aBlend);
for(Ep=(this.Aba[0]+RE)+this.OG[0];Ep<(RE+((B=this.M)[2]-B[0]));Ep=Ep+this.OG[0]
)CY.Au9(aClip,[Ep,RF],[Ep,RF+((B=this.M)[3]-B[1])],Ap$,Ap$,aBlend);}if(!this.EZ)
return;var JA=this.EZ.AlK;if(!!JA){XF=(RE+this.Aba[0])+(JA.P7*this.Ash[0]);XG=(RF+
this.Aba[1])+(JA.P8*this.Ash[1]);JA=JA.Ah;}while(!!JA){AAN=(RE+this.Aba[0])+(JA.
P7*this.Ash[0]);AAO=(RF+this.Aba[1])+(JA.P8*this.Ash[1]);var J$=AAN-XF;var Ka=AAO-
XG;var IY=Math.sqrt((J$*J$)+(Ka*Ka));if(!!IY){J$=J$/IY;Ka=Ka/IY;}if(!!this.Arl)CY.
AhV(aClip,this.Arl,0,XF-(Ka*AlU),XG+(J$*AlU),1,XF+(Ka*AlU),XG-(J$*AlU),1,AAN+(Ka
*AlU),AAO-(J$*AlU),1,AAN-(Ka*AlU),AAO+(J$*AlU),1,[0,0,this.Arl.FrameSize[0],this.
Arl.FrameSize[1]],Apw,Apw,Apw,Apw,aBlend,true);if((this.AmN>0)&&!!this.Pw)CY.AhV(
aClip,this.Pw,this.AqG,XF-RD,XG-RD,1,XF+RD,XG-RD,1,XF+RD,XG+RD,1,XF-RD,XG+RD,1,[
0,0,this.Pw.FrameSize[0],this.Pw.FrameSize[1]],Ao9,Ao9,Ao9,Ao9,aBlend,true);XF=AAN;
XG=AAO;JA=JA.Ah;}if((this.AmN>0)&&!!this.Pw)CY.AhV(aClip,this.Pw,this.AqG,XF-RD,
XG-RD,1,XF+RD,XG-RD,1,XF+RD,XG+RD,1,XF-RD,XG+RD,1,[0,0,this.Pw.FrameSize[0],this.
Pw.FrameSize[1]],this.AmM,this.AmM,this.AmM,this.AmM,aBlend,true);},Ae0:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATp:function(
E){var B;if(E===this.Arm)return;this.Arm=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATq:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arn=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmr:function(E){var B;if(E===this.AmM)return;
this.AmM=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATe:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmm:
function(E){var B;if(A.aaX(E,this.Aba))return;this.Aba=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BnH:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ash))return;this.Ash=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bma:function(E){if(E===this.A5w)return;this.A5w=E;this.Background.L(E);
},Bm0:function(E){var B;if(E===this.ADx)return;this.ADx=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bn3:function(E){var B;if(E===this.AHf)return;this.AHf=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnA:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OG))return;this.OG=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATc:function(E){var B;if(E===this.Pw)return;this.
Pw=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATd:function(E){var B;if(E<0)
E=0;this.AqG=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E6);this.Background.AZ(0x3F);this.Background.H(Hr);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arl=A.aaL(C.ARF);this.Pw=
A.aaL(C.ACE);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACl={AlK:null,AAe:
null,AY:0,AEg:10,Yg:function(){this.AlK=null;this.AAe=null;this.AY=0;},Aqg:function(
aX,aY){var JA=null;if((this.AEg>0)&&(this.AY===this.AEg)){JA=this.AlK;this.AlK=JA.
Ah;JA.Ah=null;this.AY=this.AY-1;}else JA=A._NewObject(C.A5Z,0);JA.P7=aX;JA.P8=aY;
if(!this.AlK){this.AlK=JA;this.AAe=JA;this.AY=1;}else{this.AAe.Ah=JA;this.AAe=JA;
this.AY=this.AY+1;}},AwU:function(E){if(E<1)E=1;this.AEg=E;},_Init:function(aArg
){this.__proto__=C.ACl;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SL={WN:null,Ags:null,N5:null,AGe:270,AGy:1,Ko:function(CY,aClip,aOffset
,Ck,aBlend){var Vn;var Bc$;Vn=0;Bc$=this.AGe;while(Vn<0)Vn=Vn+360;while(Vn>=360)
Vn=Vn-360;var RE=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RF=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Ko.call(this,CY,aClip,aOffset,Ck,aBlend);if(!!this.
N5&&(this.N5.AG6>0)){var Hh=this.N5.K1;while(!!Hh){var FF=(Hh.A5/this.N5.AG6)*Bc$;
this.Bdf(CY,aClip,RE,RF,Vn,FF,this.AGy,0,Hh.AQ,Ck,aBlend);Vn=Vn+FF;if(Vn>=360)Vn=
Vn-360;Hh=Hh.Ah;}}else this.Bdf(CY,aClip,RE,RF,Vn,this.AGe,this.AGy,0,0xFF800000
,Ck,aBlend);},BnG:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGe)return;
this.AGe=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BnR:function(E){var B;if(
E===this.WN)return;this.WN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BnQ:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGy)return;this.AGy=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bdf:function(CY,aClip,aX,aY,aStartAngle
,Xh,Alo,A02,aColor,Ck,aBlend){var B;var JI;var JB;var Agl;var Agm;var Agn;var Ago;
var BfK;var BfL;var Al7;var Al8;var LB;var B3=aColor;var Kh=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kh<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Kh)>>8)&0xFF)<<24);if(!this.WN)return;var BY=this.WN.FrameSize[0];var BI=
this.WN.FrameSize[1];var I1=0;if(Xh>=360){aStartAngle=0;Xh=360;}if(A02>0){var Bdb=
aStartAngle+(Xh/2);JI=Math.sin(Bdb*A.k$);JB=Math.cos(Bdb*A.k$);aX=aX+((A02*JI)|0
);aY=aY-((A02*JB)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I1=I1+90;
}if(!this.Ags||!A.aaX(this.Ags.FrameSize,this.WN.FrameSize)){this.Ags=A._NewObject(
A.Graphics.Canvas,0);this.Ags.ArQ(this.WN.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xh)<90)){JI=Math.sin(Xh*A.k$);JB=Math.cos(Xh*A.k$);Agl=(-BY*JB)+(BI*JI);Agm=(-BI
*JB)-(BY*JI);Agn=BI*JI;Ago=-BI*JB;Al7=-BY*JB;Al8=-BY*JI;this.Ags.Avm([0,0,BY,BI]
,[0,0,this.Ags.FrameSize[0],this.Ags.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ags.AhV([0,0,BY,BI],this.WN,0,Agl,Agm+BI,1,Agn,Ago+BI,1,
0,BI,1,Al7,Al8+BI,1,[0,0,BY,BI],B3,B3,B3,B3,true,true);JI=Math.sin((aStartAngle+
I1)*A.k$)*Alo;JB=Math.cos((aStartAngle+I1)*A.k$)*Alo;Agl=BI*JI;Agm=-BI*JB;Agn=(BY
*JB)+(BI*JI);Ago=(-BI*JB)+(BY*JI);BfK=BY*JB;BfL=BY*JI;CY.AhV(aClip,this.Ags,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,BfK+aX,BfL+aY,1,aX,aY,1,[0,0,BY,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JI=Math.sin(((90+I1)+
aStartAngle)*A.k$)*Alo;JB=Math.cos(((90+I1)+aStartAngle)*A.k$)*Alo;Agl=(-BY*JB)+(
BI*JI);Agm=(-BI*JB)-(BY*JI);Agn=BI*JI;Ago=-BI*JB;Al7=-BY*JB;Al8=-BY*JI;if(!I1)LB=[
aX,-10000,10000,aY];else if(I1===90)LB=[aX,aY,10000,10000];else if(I1===180)LB=[-
10000,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CY.AhV(A.lb(aClip,LB),this.WN,0
,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3
,aBlend,true);I1=I1+90;if(I1>=360)I1=I1-360;Xh=Xh-(90-aStartAngle);}while(Xh>=90
){JI=Math.sin((90+I1)*A.k$)*Alo;JB=Math.cos((90+I1)*A.k$)*Alo;Agl=(-BY*JB)+(BI*JI
);Agm=(-BI*JB)-(BY*JI);Agn=BI*JI;Ago=-BI*JB;Al7=-BY*JB;Al8=-BY*JI;if(!I1)LB=[aX,-
10000,10000,aY];else if(I1===90)LB=[aX,aY,10000,10000];else if(I1===180)LB=[-10000
,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CY.AhV(A.lb(aClip,LB),this.WN,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend
,true);I1=I1+90;if(I1>=360)I1=I1-360;Xh=Xh-90;}JI=Math.sin((Xh+I1)*A.k$)*Alo;JB=
Math.cos((Xh+I1)*A.k$)*Alo;Agl=(-BY*JB)+(BI*JI);Agm=(-BI*JB)-(BY*JI);Agn=BI*JI;Ago=-
BI*JB;Al7=-BY*JB;Al8=-BY*JI;if(!I1)LB=[aX,-10000,10000,aY];else if(I1===90)LB=[aX
,aY,10000,10000];else if(I1===180)LB=[-10000,aY,aX,10000];else LB=[-10000,-10000
,aX,aY];CY.AhV(A.lb(aClip,LB),this.WN,0,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,
Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend,true);}},Ab7:function(E){var B;this.
N5=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SL;this.H(IU);this.WN=A.aaL(C.
AT3);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AT3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUt={K1:null,MX:null,AY:10,AG6:0,Ot:function(A7,aColor){var Hh;
Hh=A._NewObject(C.Record,0);Hh.A5=A7;Hh.AQ=aColor;if(!this.K1){this.K1=Hh;this.MX=
Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.AY+1;}this.AG6=this.AG6+
A7;},_Init:function(aArg){this.__proto__=C.AUt;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AT4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SL.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARF[0]._this)&&(B._cycle!=D))B._Done(C.ARF[0].
_this=null);if((B=C.AT3[0]._this)&&(B._cycle!=D))B._Done(C.AT3[0]._this=null);if((
B=C.AT4[0]._this)&&(B._cycle!=D))B._Done(C.AT4[0]._this=null);if((B=C.ACE[0]._this
)&&(B._cycle!=D))B._Done(C.ACE[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */