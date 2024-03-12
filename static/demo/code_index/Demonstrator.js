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
);if(index.acw)throw new Error("The unit file 'Demonstrator.js' included twice!"
);index.acw=(function(){var A=index;var C={};
var Cc=[0,0,370,60];var BF=[360,0,370,60];var E4=[0,0,370,710];var Hm="Unknown animalType";
var IQ=[58,10,120,50];var Iq=[0,0,60,60];var O2=[120,0,360,60];var P1="\u2015";var
P2=[0,0,240,60];var CQ=[0,0,40,60];var E$=[100,0,130,60];var Lu=[43,0,100,60];var
P3=[125,0,240,60];var JZ=[0,0];var N_=[100,0];var P4=[100,60];var MF=[0,60];var S4=[
107,0];var UO=[240,0];var Z4=[240,60];var W1=[107,60];var Ir="%d.%m.%Y";var UP="Unhandled date unit: ";
var Z5=[0,0,200,180];var W2=[36,0,200,30];var Z6=[0,30,160,60];var W3="Text";var
Z7=[0,70,40,110];var Z8=[44,70,156,110];var UQ=[160,70,200,110];var W4=[7,2,27,25
];var P5=[0,30,170,180];var Z9=[170,34,190,57];var O3=[0,0,40,40];var Ri=[0,40];
var W5=[40,40];var W6=[40,0];var W7=[0,0,370,100];var W8=[20,0,290,60];var Z_=[0
,60,370,100];var W9="Cap";var W_=[20,0,370,60];var S5=[310,0,370,60];var UR=[370
,0];var US=[370,60];var AcM="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var S6=".";var Z$=[0,0,170
,150];var Afx=[0,59,170,90];var Aaa=[110,0,170,150];var W$=[0,30];var Aab=[50,0,
100,150];var Aac=[0,0,40,150];var AhQ=[0,0,370,240];var J0=[0,60,370,710];var Aad=[
0,0,370,300];var Lv=[0,60,370,300];var AhR=[0,60,370,120];var Aog=[0,120,370,180
];var N$=[0,180,370,240];var Xa=[0,240,370,300];var Aoh=[370,120];var AhS=[0,120
];var AhT=[370,180];var AcN=[0,180];var UT=[370,240];var Aoi=[0,240];var Aoj=[370
,300];var Aok=[0,300];var Aol=[0,0,50,60];var Afy=[50,0,100,60];var Ala="Unhandled scan type";
var AxZ=[3,11,115,51];var Ax0=[50,0];var O4=[50,60];var Rj=[100,10,370,50];var Ax1=
"276000901234567";var UU=[3,10,57,50];var AsS=[3,11,55,50];var Ax2="Unhandled temperature unit";
var Ax3=[110,0,260,60];var Ax4=[235,10,370,50];var Aom="39.5";var Afz=[0,0,270,40
];var Aon=[270,0];var IR=[270,40];var Aoo=[150,0,170,40];var Xb=[205,10,207,30];
var Alb=[0,0,370,40];var AsT=[50,0,320,40];var AsU=" ";var AsV=[135,23];var AsW=[
135,0];var Alc=[100,0,370,60];var AsX="Error: Nullpointer Exception";var Ax5="Unknown Date Piecker Unit Index: ";
var Ax6="0";var Ax7="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AMY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AMZ={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM1={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AP2={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARB={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajq={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMF={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asr={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AUY={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVu={Aea:null,AX:null,AR:null,Background:null,H7:null,AD:null,IN:null,Dm:
null,Lj:null,A7x:null,A7Z:0,Bk:function(aSize){A.acn.Menu.Bk.call(this,aSize);this.
IN.H(A.abP(this.IN.M,this.AD.OQ));this.IN.H([].concat(this.IN.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40
);if(Iy&&(this.AD.Go<0))this.AD.G2(0);},NZ:function(E){if(this.Lj===E)return;this.
Lj=E;this.AD.NZ(E);},BmQ:function(E){var B;if(this.A7x===E)return;if(!!this.Aea){
this.HN(this.Aea);this.Aea=null;}if(!!E){this.Aea=(C.Fy.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aea.A93([this,this.Aks]);this.Aea.A94([this,this.Akt]);this.Aea.
BmW(null);this.J(this.Aea,0);this.AD.A9_((B=this.Aea.M)[3]-B[1]);}else this.AD.A9_(
0);this.IN.H(A.abP(this.IN.M,this.AD.OQ));A.pe([this,this.Fe],this);this.A7x=E;}
,Hg:function(G){var B;var Gc=this.AD.G0;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?
B:null);if(!Aa)return;Aa.Zr(this.AX);Aa.Ce(Gc);Aa.Zt(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GK]));},Zr:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ce],this.AX,0);A.z$([this,this.An$],[B=this.AX,B.Fj
,B.Fn],0);}this.AX=E;if(!!E){A.zV([this,this.Ce],E,0);A.zX([this,this.An$],[E,E.
Fj,E.Fn],0);}A.pe([this,this.Ce],this);A.pe([this,this.An$],this);},Ce:function(
G){if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbG(0,this.AD.AY-1);}else this.
AD.Ju(0);if(this.A7Z!==this.AD.AY){this.AD.ABB(null,null);this.A7Z=this.AD.AY;}A.
pe([this,this.Fe],this);},Akt:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOM(
))[3]-B[1]));},Aks:function(G){this.H(A.abI(this.M,180));},A9j:function(G){var Jy=(
A.Core.BN.isPrototypeOf(G)?G:null);var Gc=this.AD.Go;if(Jy.CO===4)Gc=Gc-1;else if(
Jy.CO===5)Gc=Gc+1;else if((Jy.DP>=0x30)&&(Jy.DP<=0x39))A._GetAutoObject(A.aco.AgF
).Ey(Jy.DP);else if(Jy.CO===45)A._GetAutoObject(A.aco.AgF).Delete();else Jy.NH=true;
if((Gc<0)||(Gc>=this.AD.AY))return;this.AD.G2(Gc);this.ByO(Gc,true);},ByD:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.G2(Aa.Hn);},ByO:function(G6,AcZ
){var B;if((G6<0)||(G6>=this.AD.AY))return;var Az=this.AD.AqS(G6,G6);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOM())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOM())[3]-B[1]))-((B=this.AD.BiL())[3]-B[1]));var LN=A.lb(Az,Bd);if((!
AcZ&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(AcZ&&A.aaY(LN,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GK;this.
AD.F_(this.AD.Br-Bq);},An$:function(G){this.AD.G2(-1);},Fe:function(G){var B;this.
IN.Mu(this.AD.GK*this.AD.AY);this.IN.Mw(((B=this.AD.M)[3]-B[1])-this.AD.OQ);this.
IN.Mv(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H7._Init.call(this.H7={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IN={I:this},
0);A.Core.BN._Init.call(this.Dm={I:this},0);this.__proto__=C.AVu;this.H(Cc);this.
Background.AZ(0x3);this.Background.H(Cc);this.H7.AZ(0x3F);this.H7.H(Cc);this.AD.
AZ(0x3F);this.AD.H(Cc);this.AD.Ae4(60);this.AD.Ju(0);this.AD.NZ(this.Lj);this.IN.
AZ(0x3A);this.IN.H(BF);this.IN.L(0xFF808080);this.J(this.Background,0);this.J(this.
H7,0);this.J(this.AD,0);this.J(this.IN,0);this.AD.El=[this,this.Fe];this.AD.Hg=[
this,this.Hg];this.AD.Aw2(this.H7);this.AR=[this,this.ByD];this.Dm.BO=[this,this.
A9j];this.Dm.D0=[this,this.A9j];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H7._Done();this.AD._Done();this.IN._Done();this.Dm._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H7._ReInit();this.AD._ReInit();this.IN._ReInit();
this.Dm._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aea)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUq={GG:null,AL:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GE],[
B=A._GetAutoObject(A.aco.Hq),B.A8Y,B.A_i],0);A.pe([this,this.GE],this);},Ab4:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.Ahw(E,this.BU);this.Am();},GE:function(G){var B;if(
!!A._GetAutoObject(A.aco.Hq).Asu)this.Ab4((C.AhC.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.Hq).Asu,0))?B:null));else this.Ab4(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUq;this.H(E4);this.AL.AZ(0x3F);
this.AL.H(E4);this.BU.H(E4);this.BU.L(0xFF000000);this.J(this.AL,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMo={ABi:0,Ka:0,Background:null,V:null
,Ajm:null,AdT:null,XQ:null,AdU:null,Mf:null,Md:0,LI:false,KE:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Fq=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);if(!G$){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mf.Ar(false);this.Mf.Z(false);}else if(Iy){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mf.Ar(true);this.Mf.Z(true);}else
if(Fq){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mf.Ar(true);this.
Mf.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mf.Ar(false
);this.Mf.Z(false);}if(!this.KE&&Fq)A._GetAutoObject(A.aco.Hq).A_f(this.ABi);this.
Mf.BmS(this.Ka>0);this.Mf.Bnj(this.ABi>0);this.V.R(this.Md.toFixed());this.LI=G$;
this.KE=Fq;},Ce:function(Ad){if(!this.AX){this.XQ.Aw(A.aaL(A.ach.Aev));this.AdT.
L(A.jb.Afq);return;}this.Hn=Ad;if(!!this.AX){this.Ka=this.AX.KN(Ad,26);this.ABi=
this.AX.KN(Ad,22);this.Md=this.AX.CE(Ad,1);var AlN=this.AX.H1(Ad,11);var AlE=this.
AX.I2(Ad,17);var LQ=this.AX.I2(Ad,13);var H$=this.AX.AmU(Ad,14);var Xm=A._GetAutoObject(
A.Device.Helper).AMd(LQ,AlN,AlE);switch(H$){case 0:this.XQ.Aw(A.aaL(A.ach.Aev));
break;case 1:this.XQ.Aw(A.aaL(A.ach.AvC));break;case 2:this.XQ.Aw(A.aaL(A.ach.AvF
));break;default:A.ab5("%s%e",Hm,H$);}this.AdU.Aw(this.XQ.Al);this.AdT.L(A._GetAutoObject(
A.acj.Assessment).Qj(Xm));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajm={I:this},0);A.acg.Ap._Init.call(this.AdT={
I:this},0);A.acg.Ap._Init.call(this.XQ={I:this},0);A.acg.Ap._Init.call(this.AdU={
I:this},0);C.Mf._Init.call(this.Mf={I:this},0);this.__proto__=C.AMo;this.Background.
AZ(0x3F);this.Background.H(Cc);this.V.AZ(0x3F);this.V.H(IQ);this.V.R(A.aaR(A.acf.
GJ));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajm.H(Iq);this.Ajm.L(A.jb.Text);this.
AdT.H(Iq);this.AdT.L(A.jb.E1);this.XQ.H(Iq);this.AdU.H(Iq);this.AdU.L(A.jb.Text);
this.AdU.Cv(1);this.Mf.AZ(0x3);this.Mf.H(O2);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajm,0);this.J(this.AdT,0);this.J(this.XQ,0);this.J(this.AdU,0);
this.J(this.Mf,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.
aaL(A.fl.Bh));this.Ajm.Aw(A.aaL(C.AHh));this.AdT.Aw(A.aaL(C.AVL));this.XQ.Aw(A.aaL(
A.ach.Aev));this.AdU.Aw(A.aaL(A.ach.Aev));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajm._Done();this.AdT._Done();this.XQ.
_Done();this.AdU._Done();this.Mf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajm._ReInit(
);this.AdT._ReInit();this.XQ._ReInit();this.AdU._ReInit();this.Mf._ReInit();this.
V.R(A.aaR(A.acf.GJ));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mf={Uv:null,WG:null,AkY:null,Nj:null
,N7:null,ZG:null,Acy:null,Av0:false,AxM:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Nj.L(A.
jb.Bm);this.N7.L(A.jb.Bm);}else{this.Nj.L(A.jb.Text);this.N7.L(A.jb.Text);}if(this.
AxM){this.Nj.R(A.aaR(A.acf.Boe));if(this.Av0){this.Uv.Aw(A.aaL(C.AG0));this.WG.Aw(
A.aaL(C.AG0));}else{this.Uv.Aw(A.aaL(C.Asr));this.WG.Aw(A.aaL(C.Asr));}}else if(
this.Av0){this.Uv.Aw(A.aaL(C.ACx));this.WG.Aw(A.aaL(C.ACx));this.Nj.R(P1);}var A3T=
this.AxM||this.Av0;this.Uv.Z(A3T);this.WG.Z(A3T);this.Nj.Z(A3T);this.ZG.Ar(this.
AxM);},Bnj:function(E){if(this.AxM===E)return;this.AxM=E;this.Am();},BmS:function(
E){if(this.Av0===E)return;this.Av0=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uv={I:this},0);A.acg.Ap._Init.call(this.
WG={I:this},0);A.acg.Ap._Init.call(this.AkY={I:this},0);A.kR.CH._Init.call(this.
Nj={I:this},0);A.kR.CH._Init.call(this.N7={I:this},0);A.Core.Bn._Init.call(this.
ZG={I:this},0);A.Core.Bn._Init.call(this.Acy={I:this},0);this.__proto__=C.Mf;var
B;this.H(P2);this.Uv.AZ(0x6);this.Uv.H(CQ);this.Uv.L(A.jb.CS);this.Uv.Cv(1);this.
WG.AZ(0x6);this.WG.H(CQ);this.WG.L(A.jb.Text);this.AkY.AZ(0xE);this.AkY.H(E$);this.
Nj.AZ(0x7);this.Nj.H(Lu);this.Nj.A6(0x11);this.Nj.L(0xFF000000);this.N7.AZ(0x3);
this.N7.H(P3);this.N7.R(A.aaR(A.acf.Temperature));this.N7.A6(0x11);this.N7.L(0xFF000000
);this.ZG.AZ(0x3);this.ZG.JR(JZ);this.ZG.Kr(N_);this.ZG.DC(P4);this.ZG.DL(MF);this.
Acy.AZ(0x3);this.Acy.JR(S4);this.Acy.Kr(UO);this.Acy.DC(Z4);this.Acy.DL(W1);this.
J(this.Uv,0);this.J(this.WG,0);this.J(this.AkY,0);this.J(this.Nj,0);this.J(this.
N7,0);this.J(this.ZG,0);this.J(this.Acy,0);this.Uv.Aw(A.aaL(C.Asr));this.WG.Aw(A.
aaL(C.Asr));this.AkY.Aw(A.aaL(C.AUY));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(
A.fl.Ak));this.Nj.Cu(A.aaL(A.fl.Bh));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(
A.fl.Ak));this.N7.Cu(A.aaL(A.fl.Bh));this.ZG.Ln=[B=A._GetAutoObject(A.aco.Hq),B.
BeR];this.Acy.Ln=[B=A._GetAutoObject(A.aco.Hq),B.BeC];},_Done:function(){this.__proto__=
A.Core.P;this.Uv._Done();this.WG._Done();this.AkY._Done();this.Nj._Done();this.N7.
_Done();this.ZG._Done();this.Acy._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uv._ReInit();this.WG._ReInit();this.AkY._ReInit(
);this.Nj._ReInit();this.N7._ReInit();this.ZG._ReInit();this.Acy._ReInit();this.
N7.R(A.aaR(A.acf.Temperature));this.Nj.S(A.aaL(A.fl.Af));this.Nj.A2(A.aaL(A.fl.Ak
));this.Nj.Cu(A.aaL(A.fl.Bh));this.N7.S(A.aaL(A.fl.Af));this.N7.A2(A.aaL(A.fl.Ak
));this.N7.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yq={CP:function(){this.Am();
},Ai:function(Ae){C.Ara.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A76:function(G){var D4=(A.Core.BN.isPrototypeOf(G)?G:null
);if(!!D4)A._GetAutoObject(A.aco.AgF).Ey(D4.DP);},A74:function(G){A._GetAutoObject(
A.aco.AgF).Delete();},_Init:function(aArg){C.Ara._Init.call(this,aArg);this.__proto__=
C.Yq;this.Ap.Aw(A.aaL(C.Filter));},_ReInit:function(){C.Ara._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abe={Dj:null,Yj:null,R9:null,Yk:
null,DT:null,YC:null,AmG:null,Au:null,O9:null,M4:null,Abd:null,FU:0,AvM:0,AF5:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.R9.R(this.Au.Format(Ir));if(this.
AF5){this.R9.Z(false);this.YC.Z(false);this.DT.Z(false);this.Yk.Z(false);this.O9.
Ar(true);this.O9.Z(true);this.M4.Cv(2);this.M4.ATc(2);this.M4.H(A.abM(this.M4.M,
this.O9.M[2]));}else{this.R9.Z(true);this.YC.Z(true);this.DT.Z(true);this.Yk.Z(true
);this.O9.Ar(false);this.O9.Z(false);this.M4.Cv(3);this.M4.ATc(3);this.M4.H(A.abM(
this.M4.M,this.R9.M[2]));}},BAs:function(G){this.BmZ(!this.AF5);},Adx:function(G
){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab8:function(E){if(A.
aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adx],this.Dj,0);this.Dj=E;if(
!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);},Ui:function(E){
if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.FU);this.BBx(this);this.
Am();},AiD:function(G){var B;var F;var BR=this.FU;var Ai$=this.Abd.C4(this.AvM);
this.AJf(Ai$);if(this.Au.Year>2100)this.Au.Initialize2(2100,12,31,0,0,0);this.Ui(((
B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BR=
this.FU;var Ai$=this.Abd.C4(this.AvM);this.AK6(Ai$);if(this.Au.Year<2000)this.Au.
Initialize2(2000,1,1,0,0,0);this.Ui(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(
this.FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);
}},Bmv:function(E){if(this.AvM===E)return;this.AvM=E;},BmZ:function(E){if(this.AF5===
E)return;this.AF5=E;this.Am();},BA3:function(G){var B;var F;var BR=this.FU;this.
Au.Lp(this.O9.AEt());this.Au.Um(this.O9.AEy());this.Au.Year=this.O9.Arz();this.Ui(((
B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj
,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},BBx:function(G){this.O9.Lp(this.Au.
GH);this.O9.Um(this.Au.He);this.O9.AkG(this.Au.Year);},AJf:function(AyY){var B;switch(
AyY){case 0:if(this.Au.GH<this.Au.Zo())this.Au.Lp(this.Au.GH+1);else{this.Au.Lp(
1);this.AJf(2);}break;case 1:if((this.Au.GH+7)<=this.Au.Zo())this.Au.Lp(this.Au.
GH+7);else{this.Au.Lp((7-this.Au.Zo())+this.Au.GH);this.AJf(2);}break;case 2:if(
this.Au.He<12)this.Au.Um(this.Au.He+1);else{this.Au.Um(1);this.AJf(3);}break;case
3:this.Au.Year++;break;default:throw new Error(UP+AyY.toFixed());}},AK6:function(
AyY){var B;switch(AyY){case 0:if(this.Au.GH>1)this.Au.Lp(this.Au.GH-1);else{this.
AK6(2);this.Au.Lp(this.Au.Zo());}break;case 1:if((this.Au.GH-7)>0)this.Au.Lp(this.
Au.GH-7);else{this.AK6(2);this.Au.Lp(this.Au.Zo()-(7-this.Au.GH));}break;case 2:
if(this.Au.He>1)this.Au.Um(this.Au.He-1);else{this.Au.Um(12);this.AK6(3);}break;
case 3:this.Au.Year--;break;default:throw new Error(UP+AyY.toFixed());}},BkE:function(
){return this.AvM;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yj={I:this},0);A.acg.Text._Init.call(this.R9={I:this},0);C.AvA._Init.
call(this.Yk={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvA._Init.call(
this.YC={I:this},0);A.acg.Ap._Init.call(this.AmG={I:this},0);A.Core.Bs._Init.call(
this.Au={I:this},0);C.ANC._Init.call(this.O9={I:this},0);C.AvA._Init.call(this.M4={
I:this},0);C.Abd._Init.call(this.Abd={I:this},0);this.__proto__=C.Abe;this.H(Z5);
this.Yj.H(W2);this.Yj.A6(0x11);this.Yj.R(A.aaR(A.acf.Date));this.Yj.L(0xFF000000
);this.R9.H(Z6);this.R9.A6(0x11);this.R9.R(W3);this.R9.L(0xFF000000);this.Yk.H(Z7
);this.Yk.A9U(200);this.DT.H(Z8);this.DT.ArU(120);this.DT.GK=30;this.DT.ASQ(A.jb.
CS);this.DT.A9x(A.jb.CS);this.DT.A9B(A.jb.CS);this.DT.ASR(A.jb.Text);this.DT.A9C(
A.jb.Text);this.DT.A9y(A.jb.AV);this.DT.A9D(A.jb.Bm);this.DT.A9A(A.jb.AV);this.DT.
A9z(A.jb.Text);this.YC.H(UQ);this.YC.A9U(200);this.AmG.H(W4);this.O9.H(P5);this.
M4.H(Z9);this.M4.Cv(3);this.M4.ATc(3);this.M4.L(A.jb.Text);this.J(this.Yj,0);this.
J(this.R9,0);this.J(this.Yk,0);this.J(this.DT,0);this.J(this.YC,0);this.J(this.AmG
,0);this.J(this.O9,0);this.J(this.M4,0);this.Yj.S(A.aaL(A.fl.Ak));this.R9.S(A.aaL(
A.fl.EK));this.Yk.AR=[this,this.Aio];this.Yk.DB(A.aaL(C.AMY));this.Yk.ATd(A.aaL(
C.AMZ));this.DT.As([this,this.BkE,this.Bmv]);this.DT.A9J(this.Abd);this.DT.ArM(A.
aaL(A.fl.Ak));this.DT.AwG(A.aaL(A.fl.Ak));this.YC.AR=[this,this.AiD];this.YC.DB(
A.aaL(C.AM0));this.YC.ATd(A.aaL(C.AM1));this.AmG.Aw(A.aaL(C.AP2));this.O9.Di=[this
,this.BA3];this.M4.AR=[this,this.BAs];this.M4.DB(A.aaL(A.ach.Ajr));this.M4.ATd(A.
aaL(A.ach.Ajr));},_Done:function(){this.__proto__=A.Core.P;this.Yj._Done();this.
R9._Done();this.Yk._Done();this.DT._Done();this.YC._Done();this.AmG._Done();this.
Au._Done();this.O9._Done();this.M4._Done();this.Abd._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yj._ReInit();this.R9.
_ReInit();this.Yk._ReInit();this.DT._ReInit();this.YC._ReInit();this.AmG._ReInit(
);this.Au._ReInit();this.O9._ReInit();this.M4._ReInit();this.Abd._ReInit();this.
Yj.R(A.aaR(A.acf.Date));this.Yj.S(A.aaL(A.fl.Ak));this.R9.S(A.aaL(A.fl.EK));this.
DT.ArM(A.aaL(A.fl.Ak));this.DT.AwG(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvA={C8:null,Axl:null,ANS:null,AR:null,Bo:null,Dm:null,CR:null,Hs:null,Yx:null
,APF:0,TO:0,ATV:0,AQ:0xFFFFFFFF,A18:false,LI:false,KE:false,Qn:false,Ai:function(
Ae){var B;A.acn.Ahs.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===
0x20);var GA=this.CR.Down&&this.CR.YF;if(!G$)this.Hs.Aw(this.ANS);else if(GA){this.
Hs.Aw(this.Axl);this.Hs.Cv(this.ATV);}else{this.Hs.Aw(this.C8);this.Hs.Cv(this.TO
);}this.Hs.L(this.AQ);this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(G){this.Am(
);A.pe(this.AR,this);},AiO:function(G){if(this.CR.Down)return;if(this.Dm.Aci)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Bez:function(G){this.Am();},AAB:function(G){if(!this.CR.YF)return;if(this.CR.NF
)return;if((this.Yx.VB<=0)||(this.CR.Jp<this.Yx.VB)){if(this.CR.Jp>=this.Bo.VB)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yx.Ar(false);},AAA:function(G){this.
Yx.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C8===E)return;this.C8=E;this.Am();},ATd:function(E){if(this.Axl===E)return;
this.Axl=E;this.Am();},A26:function(G){if(!this.CR.YF)return;if(this.CR.NF)return;
if((this.APF>=0)&&this.A18){this.A18=false;this.Yx.Ar(true);A.pe(this.AR,this);}
},A9U:function(E){if(this.APF===E)return;this.APF=E;this.Yx.Wx(E);},BzY:function(
G){this.A18=true;},Cv:function(E){if(this.TO===E)return;this.TO=E;this.Am();},ATc:
function(E){if(this.ATV===E)return;this.ATV=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.Ahs._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BN._Init.call(this.Dm={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hs={
I:this},0);A.Core.Timer._Init.call(this.Yx={I:this},0);this.__proto__=C.AvA;this.
H(O3);this.Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=149;this.CR.AZ(0x3F);this.CR.JR(
Ri);this.CR.Kr(W5);this.CR.DC(W6);this.CR.DL(JZ);this.CR.Afc=0xF;this.CR.AFn(100
);this.Hs.AZ(0x3F);this.Hs.H(O3);this.Hs.A6(0x12);this.Yx.PO(0);this.J(this.CR,0
);this.J(this.Hs,0);this.Bo.Mx=[this,this.Qm];this.Dm.BO=[this,this.AiO];this.CR.
AEE=[this,this.Bez];this.CR.Av5=[this,this.Bez];this.CR.D0=[this,this.A26];this.
CR.Ln=[this,this.AAB];this.CR.BO=[this,this.AAA];this.Hs.Aw(A.aaL(A.aci.TJ));this.
C8=A.aaL(A.aci.TJ);this.Axl=A.aaL(A.aci.TJ);this.ANS=A.aaL(A.aci.TJ);this.Yx.Mx=[
this,this.BzY];},_Done:function(){this.__proto__=A.acn.Ahs;this.Bo._Done();this.
Dm._Done();this.CR._Done();this.Hs._Done();this.Yx._Done();A.acn.Ahs._Done.call(
this);},_ReInit:function(){A.acn.Ahs._ReInit.call(this);this.Bo._ReInit();this.Dm.
_ReInit();this.CR._ReInit();this.Hs._ReInit();this.Yx._ReInit();},_Mark:function(
D){var B;A.acn.Ahs._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMC={Pu:null,V:null,Aeo:null,_Init:function(aArg){
C.Fy._Init.call(this,aArg);A.acg.AL._Init.call(this.Pu={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aeo._Init.call(this.Aeo={I:this},0);this.__proto__=C.AMC;
this.H(W7);this.Pu.AZ(0x1D);this.Pu.H(Cc);this.Pu.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(W8);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A4U));this.V.L(0xFF000000);this.
Aeo.H(Z_);this.J(this.Pu,0);this.J(this.V,0);this.J(this.Aeo,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.Fy;this.Pu._Done();this.V._Done();this.
Aeo._Done();C.Fy._Done.call(this);},_ReInit:function(){C.Fy._ReInit.call(this);this.
Pu._ReInit();this.V._ReInit();this.Aeo._ReInit();this.V.R(A.aaR(A.acf.A4U));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fy._Mark.call(this,D);if((B=this.
Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aeo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.Auw={Pu:null,V:null,AeP:null,AeN:null,Bn:null,DK:W9,Ahe:false,Ai:function(Ae
){C.Fy.Ai.call(this,Ae);if(this.Ahe){this.AeN.Z(true);this.AeP.Z(false);}else{this.
AeN.Z(false);this.AeP.Z(true);}},BAO:function(G){if(this.Ahe)A.pe(this.Aks,this);
else A.pe(this.Akt,this);this.ArV(!this.Ahe);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArV:function(E){if(this.Ahe===E)return;this.Ahe=E;this.Am(
);},_Init:function(aArg){C.Fy._Init.call(this,aArg);A.acg.AL._Init.call(this.Pu={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeP={
I:this},0);A.acg.Ap._Init.call(this.AeN={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.Auw;this.H(Cc);this.Pu.AZ(0x1D);this.Pu.H(Cc);this.Pu.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(W_);this.V.A6(0x11);this.V.R(W9);this.V.L(
0xFF000000);this.AeP.H(S5);this.AeP.Z(false);this.AeN.AZ(0x3A);this.AeN.H(S5);this.
Bn.JR(JZ);this.Bn.Kr(UR);this.Bn.DC(US);this.Bn.DL(MF);this.J(this.Pu,0);this.J(
this.V,0);this.J(this.AeP,0);this.J(this.AeN,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeP.Aw(A.aaL(C.AMF));this.AeN.Aw(A.aaL(C.Ajq));this.Bn.Ln=[this,this.
BAO];},_Done:function(){this.__proto__=C.Fy;this.Pu._Done();this.V._Done();this.
AeP._Done();this.AeN._Done();this.Bn._Done();C.Fy._Done.call(this);},_ReInit:function(
){C.Fy._ReInit.call(this);this.Pu._ReInit();this.V._ReInit();this.AeP._ReInit();
this.AeN._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Fy._Mark.call(this,D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hn:-1,Zr:function(E){if(this.AX===E)return;this.AX=E;},Ce:function(Ad){A.
ab5("%s",AcM);},Zt:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAB:function(
G){if(!this.CR.YF)return;if(this.CR.NF)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Cc);this.CR.AZ(0x3F);this.CR.JR(MF);this.CR.Kr(US);this.CR.
DC(UR);this.CR.DL(JZ);this.CR.Afc=0xF;this.CR.AFn(100);this.J(this.CR,0);this.CR.
Ln=[this,this.AAB];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.Fy={AR8:null,Akt:null,Aks:null,BmW:function(E){if(A.aa0(this.AR8,E))return;this.
AR8=E;},A94:function(E){if(A.aa0(this.Akt,E))return;this.Akt=E;},A93:function(E){
if(A.aa0(this.Aks,E))return;this.Aks=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.Fy;this.H(Cc);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Akt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aks)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANC={Di:null
,Aa5:null,WT:null,WS:null,WR:null,Nb:null,Na:null,KQ:null,LI:false,KE:false,BBH:
false,Ai:function(Ae){var B;A.acn.Ahq.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);
var Fq=((Ae&0x20)===0x20);var BdA=(this.WR.ZL||this.WS.ZL)||this.WT.ZL;if(BdA)this.
Aa5.L(A.jb.Text);else this.Aa5.L(A.jb.Bc);this.LI=G$;this.KE=Fq;this.BBH=BdA;},AAw:
function(G){this.Am();if((!this.WR.ZL&&!this.WS.ZL)&&!this.WT.ZL){var U9=this.AKa(
this.AEy(),this.Arz());var Add=this.AEt();this.KQ.Ju(U9);if(Add>U9)this.Lp(U9);A.
pe(this.Di,this);}},A3p:function(G){this.Am();},Bli:function(G){var B;var Gc=this.
Nb.G0;var Cz=(A.acg.Text.isPrototypeOf(B=this.Nb.Ch)?B:null);if(!Cz)return;Cz.R(
A.abl(Gc+1900,4,10));Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(
Cz.M,[(B=this.Nb.M)[2]-B[0],this.Nb.GK]));},Blh:function(G){var B;var Gc=this.Na.
G0;var Cz=(A.acg.Text.isPrototypeOf(B=this.Na.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(
Gc+1,2,10)+S6);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(
B=this.Na.M)[2]-B[0],this.Na.GK]));},Blf:function(G){var B;var Gc=this.KQ.G0;var
Cz=(A.acg.Text.isPrototypeOf(B=this.KQ.Ch)?B:null);if(!Cz)return;Cz.R(A.abl(Gc+1
,2,10)+S6);Cz.S(A.aaL(A.fl.Af));Cz.L(A.jb.Text);Cz.A6(0x12);Cz.H(A.abK(Cz.M,[(B=
this.KQ.M)[2]-B[0],this.KQ.GK]));},Arz:function(){return 1900+((((-this.Nb.Br/this.
Nb.GK)|0)+2)%200);},AkG:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Nb.F_(((
E-1900)-2)*-this.Nb.GK);var U9=this.AKa(this.AEy(),E);this.KQ.Ju(U9);if(this.AEt(
)>U9)this.Lp(U9);},AEy:function(){return 1+((((-this.Na.Br/this.Na.GK)|0)+2)%12);
},Um:function(E){if(E<1)E=1;if(E>12)E=12;this.Na.F_(((E-1)-2)*-this.Na.GK);var U9=
this.AKa(E,this.Arz());this.KQ.Ju(U9);if(this.AEt()>U9)this.Lp(U9);},AEt:function(
){return 1+((((-this.KQ.Br/this.KQ.GK)|0)+2)%this.KQ.AY);},Lp:function(E){var U9=
this.AKa(this.AEy(),this.Arz());if(E<1)E=1;if(E>U9)E=U9;this.KQ.F_(((E-2)-1)*-this.
KQ.GK);},AKa:function(AfG,Ac3){if(AfG===2){if(!(Ac3%4)&&(!!(Ac3%100)||!(Ac3%400)
))return 29;else return 28;}else if((((AfG===4)||(AfG===6))||(AfG===9))||(AfG===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahq._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa5={I:this},0);A.Core.H7._Init.call(this.WT={I:this}
,0);A.Core.H7._Init.call(this.WS={I:this},0);A.Core.H7._Init.call(this.WR={I:this
},0);A.Core.CM._Init.call(this.Nb={I:this},0);A.Core.CM._Init.call(this.Na={I:this
},0);A.Core.CM._Init.call(this.KQ={I:this},0);this.__proto__=C.ANC;this.H(Z$);this.
Aa5.H(Afx);this.Aa5.Nh(3);this.Aa5.L(0xFFE1E1E1);this.Aa5.Z(true);this.WT.H(Aaa);
this.WT.ATq(W$);this.WT.ASX(0.2);this.WS.H(Aab);this.WS.ATq(W$);this.WS.ASX(0.2);
this.WR.H(Aac);this.WR.ATq(W$);this.WR.ASX(0.2);this.Nb.H(Aaa);this.Nb.ASV(true);
this.Nb.F_(60);this.Nb.Ae4(30);this.Nb.Ju(200);this.Na.H(Aab);this.Na.ASV(true);
this.Na.F_(60);this.Na.Ae4(30);this.Na.Ju(12);this.KQ.H(Aac);this.KQ.ASV(true);this.
KQ.F_(60);this.KQ.Ae4(30);this.KQ.Ju(31);this.J(this.Aa5,0);this.J(this.WT,0);this.
J(this.WS,0);this.J(this.WR,0);this.J(this.Nb,0);this.J(this.Na,0);this.J(this.KQ
,0);this.WT.Zn=[this,this.AAw];this.WT.SB=[this,this.A3p];this.WS.Zn=[this,this.
AAw];this.WS.SB=[this,this.A3p];this.WR.Zn=[this,this.AAw];this.WR.SB=[this,this.
A3p];this.Nb.Hg=[this,this.Bli];this.Nb.Aw2(this.WT);this.Na.Hg=[this,this.Blh];
this.Na.Aw2(this.WS);this.KQ.Hg=[this,this.Blf];this.KQ.Aw2(this.WR);},_Done:function(
){this.__proto__=A.acn.Ahq;this.Aa5._Done();this.WT._Done();this.WS._Done();this.
WR._Done();this.Nb._Done();this.Na._Done();this.KQ._Done();A.acn.Ahq._Done.call(
this);},_ReInit:function(){A.acn.Ahq._ReInit.call(this);this.Aa5._ReInit();this.
WT._ReInit();this.WS._ReInit();this.WR._ReInit();this.Nb._ReInit();this.Na._ReInit(
);this.KQ._ReInit();},_Mark:function(D){var B;A.acn.Ahq._Mark.call(this,D);if((B=
this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHh={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AVL={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhC={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhC;this.H(E4);},_className:"Demonstrator::SelectionAreaContent"};C.AMv={Y:null
,Vr:null,Ty:null,BBf:function(G){var B;this.Ty.H(A.abI(this.Ty.M,((B=this.M)[3]-
B[1])-((B=this.Vr.M)[3]-B[1])));},_Init:function(aArg){C.AhC._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.ALZ._Init.call(this.Vr={I:this},0);C.
AVu._Init.call(this.Ty={I:this},0);this.__proto__=C.AMv;this.Y.AZ(0x3F);this.Y.H(
E4);this.Y.JP(1);this.Vr.H(AhQ);this.Vr.Aj(true);this.Vr.ArV(true);this.Ty.AZ(0x3
);this.Ty.H(J0);this.Ty.Aj(true);this.Ty.NZ(C.AMo);this.Ty.BmQ(C.AMC);this.J(this.
Y,0);this.J(this.Vr,0);this.J(this.Ty,0);this.Bb(this.Ty);this.Y.El=[this,this.BBf
];this.Ty.Zr(A._GetAutoObject(A.aco.Aqh));},_Done:function(){this.__proto__=C.AhC;
this.Y._Done();this.Vr._Done();this.Ty._Done();C.AhC._Done.call(this);},_ReInit:
function(){C.AhC._ReInit.call(this);this.Y._ReInit();this.Vr._ReInit();this.Ty._ReInit(
);},_Mark:function(D){var B;C.AhC._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vr={
_Init:function(aArg){C.Auw._Init.call(this,aArg);this.__proto__=C.Vr;this.T(A.aaR(
A.acf.A5M));},_ReInit:function(){C.Auw._ReInit.call(this);this.T(A.aaR(A.acf.A5M
));},_className:"Demonstrator::ActionsHeader"};C.ALZ={Background:null,XO:null,Y:
null,Acx:null,Acm:null,ZF:null,Acw:null,Akb:null,Akc:null,Akd:null,Ake:null,Akf:
null,Ahe:false,Init:function(aArg){var B;A.zX([this,this.BeS],[B=A._GetAutoObject(
A.aco.Hq),B.AEA,B.AFA],0);A.pe([this,this.BeS],this);},Akt:function(G){this.ArV(
true);},Aks:function(G){this.ArV(false);},ArV:function(E){if(this.Ahe===E)return;
this.Ahe=E;this.XO.ArV(E);A.pe([this,this.Be3],this);},BeS:function(G){var BBo=A.
_GetAutoObject(A.aco.Hq).Ahx===1;A._GetAutoObject(A.Device.Helper).JW(this.ZF,BBo
);},Be3:function(G){var B;if(this.Ahe)this.H(A.abI(this.M,(B=this.XO.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XO.M)[3]-B[1])+((B=this.Y.Db(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vr._Init.call(this.XO={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acx._Init.call(this.Acx={I:this},0);C.Acm._Init.call(this.Acm={I:
this},0);C.ZF._Init.call(this.ZF={I:this},0);C.Acw._Init.call(this.Acw={I:this},
0);A.acg.C5._Init.call(this.Akb={I:this},0);A.acg.C5._Init.call(this.Akc={I:this
},0);A.acg.C5._Init.call(this.Akd={I:this},0);A.acg.C5._Init.call(this.Ake={I:this
},0);A.acg.C5._Init.call(this.Akf={I:this},0);this.__proto__=C.ALZ;this.H(Aad);this.
Background.AZ(0x3F);this.Background.H(Aad);this.XO.AZ(0x1D);this.XO.H(Cc);this.Y.
H(Lv);this.Y.JP(1);this.Acx.H(AhR);this.Acx.Aj(true);this.Acm.H(Aog);this.Acm.Aj(
true);this.ZF.H(N$);this.ZF.Aj(true);this.Acw.H(Xa);this.Acw.Aj(true);this.Akb.DC(
US);this.Akb.DL(MF);this.Akb.L(A.jb.Bc);this.Akc.DC(Aoh);this.Akc.DL(AhS);this.Akc.
L(A.jb.Bc);this.Akd.DC(AhT);this.Akd.DL(AcN);this.Akd.L(A.jb.Bc);this.Ake.DC(UT);
this.Ake.DL(Aoi);this.Ake.L(A.jb.Bc);this.Akf.DC(Aoj);this.Akf.DL(Aok);this.Akf.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XO,0);this.J(this.Y,0);this.J(this.
Acx,0);this.J(this.Acm,0);this.J(this.ZF,0);this.J(this.Acw,0);this.J(this.Akb,0
);this.J(this.Akc,0);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.
XO.A94([this,this.Akt]);this.XO.A93([this,this.Aks]);this.Y.El=[this,this.Be3];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XO._Done();this.Y._Done();this.Acx._Done();this.Acm._Done();this.ZF._Done();this.
Acw._Done();this.Akb._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();
this.Akf._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XO._ReInit();this.Y._ReInit();this.Acx.
_ReInit();this.Acm._ReInit();this.ZF._ReInit();this.Acw._ReInit();this.Akb._ReInit(
);this.Akc._ReInit();this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jm={
Yz:null,Ag2:null,Bn:null,C5:null,Af5:function(G){},A0n:function(s){this.Af5(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Yz={
I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);this.__proto__=C.Jm;this.H(Cc
);this.Yz.H(Aol);this.Yz.L(A.jb.Text);this.Ag2.H(Afy);this.Ag2.L(A.jb.Text);this.
Ag2.Cv(0);this.Bn.JR(JZ);this.Bn.Kr(N_);this.Bn.DC(P4);this.Bn.DL(MF);this.C5.DC(
P4);this.C5.DL(N_);this.C5.L(A.jb.Bc);this.J(this.Yz,0);this.J(this.Ag2,0);this.
J(this.Bn,0);this.J(this.C5,0);this.Yz.Aw(A.aaL(A.aci.TJ));this.Ag2.Aw(A.aaL(A.aci.
ATL));this.Bn.BO=[this,this.A0n];},_Done:function(){this.__proto__=A.Core.P;this.
Yz._Done();this.Ag2._Done();this.Bn._Done();this.C5._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yz._ReInit();this.Ag2.
_ReInit();this.Bn._ReInit();this.C5._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acm={AGr:null,DT:null,Aez:null,BU:null,M8:null,Ahy:null,ANw:0,Init:function(aArg
){var B;A.zX([this,this.Be2],[B=A._GetAutoObject(A.aco.Hq),B.AEA,B.AFA],0);A.pe([
this,this.Be2],this);},Af5:function(G){var Ic=A.ab0(this.Aez.String,0,10);var Ig=
false;switch(A._GetAutoObject(A.aco.Hq).Ahx){case 1:Ig=A._GetAutoObject(A.aco.Hq
).BBE(Ic);break;case 0:Ig=A._GetAutoObject(A.aco.Hq).Bf1(Ic);break;default:A.ab5(
"%s%e",Ala,A._GetAutoObject(A.aco.Hq).Ahx);}if(Ig){Ic=Ic+1;this.Aez.R(Ic.toFixed(
));}},Be2:function(G){var A04=null;switch(A._GetAutoObject(A.aco.Hq).Ahx){case 1:
A04=A.aaL(A.ach.Avx);break;case 0:A04=A.aaL(A.ach.AjX);break;default:A.ab5("%s%e"
,Ala,A._GetAutoObject(A.aco.Hq).Ahx);}this.Yz.Aw(A04);},BlH:function(E){var F;if(
this.ANw===E)return;this.ANw=E;if(!!this.AGr)(F=this.AGr,F[2].call(F[0],E));},Bkq:
function(){return this.ANw;},_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acq.
DT._Init.call(this.DT={I:this},0);C.Ako._Init.call(this.Aez={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);A.acg.Ap._Init.call(this.M8={I:this},0);C.Ahy._Init.
call(this.Ahy={I:this},0);this.__proto__=C.Acm;var B;this.DT.H(AxZ);this.DT.ArU(
120);this.DT.GK=30;this.DT.ASQ(A.jb.Re);this.DT.A9x(A.jb.CS);this.DT.A9B(A.jb.CS
);this.DT.ASR(A.jb.Re);this.DT.A9C(A.jb.Text);this.DT.A9y(A.jb.AV);this.DT.A9D(A.
jb.Bm);this.DT.A9A(A.jb.AV);this.DT.A9z(A.jb.Re);this.Bn.JR(Ax0);this.Bn.DL(O4);
this.Aez.H(Rj);this.Aez.R(Ax1);this.Aez.L(A.jb.Text);this.BU.H(UU);this.BU.Nh(2);
this.BU.L(A.jb.Text);this.M8.H(AsS);this.M8.L(A.jb.Text);this.M8.A6(0xC);this.M8.
Cv(3);this.J(this.DT,-2);this.J(this.Aez,-1);this.J(this.BU,0);this.J(this.M8,0);
this.DT.As([this,this.Bkq,this.BlH]);this.DT.A9J(this.Ahy);this.DT.ArM(A.aaL(A.fl.
Bh));this.DT.AwG(A.aaL(A.fl.Bh));this.M8.Aw(A.aaL(A.ach.Ajr));this.AGr=[B=A._GetAutoObject(
A.aco.Hq),B.AEA,B.AFA];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.
DT._Done();this.Aez._Done();this.BU._Done();this.M8._Done();this.Ahy._Done();C.Jm.
_Done.call(this);},_ReInit:function(){C.Jm._ReInit.call(this);this.DT._ReInit();
this.Aez._ReInit();this.BU._ReInit();this.M8._ReInit();this.Ahy._ReInit();this.DT.
ArM(A.aaL(A.fl.Bh));this.DT.AwG(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jm._Mark.
call(this,D);if((B=this.AGr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ahy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acx={UF:null,OT:null,A4a:0,Init:function(aArg){var B;A.zX([this,this.BAy],[B=
A._GetAutoObject(A.aco.Hq),B.ASx,B.ATj],0);A.zX([this,this.AAE],[B=A._GetAutoObject(
A.Device.Device),B.Arw,B.Ath],0);A.pe([this,this.AAE],this);},Ai:function(Ae){C.
Jm.Ai.call(this,Ae);this.OT.Z(!A._GetAutoObject(A.aco.Hq).Axm);},Af5:function(G){
var B;A._GetAutoObject(A.aco.Hq).BeC(this);},AAE:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4a){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OT.R(A.abk(A._GetAutoObject(A.aco.Hq).WO/100,0,1)
);break;case 1:{var Aul=A._GetAutoObject(A.Device.Converter).AU2(A._GetAutoObject(
A.aco.Hq).WO/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OT.R(
A.abk(Aul,0,1));}break;default:A.ab5("%s%e",Ax2,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4a=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BAh:function(G){var B;var Agi=A.abX(this.OT.String,0);Agi=A._GetAutoObject(A.Device.
Converter).AU2(Agi,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agi*=100;
A._GetAutoObject(A.aco.Hq).AFH(Math.round(Agi)|0);},BAy:function(G){this.Am();},
_Init:function(aArg){C.Jm._Init.call(this,aArg);A.acr.UF._Init.call(this.UF={I:this
},0);C.OT._Init.call(this.OT={I:this},0);this.__proto__=C.Acx;var B;this.UF.H(Ax3
);this.UF.A9Y(A.aaR(A.acf.A41));this.OT.H(Ax4);this.OT.R(Aom);this.OT.L(A.jb.Text
);this.OT.BlJ(true);this.A4a=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UF,0);this.J(this.OT,0);this.Yz.Aw(A.aaL(A.ach.AbD));this.UF.As([B=A._GetAutoObject(
A.aco.Hq),B.ASx,B.ATj]);this.UF.OnSetAppearance(A._GetAutoObject(A.acx.AuS));this.
OT.Di=[this,this.BAh];this.Init(aArg);},_Done:function(){this.__proto__=C.Jm;this.
UF._Done();this.OT._Done();C.Jm._Done.call(this);},_ReInit:function(){C.Jm._ReInit.
call(this);this.UF._ReInit();this.OT._ReInit();this.UF.A9Y(A.aaR(A.acf.A41));},_Mark:
function(D){var B;C.Jm._Mark.call(this,D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Ara={Q:null,BU:null,Bn:null,AgD:null,Am9:null,Am8:null,Arf:null,Text:null,Hk:
null,Ap:null,CX:null,Are:null,Arg:null,Aph:false,Bk:function(aSize){this.Hk.H(A.
abK(this.Hk.M,aSize));this.BU.Axt(1);this.BU.Jq(0,40);this.BU.Ff(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Ff(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(
Iy){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgD.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgD.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Aph=Iy;},Af5:function(G){var B;if(!((this.
U&0x80)===0x80))this.Ik().AMP(this);},A76:function(G){},BaF:function(s){this.A76(
s);},BjQ:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AON(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AON(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AON(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A74:function(G){},BaE:function(s){this.A74(
s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Kd],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);}
,Kd:function(G){this.Am();},Blk:function(G){var B;if(((this.U&0x80)===0x80))this.
Ik().ACA(this);},BeK:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hv._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TE._Init.call(this.AgD={I:this},0);A.Core.BN._Init.call(this.Am9={
I:this},0);A.Core.BN._Init.call(this.Am8={I:this},0);A.Core.BN._Init.call(this.Arf={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hk._Init.call(this.
Hk={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CX={I:this},0);A.Core.BN._Init.call(this.Are={I:this},0);A.Core.BN._Init.call(this.
Arg={I:this},0);this.__proto__=C.Ara;var B;this.H(Afz);this.Bn.AZ(0x3F);this.Bn.
JR(JZ);this.Bn.Kr(Aon);this.Bn.DC(IR);this.Bn.DL(Ri);this.AgD.Fl(530);this.AgD.Uk(
530);this.Am9.Filter=143;this.Am8.Filter=45;this.Arf.Filter=1;this.Text.AZ(0x3F);
this.Text.H(Afz);this.Text.I7(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hk.H(Afz);this.Hk.L(0xFFB3B3B3);this.Hk.Nh(1);this.Ap.H(Aoo);this.CX.H(Xb);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Are.Filter=138;this.Arg.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hk,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Ln=[this,this.Af5];this.AgD.Q=[B=this.CX,B.Fk,B.Z];this.Am9.BO=[this
,this.BaF];this.Am9.D0=[this,this.BaF];this.Am8.BO=[this,this.BaE];this.Am8.D0=[
this,this.BaE];this.Arf.BO=[this,this.Blk];this.Text.Q1([this,this.BjQ]);this.Text.
S(A.aaL(A.fl.Ak));this.Hk.Zu(this.BU);this.Ap.Aw(null);this.Are.BO=[this,this.BeK
];this.Arg.BO=[this,this.BeK];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgD._Done();this.Am9._Done();this.Am8._Done();this.
Arf._Done();this.Text._Done();this.Hk._Done();this.Ap._Done();this.CX._Done();this.
Are._Done();this.Arg._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgD._ReInit();this.
Am9._ReInit();this.Am8._ReInit();this.Arf._ReInit();this.Text._ReInit();this.Hk.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Are._ReInit();this.Arg._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Are)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aeo={Background:null,Yq:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yq._Init.call(this.Yq={I:this
},0);this.__proto__=C.Aeo;var B;this.H(Alb);this.Background.H(Alb);this.Yq.AZ(0x1D
);this.Yq.H(AsT);this.J(this.Background,0);this.J(this.Yq,0);this.Yq.As([B=A._GetAutoObject(
A.aco.AgF),B.A8V,B.AFC]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yq._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yq._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OT={Init:function(aArg){var B;A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.
Device),B.Arw,B.Ath],0);A.pe([this,this.AAE],this);},Ai:function(Ae){var B;C.Ako.
Ai.call(this,Ae);var Iy=((this.U&0x40)===0x40);if(!Iy&&(this.String.length>0))this.
Text.R(((this.String+AsU)+A._GetAutoObject(A.acj.Temperature).AlJ())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAE:function(G){this.Am();},_Init:function(aArg
){C.Ako._Init.call(this,aArg);this.__proto__=C.OT;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Ako={B6:null,Di:null,IS:null,Cr:null,AmD:null,R$:null,KL:null,Bn:null,Text:null
,CX:null,Aqw:null,Asc:null,BU:null,Hk:null,Ars:null,Aq0:null,AqJ:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,AvW:15,ANE:false,LA:false,Bk:function(aSize){this.Hk.H(A.abK(
this.Hk.M,aSize));this.BU.Axt(1);this.BU.Jq(0,40);this.BU.Ff(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Ff(0,20,20,12.5,12.5,90,270,10);this.BU.VJ(0);},Ai:function(
Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IS.Ar(true);else{
this.IS.Ar(false);this.CX.Z(false);}},A4k:function(G){var B;var Bd=this.Text.M;var
Nv=0;var Nw=0;if(this.CX.Er[0]<Bd[0])Nv=Bd[0]-this.CX.Er[0];if(this.CX.Er[0]>Bd[
2])Nv=Bd[2]-this.CX.Er[0];if(this.CX.Er[1]<Bd[1])Nw=Bd[1]-this.CX.Er[1];if(this.
CX.EC[1]>Bd[3])Nw=Bd[3]-this.CX.EC[1];if(!!Nv||!!Nw)this.Text.F_(A.abf(this.Text.
Br,[Nv,Nw]));Nv=this.Text.Br[0];Nw=this.Text.Br[1];var C3=[(B=this.Text.Db())[2]-
B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]))Nv=0;if(C3[1]<=((B=this.Text.
M)[3]-B[1]))Nw=0;this.Text.F_([Nv,Nw]);},Amj:function(G){if(!this.B6)return;var A3N=
this.Text.AGN(this.D6);var pos=this.Text.Afd(A3N);this.CX.DL(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IS.Bw){this.IS.Ar(false
);this.IS.Ar(true);}if(this.LA){A.pe([this,this.A4k],this);this.LA=false;}},AAA:
function(G){if(!this.A6O(0x80))this.Ik().AMP(this);var EH=this.Text.ATP(this.Bn.
H0);var Vc=this.Text.AnT(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this
);this.LA=true;}},AAu:function(G){if(!this.B6)return;var EH=this.Text.AGN(this.D6
);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.ACY(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vc=
this.Text.AnT(EH);if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this);this.LA=
true;}},Bet:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LA=true;A.pe(this.Di,this);},AAv:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LA=true;A.pe(
this.Di,this);},Bey:function(G){if(this.String.length>=this.AvW)return;var ByF=this.
KL.DP;var Auj=String.fromCharCode(ByF);this.R(A.abU(this.String,Auj,this.D6));this.
D6=this.D6+Auj.length;this.LA=true;A.pe(this.Di,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LA=true;this.Text.F_(JZ);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hk.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.LA=true;this.Text.F_(JZ);},BeL:function(
G){if(this.ANE===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.AvW)return;this.R(A.abU(this.String,S6,this.
D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di,this);},Bbp:function(s){this.BeL(
s);},BlJ:function(E){if(this.ANE===E)return;this.ANE=E;if(E===false){var Bfs=this.
String.indexOf(String.fromCharCode(0x2E),0);if(Bfs>=0)this.R(A.abV(this.String,Bfs
));}this.LA=true;this.Text.F_(JZ);},BmP:function(E){if(this.AvW===E)return;this.
AvW=E;this.R(A.abV(this.String,E));this.LA=true;this.Text.F_(JZ);},BAp:function(
G){if(this.A6O(0x80))this.Ik().ACA(this);this.Am();},BAd:function(G){var Vc=this.
String.length;if(Vc!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this);this.LA=true;
}},BAg:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amj],this);this.LA=true;
}},_Init:function(aArg){A.acn.I$._Init.call(this,aArg);A.acl.TE._Init.call(this.
IS={I:this},0);A.Core.BN._Init.call(this.Cr={I:this},0);A.Core.BN._Init.call(this.
AmD={I:this},0);A.Core.BN._Init.call(this.R$={I:this},0);A.Core.BN._Init.call(this.
KL={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.call(this.
Text={I:this},0);A.acg.C5._Init.call(this.CX={I:this},0);A.Core.BN._Init.call(this.
Aqw={I:this},0);A.Core.BN._Init.call(this.Asc={I:this},0);A.Graphics.Hv._Init.call(
this.BU={I:this},0);A.acg.Hk._Init.call(this.Hk={I:this},0);A.Core.BN._Init.call(
this.Ars={I:this},0);A.Core.BN._Init.call(this.Aq0={I:this},0);A.Core.BN._Init.call(
this.AqJ={I:this},0);this.__proto__=C.Ako;var B;this.H(Afz);this.IS.B2=false;this.
IS.Cw=true;this.IS.Fl(500);this.IS.Uk(500);this.Cr.Filter=147;this.AmD.Filter=45;
this.R$.Filter=44;this.KL.Filter=143;this.Bn.AZ(0x3F);this.Bn.JR(Ri);this.Bn.Kr(
IR);this.Bn.DC(Aon);this.Bn.DL(JZ);this.Bn.AFn(3);this.Text.AZ(0x3F);this.Text.H(
Afz);this.Text.KS(false);this.Text.A6(0x12);this.Text.R(A.jV);this.Text.L(0xFFB3B3B3
);this.CX.DC(AsV);this.CX.DL(AsW);this.CX.A_y(2);this.CX.A_x(2);this.CX.L(0xFFB3B3B3
);this.CX.Z(false);this.Aqw.Filter=138;this.Asc.Filter=137;this.Hk.H(Afz);this.Hk.
L(0xFFB3B3B3);this.Hk.Nh(1);this.Ars.Filter=1;this.Aq0.Filter=41;this.AqJ.Filter=
42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.J(this.Hk,0);this.
IS.Q=[B=this.CX,B.Fk,B.Z];this.Cr.BO=[this,this.AAu];this.Cr.D0=[this,this.AAu];
this.AmD.BO=[this,this.Bet];this.AmD.D0=[this,this.Bet];this.R$.BO=[this,this.AAv
];this.R$.D0=[this,this.AAv];this.KL.BO=[this,this.Bey];this.KL.D0=[this,this.Bey
];this.Bn.BO=[this,this.AAA];this.Text.Q1([this,this.Amj]);this.Text.S(A.aaL(A.fl.
Ak));this.B6=A.aaL(A.fl.Ak);this.Aqw.BO=[this,this.Bbp];this.Asc.BO=[this,this.Bbp
];this.Hk.Zu(this.BU);this.Ars.BO=[this,this.BAp];this.Aq0.BO=[this,this.BAg];this.
AqJ.BO=[this,this.BAd];},_Done:function(){this.__proto__=A.acn.I$;this.IS._Done(
);this.Cr._Done();this.AmD._Done();this.R$._Done();this.KL._Done();this.Bn._Done(
);this.Text._Done();this.CX._Done();this.Aqw._Done();this.Asc._Done();this.BU._Done(
);this.Hk._Done();this.Ars._Done();this.Aq0._Done();this.AqJ._Done();A.acn.I$._Done.
call(this);},_ReInit:function(){A.acn.I$._ReInit.call(this);this.IS._ReInit();this.
Cr._ReInit();this.AmD._ReInit();this.R$._ReInit();this.KL._ReInit();this.Bn._ReInit(
);this.Text._ReInit();this.CX._ReInit();this.Aqw._ReInit();this.Asc._ReInit();this.
BU._ReInit();this.Hk._ReInit();this.Ars._ReInit();this.Aq0._ReInit();this.AqJ._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
acn.I$._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aqw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ars)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aq0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqJ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Demonstrator::NumberInput"};C.Acw={LabelDataSync:null,Af5:function(G
){var B;A.pe([B=A._GetAutoObject(A.acs.Acq),B.BBO],this);},_Init:function(aArg){
C.Jm._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={I:this},0);this.
__proto__=C.Acw;this.LabelDataSync.H(Alc);this.LabelDataSync.R(A.aaR(A.acf.A5C));
this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.Yz.Aw(A.aaL(C.
AUT));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));
},_Done:function(){this.__proto__=C.Jm;this.LabelDataSync._Done();C.Jm._Done.call(
this);},_ReInit:function(){C.Jm._ReInit.call(this);this.LabelDataSync._ReInit();
this.LabelDataSync.R(A.aaR(A.acf.A5C));this.LabelDataSync.S(A.aaL(A.fl.Af));this.
LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jm._Mark.call(this,
D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::SyncAction"
};C.AUT={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorSyncIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[50,60],FrameDelay:0,_this:
null}};C.Abd={TimespanDaysToString:null,Avp:function(aIndex){if(this.AqU()>aIndex
)return this.TimespanDaysToString.BI(aIndex);A.ab5("%s",AsX);return A.jV;},AqU:function(
){return 4;},C4:function(aIndex){var Ai$=0;switch(aIndex){case 0:Ai$=0;break;case
1:Ai$=1;break;case 2:Ai$=2;break;case 3:Ai$=3;break;default:throw new Error(Ax5+
aIndex.toFixed());}return Ai$;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg
);A.Device.TimespanDaysToString._Init.call(this.TimespanDaysToString={I:this},0);
this.__proto__=C.Abd;},_Done:function(){this.__proto__=A.acq.VK;this.TimespanDaysToString.
_Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.call(this
);this.TimespanDaysToString._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(
this,D);if((B=this.TimespanDaysToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::DatePickerUnitDD"};C.BFA={GH:0,AVA:1,He:2,Year:3};C.ACx={_class:function(
){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.AG0={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.ZF={Aed:null,Init:function(aArg){var Au=A._NewObject(A.Core.Bs,0);Au.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1x=Au.Format(Ir);this.Aed.R(A1x);},
Af5:function(G){var B;var J5=this.Aed.String;var O;O=J5.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J5=A.ab1(J5,O,1);O=J5.indexOf(String.fromCharCode(0x2E),O);
}J5=J5+Ax6;J5=J5+A._GetAutoObject(A.acj.VA).ACT(J5).toFixed();var A1x=A._GetAutoObject(
A.Device.AnN).Bfh(J5);A._GetAutoObject(A.aco.Hq).BBF(((B=(A1x|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jm._Init.call(this,aArg);C.ANB._Init.call(this.Aed={
I:this},0);this.__proto__=C.ZF;this.Aed.H(Rj);this.Aed.L(A.jb.Text);this.Aed.BmP(
10);this.J(this.Aed,-1);this.Yz.Aw(A.aaL(A.ach.Avx));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jm;this.Aed._Done();C.Jm._Done.call(this);},_ReInit:function(
){C.Jm._ReInit.call(this);this.Aed._ReInit();},_Mark:function(D){var B;C.Jm._Mark.
call(this,D);if((B=this.Aed)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.Ahx={Transponder:0,VA:1,LAST:2};C.Ahy={Ahz:null,Avp:function(aIndex){if(this.
AqU()>aIndex)return this.Ahz.BI(aIndex);A.ab5("%s",AsX);return A.jV;},AqU:function(
){return 2;},_Init:function(aArg){A.acq.VK._Init.call(this,aArg);C.Ahz._Init.call(
this.Ahz={I:this},0);this.__proto__=C.Ahy;},_Done:function(){this.__proto__=A.acq.
VK;this.Ahz._Done();A.acq.VK._Done.call(this);},_ReInit:function(){A.acq.VK._ReInit.
call(this);this.Ahz._ReInit();},_Mark:function(D){var B;A.acq.VK._Mark.call(this
,D);if((B=this.Ahz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.Ahz={BI:function(A5){var BcM=A5;var A3U=A.jV;switch(BcM){case 1:A3U=A.aaR(A.
acf.VA);break;case 0:A3U=A.aaR(A.acf.Transponder);break;default:throw new Error(
Ax7+BcM.toFixed());}return A3U;},_Init:function(aArg){A.Device.EnumToString._Init.
call(this,aArg);this.__proto__=C.Ahz;},_className:"Demonstrator::ScanTypeToString"
};C.ANB={BeL:function(G){var Bft=0;var O=this.String.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){Bft++;O++;O=this.String.indexOf(String.fromCharCode(0x2E),O
);}if(Bft>=2)return;if(this.String.length>=this.AvW)return;this.R(A.abU(this.String
,S6,this.D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Di,this);},_Init:function(
aArg){C.Ako._Init.call(this,aArg);this.__proto__=C.ANB;},_className:"Demonstrator::DateInput"
};
C._Init=function(){C.AVu.__proto__=A.acn.Menu;C.AUq.__proto__=A.Core.P;C.AMo.__proto__=
C.Ba;C.Mf.__proto__=A.Core.P;C.Yq.__proto__=C.Ara;C.Abe.__proto__=A.Core.P;C.AvA.
__proto__=A.acn.Ahs;C.AMC.__proto__=C.Fy;C.Auw.__proto__=C.Fy;C.Ba.__proto__=A.Core.
P;C.Fy.__proto__=A.Core.P;C.ANC.__proto__=A.acn.Ahq;C.AhC.__proto__=A.Core.P;C.AMv.
__proto__=C.AhC;C.Vr.__proto__=C.Auw;C.ALZ.__proto__=A.Core.P;C.Jm.__proto__=A.Core.
P;C.Acm.__proto__=C.Jm;C.Acx.__proto__=C.Jm;C.Ara.__proto__=A.Core.P;C.Aeo.__proto__=
A.Core.P;C.OT.__proto__=C.Ako;C.Ako.__proto__=A.acn.I$;C.Acw.__proto__=C.Jm;C.Abd.
__proto__=A.acq.VK;C.ZF.__proto__=C.Jm;C.Ahy.__proto__=A.acq.VK;C.Ahz.__proto__=
A.Device.EnumToString;C.ANB.__proto__=C.Ako;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AMY[0]._this)&&(B._cycle!=D))B._Done(C.AMY[0]._this=null);if((B=C.
AMZ[0]._this)&&(B._cycle!=D))B._Done(C.AMZ[0]._this=null);if((B=C.AM0[0]._this)&&(
B._cycle!=D))B._Done(C.AM0[0]._this=null);if((B=C.AM1[0]._this)&&(B._cycle!=D))B.
_Done(C.AM1[0]._this=null);if((B=C.AP2[0]._this)&&(B._cycle!=D))B._Done(C.AP2[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARB[0]._this)&&(B._cycle!=D))B._Done(C.ARB[0]._this=null);if((B=C.Ajq[
0]._this)&&(B._cycle!=D))B._Done(C.Ajq[0]._this=null);if((B=C.AMF[0]._this)&&(B.
_cycle!=D))B._Done(C.AMF[0]._this=null);if((B=C.Asr[0]._this)&&(B._cycle!=D))B._Done(
C.Asr[0]._this=null);if((B=C.AUY[0]._this)&&(B._cycle!=D))B._Done(C.AUY[0]._this=
null);if((B=C.AHh[0]._this)&&(B._cycle!=D))B._Done(C.AHh[0]._this=null);if((B=C.
AVL[0]._this)&&(B._cycle!=D))B._Done(C.AVL[0]._this=null);if((B=C.AUT[0]._this)&&(
B._cycle!=D))B._Done(C.AUT[0]._this=null);if((B=C.ACx[0]._this)&&(B._cycle!=D))B.
_Done(C.ACx[0]._this=null);if((B=C.AG0[0]._this)&&(B._cycle!=D))B._Done(C.AG0[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */