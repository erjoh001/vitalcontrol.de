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
var Ce=[0,0,370,60];var BD=[360,0,370,60];var E7=[0,0,370,710];var Hr="Unknown animalType";
var IU=[58,10,120,50];var Is=[0,0,60,60];var O4=[120,0,360,60];var P_="\u2015";var
P$=[0,0,240,60];var CQ=[0,0,40,60];var Ff=[100,0,130,60];var L3=[43,0,100,60];var
Qa=[125,0,240,60];var J3=[0,0];var Ob=[100,0];var Qb=[100,60];var MJ=[0,60];var S$=[
107,0];var UT=[240,0];var Z5=[240,60];var W7=[107,60];var It="%d.%m.%Y";var UU="Unhandled date unit: ";
var Z6=[0,0,200,180];var W8=[36,0,200,30];var Z7=[0,30,160,60];var W9="Text";var
Z8=[0,70,40,110];var Z9=[44,70,156,110];var UV=[160,70,200,110];var W_=[7,2,27,25
];var O5=[0,30,170,180];var Z_=[170,34,190,57];var O6=[0,0,40,40];var Rn=[0,40];
var W$=[40,40];var Xa=[40,0];var UW=[0,0,370,100];var Z$=[20,0,290,60];var Aaa=[
0,60,370,100];var Xb="Cap";var Xc=[20,0,370,60];var Ta=[310,0,370,60];var UX=[370
,0];var UY=[370,60];var AcM="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Tb=".";var Aab=[0,0,170
,150];var AfB=[0,59,170,90];var Aac=[110,0,170,150];var Xd=[0,30];var Aad=[50,0,
100,150];var Xe=[0,0,40,150];var AhX=[0,0,370,240];var KZ=[0,60,370,710];var AcN=[
0,0,370,300];var Lw=[0,60,370,300];var AhY=[0,60,370,120];var Aoe=[0,120,370,180
];var Oc=[0,180,370,240];var Xf=[0,240,370,300];var Aae=[370,120];var AfC=[0,120
];var AhZ=[370,180];var AcO=[0,180];var UZ=[370,240];var Aof=[0,240];var Aog=[370
,300];var Aoh=[0,300];var Aoi=[0,0,50,60];var Alc=[50,0,100,60];var AsX="Unhandled scan type";
var Ax7=[3,11,253,51];var Ax8=[50,0];var O7=[50,60];var Ro=[100,10,370,50];var Ax9=
"276000901234567";var U0=[3,10,57,50];var AsY=[3,11,55,50];var Ax_="Unhandled temperature unit";
var Ax$=[110,0,260,60];var Aya=[235,10,370,50];var Aoj="39.5";var AfD=[0,0,270,40
];var Aok=[270,0];var IV=[270,40];var Aol=[150,0,170,40];var AsZ=[205,10,207,30];
var Xg=[0,0,370,40];var As0=[50,0,320,40];var As1=" ";var As2=[135,23];var Aom=[
135,0];var As3=[100,0,370,60];var Ald="Error: Nullpointer Exception";var Ayb="Unknown Date Piecker Unit Index: ";
var Ayc="0";var Ayd="Unhandled scan type:";
C.Background={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorBackground.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[1000,740],FrameDelay:0,_this:
null}};C.AM7={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeft.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM8={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonLeftPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM9={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AM_={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorButtonRightPressed.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AQb={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorIconDatePicker.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,23],FrameDelay:0,_this:
null}};C.Filter={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorFilter.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[15,16],FrameDelay:0,_this:
null}};C.ARW={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorMenuIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[20,16],FrameDelay:0,_this:
null}};C.Ajt={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowRight.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.AMN={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorArrowDown.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,16],FrameDelay:0,_this:
null}};C.Asv={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorScanIcon.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:
null}};C.AVf={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorTemperatureIcon.png"
,Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[17,37],FrameDelay:0,_this:
null}};C.AVN={Aee:null,AX:null,AR:null,Background:null,H_:null,AD:null,IR:null,Dn:
null,Lj:null,A7T:null,A8i:0,Bl:function(aSize){A.acn.Menu.Bl.call(this,aSize);this.
IR.H(A.abP(this.IR.M,this.AD.OS));this.IR.H([].concat(this.IR.M.slice(0,3),aSize[
1]));},Ai:function(Ae){var B;A.acn.Menu.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40
);if(IB&&(this.AD.Gt<0))this.AD.GT(0);},N2:function(E){if(this.Lj===E)return;this.
Lj=E;this.AD.N2(E);},Bnw:function(E){var B;if(this.A7T===E)return;if(!!this.Aee){
this.HP(this.Aee);this.Aee=null;}if(!!E){this.Aee=(C.FE.isPrototypeOf(B=A._NewObject(
E,0))?B:null);this.Aee.A_n([this,this.Akt]);this.Aee.A_o([this,this.Aku]);this.Aee.
BnC(null);this.J(this.Aee,0);this.AD.A_u((B=this.Aee.M)[3]-B[1]);}else this.AD.A_u(
0);this.IR.H(A.abP(this.IR.M,this.AD.OS));A.pe([this,this.Fk],this);this.A7T=E;}
,Hm:function(G){var B;var Gg=this.AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zs(this.AX);Aa.Ch(Gg);Aa.Zw(this.AR);Aa.H(A.abK(Aa.M,[(
B=this.AD.M)[2]-B[0],this.AD.GO]));},Zs:function(E){var B;if(this.AX===E)return;
if(!!this.AX){A.z9([this,this.Ch],this.AX,0);A.z$([this,this.An9],[B=this.AX,B.Fp
,B.Ft],0);}this.AX=E;if(!!E){A.zV([this,this.Ch],E,0);A.zX([this,this.An9],[E,E.
Fp,E.Ft],0);}A.pe([this,this.Ch],this);A.pe([this,this.An9],this);},Ch:function(
G){if(!!this.AX){this.AD.Jy(this.AX.B9());this.AD.AbE(0,this.AD.AY-1);}else this.
AD.Jy(0);if(this.A8i!==this.AD.AY){this.AD.ABK(null,null);this.A8i=this.AD.AY;}A.
pe([this,this.Fk],this);},Aku:function(G){var B;this.H(A.abI(this.M,(B=this.AD.AOT(
))[3]-B[1]));},Akt:function(G){this.H(A.abI(this.M,180));},A9E:function(G){var JC=(
A.Core.BK.isPrototypeOf(G)?G:null);var Gg=this.AD.Gt;if(JC.CO===4)Gg=Gg-1;else if(
JC.CO===5)Gg=Gg+1;else if((JC.DQ>=0x30)&&(JC.DQ<=0x39))A._GetAutoObject(A.aco.AgO
).Ez(JC.DQ);else if(JC.CO===45)A._GetAutoObject(A.aco.AgO).Delete();else JC.NL=true;
if((Gg<0)||(Gg>=this.AD.AY))return;this.AD.GT(Gg);this.Bzu(Gg,true);},Bzj:function(
G){var Aa=(C.Ba.isPrototypeOf(G)?G:null);this.AD.GT(Aa.Hs);},Bzu:function(Ha,Ac3
){var B;if((Ha<0)||(Ha>=this.AD.AY))return;var Az=this.AD.AqT(Ha,Ha);var Bd=this.
AD.M;Bd=A.abP(Bd,(B=this.AD.AOT())[3]-B[1]);Bd=A.abI(Bd,(((B=this.AD.M)[3]-B[1])-((
B=this.AD.AOT())[3]-B[1]))-((B=this.AD.Bjr())[3]-B[1]));var LN=A.lb(Az,Bd);if((!
Ac3&&!((LN[0]>=LN[2])||(LN[1]>=LN[3])))||(Ac3&&A.aaY(LN,Az)))return;var Bq=0;if(
Az[3]>Bd[3])Bq=Az[3]-Bd[3];if(Bq>(Az[1]-Bd[1]))Bq=(Az[3]-Bd[1])-this.AD.GO;this.
AD.Gb(this.AD.Br-Bq);},An9:function(G){this.AD.GT(-1);},Fk:function(G){var B;this.
IR.My(this.AD.GO*this.AD.AY);this.IR.MB(((B=this.AD.M)[3]-B[1])-this.AD.OS);this.
IR.Mz(-this.AD.Br);},_Init:function(aArg){A.acn.Menu._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);A.Core.H_._Init.call(this.H_={I:this},
0);A.Core.CM._Init.call(this.AD={I:this},0);A.kR.Ay._Init.call(this.IR={I:this},
0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.AVN;this.H(Ce);this.
Background.A0(0x3);this.Background.H(Ce);this.H_.A0(0x3F);this.H_.H(Ce);this.AD.
A0(0x3F);this.AD.H(Ce);this.AD.Ae8(60);this.AD.Jy(0);this.AD.N2(this.Lj);this.IR.
A0(0x3A);this.IR.H(BD);this.IR.L(0xFF808080);this.J(this.Background,0);this.J(this.
H_,0);this.J(this.AD,0);this.J(this.IR,0);this.AD.Em=[this,this.Fk];this.AD.Hm=[
this,this.Hm];this.AD.Aw8(this.H_);this.AR=[this,this.Bzj];this.Dn.BL=[this,this.
A9E];this.Dn.D1=[this,this.A9E];},_Done:function(){this.__proto__=A.acn.Menu;this.
Background._Done();this.H_._Done();this.AD._Done();this.IR._Done();this.Dn._Done(
);A.acn.Menu._Done.call(this);},_ReInit:function(){A.acn.Menu._ReInit.call(this);
this.Background._ReInit();this.H_._ReInit();this.AD._ReInit();this.IR._ReInit();
this.Dn._ReInit();},_Mark:function(D){var B;A.acn.Menu._Mark.call(this,D);if((B=
this.Aee)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::VerticalMenu"
};C.AUI={GK:null,AL:null,BU:null,Init:function(aArg){var B;A.zX([this,this.GH],[
B=A._GetAutoObject(A.aco.G1),B.A9h,B.A_F],0);A.pe([this,this.GH],this);},Ab2:function(
E){if(this.GK===E)return;if(!!this.GK)this.HP(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.AhE(E,this.BU);this.Am();},GH:function(G){var B;if(
!!A._GetAutoObject(A.aco.G1).Asy)this.Ab2((C.AhK.isPrototypeOf(B=A._NewObject(A.
_GetAutoObject(A.aco.G1).Asy,0))?B:null));else this.Ab2(null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.BU.
_Init.call(this.BU={I:this},0);this.__proto__=C.AUI;this.H(E7);this.AL.A0(0x3F);
this.AL.H(E7);this.BU.H(E7);this.BU.L(0xFF000000);this.J(this.AL,0);this.J(this.
BU,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.AL._Done();
this.BU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.AL._ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Demonstrator::SelectionArea"};C.AMw={ABp:0,Ke:0,Background:null,V:null
,Ajo:null,AdX:null,XR:null,AdY:null,Mk:null,Mh:0,LI:false,KH:false,CP:function(){
this.Am();},Ai:function(Ae){var B;C.Ba.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var Fw=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);if(!Hf){this.Background.L(
0xFFAAAAAA);this.V.L(0xFF888888);this.Mk.Ar(false);this.Mk.Z(false);}else if(IB){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);this.Mk.Ar(true);this.Mk.Z(true);}else
if(Fw){this.Background.L(0xFFE6DED8);this.V.L(0xFF000000);this.Mk.Ar(true);this.
Mk.Z(true);}else{this.Background.L(0xFFFFFFFF);this.V.L(0xFF000000);this.Mk.Ar(false
);this.Mk.Z(false);}if(!this.KH&&Fw)A._GetAutoObject(A.aco.G1).A_C(this.ABp);this.
Mk.Bny(this.Ke>0);this.Mk.Bn1(this.ABp>0);this.V.R(this.Mh.toFixed());this.LI=Hf;
this.KH=Fw;},Ch:function(Ad){if(!this.AX){this.XR.Ax(A.aaL(A.ach.Aez));this.AdX.
L(A.jb.Afu);return;}this.Hs=Ad;if(!!this.AX){this.Ke=this.AX.KP(Ad,26);this.ABp=
this.AX.KP(Ad,22);this.Mh=this.AX.CF(Ad,1);var AlQ=this.AX.H3(Ad,11);var AlH=this.
AX.I6(Ad,17);var LQ=this.AX.I6(Ad,13);var Ic=this.AX.AmW(Ad,14);var Xr=A._GetAutoObject(
A.Device.Helper).AMl(LQ,AlQ,AlH);switch(Ic){case 0:this.XR.Ax(A.aaL(A.ach.Aez));
break;case 1:this.XR.Ax(A.aaL(A.ach.AvJ));break;case 2:this.XR.Ax(A.aaL(A.ach.AvM
));break;default:A.ab5("%s%e",Hr,Ic);}this.AdY.Ax(this.XR.Al);this.AdX.L(A._GetAutoObject(
A.acj.Assessment).Qr(Xr));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.kR.CG._Init.call(this.V={
I:this},0);A.acg.Ap._Init.call(this.Ajo={I:this},0);A.acg.Ap._Init.call(this.AdX={
I:this},0);A.acg.Ap._Init.call(this.XR={I:this},0);A.acg.Ap._Init.call(this.AdY={
I:this},0);C.Mk._Init.call(this.Mk={I:this},0);this.__proto__=C.AMw;this.Background.
A0(0x3F);this.Background.H(Ce);this.V.A0(0x3F);this.V.H(IU);this.V.R(A.aaR(A.acf.
GN));this.V.A6(0x11);this.V.L(0xFF000000);this.Ajo.H(Is);this.Ajo.L(A.jb.Text);this.
AdX.H(Is);this.AdX.L(A.jb.E1);this.XR.H(Is);this.AdY.H(Is);this.AdY.L(A.jb.Text);
this.AdY.Cv(1);this.Mk.A0(0x3);this.Mk.H(O4);this.J(this.Background,0);this.J(this.
V,0);this.J(this.Ajo,0);this.J(this.AdX,0);this.J(this.XR,0);this.J(this.AdY,0);
this.J(this.Mk,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.
aaL(A.fl.Bh));this.Ajo.Ax(A.aaL(C.AHp));this.AdX.Ax(A.aaL(C.AV4));this.XR.Ax(A.aaL(
A.ach.Aez));this.AdY.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=C.Ba;
this.Background._Done();this.V._Done();this.Ajo._Done();this.AdX._Done();this.XR.
_Done();this.AdY._Done();this.Mk._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Background._ReInit();this.V._ReInit();this.Ajo._ReInit(
);this.AdX._ReInit();this.XR._ReInit();this.AdY._ReInit();this.Mk._ReInit();this.
V.R(A.aaR(A.acf.GN));this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(
A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ajo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Demonstrator::AnimalMenuItem"};C.Mk={Uz:null,WN:null,Ak0:null,Nq:null
,N_:null,ZI:null,Acx:null,Av6:false,AxT:false,CP:function(){this.Am();},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Nq.L(A.
jb.Bm);this.N_.L(A.jb.Bm);}else{this.Nq.L(A.jb.Text);this.N_.L(A.jb.Text);}if(this.
AxT){this.Nq.R(A.aaR(A.acf.Bo2));if(this.Av6){this.Uz.Ax(A.aaL(C.AxU));this.WN.Ax(
A.aaL(C.AxU));}else{this.Uz.Ax(A.aaL(C.Asv));this.WN.Ax(A.aaL(C.Asv));}}else if(
this.Av6){this.Uz.Ax(A.aaL(C.ACG));this.WN.Ax(A.aaL(C.ACG));this.Nq.R(P_);}var A4h=
this.AxT||this.Av6;this.Uz.Z(A4h);this.WN.Z(A4h);this.Nq.Z(A4h);this.ZI.Ar(this.
AxT);},Bn1:function(E){if(this.AxT===E)return;this.AxT=E;this.Am();},Bny:function(
E){if(this.Av6===E)return;this.Av6=E;this.Am();},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Uz={I:this},0);A.acg.Ap._Init.call(this.
WN={I:this},0);A.acg.Ap._Init.call(this.Ak0={I:this},0);A.kR.CG._Init.call(this.
Nq={I:this},0);A.kR.CG._Init.call(this.N_={I:this},0);A.Core.Bn._Init.call(this.
ZI={I:this},0);A.Core.Bn._Init.call(this.Acx={I:this},0);this.__proto__=C.Mk;var
B;this.H(P$);this.Uz.A0(0x6);this.Uz.H(CQ);this.Uz.L(A.jb.CS);this.Uz.Cv(1);this.
WN.A0(0x6);this.WN.H(CQ);this.WN.L(A.jb.Text);this.Ak0.A0(0xE);this.Ak0.H(Ff);this.
Nq.A0(0x7);this.Nq.H(L3);this.Nq.A6(0x11);this.Nq.L(0xFF000000);this.N_.A0(0x3);
this.N_.H(Qa);this.N_.R(A.aaR(A.acf.Temperature));this.N_.A6(0x11);this.N_.L(0xFF000000
);this.ZI.A0(0x3);this.ZI.JV(J3);this.ZI.Kw(Ob);this.ZI.DC(Qb);this.ZI.DM(MJ);this.
Acx.A0(0x3);this.Acx.JV(S$);this.Acx.Kw(UT);this.Acx.DC(Z5);this.Acx.DM(W7);this.
J(this.Uz,0);this.J(this.WN,0);this.J(this.Ak0,0);this.J(this.Nq,0);this.J(this.
N_,0);this.J(this.ZI,0);this.J(this.Acx,0);this.Uz.Ax(A.aaL(C.Asv));this.WN.Ax(A.
aaL(C.Asv));this.Ak0.Ax(A.aaL(C.AVf));this.Nq.S(A.aaL(A.fl.Af));this.Nq.AZ(A.aaL(
A.fl.Ak));this.Nq.Cr(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Af));this.N_.AZ(A.aaL(
A.fl.Ak));this.N_.Cr(A.aaL(A.fl.Bh));this.ZI.Lo=[B=A._GetAutoObject(A.aco.G1),B.
Bfm];this.Acx.Lo=[B=A._GetAutoObject(A.aco.G1),B.Be9];},_Done:function(){this.__proto__=
A.Core.P;this.Uz._Done();this.WN._Done();this.Ak0._Done();this.Nq._Done();this.N_.
_Done();this.ZI._Done();this.Acx._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Uz._ReInit();this.WN._ReInit();this.Ak0._ReInit(
);this.Nq._ReInit();this.N_._ReInit();this.ZI._ReInit();this.Acx._ReInit();this.
N_.R(A.aaR(A.acf.Temperature));this.Nq.S(A.aaL(A.fl.Af));this.Nq.AZ(A.aaL(A.fl.Ak
));this.Nq.Cr(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Af));this.N_.AZ(A.aaL(A.fl.Ak
));this.N_.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Demonstrator::AnimalItemAction"};C.Yr={CP:function(){this.Am();
},Ai:function(Ae){C.Ard.Ai.call(this,Ae);if(!this.Text.String.length)this.Text.R(
A.aaR(A.acf.Filter));},A8p:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null
);if(!!D5)A._GetAutoObject(A.aco.AgO).Ez(D5.DQ);},A8n:function(G){A._GetAutoObject(
A.aco.AgO).Delete();},_Init:function(aArg){C.Ard._Init.call(this,aArg);this.__proto__=
C.Yr;this.Ap.Ax(A.aaL(C.Filter));},_ReInit:function(){C.Ard._ReInit.call(this);this.
CP();},_className:"Demonstrator::FilterView"};C.Abe={Dl:null,Yk:null,Se:null,Yl:
null,DT:null,YF:null,AmI:null,Av:null,Pc:null,M8:null,Abd:null,FY:0,AvR:0,AGd:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Se.R(this.Av.Format(It));if(this.
AGd){this.Se.Z(false);this.YF.Z(false);this.DT.Z(false);this.Yl.Z(false);this.Pc.
Ar(true);this.Pc.Z(true);this.M8.Cv(2);this.M8.ATx(2);this.M8.H(A.abM(this.M8.M,
this.Pc.M[2]));}else{this.Se.Z(true);this.YF.Z(true);this.DT.Z(true);this.Yl.Z(true
);this.Pc.Ar(false);this.Pc.Z(false);this.M8.Cv(3);this.M8.ATx(3);this.M8.H(A.abM(
this.M8.M,this.Se.M[2]));}},BBc:function(G){this.BnF(!this.AGd);},AdA:function(G
){var F;if(!!this.Dl)this.Un((F=this.Dl,F[1].call(F[0])));},Ab6:function(E){if(A.
aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.AdA],this.Dl,0);this.Dl=E;if(
!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);},Un:function(E){
if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.BCg(this);this.
Am();},AiH:function(G){var B;var F;var BO=this.FY;var Ajb=this.Abd.C6(this.AvR);
this.AJo(Ajb);if(this.Av.Year>2100)this.Av.Initialize2(2100,12,31,0,0,0);this.Un(((
B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},Ait:function(G){var B;var F;var BO=
this.FY;var Ajb=this.Abd.C6(this.AvR);this.ALb(Ajb);if(this.Av.Year<2000)this.Av.
Initialize2(2000,1,1,0,0,0);this.Un(((B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(
this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);
}},Bnb:function(E){if(this.AvR===E)return;this.AvR=E;},BnF:function(E){if(this.AGd===
E)return;this.AGd=E;this.Am();},BBO:function(G){var B;var F;var BO=this.FY;this.
Av.Lq(this.Pc.AED());this.Av.Us(this.Pc.AEI());this.Av.Year=this.Pc.ArC();this.Un(((
B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl
,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},BCg:function(G){this.Pc.Lq(this.Av.
GL);this.Pc.Us(this.Av.Hk);this.Pc.AkH(this.Av.Year);},AJo:function(Ay5){var B;switch(
Ay5){case 0:if(this.Av.GL<this.Av.Zo())this.Av.Lq(this.Av.GL+1);else{this.Av.Lq(
1);this.AJo(2);}break;case 1:if((this.Av.GL+7)<=this.Av.Zo())this.Av.Lq(this.Av.
GL+7);else{this.Av.Lq((7-this.Av.Zo())+this.Av.GL);this.AJo(2);}break;case 2:if(
this.Av.Hk<12)this.Av.Us(this.Av.Hk+1);else{this.Av.Us(1);this.AJo(3);}break;case
3:this.Av.Year++;break;default:throw new Error(UU+Ay5.toFixed());}},ALb:function(
Ay5){var B;switch(Ay5){case 0:if(this.Av.GL>1)this.Av.Lq(this.Av.GL-1);else{this.
ALb(2);this.Av.Lq(this.Av.Zo());}break;case 1:if((this.Av.GL-7)>0)this.Av.Lq(this.
Av.GL-7);else{this.ALb(2);this.Av.Lq(this.Av.Zo()-(7-this.Av.GL));}break;case 2:
if(this.Av.Hk>1)this.Av.Us(this.Av.Hk-1);else{this.Av.Us(12);this.ALb(3);}break;
case 3:this.Av.Year--;break;default:throw new Error(UU+Ay5.toFixed());}},Bli:function(
){return this.AvR;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yk={I:this},0);A.acg.Text._Init.call(this.Se={I:this},0);C.AvH._Init.
call(this.Yl={I:this},0);A.acq.DT._Init.call(this.DT={I:this},0);C.AvH._Init.call(
this.YF={I:this},0);A.acg.Ap._Init.call(this.AmI={I:this},0);A.Core.Bs._Init.call(
this.Av={I:this},0);C.ANL._Init.call(this.Pc={I:this},0);C.AvH._Init.call(this.M8={
I:this},0);C.Abd._Init.call(this.Abd={I:this},0);this.__proto__=C.Abe;this.H(Z6);
this.Yk.H(W8);this.Yk.A6(0x11);this.Yk.R(A.aaR(A.acf.Date));this.Yk.L(0xFF000000
);this.Se.H(Z7);this.Se.A6(0x11);this.Se.R(W9);this.Se.L(0xFF000000);this.Yl.H(Z8
);this.Yl.A_e(200);this.DT.H(Z9);this.DT.ArW(120);this.DT.GO=30;this.DT.AS$(A.jb.
CS);this.DT.A9S(A.jb.CS);this.DT.A9W(A.jb.CS);this.DT.ATa(A.jb.Text);this.DT.A9X(
A.jb.Text);this.DT.A9T(A.jb.AV);this.DT.A9Y(A.jb.Bm);this.DT.A9V(A.jb.AV);this.DT.
A9U(A.jb.Text);this.YF.H(UV);this.YF.A_e(200);this.AmI.H(W_);this.Pc.H(O5);this.
M8.H(Z_);this.M8.Cv(3);this.M8.ATx(3);this.M8.L(A.jb.Text);this.J(this.Yk,0);this.
J(this.Se,0);this.J(this.Yl,0);this.J(this.DT,0);this.J(this.YF,0);this.J(this.AmI
,0);this.J(this.Pc,0);this.J(this.M8,0);this.Yk.S(A.aaL(A.fl.Ak));this.Se.S(A.aaL(
A.fl.EK));this.Yl.AR=[this,this.Ait];this.Yl.DB(A.aaL(C.AM7));this.Yl.ATy(A.aaL(
C.AM8));this.DT.Au([this,this.Bli,this.Bnb]);this.DT.A94(this.Abd);this.DT.ArO(A.
aaL(A.fl.Ak));this.DT.AwM(A.aaL(A.fl.Ak));this.YF.AR=[this,this.AiH];this.YF.DB(
A.aaL(C.AM9));this.YF.ATy(A.aaL(C.AM_));this.AmI.Ax(A.aaL(C.AQb));this.Pc.Dj=[this
,this.BBO];this.M8.AR=[this,this.BBc];this.M8.DB(A.aaL(A.ach.Aju));this.M8.ATy(A.
aaL(A.ach.Aju));},_Done:function(){this.__proto__=A.Core.P;this.Yk._Done();this.
Se._Done();this.Yl._Done();this.DT._Done();this.YF._Done();this.AmI._Done();this.
Av._Done();this.Pc._Done();this.M8._Done();this.Abd._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Yk._ReInit();this.Se.
_ReInit();this.Yl._ReInit();this.DT._ReInit();this.YF._ReInit();this.AmI._ReInit(
);this.Av._ReInit();this.Pc._ReInit();this.M8._ReInit();this.Abd._ReInit();this.
Yk.R(A.aaR(A.acf.Date));this.Yk.S(A.aaL(A.fl.Ak));this.Se.S(A.aaL(A.fl.EK));this.
DT.ArO(A.aaL(A.fl.Ak));this.DT.AwM(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Dl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DateSelector"
};C.AvH={C9:null,Axr:null,AN1:null,AR:null,Bo:null,Dn:null,CR:null,Hw:null,Yy:null
,APM:0,TT:0,AUc:0,AQ:0xFFFFFFFF,A2t:false,LI:false,KH:false,Qv:false,Ai:function(
Ae){var B;A.acn.AhA.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===
0x20);var GE=this.CR.Down&&this.CR.YI;if(!Hf)this.Hw.Ax(this.AN1);else if(GE){this.
Hw.Ax(this.Axr);this.Hw.Cv(this.AUc);}else{this.Hw.Ax(this.C9);this.Hw.Cv(this.TT
);}this.Hw.L(this.AQ);this.LI=Hf;this.KH=Fw;this.Qv=GE;},Qu:function(G){this.Am(
);A.pe(this.AR,this);},AiR:function(G){if(this.CR.Down)return;if(this.Dn.Ach)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Be6:function(G){this.Am();},AAH:function(G){if(!this.CR.YI)return;if(this.CR.NJ
)return;if((this.Yy.VH<=0)||(this.CR.Jt<this.Yy.VH)){if(this.CR.Jt>=this.Bo.VH)A.
pe(this.AR,this);else this.Bo.Ar(true);}this.Yy.Ar(false);},AAG:function(G){this.
Yy.Ar(true);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}},DB:function(E
){if(this.C9===E)return;this.C9=E;this.Am();},ATy:function(E){if(this.Axr===E)return;
this.Axr=E;this.Am();},A3t:function(G){if(!this.CR.YI)return;if(this.CR.NJ)return;
if((this.APM>=0)&&this.A2t){this.A2t=false;this.Yy.Ar(true);A.pe(this.AR,this);}
},A_e:function(E){if(this.APM===E)return;this.APM=E;this.Yy.WF(E);},BAG:function(
G){this.A2t=true;},Cv:function(E){if(this.TT===E)return;this.TT=E;this.Am();},ATx:
function(E){if(this.AUc===E)return;this.AUc=E;this.Am();},L:function(E){if(this.
AQ===E)return;this.AQ=E;this.Am();},_Init:function(aArg){A.acn.AhA._Init.call(this
,aArg);A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={
I:this},0);A.Core.Bn._Init.call(this.CR={I:this},0);A.acg.Ap._Init.call(this.Hw={
I:this},0);A.Core.Timer._Init.call(this.Yy={I:this},0);this.__proto__=C.AvH;this.
H(O6);this.Bo.PV(0);this.Bo.WF(50);this.Dn.Filter=149;this.CR.A0(0x3F);this.CR.JV(
Rn);this.CR.Kw(W$);this.CR.DC(Xa);this.CR.DM(J3);this.CR.Afg=0xF;this.CR.AFx(100
);this.Hw.A0(0x3F);this.Hw.H(O6);this.Hw.A6(0x12);this.Yy.PV(0);this.J(this.CR,0
);this.J(this.Hw,0);this.Bo.MC=[this,this.Qu];this.Dn.BL=[this,this.AiR];this.CR.
AEO=[this,this.Be6];this.CR.Av$=[this,this.Be6];this.CR.D1=[this,this.A3t];this.
CR.Lo=[this,this.AAH];this.CR.BL=[this,this.AAG];this.Hw.Ax(A.aaL(A.aci.TO));this.
C9=A.aaL(A.aci.TO);this.Axr=A.aaL(A.aci.TO);this.AN1=A.aaL(A.aci.TO);this.Yy.MC=[
this,this.BAG];},_Done:function(){this.__proto__=A.acn.AhA;this.Bo._Done();this.
Dn._Done();this.CR._Done();this.Hw._Done();this.Yy._Done();A.acn.AhA._Done.call(
this);},_ReInit:function(){A.acn.AhA._ReInit.call(this);this.Bo._ReInit();this.Dn.
_ReInit();this.CR._ReInit();this.Hw._ReInit();this.Yy._ReInit();},_Mark:function(
D){var B;A.acn.AhA._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Axr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Bo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::IconButton"};C.AMK={PA:null,V:null,Aes:null,_Init:function(aArg){
C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={I:this},0);A.acg.Text._Init.
call(this.V={I:this},0);C.Aes._Init.call(this.Aes={I:this},0);this.__proto__=C.AMK;
this.H(UW);this.PA.A0(0x1D);this.PA.H(Ce);this.PA.L(0xFFE6E6E6);this.V.A0(0x1D);
this.V.H(Z$);this.V.A6(0x11);this.V.R(A.aaR(A.acf.A5j));this.V.L(0xFF000000);this.
Aes.H(Aaa);this.J(this.PA,0);this.J(this.V,0);this.J(this.Aes,0);this.V.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();
this.Aes._Done();C.FE._Done.call(this);},_ReInit:function(){C.FE._ReInit.call(this
);this.PA._ReInit();this.V._ReInit();this.Aes._ReInit();this.V.R(A.aaR(A.acf.A5j
));this.V.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FE._Mark.call(this,D);if((
B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalsHeader"
};C.AuE={PA:null,V:null,AeT:null,AeR:null,Bn:null,DK:Xb,Aho:false,Ai:function(Ae
){C.FE.Ai.call(this,Ae);if(this.Aho){this.AeR.Z(true);this.AeT.Z(false);}else{this.
AeR.Z(false);this.AeT.Z(true);}},BBA:function(G){if(this.Aho)A.pe(this.Akt,this);
else A.pe(this.Aku,this);this.ArX(!this.Aho);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},ArX:function(E){if(this.Aho===E)return;this.Aho=E;this.Am(
);},_Init:function(aArg){C.FE._Init.call(this,aArg);A.acg.AL._Init.call(this.PA={
I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.Ap._Init.call(this.AeT={
I:this},0);A.acg.Ap._Init.call(this.AeR={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);this.__proto__=C.AuE;this.H(Ce);this.PA.A0(0x1D);this.PA.H(Ce);this.PA.
L(0xFFE6E6E6);this.V.A0(0x1D);this.V.H(Xc);this.V.A6(0x11);this.V.R(Xb);this.V.L(
0xFF000000);this.AeT.H(Ta);this.AeT.Z(false);this.AeR.A0(0x3A);this.AeR.H(Ta);this.
Bn.JV(J3);this.Bn.Kw(UX);this.Bn.DC(UY);this.Bn.DM(MJ);this.J(this.PA,0);this.J(
this.V,0);this.J(this.AeT,0);this.J(this.AeR,0);this.J(this.Bn,0);this.V.S(A.aaL(
A.fl.Af));this.AeT.Ax(A.aaL(C.AMN));this.AeR.Ax(A.aaL(C.Ajt));this.Bn.Lo=[this,this.
BBA];},_Done:function(){this.__proto__=C.FE;this.PA._Done();this.V._Done();this.
AeT._Done();this.AeR._Done();this.Bn._Done();C.FE._Done.call(this);},_ReInit:function(
){C.FE._ReInit.call(this);this.PA._ReInit();this.V._ReInit();this.AeT._ReInit();
this.AeR._ReInit();this.Bn._ReInit();this.V.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.FE._Mark.call(this,D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Demonstrator::AccordionHeader"};C.Ba={AX:null,AR:null,
CR:null,Hs:-1,Zs:function(E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.
ab5("%s",AcM);},Zw:function(E){if(A.aa0(this.AR,E))return;this.AR=E;},AAH:function(
G){if(!this.CR.YI)return;if(this.CR.NJ)return;A.pe(this.AR,this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.Core.Bn._Init.call(this.CR={I:this},0);this.
__proto__=C.Ba;this.H(Ce);this.CR.A0(0x3F);this.CR.JV(MJ);this.CR.Kw(UY);this.CR.
DC(UX);this.CR.DM(J3);this.CR.Afg=0xF;this.CR.AFx(100);this.J(this.CR,0);this.CR.
Lo=[this,this.AAH];},_Done:function(){this.__proto__=A.Core.P;this.CR._Done();A.
Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CR.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ListItem"
};C.FE={ASr:null,Aku:null,Akt:null,BnC:function(E){if(A.aa0(this.ASr,E))return;this.
ASr=E;},A_o:function(E){if(A.aa0(this.Aku,E))return;this.Aku=E;},A_n:function(E){
if(A.aa0(this.Akt,E))return;this.Akt=E;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);this.__proto__=C.FE;this.H(Ce);},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.ASr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aku)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akt)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Demonstrator::ListHeader"};C.ANL={Dj:null
,Aa6:null,WZ:null,WY:null,WX:null,Ng:null,Nf:null,KR:null,LI:false,KH:false,BCq:
false,Ai:function(Ae){var B;A.acn.Ahy.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);
var Fw=((Ae&0x20)===0x20);var Bd7=(this.WX.ZN||this.WY.ZN)||this.WZ.ZN;if(Bd7)this.
Aa6.L(A.jb.Text);else this.Aa6.L(A.jb.Bc);this.LI=Hf;this.KH=Fw;this.BCq=Bd7;},AAC:
function(G){this.Am();if((!this.WX.ZN&&!this.WY.ZN)&&!this.WZ.ZN){var Vd=this.AKh(
this.AEI(),this.ArC());var Adf=this.AED();this.KR.Jy(Vd);if(Adf>Vd)this.Lq(Vd);A.
pe(this.Dj,this);}},A3O:function(G){this.Am();},Bl1:function(G){var B;var Gg=this.
Ng.G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Ng.Cj)?B:null);if(!CA)return;CA.R(
A.abl(Gg+1900,4,10));CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(
CA.M,[(B=this.Ng.M)[2]-B[0],this.Ng.GO]));},Bl0:function(G){var B;var Gg=this.Nf.
G6;var CA=(A.acg.Text.isPrototypeOf(B=this.Nf.Cj)?B:null);if(!CA)return;CA.R(A.abl(
Gg+1,2,10)+Tb);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(
B=this.Nf.M)[2]-B[0],this.Nf.GO]));},BlY:function(G){var B;var Gg=this.KR.G6;var
CA=(A.acg.Text.isPrototypeOf(B=this.KR.Cj)?B:null);if(!CA)return;CA.R(A.abl(Gg+1
,2,10)+Tb);CA.S(A.aaL(A.fl.Af));CA.L(A.jb.Text);CA.A6(0x12);CA.H(A.abK(CA.M,[(B=
this.KR.M)[2]-B[0],this.KR.GO]));},ArC:function(){return 1900+((((-this.Ng.Br/this.
Ng.GO)|0)+2)%200);},AkH:function(E){if(E<1900)E=1900;if(E>2100)E=2100;this.Ng.Gb(((
E-1900)-2)*-this.Ng.GO);var Vd=this.AKh(this.AEI(),E);this.KR.Jy(Vd);if(this.AED(
)>Vd)this.Lq(Vd);},AEI:function(){return 1+((((-this.Nf.Br/this.Nf.GO)|0)+2)%12);
},Us:function(E){if(E<1)E=1;if(E>12)E=12;this.Nf.Gb(((E-1)-2)*-this.Nf.GO);var Vd=
this.AKh(E,this.ArC());this.KR.Jy(Vd);if(this.AED()>Vd)this.Lq(Vd);},AED:function(
){return 1+((((-this.KR.Br/this.KR.GO)|0)+2)%this.KR.AY);},Lq:function(E){var Vd=
this.AKh(this.AEI(),this.ArC());if(E<1)E=1;if(E>Vd)E=Vd;this.KR.Gb(((E-2)-1)*-this.
KR.GO);},AKh:function(AfL,Ac7){if(AfL===2){if(!(Ac7%4)&&(!!(Ac7%100)||!(Ac7%400)
))return 29;else return 28;}else if((((AfL===4)||(AfL===6))||(AfL===9))||(AfL===
11))return 30;else return 31;},_Init:function(aArg){A.acn.Ahy._Init.call(this,aArg
);A.acg.BU._Init.call(this.Aa6={I:this},0);A.Core.H_._Init.call(this.WZ={I:this}
,0);A.Core.H_._Init.call(this.WY={I:this},0);A.Core.H_._Init.call(this.WX={I:this
},0);A.Core.CM._Init.call(this.Ng={I:this},0);A.Core.CM._Init.call(this.Nf={I:this
},0);A.Core.CM._Init.call(this.KR={I:this},0);this.__proto__=C.ANL;this.H(Aab);this.
Aa6.H(AfB);this.Aa6.Nm(3);this.Aa6.L(0xFFE1E1E1);this.Aa6.Z(true);this.WZ.H(Aac);
this.WZ.ATK(Xd);this.WZ.ATg(0.2);this.WY.H(Aad);this.WY.ATK(Xd);this.WY.ATg(0.2);
this.WX.H(Xe);this.WX.ATK(Xd);this.WX.ATg(0.2);this.Ng.H(Aac);this.Ng.ATe(true);
this.Ng.Gb(60);this.Ng.Ae8(30);this.Ng.Jy(200);this.Nf.H(Aad);this.Nf.ATe(true);
this.Nf.Gb(60);this.Nf.Ae8(30);this.Nf.Jy(12);this.KR.H(Xe);this.KR.ATe(true);this.
KR.Gb(60);this.KR.Ae8(30);this.KR.Jy(31);this.J(this.Aa6,0);this.J(this.WZ,0);this.
J(this.WY,0);this.J(this.WX,0);this.J(this.Ng,0);this.J(this.Nf,0);this.J(this.KR
,0);this.WZ.Zn=[this,this.AAC];this.WZ.SL=[this,this.A3O];this.WY.Zn=[this,this.
AAC];this.WY.SL=[this,this.A3O];this.WX.Zn=[this,this.AAC];this.WX.SL=[this,this.
A3O];this.Ng.Hm=[this,this.Bl1];this.Ng.Aw8(this.WZ);this.Nf.Hm=[this,this.Bl0];
this.Nf.Aw8(this.WY);this.KR.Hm=[this,this.BlY];this.KR.Aw8(this.WX);},_Done:function(
){this.__proto__=A.acn.Ahy;this.Aa6._Done();this.WZ._Done();this.WY._Done();this.
WX._Done();this.Ng._Done();this.Nf._Done();this.KR._Done();A.acn.Ahy._Done.call(
this);},_ReInit:function(){A.acn.Ahy._ReInit.call(this);this.Aa6._ReInit();this.
WZ._ReInit();this.WY._ReInit();this.WX._ReInit();this.Ng._ReInit();this.Nf._ReInit(
);this.KR._ReInit();},_Mark:function(D){var B;A.acn.Ahy._Mark.call(this,D);if((B=
this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ng
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePicker"
};C.AHp={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTile.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AV4={_class:function(){return A.aci.Al;},0:{FileName:"./res_index/DemonstratorWhiteTileSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[40,40],FrameDelay:0,_this:
null}};C.AhK={_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.AhK;this.H(E7);},_className:"Demonstrator::SelectionAreaContent"};C.AMD={Y:null
,Vx:null,TD:null,BB2:function(G){var B;this.TD.H(A.abI(this.TD.M,((B=this.M)[3]-
B[1])-((B=this.Vx.M)[3]-B[1])));},_Init:function(aArg){C.AhK._Init.call(this,aArg
);A.Core.Y._Init.call(this.Y={I:this},0);C.AL8._Init.call(this.Vx={I:this},0);C.
AVN._Init.call(this.TD={I:this},0);this.__proto__=C.AMD;this.Y.A0(0x3F);this.Y.H(
E7);this.Y.JT(1);this.Vx.H(AhX);this.Vx.Aj(true);this.Vx.ArX(false);this.TD.A0(0x3
);this.TD.H(KZ);this.TD.Aj(true);this.TD.N2(C.AMw);this.TD.Bnw(C.AMK);this.J(this.
Y,0);this.J(this.Vx,0);this.J(this.TD,0);this.Bb(this.TD);this.Y.Em=[this,this.BB2
];this.TD.Zs(A._GetAutoObject(A.aco.Aqh));},_Done:function(){this.__proto__=C.AhK;
this.Y._Done();this.Vx._Done();this.TD._Done();C.AhK._Done.call(this);},_ReInit:
function(){C.AhK._ReInit.call(this);this.Y._ReInit();this.Vx._ReInit();this.TD._ReInit(
);},_Mark:function(D){var B;C.AhK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::AnimalSelectionActions"};C.Vx={
_Init:function(aArg){C.AuE._Init.call(this,aArg);this.__proto__=C.Vx;this.T(A.aaR(
A.acf.A6b));},_ReInit:function(){C.AuE._ReInit.call(this);this.T(A.aaR(A.acf.A6b
));},_className:"Demonstrator::ActionsHeader"};C.AL8={Background:null,XQ:null,Y:
null,Acw:null,Acl:null,ZH:null,Acv:null,Akc:null,Akd:null,Ake:null,Akf:null,Akg:
null,Aho:false,Init:function(aArg){var B;A.zX([this,this.Bfn],[B=A._GetAutoObject(
A.aco.G1),B.AEK,B.Ar5],0);A.pe([this,this.Bfn],this);},Aku:function(G){this.ArX(
true);},Akt:function(G){this.ArX(false);},ArX:function(E){if(this.Aho===E)return;
this.Aho=E;this.XQ.ArX(E);A.pe([this,this.Bfy],this);},Bfn:function(G){var BB_=A.
_GetAutoObject(A.aco.G1).AhF===2;A._GetAutoObject(A.Device.Helper).J0(this.ZH,BB_
);},Bfy:function(G){var B;if(this.Aho)this.H(A.abI(this.M,(B=this.XQ.M)[3]-B[1])
);else this.H(A.abI(this.M,((B=this.XQ.M)[3]-B[1])+((B=this.Y.Dc(0x401))[3]-B[1]
)));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.
Background={I:this},0);C.Vx._Init.call(this.XQ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Acw._Init.call(this.Acw={I:this},0);C.Acl._Init.call(this.Acl={I:
this},0);C.ZH._Init.call(this.ZH={I:this},0);C.Acv._Init.call(this.Acv={I:this},
0);A.acg.C7._Init.call(this.Akc={I:this},0);A.acg.C7._Init.call(this.Akd={I:this
},0);A.acg.C7._Init.call(this.Ake={I:this},0);A.acg.C7._Init.call(this.Akf={I:this
},0);A.acg.C7._Init.call(this.Akg={I:this},0);this.__proto__=C.AL8;this.H(AcN);this.
Background.A0(0x3F);this.Background.H(AcN);this.XQ.A0(0x1D);this.XQ.H(Ce);this.Y.
H(Lw);this.Y.JT(1);this.Acw.H(AhY);this.Acw.Aj(true);this.Acl.H(Aoe);this.Acl.Aj(
true);this.ZH.H(Oc);this.ZH.Aj(true);this.Acv.H(Xf);this.Acv.Aj(true);this.Akc.DC(
UY);this.Akc.DM(MJ);this.Akc.L(A.jb.Bc);this.Akd.DC(Aae);this.Akd.DM(AfC);this.Akd.
L(A.jb.Bc);this.Ake.DC(AhZ);this.Ake.DM(AcO);this.Ake.L(A.jb.Bc);this.Akf.DC(UZ);
this.Akf.DM(Aof);this.Akf.L(A.jb.Bc);this.Akg.DC(Aog);this.Akg.DM(Aoh);this.Akg.
L(A.jb.Bc);this.J(this.Background,0);this.J(this.XQ,0);this.J(this.Y,0);this.J(this.
Acw,0);this.J(this.Acl,0);this.J(this.ZH,0);this.J(this.Acv,0);this.J(this.Akc,0
);this.J(this.Akd,0);this.J(this.Ake,0);this.J(this.Akf,0);this.J(this.Akg,0);this.
XQ.A_o([this,this.Aku]);this.XQ.A_n([this,this.Akt]);this.Y.Em=[this,this.Bfy];this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.
XQ._Done();this.Y._Done();this.Acw._Done();this.Acl._Done();this.ZH._Done();this.
Acv._Done();this.Akc._Done();this.Akd._Done();this.Ake._Done();this.Akf._Done();
this.Akg._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.XQ._ReInit();this.Y._ReInit();this.Acw.
_ReInit();this.Acl._ReInit();this.ZH._ReInit();this.Acv._ReInit();this.Akc._ReInit(
);this.Akd._ReInit();this.Ake._ReInit();this.Akf._ReInit();this.Akg._ReInit();},
_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Akc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ake)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Akg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsMenu"};C.Jq={
YC:null,Aha:null,Bn:null,C7:null,Af$:function(G){},A0K:function(s){this.Af$(s);}
,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.YC={
I:this},0);A.acg.Ap._Init.call(this.Aha={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acg.C7._Init.call(this.C7={I:this},0);this.__proto__=C.Jq;this.H(Ce
);this.YC.H(Aoi);this.YC.L(A.jb.Text);this.Aha.H(Alc);this.Aha.L(A.jb.Text);this.
Aha.Cv(0);this.Bn.JV(J3);this.Bn.Kw(Ob);this.Bn.DC(Qb);this.Bn.DM(MJ);this.C7.DC(
Qb);this.C7.DM(Ob);this.C7.L(A.jb.Bc);this.J(this.YC,0);this.J(this.Aha,0);this.
J(this.Bn,0);this.J(this.C7,0);this.YC.Ax(A.aaL(A.aci.TO));this.Aha.Ax(A.aaL(A.aci.
AT4));this.Bn.BL=[this,this.A0K];},_Done:function(){this.__proto__=A.Core.P;this.
YC._Done();this.Aha._Done();this.Bn._Done();this.C7._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.YC._ReInit();this.Aha.
_ReInit();this.Bn._ReInit();this.C7._ReInit();},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aha).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ActionsItem"};
C.Acl={AGA:null,DT:null,YB:null,BU:null,Nb:null,AhG:null,ANF:0,Init:function(aArg
){var B;A.zX([this,this.Bfx],[B=A._GetAutoObject(A.aco.G1),B.AEK,B.Ar5],0);A.pe([
this,this.Bfx],this);},Af$:function(G){var Iz=A.ab0(this.YB.String,0,10);var Ii=
false;switch(A._GetAutoObject(A.aco.G1).AhF){case 2:Ii=A._GetAutoObject(A.aco.G1
).BCn(Iz);break;case 0:case 1:Ii=A._GetAutoObject(A.aco.G1).Bgw(Iz);break;default:
A.ab5("%s%e",AsX,A._GetAutoObject(A.aco.G1).AhF);}if(Ii){Iz=Iz+1;this.YB.R(Iz.toFixed(
));}},Bfx:function(G){var AJl=null;var AKx=0;switch(A._GetAutoObject(A.aco.G1).AhF
){case 2:{AJl=A.aaL(A.ach.AvE);AKx=276;}break;case 0:{AJl=A.aaL(A.ach.AjY);AKx=900;
}break;case 1:{AJl=A.aaL(C.AxU);AKx=276;}break;default:A.ab5("%s%e",AsX,A._GetAutoObject(
A.aco.G1).AhF);}this.YB.R(((AKx*1000000000000)+(A.abY(this.YB.String,0,10)%1000000000000
)).toFixed());this.YC.Ax(AJl);},Bmo:function(E){var F;if(this.ANF===E)return;this.
ANF=E;if(!!this.AGA)(F=this.AGA,F[2].call(F[0],E));},Bk6:function(){return this.
ANF;},_Init:function(aArg){C.Jq._Init.call(this,aArg);A.acq.DT._Init.call(this.DT={
I:this},0);C.Akp._Init.call(this.YB={I:this},0);A.acg.BU._Init.call(this.BU={I:this
},0);A.acg.Ap._Init.call(this.Nb={I:this},0);C.AhG._Init.call(this.AhG={I:this},
0);this.__proto__=C.Acl;var B;this.DT.H(Ax7);this.DT.ArW(120);this.DT.GO=30;this.
DT.AS$(A.jb.Ri);this.DT.A9S(A.jb.CS);this.DT.A9W(A.jb.CS);this.DT.ATa(A.jb.Ri);this.
DT.A9X(A.jb.Text);this.DT.A9T(A.jb.AV);this.DT.A9Y(A.jb.Bm);this.DT.A9V(A.jb.AV);
this.DT.A9U(A.jb.Ri);this.Bn.JV(Ax8);this.Bn.DM(O7);this.YB.H(Ro);this.YB.R(Ax9);
this.YB.L(A.jb.Text);this.BU.H(U0);this.BU.Nm(2);this.BU.L(A.jb.Text);this.Nb.H(
AsY);this.Nb.L(A.jb.Text);this.Nb.A6(0xC);this.Nb.Cv(3);this.J(this.DT,-2);this.
J(this.YB,-1);this.J(this.BU,0);this.J(this.Nb,0);this.DT.Au([this,this.Bk6,this.
Bmo]);this.DT.A94(this.AhG);this.DT.ArO(A.aaL(A.fl.Bh));this.DT.AwM(A.aaL(A.fl.Bh
));this.Nb.Ax(A.aaL(A.ach.Aju));this.AGA=[B=A._GetAutoObject(A.aco.G1),B.AEK,B.Ar5
];this.Init(aArg);},_Done:function(){this.__proto__=C.Jq;this.DT._Done();this.YB.
_Done();this.BU._Done();this.Nb._Done();this.AhG._Done();C.Jq._Done.call(this);}
,_ReInit:function(){C.Jq._ReInit.call(this);this.DT._ReInit();this.YB._ReInit();
this.BU._ReInit();this.Nb._ReInit();this.AhG._ReInit();this.DT.ArO(A.aaL(A.fl.Bh
));this.DT.AwM(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Jq._Mark.call(this,D);
if((B=this.AGA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AhG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanIdAction"
};C.Acw={UK:null,OV:null,A4B:0,Init:function(aArg){var B;A.zX([this,this.BBi],[B=
A._GetAutoObject(A.aco.G1),B.ASR,B.ATD],0);A.zX([this,this.AAK],[B=A._GetAutoObject(
A.Device.Device),B.Arz,B.Ato],0);A.pe([this,this.AAK],this);},Ai:function(Ae){C.
Jq.Ai.call(this,Ae);this.OV.Z(!A._GetAutoObject(A.aco.G1).Axs);},Af$:function(G){
var B;A._GetAutoObject(A.aco.G1).Be9(this);},AAK:function(G){if(A._GetAutoObject(
A.Device.Device).TemperatureUnit!==this.A4B){switch(A._GetAutoObject(A.Device.Device
).TemperatureUnit){case 0:this.OV.R(A.abk(A._GetAutoObject(A.aco.G1).WV/100,0,1)
);break;case 1:{var Aut=A._GetAutoObject(A.Device.Converter).AVj(A._GetAutoObject(
A.aco.G1).WV/100,0,A._GetAutoObject(A.Device.Device).TemperatureUnit);this.OV.R(
A.abk(Aut,0,1));}break;default:A.ab5("%s%e",Ax_,A._GetAutoObject(A.Device.Device
).TemperatureUnit);}this.A4B=A._GetAutoObject(A.Device.Device).TemperatureUnit;}
},BA3:function(G){var B;var Agr=A.abX(this.OV.String,0);Agr=A._GetAutoObject(A.Device.
Converter).AVj(Agr,A._GetAutoObject(A.Device.Device).TemperatureUnit,0);Agr*=100;
A._GetAutoObject(A.aco.G1).AFR(Math.round(Agr)|0);},BBi:function(G){this.Am();},
_Init:function(aArg){C.Jq._Init.call(this,aArg);A.acr.UK._Init.call(this.UK={I:this
},0);C.OV._Init.call(this.OV={I:this},0);this.__proto__=C.Acw;var B;this.UK.H(Ax$
);this.UK.A_i(A.aaR(A.acf.A5q));this.OV.H(Aya);this.OV.R(Aoj);this.OV.L(A.jb.Text
);this.OV.Bmp(true);this.A4B=A._GetAutoObject(A.Device.Device).TemperatureUnit;this.
J(this.UK,0);this.J(this.OV,0);this.YC.Ax(A.aaL(A.ach.Ag7));this.UK.Au([B=A._GetAutoObject(
A.aco.G1),B.ASR,B.ATD]);this.UK.OnSetAppearance(A._GetAutoObject(A.acx.Au0));this.
OV.Dj=[this,this.BA3];this.Init(aArg);},_Done:function(){this.__proto__=C.Jq;this.
UK._Done();this.OV._Done();C.Jq._Done.call(this);},_ReInit:function(){C.Jq._ReInit.
call(this);this.UK._ReInit();this.OV._ReInit();this.UK.A_i(A.aaR(A.acf.A5q));},_Mark:
function(D){var B;C.Jq._Mark.call(this,D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::TemperatureAction"
};C.Ard={Q:null,BU:null,Bn:null,AgL:null,Am9:null,Am8:null,Ari:null,Text:null,Hp:
null,Ap:null,CX:null,Arh:null,Arj:null,Aph:false,Bl:function(aSize){this.Hp.H(A.
abK(this.Hp.M,aSize));this.BU.Axz(1);this.BU.Ju(0,40);this.BU.Fl(0,aSize[0]-20,20
,12.5,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VP(0);},Ai:
function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(
IB){if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(true);this.Ap.
Z(false);}else{if(!!this.Q)this.Text.R((F=this.Q,F[1].call(F[0])));this.AgL.Ar(false
);this.CX.Z(false);this.Ap.Z(true);}this.Aph=IB;},Af$:function(G){var B;if(!((this.
U&0x80)===0x80))this.Im().AMX(this);},A8p:function(G){},Ba7:function(s){this.A8p(
s);},Bkv:function(G){var B;var F;if(!this.Q||!(F=this.Q,F[1].call(F[0])).length)
this.CX.H(A.abM(this.CX.M,A.aaI(this.Text.M)[0]));else{this.CX.H(A.abM(this.CX.M
,this.Text.AOU(0)[2]+2));this.CX.H(A.abO(this.CX.M,this.Text.AOU(0)[1]));this.CX.
H(A.abI(this.CX.M,(B=this.Text.AOU(0))[3]-B[1]));}this.Ap.H(A.abM(this.Ap.M,this.
Text.M[0]-((B=this.Ap.M)[2]-B[0])));},A8n:function(G){},Ba6:function(s){this.A8n(
s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC],this);}
,IC:function(G){this.Am();},Bl3:function(G){var B;if(((this.U&0x80)===0x80))this.
Im().ACJ(this);},Bff:function(G){},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.Graphics.Hz._Init.call(this.BU={I:this},0);A.Core.Bn._Init.call(this.Bn={
I:this},0);A.acl.TJ._Init.call(this.AgL={I:this},0);A.Core.BK._Init.call(this.Am9={
I:this},0);A.Core.BK._Init.call(this.Am8={I:this},0);A.Core.BK._Init.call(this.Ari={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Hp._Init.call(this.
Hp={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.AL._Init.call(this.
CX={I:this},0);A.Core.BK._Init.call(this.Arh={I:this},0);A.Core.BK._Init.call(this.
Arj={I:this},0);this.__proto__=C.Ard;var B;this.H(AfD);this.Bn.A0(0x3F);this.Bn.
JV(J3);this.Bn.Kw(Aok);this.Bn.DC(IV);this.Bn.DM(Rn);this.AgL.Fr(530);this.AgL.Uq(
530);this.Am9.Filter=143;this.Am8.Filter=45;this.Ari.Filter=1;this.Text.A0(0x3F);
this.Text.H(AfD);this.Text.I$(true);this.Text.A6(0x12);this.Text.L(0xFFB3B3B3);this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nm(1);this.Ap.H(Aol);this.CX.H(AsZ);this.
CX.L(0xFFB3B3B3);this.CX.Z(false);this.Arh.Filter=138;this.Arj.Filter=137;this.J(
this.Bn,0);this.J(this.Text,0);this.J(this.Hp,0);this.J(this.Ap,0);this.J(this.CX
,0);this.Bn.Lo=[this,this.Af$];this.AgL.Q=[B=this.CX,B.Fq,B.Z];this.Am9.BL=[this
,this.Ba7];this.Am9.D1=[this,this.Ba7];this.Am8.BL=[this,this.Ba6];this.Am8.D1=[
this,this.Ba6];this.Ari.BL=[this,this.Bl3];this.Text.Q7([this,this.Bkv]);this.Text.
S(A.aaL(A.fl.Ak));this.Hp.Zx(this.BU);this.Ap.Ax(null);this.Arh.BL=[this,this.Bff
];this.Arj.BL=[this,this.Bff];},_Done:function(){this.__proto__=A.Core.P;this.BU.
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
};C.Aes={Background:null,Yr:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);C.Yr._Init.call(this.Yr={I:this
},0);this.__proto__=C.Aes;var B;this.H(Xg);this.Background.H(Xg);this.Yr.A0(0x1D
);this.Yr.H(As0);this.J(this.Background,0);this.J(this.Yr,0);this.Yr.Au([B=A._GetAutoObject(
A.aco.AgO),B.A9e,B.AFM]);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Yr._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P.
_ReInit.call(this);this.Background._ReInit();this.Yr._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::FilterRow"
};C.OV={Init:function(aArg){var B;A.zX([this,this.AAK],[B=A._GetAutoObject(A.Device.
Device),B.Arz,B.Ato],0);A.pe([this,this.AAK],this);},Ai:function(Ae){var B;C.Akp.
Ai.call(this,Ae);var IB=((this.U&0x40)===0x40);if(!IB&&(this.String.length>0))this.
Text.R(((this.String+As1)+A._GetAutoObject(A.acj.Temperature).AlM())+String.fromCharCode(
0x0A));else this.Text.R(this.String+String.fromCharCode(0x0A));if(this.D6>this.String.
length)this.D6=this.String.length;},AAK:function(G){this.Am();},_Init:function(aArg
){C.Akp._Init.call(this,aArg);this.__proto__=C.OV;this.Init(aArg);},_className:"Demonstrator::TemperatureInputView"
};C.Akp={B6:null,Dj:null,IW:null,Cq:null,AmF:null,Sg:null,KN:null,Bn:null,Text:null
,CX:null,Aqx:null,Asf:null,BU:null,Hp:null,Arv:null,Aq2:null,AqK:null,String:A.jV
,D6:0,AQ:0xFFB3B3B3,Av1:15,ANN:false,LA:false,Bl:function(aSize){this.Hp.H(A.abK(
this.Hp.M,aSize));this.BU.Axz(1);this.BU.Ju(0,40);this.BU.Fl(0,aSize[0]-20,20,12.5
,12.5,-90,90,10);this.BU.Fl(0,20,20,12.5,12.5,90,270,10);this.BU.VP(0);},Ai:function(
Ae){var B;A.acn.Jd.Ai.call(this,Ae);if(((Ae&0x40)===0x40))this.IW.Ar(true);else{
this.IW.Ar(false);this.CX.Z(false);}},A4L:function(G){var B;var Bd=this.Text.M;var
Nz=0;var NA=0;if(this.CX.Et[0]<Bd[0])Nz=Bd[0]-this.CX.Et[0];if(this.CX.Et[0]>Bd[
2])Nz=Bd[2]-this.CX.Et[0];if(this.CX.Et[1]<Bd[1])NA=Bd[1]-this.CX.Et[1];if(this.
CX.ED[1]>Bd[3])NA=Bd[3]-this.CX.ED[1];if(!!Nz||!!NA)this.Text.Gb(A.abf(this.Text.
Br,[Nz,NA]));Nz=this.Text.Br[0];NA=this.Text.Br[1];var C5=[(B=this.Text.Dc())[2]-
B[0],B[3]-B[1]];if(C5[0]<=((B=this.Text.M)[2]-B[0]))Nz=0;if(C5[1]<=((B=this.Text.
M)[3]-B[1]))NA=0;this.Text.Gb([Nz,NA]);},Amn:function(G){if(!this.B6)return;var A4b=
this.Text.AGW(this.D6);var pos=this.Text.Afh(A4b);this.CX.DM(A.abe(pos,[0,this.B6.
Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent]));if(this.IW.Bw){this.IW.Ar(false
);this.IW.Ar(true);}if(this.LA){A.pe([this,this.A4L],this);this.LA=false;}},AAG:
function(G){if(!this.A69(0x80))this.Im().AMX(this);var EH=this.Text.AT8(this.Bn.
H1);var Vi=this.Text.AnS(EH);if(Vi!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this
);this.LA=true;}},AAA:function(G){if(!this.B6)return;var EH=this.Text.AGW(this.D6
);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0
],EH[1]-1];EH=[this.Text.AC8(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){EH=[EH[0]+
1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1]];}}var Vi=
this.Text.AnS(EH);if(Vi!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this);this.LA=
true;}},Be0:function(G){if(!this.D6)return;this.R(A.ab1(this.String,this.D6-1,1)
);this.D6=this.D6-1;this.LA=true;A.pe(this.Dj,this);},AAB:function(G){if(this.D6>=
this.String.length)return;this.R(A.ab1(this.String,this.D6,1));this.LA=true;A.pe(
this.Dj,this);},Be5:function(G){if(this.String.length>=this.Av1)return;var Bzl=this.
KN.DQ;var Aur=String.fromCharCode(Bzl);this.R(A.abU(this.String,Aur,this.D6));this.
D6=this.D6+Aur.length;this.LA=true;A.pe(this.Dj,this);},R:function(E){if(this.String===
E)return;this.String=E;if(this.D6>(E.length+1))this.D6=E.length;this.Text.R(E+String.
fromCharCode(0x0A));this.LA=true;this.Text.Gb(J3);},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.Text.L(E);this.CX.L(E);this.Hp.L(E);},S:function(E){if(this.
B6===E)return;this.B6=E;this.Text.S(E);this.LA=true;this.Text.Gb(J3);},Bfg:function(
G){if(this.ANN===false)return;if(this.String.indexOf(String.fromCharCode(0x2E),0
)>=0)return;if(this.String.length>=this.Av1)return;this.R(A.abU(this.String,Tb,this.
D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Dj,this);},BbS:function(s){this.Bfg(
s);},Bmp:function(E){if(this.ANN===E)return;this.ANN=E;if(E===false){var BfZ=this.
String.indexOf(String.fromCharCode(0x2E),0);if(BfZ>=0)this.R(A.abV(this.String,BfZ
));}this.LA=true;this.Text.Gb(J3);},Bnv:function(E){if(this.Av1===E)return;this.
Av1=E;this.R(A.abV(this.String,E));this.LA=true;this.Text.Gb(J3);},BA$:function(
G){if(this.A69(0x80)){this.Im().ACJ(this);this.Cs(0x10,0x0);}this.Am();},BAY:function(
G){var Vi=this.String.length;if(Vi!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this
);this.LA=true;}},BA2:function(G){if(!!this.D6){this.D6=0;A.pe([this,this.Amn],this
);this.LA=true;}},_Init:function(aArg){A.acn.Jd._Init.call(this,aArg);A.acl.TJ._Init.
call(this.IW={I:this},0);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.BK._Init.
call(this.AmF={I:this},0);A.Core.BK._Init.call(this.Sg={I:this},0);A.Core.BK._Init.
call(this.KN={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.C7._Init.call(this.CX={I:this},0);A.Core.BK._Init.
call(this.Aqx={I:this},0);A.Core.BK._Init.call(this.Asf={I:this},0);A.Graphics.Hz.
_Init.call(this.BU={I:this},0);A.acg.Hp._Init.call(this.Hp={I:this},0);A.Core.BK.
_Init.call(this.Arv={I:this},0);A.Core.BK._Init.call(this.Aq2={I:this},0);A.Core.
BK._Init.call(this.AqK={I:this},0);this.__proto__=C.Akp;var B;this.H(AfD);this.IW.
B2=false;this.IW.Cx=true;this.IW.Fr(500);this.IW.Uq(500);this.Cq.Filter=147;this.
AmF.Filter=45;this.Sg.Filter=44;this.KN.Filter=143;this.Bn.A0(0x3F);this.Bn.JV(Rn
);this.Bn.Kw(IV);this.Bn.DC(Aok);this.Bn.DM(J3);this.Bn.AFx(3);this.Text.A0(0x3F
);this.Text.H(AfD);this.Text.KS(false);this.Text.A6(0x12);this.Text.R(A.jV);this.
Text.L(0xFFB3B3B3);this.CX.DC(As2);this.CX.DM(Aom);this.CX.A_X(2);this.CX.A_W(2);
this.CX.L(0xFFB3B3B3);this.CX.Z(false);this.Aqx.Filter=138;this.Asf.Filter=137;this.
Hp.H(AfD);this.Hp.L(0xFFB3B3B3);this.Hp.Nm(1);this.Arv.Filter=1;this.Aq2.Filter=
41;this.AqK.Filter=42;this.J(this.Bn,0);this.J(this.Text,0);this.J(this.CX,0);this.
J(this.Hp,0);this.IW.Q=[B=this.CX,B.Fq,B.Z];this.Cq.BL=[this,this.AAA];this.Cq.D1=[
this,this.AAA];this.AmF.BL=[this,this.Be0];this.AmF.D1=[this,this.Be0];this.Sg.BL=[
this,this.AAB];this.Sg.D1=[this,this.AAB];this.KN.BL=[this,this.Be5];this.KN.D1=[
this,this.Be5];this.Bn.BL=[this,this.AAG];this.Text.Q7([this,this.Amn]);this.Text.
S(A.aaL(A.fl.Ak));this.B6=A.aaL(A.fl.Ak);this.Aqx.BL=[this,this.BbS];this.Asf.BL=[
this,this.BbS];this.Hp.Zx(this.BU);this.Arv.BL=[this,this.BA$];this.Aq2.BL=[this
,this.BA2];this.AqK.BL=[this,this.BAY];},_Done:function(){this.__proto__=A.acn.Jd;
this.IW._Done();this.Cq._Done();this.AmF._Done();this.Sg._Done();this.KN._Done();
this.Bn._Done();this.Text._Done();this.CX._Done();this.Aqx._Done();this.Asf._Done(
);this.BU._Done();this.Hp._Done();this.Arv._Done();this.Aq2._Done();this.AqK._Done(
);A.acn.Jd._Done.call(this);},_ReInit:function(){A.acn.Jd._ReInit.call(this);this.
IW._ReInit();this.Cq._ReInit();this.AmF._ReInit();this.Sg._ReInit();this.KN._ReInit(
);this.Bn._ReInit();this.Text._ReInit();this.CX._ReInit();this.Aqx._ReInit();this.
Asf._ReInit();this.BU._ReInit();this.Hp._ReInit();this.Arv._ReInit();this.Aq2._ReInit(
);this.AqK._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.acn.Jd._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aqx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Asf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Hp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aq2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Demonstrator::NumberInput"};C.Acv={LabelDataSync:
null,Af$:function(G){var B;A.pe([B=A._GetAutoObject(A.acs.Acp),B.BCy],this);},_Init:
function(aArg){C.Jq._Init.call(this,aArg);A.kR.CG._Init.call(this.LabelDataSync={
I:this},0);this.__proto__=C.Acv;this.LabelDataSync.H(As3);this.LabelDataSync.R(A.
aaR(A.acf.A52));this.LabelDataSync.L(A.jb.Text);this.J(this.LabelDataSync,0);this.
YC.Ax(A.aaL(C.AVa));this.LabelDataSync.S(A.aaL(A.fl.Af));this.LabelDataSync.AZ(A.
aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Jq;this.LabelDataSync._Done();
C.Jq._Done.call(this);},_ReInit:function(){C.Jq._ReInit.call(this);this.LabelDataSync.
_ReInit();this.LabelDataSync.R(A.aaR(A.acf.A52));this.LabelDataSync.S(A.aaL(A.fl.
Af));this.LabelDataSync.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Jq._Mark.
call(this,D);if((B=this.LabelDataSync)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Demonstrator::SyncAction"};C.AVa={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorSyncIcon.png",Format:A._PIXEL_FORMAT_NATIVE,NoOfFrames:
1,FrameSize:[50,60],FrameDelay:0,_this:null}};C.Abd={TimespanDaysToString:null,Avx:
function(aIndex){if(this.AqV()>aIndex)return this.TimespanDaysToString.BS(aIndex
);A.ab5("%s",Ald);return A.jV;},AqV:function(){return 4;},C6:function(aIndex){var
Ajb=0;switch(aIndex){case 0:Ajb=0;break;case 1:Ajb=1;break;case 2:Ajb=2;break;case
3:Ajb=3;break;default:throw new Error(Ayb+aIndex.toFixed());}return Ajb;},_Init:
function(aArg){A.acq.VQ._Init.call(this,aArg);A.Device.TimespanDaysToString._Init.
call(this.TimespanDaysToString={I:this},0);this.__proto__=C.Abd;},_Done:function(
){this.__proto__=A.acq.VQ;this.TimespanDaysToString._Done();A.acq.VQ._Done.call(
this);},_ReInit:function(){A.acq.VQ._ReInit.call(this);this.TimespanDaysToString.
_ReInit();},_Mark:function(D){var B;A.acq.VQ._Mark.call(this,D);if((B=this.TimespanDaysToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::DatePickerUnitDD"};C.
BGk={GL:0,AVT:1,Hk:2,Year:3};C.ACG={_class:function(){return A.aci.Al;},0:{FileName:
"./res_index/DemonstratorEarTagIcon.png",Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:
2,FrameSize:[37,37],FrameDelay:0,_this:null}};C.AxU={_class:function(){return A.
aci.Al;},0:{FileName:"./res_index/DemonstratorTransponderEarTagIcon.png",Format:
A._PIXEL_FORMAT_ALPHA8,NoOfFrames:2,FrameSize:[37,37],FrameDelay:0,_this:null}};
C.ZH={Aeh:null,Init:function(aArg){var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(
A._GetAutoObject(A.Device.Helper).Dv());var A1T=Av.Format(It);this.Aeh.R(A1T);},
Af$:function(G){var B;var J9=this.Aeh.String;var O;O=J9.indexOf(String.fromCharCode(
0x2E),0);while(O>=0){J9=A.ab1(J9,O,1);O=J9.indexOf(String.fromCharCode(0x2E),O);
}J9=J9+Ayc;J9=J9+A._GetAutoObject(A.acj.VG).AC3(J9).toFixed();var A1T=A._GetAutoObject(
A.Device.AnM).BfO(J9);A._GetAutoObject(A.aco.G1).BCo(((B=(A1T|0))<0)?B+0x100000000:
B);},_Init:function(aArg){C.Jq._Init.call(this,aArg);C.ANK._Init.call(this.Aeh={
I:this},0);this.__proto__=C.ZH;this.Aeh.H(Ro);this.Aeh.L(A.jb.Text);this.Aeh.Bnv(
10);this.J(this.Aeh,-1);this.YC.Ax(A.aaL(A.ach.AvE));this.Init(aArg);},_Done:function(
){this.__proto__=C.Jq;this.Aeh._Done();C.Jq._Done.call(this);},_ReInit:function(
){C.Jq._ReInit.call(this);this.Aeh._ReInit();},_Mark:function(D){var B;C.Jq._Mark.
call(this,D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanDateAction"
};C.AhF={BGy:0,BGu:1,VG:2,LAST:3};C.AhG={AhH:null,Avx:function(aIndex){if(this.AqV(
)>aIndex)return this.AhH.BS(aIndex);A.ab5("%s",Ald);return A.jV;},AqV:function(){
return 3;},_Init:function(aArg){A.acq.VQ._Init.call(this,aArg);C.AhH._Init.call(
this.AhH={I:this},0);this.__proto__=C.AhG;},_Done:function(){this.__proto__=A.acq.
VQ;this.AhH._Done();A.acq.VQ._Done.call(this);},_ReInit:function(){A.acq.VQ._ReInit.
call(this);this.AhH._ReInit();},_Mark:function(D){var B;A.acq.VQ._Mark.call(this
,D);if((B=this.AhH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Demonstrator::ScanTypeDD"
};C.AhH={BS:function(A9){var Bdh=A9;var AK4=A.jV;switch(Bdh){case 2:AK4=A.aaR(A.
acf.VG);break;case 0:AK4=A.aaR(A.acf.Transponder);break;case 1:AK4=A.aaR(A.acf.BiM
);break;default:throw new Error(Ayd+Bdh.toFixed());}return AK4;},_Init:function(
aArg){A.Device.EnumToString._Init.call(this,aArg);this.__proto__=C.AhH;},_className:
"Demonstrator::ScanTypeToString"};C.ANK={Bfg:function(G){var Bf0=0;var O=this.String.
indexOf(String.fromCharCode(0x2E),0);while(O>=0){Bf0++;O++;O=this.String.indexOf(
String.fromCharCode(0x2E),O);}if(Bf0>=2)return;if(this.String.length>=this.Av1)return;
this.R(A.abU(this.String,Tb,this.D6));this.D6=this.D6+1;this.LA=true;A.pe(this.Dj
,this);},_Init:function(aArg){C.Akp._Init.call(this,aArg);this.__proto__=C.ANK;}
,_className:"Demonstrator::DateInput"};
C._Init=function(){C.AVN.__proto__=A.acn.Menu;C.AUI.__proto__=A.Core.P;C.AMw.__proto__=
C.Ba;C.Mk.__proto__=A.Core.P;C.Yr.__proto__=C.Ard;C.Abe.__proto__=A.Core.P;C.AvH.
__proto__=A.acn.AhA;C.AMK.__proto__=C.FE;C.AuE.__proto__=C.FE;C.Ba.__proto__=A.Core.
P;C.FE.__proto__=A.Core.P;C.ANL.__proto__=A.acn.Ahy;C.AhK.__proto__=A.Core.P;C.AMD.
__proto__=C.AhK;C.Vx.__proto__=C.AuE;C.AL8.__proto__=A.Core.P;C.Jq.__proto__=A.Core.
P;C.Acl.__proto__=C.Jq;C.Acw.__proto__=C.Jq;C.Ard.__proto__=A.Core.P;C.Aes.__proto__=
A.Core.P;C.OV.__proto__=C.Akp;C.Akp.__proto__=A.acn.Jd;C.Acv.__proto__=C.Jq;C.Abd.
__proto__=A.acq.VQ;C.ZH.__proto__=C.Jq;C.AhG.__proto__=A.acq.VQ;C.AhH.__proto__=
A.Device.EnumToString;C.ANK.__proto__=C.Akp;};C._ReInit=function(){};C.DH=function(
D){var B;if((B=C.Background[0]._this)&&(B._cycle!=D))B._Done(C.Background[0]._this=
null);if((B=C.AM7[0]._this)&&(B._cycle!=D))B._Done(C.AM7[0]._this=null);if((B=C.
AM8[0]._this)&&(B._cycle!=D))B._Done(C.AM8[0]._this=null);if((B=C.AM9[0]._this)&&(
B._cycle!=D))B._Done(C.AM9[0]._this=null);if((B=C.AM_[0]._this)&&(B._cycle!=D))B.
_Done(C.AM_[0]._this=null);if((B=C.AQb[0]._this)&&(B._cycle!=D))B._Done(C.AQb[0].
_this=null);if((B=C.Filter[0]._this)&&(B._cycle!=D))B._Done(C.Filter[0]._this=null
);if((B=C.ARW[0]._this)&&(B._cycle!=D))B._Done(C.ARW[0]._this=null);if((B=C.Ajt[
0]._this)&&(B._cycle!=D))B._Done(C.Ajt[0]._this=null);if((B=C.AMN[0]._this)&&(B.
_cycle!=D))B._Done(C.AMN[0]._this=null);if((B=C.Asv[0]._this)&&(B._cycle!=D))B._Done(
C.Asv[0]._this=null);if((B=C.AVf[0]._this)&&(B._cycle!=D))B._Done(C.AVf[0]._this=
null);if((B=C.AHp[0]._this)&&(B._cycle!=D))B._Done(C.AHp[0]._this=null);if((B=C.
AV4[0]._this)&&(B._cycle!=D))B._Done(C.AV4[0]._this=null);if((B=C.AVa[0]._this)&&(
B._cycle!=D))B._Done(C.AVa[0]._this=null);if((B=C.ACG[0]._this)&&(B._cycle!=D))B.
_Done(C.ACG[0]._this=null);if((B=C.AxU[0]._this)&&(B._cycle!=D))B._Done(C.AxU[0].
_this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */