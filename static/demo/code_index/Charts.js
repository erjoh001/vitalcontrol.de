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
var Cc=[10,10];var BF=[80,50];var EZ=[0,0,360,240];var Hj=[0,0,370,270];var I$=[0
,0,260,240];
C.A5E={Ah:null,PX:0,PY:0,_Init:function(aArg){this.__proto__=C.A5E;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::Coord"
};C.DP={EU:null,Aq7:null,Pq:null,Background:null,Aq8:0xFFFFFFFF,Aq9:3,AmB:0xFFFFFFFF
,AmC:0,Aa1:A.wf,Ar2:Cc,A41:0xFF000000,ADe:0xFF6E0E0C,AG2:0xFF6E0E0C,OC:BF,Aqs:0,
Kg:function(C0,aClip,aOffset,Ci,aBlend){var B;var Xw=0;var Xx=0;var AAy=0;var AAz=
0;var Rw=this.M[0]+aOffset[0];var Rx=this.M[1]+aOffset[1];var AoZ=this.AmB;var Apl=
this.Aq8;var Aph=this.ADe;var Ap2=this.AG2;var AlH=this.Aq9/2;var Rv=this.AmC/2;
var Ka=(((Ci+1)*this.G1)>>8)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ka<256){AoZ=(
AoZ&0x00FFFFFF)|((((((AoZ>>24)&0xFF)*Ka)>>8)&0xFF)<<24);Apl=(Apl&0x00FFFFFF)|((((((
Apl>>24)&0xFF)*Ka)>>8)&0xFF)<<24);Aph=(Aph&0x00FFFFFF)|((((((Aph>>24)&0xFF)*Ka)>>
8)&0xFF)<<24);Ap2=(Ap2&0x00FFFFFF)|((((((Ap2>>24)&0xFF)*Ka)>>8)&0xFF)<<24);}A.Core.
O.Kg.call(this,C0,aClip,aOffset,Ci,aBlend);if(((this.ADe>>24)&0xFF)>0){var Df;for(
Df=this.Aa1[1]+Rx;Df>=Rx;Df=Df-this.OC[1])C0.AuT(aClip,[Rw,Df],[Rw+((B=this.M)[2
]-B[0]),Df],Aph,Aph,aBlend);for(Df=(this.Aa1[1]+Rx)+this.OC[1];Df<(Rx+((B=this.M
)[3]-B[1]));Df=Df+this.OC[1])C0.AuT(aClip,[Rw,Df],[Rw+((B=this.M)[2]-B[0]),Df],Aph
,Aph,aBlend);}if(((this.AG2>>24)&0xFF)>0){var El;for(El=this.Aa1[0]+Rw;El>=Rw;El=
El-this.OC[0])C0.AuT(aClip,[El,Rx],[El,Rx+((B=this.M)[3]-B[1])],Ap2,Ap2,aBlend);
for(El=(this.Aa1[0]+Rw)+this.OC[0];El<(Rw+((B=this.M)[2]-B[0]));El=El+this.OC[0]
)C0.AuT(aClip,[El,Rx],[El,Rx+((B=this.M)[3]-B[1])],Ap2,Ap2,aBlend);}if(!this.EU)
return;var Jt=this.EU.Alx;if(!!Jt){Xw=(Rw+this.Aa1[0])+(Jt.PX*this.Ar2[0]);Xx=(Rx+
this.Aa1[1])+(Jt.PY*this.Ar2[1]);Jt=Jt.Ah;}while(!!Jt){AAy=(Rw+this.Aa1[0])+(Jt.
PX*this.Ar2[0]);AAz=(Rx+this.Aa1[1])+(Jt.PY*this.Ar2[1]);var J4=AAy-Xw;var J5=AAz-
Xx;var IQ=Math.sqrt((J4*J4)+(J5*J5));if(!!IQ){J4=J4/IQ;J5=J5/IQ;}if(!!this.Aq7)C0.
AhI(aClip,this.Aq7,0,Xw-(J5*AlH),Xx+(J4*AlH),1,Xw+(J5*AlH),Xx-(J4*AlH),1,AAy+(J5
*AlH),AAz-(J4*AlH),1,AAy-(J5*AlH),AAz+(J4*AlH),1,[0,0,this.Aq7.FrameSize[0],this.
Aq7.FrameSize[1]],Apl,Apl,Apl,Apl,aBlend,true);if((this.AmC>0)&&!!this.Pq)C0.AhI(
aClip,this.Pq,this.Aqs,Xw-Rv,Xx-Rv,1,Xw+Rv,Xx-Rv,1,Xw+Rv,Xx+Rv,1,Xw-Rv,Xx+Rv,1,[
0,0,this.Pq.FrameSize[0],this.Pq.FrameSize[1]],AoZ,AoZ,AoZ,AoZ,aBlend,true);Xw=AAy;
Xx=AAz;Jt=Jt.Ah;}if((this.AmC>0)&&!!this.Pq)C0.AhI(aClip,this.Pq,this.Aqs,Xw-Rv,
Xx-Rv,1,Xw+Rv,Xx-Rv,1,Xw+Rv,Xx+Rv,1,Xw-Rv,Xx+Rv,1,[0,0,this.Pq.FrameSize[0],this.
Pq.FrameSize[1]],this.AmB,this.AmB,this.AmB,this.AmB,aBlend,true);},AeO:function(
E){var B;this.EU=E;this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASV:function(
E){var B;if(E===this.Aq8)return;this.Aq8=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},ASW:function(E){var B;if(E<0.5)E=0.5;if(E>10)E=10;this.Aq9=E;this.Bg([0
,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlM:function(E){var B;if(E===this.AmB)return;
this.AmB=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASK:function(E){var B;if(
E<1)E=0;if(E>25)E=25;this.AmC=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BlG:
function(E){var B;if(A.aaX(E,this.Aa1))return;this.Aa1=E;this.Bg([0,0,(B=this.M)[
2]-B[0],B[3]-B[1]]);},Bm1:function(E){var B;if(!E[0])E=[1,E[1]];if(!E[1])E=[E[0]
,1];if(A.aaX(E,this.Ar2))return;this.Ar2=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-
B[1]]);},Blu:function(E){if(E===this.A41)return;this.A41=E;this.Background.L(E);
},Bmj:function(E){var B;if(E===this.ADe)return;this.ADe=E;this.Bg([0,0,(B=this.M
)[2]-B[0],B[3]-B[1]]);},Bnl:function(E){var B;if(E===this.AG2)return;this.AG2=E;
this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Anr:function(E){var B;if(E[0]<10)E=[
10,E[1]];if(E[1]<10)E=[E[0],10];if(A.aaX(E,this.OC))return;this.OC=E;this.Bg([0,
0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASI:function(E){var B;if(E===this.Pq)return;this.
Pq=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},ASJ:function(E){var B;if(E<0)
E=0;this.Aqs=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
this.__proto__=C.DP;this.H(EZ);this.Background.A3(0x3F);this.Background.H(Hj);this.
Background.L(0xFF000000);this.J(this.Background,0);this.Aq7=A.aaL(C.ARa);this.Pq=
A.aaL(C.ACo);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();
A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Background._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aq7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Charts::Graph"};C.AB5={Alx:null,Az1:
null,AY:0,ADZ:10,Ya:function(){this.Alx=null;this.Az1=null;this.AY=0;},Ap8:function(
aX,aY){var Jt=null;if((this.ADZ>0)&&(this.AY===this.ADZ)){Jt=this.Alx;this.Alx=Jt.
Ah;Jt.Ah=null;this.AY=this.AY-1;}else Jt=A._NewObject(C.A5E,0);Jt.PX=aX;Jt.PY=aY;
if(!this.Alx){this.Alx=Jt;this.Az1=Jt;this.AY=1;}else{this.Az1.Ah=Jt;this.Az1=Jt;
this.AY=this.AY+1;}},AwF:function(E){if(E<1)E=1;this.ADZ=E;},_Init:function(aArg
){this.__proto__=C.AB5;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Alx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Az1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Charts::CoordList"
};C.ARa={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsLine7x100.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[7,100],FrameDelay:0,_this:
null}};C.SA={Wz:null,Agc:null,N2:null,AFZ:270,AGi:1,Kg:function(C0,aClip,aOffset
,Ci,aBlend){var Vc;var BcJ;Vc=0;BcJ=this.AFZ;while(Vc<0)Vc=Vc+360;while(Vc>=360)
Vc=Vc-360;var Rw=(((this.M[2]+this.M[0])/2)|0)+aOffset[0];var Rx=(((this.M[3]+this.
M[1])/2)|0)+aOffset[1];A.Core.O.Kg.call(this,C0,aClip,aOffset,Ci,aBlend);if(!!this.
N2&&(this.N2.AGQ>0)){var G$=this.N2.KZ;while(!!G$){var Fv=(G$.A5/this.N2.AGQ)*BcJ;
this.BcP(C0,aClip,Rw,Rx,Vc,Fv,this.AGi,0,G$.AQ,Ci,aBlend);Vc=Vc+Fv;if(Vc>=360)Vc=
Vc-360;G$=G$.Ah;}}else this.BcP(C0,aClip,Rw,Rx,Vc,this.AFZ,this.AGi,0,0xFF800000
,Ci,aBlend);},Bm0:function(E){var B;if(E<0)E=0;if(E>360)E=360;if(E===this.AFZ)return;
this.AFZ=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm$:function(E){var B;if(
E===this.Wz)return;this.Wz=E;this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},Bm_:function(
E){var B;if(E<0.01)E=0.01;if(E>1.1)E=1.1;if(E===this.AGi)return;this.AGi=E;this.
Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},BcP:function(C0,aClip,aX,aY,aStartAngle
,W9,Alb,A0x,aColor,Ci,aBlend){var B;var JB;var Ju;var Af8;var Af9;var Af_;var Af$;
var Bfh;var Bfi;var AlU;var AlV;var LA;var B4=aColor;var Ka=(((Ci+1)*this.G1)>>8
)+1;aBlend=aBlend&&((this.U&0x2)===0x2);if(Ka<256)B4=(B4&0x00FFFFFF)|((((((B4>>24
)&0xFF)*Ka)>>8)&0xFF)<<24);if(!this.Wz)return;var BX=this.Wz.FrameSize[0];var BJ=
this.Wz.FrameSize[1];var IT=0;if(W9>=360){aStartAngle=0;W9=360;}if(A0x>0){var BcL=
aStartAngle+(W9/2);JB=Math.sin(BcL*A.k$);Ju=Math.cos(BcL*A.k$);aX=aX+((A0x*JB)|0
);aY=aY-((A0x*Ju)|0);}while(aStartAngle>=90){aStartAngle=aStartAngle-90;IT=IT+90;
}if(!this.Agc||!A.aaX(this.Agc.FrameSize,this.Wz.FrameSize)){this.Agc=A._NewObject(
A.Graphics.Canvas,0);this.Agc.ArB(this.Wz.FrameSize);}if((aStartAngle>0)&&((aStartAngle+
W9)<90)){JB=Math.sin(W9*A.k$);Ju=Math.cos(W9*A.k$);Af8=(-BX*Ju)+(BJ*JB);Af9=(-BJ
*Ju)-(BX*JB);Af_=BJ*JB;Af$=-BJ*Ju;AlU=-BX*Ju;AlV=-BX*JB;this.Agc.Au8([0,0,BX,BJ]
,[0,0,this.Agc.FrameSize[0],this.Agc.FrameSize[1]],0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Agc.AhI([0,0,BX,BJ],this.Wz,0,Af8,Af9+BJ,1,Af_,Af$+BJ,1,
0,BJ,1,AlU,AlV+BJ,1,[0,0,BX,BJ],B4,B4,B4,B4,true,true);JB=Math.sin((aStartAngle+
IT)*A.k$)*Alb;Ju=Math.cos((aStartAngle+IT)*A.k$)*Alb;Af8=BJ*JB;Af9=-BJ*Ju;Af_=(BX
*Ju)+(BJ*JB);Af$=(-BJ*Ju)+(BX*JB);Bfh=BX*Ju;Bfi=BX*JB;C0.AhI(aClip,this.Agc,0,Af8+
aX,Af9+aY,1,Af_+aX,Af$+aY,1,Bfh+aX,Bfi+aY,1,aX,aY,1,[0,0,BX,BJ],0xFFFFFFFF,0xFFFFFFFF
,0xFFFFFFFF,0xFFFFFFFF,aBlend,true);}else{if(aStartAngle>0){JB=Math.sin(((90+IT)+
aStartAngle)*A.k$)*Alb;Ju=Math.cos(((90+IT)+aStartAngle)*A.k$)*Alb;Af8=(-BX*Ju)+(
BJ*JB);Af9=(-BJ*Ju)-(BX*JB);Af_=BJ*JB;Af$=-BJ*Ju;AlU=-BX*Ju;AlV=-BX*JB;if(!IT)LA=[
aX,-10000,10000,aY];else if(IT===90)LA=[aX,aY,10000,10000];else if(IT===180)LA=[-
10000,aY,aX,10000];else LA=[-10000,-10000,aX,aY];C0.AhI(A.lb(aClip,LA),this.Wz,0
,Af8+aX,Af9+aY,1,Af_+aX,Af$+aY,1,aX,aY,1,AlU+aX,AlV+aY,1,[0,0,BX,BJ],B4,B4,B4,B4
,aBlend,true);IT=IT+90;if(IT>=360)IT=IT-360;W9=W9-(90-aStartAngle);}while(W9>=90
){JB=Math.sin((90+IT)*A.k$)*Alb;Ju=Math.cos((90+IT)*A.k$)*Alb;Af8=(-BX*Ju)+(BJ*JB
);Af9=(-BJ*Ju)-(BX*JB);Af_=BJ*JB;Af$=-BJ*Ju;AlU=-BX*Ju;AlV=-BX*JB;if(!IT)LA=[aX,-
10000,10000,aY];else if(IT===90)LA=[aX,aY,10000,10000];else if(IT===180)LA=[-10000
,aY,aX,10000];else LA=[-10000,-10000,aX,aY];C0.AhI(A.lb(aClip,LA),this.Wz,0,Af8+
aX,Af9+aY,1,Af_+aX,Af$+aY,1,aX,aY,1,AlU+aX,AlV+aY,1,[0,0,BX,BJ],B4,B4,B4,B4,aBlend
,true);IT=IT+90;if(IT>=360)IT=IT-360;W9=W9-90;}JB=Math.sin((W9+IT)*A.k$)*Alb;Ju=
Math.cos((W9+IT)*A.k$)*Alb;Af8=(-BX*Ju)+(BJ*JB);Af9=(-BJ*Ju)-(BX*JB);Af_=BJ*JB;Af$=-
BJ*Ju;AlU=-BX*Ju;AlV=-BX*JB;if(!IT)LA=[aX,-10000,10000,aY];else if(IT===90)LA=[aX
,aY,10000,10000];else if(IT===180)LA=[-10000,aY,aX,10000];else LA=[-10000,-10000
,aX,aY];C0.AhI(A.lb(aClip,LA),this.Wz,0,Af8+aX,Af9+aY,1,Af_+aX,Af$+aY,1,aX,aY,1,
AlU+aX,AlV+aY,1,[0,0,BX,BJ],B4,B4,B4,B4,aBlend,true);}},Ab0:function(E){var B;this.
N2=E;this.An();this.Bg([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.SA;this.H(I$);this.Wz=A.aaL(C.
ATz);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Wz)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Agc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Charts::PieChart"};C.
ATz={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_1.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[8,8],FrameDelay:0,_this:null
}};C.Record={Ah:null,A5:0,AQ:0xFFFFFFFF,_Init:function(aArg){this.__proto__=C.Record;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::Record"};C.AT2={KZ:null,MS:null,AY:10,AGQ:0,Os:function(A7,aColor){var G$;
G$=A._NewObject(C.Record,0);G$.A5=A7;G$.AQ=aColor;if(!this.KZ){this.KZ=G$;this.MS=
G$;this.AY=1;}else{this.MS.Ah=G$;this.MS=G$;this.AY=this.AY+1;}this.AGQ=this.AGQ+
A7;},_Init:function(aArg){this.__proto__=C.AT2;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Charts::RecordList"};C.ATA={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsPie100_3.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[100,100],FrameDelay:0,_this:
null}};C.ACo={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/ChartsDots8x8.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:10,FrameSize:[8,8],FrameDelay:0,_this:
null}};
C._Init=function(){C.DP.__proto__=A.Core.O;C.SA.__proto__=A.Core.O;};C._ReInit=function(
){};C.DF=function(D){var B;if((B=C.ARa[0]._this)&&(B._cycle!=D))B._Done(C.ARa[0].
_this=null);if((B=C.ATz[0]._this)&&(B._cycle!=D))B._Done(C.ATz[0]._this=null);if((
B=C.ATA[0]._this)&&(B._cycle!=D))B._Done(C.ATA[0]._this=null);if((B=C.ACo[0]._this
)&&(B._cycle!=D))B._Done(C.ACo[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */