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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acv)throw new Error("The unit file 'Charts.js' included twice!");index.
acv=(function(){var A=index;var C={};
var Ce=[10,10];var BD=[80,50];var E7=[0,0,360,240];var Hr=[0,0,370,270];var IV=[0
,0,260,240];
C.A50={Ah:null,P7:0,P8:0,_Init:function(aArg){this.__proto__=C.A50;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DR={EZ:null,Arl:null,Pw:null,Background:null,Arm:0xFFFFFFFF,Arn:3,AmM:0xFFFFFFFF
,AmN:0,Abb:A.wf,Ash:Ce,A5x:0xFF000000,ADy:0xFF6E0E0C,AHg:0xFF6E0E0C,OH:BD,AqG:0,
Ko:function(CY,aClip,aOffset,Ck,aBlend){var B;var XH=0;var XI=0;var AAO=0;var AAP=
0;var RF=this.M[0]+aOffset[0];var RG=this.M[1]+aOffset[1];var Ao9=this.AmM;var Apw=
this.Arm;var Aps=this.ADy;var Ap$=this.AHg;var AlU=this.Arn/2;var RE=this.AmN/2;
var Kh=(((Ck+1)*this.G9)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kh<256){Ao9=(
Ao9&0x00FFFFFF)|((((((Ao9>>24)&0xFF)*Kh)>>8)&0xFF)<<24);Apw=(Apw&0x00FFFFFF)|((((((
Apw>>24)&0xFF)*Kh)>>8)&0xFF)<<24);Aps=(Aps&0x00FFFFFF)|((((((Aps>>24)&0xFF)*Kh)>>
8)&0xFF)<<24);Ap$=(Ap$&0x00FFFFFF)|((((((Ap$>>24)&0xFF)*Kh)>>8)&0xFF)<<24);}A.Core.
P.Ko.call(this,CY,aClip,aOffset,Ck,aBlend);if(((this.ADy>>24)&0xFF)>0){var Dh;for(
Dh=this.Abb[1]+RG;Dh>=RG;Dh=Dh-this.OH[1])CY.Au9(aClip,[RF,Dh],[RF+((B=this.M)[2
]-B[0]),Dh],Aps,Aps,aBlend);for(Dh=(this.Abb[1]+RG)+this.OH[1];Dh<(RG+((B=this.M
)[3]-B[1]));Dh=Dh+this.OH[1])CY.Au9(aClip,[RF,Dh],[RF+((B=this.M)[2]-B[0]),Dh],Aps
,Aps,aBlend);}if(((this.AHg>>24)&0xFF)>0){var Ep;for(Ep=this.Abb[0]+RF;Ep>=RF;Ep=
Ep-this.OH[0])CY.Au9(aClip,[Ep,RG],[Ep,RG+((B=this.M)[3]-B[1])],Ap$,Ap$,aBlend);
for(Ep=(this.Abb[0]+RF)+this.OH[0];Ep<(RF+((B=this.M)[2]-B[0]));Ep=Ep+this.OH[0]
)CY.Au9(aClip,[Ep,RG],[Ep,RG+((B=this.M)[3]-B[1])],Ap$,Ap$,aBlend);}if(!this.EZ)
return;var JB=this.EZ.AlK;if(!!JB){XH=(RF+this.Abb[0])+(JB.P7*this.Ash[0]);XI=(RG+
this.Abb[1])+(JB.P8*this.Ash[1]);JB=JB.Ah;}while(!!JB){AAO=(RF+this.Abb[0])+(JB.
P7*this.Ash[0]);AAP=(RG+this.Abb[1])+(JB.P8*this.Ash[1]);var Ka=AAO-XH;var Kb=AAP-
XI;var IZ=Math.sqrt((Ka*Ka)+(Kb*Kb));if(!!IZ){Ka=Ka/IZ;Kb=Kb/IZ;}if(!!this.Arl)CY.
AhV(aClip,this.Arl,0,XH-(Kb*AlU),XI+(Ka*AlU),1,XH+(Kb*AlU),XI-(Ka*AlU),1,AAO+(Kb
*AlU),AAP-(Ka*AlU),1,AAO-(Kb*AlU),AAP+(Ka*AlU),1,[0,0,this.Arl.FrameSize[0],this.
Arl.FrameSize[1]],Apw,Apw,Apw,Apw,aBlend,true);if((this.AmN>0)&&!!this.Pw)CY.AhV(
aClip,this.Pw,this.AqG,XH-RE,XI-RE,1,XH+RE,XI-RE,1,XH+RE,XI+RE,1,XH-RE,XI+RE,1,[
0,0,this.Pw.FrameSize[0],this.Pw.FrameSize[1]],Ao9,Ao9,Ao9,Ao9,aBlend,true);XH=AAO;
XI=AAP;JB=JB.Ah;}if((this.AmN>0)&&!!this.Pw)CY.AhV(aClip,this.Pw,this.AqG,XH-RE,
XI-RE,1,XH+RE,XI-RE,1,XH+RE,XI+RE,1,XH-RE,XI+RE,1,[0,0,this.Pw.FrameSize[0],this.
Pw.FrameSize[1]],this.AmM,this.AmM,this.AmM,this.AmM,aBlend,true);},Ae0:function(
E){var B;this.EZ=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATo:function(
E){var B;if(E===this.Arm)return;this.Arm=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ATp:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Arn=E;this.Bj([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmv:function(E){var B;if(E===this.AmM)return;
this.AmM=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATd:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmN=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bmq:
function(E){var B;if(A.aaX(E,this.Abb))return;this.Abb=E;this.Bj([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},BnL:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ash))return;this.Ash=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Bme:function(E){if(E===this.A5x)return;this.A5x=E;this.Background.L(E);
},Bm4:function(E){var B;if(E===this.ADy)return;this.ADy=E;this.Bj([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bn7:function(E){var B;if(E===this.AHg)return;this.AHg=E;
this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},AnA:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OH))return;this.OH=E;this.Bj([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATb:function(E){var B;if(E===this.Pw)return;this.
Pw=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ATc:function(E){var B;if(E<0)
E=0;this.AqG=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DR;this.H(E7);this.Background.A0(0x3F);this.Background.H(Hr);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Arl=A.aaL(C.ARE);this.Pw=
A.aaL(C.ACF);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();
A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arl)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.ACm={AlK:null,AAe:
null,AY:0,AEh:10,Yi:function(){this.AlK=null;this.AAe=null;this.AY=0;},Aqg:function(
aX,aY){var JB=null;if((this.AEh>0)&&(this.AY===this.AEh)){JB=this.AlK;this.AlK=JB.
Ah;JB.Ah=null;this.AY=this.AY-1;}else JB=A._NewObject(C.A50,0);JB.P7=aX;JB.P8=aY;
if(!this.AlK){this.AlK=JB;this.AAe=JB;this.AY=1;}else{this.AAe.Ah=JB;this.AAe=JB;
this.AY=this.AY+1;}},AwU:function(E){if(E<1)E=1;this.AEh=E;},_Init:function(aArg
){this.__proto__=C.ACm;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.AlK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AAe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARE={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SM={WR:null,Ags:null,N6:null,AGf:270,AGz:1,Ko:function(CY,aClip,aOffset
,Ck,aBlend){var Vo;var Bde;Vo=0;Bde=this.AGf;while(Vo<0)Vo=Vo+360;while(Vo>=360)
Vo=Vo-360;var RF=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var RG=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.P.Ko.call(this,CY,aClip,aOffset,Ck,aBlend);if(!!this.
N6&&(this.N6.AG7>0)){var Hh=this.N6.K1;while(!!Hh){var FF=(Hh.A5/this.N6.AG7)*Bde;
this.Bdk(CY,aClip,RF,RG,Vo,FF,this.AGz,0,Hh.AQ,Ck,aBlend);Vo=Vo+FF;if(Vo>=360)Vo=
Vo-360;Hh=Hh.Ah;}}else this.Bdk(CY,aClip,RF,RG,Vo,this.AGf,this.AGz,0,0xFF800000
,Ck,aBlend);},BnK:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AGf)return;
this.AGf=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BnV:function(E){var B;if(
E===this.WR)return;this.WR=E;this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BnU:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGz)return;this.AGz=E;this.
Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bdk:function(CY,aClip,aX,aY,aStartAngle
,Xk,Alo,A02,aColor,Ck,aBlend){var B;var JK;var JC;var Agl;var Agm;var Agn;var Ago;
var BfQ;var BfR;var Al7;var Al8;var LB;var B3=aColor;var Kh=(((Ck+1)*this.G9)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Kh<256)B3=(B3&0x00FFFFFF)|((((((B3>>24
)&0xFF)*Kh)>>8)&0xFF)<<24);if(!this.WR)return;var BY=this.WR.FrameSize[0];var BI=
this.WR.FrameSize[1];var I2=0;if(Xk>=360){aStartAngle=0;Xk=360;}if(A02>0){var Bdg=
aStartAngle+(Xk/2);JK=Math.sin(Bdg*A.k$);JC=Math.cos(Bdg*A.k$);aX=aX+((A02*JK)|0
);aY=aY-((A02*JC)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;I2=I2+90;
}if(!this.Ags||!A.aaX(this.Ags.FrameSize,this.WR.FrameSize)){this.Ags=A._NewObject(
A.Graphics.Canvas,0);this.Ags.ArQ(this.WR.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
Xk)<90)){JK=Math.sin(Xk*A.k$);JC=Math.cos(Xk*A.k$);Agl=(-BY*JC)+(BI*JK);Agm=(-BI
*JC)-(BY*JK);Agn=BI*JK;Ago=-BI*JC;Al7=-BY*JC;Al8=-BY*JK;this.Ags.Avm([0,0,BY,BI]
,[0,0,this.Ags.FrameSize[0],this.Ags.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Ags.AhV([0,0,BY,BI],this.WR,0,Agl,Agm+BI,1,Agn,Ago+BI,1,
0,BI,1,Al7,Al8+BI,1,[0,0,BY,BI],B3,B3,B3,B3,true,true);JK=Math.sin((aStartAngle+
I2)*A.k$)*Alo;JC=Math.cos((aStartAngle+I2)*A.k$)*Alo;Agl=BI*JK;Agm=-BI*JC;Agn=(BY
*JC)+(BI*JK);Ago=(-BI*JC)+(BY*JK);BfQ=BY*JC;BfR=BY*JK;CY.AhV(aClip,this.Ags,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,BfQ+aX,BfR+aY,1,aX,aY,1,[0,0,BY,BI],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JK=Math.sin(((90+I2)+
aStartAngle)*A.k$)*Alo;JC=Math.cos(((90+I2)+aStartAngle)*A.k$)*Alo;Agl=(-BY*JC)+(
BI*JK);Agm=(-BI*JC)-(BY*JK);Agn=BI*JK;Ago=-BI*JC;Al7=-BY*JC;Al8=-BY*JK;if(!I2)LB=[
aX,-10000,10000,aY];else if(I2===90)LB=[aX,aY,10000,10000];else if(I2===180)LB=[-
10000,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CY.AhV(A.lb(aClip,LB),this.WR,0
,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3
,aBlend,true);I2=I2+90;if(I2>=360)I2=I2-360;Xk=Xk-(90-aStartAngle);}while(Xk>=90
){JK=Math.sin((90+I2)*A.k$)*Alo;JC=Math.cos((90+I2)*A.k$)*Alo;Agl=(-BY*JC)+(BI*JK
);Agm=(-BI*JC)-(BY*JK);Agn=BI*JK;Ago=-BI*JC;Al7=-BY*JC;Al8=-BY*JK;if(!I2)LB=[aX,-
10000,10000,aY];else if(I2===90)LB=[aX,aY,10000,10000];else if(I2===180)LB=[-10000
,aY,aX,10000];else LB=[-10000,-10000,aX,aY];CY.AhV(A.lb(aClip,LB),this.WR,0,Agl+
aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend
,true);I2=I2+90;if(I2>=360)I2=I2-360;Xk=Xk-90;}JK=Math.sin((Xk+I2)*A.k$)*Alo;JC=
Math.cos((Xk+I2)*A.k$)*Alo;Agl=(-BY*JC)+(BI*JK);Agm=(-BI*JC)-(BY*JK);Agn=BI*JK;Ago=-
BI*JC;Al7=-BY*JC;Al8=-BY*JK;if(!I2)LB=[aX,-10000,10000,aY];else if(I2===90)LB=[aX
,aY,10000,10000];else if(I2===180)LB=[-10000,aY,aX,10000];else LB=[-10000,-10000
,aX,aY];CY.AhV(A.lb(aClip,LB),this.WR,0,Agl+aX,Agm+aY,1,Agn+aX,Ago+aY,1,aX,aY,1,
Al7+aX,Al8+aY,1,[0,0,BY,BI],B3,B3,B3,B3,aBlend,true);}},Ab7:function(E){var B;this.
N6=E;this.Am();this.Bj([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.SM;this.H(IV);this.WR=A.aaL(C.
AT2);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.WR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N6)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
AT2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AUs={K1:null,MX:null,AY:10,AG7:0,Ou:function(A7,aColor){var Hh;
Hh=A._NewObject(C.Record,0);Hh.A5=A7;Hh.AQ=aColor;if(!this.K1){this.K1=Hh;this.MX=
Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.AY+1;}this.AG7=this.AG7+
A7;},_Init:function(aArg){this.__proto__=C.AUs;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.AT3={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DR.__proto__=A.Core.P;C.SM.__proto__=A.Core.P;};C._ReInit=function(
){};C.DH=function(D){var B;if((B=C.ARE[0]._this)&&(B._cycle!=D))B._Done(C.ARE[0].
_this=null);if((B=C.AT2[0]._this)&&(B._cycle!=D))B._Done(C.AT2[0]._this=null);if((
B=C.AT3[0]._this)&&(B._cycle!=D))B._Done(C.AT3[0]._this=null);if((B=C.ACF[0]._this
)&&(B._cycle!=D))B._Done(C.ACF[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */