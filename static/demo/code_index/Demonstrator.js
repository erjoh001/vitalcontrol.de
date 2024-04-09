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
var Ce=[0,0,370,60];var BD=[360,0,370,60];var E6=[0,0,370,710];var Hr="Unknown animalType";
var IU=[58,10,120,50];var Is=[0,0,60,60];var O4=[120,0,360,60];var P_="\u2015";var
P$=[0,0,240,60];var CQ=[0,0,40,60];var Ff=[100,0,130,60];var L3=[43,0,100,60];var
Qa=[125,0,240,60];var J3=[0,0];var Ob=[100,0];var Qb=[100,60];var MJ=[0,60];var S_=[
107,0];var US=[240,0];var Z3=[240,60];var W5=[107,60];var It="%d.%m.%Y";var UT="Unhandled date unit: ";
var Z4=[0,0,200,180];var W6=[36,0,200,30];var Z5=[0,30,160,60];var W7="Text";var
Z6=[0,70,40,110];var Z7=[44,70,156,110];var UU=[160,70,200,110];var W8=[7,2,27,25
];var O5=[0,30,170,180];var Z8=[170,34,190,57];var O6=[0,0,40,40];var Rn=[0,40];
var W9=[40,40];var W_=[40,0];var UV=[0,0,370,100];var Z9=[20,0,290,60];var Z_=[0
,60,370,100];var W$="Cap";var Xa=[20,0,370,60];var S$=[310,0,370,60];var UW=[370
,0];var UX=[370,60];var AcM="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ta=".";var Z$=[0,0,170
,150];var AfB=[0,59,170,90];var Aaa=[110,0,170,150];var Xb=[0,30];var Aab=[50,0,
100,150];var Xc=[0,0,40,150];var AhX=[0,0,370,240];var KZ=[0,60,370,710];var AcN=[
0,0,370,300];var Lw=[0,60,370,300];var AhY=[0,60,370,120];var Aoe=[0,120,370,180
];var Oc=[0,180,370,240];var Xd=[0,240,370,300];var Aac=[370,120];var AfC=[0,120
];var AhZ=[370,180];var AcO=[0,180];var UY=[370,240];var Aof=[0,240];var Aog=[370
,300];var Aoh=[0,300];var Aoi=[0,0,50,60];var Alc=[50,0,100,60];var AsX="Unhandled scan type";
var Ax7=[3,11,253,51];var Ax8=[50,0];var O7=[50,60];var Ro=[100,10,370,50];var Ax9=
"276000901234567";var UZ=[3,10,57,50];var AsY=[3,11,55,50];var Ax_="Unhandled temperature unit";
var Ax$=[110,0,260,60];var Aya=[235,10,370,50];var Aoj="39.5";var AfD=[0,0,270,40
];var Aok=[270,0];var IV=[270,40];var Aol=[150,0,170,40];var AsZ=[205,10,207,30];
var Xe=[0,0,370,40];var As0=[50,0,320,40];var As1=" ";var As2=[135,23];var Aom=[
135,0];var As3=[100,0,370,60];var Ald="Error: Nullpointer Exception";var Ayb="Unknown Date Piecker Unit Index: ";
var Ayc="0";var Ayd="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM$={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQc={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARX={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMO={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVg={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVO={Aee:null,AX:null,AR:null,Background:null,H9:null,AD:null,IR:null,Dn:
null,Lj:null,A7S:null,A8h:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IR.H(A.abP(this.IR.M,this.AD.OS));this.IR.H([].concat(this.IR.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40
);if(IB&&(this.AD.Gt<0))this.AD.GT(0);},N2:function(E){if(this.Lj===E)return;this.
Lj=E;this.AD.N2(E);},Bnw:function(E){var B;if(this.A7S===E)return;if(!!this.Aee){
this.HO(this.Aee);this.Aee=null;}if(!!E){this.Aee=(C.FE.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aee.A_m([this,this.Akt]);this.Aee.A_n([this,this.Aku]);this.Aee.
BnC(null);this.J(this.Aee,0);this.AD.A_t((B=this.Aee.M)[3]-B[1]);}else this.AD.A_t(
0);this.IR.H(A.abP(this.IR.M,this.AD.OS));A.pe([this,this.Fk],this);this.A7S=E;}
,Hm:function(G){var B;var Gg=this.AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zq(this.AX);Aa.Ch(Gg);Aa.Zu(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GO]));},Zq:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.An9],[B=this.AX,B.Fp
,B.Ft],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.An9],[E,E.
Fp,E.Ft],0);}A.pe([this,this.Ch],this);A.pe([this,this.An9],this);},Ch:function(
G){if(!!this.AX){this.AD.Jy(this.AX.B9());this.AD.AbD(0,this.AD.AY-1);}else this.
AD.Jy(0);if(this.A8h!==this.AD.AY){this.AD.ABK(null,null);this.A8h=this.AD.AY;}A.
pe([this,this.Fk],this);},Aku:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOU(
))[3]-B[1]));},Akt:function(G){this.H(A.abI(this.M,180));},A9D:function(G){var JC=(
A.Core.BK.isPrototypeOf(G)?G:null);var Gg=this.AD.Gt;if(JC.CO===4)Gg=Gg-1;else if(
JC.CO===5)Gg=Gg+1;else if((JC.DQ>=0x30)&&(JC.DQ<=0x39))A._GetAutoObject(A.aco.AgO
).Ez(JC.DQ);else if(JC.CO===45)A._GetAutoObject(A.aco.AgO).Delete();else JC.NL=true;
if((Gg<0)||(Gg>=this.AD.AY))return;this.AD.GT(Gg);this.Bzu(Gg,true);},Bzj:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GT(Aa.Hs);},Bzu:function(Ha,Ac3
){var B;if((Ha<0)||(Ha>=this.AD.AY))return;var Az=this.AD.AqT(Ha,Ha);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOU())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOU())[3]-B[1]))-((B=this.AD.Bjq())[3]-B[1]));var LN=A.lb(Az,Bd);if((!
Ac3&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GO;this.
AD.Gb(this.AD.Br-Bq);},An9:function(G){this.AD.GT(-1);},Fk:function(G){var B;this.
IR.My(this.AD.GO*this.AD.AY);this.IR.MB(((B=this.AD.M)[3]-B[1])-this.AD.OS);this.
IR.Mz(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H9._Init.call(this.H9={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IR={I:this},
0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.AVO;this.H(Ce);this.
Background.AZ(0x3);this.Background.H(Ce);this.H9.AZ(0x3F);this.H9.H(Ce);this.AD.
AZ(0x3F);this.AD.H(Ce);this.AD.Ae8(60);this.AD.Jy(0);this.AD.N2(this.Lj);this.IR.
AZ(0x3A);this.IR.H(BD);this.IR.L(0xFF808080);this.J(this.Background,0);this.J(this.
H9,0);this.J(this.AD,0);this.J(this.IR,0);this.AD.Em=[this,this.Fk];this.AD.Hm=[
this,this.Hm];this.AD.Aw8(this.H9);this.AR=[this,this.Bzj];this.Dn.BL=[this,this.
A9D];this.Dn.D1=[this,this.A9D];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H9._Done();this.AD._Done();this.IR._Done();this.Dn._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H9._ReInit();this.AD._ReInit();this.IR._ReInit();
this.Dn._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aee)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUJ={GK:null,AL:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.G1),B.A9g,B.A_E],0);A.pe([this,this.GH],this);},Ab2:function(
E){if(this.GK===E)return;if(!!this.GK)this.HO(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhE(E,this.BU);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.G1).Asy)this.Ab2((C.AhK.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.G1).Asy,0))?B:null));else this.Ab2(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUJ;this.H(E6);this.AL.AZ(0x3F);
this.AL.H(E6);this.BU.H(E6);this.BU.L(0xFF000000);this.J(this.AL,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMx={ABp:0,Ke:0,Background:null,V:null
,Ajo:null,AdX:null,XP:null,AdY:null,Mk:null,Mh:0,LI:false,KG:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fw=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mk.Ar(false);this.Mk.Z(false);}else if(IB){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mk.Ar(true);this.Mk.Z(true);}else
if(Fw){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mk.Ar(true);this.
Mk.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mk.Ar(false
);this.Mk.Z(false);}if(!this.KG&&Fw)A._GetAutoObject(A.aco.G1).A_B(this.ABp);this.
Mk.Bny(this.Ke>0);this.Mk.Bn1(this.ABp>0);this.V.R(this.Mh.toFixed());this.LI=Hf;
this.KG=Fw;},Ch:function(Ad){if(!this.AX){this.XP.Ax(A.aaL(A.ach.Aez));this.AdX.
L(A.jb.Afu);return;}this.Hs=Ad;if(!!this.AX){this.Ke=this.AX.KO(Ad,26);this.ABp=
this.AX.KO(Ad,22);this.Mh=this.AX.CF(Ad,1);var AlQ=this.AX.H2(Ad,11);var AlH=this.
AX.I6(Ad,17);var LQ=this.AX.I6(Ad,13);var Ib=this.AX.AmW(Ad,14);var Xp=A._GetAutoObject(
A.Device.Helper).AMm(LQ,AlQ,AlH);switch(Ib){case 0:this.XP.Ax(A.aaL(A.ach.Aez));
break;case 1:this.XP.Ax(A.aaL(A.ach.AvJ));break;case 2:this.XP.Ax(A.aaL(A.ach.AvM
));break;default:A.ab5("%s%e",Hr,Ib);}this.AdY.Ax(this.XP.Al);this.AdX.L(A._GetAutoObject(
A.acj.Assessment).Qr(Xp));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CH._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajo={I:this},0);A.acg.Ap._Init.call(this.AdX={
I:this},0);A.acg.Ap._Init.call(this.XP={I:this},0);A.acg.Ap._Init.call(this.AdY={
I:this},0);C.Mk._Init.call(this.Mk={I:this},0);this.__proto__=C.AMx;this.Background.
AZ(0x3F);this.Background.H(Ce);this.V.AZ(0x3F);this.V.H(IU);this.V.R(A.aaR(A.acf.
GN));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajo.H(Is);this.Ajo.L(A.jb.Text);this.
AdX.H(Is);this.AdX.L(A.jb.E1);this.XP.H(Is);this.AdY.H(Is);this.AdY.L(A.jb.Text);
this.AdY.Cv(1);this.Mk.AZ(0x3);this.Mk.H(O4);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajo,0);this.J(this.AdX,0);this.J(this.XP,0);this.J(this.AdY,0);
this.J(this.Mk,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.
aaL(A.fl.Bh));this.Ajo.Ax(A.aaL(C.AHp));this.AdX.Ax(A.aaL(C.AV5));this.XP.Ax(A.aaL(
A.ach.Aez));this.AdY.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajo._Done();this.AdX._Done();this.XP.
_Done();this.AdY._Done();this.Mk._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajo._ReInit(
);this.AdX._ReInit();this.XP._ReInit();this.AdY._ReInit();this.Mk._ReInit();this.
V.R(A.aaR(A.acf.GN));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mk={Uy:null,WK:null,Ak0:null,Nq:null
,N_:null,ZG:null,Acx:null,Av6:false,AxT:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Nq.L(A.
jb.Bm);this.N_.L(A.jb.Bm);}else{this.Nq.L(A.jb.Text);this.N_.L(A.jb.Text);}if(this.
AxT){this.Nq.R(A.aaR(A.acf.Bo2));if(this.Av6){this.Uy.Ax(A.aaL(C.AxU));this.WK.Ax(
A.aaL(C.AxU));}else{this.Uy.Ax(A.aaL(C.Asv));this.WK.Ax(A.aaL(C.Asv));}}else if(
this.Av6){this.Uy.Ax(A.aaL(C.ACG));this.WK.Ax(A.aaL(C.ACG));this.Nq.R(P_);}var A4i=
this.AxT||this.Av6;this.Uy.Z(A4i);this.WK.Z(A4i);this.Nq.Z(A4i);this.ZG.Ar(this.
AxT);},Bn1:function(E){if(this.AxT===E)return;this.AxT=E;this.Am();},Bny:function(
E){if(this.Av6===E)return;this.Av6=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uy={I:this},0);A.acg.Ap._Init.call(this.
WK={I:this},0);A.acg.Ap._Init.call(this.Ak0={I:this},0);A.kR.CH._Init.call(this.
Nq={I:this},0);A.kR.CH._Init.call(this.N_={I:this},0);A.Core.Bn._Init.call(this.
ZG={I:this},0);A.Core.Bn._Init.call(this.Acx={I:this},0);this.__proto__=C.Mk;var
B;this.H(P$);this.Uy.AZ(0x6);this.Uy.H(CQ);this.Uy.L(A.jb.CS);this.Uy.Cv(1);this.
WK.AZ(0x6);this.WK.H(CQ);this.WK.L(A.jb.Text);this.Ak0.AZ(0xE);this.Ak0.H(Ff);this.
Nq.AZ(0x7);this.Nq.H(L3);this.Nq.A6(0x11);this.Nq.L(0xFF000000);this.N_.AZ(0x3);
this.N_.H(Qa);this.N_.R(A.aaR(A.acf.Temperature));this.N_.A6(0x11);this.N_.L(0xFF000000
);this.ZG.AZ(0x3);this.ZG.JV(J3);this.ZG.Kv(Ob);this.ZG.DC(Qb);this.ZG.DM(MJ);this.
Acx.AZ(0x3);this.Acx.JV(S_);this.Acx.Kv(US);this.Acx.DC(Z3);this.Acx.DM(W5);this.
J(this.Uy,0);this.J(this.WK,0);this.J(this.Ak0,0);this.J(this.Nq,0);this.J(this.
N_,0);this.J(this.ZG,0);this.J(this.Acx,0);this.Uy.Ax(A.aaL(C.Asv));this.WK.Ax(A.
aaL(C.Asv));this.Ak0.Ax(A.aaL(C.AVg));this.Nq.S(A.aaL(A.fl.Af));this.Nq.A2(A.aaL(
A.fl.Ak));this.Nq.Cu(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Af));this.N_.A2(A.aaL(
A.fl.Ak));this.N_.Cu(A.aaL(A.fl.Bh));this.ZG.Lo=[B=A._GetAutoObject(A.aco.G1),B.
Bfl];this.Acx.Lo=[B=A._GetAutoObject(A.aco.G1),B.Be8];},_Done:function(){this.__proto__=
A.Core.P;this.Uy._Done();this.WK._Done();this.Ak0._Done();this.Nq._Done();this.N_.
_Done();this.ZG._Done();this.Acx._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uy._ReInit();this.WK._ReInit();this.Ak0._ReInit(
);this.Nq._ReInit();this.N_._ReInit();this.ZG._ReInit();this.Acx._ReInit();this.
N_.R(A.aaR(A.acf.Temperature));this.Nq.S(A.aaL(A.fl.Af));this.Nq.A2(A.aaL(A.fl.Ak
));this.Nq.Cu(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Af));this.N_.A2(A.aaL(A.fl.Ak
));this.N_.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yp={CP:function(){this.Am();
},Ai:function(Ae){C.Ard.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8o:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgO).Ez(D5.DQ);},A8m:function(G){A._GetAutoObject(
A.aco.AgO).Delete();},_Init:function(aArg){C.Ard._Init.call(this,aArg);this.__proto__=
C.Yp;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Ard._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abd={Dl:null,Yi:null,Sd:null,Yj:
null,DT:null,YD:null,AmI:null,Av:null,Pc:null,M8:null,Abc:null,FY:0,AvR:0,AGd:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Sd.R(this.Av.Format(It));if(this.
AGd){this.Sd.Z(false);this.YD.Z(false);this.DT.Z(false);this.Yj.Z(false);this.Pc.
Ar(true);this.Pc.Z(true);this.M8.Cv(2);this.M8.ATy(2);this.M8.H(A.abM(this.M8.M,
this.Pc.M[2]));}else{this.Sd.Z(true);this.YD.Z(true);this.DT.Z(true);this.Yj.Z(true
);this.Pc.Ar(false);this.Pc.Z(false);this.M8.Cv(3);this.M8.ATy(3);this.M8.H(A.abM(
this.M8.M,this.Sd.M[2]));}},BBc:function(G){this.BnF(!this.AGd);},AdA:function(G
){var F;if(!!this.Dl)this.Um((F=this.Dl,F[1].call(F[0])));},Ab6:function(E){if(A.
aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.AdA],this.Dl,0);this.Dl=E;if(
!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);},Um:function(E){
if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.BCg(this);this.
Am();},AiH:function(G){var B;var F;var BO=this.FY;var Ajb=this.Abc.C6(this.AvR);
this.AJo(Ajb);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Um(((
B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},Ait:function(G){var B;var F;var BO=
this.FY;var Ajb=this.Abc.C6(this.AvR);this.ALc(Ajb);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Um(((B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(
this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);
}},Bnb:function(E){if(this.AvR===E)return;this.AvR=E;},BnF:function(E){if(this.AGd===
E)return;this.AGd=E;this.Am();},BBO:function(G){var B;var F;var BO=this.FY;this.
Av.Lq(this.Pc.AED());this.Av.Ur(this.Pc.AEI());this.Av.Year=this.Pc.ArC();this.Um(((
B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},BCg:function(G){this.Pc.Lq(this.Av.
GL);this.Pc.Ur(this.Av.Hk);this.Pc.AkH(this.Av.Year);},AJo:function(Ay5){var B;switch(
Ay5){case 0:if(this.Av.GL<this.Av.Zm())this.Av.Lq(this.Av.GL+1);else{this.Av.Lq(
1);this.AJo(2);}break;case 1:if((this.Av.GL+7)<=this.Av.Zm())this.Av.Lq(this.Av.
GL+7);else{this.Av.Lq((7-this.Av.Zm())+this.Av.GL);this.AJo(2);}break;case 2:if(
this.Av.Hk<12)this.Av.Ur(this.Av.Hk+1);else{this.Av.Ur(1);this.AJo(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UT+Ay5.toFixed());}},ALc:function(
Ay5){var B;switch(Ay5){case 0:if(this.Av.GL>1)this.Av.Lq(this.Av.GL-1);else{this.
ALc(2);this.Av.Lq(this.Av.Zm());}break;case 1:if((this.Av.GL-7)>0)this.Av.Lq(this.
Av.GL-7);else{this.ALc(2);this.Av.Lq(this.Av.Zm()-(7-this.Av.GL));}break;case 2:
if(this.Av.Hk>1)this.Av.Ur(this.Av.Hk-1);else{this.Av.Ur(12);this.ALc(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UT+Ay5.toFixed());}},Bli:function(
){return this.AvR;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yi={I:this},0);A.acg.Text._Init.call(this.Sd={I:this},0);C.AvH._Init.
call(this.Yj={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvH._Init.call(
this.YD={I:this},0);A.acg.Ap._Init.call(this.AmI={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANM._Init.call(this.Pc={I:this},0);C.AvH._Init.call(this.M8={
I:this},0);C.Abc._Init.call(this.Abc={I:this},0);this.__proto__=C.Abd;this.H(Z4);
this.Yi.H(W6);this.Yi.A6(0x11);this.Yi.R(A.aaR(A.acf.Date));this.Yi.L(0xFF000000
);this.Sd.H(Z5);this.Sd.A6(0x11);this.Sd.R(W7);this.Sd.L(0xFF000000);this.Yj.H(Z6
);this.Yj.A_d(200);this.DT.H(Z7);this.DT.ArW(120);this.DT.GO=30;this.DT.ATa(A.jb.
CS);this.DT.A9R(A.jb.CS);this.DT.A9V(A.jb.CS);this.DT.ATb(A.jb.Text);this.DT.A9W(
A.jb.Text);this.DT.A9S(A.jb.AV);this.DT.A9X(A.jb.Bm);this.DT.A9U(A.jb.AV);this.DT.
A9T(A.jb.Text);this.YD.H(UU);this.YD.A_d(200);this.AmI.H(W8);this.Pc.H(O5);this.
M8.H(Z8);this.M8.Cv(3);this.M8.ATy(3);this.M8.L(A.jb.Text);this.J(this.Yi,0);this.
J(this.Sd,0);this.J(this.Yj,0);this.J(this.DT,0);this.J(this.YD,0);this.J(this.AmI
,0);this.J(this.Pc,0);this.J(this.M8,0);this.Yi.S(A.aaL(A.fl.Ak));this.Sd.S(A.aaL(
A.fl.EK));this.Yj.AR=[this,this.Ait];this.Yj.DB(A.aaL(C.AM8));this.Yj.ATz(A.aaL(
C.AM9));this.DT.Au([this,this.Bli,this.Bnb]);this.DT.A93(this.Abc);this.DT.ArO(A.
aaL(A.fl.Ak));this.DT.AwM(A.aaL(A.fl.Ak));this.YD.AR=[this,this.AiH];this.YD.DB(
A.aaL(C.AM_));this.YD.ATz(A.aaL(C.AM$));this.AmI.Ax(A.aaL(C.AQc));this.Pc.Dj=[this
,this.BBO];this.M8.AR=[this,this.BBc];this.M8.DB(A.aaL(A.ach.Aju));this.M8.ATz(A.
aaL(A.ach.Aju));},_Done:function(){this.__proto__=A.Core.P;this.Yi._Done();this.
Sd._Done();this.Yj._Done();this.DT._Done();this.YD._Done();this.AmI._Done();this.
Av._Done();this.Pc._Done();this.M8._Done();this.Abc._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yi._ReInit();this.Sd.
_ReInit();this.Yj._ReInit();this.DT._ReInit();this.YD._ReInit();this.AmI._ReInit(
);this.Av._ReInit();this.Pc._ReInit();this.M8._ReInit();this.Abc._ReInit();this.
Yi.R(A.aaR(A.acf.Date));this.Yi.S(A.aaL(A.fl.Ak));this.Sd.S(A.aaL(A.fl.EK));this.
DT.ArO(A.aaL(A.fl.Ak));this.DT.AwM(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvH={C9:null,Axr:null,AN2:null,AR:null,Bo:null,Dn:null,CR:null,Hw:null,Yw:null
,APN:0,TS:0,AUd:0,AQ:0xFFFFFFFF,A2u:false,LI:false,KG:false,Qv:false,Ai:function(
Ae){var B;A.acn.AhA.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===
0x20);var GE=this.CR.Down&&this.CR.YG;if(!Hf)this.Hw.Ax(this.AN2);else if(GE){this.
Hw.Ax(this.Axr);this.Hw.Cv(this.AUd);}else{this.Hw.Ax(this.C9);this.Hw.Cv(this.TS
);}this.Hw.L(this.AQ);this.LI=Hf;this.KG=Fw;this.Qv=GE;},Qu:function(G){this.Am(
);A.pe(this.AR,this);},AiR:function(G){if(this.CR.Down)return;if(this.Dn.Ach)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Be5:function(G){this.Am();},AAH:function(G){if(!this.CR.YG)return;if(this.CR.NJ
)return;if((this.Yw.VG<=0)||(this.CR.Jt<this.Yw.VG)){if(this.CR.Jt>=this.Bo.VG)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yw.Ar(false);},AAG:function(G){this.
Yw.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C9===E)return;this.C9=E;this.Am();},ATz:function(E){if(this.Axr===E)return;
this.Axr=E;this.Am();},A3u:function(G){if(!this.CR.YG)return;if(this.CR.NJ)return;
if((this.APN>=0)&&this.A2u){this.A2u=false;this.Yw.Ar(true);A.pe(this.AR,this);}
},A_d:function(E){if(this.APN===E)return;this.APN=E;this.Yw.WD(E);},BAG:function(
G){this.A2u=true;},Cv:function(E){if(this.TS===E)return;this.TS=E;this.Am();},ATy:
function(E){if(this.AUd===E)return;this.AUd=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.AhA._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hw={
I:this},0);A.Core.Timer._Init.call(this.Yw={I:this},0);this.__proto__=C.AvH;this.
H(O6);this.Bo.PV(0);this.Bo.WD(50);this.Dn.Filter=149;this.CR.AZ(0x3F);this.CR.JV(
Rn);this.CR.Kv(W9);this.CR.DC(W_);this.CR.DM(J3);this.CR.Afg=0xF;this.CR.AFx(100
);this.Hw.AZ(0x3F);this.Hw.H(O6);this.Hw.A6(0x12);this.Yw.PV(0);this.J(this.CR,0
);this.J(this.Hw,0);this.Bo.MC=[this,this.Qu];this.Dn.BL=[this,this.AiR];this.CR.
AEO=[this,this.Be5];this.CR.Av$=[this,this.Be5];this.CR.D1=[this,this.A3u];this.
CR.Lo=[this,this.AAH];this.CR.BL=[this,this.AAG];this.Hw.Ax(A.aaL(A.aci.TN));this.
C9=A.aaL(A.aci.TN);this.Axr=A.aaL(A.aci.TN);this.AN2=A.aaL(A.aci.TN);this.Yw.MC=[
this,this.BAG];},_Done:function(){this.__proto__=A.acn.AhA;this.Bo._Done();this.
Dn._Done();this.CR._Done();this.Hw._Done();this.Yw._Done();A.acn.AhA._Done.call(
this);},_ReInit:function(){A.acn.AhA._ReInit.call(this);this.Bo._ReInit();this.Dn.
_ReInit();this.CR._ReInit();this.Hw._ReInit();this.Yw._ReInit();},_Mark:function(
D){var B;A.acn.AhA._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AML={PA:null,V:null,Aes:null,_Init:function(aArg){
C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aes._Init.call(this.Aes={I:this},0);this.__proto__=C.AML;
this.H(UV);this.PA.AZ(0x1D);this.PA.H(Ce);this.PA.L(0xFFE6E6E6);this.V.AZ(0x1D);
this.V.H(Z9);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A5j));this.V.L(0xFF000000);this.
Aes.H(Z_);this.J(this.PA,0);this.J(this.V,0);this.J(this.Aes,0);this.V.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();this.
Aes._Done();C.FE._Done.call(this);},_ReInit:function(){C.FE._ReInit.call(this);this.
PA._ReInit();this.V._ReInit();this.Aes._ReInit();this.V.R(A.aaR(A.acf.A5j));this.
V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FE._Mark.call(this,D);if((B=this.
PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuE={PA:null,V:null,AeT:null,AeR:null,Bn:null,DK:W$,Aho:false,Ai:function(Ae
){C.FE.Ai.call(this,Ae);if(this.Aho){this.AeR.Z(true);this.AeT.Z(false);}else{this.
AeR.Z(false);this.AeT.Z(true);}},BBA:function(G){if(this.Aho)A.pe(this.Akt,this);
else A.pe(this.Aku,this);this.ArX(!this.Aho);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArX:function(E){if(this.Aho===E)return;this.Aho=E;this.Am(
);},_Init:function(aArg){C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeT={
I:this},0);A.acg.Ap._Init.call(this.AeR={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuE;this.H(Ce);this.PA.AZ(0x1D);this.PA.H(Ce);this.PA.
L(0xFFE6E6E6);this.V.AZ(0x1D);this.V.H(Xa);this.V.A6(0x11);this.V.R(W$);this.V.L(
0xFF000000);this.AeT.H(S$);this.AeT.Z(false);this.AeR.AZ(0x3A);this.AeR.H(S$);this.
Bn.JV(J3);this.Bn.Kv(UW);this.Bn.DC(UX);this.Bn.DM(MJ);this.J(this.PA,0);this.J(
this.V,0);this.J(this.AeT,0);this.J(this.AeR,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeT.Ax(A.aaL(C.AMO));this.AeR.Ax(A.aaL(C.Ajt));this.Bn.Lo=[this,this.
BBA];},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();this.
AeT._Done();this.AeR._Done();this.Bn._Done();C.FE._Done.call(this);},_ReInit:function(
){C.FE._ReInit.call(this);this.PA._ReInit();this.V._ReInit();this.AeT._ReInit();
this.AeR._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FE._Mark.call(this,D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hs:-1,Zq:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",AcM);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAH:function(
G){if(!this.CR.YG)return;if(this.CR.NJ)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Ce);this.CR.AZ(0x3F);this.CR.JV(MJ);this.CR.Kv(UX);this.CR.
DC(UW);this.CR.DM(J3);this.CR.Afg=0xF;this.CR.AFx(100);this.J(this.CR,0);this.CR.
Lo=[this,this.AAH];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FE={ASs:null,Aku:null,Akt:null,BnC:function(E){if(A.aa0(this.ASs,E))return;this.
ASs=E;},A_n:function(E){if(A.aa0(this.Aku,E))return;this.Aku=E;},A_m:function(E){
if(A.aa0(this.Akt,E))return;this.Akt=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FE;this.H(Ce);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aku)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANM={Dj:null
,Aa5:null,WX:null,WW:null,WV:null,Ng:null,Nf:null,KR:null,LI:false,KG:false,BCq:
false,Ai:function(Ae){var B;A.acn.Ahy.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fw=((Ae&0x20)===0x20);var Bd6=(this.WV.ZL||this.WW.ZL)||this.WX.ZL;if(Bd6)this.
Aa5.L(A.jb.Text);else this.Aa5.L(A.jb.Bc);this.LI=Hf;this.KG=Fw;this.BCq=Bd6;},AAC:
function(G){this.Am();if((!this.WV.ZL&&!this.WW.ZL)&&!this.WX.ZL){var Vc=this.AKh(
this.AEI(),this.ArC());var Adf=this.AED();this.KR.Jy(Vc);if(Adf>Vc)this.Lq(Vc);A.
pe(this.Dj,this);}},A3P:function(G){this.Am();},Bl1:function(G){var B;var Gg=this.
Ng.G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Ng.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gg+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Ng.M)[2]-B[0],this.Ng.GO]));},Bl0:function(G){var B;var Gg=this.Nf.
G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nf.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gg+1,2,10)+Ta);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Nf.M)[2]-B[0],this.Nf.GO]));},BlY:function(G){var B;var Gg=this.KR.G6;var
CA=(A.acg.Text.isPrototypeOf(B=this.KR.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gg+1
,2,10)+Ta);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KR.M)[2]-B[0],this.KR.GO]));},ArC:function(){return 1900+((((-this.Ng.Br/this.
Ng.GO)|0)+2)%200);},AkH:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Ng.Gb(((
E-1900)-2)*-this.Ng.GO);var Vc=this.AKh(this.AEI(),E);this.KR.Jy(Vc);if(this.AED(
)>Vc)this.Lq(Vc);},AEI:function(){return 1+((((-this.Nf.Br/this.Nf.GO)|0)+2)%12);
},Ur:function(E){if(E<1)E=1;if(E>12)E=12;this.Nf.Gb(((E-1)-2)*-this.Nf.GO);var Vc=
this.AKh(E,this.ArC());this.KR.Jy(Vc);if(this.AED()>Vc)this.Lq(Vc);},AED:function(
){return 1+((((-this.KR.Br/this.KR.GO)|0)+2)%this.KR.AY);},Lq:function(E){var Vc=
this.AKh(this.AEI(),this.ArC());if(E<1)E=1;if(E>Vc)E=Vc;this.KR.Gb(((E-2)-1)*-this.
KR.GO);},AKh:function(AfL,Ac7){if(AfL===2){if(!(Ac7%4)&&(!!(Ac7%100)||!(Ac7%400)
))return 29;else return 28;}else if((((AfL===4)||(AfL===6))||(AfL===9))||(AfL===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahy._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa5={I:this},0);A.Core.H9._Init.call(this.WX={I:this}
,0);A.Core.H9._Init.call(this.WW={I:this},0);A.Core.H9._Init.call(this.WV={I:this
},0);A.Core.CM._Init.call(this.Ng={I:this},0);A.Core.CM._Init.call(this.Nf={I:this
},0);A.Core.CM._Init.call(this.KR={I:this},0);this.__proto__=C.ANM;this.H(Z$);this.
Aa5.H(AfB);this.Aa5.Nm(3);this.Aa5.L(0xFFE1E1E1);this.Aa5.Z(true);this.WX.H(Aaa);
this.WX.ATL(Xb);this.WX.ATh(0.2);this.WW.H(Aab);this.WW.ATL(Xb);this.WW.ATh(0.2);
this.WV.H(Xc);this.WV.ATL(Xb);this.WV.ATh(0.2);this.Ng.H(Aaa);this.Ng.ATf(true);
this.Ng.Gb(60);this.Ng.Ae8(30);this.Ng.Jy(200);this.Nf.H(Aab);this.Nf.ATf(true);
this.Nf.Gb(60);this.Nf.Ae8(30);this.Nf.Jy(12);this.KR.H(Xc);this.KR.ATf(true);this.
KR.Gb(60);this.KR.Ae8(30);this.KR.Jy(31);this.J(this.Aa5,0);this.J(this.WX,0);this.
J(this.WW,0);this.J(this.WV,0);this.J(this.Ng,0);this.J(this.Nf,0);this.J(this.KR
,0);this.WX.Zl=[this,this.AAC];this.WX.SK=[this,this.A3P];this.WW.Zl=[this,this.
AAC];this.WW.SK=[this,this.A3P];this.WV.Zl=[this,this.AAC];this.WV.SK=[this,this.
A3P];this.Ng.Hm=[this,this.Bl1];this.Ng.Aw8(this.WX);this.Nf.Hm=[this,this.Bl0];
this.Nf.Aw8(this.WW);this.KR.Hm=[this,this.BlY];this.KR.Aw8(this.WV);},_Done:function(
){this.__proto__=A.acn.Ahy;this.Aa5._Done();this.WX._Done();this.WW._Done();this.
WV._Done();this.Ng._Done();this.Nf._Done();this.KR._Done();A.acn.Ahy._Done.call(
this);},_ReInit:function(){A.acn.Ahy._ReInit.call(this);this.Aa5._ReInit();this.
WX._ReInit();this.WW._ReInit();this.WV._ReInit();this.Ng._ReInit();this.Nf._ReInit(
);this.KR._ReInit();},_Mark:function(D){var B;A.acn.Ahy._Mark.call(this,D);if((B=
this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ng
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AV5={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhK={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhK;this.H(E6);},_className:"Demonstrator::SelectionAreaContent"};C.AME={Y:null
,Vw:null,TC:null,BB2:function(G){var B;this.TC.H(A.abI(this.TC.M,((B=this.M)[3]-
B[1])-((B=this.Vw.M)[3]-B[1])));},_Init:function(aArg){C.AhK._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL9._Init.call(this.Vw={I:this},0);C.
AVO._Init.call(this.TC={I:this},0);this.__proto__=C.AME;this.Y.AZ(0x3F);this.Y.H(
E6);this.Y.JT(1);this.Vw.H(AhX);this.Vw.Aj(true);this.Vw.ArX(true);this.TC.AZ(0x3
);this.TC.H(KZ);this.TC.Aj(true);this.TC.N2(C.AMx);this.TC.Bnw(C.AML);this.J(this.
Y,0);this.J(this.Vw,0);this.J(this.TC,0);this.Bb(this.TC);this.Y.Em=[this,this.BB2
];this.TC.Zq(A._GetAutoObject(A.aco.Aqh));},_Done:function(){this.__proto__=C.AhK;
this.Y._Done();this.Vw._Done();this.TC._Done();C.AhK._Done.call(this);},_ReInit:
function(){C.AhK._ReInit.call(this);this.Y._ReInit();this.Vw._ReInit();this.TC._ReInit(
);},_Mark:function(D){var B;C.AhK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vw={
_Init:function(aArg){C.AuE._Init.call(this,aArg);this.__proto__=C.Vw;this.T(A.aaR(
A.acf.A6b));},_ReInit:function(){C.AuE._ReInit.call(this);this.T(A.aaR(A.acf.A6b
));},_className:"Demonstrator::ActionsHeader"};C.AL9={Background:null,XO:null,Y:
null,Acw:null,Acl:null,ZF:null,Acv:null,Akc:null,Akd:null,Ake:null,Akf:null,Akg:
null,Aho:false,Init:function(aArg){var B;A.zX([this,this.Bfm],[B=A._GetAutoObject(
A.aco.G1),B.AEK,B.Ar5],0);A.pe([this,this.Bfm],this);},Aku:function(G){this.ArX(
true);},Akt:function(G){this.ArX(false);},ArX:function(E){if(this.Aho===E)return;
this.Aho=E;this.XO.ArX(E);A.pe([this,this.Bfx],this);},Bfm:function(G){var BB_=A.
_GetAutoObject(A.aco.G1).AhF===2;A._GetAutoObject(A.Device.Helper).J0(this.ZF,BB_
);},Bfx:function(G){var B;if(this.Aho)this.H(A.abI(this.M,(B=this.XO.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XO.M)[3]-B[1])+((B=this.Y.Dc(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vw._Init.call(this.XO={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acw._Init.call(this.Acw={I:this},0);C.Acl._Init.call(this.Acl={I:
this},0);C.ZF._Init.call(this.ZF={I:this},0);C.Acv._Init.call(this.Acv={I:this},
0);A.acg.C7._Init.call(this.Akc={I:this},0);A.acg.C7._Init.call(this.Akd={I:this
},0);A.acg.C7._Init.call(this.Ake={I:this},0);A.acg.C7._Init.call(this.Akf={I:this
},0);A.acg.C7._Init.call(this.Akg={I:this},0);this.__proto__=C.AL9;this.H(AcN);this.
Background.AZ(0x3F);this.Background.H(AcN);this.XO.AZ(0x1D);this.XO.H(Ce);this.Y.
H(Lw);this.Y.JT(1);this.Acw.H(AhY);this.Acw.Aj(true);this.Acl.H(Aoe);this.Acl.Aj(
true);this.ZF.H(Oc);this.ZF.Aj(true);this.Acv.H(Xd);this.Acv.Aj(true);this.Akc.DC(
UX);this.Akc.DM(MJ);this.Akc.L(A.jb.Bc);this.Akd.DC(Aac);this.Akd.DM(AfC);this.Akd.
L(A.jb.Bc);this.Ake.DC(AhZ);this.Ake.DM(AcO);this.Ake.L(A.jb.Bc);this.Akf.DC(UY);
this.Akf.DM(Aof);this.Akf.L(A.jb.Bc);this.Akg.DC(Aog);this.Akg.DM(Aoh);this.Akg.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XO,0);this.J(this.Y,0);this.J(this.
Acw,0);this.J(this.Acl,0);this.J(this.ZF,0);this.J(this.Acv,0);this.J(this.Akc,0
);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.
XO.A_n([this,this.Aku]);this.XO.A_m([this,this.Akt]);this.Y.Em=[this,this.Bfx];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XO._Done();this.Y._Done();this.Acw._Done();this.Acl._Done();this.ZF._Done();this.
Acv._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();this.Akf._Done();
this.Akg._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XO._ReInit();this.Y._ReInit();this.Acw.
_ReInit();this.Acl._ReInit();this.ZF._ReInit();this.Acv._ReInit();this.Akc._ReInit(
);this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();this.Akg._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jq={
YA:null,Aha:null,Bn:null,C7:null,Af$:function(G){},A0L:function(s){this.Af$(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YA={
I:this},0);A.acg.Ap._Init.call(this.Aha={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C7._Init.call(this.C7={I:this},0);this.__proto__=C.Jq;this.H(Ce
);this.YA.H(Aoi);this.YA.L(A.jb.Text);this.Aha.H(Alc);this.Aha.L(A.jb.Text);this.
Aha.Cv(0);this.Bn.JV(J3);this.Bn.Kv(Ob);this.Bn.DC(Qb);this.Bn.DM(MJ);this.C7.DC(
Qb);this.C7.DM(Ob);this.C7.L(A.jb.Bc);this.J(this.YA,0);this.J(this.Aha,0);this.
J(this.Bn,0);this.J(this.C7,0);this.YA.Ax(A.aaL(A.aci.TN));this.Aha.Ax(A.aaL(A.aci.
AT5));this.Bn.BL=[this,this.A0L];},_Done:function(){this.__proto__=A.Core.P;this.
YA._Done();this.Aha._Done();this.Bn._Done();this.C7._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YA._ReInit();this.Aha.
_ReInit();this.Bn._ReInit();this.C7._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aha).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acl={AGA:null,DT:null,Yz:null,BU:null,Nb:null,AhG:null,ANG:0,Init:function(aArg
){var B;A.zX([this,this.Bfw],[B=A._GetAutoObject(A.aco.G1),B.AEK,B.Ar5],0);A.pe([
this,this.Bfw],this);},Af$:function(G){var Iz=A.ab0(this.Yz.String,0,10);var Ih=
false;switch(A._GetAutoObject(A.aco.G1).AhF){case 2:Ih=A._GetAutoObject(A.aco.G1
).BCn(Iz);break;case 0:case 1:Ih=A._GetAutoObject(A.aco.G1).Bgv(Iz);break;default:
A.ab5("%s%e",AsX,A._GetAutoObject(A.aco.G1).AhF);}if(Ih){Iz=Iz+1;this.Yz.R(Iz.toFixed(
));}},Bfw:function(G){var AJl=null;var AKx=0;switch(A._GetAutoObject(A.aco.G1).AhF
){case 2:{AJl=A.aaL(A.ach.AvE);AKx=276;}break;case 0:{AJl=A.aaL(A.ach.AjY);AKx=900;
}break;case 1:{AJl=A.aaL(C.AxU);AKx=276;}break;default:A.ab5("%s%e",AsX,A._GetAutoObject(
A.aco.G1).AhF);}this.Yz.R(((AKx*1000000000000)+(A.abY(this.Yz.String,0,10)%1000000000000
)).toFixed());this.YA.Ax(AJl);},Bmo:function(E){var F;if(this.ANG===E)return;this.
ANG=E;if(!!this.AGA)(F=this.AGA,F[2].call(F[0],E));},Bk6:function(){return this.
ANG;},_Init:function(aArg){C.Jq._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akp._Init.call(this.Yz={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.Nb={I:this},0);C.AhG._Init.call(this.AhG={I:this},
0);this.__proto__=C.Acl;var B;this.DT.H(Ax7);this.DT.ArW(120);this.DT.GO=30;this.
DT.ATa(A.jb.Ri);this.DT.A9R(A.jb.CS);this.DT.A9V(A.jb.CS);this.DT.ATb(A.jb.Ri);this.
DT.A9W(A.jb.Text);this.DT.A9S(A.jb.AV);this.DT.A9X(A.jb.Bm);this.DT.A9U(A.jb.AV);
this.DT.A9T(A.jb.Ri);this.Bn.JV(Ax8);this.Bn.DM(O7);this.Yz.H(Ro);this.Yz.R(Ax9);
this.Yz.L(A.jb.Text);this.BU.H(UZ);this.BU.Nm(2);this.BU.L(A.jb.Text);this.Nb.H(
AsY);this.Nb.L(A.jb.Text);this.Nb.A6(0xC);this.Nb.Cv(3);this.J(this.DT,-2);this.
J(this.Yz,-1);this.J(this.BU,0);this.J(this.Nb,0);this.DT.Au([this,this.Bk6,this.
Bmo]);this.DT.A93(this.AhG);this.DT.ArO(A.aaL(A.fl.Bh));this.DT.AwM(A.aaL(A.fl.Bh
));this.Nb.Ax(A.aaL(A.ach.Aju));this.AGA=[B=A._GetAutoObject(A.aco.G1),B.AEK,B.Ar5
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jq;this.DT._Done();this.Yz.
_Done();this.BU._Done();this.Nb._Done();this.AhG._Done();C.Jq._Done.call(this);}
,_ReInit:function(){C.Jq._ReInit.call(this);this.DT._ReInit();this.Yz._ReInit();
this.BU._ReInit();this.Nb._ReInit();this.AhG._ReInit();this.DT.ArO(A.aaL(A.fl.Bh
));this.DT.AwM(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jq._Mark.call(this,D);
if((B=this.AGA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acw={UJ:null,OV:null,A4B:0,Init:function(aArg){var B;A.zX([this,this.BBi],[B=
A._GetAutoObject(A.aco.G1),B.ASS,B.ATE],0);A.zX([this,this.AAK],[B=A._GetAutoObject(
A.Device.Device),B.Arz,B.Ato],0);A.pe([this,this.AAK],this);},Ai:function(Ae){C.
Jq.Ai.call(this,Ae);this.OV.Z(!A._GetAutoObject(A.aco.G1).Axs);},Af$:function(G){
var B;A._GetAutoObject(A.aco.G1).Be8(this);},AAK:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4B){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OV.R(A.abk(A._GetAutoObject(A.aco.G1).WT/100,0,1)
);break;case 1:{var Aut=A._GetAutoObject(A.Device.Converter).AVk(A._GetAutoObject(
A.aco.G1).WT/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OV.R(
A.abk(Aut,0,1));}break;default:A.ab5("%s%e",Ax_,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4B=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BA3:function(G){var B;var Agr=A.abX(this.OV.String,0);Agr=A._GetAutoObject(A.Device.
Converter).AVk(Agr,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agr*=100;
A._GetAutoObject(A.aco.G1).AFR(Math.round(Agr)|0);},BBi:function(G){this.Am();},
_Init:function(aArg){C.Jq._Init.call(this,aArg);A.acr.UJ._Init.call(this.UJ={I:this
},0);C.OV._Init.call(this.OV={I:this},0);this.__proto__=C.Acw;var B;this.UJ.H(Ax$
);this.UJ.A_h(A.aaR(A.acf.A5q));this.OV.H(Aya);this.OV.R(Aoj);this.OV.L(A.jb.Text
);this.OV.Bmp(true);this.A4B=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UJ,0);this.J(this.OV,0);this.YA.Ax(A.aaL(A.ach.Ag7));this.UJ.Au([B=A._GetAutoObject(
A.aco.G1),B.ASS,B.ATE]);this.UJ.OnSetAppearance(A._GetAutoObject(A.acx.Au0));this.
OV.Dj=[this,this.BA3];this.Init(aArg);},_Done:function(){this.__proto__=C.Jq;this.
UJ._Done();this.OV._Done();C.Jq._Done.call(this);},_ReInit:function(){C.Jq._ReInit.
call(this);this.UJ._ReInit();this.OV._ReInit();this.UJ.A_h(A.aaR(A.acf.A5q));},_Mark:
function(D){var B;C.Jq._Mark.call(this,D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Ard={Q:null,BU:null,Bn:null,AgL:null,Am9:null,Am8:null,Ari:null,Text:null,Hp:
null,Ap:null,CX:null,Arh:null,Arj:null,Aph:false,Bl:function(aSize){this.Hp.H(A.
abK(this.Hp.M,aSize));this.BU.Axz(1);this.BU.Ju(0,40);this.BU.Fl(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VO(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(
IB){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Aph=IB;},Af$:function(G){var B;if(!((this.
U&0x80)===0x80))this.Im().AMY(this);},A8o:function(G){},Ba6:function(s){this.A8o(
s);},Bkv:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOV(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOV(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOV(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8m:function(G){},Ba5:function(s){this.A8m(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC],this);}
,IC:function(G){this.Am();},Bl3:function(G){var B;if(((this.U&0x80)===0x80))this.
Im().ACJ(this);},Bfe:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hz._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TI._Init.call(this.AgL={I:this},0);A.Core.BK._Init.call(this.Am9={
I:this},0);A.Core.BK._Init.call(this.Am8={I:this},0);A.Core.BK._Init.call(this.Ari={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hp._Init.call(this.
Hp={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CX={I:this},0);A.Core.BK._Init.call(this.Arh={I:this},0);A.Core.BK._Init.call(this.
Arj={I:this},0);this.__proto__=C.Ard;var B;this.H(AfD);this.Bn.AZ(0x3F);this.Bn.
JV(J3);this.Bn.Kv(Aok);this.Bn.DC(IV);this.Bn.DM(Rn);this.AgL.Fr(530);this.AgL.Uo(
530);this.Am9.Filter=143;this.Am8.Filter=45;this.Ari.Filter=1;this.Text.AZ(0x3F);
this.Text.H(AfD);this.Text.I$(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nm(1);this.Ap.H(Aol);this.CX.H(AsZ);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Arh.Filter=138;this.Arj.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hp,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Lo=[this,this.Af$];this.AgL.Q=[B=this.CX,B.Fq,B.Z];this.Am9.BL=[this
,this.Ba6];this.Am9.D1=[this,this.Ba6];this.Am8.BL=[this,this.Ba5];this.Am8.D1=[
this,this.Ba5];this.Ari.BL=[this,this.Bl3];this.Text.Q7([this,this.Bkv]);this.Text.
S(A.aaL(A.fl.Ak));this.Hp.Zv(this.BU);this.Ap.Ax(null);this.Arh.BL=[this,this.Bfe
];this.Arj.BL=[this,this.Bfe];},_Done:function(){this.__proto__=A.Core.P;this.BU.
_Done();this.Bn._Done();this.AgL._Done();this.Am9._Done();this.Am8._Done();this.
Ari._Done();this.Text._Done();this.Hp._Done();this.Ap._Done();this.CX._Done();this.
Arh._Done();this.Arj._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.BU._ReInit();this.Bn._ReInit();this.AgL._ReInit();this.
Am9._ReInit();this.Am8._ReInit();this.Ari._ReInit();this.Text._ReInit();this.Hp.
_ReInit();this.Ap._ReInit();this.CX._ReInit();this.Arh._ReInit();this.Arj._ReInit(
);this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ari)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Arj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::InputView"
};C.Aes={Background:null,Yp:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yp._Init.call(this.Yp={I:this
},0);this.__proto__=C.Aes;var B;this.H(Xe);this.Background.H(Xe);this.Yp.AZ(0x1D
);this.Yp.H(As0);this.J(this.Background,0);this.J(this.Yp,0);this.Yp.Au([B=A._GetAutoObject(
A.aco.AgO),B.A9d,B.AFM]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yp._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yp._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OV={Init:function(aArg){var B;A.zX([this,this.AAK],[B=A._GetAutoObject(A.Device.
Device),B.Arz,B.Ato],0);A.pe([this,this.AAK],this);},Ai:function(Ae){var B;C.Akp.
Ai.call(this,Ae);var IB=((this.U&0x40)===0x40);if(!IB&&(this.String.length>0))this.
Text.R(((this.String+As1)+A._GetAutoObject(A.acj.Temperature).AlM())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAK:function(G){this.Am();},_Init:function(aArg
){C.Akp._Init.call(this,aArg);this.__proto__=C.OV;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akp={B6:null,Dj:null,IW:null,Cq:null,AmF:null,Sf:null,KM:null,Bn:null,Text:null
,CX:null,Aqx:null,Asf:null,BU:null,Hp:null,Arv:null,Aq2:null,AqK:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,Av1:15,ANO:false,LA:false,Bl:function(aSize){this.Hp.H(A.abK(
this.Hp.M,aSize));this.BU.Axz(1);this.BU.Ju(0,40);this.BU.Fl(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VO(0);},Ai:function(
Ae){var B;A.acn.Jd.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IW.Ar(true);else{
this.IW.Ar(false);this.CX.Z(false);}},A4L:function(G){var B;var Bd=this.Text.M;var
Nz=0;var NA=0;if(this.CX.Et[0]<Bd[0])Nz=Bd[0]-this.CX.Et[0];if(this.CX.Et[0]>Bd[
2])Nz=Bd[2]-this.CX.Et[0];if(this.CX.Et[1]<Bd[1])NA=Bd[1]-this.CX.Et[1];if(this.
CX.ED[1]>Bd[3])NA=Bd[3]-this.CX.ED[1];if(!!Nz||!!NA)this.Text.Gb(A.abf(this.Text.
Br,[Nz,NA]));Nz=this.Text.Br[0];NA=this.Text.Br[1];var C5=[(B=this.Text.Dc())[2]-
B[0],B[3]-B[1]];if(C5[0]<=((B=this.Text.M)[2]-B[0]))Nz=0;if(C5[1]<=((B=this.Text.
M)[3]-B[1]))NA=0;this.Text.Gb([Nz,NA]);},Amn:function(G){if(!this.B6)return;var A4c=
this.Text.AGW(this.D6);var pos=this.Text.Afh(A4c);this.CX.DM(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IW.Bw){this.IW.Ar(false
);this.IW.Ar(true);}if(this.LA){A.pe([this,this.A4L],this);this.LA=false;}},AAG:
function(G){if(!this.A68(0x80))this.Im().AMY(this);var EH=this.Text.AT9(this.Bn.
H0);var Vh=this.Text.AnS(EH);if(Vh!==this.D6){this.D6=Vh;A.pe([this,this.Amn],this
);this.LA=true;}},AAA:function(G){if(!this.B6)return;var EH=this.Text.AGW(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.AC8(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vh=
this.Text.AnS(EH);if(Vh!==this.D6){this.D6=Vh;A.pe([this,this.Amn],this);this.LA=
true;}},BeZ:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LA=true;A.pe(this.Dj,this);},AAB:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LA=true;A.pe(
this.Dj,this);},Be4:function(G){if(this.String.length>=this.Av1)return;var Bzl=this.
KM.DQ;var Aur=String.fromCharCode(Bzl);this.R(A.abU(this.String,Aur,this.D6));this.
D6=this.D6+Aur.length;this.LA=true;A.pe(this.Dj,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LA=true;this.Text.Gb(J3);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hp.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.LA=true;this.Text.Gb(J3);},Bff:function(
G){if(this.ANO===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av1)return;this.R(A.abU(this.String,Ta,this.
D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Dj,this);},BbR:function(s){this.Bff(
s);},Bmp:function(E){if(this.ANO===E)return;this.ANO=E;if(E===false){var BfY=this.
String.indexOf(String.fromCharCode(0x2E),0);if(BfY>=0)this.R(A.abV(this.String,BfY
));}this.LA=true;this.Text.Gb(J3);},Bnv:function(E){if(this.Av1===E)return;this.
Av1=E;this.R(A.abV(this.String,E));this.LA=true;this.Text.Gb(J3);},BA$:function(
G){if(this.A68(0x80)){this.Im().ACJ(this);this.Cr(0x10,0x0);}this.Am();},BAY:function(
G){var Vh=this.String.length;if(Vh!==this.D6){this.D6=Vh;A.pe([this,this.Amn],this
);this.LA=true;}},BA2:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amn],this
);this.LA=true;}},_Init:function(aArg){A.acn.Jd._Init.call(this,aArg);A.acl.TI._Init.
call(this.IW={I:this},0);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.BK._Init.
call(this.AmF={I:this},0);A.Core.BK._Init.call(this.Sf={I:this},0);A.Core.BK._Init.
call(this.KM={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C7._Init.call(this.CX={I:this},0);A.Core.BK._Init.
call(this.Aqx={I:this},0);A.Core.BK._Init.call(this.Asf={I:this},0);A.Graphics.Hz.
_Init.call(this.BU={I:this},0);A.acg.Hp._Init.call(this.Hp={I:this},0);A.Core.BK.
_Init.call(this.Arv={I:this},0);A.Core.BK._Init.call(this.Aq2={I:this},0);A.Core.
BK._Init.call(this.AqK={I:this},0);this.__proto__=C.Akp;var B;this.H(AfD);this.IW.
B2=false;this.IW.Cx=true;this.IW.Fr(500);this.IW.Uo(500);this.Cq.Filter=147;this.
AmF.Filter=45;this.Sf.Filter=44;this.KM.Filter=143;this.Bn.AZ(0x3F);this.Bn.JV(Rn
);this.Bn.Kv(IV);this.Bn.DC(Aok);this.Bn.DM(J3);this.Bn.AFx(3);this.Text.AZ(0x3F
);this.Text.H(AfD);this.Text.KS(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CX.DC(As2);this.CX.DM(Aom);this.CX.A_W(2);this.CX.A_V(2);
this.CX.L(0xFFB3B3B3);this.CX.Z(false);this.Aqx.Filter=138;this.Asf.Filter=137;this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nm(1);this.Arv.Filter=1;this.Aq2.Filter=
41;this.AqK.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.
J(this.Hp,0);this.IW.Q=[B=this.CX,B.Fq,B.Z];this.Cq.BL=[this,this.AAA];this.Cq.D1=[
this,this.AAA];this.AmF.BL=[this,this.BeZ];this.AmF.D1=[this,this.BeZ];this.Sf.BL=[
this,this.AAB];this.Sf.D1=[this,this.AAB];this.KM.BL=[this,this.Be4];this.KM.D1=[
this,this.Be4];this.Bn.BL=[this,this.AAG];this.Text.Q7([this,this.Amn]);this.Text.
S(A.aaL(A.fl.Ak));this.B6=A.aaL(A.fl.Ak);this.Aqx.BL=[this,this.BbR];this.Asf.BL=[
this,this.BbR];this.Hp.Zv(this.BU);this.Arv.BL=[this,this.BA$];this.Aq2.BL=[this
,this.BA2];this.AqK.BL=[this,this.BAY];},_Done:function(){this.__proto__=A.acn.Jd;
this.IW._Done();this.Cq._Done();this.AmF._Done();this.Sf._Done();this.KM._Done();
this.Bn._Done();this.Text._Done();this.CX._Done();this.Aqx._Done();this.Asf._Done(
);this.BU._Done();this.Hp._Done();this.Arv._Done();this.Aq2._Done();this.AqK._Done(
);A.acn.Jd._Done.call(this);},_ReInit:function(){A.acn.Jd._ReInit.call(this);this.
IW._ReInit();this.Cq._ReInit();this.AmF._ReInit();this.Sf._ReInit();this.KM._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CX._ReInit();this.Aqx._ReInit();this.
Asf._ReInit();this.BU._ReInit();this.Hp._ReInit();this.Arv._ReInit();this.Aq2._ReInit(
);this.AqK._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jd._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acv={LabelDataSync:
null,Af$:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Acp),B.BCy],this);},_Init:
function(aArg){C.Jq._Init.call(this,aArg);A.kR.CH._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acv;this.LabelDataSync.H(As3);this.LabelDataSync.R(A.
aaR(A.acf.A52));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YA.Ax(A.aaL(C.AVb));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.A2(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jq;this.LabelDataSync._Done();
C.Jq._Done.call(this);},_ReInit:function(){C.Jq._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A52));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jq._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVb={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abc={TimespanDaysToString:null,Avx:
function(aIndex){if(this.AqV()>aIndex)return this.TimespanDaysToString.BS(aIndex
);A.ab5("%s",Ald);return A.jV;},AqV:function(){return 4;},C6:function(aIndex){var
Ajb=0;switch(aIndex){case 0:Ajb=0;break;case 1:Ajb=1;break;case 2:Ajb=2;break;case
3:Ajb=3;break;default:throw new Error(Ayb+aIndex.toFixed());}return Ajb;},_Init:
function(aArg){A.acq.VP._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abc;},_Done:function(
){this.__proto__=A.acq.VP;this.TimespanDaysToString._Done();A.acq.VP._Done.call(
this);},_ReInit:function(){A.acq.VP._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VP._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGk={GL:0,AVU:1,Hk:2,Year:3};C.ACG={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxU={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZF={Aeh:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1U=Av.Format(It);this.Aeh.R(A1U);},
Af$:function(G){var B;var J9=this.Aeh.String;var O;O=J9.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J9=A.ab1(J9,O,1);O=J9.indexOf(String.fromCharCode(0x2E),O);
}J9=J9+Ayc;J9=J9+A._GetAutoObject(A.acj.VF).AC3(J9).toFixed();var A1U=A._GetAutoObject(
A.Device.AnM).BfN(J9);A._GetAutoObject(A.aco.G1).BCo(((B=(A1U|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jq._Init.call(this,aArg);C.ANL._Init.call(this.Aeh={
I:this},0);this.__proto__=C.ZF;this.Aeh.H(Ro);this.Aeh.L(A.jb.Text);this.Aeh.Bnv(
10);this.J(this.Aeh,-1);this.YA.Ax(A.aaL(A.ach.AvE));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jq;this.Aeh._Done();C.Jq._Done.call(this);},_ReInit:function(
){C.Jq._ReInit.call(this);this.Aeh._ReInit();},_Mark:function(D){var B;C.Jq._Mark.
call(this,D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhF={BGy:0,BGu:1,VF:2,LAST:3};C.AhG={AhH:null,Avx:function(aIndex){if(this.AqV(
)>aIndex)return this.AhH.BS(aIndex);A.ab5("%s",Ald);return A.jV;},AqV:function(){
return 3;},_Init:function(aArg){A.acq.VP._Init.call(this,aArg);C.AhH._Init.call(
this.AhH={I:this},0);this.__proto__=C.AhG;},_Done:function(){this.__proto__=A.acq.
VP;this.AhH._Done();A.acq.VP._Done.call(this);},_ReInit:function(){A.acq.VP._ReInit.
call(this);this.AhH._ReInit();},_Mark:function(D){var B;A.acq.VP._Mark.call(this
,D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhH={BS:function(A9){var Bdg=A9;var AK4=A.jV;switch(Bdg){case 2:AK4=A.aaR(A.
acf.VF);break;case 0:AK4=A.aaR(A.acf.Transponder);break;case 1:AK4=A.aaR(A.acf.BiL
);break;default:throw new Error(Ayd+Bdg.toFixed());}return AK4;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhH;},_className:
"Demonstrator::ScanTypeToString"};C.ANL={Bff:function(G){var BfZ=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){BfZ++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(BfZ>=2)return;if(this.String.length>=this.Av1)return;
this.R(A.abU(this.String,Ta,this.D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Dj
,this);},_Init:function(aArg){C.Akp._Init.call(this,aArg);this.__proto__=C.ANL;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVO.__proto__=A.acn.Menu;C.AUJ.__proto__=A.Core.P;C.AMx.__proto__=
C.Ba;C.Mk.__proto__=A.Core.P;C.Yp.__proto__=C.Ard;C.Abd.__proto__=A.Core.P;C.AvH.
__proto__=A.acn.AhA;C.AML.__proto__=C.FE;C.AuE.__proto__=C.FE;C.Ba.__proto__=A.Core.
P;C.FE.__proto__=A.Core.P;C.ANM.__proto__=A.acn.Ahy;C.AhK.__proto__=A.Core.P;C.AME.
__proto__=C.AhK;C.Vw.__proto__=C.AuE;C.AL9.__proto__=A.Core.P;C.Jq.__proto__=A.Core.
P;C.Acl.__proto__=C.Jq;C.Acw.__proto__=C.Jq;C.Ard.__proto__=A.Core.P;C.Aes.__proto__=
A.Core.P;C.OV.__proto__=C.Akp;C.Akp.__proto__=A.acn.Jd;C.Acv.__proto__=C.Jq;C.Abc.
__proto__=A.acq.VP;C.ZF.__proto__=C.Jq;C.AhG.__proto__=A.acq.VP;C.AhH.__proto__=
A.Device.EnumToString;C.ANL.__proto__=C.Akp;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM8[0]._this)&&(B._cycle!=D))B._Done(C.AM8[0]._this=null);if((B=C.
AM9[0]._this)&&(B._cycle!=D))B._Done(C.AM9[0]._this=null);if((B=C.AM_[0]._this)&&(
B._cycle!=D))B._Done(C.AM_[0]._this=null);if((B=C.AM$[0]._this)&&(B._cycle!=D))B.
_Done(C.AM$[0]._this=null);if((B=C.AQc[0]._this)&&(B._cycle!=D))B._Done(C.AQc[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARX[0]._this)&&(B._cycle!=D))B._Done(C.ARX[0]._this=null);if((B=C.Ajt[
0]._this)&&(B._cycle!=D))B._Done(C.Ajt[0]._this=null);if((B=C.AMO[0]._this)&&(B.
_cycle!=D))B._Done(C.AMO[0]._this=null);if((B=C.Asv[0]._this)&&(B._cycle!=D))B._Done(
C.Asv[0]._this=null);if((B=C.AVg[0]._this)&&(B._cycle!=D))B._Done(C.AVg[0]._this=
null);if((B=C.AHp[0]._this)&&(B._cycle!=D))B._Done(C.AHp[0]._this=null);if((B=C.
AV5[0]._this)&&(B._cycle!=D))B._Done(C.AV5[0]._this=null);if((B=C.AVb[0]._this)&&(
B._cycle!=D))B._Done(C.AVb[0]._this=null);if((B=C.ACG[0]._this)&&(B._cycle!=D))B.
_Done(C.ACG[0]._this=null);if((B=C.AxU[0]._this)&&(B._cycle!=D))B._Done(C.AxU[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */